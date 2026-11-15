// Ayudas para Inglés I de 1º de Bachillerato (nivel libro). Explicación en castellano y ejemplos en inglés (B1+/B2).
// Cada tema se escribe con tema({...}); aquí se numeran los apartados (n.1, n.2…), se reparten las respuestas del quiz
// y se comprueba el formato. Dibujos de bloque de 260 × 180: las líneas del tiempo de los tiempos verbales (crono) son
// propias; el resto reutiliza _lenguas.js (filas, frase, dialogo, tabla) y _eso4L5.js (compara, pasos, escala, ciclo, rejilla).
// Vídeos buscados con tools/videos.py el 14-11-2026, sin repetir ids de otros temas.
const { F, D, mapa, flecha } = require("./_util");
const L = require("./_lenguas");
const K = require("./_eso4L5");
const { marco, T, fit } = K;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
let nid = 0;
const uid = (p) => `bi${p}${++nid}`;

// ---------- Vídeos ----------
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, busqueda });
const VID = {
  presGen: vid("W3HdjN3cLiM", "Present simple and present continuous: the complete grammar guide", "Arnel's Everyday English", 1187279, "present simple vs present continuous stative verbs"),
  stative: vid("MWJIScUJSAU", "Stative verbs in English", "Learn English with Rebecca · engVid", 671857, "present simple vs present continuous stative verbs"),
  presEasy: vid("Sc-E_XRCtWI", "Present simple & present continuous: using the right tense", "EasyTeaching", 348029, "present simple vs present continuous stative verbs"),
  narrGen: vid("nELxxIC0ftw", "Narrative tenses in English", "Oxford English Now", 450372, "narrative tenses english"),
  pastPea: vid("h02OT89INNI", "Past simple vs. past continuous", "Inglés para niños con Mr Pea", 350007, "past simple past continuous inglés explicación"),
  usedWould: vid("OWuFkCPb9oE", "Used to and would", "Easy English", 2539174, "used to vs would"),
  getUsed: vid("BGVl_nTJY7A", "Used to, be used to, get used to: gramática inglesa", "Arnel's Everyday English", 1305050, "be used to get used to"),
  perfGen: vid("Ey0JqLSfCdA", "Cómo usar el pretérito perfecto: simple o continuo", "mmmEnglish", 787074, "past perfect simple vs continuous"),
  ppVsPast: vid("q1LKzp2ozVM", "Present perfect vs. past simple: Tom's story", "oomongzu", 2314110, "present perfect vs past simple"),
  ppCont: vid("utkyo3RtDjE", "Presente perfecto progresivo en inglés: have / has been + -ing", "Francisco Ochoa Inglés Fácil", 1692714, "present perfect continuous explicación español"),
  pastPerf: vid("PQ6s89XUvz4", "Cómo formar oraciones con el pasado perfecto en inglés (had)", "Francisco Ochoa Inglés Fácil", 2641122, "past perfect inglés explicación"),
  futGen: vid("2LSBme2M4Qo", "Tiempos futuros en inglés (will, going to, be + -ing y más)", "Learn English with Papa Teach Me", 490203, "futuro en inglés will going to presente continuo"),
  futCont: vid("Jty1dsqam8c", "Futuro progresivo en inglés: afirmativa, negativa e interrogativa", "Francisco Ochoa Inglés Fácil", 655931, "future continuous future perfect explicación"),
  futPerf: vid("Td6LOQQk33M", "Futuro perfecto en inglés: will have", "Francisco Ochoa Inglés Fácil", 619546, "future continuous future perfect explicación"),
  modGen: vid("4GMU08J98MQ", "Complete guide to English modal verbs", "Oxford Online English", 894078, "modal verbs advanced english"),
  must: vid("7JrfNdptl24", "El verbo modal must: obligación, necesidad y certeza", "Francisco Ochoa Inglés Fácil", 993437, "verbos modales inglés deducción must can't"),
  pastMod: vid("WQpM0NVM0CM", "Past modals: could have, may have, might have, must have, should have, would have", "Arnel's Everyday English", 2026015, "modal perfects must have could have should have"),
  shouldve: vid("bh_MxtaIkj4", "Should've, would've, could've: complete grammar & use", "English with Lucy", 975696, "modal perfects must have could have should have"),
  condGen: vid("vXp0ETWXbWo", "The conditionals: 0, 1, 2 & 3", "English with Lucy", 2222055, "conditionals zero first second third"),
  cond01: vid("ttUbJjKBncQ", "Condicionales: condicional cero y condicional de primer orden", "English with Ronnie · engVid", 2256894, "conditionals zero first second third"),
  mixed: vid("FuWk4lTt3UE", "Mixed conditionals: examples & practice", "mmmEnglish", 754665, "mixed conditionals english"),
  pasGen: vid("nkAyggAM1q4", "How to use the passive voice", "mmmEnglish", 3585540, "passive voice english grammar"),
  pas7: vid("nRGLDD0BBdc", "Voz pasiva en inglés: reglas y ejemplos", "7ESL Learning English", 6595210, "passive voice english grammar"),
  pasRep: vid("MpsrdpUKOTA", "Passive reporting verbs: it is said that, it is thought that", "Oxford English Now", 173632, "passive reporting verbs it is said that"),
  causa: vid("S8h7kCOZH3c", "Causatives: get / have something done", "Inglés Para Perezosos", 881718, "causative have something done"),
  repGen: vid("eplQBhE0-Hg", "Reported speech in English", "English with Lucy", 1965412, "reported speech questions commands"),
  repArnel: vid("cW3pdeTYFZc", "Discurso indirecto: afirmaciones, preguntas y órdenes", "Arnel's Everyday English", 1681965, "reported speech questions commands"),
  repVerbs: vid("7cpZ7mGj0Xg", "Cómo dar consejos en inglés: recommend, suggest, advise, encourage", "English with Alex · engVid", 327982, "reporting verbs advise suggest"),
  relGen: vid("j25CFx-4g0I", "Relative pronouns and relative clauses", "Arnel's Everyday English", 1632344, "relative clauses defining non-defining"),
  relEsp: vid("5rV6EY1Zqis", "Oraciones de relativo especificativas vs. explicativas", "Learn English on Skype", 399122, "relative clauses defining non-defining"),
  relAlejo: vid("cpLnfqOas8Y", "Cómo usar las defining and non-defining clauses en inglés", "Alejo Lopera Inglés", 152331, "oraciones de relativo inglés"),
  gerGen: vid("1VaoDZpzWTw", "Gerund (-ing) or infinitive (to): when and how to use them", "English with Lucy", 1774273, "gerunds and infinitives"),
  gerLing: vid("yDc2BUV9xis", "Cuándo usar gerundio (-ing) e infinitivo (to)", "English with Linguivers", 1244110, "gerunds and infinitives"),
  remember: vid("XoSx7wxIkWs", "Remember y forget: gerundios e infinitivos", "English with Emma · engVid", 531020, "verbs followed by gerund or infinitive change meaning remember stop try"),
  essayGen: vid("G9aEKgQp6fs", "Nail your opinion essay: agree or disagree", "Fastrack IELTS", 200496, "how to write an opinion essay"),
  emailBC: vid("3-QoPcJHQws", "English for emails: formal and informal language", "British Council | English", 206512, "formal email writing english"),
  email21: vid("gjqmdcThcns", "21 frases para correos electrónicos formales en inglés", "Derek Callan - English for Professionals", 917448, "formal email writing english"),
  presRon: vid("BO0Gt5hoHU4", "Cómo dar el mejor discurso o presentación en inglés", "English with Ronnie · engVid", 1936341, "how to give a presentation in english"),
  discurso: vid("w82a1FT5o88", "¿Cómo empezar un discurso?", "Conor Neill", 22961580, "how to give a presentation in english"),
  debate: vid("-VVFwNo_29I", "Cómo debatir en inglés: vocabulario y frases", "ABA English", 388578, "debate phrases english agreeing disagreeing"),
};
const V = (k) => { if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`); return { ...VID[k] }; };

// ---------- Dibujos propios ----------

// Línea del tiempo de un tiempo verbal. marks: { p: x | s: [x0, x1] | w: [x0, x1], l: rótulo, c: color, r: fila (0-2), f: flecha }.
// x va de 0 (pasado) a 1 (futuro); «ahora» marca el presente. o: { titulo, nota, ahora, sin }.
function crono(aria, marks, o = {}) {
  const X = (x) => +(18 + x * 226).toFixed(1), ay = 112, ah = o.ahora ?? 0.62, id = uid("cr");
  let s = "";
  if (o.titulo) s += T(130, 24, o.titulo, { fs: fit(o.titulo, 236, 13, true), b: true });
  s += `<path d="M14 ${ay} H 244" stroke="var(--muted)" stroke-width="2.4" marker-end="url(#${id})"/>`;
  if (!o.sin) s += `<path d="M${X(ah)} ${ay - 72} V ${ay + 8}" stroke="var(--red)" stroke-width="1.6" stroke-dasharray="4 3"/>${T(X(ah), ay + 22, "NOW", { fs: 11, b: true, c: "var(--red)" })}`;
  if (o.sin || ah > 0.2) s += T(18, ay + 22, "past", { fs: 11, a: "start", c: "var(--muted)" });
  if (o.sin || ah < 0.72) s += T(244, ay + 22, "future", { fs: 11, a: "end", c: "var(--muted)" });
  const cols = [...new Set(marks.map((m) => m.c || "var(--pen)"))];
  const defs = flecha(id, "var(--muted)") + cols.map((c, i) => flecha(`${id}c${i}`, c)).join("");
  marks.forEach((m) => {
    const c = m.c || "var(--pen)", y = ay - 14 - (m.r || 0) * 26;
    let x0, x1;
    if (m.p !== undefined) {
      x0 = x1 = X(m.p);
      s += `<path d="M${x0 - 5} ${y - 5} L ${x0 + 5} ${y + 5} M${x0 + 5} ${y - 5} L ${x0 - 5} ${y + 5}" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
      if ((m.r || 0) > 0) s += `<path d="M${x0} ${y + 7} V ${ay}" stroke="${c}" stroke-width="1" stroke-dasharray="2 3"/>`;
    } else {
      const [a, b] = m.s || m.w;
      x0 = X(a); x1 = X(b);
      const mk = m.f ? ` marker-end="url(#${id}c${cols.indexOf(c)})"` : "";
      if (m.w) {
        let d = `M${x0} ${y}`, k = 0;
        for (let x = x0; x < x1 - 1; x += 8, k++) d += ` q 4 ${k % 2 ? 5 : -5} ${Math.min(8, x1 - x)} 0`;
        s += `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.6"${mk}/>`;
      } else s += `<path d="M${x0} ${y} H ${x1}" stroke="${c}" stroke-width="6" stroke-linecap="round" opacity=".85"${mk}/>`;
    }
    if (m.l) {
      const fs = Number(fit(m.l, 150, 11.5, true)), w = String(m.l).length * fs * 0.6;
      const cx = Math.max(8 + w / 2, Math.min(252 - w / 2, (x0 + x1) / 2));
      s += T(+cx.toFixed(1), y - 9, m.l, { fs, b: true, c }).replace("<text ", '<text stroke="var(--paper)" stroke-width="3.5" paint-order="stroke" ');
    }
  });
  if (o.nota) s += T(130, 166, o.nota, { fs: fit(o.nota, 240, 12), c: "var(--ink)" });
  return marco(aria, s, defs);
}

