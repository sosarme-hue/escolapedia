// 3º ESO, lote 8 (Lengua Catalana y Francés): lleva un tema ya ampliado al formato «nivel libro» (README, «Tema nivel libro»).
// Se usa al final del fichero del tema: require("./_eso3L8").libro(module.exports, { ... }).
// Misma forma de X que _eso3L6.js (Inglés). Los vídeos de bloque están en V (buscados con tools/videos.py el 13-11-2026,
// sin repetir en ninguna rama).
//
// X.lectura: [titulo, html]                      lectura inicial (150-250 palabras)
// X.mas: [[trozo, html]]                         añade párrafos al bloque que contiene «trozo»
// X.svgs: [[trozo, etiqueta, filas, titulo?]]    dibujo propio para un bloque que no lo tenía
// X.bloques: [{ tras?, html, svg, video? }]      bloques nuevos; svg puede ser [etiqueta, filas, titulo?]; video = clave de V
// X.videos: [[trozo, clave de V]]                vídeo para un bloque que ya existía
// X.grupos: [n1, n2, …]                          cuántos bloques hay en cada apartado (1.x, 2.x…)
// X.ejemplos: [[enunciado, [pasos], resultado]]; X.errores: [texto]
// X.niveles: "bbbbmmmmaa"                        nivel de los ejercicios que ya existían (b/m/a)
// X.ejercicios: [["b"|"m"|"a", q, sol]]
// X.cuartas: [texto]                             4.ª opción (incorrecta) para cada pregunta existente de quiz y examen, en orden
// X.quiz / X.examen: [[q, [4 opciones], a, e]]; X.tarjetas: [[q, r]]; X.glosario: [[término, definición]]
// X.situacion: { titulo, reto, pasos, producto, evaluacion }; X.saberes: texto que se añade a profesores.saberes
const L = require("./_lenguas");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)"];
// Dibujo de filas con colores automáticos: filas = [[título, texto], …].
const fil = (label, rows, titulo) => L.filas(label, rows.map(([t, d], i) => [t, d, rows[i][2] || COL[i % COL.length]]), titulo);
const dibujo = (s) => (Array.isArray(s) ? fil(...s) : s);
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const vid = L.vid;
const V = {
  tirant: vid("FC3jyI7VTIY", "Bits de literatura: Tirant lo Blanc", "EduCaixaTVcat", 40184),
  categories: vid("tJvpH7kwwm4", "Categories gramaticals", "catala1eso Lafarga", 11116),
  bilinguisme: vid("J0Lr6DU4MlU", "Bilingüisme o minorització? | Llengua i societat | ESO i Batxillerat", "3CatCampus", 84722),
  expositiu: vid("3BkWBWDfpKk", "El text expositiu", "Olimpia Moya", 2224),
  fonetica: vid("5ODK30vMDrI", "Fonètica: obertes, tancades, sonores i sordes", "Andrea Cuenca", 84555),
  llull: vid("J7JpqkGEUwY", "L'obra de Ramon Llull (literatura catalana medieval)", "Enciclopèdia Catalana", 19002),
  composicio: vid("ubLWsteFChI", "Derivació i composició", "Fixa-t'hi, tu", 4267),
  derivacio: vid("OypbRybg7pA", "La derivació", "Miriam Criado", 5824),
  estilDirecte: vid("Hk_SlCXuRyI", "L'estil directe i indirecte: transforma diàlegs al discurs indirecte", "Parlem d'escriure en català", 11990),
  regim: vid("CPTmK3jzwJs", "Els complements verbals (I): el complement de règim verbal", "Pau Bou Jordà", 43869),
  diacritics: vid("rlbZRD-hlMM", "Els 15 accents diacrítics", "Valencià a la Dipu", 174771),
  barroc: vid("FKxcPgj_3Vk", "Literatura barroca: història, característiques i representants", "El Nictálope", 249759),
  sintagmes: vid("nLkp0ru-R00", "Els sintagmes | Morfosintaxi | 3r i 4t ESO", "3CatCampus", 6500),
  famille: vid("dw-05yO2hn4", "La famille - L'arbre généalogique - Vocabulaire", "Smile and Learn - Français", 1863390),
  futurProche: vid("S80DXgd-i2s", "Learn French: know the futur proche with aller in under 5 minutes", "Learn French With Alexa", 219077),
  loisirs: vid("-0YM3EFcl2A", "Les loisirs (activités) en français, FLE – vocabulaire", "Flemotion", 114591),
  maison: vid("cV98pgc6_50", "Les objets de la maison, les parties de la maison: vocabulaire", "Smile and Learn - Français", 385110),
  partitifs: vid("GulM4ZwQggA", "Les articles partitifs et les aliments", "Institut Studio Français", 454782),
  auxiliaire: vid("ZEmTEqPd3-s", "Avoir ou être ? Comment choisir le bon auxiliaire", "Le French Club", 204828),
  presenter: vid("BWpuzDQuoWM", "Se présenter en français", "Français avec Pierre", 578771),
  meteo: vid("Anb9NjCq1DM", "Comment on dit #2: la météo, le temps qu'il fait", "Tout en français", 136140),
};
// Saberes del currículo catalán (3r d'ESO) que se añaden a todos los temas del lote.
const DECRETS = {
  "Lengua Catalana y Literatura": "Decret 175/2022 de Catalunya (Llengua catalana i literatura, 3r d'ESO): ",
  "Francés": "Decret 175/2022 de Catalunya (Segona llengua estrangera, 3r d'ESO): ",
};

