// Ayudas para los temas de Lengua Castellana y Literatura de 4º ESO a nivel libro (README, «Tema nivel libro (4º ESO)»).
// Los dibujos son los de _lenguas.js (SVG propios); aquí solo se da forma a los datos y se comprueba el tamaño del tema.
const { mapa } = require("./_util");
const L = require("./_lenguas");

// Bloque numerado: B("1.1 Título", "<p>…</p>", svg, video?)
const B = (h, html, svg, video) => (video ? { html: `<h3>${h}</h3>${html}`, svg, video } : { html: `<h3>${h}</h3>${html}`, svg });

// Colores habituales de los dibujos.
const C = { pen: "var(--pen)", red: "var(--red)", leaf: "var(--leaf)", inf: "var(--inf)", muted: "var(--muted)", ink: "var(--ink)", eso: "var(--eso)" };

const NIV = { b: "básico", m: "medio", a: "avanzado" };
const palabras = (h) => String(h || "").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

// Convierte los datos compactos al formato que lee build.js y avisa si el tema no llega al nivel libro.
// A.videos: [número de apartado, vídeo]; A.ejemplos: [enunciado, [pasos], resultado]; A.ejercicios: [nivel b|m|a, q, sol]; A.quiz y A.examen: [q, [4 opciones], a, e].
function libro(T, A) {
  // A.videos: [["1.2", L.vid(...)], ...]: vídeo de bloque por el número de su apartado.
  for (const [n, v] of A.videos || []) {
    const b = T.bloques.find((x) => x.html.startsWith(`<h3>${n} `));
    if (!b) throw new Error(`libro: no hay apartado ${n} en ${T.titulo}`);
    b.video = v;
  }
  T.ejemplos = A.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }));
  T.ejercicios = A.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }));
  T.quiz = A.quiz.map(([q, o, a, e]) => ({ q, o, a, e }));
  T.examen = A.examen.map(([q, o, a, e]) => ({ q, o, a, e }));
  const avisos = [];
  const w = T.bloques.reduce((s, b) => s + palabras(b.html), 0);
  if (w < 2000 || w > 3000) avisos.push(`${w} palabras en los bloques`);
  if (T.bloques.length < 10 || T.bloques.length > 16) avisos.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) avisos.push("bloque sin dibujo");
  const lw = palabras(T.lectura && T.lectura.html);
  if (lw < 150 || lw > 250) avisos.push(`lectura de ${lw} palabras`);
  if (T.ejemplos.length !== 6) avisos.push(`${T.ejemplos.length} ejemplos`);
  if (T.errores.length !== 6) avisos.push(`${T.errores.length} errores`);
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) avisos.push(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) avisos.push("quiz: 20 preguntas de 4 opciones");
  if (T.examen.length !== 8) avisos.push(`${T.examen.length} preguntas de examen`);
  if (T.tarjetas.length !== 12) avisos.push(`${T.tarjetas.length} tarjetas`);
  if (T.glosario.length < 12 || T.glosario.length > 20) avisos.push(`${T.glosario.length} términos de glosario`);
  if (!T.situacion || T.situacion.pasos.length < 4 || T.situacion.pasos.length > 6) avisos.push("situación de aprendizaje");
  if (avisos.length) console.warn(`[4º ESO Lengua] ${T.titulo}: ${avisos.join(", ")}`);
  return T;
}

const BOE = L.BOE;
const RAE = { t: "RAE y ASALE, Nueva gramática de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" };
const DLE = { t: "Diccionario de la lengua española (RAE)", url: "https://dle.rae.es/" };
const CERVANTES = { t: "Biblioteca Virtual Miguel de Cervantes", url: "https://www.cervantesvirtual.com/" };

module.exports = { B, C, L, mapa, libro, palabras, BOE, RAE, DLE, CERVANTES };
