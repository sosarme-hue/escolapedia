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
