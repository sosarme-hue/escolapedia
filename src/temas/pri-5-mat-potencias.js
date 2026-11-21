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

// ---------- Nivel libro (5º de Primaria) ----------
require("./_priL").libro(module.exports, {
  minutos: 75,
  objetivos: ["Comparar potencias y calcularlas dentro de operaciones combinadas", "Reconocer el crecimiento rápido de las potencias de base 2", "Relacionar el cuadrado de un número con su raíz cuadrada"],
  lectura: { titulo: "El ajedrez y los granos de trigo", html: `<p>Cuenta una vieja leyenda de la India que un rey quedó tan encantado con el juego del ajedrez que quiso premiar a su inventor. «Pide lo que quieras», le dijo. El sabio contestó: «Solo quiero trigo: un grano por la primera casilla del tablero, dos por la segunda, cuatro por la tercera, y así, doblando cada vez, hasta la casilla 64».</p><p>El rey se rio: ¡qué premio tan pequeño! Mandó a sus sirvientes que contaran los granos. Pero al llegar a la casilla 20 ya necesitaban más de medio millón de granos, y en la casilla 30, más de quinientos millones. En la última casilla harían falta más granos de trigo que los que se han cosechado en toda la historia de la humanidad.</p><p>El sabio sabía algo que el rey ignoraba: cuando multiplicamos un número por sí mismo muchas veces, el resultado crece a una velocidad increíble. Esa multiplicación repetida tiene nombre: es una <b>potencia</b>. En este tema aprenderás a escribirlas, a calcularlas y a usarlas.</p>` },
  tras: {
    "El cubo de un número": [
      ["Las potencias de base 2: doblar y doblar", `<p>Las potencias de <b>base 2</b> aparecen siempre que algo se <b>duplica</b> una y otra vez:</p><p style="text-align:center">2¹ = 2 · 2² = 4 · 2³ = 8 · 2⁴ = 16 · 2⁵ = 32 · 2⁶ = 64 · 2⁷ = 128 · 2⁸ = 256 · 2⁹ = 512 · 2¹⁰ = 1 024</p><p>Fíjate: cada resultado es el <b>doble</b> del anterior. Al principio los números son pequeños, pero enseguida crecen muchísimo. Es lo que pasaba con los granos del ajedrez.</p><p>Ejemplos de la vida real:</p><ul><li>Una bacteria se divide en dos cada 20 minutos. Después de 3 horas (9 divisiones) habrá 2⁹ = <b>512</b> bacterias.</li><li>Si doblas una hoja de papel por la mitad 5 veces, tendrás 2⁵ = <b>32</b> capas.</li><li>Los ordenadores guardan la información en <b>bits</b> que solo pueden valer 0 o 1. Con 8 bits se pueden formar 2⁸ = 256 combinaciones distintas.</li></ul>`,
        P.svg("Las potencias de base dos crecen muy rápido: barras que se duplican, dos, cuatro, ocho, dieciséis y treinta y dos", `${[2, 4, 8, 16, 32].map((v, i) => `<rect x="${28 + i * 44}" y="${150 - v * 3.8}" width="30" height="${v * 3.8}" rx="4" fill="${[AZ, VE, NA, MO, RO][i]}" fill-opacity=".55" stroke="${[AZ, VE, NA, MO, RO][i]}" stroke-width="1.5"/>${t(43 + i * 44, 166, `2${["¹", "²", "³", "⁴", "⁵"][i]}`, { s: 12 })}${t(43 + i * 44, 144 - v * 3.8, v, { s: 11, d: true })}`).join("")}<path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/>`)],
      ["Comparar potencias", `<p>Para saber qué potencia es mayor hay tres casos:</p><ul><li><b>Misma base</b>: es mayor la de <b>mayor exponente</b>. 3⁵ &gt; 3⁴, porque multiplicamos el 3 más veces.</li><li><b>Mismo exponente</b>: es mayor la de <b>mayor base</b>. 7² &gt; 5², porque 49 &gt; 25.</li><li><b>Base y exponente distintos</b>: hay que <b>calcularlas</b>. ¿2⁵ o 5²? 2⁵ = 32 y 5² = 25, así que 2⁵ &gt; 5².</li></ul><p>¡Cuidado con una trampa muy común! Cambiar la base por el exponente <b>sí cambia</b> el resultado: 2³ = 8, pero 3² = 9. Y 2⁴ = 16 y 4² = 16 son de las pocas parejas que coinciden.</p><p>Dos casos especiales que debes recordar:</p><ul><li>Cualquier número elevado a <b>1</b> es el mismo número: 8¹ = 8.</li><li>El <b>1</b> elevado a cualquier exponente vale 1: 1⁵⁰ = 1, porque 1 × 1 × 1… siempre da 1.</li></ul>`,
        P.svg("Comparar potencias: tres elevado a cinco es mayor que tres elevado a cuatro; siete al cuadrado es mayor que cinco al cuadrado", `${t(130, 24, "misma base", { s: 12, c: VE })}${caja(18, 32, 100, 40, "3⁵ = 243", VE, { s: 15 })}${t(130, 58, ">", { s: 20, d: true })}${caja(142, 32, 100, 40, "3⁴ = 81", VE, { s: 15 })}${t(130, 98, "mismo exponente", { s: 12, c: MO })}${caja(18, 106, 100, 40, "7² = 49", MO, { s: 15 })}${t(130, 132, ">", { s: 20, d: true })}${caja(142, 106, 100, 40, "5² = 25", MO, { s: 15 })}${t(130, 168, "si no, ¡calcula las dos!", { s: 12, d: true })}`)],
    ],
    "Descomponer números con potencias de 10": [
      ["Las potencias en las operaciones combinadas", `<p>Las potencias también pueden aparecer en una operación combinada. Entonces el orden de cálculo es:</p><ol><li><b>Paréntesis</b>.</li><li><b>Potencias</b>.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 3 × 2³ − 4 = 3 × 8 − 4 = 24 − 4 = <b>20</b>. Primero la potencia (2³ = 8), después la multiplicación y, al final, la resta.</p><p>Otro ejemplo con paréntesis: (5 − 2)² + 10 = 3² + 10 = 9 + 10 = <b>19</b>. Pero si no hubiera paréntesis, 5 − 2² + 10 = 5 − 4 + 10 = 11. ¡Los paréntesis cambian el resultado!</p><p>Un error frecuente es multiplicar la base por el exponente: 2³ <b>no</b> es 2 × 3 = 6, sino 2 × 2 × 2 = 8.</p>`,
        P.svg("Orden de las operaciones: paréntesis, potencias, multiplicaciones y divisiones, sumas y restas", `${[["( )", "paréntesis", AZ], ["aⁿ", "potencias", RO], ["× :", "multiplicar y dividir", MO], ["+ −", "sumar y restar", VE]].map(([s, n, c], i) => `${caja(20, 14 + i * 40, 54, 32, s, c, { s: 15 })}${t(88, 35 + i * 40, n, { s: 12, a: "start", c })}`).join("")}${t(214, 100, "1→4", { s: 18, d: true, c: "var(--muted)" })}`)],
    ],
    "Potencias en la vida diaria": [
      ["Un adelanto: la raíz cuadrada", `<p>Si sabemos que 6² = 36, podemos hacernos la pregunta al revés: <b>¿qué número multiplicado por sí mismo da 36?</b> La respuesta es 6, y decimos que 6 es la <b>raíz cuadrada</b> de 36. Se escribe así: √36 = 6.</p><p>La raíz cuadrada es la operación <b>inversa</b> del cuadrado, igual que la resta es la inversa de la suma. Con la tabla de los cuadrados perfectos la puedes calcular de memoria:</p><p style="text-align:center">√1 = 1 · √4 = 2 · √9 = 3 · √16 = 4 · √25 = 5 · √49 = 7 · √64 = 8 · √81 = 9 · √100 = 10</p><p>Tiene una utilidad muy práctica: si un huerto cuadrado tiene un área de <b>49 m²</b>, cada lado mide √49 = <b>7 m</b>. En 6º de Primaria estudiarás las raíces de números que no son cuadrados perfectos, como √50.</p>`,
        P.svg("Raíz cuadrada: un cuadrado de cuarenta y nueve cuadraditos tiene siete de lado", `${rejilla(30, 22, 7, 7, 18)}<rect x="30" y="22" width="126" height="126" fill="${VE}" fill-opacity=".2" stroke="${VE}" stroke-width="2.5"/>${t(93, 166, "lado 7", { s: 12, c: VE })}${t(210, 74, "7² = 49", { s: 16, d: true, c: AZ })}${t(210, 110, "√49 = 7", { s: 16, d: true, c: RO })}`)],
    ],
  },
  final: [
    ["Una historia de potencias: del gúgol a los ordenadores", `<p>Las potencias se usan desde hace miles de años. Los matemáticos de la antigua Grecia, como <b>Pitágoras</b>, llamaban «números cuadrados» a 1, 4, 9, 16… porque se pueden colocar con piedrecitas formando un cuadrado. Y <b>Arquímedes</b>, hace más de 2 200 años, intentó calcular cuántos granos de arena cabrían en todo el universo; para escribir ese número inventó un sistema parecido a nuestras potencias de 10.</p><p>En 1938, un niño estadounidense de nueve años, Milton Sirotta, puso nombre a un número enorme que le propuso su tío matemático: un 1 seguido de cien ceros, es decir, <b>10¹⁰⁰</b>. Lo llamó <b>gúgol</b> («googol» en inglés). Años después, los creadores de un famoso buscador de internet se inspiraron en esa palabra para bautizar su empresa.</p><p>Hoy las potencias están dentro de todos los aparatos electrónicos: la memoria de los móviles y ordenadores se mide con potencias de 2. Por eso las tarjetas de memoria tienen tamaños como 32, 64, 128 o 256 gigas. ¡Mira la próxima vez la caja de un móvil o de un pendrive y descubre la potencia de 2 escondida!</p>`,
      P.svg("Números cuadrados de Pitágoras con piedrecitas: uno, cuatro, nueve y dieciséis", `${[1, 2, 3, 4].map((n, k) => { const x0 = [18, 46, 92, 156][k]; return [...Array(n * n)].map((_, i) => `<circle cx="${x0 + (i % n) * 18}" cy="${40 + Math.floor(i / n) * 18}" r="6.5" fill="${[AZ, VE, NA, RO][k]}" fill-opacity=".7"/>`).join("") + t(x0 + (n - 1) * 9, 128, String(n * n), { s: 14, d: true, c: [AZ, VE, NA, RO][k] }); }).join("")}${t(130, 160, "gúgol = 10¹⁰⁰", { s: 14, d: true, c: MO })}`)],
  ],
  ejemplos: [
    ["Calcula: 4 + 3² × 2.", ["Primero la potencia: 3² = 9.", "Después la multiplicación: 9 × 2 = 18.", "Por último la suma: 4 + 18 = 22."], "22"],
    ["Ordena de menor a mayor: 2⁴, 3³ y 5².", ["2⁴ = 16.", "3³ = 27.", "5² = 25."], "2⁴ < 5² < 3³"],
  ],
  errores: ["Pensar que 1 elevado a un número grande es un número grande: 1¹⁰ = 1."],
  nivelesBase: "bbbbbmmmmm",
  ejercicios: [
    ["b", "Escribe las potencias de base 2 desde 2¹ hasta 2⁸.", "2, 4, 8, 16, 32, 64, 128 y 256. Cada una es el doble de la anterior."],
    ["b", "Calcula: 1⁹, 9¹ y 0³.", "1⁹ = 1; 9¹ = 9; 0³ = 0 × 0 × 0 = 0."],
    ["b", "Calcula la raíz cuadrada: √16, √64 y √100.", "4, 8 y 10, porque 4² = 16, 8² = 64 y 10² = 100."],
    ["b", "¿Qué es mayor, 6³ o 6⁴? Explícalo sin calcular.", "6⁴, porque tienen la misma base y 6⁴ tiene mayor exponente: el 6 se multiplica una vez más."],
    ["m", "Calcula: 2³ + 3² − 4.", "8 + 9 − 4 = 13."],
    ["m", "Calcula: (2 + 3)² y 2² + 3². ¿Dan lo mismo?", "(2 + 3)² = 5² = 25. 2² + 3² = 4 + 9 = 13. No dan lo mismo."],
    ["m", "Ordena de mayor a menor: 4³, 3⁴, 2⁶.", "4³ = 64, 3⁴ = 81, 2⁶ = 64. Orden: 3⁴ > 4³ = 2⁶."],
    ["m", "Una bacteria se divide en dos cada hora. Empezamos con una. ¿Cuántas habrá a las 6 horas? Escríbelo como potencia.", "2⁶ = 64 bacterias."],
    ["m", "Un mosaico cuadrado tiene 81 baldosas. ¿Cuántas baldosas hay en cada lado?", "√81 = 9 baldosas."],
    ["a", "Calcula: 5 × 10³ − 2 × 10².", "5 × 1 000 − 2 × 100 = 5 000 − 200 = 4 800."],
    ["a", "Encuentra dos potencias distintas que den 64.", "Por ejemplo, 8² = 64, 4³ = 64 y 2⁶ = 64."],
    ["a", "Cada persona envía un mensaje a 3 amigos, y cada uno lo reenvía a otros 3. En el cuarto envío, ¿cuántas personas lo reciben?", "3⁴ = 81 personas en el cuarto envío."],
    ["a", "Un cubo grande está hecho con 125 cubitos. ¿Cuántos cubitos tiene en cada arista?", "Buscamos un número que elevado al cubo dé 125: 5³ = 125. Cada arista tiene 5 cubitos."],
    ["a", "¿Es cierto que 2⁵ = 5²? Justifícalo calculando.", "No: 2⁵ = 32 y 5² = 25."],
    ["a", "Halla el valor de la casilla: □² = 144.", "12, porque 12 × 12 = 144."],
    ["a", "Inventa un problema de la vida real que se resuelva con 10³.", "Ejemplo: «Un almacén tiene 10 estanterías, cada una con 10 cajas, y cada caja con 10 libros. ¿Cuántos libros hay?». 10³ = 1 000 libros."],
  ],
  quiz: [
    ["2⁸ es igual a…", ["256", "16", "64"], "2 multiplicado por sí mismo 8 veces."],
    ["¿Qué potencia es mayor: 3⁵ o 3⁴?", ["3⁵", "3⁴", "Son iguales"], "Misma base: gana la de mayor exponente."],
    ["En 2 + 3² se calcula primero…", ["La potencia", "La suma", "Da igual"], "Las potencias van antes que las sumas."],
    ["√36 es…", ["6", "18", "72"], "Porque 6 × 6 = 36."],
    ["1¹⁰⁰ vale…", ["1", "100", "101"], "1 multiplicado por 1 siempre da 1."],
  ],
  examen: [
    ["El resultado de 2³ es…", ["8", "6", "9"], "2 × 2 × 2 = 8; no se multiplica la base por el exponente."],
    ["(4 − 1)² vale…", ["9", "15", "3"], "Primero el paréntesis: 3² = 9."],
    ["La raíz cuadrada es la operación inversa de…", ["Elevar al cuadrado", "Sumar", "Dividir entre 2"], "Si 7² = 49, √49 = 7."],
    ["Si doblas un papel 4 veces, ¿cuántas capas tienes?", ["16", "8", "4"], "2⁴ = 16."],
  ],
  tarjetas: [
    ["Potencias de 2", "2, 4, 8, 16, 32, 64, 128, 256, 512, 1 024."],
    ["Comparar potencias", "Misma base: mayor exponente. Mismo exponente: mayor base."],
    ["Orden de operaciones", "Paréntesis, potencias, × y :, + y −."],
    ["Raíz cuadrada", "√49 = 7 porque 7² = 49."],
  ],
  glosario: [
    ["Potencia", "Multiplicación de un número por sí mismo varias veces."],
    ["Base", "Número que se multiplica en una potencia."],
    ["Exponente", "Número pequeño que indica cuántas veces se multiplica la base."],
    ["Cuadrado", "Potencia de exponente 2: 5² = 25."],
    ["Cubo", "Potencia de exponente 3: 2³ = 8."],
    ["Cuadrado perfecto", "Número que es el cuadrado de otro: 1, 4, 9, 16, 25…"],
    ["Potencia de base 10", "Un 1 seguido de tantos ceros como indica el exponente."],
    ["Raíz cuadrada", "Número que multiplicado por sí mismo da el número dado."],
    ["Operación inversa", "Operación que deshace otra: la raíz deshace el cuadrado."],
    ["Duplicar", "Multiplicar por 2, hacer el doble."],
    ["Bit", "Unidad mínima de información de un ordenador; vale 0 o 1."],
  ],
  situacion: {
    titulo: "La cadena de mensajes",
    reto: "¿Cuánto tarda un rumor en llegar a todo el colegio si cada persona se lo cuenta a otras dos? Lo investigamos con potencias.",
    pasos: ["Simulad en clase la cadena: uno cuenta un mensaje inventado a dos compañeros, cada uno a otros dos, y así.", "Anotad en una tabla cuántas personas lo reciben en cada ronda y escribidlo como potencia de 2.", "Averiguad cuántos alumnos tiene el colegio y calculad en qué ronda lo sabría todo el mundo.", "Debatid qué pasa con los bulos en internet, donde cada persona reenvía a muchos más contactos."],
    producto: "Una tabla y un gráfico de barras con el crecimiento del mensaje y una conclusión escrita sobre los bulos.",
    evaluacion: ["Escribe y calcula potencias correctamente.", "Relaciona el duplicado con las potencias de base 2.", "Interpreta el crecimiento rápido en una situación real.", "Argumenta una conclusión crítica sobre la difusión de información."],
  },
});
