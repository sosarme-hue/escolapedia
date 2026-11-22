// Inglés 6º de Primaria: there was / there were. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Antes y ahora: un pueblo con un río y un castillo, y la misma vista hoy.
const antesAhora = svg("Antes había un castillo y un río; ahora hay un puente y casas", `
  <rect x="12" y="30" width="114" height="110" rx="8" fill="var(--card)" stroke="${AM}" stroke-width="2"/><rect x="134" y="30" width="114" height="110" rx="8" fill="var(--card)" stroke="${AZ}" stroke-width="2"/>
  ${tx(69, 22, "In 1500", { s: 12, c: AM })}${tx(191, 22, "Today", { s: 12, c: AZ })}
  <path d="M12 118 q 57 -14 114 0 v 22 h -114 z" fill="var(--water)" fill-opacity=".5"/><path d="M134 118 q 57 -14 114 0 v 22 h -114 z" fill="var(--water)" fill-opacity=".5"/>
  <path d="M40 104 v -40 h 10 v -8 h 8 v 8 h 10 v -8 h 8 v 8 h 10 v 40 z" fill="var(--muted)" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.2"/>
  <path d="M146 112 q 45 -28 90 0" fill="none" stroke="var(--ink)" stroke-width="3"/>
  <path d="M152 98 v -16 l 9 -8 l 9 8 v 16 z M200 98 v -20 l 10 -9 l 10 9 v 20 z" fill="${NA}" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.2"/>
  ${tx(69, 158, "There was a castle.", { s: 10.5 })}${tx(191, 158, "There is a bridge.", { s: 10.5 })}${tx(130, 174, "There were no cars!", { s: 10.5, c: RO })}`);

