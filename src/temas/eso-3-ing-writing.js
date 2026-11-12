// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Writing: narratives and descriptions",
  minutos: 40,
  objetivos: ["Organizar una narración en introducción, desarrollo y desenlace", "Escribir descripciones de personas y lugares con adjetivos precisos", "Usar conectores de tiempo, adición y contraste"],
  claves: ["paragraphs", "first / then / finally", "when / while", "and / but / because / so", "adjectives", "planning and checking"],
  pregunta: {
    texto: "Tienes que escribir «A day I will never forget» en 120 palabras. ¿Por dónde empiezas?",
    respuesta: "No por la primera frase, sino por un <mark>plan</mark>: qué pasó, en qué orden y cómo te sentiste. Con tres o cuatro ideas ordenadas en <b>párrafos</b> y unos cuantos <b>conectores</b>, el texto se escribe casi solo. Y al final, siempre, <b>revisar</b>.",
  },
  bloques: [
    {
      html: `<h3>La estructura de una narración</h3><p>Una historia en inglés se organiza igual que en español. En la <b>introducción</b> presentas <mark>quién, dónde y cuándo</mark>: «Last summer, my family and I went camping in the Pyrenees». En el <b>desarrollo</b> cuentas los hechos en orden, con un <b>problema</b> o algo inesperado: «Suddenly, it started to rain heavily». En el <b>desenlace</b> explicas cómo terminó y cómo te sentiste: «In the end, we were wet but happy. It was the best trip ever». Cada parte va en su propio <b>párrafo</b>.</p>`,
      svg: L.filas("Las tres partes de una narración", [
        ["Inicio", "who, where, when", "var(--pen)"], ["Desarrollo", "what happened + problem", "var(--red)"], ["Final", "how it ended + feelings", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Los tiempos de una historia</h3><p>Las narraciones se escriben en <b>pasado</b>. El <mark>past simple</mark> cuenta las acciones principales, una detrás de otra: «We <i>arrived</i>, <i>put up</i> the tent and <i>went</i> for a walk». El <mark>past continuous</mark> describe el fondo, lo que estaba pasando: «The sun <i>was shining</i> and the birds <i>were singing</i>». Y se combinan con <b>when</b> y <b>while</b> para las interrupciones: «<i>While</i> we were walking, we <i>saw</i> a fox».</p>`,
      svg: L.filas("Past continuous de fondo y past simple que interrumpe", [
        ["Fondo", "We were walking…", "var(--pen)"], ["Acción", "…when we saw a fox.", "var(--red)"], ["Acción", "It ran away.", "var(--red)"],
      ], "while / when"),
    },
    {
      html: `<h3>Conectores que ordenan la historia</h3><p>Los <b>conectores de secuencia</b> guían al lector: <mark>First / At first</mark> (al principio), <mark>Then / Next / After that</mark> (después), <mark>Suddenly</mark> (de repente), <mark>Finally / In the end</mark> (al final). También son útiles los de <b>tiempo</b>: <i>when, while, as soon as, later, the next day</i>. Ojo: <b>at the end</b> significa «al final de algo» (<i>at the end of the film</i>), mientras que <b>in the end</b> significa «finalmente».</p>`,
      svg: L.tabla("Conectores de secuencia", ["Momento", "Conector"], [
        ["inicio", "First, At first"], ["después", "Then, After that"], ["sorpresa", "Suddenly"], ["final", "Finally, In the end"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Describir personas y lugares</h3><p>Una buena descripción va <b>de lo general a lo particular</b>. Para una <b>persona</b>: aspecto físico (<i>She's tall and slim. She's got long curly hair and green eyes</i>), personalidad (<i>She's friendly and a bit shy</i>) y algún detalle que la haga especial (<i>She always wears a red scarf</i>). Para un <b>lugar</b>: dónde está, qué hay y qué se siente allí (<i>It's a small village in the mountains. There are narrow streets and an old church. It's quiet and peaceful</i>). Usa <mark>there is / there are</mark>, <mark>have got</mark> y muchos <b>adjetivos</b>.</p>`,
      svg: L.filas("Qué incluir en una descripción", [
        ["Aspecto", "tall, slim, curly hair", "var(--pen)"], ["Carácter", "friendly, a bit shy", "var(--red)"], ["Lugar", "narrow streets, quiet", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Plan, escribe, revisa</h3><p>Los buenos escritores siguen tres pasos. <b>Planificar</b> (5 minutos): apunta ideas, ordénalas en párrafos y elige algunos conectores y adjetivos. <b>Escribir</b>: frases claras, no demasiado largas, con tus propias palabras; no traduzcas palabra por palabra del español. <b>Revisar</b> (5 minutos): comprueba los <mark>verbos en pasado</mark>, la <b>tercera persona -s</b>, las <b>mayúsculas</b> (I, días, meses, nacionalidades), la ortografía y el número de palabras.</p>`,
      svg: L.filas("Tres pasos para escribir", [
        ["1 Plan", "ideas + párrafos", "var(--pen)"], ["2 Escribe", "frases claras", "var(--inf)"], ["3 Revisa", "verbos, -s, mayúsculas", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Plantilla de una narración",
    svg: L.pasos("Plantilla de una narración en cuatro párrafos", [
      ["Párrafo 1", ["Last summer,", "I went to…"], "var(--pen)"],
      ["Párrafo 2", ["First,…", "Then,…"], "var(--inf)"],
      ["Párrafo 3", ["Suddenly,…"], "var(--red)"],
      ["Párrafo 4", ["In the end,…", "I felt…"], "var(--leaf)"],
    ]),
  },
  video: { id: "-JqAs_vdQb8", titulo: "Cómo conectar ideas en inglés con palabras de enlace", canal: "mmmEnglish", vistas: 1065044, megusta: 0, busqueda: "linking words English writing" },
  quiz: [
    { q: "¿Qué tiempo describe el fondo de una historia?", o: ["past simple", "past continuous", "present simple"], a: 1, e: "«The sun was shining…»." },
    { q: "¿Qué conector introduce algo inesperado?", o: ["Finally", "Suddenly", "First"], a: 1, e: "Suddenly = de repente." },
    { q: "«___, we got home tired but happy.»", o: ["In the end", "At the end", "At first"], a: 0, e: "In the end = finalmente." },
    { q: "¿Qué va en la introducción?", o: ["Quién, dónde y cuándo", "El final", "Los sentimientos finales"], a: 0, e: "Presenta la situación." },
    { q: "¿Qué palabra se escribe siempre con mayúscula en inglés?", o: ["monday", "I", "summer"], a: 1, e: "I, días, meses y nacionalidades: Monday, I, English." },
  ],
  examen: [
    { q: "«___ I was reading, the lights went out.»", o: ["While", "Then", "Finally"], a: 0, e: "While + past continuous." },
    { q: "¿Cuál es una buena descripción de persona?", o: ["She's got short dark hair and she's very funny.", "She has hair.", "She is a person."], a: 0, e: "Aspecto + carácter, con adjetivos." },
    { q: "¿Qué haces en los últimos minutos del examen?", o: ["Revisar verbos, ortografía y mayúsculas", "Empezar otra redacción", "Nada"], a: 0, e: "Revisar siempre." },
  ],
  feynman: ["Cuáles son las partes de una narración", "Qué tiempos verbales se usan para contar historias", "Qué conectores ordenan una historia", "Cómo se organiza una descripción de una persona o un lugar"],
  mapa: mapa("WRITING", "var(--eso)", [
    ["Narrative", "beginning, middle, end", "var(--pen)"],
    ["Tenses", "past simple + continuous", "var(--red)"],
    ["Linkers", "first, then, suddenly", "var(--inf)"],
    ["Description", "look, personality, place", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Narración", "Introducción, desarrollo con un problema y desenlace."],
    ["Fondo y acción", "Past continuous de fondo; past simple para los hechos."],
    ["Secuencia", "First, then, after that, suddenly, in the end."],
    ["Descripción", "Aspecto físico, carácter y un detalle especial."],
    ["Revisión", "Verbos, -s de tercera persona, mayúsculas y número de palabras."],
  ],
  familias: ["Pedid a vuestro hijo o hija que os cuente en inglés, con conectores, una anécdota del fin de semana.", "Describid juntos una foto de un viaje: «In this photo there is…».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Producción escrita: narraciones y descripciones breves organizadas en párrafos, con conectores de secuencia, adición, contraste y causa; estrategias de planificación y revisión (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Historia en cadena: cada alumno añade un párrafo con un conector distinto.", "Revisión entre pares con una lista de control.", "Describir a un compañero sin decir su nombre para que la clase adivine."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: writing", url: "https://learnenglishteens.britishcouncil.org/skills/writing" },
    { t: "Cambridge English: A2 Key for Schools, writing", url: "https://www.cambridgeenglish.org/exams-and-tests/key-for-schools/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Unir ideas con and, but, because, so y although", "Enriquecer el texto con adjetivos y adverbios"],
  bloques: [
    { tras: "Conectores que ordenan la historia", html: `<h3>Conectores para unir ideas</h3>${L.tb(["Para…", "Conector", "Ejemplo"], [["añadir", "and, also, too", "It was cold <b>and</b> windy."], ["contrastar", "but, however", "It was cold, <b>but</b> we went out."], ["contraste fuerte", "although", "<b>Although</b> it was late, we kept walking."], ["dar la causa", "because", "We stopped <b>because</b> we were tired."], ["dar la consecuencia", "so", "We were tired, <b>so</b> we stopped."]])}<p><b>However</b> va al principio de la frase y seguido de coma: «It was expensive. <b>However</b>, it was worth it». Un texto sin conectores parece una lista de frases sueltas.</p>` },
    { tras: "Describir personas y lugares", html: `<h3>Adjetivos que dan vida al texto</h3><p>Cambia los adjetivos comodín (<i>good, bad, nice, big</i>) por otros más <b>precisos</b>: <i>nice</i> → <mark>delicious, friendly, beautiful, cosy</mark>; <i>bad</i> → <mark>awful, terrible, boring</mark>; <i>big</i> → <mark>huge, enormous</mark>; <i>happy</i> → <mark>delighted, excited</mark>. Recuerda que en inglés el adjetivo va <b>delante</b> del nombre y no tiene plural: «two <i>old</i> houses», nunca *«two houses olds». Si pones varios, el orden suele ser opinión, tamaño, edad, color: «a <i>lovely little old red</i> car».</p>`, video: L.vid("RSoRzTtwgP4", "How to write descriptively", "TED-Ed", 6124211) },
    { tras: "Los tiempos de una historia", html: `<h3>Mostrar emociones y añadir detalles</h3><p>Lo que convierte una lista de hechos en una <b>historia</b> son los detalles y las emociones. Compara: «We went to the beach. We swam. We went home» con «It was a <i>boiling</i> day, so we went to the beach. The water was <i>freezing</i>, but we swam for hours. When we got home, I was <i>exhausted</i> but really happy». Añade <b>adverbios</b> (<i>quickly, slowly, luckily, unfortunately</i>), <b>sentidos</b> (lo que viste, oíste, oliste) y <mark>cómo te sentiste</mark>: <i>I was scared / surprised / excited / disappointed</i>.</p>` },
    { tras: "Plan, escribe, revisa", html: `<h3>Modelo de narración comentado</h3><p>«<b>Last December</b>, my friends and I went to the city centre to see the Christmas lights. It was cold and the streets were full of people. <b>First</b>, we had hot chocolate in a small café. <b>Then</b> we walked to the main square. <b>While</b> we were taking photos, I realised that my phone wasn't in my pocket! I was really scared. <b>Luckily</b>, a kind woman had found it on the floor, and she gave it back to me. <b>In the end</b>, it was a great evening, <b>but</b> now I always check my pockets!». Fíjate: <mark>cuándo y dónde</mark> al principio, conectores de secuencia, past continuous de fondo, un problema y un final con sentimientos.</p>` },
    { tras: "La estructura de una narración", html: `<h3>Cómo empezar y cómo terminar</h3><p>El <b>principio</b> y el <b>final</b> son lo que más recuerda el lector. Para empezar, puedes situar la escena (<i>It was a cold, dark night…</i>), hacer una pregunta (<i>Have you ever been lost in a big city?</i>) o ir directo a la acción (<i>I couldn't believe my eyes!</i>). Para terminar, cuenta cómo te sentiste o qué aprendiste: <i>It was the best day of my life</i>, <i>I'll never forget it</i>, <i>Now I know that…</i>. Si el enunciado te da la <mark>primera o la última frase</mark>, como en los exámenes de Cambridge, cópiala exactamente y construye la historia a su alrededor.</p>` },
  ],
  ejemplos: [
    ["Une con un conector: «It was raining. We played football.»", ["Hay contraste: llovía y aun así jugamos.", "Conector de contraste: but o although."], "It was raining, but we played football. / Although it was raining, we played football."],
    ["Mejora: «The hotel was nice. The food was nice. The staff were nice.»", ["Evita repetir nice.", "Elige adjetivos precisos para cada cosa.", "Une las frases con conectores."], "The hotel was cosy, the food was delicious and the staff were really friendly."],
    ["Planifica una descripción de tu mejor amigo o amiga.", ["Párrafo 1: quién es y desde cuándo lo conoces.", "Párrafo 2: aspecto físico (have got, adjetivos).", "Párrafo 3: carácter y aficiones, con un ejemplo.", "Cierre: por qué es especial para ti."], "Un plan de cuatro párrafos, con adjetivos y have got / is."],
  ],
  errores: [
    "Escribir todo en un solo bloque, sin párrafos.",
    "Mezclar presente y pasado en una narración.",
    "Poner plural al adjetivo: *two olds houses → two old houses.",
    "Escribir con minúscula I, los días o los meses: *i went on monday.",
    "Traducir palabra por palabra del español: *I have 14 years → I'm 14.",
  ],
  ejercicios: [
    ["Ordena: «In the end / First / Then / Suddenly».", "First, Then, Suddenly, In the end."],
    ["Completa con because o so: «I was hungry, ___ I made a sandwich.»", "so."],
    ["Completa con but o although: «___ it was late, we stayed.»", "Although."],
    ["Escribe en past continuous el fondo: «It / rain / and people / run».", "It was raining and people were running."],
    ["Sustituye nice por un adjetivo mejor: «a nice cake», «a nice view».", "a delicious cake, a beautiful / amazing view."],
    ["Corrige: «i visited london in july with my english teacher.»", "I visited London in July with my English teacher."],
    ["Escribe una primera frase interesante para «A strange day».", "Por ejemplo: «When I woke up that morning, my house was completely silent.»"],
    ["Describe tu habitación en tres frases con there is / there are.", "Por ejemplo: «My bedroom is small but cosy. There is a big window next to my bed. There are posters of my favourite bands on the walls.»"],
    ["Describe a una persona famosa: aspecto y carácter (dos frases).", "Por ejemplo: «He's tall and he's got short dark hair. He's hard-working and very generous.»"],
    ["Escribe una narración de 80–100 palabras: «A day I will never forget».", "Debe tener párrafos, verbos en pasado, al menos cuatro conectores, un problema y un final con sentimientos."],
  ],
  quiz: [
    ["«I was tired, ___ I went to bed early.»", ["so", "because", "but"], 0, "Consecuencia: so."],
    ["«It was expensive. ___, we bought it.»", ["However", "Because", "So that"], 0, "Contraste al inicio de frase: However,"],
    ["Adjetivo más preciso que «very big»:", ["huge", "nice", "small"], 0, "Huge = enorme."],
    ["¿Qué orden es correcto?", ["a beautiful old house", "a house old beautiful", "an old beautiful house"], 0, "Opinión antes que edad."],
    ["Una buena forma de terminar una historia es…", ["Contar cómo te sentiste", "Empezar otra historia", "Repetir la primera frase"], 0, "Cierre con sentimientos o lo aprendido."],
  ],
  tarjetas: [
    ["but / however / although", "Tres formas de contrastar ideas."],
    ["because / so", "Causa y consecuencia."],
    ["Adjetivos precisos", "nice → delicious, friendly, cosy; big → huge."],
  ],
});
