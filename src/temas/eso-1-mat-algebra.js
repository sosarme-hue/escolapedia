// Matemáticas 1º ESO: iniciación al álgebra. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, caja, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Iniciación al álgebra",
  minutos: 55,
  objetivos: ["Traducir enunciados del lenguaje habitual al algebraico", "Calcular el valor numérico de una expresión algebraica", "Reconocer monomios, sus partes y los monomios semejantes", "Sumar, restar y multiplicar monomios y reducir expresiones sencillas"],
  claves: ["lenguaje algebraico", "variable", "expresión algebraica", "valor numérico", "monomio", "monomios semejantes"],
  pregunta: {
    texto: "Un taxi cobra 3 € al subir y 1,20 € por kilómetro. ¿Cómo escribirías el precio de cualquier viaje en una sola fórmula?",
    respuesta: "Llamamos <b>x</b> a los kilómetros. El precio es <mark>3 + 1,2x</mark>. Con esa fórmula sirve para cualquier viaje: para 10 km, 3 + 1,2 · 10 = 15 €. Usar letras para números que pueden cambiar es el <b>álgebra</b>.",
  },
  bloques: [
    {
      html: `<h3>Las letras en matemáticas</h3><p>El <b>álgebra</b> usa <b>letras</b> para representar números desconocidos o que pueden variar. Así se escriben reglas generales de forma corta.</p><ul><li>«El doble de un número» → <b>2x</b>.</li><li>El área de un rectángulo → <b>b · h</b>.</li><li>Una propiedad: <b>a + b = b + a</b> para cualquier a y b.</li></ul><p>A la letra se le llama <b>variable</b> o <b>incógnita</b>. Entre un número y una letra no se escribe el punto de multiplicar: 3 · x se escribe <b>3x</b>, y 1 · x se escribe solo <b>x</b>.</p>`,
      svg: svg("Una caja con una x dentro representa un número desconocido; tres cajas iguales son 3x", `${[0, 1, 2].map((i) => caja(40 + i * 62, 50, 50, 50, "x", "var(--pen)", { s: 22 })).join("")}${t(130, 130, "x + x + x = 3x", { s: 16, d: true })}${t(130, 156, "la caja guarda un número", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Del lenguaje habitual al algebraico</h3><p>Traducir bien es la clave para resolver problemas. Llamamos x al número:</p>${tabla(["Lenguaje habitual", "Lenguaje algebraico"], [["El doble de un número", "2x"], ["La mitad de un número", "x/2"], ["Un número aumentado en 5", "x + 5"], ["El triple de un número menos 4", "3x − 4"], ["El cuadrado de un número", "x²"], ["El número siguiente", "x + 1"], ["Dos números consecutivos", "x, x + 1"], ["Un número par", "2x"]])}<p>Ojo con el orden: «el doble de un número más 3» es 2x + 3, pero «el doble de la suma de un número y 3» es <b>2(x + 3)</b>.</p>`,
      video: vb("algB"),
    },
    {
      html: `<h3>Expresiones algebraicas y valor numérico</h3><p>Una <b>expresión algebraica</b> es una combinación de números y letras unidos por operaciones: 3x + 2, a² − 5b, 2(x + y).</p><p>El <b>valor numérico</b> es el resultado de <mark>sustituir las letras por números</mark> y operar respetando la jerarquía.</p><p>Valor de 3x² − 2x + 1 para x = 2: 3 · 2² − 2 · 2 + 1 = 12 − 4 + 1 = <b>9</b>.</p><p>Con números negativos usa paréntesis: para x = −1, 3 · (−1)² − 2 · (−1) + 1 = 3 + 2 + 1 = <b>6</b>.</p>`,
      svg: svg("Máquina de sustituir: entra x igual a 2, la expresión 3x más 1 da 7", `<path d="M20 80 H 66" stroke="var(--leaf)" stroke-width="3" marker-end="url(#fa1)"/><defs><marker id="fa1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>${t(38, 70, "x = 2", { c: "var(--leaf)", s: 12 })}${caja(72, 52, 110, 56, "3x + 1", "var(--pen)", { s: 16 })}<path d="M186 80 H 220" stroke="var(--ink)" stroke-width="3" marker-end="url(#fa1)"/>${t(238, 86, "7", { s: 20, d: true, c: "var(--red)" })}${t(130, 140, "3 · 2 + 1 = 7", { s: 13 })}`),
    },
    {
      html: `<h3>Los monomios</h3><p>Un <b>monomio</b> es la expresión algebraica más sencilla: un número multiplicado por letras con exponentes naturales. Ejemplo: <b>−5x²y</b>.</p><ul><li><b>Coeficiente</b>: el número (−5).</li><li><b>Parte literal</b>: las letras con sus exponentes (x²y).</li><li><b>Grado</b>: la suma de los exponentes de las letras (2 + 1 = 3).</li></ul><p>Si no se ve el coeficiente, es 1: x³ = 1x³. Un número solo, como 7, es un monomio de grado 0.</p><p>Dos monomios son <b>semejantes</b> si tienen <mark>la misma parte literal</mark>: 3ab y −ab lo son; 3a²b y 3ab² no.</p>`,
      svg: svg("Monomio menos 5 x al cuadrado y: coeficiente menos 5, parte literal x cuadrado y, grado 3", `${t(130, 74, "−5 x²y", { s: 30, d: true })}<path d="M70 86 H 112" stroke="var(--red)" stroke-width="3"/><path d="M122 86 H 190" stroke="var(--pen)" stroke-width="3"/>${t(90, 108, "coeficiente", { c: "var(--red)", s: 11 })}${t(160, 108, "parte literal", { c: "var(--pen)", s: 11 })}${t(130, 146, "grado: 2 + 1 = 3", { c: "var(--leaf)", s: 13 })}`),
    },
    {
      html: `<h3>Sumar y restar monomios</h3><p>Solo se pueden sumar o restar monomios <b>semejantes</b>. Se suman o restan los <b>coeficientes</b> y se deja la <b>misma parte literal</b>.</p><ul><li>3x + 5x = 8x</li><li>7a² − 2a² = 5a²</li><li>4xy − xy + 2xy = 5xy</li></ul><p>Si no son semejantes, la suma se deja indicada: 3x + 2y no se puede juntar (igual que 3 manzanas + 2 peras no son 5 «manzaperas»).</p><p><b>Reducir</b> una expresión es agrupar los términos semejantes: 5x + 3 − 2x + 4 = <mark>3x + 7</mark>.</p>`,
      video: vb("algB2"),
    },
    {
      html: `<h3>Multiplicar monomios</h3><p>Para multiplicar monomios <b>no hace falta</b> que sean semejantes:</p><ol><li>Se multiplican los <b>coeficientes</b>.</li><li>Se multiplican las <b>partes literales</b>, sumando los exponentes de las letras iguales (como en las potencias).</li></ol><ul><li>3x · 4x = 12x²</li><li>2a · 5b = 10ab</li><li>(−2x²) · 3x³ = −6x⁵</li></ul><p>Y para multiplicar un número por un paréntesis se usa la <b>propiedad distributiva</b>: <mark>3(x + 2) = 3x + 6</mark>; −2(a − 4) = −2a + 8.</p>`,
    },
    {
      html: `<h3>Igualdades: identidades y ecuaciones</h3><p>Cuando dos expresiones se unen con el signo =, tenemos una <b>igualdad algebraica</b>. Hay dos tipos:</p><ul><li><b>Identidad</b>: se cumple para <b>cualquier</b> valor de las letras. 2(x + 1) = 2x + 2.</li><li><b>Ecuación</b>: solo se cumple para <b>algunos</b> valores. x + 3 = 10 solo es cierta si x = 7.</li></ul><p>Encontrar ese valor es <b>resolver</b> la ecuación, y lo verás en el tema siguiente. Por ahora puedes probar con números: ¿qué número multiplicado por 4 da 28? x = 7, porque 4 · 7 = 28.</p>`,
    },
    {
      html: `<h3>El álgebra para generalizar</h3><p>El álgebra sirve para describir <b>patrones</b>. Mira esta secuencia de figuras hechas con palillos:</p><p>1 cuadrado → 4 palillos; 2 cuadrados en fila → 7; 3 → 10; 4 → 13…</p><p>Cada cuadrado nuevo añade 3 palillos. Con n cuadrados harán falta <mark>3n + 1</mark> palillos. Comprobación: n = 4 → 3 · 4 + 1 = 13. ✔</p><p>Con la fórmula sabes cuántos palillos necesitas para 100 cuadrados sin dibujarlos: 3 · 100 + 1 = <b>301</b>. Así trabajan matemáticos, programadores y científicos: buscan la regla general.</p>`,
      svg: svg("Fila de cuadrados hechos con palillos: con n cuadrados hacen falta 3n más 1 palillos", `${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 44}" y="40" width="44" height="44" fill="none" stroke="var(--sun)" stroke-width="4"/>`).join("")}${t(118, 112, "4 cuadrados → 13 palillos", { s: 12 })}${t(130, 148, "n cuadrados → 3n + 1", { s: 15, d: true, c: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Iniciación al álgebra en un vistazo",
    svg: filas("Resumen: letras para números; traducir enunciados; valor numérico; monomio con coeficiente, parte literal y grado; sumar solo semejantes; multiplicar sumando exponentes", [["Variable", "letra que representa un número", "var(--pen)"], ["Traducir", "el doble de un número → 2x", "var(--inf)"], ["Valor numérico", "sustituir y operar", "var(--sun)"], ["Monomio", "coeficiente · parte literal · grado", "var(--leaf)"], ["+ y −", "solo semejantes", "var(--red)"], ["·", "coeficientes · y exponentes +", "var(--ink)"]], 210),
  },
  video: vg("algV"),
  quiz: mezcla([
    { q: "«El triple de un número» se escribe…", o: ["3x", "x³", "x + 3"], a: 0, e: "Multiplicar por 3." },
    { q: "«Un número menos 7»:", o: ["x − 7", "7 − x", "7x"], a: 0, e: "Al número se le quita 7." },
    { q: "Valor de 2x + 5 si x = 4:", o: ["13", "11", "24"], a: 0, e: "8 + 5." },
    { q: "Coeficiente de −x³:", o: ["−1", "3", "0"], a: 0, e: "−1 · x³." },
    { q: "Grado de 4a²b³:", o: ["5", "6", "4"], a: 0, e: "2 + 3." },
    { q: "¿Son semejantes 5xy y −2xy?", o: ["sí", "no", "solo si x = y"], a: 0, e: "Misma parte literal." },
    { q: "6a − 2a + a =", o: ["5a", "4a", "3a"], a: 0, e: "6 − 2 + 1." },
    { q: "3x · 2x² =", o: ["6x³", "5x³", "6x²"], a: 0, e: "Exponentes 1 + 2." },
    { q: "2(x − 5) =", o: ["2x − 10", "2x − 5", "x − 10"], a: 0, e: "Distributiva." },
    { q: "x + 2 = 9 es…", o: ["una ecuación", "una identidad", "un monomio"], a: 0, e: "Solo vale x = 7." },
  ]),
  examen: mezcla([
    { q: "Reduce: 4x + 3 − x − 5", o: ["3x − 2", "5x − 2", "3x + 8"], a: 0, e: "4x − x y 3 − 5." },
    { q: "Valor de x² − 3x para x = −2:", o: ["10", "−2", "−10"], a: 0, e: "4 + 6." },
    { q: "Dos números consecutivos que suman 25:", o: ["x + (x + 1) = 25", "2x = 25", "x + 1 = 25"], a: 0, e: "Uno y el siguiente." },
  ]),
  feynman: ["Para qué sirve usar letras en matemáticas", "Cómo se calcula el valor numérico", "Qué partes tiene un monomio", "Por qué 3x + 2y no se puede simplificar", "Diferencia entre identidad y ecuación"],
  mapa: mapa("INICIACIÓN AL ÁLGEBRA", "var(--eso)", [
    ["Lenguaje algebraico", "traducir enunciados", "var(--pen)"],
    ["Valor numérico", "sustituir y operar", "var(--sun)"],
    ["Monomios", "coeficiente · parte literal", "var(--leaf)"],
    ["Operaciones", "semejantes · distributiva", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Variable", "Letra que representa un número."],
    ["Valor numérico", "Resultado de sustituir las letras por números."],
    ["Monomio", "Número por letras: −5x²y."],
    ["Coeficiente", "La parte numérica del monomio."],
    ["Grado", "Suma de los exponentes de las letras."],
    ["Semejantes", "Misma parte literal."],
    ["Sumar monomios", "Solo semejantes: se suman los coeficientes."],
    ["Identidad", "Igualdad cierta para cualquier valor."],
  ],
  familias: ["Inventad fórmulas de la vida diaria: precio de n entradas, tiempo para recorrer n km…", "Jugad a «piensa un número»: multiplícalo por 2, súmale 10, divide entre 2 y resta el número. ¡Siempre sale 5! Buscad por qué con álgebra.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje algebraico, expresiones algebraicas, valor numérico, monomios y operaciones, patrones y generalización (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Secuencias de palillos o mosaicos para descubrir fórmulas.", "Trucos de adivinar números explicados con álgebra.", "Fichas de álgebra (cajas y unidades) para reducir expresiones."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): lenguaje algebraico", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Traduce: «la suma de un número y su doble es 21».", pasos: ["El número: x.", "Su doble: 2x.", "La suma es 21: x + 2x = 21."], resultado: "x + 2x = 21 (es decir, 3x = 21)." },
    { enunciado: "Reduce: 3(2x − 1) − 4x + 5.", pasos: ["Distributiva: 6x − 3.", "6x − 3 − 4x + 5.", "Agrupo: (6x − 4x) + (−3 + 5) = 2x + 2."], resultado: "2x + 2" },
    { enunciado: "Halla el valor numérico de a² − 2ab para a = 3 y b = −1.", pasos: ["Sustituyo: 3² − 2 · 3 · (−1).", "9 − (−6).", "= 9 + 6 = 15."], resultado: "15" },
  ],
  errores: [
    "Sumar monomios no semejantes: 2x + 3y no es 5xy.",
    "Escribir x³ cuando se pide «el triple de x» (es 3x).",
    "Olvidar multiplicar todos los términos del paréntesis: 3(x + 2) no es 3x + 2.",
    "Sumar los coeficientes al multiplicar: 2x · 3x no es 5x².",
    "Sustituir un negativo sin paréntesis: para x = −2, x² es 4, no −4.",
  ],
  ejercicios: [
    { q: "Traduce: la mitad de un número más 6.", sol: "x/2 + 6." },
    { q: "Traduce: el cuadrado de un número menos su triple.", sol: "x² − 3x." },
    { q: "Escribe la edad de Ana dentro de 5 años y hace 3 años si ahora tiene x años.", sol: "x + 5 y x − 3." },
    { q: "Calcula el valor numérico de 5x − 2 para x = 0, x = 3 y x = −1.", sol: "−2, 13 y −7." },
    { q: "Indica coeficiente, parte literal y grado de 7ab² y de −x.", sol: "7, ab², 3; −1, x, 1." },
    { q: "Reduce: 8a − 3a + 2b − a + b.", sol: "4a + 3b." },
    { q: "Multiplica: (−4x) · 5x² y 2ab · 3a.", sol: "−20x³ y 6a²b." },
    { q: "Aplica la distributiva y reduce: 5(x + 2) − 3x.", sol: "5x + 10 − 3x = 2x + 10." },
    { q: "¿Es una identidad o una ecuación? 3(x + 1) = 3x + 3; 2x + 1 = 9.", sol: "Identidad; ecuación (x = 4)." },
    { q: "En una fila de triángulos de palillos: 1 triángulo → 3, 2 → 5, 3 → 7. ¿Cuántos palillos para n? ¿Y para 50?", sol: "2n + 1; 101 palillos." },
  ],
};
