// Infantil 5 años · Primeros pasos en inglés: Numbers 1 to 10. Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, ic, nino, vocab, charla, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

const NUM = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const COL = [R, A, V, N, M, R, A, V, N, M];
// Fila de números con su palabra en inglés.
const fila = (desde, hasta, titulo) => svg(`Números del ${desde} al ${hasta} en inglés`, `${rot(130, 24, titulo, { color: "var(--muted)", size: 15 })}${NUM.slice(desde - 1, hasta).map((w, i) => { const x = 30 + i * 50; return `<circle cx="${x}" cy="82" r="21" fill="${COL[desde - 1 + i]}"/>${big(x, 92, desde + i, "#fff", 26)}${rot(x, 132, w, { color: COL[desde - 1 + i], size: 15 })}`; }).join("")}`);

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "Numbers 1 to 10",
  objetivos: ["Contar del 1 al 10 en inglés", "Reconocer los números en inglés al oírlos", "Preguntar y responder How many?"],
  claves: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "How many?"],
  pregunta: {
    texto: "Enseña tus dos manos. ¿Cuántos dedos hay? ¿Sabes contarlos en inglés?",
    respuesta: "Hay diez dedos. En inglés contamos: <mark>one, two, three, four, five, six, seven, eight, nine, ten</mark>. ¡<b>Ten</b> es diez!",
  },
  bloques: [
    {
      html: `<h3>One to five</h3><p>Contamos con una mano: <mark>one, two, three, four, five</mark>.</p><p>Uno, dos, tres, cuatro, cinco.</p><p>Levanta un dedo con cada número.</p><p>Cuenta despacio.</p>`,
      svg: fila(1, 5, "One to five"),
    },
    {
      html: `<h3>Six to ten</h3><p>Seguimos con la otra mano: <mark>six, seven, eight, nine, ten</mark>.</p><p>Seis, siete, ocho, nueve, diez.</p><p>¡Ya tienes las dos manos abiertas!</p><p>Cuenta todos los dedos.</p>`,
      svg: fila(6, 10, "Six to ten"),
    },
    {
      html: `<h3>How many?</h3><p>Para preguntar «¿cuántos?» decimos <mark>How many?</mark></p><p>Contamos y respondemos con el número.</p><p>«How many apples?» — «<b>Three!</b>»</p><p>Prueba con coches o con lápices. ¡Cuenta en inglés!</p>`,
      svg: vocab("Tres manzanas: three apples", [["manzana", "three apples", "tres manzanas", R, 3]], { titulo: "How many apples?" }),
    },
    {
      html: `<h3>Cuántos años tengo</h3><p>Para decir tu edad dices <mark>I'm five</mark>: tengo cinco años.</p><p>La pregunta es <b>How old are you?</b></p><p>¡Enseña cinco dedos mientras lo dices!</p><p>¿Cuántos años tienes tú?</p>`,
      svg: charla("Diálogo: How old are you? I'm five!", [["nina", "How old are you?", A], ["nino", "I'm five!", R]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los números en inglés sirven para <mark>contar</mark> en juegos, canciones y en el escondite.</p><p>¡Y para la cuenta atrás de un cohete: <b>ten, nine, eight…</b>!</p>`,
      svg: svg("Cuenta atrás de un cohete en inglés", `<g transform="translate(200 100)"><path d="M0 -60 Q22 -36 18 20 H-18 Q-22 -36 0 -60z" fill="var(--card)" stroke="${K}" stroke-width="2.5"/><circle cy="-22" r="8" fill="${W}"/><path d="M-18 4 L-32 26 H-18z M18 4 L32 26 H18z" fill="${R}"/><path d="M-10 22 Q0 52 10 22z" fill="${M}"/></g>${big(80, 70, "3, 2, 1…", A, 30)}${big(80, 120, "Go!", R, 34)}`),
    },
    {
      html: `<h3>Juego: saltos en inglés</h3><p>El adulto dice un número en inglés: <mark>four!</mark></p><p>Tú das <b>cuatro saltos</b> contando en voz alta.</p><p>Luego tú dices el número y el adulto salta.</p><p>¡Muy divertido!</p>`,
      svg: svg("Un niño salta y cuenta: one, two, three, four", `${nino(70, 156, { c: A, pose: "salta" })}${["one", "two", "three", "four"].map((w, i) => rot(150 + (i % 2) * 60, 50 + Math.floor(i / 2) * 50, w, { color: COL[i], size: 20 })).join("")}<path d="M20 158 H240" stroke="var(--line)" stroke-width="3"/>`),
    },
  ],
  figura: {
    titulo: "Numbers 1 to 10",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Los números del 1 al 10 con su nombre en inglés"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${NUM.map((w, i) => { const x = 72 + (i % 5) * 124, y = i < 5 ? 70 : 180; return `<circle cx="${x}" cy="${y}" r="30" fill="${COL[i]}"/>${big(x, y + 12, i + 1, "#fff", 34)}${rot(x, y + 56, w, { color: COL[i], size: 20 })}`; }).join("")}</svg>`,
  },
  video: { ...vid("o0IsBUaoTrQ", "123 Song: Learn Counting and Numbers, Count to 10", "Mega Fun Kids Songs & Nursery Rhymes", 68291683), busqueda: "numbers 1 to 10 song for kids" },
  ejemplos: [
    { enunciado: "How many cats? Hay 2 gatos.", pasos: ["Contamos en inglés: one, two.", "El último número es la respuesta."], resultado: "Two cats!" },
    { enunciado: "How old are you? Tienes 5 años.", pasos: ["Contamos con los dedos: one, two, three, four, five.", "Decimos: I'm five!"], resultado: "I'm five." },
  ],
  errores: [
    "Confundir two (dos) y ten (diez): two es pequeño, ten son las dos manos.",
    "Saltarse un número al contar: one, two, three… sin prisa.",
    "Decir «I have five» para la edad: se dice I'm five.",
  ],
  ejercicios: [
    { q: "Cuenta los escalones de casa en inglés.", sol: "Nota para la familia: contad juntos en voz alta, de uno en uno." },
    { q: "Cuenta tus dedos de one a ten.", sol: "One, two, three, four, five, six, seven, eight, nine, ten." },
    { q: "How many apples? Pon 4 manzanas y cuéntalas.", sol: "Four apples." },
    { q: "Da tantos saltos como el número que oyes: three.", sol: "Tres saltos." },
    { q: "Di tu edad en inglés.", sol: "I'm five." },
    { q: "Haz la cuenta atrás de un cohete: ten to one.", sol: "Ten, nine, eight, seven, six, five, four, three, two, one… Go!" },
  ],
  quiz: [
    { q: "One es…", o: ["1", "2", "10"], a: 0, e: "One = uno." },
    { q: "Five es…", o: ["4", "5", "9"], a: 1, e: "Five = cinco." },
    { q: "¿Cómo se dice 10?", o: ["two", "ten", "one"], a: 1, e: "Ten = diez." },
    { q: "How many? significa…", o: ["¿cuántos?", "¿cómo estás?", "¿dónde?"], a: 0, e: "Preguntamos la cantidad." },
    { q: "Three es…", o: ["3", "8", "6"], a: 0, e: "Three = tres." },
    { q: "Después de seven va…", o: ["six", "eight", "nine"], a: 1, e: "Seven, eight." },
  ],
  examen: [
    { q: "Six es…", o: ["6", "7", "16"], a: 0, e: "Six = seis." },
    { q: "Para decir «tengo cinco años»…", o: ["I'm five", "Five apples", "Hello five"], a: 0, e: "I'm five." },
    { q: "¿Cómo se dice 2?", o: ["ten", "two", "nine"], a: 1, e: "Two = dos." },
  ],
  feynman: ["Contar de one a ten", "Qué significa How many?", "Cómo digo mi edad en inglés"],
  mapa: mapa("NUMBERS", "var(--pri)", [
    ["1 a 5", "one, two, three, four, five", R],
    ["6 a 10", "six, seven, eight, nine, ten", A],
    ["How many?", "¿cuántos?", V],
    ["How old are you?", "I'm five!", N],
  ], 240),
  tarjetas: [
    ["1, 2, 3", "one, two, three"],
    ["4, 5, 6", "four, five, six"],
    ["7, 8", "seven, eight"],
    ["9, 10", "nine, ten"],
    ["How many?", "¿Cuántos?"],
    ["How old are you?", "I'm five!"],
  ],
  familias: [
    "Contad en inglés las cosas del día: escalones, cucharas, juguetes.",
    "Jugad al escondite contando hasta ten en inglés.",
    "Cantad juntos una canción de números en inglés.",
    "Preguntad How many? al poner la mesa: How many forks?",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: numerales del 1 al 10 en contextos de juego y rutina, pregunta How many? y edad", ["Conteo diario en inglés al pasar lista.", "Juegos motores: saltar o dar palmadas el número oído.", "Canciones y rimas de números con apoyo gestual."]),
});
