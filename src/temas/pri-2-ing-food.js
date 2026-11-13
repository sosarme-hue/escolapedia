// Inglés 2º de Primaria: Food I like. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "Food I like",
  minutos: 20,
  objetivos: ["Nombrar comidas, frutas y bebidas en inglés", "Decir lo que te gusta y lo que no: I like… I don't like…", "Preguntar a otro: Do you like…? y responder"],
  claves: ["food", "apple", "banana", "bread", "cheese", "milk", "water", "I like…", "I don't like…", "Do you like…?"],
  pregunta: {
    texto: "¿Qué comida te gusta más? ¿Y cuál no te gusta nada?",
    respuesta: "En inglés dirías <mark>I like</mark> pizza (me gusta la pizza) y <mark>I don't like</mark> fish (no me gusta el pescado).",
  },
  bloques: [
    {
      html: `<h3>Fruit: la fruta</h3><p>La fruta en inglés es <mark>fruit</mark>.</p><p>La manzana es <b>apple</b>. El plátano es <b>banana</b>. La pera es <b>pear</b>. Las uvas son <b>grapes</b>.</p><p>La naranja es <b>orange</b>, como el color naranja. ¡Es la misma palabra! La fresa es <b>strawberry</b>. ¿Qué fruta has comido hoy? Dilo en inglés.</p>`,
      svg: vocab("Frutas: apple manzana, banana plátano, pear pera, grapes uvas", [["manzana", "apple", "manzana", R], ["platano", "banana", "plátano", A], ["pera", "pear", "pera", Ve], ["uva", "grapes", "uvas", N]], { titulo: "Fruit" }),
    },
    {
      html: `<h3>Food: la comida</h3><p>Ahora vamos con <mark>otras comidas</mark>.</p><p>El pan es <b>bread</b>. El queso es <b>cheese</b>. El huevo es <b>egg</b>. El pollo es <b>chicken</b>.</p><p>El pescado es <b>fish</b>, igual que pez. La sopa es <b>soup</b>. Y hay palabras que ya conoces porque son iguales: <b>pizza</b>, <b>pasta</b> y <b>salad</b>, que es ensalada.</p>`,
      svg: vocab("Comidas: bread pan, cheese queso, egg huevo, chicken pollo", [["pan", "bread", "pan", A], ["queso", "cheese", "queso", R], ["huevo", "egg", "huevo", Ve], ["pollo", "chicken", "pollo", N]], { titulo: "Food" }),
    },
    {
      html: `<h3>Drinks: las bebidas</h3><p>Las bebidas son <mark>drinks</mark>.</p><p>El agua es <b>water</b>. La leche es <b>milk</b>. El zumo es <b>juice</b>: <b>orange juice</b> es zumo de naranja.</p><p>Si tienes sed dices <b>I'm thirsty</b>. Si tienes hambre, <b>I'm hungry</b>. Y para pedir agua: <b>Can I have some water, please?</b> ¡Muy educado!</p>`,
      svg: vocab("Bebidas: water agua, milk leche, juice zumo", [["agua", "water", "agua", N], ["leche", "milk", "leche", A], ["manzana", "juice", "zumo", R]], { titulo: "Drinks" }),
    },
    {
      html: `<h3>I like… I don't like…</h3><p>Para decir lo que te gusta usamos <mark>I like</mark>.</p><p><b>I like bananas</b> es «me gustan los plátanos». <b>I like milk</b> es «me gusta la leche».</p><p>Para lo que no te gusta decimos <b>I don't like</b>: <b>I don't like fish</b>. Puedes poner la cara de cada frase: una sonrisa para <b>I like</b> y una cara triste para <b>I don't like</b>.</p>`,
      svg: vocab("Gustos: I like con cara feliz, I don't like con cara triste", [["feliz", "I like", "me gusta", Ve], ["triste", "I don't like", "no me gusta", R]], { titulo: "Yummy or yucky?" }),
    },
    {
      html: `<h3>Do you like…?</h3><p>Para preguntar a otro usamos <mark>Do you like…?</mark></p><p><b>Do you like cheese?</b> significa «¿Te gusta el queso?».</p><p>Se contesta corto: <b>Yes, I do!</b> (sí) o <b>No, I don't</b> (no). Haz una encuesta en clase: pregunta a cinco amigos si les gusta la pizza. Apunta cuántos dicen <b>Yes</b> y cuántos <b>No</b>.</p>`,
      svg: charla("Do you like cheese? Yes, I do! Do you like fish? No, I don't", [["nino", "Do you like cheese?", A], ["nina", "Yes, I do!", R], ["nino", "Do you like fish?", A], ["nina", "No, I don't.", R]]),
      video: V("in5b"),
    },
    {
      html: `<h3>Breakfast, lunch and dinner</h3><p>Hacemos <mark>varias comidas</mark> al día.</p><p>El desayuno es <b>breakfast</b>. La comida del mediodía es <b>lunch</b>. La cena es <b>dinner</b>.</p><p>Para desayunar muchos niños toman <b>milk</b> y <b>bread</b>. ¿Qué tomas tú? Dilo así: <b>For breakfast I have milk and an apple</b>. ¡Un desayuno muy sano!</p>`,
      svg: lista("Comidas del día: breakfast desayuno, lunch comida, dinner cena", [["breakfast → desayuno", A], ["lunch → comida", R], ["dinner → cena", N]], { titulo: "Meals" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Hay palabras de comida que <mark>se dicen distinto</mark> de como se escriben.</p><p><b>Bread</b> se dice «bred». <b>Cheese</b> se dice «chíis», con una i larga. <b>Juice</b> se dice «yus».</p><p><b>Water</b> se dice «uóter». <b>Banana</b> se dice «banána», parecido al español. Repite cada palabra como si estuvieras pidiendo en un restaurante.</p>`,
      svg: lista("Cómo suenan: bread bred, cheese chíis, juice yus, water uóter", [["bread → «bred»", A], ["cheese → «chíis»", R], ["juice → «yus»", Ve], ["water → «uóter»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En un viaje, saber la comida en inglés te ayuda a <mark>pedir en un restaurante</mark>.</p><p>Podrás leer la carta y decir lo que quieres. También entenderás las etiquetas de los productos en el súper.</p><p>Y podrás decir si algo no te gusta o si eres alérgico. Por ejemplo: <b>No cheese, please</b>. ¡Muy útil!</p>`,
      svg: charla("En el restaurante: Can I have chicken and water, please? Here you are!", [["nina", "Chicken and water, please!", R], ["papa", "Here you are!", A]]),
    },
    {
      html: `<h3>Jugamos al menú loco</h3><p>Cada niño inventa un <mark>menú divertido</mark> mezclando comidas.</p><p>Por ejemplo: <b>banana soup</b> (sopa de plátano) o <b>cheese ice cream</b> (helado de queso).</p><p>Luego pregunta a sus compañeros: <b>Do you like banana soup?</b> Todos contestan <b>Yes, I do!</b> o <b>No, I don't!</b> ¡Y se ríen con las mezclas más raras!</p>`,
      svg: charla("Menú loco: Do you like banana soup? No, I don't! Yuck!", [["nino", "Do you like banana soup?", A], ["nina", "No, I don't! Yuck!", R], ["sopa", "Yummy!", Ve]]),
    },
  ],
  figura: {
    titulo: "Food I like: comidas y gustos",
    svg: mural("Comidas en inglés: apple manzana, bread pan, cheese queso, milk leche", [["manzana", "apple", "manzana", R], ["pan", "bread", "pan", A], ["queso", "cheese", "queso", Ve], ["leche", "milk", "leche", N]], "Food I like"),
  },
  video: V("in5v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que te gustan las manzanas.",
      pasos: ["Me gusta se dice I like.", "Manzana es apple.", "Para hablar de todas: apples."],
      resultado: "«I like apples!»" },
    { enunciado: "Pregunta a un amigo si le gusta la leche.",
      pasos: ["Preguntamos con Do you like…?", "Leche es milk.", "Pon el signo de pregunta al final."],
      resultado: "«Do you like milk?»" },
    { enunciado: "No te gusta el pescado. Contesta a Do you like fish?",
      pasos: ["La respuesta es no.", "Respuesta corta: No, I don't.", "Puedes añadir la frase entera."],
      resultado: "«No, I don't. I don't like fish.»" },
  ],
  errores: [
    "Contestar «Yes, I like» a Do you like…?: se dice Yes, I do.",
    "Decir «I no like»: se dice I don't like.",
    "Leer juice como «yuisse»: se dice «yus».",
    "Confundir chicken (pollo) con kitchen (cocina).",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «manzana» en inglés?", sol: "Apple." },
    { q: "¿Qué es bread?", sol: "Pan." },
    { q: "¿Cómo se dice «leche»?", sol: "Milk." },
    { q: "Nombra tres frutas en inglés.", sol: "Por ejemplo: apple, banana, orange (o pear, grapes, strawberry)." },
    { q: "Di en inglés: «Me gusta el queso».", sol: "I like cheese." },
    { q: "Di en inglés: «No me gusta la sopa».", sol: "I don't like soup." },
    { q: "Contesta con la verdad: Do you like pizza?", sol: "Yes, I do o No, I don't." },
    { q: "¿Qué es breakfast?", sol: "El desayuno." },
    { q: "Pide agua en inglés con educación.", sol: "Can I have some water, please?" },
    { q: "Inventa un menú loco y pregunta si le gusta a alguien de casa.", sol: "Por ejemplo: Do you like chocolate soup? No, I don't!" },
  ],
  quiz: [
    { q: "«Apple» es…", o: ["pera", "manzana", "uva"], a: 1, e: "Apple = manzana." },
    { q: "«Cheese» es…", o: ["queso", "pollo", "huevo"], a: 0, e: "Cheese = queso." },
    { q: "«Agua» en inglés es…", o: ["milk", "juice", "water"], a: 2, e: "Water = agua." },
    { q: "«Bread» es…", o: ["pan", "mantequilla", "pastel"], a: 0, e: "Bread = pan." },
    { q: "«I like bananas» significa…", o: ["Tengo plátanos", "Me gustan los plátanos", "Como plátanos"], a: 1, e: "I like = me gusta." },
    { q: "«No me gusta» es…", o: ["I don't like", "I no like", "I not like"], a: 0, e: "I don't like." },
    { q: "Do you like milk? → Sí:", o: ["Yes, I like.", "Yes, I do.", "Yes, milk."], a: 1, e: "Respuesta corta: Yes, I do." },
    { q: "«Chicken» es…", o: ["cocina", "pollo", "pescado"], a: 1, e: "Chicken = pollo." },
    { q: "«Breakfast» es…", o: ["desayuno", "cena", "merienda"], a: 0, e: "Breakfast = desayuno." },
    { q: "«Juice» es…", o: ["zumo", "sopa", "leche"], a: 0, e: "Juice = zumo." },
  ],
  examen: [
    { q: "«Grapes» son…", o: ["uvas", "fresas", "peras"], a: 0, e: "Grapes = uvas." },
    { q: "Do you like fish? → No:", o: ["No, I don't.", "No, I do.", "No fish."], a: 0, e: "Respuesta corta negativa." },
    { q: "«Dinner» es…", o: ["la comida", "la cena", "el desayuno"], a: 1, e: "Dinner = cena." },
    { q: "Tienes sed. Dices…", o: ["I'm hungry.", "I'm thirsty.", "I'm seven."], a: 1, e: "Thirsty = con sed." },
  ],
  feynman: ["Cómo se llaman frutas, comidas y bebidas en inglés", "Cómo decir lo que te gusta y lo que no", "Cómo contestar a Do you like…?"],
  mapa: mapa("FOOD I LIKE", "var(--pri)", [
    ["Fruit", "apple, banana, pear", R],
    ["Food & drinks", "bread, cheese, milk, water", A],
    ["Gustos", "I like… I don't like…", Ve],
    ["Preguntar", "Do you like…? Yes, I do", N],
  ], 230),
  tarjetas: [
    ["manzana / plátano", "apple / banana"],
    ["pera / uvas", "pear / grapes"],
    ["pan / queso", "bread / cheese"],
    ["huevo / pollo", "egg / chicken"],
    ["agua / leche / zumo", "water / milk / juice"],
    ["Me gusta…", "I like…"],
    ["No me gusta…", "I don't like…"],
    ["¿Te gusta…? Sí / No", "Do you like…? Yes, I do / No, I don't"],
  ],
  familias: [
    "En el desayuno, nombrad en inglés lo que hay en la mesa.",
    "Haced una lista de la compra con dibujos y palabras en inglés.",
    "Preguntad Do you like…? con cada plato de la cena.",
    "Jugad al menú loco inventando platos raros.",
  ],
  profesores: PROF("Lengua extranjera: léxico de alimentos y bebidas; expresar gustos con like / don't like; Do you like…? Yes, I do / No, I don't; las comidas del día", ["Encuesta de clase de comidas favoritas con un gráfico de barras.", "Restaurante de juego con cartas y pedidos.", "Menú loco con tarjetas combinadas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
