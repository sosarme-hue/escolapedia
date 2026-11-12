// Inglés 1º de Primaria: Food. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "Food",
  minutos: 20,
  objetivos: ["Nombrar frutas y alimentos en inglés: apple, banana, bread, milk…", "Decir qué te gusta comer: I like apples", "Pedir comida con educación: Can I have…, please?"],
  claves: ["food", "apple", "banana", "bread", "cheese", "milk", "water", "I like…", "I'm hungry"],
  pregunta: {
    texto: "¿Cuál es tu fruta favorita? ¿Sabes cómo se dice «manzana» en inglés?",
    respuesta: "Manzana se dice <mark>apple</mark> («ápel»). La comida en inglés se dice <b>food</b>.",
  },
  bloques: [
    {
      html: `<h3>Fruit: la fruta</h3><p>La fruta en inglés se dice <mark>fruit</mark>. Se pronuncia «frut».</p><p>La manzana es <b>apple</b>. El plátano es <b>banana</b>. La pera es <b>pear</b>. Las uvas son <b>grapes</b>.</p><p>La naranja es <b>orange</b>, igual que el color. La fruta es muy sana. ¿Cuál has comido hoy? Dilo en inglés: <b>I ate an apple!</b></p>`,
      svg: vocab("Frutas: apple, banana, pear, grapes", [["manzana", "apple", "manzana", R], ["platano", "banana", "plátano", N], ["pera", "pear", "pera", V], ["uva", "grapes", "uvas", A]], { titulo: "Fruit" }),
    },
    {
      html: `<h3>Food: más comida</h3><p>Hay muchos más alimentos. El pan es <mark>bread</mark>. El queso es <mark>cheese</mark>.</p><p>El huevo es <b>egg</b>. El pescado es <b>fish</b>, igual que el pez. El pollo es <b>chicken</b>.</p><p>La sopa es <b>soup</b>. Con estas palabras ya puedes contar qué hay en tu plato. ¿Qué has comido hoy en el comedor?</p>`,
      svg: vocab("Alimentos: bread, cheese, egg, soup", [["pan", "bread", "pan", N], ["queso", "cheese", "queso", A], ["huevo", "egg", "huevo", R], ["sopa", "soup", "sopa", V]], { titulo: "Food" }),
    },
    {
      html: `<h3>Drinks: las bebidas</h3><p>Las bebidas en inglés se llaman <mark>drinks</mark>.</p><p>El agua es <b>water</b>. Se dice «uóter». La leche es <b>milk</b>. El zumo es <b>juice</b>, que se dice «yus».</p><p>Cuando tienes sed, dices <b>I'm thirsty</b>. Lo mejor para la sed es el agua. ¡Bebe mucha agua cada día!</p>`,
      svg: vocab("Bebidas: water es agua y milk es leche", [["agua", "water", "agua", A], ["leche", "milk", "leche", V]], { titulo: "Drinks" }),
    },
    {
      html: `<h3>I like… / I don't like…</h3><p>Para decir lo que te gusta comer, usamos <mark>I like…</mark></p><p>Por ejemplo: <b>I like apples</b> (Me gustan las manzanas). <b>I like cheese</b> (Me gusta el queso).</p><p>Si no te gusta, dices <b>I don't like…</b> Por ejemplo, <b>I don't like fish</b>. Y para preguntar: <b>Do you like bananas?</b> Contestamos <b>Yes, I do</b> o <b>No, I don't</b>.</p>`,
      svg: charla("Una niña pregunta Do you like bananas y un niño contesta Yes, I do", [["nina", "Do you like bananas?", R], ["nino", "Yes, I do!", A], ["nina", "I don't like fish.", R]]),
    },
    {
      html: `<h3>I'm hungry!</h3><p>Cuando tienes hambre, dices <mark>I'm hungry!</mark> Se dice «áim jángri».</p><p>Cuando ya has comido mucho, dices <b>I'm full</b> (Estoy lleno).</p><p>Si algo está muy rico, decimos <b>Yummy!</b> o <b>It's delicious!</b> Y si no está rico… <b>Yuck!</b> ¡Pero siempre hay que probar las cosas antes de decidir!</p>`,
      svg: vocab("Hambre y comida rica: I'm hungry, yummy, I'm full", [["boca_abierta", "I'm hungry", "tengo hambre", R], ["feliz", "Yummy!", "¡qué rico!", V], ["nino", "I'm full", "estoy lleno", A]]),
    },
    {
      html: `<h3>Can I have…, please?</h3><p>Para pedir comida, lo hacemos <mark>con educación</mark>.</p><p>Decimos <b>Can I have an apple, please?</b> (¿Me das una manzana, por favor?).</p><p>Nos contestan <b>Here you are!</b> (¡Aquí tienes!). Y nosotros decimos <b>Thank you!</b> Fíjate: delante de apple y egg decimos <b>an</b>, no a. ¡Es para que suene mejor!</p>`,
      svg: charla("Un niño pide Can I have an apple, please? Here you are. Thank you", [["nino", "Can I have an apple, please?", A], ["mama", "Here you are!", R], ["nino", "Thank you!", A]]),
      video: vid("xIfPQJidQHY", "Are You Hungry? | The Super Simple Puppets | Kids Healthy Food Song", "Super Simple Songs - Kids Songs", 182376477),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras de comida <mark>engañan</mark> al leerlas.</p><p><b>Bread</b> se dice «bred». <b>Cheese</b> se dice «chis», con una i larga.</p><p><b>Juice</b> se dice «yus». <b>Water</b> se dice «uóter». Escucha a tu teacher o la canción del tema. Luego repite cada palabra mientras señalas la comida.</p>`,
      svg: lista("Cómo suenan: bread bred, cheese chis, water uóter", [["bread → «bred»", A], ["cheese → «chis»", R], ["water → «uóter»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hablar de comida es <mark>muy útil</mark> cuando viajas.</p><p>En un restaurante o un supermercado de otro país, podrás pedir lo que quieres: <b>Water, please!</b></p><p>También sabrás decir si algo no te gusta o si te sienta mal. ¡Y entenderás los menús escritos en inglés!</p>`,
      svg: vocab("Para qué sirve: pedir en un restaurante, comprar y viajar", [["cuchara", "restaurant", "restaurante", A], ["pan", "shop", "tienda", N], ["avion", "travel", "viajar", R]], { titulo: "Food words are for…" }),
    },
    {
      html: `<h3>Jugamos a la tienda</h3><p>Montad una <mark>tienda de mentira</mark> con frutas de juguete o dibujos.</p><p>Uno es el tendero y dice: <b>Hello! Can I help you?</b> (¿Te ayudo?).</p><p>El cliente pide: <b>Two bananas, please!</b> El tendero da los plátanos y dice: <b>Here you are!</b> Luego cambiad los papeles. ¡Practicaréis números y comida a la vez!</p>`,
      svg: charla("Juego de la tienda: Can I help you? Two bananas, please. Here you are", [["papa", "Can I help you?", A], ["nina", "Two bananas, please!", R], ["platano", "Here you are!", N]]),
    },
  ],
  figura: {
    titulo: "Food: la comida en inglés",
    svg: mural("Comida en inglés: apple manzana, bread pan, cheese queso, milk leche", [["manzana", "apple", "manzana", R], ["pan", "bread", "pan", N], ["queso", "cheese", "queso", A], ["leche", "milk", "leche", V]], "Yummy food!"),
  },
  video: { ...vid("frN3nvhIHUk", "Do You Like Broccoli Ice Cream? | Food Song for Kids!", "Super Simple Songs - Kids Songs", 1122395370, 1387044), busqueda: "food song for kids english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que te gusta el queso.",
      pasos: ["Me gusta se dice I like.", "Queso en inglés es cheese.", "Junta las dos partes."],
      resultado: "«I like cheese!»" },
    { enunciado: "Tienes sed. Pide agua en inglés.",
      pasos: ["Agua es water.", "Empieza con Can I have some…", "Termina con please."],
      resultado: "«Can I have some water, please?»" },
    { enunciado: "Te preguntan Do you like fish? y no te gusta.",
      pasos: ["La pregunta es ¿Te gusta el pescado?", "No te gusta: la respuesta empieza con No.", "Añade I don't."],
      resultado: "«No, I don't.»" },
  ],
  errores: [
    "Decir «a apple»: delante de apple decimos an apple.",
    "Leer water como se escribe: se dice «uóter».",
    "Confundir hungry (hambre) con thirsty (sed).",
    "Contestar a Do you like…? solo con «yes»: mejor Yes, I do.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «manzana» en inglés?", sol: "Apple." },
    { q: "¿Cómo se dice «plátano»?", sol: "Banana." },
    { q: "¿Qué es bread?", sol: "Pan." },
    { q: "¿Cómo se dice «leche»?", sol: "Milk." },
    { q: "¿Cómo se dice «agua»?", sol: "Water." },
    { q: "Di en inglés: «Me gustan los plátanos».", sol: "I like bananas." },
    { q: "Di en inglés: «No me gusta la sopa».", sol: "I don't like soup." },
    { q: "¿Qué dices cuando tienes hambre?", sol: "I'm hungry!" },
    { q: "Pide un huevo en inglés.", sol: "Can I have an egg, please?" },
    { q: "Juega a la tienda en casa pidiendo fruta en inglés.", sol: "Por ejemplo: Three apples, please! Here you are!" },
  ],
  quiz: [
    { q: "«Apple» es…", o: ["manzana", "pera", "uva"], a: 0, e: "Apple = manzana." },
    { q: "«Bread» es…", o: ["queso", "pan", "huevo"], a: 1, e: "Bread = pan." },
    { q: "«Leche» en inglés es…", o: ["water", "milk", "juice"], a: 1, e: "Milk = leche." },
    { q: "«Cheese» es…", o: ["queso", "pollo", "sopa"], a: 0, e: "Cheese = queso." },
    { q: "«Grapes» son…", o: ["uvas", "peras", "naranjas"], a: 0, e: "Grapes = uvas." },
    { q: "«I'm hungry» significa…", o: ["tengo sed", "tengo hambre", "estoy lleno"], a: 1, e: "Hungry = hambre." },
    { q: "«I like apples» significa…", o: ["Me gustan las manzanas", "Tengo manzanas", "Como manzanas"], a: 0, e: "I like = me gusta." },
    { q: "Para pedir agua decimos…", o: ["Water, please!", "Goodbye, water!", "I'm water."], a: 0, e: "Water, please!" },
    { q: "Delante de egg decimos…", o: ["a egg", "an egg", "the a egg"], a: 1, e: "An egg." },
    { q: "«Yummy!» significa…", o: ["¡qué rico!", "¡qué asco!", "¡adiós!"], a: 0, e: "Yummy = ¡qué rico!" },
  ],
  examen: [
    { q: "El plátano es…", o: ["banana", "orange", "pear"], a: 0, e: "Banana." },
    { q: "Contesta: Do you like milk? (sí)", o: ["Yes, I do!", "No, I don't.", "It's milk."], a: 0, e: "Yes, I do!" },
    { q: "«Water» es…", o: ["agua", "zumo", "leche"], a: 0, e: "Water = agua." },
    { q: "«I don't like soup» significa…", o: ["No me gusta la sopa", "Quiero sopa", "La sopa está rica"], a: 0, e: "I don't like = no me gusta." },
  ],
  feynman: ["Cómo se llaman en inglés las frutas y otros alimentos", "Cómo decir lo que te gusta y lo que no", "Cómo pedir comida con educación"],
  mapa: mapa("FOOD", "var(--pri)", [
    ["Fruit", "apple, banana, pear, grapes", R],
    ["Food", "bread, cheese, egg, soup", N],
    ["Drinks", "water, milk, juice", A],
    ["I like…", "I like apples!", V],
  ], 230),
  tarjetas: [
    ["comida", "food"],
    ["manzana / plátano", "apple / banana"],
    ["pera / uvas", "pear / grapes"],
    ["pan / queso", "bread / cheese"],
    ["agua / leche", "water / milk"],
    ["Me gusta…", "I like…"],
    ["Tengo hambre", "I'm hungry"],
    ["¿Me das…, por favor?", "Can I have…, please?"],
  ],
  familias: [
    "En la compra, nombrad las frutas en inglés: apple, banana, pear…",
    "A la hora de comer, preguntad Do you like…? y contestad en inglés.",
    "Jugad a la tienda con fruta de verdad o dibujada.",
    "Cantad la canción del tema: Do you like broccoli ice cream?",
  ],
  profesores: PROF("Lengua extranjera: léxico de alimentos y bebidas; expresar gustos con I like / I don't like; peticiones corteses; hábitos saludables", ["Tienda en el aula con alimentos de juguete.", "Encuesta en clase: Do you like…?", "Canción con gestos y tarjetas de comida."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
