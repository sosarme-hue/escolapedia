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
