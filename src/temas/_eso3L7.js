// 3º ESO, lote 7 (Tecnología y Digitalización y Programación): lleva un tema ya ampliado al formato «nivel libro» (README, «Tema nivel libro»).
// Se usa al final del fichero del tema: require("./_eso3L7").libro(module.exports, { ... }).
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
  procesoA: vid("Mydh5fqs6A8", "Etapas del proceso tecnológico", "JAVIER GAREA PARGA", 25616),
  procesoB: vid("H-jS49WWoBU", "Fases del proceso tecnológico: «Cómo entrenar a tu dragón»", "OSLLOMA", 96474),
  robotA: vid("xvzg-oTZ7wM", "¿Qué es un robot?", "RONIN Educación", 70035),
  robotB: vid("OLt7DBR8qck", "Sensores y actuadores || Robótica", "Jr Ramirez", 7305),
  flexion: vid("BPWnzjQR2Dg", "Esfuerzo de flexión pura: flexión en vigas", "Ingeniosos", 111715),
  diagrama: vid("SZTXmCbfjP0", "Algoritmo y diagrama de flujo", "CompilaTec", 341946),
  listas: vid("kRJ37shzFp0", "¿Qué son las variables y las listas en Scratch? (Parte 1)", "Scratch Team", 66046),
  appinv: vid("Gd4OOEk9-HI", "Curso App Inventor 02: primera app, Hola Mundo en App Inventor", "Ricardo Lozano", 37857),
  pensar: vid("2xLa3hvqf54", "Qué es el pensamiento computacional (parte 1)", "Cosas de Informatica", 20385),
  semaforo: vid("1S7d_saUN0M", "Semáforo con Arduino (Tinkercad)", "Edprofe", 465626),
  ultrasonidos: vid("BAfZWXbKrf0", "Arduino: sensor ultrasónico HC-SR04, medir distancia en centímetros", "ELECTRÓNICOS POR EL MUNDO", 114966),
  preguntas: vid("gbjYt0RTX38", "Juego de preguntas y respuestas en Scratch", "MundoScratch", 92153),
  persecucion: vid("oOqnGMSt-oU", "Juego de persecución en Scratch en 5 minutos", "playPalay", 119848),
};
// Saberes del currículo catalán (3r d'ESO) que se añaden a todos los temas del lote.
const DECRET = (T) => (T.materia.startsWith("Programación") ? "Decret 175/2022 de Catalunya (matèries optatives de programació i robòtica, 3r d'ESO): " : "Decret 175/2022 de Catalunya (Tecnologia i Digitalització, 3r d'ESO): ");

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
  if (X.saberes) T.profesores.saberes += " " + DECRET(T) + X.saberes;
  if (X.ideas) T.profesores.ideas.push(...X.ideas);
  T.minutos = X.minutos || 100;
  T.revisado = "2026-11-13";
  return T;
}

module.exports = { libro, fil, V };
