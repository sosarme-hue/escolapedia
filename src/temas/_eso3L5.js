// Ayudas del lote 5 de 3º ESO (Geografía e Historia, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos de datos de _eso4L4.js (texto partido en líneas para que no se salga) y añade atajos de contenido.
const { mapa: mapaBase } = require("./_util");
const { partir, txt, marco, linea, cajas, flujo, barras, versus, piramide, rueda } = require("./_eso4L4");

// Bloque: título numerado, html y dibujo (y vídeo opcional).
const B = (h, html, svg, video) => ({ html: `<h3>${h}</h3>${html}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });

// Pregunta de 4 opciones: la correcta va primera en el fichero y aquí se coloca en una posición que varía.
let nq = 0;
const Q = ([q, o, e]) => {
  const k = (nq++ * 7 + q.length) % 4;
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

// Ejemplo resuelto.
const EX = (enunciado, pasos, resultado) => ({ enunciado, pasos, resultado });

// Vídeo de bloque (ids sacados con tools/videos.py, nunca inventados).
const V = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

// Mapa mental final con el color de Geografía e Historia.
const MAPA = (centro, ramas) => mapaBase(centro, "var(--soc, #c2410c)", ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--inf)", "var(--red)"][i]]));

// Situación de aprendizaje.
const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });

module.exports = { partir, txt, marco, linea, cajas, flujo, barras, versus, piramide, rueda, B, Q, QS, EJ, EX, V, MAPA, SIT, RD, WIKI };
