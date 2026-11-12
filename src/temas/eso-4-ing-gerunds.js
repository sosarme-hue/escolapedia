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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Memorizar los verbos más frecuentes seguidos de -ing o de to", "Usar -ing después de preposiciones y expresiones fijas", "Distinguir los verbos que cambian de significado"],
  bloques: [
    { tras: "El gerundio (-ing)", html: `<h3>Verbos + -ing</h3><p>Estos verbos van siempre seguidos de <b>-ing</b>. Muchos expresan gustos o actividades:</p>${L.tb(["Grupo", "Verbos", "Ejemplo"], [["gustos", "enjoy, like*, love*, hate*, don't mind, can't stand", "I <b>can't stand waiting</b>."], ["empezar y acabar", "finish, give up, keep (on), carry on", "<b>Keep trying</b>!"], ["evitar y negar", "avoid, deny, risk, miss", "She <b>avoided answering</b>."], ["pensar y sugerir", "suggest, consider, imagine, practise, recommend", "<b>Imagine living</b> on Mars."]])}<p>* <i>like, love, hate</i> admiten también <i>to</i> sin apenas cambio de significado. Pero <b>would like / would love / would prefer</b> van siempre con <b>to</b>: «I'<b>d like to go</b>».</p>` },
    { tras: "El gerundio (-ing)", html: `<h3>Preposición + -ing</h3><p>Detrás de <b>cualquier preposición</b> el verbo va en <b>-ing</b>. Es una regla sin excepciones y muy productiva:</p><ul><li>Adjetivo + preposición: <i>good at, interested in, afraid of, tired of, keen on, fond of, proud of</i>. «I'm <b>tired of studying</b>.»</li><li>Verbo + preposición: <i>think about, look forward to, succeed in, insist on, apologise for</i>. «I'm <b>looking forward to seeing</b> you.»</li><li>Conectores: <i>before, after, without, instead of, by</i>. «He left <b>without saying</b> goodbye», «You learn <b>by practising</b>.»</li></ul><p>Cuidado con <i>look forward to</i> y <i>be used to</i>: el <i>to</i> es preposición, así que va <mark>-ing</mark>, no infinitivo.</p>` },
    { tras: "El infinitivo con to", html: `<h3>Verbos + to + infinitivo</h3>${L.tb(["Grupo", "Verbos", "Ejemplo"], [["deseos y planes", "want, hope, plan, intend, would like, expect", "I <b>hope to see</b> you soon."], ["decisiones y esfuerzos", "decide, choose, try, manage, fail, learn", "She <b>managed to finish</b>."], ["promesas y rechazos", "promise, agree, offer, refuse, threaten", "He <b>refused to help</b>."], ["apariencia", "seem, appear, pretend, tend", "You <b>seem to be</b> tired."], ["verbo + persona + to", "ask, tell, want, advise, allow, remind", "My parents <b>allowed me to go</b>."]])}<p>Con <b>too</b> y <b>enough</b> también va <i>to</i>: «It's <b>too</b> cold <b>to swim</b>», «She's old <b>enough to drive</b>».</p>` },
    { tras: "Cambian de significado", html: `<h3>Más verbos que cambian de significado</h3>${L.tb(["Verbo", "+ -ing", "+ to"], [["try", "probar algo para ver qué pasa: <i>Try drinking</i> water.", "intentar algo difícil: I <i>tried to open</i> it."], ["forget", "olvidar algo que pasó: I'll never <i>forget seeing</i> the sea.", "olvidar hacer algo: I <i>forgot to buy</i> milk."], ["regret", "lamentar lo hecho: I <i>regret telling</i> him.", "lamentar comunicar algo: We <i>regret to inform</i> you…"], ["go on", "seguir haciendo lo mismo: She <i>went on talking</i>.", "pasar a hacer otra cosa: Then he <i>went on to explain</i>…"], ["mean", "implicar: It <i>means getting</i> up early.", "tener la intención: I didn't <i>mean to hurt</i> you."]])}<p>Truco general: con <b>-ing</b> la acción suele ser <b>anterior</b> o ya conocida; con <b>to</b>, la acción es <b>posterior</b> o pendiente.</p>` },
    { tras: "Infinitivo sin to", html: `<h3>Verbos de percepción</h3><p>Los verbos <i>see, hear, watch, notice, feel</i> admiten dos estructuras con un objeto:</p><ul><li>Objeto + <b>infinitivo sin to</b>: percibimos la acción <b>completa</b>. «I <b>saw him cross</b> the street» (de un lado al otro).</li><li>Objeto + <b>-ing</b>: percibimos solo una <b>parte</b> de la acción, en progreso. «I <b>saw him crossing</b> the street» (mientras cruzaba).</li></ul><p>Y recuerda que <b>make</b> y <b>let</b> van con infinitivo sin to en activa («They <b>made me wait</b>»), pero en pasiva <i>make</i> recupera el <i>to</i>: «I <b>was made to wait</b>». En lugar de <i>let</i> en pasiva se usa <i>be allowed to</i>: «I <b>was allowed to</b> stay up late».</p>` },
    { tras: "Listas para memorizar", html: `<h3>El gerundio como sujeto: la gran diferencia con el español</h3><p>Cuando una acción es el <b>sujeto</b> de la oración, el inglés usa <b>-ing</b> donde el español usa el infinitivo: «<b>Fumar</b> es malo» → «<b>Smoking</b> is bad»; «<b>Leer</b> te abre la mente» → «<b>Reading</b> opens your mind». Traducir palabra por palabra lleva al error <s>*To smoke is bad</s>, que es posible pero suena muy anticuado y poco natural.</p><p>Por eso los carteles de normas usan -ing: <i>No smoking</i>, <i>No parking</i>, <i>No swimming</i>. También se usa -ing en las actividades de ocio con <b>go</b> (<i>go swimming, go shopping, go skiing</i>) y después de expresiones como <i>it's worth</i> («It's worth <b>visiting</b>»), <i>it's no use</i> y <i>there's no point (in)</i>: «There's no point <b>arguing</b>».</p>` },
  ],
  videos: [
    ["El gerundio (-ing)", L.vid("l0sK51yvaGM", "Gerundio vs infinitivo en inglés: diferencias clave y ejemplos", "Francisco Ochoa Inglés Fácil", 1284517)],
    ["Cambian de significado", L.vid("_0onvUH6z98", "Gerund or infinitive en inglés: repaso de gramática", "Inglés Para Perezosos", 798934)],
  ],
  ejemplos: [
    ["Completa: «I'm thinking about (buy) ___ a new laptop, but I can't afford (spend) ___ much.»", ["«About» es una preposición → -ing: buying.", "«Afford» va seguido de to + infinitivo: to spend."], "I'm thinking about buying a new laptop, but I can't afford to spend much."],
    ["Elige y explica: «I stopped (to buy / buying) a coffee on the way to work.»", ["Stop + -ing = dejar de hacer algo.", "Stop + to = pararse para hacer algo.", "Aquí la persona se para en el camino para comprar un café."], "I stopped to buy a coffee (me paré para comprar un café)."],
    ["Completa: «My parents let me (go) ___ to the concert, but they made me (come) ___ home by 11.»", ["Let + objeto + infinitivo sin to: go.", "Make + objeto + infinitivo sin to (en activa): come."], "My parents let me go to the concert, but they made me come home by 11."],
  ],
  errores: [
    "Usar infinitivo después de preposición: *interested in learn → interested in learning.",
    "*I look forward to see you → I look forward to seeing you.",
    "*I'd like going → I'd like to go.",
    "*She suggested to go → She suggested going.",
    "Poner to después de make o let en activa: *let me to go → let me go.",
    "Confundir remember / forget / stop + -ing con + to.",
  ],
  ejercicios: [
    ["Completa: «Do you mind (open) ___ the window?»", "opening: mind + -ing."],
    ["Completa: «We decided (stay) ___ at home.»", "to stay: decide + to."],
    ["Completa: «She's afraid of (fly) ___.»", "flying: preposición + -ing."],
    ["Completa: «He left without (say) ___ goodbye.»", "saying: without + -ing."],
    ["Completa: «It's too hot (go) ___ for a run.»", "to go: too + adjetivo + to."],
    ["Explica: «I remember locking the door» / «Remember to lock the door».", "La primera: recuerdo haber cerrado (antes). La segunda: acuérdate de cerrar (después)."],
    ["Completa: «If you can't sleep, try (drink) ___ a glass of warm milk.»", "drinking: try + -ing = probar a ver si funciona."],
    ["Corrige: «I'm looking forward to meet your family.»", "I'm looking forward to meeting your family."],
    ["Pasa a pasiva: «They made us wear a uniform.»", "We were made to wear a uniform."],
    ["Escribe dos frases sobre tus gustos con can't stand y would love.", "Por ejemplo: «I can't stand getting up early.» «I would love to visit Japan.»"],
  ],
  quiz: [
    ["«I'm good at ___.»", ["drawing", "draw", "to draw"], 0, "Preposición + -ing."],
    ["«She refused ___ the truth.»", ["to tell", "telling", "tell"], 0, "Refuse + to."],
    ["«I'll never forget ___ the Eiffel Tower.»", ["seeing", "to see", "see"], 0, "Recuerdo de algo pasado."],
    ["«I saw her ___ the road.» (la acción completa)", ["cross", "to cross", "crossed"], 0, "Percepción + infinitivo sin to."],
    ["«I was ___ to stay up late.»", ["allowed", "let", "made"], 0, "Let en pasiva → be allowed to."],
  ],
  tarjetas: [
    ["Preposición + -ing", "Siempre: interested in learning, without saying, look forward to seeing."],
    ["Too / enough + to", "It's too cold to swim; old enough to drive."],
    ["Try + -ing / to", "Try doing: probar. Try to do: intentar algo difícil."],
  ],
});
