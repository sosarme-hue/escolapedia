// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Speaking: debates and presentations",
  minutos: 35,
  objetivos: ["Estructurar una presentación oral con signposting", "Expresar acuerdo, desacuerdo e interrumpir con educación en un debate", "Controlar los nervios, la voz y el lenguaje corporal"],
  claves: ["presentation", "signposting", "agree / disagree", "interrupting", "body language", "eye contact"],
  pregunta: {
    texto: "Tienes que hablar 3 minutos en inglés delante de la clase. ¿Qué te da más miedo: quedarte en blanco o no saber cómo empezar?",
    respuesta: "Las dos cosas se solucionan con <mark>frases preparadas</mark>. Si tienes listas las expresiones para empezar, pasar de una parte a otra y terminar (<b>signposting</b>), solo tienes que rellenar el contenido. Y si te quedas en blanco, hay frases para ganar tiempo.",
  },
  bloques: [
    {
      html: `<h3>La estructura de una presentación</h3><p><b>Opening</b>: saluda, presenta el tema y engancha (una pregunta, un dato sorprendente). <b>Outline</b>: di las partes. <b>Body</b>: dos o tres ideas con ejemplos e imágenes. <b>Conclusion</b>: resume y da las gracias. <b>Questions</b>: invita a preguntar.</p>`,
      svg: L.filas("Estructura de una presentación oral", [
        ["Opening", "Did you know that…?", "var(--pen)"], ["Outline", "First… then… finally…", "var(--leaf)"],
        ["Body", "ideas + examples", "var(--inf)"], ["Conclusion", "Thank you! Questions?", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Signposting: las señales del discurso</h3><p>Son frases que guían al público: <mark>Today I'm going to talk about… · Let's start with… · Moving on to… · Let me give you an example… · To sum up… · Thank you for listening.</mark> Hacen que tu presentación suene organizada aunque estés nervioso.</p>`,
      svg: L.linea("Signposting a lo largo de la presentación", [
        ["start", "Today I'm going to talk about…", "var(--pen)"],
        ["next", "Moving on to…", "var(--leaf)"],
        ["e.g.", "For example…", "var(--inf)"],
        ["end", "To sum up…", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Acuerdo y desacuerdo</h3><p>En un debate se discute con educación. <b>Acuerdo</b>: I totally agree · That's a good point · Exactly! <b>Acuerdo parcial</b>: I see what you mean, but… <b>Desacuerdo</b>: I'm afraid I disagree · I don't think so because… Evita el brusco «You're wrong».</p>`,
      svg: L.filas("Grados de acuerdo y desacuerdo", [
        ["Agree", "I totally agree.", "var(--leaf)"], ["Partly", "I see your point, but…", "var(--inf)"],
        ["Disagree", "I'm afraid I disagree.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Interrumpir y ganar tiempo</h3><p>Para <b>interrumpir</b>: Sorry to interrupt, but… · Can I add something? Para <b>retomar</b>: As I was saying… Para <mark>ganar tiempo</mark> si te quedas en blanco: Well, let me think… · That's an interesting question… · How can I put it?</p>`,
      svg: L.dialogo("Ejemplo de debate con interrupción educada", [
        ["Sam", "Phones should be banned at school…", "var(--pen)"],
        ["Eva", "Sorry to interrupt, but what about…?", "var(--red)"],
        ["Sam", "That's a good point. However…", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Voz y cuerpo</h3><p>Lo que no dices también comunica. Mira al público (<b>eye contact</b>), habla <b>despacio</b> y haz pausas, no leas: usa tarjetas con palabras clave. Mantén una postura abierta y usa las manos para acompañar. Ensaya en voz alta con <mark>cronómetro</mark>.</p>`,
      svg: L.filas("Consejos de voz y lenguaje corporal", [
        ["Eyes", "look at the audience", "var(--pen)"], ["Voice", "slow, clear, pauses", "var(--leaf)"],
        ["Notes", "key words, don't read", "var(--inf)"], ["Practice", "time yourself", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Kit de frases para hablar en público",
    svg: L.columnas("Frases para empezar, conectar, debatir y terminar", [
      ["empezar", "START", ["Today I'm going", "to talk about…"], "var(--pen)"],
      ["conectar", "LINK", ["Moving on to…", "For example…"], "var(--leaf)"],
      ["debatir", "DEBATE", ["I see your point,", "but…"], "var(--inf)"],
      ["terminar", "FINISH", ["To sum up…", "Any questions?"], "var(--red)"],
    ]),
  },
  video: { id: "I5l7e6oW-GM", titulo: "Phrases for expressing an opinion", canal: "British Council | LearnEnglish Teens", vistas: 429572, megusta: 7912, busqueda: "debate in english phrases agreeing disagreeing" },
  quiz: [
    { q: "«Moving on to…» sirve para…", o: ["empezar", "pasar a la siguiente parte", "despedirse"], a: 1, e: "Es signposting para cambiar de apartado." },
    { q: "¿Qué frase expresa desacuerdo con educación?", o: ["You're wrong.", "I'm afraid I disagree.", "Shut up."], a: 1, e: "«I'm afraid» suaviza el desacuerdo." },
    { q: "Si te quedas en blanco, puedes decir…", o: ["Well, let me think…", "Goodbye!", "I don't speak English."], a: 0, e: "Frase para ganar tiempo." },
    { q: "Para interrumpir con educación:", o: ["Sorry to interrupt, but…", "Stop talking!", "Listen to me!"], a: 0, e: "Pide perdón antes de intervenir." },
    { q: "En una presentación es mejor…", o: ["leer todo el texto", "usar tarjetas con palabras clave", "mirar al suelo"], a: 1, e: "Las palabras clave te guían sin leer." },
  ],
  examen: [
    { q: "«I see what you mean, but…» expresa…", o: ["acuerdo total", "acuerdo parcial", "saludo"], a: 1, e: "Reconoce la idea del otro y matiza." },
    { q: "La parte en la que anuncias los apartados se llama…", o: ["outline", "conclusion", "questions"], a: 0, e: "El outline o índice de la charla." },
    { q: "«Eye contact» significa…", o: ["mirar al público", "usar gafas", "cerrar los ojos"], a: 0, e: "Mirar a los ojos genera confianza." },
  ],
  feynman: ["Las partes de una presentación", "Qué es el signposting y tres ejemplos", "Cómo estar en desacuerdo con educación", "Tres consejos de lenguaje corporal"],
  mapa: mapa("SPEAKING", "var(--eso)", [
    ["Structure", "opening · body · conclusion", "var(--pen)"],
    ["Signposting", "Moving on to… · To sum up", "var(--leaf)"],
    ["Debate", "agree · disagree politely", "var(--inf)"],
    ["Delivery", "eye contact · slow voice", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Signposting", "Frases que guían al público: Let's start with…, Moving on to…, To sum up…"],
    ["Desacuerdo educado", "I'm afraid I disagree. / I see your point, but…"],
    ["Interrumpir", "Sorry to interrupt, but… / Can I add something?"],
    ["Ganar tiempo", "Well, let me think… / That's an interesting question."],
    ["Lenguaje corporal", "Mirar al público, hablar despacio, postura abierta, no leer."],
  ],
  familias: ["Organizad un minidebate en inglés de 5 minutos sobre un tema de casa (mascotas, horarios, vacaciones).", "Pedidle que ensaye su presentación delante de vosotros con cronómetro.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Producción e interacción oral: presentaciones planificadas, debates y estrategias de cooperación y compensación (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Pecha kucha de 6 diapositivas × 20 segundos.", "Debate en formato «four corners» (strongly agree … strongly disagree).", "Rúbrica de coevaluación con estructura, signposting, voz y contacto visual."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: speaking skills", url: "https://learnenglishteens.britishcouncil.org/skills/speaking" },
    { t: "Consejo de Europa: Marco común europeo de referencia (MCER), volumen complementario", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Preparar y dar una presentación de tres minutos", "Seguir las reglas de un debate formal", "Pedir aclaraciones y responder preguntas del público"],
  bloques: [
    { tras: "La estructura de una presentación", html: `<h3>Cómo empezar y cómo terminar</h3><p>El principio y el final son lo que más recuerda el público. Para <b>empezar</b>:</p><ul><li>Saluda y preséntate: «Good morning, everyone. My name is Laura and today I'm going to talk about…»</li><li>Engancha con una pregunta («Have you ever wondered…?»), un dato («Every minute, a truck of plastic ends up in the ocean») o una historia breve.</li><li>Anuncia las partes: «First, I'll explain…, then I'll show you… and finally…»</li></ul><p>Para <b>terminar</b>: resume («To sum up, …»), deja una idea final o una llamada a la acción («So next time you go shopping, take your own bag») y da las gracias: «Thank you for listening. Are there any questions?»</p>` },
    { tras: "Signposting: las señales del discurso", html: `<h3>Hablar de imágenes y gráficos</h3><p>En muchas presentaciones apoyas tus ideas con diapositivas. Frases útiles:</p><ul><li>Presentar: «<b>As you can see</b> in this slide…», «<b>Let's have a look at</b> this graph.»</li><li>Describir tendencias: «The number of users <b>increased / rose</b> sharply», «Sales <b>decreased / fell</b> slightly», «It <b>remained stable</b>».</li><li>Destacar: «<b>The most striking thing</b> is…», «<b>What's interesting here</b> is…»</li><li>Comparar: «<b>Twice as many</b> girls as boys…», «<b>Half of</b> the students…»</li></ul><p>Regla para las diapositivas: <mark>pocas palabras e imágenes grandes</mark>. Si la diapositiva lo dice todo, el público lee y deja de escucharte.</p>` },
    { tras: "Acuerdo y desacuerdo", html: `<h3>Las reglas de un debate formal</h3><p>En un debate de clase hay dos equipos: el que defiende la moción (<b>proposition</b>, a favor) y el que la ataca (<b>opposition</b>, en contra). La <b>moción</b> es una frase como «This house believes that homework should be banned». Un moderador da los turnos y controla el tiempo.</p><ol><li><b>Opening statements</b>: cada equipo presenta su postura y sus argumentos (2 min).</li><li><b>Rebuttals</b>: cada equipo responde a los argumentos del contrario (1-2 min).</li><li><b>Open floor</b>: preguntas del público.</li><li><b>Closing statements</b>: resumen final (1 min).</li><li><b>Votación</b> del público.</li></ol><p>Para rebatir: «<i>Our opponents claim that…, but…</i>», «<i>That argument doesn't take into account…</i>».</p>` },
    { tras: "Interrumpir y ganar tiempo", html: `<h3>Pedir aclaraciones y responder preguntas</h3><p>No pasa nada si no entiendes algo: lo importante es saber pedirlo.</p>${L.tb(["Situación", "Frases"], [["no has oído", "Sorry, could you repeat that, please?"], ["no has entendido", "Sorry, I'm not sure I understand. Could you explain what you mean by…?"], ["comprobar", "So, what you're saying is… Is that right?"], ["buena pregunta", "That's a really good question."], ["no sabes la respuesta", "I'm afraid I don't know, but I'll find out."], ["volver al tema", "Anyway, as I was saying…"]])}<p>Repetir la idea del otro con tus palabras («So you mean that…») te da tiempo para pensar y demuestra que escuchas.</p>` },
    { tras: "Voz y cuerpo", html: `<h3>Pronunciación que se nota</h3><p>Tres aspectos que mejoran mucho tu inglés hablado en una presentación:</p><ul><li><b>Acento de palabra</b>: «<i>PHOtograph</i>, <i>phoTOgrapher</i>, <i>photoGRAphic</i>». Comprueba las palabras clave de tu tema en el diccionario.</li><li><b>Acento de frase</b>: se marcan las palabras importantes (sustantivos, verbos, adjetivos) y las demás se dicen más deprisa: «I <b>THINK</b> we should <b>BAN</b> <b>PLASTIC</b> <b>BAGS</b>».</li><li><b>Terminaciones</b>: pronuncia la -s del plural y de la tercera persona y la -ed del pasado; los españoles tienden a comérselas.</li></ul><p>Ensaya en voz alta, grábate con el móvil y cronométrate: tres minutos son unas 350-400 palabras habladas.</p>` },
  ],
  videos: [
    ["La estructura de una presentación", L.vid("LrjlW00kkws", "How to start a presentation", "Expert Academy", 8135213)],
    ["Signposting: las señales del discurso", L.vid("fzIxD1jXn44", "Presentations in English: how to give a presentation", "Oxford Online English", 2881460)],
  ],
  ejemplos: [
    ["Escribe la apertura de una presentación sobre el reciclaje.", ["Saludo y presentación: «Good morning, everyone. I'm Hugo.»", "Gancho con un dato: «Did you know that only 9% of plastic is recycled?»", "Tema y partes: «Today I'm going to talk about recycling. First…, then…, and finally…»"], "Good morning, everyone. I'm Hugo. Did you know that only 9% of all plastic ever made has been recycled? Today I'm going to talk about why recycling matters, what problems it has and what we can do at school."],
    ["Rebate en un debate: tu oponente dice «Social media is a waste of time».", ["Reconoce en parte: «I see your point. Some people spend too long online.»", "Opón tu argumento: «However, social media also helps us learn and stay in touch.»", "Da un ejemplo: «For example, many students use YouTube to study.»"], "I see your point, and it's true that some people spend too long online. However, social media also helps us learn and stay in touch. For example, many students use YouTube to revise for exams."],
    ["Describe un gráfico: el uso del móvil de los adolescentes pasó de 2 a 4 horas diarias entre 2015 y 2025.", ["Presenta el gráfico: «As you can see in this graph…»", "Describe la tendencia con un verbo: increased / doubled.", "Destaca el dato: «It doubled in ten years»."], "As you can see in this graph, the time teenagers spend on their phones increased from two to four hours a day between 2015 and 2025. In other words, it doubled in just ten years."],
  ],
  errores: [
    "Leer el texto entero de un papel o de la diapositiva sin mirar al público.",
    "Interrumpir sin fórmula de cortesía o hablar a la vez que otro.",
    "Decir «I am agree»: se dice I agree.",
    "Usar diapositivas llenas de texto.",
    "Olvidar las terminaciones -s y -ed al hablar.",
  ],
  ejercicios: [
    ["Escribe tres formas de enganchar al público al principio.", "Una pregunta («Have you ever…?»), un dato sorprendente y una historia o anécdota breve."],
    ["¿Qué frase usas para pasar a la segunda parte de la presentación?", "Moving on to… / Let's now turn to… / Next, I'd like to talk about…"],
    ["Corrige: «I am agree with you.»", "I agree with you. Agree es un verbo, no un adjetivo."],
    ["Escribe una frase de acuerdo parcial.", "I see what you mean, but… / You have a point, but… / Up to a point, I agree."],
    ["Pide que te repitan algo con educación.", "Sorry, could you repeat that, please?"],
    ["¿Qué es la «proposition» en un debate?", "El equipo que defiende la moción, es decir, el que está a favor."],
    ["Describe la tendencia: las ventas bajaron un poco.", "Sales decreased (fell) slightly."],
    ["¿Qué dices si te hacen una pregunta y no sabes la respuesta?", "I'm afraid I don't know, but I'll find out and let you know."],
    ["Marca las palabras acentuadas: «We need more green spaces in our city.»", "We NEED more GREEN SPACES in our CITY. Se acentúan las palabras con contenido."],
    ["Escribe un cierre con llamada a la acción para una charla sobre el sueño.", "To sum up, sleep is essential for learning. So tonight, put your phone away an hour before bed. Thank you for listening. Any questions?"],
  ],
  quiz: [
    ["En un debate, el equipo a favor es…", ["the proposition", "the opposition", "the floor"], 0, "Defiende la moción."],
    ["«As you can see in this slide…» sirve para…", ["presentar una imagen", "despedirse", "interrumpir"], 0, "Señala la diapositiva."],
    ["«Sales rose sharply» significa que…", ["subieron mucho", "bajaron un poco", "no cambiaron"], 0, "Rise sharply = subir mucho."],
    ["Para comprobar que has entendido:", ["So, what you're saying is…?", "Shut up.", "Next slide."], 0, "Reformula la idea."],
    ["Tres minutos hablando son unas…", ["350-400 palabras", "50 palabras", "2.000 palabras"], 0, "Unas 120-130 por minuto."],
  ],
  tarjetas: [
    ["Proposition / opposition", "Equipo a favor / en contra de la moción."],
    ["Rebuttal", "Respuesta a los argumentos del contrario: Our opponents claim that…, but…"],
    ["Pedir aclaración", "Sorry, could you explain what you mean by…?"],
  ],
});
