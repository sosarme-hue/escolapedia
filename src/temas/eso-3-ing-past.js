// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Past simple and past continuous",
  minutos: 35,
  objetivos: ["Formar el past simple de verbos regulares e irregulares", "Formar el past continuous y saber para qué sirve", "Combinar los dos pasados con when y while para contar una historia"],
  claves: ["past simple", "-ed", "irregular verbs", "did", "past continuous", "when / while"],
  pregunta: {
    texto: "«I was having a shower when the phone rang.» En la misma frase hay dos pasados distintos. ¿Por qué no se usa el mismo para las dos acciones?",
    respuesta: "Porque no son iguales: la ducha era una acción <mark>larga, en progreso</mark> (past continuous) y el teléfono sonó de repente, una acción <mark>corta que la interrumpe</mark> (past simple). Combinar los dos pasados es la clave para contar historias en inglés.",
  },
  bloques: [
    {
      html: `<h3>Past simple: verbos regulares</h3><p>El past simple expresa acciones <b>terminadas</b> en un momento concreto del pasado: «I <i>visited</i> London <b>last summer</b>». Los verbos regulares añaden <mark>-ed</mark>: play → played. Reglas: si acaban en -e, solo <b>-d</b> (live → lived); consonante + y → <b>-ied</b> (study → studied); consonante-vocal-consonante con acento final, se dobla la consonante (stop → stopped). La forma es <b>igual para todas las personas</b>.</p>`,
      svg: L.tabla("Reglas para añadir -ed a los verbos regulares", ["Verbo", "Pasado"], [
        ["walk", "walked"], ["dance", "danced"], ["cry", "cried"], ["plan", "planned"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Past simple: verbos irregulares</h3><p>Muchos verbos muy frecuentes son <b>irregulares</b>: no siguen la regla y hay que aprenderlos de memoria. Por ejemplo: go → <b>went</b>, have → <b>had</b>, see → <b>saw</b>, buy → <b>bought</b>, eat → <b>ate</b>, take → <b>took</b>, write → <b>wrote</b>. El verbo <b>be</b> tiene dos formas: <mark>was</mark> (I, he, she, it) y <mark>were</mark> (you, we, they).</p>`,
      svg: L.tabla("Algunos verbos irregulares en pasado", ["Base", "Past"], [
        ["go", "went"], ["see", "saw"], ["buy", "bought"], ["write", "wrote"],
      ], "var(--red)"),
    },
    {
      html: `<h3>Negativas y preguntas con did</h3><p>En negativa y en pregunta se usa el auxiliar <mark>did / didn't</mark> para todas las personas, y el verbo principal vuelve a la <b>forma base</b>: «She <b>didn't go</b> to school» (no «didn't went»), «<b>Did</b> you <b>see</b> the match?» — «Yes, I did / No, I didn't». Con <i>be</i> no se usa did: «I <b>wasn't</b> tired», «<b>Were</b> they at home?».</p>`,
      svg: L.filas("Past simple: afirmativa, negativa e interrogativa", [
        ["+", "They went to the beach.", "var(--leaf)"], ["−", "They didn't go to the beach.", "var(--red)"], ["?", "Did they go to the beach?", "var(--pen)"],
      ], "did + forma base"),
    },
    {
      html: `<h3>Past continuous</h3><p>Se forma con <mark>was / were + verbo-ing</mark>: «At 8 o'clock I <b>was having</b> breakfast». Sirve para describir una acción <b>en progreso</b> en un momento del pasado, para dar el <b>escenario</b> de una historia («The sun <i>was shining</i> and the birds <i>were singing</i>») y para dos acciones largas a la vez con <b>while</b>: «I was studying while my sister was watching TV».</p>`,
      svg: L.frase("Past continuous: At 8 I was having breakfast", [
        ["At 8,", "momento", "var(--line)"], ["I", "", "var(--ink)"], ["was", "was / were", "var(--pen)"], ["having", "-ing", "var(--red)"], ["breakfast.", "", "var(--line)"],
      ], "acción en progreso en el pasado"),
    },
    {
      html: `<h3>Acción larga interrumpida</h3><p>La combinación más típica: una acción larga en <b>past continuous</b> es interrumpida por otra corta en <b>past simple</b>. Se usan <mark>when</mark> (normalmente delante de la acción corta) y <mark>while</mark> (delante de la larga): «I <i>was walking</i> home <b>when</b> I <i>saw</i> an accident» / «<b>While</b> I <i>was walking</i> home, I <i>saw</i> an accident».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: una barra larga de past continuous, I was walking, cortada por un rayo de past simple, I saw">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M16 110 H 244" stroke="var(--line)" stroke-width="3"/>
        <rect x="30" y="94" width="180" height="16" rx="6" fill="var(--pen)" opacity=".8"/>
        <path d="M128 50 L 118 82 L 132 82 L 122 112" fill="none" stroke="var(--red)" stroke-width="4" stroke-linejoin="round"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="120" y="40" font-size="13" fill="var(--red)">I saw (corta)</text><text x="120" y="136" font-size="13" fill="var(--pen)">I was walking (larga)</text><text x="130" y="164" font-size="12" fill="var(--muted)">past</text><text x="236" y="100" font-size="12" fill="var(--muted)">now</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Los dos pasados en una historia",
    svg: L.pasos("Cómo se usan los dos pasados para contar una historia", [
      ["Escenario", ["It was raining.", "(past continuous)"], "var(--pen)"],
      ["Interrupción", ["Suddenly, the", "lights went out."], "var(--red)"],
      ["Acciones", ["We lit a candle", "and waited."], "var(--leaf)"],
      ["Final", ["The lights came", "back at 10."], "var(--inf)"],
    ]),
  },
  video: { id: "_XP4le29BAM", titulo: "Pasado simple y pasado continuo: videotutorial de gramática inglesa", canal: "englishgrammarspot", vistas: 1914911, megusta: 0, busqueda: "past simple vs past continuous" },
  quiz: [
    { q: "El pasado de «study» es…", o: ["studyed", "studied", "studed"], a: 1, e: "Consonante + y → -ied." },
    { q: "El pasado de «buy» es…", o: ["buyed", "bought", "brought"], a: 1, e: "Es irregular; «brought» es de bring." },
    { q: "«___ you watch the film last night?»", o: ["Did", "Do", "Were"], a: 0, e: "Pregunta en past simple: did." },
    { q: "«They ___ playing chess at 6 pm.»", o: ["was", "were", "did"], a: 1, e: "They + were + -ing." },
    { q: "«I was sleeping ___ the alarm rang.»", o: ["while", "when", "during"], a: 1, e: "When delante de la acción corta." },
  ],
  examen: [
    { q: "«She ___ to the party.» (negativa)", o: ["didn't went", "didn't go", "doesn't went"], a: 1, e: "Didn't + forma base." },
    { q: "«While we ___ dinner, the cat jumped on the table.»", o: ["had", "were having", "was having"], a: 1, e: "Acción larga con we: were having." },
    { q: "«I ___ at home yesterday.»", o: ["was", "were", "did"], a: 0, e: "Be en pasado con I: was." },
  ],
  feynman: ["Cómo se forma el pasado de un verbo regular", "Por qué hay que memorizar los irregulares", "Para qué sirve el past continuous", "Cómo se usan when y while"],
  mapa: mapa("PAST TENSES", "var(--eso)", [
    ["Past simple", "-ed · irregulars · did", "var(--red)"],
    ["Be", "was · were", "var(--ink)"],
    ["Past continuous", "was / were + -ing", "var(--pen)"],
    ["Linkers", "when · while · then", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Past simple regular", "Verbo + -ed: played, lived, studied, stopped."],
    ["Negativa en past simple", "didn't + forma base: I didn't go."],
    ["Past continuous", "was / were + -ing: I was reading."],
    ["When", "Va normalmente delante de la acción corta: when the phone rang."],
    ["While", "Va delante de la acción larga: while I was sleeping."],
  ],
  familias: ["Pedidle que os cuente en inglés lo que hizo el fin de semana usando cinco verbos en pasado.", "Jugad a preguntar «What were you doing at…?» sobre distintas horas de ayer.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: pasado simple y continuo, verbos irregulares y conectores temporales en la narración (RD 217/2022, Lengua Extranjera 3º; nivel A2+ del MCER).",
    ideas: ["«Alibi game»: la clase interroga a sospechosos con «What were you doing at 9?».", "Contar una historia en cadena: cada alumno añade una frase en pasado.", "Bingo de verbos irregulares."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: past simple and past continuous", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/past-continuous-and-past-simple" },
    { t: "Cambridge Dictionary: past continuous", url: "https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Pronunciar bien la terminación -ed", "Usar expresiones de tiempo pasado y used to"],
  bloques: [
    { tras: "Past simple: verbos regulares", html: `<h3>La pronunciación de -ed</h3><p>La terminación <b>-ed</b> se pronuncia de tres maneras, y nunca como una sílaba «ed» completa salvo en un caso:</p>${L.tb(["Sonido", "Cuándo", "Ejemplos"], [["/t/", "tras sonidos sordos: p, k, s, sh, ch, f", "stopped, looked, washed, watched"], ["/d/", "tras sonidos sonoros y vocales", "played, lived, cleaned, opened"], ["/ɪd/", "solo tras t o d", "wanted, needed, visited, decided"]])}<p>Así, «watched» suena como /wɒtʃt/ (una sílaba) y «wanted» como /ˈwɒntɪd/ (dos sílabas). Un truco: si puedes decir el verbo sin añadir una sílaba, no la añadas.</p>` },
    { tras: "Negativas y preguntas con did", html: `<h3>Expresiones de tiempo pasado</h3><p>El past simple va con expresiones que señalan un <b>momento terminado</b>: <i>yesterday, last night, last week, last year, two days ago, in 2020, when I was a child</i>. Fíjate en dos detalles: se dice <mark>last night</mark> (no «the last night») y <b>ago</b> va detrás de la cantidad de tiempo: «three years <b>ago</b>» (hace tres años). Para preguntar cuándo pasó algo, <b>When did…?</b>: «When did you start school?» — «Ten years ago». Y para preguntar quién hizo algo, si <i>who</i> es el sujeto, no se usa did: «<b>Who broke</b> the window?».</p>` },
    { tras: "Acción larga interrumpida", html: `<h3>Used to: hábitos del pasado</h3><p>Para hablar de cosas que hacíamos habitualmente en el pasado y <mark>ya no hacemos</mark>, usamos <b>used to + forma base</b>: «I <b>used to play</b> with dolls when I was little» (antes jugaba; ahora no). Negativa: «I <b>didn't use to</b> like vegetables». Pregunta: «<b>Did</b> you <b>use to</b> have long hair?». También sirve para estados pasados: «There <b>used to be</b> a cinema here». No existe en presente: para hábitos actuales usamos el present simple con <i>usually</i>.</p>`, video: L.vid("MA3NFtLc22k", "Verbos irregulares: aprender todos en una canción", "Lingportal Online School of English", 10013409) },
    { tras: "Acción larga interrumpida", html: `<h3>Contar una historia</h3><p>Una buena narración en inglés combina los dos pasados. Empieza con el <b>escenario</b> en past continuous: «It was a cold winter evening. Snow <i>was falling</i> and I <i>was walking</i> home from school». Después, los <b>hechos principales</b> en past simple, ordenados con conectores: «<b>Suddenly</b>, I <i>heard</i> a strange noise. <b>First</b>, I <i>stopped</i>. <b>Then</b> I <i>turned</i> around and <i>saw</i> a small dog. It <i>was shaking</i>. <b>In the end</b>, I <i>took</i> it home». Conectores útiles: <mark>first, then, after that, suddenly, when, while, finally, in the end</mark>.</p>` },
    { tras: "Past simple: verbos irregulares", html: `<h3>There was / there were y could</h3><p>Para describir cómo era un lugar en el pasado usamos <mark>there was</mark> con singular o incontables y <mark>there were</mark> con plural: «<b>There was</b> a big tree in the garden», «<b>There were</b> lots of people at the concert». Negativa: <i>there wasn't / there weren't</i>; pregunta: «<b>Was there</b> a lift?». Para la capacidad en el pasado, <b>could / couldn't</b> + forma base: «When I was five, I <b>could</b> swim, but I <b>couldn't</b> read». Son muy útiles para describir el escenario de una historia o hablar de tu infancia: «When I was little, there <b>was</b> a park near my house and I <b>could</b> play there every afternoon».</p>` },
  ],
  ejemplos: [
    ["Completa con el pasado adecuado: «When I (arrive) ___ at the station, the train (leave) ___ .» (el tren estaba saliendo)", ["Llegar es una acción corta: past simple → arrived.", "Salir estaba en progreso en ese momento: past continuous → was leaving."], "When I arrived at the station, the train was leaving."],
    ["Pon en negativa y en pregunta: «Mark bought a new bike.»", ["Negativa: didn't + forma base de buy → didn't buy.", "Pregunta: Did + sujeto + forma base.", "Respuesta corta: Yes, he did / No, he didn't."], "Mark didn't buy a new bike. / Did Mark buy a new bike?"],
    ["Une con while: «I was cooking. My brother was setting the table.»", ["Las dos acciones son largas y simultáneas: las dos en past continuous.", "While puede ir al principio o en medio."], "While I was cooking, my brother was setting the table."],
  ],
  errores: [
    "Poner el verbo en pasado después de did: *Did you went? → Did you go?",
    "Añadir -ed a un verbo irregular: *goed, *buyed → went, bought.",
    "Confundir was y were: *They was → They were.",
    "Usar past continuous para una acción corta: *The phone was ringing once → The phone rang.",
    "Decir *the last week o *ago three years → last week, three years ago.",
  ],
  ejercicios: [
    ["Escribe el pasado de: try, stop, arrive, enjoy, carry.", "tried, stopped, arrived, enjoyed, carried."],
    ["Escribe el pasado de: begin, bring, come, drink, find, think.", "began, brought, came, drank, found, thought."],
    ["¿Cómo se pronuncia -ed en: watched, played, needed?", "watched /t/, played /d/, needed /ɪd/."],
    ["Completa: «I (not / see) ___ you at the concert.»", "didn't see."],
    ["Escribe la pregunta: (where / you / go / last summer)?", "Where did you go last summer?"],
    ["Completa: «At 10 pm yesterday we (watch) ___ a film.»", "were watching. Acción en progreso a una hora concreta."],
    ["Completa: «She (fall) ___ while she (run) ___ in the park.»", "fell, was running."],
    ["Corrige: «When I was opening the door, I was seeing a mouse.»", "When I opened the door, I saw a mouse. Las dos son acciones cortas."],
    ["Escribe dos frases con used to sobre cosas que hacías de pequeño.", "Por ejemplo: «I used to watch cartoons every morning.» / «I didn't use to like fish.»"],
    ["Escribe el inicio de una historia (3 frases): escenario en past continuous e interrupción en past simple.", "Por ejemplo: «It was raining and we were playing cards at home. Everybody was laughing. Suddenly, someone knocked at the door.»"],
  ],
  quiz: [
    ["«Wanted» se pronuncia con…", ["/t/", "/d/", "/ɪd/"], 2, "Tras t o d: /ɪd/."],
    ["«I met him two years ___.»", ["ago", "last", "before"], 0, "Cantidad de tiempo + ago."],
    ["«___ broke the window?»", ["Who", "Who did", "Did who"], 0, "Who como sujeto: sin did."],
    ["«I ___ have long hair.» (antes sí, ahora no)", ["used to", "use to", "was"], 0, "Used to + forma base."],
    ["«The sun ___ and the birds were singing.»", ["was shining", "shone", "shines"], 0, "Escenario: past continuous."],
  ],
  tarjetas: [
    ["Pronunciación de -ed", "/t/ (looked), /d/ (played) o /ɪd/ (wanted)."],
    ["Ago", "Hace (tiempo): three days ago."],
    ["Used to", "Hábitos pasados que ya no ocurren: I used to…"],
  ],
});
