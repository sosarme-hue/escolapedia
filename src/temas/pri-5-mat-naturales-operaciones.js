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

// ---------- Nivel libro (5º de Primaria) ----------
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Estimar el resultado de una operación antes de calcularla", "Usar las propiedades de las operaciones para calcular mejor", "Seguir un plan de cuatro pasos para resolver problemas de varias operaciones"],
  lectura: { titulo: "Un estadio lleno de números", html: `<p>Marta y su abuelo van al estadio a ver un partido. En la pantalla gigante aparece un mensaje: «Asistencia de hoy: <b>67 482</b> espectadores». Marta lo lee en voz alta y se equivoca: «¡Seis mil setecientos!». Su abuelo se ríe y le enseña un truco: separar las cifras de tres en tres desde la derecha.</p><p>Al volver a casa, Marta busca más números grandes. En las noticias descubre que en España viven unos <b>48 millones</b> de personas y que la Luna está a <b>384 400</b> kilómetros. «¿Cuántos estadios como el de hoy harían falta para meter a todos los españoles?», se pregunta. Para contestarlo no necesita la cuenta exacta: basta con <b>redondear y estimar</b>.</p><p>En este tema aprenderás a leer y escribir números de hasta nueve cifras, a compararlos y redondearlos, y a hacer operaciones combinadas sin equivocarte en el orden. Son las herramientas que usan los periodistas, los arquitectos y los organizadores de cualquier gran evento.</p>` },
  tras: {
    "Comparar, ordenar y redondear": [
      ["Estimar antes de calcular", `<p><b>Estimar</b> es calcular un resultado <b>aproximado</b> de forma rápida, redondeando los números antes de operar. Sirve para dos cosas: saber si una cuenta exacta es razonable y decidir sin papel ni calculadora.</p><p>Ejemplo: en una excursión van 4 autobuses con 52, 48, 61 y 39 alumnos. ¿Cuántos van, más o menos? Redondeamos a las decenas: 50 + 50 + 60 + 40 = <b>200 alumnos</b>. La cuenta exacta da 200, ¡muy cerca!</p><p>En la multiplicación también funciona: 198 × 5 se parece a 200 × 5 = <b>1 000</b>. Si con la cuenta exacta te sale 9 900, sabes enseguida que te has equivocado al colocar alguna cifra.</p><p>Consejo: redondea a la cifra que te permita calcular de cabeza. Para sumar precios de 3 a 9 €, redondea a las unidades; para sumar habitantes de ciudades, a los millares o a los millones. Después, compara siempre la estimación con el resultado exacto: si están muy lejos, revisa la cuenta.</p>`,
        P.svg("Estimar: cincuenta y dos más cuarenta y ocho más sesenta y uno más treinta y nueve es aproximadamente doscientos", `${[["52", "50"], ["48", "50"], ["61", "60"], ["39", "40"]].map(([a, b], i) => `${caja(14 + i * 60, 22, 50, 32, a, AZ, { s: 15 })}${t(39 + i * 60, 76, "≈", { s: 16, c: "var(--muted)" })}${caja(14 + i * 60, 86, 50, 32, b, VE, { s: 15 })}`).join("")}${t(130, 150, "50 + 50 + 60 + 40 ≈ 200", { s: 15, d: true, c: VE })}${t(130, 170, "exacto: 200", { s: 11, c: "var(--muted)" })}`),
        ["wT6UeTQF8-0", "Aproximaciones de números naturales para niños de primaria", "Clases Particulares en Ávila", 267618]],
    ],
    "Los números romanos": [
      ["Sistemas aditivos y sistemas posicionales", `<p>A lo largo de la historia las personas han inventado distintas maneras de escribir los números. Se pueden agrupar en dos grandes tipos:</p><ul><li><b>Sistemas aditivos</b>: cada símbolo vale siempre lo mismo y se suman. Los egipcios dibujaban un bastón para el 1, un arco para el 10 y una cuerda enrollada para el 100. Para escribir 300 repetían tres veces la cuerda. El sistema romano es casi aditivo.</li><li><b>Sistemas posicionales</b>: el valor de una cifra depende del <b>lugar</b> que ocupa. Es nuestro sistema decimal, que nació en la India, lo trajeron los árabes y llegó a Europa a través de al-Ándalus. Por eso a nuestras cifras las llamamos <b>indoarábigas</b>.</li></ul><p>La gran ventaja del sistema posicional es el <b>cero</b>: permite dejar un lugar vacío. En 305, el 0 dice que no hay decenas. Con solo diez cifras (0 al 9) podemos escribir cualquier número, por grande que sea, y hacer cuentas en columna. ¡Intenta multiplicar CCCXLV por XXVII y verás por qué los romanos usaban ábacos!</p>`,
        P.svg("Comparación del número trescientos cinco escrito en sistema egipcio, romano y decimal", `${t(60, 30, "egipcio", { s: 11, c: "var(--muted)" })}${[0, 1, 2].map((i) => `<circle cx="${30 + i * 22}" cy="58" r="9" fill="none" stroke="${NA}" stroke-width="2.4"/><circle cx="${30 + i * 22}" cy="58" r="4" fill="none" stroke="${NA}" stroke-width="2"/>`).join("")}${[0, 1, 2, 3, 4].map((i) => `<path d="M${98 + i * 7} 48 V 70" stroke="${NA}" stroke-width="2.6"/>`).join("")}${t(200, 30, "romano", { s: 11, c: "var(--muted)" })}${t(200, 66, "CCCV", { s: 22, d: true, c: RO })}${t(130, 110, "decimal (posicional)", { s: 11, c: "var(--muted)" })}${caja(70, 120, 40, 40, "3", AZ, { s: 20 })}${caja(110, 120, 40, 40, "0", MO, { s: 20 })}${caja(150, 120, 40, 40, "5", AZ, { s: 20 })}${t(130, 174, "el 0 guarda el sitio de las decenas", { s: 10, c: MO })}`)],
    ],
    "Multiplicación y división": [
      ["Propiedades que ayudan a calcular", `<p>Las operaciones tienen <b>propiedades</b>: reglas que se cumplen siempre y que nos permiten calcular de forma más cómoda.</p><ul><li><b>Conmutativa</b> (suma y multiplicación): el orden no cambia el resultado. 4 × 25 = 25 × 4.</li><li><b>Asociativa</b>: si hay tres números, puedo agruparlos como quiera. (7 × 5) × 2 = 7 × (5 × 2) = 7 × 10 = 70. Es más fácil buscar primero el 10.</li><li><b>Distributiva</b>: multiplicar un número por una suma es lo mismo que multiplicarlo por cada sumando y sumar. 6 × (10 + 3) = 6 × 10 + 6 × 3 = 60 + 18 = 78.</li><li><b>Elemento neutro</b>: sumar 0 o multiplicar por 1 no cambia el número.</li></ul><p>La distributiva es la base del <b>cálculo mental</b>: para hacer 8 × 99 piensa 8 × 100 − 8 = 792. Y para hacer 15 × 12 piensa 15 × 10 + 15 × 2 = 150 + 30 = 180.</p><p>Ojo: la resta y la división <b>no</b> son conmutativas. 10 − 4 no es igual que 4 − 10, y 20 : 5 no es igual que 5 : 20.</p>`,
        P.svg("Propiedad distributiva: seis por trece es seis por diez más seis por tres, setenta y ocho", `${P.rejilla(20, 30, 13, 6, 14)}<rect x="20" y="30" width="140" height="84" fill="${AZ}" fill-opacity=".25"/><rect x="160" y="30" width="42" height="84" fill="${RO}" fill-opacity=".3"/>${t(90, 78, "6 × 10 = 60", { s: 12, c: AZ })}${t(181, 132, "6 × 3", { s: 11, c: RO })}${t(130, 160, "6 × 13 = 60 + 18 = 78", { s: 15, d: true })}`)],
    ],
    "Resolver problemas": [
      ["Un plan en cuatro pasos", `<p>Los problemas de varias operaciones se resuelven mejor con un <b>plan</b>. Úsalo siempre, aunque el problema parezca fácil:</p><ol><li><b>Comprender</b>: lee dos veces, subraya los datos y escribe la pregunta con tus palabras.</li><li><b>Pensar</b>: decide qué operaciones necesitas y en qué orden. Ayuda hacer un dibujo o un esquema.</li><li><b>Calcular</b>: haz las operaciones con cuidado. Puedes escribir una sola operación combinada con paréntesis.</li><li><b>Comprobar</b>: ¿el resultado tiene sentido? Estímalo y escribe la respuesta con la unidad (euros, personas, metros…).</li></ol><p>Ejemplo: «Un colegio compra 12 cajas de 24 lápices. Reparte 250 lápices entre las clases. ¿Cuántos le quedan?». Pensar: primero el total (multiplicar) y luego lo que queda (restar). Calcular: 12 × 24 − 250 = 288 − 250 = <b>38 lápices</b>. Comprobar: 10 × 25 = 250, así que debían quedar pocos. ¡Tiene sentido!</p>`,
        P.svg("Plan de cuatro pasos para resolver problemas: comprender, pensar, calcular y comprobar", `${[["1 Comprender", AZ], ["2 Pensar", MO], ["3 Calcular", RO], ["4 Comprobar", VE]].map(([x, c], i) => `${caja(14 + (i % 2) * 122, 22 + Math.floor(i / 2) * 70, 110, 52, x, c, { s: 13 })}`).join("")}${t(130, 168, "lee, decide, opera, revisa", { s: 12, c: "var(--muted)" })}`)],
    ],
  },
  final: [
    ["Los números grandes en el mundo real", `<p>Los números de millones aparecen cada día en las noticias. Algunos ejemplos aproximados:</p><ul><li>España tiene unos <b>48 000 000</b> de habitantes y el mundo, más de <b>8 000 000 000</b> (¡ocho mil millones!, un número de diez cifras).</li><li>El corazón de una persona late unas <b>100 000</b> veces al día.</li><li>La Luna está a <b>384 400 km</b> de la Tierra y el Sol, a unos <b>150 000 000 km</b>.</li></ul><p>Cuando un número es muy grande, los periódicos lo escriben mezclando cifras y palabras: «48 millones», «2,5 millones». Es más fácil de leer, pero debes saber pasarlo a cifras: 48 millones = 48 000 000.</p><p>Para entender lo grandes que son, compáralos con algo conocido. Si un estadio tiene 60 000 asientos, para sentar a 48 millones de personas harían falta 48 000 000 : 60 000 = <b>800 estadios</b>. Así, un número que parecía imposible se vuelve fácil de imaginar.</p>`,
      P.svg("Comparar cantidades grandes: cuarenta y ocho millones de personas son ochocientos estadios de sesenta mil", `<ellipse cx="74" cy="80" rx="54" ry="34" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2.5"/><ellipse cx="74" cy="80" rx="30" ry="16" fill="${VE}" fill-opacity=".35"/>${t(74, 132, "1 estadio", { s: 12 })}${t(74, 150, "60 000", { s: 14, d: true, c: VE })}${t(190, 64, "48 000 000", { s: 16, d: true, c: AZ })}${t(190, 86, "personas", { s: 11 })}${t(190, 120, "= 800", { s: 20, d: true, c: RO })}${t(190, 142, "estadios", { s: 12, c: RO })}`)],
  ],
  ejemplos: [
    ["Estima y después calcula: 312 + 489 + 198.", ["Redondeo a las centenas: 300 + 500 + 200 = 1 000.", "Cuenta exacta: 312 + 489 = 801; 801 + 198 = 999.", "La estimación y el resultado están muy cerca."], "999 (estimación: 1 000)"],
    ["Calcula de cabeza 25 × 36 usando las propiedades.", ["Descompongo 36 = 4 × 9.", "Asociativa: 25 × 4 × 9 = (25 × 4) × 9.", "25 × 4 = 100 y 100 × 9 = 900."], "900"],
  ],
  errores: [
    "Escribir mal los ceros intermedios: «dos millones treinta mil» es 2 030 000, no 2 300 000 ni 230 000.",
  ],
  nivelesBase: "bbbmmbmmma",
  ejercicios: [
    ["b", "Escribe el número anterior y el siguiente de 1 000 000.", "Anterior: 999 999. Siguiente: 1 000 001."],
    ["b", "Descompón 4 052 300 en millones, millares y unidades.", "4 millones + 52 millares + 300 unidades: 4 000 000 + 52 000 + 300."],
    ["b", "Escribe en cifras: «quinientos mil cinco».", "500 005. Hay que poner ceros en los lugares vacíos."],
    ["b", "Escribe en números romanos: 14, 90 y 400.", "XIV, XC y CD."],
    ["b", "Calcula usando la conmutativa y la asociativa: 5 × 9 × 2.", "Agrupo 5 × 2 = 10 y después 10 × 9 = 90."],
    ["m", "Redondea 7 549 800 a los millones y a las centenas de millar.", "A los millones: 8 000 000 (la cifra siguiente, 5, redondea hacia arriba). A las centenas de millar: 7 500 000 (la siguiente cifra es 4)."],
    ["m", "Estima y calcula: 41 × 19.", "Estimación: 40 × 20 = 800. Exacto: 41 × 19 = 779. Están cerca, el resultado es razonable."],
    ["m", "Calcula: (36 − 12) : 4 + 3 × 5.", "Paréntesis: 24. Divisiones y multiplicaciones: 24 : 4 = 6 y 3 × 5 = 15. Suma: 6 + 15 = 21."],
    ["m", "Calcula de cabeza 7 × 99 con la propiedad distributiva.", "7 × 100 − 7 × 1 = 700 − 7 = 693."],
    ["m", "Lee el número romano MCMLXXXIV y escríbelo en cifras.", "M = 1 000, CM = 900, LXXX = 80, IV = 4. Total: 1 984."],
    ["m", "Una ciudad tiene 1 245 300 habitantes y otra 1 254 030. ¿Cuál tiene más? Explica cómo lo sabes.", "Las dos tienen 7 cifras y el mismo millón. En las centenas de millar empatan (2). En las decenas de millar, 5 > 4: la segunda tiene más."],
    ["a", "Escribe una sola operación combinada para este problema y resuélvela: «Compro 3 libros de 12 € y pago con 50 €. ¿Cuánto me devuelven?».", "50 − 3 × 12 = 50 − 36 = 14 €."],
    ["a", "Un tren lleva 8 vagones con 64 asientos cada uno. En la primera parada bajan 129 personas y suben 87. Si iba lleno, ¿cuántas personas lleva ahora?", "8 × 64 = 512 personas. 512 − 129 + 87 = 470 personas."],
    ["a", "¿Cuántos estadios de 50 000 personas harían falta para meter a 2 000 000 de habitantes?", "2 000 000 : 50 000 = 40 estadios."],
    ["a", "Coloca paréntesis para que la igualdad sea cierta: 4 + 6 × 5 − 2 = 48.", "(4 + 6) × (5 − 2) no da 48 (da 30). (4 + 6) × 5 − 2 = 50 − 2 = 48. ¡Correcto!"],
    ["a", "Inventa un problema que se resuelva con la operación 200 − 6 × 25 y resuélvelo.", "Ejemplo: «Tengo 200 € y compro 6 entradas de 25 €. ¿Cuánto me queda?». 6 × 25 = 150; 200 − 150 = 50 €."],
  ],
  quiz: [
    ["¿Qué es estimar?", ["Calcular un resultado aproximado redondeando", "Hacer la cuenta exacta con calculadora", "Escribir el número en romanos"], "Estimar es aproximar rápido para saber si un resultado es razonable."],
    ["¿Qué propiedad dice que 6 × (10 + 2) = 6 × 10 + 6 × 2?", ["Distributiva", "Conmutativa", "Asociativa"], "Se reparte la multiplicación entre los sumandos."],
    ["En nuestro sistema decimal, el valor de una cifra depende de…", ["Su posición en el número", "Su color", "Cuántas veces se repite"], "Es un sistema posicional."],
    ["¿Cuál es el primer paso para resolver un problema?", ["Comprender el enunciado", "Calcular deprisa", "Escribir la solución"], "Antes de operar hay que entender qué se pregunta."],
    ["48 millones escrito en cifras es…", ["48 000 000", "4 800 000", "480 000"], "Un millón tiene seis ceros detrás."],
  ],
  examen: [
    ["El número 2 030 000 se lee…", ["Dos millones treinta mil", "Dos millones trescientos mil", "Doscientos tres mil"], "Separando de tres en tres: 2 | 030 | 000."],
    ["¿Qué operación NO es conmutativa?", ["La resta", "La suma", "La multiplicación"], "10 − 4 no es igual a 4 − 10."],
    ["Una buena estimación de 49 × 21 es…", ["1 000", "100", "10 000"], "50 × 20 = 1 000."],
    ["¿Qué usaban los romanos para hacer cálculos con comodidad?", ["El ábaco", "La calculadora", "Las cuentas en columna"], "Con números romanos no se pueden hacer cuentas en columna."],
  ],
  tarjetas: [
    ["Estimar", "Calcular de forma aproximada redondeando antes de operar."],
    ["Sistema posicional", "El valor de cada cifra depende del lugar que ocupa. Necesita el 0."],
    ["Propiedad asociativa", "(a × b) × c = a × (b × c). Puedo agrupar como me convenga."],
    ["Plan para problemas", "Comprender, pensar, calcular y comprobar."],
  ],
  glosario: [
    ["Número natural", "Cada uno de los números que sirven para contar: 0, 1, 2, 3…"],
    ["Cifra", "Cada uno de los diez signos con los que escribimos los números (del 0 al 9)."],
    ["Valor posicional", "Lo que vale una cifra según el lugar que ocupa en el número."],
    ["Millón", "Mil millares: 1 000 000."],
    ["Redondear", "Sustituir un número por otro cercano terminado en ceros."],
    ["Estimar", "Calcular un resultado aproximado."],
    ["Operación combinada", "Expresión con varias operaciones que se resuelven en un orden fijo."],
    ["Jerarquía de las operaciones", "Orden de cálculo: paréntesis, multiplicaciones y divisiones, sumas y restas."],
    ["Propiedad distributiva", "a × (b + c) = a × b + a × c."],
    ["Sistema aditivo", "Sistema en que los símbolos suman su valor, como el egipcio."],
    ["Cifras indoarábigas", "Nuestras cifras, inventadas en la India y traídas por los árabes."],
  ],
  situacion: {
    titulo: "Organizamos la gran fiesta del colegio",
    reto: "El colegio celebra su aniversario y vuestra clase organiza el presupuesto: sillas, bocadillos, bebidas y decoración para todas las familias.",
    pasos: ["Averiguad cuántos alumnos tiene el colegio y estimad cuántas personas vendrán (alumnos, familias y profesorado).", "Pedid precios reales (o usad un folleto) y redondeadlos para hacer una primera estimación del gasto.", "Calculad el presupuesto exacto con operaciones combinadas y comparadlo con la estimación.", "Presentad el presupuesto en un cartel con los números bien escritos y explicad cómo lo habéis calculado."],
    producto: "Un cartel con el presupuesto de la fiesta y las operaciones que lo justifican.",
    evaluacion: ["Lee, escribe y redondea correctamente números grandes.", "Usa la estimación para comprobar los resultados.", "Plantea y resuelve operaciones combinadas respetando la jerarquía.", "Explica su razonamiento de forma ordenada."],
  },
});
