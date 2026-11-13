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
