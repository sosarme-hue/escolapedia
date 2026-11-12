// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Relative clauses",
  minutos: 35,
  objetivos: ["Usar who, which, that, whose, where y when", "Distinguir defining y non-defining relative clauses", "Saber cuándo se puede omitir el relativo"],
  claves: ["relative pronoun", "who", "which", "that", "whose", "where", "defining", "non-defining"],
  pregunta: {
    texto: "¿Cómo dirías en inglés «la chica que vive al lado» y «el libro que me prestaste»? ¿Usas la misma palabra para «que» en las dos?",
    respuesta: "Puedes usar <b>that</b> en las dos, pero en inglés lo habitual es distinguir: <mark>who</mark> para personas («the girl <i>who</i> lives next door») y <mark>which</mark> para cosas («the book <i>which</i> you lent me»). Y en la segunda incluso puedes quitarlo: «the book you lent me».",
  },
  bloques: [
    {
      html: `<h3>Los pronombres relativos</h3><p>Unen dos ideas y dan información sobre un sustantivo. <b>Who</b> = personas. <b>Which</b> = cosas y animales. <b>That</b> = personas o cosas (en defining). <b>Whose</b> = posesión (cuyo). <b>Where</b> = lugares. <b>When</b> = tiempo.</p>`,
      svg: L.tabla("Pronombres relativos y para qué sirven", ["Relative", "For"], [
        ["who", "people"], ["which", "things"], ["whose", "possession"], ["where / when", "place / time"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Defining relative clauses</h3><p>Dan información <mark>necesaria</mark> para saber de quién o de qué hablamos. Van <b>sin comas</b> y se puede usar <i>that</i>: «The boy <b>who / that</b> won the race is my cousin». Sin la relativa, no sabríamos qué chico.</p>`,
      svg: L.frase("Defining: The boy who won the race is my cousin", [
        ["The boy", "noun", "var(--ink)"], ["who won the race", "defining", "var(--pen)"], ["is my cousin.", "", "var(--line)"],
      ], "sin comas · información necesaria"),
    },
    {
      html: `<h3>Non-defining relative clauses</h3><p>Añaden información <mark>extra</mark> que se podría quitar. Van <b>entre comas</b> y <b>nunca usan that</b>: «My sister, <b>who</b> lives in Bristol, is a nurse». «Madrid, <b>which</b> is the capital, has 3 million people».</p>`,
      svg: L.frase("Non-defining: My sister, who lives in Bristol, is a nurse", [
        ["My sister,", "", "var(--ink)"], ["who lives in Bristol,", "extra info", "var(--leaf)"], ["is a nurse.", "", "var(--line)"],
      ], "entre comas · nunca that"),
    },
    {
      html: `<h3>Whose, where y when</h3><p><b>Whose</b>: «That's the girl <i>whose</i> dog bit me» (el perro de la chica). <b>Where</b>: «This is the town <i>where</i> I was born». <b>When</b>: «I remember the day <i>when</i> we met».</p>`,
      svg: L.filas("Whose, where y when con ejemplos", [
        ["whose", "the girl whose dog…", "var(--red)"], ["where", "the town where I was born", "var(--leaf)"],
        ["when", "the day when we met", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Omitir el relativo</h3><p>En las <b>defining</b> se puede quitar <i>who / which / that</i> cuando <mark>no es el sujeto</mark> de la relativa, es decir, cuando después viene otro sujeto: «The film (that) <b>we</b> saw was great» ✓. Pero no en «The man <i>who</i> called you» (who es el sujeto de called).</p>`,
      svg: L.filas("Cuándo se puede omitir el relativo", [
        ["✓ omitir", "the film (that) we saw", "var(--leaf)"],
        ["✗ no omitir", "the man who called you", "var(--red)"],
      ], "¿hay otro sujeto detrás?"),
    },
  ],
  figura: {
    titulo: "Defining o non-defining",
    svg: L.columnas("Comparación entre defining y non-defining relative clauses", [
      ["información necesaria", "DEFINING", ["sin comas", "who · which · that"], "var(--pen)"],
      ["información extra", "NON-DEFINING", ["entre comas", "who · which (no that)"], "var(--leaf)"],
      ["solo en defining", "OMITIR", ["si hay otro sujeto:", "the book I read"], "var(--red)"],
    ]),
  },
  video: { id: "ezTizklj8Cg", titulo: "Relative clauses and pronouns: defining and non-defining", canal: "Inglés Para Perezosos", vistas: 1206877, megusta: 49470, busqueda: "relative clauses inglés who which that" },
  quiz: [
    { q: "«The woman ___ lives upstairs is a pilot.»", o: ["which", "who", "where"], a: 1, e: "Persona: who (o that)." },
    { q: "«This is the café ___ we first met.»", o: ["where", "which", "whose"], a: 0, e: "Lugar: where." },
    { q: "«He's the boy ___ mother is a famous singer.»", o: ["who", "whose", "that"], a: 1, e: "Posesión: whose." },
    { q: "¿Qué frase es incorrecta?", o: ["Paris, which is in France, is beautiful.", "Paris, that is in France, is beautiful.", "The city that I love is Paris."], a: 1, e: "En non-defining (entre comas) no se usa that." },
    { q: "¿En qué frase se puede omitir el relativo?", o: ["The song that I like is old.", "The girl who sings is my friend.", "The dog which barks is mine."], a: 0, e: "Después viene otro sujeto (I): se puede quitar «that»." },
  ],
  examen: [
    { q: "Las non-defining relative clauses van…", o: ["sin comas", "entre comas", "siempre al final"], a: 1, e: "Añaden información extra entre comas." },
    { q: "«I'll never forget the day ___ I got my first bike.»", o: ["where", "when", "which"], a: 1, e: "Tiempo: when." },
    { q: "«The phone ___ I bought last week is broken.»", o: ["who", "which", "whose"], a: 1, e: "Cosa: which (o that, o nada)." },
  ],
  feynman: ["Para qué sirve cada pronombre relativo", "La diferencia entre defining y non-defining", "Por qué no se usa that entre comas", "Cuándo se puede omitir el relativo"],
  mapa: mapa("RELATIVE CLAUSES", "var(--eso)", [
    ["Pronouns", "who · which · that · whose", "var(--pen)"],
    ["Defining", "no commas · essential", "var(--red)"],
    ["Non-defining", "commas · extra · no that", "var(--leaf)"],
    ["Omission", "the book (that) I read", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Who / which", "Who para personas; which para cosas y animales."],
    ["Whose", "Relativo de posesión: «the man whose car…»."],
    ["Defining relative clause", "Información necesaria, sin comas; admite that."],
    ["Non-defining relative clause", "Información extra entre comas; nunca that."],
    ["Omitir el relativo", "Solo en defining y cuando no es el sujeto de la relativa."],
  ],
  familias: ["Jugad a adivinar objetos o personas con definiciones en inglés: «It's a thing which…».", "Pedidle que describa a tres familiares con una relativa cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: oraciones de relativo especificativas y explicativas (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Juego tipo «Taboo» con definiciones construidas con relativas.", "Unir pares de oraciones con el relativo adecuado y decidir si lleva comas.", "Escribir pies de foto de un álbum de clase con where y when."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: relative clauses", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: relative clauses", url: "https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Colocar bien las preposiciones en las relativas", "Usar which para referirse a toda una oración", "Unir frases con relativos en un writing"],
  bloques: [
    { tras: "Los pronombres relativos", html: `<h3>Who, whom y which con preposición</h3><p><b>Whom</b> es la forma de objeto de <i>who</i>. Hoy solo se usa en inglés formal, sobre todo detrás de una preposición: «The person <b>to whom</b> I spoke…». En el habla normal se dice «The person (who) I spoke <b>to</b>».</p><p>La preposición puede ir en dos sitios:</p><ul><li><b>Al final</b> (informal, lo más habitual): «This is the house I grew up <b>in</b>», «the girl I was talking <b>to</b>».</li><li><b>Delante del relativo</b> (formal): «the house <b>in which</b> I grew up», «the girl <b>to whom</b> I was talking».</li></ul><p>Detrás de una preposición nunca va <i>that</i> ni <i>who</i>: <s>*in that</s>, <s>*to who</s>.</p>` },
    { tras: "Non-defining relative clauses", html: `<h3>Which para toda una idea</h3><p>En las non-defining, <b>which</b> puede referirse no a una palabra, sino a <b>toda la oración anterior</b>: «He passed all his exams, <b>which</b> surprised everybody» (lo que sorprendió a todos). En español decimos «lo que» o «lo cual».</p><p>Aquí no se puede usar <i>what</i>: <s>*He passed, what surprised everybody</s>. <b>What</b> significa «lo que» pero <mark>sin antecedente</mark>: «<b>What</b> I need is a holiday», «I don't understand <b>what</b> you mean». Si hay algo delante a lo que se refiere, usa which o that.</p>` },
    { tras: "Whose, where y when", html: `<h3>Where o which, when o that</h3><p><b>Where</b> equivale a <i>in / at which</i>, y <b>when</b> a <i>on / in which</i>. Pero solo se usan si en la relativa falta un complemento de lugar o de tiempo:</p><ul><li>«This is the hotel <b>where</b> we stayed.» (we stayed <i>there</i>)</li><li>«This is the hotel <b>which / that</b> we chose.» (we chose <i>it</i>: falta un objeto, no un lugar)</li><li>«I'll never forget the day <b>when</b> we met.»</li><li>«It's a day <b>that</b> I'll never forget.» (forget <i>it</i>)</li></ul><p>Truco: si después del relativo la frase ya está completa sin él, usa where / when; si le falta un sujeto u objeto, usa which / that / who.</p>` },
    { tras: "Omitir el relativo", html: `<h3>Relativas reducidas</h3><p>En las defining se puede acortar aún más la relativa usando un <b>participio</b>:</p><ul><li>Con <b>-ing</b> (sentido activo): «The boy <b>who is sitting</b> next to me» → «The boy <b>sitting</b> next to me».</li><li>Con <b>participio pasado</b> (sentido pasivo): «The cars <b>which are made</b> in Spain» → «The cars <b>made</b> in Spain».</li></ul><p>Son muy comunes en los textos escritos y en las noticias: «Passengers <b>travelling</b> to Paris…», «a book <b>written</b> in 1950». Reconocerlas te ayudará a entender textos más difíciles.</p>` },
    { tras: "Omitir el relativo", html: `<h3>Relativas en tus writings</h3><p>Las relativas sirven para unir frases cortas y dar más información sin repetir: es lo que hace que un texto parezca de B1 y no de A2.</p><ul><li>Frases sueltas: «I have a friend. She lives in Dublin. She is a vet.»</li><li>Con relativas: «I have a friend <b>who</b> lives in Dublin and <b>who</b> is a vet.» O mejor: «My friend Sara, <b>who</b> lives in Dublin, is a vet.»</li></ul><p>En descripciones de personas, lugares y objetos son imprescindibles: «Barcelona is a city <b>where</b> you can enjoy the beach and the mountains», «It's a phone <b>whose</b> battery lasts two days».</p>` },
    { tras: "Los pronombres relativos", html: `<h3>¿Necesita comas? La prueba de quitarla</h3><p>Para saber si una relativa es defining o non-defining, quítala y mira si la frase sigue identificando a la misma persona o cosa. «The students <b>who failed the test</b> must repeat it»: si quitas la relativa, parece que todos los estudiantes deben repetir; la relativa es necesaria → defining, sin comas. «My English teacher, <b>who comes from Leeds</b>, is very funny»: sin la relativa seguimos sabiendo de quién hablamos → non-defining, con comas.</p><p>Con nombres propios (<i>Madrid, Shakespeare</i>), con posesivos que identifican a una sola persona (<i>my mother</i>) y con objetos únicos (<i>the Sun</i>), la relativa casi siempre es non-defining. Al hablar, las comas se notan como pequeñas pausas.</p>` },
  ],
  videos: [
    ["Defining relative clauses", L.vid("ibmMybaXq4U", "Cláusulas relativas en inglés: cómo usar who, which, whom, whose", "Francisco Ochoa Inglés Fácil", 2024314)],
    ["Non-defining relative clauses", L.vid("eFmfoeTkhH0", "Relative clauses (defining and non-defining)", "EasyTeaching", 1013715)],
  ],
  ejemplos: [
    ["Une con un relativo: «That's the restaurant. We had dinner there on my birthday.»", ["El antecedente es un lugar (the restaurant).", "En la segunda frase hay «there»: falta un complemento de lugar.", "Usamos where (y quitamos there)."], "That's the restaurant where we had dinner on my birthday."],
    ["Une con un relativo non-defining: «My grandfather is 90. He still drives.»", ["My grandfather es un antecedente único: la información es extra.", "Van comas y no se puede usar that.", "Es una persona → who."], "My grandfather, who is 90, still drives."],
    ["Une y di si se puede omitir el relativo: «The book was boring. I borrowed it from the library.»", ["Antecedente: the book (cosa) → which / that.", "En la relativa ya hay sujeto (I); el relativo es objeto.", "Es una defining sin comas, con el relativo como objeto: se puede omitir."], "The book (which / that) I borrowed from the library was boring."],
  ],
  errores: [
    "Usar that en las non-defining: *My mother, that is a nurse… → My mother, who is a nurse…",
    "Repetir el pronombre: *the girl who I met her → the girl who I met.",
    "Usar what con antecedente: *the thing what I need → the thing that I need.",
    "Confundir whose (posesión) con who's (who is).",
    "Usar where cuando falta un objeto: *the city where I visited → the city (that) I visited.",
  ],
  ejercicios: [
    ["Completa: «The man ___ car was stolen called the police.»", "whose."],
    ["Completa: «That's the shop ___ I bought my trainers.»", "where."],
    ["Completa: «The film ___ we saw last night was brilliant.»", "which / that, o nada (se puede omitir)."],
    ["Une: «Paris is the capital of France. It has over two million inhabitants.» (non-defining)", "Paris, which is the capital of France, has over two million inhabitants."],
    ["Corrige: «My brother, that lives in Madrid, is a teacher.»", "My brother, who lives in Madrid, is a teacher."],
    ["Escribe de forma formal: «the person I gave the keys to».", "the person to whom I gave the keys."],
    ["Completa: «She didn't call me, ___ made me angry.»", "which: se refiere a toda la oración anterior."],
    ["Reduce la relativa: «The woman who is wearing a red hat is my aunt.»", "The woman wearing a red hat is my aunt."],
    ["Completa con which o where: «This is the town ___ my parents were born» / «This is the town ___ I like most».", "where / which (o that)."],
    ["Describe un objeto con una relativa con whose.", "Por ejemplo: «It's a backpack whose pockets are waterproof.»"],
  ],
  quiz: [
    ["«The house ___ I grew up in…»", ["that", "where in", "what"], 0, "Preposición al final con that / which o sin relativo."],
    ["«She smiled, ___ made me happy.»", ["which", "what", "that"], 0, "Which se refiere a toda la oración."],
    ["«___ I want is some peace.»", ["What", "Which", "That"], 0, "What = lo que, sin antecedente."],
    ["«The cars ___ in this factory are electric.»", ["made", "making", "who made"], 0, "Relativa reducida pasiva."],
    ["«The person to ___ I spoke…»", ["whom", "who", "that"], 0, "Tras preposición: whom."],
  ],
  tarjetas: [
    ["Which = lo que", "Tras coma, se refiere a toda la oración: He won, which surprised us."],
    ["What", "«Lo que» sin antecedente: What I need is sleep."],
    ["Relativa reducida", "The boy sitting there / The cars made in Spain."],
  ],
});
