// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Relative pronouns",
  minutos: 35,
  objetivos: ["Elegir entre who, which, that, where, whose y when", "Unir dos frases con una oración de relativo", "Definir personas, cosas y lugares en inglés"],
  claves: ["who", "which", "that", "where", "whose", "when", "defining relative clauses"],
  pregunta: {
    texto: "¿Cómo explicarías en inglés qué es un «vet» sin usar la palabra «animal doctor»?",
    respuesta: "Con una oración de relativo: «A vet is a person <mark>who</mark> looks after sick animals». Los <b>pronombres relativos</b> sirven para <b>definir</b> y para <b>unir</b> dos ideas en una sola frase sin repetir palabras.",
  },
  bloques: [
    {
      html: `<h3>Qué es un pronombre relativo</h3><p>Un pronombre relativo <b>une dos frases</b> y sustituye a un nombre que ya ha aparecido (el <b>antecedente</b>). En vez de decir «I have a friend. My friend lives in London», decimos «I have a friend <mark>who</mark> lives in London». En español casi siempre usamos <i>que</i>; en inglés hay que elegir según el antecedente sea una <b>persona</b>, una <b>cosa</b>, un <b>lugar</b>, un <b>momento</b> o una <b>posesión</b>.</p>`,
      svg: L.frase("Dos frases se unen con un pronombre relativo", [
        ["I have a friend", "antecedente", "var(--pen)"], ["who", "relativo", "var(--red)"], ["lives in London.", "oración de relativo", "var(--leaf)"],
      ], "who sustituye a «my friend»"),
    },
    {
      html: `<h3>Who, which y that</h3><p><mark>Who</mark> se usa para <b>personas</b>: «The girl <i>who</i> won the race is my cousin». <mark>Which</mark> se usa para <b>cosas y animales</b>: «The book <i>which</i> I'm reading is great». <mark>That</mark> vale para <b>personas y cosas</b> en las oraciones que definen, y es muy frecuente en el inglés hablado: «The man <i>that</i> called you», «The film <i>that</i> we saw». Si dudas, <i>that</i> casi siempre funciona.</p>`,
      svg: L.tabla("Who, which y that", ["Relativo", "Antecedente"], [
        ["who", "personas"], ["which", "cosas y animales"], ["that", "personas y cosas"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Where, when y whose</h3><p><mark>Where</mark> se refiere a un <b>lugar</b>: «This is the school <i>where</i> my mum studied». <mark>When</mark> se refiere a un <b>momento</b>: «I remember the day <i>when</i> we met». <mark>Whose</mark> indica <b>posesión</b> y equivale a «cuyo / cuya»: «That's the boy <i>whose</i> dog bit me» (el perro del chico). Detrás de <i>whose</i> siempre va un <b>nombre</b>.</p>`,
      svg: L.filas("Más pronombres y adverbios relativos", [
        ["where", "lugar: the town where…", "var(--leaf)"], ["when", "tiempo: the day when…", "var(--sun)"], ["whose", "posesión: the boy whose…", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Definir con relativos</h3><p>Las oraciones de relativo son la herramienta perfecta para <b>definir</b>, como en un diccionario: «A <b>librarian</b> is a person <i>who</i> works in a library», «A <b>fridge</b> is a machine <i>which</i> keeps food cold», «A <b>gym</b> is a place <i>where</i> you do exercise». La estructura es siempre: <mark>palabra + is + a person / a thing / a place + relativo + explicación</mark>. Es un juego de clase muy útil: «Guess the word».</p>`,
      svg: L.filas("Definiciones con relativos", [
        ["person", "who works in a library", "var(--pen)"], ["thing", "which keeps food cold", "var(--inf)"], ["place", "where you do exercise", "var(--leaf)"],
      ], "A … is a …"),
    },
    {
      html: `<h3>Cuándo se puede quitar el relativo</h3><p>Si el relativo es el <b>objeto</b> de la oración de relativo, es decir, si después viene <b>otro sujeto</b>, se puede omitir: «The book (<i>that</i>) <b>I</b> bought is great», «The people (<i>who</i>) <b>we</b> met were friendly». Pero si el relativo es el <b>sujeto</b>, es obligatorio: «The man <i>who</i> <b>lives</b> next door» (no *The man lives next door… como relativo). Truco: <mark>relativo + verbo</mark> → no se quita; <mark>relativo + sujeto</mark> → se puede quitar.</p>`,
      svg: L.filas("¿Se puede omitir el relativo?", [
        ["Sí", "the book (that) I bought", "var(--leaf)"], ["No", "the man who lives here", "var(--red)"],
      ], "relativo + sujeto / relativo + verbo"),
    },
  ],
  figura: {
    titulo: "¿Qué relativo uso?",
    svg: L.columnas("Elegir el relativo según el antecedente", [
      ["Persona", "who / that", ["the girl who…"], "var(--pen)"],
      ["Cosa", "which / that", ["the bag which…"], "var(--inf)"],
      ["Lugar", "where", ["the city where…"], "var(--leaf)"],
      ["Posesión", "whose", ["the boy whose…"], "var(--red)"],
    ]),
  },
  video: { id: "ibmMybaXq4U", titulo: "Cláusulas relativas en inglés: cómo usar who, which, whom, whose y that", canal: "Francisco Ochoa Inglés Fácil", vistas: 2024359, megusta: 0, busqueda: "relative pronouns who which that inglés" },
  quiz: [
    { q: "«The woman ___ teaches us English is from Ireland.»", o: ["which", "who", "where"], a: 1, e: "Persona: who." },
    { q: "«This is the phone ___ I bought yesterday.»", o: ["who", "which", "whose"], a: 1, e: "Cosa: which (o that)." },
    { q: "«That's the café ___ we have breakfast.»", o: ["where", "which", "who"], a: 0, e: "Lugar donde ocurre algo: where." },
    { q: "«He's the singer ___ songs are everywhere.»", o: ["who", "whose", "which"], a: 1, e: "Posesión: whose songs." },
    { q: "¿Qué relativo vale para personas y cosas?", o: ["that", "where", "whose"], a: 0, e: "That, en oraciones que definen." },
  ],
  examen: [
    { q: "Une: «I've got a cat. It sleeps all day.»", o: ["I've got a cat which sleeps all day.", "I've got a cat who it sleeps all day.", "I've got a cat where sleeps all day."], a: 0, e: "Cosa / animal: which, y sin repetir it." },
    { q: "¿En qué frase se puede omitir el relativo?", o: ["The film that we saw was funny.", "The film that won the Oscar was funny.", "The boy who lives here is nice."], a: 0, e: "Detrás viene otro sujeto (we)." },
    { q: "«A dentist is a person ___ looks after your teeth.»", o: ["which", "who", "where"], a: 1, e: "Definición de persona: who." },
  ],
  feynman: ["Para qué sirven los pronombres relativos", "Cuándo se usa who, which y that", "Qué significan where, when y whose", "Cuándo se puede quitar el relativo"],
  mapa: mapa("RELATIVE PRONOUNS", "var(--eso)", [
    ["who / that", "people", "var(--pen)"],
    ["which / that", "things, animals", "var(--inf)"],
    ["where", "places", "var(--leaf)"],
    ["whose", "possession", "var(--red)"],
  ], 240),
  tarjetas: [
    ["who", "Para personas: the boy who…"],
    ["which", "Para cosas y animales: the book which…"],
    ["that", "Para personas y cosas en oraciones que definen."],
    ["where", "Para lugares: the town where I was born."],
    ["whose", "Posesión, «cuyo»: the girl whose dad…"],
  ],
  familias: ["Jugad a «Guess the word»: uno define en inglés con who / which / where y el resto adivina.", "Describid fotos familiares: «This is the beach where…», «This is the uncle who…».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: oraciones de relativo especificativas con who, which, that, where, when y whose; definir y describir personas, objetos y lugares (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Juego de definiciones por equipos con tarjetas de vocabulario.", "Crear un «glosario» ilustrado de la clase con definiciones en relativo.", "Describir personajes famosos sin decir el nombre: «She's the singer whose…»."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: relative clauses", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-grammar/relative-clauses" },
    { t: "Cambridge Dictionary: relative pronouns", url: "https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Unir frases con relativos sin repetir el sujeto ni el objeto", "Distinguir las oraciones que definen de las que añaden información"],
  bloques: [
    { tras: "Who, which y that", html: `<h3>No repitas lo que el relativo ya sustituye</h3><p>El relativo <b>ocupa el lugar</b> del nombre que sustituye, así que no hay que repetirlo con un pronombre. Es un error muy típico de hispanohablantes: *«The book which I bought <b>it</b> yesterday» → «The book which I bought yesterday». *«The girl who <b>she</b> sits next to me» → «The girl who sits next to me». Para unir dos frases sigue estos pasos: 1) busca la palabra que se repite; 2) cámbiala por el relativo adecuado; 3) coloca la oración de relativo <mark>justo detrás</mark> del antecedente.</p>`, video: L.vid("z_OcXv51H0c", "Relative clauses: who, which, that", "Amigos Ingleses", 612034) },
    { tras: "Where, when y whose", html: `<h3>Whose paso a paso</h3><p><i>Whose</i> cuesta más porque cambia de lugar al posesivo. Mira: «That's the boy. <b>His</b> dog bit me» → «That's the boy <mark>whose</mark> dog bit me». «I know a woman. <b>Her</b> son plays for Real Madrid» → «I know a woman <mark>whose</mark> son plays for Real Madrid». El truco: <i>whose</i> sustituye a <b>his, her, its, their</b> o al genitivo <b>'s</b>, y siempre va seguido del nombre poseído. No lo confundas con <b>who's</b> (= <i>who is</i>), que suena igual: «Who's that girl?».</p>` },
    { tras: "Definir con relativos", html: `<h3>Oraciones que definen y oraciones que explican</h3><p>Hay dos tipos. Las <b>especificativas</b> (<i>defining</i>) son necesarias para saber de quién hablamos: «The students <i>who passed</i> got a prize» (solo los que aprobaron). Van <b>sin comas</b> y admiten <i>that</i>. Las <b>explicativas</b> (<i>non-defining</i>) añaden un dato extra sobre algo que ya está identificado: «My sister, <i>who lives in Paris</i>, is a nurse». Van <mark>entre comas</mark>, <b>no admiten <i>that</i></b> y el relativo <b>no se puede omitir</b>. En 3º basta con reconocerlas y poner bien las comas.</p>` },
    { tras: "Cuándo se puede quitar el relativo", html: `<h3>Preposiciones al final</h3><p>En inglés, cuando el verbo lleva preposición (<i>talk about, live in, listen to, look for</i>), la preposición se queda normalmente <mark>al final</mark> de la oración de relativo: «This is the song (that) I was talking <b>about</b>», «The house (which) we live <b>in</b> is old», «Is that the key (that) you were looking <b>for</b>?». En un registro muy formal se pone delante con <i>which</i> o <i>whom</i> («the house <b>in which</b> we live»), pero en la conversación diaria lo natural es dejarla al final y, a menudo, quitar el relativo.</p>` },
    { tras: "Qué es un pronombre relativo", html: `<h3>Relativos en textos reales</h3><p>Fíjate en cuántas veces aparecen en una descripción: «Seville is a city <b>which</b> is famous for its festivals. It has a cathedral <b>where</b> you can see Columbus's tomb, and a tower <b>which</b> is called La Giralda. The people <b>who</b> live there are very friendly, and April is the month <b>when</b> the Feria takes place». Gracias a los relativos, el texto suena <mark>más fluido</mark> que con frases cortas sueltas. En tus redacciones, intenta incluir al menos dos o tres oraciones de relativo bien construidas: los profesores y los exámenes oficiales lo valoran como señal de un nivel más alto.</p>` },
  ],
  ejemplos: [
    ["Une: «This is the bike. I got it for my birthday.»", ["Palabra repetida: the bike / it (una cosa).", "Relativo: which o that.", "Quita it, porque el relativo ya lo sustituye.", "Detrás viene otro sujeto (I): se puede omitir el relativo."], "This is the bike (which / that) I got for my birthday."],
    ["Une: «I've got a friend. Her father is a pilot.»", ["Palabra repetida: a friend / her (posesivo).", "Posesión → whose.", "Whose + nombre poseído: whose father."], "I've got a friend whose father is a pilot."],
    ["Define «a library» con un relativo.", ["Es un lugar → a place + where.", "Explicación: puedes leer o tomar libros prestados."], "A library is a place where you can read or borrow books."],
  ],
  errores: [
    "Usar which para personas: *the teacher which… → the teacher who…",
    "Repetir el pronombre: *the film which I saw it → the film which I saw.",
    "Confundir whose y who's: whose = cuyo; who's = who is.",
    "Usar what como relativo: *the book what I read → the book that I read.",
    "Quitar el relativo cuando es sujeto: *The man lives next door is a doctor → The man who lives next door is a doctor.",
  ],
  ejercicios: [
    ["Completa con who o which: «The dog ___ barks all night is my neighbour's.»", "which (animal)."],
    ["Completa: «That's the hospital ___ I was born.»", "where."],
    ["Completa: «I met a boy ___ sister is in my class.»", "whose."],
    ["Completa: «2010 was the year ___ Spain won the World Cup.»", "when."],
    ["Une: «The woman is a doctor. She lives upstairs.»", "The woman who lives upstairs is a doctor."],
    ["Une: «I lost the watch. My grandad gave it to me.»", "I lost the watch (which / that) my grandad gave me."],
    ["¿En qué frase se puede omitir el relativo? a) The girl who sings b) The girl who I saw", "b) The girl (who) I saw: detrás viene otro sujeto (I)."],
    ["Corrige: «The film what we watched was boring.»", "The film that / which we watched was boring."],
    ["Define con un relativo: a pilot, a museum, a key.", "A pilot is a person who flies planes. A museum is a place where you can see art or old objects. A key is a thing which opens doors."],
    ["Escribe dos frases sobre tu pueblo o ciudad con where y who.", "Por ejemplo: «My town has a park where we play football.» / «My neighbour is a man who plays the guitar.»"],
  ],
  quiz: [
    ["«Is this the bag ___ you were looking for?»", ["that", "who", "where"], 0, "Cosa: that / which; for queda al final."],
    ["«My cousin, ___ lives in Rome, is a chef.»", ["who", "that", "which"], 0, "Explicativa con comas: no se usa that."],
    ["«___ that girl?» — «She's my sister.»", ["Who's", "Whose", "Which"], 0, "Who's = who is."],
    ["«The man ___ car was stolen called the police.»", ["whose", "who", "which"], 0, "Posesión: whose car."],
    ["¿Qué frase es correcta?", ["The book that I read was long.", "The book what I read was long.", "The book that I read it was long."], 0, "Sin what y sin repetir it."],
  ],
  tarjetas: [
    ["whose / who's", "whose = cuyo (whose dog); who's = who is."],
    ["Comas", "Oración explicativa: entre comas y sin that."],
    ["Preposición al final", "the song I was talking about."],
  ],
});
