// Matemáticas 2º ESO: fracciones. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla } = require("./_eso2c");

// Barra dividida en n partes con k coloreadas.
const barra = (x, y, w, n, k, c) => [...Array(n)].map((_, i) => `<rect x="${(x + (i * w) / n).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="22" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.45 : 1}" stroke="${c}" stroke-width="1.8"/>`).join("");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Fracciones",
  minutos: 60,
  objetivos: ["Interpretar una fracción como parte, como cociente y como operador", "Reconocer y obtener fracciones equivalentes y la fracción irreducible", "Comparar y ordenar fracciones", "Sumar, restar, multiplicar y dividir fracciones y resolver problemas"],
  claves: ["numerador", "denominador", "fracción equivalente", "fracción irreducible", "mínimo común denominador", "fracción inversa"],
  pregunta: {
    texto: "En una pizzería te ofrecen 3/8 de una pizza o 2/5 de otra igual. ¿Qué trozo es mayor?",
    respuesta: "Para compararlas se ponen con el mismo denominador: 3/8 = 15/40 y 2/5 = 16/40. Por tanto, <mark>2/5 es un poco mayor</mark>. También se puede dividir: 3/8 = 0,375 y 2/5 = 0,4.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una fracción?</h3><p>Una <b>fracción</b> a/b tiene un <b>numerador</b> (a, arriba) y un <b>denominador</b> (b, abajo, distinto de 0). Se puede entender de tres maneras:</p><ul><li><b>Parte de un todo</b>: el denominador dice en cuántas partes iguales se divide la unidad y el numerador cuántas se toman. 3/4 de una tableta.</li><li><b>Cociente</b>: 3/4 = 3 : 4 = 0,75.</li><li><b>Operador</b>: «3/4 de 200» = 200 · 3 : 4 = 150.</li></ul><p>Si el numerador es menor que el denominador, la fracción es <b>propia</b> (menor que 1); si es mayor, <b>impropia</b> (mayor que 1): 7/4 = 1 + 3/4.</p>`,
      svg: svg("Una barra dividida en 4 partes con 3 coloreadas: tres cuartos", `${barra(30, 50, 200, 4, 3, "var(--pen)")}${t(130, 34, "la unidad en 4 partes iguales", { c: "var(--muted)", s: 11 })}${t(130, 104, "3/4", { c: "var(--pen)", s: 22 })}${t(130, 128, "3 partes de 4", { s: 12 })}${t(130, 156, "3/4 de 200 = 150", { c: "var(--leaf)", s: 13 })}`),
    },
    {
      html: `<h3>Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la <mark>misma cantidad</mark>: 1/2 = 2/4 = 4/8. Se comprueba con los <b>productos cruzados</b>: a/b = c/d si a · d = b · c. Por ejemplo, 2/3 y 6/9: 2 · 9 = 18 y 3 · 6 = 18.</p><p>Se obtienen fracciones equivalentes:</p><ul><li><b>Amplificando</b>: multiplicando numerador y denominador por el mismo número. 2/3 = 8/12 (por 4).</li><li><b>Simplificando</b>: dividiendo los dos entre un divisor común. 18/24 = 3/4 (entre 6).</li></ul><p>Cuando ya no se puede simplificar más se llega a la <b>fracción irreducible</b>. Lo más rápido es dividir entre el <b>mcd</b> del numerador y el denominador.</p>`,
      svg: svg("Tres barras iguales: un medio, dos cuartos y cuatro octavos ocupan lo mismo", `${barra(40, 30, 180, 2, 1, "var(--pen)")}${barra(40, 72, 180, 4, 2, "var(--leaf)")}${barra(40, 114, 180, 8, 4, "var(--sun)")}${t(30, 46, "1/2", { c: "var(--pen)", s: 12, a: "end" })}${t(30, 88, "2/4", { c: "var(--leaf)", s: 12, a: "end" })}${t(30, 130, "4/8", { c: "var(--sun)", s: 12, a: "end" })}<path d="M130 22 V 144" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>${t(130, 166, "misma cantidad", { c: "var(--red)", s: 12 })}`),
      video: { id: "QZTyePr_Snk", titulo: "Fracciones equivalentes: explicación gráfica y numérica", canal: "Matemáticas profe Alex", vistas: 4231754 },
    },
    {
      html: `<h3>Comparar y ordenar fracciones</h3><ul><li><b>Mismo denominador</b>: es mayor la de mayor numerador. 5/9 &gt; 2/9.</li><li><b>Mismo numerador</b>: es mayor la de menor denominador (partes más grandes). 3/5 &gt; 3/8.</li><li><b>Caso general</b>: se reducen a <b>común denominador</b> con el mcm de los denominadores y se comparan los numeradores.</li></ul><p>Ejemplo: ordena 3/4, 5/6 y 7/12. mcm(4, 6, 12) = 12 → 9/12, 10/12, 7/12. Por tanto, <mark>7/12 &lt; 3/4 &lt; 5/6</mark>.</p>`,
      svg: (() => { const r = recta(0, 1, 100, 30, 230, [[7 / 12, "", "var(--sun)"], [3 / 4, "", "var(--pen)"], [5 / 6, "", "var(--leaf)"]]); return svg("Recta de 0 a 1 con 7/12, 3/4 y 5/6 colocados en orden", `${r.s}${t(r.X(7 / 12), 76, "7/12", { c: "var(--sun)", s: 12 })}${t(r.X(3 / 4), 56, "3/4", { c: "var(--pen)", s: 12 })}${t(r.X(5 / 6) + 8, 76, "5/6", { c: "var(--leaf)", s: 12 })}${t(130, 152, "7/12 < 3/4 < 5/6", { s: 14 })}`); })(),
    },
    {
      html: `<h3>Sumar y restar fracciones</h3><p>Si tienen el <b>mismo denominador</b>, se suman o restan los numeradores y se deja el denominador: 2/7 + 3/7 = 5/7.</p><p>Si tienen <b>distinto denominador</b>:</p><ol><li>Se calcula el <b>mcm</b> de los denominadores (será el nuevo denominador).</li><li>Se divide el mcm entre cada denominador y se multiplica por su numerador.</li><li>Se suman o restan los numeradores y se <b>simplifica</b>.</li></ol><p>Ejemplo: 5/6 − 3/4. mcm(6, 4) = 12 → 10/12 − 9/12 = <mark>1/12</mark>. Con un número entero, se escribe como fracción: 2 + 1/3 = 6/3 + 1/3 = 7/3.</p>`,
      video: { id: "rSLuXOTdje8", titulo: "Suma y resta de fracciones", canal: "Susi Profe", vistas: 3432971 },
    },
    {
      html: `<h3>Multiplicar y dividir fracciones</h3><p><b>Multiplicar</b>: numerador por numerador y denominador por denominador. <mark>a/b · c/d = (a · c)/(b · d)</mark>. 2/3 · 5/7 = 10/21. Conviene simplificar antes de multiplicar: 4/9 · 3/8 = (4 · 3)/(9 · 8) = 1/6.</p><p>La <b>inversa</b> de a/b es b/a: la inversa de 3/5 es 5/3, y su producto es 1.</p><p><b>Dividir</b> es multiplicar por la inversa (o multiplicar «en cruz»): <mark>a/b : c/d = (a · d)/(b · c)</mark>. 3/4 : 2/5 = 15/8.</p>`,
      svg: svg("Un rectángulo dividido en tercios en vertical y en cuartos en horizontal: la mitad de dos tercios es un tercio", `<rect x="40" y="30" width="180" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="40" y="30" width="120" height="110" fill="var(--pen)" fill-opacity=".25"/><rect x="40" y="85" width="120" height="55" fill="var(--leaf)" fill-opacity=".45"/>
        <path d="M100 30 V 140 M160 30 V 140 M40 85 H 220" stroke="var(--ink)" stroke-width="1.5"/>${t(100, 22, "2/3", { c: "var(--pen)", s: 13 })}${t(230, 120, "1/2", { c: "var(--leaf)", s: 13, a: "start" })}${t(130, 166, "1/2 · 2/3 = 2/6 = 1/3", { s: 13 })}`),
    },
    {
      html: `<h3>Operaciones combinadas</h3><p>Se respeta la misma <b>jerarquía</b> que con los enteros: paréntesis, potencias, multiplicaciones y divisiones, y por último sumas y restas. Y se simplifica al final (y si se puede, durante el camino).</p><p>Ejemplo: 1/2 + 2/3 · 9/4 − 1. Primero el producto: 2/3 · 9/4 = 18/12 = 3/2. Después: 1/2 + 3/2 − 1 = 4/2 − 1 = 2 − 1 = <b>1</b>.</p><p>Con fracciones negativas se aplica la regla de los signos: −2/5 · 10/3 = −20/15 = −4/3.</p>`,
    },
    {
      html: `<h3>La fracción de una cantidad y el problema inverso</h3><p>Para calcular la <b>fracción de una cantidad</b> se multiplica: <mark>a/b de N = N · a : b</mark>. 2/5 de 350 € = 350 · 2 : 5 = 140 €.</p><p>El problema inverso es saber el <b>total</b> conociendo una parte. Si 3/8 de los alumnos son 12, entonces 1/8 son 12 : 3 = 4 y el total (8/8) es 4 · 8 = <b>32 alumnos</b>.</p>`,
    },
    {
      html: `<h3>Problemas de fracciones encadenadas</h3><p>A veces se toma una fracción de <b>lo que queda</b>. Hay que tener cuidado con cuál es «el todo» en cada paso.</p><p>Ejemplo: Marta gasta 1/3 de su paga en el cine y 1/4 <b>de lo que le queda</b> en un libro. ¿Qué fracción le sobra?</p><ul><li>Tras el cine le queda 1 − 1/3 = 2/3.</li><li>Gasta 1/4 de 2/3 = 2/12 = 1/6 en el libro.</li><li>Le queda 2/3 − 1/6 = 4/6 − 1/6 = <b>3/6 = 1/2</b> de la paga.</li></ul><p>Si la paga era 30 €, le quedan 15 €.</p>`,
    },
  ],
  figura: {
    titulo: "Fracciones en un vistazo",
    svg: filas("Resumen de fracciones: parte, cociente y operador; equivalentes; comparar; sumar con mcm; multiplicar en línea; dividir en cruz", [["Significado", "parte · cociente · operador", "var(--pen)"], ["Equivalentes", "a · d = b · c · simplificar con el mcd", "var(--inf)"], ["Comparar", "común denominador", "var(--sun)"], ["+ y −", "mcm de los denominadores", "var(--leaf)"], ["·", "en línea: (a·c)/(b·d)", "var(--red)"], [":", "en cruz: (a·d)/(b·c)", "var(--ink)"]], 210),
  },
  video: { id: "FUbla-rPt3M", titulo: "Suma, resta, multiplicación y división de fracciones", canal: "Daniel Carreón", vistas: 10070913, megusta: 0, busqueda: "operaciones con fracciones 2 eso" },
  quiz: mezcla([
    { q: "En 5/8, el 8 es el…", o: ["denominador", "numerador", "cociente"], a: 0, e: "Partes en que se divide." },
    { q: "¿Qué fracción es equivalente a 3/4?", o: ["9/12", "6/9", "4/3"], a: 0, e: "Por 3." },
    { q: "La fracción irreducible de 20/28 es…", o: ["5/7", "10/14", "4/7"], a: 0, e: "Entre 4." },
    { q: "¿Cuál es mayor?", o: ["3/5", "3/7", "3/8"], a: 0, e: "Mismo numerador, menor denominador." },
    { q: "1/4 + 1/6 =", o: ["5/12", "2/10", "1/10"], a: 0, e: "3/12 + 2/12." },
    { q: "2/3 · 3/5 =", o: ["2/5", "6/8", "5/6"], a: 0, e: "6/15 = 2/5." },
    { q: "La inversa de 4/9 es…", o: ["9/4", "−4/9", "4/9"], a: 0, e: "Se dan la vuelta." },
    { q: "1/2 : 1/4 =", o: ["2", "1/8", "1/2"], a: 0, e: "4/2." },
    { q: "3/4 de 60 =", o: ["45", "80", "15"], a: 0, e: "60 · 3 : 4." },
    { q: "Si 2/5 de una cantidad son 10, la cantidad es…", o: ["25", "4", "50"], a: 0, e: "1/5 = 5; 5 · 5." },
  ]),
  examen: mezcla([
    { q: "2 − 1/3 · 3/2 =", o: ["3/2", "5/2", "1/2"], a: 0, e: "2 − 1/2." },
    { q: "Gastas 1/2 y luego 1/3 de lo que queda. Te queda…", o: ["1/3", "1/6", "1/2"], a: 0, e: "1/2 − 1/6." },
    { q: "Ordena: 2/3, 5/8, 7/12.", o: ["7/12 < 5/8 < 2/3", "2/3 < 5/8 < 7/12", "5/8 < 7/12 < 2/3"], a: 0, e: "14/24, 15/24, 16/24." },
  ]),
  feynman: ["Las tres formas de entender una fracción", "Cómo saber si dos fracciones son equivalentes", "Por qué hace falta común denominador para sumar", "Cómo se divide una fracción entre otra", "Cómo calcular el total conociendo una parte"],
  mapa: mapa("FRACCIONES", "var(--eso)", [
    ["Significado", "parte · cociente · operador", "var(--pen)"],
    ["Equivalentes", "amplificar · simplificar", "var(--inf)"],
    ["+ y −", "mcm de denominadores", "var(--leaf)"],
    ["· y :", "en línea · en cruz", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Numerador", "Número de arriba: partes que se toman."],
    ["Denominador", "Número de abajo: partes en que se divide la unidad."],
    ["Equivalentes", "a/b = c/d si a · d = b · c."],
    ["Irreducible", "No se puede simplificar: mcd(a, b) = 1."],
    ["Sumar", "Común denominador con el mcm."],
    ["Multiplicar", "(a · c)/(b · d)."],
    ["Dividir", "(a · d)/(b · c): por la inversa."],
    ["Fracción de N", "N · a : b."],
  ],
  familias: ["Usad recetas: ¿cuánto hace falta para la mitad de personas? ¿Y para 3/4?", "Comparad ofertas: «1/3 gratis» frente a «25 % de descuento».", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Fracciones: significados, equivalencia, comparación y orden, operaciones y jerarquía, fracción de una cantidad y problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Regletas o tiras de papel para ver fracciones equivalentes.", "Recetas de cocina escaladas.", "Problemas de «lo que queda» con diagramas de barras."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): fracciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula y simplifica: 3/4 − 1/6 + 2/3.", pasos: ["mcm(4, 6, 3) = 12.", "9/12 − 2/12 + 8/12 = 15/12.", "Simplificamos entre 3: 5/4."], resultado: "5/4" },
    { enunciado: "Calcula: (1/2 − 1/3) : 5/6.", pasos: ["Paréntesis: 3/6 − 2/6 = 1/6.", "1/6 : 5/6 = (1 · 6)/(6 · 5) = 6/30.", "Simplificamos: 1/5."], resultado: "1/5" },
    { enunciado: "En una clase, 2/5 de los alumnos van en bus y 1/3 en bici; el resto, 8 alumnos, va andando. ¿Cuántos alumnos hay?", pasos: ["Bus y bici: 2/5 + 1/3 = 6/15 + 5/15 = 11/15.", "Andando: 1 − 11/15 = 4/15, que son 8 alumnos.", "1/15 = 2 alumnos; total 15/15 = 30."], resultado: "30 alumnos." },
  ],
  errores: [
    "Sumar numeradores y denominadores: 1/2 + 1/3 no es 2/5.",
    "Buscar común denominador para multiplicar (no hace falta).",
    "Dividir sin dar la vuelta a la segunda fracción.",
    "No simplificar el resultado final.",
    "En los problemas de «lo que queda», calcular la fracción sobre el total.",
    "Pensar que 3/8 es mayor que 3/5 porque 8 es mayor que 5.",
  ],
  ejercicios: [
    { q: "Escribe dos fracciones equivalentes a 4/10 y su fracción irreducible.", sol: "8/20, 2/5… La irreducible es 2/5." },
    { q: "¿Son equivalentes 6/14 y 9/21?", sol: "Sí: 6 · 21 = 126 = 14 · 9." },
    { q: "Ordena de menor a mayor: 1/2, 3/5, 4/9, 7/10.", sol: "mcm 90: 45, 54, 40, 63 → 4/9 < 1/2 < 3/5 < 7/10." },
    { q: "Calcula: 5/8 + 3/4 − 1/2.", sol: "5/8 + 6/8 − 4/8 = 7/8." },
    { q: "Calcula: 6/5 · 10/9 y 7/4 : 21/8.", sol: "60/45 = 4/3; 56/84 = 2/3." },
    { q: "Calcula: 2/3 + 1/3 · (1/2 − 1/4).", sol: "Paréntesis 1/4; 1/3 · 1/4 = 1/12; 8/12 + 1/12 = 9/12 = 3/4." },
    { q: "¿Cuánto son 5/6 de 240 €?", sol: "240 · 5 : 6 = 200 €." },
    { q: "Los 3/7 de un depósito son 120 litros. ¿Qué capacidad tiene?", sol: "1/7 = 40 L; total 280 L." },
    { q: "Leo lee 1/4 de un libro el lunes y 2/3 del resto el martes. ¿Qué fracción le falta?", sol: "Queda 3/4; lee 2/3 · 3/4 = 1/2; le falta 3/4 − 1/2 = 1/4." },
    { q: "Escribe 17/5 como número mixto y 2 3/4 como fracción impropia.", sol: "17/5 = 3 + 2/5; 2 3/4 = 11/4." },
  ],
};
