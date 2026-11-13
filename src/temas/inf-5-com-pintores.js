// Infantil 5 años · Comunicación y representación: pintores famosos (dibujos propios «al estilo de», no copias).
const { tema, mapa, svg, rot, big, ic, nino, estrella, luna, flor, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

const marcoCuadro = (inner) => `<rect x="40" y="18" width="180" height="128" rx="4" fill="#e7c08f" stroke="#a0703c" stroke-width="5"/><g>${inner}</g>`;
// Cielo de remolinos con estrellas, al estilo de Van Gogh.
const noche = () => marcoCuadro(`<rect x="48" y="26" width="164" height="112" fill="#1f3c88"/><g fill="none" stroke="#8fb3ff" stroke-width="3" stroke-linecap="round"><path d="M56 70 q20 -22 40 0 q20 22 40 0 q20 -22 40 0 q14 14 28 0"/><path d="M70 92 q14 -12 28 0 q14 12 28 0"/></g>${[[80, 46], [120, 40], [190, 52], [150, 98]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--sun)"/><circle cx="${x}" cy="${y}" r="11" fill="none" stroke="var(--sun)" stroke-width="2" opacity=".6"/>`).join("")}<path d="M196 42 a12 12 0 1 0 8 20 a9 9 0 1 1 -8 -20z" fill="var(--sun)"/><path d="M70 138 C74 110 78 90 84 72 C88 92 92 112 96 138z" fill="#173018"/><path d="M110 138 v-14 h40 v14z M150 138 v-10 h40 v10z" fill="#3b4f7a"/>`);
// Cara hecha de formas, al estilo de Picasso.
const caraFormas = () => marcoCuadro(`<rect x="48" y="26" width="164" height="112" fill="#f7d9a8"/><path d="M90 40 L170 40 L180 130 L84 130z" fill="#f08fb0"/><path d="M130 40 L170 40 L180 130 L130 130z" fill="var(--water)"/><circle cx="110" cy="74" r="10" fill="#fff" stroke="#2a2a2a" stroke-width="2"/><circle cx="110" cy="74" r="4" fill="#2a2a2a"/><path d="M146 66 l14 8 l-14 8z" fill="#fff" stroke="#2a2a2a" stroke-width="2"/><path d="M128 74 L118 100 L134 100" fill="none" stroke="#2a2a2a" stroke-width="3"/><path d="M108 114 q14 -6 30 4" stroke="var(--red)" stroke-width="5" fill="none" stroke-linecap="round"/>`);
// Formas, estrellas y colores puros, al estilo de Miró.
const miro = () => marcoCuadro(`<rect x="48" y="26" width="164" height="112" fill="#fbf6e9"/><circle cx="84" cy="62" r="16" fill="var(--red)"/><path d="M150 46 l6 12 l13 2 l-10 9 l3 13 l-12 -6 l-12 6 l3 -13 l-10 -9 l13 -2z" fill="none" stroke="#2a2a2a" stroke-width="2.5"/><path d="M60 118 Q100 88 140 118 T200 110" stroke="#2a2a2a" stroke-width="3" fill="none"/><circle cx="176" cy="96" r="10" fill="var(--sun)"/><circle cx="118" cy="104" r="6" fill="var(--leaf)"/><path d="M96 92 h14 v14 h-14z" fill="var(--pen)"/><path d="M188 60 a10 10 0 1 0 0 18 a7 7 0 1 1 0 -18z" fill="#2a2a2a"/>`);

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Pintores famosos",
  objetivos: ["Conocer a tres pintores famosos y algo de su forma de pintar", "Mirar un cuadro y decir qué ve y qué siente", "Pintar un cuadro inspirado en un pintor"],
  claves: ["pintor", "cuadro", "museo", "color", "forma"],
  pregunta: {
    texto: "Si pudieras pintar el cielo de la noche, ¿de qué colores lo pintarías?",
    respuesta: "¡Como tú quieras! Un pintor famoso, <mark>Van Gogh</mark>, lo pintó azul, con estrellas amarillas que <b>dan vueltas</b>.",
  },
  bloques: [
    {
      html: `<h3>Los pintores pintan cuadros</h3><p>Un <mark>pintor</mark> o una pintora cuenta cosas con colores.</p><p>Usa <b>pinceles</b>, una <b>paleta</b> con pinturas y un lienzo.</p><p>Lo que pinta se llama <b>cuadro</b>.</p>`,
      svg: dibujos("Una paleta, un pincel y un cuadro", [["paleta", "paleta", R], ["pincel", "pincel", A], ["cuadro", "cuadro", V]], { titulo: "Lo que usa un pintor" }),
    },
    {
      html: `<h3>Van Gogh y las estrellas</h3><p><b>Vincent van Gogh</b> pintaba con <mark>pinceladas que se mueven</mark>.</p><p>En su cuadro <b>La noche estrellada</b>, el cielo da vueltas y las estrellas brillan mucho.</p><p>También pintó girasoles muy amarillos.</p>`,
      svg: svg("Dibujo al estilo de Van Gogh: cielo azul con remolinos, estrellas y luna", `${noche()}${rot(130, 168, "Al estilo de Van Gogh", { color: K })}`),
    },
    {
      html: `<h3>Picasso y las formas</h3><p><b>Pablo Picasso</b> era de Málaga. Pintaba caras con <mark>formas</mark>: cuadrados, triángulos y círculos.</p><p>A veces ponía un ojo de frente y otro de lado. ¡Parecen puzles!</p>`,
      svg: svg("Dibujo al estilo de Picasso: cara de formas con un ojo redondo y otro triangular", `${caraFormas()}${rot(130, 168, "Al estilo de Picasso", { color: K })}`),
    },
    {
      html: `<h3>Miró y los colores</h3><p><b>Joan Miró</b> era de Barcelona. Usaba <mark>colores alegres</mark>: rojo, amarillo, azul y verde.</p><p>Pintaba estrellas, lunas, soles y líneas negras que bailan.</p><p>Sus cuadros parecen un juego.</p>`,
      svg: svg("Dibujo al estilo de Miró: círculo rojo, estrella, luna y líneas negras", `${miro()}${rot(130, 168, "Al estilo de Miró", { color: K })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Mirar cuadros nos enseña a <mark>fijarnos</mark> y a decir lo que sentimos.</p><p>Los cuadros famosos se guardan en los <b>museos</b>, como el Prado de Madrid. ¡Puedes ir a visitarlos!</p>`,
      svg: lista("Tres preguntas para mirar un cuadro", [["¿Qué veo?", A], ["¿Qué colores hay?", R], ["¿Cómo me siento?", V]], { titulo: "Miro un cuadro", marca: "n" }),
    },
    {
      html: `<h3>Juego: pinto como ellos</h3><p>Elige un pintor.</p><p>Como <b>Van Gogh</b>: cielo con remolinos. Como <b>Picasso</b>: una cara con formas. Como <b>Miró</b>: estrellas y colores.</p><p>¡Firma tu cuadro!</p>`,
      svg: svg("Un niño pinta en un caballete", `<path d="M150 40 L130 160 M210 40 L230 160 M180 30 V160" stroke="#a0703c" stroke-width="4"/><rect x="138" y="40" width="84" height="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${estrella(160, 64, 10, "var(--sun)")}<circle cx="198" cy="80" r="12" fill="${R}"/><path d="M146 100 q20 -14 40 0 q10 6 30 -4" stroke="var(--ink)" stroke-width="2.5" fill="none"/>${nino(80, 160, { c: N, pose: "lanza" })}${ic("paleta", 46, 120, 0.9)}`),
    },
  ],
  figura: {
    titulo: "Tres pintores famosos",
    svg: mural("Van Gogh, Picasso y Miró con lo que más pintaban", [["noche", "Van Gogh", "cielos y estrellas que se mueven", A], ["cuadro", "Picasso", "caras hechas de formas", R], ["estrella", "Miró", "colores alegres y estrellas", V]], "Pintores famosos"),
  },
  video: { ...vid("nb5pmVFQUhs", "Pinturas famosas para preescolar", "Edith Rivera", 268940), busqueda: "pintores famosos para niños" },
  ejemplos: [
    { enunciado: "Miramos La noche estrellada de Van Gogh.", pasos: ["¿Qué veo? Un cielo, estrellas, una luna y un pueblo.", "¿Qué colores hay? Mucho azul y amarillo.", "¿Cómo me siento? Tranquilo, como si soñara."], resultado: "hemos mirado un cuadro como un experto." },
    { enunciado: "Hacemos una cara como Picasso.", pasos: ["Recortamos formas de papel: un círculo, un triángulo y un cuadrado.", "Ponemos un ojo redondo y otro triangular.", "Pegamos una nariz de lado."], resultado: "¡una cara al estilo de Picasso!" },
  ],
  errores: [
    "Pensar que solo vale pintar igual que la realidad: cada pintor tiene su estilo.",
    "Tocar los cuadros en el museo: se miran con los ojos.",
    "Creer que hay colores bien o mal: en el arte, tú eliges.",
  ],
  ejercicios: [
    { q: "Pinta un cielo de noche con remolinos, como Van Gogh.", sol: "Nota para la familia: usad pintura de dedos azul y amarilla." },
    { q: "Haz una cara con formas recortadas, como Picasso.", sol: "Nota: recortad círculos, triángulos y cuadrados de colores." },
    { q: "Dibuja estrellas, lunas y soles de colores, como Miró.", sol: "Nota: usad rotuladores gruesos y colores puros." },
    { q: "Mira un cuadro y di tres cosas que ves.", sol: "Respuesta libre. Nota: buscad cuadros en un libro o en la web de un museo." },
    { q: "Di qué color usarías para pintar «contento».", sol: "Respuesta libre: no hay respuesta mala." },
    { q: "Firma tu cuadro con tu nombre.", sol: "Los pintores firman sus obras." },
  ],
  quiz: [
    { q: "¿Qué hace un pintor?", o: ["pinta cuadros", "hace pan", "conduce un tren"], a: 0, e: "Cuenta cosas con colores." },
    { q: "¿Quién pintó La noche estrellada?", o: ["Picasso", "Van Gogh", "Miró"], a: 1, e: "Vincent van Gogh." },
    { q: "Picasso pintaba caras con…", o: ["formas", "letras", "números"], a: 0, e: "Cuadrados, triángulos y círculos." },
    { q: "Miró usaba colores…", o: ["tristes", "alegres", "grises"], a: 1, e: "Rojo, amarillo, azul y verde." },
    { q: "¿Dónde se guardan los cuadros famosos?", o: ["en un museo", "en la nevera", "en el parque"], a: 0, e: "Como el Museo del Prado." },
    { q: "Los pintores ponen los colores en…", o: ["una paleta", "un plato de sopa", "una mochila"], a: 0, e: "La paleta tiene las pinturas." },
  ],
  examen: [
    { q: "¿Quién pintaba estrellas y lunas con colores alegres?", o: ["Miró", "Van Gogh", "un panadero"], a: 0, e: "Joan Miró." },
    { q: "En un museo, los cuadros…", o: ["se tocan", "se miran", "se pintan encima"], a: 1, e: "Se miran con los ojos." },
    { q: "Con el pincel…", o: ["pintamos", "comemos", "cortamos"], a: 0, e: "El pincel lleva la pintura." },
  ],
  feynman: ["Qué hace un pintor y qué usa", "Cómo pintaban Van Gogh, Picasso y Miró", "Qué preguntas me hago al mirar un cuadro"],
  mapa: mapa("PINTORES", "var(--pri)", [
    ["Van Gogh", "cielos con remolinos", A],
    ["Picasso", "caras con formas", R],
    ["Miró", "estrellas y colores", V],
    ["Museo", "allí se guardan los cuadros", N],
  ], 220),
  tarjetas: [
    ["¿Qué usa un pintor?", "Pinceles, paleta y lienzo"],
    ["¿Quién pintó La noche estrellada?", "Van Gogh"],
    ["¿Cómo pintaba Picasso las caras?", "Con formas"],
    ["¿Qué pintaba Miró?", "Estrellas, lunas y colores alegres"],
    ["¿Dónde se ven los cuadros?", "En los museos"],
    ["¿Qué hago al terminar mi cuadro?", "Lo firmo"],
  ],
  familias: [
    "Visitad un museo o su web y elegid juntos un cuadro favorito.",
    "Colgad sus dibujos en casa como en una exposición.",
    "Pintad con distintas cosas: dedos, esponjas, bastoncillos.",
    "Al mirar un cuadro, preguntad: ¿qué ves?, ¿qué colores?, ¿cómo te sientes?",
  ],
  profesores: PROF("Lenguaje y expresión plástica y visual: acercamiento a obras de arte y artistas, intercambio de impresiones y experimentación con técnicas", ["Rincón del artista de la semana con láminas y biografía breve.", "Talleres de técnica: remolinos con pintura de dedos, collage de formas.", "Visita virtual a un museo y exposición final de la clase."]),
});
