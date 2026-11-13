// Infantil 3 años · Descubrimiento y exploración del entorno: El otoño, el invierno, la primavera y el verano. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)", W = "var(--water)";


module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "El otoño, el invierno, la primavera y el verano",
  minutos: 10,
  objetivos: ["Nombrar las cuatro estaciones del año", "Relacionar cada estación con el tiempo que hace y con la ropa", "Observar los cambios en los árboles y en el cielo"],
  claves: ["estaciones", "otoño", "invierno", "primavera", "verano", "tiempo"],
  pregunta: {
    texto: "Mira por la ventana. ¿Hace frío o calor? ¿Qué ropa llevas hoy?",
    respuesta: "Ahora es <mark>otoño</mark>: refresca, llueve a veces y caen las hojas. Pronto llegará el <mark>invierno</mark>, con mucho frío.",
  },
  bloques: [
    {
      html: `<h3>Cuatro estaciones</h3><p>El año tiene cuatro <mark>estaciones</mark>: otoño, invierno, primavera y verano.</p><p>En cada una hace un tiempo distinto y la naturaleza cambia.</p><p>Después del verano vuelve el otoño. ¡Es como una rueda!</p>`,
      svg: dibujos("Las cuatro estaciones: otoño con hojas, invierno con nieve, primavera con flores y verano con sol", [["hoja", "otoño", N], ["muneco", "invierno", W], ["flor", "primavera", V], ["sol", "verano", S]], { titulo: "Cuatro estaciones" }),
      video: vid("IXT7GwXUcLo", "Cuatro estaciones hay", "La Granja de Zenón", 8651971),
    },
    {
      html: `<h3>El otoño</h3><p>En <mark>otoño</mark> las hojas de los árboles se ponen marrones y naranjas, y se caen.</p><p>Refresca y a veces llueve: sacamos el paraguas. Es el tiempo de las castañas y de volver al cole.</p>`,
      svg: dibujos("En otoño caen las hojas, llueve y usamos el paraguas", [["hoja", "hojas", N], ["lluvia", "lluvia", W], ["paraguas", "paraguas", R]], { titulo: "Otoño" }),
    },
    {
      html: `<h3>El invierno</h3><p>En <mark>invierno</mark> hace mucho frío. Los días son cortos y anochece pronto.</p><p>A veces nieva y hacemos muñecos de nieve. Nos ponemos abrigo, gorro y bufanda. ¡Y llega la Navidad!</p>`,
      svg: dibujos("En invierno hace frío, nieva y llevamos abrigo y gorro", [["nieve", "nieve", W], ["muneco", "muñeco", A], ["abrigo", "abrigo", R]], { titulo: "Invierno" }),
    },
    {
      html: `<h3>La primavera</h3><p>En <mark>primavera</mark> salen las flores y las hojas nuevas.</p><p>Hace sol, pero también llueve un poco. Vuelven los pájaros y vemos mariposas.</p><p>¡Los campos se llenan de colores!</p>`,
      svg: dibujos("En primavera hay flores, mariposas y pájaros", [["flor", "flores", V], ["mariposa", "mariposas", N], ["pajaro", "pájaros", A]], { titulo: "Primavera" }),
    },
    {
      html: `<h3>El verano</h3><p>En <mark>verano</mark> hace mucho calor y el sol brilla fuerte.</p><p>No hay cole: vamos a la playa o a la piscina. Llevamos ropa fresca, gorra y crema para el sol.</p><p>¡Y comemos sandía fresquita!</p>`,
      svg: dibujos("En verano hace sol, vamos a la playa y comemos sandía", [["sol", "sol", S], ["isla", "playa", W], ["sandia", "sandía", R]], { titulo: "Verano" }),
    },
    {
      html: `<h3>Jugamos: ¿qué me pongo?</h3><p>Un adulto dice una <mark>estación</mark> y tú haces como que te vistes.</p><p>«¡Invierno!»: abrigo y gorro, ¡brrr! «¡Verano!»: gorra y gafas de sol. «¡Otoño!»: abre el paraguas.</p>`,
      svg: lista("Qué me pongo en cada estación: abrigo en invierno, gorra en verano, paraguas en otoño", [["Invierno: abrigo", W], ["Verano: gorra", S], ["Otoño: paraguas", N], ["Primavera: chaqueta", V]], { titulo: "¿Qué me pongo?" }),
    },
  ],
  figura: {
    titulo: "Las cuatro estaciones",
    svg: mural("Las cuatro estaciones: otoño caen las hojas, invierno frío y nieve, primavera flores, verano calor", [["hoja", "otoño", "caen las hojas", N], ["muneco", "invierno", "frío y nieve", W], ["flor", "primavera", "salen las flores", V], ["sol", "verano", "calor y playa", S]], "Las estaciones"),
  },
  video: { ...vid("-F4wleQRWHk", "Las estaciones del año", "Doremila", 1523137), busqueda: "las estaciones del año canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Vemos el suelo del parque lleno de hojas secas.",
      pasos: ["Las hojas se han caído de los árboles.", "Hace fresquito y llevamos chaqueta."],
      resultado: "es otoño." },
    { enunciado: "Vamos a la playa con mucho calor.",
      pasos: ["El sol brilla fuerte.", "Llevamos bañador y gorra."],
      resultado: "es verano." },
  ],
  errores: [
    "Esperar que entienda los meses: a los 3 años basta con relacionar estación, tiempo y ropa.",
    "Usar solo fichas: observar el mismo árbol en cada estación enseña mucho más.",
    "Pensar que en todas partes nieva en invierno: depende de dónde vivimos.",
  ],
  ejercicios: [
    { q: "Recoge hojas secas en el parque y haz un collage.", sol: "Para la familia: nombrad sus colores: marrón, naranja, amarillo." },
    { q: "Mira por la ventana: ¿sol, nubes, lluvia o nieve?", sol: "Para la familia: haced cada mañana un pequeño «tiempo de hoy»." },
    { q: "Elige la ropa para el invierno en el armario.", sol: "Para la familia: abrigo, gorro, bufanda y guantes." },
    { q: "Haz una foto al mismo árbol en otoño y en primavera.", sol: "Para la familia: comparadlas juntos." },
    { q: "Juega a «¿qué me pongo?».", sol: "Para la familia: decid una estación y que haga el gesto." },
    { q: "Dibuja tu estación favorita.", sol: "Para la familia: preguntad por qué le gusta." },
  ],
  quiz: [
    { q: "¿Cuándo caen las hojas?", o: ["en otoño", "en verano", "nunca"], a: 0, e: "En otoño." },
    { q: "¿Cuándo hace más frío?", o: ["en invierno", "en verano", "en primavera"], a: 0, e: "En invierno." },
    { q: "¿Cuándo salen las flores?", o: ["en primavera", "en invierno", "en otoño"], a: 0, e: "En primavera." },
    { q: "¿Cuándo vamos a la playa?", o: ["en verano", "en invierno", "en otoño"], a: 0, e: "En verano." },
    { q: "Cuando nieva me pongo…", o: ["abrigo y gorro", "bañador", "chanclas"], a: 0, e: "Abrigo y gorro." },
    { q: "¿Cuántas estaciones hay?", o: ["cuatro", "dos", "diez"], a: 0, e: "Cuatro." },
  ],
  examen: [
    { q: "El muñeco de nieve es del…", o: ["invierno", "verano", "otoño"], a: 0, e: "Invierno." },
    { q: "Las mariposas vuelven en…", o: ["primavera", "invierno", "otoño"], a: 0, e: "Primavera." },
    { q: "En otoño, a veces llueve y uso…", o: ["el paraguas", "la crema solar", "el bañador"], a: 0, e: "El paraguas." },
  ],
  feynman: ["Las cuatro estaciones", "Qué tiempo hace en cada una", "Qué ropa me pongo"],
  mapa: mapa("LAS ESTACIONES", "var(--pri)", [
    ["Otoño", "caen las hojas", N],
    ["Invierno", "frío y nieve", W],
    ["Primavera", "salen las flores", V],
    ["Verano", "calor y playa", S],
  ], 220),
  tarjetas: [
    ["¿Cuándo caen las hojas?", "En otoño"],
    ["¿Cuándo hace mucho frío?", "En invierno"],
    ["¿Cuándo salen las flores?", "En primavera"],
    ["¿Cuándo hace mucho calor?", "En verano"],
    ["¿Cuántas estaciones hay?", "Cuatro"],
    ["¿Qué estación es ahora?", "Mira por la ventana"],
  ],
  familias: [
    "Elegid un árbol cerca de casa y observadlo en cada estación.",
    "Al vestiros, hablad del tiempo: «hace frío, es invierno, cogemos el abrigo».",
    "Guardad en una caja tesoros de cada estación: hojas, piñas, flores secas, conchas.",
    "Celebrad lo propio de cada estación: castañas, nieve, flores, playa.",
  ],
  profesores: PROF("Indagación en el medio físico y natural: el tiempo atmosférico y los cambios estacionales, observación de la naturaleza y relación con la vida cotidiana", [
    "Panel del tiempo diario en la asamblea con pictogramas.",
    "Árbol de las estaciones en la pared que cambia de hojas y flores.",
    "Caja de las estaciones con objetos y ropa para clasificar.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
