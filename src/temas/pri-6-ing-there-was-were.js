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
