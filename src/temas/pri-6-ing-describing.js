// Inglés 6º de Primaria: describing people and places. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Retrato con rótulos: pelo, ojos, gafas y camiseta.
const retrato = svg("Retrato de una chica con flechas: long curly hair, blue eyes, glasses, a striped T-shirt", `
  <path d="M84 60 q -14 40 -4 80 h 40 q 10 -40 -4 -80 z" fill="${NA}" fill-opacity=".7"/>
  <circle cx="100" cy="72" r="24" fill="#f3c79a" stroke="var(--ink)" stroke-width="1.5"/>
  <path d="M76 66 q 6 -28 24 -26 q 20 -2 24 26 q -8 -12 -24 -14 q -16 2 -24 14 z" fill="${NA}"/>
  <circle cx="91" cy="72" r="7" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="109" cy="72" r="7" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M98 72 h 4" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="91" cy="72" r="2.2" fill="${AZ}"/><circle cx="109" cy="72" r="2.2" fill="${AZ}"/><path d="M93 84 q 7 5 14 0" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
  <path d="M70 160 q 0 -50 30 -60 q 30 10 30 60 z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>
  ${[116, 128, 140, 152].map((y) => `<path d="M${74 + (160 - y) * 0.05} ${y} H ${126 - (160 - y) * 0.05}" stroke="${RO}" stroke-width="4"/>`).join("")}
  <path d="M126 50 L 160 36 M117 72 L 160 70 M126 100 L 160 104 M128 140 L 160 140" stroke="var(--muted)" stroke-width="1.2"/>
  ${tx(164, 40, "long curly hair", { s: 11, a: "start", c: NA })}${tx(164, 74, "blue eyes", { s: 11, a: "start", c: AZ })}${tx(164, 108, "glasses", { s: 11, a: "start" })}${tx(164, 144, "striped T-shirt", { s: 11, a: "start", c: RO })}`);

// Plano de una habitación con preposiciones de lugar.
const habitacion = svg("Una habitación: la lámpara está al lado de la cama, la alfombra delante, el gato debajo de la mesa", `
  <rect x="14" y="14" width="232" height="152" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  <rect x="30" y="80" width="90" height="40" rx="6" fill="${AZ}" fill-opacity=".35" stroke="${AZ}" stroke-width="2"/><rect x="30" y="70" width="20" height="50" rx="4" fill="${AZ}" fill-opacity=".6"/>
  <rect x="126" y="92" width="18" height="28" fill="${AM}" fill-opacity=".7"/><path d="M128 92 l 7 -16 l 7 16 z" fill="${AM}"/>
  <path d="M160 96 h 70 M168 96 v 28 M222 96 v 28" stroke="var(--ink)" stroke-width="3"/>
  <ellipse cx="195" cy="118" rx="12" ry="6" fill="${NA}"/><circle cx="206" cy="112" r="5" fill="${NA}"/>
  <ellipse cx="75" cy="146" rx="44" ry="10" fill="${VE}" fill-opacity=".4"/>
  ${tx(135, 64, "next to", { s: 10.5, c: AM })}${tx(195, 140, "under", { s: 10.5, c: NA })}${tx(75, 150, "in front of", { s: 10.5, c: VE })}${tx(75, 40, "bed", { s: 11, c: AZ })}${tx(195, 84, "desk", { s: 11 })}`);

