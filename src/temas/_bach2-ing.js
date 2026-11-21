// Ayudas para Inglés II de 2º de Bachillerato (nivel libro, B2+/C1 y PAU). Explicación en castellano y ejemplos en inglés.
// Mismo montaje que Inglés I (_bach1-ing.js): tema({...}) numera los apartados (n.1, n.2…), reparte las respuestas
// del quiz y comprueba el formato. Los dibujos de bloque (260 × 180) reutilizan crono, listas, fil, fra, dlg y escala
// de _bach1-ing.js y los genéricos de _eso4L5.js (compara, pasos, ciclo, rejilla, ficha).
// Vídeos buscados con tools/videos.py el 21-11-2026 (los más vistos de cada búsqueda), sin repetir ids de otros temas.
const B1 = require("./_bach1-ing");
const { mapa } = require("./_util");
const { crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip } = B1;

const NIV = { b: "básico", m: "medio", a: "avanzado" };

// ---------- Vídeos ----------
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, busqueda });
const VID = {
  // 1. Verb tenses review
  tenGen: vid("84jVz0D-KkY", "All English tenses: grammar lesson (C1 Advanced)", "Anglo-Link", 6225268, "all english tenses advanced"),
  tenEsp: vid("FWOjIjgQOtk", "Todos los tiempos verbales en inglés", "Inglés Fácil con Monica Cely", 959250, "tiempos verbales inglés repaso"),
  pastCont: vid("S70AtMUUAns", "Past continuous and past perfect continuous: what's the difference?", "mmmEnglish", 1666164, "narrative tenses past perfect continuous"),
  // 2. Modal verbs and modal perfects
  modGen: vid("5Dq7lEw7CKM", "No more mistakes with modals: 3 easy rules", "Learn English with Rebecca · engVid", 5839778, "modal perfects should have could have"),
  modDed: vid("GTIGz9UFEEQ", "Modal verbs of deduction and speculation", "Maltalingua English Language School", 236022, "modal verbs of deduction must might can't"),
  modPerf: vid("X2C8bMztpKI", "Could have, would have, should have: modales de oportunidad perdida", "ENGLISH with James · engVid", 407056, "modal perfects should have could have"),
  neednt: vid("MT8_5vC54Xo", "Didn't need to and needn't have", "BBC Learning English", 67681, "need didn't need to needn't have"),
  // 3. Conditionals, wishes and unreal past
  condGen: vid("hk1AvFgOsSo", "Tiempos verbales mixtos en inglés: condicionales y cláusulas if", "Adam's English Lessons · engVid", 1121123, "mixed conditionals advanced"),
  wish: vid("ZLIxVxL6shc", "Wish / if only", "RockYourEnglish", 423052, "wish if only grammar"),
  condInv: vid("4K0npnSYjJE", "Inversión: «Si hubiera sabido…», «Si necesitaras…»", "Adam's English Lessons · engVid", 1083849, "inversion conditionals had I known should you"),
  condAdv: vid("Oz0hJW_uVhc", "12 ways to use advanced conditionals in English", "English with Greg", 143658, "mixed conditionals advanced"),
  // 4. The passive and the causative
  pasGen: vid("C6pHfjH0Efg", "La pasiva: cuándo, por qué y cómo usarla", "Adam's English Lessons · engVid", 1751590, "passive voice advanced it is said that"),
  pasImp: vid("JSKGxtP0uWk", "Impersonal passives en inglés: explicación con ejemplos y ejercicios", "Inglés Para Perezosos", 422518, "voz pasiva inglés avanzada"),
  causa: vid("z960ck7wBBs", "Causative verbs: have, get, make, let", "Arnel's Everyday English", 1616982, "causative have get something done"),
  causaLucy: vid("tdS-3oOZvVk", "Causative verbs: have, get, make, let, help", "English with Lucy", 1250464, "causative have get something done"),
  // 5. Reported speech
  repGen: vid("lcnVMh0tR9w", "Aprende a usar el estilo indirecto en inglés", "English with Ronnie · engVid", 2123895, "reported speech advanced"),
  repRules: vid("BLYjETy1d7s", "3 grammar rules for reported speech", "English with Alex · engVid", 394209, "reported speech advanced"),
  repVerbs: vid("i5ULlruJsGE", "Reporting verbs", "RockYourEnglish", 162635, "reporting verbs english"),
  repBBC: vid("Pu_3OgQxe2s", "How to use English reporting verbs like insist and demand", "BBC Learning English", 133968, "reporting verbs english"),
  // 6. Relative and participle clauses
  relGen: vid("Kmxd_nej-wk", "Who, whom, whose, who's", "English with Lucy", 569964, "relative clauses whose whom which"),
  partBBC: vid("H8E5EF0IEN0", "How to use participle clauses", "BBC Learning English", 263090, "participle clauses"),
  partEsp: vid("8nC27LPY_Lg", "Oraciones de participio: todo lo que necesitas saber", "SMASH English", 147411, "participle clauses"),
  relRed: vid("W-lgmBwBOpE", "Reduced relative clauses: defining and non-defining", "Oxford English Now", 74976, "reduced relative clauses"),
  // 7. Verb patterns and phrasal verbs
  gerGen: vid("DUeAkc4DgOU", "Gerunds and infinitives: winning is everything? or to win is everything?", "Arnel's Everyday English", 953667, "gerunds and infinitives advanced"),
  gerEllii: vid("-s1gu725tA4", "Gerunds and infinitives", "Ellii (formerly ESL Library)", 1174370, "gerunds and infinitives advanced"),
  phrGen: vid("MHKa48BWbPw", "30 verbos frasales súper comunes", "Arnel's Everyday English", 2425221, "phrasal verbs most common"),
  phrEsp: vid("EAAyzMvUNS0", "¡Que no te intimiden los phrasal verbs!", "superholly", 2143555, "phrasal verbs inglés"),
  // 8. Linking words
  linkGen: vid("nX8N9RiGCZg", "Though, although, even though, despite, in spite of", "Adam's English Lessons · engVid", 3717037, "contrast linkers although despite however"),
  linkEmma: vid("UFuxlnUeGmg", "How to express opposing ideas: despite, although, nevertheless", "English with Emma · engVid", 2038109, "contrast linkers although despite however"),
  linkTrans: vid("STiQ4BEV8ug", "Palabras y frases de transición para mejorar tu escritura", "7ESL Learning English", 1618774, "linking words english essay"),
  linkEbau: vid("B2nVtzPOBQU", "15 conectores para escribir un essay en inglés (B2, C1, EBAU)", "Inglés Para Perezosos", 319486, "conectores en inglés"),
  // 9. Emphasis
  invGen: vid("TO2CtYcFYWg", "Never have I, little did I know, not only is: inversion", "Learn English with Gill · engVid", 232581, "inversion negative adverbials never have I"),
  invBBC: vid("AzNxZGC-Hg0", "Inversion 1: after negative or limiting adverbs", "BBC Learning English", 222518, "inversion negative adverbials never have I"),
  emphBBC: vid("P7dcdEoNA_E", "Giving emphasis in English", "BBC Learning English", 232633, "cleft sentences what I need is"),
  cleftWhat: vid("-80zSEMCrgw", "Using «what» to give emphasis", "BBC Learning English", 168862, "cleft sentences what I need is"),
  // 10. Word formation and collocations
  wfGen: vid("RPqxNqO8u-A", "Prefixes and suffixes", "English with Cambridge", 885451, "word formation prefixes suffixes english"),
  wfEsp: vid("uc8AgRPyFe8", "Prefijos y sufijos: lección de inglés", "Kevin Spaans", 734391, "word formation prefixes suffixes english"),
  wfRoots: vid("0diRbQ-mgfo", "English vocabulary: roots, prefixes and suffixes", "Daniel Byrnes", 646241, "word formation prefixes suffixes english"),
  colloc: vid("nh8r9SDmHn4", "¿Qué son las colocaciones?", "English with Cambridge", 256916, "collocations english make do"),
  makeDo: vid("WXRcTKWSFbU", "Do vs. make in English: what is the difference?", "Woodward English", 543977, "collocations english make do"),
  // 11. Reading and rephrasing
  readGen: vid("xrEq-1UujOo", "Reading comprehension in exams: strategies, tips and tricks", "Learn English Lab", 1313760, "reading comprehension tips english exam"),
  readBBC: vid("DsJ6bMBLUs8", "Exam skills: 6 tips to help you with reading exams", "BBC Learning English", 437387, "reading comprehension tips english exam"),
  skim: vid("RtcXr0_201A", "Skimming y scanning", "Distinct Motion Media", 890046, "skimming and scanning"),
  kwt: vid("dmWsbrQEoTA", "Use of English: trucos para la key word transformation", "Inglés Para Perezosos", 370957, "selectividad inglés consejos"),
  // 12. Writing for the PAU
  wrGen: vid("1HkeuMw7PyM", "Selectividad inglés: cómo hacer el writing y consejos generales", "Inglés Para Perezosos", 502883, "how to write an essay in english selectividad"),
  wrPlant: vid("YXlV7i_tTok", "Cómo hacer el writing de selectividad (con plantilla)", "Rebecca Martínez", 209274, "inglés EBAU examen"),
  wrArg: vid("oAUKxr946SI", "How to write an argumentative essay: planning", "britishcouncilsg", 1765812, "for and against essay"),
  wrRepaso: vid("IrUxMwqeTpI", "Repaso de writings B2, EBAU, EOI: structure, grammar, vocabulary and connectors", "Inglés Para Perezosos", 214943, "inglés EBAU examen"),
};
const V = (k) => { if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`); return { ...VID[k] }; };

// Figura resumen (640 × 220): columnas [cabecera, [líneas], color].
const { D } = require("./_util");
function figura(titulo, aria, cols) {
  const n = cols.length, gap = 14, w = (640 - 40 - (n - 1) * gap) / n;
  const cajas = cols.map(([cab, ls, c], i) => {
    const x = 20 + i * (w + gap), cx = x + w / 2;
    return `<rect x="${x.toFixed(1)}" y="20" width="${w.toFixed(1)}" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <rect x="${x.toFixed(1)}" y="20" width="${w.toFixed(1)}" height="34" rx="14" fill="${c}"/><rect x="${x.toFixed(1)}" y="40" width="${w.toFixed(1)}" height="14" fill="${c}"/>
      ${T(cx.toFixed(1), 43, cab, { fs: fit(cab, w - 12, 14, true), b: true, c: "#fff", f: D })}${ls.map((l, j) => T(cx.toFixed(1), 80 + j * 28, l, { fs: fit(l, w - 14, 13, j === 0), b: j === 0 })).join("")}`;
  }).join("");
  return { titulo, svg: `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}"><rect width="640" height="220" rx="16" fill="var(--paper)"/>${cajas}</svg>` };
}

