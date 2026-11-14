// Ayudas del lote 5 de 2º ESO nivel libro: Inglés (README, «Tema nivel libro», adaptado a alumnos de 13-14 años).
// Explicaciones en castellano y ejemplos en inglés. Reutiliza los dibujos de _lenguas.js y _eso4L4.js (esquemas con
// texto partido en líneas) y los dibujos, figuras y vídeos de la versión anterior de cada tema (_eso2L5-previo.js).
// Los vídeos de bloque nuevos se buscaron con tools/videos.py el 14-11-2026, sin repetir ids de otros temas.
const { mapa } = require("./_util");
const L = require("./_lenguas");
const { linea, cajas, flujo, versus } = require("./_eso4L4");
const P = require("./_eso2L5-previo");

const B = (h, html, svg, video) => ({ html: `<h3>${h}</h3>${html}`, svg, ...(video ? { video } : {}) });
const palabras = (h) => String(h || "").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)"];
// Filas con colores automáticos: [[título, texto], …].
const fil = (label, rows, titulo) => L.filas(label, rows.map(([t, d, c], i) => [t, d, c || COL[i % COL.length]]), titulo);
const dlg = (label, rows) => L.dialogo(label, rows.map(([q, t], i) => [q, t, i % 2 ? "var(--leaf)" : "var(--pen)"]));
const tb = L.tb;

// Dibujo de un bloque de la versión anterior: viejo("ing-past-simple", 3).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`_eso2L5: no hay dibujo previo ${slug} ${i}`);
  return s;
};
// Vídeo de bloque de la versión anterior (solo hay uno por tema).
const vviejo = (slug) => Object.values(P[slug].vid)[0];

const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });
const V = {
  pronS: vid("c-RnTl0MNi0", "How to pronounce words ending in S: /s/, /z/, /ɪz/", "Teacher Luke - Duolingo English Test", 213402),
  estado: vid("t26OA-Rmj-g", "Verbos dinámicos y estativos", "Boris", 242946),
  irreg: vid("BnyDBKepZiQ", "Irregular Verbs - Part 1 (B1)", "Learn English with Songs", 821138),
  pcBbc: vid("uTB5I8V9Eog", "Past simple and past continuous - 6 Minute Grammar", "BBC Learning English", 471406),
  compW: vid("13TLUMw6og0", "Comparative and Superlative Adjectives", "Woodward English", 1531258),
  someAny: vid("0dAZ17fpKLQ", "SOME vs. ANY in English", "Woodward English", 603208),
  modOx: vid("POFfLs0Uaio", "Verbos modales: cómo usar must, have to y should", "Oxford Online English", 934242),
  futEasy: vid("U8L2m8TeIWA", "¿Qué vas a hacer? Futuro simple: will, be going to, be + ing", "Easy English", 1671890),
  yet: vid("KZA_v0lzq_U", "Just, already & yet con el present perfect", "Inglés para niños con Mr Pea", 326702),
  foto: vid("EW0R1KfZf4A", "Cómo describir imágenes: consejos para exámenes orales", "how to English", 857138),
  chores: vid("EHxVzjjrvMY", "Vocabulario de rutinas diarias y tareas del hogar", "Easy English", 1877450),
  email: vid("R4J7kNhF6IE", "Cómo escribir un correo electrónico informal en inglés", "POC English", 168292),
};

const NIV = { b: "básico", m: "medio", a: "avanzado" };
// La respuesta correcta se escribe la primera; aquí se coloca en una posición que varía con un patrón fijo.
const PATRON = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length];
  const resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (currículum ESO, XTEC)", url: "https://xtec.gencat.cat/ca/curriculum/eso/" };
const BC = { t: "British Council LearnEnglish Teens", url: "https://learnenglishteens.britishcouncil.org/" };
const CAM = (t, slug) => ({ t: `${t}, Cambridge Dictionary`, url: `https://dictionary.cambridge.org/grammar/british-grammar/${slug}` });
const saberes = (s) => `${s} (RD 217/2022, Lengua Extranjera, 2º ESO, saberes básicos A, B y C; en Cataluña, Decret 175/2022, de 27 de setembre, Llengua Estrangera, segon curs).`;
const MAPA = (centro, ramas, color = "var(--pen)") => mapa(centro, color, ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--sun)", "var(--red)"][i]]));
const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });

// Convierte los datos compactos al formato que lee build.js y avisa si el tema no llega al nivel libro de 2º ESO.
// A.videos: [número de apartado, vídeo]; A.ejemplos: [enunciado, [pasos], resultado]; A.ejercicios: [b|m|a, q, sol];
// A.quiz / A.examen: [q, [correcta, otra, otra, otra], explicación].
function libro(slug, A) {
  const T = {
    materia: "Inglés",
    curso: "2-eso",
    titulo: A.titulo,
    minutos: A.minutos || 110,
    objetivos: A.objetivos,
    claves: A.claves,
    pregunta: A.pregunta,
    lectura: A.lectura,
    bloques: A.bloques,
    ejemplos: A.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: A.errores,
    ejercicios: A.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol })),
    figura: A.figura || P[slug].fig,
    video: A.video || P[slug].video,
    quiz: A.quiz.map(reparte),
    examen: A.examen.map((x, i) => reparte(x, i + 5)),
    feynman: A.feynman,
    mapa: A.mapa,
    tarjetas: A.tarjetas,
    glosario: A.glosario,
    situacion: A.situacion,
    familias: A.familias,
    profesores: { saberes: saberes(A.saberes), ideas: A.ideas },
    fuentes: [RD, DEC, BC, ...(A.fuentes || [])],
    revisado: "2026-11-14",
  };
  for (const [n, v] of A.videos || []) {
    const b = T.bloques.find((x) => x.html.startsWith(`<h3>${n} `));
    if (!b) throw new Error(`libro: no hay apartado ${n} en ${T.titulo}`);
    if (!v) throw new Error(`libro: vídeo vacío en ${n} de ${T.titulo}`);
    b.video = v;
  }
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
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) avisos.push("quiz: 20 preguntas de 4 opciones");
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) avisos.push("examen: 8 preguntas de 4 opciones");
  if (T.tarjetas.length !== 12) avisos.push(`${T.tarjetas.length} tarjetas`);
  if (T.glosario.length < 12 || T.glosario.length > 16) avisos.push(`${T.glosario.length} términos de glosario`);
  const s = T.situacion;
  if (!s || s.pasos.length < 4 || s.pasos.length > 6 || s.evaluacion.length < 3 || s.evaluacion.length > 4) avisos.push("situación de aprendizaje");
  if (avisos.length) console.warn(`[2º ESO lote 5] ${T.titulo}: ${avisos.join(", ")}`);
  return T;
}

module.exports = { B, L, fil, dlg, tb, linea, cajas, flujo, versus, viejo, vviejo, V, MAPA, SIT, RD, BC, CAM, libro, palabras };
