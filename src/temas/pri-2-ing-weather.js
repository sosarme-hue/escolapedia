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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Describir el tiempo con It's foggy, It's rainbow…", "Decir qué hacemos con cada tiempo: When it's sunny I…", "Nombrar cosas para el tiempo: umbrella, raincoat", "Presentar un parte del tiempo sencillo"],
  lectura: { titulo: "Rainy day, happy day", html: `<p>It's Saturday. Lola looks out of the window. It's <b>raining</b>. It's <b>cloudy</b> and <b>grey</b>.</p><p>"Oh no!" says Lola. "I can't go to the park. I'm sad."</p><p>Her dad smiles. "Rainy days can be fun too! Put on your <b>raincoat</b> and your <b>wellies</b>."</p><p>Lola puts on her yellow raincoat and her red wellies. Dad takes a big <b>umbrella</b>.</p><p>They go outside. Lola jumps in the <b>puddles</b>: splash, splash! She laughs a lot.</p><p>They see a snail on a leaf and a duck swimming in a big puddle. "Quack!"</p><p>After a while, the rain stops. The sun comes out. And look… there's a <b>rainbow</b> in the sky! Red, orange, yellow, green, blue and purple.</p><p>"Wow! It's beautiful!" says Lola.</p><p>At home, they have hot chocolate. Lola draws the rainbow.</p><p>"Dad, I love rainy days!"</p><p><i>(raincoat: chubasquero · wellies: botas de agua · puddles: charcos · snail: caracol)</i></p>` },
  tras: {
    "Windy, snowy, stormy": [
      ["Foggy, rainbow, icy", `<p>Aprendemos más palabras del <mark>weather</mark> (tiempo):</p><ul><li><b>It's foggy</b>: hay niebla. No se ve bien.</li><li><b>It's icy</b>: hay hielo. ¡Cuidado, resbala!</li><li><b>There's a rainbow</b>: hay un arcoíris.</li><li><b>There's thunder</b>: hay truenos. ¡Boom!</li><li><b>There's lightning</b>: hay relámpagos.</li><li><b>It's warm</b>: hace una temperatura agradable.</li><li><b>It's cool</b>: hace fresco.</li></ul><p>Recuerda las de antes: <i>sunny</i>, <i>cloudy</i>, <i>rainy</i>, <i>windy</i>, <i>snowy</i>, <i>stormy</i>.</p><p>Muchas palabras del tiempo terminan en <b>-y</b>: sun → sunn<b>y</b>, cloud → cloud<b>y</b>, wind → wind<b>y</b>, fog → fogg<b>y</b>.</p><p>When it's foggy, cars turn on their lights.</p><p><b>Actividad</b>: dibuja un símbolo para foggy, icy y rainbow, y añádelos al panel del tiempo de clase.</p>`,
        L6.filas("Weather", [["foggy", "niebla", cMO], ["icy", "hielo", cAZ], ["rainbow", "arcoíris", cRO], ["warm", "templado", cNA]])],
    ],
    "Hot and cold": [
      ["Umbrella and sunglasses", `<p>Cada tiempo necesita sus <mark>cosas</mark>:</p><ul><li>When it's <b>rainy</b>: an <b>umbrella</b> (paraguas), a <b>raincoat</b> (chubasquero) and <b>wellies</b> (botas de agua).</li><li>When it's <b>sunny</b>: <b>sunglasses</b> (gafas de sol), a <b>sun hat</b> (sombrero) and <b>sun cream</b> (crema solar).</li><li>When it's <b>snowy</b>: a <b>coat</b>, a <b>scarf</b>, <b>gloves</b> and a <b>woolly hat</b> (gorro de lana).</li><li>When it's <b>windy</b>: a <b>kite</b> (cometa) to play!</li></ul><p>Podemos dar consejos: «It's raining. <b>Take your umbrella!</b>» «It's sunny. <b>Put on your sun cream!</b>»</p><p>¡Recuerda que el sol puede quemar la piel aunque haga fresco, sobre todo en la montaña y en la playa!</p><p><b>Actividad</b>: dibuja a un niño preparado para cada tiempo y escribe qué lleva.</p>`,
        H6.dos("Take", ["RAINY", ["umbrella", "raincoat", "wellies"], cAZ], ["SUNNY", ["sunglasses", "sun hat", "sun cream"], cNA])],
    ],
    "The four seasons": [
      ["When it's sunny, I…", `<p>Según el tiempo hacemos <mark>activities</mark> distintas. Decimos <b>When it's…, I…</b> (Cuando hace…, yo…):</p><ul><li>«When it's <b>sunny</b>, I go to the beach.»</li><li>«When it's <b>rainy</b>, I read books at home.»</li><li>«When it's <b>snowy</b>, I make a snowman.» (muñeco de nieve)</li><li>«When it's <b>windy</b>, I fly my kite.»</li><li>«When it's <b>hot</b>, I go swimming.»</li><li>«When it's <b>cold</b>, I drink hot chocolate.»</li></ul><p>Para preguntar: «<b>What do you do when it's rainy?</b>» — «I play board games.» (juegos de mesa)</p><p>Cada tiempo tiene su lado divertido. ¡Como Lola en el cuento!</p><p><b>Actividad</b>: completa en tu cuaderno: «When it's sunny, I…», «When it's snowy, I…».</p>`,
        H6.rueda("When", "I…", [["beach", cNA], ["snowman", cAZ], ["kite", cVE], ["read", cMO]]),
        ["8ZjpI6fgYSY", "Seasons Song", "Have Fun Teaching", 197806953]],
    ],
    "Autumn and winter": [
      ["The weather report", `<p>En la tele, el <mark>weather presenter</mark> (presentador del tiempo) explica qué tiempo hará. Podemos hacer nuestro propio parte:</p><p><i>«Good morning! Here is the weather for today. In the north, it's <b>rainy</b> and <b>cold</b>. In the south, it's <b>sunny</b> and <b>hot</b>. In the mountains, it's <b>snowy</b>. In the east, it's <b>windy</b>. Take your umbrella! Have a nice day!»</i></p><p>Palabras útiles:</p><ul><li><b>north</b>: norte. <b>south</b>: sur.</li><li><b>east</b>: este. <b>west</b>: oeste.</li><li><b>today</b>: hoy. <b>tomorrow</b>: mañana.</li><li><b>degrees</b>: grados. «It's 25 degrees.»</li></ul><p>Para empezar el parte decimos «<b>Here is the weather</b>» y para terminar «<b>Have a nice day!</b>».</p><p><b>Actividad</b>: presenta el parte del tiempo delante de un mapa de España.</p>`,
        H6.flujo("Report", ["hello|today", "north|rainy", "south|sunny", "bye|nice day"], cAZ)],
    ],
  },
  final: [
    ["Weather around the world", `<p>En el mundo hay lugares con un tiempo muy distinto:</p><ul><li>In the <b>desert</b> (desierto), it's very <b>hot</b> and <b>dry</b> (seco). It almost never rains.</li><li>In the <b>Arctic</b> (Ártico), it's very <b>cold</b> and <b>snowy</b>. Polar bears live there.</li><li>In the <b>rainforest</b> (selva), it's <b>hot</b> and <b>rainy</b> every day.</li><li>In <b>England</b>, it's often <b>cloudy</b> and <b>rainy</b>. People always carry an umbrella!</li><li>In <b>Spain</b>, it's <b>sunny</b> many days of the year.</li></ul><p>Cuando en España es verano, en Australia es invierno. ¡Allí celebran la Navidad en la playa!</p><p>Para preguntar: «<b>What's the weather like in…?</b>» (¿Qué tiempo hace en…?)</p><p><b>Actividad</b>: elige un lugar del mundo y dibuja su tiempo con un animal que viva allí.</p>`,
      L6.filas("World", [["desert", "hot, dry", cNA], ["Arctic", "cold, snowy", cAZ], ["rainforest", "rainy", cVE], ["England", "cloudy", cMO]])],
    ["Repaso: rainy day, happy day", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>It's <b>Saturday</b>. It's <b>raining</b>; it's <b>cloudy</b> and <b>grey</b>.</li><li>Lola is <b>sad</b> at first.</li><li>She puts on her yellow <b>raincoat</b> and her red <b>wellies</b>.</li><li>Dad takes a big <b>umbrella</b>.</li><li>Lola jumps in the <b>puddles</b>: splash!</li><li>Then the sun comes out and there's a <b>rainbow</b>.</li><li>At home they have <b>hot chocolate</b>.</li><li>At the end, Lola is <b>happy</b>: «I love rainy days!»</li></ul><p>Lola aprende que cualquier día puede ser divertido si buscamos el lado bueno.</p><p><b>Actividad</b>: escribe una frase sobre lo que te gusta hacer cuando llueve.</p>`,
      H6.flujo("Lola", ["rain|sad", "wellies|splash", "sun|rainbow", "home|happy"], cVE)],
  ],
  ejemplos: [
    ["Hay niebla. ¿Cómo se dice?", ["fog + -y"], "It's foggy."],
    ["Cuando nieva, hago un muñeco de nieve.", ["When it's snowy, I…"], "When it's snowy, I make a snowman."],
  ],
  errores: ["Decir «It's sun» en lugar de «It's sunny».", "Llevar paraguas cuando hace viento fuerte (¡se rompe!) en lugar de chubasquero."],
  ejercicios: [
    ["b", "How do you say «hay niebla»?", "It's foggy."],
    ["b", "What is an «umbrella»?", "Un paraguas."],
    ["b", "What is a «rainbow»?", "Un arcoíris."],
    ["b", "Translate: Hace calor.", "It's hot."],
    ["b", "What do you need when it's sunny?", "Sunglasses, sun hat, sun cream."],
    ["m", "Complete: «When it's windy, I fly my ___.»", "Kite."],
    ["m", "What's the weather like in the Arctic?", "It's very cold and snowy."],
    ["m", "Translate: Coge tu paraguas.", "Take your umbrella."],
    ["m", "What is «north» in Spanish?", "Norte."],
    ["m", "What do you do when it's rainy?", "Open answer: I read, I play…"],
    ["a", "In the reading, what does Lola wear?", "A yellow raincoat and red wellies."],
    ["a", "Why is Lola happy at the end?", "Because she jumps in puddles and sees a rainbow."],
    ["a", "Write a short weather report for today.", "Open answer."],
    ["a", "Write two sentences with «When it's…, I…».", "Open answer."],
  ],
  quiz: [
    ["Hielo is…", ["icy", "foggy", "windy"], "Weather."],
    ["Botas de agua are…", ["wellies", "gloves", "sandals"], "Things."],
    ["When it's ___, I make a snowman.", ["snowy", "sunny", "hot"], "Activities."],
    ["Sur is…", ["south", "north", "east"], "Report."],
    ["In the desert it's…", ["hot and dry", "cold and snowy", "rainy"], "World."],
  ],
  examen: [
    ["In the reading, what day is it?", ["Saturday", "Monday", "Friday"], "Reading."],
    ["What do Lola and her dad see in the sky?", ["a rainbow", "a plane", "snow"], "Repaso."],
  ],
  tarjetas: [
    ["More weather", "foggy, icy, warm, cool, rainbow, thunder."],
    ["When it's…", "When it's sunny, I go to the beach."],
  ],
  glosario: [
    ["Foggy", "Con niebla."],
    ["Icy", "Con hielo."],
    ["Rainbow", "Arcoíris."],
    ["Umbrella", "Paraguas."],
    ["Raincoat", "Chubasquero."],
    ["Wellies", "Botas de agua."],
    ["Puddle", "Charco."],
    ["Snowman", "Muñeco de nieve."],
    ["North", "Norte."],
    ["Degrees", "Grados."],
  ],
  situacion: {
    titulo: "Weather TV",
    reto: "La clase graba un parte del tiempo en inglés con un mapa, símbolos y consejos para cada tiempo.",
    pasos: ["Hacer un mapa grande con los puntos cardinales.", "Dibujar símbolos del tiempo: sunny, rainy, foggy…", "Escribir el parte: «In the north, it's…».", "Presentarlo con un consejo: «Take your umbrella!»."],
    producto: "Un parte del tiempo grabado o representado en inglés.",
    evaluacion: ["Describe el tiempo con vocabulario nuevo.", "Relaciona tiempo y ropa u objetos.", "Usa When it's…, I…", "Presenta un parte sencillo."],
  },
});
