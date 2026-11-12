// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Quantifiers and countable nouns",
  minutos: 35,
  objetivos: ["Distinguir nombres contables e incontables", "Usar some, any, much, many, a lot of, a few y a little", "Preguntar por cantidades con how much y how many"],
  claves: ["countable / uncountable", "some / any", "much / many", "a lot of", "a few / a little", "how much / how many", "too / enough"],
  pregunta: {
    texto: "¿Por qué en inglés se dice «two apples» pero no «two breads»?",
    respuesta: "Porque <i>apple</i> es un nombre <mark>contable</mark> (se puede contar: one apple, two apples) y <i>bread</i> es <mark>incontable</mark>: se cuenta con un recipiente o una medida, como <i>a loaf of bread</i> o <i>two slices of bread</i>. Saber si un nombre es contable o no decide qué cuantificador usamos.",
  },
  bloques: [
    {
      html: `<h3>Contables e incontables</h3><p>Los nombres <b>contables</b> tienen singular y plural y se pueden contar: <i>a chair, two chairs; an egg, six eggs</i>. Los <b>incontables</b> no tienen plural ni llevan <i>a / an</i>: son sustancias, líquidos, materiales e ideas, como <i>water, milk, rice, sugar, money, music, information, advice, homework</i>. Ojo: algunos son contables en español y no en inglés: <mark>information, advice, news, furniture, homework</mark>. No se dice *«an information» ni *«advices».</p>`,
      svg: L.tabla("Nombres contables e incontables", ["Contables", "Incontables"], [
        ["an apple", "water"], ["two chairs", "rice"], ["three eggs", "information"], ["a coin", "money"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Some y any</h3><p><mark>Some</mark> se usa en frases <b>afirmativas</b> con plurales e incontables: «There are <i>some</i> eggs», «I've got <i>some</i> money». <mark>Any</mark> se usa en <b>negativas</b> y <b>preguntas</b>: «There isn't <i>any</i> milk», «Have you got <i>any</i> brothers?». Excepción importante: en <b>ofrecimientos y peticiones</b> usamos <i>some</i> aunque sea pregunta: «Would you like <i>some</i> tea?», «Can I have <i>some</i> water, please?».</p>`,
      svg: L.filas("Some y any", [
        ["+", "There are some eggs.", "var(--leaf)"], ["−", "There isn't any milk.", "var(--red)"], ["?", "Is there any bread?", "var(--pen)"], ["Oferta", "Would you like some tea?", "var(--sun)"],
      ]),
    },
    {
      html: `<h3>Much, many y a lot of</h3><p><mark>Many</mark> va con <b>contables en plural</b>: «How <i>many</i> friends have you got?», «There aren't <i>many</i> people». <mark>Much</mark> va con <b>incontables</b>, sobre todo en negativas y preguntas: «I haven't got <i>much</i> time», «Is there <i>much</i> traffic?». En las frases afirmativas lo natural es <mark>a lot of</mark> (o <i>lots of</i>), que vale para los dos: «She has <i>a lot of</i> friends», «We drink <i>a lot of</i> water».</p>`,
      svg: L.tabla("Much, many y a lot of", ["Cuantificador", "Va con"], [
        ["many", "contables plural"], ["much", "incontables"], ["a lot of", "los dos"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>A few y a little</h3><p>Para decir <b>poca cantidad, pero suficiente</b>, usamos <mark>a few</mark> con <b>contables</b> («I've got <i>a few</i> sweets: do you want one?») y <mark>a little</mark> con <b>incontables</b> («Add <i>a little</i> salt»). Sin <i>a</i>, <b>few</b> y <b>little</b> tienen un sentido más negativo, «poco, casi nada»: «<i>Few</i> people came to the party» (fue un fracaso). En el día a día, para lo negativo es más común <i>not many / not much</i>.</p>`,
      svg: L.filas("Poca cantidad", [
        ["a few", "contables: a few eggs", "var(--leaf)"], ["a little", "incontables: a little milk", "var(--inf)"],
      ], "poco, pero suficiente"),
    },
    {
      html: `<h3>How much y how many</h3><p>Para preguntar por la cantidad usamos <mark>How many</mark> + contable en plural («<i>How many</i> students are there in your class?») y <mark>How much</mark> + incontable («<i>How much</i> water do you drink a day?»). <b>How much</b> también sirve para preguntar el <b>precio</b>: «<i>How much</i> is this T-shirt?» — «It's 15 euros». «<i>How much</i> are these trainers?» — «They're 60 euros».</p>`,
      svg: L.dialogo("Preguntar cantidades en una tienda", [
        ["A", "How much is this cap?", "var(--pen)"], ["B", "It's 12 euros.", "var(--leaf)"], ["A", "How many colours are there?", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Qué cuantificador uso?",
    svg: L.columnas("Cuantificadores según el tipo de nombre", [
      ["Contables", "countable", ["many", "a few", "how many"], "var(--pen)"],
      ["Los dos", "both", ["some / any", "a lot of", "no"], "var(--sun)"],
      ["Incontables", "uncountable", ["much", "a little", "how much"], "var(--red)"],
    ]),
  },
  video: { id: "_QB5m-07tJg", titulo: "Some y any en inglés: diferencias y cuándo usar cada uno", canal: "Francisco Ochoa Inglés Fácil", vistas: 2617733, megusta: 0, busqueda: "some any much many inglés" },
  quiz: [
    { q: "¿Cuál es incontable?", o: ["chair", "information", "apple"], a: 1, e: "Information no tiene plural en inglés." },
    { q: "«There isn't ___ milk in the fridge.»", o: ["some", "any", "many"], a: 1, e: "Negativa: any." },
    { q: "«How ___ brothers have you got?»", o: ["much", "many", "lot"], a: 1, e: "Contable plural: many." },
    { q: "«Would you like ___ cake?»", o: ["any", "some", "many"], a: 1, e: "Ofrecimiento: some." },
    { q: "«Add ___ sugar to the tea.»", o: ["a few", "a little", "many"], a: 1, e: "Incontable: a little." },
  ],
  examen: [
    { q: "«I haven't got ___ time today.»", o: ["many", "much", "a few"], a: 1, e: "Time es incontable: much." },
    { q: "«___ is this jacket?» — «It's 40 euros.»", o: ["How many", "How much", "How"], a: 1, e: "Precio: how much." },
    { q: "¿Qué frase es correcta?", o: ["She gave me some good advice.", "She gave me some good advices.", "She gave me an advice."], a: 0, e: "Advice es incontable." },
  ],
  feynman: ["Qué diferencia hay entre nombres contables e incontables", "Cuándo se usa some y cuándo any", "Qué diferencia hay entre much, many y a lot of", "Cómo se pregunta por cantidades y precios"],
  mapa: mapa("QUANTIFIERS", "var(--eso)", [
    ["some / any", "+ / − ?", "var(--leaf)"],
    ["many / few", "countable", "var(--pen)"],
    ["much / little", "uncountable", "var(--red)"],
    ["a lot of", "both", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Incontables con trampa", "information, advice, news, furniture, homework: sin plural."],
    ["some / any", "some en afirmativas y ofrecimientos; any en negativas y preguntas."],
    ["many / much", "many + contables; much + incontables."],
    ["a lot of", "En afirmativas, con los dos tipos."],
    ["How much?", "Cantidad de incontables y precio."],
  ],
  familias: ["Escribid la lista de la compra en inglés con cantidades: «some eggs, a little cheese, a lot of fruit».", "Preguntad precios en inglés en un juego de tienda: «How much is…?».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: nombres contables e incontables y cuantificadores; expresión de la cantidad, compras y alimentación (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Role-play de mercado con precios y cantidades.", "Encuesta de hábitos: «How much water / How many hours…?» y gráfico de resultados.", "Receta de clase con partitivos y cuantificadores."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: quantifiers", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/quantifiers" },
    { t: "Cambridge Dictionary: nouns, countable and uncountable", url: "https://dictionary.cambridge.org/grammar/british-grammar/nouns-countable-and-uncountable" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Contar incontables con partitivos", "Usar too much, too many y enough"],
  bloques: [
    { tras: "Contables e incontables", html: `<h3>Contar lo incontable: los partitivos</h3><p>Para contar un incontable lo metemos en un <b>recipiente</b> o lo partimos en <b>unidades</b>: ${L.tb(["Partitivo", "Ejemplo"], [["a bottle of", "a bottle of water"], ["a carton of", "a carton of milk"], ["a loaf of", "a loaf of bread"], ["a slice of", "two slices of pizza"], ["a piece of", "a piece of cake / advice"], ["a cup of", "a cup of tea"], ["a kilo of", "a kilo of rice"], ["a can of", "a can of cola"]])}<p>Así sí podemos usar números: «three <b>bottles</b> of water», «a <b>piece</b> of information». El que va en plural es el <mark>recipiente</mark>, no el incontable.</p>` },
    { tras: "Much, many y a lot of", html: `<h3>Too much, too many y enough</h3><p><mark>Too much</mark> (incontables) y <mark>too many</mark> (contables) significan «demasiado(s)», más de lo que conviene: «There's <i>too much</i> sugar in this cake», «I've got <i>too many</i> exams this week». <mark>Enough</mark> significa «suficiente» y va <b>delante del nombre</b>: «We haven't got <i>enough</i> chairs», «Is there <i>enough</i> food for everyone?». Con adjetivos va detrás: «It isn't warm <i>enough</i>».</p>`, video: L.vid("-oll5WNHWAk", "Cómo usar much, many, a lot, a little y a few en inglés", "Francisco Ochoa Inglés Fácil", 2913682) },
    { tras: "Some y any", html: `<h3>Something, anyone, nowhere…</h3><p>Las reglas de <i>some</i> y <i>any</i> se aplican también a sus <b>compuestos</b>: <i>some</i>thing, <i>some</i>one / <i>some</i>body, <i>some</i>where en afirmativas; <i>any</i>thing, <i>any</i>one, <i>any</i>where en negativas y preguntas. «There's <b>something</b> in my eye», «I didn't see <b>anyone</b>», «Did you go <b>anywhere</b> last summer?». Con <mark>no</mark> formamos negativos con verbo afirmativo: <b>nothing, no one, nowhere</b>: «I've got <i>nothing</i> to wear» = «I haven't got <i>anything</i> to wear». Nunca se juntan dos negaciones: *«I didn't see nobody».</p>` },
    { tras: "A few y a little", html: `<h3>No, none y any</h3><p><mark>No</mark> + nombre es una forma fuerte de decir «ninguno» con el verbo en afirmativa: «There are <i>no</i> tickets left», «I have <i>no</i> idea». <mark>None</mark> se usa solo, sin nombre detrás, a menudo como respuesta: «How many tickets are left?» — «<i>None</i>». También aparece en <b>none of</b>: «<i>None of</i> my friends likes jazz». Compara las tres formas de decir lo mismo: «There isn't any bread» / «There's <i>no</i> bread» / «Bread? There's <i>none</i>». La primera es la más neutra; las otras suenan más enfáticas.</p>` },
    { tras: "How much y how many", html: `<h3>Cantidades en una receta y en la compra</h3><p>Las recetas y las listas de la compra están llenas de cuantificadores. Lee esta: «To make pancakes you need <b>some</b> flour, <b>two</b> eggs, <b>a little</b> sugar, <b>a pinch of</b> salt and <b>a glass of</b> milk. You don't need <b>any</b> butter, but you can add <b>a few</b> strawberries on top». Y en una tienda: «Can I have <b>a kilo of</b> tomatoes and <b>half a dozen</b> eggs, please?» — «Anything else?» — «No, that's all. <b>How much</b> is it?». Es el contexto ideal para practicar, porque obliga a decidir en cada palabra si es contable o incontable.</p>` },
  ],
  ejemplos: [
    ["Completa: «There aren't ___ (much / many) cars in my street, but there's ___ (a lot of / many) noise.»", ["Cars es contable plural en negativa → many.", "Noise es incontable en afirmativa → a lot of."], "There aren't many cars in my street, but there's a lot of noise."],
    ["Corrige: «Can you give me an information about the trip?»", ["Information es incontable: no lleva an.", "Usa some o a piece of."], "Can you give me some information / a piece of information about the trip?"],
    ["Pregunta por la cantidad: (water / you drink every day)", ["Water es incontable → How much.", "Pregunta en presente: do you drink."], "How much water do you drink every day?"],
  ],
  errores: [
    "Poner plural a incontables: *informations, *advices, *homeworks.",
    "Usar a / an con incontables: *a bread → a loaf of bread / some bread.",
    "Usar much con contables: *much friends → many friends / a lot of friends.",
    "Usar any en ofrecimientos: *Would you like any tea? → some tea.",
    "Doble negación: *I didn't do nothing → I didn't do anything / I did nothing.",
  ],
  ejercicios: [
    ["Clasifica en contables (C) e incontables (U): rice, orange, money, coin, furniture, chair.", "C: orange, coin, chair. U: rice, money, furniture."],
    ["Completa con some o any: «Have you got ___ pets?» / «I've got ___ pencils.»", "any, some."],
    ["Completa con much o many: «How ___ homework have you got?»", "much (homework es incontable)."],
    ["Completa con a few o a little: «I need ___ minutes to get ready.»", "a few (minutes, contable)."],
    ["Completa con too much o too many: «There are ___ people on this bus.»", "too many."],
    ["Escribe el partitivo: ___ chocolate, ___ water, ___ bread.", "a bar of chocolate, a bottle / glass of water, a loaf / slice of bread."],
    ["Pregunta el precio de unas zapatillas.", "How much are these trainers?"],
    ["Reescribe con no: «There isn't any juice left.»", "There's no juice left."],
    ["Corrige: «I didn't see nobody at the park.»", "I didn't see anybody at the park. / I saw nobody at the park."],
    ["Escribe tu lista de la compra para una merienda con cinco productos y cantidades.", "Por ejemplo: «a loaf of bread, some cheese, a few tomatoes, two bottles of water and a little chocolate»."],
  ],
  quiz: [
    ["«We haven't got ___ chairs for everyone.»", ["enough", "too", "much"], 0, "Enough delante del nombre."],
    ["«I've got ___ to do today: I'm free!»", ["nothing", "anything", "something"], 0, "Verbo afirmativo + nothing."],
    ["«a ___ of cake»", ["piece", "bottle", "carton"], 0, "A piece of cake."],
    ["«How many tickets are left?» — «___.»", ["None", "No", "Any"], 0, "None, sin nombre detrás."],
    ["«There's ___ salt in this soup. I can't eat it!»", ["too much", "too many", "a few"], 0, "Incontable y excesivo."],
  ],
  tarjetas: [
    ["Partitivos", "a bottle of, a slice of, a piece of, a loaf of…"],
    ["too much / too many / enough", "Demasiado (incontable / contable) y suficiente."],
    ["something / anything / nothing", "Compuestos que siguen las reglas de some, any y no."],
  ],
});
