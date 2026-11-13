// Infantil 3 años · Descubrimiento y exploración del entorno: Los colores. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, muestras, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", S = "var(--sun)", N = "var(--inf)";

// Bote de pintura de un color.
const bote = (x, y, c) => `<rect x="${x - 18}" y="${y - 14}" width="36" height="34" rx="5" fill="${c}"/><ellipse cx="${x}" cy="${y - 14}" rx="18" ry="5" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Los colores",
  minutos: 10,
  objetivos: ["Reconocer y nombrar el rojo, el azul, el amarillo y el verde", "Buscar cosas de un color en casa y en la calle", "Mezclar dos colores y ver qué pasa"],
  claves: ["rojo", "azul", "amarillo", "verde", "mezclar"],
  pregunta: {
    texto: "¿De qué color es tu camiseta hoy? ¿Y tu juguete favorito?",
    respuesta: "Todo a nuestro alrededor tiene <mark>colores</mark>: rojo, azul, amarillo, verde… ¡Vamos a conocerlos!",
  },
  bloques: [
    {
      html: `<h3>Un mundo de colores</h3><p>Mira a tu alrededor: ¡todo tiene <mark>colores</mark>!</p><p>Hoy conocemos cuatro: el <b>rojo</b>, el <b>azul</b>, el <b>amarillo</b> y el <b>verde</b>.</p><p>Señala cada círculo y di su nombre en voz alta. ¿Cuál te gusta más?</p>`,
      svg: muestras("Cuatro círculos de colores: rojo, azul, amarillo y verde", [["", "rojo", "", R], ["", "azul", "", A], ["", "amarillo", "", S], ["", "verde", "", V]], { titulo: "Cuatro colores" }),
      video: vid("OubecfTBGdg", "Rojo, amarillo, verde, azul", "Super Simple Español", 7617867),
    },
    {
      html: `<h3>Rojo</h3><p>El <mark>rojo</mark> es el color de la fresa, de la manzana y del tomate.</p><p>También son rojos el corazón y el camión de bomberos.</p><p>¿Ves algo rojo cerca de ti? ¡Señálalo!</p>`,
      svg: dibujos("Cosas rojas: la manzana, la fresa y el corazón", [["manzana", "manzana", R], ["fresa", "fresa", R], ["corazon", "corazón", R]], { titulo: "Cosas rojas" }),
    },
    {
      html: `<h3>Azul</h3><p>El <mark>azul</mark> es el color del cielo cuando hace bueno y del agua del mar.</p><p>Hay pájaros azules, peces azules y camisetas azules.</p><p>¿Tienes algo azul en tu ropa?</p>`,
      svg: dibujos("Cosas azules: el agua, el pez y el pájaro", [["agua", "agua", A], ["pez", "pez", A], ["pajaro", "pájaro", A]], { titulo: "Cosas azules" }),
    },
    {
      html: `<h3>Amarillo y verde</h3><p>El <mark>amarillo</mark> es el color del sol, del plátano y del pollito.</p><p>El <mark>verde</mark> es el color de la hierba, de las hojas de los árboles y de la rana.</p><p>¡Busca algo amarillo y algo verde!</p>`,
      svg: dibujos("Cosas amarillas y verdes: el sol, el plátano, el árbol y la rana", [["sol", "sol", S], ["platano", "plátano", S], ["arbol", "árbol", V], ["rana", "rana", V]], { titulo: "Amarillo y verde" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los colores nos <mark>avisan</mark>. En el semáforo, el rojo dice «para» y el verde dice «puedes pasar».</p><p>También nos ayudan a encontrar cosas: «tráeme el vaso azul».</p>`,
      svg: escena("Un semáforo: rojo para parar y verde para pasar", `<rect x="104" y="34" width="52" height="104" rx="12" fill="var(--ink)"/><circle cx="130" cy="62" r="18" fill="var(--red)"/><circle cx="130" cy="110" r="18" fill="var(--leaf)"/><path d="M130 138 V170" stroke="var(--ink)" stroke-width="6"/>
        ${t(58, 68, "¡para!", 22, R, 90)}${t(206, 116, "¡pasa!", 22, V, 90)}`, "El semáforo"),
    },
    {
      html: `<h3>Jugamos a mezclar</h3><p>Pon pintura <mark>amarilla</mark> y pintura <mark>azul</mark> en un papel. Mézclalas con el dedo.</p><p>¿Qué color sale? ¡Verde! Es como magia.</p><p>Ahora prueba con rojo y amarillo: ¡sale naranja!</p>`,
      svg: escena("Amarillo más azul da verde", `${bote(42, 92, S)}<text x="80" y="102" font-size="30" font-weight="800" fill="var(--muted)">+</text>${bote(130, 92, A)}<text x="166" y="102" font-size="30" font-weight="800" fill="var(--muted)">=</text>${bote(218, 92, V)}
        ${t(42, 146, "amarillo", 16, S, 76)}${t(130, 146, "azul", 16, A, 76)}${t(218, 146, "¡verde!", 18, V, 76)}`, "¡Magia de colores!"),
    },
  ],
  figura: {
    titulo: "Los colores",
    svg: mural("Cuatro colores: rojo como la manzana, azul como el agua, amarillo como el sol y verde como el árbol", [["manzana", "rojo", "fresa, tomate", R], ["pez", "azul", "cielo, mar", A], ["sol", "amarillo", "plátano, pollito", S], ["arbol", "verde", "hierba, rana", V]], "Los colores"),
  },
  video: { ...vid("gBeYkZiaSB8", "¡La canción de los colores!", "ChuChuTV Español", 470177880), busqueda: "los colores canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿De qué color es el plátano?",
      pasos: ["Miramos un plátano de verdad.", "Lo comparamos con el sol: ¡igual!"],
      resultado: "el plátano es amarillo." },
    { enunciado: "Ordenamos los bloques por colores.",
      pasos: ["Ponemos cuatro platos: rojo, azul, amarillo y verde.", "Cogemos un bloque, decimos su color y lo dejamos en su plato."],
      resultado: "¡cada bloque en su casita de color!" },
  ],
  errores: [
    "Enseñar muchos colores a la vez: mejor empezar con rojo, azul, amarillo y verde.",
    "Preguntar siempre «¿de qué color es?»: también ayuda pedir «dame el rojo».",
    "Preocuparse si confunde azul y verde al principio: es habitual y se corrige con juego.",
  ],
  ejercicios: [
    { q: "Busca en casa tres cosas rojas.", sol: "Para la familia: ropa, juguetes, fruta… Decid «rojo» cada vez." },
    { q: "Ordena tus pinturas por colores.", sol: "Para la familia: empezad solo con cuatro colores." },
    { q: "Mezcla pintura amarilla y azul con el dedo.", sol: "Para la familia: sale verde; dejadle descubrirlo solo." },
    { q: "Por la calle, busca un coche azul.", sol: "Para la familia: juego del «veo, veo un color» en los paseos." },
    { q: "Pinta un sol amarillo y una hierba verde.", sol: "Para la familia: no importa salirse; importa elegir el color." },
    { q: "Juega al semáforo: rojo, ¡quieto!; verde, ¡a correr!", sol: "Para la familia: usad dos cartulinas de colores." },
  ],
  quiz: [
    { q: "¿De qué color es la fresa?", o: ["roja", "azul", "verde"], a: 0, e: "Roja." },
    { q: "¿De qué color es el sol?", o: ["amarillo", "verde", "azul"], a: 0, e: "Amarillo." },
    { q: "¿De qué color es la hierba?", o: ["roja", "verde", "amarilla"], a: 1, e: "Verde." },
    { q: "¿De qué color es el mar?", o: ["azul", "rojo", "amarillo"], a: 0, e: "Azul." },
    { q: "En el semáforo, el rojo dice…", o: ["¡para!", "¡corre!", "¡salta!"], a: 0, e: "Rojo: para." },
    { q: "Amarillo y azul mezclados dan…", o: ["verde", "rojo", "negro"], a: 0, e: "Verde." },
  ],
  examen: [
    { q: "¿De qué color es el plátano?", o: ["amarillo", "azul", "rojo"], a: 0, e: "Amarillo." },
    { q: "¿De qué color es la rana?", o: ["verde", "roja", "azul"], a: 0, e: "Verde." },
    { q: "En el semáforo, el verde dice…", o: ["puedes pasar", "para", "duerme"], a: 0, e: "Puedes pasar." },
  ],
  feynman: ["Los cuatro colores", "Cosas de cada color", "Qué sale al mezclar amarillo y azul"],
  mapa: mapa("LOS COLORES", "var(--pri)", [
    ["Rojo", "fresa, manzana", R],
    ["Azul", "cielo, mar", A],
    ["Amarillo", "sol, plátano", N],
    ["Verde", "hierba, rana", V],
  ], 220),
  tarjetas: [
    ["¿De qué color es la manzana?", "Roja"],
    ["¿De qué color es el cielo?", "Azul"],
    ["¿De qué color es el sol?", "Amarillo"],
    ["¿De qué color son las hojas?", "Verdes"],
    ["Amarillo + azul = …", "Verde"],
    ["Rojo + amarillo = …", "Naranja"],
  ],
  familias: [
    "Jugad a «veo, veo una cosa de color…» en casa y por la calle.",
    "Al vestirle, nombrad el color de cada prenda.",
    "Dejad que pinte con los dedos y mezcle; ensuciarse es parte de aprender.",
    "Al recoger, pedid por colores: «ahora los bloques rojos».",
  ],
  profesores: PROF("Diálogo corporal con el entorno y exploración creativa de objetos y materiales: cualidades de los objetos (color), clasificación y experimentación con mezclas", [
    "Día del color: cada niño trae algo de ese color y montamos una mesa temática.",
    "Clasificar bloques o tapones en cajas por colores.",
    "Experimento de mezcla con pintura de dedos o agua coloreada en vasos.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
