#!/usr/bin/env python3
"""Revisa que todos los vídeos de YouTube de la web se puedan seguir viendo insertados.

Uso:
  node build.js                                  # primero, para que dist/ esté al día
  python3 tools/revisar-videos.py                # revisa y escribe tools/videos-rotos.json
  python3 tools/revisar-videos.py --candidatos   # además busca hasta 4 sustitutos por vídeo roto
  python3 tools/revisar-videos.py --sustituir VIEJO NUEVO [VISTAS]
                                                 # cambia un id por otro en src/ (título y canal incluidos)

Un vídeo está roto cuando el oEmbed de YouTube responde 401 (inserción desactivada), 403 o 404
(borrado o privado). Otros errores (red, 429, 5xx) se reintentan y, si persisten, se marcan como
«dudoso» y no cuentan como rotos. Sale con código 1 si hay algún vídeo roto.
"""
import json, os, re, subprocess, sys, time, urllib.error, urllib.request, html as H
from concurrent.futures import ThreadPoolExecutor

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST, SRC = os.path.join(RAIZ, "dist"), os.path.join(RAIZ, "src")
SALIDA = os.path.join(RAIZ, "tools", "videos-rotos.json")
UA = {"User-Agent": "Mozilla/5.0"}
RE_ID = re.compile(r"(?:youtube(?:-nocookie)?\.com/embed/|youtu\.be/|ytimg\.com/vi/|data-yt=\")([A-Za-z0-9_-]{11})")


def oembed(v):
    url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={v}&format=json"
    for intento in range(4):
        try:
            return 200, json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=20))
        except urllib.error.HTTPError as e:
            if e.code in (401, 403, 404):
                return e.code, None
            err = e.code
        except Exception as e:
            err = type(e).__name__
        time.sleep(2 * (intento + 1))
    return err, None


def paginas():
    usos = {}
    for d, _, fs in os.walk(DIST):
        if "index.html" not in fs or d.endswith("/ficha") or "/blog" in d:
            continue
        s = open(os.path.join(d, "index.html"), encoding="utf-8").read()
        rel = os.path.relpath(d, DIST)
        for v in set(RE_ID.findall(s)):
            usos.setdefault(v, []).append(rel)
    return usos


def h1(rel):
    s = open(os.path.join(DIST, rel, "index.html"), encoding="utf-8").read()
    m = re.search(r"<h1[^>]*>(.*?)</h1>", s, re.S)
    return H.unescape(re.sub("<[^>]+>", "", m.group(1))).strip() if m else rel


def consulta(rel):
    partes = rel.split("/")
    t = h1(rel)
    if len(partes) < 3:
        return t
    mat = partes[2]
    if "ingles" in mat:
        return t + " English lesson"
    if "frances" in mat:
        return t + " français"
    if "catal" in mat or "valenci" in mat:
        return t
    return t + (" para niños" if partes[0] in ("infantil", "primaria") else "")


def usados():
    return set(paginas())


def candidatos(rel, viejo, ya):
    q = consulta(rel)
    try:
        res = json.loads(subprocess.run([sys.executable, "-I", os.path.join(RAIZ, "tools", "videos.py"), q, "12"],
                                        capture_output=True, text=True, timeout=120).stdout or "[]")
    except Exception:
        res = []
    out = []
    for x in res:
        if x["id"] in ya or x["id"] == viejo or (x.get("segundos") or 0) > 1500:
            continue
        if oembed(x["id"])[0] == 200:
            out.append({"id": x["id"], "titulo": x["titulo"], "canal": x["canal"], "vistas": x["vistas"], "segundos": x.get("segundos")})
        if len(out) >= 4:
            break
    return q, out


def revisar(con_candidatos):
    usos = paginas()
    ids = sorted(usos)
    print(f"Revisando {len(ids)} vídeos…", flush=True)
    with ThreadPoolExecutor(8) as ex:
        estados = dict(zip(ids, ex.map(lambda v: oembed(v)[0], ids)))
    rotos = [v for v in ids if estados[v] in (401, 403, 404)]
    dudosos = [v for v in ids if estados[v] not in (200, 401, 403, 404)]
    informe = {"fecha": time.strftime("%Y-%m-%d"), "total": len(ids), "rotos": [], "dudosos": dudosos}
    ya = set(ids)
    for v in rotos:
        e = {"id": v, "estado": estados[v], "paginas": usos[v], "titulo_pagina": h1(usos[v][0]),
             "ficheros": subprocess.run(["grep", "-rlF", "--", v, SRC], capture_output=True, text=True).stdout.split()}
        if con_candidatos:
            e["consulta"], e["candidatos"] = candidatos(usos[v][0], v, ya)
        informe["rotos"].append(e)
        print(f"ROTO {v} ({estados[v]}) en {', '.join(usos[v])}", flush=True)
    json.dump(informe, open(SALIDA, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"Rotos: {len(rotos)} · dudosos: {len(dudosos)} · informe en tools/videos-rotos.json")
    return 1 if rotos else 0


def js(x):
    return json.dumps(x, ensure_ascii=False)


def sustituir(viejo, nuevo, vistas=0):
    est, meta = oembed(nuevo)
    if est != 200:
        sys.exit(f"{nuevo} no se puede insertar ({est})")
    t, c, v = meta["title"], meta["author_name"], int(vistas)
    S = r'"(?:[^"\\]|\\.)*"'
    o = re.escape(viejo)
    pats = [
        (r'"' + o + r'"(\s*,\s*)' + S + r'(\s*,\s*)' + S + r'(\s*,\s*)\d+',
         lambda m: f'"{nuevo}"{m[1]}{js(t)}{m[2]}{js(c)}{m[3]}{v}'),
        (r'id:\s*"' + o + r'"(\s*,\s*)titulo:\s*' + S + r'(\s*,\s*)canal:\s*' + S + r'(\s*,\s*)vistas:\s*\d+',
         lambda m: f'id: "{nuevo}"{m[1]}titulo: {js(t)}{m[2]}canal: {js(c)}{m[3]}vistas: {v}'),
        (r'id:\s*"' + o + r'"(\s*,\s*)canal:\s*' + S + r'(\s*,\s*)vistas:\s*\d+',
         lambda m: f'id: "{nuevo}"{m[1]}canal: {js(c)}{m[2]}vistas: {v}'),
        (r'"id"\s*:\s*"' + o + r'"(\s*,\s*)"titulo"\s*:\s*' + S,
         lambda m: f'"id":"{nuevo}"{m[1]}"titulo":{js(t)}'),
        (r'"' + o + r'"(\s*:\s*\[\s*)' + S + r'(\s*,\s*)' + S + r'(\s*,\s*)\d+',
         lambda m: f'"{nuevo}"{m[1]}{js(t)}{m[2]}{js(c)}{m[3]}{v}'),
    ]
    ficheros = subprocess.run(["grep", "-rlF", "--", viejo, SRC], capture_output=True, text=True).stdout.split()
    if not ficheros:
        sys.exit(f"{viejo} no aparece en src/")
    for f in ficheros:
        s = open(f, encoding="utf-8").read()
        for p, r in pats:
            s = re.sub(p, r, s)
        s = s.replace(viejo, nuevo)  # referencias sueltas, p. ej. vid("ID")
        open(f, "w", encoding="utf-8").write(s)
        print(f"{os.path.relpath(f, RAIZ)}: {viejo} → {nuevo} «{t}» ({c})")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["--sustituir"]:
        sustituir(*a[1:4])
    else:
        sys.exit(revisar("--candidatos" in a))
