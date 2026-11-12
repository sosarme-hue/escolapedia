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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escribir y pronunciar bien el pasado regular", "Contar una historia combinando los tiempos del pasado", "Distinguir used to, would y be used to"],
  bloques: [
    { tras: "Past simple", html: `<h3>Ortografía y pronunciación de -ed</h3>${L.tb(["Regla", "Ejemplo"], [["+ ed", "work → worked"], ["acabado en -e: + d", "live → lived"], ["consonante + y: -ied", "study → studied, try → tried"], ["consonante + vocal + consonante (tónica): doble consonante", "stop → stopped, plan → planned, prefer → preferred"]])}<p>La terminación <b>-ed</b> se pronuncia de tres formas: <b>/t/</b> tras sonidos sordos (<i>worked, watched, stopped</i>), <b>/d/</b> tras sonidos sonoros (<i>played, lived, cleaned</i>) y <b>/ɪd/</b> solo tras /t/ o /d/ (<i>wanted, needed, started</i>). Error típico: decir «work-ed» con dos sílabas.</p>` },
    { tras: "Past simple", html: `<h3>Negativas, preguntas e irregulares</h3><p>En negativa e interrogativa se usa el auxiliar <b>did</b> y el verbo vuelve a su forma base: «I <b>didn't go</b>», «<b>Did</b> you <b>see</b> it?» (nunca *didn't went). La excepción es <b>be</b>: «I <b>wasn't</b> there», «<b>Were</b> you tired?»</p><p>Los irregulares hay que memorizarlos, pero se agrupan por sonido:</p>${L.tb(["Grupo", "Ejemplos"], [["-ought / -aught", "buy → bought, think → thought, teach → taught, catch → caught"], ["i → a", "begin → began, drink → drank, swim → swam, sing → sang"], ["-ew", "know → knew, fly → flew, grow → grew, throw → threw"], ["iguales", "cut → cut, put → put, let → let, hit → hit"]])}` },
    { tras: "Past perfect", html: `<h3>Contar una historia con los tres pasados</h3><p>En un relato, cada tiempo tiene su papel:</p><ul><li><b>Past continuous</b>: el <b>escenario</b> y las acciones de fondo. «It was raining and people were running to their cars.»</li><li><b>Past simple</b>: los <b>hechos principales</b>, en orden. «Suddenly, a dog appeared and jumped on me.»</li><li><b>Past perfect</b>: lo que había pasado <b>antes</b>, para explicar. «It had escaped from a house nearby.»</li></ul><p>Con conectores de tiempo la historia gana fluidez: <i>at first, then, after that, suddenly, while, as soon as, eventually, in the end</i>. Este esquema es el que piden en los <i>narrative writings</i> de 4.º.</p>` },
    { tras: "Past perfect", html: `<h3>When: el orden cambia el significado</h3><p>Compara estas oraciones:</p><ul><li>«When I arrived, the film <b>started</b>.» Llegué y entonces empezó (una después de otra).</li><li>«When I arrived, the film <b>had started</b>.» Cuando llegué ya había empezado (me perdí el principio).</li><li>«When I arrived, they <b>were watching</b> the film.» Llegué en mitad de la película.</li></ul><p>El past perfect es obligatorio cuando el orden de los hechos no está claro por el contexto. Con <i>before</i> y <i>after</i>, que ya marcan el orden, a menudo basta el past simple: «After he <b>finished</b> / <b>had finished</b> his homework, he went out».</p>` },
    { tras: "Used to", html: `<h3>Used to, would y be used to</h3><p><b>Used to</b> sirve para hábitos y estados del pasado. <b>Would</b> también puede expresar hábitos pasados repetidos, típico al contar recuerdos, pero <b>no estados</b>: «Every summer we <b>would</b> go to the beach» ✓; «I <b>would</b> have long hair» ✗ → «I <b>used to</b> have long hair».</p><p>No lo confundas con <b>be used to + -ing</b>, que significa «estar acostumbrado a»: «I'<b>m used to getting</b> up early» (me he acostumbrado), y con <b>get used to</b>, «acostumbrarse»: «You'll <b>get used to living</b> in London». Fíjate: detrás de <i>to</i> va <b>-ing</b>, porque aquí <i>to</i> es una preposición.</p>` },
    { tras: "Used to", html: `<h3>Past perfect continuous</h3><p>Igual que existe el present perfect continuous, existe su versión en pasado: <b>had been + verbo-ing</b>. Expresa una actividad que duraba desde antes de un momento pasado y que a menudo explica una situación: «When I got home, my eyes were red because I <b>had been crying</b>», «She <b>had been waiting</b> for two hours when the bus finally arrived».</p><p>La diferencia con el past perfect simple es la misma que en presente: el simple destaca el resultado («I had written three emails»), y el continuous, la duración o la actividad («I had been writing emails all morning»). Es frecuente con <i>for</i> y <i>since</i>: «They <b>had been living</b> in Paris <b>for</b> ten years before they moved to Madrid».</p>` },
  ],
  videos: [
    ["Una acción interrumpe a otra", L.vid("VLj-Dbz-CWk", "Past simple vs past continuous", "Clases de inglés en español", 2063351)],
    ["Past perfect", L.vid("ZUpC0vuh1-E", "Cómo usar conjunciones con pasado perfecto y pasado simple", "Francisco Ochoa Inglés Fácil", 475935)],
  ],
  ejemplos: [
    ["Completa: «While I (walk) ___ home, I (find) ___ a wallet. Someone (drop) ___ it.»", ["«While» + acción larga de fondo: past continuous → was walking.", "La acción corta que ocurre en medio: past simple → found (irregular).", "Lo que había pasado antes de encontrarla: past perfect → had dropped."], "While I was walking home, I found a wallet. Someone had dropped it."],
    ["Pasa a negativa e interrogativa: «She bought a new laptop.»", ["Negativa: auxiliar did + not + verbo base: didn't buy.", "Interrogativa: Did + sujeto + verbo base: Did she buy…?", "El verbo pierde la forma de pasado porque did ya la lleva."], "She didn't buy a new laptop. / Did she buy a new laptop?"],
    ["Elige la forma correcta: «I (used to / would) love cartoons when I was a child.»", ["Love es un verbo de estado (stative verb).", "Would solo expresa acciones repetidas, no estados.", "Por tanto, used to."], "I used to love cartoons when I was a child."],
  ],
  errores: [
    "Usar el pasado después de did: *didn't went → didn't go.",
    "Pronunciar siempre la -ed como sílaba: worked /wɜːkt/, no «work-ed».",
    "Usar past continuous con stative verbs: *I was knowing → I knew.",
    "Olvidar el past perfect cuando un hecho es anterior a otro pasado.",
    "Confundir used to (antes solía) con be used to + -ing (estar acostumbrado).",
  ],
  ejercicios: [
    ["Escribe el pasado: stop, try, plan, live, enjoy.", "stopped, tried, planned, lived, enjoyed."],
    ["¿Cómo se pronuncia -ed en wanted, played y watched?", "wanted /ɪd/, played /d/, watched /t/."],
    ["Escribe el pasado de: think, swim, know, put, teach.", "thought, swam, knew, put, taught."],
    ["Corrige: «Did you saw the match?»", "Did you see the match? Tras did, el verbo va en forma base."],
    ["Completa: «The phone (ring) ___ while I (have) ___ a shower.»", "The phone rang while I was having a shower."],
    ["Completa: «When we got to the cinema, the film (already / start) ___.»", "had already started."],
    ["Explica la diferencia: «When she came, we had dinner» / «When she came, we were having dinner».", "En la primera, cenamos después de que llegara. En la segunda, ya estábamos cenando cuando llegó."],
    ["Corrige: «I would have a dog when I was little.»", "I used to have a dog when I was little. Have (tener) es un estado: con would no se puede."],
    ["Traduce: «Estoy acostumbrado a dormir poco.»", "I'm used to sleeping little (not sleeping much)."],
    ["Escribe tres frases de una historia usando past continuous, past simple y past perfect.", "Por ejemplo: «It was getting dark. We realised we had lost the map. Then we saw a light.» Escenario (continuous), hecho anterior (perfect), hecho principal (simple)."],
  ],
  quiz: [
    ["La -ed de «needed» se pronuncia…", ["/ɪd/", "/t/", "/d/"], 0, "Tras /d/: sílaba extra."],
    ["«___ you go out last night?»", ["Did", "Were", "Have"], 0, "Auxiliar did + forma base."],
    ["Past simple de «catch»:", ["caught", "catched", "cought"], 0, "Irregular del grupo -aught."],
    ["«I'm used to ___ early.»", ["getting up", "get up", "got up"], 0, "Be used to + -ing."],
    ["«When I arrived, they ___ (ya se habían ido).»", ["had left", "left", "were leaving"], 0, "Pasado del pasado."],
  ],
  tarjetas: [
    ["Pronunciación de -ed", "/t/ worked, /d/ played, /ɪd/ wanted."],
    ["Did + forma base", "I didn't go / Did you go? (nunca *didn't went)."],
    ["Be used to + -ing", "Estar acostumbrado: I'm used to waking up early."],
  ],
});
