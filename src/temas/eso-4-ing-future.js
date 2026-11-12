// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Future forms",
  minutos: 35,
  objetivos: ["Elegir entre will, be going to y present continuous", "Usar el present simple para horarios", "Reconocer el future continuous y el future perfect"],
  claves: ["will", "be going to", "present continuous for future", "timetables", "future continuous", "future perfect"],
  pregunta: {
    texto: "Ves nubes negras y dices: «It's going to rain». Tu app dice: «It will rain tomorrow». Tu amigo dice: «I'm meeting Ana at six». ¿Por qué tres formas distintas para hablar del futuro?",
    respuesta: "Porque en inglés el futuro depende de <mark>cómo de seguro y planeado</mark> esté. «Going to» = prueba que ves ahora (nubes). «Will» = predicción u opinión. Present continuous = cita ya organizada. Elegir bien suena mucho más natural.",
  },
  bloques: [
    {
      html: `<h3>Will</h3><p><b>will + infinitivo</b> (negativa <i>won't</i>). Para <b>predicciones</b> basadas en opinión («I think Spain <i>will</i> win»), <mark>decisiones espontáneas</mark> («It's cold. I'll close the window»), promesas, ofrecimientos y hechos futuros («I'll be 16 in May»).</p>`,
      svg: L.filas("Usos de will", [
        ["Predicción", "I think it'll be fun.", "var(--pen)"], ["Decisión ya", "I'll get it!", "var(--red)"],
        ["Promesa", "I won't tell anyone.", "var(--leaf)"], ["Oferta", "I'll help you.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Be going to</h3><p><b>am / is / are going to + infinitivo</b>. Para <mark>intenciones</mark> decididas antes de hablar («I'm going to study medicine») y para <b>predicciones con pruebas</b> visibles: «Look at that car! It's going to crash».</p>`,
      svg: L.frase("Be going to: I am going to study medicine", [
        ["I", "", "var(--line)"], ["am going to", "be going to", "var(--pen)"], ["study", "infinitivo", "var(--red)"], ["medicine.", "", "var(--line)"],
      ], "intención decidida antes"),
    },
    {
      html: `<h3>Present continuous y present simple</h3><p>El <b>present continuous</b> expresa <mark>planes fijados</mark> con hora o lugar: «We're having a party on Saturday». El <b>present simple</b> se usa para <mark>horarios</mark> oficiales: «The train leaves at 8:15», «School starts on 8 September».</p>`,
      svg: L.filas("Futuro con presentes: planes y horarios", [
        ["Plan fijado", "I'm seeing the dentist at 5.", "var(--leaf)"],
        ["Horario", "The film starts at 9.", "var(--inf)"],
      ], "también hablan del futuro"),
    },
    {
      html: `<h3>Future continuous</h3><p><b>will be + verbo-ing</b>. Acción <mark>en progreso</mark> en un momento del futuro: «This time tomorrow I <b>will be flying</b> to New York». Es como una foto del futuro.</p>`,
      svg: L.linea("Future continuous: acción en progreso en el futuro", [
        ["now", "I'm at home", "var(--muted)"],
        ["10 am", "I'll be sitting my exam", "var(--pen)"],
        ["11 am", "I'll be doing the last question", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Future perfect</h3><p><b>will have + participio</b>. Acción que <mark>habrá terminado</mark> antes de un momento futuro: «By 2030 I <b>will have finished</b> university». Va mucho con <i>by</i> (para, antes de).</p>`,
      svg: L.filas("Future perfect con by", [
        ["By Friday", "I'll have read the book.", "var(--pen)"],
        ["By 2030", "they'll have built it.", "var(--leaf)"],
      ], "habrá terminado antes de…"),
    },
  ],
  figura: {
    titulo: "¿Qué futuro uso?",
    svg: L.columnas("Guía para elegir la forma de futuro", [
      ["opinión · decisión ahora", "WILL", ["I think it'll rain.", "I'll call you."], "var(--pen)"],
      ["intención · prueba", "GOING TO", ["I'm going to travel.", "It's going to fall!"], "var(--red)"],
      ["cita organizada", "PRESENT CONT.", ["I'm meeting Ana", "at six."], "var(--leaf)"],
      ["horario oficial", "PRESENT SIMPLE", ["The bus leaves", "at 7:40."], "var(--inf)"],
    ]),
  },
  video: { id: "a8JvugZqg08", titulo: "Futuro con will y going to: diferencias, usos y ejemplos", canal: "Francisco Ochoa Inglés Fácil", vistas: 1325429, megusta: 0, busqueda: "will going to present continuous future explicación" },
  quiz: [
    { q: "«The phone is ringing.» «I ___ answer it!»", o: ["will", "am going to", "am answering"], a: 0, e: "Decisión espontánea en el momento: will." },
    { q: "«Look at those clouds! It ___ rain.»", o: ["will", "is going to", "rains"], a: 1, e: "Predicción con pruebas visibles: going to." },
    { q: "«The plane ___ at 10:45.» (horario)", o: ["leaves", "is going to leave", "will leaving"], a: 0, e: "Horarios oficiales: present simple." },
    { q: "«This time next week I ___ on the beach.»", o: ["will lie", "will be lying", "will have lain"], a: 1, e: "Acción en progreso en un momento futuro: future continuous." },
    { q: "«By June we ___ all the exams.»", o: ["will finish", "will have finished", "are finishing"], a: 1, e: "Terminado antes de un momento futuro: future perfect." },
  ],
  examen: [
    { q: "«We ___ a barbecue on Sunday. Everyone's invited.»", o: ["are having", "will have had", "have"], a: 0, e: "Plan organizado: present continuous." },
    { q: "La negativa de «will» es…", o: ["willn't", "won't", "don't will"], a: 1, e: "Will not = won't." },
    { q: "«I ___ be a vet when I grow up. I've decided.»", o: ["am going to", "will be", "am being"], a: 0, e: "Intención decidida antes: going to." },
  ],
  feynman: ["La diferencia entre will y going to", "Cuándo uso el present continuous para el futuro", "Por qué los horarios van en present simple", "Qué expresan el future continuous y el future perfect"],
  mapa: mapa("FUTURE FORMS", "var(--eso)", [
    ["Will", "prediction · decision", "var(--pen)"],
    ["Going to", "intention · evidence", "var(--red)"],
    ["Present tenses", "plans · timetables", "var(--leaf)"],
    ["Advanced", "will be -ing · will have", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Will: usos", "Predicciones de opinión, decisiones espontáneas, promesas y ofertas."],
    ["Be going to: usos", "Intenciones decididas antes y predicciones con pruebas."],
    ["Present continuous de futuro", "Planes ya organizados: «I'm meeting Tom tonight»."],
    ["Future continuous", "will be + -ing: acción en progreso en un momento futuro."],
    ["Future perfect", "will have + participio: acción terminada antes de un momento futuro."],
  ],
  familias: ["Pedidle que os cuente sus planes del fin de semana en inglés con present continuous.", "Jugad a hacer predicciones del próximo partido o de la próxima película con will.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: expresión de planes, intenciones, predicciones y horarios (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Agenda de la semana por parejas para quedar («Are you doing anything on…?»).", "Bola de cristal: predicciones sobre compañeros para dentro de 20 años con future perfect.", "Analizar horarios reales de trenes y autobuses."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: future forms", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: future", url: "https://dictionary.cambridge.org/grammar/british-grammar/future" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Elegir la forma de futuro según la situación", "Usar el presente detrás de when, as soon as, before y until", "Expresar probabilidad en el futuro"],
  bloques: [
    { tras: "Will", html: `<h3>Más usos de will</h3><p>Además de predicciones y decisiones espontáneas, <b>will</b> sirve para:</p><ul><li><b>Promesas</b>: «I <b>will</b> always love you», «I <b>won't</b> tell anyone».</li><li><b>Ofrecimientos</b>: «I'<b>ll</b> help you with those bags».</li><li><b>Amenazas y advertencias</b>: «Be careful or you'<b>ll</b> fall».</li><li><b>Peticiones</b>: «<b>Will</b> you open the window, please?»</li><li>Con <b>shall</b> (solo con I / we, en preguntas) se hacen ofrecimientos y sugerencias: «<b>Shall</b> I carry it?», «<b>Shall</b> we dance?»</li></ul><p>Las predicciones con will suelen ir con expresiones de opinión o probabilidad: <i>I think, I'm sure, I hope, probably, perhaps</i>. Ojo con el orden: «He'll <b>probably</b> come» pero «He <b>probably won't</b> come».</p>` },
    { tras: "Be going to", html: `<h3>Will o going to: la prueba</h3>${L.tb(["Situación", "Forma", "Ejemplo"], [["decido ahora mismo", "will", "«The phone! I'll get it.»"], ["ya lo había decidido", "going to", "«I'm going to buy a bike next month.»"], ["opino o imagino", "will", "«I think robots will do our homework.»"], ["lo veo venir (prueba)", "going to", "«Watch out! You're going to fall!»"], ["plan con hora y lugar", "present continuous", "«I'm meeting Sara at 6.»"], ["horario fijo", "present simple", "«The train leaves at 7.»"]])}<p>A menudo, en predicciones, will y going to son posibles; lo importante es si hay <mark>una prueba en el presente</mark> (going to) o solo una opinión (will).</p>` },
    { tras: "Present continuous y present simple", html: `<h3>Oraciones temporales: presente, no will</h3><p>Después de <b>when, as soon as, before, after, until, once</b> y también después de <b>if</b>, el inglés no usa will aunque hable del futuro: usa el <b>present simple</b> (o el present perfect).</p><ul><li>«I'll call you <b>when</b> I <b>get</b> home.» (no *when I will get)</li><li>«We'll wait <b>until</b> the rain <b>stops</b>.»</li><li>«<b>As soon as</b> I <b>have finished</b>, I'll send it.»</li></ul><p>En español pasa algo parecido, pero con subjuntivo: «cuando <i>llegue</i>». Por eso este error es tan frecuente: los estudiantes traducen «cuando llegue» con will.</p>` },
    { tras: "Future perfect", html: `<h3>Otras formas de hablar del futuro</h3><ul><li><b>Be about to</b> + infinitivo: algo inminente. «Hurry up! The film <b>is about to</b> start.»</li><li><b>Be likely to / be unlikely to</b>: probabilidad. «It <b>is likely to</b> rain this afternoon.»</li><li><b>Be bound to</b>: certeza. «She studies so hard. She<b>'s bound to</b> pass.»</li><li><b>Might / may</b> + infinitivo: posibilidad. «I <b>might</b> go to the party, but I'm not sure.»</li></ul><p>Estas expresiones enriquecen un <i>writing</i> sobre el futuro (por ejemplo, «How will we live in 2050?») y evitan repetir will en cada frase.</p>` },
    { tras: "Future perfect", html: `<h3>Future continuous y future perfect, en contraste</h3><p>Imagina tu horario de mañana. A las 10 estarás en mitad de un examen: «At 10 o'clock I <b>will be doing</b> an exam» (future continuous, acción en progreso). A las 12 ya lo habrás terminado: «By 12 o'clock I <b>will have finished</b> the exam» (future perfect, acción terminada antes de ese momento).</p><p>El future continuous también se usa para preguntar por los planes de alguien con cortesía: «<b>Will</b> you <b>be using</b> the car tonight?» (suena menos directo que «Will you use…?»). El future perfect va casi siempre con <b>by</b>: <i>by then, by the time, by next year</i>.</p>` },
    { tras: "Future perfect", html: `<h3>Escribir sobre el futuro: planes y predicciones</h3><p>En los exámenes de 4.º es frecuente un <i>writing</i> como «My plans for next summer» o «Life in 2050». Organízalo así:</p><ol><li><b>Introducción</b>: presenta el tema. «Nobody knows exactly what the future holds, but…»</li><li><b>Planes y decisiones</b> (going to y present continuous): «This summer I'm going to work in a café. I'm starting on 1 July.»</li><li><b>Predicciones</b> (will, might, be likely to): «I think I'll learn a lot. I might even save some money.»</li><li><b>Futuro más lejano</b> (future continuous y future perfect): «By the time I'm 25, I'll have finished my degree and I'll be working abroad.»</li><li><b>Conclusión</b>: «All in all, I'm sure it will be an unforgettable experience.»</li></ol><p>Mezclar varias formas de futuro demuestra un nivel B1 y sube la nota de gramática y de riqueza de vocabulario.</p>` },
  ],
  videos: [
    ["Be going to", L.vid("UISiuiPd_FY", "Will vs be going to vs presente continuo: hablando del futuro en inglés", "To Fluency", 403485)],
    ["Present continuous y present simple", L.vid("XACvspcClW0", "Los futuros en inglés: will, be going to, presente continuo, presente simple", "The English Spotlight", 474753)],
  ],
  ejemplos: [
    ["Elige la forma: «A: I've got a terrible headache. B: Wait, I (get) ___ you an aspirin.»", ["B decide en el momento de hablar, como reacción.", "Es también un ofrecimiento.", "Decisión espontánea → will."], "I'll get you an aspirin."],
    ["Corrige: «I will phone you when I will arrive at the airport.»", ["La segunda parte va detrás de «when».", "Después de when se usa presente aunque se hable de futuro.", "La parte principal sí lleva will."], "I will phone you when I arrive at the airport."],
    ["Completa con future continuous o future perfect: «Don't call me at 9. I (have) ___ dinner. Call me at 10: by then I (finish) ___.»", ["A las 9 estaré en mitad de la cena: acción en progreso → will be having.", "«By then» indica algo terminado antes de ese momento → will have finished."], "I'll be having dinner… by then I'll have finished."],
  ],
  errores: [
    "Usar will después de when, if, as soon as, until: *when I will arrive → when I arrive.",
    "Usar will para planes ya decididos: *I will visit my aunt tomorrow, we booked it → I'm visiting / I'm going to visit.",
    "Olvidar to en going to: *I'm going study → I'm going to study.",
    "Usar shall con he, she o they: shall solo va con I y we.",
    "Confundir future perfect (terminado) con future continuous (en progreso).",
  ],
  ejercicios: [
    ["Completa: «Look at the sky! It ___ (snow).»", "It's going to snow. Hay una prueba visible."],
    ["Completa: «I'm sure you ___ (love) the film.»", "You'll love the film: predicción con opinión (I'm sure)."],
    ["Completa: «The concert ___ (start) at 9 pm, according to the programme.»", "starts: horario fijo, present simple."],
    ["Completa: «We ___ (have) a barbecue on Sunday. We've invited everyone.»", "We're having (o we're going to have): plan organizado."],
    ["Haz un ofrecimiento con shall para llevar una mochila pesada.", "Shall I carry your backpack?"],
    ["Corrige: «If it will rain, we won't go.»", "If it rains, we won't go."],
    ["Completa: «By the end of the year, I ___ (read) ten books.»", "will have read: future perfect con by."],
    ["Traduce: «La película está a punto de empezar.»", "The film is about to start."],
    ["Completa: «This time next week we ___ (lie) on the beach.»", "will be lying: future continuous (lie → lying)."],
    ["Escribe dos predicciones sobre 2050, una con will y otra con might.", "Por ejemplo: «People will travel in electric planes.» «We might live on Mars.» Will expresa más seguridad que might."],
  ],
  quiz: [
    ["«I'll text you as soon as I ___.»", ["arrive", "will arrive", "arrived"], 0, "Presente tras as soon as."],
    ["«___ I open the window?» (ofrecimiento)", ["Shall", "Will", "Am"], 0, "Shall con I en preguntas."],
    ["«Hurry! The bus is about ___.»", ["to leave", "leaving", "leave"], 0, "Be about to + infinitivo."],
    ["«She's bound to win» significa que…", ["es casi seguro que gane", "quizá gane", "no ganará"], 0, "Bound to = certeza."],
    ["«By 2030 I ___ university.»", ["will have finished", "will be finishing", "finish"], 0, "Future perfect con by."],
  ],
  tarjetas: [
    ["When + presente", "I'll call you when I get home (no *when I will get)."],
    ["Be about to", "A punto de: The film is about to start."],
    ["Shall I / Shall we", "Ofrecimientos y sugerencias: Shall we go?"],
  ],
});
