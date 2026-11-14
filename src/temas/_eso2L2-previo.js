// Versión anterior (2º ESO, Matemáticas) de los temas reescritos a nivel libro en el lote 2.
// Se conserva para reutilizar sus dibujos y vídeos: P.<tema>.bloques[i].svg, P.<tema>.video.

const P = {};
P["algebra"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: expresiones algebraicas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Expresiones algebraicas",
  minutos: 60,
  objetivos: ["Traducir enunciados al lenguaje algebraico", "Calcular el valor numérico de una expresión", "Operar con monomios y polinomios", "Desarrollar las identidades notables y sacar factor común"],
  claves: ["lenguaje algebraico", "monomio", "coeficiente", "grado", "polinomio", "identidades notables"],
  pregunta: {
    texto: "Piensa un número, súmale 5, multiplícalo por 2, réstale 10 y divídelo entre 2. ¿Por qué siempre te sale el número que pensaste?",
    respuesta: "Llamando <b>x</b> al número: (x + 5) · 2 = 2x + 10; 2x + 10 − 10 = 2x; 2x : 2 = <mark>x</mark>. El álgebra usa letras para representar números cualesquiera y así demuestra que un truco funciona <b>siempre</b>, no solo con los ejemplos que probamos.",
  },
  bloques: [
    {
      html: `<h3>El lenguaje algebraico</h3><p>El <b>álgebra</b> usa letras para representar números desconocidos o que pueden variar. Así se escriben de forma breve y general frases y fórmulas:</p>${tabla(["Lenguaje común", "Lenguaje algebraico"], [["El doble de un número", "2x"], ["Un número más 7", "x + 7"], ["La mitad de un número", "x/2"], ["El cuadrado de un número", "x²"], ["Dos números consecutivos", "x, x + 1"], ["Un número par / impar", "2x / 2x + 1"], ["El triple de la suma de dos números", "3(x + y)"]])}<p>Las fórmulas son expresiones algebraicas: el área de un rectángulo es <b>A = b · h</b>; el perímetro de un cuadrado, <b>P = 4l</b>.</p>`,
      video: { id: "UNWFLuUfiX4", titulo: "Lenguaje algebraico para principiantes", canal: "Daniel Carreón", vistas: 7211102 },
    },
    {
      html: `<h3>Valor numérico</h3><p>El <b>valor numérico</b> de una expresión es el número que se obtiene al <mark>sustituir las letras por números</mark> y operar.</p><p>Valor de 3x² − 2x + 1 para x = −2: 3 · (−2)² − 2 · (−2) + 1 = 3 · 4 + 4 + 1 = <b>17</b>.</p><p>Pon siempre los números negativos entre <b>paréntesis</b> al sustituir y respeta la jerarquía de operaciones. El valor numérico sirve, por ejemplo, para usar fórmulas: el área de un rectángulo de base 7 cm y altura 4 cm es A = 7 · 4 = 28 cm².</p>`,
    },
    {
      html: `<h3>Monomios</h3><p>Un <b>monomio</b> es un producto de un número por una o varias letras con exponentes naturales: <b>−5x²y</b>.</p><ul><li><b>Coeficiente</b>: el número (−5).</li><li><b>Parte literal</b>: las letras con sus exponentes (x²y).</li><li><b>Grado</b>: la suma de los exponentes de las letras (2 + 1 = 3).</li></ul><p>Dos monomios son <b>semejantes</b> si tienen la <mark>misma parte literal</mark>: 4ab² y −ab² lo son; 3x² y 3x, no.</p>`,
      svg: svg("Partes del monomio menos cinco equis al cuadrado y: coeficiente menos cinco, parte literal equis al cuadrado y, grado tres", `${t(130, 80, "−5 x² y", { s: 34, d: true })}<path d="M70 92 h 40" stroke="var(--red)" stroke-width="3"/><path d="M124 92 h 76" stroke="var(--pen)" stroke-width="3"/>
        ${t(90, 120, "coeficiente", { c: "var(--red)", s: 12 })}${t(162, 120, "parte literal", { c: "var(--pen)", s: 12 })}${t(130, 156, "grado = 2 + 1 = 3", { c: "var(--leaf)", s: 13 })}${t(130, 30, "un monomio", { c: "var(--muted)", s: 12 })}`),
    },
    {
      html: `<h3>Operaciones con monomios</h3><ul><li><b>Sumar y restar</b>: solo se pueden sumar monomios <b>semejantes</b>; se suman los coeficientes y se deja la parte literal. 3x² + 5x² − x² = <b>7x²</b>. Si no son semejantes, se deja indicado: 2x + 3y.</li><li><b>Multiplicar</b>: se multiplican los coeficientes y las partes literales (sumando exponentes de la misma letra). (3x²) · (−2x³y) = <b>−6x⁵y</b>.</li><li><b>Dividir</b>: se dividen los coeficientes y se restan los exponentes. (12x⁵) : (4x²) = <b>3x³</b>.</li></ul>`,
      video: { id: "N3vD22wJfyw", titulo: "Suma y resta de monomios", canal: "Daniel Carreón", vistas: 3443497 },
    },
    {
      html: `<h3>Polinomios</h3><p>Un <b>polinomio</b> es una suma de monomios no semejantes, que se llaman <b>términos</b>. P(x) = 4x³ − 2x² + x − 7.</p><ul><li>El <b>grado</b> es el del término de mayor grado (aquí, 3).</li><li>El <b>término independiente</b> es el que no tiene letra (−7).</li><li>Con dos términos se llama <b>binomio</b> (x + 5); con tres, <b>trinomio</b>.</li></ul><p>Para <b>sumar o restar</b> polinomios se agrupan los términos semejantes. Para restar, se cambian los signos de todos los términos del que resta:</p><p>(3x² + 2x − 1) − (x² − 5x + 4) = 3x² + 2x − 1 − x² + 5x − 4 = <b>2x² + 7x − 5</b>.</p>`,
    },
    {
      html: `<h3>Multiplicar polinomios</h3><p><b>Monomio por polinomio</b>: se multiplica el monomio por cada término (propiedad distributiva). 2x(3x² − x + 4) = 6x³ − 2x² + 8x.</p><p><b>Polinomio por polinomio</b>: se multiplica cada término del primero por cada término del segundo y se reducen los semejantes:</p><p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <mark>2x² + x − 15</mark>.</p><p>El grado del producto es la suma de los grados de los factores.</p>`,
      svg: svg("Rectángulo de lados x más 3 y x más 2 dividido en cuatro partes: x², 2x, 3x y 6", `<rect x="40" y="30" width="110" height="80" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="150" y="30" width="60" height="80" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><rect x="40" y="110" width="110" height="44" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"/><rect x="150" y="110" width="60" height="44" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>
        ${t(95, 75, "x²", { s: 15 })}${t(180, 75, "3x", { s: 14 })}${t(95, 137, "2x", { s: 14 })}${t(180, 137, "6", { s: 14 })}${t(95, 22, "x", { c: "var(--muted)", s: 12 })}${t(180, 22, "3", { c: "var(--muted)", s: 12 })}${t(28, 74, "x", { c: "var(--muted)", s: 12 })}${t(28, 136, "2", { c: "var(--muted)", s: 12 })}${t(130, 172, "(x + 3)(x + 2) = x² + 5x + 6", { s: 12 })}`),
    },
    {
      html: `<h3>Identidades notables</h3><p>Son productos que aparecen tanto que conviene saberlos de memoria:</p>${tabla(["Nombre", "Fórmula", "Ejemplo"], [["Cuadrado de una suma", "(a + b)² = a² + 2ab + b²", "(x + 3)² = x² + 6x + 9"], ["Cuadrado de una diferencia", "(a − b)² = a² − 2ab + b²", "(2x − 1)² = 4x² − 4x + 1"], ["Suma por diferencia", "(a + b)(a − b) = a² − b²", "(x + 5)(x − 5) = x² − 25"]])}<p>El error típico es escribir (a + b)² = a² + b²: falta el <b>doble producto</b> 2ab. Con números: (3 + 2)² = 25, pero 3² + 2² = 13.</p>`,
      video: { id: "goHUDRbeejM", titulo: "Identidades notables: binomio al cuadrado y suma por diferencia", canal: "Susi Profe", vistas: 2036436 },
    },
    {
      html: `<h3>Sacar factor común</h3><p>Es la operación contraria a la propiedad distributiva: si todos los términos tienen un factor en común, se <b>saca fuera</b> de un paréntesis.</p><ul><li>6x + 9 = <b>3(2x + 3)</b>.</li><li>4x³ − 10x² = <b>2x²(2x − 5)</b>: se saca el mcd de los coeficientes y la letra con el menor exponente.</li></ul><p>Comprueba siempre multiplicando: 2x² · 2x − 2x² · 5 = 4x³ − 10x². Sacar factor común y reconocer identidades notables (x² − 9 = (x + 3)(x − 3)) sirve para <b>simplificar</b> y para resolver ecuaciones.</p>`,
    },
  ],
  figura: {
    titulo: "Álgebra en un vistazo",
    svg: filas("Resumen: lenguaje algebraico, valor numérico, monomios semejantes, polinomios, identidades notables y factor común", [["Traducir", "el doble de un número más 3 → 2x + 3", "var(--pen)"], ["Valor numérico", "sustituir y operar", "var(--inf)"], ["Monomios", "solo se suman los semejantes", "var(--leaf)"], ["Polinomios", "grado · término independiente", "var(--sun)"], ["(a ± b)²", "a² ± 2ab + b²", "var(--red)"], ["Factor común", "6x + 9 = 3(2x + 3)", "var(--ink)"]], 220),
  },
  video: { id: "_NS3U2nwk0g", titulo: "Clasificación de las expresiones algebraicas: monomio, binomio…", canal: "Matemáticas profe Alex", vistas: 2772095, megusta: 0, busqueda: "expresiones algebraicas monomios" },
  quiz: mezcla([
    { q: "«El triple de un número menos 4» es…", o: ["3x − 4", "3(x − 4)", "x³ − 4"], a: 0, e: "Primero el triple." },
    { q: "Valor de 2x + 5 para x = −3:", o: ["−1", "11", "1"], a: 0, e: "−6 + 5." },
    { q: "El grado de 7x³y² es…", o: ["5", "3", "7"], a: 0, e: "3 + 2." },
    { q: "¿Qué monomio es semejante a 4ab²?", o: ["−ab²", "4a²b", "4ab"], a: 0, e: "Misma parte literal." },
    { q: "5x² − 2x² =", o: ["3x²", "3", "3x⁴"], a: 0, e: "Se restan coeficientes." },
    { q: "(2x³) · (4x²) =", o: ["8x⁵", "8x⁶", "6x⁵"], a: 0, e: "Exponentes se suman." },
    { q: "El término independiente de x² − 3x + 8 es…", o: ["8", "−3", "1"], a: 0, e: "Sin letra." },
    { q: "(x + 4)² =", o: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16"], a: 0, e: "Doble producto 8x." },
    { q: "(x + 7)(x − 7) =", o: ["x² − 49", "x² + 49", "x² − 14x + 49"], a: 0, e: "Suma por diferencia." },
    { q: "Sacando factor común, 5x² + 10x =", o: ["5x(x + 2)", "5(x² + 10x)", "x(5 + 10x)"], a: 0, e: "mcd 5 y x." },
  ]),
  examen: mezcla([
    { q: "(3x − 2)² =", o: ["9x² − 12x + 4", "9x² + 4", "9x² − 6x + 4"], a: 0, e: "a² − 2ab + b²." },
    { q: "(2x + 1)(x − 3) =", o: ["2x² − 5x − 3", "2x² − 3", "2x² − 6x − 3"], a: 0, e: "2x² − 6x + x − 3." },
    { q: "x² − 16 se puede escribir como…", o: ["(x + 4)(x − 4)", "(x − 4)²", "(x − 8)(x + 2)"], a: 0, e: "Suma por diferencia." },
  ]),
  feynman: ["Para qué sirven las letras en matemáticas", "Qué es el valor numérico", "Cuándo se pueden sumar dos monomios", "Cómo se multiplican dos polinomios", "Las tres identidades notables y el doble producto"],
  mapa: mapa("ÁLGEBRA", "var(--eso)", [
    ["Lenguaje", "frases → letras", "var(--pen)"],
    ["Monomios", "coeficiente · grado", "var(--leaf)"],
    ["Polinomios", "sumar · multiplicar", "var(--sun)"],
    ["Identidades", "(a ± b)² · (a + b)(a − b)", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Expresión algebraica", "Números y letras unidos por operaciones."],
    ["Valor numérico", "Resultado de sustituir las letras por números."],
    ["Monomio", "Número por letras con exponente natural."],
    ["Semejantes", "Monomios con la misma parte literal."],
    ["Grado de un polinomio", "El del término de mayor grado."],
    ["(a + b)²", "a² + 2ab + b²."],
    ["(a + b)(a − b)", "a² − b²."],
    ["Factor común", "ab + ac = a(b + c)."],
  ],
  familias: ["Probad trucos de «adivinar el número» y explicad con una x por qué funcionan.", "Buscad fórmulas en casa: precio con IVA, consumo del coche…", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje algebraico; valor numérico; monomios y polinomios y sus operaciones; identidades notables; extracción de factor común (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Fichas de álgebra (tiles) para multiplicar binomios.", "Demostrar trucos de magia numérica con álgebra.", "Comprobar identidades con áreas de cuadrados."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): expresiones algebraicas", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Reduce: 3(x² − 2x) − 2x(x + 1) + 5x.", pasos: ["3x² − 6x − 2x² − 2x + 5x.", "x²: 3 − 2 = 1 → x².", "x: −6 − 2 + 5 = −3 → −3x."], resultado: "x² − 3x" },
    { enunciado: "Desarrolla y simplifica: (x + 2)² − (x + 3)(x − 3).", pasos: ["(x + 2)² = x² + 4x + 4.", "(x + 3)(x − 3) = x² − 9.", "x² + 4x + 4 − x² + 9 = 4x + 13."], resultado: "4x + 13" },
    { enunciado: "Escribe el perímetro y el área de un rectángulo cuya base mide 3 cm más que su altura x, y calcula ambos para x = 5.", pasos: ["Base = x + 3.", "P = 2x + 2(x + 3) = 4x + 6; A = x(x + 3) = x² + 3x.", "Para x = 5: P = 26 cm; A = 25 + 15 = 40 cm²."], resultado: "P = 4x + 6; A = x² + 3x; 26 cm y 40 cm²." },
  ],
  errores: [
    "Sumar monomios no semejantes: 3x + 2x² no es 5x³.",
    "Escribir (a + b)² = a² + b², olvidando el doble producto.",
    "Al restar un polinomio, cambiar solo el signo del primer término.",
    "Sustituir un número negativo sin paréntesis: −3² en lugar de (−3)².",
    "Multiplicar exponentes en lugar de sumarlos: x² · x³ no es x⁶.",
  ],
  ejercicios: [
    { q: "Traduce: la suma de tres números consecutivos; el área de un cuadrado de lado x + 1.", sol: "x + (x + 1) + (x + 2) = 3x + 3; (x + 1)²." },
    { q: "Halla el valor numérico de x² − 4x + 3 para x = 1, x = 3 y x = −1.", sol: "0; 0; 8." },
    { q: "Indica coeficiente, parte literal y grado de −2/3 a²bc³.", sol: "−2/3; a²bc³; grado 6." },
    { q: "Reduce: 4x − 7x + x − 2y + 5y.", sol: "−2x + 3y." },
    { q: "Calcula: (−3a²b) · (2ab³) y (15x⁴y²) : (5x²y).", sol: "−6a³b⁴; 3x²y." },
    { q: "Dados P = 2x² − x + 4 y Q = x² + 3x − 1, calcula P + Q y P − Q.", sol: "3x² + 2x + 3; x² − 4x + 5." },
    { q: "Calcula: (x − 2)(x² + 3x − 1).", sol: "x³ + 3x² − x − 2x² − 6x + 2 = x³ + x² − 7x + 2." },
    { q: "Desarrolla: (x + 6)², (3x − 2)², (2x + 5)(2x − 5).", sol: "x² + 12x + 36; 9x² − 12x + 4; 4x² − 25." },
    { q: "Saca factor común: 8x³ − 12x² + 4x.", sol: "4x(2x² − 3x + 1)." },
    { q: "Escribe como producto: x² + 10x + 25 y x² − 36.", sol: "(x + 5)²; (x + 6)(x − 6)." },
  ],
};

  return module.exports;
})();

P["cuerpos"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: cuerpos geométricos, áreas y volúmenes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Cuerpos geométricos: áreas y volúmenes",
  minutos: 65,
  objetivos: ["Clasificar los cuerpos geométricos en poliedros y cuerpos de redondeo", "Reconocer prismas, pirámides y poliedros regulares y comprobar la fórmula de Euler", "Calcular áreas de prismas, pirámides, cilindros, conos y esferas a partir de su desarrollo", "Calcular volúmenes y relacionar unidades de volumen y capacidad"],
  claves: ["poliedro", "prisma", "pirámide", "cilindro", "desarrollo plano", "volumen"],
  pregunta: {
    texto: "¿Por qué las latas de refresco son cilindros y no cubos?",
    respuesta: "Por varias razones: el cilindro resiste mejor la presión del gas, se agarra con comodidad y se fabrica enrollando una chapa. Además, para una misma cantidad de líquido, un cilindro bien proporcionado necesita <mark>menos metal</mark> (menos área) que muchas otras formas. Calcular áreas y volúmenes sirve para diseñar envases, depósitos o habitaciones.",
  },
  bloques: [
    {
      html: `<h3>Poliedros y cuerpos de redondeo</h3><p>Los <b>cuerpos geométricos</b> ocupan un lugar en el espacio y tienen tres dimensiones. Se clasifican en:</p><ul><li><b>Poliedros</b>: todas sus caras son <b>polígonos</b> (cubo, prisma, pirámide). Sus elementos son las <b>caras</b>, las <b>aristas</b> (donde se cortan dos caras) y los <b>vértices</b> (donde se juntan varias aristas).</li><li><b>Cuerpos de redondeo</b> o de revolución: tienen alguna superficie curva y se obtienen al <b>girar</b> una figura plana alrededor de un eje: el <b>cilindro</b> (gira un rectángulo), el <b>cono</b> (un triángulo rectángulo) y la <b>esfera</b> (un semicírculo).</li></ul>`,
      svg: svg("Un cubo, un cilindro, un cono y una esfera dibujados en perspectiva", `<path d="M20 120 h 44 v -44 h -44 z M20 76 l 16 -14 h 44 l -16 14 M64 120 l 16 -14 v -44" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"/>
        <ellipse cx="120" cy="60" rx="22" ry="7" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M98 60 V 116 M142 60 V 116" stroke="var(--leaf)" stroke-width="2"/><path d="M98 116 A 22 7 0 0 0 142 116" fill="none" stroke="var(--leaf)" stroke-width="2"/>
        <path d="M168 116 L 190 52 L 212 116" fill="var(--sun)" fill-opacity=".15" stroke="var(--sun)" stroke-width="2"/><ellipse cx="190" cy="116" rx="22" ry="7" fill="none" stroke="var(--sun)" stroke-width="2"/>
        <circle cx="236" cy="96" r="18" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2"/><ellipse cx="236" cy="96" rx="18" ry="5" fill="none" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="3 2"/>
        ${t(42, 146, "poliedro", { c: "var(--pen)", s: 11 })}${t(176, 150, "cuerpos de redondeo", { c: "var(--leaf)", s: 11 })}`),
      video: { id: "kD5gz2k5IZQ", titulo: "Cuerpos de revolución", canal: "Daniel Carreón", vistas: 834517 },
    },
    {
      html: `<h3>Prismas, pirámides y poliedros regulares</h3><ul><li>Un <b>prisma</b> tiene dos bases iguales y paralelas, y caras laterales que son paralelogramos (rectángulos si es <b>recto</b>). Se nombra por su base: prisma triangular, pentagonal… El <b>ortoedro</b> es un prisma con todas las caras rectangulares, como una caja de zapatos.</li><li>Una <b>pirámide</b> tiene una base poligonal y caras laterales triangulares que se juntan en un vértice, la <b>cúspide</b>. Su altura es la distancia de la cúspide a la base; la altura de cada cara lateral se llama <b>apotema</b> de la pirámide.</li></ul><p>Los <b>poliedros regulares</b> tienen todas las caras iguales y regulares y en cada vértice concurren las mismas caras. Solo hay cinco: <b>tetraedro</b> (4 triángulos), <b>cubo</b> (6 cuadrados), <b>octaedro</b> (8 triángulos), <b>dodecaedro</b> (12 pentágonos) e <b>icosaedro</b> (20 triángulos).</p>`,
    },
    {
      html: `<h3>La fórmula de Euler</h3><p>En todos los poliedros convexos (sin entrantes) se cumple una relación entre caras (C), vértices (V) y aristas (A):</p><p style="text-align:center"><mark>C + V = A + 2</mark></p>${tabla(["Poliedro", "C", "V", "A", "C + V = A + 2"], [["Cubo", "6", "8", "12", "14 = 14"], ["Tetraedro", "4", "4", "6", "8 = 8"], ["Pirámide cuadrangular", "5", "5", "8", "10 = 10"], ["Prisma hexagonal", "8", "12", "18", "20 = 20"], ["Icosaedro", "20", "12", "30", "32 = 32"]])}<p>La descubrió el matemático suizo Leonhard Euler en el siglo XVIII. Sirve para comprobar si un recuento está bien o para calcular un dato que falta.</p>`,
    },
    {
      html: `<h3>Área de prismas y pirámides</h3><p>El <b>área</b> de un cuerpo es la superficie de todas sus caras. Se entiende con su <b>desarrollo plano</b> (el cuerpo «desplegado»).</p><ul><li><b>Prisma recto</b>: A<sub>lateral</sub> = perímetro de la base · altura; <mark>A<sub>total</sub> = A<sub>lateral</sub> + 2 · A<sub>base</sub></mark>. Ortoedro de 5 × 3 × 4: A = 2(15 + 20 + 12) = 94 cm².</li><li><b>Pirámide regular</b>: A<sub>lateral</sub> = perímetro de la base · apotema de la pirámide : 2; <mark>A<sub>total</sub> = A<sub>lateral</sub> + A<sub>base</sub></mark>.</li></ul><p>Si no conoces la apotema de la pirámide, la calculas con <b>Pitágoras</b> a partir de la altura y la apotema de la base.</p>`,
      svg: svg("Desarrollo plano de un cubo en forma de cruz: seis cuadrados", `${[[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].map(([c, r], i) => `<rect x="${50 + c * 40}" y="${20 + r * 40}" width="40" height="40" fill="${i === 2 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i === 2 ? 0.3 : 1}" stroke="var(--pen)" stroke-width="2"/>`).join("")}${t(130, 160, "desarrollo del cubo: 6 caras", { s: 12 })}${t(130, 176, "A = 6 · l²", { c: "var(--pen)", s: 12 })}`),
    },
    {
      html: `<h3>Área del cilindro, el cono y la esfera</h3><ul><li><b>Cilindro</b> de radio r y altura h: su desarrollo son dos círculos y un rectángulo cuyo largo es la longitud de la circunferencia (2πr). <mark>A = 2πrh + 2πr²</mark>.</li><li><b>Cono</b> de radio r y generatriz g (la distancia del vértice al borde de la base): A<sub>lateral</sub> = πrg; <mark>A = πrg + πr²</mark>. Se cumple g² = h² + r².</li><li><b>Esfera</b> de radio r: <mark>A = 4πr²</mark>, el área de cuatro círculos máximos.</li></ul><p>Ejemplo: una lata de r = 3 cm y h = 11 cm tiene A = 2π · 3 · 11 + 2π · 9 = 66π + 18π = 84π ≈ <b>264 cm²</b> de chapa.</p>`,
      svg: svg("Desarrollo plano de un cilindro: un rectángulo de base 2πr y altura h y dos círculos", `<rect x="60" y="54" width="150" height="70" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><circle cx="100" cy="32" r="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="100" cy="146" r="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>
        ${t(150, 94, "2πr · h", { c: "var(--leaf)", s: 13 })}${t(222, 94, "h", { c: "var(--muted)", s: 12, a: "start" })}${t(100, 36, "πr²", { c: "var(--pen)", s: 11 })}${t(100, 150, "πr²", { c: "var(--pen)", s: 11 })}${t(178, 140, "base = 2πr", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>El volumen y sus unidades</h3><p>El <b>volumen</b> es el espacio que ocupa un cuerpo. Se mide en unidades cúbicas: el <b>metro cúbico (m³)</b> es un cubo de 1 m de arista. Cada unidad es <mark>1.000 veces</mark> la siguiente: 1 m³ = 1.000 dm³; 1 dm³ = 1.000 cm³.</p><p>La <b>capacidad</b> (lo que cabe dentro) se mide en litros, y se relaciona así:</p>${tabla(["Volumen", "Capacidad"], [["1 m³", "1.000 L (1 kL)"], ["1 dm³", "1 L"], ["1 cm³", "1 mL"]])}<p>Un brik de 1 L ocupa 1 dm³; una piscina de 50 m³ contiene 50.000 L.</p>`,
    },
    {
      html: `<h3>Volumen de prismas, cilindros, pirámides, conos y esferas</h3>${tabla(["Cuerpo", "Volumen"], [["Prisma y cilindro", "V = A<sub>base</sub> · h (cilindro: πr²h)"], ["Ortoedro / cubo", "V = a · b · c / V = l³"], ["Pirámide y cono", "V = A<sub>base</sub> · h : 3 (cono: πr²h/3)"], ["Esfera", "V = 4/3 · πr³"]])}<p>Una pirámide ocupa exactamente <b>un tercio</b> del prisma con la misma base y altura; y un cono, un tercio del cilindro. Se puede comprobar llenando de arena un cono y vaciándolo tres veces en el cilindro.</p><p>Ejemplo: un cucurucho cónico de r = 3 cm y h = 10 cm: V = π · 9 · 10 : 3 = 30π ≈ <b>94 cm³</b>.</p>`,
      video: { id: "MdU1V7GiOlg", titulo: "Volumen de un cilindro", canal: "Daniel Carreón", vistas: 4397169 },
    },
    {
      html: `<h3>Problemas de áreas y volúmenes</h3><ul><li><b>Pintar una habitación</b> de 4 × 3 m y 2,5 m de alto (paredes y techo, sin suelo ni puertas): 2(4 + 3) · 2,5 + 12 = 47 m².</li><li><b>Llenar un depósito</b> cilíndrico de r = 1 m y h = 2 m: V = π · 1 · 2 ≈ 6,28 m³ = 6.280 L.</li><li><b>Comparar envases</b>: una caja de 10 × 6 × 16 cm contiene 960 cm³ (casi 1 L).</li><li><b>Balón</b> de r = 11 cm: A ≈ 1.520 cm² de cuero y V ≈ 5.575 cm³ de aire.</li></ul><p>Fíjate en qué pide el problema: <b>área</b> si se trata de cubrir, pintar o envolver; <b>volumen</b> si se trata de llenar o de cuánto cabe.</p>`,
    },
  ],
  figura: {
    titulo: "Cuerpos geométricos en un vistazo",
    svg: filas("Resumen: Euler, área del prisma, de la pirámide, del cilindro, del cono y de la esfera, y volúmenes", [["Euler", "C + V = A + 2", "var(--ink)"], ["Prisma", "A = A_lat + 2A_base · V = A_base · h", "var(--pen)"], ["Pirámide", "V = A_base · h : 3", "var(--sun)"], ["Cilindro", "A = 2πrh + 2πr² · V = πr²h", "var(--leaf)"], ["Cono", "A = πrg + πr² · V = πr²h/3", "var(--red)"], ["Esfera", "A = 4πr² · V = 4/3 πr³", "var(--inf)"]], 160),
  },
  video: { id: "n0j1XwaroHs", titulo: "Volumen de prismas", canal: "Daniel Carreón", vistas: 7735623, megusta: 0, busqueda: "áreas y volúmenes de cuerpos geométricos" },
  quiz: mezcla([
    { q: "¿Cuál es un cuerpo de redondeo?", o: ["el cono", "el prisma", "el tetraedro"], a: 0, e: "Tiene superficie curva." },
    { q: "¿Cuántos poliedros regulares hay?", o: ["5", "6", "infinitos"], a: 0, e: "Sólidos platónicos." },
    { q: "Un octaedro tiene caras…", o: ["triangulares", "cuadradas", "pentagonales"], a: 0, e: "8 triángulos." },
    { q: "Un prisma pentagonal tiene… caras", o: ["7", "5", "10"], a: 0, e: "5 laterales + 2 bases." },
    { q: "Si un poliedro tiene 6 caras y 8 vértices, tiene… aristas", o: ["12", "14", "10"], a: 0, e: "6 + 8 = A + 2." },
    { q: "El área de un cubo de arista 3 cm es…", o: ["54 cm²", "27 cm²", "9 cm²"], a: 0, e: "6 · 9." },
    { q: "El volumen de un cubo de arista 3 cm es…", o: ["27 cm³", "54 cm³", "9 cm³"], a: 0, e: "3³." },
    { q: "1 dm³ equivale a…", o: ["1 L", "1 mL", "1.000 L"], a: 0, e: "Un brik." },
    { q: "La pirámide ocupa … del prisma de igual base y altura.", o: ["un tercio", "la mitad", "el doble"], a: 0, e: "V = A·h/3." },
    { q: "El área de la esfera es…", o: ["4πr²", "πr²", "4/3 πr³"], a: 0, e: "Cuatro círculos máximos." },
  ]),
  examen: mezcla([
    { q: "Volumen de un cilindro de r = 2 cm y h = 5 cm:", o: ["20π cm³", "10π cm³", "40π cm³"], a: 0, e: "π · 4 · 5." },
    { q: "Una piscina de 10 × 5 × 2 m contiene…", o: ["100.000 L", "100 L", "10.000 L"], a: 0, e: "100 m³." },
    { q: "Un cono de r = 6 y h = 8 tiene generatriz…", o: ["10", "14", "√28"], a: 0, e: "√(36 + 64)." },
  ]),
  feynman: ["Diferencia entre poliedros y cuerpos de redondeo", "Qué dice la fórmula de Euler", "Cómo ayuda el desarrollo plano a calcular áreas", "Por qué la pirámide es un tercio del prisma", "Relación entre dm³ y litros"],
  mapa: mapa("CUERPOS GEOMÉTRICOS", "var(--eso)", [
    ["Poliedros", "prismas · pirámides · regulares", "var(--pen)"],
    ["Redondeo", "cilindro · cono · esfera", "var(--leaf)"],
    ["Áreas", "desarrollo plano", "var(--sun)"],
    ["Volúmenes", "A_base · h · ÷ 3", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Poliedro", "Cuerpo con todas las caras planas (polígonos)."],
    ["Fórmula de Euler", "C + V = A + 2."],
    ["Poliedros regulares", "Tetraedro, cubo, octaedro, dodecaedro e icosaedro."],
    ["Área del prisma", "Perímetro base · h + 2 · A base."],
    ["Área del cilindro", "2πrh + 2πr²."],
    ["Volumen prisma y cilindro", "A base · h."],
    ["Volumen pirámide y cono", "A base · h : 3."],
    ["Esfera", "A = 4πr²; V = 4/3 πr³."],
  ],
  familias: ["Desmontad una caja de cereales y medid su desarrollo plano para calcular el cartón.", "Calculad cuántos litros caben en un cubo, una maceta o una pecera.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Poliedros y cuerpos de revolución; fórmula de Euler; desarrollos planos; áreas y volúmenes de prismas, pirámides, cilindros, conos y esferas; unidades de volumen y capacidad (RD 217/2022, Matemáticas, sentido de la medida y espacial).",
    ideas: ["Construir los cinco poliedros regulares con cartulina.", "Experimento de arena para comprobar V cono = V cilindro / 3.", "Proyecto de diseño de un envase con la mínima cantidad de material."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): cuerpos geométricos", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el área total y el volumen de una pirámide cuadrangular regular de base 6 cm y altura 4 cm.", pasos: ["Apotema de la pirámide (Pitágoras): √(4² + 3²) = 5 cm.", "A lateral = 4 · 6 · 5 : 2 = 60 cm²; A base = 36 cm²; A total = 96 cm².", "V = 36 · 4 : 3 = 48 cm³."], resultado: "A = 96 cm²; V = 48 cm³." },
    { enunciado: "Un depósito cilíndrico tiene 1,2 m de diámetro y 1,5 m de altura. ¿Cuántos litros caben?", pasos: ["r = 0,6 m.", "V = π · 0,36 · 1,5 ≈ 1,696 m³.", "1,696 m³ = 1.696 L."], resultado: "Unos 1.696 litros." },
    { enunciado: "Comprueba la fórmula de Euler en un prisma triangular.", pasos: ["Caras: 3 laterales + 2 bases = 5.", "Vértices: 3 + 3 = 6. Aristas: 3 + 3 + 3 = 9.", "5 + 6 = 11 = 9 + 2."], resultado: "Se cumple: 11 = 11." },
  ],
  errores: [
    "Confundir la altura de la pirámide con su apotema.",
    "Olvidar las dos bases en el área total del prisma o del cilindro.",
    "No dividir entre 3 en el volumen de la pirámide o del cono.",
    "Usar el diámetro en lugar del radio en las fórmulas.",
    "Convertir unidades de volumen como si fueran de longitud (× 10 en lugar de × 1.000).",
    "Calcular el área cuando el problema pregunta cuánto cabe.",
  ],
  ejercicios: [
    { q: "Clasifica: lata, dado, balón, tienda de campaña canadiense, cucurucho.", sol: "Cilindro, cubo (poliedro), esfera, prisma triangular, cono." },
    { q: "Un poliedro tiene 12 vértices y 30 aristas. ¿Cuántas caras tiene? ¿Cuál puede ser?", sol: "C = 30 + 2 − 12 = 20: el icosaedro." },
    { q: "Calcula el área total de un ortoedro de 8 × 5 × 3 cm.", sol: "2(40 + 24 + 15) = 158 cm²." },
    { q: "Calcula el área total de un cilindro de r = 4 cm y h = 10 cm.", sol: "80π + 32π = 112π ≈ 351,9 cm²." },
    { q: "Calcula el área total de un cono de r = 5 cm y g = 13 cm, y su altura.", sol: "65π + 25π = 90π ≈ 282,7 cm²; h = 12 cm." },
    { q: "Calcula el área y el volumen de una esfera de r = 3 cm.", sol: "A = 36π ≈ 113,1 cm²; V = 36π ≈ 113,1 cm³." },
    { q: "Calcula el volumen de un prisma hexagonal regular con área de la base 41,6 cm² y altura 10 cm.", sol: "416 cm³." },
    { q: "Calcula el volumen de un cono de r = 3 cm y h = 7 cm.", sol: "21π ≈ 66 cm³." },
    { q: "Expresa en litros: 2,5 m³; 750 cm³; 3 dm³.", sol: "2.500 L; 0,75 L; 3 L." },
    { q: "Un acuario de 60 × 30 × 40 cm se llena hasta 5 cm del borde. ¿Cuántos litros contiene?", sol: "60 · 30 · 35 = 63.000 cm³ = 63 L." },
  ],
};

  return module.exports;
})();

P["decimales"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: números decimales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números decimales",
  minutos: 55,
  objetivos: ["Leer, ordenar y redondear números decimales", "Operar con decimales: sumar, restar, multiplicar y dividir", "Clasificar decimales en exactos, periódicos puros y mixtos", "Pasar de fracción a decimal y de decimal a fracción"],
  claves: ["parte entera", "décima", "centésima", "redondeo", "decimal periódico", "fracción generatriz"],
  pregunta: {
    texto: "Si divides 1 entre 3 con la calculadora sale 0,3333333. ¿Se acaba alguna vez ese número?",
    respuesta: "No: es un <b>decimal periódico</b>, el 3 se repite <mark>infinitas veces</mark> y se escribe 0,3̂ (con un arco sobre el 3). La calculadora corta porque no tiene sitio. Ese número es exactamente la fracción 1/3, que se llama su <b>fracción generatriz</b>.",
  },
  bloques: [
    {
      html: `<h3>Las cifras decimales</h3><p>Un número decimal tiene una <b>parte entera</b> y una <b>parte decimal</b>, separadas por una coma. Cada cifra decimal vale diez veces menos que la de su izquierda:</p>${tabla(["Unidades", "décimas", "centésimas", "milésimas"], [["1", "0,1", "0,01", "0,001"], ["3", "4", "0", "7"]])}<p>El número 3,407 se lee «3 unidades y 407 milésimas». Añadir ceros a la derecha de la última cifra decimal <b>no cambia</b> el número: 2,5 = 2,50 = 2,500.</p>`,
    },
    {
      html: `<h3>Ordenar y redondear</h3><p>Para <b>comparar</b> decimales se mira primero la parte entera; si es igual, las décimas, después las centésimas… Truco: iguala el número de cifras decimales con ceros. 2,4 y 2,38 → 2,40 &gt; 2,38.</p><p>Para <b>redondear</b> a una cifra, se mira la siguiente: si es <b>5 o más</b>, se sube una unidad; si es menor que 5, se deja igual.</p><ul><li>3,746 a las décimas → 3,7 (la siguiente es 4).</li><li>3,746 a las centésimas → 3,75 (la siguiente es 6).</li></ul><p>El <b>truncamiento</b>, en cambio, corta sin mirar: 3,746 truncado a las décimas es 3,7. El error que se comete al aproximar es la diferencia con el valor exacto.</p>`,
      svg: (() => { const r = recta(3, 4, 96, 30, 230, [[3.746, "", "var(--red)"]], { num: false }); let s = r.s; for (let i = 0; i <= 10; i++) s += `<path d="M${r.X(3 + i / 10)} 90 V 102" stroke="var(--muted)" stroke-width="1"/>`; return svg("Recta de 3 a 4 dividida en décimas; 3,746 está más cerca de 3,7 que de 3,8", `${s}${t(r.X(3), 122, "3", { s: 12 })}${t(r.X(4), 122, "4", { s: 12 })}${t(r.X(3.7), 122, "3,7", { c: "var(--leaf)", s: 11 })}${t(r.X(3.8), 122, "3,8", { c: "var(--muted)", s: 11 })}${t(r.X(3.746), 72, "3,746", { c: "var(--red)", s: 12 })}${t(130, 158, "redondeo a décimas: 3,7", { s: 13 })}`); })(),
    },
    {
      html: `<h3>Sumar y restar decimales</h3><p>Se colocan los números <mark>con las comas en columna</mark> (unidades bajo unidades, décimas bajo décimas…), se rellenan con ceros si hace falta y se opera como con naturales. La coma del resultado va en la misma columna.</p>${tabla(["", "", ""], [["", "12,50", "← se añade un 0"], ["+", "3,78", ""], ["=", "16,28", ""]])}<p>Ejemplo de resta: 7 − 2,35 = 7,00 − 2,35 = 4,65.</p>`,
    },
    {
      html: `<h3>Multiplicar decimales</h3><p>Se multiplica como si no hubiera comas y, al final, se separan en el resultado <mark>tantas cifras decimales como tengan entre los dos factores</mark>. 2,3 · 1,25: 23 · 125 = 2.875; hay 1 + 2 = 3 decimales → <b>2,875</b>.</p><p>Multiplicar por 10, 100, 1.000… desplaza la coma 1, 2, 3… lugares a la <b>derecha</b>: 4,567 · 100 = 456,7. Dividir por la unidad seguida de ceros la desplaza a la <b>izquierda</b>: 45,2 : 1.000 = 0,0452.</p>`,
      video: { id: "shXj-YCWWeM", titulo: "Multiplicación con decimales", canal: "Daniel Carreón", vistas: 9110388 },
    },
    {
      html: `<h3>Dividir decimales</h3><ul><li><b>Decimal entre entero</b>: se divide normalmente y se pone la coma en el cociente al bajar la primera cifra decimal. 7,5 : 3 = 2,5.</li><li><b>Divisor decimal</b>: se multiplican dividendo y divisor por la unidad seguida de tantos ceros como decimales tenga el divisor, para que el divisor sea entero. 4,2 : 0,06 → 420 : 6 = <b>70</b>.</li></ul><p>Si la división no es exacta, se pueden sacar decimales añadiendo ceros al resto. Fíjate: dividir entre un número menor que 1 da un resultado <b>mayor</b> que el dividendo.</p>`,
      video: { id: "zB9nPRg4fp0", titulo: "Cómo dividir números decimales", canal: "academia JAF", vistas: 5203908 },
    },
    {
      html: `<h3>Tipos de números decimales</h3><p>Al dividir el numerador de una fracción entre su denominador se obtiene un decimal de uno de estos tipos:</p>${tabla(["Tipo", "Cómo es", "Ejemplo"], [["Exacto", "tiene un número finito de cifras decimales", "3/4 = 0,75"], ["Periódico puro", "el periodo empieza justo tras la coma", "4/11 = 0,363636… = 0,3̂6̂"], ["Periódico mixto", "hay cifras antes del periodo (anteperiodo)", "1/6 = 0,1666… = 0,16̂"]])}<p>Una fracción irreducible da un decimal exacto solo si su denominador tiene como factores primos únicamente <b>2 y 5</b>: 7/20 = 0,35 (20 = 2² · 5), pero 7/15 es periódico (15 = 3 · 5).</p>`,
      svg: svg("Clasificación de los decimales: exactos y periódicos, que pueden ser puros o mixtos", `${t(130, 30, "decimales de una fracción", { s: 13 })}<path d="M130 38 L 70 62 M130 38 L 190 62 M190 86 L 150 112 M190 86 L 230 112" stroke="var(--line)" stroke-width="2.5"/>
        <rect x="24" y="62" width="92" height="26" rx="8" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(70, 80, "exactos", { c: "var(--leaf)", s: 12 })}
        <rect x="144" y="62" width="92" height="26" rx="8" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(190, 80, "periódicos", { c: "var(--pen)", s: 12 })}
        <rect x="112" y="112" width="70" height="26" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>${t(147, 130, "puros", { c: "var(--sun)", s: 12 })}<rect x="192" y="112" width="62" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>${t(223, 130, "mixtos", { c: "var(--red)", s: 12 })}
        ${t(70, 112, "0,75", { s: 12 })}${t(147, 160, "0,3636…", { s: 11 })}${t(223, 160, "0,1666…", { s: 11 })}`),
    },
    {
      html: `<h3>De decimal a fracción: la fracción generatriz</h3><ul><li><b>Exacto</b>: en el numerador, el número sin coma; en el denominador, un 1 seguido de tantos ceros como cifras decimales. 0,35 = 35/100 = 7/20.</li><li><b>Periódico puro</b>: numerador = número sin coma hasta el final del periodo menos la parte entera; denominador = tantos <b>9</b> como cifras tenga el periodo. 2,4̂ = (24 − 2)/9 = 22/9.</li><li><b>Periódico mixto</b>: numerador = número sin coma hasta el final del periodo menos el número sin coma hasta antes del periodo; denominador = tantos <b>9</b> como cifras del periodo seguidos de tantos <b>0</b> como cifras del anteperiodo. 0,16̂ = (16 − 1)/90 = 15/90 = 1/6.</li></ul><p>Curiosidad: 0,9̂ = 9/9 = 1.</p>`,
      video: { id: "HgLY1hHF1JQ", titulo: "Convertir decimal periódico puro a fracción", canal: "Matemáticas profe Alex", vistas: 2929578 },
    },
    {
      html: `<h3>Decimales en la vida diaria</h3><p>Los decimales están en los <b>precios</b> (1,95 €), las <b>medidas</b> (1,68 m), los <b>tiempos</b> deportivos (9,58 s) y las <b>notas</b>. Al trabajar con ellos conviene:</p><ul><li><b>Estimar</b> antes de calcular: 3,9 · 2,1 debe dar cerca de 4 · 2 = 8 (sale 8,19).</li><li>Redondear el resultado a una precisión con sentido: los euros, a céntimos; un precio unitario de 2,3333… € se deja en 2,33 €.</li><li>Recordar que en muchos países se usa el <b>punto</b> en lugar de la coma (3.5 = 3,5) y que las calculadoras y hojas de cálculo pueden usar cualquiera de los dos.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Decimales en un vistazo",
    svg: filas("Resumen: comas en columna para sumar, contar decimales para multiplicar, divisor entero para dividir, exactos y periódicos, fracción generatriz con nueves y ceros", [["+ y −", "comas en columna", "var(--pen)"], ["·", "se cuentan los decimales de los factores", "var(--leaf)"], [":", "se hace entero el divisor", "var(--sun)"], ["Redondear", "si la siguiente es 5 o más, se sube", "var(--inf)"], ["Tipos", "exactos · periódicos puros · mixtos", "var(--red)"], ["Generatriz", "nueves por el periodo, ceros por el anteperiodo", "var(--ink)"]], 200),
  },
  video: { id: "PZOgxa-gJ90", titulo: "Clasificación de los decimales", canal: "Daniel Carreón", vistas: 2064899, megusta: 0, busqueda: "decimal periódico a fracción" },
  quiz: mezcla([
    { q: "En 5,382 la cifra 8 son…", o: ["centésimas", "décimas", "milésimas"], a: 0, e: "Segunda cifra decimal." },
    { q: "¿Cuál es mayor?", o: ["0,7", "0,69", "0,099"], a: 0, e: "0,70 > 0,69." },
    { q: "6,48 redondeado a las décimas es…", o: ["6,5", "6,4", "6"], a: 0, e: "La siguiente es 8." },
    { q: "1,2 · 0,3 =", o: ["0,36", "3,6", "0,036"], a: 0, e: "Dos decimales." },
    { q: "5,7 · 100 =", o: ["570", "57", "0,057"], a: 0, e: "Dos lugares a la derecha." },
    { q: "3 : 0,5 =", o: ["6", "1,5", "0,6"], a: 0, e: "30 : 5." },
    { q: "1/8 en decimal es…", o: ["0,125 (exacto)", "0,8", "0,125125… (periódico)"], a: 0, e: "8 = 2³." },
    { q: "0,272727… es un decimal…", o: ["periódico puro", "periódico mixto", "exacto"], a: 0, e: "El periodo empieza tras la coma." },
    { q: "La fracción generatriz de 0,4 es…", o: ["2/5", "4/9", "1/4"], a: 0, e: "4/10." },
    { q: "La fracción generatriz de 0,5̂ es…", o: ["5/9", "1/2", "5/90"], a: 0, e: "Un nueve por una cifra de periodo." },
  ]),
  examen: mezcla([
    { q: "La fracción generatriz de 1,23̂ (periodo 3) es…", o: ["111/90", "123/99", "122/99"], a: 0, e: "(123 − 12)/90." },
    { q: "7/12 da un decimal…", o: ["periódico mixto", "exacto", "periódico puro"], a: 0, e: "12 = 2² · 3: 0,58333…" },
    { q: "Tres cuadernos cuestan 7 €. Un cuaderno cuesta…", o: ["2,33 €", "2,30 €", "2,34 €"], a: 0, e: "2,333… redondeado." },
  ]),
  feynman: ["Qué valor tiene cada cifra decimal", "Cómo se redondea un decimal", "Dónde se pone la coma al multiplicar", "Qué hay que hacer si el divisor es decimal", "Cómo se calcula la fracción generatriz de un periódico"],
  mapa: mapa("DECIMALES", "var(--eso)", [
    ["Cifras", "décimas · centésimas · milésimas", "var(--pen)"],
    ["Operar", "comas en columna · contar decimales", "var(--leaf)"],
    ["Tipos", "exactos · periódicos", "var(--red)"],
    ["Generatriz", "nueves y ceros", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["Décima", "0,1: la unidad dividida en 10 partes."],
    ["Redondear", "Si la cifra siguiente es 5 o más, se sube una unidad."],
    ["Multiplicar decimales", "El resultado tiene tantas cifras decimales como los factores juntos."],
    ["Divisor decimal", "Se multiplican los dos por 10, 100… hasta que el divisor sea entero."],
    ["Decimal exacto", "Número finito de cifras decimales."],
    ["Periódico puro", "El periodo empieza justo después de la coma."],
    ["Periódico mixto", "Tiene anteperiodo antes del periodo."],
    ["Fracción generatriz", "Fracción de la que sale un decimal."],
  ],
  familias: ["En el súper, estimad el total de la compra antes de pagar y comparadlo con el tique.", "Calculad el precio por kilo de dos envases distintos para ver cuál sale mejor.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números decimales: orden, aproximación y error; operaciones; decimales exactos y periódicos; fracción generatriz (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Tiques de compra reales para sumar y estimar.", "Investigar con la calculadora qué denominadores dan decimales exactos.", "Tiempos de atletismo ordenados por décimas y centésimas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números decimales", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 12,6 − 3,45 · 2 + 1,8 : 0,6.", pasos: ["Productos y cocientes: 3,45 · 2 = 6,9; 1,8 : 0,6 = 18 : 6 = 3.", "12,6 − 6,9 + 3.", "= 8,7."], resultado: "8,7" },
    { enunciado: "Halla la fracción generatriz de 2,15̂ (solo se repite el 5).", pasos: ["Número hasta el final del periodo: 215; antes del periodo: 21.", "Una cifra de periodo (9) y una de anteperiodo (0): 90.", "(215 − 21)/90 = 194/90 = 97/45."], resultado: "97/45" },
    { enunciado: "Un coche gasta 6,4 litros cada 100 km. ¿Cuánto cuesta un viaje de 350 km si el litro vale 1,62 €?", pasos: ["Litros: 6,4 · 3,5 = 22,4 L.", "Coste: 22,4 · 1,62 = 36,288 €.", "Redondeado a céntimos: 36,29 €."], resultado: "Unos 36,29 €." },
  ],
  errores: [
    "Pensar que 0,15 es mayor que 0,8 porque 15 es mayor que 8.",
    "Sumar decimales sin alinear las comas.",
    "Al multiplicar, poner en el resultado las mismas cifras decimales que un solo factor.",
    "Dividir entre un decimal sin multiplicar también el dividendo.",
    "En la generatriz de un periódico mixto, olvidar los ceros del denominador.",
    "Redondear mirando todas las cifras en cadena en lugar de solo la siguiente.",
  ],
  ejercicios: [
    { q: "Ordena de menor a mayor: 2,05; 2,5; 2,055; 2,49.", sol: "2,05 < 2,055 < 2,49 < 2,5." },
    { q: "Redondea 15,3851 a las unidades, décimas, centésimas y milésimas.", sol: "15; 15,4; 15,39; 15,385." },
    { q: "Calcula: 8,07 + 12,9 − 5,346.", sol: "15,624." },
    { q: "Calcula: 4,25 · 0,8 y 0,03 · 0,7.", sol: "3,4 y 0,021." },
    { q: "Calcula: 9,36 : 4 y 2,52 : 0,12.", sol: "2,34 y 252 : 12 = 21." },
    { q: "Clasifica: 5/8, 2/9, 5/6, 13/25.", sol: "Exacto (0,625), periódico puro (0,2̂), mixto (0,83̂), exacto (0,52)." },
    { q: "Halla la fracción generatriz de 0,48 y de 3,7̂.", sol: "48/100 = 12/25; (37 − 3)/9 = 34/9." },
    { q: "Halla la fracción generatriz de 0,52̂1̂ (periodo 21).", sol: "(521 − 5)/990 = 516/990 = 86/165." },
    { q: "Un kilo de tomates cuesta 2,35 €. ¿Cuánto cuestan 1,6 kg?", sol: "2,35 · 1,6 = 3,76 €." },
    { q: "Una botella de 1,5 L cuesta 0,96 € y un pack de 6 latas de 0,33 L cuesta 2,40 €. ¿Qué sale más barato por litro?", sol: "Botella: 0,64 €/L. Latas: 1,98 L, 1,21 €/L. La botella." },
  ],
};

  return module.exports;
})();

P["divisibilidad"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: divisibilidad, mcm y mcd. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Divisibilidad: mcm y mcd",
  minutos: 55,
  objetivos: ["Reconocer múltiplos y divisores y aplicar los criterios de divisibilidad", "Distinguir números primos y compuestos", "Descomponer un número en factores primos", "Calcular el mcm y el mcd y usarlos para resolver problemas"],
  claves: ["múltiplo", "divisor", "número primo", "factorización", "mínimo común múltiplo", "máximo común divisor"],
  pregunta: {
    texto: "Un autobús pasa cada 12 minutos y otro cada 18. Si acaban de coincidir en la parada, ¿cuándo volverán a coincidir?",
    respuesta: "Dentro de <mark>36 minutos</mark>, que es el <b>mínimo común múltiplo</b> de 12 y 18. El primero pasa a los 12, 24, 36… y el segundo a los 18, 36… El primer número que aparece en las dos listas es el 36.",
  },
  bloques: [
    {
      html: `<h3>Múltiplos y divisores</h3><p>Un número <b>a</b> es <b>múltiplo</b> de <b>b</b> si se obtiene multiplicando b por un natural: 35 es múltiplo de 7 porque 7 · 5 = 35. Los múltiplos de un número son <mark>infinitos</mark>: los de 6 son 6, 12, 18, 24…</p><p>Al revés, <b>b</b> es <b>divisor</b> de <b>a</b> si la división a : b es <b>exacta</b> (resto 0). Los divisores de un número son <mark>finitos</mark>: los de 12 son 1, 2, 3, 4, 6 y 12. Para encontrarlos todos, se buscan por parejas: 1 · 12, 2 · 6, 3 · 4.</p><p>«7 es divisor de 35» y «35 es múltiplo de 7» dicen lo mismo; también se dice que 35 es <b>divisible</b> entre 7.</p>`,
      svg: svg("Doce cuadrados colocados en rectángulos de 1 por 12, 2 por 6 y 3 por 4: los divisores de 12", `${[...Array(12)].map((_, i) => `<rect x="${14 + i * 19}" y="24" width="17" height="17" rx="3" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)"/>`).join("")}
        ${[...Array(12)].map((_, i) => `<rect x="${20 + (i % 6) * 19}" y="${70 + Math.floor(i / 6) * 19}" width="17" height="17" rx="3" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)"/>`).join("")}
        ${[...Array(12)].map((_, i) => `<rect x="${160 + (i % 4) * 19}" y="${66 + Math.floor(i / 4) * 19}" width="17" height="17" rx="3" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)"/>`).join("")}
        ${t(130, 60, "1 × 12", { c: "var(--pen)", s: 12 })}${t(77, 128, "2 × 6", { c: "var(--leaf)", s: 12 })}${t(197, 140, "3 × 4", { c: "var(--sun)", s: 12 })}${t(130, 166, "divisores de 12: 1, 2, 3, 4, 6, 12", { s: 12 })}`),
    },
    {
      html: `<h3>Criterios de divisibilidad</h3><p>Permiten saber si una división es exacta <b>sin hacerla</b>:</p>${tabla(["Entre", "Es divisible si…", "Ejemplo"], [["2", "termina en 0 o cifra par", "348"], ["3", "la suma de sus cifras es múltiplo de 3", "471 → 4+7+1 = 12"], ["4", "sus dos últimas cifras son múltiplo de 4 o 00", "1.316 → 16"], ["5", "termina en 0 o 5", "2.045"], ["6", "es divisible entre 2 y entre 3", "534"], ["9", "la suma de sus cifras es múltiplo de 9", "3.483 → 18"], ["10", "termina en 0", "790"], ["11", "(suma cifras pares) − (suma impares) es 0 o múltiplo de 11", "2.937 → (2+3) − (9+7) = −11"]])}`,
      video: { id: "oWXy0k0xaa4", titulo: "Criterios de divisibilidad del 2 al 11", canal: "Academia Internet", vistas: 581086 },
    },
    {
      html: `<h3>Números primos y compuestos</h3><p>Un número <b>primo</b> solo tiene <mark>dos divisores</mark>: el 1 y él mismo. Los primos menores que 50 son 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 y 47. El 2 es el único primo par.</p><p>Un número <b>compuesto</b> tiene más de dos divisores: 15 = 3 · 5. El <b>1</b> no es primo ni compuesto.</p><p>Para saber si un número es primo, se divide entre los primos 2, 3, 5, 7… hasta que el cociente sea menor que el divisor. Si ninguna división es exacta, es primo. Ejemplo: 97 no es divisible entre 2, 3, 5 ni 7, y 97 : 11 da 8, menor que 11, así que <b>97 es primo</b>.</p><p>La <b>criba de Eratóstenes</b> es un método antiguo para encontrar los primos de una tabla: se tachan los múltiplos de 2, de 3, de 5, de 7…, y los que quedan sin tachar son primos.</p>`,
    },
    {
      html: `<h3>Descomposición en factores primos</h3><p>Todo número compuesto se puede escribir como <b>producto de primos</b> de una sola forma. Se divide entre el primo más pequeño posible, una y otra vez, hasta llegar a 1:</p>${tabla(["Número", "Primo"], [["360", "2"], ["180", "2"], ["90", "2"], ["45", "3"], ["15", "3"], ["5", "5"], ["1", ""]])}<p>Así, <mark>360 = 2³ · 3² · 5</mark>. Se escribe con potencias para abreviar. Comprobación: 8 · 9 · 5 = 360.</p>`,
      svg: svg("Árbol de factores de 60: 60 es 6 por 10, 6 es 2 por 3 y 10 es 2 por 5; 60 = 2² · 3 · 5", `<g stroke="var(--line)" stroke-width="2.5"><path d="M130 40 L 80 76 M130 40 L 180 76 M80 90 L 52 126 M80 90 L 108 126 M180 90 L 152 126 M180 90 L 208 126"/></g>
        <circle cx="130" cy="34" r="16" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${t(130, 39, "60", { c: "var(--pen)", s: 13 })}
        <circle cx="80" cy="86" r="14" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>${t(80, 91, "6", { s: 13 })}<circle cx="180" cy="86" r="14" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>${t(180, 91, "10", { s: 13 })}
        ${[[52, "2"], [108, "3"], [152, "2"], [208, "5"]].map(([x, n]) => `<circle cx="${x}" cy="134" r="13" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>${t(x, 139, n, { c: "var(--leaf)", s: 13 })}`).join("")}
        ${t(130, 170, "60 = 2² · 3 · 5", { s: 14 })}`),
    },
    {
      html: `<h3>El mínimo común múltiplo (mcm)</h3><p>El <b>mcm</b> de varios números es el <mark>menor de sus múltiplos comunes</mark> (sin contar el 0). Con números pequeños se pueden escribir los múltiplos: de 4 → 4, 8, <b>12</b>, 16…; de 6 → 6, <b>12</b>, 18… mcm(4, 6) = 12.</p><p>Con números grandes se usa la <b>factorización</b>: el mcm es el producto de los factores primos <b>comunes y no comunes</b>, cada uno con su <b>mayor exponente</b>.</p><p>Ejemplo: 12 = 2² · 3 y 18 = 2 · 3². mcm = 2² · 3² = <b>36</b>.</p>`,
      video: { id: "ADcPfyt6LvY", titulo: "Mínimo común múltiplo (mcm) con descomposición en factores", canal: "Susi Profe", vistas: 1012086 },
    },
    {
      html: `<h3>El máximo común divisor (mcd)</h3><p>El <b>mcd</b> de varios números es el <mark>mayor de sus divisores comunes</mark>. Divisores de 12: 1, 2, 3, <b>4</b>… 6, 12; divisores de 20: 1, 2, <b>4</b>, 5, 10, 20. mcd(12, 20) = 4.</p><p>Con factorización: el mcd es el producto de los factores primos <b>comunes</b>, cada uno con su <b>menor exponente</b>.</p><p>Ejemplo: 48 = 2⁴ · 3 y 180 = 2² · 3² · 5. mcd = 2² · 3 = <b>12</b>.</p><p>Si el mcd de dos números es 1, se dice que son <b>primos entre sí</b>, aunque no sean primos: 8 y 15.</p>`,
    },
    {
      html: `<h3>¿mcm o mcd? Cómo elegir</h3>${tabla(["", "mcm", "mcd"], [["Pregunta típica", "¿Cuándo vuelven a coincidir?", "¿Cuál es el trozo o grupo más grande?"], ["Idea", "repetir, juntar, ir hacia delante", "repartir, cortar, dividir en partes iguales"], ["Resultado", "mayor o igual que los números", "menor o igual que los números"], ["Factores", "comunes y no comunes, mayor exponente", "solo comunes, menor exponente"]])}<p>Un dato útil: para dos números, <mark>mcm(a, b) · mcd(a, b) = a · b</mark>. Con 12 y 18: 36 · 6 = 216 = 12 · 18.</p>`,
      video: { id: "TKxOWO7o6SQ", titulo: "Cuándo usar MCM y MCD en problemas", canal: "Susi Profe", vistas: 1043840 },
    },
    {
      html: `<h3>Problemas de mcm</h3><p>Se usan cuando algo se <b>repite</b> con ritmos distintos y se busca la <b>próxima coincidencia</b>:</p><ul><li>Dos faros se encienden cada 10 y cada 15 segundos. Coinciden cada mcm(10, 15) = <b>30 s</b>.</li><li>Ana va a la biblioteca cada 4 días y Luis cada 6. Si hoy coinciden, volverán a verse dentro de mcm(4, 6) = <b>12 días</b>.</li><li>¿Cuál es el menor número de baldosas de 20 cm y de 30 cm que forman un cuadrado? El lado debe ser mcm(20, 30) = 60 cm.</li></ul>`,
    },
    {
      html: `<h3>Problemas de mcd</h3><p>Se usan para <b>repartir</b> o <b>cortar</b> en partes iguales lo más grandes posible, sin que sobre nada:</p><ul><li>Hay dos cuerdas de 24 m y 36 m. Se quieren cortar trozos iguales lo más largos posible: mcd(24, 36) = <b>12 m</b>, que dan 2 + 3 = 5 trozos.</li><li>Una sala de 6 m × 8 m se cubre con baldosas cuadradas lo más grandes posible: lado = mcd(600, 800) = <b>200 cm</b>, es decir, 2 m; harán falta 3 · 4 = 12 baldosas.</li><li>Con 30 chicos y 42 chicas se forman equipos con el mismo número de chicos y de chicas, el mayor posible: mcd(30, 42) = <b>6 equipos</b>, con 5 chicos y 7 chicas cada uno.</li></ul>`,
      svg: svg("Dos cuerdas de 24 y 36 metros cortadas en trozos de 12 metros: 2 y 3 trozos", `${[0, 1].map((i) => `<rect x="${20 + i * 72}" y="50" width="70" height="18" rx="5" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>`).join("")}${[0, 1, 2].map((i) => `<rect x="${20 + i * 72}" y="100" width="70" height="18" rx="5" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>`).join("")}
        ${t(20, 40, "24 m", { c: "var(--pen)", s: 12, a: "start" })}${t(20, 92, "36 m", { c: "var(--leaf)", s: 12, a: "start" })}${t(55, 63, "12", { s: 11 })}${t(127, 63, "12", { s: 11 })}${t(55, 113, "12", { s: 11 })}${t(127, 113, "12", { s: 11 })}${t(199, 113, "12", { s: 11 })}${t(130, 156, "mcd(24, 36) = 12 m → 5 trozos", { s: 13 })}`),
    },
  ],
  figura: {
    titulo: "Divisibilidad en un vistazo",
    svg: filas("Resumen: múltiplos infinitos, divisores finitos, primo con dos divisores, factorización, mcm comunes y no comunes con mayor exponente, mcd comunes con menor exponente", [["Múltiplos", "infinitos: 6, 12, 18, 24…", "var(--pen)"], ["Divisores", "finitos: los de 12 son 1, 2, 3, 4, 6, 12", "var(--inf)"], ["Primo", "solo divisible entre 1 y él mismo", "var(--sun)"], ["Factorizar", "360 = 2³ · 3² · 5", "var(--ink)"], ["mcm", "comunes y no comunes, mayor exponente", "var(--leaf)"], ["mcd", "solo comunes, menor exponente", "var(--red)"]], 200),
  },
  video: { id: "NRJdBgOEjdI", titulo: "Mínimo común múltiplo, explicación fácil", canal: "Daniel Carreón", vistas: 5998615, megusta: 0, busqueda: "mcm y mcd descomposición factorial" },
  quiz: mezcla([
    { q: "¿Cuál es múltiplo de 7?", o: ["63", "27", "71"], a: 0, e: "7 · 9." },
    { q: "Los divisores de un número son…", o: ["finitos", "infinitos", "siempre primos"], a: 0, e: "No pasan del propio número." },
    { q: "¿Cuál es divisible entre 3?", o: ["2.517", "2.519", "1.024"], a: 0, e: "2+5+1+7 = 15." },
    { q: "¿Cuál es primo?", o: ["31", "51", "91"], a: 0, e: "51 = 3 · 17; 91 = 7 · 13." },
    { q: "El número 1 es…", o: ["ni primo ni compuesto", "primo", "compuesto"], a: 0, e: "Solo tiene un divisor." },
    { q: "La factorización de 72 es…", o: ["2³ · 3²", "2² · 3³", "2 · 36"], a: 0, e: "8 · 9." },
    { q: "mcm(8, 12) =", o: ["24", "4", "96"], a: 0, e: "2³ · 3." },
    { q: "mcd(18, 24) =", o: ["6", "72", "3"], a: 0, e: "2 · 3." },
    { q: "Para repartir en grupos iguales lo más grandes posible se usa…", o: ["el mcd", "el mcm", "la suma"], a: 0, e: "Cortar, repartir." },
    { q: "Si mcd(a, b) = 1, a y b son…", o: ["primos entre sí", "iguales", "múltiplos"], a: 0, e: "Como 8 y 15." },
  ]),
  examen: mezcla([
    { q: "Dos alarmas suenan cada 15 y 20 minutos. Si sonaron juntas a las 9:00, volverán a coincidir a las…", o: ["10:00", "9:35", "9:05"], a: 0, e: "mcm = 60 min." },
    { q: "mcd(2² · 3³ · 5, 2³ · 3 · 7) =", o: ["12", "2³ · 3³ · 5 · 7", "6"], a: 0, e: "2² · 3." },
    { q: "Si mcm(a, b) = 60, mcd(a, b) = 4 y a = 12, entonces b =", o: ["20", "15", "48"], a: 0, e: "60 · 4 : 12." },
  ]),
  feynman: ["Diferencia entre múltiplo y divisor", "Cómo saber si un número es primo", "Cómo se descompone un número en factores primos", "Cómo se calculan el mcm y el mcd", "Cuándo un problema es de mcm y cuándo de mcd"],
  mapa: mapa("DIVISIBILIDAD", "var(--eso)", [
    ["Múltiplos y divisores", "a = b · n · división exacta", "var(--pen)"],
    ["Primos", "solo 1 y él mismo", "var(--sun)"],
    ["mcm", "coincidir · mayor exponente", "var(--leaf)"],
    ["mcd", "repartir · menor exponente", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Múltiplo", "a es múltiplo de b si a = b · n."],
    ["Divisor", "b divide a a si la división es exacta."],
    ["Número primo", "Solo tiene dos divisores: 1 y él mismo."],
    ["Número compuesto", "Tiene más de dos divisores."],
    ["Factorización", "Escribir un número como producto de primos."],
    ["mcm", "Menor múltiplo común: factores comunes y no comunes, mayor exponente."],
    ["mcd", "Mayor divisor común: factores comunes, menor exponente."],
    ["Primos entre sí", "Números cuyo mcd es 1."],
  ],
  familias: ["Buscad coincidencias reales: horarios de autobuses, turnos, riegos de plantas…", "Jugad a decir si un número de matrícula es divisible entre 2, 3, 5 o 9.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Divisibilidad: múltiplos, divisores, criterios, números primos y compuestos, descomposición factorial, mcm y mcd y su aplicación a problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Criba de Eratóstenes en una tabla del 1 al 100.", "Rectángulos con cuadraditos para encontrar divisores.", "Clasificar problemas en «mcm» o «mcd» antes de resolverlos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): divisibilidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el mcm y el mcd de 60 y 84.", pasos: ["60 = 2² · 3 · 5; 84 = 2² · 3 · 7.", "mcm: comunes y no comunes con mayor exponente: 2² · 3 · 5 · 7 = 420.", "mcd: comunes con menor exponente: 2² · 3 = 12."], resultado: "mcm = 420; mcd = 12." },
    { enunciado: "Tres luces parpadean cada 6, 8 y 10 segundos. Si se encienden juntas, ¿cuándo vuelven a coincidir?", pasos: ["Es un problema de coincidencia: mcm.", "6 = 2 · 3; 8 = 2³; 10 = 2 · 5.", "mcm = 2³ · 3 · 5 = 120."], resultado: "Cada 120 segundos (2 minutos)." },
    { enunciado: "Un pastelero tiene 48 magdalenas y 72 galletas y quiere hacer bandejas iguales, con el máximo número de bandejas posible y sin que sobre nada. ¿Cuántas bandejas y qué lleva cada una?", pasos: ["Repartir en grupos iguales: mcd.", "48 = 2⁴ · 3; 72 = 2³ · 3²; mcd = 2³ · 3 = 24.", "48 : 24 = 2 magdalenas y 72 : 24 = 3 galletas."], resultado: "24 bandejas con 2 magdalenas y 3 galletas." },
  ],
  errores: [
    "Confundir múltiplo con divisor: 4 es divisor de 12, no múltiplo.",
    "Considerar el 1 como número primo.",
    "Dejar números compuestos en la factorización (60 = 4 · 15).",
    "En el mcm tomar solo los factores comunes, o en el mcd tomar también los no comunes.",
    "Usar el mcm en un problema de repartir o cortar.",
    "Sumar las cifras para comprobar la divisibilidad entre 4 o entre 5.",
  ],
  ejercicios: [
    { q: "Escribe los cinco primeros múltiplos de 9 y todos los divisores de 30.", sol: "9, 18, 27, 36, 45. Divisores de 30: 1, 2, 3, 5, 6, 10, 15, 30." },
    { q: "Indica si 5.430 es divisible entre 2, 3, 5, 9 y 10.", sol: "Entre 2, 3 (suma 12), 5 y 10 sí; entre 9 no." },
    { q: "¿Son primos 87, 89 y 91?", sol: "87 = 3 · 29 no; 89 sí; 91 = 7 · 13 no." },
    { q: "Descompón en factores primos 84, 150 y 504.", sol: "2² · 3 · 7; 2 · 3 · 5²; 2³ · 3² · 7." },
    { q: "Calcula mcm(15, 25) y mcd(15, 25).", sol: "mcm = 75; mcd = 5." },
    { q: "Calcula mcm(12, 30, 45) y mcd(12, 30, 45).", sol: "mcm = 2² · 3² · 5 = 180; mcd = 3." },
    { q: "¿Son primos entre sí 14 y 25? ¿Y 21 y 35?", sol: "14 y 25 sí (mcd = 1); 21 y 35 no (mcd = 7)." },
    { q: "Un barco sale cada 8 días y otro cada 12. Si salen juntos el 1 de marzo, ¿cuándo volverán a coincidir?", sol: "mcm = 24 días: el 25 de marzo." },
    { q: "Se quieren hacer ramos iguales con 36 rosas y 60 margaritas, el mayor número de ramos posible. ¿Cuántos ramos y con qué flores?", sol: "mcd = 12 ramos con 3 rosas y 5 margaritas." },
    { q: "Comprueba con 20 y 30 que mcm · mcd = a · b.", sol: "mcm = 60, mcd = 10; 60 · 10 = 600 = 20 · 30." },
  ],
};

  return module.exports;
})();

P["ecuaciones"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: ecuaciones de primer grado. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer grado",
  minutos: 60,
  objetivos: ["Distinguir igualdad, identidad y ecuación", "Resolver ecuaciones de primer grado con paréntesis y denominadores", "Comprobar una solución", "Plantear y resolver problemas con ecuaciones"],
  claves: ["ecuación", "incógnita", "solución", "miembro", "transposición", "ecuación equivalente"],
  pregunta: {
    texto: "Una camiseta y una gorra cuestan 30 € en total, y la camiseta cuesta 12 € más que la gorra. ¿Cuánto cuesta la gorra?",
    respuesta: "Si la gorra cuesta x, la camiseta cuesta x + 12, y entre las dos: x + x + 12 = 30. Entonces 2x = 18 y <mark>x = 9 €</mark>. Mucha gente dice 18 € sin pensar, pero entonces la camiseta costaría 30 € y el total sería 48 €. Una ecuación ordena el razonamiento y evita estos errores.",
  },
  bloques: [
    {
      html: `<h3>Igualdades, identidades y ecuaciones</h3><p>Una <b>igualdad algebraica</b> son dos expresiones unidas por el signo =. Puede ser:</p><ul><li>Una <b>identidad</b>, si se cumple para <b>cualquier</b> valor de las letras: 2(x + 1) = 2x + 2.</li><li>Una <b>ecuación</b>, si solo se cumple para <b>algunos</b> valores: x + 5 = 8 solo es cierta para x = 3.</li></ul><p>En una ecuación, la letra es la <b>incógnita</b>; lo que hay a cada lado del igual son los <b>miembros</b>; y cada sumando, un <b>término</b>. El valor que hace cierta la igualdad es la <b>solución</b>. Una ecuación es de <b>primer grado</b> si la incógnita aparece con exponente 1.</p>`,
    },
    {
      html: `<h3>La balanza: ecuaciones equivalentes</h3><p>Una ecuación es como una <b>balanza en equilibrio</b>. Si se hace lo mismo en los dos platillos, sigue equilibrada. Así se obtienen <b>ecuaciones equivalentes</b> (con la misma solución):</p><ul><li>Se puede <b>sumar o restar</b> el mismo número o expresión a los dos miembros.</li><li>Se pueden <b>multiplicar o dividir</b> los dos miembros por el mismo número distinto de 0.</li></ul><p>De ahí salen las reglas prácticas de <b>transposición</b>: un término que <b>suma</b> pasa al otro miembro <b>restando</b> (y al revés); un número que <b>multiplica</b> a todo un miembro pasa al otro <b>dividiendo</b> (y al revés).</p>`,
      svg: svg("Balanza en equilibrio con 3 cajas x y 2 pesas de 1 en un plato y 8 pesas en el otro: 3x + 2 = 8, x = 2", `<path d="M130 40 V 140 M90 150 H 170" stroke="var(--muted)" stroke-width="4"/><path d="M40 52 H 220" stroke="var(--ink)" stroke-width="4"/><circle cx="130" cy="40" r="6" fill="var(--ink)"/>
        <path d="M40 52 L 22 96 H 82 Z M220 52 L 178 96 H 238 Z" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
        ${[0, 1, 2].map((i) => `<rect x="${24 + i * 18}" y="70" width="16" height="16" rx="3" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="1.6"/>${t(32 + i * 18, 82, "x", { c: "var(--pen)", s: 10 })}`).join("")}${[0, 1].map((i) => `<circle cx="${34 + i * 16}" cy="62" r="6" fill="var(--sun)"/>`).join("")}
        ${[...Array(8)].map((_, i) => `<circle cx="${190 + (i % 4) * 13}" cy="${86 - Math.floor(i / 4) * 13}" r="6" fill="var(--sun)"/>`).join("")}
        ${t(52, 118, "3x + 2", { c: "var(--pen)", s: 13 })}${t(208, 118, "8", { c: "var(--sun)", s: 13 })}${t(130, 170, "3x = 6 → x = 2", { s: 13 })}`),
    },
    {
      html: `<h3>Ecuaciones sencillas</h3><p>El objetivo es <b>dejar la x sola</b> en un miembro. Ejemplo: 5x − 3 = 2x + 9.</p><ol><li>Se pasan las x a un miembro y los números al otro: 5x − 2x = 9 + 3.</li><li>Se reducen los términos semejantes: 3x = 12.</li><li>Se despeja: x = 12 : 3 = <b>4</b>.</li><li>Se <b>comprueba</b>: 5 · 4 − 3 = 17 y 2 · 4 + 9 = 17. ✔</li></ol><p>Si al final queda −x = 7, la solución es x = −7. Si queda 4x = 6, la solución es la fracción x = 6/4 = 3/2.</p>`,
      video: { id: "IHblqjW8RY8", titulo: "Ecuaciones de primer grado para principiantes", canal: "Daniel Carreón", vistas: 28913402 },
    },
    {
      html: `<h3>Ecuaciones con paréntesis</h3><p>Primero se <b>quitan los paréntesis</b> con la propiedad distributiva, con mucho cuidado con los signos:</p><p>3(x − 2) − 2(x + 1) = 4</p><ol><li>3x − 6 − 2x − 2 = 4 (el −2 multiplica a x y a 1).</li><li>3x − 2x = 4 + 6 + 2.</li><li><b>x = 12</b>.</li></ol><p>Comprobación: 3 · 10 − 2 · 13 = 30 − 26 = 4. ✔</p>`,
      video: { id: "kRGwE6OKN9M", titulo: "Ecuaciones de primer grado con paréntesis", canal: "Daniel Carreón", vistas: 5810153 },
    },
    {
      html: `<h3>Ecuaciones con denominadores</h3><p>Se eliminan los denominadores <b>multiplicando todos los términos por el mcm</b> de los denominadores:</p><p>x/2 − (x − 1)/3 = 2</p><ol><li>mcm(2, 3) = 6. Se multiplica cada término por 6: 3x − 2(x − 1) = 12.</li><li>Paréntesis: 3x − 2x + 2 = 12.</li><li>x = 12 − 2 = <b>10</b>.</li></ol><p>Ojo: cuando un numerador tiene varios términos, ponlo <b>entre paréntesis</b> antes de multiplicar; el signo − delante de la fracción afecta a todo el numerador.</p>`,
      video: { id: "C2PY3RaKJmk", titulo: "Ecuaciones de primer grado con fracciones", canal: "Susi Profe", vistas: 2241809 },
    },
    {
      html: `<h3>El método completo</h3><p>Para cualquier ecuación de primer grado se siguen estos pasos en orden:</p><ol><li>Quitar <b>denominadores</b> (multiplicar por el mcm).</li><li>Quitar <b>paréntesis</b>.</li><li><b>Transponer</b>: x a un lado y números al otro.</li><li><b>Reducir</b> términos semejantes.</li><li><b>Despejar</b> la x.</li><li><b>Comprobar</b> sustituyendo en la ecuación inicial.</li></ol><p>Casos especiales: si se llega a 0x = 5, la ecuación <b>no tiene solución</b>; si se llega a 0x = 0, tiene <b>infinitas soluciones</b> (era una identidad).</p>`,
      svg: svg("Pasos para resolver una ecuación: denominadores, paréntesis, transponer, reducir y despejar, comprobar", chips([["1. Denominadores", "multiplicar todo por el mcm", "var(--red)"], ["2. Paréntesis", "propiedad distributiva", "var(--sun)"], ["3. Transponer y reducir", "x a un lado, números al otro", "var(--pen)"], ["4. Despejar y comprobar", "x = … · sustituir al final", "var(--leaf)"]], 8, 36), 180),
    },
    {
      html: `<h3>Plantear problemas</h3><p>Resolver un problema con ecuaciones tiene cuatro fases:</p><ol><li><b>Leer y elegir la incógnita</b>: «x = …» (escríbelo).</li><li><b>Plantear</b>: traducir el enunciado a una ecuación.</li><li><b>Resolver</b> la ecuación.</li><li><b>Interpretar y comprobar</b>: ¿tiene sentido la solución? (No puede haber −3 personas ni 2,5 coches.)</li></ol><p>Ejemplo: «La suma de tres números consecutivos es 87». x + (x + 1) + (x + 2) = 87 → 3x + 3 = 87 → x = 28. Los números son <b>28, 29 y 30</b>.</p>`,
      video: { id: "VyNn_4-Yxd8", titulo: "Resolver problemas de ecuaciones: edades", canal: "Susi Profe", vistas: 1119345 },
    },
    {
      html: `<h3>Tipos de problemas frecuentes</h3>${tabla(["Tipo", "Idea para plantear"], [["Edades", "dentro de n años cada uno tiene n años más; hace n años, n menos"], ["Repartos", "una parte x, la otra «el doble», «5 más»…; la suma es el total"], ["Geometría", "perímetro = suma de los lados; ángulos de un triángulo suman 180°"], ["Dinero y compras", "precio unitario · cantidad; monedas de distinto valor"], ["Mezclas", "cantidad · precio de cada ingrediente = total"]])}<p>Ejemplo de edades: un padre tiene 40 años y su hija 10. ¿Dentro de cuántos años el padre tendrá el triple? 40 + x = 3(10 + x) → 40 + x = 30 + 3x → 10 = 2x → <b>x = 5 años</b> (45 y 15).</p>`,
    },
  ],
  figura: {
    titulo: "Ecuaciones en un vistazo",
    svg: filas("Resumen: ecuación con incógnita; balanza; pasos de resolución; casos sin solución e infinitas; planteamiento de problemas", [["Ecuación", "igualdad que se cumple para algún valor", "var(--pen)"], ["Balanza", "lo mismo en los dos miembros", "var(--sun)"], ["Pasos", "denominadores → ( ) → transponer → despejar", "var(--leaf)"], ["Comprobar", "sustituir en la ecuación inicial", "var(--inf)"], ["0x = 5 / 0x = 0", "sin solución / infinitas", "var(--red)"], ["Problemas", "x = … · plantear · resolver · interpretar", "var(--ink)"]], 220),
  },
  video: { id: "qud71ShXTK4", titulo: "Cómo solucionar ecuaciones de primer grado con fracciones", canal: "Matemáticas profe Alex", vistas: 5719094, megusta: 0, busqueda: "ecuaciones de primer grado con paréntesis y denominadores" },
  quiz: mezcla([
    { q: "¿Cuál es una identidad?", o: ["3(x + 2) = 3x + 6", "3x + 2 = 8", "x² = 4"], a: 0, e: "Cierta para todo x." },
    { q: "La solución de x − 7 = 3 es…", o: ["10", "−4", "4"], a: 0, e: "x = 3 + 7." },
    { q: "La solución de 4x = −20 es…", o: ["−5", "5", "−80"], a: 0, e: "−20 : 4." },
    { q: "Al transponer, un término que suma pasa…", o: ["restando", "sumando", "dividiendo"], a: 0, e: "Operación contraria." },
    { q: "Solución de 2x + 3 = x + 8:", o: ["5", "11", "−5"], a: 0, e: "2x − x = 8 − 3." },
    { q: "−2(x − 4) es igual a…", o: ["−2x + 8", "−2x − 8", "−2x − 4"], a: 0, e: "Signo × signo." },
    { q: "Para quitar denominadores en x/3 + x/4 = 7 se multiplica por…", o: ["12", "7", "3"], a: 0, e: "mcm(3, 4)." },
    { q: "Si se llega a 0x = 6, la ecuación…", o: ["no tiene solución", "tiene solución 6", "tiene infinitas"], a: 0, e: "Ningún x cumple." },
    { q: "«El doble de un número menos 5 es 11» da…", o: ["8", "3", "6"], a: 0, e: "2x − 5 = 11." },
    { q: "¿Es x = 2 solución de 3x − 1 = x + 3?", o: ["sí", "no", "solo a veces"], a: 0, e: "5 = 5." },
  ]),
  examen: mezcla([
    { q: "Solución de (x + 1)/2 − x/3 = 1:", o: ["3", "1", "6"], a: 0, e: "3x + 3 − 2x = 6." },
    { q: "Solución de 5 − 2(x − 3) = 3(x + 2):", o: ["1", "−1", "11/5"], a: 0, e: "11 − 2x = 3x + 6." },
    { q: "Un rectángulo tiene 36 cm de perímetro y su base es el doble de la altura. La altura mide…", o: ["6 cm", "12 cm", "9 cm"], a: 0, e: "2x + 2 · 2x = 36." },
  ]),
  feynman: ["Diferencia entre identidad y ecuación", "Por qué una ecuación es como una balanza", "Cómo se quitan los denominadores", "Los pasos para resolver cualquier ecuación de primer grado", "Cómo se plantea un problema"],
  mapa: mapa("ECUACIONES", "var(--eso)", [
    ["Qué es", "incógnita · solución", "var(--pen)"],
    ["Balanza", "ecuaciones equivalentes", "var(--sun)"],
    ["Resolver", "( ) · denominadores · despejar", "var(--leaf)"],
    ["Problemas", "plantear · comprobar", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Ecuación", "Igualdad que solo se cumple para algunos valores."],
    ["Identidad", "Igualdad que se cumple para todos los valores."],
    ["Incógnita", "Letra cuyo valor se busca."],
    ["Solución", "Valor que hace cierta la igualdad."],
    ["Transponer", "Pasar un término al otro miembro con la operación contraria."],
    ["Denominadores", "Se quitan multiplicando todo por el mcm."],
    ["0x = k (k ≠ 0)", "Sin solución."],
    ["Comprobar", "Sustituir la solución en la ecuación inicial."],
  ],
  familias: ["Inventad acertijos tipo «pienso un número…» y resolvedlos con una ecuación.", "Plantead problemas de edades con los miembros de la familia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Igualdades, identidades y ecuaciones; ecuaciones de primer grado con paréntesis y denominadores; ecuaciones equivalentes; resolución de problemas mediante ecuaciones (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Balanza física o virtual para ecuaciones.", "Problemas «al revés»: dar la ecuación y pedir un enunciado.", "Escape room de ecuaciones encadenadas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): ecuaciones de primer grado", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Resuelve: (2x − 1)/3 − (x + 2)/4 = 1/2.", pasos: ["mcm(3, 4, 2) = 12: 4(2x − 1) − 3(x + 2) = 6.", "8x − 4 − 3x − 6 = 6.", "5x = 16 → x = 16/5."], resultado: "x = 16/5" },
    { enunciado: "Resuelve: 4(x − 3) − (x − 5) = 2x − 1.", pasos: ["4x − 12 − x + 5 = 2x − 1.", "3x − 7 = 2x − 1.", "x = 6. Comprobación: 12 − 1 = 11 = 12 − 1."], resultado: "x = 6" },
    { enunciado: "En un parking hay coches y motos: 30 vehículos y 100 ruedas. ¿Cuántos coches hay?", pasos: ["x = coches; motos = 30 − x.", "4x + 2(30 − x) = 100.", "4x + 60 − 2x = 100 → 2x = 40 → x = 20."], resultado: "20 coches y 10 motos." },
  ],
  errores: [
    "Pasar un número que multiplica restando: 3x = 12 no da x = 9.",
    "Al quitar un paréntesis con − delante, cambiar solo el primer signo.",
    "Multiplicar por el mcm solo los términos con denominador.",
    "No poner entre paréntesis un numerador de varios términos.",
    "No comprobar la solución ni ver si tiene sentido en el problema.",
  ],
  ejercicios: [
    { q: "Resuelve: 7x − 4 = 3x + 12.", sol: "4x = 16 → x = 4." },
    { q: "Resuelve: 2(x + 5) = 3(x − 1).", sol: "2x + 10 = 3x − 3 → x = 13." },
    { q: "Resuelve: x/4 + x/6 = 5.", sol: "3x + 2x = 60 → x = 12." },
    { q: "Resuelve: (x − 2)/5 = (x + 1)/2.", sol: "2x − 4 = 5x + 5 → x = −3." },
    { q: "Resuelve: 3 − (2x − 1)/4 = x/2.", sol: "12 − 2x + 1 = 2x → x = 13/4." },
    { q: "Indica si tiene solución: 2(x + 3) = 2x + 6; 2(x + 3) = 2x + 5.", sol: "Infinitas (identidad); ninguna (0x = −1)." },
    { q: "La suma de un número y su mitad es 27. ¿Qué número es?", sol: "x + x/2 = 27 → x = 18." },
    { q: "Ana tiene 3 veces la edad de su hermano y entre los dos suman 48 años. ¿Qué edades tienen?", sol: "x + 3x = 48 → 12 y 36 años." },
    { q: "Los ángulos de un triángulo miden x, 2x y x + 20°. ¿Cuánto mide cada uno?", sol: "4x + 20 = 180 → x = 40: 40°, 80° y 60°." },
    { q: "Pago 3,40 € con 20 monedas de 10 y 20 céntimos. ¿Cuántas hay de cada tipo?", sol: "0,1x + 0,2(20 − x) = 3,4 → x = 6 de 10 cts. y 14 de 20 cts." },
  ],
};

  return module.exports;
})();

P["enteros"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: números enteros. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números enteros",
  minutos: 55,
  objetivos: ["Representar y ordenar números enteros en la recta", "Calcular el valor absoluto y el opuesto de un entero", "Sumar, restar, multiplicar y dividir enteros con la regla de los signos", "Resolver operaciones combinadas respetando la jerarquía y los paréntesis"],
  claves: ["número entero", "valor absoluto", "opuesto", "regla de los signos", "jerarquía de operaciones", "paréntesis"],
  pregunta: {
    texto: "En Burgos amanece a −6 °C y a mediodía el termómetro marca 9 °C. ¿Cuántos grados ha subido la temperatura?",
    respuesta: "Ha subido <mark>15 grados</mark>: 9 − (−6) = 9 + 6 = 15. Para pasar de −6 a 0 sube 6 grados y de 0 a 9, otros 9. Los números enteros sirven para medir cantidades que pueden estar por debajo de un punto de referencia: temperaturas bajo cero, deudas, plantas de un sótano o profundidades bajo el nivel del mar.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los números enteros?</h3><p>Los <b>números enteros</b> (ℤ) son los naturales, el cero y los <b>negativos</b>: …, −3, −2, −1, 0, 1, 2, 3, … Los positivos se escriben con o sin el signo + (+5 = 5) y los negativos siempre con el signo −.</p><p>Se usan cuando hay un <b>punto de referencia</b> que vale cero: el nivel del mar (una fosa a −200 m), el 0 °C del termómetro, la planta baja de un edificio (el garaje en la planta −2) o el saldo de una cuenta (si debes 30 €, tu saldo es −30 €). También en la historia: el año 50 a. C. se puede pensar como −50.</p>`,
    },
    {
      html: `<h3>La recta numérica y el orden</h3><p>Los enteros se colocan en una <b>recta</b>: el 0 en el centro, los positivos a la derecha y los negativos a la izquierda, a la misma distancia unos de otros.</p><p>De dos enteros, es <mark>mayor el que está más a la derecha</mark>. Por eso:</p><ul><li>Cualquier positivo es mayor que cualquier negativo: 1 &gt; −100.</li><li>Entre dos negativos, es mayor el que está más cerca del cero: −2 &gt; −7. Piensa en temperaturas: −2 °C es menos frío que −7 °C.</li></ul><p>Ordenados de menor a mayor: −7 &lt; −2 &lt; 0 &lt; 3 &lt; 5.</p>`,
      svg: (() => { const r = recta(-6, 6, 96, 24, 236, [[-5, "", "var(--red)"], [-2, "", "var(--red)"], [3, "", "var(--leaf)"]]); return svg("Recta numérica de −6 a 6 con los puntos −5, −2 y 3; los negativos a la izquierda y los positivos a la derecha", `${r.s}${t(70, 40, "negativos", { c: "var(--red)", s: 12 })}${t(190, 40, "positivos", { c: "var(--leaf)", s: 12 })}${t(130, 150, "−5 < −2 < 3", { s: 14 })}`); })(),
    },
    {
      html: `<h3>Valor absoluto y opuesto</h3><p>El <b>valor absoluto</b> de un entero es su <mark>distancia al cero</mark>, sin tener en cuenta el signo. Se escribe entre barras: |−8| = 8, |5| = 5, |0| = 0. Siempre es positivo o cero.</p><p>El <b>opuesto</b> de un número es el que tiene el mismo valor absoluto y signo contrario: op(4) = −4 y op(−9) = 9. Un número y su opuesto están a la misma distancia del cero, uno a cada lado, y su suma es 0: 4 + (−4) = 0.</p><p>Fíjate: −(−9) significa «el opuesto de −9», que es 9.</p>`,
      svg: (() => { const r = recta(-5, 5, 110, 24, 236, [[-4, "", "var(--red)"], [4, "", "var(--leaf)"]]); return svg("−4 y 4 están a 4 unidades del cero: son opuestos y su valor absoluto es 4", `${r.s}<path d="M${r.X(-4)} 84 Q ${r.X(-2)} 60 ${r.X(0)} 84" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M${r.X(0)} 84 Q ${r.X(2)} 60 ${r.X(4)} 84" fill="none" stroke="var(--leaf)" stroke-width="2"/>${t(r.X(-2), 56, "4 pasos", { c: "var(--red)", s: 11 })}${t(r.X(2), 56, "4 pasos", { c: "var(--leaf)", s: 11 })}${t(130, 160, "|−4| = |4| = 4", { s: 14 })}${t(130, 28, "opuestos: −4 y 4", { c: "var(--pen)", s: 12 })}`); })(),
    },
    {
      html: `<h3>Suma y resta de enteros</h3><ul><li><b>Mismo signo</b>: se suman los valores absolutos y se deja el signo común. (−3) + (−5) = −8; 4 + 6 = 10.</li><li><b>Distinto signo</b>: se restan los valores absolutos (el mayor menos el menor) y se pone el signo del que tiene mayor valor absoluto. (−9) + 4 = −5; 7 + (−2) = 5.</li></ul><p><b>Restar es sumar el opuesto</b>: <mark>a − b = a + (−b)</mark>. Así, 3 − 8 = 3 + (−8) = −5 y 5 − (−2) = 5 + 2 = 7.</p><p>Un truco: piensa en dinero. Lo positivo es lo que <i>tienes</i> y lo negativo lo que <i>debes</i>. Si tienes 4 € y debes 9 €, en total debes 5 €: −5.</p>`,
      video: { id: "Rs6Qyei7XY0", titulo: "SUMA y RESTA de Números Enteros", canal: "Susi Profe", vistas: 1279908 },
    },
    {
      html: `<h3>Quitar paréntesis</h3><p>Cuando hay varios sumandos con signos, conviene <b>quitar los paréntesis</b> antes de operar:</p>${tabla(["Signos", "Resultado", "Ejemplo"], [["+ (+a)", "+a", "5 + (+3) = 5 + 3"], ["+ (−a)", "−a", "5 + (−3) = 5 − 3"], ["− (+a)", "−a", "5 − (+3) = 5 − 3"], ["− (−a)", "+a", "5 − (−3) = 5 + 3"]])}<p>Si delante de un paréntesis hay un <b>signo −</b>, se cambian <b>todos</b> los signos de dentro: −(4 − 7 + 2) = −4 + 7 − 2. Después se agrupan positivos y negativos: 8 − 3 + 2 − 6 = (8 + 2) − (3 + 6) = 10 − 9 = 1.</p>`,
    },
    {
      html: `<h3>Multiplicación y división: la regla de los signos</h3><p>Se multiplican o dividen los valores absolutos y el signo se decide así:</p>${tabla(["×  o  :", "+", "−"], [["<b>+</b>", "+", "−"], ["<b>−</b>", "−", "+"]])}<p>Es decir, <mark>signos iguales dan +, signos distintos dan −</mark>. Ejemplos: (−6) · (−3) = 18; (−20) : 4 = −5; 12 : (−3) = −4.</p><p>Con varios factores, cuenta los negativos: si hay un número <b>par</b> de signos −, el resultado es positivo; si es <b>impar</b>, negativo. (−1) · (−2) · (−3) = −6.</p>`,
      video: { id: "RxX-JhmxLG4", titulo: "Cómo multiplicar números enteros", canal: "Matemáticas profe Alex", vistas: 1599700 },
    },
    {
      html: `<h3>Jerarquía de las operaciones</h3><p>En una operación combinada se sigue siempre este <b>orden</b>:</p><ol><li><b>Paréntesis</b> y corchetes, de dentro hacia fuera.</li><li><b>Potencias</b> y raíces.</li><li><b>Multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li><b>Sumas y restas</b>, de izquierda a derecha.</li></ol><p>Ejemplo: 8 − 3 · (−4) + 10 : (−2) = 8 + 12 − 5 = <b>15</b>. Si se hiciera de izquierda a derecha sin respetar la jerarquía (8 − 3 = 5, 5 · (−4)…), el resultado sería otro y estaría mal.</p>`,
      svg: svg("Orden de las operaciones: 1 paréntesis, 2 potencias, 3 multiplicaciones y divisiones, 4 sumas y restas", chips([["1.º Paréntesis", "( ) y [ ], de dentro hacia fuera", "var(--red)"], ["2.º Potencias", "y raíces", "var(--sun)"], ["3.º · y :", "de izquierda a derecha", "var(--pen)"], ["4.º + y −", "de izquierda a derecha", "var(--leaf)"]], 10, 34), 180),
    },
    {
      html: `<h3>Potencias de base entera</h3><p>Una potencia es una multiplicación de factores iguales: (−2)³ = (−2) · (−2) · (−2). Con base negativa, el signo depende del exponente:</p><ul><li>Exponente <b>par</b> → resultado <b>positivo</b>: (−3)² = 9; (−2)⁴ = 16.</li><li>Exponente <b>impar</b> → resultado <b>negativo</b>: (−2)³ = −8; (−1)⁵ = −1.</li></ul><p>¡Cuidado con los paréntesis! <mark>(−3)² = 9, pero −3² = −9</mark>, porque en −3² solo se eleva el 3 y después se pone el signo.</p>`,
    },
    {
      html: `<h3>Problemas con enteros</h3><p>Para resolver un problema, decide qué vale cero y qué es positivo o negativo:</p><ul><li><b>Temperaturas</b>: la variación es «final − inicial». De −4 °C a 7 °C: 7 − (−4) = 11 °C de subida.</li><li><b>Alturas</b>: un submarino a −120 m sube 45 m: −120 + 45 = −75 m.</li><li><b>Dinero</b>: saldo de 50 €, pagas 80 € y cobras 20 €: 50 − 80 + 20 = −10 € (números rojos).</li><li><b>Historia</b>: Augusto nació en el 63 a. C. (−63) y murió en el 14 d. C.: 14 − (−63) = 77 años.</li></ul><p>Comprueba siempre que el resultado tiene sentido en el contexto.</p>`,
    },
  ],
  figura: {
    titulo: "Los números enteros de un vistazo",
    svg: filas("Resumen: orden en la recta, valor absoluto, suma con distinto signo, restar es sumar el opuesto, regla de los signos y jerarquía", [["Orden", "mayor el que está más a la derecha", "var(--pen)"], ["Valor absoluto", "distancia al cero: |−7| = 7", "var(--inf)"], ["Sumar", "mismo signo: se suman · distinto: se restan", "var(--leaf)"], ["Restar", "a − b = a + (−b)", "var(--sun)"], ["× y :", "iguales +  ·  distintos −", "var(--red)"], ["Jerarquía", "( ) → potencias → · : → + −", "var(--ink)"]], 220),
  },
  video: { id: "9xCbQMdQ2S4", titulo: "Operaciones con paréntesis: suma y resta", canal: "Matemáticas profe Alex", vistas: 3008244, megusta: 0, busqueda: "números enteros suma resta 2 eso" },
  quiz: mezcla([
    { q: "¿Cuál es mayor?", o: ["−3", "−8", "−10"], a: 0, e: "Está más cerca del cero." },
    { q: "|−12| es…", o: ["12", "−12", "0"], a: 0, e: "Distancia al cero." },
    { q: "El opuesto de −6 es…", o: ["6", "−6", "1/6"], a: 0, e: "Mismo valor absoluto, signo contrario." },
    { q: "(−7) + 3 =", o: ["−4", "4", "−10"], a: 0, e: "Se restan y gana el signo del 7." },
    { q: "5 − (−4) =", o: ["9", "1", "−9"], a: 0, e: "Restar −4 es sumar 4." },
    { q: "(−6) · (−5) =", o: ["30", "−30", "−11"], a: 0, e: "Signos iguales: +." },
    { q: "(−24) : 6 =", o: ["−4", "4", "−18"], a: 0, e: "Signos distintos: −." },
    { q: "(−2)⁴ =", o: ["16", "−16", "−8"], a: 0, e: "Exponente par." },
    { q: "En 6 + 4 · (−2) se hace primero…", o: ["la multiplicación", "la suma", "da igual"], a: 0, e: "Jerarquía." },
    { q: "−(3 − 5) =", o: ["2", "−2", "8"], a: 0, e: "−3 + 5." },
  ]),
  examen: mezcla([
    { q: "10 − 2 · (−3) + (−8) : 4 =", o: ["14", "22", "−14"], a: 0, e: "10 + 6 − 2." },
    { q: "Un buzo a −18 m baja 7 m más. ¿Dónde está?", o: ["−25 m", "−11 m", "25 m"], a: 0, e: "−18 − 7." },
    { q: "−5² =", o: ["−25", "25", "−10"], a: 0, e: "Solo se eleva el 5." },
  ]),
  feynman: ["Por qué −2 es mayor que −7", "Qué son el valor absoluto y el opuesto", "Cómo se suman enteros de distinto signo", "Por qué restar es sumar el opuesto", "La regla de los signos y la jerarquía"],
  mapa: mapa("NÚMEROS ENTEROS", "var(--eso)", [
    ["Recta y orden", "negativos · 0 · positivos", "var(--pen)"],
    ["|a| y −a", "valor absoluto · opuesto", "var(--inf)"],
    ["+ y −", "restar = sumar el opuesto", "var(--leaf)"],
    ["· y :", "regla de los signos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Número entero", "Naturales, cero y negativos: …, −2, −1, 0, 1, 2, …"],
    ["Orden", "Es mayor el que está más a la derecha en la recta."],
    ["Valor absoluto", "Distancia al cero: |−5| = 5."],
    ["Opuesto", "Mismo valor absoluto y signo contrario. Suman 0."],
    ["Restar", "a − b = a + (−b)."],
    ["Regla de los signos", "Iguales dan +, distintos dan −."],
    ["Jerarquía", "Paréntesis, potencias, · y :, + y −."],
    ["(−a)ⁿ", "Exponente par: +; impar: −."],
  ],
  familias: ["Mirad juntos la previsión del tiempo de una ciudad fría y calculad cuánto varía la temperatura.", "Inventad problemas de dinero: «tengo 10 €, debo 15 €…».", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Números enteros: representación, orden, valor absoluto y opuesto; operaciones y regla de los signos; jerarquía de operaciones; resolución de problemas en contextos reales (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Termómetro gigante en el suelo del aula para sumar y restar caminando.", "Juego de cartas rojas (negativas) y negras (positivas).", "Línea del tiempo de la Antigüedad con años negativos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): números enteros", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula: 7 − (3 − 9) + (−4 + 2).", pasos: ["Paréntesis: 3 − 9 = −6; −4 + 2 = −2.", "7 − (−6) + (−2) = 7 + 6 − 2.", "= 11."], resultado: "11" },
    { enunciado: "Calcula: (−3) · 4 − 20 : (−5) + (−2)³.", pasos: ["Potencia: (−2)³ = −8.", "Productos y cocientes: (−3) · 4 = −12; 20 : (−5) = −4.", "−12 − (−4) + (−8) = −12 + 4 − 8 = −16."], resultado: "−16" },
    { enunciado: "Arquímedes nació en el 287 a. C. y murió en el 212 a. C. ¿Cuántos años vivió?", pasos: ["Nacimiento: −287; muerte: −212.", "Años = −212 − (−287) = −212 + 287.", "= 75."], resultado: "Vivió unos 75 años." },
  ],
  errores: [
    "Pensar que −8 es mayor que −2 porque 8 es mayor que 2.",
    "Olvidar cambiar todos los signos al quitar un paréntesis con − delante.",
    "Aplicar la regla de los signos de la multiplicación a la suma: (−3) + (−4) no es +7.",
    "Operar de izquierda a derecha sin respetar la jerarquía.",
    "Confundir (−3)² = 9 con −3² = −9.",
  ],
  ejercicios: [
    { q: "Ordena de menor a mayor: 4, −6, 0, −1, 9, −10.", sol: "−10 < −6 < −1 < 0 < 4 < 9." },
    { q: "Escribe el valor absoluto y el opuesto de −15 y de 8.", sol: "|−15| = 15, op = 15; |8| = 8, op = −8." },
    { q: "Calcula: (−8) + (−5); 12 + (−20); −7 − 6; −3 − (−11).", sol: "−13; −8; −13; 8." },
    { q: "Quita paréntesis y calcula: 5 − (2 − 8) − (−3 + 4).", sol: "5 − 2 + 8 + 3 − 4 = 10." },
    { q: "Calcula: (−4) · (−9); 36 : (−4); (−2) · 3 · (−5) · (−1).", sol: "36; −9; −30 (tres negativos)." },
    { q: "Calcula: 15 − 4 · (−2) + (−18) : 3.", sol: "15 + 8 − 6 = 17." },
    { q: "Calcula: (−1)¹⁰⁰, (−1)⁹⁹, (−5)², −5².", sol: "1; −1; 25; −25." },
    { q: "Calcula: [6 − (−2)] · (3 − 7) : (−8).", sol: "8 · (−4) : (−8) = −32 : (−8) = 4." },
    { q: "Un ascensor está en la planta −3, sube 7 plantas y baja 2. ¿En qué planta está?", sol: "−3 + 7 − 2 = 2: segunda planta." },
    { q: "La temperatura máxima fue 4 °C y la mínima −9 °C. ¿Cuál fue la amplitud térmica?", sol: "4 − (−9) = 13 °C." },
  ],
};

  return module.exports;
})();

