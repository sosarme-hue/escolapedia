// Matemáticas 3º ESO: expresiones algebraicas y polinomios. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Expresiones algebraicas y polinomios",
  minutos: 60,
  objetivos: ["Traducir enunciados al lenguaje algebraico", "Reconocer monomios y polinomios, su grado y su valor numérico", "Sumar, restar, multiplicar y dividir polinomios", "Aplicar las identidades notables y la regla de Ruffini"],
  claves: ["monomio", "polinomio", "grado", "valor numérico", "identidades notables", "Ruffini"],
  pregunta: {
    texto: "Piensa un número, súmale 3, multiplícalo por 2, réstale 4 y divide entre 2. Ahora resta el número que pensaste. ¿Te ha salido 1?",
    respuesta: "Siempre sale 1. Con álgebra se ve por qué: si el número es x, queda <mark>(2(x + 3) − 4) / 2 − x = (2x + 2) / 2 − x = x + 1 − x = 1</mark>. Las letras permiten demostrar que algo funciona para todos los números a la vez.",
  },
  bloques: [
    {
      html: `<h3>El lenguaje algebraico</h3><p>Una <b>expresión algebraica</b> combina números y letras unidos por operaciones. Las letras, llamadas <b>variables</b> o <b>incógnitas</b>, representan números cualesquiera. Traducir es la primera destreza:</p>${tabla(["Enunciado", "Expresión"], [["El doble de un número", "2x"], ["Un número más su cuadrado", "x + x²"], ["Dos números consecutivos", "x y x + 1"], ["Un número par", "2n"], ["El 15 % de un precio", "0,15p"]])}<p>El <b>valor numérico</b> se obtiene al sustituir las letras por números: si x = 3, 2x² − 5 vale 2 · 9 − 5 = 13.</p>`,
    },
    {
      html: `<h3>Monomios</h3><p>Un <b>monomio</b> es un producto de un número, el <b>coeficiente</b>, por letras con exponentes naturales, la <b>parte literal</b>. En −5x²y, el coeficiente es −5 y la parte literal, x²y. El <b>grado</b> es la suma de los exponentes de las letras: −5x²y tiene grado 3.</p><p>Dos monomios son <mark>semejantes</mark> si tienen la misma parte literal: 3x² y −7x² lo son; 3x² y 3x³, no. Solo los semejantes se pueden sumar o restar: 3x² − 7x² = −4x². Para multiplicar monomios se multiplican los coeficientes y se suman los exponentes: (2x³) · (−4x) = −8x⁴.</p>`,
    },
    {
      html: `<h3>Polinomios</h3><p>Un <b>polinomio</b> es una suma de monomios no semejantes, llamados <b>términos</b>. P(x) = 4x³ − 2x² + x − 7 tiene cuatro términos. Su <b>grado</b> es el mayor de los grados de sus términos (aquí, 3); el número sin letra (−7) es el <b>término independiente</b>.</p><p>Se suele escribir <mark>ordenado</mark> de mayor a menor grado. Si falta algún grado, el polinomio es <b>incompleto</b>: x³ − 2x + 1 no tiene término en x². El valor numérico P(a) es lo que vale al sustituir x por a: P(2) = 32 − 8 + 2 − 7 = 19.</p>`,
      svg: svg("Partes del polinomio 4x al cubo menos 2x al cuadrado más x menos 7: términos, coeficiente principal, grado y término independiente", `${t(130, 70, "4x³ − 2x² + x − 7", { c: "var(--ink)", s: 22, d: true })}
        <path d="M44 80 V 104 M206 80 V 104" stroke="var(--pen)" stroke-width="2"/><path d="M60 46 V 30" stroke="var(--red)" stroke-width="2"/>
        ${t(44, 120, "coeficiente", { c: "var(--pen)", s: 11 })}${t(44, 134, "principal: 4", { c: "var(--pen)", s: 11 })}${t(206, 120, "término", { c: "var(--leaf)", s: 11 })}${t(206, 134, "independiente", { c: "var(--leaf)", s: 11 })}${t(76, 24, "grado 3", { c: "var(--red)", s: 11 })}
        ${t(130, 166, "4 términos, ordenado y completo", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Sumar y restar polinomios</h3><p>Se suman o restan los <b>términos semejantes</b>. Conviene colocarlos en columna, ordenados, dejando hueco para los grados que falten.</p><p>Si P(x) = 3x³ + 2x − 5 y Q(x) = x³ − 4x² + 6:</p><ul><li>P + Q = 4x³ − 4x² + 2x + 1.</li><li>P − Q = 3x³ + 2x − 5 − x³ + 4x² − 6 = <mark>2x³ + 4x² + 2x − 11</mark>.</li></ul><p>Al restar, el signo menos afecta a <b>todos</b> los términos de Q: es el error más frecuente de todo el tema.</p>`,
    },
    {
      html: `<h3>Multiplicar polinomios</h3><p>Se aplica la <b>propiedad distributiva</b>: cada término del primero multiplica a cada término del segundo, y después se agrupan los semejantes.</p><p>(2x + 3) · (x² − x + 4) = 2x³ − 2x² + 8x + 3x² − 3x + 12 = <mark>2x³ + x² + 5x + 12</mark>.</p><p>El grado del producto es la <b>suma</b> de los grados (1 + 2 = 3). Para comprobar, puedes dar un valor a x: con x = 1, el primer lado da 5 · 4 = 20 y el resultado, 2 + 1 + 5 + 12 = 20.</p>`,
      video: { id: "tnf_wQ7-_Pw", titulo: "Polinomio por polinomio súper fácil", canal: "Daniel Carreón", vistas: 2237354, megusta: 0 },
    },
    {
      html: `<h3>Identidades notables</h3><p>Son productos que aparecen tanto que conviene saberlos de memoria:</p>${tabla(["Identidad", "Ejemplo"], [["(a + b)² = a² + 2ab + b²", "(x + 3)² = x² + 6x + 9"], ["(a − b)² = a² − 2ab + b²", "(2x − 1)² = 4x² − 4x + 1"], ["(a + b)(a − b) = a² − b²", "(x + 5)(x − 5) = x² − 25"]])}<p>Leídas al revés sirven para <b>factorizar</b>: x² − 49 = (x + 7)(x − 7) y x² + 10x + 25 = (x + 5)².</p>`,
      svg: svg("Cuadrado de lado a más b dividido en un cuadrado a al cuadrado, dos rectángulos a por b y un cuadrado b al cuadrado", `<rect x="40" y="20" width="90" height="90" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/><rect x="130" y="20" width="40" height="90" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><rect x="40" y="110" width="90" height="40" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><rect x="130" y="110" width="40" height="40" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/>
        ${t(85, 70, "a²", { c: "var(--pen)", s: 16 })}${t(150, 70, "ab", { c: "var(--leaf)", s: 13 })}${t(85, 135, "ab", { c: "var(--leaf)", s: 13 })}${t(150, 135, "b²", { c: "var(--red)", s: 13 })}
        ${t(85, 168, "a", { c: "var(--muted)" })}${t(150, 168, "b", { c: "var(--muted)" })}${t(214, 80, "(a + b)²", { c: "var(--ink)", s: 13 })}${t(214, 100, "= a² + 2ab + b²", { c: "var(--ink)", s: 10 })}`),
    },
    {
      html: `<h3>Dividir polinomios</h3><p>La división de polinomios se hace como la de números, término a término: se divide el primer término del dividendo entre el primero del divisor, se multiplica por todo el divisor y se resta. Se repite hasta que el resto tenga <b>menor grado</b> que el divisor.</p><p>Se cumple la <mark>prueba de la división</mark>: D(x) = d(x) · c(x) + r(x). Por ejemplo, (x² + 5x + 7) : (x + 2) da cociente x + 3 y resto 1, porque (x + 2)(x + 3) + 1 = x² + 5x + 7.</p>`,
    },
    {
      html: `<h3>La regla de Ruffini</h3><p>Cuando el divisor es de la forma <b>x − a</b>, se divide más rápido con la regla de Ruffini: se escriben los coeficientes (con ceros donde falten grados), se baja el primero y, en cada paso, se multiplica por a y se suma a la columna siguiente.</p><p>El <b>teorema del resto</b> dice que el resto de dividir P(x) entre x − a es <mark>P(a)</mark>. Si P(a) = 0, entonces a es una <b>raíz</b> del polinomio y (x − a) es un factor suyo.</p>`,
      svg: svg("Regla de Ruffini para dividir x al cubo menos 2x al cuadrado menos 5x más 6 entre x menos 1: cociente x al cuadrado menos x menos 6, resto 0", `<path d="M50 40 V 128 M40 98 H 240" stroke="var(--ink)" stroke-width="2"/>
        ${[1, -2, -5, 6].map((v, i) => t(80 + i * 48, 50, v, { s: 14 })).join("")}${["", 1, -1, -6].map((v, i) => (i ? t(80 + i * 48, 86, v, { c: "var(--pen)", s: 14 }) : "")).join("")}
        ${[1, -1, -6, 0].map((v, i) => t(80 + i * 48, 120, v, { c: i === 3 ? "var(--red)" : "var(--leaf)", s: 14 })).join("")}${t(34, 86, "1", { c: "var(--pen)", s: 14 })}
        ${t(130, 160, "cociente x² − x − 6 · resto 0", { c: "var(--leaf)", s: 12 })}`),
      video: { id: "kL85aI70rD8", titulo: "Regla de Ruffini para división de polinomios", canal: "Susi Profe", vistas: 1181965, megusta: 0 },
    },
    {
      html: `<h3>Sacar factor común y factorizar</h3><p><b>Factorizar</b> un polinomio es escribirlo como producto de polinomios más sencillos. Las herramientas de este curso son:</p><ol><li><b>Sacar factor común</b>: 6x³ − 9x² = 3x²(2x − 3).</li><li><b>Identidades notables</b>: 4x² − 9 = (2x + 3)(2x − 3).</li><li><b>Ruffini</b>, probando como raíces los divisores del término independiente: x³ − 2x² − 5x + 6 = (x − 1)(x² − x − 6) = <mark>(x − 1)(x − 3)(x + 2)</mark>.</li></ol><p>Factorizar sirve para simplificar fracciones algebraicas y para resolver ecuaciones.</p>`,
    },
  ],
  figura: {
    titulo: "Operar con polinomios",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Sumar: términos semejantes. Multiplicar: distributiva. Identidades notables. Dividir entre x menos a: Ruffini y teorema del resto">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Sumar / restar", "solo términos semejantes; el − cambia todos los signos", "var(--pen)"], ["Multiplicar", "cada término por cada término (distributiva)", "var(--leaf)"], ["Identidades", "(a ± b)² = a² ± 2ab + b² · (a + b)(a − b) = a² − b²", "var(--red)"], ["Dividir entre x − a", "Ruffini; el resto es P(a)", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${42 + i * 52}" font-size="14" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "goHUDRbeejM", titulo: "Identidades notables: binomio al cuadrado y suma por diferencia", canal: "Susi Profe", vistas: 2036411, megusta: 0, busqueda: "identidades notables" },
  quiz: mezcla([
    { q: "El grado de −3x²y³ es…", o: ["2", "3", "5"], a: 2, e: "2 + 3 = 5." },
    { q: "¿Qué monomio es semejante a 4xy²?", o: ["4x²y", "−xy²", "4xy"], a: 1, e: "Misma parte literal xy²." },
    { q: "Si P(x) = x² − 3x + 1, P(−2) =", o: ["11", "−1", "−9"], a: 0, e: "4 + 6 + 1." },
    { q: "(3x²) · (−2x³) =", o: ["−6x⁵", "−6x⁶", "x⁵"], a: 0, e: "Coeficientes 3 · (−2); exponentes 2 + 3." },
    { q: "(x − 4)² =", o: ["x² − 16", "x² − 8x + 16", "x² + 16"], a: 1, e: "a² − 2ab + b²." },
    { q: "(x + 6)(x − 6) =", o: ["x² − 36", "x² + 36", "x² − 12x − 36"], a: 0, e: "Suma por diferencia." },
    { q: "(5x² − 2x) − (x² − 2x) =", o: ["4x²", "4x² − 4x", "6x²"], a: 0, e: "−2x − (−2x) = 0." },
    { q: "El resto de dividir x³ − 1 entre x − 1 es…", o: ["0", "1", "−2"], a: 0, e: "P(1) = 0." },
    { q: "Factoriza 5x² + 10x:", o: ["5x(x + 2)", "5(x² + 10x)", "x(5x + 2)"], a: 0, e: "Factor común 5x." },
    { q: "El grado de (x² + 1)(x³ − x) es…", o: ["5", "6", "3"], a: 0, e: "Se suman los grados: 2 + 3." },
  ]),
  examen: mezcla([
    { q: "x² + 14x + 49 =", o: ["(x + 7)²", "(x − 7)²", "(x + 7)(x − 7)"], a: 0, e: "2 · 7 = 14 y 7² = 49." },
    { q: "¿Es x = 2 raíz de x³ − 3x − 2?", o: ["Sí", "No", "Solo si x > 0"], a: 0, e: "8 − 6 − 2 = 0." },
    { q: "«El cuadrado de la suma de dos números» se escribe…", o: ["x² + y²", "(x + y)²", "2(x + y)"], a: 1, e: "Primero se suman y luego se eleva." },
  ]),
  feynman: ["Qué son los términos semejantes y por qué solo esos se suman", "Cómo se multiplica un binomio por un trinomio", "De dónde sale (a + b)² = a² + 2ab + b² con un dibujo", "Qué dice el teorema del resto"],
  mapa: mapa("POLINOMIOS", "var(--eso)", [
    ["Lenguaje algebraico", "traducir · valor numérico", "var(--ink)"],
    ["Monomios", "coeficiente · grado · semejantes", "var(--pen)"],
    ["Operaciones", "+ − × ÷ · Ruffini", "var(--leaf)"],
    ["Identidades", "cuadrados · suma por diferencia", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Monomio", "Producto de un coeficiente por letras con exponentes naturales."],
    ["Grado de un polinomio", "El mayor grado de sus términos."],
    ["Términos semejantes", "Los que tienen la misma parte literal."],
    ["(a + b)²", "a² + 2ab + b²"],
    ["(a − b)²", "a² − 2ab + b²"],
    ["(a + b)(a − b)", "a² − b²"],
    ["Teorema del resto", "El resto de P(x) : (x − a) es P(a)."],
    ["Raíz de un polinomio", "Un número a tal que P(a) = 0; entonces (x − a) es factor."],
  ],
  familias: ["Probad el truco de «piensa un número» con la familia y explicad con álgebra por qué funciona.", "Dibujad (a + b)² con cuadrados y rectángulos de papel.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: expresiones algebraicas, polinomios, operaciones, identidades notables, regla de Ruffini y factorización sencilla (RD 217/2022, Matemáticas 3º).",
    ideas: ["Algeblocks o fichas de álgebra para visualizar productos e identidades.", "Trucos de magia numérica para demostrar con álgebra.", "Carrera de factorizaciones por parejas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): polinomios", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Si P(x) = 2x² − x + 3 y Q(x) = x − 2, calcula P(x) · Q(x) − 2P(x).",
      pasos: ["P · Q = 2x³ − 4x² − x² + 2x + 3x − 6 = 2x³ − 5x² + 5x − 6.", "2P = 4x² − 2x + 6.", "Restamos: 2x³ − 5x² + 5x − 6 − 4x² + 2x − 6 = 2x³ − 9x² + 7x − 12."],
      resultado: "2x³ − 9x² + 7x − 12." },
    { enunciado: "Desarrolla (3x − 2)² − (x + 1)(x − 1).",
      pasos: ["(3x − 2)² = 9x² − 12x + 4.", "(x + 1)(x − 1) = x² − 1.", "Restamos: 9x² − 12x + 4 − x² + 1 = 8x² − 12x + 5."],
      resultado: "8x² − 12x + 5." },
    { enunciado: "Divide P(x) = 2x³ − 3x + 5 entre x + 2 por Ruffini y comprueba el resto.",
      pasos: ["Coeficientes con el hueco de x²: 2, 0, −3, 5. Como x + 2 = x − (−2), a = −2.", "Bajamos 2; 2 · (−2) = −4 → 0 − 4 = −4; −4 · (−2) = 8 → −3 + 8 = 5; 5 · (−2) = −10 → 5 − 10 = −5.", "Cociente 2x² − 4x + 5, resto −5.", "Comprobación: P(−2) = −16 + 6 + 5 = −5."],
      resultado: "c(x) = 2x² − 4x + 5; r = −5." },
  ],
  errores: [
    "No cambiar el signo de todos los términos al restar un polinomio.",
    "Sumar monomios no semejantes: 3x² + 2x no es 5x³.",
    "Desarrollar (a + b)² como a² + b², olvidando el doble producto.",
    "En Ruffini, no poner 0 en los grados que faltan.",
    "Usar a = 2 para dividir entre x + 2 (hay que usar −2).",
    "Multiplicar exponentes al multiplicar monomios en vez de sumarlos.",
  ],
  ejercicios: [
    { q: "Traduce: «el triple de un número menos su mitad» y «la suma de tres números consecutivos».", sol: "3x − x/2. x + (x + 1) + (x + 2) = 3x + 3." },
    { q: "Calcula el valor numérico de 3x² − 2xy + y² para x = −1, y = 2.", sol: "3 · 1 − 2 · (−1) · 2 + 4 = 3 + 4 + 4 = 11." },
    { q: "Reduce: 4x² − 3x + 2x² + 7x − 5.", sol: "6x² + 4x − 5." },
    { q: "Si P(x) = x³ − 2x + 1 y Q(x) = 3x² + 2x − 4, calcula P − Q.", sol: "x³ − 3x² − 4x + 5." },
    { q: "Multiplica (x² − 3)(2x + 1).", sol: "2x³ + x² − 6x − 3." },
    { q: "Desarrolla: (x + 5)², (2a − 3)² y (4x + 1)(4x − 1).", sol: "x² + 10x + 25; 4a² − 12a + 9; 16x² − 1." },
    { q: "Escribe como identidad notable: x² − 6x + 9 y 25 − x².", sol: "(x − 3)². (5 + x)(5 − x)." },
    { q: "Divide x³ + 4x² − 2x + 3 entre x − 1 por Ruffini.", sol: "Cociente x² + 5x + 3; resto 6. (P(1) = 1 + 4 − 2 + 3 = 6.)" },
    { q: "Factoriza x³ − 4x.", sol: "x(x² − 4) = x(x + 2)(x − 2)." },
    { q: "Factoriza x³ − 7x + 6 sabiendo que x = 1 es raíz.", sol: "Ruffini con 1: cociente x² + x − 6 = (x + 3)(x − 2). Resultado: (x − 1)(x − 2)(x + 3)." },
  ],
};
