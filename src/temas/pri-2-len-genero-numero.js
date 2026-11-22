// Lengua Castellana 2º de Primaria: masculino y femenino, singular y plural. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Masculino y femenino, singular y plural",
  minutos: 25,
  objetivos: ["Distinguir palabras en masculino y en femenino", "Formar el plural añadiendo -s o -es", "Hacer que el, la, los, las y los adjetivos concuerden con el sustantivo"],
  claves: ["género", "masculino", "femenino", "número", "singular", "plural", "concordancia"],
  pregunta: {
    texto: "Decimos «el gato» y «la gata». ¿Y si son muchos gatos? ¿Qué cambia en la palabra?",
    respuesta: "Cambia el final. <b>gato</b> es <mark>masculino</mark> y <b>gata</b> es <mark>femenino</mark>. Si hay muchos, decimos <b>los gatos</b>: es el <mark>plural</mark>.",
  },
  bloques: [
    {
      html: `<h3>Masculino y femenino</h3><p>Los sustantivos pueden ser <mark>masculinos</mark> o <mark>femeninos</mark>. Es su <b>género</b>.</p><p>Delante de los masculinos ponemos <b>el</b> o <b>un</b>: <i>el niño</i>, <i>un perro</i>.</p><p>Delante de los femeninos ponemos <b>la</b> o <b>una</b>: <i>la niña</i>, <i>una perra</i>. ¡Prueba con el y la para saber el género!</p>`,
      svg: parejas("El niño y la niña; el perro y la perra; el gato y la gata", [["nino", "el niño", "nina", "la niña"], ["perro", "el perro", "perro", "la perra"], ["gato", "el gato", "gato", "la gata"]], { izq: "masculino", der: "femenino", color: A, color2: R, flecha: "↔" }),
      video: V("genV", "género y número para niños"),
    },
    {
      html: `<h3>Cambiar o por a</h3><p>Muchas palabras forman el femenino <mark>cambiando la o por la a</mark>.</p><p><i>niñ<b>o</b> → niñ<b>a</b></i>, <i>abuel<b>o</b> → abuel<b>a</b></i>, <i>maestr<b>o</b> → maestr<b>a</b></i>.</p><p>Otras <mark>añaden una a</mark>: <i>profesor → profesor<b>a</b></i>, <i>león → leon<b>a</b></i>. ¡Mira bien el final de la palabra!</p>`,
      svg: parejas("Abuelo abuela, maestro maestra, león leona", [["abuelo", "abuelo", "abuela", "abuela"], [null, "maestro", null, "maestra"], ["leon", "león", "leon", "leona"]], { izq: "masculino", der: "femenino", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Palabras muy distintas</h3><p>Algunas parejas son <mark>palabras diferentes</mark>.</p><p><i>padre</i> y <i>madre</i>. <i>hombre</i> y <i>mujer</i>. <i>caballo</i> y <i>yegua</i>. <i>toro</i> y <i>vaca</i>.</p><p>Y algunas cosas solo tienen un género: <i>la mesa</i>, <i>el lápiz</i>. No existe «el meso» ni «la lápiza». ¡Las cosas no tienen pareja!</p>`,
      svg: parejas("Padre y madre; caballo y yegua; toro y vaca", [["papa", "padre", "mama", "madre"], [null, "caballo", null, "yegua"], [null, "toro", "vaca", "vaca"]], { izq: "masculino", der: "femenino", color: A, color2: R, flecha: "↔" }),
      video: V("genB"),
    },
    {
      html: `<h3>Singular y plural</h3><p>El <mark>número</mark> nos dice si hay uno o muchos.</p><p>Si hay <b>uno</b>, la palabra está en <b>singular</b>: <i>la flor</i>, <i>el coche</i>.</p><p>Si hay <b>más de uno</b>, está en <b>plural</b>: <i>las flores</i>, <i>los coches</i>. Delante del plural ponemos <b>los</b>, <b>las</b>, <b>unos</b> o <b>unas</b>.</p>`,
      svg: cuantos("Una flor y muchas flores; un coche y muchos coches", [["flor", "la flor", "las flores", 3], ["coche", "el coche", "los coches", 3]], { izq: "singular", der: "plural", color: A, color2: Ve }),
    },
    {
      html: `<h3>Plural con -s</h3><p>Si la palabra termina en <mark>vocal</mark>, el plural se forma añadiendo <b>-s</b>.</p><p><i>casa → casa<b>s</b></i>, <i>libro → libro<b>s</b></i>, <i>gato → gato<b>s</b></i>, <i>pie → pie<b>s</b></i>.</p><p>Es lo más fácil y lo más frecuente. Mira la última letra: si es a, e, i, o, u, añade una s.</p>`,
      svg: cuantos("Libro libros, gato gatos", [["libro", "libro", "libros", 3], ["gato", "gato", "gatos", 3]], { izq: "termina en vocal", der: "+ s", color: A, color2: Ve }),
    },
    {
      html: `<h3>Plural con -es</h3><p>Si la palabra termina en <mark>consonante</mark>, el plural se forma con <b>-es</b>.</p><p><i>flor → flor<b>es</b></i>, <i>árbol → árbol<b>es</b></i>, <i>ratón → raton<b>es</b></i>, <i>tren → tren<b>es</b></i>.</p><p>¡Cuidado con la <b>z</b>! Cambia a <b>c</b>: <i>pez → pe<b>ces</b></i>, <i>lápiz → lápi<b>ces</b></i>.</p>`,
      svg: cuantos("Árbol árboles, pez peces", [["arbol", "árbol", "árboles", 3], ["pez", "pez", "peces", 3]], { izq: "termina en consonante", der: "+ es", color: A, color2: Ve }),
      video: V("genB2"),
    },
    {
      html: `<h3>Todas a juego</h3><p>En una frase, las palabras van <mark>a juego</mark>, como un uniforme.</p><p>Si el sustantivo es femenino plural, el artículo y el adjetivo también: <i><b>las</b> casa<b>s</b> blanc<b>as</b></i>.</p><p>Si es masculino singular: <i><b>el</b> perr<b>o</b> pequeñ<b>o</b></i>. Esto se llama <b>concordancia</b>. «Las casa blanco» suena muy raro, ¿verdad?</p>`,
      svg: frase("Las casas blancas; el perro pequeño", [["las", R], ["casas", R], ["blancas", R], ["/"], ["el", A], ["perro", A], ["pequeño", A]], { titulo: "Todas a juego", nota: "Mismo género y mismo número", fs: 24 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El género y el número nos dan <mark>información</mark>.</p><p>Si alguien dice «he visto <b>a las gatas</b>», sabemos que eran varias y hembras.</p><p>Si dice «<b>mi amigo</b>», sabemos que es un chico; si dice «<b>mis amigas</b>», varias chicas. ¡Con un solo final de palabra nos cuenta mucho!</p>`,
      svg: charla("Un niño dice que vienen sus amigas; la niña deduce que son varias chicas", [["nino", "Vienen mis amigas.", A], ["nina", "¿Varias chicas?", R], ["nino", "¡Sí! Lola y Rosa.", A], ["nina", "¡Lo dijo el final!", R]]),
    },
    {
      html: `<h3>Juego: el espejo mágico</h3><p>Un jugador dice una palabra: «el <b>gato</b>».</p><p>El otro es un <mark>espejo mágico</mark> que la cambia: primero a femenino (<i>la gata</i>), después a plural (<i>las gatas</i>).</p><p>Seguid con <i>el niño</i>, <i>el león</i>, <i>la flor</i>, <i>el pez</i>. ¿Quién se equivoca menos?</p>`,
      svg: lista("El espejo mágico: el gato, la gata, los gatos, las gatas", [["el gato", A], ["la gata", R], ["los gatos", Ve], ["las gatas", N]], { titulo: "El espejo mágico", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Género y número",
    svg: mural("Masculino el niño, femenino la niña, singular la flor, plural las flores", [["nino", "el niño", "masculino", A], ["nina", "la niña", "femenino", R], ["flor", "la flor", "singular: una", Ve], ["flor", "las flores", "plural: + s / + es", N]], "Artículo, sustantivo y adjetivo van siempre a juego"),
  },
  video: V("genV", "género y número para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Escribe el femenino de «pintor».",
      pasos: ["Termina en consonante: r.", "Añadimos una a.", "pintor + a."],
      resultado: "pintora." },
    { enunciado: "Escribe el plural de «luz».",
      pasos: ["Termina en z, una consonante.", "La z cambia a c.", "Añadimos -es."],
      resultado: "luces." },
    { enunciado: "Corrige: «los mesa rojo».",
      pasos: ["mesa es femenino: la mesa.", "Si son varias: las mesas.", "El adjetivo también: rojas."],
      resultado: "las mesas rojas." },
  ],
  errores: [
    "Poner el artículo que no toca: «el mesa» está mal; es «la mesa».",
    "Añadir solo -s a palabras con consonante: «flors» está mal; es «flores».",
    "Olvidar el cambio de z a c: es «peces», no «pezes».",
    "No hacer concordar el adjetivo: «las niñas contentos» está mal.",
  ],
  ejercicios: [
    { q: "Femenino de «abuelo».", sol: "abuela." },
    { q: "Femenino de «león».", sol: "leona." },
    { q: "Femenino de «padre».", sol: "madre." },
    { q: "¿El o la? «… pelota».", sol: "la pelota." },
    { q: "Plural de «casa».", sol: "casas." },
    { q: "Plural de «ratón».", sol: "ratones." },
    { q: "Plural de «lápiz».", sol: "lápices." },
    { q: "Singular de «árboles».", sol: "árbol." },
    { q: "Completa: «los perros …» (pequeño).", sol: "pequeños." },
    { q: "Haz el espejo mágico con «el niño».", sol: "la niña, los niños, las niñas." },
  ],
  quiz: [
    { q: "«La niña» está en…", o: ["masculino", "femenino", "plural"], a: 1, e: "Femenino singular." },
    { q: "Femenino de «gato»:", o: ["gata", "gatos", "gatito"], a: 0, e: "gata." },
    { q: "Femenino de «caballo»:", o: ["caballa", "yegua", "vaca"], a: 1, e: "yegua." },
    { q: "Plural de «libro»:", o: ["libroes", "libros", "libro"], a: 1, e: "Vocal + s." },
    { q: "Plural de «flor»:", o: ["flors", "flores", "floras"], a: 1, e: "Consonante + es." },
    { q: "Plural de «pez»:", o: ["pezes", "peces", "pezs"], a: 1, e: "z → c + es." },
    { q: "Delante de un masculino plural va…", o: ["los", "las", "la"], a: 0, e: "los." },
    { q: "¿Qué está bien?", o: ["la casa blanca", "la casa blanco", "el casa blanca"], a: 0, e: "Todo femenino." },
    { q: "«Unas flores» es…", o: ["singular", "plural", "masculino"], a: 1, e: "Muchas." },
    { q: "Femenino de «profesor»:", o: ["profesora", "profesoro", "profesores"], a: 0, e: "Se añade a." },
  ],
  examen: [
    { q: "Plural de «tren»:", o: ["trens", "trenes", "trenos"], a: 1, e: "trenes." },
    { q: "Femenino de «hombre»:", o: ["hombra", "mujer", "hombres"], a: 1, e: "mujer." },
    { q: "¿El o la? «… lápiz»", o: ["el", "la"], a: 0, e: "el lápiz." },
    { q: "Completa: «las niñas …»", o: ["contentos", "contentas", "contenta"], a: 1, e: "Femenino plural." },
  ],
  feynman: ["Cómo sabemos si una palabra es masculina o femenina", "Cómo se forma el plural", "Qué es la concordancia"],
  mapa: mapa("GÉNERO Y NÚMERO", "var(--pri)", [
    ["Masculino", "el, un: el niño", A],
    ["Femenino", "la, una: la niña", R],
    ["Plural + s", "vocal: casas, gatos", Ve],
    ["Plural + es", "consonante: flores, peces", N],
  ], 240),
  tarjetas: [
    ["Artículos masculinos", "el, un, los, unos"],
    ["Artículos femeninos", "la, una, las, unas"],
    ["Femenino de «niño»", "niña"],
    ["Femenino de «toro»", "vaca"],
    ["Plural de «mesa»", "mesas"],
    ["Plural de «árbol»", "árboles"],
    ["Plural de «luz»", "luces"],
    ["¿Qué es concordar?", "Que las palabras vayan a juego"],
  ],
  familias: [
    "Jugad al espejo mágico con animales de la granja.",
    "Al poner la mesa, contad en plural: los platos, las cucharas, los vasos.",
    "Buscad parejas de animales con nombres distintos: toro y vaca, caballo y yegua.",
    "Cuando diga «flors» o «pezes», repetid la palabra bien sin regañar.",
  ],
  profesores: PROF("Reflexión sobre la lengua: género y número del sustantivo, formación del femenino y del plural (-s, -es, z → c) y concordancia con artículo y adjetivo", ["Memory de parejas masculino/femenino.", "Caja de objetos para pasar de singular a plural.", "Detectives de concordancia en frases con errores."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer palabras que valen para los dos géneros", "Escribir bien el plural de palabras en z y en vocal con tilde", "Reconocer palabras que solo tienen singular o plural", "Usar el artículo adecuado"],
  lectura: { titulo: "La granja de los plurales", html: `<p>En la granja de la tía Elena viven muchos animales. Un día, Martín la visita y quiere contarlos todos.</p><p>—Hay un gallo y cinco gallinas —dice—. Un caballo y dos yeguas. Un toro y tres vacas.</p><p>—¿Y los patos? —pregunta su tía.</p><p>—Un pato y una pata, y siete patitos amarillos.</p><p>Después llegan al estanque.</p><p>—¡Mira, tía, un pez rojo! Y otro… ¡y otro! Hay muchos pezes.</p><p>—Peces —le corrige la tía, riendo—. Cuando la palabra acaba en z, en plural se escribe con c.</p><p>Al final del día, Martín se sienta en el banco junto a su tía, que es la veterinaria de la granja.</p><p>—Tía, ¿y tú eres «la veterinaria» o «el veterinario»?</p><p>—Yo soy la veterinaria. Mi compañero Luis es el veterinario. ¡Y los dos cuidamos a todos estos animales!</p><p>Martín apunta en su cuaderno todo lo que ha aprendido sobre los nombres de la granja.</p>` },
  tras: {
    "Palabras muy distintas": [
      ["Palabras que valen para los dos", `<p>Algunas palabras son <mark>iguales en masculino y en femenino</mark>. Solo cambia la palabra que va delante: el, la, un, una.</p><ul><li><b>el</b> estudiante / <b>la</b> estudiante.</li><li><b>el</b> artista / <b>la</b> artista.</li><li><b>el</b> dentista / <b>la</b> dentista.</li><li><b>el</b> cantante / <b>la</b> cantante.</li><li><b>el</b> policía / <b>la</b> policía.</li></ul><p>Con algunos animales pasa algo parecido: usamos la misma palabra para el macho y la hembra, y añadimos <b>macho</b> o <b>hembra</b>:</p><ul><li>la jirafa macho / la jirafa hembra.</li><li>el cocodrilo macho / el cocodrilo hembra.</li><li>la ballena, la hormiga, el mosquito…</li></ul><p>Antes, algunas profesiones solo se decían en masculino porque casi solo las hacían hombres. Hoy hombres y mujeres trabajan en todo, y por eso decimos la jueza, la médica o el enfermero sin problema.</p><p><b>Actividad</b>: escribe cinco profesiones que se dicen igual para hombres y mujeres.</p>`,
        L6.filas("Iguales", [["el / la", "estudiante", cAZ], ["el / la", "artista", cVE], ["jirafa", "macho/hembra", cNA], ["ballena", "macho/hembra", cRO]])],
    ],
    "Plural con -es": [
      ["Plurales especiales", `<p>Hay algunos <mark>plurales</mark> que necesitan un poco de atención:</p><ul><li>Palabras acabadas en <b>z</b>: la z cambia a c. pez → <b>peces</b>; lápiz → <b>lápices</b>; luz → <b>luces</b>.</li><li>Palabras acabadas en <b>í</b> o <b>ú</b> con tilde: añadimos -es. jabalí → <b>jabalíes</b>; bambú → <b>bambúes</b>.</li><li>Palabras que pierden la tilde: camión → <b>camiones</b>; ratón → <b>ratones</b>; autobús → <b>autobuses</b>.</li></ul><p>Esto último pasa porque, al añadir una sílaba, la palabra cambia y ya no necesita tilde. ¡Fíjate bien cuando escribas!</p><p>Un buen truco es decir la palabra en plural en voz alta y escuchar cuántas sílabas tiene: ca-mión, ca-mio-nes. ¡Una más!</p><p><b>Actividad</b>: escribe el plural de: nuez, avión, colibrí, cojín.</p>`,
        H6.flujo("pez", ["singular|pez", "+ es|pez-es", "z → c|", "plural|peces"], cAZ)],
    ],
    "Todas a juego": [
      ["Palabras con un solo número", `<p>Algunas palabras son un poco raras: siempre van en <mark>plural</mark>, aunque hablemos de una sola cosa.</p><ul><li>las <b>gafas</b>: «Me he puesto las gafas».</li><li>las <b>tijeras</b>.</li><li>los <b>pantalones</b> (aunque también se dice «el pantalón»).</li><li>las <b>vacaciones</b>.</li><li>los <b>alicates</b>.</li></ul><p>Otras no cambian: son <b>iguales en singular y en plural</b>. Solo lo sabemos por el artículo:</p><ul><li>el <b>lunes</b> / los <b>lunes</b>.</li><li>la <b>crisis</b> / las <b>crisis</b>.</li><li>el <b>paraguas</b> / los <b>paraguas</b>.</li><li>el <b>cumpleaños</b> / los <b>cumpleaños</b>.</li></ul><p>Si tienes dudas, piensa en cuántas cosas hay de verdad y mira la palabra que va delante. Ella te dará la respuesta.</p><p><b>Actividad</b>: completa con el o los: … paraguas está roto; … martes voy a natación.</p>`,
        H6.dos("Raras", ["PLURAL", ["gafas", "tijeras", "vacaciones"], cAZ], ["IGUALES", ["el/los lunes", "paraguas", "cumpleaños"], cVE])],
    ],
    "¿Para qué sirve?": [
      ["El artículo nos da la pista", `<p>Los <mark>artículos</mark> son palabras pequeñas que van delante del nombre. Nos dicen su género y su número:</p><ul><li><b>el</b>: masculino singular → el perro.</li><li><b>la</b>: femenino singular → la casa.</li><li><b>los</b>: masculino plural → los perros.</li><li><b>las</b>: femenino plural → las casas.</li></ul><p>También están <b>un, una, unos, unas</b>: un perro, una casa, unos perros, unas casas.</p><p>El artículo es como una pista: si no sabemos si una palabra es masculina o femenina, probamos con «el» y «la» y escuchamos cuál suena bien. ¿El mesa o la mesa? ¡La mesa!</p><p>Con palabras que valen para los dos, el artículo es lo único que cambia: <b>el</b> pianista, <b>la</b> pianista.</p><p>Los artículos nos ayudan mucho cuando leemos en voz alta, porque nos avisan de lo que viene después.</p><p><b>Actividad</b>: pon el artículo: … árboles, … nubes, … sol, … flor.</p>`,
        L6.filas("Artículos", [["el", "masc. sing.", cAZ], ["la", "fem. sing.", cRO], ["los", "masc. pl.", cNA], ["las", "fem. pl.", cVE]])],
    ],
  },
  final: [
    ["Familias de animales", `<p>Muchos animales tienen un nombre para el macho, otro para la hembra y otro para la <mark>cría</mark>:</p><ul><li>caballo, yegua → <b>potro</b>.</li><li>toro, vaca → <b>ternero</b>.</li><li>carnero, oveja → <b>cordero</b>.</li><li>gallo, gallina → <b>pollito</b>.</li><li>perro, perra → <b>cachorro</b>.</li><li>cerdo, cerda → <b>cochinillo</b> o lechón.</li></ul><p>Fíjate en que algunos cambian con o/a (perro, perra) y otros son palabras muy distintas (caballo, yegua).</p><p>Conocer estos nombres nos ayuda a hablar con precisión cuando vamos a una granja o leemos un libro de animales.</p><p>¡Y hay más! La cría de la cabra es el <b>cabrito</b>, la del burro es el <b>pollino</b> y la del león es el <b>cachorro</b>, igual que la del perro.</p><p><b>Actividad</b>: haz un mural de familias de animales con el padre, la madre y la cría.</p>`,
      L6.filas("Familias", [["caballo", "yegua → potro", cNA], ["toro", "vaca → ternero", cRO], ["carnero", "oveja → cordero", cAZ], ["gallo", "gallina → pollito", cVE]])],
    ["Repaso: la granja de Martín", `<p>Repasamos con la <mark>lectura</mark> de la granja:</p><ul><li>gallo / gallina: palabras con <b>o/a</b>.</li><li>caballo / yegua y toro / vaca: palabras <b>muy distintas</b>.</li><li>pato / pata: con o/a. Patitos: plural con <b>-s</b>.</li><li>pez → <b>peces</b>: la z cambia a c. Martín se equivocó al escribir «pezes».</li><li>la veterinaria / el veterinario: con o/a.</li></ul><p>Más preguntas:</p><ul><li>¿Cuál es el plural de «banco»? <b>Bancos</b>.</li><li>¿Y el femenino de «tío»? <b>Tía</b>.</li><li>Concordancia: «siete patitos <b>amarillos</b>»: masculino plural.</li></ul><p><b>Actividad</b>: escribe una lista de los animales de una granja con su artículo, en singular y en plural.</p>`,
      H6.rueda("Granja", "ANIMALES", [["gallo", cRO], ["yegua", cNA], ["pata", cAZ], ["peces", cVE]])],
  ],
  ejemplos: [
    ["Plural de «ratón».", ["Añado -es.", "Ya no necesita tilde."], "Ratones."],
    ["¿Masculino o femenino: «el / la estudiante»?", ["La palabra no cambia.", "Lo dice el artículo."], "Los dos: el estudiante y la estudiante."],
  ],
  errores: ["Escribir «pezes» o «luzes».", "Escribir «camiónes» con tilde."],
  ejercicios: [
    ["b", "Escribe el femenino de «dentista».", "La dentista."],
    ["b", "Plural de «luz».", "Luces."],
    ["b", "Di una palabra que siempre va en plural.", "Gafas, tijeras…"],
    ["b", "¿Qué artículo va con «flores»?", "Las."],
    ["b", "¿Cómo se llama la cría del caballo?", "Potro."],
    ["m", "Plural de: avión, nuez, cojín.", "Aviones, nueces, cojines."],
    ["m", "¿Cómo distingues «el paraguas» de «los paraguas»?", "Por el artículo."],
    ["m", "Femenino de «carnero».", "Oveja."],
    ["m", "Escribe dos animales que usan macho y hembra.", "Jirafa, ballena…"],
    ["m", "Pon el artículo: … árboles, … sol.", "Los árboles, el sol."],
    ["a", "En la lectura, ¿qué error comete Martín?", "Escribe «pezes» en lugar de «peces»."],
    ["a", "Explica por qué «camión» pierde la tilde en plural.", "Porque al añadir una sílaba ya no la necesita."],
    ["a", "Escribe una frase con «el cumpleaños» y otra con «los cumpleaños».", "Respuesta libre."],
    ["a", "Haz la familia (padre, madre, cría) del toro.", "Toro, vaca, ternero."],
  ],
  quiz: [
    ["El plural de «lápiz» es…", ["lápices", "lápizes", "lápiz"], "Plural."],
    ["«Artista» es…", ["igual en los dos géneros", "solo masculino", "solo femenino"], "Iguales."],
    ["«Gafas» va siempre en…", ["plural", "singular", "femenino singular"], "Raras."],
    ["«Los» es…", ["masculino plural", "femenino plural", "masculino singular"], "Artículo."],
    ["La cría de la oveja es el…", ["cordero", "potro", "ternero"], "Familias."],
  ],
  examen: [
    ["En la lectura, ¿qué es la tía Elena?", ["veterinaria", "granjera", "maestra"], "Lectura."],
    ["¿Qué pareja es de palabras muy distintas?", ["caballo / yegua", "gallo / gallina", "pato / pata"], "Repaso."],
  ],
  tarjetas: [
    ["Plural en z", "z → c: pez, peces."],
    ["Artículo", "el, la, los, las: dicen género y número."],
  ],
  glosario: [
    ["Género", "Masculino o femenino."],
    ["Número", "Singular o plural."],
    ["Artículo", "Palabra que va delante del nombre."],
    ["Macho", "Animal masculino."],
    ["Hembra", "Animal femenino."],
    ["Cría", "Animal recién nacido o pequeño."],
    ["Potro", "Cría del caballo."],
    ["Cordero", "Cría de la oveja."],
    ["Concordancia", "Que las palabras tengan el mismo género y número."],
    ["Veterinario", "Médico de animales."],
  ],
  situacion: {
    titulo: "La granja de clase",
    reto: "La clase crea una granja de cartulina con fichas de cada animal en masculino, femenino, singular y plural.",
    pasos: ["Elegir un animal por pareja y dibujar su familia.", "Escribir macho, hembra y cría con su artículo.", "Escribir los plurales, con cuidado en z y tildes.", "Montar la granja y presentarla."],
    producto: "Una granja ilustrada con fichas de animales.",
    evaluacion: ["Forma el femenino correctamente.", "Escribe plurales especiales.", "Usa el artículo adecuado.", "Conoce nombres de crías."],
  },
});
