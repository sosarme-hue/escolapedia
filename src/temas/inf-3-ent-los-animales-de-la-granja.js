// Infantil 3 años · Descubrimiento y exploración del entorno: Los animales de la granja. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, parejas, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", W = "var(--water)";

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Los animales de la granja",
  minutos: 10,
  objetivos: ["Nombrar los animales de la granja", "Imitar el sonido de cada animal", "Saber qué nos dan algunos animales: leche, huevos y lana"],
  claves: ["granja", "vaca", "gallina", "cerdo", "oveja", "caballo"],
  pregunta: {
    texto: "¿Qué animal dice «muuu»? ¿Y cuál dice «oinc, oinc»?",
    respuesta: "La <mark>vaca</mark> dice «muuu» y el <mark>cerdo</mark> dice «oinc, oinc». ¡Viven en la granja!",
  },
  bloques: [
    {
      html: `<h3>La granja</h3><p>La <mark>granja</mark> es una casa en el campo con muchos animales.</p><p>Allí viven la vaca, el cerdo, la gallina, la oveja, el caballo y el pato.</p><p>El granjero les da de comer y los cuida cada día.</p>`,
      svg: dibujos("Animales de la granja: vaca, cerdo, gallina, oveja, caballo y pato", [["vaca", "vaca", A], ["cerdo", "cerdo", R], ["gallina", "gallina", N], ["oveja", "oveja", A], ["caballo", "caballo", R], ["pato", "pato", V]]),
    },
    {
      html: `<h3>¿Cómo hacen?</h3><p>Cada animal tiene su <mark>sonido</mark>.</p><p>La vaca hace «muuu». El cerdo, «oinc, oinc». La gallina, «coc, coc». La oveja, «beee». Y el pato, «cua, cua».</p><p>¡Imítalos tú!</p>`,
      svg: parejas("Sonidos de los animales: la vaca hace muuu, el cerdo oinc y la oveja beee", [["vaca", "vaca", "", "¡muuu!"], ["cerdo", "cerdo", "", "¡oinc!"], ["oveja", "oveja", "", "¡beee!"]], { titulo: "¿Cómo hacen?" }),
      video: vid("rl3-_9Wp2gs", "Así es la granja", "La Granja de Zenón", 333731412),
    },
    {
      html: `<h3>La vaca y la gallina</h3><p>La <mark>vaca</mark> es grande y come hierba. Nos da la leche.</p><p>La <mark>gallina</mark> tiene plumas y pone huevos. De los huevos salen los pollitos, pequeños y amarillos: «pío, pío».</p>`,
      svg: parejas("La vaca da leche y la gallina pone huevos", [["vaca", "vaca", "leche", "leche"], ["gallina", "gallina", "huevo", "huevos"]], { titulo: "¿Qué nos dan?" }),
    },
    {
      html: `<h3>La oveja y el caballo</h3><p>La <mark>oveja</mark> tiene mucha lana, blanca y suave. Con su lana se hacen jerséis calentitos.</p><p>El <mark>caballo</mark> corre muy rápido y tiene crines. Hace «hiii». ¡Galopa como un caballo!</p>`,
      svg: dibujos("La oveja da lana y el caballo corre", [["oveja", "lana", A], ["caballo", "corre", R]], { titulo: "Lana y galope" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los animales de la granja nos dan <mark>alimentos</mark>: leche, huevos y queso.</p><p>También lana para la ropa. Por eso los cuidamos bien: comida, agua y un lugar limpio para dormir.</p>`,
      svg: lista("Los animales de la granja nos dan leche, huevos y lana; los cuidamos", [["Leche y queso", W], ["Huevos", N], ["Lana para la ropa", A], ["Los cuidamos", V]], { titulo: "Nos dan…" }),
    },
    {
      html: `<h3>Jugamos: ¿quién soy?</h3><p>Un adulto hace un <mark>sonido</mark> y tú adivinas el animal.</p><p>«Cua, cua»: ¡el pato! «Beee»: ¡la oveja!</p><p>Ahora tú: anda a cuatro patas, haz un sonido y que adivinen qué animal eres.</p>`,
      svg: dibujos("Adivina el animal por su sonido: cua cua es el pato", [["bocadillo", "¡cua, cua!", A], ["interrogacion", "¿quién es?", R], ["pato", "¡el pato!", V]], { titulo: "¿Quién soy?" }),
    },
  ],
  figura: {
    titulo: "Los animales de la granja",
    svg: mural("Animales de la granja y lo que nos dan: la vaca leche, la gallina huevos, la oveja lana y el cerdo hace oinc", [["vaca", "vaca", "muuu · leche", A], ["gallina", "gallina", "coc, coc · huevos", N], ["oveja", "oveja", "beee · lana", W], ["cerdo", "cerdo", "oinc, oinc", R]], "La granja"),
  },
  video: { ...vid("hnhdU5hFufo", "Los animales en la granja", "Super Simple Español", 31116711), busqueda: "animales de la granja canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿De dónde viene la leche del desayuno?",
      pasos: ["Pensamos en un animal grande que come hierba.", "Hace «muuu»."],
      resultado: "la leche viene de la vaca." },
    { enunciado: "Adivina: «Tengo plumas, pongo huevos y hago coc, coc».",
      pasos: ["Tiene plumas: es un ave.", "Pone huevos y dice «coc, coc»."],
      resultado: "es la gallina." },
  ],
  errores: [
    "Mezclar animales de la granja con salvajes: el león y el elefante no viven en la granja.",
    "Enseñar solo el nombre: el sonido y lo que nos dan lo hacen más fácil de recordar.",
    "Olvidar el respeto: los animales sienten y hay que tratarlos con cuidado.",
  ],
  ejercicios: [
    { q: "Imita el sonido de la vaca, el cerdo y la oveja.", sol: "Para la familia: haced turnos; uno hace el sonido y otro adivina." },
    { q: "Señala en el dibujo el animal que nos da huevos.", sol: "Para la familia: la gallina." },
    { q: "Toca un jersey de lana. ¿De qué animal viene?", sol: "Para la familia: de la oveja." },
    { q: "Galopa como un caballo por la casa.", sol: "Para la familia: un buen juego para moverse y reír." },
    { q: "Canta «En la granja de mi tío».", sol: "Para la familia: añadid un animal y su sonido en cada estrofa." },
    { q: "Modela un cerdito con plastilina rosa.", sol: "Para la familia: una bola grande, una pequeña y dos orejas." },
  ],
  quiz: [
    { q: "¿Qué animal dice «muuu»?", o: ["la vaca", "el pato", "la oveja"], a: 0, e: "La vaca." },
    { q: "¿Qué animal pone huevos?", o: ["la gallina", "el caballo", "el cerdo"], a: 0, e: "La gallina." },
    { q: "La lana nos la da…", o: ["la oveja", "la vaca", "el pato"], a: 0, e: "La oveja." },
    { q: "«Oinc, oinc» dice…", o: ["el cerdo", "el caballo", "la gallina"], a: 0, e: "El cerdo." },
    { q: "¿Cuál vive en la granja?", o: ["el caballo", "el león", "el tiburón"], a: 0, e: "El caballo." },
    { q: "«Cua, cua» dice…", o: ["el pato", "la vaca", "la oveja"], a: 0, e: "El pato." },
  ],
  examen: [
    { q: "La leche viene de…", o: ["la vaca", "la gallina", "el pato"], a: 0, e: "De la vaca." },
    { q: "La oveja dice…", o: ["beee", "muuu", "pío"], a: 0, e: "Beee." },
    { q: "¿Quién cuida a los animales de la granja?", o: ["el granjero", "el piloto", "el pez"], a: 0, e: "El granjero." },
  ],
  feynman: ["Los animales de la granja", "El sonido de cada uno", "Qué nos dan la vaca, la gallina y la oveja"],
  mapa: mapa("LA GRANJA", "var(--pri)", [
    ["Vaca", "muuu · leche", A],
    ["Gallina", "coc, coc · huevos", N],
    ["Oveja", "beee · lana", W],
    ["Cerdo", "oinc, oinc", R],
  ], 220),
  tarjetas: [
    ["¿Quién dice «muuu»?", "La vaca"],
    ["¿Quién pone huevos?", "La gallina"],
    ["¿Quién nos da lana?", "La oveja"],
    ["¿Quién dice «oinc, oinc»?", "El cerdo"],
    ["¿Quién dice «cua, cua»?", "El pato"],
    ["¿Quién galopa y dice «hiii»?", "El caballo"],
  ],
  familias: [
    "Visitad una granja escuela si tenéis ocasión.",
    "En el súper, preguntad: «¿de qué animal viene la leche?, ¿y los huevos?».",
    "Jugad con animales de juguete a montar una granja.",
    "Cantad canciones de animales con sus sonidos.",
  ],
  profesores: PROF("Indagación en el medio físico y natural: animales del entorno próximo, características, sonidos, productos que nos proporcionan y respeto hacia los seres vivos", [
    "Granja de juguete en el rincón de juego simbólico.",
    "Lotería de sonidos de animales con tarjetas.",
    "Salida a una granja escuela o visita de un granjero al aula.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
