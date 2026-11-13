// 3º ESO, lote 10 (Cultura Clásica, Oratoria y Religión): lleva un tema ya ampliado al formato «nivel libro» (README, «Tema nivel libro»).
// Se usa al final del fichero del tema: require("./_eso3L10").libro(module.exports, { ... }).
// Los vídeos de bloque están en V (buscados con tools/videos.py el 13-11-2026, sin repetir en ninguna rama).
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
  partenon: vid("zaEx0hgFx3Y", "El Partenón de Atenas explicado en 5 minutos", "Belén Montilla - Una profe con historia", 86745),
  panteon: vid("kIPRpaCauUc", "El Panteón de Roma en 14 minutos", "Arqui.Cultura", 263301),
  punicas: vid("NG6kV1yTros", "Las guerras púnicas (la historia de Roma)", "Infonimados", 752036),
  colonias: vid("-m4quwjY7u0", "La colonización griega del Mediterráneo", "Sr. Barbosa", 7584),
  democracia: vid("Ml_w0INf4DM", "La democracia en la Antigua Grecia", "TICMAS Educación", 129846),
  derecho: vid("kYxgOyPcZYc", "¿Qué es el derecho romano? Origen, fuentes y legado", "Cuaderno de Historia", 149428),
  familias: vid("LEDGT8acqpg", "Las familias lingüísticas (lenguas indoeuropeas y otras)", "El Mapa de Sebas", 150494),
  romances: vid("r3vdVMCl1pA", "Las lenguas romances (idiomas latinos)", "El Mapa de Sebas", 183141),
  troya: vid("A-iYLes9BBg", "La guerra de Troya en 9 minutos: mito, leyenda y realidad", "Memorias de Pez", 637960),
  narciso: vid("xFtvWdU-zNA", "El mito de Narciso (versión de Ovidio)", "Pandora's Curiosity", 46865),
  numancia: vid("W0Y8-KBJPyE", "El asedio de Numancia por Escipión Emiliano", "Historia ex Hispania", 44807),
  merida: vid("BsgVCzLvKKY", "Mérida romana (Augusta Emerita) en reconstrucción virtual", "VirTimePlace", 88835),
  tragedia: vid("fOL_P4jGTyw", "Tragedia griega: historia, características y representantes", "El Nictálope", 97076),
  gladiador: vid("BzRNuEkNeJc", "Así era la vida de un gladiador romano", "Historia Incomprendida", 231904),
  domus: vid("0yC6ITA1UcM", "Viviendas romanas: los espacios privados y la vida pública", "El Orden de la Arquitectura", 164116),
  termas: vid("BHcMNJrg9SM", "¿Qué son las termas romanas? ¿Cuáles son sus partes?", "Bluecinante", 27034),
  argumentar: vid("BAQYUo3JmkM", "Cómo argumentar correctamente (nivel fácil)", "Nacho Tellez", 60943),
  tiposArg: vid("tuxhapbjMBk", "5 tipos de argumentos explicados con ejemplos", "Profesor Paolo Astorga", 121836),
  hablar: vid("XUqrvbsTfck", "Cómo hablar: comunica, conecta y hazte recordar", "TEDx Talks (Adrià Solà Pastor)", 988732),
  noVerbal: vid("8FDMHlcqg3E", "La comunicación no verbal", "Teresa Baró · Comunicación de éxito", 185556),
  debateEst: vid("WGPVCgVy_S8", "Cómo es la estructura de un debate", "La Profe Mónica", 116537),
  debatir: vid("YInVAUddV2c", "Cómo debatir bien", "Nacho Tellez", 179537),
  falacias: vid("eoYeKJNxvHE", "¿Cómo detectar mentiras? Las falacias (parte 2)", "CuriosaMente", 539769),
  hombrePaja: vid("y__bFAkZCAA", "La falacia del hombre de paja: qué es y cómo defenderse", "Psicoactiva", 42763),
  gozo: vid("OOUVOhHw7Ew", "Del miedo escénico al gozo escénico", "TEDx Talks (Gonzalo Álvarez)", 1082589),
  miedo: vid("_L9jKOeRBR4", "¿Cómo perder el miedo a hablar en público? 12 técnicas", "Fernando Miralles", 195595),
  discurso: vid("2OKZGr0AIFw", "Cómo preparar un discurso en 5 minutos (con ejemplos)", "Nacho Tellez", 577100),
  estructura: vid("XAJ2DCyHjvg", "Cómo preparar un discurso: sigue esta estructura", "Consejos Imagen", 203981),
  iniciar: vid("-9N5JPkVK4M", "Cómo iniciar una presentación en público: 10 ideas con ejemplos", "Nacho Tellez", 751235),
  tips: vid("UGsJ90Y-WmA", "10 tips para presentaciones efectivas", "Capacitación Efectiva", 199424),
  vozPersuade: vid("YlI-e4QJWG0", "Persuade con tu voz: estrategias para sonar creíble", "TEDx Talks (Emma Rodero)", 5930556),
  manos: vid("hCyXqeDaDOk", "Cómo usar las manos al hablar en público", "Sebastián Lora", 572109),
  gotico: vid("dgsFJGD1qWs", "El arte gótico en 15 minutos", "Belén Montilla", 157268),
  camino: vid("E_dQnfpSGz8", "Todo lo que hay que saber sobre el Camino de Santiago", "DW Español", 356875),
  quienBiblia: vid("vgd-8wj_JtM", "¿Quién escribió la Biblia?", "CuriosaMente", 704269),
  abraham: vid("TOhtUVPYumA", "La vida completa de Abraham en un mapa", "Ear to Hear", 2732586),
  viasTomas: vid("Rnq0r4YhGQ0", "Las 5 vías de Tomás de Aquino, explicación fácil", "Explainerstv", 276064),
  religiones: vid("EMeUQUFZQDo", "Todas las religiones explicadas en 10 minutos", "Masomenos", 895672),
  sacramentos: vid("BWaZ3yhljNQ", "¿Qué son los sacramentos y cuántos hay?", "En ti confío", 134824),
  primeros: vid("JR002-vu2xc", "Los primeros cristianos: de secta del judaísmo a religión del Imperio", "Academia Play", 665337),
  parabolas: vid("jZinwS_2jsQ", "Parábolas de Jesús", "Proyecto Biblia", 342377),
  bienaventuranzas: vid("2mOdRQ1ymXU", "¿Cuáles son las bienaventuranzas de Jesús? ¿Qué significan?", "Break Free", 290550),
  dsi: vid("GcHHa-ll8no", "Qué es la doctrina social de la Iglesia", "Se Buscan Rebeldes", 38120),
};
// Marco curricular que se añade a profesores.saberes según la materia.
const MARCO = {
  "Cultura Clásica": "Decret 175/2022 de Catalunya (Cultura clàssica, optativa de l'ESO): ",
  "Oratoria y debate": "Competencia en comunicación lingüística y competencia ciudadana (RD 217/2022, perfil de salida): ",
  Religión: "Currículo de Religión Católica de la ESO (Resolución de 21 de junio de 2022, BOE de 24-6-2022): ",
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
  if (X.saberes) T.profesores.saberes += " " + (MARCO[T.materia] || "") + X.saberes;
  if (X.ideas) T.profesores.ideas.push(...X.ideas);
  T.minutos = X.minutos || 100;
  T.revisado = "2026-11-13";
  return T;
}

module.exports = { libro, fil, V };
