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
