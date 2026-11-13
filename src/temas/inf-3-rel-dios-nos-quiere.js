// Infantil 3 años · Religión: Dios nos quiere. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, lista, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Religión",
  curso: "3-anos",
  titulo: "Dios nos quiere",
  minutos: 10,
  objetivos: ["Saber que Dios nos quiere a todos", "Ver el cariño de Dios en la familia y los amigos", "Dar las gracias con una oración sencilla"],
  claves: ["Dios", "quiere", "cariño", "gracias", "rezar", "todos"],
  pregunta: {
    texto: "¿Quién te quiere mucho? ¿Cómo sabes que te quiere?",
    respuesta: "Te quieren tu familia y tus amigos. Los cristianos creen que <mark>Dios nos quiere</mark> a todos, ¡siempre!",
  },
  bloques: [
    {
      html: `<h3>Dios nos quiere</h3><p>Los cristianos dicen que <mark>Dios nos quiere</mark> mucho.</p><p>Quiere a los niños y a las niñas. A los mayores y a los pequeños. ¡A todos!</p>`,
      svg: escena("Un corazón grande con niños y mayores dentro", [["corazon", 130, 80, 4], ["nino", 108, 72, 0.9], ["nina", 152, 72, 0.9], ["t", 130, 166, "¡A todos!", R, 24]]),
    },
    {
      html: `<h3>Me quiere como soy</h3><p>Dios me quiere <mark>como soy</mark>.</p><p>Alto o bajito. Rubio o moreno. Cuando estoy contento y cuando estoy triste. ¡Siempre me quiere!</p><p>Nos quiere aunque nos equivoquemos o estemos enfadados.</p>`,
      svg: dibujos("Dios me quiere contento y triste, como soy", [["feliz", "contento", N], ["triste", "triste", A], ["corazon", "siempre", R]], { titulo: "Como soy" }),
    },
    {
      html: `<h3>El cariño de la familia</h3><p>Mamá y papá me <mark>abrazan</mark>. Los abuelos me cuentan cuentos.</p><p>Los cristianos dicen que el cariño de la familia es un regalo de Dios.</p><p>¿Quién te da abrazos en casa? Dilo en voz alta.</p>`,
      svg: dibujos("La familia me quiere: mamá, papá y la abuela", [["mama", "mamá", R], ["papa", "papá", A], ["abuela", "abuela", V]], { titulo: "Mi familia me quiere" }),
    },
    {
      html: `<h3>Damos las gracias</h3><p>Hablar con Dios es <mark>rezar</mark>.</p><p>Juntamos las manos y decimos: «Gracias, Dios mío, por mi familia y mis amigos». ¡Es muy fácil!</p><p>Podemos rezar al despertar, antes de comer y antes de dormir.</p>`,
      svg: escena("Una niña junta las manos y da gracias", [["nina", 90, 80, 2], ["mano", 90, 140, 1], ["t", 196, 70, "¡Gracias!", R, 24], ["corazon", 196, 116, 1.4]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si sé que me quieren, estoy <mark>tranquilo y feliz</mark>.</p><p>Y yo también quiero a los demás. Comparto, ayudo y doy abrazos.</p><p>Cuando alguien está triste, le damos un abrazo grande.</p>`,
      svg: lista("Yo también quiero: comparto, ayudo y doy abrazos", [["Comparto", A], ["Ayudo", V], ["Doy abrazos", R]], { titulo: "Yo también quiero", marca: "♥" }),
    },
    {
      html: `<h3>Jugamos al abrazo</h3><p>Nos ponemos en corro. Uno dice: <mark>«Te quiero»</mark> y da un abrazo al de al lado.</p><p>El abrazo pasa por todo el corro. ¡Nadie se queda sin abrazo!</p>`,
      svg: escena("Niños en corro pasándose un abrazo", [["nino", 50, 90, 1.4], ["nina", 103, 90, 1.4], ["nino", 157, 90, 1.4], ["nina", 210, 90, 1.4], ["corazon", 76, 52, 0.8], ["corazon", 130, 52, 0.8], ["corazon", 184, 52, 0.8], ["t", 130, 156, "Te quiero", R, 22]]),
    },
  ],
  figura: {
    titulo: "Dios nos quiere",
    svg: mural("Dios nos quiere: a todos, como soy, en la familia, damos gracias", [["corazon", "a todos", "niños y mayores", R], ["feliz", "como soy", "siempre", N], ["mama", "familia", "su cariño", A], ["mano", "gracias", "rezamos", V]], "Dios nos quiere"),
  },
  video: { ...vid("4rajkLYioyI", "Dios Me Ama · El Show De Canta y Ríe", "Patito Juan", 954360), busqueda: "Dios me ama canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Damos las gracias antes de dormir.",
      pasos: ["Juntamos las manos.", "Pensamos en alguien que nos quiere.", "Decimos gracias."],
      resultado: "«Gracias, Dios mío, por mi mamá.»" },
    { enunciado: "Un amigo está triste. ¿Qué hacemos?",
      pasos: ["Le miramos.", "Le preguntamos qué le pasa.", "Le damos un abrazo."],
      resultado: "Le demostramos que le queremos." },
  ],
  errores: [
    "Pensar que Dios solo quiere a los buenos: los cristianos dicen que quiere a todos.",
    "Pensar que rezar es difícil: basta con hablar desde el corazón.",
    "Querer solo a algunos amigos y dejar fuera a otros.",
  ],
  ejercicios: [
    { q: "Di el nombre de tres personas que te quieren.", sol: "Para la familia: ayudadle a pensar en familia, amigos y maestras." },
    { q: "Dibuja un corazón grande.", sol: "Que dibuje dentro a las personas que quiere." },
    { q: "Junta las manos y di gracias.", sol: "Una oración corta antes de dormir." },
    { q: "Da un abrazo a alguien de tu familia.", sol: "Decidle que le queréis." },
    { q: "Ayuda en casa en algo pequeño.", sol: "Poner la servilleta o recoger un juguete: querer es ayudar." },
    { q: "Canta la canción del vídeo.", sol: "Cantadla juntos con gestos." },
  ],
  quiz: [
    { q: "Los cristianos dicen que Dios quiere…", o: ["a todos", "a nadie", "solo a los mayores"], a: 0, e: "A todos." },
    { q: "Hablar con Dios es…", o: ["rezar", "correr", "dormir"], a: 0, e: "Rezar." },
    { q: "Para rezar podemos juntar…", o: ["las manos", "los zapatos", "los juguetes"], a: 0, e: "Las manos." },
    { q: "Dios me quiere…", o: ["siempre", "solo los lunes", "nunca"], a: 0, e: "Siempre." },
    { q: "Si quiero a alguien…", o: ["le ayudo", "le pego", "le grito"], a: 0, e: "Le ayudo y le abrazo." },
    { q: "Al rezar podemos decir…", o: ["gracias", "¡vete!", "nada"], a: 0, e: "Gracias." },
  ],
  examen: [
    { q: "El cariño de la familia es…", o: ["un regalo", "un castigo", "un juguete"], a: 0, e: "Un regalo." },
    { q: "Dios me quiere cuando estoy…", o: ["contento y triste", "solo contento", "solo dormido"], a: 0, e: "Siempre, como soy." },
    { q: "En el juego del abrazo…", o: ["nadie se queda fuera", "solo uno gana", "nos enfadamos"], a: 0, e: "Todos reciben un abrazo." },
  ],
  feynman: ["Dios nos quiere a todos", "Me quiere como soy", "Rezar es hablar con Dios y dar gracias"],
  mapa: mapa("DIOS NOS QUIERE", "var(--inf)", [
    ["A todos", "niños y mayores", R],
    ["Como soy", "siempre", N],
    ["Familia", "su cariño", A],
    ["Gracias", "rezamos", V],
  ], 230),
  tarjetas: [
    ["¿A quién quiere Dios?", "A todos"],
    ["¿Cuándo me quiere?", "Siempre"],
    ["Hablar con Dios es…", "Rezar"],
    ["Al rezar decimos…", "Gracias"],
    ["Si quiero a alguien…", "Le ayudo"],
    ["El cariño de la familia es…", "Un regalo"],
  ],
  familias: [
    "Antes de dormir, dad gracias juntos por algo bonito del día.",
    "Decidle a menudo que le queréis tal como es.",
    "Abrazos y besos: el cariño se aprende recibiéndolo.",
    "Animadle a ayudar en cosas pequeñas de casa.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: Dios Padre nos quiere, el amor de la familia como reflejo de su amor, primera oración de acción de gracias", ["Corazón gigante con las fotos de la clase.", "Oración de gracias en la asamblea.", "Juego del abrazo en corro."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
