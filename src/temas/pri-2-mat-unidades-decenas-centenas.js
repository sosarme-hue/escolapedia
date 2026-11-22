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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Representar números con el ábaco", "Descomponer de varias maneras", "Relacionar C, D y U con el dinero", "Redondear a la decena más cercana"],
  lectura: { titulo: "Las cajas de huevos de la granja", html: `<p>En la granja de la abuela Pilar hay muchas gallinas. Cada mañana, Daniel la ayuda a recoger los huevos.</p><p>Los huevos se guardan así: en cada <b>cartón</b> caben 10 huevos. Y en cada <b>caja grande</b> caben 10 cartones, es decir, 100 huevos.</p><p>Hoy han recogido muchísimos. Han llenado 2 cajas grandes, 4 cartones y les han quedado 7 huevos sueltos en la cesta.</p><p>—¿Cuántos huevos tenemos, abuela?</p><p>—Piénsalo tú. Cada caja son cien.</p><p>Daniel cuenta: doscientos por las cajas, cuarenta por los cartones y siete sueltos.</p><p>—¡Doscientos cuarenta y siete!</p><p>—Muy bien. Ahora apúntalo en la pizarra para el camión del pueblo.</p><p>Daniel escribe 247 con tiza y piensa que las cajas, los cartones y los huevos sueltos son como las centenas, las decenas y las unidades.</p>` },
  tras: {
    "La tabla C D U": [
      ["El ábaco", `<p>El <mark>ábaco</mark> es un instrumento muy antiguo para contar. Tiene varias varillas y en ellas se meten bolitas.</p><ul><li>La varilla de la derecha es la de las <b>unidades (U)</b>.</li><li>La del medio, la de las <b>decenas (D)</b>.</li><li>La de la izquierda, la de las <b>centenas (C)</b>.</li></ul><p>Para representar el <b>325</b>, metemos 3 bolitas en las centenas, 2 en las decenas y 5 en las unidades.</p><p>En cada varilla caben como mucho <b>9 bolitas</b>. Si llegamos a 10, las quitamos y ponemos <b>una</b> bolita en la varilla de la izquierda. ¡Es un cambio, como 10 cubitos por una barra!</p><p>Hace miles de años, los comerciantes de China y de Roma ya usaban ábacos para hacer sus cuentas.</p><p><b>Actividad</b>: con palillos y bolitas de plastilina, haz un ábaco y representa el número 418.</p>`,
        L6.filas("Ábaco: 325", [["C", "3 bolitas", cRO], ["D", "2 bolitas", cVE], ["U", "5 bolitas", cAZ], ["máximo", "9 por varilla", cNA]]),
        ["eg4uBFDmfcM", "Unidades, Decenas, y Centenas Para Niños | Canción de Valor Posicional", "Numberock", 732975]],
    ],
    "Descomponer un número": [
      ["Descomponer de varias maneras", `<p>Un número se puede <mark>descomponer</mark> de muchas formas, no solo en C, D y U.</p><p>Mira el <b>145</b>:</p><ul><li>1 centena, 4 decenas y 5 unidades: <b>100 + 40 + 5</b>.</li><li>14 decenas y 5 unidades: <b>140 + 5</b>.</li><li>1 centena y 45 unidades: <b>100 + 45</b>.</li><li>145 unidades sueltas.</li></ul><p>¡Todas valen lo mismo! Es como pagar 1 € con una moneda de euro, con dos de 50 céntimos o con cinco de 20 céntimos.</p><p>Descomponer de varias maneras nos ayuda mucho en el <b>cálculo mental</b>. Por ejemplo, para sumar 145 + 30, pensamos en 140 + 30 = 170, y luego sumamos el 5: <b>175</b>.</p><p><b>Actividad</b>: descompón el 263 de tres maneras diferentes.</p>`,
        L6.filas("145 es…", [["1C 4D 5U", "100 + 40 + 5", cAZ], ["14D 5U", "140 + 5", cVE], ["1C 45U", "100 + 45", cNA], ["145U", "todo sueltas", cRO]])],
    ],
    "Componer un número": [
      ["Las pistas desordenadas", `<p>A veces las pistas para formar un número vienen <mark>desordenadas</mark>. ¡Hay que tener cuidado!</p><p>«Tengo 8 unidades, 3 centenas y 1 decena». Si escribimos los números en el orden en que los oímos, saldría 831. ¡Pero está mal!</p><p>Lo correcto es colocar cada cifra en <b>su casilla</b>:</p><ul><li>C: 3</li><li>D: 1</li><li>U: 8</li></ul><p>El número es el <b>318</b>.</p><p>Por eso es útil dibujar siempre la tabla <b>C D U</b> y rellenar las casillas una a una. Si alguna se queda vacía, ponemos un <b>0</b>.</p><p>«Tengo 5 unidades y 6 centenas» es <b>605</b>: no hay decenas, así que va un cero en medio.</p><p><b>Actividad</b>: escribe el número: «2 decenas, 9 centenas y 4 unidades».</p>`,
        H6.flujo("Pistas", ["pistas|8U 1D 3C", "tabla|C D U", "coloco|3 · 1 · 8", "318|¡bien!"], cMO)],
    ],
    "Hacer cambios": [
      ["Redondear a la decena", `<p><mark>Redondear</mark> es cambiar un número por otro parecido que sea más fácil, terminado en 0. Sirve para calcular de cabeza.</p><p>Para redondear a la <b>decena</b> más cercana, miramos las <b>unidades</b>:</p><ul><li>Si son <b>0, 1, 2, 3 o 4</b>, bajamos: 43 se redondea a <b>40</b>.</li><li>Si son <b>5, 6, 7, 8 o 9</b>, subimos: 47 se redondea a <b>50</b>.</li></ul><p>Con números de tres cifras es igual: 236 se redondea a <b>240</b>; 812 se redondea a <b>810</b>.</p><p>En la recta numérica lo vemos muy claro: el 47 está más cerca del 50 que del 40.</p><p>Redondeamos para saber más o menos cuánto vamos a gastar. Si un cuaderno cuesta 2,90 €, decimos que cuesta «unos 3 euros».</p><p><b>Actividad</b>: redondea a la decena: 68, 124, 355 y 401.</p>`,
        H6.dos("Redondear", ["BAJA", ["0, 1, 2, 3, 4", "43 → 40", "812 → 810"], cAZ], ["SUBE", ["5, 6, 7, 8, 9", "47 → 50", "236 → 240"], cRO])],
    ],
    "¿Para qué sirve?": [
      ["Centenas, decenas y unidades con dinero", `<p>Con el <mark>dinero</mark> usamos C, D y U todo el rato.</p><ul><li>Un <b>billete de 100 €</b> es como una <b>centena</b>.</li><li>Un <b>billete de 10 €</b> es como una <b>decena</b>.</li><li>Una <b>moneda de 1 €</b> es como una <b>unidad</b>.</li></ul><p>Si tienes 2 billetes de 100 €, 5 billetes de 10 € y 3 monedas de 1 €, tienes <b>253 €</b>.</p><p>Y si quieres pagar 418 € con el menor número de billetes y monedas, usas 4 billetes de 100, 1 de 10 y 8 monedas de 1 €.</p><p>¿Qué pasa si tienes 12 billetes de 10 €? Los puedes cambiar en el banco por 1 billete de 100 € y te sobran 2 de 10 €. ¡Es lo mismo que hacer cambios con las barras y las placas!</p><p><b>Actividad</b>: con dinero de juguete, forma 365 € de la forma más corta posible.</p>`,
        L6.filas("Dinero", [["100 €", "centena", cRO], ["10 €", "decena", cVE], ["1 €", "unidad", cAZ], ["253 €", "2C 5D 3U", cNA]])],
    ],
  },
  final: [
    ["Repaso: el detective de cifras", `<p>¡Hoy eres <mark>detective</mark>! Resuelve estos casos sobre el número <b>572</b>:</p><ul><li>¿Qué cifra ocupa el lugar de las <b>decenas</b>? El <b>7</b>.</li><li>¿Cuánto <b>vale</b> el 5? Vale <b>500</b>, porque está en las centenas.</li><li>¿Cuántas <b>decenas</b> tiene en total? <b>57</b> decenas (y sobran 2 unidades).</li><li>¿Cómo se <b>descompone</b>? 500 + 70 + 2.</li><li>¿Cómo se <b>redondea</b> a la decena? A <b>570</b>, porque las unidades son 2.</li><li>¿Cómo se representa en el <b>ábaco</b>? 5, 7 y 2 bolitas.</li></ul><p>Ahora cambia el 7 por un 0. ¿Qué número sale? El <b>502</b>. ¡Una sola cifra lo cambia todo!</p><p><b>Actividad</b>: inventa un caso de detective con el número 846 para un compañero.</p>`,
      H6.rueda("Caso 572", "572", [["D = 7", cVE], ["5 vale 500", cRO], ["57 decenas", cAZ], ["≈ 570", cNA]])],
  ],
  ejemplos: [
    ["Forma el número: 4 unidades, 7 centenas y 0 decenas.", ["Colocamos cada cifra en su casilla.", "C = 7, D = 0, U = 4."], "704."],
    ["Redondea 365 a la decena más cercana.", ["Miramos las unidades: 5.", "Con 5 o más, subimos."], "370."],
  ],
  errores: ["Escribir las cifras en el orden en que se dicen las pistas, sin mirar la tabla C D U.", "Redondear mirando las decenas en lugar de las unidades."],
  ejercicios: [
    ["b", "¿Cuántas bolitas pones en las decenas para el 382?", "8."],
    ["b", "Descompón el 516 en C, D y U.", "5 C, 1 D y 6 U."],
    ["b", "Redondea 72 a la decena.", "70."],
    ["b", "¿Cuántos euros son 3 billetes de 100 €?", "300 €."],
    ["b", "Forma el número: 6 C, 2 D, 9 U.", "629."],
    ["m", "Forma el número: 3 U, 8 C, 4 D.", "843."],
    ["m", "Descompón el 238 de dos maneras.", "200 + 30 + 8; 23 D y 8 U."],
    ["m", "Redondea 455 y 451 a la decena.", "460 y 450."],
    ["m", "¿Cuántas decenas hay en 190?", "19."],
    ["m", "Forma 247 € con billetes de 100, 10 y monedas de 1.", "2 de 100, 4 de 10 y 7 monedas de 1 €."],
    ["a", "En la lectura, ¿qué representan las cajas, los cartones y los huevos sueltos?", "Centenas, decenas y unidades."],
    ["a", "Un número tiene 9 C, 0 D y sus unidades son la mitad de 8. ¿Cuál es?", "904."],
    ["a", "¿Cuál es el mayor número de tres cifras que se redondea a 500?", "504."],
    ["a", "Inventa pistas desordenadas para el número 670.", "Respuesta abierta (por ejemplo: 0 U, 6 C, 7 D)."],
  ],
  quiz: [
    ["En el ábaco, la varilla de la izquierda es la de las…", ["centenas", "unidades", "decenas"], "Ábaco."],
    ["14 decenas y 5 unidades son…", ["145", "1405", "54"], "Descomponer."],
    ["«3 U, 1 D, 2 C» es el…", ["213", "312", "123"], "Pistas."],
    ["47 redondeado a la decena es…", ["50", "40", "47"], "Redondear."],
    ["Un billete de 10 € es como una…", ["decena", "centena", "unidad"], "Dinero."],
  ],
  examen: [
    ["En la lectura, ¿cuántos huevos recogen?", ["247", "724", "2047"], "Lectura."],
    ["En el 572, el 5 vale…", ["500", "5", "50"], "Detective."],
  ],
  tarjetas: [
    ["Ábaco", "Varillas de U, D y C; máximo 9 bolitas en cada una."],
    ["Redondear", "Mira las unidades: 0-4 baja, 5-9 sube."],
  ],
  glosario: [
    ["Unidad", "Cada cosa suelta; un cubito."],
    ["Decena", "Grupo de 10 unidades; una barra."],
    ["Centena", "Grupo de 100 unidades; una placa."],
    ["Ábaco", "Instrumento con varillas y bolitas para contar."],
    ["Varilla", "Palito del ábaco donde van las bolitas."],
    ["Descomponer", "Partir un número en trozos."],
    ["Componer", "Juntar trozos para formar un número."],
    ["Redondear", "Cambiar un número por otro cercano terminado en 0."],
    ["Valor", "Lo que vale una cifra según su sitio."],
    ["Cálculo mental", "Hacer cuentas de cabeza."],
  ],
  situacion: {
    titulo: "El mercado de la granja",
    reto: "La clase monta un mercado de la granja donde los productos se empaquetan en cajas de 100, cartones de 10 y unidades sueltas.",
    pasos: ["Fabricar cajas de 100, cartones de 10 y huevos sueltos de papel.", "Hacer pedidos con números de tres cifras.", "Preparar cada pedido con cajas, cartones y sueltos, y anotarlo en la tabla C D U.", "Pagar con billetes de 100, 10 y monedas de 1 €, redondeando el precio."],
    producto: "Un mercado de clase con pedidos y tablas C D U.",
    evaluacion: ["Compone y descompone números de tres cifras.", "Representa números en el ábaco.", "Relaciona C, D y U con el dinero.", "Redondea a la decena más cercana."],
  },
});
