// Matemáticas 5º de Primaria: potencias, cuadrados, cubos y potencias de base 10. Dibujos propios en SVG.
const P = require("./_pri5a");
const { svg, t, caja, rejilla, AZ, RO, VE, NA, SO, MO, AG } = P;

// Potencia escrita grande: base y exponente.
const pot = (x, y, b, e, s = 34, cb = AZ, ce = RO) => `${t(x, y, b, { s, d: true, c: cb })}${t(x + s * 0.32 * String(b).length + 6, y - s * 0.45, e, { s: s * 0.55, d: true, c: ce })}`;

// Cubo en perspectiva de lado l formado por n × n × n cubitos (solo se dibuja el contorno y la rejilla de la cara frontal).
const cubo = (x, y, l, n, c = VE) => {
  const d = l * 0.45, k = l / n;
  let s = `<path d="M${x} ${y} h ${l} l ${d} ${-d} h ${-l} Z" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/><path d="M${x + l} ${y} v ${l} l ${d} ${-d} v ${-l} Z" fill="${c}" fill-opacity=".4" stroke="${c}" stroke-width="2"/><rect x="${x}" y="${y}" width="${l}" height="${l}" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>`;
  for (let i = 1; i < n; i++) s += `<path d="M${x + i * k} ${y} V ${y + l} M${x} ${y + i * k} H ${x + l} M${x + i * k} ${y} l ${d} ${-d} M${x + l} ${y + i * k} l ${d} ${-d}" stroke="${c}" stroke-width="1"/>`;
  return s;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Potencias",
  minutos: 45,
  objetivos: ["Entender una potencia como una multiplicación de factores iguales", "Reconocer la base y el exponente y leer potencias", "Calcular cuadrados, cubos y potencias de base 10", "Descomponer números usando potencias de base 10"],
  claves: ["potencia", "base", "exponente", "al cuadrado", "al cubo", "potencia de base 10", "cuadrado perfecto", "descomposición polinómica"],
  pregunta: ["Un rumor empieza con 2 personas. Cada hora, cada una se lo cuenta a 2 más, así que el número se duplica. ¿Cuántas personas lo sabrán a las 6 horas?", "Cada hora se multiplica por 2: 2 × 2 × 2 × 2 × 2 × 2. Escribirlo así es largo, por eso usamos una <b>potencia</b>: 2<sup>6</sup> = <mark>64 personas</mark>. Las potencias sirven para escribir de forma corta multiplicaciones en las que se repite el mismo número."],
  bloques: [
    ["¿Qué es una potencia?", `<p>Una <b>potencia</b> es una forma abreviada de escribir una <b>multiplicación de factores iguales</b>.</p><p style="text-align:center"><b>3 × 3 × 3 × 3 = 3<sup>4</sup></b></p><p>Tiene dos partes:</p><ul><li>La <b>base</b> es el factor que se repite (el número grande): 3.</li><li>El <b>exponente</b> indica cuántas veces se repite (el número pequeño de arriba): 4.</li></ul><p>Para calcularla, se hace la multiplicación: 3<sup>4</sup> = 3 × 3 × 3 × 3 = <mark>81</mark>.</p><p>Las potencias aparecen en la naturaleza: una bacteria que se divide en dos, y luego cada una en otras dos, crece como 2, 4, 8, 16, 32… Son las potencias de 2.</p>`,
      svg("La potencia tres elevado a cuatro con su base y su exponente", `${pot(92, 92, "3", "4", 64)}${P.flecha(52, 132, 80, 100, AZ, 2)}${t(46, 148, "base", { s: 13, c: AZ })}${P.flecha(170, 36, 134, 44, RO, 2)}${t(200, 36, "exponente", { s: 13, c: RO })}${t(184, 104, "= 3 × 3 × 3 × 3", { s: 12 })}${t(184, 128, "= 81", { s: 16, d: true, c: VE })}`)],
    ["Cómo se leen las potencias", `<p>Las potencias se leen diciendo la base y después el exponente:</p><ul><li>5<sup>4</sup> se lee «cinco <b>elevado a</b> cuatro» o «cinco a la cuarta».</li><li>7<sup>6</sup> se lee «siete elevado a seis» o «siete a la sexta».</li></ul><p>Dos exponentes tienen nombre especial:</p><ul><li>Exponente <b>2</b>: se dice <b>al cuadrado</b>. 6<sup>2</sup> = «seis al cuadrado».</li><li>Exponente <b>3</b>: se dice <b>al cubo</b>. 4<sup>3</sup> = «cuatro al cubo».</li></ul><p>Y dos casos curiosos: cualquier número elevado a <b>1</b> es el mismo número (9<sup>1</sup> = 9), y <mark>1 elevado a cualquier exponente es 1</mark> (1<sup>50</sup> = 1), porque 1 × 1 × 1… siempre da 1.</p>`,
      P.filas("Cómo se leen las potencias: al cuadrado, al cubo, a la cuarta", [["6²", "seis al cuadrado", AZ], ["4³", "cuatro al cubo", VE], ["5⁴", "cinco a la cuarta", SO], ["2⁷", "dos elevado a siete", MO]])],
    ["Calcular potencias", `<p>Para calcular una potencia, escribe la multiplicación y ve haciendo los productos <b>poco a poco</b>:</p><p style="text-align:center">2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 → 4 → 8 → 16 → <b>32</b></p><p>¡Cuidado con el error más común! 2<sup>5</sup> <b>no es</b> 2 × 5 = 10. El exponente no es un factor: dice cuántas veces se repite la base.</p><p>Las potencias crecen <b>muy deprisa</b>. Fíjate:</p><ul><li>2<sup>10</sup> = 1 024 (más de mil).</li><li>2<sup>20</sup> = 1 048 576 (¡más de un millón!).</li></ul><p>Por eso una famosa leyenda cuenta que un sabio pidió a un rey 1 grano de trigo en la primera casilla del ajedrez, 2 en la segunda, 4 en la tercera… El rey aceptó sin pensar, pero <mark>no había trigo suficiente en todo el reino</mark>.</p>`,
      svg("Las potencias de dos crecen muy deprisa: 2, 4, 8, 16, 32, 64", `${[2, 4, 8, 16, 32, 64].map((v, i) => `<rect x="${22 + i * 38}" y="${150 - v * 1.8}" width="28" height="${(v * 1.8).toFixed(1)}" rx="3" fill="${MO}" fill-opacity="${0.25 + i * 0.1}" stroke="${MO}" stroke-width="1.5"/>${t(36 + i * 38, 166, `2${["¹", "²", "³", "⁴", "⁵", "⁶"][i]}`, { s: 11 })}${t(36 + i * 38, 144 - v * 1.8, String(v), { s: 11, c: MO })}`).join("")}${t(70, 30, "×2 cada vez", { s: 12, c: RO })}`),
      P.V("potB")],
    ["El cuadrado de un número", `<p>¿Por qué el exponente 2 se llama «al cuadrado»? Porque el cuadrado de un número es el número de cuadraditos que tiene un <b>cuadrado</b> de ese lado.</p><p>Un cuadrado de 4 cuadraditos de lado tiene 4 × 4 = 4<sup>2</sup> = <b>16</b> cuadraditos.</p><p>Los números que se obtienen al elevar al cuadrado se llaman <b>cuadrados perfectos</b>. Conviene saber los diez primeros de memoria:</p><p style="text-align:center"><b>1, 4, 9, 16, 25, 36, 49, 64, 81, 100</b></p><p>Así podrás calcular enseguida el <mark>área de un cuadrado</mark>: si una baldosa cuadrada mide 9 dm de lado, su área es 9<sup>2</sup> = 81 dm<sup>2</sup>.</p>`,
      svg("Cuadrado de cuatro por cuatro cuadraditos: cuatro al cuadrado es dieciséis", `<rect x="30" y="30" width="120" height="120" fill="${AZ}" fill-opacity=".2"/>${rejilla(30, 30, 4, 4, 30, AZ)}${t(90, 168, "4", { s: 13, c: AZ })}${t(18, 94, "4", { s: 13, c: AZ })}${t(206, 80, "4² = 4 × 4", { s: 14 })}${t(206, 108, "= 16", { s: 20, d: true, c: VE })}${t(206, 132, "cuadraditos", { s: 11, c: "var(--muted)" })}`)],
    ["El cubo de un número", `<p>El exponente 3 se llama «al cubo» porque el cubo de un número es la cantidad de cubitos que forman un <b>cubo</b> con ese número de cubitos en cada arista.</p><p>Un cubo de 3 cubitos de lado tiene 3 capas de 3 × 3 cubitos: 3 × 3 × 3 = 3<sup>3</sup> = <b>27</b> cubitos.</p><p>Los primeros cubos son: <b>1, 8, 27, 64, 125, 216, 343, 512, 729, 1 000</b>.</p><p>Te servirá cuando estudies el <b>volumen</b>: una caja cúbica de 10 cm de arista tiene 10<sup>3</sup> = <mark>1 000 cm<sup>3</sup></mark>, que es exactamente un litro.</p>`,
      svg("Cubo formado por tres por tres por tres cubitos: tres al cubo es veintisiete", `${cubo(40, 54, 96, 3)}${t(88, 170, "3 × 3 × 3", { s: 12, c: VE })}${t(210, 84, "3³", { s: 26, d: true, c: VE })}${t(210, 116, "= 27", { s: 20, d: true })}${t(210, 138, "cubitos", { s: 11, c: "var(--muted)" })}`),
      P.V("potB2")],
    ["Potencias de base 10", `<p>Las potencias de 10 son las más fáciles de calcular: el resultado es un <b>1 seguido de tantos ceros como indica el exponente</b>.</p><ul><li>10<sup>1</sup> = 10 (un cero)</li><li>10<sup>2</sup> = 100 (dos ceros)</li><li>10<sup>3</sup> = 1 000 (tres ceros)</li><li>10<sup>6</sup> = 1 000 000 (seis ceros: ¡un millón!)</li></ul><p>Al revés también funciona: para escribir 10 000 como potencia, cuenta los ceros: hay 4, así que es <mark>10<sup>4</sup></mark>.</p><p>Las potencias de 10 permiten escribir números enormes sin equivocarse. Los científicos dicen que en el cuerpo humano hay unos 3 × 10<sup>13</sup> células: un 3 seguido de trece ceros.</p>`,
      P.tabla("Potencias de base diez: el exponente es el número de ceros", ["Potencia", "Valor", "Ceros"], [["10²", "100", "2"], ["10³", "1 000", "3"], ["10⁴", "10 000", "4"], ["10⁶", "1 000 000", "6"]], AZ)],
    ["Descomponer números con potencias de 10", `<p>Como 100 = 10<sup>2</sup>, 1 000 = 10<sup>3</sup>, etc., podemos descomponer un número usando potencias de base 10. Se llama <b>descomposición polinómica</b>:</p><p style="text-align:center"><b>4 305 = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5</b></p><p>Cada cifra se multiplica por la potencia de 10 que corresponde a su posición:</p><ul><li>Unidades de millar → 10<sup>3</sup></li><li>Centenas → 10<sup>2</sup></li><li>Decenas → 10 (10<sup>1</sup>)</li><li>Unidades → solo la cifra</li></ul><p>Los ceros no se escriben. Ejemplo: 70 060 = 7 × 10<sup>4</sup> + 6 × 10 = 70 000 + 60.</p>`,
      svg("Descomposición polinómica de 4 305: cuatro por diez al cubo más tres por diez al cuadrado más cinco", `${t(130, 36, "4 305", { s: 24, d: true })}${caja(16, 62, 74, 38, "4 × 10³", RO, { s: 14 })}${t(98, 87, "+", { s: 16 })}${caja(106, 62, 74, 38, "3 × 10²", AZ, { s: 14 })}${t(188, 87, "+", { s: 16 })}${caja(196, 62, 48, 38, "5", VE, { s: 14 })}${t(53, 122, "4 000", { s: 12, c: RO })}${t(143, 122, "300", { s: 12, c: AZ })}${t(220, 122, "5", { s: 12, c: VE })}${t(130, 156, "el 0 de las decenas no se escribe", { s: 11, c: "var(--muted)" })}`)],
    ["Potencias en la vida diaria", `<p>Las potencias no son solo un ejercicio del cuaderno. Aparecen en muchos sitios:</p><ul><li><b>Superficies</b>: un campo cuadrado de 100 m de lado mide 100<sup>2</sup> = 10 000 m<sup>2</sup>, es decir, una hectárea.</li><li><b>Volúmenes</b>: un depósito cúbico de 2 m de lado guarda 2<sup>3</sup> = 8 m<sup>3</sup> de agua.</li><li><b>Informática</b>: la memoria de los ordenadores y móviles se mide con potencias de 2: 32, 64, 128, 256 GB…</li><li><b>Crecimiento</b>: las bacterias, los rumores o los mensajes en cadena se multiplican como potencias.</li><li><b>Distancias enormes</b>: la luz recorre unos 3 × 10<sup>5</sup> km cada segundo.</li></ul>`,
      P.filas("Potencias en la vida diaria: superficie, volumen, memoria del móvil y bacterias", [["Superficie", "100² m² = 1 hectárea", VE], ["Volumen", "2³ = 8 m³ de agua", AG], ["Memoria", "64 GB = 2⁶ GB", MO], ["Bacterias", "2, 4, 8, 16, 32…", RO]])],
    ["Juego: ¿potencia o multiplicación?", `<p>Pon a prueba lo aprendido. Tapa la respuesta y decide si son iguales:</p><ul><li>¿3<sup>2</sup> = 3 × 2? <b>No</b>: 3<sup>2</sup> = 9 y 3 × 2 = 6.</li><li>¿2<sup>4</sup> = 4<sup>2</sup>? <b>Sí</b>: las dos dan 16. ¡Es una casualidad muy especial!</li><li>¿10<sup>5</sup> = 50? <b>No</b>: 10<sup>5</sup> = 100 000.</li><li>¿1<sup>8</sup> = 8? <b>No</b>: 1<sup>8</sup> = 1.</li><li>¿5<sup>1</sup> = 5? <b>Sí</b>: exponente 1, la base sin cambiar.</li></ul><p>Reto: ¿qué es mayor, 2<sup>5</sup> o 5<sup>2</sup>? Calcula: 2<sup>5</sup> = 32 y 5<sup>2</sup> = 25. Gana <mark>2<sup>5</sup></mark>. Cambiar base y exponente casi nunca da lo mismo.</p>`,
      svg("Balanza: dos elevado a cinco, treinta y dos, pesa más que cinco al cuadrado, veinticinco", `<path d="M130 40 V 150 M90 158 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M50 72 L 210 52" stroke="var(--ink)" stroke-width="3"/><circle cx="130" cy="62" r="5" fill="var(--ink)"/><path d="M50 72 v 20 M210 52 v 20" stroke="var(--muted)" stroke-width="1.6"/><rect x="18" y="92" width="64" height="34" rx="8" fill="${RO}" fill-opacity=".2" stroke="${RO}" stroke-width="2"/>${t(50, 115, "2⁵ = 32", { s: 13, c: RO })}<rect x="178" y="72" width="64" height="34" rx="8" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2"/>${t(210, 95, "5² = 25", { s: 13, c: AZ })}${t(130, 26, "¿cuál pesa más?", { s: 12, c: "var(--muted)" })}`)],
  ],
  figura: ["Potencias", P.columnas("Resumen: qué es una potencia, cuadrado, cubo y potencias de 10", [["3 × 3 × 3 × 3", "3⁴", ["base 3", "exponente 4"], AZ], ["n × n", "CUADRADO", ["4² = 16", "1, 4, 9, 16…"], VE], ["n × n × n", "CUBO", ["3³ = 27", "1, 8, 27, 64…"], SO], ["1 y ceros", "10ⁿ", ["10³ = 1 000", "10⁶ = 1 millón"], RO]])],
  video: P.V("potV", true),
  ejemplos: [
    ["Escribe como potencia y calcula: 4 × 4 × 4 × 4 × 4.", ["La base es 4 (el factor que se repite).", "El exponente es 5 (se repite 5 veces).", "4 × 4 = 16; × 4 = 64; × 4 = 256; × 4 = 1 024."], "4⁵ = 1 024"],
    ["Escribe con potencias de base 10 el número 6 020 900.", ["6 unidades de millón → 6 × 10⁶.", "2 decenas de millar → 2 × 10⁴.", "9 centenas → 9 × 10².", "Los ceros no se escriben."], "6 × 10⁶ + 2 × 10⁴ + 9 × 10²"],
    ["Un jardín cuadrado mide 12 m de lado. ¿Cuál es su área?", ["El área de un cuadrado es lado × lado = lado².", "12² = 12 × 12 = 144."], "144 m²"],
  ],
  errores: [
    "Multiplicar la base por el exponente: 3⁴ no es 12, sino 81.",
    "Confundir la base con el exponente al escribir: 2⁵ no es lo mismo que 5².",
    "Pensar que 1 elevado a un número grande da un número grande (siempre es 1).",
    "Escribir mal los ceros en las potencias de 10: 10⁵ tiene cinco ceros, no cuatro.",
    "Olvidar en la descomposición que la posición de cada cifra decide su potencia de 10.",
  ],
  ejercicios: [
    ["Escribe como potencia: 7 × 7 × 7 y 9 × 9 × 9 × 9 × 9 × 9.", "7³ y 9⁶."],
    ["Escribe como multiplicación y calcula: 6³ y 2⁶.", "6 × 6 × 6 = 216; 2 × 2 × 2 × 2 × 2 × 2 = 64."],
    ["Escribe cómo se lee: 8², 5³ y 3⁷.", "Ocho al cuadrado, cinco al cubo y tres elevado a siete."],
    ["Escribe los cuadrados de los números del 1 al 10.", "1, 4, 9, 16, 25, 36, 49, 64, 81, 100."],
    ["Calcula: 10⁴, 10⁷ y 10¹.", "10 000; 10 000 000 y 10."],
    ["Escribe como potencia de 10: 100 000 y 1 000 000 000.", "10⁵ y 10⁹."],
    ["Descompón con potencias de 10: 85 407.", "8 × 10⁴ + 5 × 10³ + 4 × 10² + 7."],
    ["¿Qué número es 3 × 10⁵ + 4 × 10³ + 2 × 10?", "304 020."],
    ["¿Qué es mayor, 3⁴ o 4³? Explícalo.", "3⁴ = 81 y 4³ = 64; es mayor 3⁴."],
    ["Una caja cúbica tiene 5 cubitos en cada arista. ¿Cuántos cubitos caben?", "5³ = 125 cubitos."],
  ],
  quiz: [
    ["En 5³, la base es…", ["5", "3", "15"], "La base es el factor que se repite."],
    ["En 5³, el exponente es…", ["3", "5", "125"], "Es el número pequeño de arriba."],
    ["5³ es igual a…", ["125", "15", "53"], "5 × 5 × 5."],
    ["«Ocho al cuadrado» es…", ["64", "16", "82"], "8 × 8."],
    ["2⁴ es igual a…", ["16", "8", "6"], "2 × 2 × 2 × 2."],
    ["10⁵ es igual a…", ["100 000", "50", "10 000"], "Un 1 y cinco ceros."],
    ["1 000 000 como potencia de 10 es…", ["10⁶", "10⁷", "10⁵"], "Seis ceros."],
    ["7¹ es igual a…", ["7", "1", "0"], "Exponente 1: la misma base."],
    ["1⁹ es igual a…", ["1", "9", "10"], "1 × 1 × … = 1."],
    ["3 × 10² + 4 es…", ["304", "340", "3 004"], "300 + 4."],
  ],
  examen: [
    ["El cubo de 4 es…", ["64", "12", "16"], "4 × 4 × 4."],
    ["¿Cuál es un cuadrado perfecto?", ["49", "50", "48"], "7² = 49."],
    ["2 × 2 × 2 × 2 × 2 se escribe…", ["2⁵", "5²", "2 × 5"], "Base 2, exponente 5."],
    ["5 × 10³ + 6 × 10 es…", ["5 060", "5 600", "50 060"], "5 000 + 60."],
  ],
  feynman: ["Qué es una potencia y para qué sirve", "Qué indican la base y el exponente", "Por qué el exponente 2 se llama «al cuadrado»", "Cómo se calcula rápidamente una potencia de 10", "Cómo se descompone un número con potencias de 10"],
  mapa: ["POTENCIAS", [["Base y exponente", "3⁴ = 3 × 3 × 3 × 3", AZ], ["Cuadrado y cubo", "n² · n³", VE], ["Potencias de 10", "1 y n ceros", RO], ["Descomposición", "4 × 10³ + 3 × 10² …", SO]]],
  tarjetas: [
    ["Potencia", "Multiplicación de factores iguales."],
    ["Base", "El factor que se repite."],
    ["Exponente", "Cuántas veces se repite la base."],
    ["Al cuadrado", "Exponente 2: 6² = 36."],
    ["Al cubo", "Exponente 3: 2³ = 8."],
    ["Cuadrados perfectos", "1, 4, 9, 16, 25, 36, 49, 64, 81, 100."],
    ["10⁶", "1 000 000: un 1 y seis ceros."],
    ["a¹ y 1ⁿ", "a¹ = a; 1ⁿ = 1."],
  ],
  familias: ["Contad baldosas cuadradas del suelo de una habitación y expresadlo como potencia.", "Jugad a doblar: empezad con 1 céntimo y duplicad cada día; ¿cuánto habría al día 10?", "Buscad en el móvil u ordenador capacidades de memoria (32, 64, 128…) y comprobad que son potencias de 2.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico: potencias de exponente natural como producto de factores iguales; cuadrados y cubos; potencias de base 10 y descomposición polinómica de números naturales",
  ideas: ["Construir cuadrados y cubos con cubitos encajables para ver 3² y 3³.", "Leyenda del tablero de ajedrez con calculadora para ver crecer las potencias de 2.", "Tarjetas de dominó con potencias y sus valores."],
});