module.exports = tema({
  materia: "Inglés",
  titulo: "Describing people and places",
  objetivos: ["Describe what people look like (aspecto físico)", "Describe personality (carácter) with adjectives", "Describe places with there is / there are and prepositions", "Put adjectives in the right order before the noun"],
  claves: ["What does he look like?", "What is she like?", "tall / short", "hair", "eyes", "personality", "adjective order", "prepositions of place", "there is / there are"],
  pregunta: [
    "«What does she look like?» y «What is she like?» parecen casi iguales. ¿Preguntan lo mismo?",
    "No. <mark>What does she look like?</mark> pregunta por su <b>aspecto</b>: «She's tall and she has got long hair». <mark>What is she like?</mark> pregunta por su <b>forma de ser</b>: «She's kind and funny». Con las dos podemos hacer una descripción completa.",
  ],
  bloques: [
    ["Appearance: body and face", `<p>To describe <b>appearance</b> (aspecto) we use <i>be</i> and <i>have got</i>. With <mark>be</mark>: «He <b>is</b> tall / short / medium height», «She <b>is</b> young / old», «They <b>are</b> slim / strong».</p><p>With <mark>have got</mark>: «She <b>has got</b> blue eyes», «He <b>has got</b> a beard / a moustache / freckles (pecas)». We also say «He <b>wears</b> glasses». <b>En castellano:</b> en inglés no se dice «es de ojos azules», sino «tiene ojos azules»: <i>has got blue eyes</i>. Y los adjetivos no tienen plural: «blue eyes», nunca «blues eyes».</p>`,
      retrato],
    ["Hair", `<p>For <b>hair</b> we usually say length, then style, then colour: <mark>long / short / medium-length</mark>, <mark>straight / wavy / curly</mark>, <mark>blond / brown / black / red / grey</mark>. «She's got <b>long curly brown</b> hair», «He's got <b>short straight black</b> hair». We can also say «He's <b>bald</b>» (calvo) or «She has got a <b>ponytail</b>» (coleta).</p><p><b>En castellano:</b> <i>hair</i> es incontable cuando hablamos del pelo de la cabeza: «Her hair <b>is</b> long», no «her hairs are».</p>`,
      L.filas("El pelo: largo, forma y color", [["length", "long · short · medium-length", AZ], ["style", "straight · wavy · curly", VE], ["colour", "blond · brown · black · red", NA]], "Describing hair")],
    ["Personality", `<p>To describe <b>personality</b> (carácter) we ask <mark>What is he like?</mark>. Positive adjectives: <b>kind</b> (amable), <b>friendly</b> (simpático), <b>funny</b> (gracioso), <b>clever</b> (listo), <b>brave</b> (valiente), <b>hard-working</b> (trabajador), <b>generous</b>, <b>patient</b>, <b>calm</b>.</p><p>Negative ones: <b>lazy</b> (vago), <b>bossy</b> (mandón), <b>shy</b> (tímido, not really negative!), <b>rude</b> (maleducado), <b>moody</b>. Give an example to show it: «My grandpa is very <b>patient</b>: he always helps me with my homework». <b>Consejo:</b> usa <i>very</i>, <i>quite</i> y <i>a bit</i> para matizar.</p>`,
      L.tabla("Adjetivos de carácter", ["Positive", "Negative"], [["kind", "rude"], ["hard-working", "lazy"], ["brave", "bossy"], ["calm", "moody"]], VE)],
    ["Adjective order", `<p>In English, adjectives go <b>before</b> the noun: «a <b>big</b> house», never «a house big». When there are several, they follow an order: <mark>opinion – size – age – shape – colour – material</mark> + noun.</p><p>«a <b>beautiful old</b> castle», «a <b>small round wooden</b> table», «a <b>nice big red</b> bike». <b>En castellano:</b> en español el adjetivo suele ir detrás («una casa grande»), por eso en inglés hay que pensar al revés. No uses más de dos o tres adjetivos seguidos.</p>`,
      L.frase("Orden de adjetivos: a nice big red bike", [["a", "", "var(--line)"], ["nice", "opinion", RO], ["big", "size", AZ], ["red", "colour", NA], ["bike", "noun", VE]], "opinion · size · age · colour + noun")],
    ["Describing places", `<p>To describe a place we use <mark>there is / there are</mark> and adjectives: «My town is <b>small</b> and <b>quiet</b>. There <b>is</b> a <b>beautiful</b> beach and there <b>are</b> some <b>old</b> churches. There <b>isn't</b> a cinema».</p><p>Useful adjectives for places: <b>big, small, busy</b> (con mucha gente), <b>quiet</b> (tranquilo), <b>noisy</b> (ruidoso), <b>modern, old, clean, dirty, crowded, peaceful</b>. <b>En castellano:</b> empieza por lo general (cómo es) y luego explica qué hay.</p>`,
      L.filas("Describir un lugar", [["It's", "a small quiet town.", AZ], ["There is", "a beautiful beach.", VE], ["There are", "some old churches.", NA], ["There isn't", "a cinema.", RO]])],
    ["Where is it? Prepositions of place", `<p><mark>Prepositions of place</mark> say where things are: <b>in</b> (dentro), <b>on</b> (encima), <b>under</b> (debajo), <b>next to</b> (al lado de), <b>between</b> (entre), <b>behind</b> (detrás), <b>in front of</b> (delante de), <b>opposite</b> (enfrente de), <b>near</b> (cerca).</p><p>«The lamp is <b>next to</b> the bed», «The cat is <b>under</b> the desk», «The bank is <b>opposite</b> the park», «The school is <b>between</b> the library and the pool». <b>En castellano:</b> ojo con <i>in front of</i> (delante) y <i>opposite</i> (enfrente, al otro lado).</p>`,
      habitacion, "in7b"],
    ["Reading: my best friend and my street", `<p>Read Adam's description: «My best friend is Sofía. She's quite tall and she has got <b>short wavy black</b> hair and <b>big brown</b> eyes. She wears glasses. She's very <b>funny</b> and <b>kind</b>, but a bit <b>shy</b> with new people. She lives in my street. It's a <b>quiet</b> street with <b>tall</b> trees. There's a bakery <b>next to</b> her house and there's a small park <b>opposite</b> my flat. We play there every afternoon».</p>`,
      L.filas("Descripción de Sofía y la calle", [["looks", "tall, short wavy black hair", AZ], ["is like", "funny, kind, a bit shy", VE], ["street", "quiet, with tall trees", NA], ["where", "bakery next to her house", RO]])],
    ["Writing a description", `<p>Plan your description in <b>three paragraphs</b> (párrafos): 1) <b>Who</b> and <b>appearance</b> («My uncle Javi is tall…»), 2) <b>personality</b> with examples («He's very generous: he always…»), 3) <b>place</b> or <b>activities</b> («He lives in a flat near the sea…»).</p><p>Use connectors: <b>and</b>, <b>but</b>, <b>also</b>, <b>because</b>. «She's shy <b>but</b> very friendly», «I like him <b>because</b> he's funny». <b>Consejo:</b> relee tu texto para comprobar el orden de los adjetivos y que hayas usado <i>has got</i> con los ojos y el pelo.</p>`,
      L.filas("Plan de una descripción en tres párrafos", [["1 · looks", "He's tall. He's got…", AZ], ["2 · personality", "He's generous because…", VE], ["3 · place", "He lives in…", NA]], "Plan your text")],
    ["Let's practise: Guess who?", `<p>Play «Guess who?» with pictures of people or classmates (with respect!). Ask only yes/no questions: «Has he got curly hair?» – «No, he hasn't». «Is she wearing a red jumper?» – «Yes, she is». «Does he wear glasses?» – «Yes, he does».</p><p>Then describe a place in the classroom without saying its name: «It's next to the window and opposite the door. There are lots of books on it». Your partner guesses: «The bookshelf!». <b>Consejo:</b> describe con respeto, sin palabras que puedan molestar a nadie.</p>`,
      L.dialogo("Juego ¿Quién es quién?", [["Ana", "Has she got curly hair?", AZ], ["Leo", "Yes, she has.", RO], ["Ana", "Does she wear glasses?", AZ], ["Leo", "No, she doesn't.", RO]])],
  ],
  ejemplos: [
    ["Order the words: «hair / she / got / long / blond / has».", ["Sujeto + has got.", "Longitud antes que color: long blond hair."], "She has got long blond hair."],
    ["Answer «What is your best friend like?» with two adjectives.", ["Pregunta por el carácter, no por el aspecto.", "Dos adjetivos y un ejemplo."], "He's funny and generous: he always shares his snacks."],
    ["Describe where the cat is: (debajo de la mesa, al lado de la puerta)", ["debajo = under.", "al lado de = next to."], "The cat is under the table, next to the door."],
  ],
  errores: [
    "Poner el adjetivo detrás: «a house big» → «a big house».",
    "Poner plural al adjetivo: «blues eyes» → «blue eyes».",
    "Decir «hairs» para el pelo de la cabeza → «hair».",
    "Confundir What is he like? (carácter) con What does he look like? (aspecto).",
    "Usar is en lugar de has got: «She is blue eyes» → «She has got blue eyes».",
  ],
  ejercicios: [
    ["Translate: «Tiene el pelo corto y rizado.»", "She has got short curly hair (o He has got…)."],
    ["Order: «car / red / a / small».", "a small red car."],
    ["Write the opposite: tall, quiet, lazy, old.", "short, noisy, hard-working, young (o new)."],
    ["Which question asks about personality?", "What is he like?"],
    ["Complete: «The bank is ___ the park.» (enfrente de)", "opposite."],
    ["Complete: «My bag is ___ my chair.» (debajo de)", "under."],
    ["Correct: «My sister has got browns eyes.»", "My sister has got brown eyes."],
    ["Complete: «There ___ two parks in my town.»", "are."],
    ["Describe your bedroom in two sentences.", "Model answer: There is a bed next to the window. My desk is opposite the door."],
    ["Describe a family member in three sentences.", "Model answer: My mum is tall. She has got short brown hair. She's very kind and funny."],
  ],
  figura: ["Describing people and places", L.columnas("Describir personas y lugares", [["What does he look like?", "LOOKS", ["tall, short hair", "has got blue eyes"], AZ], ["What is he like?", "PERSONALITY", ["kind, funny", "a bit shy"], VE], ["adjective order", "NICE BIG RED", ["opinion, size,", "colour + noun"], NA], ["places", "NEXT TO", ["under, opposite", "there is / are"], RO]])],
  video: "in7v",
  quiz: [
    ["«What does she look like?» asks about…", ["appearance", "personality", "hobbies"], "Aspecto físico."],
    ["«What is he like?» asks about…", ["personality", "appearance", "his job"], "Forma de ser."],
    ["«She ___ got green eyes.»", ["has", "is", "have"], "She + has got."],
    ["Correct order:", ["a beautiful old house", "an old beautiful house", "a house beautiful old"], "Opinión antes que edad."],
    ["«Curly» describes…", ["hair", "eyes", "personality"], "Pelo rizado."],
    ["Someone who never wants to work is…", ["lazy", "brave", "kind"], "Lazy = vago."],
    ["«The ball is ___ the box.» (dentro)", ["in", "on", "under"], "In = dentro."],
    ["«delante de» is…", ["in front of", "behind", "opposite"], "In front of."],
    ["«Her hair ___ long.»", ["is", "are", "have"], "Hair es incontable."],
    ["A place with lots of noise is…", ["noisy", "quiet", "peaceful"], "Noisy = ruidoso."],
  ],
  examen: [
    ["«Is he wearing glasses?» – «Yes, ___.»", ["he is", "he does", "he has"], "Pregunta con is."],
    ["«between» means…", ["entre", "detrás", "encima"], "Between = entre."],
    ["Which is a personality adjective?", ["generous", "blond", "tall"], "Carácter."],
    ["«a ___ table»", ["small round wooden", "wooden small round", "round wooden small"], "Tamaño, forma, material."],
  ],
  feynman: ["Diferencia entre What is he like? y What does he look like?", "Cómo describir el pelo y los ojos", "En qué orden van los adjetivos", "Cómo describir un lugar con there is / there are y preposiciones"],
  mapa: ["DESCRIBING", AZ, [["Looks", "tall · has got blue eyes", AZ], ["Personality", "kind · funny · shy", VE], ["Adjective order", "nice big red bike", NA], ["Places", "there is · next to · opposite", RO]], 240],
  tarjetas: [
    ["What does she look like?", "¿Cómo es físicamente?"],
    ["What is she like?", "¿Cómo es de carácter?"],
    ["has got blue eyes", "Tiene los ojos azules."],
    ["long curly hair", "Pelo largo y rizado."],
    ["kind / funny / shy", "Amable / gracioso / tímido."],
    ["Adjective order", "Opinión, tamaño, edad, color + nombre."],
    ["in front of / behind", "Delante de / detrás de."],
    ["opposite", "Enfrente de."],
  ],
  familias: ["Jugad en casa a «Guess who?» con fotos de la familia, preguntando en inglés.", "Describid juntos vuestra calle en inglés con tres frases con there is / there are."],
  saberes: "Descripción física y de carácter de personas y descripción de lugares; orden del adjetivo y preposiciones de lugar (Lengua Extranjera)",
  ideas: ["«Guess who?» con personajes famosos o ilustraciones.", "Plano del barrio con preposiciones y rutas.", "Retrato escrito de un personaje de libro para que los compañeros lo adivinen."],
  fuentes: [["British Council LearnEnglish Kids: describing people", "https://learnenglishkids.britishcouncil.org/word-games"], ["Cambridge Dictionary: adjectives, order", "https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order"]],
});
