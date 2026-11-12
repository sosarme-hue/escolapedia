// Inglés 1º de Primaria: My family. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "My family",
  minutos: 20,
  objetivos: ["Nombrar a los miembros de la familia en inglés", "Presentar a alguien: This is my mum", "Decir si tienes hermanos: I have a brother"],
  claves: ["family", "mum", "dad", "brother", "sister", "grandma", "grandpa", "baby", "This is my…"],
  pregunta: {
    texto: "¿Quién vive contigo en casa? ¿Sabes cómo se dice «mamá» o «papá» en inglés?",
    respuesta: "Mamá se dice <mark>mum</mark> y papá se dice <mark>dad</mark>. Toda la familia junta es la <b>family</b>.",
  },
  bloques: [
    {
      html: `<h3>My family</h3><p>La familia en inglés se dice <mark>family</mark>. Se pronuncia «fámili».</p><p>Cada familia es distinta. Unas son grandes y otras pequeñas. En unas hay una mamá. En otras hay dos papás. A veces nos cuida una abuela.</p><p>Lo importante es que nos queremos. Para hablar de la nuestra decimos <b>my family</b>: mi familia.</p>`,
      svg: vocab("Una familia: mum, dad y baby", [["mama", "mum", "mamá", R], ["papa", "dad", "papá", A], ["bebe", "baby", "bebé", V]], { titulo: "My family" }),
    },
    {
      html: `<h3>Mum and dad</h3><p>A la mamá la llamamos <mark>mum</mark> o <b>mummy</b>. Se dice «mam» o «mámi».</p><p>Al papá lo llamamos <mark>dad</mark> o <b>daddy</b>. Se dice «dad» o «dádi».</p><p>Para hablar de los dos juntos decimos <b>parents</b>, que significa «padres». Cuando llegues a casa, saluda en inglés: <b>Hello, mum! Hello, dad!</b></p>`,
      svg: charla("Un niño saluda Hello mum, hello dad, y la madre responde Hello, darling", [["nino", "Hello, mum! Hello, dad!", A], ["mama", "Hello, darling!", R]]),
    },
    {
      html: `<h3>Brother and sister</h3><p>El hermano en inglés es <mark>brother</mark>. Se dice «bráder».</p><p>La hermana es <mark>sister</mark>. Se dice «síster».</p><p>Si tienes un hermano, dices <b>I have a brother</b>. Si tienes una hermana, <b>I have a sister</b>. Si no tienes hermanos, puedes decir <b>I'm an only child</b>. ¡También está muy bien!</p>`,
      svg: vocab("Hermanos: brother es hermano y sister es hermana", [["nino", "brother", "hermano", A], ["nina", "sister", "hermana", R]], { titulo: "Brothers and sisters" }),
    },
    {
      html: `<h3>Grandma and grandpa</h3><p>La abuela es <mark>grandma</mark> y el abuelo es <mark>grandpa</mark>.</p><p>Se pronuncian «grándma» y «grándpa». También se dice <b>granny</b> para la abuela.</p><p>Los abuelos son los padres de mamá o de papá. Nos cuentan historias y juegan con nosotros. ¡Mándales un beso en inglés: <b>I love you, grandma!</b></p>`,
      svg: vocab("Abuelos: grandma es abuela y grandpa es abuelo", [["abuela", "grandma", "abuela", N], ["abuelo", "grandpa", "abuelo", V]], { titulo: "Grandparents" }),
    },
    {
      html: `<h3>This is my…</h3><p>Para presentar a alguien decimos <mark>This is my…</mark> Significa «Este es mi…» o «Esta es mi…».</p><p>Por ejemplo: <b>This is my mum</b>. <b>This is my brother</b>.</p><p>Es muy útil cuando enseñas una foto. Señala a cada persona y preséntala. Tu amigo puede contestar: <b>Hello! Nice to meet you!</b></p>`,
      svg: charla("Una niña presenta a su madre: This is my mum. Hello, nice to meet you", [["nina", "This is my mum.", R], ["mama", "Hello!", R], ["nino", "Nice to meet you!", A]]),
      video: vid("ii_LtHrEiao", "Sesame Street: Family Song", "Sesame Street", 33828760, 47362),
    },
    {
      html: `<h3>Who is this?</h3><p>Para preguntar «¿Quién es?» decimos <mark>Who is this?</mark></p><p>La respuesta empieza con <b>This is…</b> o <b>It's…</b> Por ejemplo: <b>It's my grandpa</b>.</p><p>Fíjate: <b>who</b> se pronuncia «ju». ¡No se oye la w! Haz un álbum de fotos de tu familia. Luego, juega a preguntar <b>Who is this?</b></p>`,
      svg: charla("Un niño pregunta Who is this y una niña contesta It's my grandpa", [["nino", "Who is this?", A], ["abuelo", "Hello there!", V], ["nina", "It's my grandpa!", R]]),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Hay palabras de la familia con <mark>sonidos especiales</mark>.</p><p>En <b>brother</b> y <b>mother</b>, la «th» suena como la z de «zapato», pero suave. Se pone la lengua entre los dientes.</p><p><b>Mum</b> se dice «mam», con una a corta. Mira la boca de tu teacher y copia los sonidos. ¡Es como un juego de imitar!</p>`,
      svg: lista("Cómo suenan: brother bráder, mum mam, who ju", [["brother → «bráder»", A], ["mum → «mam»", R], ["who → «ju»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hablar de la familia es <mark>uno de los primeros temas</mark> en cualquier idioma.</p><p>Cuando conoces a alguien nuevo, le cuentas quién vive contigo. Si tienes primos en otro país, podrás presentarles a tu familia.</p><p>Además, muchos cuentos en inglés hablan de familias. Con estas palabras ya los entenderás mejor.</p>`,
      svg: vocab("Para qué sirve: presentar, contar cuentos y querer", [["nina", "introduce", "presentar", A], ["libro", "stories", "cuentos", V], ["corazon", "love", "querer", R]], { titulo: "Family words are for…" }),
    },
    {
      html: `<h3>Jugamos a la familia de dedos</h3><p>Es una canción muy conocida: <mark>Finger family</mark>. Cada dedo de la mano es alguien de la familia.</p><p>El pulgar es <b>daddy</b>. El índice es <b>mummy</b>. El corazón es <b>brother</b>. El anular es <b>sister</b>. El meñique es <b>baby</b>.</p><p>Mueve cada dedo y di su nombre. Luego pregunta: <b>Where are you?</b></p>`,
      svg: vocab("La familia de los dedos: daddy es el pulgar, mummy el índice, brother el corazón, sister el anular, baby el meñique", [["papa", "daddy", "pulgar", A], ["mama", "mummy", "índice", R], ["nino", "brother", "corazón", V], ["nina", "sister", "anular", N], ["bebe", "baby", "meñique", A]], { titulo: "Finger family" }),
    },
  ],
  figura: {
    titulo: "My family: mi familia en inglés",
    svg: mural("La familia en inglés: mum, dad, brother, sister", [["mama", "mum", "mamá", R], ["papa", "dad", "papá", A], ["nino", "brother", "hermano", V], ["nina", "sister", "hermana", N]], "This is my family!"),
  },
  video: { ...vid("yDua9ms9_eg", "The People In My Family | Mother Father Sister Brother and more!", "Super Simple Songs - Kids Songs", 23919917), busqueda: "family song for kids english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Enseña una foto de tu madre y preséntala.",
      pasos: ["Para presentar usamos This is my…", "Madre en inglés es mum.", "Junta las dos partes."],
      resultado: "«This is my mum.»" },
    { enunciado: "Di que tienes una hermana.",
      pasos: ["Tengo se dice I have.", "Una es a; hermana es sister.", "Junta: I have a sister."],
      resultado: "«I have a sister.»" },
    { enunciado: "Te enseñan una foto y preguntan Who is this? Es tu abuelo.",
      pasos: ["Who is this? = ¿Quién es?", "Abuelo en inglés es grandpa.", "Contesta con It's my…"],
      resultado: "«It's my grandpa!»" },
  ],
  errores: [
    "Pronunciar la th de brother como una t: se pone la lengua entre los dientes.",
    "Confundir brother (hermano) con sister (hermana).",
    "Leer who como «gu»: se dice «ju».",
    "Decir «I have brother» sin la a: se dice I have a brother.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «familia» en inglés?", sol: "Family." },
    { q: "¿Cómo se dice «mamá»?", sol: "Mum (o mummy)." },
    { q: "¿Cómo se dice «papá»?", sol: "Dad (o daddy)." },
    { q: "¿Qué es un brother?", sol: "Un hermano." },
    { q: "¿Qué es una sister?", sol: "Una hermana." },
    { q: "Di «abuela» y «abuelo» en inglés.", sol: "Grandma and grandpa." },
    { q: "Presenta a tu padre en inglés.", sol: "This is my dad." },
    { q: "Pregunta en inglés «¿Quién es?».", sol: "Who is this?" },
    { q: "Di si tienes hermanos en inglés.", sol: "I have a brother / I have a sister / I'm an only child." },
    { q: "Canta la canción Finger family con tus dedos.", sol: "Daddy, mummy, brother, sister, baby." },
  ],
  quiz: [
    { q: "«Mum» es…", o: ["mamá", "papá", "abuela"], a: 0, e: "Mum = mamá." },
    { q: "«Dad» es…", o: ["hermano", "papá", "bebé"], a: 1, e: "Dad = papá." },
    { q: "«Sister» es…", o: ["hermana", "abuela", "tía"], a: 0, e: "Sister = hermana." },
    { q: "«Hermano» en inglés es…", o: ["baby", "brother", "grandpa"], a: 1, e: "Brother = hermano." },
    { q: "«Grandma» es…", o: ["abuela", "mamá", "hermana"], a: 0, e: "Grandma = abuela." },
    { q: "«Grandpa» es…", o: ["papá", "abuelo", "hermano"], a: 1, e: "Grandpa = abuelo." },
    { q: "«Baby» es…", o: ["bebé", "perro", "amigo"], a: 0, e: "Baby = bebé." },
    { q: "«This is my dad» significa…", o: ["Este es mi papá", "Hola, papá", "¿Dónde está papá?"], a: 0, e: "This is my… = este es mi…" },
    { q: "«Who is this?» significa…", o: ["¿Qué es?", "¿Quién es?", "¿Cuántos hay?"], a: 1, e: "Who = quién." },
    { q: "«Family» es…", o: ["familia", "fábrica", "fiesta"], a: 0, e: "Family = familia." },
  ],
  examen: [
    { q: "Presenta a tu mamá:", o: ["This is my mum.", "Goodbye, mum.", "I'm mum."], a: 0, e: "This is my mum." },
    { q: "«I have a brother» significa…", o: ["Tengo un hermano", "Soy un hermano", "Mi hermano es grande"], a: 0, e: "I have = tengo." },
    { q: "La madre de tu madre es tu…", o: ["grandma", "sister", "baby"], a: 0, e: "Grandma = abuela." },
    { q: "Contesta: Who is this? (tu hermana)", o: ["It's my sister.", "It's red.", "It's a pencil."], a: 0, e: "It's my sister." },
  ],
  feynman: ["Cómo se llaman en inglés las personas de la familia", "Cómo presentar a alguien con This is my…", "Cómo preguntar quién es alguien"],
  mapa: mapa("MY FAMILY", "var(--pri)", [
    ["Parents", "mum, dad", R],
    ["Brothers and sisters", "brother, sister, baby", A],
    ["Grandparents", "grandma, grandpa", V],
    ["Present", "This is my mum.", N],
  ], 230),
  tarjetas: [
    ["familia", "family"],
    ["mamá / papá", "mum / dad"],
    ["hermano", "brother"],
    ["hermana", "sister"],
    ["abuela / abuelo", "grandma / grandpa"],
    ["bebé", "baby"],
    ["Este es mi…", "This is my…"],
    ["¿Quién es?", "Who is this?"],
  ],
  familias: [
    "Mirad fotos de la familia y presentad a cada persona: This is my grandma.",
    "Llamaos por un rato en inglés en casa: mum, dad, brother, sister.",
    "Cantad juntos Finger family con los dedos de la mano.",
    "Recordad que hay muchos tipos de familias y todas son valiosas.",
  ],
  profesores: PROF("Lengua extranjera: léxico de la familia; presentar a otros con This is my…; preguntar Who is this?; respeto a la diversidad de modelos familiares", ["Álbum de fotos o dibujos de la familia con presentación oral.", "Canción Finger family con títeres de dedo.", "Juego de adivinar Who is this? con siluetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