module.exports = tema({
  materia: "Inglés",
  titulo: "There was / there were",
  objetivos: ["Describe places in the past with there was and there were", "Choose was (singular) or were (plural)", "Make negatives and questions: there wasn't, Was there…?", "Compare a place in the past and now"],
  claves: ["there is / there are", "there was", "there were", "there wasn't", "there weren't", "Was there…?", "Were there…?", "a / some / any", "How many…?"],
  pregunta: [
    "En español decimos «había un castillo» y «había muchos caballos», siempre con «había». En inglés, ¿se dice igual para uno que para muchos?",
    "No. En inglés el verbo cambia: <mark>there was</mark> para una sola cosa («There <b>was</b> a castle») y <mark>there were</mark> para varias («There <b>were</b> many horses»). Es el pasado de <i>there is</i> y <i>there are</i>.",
  ],
  bloques: [
    ["From there is to there was", `<p>You already know <b>there is</b> and <b>there are</b> (hay): «There <b>is</b> a park near my house», «There <b>are</b> two cinemas in my town». To talk about the <b>past</b> we use <mark>there was</mark> and <mark>there were</mark> (había, hubo).</p><p><b>En castellano:</b> «hay» pasa a ser «había». En inglés, el singular pasa a <i>was</i> y el plural a <i>were</i>, igual que el verbo <i>to be</i>: is → was, are → were.</p>`,
      L.tabla("Presente y pasado de there is / there are", ["Present", "Past"], [["There is a park.", "There was a park."], ["There are trees.", "There were trees."]], AZ)],
    ["There was: singular", `<p>Use <mark>there was</mark> with <b>one</b> thing (a / an / one) and with <b>uncountable</b> nouns (nombres incontables: water, food, snow, money): «There <b>was a</b> big storm last night», «There <b>was an</b> old tree in the square», «There <b>was</b> a lot of snow in the mountains».</p><p>The short form <b>there's</b> is only for the present. In the past we always write <b>there was</b> in full. <b>En castellano:</b> «había una tormenta», «había mucha nieve».</p>`,
      L.filas("There was con singular e incontables", [["a / an", "There was a storm.", AZ], ["uncountable", "There was a lot of snow.", VE], ["one", "There was one shop.", NA]], "There was…")],
    ["There were: plural", `<p>Use <mark>there were</mark> with <b>two or more</b> things: «There <b>were</b> twenty children in the classroom», «There <b>were some</b> beautiful shells on the beach», «There <b>were lots of</b> people at the concert».</p><p><b>Careful</b> with the first noun in a list: «There <b>was</b> a table and two chairs» (the first noun is singular) but «There <b>were</b> two chairs and a table». <b>En castellano:</b> mira la palabra que va justo detrás para elegir <i>was</i> o <i>were</i>.</p>`,
      L.frase("There were some shells on the beach", [["There", "", "var(--line)"], ["were", "plural", RO], ["some shells", "varias", AZ], ["on the beach.", "", "var(--line)"]], "two or more → were")],
    ["Negatives: there wasn't, there weren't", `<p>Negative: <mark>there wasn't</mark> (was not) and <mark>there weren't</mark> (were not). With plural and uncountable nouns we usually add <b>any</b>: «There <b>wasn't a</b> swimming pool», «There <b>weren't any</b> cars in 1800», «There <b>wasn't any</b> milk in the fridge».</p><p>We can also say <b>there was no</b> / <b>there were no</b>: «There <b>were no</b> mobile phones when my grandma was a child». <b>En castellano:</b> «no había móviles». Ojo: nunca uses dos negaciones juntas («weren't no»).</p>`,
      L.filas("Negativas en pasado", [["wasn't a", "There wasn't a pool.", AZ], ["weren't any", "There weren't any cars.", RO], ["were no", "There were no phones.", NA]])],
    ["Questions and short answers", `<p>For questions we change the order: <mark>Was there…?</mark> and <mark>Were there…?</mark> «<b>Was there</b> a library in your school?» – «Yes, there was. / No, there wasn't». «<b>Were there any</b> dinosaurs in Spain?» – «Yes, there were!».</p><p>To ask about quantity: «<b>How many</b> people <b>were there</b>?» (countable) and «<b>How much</b> food <b>was there</b>?» (uncountable). <b>En castellano:</b> «¿Cuántas personas había?», «¿Cuánta comida había?».</p>`,
      L.dialogo("Preguntas: Were there any dinosaurs in Spain?", [["Pol", "Were there any dinosaurs in Spain?", AZ], ["Teacher", "Yes, there were!", RO], ["Pol", "Was there a T. rex?", AZ], ["Teacher", "No, there wasn't.", RO]]), "in5b"],
    ["My town in the past", `<p>We use there was / there were to <b>describe places</b> long ago: «A hundred years ago there <b>weren't</b> any supermarkets in my town. There <b>was</b> a small market in the square. There <b>were</b> lots of farms and there <b>was</b> a railway station. There <b>wasn't</b> any electricity in some houses».</p><p>Compare with today using there is / there are: «Now there <b>is</b> a big supermarket and there <b>are</b> two schools». <b>Consejo:</b> pregunta a tus abuelos cómo era su pueblo y escríbelo en inglés.</p>`,
      antesAhora],
    ["Telling a story", `<p>Stories often start with there was or there were to present the place and the characters: «Once upon a time <b>there was</b> a little dragon who lived in a cave. <b>There were</b> lots of treasures in the cave, but <b>there wasn't</b> anyone to play with».</p><p>We use it to describe a scene: «When we arrived at the party, <b>there was</b> music and <b>there were</b> balloons everywhere». <b>En castellano:</b> «Érase una vez un dragón…» se dice en inglés «Once upon a time there was a dragon…».</p>`,
      L.filas("Empezar un cuento", [["Once upon a time", "there was a little dragon.", AZ], ["In the cave", "there were lots of treasures.", NA], ["But", "there wasn't anyone to play with.", RO]], "Once upon a time…")],
    ["Reading: a school trip to a castle", `<p>Read Nerea's text: «Last Friday we visited a castle. It was very old. Many years ago, <b>there were</b> soldiers and horses there. <b>There was</b> a big kitchen with a huge fireplace, but <b>there wasn't</b> a bathroom! <b>There were</b> some secret tunnels under the castle. «<b>Were there</b> any ghosts?» asked Mario. «No, <b>there weren't</b>», said the guide. «But <b>there was</b> a very old cat!». We all laughed.»</p><p>How many times do you see <i>there was</i>? And <i>there were</i>?</p>`,
      L.filas("Lo que había en el castillo", [["There were", "soldiers and horses", AZ], ["There was", "a big kitchen", VE], ["There wasn't", "a bathroom", RO], ["There were", "secret tunnels", NA]])],
    ["Let's practise: memory game", `<p>Look at a picture of a room for one minute. Then close your eyes. Your partner asks: «<b>Was there</b> a lamp?», «<b>How many</b> books <b>were there</b>?». Answer: «Yes, there was», «There were three books». Who remembers more?</p><p>Then describe a place you visited: «In the zoo <b>there were</b> lions and <b>there was</b> a big aquarium». <b>Consejo:</b> antes de escribir <i>was</i> o <i>were</i>, mira si lo que viene detrás es uno, varios o incontable.</p>`,
      L.tabla("Juego de memoria: preguntas y respuestas", ["Question", "Answer"], [["Was there a lamp?", "Yes, there was."], ["Were there any cats?", "No, there weren't."], ["How many books?", "There were three."]], AZ)],
  ],
  ejemplos: [
    ["Complete: «There ___ a lot of people at the beach.»", ["people es plural.", "Plural → were."], "There were a lot of people at the beach."],
    ["Make it negative: «There was some bread.»", ["Negativa: wasn't.", "En negativas, some → any."], "There wasn't any bread."],
    ["Make a question: «There were two dogs in the park.» (How many)", ["How many + nombre plural + were there?"], "How many dogs were there in the park?"],
  ],
  errores: [
    "Usar was con plural: «There was three cats» → «There were three cats».",
    "Traducir «había» con had: «It had a castle» → «There was a castle».",
    "Escribir «there's» para el pasado → «there was».",
    "Doble negación: «There weren't no cars» → «There weren't any cars».",
    "Orden de la pregunta: «There was a park?» → «Was there a park?».",
  ],
  ejercicios: [
    ["Complete: «There ___ a big storm yesterday.»", "was."],
    ["Complete: «There ___ ten pencils in my bag.»", "were."],
    ["Complete: «There ___ much water in the river.» (negative)", "wasn't."],
    ["Make it negative: «There were some biscuits.»", "There weren't any biscuits."],
    ["Make a question: «There was a museum in your town.»", "Was there a museum in your town?"],
    ["Short answer: «Were there any people?» (no)", "No, there weren't."],
    ["Ask with How many: «There were five boats.»", "How many boats were there?"],
    ["Correct: «In 1900 it had no computers.»", "In 1900 there were no computers."],
    ["Translate: «Había un perro y dos gatos.»", "There was a dog and two cats."],
    ["Write three sentences about your classroom in 1º of Primary.", "Model answer: There were lots of toys. There was a big carpet. There weren't any computers."],
  ],
  figura: ["There was / there were", L.columnas("Había en inglés", [["singular", "THERE WAS", ["a castle", "some snow"], AZ], ["plural", "THERE WERE", ["two towers", "lots of people"], VE], ["negative", "WASN'T / WEREN'T", ["any cars", "a bathroom"], RO], ["question", "WAS THERE…?", ["Yes, there was.", "No, there weren't."], AM]])],
  video: "in5v",
  quiz: [
    ["«There ___ a cat on the roof.»", ["was", "were", "had"], "Una cosa: was."],
    ["«There ___ two cats on the roof.»", ["were", "was", "is"], "Plural: were."],
    ["«There ___ any milk.»", ["wasn't", "weren't", "isn't no"], "Incontable, negativa."],
    ["«___ there a park in your town?»", ["Was", "Were", "Did"], "Singular: Was there…?"],
    ["«Were there any shops?» – «No, ___.»", ["there weren't", "there wasn't", "they weren't"], "Respuesta corta."],
    ["«How many children ___?»", ["were there", "there were", "was there"], "Orden de pregunta, plural."],
    ["«Había» in English is…", ["there was / there were", "it had", "there has"], "No se usa had."],
    ["«There ___ a lot of snow last winter.»", ["was", "were", "are"], "Snow es incontable."],
    ["«There were ___ phones in 1850.»", ["no", "not", "any no"], "were no = no había."],
    ["Present of «there were» is…", ["there are", "there is", "there have"], "were → are."],
  ],
  examen: [
    ["«There ___ a table and four chairs.»", ["was", "were", "be"], "El primer nombre es singular."],
    ["«How much food ___?»", ["was there", "were there", "there was"], "Incontable: was."],
    ["Negative of «There were some trees»:", ["There weren't any trees.", "There wasn't some trees.", "There weren't no trees."], "weren't + any."],
    ["«Once upon a time there ___ a princess.»", ["was", "were", "is"], "Inicio de cuento."],
  ],
  feynman: ["Qué significan there was y there were", "Cuándo se usa was y cuándo were", "Cómo se hacen las negativas con any y no", "Cómo se pregunta y se contesta con respuestas cortas"],
  mapa: ["THERE WAS / WERE", AZ, [["There was", "one thing · uncountable", AZ], ["There were", "two or more", VE], ["Negative", "wasn't · weren't any", RO], ["Question", "Was there…? · How many…?", AM]], 240],
  tarjetas: [
    ["there was", "Había (una cosa o incontable)."],
    ["there were", "Había (varias cosas)."],
    ["there wasn't", "No había (singular)."],
    ["there weren't any", "No había ningunos."],
    ["Was there…?", "¿Había…? (singular)."],
    ["Were there…?", "¿Había…? (plural)."],
    ["How many … were there?", "¿Cuántos … había?"],
    ["Once upon a time there was…", "Érase una vez…"],
  ],
  familias: ["Mirad fotos antiguas de la familia y describid en inglés qué había: «There was a red car».", "Preguntad a los abuelos cómo era su colegio y traducid juntos tres frases con there was / there were."],
  saberes: "Descripción de lugares y situaciones en el pasado; existencia en pasado con there was / there were (Lengua Extranjera)",
  ideas: ["Comparar fotos antiguas y actuales del pueblo o barrio.", "Juego de memoria con una imagen proyectada un minuto.", "Escribir el inicio de un cuento con Once upon a time there was…"],
  fuentes: [["British Council LearnEnglish Kids: there was, there were", "https://learnenglishkids.britishcouncil.org/grammar-practice"], ["Cambridge Dictionary: there is, there are", "https://dictionary.cambridge.org/grammar/british-grammar/there-is-there-are"]],
});

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguish there was and it was", "Compare the past and the present with there used to be", "Set the scene of a story with there was / there were", "Describe Pompeii and life a hundred years ago"],
  lectura: { titulo: "The secret room", html: `<p>Last summer, my cousin Marta and I stayed at our grandparents' old house in the mountains. One rainy afternoon, we were bored, so we decided to explore the attic.</p><p>It was dark and dusty. <b>There were</b> old boxes everywhere, and <b>there was</b> a strange smell. Behind a big wardrobe, Marta found a small wooden door. It was locked, but <b>there was</b> a key under the carpet.</p><p>We opened the door slowly. Inside, <b>there was</b> a tiny room with a round window. <b>There weren't</b> any lights, so we used a torch. <b>There was</b> a desk with an old typewriter on it, and <b>there were</b> hundreds of letters tied with red ribbons. On the wall, <b>there was</b> a black-and-white photo of a young woman.</p><p>We ran downstairs to ask Grandma. She smiled. «That was my mother's room,» she said. «She was a writer. <b>There were</b> no computers then, so she wrote everything on that typewriter.»</p><p>That evening, we read some of the letters together. It was the best rainy day ever.</p>` },
  tras: {
    "Questions and short answers": [
      ["There was or it was?", `<p>Many students confuse <b>there was</b> and <b>it was</b>. They are different:</p><ul><li><mark>There was / there were</mark> says that something <b>existed</b> or was in a place. It introduces something <b>new</b>: «<b>There was</b> a dog in the garden.» (Había un perro.)</li><li><mark>It was</mark> describes something we already know, or talks about the weather, the time or a situation: «<b>It was</b> black and white.» «<b>It was</b> cold.» «<b>It was</b> nine o'clock.» «<b>It was</b> fantastic!»</li></ul><p>We often use them together: first <i>there was</i> to present the thing, then <i>it was</i> to describe it:</p><ul><li>«<b>There was</b> a cake on the table. <b>It was</b> delicious.»</li><li>«<b>There were</b> some kittens in the box. <b>They were</b> very small.»</li></ul><p><b>En castellano</b> decimos «había» para los dos números (había un perro, había dos perros), pero en inglés cambia: <i>there was</i> en singular y <i>there were</i> en plural. Y nunca decimos «It was a dog in the garden» para decir «había un perro».</p>`,
        H6.dos("Two different things", ["There was", ["something exists", "There was a dog.", "había"], cAZ], ["It was", ["describes it", "It was black.", "era / estaba"], cNA]), ["pS6MubcSf_g", "The Was or Were Song", "Anchor Creative Education", 257902]],
    ],
    "My town in the past": [
      ["There used to be…", `<p>To compare a place in the past and now, we can use <mark>there used to be</mark>. It means that something existed in the past, for a long time, but it doesn't exist now:</p><ul><li>«<b>There used to be</b> a cinema in my street. Now <b>there is</b> a supermarket.»</li><li>«<b>There used to be</b> lots of trees here. Now <b>there are</b> houses.»</li><li>«<b>There didn't use to be</b> a park in my town, but now <b>there is</b> a big one.»</li><li>«<b>Did there use to be</b> a castle here?» – «Yes, there did.»</li></ul><p>Notice that <i>there used to be</i> is the same for singular and plural.</p><p>Ask your grandparents or older neighbours what your town or neighbourhood was like when they were children. Here are some questions:</p><ul><li>Was there a school? Were there many shops?</li><li>What used to be in the place where your house is now?</li><li>Were there many cars? Was there a train station?</li></ul><p>Then compare the past and the present in a table with two columns: <b>Then</b> and <b>Now</b>.</p>`,
        L6.filas("Then and now", [["there used to be a cinema", "now: a supermarket", cAZ], ["there used to be fields", "now: houses", cVE], ["there didn't use to be a park", "now: there is one", cNA], ["there used to be a market", "now: still there!", cMO]])],
    ],
    "Telling a story": [
      ["Setting the scene", `<p>Good stories often begin by <b>setting the scene</b>: describing the place, the time and the atmosphere before the action starts. <i>There was</i> and <i>there were</i> are perfect for this:</p><ul><li><b>Time and place</b>: «Once upon a time, <b>there was</b> a little village by a lake.»</li><li><b>People and animals</b>: «<b>There were</b> children playing in the square, and <b>there was</b> an old man sitting on a bench.»</li><li><b>Sounds and atmosphere</b>: «<b>There was</b> a strange silence. <b>There wasn't</b> any wind.»</li></ul><p>A great trick is <b>there was / there were + person + -ing</b>, which shows an action happening in the scene: «<b>There was</b> a woman <b>selling</b> flowers.» «<b>There were</b> birds <b>singing</b> in the trees.»</p><p>You can also use adjectives and prepositions of place to paint a clear picture: «In the middle of the forest, <b>there was</b> a tall, dark tower. Next to it, <b>there was</b> a small, frozen pond.»</p><p>After setting the scene, start the action with the past simple and a word like <i>suddenly</i>: «Suddenly, a door opened…»</p>`,
        H6.flujo("Start a story", ["place|there was…", "people|…-ing", "mood|there wasn't…", "Suddenly…|action!"], cMO)],
    ],
  },
  final: [
    ["Pompeii: a town frozen in time", `<p>Almost 2,000 years ago, in the year <b>79 AD</b>, there was a busy Roman town called <b>Pompeii</b>, near the city of Naples, in Italy. About 11,000 people lived there, near a big mountain called <b>Vesuvius</b>. Nobody knew it was a volcano.</p><p>In Pompeii, <b>there were</b> houses with beautiful paintings and mosaics, and <b>there were</b> shops, bakeries and street «fast-food» counters where people bought hot food. <b>There was</b> a big amphitheatre for shows and <b>there were</b> public baths. On the walls, <b>there were</b> lots of messages and drawings, like modern graffiti. At the entrance of one house, <b>there was</b> a mosaic of a dog with the words «<i>Cave canem</i>», which means «Beware of the dog»!</p><p>Then, one day, Vesuvius erupted. <b>There was</b> a huge cloud of ash and hot gas, and in a few hours the town was buried under metres of ash and stones. Pompeii disappeared.</p><p>More than 1,600 years later, in the 18th century, people started to dig and found the town almost exactly as it was. Today, millions of tourists walk along its streets every year, and archaeologists are still discovering new things.</p><p>Thanks to the ash, we know a lot about daily life in a Roman town: what people ate, how they decorated their homes, what games children played and even what jokes they wrote on the walls.</p>`,
      L6.filas("In Pompeii there were…", [["houses", "paintings and mosaics", cAZ], ["bakeries", "and food counters", cNA], ["an amphitheatre", "for shows", cVE], ["graffiti", "on the walls", cRO]]), ["tZ4lAWXLW9g", "The Lost City of Pompeii | Mount Vesuvius | Greek History for Kids", "Bedtime History", 342253]],
    ["A hundred years ago", `<p>Imagine you could travel back in time to a Spanish town a hundred years ago, in the 1920s. What was different?</p><ul><li><b>There weren't</b> any televisions, computers or mobile phones. The first radio stations in Spain started in 1924, and only a few families had a radio.</li><li><b>There were</b> very few cars. People walked a lot, rode horses or bicycles, and in cities <b>there were</b> trams.</li><li>In many villages, <b>there wasn't</b> running water at home. People got water from a fountain or a well.</li><li><b>There weren't</b> any supermarkets. <b>There were</b> small shops and markets, and people bought food every day because many homes didn't have a fridge.</li><li>Many children didn't go to school for long: they had to help their families in the fields or at home.</li><li>But <b>there were</b> also lots of children playing in the street with spinning tops, marbles and skipping ropes.</li></ul><p>Now think about the future: what will people say about our life in a hundred years? «A hundred years ago, there were mobile phones and petrol cars…»</p>`,
      H6.dos("1920s and today", ["Then", ["no TV", "few cars", "no supermarkets"], cMO], ["Now", ["mobile phones", "lots of cars", "supermarkets"], cAZ])],
  ],
  ejemplos: [
    ["Complete: «___ a cat on the roof. ___ grey.»", ["First, say that it existed: there was.", "Then describe it: it was."], "There was a cat on the roof. It was grey."],
    ["Write about your town: «a cinema → a supermarket».", ["Past: there used to be.", "Present: there is."], "There used to be a cinema. Now there is a supermarket."],
  ],
  errores: ["Decir «It was a dog in the garden» para expresar «había un perro».", "Usar «there was» con plurales: «There was many people»."],
  ejercicios: [
    ["b", "Choose: «(There was / It was) a big tree in the park. (There was / It was) very old.»", "There was; It was."],
    ["b", "Complete: «There ___ (be) two bakeries in my village.»", "were."],
    ["b", "In what year did Vesuvius erupt?", "In 79 AD."],
    ["b", "What does «Cave canem» mean?", "Beware of the dog."],
    ["b", "Were there mobile phones a hundred years ago?", "No, there weren't."],
    ["m", "Write two sentences with there used to be about your town.", "Open answer."],
    ["m", "Correct: «There was many people at the concert.»", "There were many people at the concert."],
    ["m", "Set the scene: write two sentences with there was / were + -ing.", "Open answer. Example: There were children playing. There was a man selling ice creams."],
    ["m", "Make a question: «There used to be a castle here.»", "Did there use to be a castle here?"],
    ["m", "Name three things there were in Pompeii.", "Houses with mosaics, bakeries, an amphitheatre (also baths, graffiti)."],
    ["a", "Write the beginning of a story (five sentences) setting the scene with there was/were.", "Open answer."],
    ["a", "Compare life a hundred years ago and now (four sentences).", "Open answer."],
    ["a", "Explain the difference between «There was a party» and «It was a party».", "There was: a party existed/happened. It was a party: describes something already mentioned."],
    ["a", "Interview an older person and write a «Then and now» table about your town.", "Open answer."],
  ],
  quiz: [
    ["«There ___ some old coins in the box.»", ["were", "was", "it was"], "Plural."],
    ["«There used to be» is used for…", ["past situations that changed", "future plans", "now"], "Used to."],
    ["«There was a man ___ the guitar.»", ["playing", "plays", "played"], "Setting the scene."],
    ["Pompeii is in…", ["Italy", "Greece", "Spain"], "Pompeii."],
    ["The first radio stations in Spain started in…", ["1924", "1824", "1994"], "100 years ago."],
  ],
  examen: [
    ["In the secret room, there was…", ["an old typewriter", "a computer", "a TV"], "Reading."],
    ["«___ cold yesterday.»", ["It was", "There was", "There were"], "It was."],
  ],
  tarjetas: [
    ["There was vs it was", "There was: something exists. It was: description, weather, time."],
    ["There used to be", "Past situation, not true now. Did there use to be…?"],
    ["Setting the scene", "There was a woman selling flowers. There were birds singing."],
    ["Pompeii", "79 AD, Vesuvius; houses, bakeries, amphitheatre, graffiti."],
  ],
  glosario: [
    ["Attic", "Desván."],
    ["Typewriter", "Máquina de escribir."],
    ["Existed", "Existía."],
    ["Atmosphere", "Ambiente."],
    ["Set the scene", "Describir el escenario."],
    ["Volcano", "Volcán."],
    ["Ash", "Ceniza."],
    ["Erupt", "Entrar en erupción."],
    ["Buried", "Enterrado."],
    ["Archaeologist", "Arqueólogo."],
    ["Running water", "Agua corriente."],
    ["Well", "Pozo."],
  ],
  situacion: {
    titulo: "Our town: then and now",
    reto: "La clase investiga cómo era su localidad hace cien años y prepara una exposición bilingüe.",
    pasos: ["Buscad fotos antiguas de la localidad y entrevistad a personas mayores.", "Escribid frases con there was / there were y there used to be para cada foto.", "Haced una foto actual del mismo lugar y escribid cómo es ahora.", "Montad la exposición «Then and now» y presentadla en inglés a otras clases."],
    producto: "Una exposición de fotos «Then and now» con textos en inglés.",
    evaluacion: ["Uses there was / there were correctly.", "Distinguishes there was and it was.", "Compares past and present with there used to be.", "Presents the information clearly."],
  },
});
