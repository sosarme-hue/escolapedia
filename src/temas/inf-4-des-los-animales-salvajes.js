// Infantil 4 años · Descubrimiento y exploración del entorno: los animales salvajes.
const { marco, dibujos, parejas, lista, ic, t, arbol, sol, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Los animales salvajes",
  minutos: 15,
  objetivos: ["Diferenciar animales salvajes y domésticos", "Nombrar animales de la sabana, la selva y el mar", "Saber cómo se mueven y qué comen algunos"],
  claves: ["salvaje", "doméstico", "sabana", "selva"],
  pregunta: {
    texto: "¿Por qué no podemos tener un león en casa como un gato?",
    respuesta: "Porque el león es un animal <mark>salvaje</mark>: vive libre en la naturaleza y busca su comida solo. El gato es <mark>doméstico</mark>: vive con las personas.",
  },
  bloques: [
    {
      html: `<h3>Salvajes y domésticos</h3><p>Los animales <mark>domésticos</mark> viven con las personas, como el perro o el gato.</p><p>Los animales <mark>salvajes</mark> viven libres en la naturaleza y buscan su comida solos. Hoy vamos a conocer a los salvajes.</p>`,
      svg: parejas("El gato es doméstico y el león es salvaje; el perro doméstico y el tigre salvaje", [["gato", "gato", "leon", "león"], ["perro", "perro", "tigre", "tigre"]], { izq: "doméstico", der: "salvaje", color: "var(--pen)", color2: "var(--inf)" }),
    },
    {
      html: `<h3>En la sabana</h3><p>La <mark>sabana</mark> es un campo enorme con mucha hierba y calor.</p><p>Allí viven el <b>león</b>, la <b>jirafa</b>, la <b>cebra</b> y el <b>elefante</b>. La jirafa come hojas de los árboles altos.</p>`,
      svg: marco("La sabana con sol, un árbol, una jirafa, una cebra y un elefante", `<rect x="0" y="130" width="260" height="50" fill="var(--sun)" opacity=".35"/>${sol(225, 34, 14)}${arbol(50, 132, 1.2)}${ic("jirafa", 100, 100, 1.8)}${ic("cebra", 160, 120, 1.2)}${ic("elefante", 215, 126, 1.4)}`),
    },
    {
      html: `<h3>En la selva</h3><p>La <mark>selva</mark> tiene árboles muy altos y llueve mucho.</p><p>Allí viven el <b>mono</b>, que trepa; la <b>serpiente</b>, que se arrastra; el <b>gorila</b> y muchos pájaros de colores. Es un lugar lleno de árboles y de ruidos.</p>`,
      svg: dibujos("Mono, serpiente, gorila y pájaro de la selva", [["mono", "mono", "var(--inf)"], ["serpiente", "serpiente", "var(--leaf)"], ["gorila", "gorila", "var(--ink)"], ["pajaro", "pájaro", "var(--pen)"]], { titulo: "En la selva" }),
    },
    {
      html: `<h3>Cómo se mueven</h3><p>Cada animal se mueve a su manera. El canguro <mark>salta</mark>, el pez <mark>nada</mark>, el pájaro <mark>vuela</mark> y la serpiente <mark>repta</mark>.</p><p>El guepardo corre rapidísimo. Y tú, ¿cómo te mueves?</p>`,
      svg: parejas("El pez nada, el pájaro vuela y la serpiente repta", [["pez", "nada", "pajaro", "vuela"], ["serpiente", "repta", "rana", "salta"]], { color: "var(--water)", color2: "var(--leaf)", flecha: "·" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer a los animales salvajes nos ayuda a <mark>cuidarlos</mark> y a respetar su casa.</p><p>No les damos comida ni los molestamos. Algunos están en peligro y necesitan nuestra ayuda. Los miramos desde lejos, en silencio.</p>`,
      svg: lista("Cuidamos a los animales salvajes: no molestar, no dar comida, cuidar su casa", [["No los molesto", "var(--pen)"], ["No les doy comida", "var(--inf)"], ["Cuido su casa", "var(--leaf)"]], { titulo: "Los respeto" }),
    },
    {
      html: `<h3>Juego: ¿quién soy?</h3><p>El adulto da pistas: «Tengo el cuello muy largo y manchas». ¿Quién soy? ¡La <mark>jirafa</mark>!</p><p>«Tengo trompa y orejas grandes». ¡El <mark>elefante</mark>! Ahora da tú las pistas. Ahora da tú las pistas a un adulto.</p>`,
      svg: marco("Una jirafa y un elefante con interrogantes", `${ic("jirafa", 70, 110, 2.3)}${ic("elefante", 190, 112, 2.3)}${t(130, 28, "¿quién soy?", { color: "var(--red)", size: 20 })}`),
    },
  ],
  figura: figura("Animales salvajes", "León, jirafa, cebra, mono y cocodrilo", [["leon", "león", "var(--inf)"], ["jirafa", "jirafa", "var(--sun)"], ["cebra", "cebra", "var(--ink)"], ["mono", "mono", "var(--inf)"], ["cocodrilo", "cocodrilo", "var(--leaf)"]]),
  video: vid("zVp6eaR5kRQ", "Los animales salvajes para niños. Vocabulario", "Smile and Learn - Español", 12404867, "animales salvajes para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Separamos animales de juguete en dos grupos.", pasos: ["A un lado, los que viven con personas: perro, gato, vaca.", "Al otro, los que viven libres: león, jirafa, mono.", "Decimos el nombre de cada grupo."], resultado: "domésticos y salvajes." },
    { enunciado: "¿Dónde vive el mono?", pasos: ["Pensamos: trepa a los árboles.", "Necesita muchos árboles altos.", "Eso es la selva."], resultado: "el mono vive en la selva." },
  ],
  errores: [
    "Pensar que los animales del zoo son domésticos: son salvajes, aunque estén cuidados.",
    "Creer que todos los animales salvajes son peligrosos: muchos son pequeños y tranquilos.",
    "Dar de comer a animales salvajes: su comida la buscan solos.",
  ],
  ejercicios: [
    { q: "Nombra tres animales salvajes.", sol: "Por ejemplo: león, elefante, mono." },
    { q: "Muévete como un mono, una serpiente y un elefante.", sol: "Nota para la familia: trepar, arrastrarse y pasos fuertes." },
    { q: "Dibuja una jirafa con su cuello largo.", sol: "Que no olvide las manchas." },
    { q: "Separa tus animales de juguete en domésticos y salvajes.", sol: "Revisad juntos cada grupo." },
    { q: "Imita el sonido del león y del mono.", sol: "Rugido y «uh, uh, ah, ah»." },
    { q: "Di qué come la jirafa.", sol: "Hojas de los árboles altos." },
  ],
  quiz: [
    { q: "¿Cuál es un animal salvaje?", o: ["El perro", "El león", "El gato"], a: 1, e: "El león vive libre." },
    { q: "¿Quién tiene el cuello muy largo?", o: ["La cebra", "El mono", "La jirafa"], a: 2, e: "La jirafa llega a las hojas altas." },
    { q: "El mono vive en…", o: ["la selva", "el mar", "una casa"], a: 0, e: "Trepa a los árboles de la selva." },
    { q: "La serpiente se mueve…", o: ["volando", "saltando", "reptando"], a: 2, e: "Se arrastra por el suelo." },
    { q: "¿Qué animal tiene trompa?", o: ["El elefante", "El tigre", "El cocodrilo"], a: 0, e: "La trompa es su nariz larga." },
    { q: "El perro es…", o: ["salvaje", "doméstico", "de la selva"], a: 1, e: "Vive con las personas." },
  ],
  examen: [
    { q: "La cebra tiene…", o: ["plumas", "rayas", "trompa"], a: 1, e: "Rayas blancas y negras." },
    { q: "Los animales salvajes viven…", o: ["libres en la naturaleza", "en nuestra casa", "en el cole"], a: 0, e: "Buscan su comida solos." },
    { q: "¿Qué hacemos con los animales salvajes?", o: ["Los molestamos", "Les tiramos cosas", "Los respetamos"], a: 2, e: "Cuidamos su casa." },
  ],
  feynman: ["Diferencia entre salvaje y doméstico", "Animales de la sabana y de la selva", "Cómo los cuidamos"],
  mapa: mapa("ANIMALES SALVAJES", "var(--inf)", [
    ["Sabana", "león, jirafa, cebra", "var(--sun)"],
    ["Selva", "mono, serpiente", "var(--leaf)"],
    ["Se mueven", "saltan, nadan, vuelan", "var(--pen)"],
    ["Los cuido", "respeto su casa", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿El león es salvaje o doméstico?", "Salvaje"],
    ["¿Quién tiene el cuello largo?", "La jirafa"],
    ["¿Dónde vive el mono?", "En la selva"],
    ["¿Quién tiene rayas?", "La cebra"],
    ["¿Cómo se mueve la serpiente?", "Reptando"],
    ["¿Quién tiene trompa?", "El elefante"],
  ],
  familias: [
    "Ved juntos un documental corto de animales y nombrad los que aparecen.",
    "Jugad a «¿quién soy?» con pistas sobre animales.",
    "Si visitáis un zoo o un parque natural, hablad de respetar su espacio.",
    "Haced un mural con recortes: sabana a un lado, selva al otro.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: seres vivos; animales salvajes y domésticos, sus características, hábitat y respeto hacia ellos", ["Clasificación de figuras de animales por hábitat.", "Proyecto de aula «La sabana».", "Adivinanzas con pistas sobre animales."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
