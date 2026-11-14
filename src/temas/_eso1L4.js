// Ayudas del lote 4 de 1º ESO nivel libro (Geografía e Historia e Inglés).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos de _eso4L4.js (texto partido en líneas) y de _lenguas.js, y las figuras y vídeos del lote D de 1º.
const { mapa: mapaBase } = require("./_util");
const { linea, cajas, flujo, barras, versus, piramide, rueda } = require("./_eso4L4");
const L = require("./_lenguas");
const { H, vid } = require("./_eso1d");
const VD = require("./_eso1d-videos");

// Bloque: título numerado, html, dibujo y vídeo opcional.
const B = (h, html, svg, video) => ({ html: `<h3>${h}</h3>${html}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });

// Pregunta de 4 opciones: la correcta va primera en el fichero y aquí cambia de sitio.
let nq = 0;
const Q = ([q, o, e]) => {
  const k = (nq++ * 7 + q.length) % o.length;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
};
const QS = (xs) => xs.map(Q);

// Ejercicios por niveles: listas de [enunciado, solución].
const EJ = (bas, med, av) => [
  ...bas.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...med.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...av.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];

const EX = (enunciado, pasos, resultado) => ({ enunciado, pasos, resultado });

// Vídeos: los del lote D (por clave, p. ej. "gh7b") y los nuevos (ids de tools/videos.py, nunca inventados).
const VL = (k) => vid(VD[k]);
const V = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

// Mapa mental final.
const MAPA = (centro, ramas, color = "var(--soc, #c2410c)") => mapaBase(centro, color, ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--sun)", "var(--red)"][i]]));

const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const FIG = (titulo, svg) => ({ titulo, svg });

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });
const BC = { t: "British Council LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/" };
const CAM = (t, slug) => ({ t: `${t}, Cambridge Dictionary`, url: `https://dictionary.cambridge.org/grammar/british-grammar/${slug}` });

module.exports = { linea, cajas, flujo, barras, versus, piramide, rueda, L, H, B, Q, QS, EJ, EX, V, VL, MAPA, SIT, FIG, RD, WIKI, BC, CAM, tb: L.tb };
