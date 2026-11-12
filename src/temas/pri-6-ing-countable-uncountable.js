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
