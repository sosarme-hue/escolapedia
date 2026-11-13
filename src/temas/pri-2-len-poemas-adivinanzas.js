// Lengua Castellana 2º de Primaria: poemas, retahílas y adivinanzas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Poemas, retahílas y adivinanzas",
  minutos: 25,
  objetivos: ["Reconocer un poema por sus versos, estrofas y rimas", "Recitar retahílas y trabalenguas con ritmo", "Resolver e inventar adivinanzas"],
  claves: ["poema", "verso", "estrofa", "rima", "retahíla", "trabalenguas", "adivinanza"],
  pregunta: {
    texto: "«Blanco por dentro, verde por fuera; si quieres que te lo diga, espera.» ¿Qué es?",
    respuesta: "¡La <b>pera</b>! Es una <mark>adivinanza</mark>: un juego de palabras con rima que esconde la respuesta. Fíjate: «es-<b>pera</b>».",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un poema?</h3><p>Un <mark>poema</mark> es un texto escrito para que <b>suene bonito</b>.</p><p>Se escribe en <b>líneas cortas</b> que no llegan al final de la página. Cada línea se llama <b>verso</b>.</p><p>Los poemas hablan de cosas que sentimos o vemos: la luna, el mar, un amigo, el otoño… ¡Se leen despacio y con cariño!</p>`,
      svg: frase("Versos de un poema: La luna es redonda, la luna es de plata", [["La luna es redonda,", A], ["/"], ["la luna es de plata,", A], ["/"], ["y cuelga en el cielo", A], ["/"], ["como una corbata.", A]], { titulo: "Cada línea es un verso", fs: 18 }),
      video: V("poeV", "poemas para niños de primaria"),
    },
    {
      html: `<h3>Versos y estrofas</h3><p>Los versos se juntan en grupos. Cada grupo de versos se llama <mark>estrofa</mark>.</p><p>Entre una estrofa y otra dejamos un <b>espacio en blanco</b>, como un pequeño descanso.</p><p>Para contar las estrofas, cuenta los grupos. Para contar los versos, cuenta las líneas. ¡Es como contar vagones y trenes!</p>`,
      svg: lista("Un poema con dos estrofas; cada estrofa tiene versos", [["Estrofa 1: verso, verso", A], ["verso, verso", A], ["Estrofa 2: verso, verso", Ve], ["verso, verso", Ve]], { titulo: "2 estrofas de 4 versos", marca: "•" }),
    },
    {
      html: `<h3>La rima</h3><p>Muchos poemas tienen <mark>rima</mark>: los versos terminan con un <b>sonido parecido</b>.</p><p><i>plat<b>a</b></i> rima con <i>corbat<b>a</b></i>. <i>rat<b>ón</b></i> rima con <i>camión</i> y <i>canción</i>.</p><p>Para buscar rimas, fíjate en el final: desde la vocal que suena más fuerte. <i>Gato</i> rima con <i>pato</i> y <i>zapato</i>. ¡Inventa tú más!</p>`,
      svg: parejas("Gato rima con pato; ratón rima con canción; luna rima con cuna", [["gato", "gato", "pato", "pato"], ["raton", "ratón", "guitarra", "canción"], ["luna", "luna", "cuna", "cuna"]], { izq: "palabra", der: "rima", color: A, color2: R, flecha: "♪" }),
    },
    {
      html: `<h3>Recitar con ritmo</h3><p><mark>Recitar</mark> es decir un poema en voz alta, de memoria o leyendo.</p><p>Para recitar bien: habla <b>despacio</b> y <b>claro</b>. Haz una pausa pequeña al final de cada verso y una más larga entre estrofas.</p><p>Pon emoción: alegre si el poema es alegre, suave si habla de la noche. ¡Mira al público y sonríe!</p>`,
      svg: lista("Para recitar: despacio, pausa en cada verso, con emoción, mirando al público", [["Despacio y claro", A], ["Pausa en cada verso", Ve], ["Con emoción", R], ["Mira al público", N]], { titulo: "Para recitar bien", marca: "✓" }),
    },
    {
      html: `<h3>Las retahílas</h3><p>Una <mark>retahíla</mark> es una cadena de palabras con ritmo que se dice de memoria. Sirve para jugar o para echar a suertes.</p><p>«<i>Pito, pito, gorgorito, ¿dónde vas tú tan bonito?</i>»</p><p>«<i>Una, dona, tena, catena…</i>» Las retahílas pasan de abuelos a nietos. ¿Conoces alguna?</p>`,
      svg: frase("Retahíla: Pito, pito, gorgorito, ¿dónde vas tú tan bonito?", [["Pito, pito,", R], ["gorgorito,", R], ["/"], ["¿dónde vas tú", A], ["tan bonito?", A]], { titulo: "Para echar a suertes", fs: 22 }),
      video: V("poeB"),
    },
    {
      html: `<h3>Los trabalenguas</h3><p>Un <mark>trabalenguas</mark> es una frase difícil de decir rápido, porque repite sonidos parecidos.</p><p>«<i>Tres tristes tigres tragaban trigo en un trigal.</i>»</p><p>«<i>Pablito clavó un clavito. ¿Qué clavito clavó Pablito?</i>» Empieza despacio y ve más rápido. ¡Te reirás si se te traba la lengua!</p>`,
      svg: frase("Trabalenguas: Tres tristes tigres tragaban trigo en un trigal", [["Tres tristes tigres", N], ["/"], ["tragaban trigo", N], ["/"], ["en un trigal", N]], { titulo: "¡Dilo rápido!", fs: 22 }),
    },
    {
      html: `<h3>Las adivinanzas</h3><p>Una <mark>adivinanza</mark> describe algo <b>sin decir su nombre</b>. Tú tienes que adivinarlo.</p><p>Suelen tener rima y dar pistas: el color, la forma, para qué sirve.</p><p>«<i>Tengo agujas y no sé coser; tengo números y no sé leer.</i>» ¿Qué es? ¡El <b>reloj</b>! A veces la respuesta se esconde dentro de las palabras.</p>`,
      svg: dibujos("Adivinanza: tengo agujas y no sé coser, tengo números y no sé leer: el reloj", [["interrogacion", "¿Qué es?", A], ["reloj", "¡el reloj!", R]], { titulo: "Agujas y números…", nota: "Tiene agujas y números, pero no cose ni lee" }),
      video: V("poeB2"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los poemas, retahílas y adivinanzas son <mark>juegos con palabras</mark>.</p><p>Nos ayudan a <b>memorizar</b>, a pronunciar mejor y a descubrir palabras nuevas.</p><p>Además, son perfectos para compartir: en una fiesta, en el patio o en el coche. ¡Las adivinanzas hacen pensar y los trabalenguas hacen reír!</p>`,
      svg: charla("Un niño dice una adivinanza: oro parece, plata no es; la niña responde: el plátano", [["nino", "Oro parece, plata no es…", A], ["nina", "¿Es amarillo?", R], ["nino", "¡Sí! ¿Qué es?", A], ["platano", "¡El plátano!", M]]),
    },
    {
      html: `<h3>Inventa una adivinanza</h3><p>Elige algo que conozcas bien, por ejemplo, el <b>sol</b>.</p><p><b>1.</b> Piensa cómo es: amarillo, redondo, caliente. <b>2.</b> Piensa qué hace: da luz, sale por la mañana. <b>3.</b> Escríbelo <mark>sin decir el nombre</mark>.</p><p>«<i>Soy redondo y amarillo, salgo por la mañana y doy calor y brillo.</i>» ¡Rima y todo!</p>`,
      svg: dibujos("Inventa una adivinanza del sol: redondo, amarillo, da calor", [["sol", "redondo", M], ["sol", "amarillo", M], ["sol", "da calor", R]], { titulo: "Mi adivinanza: el sol", nota: "Pistas sin decir el nombre" }),
    },
  ],
  figura: {
    titulo: "Jugamos con las palabras",
    svg: mural("Poema con versos y rima; retahíla para echar a suertes; trabalenguas difícil de decir; adivinanza con pistas", [["luna", "poema", "versos, estrofas y rima", A], ["nino", "retahíla", "cadena para jugar", R], ["boca", "trabalenguas", "¡dilo rápido!", N], ["interrogacion", "adivinanza", "pistas sin el nombre", Ve]], "Textos para decir en voz alta y disfrutar"),
  },
  video: V("poeV", "poemas para niños de primaria"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca una rima para «canción».",
      pasos: ["Mira el final que suena fuerte: -ción.", "Busca palabras que acaben igual.", "corazón, ratón, camión…"],
      resultado: "canción rima con corazón." },
    { enunciado: "Adivina: «Tiene dientes y no come, tiene cabeza y no es hombre».",
      pasos: ["Pistas: tiene dientes pero no come.", "Tiene cabeza pero no es persona.", "Pensemos en el ajo: tiene dientes y cabeza."],
      resultado: "el ajo." },
    { enunciado: "¿Cuántos versos y estrofas tiene un poema de dos grupos de tres líneas?",
      pasos: ["Cada línea es un verso: 3 + 3.", "Cada grupo es una estrofa.", "Hay dos grupos."],
      resultado: "6 versos y 2 estrofas." },
  ],
  errores: [
    "Llamar estrofa a cada línea: cada línea es un verso; el grupo es la estrofa.",
    "Buscar rimas solo por la última letra: hay que mirar desde la vocal fuerte.",
    "Recitar muy deprisa y sin pausas.",
    "Decir el nombre de la cosa en una adivinanza: ¡entonces no hay que adivinar!",
  ],
  ejercicios: [
    { q: "¿Cómo se llama cada línea de un poema?", sol: "Verso." },
    { q: "¿Y un grupo de versos?", sol: "Estrofa." },
    { q: "Busca una rima para «gato».", sol: "pato, zapato, plato, rato." },
    { q: "Busca una rima para «luna».", sol: "cuna, una, ninguna, aceituna." },
    { q: "Di una retahíla que conozcas.", sol: "Por ejemplo: «Pito, pito, gorgorito…»." },
    { q: "Di este trabalenguas tres veces: «Tres tristes tigres».", sol: "Tres tristes tigres tragaban trigo en un trigal." },
    { q: "Adivina: «Oro parece, plata no es».", sol: "El plátano." },
    { q: "Adivina: «Tengo agujas y no sé coser».", sol: "El reloj." },
    { q: "Recita un poema corto con pausas.", sol: "Respuesta libre: despacio, con pausa en cada verso." },
    { q: "Inventa una adivinanza de un animal.", sol: "Por ejemplo: «Tengo bigotes, digo miau y me gusta la leche»: el gato." },
  ],
  quiz: [
    { q: "Cada línea de un poema es un…", o: ["verso", "párrafo", "título"], a: 0, e: "Verso." },
    { q: "Un grupo de versos es una…", o: ["estrofa", "rima", "adivinanza"], a: 0, e: "Estrofa." },
    { q: "«Gato» rima con…", o: ["perro", "pato", "casa"], a: 1, e: "-ato." },
    { q: "Una retahíla sirve para…", o: ["jugar o echar a suertes", "cocinar", "contar dinero"], a: 0, e: "Para jugar." },
    { q: "Un trabalenguas es…", o: ["difícil de decir rápido", "un cuento largo", "un dibujo"], a: 0, e: "Se traba la lengua." },
    { q: "Una adivinanza…", o: ["dice el nombre", "da pistas sin el nombre", "no tiene respuesta"], a: 1, e: "Da pistas." },
    { q: "Al recitar hay que hablar…", o: ["muy rápido", "despacio y claro", "gritando"], a: 1, e: "Despacio y claro." },
    { q: "«Tengo agujas y no sé coser…»", o: ["la aguja", "el reloj", "el pez"], a: 1, e: "El reloj." },
    { q: "«Canción» rima con…", o: ["corazón", "mesa", "sol"], a: 0, e: "-ón." },
    { q: "«Pito, pito, gorgorito» es una…", o: ["retahíla", "fábula", "receta"], a: 0, e: "Retahíla." },
  ],
  examen: [
    { q: "Entre estrofas dejamos…", o: ["un espacio", "un punto", "una coma"], a: 0, e: "Un espacio en blanco." },
    { q: "«Luna» rima con…", o: ["cuna", "sol", "mar"], a: 0, e: "-una." },
    { q: "«Tres tristes tigres» es un…", o: ["trabalenguas", "poema largo", "cuento"], a: 0, e: "Trabalenguas." },
    { q: "«Oro parece, plata no es»:", o: ["el plátano", "la luna", "el oro"], a: 0, e: "plá-tano." },
  ],
  feynman: ["Qué son el verso, la estrofa y la rima", "Qué diferencia hay entre retahíla y trabalenguas", "Cómo se inventa una adivinanza"],
  mapa: mapa("JUEGOS DE PALABRAS", "var(--pri)", [
    ["Poema", "versos, estrofas, rima", A],
    ["Retahíla", "cadena para jugar", R],
    ["Trabalenguas", "difícil de decir rápido", N],
    ["Adivinanza", "pistas sin el nombre", Ve],
  ], 230),
  tarjetas: [
    ["¿Qué es un verso?", "Cada línea de un poema"],
    ["¿Qué es una estrofa?", "Un grupo de versos"],
    ["¿Qué es la rima?", "Versos que acaban con sonido parecido"],
    ["Rima de «gato»", "pato, zapato"],
    ["¿Qué es una retahíla?", "Palabras con ritmo para jugar"],
    ["¿Qué es un trabalenguas?", "Una frase difícil de decir rápido"],
    ["¿Qué es una adivinanza?", "Pistas para adivinar algo"],
    ["«Tengo agujas y no sé coser»", "El reloj"],
  ],
  familias: [
    "Aprended juntos un poema corto y recitadlo en una comida familiar.",
    "Pedid a los abuelos que enseñen las retahílas de su infancia.",
    "Haced un concurso de trabalenguas en el coche.",
    "Inventad cada día una adivinanza de un objeto de casa.",
  ],
  profesores: PROF("Educación literaria: textos de tradición oral (retahílas, trabalenguas y adivinanzas) y poemas; verso, estrofa y rima; recitación con ritmo y entonación", ["Recital de poemas en el aula con micrófono de juguete.", "Antología de retahílas recogidas por las familias.", "Buzón de adivinanzas inventadas por el alumnado."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
