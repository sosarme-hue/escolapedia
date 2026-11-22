// Matemáticas 3º de Primaria: los números hasta el 9.999. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, recta, AZ, RO, VE, NA, SO, MO } = P;

// Material de base 10: millar (cubo), centena (placa), decena (barra) y unidad (cubito).
const millar = (x, y, c = RO) => `<rect x="${x}" y="${y + 6}" width="30" height="30" fill="${c}" fill-opacity=".45" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x} ${y + 6} l 6 -6 h 30 l -6 6 Z M${x + 30} ${y + 6} l 6 -6 v 30 l -6 6 Z" fill="${c}" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.4"/>`;
const centena = (x, y, c = AZ) => `<rect x="${x}" y="${y}" width="26" height="26" fill="${c}" fill-opacity=".45" stroke="var(--ink)" stroke-width="1.4"/>${[1, 2, 3, 4].map((i) => `<path d="M${x + i * 5.2} ${y} V ${y + 26} M${x} ${y + i * 5.2} H ${x + 26}" stroke="var(--ink)" stroke-width=".5"/>`).join("")}`;
const decena = (x, y, c = VE) => `<rect x="${x}" y="${y}" width="6" height="30" fill="${c}" fill-opacity=".55" stroke="var(--ink)" stroke-width="1.3"/>`;
const unidad = (x, y, c = SO) => `<rect x="${x}" y="${y}" width="7" height="7" fill="${c}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.2"/>`;
// Tabla de valor posicional dibujada: cifras [UM, C, D, U].
const casillas = (y, cifras, o = {}) => ["UM", "C", "D", "U"].map((h, i) => `<rect x="${30 + i * 52}" y="${y}" width="48" height="58" rx="8" fill="var(--card)" stroke="${[RO, AZ, VE, SO][i]}" stroke-width="2"/>${t(54 + i * 52, y + 18, h, { s: 12, c: [RO, AZ, VE, SO][i] })}${t(54 + i * 52, y + 48, cifras[i], { s: o.s || 22, d: true })}`).join("");

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Los números hasta el 9.999",
  minutos: 50,
  objetivos: ["Conocer la unidad de millar y su relación con las centenas", "Leer, escribir y descomponer números de cuatro cifras", "Saber el valor de cada cifra según su posición", "Comparar, ordenar y redondear números hasta el 9.999"],
  claves: ["unidad de millar", "centena", "decena", "unidad", "cifra", "valor posicional", "descomponer", "mayor que", "menor que", "anterior", "posterior", "redondear"],
  pregunta: ["En un estadio pequeño caben 2.345 personas. ¿Cuántos grupos de mil personas hay? ¿Y de cien?", "Hay <b>2 grupos de mil</b> (2 unidades de millar), <b>3 grupos de cien</b> (3 centenas), <b>4 grupos de diez</b> (4 decenas) y <b>5 personas</b> sueltas (5 unidades). Cada cifra del número <mark>vale distinto según el lugar</mark> que ocupa. ¡Vamos a descubrirlo!"],
  bloques: [
    ["Del 999 al 1.000", `<p>Ya conoces los números de tres cifras: el mayor es el <b>999</b>. ¿Qué pasa si le sumamos 1?</p><p>9 unidades + 1 = 10 unidades = 1 decena. 9 decenas + 1 = 10 decenas = 1 centena. Y 9 centenas + 1 = 10 centenas = <mark>1 unidad de millar</mark>.</p><p>Así llegamos al <b>1.000</b> (mil), el primer número de <b>cuatro cifras</b>. La unidad de millar se escribe <b>UM</b>.</p><p style="text-align:center"><b>1 UM = 10 C = 100 D = 1.000 U</b></p>`,
      svg("Diez centenas juntas forman una unidad de millar", `${[0, 1, 2, 3, 4].map((i) => centena(14 + i * 28, 30)).join("")}${[0, 1, 2, 3, 4].map((i) => centena(14 + i * 28, 60)).join("")}${t(80, 112, "10 centenas", { s: 13, c: AZ })}${t(170, 70, "=", { s: 24 })}${millar(196, 50)}${t(214, 112, "1 millar", { s: 13, c: RO })}${t(130, 150, "10 C = 1 UM = 1.000", { s: 15, d: true, c: RO })}`)],
    ["Unidades, decenas, centenas y millares", `<p>En un número de cuatro cifras, cada cifra ocupa un lugar con su nombre. De derecha a izquierda:</p><ul><li><b>U</b>: unidades.</li><li><b>D</b>: decenas (grupos de 10).</li><li><b>C</b>: centenas (grupos de 100).</li><li><b>UM</b>: unidades de millar (grupos de 1.000).</li></ul><p>En el número <b>3.527</b> hay 3 UM, 5 C, 2 D y 7 U. Lo podemos colocar en una <mark>tabla de valor posicional</mark>, como si cada cifra viviera en su casa.</p>`,
      svg("Tabla de valor posicional con el número 3527", `${casillas(30, ["3", "5", "2", "7"])}${t(130, 122, "3 UM · 5 C · 2 D · 7 U", { s: 14, c: MO })}${t(130, 150, "3.527", { s: 22, d: true })}`),
      P.V("numB")],
    ["Leer y escribir números de cuatro cifras", `<p>Para <b>leer</b> un número de cuatro cifras, primero decimos los <b>miles</b> y después el resto, como un número de tres cifras:</p>${P.tb(["número", "se lee"], [["1.205", "mil doscientos cinco"], ["4.060", "cuatro mil sesenta"], ["7.318", "siete mil trescientos dieciocho"], ["9.999", "nueve mil novecientos noventa y nueve"]])}<p>Fíjate: se dice «mil», no «un mil». Y para escribir los números grandes con más claridad podemos poner un <b>punto</b> entre los miles y las centenas: 4.060. Hoy también se acepta dejar un pequeño espacio: 4 060.</p><p>¡Cuidado con los <b>ceros</b>! En 4.060 no hay centenas ni unidades, pero los ceros guardan su sitio.</p>`,
      P.filas("Cómo se leen algunos números de cuatro cifras", [["1.205", "mil doscientos cinco", AZ], ["4.060", "cuatro mil sesenta", VE], ["7.318", "siete mil trescientos dieciocho", RO]])],
    ["El valor de cada cifra", `<p>Una misma cifra <mark>vale distinto</mark> según el lugar que ocupa. Mira el 4 en estos números:</p><ul><li>En 4.000 vale <b>4.000</b> (está en las UM).</li><li>En 2.400 vale <b>400</b> (está en las C).</li><li>En 1.040 vale <b>40</b> (está en las D).</li><li>En 3.204 vale <b>4</b> (está en las U).</li></ul><p>A esto lo llamamos <b>valor posicional</b>. Por eso no es lo mismo 1.234 que 4.321, aunque tengan las mismas cifras. ¡El orden importa muchísimo!</p>`,
      svg("El cuatro vale cuatro mil, cuatrocientos, cuarenta o cuatro según su posición", `${[["4.000", "4.000", RO], ["2.400", "400", AZ], ["1.040", "40", VE], ["3.204", "4", SO]].map(([n, v, c], i) => `<rect x="20" y="${18 + i * 38}" width="220" height="30" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${t(70, 39 + i * 38, n, { s: 16, d: true })}${t(118, 39 + i * 38, "→", { s: 15, c: "var(--muted)" })}${t(182, 39 + i * 38, `el 4 vale ${v}`, { s: 12, c })}`).join("")}`)],
    ["Descomponer números", `<p><b>Descomponer</b> un número es separarlo en las partes que lo forman. Hay dos formas:</p><ol><li><b>En unidades</b>: 6.483 = 6 UM + 4 C + 8 D + 3 U.</li><li><b>Con sumas</b>: 6.483 = <mark>6.000 + 400 + 80 + 3</mark>.</li></ol><p>También podemos hacer lo contrario: <b>componer</b>. Si tenemos 2.000 + 500 + 9, el número es 2.509 (no hay decenas: ponemos un 0).</p><p>Descomponer ayuda mucho a hacer cálculos mentales: 3.400 + 200 es fácil si piensas «34 centenas + 2 centenas = 36 centenas».</p>`,
      svg("Descomposición de 2346 con material de base 10", `${millar(14, 30)}${millar(52, 30)}${[0, 1, 2].map((i) => centena(98 + i * 30, 36)).join("")}${[0, 1, 2, 3].map((i) => decena(194 + i * 9, 34)).join("")}${[0, 1, 2, 3, 4, 5].map((i) => unidad(232 + (i % 2) * 9, 34 + Math.floor(i / 2) * 10)).join("")}${t(40, 92, "2 UM", { s: 12, c: RO })}${t(128, 92, "3 C", { s: 12, c: AZ })}${t(208, 92, "4 D", { s: 12, c: VE })}${t(242, 92, "6 U", { s: 12, c: SO })}${t(130, 132, "2.000 + 300 + 40 + 6", { s: 15, c: MO })}${t(130, 160, "= 2.346", { s: 18, d: true })}`),
      P.V("numB2")],
    ["Los números en la recta numérica", `<p>Los números se pueden colocar en una <b>recta</b> ordenados de menor a mayor, como en una regla gigante. Cada número tiene un <b>anterior</b> (el que va justo antes) y un <b>posterior</b> (el que va justo después).</p><ul><li>El anterior de 5.000 es <b>4.999</b>.</li><li>El posterior de 5.000 es <b>5.001</b>.</li></ul><p>También podemos contar de <mark>mil en mil</mark>: 1.000, 2.000, 3.000… o de cien en cien: 2.300, 2.400, 2.500… Solo cambia la cifra de las UM o de las C.</p>`,
      svg("Recta numérica de mil en mil del cero al nueve mil con el cuatro mil quinientos marcado", `${recta(0, 9, 90, 22, 238, [], { num: false }).s}${[0, 2, 4, 6, 8].map((v) => t(22 + v * 24, 112, v ? `${v}.000` : "0", { s: 9.5, c: "var(--muted)" })).join("")}<circle cx="130" cy="90" r="6" fill="${RO}"/>${t(130, 72, "4.500", { s: 14, c: RO })}${t(130, 150, "de mil en mil", { s: 13, c: AZ })}`)],
    ["Comparar y ordenar números", `<p>Para saber qué número es <b>mayor</b>, los comparamos cifra a cifra empezando por la <b>izquierda</b>:</p><ol><li>Primero miramos las <b>UM</b>. Si son distintas, ya sabemos cuál es mayor: 5.120 &gt; 4.980.</li><li>Si las UM son iguales, miramos las <b>C</b>: 3.<b>6</b>00 &gt; 3.<b>4</b>99.</li><li>Si también son iguales, las D, y después las U.</li></ol><p>Usamos los signos <mark>&gt;</mark> (mayor que) y <mark>&lt;</mark> (menor que). Truco: el signo es una boca de cocodrilo que siempre <b>se come el número mayor</b>.</p>`,
      svg("Comparar 3600 y 3499: iguales las unidades de millar, las centenas deciden", `${t(70, 50, "3.600", { s: 24, d: true, c: AZ })}${t(130, 50, "&gt;", { s: 26, c: RO })}${t(190, 50, "3.499", { s: 24, d: true })}<path d="M48 64 H 62 M168 64 H 182" stroke="${VE}" stroke-width="3"/><path d="M64 64 H 78 M184 64 H 198" stroke="${RO}" stroke-width="3"/>${t(130, 98, "3 = 3 (UM iguales)", { s: 12, c: VE })}${t(130, 120, "6 &gt; 4 (las C deciden)", { s: 12, c: RO })}${t(130, 156, "3.600 es mayor", { s: 15, c: AZ })}`)],
    ["Redondear números", `<p><b>Redondear</b> es cambiar un número por otro «redondo» que esté cerca, para calcular más rápido o dar una idea aproximada.</p><p>Para redondear a la <b>centena</b> miramos la cifra de las <b>decenas</b>:</p><ul><li>Si es <b>0, 1, 2, 3 o 4</b>, nos quedamos con la centena de abajo: 2.<b>3</b>40 → 2.300.</li><li>Si es <b>5, 6, 7, 8 o 9</b>, subimos a la centena de arriba: 2.<b>3</b>70 → 2.400.</li></ul><p>Para redondear al <b>millar</b> miramos la cifra de las centenas: 6.<b>7</b>05 → <mark>7.000</mark>. Por ejemplo, si un libro tiene 1.180 páginas, decimos que tiene «unas mil doscientas».</p>`,
      svg("Redondear 2370 a la centena: está más cerca de 2400 que de 2300", `${recta(0, 10, 92, 24, 236, [[7, "2.370", RO]], { num: false }).s}${t(24, 116, "2.300", { s: 11, c: AZ })}${t(236, 116, "2.400", { s: 11, c: VE })}<path d="M175 70 C 200 50, 225 55, 236 78" fill="none" stroke="${VE}" stroke-width="2.5" stroke-dasharray="5 4"/>${t(130, 150, "2.370 → 2.400", { s: 16, d: true, c: VE })}`)],
    ["¿Para qué sirven los números grandes?", `<p>Los números de cuatro cifras aparecen por todas partes:</p><ul><li><b>Años</b>: 2026, el año en que nació tu abuela (1955)…</li><li><b>Alturas</b>: el pico del Aneto mide 3.404 metros.</li><li><b>Precios</b>: una bicicleta puede costar 1.250 euros.</li><li><b>Distancias</b>: de Madrid a Moscú hay unos 3.400 km.</li><li><b>Personas</b>: un pueblo de 4.800 habitantes.</li></ul><p>Juego para la clase: ¿quién encuentra el número más grande en una revista o un periódico? Después, leedlo en voz alta y <mark>descomponedlo</mark>.</p>`,
      P.filas("Números de cuatro cifras en la vida diaria", [["Año", "2026", AZ], ["Montaña", "Aneto: 3.404 m", VE], ["Precio", "bicicleta: 1.250 €", RO], ["Pueblo", "4.800 habitantes", SO]])],
  ],
  figura: ["Los números hasta el 9.999", P.columnas("Resumen: la unidad de millar, el valor de las cifras, comparar y redondear", [["10 C = 1.000 U", "MILLAR", ["UM · C · D · U", "4 cifras"], RO], ["6.483", "DESCOMPONER", ["6.000 + 400", "+ 80 + 3"], AZ], ["de izquierda a derecha", "COMPARAR", ["5.120 &gt; 4.980", "&gt; y &lt;"], VE], ["2.370 → 2.400", "REDONDEAR", ["0-4 abajo", "5-9 arriba"], SO]])],
  video: P.V("numV", true),
  ejemplos: [
    ["Escribe con cifras: «siete mil cuarenta y dos».", ["Siete mil: 7 UM.", "No dice centenas: 0 C.", "Cuarenta y dos: 4 D y 2 U."], "7.042"],
    ["Descompón 5.908 de dos formas.", ["En unidades: 5 UM + 9 C + 0 D + 8 U.", "Con sumas: 5.000 + 900 + 8 (el 0 no suma nada)."], "5.908 = 5 UM + 9 C + 8 U = 5.000 + 900 + 8"],
    ["Ordena de menor a mayor: 4.310, 4.103, 3.999.", ["Miro las UM: 3.999 tiene 3, es el menor.", "4.310 y 4.103 tienen 4 UM: miro las C: 1 &lt; 3."], "3.999 &lt; 4.103 &lt; 4.310"],
  ],
  errores: [
    "Olvidar los ceros al escribir: «tres mil cinco» es 3.005, no 305.",
    "Decir «un mil» en lugar de «mil».",
    "Comparar empezando por la derecha en vez de por la izquierda.",
    "Confundir el valor de la cifra: en 2.700, el 7 vale 700, no 7.",
    "Redondear mirando la cifra equivocada (a la centena hay que mirar las decenas).",
  ],
  ejercicios: [
    ["¿Cuántas centenas tiene una unidad de millar? ¿Y cuántas unidades?", "10 centenas y 1.000 unidades."],
    ["Escribe cómo se leen 3.016 y 8.450.", "Tres mil dieciséis; ocho mil cuatrocientos cincuenta."],
    ["Escribe con cifras: «nueve mil doscientos» y «dos mil ocho».", "9.200 y 2.008."],
    ["¿Cuánto vale el 6 en 6.215, en 2.615 y en 1.256?", "6.000, 600 y 6."],
    ["Descompón 4.735 en forma de suma.", "4.000 + 700 + 30 + 5."],
    ["Compón el número: 8 UM + 2 D + 5 U.", "8.025."],
    ["Escribe el anterior y el posterior de 7.000.", "6.999 y 7.001."],
    ["Escribe &gt; o &lt;: 5.099 __ 5.100 y 8.010 __ 8.001.", "5.099 &lt; 5.100; 8.010 &gt; 8.001."],
    ["Redondea a la centena: 3.462 y 1.851.", "3.500 y 1.900."],
    ["Cuenta de cien en cien desde 2.700 hasta 3.200.", "2.700, 2.800, 2.900, 3.000, 3.100, 3.200."],
  ],
  quiz: [
    ["1 unidad de millar es igual a…", ["10 centenas", "10 decenas", "100 centenas"], "1.000 = 10 × 100."],
    ["¿Cómo se escribe «seis mil treinta»?", ["6.030", "6.300", "630"], "No hay centenas: 0 C."],
    ["En 4.582, la cifra de las centenas es…", ["5", "4", "8"], "UM 4, C 5, D 8, U 2."],
    ["¿Cuánto vale el 3 en 1.304?", ["300", "3", "30"], "Está en las centenas."],
    ["7.000 + 50 + 1 =", ["7.051", "7.501", "751"], "No hay centenas."],
    ["¿Qué número es mayor?", ["6.001", "5.999", "5.990"], "Tiene más millares."],
    ["El posterior de 3.999 es…", ["4.000", "3.998", "3.910"], "3.999 + 1."],
    ["2.640 redondeado a la centena es…", ["2.600", "2.700", "3.000"], "La decena es 4: abajo."],
    ["El número mayor de cuatro cifras es…", ["9.999", "9.000", "1.000"], "Todo nueves."],
    ["¿Qué signo va en 4.200 __ 4.020?", ["&gt;", "&lt;", "="], "2 C &gt; 0 C."],
  ],
  examen: [
    ["¿Cómo se lee 5.017?", ["cinco mil diecisiete", "quinientos diecisiete", "cinco mil ciento siete"], "5 UM, 0 C, 1 D, 7 U."],
    ["8 UM + 4 C + 9 U =", ["8.409", "8.490", "849"], "No hay decenas."],
    ["¿Qué número va entre 2.998 y 3.000?", ["2.999", "3.001", "2.990"], "Sumamos 1 a 2.998."],
    ["6.750 redondeado al millar es…", ["7.000", "6.000", "6.800"], "La centena es 7: arriba."],
  ],
  feynman: ["Qué es una unidad de millar y cuántas centenas tiene", "Por qué una misma cifra vale distinto según su lugar", "Cómo se descompone un número de cuatro cifras", "Cómo se comparan dos números de cuatro cifras", "Cómo se redondea a la centena"],
  mapa: ["NÚMEROS HASTA EL 9.999", [["Millar", "1 UM = 10 C = 1.000 U", RO], ["Valor posicional", "UM · C · D · U", AZ], ["Comparar", "de izquierda a derecha", VE], ["Redondear", "a la centena y al millar", SO]]],
  tarjetas: [
    ["Unidad de millar (UM)", "Mil unidades o diez centenas."],
    ["Cifra", "Cada uno de los signos del 0 al 9 que forman un número."],
    ["Valor posicional", "Lo que vale una cifra según el lugar que ocupa."],
    ["Descomponer", "Separar un número en UM, C, D y U: 3.205 = 3.000 + 200 + 5."],
    ["Anterior", "El número que va justo antes: el de 4.000 es 3.999."],
    ["Posterior", "El número que va justo después: el de 4.000 es 4.001."],
    ["&gt; y &lt;", "Mayor que y menor que: la boca abierta mira al mayor."],
    ["Redondear a la centena", "Mirar las decenas: de 0 a 4 abajo, de 5 a 9 arriba."],
  ],
  familias: ["Buscad números de cuatro cifras en casa: años, precios, matrículas, códigos postales.", "Leed en voz alta los números de los tiques de la compra y descomponedlos.", "Jugad a «adivina mi número» dando pistas: tiene 3 UM, 0 C…", "Contad juntos de cien en cien o de mil en mil al ir en coche."],
  saberes: "Sentido numérico: lectura, escritura, composición y descomposición de números naturales hasta el 9.999; valor posicional; comparación, orden, recta numérica y redondeo a la centena y al millar",
  ideas: ["Material de base 10 o billetes de juguete de 1.000, 100, 10 y 1 para formar números.", "Carrera de números en la recta del suelo de la clase.", "Cartas con cifras para formar el número mayor y el menor posible."],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Representar números en el ábaco", "Distinguir números pares e impares", "Continuar series de 10, 100 y 1.000", "Hacerse una idea de lo grande que es 1.000"],
  lectura: { titulo: "Mil tapones", html: `<p>En septiembre, la clase de 3.º B decidió recoger tapones de plástico para reciclarlos. La tutora, Marta, colgó un cartel en la puerta: «Objetivo: ¡1.000 tapones!».</p><p>—¿Mil? ¡Eso es facilísimo! —dijo Iker—. En mi casa hay por lo menos cien.</p><p>Al final de la primera semana contaron: 87 tapones. Iker se quedó callado.</p><p>Para no perder la cuenta, Marta les enseñó un truco. Cada vez que juntaban diez tapones, los metían en una bolsita: una <b>decena</b>. Cuando tenían diez bolsitas, las metían en una caja de zapatos: una <b>centena</b>. Y en la pared pegaron un cartel con cuatro columnas: UM, C, D y U.</p><p>Pasaron las semanas. Una caja, dos cajas, cinco cajas… En febrero ya tenían nueve cajas, nueve bolsitas y nueve tapones sueltos: 999.</p><p>—¡Solo falta uno! —gritó Lucía.</p><p>Todos buscaron por las mochilas. Al final, Iker sacó del bolsillo un tapón azul de su botella de agua y lo puso en la mesa. Diez tapones sueltos formaron una bolsita, diez bolsitas una caja nueva… y diez cajas, ¡un millar!</p><p>Lo celebraron con un aplauso enorme. Iker miró la montaña de tapones y dijo:</p><p>—Vale. Mil es mucho más de lo que parecía.</p>` },
  tras: {
    "Unidades, decenas, centenas y millares": [
      ["Representar números en el ábaco", `<p>El <mark>ábaco</mark> es uno de los instrumentos de cálculo más antiguos del mundo. Hay muchos tipos, pero en clase se suele usar un ábaco con <b>varillas verticales</b>, una para cada orden:</p><ul><li>La varilla de la derecha es la de las <b>unidades (U)</b>.</li><li>La siguiente, la de las <b>decenas (D)</b>.</li><li>Después, la de las <b>centenas (C)</b>.</li><li>Y la de la izquierda, la de las <b>unidades de millar (UM)</b>.</li></ul><p>Para representar un número, ponemos en cada varilla tantas bolas como indica su cifra. Por ejemplo, el <b>3.205</b> se representa con 3 bolas en las UM, 2 en las C, ninguna en las D y 5 en las U.</p><p>Fíjate en algo importante: cuando una varilla tiene <b>0</b>, se queda vacía, pero no podemos quitarla. ¡Si la quitáramos, el número cambiaría! Por eso el cero es tan importante: guarda el sitio.</p><p>En cada varilla caben como máximo <b>9 bolas</b>. Si llegamos a 10, quitamos las diez y ponemos una bola en la varilla de la izquierda: 10 unidades = 1 decena.</p><p>También se pueden usar <b>bloques</b>: cubitos para las unidades, barras de 10 para las decenas, placas de 100 para las centenas y cubos grandes de 1.000 para los millares.</p>`,
        L6.filas("3.205", [["UM", "3 bolas", cRO], ["C", "2 bolas", cAZ], ["D", "vacía: 0", cMO], ["U", "5 bolas", cVE]]), ["cG50ps5tyGc", "REPRESENTAR UN NÚMERO EN EL ÁBACO", "Primero A Híjar", 168101]],
    ],
    "Descomponer números": [
      ["Números pares e impares", `<p>Los números se pueden dividir en dos grandes familias: <mark>pares</mark> e <mark>impares</mark>.</p><ul><li>Un número es <b>par</b> si se puede repartir en <b>dos grupos iguales</b> sin que sobre nada. Por ejemplo, 8 caramelos se reparten entre dos: 4 y 4.</li><li>Un número es <b>impar</b> si, al repartirlo en dos grupos iguales, <b>sobra uno</b>. Con 7 caramelos: 3 y 3, y sobra 1.</li></ul><p>¿Cómo saberlo con números muy grandes, como el 4.736? ¡Muy fácil! Solo hay que mirar la <b>cifra de las unidades</b>:</p><ul><li>Si termina en <b>0, 2, 4, 6 u 8</b>, es <b>par</b>: 4.736 es par.</li><li>Si termina en <b>1, 3, 5, 7 o 9</b>, es <b>impar</b>: 2.019 es impar.</li></ul><p>Los pares y los impares van <b>alternando</b>: par, impar, par, impar… Por eso, después de un número par siempre viene uno impar.</p><p>Algunas curiosidades:</p><ul><li>En muchas calles, los números <b>pares</b> de las casas están en una acera y los <b>impares</b> en la de enfrente.</li><li>Par + par = par. Impar + impar = par. Par + impar = impar. ¡Compruébalo con ejemplos!</li></ul>`,
        H6.dos("Familias", ["PARES", ["0, 2, 4, 6, 8", "dos grupos", "no sobra"], cAZ], ["IMPARES", ["1, 3, 5, 7, 9", "dos grupos", "sobra 1"], cRO]), ["NFFtPW94tbg", "Definición de los números pares e impares para Primaria", "Mundo Primaria", 581199]],
    ],
    "Comparar y ordenar números": [
      ["Series de 10, de 100 y de 1.000", `<p>Una <mark>serie</mark> es una lista de números que siguen una <b>regla</b>. Para continuarla, primero hay que descubrir la regla.</p><ul><li><b>De 10 en 10</b> (cambia la cifra de las decenas): 2.340, 2.350, 2.360, 2.370…</li><li><b>De 100 en 100</b> (cambia la cifra de las centenas): 4.125, 4.225, 4.325, 4.425…</li><li><b>De 1.000 en 1.000</b> (cambia la cifra de los millares): 1.508, 2.508, 3.508, 4.508…</li></ul><p>Las series también pueden ir <b>hacia atrás</b>, restando: 6.900, 6.800, 6.700, 6.600…</p><p>¡Cuidado con los saltos de orden! Cuando la cifra que cambia llega a 9 y hay que sumar otra vez, pasa a la siguiente:</p><ul><li>De 10 en 10: 3.970, 3.980, 3.990, <b>4.000</b>.</li><li>De 100 en 100: 2.750, 2.850, 2.950, <b>3.050</b>.</li></ul><p>Para descubrir la regla de una serie, resta dos números seguidos: 5.420 y 5.520 → la diferencia es 100, así que la serie va de 100 en 100.</p><p><b>Reto</b>: ¿qué regla sigue esta serie? 1.250, 1.500, 1.750, 2.000… (va de 250 en 250).</p>`,
        H6.flujo("De 100 en 100", ["2.750|", "2.850|", "2.950|", "3.050|¡salto!"], cVE)],
    ],
  },
  final: [
    ["¿Cuánto es 1.000?", `<p>El número <mark>1.000</mark> parece pequeño escrito, pero es mucho más grande de lo que imaginamos. Mira algunos ejemplos para hacerte una idea:</p><ul><li><b>1.000 pasos</b>: si das pasos de medio metro, recorres 500 metros: unas cinco veces el largo de un campo de fútbol.</li><li><b>1.000 segundos</b>: son casi 17 minutos.</li><li><b>1.000 días</b>: casi 3 años. ¡Desde que entraste en 1.º de Primaria hasta ahora!</li><li><b>1.000 metros</b> forman un <b>kilómetro</b>, y <b>1.000 gramos</b>, un <b>kilogramo</b>. Por eso el prefijo <b>kilo</b> significa «mil».</li><li>Un libro gordo puede tener unas 300 páginas: <b>1.000 páginas</b> serían tres libros.</li></ul><p><b>Investiga en clase</b>: entre todos, reunid 1.000 objetos pequeños (garbanzos, clips, palillos). Agrupadlos de 10 en 10 en vasitos, y los vasitos de 10 en 10 en bandejas. ¿Cuántos vasitos necesitáis? (100). ¿Y cuántas bandejas? (10).</p><p>¿Y cuánto tardarías en contar hasta 1.000 de uno en uno? Diciendo un número por segundo, unos 17 minutos… ¡sin equivocarte ni una vez!</p>`,
      L6.filas("1.000", [["pasos", "500 metros", cAZ], ["segundos", "casi 17 min", cNA], ["días", "casi 3 años", cMO], ["metros", "1 kilómetro", cVE]])],
    ["Detectives de números", `<p>Un buen juego para practicar es <mark>adivinar números con pistas</mark>. Un compañero piensa un número de cuatro cifras y da pistas; los demás, como detectives, lo descubren.</p><p><b>Caso 1</b>: Soy un número de cuatro cifras.</p><ul><li>Mi cifra de los millares es 3.</li><li>Tengo 0 centenas.</li><li>Mi cifra de las decenas es el doble de la de los millares.</li><li>Soy impar y mi última cifra es la mayor posible.</li></ul><p>¿Quién soy? → UM = 3, C = 0, D = 6, U = 9: el <b>3.069</b>.</p><p><b>Caso 2</b>: Estoy entre el 5.000 y el 6.000. Mis cuatro cifras son iguales. ¿Quién soy? → el <b>5.555</b>.</p><p><b>Caso 3</b>: Soy el número más grande que se puede escribir con las cifras 4, 0, 7 y 2 sin repetir ninguna. → Ordenamos las cifras de mayor a menor: <b>7.420</b>. ¿Y el más pequeño de cuatro cifras? No puede empezar por 0, así que es el <b>2.047</b>.</p><p>Ahora te toca a ti: inventa un número y escribe cuatro pistas para que tu compañero lo adivine. Usa palabras como <b>par</b>, <b>impar</b>, <b>mayor que</b>, <b>menor que</b>, <b>doble</b> o <b>anterior</b>.</p>`,
      H6.rueda("Pistas", "¿QUIÉN SOY?", [["par/impar", cAZ], ["mayor que", cRO], ["doble", cVE], ["cifras", cNA]])],
  ],
  ejemplos: [
    ["¿Cómo se representa 4.060 en el ábaco?", ["4 bolas en las UM, 0 en las C.", "6 bolas en las D, 0 en las U."], "UM: 4, C: vacía, D: 6, U: vacía."],
    ["Continúa la serie: 1.980, 1.990, …", ["La serie va de 10 en 10.", "Después de 1.990 viene un salto de centena."], "2.000, 2.010, 2.020."],
  ],
  errores: ["Mirar la primera cifra para saber si un número es par: hay que mirar la última.", "Olvidar el salto en las series: después de 3.990 (de 10 en 10) viene 4.000."],
  ejercicios: [
    ["b", "¿Cuántas bolas pones en las C para el 2.715?", "7."],
    ["b", "¿Es par o impar el 3.458?", "Par."],
    ["b", "Continúa de 100 en 100: 1.200, 1.300, …", "1.400, 1.500."],
    ["b", "¿Cuántos metros tiene un kilómetro?", "1.000."],
    ["b", "Escribe el número con 5 UM, 0 C, 3 D y 1 U.", "5.031."],
    ["m", "Continúa de 1.000 en 1.000: 2.450, 3.450, …", "4.450, 5.450."],
    ["m", "Escribe tres números impares entre 6.000 y 6.010.", "6.001, 6.003, 6.005…"],
    ["m", "¿Qué regla sigue la serie 7.800, 7.700, 7.600?", "Resta 100."],
    ["m", "¿Cuántas decenas hay en 1.000?", "100."],
    ["m", "Par + impar, ¿da par o impar?", "Impar."],
    ["a", "Escribe el mayor y el menor número con 8, 1, 0 y 5.", "8.510 y 1.058."],
    ["a", "Adivina: estoy entre 4.000 y 5.000, mis decenas y unidades son 9 y tengo 0 centenas.", "4.099."],
    ["a", "Inventa una serie de 250 en 250 que empiece en 1.000.", "1.000, 1.250, 1.500, 1.750…"],
    ["a", "¿Cuántas cajas de 100 tapones hacen falta para 3.400 tapones?", "34."],
  ],
  quiz: [
    ["En el ábaco, la varilla de la derecha es la de las…", ["unidades", "decenas", "UM"], "Ábaco."],
    ["El 5.207 es…", ["impar", "par", "redondo"], "Pares."],
    ["Después de 2.950 (de 100 en 100) viene…", ["3.050", "2.960", "3.000"], "Series."],
    ["Kilo significa…", ["mil", "cien", "diez"], "Mil."],
    ["El mayor número con 3, 9, 1 y 6 es…", ["9.631", "1.369", "9.316"], "Detectives."],
  ],
  examen: [
    ["En la lectura, ¿cuántos tapones faltaban en febrero?", ["uno", "cien", "diez"], "Lectura."],
    ["¿Qué número de cuatro cifras tiene todas sus cifras iguales y está entre 7.000 y 8.000?", ["7.777", "7.000", "8.888"], "Detectives."],
  ],
  tarjetas: [
    ["Ábaco", "Una varilla por orden; el 0 deja la varilla vacía."],
    ["Pares e impares", "Mira la última cifra: 0, 2, 4, 6, 8 son pares."],
    ["Series", "Descubre la regla restando dos seguidos; cuidado con los saltos."],
    ["1.000", "1 km, 1 kg, casi 3 años en días."],
  ],
  glosario: [
    ["Ábaco", "Instrumento con varillas y bolas para contar."],
    ["Varilla", "Barra fina del ábaco."],
    ["Orden", "Lugar de una cifra: U, D, C o UM."],
    ["Par", "Número que se reparte en dos grupos iguales."],
    ["Impar", "Número que, al repartirlo en dos, sobra 1."],
    ["Serie", "Lista de números que siguen una regla."],
    ["Regla", "Lo que se suma o se resta en una serie."],
    ["Millar", "Grupo de mil unidades."],
    ["Kilómetro", "Mil metros."],
    ["Kilogramo", "Mil gramos."],
    ["Cifra", "Cada uno de los signos del 0 al 9."],
    ["Pista", "Dato que ayuda a descubrir algo."],
  ],
  situacion: {
    titulo: "El reto de los 1.000",
    reto: "La clase se propone reunir 1.000 objetos reciclables y llevar la cuenta con el sistema decimal.",
    pasos: ["Agrupar los objetos en decenas y centenas y anotarlos en el ábaco.", "Llevar un registro semanal con series de números.", "Clasificar las cantidades de cada semana en pares e impares.", "Inventar adivinanzas de números con los datos recogidos."],
    producto: "Un mural con el recuento hasta 1.000 y un libro de adivinanzas numéricas.",
    evaluacion: ["Representa números en el ábaco.", "Distingue pares e impares.", "Continúa series.", "Comprende el valor de 1.000."],
  },
});
