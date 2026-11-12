// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas sustantivas",
  minutos: 45,
  objetivos: ["Reconocer una subordinada sustantiva sustituyéndola por «eso»", "Identificar sus nexos: que, si y los interrogativos", "Saber qué función cumple dentro de la oración principal"],
  claves: ["subordinación", "subordinada sustantiva", "nexo", "conjunción que", "interrogativa indirecta", "complemento directo", "sujeto"],
  pregunta: {
    texto: "En «Me encanta el chocolate» y en «Me encanta que vengas», ¿qué tienen en común «el chocolate» y «que vengas»?",
    respuesta: "Hacen <mark>el mismo trabajo</mark>: los dos son el <b>sujeto</b> de «encanta». «Que vengas» tiene verbo propio, así que es una proposición que funciona como un sustantivo: una <b>subordinada sustantiva</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es la subordinación</h3><p>En la subordinación una proposición <mark>depende</mark> de otra y cumple una función dentro de ella, como si fuera una palabra. Hay subordinadas <b>sustantivas</b> (funcionan como un sustantivo), <b>de relativo</b> (como un adjetivo) y <b>adverbiales</b> (como un adverbio).</p>`,
      svg: L.filas("Tres tipos de subordinadas según la palabra a la que equivalen", [
        ["Sustantivas", "= un sustantivo (eso)", "var(--pen)"],
        ["De relativo", "= un adjetivo", "var(--leaf)"],
        ["Adverbiales", "= un adverbio", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La prueba de «eso»</h3><p>Una subordinada sustantiva se puede <mark>sustituir por «eso», «esto» o «algo»</mark> sin que la oración deje de funcionar. «Quiero <u>que me llames</u>» → «Quiero <b>eso</b>». Si funciona, es sustantiva.</p>`,
      svg: L.frase("Prueba de sustitución: Quiero que me llames equivale a Quiero eso", [
        ["Quiero", "principal", "var(--ink)"], ["que me llames", "subordinada", "var(--pen)"],
        ["Quiero", "", "var(--ink)"], ["eso", "= sustantivo", "var(--pen)"],
      ], "si cabe «eso», es sustantiva"),
    },
    {
      html: `<h3>Los nexos</h3><p>Se introducen con la conjunción <b>que</b> (la más frecuente), con <b>si</b> en preguntas indirectas de sí o no («No sé <u>si vendrá</u>»), o con un <b>interrogativo</b>: qué, quién, cómo, dónde, cuándo, cuánto («Dime <u>dónde vives</u>»). A veces no tienen nexo porque el verbo está en infinitivo: «Me gusta <u>leer cómics</u>».</p>`,
      svg: L.tabla("Nexos de las subordinadas sustantivas", ["Nexo", "Ejemplo"], [
        ["que", "Dice que llueve."], ["si", "No sé si irá."], ["dónde, cómo…", "Dime cómo es."], ["infinitivo", "Odio madrugar."],
      ]),
    },
    {
      html: `<h3>Sus funciones</h3><p>Como un sustantivo, pueden ser <b>sujeto</b> («Me preocupa <u>que llegues tarde</u>»), <b>complemento directo</b> («Creo <u>que tienes razón</u>»), <b>término de preposición</b> en un complemento de régimen («Me acuerdo <u>de que era lunes</u>»), <b>atributo</b> o complemento de un nombre o adjetivo («la idea <u>de que vengas</u>»).</p>`,
      svg: L.filas("Funciones de la subordinada sustantiva", [
        ["Sujeto", "Me preocupa que…", "var(--red)"], ["CD", "Creo que…", "var(--pen)"],
        ["C. régimen", "Me acuerdo de que…", "var(--leaf)"], ["C. nombre", "la idea de que…", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Truco para la función</h3><p>Sustituye por «eso» y analiza la oración simple que queda. «Me preocupa eso»: si al cambiar a plural cambia el verbo («Me preocupan esas cosas»), es <mark>sujeto</mark>. «Creo eso» → «Lo creo»: si se sustituye por <b>lo</b>, es <mark>complemento directo</mark>.</p>`,
      svg: L.filas("Pruebas para saber la función", [
        ["¿Concuerda?", "→ sujeto", "var(--red)"], ["¿Cambia por «lo»?", "→ CD", "var(--pen)"],
        ["¿Va tras preposición?", "→ régimen o CN", "var(--leaf)"],
      ], "después de sustituir por «eso»"),
    },
  ],
  figura: {
    titulo: "Reconocer una sustantiva en tres pasos",
    svg: L.pasos("Pasos: localizar el nexo, sustituir por eso, analizar la función", [
      ["Busca el nexo", ["que · si · qué, cómo…", "o un infinitivo"], "var(--pen)"],
      ["Prueba «eso»", ["Quiero eso", "si encaja: sustantiva"], "var(--leaf)"],
      ["Mira la función", ["sujeto · CD · régimen", "CN · atributo"], "var(--red)"],
    ]),
  },
  video: { id: "kkUAwRWTqrI", titulo: "Subordinadas sustantivas: análisis sintáctico de oraciones compuestas", canal: "Susi Profe", vistas: 1076143, megusta: 18713, busqueda: "oraciones subordinadas sustantivas" },
  quiz: [
    { q: "¿Qué prueba sirve para reconocer una subordinada sustantiva?", o: ["Sustituirla por «eso»", "Sustituirla por «allí»", "Sustituirla por un adjetivo"], a: 0, e: "Equivale a un sustantivo, así que cabe «eso»." },
    { q: "En «Me alegra que hayas aprobado», la subordinada es…", o: ["complemento directo", "sujeto", "complemento circunstancial"], a: 1, e: "«Me alegra eso»: «eso» es el sujeto de «alegra»." },
    { q: "En «Pregúntale si quiere venir», el nexo es…", o: ["que", "si", "quiere"], a: 1, e: "«Si» introduce una interrogativa indirecta total." },
    { q: "En «Creo que mañana nevará», la subordinada es…", o: ["sujeto", "complemento directo", "atributo"], a: 1, e: "«Lo creo»: se sustituye por «lo», así que es CD." },
    { q: "«Me gusta pasear» contiene una subordinada sustantiva…", o: ["con nexo que", "de infinitivo, sin nexo", "de relativo"], a: 1, e: "«Pasear» es sujeto de «gusta» y no lleva nexo." },
  ],
  examen: [
    { q: "En «Me acuerdo de que era lunes», la subordinada funciona como…", o: ["término del complemento de régimen", "sujeto", "complemento directo"], a: 0, e: "El verbo «acordarse» exige «de»: complemento de régimen." },
    { q: "«Dime dónde has dejado las llaves»: el nexo es…", o: ["un relativo", "un interrogativo", "una conjunción adversativa"], a: 1, e: "«Dónde» introduce una interrogativa indirecta." },
    { q: "Las subordinadas sustantivas equivalen a…", o: ["un adjetivo", "un sustantivo", "un adverbio"], a: 1, e: "Por eso cumplen funciones propias del sustantivo." },
  ],
  feynman: ["La diferencia entre coordinación y subordinación", "La prueba de «eso» con un ejemplo", "Los nexos de las sustantivas", "Cómo saber si es sujeto o complemento directo"],
  mapa: mapa("SUSTANTIVAS", "var(--eso)", [
    ["Prueba", "sustituir por «eso»", "var(--leaf)"],
    ["Nexos", "que · si · interrogativos", "var(--pen)"],
    ["Funciones", "sujeto · CD · régimen…", "var(--red)"],
    ["Sin nexo", "con infinitivo", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es una subordinada sustantiva?", "Una proposición que funciona como un sustantivo dentro de otra oración."],
    ["Prueba para reconocerla", "Sustituirla por «eso», «esto» o «algo»."],
    ["Nexos de las sustantivas", "La conjunción que, la conjunción si y los interrogativos (qué, quién, cómo, dónde…)."],
    ["¿Cómo sé si es CD?", "Si después de sustituirla por «eso» se puede cambiar por «lo»."],
    ["¿Cómo sé si es sujeto?", "Si al ponerla en plural cambia el número del verbo principal."],
  ],
  familias: ["Pedidle que complete «Me gustaría que…» con cinco finales distintos y señale el nexo.", "Escoged frases de un libro con «que» y comprobad juntos si cabe «eso».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la subordinación sustantiva; nexos y funciones (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica de la lengua española).",
    ideas: ["Tarjetas «eso»: tapar la subordinada con una tarjeta que dice «eso» y leer la oración.", "Transformar estilo directo en indirecto para generar sustantivas de CD.", "Clasificar en la pizarra frases del alumnado según la función de la sustantiva."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración subordinada sustantiva, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_subordinada_sustantiva" },
  ],
  revisado: "2026-11-12",
};
