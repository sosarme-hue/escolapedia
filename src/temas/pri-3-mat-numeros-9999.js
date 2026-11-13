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
