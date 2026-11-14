// Ayudas para el lote 6 de 2º ESO a nivel libro: Lengua Catalana y Literatura (README, «Tema nivel libro», adaptado a alumnos de 13-14 años).
// Todo el contenido de los temas está en catalán. Los dibujos son los de _lenguas.js / _eso2b.js (SVG propios);
// aquí solo se da forma a los datos y se comprueba el tamaño del tema.
const { mapa } = require("./_util");
const L = require("./_eso2b");
const { palabras } = require("./_eso3L2");

// Bloque numerado: B("1.1 Títol", "<p>…</p>", svg, vídeo?)
const B = (h, html, svg, video) => (video ? { html: `<h3>${h}</h3>${html}`, svg, video } : { html: `<h3>${h}</h3>${html}`, svg });

const NIV = { b: "básico", m: "medio", a: "avanzado" };

// La resposta correcta s'escriu sempre la primera i aquí es col·loca en una posició variada (patró fix),
// perquè el repartiment de respostes sigui equilibrat. Cada pregunta: [q, [correcta, altra, altra, altra], explicació].
const PATRON = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length], resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}

// Converteix les dades compactes al format que llegeix build.js i avisa si el tema no arriba al nivell llibre de 2n d'ESO.
// A.ejemplos: [enunciat, [passos], resultat]; A.ejercicios: [nivell b|m|a, q, sol]; A.quiz i A.examen: [q, [correcta, …], e].
function libro(T, A) {
  T.curso = "2-eso";
  T.materia = "Lengua Catalana y Literatura";
  T.ejemplos = A.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }));
  T.ejercicios = A.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }));
  T.quiz = A.quiz.map(reparte);
  T.examen = A.examen.map((x, i) => reparte(x, i + 5));
  T.videos = [];
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
  const nv = { básico: 0, medio: 0, avanzado: 0 };
  T.ejercicios.forEach((e) => nv[e.nivel]++);
  if (nv.básico < 8 || nv.medio < 9 || nv.avanzado < 6) avisos.push(`niveles ${nv.básico}/${nv.medio}/${nv.avanzado}`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) avisos.push("quiz: 20 preguntas de 4 opciones");
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) avisos.push("examen: 8 preguntas de 4 opciones");
  if (T.tarjetas.length !== 12) avisos.push(`${T.tarjetas.length} tarjetas`);
  if (T.glosario.length < 12 || T.glosario.length > 16) avisos.push(`${T.glosario.length} términos de glosario`);
  const s = T.situacion;
  if (!s || s.pasos.length < 4 || s.pasos.length > 6 || s.evaluacion.length < 3 || s.evaluacion.length > 4) avisos.push("situación de aprendizaje");
  if (avisos.length) console.warn(`[2º ESO lote 6] ${T.titulo}: ${avisos.join(", ")}`);
  return T;
}

// Sabers bàsics: RD 217/2022 i, a Catalunya, Decret 175/2022.
const saberes = (s) => `${s} (RD 217/2022, ensenyaments mínims de l'ESO; a Catalunya, Decret 175/2022, de 27 de setembre, matèria de Llengua Catalana i Literatura, segon curs).`;
const BOE = L.BOE;
const DECRET = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (currículum ESO, XTEC)", url: "https://xtec.gencat.cat/ca/curriculum/eso/" };
const GIEC = { t: "Institut d'Estudis Catalans, Gramàtica de la llengua catalana (GIEC)", url: "https://giec.iec.cat/" };
const OIEC = { t: "Institut d'Estudis Catalans, Ortografia catalana (OIEC)", url: "https://oiec.iec.cat/" };
const DIEC = { t: "Diccionari de la llengua catalana (IEC), segona edició", url: "https://dlc.iec.cat/" };
const OPTIMOT = { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" };
const ESADIR = { t: "ésAdir, portal lingüístic de la Corporació Catalana de Mitjans Audiovisuals", url: "https://esadir.cat/" };
const LLETRA = { t: "Lletra, espai virtual de literatura catalana (UOC)", url: "https://lletra.uoc.edu/" };

// Vídeo de YouTube triat amb tools/videos.py (mai ids inventats).
const V = L.V;

module.exports = { B, L, mapa, libro, palabras, saberes, V, BOE, DECRET, GIEC, OIEC, DIEC, OPTIMOT, ESADIR, LLETRA };
