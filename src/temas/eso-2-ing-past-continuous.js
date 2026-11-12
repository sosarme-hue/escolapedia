// Inglés 2º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { tema, L, tabla, F } = require("./_eso2d");
const V = require("./_eso2d-videos");

// Dibujo propio: acción larga interrumpida por una corta.
const interrumpida = `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: una barra larga, I was having a shower, cortada por una acción corta, the phone rang">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <path d="M16 110 H 244" stroke="var(--line)" stroke-width="3"/>
  <rect x="30" y="94" width="180" height="16" rx="6" fill="var(--pen)" opacity=".8"/>
  <path d="M128 50 L 118 82 L 132 82 L 122 112" fill="none" stroke="var(--red)" stroke-width="4" stroke-linejoin="round"/>
  <g ${F} font-weight="700" text-anchor="middle"><text x="124" y="40" font-size="12.5" fill="var(--red)">the phone rang</text><text x="120" y="136" font-size="12.5" fill="var(--pen)">I was having a shower</text><text x="30" y="164" font-size="11" fill="var(--muted)" text-anchor="start">past</text><text x="236" y="164" font-size="11" fill="var(--muted)" text-anchor="end">now</text></g>
</svg>`;

module.exports = tema({
  materia: "Inglés",
  titulo: "Past continuous",
  objetivos: ["Formar el past continuous con was / were + -ing", "Usarlo para acciones en progreso en un momento del pasado y para describir escenas", "Combinar past continuous y past simple con when y while", "Contar una historia breve usando los dos pasados"],
  claves: ["past continuous", "was / were + -ing", "at 8 o'clock yesterday", "when", "while", "background"],
  pregunta: [
    "Un policía pregunta a un sospechoso: «What were you doing at ten o'clock last night?». ¿Por qué no pregunta «What did you do?»?",
    "Porque no le interesa una acción terminada, sino lo que <mark>estaba haciendo</mark> justo en ese momento: una acción <b>en progreso</b> a las diez. Eso se expresa con el <b>past continuous</b>: «I was watching TV at home». Es el tiempo de las coartadas… y de las descripciones en las historias.",
  ],
  bloques: [
    ["¿Para qué sirve el past continuous?", `<p>El <mark>past continuous</mark> expresa una acción que estaba <b>en progreso</b> en un momento concreto del pasado: «At 8 o'clock yesterday I <b>was having</b> dinner». Equivale al español «estaba + gerundio»: «estaba cenando».</p><p>A diferencia del past simple, no dice si la acción terminó; solo la muestra «en marcha», como si hiciéramos una foto en ese instante. Suele ir con expresiones como <i>at six o'clock yesterday, at this time last week, all morning, all day</i>.</p>`,
      L.frase("Past continuous: At 8 I was having dinner", [["At 8,", "momento", "var(--line)"], ["I", "", "var(--ink)"], ["was", "was / were", "var(--pen)"], ["having", "-ing", "var(--red)"], ["dinner.", "", "var(--line)"]], "acción en progreso en el pasado")],
    ["La forma: was / were + -ing", `<p>Se forma con el pasado de <i>be</i> (<mark>was / were</mark>) + verbo con <mark>-ing</mark>. Se usa <b>was</b> con <i>I, he, she, it</i> y <b>were</b> con <i>you, we, they</i>: «She <b>was reading</b>», «They <b>were playing</b>». Las reglas del -ing son las mismas del present continuous (writing, swimming, lying).</p><p>Negativa: <b>wasn't / weren't</b> + -ing: «I <b>wasn't sleeping</b>». Pregunta: <b>Was / Were</b> + sujeto + -ing: «<b>Were</b> you <b>listening</b>?» — «Yes, I was / No, I wasn't». Con partícula: «<b>What were</b> you <b>doing</b>?».</p>`,
      L.tabla("Past continuous del verbo play", ["Sujeto", "Forma"], [["I / he / she / it", "was playing"], ["you / we / they", "were playing"], ["negativa", "wasn't / weren't"]], "var(--pen)")],
    ["Describir el escenario de una historia", `<p>El past continuous es ideal para <b>describir el fondo</b> o ambiente de una historia, antes de que pase algo importante: «It was a cold night. The wind <b>was blowing</b> and the rain <b>was falling</b>. Some people <b>were walking</b> quickly home».</p><p>Así el lector «ve» la escena. Después, las acciones principales que hacen avanzar la historia van en <b>past simple</b>: «Suddenly, a strange man <b>appeared</b>». Esta combinación es la base de cualquier narración en inglés.</p>`,
      L.filas("Escenario y acción en una historia", [["Escenario", "The wind was blowing.", "var(--pen)"], ["Escenario", "People were walking home.", "var(--pen)"], ["Acción", "Suddenly, a man appeared.", "var(--red)"]])],
    ["Acción larga interrumpida: when", `<p>La combinación más típica: una acción <b>larga</b> en <mark>past continuous</mark> es interrumpida por otra <b>corta</b> en <mark>past simple</mark>. La acción corta suele ir introducida por <b>when</b> (cuando): «I <b>was having</b> a shower <b>when</b> the phone <b>rang</b>».</p><p>Se puede cambiar el orden: «<b>When</b> the phone <b>rang</b>, I <b>was having</b> a shower» (con coma si when va al principio). Piensa en una película que se corta: la película (larga) estaba en marcha y el corte (corto) la interrumpe.</p>`,
      interrumpida, V.in4b],
    ["Dos acciones a la vez: while", `<p>Cuando dos acciones <b>largas</b> ocurrían <b>al mismo tiempo</b>, las dos van en past continuous unidas por <mark>while</mark> (mientras): «I <b>was studying while</b> my sister <b>was watching</b> TV».</p><p><i>While</i> también puede introducir la acción larga en una frase con interrupción: «<b>While</b> I <b>was walking</b> home, I <b>saw</b> an accident». Regla práctica: <b>when</b> + acción corta (past simple); <b>while</b> + acción larga (past continuous).</p>`,
      L.dialogo("When y while", [["when + corta", "I was sleeping when the alarm rang.", "var(--red)"], ["while + larga", "While I was sleeping, the alarm rang.", "var(--pen)"]])],
    ["Past simple o past continuous", `<p>Para elegir, pregúntate: ¿la acción está <b>terminada y completa</b> (past simple) o la vemos <b>en progreso</b> (past continuous)? Compara: «I <b>read</b> a book yesterday» (lo leí, acción completa) y «I <b>was reading</b> a book at 9» (estaba leyendo, en marcha).</p><p>Para varias acciones seguidas, una detrás de otra, se usa <b>past simple</b>: «He <b>opened</b> the door, <b>turned on</b> the light and <b>sat</b> down». Y recuerda que los <b>verbos de estado</b> (like, know, want…) no suelen ir en continuous: «I <b>knew</b> the answer» (no «I was knowing»).</p>`,
      tabla(["Past simple", "Past continuous"], [["acción completa: I read a book", "acción en progreso: I was reading"], ["acciones seguidas: opened, sat", "escenario: the sun was shining"], ["acción corta que interrumpe", "acción larga interrumpida"]])],
    ["Escribir una historia", `<p>Una buena historia breve tiene tres partes. La <b>introducción</b> presenta cuándo, dónde y quién, con escenario en past continuous: «Last summer I was on holiday in Cádiz. It was a hot day and we <b>were sitting</b> on the beach». El <b>desarrollo</b> cuenta qué pasó, en past simple y con conectores como <i>suddenly, then, after that</i>.</p><p>El <b>final</b> explica cómo terminó y qué sentiste: <i>in the end, finally, I felt…</i> Usa adjetivos para dar vida (<i>scared, excited, amazing</i>) y no olvides el título.</p>`,
      L.filas("Partes de una historia", [["Inicio", "who, where, when + escenario", "var(--pen)"], ["Desarrollo", "suddenly, then + past simple", "var(--red)"], ["Final", "in the end, I felt…", "var(--leaf)"]])],
    ["Una historia de ejemplo", `<p>Lee esta historia y fíjate en los dos pasados: «<b>A scary night.</b> Last winter I <b>was staying</b> at my grandparents' house in the mountains. It <b>was snowing</b> and everybody <b>was sleeping</b>. At midnight I <b>heard</b> a strange noise. While I <b>was going</b> downstairs, the lights <b>went</b> out!</p><p>I <b>was</b> very scared. Suddenly, something <b>touched</b> my leg… It <b>was</b> the cat! It <b>was looking</b> for food. In the end, I <b>gave</b> it some milk and we both <b>went</b> back to bed». Cuenta cuántos verbos hay en cada pasado: es un buen ejercicio.</p>`,
      L.filas("Verbos de la historia", [["Continuous", "was staying, was snowing", "var(--pen)"], ["Simple", "heard, went out, touched", "var(--red)"], ["Be", "was scared, it was the cat", "var(--sun)"]])],
  ],
  ejemplos: [
    ["Completa: «While Ana (cook), her brother (lay) the table».", ["Dos acciones largas a la vez unidas por while.", "Las dos en past continuous: was cooking, was laying."], "While Ana was cooking, her brother was laying the table."],
    ["Completa: «We (play) football when it (start) to rain».", ["La acción larga (jugar) en past continuous: were playing.", "La acción corta que interrumpe (empezó a llover) en past simple: started."], "We were playing football when it started to rain."],
    ["Responde a la pregunta del policía: «What were you doing at 10 last night?» (ver una serie con mi hermano).", ["La pregunta usa past continuous: hay que responder igual.", "I + was + watching…"], "I was watching a series with my brother."],
  ],
  errores: [
    "Usar was con you / we / they: «You was playing» → «You were playing».",
    "Olvidar el -ing: «I was play» → «I was playing».",
    "Poner las dos acciones en past continuous cuando una interrumpe: «I was sleeping when the phone was ringing» → «…when the phone rang».",
    "Confundir when y while: while va con la acción larga.",
    "Usar verbos de estado en continuous: «I was knowing» → «I knew».",
  ],
  ejercicios: [
    ["Completa: At 7 pm yesterday they ___ (have) dinner.", "They were having dinner."],
    ["Haz negativa: She was listening to music.", "She wasn't listening to music."],
    ["Haz la pregunta y respuesta corta negativa: you / sleep / at midnight.", "Were you sleeping at midnight? No, I wasn't."],
    ["Completa: I ___ (walk) to school when I ___ (see) my friend.", "I was walking to school when I saw my friend."],
    ["Completa: While Dad ___ (drive), we ___ (sing) songs.", "While Dad was driving, we were singing songs."],
    ["Elige: «When I arrived, they (had / were having) lunch».", "They were having lunch (acción en progreso cuando llegué)."],
    ["Elige: «He (got up / was getting up), had a shower and left».", "He got up (acciones seguidas: past simple)."],
    ["Une con when: The lights went out. We were watching a film.", "We were watching a film when the lights went out."],
    ["Traduce: «¿Qué estabas haciendo cuando te llamé?».", "What were you doing when I called you?"],
    ["Escribe el escenario de una historia en dos frases con past continuous.", "Respuesta libre. Ejemplo: It was a sunny morning. The birds were singing and children were playing in the park."],
  ],
  figura: ["Los dos pasados en una historia", L.pasos("Cómo se combinan los dos pasados", [["Escenario", ["It was raining.", "(past continuous)"], "var(--pen)"], ["Interrupción", ["Suddenly, the", "lights went out."], "var(--red)"], ["Acciones", ["We lit a candle", "and waited."], "var(--leaf)"], ["Final", ["In the end, we", "went to bed."], "var(--sun)"]])],
  video: V.in4v,
  quiz: [
    ["«At 9 pm they ___ TV.»", ["were watching", "was watching", "watched"], "They + were + -ing."],
    ["«I ___ sleeping when you called.»", ["was", "were", "did"], "I + was."],
    ["«___ she working yesterday at 5?»", ["Was", "Were", "Did"], "Pregunta con was."],
    ["«We ___ playing; we were studying.»", ["weren't", "wasn't", "didn't"], "We + weren't."],
    ["«I was cooking ___ the doorbell rang.»", ["when", "while", "during"], "When + acción corta."],
    ["«___ I was walking home, it started to snow.»", ["While", "When", "During"], "While + acción larga."],
    ["«She was reading when the phone ___.»", ["rang", "was ringing", "rings"], "La interrupción va en past simple."],
    ["Para describir el escenario de una historia se usa…", ["past continuous", "present simple", "past simple"], "The sun was shining…"],
    ["«He opened the door and ___ in.»", ["walked", "was walking", "walks"], "Acciones seguidas: past simple."],
    ["«What were you doing?» se traduce…", ["¿Qué estabas haciendo?", "¿Qué hiciste?", "¿Qué haces?"], "Acción en progreso."],
  ],
  examen: [
    ["«While I was studying, my brother ___ the guitar.»", ["was playing", "played", "plays"], "Dos acciones largas a la vez."],
    ["«I ___ the answer.»", ["knew", "was knowing", "were knowing"], "Know es verbo de estado."],
    ["«You ___ laughing at me!»", ["were", "was", "did"], "You siempre con were."],
  ],
  feynman: ["Para qué sirve el past continuous", "Cómo se forma con was y were", "Cómo se combinan los dos pasados con when y while", "Cómo se escribe una historia usando los dos pasados"],
  mapa: ["PAST CONTINUOUS", "var(--eso)", [["Forma", "was / were + -ing", "var(--pen)"], ["Uso", "en progreso · escenario", "var(--leaf)"], ["When", "+ acción corta (simple)", "var(--red)"], ["While", "+ acción larga (cont.)", "var(--sun)"]], 240],
  tarjetas: [
    ["Past continuous", "was / were + -ing: I was reading."],
    ["Uso principal", "Acción en progreso en un momento del pasado."],
    ["Was", "Con I, he, she, it."],
    ["Were", "Con you, we, they."],
    ["Escenario", "Describe el fondo de una historia: The sun was shining."],
    ["When", "Introduce la acción corta: when the phone rang."],
    ["While", "Introduce la acción larga: while I was sleeping."],
    ["Acciones seguidas", "Van en past simple: He opened, looked and left."],
  ],
  familias: ["Jugad al detective: preguntad «What were you doing at… yesterday?» y comprobad si las coartadas coinciden.", "Contad juntos una historia en cadena en inglés: uno describe el escenario y otro añade lo que pasó."],
  saberes: "Comunicación y reflexión sobre la lengua: el past continuous y su combinación con el past simple mediante when y while; la narración (RD 217/2022, Lengua Extranjera, primer ciclo; nivel A2 del MCER).",
  ideas: ["«Alibi game»: la clase interroga a sospechosos con «What were you doing at…?».", "Escribir el final de una historia que empieza con un escenario en past continuous.", "Mímica congelada: un alumno se detiene y los demás dicen qué estaba haciendo."],
  fuentes: [["British Council LearnEnglish Teens: past continuous", "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/past-continuous"], ["Cambridge Dictionary: past continuous", "https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working"]],
});
