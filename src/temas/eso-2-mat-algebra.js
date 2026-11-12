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
