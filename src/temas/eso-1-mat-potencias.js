// Matemáticas 1º ESO: potencias y raíces. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, rejilla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces",
  minutos: 50,
  objetivos: ["Expresar un producto de factores iguales como potencia y calcularla", "Usar las potencias de base 10 para escribir números grandes", "Aplicar las propiedades de las potencias de la misma base o el mismo exponente", "Calcular raíces cuadradas exactas y enteras"],
  claves: ["potencia", "base", "exponente", "cuadrado", "cubo", "raíz cuadrada"],
  pregunta: {
    texto: "Si cada persona reenvía un mensaje a 3 amigos, y estos a otros 3, y así sucesivamente, ¿cuántas personas lo reciben en el sexto reenvío?",
    respuesta: "En cada paso se multiplica por 3: 3 · 3 · 3 · 3 · 3 · 3. Eso se escribe <b>3⁶</b>, una <b>potencia</b>, y vale <mark>729 personas</mark>. Las potencias crecen muy deprisa: en el décimo reenvío serían 59 049.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una potencia?</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un <mark>producto de factores iguales</mark>:</p><p style="text-align:center"><b>aⁿ = a · a · a · … · a</b> (n veces)</p><ul><li>La <b>base</b> (a) es el factor que se repite.</li><li>El <b>exponente</b> (n) indica cuántas veces se repite.</li></ul><p>Ejemplo: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Se lee «dos elevado a cinco». Cuidado: 2⁵ <b>no</b> es 2 · 5 = 10.</p><p>Casos especiales: a¹ = a (un solo factor) y, por convenio, <b>a⁰ = 1</b> si a no es 0.</p>`,
      svg: svg("Potencia dos elevado a cinco: la base 2 y el exponente 5, igual a cinco doses multiplicados que dan 32", `${t(70, 76, "2", { s: 44, d: true, c: "var(--pen)" })}${t(96, 48, "5", { s: 24, d: true, c: "var(--red)" })}${t(60, 112, "base", { c: "var(--pen)", s: 12 })}${t(110, 30, "exponente", { c: "var(--red)", s: 11, a: "start" })}${t(170, 76, "= 32", { s: 26, d: true })}${t(130, 146, "2 · 2 · 2 · 2 · 2", { s: 15 })}${t(130, 168, "cinco factores iguales", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Cuadrados y cubos</h3><p>Las potencias de exponente 2 y 3 tienen nombre propio porque nacen de la geometría:</p><ul><li><b>a²</b> se lee «a <b>al cuadrado</b>»: es el área de un cuadrado de lado a. 4² = 16.</li><li><b>a³</b> se lee «a <b>al cubo</b>»: es el volumen de un cubo de arista a. 3³ = 27.</li></ul>${tabla(["n", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], [["n²", "1", "4", "9", "16", "25", "36", "49", "64", "81", "100"], ["n³", "1", "8", "27", "64", "125", "216", "343", "512", "729", "1 000"]])}<p>Los números de la fila n² se llaman <b>cuadrados perfectos</b>. Conviene saberlos de memoria hasta 15² = 225.</p>`,
      svg: svg("Un cuadrado de 4 por 4 casillas tiene 16 casillas: cuatro al cuadrado es dieciséis", `<rect x="40" y="30" width="112" height="112" fill="var(--leaf)" fill-opacity=".25"/>${rejilla(40, 30, 4, 4, 28, "var(--leaf)")}${t(96, 160, "lado 4", { c: "var(--leaf)", s: 12 })}${t(205, 80, "4² = 16", { s: 18, d: true })}${t(205, 104, "casillas", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Potencias de base 10</h3><p>Las potencias de 10 son muy fáciles: el exponente dice <mark>cuántos ceros</mark> lleva el resultado. 10³ = 1 000; 10⁶ = 1 000 000 (un millón).</p><p>Sirven para escribir de forma corta números enormes. Cualquier número se puede <b>descomponer</b> con potencias de 10:</p><p style="text-align:center">7 305 = 7 · 10³ + 3 · 10² + 5 · 10⁰</p><p>Y los números muy grandes se escriben como un número por una potencia de 10: la distancia de la Tierra al Sol es de unos 150 000 000 km = <b>15 · 10⁷ km</b>. Así lo hacen científicos y calculadoras.</p>`,
    },
    {
      html: `<h3>Producto y cociente de potencias de la misma base</h3><ul><li><b>Producto</b>: se deja la base y se <b>suman</b> los exponentes. <mark>aᵐ · aⁿ = aᵐ⁺ⁿ</mark>. 2³ · 2⁴ = 2⁷, porque son 3 + 4 = 7 doses multiplicados.</li><li><b>Cociente</b>: se deja la base y se <b>restan</b> los exponentes. <mark>aᵐ : aⁿ = aᵐ⁻ⁿ</mark> (con m ≥ n). 5⁶ : 5² = 5⁴, porque al simplificar se van dos cincos.</li></ul><p>Si m = n, el cociente es a⁰ = 1, igual que cualquier número dividido entre sí mismo. Así se entiende por qué a⁰ vale 1.</p>`,
      video: vb("potB"),
    },
    {
      html: `<h3>Potencia de una potencia y mismo exponente</h3><ul><li><b>Potencia de una potencia</b>: se <b>multiplican</b> los exponentes. (aᵐ)ⁿ = aᵐ·ⁿ. (3²)⁴ = 3⁸.</li><li><b>Producto con el mismo exponente</b>: aⁿ · bⁿ = (a · b)ⁿ. 2³ · 5³ = 10³ = 1 000. ¡Muy útil para calcular mentalmente!</li><li><b>Cociente con el mismo exponente</b>: aⁿ : bⁿ = (a : b)ⁿ. 12² : 4² = 3² = 9.</li></ul><p><b>No hay regla</b> para sumar potencias: 2³ + 2² no es 2⁵. Hay que calcular cada una: 8 + 4 = 12.</p>`,
      svg: filas("Propiedades de las potencias: producto suma exponentes, cociente los resta, potencia de potencia los multiplica", [["aᵐ · aⁿ", "aᵐ⁺ⁿ", "var(--pen)"], ["aᵐ : aⁿ", "aᵐ⁻ⁿ", "var(--leaf)"], ["(aᵐ)ⁿ", "aᵐ·ⁿ", "var(--sun)"], ["aⁿ · bⁿ", "(a · b)ⁿ", "var(--red)"]], 220),
    },
    {
      html: `<h3>La raíz cuadrada</h3><p>La <b>raíz cuadrada</b> es la operación <b>inversa</b> de elevar al cuadrado. La raíz cuadrada de un número a es otro número b que, al cuadrado, da a:</p><p style="text-align:center"><b>√a = b</b> porque <b>b² = a</b></p><p>√49 = 7 porque 7² = 49. Geométricamente, <mark>√a es el lado de un cuadrado de área a</mark>: si una habitación cuadrada mide 25 m², su lado mide √25 = 5 m.</p><p>El símbolo √ se llama <b>radical</b> y el número de dentro, <b>radicando</b>.</p>`,
      svg: svg("Un cuadrado de área 25 metros cuadrados tiene 5 metros de lado: raíz de 25 es 5", `<rect x="50" y="30" width="110" height="110" rx="4" fill="var(--pen)" fill-opacity=".16" stroke="var(--pen)" stroke-width="2.5"/>${t(105, 92, "25 m²", { s: 18, d: true, c: "var(--pen)" })}${t(105, 160, "lado = ?", { c: "var(--red)", s: 12 })}${t(210, 80, "√25 = 5", { s: 17, d: true })}${t(210, 104, "5² = 25", { c: "var(--muted)", s: 12 })}`),
      video: vb("potB2"),
    },
    {
      html: `<h3>Raíces exactas y enteras</h3><p>Si el radicando es un <b>cuadrado perfecto</b>, la raíz es <b>exacta</b>: √81 = 9.</p><p>Si no lo es, calculamos la <b>raíz entera</b>: el mayor número cuyo cuadrado no pasa del radicando. El <b>resto</b> es lo que sobra.</p><p>Ejemplo: √40. Como 6² = 36 y 7² = 49, la raíz entera es <b>6</b> y el resto es 40 − 36 = <b>4</b>. Se cumple: <mark>radicando = raíz² + resto</mark>.</p><p>Para números grandes, compara con cuadrados conocidos: √300 está entre 17 (289) y 18 (324), así que su raíz entera es 17 y el resto, 11.</p>`,
    },
    {
      html: `<h3>Potencias y raíces en la jerarquía</h3><p>En las operaciones combinadas, las potencias y raíces se hacen <b>después de los paréntesis</b> y <b>antes</b> de multiplicaciones, divisiones, sumas y restas.</p><p>Ejemplo: 3 + 2 · 4² − √36 → potencias y raíces: 4² = 16 y √36 = 6 → producto: 2 · 16 = 32 → 3 + 32 − 6 = <b>29</b>.</p><p>Fíjate en la diferencia: 2 · 4² = 2 · 16 = 32, pero (2 · 4)² = 8² = 64. El paréntesis cambia lo que se eleva.</p>`,
    },
  ],
  figura: {
    titulo: "Potencias y raíces en un vistazo",
    svg: filas("Resumen: potencia como producto de factores iguales; a elevado a cero es 1; base 10 da ceros; propiedades; raíz cuadrada inversa del cuadrado; raíz entera con resto", [["Potencia", "aⁿ = a · a · … · a", "var(--pen)"], ["Casos", "a¹ = a · a⁰ = 1", "var(--inf)"], ["Base 10", "10ⁿ = 1 y n ceros", "var(--sun)"], ["Misma base", "· suma, : resta exponentes", "var(--leaf)"], ["√a = b", "porque b² = a", "var(--red)"], ["Raíz entera", "radicando = raíz² + resto", "var(--ink)"]], 210),
  },
  video: vg("potV"),
  quiz: mezcla([
    { q: "3⁴ =", o: ["81", "12", "64"], a: 0, e: "3 · 3 · 3 · 3." },
    { q: "En 7², la base es…", o: ["7", "2", "49"], a: 0, e: "El factor que se repite." },
    { q: "10⁵ tiene… ceros", o: ["5", "10", "4"], a: 0, e: "100 000." },
    { q: "5⁰ =", o: ["1", "0", "5"], a: 0, e: "Cualquier número (no 0) elevado a 0." },
    { q: "2³ · 2⁴ =", o: ["2⁷", "2¹²", "4⁷"], a: 0, e: "Se suman los exponentes." },
    { q: "6⁸ : 6³ =", o: ["6⁵", "6¹¹", "1⁵"], a: 0, e: "Se restan." },
    { q: "(4²)³ =", o: ["4⁶", "4⁵", "12²"], a: 0, e: "Se multiplican." },
    { q: "√64 =", o: ["8", "32", "6"], a: 0, e: "8² = 64." },
    { q: "La raíz entera de 30 es…", o: ["5", "6", "15"], a: 0, e: "5² = 25 ≤ 30 < 36." },
    { q: "¿Cuál es cuadrado perfecto?", o: ["144", "150", "200"], a: 0, e: "12²." },
  ]),
  examen: mezcla([
    { q: "2 + 3 · 2³ =", o: ["26", "40", "218"], a: 0, e: "2 + 3 · 8." },
    { q: "2⁵ · 5⁵ =", o: ["100 000", "10²⁵", "7¹⁰"], a: 0, e: "(2 · 5)⁵ = 10⁵." },
    { q: "Resto de la raíz entera de 70:", o: ["6", "8", "0"], a: 0, e: "8² = 64; 70 − 64." },
  ]),
  feynman: ["Qué significan la base y el exponente", "Por qué a⁰ = 1", "Por qué se suman los exponentes al multiplicar", "Qué relación hay entre el cuadrado y la raíz cuadrada", "Cómo se calcula una raíz entera y su resto"],
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--eso)", [
    ["Potencia", "base y exponente", "var(--pen)"],
    ["Base 10", "números grandes", "var(--sun)"],
    ["Propiedades", "misma base · mismo exp.", "var(--leaf)"],
    ["Raíz cuadrada", "exacta · entera + resto", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["a⁰", "Vale 1 (si a ≠ 0)."],
    ["10ⁿ", "Un 1 seguido de n ceros."],
    ["aᵐ · aⁿ", "aᵐ⁺ⁿ"],
    ["aᵐ : aⁿ", "aᵐ⁻ⁿ"],
    ["(aᵐ)ⁿ", "aᵐ·ⁿ"],
    ["√a", "Número que al cuadrado da a."],
    ["Raíz entera", "Radicando = raíz² + resto."],
  ],
  familias: ["Calculad cuántas baldosas cuadradas caben en una habitación: ¿es un cuadrado perfecto?", "Jugad a recitar los cuadrados del 1 al 15 por turnos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Potencias de exponente natural, propiedades, potencias de base 10 y raíz cuadrada exacta y entera (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Construir cuadrados y cubos con cubitos encajables.", "Cadenas de mensajes para ver el crecimiento exponencial.", "Estimar raíces con cuadrados de papel cuadriculado."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): potencias y raíces", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Expresa como una sola potencia: (5³ · 5⁴) : 5².", pasos: ["Producto de la misma base: 5³ · 5⁴ = 5⁷.", "Cociente: 5⁷ : 5² = 5⁵.", "Si se quiere el valor: 5⁵ = 3 125."], resultado: "5⁵ = 3 125" },
    { enunciado: "Calcula la raíz entera y el resto de √115.", pasos: ["10² = 100 y 11² = 121.", "121 se pasa, así que la raíz entera es 10.", "Resto: 115 − 100 = 15."], resultado: "Raíz entera 10, resto 15." },
    { enunciado: "Calcula: (12 − 2 · 3)² : 4 + √25.", pasos: ["Paréntesis: 12 − 6 = 6.", "Potencia y raíz: 6² = 36 y √25 = 5.", "36 : 4 + 5 = 9 + 5 = 14."], resultado: "14" },
  ],
  errores: [
    "Multiplicar la base por el exponente: 3² no es 6.",
    "Sumar los exponentes cuando las bases son distintas: 2³ · 3² no es 6⁵.",
    "Pensar que a⁰ = 0.",
    "Sumar potencias sumando exponentes: 2² + 2³ no es 2⁵.",
    "Confundir 2 · 3² (= 18) con (2 · 3)² (= 36).",
  ],
  ejercicios: [
    { q: "Escribe como potencia y calcula: 4 · 4 · 4.", sol: "4³ = 64." },
    { q: "Calcula: 2⁶, 3³, 1⁹ y 0⁴.", sol: "64, 27, 1 y 0." },
    { q: "Escribe con potencias de 10: 8 000 000 y 45 000.", sol: "8 · 10⁶ y 45 · 10³." },
    { q: "Reduce a una potencia: 7² · 7 · 7⁵.", sol: "7⁸ (el 7 suelto es 7¹)." },
    { q: "Reduce a una potencia: (3⁴)² : 3⁵.", sol: "3⁸ : 3⁵ = 3³ = 27." },
    { q: "Calcula de cabeza: 4³ · 25³.", sol: "(4 · 25)³ = 100³ = 1 000 000." },
    { q: "Calcula √121, √169 y √400.", sol: "11, 13 y 20." },
    { q: "Halla la raíz entera y el resto de √90.", sol: "9² = 81 ≤ 90 < 100: raíz 9, resto 9." },
    { q: "Un jardín cuadrado tiene 196 m². ¿Cuántos metros de valla hacen falta para rodearlo?", sol: "Lado √196 = 14 m; perímetro 4 · 14 = 56 m." },
    { q: "Calcula: 5 · 2³ − √49 + 10⁰.", sol: "5 · 8 − 7 + 1 = 34." },
  ],
};
