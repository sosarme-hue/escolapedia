// Lengua Castellana 1º de Primaria: el abecedario y las vocales. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, parejas, frase, charla, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "El abecedario y las vocales",
  minutos: 20,
  objetivos: ["Saber que las palabras se escriben con letras", "Conocer las cinco vocales y decirlas en orden", "Reconocer letras mayúsculas y minúsculas"],
  claves: ["letra", "abecedario", "vocal", "consonante", "mayúscula", "minúscula"],
  pregunta: {
    texto: "Di tu nombre en voz alta muy despacio. ¿Qué sonidos oyes? ¿Hay alguno que suena con la boca muy abierta?",
    respuesta: "Tu nombre está hecho de <mark>letras</mark>. Las que suenan solas y con la boca abierta son las <b>vocales</b>: a, e, i, o, u.",
  },
  bloques: [
    {
      html: `<h3>Las letras</h3><p>Todo lo que leemos está hecho de <mark>letras</mark>.</p><p>Con letras escribimos nuestro nombre, los cuentos y los carteles de la calle.</p><p>Cada letra tiene una <b>forma</b> y un <b>sonido</b>. La letra <b>m</b> suena «mmm», como cuando algo está rico. La letra <b>s</b> suena «sss», como una serpiente.</p>`,
      svg: fichas("Letras sueltas en fichas de colores: m, s, p, l, t", [["m", R], ["s", A], ["p", V], ["l", N], ["t", M]], { titulo: "Cada letra tiene forma y sonido", nota: "m suena «mmm» · s suena «sss»", grande: true }),
    },
    {
      html: `<h3>El abecedario</h3><p>Todas las letras juntas y en orden forman el <mark>abecedario</mark>.</p><p>Empieza por la <b>a</b> y termina por la <b>z</b>.</p><p>En español tiene <b>27 letras</b>. El orden siempre es el mismo: a, be, ce, de, e… Por eso lo podemos cantar como una canción. ¡Prueba a cantarlo con tu familia! Poco a poco te lo aprenderás de memoria.</p>`,
      svg: fichas("Las primeras letras del abecedario en orden: a, b, c, d, e, f, g, h, i, j, k, l", [["a", R], ["b", A], ["c", A], ["d", A], ["e", R], ["f", A], ["g", A], ["h", A], ["i", R], ["j", A], ["k", A], ["l", A]], { titulo: "a, b, c… así empieza", nota: "… y sigue hasta la z: 27 letras" }),
    },
    {
      html: `<h3>Las cinco vocales</h3><p>Hay cinco letras muy especiales: las <mark>vocales</mark>.</p><p>Son la <b>a</b>, la <b>e</b>, la <b>i</b>, la <b>o</b> y la <b>u</b>.</p><p>Las vocales suenan solas, sin ayuda de otra letra. Se dicen con la boca abierta y el aire sale libre. Todas las palabras tienen al menos una vocal. ¡Búscalas siempre!</p>`,
      svg: fichas("Las cinco vocales en grande: a, e, i, o, u", [["a", R], ["e", A], ["i", V], ["o", N], ["u", M]], { titulo: "Las vocales", nota: "a · e · i · o · u", grande: true }),
      video: vid("aPB8LeDBW4E", "Canción de las vocales para niños con la foca Smilie", "Smile and Learn - Español", 23545349),
    },
    {
      html: `<h3>Palabras que empiezan por vocal</h3><p>Muchas palabras empiezan por una vocal.</p><p><b>A</b>rbol empieza por <mark>a</mark>. <b>E</b>strella empieza por <mark>e</mark>. <b>I</b>sla empieza por <mark>i</mark>. <b>O</b>so empieza por <mark>o</mark>. <b>U</b>va empieza por <mark>u</mark>.</p><p>Para saberlo, di la palabra despacio y escucha bien el primer sonido.</p>`,
      svg: dibujos("Un árbol, una estrella, una isla, un oso y una uva, cada uno con su palabra", [["arbol", s("á|rbol", R), "var(--ink)"], ["estrella", s("e|strella", A), "var(--ink)"], ["isla", s("i|sla", V), "var(--ink)"], ["oso", s("o|so", N), "var(--ink)"], ["uva", s("u|va", M), "var(--ink)"]]),
    },
    {
      html: `<h3>Cómo suena cada vocal</h3><p>Cada vocal se dice con la boca de una forma.</p><p>Con la <b>a</b>, la boca se abre mucho. Con la <b>i</b>, sonreímos. Con la <b>o</b>, hacemos un círculo. Con la <b>u</b>, ponemos los labios como para dar un beso.</p><p>Mírate en un espejo y pruébalo. ¡Es muy divertido! Haz muecas con cada vocal.</p>`,
      svg: dibujos("Cuatro bocas: muy abierta para la a, sonriente para la i, redonda para la o y pequeña para la u", [["cara_a", "a", R], ["cara_i", "i", V], ["cara_o", "o", N], ["cara_u", "u", M]], { titulo: "Pon la boca de cada vocal", nota: "a abierta · i sonrisa · o redonda · u beso" }),
    },
    {
      html: `<h3>Las consonantes</h3><p>Las demás letras se llaman <mark>consonantes</mark>: b, c, d, f, m, p, s, t…</p><p>Casi siempre necesitan a una vocal para sonar bien.</p><p>Si juntamos la <b>m</b> con la <b>a</b>, decimos <b>ma</b>. Si juntamos la <b>p</b> con la <b>a</b>, decimos <b>pa</b>. Con ma y pa ya podemos leer palabras.</p>`,
      svg: frase("La letra m más la letra a forman ma; la p más la a forman pa", [["m", A], ["+", "var(--muted)"], ["a", R], ["=", "var(--muted)"], ["ma", V], ["/"], ["p", A], ["+", "var(--muted)"], ["a", R], ["=", "var(--muted)"], ["pa", V]], { titulo: "Consonante + vocal", nota: "ma + má = mamá · pa + pá = papá", fs: 24 }),
    },
    {
      html: `<h3>Mayúsculas y minúsculas</h3><p>Cada letra se puede escribir de dos maneras.</p><p>La <mark>mayúscula</mark> es grande: <b>A</b>, <b>E</b>, <b>M</b>. La <mark>minúscula</mark> es pequeña: <b>a</b>, <b>e</b>, <b>m</b>.</p><p>Las dos suenan igual. La mayúscula se usa al empezar a escribir. También en los nombres, como <b>Ana</b> o <b>Madrid</b>.</p>`,
      svg: parejas("La A mayúscula y la a minúscula, la E y la e, la M y la m", [[null, "A", null, "a"], [null, "E", null, "e"], [null, "M", null, "m"]], { izq: "mayúscula", der: "minúscula", color: A, color2: V, flecha: "=" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer las letras nos ayuda a <mark>leer y escribir</mark>.</p><p>Así podemos leer cuentos, escribir nuestro nombre y entender los carteles.</p><p>El orden del abecedario también sirve para <b>ordenar</b>. En clase, la lista de nombres va por abecedario: primero <b>Ana</b>, luego <b>Bruno</b> y después <b>Carla</b>.</p>`,
      svg: dibujos("Un libro, una escuela y una lista de nombres: las letras sirven para leer, escribir y ordenar", [["libro", "leer", A], ["lapiz", "escribir", R], ["escuela", "ordenar", V]], { titulo: "Las letras sirven para…", nota: "Ana · Bruno · Carla" }),
    },
    {
      html: `<h3>Jugamos a «Veo, veo»</h3><p>Un jugador mira algo y dice con qué letra empieza.</p><p>Los demás tienen que <mark>adivinar</mark> qué es.</p><p>—Veo, veo… una cosa que empieza por la <b>o</b>. —¿Es un oso? —¡Sí!</p><p>Jugad en casa o en el coche. Así practicamos las vocales y las consonantes. Gana quien adivina más cosas.</p>`,
      svg: charla("Dos niños juegan a Veo, veo: una cosa que empieza por o; es un oso", [["nino", "Veo, veo… ¡algo con o!", A], ["nina", "¿Es un oso?", R], ["nino", "¡Sí! ¡Te toca!", A]]),
    },
  ],
  figura: {
    titulo: "Las cinco vocales",
    svg: mural("Las cinco vocales con un dibujo: a de árbol, e de estrella, i de isla, o de oso y u de uva", [["arbol", "a", "árbol", R], ["estrella", "e", "estrella", A], ["isla", "i", "isla", V], ["oso", "o", "oso", N], ["uva", "u", "uva", M]], "Cada vocal con una palabra que empieza por ella"),
  },
  video: { ...vid("4T74P6PK1Ao", "Canción del abecedario en español", "Lingokids en Español - Canciones y Dibujos", 14700420, 29206), busqueda: "canción del abecedario para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Por qué vocal empieza la palabra «oso»?",
      pasos: ["Di la palabra muy despacio: ooo-so.", "Escucha el primer sonido: «ooo».", "Ese sonido es la vocal o."],
      resultado: "«oso» empieza por la o." },
    { enunciado: "¿Cuántas vocales hay en «mesa»?",
      pasos: ["Separa la palabra en trozos: me-sa.", "En «me» oímos la e. En «sa» oímos la a.", "Cuenta las vocales: e y a son dos."],
      resultado: "«mesa» tiene 2 vocales: e y a." },
    { enunciado: "Escribe tu nombre. ¿Con qué letra empieza? ¿Es mayúscula?",
      pasos: ["Escribe tu nombre con ayuda de un adulto.", "Mira la primera letra y di cómo suena.", "Los nombres empiezan siempre con mayúscula."],
      resultado: "tu nombre empieza con una letra mayúscula." },
  ],
  errores: [
    "Pensar que la y o la h son vocales: las vocales son solo cinco, a, e, i, o, u.",
    "Confundir letras que se parecen, como la b y la d: fíjate hacia dónde mira la barriga.",
    "Escribir el nombre propio con minúscula: los nombres empiezan con mayúscula.",
    "Decir el nombre de la letra en vez de su sonido al leer: la m suena «mmm», no «eme».",
  ],
  ejercicios: [
    { q: "Di las cinco vocales en orden.", sol: "a, e, i, o, u." },
    { q: "¿Por qué vocal empieza «uva»?", sol: "Por la u." },
    { q: "¿Por qué vocal empieza «elefante»?", sol: "Por la e." },
    { q: "Rodea las vocales de la palabra «gato».", sol: "La a y la o." },
    { q: "¿Qué letra va después de la a en el abecedario?", sol: "La b." },
    { q: "Escribe la A mayúscula y la a minúscula.", sol: "A y a: suenan igual." },
    { q: "Di tres cosas de casa que empiecen por vocal.", sol: "Por ejemplo: armario, olla, imán, espejo, uña." },
    { q: "¿Es vocal o consonante la m?", sol: "Consonante." },
    { q: "Junta la p y la a. ¿Qué suena?", sol: "pa." },
    { q: "¿Con qué letra empieza tu nombre?", sol: "Respuesta libre: debe ser la primera letra de su nombre, en mayúscula." },
  ],
  quiz: [
    { q: "¿Cuántas vocales hay?", o: ["5", "3", "27"], a: 0, e: "a, e, i, o, u: cinco." },
    { q: "¿Cuál de estas letras es una vocal?", o: ["m", "o", "s"], a: 1, e: "La o es vocal." },
    { q: "«Isla» empieza por…", o: ["a", "e", "i"], a: 2, e: "iii-sla: empieza por i." },
    { q: "¿Con qué letra empieza el abecedario?", o: ["a", "z", "m"], a: 0, e: "El abecedario empieza por la a." },
    { q: "¿Con qué letra termina el abecedario?", o: ["u", "z", "o"], a: 1, e: "Termina por la z." },
    { q: "¿Cuál es la mayúscula de «e»?", o: ["E", "e", "a"], a: 0, e: "E es la mayúscula." },
    { q: "Con la boca redonda decimos la…", o: ["i", "o", "e"], a: 1, e: "La o se dice con la boca en círculo." },
    { q: "m + a suena…", o: ["am", "ma", "me"], a: 1, e: "Primero m y luego a: ma." },
    { q: "¿Qué palabra empieza por vocal?", o: ["pato", "oso", "mesa"], a: 1, e: "oso empieza por o." },
    { q: "Los nombres de personas empiezan con…", o: ["mayúscula", "minúscula", "número"], a: 0, e: "Ana, Hugo, Lía: con mayúscula." },
  ],
  examen: [
    { q: "¿Cuál es una consonante?", o: ["a", "u", "p"], a: 2, e: "La p es consonante." },
    { q: "¿Cuántas letras tiene el abecedario?", o: ["5", "27", "10"], a: 1, e: "27 letras." },
    { q: "«Uva» empieza por…", o: ["u", "o", "a"], a: 0, e: "uuu-va." },
    { q: "¿Qué vocales tiene «sol»?", o: ["o", "a y o", "e"], a: 0, e: "Solo la o." },
  ],
  feynman: ["Qué son las letras y el abecedario", "Cuáles son las vocales y cómo suenan", "Qué diferencia hay entre mayúscula y minúscula"],
  mapa: mapa("LAS LETRAS", "var(--pri)", [
    ["Abecedario", "27 letras, de la a a la z", A],
    ["Vocales", "a · e · i · o · u", R],
    ["Consonantes", "b, c, d, m, p, s…", V],
    ["Mayúscula", "A grande · a pequeña", N],
  ], 220),
  tarjetas: [
    ["¿Cuáles son las vocales?", "a, e, i, o, u"],
    ["¿Cuántas letras tiene el abecedario?", "27"],
    ["¿Por qué letra empieza el abecedario?", "Por la a"],
    ["¿Por qué letra acaba?", "Por la z"],
    ["¿La m es vocal o consonante?", "Consonante"],
    ["m + a = …", "ma"],
    ["¿Cómo empiezan los nombres?", "Con mayúscula"],
    ["¿Por qué vocal empieza «oso»?", "Por la o"],
  ],
  familias: [
    "Cantad juntos la canción del abecedario y la de las vocales.",
    "Jugad a «Veo, veo» con vocales en casa, en el coche o en el parque.",
    "Buscad letras en carteles, cajas de cereales y matrículas, y decid cómo suenan.",
    "Ayudadle a escribir su nombre con la primera letra en mayúscula.",
  ],
  profesores: PROF("Comunicación escrita: correspondencia entre letras y sonidos, conciencia fonológica, vocales y consonantes, el alfabeto y la mayúscula inicial", ["Caja de las vocales: objetos que empiezan por a, e, i, o, u para clasificar.", "Espejos para practicar la forma de la boca de cada vocal.", "Lista de clase ordenada por abecedario y cartel con las 27 letras."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
