// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La oración compuesta: coordinación y yuxtaposición",
  minutos: 40,
  objetivos: ["Distinguir la oración simple de la compuesta", "Reconocer oraciones yuxtapuestas", "Clasificar las coordinadas por su nexo"],
  claves: ["oración compuesta", "proposición", "yuxtaposición", "coordinación", "nexo", "copulativa", "adversativa", "disyuntiva"],
  pregunta: {
    texto: "«Llegué, vi, vencí.» ¿Cuántas oraciones hay en esta frase famosa de Julio César, si solo tiene tres palabras?",
    respuesta: "Hay <mark>tres verbos</mark>, así que hay tres proposiciones unidas en una sola <b>oración compuesta</b>. Están juntas sin nexo, solo con comas: son <b>yuxtapuestas</b>.",
  },
  bloques: [
    {
      html: `<h3>Simple o compuesta</h3><p>Una oración <b>simple</b> tiene un solo verbo en forma personal. Una <b>compuesta</b> tiene dos o más: cada parte con su verbo se llama <mark>proposición</mark>. Truco: <b>cuenta los verbos conjugados</b> (las perífrasis como «tengo que ir» cuentan como uno).</p>`,
      svg: L.frase("Oración compuesta con dos verbos: Marta estudia y su hermano juega", [
        ["Marta", "", "var(--line)"], ["estudia", "verbo 1", "var(--pen)"], ["y", "nexo", "var(--red)"],
        ["su hermano", "", "var(--line)"], ["juega.", "verbo 2", "var(--pen)"],
      ], "2 verbos = 2 proposiciones"),
    },
    {
      html: `<h3>Yuxtaposición</h3><p>Las proposiciones se unen <mark>sin nexo</mark>, solo con signos de puntuación: coma, punto y coma o dos puntos. «No vengas mañana; estaré fuera.» El significado (aquí, una causa) se entiende por el contexto.</p>`,
      svg: L.frase("Yuxtapuestas: No vengas mañana; estaré fuera", [
        ["No vengas mañana", "proposición 1", "var(--pen)"], [";", "sin nexo", "var(--red)"], ["estaré fuera.", "proposición 2", "var(--leaf)"],
      ], "unidas solo por la puntuación"),
    },
    {
      html: `<h3>Coordinación</h3><p>Las proposiciones son <b>independientes</b>: ninguna depende de la otra y tienen el mismo nivel. Se unen con un <mark>nexo coordinante</mark>. Según el nexo hay coordinadas <b>copulativas</b>, <b>disyuntivas</b> y <b>adversativas</b>.</p>`,
      svg: L.filas("Clases de coordinadas y sus nexos", [
        ["Copulativas", "suman: y, e, ni", "var(--leaf)"],
        ["Disyuntivas", "eligen: o, u, o bien", "var(--inf)"],
        ["Adversativas", "oponen: pero, sino", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Ejemplos de cada tipo</h3><p><b>Copulativa:</b> «Ni come ni deja comer». <b>Disyuntiva:</b> «¿Vienes o te quedas?». <b>Adversativa:</b> «Es tarde, pero aún hay luz»; con «sino» corrige algo negado: «No es tímido, sino prudente».</p>`,
      svg: L.tabla("Ejemplos de coordinadas", ["Tipo", "Ejemplo"], [
        ["Copulativa", "Leo y escribo."], ["Disyuntiva", "¿Vienes o no?"], ["Adversativa", "Corre, pero cae."], ["con sino", "No es A, sino B."],
      ]),
    },
    {
      html: `<h3>Cómo analizarlas</h3><p>1) Localiza los verbos. 2) Separa las proposiciones. 3) Busca el nexo: si no hay, son <b>yuxtapuestas</b>; si es coordinante, mira cuál es para clasificarla. 4) Analiza cada proposición como una oración simple (sujeto y predicado).</p>`,
      svg: L.filas("Cuatro pasos para analizar una oración compuesta", [
        ["1", "subraya los verbos", "var(--pen)"], ["2", "separa las proposiciones", "var(--leaf)"],
        ["3", "busca y clasifica el nexo", "var(--red)"], ["4", "analiza cada parte", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Cómo se unen las proposiciones",
    svg: L.columnas("Yuxtaposición, coordinación y subordinación", [
      ["sin nexo", "YUXTAPOSICIÓN", ["coma, punto y coma", "o dos puntos"], "var(--pen)"],
      ["mismo nivel", "COORDINACIÓN", ["y · o · pero · sino", "independientes"], "var(--leaf)"],
      ["una depende de otra", "SUBORDINACIÓN", ["que · cuando · si…", "(próximos temas)"], "var(--muted)"],
    ]),
  },
  video: { id: "PZrThDeiChk", titulo: "Oraciones compuestas coordinadas: concepto y tipos", canal: "Susi Profe", vistas: 562511, megusta: 0, busqueda: "oraciones coordinadas y yuxtapuestas" },
  quiz: [
    { q: "¿Cuántas proposiciones hay en «Abrí la puerta y entró el gato»?", o: ["Una", "Dos", "Tres"], a: 1, e: "Dos verbos conjugados (abrí, entró): dos proposiciones." },
    { q: "«Hacía frío; nos quedamos en casa» es una oración…", o: ["yuxtapuesta", "coordinada copulativa", "simple"], a: 0, e: "No hay nexo, solo punto y coma." },
    { q: "¿Qué nexo es adversativo?", o: ["ni", "o", "pero"], a: 2, e: "«Pero» une ideas que se oponen." },
    { q: "«¿Estudias o trabajas?» es coordinada…", o: ["disyuntiva", "copulativa", "adversativa"], a: 0, e: "El nexo «o» plantea elegir entre opciones." },
    { q: "En la coordinación, las proposiciones…", o: ["dependen una de otra", "tienen el mismo nivel", "siempre van sin nexo"], a: 1, e: "Son independientes y del mismo nivel sintáctico." },
  ],
  examen: [
    { q: "«No quiero té, sino café» es coordinada…", o: ["adversativa", "copulativa", "disyuntiva"], a: 0, e: "«Sino» corrige lo negado antes: adversativa." },
    { q: "«Tengo que estudiar» tiene…", o: ["dos verbos y es compuesta", "una perífrasis y es simple", "dos proposiciones"], a: 1, e: "«Tengo que estudiar» es una perífrasis verbal: un solo núcleo." },
    { q: "¿Qué nexo es copulativo negativo?", o: ["ni", "u", "mas"], a: 0, e: "«Ni» suma ideas negativas." },
  ],
  feynman: ["Cómo saber si una oración es simple o compuesta", "Qué son las yuxtapuestas", "Los tres tipos de coordinadas con sus nexos", "Los pasos para analizar una oración compuesta"],
  mapa: mapa("ORACIÓN COMPUESTA", "var(--eso)", [
    ["Proposición", "cada parte con su verbo", "var(--ink)"],
    ["Yuxtaposición", "sin nexo: , ; :", "var(--pen)"],
    ["Coordinación", "y · o · pero · sino", "var(--leaf)"],
    ["Análisis", "verbos → nexo → partes", "var(--red)"],
  ]),
  tarjetas: [
    ["¿Qué es una proposición?", "Cada una de las partes con verbo propio de una oración compuesta."],
    ["Oraciones yuxtapuestas", "Proposiciones unidas sin nexo, con coma, punto y coma o dos puntos."],
    ["Coordinadas copulativas", "Suman ideas con y, e, ni."],
    ["Coordinadas adversativas", "Oponen ideas con pero, mas, sino (que)."],
    ["Coordinadas disyuntivas", "Presentan opciones con o, u, o bien."],
  ],
  familias: ["Leed un párrafo de un libro y contad cuántos verbos conjugados tiene cada oración.", "Pedidle que invente una frase de cada tipo de coordinada sobre el día de hoy.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la oración compuesta, relaciones de yuxtaposición y coordinación (RD 217/2022, Lengua Castellana y Literatura 4º; terminología de la Nueva gramática básica).",
    ideas: ["Tiras de papel con proposiciones y nexos para construir oraciones y clasificarlas.", "Reescribir yuxtapuestas como coordinadas y comentar el cambio de matiz.", "Cazar coordinadas en letras de canciones."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración compuesta, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_compuesta" },
  ],
  revisado: "2026-11-12",
};
