// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Writing: opinion essays",
  minutos: 40,
  objetivos: ["Organizar un opinion essay en cuatro párrafos", "Usar expresiones de opinión y conectores", "Revisar el texto antes de entregarlo"],
  claves: ["opinion essay", "introduction", "topic sentence", "linking words", "conclusion", "In my opinion", "However"],
  pregunta: {
    texto: "Te piden un ensayo en inglés: «Should school uniforms be compulsory?». Tienes 150 palabras y 30 minutos. ¿Por dónde empiezas?",
    respuesta: "Por un <mark>plan de cuatro párrafos</mark>: introducción con tu opinión, dos párrafos con argumentos (o uno a favor y otro en contra) y una conclusión. Con la estructura clara, escribir es mucho más rápido y el examinador lo valora.",
  },
  bloques: [
    {
      html: `<h3>La estructura de cuatro párrafos</h3><p><b>1. Introduction</b>: presenta el tema y da tu opinión. <b>2. Body 1</b>: primer argumento con ejemplo. <b>3. Body 2</b>: segundo argumento o la opinión contraria y por qué no la compartes. <b>4. Conclusion</b>: resume y repite tu opinión con otras palabras.</p>`,
      svg: L.filas("Estructura del opinion essay en cuatro párrafos", [
        ["1 Introduction", "topic + your opinion", "var(--pen)"], ["2 Body 1", "argument + example", "var(--leaf)"],
        ["3 Body 2", "argument / other view", "var(--inf)"], ["4 Conclusion", "summary + opinion", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Expresar opinión</h3><p>Varía las expresiones para no repetir «I think»: <mark>In my opinion, … · I strongly believe that … · From my point of view, … · It seems to me that … · I am convinced that …</mark>. Para la opinión contraria: <i>Some people argue that…</i>, <i>Others claim that…</i></p>`,
      svg: L.filas("Expresiones para dar opinión", [
        ["Tu opinión", "In my opinion,…", "var(--pen)"], ["Más fuerte", "I strongly believe…", "var(--red)"],
        ["Otros dicen", "Some people argue…", "var(--muted)"], ["Concluir", "All in all,…", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Linking words</h3><p>Los conectores dan cohesión y suben nota. <b>Ordenar</b>: Firstly, Secondly, Finally. <b>Añadir</b>: Moreover, In addition, What is more. <b>Contrastar</b>: However, On the other hand, Although. <b>Ejemplificar</b>: For example, For instance. <b>Concluir</b>: In conclusion, To sum up.</p>`,
      svg: L.tabla("Conectores para el ensayo", ["Function", "Linkers"], [
        ["order", "Firstly · Finally"], ["add", "Moreover"], ["contrast", "However"], ["conclude", "To sum up"],
      ], "var(--inf)"),
    },
    {
      html: `<h3>El párrafo perfecto</h3><p>Cada párrafo de desarrollo empieza con una <mark>topic sentence</mark> que resume la idea, sigue con una <b>explicación</b> y termina con un <b>ejemplo</b> o dato. «Firstly, uniforms reduce peer pressure. Students do not compete for expensive clothes. For example, …».</p>`,
      svg: L.filas("Partes de un párrafo de desarrollo", [
        ["Topic sentence", "main idea", "var(--pen)"],
        ["Explanation", "why?", "var(--leaf)"],
        ["Example", "for instance…", "var(--red)"],
      ], "body paragraph"),
    },
    {
      html: `<h3>Antes de entregar: checklist</h3><p>Revisa: ¿está mi opinión clara en la introducción y en la conclusión? ¿Uso conectores variados? ¿Registro <b>formal</b>, sin contracciones (<i>do not</i>, no <i>don't</i>)? ¿Concuerdan sujeto y verbo (<i>he thinks</i>)? ¿Respeto el <mark>número de palabras</mark>?</p>`,
      svg: L.filas("Lista de revisión del ensayo", [
        ["✓", "opinion in intro and conclusion", "var(--leaf)"], ["✓", "varied linking words", "var(--pen)"],
        ["✓", "formal: no contractions", "var(--inf)"], ["✓", "word count", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Plan de un opinion essay",
    svg: L.pasos("Cuatro párrafos del ensayo de opinión con ejemplo sobre uniformes", [
      ["Introduction", ["Uniforms are a hot", "topic. I believe…"], "var(--pen)"],
      ["Body 1", ["Firstly, they", "save money…"], "var(--leaf)"],
      ["Body 2", ["However, some", "people argue…"], "var(--inf)"],
      ["Conclusion", ["To sum up,", "I am convinced…"], "var(--red)"],
    ]),
  },
  video: { id: "5oca6PcR2Dw", titulo: "How to write an opinion essay", canal: "I. Hebreo", vistas: 200510, megusta: 1678, busqueda: "how to write an opinion essay english" },
  quiz: [
    { q: "¿Dónde debe aparecer tu opinión por primera vez?", o: ["En la introducción", "Solo en la conclusión", "En ningún sitio"], a: 0, e: "La introducción presenta el tema y tu postura." },
    { q: "¿Qué conector expresa contraste?", o: ["Moreover", "However", "Firstly"], a: 1, e: "However = sin embargo." },
    { q: "La primera frase de un párrafo que resume su idea se llama…", o: ["topic sentence", "conclusion", "title"], a: 0, e: "La topic sentence anuncia la idea principal del párrafo." },
    { q: "En un ensayo formal es mejor escribir…", o: ["don't", "do not", "dont"], a: 1, e: "Registro formal: sin contracciones." },
    { q: "«To sum up» sirve para…", o: ["añadir", "concluir", "dar un ejemplo"], a: 1, e: "Introduce la conclusión." },
  ],
  examen: [
    { q: "¿Qué expresión introduce la opinión contraria?", o: ["Some people argue that…", "For example…", "Finally…"], a: 0, e: "Presenta lo que piensan otros." },
    { q: "«For instance» significa…", o: ["por ejemplo", "por tanto", "sin embargo"], a: 0, e: "Equivale a «for example»." },
    { q: "Un opinion essay típico tiene…", o: ["4 párrafos", "1 párrafo", "10 párrafos"], a: 0, e: "Introducción, dos de desarrollo y conclusión." },
  ],
  feynman: ["Las cuatro partes de un opinion essay", "Cinco expresiones para dar opinión", "Conectores para añadir, contrastar y concluir", "Qué reviso antes de entregar"],
  mapa: mapa("OPINION ESSAY", "var(--eso)", [
    ["Structure", "intro · 2 bodies · conclusion", "var(--pen)"],
    ["Opinion", "In my opinion · I believe", "var(--red)"],
    ["Linkers", "Moreover · However", "var(--inf)"],
    ["Check", "formal · word count", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Partes del opinion essay", "Introduction, body 1, body 2, conclusion."],
    ["Topic sentence", "Primera frase del párrafo que anuncia su idea principal."],
    ["Conectores de adición", "Moreover, In addition, What is more, Furthermore."],
    ["Conectores de contraste", "However, On the other hand, Although, Nevertheless."],
    ["Registro formal", "Sin contracciones, sin jerga y con vocabulario preciso."],
  ],
  familias: ["Elegid un tema de debate familiar y pedidle que escriba la introducción en inglés.", "Leed juntos su redacción y buscad tres conectores; si no los hay, añadidlos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Producción escrita: textos argumentativos breves, planificación, cohesión y revisión (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Ensayo en puzle: cada grupo escribe un párrafo y se ensamblan.", "Corrección entre iguales con la checklist del tema.", "Banco de conectores en la pared que se amplía cada semana."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: writing skills", url: "https://learnenglishteens.britishcouncil.org/skills/writing" },
    { t: "Cambridge English: B1 Preliminary for Schools, writing", url: "https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escribir introducciones y conclusiones eficaces", "Incluir y rebatir la opinión contraria", "Planificar un ensayo en diez minutos"],
  bloques: [
    { tras: "La estructura de cuatro párrafos", html: `<h3>Cómo escribir la introducción</h3><p>La introducción tiene dos o tres frases y una misión: <b>presentar el tema</b> y <b>dar tu opinión</b>. Hay varias formas de empezar para enganchar al lector:</p><ul><li>Con una <b>pregunta</b>: «Should mobile phones be banned in schools?»</li><li>Con un <b>dato</b>: «Nowadays, almost every teenager owns a smartphone.»</li><li>Con una <b>afirmación general</b>: «Technology has changed the way we learn.»</li></ul><p>Después, la <b>tesis</b>: «In my opinion, phones should be allowed in schools, but only for educational purposes.» Evita empezar con «In this essay I am going to talk about…»: es correcto pero muy pobre. Y no metas los argumentos en la introducción: van en el cuerpo.</p>` },
    { tras: "Linking words", html: `<h3>Dar ejemplos, causas y consecuencias</h3><p>Además de los conectores de orden, adición y contraste, necesitas estos para desarrollar los argumentos:</p>${L.tb(["Función", "Conectores", "Ejemplo"], [["ejemplo", "for example, for instance, such as", "Many sports, <b>such as</b> swimming, are cheap."], ["causa", "because, because of, due to, since, as", "<b>Due to</b> the rain, the match was cancelled."], ["consecuencia", "so, therefore, as a result, consequently", "<b>As a result</b>, students sleep less."], ["concesión", "although, even though, despite + -ing / noun", "<b>Despite having</b> money, he wasn't happy."], ["conclusión", "to sum up, in conclusion, all in all, to conclude", "<b>All in all</b>, the advantages are clear."]])}<p>Fíjate en la puntuación: <i>However, Therefore, Moreover</i> van al principio de la frase seguidos de coma.</p>` },
    { tras: "El párrafo perfecto", html: `<h3>El párrafo de la opinión contraria</h3><p>Un ensayo maduro reconoce que hay otra postura y la rebate. Es el párrafo que más impresiona a quien corrige:</p><ol><li><b>Presenta</b> la opinión contraria: «<i>Some people argue that</i> phones distract students in class.» / «<i>It is often said that</i>…» / «<i>Opponents claim that</i>…»</li><li><b>Reconócela</b> en parte: «<i>It is true that</i> some students use them to chat.»</li><li><b>Rebátela</b>: «<i>However</i>, teachers can set clear rules, and phones are useful tools for research.»</li></ol><p>Así demuestras que has pensado en el tema y no solo repites tu opinión.</p>` },
    { tras: "El párrafo perfecto", html: `<h3>Registro y vocabulario</h3><p>El ensayo de opinión es un texto <b>formal</b>. Algunas sustituciones fáciles que suben el nivel:</p>${L.tb(["Informal", "Formal"], [["a lot of", "a great deal of / many / much"], ["get", "obtain / receive / become"], ["kids", "children / young people"], ["really good", "extremely beneficial"], ["think", "believe / consider"], ["don't", "do not"]])}<p>Evita también las preguntas al lector en el cuerpo del texto, el lenguaje de chat y los signos de exclamación. Usa <b>sujetos impersonales</b> para sonar objetivo: «<i>It is clear that…</i>», «<i>There is no doubt that…</i>», «<i>Many experts believe…</i>».</p>` },
    { tras: "Antes de entregar: checklist", html: `<h3>Plan en diez minutos</h3><p>En el examen, dedica unos minutos a planificar antes de escribir:</p><ol><li><b>Lee bien la pregunta</b> y subraya las palabras clave (¿te piden opinión, ventajas y desventajas o una solución?).</li><li><b>Haz una lluvia de ideas</b> a favor y en contra (dos minutos).</li><li><b>Elige tu postura</b> y los dos argumentos más fuertes, con un ejemplo para cada uno.</li><li><b>Piensa una objeción</b> y su respuesta.</li><li><b>Escribe el esquema</b>: una línea por párrafo.</li><li>Al final, <b>reserva cinco minutos</b> para revisar errores de verbos, artículos y la -s de la tercera persona.</li></ol><p>Controla el número de palabras: si piden 120-150, no escribas 250.</p>` },
  ],
  videos: [
    ["La estructura de cuatro párrafos", L.vid("DqwzYoThUpg", "Ensayo de opinión o ensayo persuasivo", "Smrt English", 735791)],
    ["Expresar opinión", L.vid("SpAIW4p8wkw", "Cómo expresar tu opinión en un ensayo (IELTS, tarea 2)", "IELTS Liz", 1991080)],
  ],
  ejemplos: [
    ["Escribe la introducción para: «Homework should be banned. Do you agree?»", ["Empieza con una idea general o una pregunta: «Homework has been part of school life for decades.»", "Plantea el debate: «However, many people now question whether it is really useful.»", "Da tu opinión clara: «In my view, homework should not be banned, but it should be reduced.»"], "Homework has been part of school life for decades. However, many people now question whether it is really useful. In my view, it should not be banned, but it should be reduced."],
    ["Mejora este párrafo: «I think sport is good. It is good for health. And it is good for friends. And it is fun.»", ["Añade una topic sentence: «Firstly, doing sport has many benefits.»", "Sustituye los «and» por conectores variados: «Not only… but also», «Moreover».", "Añade un ejemplo concreto y evita repetir «good»."], "Firstly, doing sport has many benefits. Not only does it improve our health, but it also helps us make friends. Moreover, team sports such as football teach us to cooperate."],
    ["Escribe la conclusión de un ensayo a favor de los uniformes escolares.", ["Empieza con un conector de conclusión: «To sum up».", "Resume los argumentos sin añadir ideas nuevas.", "Repite la opinión con otras palabras."], "To sum up, school uniforms reduce social differences and save families time and money. Therefore, I firmly believe that all schools should have one."],
  ],
  errores: [
    "No dar la opinión en la introducción o cambiarla en la conclusión.",
    "Escribir contracciones (don't, can't) y vocabulario informal (kids, stuff).",
    "Meter argumentos nuevos en la conclusión.",
    "Repetir «I think» y «and» en todo el texto.",
    "Poner una coma entre dos oraciones completas sin conector: *It was late, we went home → It was late, so we went home.",
  ],
  ejercicios: [
    ["Escribe tres formas de dar tu opinión sin usar «I think».", "In my opinion, … / I strongly believe that … / From my point of view, … (también: It seems to me that…, As far as I am concerned, …)."],
    ["Une con un conector de contraste: «Electric cars are expensive. They save money in the long run.»", "Although electric cars are expensive, they save money in the long run. / Electric cars are expensive. However, they save money in the long run."],
    ["Corrige: «Despite it was raining, we went out.»", "Despite the rain, we went out. / Although it was raining, we went out. Despite va con sustantivo o -ing."],
    ["Escribe una topic sentence para un párrafo sobre las ventajas de aprender idiomas.", "«Firstly, learning languages opens up many job opportunities.»"],
    ["Escribe la frase que presenta la opinión contraria sobre los videojuegos.", "«Some people argue that video games make young people violent and lazy.»"],
    ["Rebate esa opinión en una frase.", "«However, many games develop problem-solving skills, and there is no clear evidence that they cause violence.»"],
    ["Haz formal: «Lots of kids get really stressed with exams.»", "Many young people become extremely stressed because of exams."],
    ["Completa con therefore o however: «Public transport is cheap. ___, it is not always reliable.»", "However."],
    ["Ordena los párrafos: conclusión, argumento 1, introducción, opinión contraria, argumento 2.", "Introducción, argumento 1, argumento 2, opinión contraria, conclusión."],
    ["Escribe un plan de cinco líneas para: «Should young people be allowed to vote at 16?»", "1. Intro + opinión (sí). 2. Arg. 1: pagan impuestos si trabajan y les afectan las leyes. 3. Arg. 2: se interesan por temas como el clima. 4. Contraria: no tienen madurez → respuesta: la escuela puede formar en educación cívica. 5. Conclusión: votar a los 16 refuerza la democracia."],
  ],
  quiz: [
    ["«___ the bad weather, the trip went ahead.»", ["Despite", "Although", "However"], 0, "Despite + sustantivo."],
    ["¿Qué frase introduce la opinión contraria?", ["Some people argue that…", "To sum up,…", "Firstly,…"], 0, "Presenta la otra postura."],
    ["En un ensayo formal, «kids» se sustituye por…", ["children / young people", "guys", "babies"], 0, "Registro formal."],
    ["«Such as» introduce…", ["un ejemplo", "una conclusión", "un contraste"], 0, "Sports such as tennis."],
    ["En la conclusión es mejor…", ["no añadir argumentos nuevos", "contradecir la tesis", "contar una anécdota nueva"], 0, "Resume y reafirma."],
  ],
  tarjetas: [
    ["Opinión contraria", "Some people argue that… It is true that… However, …"],
    ["Despite / although", "Despite + sustantivo o -ing; although + oración."],
    ["Conectores de conclusión", "To sum up, in conclusion, all in all, to conclude."],
  ],
});
