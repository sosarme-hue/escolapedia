// 1º ESO, lote 5 (Lengua Catalana y Tecnología y Digitalización): lleva un tema ya existente al formato «nivel libro»
// (README, «Tema nivel libro»), adaptado a alumnos de 12 años. Se usa al final del fichero del tema:
// require("./_eso1L5").libro(module.exports, { ... }).
// Misma forma de X que _eso3L8.js. Los vídeos de bloque nuevos están en V (buscados con tools/videos.py el 14-11-2026,
// sin repetir en ninguna rama).
//
// X.lectura: [titulo, html]                      lectura inicial (150-250 palabras)
// X.mas: [[trozo, html]]                         añade párrafos al bloque que contiene «trozo»
// X.svgs: [[trozo, etiqueta, filas, titulo?]]    dibujo propio para un bloque que no lo tenía
// X.bloques: [{ tras?, html, svg, video? }]      bloques nuevos; svg puede ser [etiqueta, filas, titulo?]; video = clave de V
// X.videos: [[trozo, clave de V]]                vídeo para un bloque que ya existía
// X.grupos: [n1, n2, …]                          cuántos bloques hay en cada apartado (1.x, 2.x…)
// X.ejemplos: [[enunciado, [pasos], resultado]]; X.errores: [texto]
// X.niveles: "bbbbbmmmmm"                        nivel de los ejercicios que ya existían (b/m/a)
// X.ejercicios: [["b"|"m"|"a", q, sol]]
// X.cuartas: [texto]                             4.ª opción (incorrecta) para cada pregunta existente de quiz y examen, en orden
// X.quiz / X.examen: [[q, [4 opciones, la correcta primero], e]]; X.tarjetas: [[q, r]]; X.glosario: [[término, definición]]
// X.situacion: { titulo, reto, pasos, producto, evaluacion }; X.saberes: texto que se añade a profesores.saberes
// Al final la respuesta correcta de cada pregunta se coloca en una posición que varía (A, B, C o D, repartidas).
const L = require("./_lenguas");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)"];
// Dibujo de filas con colores automáticos: filas = [[título, texto], …].
const fil = (label, rows, titulo) => L.filas(label, rows.map(([t, d, c], i) => [t, d, c || COL[i % COL.length]]), titulo);
const dibujo = (s) => (Array.isArray(s) ? fil(...s) : s);
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const vid = L.vid;
const V = {
  entrevista: vid("oGDyLjR5C2o", "L'entrevista de feina", "Llengua catalana", 16665),
};
const DECRETS = {
  "Lengua Catalana y Literatura": "Decret 175/2022 de Catalunya (Llengua catalana i literatura, 1r d'ESO): ",
  "Tecnología y Digitalización": "Decreto 175/2022 de Cataluña y currículos autonómicos (Tecnología y Digitalización, 1.º ESO): ",
};

function buscar(T, trozo) {
  const b = T.bloques.find((x) => x.html.includes(trozo));
  if (!b) throw new Error(`libro: no encuentro «${trozo}» en ${T.titulo}`);
  return b;
}

// Coloca la opción correcta en la posición k.
function mover(p, k) {
  const ok = p.o[p.a];
  const resto = p.o.filter((_, i) => i !== p.a);
  resto.splice(k, 0, ok);
  p.o = resto;
  p.a = k;
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
  const sinDibujo = T.bloques.filter((b) => !b.svg).map((b) => b.html.slice(0, 60));
  if (sinDibujo.length) throw new Error(`libro: bloques sin dibujo en ${T.titulo}: ${sinDibujo.join(" | ")}`);
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
  const cuartas = X.cuartas || [];
  if (cuartas.length !== viejas.filter((p) => p.o.length < 4).length) throw new Error(`libro: hacen falta ${viejas.filter((p) => p.o.length < 4).length} cuartas opciones en ${T.titulo} (hay ${cuartas.length})`);
  let c = 0;
  viejas.forEach((p) => { if (p.o.length < 4) p.o.push(cuartas[c++]); });
  for (const [q, o, e] of X.quiz || []) T.quiz.push({ q, o, a: 0, e });
  for (const [q, o, e] of X.examen || []) T.examen.push({ q, o, a: 0, e });
  [...T.quiz, ...T.examen].forEach((p, i) => mover(p, (i * 3 + (i >> 2)) % 4));
  T.tarjetas.push(...(X.tarjetas || []));
  if (X.glosario) T.glosario = X.glosario;
  if (X.situacion) T.situacion = X.situacion;
  if (X.familias) T.familias.push(...X.familias);
  if (X.saberes) T.profesores.saberes += " " + DECRETS[T.materia] + X.saberes;
  if (X.ideas) T.profesores.ideas.push(...X.ideas);
  T.minutos = X.minutos || 100;
  T.revisado = "2026-11-14";
  return T;
}

module.exports = { libro, fil, V };