// ---------- Montaje del tema ----------
const PATRON = [2, 0, 3, 1, 1, 3, 0, 2, 3, 1, 2, 0];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length], resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}
const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const BC = { t: "British Council, LearnEnglish: B1-B2 and C1 grammar", url: "https://learnenglish.britishcouncil.org/grammar" };
const CAM = { t: "Cambridge Dictionary, English Grammar Today", url: "https://dictionary.cambridge.org/grammar/british-grammar/" };
const CEFR = { t: "Consejo de Europa, Marco Común Europeo de Referencia para las Lenguas (MCER)", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" };
const PROFE = "Saberes básicos de Lengua Extranjera II (Inglés) de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521, bloques A. Comunicación, B. Plurilingüismo y C. Interculturalidad; en Cataluña, Decret 171/2022, Llengua Estrangera II), con la mirada puesta en la prueba de acceso a la universidad (PAU)";

function tema(o) {
  const T_ = {
    materia: "Inglés II",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 120,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b, i) => ({ html: `<h3>${o.num}.${i + 1} ${b.h}</h3>${b.p.map((x) => (/^<(ul|ol|table|div)/.test(x) ? x : `<p>${x}</p>`)).join("")}`, svg: b.svg, ...(b.v ? { video: V(b.v) } : {}) })),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ nivel: NIV[n], q, sol }))),
    figura: figura(o.figura[0], o.figura[1], o.figura[2].map(([t, ls], i) => [t, ls, COL[i % COL.length]])),
    video: V(o.video),
    quiz: o.quiz.map(reparte),
    examen: o.examen.map((x, i) => reparte(x, i + 5)),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--bac)", o.mapa[1].map(([t, d], i) => [t, d, ["var(--pen)", "var(--leaf)", "var(--red)", "var(--inf)"][i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: `${PROFE}: ${o.saberes}`, ideas: o.ideas },
    fuentes: [RD, CAT, BC, CAM, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html), 0);
  if (w < 2000 || w > 3200) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T_.bloques.filter((b) => b.video).length < 2) av.push("menos de 2 vídeos de bloque");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.feynman.length !== 5) av.push(`feynman ${T_.feynman.length}`);
  const s = T_.situacion;
  if (s.pasos.length < 4 || s.pasos.length > 6 || s.evaluacion.length < 3 || s.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html);
  if (lw < 150 || lw > 260) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro ing2] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip, CEFR, V };
