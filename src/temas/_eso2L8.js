// Ayudas del lote 8 de 2º ESO nivel libro (Programación y robótica).
// Reutiliza los dibujos de Scratch, diagramas de flujo, ventanas de código y escenario de 1º ESO (_eso1L2),
// los esquemas de 3º ESO (_eso3L4: radial, ciclo, línea del tiempo, tabla, capas, cita)
// y los dibujos y vídeos de la versión anterior de cada tema (_eso2L8-previo), para no perderlos.
const B = require("./_eso1L2");
const L = require("./_eso3L4");
const P = require("./_eso2L8-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const MATERIA = "Programación y robótica";
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };
const SCRATCH = { t: "Scratch (MIT): página oficial y guías", url: "https://scratch.mit.edu/" };

// Dibujo de un bloque de la versión anterior: viejo("prog-videojuego", 3).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`_eso2L8: no hay dibujo previo ${slug} ${i}`);
  return s;
};
// Figura y vídeo general de la versión anterior.
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeos de bloque de la versión anterior, en orden.
const videos = (slug) => Object.values(P[slug].vid);

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
// Ejercicios en una sola lista de pares [pregunta, solución], ordenados de fácil a difícil:
// los nb primeros son básicos, los nm siguientes medios y el resto avanzados.
const nivelar = (l, nb = 10, nm = 12) => l.map(([q, sol], i) => ({ nivel: i < nb ? "básico" : i < nb + nm ? "medio" : "avanzado", q, sol }));
// Preguntas tipo test: [pregunta, [correcta, otra, otra, otra], explicación].
// La correcta se escribe primero y se coloca en una posición que va cambiando.
const test = (l, sem = 0) => l.map(([q, o, e], i) => {
  const k = (i * 3 + sem + Math.floor(i / 4)) % o.length;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
});
// Saberes para profesores: RD 217/2022 y Decret 175/2022.
const saberes = (rd, cat) => `${rd} (materia optativa de Programación y robótica en el marco del RD 217/2022, competencia digital y Tecnología y Digitalización). En Cataluña, Decret 175/2022: ${cat}`;

module.exports = {
  ...B,
  C: CURSO, CURSO, REV, MATERIA, RD, DEC, SCRATCH,
  radial: L.radial, ciclo: L.ciclo, linea: L.linea, tablaSvg: L.tabla, capas: L.capas, cita: L.cita, compara: L.compara, piramide: L.piramide, flechas: L.flujo,
  viejo, figura, video, videos, niveles, nivelar, test, saberes,
};