P["estadistica"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: estadística y probabilidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística y probabilidad",
  minutos: 65,
  objetivos: ["Distinguir población, muestra y tipos de variables estadísticas", "Construir tablas de frecuencias y gráficos adecuados", "Calcular e interpretar la media, la mediana, la moda y el rango", "Calcular probabilidades con la regla de Laplace"],
  claves: ["población", "muestra", "frecuencia relativa", "media", "mediana", "regla de Laplace"],
  pregunta: {
    texto: "Si lanzas una moneda 10 veces y salen 7 caras, ¿está trucada?",
    respuesta: "No necesariamente. Con pocos lanzamientos los resultados varían mucho. Si la lanzas <b>1.000 veces</b>, la proporción de caras se acercará a <mark>0,5</mark>: esa es su probabilidad. La estadística estudia datos reales y la probabilidad, lo que se espera que ocurra cuando interviene el azar.",
  },
  bloques: [
    {
      html: `<h3>Población, muestra y variables</h3><p>La <b>estadística</b> recoge, ordena e interpreta datos. Términos básicos:</p><ul><li><b>Población</b>: todos los elementos que se estudian (todos los alumnos del centro).</li><li><b>Muestra</b>: una parte representativa de la población (30 alumnos elegidos al azar). Se usa cuando la población es muy grande.</li><li><b>Variable estadística</b>: la característica que se estudia.</li></ul><p>Las variables pueden ser <b>cualitativas</b> (no son números: color favorito, deporte) o <b>cuantitativas</b> (son números). Las cuantitativas son <b>discretas</b> si toman valores aislados (número de hermanos) y <b>continuas</b> si pueden tomar cualquier valor de un intervalo (altura, tiempo).</p>`,
    },
    {
      html: `<h3>Tablas de frecuencias</h3><p>Se preguntó a 20 alumnos cuántos libros habían leído este trimestre:</p>${tabla(["Libros (xᵢ)", "fᵢ", "Fᵢ", "hᵢ", "%"], [["0", "3", "3", "0,15", "15 %"], ["1", "7", "10", "0,35", "35 %"], ["2", "6", "16", "0,30", "30 %"], ["3", "4", "20", "0,20", "20 %"], ["Total", "20", "", "1", "100 %"]])}<ul><li><b>Frecuencia absoluta (fᵢ)</b>: veces que aparece cada valor.</li><li><b>Frecuencia acumulada (Fᵢ)</b>: suma de las absolutas hasta ese valor.</li><li><b>Frecuencia relativa (hᵢ)</b>: fᵢ dividida entre el total. Las relativas suman 1.</li><li><b>Porcentaje</b>: hᵢ · 100.</li></ul>`,
    },
    {
      html: `<h3>Gráficos estadísticos</h3><p>Cada tipo de dato tiene su gráfico más adecuado:</p><ul><li><b>Diagrama de barras</b>: variables cualitativas y cuantitativas discretas. La altura de cada barra es la frecuencia.</li><li><b>Histograma</b>: variables continuas agrupadas en intervalos; las barras van juntas.</li><li><b>Polígono de frecuencias</b>: une los extremos superiores de las barras; útil para ver la evolución.</li><li><b>Diagrama de sectores</b>: muestra la proporción de cada parte respecto al total. El ángulo de cada sector es <mark>hᵢ · 360°</mark>.</li></ul><p>En el ejemplo de los libros, al valor «1 libro» le corresponde 0,35 · 360° = 126°.</p>`,
      svg: svg("Diagrama de barras de libros leídos: 0 libros 3 alumnos, 1 libro 7, 2 libros 6 y 3 libros 4", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>${[3, 7, 6, 4].map((f, i) => `<rect x="${50 + i * 48}" y="${150 - f * 17}" width="30" height="${f * 17}" fill="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)"][i]}" fill-opacity=".55"/>${t(65 + i * 48, 145 - f * 17, String(f), { s: 11 })}${t(65 + i * 48, 166, String(i), { c: "var(--muted)", s: 11 })}`).join("")}${t(214, 176, "libros", { c: "var(--muted)", s: 10 })}${t(34, 16, "fᵢ", { c: "var(--muted)", s: 10, a: "start" })}`),
    },
    {
      html: `<h3>Medidas de centralización</h3><p>Resumen los datos en un solo número representativo:</p><ul><li><b>Media aritmética (x̄)</b>: se suman todos los datos y se divide entre cuántos hay. Con tabla: <mark>x̄ = Σ xᵢ · fᵢ / N</mark>. Libros: (0 · 3 + 1 · 7 + 2 · 6 + 3 · 4) / 20 = 31 / 20 = <b>1,55</b>.</li><li><b>Mediana (Me)</b>: el valor central cuando los datos están <b>ordenados</b>. Si hay un número par de datos, la media de los dos centrales. Aquí los datos 10.º y 11.º son 1 y 2 → Me = <b>1,5</b>.</li><li><b>Moda (Mo)</b>: el valor que más se repite. Aquí, <b>1</b>.</li></ul><p>La media se ve muy afectada por valores extremos; la mediana, no. Por eso los sueldos suelen resumirse con la mediana.</p>`,
      video: { id: "0DA7Wtz1ddg", titulo: "Media, moda y mediana", canal: "Daniel Carreón", vistas: 17076637 },
    },
    {
      html: `<h3>Medidas de dispersión</h3><p>Dos grupos pueden tener la misma media y ser muy distintos. Las medidas de <b>dispersión</b> indican si los datos están agrupados o separados.</p><ul><li><b>Rango</b> o recorrido: <mark>dato mayor − dato menor</mark>. Notas 4, 5, 6 → rango 2; notas 1, 5, 9 → rango 8. Las dos tienen media 5.</li><li><b>Desviación media</b>: la media de las distancias de cada dato a la media. Notas 1, 5, 9: (4 + 0 + 4)/3 ≈ 2,67.</li></ul><p>Cuanto mayores son, más dispersos están los datos y menos representativa es la media.</p>`,
      svg: svg("Dos grupos con media 5: uno con datos 4, 5 y 6 muy juntos y otro con 1, 5 y 9 muy separados", `<path d="M30 60 H 230 M30 120 H 230" stroke="var(--muted)" stroke-width="2"/>${[4, 5, 6].map((v) => `<circle cx="${30 + v * 20}" cy="60" r="6" fill="var(--leaf)"/>`).join("")}${[1, 5, 9].map((v) => `<circle cx="${30 + v * 20}" cy="120" r="6" fill="var(--red)"/>`).join("")}<path d="M130 40 V 140" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>${t(130, 30, "media 5", { c: "var(--pen)", s: 11 })}
        ${t(214, 50, "rango 2", { c: "var(--leaf)", s: 11 })}${t(214, 110, "rango 8", { c: "var(--red)", s: 11 })}${t(130, 166, "misma media, distinta dispersión", { s: 12 })}`),
    },
    {
      html: `<h3>Experimentos aleatorios y sucesos</h3><p>Un experimento es <b>aleatorio</b> si no se puede predecir el resultado aunque se repita en las mismas condiciones (lanzar un dado). Si se puede predecir, es <b>determinista</b> (soltar una piedra: cae).</p><ul><li><b>Espacio muestral (E)</b>: todos los resultados posibles. Dado: E = {1, 2, 3, 4, 5, 6}.</li><li><b>Suceso</b>: cualquier subconjunto de E. «Sacar par» = {2, 4, 6}.</li><li><b>Suceso seguro</b>: siempre ocurre (sacar menos de 7). <b>Imposible</b>: nunca ocurre (sacar 8).</li><li><b>Suceso contrario</b> de A (Ā): ocurre cuando no ocurre A. Contrario de «par» es «impar».</li></ul>`,
    },
    {
      html: `<h3>La regla de Laplace</h3><p>Si todos los resultados son <b>igual de probables</b> (dado y moneda no trucados, bolas iguales), la probabilidad de un suceso A es:</p><p style="text-align:center"><mark>P(A) = casos favorables / casos posibles</mark></p><p>Sacar un número mayor que 4 con un dado: favorables {5, 6} → P = 2/6 = 1/3 ≈ 0,33.</p><p>Propiedades: la probabilidad está siempre entre <b>0</b> (imposible) y <b>1</b> (seguro); y <b>P(Ā) = 1 − P(A)</b>. La probabilidad de no sacar un 6 es 1 − 1/6 = 5/6.</p>`,
      svg: svg("Escala de probabilidad de 0 a 1: imposible, poco probable, mitad, muy probable y seguro", `<path d="M30 90 H 230" stroke="var(--muted)" stroke-width="3"/>${[[0, "0", "imposible", "var(--red)"], [0.5, "0,5", "moneda: cara", "var(--sun)"], [1, "1", "seguro", "var(--leaf)"], [1 / 6, "1/6", "un 6", "var(--pen)"], [5 / 6, "5/6", "no un 6", "var(--inf)"]].map(([p, n, l, c], i) => `<circle cx="${30 + p * 200}" cy="90" r="6" fill="${c}"/>${t(30 + p * 200, 116, n, { c, s: 11 })}${t(30 + p * 200, i % 2 ? 140 : 72, l, { c, s: 10 })}`).join("")}${t(130, 30, "0 ≤ P(A) ≤ 1", { s: 14 })}`),
      video: { id: "qFQToHdNN9k", titulo: "Regla de Laplace: 4 ejemplos", canal: "Matemáticas profe Alex", vistas: 705159 },
    },
    {
      html: `<h3>Frecuencia y probabilidad</h3><p>Cuando un experimento se repite muchas veces, la <b>frecuencia relativa</b> de un suceso se acerca cada vez más a su <b>probabilidad</b>. Es la <b>ley de los grandes números</b>.</p><p>Si se lanza una chincheta (que no es simétrica) 500 veces y cae con la punta hacia arriba 310, se estima P ≈ 310/500 = 0,62. Así se calculan probabilidades cuando <b>no</b> se puede aplicar Laplace.</p><p>Cuidado con las ideas falsas: después de cinco cruces seguidas, la probabilidad de cara <b>sigue siendo 1/2</b>. La moneda no tiene memoria.</p>`,
    },
  ],
  figura: {
    titulo: "Estadística y probabilidad en un vistazo",
    svg: filas("Resumen: población y muestra; tipos de variables; frecuencias; media, mediana y moda; rango; regla de Laplace", [["Población / muestra", "todos / una parte representativa", "var(--pen)"], ["Variables", "cualitativas · discretas · continuas", "var(--inf)"], ["Frecuencias", "fᵢ · Fᵢ · hᵢ = fᵢ/N", "var(--sun)"], ["Centralización", "media · mediana · moda", "var(--leaf)"], ["Dispersión", "rango = máximo − mínimo", "var(--red)"], ["Laplace", "P = favorables / posibles", "var(--ink)"]], 230),
  },
  video: { id: "WeeEE8o1aqM", titulo: "Probabilidad, explicación fácil", canal: "Daniel Carreón", vistas: 6898318, megusta: 0, busqueda: "probabilidad regla de laplace" },
  quiz: mezcla([
    { q: "La estatura de los alumnos es una variable…", o: ["cuantitativa continua", "cualitativa", "cuantitativa discreta"], a: 0, e: "Puede tomar cualquier valor." },
    { q: "El número de mascotas es una variable…", o: ["cuantitativa discreta", "continua", "cualitativa"], a: 0, e: "Valores aislados." },
    { q: "Las frecuencias relativas suman…", o: ["1", "100", "N"], a: 0, e: "Proporciones." },
    { q: "La media de 2, 4, 6 y 8 es…", o: ["5", "4", "6"], a: 0, e: "20 : 4." },
    { q: "La mediana de 3, 9, 1, 7, 5 es…", o: ["5", "7", "9"], a: 0, e: "Ordenados: 1, 3, 5, 7, 9." },
    { q: "La moda de 2, 3, 3, 4, 3, 5 es…", o: ["3", "4", "2"], a: 0, e: "Más repetido." },
    { q: "El rango de 12, 4, 9, 20 es…", o: ["16", "8", "20"], a: 0, e: "20 − 4." },
    { q: "La probabilidad de sacar un 3 con un dado es…", o: ["1/6", "1/3", "3/6"], a: 0, e: "Un caso de seis." },
    { q: "Un suceso imposible tiene probabilidad…", o: ["0", "1", "0,5"], a: 0, e: "Nunca ocurre." },
    { q: "Si P(A) = 0,3, P(Ā) =", o: ["0,7", "0,3", "1,3"], a: 0, e: "1 − 0,3." },
  ]),
  examen: mezcla([
    { q: "En un diagrama de sectores, un valor con frecuencia relativa 0,25 ocupa…", o: ["90°", "25°", "45°"], a: 0, e: "0,25 · 360." },
    { q: "En una bolsa hay 3 bolas rojas, 5 azules y 2 verdes. P(no azul) =", o: ["1/2", "3/10", "1/5"], a: 0, e: "5/10." },
    { q: "Las notas 5, 6, 6, 7 y 26 (error) tienen media 10. ¿Qué medida representa mejor el grupo?", o: ["la mediana (6)", "la media", "el rango"], a: 0, e: "No le afecta el valor extremo." },
  ]),
  feynman: ["Diferencia entre población y muestra", "Tipos de variables con ejemplos", "Cómo se calculan la media, la mediana y la moda", "Para qué sirve el rango", "Qué dice la regla de Laplace y cuándo se puede usar"],
  mapa: mapa("ESTADÍSTICA Y AZAR", "var(--eso)", [
    ["Datos", "población · muestra · variables", "var(--pen)"],
    ["Tablas y gráficos", "frecuencias · barras · sectores", "var(--sun)"],
    ["Parámetros", "media · mediana · moda · rango", "var(--leaf)"],
    ["Probabilidad", "Laplace · 0 a 1", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Muestra", "Parte representativa de la población."],
    ["Variable continua", "Puede tomar cualquier valor de un intervalo."],
    ["Frecuencia relativa", "fᵢ / N."],
    ["Media", "Suma de los datos entre el número de datos."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más repetido."],
    ["Rango", "Dato mayor menos dato menor."],
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles."],
  ],
  familias: ["Haced una encuesta familiar (comida favorita, horas de sueño) y una tabla de frecuencias.", "Lanzad una moneda 50 veces y comparad la frecuencia de caras con 0,5.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Población y muestra; variables estadísticas; tablas de frecuencias y gráficos; medidas de centralización y de dispersión; experimentos aleatorios, sucesos y regla de Laplace; frecuencia relativa y probabilidad (RD 217/2022, Matemáticas, sentido estocástico).",
    ideas: ["Encuesta en la clase con análisis en hoja de cálculo.", "Experimento colectivo de 1.000 lanzamientos sumando los de todos.", "Detectar gráficos engañosos en prensa."],
  },
  fuentes: [RD, { t: "INE: Explica, recursos para centros educativos", url: "https://www.ine.es/explica/explica.htm" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Notas de 9 alumnos: 6, 4, 8, 6, 9, 5, 6, 7, 3. Calcula media, mediana, moda y rango.", pasos: ["Media: 54 : 9 = 6.", "Ordenadas: 3, 4, 5, 6, 6, 6, 7, 8, 9 → mediana (5.º dato) = 6.", "Moda: 6. Rango: 9 − 3 = 6."], resultado: "x̄ = 6; Me = 6; Mo = 6; rango = 6." },
    { enunciado: "En una encuesta a 40 personas, 18 prefieren fútbol, 12 baloncesto y 10 tenis. Calcula los ángulos del diagrama de sectores.", pasos: ["Frecuencias relativas: 0,45; 0,30; 0,25.", "Ángulos: 0,45 · 360 = 162°; 0,30 · 360 = 108°; 0,25 · 360 = 90°.", "Comprobación: 162 + 108 + 90 = 360°."], resultado: "162°, 108° y 90°." },
    { enunciado: "Se saca una carta de una baraja española de 40 cartas. Calcula P(oro), P(figura) y P(no as).", pasos: ["Oros: 10 → 10/40 = 1/4.", "Figuras (sota, caballo, rey): 12 → 12/40 = 3/10.", "Ases: 4 → P(as) = 1/10; P(no as) = 9/10."], resultado: "1/4; 3/10; 9/10." },
  ],
  errores: [
    "Calcular la mediana sin ordenar los datos.",
    "Confundir la moda (el valor) con su frecuencia.",
    "Dividir entre el número de valores distintos en lugar de entre el total de datos al calcular la media.",
    "Aplicar Laplace cuando los resultados no son igual de probables.",
    "Creer que tras varias cruces seguidas es «más probable» que salga cara.",
    "Usar un diagrama de sectores para variables que no forman un total.",
  ],
  ejercicios: [
    { q: "Clasifica las variables: deporte favorito, número de hermanos, peso, color de ojos, minutos de recreo.", sol: "Cualitativa, discreta, continua, cualitativa, continua (o discreta si se cuentan minutos enteros)." },
    { q: "Haz la tabla de frecuencias de: 2, 3, 2, 1, 4, 2, 3, 3, 2, 1.", sol: "1: f = 2; 2: f = 4; 3: f = 3; 4: f = 1. N = 10; hᵢ: 0,2; 0,4; 0,3; 0,1." },
    { q: "Calcula la media de la tabla anterior.", sol: "(2 + 8 + 9 + 4) : 10 = 2,3." },
    { q: "Calcula la mediana de 15, 12, 18, 10, 20, 14.", sol: "Ordenados: 10, 12, 14, 15, 18, 20 → (14 + 15) : 2 = 14,5." },
    { q: "Dos jugadores marcaron estos puntos: A: 10, 12, 11, 11; B: 2, 20, 8, 14. Compara media y rango.", sol: "Ambos media 11; rango A = 2 y B = 18: A es más regular." },
    { q: "Escribe el espacio muestral de lanzar dos monedas.", sol: "{CC, CX, XC, XX}." },
    { q: "Con un dado, calcula P(par), P(múltiplo de 3) y P(menor que 7).", sol: "1/2; 1/3; 1 (seguro)." },
    { q: "En una urna hay 4 bolas blancas y 6 negras. P(blanca)? P(no blanca)?", sol: "4/10 = 0,4; 0,6." },
    { q: "Al lanzar dos dados y sumar, ¿cuál es la suma más probable? Calcula su probabilidad.", sol: "7: 6 casos de 36 → 1/6." },
    { q: "Una chincheta cayó 186 veces de punta en 300 lanzamientos. Estima la probabilidad.", sol: "186/300 = 0,62." },
  ],
};

  return module.exports;
})();

P["fracciones"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: fracciones. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, recta, mezcla } = require("./_eso2c");

// Barra dividida en n partes con k coloreadas.
const barra = (x, y, w, n, k, c) => [...Array(n)].map((_, i) => `<rect x="${(x + (i * w) / n).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="22" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.45 : 1}" stroke="${c}" stroke-width="1.8"/>`).join("");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Fracciones",
  minutos: 60,
  objetivos: ["Interpretar una fracción como parte, como cociente y como operador", "Reconocer y obtener fracciones equivalentes y la fracción irreducible", "Comparar y ordenar fracciones", "Sumar, restar, multiplicar y dividir fracciones y resolver problemas"],
  claves: ["numerador", "denominador", "fracción equivalente", "fracción irreducible", "mínimo común denominador", "fracción inversa"],
  pregunta: {
    texto: "En una pizzería te ofrecen 3/8 de una pizza o 2/5 de otra igual. ¿Qué trozo es mayor?",
    respuesta: "Para compararlas se ponen con el mismo denominador: 3/8 = 15/40 y 2/5 = 16/40. Por tanto, <mark>2/5 es un poco mayor</mark>. También se puede dividir: 3/8 = 0,375 y 2/5 = 0,4.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una fracción?</h3><p>Una <b>fracción</b> a/b tiene un <b>numerador</b> (a, arriba) y un <b>denominador</b> (b, abajo, distinto de 0). Se puede entender de tres maneras:</p><ul><li><b>Parte de un todo</b>: el denominador dice en cuántas partes iguales se divide la unidad y el numerador cuántas se toman. 3/4 de una tableta.</li><li><b>Cociente</b>: 3/4 = 3 : 4 = 0,75.</li><li><b>Operador</b>: «3/4 de 200» = 200 · 3 : 4 = 150.</li></ul><p>Si el numerador es menor que el denominador, la fracción es <b>propia</b> (menor que 1); si es mayor, <b>impropia</b> (mayor que 1): 7/4 = 1 + 3/4.</p>`,
      svg: svg("Una barra dividida en 4 partes con 3 coloreadas: tres cuartos", `${barra(30, 50, 200, 4, 3, "var(--pen)")}${t(130, 34, "la unidad en 4 partes iguales", { c: "var(--muted)", s: 11 })}${t(130, 104, "3/4", { c: "var(--pen)", s: 22 })}${t(130, 128, "3 partes de 4", { s: 12 })}${t(130, 156, "3/4 de 200 = 150", { c: "var(--leaf)", s: 13 })}`),
    },
    {
      html: `<h3>Fracciones equivalentes</h3><p>Dos fracciones son <b>equivalentes</b> si representan la <mark>misma cantidad</mark>: 1/2 = 2/4 = 4/8. Se comprueba con los <b>productos cruzados</b>: a/b = c/d si a · d = b · c. Por ejemplo, 2/3 y 6/9: 2 · 9 = 18 y 3 · 6 = 18.</p><p>Se obtienen fracciones equivalentes:</p><ul><li><b>Amplificando</b>: multiplicando numerador y denominador por el mismo número. 2/3 = 8/12 (por 4).</li><li><b>Simplificando</b>: dividiendo los dos entre un divisor común. 18/24 = 3/4 (entre 6).</li></ul><p>Cuando ya no se puede simplificar más se llega a la <b>fracción irreducible</b>. Lo más rápido es dividir entre el <b>mcd</b> del numerador y el denominador.</p>`,
      svg: svg("Tres barras iguales: un medio, dos cuartos y cuatro octavos ocupan lo mismo", `${barra(40, 30, 180, 2, 1, "var(--pen)")}${barra(40, 72, 180, 4, 2, "var(--leaf)")}${barra(40, 114, 180, 8, 4, "var(--sun)")}${t(30, 46, "1/2", { c: "var(--pen)", s: 12, a: "end" })}${t(30, 88, "2/4", { c: "var(--leaf)", s: 12, a: "end" })}${t(30, 130, "4/8", { c: "var(--sun)", s: 12, a: "end" })}<path d="M130 22 V 144" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>${t(130, 166, "misma cantidad", { c: "var(--red)", s: 12 })}`),
      video: { id: "QZTyePr_Snk", titulo: "Fracciones equivalentes: explicación gráfica y numérica", canal: "Matemáticas profe Alex", vistas: 4231754 },
    },
    {
      html: `<h3>Comparar y ordenar fracciones</h3><ul><li><b>Mismo denominador</b>: es mayor la de mayor numerador. 5/9 &gt; 2/9.</li><li><b>Mismo numerador</b>: es mayor la de menor denominador (partes más grandes). 3/5 &gt; 3/8.</li><li><b>Caso general</b>: se reducen a <b>común denominador</b> con el mcm de los denominadores y se comparan los numeradores.</li></ul><p>Ejemplo: ordena 3/4, 5/6 y 7/12. mcm(4, 6, 12) = 12 → 9/12, 10/12, 7/12. Por tanto, <mark>7/12 &lt; 3/4 &lt; 5/6</mark>.</p>`,
      svg: (() => { const r = recta(0, 1, 100, 30, 230, [[7 / 12, "", "var(--sun)"], [3 / 4, "", "var(--pen)"], [5 / 6, "", "var(--leaf)"]]); return svg("Recta de 0 a 1 con 7/12, 3/4 y 5/6 colocados en orden", `${r.s}${t(r.X(7 / 12), 76, "7/12", { c: "var(--sun)", s: 12 })}${t(r.X(3 / 4), 56, "3/4", { c: "var(--pen)", s: 12 })}${t(r.X(5 / 6) + 8, 76, "5/6", { c: "var(--leaf)", s: 12 })}${t(130, 152, "7/12 < 3/4 < 5/6", { s: 14 })}`); })(),
    },
    {
      html: `<h3>Sumar y restar fracciones</h3><p>Si tienen el <b>mismo denominador</b>, se suman o restan los numeradores y se deja el denominador: 2/7 + 3/7 = 5/7.</p><p>Si tienen <b>distinto denominador</b>:</p><ol><li>Se calcula el <b>mcm</b> de los denominadores (será el nuevo denominador).</li><li>Se divide el mcm entre cada denominador y se multiplica por su numerador.</li><li>Se suman o restan los numeradores y se <b>simplifica</b>.</li></ol><p>Ejemplo: 5/6 − 3/4. mcm(6, 4) = 12 → 10/12 − 9/12 = <mark>1/12</mark>. Con un número entero, se escribe como fracción: 2 + 1/3 = 6/3 + 1/3 = 7/3.</p>`,
      video: { id: "rSLuXOTdje8", titulo: "Suma y resta de fracciones", canal: "Susi Profe", vistas: 3432971 },
    },
    {
      html: `<h3>Multiplicar y dividir fracciones</h3><p><b>Multiplicar</b>: numerador por numerador y denominador por denominador. <mark>a/b · c/d = (a · c)/(b · d)</mark>. 2/3 · 5/7 = 10/21. Conviene simplificar antes de multiplicar: 4/9 · 3/8 = (4 · 3)/(9 · 8) = 1/6.</p><p>La <b>inversa</b> de a/b es b/a: la inversa de 3/5 es 5/3, y su producto es 1.</p><p><b>Dividir</b> es multiplicar por la inversa (o multiplicar «en cruz»): <mark>a/b : c/d = (a · d)/(b · c)</mark>. 3/4 : 2/5 = 15/8.</p>`,
      svg: svg("Un rectángulo dividido en tercios en vertical y en cuartos en horizontal: la mitad de dos tercios es un tercio", `<rect x="40" y="30" width="180" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="40" y="30" width="120" height="110" fill="var(--pen)" fill-opacity=".25"/><rect x="40" y="85" width="120" height="55" fill="var(--leaf)" fill-opacity=".45"/>
        <path d="M100 30 V 140 M160 30 V 140 M40 85 H 220" stroke="var(--ink)" stroke-width="1.5"/>${t(100, 22, "2/3", { c: "var(--pen)", s: 13 })}${t(230, 120, "1/2", { c: "var(--leaf)", s: 13, a: "start" })}${t(130, 166, "1/2 · 2/3 = 2/6 = 1/3", { s: 13 })}`),
    },
    {
      html: `<h3>Operaciones combinadas</h3><p>Se respeta la misma <b>jerarquía</b> que con los enteros: paréntesis, potencias, multiplicaciones y divisiones, y por último sumas y restas. Y se simplifica al final (y si se puede, durante el camino).</p><p>Ejemplo: 1/2 + 2/3 · 9/4 − 1. Primero el producto: 2/3 · 9/4 = 18/12 = 3/2. Después: 1/2 + 3/2 − 1 = 4/2 − 1 = 2 − 1 = <b>1</b>.</p><p>Con fracciones negativas se aplica la regla de los signos: −2/5 · 10/3 = −20/15 = −4/3.</p>`,
    },
    {
      html: `<h3>La fracción de una cantidad y el problema inverso</h3><p>Para calcular la <b>fracción de una cantidad</b> se multiplica: <mark>a/b de N = N · a : b</mark>. 2/5 de 350 € = 350 · 2 : 5 = 140 €.</p><p>El problema inverso es saber el <b>total</b> conociendo una parte. Si 3/8 de los alumnos son 12, entonces 1/8 son 12 : 3 = 4 y el total (8/8) es 4 · 8 = <b>32 alumnos</b>.</p>`,
    },
    {
      html: `<h3>Problemas de fracciones encadenadas</h3><p>A veces se toma una fracción de <b>lo que queda</b>. Hay que tener cuidado con cuál es «el todo» en cada paso.</p><p>Ejemplo: Marta gasta 1/3 de su paga en el cine y 1/4 <b>de lo que le queda</b> en un libro. ¿Qué fracción le sobra?</p><ul><li>Tras el cine le queda 1 − 1/3 = 2/3.</li><li>Gasta 1/4 de 2/3 = 2/12 = 1/6 en el libro.</li><li>Le queda 2/3 − 1/6 = 4/6 − 1/6 = <b>3/6 = 1/2</b> de la paga.</li></ul><p>Si la paga era 30 €, le quedan 15 €.</p>`,
    },
  ],
  figura: {
    titulo: "Fracciones en un vistazo",
    svg: filas("Resumen de fracciones: parte, cociente y operador; equivalentes; comparar; sumar con mcm; multiplicar en línea; dividir en cruz", [["Significado", "parte · cociente · operador", "var(--pen)"], ["Equivalentes", "a · d = b · c · simplificar con el mcd", "var(--inf)"], ["Comparar", "común denominador", "var(--sun)"], ["+ y −", "mcm de los denominadores", "var(--leaf)"], ["·", "en línea: (a·c)/(b·d)", "var(--red)"], [":", "en cruz: (a·d)/(b·c)", "var(--ink)"]], 210),
  },
  video: { id: "FUbla-rPt3M", titulo: "Suma, resta, multiplicación y división de fracciones", canal: "Daniel Carreón", vistas: 10070913, megusta: 0, busqueda: "operaciones con fracciones 2 eso" },
  quiz: mezcla([
    { q: "En 5/8, el 8 es el…", o: ["denominador", "numerador", "cociente"], a: 0, e: "Partes en que se divide." },
    { q: "¿Qué fracción es equivalente a 3/4?", o: ["9/12", "6/9", "4/3"], a: 0, e: "Por 3." },
    { q: "La fracción irreducible de 20/28 es…", o: ["5/7", "10/14", "4/7"], a: 0, e: "Entre 4." },
    { q: "¿Cuál es mayor?", o: ["3/5", "3/7", "3/8"], a: 0, e: "Mismo numerador, menor denominador." },
    { q: "1/4 + 1/6 =", o: ["5/12", "2/10", "1/10"], a: 0, e: "3/12 + 2/12." },
    { q: "2/3 · 3/5 =", o: ["2/5", "6/8", "5/6"], a: 0, e: "6/15 = 2/5." },
    { q: "La inversa de 4/9 es…", o: ["9/4", "−4/9", "4/9"], a: 0, e: "Se dan la vuelta." },
    { q: "1/2 : 1/4 =", o: ["2", "1/8", "1/2"], a: 0, e: "4/2." },
    { q: "3/4 de 60 =", o: ["45", "80", "15"], a: 0, e: "60 · 3 : 4." },
    { q: "Si 2/5 de una cantidad son 10, la cantidad es…", o: ["25", "4", "50"], a: 0, e: "1/5 = 5; 5 · 5." },
  ]),
  examen: mezcla([
    { q: "2 − 1/3 · 3/2 =", o: ["3/2", "5/2", "1/2"], a: 0, e: "2 − 1/2." },
    { q: "Gastas 1/2 y luego 1/3 de lo que queda. Te queda…", o: ["1/3", "1/6", "1/2"], a: 0, e: "1/2 − 1/6." },
    { q: "Ordena: 2/3, 5/8, 7/12.", o: ["7/12 < 5/8 < 2/3", "2/3 < 5/8 < 7/12", "5/8 < 7/12 < 2/3"], a: 0, e: "14/24, 15/24, 16/24." },
  ]),
  feynman: ["Las tres formas de entender una fracción", "Cómo saber si dos fracciones son equivalentes", "Por qué hace falta común denominador para sumar", "Cómo se divide una fracción entre otra", "Cómo calcular el total conociendo una parte"],
  mapa: mapa("FRACCIONES", "var(--eso)", [
    ["Significado", "parte · cociente · operador", "var(--pen)"],
    ["Equivalentes", "amplificar · simplificar", "var(--inf)"],
    ["+ y −", "mcm de denominadores", "var(--leaf)"],
    ["· y :", "en línea · en cruz", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Numerador", "Número de arriba: partes que se toman."],
    ["Denominador", "Número de abajo: partes en que se divide la unidad."],
    ["Equivalentes", "a/b = c/d si a · d = b · c."],
    ["Irreducible", "No se puede simplificar: mcd(a, b) = 1."],
    ["Sumar", "Común denominador con el mcm."],
    ["Multiplicar", "(a · c)/(b · d)."],
    ["Dividir", "(a · d)/(b · c): por la inversa."],
    ["Fracción de N", "N · a : b."],
  ],
  familias: ["Usad recetas: ¿cuánto hace falta para la mitad de personas? ¿Y para 3/4?", "Comparad ofertas: «1/3 gratis» frente a «25 % de descuento».", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Fracciones: significados, equivalencia, comparación y orden, operaciones y jerarquía, fracción de una cantidad y problemas (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Regletas o tiras de papel para ver fracciones equivalentes.", "Recetas de cocina escaladas.", "Problemas de «lo que queda» con diagramas de barras."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): fracciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula y simplifica: 3/4 − 1/6 + 2/3.", pasos: ["mcm(4, 6, 3) = 12.", "9/12 − 2/12 + 8/12 = 15/12.", "Simplificamos entre 3: 5/4."], resultado: "5/4" },
    { enunciado: "Calcula: (1/2 − 1/3) : 5/6.", pasos: ["Paréntesis: 3/6 − 2/6 = 1/6.", "1/6 : 5/6 = (1 · 6)/(6 · 5) = 6/30.", "Simplificamos: 1/5."], resultado: "1/5" },
    { enunciado: "En una clase, 2/5 de los alumnos van en bus y 1/3 en bici; el resto, 8 alumnos, va andando. ¿Cuántos alumnos hay?", pasos: ["Bus y bici: 2/5 + 1/3 = 6/15 + 5/15 = 11/15.", "Andando: 1 − 11/15 = 4/15, que son 8 alumnos.", "1/15 = 2 alumnos; total 15/15 = 30."], resultado: "30 alumnos." },
  ],
  errores: [
    "Sumar numeradores y denominadores: 1/2 + 1/3 no es 2/5.",
    "Buscar común denominador para multiplicar (no hace falta).",
    "Dividir sin dar la vuelta a la segunda fracción.",
    "No simplificar el resultado final.",
    "En los problemas de «lo que queda», calcular la fracción sobre el total.",
    "Pensar que 3/8 es mayor que 3/5 porque 8 es mayor que 5.",
  ],
  ejercicios: [
    { q: "Escribe dos fracciones equivalentes a 4/10 y su fracción irreducible.", sol: "8/20, 2/5… La irreducible es 2/5." },
    { q: "¿Son equivalentes 6/14 y 9/21?", sol: "Sí: 6 · 21 = 126 = 14 · 9." },
    { q: "Ordena de menor a mayor: 1/2, 3/5, 4/9, 7/10.", sol: "mcm 90: 45, 54, 40, 63 → 4/9 < 1/2 < 3/5 < 7/10." },
    { q: "Calcula: 5/8 + 3/4 − 1/2.", sol: "5/8 + 6/8 − 4/8 = 7/8." },
    { q: "Calcula: 6/5 · 10/9 y 7/4 : 21/8.", sol: "60/45 = 4/3; 56/84 = 2/3." },
    { q: "Calcula: 2/3 + 1/3 · (1/2 − 1/4).", sol: "Paréntesis 1/4; 1/3 · 1/4 = 1/12; 8/12 + 1/12 = 9/12 = 3/4." },
    { q: "¿Cuánto son 5/6 de 240 €?", sol: "240 · 5 : 6 = 200 €." },
    { q: "Los 3/7 de un depósito son 120 litros. ¿Qué capacidad tiene?", sol: "1/7 = 40 L; total 280 L." },
    { q: "Leo lee 1/4 de un libro el lunes y 2/3 del resto el martes. ¿Qué fracción le falta?", sol: "Queda 3/4; lee 2/3 · 3/4 = 1/2; le falta 3/4 − 1/2 = 1/4." },
    { q: "Escribe 17/5 como número mixto y 2 3/4 como fracción impropia.", sol: "17/5 = 3 + 2/5; 2 3/4 = 11/4." },
  ],
};

  return module.exports;
})();

P["funciones"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: funciones y gráficas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 60,
  objetivos: ["Representar puntos en unos ejes de coordenadas", "Reconocer cuándo una relación es una función y expresarla con tabla, gráfica y fórmula", "Interpretar gráficas: crecimiento, máximos y mínimos, cortes con los ejes", "Representar funciones lineales y de proporcionalidad y calcular su pendiente"],
  claves: ["coordenadas", "variable independiente", "variable dependiente", "dominio", "creciente", "pendiente"],
  pregunta: {
    texto: "Un taxi cobra 3 € por bajar la bandera y 1,20 € por kilómetro. ¿Cómo puedes saber el precio de cualquier trayecto sin hacer la cuenta cada vez?",
    respuesta: "Con una <b>función</b>: precio = 3 + 1,20 · km, o <mark>y = 1,2x + 3</mark>. Para 10 km: 1,2 · 10 + 3 = 15 €. Su gráfica es una recta, y en ella se puede leer el precio de cualquier trayecto de un vistazo.",
  },
  bloques: [
    {
      html: `<h3>Coordenadas cartesianas</h3><p>Para situar puntos en el plano se usan dos rectas perpendiculares: el <b>eje X</b> (horizontal, de abscisas) y el <b>eje Y</b> (vertical, de ordenadas). Se cortan en el <b>origen</b> O(0, 0).</p><p>Cada punto se escribe con un par <b>(x, y)</b>: primero cuánto se mueve en horizontal y después en vertical. A(3, 2) está 3 a la derecha y 2 arriba; B(−2, −1), 2 a la izquierda y 1 abajo.</p><p>Los ejes dividen el plano en cuatro <b>cuadrantes</b>, numerados en sentido contrario a las agujas del reloj desde arriba a la derecha.</p>`,
      svg: svg("Ejes de coordenadas con los puntos A(3, 2) y B(−2, −1) y los cuatro cuadrantes", `${ejes(130, 92, 18, [-6, 6], [-4, 4])}<circle cx="${130 + 54}" cy="${92 - 36}" r="5" fill="var(--pen)"/>${t(130 + 60, 92 - 42, "A(3, 2)", { c: "var(--pen)", s: 11, a: "start" })}<circle cx="${130 - 36}" cy="${92 + 18}" r="5" fill="var(--red)"/>${t(130 - 42, 92 + 34, "B(−2, −1)", { c: "var(--red)", s: 11, a: "end" })}
        ${t(214, 34, "I", { c: "var(--muted)", s: 13 })}${t(46, 34, "II", { c: "var(--muted)", s: 13 })}${t(46, 158, "III", { c: "var(--muted)", s: 13 })}${t(214, 158, "IV", { c: "var(--muted)", s: 13 })}`),
    },
    {
      html: `<h3>¿Qué es una función?</h3><p>Una <b>función</b> es una relación entre dos magnitudes en la que a <mark>cada valor de la primera le corresponde un único valor de la segunda</mark>.</p><ul><li>La <b>variable independiente (x)</b> es la que elegimos: el tiempo, los kilos, los kilómetros.</li><li>La <b>variable dependiente (y)</b> se calcula a partir de x: la temperatura, el precio.</li></ul><p>Ejemplo: a cada hora del día le corresponde una temperatura: es una función. Pero a cada edad no le corresponde una única altura (hay muchas personas de 13 años con alturas distintas): no es función.</p><p>En una gráfica, una relación es función si ninguna <b>recta vertical</b> la corta en más de un punto.</p>`,
    },
    {
      html: `<h3>Formas de expresar una función</h3><p>Una misma función se puede dar de cuatro maneras:</p><ul><li><b>Enunciado</b>: «cada cuaderno cuesta 2 €».</li><li><b>Tabla de valores</b>:</li></ul>${tabla(["Cuadernos (x)", "0", "1", "2", "3", "4"], [["Precio (y)", "0", "2", "4", "6", "8"]])}<ul><li><b>Gráfica</b>: se representan los puntos (0, 0), (1, 2), (2, 4)… en los ejes.</li><li><b>Fórmula</b> o expresión algebraica: <mark>y = 2x</mark>.</li></ul><p>La fórmula es la más útil porque permite calcular cualquier valor; la gráfica, la más visual para ver cómo se comporta.</p>`,
    },
    {
      html: `<h3>Interpretar una gráfica</h3><p>De una gráfica se pueden leer muchas características:</p><ul><li><b>Dominio</b>: los valores de x para los que hay gráfica.</li><li><b>Crece</b> si al aumentar x aumenta y (la gráfica sube de izquierda a derecha); <b>decrece</b> si baja; es <b>constante</b> si se mantiene horizontal.</li><li><b>Máximo</b>: el punto más alto respecto a los de su alrededor; <b>mínimo</b>: el más bajo.</li><li><b>Cortes con los ejes</b>: donde x = 0 (eje Y) y donde y = 0 (eje X).</li></ul><p>La gráfica de la temperatura de un día suele crecer desde el amanecer, tener un máximo hacia las 16 h y decrecer por la noche.</p>`,
      svg: svg("Gráfica de la temperatura a lo largo de un día: crece hasta un máximo a las 16 horas y luego decrece; mínimo al amanecer", `${ejes(26, 150, 9, [0, 24], [0, 14], { rejilla: false })}<path d="M26 ${150 - 6 * 9} C 50 ${150 - 4 * 9}, 70 ${150 - 3 * 9}, 80 ${150 - 3.2 * 9} S 140 ${150 - 13 * 9}, ${26 + 16 * 9} ${150 - 13 * 9} S 220 ${150 - 6 * 9}, ${26 + 24 * 9} ${150 - 5.5 * 9}" fill="none" stroke="var(--red)" stroke-width="3"/>
        <circle cx="${26 + 16 * 9}" cy="${150 - 13 * 9}" r="5" fill="var(--red)"/>${t(26 + 16 * 9, 150 - 13 * 9 - 10, "máximo (16 h)", { c: "var(--red)", s: 11 })}<circle cx="78" cy="${150 - 3.15 * 9}" r="5" fill="var(--pen)"/>${t(78, 150 - 3 * 9 + 20, "mínimo", { c: "var(--pen)", s: 11 })}${t(120, 168, "hora del día", { c: "var(--muted)", s: 10 })}`),
      video: { id: "edE5Y1kOgFw", titulo: "Graficar funciones lineales", canal: "Daniel Carreón", vistas: 5193990 },
    },
    {
      html: `<h3>Función de proporcionalidad directa: y = mx</h3><p>Si dos magnitudes son directamente proporcionales, la función es <mark>y = mx</mark>. Su gráfica es una <b>recta que pasa por el origen</b>.</p><p>El número <b>m</b> es la <b>pendiente</b>: lo que aumenta y cuando x aumenta 1.</p><ul><li>Si m &gt; 0, la recta es <b>creciente</b> (y = 2x).</li><li>Si m &lt; 0, es <b>decreciente</b> (y = −x).</li><li>Cuanto mayor es |m|, más inclinada está.</li></ul><p>Para dibujarla basta con dos puntos, por ejemplo (0, 0) y (1, m).</p>`,
      svg: svg("Tres rectas por el origen: y = 2x muy inclinada, y = x/2 poco inclinada y y = −x decreciente", `${ejes(130, 92, 16, [-7, 7], [-5, 5])}<path d="M${130 - 40} ${92 + 80} L ${130 + 40} ${92 - 80}" stroke="var(--pen)" stroke-width="2.5"/><path d="M${130 - 112} ${92 + 56} L ${130 + 112} ${92 - 56}" stroke="var(--leaf)" stroke-width="2.5"/><path d="M${130 - 80} ${92 - 80} L ${130 + 80} ${92 + 80}" stroke="var(--red)" stroke-width="2.5"/>
        ${t(178, 22, "y = 2x", { c: "var(--pen)", s: 11 })}${t(222, 28, "y = x/2", { c: "var(--leaf)", s: 11 })}${t(76, 22, "y = −x", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Función lineal (afín): y = mx + n</h3><p>La función <mark>y = mx + n</mark> también es una recta, pero no pasa por el origen: corta al eje Y en el punto <b>(0, n)</b>. A n se le llama <b>ordenada en el origen</b>.</p><p>Ejemplo: y = 2x − 3. Tabla con dos o tres valores:</p>${tabla(["x", "0", "1", "3"], [["y", "−3", "−1", "3"]])}<p>Rectas con la misma pendiente son <b>paralelas</b>: y = 2x, y = 2x + 1 e y = 2x − 3. Si m = 0 la función es <b>constante</b>: y = 4 es una recta horizontal.</p>`,
      video: { id: "AoZpzAoC1Qg", titulo: "Gráfica de la función lineal", canal: "Matemáticas profe Alex", vistas: 13775977 },
    },
    {
      html: `<h3>Calcular la pendiente y la ecuación</h3><p>Si una recta pasa por los puntos A(x₁, y₁) y B(x₂, y₂), su pendiente es:</p><p style="text-align:center"><mark>m = (y₂ − y₁) / (x₂ − x₁)</mark></p><p>Ejemplo: A(1, 3) y B(4, 9). m = (9 − 3)/(4 − 1) = 6/3 = 2. Para hallar n se sustituye un punto en y = 2x + n: 3 = 2 + n → n = 1. La recta es <b>y = 2x + 1</b>.</p><p>La pendiente indica la <b>rapidez de cambio</b>: en una gráfica distancia-tiempo, la pendiente es la velocidad.</p>`,
      video: { id: "ULxjPNTiAZ8", titulo: "Pendiente de la recta", canal: "Matemáticas profe Alex", vistas: 2946613 },
    },
    {
      html: `<h3>Funciones en situaciones reales</h3><ul><li><b>Tarifas</b>: un gimnasio cobra 20 € de matrícula y 30 € al mes: y = 30x + 20.</li><li><b>Velocidad constante</b>: un ciclista a 15 km/h recorre y = 15x km en x horas.</li><li><b>Depósito que se vacía</b>: 500 L que pierden 25 L por minuto: y = 500 − 25x (pendiente negativa).</li><li><b>Proporcionalidad inversa</b>: el tiempo para recorrer 120 km según la velocidad, y = 120/x, no es una recta sino una <b>hipérbola</b>.</li></ul><p>Para comparar dos ofertas se dibujan las dos rectas: el punto donde se cortan indica a partir de cuándo conviene una u otra.</p>`,
    },
  ],
  figura: {
    titulo: "Funciones en un vistazo",
    svg: filas("Resumen: coordenadas, función con un único valor, cuatro formas de expresarla, crecimiento, y = mx, y = mx + n y pendiente", [["Punto", "(x, y): primero horizontal", "var(--pen)"], ["Función", "a cada x, un único y", "var(--inf)"], ["Expresar", "enunciado · tabla · gráfica · fórmula", "var(--sun)"], ["y = mx", "recta por el origen", "var(--leaf)"], ["y = mx + n", "corta el eje Y en (0, n)", "var(--red)"], ["Pendiente", "m = (y₂ − y₁)/(x₂ − x₁)", "var(--ink)"]], 200),
  },
  video: { id: "PnATAsxu_oo", titulo: "¿Qué es la función lineal? La pendiente", canal: "Andrey Trejos - Mate para secundaria", vistas: 1914246, megusta: 0, busqueda: "funciones y gráficas 2 eso" },
  quiz: mezcla([
    { q: "El punto (−3, 4) está en el cuadrante…", o: ["II", "I", "IV"], a: 0, e: "x negativa, y positiva." },
    { q: "En (5, −2), la abscisa es…", o: ["5", "−2", "3"], a: 0, e: "La primera coordenada." },
    { q: "En una función, a cada x le corresponde…", o: ["un único y", "dos valores de y", "cualquier número de y"], a: 0, e: "Definición." },
    { q: "Si la gráfica sube de izquierda a derecha, la función es…", o: ["creciente", "decreciente", "constante"], a: 0, e: "y aumenta." },
    { q: "La gráfica de y = 3x pasa por…", o: ["el origen", "(0, 3)", "(3, 0)"], a: 0, e: "Proporcionalidad directa." },
    { q: "La pendiente de y = −2x + 5 es…", o: ["−2", "5", "2"], a: 0, e: "Coeficiente de x." },
    { q: "y = 4x − 1 corta al eje Y en…", o: ["(0, −1)", "(0, 4)", "(−1, 0)"], a: 0, e: "x = 0." },
    { q: "¿Qué rectas son paralelas?", o: ["y = 3x e y = 3x + 2", "y = 3x e y = −3x", "y = x e y = 2x"], a: 0, e: "Misma pendiente." },
    { q: "La pendiente de la recta por (0, 1) y (2, 7) es…", o: ["3", "6", "4"], a: 0, e: "6/2." },
    { q: "y = 5 es una función…", o: ["constante", "creciente", "decreciente"], a: 0, e: "Pendiente 0." },
  ]),
  examen: mezcla([
    { q: "La recta que pasa por (1, 1) y (3, 5) es…", o: ["y = 2x − 1", "y = 2x + 1", "y = x + 2"], a: 0, e: "m = 2; 1 = 2 + n." },
    { q: "Un móvil cobra 10 € al mes más 0,05 € por minuto. Con 200 minutos pagas…", o: ["20 €", "10,05 €", "15 €"], a: 0, e: "10 + 0,05 · 200." },
    { q: "¿Para qué x vale 0 la función y = 3x − 12?", o: ["4", "−12", "3"], a: 0, e: "3x = 12." },
  ]),
  feynman: ["Cómo se sitúa un punto en unos ejes", "Qué hace falta para que una relación sea función", "Qué se puede leer en una gráfica", "Diferencia entre y = mx e y = mx + n", "Qué significa la pendiente"],
  mapa: mapa("FUNCIONES", "var(--eso)", [
    ["Coordenadas", "(x, y) · cuadrantes", "var(--pen)"],
    ["Función", "un único y para cada x", "var(--inf)"],
    ["Gráficas", "crece · decrece · máximos", "var(--red)"],
    ["Rectas", "y = mx + n · pendiente", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Coordenadas", "(x, y): abscisa y ordenada."],
    ["Función", "A cada x le corresponde un único y."],
    ["Variable independiente", "x: la que se elige."],
    ["Creciente", "Al aumentar x, aumenta y."],
    ["Máximo", "Punto más alto respecto a su entorno."],
    ["y = mx", "Proporcionalidad directa: recta por el origen."],
    ["Pendiente", "Lo que cambia y cuando x aumenta 1."],
    ["Ordenada en el origen", "n: punto de corte con el eje Y."],
  ],
  familias: ["Comparad dos tarifas de móvil o de gimnasio con una tabla y una gráfica.", "Registrad la temperatura de casa varias veces al día y dibujad la gráfica.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Coordenadas cartesianas; concepto de función y formas de expresarla; características de una gráfica; funciones lineales y afines, pendiente y ordenada en el origen; modelización de situaciones reales (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Batalla naval en ejes cartesianos.", "Gráficas de situaciones (llenar una bañera, un paseo) para contar la historia que representan.", "Comparar tarifas reales con GeoGebra o una hoja de cálculo."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): funciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Haz una tabla y di cómo es la función y = −2x + 4. ¿Dónde corta a los ejes?", pasos: ["x = 0 → y = 4; x = 1 → y = 2; x = 2 → y = 0.", "Pendiente −2: decreciente.", "Corta al eje Y en (0, 4) y al eje X en (2, 0)."], resultado: "Recta decreciente que corta los ejes en (0, 4) y (2, 0)." },
    { enunciado: "Halla la ecuación de la recta que pasa por A(−1, 5) y B(2, −1).", pasos: ["m = (−1 − 5)/(2 − (−1)) = −6/3 = −2.", "y = −2x + n; con A: 5 = 2 + n → n = 3.", "Comprobación con B: −4 + 3 = −1. ✔"], resultado: "y = −2x + 3" },
    { enunciado: "Gimnasio A: 30 € al mes. Gimnasio B: 60 € de matrícula y 20 € al mes. ¿Cuándo sale mejor B?", pasos: ["A: y = 30x; B: y = 20x + 60.", "Se igualan: 30x = 20x + 60 → x = 6 meses.", "Para más de 6 meses, B es más barato."], resultado: "B conviene si vas más de 6 meses." },
  ],
  errores: [
    "Escribir las coordenadas al revés: (y, x).",
    "Pensar que toda gráfica es una función.",
    "Confundir la pendiente con el punto de corte con el eje Y.",
    "Calcular la pendiente restando en distinto orden arriba y abajo.",
    "Unir con una recta puntos de una función que no es lineal.",
  ],
  ejercicios: [
    { q: "Representa los puntos A(2, −3), B(−4, 1), C(0, 5) y D(−2, 0) e indica su cuadrante.", sol: "A en IV, B en II; C y D están sobre los ejes (no tienen cuadrante)." },
    { q: "¿Es función «a cada alumno le corresponde su fecha de nacimiento»? ¿Y «a cada fecha, los alumnos nacidos ese día»?", sol: "La primera sí; la segunda no (puede haber varios o ninguno)." },
    { q: "Haz una tabla de y = 3x − 2 para x = −1, 0, 1, 2.", sol: "−5, −2, 1, 4." },
    { q: "Indica pendiente y ordenada en el origen de y = −x/2 + 3.", sol: "m = −1/2; n = 3." },
    { q: "¿Qué recta es más inclinada, y = 4x o y = −5x?", sol: "y = −5x (|−5| > 4)." },
    { q: "Calcula la pendiente de la recta que pasa por (2, 3) y (6, 5).", sol: "2/4 = 1/2." },
    { q: "Halla la ecuación de la recta de pendiente 3 que pasa por (1, 7).", sol: "7 = 3 + n → y = 3x + 4." },
    { q: "Un depósito con 800 L pierde 40 L por hora. Escribe la función y di cuándo se vacía.", sol: "y = 800 − 40x; a las 20 horas." },
    { q: "Escribe la recta paralela a y = 2x − 5 que pasa por el origen.", sol: "y = 2x." },
    { q: "Un taxi cobra 2,50 € más 1,10 € por km. ¿Cuántos km has hecho si pagas 19 €?", sol: "1,1x + 2,5 = 19 → x = 15 km." },
  ],
};

  return module.exports;
})();

P["pitagoras"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: el teorema de Pitágoras. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "El teorema de Pitágoras",
  minutos: 55,
  objetivos: ["Identificar la hipotenusa y los catetos de un triángulo rectángulo", "Enunciar y comprender el teorema de Pitágoras", "Calcular un lado desconocido de un triángulo rectángulo", "Aplicar el teorema a figuras planas y a problemas reales"],
  claves: ["triángulo rectángulo", "hipotenusa", "cateto", "teorema de Pitágoras", "terna pitagórica", "diagonal"],
  pregunta: {
    texto: "Una tele de «50 pulgadas» no mide 50 pulgadas ni de ancho ni de alto. ¿Qué mide entonces?",
    respuesta: "Mide 50 pulgadas su <b>diagonal</b>. Si la pantalla mide 44 de ancho y unas 24 de alto, la diagonal es <mark>√(44² + 24²) ≈ 50</mark>. Ancho, alto y diagonal forman un triángulo rectángulo, y el <b>teorema de Pitágoras</b> los relaciona.",
  },
  bloques: [
    {
      html: `<h3>El triángulo rectángulo</h3><p>Un <b>triángulo rectángulo</b> tiene un ángulo recto (90°). Sus lados tienen nombre propio:</p><ul><li>La <b>hipotenusa</b> (a) es el lado opuesto al ángulo recto. Es siempre el <mark>lado más largo</mark>.</li><li>Los <b>catetos</b> (b y c) son los dos lados que forman el ángulo recto.</li></ul><p>Los otros dos ángulos son agudos y suman 90°, porque los tres ángulos de cualquier triángulo suman 180°.</p>`,
      svg: svg("Triángulo rectángulo con el ángulo recto abajo a la izquierda, catetos b y c, e hipotenusa a", `<path d="M50 140 L 50 40 L 210 140 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="3"/><path d="M50 124 h 16 v 16" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${t(36, 94, "b", { c: "var(--leaf)", s: 16 })}${t(130, 160, "c", { c: "var(--leaf)", s: 16 })}${t(140, 80, "a", { c: "var(--red)", s: 16 })}${t(186, 60, "hipotenusa", { c: "var(--red)", s: 12 })}${t(130, 176, "catetos: b y c", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>El teorema</h3><p>En todo triángulo rectángulo, <mark>el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos</mark>:</p><p style="font-size:1.3em;text-align:center"><b>a² = b² + c²</b></p><p>Interpretación geométrica: si se dibuja un cuadrado sobre cada lado, el área del cuadrado grande (sobre la hipotenusa) es igual a la suma de las áreas de los dos pequeños. Con lados 3, 4 y 5: 9 + 16 = 25.</p><p>Se atribuye a Pitágoras de Samos (siglo VI a. C.), aunque babilonios, egipcios y chinos ya conocían casos concretos mucho antes.</p>`,
      svg: svg("Triángulo de lados 3, 4 y 5 con un cuadrado sobre cada lado: 9 más 16 igual a 25", `<g transform="translate(78 62) scale(.85)">
        <path d="M0 48 L 0 0 L 64 48 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="-48" y="0" width="48" height="48" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>
        <rect x="0" y="48" width="64" height="64" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
        <path d="M0 0 L 64 48 L 112 -16 L 48 -64 Z" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2"/></g>
        ${t(58, 88, "9", { c: "var(--leaf)", s: 15 })}${t(105, 136, "16", { c: "var(--pen)", s: 15 })}${t(126, 60, "25", { c: "var(--red)", s: 16 })}${t(214, 140, "9 + 16 = 25", { s: 12 })}`),
      video: { id: "w6nh99v3r4A", titulo: "Teorema de Pitágoras: fórmula, demostración y ejemplos", canal: "Susi Profe", vistas: 2072787 },
    },
    {
      html: `<h3>Calcular la hipotenusa</h3><p>Si se conocen los dos catetos, se despeja la hipotenusa:</p><p style="text-align:center"><mark>a = √(b² + c²)</mark></p><p>Ejemplo: catetos de 6 cm y 8 cm. a = √(36 + 64) = √100 = <b>10 cm</b>.</p><p>Si la raíz no es exacta, se da una aproximación: catetos 2 y 3 → a = √13 ≈ <b>3,61</b>. Comprobación rápida: la hipotenusa debe ser mayor que cada cateto pero menor que su suma.</p>`,
      video: { id: "2UbdPiqAiHY", titulo: "Teorema de Pitágoras: encontrar la hipotenusa", canal: "Matemáticas profe Alex", vistas: 7202475 },
    },
    {
      html: `<h3>Calcular un cateto</h3><p>Si se conocen la hipotenusa y un cateto, se <b>resta</b>:</p><p style="text-align:center"><mark>b = √(a² − c²)</mark></p><p>Ejemplo: hipotenusa 13 m y un cateto 5 m. b = √(169 − 25) = √144 = <b>12 m</b>.</p><p>El error típico es sumar también aquí. Pregúntate: ¿busco el lado mayor (hipotenusa → suma) o uno de los menores (cateto → resta)?</p>`,
    },
    {
      html: `<h3>¿Es rectángulo? El recíproco</h3><p>El teorema funciona también al revés: si en un triángulo se cumple <b>a² = b² + c²</b> (siendo a el lado mayor), el triángulo es <b>rectángulo</b>. Además:</p><ul><li>Si <b>a² &lt; b² + c²</b>, es <b>acutángulo</b> (todos sus ángulos son agudos).</li><li>Si <b>a² &gt; b² + c²</b>, es <b>obtusángulo</b> (tiene un ángulo obtuso).</li></ul><p>Los grupos de tres enteros que cumplen el teorema se llaman <b>ternas pitagóricas</b>: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25) y sus múltiplos, como (6, 8, 10). Los albañiles egipcios usaban una cuerda con 12 nudos para formar un triángulo 3-4-5 y trazar ángulos rectos.</p>`,
      svg: svg("Cuerda con 12 nudos formando un triángulo de lados 3, 4 y 5 que marca un ángulo recto", `<path d="M50 140 L 50 50 L 170 140 Z" fill="none" stroke="var(--sun)" stroke-width="3"/>${[0, 1, 2, 3].map((i) => `<circle cx="50" cy="${140 - i * 30}" r="5" fill="var(--sun)"/>`).join("")}${[1, 2, 3, 4].map((i) => `<circle cx="${50 + i * 30}" cy="140" r="5" fill="var(--sun)"/>`).join("")}${[1, 2, 3, 4].map((i) => `<circle cx="${50 + i * 24}" cy="${50 + i * 18}" r="5" fill="var(--sun)"/>`).join("")}<path d="M50 126 h 14 v 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${t(32, 100, "3", { s: 15 })}${t(110, 164, "4", { s: 15 })}${t(124, 84, "5", { s: 15 })}${t(204, 60, "12 nudos", { c: "var(--sun)", s: 12 })}`),
    },
    {
      html: `<h3>Pitágoras en las figuras planas</h3><p>Muchas figuras esconden triángulos rectángulos:</p>${tabla(["Figura", "Triángulo rectángulo", "Fórmula"], [["Rectángulo", "base, altura y diagonal", "d = √(b² + h²)"], ["Cuadrado de lado l", "dos lados y la diagonal", "d = √2 · l ≈ 1,41 · l"], ["Triángulo isósceles", "media base, altura y lado igual", "h = √(l² − (b/2)²)"], ["Triángulo equilátero", "lado, mitad del lado y altura", "h = √(l² − (l/2)²) ≈ 0,87 · l"], ["Rombo", "semidiagonales y lado", "l = √((D/2)² + (d/2)²)"], ["Trapecio rectángulo", "altura, diferencia de bases y lado oblicuo", "l = √(h² + (B − b)²)"]])}<p>Hallar la altura con Pitágoras permite luego calcular el <b>área</b>.</p>`,
    },
    {
      html: `<h3>Pitágoras en el espacio</h3><p>En un ortoedro (una caja) de dimensiones a, b y c, la <b>diagonal del espacio</b> se calcula aplicando Pitágoras dos veces:</p><ol><li>Diagonal de la base: d² = a² + b².</li><li>Diagonal del ortoedro: D² = d² + c² = <mark>a² + b² + c²</mark>.</li></ol><p>Ejemplo: una caja de 30 × 40 × 120 cm. D = √(900 + 1.600 + 14.400) = √16.900 = <b>130 cm</b>. Así se sabe si un objeto largo cabe dentro de una caja o un armario.</p>`,
      svg: svg("Ortoedro con la diagonal de la base y la diagonal del espacio marcadas", `<path d="M40 140 h 120 v -70 h -120 z" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2"/><path d="M40 70 l 50 -40 h 120 l -50 40 M160 140 l 50 -40 v -70" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M40 140 l 50 -40 h 120 M90 100 v -70" fill="none" stroke="var(--pen)" stroke-width="1.2" stroke-dasharray="4 3"/>
        <path d="M40 140 L 210 100" stroke="var(--leaf)" stroke-width="2.5"/><path d="M40 140 L 210 30" stroke="var(--red)" stroke-width="2.5"/>${t(150, 136, "d", { c: "var(--leaf)", s: 14 })}${t(120, 76, "D", { c: "var(--red)", s: 14 })}${t(130, 166, "D² = a² + b² + c²", { s: 13 })}`),
    },
    {
      html: `<h3>Problemas con Pitágoras</h3><ul><li><b>Escalera</b>: una escalera de 5 m apoyada en una pared con el pie a 1,4 m. Altura que alcanza: √(25 − 1,96) = √23,04 = <b>4,8 m</b>.</li><li><b>Cometa</b>: hilo de 50 m y la sombra de la cometa a 30 m del niño: altura √(2.500 − 900) = <b>40 m</b>.</li><li><b>Atajo</b>: en un campo de 80 × 60 m, ir por la diagonal (100 m) en lugar de por los lados (140 m) ahorra 40 m.</li><li><b>Pantallas</b>: una tele de 16 : 9 con 32 de ancho mide de alto 18; diagonal √(1.024 + 324) ≈ 36,7 pulgadas.</li></ul><p>Dibuja siempre el triángulo y marca la hipotenusa antes de calcular.</p>`,
    },
  ],
  figura: {
    titulo: "Pitágoras en un vistazo",
    svg: filas("Resumen: hipotenusa lado mayor; a² = b² + c²; hipotenusa con suma; cateto con resta; ternas; diagonal del espacio", [["Hipotenusa", "lado opuesto al ángulo recto (el mayor)", "var(--red)"], ["Teorema", "a² = b² + c²", "var(--pen)"], ["Hipotenusa", "a = √(b² + c²)", "var(--leaf)"], ["Cateto", "b = √(a² − c²)", "var(--sun)"], ["Ternas", "3-4-5 · 5-12-13 · 8-15-17", "var(--inf)"], ["En el espacio", "D² = a² + b² + c²", "var(--ink)"]], 200),
  },
  video: { id: "2yfkEAt2ew0", titulo: "Teorema de Pitágoras, explicación fácil", canal: "Daniel Carreón", vistas: 9510047, megusta: 0, busqueda: "teorema de pitágoras" },
  quiz: mezcla([
    { q: "La hipotenusa es…", o: ["el lado opuesto al ángulo recto", "el lado más corto", "cualquier cateto"], a: 0, e: "Y el mayor." },
    { q: "El teorema de Pitágoras dice…", o: ["a² = b² + c²", "a = b + c", "a² = b² − c²"], a: 0, e: "Hipotenusa al cuadrado." },
    { q: "Catetos 9 y 12. La hipotenusa mide…", o: ["15", "21", "√21"], a: 0, e: "√(81 + 144) = √225." },
    { q: "Hipotenusa 10 y cateto 6. El otro cateto mide…", o: ["8", "√136", "4"], a: 0, e: "√(100 − 36)." },
    { q: "¿Cuál es una terna pitagórica?", o: ["5, 12, 13", "4, 5, 6", "2, 3, 4"], a: 0, e: "25 + 144 = 169." },
    { q: "Un triángulo de lados 4, 5 y 7 es…", o: ["obtusángulo", "rectángulo", "acutángulo"], a: 0, e: "49 > 16 + 25." },
    { q: "La diagonal de un cuadrado de lado 5 mide aproximadamente…", o: ["7,07", "10", "25"], a: 0, e: "5 · √2." },
    { q: "Para hallar la altura de un triángulo isósceles se usa…", o: ["la mitad de la base", "la base entera", "el perímetro"], a: 0, e: "Se divide en dos triángulos rectángulos." },
    { q: "Rectángulo de 8 × 6. Su diagonal mide…", o: ["10", "14", "48"], a: 0, e: "√100." },
    { q: "Los dos ángulos agudos de un triángulo rectángulo suman…", o: ["90°", "180°", "45°"], a: 0, e: "180 − 90." },
  ]),
  examen: mezcla([
    { q: "La altura de un triángulo equilátero de lado 10 cm mide…", o: ["≈ 8,66 cm", "5 cm", "≈ 11,18 cm"], a: 0, e: "√(100 − 25) = √75." },
    { q: "Un rombo de diagonales 16 y 12 cm tiene un lado de…", o: ["10 cm", "20 cm", "14 cm"], a: 0, e: "√(64 + 36)." },
    { q: "La diagonal de un cubo de arista 2 mide…", o: ["√12 ≈ 3,46", "√8 ≈ 2,83", "6"], a: 0, e: "√(4 + 4 + 4)." },
  ]),
  feynman: ["Qué lado es la hipotenusa y cómo reconocerla", "Qué dice el teorema con áreas de cuadrados", "Cuándo se suma y cuándo se resta", "Cómo saber si un triángulo es rectángulo", "Cómo se calcula la diagonal de una caja"],
  mapa: mapa("PITÁGORAS", "var(--eso)", [
    ["Triángulo rectángulo", "hipotenusa · catetos", "var(--red)"],
    ["Teorema", "a² = b² + c²", "var(--pen)"],
    ["Figuras planas", "alturas · diagonales", "var(--leaf)"],
    ["Espacio", "D² = a² + b² + c²", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Hipotenusa", "Lado opuesto al ángulo recto; el más largo."],
    ["Catetos", "Lados que forman el ángulo recto."],
    ["Teorema de Pitágoras", "a² = b² + c²."],
    ["Hipotenusa", "a = √(b² + c²)."],
    ["Cateto", "b = √(a² − c²)."],
    ["Terna pitagórica", "Tres enteros que cumplen el teorema: 3, 4, 5."],
    ["Diagonal del cuadrado", "l · √2."],
    ["Diagonal del ortoedro", "√(a² + b² + c²)."],
  ],
  familias: ["Medid el ancho y el alto de la tele o del móvil y comprobad las pulgadas de la diagonal.", "Usad una cuerda con 12 nudos para formar un ángulo recto en el jardín o el parque.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Teorema de Pitágoras y su recíproco; ternas pitagóricas; aplicación al cálculo de longitudes en figuras planas y cuerpos; resolución de problemas (RD 217/2022, Matemáticas, sentido de la medida y espacial).",
    ideas: ["Demostración con piezas recortadas (puzle de Perigal).", "Medir el patio y comprobar diagonales con cinta métrica.", "Cuerda de 12 nudos para trazar ángulos rectos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): teorema de Pitágoras", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el área de un triángulo isósceles con lados iguales de 13 cm y base de 10 cm.", pasos: ["La altura divide la base en dos de 5 cm.", "h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.", "Área = 10 · 12 : 2 = 60 cm²."], resultado: "60 cm²" },
    { enunciado: "¿Es rectángulo un triángulo de lados 20, 21 y 29 cm?", pasos: ["Lado mayor: 29 → 29² = 841.", "20² + 21² = 400 + 441 = 841.", "Son iguales."], resultado: "Sí, es rectángulo." },
    { enunciado: "¿Cabe una caña de 1,5 m en una caja de 80 × 60 × 90 cm?", pasos: ["D² = 80² + 60² + 90² = 6.400 + 3.600 + 8.100 = 18.100.", "D = √18.100 ≈ 134,5 cm.", "134,5 cm < 150 cm."], resultado: "No cabe: la diagonal mide unos 134,5 cm." },
  ],
  errores: [
    "Sumar los cuadrados para calcular un cateto (hay que restar).",
    "Aplicar el teorema en triángulos que no son rectángulos.",
    "Confundir la hipotenusa con un cateto: la hipotenusa es siempre el lado mayor.",
    "Olvidar hacer la raíz cuadrada al final.",
    "Escribir √(b² + c²) = b + c.",
  ],
  ejercicios: [
    { q: "Calcula la hipotenusa si los catetos miden 15 y 20 cm.", sol: "√(225 + 400) = √625 = 25 cm." },
    { q: "Calcula el cateto que falta: hipotenusa 17 m y cateto 8 m.", sol: "√(289 − 64) = √225 = 15 m." },
    { q: "Clasifica por sus ángulos los triángulos de lados 6-8-10, 5-6-7 y 3-5-7.", sol: "Rectángulo (100 = 100); acutángulo (49 < 61); obtusángulo (49 > 34)." },
    { q: "Calcula la diagonal de un rectángulo de 12 × 5 cm.", sol: "√169 = 13 cm." },
    { q: "Calcula la altura y el área de un triángulo equilátero de 6 cm de lado.", sol: "h = √27 ≈ 5,2 cm; A ≈ 15,6 cm²." },
    { q: "El lado de un rombo mide 13 cm y una diagonal 24 cm. Calcula la otra diagonal y el área.", sol: "Semidiagonal √(169 − 144) = 5 → 10 cm; A = 24 · 10 : 2 = 120 cm²." },
    { q: "Un trapecio rectángulo tiene bases de 12 y 7 cm y altura 12 cm. ¿Cuánto mide el lado oblicuo?", sol: "√(12² + 5²) = 13 cm." },
    { q: "Una escalera de 6,5 m llega a 6 m de altura. ¿A qué distancia de la pared está el pie?", sol: "√(42,25 − 36) = 2,5 m." },
    { q: "Un barco navega 9 km al norte y 12 km al este. ¿A qué distancia está del puerto?", sol: "15 km." },
    { q: "Calcula la diagonal de un cubo de 5 cm de arista.", sol: "√75 ≈ 8,66 cm." },
  ],
};

  return module.exports;
})();

P["potencias"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: potencias y raíces cuadradas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces cuadradas",
  minutos: 55,
  objetivos: ["Calcular potencias de base entera y fraccionaria y exponente natural", "Aplicar las propiedades de las potencias", "Expresar números grandes y pequeños con potencias de 10", "Calcular raíces cuadradas exactas y aproximadas"],
  claves: ["base", "exponente", "potencia de potencia", "cuadrado perfecto", "raíz cuadrada", "radicando"],
  pregunta: {
    texto: "Si una noticia la cuentas a 3 amigos y cada uno se la cuenta a otros 3, y así sucesivamente, ¿cuánta gente la conocerá en la décima ronda?",
    respuesta: "En cada ronda se multiplica por 3, así que en la décima la oirán <mark>3¹⁰ = 59.049 personas</mark>. Las potencias sirven para escribir de forma corta multiplicaciones repetidas y explican por qué algunas cosas (rumores, virus, ahorros) crecen tan deprisa.",
  },
  bloques: [
    {
      html: `<h3>Qué es una potencia</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un producto de <b>factores iguales</b>: <mark>aⁿ = a · a · … · a</mark> (n veces). La <b>a</b> es la <b>base</b> y la <b>n</b>, el <b>exponente</b>.</p><p>5³ = 5 · 5 · 5 = 125. Se lee «cinco al cubo». Con exponente 2 se dice «al cuadrado» y con 3, «al cubo», porque son el área de un cuadrado y el volumen de un cubo.</p><p>Casos especiales: <b>a¹ = a</b> y <b>a⁰ = 1</b> (si a ≠ 0). Las potencias de 1 siempre valen 1 y las de 0 (con exponente positivo), 0.</p>`,
      svg: svg("Un cuadrado de lado 4 tiene 16 casillas: 4 al cuadrado; un cubo de lado 3 tiene 27 cubitos: 3 al cubo", `${[...Array(16)].map((_, i) => `<rect x="${22 + (i % 4) * 22}" y="${36 + Math.floor(i / 4) * 22}" width="22" height="22" fill="var(--pen)" fill-opacity=".22" stroke="var(--pen)" stroke-width="1.6"/>`).join("")}
        <path d="M150 66 h 60 v 60 h -60 z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><path d="M150 66 l 24 -22 h 60 l -24 22 M210 126 l 24 -22 v -60" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M170 66 v 60 M190 66 v 60 M150 86 h 60 M150 106 h 60 M158 59 h 60 M166 51 h 60 M218 118 v -60 M226 111 v -60" stroke="var(--leaf)" stroke-width="1" fill="none"/>
        ${t(66, 146, "4² = 16", { c: "var(--pen)", s: 14 })}${t(192, 152, "3³ = 27", { c: "var(--leaf)", s: 14 })}${t(66, 166, "al cuadrado", { c: "var(--muted)", s: 11 })}${t(192, 170, "al cubo", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Potencias de enteros y de fracciones</h3><p>Si la base es <b>negativa</b>, el signo depende del exponente: <b>par</b> da positivo y <b>impar</b>, negativo. (−2)⁶ = 64; (−2)⁵ = −32. Ojo con los paréntesis: −2⁶ = −64.</p><p>Para elevar una <b>fracción</b>, se elevan numerador y denominador: <mark>(a/b)ⁿ = aⁿ/bⁿ</mark>. (2/3)³ = 8/27. Si la fracción es menor que 1, sus potencias son cada vez más pequeñas: (1/2)² = 1/4, (1/2)³ = 1/8…</p>`,
    },
    {
      html: `<h3>Propiedades de las potencias</h3>${tabla(["Propiedad", "Regla", "Ejemplo"], [["Producto, misma base", "aᵐ · aⁿ = aᵐ⁺ⁿ", "3² · 3⁴ = 3⁶"], ["Cociente, misma base", "aᵐ : aⁿ = aᵐ⁻ⁿ", "7⁵ : 7² = 7³"], ["Potencia de potencia", "(aᵐ)ⁿ = aᵐ·ⁿ", "(2³)⁴ = 2¹²"], ["Producto, mismo exponente", "aⁿ · bⁿ = (a · b)ⁿ", "4³ · 5³ = 20³"], ["Cociente, mismo exponente", "aⁿ : bⁿ = (a : b)ⁿ", "15² : 3² = 5²"]])}<p>Con el cociente se entiende por qué a⁰ = 1: 5³ : 5³ = 5⁰, y también 125 : 125 = 1. ¡No hay propiedad para la suma! 2³ + 2² = 8 + 4 = 12, no 2⁵.</p>`,
      video: { id: "y12Op8QMjHs", titulo: "Propiedades de las potencias", canal: "Susi Profe", vistas: 2310821 },
    },
    {
      html: `<h3>Simplificar con las propiedades</h3><p>Para reducir expresiones a una sola potencia, se aplican las propiedades paso a paso:</p><p>(2⁴ · 2³) : (2²)³ = 2⁷ : 2⁶ = <b>2¹ = 2</b>.</p><p>Si las bases son distintas pero se pueden descomponer, se escriben como potencias de primos: 8² · 4³ = (2³)² · (2²)³ = 2⁶ · 2⁶ = <b>2¹²</b>.</p><p>Y con exponentes iguales se agrupan las bases: 2⁵ · 5⁵ = 10⁵ = 100.000.</p>`,
    },
    {
      html: `<h3>Potencias de 10 y notación científica</h3><p>10ⁿ es un 1 seguido de n ceros: 10⁶ = 1.000.000 (un millón). Sirven para escribir números muy grandes de forma compacta:</p><ul><li>Distancia Tierra-Sol ≈ 150.000.000 km = <b>1,5 · 10⁸ km</b>.</li><li>Habitantes del planeta ≈ 8.100.000.000 = <b>8,1 · 10⁹</b>.</li></ul><p>Esta forma se llama <b>notación científica</b>: un número entre 1 y 10, multiplicado por una potencia de 10. También vale para números muy pequeños, con exponentes negativos, que estudiarás el curso que viene (un milímetro es 10⁻³ m).</p><p>Cualquier número se puede <b>descomponer</b> con potencias de 10: 4.705 = 4 · 10³ + 7 · 10² + 5.</p>`,
    },
    {
      html: `<h3>La raíz cuadrada</h3><p>La <b>raíz cuadrada</b> de un número a es otro número b que, elevado al cuadrado, da a: <mark>√a = b si b² = a</mark>. √81 = 9 porque 9² = 81. La raíz «deshace» el cuadrado: si un cuadrado tiene 81 m² de área, su lado mide 9 m.</p><p>Las partes son el signo radical (√) y el <b>radicando</b> (el número de dentro). Todo número positivo tiene dos raíces, una positiva y otra negativa: 9 y −9, porque (−9)² = 81 también. Los números negativos <b>no tienen raíz cuadrada</b> entre los números que conoces: ningún número al cuadrado da negativo.</p>`,
      svg: svg("Un cuadrado de área 81 tiene un lado de 9: la raíz cuadrada", `<rect x="34" y="28" width="108" height="108" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>${t(88, 88, "área 81", { c: "var(--pen)", s: 15 })}<path d="M34 146 H 142" stroke="var(--red)" stroke-width="3"/>${t(88, 166, "lado = √81 = 9", { c: "var(--red)", s: 13 })}
        ${t(202, 62, "elevar al cuadrado", { s: 11 })}${t(202, 80, "9 → 81", { c: "var(--leaf)", s: 14 })}${t(202, 112, "raíz cuadrada", { s: 11 })}${t(202, 130, "81 → 9", { c: "var(--leaf)", s: 14 })}`),
      video: { id: "gPV5VqQ3Ajg", titulo: "Raíz cuadrada, explicación fácil", canal: "Daniel Carreón", vistas: 14435745 },
    },
    {
      html: `<h3>Cuadrados perfectos y raíces aproximadas</h3><p>Los <b>cuadrados perfectos</b> son los números que tienen raíz exacta: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144… Conviene sabérselos.</p><p>Si un número no es cuadrado perfecto, su raíz es <b>aproximada</b>. Se busca entre qué cuadrados está: 50 está entre 49 y 64, así que √50 está entre 7 y 8, muy cerca de 7. Probando: 7,1² = 50,41, un poco más; 7,07² ≈ 49,98. √50 ≈ <b>7,07</b>.</p><p>La raíz entera de 50 es 7 y el <b>resto</b> es 50 − 49 = 1. Para la raíz de una fracción se hace la de cada término: √(9/25) = 3/5.</p>`,
    },
    {
      html: `<h3>Operaciones combinadas con potencias y raíces</h3><p>Las potencias y raíces van <b>justo después de los paréntesis</b> en la jerarquía:</p><ol><li>Paréntesis.</li><li>Potencias y raíces.</li><li>Multiplicaciones y divisiones.</li><li>Sumas y restas.</li></ol><p>Ejemplo: 2 · 3² − √36 : 2 + (5 − 3)³ = 2 · 9 − 6 : 2 + 2³ = 18 − 3 + 8 = <b>23</b>.</p><p>Recuerda que <mark>√(a + b) no es √a + √b</mark>: √(9 + 16) = √25 = 5, mientras que √9 + √16 = 7.</p>`,
    },
  ],
  figura: {
    titulo: "Potencias y raíces en un vistazo",
    svg: filas("Resumen: potencia como producto repetido; producto suma exponentes; cociente resta; potencia de potencia multiplica; raíz deshace el cuadrado; notación científica", [["aⁿ", "a · a · … · a (n veces) · a⁰ = 1", "var(--pen)"], ["aᵐ · aⁿ", "aᵐ⁺ⁿ (se suman)", "var(--leaf)"], ["aᵐ : aⁿ", "aᵐ⁻ⁿ (se restan)", "var(--sun)"], ["(aᵐ)ⁿ", "aᵐ·ⁿ (se multiplican)", "var(--red)"], ["√a", "b tal que b² = a", "var(--inf)"], ["Notación científica", "1,5 · 10⁸", "var(--ink)"]], 220),
  },
  video: { id: "-K0ZSm9lPeY", titulo: "Potencias para principiantes", canal: "Daniel Carreón", vistas: 4309306, megusta: 0, busqueda: "potencias propiedades 2 eso" },
  quiz: mezcla([
    { q: "En 7⁴, el 4 es el…", o: ["exponente", "base", "radicando"], a: 0, e: "Veces que se multiplica." },
    { q: "2⁵ =", o: ["32", "10", "25"], a: 0, e: "2·2·2·2·2." },
    { q: "(−3)³ =", o: ["−27", "27", "−9"], a: 0, e: "Exponente impar." },
    { q: "8⁰ =", o: ["1", "0", "8"], a: 0, e: "Todo número (≠ 0) elevado a 0." },
    { q: "5³ · 5⁴ =", o: ["5⁷", "5¹²", "25⁷"], a: 0, e: "Se suman exponentes." },
    { q: "(4²)³ =", o: ["4⁶", "4⁵", "4⁸"], a: 0, e: "Se multiplican." },
    { q: "(2/5)² =", o: ["4/25", "4/5", "2/25"], a: 0, e: "Numerador y denominador." },
    { q: "√144 =", o: ["12", "72", "14"], a: 0, e: "12² = 144." },
    { q: "√30 está entre…", o: ["5 y 6", "4 y 5", "6 y 7"], a: 0, e: "25 < 30 < 36." },
    { q: "380.000 en notación científica es…", o: ["3,8 · 10⁵", "38 · 10⁴", "3,8 · 10⁴"], a: 0, e: "Entre 1 y 10." },
  ]),
  examen: mezcla([
    { q: "(3⁵ · 3²) : 3⁶ =", o: ["3", "3¹³", "1"], a: 0, e: "3⁷ : 3⁶." },
    { q: "4 + 2 · 3² − √49 =", o: ["15", "29", "47"], a: 0, e: "4 + 18 − 7." },
    { q: "Un huerto cuadrado tiene 196 m². Su perímetro es…", o: ["56 m", "49 m", "14 m"], a: 0, e: "Lado 14; 4 · 14." },
  ]),
  feynman: ["Qué significan la base y el exponente", "Por qué a⁰ vale 1", "Las propiedades del producto, el cociente y la potencia de potencia", "Qué es la raíz cuadrada y cómo se aproxima", "Para qué sirve la notación científica"],
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--eso)", [
    ["Potencia", "base y exponente", "var(--pen)"],
    ["Propiedades", "sumar · restar · multiplicar exponentes", "var(--leaf)"],
    ["Potencias de 10", "notación científica", "var(--sun)"],
    ["Raíz cuadrada", "deshace el cuadrado", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["a⁰", "Vale 1 (si a ≠ 0)."],
    ["Producto misma base", "Se suman los exponentes."],
    ["Cociente misma base", "Se restan los exponentes."],
    ["Potencia de potencia", "Se multiplican los exponentes."],
    ["Raíz cuadrada", "√a = b si b² = a."],
    ["Cuadrado perfecto", "Número con raíz exacta: 1, 4, 9, 16…"],
    ["Notación científica", "Número entre 1 y 10 por una potencia de 10."],
  ],
  familias: ["Buscad en las noticias números enormes (población, distancias) y escribidlos con potencias de 10.", "Calculad el lado de una habitación cuadrada a partir de sus metros cuadrados.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Potencias de exponente natural de enteros y fracciones; propiedades; potencias de base 10 y notación científica; raíz cuadrada exacta y aproximada; jerarquía de operaciones (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Doblar papel y contar capas para ver el crecimiento de 2ⁿ.", "Construir cuadrados con policubos y relacionar área y lado.", "Concurso de cálculo mental de cuadrados perfectos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): potencias y raíces", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Expresa como una sola potencia: (5³)² · 5⁴ : 5⁸.", pasos: ["(5³)² = 5⁶.", "5⁶ · 5⁴ = 5¹⁰.", "5¹⁰ : 5⁸ = 5²."], resultado: "5² = 25" },
    { enunciado: "Expresa como potencia de 2: 16² · 8 : 4³.", pasos: ["16 = 2⁴; 8 = 2³; 4 = 2².", "(2⁴)² · 2³ : (2²)³ = 2⁸ · 2³ : 2⁶.", "2¹¹ : 2⁶ = 2⁵."], resultado: "2⁵ = 32" },
    { enunciado: "Calcula √70 con una cifra decimal.", pasos: ["64 < 70 < 81, así que 8 < √70 < 9.", "8,3² = 68,89; 8,4² = 70,56.", "70 está más cerca de 70,56 que de 68,89."], resultado: "√70 ≈ 8,4" },
  ],
  errores: [
    "Multiplicar base por exponente: 3⁴ no es 12.",
    "Sumar exponentes cuando las bases son distintas: 2³ · 5² no es 10⁵.",
    "Aplicar propiedades a la suma: 2³ + 2⁴ no es 2⁷.",
    "Confundir (−2)⁴ = 16 con −2⁴ = −16.",
    "Creer que √(a + b) = √a + √b.",
    "Escribir 45 · 10⁶ como notación científica (debe ser 4,5 · 10⁷).",
  ],
  ejercicios: [
    { q: "Calcula: 6³, (−4)³, (−1)²⁰ y (3/4)².", sol: "216; −64; 1; 9/16." },
    { q: "Escribe como una sola potencia: 7² · 7⁵ · 7.", sol: "7⁸." },
    { q: "Escribe como una sola potencia: (a⁴)³ : a⁷.", sol: "a¹² : a⁷ = a⁵." },
    { q: "Calcula aplicando propiedades: 2⁶ · 5⁶ y 36⁴ : 9⁴.", sol: "10⁶ = 1.000.000; 4⁴ = 256." },
    { q: "Escribe en notación científica: 7.200.000 y 450.000.000.000.", sol: "7,2 · 10⁶; 4,5 · 10¹¹." },
    { q: "Descompón con potencias de 10: 30.508.", sol: "3 · 10⁴ + 5 · 10² + 8." },
    { q: "Calcula: √169, √0,25 y √(4/49).", sol: "13; 0,5; 2/7." },
    { q: "Calcula la raíz entera y el resto de 90.", sol: "Raíz entera 9 (81); resto 9." },
    { q: "Calcula: (8 − 5)² · 2 − √(10 + 6) + 4⁰.", sol: "9 · 2 − 4 + 1 = 15." },
    { q: "Un tablero de ajedrez tiene 64 casillas. Si en la primera pones 1 grano de trigo, en la segunda 2, en la tercera 4…, ¿cuántos granos hay en la casilla 11?", sol: "2¹⁰ = 1.024 granos." },
  ],
};

  return module.exports;
})();

P["proporcionalidad"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: proporcionalidad y porcentajes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Proporcionalidad y porcentajes",
  minutos: 60,
  objetivos: ["Reconocer razones y proporciones", "Distinguir magnitudes directa e inversamente proporcionales", "Resolver problemas con la regla de tres y la reducción a la unidad", "Calcular porcentajes, aumentos y disminuciones porcentuales"],
  claves: ["razón", "proporción", "constante de proporcionalidad", "regla de tres", "porcentaje", "índice de variación"],
  pregunta: {
    texto: "Unas zapatillas cuestan 80 €. Primero suben un 10 % y luego bajan un 10 %. ¿Vuelven a costar 80 €?",
    respuesta: "No. Tras subir valen 80 · 1,1 = 88 €, y al bajar un 10 % de 88: 88 · 0,9 = <mark>79,20 €</mark>. El segundo 10 % se calcula sobre un precio mayor. Los porcentajes siempre se aplican sobre la cantidad que hay en ese momento.",
  },
  bloques: [
    {
      html: `<h3>Razones y proporciones</h3><p>Una <b>razón</b> es el cociente entre dos cantidades: si en una clase hay 12 chicas y 15 chicos, la razón chicas/chicos es <b>12/15 = 4/5</b>, es decir, por cada 4 chicas hay 5 chicos.</p><p>Una <b>proporción</b> es una igualdad entre dos razones: <mark>a/b = c/d</mark>, que se lee «a es a b como c es a d». En toda proporción, el producto de los extremos es igual al de los medios: <b>a · d = b · c</b>.</p><p>Eso permite calcular un término desconocido (el <b>cuarto proporcional</b>): 3/5 = x/20 → x = 3 · 20 : 5 = 12.</p>`,
    },
    {
      html: `<h3>Proporcionalidad directa</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al <mark>multiplicar una por un número, la otra queda multiplicada por el mismo número</mark> (doble → doble, mitad → mitad). Su <b>cociente es constante</b>: es la constante de proporcionalidad.</p>${tabla(["Kilos de naranjas", "1", "2", "3", "5"], [["Precio (€)", "1,5", "3", "4,5", "7,5"]])}<p>Aquí precio : kilos = 1,5 €/kg siempre. Si se representan, los puntos quedan sobre una <b>recta que pasa por el origen</b>.</p><p>Ejemplos: litros de gasolina y precio, horas trabajadas y sueldo, distancia en un mapa y distancia real.</p>`,
      svg: svg("Gráfica de proporcionalidad directa: kilos y precio forman una recta que pasa por el origen", `${ejes(30, 150, 36, [0, 5], [0, 3.5])}<path d="M30 150 L 210 ${150 - 2.5 * 36}" stroke="var(--pen)" stroke-width="3"/>${[1, 2, 3, 4, 5].map((k) => `<circle cx="${30 + k * 36}" cy="${150 - 0.5 * k * 36}" r="4.5" fill="var(--pen)"/>`).join("")}${t(140, 30, "precio = 1,5 · kilos", { c: "var(--pen)", s: 12 })}${t(140, 172, "kilos", { c: "var(--muted)", s: 10 })}`),
      video: { id: "nP9SwAqhVTI", titulo: "Proporcionalidad directa", canal: "Daniel Carreón", vistas: 6895756 },
    },
    {
      html: `<h3>Proporcionalidad inversa</h3><p>Dos magnitudes son <b>inversamente proporcionales</b> si al <mark>multiplicar una por un número, la otra queda dividida por ese número</mark> (doble → mitad). Su <b>producto es constante</b>.</p>${tabla(["Pintores", "1", "2", "3", "6"], [["Días", "12", "6", "4", "2"]])}<p>Aquí pintores · días = 12 siempre. La gráfica es una curva llamada <b>hipérbola</b>.</p><p>Ejemplos: velocidad y tiempo de un viaje, número de personas y lo que toca a cada una al repartir, grifos y tiempo de llenado.</p><p>¡Cuidado! No toda relación es proporcional: la edad y la altura de una persona aumentan juntas, pero no en proporción.</p>`,
      svg: svg("Gráfica de proporcionalidad inversa: más pintores, menos días; la curva es una hipérbola", `${ejes(30, 150, 18, [0, 12], [0, 7], { rejilla: false })}<path d="${[...Array(23)].map((_, i) => { const x = 1.8 + i * 0.45; return `${i ? "L" : "M"}${(30 + x * 18).toFixed(1)} ${(150 - (12 / x) * 18).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>${[[2, 6], [3, 4], [4, 3], [6, 2], [12, 1]].map(([x, y]) => `<circle cx="${30 + x * 18}" cy="${150 - y * 18}" r="4.5" fill="var(--red)"/>`).join("")}${t(160, 40, "pintores · días = 12", { c: "var(--red)", s: 12 })}${t(140, 172, "pintores", { c: "var(--muted)", s: 10 })}`),
      video: { id: "iDisByLSTS0", titulo: "Proporcionalidad inversa", canal: "Daniel Carreón", vistas: 3976771 },
    },
    {
      html: `<h3>La regla de tres simple</h3><p>Es un método para hallar un valor desconocido cuando hay dos magnitudes proporcionales. Se colocan los datos en dos filas y se decide si la relación es <b>directa</b> o <b>inversa</b>.</p><p><b>Directa</b>: si 4 cuadernos cuestan 6 €, ¿cuánto cuestan 10?</p><p>4 cuadernos → 6 € ; 10 cuadernos → x. Como es directa: <mark>x = 10 · 6 : 4 = 15 €</mark> (se multiplica en cruz).</p><p><b>Inversa</b>: 3 grifos llenan un depósito en 8 h; ¿cuánto tardan 4 grifos?</p><p>Como es inversa, se multiplica en línea: <mark>x = 3 · 8 : 4 = 6 h</mark>.</p><p>También se puede hacer por <b>reducción a la unidad</b>: 1 cuaderno cuesta 6 : 4 = 1,5 €; 10 cuadernos, 15 €. 1 grifo tardaría 3 · 8 = 24 h; 4 grifos, 24 : 4 = 6 h.</p>`,
    },
    {
      html: `<h3>Repartos proporcionales</h3><p>Se reparte una cantidad en partes <b>directamente proporcionales</b> a unos números: se suman los números, se divide el total entre la suma y se multiplica por cada número.</p><p>Ejemplo: tres amigas ponen 2, 3 y 5 € para un boleto que gana 200 €. Suma 10; 200 : 10 = 20 € por cada euro puesto. Les tocan <b>40, 60 y 100 €</b>.</p><p>En un reparto <b>inversamente proporcional</b> recibe más quien tiene un número menor (por ejemplo, un premio repartido según las faltas de asistencia): se reparte de forma directa a los inversos 1/a, 1/b, 1/c.</p>`,
    },
    {
      html: `<h3>Porcentajes</h3><p>Un <b>porcentaje</b> es una razón con denominador 100: <mark>a % = a/100</mark>. El 25 % = 25/100 = 1/4 = 0,25.</p><ul><li><b>Calcular el a % de N</b>: N · a : 100. El 15 % de 60 = 60 · 0,15 = 9.</li><li><b>Qué porcentaje es una parte</b>: parte : total · 100. 18 aprobados de 24 son 18 : 24 · 100 = 75 %.</li><li><b>El total a partir de una parte</b>: si el 30 % son 12, el total es 12 : 0,30 = 40.</li></ul><p>Algunos porcentajes fáciles: 50 % = mitad, 25 % = cuarta parte, 10 % = dividir entre 10, 1 % = dividir entre 100.</p>`,
      svg: svg("Cuadrícula de 100 casillas con 25 coloreadas: el 25 por ciento es un cuarto", `${[...Array(100)].map((_, i) => `<rect x="${60 + (i % 10) * 14}" y="${14 + Math.floor(i / 10) * 14}" width="13" height="13" fill="${i % 10 < 5 && Math.floor(i / 10) < 5 ? "var(--leaf)" : "var(--card)"}" fill-opacity="${i % 10 < 5 && Math.floor(i / 10) < 5 ? 0.55 : 1}" stroke="var(--line)"/>`).join("")}${t(130, 172, "25 de 100 = 25 % = 1/4", { s: 13 })}`),
      video: { id: "RE3XoDORMys", titulo: "Cómo calcular un porcentaje", canal: "Daniel Carreón", vistas: 14511594 },
    },
    {
      html: `<h3>Aumentos y disminuciones porcentuales</h3><p>Para aplicar una subida o una bajada de un solo golpe se usa el <b>índice de variación</b>:</p><ul><li><b>Aumento del a %</b>: se multiplica por <mark>1 + a/100</mark>. Un precio de 50 € con un 21 % de IVA: 50 · 1,21 = 60,50 €.</li><li><b>Disminución del a %</b>: se multiplica por <mark>1 − a/100</mark>. Una rebaja del 30 % sobre 40 €: 40 · 0,70 = 28 €.</li></ul><p>Para encontrar el precio <b>inicial</b> se divide: si tras una rebaja del 20 % pagas 64 €, el precio era 64 : 0,8 = 80 €.</p><p>Varias variaciones seguidas se encadenan multiplicando sus índices: +10 % y −10 % → 1,1 · 0,9 = 0,99, una bajada del 1 %.</p>`,
    },
    {
      html: `<h3>Proporcionalidad en la vida real</h3><ul><li><b>Escalas</b>: en un mapa 1 : 50.000, 1 cm son 50.000 cm = 500 m. Es proporcionalidad directa.</li><li><b>Recetas</b>: si para 4 personas hacen falta 300 g de arroz, para 6 hacen falta 450 g.</li><li><b>Velocidad</b>: a 90 km/h se tarda 2 h en hacer 180 km; a 120 km/h, 1,5 h (inversa).</li><li><b>Interés simple</b>: un banco paga un 3 % anual por 2.000 € ahorrados: 60 € al año.</li><li><b>Etiquetas</b>: un yogur con un 4 % de grasa contiene 4 g por cada 100 g.</li></ul><p>Antes de calcular, pregúntate siempre: «si una magnitud se duplica, ¿qué le pasa a la otra?».</p>`,
    },
  ],
  figura: {
    titulo: "Proporcionalidad en un vistazo",
    svg: filas("Resumen: proporción con productos cruzados; directa con cociente constante; inversa con producto constante; porcentaje; aumento por 1 más a/100; disminución por 1 menos a/100", [["Proporción", "a/b = c/d → a · d = b · c", "var(--pen)"], ["Directa", "doble → doble · cociente constante", "var(--leaf)"], ["Inversa", "doble → mitad · producto constante", "var(--red)"], ["a % de N", "N · a : 100", "var(--sun)"], ["Aumento", "× (1 + a/100)", "var(--inf)"], ["Disminución", "× (1 − a/100)", "var(--ink)"]], 200),
  },
  video: { id: "Xphb-tzJj24", titulo: "Regla de tres simple", canal: "Daniel Carreón", vistas: 3978927, megusta: 0, busqueda: "proporcionalidad directa e inversa regla de tres" },
  quiz: mezcla([
    { q: "En 2/5 = x/30, x vale…", o: ["12", "75", "6"], a: 0, e: "2 · 30 : 5." },
    { q: "Número de entradas y precio total son magnitudes…", o: ["directamente proporcionales", "inversamente proporcionales", "no proporcionales"], a: 0, e: "Doble → doble." },
    { q: "Velocidad y tiempo para un mismo recorrido son…", o: ["inversamente proporcionales", "directamente proporcionales", "iguales"], a: 0, e: "Más rápido → menos tiempo." },
    { q: "En la proporcionalidad inversa es constante…", o: ["el producto", "el cociente", "la suma"], a: 0, e: "x · y = k." },
    { q: "Si 3 kg cuestan 6 €, 7 kg cuestan…", o: ["14 €", "21 €", "2 €"], a: 0, e: "2 €/kg." },
    { q: "4 obreros tardan 9 días. 6 obreros tardan…", o: ["6 días", "13,5 días", "3 días"], a: 0, e: "36 : 6." },
    { q: "El 20 % de 150 es…", o: ["30", "20", "7,5"], a: 0, e: "150 · 0,2." },
    { q: "Para subir un 15 % se multiplica por…", o: ["1,15", "0,85", "15"], a: 0, e: "1 + 0,15." },
    { q: "Para rebajar un 40 % se multiplica por…", o: ["0,6", "0,4", "1,4"], a: 0, e: "1 − 0,4." },
    { q: "9 de 36 alumnos son el…", o: ["25 %", "9 %", "36 %"], a: 0, e: "9 : 36 · 100." },
  ]),
  examen: mezcla([
    { q: "Tras un 25 % de descuento pagas 45 €. El precio inicial era…", o: ["60 €", "56,25 €", "70 €"], a: 0, e: "45 : 0,75." },
    { q: "Repartir 90 € de forma directamente proporcional a 1, 2 y 6 da…", o: ["10, 20 y 60 €", "30, 30 y 30 €", "15, 30 y 45 €"], a: 0, e: "90 : 9 = 10." },
    { q: "Una subida del 20 % y después otra del 10 % equivalen a una subida del…", o: ["32 %", "30 %", "2 %"], a: 0, e: "1,2 · 1,1 = 1,32." },
  ]),
  feynman: ["Qué es una proporción y cómo se calcula un término", "Cómo distinguir proporcionalidad directa e inversa", "Cómo se plantea una regla de tres", "Cómo se calcula un porcentaje y su total", "Por qué +10 % y −10 % no se anulan"],
  mapa: mapa("PROPORCIONALIDAD", "var(--eso)", [
    ["Directa", "cociente constante", "var(--leaf)"],
    ["Inversa", "producto constante", "var(--red)"],
    ["Regla de tres", "en cruz · en línea", "var(--pen)"],
    ["Porcentajes", "1 ± a/100", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Razón", "Cociente entre dos cantidades."],
    ["Proporción", "Igualdad de dos razones: a · d = b · c."],
    ["Directa", "Doble → doble. Cociente constante."],
    ["Inversa", "Doble → mitad. Producto constante."],
    ["Reducción a la unidad", "Calcular primero el valor para 1."],
    ["Porcentaje", "a % = a/100."],
    ["Aumento del a %", "Multiplicar por 1 + a/100."],
    ["Disminución del a %", "Multiplicar por 1 − a/100."],
  ],
  familias: ["En rebajas, calculad juntos el precio final antes de llegar a caja.", "Duplicad o reducid una receta para otro número de personas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Razones y proporciones; proporcionalidad directa e inversa; regla de tres y reducción a la unidad; repartos proporcionales; porcentajes, aumentos y disminuciones (RD 217/2022, Matemáticas, sentido numérico y algebraico).",
    ideas: ["Folletos de supermercado para calcular descuentos reales.", "Tablas y gráficas con datos de la clase para decidir si hay proporcionalidad.", "Mapas con distintas escalas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): proporcionalidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un coche a 80 km/h tarda 3 h en un viaje. ¿Cuánto tardará a 120 km/h?", pasos: ["Más velocidad, menos tiempo: inversa.", "El producto es constante: 80 · 3 = 240 km.", "t = 240 : 120 = 2 h."], resultado: "2 horas." },
    { enunciado: "Un móvil cuesta 250 € sin IVA. ¿Cuánto cuesta con un 21 % de IVA y luego con un 15 % de descuento?", pasos: ["Con IVA: 250 · 1,21 = 302,50 €.", "Con descuento: 302,50 · 0,85 = 257,125 €.", "Redondeado: 257,13 €."], resultado: "257,13 €" },
    { enunciado: "En un pueblo había 1.200 habitantes y ahora hay 1.380. ¿Qué porcentaje ha aumentado?", pasos: ["Aumento: 1.380 − 1.200 = 180.", "180 : 1.200 = 0,15.", "0,15 · 100 = 15 %."], resultado: "Ha aumentado un 15 %." },
  ],
  errores: [
    "Aplicar una regla de tres directa a magnitudes inversas.",
    "Pensar que dos magnitudes que crecen a la vez son siempre proporcionales.",
    "Calcular el precio inicial sumando el porcentaje al precio rebajado.",
    "Sumar porcentajes encadenados (+20 % y +10 % no es +30 %).",
    "Confundir el 5 % (0,05) con 0,5.",
  ],
  ejercicios: [
    { q: "Calcula x: 6/x = 9/12.", sol: "x = 6 · 12 : 9 = 8." },
    { q: "¿Son proporcionales? Lado de un cuadrado y su perímetro; lado y área.", sol: "Perímetro sí (directa, 4); área no (doble lado → cuádruple área)." },
    { q: "5 entradas cuestan 37,50 €. ¿Cuánto cuestan 8?", sol: "7,50 € cada una → 60 €." },
    { q: "Con 12 grifos se llena una piscina en 10 h. ¿Cuánto tardan 8 grifos?", sol: "Inversa: 120 : 8 = 15 h." },
    { q: "Reparte 1.400 € en partes directamente proporcionales a 3, 4 y 7.", sol: "1.400 : 14 = 100 → 300, 400 y 700 €." },
    { q: "Calcula el 35 % de 240 y el 2 % de 1.500.", sol: "84 y 30." },
    { q: "En un examen aprueban 21 de 28 alumnos. ¿Qué porcentaje aprueba?", sol: "75 %." },
    { q: "Un abrigo de 120 € se rebaja un 35 %. ¿Cuánto cuesta ahora?", sol: "120 · 0,65 = 78 €." },
    { q: "Tras subir un 8 %, el alquiler es de 648 €. ¿Cuánto era antes?", sol: "648 : 1,08 = 600 €." },
    { q: "En un mapa 1 : 200.000, dos pueblos están a 4,5 cm. ¿Qué distancia real los separa?", sol: "900.000 cm = 9 km." },
  ],
};

  return module.exports;
})();

P["segundo-grado"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: ecuaciones de segundo grado y sistemas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de segundo grado y sistemas",
  minutos: 65,
  objetivos: ["Reconocer y resolver ecuaciones de segundo grado completas e incompletas", "Usar el discriminante para saber cuántas soluciones hay", "Resolver sistemas de dos ecuaciones lineales por sustitución, igualación y reducción", "Plantear problemas con ecuaciones de segundo grado y con sistemas"],
  claves: ["ecuación de segundo grado", "fórmula general", "discriminante", "sistema de ecuaciones", "sustitución", "reducción"],
  pregunta: {
    texto: "Un jardín cuadrado tiene 49 m². Si le añades un camino de 1 m alrededor, ¿cuánto mide el lado del jardín? ¿Y si solo sabes que el área total con el camino es 81 m²?",
    respuesta: "El lado del jardín es 7 m (7² = 49). En el segundo caso, si el lado es x, con el camino mide x + 2 y (x + 2)² = 81, así que x + 2 = 9 y <mark>x = 7 m</mark>. Cuando la incógnita aparece al cuadrado tenemos una <b>ecuación de segundo grado</b>, que puede tener dos soluciones (aquí la otra, x = −11, no tiene sentido como longitud).",
  },
  bloques: [
    {
      html: `<h3>Ecuaciones de segundo grado</h3><p>Una ecuación es de <b>segundo grado</b> si, después de simplificarla, la incógnita aparece elevada al cuadrado. Su forma general es:</p><p><mark>ax² + bx + c = 0</mark>, con a ≠ 0.</p><p>a es el coeficiente de x², b el de x y c el término independiente. En 3x² − 5x + 2 = 0: a = 3, b = −5, c = 2.</p><p>Si b o c valen 0, la ecuación es <b>incompleta</b> y se resuelve sin fórmula. Una ecuación de segundo grado puede tener <b>dos soluciones, una o ninguna</b>.</p>`,
    },
    {
      html: `<h3>Ecuaciones incompletas</h3><ul><li><b>Sin término en x (b = 0)</b>: ax² + c = 0. Se despeja x² y se hace la raíz, que da dos soluciones opuestas. 2x² − 50 = 0 → x² = 25 → <b>x = 5 o x = −5</b>. Si x² sale negativo (x² = −4), no hay solución.</li><li><b>Sin término independiente (c = 0)</b>: ax² + bx = 0. Se saca factor común x: x(ax + b) = 0. Un producto es 0 si alguno de los factores es 0, así que <b>x = 0</b> o ax + b = 0. 3x² − 12x = 0 → x(3x − 12) = 0 → <b>x = 0 o x = 4</b>.</li></ul><p>¡No dividas entre x! Perderías la solución x = 0.</p>`,
      video: { id: "7jVEhhZ6Khg", titulo: "Ecuaciones de segundo grado incompletas puras", canal: "Susi Profe", vistas: 2938920 },
    },
    {
      html: `<h3>La fórmula general</h3><p>Una ecuación completa ax² + bx + c = 0 se resuelve con la fórmula:</p><p style="font-size:1.25em;text-align:center"><mark>x = (−b ± √(b² − 4ac)) / 2a</mark></p><p>Ejemplo: x² − 5x + 6 = 0. a = 1, b = −5, c = 6.</p><p>x = (5 ± √(25 − 24)) / 2 = (5 ± 1) / 2 → <b>x = 3</b> o <b>x = 2</b>.</p><p>Comprobación: 3² − 15 + 6 = 0 ✔ y 2² − 10 + 6 = 0 ✔. Antes de aplicar la fórmula hay que dejar la ecuación igualada a 0 y con los términos ordenados.</p>`,
      video: { id: "ZC67c5ar9mA", titulo: "Ecuaciones de segundo grado por fórmula general", canal: "Daniel Carreón", vistas: 10254506 },
    },
    {
      html: `<h3>El discriminante</h3><p>Lo que hay dentro de la raíz, <b>Δ = b² − 4ac</b>, se llama <b>discriminante</b> y dice cuántas soluciones hay sin terminar de resolver:</p>${tabla(["Δ", "Soluciones", "Ejemplo"], [["Δ > 0", "dos soluciones distintas", "x² − 5x + 6 = 0 (Δ = 1)"], ["Δ = 0", "una solución (doble)", "x² − 6x + 9 = 0 (Δ = 0) → x = 3"], ["Δ < 0", "ninguna solución real", "x² + x + 1 = 0 (Δ = −3)"]])}<p>En la gráfica de y = ax² + bx + c (una <b>parábola</b>), las soluciones son los puntos donde corta al eje X.</p>`,
      svg: svg("Tres parábolas: una corta el eje x en dos puntos, otra lo toca en uno y otra no lo corta", `${ejes(130, 120, 14, [-8, 8], [-2, 6], { rejilla: false })}
        <path d="${[...Array(21)].map((_, i) => { const x = -7.5 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - ((x + 5) ** 2 - 2) * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="${[...Array(21)].map((_, i) => { const x = -2.5 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - x * x * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="2.5"/>
        <path d="${[...Array(17)].map((_, i) => { const x = 3 + i * 0.25; return `${i ? "L" : "M"}${(130 + x * 14).toFixed(1)} ${(120 - ((x - 5) ** 2 + 1.5) * 14).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        ${t(60, 174, "Δ > 0: 2", { c: "var(--leaf)", s: 12 })}${t(130, 174, "Δ = 0: 1", { c: "var(--sun)", s: 12 })}${t(200, 174, "Δ < 0: 0", { c: "var(--red)", s: 12 })}`),
    },
    {
      html: `<h3>Sistemas de ecuaciones lineales</h3><p>Un <b>sistema</b> son dos ecuaciones con dos incógnitas que deben cumplirse <b>a la vez</b>:</p><p>{ x + y = 10<br>{ x − y = 2</p><p>La <b>solución</b> es la pareja de valores que cumple las dos: x = 6, y = 4 (6 + 4 = 10 y 6 − 4 = 2).</p><p>Cada ecuación lineal con dos incógnitas tiene infinitas soluciones, que forman una <b>recta</b>. La solución del sistema es el <mark>punto donde se cortan las dos rectas</mark>. Si las rectas son paralelas, el sistema no tiene solución; si son la misma, tiene infinitas.</p>`,
      svg: svg("Dos rectas, x más y igual a 10 y x menos y igual a 2, se cortan en el punto (6, 4)", `${ejes(26, 156, 14, [0, 11], [0, 10])}<path d="M26 ${156 - 140} L ${26 + 140} 156" stroke="var(--pen)" stroke-width="2.5"/><path d="M${26 + 28} 156 L ${26 + 154} ${156 - 126}" stroke="var(--leaf)" stroke-width="2.5"/><circle cx="${26 + 84}" cy="${156 - 56}" r="5" fill="var(--red)"/>${t(26 + 84, 156 - 66, "(6, 4)", { c: "var(--red)", s: 12, a: "end" })}${t(214, 40, "x − y = 2", { c: "var(--leaf)", s: 11 })}${t(78, 30, "x + y = 10", { c: "var(--pen)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Métodos de sustitución e igualación</h3><p><b>Sustitución</b>: se despeja una incógnita en una ecuación y se sustituye en la otra.</p><p>{ 2x + y = 7 ; x − 3y = −7. De la primera: y = 7 − 2x. En la segunda: x − 3(7 − 2x) = −7 → x − 21 + 6x = −7 → 7x = 14 → <b>x = 2</b>, y = 7 − 4 = <b>3</b>.</p><p><b>Igualación</b>: se despeja la misma incógnita en las dos ecuaciones y se igualan las expresiones. Con { y = 2x − 1 ; y = x + 3: 2x − 1 = x + 3 → <b>x = 4</b>, y = <b>7</b>.</p><p>Sustitución conviene cuando una incógnita tiene coeficiente 1 o −1.</p>`,
      video: { id: "LTfv1G2iYuQ", titulo: "Sistemas de ecuaciones 2×2: método de sustitución", canal: "Matemáticas profe Alex", vistas: 11461146 },
    },
    {
      html: `<h3>Método de reducción</h3><p>Se multiplican las ecuaciones por números adecuados para que una incógnita tenga coeficientes <b>opuestos</b>; al sumarlas, esa incógnita desaparece.</p><p>{ 3x + 2y = 16 ; 5x − 2y = 0. Los coeficientes de y ya son opuestos: sumando, 8x = 16 → <b>x = 2</b>. Sustituyendo: 6 + 2y = 16 → <b>y = 5</b>.</p><p>{ 2x + 3y = 8 ; 3x + 2y = 7. Multiplicamos la primera por 3 y la segunda por −2: 6x + 9y = 24 ; −6x − 4y = −14. Sumando: 5y = 10 → y = 2, y entonces x = 1.</p><p>Comprueba siempre la solución en <b>las dos</b> ecuaciones.</p>`,
    },
    {
      html: `<h3>Problemas con sistemas y de segundo grado</h3><p><b>Con sistema</b>: «En un corral hay gallinas y conejos: 25 cabezas y 70 patas». x = gallinas, y = conejos. { x + y = 25 ; 2x + 4y = 70. Por sustitución: x = 25 − y → 50 − 2y + 4y = 70 → y = 10, x = 15. <b>15 gallinas y 10 conejos.</b></p><p><b>De segundo grado</b>: «Un rectángulo tiene 3 cm más de largo que de ancho y 40 cm² de área». x(x + 3) = 40 → x² + 3x − 40 = 0 → x = (−3 ± √169)/2 = (−3 ± 13)/2 → x = 5 o x = −8. Como un lado no puede ser negativo: <b>5 cm × 8 cm</b>.</p><p>En los problemas, descarta las soluciones que no tienen sentido.</p>`,
    },
  ],
  figura: {
    titulo: "Segundo grado y sistemas en un vistazo",
    svg: filas("Resumen: forma general, incompletas, fórmula, discriminante, sistema como corte de rectas y tres métodos", [["Forma general", "ax² + bx + c = 0", "var(--pen)"], ["Incompletas", "despejar x² · sacar factor común x", "var(--sun)"], ["Fórmula", "x = (−b ± √(b² − 4ac)) / 2a", "var(--leaf)"], ["Discriminante", "Δ > 0: dos · Δ = 0: una · Δ < 0: ninguna", "var(--red)"], ["Sistema", "punto de corte de dos rectas", "var(--inf)"], ["Métodos", "sustitución · igualación · reducción", "var(--ink)"]], 200),
  },
  video: { id: "BxrJmKdPHRs", titulo: "Ecuación cuadrática por fórmula general", canal: "Matemáticas profe Alex", vistas: 9511936, megusta: 0, busqueda: "ecuaciones de segundo grado fórmula" },
  quiz: mezcla([
    { q: "En 2x² − 3x + 7 = 0, el valor de b es…", o: ["−3", "3", "2"], a: 0, e: "Coeficiente de x." },
    { q: "Soluciones de x² = 36:", o: ["6 y −6", "solo 6", "18"], a: 0, e: "Dos opuestas." },
    { q: "Soluciones de x² − 4x = 0:", o: ["0 y 4", "solo 4", "2 y −2"], a: 0, e: "x(x − 4) = 0." },
    { q: "x² + 9 = 0 tiene…", o: ["ninguna solución real", "x = 3", "x = ±3"], a: 0, e: "x² = −9." },
    { q: "El discriminante de x² + 2x + 1 = 0 es…", o: ["0", "4", "−4"], a: 0, e: "4 − 4." },
    { q: "Si Δ > 0, la ecuación tiene…", o: ["dos soluciones", "una", "ninguna"], a: 0, e: "Raíz positiva." },
    { q: "Soluciones de x² − 7x + 10 = 0:", o: ["5 y 2", "−5 y −2", "7 y 10"], a: 0, e: "(7 ± 3)/2." },
    { q: "La solución de { x + y = 8 ; x − y = 2 } es…", o: ["x = 5, y = 3", "x = 3, y = 5", "x = 4, y = 4"], a: 0, e: "Sumando: 2x = 10." },
    { q: "Gráficamente, la solución de un sistema es…", o: ["el punto de corte de las rectas", "el origen", "la pendiente"], a: 0, e: "Cumple las dos." },
    { q: "Si las dos rectas son paralelas, el sistema…", o: ["no tiene solución", "tiene una", "tiene dos"], a: 0, e: "No se cortan." },
  ]),
  examen: mezcla([
    { q: "Soluciones de 2x² + x − 6 = 0:", o: ["3/2 y −2", "2 y −3/2", "6 y −1"], a: 0, e: "(−1 ± 7)/4." },
    { q: "Solución de { 2x + y = 9 ; x − y = 3 }:", o: ["x = 4, y = 1", "x = 3, y = 3", "x = 5, y = −1"], a: 0, e: "3x = 12." },
    { q: "Dos números suman 20 y su diferencia es 6. El mayor es…", o: ["13", "14", "7"], a: 0, e: "2x = 26." },
  ]),
  feynman: ["Qué diferencia una ecuación de segundo grado de una de primero", "Cómo se resuelven las incompletas sin fórmula", "Qué indica el discriminante", "Qué es la solución de un sistema y cómo se ve en una gráfica", "Cuándo conviene cada método"],
  mapa: mapa("2.º GRADO Y SISTEMAS", "var(--eso)", [
    ["Incompletas", "despejar · factor común", "var(--sun)"],
    ["Fórmula", "(−b ± √Δ)/2a", "var(--leaf)"],
    ["Sistemas", "dos ecuaciones a la vez", "var(--pen)"],
    ["Métodos", "sustitución · igualación · reducción", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Ecuación de 2.º grado", "ax² + bx + c = 0, con a ≠ 0."],
    ["ax² + c = 0", "x² = −c/a; dos soluciones opuestas si es positivo."],
    ["ax² + bx = 0", "x(ax + b) = 0 → x = 0 o x = −b/a."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac))/2a."],
    ["Discriminante", "Δ = b² − 4ac: indica el número de soluciones."],
    ["Sistema", "Dos ecuaciones que se cumplen a la vez."],
    ["Sustitución", "Despejar en una y sustituir en la otra."],
    ["Reducción", "Sumar ecuaciones para eliminar una incógnita."],
  ],
  familias: ["Plantead problemas con dos datos desconocidos: precios de dos productos, edades de dos hermanos…", "Usad una app de gráficas para ver dónde se cortan dos rectas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Ecuaciones de segundo grado completas e incompletas; discriminante; sistemas de dos ecuaciones lineales con dos incógnitas: métodos algebraicos e interpretación gráfica; resolución de problemas (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Problemas clásicos de gallinas y conejos con tablas de tanteo antes del sistema.", "GeoGebra para ver el corte de dos rectas y de una parábola con el eje X.", "Comparar los tres métodos con el mismo sistema."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): ecuaciones y sistemas", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Resuelve: (x − 1)² = 2x + 6.", pasos: ["x² − 2x + 1 = 2x + 6 → x² − 4x − 5 = 0.", "Δ = 16 + 20 = 36.", "x = (4 ± 6)/2 → x = 5 o x = −1."], resultado: "x = 5, x = −1" },
    { enunciado: "Resuelve por reducción: { 4x − 3y = 1 ; 2x + 5y = 33 }.", pasos: ["Multiplicamos la segunda por −2: −4x − 10y = −66.", "Sumamos con la primera: −13y = −65 → y = 5.", "4x − 15 = 1 → x = 4. Comprobación: 8 + 25 = 33."], resultado: "x = 4, y = 5" },
    { enunciado: "En un cine, 3 entradas de adulto y 2 infantiles cuestan 41 €, y 2 de adulto y 4 infantiles, 42 €. ¿Cuánto cuesta cada entrada?", pasos: ["{ 3a + 2n = 41 ; 2a + 4n = 42 }.", "Multiplicamos la primera por −2: −6a − 4n = −82; sumamos: −4a = −40 → a = 10.", "3 · 10 + 2n = 41 → n = 5,5."], resultado: "Adulto 10 €, infantil 5,50 €." },
  ],
  errores: [
    "Dividir entre x en ax² + bx = 0 y perder la solución x = 0.",
    "Olvidar la solución negativa al resolver x² = 25.",
    "Aplicar la fórmula sin haber igualado la ecuación a 0.",
    "Equivocarse con el signo de −b cuando b es negativo.",
    "Comprobar la solución de un sistema solo en una de las ecuaciones.",
    "No descartar soluciones sin sentido (longitudes negativas).",
  ],
  ejercicios: [
    { q: "Resuelve: 3x² − 27 = 0.", sol: "x² = 9 → x = ±3." },
    { q: "Resuelve: 5x² + 15x = 0.", sol: "5x(x + 3) = 0 → x = 0, x = −3." },
    { q: "Resuelve: x² + x − 12 = 0.", sol: "Δ = 49; x = (−1 ± 7)/2 → 3 y −4." },
    { q: "Resuelve: 4x² − 4x + 1 = 0.", sol: "Δ = 0; x = 1/2 (doble)." },
    { q: "¿Cuántas soluciones tiene 2x² + 3x + 5 = 0?", sol: "Δ = 9 − 40 = −31 < 0: ninguna." },
    { q: "Resuelve por sustitución: { x + 2y = 11 ; 3x − y = 5 }.", sol: "x = 11 − 2y → 33 − 7y = 5 → y = 4, x = 3." },
    { q: "Resuelve por igualación: { y = 3x − 2 ; y = −x + 6 }.", sol: "3x − 2 = −x + 6 → x = 2, y = 4." },
    { q: "Resuelve por reducción: { 5x + 2y = 1 ; 3x − 2y = 15 }.", sol: "8x = 16 → x = 2; y = −9/2." },
    { q: "El producto de dos números consecutivos es 132. ¿Cuáles son?", sol: "x(x + 1) = 132 → x = 11 o x = −12: 11 y 12, o −12 y −11." },
    { q: "Un bocadillo y un zumo cuestan 4,50 €; dos bocadillos y tres zumos, 10,50 €. ¿Cuánto cuesta cada cosa?", sol: "{ b + z = 4,5 ; 2b + 3z = 10,5 } → z = 1,5 €, b = 3 €." },
  ],
};

  return module.exports;
})();

P["semejanza"] = (function () {
  const module = { exports: {} };
// Matemáticas 2º ESO: semejanza. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Semejanza",
  minutos: 55,
  objetivos: ["Reconocer figuras semejantes y calcular la razón de semejanza", "Aplicar el teorema de Tales", "Usar los criterios de semejanza de triángulos", "Trabajar con escalas en planos y mapas y relacionar áreas y volúmenes de figuras semejantes"],
  claves: ["figuras semejantes", "razón de semejanza", "teorema de Tales", "posición de Tales", "escala", "criterios de semejanza"],
  pregunta: {
    texto: "¿Cómo pudo medir Tales de Mileto la altura de una pirámide de Egipto sin subirse a ella?",
    respuesta: "Clavó un bastón en el suelo y comparó sombras. A la misma hora, la razón entre la altura de un objeto y su sombra es la misma para todos: <mark>altura pirámide / sombra pirámide = altura bastón / sombra bastón</mark>. Midiendo las dos sombras y el bastón, calculó la altura con una proporción. Los triángulos que forman son <b>semejantes</b>.",
  },
  bloques: [
    {
      html: `<h3>Figuras semejantes</h3><p>Dos figuras son <b>semejantes</b> si tienen la <mark>misma forma</mark> aunque distinto tamaño: una es una ampliación o reducción de la otra. Para ello:</p><ul><li>Sus <b>ángulos correspondientes</b> son iguales.</li><li>Sus <b>lados correspondientes</b> (homólogos) son proporcionales.</li></ul><p>Una fotografía y su ampliación son semejantes; dos rectángulos cualesquiera, no siempre (un rectángulo de 2 × 4 y otro de 3 × 4 no tienen la misma forma). Todos los cuadrados son semejantes entre sí, y todas las circunferencias también.</p>`,
      svg: svg("Dos triángulos semejantes: uno con lados 3, 4 y 5 y otro con lados 6, 8 y 10; razón 2", `<path d="M24 140 L 24 104 L 72 140 Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><path d="M110 150 L 110 78 L 206 150 Z" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(16, 126, "3", { c: "var(--pen)", s: 11 })}${t(48, 156, "4", { c: "var(--pen)", s: 11 })}${t(56, 116, "5", { c: "var(--pen)", s: 11 })}${t(100, 118, "6", { c: "var(--leaf)", s: 12 })}${t(158, 166, "8", { c: "var(--leaf)", s: 12 })}${t(168, 104, "10", { c: "var(--leaf)", s: 12 })}${t(130, 34, "razón k = 6/3 = 8/4 = 10/5 = 2", { s: 12 })}`),
      video: { id: "4MxChkgm370", titulo: "Figuras semejantes", canal: "Daniel Carreón", vistas: 2380862 },
    },
    {
      html: `<h3>La razón de semejanza</h3><p>El cociente entre dos lados homólogos es siempre el mismo número, la <b>razón de semejanza</b> <b>k</b>:</p><p style="text-align:center"><mark>k = a'/a = b'/b = c'/c</mark></p><ul><li>Si k &gt; 1, la figura nueva es una <b>ampliación</b> (k = 2: el doble).</li><li>Si k &lt; 1, es una <b>reducción</b> (k = 0,5: la mitad).</li><li>Si k = 1, las figuras son <b>iguales</b> (congruentes).</li></ul><p>Conocida k, cualquier lado se calcula multiplicando: si k = 1,5 y un lado mide 6 cm, su homólogo mide 9 cm. Los <b>perímetros</b> también están en razón k.</p>`,
    },
    {
      html: `<h3>El teorema de Tales</h3><p>Si varias rectas paralelas cortan a dos rectas secantes, los <b>segmentos</b> que determinan en una son <mark>proporcionales</mark> a los que determinan en la otra:</p><p style="text-align:center"><b>AB / A'B' = BC / B'C'</b></p><p>Ejemplo: si en una recta los segmentos miden 2 y 3 cm, y en la otra el primero mide 4 cm, el segundo mide x: 2/4 = 3/x → x = 6 cm.</p><p>El teorema sirve para <b>dividir un segmento en partes iguales</b> con regla y compás, y para calcular distancias inaccesibles.</p>`,
      svg: svg("Dos rectas cortadas por tres paralelas; los segmentos AB y BC son proporcionales a A'B' y B'C'", `<path d="M30 160 L 120 20 M30 160 L 240 40" stroke="var(--ink)" stroke-width="2"/>
        ${[[0.3, "A"], [0.55, "B"], [0.9, "C"]].map(([f, l]) => { const x1 = 30 + 90 * f, y1 = 160 - 140 * f, x2 = 30 + 210 * f, y2 = 160 - 120 * f; return `<path d="M${(x1 - 14).toFixed(1)} ${(y1 + 4).toFixed(1)} L ${(x2 + 14).toFixed(1)} ${(y2 - 4).toFixed(1)}" stroke="var(--pen)" stroke-width="2"/><circle cx="${x1.toFixed(1)}" cy="${y1.toFixed(1)}" r="3.5" fill="var(--red)"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="3.5" fill="var(--leaf)"/>${t(x1 - 10, y1 - 2, l, { c: "var(--red)", s: 11 })}${t(x2 + 4, y2 + 14, l + "'", { c: "var(--leaf)", s: 11 })}`; }).join("")}
        ${t(196, 150, "AB/A'B' = BC/B'C'", { s: 11 })}`),
      video: { id: "JGyYSzhCxFA", titulo: "Teorema de Tales: introducción", canal: "Matemáticas profe Alex", vistas: 3895756 },
    },
    {
      html: `<h3>Triángulos en posición de Tales</h3><p>Si en un triángulo se traza una recta <b>paralela</b> a un lado, se forma un triángulo pequeño <b>semejante</b> al grande. Se dice que están en <b>posición de Tales</b>: comparten un ángulo y los lados opuestos son paralelos.</p><p>Así se miden alturas con sombras: un poste de 2 m da una sombra de 1,5 m y, a la vez, un árbol da una sombra de 6 m. Los triángulos son semejantes: h/6 = 2/1,5 → <b>h = 8 m</b>.</p>`,
      svg: svg("Un árbol y un poste con sus sombras forman dos triángulos semejantes", `<path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M60 150 V 40" stroke="var(--leaf)" stroke-width="5"/><circle cx="60" cy="40" r="20" fill="var(--leaf)" fill-opacity=".4"/><path d="M60 40 L 200 150" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M60 150 H 200" stroke="var(--ink)" stroke-width="4" opacity=".35"/>
        <path d="M165 150 V 122" stroke="var(--pen)" stroke-width="4"/><path d="M165 150 H 200" stroke="var(--pen)" stroke-width="4" opacity=".5"/>
        ${t(44, 100, "h", { c: "var(--leaf)", s: 15 })}${t(130, 170, "sombra 6 m", { s: 11 })}${t(158, 142, "2 m", { c: "var(--pen)", s: 11, a: "end" })}${t(212, 140, "1,5 m", { c: "var(--pen)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Criterios de semejanza de triángulos</h3><p>Para saber si dos triángulos son semejantes no hace falta comprobarlo todo. Basta con uno de estos criterios:</p>${tabla(["Criterio", "Se cumple si…"], [["1.º Dos ángulos iguales", "tienen dos ángulos iguales (el tercero también lo será)"], ["2.º Tres lados proporcionales", "a'/a = b'/b = c'/c"], ["3.º Ángulo y dos lados", "tienen un ángulo igual y los lados que lo forman son proporcionales"]])}<p>Consecuencia: dos triángulos rectángulos son semejantes si tienen un ángulo agudo igual. Y dos triángulos equiláteros siempre lo son.</p>`,
      video: { id: "g_c0c1b4rlA", titulo: "Criterios de semejanza de triángulos", canal: "Susi Profe", vistas: 782046 },
    },
    {
      html: `<h3>Escalas: planos y mapas</h3><p>Un plano o un mapa es una figura <b>semejante</b> a la realidad. La <b>escala</b> indica la razón entre las medidas del dibujo y las reales: <mark>1 : 100</mark> significa que 1 cm del plano son 100 cm (1 m) en la realidad.</p><ul><li>Escala <b>numérica</b>: 1 : 50.000 (1 cm → 50.000 cm = 500 m).</li><li>Escala <b>gráfica</b>: un segmento dibujado con su equivalencia real.</li></ul><p>Distancia real = distancia en el plano · denominador de la escala. Si en un mapa 1 : 200.000 dos pueblos están a 3,5 cm, en la realidad están a 700.000 cm = <b>7 km</b>. Las maquetas usan escalas de reducción (1 : 87 en los trenes), y los dibujos de microscopio, de ampliación (50 : 1).</p>`,
    },
    {
      html: `<h3>Áreas y volúmenes de figuras semejantes</h3><p>Si la razón de semejanza es k:</p><ul><li>La razón de los <b>perímetros</b> es <b>k</b>.</li><li>La razón de las <b>áreas</b> es <mark>k²</mark>.</li><li>La razón de los <b>volúmenes</b> es <mark>k³</mark>.</li></ul><p>Si se duplica el lado de un cuadrado (k = 2), su área se multiplica por 4; si se duplica la arista de un cubo, su volumen se multiplica por 8. Por eso un plano a escala 1 : 100 representa una superficie 10.000 veces menor que la real.</p>`,
      svg: svg("Un cuadrado de lado 1 y otro de lado 2 que contiene 4 cuadrados pequeños: al doblar el lado, el área se multiplica por 4", `<rect x="34" y="80" width="40" height="40" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<rect x="${120 + (i % 2) * 40}" y="${40 + Math.floor(i / 2) * 40}" width="40" height="40" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>`).join("")}
        ${t(54, 140, "lado 1", { c: "var(--pen)", s: 11 })}${t(54, 156, "área 1", { c: "var(--pen)", s: 11 })}${t(160, 140, "lado 2 (k = 2)", { c: "var(--leaf)", s: 11 })}${t(160, 156, "área 4 = k²", { c: "var(--leaf)", s: 12 })}${t(130, 24, "áreas × k² · volúmenes × k³", { s: 12 })}`),
    },
    {
      html: `<h3>Semejanza en la vida real</h3><ul><li><b>Fotocopias</b>: ampliar al 150 % es aplicar k = 1,5; el área de la hoja necesaria es 2,25 veces mayor.</li><li><b>Pantallas y formatos</b>: los folios A4, A3, A5… son semejantes; un A3 tiene el doble de área que un A4.</li><li><b>Arquitectura</b>: los planos de una casa suelen estar a 1 : 50 o 1 : 100.</li><li><b>Distancias inaccesibles</b>: anchura de un río, altura de un edificio o de una montaña usando sombras o espejos.</li><li><b>Naturaleza</b>: un elefante no puede ser un ratón «ampliado», porque su peso crece con k³ y la sección de sus huesos solo con k².</li></ul>`,
    },
  ],
  figura: {
    titulo: "Semejanza en un vistazo",
    svg: filas("Resumen: misma forma, razón k, teorema de Tales, criterios, escalas y áreas y volúmenes", [["Semejantes", "ángulos iguales · lados proporcionales", "var(--pen)"], ["Razón k", "k = a'/a · ampliación si k > 1", "var(--inf)"], ["Tales", "paralelas → segmentos proporcionales", "var(--leaf)"], ["Criterios", "2 ángulos · 3 lados · ángulo y 2 lados", "var(--sun)"], ["Escala", "1 : 100 → 1 cm son 1 m", "var(--red)"], ["Áreas y volúmenes", "× k² y × k³", "var(--ink)"]], 220),
  },
  video: { id: "staL7w-eT58", titulo: "Teorema de Tales, explicación fácil", canal: "Daniel Carreón", vistas: 4840587, megusta: 0, busqueda: "semejanza de figuras teorema de tales" },
  quiz: mezcla([
    { q: "Dos figuras semejantes tienen…", o: ["la misma forma", "el mismo tamaño", "el mismo perímetro"], a: 0, e: "Ampliación o reducción." },
    { q: "Si k = 3 y un lado mide 4 cm, su homólogo mide…", o: ["12 cm", "7 cm", "4/3 cm"], a: 0, e: "4 · 3." },
    { q: "Una razón k = 0,5 indica…", o: ["una reducción a la mitad", "una ampliación", "figuras iguales"], a: 0, e: "k < 1." },
    { q: "¿Son siempre semejantes dos cuadrados?", o: ["sí", "no", "solo si son iguales"], a: 0, e: "Misma forma." },
    { q: "Con Tales: 2/5 = 4/x → x =", o: ["10", "8", "2,5"], a: 0, e: "5 · 4 : 2." },
    { q: "Dos triángulos con dos ángulos iguales son…", o: ["semejantes", "iguales", "rectángulos"], a: 0, e: "Primer criterio." },
    { q: "En un plano 1 : 50, 4 cm son…", o: ["2 m", "200 m", "50 cm"], a: 0, e: "200 cm." },
    { q: "Si k = 2, las áreas se multiplican por…", o: ["4", "2", "8"], a: 0, e: "k²." },
    { q: "Si k = 3, los volúmenes se multiplican por…", o: ["27", "9", "3"], a: 0, e: "k³." },
    { q: "En un mapa 1 : 100.000, 1 cm son…", o: ["1 km", "100 m", "10 km"], a: 0, e: "100.000 cm." },
  ]),
  examen: mezcla([
    { q: "Un edificio da una sombra de 24 m cuando un palo de 1,5 m da 2 m. El edificio mide…", o: ["18 m", "32 m", "36 m"], a: 0, e: "1,5 · 24 : 2." },
    { q: "Un piso de 90 m² en un plano 1 : 100 ocupa…", o: ["90 cm²", "9 cm²", "900 cm²"], a: 0, e: "900.000 cm² : 10.000." },
    { q: "Los triángulos de lados 4-6-8 y 6-9-12 son…", o: ["semejantes, k = 1,5", "iguales", "no semejantes"], a: 0, e: "6/4 = 9/6 = 12/8." },
  ]),
  feynman: ["Qué condiciones cumplen dos figuras semejantes", "Qué es la razón de semejanza", "Qué dice el teorema de Tales y cómo midió la pirámide", "Los criterios de semejanza de triángulos", "Por qué el área se multiplica por k²"],
  mapa: mapa("SEMEJANZA", "var(--eso)", [
    ["Figuras semejantes", "misma forma · razón k", "var(--pen)"],
    ["Tales", "paralelas · sombras", "var(--leaf)"],
    ["Escalas", "planos y mapas", "var(--red)"],
    ["Áreas y volúmenes", "k² y k³", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Semejantes", "Misma forma: ángulos iguales y lados proporcionales."],
    ["Razón de semejanza", "k = lado de la nueva / lado homólogo de la original."],
    ["Teorema de Tales", "Paralelas cortan segmentos proporcionales."],
    ["Posición de Tales", "Triángulos con un ángulo común y lados opuestos paralelos."],
    ["Criterio 1", "Dos ángulos iguales."],
    ["Escala 1 : n", "1 unidad en el plano son n en la realidad."],
    ["Áreas semejantes", "Razón k²."],
    ["Volúmenes semejantes", "Razón k³."],
  ],
  familias: ["Medid la altura de un árbol con su sombra y la de una persona.", "Buscad la escala en un mapa de carreteras y calculad distancias reales.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Figuras semejantes y razón de semejanza; teorema de Tales; criterios de semejanza de triángulos; escalas; relación entre áreas y volúmenes de figuras semejantes (RD 217/2022, Matemáticas, sentido espacial y de la medida).",
    ideas: ["Medir la altura del edificio del centro con sombras o con un espejo.", "Ampliar un dibujo con una cuadrícula.", "Plano a escala del aula."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): semejanza", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un triángulo tiene lados de 5, 7 y 9 cm. Se construye otro semejante cuyo lado menor mide 15 cm. Calcula los otros lados y la razón de los perímetros.", pasos: ["k = 15/5 = 3.", "Lados: 7 · 3 = 21 cm y 9 · 3 = 27 cm.", "Perímetros: 21 y 63 cm; razón 3 = k."], resultado: "21 cm y 27 cm; razón de perímetros 3." },
    { enunciado: "En un plano 1 : 200 una habitación mide 2 cm × 2,5 cm. ¿Cuál es su superficie real?", pasos: ["Medidas reales: 2 · 200 = 400 cm = 4 m; 2,5 · 200 = 500 cm = 5 m.", "Área: 4 · 5 = 20 m².", "Comprobación con k²: 5 cm² · 200² = 200.000 cm² = 20 m²."], resultado: "20 m²" },
    { enunciado: "Para medir la anchura x de un río se marcan dos triángulos en posición de Tales. En el pequeño, los lados homólogos miden 4 m (por la orilla) y 3 m; en el grande, el lado por la orilla mide 10 m y el homólogo del de 3 m es la anchura del río. Calcula x.", pasos: ["Los triángulos son semejantes: x / 3 = 10 / 4.", "x = 3 · 10 : 4.", "x = 7,5 m."], resultado: "El río mide unos 7,5 m de ancho." },
  ],
  errores: [
    "Pensar que dos rectángulos cualesquiera son semejantes.",
    "Emparejar mal los lados homólogos.",
    "Multiplicar el área por k en lugar de por k².",
    "Olvidar pasar los centímetros a metros o kilómetros al usar escalas.",
    "Aplicar Tales con rectas que no son paralelas.",
  ],
  ejercicios: [
    { q: "¿Son semejantes dos rectángulos de 4 × 6 y 6 × 9?", sol: "Sí: 6/4 = 9/6 = 1,5." },
    { q: "Un triángulo de lados 3, 5 y 6 cm se amplía con k = 2,5. ¿Cuánto miden los lados nuevos?", sol: "7,5; 12,5 y 15 cm." },
    { q: "Aplica Tales: los segmentos de una recta miden 3 y 4,5 cm; en la otra el primero mide 2 cm. ¿Cuánto mide el segundo?", sol: "3/2 = 4,5/x → x = 3 cm." },
    { q: "Un palo de 1 m da una sombra de 0,8 m. A la misma hora una torre da 20 m de sombra. ¿Cuánto mide?", sol: "25 m." },
    { q: "¿Son semejantes dos triángulos con ángulos 50°, 60° y 70° y 50°, 70° y 60°?", sol: "Sí: tienen los ángulos iguales." },
    { q: "En un mapa 1 : 25.000, una ruta mide 18 cm. ¿Cuántos km son?", sol: "450.000 cm = 4,5 km." },
    { q: "Dos ciudades a 120 km aparecen a 4 cm en un mapa. ¿Cuál es la escala?", sol: "12.000.000 cm : 4 = 1 : 3.000.000." },
    { q: "Dos cuadrados tienen razón de semejanza 3. Si el pequeño tiene 5 cm² de área, ¿cuánta tiene el grande?", sol: "5 · 9 = 45 cm²." },
    { q: "Una maqueta de un edificio a escala 1 : 50 tiene un volumen de 0,02 m³. ¿Cuál es el volumen real?", sol: "0,02 · 50³ = 2.500 m³." },
    { q: "Explica por qué un A3 tiene el doble de área que un A4 si ambos son semejantes.", sol: "Su razón de semejanza es √2 ≈ 1,41, y las áreas van en razón k² = 2." },
  ],
};

  return module.exports;
})();

module.exports = P;
