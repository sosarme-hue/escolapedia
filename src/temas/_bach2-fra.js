// Ayudas para Francés II (Segunda Lengua Extranjera II) de 2º de Bachillerato (nivel libro, B1+/B2 y PAU).
// Explicación en castellano y ejemplos en francés. Mismo montaje que Francés I (_bach1-fra.js) e Inglés II (_bach2-ing.js):
// tema({...}) numera los apartados (n.1, n.2…), reparte las respuestas del quiz y comprueba el formato. Los dibujos de
// bloque (260 × 180) reutilizan crono, listas, fil, fra, dlg y escala de _bach1-fra.js y los genéricos de _eso4L5.js.
// Vídeos buscados con tools/videos.py el 21-11-2026 (los más vistos de cada búsqueda), sin repetir ids de otros temas.
const B1 = require("./_bach1-fra");
const { mapa, D } = require("./_util");
const { crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip } = B1;

const NIV = { b: "básico", m: "medio", a: "avanzado" };

// ---------- Vídeos ----------
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, busqueda });
const VID = {
  // 1. Raconter au passé
  pasGen: vid("H50xTU6ZCcI", "Les temps du passé en français", "Français avec Pierre", 219618, "plus-que-parfait passé composé imparfait récit"),
  pqp: vid("eJ5LE2ptw54", "Le plus-que-parfait de l'indicatif", "La conjugaison des verbes français", 328556, "plus-que-parfait passé composé imparfait récit"),
  pasSimple: vid("o1iEAqer1xA", "Le passé simple: cours complet en français", "Parlez-vous FRENCH", 327289, "le passé simple"),
  melange: vid("r-zcRg0k9LM", "Ne mélange plus les temps du passé! Français B1/B2", "French School TV", 32532, "raconter au passé français B1"),
  // 2. Futur antérieur, conditionnel passé, hypothèse
  hypGen: vid("Ch-AGFoGRp8", "L'hypothèse en français: leçon de grammaire complète", "français avec Marine", 186025, "si hypothèse irréel du passé"),
  futAnt: vid("ZDw6Mah5An8", "Le futur antérieur", "Grammaire française", 228519, "futur antérieur"),
  condPasse: vid("i-4-wHukaws", "Le conditionnel passé", "La conjugaison des verbes français", 258840, "conditionnel passé français"),
  hypExo: vid("3VtyH_nr_ZU", "La condition et l'hypothèse en français: 14 exercices", "Français avec Pierre", 147071, "si hypothèse irréel du passé"),
  // 3. Subjonctif
  subjGen: vid("50wuiuvRBcQ", "Subjonctif en français: conjugaison", "Français avec Pierre", 1803903, "subjonctif présent français"),
  subjForm: vid("wdKogBCxACY", "Subjonctif présent: formation", "Parlez-vous FRENCH", 956790, "subjonctif présent français"),
  subjInd: vid("SrFmzqc1HLk", "Le subjonctif vs l'indicatif en français: 20 exercices", "Français avec Pierre", 212073, "subjonctif ou indicatif"),
  subjEsp: vid("x2kVT0Yavzs", "El subjuntivo en francés: todo lo que necesitas saber", "Madame à Paname", 207199, "subjonctif présent français"),
  // 4. Pronoms compléments
  pronGen: vid("4ZGG9u9m_hw", "Pronoms français: explications, exemples et test", "Guillaume Posé", 868884, "pronoms en et y doubles pronoms"),
  yEn: vid("B6er4XipYXE", "Y et en: les pronoms compléments en français", "Parlez-vous FRENCH", 1254189, "pronoms en et y doubles pronoms"),
  doubles: vid("S578h4s0MPk", "Les doubles pronoms, la double pronominalisation", "Tout en français", 109533, "doubles pronoms français"),
  luiLeur: vid("xQqiwEEklkk", "Lui, leur or le, la, les in French?", "French in Plain Sight", 231190, "doubles pronoms français"),
  // 5. Relatifs et mise en relief
  relGen: vid("ZV8U856rM30", "Les pronoms relatifs en français: simples et composés", "Français avec Pierre", 444082, "pronoms relatifs composés lequel auquel duquel"),
  relComp: vid("dlPeWTel_Vk", "Lequel, auquel, duquel: les pronoms relatifs composés", "Français avec Nelly", 192184, "pronoms relatifs composés lequel auquel duquel"),
  relAuth: vid("pzaEluITbmk", "Lequel, auquel, duquel", "Français Authentique", 159231, "pronoms relatifs composés lequel auquel duquel"),
  relief: vid("RF2Nr-Y29Vo", "C'est… qui / que: introduction à la mise en relief", "Tout en français", 58608, "mise en relief c'est qui c'est que"),
  // 6. Passif et nominalisation
  pasvGen: vid("v2QadpcXNfo", "La voix passive et la voix active", "Un Cours de 5 Minutes", 253702, "voix passive français"),
  pasvConj: vid("AWUI4WQICrk", "La voix active et la voix passive", "La conjugaison des verbes français", 267067, "voix passive français"),
  pasvLumos: vid("hfHnltyduVo", "La voix passive", "Lumos, la sorcière des Lettres", 272322, "voix passive français"),
  nomin: vid("u5_OB8cQAy4", "La nominalisation", "Pédagogie AF Cuenca", 164735, "la nominalisation français"),
  // 7. Discours rapporté
  discGen: vid("w-OU9wFhYcc", "Discours direct et indirect en français: leçon complète", "Parlez-vous FRENCH", 908477, "discours indirect français"),
  discJ: vid("mIYGwhwJH64", "Le discours direct et le discours indirect", "J'aimerais savoir!", 716152, "discours indirect français"),
  concord: vid("0y_uNMo5sa4", "La concordance des temps en français", "Français avec Pierre", 160072, "concordance des temps discours rapporté"),
  paroles: vid("zBvsXpl5njc", "Paroles rapportées: discours direct, indirect et indirect libre", "Un Cours de 5 Minutes", 302051, "discours indirect français"),
  // 8. Gérondif et temps
  gerGen: vid("mSKR39HEKNU", "Gérondif ou participe présent? C'est quoi la différence?", "French School TV", 104361, "gérondif français"),
  gerClub: vid("6zvMw3JsZ_4", "Gérondif vs participe présent: les verbes en -ant", "Le French Club", 85017, "gérondif français"),
  adjVerbal: vid("Y9FbqqcIKUA", "Le participe présent, le gérondif et l'adjectif verbal", "Mon Français", 75115, "participe présent gérondif adjectif verbal"),
  depuis: vid("Mk56kgaKQvM", "Ne confonds pas ces prépositions: depuis, pour, pendant, en et dans", "Guillaume Posé", 411115, "depuis pendant il y a français"),
  subTemps: vid("FYtS8TXOeTw", "Expression du temps (subordonnées de temps)", "Grammaire française", 167793, "expression du temps français"),
  // 9. Connecteurs
  conGen: vid("IU92r6BgRe8", "Les connecteurs du discours en français (B1-B2)", "French School TV", 385911, "connecteurs logiques cause conséquence"),
  cause: vid("TX0aHIjNQyg", "Expression de la cause: car, parce que, puisque", "Français avec Pierre", 304724, "connecteurs logiques cause conséquence"),
  concess: vid("mMaQ1vfJjQs", "Expression de l'opposition et de la concession", "Grammaire française", 292245, "exprimer la concession en français"),
  but: vid("OHX6ar-rNGc", "L'expression du but: pour, pour que, afin de, afin que", "Français avec Pierre", 152615, "exprimer le but français"),
  // 10. Le monde d'aujourd'hui
  envGen: vid("qQjC1bnZ4n0", "Parler de l'environnement en français (DELF, DALF)", "French School TV", 164411, "vocabulaire environnement français"),
  reseaux: vid("rcxiQUGHz5Y", "Pourquoi se passer des réseaux sociaux?", "TEDx Talks", 1386447, "réseaux sociaux débat en français"),
  demo: vid("KtDwSuqenBg", "Démocratie et réseaux sociaux: quel impact de la prise de parole en ligne?", "Lumni", 52235, "réseaux sociaux débat en français"),
  themes: vid("fJlFCC4Q2Tk", "DELF B2 production écrite: les 10 thèmes à connaître", "French School TV", 196421, "production écrite DELF B2 essai argumentatif"),
  // 11. Comprendre un texte
  coGen: vid("nvlmO9kasBc", "DELF B1 compréhension orale", "Français avec Pierre", 499599, "compréhension orale DELF B1 astuces"),
  coEnv: vid("WCMbiW2jn6c", "DELF B1 / B2 compréhension orale: thème environnement", "French School TV", 65372, "compréhension orale DELF B1 astuces"),
  coClub: vid("C-DpW7vEVWA", "Compréhension orale DELF B1 corrigée", "Le French Club", 27578, "compréhension orale DELF B1 astuces"),
  // 12. Écrire pour la PAU
  ecrGen: vid("eNdoHymfwu4", "Comment écrire un email formel en français?", "Parlez-vous FRENCH", 1106288, "lettre formelle en français"),
  argumenter: vid("_i15PGZPL9I", "Comment argumenter en français? (DELF B2, DALF C1)", "French School TV", 215757, "production écrite DELF B2 essai argumentatif"),
  connB2: vid("PuR5sYKv128", "DELF B2: les connecteurs indispensables", "French School TV", 305567, "production écrite DELF B2 essai argumentatif"),
  lettreB2: vid("4X1RpWqm5ZI", "DELF B2 production écrite: comment écrire une lettre formelle?", "Aliança Francesa Brasil", 163376, "lettre formelle en français"),
};
const V = (k) => { if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`); return { ...VID[k] }; };

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

// ---------- Montaje del tema ----------
const PATRON = [3, 1, 0, 2, 0, 2, 1, 3, 2, 0, 3, 1];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length], resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}
const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const TV5 = { t: "TV5MONDE, Apprendre le français (niveaux B1 et B2)", url: "https://apprendre.tv5monde.com/" };
const CONJ = { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" };
const CEFR = { t: "Consejo de Europa, Marco Común Europeo de Referencia para las Lenguas (MCER)", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" };
const PROFE = "Saberes básicos de Segunda Lengua Extranjera II (Francés) de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521, bloques A. Comunicación, B. Plurilingüismo y C. Interculturalidad; en Cataluña, Decret 171/2022, Segona Llengua Estrangera II), con la mirada puesta en la prueba de acceso a la universidad (PAU) y en el DELF B1-B2";

function tema(o) {
  const T_ = {
    materia: "Francés II",
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
    fuentes: [RD, CAT, TV5, CONJ, ...(o.fuentes || [])],
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
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro fra2] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, crono, listas, fil, fra, dlg, escala, tb, L, K, T, fit, marco, COL, strip, CEFR, V };
