// Matemáticas 1º ESO: las fracciones. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla, vb, vg } = require("./_eso1c");

// Círculo dividido en n sectores con k coloreados.
const tarta = (cx, cy, r, n, k, c) => [...Array(n)].map((_, i) => {
  const a0 = (2 * Math.PI * i) / n - Math.PI / 2, a1 = (2 * Math.PI * (i + 1)) / n - Math.PI / 2;
  const P = (a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `<path d="M${cx} ${cy} L ${P(a0)} A ${r} ${r} 0 0 1 ${P(a1)} Z" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.5 : 1}" stroke="${c}" stroke-width="1.8"/>`;
}).join("");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Las fracciones",
  minutos: 60,
  objetivos: ["Interpretar las fracciones como parte de la unidad, como cociente y como operador", "Distinguir fracciones propias e impropias y pasar a número mixto", "Obtener fracciones equivalentes, simplificar y comparar", "Sumar, restar, multiplicar y dividir fracciones sencillas"],
  claves: ["numerador", "denominador", "fracción propia", "fracción equivalente", "simplificar", "común denominador"],
  pregunta: {
    texto: "Una pizza se corta en 8 trozos y te comes 2. Otra igual se corta en 4 y te comes 1. ¿En cuál has comido más?",
    respuesta: "En las dos igual: 2/8 y 1/4 son <b>fracciones equivalentes</b>, representan la <mark>misma cantidad de pizza</mark>. Si en la primera juntas los trozos de dos en dos, obtienes justo los cuartos de la segunda.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una fracción?</h3><p>Una <b>fracción</b> a/b expresa una o varias <b>partes iguales</b> de una unidad.</p><ul><li>El <b>denominador</b> (b, abajo) dice en cuántas partes iguales se divide la unidad.</li><li>El <b>numerador</b> (a, arriba) dice cuántas partes se toman.</li></ul><p>3/5 se lee «tres quintos». Los denominadores 2, 3, 4… 10 se leen medios, tercios, cuartos, quintos, sextos, séptimos, octavos, novenos y décimos; a partir de 11 se añade «-avos»: 5/12, «cinco doceavos».</p><p>Una fracción es también una <b>división</b>: 3/5 = 3 : 5 = 0,6.</p>`,
      svg: svg("Una tarta dividida en 5 trozos iguales con 3 coloreados: tres quintos", `${tarta(80, 90, 56, 5, 3, "var(--pen)")}${t(196, 70, "3", { s: 24, d: true, c: "var(--pen)" })}<path d="M180 80 H 212" stroke="var(--ink)" stroke-width="2.5"/>${t(196, 106, "5", { s: 24, d: true })}${t(196, 132, "partes que tomo", { c: "var(--pen)", s: 9 })}${t(196, 146, "de partes iguales", { c: "var(--muted)", s: 9 })}`),
    },
    {
      html: `<h3>La fracción de una cantidad</h3><p>Una fracción también <b>actúa sobre</b> una cantidad (como operador). Para calcular a/b de N:</p><p style="text-align:center"><b>a/b de N = N : b · a</b></p><p>Ejemplo: 3/4 de 20 € → 20 : 4 = 5 € es un cuarto; tres cuartos son 5 · 3 = <mark>15 €</mark>.</p><p>Al revés: si 2/5 de los alumnos de una clase son 10, entonces 1/5 son 5 y la clase entera (5/5) son 25 alumnos.</p>`,
      svg: svg("Una barra de 20 euros dividida en 4 partes de 5 euros; 3 de ellas coloreadas suman 15 euros", `${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 50}" y="60" width="50" height="36" fill="${i < 3 ? "var(--leaf)" : "var(--card)"}" fill-opacity="${i < 3 ? 0.4 : 1}" stroke="var(--leaf)" stroke-width="2"/>${t(55 + i * 50, 84, "5 €", { s: 12 })}`).join("")}${t(130, 44, "20 € en 4 partes", { c: "var(--muted)", s: 11 })}${t(105, 124, "3/4 de 20 € = 15 €", { c: "var(--leaf)", s: 13 })}`),
    },
    {
      html: `<h3>Fracciones propias, impropias y números mixtos</h3><ul><li><b>Propia</b>: numerador <b>menor</b> que el denominador. Vale menos que 1. 3/7.</li><li><b>Igual a la unidad</b>: numerador igual al denominador. 5/5 = 1.</li><li><b>Impropia</b>: numerador <b>mayor</b> que el denominador. Vale más que 1. 9/4.</li></ul><p>Una fracción impropia se puede escribir como <b>número mixto</b> (un entero y una fracción propia) dividiendo: 9 : 4 = 2 y resto 1 → <mark>9/4 = 2 + 1/4</mark>, «dos enteros y un cuarto».</p><p>Al revés: 3 + 2/5 = 15/5 + 2/5 = 17/5.</p>`,
    },
    {
      html: `<h3>Fracciones equivalentes y simplificar</h3><p>Dos fracciones son <b>equivalentes</b> si representan la <b>misma cantidad</b>. Se comprueba con los <b>productos cruzados</b>: a/b = c/d si <mark>a · d = b · c</mark>. 2/3 y 8/12: 2 · 12 = 24 = 3 · 8.</p><ul><li><b>Amplificar</b>: multiplicar numerador y denominador por el mismo número. 2/3 = 4/6 = 6/9…</li><li><b>Simplificar</b>: dividirlos entre un mismo divisor. 12/18 = 6/9 = 2/3.</li></ul><p>Cuando ya no se puede simplificar más tenemos la <b>fracción irreducible</b>. Lo más rápido es dividir entre el mcd: mcd(12, 18) = 6 → 12/18 = 2/3 de un golpe.</p>`,
      svg: svg("Tres barras iguales: un tercio, dos sextos y cuatro doceavos ocupan lo mismo", `${[[3, 1, "var(--pen)", "1/3"], [6, 2, "var(--leaf)", "2/6"], [12, 4, "var(--sun)", "4/12"]].map(([n, k, c, l], j) => [...Array(n)].map((_, i) => `<rect x="${(60 + (i * 180) / n).toFixed(1)}" y="${30 + j * 42}" width="${(180 / n).toFixed(1)}" height="24" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.45 : 1}" stroke="${c}" stroke-width="1.6"/>`).join("") + t(50, 47 + j * 42, l, { c, s: 12, a: "end" })).join("")}<path d="M120 22 V 146" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>${t(150, 166, "misma cantidad", { c: "var(--red)", s: 12 })}`),
      video: vb("fraB"),
    },
    {
      html: `<h3>Comparar fracciones</h3><ul><li><b>Mismo denominador</b>: es mayor la que tiene mayor numerador. 5/8 &gt; 3/8.</li><li><b>Mismo numerador</b>: es mayor la de <b>menor</b> denominador, porque sus partes son más grandes. 2/3 &gt; 2/5.</li><li><b>Caso general</b>: se reducen a <b>común denominador</b> usando el <b>mcm</b> de los denominadores.</li></ul><p>Ejemplo: ¿3/4 o 5/6? mcm(4, 6) = 12. 3/4 = 9/12 y 5/6 = 10/12. Por tanto <mark>3/4 &lt; 5/6</mark>.</p><p>También se puede hacer la división de cada una: 0,75 &lt; 0,83…</p>`,
      svg: (() => { const r = recta(0, 1, 100, 30, 230, [[3 / 4, "", "var(--pen)"], [5 / 6, "", "var(--leaf)"]]); return svg("Recta de 0 a 1 con tres cuartos y cinco sextos: cinco sextos está más a la derecha", `${r.s}${t(r.X(3 / 4) - 4, 80, "3/4", { c: "var(--pen)", s: 12 })}${t(r.X(5 / 6) + 10, 80, "5/6", { c: "var(--leaf)", s: 12 })}${t(130, 40, "9/12 < 10/12", { s: 14 })}${t(130, 152, "a la derecha, mayor", { c: "var(--muted)", s: 11 })}`); })(),
    },
    {
      html: `<h3>Sumar y restar fracciones</h3><p>Con el <b>mismo denominador</b>, se suman o restan los numeradores y el denominador se deja igual: 2/9 + 5/9 = 7/9.</p><p>Con <b>distinto denominador</b>:</p><ol><li>Se busca el <b>mcm</b> de los denominadores.</li><li>Se escribe cada fracción equivalente con ese denominador (se divide el mcm entre cada denominador y se multiplica por el numerador).</li><li>Se suman o restan los numeradores y se <b>simplifica</b>.</li></ol><p>Ejemplo: 1/4 + 5/6 → mcm = 12 → 3/12 + 10/12 = <mark>13/12</mark>. Nunca se suman denominadores entre sí.</p>`,
      video: vb("fraB2"),
    },
    {
      html: `<h3>Multiplicar y dividir fracciones</h3><p><b>Multiplicar</b>: numerador por numerador y denominador por denominador.</p><p style="text-align:center"><b>a/b · c/d = (a · c)/(b · d)</b> &nbsp; 2/5 · 3/4 = 6/20 = 3/10</p><p><b>Dividir</b>: se multiplica «en cruz», que es lo mismo que multiplicar por la <b>inversa</b> de la segunda.</p><p style="text-align:center"><b>a/b : c/d = (a · d)/(b · c)</b> &nbsp; 2/3 : 4/5 = 10/12 = 5/6</p><p>La <b>inversa</b> de a/b es b/a (se le da la vuelta): la inversa de 3/7 es 7/3. Para multiplicar por un entero, se multiplica solo el numerador: 3 · 2/7 = 6/7.</p>`,
    },
    {
      html: `<h3>Problemas con fracciones</h3><p>Antes de operar, piensa qué es <b>el total</b>:</p><ul><li><b>Una parte del total</b>: de 300 páginas leo 2/5 → 300 : 5 · 2 = 120 páginas.</li><li><b>Lo que queda</b>: si he leído 2/5, me quedan 1 − 2/5 = <b>3/5</b>, que son 180 páginas.</li><li><b>Sumar partes</b>: el lunes leo 1/3 y el martes 1/4 del libro. En total 1/3 + 1/4 = 7/12; me quedan 5/12.</li></ul><p>Un dibujo con una barra dividida en partes ayuda mucho a no equivocarse.</p>`,
    },
  ],
  figura: {
    titulo: "Las fracciones en un vistazo",
    svg: filas("Resumen: numerador y denominador; fracción de una cantidad; propias e impropias; equivalentes con productos cruzados; comparar y sumar con común denominador; multiplicar en línea y dividir en cruz", [["a/b", "a partes de b iguales", "var(--pen)"], ["a/b de N", "N : b · a", "var(--inf)"], ["Impropia", "a > b · número mixto", "var(--sun)"], ["Equivalentes", "a · d = b · c · simplificar", "var(--leaf)"], ["+ y −", "común denominador (mcm)", "var(--red)"], ["· y :", "en línea · en cruz", "var(--ink)"]], 210),
  },
  video: vg("fraV"),
  quiz: mezcla([
    { q: "En 4/9, el denominador es…", o: ["9", "4", "13"], a: 0, e: "El de abajo." },
    { q: "¿Cómo se lee 7/12?", o: ["siete doceavos", "siete docenas", "doce séptimos"], a: 0, e: "A partir de 11, -avos." },
    { q: "2/3 de 30 =", o: ["20", "10", "45"], a: 0, e: "30 : 3 · 2." },
    { q: "¿Cuál es impropia?", o: ["8/5", "5/8", "5/5"], a: 0, e: "Numerador mayor." },
    { q: "11/4 como número mixto:", o: ["2 + 3/4", "3 + 1/4", "2 + 1/4"], a: 0, e: "11 : 4 = 2, resto 3." },
    { q: "¿Equivalente a 3/5?", o: ["9/15", "6/8", "5/3"], a: 0, e: "Por 3." },
    { q: "La irreducible de 18/24 es…", o: ["3/4", "9/12", "6/8"], a: 0, e: "Entre 6." },
    { q: "¿Cuál es mayor?", o: ["2/3", "2/5", "2/7"], a: 0, e: "Mismo numerador, menor denominador." },
    { q: "1/2 + 1/3 =", o: ["5/6", "2/5", "1/5"], a: 0, e: "3/6 + 2/6." },
    { q: "3/4 : 1/2 =", o: ["3/2", "3/8", "1/2"], a: 0, e: "En cruz: 6/4." },
  ]),
  examen: mezcla([
    { q: "5/6 − 1/4 =", o: ["7/12", "4/2", "1/3"], a: 0, e: "10/12 − 3/12." },
    { q: "Si 3/8 de una cantidad son 12, la cantidad es…", o: ["32", "36", "4,5"], a: 0, e: "1/8 = 4." },
    { q: "2/3 · 9/4 =", o: ["3/2", "18/7", "11/7"], a: 0, e: "18/12." },
  ]),
  feynman: ["Qué indican el numerador y el denominador", "Cómo calcular la fracción de una cantidad", "Por qué 2/4 y 1/2 son la misma cantidad", "Por qué hace falta común denominador para sumar", "Cómo se divide una fracción entre otra"],
  mapa: mapa("FRACCIONES", "var(--eso)", [
    ["Significado", "parte · cociente · operador", "var(--pen)"],
    ["Tipos", "propia · impropia · mixto", "var(--sun)"],
    ["Equivalentes", "amplificar · simplificar", "var(--leaf)"],
    ["Operaciones", "mcm · en línea · en cruz", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Denominador", "Partes iguales en que se divide la unidad."],
    ["Numerador", "Partes que se toman."],
    ["a/b de N", "N : b · a."],
    ["Fracción impropia", "Numerador mayor que el denominador: vale más de 1."],
    ["Equivalentes", "a · d = b · c."],
    ["Irreducible", "No se puede simplificar más."],
    ["Sumar", "Con común denominador (mcm)."],
    ["Dividir", "En cruz: (a · d)/(b · c)."],
  ],
  familias: ["Cocinad con la receta a la mitad o al doble y hablad de las fracciones de cada ingrediente.", "Al repartir una pizza o una tableta, decid qué fracción toca a cada uno.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Fracciones: significados, fracciones equivalentes, comparación, operaciones y problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Tiras de papel plegadas para descubrir equivalencias.", "Muro de fracciones para comparar.", "Recetas escaladas y repartos reales."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): fracciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula y simplifica: 2/3 + 1/6 − 1/2.", pasos: ["mcm(3, 6, 2) = 6.", "4/6 + 1/6 − 3/6 = 2/6.", "Simplificamos entre 2: 1/3."], resultado: "1/3" },
    { enunciado: "Ordena de menor a mayor: 1/2, 3/5 y 4/10.", pasos: ["mcm(2, 5, 10) = 10.", "1/2 = 5/10; 3/5 = 6/10; 4/10.", "4 < 5 < 6."], resultado: "4/10 < 1/2 < 3/5" },
    { enunciado: "De una garrafa de 8 litros se ha gastado 3/4. ¿Cuántos litros quedan?", pasos: ["Gastado: 8 : 4 · 3 = 6 L.", "Queda 8 − 6 = 2 L.", "Otra forma: queda 1/4 de 8 = 2 L."], resultado: "2 litros." },
  ],
  errores: [
    "Sumar numeradores y denominadores: 1/2 + 1/4 no es 2/6.",
    "Pensar que 1/8 es mayor que 1/4 porque 8 es mayor que 4.",
    "Simplificar restando en lugar de dividiendo.",
    "Dividir sin dar la vuelta a la segunda fracción.",
    "Olvidar simplificar el resultado.",
  ],
  ejercicios: [
    { q: "Escribe la fracción y cómo se lee: un bizcocho en 6 trozos, me como 5.", sol: "5/6, «cinco sextos»." },
    { q: "Calcula 3/5 de 45 y 7/10 de 200.", sol: "27 y 140." },
    { q: "Escribe 13/3 como número mixto y 4 + 2/7 como fracción.", sol: "4 + 1/3; 30/7." },
    { q: "Escribe tres fracciones equivalentes a 5/7.", sol: "10/14, 15/21, 20/28." },
    { q: "Simplifica hasta la irreducible: 24/36 y 45/60.", sol: "2/3 y 3/4." },
    { q: "Ordena: 5/6, 3/4, 2/3.", sol: "mcm 12: 10/12, 9/12, 8/12 → 2/3 < 3/4 < 5/6." },
    { q: "Calcula: 3/8 + 1/4 y 7/10 − 2/5.", sol: "3/8 + 2/8 = 5/8; 7/10 − 4/10 = 3/10." },
    { q: "Calcula: 4/9 · 3/2 y 5/6 : 10/3.", sol: "12/18 = 2/3; 15/60 = 1/4." },
    { q: "En una clase de 28, 3/7 practican fútbol. ¿Cuántos no lo practican?", sol: "Practican 12; no lo practican 16 (4/7)." },
    { q: "Pinto 1/3 de una valla el sábado y 2/5 el domingo. ¿Qué fracción me queda?", sol: "1/3 + 2/5 = 11/15; queda 4/15." },
  ],
};
