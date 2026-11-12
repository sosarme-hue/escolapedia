// Matemáticas 3º ESO: números racionales y fracciones. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

// Barra dividida en n partes con k coloreadas.
const barra = (x, y, w, n, k, c) => [...Array(n)].map((_, i) => `<rect x="${x + (i * w) / n}" y="${y}" width="${w / n}" height="26" fill="${i < k ? c : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"/>`).join("");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números racionales y fracciones",
  minutos: 60,
  objetivos: ["Reconocer los números racionales y representarlos en la recta", "Simplificar, comparar y ordenar fracciones", "Operar con fracciones respetando la jerarquía de las operaciones", "Resolver problemas de la vida real con fracciones"],
  claves: ["fracción", "número racional", "equivalente", "irreducible", "m.c.m.", "inversa"],
  pregunta: {
    texto: "Una receta para 4 personas lleva 3/4 de taza de azúcar. Hoy cocinas para 6. ¿Cuánto azúcar necesitas?",
    respuesta: "Tienes que multiplicar por 6/4: <mark>3/4 · 6/4 = 18/16 = 9/8</mark> de taza, es decir, una taza y un octavo. Las fracciones están en las recetas, en las rebajas, en la música y en los mapas.",
  },
  bloques: [
    {
      html: `<h3>Qué es un número racional</h3><p>Un <b>número racional</b> es el que se puede escribir como una fracción <mark>a/b</mark>, con a y b enteros y b distinto de 0. El número de arriba es el <b>numerador</b> y el de abajo, el <b>denominador</b>. El conjunto de los racionales se llama <b>ℚ</b> y contiene a los naturales (ℕ) y a los enteros (ℤ), porque cualquier entero se puede escribir con denominador 1: −5 = −5/1.</p><p>Una fracción tiene tres significados: una <b>parte de la unidad</b> (3/4 de una pizza), un <b>cociente</b> (3/4 = 3 : 4 = 0,75) y un <b>operador</b> que actúa sobre una cantidad (3/4 de 80 € = 60 €).</p>`,
      svg: svg("Conjuntos de números: los naturales dentro de los enteros y estos dentro de los racionales", `<ellipse cx="130" cy="92" rx="118" ry="78" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.5"/><ellipse cx="112" cy="104" rx="78" ry="52" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2.5"/><ellipse cx="96" cy="112" rx="40" ry="28" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2.5"/>
        ${t(96, 108, "ℕ", { c: "var(--red)", s: 15 })}${t(96, 126, "0, 1, 7", { s: 11 })}${t(168, 92, "ℤ", { c: "var(--leaf)", s: 15 })}${t(170, 110, "−3, −12", { s: 11 })}${t(130, 34, "ℚ", { c: "var(--pen)", s: 15 })}${t(208, 72, "3/4", { s: 11 })}${t(208, 132, "−0,5", { s: 11 })}`),
    },
    {
      html: `<h3>Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la misma cantidad. Se comprueba con los <mark>productos cruzados</mark>: a/b = c/d si a · d = b · c. Por ejemplo, 2/3 = 8/12 porque 2 · 12 = 3 · 8 = 24.</p><p>Si multiplicas o divides el numerador y el denominador por el mismo número, obtienes una fracción equivalente. <b>Amplificar</b> es multiplicar; <b>simplificar</b> es dividir. Cuando ya no se puede simplificar más, la fracción es <b>irreducible</b>: se consigue de una vez dividiendo entre el máximo común divisor. Así, 18/24 = 3/4, porque m.c.d.(18, 24) = 6.</p>`,
      svg: svg("Tres barras iguales: una mitad, dos cuartos y cuatro octavos ocupan lo mismo", `${barra(30, 22, 200, 2, 1, "var(--pen)")}${barra(30, 70, 200, 4, 2, "var(--leaf)")}${barra(30, 118, 200, 8, 4, "var(--red)")}
        ${t(20, 40, "1/2", { a: "end", s: 11, c: "var(--pen)" })}${t(20, 88, "2/4", { a: "end", s: 11, c: "var(--leaf)" })}${t(20, 136, "4/8", { a: "end", s: 11, c: "var(--red)" })}<path d="M130 14 V 152" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>${t(130, 170, "misma cantidad", { c: "var(--pen)" })}`),
      video: { id: "QZTyePr_Snk", titulo: "Fracciones equivalentes | Explicación gráfica y numérica", canal: "Matemáticas profe Alex", vistas: 4231737, megusta: 0 },
    },
    {
      html: `<h3>Comparar y ordenar fracciones</h3><p>Si tienen el <b>mismo denominador</b>, es mayor la de mayor numerador: 5/9 &gt; 2/9. Si tienen el <b>mismo numerador</b>, es mayor la de menor denominador: 3/4 &gt; 3/7 (partes más grandes). En los demás casos, se reducen a <mark>común denominador</mark> usando el m.c.m. de los denominadores.</p><p>Ejemplo: ordena 2/3, 3/4 y 5/8. El m.c.m.(3, 4, 8) = 24, así que quedan 16/24, 18/24 y 15/24. Por tanto, <b>5/8 &lt; 2/3 &lt; 3/4</b>. Otra forma rápida es pasar cada fracción a decimal: 0,625; 0,666…; 0,75.</p>`,
    },
    {
      html: `<h3>Representar fracciones en la recta</h3><p>Todo número racional ocupa un punto de la recta. Para situar 7/4, primero se ve entre qué enteros está: 7/4 = 1 + 3/4, así que está entre 1 y 2. Después se divide ese tramo en <b>4 partes iguales</b> y se cuentan 3.</p><p>Una propiedad sorprendente: entre dos racionales siempre hay <mark>infinitos racionales</mark>. Por ejemplo, entre 1/2 y 3/4 está su media, 5/8, y entre 1/2 y 5/8 está 9/16, y así sin fin. Se dice que ℚ es un conjunto <b>denso</b>.</p>`,
      svg: svg("Recta numérica de −1 a 2 con las fracciones −1/2, 3/4 y 7/4 marcadas", `<path d="M14 90 H 246" stroke="var(--ink)" stroke-width="2.5"/>
        ${[-1, 0, 1, 2].map((n, i) => `<path d="M${30 + i * 70} 82 V 98" stroke="var(--ink)" stroke-width="2.5"/>${t(30 + i * 70, 118, n, { s: 13 })}`).join("")}
        ${[...Array(12)].map((_, i) => `<path d="M${30 + i * 17.5} 86 V 94" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
        ${[[-0.5, "−1/2", "var(--red)"], [0.75, "3/4", "var(--leaf)"], [1.75, "7/4", "var(--pen)"]].map(([v, s, c]) => `<circle cx="${100 + v * 70}" cy="90" r="6" fill="${c}"/>${t(100 + v * 70, 66, s, { c, s: 13 })}`).join("")}
        ${t(130, 156, "entre 1 y 2: 4 partes, cuento 3", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Sumar y restar fracciones</h3><p>Con el <b>mismo denominador</b> se suman o restan los numeradores y se deja el denominador: 2/7 + 3/7 = 5/7. Con <b>distinto denominador</b>, primero se reducen a común denominador con el <mark>m.c.m.</mark>:</p>${tabla(["Paso", "5/6 − 3/4"], [["1. m.c.m.(6, 4)", "12"], ["2. Fracciones equivalentes", "10/12 − 9/12"], ["3. Restar numeradores", "1/12"]])}<p>Para sumar un entero y una fracción, escribe el entero con el mismo denominador: 2 + 3/5 = 10/5 + 3/5 = 13/5. Simplifica siempre el resultado.</p>`,
    },
    {
      html: `<h3>Multiplicar y dividir fracciones</h3><p>Para <b>multiplicar</b>, numerador por numerador y denominador por denominador: 2/3 · 5/7 = 10/21. Conviene simplificar antes de multiplicar: 4/9 · 3/8 = (4 · 3)/(9 · 8) = 1/6.</p><p>La <b>inversa</b> de a/b es b/a, porque su producto es 1. Para <b>dividir</b>, se multiplica la primera por la inversa de la segunda (o se multiplica «en cruz»): <mark>3/5 : 9/10 = 3/5 · 10/9 = 30/45 = 2/3</mark>. El 0 no tiene inversa: no se puede dividir entre 0.</p><p>La fracción de una cantidad es un producto: 2/5 de 350 = 2 · 350 / 5 = 140.</p>`,
      svg: svg("Un rectángulo dividido en tercios en vertical y en séptimos en horizontal: dos tercios de cinco séptimos son diez veintiunavos", `${[...Array(21)].map((_, i) => { const c = i % 7, f = Math.floor(i / 7); const on = c < 5 && f < 2; return `<rect x="${40 + c * 26}" y="${22 + f * 36}" width="26" height="36" fill="${on ? "var(--pen)" : c < 5 ? "var(--hl)" : "var(--card)"}" fill-opacity="${on ? 0.85 : 1}" stroke="var(--ink)" stroke-width="1.5"/>`; }).join("")}
        ${t(130, 150, "2/3 · 5/7 = 10/21", { c: "var(--pen)", s: 15 })}${t(130, 170, "10 casillas de 21", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Operaciones combinadas</h3><p>Se sigue la misma <b>jerarquía</b> que con los enteros:</p><ol><li><b>Paréntesis</b> y corchetes, de dentro hacia fuera.</li><li><b>Potencias</b> y raíces.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 1/2 + 2/3 · 3/4 = 1/2 + <mark>6/12</mark> = 1/2 + 1/2 = 1. Si sumaras primero, (1/2 + 2/3) · 3/4 = 7/6 · 3/4 = 7/8, que es otro resultado. Por eso el orden importa.</p>`,
      video: { id: "ebJYzTM5lnc", titulo: "Operaciones combinadas con fracciones | Ejemplo 5", canal: "Matemáticas profe Alex", vistas: 4255904, megusta: 0 },
    },
    {
      html: `<h3>Fracciones y decimales</h3><p>Al dividir el numerador entre el denominador sale un decimal. Si la fracción irreducible tiene un denominador cuyos únicos factores primos son <b>2 y 5</b>, el decimal es <b>exacto</b>: 7/20 = 0,35. Si tiene otros factores, el decimal es <b>periódico</b>: 2/3 = 0,666… y 5/6 = 0,8333…</p><p>Al revés, todo decimal exacto o periódico tiene una <mark>fracción generatriz</mark>. Por eso son racionales. Los decimales infinitos <b>no periódicos</b>, como π = 3,14159… o √2 = 1,41421…, no se pueden escribir como fracción: son los números <b>irracionales</b>.</p>`,
    },
    {
      html: `<h3>Problemas con fracciones</h3><p>Muchos problemas reales se resuelven con fracciones de fracciones. Por ejemplo: «Gasto 1/3 del sueldo en el alquiler y 1/4 de lo que me queda en comida». Lo que queda tras el alquiler son 2/3; la comida es <mark>1/4 de 2/3 = 2/12 = 1/6</mark> del sueldo. En total he gastado 1/3 + 1/6 = 1/2, y me queda la otra mitad.</p><p>Consejo: llama 1 al total (la unidad), trabaja con fracciones de ese total y, solo al final, multiplica por la cantidad real. Haz un dibujo con una barra: ayuda mucho a no perderse.</p>`,
      svg: svg("Barra del sueldo: un tercio para alquiler, un sexto para comida y la mitad restante", `<rect x="20" y="50" width="73" height="40" fill="var(--red)" fill-opacity=".8"/><rect x="93" y="50" width="37" height="40" fill="var(--hl)"/><rect x="130" y="50" width="110" height="40" fill="var(--leaf)" fill-opacity=".7"/><rect x="20" y="50" width="220" height="40" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        ${t(56, 112, "alquiler 1/3", { c: "var(--red)", s: 11 })}${t(112, 132, "comida 1/6", { c: "var(--hl-ink)", s: 11 })}${t(185, 112, "queda 1/2", { c: "var(--leaf)", s: 11 })}${t(130, 34, "sueldo = 1", { c: "var(--pen)", s: 13 })}`),
    },
  ],
  figura: {
    titulo: "Cómo se opera con fracciones",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen: sumar con común denominador, multiplicar en línea, dividir multiplicando por la inversa y simplificar siempre">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Sumar / restar", "común denominador (m.c.m.)", "var(--pen)"], ["Multiplicar", "numerador · numerador, denominador · denominador", "var(--leaf)"], ["Dividir", "multiplica por la inversa de la segunda", "var(--red)"], ["Al final", "simplifica hasta la fracción irreducible", "var(--hl-ink)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "FUbla-rPt3M", titulo: "Suma, resta, multiplicación y división de fracciones", canal: "Daniel Carreón", vistas: 10070555, megusta: 0, busqueda: "operaciones con fracciones" },
  quiz: mezcla([
    { q: "¿Cuál de estas fracciones es equivalente a 3/5?", o: ["9/15", "6/15", "5/3"], a: 0, e: "3 · 15 = 5 · 9 = 45." },
    { q: "La fracción irreducible de 24/36 es…", o: ["2/3", "4/6", "12/18"], a: 0, e: "m.c.d.(24, 36) = 12." },
    { q: "1/4 + 2/3 =", o: ["3/7", "11/12", "3/12"], a: 1, e: "3/12 + 8/12 = 11/12." },
    { q: "2/5 : 4/15 =", o: ["8/75", "3/2", "2/3"], a: 1, e: "2/5 · 15/4 = 30/20 = 3/2." },
    { q: "¿Qué fracción es mayor?", o: ["5/8", "3/5", "Son iguales"], a: 0, e: "25/40 frente a 24/40." },
    { q: "La inversa de −2/7 es…", o: ["2/7", "−7/2", "7/2"], a: 1, e: "Su producto debe ser 1: (−2/7) · (−7/2) = 1." },
    { q: "1 − 2/3 · 3/4 =", o: ["1/4", "1/2", "1/12"], a: 1, e: "Primero 2/3 · 3/4 = 1/2; después 1 − 1/2." },
    { q: "¿Cuál da un decimal exacto?", o: ["7/12", "3/40", "1/6"], a: 1, e: "40 = 2³ · 5: solo factores 2 y 5." },
    { q: "Los 3/8 de 240 son…", o: ["90", "80", "64"], a: 0, e: "240 : 8 · 3 = 90." },
    { q: "¿Es π un número racional?", o: ["Sí", "No", "Solo con dos decimales"], a: 1, e: "Su decimal es infinito y no periódico." },
  ]),
  examen: mezcla([
    { q: "Entre 1/3 y 1/2 hay…", o: ["ningún racional", "un solo racional", "infinitos racionales"], a: 2, e: "ℚ es denso." },
    { q: "(1/2 + 1/3) : 5/6 =", o: ["1", "25/36", "5/6"], a: 0, e: "5/6 : 5/6 = 1." },
    { q: "Si gasto 2/5 del dinero y luego 1/2 de lo que queda, me queda…", o: ["1/10", "3/10", "1/5"], a: 1, e: "Quedan 3/5; la mitad, 3/10." },
  ]),
  feynman: ["Qué es un número racional y por qué los enteros también lo son", "Cómo sabes si dos fracciones son equivalentes", "Por qué hay que buscar común denominador para sumar pero no para multiplicar", "Cómo resolverías un problema de «fracción de lo que queda»"],
  mapa: mapa("NÚMEROS RACIONALES", "var(--eso)", [
    ["Fracción a/b", "parte · cociente · operador", "var(--pen)"],
    ["Equivalentes", "simplificar · amplificar", "var(--leaf)"],
    ["Operaciones", "+ − con m.c.m. · × ÷ inversa", "var(--red)"],
    ["Decimales", "exactos · periódicos", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un número racional?", "El que se puede escribir como fracción a/b con b ≠ 0."],
    ["¿Cuándo son equivalentes a/b y c/d?", "Cuando a · d = b · c."],
    ["Fracción irreducible", "La que ya no se puede simplificar: numerador y denominador son primos entre sí."],
    ["¿Cómo se suman fracciones de distinto denominador?", "Reduciéndolas a común denominador con el m.c.m."],
    ["¿Cómo se dividen fracciones?", "Multiplicando la primera por la inversa de la segunda."],
    ["Orden de las operaciones", "Paréntesis, potencias, multiplicaciones y divisiones, sumas y restas."],
    ["¿Qué fracciones dan decimal exacto?", "Las irreducibles cuyo denominador solo tiene factores 2 y 5."],
    ["Fracción de lo que queda", "Se multiplica la fracción por lo que queda: 1/4 de 2/3 = 1/6."],
  ],
  familias: ["Cocinad juntos una receta cambiando el número de raciones y calculad las nuevas cantidades con fracciones.", "En las rebajas, calculad qué fracción del precio se paga con un 25 % o un 40 % de descuento.", "Repasad las tarjetas dos minutos al día durante una semana."],
  profesores: {
    saberes: "Sentido numérico: números racionales, fracciones equivalentes, operaciones y jerarquía, relación con los decimales y resolución de problemas (RD 217/2022, Matemáticas 3º).",
    ideas: ["Regletas o tiras de papel para visualizar fracciones equivalentes.", "Problemas de «fracción del resto» resueltos con modelo de barras.", "Concurso de ordenar fracciones en una recta numérica gigante en el suelo."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números racionales", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Calcula y simplifica: 2/3 − 1/2 · (1/3 + 1/6).",
      pasos: ["Paréntesis: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.", "Multiplicación: 1/2 · 1/2 = 1/4.", "Resta: 2/3 − 1/4 = 8/12 − 3/12 = 5/12."],
      resultado: "5/12." },
    { enunciado: "Ordena de menor a mayor: 3/4, 5/6, 7/10 y 2/3.",
      pasos: ["m.c.m.(4, 6, 10, 3) = 60.", "3/4 = 45/60; 5/6 = 50/60; 7/10 = 42/60; 2/3 = 40/60.", "Ordenamos los numeradores: 40 < 42 < 45 < 50."],
      resultado: "2/3 < 7/10 < 3/4 < 5/6." },
    { enunciado: "Un depósito está lleno. Se gastan 2/5 el lunes y 1/3 de lo que queda el martes. Si aún quedan 600 litros, ¿cuál es su capacidad?",
      pasos: ["Tras el lunes quedan 1 − 2/5 = 3/5.", "El martes se gasta 1/3 de 3/5 = 1/5. Queda 3/5 − 1/5 = 2/5.", "Los 2/5 del depósito son 600 L, así que 1/5 son 300 L.", "Capacidad: 5 · 300 = 1.500 L."],
      resultado: "1.500 litros." },
  ],
  errores: [
    "Sumar numeradores y denominadores: 1/2 + 1/3 no es 2/5, es 5/6.",
    "Buscar común denominador para multiplicar: no hace falta.",
    "Al dividir, invertir la primera fracción en lugar de la segunda.",
    "Saltarse la jerarquía y sumar antes de multiplicar.",
    "Olvidar simplificar el resultado final.",
    "Confundir «1/4 de lo que queda» con «1/4 del total».",
  ],
  ejercicios: [
    { q: "Simplifica hasta la fracción irreducible: 45/60 y 84/126.", sol: "m.c.d.(45, 60) = 15: 45/60 = 3/4. m.c.d.(84, 126) = 42: 84/126 = 2/3." },
    { q: "¿Son equivalentes 6/14 y 15/35? ¿Y 4/9 y 10/24?", sol: "6 · 35 = 210 y 14 · 15 = 210: sí. 4 · 24 = 96 y 9 · 10 = 90: no." },
    { q: "Ordena de mayor a menor: 5/12, 3/8, 1/3.", sol: "m.c.m. = 24: 10/24, 9/24, 8/24. Orden: 5/12 > 3/8 > 1/3." },
    { q: "Calcula: 3/4 + 5/6 − 1/2.", sol: "m.c.m. = 12: 9/12 + 10/12 − 6/12 = 13/12." },
    { q: "Calcula: 4/9 · 15/8.", sol: "Simplificando antes: (4 · 15)/(9 · 8) = 60/72 = 5/6." },
    { q: "Calcula: (2/3) : (8/9).", sol: "2/3 · 9/8 = 18/24 = 3/4." },
    { q: "Calcula: 1/2 − 1/3 · (3/2 − 1/4).", sol: "Paréntesis: 6/4 − 1/4 = 5/4. Producto: 1/3 · 5/4 = 5/12. Resta: 6/12 − 5/12 = 1/12." },
    { q: "Escribe tres fracciones entre 1/4 y 1/2.", sol: "Pasamos a octavos o dieciseisavos: 1/4 = 4/16 y 1/2 = 8/16. Valen 5/16, 6/16 = 3/8 y 7/16." },
    { q: "En una clase de 30 alumnos, 2/5 juegan al fútbol y 1/3 al baloncesto. ¿Cuántos no practican ninguno de los dos (si nadie hace ambos)?", sol: "2/5 + 1/3 = 6/15 + 5/15 = 11/15. No practican 4/15 de 30 = 8 alumnos." },
    { q: "María lee 1/4 de un libro el lunes y 2/3 de lo que le queda el martes. Le faltan 50 páginas. ¿Cuántas tiene el libro?", sol: "Tras el lunes quedan 3/4. El martes lee 2/3 · 3/4 = 1/2. Le queda 3/4 − 1/2 = 1/4, que son 50 páginas. El libro tiene 200 páginas." },
  ],
};
