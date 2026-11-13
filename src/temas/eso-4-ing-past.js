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

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["La noche del apagón", `<p>«It was a cold night in February. My family <i>was watching</i> a film and my little brother <i>was doing</i> his homework when suddenly all the lights <i>went out</i>. We <i>looked</i> out of the window: the whole street was dark. Somebody <i>had cut</i> an electricity cable while they <i>had been working</i> on the road all afternoon.»</p><p>Así empieza la historia que Daniel, un alumno de 4º, escribió para un concurso de relatos en inglés. Fíjate en cómo funciona: el <b>past continuous</b> pinta la escena (qué estaba pasando), el <b>past simple</b> cuenta lo que ocurre de repente, y el <b>past perfect</b> explica lo que había pasado antes y causó el problema. Cada tiempo verbal tiene un papel, como los actores de una obra.</p><p>Contar cosas que pasaron es una de las tareas más frecuentes cuando hablamos: una anécdota del fin de semana, un viaje, un recuerdo de la infancia, una noticia. En este tema repasarás los pasados del inglés, aprenderás a ordenar los hechos con claridad y a usar <i>used to</i> y <i>would</i> para hablar de cómo eran las cosas antes. Al final escribirás tu propio relato.</p>`],
  mas: [
    ["<h3>Past simple</h3>", `<p>El past simple es el tiempo principal de cualquier narración y de las biografías: «Frida Kahlo <i>was</i> born in 1907. She <i>started</i> painting after an accident». Va con expresiones de <b>tiempo terminado</b>: <i>yesterday, last week, in 2019, two days ago, when I was a child</i>. Recuerda que el verbo <b>be</b> tiene dos formas: <i>was</i> (I, he, she, it) y <i>were</i> (you, we, they). En el habla informal también se oye «If I was you», pero en exámenes y textos formales es más seguro usar las formas de la tabla.</p>`],
    ["<h3>Past continuous</h3>", `<p>Como en presente, los <b>verbos de estado</b> no suelen ir en continuous: «I <i>knew</i> the answer», no «I was knowing». Y hay una diferencia útil entre una hora exacta con continuous y con simple: «At eight o'clock I <b>was having</b> breakfast» (ya había empezado y seguía) frente a «At eight o'clock I <b>had</b> breakfast» (empecé a las ocho). Dos acciones largas simultáneas van las dos en continuous: «While I <i>was cooking</i>, my sister <i>was setting</i> the table».</p>`],
    ["<h3>Past perfect</h3>", `<p>No hace falta usar el past perfect si el orden ya está claro por las palabras o por el orden de la frase: «I <b>finished</b> my homework and then I <b>went</b> out» es perfecto. Se vuelve necesario cuando contamos los hechos <b>desordenados</b>, saltando hacia atrás: «I went out. I <b>had finished</b> my homework earlier». La contracción <i>'d</i> puede ser <i>had</i> o <i>would</i>: «She'd left» (had + participio) / «She'd leave» (would + infinitivo).</p>`],
    ["<h3>Used to</h3>", `<p>La pregunta se forma con <b>did</b> y el verbo pierde la -d: «<b>Did</b> you <b>use to</b> wear glasses?», «I didn't <b>use to</b> like fish». Para el presente no existe «use to»: para hábitos actuales se usa el present simple con <i>usually</i>: «I usually walk to school», nunca «I use to walk». Es uno de los errores más frecuentes de los hispanohablantes, que traducen literalmente «suelo».</p>`],
    ["<h3>Una acción interrumpe a otra</h3>", `<p>También se usa <b>as</b> con el sentido de «mientras / justo cuando»: «<i>As</i> I was leaving, the phone rang». Y <b>just as</b> marca que la interrupción ocurrió en el momento exacto: «<i>Just as</i> we were sitting down, the fire alarm went off». Fíjate en la coma: cuando la oración con <i>when</i> o <i>while</i> va delante, se separa con coma; si va detrás, no.</p>`],
    ["<h3>Past perfect continuous</h3>", `<p>Un ejemplo con los dos tiempos juntos: «When the referee stopped the match, the players <b>had been playing</b> for ninety minutes and they <b>had scored</b> three goals». La primera parte destaca la duración; la segunda, el resultado contado. Igual que en presente, los verbos de estado no admiten esta forma: «I <b>had known</b> him for years», no «had been knowing».</p>`],
    ["<h3>When: el orden cambia el significado</h3>", `<p>Con <b>after</b> y <b>before</b> el orden ya queda claro por la conjunción, así que el past perfect es opcional: «After she <b>had finished</b> / <b>finished</b> her exams, she went on holiday». En cambio, con <b>when</b> el tiempo verbal es lo único que nos dice qué pasó primero, y por eso hay que elegirlo con cuidado. Lee siempre la frase completa y pregúntate: ¿qué ocurrió antes?</p>`],
  ],
  svgs: [
    ["<h3>Ortografía y pronunciación de -ed</h3>", "Pronunciación de la terminación -ed", [["/t/", "worked · watched · stopped"], ["/d/", "played · lived · called"], ["/ɪd/ tras t o d", "wanted · needed · decided"]], "tres sonidos de -ed"],
    ["<h3>Negativas, preguntas e irregulares</h3>", "Negativas y preguntas en past simple con did", [["+", "She went to Paris."], ["−", "She didn't go to Paris."], ["?", "Did she go to Paris?"]], "did + forma base"],
    ["<h3>Contar una historia con los tres pasados</h3>", "Papel de cada pasado en una historia", [["Past continuous", "escenario: It was raining."], ["Past simple", "hechos: A dog appeared."], ["Past perfect", "antes: It had escaped."]]],
    ["<h3>When: el orden cambia el significado</h3>", "Tres significados de when según el tiempo verbal", [["the film started", "llegué y luego empezó"], ["the film had started", "ya había empezado"], ["they were watching it", "llegué en mitad"]], "When I arrived…"],
    ["<h3>Used to, would y be used to</h3>", "Used to, would y be used to", [["used to + inf.", "hábitos y estados pasados"], ["would + inf.", "solo hábitos repetidos"], ["be used to + -ing", "estar acostumbrado a"]]],
    ["<h3>Past perfect continuous</h3>", "Past perfect continuous: had been + -ing", [["Estructura", "had been + -ing"], ["Uso", "duración antes de otro pasado"], ["Ejemplo", "I had been crying."]]],
  ],
  bloques: [
    { tras: "<h3>Negativas, preguntas e irregulares</h3>", html: `<h3>Expresiones de tiempo en pasado</h3><p>Las expresiones temporales son las mejores pistas para elegir tiempo verbal. Con el past simple usamos:</p><ul><li><b>ago</b>, que va <mark>detrás</mark> del periodo: «two years <b>ago</b>», «a long time <b>ago</b>» (no «ago two years», como en español «hace dos años»).</li><li><b>last</b> sin artículo: «<b>last</b> night, <b>last</b> summer, <b>last</b> Monday» (no «the last summer» con este sentido).</li><li><b>in</b> con años, meses y siglos: «in 2010, in May, in the 19th century»; <b>on</b> con días y fechas: «on Friday, on 3rd May»; <b>at</b> con horas: «at six».</li><li><b>during</b> + sustantivo («during the holidays») y <b>for</b> + periodo («I lived there <b>for</b> three years», y ya no vivo allí).</li></ul><p>Cuidado con <i>for</i>: con past simple indica una duración ya terminada; con present perfect, una que llega hasta hoy. «I <b>lived</b> in Paris for two years» (ahora vivo en otro sitio) / «I'<b>ve lived</b> in Paris for two years» (sigo allí). Y para preguntar por el momento se usa <b>When…?</b> o <b>What time…?</b>, nunca <i>How long ago</i> con present perfect.</p>`, svg: ["Expresiones de tiempo con past simple", [["ago (detrás)", "two years ago"], ["last (sin the)", "last night · last summer"], ["in / on / at", "in 2010 · on Friday · at six"], ["for (terminado)", "lived there for 3 years"]]] },
    { tras: "<h3>Una acción interrumpe a otra</h3>", html: `<h3>Otros usos del past continuous</h3><p>Además de describir escenas e interrupciones, el past continuous tiene usos que suavizan lo que decimos:</p><ul><li><b>Peticiones educadas</b>: «I <b>was wondering</b> if you could help me» es más cortés que «Can you help me?». Es muy útil en emails formales.</li><li><b>Planes que no se cumplieron</b>, con <i>was / were going to</i>: «I <b>was going to</b> call you, but my phone died». También con <i>was thinking of</i>: «We <b>were thinking of</b> going to the beach, but it rained».</li><li><b>Hábitos molestos del pasado</b> con <i>always</i>: «My old neighbour <b>was always</b> playing loud music», igual que en presente expresa queja.</li></ul><p>En las historias, el past continuous también sirve para <mark>crear suspense</mark>: frena la acción y hace que el lector espere lo que va a ocurrir. «I was walking along the beach. The wind was blowing and the waves were getting bigger…». Después, un past simple rompe la calma: «Then I saw something in the water».</p>`, svg: ["Usos que suavizan con el past continuous", [["Petición educada", "I was wondering if…"], ["Plan que no salió", "I was going to call you."], ["Queja del pasado", "He was always shouting."]]] },
    { html: `<h3>Conectores para narrar</h3><p>Una buena historia no es una lista de verbos en pasado: necesita <b>conectores de tiempo</b> que guíen al lector. Para empezar: <i>One day…, It all started when…, A few years ago…</i>. Para seguir la secuencia: <i>First, Then, Next, After that, Later</i>. Para la simultaneidad: <i>while, as, meanwhile</i>. Para lo inmediato: <b>as soon as</b> («As soon as I opened the door, the dog ran out») y <b>suddenly</b>. Para cerrar: <i>Finally, In the end, Eventually</i>.</p><p>Dos conectores piden past perfect con frecuencia: <b>by the time</b> («By the time the police arrived, the thieves <b>had escaped</b>») y <b>before / after</b> cuando queremos destacar el orden. Ojo con la diferencia entre <b>in the end</b> (al final, tras dificultades) y <b>at the end of</b> (al final de algo concreto: <i>at the end of the film</i>). Y <b>eventually</b> no es «eventualmente»: significa «finalmente, después de mucho tiempo».</p><p>Varía los conectores: usar <i>then</i> en cada frase hace el texto monótono. Combina oraciones con <i>when</i> y <i>while</i> y empieza algunas frases con una expresión de tiempo.</p>`, svg: ["Conectores para ordenar una historia", [["Empezar", "One day… · It all started…"], ["Seguir", "then · after that · as soon as"], ["Antes de", "by the time + past perfect"], ["Terminar", "in the end · eventually"]]] },
    { html: `<h3>Los pasados en biografías y noticias</h3><p>En una <b>biografía</b> los datos se ordenan por fechas y casi todo va en past simple: «Marie Curie <i>was born</i> in Warsaw in 1867. She <i>moved</i> to Paris in 1891, where she <i>studied</i> physics». El past perfect aparece para volver atrás: «By 1911 she <i>had won</i> two Nobel Prizes». Y <i>used to</i> describe su vida cotidiana: «As a child, she <i>used to</i> read for hours».</p><p>En una <b>noticia</b>, el titular suele ir en presente o en present perfect («Fire destroys old factory», «Scientists have discovered…») y después el cuerpo cuenta los detalles en pasado: «The fire <i>started</i> at 3 am. Firefighters <i>were working</i> for six hours. Nobody <i>was</i> hurt». La pasiva en pasado también es habitual: «The building <i>was built</i> in 1920».</p><p>Lee noticias breves en inglés para principiantes (por ejemplo, las secciones para jóvenes de medios británicos): verás estos tiempos repetirse una y otra vez y te acostumbrarás a su orden natural.</p>`, svg: ["Pasados en biografías y noticias", [["Biografía", "past simple con fechas"], ["Volver atrás", "By 1911 she had won…"], ["Titular", "presente: Fire destroys…"], ["Cuerpo", "past simple y continuous"]]] },
  ],
  grupos: [4, 3, 3, 3, 2],
  ejemplos: [
    ["Ordena y une con by the time: «The guests arrived.» / «We cleaned the house.»", ["Primero limpiamos y después llegaron: la acción anterior va en past perfect.", "By the time introduce la acción posterior en past simple."], "By the time the guests <b>arrived</b>, we <b>had cleaned</b> the house."],
    ["Corrige: «Two years ago I have visited London and I use to go there every summer now.»", ["Two years ago es tiempo terminado: past simple, visited.", "Para hábitos del presente no existe «use to»: present simple con usually."], "Two years ago I <b>visited</b> London, and now I <b>usually go</b> there every summer."],
    ["Haz más educada esta petición en un email: «Can you send me the timetable?»", ["Usamos el past continuous de wonder para suavizar.", "Detrás va if + could."], "I <b>was wondering if you could</b> send me the timetable."],
  ],
  errores: ["Poner ago delante, como en español: «ago two years» ✗ → «two years ago» ✓."],
  niveles: "bbbbmmmmaa",
  ejercicios: [
    ["b", "Completa con was o were: «We ___ at home. My sister ___ in her room.»", "We <b>were</b> at home. My sister <b>was</b> in her room."],
    ["b", "Escribe la negativa: «They played tennis yesterday.»", "They <b>didn't play</b> tennis yesterday. Did + forma base."],
    ["b", "Completa con in, on o at: a) ___ 2015 b) ___ Monday c) ___ seven o'clock d) ___ July.", "a) in b) on c) at d) in."],
    ["b", "Completa con el past continuous: «At 10 pm yesterday I (watch) ___ a series.»", "I <b>was watching</b> a series. Acción en progreso a una hora concreta."],
    ["b", "Escribe el past perfect: «She (already / leave) ___ when I called.»", "She <b>had already left</b>."],
    ["b", "Escribe la pregunta: «I used to have long hair.»", "<b>Did you use to have</b> long hair? En preguntas, use sin -d."],
    ["b", "Ordena: «ago / I / to / moved / three / Valencia / years»", "I moved to Valencia three years ago."],
    ["b", "Escribe el pasado de: begin, bring, choose, fall, feel.", "began, brought, chose, fell, felt."],
    ["m", "Completa: «While I (wait) ___ for the bus, it (start) ___ to rain.»", "While I <b>was waiting</b>, it <b>started</b> to rain. Acción larga + interrupción."],
    ["m", "Completa con by the time: «___ we got to the stadium, the match (finish) ___.»", "<b>By the time</b> we got to the stadium, the match <b>had finished</b>."],
    ["m", "Elige: «I (was going to / used to) phone you, but I forgot.»", "<b>was going to</b>: un plan que no se cumplió."],
    ["m", "Une con as soon as: «She heard the news. She called her mother.»", "<b>As soon as</b> she heard the news, she called her mother."],
    ["m", "Elige: «When the teacher came in, the students (talked / were talking), so she shouted.»", "<b>were talking</b>: ya estaban hablando cuando entró."],
    ["m", "Completa con past perfect continuous: «He was out of breath because he (run) ___.»", "He <b>had been running</b>. Actividad que explica un estado pasado."],
    ["m", "Elige: «In the end / At the end of the film, the hero dies.»", "<b>At the end of</b> the film: al final de algo concreto."],
    ["m", "Reescribe con would si es posible: a) «I used to have a bike.» b) «We used to visit our cousins every Sunday.»", "a) No es posible: have es un estado. b) We <b>would visit</b> our cousins every Sunday (hábito repetido)."],
    ["m", "Completa con at the end o in the end: «We argued for hours, but ___ we agreed.»", "<b>In the end</b>: al final, tras dificultades."],
    ["m", "Completa con ago, for o during: «I stayed in a hostel ___ the holidays. I left it two weeks ___. I was there ___ ten days.»", "during the holidays · two weeks ago · for ten days."],
    ["a", "Escribe el principio de una historia (50 palabras) que empiece con «It was a dark and stormy night» y use los tres pasados.", "Modelo: «It was a dark and stormy night. The wind was howling and rain was hitting the windows. I was reading in bed when I heard a knock at the door. I opened it, but nobody was there. Somebody had left a small box on the doorstep.»"],
    ["a", "Traduce: «Cuando llegué al aeropuerto, el avión ya había despegado.»", "When I got to the airport, the plane <b>had already taken off</b>."],
    ["a", "Explica la diferencia: «I lived in London for a year» / «I've lived in London for a year».", "La primera: ya no vivo allí (past simple, periodo terminado). La segunda: sigo viviendo allí (present perfect)."],
    ["a", "Corrige los errores: «Last summer I was going to the beach every day. One day, while I swam, I was seeing a jellyfish.»", "Last summer I <b>went</b> (o <b>used to go</b>) to the beach every day. One day, while I <b>was swimming</b>, I <b>saw</b> a jellyfish."],
    ["a", "Escribe tres frases comparando tu vida a los 7 años con la de ahora usando used to y didn't use to.", "Ejemplo: «I used to watch cartoons every afternoon, but now I prefer series.» «I didn't use to like vegetables.» «I used to be afraid of dogs.»"],
    ["a", "Transforma en una frase con past perfect continuous: «Ana started waiting at 5. The train arrived at 6.»", "Ana <b>had been waiting for an hour</b> when the train arrived."],
    ["a", "Escribe un titular y dos frases de noticia sobre un hecho inventado en tu ciudad.", "Ejemplo: «Local students win robotics prize.» «A team from our school won the national robotics competition last Saturday. They had been working on their robot for six months.»"],
    ["a", "Explica la diferencia: «When the police arrived, the thief ran away» / «…the thief had run away».", "En la primera, el ladrón huyó al llegar la policía (una cosa después de otra). En la segunda, ya se había escapado antes de que llegaran."],
  ],
  cuartas: ["visits", "writen", "am having", "has eaten", "uses to", "/ed/", "Was", "catches", "to get up", "has left", "Does", "During", "had goed"],
  quiz: [
    ["«I met my best friend ten years ___.»", ["ago", "before", "since", "for"], 0, "Ago va detrás del periodo con past simple."],
    ["«___ summer we went to Ireland.»", ["The last", "Last", "In last", "At last"], 1, "Last sin artículo."],
    ["«At 8 o'clock I ___ breakfast, so I couldn't answer.»", ["had", "was having", "have had", "had had"], 1, "Acción en progreso a una hora concreta."],
    ["«By the time we arrived, the shop ___.»", ["closed", "has closed", "had closed", "was closing"], 2, "By the time + acción anterior en past perfect."],
    ["«I ___ call you, but I fell asleep.»", ["was going to", "used to", "would", "had"], 0, "Plan que no se cumplió."],
    ["¿Qué frase es incorrecta?", ["I used to have a cat.", "I would have a cat.", "We would play in the park.", "I didn't use to like fish."], 1, "Would no expresa estados del pasado."],
    ["«___ she opened the door, the cat ran out.»", ["As soon as", "During", "By", "Ago"], 0, "As soon as = en cuanto."],
    ["«Her eyes were red. She ___.»", ["had been crying", "has cried", "cries", "was cry"], 0, "Actividad anterior que explica un estado pasado."],
    ["«I'm used to ___ in the city.»", ["live", "living", "lived", "lives"], 1, "Be used to + -ing."],
    ["«I was ___ if you could help me.»", ["wondering", "wonder", "wondered", "to wonder"], 0, "Petición educada: was wondering if…"],
  ],
  examen: [
    ["«While they ___ tennis, it started to rain.»", ["played", "were playing", "had played", "play"], 1, "Acción larga interrumpida."],
    ["«She was tired because she ___ all day.»", ["has worked", "had been working", "works", "is working"], 1, "Duración anterior a un momento pasado."],
    ["«___ you use to play the piano?»", ["Do", "Did", "Were", "Had"], 1, "Pregunta con did + use to."],
    ["«After a long journey, we ___ arrived at the hotel.»", ["eventually", "eventual", "at the end", "lastly ago"], 0, "Eventually = finalmente, tras mucho tiempo."],
    ["«I ___ in Rome for two years, but now I live in Madrid.»", ["have lived", "lived", "live", "am living"], 1, "Periodo terminado: past simple."],
  ],
  tarjetas: [
    ["Ago", "Va detrás: «three days ago», con past simple."],
    ["By the time", "By the time + past simple, past perfect: «By the time I arrived, they had left»."],
    ["Was going to", "Plan que no se cumplió: «I was going to call you, but…»."],
    ["Eventually", "Significa «finalmente», no «eventualmente»."],
  ],
  glosario: [
    ["past simple", "Tiempo de las acciones terminadas en un momento concreto del pasado: «I visited»."],
    ["past continuous", "was / were + -ing: acción en progreso en el pasado o escenario de una historia."],
    ["past perfect", "had + participio: acción anterior a otra acción pasada."],
    ["past perfect continuous", "had been + -ing: actividad que duraba hasta un momento del pasado."],
    ["used to", "Hábitos o estados del pasado que ya no ocurren: «I used to live in Lugo»."],
    ["would (hábito)", "Hábito repetido del pasado, típico en recuerdos; no sirve para estados."],
    ["be used to + -ing", "Estar acostumbrado a: «I'm used to waking up early»."],
    ["irregular verb", "Verbo que no forma el pasado con -ed: go → went → gone."],
    ["ago", "Hace (tiempo); va detrás del periodo: «two years ago»."],
    ["by the time", "Para cuando: suele llevar past perfect en la otra oración."],
    ["as soon as", "En cuanto, nada más."],
    ["eventually", "Finalmente, al cabo de un tiempo."],
    ["narrative", "Texto que cuenta una historia ordenada en el tiempo."],
    ["backstory", "Lo que había pasado antes de la historia; se cuenta con past perfect."],
    ["time expression", "Expresión que sitúa la acción: last week, in 2019, at five."],
  ],
  situacion: {
    titulo: "Relato para un concurso: «The day everything changed»",
    reto: "La biblioteca municipal organiza un concurso de relatos breves en inglés para jóvenes. El tema es «The day everything changed». Tienes que escribir una historia de 180-220 palabras, real o inventada, que enganche al lector desde la primera línea.",
    pasos: ["Piensa la historia en tres momentos: situación inicial, el hecho que lo cambia todo y el final.", "Escribe una lista de verbos irregulares y conectores de tiempo que vas a necesitar.", "Redacta el borrador usando past continuous para la escena, past simple para los hechos y past perfect para lo que había pasado antes.", "Revisa en pareja con una lista: tiempos verbales, conectores variados, puntuación de when / while.", "Pasa el texto a limpio, ponle título y léelo en voz alta en un pequeño grupo para votar el más emocionante."],
    producto: "Un relato de 180-220 palabras con título, preparado para presentar al concurso.",
    evaluacion: ["Usa los tres pasados (y used to si encaja) con su función correcta.", "Ordena los hechos con conectores variados y claros.", "La historia tiene un principio que engancha, un desarrollo y un final.", "Ortografía de los pasados regulares e irregulares sin errores."],
  },
  saberes: "Decret 175/2022 de Catalunya (Llengua estrangera, 4t d'ESO): producció de textos narratius i ús de les formes verbals de passat.",
  minutos: 110,
});
