// Inglés 2º de Primaria: Clothes. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "Clothes",
  minutos: 20,
  objetivos: ["Nombrar prendas de ropa en inglés", "Decir qué llevas puesto: I'm wearing a red T-shirt", "Elegir la ropa según el tiempo: put on your coat"],
  claves: ["clothes", "T-shirt", "trousers", "skirt", "dress", "shoes", "coat", "hat", "I'm wearing…", "Put on…"],
  pregunta: {
    texto: "Mira tu ropa de hoy. ¿Sabes cómo se dice camiseta en inglés?",
    respuesta: "La camiseta es <mark>T-shirt</mark>. La ropa en general es <b>clothes</b>. Puedes decir: <b>I'm wearing a T-shirt</b> (llevo una camiseta).",
  },
  bloques: [
    {
      html: `<h3>Clothes: la ropa</h3><p>La ropa en inglés se llama <mark>clothes</mark>.</p><p>La camiseta es <b>T-shirt</b>, porque tiene forma de letra T. Los pantalones son <b>trousers</b>. La falda es <b>skirt</b>. El vestido es <b>dress</b>.</p><p>Fíjate: <b>trousers</b> siempre lleva <b>s</b>, porque tiene dos perneras. ¡Aunque sea un solo pantalón! Señala tu ropa y nómbrala.</p>`,
      svg: vocab("Ropa: T-shirt camiseta, trousers pantalones, skirt falda, dress vestido", [["camiseta", "T-shirt", "camiseta", R], ["pantalon", "trousers", "pantalones", A], ["falda", "skirt", "falda", Ve], ["vestido", "dress", "vestido", N]], { titulo: "Clothes" }),
    },
    {
      html: `<h3>Shoes, socks and hats</h3><p>También nos ponemos <mark>otras cosas</mark>.</p><p>Los zapatos son <b>shoes</b>. Los calcetines son <b>socks</b>. El gorro es <b>hat</b>. El abrigo es <b>coat</b>.</p><p>Las zapatillas de deporte son <b>trainers</b>. Para el sol usamos gafas, <b>sunglasses</b>. ¿Qué te pones primero por la mañana, los calcetines o los zapatos? ¡Los calcetines, claro!</p>`,
      svg: vocab("Más ropa: shoes zapatos, hat gorro, coat abrigo, sunglasses gafas de sol", [["zapato", "shoes", "zapatos", A], ["gorro", "hat", "gorro", R], ["abrigo", "coat", "abrigo", Ve], ["gafas", "sunglasses", "gafas de sol", N]], { titulo: "More clothes" }),
    },
    {
      html: `<h3>A blue T-shirt</h3><p>Podemos decir <mark>de qué color</mark> es la ropa.</p><p><b>A blue T-shirt</b> es una camiseta azul. <b>Red shoes</b> son zapatos rojos. <b>A green skirt</b> es una falda verde.</p><p>Como siempre en inglés, el color va <b>delante</b>. Mira la ropa de tus compañeros y describe tres prendas con su color. ¿Quién lleva algo amarillo?</p>`,
      svg: vocab("Ropa con color: a blue T-shirt, red shoes, a green skirt", [["camiseta", "blue T-shirt", "camiseta azul", "#1e88e5"], ["zapato", "red shoes", "zapatos rojos", "#e53935"], ["falda", "green skirt", "falda verde", "#43a047"]], { titulo: "Colour + clothes" }),
    },
    {
      html: `<h3>I'm wearing…</h3><p>Para decir lo que <mark>llevas puesto</mark> usas <b>I'm wearing</b>.</p><p><b>I'm wearing a red T-shirt and blue trousers</b>: llevo una camiseta roja y pantalones azules.</p><p>Para preguntar a otro: <b>What are you wearing?</b> (¿Qué llevas puesto?). Él contesta con <b>I'm wearing…</b> Usa <b>and</b> para juntar dos prendas.</p>`,
      svg: charla("What are you wearing? I'm wearing a red T-shirt and blue trousers", [["nina", "What are you wearing?", R], ["nino", "A red T-shirt and blue trousers!", A]]),
    },
    {
      html: `<h3>Put on your coat!</h3><p>Cuando nos vestimos usamos <mark>put on</mark>, que es «ponerse».</p><p><b>Put on your coat</b> significa «ponte el abrigo». <b>Put on your shoes</b> es «ponte los zapatos».</p><p>Para quitarse algo se dice <b>take off</b>: <b>Take off your hat</b>, quítate el gorro. Mamá y papá lo dicen cada mañana antes de ir al cole. ¡Ahora en inglés!</p>`,
      svg: lista("Ponerse y quitarse: put on your coat, put on your shoes, take off your hat", [["Put on your coat!", A], ["Put on your shoes!", R], ["Take off your hat!", Ve]], { titulo: "Get dressed!" }),
      video: V("in8b"),
    },
    {
      html: `<h3>Hot or cold?</h3><p>La ropa cambia <mark>con el tiempo</mark>.</p><p>Si hace calor, <b>It's hot</b>, llevamos camiseta, pantalón corto, <b>shorts</b>, y gorra. Si hace frío, <b>It's cold</b>, llevamos abrigo, bufanda, <b>scarf</b>, y guantes, <b>gloves</b>.</p><p>Si llueve, nos ponemos botas, <b>boots</b>, y cogemos el paraguas, <b>umbrella</b>. ¿Qué ropa necesitas hoy?</p>`,
      svg: vocab("Ropa según el tiempo: hot camiseta, cold abrigo, rain paraguas", [["sol", "hot", "camiseta y shorts", R], ["nieve", "cold", "abrigo y scarf", N], ["paraguas", "rain", "boots y umbrella", A]], { titulo: "What's the weather?" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>La ropa tiene palabras <mark>difíciles de pronunciar</mark>.</p><p><b>Clothes</b> se dice «clóuds». <b>Shoes</b> se dice «shus». <b>Trousers</b> se dice «tráusers».</p><p><b>Coat</b> se dice «cóut». <b>Skirt</b> se dice «skert». Practica con una prenda en la mano: la levantas y dices su nombre. ¡Como en un desfile de moda!</p>`,
      svg: lista("Cómo suenan: clothes clóuds, shoes shus, trousers tráusers, coat cóut", [["clothes → «clóuds»", A], ["shoes → «shus»", R], ["trousers → «tráusers»", Ve], ["coat → «cóut»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En las <mark>tiendas de ropa</mark> muchas etiquetas están en inglés.</p><p>Si sabes estas palabras, entenderás los carteles. También podrás describir a alguien por su ropa: <b>The girl with the red dress</b>.</p><p>Y sabrás qué meter en la maleta antes de un viaje. ¡Nunca más te olvidarás los calcetines!</p>`,
      svg: vocab("Para qué sirve: tiendas, describir y hacer la maleta", [["camiseta", "shops", "tiendas", A], ["nina", "describe", "describir", R], ["mochila", "travel", "maleta", Ve]], { titulo: "Clothes words are for…" }),
    },
    {
      html: `<h3>Jugamos a vestir al muñeco</h3><p>Dibujamos un muñeco <mark>sin ropa</mark> en la pizarra.</p><p>Un niño da órdenes: <b>Put on a red hat!</b> Otro dibuja un gorro rojo en el muñeco.</p><p>Luego sigue otro: <b>Put on blue shoes!</b> Al final, todos describen al muñeco: <b>He's wearing a red hat and blue shoes</b>. ¡Queda muy gracioso!</p>`,
      svg: charla("Vestir al muñeco: Put on a red hat! Put on blue shoes!", [["nina", "Put on a red hat!", R], ["nino", "Put on blue shoes!", A], ["gorro", "Ha, ha! Funny!", Ve]]),
    },
  ],
  figura: {
    titulo: "Clothes: la ropa en inglés",
    svg: mural("Ropa en inglés: T-shirt camiseta, trousers pantalones, dress vestido, shoes zapatos", [["camiseta", "T-shirt", "camiseta", R], ["pantalon", "trousers", "pantalones", A], ["vestido", "dress", "vestido", Ve], ["zapato", "shoes", "zapatos", N]], "Clothes"),
  },
  video: V("in8v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que llevas un vestido rosa.",
      pasos: ["Llevo puesto se dice I'm wearing.", "Vestido es dress; rosa es pink.", "El color va delante: a pink dress."],
      resultado: "«I'm wearing a pink dress.»" },
    { enunciado: "Hace mucho frío. ¿Qué le dices a tu hermano?",
      pasos: ["Ponte se dice put on.", "Abrigo es coat.", "Añade your: tu abrigo."],
      resultado: "«Put on your coat!»" },
    { enunciado: "Llueve. ¿Qué te pones?",
      pasos: ["Lluvia es rain.", "Para los pies: boots.", "Y el paraguas: umbrella."],
      resultado: "«Boots and an umbrella!»" },
  ],
  errores: [
    "Decir «a trouser»: siempre se dice trousers.",
    "Decir «a T-shirt red»: el color va antes, a red T-shirt.",
    "Confundir put on (ponerse) y take off (quitarse).",
    "Leer clothes como «clotes»: se dice «clóuds».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «ropa» en inglés?", sol: "Clothes." },
    { q: "¿Qué es una T-shirt?", sol: "Una camiseta." },
    { q: "¿Cómo se dice «falda»?", sol: "Skirt." },
    { q: "¿Qué son los shoes?", sol: "Los zapatos." },
    { q: "Di en inglés: «unos pantalones azules».", sol: "Blue trousers." },
    { q: "Di qué llevas puesto hoy con I'm wearing.", sol: "Por ejemplo: I'm wearing a green T-shirt and jeans." },
    { q: "¿Qué significa Put on your hat?", sol: "Ponte el gorro." },
    { q: "¿Qué ropa llevas si hace frío? Di dos prendas.", sol: "Por ejemplo: a coat and a scarf (o gloves, a hat)." },
    { q: "¿Qué significa take off?", sol: "Quitarse una prenda." },
    { q: "Viste un muñeco al dictado con alguien de casa.", sol: "Por ejemplo: Put on a yellow hat! Put on red shoes!" },
  ],
  quiz: [
    { q: "«Clothes» es…", o: ["ropa", "zapatos", "armario"], a: 0, e: "Clothes = ropa." },
    { q: "«Trousers» es…", o: ["calcetines", "pantalones", "falda"], a: 1, e: "Trousers = pantalones." },
    { q: "«Vestido» en inglés es…", o: ["dress", "skirt", "coat"], a: 0, e: "Dress = vestido." },
    { q: "«Hat» es…", o: ["gorro", "abrigo", "guante"], a: 0, e: "Hat = gorro o sombrero." },
    { q: "«Socks» son…", o: ["zapatos", "calcetines", "botas"], a: 1, e: "Socks = calcetines." },
    { q: "Una camiseta roja es…", o: ["a T-shirt red", "a red T-shirt", "red a T-shirt"], a: 1, e: "Color delante." },
    { q: "«I'm wearing a coat» significa…", o: ["Llevo un abrigo", "Compro un abrigo", "Quiero un abrigo"], a: 0, e: "I'm wearing = llevo puesto." },
    { q: "«Put on your shoes» es…", o: ["quítate los zapatos", "ponte los zapatos", "limpia los zapatos"], a: 1, e: "Put on = ponerse." },
    { q: "Si hace frío llevas…", o: ["shorts", "a scarf", "sunglasses"], a: 1, e: "Scarf = bufanda." },
    { q: "«Coat» es…", o: ["abrigo", "gorra", "camisa"], a: 0, e: "Coat = abrigo." },
  ],
  examen: [
    { q: "«Skirt» es…", o: ["falda", "camisa", "vestido"], a: 0, e: "Skirt = falda." },
    { q: "«Take off your hat» es…", o: ["ponte el gorro", "quítate el gorro", "busca el gorro"], a: 1, e: "Take off = quitarse." },
    { q: "What are you wearing? →", o: ["I'm wearing a blue dress.", "I like blue.", "It's cold."], a: 0, e: "Se contesta con I'm wearing." },
    { q: "Si llueve llevas…", o: ["boots", "sunglasses", "shorts"], a: 0, e: "Boots = botas." },
  ],
  feynman: ["Cómo se llaman las prendas de ropa en inglés", "Cómo decir lo que llevas puesto", "Qué ropa ponerse según el tiempo"],
  mapa: mapa("CLOTHES", "var(--pri)", [
    ["Ropa", "T-shirt, trousers, skirt, dress", R],
    ["Más", "shoes, socks, hat, coat", A],
    ["Llevar", "I'm wearing a red T-shirt", Ve],
    ["Vestirse", "put on / take off", N],
  ], 230),
  tarjetas: [
    ["ropa", "clothes"],
    ["camiseta / pantalones", "T-shirt / trousers"],
    ["falda / vestido", "skirt / dress"],
    ["zapatos / calcetines", "shoes / socks"],
    ["gorro / abrigo", "hat / coat"],
    ["Llevo puesto…", "I'm wearing…"],
    ["ponerse / quitarse", "put on / take off"],
    ["bufanda / guantes", "scarf / gloves"],
  ],
  familias: [
    "Al vestirse por la mañana, nombrad cada prenda en inglés.",
    "Usad Put on your coat! y Take off your shoes! en casa.",
    "Preparad juntos una maleta imaginaria diciendo la ropa en inglés.",
    "Jugad a describir a alguien por su ropa: He's wearing a blue T-shirt.",
  ],
  profesores: PROF("Lengua extranjera: léxico de la ropa; present continuous en la fórmula I'm wearing; adjetivo de color + nombre; put on / take off; ropa y tiempo atmosférico", ["Vestir un muñeco al dictado en la pizarra.", "Desfile de moda: cada alumno describe lo que lleva.", "Clasificar prendas en hot / cold."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
