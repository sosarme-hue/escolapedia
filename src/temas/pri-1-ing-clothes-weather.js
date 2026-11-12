// Inglés 1º de Primaria: Clothes and weather. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "Clothes and weather",
  minutos: 20,
  objetivos: ["Nombrar prendas de ropa en inglés: T-shirt, trousers, shoes…", "Decir qué tiempo hace: It's sunny, it's raining", "Relacionar la ropa con el tiempo: put on your coat"],
  claves: ["clothes", "T-shirt", "trousers", "dress", "shoes", "coat", "hat", "sunny", "rainy", "cold", "hot"],
  pregunta: {
    texto: "Si llueve, ¿qué te pones para salir? ¿Y si hace mucho sol? ¿Sabes decirlo en inglés?",
    respuesta: "Si llueve, <mark>It's raining</mark> y te pones el abrigo: <b>coat</b>. Si hace sol, <mark>It's sunny</mark> y te pones una gorra: <b>cap</b>.",
  },
  bloques: [
    {
      html: `<h3>Clothes: la ropa</h3><p>La ropa en inglés se dice <mark>clothes</mark>. Se pronuncia «clóuz».</p><p>La camiseta es <b>T-shirt</b>. Los pantalones son <b>trousers</b>. La falda es <b>skirt</b>. El vestido es <b>dress</b>.</p><p>Mira lo que llevas puesto hoy. ¿Llevas una camiseta? Entonces dices: <b>I'm wearing a T-shirt</b> (Llevo una camiseta).</p>`,
      svg: vocab("Ropa: T-shirt camiseta, trousers pantalones, skirt falda, dress vestido", [["camiseta", "T-shirt", "camiseta", A], ["pantalon", "trousers", "pantalones", N], ["falda", "skirt", "falda", R], ["vestido", "dress", "vestido", V]], { titulo: "Clothes" }),
    },
    {
      html: `<h3>Shoes, hat and coat</h3><p>Hay más prendas. Los zapatos son <mark>shoes</mark>. Se dice «chus».</p><p>El gorro es <b>hat</b>. El abrigo es <b>coat</b>. Las gafas de sol son <b>sunglasses</b>.</p><p>Fíjate: <b>shoes</b> y <b>trousers</b> siempre van con s, porque son dos piezas o dos piernas. ¡Igual que «los pantalones» en español! ¿Qué zapatos llevas hoy?</p>`,
      svg: vocab("Más ropa: shoes zapatos, hat gorro, coat abrigo", [["zapato", "shoes", "zapatos", R], ["gorro", "hat", "gorro", A], ["abrigo", "coat", "abrigo", V]], { titulo: "More clothes" }),
    },
    {
      html: `<h3>Put on your coat!</h3><p>Para decir «ponte», usamos <mark>put on</mark>.</p><p><b>Put on your coat!</b> significa «¡Ponte el abrigo!». <b>Put on your shoes!</b> es «¡Ponte los zapatos!».</p><p>Para quitarse la ropa decimos <b>take off</b>. <b>Take off your hat</b> es «quítate el gorro». Por la mañana, al vestirte, di cada prenda en inglés. ¡Te vestirás en dos idiomas!</p>`,
      svg: charla("Una madre dice Put on your coat y el niño contesta OK, mum", [["mama", "Put on your coat!", R], ["nino", "OK, mum!", A], ["abrigo", "My coat!", V]]),
    },
    {
      html: `<h3>The weather: el tiempo</h3><p>El tiempo que hace se dice <mark>weather</mark>. Se pronuncia «uéder».</p><p>Para preguntar «¿Qué tiempo hace?» decimos <b>How's the weather?</b></p><p>Si hace sol, contestamos <b>It's sunny</b>. Si hay nubes, <b>It's cloudy</b>. Si llueve, <b>It's rainy</b> o <b>It's raining</b>. ¿Qué tiempo hace hoy? Mira por la ventana y dilo.</p>`,
      svg: vocab("El tiempo: sunny soleado, cloudy nublado, rainy lluvioso", [["sol", "sunny", "soleado", N], ["nube", "cloudy", "nublado", A], ["lluvia", "rainy", "lluvioso", V]], { titulo: "How's the weather?" }),
      video: vid("rD6FRDd9Hew", "How's The Weather? | Learn About Weather", "Super Simple Songs - Kids Songs", 131286725, 141136),
    },
    {
      html: `<h3>Snowy and windy</h3><p>Hay más tipos de tiempo. Si nieva, decimos <mark>It's snowy</mark> o <b>It's snowing</b>.</p><p>Si sopla mucho viento, <b>It's windy</b>. Si hay tormenta con rayos, <b>It's stormy</b>.</p><p>Fíjate en el truco: muchas palabras del tiempo terminan en <b>-y</b>. <b>Sun</b> → <b>sunny</b>. <b>Rain</b> → <b>rainy</b>. <b>Wind</b> → <b>windy</b>.</p>`,
      svg: vocab("Más tiempo: snowy nevado, windy ventoso, stormy tormenta", [["nieve", "snowy", "nieva", A], ["viento", "windy", "hace viento", V], ["rayo", "stormy", "hay tormenta", N]], { titulo: "Snow, wind, storm" }),
    },
    {
      html: `<h3>Hot and cold</h3><p>También decimos si hace calor o frío.</p><p><b>It's hot</b> significa «hace calor». <b>It's cold</b> significa «hace frío».</p><p>Y la ropa cambia según el tiempo. <mark>It's cold. Put on your coat!</mark> <b>It's hot. Put on your sunglasses!</b> <b>It's raining. Take your umbrella!</b> (¡Coge el paraguas!).</p>`,
      svg: vocab("Calor y frío: hot con el sol, cold con la nieve, umbrella con la lluvia", [["sol", "hot", "calor", R], ["nieve", "cold", "frío", A], ["paraguas", "umbrella", "paraguas", V]], { titulo: "Hot or cold?" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras de este tema <mark>suenan raro</mark> al principio.</p><p><b>Clothes</b> se dice «clóuz». <b>Weather</b> se dice «uéder», con la lengua entre los dientes.</p><p><b>Shoes</b> se dice «chus». <b>Coat</b> se dice «cóut». Escucha las canciones del tema y repite. ¡Cantando se aprende sin darse cuenta!</p>`,
      svg: lista("Cómo suenan: clothes clóuz, weather uéder, shoes chus", [["clothes → «clóuz»", A], ["weather → «uéder»", R], ["shoes → «chus»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hablar del tiempo es <mark>muy típico</mark> en inglés.</p><p>En Inglaterra la gente saluda y luego comenta el tiempo: <b>Hello! It's cold today!</b></p><p>Si viajas, sabrás qué ropa meter en la maleta. Y entenderás el pronóstico del tiempo en la tele. ¡Así nunca te mojarás sin paraguas!</p>`,
      svg: vocab("Para qué sirve: charlar, hacer la maleta y ver el tiempo en la tele", [["nina", "talk", "charlar", A], ["mochila", "pack", "preparar", N], ["arcoiris", "forecast", "pronóstico", V]], { titulo: "Weather words are for…" }),
    },
    {
      html: `<h3>Jugamos a vestir al muñeco</h3><p>Dibujad un muñeco en un papel. Un jugador dice qué tiempo hace: <mark>It's cold!</mark></p><p>Los demás dibujan la ropa que necesita. Dicen en voz alta: <b>A coat! A hat!</b></p><p>Luego otro jugador cambia el tiempo: <b>It's sunny and hot!</b> Y hay que cambiar la ropa. ¿Quién viste antes al muñeco? ¡Gana quien acierte más prendas!</p>`,
      svg: charla("Juego: It's cold. A coat and a hat. It's sunny. Sunglasses", [["nina", "It's cold!", A], ["nino", "A coat and a hat!", R], ["nina", "Now it's sunny!", N]]),
    },
  ],
  figura: {
    titulo: "Clothes and weather: la ropa y el tiempo",
    svg: mural("Ropa y tiempo: sunny y T-shirt, rainy y umbrella, cold y coat, snowy y hat", [["sol", "sunny", "T-shirt", N], ["lluvia", "rainy", "umbrella", A], ["abrigo", "cold", "coat", R], ["nieve", "snowy", "hat", V]], "What do I wear?"),
  },
  video: { ...vid("1GDFa-nEzlg", "This Is The Way We Get Dressed | Kids Songs", "Super Simple Songs - Kids Songs", 2073664747, 5621233), busqueda: "clothes song for kids english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Mira por la ventana. Hace sol. Dilo en inglés.",
      pasos: ["Sol es sun.", "El tiempo con sol es sunny.", "Empieza con It's…"],
      resultado: "«It's sunny!»" },
    { enunciado: "Hace frío. Dile a tu hermano que se ponga el abrigo.",
      pasos: ["Ponte se dice put on.", "Abrigo es coat; tu abrigo es your coat.", "Junta las partes."],
      resultado: "«Put on your coat!»" },
    { enunciado: "Di qué llevas puesto: una camiseta azul.",
      pasos: ["Llevo puesto se dice I'm wearing.", "Camiseta es T-shirt; azul es blue.", "El color va antes: a blue T-shirt."],
      resultado: "«I'm wearing a blue T-shirt.»" },
  ],
  errores: [
    "Decir «a trouser»: siempre es trousers, con s.",
    "Decir «It's sun»: se dice It's sunny.",
    "Confundir put on (ponerse) con take off (quitarse).",
    "Leer clothes como «clotes»: se dice «clóuz».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «ropa» en inglés?", sol: "Clothes." },
    { q: "¿Cómo se dice «camiseta»?", sol: "T-shirt." },
    { q: "¿Qué son los shoes?", sol: "Los zapatos." },
    { q: "¿Cómo se dice «abrigo»?", sol: "Coat." },
    { q: "Pregunta en inglés qué tiempo hace.", sol: "How's the weather?" },
    { q: "Di en inglés que hace sol.", sol: "It's sunny." },
    { q: "Di en inglés que está lloviendo.", sol: "It's raining (o It's rainy)." },
    { q: "¿Qué significa It's cold?", sol: "Hace frío." },
    { q: "Di en inglés: «¡Ponte los zapatos!».", sol: "Put on your shoes!" },
    { q: "Juega a vestir al muñeco según el tiempo.", sol: "Por ejemplo: It's cold! A coat and a hat!" },
  ],
  quiz: [
    { q: "«T-shirt» es…", o: ["camiseta", "falda", "gorro"], a: 0, e: "T-shirt = camiseta." },
    { q: "«Dress» es…", o: ["vestido", "zapato", "abrigo"], a: 0, e: "Dress = vestido." },
    { q: "«Pantalones» en inglés es…", o: ["trousers", "shoes", "skirt"], a: 0, e: "Trousers = pantalones." },
    { q: "«Hat» es…", o: ["gorro", "gafas", "camiseta"], a: 0, e: "Hat = gorro." },
    { q: "«It's sunny» significa…", o: ["hace sol", "llueve", "nieva"], a: 0, e: "Sunny = soleado." },
    { q: "«It's raining» significa…", o: ["hace viento", "está lloviendo", "hace calor"], a: 1, e: "Raining = lloviendo." },
    { q: "«It's cold» significa…", o: ["hace frío", "hace calor", "hace sol"], a: 0, e: "Cold = frío." },
    { q: "«Windy» es…", o: ["nublado", "ventoso", "nevado"], a: 1, e: "Windy = hace viento." },
    { q: "«Put on your coat» significa…", o: ["quítate el abrigo", "ponte el abrigo", "coge el abrigo"], a: 1, e: "Put on = ponerse." },
    { q: "Si llueve, necesitas…", o: ["an umbrella", "sunglasses", "a T-shirt"], a: 0, e: "Umbrella = paraguas." },
  ],
  examen: [
    { q: "Los zapatos son…", o: ["shoes", "socks", "hats"], a: 0, e: "Shoes = zapatos." },
    { q: "Contesta: How's the weather? (nieva)", o: ["It's snowy.", "It's sunny.", "It's hot."], a: 0, e: "It's snowy / It's snowing." },
    { q: "Hace calor. ¿Qué dices?", o: ["It's hot!", "It's cold!", "It's cloudy!"], a: 0, e: "Hot = calor." },
    { q: "«Take off your hat» significa…", o: ["quítate el gorro", "ponte el gorro", "mira el gorro"], a: 0, e: "Take off = quitarse." },
  ],
  feynman: ["Cómo se llaman en inglés las prendas de ropa", "Cómo decir qué tiempo hace", "Qué ropa ponerse según el tiempo"],
  mapa: mapa("CLOTHES AND WEATHER", "var(--pri)", [
    ["Clothes", "T-shirt, trousers, dress, shoes", A],
    ["Weather", "sunny, cloudy, rainy, snowy", N],
    ["Hot / cold", "It's hot! It's cold!", R],
    ["Put on…", "Put on your coat!", V],
  ], 230),
  tarjetas: [
    ["ropa", "clothes"],
    ["camiseta / pantalones", "T-shirt / trousers"],
    ["falda / vestido", "skirt / dress"],
    ["zapatos / abrigo", "shoes / coat"],
    ["¿Qué tiempo hace?", "How's the weather?"],
    ["Hace sol / Llueve", "It's sunny / It's raining"],
    ["Hace calor / frío", "It's hot / It's cold"],
    ["¡Ponte el abrigo!", "Put on your coat!"],
  ],
  familias: [
    "Cada mañana, mirad por la ventana y decid el tiempo en inglés.",
    "Al vestiros, nombrad cada prenda: T-shirt, trousers, shoes…",
    "Usad put on y take off en casa: Put on your shoes!",
    "Cantad juntos la canción This is the way we get dressed.",
  ],
  profesores: PROF("Lengua extranjera: léxico de la ropa y del tiempo atmosférico; preguntar How's the weather?; órdenes put on / take off", ["Rutina diaria del tiempo con un panel de símbolos.", "Vestir un muñeco de papel según el tiempo dictado.", "Canción de vestirse con gestos."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
