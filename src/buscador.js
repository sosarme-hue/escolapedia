// Índice del buscador: cursos, materias, temas (con sus palabras clave) y páginas de PAU, familias y profesores.
// Se genera en dos ficheros para que la portada cargue rápido:
//   assets/buscador.js         → window.EPIX  (cursos, materias, títulos de temas y otras páginas)
//   assets/buscador-claves.js  → window.EPKW  (palabras clave y del glosario de cada tema, se carga después)
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const norm = (t) => String(t).toLowerCase().replace(/l·l/g, "ll").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const sinHtml = (t) => String(t).replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
const VACIAS = new Set("para como entre sobre desde hasta segun sus los las del una uno unos unas que con por mas the and with".split(" "));
const ETAPA_CORTA = { infantil: "", primaria: "Prim", eso: "ESO", bachillerato: "Bach" };

// Texto completo de un tema (lectura, apartados, objetivos, glosario), sin dibujos ni etiquetas.
const textoDe = (o) => [o.lectura && o.lectura.html, o.lectura && o.lectura.titulo, ...(o.bloques || []).map((b) => b.html), ...(o.objetivos || []), ...(o.glosario || []).map((g) => g.join(" ")), o.pregunta, ...(o.tarjetas || []).map((x) => [].concat(x).join(" "))]
  .filter(Boolean).join(" ").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");

function preparar({ ETAPAS, TEMAS }) {
  const C = [], M = [], T = [], K = [], TX = new Map();
  for (const e of ETAPAS) for (const c of e.cursos) {
    const ci = C.length;
    const corto = e.slug === "infantil" ? c.nombre : `${c.nombre} ${ETAPA_CORTA[e.slug]}`;
    // [nombre largo, nombre corto, etapa, url]
    C.push([c.largo || `Infantil ${c.nombre}`, corto, e.slug, `${e.slug}/${c.slug}/`]);
    for (const m of c.materias) {
      const mi = M.length;
      // [nombre, curso, url, nº de temas]
      M.push([m.nombre, ci, m.url, m.temasObj.length]);
      for (const t of m.temasObj) {
        T.push([t.titulo, mi]);
        const o = TEMAS[`${c.slug}|${m.nombre}|${t.titulo}`] || {};
        const ya = new Set(norm(`${t.titulo} ${m.nombre}`).split(" "));
        const pal = [...(o.claves || []), ...(o.glosario || []).map((g) => g[0])].map(sinHtml).join(" ");
        K.push([...new Set(norm(pal).split(" ").filter((w) => w.length >= 4 && !ya.has(w) && !VACIAS.has(w)))].join(" "));
        // Índice inverso del texto: palabra → temas donde aparece.
        const ti = T.length - 1;
        for (const w of new Set(norm(textoDe(o)).split(" "))) {
          if (w.length < 4 || /^\d+$/.test(w) || ya.has(w) || VACIAS.has(w)) continue;
          let l = TX.get(w); if (!l) TX.set(w, (l = [])); l.push(ti);
        }
      }
    }
  }
  const datos = JSON.stringify({ c: C, m: M, t: T });
  const claves = JSON.stringify(K);
  // Las palabras muy frecuentes no ayudan a encontrar nada; el resto se reparte en ficheros por sus dos primeras letras.
  const trozos = {};
  for (const [w, l] of [...TX].sort((a, b) => (a[0] < b[0] ? -1 : 1))) {
    if (l.length > 150) continue;
    const k = w.slice(0, 2); (trozos[k] = trozos[k] || {})[w] = l;
  }
  const texto = Object.fromEntries(Object.entries(trozos).map(([k, v]) => [k, `window.EPTX&&EPTX(${JSON.stringify(k)},${JSON.stringify(v)});`]));
  const h = crypto.createHash("md5").update(datos + claves); for (const k of Object.keys(texto).sort()) h.update(texto[k]);
  return { C, M, T, K, datos, claves, texto, version: h.digest("hex").slice(0, 8) };
}

function escribir(ix, { TITULOS, OUT }) {
  // Otras páginas útiles: PAU (materias, resúmenes, fechas, notas…), familias y profesores.
  const P = [];
  for (const [rel, titulo] of Object.entries(TITULOS)) {
    if (!/^(pau|familias|profesores)(\/|$)/.test(rel)) continue;
    if (/\/(ficha|examen(-\d+)?|modelo-\d+)$/.test(rel)) continue;
    P.push([titulo.replace(/ · Escolapedia$/, ""), `${rel}/`]);
  }
  const datos = ix.datos.replace(/\}$/, `,"p":${JSON.stringify(P)}}`);
  fs.writeFileSync(path.join(OUT, "assets/buscador.js"), `window.EPIX=${datos};`);
  fs.writeFileSync(path.join(OUT, "assets/buscador-claves.js"), `window.EPKW=${ix.claves};`);
  const dir = path.join(OUT, "assets/texto");
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  for (const [k, v] of Object.entries(ix.texto)) fs.writeFileSync(path.join(dir, `${k}.js`), v);
  // El índice antiguo ya no se usa.
  const viejo = path.join(OUT, "assets/indice.js");
  if (fs.existsSync(viejo)) fs.unlinkSync(viejo);
  return P.length;
}

module.exports = { preparar, escribir, norm };
