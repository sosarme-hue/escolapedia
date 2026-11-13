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

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["La noche del apagón", `<p>Una noche de invierno, Hugo estaba haciendo los deberes cuando de repente se fue la luz en todo el barrio. Al día siguiente su profesora de inglés pidió a la clase que contara esa noche en inglés, y Hugo escribió: <i>«I was doing my homework and my sister was watching TV. Suddenly the lights went out. We found some candles, my dad made hot chocolate and we played cards until midnight.»</i></p><p>Fíjate en cómo funciona el relato. Lo que <b>estaba pasando</b> cuando llegó el apagón (el fondo de la escena) va en <b>past continuous</b>: <i>was doing, was watching</i>. Las acciones que hacen avanzar la historia, una detrás de otra, van en <b>past simple</b>: <i>went out, found, made, played</i>.</p><p>Esta es la base de cualquier narración en inglés, desde un mensaje a un amigo hasta una novela. Pero para escribirla bien hay que dominar muchos detalles: los verbos irregulares, la pronunciación de la terminación -ed, el auxiliar <i>did</i> en las preguntas, la diferencia entre <i>when</i> y <i>while</i> o la expresión <i>used to</i> para hablar de cómo eran las cosas antes. En este tema vas a trabajarlos todos para poder contar tus propias historias con claridad.</p>`],
  mas: [
    ["<h3>There was / there were y could</h3>", `<p>En negativa y pregunta, <i>there was / there were</i> funcionan como el verbo be: «There <b>wasn't</b> any milk», «<b>Were there</b> many people?» «Yes, there <b>were</b>.» Con sustantivos incontables (<i>water, money, time, information</i>) se usa siempre el singular: «There <b>was</b> a lot of traffic». Y para hablar de capacidades del pasado, además de <i>could</i>, puedes usar <i>was / were able to</i> cuando alguien consiguió hacer algo concreto en una situación difícil: «The fire was big, but everybody <b>was able to</b> escape».</p>`],
    ["<h3>Past simple: verbos regulares</h3>", `<p>El past simple es el tiempo de las <b>biografías</b> y de los <b>hechos históricos</b>: «Columbus <i>arrived</i> in America in 1492», «Marie Curie <i>discovered</i> radium». Siempre que digas cuándo pasó algo que ya terminó, este es el tiempo adecuado.</p>`],
    ["<h3>Past simple: verbos regulares</h3>", `<p>Una gran ventaja del past simple es que tiene <b>la misma forma para todas las personas</b>: <i>I played, you played, she played, they played</i>. No hay -s en la tercera persona ni cambios de ningún tipo. En español, en cambio, el pasado cambia con cada persona (jugué, jugaste, jugó…), así que en inglés solo tienes que aprender una forma por verbo.</p>`],
    ["<h3>Past simple: verbos irregulares</h3>", `<p>Para memorizarlos es útil agruparlos por parecidos: los que <b>no cambian</b> (<i>cut → cut, put → put, let → let, hit → hit</i>), los que acaban en <b>-ought / -aught</b> (<i>buy → bought, think → thought, bring → brought, teach → taught, catch → caught</i>), los que cambian <b>i → a</b> (<i>drink → drank, swim → swam, begin → began, sing → sang</i>) y los que cambian <b>ee → e</b> o <b>ea → e</b> (<i>meet → met, feel → felt, leave → left, read → read</i>, que se escribe igual pero se pronuncia /red/). El verbo <b>be</b> es el único con dos formas: <i>was</i> (I, he, she, it) y <i>were</i> (you, we, they).</p>`],
    ["<h3>Negativas y preguntas con did</h3>", `<p>El verbo <b>be</b> no usa did: la negativa y la pregunta se hacen con el propio verbo: «I <b>wasn't</b> at home», «<b>Were</b> you tired?». Tampoco se usa did con <i>could</i>: «I <b>couldn't</b> sleep», «<b>Could</b> you see the stage?». Las respuestas cortas siguen el mismo modelo que en presente: «Did you like it?» «Yes, I <b>did</b>. / No, I <b>didn't</b>.» «Was it expensive?» «No, it <b>wasn't</b>.»</p>`],
    ["<h3>Past continuous</h3>", `<p>Las preguntas y negativas se forman con el propio <b>was / were</b>: «<b>Was</b> it raining?», «They <b>weren't</b> listening». Igual que en presente, los verbos de estado no suelen ir en continuous: se dice «I <b>knew</b> the answer», no «I was knowing». El past continuous también describe acciones que estaban en marcha a una <b>hora concreta</b> del pasado: «At nine o'clock last night I <b>was having</b> a shower».</p>`],
    ["<h3>Acción larga interrumpida</h3>", `<p>Si las dos acciones van en past simple, cambia el significado: ya no hay interrupción, sino una <b>secuencia</b>. «When the phone rang, I <b>was having</b> dinner» (estaba cenando y sonó) frente a «When the phone rang, I <b>answered</b> it» (primero sonó y después contesté). Por eso elegir bien el tiempo es esencial para que el lector entienda el orden de los hechos.</p>`],
    ["<h3>Expresiones de tiempo pasado</h3>", `<p>Cuidado con <b>last</b> y <b>ago</b>, que no llevan preposición: se dice «<b>last</b> Monday» (no «on last Monday») y «three days <b>ago</b>» (no «before three days»). También son útiles <i>the day before yesterday</i> (anteayer), <i>in the 90s</i>, <i>when I was a child</i> y los conectores de secuencia <i>first, then, after that, later, finally</i>.</p>`],
    ["<h3>Contar una historia</h3>", `<p>Un buen relato se organiza en tres partes. En la <b>introducción</b> presentas cuándo, dónde y quién (con past continuous y <i>there was / there were</i> para describir la escena). En el <b>desarrollo</b> cuentas los hechos en orden con past simple y conectores (<i>suddenly, then, after that</i>). En el <b>final</b> explicas cómo terminó y cómo te sentiste: «In the end, we laughed a lot. It was the best night of the year».</p>`],
    ["<h3>Used to: hábitos del pasado</h3>", `<p>La negativa y la pregunta se forman con did, y entonces <b>use</b> pierde la -d: «I <b>didn't use to</b> like vegetables», «<b>Did</b> you <b>use to</b> play with dolls?». Used to solo existe en pasado: para hábitos actuales usamos el present simple con <i>usually</i>. Y no se usa para una sola acción ni para decir cuántas veces: «I went to Rome three times», no «I used to go to Rome three times».</p>`],
  ],
  svgs: [
    ["<h3>La pronunciación de -ed</h3>", "Los tres sonidos de la terminación -ed", [["/t/", "worked · watched · stopped"], ["/d/", "played · lived · opened"], ["/ɪd/", "wanted · needed · decided"]], "tras t o d: /ɪd/"],
    ["<h3>There was / there were y could</h3>", "Describir el pasado con there was, there were y could", [["there was", "There was a storm."], ["there were", "There were two dogs."], ["could / couldn't", "I couldn't sleep."]]],
    ["<h3>Expresiones de tiempo pasado</h3>", "Expresiones de tiempo del past simple", [["yesterday", "yesterday morning"], ["last", "last night · last week"], ["ago", "two days ago"], ["in", "in 2019 · in May"]], "sin preposición: last, ago"],
    ["<h3>Used to: hábitos del pasado</h3>", "Used to: antes sí, ahora no", [["+", "I used to live in Lugo."], ["−", "I didn't use to like fish."], ["?", "Did you use to play?"]], "hábitos y estados pasados"],
    ["<h3>Contar una historia</h3>", "Estructura de un relato en pasado", [["Introducción", "cuándo, dónde, quién"], ["Desarrollo", "hechos en orden: past simple"], ["Final", "cómo acabó, qué sentiste"]]],
  ],
  bloques: [
    { tras: "<h3>Past simple: verbos regulares</h3>", html: `<h3>La ortografía de -ed</h3><p>Los verbos regulares forman el pasado con -ed, pero hay cuatro reglas de ortografía que conviene aplicar siempre:</p><ul><li>Si el verbo acaba en <b>-e</b>, solo se añade <b>-d</b>: <i>live → lived, dance → danced, arrive → arrived</i>.</li><li>Si acaba en <b>consonante + y</b>, la y cambia a <b>-ied</b>: <i>study → studied, try → tried, carry → carried</i>. Pero si delante de la y hay vocal, se mantiene: <i>play → played, enjoy → enjoyed</i>.</li><li>Si acaba en <b>consonante + vocal + consonante</b> y la sílaba final es tónica, se <b>dobla</b> la última consonante: <i>stop → stopped, plan → planned, prefer → preferred</i>. No se dobla si el acento no está al final: <i>visit → visited, open → opened</i>.</li><li>En inglés británico, la <b>-l</b> final tras vocal se dobla: <i>travel → travelled, cancel → cancelled</i> (en americano, <i>traveled</i>).</li></ul><p>Estas reglas se parecen mucho a las de la forma -ing que ya conoces (stopping, studying), así que aprenderlas juntas te ahorrará errores.</p>`, svg: ["Reglas de ortografía del pasado regular", [["-e → + d", "live → lived"], ["consonante + y → ied", "study → studied"], ["CVC → doble", "stop → stopped"], ["vocal + y → ed", "play → played"]], "verbos regulares"] },
    { tras: "<h3>Acción larga interrumpida</h3>", html: `<h3>When, while y las acciones simultáneas</h3><p><b>When</b> y <b>while</b> se traducen a veces igual («cuando», «mientras»), pero no se usan del mismo modo. <b>While</b> introduce casi siempre la <mark>acción larga</mark>, en past continuous: «<b>While</b> I was walking home, I saw an accident». <b>When</b> suele introducir la <mark>acción corta</mark>, en past simple: «I was walking home <b>when</b> I saw an accident».</p><p>Cuando dos acciones largas ocurrían <b>a la vez</b>, las dos van en past continuous y se unen con <i>while</i>: «<b>While</b> my mum <b>was cooking</b>, my dad <b>was cleaning</b> the car». Así se describe una escena completa, como en una foto: «It was a busy afternoon: the children were playing, the dog was barking and the neighbours were talking».</p><p>El orden de las oraciones puede cambiar sin que cambie el significado. Si la oración con <i>when</i> o <i>while</i> va primero, se pone una <b>coma</b>: «When the bell rang, we ran out». Si va segunda, no hace falta: «We ran out when the bell rang».</p>`, svg: ["When y while con los dos pasados", [["while + acción larga", "While I was walking…"], ["when + acción corta", "…when I saw it."], ["dos largas a la vez", "While A was…, B was…"]], "conectores de tiempo"] },
    { html: `<h3>Los pasados en inglés y en español</h3><p>El español tiene más pasados que el inglés y eso provoca dudas. El <b>pretérito indefinido</b> («fui», «comí») corresponde casi siempre al <b>past simple</b>: «Ayer comí paella» → «I <b>had</b> paella yesterday». El <b>pretérito imperfecto</b> («comía», «estaba comiendo») puede traducirse de tres formas según el sentido:</p><ul><li>Acción en curso en un momento: <b>past continuous</b>. «Cuando llamaste, me duchaba» → «When you called, I <b>was having</b> a shower».</li><li>Hábito del pasado: <b>used to</b> o past simple. «De pequeño jugaba al fútbol» → «When I was little, I <b>used to play</b> football».</li><li>Estado o descripción: <b>past simple</b> del verbo de estado. «Tenía el pelo largo», «Sabía la respuesta» → «I <b>had</b> long hair», «I <b>knew</b> the answer».</li></ul><p>Un error típico es traducir «era» o «estaba» siempre con un continuous: «La casa era enorme» es «The house <b>was</b> huge», nunca «was being». Antes de escribir, pregúntate qué querías decir en español: ¿una acción en marcha, una costumbre o una descripción?</p>`, svg: ["El imperfecto español en inglés", [["acción en curso", "I was having a shower."], ["costumbre", "I used to play football."], ["estado", "I had long hair."]], "«me duchaba» · «jugaba» · «tenía»"] },
  ],
  videos: [["<h3>Past continuous</h3>", "pastA"], ["<h3>La pronunciación de -ed</h3>", "pastB"]],
  grupos: [4, 3, 3, 3],
  ejemplos: [
    ["Escribe el pasado y explica la regla: plan, cry, enjoy, arrive.", ["Plan: CVC con acento final → se dobla la n: planned.", "Cry: consonante + y → cried.", "Enjoy: vocal + y → se mantiene: enjoyed.", "Arrive: acaba en -e → solo -d: arrived."], "planned · cried · enjoyed · arrived"],
    ["Une con while y con when: «I was cycling to school» / «I got a puncture».", ["La acción larga es «was cycling»; la corta, «got a puncture».", "While va con la acción larga; when, con la corta."], "<b>While</b> I was cycling to school, I got a puncture. / I was cycling to school <b>when</b> I got a puncture."],
    ["Traduce: «De pequeña vivía en un pueblo y no tenía móvil.»", ["Vivía: hábito o situación pasada que ya no existe → used to live.", "No tenía: estado con have → didn't have (o didn't use to have)."], "When I was a child, I <b>used to live</b> in a village and I <b>didn't have</b> a mobile phone."],
  ],
  errores: ["Usar ago con una preposición o con last: *before two days, *on last Monday → two days ago, last Monday."],
  niveles: "bbbbbmmmma",
  ejercicios: [
    ["b", "Escribe el pasado de: plan, travel, dance, cry, open.", "planned, travelled (US traveled), danced, cried, opened."],
    ["b", "Escribe el pasado de: be (I), be (they), go, eat, take, write.", "was, were, went, ate, took, wrote."],
    ["b", "Completa con was o were: «The shops ___ closed.» / «It ___ very cold.» / «___ you at home?»", "were · was · Were."],
    ["b", "Escribe en negativa: «We went to the beach.»", "We <b>didn't go</b> to the beach. Didn't + verbo base."],
    ["b", "Completa con ago o last: «I saw her ___ week.» / «They moved here five years ___.»", "last week · five years ago."],
    ["b", "Completa: «There ___ a lot of people at the concert.»", "There <b>were</b> (a lot of people es plural)."],
    ["b", "Responde con una respuesta corta: «Did you enjoy the trip?» (sí) / «Was the hotel nice?» (no)", "Yes, I <b>did</b>. / No, it <b>wasn't</b>."],
    ["m", "Completa con when o while: «___ we were having lunch, the lights went out.» / «I was reading ___ I heard a noise.»", "<b>While</b> (acción larga) · <b>when</b> (acción corta)."],
    ["m", "Completa con past simple o continuous: «At 7 this morning it (rain) ___, so I (take) ___ an umbrella.»", "it <b>was raining</b> (en curso a esa hora) · I <b>took</b> an umbrella (acción completa)."],
    ["m", "Escribe la pregunta: «I bought <u>a new jacket</u>.»", "<b>What did you buy</b>?"],
    ["m", "Escribe la pregunta de sujeto: «<u>Ana</u> won the race.»", "<b>Who won</b> the race? Sin did, porque preguntamos por el sujeto."],
    ["m", "Corrige: «Did you went to the party?»", "Did you <b>go</b> to the party? Después de did, verbo base."],
    ["m", "Clasifica según la pronunciación de -ed: decided, laughed, cleaned, waited, kissed, played.", "/ɪd/: decided, waited. /t/: laughed, kissed. /d/: cleaned, played."],
    ["m", "Escribe tres frases con used to o didn't use to sobre cómo era tu vida a los 6 años.", "Ejemplo: «I used to watch cartoons every morning.» «I didn't use to like fish.» «I used to have a teddy bear called Bobo.»"],
    ["m", "Completa con could o couldn't: «It was so dark that we ___ see anything.» / «My grandfather ___ swim very well when he was young.»", "couldn't · could."],
    ["m", "Describe la escena en 3 frases en past continuous: un parque un domingo por la tarde.", "Ejemplo: «Some children were playing football. An old man was feeding the ducks. Two girls were eating ice creams on a bench.»"],
    ["m", "Ordena la historia con first, then, after that y finally: (we had dinner) (we went to the cinema) (we met at the station) (we took a taxi home).", "First we met at the station. Then we went to the cinema. After that we had dinner. Finally we took a taxi home."],
    ["a", "Corrige los cuatro errores: «Last summer I was going to London with my family. We visited a lot of museums and we was seeing the Queen's guards. One day, while we walked in the park, it started to rain and we didn't had umbrellas.»", "Last summer I <b>went</b> to London (acción completa) · we <b>saw</b> the guards (see no va en continuous y were, no was) · while we <b>were walking</b> (acción larga) · we didn't <b>have</b> umbrellas."],
    ["a", "Explica la diferencia: «When Dad arrived, we were having dinner.» / «When Dad arrived, we had dinner.»", "En la primera, ya estábamos cenando cuando llegó papá (interrupción). En la segunda, primero llegó y después cenamos (secuencia)."],
    ["a", "Traduce: «Mientras mi hermano estudiaba, yo escuchaba música. De repente se rompió la ventana.»", "While my brother was studying, I was listening to music. Suddenly the window broke."],
    ["a", "Traduce: «Antes íbamos al pueblo todos los veranos, pero el año pasado fuimos a la playa.»", "We used to go to the village every summer, but last year we went to the beach. (Hábito con used to; hecho concreto en past simple.)"],
    ["a", "Escribe el principio de una historia (60 palabras) que empiece con «It was a dark and stormy night…», con past continuous para la escena y past simple para los hechos.", "Modelo: «It was a dark and stormy night. The wind was blowing and rain was hitting the windows. I was reading in bed when suddenly I heard a strange noise downstairs. I got up, took my torch and walked slowly to the kitchen. The back door was open…»"],
    ["a", "Transforma usando used to: «When I was younger, I often played video games all afternoon. Now I don't.»", "I <b>used to play</b> video games all afternoon when I was younger."],
    ["a", "Escribe 5 preguntas para entrevistar a un abuelo o abuela sobre su infancia (past simple y used to).", "Ejemplos: Where did you live when you were a child? What games did you use to play? Did you use to walk to school? What did you do in the summer? Was there a TV in your house?"],
    ["a", "Explica por qué es incorrecto «The house was being very big» y corrígelo.", "Be describe un estado; para describir no se usa el continuous. Correcto: <b>The house was very big</b>."],
    ["a", "Completa el diálogo: «A: What (you / do) ___ when I (call) ___ you last night? B: I (have) ___ a bath, so I (not / hear) ___ the phone.»", "What <b>were you doing</b> when I <b>called</b> · I <b>was having</b> a bath · I <b>didn't hear</b> the phone."],
  ],
  cuartas: ["studid", "boughted", "Are", "are", "since", "no se pronuncia", "since", "Whom did", "am used", "is shining", "not went", "are having", "am"],
  quiz: [
    ["El pasado de «stop» es…", ["stoped", "stopped", "stopt", "stopping"], 1, "CVC con acento final: se dobla la p."],
    ["El pasado de «enjoy» es…", ["enjoied", "enjoyed", "enjoyd", "enjoy"], 1, "Vocal + y: la y se mantiene."],
    ["«___ the weather good on your holiday?»", ["Did", "Was", "Were", "Is"], 1, "Be en pasado: la pregunta se forma con was."],
    ["«___ I was doing my homework, my phone rang.»", ["When", "While", "During", "Ago"], 1, "While + acción larga en past continuous."],
    ["«I ___ you yesterday, but you didn't answer.»", ["called", "was calling", "call", "calling"], 0, "Acción completa con yesterday: past simple."],
    ["«What ___ at 8 pm last night?»", ["did you do", "were you doing", "you were doing", "was you doing"], 1, "Acción en curso a una hora concreta: past continuous."],
    ["«We ___ in a small flat, but now we live in a house.»", ["use to live", "used to live", "used to lived", "were used live"], 1, "Used to + verbo base: hábito o estado pasado."],
    ["«I didn't ___ the answer.»", ["knew", "know", "knowed", "known"], 1, "Didn't + verbo base."],
    ["«Decided» se pronuncia con…", ["/t/", "/d/", "/ɪd/", "/s/"], 2, "Tras d se añade una sílaba: /ɪd/."],
    ["«They got married ten years ___.»", ["before", "ago", "last", "since"], 1, "Ago va detrás del periodo de tiempo."],
  ],
  examen: [
    ["«While my dad ___, my mum was reading.»", ["cooked", "was cooking", "were cooking", "cooks"], 1, "Dos acciones largas simultáneas: past continuous."],
    ["«I ___ swim until I was ten.» (no sabía)", ["couldn't", "didn't could", "can't", "wasn't"], 0, "Could no usa did: couldn't."],
    ["¿Cuál es correcta?", ["I saw him on last Monday.", "I saw him last Monday.", "I have seen him last Monday.", "I was seeing him last Monday."], 1, "Last no lleva preposición; acción completa en past simple."],
    ["«Who ___ the last biscuit?»", ["did eat", "ate", "eated", "did ate"], 1, "Pregunta de sujeto: sin did."],
    ["«Did you use to ___ a bike?»", ["had", "having", "have", "has"], 2, "Use to + verbo base."],
  ],
  tarjetas: [
    ["Ortografía de -ed", "live → lived · study → studied · stop → stopped · play → played."],
    ["When / while", "While + acción larga (continuous); when + acción corta (simple)."],
    ["Dos acciones largas a la vez", "While A was …ing, B was …ing."],
    ["Imperfecto español", "En curso → past continuous; costumbre → used to; estado → past simple."],
  ],
  glosario: [
    ["past simple", "Pasado para acciones terminadas en un momento concreto: I walked, I went."],
    ["past continuous", "was / were + -ing: acción en curso en un momento del pasado."],
    ["regular verb", "Verbo que forma el pasado con -ed: play → played."],
    ["irregular verb", "Verbo con pasado propio que hay que memorizar: go → went."],
    ["did / didn't", "Auxiliar del past simple en preguntas y negativas."],
    ["was / were", "Pasado de be: was con I, he, she, it; were con you, we, they."],
    ["used to", "Expresa hábitos o estados del pasado que ya no existen."],
    ["when", "Cuando: suele introducir la acción corta en past simple."],
    ["while", "Mientras: introduce la acción larga en past continuous."],
    ["ago", "Hace (tiempo): two years ago."],
    ["time expression", "Expresión temporal: yesterday, last week, in 2010."],
    ["sequence connector", "Conector de orden en un relato: first, then, after that, finally."],
    ["background", "Fondo o escena de una historia, en past continuous."],
    ["interrupted action", "Acción larga que se ve interrumpida por otra corta."],
  ],
  situacion: {
    titulo: "Nuestro podcast de historias",
    reto: "La biblioteca municipal organiza un concurso de relatos breves en inglés grabados en audio. Cada alumno escribe y graba una historia real o inventada de unos dos minutos: «A day I will never forget».",
    pasos: ["Elige la anécdota y haz un esquema con introducción, desarrollo y final.", "Escribe un borrador de 150-180 palabras con past continuous para la escena, past simple para los hechos y al menos cinco conectores.", "Revisa con un compañero: verbos irregulares, did + verbo base, when / while.", "Practica la lectura en voz alta prestando atención a la pronunciación de -ed.", "Graba el audio y escucha los de tus compañeros para votar las tres mejores historias."],
    producto: "Un relato escrito de 150-180 palabras y su grabación en audio de unos dos minutos.",
    evaluacion: ["Usa correctamente el past simple y el past continuous según su función en el relato.", "Escribe bien los verbos irregulares y las formas con did.", "El relato tiene estructura clara y conectores de secuencia.", "La lectura es fluida y pronuncia correctamente la terminación -ed."],
  },
  familias: ["Pedidle que os cuente en inglés qué hizo el fin de semana pasado, con al menos cinco verbos en pasado."],
  saberes: "comprensió i producció de textos narratius breus; temps verbals del passat per relatar experiències i fets.",
  minutos: 100,
});
