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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Aplicar la tabla completa de cambios de tiempos y modales", "Usar reporting verbs como suggest, promise o refuse", "Saber cuándo no hace falta el backshift"],
  bloques: [
    { tras: "El cambio de tiempos (backshift)", html: `<h3>La tabla completa del backshift</h3>${L.tb(["Directo", "Indirecto"], [["present simple: «I <b>like</b> it»", "past simple: he said he <b>liked</b> it"], ["present continuous: «I'<b>m working</b>»", "past continuous: she said she <b>was working</b>"], ["present perfect: «I'<b>ve finished</b>»", "past perfect: he said he <b>had finished</b>"], ["past simple: «I <b>saw</b> it»", "past perfect: she said she <b>had seen</b> it"], ["will: «I'<b>ll help</b>»", "would: he said he <b>would help</b>"], ["can: «I <b>can</b> swim»", "could: she said she <b>could</b> swim"], ["may: «I <b>may</b> come»", "might: he said he <b>might</b> come"], ["must: «I <b>must</b> go»", "had to: she said she <b>had to</b> go"]])}<p><i>Would, could, should, might</i> y <i>ought to</i> no cambian.</p>` },
    { tras: "El cambio de tiempos (backshift)", html: `<h3>Cuándo no hace falta cambiar el tiempo</h3><p>El backshift no es obligatorio en dos casos:</p><ul><li>Si el verbo introductor está en <b>presente</b>, <b>present perfect</b> o <b>futuro</b>: «She <b>says</b> she <b>is</b> tired», «He <b>has told</b> me he <b>loves</b> the film».</li><li>Si lo que se dijo <b>sigue siendo verdad</b> ahora: «The teacher said that the Earth <b>goes</b> round the Sun» (o <i>went</i>); «Sara told me she <b>lives</b> in Valencia» (si todavía vive allí).</li></ul><p>En los ejercicios de examen, sin embargo, se espera que apliques el backshift salvo que sea una verdad universal.</p>` },
    { tras: "Say y tell", html: `<h3>Reporting verbs: más allá de say y tell</h3><p>Para escribir mejor, en lugar de repetir <i>said</i>, usa verbos que expresan la intención. Cada uno tiene su estructura:</p>${L.tb(["Estructura", "Verbos", "Ejemplo"], [["verbo + to + infinitivo", "agree, offer, promise, refuse, threaten", "He <b>promised to call</b> me."], ["verbo + persona + to + infinitivo", "advise, ask, order, remind, warn, invite", "She <b>warned me not to touch</b> it."], ["verbo + -ing", "suggest, admit, deny, recommend", "Tom <b>suggested going</b> to the cinema."], ["verbo + preposición + -ing", "apologise for, accuse… of, insist on", "He <b>apologised for being</b> late."], ["verbo + that", "explain, complain, admit, announce", "She <b>explained that</b> the bus was late."]])}<p>Error típico: <s>*She suggested me to go</s> → She <b>suggested going</b> / She suggested <b>that I (should) go</b>.</p>` },
    { tras: "Preguntas en estilo indirecto", html: `<h3>Órdenes, peticiones y preguntas: resumen</h3><ul><li><b>Órdenes</b>: tell + persona + (not) to + infinitivo. «Sit down!» → He told me <b>to sit</b> down. «Don't run!» → She told us <b>not to run</b>.</li><li><b>Peticiones</b>: ask + persona + to. «Can you help me, please?» → She asked me <b>to help</b> her.</li><li><b>Preguntas sí/no</b>: ask + if / whether + sujeto + verbo. «Are you hungry?» → He asked me <b>if I was</b> hungry.</li><li><b>Preguntas wh-</b>: ask + wh- + sujeto + verbo. «What time is it?» → She asked <b>what time it was</b>.</li></ul><p>En todas, desaparecen el signo de interrogación, las comillas y el auxiliar <i>do / does / did</i>.</p>` },
    { tras: "Preguntas en estilo indirecto", html: `<h3>Preguntas indirectas de cortesía</h3><p>El orden de las preguntas indirectas se usa también para preguntar con más educación, sin estilo indirecto. Se empieza con una fórmula y después va sujeto + verbo:</p><ul><li>«Where is the station?» → «<b>Could you tell me where the station is?</b>»</li><li>«What time does the museum open?» → «<b>Do you know what time the museum opens?</b>»</li><li>«Is there a bank near here?» → «<b>I was wondering if there is</b> a bank near here.»</li></ul><p>Son muy útiles en viajes, tiendas y emails formales, porque una pregunta directa puede sonar brusca a un hablante nativo, sobre todo si se la haces a un desconocido. Fíjate en que, igual que en el estilo indirecto, <mark>no hay do / does</mark> y el verbo va detrás del sujeto.</p>` },
  ],
  videos: [
    ["El cambio de tiempos (backshift)", L.vid("TvE9pbYRtl0", "Reported speech en inglés: explicación fácil", "Inglés con el Güero", 129450)],
    ["Preguntas en estilo indirecto", L.vid("JZ_QmGj1s2w", "Reported speech questions: explicación fácil y ejemplos", "Inglés Para Perezosos", 635691)],
  ],
  ejemplos: [
    ["Pasa a indirecto: «I'm meeting my friends here tomorrow,» Laura said.", ["Tiempo: present continuous → past continuous: was meeting.", "Pronombres: I → she; my → her.", "Lugar y tiempo: here → there; tomorrow → the next day."], "Laura said (that) she was meeting her friends there the next day."],
    ["Pasa a indirecto: «Have you ever been to Scotland?» he asked me.", ["Es una pregunta de sí o no → asked me if / whether.", "Orden de oración afirmativa: sujeto + verbo.", "Tiempo: present perfect → past perfect: had been.", "Pronombre: you → I."], "He asked me if I had ever been to Scotland."],
    ["Usa un reporting verb: «I'm sorry I broke your glasses,» Pablo said to me.", ["La intención es pedir perdón → apologise.", "Estructura: apologise for + -ing.", "Your → my."], "Pablo apologised for breaking my glasses."],
  ],
  errores: [
    "Mantener el orden de pregunta: *She asked where did I live → She asked where I lived.",
    "Usar say con persona sin to: *He said me → He told me / He said to me.",
    "Olvidar cambiar los pronombres y las expresiones de tiempo y lugar.",
    "Poner signo de interrogación en una pregunta indirecta.",
    "Escribir *suggested me to: se dice suggested going o suggested that I go.",
    "Cambiar los tiempos cuando el verbo introductor está en presente: «She says she is tired» no necesita backshift.",
  ],
  ejercicios: [
    ["Pasa a indirecto: «I can't come to your party,» Mark said.", "Mark said (that) he couldn't come to my party."],
    ["Pasa a indirecto: «We have finished the project,» they said.", "They said (that) they had finished the project."],
    ["Pasa a indirecto: «I bought this jacket yesterday,» she said.", "She said (that) she had bought that jacket the day before."],
    ["Pasa a indirecto: «Do you like jazz?» he asked me.", "He asked me if (whether) I liked jazz."],
    ["Pasa a indirecto: «Why are you crying?» Mum asked.", "Mum asked (me) why I was crying."],
    ["Pasa a indirecto: «Please, close the door,» the teacher said to us.", "The teacher asked us to close the door."],
    ["Usa promise: «I'll pay you back on Monday,» Leo said.", "Leo promised to pay me back on Monday."],
    ["Usa suggest: «Let's watch a film,» said Ana.", "Ana suggested watching a film."],
    ["Haz más cortés: «Where is the toilet?»", "Could you tell me where the toilet is?"],
    ["¿Es obligatorio el backshift en «He says he is ill»? Explica.", "No, porque el verbo introductor está en presente (says)."],
  ],
  quiz: [
    ["«I must go,» she said. → She said she ___ go.", ["had to", "musted", "must to"], 0, "Must → had to."],
    ["«Yesterday» en indirecto:", ["the day before", "tomorrow", "that day"], 0, "También the previous day."],
    ["«Don't touch it!» → He warned me ___ it.", ["not to touch", "to not touching", "don't touch"], 0, "Warn + persona + not to."],
    ["«Could you tell me where ___?»", ["the bank is", "is the bank", "does the bank is"], 0, "Sujeto + verbo."],
    ["He ___ breaking the vase. (lo admitió)", ["admitted", "promised", "told"], 0, "Admit + -ing."],
  ],
  tarjetas: [
    ["Must en indirecto", "Pasa a had to: She said she had to go."],
    ["Reporting verbs", "promise to, refuse to, suggest + -ing, apologise for + -ing, warn sb not to."],
    ["Pregunta indirecta cortés", "Could you tell me where the station is? (sin do, sujeto + verbo)."],
  ],
});
