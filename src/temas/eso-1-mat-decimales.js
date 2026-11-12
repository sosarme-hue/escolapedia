// Matemáticas 1º ESO: los números decimales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla, rejilla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números decimales",
  minutos: 55,
  objetivos: ["Leer, escribir y descomponer números decimales", "Comparar, ordenar y aproximar decimales", "Sumar, restar, multiplicar y dividir decimales", "Pasar de fracción a decimal y resolver problemas con dinero y medidas"],
  claves: ["parte entera", "décima", "centésima", "milésima", "redondeo", "decimal periódico"],
  pregunta: {
    texto: "En una carrera, Marta hace 12,08 s y Lucía 12,1 s. Lucía dice que ha ganado porque 1 es menor que 08. ¿Tiene razón?",
    respuesta: "No. Hay que comparar cifra a cifra con el mismo número de decimales: 12,08 y 12,10. Las décimas son 0 y 1, así que <mark>12,08 es menor</mark> y Marta ha sido más rápida, por dos centésimas.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un número decimal?</h3><p>Los <b>números decimales</b> expresan cantidades que <b>no son enteras</b>: 2,5 kg, 1,75 m, 3,99 €. Tienen dos partes separadas por una <b>coma</b>:</p><ul><li>La <b>parte entera</b>, a la izquierda.</li><li>La <b>parte decimal</b>, a la derecha.</li></ul><p>Cada orden de la parte decimal es la décima parte del anterior:</p>${tabla(["Orden", "Equivale a"], [["1 décima (d)", "1/10 = 0,1"], ["1 centésima (c)", "1/100 = 0,01"], ["1 milésima (m)", "1/1 000 = 0,001"]])}<p>3,47 = 3 unidades + 4 décimas + 7 centésimas. Se lee «tres unidades y cuarenta y siete centésimas» o, más corto, «tres coma cuarenta y siete».</p>`,
      svg: svg("Cuadrado dividido en 100 casillas con 47 coloreadas: cuarenta y siete centésimas", `<rect x="20" y="30" width="40" height="100" fill="var(--pen)" fill-opacity=".35"/><rect x="60" y="30" width="10" height="70" fill="var(--pen)" fill-opacity=".35"/>${rejilla(20, 30, 10, 10, 10, "var(--pen)")}${t(70, 150, "0,47", { s: 16, d: true, c: "var(--pen)" })}${t(190, 64, "4 décimas", { s: 12, c: "var(--pen)" })}${t(190, 86, "+ 7 centésimas", { s: 12 })}${t(190, 118, "47 de 100", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Comparar y ordenar decimales</h3><p>Para comparar dos decimales:</p><ol><li>Se compara la <b>parte entera</b>: es mayor el que la tiene mayor.</li><li>Si es igual, se comparan las <b>décimas</b>, luego las <b>centésimas</b>, etc.</li></ol><p>Truco: añade <b>ceros a la derecha</b> para que tengan los mismos decimales. Los ceros al final de la parte decimal no cambian el valor: <mark>0,5 = 0,50 = 0,500</mark>.</p><p>Ejemplo: ordenar 2,3; 2,25; 2,307 → 2,300; 2,250; 2,307 → 2,25 &lt; 2,3 &lt; 2,307.</p><p>Entre dos decimales siempre hay otro: entre 1,4 y 1,5 está 1,45.</p>`,
      svg: (() => { const r = recta(0, 10, 90, 20, 240, [[2.5, "", "var(--leaf)"], [8, "", "var(--red)"]], { num: false }); return svg("Recta entre 2 y 3 dividida en décimas: 2,25 y 2,8 marcados", `${r.s}${t(20, 114, "2", { s: 12 })}${t(240, 114, "3", { s: 12 })}${t(r.X(2.5), 70, "2,25", { c: "var(--leaf)", s: 12 })}${t(r.X(8), 70, "2,8", { c: "var(--red)", s: 12 })}${t(130, 148, "cada marca es una décima", { c: "var(--muted)", s: 11 })}`); })(),
    },
    {
      html: `<h3>Aproximar decimales</h3><p>Como con los naturales, se puede <b>truncar</b> (cortar) o <b>redondear</b> a las unidades, décimas, centésimas…</p><p>Para <b>redondear</b>, se mira la cifra siguiente al orden pedido: si es <mark>5 o mayor, se sube una unidad</mark>; si no, se deja.</p><ul><li>4,736 redondeado a las décimas → 4,7 (la centésima es 3).</li><li>4,736 redondeado a las centésimas → 4,74 (la milésima es 6).</li><li>Precios: 2,995 € se redondea a 3,00 €.</li></ul><p>Las calculadoras dan muchos decimales: redondear a dos (céntimos) es lo habitual con el dinero.</p>`,
    },
    {
      html: `<h3>Sumar y restar decimales</h3><p>Se colocan los números <b>en columna</b> con las <mark>comas alineadas</mark> (unidades bajo unidades, décimas bajo décimas…). Si hace falta, se rellenan con ceros. Después se opera como con los naturales y se baja la coma.</p><p style="text-align:center">12,5 + 3,48 → 12,50 + 3,48 = <b>15,98</b></p><p style="text-align:center">7 − 2,35 → 7,00 − 2,35 = <b>4,65</b></p><p>Error frecuente: alinear por la derecha como si fueran naturales. ¡Siempre por la coma!</p>`,
      svg: svg("Suma en columna con las comas alineadas: 12,50 más 3,48 igual a 15,98", `${t(170, 50, "1 2 , 5 0", { s: 18, a: "end", d: true })}${t(170, 80, "+   3 , 4 8", { s: 18, a: "end", d: true })}<path d="M80 92 H 176" stroke="var(--ink)" stroke-width="2"/>${t(170, 120, "1 5 , 9 8", { s: 18, a: "end", d: true, c: "var(--leaf)" })}<path d="M136 30 V 130" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/>${t(136, 150, "comas en columna", { c: "var(--red)", s: 11 })}`),
      video: vb("decB"),
    },
    {
      html: `<h3>Multiplicar decimales</h3><p>Se multiplica <b>como si no hubiera comas</b> y, al final, se separan en el resultado tantas cifras decimales como tengan <mark>entre los dos factores</mark>.</p><p>2,4 · 1,3 → 24 · 13 = 312 → hay 1 + 1 = 2 decimales → <b>3,12</b>.</p><p><b>Por la unidad seguida de ceros</b> (10, 100, 1 000): la coma se desplaza a la <b>derecha</b> tantos lugares como ceros. 3,57 · 100 = 357; 0,8 · 1 000 = 800.</p><p>Comprueba siempre con una estimación: 2,4 · 1,3 está cerca de 2 · 1 = 2 y de 3 · 1,5 = 4,5; 3,12 encaja.</p>`,
    },
    {
      html: `<h3>Dividir decimales</h3><ul><li><b>Decimal entre entero</b>: se divide normal y se pone la coma en el cociente al bajar la primera cifra decimal. 7,5 : 3 = 2,5.</li><li><b>Divisor decimal</b>: se multiplican dividendo y divisor por 10, 100… hasta que el divisor sea <b>entero</b>. El cociente no cambia. 4,5 : 0,15 → 450 : 15 = <b>30</b>.</li><li><b>Entre 10, 100, 1 000</b>: la coma se desplaza a la <b>izquierda</b>. 45,6 : 100 = 0,456.</li></ul><p>Si una división no es exacta, se puede seguir añadiendo ceros al dividendo para sacar decimales: 10 : 4 = 2,5.</p>`,
      video: vb("decB2"),
    },
    {
      html: `<h3>Fracciones y decimales</h3><p>Una fracción se pasa a decimal <b>dividiendo</b> el numerador entre el denominador:</p><ul><li><b>Decimal exacto</b>: la división termina. 3/4 = 0,75; 1/8 = 0,125.</li><li><b>Decimal periódico</b>: unas cifras se repiten sin fin. 1/3 = 0,333… = 0,3̂; 5/6 = 0,8333…</li></ul><p>Un decimal exacto se pasa a fracción poniendo el número sin coma en el numerador y en el denominador un 1 con tantos ceros como decimales: <mark>0,35 = 35/100 = 7/20</mark>.</p>${tabla(["Fracción", "1/2", "1/4", "3/4", "1/5", "1/10"], [["Decimal", "0,5", "0,25", "0,75", "0,2", "0,1"]])}`,
    },
    {
      html: `<h3>Problemas con decimales</h3><p>Los decimales están en las <b>compras</b> y en las <b>medidas</b>:</p><ul><li>3 cuadernos a 1,85 € y un bolígrafo de 0,90 €: 3 · 1,85 + 0,90 = 5,55 + 0,90 = <b>6,45 €</b>. Si pago con 10 €, me devuelven 3,55 €.</li><li>Una cuerda de 7,2 m se corta en 6 trozos iguales: 7,2 : 6 = <b>1,2 m</b> cada uno.</li><li>Precio por kilo: 1,5 kg de manzanas cuestan 2,70 €; 1 kg cuesta 2,70 : 1,5 = <b>1,80 €</b>.</li></ul><p>Comprobar con una estimación evita errores con la coma: 3 cuadernos a casi 2 € son casi 6 €.</p>`,
    },
  ],
  figura: {
    titulo: "Los decimales en un vistazo",
    svg: filas("Resumen: parte entera y decimal; décimas, centésimas y milésimas; comparar con los mismos decimales; sumar con comas alineadas; multiplicar contando decimales; dividir con divisor entero", [["Partes", "entera , décimas centésimas…", "var(--pen)"], ["Comparar", "igualar decimales con ceros", "var(--inf)"], ["Redondear", "cifra siguiente ≥ 5 sube", "var(--sun)"], ["+ y −", "comas alineadas", "var(--leaf)"], ["·", "decimales de los dos factores", "var(--red)"], [":", "hacer entero el divisor", "var(--ink)"]], 200),
  },
  video: vg("decV"),
  quiz: mezcla([
    { q: "En 5,763, la cifra de las centésimas es…", o: ["6", "7", "3"], a: 0, e: "Segunda tras la coma." },
    { q: "0,4 es igual a…", o: ["0,40", "0,04", "4,0"], a: 0, e: "Ceros a la derecha." },
    { q: "¿Cuál es mayor?", o: ["3,5", "3,45", "3,499"], a: 0, e: "3,500." },
    { q: "6,281 redondeado a las décimas:", o: ["6,3", "6,2", "6,28"], a: 0, e: "La centésima es 8." },
    { q: "4,5 + 2,35 =", o: ["6,85", "6,40", "2,80"], a: 0, e: "Comas alineadas." },
    { q: "10 − 3,6 =", o: ["6,4", "7,6", "6,6"], a: 0, e: "10,0 − 3,6." },
    { q: "0,3 · 0,2 =", o: ["0,06", "0,6", "6"], a: 0, e: "Dos decimales." },
    { q: "2,47 · 100 =", o: ["247", "24,7", "0,0247"], a: 0, e: "Coma dos lugares a la derecha." },
    { q: "3 : 0,5 =", o: ["6", "1,5", "0,6"], a: 0, e: "30 : 5." },
    { q: "3/5 en decimal:", o: ["0,6", "0,35", "1,6"], a: 0, e: "3 : 5." },
  ]),
  examen: mezcla([
    { q: "1/3 en decimal es…", o: ["periódico", "exacto", "entero"], a: 0, e: "0,333…" },
    { q: "0,25 como fracción irreducible:", o: ["1/4", "25/10", "2/5"], a: 0, e: "25/100." },
    { q: "Si 2,5 kg cuestan 5,50 €, 1 kg cuesta…", o: ["2,20 €", "2,75 €", "13,75 €"], a: 0, e: "5,50 : 2,5." },
  ]),
  feynman: ["Qué es una décima y una centésima", "Por qué 0,5 y 0,50 son iguales", "Por qué se alinean las comas al sumar", "Cómo se colocan los decimales al multiplicar", "Cómo se pasa una fracción a decimal"],
  mapa: mapa("NÚMEROS DECIMALES", "var(--eso)", [
    ["Lectura", "décimas · centésimas · milésimas", "var(--pen)"],
    ["Orden", "comparar y redondear", "var(--sun)"],
    ["Operaciones", "+ − · : con la coma", "var(--leaf)"],
    ["Fracciones", "exactos · periódicos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Décima", "0,1 = 1/10."],
    ["Centésima", "0,01 = 1/100."],
    ["Ceros a la derecha", "No cambian el valor: 0,5 = 0,50."],
    ["Sumar decimales", "Con las comas en columna."],
    ["Multiplicar", "Separar tantos decimales como sumen los factores."],
    ["· 10, 100…", "La coma va a la derecha."],
    ["Dividir por decimal", "Hacer entero el divisor multiplicando los dos."],
    ["Periódico", "Decimal con cifras que se repiten sin fin."],
  ],
  familias: ["Comparad precios por kilo o por litro en el súper.", "Medid alturas de la familia en metros con dos decimales y ordenadlas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números decimales: orden, aproximación, operaciones, relación con las fracciones y problemas de contexto (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Folletos de supermercado para calcular compras.", "Cronometrar carreras con centésimas y ordenar tiempos.", "Bloques base diez con la placa como unidad."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números decimales", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 15,3 − 4,75 + 0,8.", pasos: ["Resta en columna: 15,30 − 4,75 = 10,55.", "Suma: 10,55 + 0,80 = 11,35.", "Estimación: 15 − 5 + 1 = 11. Encaja."], resultado: "11,35" },
    { enunciado: "Calcula: 6,3 : 0,07.", pasos: ["El divisor tiene 2 decimales: multiplico los dos por 100.", "630 : 7.", "= 90."], resultado: "90" },
    { enunciado: "Un litro de aceite cuesta 4,85 €. ¿Cuánto cuestan 3 litros y cuánto me devuelven si pago con 20 €?", pasos: ["3 · 4,85 = 14,55 €.", "20 − 14,55 = 5,45 €.", "Estimación: 3 · 5 = 15; cambio cerca de 5. Encaja."], resultado: "14,55 €; devuelven 5,45 €." },
  ],
  errores: [
    "Creer que 2,15 es mayor que 2,5 porque 15 es mayor que 5.",
    "Alinear por la derecha al sumar, en lugar de por la coma.",
    "Al multiplicar, poner en el resultado solo los decimales de un factor.",
    "Dividir por un decimal sin multiplicar también el dividendo.",
    "Mover la coma hacia el lado equivocado al multiplicar o dividir por 10, 100…",
  ],
  ejercicios: [
    { q: "Escribe con cifras: doce unidades y siete milésimas.", sol: "12,007." },
    { q: "Descompón 8,406.", sol: "8 unidades + 4 décimas + 0 centésimas + 6 milésimas." },
    { q: "Ordena de mayor a menor: 0,9; 0,89; 0,099; 0,91.", sol: "0,91 > 0,9 > 0,89 > 0,099." },
    { q: "Redondea 13,4682 a las unidades, las décimas y las centésimas.", sol: "13; 13,5; 13,47." },
    { q: "Calcula: 7,08 + 12,9 + 0,35.", sol: "20,33." },
    { q: "Calcula: 25 − 13,47.", sol: "11,53." },
    { q: "Calcula: 3,25 · 4,2 y 0,07 · 1 000.", sol: "13,65 y 70." },
    { q: "Calcula: 18,9 : 7 y 2,4 : 0,06.", sol: "2,7 y 40." },
    { q: "Pasa a decimal 7/8 y 2/3. Di si son exactos o periódicos.", sol: "0,875 exacto; 0,666… periódico." },
    { q: "Un paquete de 6 yogures cuesta 2,94 €. ¿Cuánto cuesta cada yogur? ¿Y 15 yogures?", sol: "0,49 €; 15 · 0,49 = 7,35 €." },
  ],
};
