// Inglés 2º de Primaria: The weather and seasons. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "The weather and seasons",
  minutos: 20,
  objetivos: ["Decir qué tiempo hace en inglés: It's sunny", "Nombrar las cuatro estaciones del año", "Relacionar tiempo, estación, ropa y actividades"],
  claves: ["weather", "sunny", "rainy", "cloudy", "windy", "snowy", "hot", "cold", "spring", "summer", "autumn", "winter"],
  pregunta: {
    texto: "Mira por la ventana. ¿Hace sol? ¿Llueve? ¿Cómo lo dirías en inglés?",
    respuesta: "Si hace sol dices <mark>It's sunny</mark>. Si llueve, <mark>It's rainy</mark>. El tiempo en inglés es <b>weather</b>.",
  },
  bloques: [
    {
      html: `<h3>How's the weather?</h3><p>Para preguntar qué tiempo hace decimos <mark>How's the weather?</mark></p><p>Si hace sol: <b>It's sunny</b>. Si está nublado: <b>It's cloudy</b>. Si llueve: <b>It's rainy</b>.</p><p>Fíjate en el truco: <b>sun</b> es sol y <b>sunny</b> es soleado. <b>Cloud</b> es nube y <b>cloudy</b> es nublado. ¡Solo añadimos una <b>y</b> al final!</p>`,
      svg: vocab("Tiempo: sunny soleado, cloudy nublado, rainy lluvioso", [["sol", "sunny", "hace sol", A], ["nube", "cloudy", "nublado", N], ["lluvia", "rainy", "llueve", Ve]], { titulo: "How's the weather?" }),
      video: V("in9b"),
    },
    {
      html: `<h3>Windy, snowy, stormy</h3><p>Hay <mark>más tipos de tiempo</mark>.</p><p>Si hace viento: <b>It's windy</b>. Si nieva: <b>It's snowy</b>. Si hay tormenta con rayos: <b>It's stormy</b>.</p><p>Cuando sale el sol con lluvia, a veces vemos el arcoíris, <b>rainbow</b>. ¡Tiene siete colores! Dibuja el tiempo que hace hoy y escribe la frase en inglés.</p>`,
      svg: vocab("Más tiempo: windy viento, snowy nieve, stormy tormenta, rainbow arcoíris", [["viento", "windy", "viento", A], ["nieve", "snowy", "nieve", N], ["rayo", "stormy", "tormenta", R], ["arcoiris", "rainbow", "arcoíris", Ve]], { titulo: "More weather" }),
    },
    {
      html: `<h3>Hot and cold</h3><p>También decimos si hace <mark>calor o frío</mark>.</p><p><b>It's hot</b> es «hace calor». <b>It's cold</b> es «hace frío». Si no hace ni frío ni calor, decimos <b>It's warm</b>, que es templado.</p><p>Y para hablar de ti: <b>I'm hot</b> (tengo calor) o <b>I'm cold</b> (tengo frío). ¿Tienes frío o calor ahora mismo? Dilo en inglés.</p>`,
      svg: lista("Calor y frío: it's hot hace calor, it's warm templado, it's cold hace frío", [["It's hot → hace calor", R], ["It's warm → templado", A], ["It's cold → hace frío", N]], { titulo: "Hot or cold?" }),
    },
    {
      html: `<h3>The four seasons</h3><p>El año tiene <mark>cuatro estaciones</mark>: <b>seasons</b>.</p><p>La primavera es <b>spring</b>. El verano es <b>summer</b>. El otoño es <b>autumn</b>. El invierno es <b>winter</b>.</p><p>Empezamos el cole en <b>autumn</b>. Las vacaciones largas son en <b>summer</b>. ¿En qué estación es tu cumpleaños? Dilo así: <b>My birthday is in spring</b>.</p>`,
      svg: vocab("Estaciones: spring primavera, summer verano, autumn otoño, winter invierno", [["flor", "spring", "primavera", Ve], ["sol", "summer", "verano", R], ["arbol", "autumn", "otoño", A], ["nieve", "winter", "invierno", N]], { titulo: "The four seasons" }),
    },
    {
      html: `<h3>Spring and summer</h3><p>En <mark>spring</mark> salen las flores, <b>flowers</b>, y los pájaros cantan. A veces llueve y a veces hace sol.</p><p>En <mark>summer</mark> hace mucho calor: <b>It's hot and sunny</b>.</p><p>Vamos a la playa, <b>beach</b>, y comemos helado, <b>ice cream</b>. Llevamos gorra y crema para el sol. ¿Qué te gusta hacer en verano?</p>`,
      svg: vocab("Primavera y verano: flowers flores, beach playa, sunny sol", [["flor", "flowers", "flores", Ve], ["barco", "beach", "playa", N], ["sol", "sunny", "soleado", R]], { titulo: "Spring and summer" }),
    },
    {
      html: `<h3>Autumn and winter</h3><p>En <mark>autumn</mark> las hojas, <b>leaves</b>, se ponen marrones y caen de los árboles. Hace viento: <b>It's windy</b>.</p><p>En <mark>winter</mark> hace frío: <b>It's cold</b>.</p><p>A veces nieva y hacemos un muñeco de nieve, <b>snowman</b>. Nos ponemos abrigo, gorro y bufanda. En invierno también llega la Navidad, <b>Christmas</b>.</p>`,
      svg: vocab("Otoño e invierno: leaves hojas, windy viento, snowman muñeco de nieve", [["arbol", "leaves", "hojas", A], ["viento", "windy", "viento", N], ["nieve", "snowman", "muñeco de nieve", R]], { titulo: "Autumn and winter" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Las palabras del tiempo tienen <mark>sonidos curiosos</mark>.</p><p><b>Weather</b> se dice «uéder». <b>Autumn</b> se dice «ótum»: ¡la n final no suena! <b>Rainy</b> se dice «réini».</p><p><b>Cloudy</b> se dice «cláudi». <b>Season</b> se dice «síson». Repite la pregunta <b>How's the weather?</b> como un presentador del tiempo en la tele.</p>`,
      svg: lista("Cómo suenan: weather uéder, autumn ótum, rainy réini, cloudy cláudi", [["weather → «uéder»", A], ["autumn → «ótum»", R], ["rainy → «réini»", Ve], ["cloudy → «cláudi»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En los países de habla inglesa, la gente <mark>habla mucho del tiempo</mark>.</p><p>Es una forma de empezar una conversación: <b>Lovely day, isn't it?</b> (Qué día tan bonito, ¿verdad?).</p><p>También te ayuda a saber qué ropa ponerte. Si oyes <b>It's rainy</b> en la radio, ¡coge el paraguas!</p>`,
      svg: charla("Hablar del tiempo: It's rainy today! Take your umbrella!", [["mama", "It's rainy today!", A], ["nino", "I've got my umbrella!", R]]),
    },
    {
      html: `<h3>Jugamos al hombre del tiempo</h3><p>Hacemos un <mark>mapa de España</mark> con dibujos de sol, nubes y lluvia.</p><p>Por turnos, cada niño es el presentador del tiempo. Señala una ciudad y dice: <b>In Madrid it's sunny. In Bilbao it's rainy.</b></p><p>Los demás aplauden y preguntan: <b>And in Barcelona?</b> ¡Hay que contestar muy rápido!</p>`,
      svg: charla("Presentador del tiempo: In Madrid it's sunny! And in Bilbao? It's rainy!", [["nina", "In Madrid it's sunny!", R], ["nino", "And in Bilbao?", A], ["nina", "It's rainy!", R]]),
    },
  ],
  figura: {
    titulo: "The weather and seasons",
    svg: mural("Estaciones y tiempo: spring flores, summer sunny, autumn windy, winter snowy", [["flor", "spring", "primavera · flowers", Ve], ["sol", "summer", "verano · sunny", R], ["viento", "autumn", "otoño · windy", A], ["nieve", "winter", "invierno · snowy", N]], "The weather and seasons"),
  },
  video: V("in9v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hay nubes y llueve. ¿Qué tiempo hace?",
      pasos: ["Nube es cloud: nublado, cloudy.", "Lluvia es rain: lluvioso, rainy.", "Unimos con and."],
      resultado: "«It's cloudy and rainy.»" },
    { enunciado: "¿En qué estación hace calor y vamos a la playa?",
      pasos: ["Calor y playa: es el verano.", "Verano es summer.", "Decimos It's…"],
      resultado: "«It's summer! It's hot and sunny.»" },
    { enunciado: "Tu cumpleaños es en enero. ¿En qué estación es?",
      pasos: ["Enero es invierno en España.", "Invierno es winter.", "Usamos in: in winter."],
      resultado: "«My birthday is in winter.»" },
  ],
  errores: [
    "Decir «It's sun»: se dice It's sunny.",
    "Pronunciar la n de autumn: se dice «ótum».",
    "Confundir weather (tiempo) con winter (invierno).",
    "Decir «I have cold» para tener frío: se dice I'm cold.",
  ],
  ejercicios: [
    { q: "¿Cómo se pregunta qué tiempo hace en inglés?", sol: "How's the weather?" },
    { q: "¿Qué significa It's sunny?", sol: "Hace sol." },
    { q: "Di en inglés: «Está nublado».", sol: "It's cloudy." },
    { q: "¿Cómo se dice «nieva»?", sol: "It's snowy." },
    { q: "Nombra las cuatro estaciones en inglés.", sol: "Spring, summer, autumn, winter." },
    { q: "¿En qué estación caen las hojas?", sol: "En otoño: autumn." },
    { q: "Di en inglés: «Tengo frío».", sol: "I'm cold." },
    { q: "¿Qué es un snowman?", sol: "Un muñeco de nieve." },
    { q: "Di qué tiempo hace hoy donde vives.", sol: "Por ejemplo: It's sunny and warm." },
    { q: "Haz de presentador del tiempo con un mapa dibujado.", sol: "Por ejemplo: In Sevilla it's hot. In León it's cold." },
  ],
  quiz: [
    { q: "«Weather» significa…", o: ["el tiempo (clima)", "invierno", "la hora"], a: 0, e: "Weather = el tiempo atmosférico." },
    { q: "«It's rainy» es…", o: ["hace sol", "llueve", "nieva"], a: 1, e: "Rain = lluvia." },
    { q: "«Hace viento» es…", o: ["It's windy", "It's cloudy", "It's snowy"], a: 0, e: "Wind = viento." },
    { q: "«Cloudy» es…", o: ["nublado", "soleado", "frío"], a: 0, e: "Cloud = nube." },
    { q: "«Summer» es…", o: ["primavera", "verano", "otoño"], a: 1, e: "Summer = verano." },
    { q: "«Invierno» en inglés es…", o: ["winter", "autumn", "spring"], a: 0, e: "Winter = invierno." },
    { q: "«Spring» es…", o: ["primavera", "verano", "otoño"], a: 0, e: "Spring = primavera." },
    { q: "«It's cold» es…", o: ["hace calor", "hace frío", "hace sol"], a: 1, e: "Cold = frío." },
    { q: "Tengo calor se dice…", o: ["I have hot", "I'm hot", "It's me hot"], a: 1, e: "I'm hot." },
    { q: "«Rainbow» es…", o: ["arcoíris", "tormenta", "nube"], a: 0, e: "Rain + bow = arcoíris." },
  ],
  examen: [
    { q: "«Autumn» es…", o: ["otoño", "verano", "invierno"], a: 0, e: "Autumn = otoño." },
    { q: "How's the weather? (hay sol) →", o: ["It's sunny.", "It's winter.", "I'm seven."], a: 0, e: "Sunny = soleado." },
    { q: "¿Cuántas estaciones hay?", o: ["three", "four", "five"], a: 1, e: "Four seasons." },
    { q: "En winter hacemos un…", o: ["snowman", "ice cream", "beach"], a: 0, e: "Muñeco de nieve en invierno." },
  ],
  feynman: ["Cómo decir qué tiempo hace en inglés", "Cómo se llaman las cuatro estaciones", "Qué ropa y qué actividades van con cada estación"],
  mapa: mapa("WEATHER & SEASONS", "var(--pri)", [
    ["Weather", "sunny, cloudy, rainy, windy", A],
    ["Hot / cold", "It's hot. I'm cold.", R],
    ["Seasons", "spring, summer, autumn, winter", Ve],
    ["Preguntar", "How's the weather?", N],
  ], 230),
  tarjetas: [
    ["¿Qué tiempo hace?", "How's the weather?"],
    ["hace sol / está nublado", "it's sunny / it's cloudy"],
    ["llueve / nieva", "it's rainy / it's snowy"],
    ["hace viento", "it's windy"],
    ["hace calor / hace frío", "it's hot / it's cold"],
    ["primavera / verano", "spring / summer"],
    ["otoño / invierno", "autumn / winter"],
    ["arcoíris", "rainbow"],
  ],
  familias: [
    "Cada mañana, preguntad How's the weather? antes de salir de casa.",
    "Haced un calendario del tiempo de la semana con dibujos y frases en inglés.",
    "Elegid la ropa según el tiempo diciéndolo en inglés.",
    "Ved juntos el parte del tiempo y repetidlo en inglés.",
  ],
  profesores: PROF("Lengua extranjera: léxico del tiempo atmosférico (adjetivos en -y); hot, warm, cold; las estaciones; relación con ropa y actividades", ["Rutina diaria del tiempo en la asamblea.", "Mapa del tiempo con símbolos para hacer de presentador.", "Clasificar ropa y actividades por estaciones."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
