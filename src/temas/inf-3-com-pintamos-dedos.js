// Infantil 3 años · Comunicación y representación: Pintamos con los dedos. Para hacer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, lista, mural, muestras, vid } = require("./_peque");
const { R, A, V, N, S, huellas, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Pintamos con los dedos",
  minutos: 10,
  objetivos: ["Pintar con los dedos y las manos", "Conocer los colores de la pintura", "Mezclar dos colores y ver qué sale"],
  claves: ["pintura", "dedo", "huella", "mezclar", "color", "babi"],
  pregunta: {
    texto: "¿Has pintado alguna vez sin pincel, solo con las manos?",
    respuesta: "¡Se puede! Con la <mark>yema de los dedos</mark> hacemos puntos, rayas y dibujos preciosos.",
  },
  bloques: [
    {
      html: `<h3>Nos preparamos</h3><p>Antes de pintar nos ponemos el <mark>babi</mark>.</p><p>Tapamos la mesa con papel. Preparamos la pintura de dedos en platos. ¡Ya podemos mancharnos sin miedo!</p><p>Las mangas, bien remangadas para no mancharlas.</p>`,
      svg: lista("Nos preparamos: babi, papel en la mesa y pintura", [["Me pongo el babi", A], ["Papel en la mesa", R], ["Pintura en platos", V]], { titulo: "Antes de pintar" }),
    },
    {
      html: `<h3>Los colores</h3><p>La pintura tiene <mark>colores</mark>.</p><p>Rojo como la fresa. Amarillo como el sol. Azul como el mar. Verde como la hierba. ¿Cuál te gusta más?</p><p>Moja un dedo en cada color y haz una huella.</p>`,
      svg: muestras("Colores de pintura: rojo, amarillo, azul y verde", [["", "rojo", "fresa", R], ["", "amarillo", "sol", S], ["", "azul", "mar", A], ["", "verde", "hierba", V]]),
    },
    {
      html: `<h3>Huellas de dedo</h3><p>Mojamos un dedo en la pintura y lo ponemos en el papel: <mark>¡una huella!</mark></p><p>Muchas huellas juntas hacen un dibujo. Con huellas verdes y rojas sale un árbol con manzanas.</p>`,
      svg: huellas("Un árbol hecho con huellas de dedo", "arbol", { titulo: "Un árbol de huellas" }),
    },
    {
      html: `<h3>Mezclamos colores</h3><p>Si juntamos dos colores, sale <mark>otro nuevo</mark>.</p><p>Azul y amarillo hacen verde. Rojo y amarillo hacen naranja. ¡Es como magia! Prueba en el papel.</p><p>¿Qué color sale si mezclas rojo y amarillo? ¡Pruébalo!</p>`,
      svg: muestras("Mezclas: azul y amarillo hacen verde", [["", "azul", "", A], ["+", "amarillo", "", S], ["=", "verde", "¡magia!", V]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Pintar con los dedos nos ayuda a <mark>sentir</mark> con la piel.</p><p>La pintura es fría y blandita. Movemos los dedos con cuidado. ¡Y hacemos regalos bonitos para la familia!</p>`,
      svg: dibujos("Pintar sirve para sentir, mover los dedos y regalar", [["mano", "sentir", R], ["flor", "dibujar", V], ["corazon", "regalar", N]]),
    },
    {
      html: `<h3>Jugamos a hacer una oruga</h3><p>Ponemos <mark>huellas de colores</mark> en fila, una detrás de otra.</p><p>Al final, con el dedo, hacemos la cabeza y un ojo. ¿Cuántas huellas tiene tu oruga?</p><p>Pinta también hojas verdes alrededor para que coma.</p>`,
      svg: huellas("Una oruga hecha con seis huellas de colores", "oruga", { titulo: "La oruga de colores" }),
    },
  ],
  figura: {
    titulo: "Pintamos con los dedos",
    svg: mural("Pintar con los dedos: babi, colores, huellas y mezclar", [["camiseta", "babi", "nos preparamos", A], ["flor", "colores", "rojo, azul…", R], ["mano", "huellas", "dedo y papel", V], ["arcoiris", "mezclar", "azul + amarillo", N]], "Pintamos con los dedos"),
  },
  video: { ...vid("SgNru6kxmFE", "Los colores · Aprende los colores pintando los dedos", "FunKeep Kids", 39714225), busqueda: "pintar con los dedos para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Pintamos un sol.",
      pasos: ["Mojamos el dedo en amarillo.", "Hacemos una huella grande en el centro.", "Alrededor, huellas pequeñas: los rayos."],
      resultado: "¡Un sol de huellas!" },
    { enunciado: "¿Qué sale con rojo y amarillo?",
      pasos: ["Ponemos un poco de rojo.", "Encima, un poco de amarillo.", "Removemos con el dedo."],
      resultado: "Sale naranja." },
  ],
  errores: [
    "Meterse los dedos en la boca: la pintura no se come.",
    "Mezclar todos los colores: sale un color marrón y feo.",
    "Olvidar lavarse las manos al terminar.",
  ],
  ejercicios: [
    { q: "Ponte el babi y prepara el papel.", sol: "Para la familia: usad pintura de dedos lavable y no tóxica." },
    { q: "Haz huellas de un solo color.", sol: "Que mire cómo queda cada huella." },
    { q: "Pinta un árbol con huellas.", sol: "Dibujad vosotros el tronco y él pone las hojas con huellas." },
    { q: "Mezcla azul y amarillo.", sol: "Sale verde. Nombrad el color nuevo en voz alta." },
    { q: "Haz una oruga de colores.", sol: "Huellas en fila; contad juntos cuántas hay." },
    { q: "Lávate las manos al terminar.", sol: "Agua y jabón: forma parte de la actividad." },
  ],
  quiz: [
    { q: "Antes de pintar me pongo…", o: ["el babi", "el abrigo", "el pijama"], a: 0, e: "El babi para no mancharnos." },
    { q: "Una huella se hace con…", o: ["el dedo", "la nariz", "el pie del gato"], a: 0, e: "Con el dedo." },
    { q: "Azul y amarillo hacen…", o: ["verde", "rojo", "negro"], a: 0, e: "Verde." },
    { q: "Rojo y amarillo hacen…", o: ["naranja", "azul", "blanco"], a: 0, e: "Naranja." },
    { q: "La pintura…", o: ["no se come", "se come", "se bebe"], a: 0, e: "¡Nunca a la boca!" },
    { q: "Al terminar…", o: ["me lavo las manos", "me voy a dormir", "toco el sofá"], a: 0, e: "Nos lavamos las manos." },
  ],
  examen: [
    { q: "El sol se pinta de…", o: ["amarillo", "negro", "morado"], a: 0, e: "Amarillo." },
    { q: "Muchas huellas juntas hacen…", o: ["un dibujo", "una canción", "nada"], a: 0, e: "Un dibujo." },
    { q: "Con la hierba pensamos en el…", o: ["verde", "rojo", "blanco"], a: 0, e: "Verde." },
  ],
  feynman: ["Con el dedo hacemos huellas", "Muchas huellas forman un dibujo", "Mezclando colores sale uno nuevo"],
  mapa: mapa("PINTAR", "var(--inf)", [
    ["Babi", "nos preparamos", A],
    ["Colores", "rojo, amarillo, azul", R],
    ["Huellas", "dedo en el papel", V],
    ["Mezclar", "azul + amarillo = verde", N],
  ], 240),
  tarjetas: [
    ["Antes de pintar…", "Me pongo el babi"],
    ["Azul + amarillo", "Verde"],
    ["Rojo + amarillo", "Naranja"],
    ["Una huella se hace con…", "El dedo"],
    ["¿La pintura se come?", "¡No!"],
    ["Al terminar…", "Me lavo las manos"],
  ],
  familias: [
    "Pintad en la bañera con pintura lavable: luego se recoge fácil.",
    "Haced huellas de toda la mano y poned la fecha: veréis cómo crece.",
    "Nombrad los colores mientras pinta, sin corregir sus dibujos.",
    "Colgad su obra en la nevera: se sentirá orgulloso.",
  ],
  profesores: PROF("Lenguaje plástico: exploración sensorial de materiales, pintura de dedos, colores primarios y primeras mezclas", ["Murales colectivos de huellas.", "Experimentar mezclas en bolsas cerradas.", "Rincón de plástica con babis y pintura lavable."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
