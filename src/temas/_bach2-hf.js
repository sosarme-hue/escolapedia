// Ayudas de Historia de la Filosofía de 2º de Bachillerato (nivel libro, como Biología y Matemáticas II de 2º).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Dibujos de 260 × 180 de Filosofía de 1º (_bach1-fil → _bach1-hmc → _eso4L4), con el texto partido en líneas.
// tema({...}) numera los apartados (1.1, 1.2, 2.1…), baraja las opciones del quiz, monta figura y mapa y comprueba el formato.
const h = require("./_bach1-fil");
const { linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, fig, QS, EJ, EX, MAPA, SIT, RD, DC, WIKI, SEP, FILOSOFIA_NET } = h;

const VID = require("./_bach2-hf-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

// Cita de un texto (traducción propia), con su autor y obra.
const CITA = (t, a) => `<blockquote style="margin:12px 0;padding:8px 14px;border-left:4px solid var(--pen);background:var(--paper);border-radius:6px"><p style="margin:0"><i>«${t}»</i></p><p class="caption" style="margin:4px 0 0">${a}</p></blockquote>`;

const SABER = {
  A: "«A. Del origen de la filosofía occidental en Grecia hasta el fin de la Antigüedad»",
  B: "«B. De la Edad Media a la modernidad europea»",
  C: "«C. De la modernidad a la postmodernidad»",
};
const PROFE = (b, s) => `Saberes básicos de Historia de la Filosofía de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521), bloque ${SABER[b]}: ${s} En Cataluña, Decret 171/2022, Història de la Filosofia.`;
const PAU = { t: "Modelos y exámenes de Historia de la Filosofía de la PAU (CRUE y universidades)", url: "https://www.crue.org/" };

const COL = ["var(--leaf)", "var(--pen)", "var(--red)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T_ = {
    materia: "Historia de la Filosofía",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 120,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.p.map((x) => `<p>${x}</p>`).join("")}${b.extra || ""}`, svg: b.svg, ...(b.v ? { video: V(b.v[0], b.v[1]) } : {}) })),
    figura: fig(o.figura.titulo, o.figura.aria || o.figura.titulo, o.figura.cols.map(([cab, ls], i) => [cab, ls, COL[i % 4]])),
    video: V(o.video[0], o.video[1]),
    quiz: QS(o.quiz, 1),
    examen: QS(o.examen, 5),
    feynman: o.feynman,
    mapa: MAPA(o.mapa[0], o.mapa[1]),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => EX(enunciado, pasos, resultado)),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: PROFE(o.bloque, o.saberes), ideas: o.ideas },
    fuentes: [RD, DC, PAU, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T_.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T_.bloques.length} en «${T_.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T_.bloques[k].html = T_.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3300) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 6 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, V, CITA, linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, SIT, WIKI, SEP, FILOSOFIA_NET };
