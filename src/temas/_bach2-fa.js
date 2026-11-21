// Ayudas de Fundamentos Artísticos de 2º de Bachillerato (Modalidad de Artes).
// Versión más ligera que el nivel libro: 8 apartados, 10 ejercicios, 10 preguntas de quiz y 8 tarjetas por tema.
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Dibujos de 260 × 180 de _bach1-hmc (→ _eso4L4). tema({...}) numera los apartados, baraja el quiz y comprueba el formato.
const h = require("./_bach1-hmc");
const { linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, fig, QS, EX, MAPA, SIT, RD, DC, WIKI } = h;

const VID = require("./_bach2-fa-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

// Cita breve (traducción propia), con su autor y obra.
const CITA = (t, a) => `<blockquote style="margin:12px 0;padding:8px 14px;border-left:4px solid var(--pen);background:var(--paper);border-radius:6px"><p style="margin:0"><i>«${t}»</i></p><p class="caption" style="margin:4px 0 0">${a}</p></blockquote>`;
// Ficha de una obra: título, autor, año y técnica.
const OBRA = (t, a, f) => `<p class="caption" style="margin:6px 0 0;padding:6px 10px;border:1px dashed var(--line);border-radius:6px">🖼 <b>${t}</b> · ${a}${f ? ` · ${f}` : ""}</p>`;

// Bloques de saberes básicos de Fundamentos Artísticos (RD 243/2022).
const SABER = {
  A: "«A. Los fundamentos del arte»",
  B: "«B. Visión, realidad y representación»",
  C: "«C. El arte clásico y sus proyecciones»",
  D: "«D. Arte y expresión»",
  E: "«E. Naturaleza, sociedad y comunicación en el arte»",
  F: "«F. Metodologías y estrategias»",
};
const PROFE = (bs, s) => `Saberes básicos de Fundamentos Artísticos de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521), ${bs.length > 1 ? "bloques" : "bloque"} ${bs.map((b) => SABER[b]).join(" y ")}: ${s} En Cataluña, Decret 171/2022, Fonaments Artístics.`;

const COL = ["var(--leaf)", "var(--pen)", "var(--red)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T_ = {
    materia: "Fundamentos Artísticos",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 75,
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
    ejemplosTitulo: "Comentarios guiados",
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => EX(enunciado, pasos, resultado)),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: PROFE(o.saber, o.saberes), ideas: o.ideas },
    fuentes: [RD, DC, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  T_.bloques.forEach((b, i) => { b.html = b.html.replace(/<h3>/, `<h3>${i + 1}. `); });
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 900 || w > 1700) av.push(`${w} palabras`);
  if (T_.bloques.length !== 8) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T_.ejercicios.length !== 10) av.push(`${T_.ejercicios.length} ejercicios`);
  if (T_.quiz.length !== 10 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 4 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 8) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 3 || T_.errores.length !== 4) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 8 || T_.glosario.length > 10) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 5) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 5 || T_.situacion.evaluacion.length !== 3) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 80 || lw > 170) av.push(`lectura ${lw} palabras`);
  if (av.length) console.warn(`[fa] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, V, CITA, OBRA, linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, SIT, WIKI };
