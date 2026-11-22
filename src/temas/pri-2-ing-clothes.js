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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Ampliar el vocabulario de la ropa: pyjamas, scarf, gloves", "Describir la ropa con color y tamaño: a big red hat", "Usar He's wearing / She's wearing", "Comprar ropa con frases sencillas"],
  lectura: { titulo: "Teddy's suitcase", html: `<p>Teddy is a brown bear. Tomorrow he is going on holiday to the mountains. It's very cold there, with lots of snow.</p><p>Teddy opens his <b>suitcase</b>. "What can I take?" he asks.</p><p>First, he puts in a warm <b>jumper</b> and a pair of <b>trousers</b>. Then, he puts in a big <b>coat</b>, a woolly <b>hat</b>, a long <b>scarf</b> and two <b>gloves</b>.</p><p>"And my <b>boots</b> for the snow!" he says.</p><p>His friend Bunny looks at the suitcase. "Teddy, where are your <b>pyjamas</b>?"</p><p>"Oh, no! I forgot my pyjamas!" Teddy laughs and puts his blue pyjamas with yellow stars in the suitcase.</p><p>"Now I'm ready!" says Teddy.</p><p>"Wait!" says Bunny. "What about your <b>swimsuit</b>?"</p><p>"A swimsuit? In the snow? No, thank you!" says Teddy. They both laugh.</p><p><i>(suitcase: maleta · woolly: de lana · forgot: olvidé · ready: listo)</i></p>` },
  tras: {
    "Shoes, socks and hats": [
      ["Winter and summer clothes", `<p>Hay ropa para el frío y ropa para el calor.</p><p><mark>Winter clothes</mark> (ropa de invierno):</p><ul><li><b>coat</b>: abrigo.</li><li><b>scarf</b>: bufanda.</li><li><b>gloves</b>: guantes.</li><li><b>boots</b>: botas.</li><li><b>jumper</b>: jersey.</li></ul><p><mark>Summer clothes</mark> (ropa de verano):</p><ul><li><b>shorts</b>: pantalón corto.</li><li><b>sandals</b>: sandalias.</li><li><b>cap</b>: gorra.</li><li><b>sunglasses</b>: gafas de sol.</li><li><b>swimsuit</b>: bañador.</li></ul><p>Algunas palabras van siempre en plural porque tienen dos partes: <b>trousers</b>, <b>shorts</b>, <b>pyjamas</b>, <b>sunglasses</b>.</p><p>Recuerda: en invierno hace frío, así que nos abrigamos mucho. En verano hace calor, y llevamos ropa ligera, gorra y crema para el sol. «It's cold! Put on your coat!» «It's hot! Put on your cap!»</p><p><b>Actividad</b>: haz dos columnas en tu cuaderno y dibuja ropa de invierno y de verano.</p>`,
        H6.dos("Clothes", ["WINTER", ["coat", "scarf", "gloves"], cAZ], ["SUMMER", ["shorts", "cap", "sandals"], cNA])],
    ],
    "A blue T-shirt": [
      ["A big red hat", `<p>Para describir una prenda decimos primero el <b>tamaño</b>, luego el <b>color</b> y al final la <b>prenda</b>:</p><ul><li>«a <b>big red</b> hat»: un sombrero grande y rojo.</li><li>«a <b>small blue</b> T-shirt»: una camiseta pequeña y azul.</li><li>«<b>long green</b> socks»: calcetines largos y verdes.</li><li>«<b>short black</b> boots»: botas cortas y negras.</li></ul><p>En español el color va después («camiseta azul»), pero en inglés va <mark>antes</mark> («blue T-shirt»).</p><p>También podemos decir si nos gusta:</p><ul><li>«I like your <b>yellow</b> dress!» (¡Me gusta tu vestido amarillo!)</li><li>«My favourite clothes are my <b>green</b> trainers.»</li></ul><p><b>Actividad</b>: describe la ropa que llevas hoy con tamaño y color.</p>`,
        H6.flujo("Order", ["a|un", "big|tamaño", "red|color", "hat|prenda"], cRO),
        ["YSoGPslg2Vc", "Put On Your Shoes Let's Go Song", "ToysPlay", 762229934]],
    ],
    "I'm wearing…": [
      ["He's wearing, she's wearing", `<p>Para decir lo que lleva puesto <b>otra persona</b>:</p><ul><li><mark>He's wearing</mark>: él lleva puesto.</li><li><mark>She's wearing</mark>: ella lleva puesto.</li></ul><p>Look at the pictures and listen:</p><ul><li>«This is Tom. <b>He's wearing</b> a blue jumper and brown trousers.»</li><li>«This is Ana. <b>She's wearing</b> a pink dress and white shoes.»</li><li>«The clown <b>is wearing</b> a big red nose and funny shoes!»</li></ul><p>Para preguntar: <b>What are you wearing?</b> (¿Qué llevas puesto?)</p><ul><li>«What are you wearing?» — «<b>I'm wearing</b> a green T-shirt and jeans.»</li></ul><p>Fíjate en que <i>wearing</i> termina en <b>-ing</b>: así se dice lo que está pasando ahora mismo. Otra pregunta útil es «What is she wearing?» (¿Qué lleva ella?), y respondemos «She's wearing a yellow coat and blue boots».</p><p><b>Actividad</b>: juega a «Who is it?»: describe la ropa de un compañero y los demás adivinan quién es.</p>`,
        L6.filas("Wearing", [["I'm", "yo llevo", cAZ], ["He's", "él lleva", cVE], ["She's", "ella lleva", cRO], ["You're", "tú llevas", cNA]])],
    ],
    "Hot or cold?": [
      ["At the clothes shop", `<p>En una tienda de ropa (<mark>clothes shop</mark>) podemos usar estas frases:</p><ul><li>«<b>Can I help you?</b>»: ¿Puedo ayudarte? (dice el dependiente)</li><li>«<b>I'd like</b> a T-shirt, please.»: Quería una camiseta, por favor.</li><li>«<b>What colour?</b>»: ¿De qué color?</li><li>«<b>Can I try it on?</b>»: ¿Me lo puedo probar?</li><li>«<b>How much is it?</b>»: ¿Cuánto cuesta?</li><li>«<b>It's ten euros.</b>»: Cuesta diez euros.</li><li>«<b>Thank you. Goodbye!</b>»</li></ul><p>Si la ropa nos queda grande decimos «<b>It's too big</b>», y si nos queda pequeña, «<b>It's too small</b>».</p><p><b>Actividad</b>: montad una tienda de ropa en clase y practicad el diálogo.</p>`,
        L6.dialogo("Shop", [["Shop", "Can I help you?", cAZ], ["Mia", "I'd like a hat, please.", cRO], ["Shop", "What colour?", cAZ], ["Mia", "Red, please!", cRO]])],
    ],
  },
  final: [
    ["Clothes around the world", `<p>En distintos países la gente lleva <mark>ropa tradicional</mark> muy bonita:</p><ul><li>In <b>Scotland</b> (Escocia), men sometimes wear a <b>kilt</b>: una falda de cuadros.</li><li>In <b>Japan</b> (Japón), people wear a <b>kimono</b> on special days.</li><li>In <b>Mexico</b>, some people wear a big hat called a <b>sombrero</b>.</li><li>In <b>India</b>, many women wear a <b>sari</b>: una tela larga de colores.</li><li>In <b>Spain</b>, some people wear a <b>flamenco dress</b> at the fair.</li></ul><p>En los países muy fríos la gente lleva abrigos gruesos, y en los muy calurosos, ropa ancha y ligera para no pasar calor.</p><p><b>Actividad</b>: dibuja a un niño o niña con ropa tradicional de otro país y di qué lleva: «He's wearing a kilt».</p>`,
      H6.rueda("World", "CLOTHES", [["kilt", cVE], ["kimono", cRO], ["sari", cNA], ["sombrero", cMO]])],
    ["Repaso: Teddy's suitcase", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Teddy va a la montaña, donde hace <b>frío</b>: it's <b>cold</b>.</li><li>Mete un <b>jumper</b> y unos <b>trousers</b>.</li><li>Mete ropa de invierno: <b>coat</b>, <b>hat</b>, <b>scarf</b> and <b>gloves</b>.</li><li>Para la nieve lleva <b>boots</b>.</li><li>Se olvida de los <b>pyjamas</b>: azules con estrellas amarillas, <b>blue pyjamas with yellow stars</b>.</li><li>No necesita <b>swimsuit</b> en la nieve.</li></ul><p>Antes de un viaje hay que pensar qué tiempo hará y elegir la ropa adecuada.</p><p>Teddy is ready for the snow. Remember: si vas a la playa necesitas un swimsuit, sandals, a cap and sunglasses; si vas a la nieve, un coat, a scarf, gloves and boots.</p><p><b>Actividad</b>: haz una lista en inglés de la ropa que llevarías a la playa.</p>`,
      L6.filas("Suitcase", [["jumper", "jersey", cAZ], ["scarf", "bufanda", cRO], ["boots", "botas", cMO], ["pyjamas", "pijama", cNA]])],
  ],
  ejemplos: [
    ["Di «una camiseta pequeña y verde».", ["Tamaño, color, prenda."], "A small green T-shirt."],
    ["Ella lleva un vestido rosa.", ["She's wearing + a pink dress."], "She's wearing a pink dress."],
  ],
  errores: ["Poner el color detrás: «a T-shirt blue».", "Decir «a trouser»: siempre es «trousers»."],
  ejercicios: [
    ["b", "How do you say «bufanda»?", "Scarf."],
    ["b", "How do you say «guantes»?", "Gloves."],
    ["b", "Name a summer clothes word.", "Shorts, cap, sandals…"],
    ["b", "What is «He's wearing»?", "Él lleva puesto."],
    ["b", "Translate: ¿Cuánto cuesta?", "How much is it?"],
    ["m", "Order: hat / a / red / big", "A big red hat."],
    ["m", "Complete: «She ___ wearing a dress.»", "Is (She's)."],
    ["m", "Translate: Me queda grande.", "It's too big."],
    ["m", "What do people wear in Japan on special days?", "A kimono."],
    ["m", "Answer: What are you wearing?", "I'm wearing…"],
    ["a", "In the reading, what does Teddy forget?", "His pyjamas."],
    ["a", "Describe Teddy's pyjamas.", "Blue pyjamas with yellow stars."],
    ["a", "Write the shop dialogue to buy a scarf.", "Open answer."],
    ["a", "Describe what your teacher is wearing today.", "Open answer."],
  ],
  quiz: [
    ["Guantes is…", ["gloves", "boots", "socks"], "Winter."],
    ["«a ___ hat»", ["big red", "red big", "hat red"], "Order."],
    ["Ella lleva puesto…", ["She's wearing", "He's wearing", "I'm wearing"], "Wearing."],
    ["¿Cuánto cuesta?", ["How much is it?", "What colour?", "Can I help you?"], "Shop."],
    ["In Scotland some men wear a…", ["kilt", "kimono", "sari"], "World."],
  ],
  examen: [
    ["In the reading, where is Teddy going?", ["to the mountains", "to the beach", "to school"], "Reading."],
    ["What colour are Teddy's pyjamas?", ["blue", "red", "green"], "Repaso."],
  ],
  tarjetas: [
    ["Order", "Tamaño + color + prenda: a big red hat."],
    ["Wearing", "I'm / He's / She's wearing…"],
  ],
  glosario: [
    ["Coat", "Abrigo."],
    ["Scarf", "Bufanda."],
    ["Gloves", "Guantes."],
    ["Boots", "Botas."],
    ["Jumper", "Jersey."],
    ["Shorts", "Pantalón corto."],
    ["Pyjamas", "Pijama."],
    ["Swimsuit", "Bañador."],
    ["Suitcase", "Maleta."],
    ["Too big", "Demasiado grande."],
  ],
  situacion: {
    titulo: "Fashion show",
    reto: "La clase organiza un desfile de moda en inglés: cada alumno presenta la ropa de un compañero.",
    pasos: ["Elegir ropa de invierno, de verano o tradicional.", "Escribir una presentación: «This is… He's wearing…».", "Incluir tamaño y color: «a big yellow hat».", "Desfilar y presentar en inglés."],
    producto: "Un desfile de moda con presentaciones en inglés.",
    evaluacion: ["Nombra prendas de invierno y verano.", "Ordena tamaño, color y prenda.", "Usa He's / She's wearing.", "Usa frases de tienda."],
  },
});
