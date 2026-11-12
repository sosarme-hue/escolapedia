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
