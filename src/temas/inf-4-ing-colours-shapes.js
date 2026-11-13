// Primeros pasos en inglés, Infantil 4 años: Colours and shapes. Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, forma, muestras, vocab, ic, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

// Fila de formas con su nombre en inglés y en español.
const formas = (label, items, titulo) => svg(label, `${titulo ? rot(130, 24, titulo, { color: G }) : ""}${items.map(([f, en, es, c], i) => { const w = 248 / items.length, x = 6 + w * (i + 0.5); const [l1, l2] = en.split(" "); return `${forma(f, x, 76, 44, c)}${l2 ? rot(x, 124, l1, { size: 16, color: c, w: 800 }) + rot(x, 143, l2, { size: 16, color: c, w: 800 }) : rot(x, 132, en, { size: 18, color: c, w: 800 })}${rot(x, l2 ? 164 : 152, es, { size: 11, color: G })}`; }).join("")}`);

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "Colours and shapes",
  minutos: 15,
  objetivos: ["Decir en inglés los colores: red, blue, yellow, green", "Nombrar formas en inglés: circle, square, triangle", "Juntar color y forma: a red circle"],
  claves: ["red", "blue", "yellow", "green", "circle", "square", "triangle"],
  pregunta: {
    texto: "¿De qué color es una fresa? ¿Lo sabes decir en inglés?",
    respuesta: "La fresa es roja: en inglés, <mark>red</mark> («red»). ¡Hoy aprendemos colores y formas en inglés!",
  },
  bloques: [
    {
      html: `<h3>Red and blue</h3><p>El rojo en inglés es <mark>red</mark> («red»), como una fresa o un tomate.</p><p>El azul es <mark>blue</mark> («blu»), como el cielo y el mar.</p><p>Señala algo rojo y di: <b>red!</b></p>`,
      svg: vocab("Red es rojo, como la manzana; blue es azul, como el pez", [["manzana", "red", "rojo", R], ["pez", "blue", "azul", A]], { titulo: "Colours" }),
    },
    {
      html: `<h3>Yellow and green</h3><p>El amarillo es <mark>yellow</mark> («iélou»), como el sol y el plátano.</p><p>El verde es <mark>green</mark> («grin»), como la hierba y la rana.</p><p>¿Llevas algo yellow o green hoy?</p>`,
      svg: vocab("Yellow es amarillo, como el plátano; green es verde, como la rana", [["platano", "yellow", "amarillo", M], ["rana", "green", "verde", V]], { titulo: "Colours" }),
    },
    {
      html: `<h3>Circle</h3><p>La forma redonda es un <mark>circle</mark> («sérkol»): el círculo.</p><p>Una pelota, el sol y una rueda tienen forma de circle.</p><p>Dibuja un circle en el aire con el dedo. ¡Da la vuelta entera!</p>`,
      svg: svg("Un círculo grande y al lado una pelota y un sol, que son redondos", `${forma("circulo", 75, 80, 80, A)}${ic("pelota", 165, 70, 1.3)}${ic("sol", 220, 70, 1.3)}${rot(75, 150, "circle", { size: 22, color: A, w: 800 })}${rot(75, 168, "círculo", { size: 12, color: G })}${rot(192, 130, "¡redondos!", { color: G })}`),
    },
    {
      html: `<h3>Square and triangle</h3><p>El cuadrado es <mark>square</mark> («skuéar»): cuatro lados iguales.</p><p>El triángulo es <mark>triangle</mark> («tráiangol»): tres lados y tres picos.</p><p>Cuenta los lados con el dedo: one, two, three…</p>`,
      svg: formas("Un cuadrado, square, y un triángulo, triangle", [["cuadrado", "square", "cuadrado", R], ["triangulo", "triangle", "triángulo", V]], "Shapes"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con colores y formas podemos <mark>describir</mark> las cosas en inglés.</p><p>Decimos primero el color y después la forma: <b>a red circle</b>, un círculo rojo. <b>A blue square</b>, un cuadrado azul.</p>`,
      svg: formas("Un círculo rojo, un cuadrado azul y un triángulo amarillo", [["circulo", "red circle", "círculo rojo", R], ["cuadrado", "blue square", "cuadrado azul", A], ["triangulo", "yellow triangle", "triángulo amarillo", M]], "Colour + shape"),
    },
    {
      html: `<h3>Juego: I spy colours</h3><p>Jugamos a <mark>I spy</mark> («ai spái»), el «Veo, veo» en inglés.</p><p>El adulto dice: <b>I spy something… green!</b></p><p>Tú buscas algo verde en la clase y lo señalas. ¡Muy bien!</p>`,
      svg: muestras("Cuatro círculos de colores para jugar a I spy: red, blue, yellow y green", [["", "red", "rojo", R], ["", "blue", "azul", A], ["", "yellow", "amarillo", M], ["", "green", "verde", V]], { titulo: "I spy something…" }),
    },
  ],
  figura: {
    titulo: "Colours and shapes",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Arriba cuatro colores: red, blue, yellow y green. Abajo tres formas: circle, square y triangle">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["red", R], ["blue", A], ["yellow", M], ["green", V]].map(([t, c], i) => `<circle cx="${110 + i * 140}" cy="62" r="34" fill="${c}"/><text x="${110 + i * 140}" y="122" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">${t}</text>`).join("")}
      ${[["circulo", "circle", R], ["cuadrado", "square", A], ["triangulo", "triangle", V]].map(([f, t, c], i) => `${forma(f, 160 + i * 160, 196, 60, c)}<text x="${160 + i * 160}" y="272" text-anchor="middle" font-size="22" font-weight="800" fill="${c}">${t}</text>`).join("")}
    </svg>`,
  },
  video: { ...vid("AlB6ZNqykXU", "I Like To Draw | Colors and Shapes Song", "Super Simple Songs", 56368291), busqueda: "colors and shapes song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿De qué color es la hierba en inglés?", pasos: ["La hierba es verde.", "Verde en inglés es green («grin»)."], resultado: "green." },
    { enunciado: "Describe en inglés un círculo rojo.", pasos: ["Primero el color: red.", "Después la forma: circle.", "Juntos: a red circle."], resultado: "a red circle." },
  ],
  errores: [
    "Decir la forma antes que el color: en inglés va primero el color, a red circle.",
    "Confundir yellow (amarillo) con green (verde): yellow es como el sol.",
    "Pronunciar blue como se escribe: se dice «blu».",
  ],
  ejercicios: [
    { q: "Busca en casa algo red, algo blue, algo yellow y algo green.", sol: "Para la familia: que lo señale y diga el color en inglés." },
    { q: "Dibuja un circle, un square y un triangle.", sol: "Para la familia: nombradlos en inglés mientras dibuja." },
    { q: "Ordena tus bloques por colores diciendo su nombre en inglés.", sol: "Red, blue, yellow, green." },
    { q: "Recorta un triangle de papel y cuenta sus lados.", sol: "Tres lados: one, two, three." },
    { q: "Juega a I spy con un adulto.", sol: "Para la familia: «I spy something… blue!»." },
    { q: "Canta la canción del vídeo y señala los colores.", sol: "Para la familia: parad el vídeo y preguntad «What colour is it?»." },
  ],
  quiz: [
    { q: "Red es…", o: ["Rojo", "Azul", "Verde"], a: 0, e: "Red: rojo." },
    { q: "¿Cómo se dice «verde»?", o: ["Yellow", "Green", "Blue"], a: 1, e: "Green: «grin»." },
    { q: "El sol es…", o: ["Yellow", "Blue", "Green"], a: 0, e: "Amarillo: yellow." },
    { q: "Una pelota tiene forma de…", o: ["Circle", "Square", "Triangle"], a: 0, e: "Redonda: circle." },
    { q: "La forma con tres picos es…", o: ["Square", "Triangle", "Circle"], a: 1, e: "Triangle: tres lados." },
    { q: "A blue square es un cuadrado…", o: ["Azul", "Rojo", "Amarillo"], a: 0, e: "Blue: azul." },
  ],
  examen: [
    { q: "Blue es…", o: ["Azul", "Amarillo", "Rojo"], a: 0, e: "Blue: azul, como el mar." },
    { q: "Square es un…", o: ["Cuadrado", "Círculo", "Triángulo"], a: 0, e: "Cuatro lados iguales." },
    { q: "La rana es…", o: ["Green", "Red", "Yellow"], a: 0, e: "Verde: green." },
  ],
  feynman: ["Di cuatro colores en inglés", "Nombra tres formas en inglés"],
  mapa: mapa("COLOURS AND SHAPES", "var(--inf)", [
    ["red · blue", "rojo · azul", R],
    ["yellow · green", "amarillo · verde", M],
    ["circle", "círculo", A],
    ["square · triangle", "cuadrado · triángulo", V],
  ], 220),
  tarjetas: [
    ["Rojo", "Red"],
    ["Azul", "Blue"],
    ["Amarillo", "Yellow"],
    ["Verde", "Green"],
    ["Círculo", "Circle"],
    ["Triángulo", "Triangle"],
  ],
  familias: [
    "Al vestirle, preguntad en inglés: «Red or blue?».",
    "Buscad formas por la calle: señales circle, ventanas square, tejados triangle.",
    "Jugad a I spy en el coche o en el parque.",
    "Mezclad las dos lenguas sin miedo: «Pásame el bloque red».",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la lengua extranjera, vocabulario de colores y formas básicas, comprensión oral con apoyo visual y respuesta física", ["Juego de I spy con objetos del aula.", "Bolsa misteriosa de formas: tocar y nombrar en inglés.", "Canción de colores con tarjetas que se levantan."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
