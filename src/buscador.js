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

function preparar({ ETAPAS, TEMAS }) {
  const C = [], M = [], T = [], K = [];
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
      }
    }
  }
  const datos = JSON.stringify({ c: C, m: M, t: T });
  const claves = JSON.stringify(K);
  return { C, M, T, K, datos, claves, version: crypto.createHash("md5").update(datos + claves).digest("hex").slice(0, 8) };
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
  // El índice antiguo ya no se usa.
  const viejo = path.join(OUT, "assets/indice.js");
  if (fs.existsSync(viejo)) fs.unlinkSync(viejo);
  return P.length;
}

module.exports = { preparar, escribir, norm };
