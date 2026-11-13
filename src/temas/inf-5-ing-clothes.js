// Infantil 5 años · Primeros pasos en inglés: Clothes. Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, ic, nino, vocab, charla, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "Clothes",
  objetivos: ["Nombrar prendas de ropa en inglés", "Decir el color de la ropa: a red T-shirt", "Usar Put on… al vestirse"],
  claves: ["clothes", "T-shirt", "trousers", "dress", "shoes", "socks", "hat", "coat", "put on"],
  pregunta: {
    texto: "¿Qué ropa llevas hoy? ¿Sabes cómo se dice «camiseta» en inglés?",
    respuesta: "La ropa en inglés es <mark>clothes</mark>. La camiseta es <b>T-shirt</b>, ¡como la letra T, por su forma!",
  },
  bloques: [
    {
      html: `<h3>Clothes: la ropa</h3><p>La ropa en inglés se dice <mark>clothes</mark>.</p><p>La camiseta es <b>T-shirt</b>. El pantalón es <b>trousers</b>.</p><p>El vestido es <b>dress</b> y la falda, <b>skirt</b>.</p>`,
      svg: vocab("T-shirt, trousers, dress y skirt", [["camiseta", "T-shirt", "camiseta", A], ["pantalon", "trousers", "pantalón", R], ["vestido", "dress", "vestido", N], ["falda", "skirt", "falda", V]]),
    },
    {
      html: `<h3>En los pies</h3><p>En los pies llevamos <mark>socks</mark>, los calcetines.</p><p>Encima, los <b>shoes</b>, los zapatos.</p><p>Si llueve, nos ponemos <b>boots</b>, las botas.</p><p>Primero los socks y después los shoes.</p>`,
      svg: vocab("Socks, shoes y boots", [["calcetin", "socks", "calcetines", V], ["zapato", "shoes", "zapatos", R], ["bota", "boots", "botas", M]]),
    },
    {
      html: `<h3>Para el frío</h3><p>Cuando hace frío nos ponemos el <mark>coat</mark>, el abrigo.</p><p>En la cabeza, el <b>hat</b>. En el cuello, el <b>scarf</b>, la bufanda.</p><p>¡Y en las manos, <b>gloves</b>!</p>`,
      svg: vocab("Coat, hat, scarf y gloves", [["abrigo", "coat", "abrigo", W], ["gorro", "hat", "gorro", R], ["bufanda", "scarf", "bufanda", R], ["guante", "gloves", "guantes", N]]),
    },
    {
      html: `<h3>Ropa de colores</h3><p>Decimos el color <mark>antes</mark> de la prenda.</p><p><b>A red T-shirt</b>: una camiseta roja. <b>Blue trousers</b>: un pantalón azul.</p><p>¿De qué color es tu camiseta?</p>`,
      svg: vocab("A red hat, a blue T-shirt y green socks", [["gorro", "a red hat", "un gorro rojo", R], ["camiseta", "a blue T-shirt", "una camiseta azul", A], ["calcetin", "green socks", "calcetines verdes", V]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Así puedes <mark>vestirte en inglés</mark> cada mañana.</p><p>Mamá o papá dice: «<b>Put on your shoes!</b>», ponte los zapatos. ¡Y tú lo haces!</p><p>¡Muy fácil!</p>`,
      svg: charla("Diálogo: Put on your shoes! OK!", [["mama", "Put on your shoes!", R], ["nino", "OK! My red shoes!", A]]),
    },
    {
      html: `<h3>Juego: la maleta</h3><p>Prepara una maleta de mentira.</p><p>Mete cada prenda diciendo su nombre: <mark>a T-shirt, socks, a hat…</mark></p><p>¿Qué se te ha olvidado?</p><p>Luego sácalo todo diciendo los nombres.</p>`,
      svg: svg("Una maleta abierta con camiseta, calcetines y gorro", `<rect x="40" y="70" width="180" height="90" rx="10" fill="${N}" opacity=".85"/><rect x="40" y="40" width="180" height="34" rx="8" fill="${N}" opacity=".55"/><path d="M110 40 v-12 h40 v12" stroke="${K}" stroke-width="4" fill="none"/>${ic("camiseta", 80, 112, 1.2)}${ic("calcetin", 130, 112, 1.2)}${ic("gorro", 180, 112, 1.2)}${rot(130, 174, "a T-shirt, socks, a hat…", { color: K, size: 13 })}`),
    },
  ],
  figura: {
    titulo: "Clothes",
    svg: mural("Ocho prendas de ropa en inglés", [["camiseta", "T-shirt", "camiseta", A], ["pantalon", "trousers", "pantalón", R], ["vestido", "dress", "vestido", N], ["falda", "skirt", "falda", V], ["calcetin", "socks", "calcetines", V], ["zapato", "shoes", "zapatos", R], ["abrigo", "coat", "abrigo", A], ["gorro", "hat", "gorro", N]], "What are you wearing?"),
  },
  video: { ...vid("KFQxBCvgx70", "Clothing Song For Kids: Learn 15 Words", "Dream English Kids", 15449967), busqueda: "clothes song for kids" },
  ejemplos: [
    { enunciado: "¿Cómo se dice «un gorro rojo»?", pasos: ["Gorro es hat. Rojo es red.", "En inglés, el color va antes: red hat."], resultado: "a red hat." },
    { enunciado: "Mamá dice: Put on your coat!", pasos: ["Put on es «ponte».", "Coat es «abrigo»."], resultado: "¡me pongo el abrigo!" },
  ],
  errores: [
    "Poner el color detrás: no es «T-shirt red», sino red T-shirt.",
    "Confundir shoes (zapatos) y socks (calcetines).",
    "Decir «a trousers»: trousers va siempre sin «a».",
  ],
  ejercicios: [
    { q: "Al vestirte, di el nombre de cada prenda en inglés.", sol: "Nota para la familia: T-shirt, trousers, socks, shoes…" },
    { q: "Señala: Where's your T-shirt?", sol: "Señala su camiseta." },
    { q: "Di de qué color es tu ropa hoy.", sol: "Por ejemplo: a blue T-shirt, red shoes." },
    { q: "Viste a un muñeco diciendo Put on your hat, put on your coat.", sol: "Nota: jugad por turnos." },
    { q: "Separa la ropa de frío: coat, hat, scarf, gloves.", sol: "Nota: usad ropa real de casa." },
    { q: "Canta Put on your shoes con el vídeo.", sol: "Haced los gestos de ponerse cada prenda." },
  ],
  quiz: [
    { q: "T-shirt es…", o: ["camiseta", "zapato", "gorro"], a: 0, e: "T-shirt = camiseta." },
    { q: "¿Cómo se dice «zapatos»?", o: ["socks", "shoes", "hat"], a: 1, e: "Shoes = zapatos." },
    { q: "Coat es…", o: ["abrigo", "falda", "calcetín"], a: 0, e: "Coat = abrigo." },
    { q: "A red hat es…", o: ["un gorro rojo", "un abrigo azul", "un zapato rojo"], a: 0, e: "Red = rojo, hat = gorro." },
    { q: "Put on your shoes significa…", o: ["quítate los zapatos", "ponte los zapatos", "mira los zapatos"], a: 1, e: "Put on = ponte." },
    { q: "Clothes significa…", o: ["ropa", "casa", "comida"], a: 0, e: "Clothes = ropa." },
  ],
  examen: [
    { q: "Socks es…", o: ["calcetines", "botas", "guantes"], a: 0, e: "Socks = calcetines." },
    { q: "Para el frío me pongo…", o: ["a coat", "a skirt", "shorts"], a: 0, e: "Coat = abrigo." },
    { q: "¿Cómo se dice «vestido»?", o: ["dress", "hat", "boots"], a: 0, e: "Dress = vestido." },
  ],
  feynman: ["El nombre de cinco prendas en inglés", "Dónde va el color: red T-shirt", "Qué significa Put on your…"],
  mapa: mapa("CLOTHES", "var(--pri)", [
    ["Body", "T-shirt, trousers, dress", A],
    ["Feet", "socks, shoes, boots", R],
    ["Cold", "coat, hat, scarf, gloves", V],
    ["Put on…", "ponte…", N],
  ], 230),
  tarjetas: [
    ["Camiseta", "T-shirt"],
    ["Pantalón", "Trousers"],
    ["Zapatos", "Shoes"],
    ["Calcetines", "Socks"],
    ["Abrigo", "Coat"],
    ["Put on your hat!", "¡Ponte el gorro!"],
  ],
  familias: [
    "Al vestiros por la mañana, nombrad la ropa en inglés.",
    "Jugad a vestir muñecos o peluches diciendo Put on…",
    "Doblad la ropa limpia juntos y decid su nombre y su color en inglés.",
    "Haced una maleta de juego para un viaje imaginario.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: vocabulario de las prendas de vestir, colores y la instrucción Put on en rutinas", ["Cesta de disfraces para nombrar prendas.", "Canción con gestos de vestirse.", "Juego de la maleta en pequeño grupo."]),
});
