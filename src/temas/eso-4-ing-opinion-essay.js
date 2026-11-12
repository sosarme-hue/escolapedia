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
