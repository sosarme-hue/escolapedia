// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Gerunds and infinitives",
  minutos: 35,
  objetivos: ["Usar el gerundio (-ing) como sujeto y después de preposiciones", "Saber qué verbos van seguidos de gerundio y cuáles de infinitivo", "Distinguir los verbos que cambian de significado: stop, remember, try"],
  claves: ["gerund", "to-infinitive", "bare infinitive", "enjoy + -ing", "want + to", "stop / remember / try"],
  pregunta: {
    texto: "«I stopped smoking» y «I stopped to smoke». Una frase es una buena noticia para tus pulmones y la otra no. ¿Cuál es cuál?",
    respuesta: "«I stopped <b>smoking</b>» = <mark>dejé de fumar</mark> (¡buena noticia!). «I stopped <b>to smoke</b>» = <mark>me paré para fumar</mark>. Algunos verbos cambian de significado según vayan con gerundio o con infinitivo.",
  },
  bloques: [
    {
      html: `<h3>El gerundio (-ing)</h3><p>Funciona como un sustantivo. Se usa como <b>sujeto</b> («<i>Swimming</i> is good for you»), <mark>después de preposiciones</mark> («I'm good <i>at drawing</i>», «Thanks <i>for helping</i>») y después de ciertos verbos de gusto o actividad: <b>enjoy, like, love, hate, mind, finish, avoid, keep, suggest, can't stand</b>.</p>`,
      svg: L.filas("Usos del gerundio", [
        ["Sujeto", "Reading is fun.", "var(--pen)"], ["Tras preposición", "good at singing", "var(--leaf)"],
        ["Tras enjoy, avoid…", "I enjoy cooking.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El infinitivo con to</h3><p>Se usa para expresar <mark>finalidad</mark> («I went out <i>to buy</i> bread»), después de <b>adjetivos</b> («It's easy <i>to learn</i>») y después de verbos de deseo, decisión o plan: <b>want, decide, hope, plan, promise, agree, refuse, learn, need, would like</b>.</p>`,
      svg: L.filas("Usos del infinitivo con to", [
        ["Finalidad", "I came to help.", "var(--pen)"], ["Tras adjetivo", "hard to say", "var(--leaf)"],
        ["Tras want, decide…", "I decided to stay.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Infinitivo sin to</h3><p>Va después de los <b>modales</b> («I can <i>swim</i>»), de <b>let</b> y <b>make</b> + objeto («My mum made me <i>tidy</i> my room», «Let me <i>go</i>») y de <i>had better</i> y <i>would rather</i>.</p>`,
      svg: L.frase("Infinitivo sin to: My mum made me tidy my room", [
        ["My mum", "", "var(--line)"], ["made me", "make + obj.", "var(--pen)"], ["tidy", "sin to", "var(--red)"], ["my room.", "", "var(--line)"],
      ], "can · let · make + infinitivo sin to"),
    },
    {
      html: `<h3>Listas para memorizar</h3><p>No hay una regla perfecta: lo mejor es aprender los verbos más frecuentes en dos columnas. Algunos admiten las dos formas sin cambio de sentido: <b>like, love, hate, start, begin, continue</b> («It started <i>raining / to rain</i>»).</p>`,
      svg: L.tabla("Verbos seguidos de gerundio o de infinitivo", ["+ -ing", "+ to"], [
        ["enjoy", "want"], ["avoid", "decide"], ["finish", "hope"], ["mind", "promise"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Cambian de significado</h3><p><b>Stop</b> + -ing = dejar de; + to = pararse para. <b>Remember</b> + -ing = recordar algo pasado («I remember <i>meeting</i> her»); + to = acordarse de hacer algo («Remember <i>to lock</i> the door»). <b>Try</b> + -ing = probar a ver qué pasa; + to = intentar.</p>`,
      svg: L.filas("Verbos que cambian de significado", [
        ["stop + -ing", "dejar de", "var(--red)"], ["stop + to", "pararse para", "var(--pen)"],
        ["remember + -ing", "recordar algo pasado", "var(--leaf)"], ["remember + to", "acordarse de hacer", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿-ing o to?",
    svg: L.columnas("Guía rápida: gerundio, infinitivo con to y sin to", [
      ["gustos · preposiciones", "-ING", ["enjoy dancing", "good at drawing"], "var(--leaf)"],
      ["deseos · planes · para", "TO + INF.", ["want to go", "came to help"], "var(--pen)"],
      ["modales · let · make", "INF. SIN TO", ["can swim", "let me go"], "var(--red)"],
    ]),
  },
  video: { id: "Yo3-SS79Atk", titulo: "Cómo usar verbos en gerundios e infinitivos en inglés", canal: "Alejo Lopera Inglés", vistas: 935776, megusta: 0, busqueda: "gerundio e infinitivo en inglés" },
  quiz: [
    { q: "«I enjoy ___ to music.»", o: ["listen", "listening", "to listen"], a: 1, e: "Enjoy va seguido de gerundio." },
    { q: "«She decided ___ a new phone.»", o: ["buying", "to buy", "buy"], a: 1, e: "Decide va seguido de to + infinitivo." },
    { q: "«I'm interested in ___ photography.»", o: ["learn", "to learn", "learning"], a: 2, e: "Después de preposición (in), gerundio." },
    { q: "«My parents won't let me ___ out late.»", o: ["go", "to go", "going"], a: 0, e: "Let + objeto + infinitivo sin to." },
    { q: "«Please remember ___ the lights before you leave.»", o: ["turning off", "to turn off", "turn off"], a: 1, e: "Acordarse de hacer algo: remember + to." },
  ],
  examen: [
    { q: "«___ too much sugar is bad for your teeth.»", o: ["Eat", "Eating", "To eating"], a: 1, e: "El gerundio funciona como sujeto." },
    { q: "«He stopped ___ when he saw the police.» (dejó de correr)", o: ["running", "to run", "run"], a: 0, e: "Stop + -ing = dejar de hacer algo." },
    { q: "«I went to the shop ___ some milk.»", o: ["buying", "for buy", "to buy"], a: 2, e: "Finalidad: to + infinitivo." },
  ],
  feynman: ["Tres usos del gerundio", "Tres usos del infinitivo con to", "Cuándo va el infinitivo sin to", "Cómo cambian stop y remember"],
  mapa: mapa("-ING OR TO?", "var(--eso)", [
    ["Gerund", "subject · after prepositions", "var(--leaf)"],
    ["To-infinitive", "purpose · want · decide", "var(--pen)"],
    ["Bare infinitive", "modals · let · make", "var(--red)"],
    ["Change meaning", "stop · remember · try", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Gerundio tras preposición", "Siempre -ing: «interested in learning», «tired of waiting»."],
    ["Verbos + -ing", "enjoy, avoid, finish, mind, keep, suggest, can't stand."],
    ["Verbos + to", "want, decide, hope, plan, promise, refuse, learn, would like."],
    ["Infinitivo sin to", "Después de modales y de let / make + objeto."],
    ["Stop + -ing / stop + to", "Dejar de hacer algo / pararse para hacer algo."],
  ],
  familias: ["Pedidle que diga en inglés tres cosas que «enjoys doing» y tres que «wants to do».", "Jugad a «Remember to…» antes de salir de casa, siempre en inglés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: formas no personales del verbo y complementación verbal (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Bingo de verbos: casillas -ing / to; al oír un verbo, se marca la columna correcta.", "Encuesta «Things I can't stand doing / I hope to do».", "Minidiálogos con stop, remember y try en sus dos sentidos."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: verbs followed by -ing or infinitive", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: verb patterns", url: "https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing" },
  ],
  revisado: "2026-11-12",
};
