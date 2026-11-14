// Ayudas para el lote 1 de 2º ESO a nivel libro: Lengua Castellana y Literatura (README, «Tema nivel libro», adaptado a alumnos de 13-14 años).
// Los dibujos son los de _lenguas.js (SVG propios); aquí solo se da forma a los datos y se comprueba el tamaño del tema.
const { mapa } = require("./_util");
const L = require("./_lenguas");
const { B, C, palabras, BOE, RAE, ORTO, DLE, CERVANTES } = require("./_eso3L2");

const NIV = { b: "básico", m: "medio", a: "avanzado" };

// La respuesta correcta se coloca en una posición fija según el orden de la pregunta (patrón variado),
// para que el reparto de respuestas sea equilibrado. Las demás opciones conservan su orden.
// Cada pregunta puede escribirse [q, [4 opciones], a, e] o, más corto, [q, [correcta, otra, otra, otra], e].
const PATRON = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3];
function reparte(x, i) {
  const [q, o, a, e] = x.length === 3 ? [x[0], x[1], 0, x[2]] : x;
  const resto = o.filter((_, k) => k !== a), p = Math.min(PATRON[i % PATRON.length], o.length - 1);
  return { q, o: [...resto.slice(0, p), o[a], ...resto.slice(p)], a: p, e };
}

// Convierte los datos compactos al formato que lee build.js y avisa si el tema no llega al nivel libro de 2º ESO.
// A.videos: [número de apartado, vídeo]; A.ejemplos: [enunciado, [pasos], resultado]; A.ejercicios: [nivel b|m|a, q, sol].
function libro(T, A) {
  T.curso = "2-eso";
  T.materia = T.materia || "Lengua Castellana y Literatura";
  for (const [n, v] of A.videos || []) {
    const b = T.bloques.find((x) => x.html.startsWith(`<h3>${n} `));
    if (!b) throw new Error(`libro: no hay apartado ${n} en ${T.titulo}`);
    b.video = v;
  }
  T.ejemplos = A.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }));
  T.ejercicios = A.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }));
  T.quiz = A.quiz.map(reparte);
  T.examen = A.examen.map((x, i) => reparte(x, i + 5));
  const avisos = [];
  const w = T.bloques.reduce((s, b) => s + palabras(b.html), 0);
  if (w < 1600 || w > 2400) avisos.push(`${w} palabras en los bloques`);
  if (T.bloques.length < 10 || T.bloques.length > 14) avisos.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) avisos.push("bloque sin dibujo");
  if (T.bloques.filter((b) => b.video).length < 2) avisos.push("menos de 2 vídeos de bloque");
  const lw = palabras(T.lectura && T.lectura.html);
  if (lw < 150 || lw > 250) avisos.push(`lectura de ${lw} palabras`);
  if (T.ejemplos.length !== 6) avisos.push(`${T.ejemplos.length} ejemplos`);
  if (T.errores.length !== 6) avisos.push(`${T.errores.length} errores`);
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) avisos.push(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) avisos.push("quiz: 20 preguntas de 4 opciones");
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4 || q.a > 3)) avisos.push("examen: 8 preguntas de 4 opciones");
  const rep = [0, 0, 0, 0];
  [...T.quiz, ...T.examen].forEach((q) => rep[q.a]++);
  if (Math.max(...rep) > 10 || Math.min(...rep) < 4) avisos.push(`reparto de respuestas ${rep.join("/")}`);
  if (T.tarjetas.length !== 12) avisos.push(`${T.tarjetas.length} tarjetas`);
  if (T.glosario.length < 12 || T.glosario.length > 16) avisos.push(`${T.glosario.length} términos de glosario`);
  if (!T.situacion || T.situacion.pasos.length < 4 || T.situacion.pasos.length > 6 || T.situacion.evaluacion.length < 3 || T.situacion.evaluacion.length > 4) avisos.push("situación de aprendizaje");
  if (avisos.length) console.warn(`[2º ESO lote 1] ${T.titulo}: ${avisos.join(", ")}`);
  return T;
}

// Texto común de los saberes básicos: RD 217/2022 y, para Cataluña, Decret 175/2022.
const saberes = (s) => `${s} (RD 217/2022, Lengua Castellana y Literatura, 2º ESO; en Cataluña, Decret 175/2022, de 27 de setembre, Llengua Castellana i Literatura, segon curs).`;
const DECRET = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (currículum ESO, XTEC)", url: "https://xtec.gencat.cat/ca/curriculum/eso/" };
const vid = L.vid;

module.exports = { B, C, L, mapa, libro, palabras, saberes, vid, BOE, DECRET, RAE, ORTO, DLE, CERVANTES };
