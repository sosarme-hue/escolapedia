// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas adverbiales",
  minutos: 45,
  objetivos: ["Reconocer las subordinadas de tiempo, lugar y modo", "Identificar las causales, finales, condicionales y concesivas por su nexo", "Distinguir causa de consecuencia y condición de concesión"],
  claves: ["subordinada adverbial", "temporal", "causal", "final", "condicional", "concesiva", "consecutiva", "nexo"],
  pregunta: {
    texto: "«Si estudias, aprobarás» y «Aunque estudies, suspenderás». Las dos hablan de estudiar. ¿Por qué la segunda suena tan desanimante?",
    respuesta: "Porque el nexo cambia la relación. «Si» plantea una <mark>condición</mark>: estudiar lleva al aprobado. «Aunque» plantea una <mark>concesión</mark>: un obstáculo que no impide el resultado. Los nexos adverbiales dan el sentido lógico de la frase.",
  },
  bloques: [
    {
      html: `<h3>Qué son las subordinadas adverbiales</h3><p>Son proposiciones que añaden una <mark>circunstancia</mark> al verbo principal o a toda la oración: cuándo, dónde, cómo, por qué, para qué, con qué condición… Las de <b>tiempo, lugar y modo</b> se pueden cambiar por un adverbio: «Llegó <u>cuando anochecía</u>» → «Llegó <b>entonces</b>».</p>`,
      svg: L.filas("Adverbiales de tiempo, lugar y modo con su adverbio equivalente", [
        ["Tiempo", "cuando anochecía → entonces", "var(--inf)"],
        ["Lugar", "donde quieras → allí", "var(--leaf)"],
        ["Modo", "como te dije → así", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Causales y finales</h3><p>Las <b>causales</b> dicen <mark>por qué</mark>: porque, ya que, puesto que, como («No salió <u>porque llovía</u>»). Las <b>finales</b> dicen <mark>para qué</mark>: para que, a fin de que, para + infinitivo («Ahorra <u>para comprarse una bici</u>»).</p>`,
      svg: L.frase("Causal y final: No salió porque llovía. Ahorra para comprarse una bici", [
        ["No salió", "", "var(--line)"], ["porque llovía.", "causal", "var(--red)"],
        ["Ahorra", "", "var(--line)"], ["para comprarse una bici.", "final", "var(--leaf)"],
      ], "¿por qué? causa · ¿para qué? finalidad"),
    },
    {
      html: `<h3>Condicionales y concesivas</h3><p>Las <b>condicionales</b> ponen un requisito: si, siempre que, con tal de que («<u>Si llueve</u>, no iremos»). Las <b>concesivas</b> presentan un obstáculo que <mark>no impide</mark> lo que dice la principal: aunque, a pesar de que, por más que («<u>Aunque llueva</u>, iremos»).</p>`,
      svg: L.filas("Condicional frente a concesiva", [
        ["Condicional", "Si llueve, no iremos.", "var(--pen)"],
        ["Concesiva", "Aunque llueva, iremos.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Consecutivas y comparativas</h3><p>Las <b>consecutivas</b> expresan un <mark>efecto</mark>: así que, de modo que, tan… que («Estaba <u>tan cansado que se durmió</u>»). Las <b>comparativas</b> comparan: más… que, menos… que, tan… como («Es <u>más alto que su padre</u>»).</p>`,
      svg: L.tabla("Nexos de consecutivas y comparativas", ["Tipo", "Nexo"], [
        ["Consecutiva", "así que · tan… que"], ["Comparativa", "más… que · tan… como"],
      ]),
    },
    {
      html: `<h3>Cuidado con «como» y «que»</h3><p>Un mismo nexo puede tener varios valores: «<u>Como no vino</u>, empezamos» (causa) / «Hazlo <u>como quieras</u>» (modo). Fíjate en el <b>significado</b>: pregúntate ¿por qué?, ¿cómo?, ¿para qué?, ¿con qué condición?</p>`,
      svg: L.filas("El nexo como puede ser causal o de modo", [
        ["Como no vino,…", "causa (¿por qué?)", "var(--red)"],
        ["Hazlo como quieras.", "modo (¿cómo?)", "var(--pen)"],
      ], "un nexo, dos valores"),
    },
  ],
  figura: {
    titulo: "Pregunta para cada adverbial",
    svg: L.columnas("Preguntas guía: por qué causal, para qué final, con qué condición condicional, a pesar de qué concesiva", [
      ["¿por qué?", "CAUSAL", ["porque · ya que", "puesto que"], "var(--red)"],
      ["¿para qué?", "FINAL", ["para que", "a fin de que"], "var(--leaf)"],
      ["¿con qué condición?", "CONDICIONAL", ["si · siempre que", "con tal de que"], "var(--pen)"],
      ["¿a pesar de qué?", "CONCESIVA", ["aunque", "a pesar de que"], "var(--inf)"],
    ]),
  },
  video: { id: "e85a3uF8MjY", titulo: "Oraciones subordinadas adverbiales", canal: "Susi Profe", vistas: 322369, megusta: 0, busqueda: "oraciones subordinadas adverbiales" },
  quiz: [
    { q: "«No fui a clase porque tenía fiebre» contiene una subordinada…", o: ["final", "causal", "concesiva"], a: 1, e: "Explica por qué: causal." },
    { q: "«Aunque estaba cansada, terminó la carrera» es…", o: ["concesiva", "condicional", "consecutiva"], a: 0, e: "El cansancio es un obstáculo que no impide terminar." },
    { q: "¿Qué nexo es final?", o: ["para que", "ya que", "si"], a: 0, e: "«Para que» indica finalidad." },
    { q: "«Habla tan bajo que nadie le oye» es…", o: ["comparativa", "consecutiva", "temporal"], a: 1, e: "«Tan… que» presenta una consecuencia." },
    { q: "«Te llamo cuando llegue» es una subordinada de…", o: ["tiempo", "lugar", "modo"], a: 0, e: "«Cuando» indica tiempo; equivale a «entonces»." },
  ],
  examen: [
    { q: "«Como no contestabas, me fui» tiene valor…", o: ["causal", "modal", "comparativo"], a: 0, e: "Responde a ¿por qué me fui?" },
    { q: "«Si me ayudas, acabaremos antes» es…", o: ["concesiva", "condicional", "final"], a: 1, e: "«Si» plantea una condición." },
    { q: "«Es más rápido que un rayo» es…", o: ["comparativa", "consecutiva", "causal"], a: 0, e: "Compara con «más… que»." },
  ],
  feynman: ["Qué tienen en común todas las adverbiales", "La diferencia entre causa y finalidad", "La diferencia entre condición y concesión", "Por qué «como» puede tener varios valores"],
  mapa: mapa("ADVERBIALES", "var(--eso)", [
    ["Tiempo · lugar · modo", "cuando · donde · como", "var(--inf)"],
    ["Causa y fin", "porque · para que", "var(--red)"],
    ["Condición y concesión", "si · aunque", "var(--pen)"],
    ["Consecuencia y comparación", "así que · más… que", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Subordinada causal", "Expresa la causa: porque, ya que, puesto que, como."],
    ["Subordinada final", "Expresa la finalidad: para que, a fin de que, para + infinitivo."],
    ["Subordinada condicional", "Expresa una condición: si, siempre que, con tal de que."],
    ["Subordinada concesiva", "Expresa un obstáculo que no impide lo dicho: aunque, a pesar de que."],
    ["Subordinada consecutiva", "Expresa una consecuencia: así que, de modo que, tan… que."],
  ],
  familias: ["Pedidle que termine «Me quedo en casa…» de cinco maneras: con porque, para, si, aunque y así que.", "Al leer noticias, buscad un nexo adverbial y decid qué relación expresa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: subordinación adverbial y relaciones lógicas entre proposiciones (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica).",
    ideas: ["Dominó de nexos: emparejar proposiciones con el nexo adecuado.", "Reescribir un texto cambiando nexos causales por concesivos y comentar el efecto.", "Analizar los nexos de un texto argumentativo y relacionarlos con su estructura."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración subordinada adverbial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_subordinada_adverbial" },
  ],
  revisado: "2026-11-12",
};
