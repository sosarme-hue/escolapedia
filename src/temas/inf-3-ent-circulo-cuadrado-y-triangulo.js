// Infantil 3 años · Descubrimiento y exploración del entorno: Círculo, cuadrado y triángulo. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)";

// Forma grande con su nombre.
const forma = (label, d, nombre, c, cosas) => escena(label, `${ic(d, 70, 88, 2.6)}${t(70, 160, nombre, 22, c, 110)}${cosas}`, "");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Círculo, cuadrado y triángulo",
  minutos: 10,
  objetivos: ["Reconocer el círculo, el cuadrado y el triángulo", "Encontrar estas formas en cosas de casa y de la calle", "Construir dibujos con formas"],
  claves: ["círculo", "cuadrado", "triángulo", "forma", "lados"],
  pregunta: {
    texto: "Mira un plato y una ventana. ¿Tienen la misma forma?",
    respuesta: "No. El plato es <mark>redondo</mark>, como un círculo. La ventana tiene esquinas: es un <mark>cuadrado</mark>.",
  },
  bloques: [
    {
      html: `<h3>Las formas</h3><p>Las cosas tienen <mark>formas</mark>. Hoy conocemos tres: el <b>círculo</b>, el <b>cuadrado</b> y el <b>triángulo</b>.</p><p>Repasa cada forma con el dedo, despacio. ¿Cuál tiene picos? ¿Cuál es redonda?</p>`,
      svg: dibujos("Tres formas: círculo, cuadrado y triángulo", [["circulo", "círculo", R], ["cuadrado", "cuadrado", A], ["triangulo", "triángulo", V]], { titulo: "Tres formas" }),
      video: vid("CC_SXuBXu_U", "Figuras geométricas para niños en preescolar", "Mundo Kuku", 10120030),
    },
    {
      html: `<h3>El círculo</h3><p>El <mark>círculo</mark> es redondo y no tiene picos. ¡Rueda!</p><p>Son círculos la rueda, la pelota vista de frente, el sol y un plato.</p><p>Dibuja un círculo en el aire con el dedo.</p>`,
      svg: forma("Un círculo y cosas redondas: el sol y una rueda", "circulo", "círculo", R, `${ic("sol", 170, 64, 1.6)}${ic("rueda", 214, 128, 1.4)}${ic("pelota", 156, 132, 1.2)}`),
    },
    {
      html: `<h3>El cuadrado</h3><p>El <mark>cuadrado</mark> tiene cuatro lados iguales y cuatro picos, que se llaman esquinas.</p><p>Son cuadrados una ventana, una servilleta doblada y muchos bloques de construcción.</p><p>¡Cuenta sus esquinas!</p>`,
      svg: forma("Un cuadrado y cosas cuadradas: una ventana y un bloque", "cuadrado", "cuadrado", A, `${ic("ventana", 160, 70, 1.5)}${ic("juguete", 210, 128, 1.4)}`),
    },
    {
      html: `<h3>El triángulo</h3><p>El <mark>triángulo</mark> tiene tres lados y tres picos.</p><p>Tienen forma de triángulo el tejado de una casa, un trozo de pizza y la vela de un barco.</p><p>Haz un triángulo juntando los dedos.</p>`,
      svg: forma("Un triángulo y cosas con forma de triángulo: un tejado y un barco", "triangulo", "triángulo", V, `${ic("casa", 168, 66, 1.6)}${ic("barco", 210, 132, 1.4)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las formas están en <mark>todas partes</mark>. Las ruedas son círculos para poder rodar.</p><p>Los bloques cuadrados encajan para construir torres. Y las señales de tráfico tienen formas para avisarnos.</p>`,
      svg: lista("Las formas sirven: las ruedas ruedan, los cuadrados encajan, las señales avisan", [["Círculo: rueda", R], ["Cuadrado: encaja", A], ["Triángulo: avisa", V]], { titulo: "Las formas sirven" }),
    },
    {
      html: `<h3>Jugamos a construir</h3><p>Recorta un cuadrado, un triángulo y dos círculos de papel.</p><p>Pon el triángulo encima del cuadrado: ¡una <mark>casa</mark>! Ahora un cuadrado y dos círculos debajo: ¡un coche! ¿Qué más puedes inventar?</p>`,
      svg: escena("Una casa hecha con un cuadrado y un triángulo, y un coche con un rectángulo y dos círculos", `<path d="M30 92 L76 52 L122 92z" fill="var(--leaf)"/><rect x="40" y="92" width="72" height="56" fill="var(--pen)"/>
        <rect x="150" y="96" width="86" height="40" rx="4" fill="var(--pen)"/><rect x="166" y="76" width="46" height="22" rx="3" fill="var(--sun)"/><circle cx="170" cy="140" r="14" fill="var(--red)"/><circle cx="216" cy="140" r="14" fill="var(--red)"/>
        ${t(76, 172, "casa", 18, V, 90)}${t(193, 172, "coche", 18, R, 90)}`, "Con formas construyo"),
    },
  ],
  figura: {
    titulo: "Círculo, cuadrado y triángulo",
    svg: mural("Tres formas: el círculo es redondo, el cuadrado tiene cuatro esquinas y el triángulo tres picos", [["circulo", "círculo", "redondo, sin picos", R], ["cuadrado", "cuadrado", "cuatro esquinas", A], ["triangulo", "triángulo", "tres picos", V]], "Las formas"),
  },
  video: { ...vid("sDYrHwKcVCA", "Formas por todos lados", "Pinkfong en español", 26368133), busqueda: "figuras geométricas niños canción" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué forma tiene una galleta redonda?",
      pasos: ["La tocamos: no tiene picos.", "Es redonda, como el sol."],
      resultado: "es un círculo." },
    { enunciado: "Contamos los picos del triángulo.",
      pasos: ["Tocamos un pico: uno.", "Otro: dos. Y el último: tres."],
      resultado: "el triángulo tiene tres picos." },
  ],
  errores: [
    "Usar solo dibujos: tocar formas de madera o cartón ayuda mucho más.",
    "Pensar que un triángulo «del revés» ya no es triángulo: giradlo y sigue siéndolo.",
    "Exigir dibujarlas bien: a los 3 años basta con reconocerlas y nombrarlas.",
  ],
  ejercicios: [
    { q: "Busca en casa algo redondo como un círculo.", sol: "Para la familia: platos, relojes, tapas, monedas…" },
    { q: "Busca algo cuadrado.", sol: "Para la familia: servilletas, baldosas, cojines, bloques…" },
    { q: "Haz un triángulo con tres palitos o lápices.", sol: "Para la familia: contad juntos los tres lados." },
    { q: "Repasa con el dedo un círculo dibujado en grande.", sol: "Para la familia: después, con cera, sin preocuparse por salirse." },
    { q: "Construye una casa con un cuadrado y un triángulo de papel.", sol: "Para la familia: pegadlos en una cartulina." },
    { q: "Estampa formas con tapones, esponjas y pintura.", sol: "Para la familia: nombrad cada forma al estampar." },
  ],
  quiz: [
    { q: "¿Qué forma es redonda?", o: ["el círculo", "el cuadrado", "el triángulo"], a: 0, e: "El círculo." },
    { q: "¿Cuántos picos tiene el triángulo?", o: ["tres", "cuatro", "ninguno"], a: 0, e: "Tres." },
    { q: "Una rueda es un…", o: ["círculo", "triángulo", "cuadrado"], a: 0, e: "Círculo." },
    { q: "El tejado de la casa parece un…", o: ["triángulo", "círculo", "huevo"], a: 0, e: "Triángulo." },
    { q: "¿Qué forma tiene cuatro esquinas?", o: ["el cuadrado", "el círculo", "el triángulo"], a: 0, e: "El cuadrado." },
    { q: "¿Qué forma rueda?", o: ["el círculo", "el cuadrado", "el triángulo"], a: 0, e: "El círculo rueda." },
  ],
  examen: [
    { q: "El sol se dibuja como un…", o: ["círculo", "cuadrado", "triángulo"], a: 0, e: "Círculo." },
    { q: "Una ventana suele ser un…", o: ["cuadrado", "círculo", "triángulo"], a: 0, e: "Cuadrado." },
    { q: "Un trozo de pizza parece un…", o: ["triángulo", "círculo", "cuadrado"], a: 0, e: "Triángulo." },
  ],
  feynman: ["Cómo es el círculo", "Cómo es el cuadrado", "Cómo es el triángulo"],
  mapa: mapa("LAS FORMAS", "var(--pri)", [
    ["Círculo", "redondo: rueda, sol", R],
    ["Cuadrado", "4 esquinas: ventana", A],
    ["Triángulo", "3 picos: tejado", V],
    ["Construyo", "casa, coche…", N],
  ], 220),
  tarjetas: [
    ["¿Qué forma es redonda?", "El círculo"],
    ["¿Cuántas esquinas tiene el cuadrado?", "Cuatro"],
    ["¿Cuántos picos tiene el triángulo?", "Tres"],
    ["Una rueda es un…", "Círculo"],
    ["El tejado es un…", "Triángulo"],
    ["Una ventana es un…", "Cuadrado"],
  ],
  familias: [
    "Buscad formas en los paseos: señales, ventanas, ruedas, tejados.",
    "Jugad con encajables o con un juego de formas de madera.",
    "Cortad sándwiches o galletas en círculos, cuadrados y triángulos.",
    "Dibujad formas grandes en el suelo con tiza y saltad dentro de la que digáis.",
  ],
  profesores: PROF("Diálogo corporal con el entorno y exploración de objetos: formas planas básicas (círculo, cuadrado, triángulo), reconocimiento en el entorno y composición de figuras", [
    "Bolsa misteriosa: tocar una forma sin mirar y adivinarla.",
    "Formas grandes en el suelo del patio para juegos de saltar dentro.",
    "Collage de casas y coches con formas de gomaeva.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
