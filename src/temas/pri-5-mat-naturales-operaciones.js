// Matemáticas 5º de Primaria: números naturales hasta los millones y operaciones combinadas. Dibujos propios en SVG.
const P = require("./_pri5a");
const { svg, t, caja, AZ, RO, VE, NA, SO, MO } = P;

// Tabla de valor posicional con las cifras de un número de hasta 9 cifras.
const posicional = (num, y = 70) => {
  const cab = ["CM", "DM", "UM", "CM", "DM", "UM", "C", "D", "U"];
  const cs = String(num).padStart(9, " ").split("");
  return cab.map((h, i) => {
    const x = 14 + i * 26 + (i >= 3 ? 4 : 0) + (i >= 6 ? 4 : 0), c = i < 3 ? RO : i < 6 ? AZ : VE;
    return `<rect x="${x}" y="${y - 30}" width="24" height="22" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="1.5"/>${t(x + 12, y - 14, h, { s: 9, c })}<rect x="${x}" y="${y - 6}" width="24" height="30" fill="var(--card)" stroke="${c}" stroke-width="1.5"/>${t(x + 12, y + 15, cs[i].trim(), { s: 15, d: true })}`;
  }).join("");
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Números naturales y operaciones combinadas",
  minutos: 50,
  objetivos: ["Leer, escribir y descomponer números naturales de hasta nueve cifras", "Comparar, ordenar y redondear números grandes", "Conocer los términos, la prueba y las propiedades de las cuatro operaciones", "Resolver operaciones combinadas respetando el orden correcto"],
  claves: ["número natural", "millón", "valor posicional", "redondear", "números romanos", "propiedad conmutativa", "propiedad distributiva", "operaciones combinadas", "paréntesis"],
  pregunta: ["¿Cuánto es 2 + 3 × 4? ¿20 o 14?", "La respuesta correcta es <mark>14</mark>. En las operaciones combinadas hay un orden: primero se hacen las <b>multiplicaciones y divisiones</b> y después las sumas y restas. Así: 3 × 4 = 12 y luego 2 + 12 = 14. Si quisiéramos sumar primero, tendríamos que escribir un paréntesis: (2 + 3) × 4 = 20."],
  bloques: [
    ["Los números de hasta nueve cifras", `<p>Los <b>números naturales</b> son los que usamos para contar: 0, 1, 2, 3… y no se acaban nunca. En 5º trabajamos con números muy grandes, de <b>hasta nueve cifras</b>.</p><p>Las cifras se agrupan de tres en tres, en <b>clases</b>:</p><ul><li>La clase de las <b>unidades</b>: unidades (U), decenas (D) y centenas (C).</li><li>La clase de los <b>millares</b>: unidades de millar (UM), decenas de millar (DM) y centenas de millar (CM).</li><li>La clase de los <b>millones</b>: unidades de millón (U. de millón), decenas de millón y centenas de millón.</li></ul><p>Recuerda las equivalencias: <mark>1 millón = 1 000 000 = mil millares</mark>. Diez unidades de un orden forman una unidad del orden siguiente.</p>`,
      svg("Tabla de valor posicional con tres clases: millones, millares y unidades, con el número 345 128 609", `${t(48, 22, "millones", { s: 11, c: RO })}${t(130, 22, "millares", { s: 11, c: AZ })}${t(212, 22, "unidades", { s: 11, c: VE })}${posicional(345128609, 78)}${t(130, 130, "345 128 609", { s: 20, d: true })}${t(130, 156, "trescientos cuarenta y cinco millones…", { s: 10, c: "var(--muted)" })}`)],
    ["Leer y escribir números grandes", `<p>Para leer un número grande, primero se separa en <b>grupos de tres cifras</b> empezando por la derecha. Luego se lee cada grupo y se añade el nombre de su clase:</p><p style="text-align:center"><b>28 470 315</b> → veintiocho <b>millones</b> cuatrocientos setenta <b>mil</b> trescientos quince.</p><p>Para escribirlo con cifras, al revés: cada clase ocupa tres huecos. Si falta algún orden, se escribe un <b>cero</b>:</p><ul><li>Seis millones cuarenta mil ocho → <b>6 040 008</b>.</li><li>Ciento dos millones trescientos → <b>102 000 300</b>.</li></ul><p>En España separamos las clases con un pequeño <b>espacio</b> (no con un punto) a partir de cinco cifras. Y recuerda: «millón» se escribe con tilde, pero «millones», no.</p>`,
      svg("El número 28 470 315 separado en tres grupos: millones, mil y unidades", `${caja(16, 40, 64, 40, "28", RO, { s: 20 })}${caja(98, 40, 64, 40, "470", AZ, { s: 20 })}${caja(180, 40, 64, 40, "315", VE, { s: 20 })}${t(48, 100, "millones", { s: 11, c: RO })}${t(130, 100, "mil", { s: 11, c: AZ })}${t(212, 100, "(unidades)", { s: 11, c: VE })}${t(130, 134, "veintiocho millones", { s: 12 })}${t(130, 152, "cuatrocientos setenta mil", { s: 12 })}${t(130, 170, "trescientos quince", { s: 12 })}`)],
    ["Valor posicional y descomposición", `<p>Cada cifra tiene un <b>valor</b> que depende del lugar que ocupa. En 7 707 707, el 7 de la izquierda vale <b>7 000 000</b>, pero el de la derecha solo vale 7.</p><p><b>Descomponer</b> un número es escribirlo como suma de los valores de sus cifras:</p><p style="text-align:center">4 052 380 = 4 000 000 + 50 000 + 2 000 + 300 + 80</p><p>También se puede escribir con los órdenes de unidad: 4 U. de millón + 5 DM + 2 UM + 3 C + 8 D.</p><p>Fíjate en que los <b>ceros</b> no suman nada, pero son muy importantes: guardan el sitio para que cada cifra tenga su valor. No es lo mismo 4 052 380 que <mark>452 38</mark>… ¡que ni siquiera es un número bien escrito!</p>`,
      svg("Descomposición del número 4 052 380 en sumandos", `${t(130, 34, "4 052 380", { s: 22, d: true })}${P.flecha(130, 44, 130, 66, "var(--muted)", 2)}${[["4 000 000", RO], ["50 000", AZ], ["2 000", AZ], ["300", VE], ["80", VE]].map(([v, c], i) => caja(12 + (i % 3) * 80, 76 + Math.floor(i / 3) * 46, 76, 34, v, c, { s: 12 })).join("")}${t(214, 141, "+ … = 4 052 380", { s: 10, c: "var(--muted)" })}`)],
    ["Comparar, ordenar y redondear", `<p>Para <b>comparar</b> dos números naturales:</p><ol><li>Tiene más valor el que tiene <b>más cifras</b>: 1 000 000 &gt; 999 999.</li><li>Si tienen las mismas cifras, se comparan <b>de izquierda a derecha</b> hasta encontrar una distinta: 3 <b>5</b>40 210 &gt; 3 <b>4</b>99 999.</li></ol><p>Usamos los signos <b>&gt;</b> (mayor que) y <b>&lt;</b> (menor que). La abertura mira siempre al número mayor.</p><p><b>Redondear</b> es cambiar un número por otro aproximado, más fácil de recordar. Para redondear a los millares, miramos la cifra de las centenas: si es <b>5 o más</b>, subimos; si es menor que 5, dejamos igual.</p><p>Ejemplo: 47 <b>6</b>20 → <mark>48 000</mark>; 47 <b>3</b>20 → 47 000.</p>`,
      svg("Recta numérica entre 47 000 y 48 000 donde 47 620 queda más cerca de 48 000", `<path d="M24 90 H 236" stroke="var(--muted)" stroke-width="2.5"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => `<path d="M${30 + i * 20} ${i % 5 ? 84 : 80} V ${i % 5 ? 96 : 100}" stroke="var(--muted)" stroke-width="${i % 5 ? 1.2 : 2.4}"/>`).join("")}${t(30, 118, "47 000", { s: 11 })}${t(130, 118, "47 500", { s: 11, c: "var(--muted)" })}${t(230, 118, "48 000", { s: 11, c: VE })}<circle cx="154" cy="90" r="6" fill="${RO}"/>${t(154, 70, "47 620", { s: 12, c: RO })}${P.flecha(162, 76, 222, 80, VE, 2)}${t(130, 152, "más cerca de 48 000", { s: 13, c: VE, d: true })}`)],
    ["Los números romanos", `<p>Los antiguos romanos escribían los números con <b>letras</b>. Aún los vemos en relojes, en los siglos (siglo XXI) o en los nombres de reyes (Felipe VI).</p><p>Las siete letras son: <b>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1 000</b>.</p><p>Las reglas principales:</p><ul><li>Una letra a la <b>derecha</b> de otra de igual o mayor valor <b>suma</b>: XV = 15; CC = 200.</li><li>I, X o C a la <b>izquierda</b> de una letra de mayor valor <b>resta</b>: IV = 4; XL = 40; CM = 900.</li><li>I, X, C y M se pueden repetir <b>hasta tres veces</b>; V, L y D no se repiten.</li><li>Una raya encima multiplica por mil.</li></ul><p>Así, <mark>MMXXVI = 2026</mark>.</p>`,
      P.tabla("Valores de las siete letras de los números romanos", ["I", "V", "X", "L", "C", "D", "M"], [["1", "5", "10", "50", "100", "500", "1000"]], MO)],
    ["Suma y resta", `<p>En la <b>suma</b>, los números que se suman son los <b>sumandos</b> y el resultado es la <b>suma</b> o total. En la <b>resta</b>, al número mayor se le llama <b>minuendo</b>, al que se quita <b>sustraendo</b> y al resultado <b>diferencia</b>.</p><p>Para colocarlas bien, las cifras deben quedar <b>en columna</b>: unidades debajo de unidades, decenas debajo de decenas…</p><p>La resta tiene una <b>prueba</b> para comprobar si está bien: <mark>diferencia + sustraendo = minuendo</mark>.</p><p>Ejemplo: 52 300 − 18 745 = 33 555. Prueba: 33 555 + 18 745 = 52 300 ✓.</p><p>La suma cumple la propiedad <b>conmutativa</b> (el orden de los sumandos no cambia el resultado) y la <b>asociativa</b> (puedes agruparlos como quieras).</p>`,
      svg("Resta en columna 52 300 menos 18 745 igual a 33 555 con su prueba", `${t(110, 38, "5 2 3 0 0", { s: 17, a: "end", d: true })}${t(110, 62, "− 1 8 7 4 5", { s: 17, a: "end", d: true, c: RO })}<path d="M24 72 H 116" stroke="var(--ink)" stroke-width="2"/>${t(110, 94, "3 3 5 5 5", { s: 17, a: "end", d: true, c: VE })}${t(70, 122, "minuendo − sustraendo", { s: 10, c: "var(--muted)" })}${t(70, 136, "= diferencia", { s: 10, c: "var(--muted)" })}<rect x="140" y="30" width="108" height="112" rx="10" fill="var(--card)" stroke="${VE}" stroke-width="2"/>${t(194, 50, "PRUEBA", { s: 11, c: VE })}${t(194, 74, "33 555", { s: 14 })}${t(194, 94, "+ 18 745", { s: 14, c: RO })}${t(194, 120, "52 300 ✓", { s: 14, c: VE })}`)],
    ["Multiplicación y división", `<p>En la <b>multiplicación</b>, los números que se multiplican son los <b>factores</b> y el resultado es el <b>producto</b>. Cumple tres propiedades útiles:</p><ul><li><b>Conmutativa</b>: 6 × 25 = 25 × 6.</li><li><b>Asociativa</b>: (4 × 5) × 7 = 4 × (5 × 7).</li><li><b>Distributiva</b>: 7 × (10 + 3) = 7 × 10 + 7 × 3 = 70 + 21 = 91.</li></ul><p>En la <b>división</b> hay cuatro términos: <b>dividendo</b>, <b>divisor</b>, <b>cociente</b> y <b>resto</b>. El resto siempre es <b>menor que el divisor</b>. Si el resto es 0, la división es <b>exacta</b>.</p><p>La prueba de la división es: <mark>divisor × cociente + resto = dividendo</mark>. Ejemplo: 1 459 : 12 = 121 y resto 7, porque 12 × 121 + 7 = 1 459.</p>`,
      svg("Términos de la división: dividendo 1459, divisor 12, cociente 121 y resto 7", `<path d="M120 36 V 82 M120 60 H 196" stroke="var(--ink)" stroke-width="2.2" fill="none"/>${t(112, 54, "1 459", { s: 18, a: "end", d: true, c: AZ })}${t(158, 54, "12", { s: 18, d: true, c: RO })}${t(158, 80, "121", { s: 18, d: true, c: VE })}${t(112, 104, "7", { s: 18, a: "end", d: true, c: MO })}${t(84, 28, "dividendo", { s: 10, c: AZ })}${t(226, 54, "divisor", { s: 10, c: RO })}${t(226, 80, "cociente", { s: 10, c: VE })}${t(60, 104, "resto", { s: 10, c: MO })}${t(130, 142, "12 × 121 + 7 = 1 459", { s: 13 })}${t(130, 162, "resto < divisor", { s: 11, c: "var(--muted)" })}`),
      P.V("natB2")],
    ["Operaciones combinadas", `<p>Una <b>operación combinada</b> tiene varias operaciones juntas. Para que todo el mundo obtenga el mismo resultado, se sigue siempre este <b>orden</b>:</p><ol><li>Primero, lo que está <b>entre paréntesis</b>.</li><li>Después, las <b>multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li>Por último, las <b>sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 30 − (4 + 2) × 3</p><ul><li>Paréntesis: 4 + 2 = 6 → 30 − 6 × 3</li><li>Multiplicación: 6 × 3 = 18 → 30 − 18</li><li>Resta: <mark>12</mark></li></ul><p>Truco: subraya la operación que toca en cada paso y copia lo demás igual en la línea de abajo.</p>`,
      P.pasos("Orden de las operaciones combinadas: paréntesis, multiplicar y dividir, sumar y restar", [["1.º", ["( )", "paréntesis"], RO], ["2.º", ["× y :", "de izq. a dcha."], AZ], ["3.º", ["+ y −", "de izq. a dcha."], VE]]),
      P.V("natB")],
    ["Resolver problemas", `<p>Muchos problemas de la vida diaria se resuelven con una operación combinada. Sigue estos pasos:</p><ol><li><b>Lee</b> el problema dos veces y busca la pregunta.</li><li><b>Anota los datos</b> importantes.</li><li><b>Piensa</b> qué operaciones necesitas y en qué orden.</li><li><b>Calcula</b> y comprueba si el resultado tiene sentido.</li><li><b>Escribe la solución</b> con una frase completa.</li></ol><p>Problema: un colegio compra 8 cajas de 24 lápices y reparte 150. ¿Cuántos lápices quedan?</p><p>Operación: 8 × 24 − 150 = 192 − 150 = <b>42</b>. Solución: <mark>quedan 42 lápices</mark>.</p><p>Comprueba siempre: ¿es lógico que queden menos de los que se compraron? Sí.</p>`,
      svg("Ocho cajas de veinticuatro lápices menos ciento cincuenta: quedan cuarenta y dos", `${[...Array(8)].map((_, i) => `<rect x="${20 + (i % 4) * 30}" y="${30 + Math.floor(i / 4) * 34}" width="24" height="26" rx="3" fill="${SO}" fill-opacity=".35" stroke="${NA}" stroke-width="1.6"/>${t(32 + (i % 4) * 30, 48 + Math.floor(i / 4) * 34, "24", { s: 10 })}`).join("")}${t(80, 118, "8 × 24 = 192", { s: 13, c: AZ })}${t(196, 60, "− 150", { s: 16, c: RO, d: true })}${t(196, 84, "repartidos", { s: 10, c: "var(--muted)" })}${t(130, 150, "192 − 150 = 42 lápices", { s: 14, d: true, c: VE })}`)],
  ],
  figura: ["Números naturales y operaciones", P.columnas("Resumen: números grandes, romanos, propiedades y orden de las operaciones", [["3 cifras por clase", "MILLONES", ["1 000 000", "= mil millares"], RO], ["I V X L C D M", "ROMANOS", ["IV = 4", "XL = 40"], MO], ["conmutativa", "PROPIEDADES", ["asociativa", "distributiva"], AZ], ["( ) → × : → + −", "ORDEN", ["30 − 6 × 3", "= 12"], VE]])],
  video: P.V("natV", true),
  ejemplos: [
    ["Escribe con cifras «doce millones setecientos mil cuarenta» y descompónlo.", ["Millones: 12 → 12 _ _ _ _ _ _.", "Millares: setecientos mil → 700.", "Unidades: cuarenta → 040.", "Número: 12 700 040.", "Descomposición: 10 000 000 + 2 000 000 + 700 000 + 40."], "12 700 040"],
    ["Calcula 48 : 6 + 5 × (9 − 4).", ["Paréntesis: 9 − 4 = 5 → 48 : 6 + 5 × 5.", "División: 48 : 6 = 8. Multiplicación: 5 × 5 = 25 → 8 + 25.", "Suma: 8 + 25 = 33."], "33"],
    ["Una bicicleta cuesta 245 € y un casco 38 €. Compran 3 bicicletas y 3 cascos. ¿Cuánto pagan? Hazlo de dos formas.", ["Forma 1: 3 × 245 + 3 × 38 = 735 + 114 = 849 €.", "Forma 2 (propiedad distributiva): 3 × (245 + 38) = 3 × 283 = 849 €."], "849 €"],
  ],
  errores: [
    "Leer los números grandes sin separarlos en grupos de tres cifras desde la derecha.",
    "Olvidar los ceros al escribir con cifras: «dos millones cinco mil» no es 25 000, sino 2 005 000.",
    "Hacer las operaciones combinadas de izquierda a derecha sin respetar el orden: 2 + 3 × 4 no es 20.",
    "Dejar en la división un resto mayor que el divisor.",
    "Repetir V, L o D en los números romanos, o escribir IIII en lugar de IV.",
    "Redondear mirando la cifra equivocada: para redondear a los millares hay que mirar las centenas.",
  ],
  ejercicios: [
    ["Escribe cómo se lee: 305 040 200.", "Trescientos cinco millones cuarenta mil doscientos."],
    ["Escribe con cifras: noventa millones nueve mil noventa.", "90 009 090."],
    ["¿Qué valor tiene la cifra 6 en 4 862 015?", "800 000 es el 8; el 6 vale 60 000 (6 decenas de millar)."],
    ["Ordena de menor a mayor: 1 099 999; 1 100 000; 999 999; 1 010 101.", "999 999 < 1 010 101 < 1 099 999 < 1 100 000."],
    ["Redondea 3 486 512 a las unidades de millar y a las unidades de millón.", "3 487 000 y 3 000 000."],
    ["Escribe en números romanos: 49, 1 492 y 2026.", "XLIX, MCDXCII y MMXXVI."],
    ["Haz la resta 600 000 − 248 795 y su prueba.", "351 205; prueba: 351 205 + 248 795 = 600 000."],
    ["Divide 7 365 : 24 y haz la prueba.", "Cociente 306, resto 21. Prueba: 24 × 306 + 21 = 7 365."],
    ["Calcula: 50 − 4 × 8 + 12 : 3.", "50 − 32 + 4 = 22."],
    ["Un cine tiene 18 filas de 25 butacas. Hoy hay 137 butacas vacías. ¿Cuántas personas hay?", "18 × 25 − 137 = 450 − 137 = 313 personas."],
  ],
  quiz: [
    ["Un millón es igual a…", ["mil millares", "cien millares", "diez mil unidades"], "1 000 × 1 000."],
    ["En 52 813 004, la cifra 2 está en las…", ["unidades de millón", "decenas de millar", "centenas de millar"], "Segunda cifra de los millones."],
    ["«Tres millones treinta» se escribe…", ["3 000 030", "3 030 000", "300 030"], "Faltan los millares: 000."],
    ["¿Cuál es mayor?", ["2 100 000", "2 099 999", "999 999"], "Comparando de izquierda a derecha."],
    ["47 620 redondeado a los millares es…", ["48 000", "47 000", "47 600"], "La centena es 6: se sube."],
    ["XL en números romanos es…", ["40", "60", "90"], "X a la izquierda de L resta."],
    ["En una división, el resto debe ser…", ["menor que el divisor", "mayor que el divisor", "igual al cociente"], "Si no, cabe otra vez."],
    ["7 × (10 + 2) = 7 × 10 + 7 × 2 es la propiedad…", ["distributiva", "conmutativa", "asociativa"], "Se reparte el factor."],
    ["2 + 3 × 4 es igual a…", ["14", "20", "24"], "Primero la multiplicación."],
    ["(2 + 3) × 4 es igual a…", ["20", "14", "9"], "Primero el paréntesis."],
  ],
  examen: [
    ["18 − 12 : 3 es igual a…", ["14", "2", "6"], "12 : 3 = 4; 18 − 4."],
    ["MCM en números romanos es…", ["1 900", "2 100", "1 100"], "M + CM."],
    ["La prueba de la resta es…", ["diferencia + sustraendo = minuendo", "minuendo + diferencia = sustraendo", "sustraendo − diferencia"], "Se deshace la resta sumando."],
    ["El valor de 9 en 9 400 000 es…", ["9 000 000", "900 000", "90 000"], "Unidades de millón."],
  ],
  feynman: ["Cómo se lee un número de nueve cifras", "Qué significa que el valor de una cifra depende de su posición", "Cómo se redondea un número a los millares", "Cuáles son las reglas de los números romanos", "En qué orden se resuelven las operaciones combinadas"],
  mapa: ["NÚMEROS Y OPERACIONES", [["Números grandes", "clases de 3 cifras", RO], ["Comparar y redondear", "> < · aproximar", AZ], ["Romanos", "I V X L C D M", MO], ["Combinadas", "( ) → × : → + −", VE]]],
  tarjetas: [
    ["1 millón", "1 000 000 = mil millares."],
    ["Clases de un número", "Unidades, millares y millones, de tres cifras cada una."],
    ["Redondear a los millares", "Mira las centenas: si es 5 o más, sube."],
    ["IV, IX, XL, XC, CD, CM", "4, 9, 40, 90, 400, 900."],
    ["Prueba de la resta", "Diferencia + sustraendo = minuendo."],
    ["Prueba de la división", "Divisor × cociente + resto = dividendo."],
    ["Propiedad distributiva", "a × (b + c) = a × b + a × c."],
    ["Orden de las operaciones", "Paréntesis, × y :, + y −."],
  ],
  familias: ["Buscad números grandes en noticias (habitantes, distancias, presupuestos) y leedlos en voz alta.", "Mirad relojes, monumentos o libros con números romanos y traducidlos.", "En la compra, inventad una operación combinada: «3 yogures a 2 € y 1 pan a 1 €».", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido numérico: lectura, escritura, descomposición, comparación y redondeo de números naturales; sistema de numeración romano; propiedades de las operaciones; jerarquía de las operaciones y uso del paréntesis; resolución de problemas",
  ideas: ["Tabla de valor posicional gigante en el suelo para colocar cifras con tarjetas.", "Buscar en internet datos reales de población de ciudades y ordenarlas.", "Carrera de operaciones combinadas por parejas con comprobación cruzada."],
});
