#!/usr/bin/env python3
"""Busca en YouTube los vídeos más vistos sobre un tema y muestra visitas, «me gusta», duración y canal.
Uso: python3 tools/videos.py "fracciones equivalentes" [n]
No necesita clave: lee la página pública de resultados. Si se pone una clave en la variable de entorno
YOUTUBE_API_KEY (nunca en el repositorio), se podría usar la API oficial en su lugar."""
import json, re, sys, urllib.parse, urllib.request

H = {"User-Agent": "Mozilla/5.0", "Accept-Language": "es-ES,es;q=0.9"}


def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=H), timeout=25).read().decode("utf-8", "replace")


def initial_data(html):
    m = re.search(r"var ytInitialData = (\{.*?\});</script>", html, re.S)
    return json.loads(m.group(1)) if m else {}


def walk(o, key):
    if isinstance(o, dict):
        for k, v in o.items():
            if k == key:
                yield v
            yield from walk(v, key)
    elif isinstance(o, list):
        for v in o:
            yield from walk(v, key)


def num(t):
    d = re.sub(r"[^\d]", "", t or "")
    return int(d) if d else 0


def secs(t):
    p = [int(x) for x in (t or "0").split(":") if x.isdigit()]
    s = 0
    for x in p:
        s = s * 60 + x
    return s


def likes(vid):
    try:
        html = get(f"https://www.youtube.com/watch?v={vid}")
    except Exception:
        return 0
    m = (re.search(r"Me gusta en este vídeo junto con otras ([\d.,]+)", html)
         or re.search(r"along with ([\d,]+) other", html)
         or re.search(r'"likeCount":"?(\d+)', html))
    return num(m.group(1)) if m else 0


def buscar(q, n=5):
    html = get("https://www.youtube.com/results?search_query=" + urllib.parse.quote(q))
    out = []
    for v in walk(initial_data(html), "videoRenderer"):
        vid = v.get("videoId")
        title = "".join(r.get("text", "") for r in v.get("title", {}).get("runs", []))
        canal = "".join(r.get("text", "") for r in v.get("ownerText", {}).get("runs", []))
        vistas = num(v.get("viewCountText", {}).get("simpleText", ""))
        dur = secs(v.get("lengthText", {}).get("simpleText", "0"))
        if vid and 90 <= dur <= 1200:
            out.append({"id": vid, "titulo": title, "canal": canal, "vistas": vistas, "segundos": dur})
    out.sort(key=lambda x: -x["vistas"])
    out = out[:n]
    for o in out:
        o["megusta"] = likes(o["id"])
    return out


if __name__ == "__main__":
    q = sys.argv[1]
    n = int(sys.argv[2]) if len(sys.argv) > 2 else 5
    print(json.dumps(buscar(q, n), ensure_ascii=False, indent=1))
