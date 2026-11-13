// Matemáticas 2º de Primaria: unidades, decenas y centenas (valor posicional).
const P = require("./_pri2a");
const { svg, num, txt, centena, dec, uni, bloques, tablaCDU, moneda, billete } = P;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Unidades, decenas y centenas",
  objetivos: ["Saber cuántas unidades tienen una decena y una centena", "Descomponer números de tres cifras en C, D y U", "Entender que cada cifra vale según su sitio"],
  claves: ["unidad", "decena", "centena", "valor de posición", "descomponer", "tabla C D U"],
  pregunta: ["En el número 333 hay tres treses. ¿Valen todos lo mismo?", "¡No! El primer 3 vale <mark>300</mark>, el segundo vale <b>30</b> y el último vale <b>3</b>. Cada cifra vale según el <b>sitio</b> donde está."],
  bloques: [
    ["Tres amigos: U, D y C", `<p>Para contar usamos tres tamaños.</p><p>La <mark>unidad</mark> es un cubito suelto. La <mark>decena</mark> es una barra de 10 cubitos. La <mark>centena</mark> es una placa de 100 cubitos.</p><p>Diez unidades forman una decena. Diez decenas forman una centena. ¡Siempre de <b>10 en 10</b>!</p>`,
      svg("Un cubito es una unidad, una barra es una decena y una placa es una centena", `${uni(40, 90, 14)}${dec(110, 30, 7)}${centena(160, 30, 7)}${txt(47, 135, "U = 1", "var(--ink)", 14)}${txt(113, 135, "D = 10", "var(--pen)", 14)}${txt(195, 135, "C = 100", "var(--red)", 14)}${txt(130, 165, "10 U = 1 D · 10 D = 1 C", "var(--muted)", 13)}`)],
    ["La tabla C D U", `<p>Escribimos los números en una tabla con <b>tres casillas</b>.</p><p>A la izquierda, la <mark>C</mark> de centenas. En medio, la <mark>D</mark> de decenas. A la derecha, la <mark>U</mark> de unidades.</p><p>El 254 tiene <b>2</b> en la C, <b>5</b> en la D y <b>4</b> en la U. Cada cifra va en su casa.</p>`,
      svg("Tabla de centenas, decenas y unidades con 254, 107 y 390", `${tablaCDU(64, 18, [254, 107, 390], 44, 34)}`)],
    ["Cada cifra vale según su sitio", `<p>Una misma cifra <b>cambia de valor</b> si cambia de sitio.</p><p>En el <b>3</b>, el 3 vale 3. En el <b>30</b>, vale 30. En el <b>300</b>, ¡vale <mark>300</mark>!</p><p>Por eso no es lo mismo 123 que 321. Tienen las mismas cifras, pero en otro <b>orden</b>, y son números muy distintos.</p>`,
      svg("El 3 vale 3 unidades, 30 en las decenas y 300 en las centenas", `${num(60, 60, "3", "var(--ink)", 34)}${txt(60, 90, "vale 3", "var(--ink)", 13)}${num(130, 60, "30", "var(--pen)", 34)}${txt(130, 90, "vale 30", "var(--pen)", 13)}${num(210, 60, "300", "var(--red)", 34)}${txt(210, 90, "vale 300", "var(--red)", 13)}${num(130, 140, "123 ≠ 321", "var(--ink)", 26)}`), P.V("udcB")],
    ["Descomponer un número", `<p><mark>Descomponer</mark> es partir un número en sus trozos.</p><p>El 362 es <b>3 C, 6 D y 2 U</b>.</p><p>También lo podemos escribir como suma: <b>300 + 60 + 2</b>. Si juntamos los trozos, volvemos a tener el 362. Es como desmontar y montar un juguete.</p>`,
      svg("El 362 descompuesto: 300 más 60 más 2", `${num(130, 40, "362", "var(--ink)", 32)}<path d="M110 50 L60 80 M130 50 V80 M150 50 L200 80" stroke="var(--muted)" stroke-width="2"/>${num(60, 108, "300", "var(--red)", 24)}${num(130, 108, "60", "var(--pen)", 24)}${num(200, 108, "2", "var(--ink)", 24)}${txt(95, 108, "+", "var(--muted)", 20)}${txt(165, 108, "+", "var(--muted)", 20)}${txt(60, 140, "3 C", "var(--red)", 14)}${txt(130, 140, "6 D", "var(--pen)", 14)}${txt(200, 140, "2 U", "var(--ink)", 14)}`)],
    ["Componer un número", `<p><mark>Componer</mark> es lo contrario: juntamos los trozos para formar el número.</p><p>4 centenas, 1 decena y 8 unidades forman el <b>418</b>.</p><p>Si nos dicen 500 + 7, no hay decenas. Escribimos un 0 en su sitio: <mark>507</mark>.</p><p>Sin ese 0 quedaría 57, ¡que es otro número!</p>`,
      svg("400 más 10 más 8 forman el 418", `${bloques(418, 18, 30, 4)}${num(130, 130, "400 + 10 + 8", "var(--ink)", 20)}${num(130, 162, "= 418", "var(--pen)", 24)}`)],
    ["¿Cuántas decenas tiene?", `<p>Una centena tiene <b>10 decenas</b>. Así que en el <mark>200</mark> hay 20 decenas.</p><p>Y una centena tiene <b>100 unidades</b>. En el 200 hay 200 unidades.</p><p>Si cambias una placa por barras, te salen 10 barras. ¡Es la misma cantidad, solo que más partida!</p>`,
      svg("Una placa de centena es igual a diez barras de decena", `${centena(30, 40, 7)}${num(120, 80, "=", "var(--ink)", 30)}${[...Array(10)].map((_, i) => dec(150 + i * 9, 40, 7)).join("")}${txt(65, 135, "1 C", "var(--red)", 15)}${txt(193, 135, "10 D", "var(--pen)", 15)}${txt(130, 165, "100 unidades", "var(--muted)", 14)}`)],
    ["Hacer cambios", `<p>Si juntamos <b>10 cubitos</b> sueltos, los cambiamos por una barra.</p><p>Si juntamos <b>10 barras</b>, las cambiamos por una placa.</p><p>Así, <mark>12 decenas</mark> son 1 centena y 2 decenas: el <b>120</b>. Nunca dejamos 10 o más en la misma casilla.</p><p>Es como en el banco: 10 billetes de 10 € se cambian por uno de 100 €.</p>`,
      svg("Diez billetes de diez euros se cambian por uno de cien", `${[...Array(10)].map((_, i) => `<rect x="${16 + (i % 5) * 20}" y="${44 + Math.floor(i / 5) * 34}" width="44" height="24" rx="3" fill="var(--pen)" opacity=".75" stroke="var(--ink)"/>`).join("")}${txt(70, 130, "10 billetes de 10 €", "var(--pen)", 12)}${num(150, 86, "=", "var(--ink)", 30)}${billete(170, 62, "100 €", "var(--red)")}${txt(210, 130, "1 billete", "var(--red)", 12)}`)],
    ["¿Para qué sirve?", `<p>Con el dinero usamos C, D y U sin darnos cuenta.</p><p>Si tienes <b>2 billetes de 100 €</b>, 3 de 10 € y 5 monedas de 1 €, tienes <mark>235 €</mark>.</p><p>Las centenas son los de 100, las decenas los de 10 y las unidades las monedas de 1.</p>`,
      svg("Dos billetes de cien, tres de diez y cinco monedas de un euro: 235 euros", `${[0, 1].map((i) => `<rect x="${14 + i * 46}" y="34" width="40" height="64" rx="4" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/>${num(34 + i * 46, 71, "100", "var(--card)", 13)}`).join("")}${[0, 1, 2].map((i) => `<rect x="${112 + i * 30}" y="44" width="26" height="44" rx="3" fill="var(--pen)" stroke="var(--ink)" stroke-width="1.5"/>${num(125 + i * 30, 71, "10", "var(--card)", 12)}`).join("")}${[0, 1, 2, 3, 4].map((i) => moneda(212 + (i % 2) * 22, 42 + Math.floor(i / 2) * 24, "1", 10)).join("")}${txt(57, 116, "C", "var(--red)", 14)}${txt(155, 116, "D", "var(--pen)", 14)}${txt(222, 116, "U", "var(--ink)", 14)}${num(130, 150, "200 + 30 + 5 = 235 €", "var(--ink)", 18)}`)],
    ["Juego: el número escondido", `<p>Tapa una casilla de la tabla y adivina qué falta.</p><p>«Tengo 6 C y 4 U. Soy el 6_4 y valgo <b>604</b>». ¿Cuántas decenas tengo? ¡<mark>Cero</mark>!</p><p>Ahora tú: forma el número más grande con las cifras 2, 7 y 5. Pon la más grande en las centenas: ¡<b>752</b>!</p>`,
      svg("Tarjetas con las cifras 2, 7 y 5 forman el 752", `${["7", "5", "2"].map((d, i) => `<rect x="${60 + i * 50}" y="40" width="42" height="56" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${num(81 + i * 50, 80, d, ["var(--red)", "var(--pen)", "var(--ink)"][i], 32)}`).join("")}${txt(81, 116, "C", "var(--red)", 14)}${txt(131, 116, "D", "var(--pen)", 14)}${txt(181, 116, "U", "var(--ink)", 14)}${txt(130, 156, "¡El más grande: 752!", "var(--leaf)", 15)}`)],
  ],
  figura: ["Un número, tres casas", `<svg viewBox="0 0 640 260" role="img" aria-label="El número 243 con dos placas, cuatro barras y tres cubitos en las casas C, D y U">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[["C", "var(--red)", 40], ["D", "var(--pen)", 250], ["U", "var(--sun)", 460]].map(([k, c, x]) => `<rect x="${x}" y="30" width="180" height="170" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${num(x + 90, 62, k, c, 26)}`).join("")}
    ${centena(60, 90, 7)}${centena(140, 90, 7)}${[0, 1, 2, 3].map((i) => dec(290 + i * 24, 80, 9)).join("")}${[0, 1, 2].map((i) => uni(510 + i * 30, 140, 18)).join("")}
    ${num(130, 235, "2", "var(--red)", 28)}${num(340, 235, "4", "var(--pen)", 28)}${num(550, 235, "3", "var(--ink)", 28)}
  </svg>`],
  video: P.V("udcV", true),
  ejemplos: [
    ["Descompón el 571.", ["La cifra de la izquierda, 5, son centenas: 500.", "La del medio, 7, son decenas: 70.", "La de la derecha, 1, son unidades: 1."], "571 = 500 + 70 + 1."],
    ["¿Qué número es 8 C, 0 D y 3 U?", ["Pon 8 en la casilla C.", "Pon 0 en la casilla D.", "Pon 3 en la casilla U."], "es el 803."],
    ["¿Cuánto vale el 4 en el 146?", ["Mira dónde está el 4: en el medio.", "El medio es la casilla de las decenas.", "4 decenas son 40."], "vale 40."],
  ],
  errores: [
    "Pensar que el 4 del 146 vale 4: vale 40 porque está en las decenas.",
    "Olvidar el 0: 3 C y 5 U es 305, no 35.",
    "Mezclar el orden: la C va siempre a la izquierda y la U a la derecha.",
    "Dejar 10 cubitos sueltos sin cambiarlos por una barra.",
  ],
  ejercicios: [
    ["¿Cuántas unidades tiene una centena?", "100 unidades."],
    ["¿Cuántas decenas tiene una centena?", "10 decenas."],
    ["Descompón el 428 en C, D y U.", "4 C, 2 D y 8 U (400 + 20 + 8)."],
    ["Escribe el número: 6 C, 3 D y 9 U.", "639."],
    ["Escribe el número: 200 + 50 + 0.", "250."],
    ["¿Cuánto vale el 7 en el 715?", "700, porque está en las centenas."],
    ["¿Cuánto vale el 7 en el 172?", "70, porque está en las decenas."],
    ["Dibuja el 132 con placas, barras y cubitos.", "1 placa, 3 barras y 2 cubitos."],
    ["Forma el número más pequeño con las cifras 4, 1 y 9.", "149."],
    ["¿Cuántas decenas hay en el 300?", "30 decenas."],
  ],
  quiz: [
    ["Una centena tiene…", ["10 decenas", "100 decenas", "10 unidades"], "10 decenas = 100 unidades."],
    ["En el 482, el 8 vale…", ["80", "8", "800"], "Está en las decenas."],
    ["En el 482, el 4 vale…", ["400", "40", "4"], "Está en las centenas."],
    ["3 C, 2 D y 0 U es…", ["320", "302", "32"], "300 + 20 + 0."],
    ["500 + 60 + 1 es…", ["561", "516", "5601"], "5 C, 6 D y 1 U."],
    ["¿Qué casilla va a la izquierda?", ["La C", "La U", "La D"], "Primero centenas, luego decenas, luego unidades."],
    ["10 cubitos sueltos se cambian por…", ["1 barra", "1 placa", "10 placas"], "10 U = 1 D."],
    ["En el 609, ¿cuántas decenas hay?", ["0", "6", "9"], "La cifra del medio es 0."],
    ["¿Cuántas unidades tiene el 400?", ["0", "4", "40"], "4 C, 0 D y 0 U."],
    ["El número más grande con 3, 8 y 1 es…", ["831", "138", "381"], "La cifra mayor va en las centenas."],
  ],
  examen: [
    ["Descompón el 735.", ["700 + 30 + 5", "7 + 3 + 5", "70 + 30 + 5"], "7 C, 3 D y 5 U."],
    ["¿Qué número es 9 C y 4 U?", ["904", "94", "940"], "No hay decenas: 0 en el medio."],
    ["En el 250, el 2 vale…", ["200", "20", "2"], "Está en las centenas."],
    ["10 decenas forman…", ["1 centena", "1 unidad", "100 centenas"], "10 D = 1 C = 100 U."],
  ],
  feynman: ["Qué son la unidad, la decena y la centena", "Por qué el mismo número puede valer distinto", "Cómo se descompone un número"],
  mapa: ["U · D · C", [
    ["Unidad", "un cubito: 1", "var(--sun)"],
    ["Decena", "una barra: 10", "var(--pen)"],
    ["Centena", "una placa: 100", "var(--red)"],
    ["Descomponer", "362 = 300 + 60 + 2", "var(--leaf)"],
  ]],
  tarjetas: [
    ["1 decena son…", "10 unidades"],
    ["1 centena son…", "10 decenas o 100 unidades"],
    ["¿Qué letra va a la izquierda en la tabla?", "La C de centenas"],
    ["Descompón el 245", "200 + 40 + 5"],
    ["¿Cuánto vale el 6 en el 365?", "60"],
    ["8 C, 0 D y 2 U es…", "802"],
    ["¿Cuántas decenas hay en el 100?", "10"],
    ["10 barras se cambian por…", "1 placa (1 centena)"],
  ],
  familias: [
    "Jugad a las tiendas con billetes de 100 y de 10 y monedas de 1 € de juguete.",
    "Escribid un número en un papel y que señale cuánto vale cada cifra.",
    "Con tres dados, formad el número más grande y el más pequeño posible.",
    "Preguntad: «¿cuántas decenas hay en 300?» mientras vais en el coche o paseando.",
  ],
  saberes: "Sentido numérico: valor posicional de unidades, decenas y centenas; composición y descomposición de números naturales",
  ideas: ["Material multibase y tabla C/D/U en el suelo con aros.", "Juego del banco: canjear 10 barras por una placa.", "Tarjetas de cifras para formar el mayor y el menor número."],
});
