// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Reported speech",
  minutos: 40,
  objetivos: ["Contar lo que otra persona dijo cambiando tiempos, pronombres y expresiones de tiempo", "Usar say y tell correctamente", "Transformar preguntas, órdenes y peticiones al estilo indirecto"],
  claves: ["direct speech", "reported speech", "backshift", "say / tell", "reported questions", "reporting verbs"],
  pregunta: {
    texto: "Tu amiga te dijo ayer: «I'm tired». Hoy se lo cuentas a otra persona. ¿Dices «She said she is tired» o «She said she was tired»?",
    respuesta: "Lo normal es <mark>«She said she was tired»</mark>. Al contar lo que alguien dijo en el pasado, el verbo suele <b>retroceder un tiempo</b> (backshift): is → was. Si sigue siendo verdad ahora, también se acepta «is».",
  },
  bloques: [
    {
      html: `<h3>Directo e indirecto</h3><p>En el <b>estilo directo</b> copiamos las palabras exactas entre comillas: She said, <i>"I love pizza."</i> En el <b>estilo indirecto</b> (reported speech) las contamos con nuestras palabras: She said (that) <i>she loved pizza</i>. Cambian <mark>los tiempos, los pronombres y las expresiones de tiempo y lugar</mark>.</p>`,
      svg: L.dialogo("Estilo directo y estilo indirecto", [
        ["direct", "\"I love pizza,\" said Ana.", "var(--pen)"],
        ["reported", "Ana said she loved pizza.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El cambio de tiempos (backshift)</h3><p>Si el verbo introductor está en pasado (<i>said, told</i>), el tiempo de la frase <mark>retrocede un paso</mark>. El past perfect se queda igual.</p>`,
      svg: L.tabla("Cambio de tiempos en reported speech", ["Direct", "Reported"], [
        ["present", "past"], ["past / pres. perf.", "past perfect"], ["will", "would"], ["can / must", "could / had to"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Pronombres, tiempo y lugar</h3><p>Hay que adaptar todo al nuevo momento: <i>I</i> → he / she, <i>my</i> → his / her, <b>now</b> → then, <b>today</b> → that day, <b>tomorrow</b> → the next day, <b>yesterday</b> → the day before, <b>here</b> → there, <b>this</b> → that.</p>`,
      svg: L.filas("Cambios de expresiones de tiempo y lugar", [
        ["today", "→ that day", "var(--leaf)"], ["tomorrow", "→ the next day", "var(--pen)"],
        ["yesterday", "→ the day before", "var(--red)"], ["here", "→ there", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Say y tell</h3><p><b>Say</b> no necesita a quién: «He <i>said</i> (that) he was hungry». <b>Tell</b> <mark>siempre lleva a quién</mark>: «He <i>told me</i> (that) he was hungry». Para <b>órdenes</b> y peticiones: tell / ask + persona + (not) to + infinitivo: «She told me <i>to close</i> the door», «He asked me <i>not to</i> shout».</p>`,
      svg: L.filas("Say frente a tell", [
        ["say", "He said he was hungry.", "var(--pen)"],
        ["tell + me", "He told me he was hungry.", "var(--red)"],
        ["tell + to", "She told me to sit down.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Preguntas en estilo indirecto</h3><p>La pregunta se convierte en una frase normal: <mark>orden sujeto + verbo</mark>, sin <i>do</i> ni signo de interrogación. Con <b>wh-</b>: "Where do you live?" → She asked me <i>where I lived</i>. Con sí / no se usa <b>if</b> o <b>whether</b>: "Are you OK?" → He asked <i>if I was OK</i>.</p>`,
      svg: L.filas("Preguntas en reported speech", [
        ["\"Where do you live?\"", "→ where I lived", "var(--pen)"],
        ["\"Are you OK?\"", "→ if I was OK", "var(--red)"],
      ], "sin do · orden normal"),
    },
  ],
  figura: {
    titulo: "Qué cambia al contar lo que alguien dijo",
    svg: L.columnas("Cambios en el estilo indirecto: tiempos, personas, tiempo y lugar, preguntas", [
      ["un paso atrás", "TIEMPOS", ["is → was", "will → would"], "var(--pen)"],
      ["de quién hablamos", "PERSONAS", ["I → she", "my → her"], "var(--red)"],
      ["cuándo y dónde", "TIEMPO/LUGAR", ["today → that day", "here → there"], "var(--leaf)"],
      ["sin do", "PREGUNTAS", ["asked where I", "lived · if…"], "var(--inf)"],
    ]),
  },
  video: { id: "HLFqFIjelFg", titulo: "Reported speech explicado de forma sencilla", canal: "Alejo Lopera Inglés", vistas: 1648233, megusta: 53239, busqueda: "reported speech estilo indirecto inglés" },
  quiz: [
    { q: "\"I am happy,\" she said. → She said she ___ happy.", o: ["is", "was", "has been"], a: 1, e: "Backshift: am → was." },
    { q: "\"I will call you,\" he said. → He said he ___ call me.", o: ["will", "would", "can"], a: 1, e: "Will → would." },
    { q: "Elige la correcta:", o: ["He said me the truth.", "He told me the truth.", "He told the truth me."], a: 1, e: "Tell lleva el destinatario directamente: told me." },
    { q: "\"Where do you live?\" → She asked me where ___.", o: ["do I live", "I lived", "did I live"], a: 1, e: "Orden afirmativo y sin do: where I lived." },
    { q: "\"Don't be late!\" → Mum told me ___ late.", o: ["not to be", "don't be", "to not being"], a: 0, e: "Órdenes negativas: tell + persona + not to + infinitivo." },
  ],
  examen: [
    { q: "\"I saw him yesterday.\" → She said she had seen him ___.", o: ["yesterday", "the day before", "tomorrow"], a: 1, e: "Yesterday → the day before." },
    { q: "\"Are you coming?\" → He asked me ___ I was coming.", o: ["that", "if", "what"], a: 1, e: "Preguntas de sí o no: if / whether." },
    { q: "\"I can swim.\" → He said he ___ swim.", o: ["can", "could", "must"], a: 1, e: "Can → could." },
  ],
  feynman: ["Qué es el backshift con dos ejemplos", "La diferencia entre say y tell", "Cómo cambian today, tomorrow y here", "Cómo se transforma una pregunta"],
  mapa: mapa("REPORTED SPEECH", "var(--eso)", [
    ["Backshift", "is → was · will → would", "var(--pen)"],
    ["Say / tell", "tell + person", "var(--red)"],
    ["Time & place", "today → that day", "var(--leaf)"],
    ["Questions", "asked if / where…", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Backshift", "Al contar algo dicho en el pasado, el verbo retrocede un tiempo: is → was."],
    ["Will en estilo indirecto", "Se convierte en would."],
    ["Say y tell", "Say sin destinatario; tell siempre con destinatario: told me."],
    ["Preguntas indirectas", "Orden sujeto + verbo, sin do; sí / no con if o whether."],
    ["Órdenes indirectas", "tell / ask + persona + (not) to + infinitivo."],
  ],
  familias: ["Jugad al teléfono roto en inglés: cada uno cuenta lo que dijo el anterior con «He said…».", "Pedidle que os cuente en reported speech lo que dijo un profesor hoy.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: estilo indirecto, verbos introductores y cambios deícticos (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Entrevistas por parejas y redacción posterior en reported speech.", "Cotilleo de famosos: titulares de prensa rosa en estilo indirecto.", "Transformar diálogos de cómic a narración."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: reported speech", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: reported speech", url: "https://dictionary.cambridge.org/grammar/british-grammar/reported-speech" },
  ],
  revisado: "2026-11-12",
};
