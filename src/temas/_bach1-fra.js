// Ayudas para Francés I (Segunda Lengua Extranjera I) de 1º de Bachillerato (nivel libro). Explicación en castellano y
// ejemplos en francés (A2+/B1). Copia adaptada de _bach1-ing.js.
// Cada tema se escribe con tema({...}); aquí se numeran los apartados (n.1, n.2…), se reparten las respuestas del quiz
// y se comprueba el formato. Dibujos de bloque de 260 × 180: las líneas del tiempo de los tiempos verbales (crono) son
// propias; el resto reutiliza _lenguas.js (filas, frase, dialogo, tabla) y _eso4L5.js (compara, pasos, escala, ciclo, rejilla).
// Vídeos buscados con tools/videos.py el 21-11-2026, sin repetir ids de otros temas.
const { F, D, mapa, flecha } = require("./_util");
const L = require("./_lenguas");
const K = require("./_eso4L5");
const { marco, T, fit } = K;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
let nid = 0;
const uid = (p) => `bf${p}${++nid}`;

// ---------- Vídeos ----------
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, busqueda });
const VID = {
  presGen: vid("TCgKyI8ItTo", "Se présenter en français: cours complet", "Français avec Pierre", 411037, "se présenter en français cours"),
  presCampus: vid("qERgC_ev7IA", "Apprendre à se présenter en français", "Campus Langues", 958528, "se présenter en français cours"),
  caractere: vid("1ymTnhRWqRQ", "Más de 40 adjetivos para describir la personalidad en francés", "Français avec Nelly", 170580, "décrire le caractère adjectifs français"),
  physique: vid("xYubryX3vcY", "Comment on dit: la description physique", "Tout en français", 272006, "la description physique en français"),
  presentGen: vid("94GZJjxGslE", "Présent de l'indicatif: verbes du 1er groupe", "Français avec Pierre", 2040371, "présent de l'indicatif cours de français"),
  present23: vid("IbgI1xlqDRY", "Présent de l'indicatif: 2e et 3e groupe", "Français avec Pierre", 969450, "présent de l'indicatif cours de français"),
  imperatif: vid("I-FmDD5oDYg", "L'impératif: donner des ordres, des conseils et des instructions", "lamachineaecrire", 915222, "l'impératif en français"),
  pronominaux: vid("yDfApZm2u-4", "Les verbes pronominaux", "Français Authentique", 259410, "verbes pronominaux français"),
  passeGen: vid("zsBJ2qtBzhw", "Passé composé ou imparfait en français?", "Français avec Pierre", 2111979, "passé composé et imparfait différence"),
  etreAvoir: vid("Rzjvo2TXLo0", "Être ou avoir au passé composé (niveau B1/B2)", "podcast francais facile", 1158855, "passé composé être ou avoir"),
  accordPP: vid("lHivCFkdmZ0", "L'accord du participe passé en 5 minutes", "Français avec Pierre", 725309, "accord du participe passé"),
  pqp: vid("PZi8xhSjiyo", "Le plus-que-parfait (conjugaison française)", "Cours de français - Jonathan Vangrootloon", 322431, "plus-que-parfait français"),
  condGen: vid("XhF9TCjAJ78", "Le conditionnel: conjugaison française", "Français avec Pierre", 1007102, "le conditionnel présent français"),
  futur: vid("GfsrhmMdA5w", "Le futur simple", "Atelier du Français", 452166, "le futur simple en français"),
  futurProche: vid("1z4vQn95Egs", "Futur simple ou futur proche?", "Français Authentique", 90939, "futur proche futur simple différence"),
  hypothese: vid("2Ke0dKDJeSg", "L'hypothèse en français", "Le French Club", 185193, "si hypothèse conditionnel imparfait"),
  pronGen: vid("-tjCzDp9yJQ", "Le, la, les ou lui, leur: les pronoms COD et COI", "Français avec Fred", 1581777, "pronoms COD COI français"),
  yEn: vid("w9aa2aQkOuk", "Pronoms «en» et «y» en français: règles, exemples, test", "Français avec Nelly", 1523536, "pronoms y et en français"),
  placePron: vid("31w8PitCBR8", "La place des pronoms compléments en français", "Parlez-vous FRENCH", 204358, "ordre des pronoms compléments"),
  relatifs: vid("gAztaclwNa4", "Les pronoms relatifs en français: que, qui, dont", "Français avec Nelly", 562419, "pronoms relatifs qui que dont où"),
  quotiGen: vid("tcF32PewZqY", "Morning routine in slow French", "Easy French", 588614, "routine quotidienne en français"),
  journee: vid("ntdM4nMURIs", "Une journée à Paris dans ma vie de prof de français", "Français avec Nelly", 692306, "la vie quotidienne en France"),
  hobbies: vid("2l7akQYoxZE", "Talking about hobbies in slow French", "Easy French", 128521, "loisirs en français vocabulaire"),
  voyGen: vid("cFCx5f9x7RI", "20 phrases indispensables pour voyager en France", "Français avec Pierre", 131998, "voyager en France vocabulaire"),
  mondeAFP: vid("K6KniRMNS_A", "Culture: le français dans le monde", "AFP", 301048, "francophonie pays francophones"),
  canada: vid("-kRO6QFrYs4", "Pourquoi les francophones du Canada se connaissent-ils si peu?", "Rad (Radio-Canada)", 427991, "francophonie pays francophones"),
  vacances: vid("A0v-8f5lEi8", "Comment raconter vos vacances en français? DELF B1", "French School TV", 127964, "voyager en France vocabulaire"),
  argGen: vid("-3Qj3i9ZE1Y", "10 connecteurs logiques indispensables pour mieux parler français", "Parlez-vous FRENCH", 499818, "connecteurs logiques français argumenter"),
  delfPE: vid("C1yMET-z0Jc", "DELF B1: exemple de production écrite", "French School TV", 238723, "écrire un texte argumentatif DELF B1"),
  lettre: vid("KcpBpeYFF98", "Production écrite DELF B1: la lettre", "Le French Club", 221380, "écrire un texte argumentatif DELF B1"),
  opinion: vid("-muc6OhocHg", "Donner son opinion en français", "Français avec Pierre", 123227, "exprimer son opinion en français"),
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
  if (!o.sin) s += `<path d="M${X(ah)} ${ay - 72} V ${ay + 8}" stroke="var(--red)" stroke-width="1.6" stroke-dasharray="4 3"/>${T(X(ah), ay + 22, "MAINTENANT", { fs: 11, b: true, c: "var(--red)" })}`;
  if (o.sin || ah > 0.2) s += T(18, ay + 22, "passé", { fs: 11, a: "start", c: "var(--muted)" });
  if (o.sin || ah < 0.72) s += T(244, ay + 22, "futur", { fs: 11, a: "end", c: "var(--muted)" });
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
const TV5 = { t: "TV5MONDE, Apprendre le français", url: "https://apprendre.tv5monde.com/" };
const CONJ = { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" };
const CEFR = { t: "Consejo de Europa, Marco Común Europeo de Referencia para las Lenguas (MCER)", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" };
const PROFE = "Saberes básicos de Segunda Lengua Extranjera I (Francés) de 1º de Bachillerato (RD 243/2022, BOE-A-2022-5521, bloques A. Comunicación, B. Plurilingüismo y C. Interculturalidad; en Cataluña, Decret 171/2022, Segona Llengua Estrangera I)";

function tema(o) {
  const T_ = {
    materia: "Francés I",
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
    fuentes: [RD, CAT, TV5, CONJ, ...(o.fuentes || [])],
    revisado: "2026-11-21",
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
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro fra] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip, CEFR };
