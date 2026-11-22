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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Nombrar verduras y alimentos sanos en inglés", "Describir sabores: sweet, salty, sour", "Pedir comida con I'd like…, please", "Distinguir comida sana y comida para días especiales"],
  lectura: { titulo: "The hungry caterpillar party", html: `<p>Today is Molly's birthday. She is eight. There is a big party in the garden!</p><p>On the table there is lots of food. There are <b>sandwiches</b>, <b>pizza</b> and <b>crisps</b>. There is a bowl of <b>fruit</b> with <b>strawberries</b>, <b>grapes</b> and <b>bananas</b>. And there is a big chocolate <b>cake</b> with eight candles.</p><p>"What would you like, Tom?" asks Molly's mum.</p><p>"I'd like a sandwich and some grapes, please," says Tom.</p><p>"And you, Lucy?"</p><p>"I'd like pizza, please! I love pizza!"</p><p>Molly's little brother, Ben, doesn't like pizza. He likes <b>carrots</b>! "Crunch, crunch!" he says.</p><p>Everybody drinks <b>orange juice</b> and <b>water</b>.</p><p>Then they sing "Happy birthday" and Molly blows out the candles. Whoosh!</p><p>"Mmm! The cake is very <b>sweet</b>!" says Tom.</p><p>"It's yummy!" says Molly. "This is the best birthday ever!"</p><p><i>(bowl: cuenco · crisps: patatas fritas · blows out: sopla · ever: nunca)</i></p>` },
  tras: {
    "Food: la comida": [
      ["Vegetables", `<p>Las verduras son <mark>vegetables</mark>. Son muy sanas y nos dan vitaminas:</p><ul><li><b>carrot</b>: zanahoria (orange).</li><li><b>tomato</b>: tomate (red).</li><li><b>potato</b>: patata (brown).</li><li><b>lettuce</b>: lechuga (green).</li><li><b>broccoli</b>: brócoli (green).</li><li><b>onion</b>: cebolla (white).</li><li><b>peas</b>: guisantes (green and small).</li><li><b>corn</b>: maíz (yellow).</li></ul><p>Con los colores podemos describirlas: «A carrot is <b>orange</b>. Broccoli is <b>green</b>.»</p><p>Un consejo: «<b>Eat a rainbow!</b>» (¡Come un arcoíris!). Es decir, come verduras y frutas de muchos colores cada día: rojas, naranjas, amarillas, verdes y moradas.</p><p>Y recuerda lavarlas bien antes de comerlas: «Wash the vegetables!»</p><p><b>Actividad</b>: haz un arcoíris con dibujos de frutas y verduras de cada color.</p>`,
        L6.filas("Veg", [["carrot", "orange", cNA], ["tomato", "red", cRO], ["broccoli", "green", cVE], ["corn", "yellow", cMO]]),
        ["RE5tvaveVak", "Vegetable Song", "The Singing Walrus", 81133705]],
    ],
    "Drinks: las bebidas": [
      ["Sweet, salty, sour", `<p>Los alimentos tienen distintos <mark>tastes</mark> (sabores):</p><ul><li><b>sweet</b>: dulce. «Chocolate is sweet. Honey is sweet.»</li><li><b>salty</b>: salado. «Crisps are salty.»</li><li><b>sour</b>: ácido. «A lemon is sour!»</li><li><b>bitter</b>: amargo. «Coffee is bitter.»</li><li><b>spicy</b>: picante. «This sauce is spicy!»</li></ul><p>Y para decir si algo está rico o no:</p><ul><li>«<b>Yummy!</b>» o «<b>Delicious!</b>»: ¡qué rico!</li><li>«<b>Yuck!</b>»: ¡puaj!</li></ul><p>Para preguntar: «<b>What does it taste like?</b>» (¿A qué sabe?) — «It's sweet.»</p><p>Probamos los sabores con la <b>tongue</b> (lengua). ¡Cada parte de la comida es una sorpresa!</p><p><b>Actividad</b>: prueba con los ojos tapados un trozo de limón, de galleta y de queso, y di su sabor en inglés.</p>`,
        H6.rueda("Taste", "TASTE", [["sweet", cMO], ["salty", cAZ], ["sour", cVE], ["spicy", cRO]])],
    ],
    "I like… I don't like…": [
      ["I'd like…, please", `<p>Para <mark>pedir comida</mark> de forma educada en un restaurante, en una cafetería o en casa decimos:</p><ul><li>«<b>I'd like</b> a sandwich, <b>please</b>.» (Quería un bocadillo, por favor.)</li><li>«<b>Can I have</b> some water, please?» (¿Me das agua?)</li></ul><p>El camarero (<b>waiter</b>) pregunta:</p><ul><li>«<b>What would you like?</b>» (¿Qué quieres?)</li><li>«<b>Anything else?</b>» (¿Algo más?)</li></ul><p>Y al final decimos «<b>Thank you!</b>».</p><p>¡Cuidado! <i>I like</i> significa «me gusta» y <i>I'd like</i> significa «quería» o «me gustaría tomar». No es lo mismo:</p><ul><li>«I like pizza.» = Me gusta la pizza (siempre).</li><li>«I'd like pizza.» = Quiero pizza (ahora).</li></ul><p><b>Actividad</b>: monta una cafetería en clase con un menú y practica el diálogo.</p>`,
        L6.dialogo("Café", [["Waiter", "What would you like?", cAZ], ["Tom", "I'd like a sandwich, please.", cRO], ["Waiter", "Anything else?", cAZ], ["Tom", "Water, please. Thank you!", cRO]])],
    ],
    "Breakfast, lunch and dinner": [
      ["Healthy food", `<p>Para estar fuertes hay que comer <mark>healthy food</mark> (comida sana):</p><ul><li><b>Every day</b> (todos los días): fruit, vegetables, bread, rice, milk, water.</li><li><b>Some days</b> (algunos días): fish, meat, eggs, cheese.</li><li><b>Only on special days</b> (solo en días especiales): sweets, cake, crisps, burgers, fizzy drinks.</li></ul><p>La comida sana nos da energía para jugar, estudiar y crecer. Los dulces están muy ricos, pero si comemos demasiados nos duelen los dientes y no estamos sanos.</p><p>Useful sentences:</p><ul><li>«Fruit is <b>healthy</b>.» (sano)</li><li>«Sweets are <b>unhealthy</b>.» (poco sano)</li><li>«Drink <b>water</b> every day!»</li></ul><p><b>Actividad</b>: clasifica dibujos de comida en dos cajas: healthy y unhealthy.</p>`,
        H6.dos("Food", ["HEALTHY", ["fruit", "vegetables", "water"], cVE], ["SOMETIMES", ["sweets", "crisps", "cake"], cRO])],
    ],
  },
  final: [
    ["Food around the world", `<p>Cada país tiene sus comidas típicas. ¡Vamos a dar la vuelta al mundo comiendo!</p><ul><li><b>Italy</b>: pizza and pasta.</li><li><b>Japan</b>: sushi (rice and fish).</li><li><b>Mexico</b>: tacos.</li><li><b>England</b>: fish and chips (pescado con patatas fritas).</li><li><b>USA</b>: hamburgers and pancakes.</li><li><b>Spain</b>: paella and Spanish omelette (tortilla de patatas).</li><li><b>India</b>: curry (spicy!).</li></ul><p>En Inglaterra, muchas familias toman un <b>English breakfast</b> los fines de semana: huevos, salchichas, beicon, judías con tomate y tostadas.</p><p>Probar comida de otros países es una forma divertida de conocer otras culturas. «Do you like sushi?» «Yes, I do!» / «No, I don't.»</p><p><b>Actividad</b>: elige un país, dibuja su comida típica y escribe: «In Italy people eat pizza».</p>`,
      L6.filas("World", [["Italy", "pizza", cRO], ["Japan", "sushi", cAZ], ["Mexico", "tacos", cVE], ["England", "fish and chips", cNA]])],
    ["Repaso: the party", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Molly is <b>eight</b>. It's her <b>birthday</b>.</li><li>On the table: <b>sandwiches</b>, <b>pizza</b>, <b>crisps</b>, <b>fruit</b> and a chocolate <b>cake</b>.</li><li>Tom says: «<b>I'd like</b> a sandwich and some grapes, please.»</li><li>Lucy <b>loves</b> pizza.</li><li>Ben <b>doesn't like</b> pizza. He likes <b>carrots</b>.</li><li>They drink <b>orange juice</b> and <b>water</b>.</li><li>The cake is very <b>sweet</b>. It's <b>yummy</b>!</li></ul><p>Fíjate en que todos piden la comida con <b>please</b>. ¡Ser educado también es importante en una fiesta!</p><p>Y Ben nos enseña que las verduras también pueden ser divertidas: crunch, crunch!</p><p><b>Actividad</b>: prepara el menú de tu fiesta de cumpleaños ideal en inglés.</p>`,
      H6.flujo("Party", ["food|table", "I'd like|please", "drink|juice", "cake|sweet"], cMO)],
  ],
  ejemplos: [
    ["Pide un zumo de naranja de forma educada.", ["I'd like + comida + please."], "I'd like an orange juice, please."],
    ["¿A qué sabe un limón?", ["Es ácido."], "It's sour."],
  ],
  errores: ["Confundir «I like» (me gusta) con «I'd like» (quería).", "Olvidar decir «please» al pedir algo."],
  ejercicios: [
    ["b", "How do you say «zanahoria»?", "Carrot."],
    ["b", "What colour is broccoli?", "Green."],
    ["b", "Chocolate is…", "Sweet."],
    ["b", "What is «Yummy!»?", "¡Qué rico!"],
    ["b", "Is fruit healthy or unhealthy?", "Healthy."],
    ["m", "Translate: Quería agua, por favor.", "I'd like some water, please."],
    ["m", "What does the waiter say?", "What would you like? Anything else?"],
    ["m", "A lemon is…", "Sour."],
    ["m", "What do people eat in Japan?", "Sushi."],
    ["m", "Name three foods for every day.", "Fruit, vegetables, bread…"],
    ["a", "In the reading, what does Ben like?", "Carrots."],
    ["a", "What does Tom ask for?", "A sandwich and some grapes."],
    ["a", "Write a café dialogue with three lines.", "Open answer."],
    ["a", "Write your healthy breakfast in English.", "Open answer."],
  ],
  quiz: [
    ["Guisantes is…", ["peas", "corn", "onion"], "Vegetables."],
    ["Crisps are…", ["salty", "sour", "sweet"], "Taste."],
    ["Quería un bocadillo:", ["I'd like a sandwich", "I like a sandwich", "I have a sandwich"], "Ordering."],
    ["Healthy every day:", ["vegetables", "sweets", "fizzy drinks"], "Healthy."],
    ["Fish and chips is from…", ["England", "Italy", "Mexico"], "World."],
  ],
  examen: [
    ["In the reading, how old is Molly?", ["eight", "seven", "nine"], "Reading."],
    ["What does Lucy love?", ["pizza", "carrots", "grapes"], "Repaso."],
  ],
  tarjetas: [
    ["Tastes", "sweet, salty, sour, bitter, spicy."],
    ["Ordering", "What would you like? I'd like…, please."],
  ],
  glosario: [
    ["Vegetables", "Verduras."],
    ["Lettuce", "Lechuga."],
    ["Peas", "Guisantes."],
    ["Sweet", "Dulce."],
    ["Salty", "Salado."],
    ["Sour", "Ácido."],
    ["Healthy", "Sano."],
    ["Waiter", "Camarero."],
    ["I'd like", "Quería, me gustaría."],
    ["Yummy", "¡Qué rico!"],
  ],
  situacion: {
    titulo: "Our class café",
    reto: "La clase monta una cafetería en inglés con un menú sano y practica cómo pedir comida.",
    pasos: ["Hacer un menú con comida sana y precios.", "Dibujar los platos y escribir su nombre en inglés.", "Repartir papeles: waiter y clientes.", "Representar el diálogo con I'd like…, please."],
    producto: "Un menú ilustrado y un diálogo de cafetería.",
    evaluacion: ["Nombra verduras y alimentos.", "Describe sabores.", "Pide comida con educación.", "Distingue comida sana."],
  },
});