// Columnas de palabras: título arriba y una lista centrada (2 o 3 columnas).
function listas(aria, cols, titulo = "") {
  const n = cols.length, gap = 8, w = (240 - gap * (n - 1)) / n, top = titulo ? 32 : 10;
  let s = titulo ? T(130, 22, titulo, { fs: fit(titulo, 236, 13, true), b: true }) : "";
  cols.forEach(([t, ls], i) => {
    const x = 10 + i * (w + gap), cx = x + w / 2, c = COL[i % COL.length], paso = Math.min(22, (170 - top - 36) / ls.length);
    s += `<rect x="${x.toFixed(1)}" y="${top}" width="${w.toFixed(1)}" height="${170 - top}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
    s += `<rect x="${x.toFixed(1)}" y="${top}" width="${w.toFixed(1)}" height="26" rx="10" fill="${c}"/>${T(cx.toFixed(1), top + 18, t, { fs: fit(t, w - 10, 12.5, true), b: true, c: "#fff" })}`;
    const fs = Math.min(12, ...ls.map((l) => Number(fit(l, w - 12, 12))));
    ls.forEach((l, j) => { s += T(cx.toFixed(1), (top + 46 + j * paso).toFixed(1), l, { fs }); });
  });
  return marco(aria, s);
}

// Figura resumen (640 × 220): columnas [cabecera, [líneas], color].
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

// Filas con colores automáticos: [[título, texto], …].
const fil = (aria, rows, titulo) => L.filas(aria, rows.map(([t, d, c], i) => [t, d, c || COL[i % COL.length]]), titulo);
// Frase troceada con colores automáticos: [[texto, función], …].
const fra = (aria, partes, nota) => L.frase(aria, partes.map(([t, e, c], i) => [t, e, c || COL[i % COL.length]]), nota);
// Diálogo en bocadillos alternos con la inicial del hablante en un círculo: [[quién, texto], …].
function dlg(aria, rows) {
  const n = rows.length, step = 164 / n;
  let s = "";
  rows.forEach(([q, t], i) => {
    const c = i % 2 ? "var(--leaf)" : "var(--pen)", h = Math.min(40, step - 8), y = 8 + i * step + (step - 8 - h) / 2;
    const fs = L.fz(t, 13, 190), w = Math.min(232, Number(fit(t, 999, 13)) * 0 + String(t).length * fs * 0.52 + 46), x = i % 2 ? 246 - w : 14;
    s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
    s += `<circle cx="${(x + 17).toFixed(1)}" cy="${(y + h / 2).toFixed(1)}" r="9" fill="${c}"/>${T(+(x + 17).toFixed(1), +(y + h / 2 + 4).toFixed(1), q, { fs: 10.5, b: true, c: "#fff" })}`;
    s += T(+(x + 32).toFixed(1), +(y + h / 2 + fs * 0.36).toFixed(1), t, { fs, a: "start" });
  });
  return marco(aria, s);
}

// Escala horizontal con rótulos alternos arriba y abajo para que no se pisen: [[rótulo, subrótulo, color], …].
function escala(aria, titulo, items, izq = "", der = "") {
  const n = items.length, x0 = 22, x1 = 238, paso = (x1 - x0) / n, id = uid("es"), wmax = Math.min(2 * paso - 8, 200);
  let s = T(130, 24, titulo, { fs: fit(titulo, 236, 14, true), b: true, f: D }) + `<path d="M${x0} 104 H ${x1}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#${id})"/>`;
  items.forEach(([a, b, c = "var(--pen)"], i) => {
    const x = x0 + paso * (i + 0.5), up = i % 2 === 0, fs = Number(fit(a, wmax, 12.5, true)), w = String(a).length * fs * 0.62;
    const cx = Math.max(6 + w / 2, Math.min(254 - w / 2, x));
    s += `<circle cx="${x.toFixed(1)}" cy="104" r="8" fill="${c}"/><path d="M${x.toFixed(1)} ${up ? 96 : 112} V ${up ? 84 : 120}" stroke="${c}" stroke-width="1.5"/>`;
    s += T(+cx.toFixed(1), up ? 78 : 136, a, { fs, b: true, c });
    if (b) s += T(+cx.toFixed(1), up ? 62 : 151, b, { fs: fit(b, wmax, 10.5), c: "var(--muted)" });
  });
  if (izq) s += T(x0 - 8, 172, izq, { fs: fit(izq, 110, 11), a: "start", c: "var(--muted)" });
  if (der) s += T(x1 + 8, 172, der, { fs: fit(der, 110, 11), a: "end", c: "var(--muted)" });
  return marco(aria, s, flecha(id, "var(--muted)"));
}
const tb = L.tb;

// ---------- Montaje del tema ----------
const PATRON = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length], resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}
const strip = (s) => String(s || "").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const BC = { t: "British Council, LearnEnglish: B1-B2 grammar", url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar" };
const CAM = { t: "Cambridge Dictionary, English Grammar Today", url: "https://dictionary.cambridge.org/grammar/british-grammar/" };
const CEFR = { t: "Consejo de Europa, Marco Común Europeo de Referencia para las Lenguas (MCER)", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" };
const PROFE = "Saberes básicos de Lengua Extranjera I (Inglés) de 1º de Bachillerato (RD 243/2022, BOE-A-2022-5521, bloques A. Comunicación, B. Plurilingüismo y C. Interculturalidad; en Cataluña, Decret 171/2022, Llengua Estrangera I)";

function tema(o) {
  const T_ = {
    materia: "Inglés I",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
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
    revisado: "2026-11-14",
  };
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html), 0);
  if (w < 2000 || w > 2800) av.push(`${w} palabras`);
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
  const s = T_.situacion;
  if (s.pasos.length < 4 || s.pasos.length > 6 || s.evaluacion.length < 3 || s.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html);
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro ing] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip, CEFR };