function buscar(T, trozo) {
  const b = T.bloques.find((x) => x.html.includes(trozo));
  if (!b) throw new Error(`libro: no encuentro «${trozo}» en ${T.titulo}`);
  return b;
}

function libro(T, X) {
  if (X.lectura) T.lectura = { titulo: X.lectura[0], html: X.lectura[1] };
  for (const [trozo, html] of X.mas || []) { const b = buscar(T, trozo); b.html += html; }
  for (const [trozo, ...args] of X.svgs || []) { const b = buscar(T, trozo); if (b.svg) throw new Error(`libro: «${trozo}» ya tiene dibujo`); b.svg = fil(...args); }
  for (const nb of X.bloques || []) {
    const nuevo = { html: nb.html, svg: dibujo(nb.svg) };
    if (nb.video) { nuevo.video = typeof nb.video === "string" ? V[nb.video] : nb.video; if (!nuevo.video) throw new Error(`libro: vídeo «${nb.video}» no está en V`); }
    if (!nb.tras) { T.bloques.push(nuevo); continue; }
    const i = T.bloques.indexOf(buscar(T, nb.tras));
    let j = i + 1;
    while (T.bloques[j] && T.bloques[j]._libro === nb.tras) j++;
    Object.defineProperty(nuevo, "_libro", { value: nb.tras });
    T.bloques.splice(j, 0, nuevo);
  }
  for (const [trozo, k] of X.videos || []) { const b = buscar(T, trozo); if (b.video) throw new Error(`libro: «${trozo}» ya tiene vídeo`); if (!V[k]) throw new Error(`libro: vídeo «${k}» no está en V`); b.video = V[k]; }
  // Numeración de los apartados: 1.1, 1.2… 2.1…
  const g = X.grupos || [Math.ceil(T.bloques.length / 3), Math.ceil(T.bloques.length / 3), T.bloques.length];
  let k = 0;
  g.forEach((n, gi) => { for (let s = 1; s <= n && k < T.bloques.length; s++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${gi + 1}.${s} `); });
  if (k < T.bloques.length) throw new Error(`libro: grupos (${g}) no cubren los ${T.bloques.length} bloques de ${T.titulo}`);

  for (const [enunciado, pasos, resultado] of X.ejemplos || []) T.ejemplos.push({ enunciado, pasos, resultado });
  T.errores.push(...(X.errores || []));
  const niv = X.niveles || "";
  T.ejercicios.forEach((e, i) => { if (niv[i]) e.nivel = NIV[niv[i]]; });
  for (const [n, q, sol] of X.ejercicios || []) T.ejercicios.push({ nivel: NIV[n], q, sol });
  const viejas = [...T.quiz, ...T.examen];
  (X.cuartas || []).forEach((o, i) => { if (viejas[i] && o && viejas[i].o.length < 4) viejas[i].o.push(o); });
  for (const [q, o, a, e] of X.quiz || []) T.quiz.push({ q, o, a, e });
  for (const [q, o, a, e] of X.examen || []) T.examen.push({ q, o, a, e });
  T.tarjetas.push(...(X.tarjetas || []));
  if (X.glosario) T.glosario = X.glosario;
  if (X.situacion) T.situacion = X.situacion;
  if (X.familias) T.familias.push(...X.familias);
  if (X.saberes) T.profesores.saberes += " " + DECRETS[T.materia] + X.saberes;
  if (X.ideas) T.profesores.ideas.push(...X.ideas);
  T.minutos = X.minutos || 100;
  T.revisado = "2026-11-13";
  return T;
}

module.exports = { libro, fil, V };
