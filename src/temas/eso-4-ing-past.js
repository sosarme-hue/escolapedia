// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Past tenses: past simple, continuous and perfect",
  minutos: 40,
  objetivos: ["Usar el past simple con verbos regulares e irregulares", "Combinar past simple y past continuous con when y while", "Usar el past perfect para lo que pasó antes de otro pasado"],
  claves: ["past simple", "irregular verbs", "past continuous", "when / while", "past perfect", "used to"],
  pregunta: {
    texto: "«When I arrived, the film started» y «When I arrived, the film had started». ¿Viste el principio de la película en las dos?",
    respuesta: "Solo en la primera. Con <b>past simple</b> las dos cosas pasan <mark>a la vez o seguidas</mark>: llegaste y empezó. Con <b>past perfect</b> («had started») la película <mark>ya había empezado antes</mark> de que llegaras: te perdiste el principio.",
  },
  bloques: [
    {
      html: `<h3>Past simple</h3><p>Para acciones <b>terminadas</b> en un momento del pasado: «I <i>visited</i> Rome <b>last year</b>». Los regulares añaden <mark>-ed</mark> (played, studied, stopped). Los irregulares hay que aprenderlos (go → <i>went</i>, see → <i>saw</i>). Negativa e interrogativa con <b>did</b> + infinitivo: «I didn't go», «Did you see it?». Va con <i>yesterday, ago, last…, in 2010</i>.</p>`,
      svg: L.tabla("Verbos irregulares frecuentes", ["Infinitive", "Past", "Participle"], [
        ["go", "went", "gone"], ["see", "saw", "seen"], ["take", "took", "taken"], ["write", "wrote", "written"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Past continuous</h3><p><b>was / were + verbo-ing</b>. Describe una acción <mark>en progreso</mark> en un momento del pasado: «At 9 pm I <b>was having</b> dinner». Sirve para describir el <b>escenario</b> de una historia: «The sun was shining and the birds were singing».</p>`,
      svg: L.frase("Past continuous: At 9 pm I was having dinner", [
        ["At 9 pm", "momento", "var(--leaf)"], ["I", "", "var(--line)"], ["was", "was/were", "var(--pen)"], ["having", "-ing", "var(--red)"], ["dinner.", "", "var(--line)"],
      ], "acción en progreso en el pasado"),
    },
    {
      html: `<h3>Una acción interrumpe a otra</h3><p>La acción larga va en <b>past continuous</b> y la que la interrumpe en <b>past simple</b>: «I was sleeping <mark>when</mark> the phone rang». Con <mark>while</mark> solemos introducir la acción larga: «<i>While</i> I was cooking, he arrived».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una acción larga, I was sleeping, interrumpida por una corta, the phone rang">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <path d="M16 110 H 244" stroke="var(--line)" stroke-width="3"/>
          <rect x="30" y="90" width="190" height="20" rx="6" fill="var(--pen)" opacity=".85"/>
          <text x="110" y="80" font-size="13" fill="var(--pen)">I was sleeping…</text>
          <path d="M160 40 V 120" stroke="var(--red)" stroke-width="4"/>
          <text x="160" y="32" font-size="13" fill="var(--red)">…the phone rang!</text>
          <text x="110" y="140" font-size="12" fill="var(--muted)">past continuous (larga)</text>
          <text x="190" y="160" font-size="12" fill="var(--red)">past simple (corta)</text>
        </g></svg>`,
    },
    {
      html: `<h3>Past perfect</h3><p><b>had + participio</b>. Es el «pasado del pasado»: una acción <mark>anterior</mark> a otra acción pasada. «When we got to the station, the train <b>had left</b>». Muy usado en historias con <i>before, after, already, by the time</i>.</p>`,
      svg: L.linea("Orden de acciones: primero el past perfect, después el past simple", [
        ["1.º", "the train had left (past perfect)", "var(--red)"],
        ["2.º", "we got to the station (past simple)", "var(--pen)"],
        ["now", "I'm telling the story", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Used to</h3><p>Para <b>hábitos o estados del pasado</b> que ya no ocurren: «I <mark>used to</mark> play with dolls» (ahora no). Negativa: «I didn't use to like vegetables». Es muy útil para comparar el pasado con el presente.</p>`,
      svg: L.dialogo("Used to: hábitos del pasado", [
        ["grandma", "I used to walk 5 km to school.", "var(--inf)"],
        ["you", "Now I take the bus!", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Tres pasados en una historia",
    svg: L.columnas("Past simple, past continuous y past perfect con ejemplos", [
      ["acción terminada", "PAST SIMPLE", ["I opened", "the door."], "var(--pen)"],
      ["acción en progreso", "PAST CONT.", ["It was", "raining."], "var(--leaf)"],
      ["antes de otro pasado", "PAST PERFECT", ["Someone had", "taken my bike!"], "var(--red)"],
    ]),
  },
  video: { id: "VLj-Dbz-CWk", titulo: "Past simple vs past continuous (pasado simple vs pasado continuo)", canal: "Clases de inglés en español. Gramática fácil.", vistas: 2063351, megusta: 0, busqueda: "past simple past continuous past perfect explicación" },
  quiz: [
    { q: "«I ___ my grandparents last weekend.»", o: ["visit", "visited", "have visited"], a: 1, e: "Momento terminado del pasado (last weekend): past simple." },
    { q: "Past simple de «write»:", o: ["writed", "wrote", "written"], a: 1, e: "Irregular: write – wrote – written." },
    { q: "«I ___ a shower when the lights went out.»", o: ["had", "was having", "have had"], a: 1, e: "Acción larga interrumpida: past continuous." },
    { q: "«When I got home, my brother ___ all the pizza.»", o: ["ate", "had eaten", "was eating"], a: 1, e: "Se la comió antes de que llegaras: past perfect." },
    { q: "«I ___ be afraid of the dark, but now I'm not.»", o: ["use to", "used to", "was used"], a: 1, e: "Hábito o estado pasado que ya no ocurre: used to." },
  ],
  examen: [
    { q: "«___ you go to the party?» «No, I didn't.»", o: ["Do", "Did", "Were"], a: 1, e: "Pregunta en past simple con did." },
    { q: "«___ I was walking home, I saw an accident.»", o: ["While", "Ago", "Since"], a: 0, e: "«While» introduce la acción larga." },
    { q: "Past perfect de «go»:", o: ["had went", "had gone", "has gone"], a: 1, e: "had + participio (gone)." },
  ],
  feynman: ["Cómo se forma el past simple regular e irregular", "Cuándo uso past continuous", "Cómo combino when y while", "Qué es el past perfect con un ejemplo"],
  mapa: mapa("PAST TENSES", "var(--eso)", [
    ["Past simple", "finished · -ed / irregular", "var(--pen)"],
    ["Past continuous", "was/were + -ing", "var(--leaf)"],
    ["Past perfect", "had + participle", "var(--red)"],
    ["Used to", "past habits", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Past simple: negativa", "didn't + infinitivo: «I didn't see it»."],
    ["Past continuous: estructura", "was / were + verbo-ing: «They were playing»."],
    ["When / while", "While + acción larga (continuous); when + acción corta (simple)."],
    ["Past perfect", "had + participio: acción anterior a otra del pasado."],
    ["Used to", "Hábitos o estados pasados que ya no ocurren: «I used to live in Vigo»."],
  ],
  familias: ["Pedidle que os cuente en inglés qué hizo ayer, usando cinco verbos irregulares.", "Preguntadle qué cosas «used to do» cuando era pequeño.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: tiempos de pasado para narrar experiencias y relatos (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Historia en cadena: cada alumno añade una frase con un tiempo de pasado distinto.", "Juego «Alibi»: interrogatorio en past continuous («What were you doing at 8 pm?»).", "Ordenar viñetas y narrarlas con past perfect."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: past tenses", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: English Grammar Today", url: "https://dictionary.cambridge.org/grammar/british-grammar/" },
  ],
  revisado: "2026-11-12",
};
