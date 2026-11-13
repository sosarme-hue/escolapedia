// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Present tenses review",
  minutos: 35,
  objetivos: ["Usar el present simple para rutinas y verdades generales", "Usar el present continuous para acciones en curso y planes", "Distinguir present perfect simple y continuous"],
  claves: ["present simple", "present continuous", "present perfect", "stative verbs", "for / since", "already / yet"],
  pregunta: {
    texto: "«I live in Madrid» y «I'm living in Madrid». Las dos frases son correctas. ¿Dicen exactamente lo mismo?",
    respuesta: "No. «I live» es <mark>permanente</mark>: Madrid es tu casa. «I'm living» suena <mark>temporal</mark>: estás allí una temporada (un curso, un trabajo). El tiempo verbal cambia cómo ve el hablante la situación.",
  },
  bloques: [
    {
      html: `<h3>Present simple</h3><p>Para <b>rutinas</b>, <b>hábitos</b> y <b>verdades generales</b>: «I <i>get up</i> at 7», «Water <i>boils</i> at 100 °C». En tercera persona singular se añade <mark>-s / -es</mark> (he plays, she watches). Negativa e interrogativa con <b>do / does</b>: «She doesn't eat meat», «Do you like jazz?». Va con <i>always, usually, often, never, every day</i>.</p>`,
      svg: L.filas("Present simple: afirmativa, negativa e interrogativa", [
        ["+", "She plays tennis.", "var(--leaf)"], ["−", "She doesn't play tennis.", "var(--red)"],
        ["?", "Does she play tennis?", "var(--pen)"],
      ], "present simple · 3.ª persona"),
    },
    {
      html: `<h3>Present continuous</h3><p><b>am / is / are + verbo-ing</b>. Para lo que pasa <mark>ahora mismo</mark> («I'm reading»), situaciones <b>temporales</b> («She's staying with her aunt this week») y <b>planes ya fijados</b> («We're flying to Rome on Friday»). Va con <i>now, at the moment, today, this week</i>.</p>`,
      svg: L.frase("Present continuous: She is reading a book now", [
        ["She", "sujeto", "var(--ink)"], ["is", "be", "var(--pen)"], ["reading", "verbo-ing", "var(--red)"], ["a book", "", "var(--line)"], ["now.", "ahora", "var(--leaf)"],
      ], "be + -ing"),
    },
    {
      html: `<h3>Stative verbs</h3><p>Algunos verbos expresan <b>estados</b>, no acciones, y casi nunca van en continuous: <mark>like, love, hate, want, need, know, believe, understand, belong, seem</mark>. Se dice «I <b>know</b> the answer», no «I'm knowing». Algunos cambian de sentido: «I think it's good» (opinión) / «I'm thinking about it» (proceso).</p>`,
      svg: L.filas("Verbos de estado que no suelen ir en continuous", [
        ["Gustos", "like · love · hate", "var(--red)"], ["Mente", "know · believe", "var(--pen)"],
        ["Deseos", "want · need · prefer", "var(--leaf)"], ["Posesión", "have · own · belong", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Present perfect simple</h3><p><b>have / has + participio</b>. Une el pasado con el presente: <b>experiencias</b> («I've been to London»), acciones <b>recientes</b> con resultado ahora («I've lost my keys») y situaciones que <b>empezaron en el pasado y siguen</b> con <mark>for</mark> (duración) y <mark>since</mark> (punto de inicio): «I've lived here <i>for</i> ten years / <i>since</i> 2016». Va con <i>already, yet, just, ever, never</i>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: el present perfect empieza en el pasado y llega hasta ahora; for indica duración y since el punto de inicio">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <path d="M16 96 H 244" stroke="var(--line)" stroke-width="3"/>
          <circle cx="56" cy="96" r="7" fill="var(--pen)"/><text x="56" y="124" font-size="13" fill="var(--pen)">2016</text><text x="56" y="140" font-size="12" fill="var(--pen)">since</text>
          <circle cx="210" cy="96" r="7" fill="var(--red)"/><text x="210" y="124" font-size="13" fill="var(--red)">now</text>
          <path d="M60 80 H 200" stroke="var(--leaf)" stroke-width="5"/><path d="M196 72 l 10 8 l -10 8" fill="none" stroke="var(--leaf)" stroke-width="4"/>
          <text x="132" y="68" font-size="13" fill="var(--leaf)">for ten years</text>
          <text x="130" y="30" font-size="14" fill="var(--ink)">I've lived here…</text>
        </g></svg>`,
    },
    {
      html: `<h3>Present perfect continuous</h3><p><b>have / has been + verbo-ing</b>. Destaca la <mark>duración</mark> o la actividad en sí, a menudo con un resultado visible: «I'm tired, I've <b>been running</b>». Compara: «I've <b>read</b> three books this month» (resultado: cuántos) / «I've <b>been reading</b> all afternoon» (actividad: cuánto tiempo).</p>`,
      svg: L.filas("Present perfect simple frente a continuous", [
        ["Simple", "I've read three books.", "var(--pen)"],
        ["Continuous", "I've been reading for hours.", "var(--red)"],
      ], "resultado frente a duración"),
    },
  ],
  figura: {
    titulo: "Los cuatro presentes en inglés",
    svg: L.columnas("Present simple, continuous, perfect y perfect continuous con su uso", [
      ["rutinas y verdades", "SIMPLE", ["I play", "every day"], "var(--leaf)"],
      ["ahora · temporal", "CONTINUOUS", ["I'm playing", "now"], "var(--red)"],
      ["experiencia · resultado", "PERFECT", ["I've played", "since 2020"], "var(--pen)"],
      ["duración hasta ahora", "PERF. CONT.", ["I've been playing", "for 2 hours"], "var(--inf)"],
    ]),
  },
  video: { id: "3B_6pS8a0jk", titulo: "Present simple vs present continuous", canal: "Clases de inglés en español. Gramática fácil.", vistas: 1644756, megusta: 0, busqueda: "present simple vs present continuous present perfect explicación" },
  quiz: [
    { q: "«Water ___ at 100 °C.»", o: ["boils", "is boiling", "has boiled"], a: 0, e: "Es una verdad general: present simple." },
    { q: "«Listen! Somebody ___ the piano.»", o: ["plays", "is playing", "has played"], a: 1, e: "Ocurre en este momento: present continuous." },
    { q: "«I ___ the answer.»", o: ["know", "am knowing", "have been knowing"], a: 0, e: "«Know» es un verbo de estado: no va en continuous." },
    { q: "«She has lived in Leeds ___ 2019.»", o: ["for", "since", "ago"], a: 1, e: "«Since» + punto de inicio; «for» + duración." },
    { q: "«You look tired.» «Yes, I ___ all morning.»", o: ["run", "have been running", "am run"], a: 1, e: "Actividad prolongada con resultado visible: present perfect continuous." },
  ],
  examen: [
    { q: "«We ___ to Paris next Saturday. We've got the tickets.»", o: ["fly", "are flying", "have flown"], a: 1, e: "Plan fijado para el futuro: present continuous." },
    { q: "«Have you finished your homework ___?»", o: ["already", "yet", "since"], a: 1, e: "«Yet» en preguntas y negativas, al final de la frase." },
    { q: "«He ___ never ___ sushi.»", o: ["has / eaten", "is / eating", "does / eat"], a: 0, e: "Experiencia de vida: present perfect con «never»." },
  ],
  feynman: ["Cuándo uso present simple y cuándo continuous", "Qué son los stative verbs y tres ejemplos", "La diferencia entre for y since", "Present perfect simple frente a continuous"],
  mapa: mapa("PRESENT TENSES", "var(--eso)", [
    ["Present simple", "routines · facts", "var(--leaf)"],
    ["Present continuous", "now · temporary · plans", "var(--red)"],
    ["Present perfect", "experience · for/since", "var(--pen)"],
    ["Perfect continuous", "duration until now", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Present simple: ¿cuándo?", "Rutinas, hábitos y verdades generales: «I walk to school»."],
    ["Present continuous: estructura", "am / is / are + verbo-ing: «She is studying»."],
    ["Stative verbs", "Verbos de estado que no van en continuous: know, like, want, need, believe."],
    ["For y since", "For + duración (for two years); since + punto de inicio (since 2020)."],
    ["Present perfect continuous", "have / has been + -ing: destaca la duración de una acción hasta ahora."],
  ],
  familias: ["Pedidle que describa en inglés lo que hace cada miembro de la familia en este momento.", "Preguntadle «How long have you…?» sobre sus aficiones y que responda con for o since.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: tiempos de presente, aspecto y expresiones temporales (RD 217/2022, Lengua Extranjera 4º; nivel de referencia A2+/B1 del MCER).",
    ideas: ["«Find someone who…» con preguntas en present perfect («Have you ever…?»).", "Describir fotos de la clase en present continuous.", "Línea del tiempo personal con for / since."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: grammar", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: English Grammar Today", url: "https://dictionary.cambridge.org/grammar/british-grammar/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escribir bien la tercera persona y la forma -ing", "Elegir entre present perfect y past simple", "Usar for, since, already, yet, just y ever"],
  bloques: [
    { tras: "Present simple", html: `<h3>La ortografía de la tercera persona</h3><p>En el present simple, la tercera persona del singular (<i>he, she, it</i>) añade <b>-s</b>, pero hay reglas:</p>${L.tb(["Regla", "Ejemplo"], [["la mayoría: + s", "play → plays, read → reads"], ["-s, -sh, -ch, -x, -o: + es", "watch → watches, go → goes, fix → fixes"], ["consonante + y: -y → -ies", "study → studies, fly → flies"], ["vocal + y: + s", "play → plays, buy → buys"], ["irregular", "have → has"]])}<p>En negativa e interrogativa la -s desaparece del verbo porque la lleva el auxiliar: <mark>She doesn't play / Does she play?</mark> (nunca *doesn't plays). Los adverbios de frecuencia (<i>always, usually, often, sometimes, never</i>) van delante del verbo, pero detrás de <i>be</i>: «I <b>always</b> walk to school», «She <b>is always</b> late».</p>` },
    { tras: "Present continuous", html: `<h3>La forma -ing</h3><ul><li>Regla general: + ing (<i>read → reading</i>).</li><li>Verbos acabados en <b>-e</b> muda: se quita la e (<i>write → writing, make → making</i>).</li><li>Una sílaba (o tónica final) con <b>consonante + vocal + consonante</b>: se dobla la consonante (<i>swim → swimming, run → running, begin → beginning</i>).</li><li>Acabados en <b>-ie</b>: -ie → -ying (<i>lie → lying, die → dying</i>).</li></ul><p>El present continuous también sirve para quejarse de una costumbre molesta con <i>always</i>: «You're <b>always</b> losing your keys!» Y para cambios en progreso: «The climate is getting warmer».</p>` },
    { tras: "Present perfect simple", html: `<h3>Present perfect o past simple</h3><p>Es la gran dificultad para un hispanohablante, porque en español usamos «he comido» y «comí» de otra manera.</p>${L.tb(["Present perfect", "Past simple"], [["tiempo sin terminar o sin especificar", "tiempo terminado y concreto"], ["I've seen that film. (alguna vez)", "I saw that film last week."], ["She has lived here since 2019. (y sigue)", "She lived here for two years. (ya no)"], ["ever, never, already, yet, just, so far, this week", "yesterday, last…, … ago, in 2010, when…"]])}<p>Regla de oro: <mark>si dices cuándo (yesterday, ago, last…), usa past simple</mark>. Por eso es incorrecto *I have visited Paris last year.</p>` },
    { tras: "Present perfect simple", html: `<h3>For, since, already, yet, just, ever</h3><ul><li><b>for</b> + periodo: <i>for three years, for a long time</i>.</li><li><b>since</b> + punto de inicio: <i>since 2019, since Monday, since I was a child</i>.</li><li><b>already</b> (ya), en afirmativas, entre have y el participio: «I've <b>already</b> finished».</li><li><b>yet</b> (ya / todavía), en preguntas y negativas, al final: «Have you finished <b>yet</b>?», «I haven't finished <b>yet</b>».</li><li><b>just</b> (acabar de): «She's <b>just</b> left».</li><li><b>ever / never</b> (alguna vez / nunca): «Have you <b>ever</b> been to Ireland?» «No, I've <b>never</b> been there».</li></ul><p>Fíjate en <i>been</i> y <i>gone</i>: «He's <b>been</b> to Paris» (fue y volvió) / «He's <b>gone</b> to Paris» (está allí ahora).</p>` },
    { tras: "Present perfect continuous", html: `<h3>Simple o continuous en el present perfect</h3><p>El <b>simple</b> se fija en el <b>resultado</b> o en la cantidad: «I've read three books this month», «I've painted the kitchen» (ya está pintada). El <b>continuous</b> se fija en la <b>actividad y su duración</b>: «I've been reading all afternoon», «I've been painting the kitchen» (estoy manchado; quizá no he terminado). Con <i>how many / how much</i> se usa el simple; con <i>how long</i> se suelen usar los dos: «How long have you been learning English?» Los stative verbs no admiten continuous: «I've <b>known</b> her for years» (nunca *I've been knowing).</p>` },
  ],
  videos: [
    ["Present continuous", L.vid("3B_6pS8a0jk", "Present simple vs present continuous", "Clases de inglés en español", 1644756)],
    ["Present perfect continuous", L.vid("TcN7ynsdHyA", "Present perfect vs present perfect continuous", "Clases de inglés en español", 717209)],
  ],
  ejemplos: [
    ["Completa: «My brother (study) ___ Medicine. This week he (prepare) ___ an important exam.»", ["«Study Medicine» es una situación permanente o habitual: present simple, 3.ª persona: studies (consonante + y → -ies).", "«This week» indica algo temporal: present continuous: is preparing (prepare → preparing, se quita la e)."], "My brother studies Medicine. This week he is preparing an important exam."],
    ["Elige: «I (lose / have lost) my keys. I can't open the door.»", ["La pérdida tiene un resultado en el presente: no puedo abrir.", "No se dice cuándo se perdieron.", "Por tanto, present perfect."], "I have lost my keys."],
    ["Completa con for o since y el tiempo correcto: «We (know) ___ each other ___ primary school.»", ["Know es un stative verb: no va en continuous.", "La acción empezó en el pasado y sigue: present perfect simple → have known.", "«Primary school» es el punto de inicio: since."], "We have known each other since primary school."],
  ],
  errores: [
    "Olvidar la -s de la tercera persona: *she play → she plays.",
    "Poner la -s también con el auxiliar: *does she plays → does she play.",
    "Usar present perfect con un tiempo terminado: *I have seen him yesterday → I saw him yesterday.",
    "Confundir for (duración) y since (punto de inicio).",
    "Usar continuous con stative verbs: *I'm knowing → I know.",
    "Traducir «llevo dos años aquí» como *I am here for two years → I have been here for two years.",
  ],
  ejercicios: [
    ["Escribe la tercera persona: watch, carry, play, go, have.", "watches, carries, plays, goes, has."],
    ["Escribe la forma -ing: write, swim, lie, study, begin.", "writing, swimming, lying, studying, beginning."],
    ["Completa: «___ your sister (like) ___ horror films?»", "Does your sister like horror films? (Present simple: auxiliar does y verbo sin -s.)"],
    ["Corrige: «I am wanting a new phone.»", "I want a new phone. Want es un stative verb."],
    ["Completa con for o since: «I've had this bike ___ 2022» / «___ six months».", "since 2022 / for six months."],
    ["Elige: «Have you finished your homework (already / yet)?»", "yet: en preguntas va al final."],
    ["Corrige: «She has gone to London last summer.»", "She went to London last summer. Last summer es un tiempo terminado: past simple."],
    ["Explica la diferencia: «He's been to Rome» / «He's gone to Rome».", "Been: fue y ya ha vuelto. Gone: se ha ido y todavía está allí."],
    ["Completa: «I'm exhausted. I (run) ___ for an hour.»", "I've been running for an hour. Se destaca la actividad y su duración, con un resultado visible (estoy agotado)."],
    ["Traduce: «Llevo tres años estudiando francés.»", "I have been studying French for three years. (También: I have studied French for three years.)"],
  ],
  quiz: [
    ["«He ___ to school every day.»", ["walks", "walk", "is walk"], 0, "3.ª persona: -s."],
    ["«I saw her ___.»", ["yesterday", "since Monday", "yet"], 0, "Past simple con tiempo terminado."],
    ["«She has worked here ___ ten years.»", ["for", "since", "ago"], 0, "For + periodo."],
    ["Forma -ing de «run»:", ["running", "runing", "runnning"], 0, "Se dobla la consonante."],
    ["«I've ___ finished.» (acabo de)", ["just", "yet", "ever"], 0, "Just = acabar de."],
  ],
  tarjetas: [
    ["Present perfect vs past simple", "Si dices cuándo (yesterday, ago, last…), past simple."],
    ["For / since", "For + periodo (for 2 years); since + inicio (since 2020)."],
    ["Been / gone", "Been: fue y volvió. Gone: se fue y sigue allí."],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Un día en la vida de Maya", `<p>Maya tiene 16 años y vive en Bristol. Cada mañana <i>she gets up at seven, has breakfast and cycles to school</i>. Eso es su rutina, y el inglés la cuenta en <b>present simple</b>. Pero este trimestre es distinto: <i>she is staying with her grandparents</i> porque sus padres trabajan fuera, y <i>she is learning to cook</i> con su abuela. Son situaciones temporales: <b>present continuous</b>.</p><p>Hace un año Maya empezó un canal de vídeos sobre ciencia. <i>She has uploaded forty videos</i> y <i>she has been editing the new one all week</i>. Lo primero es un resultado que se puede contar; lo segundo, una actividad que dura hasta hoy. Fíjate: en una sola semana de su vida aparecen <mark>cuatro presentes distintos</mark>, y cada uno dice algo diferente sobre el tiempo.</p><p>En español hacemos estas distinciones de otra manera («llevo una semana editando»), y por eso los hispanohablantes nos equivocamos a menudo. En este tema vas a ordenar los cuatro presentes, a elegir el adecuado sin dudar y a usarlos para hablar de ti, de tus planes y de tus experiencias, tanto en una conversación como en un texto escrito.</p>`],
  mas: [
    ["<h3>Present simple</h3>", `<p>El present simple también sirve para <b>horarios y programas</b> (trenes, clases, películas): «The bus <i>leaves</i> at 8.15», aunque hablemos del futuro. Y es el tiempo de las <b>instrucciones y las recetas</b> («You <i>add</i> the flour and <i>mix</i> it») y de los <b>comentarios deportivos</b> en directo («Messi <i>passes</i>, Pedri <i>shoots</i>…»). Recuerda que en las preguntas y negativas el verbo principal vuelve a su forma base porque la -s ya la lleva el auxiliar: «Does she <b>play</b>?», nunca «Does she plays?».</p>`],
    ["<h3>Present continuous</h3>", `<p>Hay un cuarto uso muy frecuente: las <b>situaciones que cambian</b> poco a poco, con verbos como <i>get, become, change, grow, improve</i>: «The climate <i>is getting</i> warmer», «Your English <i>is improving</i>». En español diríamos «cada vez hace más calor» o «tu inglés está mejorando». Fíjate en que el continuous no siempre significa «en este segundo exacto»: «I'm reading a great novel» puede decirse aunque ahora mismo estés comiendo, porque la lectura está en marcha estos días.</p>`],
    ["<h3>Stative verbs</h3>", `<p>Otros verbos con doble sentido: <b>have</b> («I <i>have</i> a dog» = posesión / «I'm <i>having</i> lunch» = acción), <b>see</b> («I <i>see</i> what you mean» = entender / «I'm <i>seeing</i> the dentist tomorrow» = cita), <b>taste</b> y <b>smell</b> («The soup <i>tastes</i> great» / «She's <i>tasting</i> the soup»). Un truco: si el verbo describe algo que «simplemente es así» y no puedes imaginarlo como un proceso con principio y fin, usa el simple.</p>`],
    ["<h3>Present perfect simple</h3>", `<p>Hay dos participios que conviene dominar: el regular (-ed: <i>worked, played</i>) y los irregulares, que son la tercera columna de la lista (<i>go → went → gone, write → wrote → written, buy → bought → bought</i>). La forma contraída es la normal al hablar: <i>I've, you've, she's, we've</i>. Cuidado: <i>she's</i> puede ser <i>she is</i> o <i>she has</i>; lo sabes por lo que viene detrás: «She's working» (is) / «She's worked» (has).</p>`],
    ["<h3>Present perfect continuous</h3>", `<p>Responde de forma natural a la pregunta <b>How long…?</b>: «How long have you been waiting?» «I've been waiting for twenty minutes.» Con los verbos de estado no se usa: se dice «I've <b>known</b> her since primary school», no «I've been knowing». Y si la acción es muy breve o puntual (<i>break, lose, find, arrive</i>) tampoco: «I've broken my glasses», porque romper no dura.</p>`],
    ["<h3>Present perfect o past simple</h3>", `<p>Una prueba rápida: pregúntate si el periodo de tiempo <b>sigue abierto</b>. «I've drunk two coffees <i>today</i>» (el día no ha terminado) frente a «I drank two coffees <i>yesterday</i>» (ayer ya acabó). Lo mismo con <i>this week, this year, in my life</i>. Y una conversación típica empieza en present perfect y sigue en past simple: «Have you ever been to Ireland?» «Yes, I have. I <b>went</b> there in 2023. It <b>was</b> amazing.»</p>`],
    ["<h3>La forma -ing</h3>", `<p>Hay dos casos especiales que conviene memorizar: los verbos acabados en <b>-ie</b> cambian a <b>-ying</b> (<i>lie → lying, die → dying, tie → tying</i>) y los acabados en <b>-ee</b> o <b>-ye</b> conservan la e (<i>see → seeing, agree → agreeing</i>). En inglés británico, además, se dobla la -l final tras vocal breve: <i>travel → travelling</i> (en americano, <i>traveling</i>).</p>`],
  ],
  svgs: [
    ["<h3>La ortografía de la tercera persona</h3>", "Reglas de la tercera persona: -s, -es, -ies", [["+ s", "play → plays · read → reads"], ["+ es", "watch → watches · go → goes"], ["consonante + y → ies", "study → studies · fly → flies"]], "he / she / it"],
    ["<h3>La forma -ing</h3>", "Reglas de la forma -ing", [["+ ing", "read → reading"], ["-e muda: se quita", "write → writing"], ["CVC: doble consonante", "swim → swimming"]], "ortografía del -ing"],
    ["<h3>Present perfect o past simple</h3>", "Present perfect frente a past simple", [["Present perfect", "I've seen it. (alguna vez)"], ["Past simple", "I saw it last week."], ["Pista", "¿dices cuándo? → past simple"]]],
    ["<h3>For, since, already, yet, just, ever</h3>", "Marcadores del present perfect", [["for / since", "for 2 years · since 2020"], ["already / just", "I've just finished."], ["yet", "Have you finished yet?"], ["ever / never", "Have you ever…? I've never…"]]],
    ["<h3>Simple o continuous en el present perfect</h3>", "Present perfect simple: resultado; continuous: actividad", [["Simple: resultado", "I've painted the room."], ["Continuous: actividad", "I've been painting. (manchas)"], ["Estado: siempre simple", "I've known him for years."]]],
  ],
  bloques: [
    { tras: "<h3>La ortografía de la tercera persona</h3>", html: `<h3>Adverbios de frecuencia: dónde se colocan</h3><p>Los adverbios de frecuencia dicen <b>cada cuánto</b> pasa algo: <i>always</i> (100 %), <i>usually</i>, <i>often</i>, <i>sometimes</i>, <i>rarely / hardly ever</i> y <i>never</i> (0 %). La regla de posición es sencilla y muy preguntada en los exámenes: van <mark>delante del verbo principal</mark> («She <b>often</b> walks to school») pero <mark>detrás del verbo be</mark> («He is <b>always</b> late»). Con auxiliares, van entre el auxiliar y el verbo: «I don't <b>usually</b> eat meat», «Have you <b>ever</b> tried sushi?».</p><p><i>Sometimes</i> y <i>usually</i> también pueden ir al principio para dar énfasis: «<b>Sometimes</b> I walk, sometimes I take the bus». En cambio, las expresiones de varias palabras van al final: <i>every day, once a week, twice a month, three times a year</i>: «We play football <b>twice a week</b>».</p><p>Para preguntar por la frecuencia se usa <b>How often…?</b>: «How often do you go to the cinema?» «About once a month.» Ten en cuenta que <i>never</i> ya es negativo, así que el verbo va en afirmativa: «I <b>never</b> drink coffee», no «I don't never drink».</p>`, svg: ["Posición de los adverbios de frecuencia", [["delante del verbo", "She often walks."], ["detrás de be", "He is always late."], ["al final (expresiones)", "twice a week · every day"]], "always · usually · often · never"] },
    { tras: "<h3>Stative verbs</h3>", html: `<h3>Simple y continuous en contraste</h3><p>Muchas veces la misma acción admite los dos tiempos y la elección cambia el mensaje. Compara:</p><ul><li>«I <b>work</b> in a bank» (es mi empleo) / «I'm <b>working</b> in a bank this summer» (trabajo temporal).</li><li>«He <b>is</b> rude» (es su carácter) / «He's <b>being</b> rude» (hoy se está portando mal, no suele ser así).</li><li>«The film <b>starts</b> at nine» (horario fijo) / «We're <b>meeting</b> at nine» (plan personal acordado).</li></ul><p>Hay un uso especial del continuous con <b>always</b>: expresa <mark>queja o fastidio</mark> por algo que se repite demasiado: «You're <b>always</b> leaving your socks on the floor!». No es una rutina neutra, es un reproche. En cambio, «You always leave your socks…» en simple es solo una descripción.</p><p>Una buena estrategia para decidir es buscar las <b>palabras pista</b>: <i>every, usually, on Mondays</i> llevan al simple; <i>now, at the moment, today, this term, look!, listen!</i> llevan al continuous.</p>`, svg: ["Simple frente a continuous con el mismo verbo", [["I work in a bank.", "permanente: mi empleo"], ["I'm working there.", "temporal: este verano"], ["You're always…!", "queja por algo repetido"]]] },
    { tras: "<h3>Simple o continuous en el present perfect</h3>", html: `<h3>Preguntas y respuestas cortas</h3><p>En inglés no se suele contestar solo «yes» o «no»: lo natural es una <b>respuesta corta</b> que repite el auxiliar del tiempo verbal. «Do you like horror films?» «Yes, I <b>do</b>. / No, I <b>don't</b>.» «Is she studying?» «Yes, she <b>is</b>.» «Have you finished?» «No, I <b>haven't</b>.» «Has it been raining?» «Yes, it <b>has</b>.» El auxiliar te dice además qué tiempo estás usando.</p><p>Otra estructura importante son las <b>preguntas de sujeto</b>: cuando preguntas por quién hace la acción, no hay <i>do / does</i>. «<b>Who lives</b> next door?» (no «Who does live»), «<b>What happens</b> next?», «<b>Who has taken</b> my pen?». Compara con una pregunta de objeto: «Who <b>do</b> you live with?».</p><p>Por último, para preguntar con educación por experiencias se usa <i>Have you ever…?</i> y para continuar la conversación se pasa a preguntas en pasado con <i>When…? Where…? What was it like?</i>.</p>`, svg: ["Respuestas cortas con los presentes", [["Do you…?", "Yes, I do. / No, I don't."], ["Is she…ing?", "Yes, she is. / No, she isn't."], ["Have you…?", "Yes, I have. / No, I haven't."], ["Who lives here?", "pregunta de sujeto: sin do"]]] },
    { html: `<h3>Los presentes al escribir</h3><p>En los <i>writings</i> de 4º los presentes aparecen en casi todos los formatos. En una <b>descripción de una persona</b> combinas el simple para el carácter y las costumbres («My best friend <i>loves</i> music and <i>plays</i> the guitar») y el continuous para lo que hace en esta etapa («At the moment she <i>is preparing</i> for a competition»). En un <b>email informal</b> el present perfect da las novedades: «I've <i>just</i> started a new course», «We've <i>moved</i> to a new flat».</p><p>En una <b>biografía de alguien vivo</b> el present perfect resume su carrera hasta hoy («She <i>has written</i> six novels and <i>has won</i> two prizes»), mientras que los hechos con fecha van en pasado («She <i>was</i> born in 1990»). Y en un <b>perfil personal</b> o una solicitud de intercambio puedes usar el perfect continuous para mostrar constancia: «I <i>have been learning</i> English for eight years».</p><p>Al revisar tu texto, comprueba tres cosas: la -s de la tercera persona, que no hayas puesto en continuous un verbo de estado y que no hayas mezclado un present perfect con una fecha terminada.</p>`, svg: ["Qué presente usar en cada tipo de texto", [["Descripción", "simple: carácter y costumbres"], ["Email informal", "perfect: novedades"], ["Biografía", "perfect: logros hasta hoy"], ["Revisión", "-s · stative · fechas"]]] },
  ],
  grupos: [3, 4, 5, 2],
  ejemplos: [
    ["Elige y explica: «Why (do you look / are you looking) at me like that?»", ["La acción ocurre en este momento, mientras hablamos.", "«Look at» con sentido de mirar es una acción, no un estado.", "Por tanto, present continuous."], "Why <b>are you looking</b> at me like that?"],
    ["Coloca el adverbio: «My father is tired after work.» (always) / «We go to the beach.» (usually)", ["Con el verbo be, el adverbio va detrás: is always.", "Con otros verbos, delante del verbo principal: usually go."], "«My father is <b>always</b> tired after work.» / «We <b>usually</b> go to the beach.»"],
    ["Escribe una pregunta con How long y respóndela: Lucía empezó a tocar el piano hace seis años y sigue tocando.", ["Es una actividad que empezó en el pasado y continúa: present perfect continuous.", "La pregunta: How long + have / has + been + -ing.", "La respuesta con for (duración)."], "«How long <b>has</b> Lucía <b>been playing</b> the piano?» «She<b>'s been playing</b> it <b>for</b> six years.»"],
  ],
  errores: [],
  niveles: "bbbbbmmmma",
  ejercicios: [
    ["b", "Completa con el present simple: «My cat (sleep) ___ on my bed every night.»", "My cat <b>sleeps</b>. Tercera persona singular: + s. Es una rutina."],
    ["b", "Completa con el present continuous: «Be quiet! The baby (sleep) ___.»", "The baby <b>is sleeping</b>. Ocurre ahora («Be quiet!»): be + -ing."],
    ["b", "Escribe la negativa: «He watches TV after dinner.»", "He <b>doesn't watch</b> TV after dinner. Con does el verbo pierde la -es."],
    ["b", "Coloca never en su sitio: «I eat fast food.»", "I <b>never</b> eat fast food. Delante del verbo principal; el verbo queda en afirmativa."],
    ["b", "Escribe el participio de: go, write, buy, see, be.", "gone, written, bought, seen, been (todos irregulares)."],
    ["b", "Responde con una respuesta corta afirmativa: «Have you done your homework?»", "Yes, I <b>have</b>. Se repite el auxiliar have."],
    ["b", "Completa con for o since: a) ___ last Christmas b) ___ two weeks c) ___ ages d) ___ 9 o'clock.", "a) since b) for c) for d) since. Since con un punto de inicio, for con un periodo."],
    ["m", "Elige: «This soup (tastes / is tasting) delicious.»", "<b>tastes</b>. Aquí taste describe una cualidad (estado), no la acción de probar."],
    ["m", "Elige: «Ugh! You (always borrow / are always borrowing) my things without asking!»", "<b>are always borrowing</b>. Always + continuous expresa queja por algo repetido."],
    ["m", "Haz la pregunta de sujeto para la parte subrayada: «<u>Tom</u> plays the drums in the band.»", "<b>Who plays</b> the drums in the band? En las preguntas de sujeto no se usa does."],
    ["m", "Completa con present perfect o past simple: «I (never / be) ___ to Italy, but my sister (go) ___ there last year.»", "I <b>have never been</b> to Italy, but my sister <b>went</b> there last year. Experiencia sin fecha / hecho con fecha terminada."],
    ["m", "Completa con present perfect simple o continuous: «She (write) ___ three emails this morning.» / «She (write) ___ emails all morning.»", "She <b>has written</b> three emails (resultado, se cuentan) / She <b>has been writing</b> emails all morning (actividad y duración)."],
    ["m", "Corrige: «Does your brother speaks German?»", "Does your brother <b>speak</b> German? Con does el verbo va en forma base."],
    ["m", "Elige: «I (think / am thinking) of joining the drama club.»", "<b>am thinking</b>. Aquí think significa considerar (proceso), no opinar."],
    ["m", "Escribe la pregunta: «I've been waiting for half an hour.»", "<b>How long have you been waiting?</b>"],
    ["m", "Completa con just, already o yet: «A: Do you want to see the new Marvel film? B: No, I've ___ seen it.» / «Has the bus left ___?»", "already (ya, antes de lo esperado) / yet (en preguntas, al final)."],
    ["m", "Explica la diferencia: «She's rude.» / «She's being rude.»", "«She's rude»: es maleducada (su carácter). «She's being rude»: hoy o ahora se está comportando de forma maleducada, algo temporal."],
    ["a", "Corrige los tres errores: «I am knowing Sara since we was six. She live near my house and we are going to school together every day.»", "I <b>have known</b> Sara since we <b>were</b> six. She <b>lives</b> near my house and we <b>go</b> to school together every day. (Know es de estado y con since va en present perfect; we were; tercera persona; rutina en simple.)"],
    ["a", "Traduce: «Cada vez hay más coches eléctricos en mi ciudad.»", "There are more and more electric cars in my city. / Electric cars <b>are becoming</b> more common in my city. (Situación que cambia: present continuous.)"],
    ["a", "Escribe un párrafo de 60 palabras sobre ti: tu rutina, algo que haces este trimestre, una experiencia y algo que llevas tiempo haciendo.", "Modelo: «I usually get up at 7.30 and walk to school. This term I'm preparing for a swimming competition, so I'm training three times a week. I've visited London twice and I've seen a musical there. I've been playing the piano since I was eight, and I've just learned a new song.»"],
    ["a", "Transforma sin cambiar el sentido: «I started living here three years ago.» → «I have…»", "I have <b>been living</b> here <b>for three years</b>. (También: I have lived here for three years.)"],
    ["a", "Completa el diálogo con el tiempo correcto: «A: ___ you ever (try) ___ Indian food? B: Yes, I ___. I (have) ___ a curry in London last summer. A: What ___ it like?»", "Have you ever tried · Yes, I have · I had a curry · What was it like? Se empieza con present perfect (experiencia) y se sigue con past simple (detalles con fecha)."],
    ["a", "Explica por qué es incorrecto «I've been breaking my phone» y corrígelo.", "Break es una acción puntual que no dura: no admite el continuous. Correcto: <b>I've broken my phone</b> (resultado: ahora está roto)."],
    ["a", "Escribe tres frases sobre cómo está cambiando tu barrio usando get, become o change en present continuous.", "Ejemplos: «My neighbourhood <b>is getting</b> busier.» «The old shops <b>are becoming</b> cafés.» «The streets <b>are changing</b> because of the new tram.»"],
    ["a", "Reescribe el email corrigiendo los tiempos: «Hi Tom! I write to tell you my news. I have started a new school last month and I am liking it a lot. I am knowing three people from my old school here.»", "Hi Tom! I<b>'m writing</b> to tell you my news. I <b>started</b> a new school last month and I <b>like</b> it a lot. I <b>know</b> three people from my old school here. (Acción en curso; fecha terminada; like y know son de estado.)"],
    ["a", "Escribe dos frases sobre la misma afición que muestren la diferencia entre present perfect simple y continuous.", "Ejemplo: «I've <b>read</b> four novels by Laura Gallego» (resultado, cuántos). «I've <b>been reading</b> her new novel since Friday» (actividad que continúa)."],
  ],
  cuartas: ["boil", "play", "knows", "during", "have been run", "walking", "since last week", "during", "runninng", "since", "flies", "just", "did / eaten"],
  quiz: [
    ["«She ___ to the gym three times a week.»", ["goes", "is going", "go", "has gone"], 0, "Frecuencia (three times a week): present simple, tercera persona."],
    ["¿Dónde va el adverbio? «He ___ late for school.»", ["is often", "often is", "is being often", "often"], 0, "Con be, el adverbio va detrás."],
    ["«Look! It ___.»", ["snows", "is snowing", "has snowed", "snow"], 1, "Look! indica que ocurre ahora."],
    ["«I ___ what you mean.»", ["see", "am seeing", "have been seeing", "sees"], 0, "See = entender: verbo de estado."],
    ["«We ___ my aunt tomorrow. We've arranged it.»", ["visit", "are visiting", "have visited", "visits"], 1, "Plan personal acordado: present continuous."],
    ["«How long ___ here?»", ["do you live", "are you living", "have you lived", "you live"], 2, "How long para algo que sigue: present perfect."],
    ["«I ___ my keys. Can you help me look for them?»", ["lost", "have lost", "have been losing", "am losing"], 1, "Resultado presente (ahora no las tengo): present perfect."],
    ["«___ next door?» (pregunta por el sujeto)", ["Who does live", "Who lives", "Who live", "Who is live"], 1, "Pregunta de sujeto: sin do / does."],
    ["«Your English ___ better and better.»", ["gets", "is getting", "has got", "get"], 1, "Situación que cambia: present continuous."],
    ["«I ___ a lot of films this year.»", ["saw", "have seen", "see", "have been seeing"], 1, "This year sigue abierto y se cuenta el resultado: present perfect simple."],
  ],
  examen: [
    ["«My hands are dirty because I ___ in the garden.»", ["have worked", "have been working", "work", "am work"], 1, "Actividad reciente con resultado visible: perfect continuous."],
    ["«___ she ___ meat?» «No, she's vegetarian.»", ["Does / eat", "Is / eating", "Has / eaten", "Do / eat"], 0, "Hábito: present simple, pregunta con does."],
    ["«You ___ always ___ me!» (queja)", ["are / interrupting", "do / interrupt", "have / interrupted", "is / interrupting"], 0, "Always + continuous = queja."],
    ["«I've known him ___ we were children.»", ["for", "since", "ago", "during"], 1, "Since + punto de inicio (una oración en pasado)."],
    ["¿Cuál es correcta?", ["I've seen him yesterday.", "I saw him yesterday.", "I see him yesterday.", "I've been seeing him yesterday."], 1, "Yesterday es tiempo terminado: past simple."],
  ],
  tarjetas: [
    ["Posición de always, often, never", "Delante del verbo principal y detrás de be: «She often runs», «He is never late»."],
    ["Always + continuous", "Expresa queja: «You're always losing your keys!»."],
    ["Pregunta de sujeto", "Sin do / does: «Who lives here?», «What happened?»."],
    ["Respuesta corta", "Se repite el auxiliar: «Yes, I have», «No, she doesn't»."],
  ],
  glosario: [
    ["present simple", "Tiempo para rutinas, hábitos, verdades generales y horarios: «I walk», «she walks»."],
    ["present continuous", "am / is / are + -ing: lo que pasa ahora, lo temporal y los planes acordados."],
    ["present perfect", "have / has + participio: une pasado y presente (experiencias, resultados, duración)."],
    ["present perfect continuous", "have / has been + -ing: actividad que dura hasta ahora o acaba de terminar."],
    ["stative verb", "Verbo de estado (know, like, want, belong) que normalmente no va en continuous."],
    ["participle (participio)", "Tercera forma del verbo: worked, gone, written."],
    ["adverb of frequency", "Palabra que indica cada cuánto: always, usually, often, sometimes, never."],
    ["for", "Preposición que indica duración: for two hours, for ages."],
    ["since", "Indica el punto de inicio: since 2020, since Monday."],
    ["already", "Ya (antes de lo esperado), en afirmativas: «I've already eaten»."],
    ["yet", "Ya / todavía, en preguntas y negativas, al final: «Not yet»."],
    ["just", "Acabar de: «She's just left»."],
    ["short answer", "Respuesta corta con el auxiliar: «Yes, I do», «No, it hasn't»."],
    ["subject question", "Pregunta por el sujeto, sin do / does: «Who called?»."],
  ],
  situacion: {
    titulo: "Mi perfil para un intercambio",
    reto: "Tu instituto participa en un intercambio con un centro de Irlanda. Cada estudiante publica en la web del proyecto un perfil en inglés para que su familia de acogida le conozca: quién es, qué hace habitualmente, qué está haciendo estos meses y qué ha vivido hasta ahora.",
    pasos: ["Haz una lluvia de ideas en cuatro columnas: rutina, ahora / este trimestre, experiencias, cosas que llevas tiempo haciendo.", "Escribe un borrador de 150-180 palabras usando los cuatro presentes y al menos cinco marcadores (usually, at the moment, ever, since, for…).", "Intercambia el borrador con un compañero y revisad con la lista: -s, stative verbs, present perfect sin fechas terminadas.", "Graba un vídeo de un minuto presentando tu perfil, sin leer, con frases cortas.", "Publica el perfil y el vídeo en el espacio del aula y deja una pregunta en el perfil de dos compañeros."],
    producto: "Un perfil escrito de 150-180 palabras y un vídeo de presentación de un minuto.",
    evaluacion: ["Usa correctamente los cuatro presentes según su significado.", "Coloca bien los adverbios de frecuencia y los marcadores for, since, already, yet.", "El texto está bien organizado y es adecuado para el lector (familia de acogida).", "En el vídeo habla con fluidez y pronunciación comprensible."],
  },
  saberes: "Decret 175/2022 de Catalunya (Llengua estrangera, 4t d'ESO): comprensió i producció de textos orals i escrits sobre la vida quotidiana i experiències personals.",
  minutos: 100,
});
