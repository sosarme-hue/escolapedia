// Ayudas del lote 4 de 2º ESO nivel libro (Geografía e Historia).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos de _eso4L4.js (texto partido en líneas) y de _hum.js, los dibujos de la versión
// anterior de cada tema (_eso2L4-previo.js) y los vídeos del lote D de 2º (_eso2d-videos.js).
const { mapa: mapaBase } = require("./_util");
const { linea, cajas, flujo, barras, versus, piramide, rueda } = require("./_eso4L4");
const H = require("./_hum");
const { vid } = require("./_eso2d");
const VD = require("./_eso2d-videos");
const PREVIO = require("./_eso2L4-previo");

// Bloque: título numerado, html, dibujo (o tabla, que va dentro del texto a todo el ancho) y vídeo opcional.
const B = (h, html, svg, video) => {
  const esTabla = svg && !svg.trim().startsWith("<svg");
  return { html: `<h3>${h}</h3>${html}${esTabla ? svg : ""}`, ...(svg && !esTabla ? { svg } : {}), ...(video ? { video } : {}) };
};

// Pregunta de 4 opciones: la correcta va primera en el fichero y aquí cambia de sitio (patrón fijo por posición).
const PATRON = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 0, 1];
const QS = (xs, desfase = 0) => xs.map(([q, o, e], i) => {
  const k = PATRON[(i + desfase) % PATRON.length] % o.length;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
});

// Ejercicios por niveles: listas de [enunciado, solución].
const EJ = (bas, med, av) => [
  ...bas.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...med.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...av.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];

const EX = (enunciado, pasos, resultado) => ({ enunciado, pasos, resultado });

// Vídeos: los del lote D de 2º (por clave, p. ej. "gh3v") y los nuevos (ids de tools/videos.py, nunca inventados).
const VL = (k) => vid(VD[k]);
const V = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

// Dibujos de la versión anterior: P("europa-feudal").svg(3), .tabla(3), .figura
const P = (k) => {
  const p = PREVIO[k];
  return { svg: (i) => p.svg[i], tabla: (i) => p.tabla[i], figura: p.figura };
};

// Mapa mental final.
const MAPA = (centro, ramas, color = "var(--soc, #c2410c)") => mapaBase(centro, color, ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--sun)", "var(--red)"][i]]));

const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const FIG = (titulo, svg) => ({ titulo, svg });

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });

module.exports = { linea, cajas, flujo, barras, versus, piramide, rueda, H, tabla: H.tabla, B, QS, EJ, EX, V, VL, P, MAPA, SIT, FIG, RD, DC, WIKI };
