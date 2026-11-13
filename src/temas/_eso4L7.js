// 4º ESO, lote 7 (Inglés y Francés): lleva un tema ya ampliado al formato «nivel libro» (README).
// Se usa al final del fichero del tema: require("./_eso4L7").libro(module.exports, { ... }).
//
// X.lectura: [titulo, html]                      lectura inicial (150-250 palabras)
// X.mas: [[trozo, html]]                         añade párrafos al bloque que contiene «trozo»
// X.svgs: [[trozo, etiqueta, filas, titulo?]]    dibujo propio para un bloque que no lo tenía
// X.bloques: [{ tras?, html, svg }]              bloques nuevos; svg puede ser [etiqueta, filas, titulo?]
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
    if (nb.video) nuevo.video = nb.video;
    if (!nb.tras) { T.bloques.push(nuevo); continue; }
    const i = T.bloques.indexOf(buscar(T, nb.tras));
    let j = i + 1;
    while (T.bloques[j] && T.bloques[j]._libro === nb.tras) j++;
    Object.defineProperty(nuevo, "_libro", { value: nb.tras });
    T.bloques.splice(j, 0, nuevo);
  }
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
  (X.cuartas || []).forEach((o, i) => { if (viejas[i]) viejas[i].o.push(o); });
  for (const [q, o, a, e] of X.quiz || []) T.quiz.push({ q, o, a, e });
  for (const [q, o, a, e] of X.examen || []) T.examen.push({ q, o, a, e });
  T.tarjetas.push(...(X.tarjetas || []));
  if (X.glosario) T.glosario = X.glosario;
  if (X.situacion) T.situacion = X.situacion;
  if (X.familias) T.familias.push(...X.familias);
  if (X.saberes) T.profesores.saberes += " " + X.saberes;
  if (X.ideas) T.profesores.ideas.push(...X.ideas);
  T.minutos = X.minutos || 100;
  T.revisado = "2026-11-13";
  return T;
}

module.exports = { libro, fil };
