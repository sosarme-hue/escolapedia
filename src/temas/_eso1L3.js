// Ayudas del lote 3 de 1º ESO nivel libro (Biología y Geología y Cultura Clásica).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos de la versión anterior de cada tema (_eso1L3-previo), para no perder los dibujos hechos a mano.
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso1L3-previo");

const CURSO = "1-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };

// Dibujo de un bloque de la versión anterior: viejo("byg-celula", 3).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`No hay dibujo previo ${slug} ${i}`);
  return s;
};
// Figura y vídeo general de la versión anterior.
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeos de bloque de la versión anterior, en orden.
const videos = (slug) => P[slug].videos;

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
// Preguntas tipo test a partir de [pregunta, [opciones], índice correcto, explicación].
const test = (l) => l.map(([q, o, a, e]) => ({ q, o, a, e }));

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, viejo, figura, video, videos, niveles, test };
