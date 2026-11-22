// Matemáticas 4º de Primaria: números de hasta seis cifras. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Tabla de valor posicional: cifras de un número de 6 cifras en columnas CM, DM, UM, C, D, U.
const ORDENES = [["CM", RO], ["DM", SO], ["UM", MO], ["C", AZ], ["D", VE], ["U", NA]];
const casillas = (num, y = 70) => ORDENES.map(([o, c], i) => {
  const x = 20 + i * 38, d = String(num).padStart(6, " ")[i];
  return `<rect x="${x}" y="${y - 30}" width="34" height="26" rx="6" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/>${t(x + 17, y - 12, o, { s: 11, c })}<rect x="${x}" y="${y}" width="34" height="40" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${t(x + 17, y + 28, d.trim(), { s: 20, d: true })}`;
}).join("");

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Números de hasta seis cifras",
  minutos: 50,
  objetivos: ["Leer y escribir números de hasta seis cifras", "Conocer el valor de cada cifra según su posición (CM, DM, UM, C, D, U)", "Descomponer números y compararlos y ordenarlos", "Redondear números a la decena, la centena y el millar"],
  claves: ["cifra", "valor posicional", "unidad de millar", "decena de millar", "centena de millar", "descomposición", "mayor que", "menor que", "redondear", "números ordinales"],
  pregunta: ["En un estadio de fútbol caben 99 354 personas. ¿Cómo se lee ese número y qué vale el primer 9?", "Se lee <b>noventa y nueve mil trescientos cincuenta y cuatro</b>. El primer 9 está en el lugar de las <b>decenas de millar</b>, así que vale <mark>90 000</mark>, mientras que el segundo 9 vale 9 000. ¡La misma cifra vale distinto según el sitio que ocupa!"],
  bloques: [
    ["Las cifras y los órdenes de unidades", `<p>Para escribir cualquier número usamos solo diez <b>cifras</b>: 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9. El truco está en el <mark>lugar</mark> que ocupa cada una.</p><p>Cada lugar es un <b>orden de unidades</b>, y cada orden vale diez veces más que el de su derecha:</p><ul><li>10 unidades (U) = 1 decena (D)</li><li>10 decenas = 1 centena (C)</li><li>10 centenas = 1 unidad de millar (UM)</li><li>10 UM = 1 decena de millar (DM)</li><li>10 DM = 1 centena de millar (CM)</li></ul><p>Con seis órdenes podemos escribir números hasta el <b>999 999</b>.</p>`,
      svg("Escalera de los órdenes de unidades: cada escalón vale diez veces más que el anterior", `${[["U", "1", NA], ["D", "10", VE], ["C", "100", AZ], ["UM", "1 000", MO], ["DM", "10 000", SO], ["CM", "100 000", RO]].map(([o, v, c], i) => `<rect x="${14 + i * 39}" y="${150 - (i + 1) * 21}" width="36" height="${(i + 1) * 21}" rx="4" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${t(32 + i * 39, 144, o, { s: 12, c })}${t(32 + i * 39, 142 - (i + 1) * 21, v, { s: 9.5 })}`).join("")}${t(130, 168, "× 10 en cada escalón", { s: 12, c: "var(--muted)" })}`)],
    ["La tabla de valor posicional", `<p>Para no perderse con números grandes, ayuda mucho colocar las cifras en una <b>tabla de valor posicional</b>. De derecha a izquierda: unidades, decenas, centenas, unidades de millar, decenas de millar y centenas de millar.</p><p>Fíjate en el número <b>472 815</b>:</p><ul><li>El 4 está en las CM: vale <mark>400 000</mark>.</li><li>El 7 está en las DM: vale 70 000.</li><li>El 2 está en las UM: vale 2 000.</li><li>El 8 vale 800, el 1 vale 10 y el 5 vale 5.</li></ul><p>Las tres cifras de la izquierda forman el grupo de los <b>miles</b>, y las tres de la derecha, el de las <b>unidades</b>.</p>`,
      svg("Tabla de valor posicional con el número 472 815", `${casillas(472815, 56)}<path d="M128 30 V 104" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>${t(72, 132, "miles", { s: 12, c: "var(--muted)" })}${t(186, 132, "unidades", { s: 12, c: "var(--muted)" })}${t(130, 160, "472 815", { s: 18, d: true, c: AZ })}`),
      P.V("numB")],
    ["Leer y escribir números grandes", `<p>Para <b>leer</b> un número de seis cifras, lo partimos en dos grupos de tres empezando por la derecha. Leemos el primer grupo, decimos <mark>«mil»</mark> y después leemos el segundo grupo.</p><p style="text-align:center"><b>358 204</b> → trescientos cincuenta y ocho <b>mil</b> doscientos cuatro</p><p>Por eso, al escribir números grandes, dejamos un <b>pequeño espacio</b> entre los miles y las unidades: 358 204. Con cuatro cifras no hace falta: 4500.</p><p>Cuidado con los <b>ceros</b>: no se leen, pero sí ocupan su lugar. En 205 030 se lee «doscientos cinco mil treinta». Si olvidas un cero al escribirlo, ¡el número cambia por completo!</p>`,
      P.frase("Lectura del número 358 204 en dos grupos separados por la palabra mil", [["358", "miles", RO], ["mil", "", "var(--muted)"], ["204", "unidades", AZ]], "trescientos cincuenta y ocho mil doscientos cuatro")],
    ["Descomponer un número", `<p><b>Descomponer</b> un número es separarlo en el valor de cada una de sus cifras. Se puede hacer de dos maneras.</p><p>En <b>órdenes de unidades</b>:</p><p style="text-align:center">263 507 = 2 CM + 6 DM + 3 UM + 5 C + 0 D + 7 U</p><p>Como una <b>suma</b> de los valores:</p><p style="text-align:center">263 507 = 200 000 + 60 000 + 3 000 + 500 + 7</p><p>También podemos hacer lo contrario, <mark>componer</mark>: si nos dicen 8 CM + 4 UM + 9 D, el número es <b>804 090</b>. Los órdenes que faltan se rellenan con ceros.</p>`,
      P.filas("Descomposición de 263 507 en sumandos", [["2 CM", "200 000", RO], ["6 DM", "60 000", SO], ["3 UM", "3 000", MO], ["5 C · 0 D · 7 U", "500 + 0 + 7", AZ]], "263 507 =")],
    ["Comparar números", `<p>Para saber qué número es mayor usamos los signos <b>&gt;</b> (mayor que) y <b>&lt;</b> (menor que). La boca abierta del signo mira siempre al número más grande.</p><p>Pasos para comparar:</p><ol><li>Cuenta las cifras. El que tenga <b>más cifras</b> es mayor: 100 000 &gt; 99 999.</li><li>Si tienen las mismas cifras, compara <mark>de izquierda a derecha</mark>, orden por orden, hasta encontrar una cifra distinta.</li></ol><p>Ejemplo: 456 782 y 456 290. Las CM, DM y UM son iguales (4, 5, 6). En las centenas, 7 &gt; 2. Por tanto, <b>456 782 &gt; 456 290</b>.</p>`,
      svg("Comparación de 456 782 y 456 290: las tres primeras cifras coinciden y en las centenas siete es mayor que dos", `${["456782", "456290"].map((n, k) => [...n].map((d, i) => `<rect x="${44 + i * 30}" y="${36 + k * 54}" width="26" height="34" rx="5" fill="${i === 3 ? RO : i < 3 ? VE : "var(--card)"}" fill-opacity="${i <= 3 ? 0.25 : 1}" stroke="${i === 3 ? RO : "var(--line)"}" stroke-width="2"/>${t(57 + i * 30, 60 + k * 54, d, { s: 17, d: true })}`).join("")).join("")}${t(130, 84, "&gt;", { s: 20, c: RO })}${t(130, 160, "iguales · iguales · iguales · 7 &gt; 2", { s: 11, c: "var(--muted)" })}`)],
    ["Ordenar números y la recta numérica", `<p>Para <b>ordenar</b> varios números, los comparamos de dos en dos. Podemos ordenarlos de <b>menor a mayor</b> (con el signo &lt;) o de <b>mayor a menor</b> (con &gt;).</p><p>Ejemplo: 125 300, 98 450, 125 030 → <mark>98 450 &lt; 125 030 &lt; 125 300</mark>.</p><p>La <b>recta numérica</b> también ayuda: los números crecen hacia la derecha. Entre 120 000 y 130 000 podemos marcar los millares: 121 000, 122 000, 123 000… Un número que está más a la derecha es siempre mayor que uno que está a su izquierda.</p>`,
      svg("Recta numérica de 120 000 a 130 000 con los millares marcados", `<path d="M14 90 H 246" stroke="var(--muted)" stroke-width="2.5"/>${[...Array(11)].map((_, i) => `<path d="M${20 + i * 22} ${i % 5 ? 84 : 78} V ${i % 5 ? 96 : 102}" stroke="var(--muted)" stroke-width="2"/>`).join("")}${t(20, 122, "120 000", { s: 10 })}${t(130, 122, "125 000", { s: 10 })}${t(240, 122, "130 000", { s: 10 })}<circle cx="86" cy="90" r="6" fill="${RO}"/>${t(86, 66, "123 000", { s: 10, c: RO })}<circle cx="196" cy="90" r="6" fill="${AZ}"/>${t(196, 66, "128 000", { s: 10, c: AZ })}${t(130, 154, "más a la derecha → mayor", { s: 12, c: "var(--muted)" })}`)],
    ["Redondear números", `<p><b>Redondear</b> es cambiar un número por otro <b>parecido pero más fácil</b>, acabado en ceros. Lo hacemos cuando no hace falta la cifra exacta: «en la ciudad viven unos 47 000 habitantes».</p><p>Para redondear a los <b>millares</b>:</p><ol><li>Mira la cifra de las <b>centenas</b>, la que está justo a la derecha.</li><li>Si es <mark>0, 1, 2, 3 o 4</mark>, el millar se queda igual.</li><li>Si es <mark>5, 6, 7, 8 o 9</mark>, el millar sube uno.</li><li>Las cifras de la derecha se cambian por ceros.</li></ol><p>46 381 → <b>46 000</b> (porque 3 &lt; 5). 46 729 → <b>47 000</b> (porque 7 ≥ 5).</p>`,
      svg("Redondeo de 46 729 al millar: está más cerca de 47 000 que de 46 000", `<path d="M30 96 H 230" stroke="var(--muted)" stroke-width="2.5"/>${t(30, 124, "46 000", { s: 12 })}${t(130, 124, "46 500", { s: 10, c: "var(--muted)" })}${t(230, 124, "47 000", { s: 12, c: VE })}<path d="M30 88 V 104 M130 90 V 102 M230 88 V 104" stroke="var(--muted)" stroke-width="2"/><circle cx="176" cy="96" r="7" fill="${RO}"/>${t(176, 72, "46 729", { s: 12, c: RO })}${P.flecha(184, 84, 222, 84, VE)}${t(130, 158, "7 centenas ≥ 5 → sube a 47 000", { s: 12, c: VE })}`),
      P.V("numB2")],
    ["Los números ordinales", `<p>Los números que hemos visto sirven para <b>contar</b> (son los cardinales). Pero hay otros que sirven para decir el <b>orden</b> o la posición: los <mark>números ordinales</mark>.</p><p>Los primeros son: 1.º primero, 2.º segundo, 3.º tercero, 4.º cuarto, 5.º quinto, 6.º sexto, 7.º séptimo, 8.º octavo, 9.º noveno, 10.º décimo. Siguen 11.º undécimo, 12.º duodécimo, 20.º vigésimo y 30.º trigésimo.</p><p>Se escriben con un número y una letrita voladita: <b>4.º</b> o <b>4.ª</b>, según sea masculino o femenino. Tú estudias en <b>4.º</b> de Primaria, y quizá vivas en un <b>3.º</b> piso.</p>`,
      P.tabla("Números ordinales del primero al décimo", ["número", "ordinal"], [["1.º · 2.º", "primero, segundo"], ["3.º · 4.º", "tercero, cuarto"], ["5.º · 6.º", "quinto, sexto"], ["7.º · 8.º", "séptimo, octavo"], ["9.º · 10.º", "noveno, décimo"]])],
    ["Números grandes en la vida diaria", `<p>Los números de seis cifras aparecen en muchos sitios:</p><ul><li>Los <b>habitantes</b> de una ciudad mediana: unas 150 000 personas.</li><li>Los <b>kilómetros</b> que ha recorrido un coche: 125 400 km.</li><li>Los <b>espectadores</b> que han visto una película en el cine o el <b>precio</b> de una casa.</li></ul><p>Para practicar, busca números grandes en el periódico, en un mapa o en internet y léelos en voz alta. Pregúntate: <mark>¿cuántas cifras tiene?, ¿qué vale la primera?</mark> Así te acostumbrarás a ellos y no te asustarán nunca más.</p>`,
      P.filas("Números de seis cifras en la vida diaria", [["Ciudad", "150 000 habitantes", AZ], ["Coche", "125 400 km recorridos", VE], ["Estadio", "99 354 asientos", RO]])],
  ],
  figura: ["Números de hasta seis cifras", P.columnas("Resumen: valor posicional, lectura, comparación y redondeo", [["CM DM UM · C D U", "VALOR", ["cada lugar", "vale × 10"], AZ], ["dos grupos de 3", "LEER", ["… mil …", "ceros sin leer"], VE], ["de izquierda", "COMPARAR", ["a derecha", "&gt; y &lt;"], RO], ["mira la cifra de al lado", "REDONDEAR", ["0-4 se queda", "5-9 sube"], SO]])],
  video: P.V("numV", true),
  ejemplos: [
    ["Escribe con cifras: «setecientos cuatro mil sesenta».", ["Antes de «mil» está el grupo de los miles: setecientos cuatro → 704.", "Después de «mil»: sesenta → 060 (hay que completar tres cifras).", "Une los dos grupos."], "704 060"],
    ["Ordena de mayor a menor: 310 205, 301 520 y 310 250.", ["Todos tienen 6 cifras y empiezan por 3.", "En las DM: 1, 0 y 1 → el menor es 301 520.", "Entre 310 205 y 310 250, en las decenas 5 &gt; 0."], "310 250 &gt; 310 205 &gt; 301 520"],
    ["Redondea 238 649 a la centena y al millar.", ["A la centena: miro las decenas (4 &lt; 5) → 238 600.", "Al millar: miro las centenas (6 ≥ 5) → 239 000."], "238 600 y 239 000"],
  ],
  errores: [
    "Olvidar los ceros al escribir un número dictado: «doscientos mil cinco» es 200 005, no 2005.",
    "Leer el número cifra a cifra en lugar de separarlo en dos grupos de tres.",
    "Comparar mirando la última cifra en lugar de empezar por la izquierda.",
    "Al redondear, mirar la cifra equivocada: para redondear al millar se mira la de las centenas.",
    "Poner el signo &gt; o &lt; al revés: la parte abierta mira siempre al número mayor.",
  ],
  ejercicios: [
    ["Escribe cómo se lee 506 318.", "Quinientos seis mil trescientos dieciocho."],
    ["Escribe con cifras: «noventa mil novecientos nueve».", "90 909."],
    ["¿Qué valor tiene la cifra 8 en 382 104?", "8 DM = 80 000."],
    ["Descompón 741 290 en forma de suma.", "700 000 + 40 000 + 1 000 + 200 + 90."],
    ["Compón el número: 5 CM + 3 UM + 2 D + 6 U.", "503 026."],
    ["Escribe &gt; o &lt;: 89 999 __ 100 000.", "89 999 &lt; 100 000 (el segundo tiene más cifras)."],
    ["Ordena de menor a mayor: 45 600, 405 600, 45 060.", "45 060 &lt; 45 600 &lt; 405 600."],
    ["Redondea 67 482 al millar.", "67 000 (la cifra de las centenas es 4)."],
    ["¿Cuál es el número anterior y el posterior a 300 000?", "Anterior: 299 999. Posterior: 300 001."],
    ["Un pueblo tiene 12 870 habitantes y otro 12 807. ¿Cuál tiene más? Explica cómo lo sabes.", "El primero: son iguales hasta las centenas (8), y en las decenas 7 &gt; 0."],
  ],
  quiz: [
    ["¿Cuántas unidades tiene una decena de millar?", ["10 000", "1 000", "100 000"], "10 UM = 10 000."],
    ["En 615 284, ¿qué vale el 6?", ["600 000", "60 000", "6"], "Está en las centenas de millar."],
    ["¿Cómo se escribe «treinta mil tres»?", ["30 003", "3003", "300 003"], "30 mil y 3 unidades."],
    ["¿Qué número es mayor?", ["210 000", "201 999", "99 999"], "En las DM, 1 &gt; 0."],
    ["El mayor número de seis cifras es…", ["999 999", "100 000", "900 000"], "Todas las cifras son 9."],
    ["Redondea 15 700 al millar.", ["16 000", "15 000", "15 800"], "7 ≥ 5, sube el millar."],
    ["400 000 + 5 000 + 30 =", ["405 030", "450 030", "405 300"], "4 CM, 5 UM y 3 D."],
    ["¿Qué ordinal corresponde al 7?", ["séptimo", "sexto", "octavo"], "7.º = séptimo."],
    ["El número posterior a 99 999 es…", ["100 000", "99 998", "999 999"], "99 999 + 1."],
    ["¿Qué signo va en 52 340 __ 52 304?", ["&gt;", "&lt;", "="], "En las decenas, 4 &gt; 0."],
  ],
  examen: [
    ["¿Cuántas cifras tiene el número «ciento un mil»?", ["6", "4", "5"], "101 000."],
    ["10 centenas forman…", ["1 unidad de millar", "1 decena de millar", "100 unidades"], "10 × 100 = 1 000."],
    ["Redondea 342 499 a la centena.", ["342 500", "342 400", "343 000"], "La decena es 9: sube la centena."],
    ["¿Qué número está entre 70 000 y 80 000?", ["75 500", "7 550", "705 500"], "Tiene 7 DM."],
  ],
  feynman: ["Por qué el mismo 5 vale distinto en 500 y en 50 000", "Cómo se lee un número de seis cifras", "Cómo se comparan dos números con las mismas cifras", "Qué hay que mirar para redondear al millar", "Para qué sirven los números ordinales"],
  mapa: ["NÚMEROS DE SEIS CIFRAS", [["Valor posicional", "CM · DM · UM · C · D · U", AZ], ["Leer y escribir", "grupos de tres + «mil»", VE], ["Comparar y ordenar", "de izquierda a derecha", RO], ["Redondear", "0-4 igual · 5-9 sube", SO]]],
  tarjetas: [
    ["Cifra", "Cada uno de los símbolos del 0 al 9."],
    ["Valor posicional", "Lo que vale una cifra según el lugar que ocupa."],
    ["1 unidad de millar", "1 000 unidades."],
    ["1 decena de millar", "10 000 unidades."],
    ["1 centena de millar", "100 000 unidades."],
    ["Descomponer", "Separar un número en el valor de sus cifras."],
    ["Redondear al millar", "Mirar las centenas: de 0 a 4 se queda, de 5 a 9 sube."],
    ["Número ordinal", "Indica orden: primero, segundo, tercero…"],
  ],
  familias: ["Leed juntos números grandes del periódico, de un mapa o de un estadio y decid el valor de la primera cifra.", "Dictaos números con ceros (300 405, 70 060) y comprobad que se escriben bien.", "Jugad a redondear los kilómetros del coche o los precios de las cosas grandes.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico: lectura, escritura, descomposición, comparación, ordenación y redondeo de números naturales de hasta seis cifras; números ordinales",
  ideas: ["Tabla de valor posicional en el suelo con seis aros: los alumnos se colocan con cartulinas de cifras.", "Dictado de números con ceros intermedios y corrección por parejas.", "Buscar en la prensa números grandes, redondearlos y ordenarlos en una recta numérica mural."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer el millón y leer números de siete cifras", "Leer y escribir números romanos", "Estimar cantidades grandes", "Conocer la historia de nuestros números y usar datos reales de España"],
  lectura: { titulo: "Un millón de tapones", html: `<p>En el colegio de Iker se propusieron un reto solidario: reunir <b>un millón de tapones</b> de plástico para reciclarlos y ayudar a una asociación.</p><p>—¿Un millón? —dijo Iker—. ¡Eso es muchísimo!</p><p>—¿Cuánto es muchísimo? —le preguntó la profesora—. Vamos a calcularlo.</p><p>Pesaron 100 tapones: eran unos 200 gramos. La clase hizo cuentas: mil tapones pesarían 2 kilos; cien mil, 200 kilos… ¡y un millón, unos 2 000 kilos, dos toneladas!</p><p>Durante meses llenaron cajas en todas las clases. Cada viernes, los de 4.º contaban: 125 000… 348 500… 610 200…</p><p>Hicieron un gran cartel con una barra que se iba coloreando. Debajo escribían el número con letras: «seiscientos diez mil doscientos».</p><p>En mayo, el número llegó a <b>999 850</b>.</p><p>—¡Nos faltan solo ciento cincuenta! —gritó Iker.</p><p>Esa tarde, toda la clase recorrió el barrio pidiendo tapones en las tiendas. Al día siguiente, la cifra cambió por fin: <b>1 000 000</b>.</p><p>Iker se quedó mirando el cartel. Era la primera vez que veía un número de siete cifras escrito con su propia letra.</p>` },
  tras: {
    "Leer y escribir números grandes": [
      ["Más allá: el millón", `<p>¿Qué pasa cuando al número más grande de seis cifras, el <b>999 999</b>, le sumamos 1? Todas las cifras se convierten en 0 y aparece una nueva a la izquierda:</p><p style="text-align:center">999 999 + 1 = <b>1 000 000</b></p><p>Es el <mark>millón</mark>: un 1 seguido de seis ceros. Es el primer número de <b>siete cifras</b>, y su orden se llama <b>unidad de millón</b> (U. de millón).</p><ul><li>1 millón = 1 000 unidades de millar = 10 centenas de millar.</li><li>2 500 000 se lee «dos millones quinientos mil».</li><li>4 030 200 se lee «cuatro millones treinta mil doscientos».</li></ul><p>Para leerlos, se separan las cifras en grupos de tres desde la derecha. El primer grupo por la izquierda son los <b>millones</b>, el segundo los <b>miles</b> y el último las <b>unidades</b>.</p><p>¿Cuánto es un millón? Si contaras un número cada segundo, sin parar ni para dormir, tardarías más de <b>11 días</b> en llegar al millón. En España viven unos 49 millones de personas, y en la ciudad de Madrid, más de 3 millones.</p><p>Fíjate: «millón» lleva tilde, pero «millones» no.</p>`,
        L6.filas("Millones", [["1 000 000", "un millón", cAZ], ["2 500 000", "dos millones y medio", cVE], ["4 030 200", "4 millones 30 mil…", cNA], ["11 días", "contar hasta 1 M", cRO]])],
    ],
    "Descomponer un número": [
      ["Los números romanos", `<p>Los antiguos <b>romanos</b> escribían los números con <b>letras</b>. Todavía los vemos en relojes, en los nombres de los reyes y papas (Felipe VI), en los siglos (siglo XXI) y en los capítulos de los libros.</p><p>Usaban siete letras:</p><p style="text-align:center"><b>I</b> = 1 · <b>V</b> = 5 · <b>X</b> = 10 · <b>L</b> = 50 · <b>C</b> = 100 · <b>D</b> = 500 · <b>M</b> = 1 000</p><p>Las reglas principales:</p><ul><li>Una letra a la <b>derecha</b> de otra mayor o igual <b>suma</b>: VI = 5 + 1 = 6; XX = 20; LX = 60.</li><li>I, X o C a la <b>izquierda</b> de una letra mayor <b>resta</b>: IV = 5 − 1 = 4; IX = 9; XL = 40; XC = 90; CD = 400; CM = 900.</li><li>I, X, C y M se pueden repetir hasta <b>tres veces</b> seguidas: III = 3, XXX = 30. V, L y D no se repiten nunca.</li></ul><p>Ejemplos: XIV = 14; XXIX = 29; MMXXVI = 2 026.</p><p>Los romanos <b>no tenían cero</b> y su sistema no era posicional: cada letra vale siempre lo mismo, esté donde esté. Por eso hacer cuentas con ellos era muy difícil. ¡Prueba a multiplicar XLVII por XIII!</p>`,
        L6.filas("Números romanos", [["I · V · X", "1 · 5 · 10", cAZ], ["L · C", "50 · 100", cVE], ["D · M", "500 · 1 000", cNA], ["IV · IX", "4 · 9 (restan)", cRO]]), ["IAtWxaQLboY", "La Eduteca - Los números romanos", "La Eduteca", 1497204]],
    ],
    "Redondear números": [
      ["Estimar cantidades grandes", `<p>A veces no podemos contar uno a uno, porque son demasiados: las personas en una manifestación, los granos de arroz de un paquete o las hojas de un árbol. Entonces <b>estimamos</b>: calculamos una cantidad aproximada de forma inteligente.</p><p>El método más usado es <mark>contar una parte y multiplicar</mark>:</p><ol><li>Divide el total en partes iguales (zonas, filas, montones).</li><li>Cuenta con cuidado <b>una</b> de esas partes.</li><li>Multiplica por el número de partes.</li></ol><p><b>Ejemplo 1.</b> Un estadio tiene 40 sectores iguales. En un sector cuentas unas 1 200 personas. En total habrá unas 40 × 1 200 = <b>48 000</b> personas.</p><p><b>Ejemplo 2.</b> En una cucharada de arroz hay unos 250 granos. El paquete da para unas 80 cucharadas. En el paquete hay unos 80 × 250 = <b>20 000</b> granos.</p><p><b>Ejemplo 3.</b> Un libro tiene unas 300 palabras por página y 200 páginas: unas <b>60 000</b> palabras.</p><p>Una estimación no es una adivinanza: se apoya en datos y cálculos. Por eso, cuando oigas en las noticias que en un concierto había «unas 50 000 personas», ya sabes que alguien lo ha calculado así.</p>`,
        H6.flujo("Estimar", ["dividir|en partes", "contar|una parte", "multiplicar|por partes", "redondear|el total"], cAZ)],
    ],
  },
  final: [
    ["La historia de nuestros números", `<p>Las cifras que usamos (0, 1, 2, 3…) se llaman <b>números indoarábigos</b>, porque se inventaron en la <b>India</b> y llegaron a Europa gracias a los <b>árabes</b>.</p><p>Su gran ventaja es que son un sistema <mark>posicional</mark>: la misma cifra vale distinto según el lugar. En 222, el primer 2 vale 200, el segundo 20 y el tercero 2. Y además tienen el <b>cero</b>, que sirve para marcar un lugar vacío: no es lo mismo 25 que 205.</p><p>Algunos momentos importantes:</p><ul><li>Hace unos 1 500 años, los matemáticos de la India ya usaban el cero y las nueve cifras.</li><li>En el siglo IX, el sabio persa <b>al-Juarismi</b>, que trabajaba en Bagdad, escribió un libro sobre cómo calcular con ellos. De su nombre viene la palabra «algoritmo».</li><li>Llegaron a Europa a través de <b>al-Ándalus</b>. El documento europeo más antiguo que se conoce con estas cifras es el <b>Códice Vigilano</b>, escrito en el año 976 en un monasterio de La Rioja.</li><li>En 1202, el italiano <b>Fibonacci</b> las dio a conocer en toda Europa.</li></ul><p>Otras civilizaciones, como los <b>mayas</b> de América, también inventaron el cero por su cuenta, con un símbolo parecido a una concha.</p>`,
      H6.flujo("Nuestras cifras", ["India|el cero", "Bagdad|al-Juarismi", "976|La Rioja", "1202|Fibonacci"], cNA)],
    ["Números grandes de verdad", `<p>Con lo que sabes, ya puedes leer números que aparecen en las noticias, en los libros de Ciencias o en los mapas:</p><ul><li>Muchas ciudades españolas tienen <b>seis cifras</b> de habitantes: Salamanca, unos 145 000; Burgos, unos 175 000; Santander, unos 172 000.</li><li>España tiene unos <b>49 000 000</b> de habitantes.</li><li>La <b>Luna</b> está a unos <b>384 000</b> kilómetros de la Tierra.</li><li>La vuelta a la Tierra por el ecuador mide unos <b>40 000</b> km.</li><li>El <b>corazón</b> de un niño late más de 100 000 veces al día.</li><li>Un coche que ha recorrido <b>200 000</b> km ya ha dado como cinco vueltas al mundo.</li></ul><p>Cuando leas un número grande, sigue estos pasos:</p><ol><li>Separa las cifras en grupos de tres desde la derecha.</li><li>Lee cada grupo y añade «millones» o «mil» donde corresponda.</li><li>Piensa si el número tiene sentido: ¿una ciudad de 145 habitantes? ¡Faltan cifras!</li></ol><p>Busca en un atlas o en internet cuántos habitantes tiene tu municipio y tu comunidad autónoma. ¿Cuántas cifras tienen?</p>`,
      L6.filas("Números reales", [["Burgos", "unos 175 000", cAZ], ["España", "unos 49 millones", cVE], ["la Luna", "unos 384 000 km", cNA], ["corazón", "+100 000 latidos", cRO]])],
  ],
  ejemplos: [
    ["Escribe en números romanos el año 2 024.", ["2 000 = MM.", "24 = XXIV."], "MMXXIV."],
    ["En un campo de girasoles hay 25 filas y cuentas unos 480 girasoles en una fila. ¿Cuántos habrá más o menos?", ["Contar una parte y multiplicar.", "25 × 480."], "Unos 12 000 girasoles."],
  ],
  errores: ["Escribir IIII en lugar de IV.", "Olvidar los ceros intermedios al escribir millones: «tres millones cinco mil» es 3 005 000."],
  ejercicios: [
    ["b", "Escribe con cifras: un millón doscientos mil.", "1 200 000."],
    ["b", "¿Cuánto vale XV? ¿Y XL?", "15 y 40."],
    ["b", "Escribe en romanos: 8, 19 y 50.", "VIII, XIX, L."],
    ["b", "¿De dónde vienen nuestros números?", "De la India, a través de los árabes."],
    ["b", "¿Cuántas cifras tiene un millón?", "Siete."],
    ["m", "Escribe cómo se lee 6 040 300.", "Seis millones cuarenta mil trescientos."],
    ["m", "¿Qué número romano es MCMXC?", "1 990."],
    ["m", "En una página caben unas 350 palabras. ¿Cuántas habrá en un libro de 120 páginas?", "Unas 42 000."],
    ["m", "¿Qué ventaja tiene el sistema posicional frente al romano?", "Con pocas cifras escribe cualquier número y es fácil calcular."],
    ["m", "Ordena: 1 000 000, 999 999, 1 000 100.", "999 999 < 1 000 000 < 1 000 100."],
    ["a", "Escribe tu fecha de nacimiento en números romanos.", "Respuesta abierta."],
    ["a", "Estima cuántas baldosas tiene el suelo del pasillo del colegio.", "Respuesta abierta."],
    ["a", "Busca los habitantes de tres ciudades y ordénalos de mayor a menor.", "Respuesta abierta."],
    ["a", "Investiga qué símbolos usaban los mayas para escribir los números.", "Puntos, rayas y una concha para el cero."],
  ],
  quiz: [
    ["Un millón tiene…", ["seis ceros", "cinco ceros", "siete ceros"], "Millón."],
    ["IX vale…", ["9", "11", "4"], "Romanos."],
    ["En números romanos, la letra M vale…", ["1 000", "100", "500"], "Romanos."],
    ["Para estimar una cantidad grande…", ["contamos una parte y multiplicamos", "adivinamos", "contamos todo"], "Estimar."],
    ["De al-Juarismi viene la palabra…", ["algoritmo", "ábaco", "aritmética"], "Historia."],
  ],
  examen: [
    ["En la lectura, ¿cuántos tapones les faltaban cuando llegaron a 999 850?", ["150", "1 500", "15"], "Lectura."],
    ["La Luna está de la Tierra a unos…", ["384 000 km", "3 840 km", "38 km"], "Números grandes."],
  ],
  tarjetas: [
    ["El millón", "1 000 000: siete cifras; grupos de tres: millones, miles, unidades."],
    ["Romanos", "I 1, V 5, X 10, L 50, C 100, D 500, M 1 000; IV y IX restan."],
    ["Estimar", "Dividir en partes, contar una y multiplicar."],
    ["Historia", "India, al-Juarismi, Códice Vigilano 976, Fibonacci 1202; el cero."],
  ],
  glosario: [
    ["Cifra", "Cada uno de los símbolos del 0 al 9."],
    ["Orden de unidades", "Lugar que ocupa una cifra: unidades, decenas, centenas…"],
    ["Millón", "Mil millares: 1 000 000."],
    ["Sistema posicional", "Sistema en el que una cifra vale según su lugar."],
    ["Número romano", "Número escrito con letras, como lo hacían los romanos."],
    ["Estimar", "Calcular una cantidad aproximada."],
    ["Indoarábigo", "Sistema de cifras inventado en la India y difundido por los árabes."],
    ["Cero", "Cifra que marca un lugar vacío."],
    ["Algoritmo", "Serie de pasos para resolver un cálculo o problema."],
    ["Códice", "Libro antiguo escrito a mano."],
    ["Habitante", "Persona que vive en un lugar."],
    ["Ecuador", "Línea imaginaria que divide la Tierra en dos mitades."],
  ],
  situacion: {
    titulo: "El reto del millón",
    reto: "La clase imagina y calcula cómo sería reunir un millón de objetos.",
    pasos: ["Elegid un objeto pequeño (granos de arroz, tapones, clips).", "Contad y pesad o medid 100 de ellos.", "Calculad cuánto pesarían o cuánto espacio ocuparían mil, cien mil y un millón.", "Presentad los resultados en un cartel con números escritos en cifras y en letras."],
    producto: "Un cartel con cálculos sobre el millón.",
    evaluacion: ["Lee y escribe números de hasta siete cifras.", "Estima cantidades con un método razonado.", "Multiplica por 10, 100 y 1 000.", "Comunica los resultados con claridad."],
  },
});
