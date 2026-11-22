// Inglés 6º de Primaria: countable and uncountable nouns. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Manzanas que se cuentan y una jarra de agua que no se cuenta.
const contar = svg("Tres manzanas se pueden contar; el agua de una jarra no", `
  ${[50, 85, 120].map((x, i) => `<circle cx="${x}" cy="80" r="15" fill="${RO}"/><path d="M${x} 66 q 2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/>${tx(x, 112, String(i + 1), { s: 13, c: RO })}`).join("")}
  ${tx(85, 140, "three apples", { s: 12 })}${tx(85, 158, "countable", { s: 11, c: AZ })}
  <path d="M180 50 h 46 l -4 70 h -38 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M182 74 h 42 l -2.6 46 h -37 z" fill="var(--water)" fill-opacity=".6"/><path d="M226 60 q 12 4 0 22" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${tx(203, 140, "some water", { s: 12 })}${tx(203, 158, "uncountable", { s: 11, c: VE })}`);

module.exports = tema({
  materia: "Inglés",
  titulo: "Countable and uncountable nouns",
  objetivos: ["Tell the difference between countable and uncountable nouns", "Use a / an, some and any correctly", "Ask about quantity with How many…? and How much…?", "Use containers to count uncountable things: a bottle of, a piece of"],
  claves: ["countable", "uncountable", "a / an", "some", "any", "How many…?", "How much…?", "a lot of", "a bottle of", "a piece of"],
  pregunta: [
    "Puedes decir «three apples» (tres manzanas), pero ¿puedes decir «three waters» o «three breads»? ¿Por qué?",
    "Porque <i>water</i> y <i>bread</i> son <mark>nombres incontables</mark>: no se cuentan uno a uno. Para contarlos usamos un recipiente o una porción: «three <b>bottles of</b> water», «two <b>pieces of</b> bread». En cambio, <i>apple</i> es <mark>contable</mark>: one apple, two apples.",
  ],
  bloques: [
    ["Countable or uncountable?", `<p><mark>Countable nouns</mark> are things we can count one by one: an apple, two apples; a chair, three chairs; a friend, ten friends. They have a <b>singular</b> and a <b>plural</b> form.</p><p><mark>Uncountable nouns</mark> are things we can't count one by one, like liquids, materials and some foods: water, milk, juice, rice, sugar, bread, cheese, money, music, homework. They have <b>no plural</b>: we never say «rices» or «musics». <b>En castellano:</b> pasa algo parecido con «arroz» o «leche»; no decimos «tres arroces».</p>`,
      contar],
    ["Countable: singular and plural", `<p>With singular countable nouns we use <mark>a</mark> or <mark>an</mark>: <b>a</b> banana, <b>a</b> sandwich, <b>an</b> egg, <b>an</b> orange (an before a vowel sound). We can't say just «I want banana»: we need <i>a</i>.</p><p>Plurals usually add <b>-s</b>: apples, carrots. After -s, -sh, -ch, -x and some -o words add <b>-es</b>: glasses, sandwiches, potatoes, tomatoes. Consonant + y → <b>-ies</b>: strawberry → strawberries, cherry → cherries. Irregular: child → children, person → people, foot → feet, tooth → teeth, mouse → mice.</p>`,
      L.tabla("Plurales: apples, tomatoes, cherries, children", ["Singular", "Plural"], [["an apple", "apples"], ["a tomato", "tomatoes"], ["a cherry", "cherries"], ["a child", "children"]], AZ)],
    ["Uncountable nouns", `<p>Uncountable nouns use the verb in <b>singular</b>: «The water <b>is</b> cold», «Rice <b>is</b> good for you», «My homework <b>is</b> difficult». We don't use <i>a</i> or <i>an</i> with them: not «a bread», but «<b>some</b> bread».</p><p>Common uncountable nouns: <b>food</b> (bread, rice, pasta, cheese, meat, butter, sugar, salt), <b>drinks</b> (water, milk, juice, tea), and also <b>money, time, music, information, homework, furniture, weather</b>. <b>En castellano:</b> ojo con <i>homework</i> o <i>furniture</i> (muebles), que en inglés no tienen plural.</p>`,
      L.filas("Nombres incontables frecuentes", [["food", "bread · rice · cheese · meat", AM], ["drinks", "water · milk · juice · tea", AZ], ["others", "money · music · homework", VE]], "Uncountable")],
    ["Some and any", `<p>We use <mark>some</mark> in <b>affirmative</b> sentences, with plural countable nouns and with uncountable nouns: «There are <b>some</b> eggs», «I'd like <b>some</b> water».</p><p>We use <mark>any</mark> in <b>negatives</b> and <b>questions</b>: «There aren't <b>any</b> eggs», «Is there <b>any</b> milk?». Exception: offers and requests use <i>some</i> in questions: «Would you like <b>some</b> cake?». <b>En castellano:</b> <i>some</i> es «algo de / algunos»; <i>any</i> en negativa es «nada de / ningún».</p>`,
      L.tabla("Some y any", ["", "Countable", "Uncountable"], [["+", "some eggs", "some milk"], ["−", "any eggs", "any milk"], ["?", "any eggs?", "any milk?"]], VE), "in6b"],
    ["How many? How much?", `<p>To ask about quantity: <mark>How many…?</mark> with <b>plural countable</b> nouns and <mark>How much…?</mark> with <b>uncountable</b> nouns. «<b>How many</b> apples do we need?» – «Six». «<b>How much</b> sugar do we need?» – «A little» / «200 grams».</p><p>In the same way: <b>many</b> (muchos) with countable and <b>much</b> (mucho) with uncountable in negatives and questions: «There aren't <b>many</b> people», «I haven't got <b>much</b> time». <b>A lot of</b> goes with both: «<b>a lot of</b> friends», «<b>a lot of</b> water».</p>`,
      L.filas("How many / How much", [["How many…?", "apples, eggs, people", AZ], ["How much…?", "sugar, milk, money", VE], ["a lot of", "with both", NA]]), "in6c"],
    ["A few and a little", `<p>For a <b>small quantity</b> we say <mark>a few</mark> with countable nouns and <mark>a little</mark> with uncountable nouns: «I've got <b>a few</b> friends in Madrid», «Can I have <b>a little</b> milk in my tea?».</p><p>From most to least: <b>a lot of</b> → <b>some</b> → <b>a few / a little</b> → <b>not any / no</b>. <b>En castellano:</b> <i>a few</i> es «unos pocos» y <i>a little</i> es «un poco de». Fíjate en que el inglés distingue si se puede contar o no, y el español casi nunca.</p>`,
      L.filas("De mucho a nada", [["a lot of", "apples · milk", RO], ["some", "apples · milk", NA], ["a few", "apples (countable)", AM], ["a little", "milk (uncountable)", VE], ["not any", "apples · milk", AZ]])],
    ["Containers and pieces", `<p>To count uncountable things we use <mark>containers</mark> (recipientes) or <mark>portions</mark>: <b>a bottle of</b> water, <b>a glass of</b> milk, <b>a cup of</b> tea, <b>a carton of</b> juice, <b>a packet of</b> rice, <b>a jar of</b> honey, <b>a can of</b> lemonade.</p><p>Portions: <b>a piece of</b> cake, <b>a slice of</b> bread / pizza / cheese, <b>a bar of</b> chocolate, <b>a kilo of</b> meat, <b>a loaf of</b> bread (una barra). The container is countable: «two bottles <b>of</b> water», «three slices <b>of</b> pizza».</p>`,
      L.tabla("Recipientes y porciones", ["Container", "Food"], [["a bottle of", "water"], ["a slice of", "pizza"], ["a carton of", "juice"], ["a bar of", "chocolate"]], NA)],
    ["Reading: a shopping list", `<p>Read the dialogue in the kitchen: «Mum: We're going to make pancakes. <b>How many</b> eggs have we got? Dani: There are <b>a few</b>, only two. Mum: We need three. And <b>how much</b> milk is there? Dani: There's <b>a little</b>, half a carton. Mum: OK, let's write a list: six eggs, <b>a carton of</b> milk and <b>a bag of</b> flour. Is there <b>any</b> sugar? Dani: Yes, there's <b>a lot of</b> sugar. And can we buy <b>some</b> strawberries? Mum: Of course!»</p>`,
      L.filas("Lista de la compra para tortitas", [["6", "eggs", AZ], ["a carton of", "milk", VE], ["a bag of", "flour", AM], ["some", "strawberries", RO]], "Shopping list")],
    ["Let's practise: at the market", `<p>Role-play in pairs: one is the shop assistant and the other is the customer. «Good morning! Can I help you?» – «Yes, please. I'd like <b>a kilo of</b> tomatoes and <b>some</b> cheese.» – «<b>How much</b> cheese?» – «<b>Two slices</b>, please.» – «Anything else?» – «Have you got <b>any</b> bananas?» – «Sorry, there aren't <b>any</b>.»</p><p><b>Consejo:</b> antes de preguntar, piensa: ¿se puede contar? Si sí, <i>How many</i>; si no, <i>How much</i>.</p>`,
      L.dialogo("En el mercado: I'd like some cheese", [["Shop", "Can I help you?", AZ], ["Me", "I'd like some cheese.", RO], ["Shop", "How much cheese?", AZ], ["Me", "Two slices, please.", RO]])],
  ],
  ejemplos: [
    ["Countable or uncountable: rice, egg, juice, carrot.", ["egg y carrot se cuentan: an egg, two carrots.", "rice y juice no se cuentan."], "Countable: egg, carrot. Uncountable: rice, juice."],
    ["Complete: «How ___ bread do we need?»", ["bread es incontable.", "Incontable → How much."], "How much bread do we need?"],
    ["Complete with some or any: «There isn't ___ cheese, but there are ___ eggs.»", ["Negativa → any.", "Afirmativa → some."], "There isn't any cheese, but there are some eggs."],
  ],
  errores: [
    "Poner plural a un incontable: «breads», «homeworks» → «bread», «homework».",
    "Usar a con incontables: «a water» → «some water» o «a glass of water».",
    "Confundir How many y How much: «How many money?» → «How much money?».",
    "Usar some en negativas: «There aren't some eggs» → «There aren't any eggs».",
    "Olvidar los plurales irregulares: «childs», «peoples» → «children», «people».",
  ],
  ejercicios: [
    ["Write the plural: potato, strawberry, box, foot.", "potatoes, strawberries, boxes, feet."],
    ["Countable or uncountable? milk, chair, money, sandwich.", "Uncountable: milk, money. Countable: chair, sandwich."],
    ["Complete with a or an: ___ orange, ___ banana, ___ egg.", "an orange, a banana, an egg."],
    ["Complete with some or any: «Have you got ___ brothers?»", "any."],
    ["Complete: «How ___ people were there?»", "many."],
    ["Complete: «Can I have a ___ of pizza?»", "slice (o piece)."],
    ["Complete with a few or a little: «I've got ___ friends in Bilbao.»", "a few."],
    ["Correct: «I need an information.»", "I need some information."],
    ["Translate: «¿Cuánta agua hay?»", "How much water is there?"],
    ["Write your breakfast with quantities.", "Model answer: I have a glass of milk, two biscuits and a piece of fruit."],
  ],
  figura: ["Countable and uncountable", L.columnas("Contables e incontables", [["countable", "APPLES", ["a / an / some", "How many?"], AZ], ["uncountable", "WATER", ["some / any", "How much?"], VE], ["small amount", "A FEW", ["a little", "(uncountable)"], NA], ["counting", "A BOTTLE OF", ["a slice of", "a piece of"], RO]])],
  video: "in6v",
  quiz: [
    ["Which noun is uncountable?", ["rice", "apple", "chair"], "No se cuenta uno a uno."],
    ["«___ egg»", ["an", "a", "some"], "Sonido vocálico: an."],
    ["«How ___ sugar do you want?»", ["much", "many", "a few"], "Sugar: incontable."],
    ["«How ___ friends have you got?»", ["many", "much", "a little"], "Friends: contable plural."],
    ["«There aren't ___ biscuits.»", ["any", "some", "a"], "Negativa: any."],
    ["«Would you like ___ cake?»", ["some", "any", "many"], "Ofrecimiento: some."],
    ["The plural of «child» is…", ["children", "childs", "childrens"], "Irregular."],
    ["«a ___ of water»", ["bottle", "slice", "bar"], "Recipiente para líquidos."],
    ["«I've got ___ money.» (un poco)", ["a little", "a few", "many"], "Money: incontable."],
    ["Which sentence is correct?", ["My homework is easy.", "My homeworks are easy.", "My homework are easy."], "Homework es incontable."],
  ],
  examen: [
    ["«a ___ of chocolate»", ["bar", "glass", "bottle"], "a bar of chocolate."],
    ["The plural of «strawberry» is…", ["strawberries", "strawberrys", "strawberryes"], "Consonante + y → -ies."],
    ["«There are ___ people in the park.» (muchos)", ["a lot of", "much", "a little"], "a lot of con contables."],
    ["«Is there ___ juice?»", ["any", "some many", "a"], "Pregunta: any."],
  ],
  feynman: ["Qué es un nombre contable y uno incontable", "Cuándo se usa some y cuándo any", "Diferencia entre How many y How much", "Cómo se cuentan los incontables con recipientes y porciones"],
  mapa: ["NOUNS", AZ, [["Countable", "a / an · plural -s · many", AZ], ["Uncountable", "no plural · much · a little", VE], ["Some / any", "+ some · − ? any", NA], ["Containers", "a bottle of · a slice of", RO]], 240],
  tarjetas: [
    ["Countable", "Se cuenta: an apple, two apples."],
    ["Uncountable", "No se cuenta: water, rice, money."],
    ["some", "Afirmativas y ofrecimientos."],
    ["any", "Negativas y preguntas."],
    ["How many…?", "¿Cuántos? (contables)."],
    ["How much…?", "¿Cuánto? (incontables)."],
    ["a few / a little", "Unos pocos / un poco de."],
    ["a slice of", "Una loncha o porción de."],
  ],
  familias: ["Escribid juntos en inglés la lista de la compra de la semana con cantidades: «a carton of milk, six eggs».", "Al cocinar una receta sencilla, preguntad «How much…?» y «How many…?» por cada ingrediente."],
  saberes: "Alimentación y compras; nombres contables e incontables, cuantificadores y partitivos (Lengua Extranjera)",
  ideas: ["Mercado simulado en clase con precios y tarjetas de productos.", "Receta en inglés con lista de ingredientes y cantidades.", "Clasificar tarjetas de comida en dos cajas: countable / uncountable."],
  fuentes: [["British Council LearnEnglish Kids: countable and uncountable nouns", "https://learnenglishkids.britishcouncil.org/grammar-practice/countable-uncountable-nouns"], ["Cambridge Dictionary: nouns, countable and uncountable", "https://dictionary.cambridge.org/grammar/british-grammar/nouns-countable-and-uncountable"]],
});

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Use nouns that are always plural with a pair of", "Recognise nouns that can be countable or uncountable", "Read and write a recipe with quantities", "Talk about food waste with how much, how many and a lot of"],
  lectura: { titulo: "The great pancake disaster", html: `<p>It was Mum's birthday, and my sister Nora and I wanted to make her pancakes for breakfast. We found a recipe online, but we didn't read it carefully.</p><p>The recipe said: «<b>200 grams of flour</b>, <b>two eggs</b>, <b>300 millilitres of milk</b>, <b>a pinch of salt</b> and <b>a little butter</b>.» We didn't have <b>any</b> scales, so we used cups. I put in <b>three cups of flour</b>. That was <b>too much</b>. Nora added <b>a lot of</b> milk to fix it. That was <b>too much</b> milk! Then she added <b>some</b> sugar, but it wasn't sugar: it was salt!</p><p>The mixture was like soup. We poured <b>a few</b> spoonfuls into the frying pan, and the kitchen filled with smoke. The smoke alarm started beeping and Mum and Dad ran downstairs in their pyjamas.</p><p>Mum looked at the black pancakes, the flour on the floor and our faces covered in white powder. Then she started to laugh.</p><p>«It's the best birthday present ever,» she said. «Now, let's make them together. And this time, let's <b>measure</b> everything!»</p>` },
  tras: {
    "Countable: singular and plural": [
      ["Always plural: a pair of", `<p>Some nouns in English are <mark>always plural</mark>. They are usually things that have <b>two parts</b> that are the same:</p><ul><li><b>Clothes</b>: trousers, jeans, shorts, pyjamas, tights, leggings.</li><li><b>Tools and objects</b>: scissors, glasses, sunglasses, binoculars, headphones, pliers.</li></ul><p>These nouns take a <b>plural verb</b>: «My jeans <b>are</b> blue.» «Where <b>are</b> my glasses?» «These scissors <b>don't</b> cut well.» We never say «a trouser» or «a scissor».</p><p>To count them, we use <mark>a pair of</mark>:</p><ul><li>«I bought <b>a pair of</b> trousers.» (unos pantalones)</li><li>«She has <b>three pairs of</b> jeans.»</li><li>«Can I borrow <b>a pair of</b> scissors?»</li></ul><p>Notice: with <i>a pair of</i>, the verb is singular: «<b>This pair of</b> shoes <b>is</b> too small.»</p><p><b>En castellano</b> también decimos «unos pantalones» o «unas tijeras» en plural para una sola cosa, ¡así que no es tan raro! Pero cuidado con otras palabras: en inglés <i>shoes</i>, <i>socks</i> y <i>gloves</i> sí tienen singular: «a shoe», «a sock», «a glove».</p>`,
        L6.filas("A pair of…", [["trousers", "unos pantalones", cAZ], ["scissors", "unas tijeras", cRO], ["glasses", "unas gafas", cVE], ["pyjamas", "un pijama", cNA]])],
    ],
    "Uncountable nouns": [
      ["Countable or uncountable? It depends!", `<p>Some nouns can be <b>countable</b> or <b>uncountable</b>, but the meaning changes a little:</p><ul><li><b>chicken</b>: «There's <b>a chicken</b> in the farm» (the animal, countable) / «I'd like some <b>chicken</b>» (the meat, uncountable).</li><li><b>coffee</b>: «I don't drink <b>coffee</b>» (the drink in general) / «Two <b>coffees</b>, please» (two cups of coffee, in a café).</li><li><b>paper</b>: «I need some <b>paper</b>» (the material) / «Dad reads <b>a paper</b> every day» (a newspaper).</li><li><b>glass</b>: «The window is made of <b>glass</b>» (the material) / «<b>a glass</b> of water» (the object).</li><li><b>hair</b>: «She has long <b>hair</b>» (all the hair) / «There's <b>a hair</b> in my soup!» (one single hair).</li><li><b>time</b>: «I don't have <b>time</b>» / «I've been to London three <b>times</b>» (occasions).</li><li><b>cake</b>: «Would you like some <b>cake</b>?» (a piece) / «Mum made <b>two cakes</b>» (whole cakes).</li></ul><p>Tip: ask yourself if you are talking about the <b>material, the substance or the idea in general</b> (uncountable) or about <b>separate units</b> that you can count (countable).</p>`,
        H6.dos("It depends", ["Uncountable", ["some chicken", "some paper", "long hair"], cNA], ["Countable", ["a chicken", "a paper", "a hair"], cAZ])],
    ],
    "Containers and pieces": [
      ["Recipe English", `<p>Recipes are full of <b>countable</b> and <b>uncountable</b> nouns, <b>quantities</b> and <b>imperatives</b>. Here's a simple recipe for pancakes:</p><p><b>Ingredients</b> (for 8 pancakes): 200 grams of flour · 2 eggs · 300 millilitres of milk · a pinch of salt · a tablespoon of sugar · a little butter.</p><p><b>Method</b>:</p><ul><li><b>First</b>, put the flour, the sugar and the salt in a big bowl.</li><li><b>Then</b>, add the eggs and <b>a little</b> milk and mix well.</li><li><b>Next</b>, add the rest of the milk slowly and whisk until there are no lumps.</li><li>Heat <b>a little</b> butter in a frying pan. <b>Ask an adult to help you!</b></li><li>Pour a ladle of the mixture into the pan. Cook for about one minute on each side.</li><li><b>Finally</b>, serve with fruit, honey or chocolate.</li></ul><p>Useful quantities: <i>a pinch of</i> (una pizca), <i>a spoonful / teaspoon / tablespoon of</i> (una cucharada), <i>a slice of</i> (una rebanada), <i>a cup of</i>, <i>grams</i> and <i>millilitres</i>. Useful verbs: <i>add, mix, pour, whisk, heat, cook, cut, serve</i>.</p>`,
        H6.flujo("Pancakes", ["mix|flour, sugar", "add|eggs, milk", "cook|1 minute", "serve|with fruit"], cNA), ["NCMKedZvnyI", "How to Make Pancakes at Home | Easy Pancake Recipe", "Hands Touch", 29618519]],
    ],
  },
  final: [
    ["Don't waste food!", `<p>Every year, huge amounts of food end up in the bin. According to the United Nations, about <b>one fifth</b> of the food available to people in shops, restaurants and homes is wasted, and <b>most of it</b> is thrown away at home. At the same time, hundreds of millions of people in the world don't have <b>enough</b> food to eat.</p><p>Wasting food also wastes the <b>water</b>, the <b>energy</b> and the <b>land</b> we used to produce it, and rotting food in rubbish dumps produces gases that make climate change worse.</p><p>What can we do? Here are some ideas:</p><ul><li>Make a shopping list and buy only <b>what you need</b>.</li><li>Don't put <b>too much</b> food on your plate. You can always have <b>a bit more</b> later.</li><li>Check the fridge: eat the food that is getting old <b>first</b>.</li><li>Use leftovers: stale bread can become breadcrumbs or French toast, and old bananas make delicious banana cake.</li><li>Freeze food that you <b>can't</b> eat in time.</li></ul><p>Do a survey at home: <b>how much</b> food do you throw away in a week? <b>How many</b> pieces of fruit? Then try to reduce it. Small changes in every home can really make a big difference for our planet.</p>`,
      L6.filas("Waste less", [["shopping list", "buy what you need", cAZ], ["small portions", "have more later", cVE], ["old bread", "French toast", cNA], ["freezer", "save it for later", cMO]]), ["ishA6kry8nc", "Desperdicio de alimentos: El costo oculto de los alimentos que desechamos | ClimateScience #9", "ClimateScience - Solve Climate Change", 501221]],
    ["Food from around the world", `<p>Many foods we eat every day came from other parts of the world. Read and notice the countable and uncountable nouns:</p><ul><li><b>Potatoes</b>, <b>tomatoes</b>, <b>maize</b> (corn) and <b>chocolate</b> came from <b>the Americas</b>. Before the 16th century, there wasn't any chocolate in Europe, and Italian cooks didn't use tomatoes!</li><li><b>Rice</b> came originally from <b>Asia</b>, and so did <b>oranges</b> and <b>tea</b>.</li><li><b>Coffee</b> came from <b>Africa</b>, from the region of Ethiopia.</li><li><b>Pasta</b>, <b>bread</b> and <b>cheese</b> have been popular around the Mediterranean for thousands of years.</li></ul><p>Notice: <i>rice, tea, coffee, pasta, bread, cheese</i> and <i>chocolate</i> are uncountable. We say «some rice», «a lot of pasta», «a piece of cheese», «a bar of chocolate». But <i>potatoes, tomatoes</i> and <i>oranges</i> are countable: «three potatoes», «a few oranges».</p><p>Think about your favourite meal. Where did its ingredients come from? Make a world map with the ingredients of your favourite dish!</p><p>Spanish sailors and explorers played an important part in this story. In the 16th century, ships brought potatoes, tomatoes and cocoa beans from the Americas to Spain, and from there they travelled to the rest of Europe. At first, many Europeans didn't trust potatoes and tomatoes: some people thought they were strange or even dangerous! It took a long time for them to become popular. Today, it's difficult to imagine Spanish food without them: think of tortilla de patatas, gazpacho or chocolate con churros.</p>`,
      H6.rueda("Where did it come from?", "FOOD", [["Americas", cRO], ["Asia: rice", cAZ], ["Africa: coffee", cNA], ["Mediterranean", cVE]])],
  ],
  ejemplos: [
    ["Correct: «I need a new trouser.»", ["Trousers is always plural.", "To count it, use a pair of."], "I need a new pair of trousers."],
    ["Countable or uncountable? «I'd like ___ chicken, please.» (the meat)", ["The meat is a substance.", "Uncountable: some."], "I'd like some chicken, please."],
  ],
  errores: ["Decir «a scissor» o «a trouser»: se usa a pair of.", "Decir «an information» o «two breads»: son incontables."],
  ejercicios: [
    ["b", "Write three nouns that are always plural.", "trousers, scissors, glasses."],
    ["b", "Complete: «Where ___ my glasses?» (is / are)", "are."],
    ["b", "What does «a pinch of salt» mean?", "Una pizca de sal."],
    ["b", "Name two foods that came from the Americas.", "Potatoes and tomatoes (also chocolate, maize)."],
    ["b", "Complete: «I bought two ___ of jeans.»", "pairs."],
    ["m", "Explain the difference: «a paper» / «paper».", "A paper is a newspaper; paper is the material."],
    ["m", "Choose: «There's (a hair / hair) in my soup!»", "a hair."],
    ["m", "Write the first three steps of the pancake recipe with first, then, next.", "First, put the flour, sugar and salt in a bowl. Then, add the eggs and a little milk. Next, add the rest of the milk."],
    ["m", "Give three tips to waste less food.", "Make a shopping list, take small portions, use leftovers (freeze food)."],
    ["m", "What mistakes did the children make in the reading?", "Too much flour, too much milk, salt instead of sugar."],
    ["a", "Write a recipe for your favourite sandwich with quantities and imperatives.", "Open answer."],
    ["a", "Do a food waste survey at home for three days and write five sentences with how much / how many.", "Open answer."],
    ["a", "Explain «two coffees» and «coffee» with examples.", "Two coffees = two cups (in a café); coffee = the drink in general."],
    ["a", "Make a world map of the ingredients of a Spanish dish (for example, tortilla de patatas).", "Open answer. Potatoes from the Americas, eggs, olive oil from the Mediterranean, onion."],
  ],
  quiz: [
    ["«I need ___ scissors.»", ["a pair of", "a", "an"], "Always plural."],
    ["«These jeans ___ too long.»", ["are", "is", "be"], "Plural verb."],
    ["«I've been to Paris three ___.»", ["times", "time", "timing"], "Countable time."],
    ["«___ the flour and the eggs.» (recipe)", ["Mix", "Mixing", "To mixes"], "Imperative."],
    ["Coffee originally came from…", ["Africa", "the Americas", "Australia"], "Food origins."],
  ],
  examen: [
    ["In the reading, Nora added salt instead of…", ["sugar", "flour", "milk"], "Reading."],
    ["Most food waste happens…", ["at home", "in space", "in schools"], "Food waste."],
  ],
  tarjetas: [
    ["A pair of", "trousers, jeans, scissors, glasses, pyjamas: plural verb."],
    ["It depends", "a chicken / chicken; a paper / paper; a hair / hair."],
    ["Recipe English", "a pinch of, a tablespoon of; add, mix, pour, whisk."],
    ["Food waste", "Shopping list, small portions, leftovers, freezer."],
  ],
  glosario: [
    ["A pair of", "Un par de (para cosas de dos partes)."],
    ["Scissors", "Tijeras."],
    ["Pyjamas", "Pijama."],
    ["Flour", "Harina."],
    ["Pinch", "Pizca."],
    ["Tablespoon", "Cucharada."],
    ["Whisk", "Batir."],
    ["Pour", "Verter."],
    ["Leftovers", "Sobras."],
    ["Waste", "Desperdiciar; desperdicio."],
    ["Stale", "Duro, pasado (pan)."],
    ["Maize", "Maíz."],
  ],
  situacion: {
    titulo: "Zero waste cookbook",
    reto: "La clase crea un recetario en inglés con recetas para aprovechar las sobras y reducir el desperdicio de comida.",
    pasos: ["Pedid en casa recetas tradicionales que aprovechen sobras (torrijas, croquetas, migas…).", "Escribid cada receta en inglés con ingredientes, cantidades e imperativos.", "Añadid un dato sobre el origen de un ingrediente y un consejo contra el desperdicio.", "Maquetad el recetario y compartidlo con las familias."],
    producto: "Un recetario bilingüe «Zero waste cookbook».",
    evaluacion: ["Uses countable and uncountable nouns correctly.", "Uses quantities and imperatives in recipes.", "Gives advice about food waste.", "Writes clearly and accurately."],
  },
});
