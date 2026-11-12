// Lengua Castellana 1º de Primaria: ga, go, gu, gue, gui. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, trozos, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", G = "var(--muted)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Ga, go, gu, gue, gui",
  minutos: 20,
  objetivos: ["Leer y escribir ga, go, gu, gue y gui", "Saber que con e e i el sonido suave de la g lleva gu", "Distinguir gue, gui de ge, gi"],
  claves: ["ga", "go", "gu", "gue", "gui", "u muda"],
  pregunta: {
    texto: "Di «gato» y «guitarra». ¿Empiezan por el mismo sonido? ¿Qué letra de más tiene «guitarra»?",
    respuesta: "Empiezan por el <mark>mismo sonido suave</mark> de la g. Pero «guitarra» lleva una <b>u</b> después de la g que <b>no suena</b>.",
  },
  bloques: [
    {
      html: `<h3>El sonido suave de la g</h3><p>Escucha: <i>gato</i>, <i>goma</i>, <i>gusano</i>.</p><p>Todas empiezan con el <mark>sonido suave</mark> de la <b>g</b>. Es un sonido que sale de la garganta, como cuando hacemos gárgaras.</p><p>Pon la mano en el cuello y di «ga, ga, ga». Notarás que vibra un poquito. ¡Es la g trabajando!</p>`,
      svg: dibujos("Un gato, una goma y un gusano: empiezan por el sonido suave de la g", [["gato", s("ga|to"), K], ["goma", s("go|ma"), K], ["gusano", s("gu|sa|no"), K]], { titulo: "Sonido suave: ga, go, gu" }),
      video: vid("66QpUz18Ewk", "Sílabas ga go gu: El Mono Sílabo", "lunacreciente", 7501946, 42843),
    },
    {
      html: `<h3>Ga, go, gu</h3><p>Con las vocales <b>a</b>, <b>o</b> y <b>u</b>, escribimos <mark>g + vocal</mark>.</p><p>Así salen <b>ga</b>, <b>go</b>, <b>gu</b>. Es muy fácil: la g y la vocal, una detrás de otra.</p><p>Con ellas leemos <i>gallina</i>, <i>gorro</i>, <i>gorila</i>, <i>gusano</i> y <i>agua</i>. Lee despacio: ga-lli-na, go-rro, gu-sa-no. ¡Ya lees palabras con g! ¿Cuál es tu favorita?</p>`,
      svg: fichas("Las sílabas ga, go y gu", [["ga", R], ["go", A], ["gu", V]], { titulo: "g + a, o, u", nota: "gallina · gorro · gusano", grande: true }),
    },
    {
      html: `<h3>Gue, gui</h3><p>Con la <b>e</b> y la <b>i</b>, el sonido suave necesita ayuda. Ponemos una <mark>u</mark> entre la g y la vocal.</p><p>Así salen <b>gue</b> y <b>gui</b>.</p><p>Leemos <i>guitarra</i>, <i>juguete</i>, <i>hoguera</i> y <i>Miguel</i>. La u hace de escudo. Gracias a ella, la g sigue sonando suave.</p>`,
      svg: dibujos("Una guitarra, un juguete y un niño llamado Miguel", [["guitarra", s("gui|ta|rra"), K], ["juguete", s("ju|gue|te", R, 1), K], ["nino", s("Mi|guel", R, 1), K]], { titulo: "g + u + e, i" }),
      video: vid("1xbVpPOUkCI", "Sílabas ge gi gue gui: El Mono Sílabo", "lunacreciente", 7830196, 37285),
    },
    {
      html: `<h3>La u que no suena</h3><p>En <b>gue</b> y <b>gui</b>, la u <mark>no suena</mark>. Es muda, como en que y qui.</p><p>Decimos «gitarra» con sonido suave, aunque escribimos <i>guitarra</i>.</p><p>Al leer, saltamos la u. Al escribir, ¡no la olvidamos! Si la quitamos, la palabra se lee de otra forma.</p>`,
      svg: frase("En gue y gui la u va pero no suena", [["g", A], ["u", G], ["e", R], ["→", G], ["gue", V], ["/"], ["g", A], ["u", G], ["i", R], ["→", G], ["gui", V]], { titulo: "La u va, pero no suena", nota: "juguete · guitarra", fs: 24 }),
    },
    {
      html: `<h3>Cuidado con ge y gi</h3><p>¿Y si ponemos la g justo antes de la e o la i? Entonces <mark>suena fuerte</mark>, como la j.</p><p><b>ge</b> y <b>gi</b>: <i>gente</i>, <i>girasol</i>, <i>gigante</i>.</p><p>Por eso es importante la u. Fíjate en la diferencia: <i>gue</i> suena suave y <i>ge</i> suena fuerte. Una sola letra cambia el sonido.</p>`,
      svg: fichas("Ge y gi suenan fuerte como la jota; gue y gui suenan suave", [["ge", N], ["gi", N], ["gue", A], ["gui", A]], { titulo: "ge, gi ≠ gue, gui", nota: "gigante (fuerte) · guitarra (suave)", grande: true }),
    },
    {
      html: `<h3>La tabla del sonido suave</h3><p>Ya tenemos las <mark>cinco sílabas</mark> del sonido suave de la g.</p><p>Son <b>ga</b>, <b>gue</b>, <b>gui</b>, <b>go</b>, <b>gu</b>.</p><p>Tres se escriben solo con g. Dos llevan <b>gu</b>. ¿Te recuerda a otra tabla? ¡Sí! Es igual que ca, que, qui, co, cu. Las dos tablas son primas.</p>`,
      svg: fichas("Las cinco sílabas del sonido suave de la g: ga, gue, gui, go, gu", [["ga", R], ["gue", A], ["gui", A], ["go", R], ["gu", R]], { titulo: "Con g y con gu", nota: "rojo con g · azul con gu" }),
    },
    {
      html: `<h3>En medio de la palabra</h3><p>Estas sílabas también están <mark>en medio</mark> de muchas palabras.</p><p><i>a-<b>mi</b>-<b>go</b></i>, <i>tor-tu-<b>ga</b></i>, <i>a-<b>gua</b></i>, <i>ju-<b>gue</b>-te</i>.</p><p>Para encontrarlas, separa la palabra con palmadas. Luego escucha cada trozo. ¿Dónde suena la g suave? Así sabrás cómo escribirla. ¡Cuántas palabras con g hay escondidas!</p>`,
      svg: trozos("Tortuga, amigo y juguete separados en sílabas", [["tortuga", ["tor", "tu", "ga"], R], ["nino", ["a", "mi", "go"], A], ["juguete", ["ju", "gue", "te"], V]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer estas sílabas nos ayuda a <mark>leer y escribir bien</mark>.</p><p>Si escribimos «gitarra» sin u, alguien leería «jitarra». ¡Qué lío!</p><p>Con la u en su sitio, todos leen <i>guitarra</i>. Lo mismo pasa con <i>Miguel</i>, <i>juguete</i> y <i>hoguera</i>. Una letra pequeña hace un gran trabajo. ¡No te olvides de ella!</p>`,
      svg: dibujos("Guitarra escrita bien con u y mal sin u", [["guitarra", "guitarra ✓", V], ["guitarra", "gitarra ✗", R]], { titulo: "¿Con u o sin u?", nota: "Sin u, se leería «jitarra»" }),
    },
    {
      html: `<h3>Jugamos a las adivinanzas</h3><p>Escucha esta adivinanza y piensa:</p><p>«Tengo seis cuerdas y una caja de madera. Si me tocas, canto». ¿Qué es? <mark>¡La guitarra!</mark></p><p>Ahora tú: inventa una adivinanza de algo con <b>ga</b>, <b>go</b>, <b>gu</b>, <b>gue</b> o <b>gui</b>. Por ejemplo, un gato, un gorro o un juguete.</p>`,
      svg: charla("Adivinanza: seis cuerdas y caja de madera; es la guitarra", [["papa", "Seis cuerdas y una caja…", A], ["nina", "¿Es un violín?", R], ["papa", "Lleva «gui»…", A], ["nina", "¡La guitarra!", R]]),
    },
  ],
  figura: {
    titulo: "Las cinco sílabas del sonido suave de la g",
    svg: mural("Ga de gato, gue de juguete, gui de guitarra, go de goma, gu de gusano", [["gato", "ga", "gato", R], ["juguete", "gue", "juguete", A], ["guitarra", "gui", "guitarra", A], ["goma", "go", "goma", R], ["gusano", "gu", "gusano", R]], "Con a, o, u va g; con e, i va gu"),
  },
  video: { ...vid("wb216z5fBYc", "Aprende la letra G con el gorila Galileo", "Smile and Learn - Español", 2013690), busqueda: "ga go gu gue gui para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Se escribe «gerra» o «guerra»?",
      pasos: ["Di la palabra: suena suave, como en gato.", "La sílaba tiene la vocal e.", "Con e, el sonido suave lleva gu: gue."],
      resultado: "se escribe «guerra»." },
    { enunciado: "Busca la sílaba con g en «tortuga».",
      pasos: ["Da palmadas: tor-tu-ga.", "Escucha cada trozo.", "La g suena en el último: ga."],
      resultado: "la sílaba es «ga»." },
    { enunciado: "¿«Gigante» suena suave o fuerte?",
      pasos: ["Mira la primera sílaba: gi.", "No lleva u entre la g y la i.", "Entonces suena fuerte, como la j."],
      resultado: "suena fuerte: «jigante»." },
  ],
  errores: [
    "Escribir «gitarra» o «jugete» sin u: con e e i el sonido suave lleva gu.",
    "Leer la u de gue y gui: es muda.",
    "Confundir gui con gi: gi suena fuerte, como en girasol.",
    "Poner u con a, o, u, como «guato»: con esas vocales va solo g.",
  ],
  ejercicios: [
    { q: "Lee: ga, go, gu, gue, gui.", sol: "Con sonido suave y sin leer la u." },
    { q: "Completa: __to (ga o gue).", sol: "Gato." },
    { q: "Completa: __tarra (gui o gi).", sol: "Guitarra." },
    { q: "Completa: ju__te (gue o ge).", sol: "Juguete." },
    { q: "Completa: __sano (gu o gue).", sol: "Gusano." },
    { q: "¿Suena la u de «Miguel»?", sol: "No: es muda." },
    { q: "Di tres palabras con «go».", sol: "Por ejemplo: goma, gorro, gorila." },
    { q: "Separa en sílabas «amigo».", sol: "a-mi-go." },
    { q: "¿Suena suave o fuerte «girasol»?", sol: "Fuerte, como la j." },
    { q: "Inventa una adivinanza de un gato.", sol: "Por ejemplo: «Tengo bigotes, digo miau y me gusta el pescado»." },
  ],
  quiz: [
    { q: "¿Cómo se escribe?", o: ["gitarra", "guitarra", "guitara"], a: 1, e: "gui con u." },
    { q: "¿Cómo se escribe?", o: ["gato", "guato", "jato"], a: 0, e: "Con a va solo g." },
    { q: "¿Qué sílaba lleva «juguete»?", o: ["ge", "gue", "gu"], a: 1, e: "ju-gue-te." },
    { q: "En «gui», la u…", o: ["no suena", "suena fuerte", "es una tilde"], a: 0, e: "Es muda." },
    { q: "«Ge» suena…", o: ["suave", "fuerte, como j", "como k"], a: 1, e: "gente, gigante." },
    { q: "¿Qué sílaba falta? ga, gue, __, go, gu", o: ["gi", "gui", "ji"], a: 1, e: "ga, gue, gui, go, gu." },
    { q: "¿Cuál suena suave?", o: ["gi", "ge", "go"], a: 2, e: "go siempre suave." },
    { q: "Separa «tortuga»:", o: ["tor-tu-ga", "tort-u-ga", "to-rtu-ga"], a: 0, e: "tor-tu-ga." },
    { q: "¿Cómo se escribe el nombre?", o: ["Migel", "Miguel", "Mijel"], a: 1, e: "Mi-guel." },
    { q: "¿Qué palabra tiene «ga»?", o: ["gallina", "gorro", "gusano"], a: 0, e: "ga-lli-na." },
  ],
  examen: [
    { q: "¿Cómo se escribe?", o: ["hoguera", "hogera", "hojera"], a: 0, e: "gue con u." },
    { q: "¿Cuál suena fuerte?", o: ["gue", "gi", "ga"], a: 1, e: "gi, como en girasol." },
    { q: "¿Cómo se escribe?", o: ["goma", "guoma", "joma"], a: 0, e: "Con o va solo g." },
    { q: "¿Para qué sirve la u en «gui»?", o: ["Para que la g suene suave", "Para que suene fuerte", "Para nada"], a: 0, e: "Hace de escudo." },
  ],
  feynman: ["Cuándo escribimos solo g", "Cuándo escribimos gu", "Por qué ge y gi suenan distinto que gue y gui"],
  mapa: mapa("SONIDO SUAVE DE LA G", "var(--pri)", [
    ["ga, go, gu", "gato, goma, gusano", R],
    ["gue, gui", "juguete, guitarra", A],
    ["u muda", "gui = «gi» suave", V],
    ["¡Ojo!", "ge, gi suenan fuerte", N],
  ], 220),
  tarjetas: [
    ["¿Qué va con a, o, u?", "Solo g: ga, go, gu"],
    ["¿Qué va con e, i?", "gu: gue, gui"],
    ["¿Suena la u de «guitarra»?", "No, es muda"],
    ["Escribe bien «jugete»", "Juguete"],
    ["Una palabra con «go»", "Goma, gorro, gorila"],
    ["Una palabra con «gui»", "Guitarra, Miguel"],
    ["¿Cómo suena «gi»?", "Fuerte, como j: girasol"],
    ["La tabla del sonido suave", "ga, gue, gui, go, gu"],
  ],
  familias: [
    "Jugad a adivinanzas de cosas con ga, go, gu, gue, gui: gato, gorro, guitarra.",
    "Cantad la tabla «ga, gue, gui, go, gu» como si fuera una canción.",
    "Si escribe «gitarra», preguntadle: «¿Suena suave o fuerte? ¿Qué le falta?».",
    "Buscad palabras con estas sílabas en los cuentos y en los juguetes de casa.",
  ],
  profesores: PROF("Ortografía natural: correspondencia del fonema /g/ con las grafías g y gu; sílabas ga, go, gu, gue, gui y la u muda; contraste con ge, gi", ["Tabla de doble entrada g/gu con dibujos.", "Clasificar palabras con sonido suave y fuerte.", "Adivinanzas de objetos con estas sílabas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
