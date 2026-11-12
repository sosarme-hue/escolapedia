// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas de relativo",
  minutos: 45,
  objetivos: ["Reconocer una subordinada de relativo y su antecedente", "Conocer los relativos: que, quien, cual, cuyo, donde…", "Distinguir especificativas, explicativas y relativas sin antecedente"],
  claves: ["relativo", "antecedente", "subordinada adjetiva", "especificativa", "explicativa", "relativa libre", "cuyo"],
  pregunta: {
    texto: "«Los alumnos que tenían el permiso fueron a la excursión» y «Los alumnos, que tenían el permiso, fueron a la excursión». ¿Fueron los mismos alumnos?",
    respuesta: "¡No! Sin comas, solo fueron <mark>los que tenían permiso</mark> (la relativa especifica, selecciona). Con comas, fueron <mark>todos</mark>, y además todos tenían permiso (la relativa explica). Dos comas cambian el significado.",
  },
  bloques: [
    {
      html: `<h3>Qué es una subordinada de relativo</h3><p>Es una proposición que <mark>complementa a un sustantivo</mark>, igual que un adjetivo: «el libro <u>que me prestaste</u>» = «el libro prestado». El sustantivo al que se refiere se llama <b>antecedente</b>. Por eso también se llaman <b>adjetivas</b>.</p>`,
      svg: L.frase("Antecedente y relativa: el libro que me prestaste", [
        ["el libro", "antecedente", "var(--leaf)"], ["que", "relativo", "var(--red)"], ["me prestaste", "", "var(--pen)"],
        ["el libro", "", "var(--leaf)"], ["prestado", "= adjetivo", "var(--pen)"],
      ], "la relativa funciona como un adjetivo"),
    },
    {
      html: `<h3>Los relativos</h3><p>Son <b>que</b>, <b>quien/quienes</b>, <b>el cual</b> (la cual, los cuales…), <b>cuyo</b> (cuya, cuyos…), y los adverbios <b>donde</b>, <b>cuando</b> y <b>como</b>. A diferencia de la conjunción «que», el relativo <mark>sustituye al antecedente</mark> y tiene función dentro de su proposición.</p>`,
      svg: L.tabla("Relativos con ejemplo", ["Relativo", "Ejemplo"], [
        ["que", "la casa que vi"], ["quien", "con quien hablé"], ["cuyo", "cuyo perro ladra"], ["donde", "el pueblo donde nací"],
      ]),
    },
    {
      html: `<h3>Especificativas y explicativas</h3><p>Las <b>especificativas</b> van sin comas y <mark>seleccionan</mark> una parte del antecedente: «Los alumnos que aprobaron…» (solo esos). Las <b>explicativas</b> van entre comas y <mark>añaden información</mark> sobre todo el antecedente: «Mis padres, que viven en Lugo, …».</p>`,
      svg: L.filas("Especificativa sin comas y explicativa entre comas", [
        ["Especificativa", "sin comas: selecciona", "var(--pen)"],
        ["Explicativa", "entre comas: añade", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Relativas sin antecedente</h3><p>A veces el antecedente no aparece: «<u>Quien bien te quiere</u> te hará llorar», «<u>El que llegue antes</u> abre». Son <b>relativas libres o semilibres</b> y funcionan como un grupo nominal: pueden ser sujeto, complemento directo, etc.</p>`,
      svg: L.frase("Relativa sin antecedente: Quien madruga encuentra sitio", [
        ["Quien madruga", "relativa = sujeto", "var(--red)"], ["encuentra sitio.", "predicado", "var(--inf)"],
      ], "no hay antecedente expreso"),
    },
    {
      html: `<h3>La función del relativo</h3><p>El relativo cumple una función dentro de su proposición. Para verla, <mark>cámbialo por el antecedente</mark>: «el libro que me prestaste» → «me prestaste <b>el libro</b>»: «que» es <b>complemento directo</b>. «La chica que canta» → «<b>la chica</b> canta»: «que» es <b>sujeto</b>.</p>`,
      svg: L.filas("Cambiar el relativo por el antecedente para ver su función", [
        ["el libro que me prestaste", "→ CD", "var(--pen)"],
        ["la chica que canta", "→ sujeto", "var(--red)"],
        ["la casa donde vivo", "→ CC lugar", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Tres clases de relativas",
    svg: L.columnas("Especificativa, explicativa y sin antecedente con ejemplos", [
      ["sin comas", "ESPECIFICATIVA", ["Los coches que", "contaminan pagan."], "var(--pen)"],
      ["entre comas", "EXPLICATIVA", ["Mi abuela, que es", "pintora, expone."], "var(--leaf)"],
      ["sin antecedente", "LIBRE", ["Quien lo sepa,", "que levante la mano."], "var(--red)"],
    ]),
  },
  video: { id: "FRIciSkSAdM", titulo: "Trucos para oraciones subordinadas adjetivas", canal: "unProfesor", vistas: 390957, megusta: 5563, busqueda: "oraciones subordinadas de relativo adjetivas" },
  quiz: [
    { q: "En «La película que vimos era larga», el antecedente es…", o: ["que", "la película", "vimos"], a: 1, e: "El relativo «que» se refiere a «la película»." },
    { q: "Las subordinadas de relativo con antecedente funcionan como…", o: ["un adjetivo", "un adverbio", "un verbo"], a: 0, e: "Complementan a un sustantivo, como un adjetivo." },
    { q: "«Mi hermano, que vive en Cádiz, viene mañana» lleva una relativa…", o: ["especificativa", "explicativa", "sustantiva"], a: 1, e: "Va entre comas y añade información sobre el antecedente." },
    { q: "¿Qué relativo indica posesión?", o: ["cuyo", "donde", "cual"], a: 0, e: "«El autor cuyo libro leí» = el libro del autor." },
    { q: "En «El chico que canta es mi primo», ¿qué función tiene «que» en la relativa?", o: ["Complemento directo", "Sujeto", "Atributo"], a: 1, e: "«El chico canta»: el relativo es el sujeto de «canta»." },
  ],
  examen: [
    { q: "«Quien avisa no es traidor» contiene una relativa…", o: ["sin antecedente expreso", "explicativa", "especificativa con antecedente"], a: 0, e: "No aparece antecedente: es una relativa libre que hace de sujeto." },
    { q: "¿Qué diferencia al «que» relativo del «que» conjunción?", o: ["El relativo tiene antecedente y función", "No hay diferencia", "El relativo lleva tilde"], a: 0, e: "El relativo sustituye a un antecedente; la conjunción solo enlaza." },
    { q: "En «el pueblo donde nací», «donde» es…", o: ["complemento circunstancial de lugar", "sujeto", "complemento directo"], a: 0, e: "«Nací en el pueblo»: CC de lugar." },
  ],
  feynman: ["Qué son el relativo y el antecedente", "Por qué estas subordinadas equivalen a un adjetivo", "La diferencia entre especificativa y explicativa", "Cómo averiguar la función del relativo"],
  mapa: mapa("DE RELATIVO", "var(--eso)", [
    ["Antecedente", "el nombre al que remite", "var(--leaf)"],
    ["Relativos", "que · quien · cuyo · donde", "var(--red)"],
    ["Clases", "especificativa · explicativa", "var(--pen)"],
    ["Sin antecedente", "Quien calla, otorga", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es el antecedente?", "El sustantivo al que se refiere el relativo."],
    ["Relativa especificativa", "Va sin comas y selecciona una parte del antecedente."],
    ["Relativa explicativa", "Va entre comas y añade información sobre todo el antecedente."],
    ["El relativo «cuyo»", "Indica posesión y concuerda con lo poseído: «la autora cuyos libros leí»."],
    ["Truco para la función del relativo", "Sustituir el relativo por el antecedente y analizar la proposición."],
  ],
  familias: ["Jugad a definir objetos de casa con relativas: «Es una cosa que sirve para…».", "Pedidle que explique cómo cambia una frase al poner o quitar las comas de una relativa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: subordinación de relativo, relativos y puntuación de explicativas (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica).",
    ideas: ["Pares mínimos con y sin comas para debatir qué significa cada uno.", "Unir dos oraciones simples en una con relativo («Tengo un perro. El perro ladra»).", "Juego de adivinanzas con definiciones construidas con relativas."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "RAE, Ortografía: la coma en las relativas explicativas", url: "https://www.rae.es/ortograf%C3%ADa/" },
  ],
  revisado: "2026-11-12",
};
