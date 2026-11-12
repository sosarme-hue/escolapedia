// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, dos, flujo, figCols } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "La búsqueda de sentido",
  minutos: 35,
  objetivos: ["Reconocer las grandes preguntas sobre el sentido de la vida", "Comparar las respuestas de la ciencia, la filosofía y las religiones", "Valorar la propuesta cristiana de sentido y el respeto a otras convicciones"],
  claves: ["sentido de la vida", "trascendencia", "experiencia religiosa", "Viktor Frankl", "fe", "libertad"],
  pregunta: {
    texto: "Viktor Frankl sobrevivió a Auschwitz. Observó que muchas veces resistían mejor quienes tenían un motivo para vivir: un hijo que los esperaba, un libro que terminar, una fe. ¿Qué da sentido a una vida?",
    respuesta: "Es una de las <mark>grandes preguntas</mark> de todos los tiempos: ¿quién soy?, ¿de dónde vengo?, ¿qué puedo esperar? La ciencia explica cómo funciona el mundo; la filosofía y las religiones intentan responder <b>para qué</b> vivimos. El cristianismo propone una respuesta: el amor de Dios revelado en Jesucristo.",
  },
  bloques: [
    {
      html: `<h3>Las grandes preguntas</h3><p>Todo ser humano, en algún momento, se pregunta por el <mark>sentido</mark> de su vida: ¿por qué existo?, ¿qué es la felicidad?, ¿por qué existe el sufrimiento?, ¿qué hay después de la muerte? Estas preguntas aparecen sobre todo en momentos importantes: una pérdida, una enfermedad, un gran amor o una decisión difícil. Hacérselas es una señal de madurez.</p>`,
      svg: rueda("Grandes preguntas existenciales", "¿SENTIDO?", [["¿quién soy?", "var(--pen)"], ["¿de dónde?", "var(--leaf)"], ["¿adónde voy?", "var(--sun)"], ["¿por qué sufrir?", "var(--red)"], ["¿qué es amar?", "var(--inf)"], ["¿y la muerte?", "var(--muted)"]], "var(--bac)"),
    },
    {
      html: `<h3>Distintas formas de responder</h3><p>La <b>ciencia</b> responde a <i>cómo</i> funciona la naturaleza, pero no a <i>para qué</i>. La <b>filosofía</b> busca respuestas con la razón (Sócrates, los estoicos, el existencialismo). Las <b>religiones</b> responden desde la relación con lo <mark>trascendente</mark>, aquello que va más allá de lo material. Hay también personas agnósticas (no saben si Dios existe) y ateas (creen que no existe), que buscan sentido en otros valores. El respeto mutuo es imprescindible.</p>`,
      svg: filas("Caminos de respuesta", [["Ciencia", "¿cómo funciona el mundo?", "var(--leaf)"], ["Filosofía", "razón: ¿qué es vivir bien?", "var(--pen)"], ["Religión", "relación con lo trascendente", "var(--bac)"], ["Arte", "belleza y emoción", "var(--sun)"]]),
    },
    {
      html: `<h3>Viktor Frankl: el sentido nos sostiene</h3><p>El psiquiatra austriaco <mark>Viktor Frankl</mark> (1905-1997) escribió <i>El hombre en busca de sentido</i> tras sobrevivir a los campos nazis. Defendía que se puede encontrar sentido incluso en el sufrimiento, a través de tres caminos: <b>hacer</b> algo valioso (un trabajo, una obra), <b>amar</b> a alguien y la <b>actitud</b> con la que afrontamos lo que no podemos cambiar. Siempre nos queda la libertad de elegir esa actitud.</p>`,
      svg: dos("Los tres caminos de sentido según Frankl", ["Caminos", ["crear: hacer", "algo valioso", "amar: vivir", "un encuentro", "actitud ante el dolor"], "var(--bac)"], ["Ejemplos", ["estudiar, un", "proyecto", "familia, amistad", "voluntariado", "superar una pérdida"], "var(--leaf)"]),
    },
    {
      html: `<h3>La respuesta cristiana</h3><p>Para el cristianismo, el ser humano es <mark>imagen de Dios</mark>, creado por amor y llamado a amar. San Agustín lo resumió: «Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti». La vida de Jesús muestra ese sentido: entregarse a los demás. La <b>fe</b> no elimina las preguntas, pero ofrece una esperanza: la muerte no tiene la última palabra (la resurrección).</p>`,
      svg: flujo("Itinerario de la experiencia religiosa", ["pregunta", "búsqueda", "encuentro", "fe", "compromiso"], "var(--bac)"),
    },
  ],
  figura: {
    titulo: "Tres miradas sobre la vida",
    svg: figCols("Comparación entre la mirada científica, la filosófica y la religiosa", [
      ["Ciencia", ["pregunta: ¿cómo?", "método: observar", "y experimentar", "ej.: origen del", "universo (Big Bang)"], "var(--leaf)"],
      ["Filosofía", ["pregunta: ¿por qué?", "método: razonar", "y argumentar", "ej.: ¿qué es", "la felicidad?"], "var(--pen)"],
      ["Religión", ["pregunta: ¿para qué?", "método: fe y", "experiencia", "ej.: la vida como", "don y vocación"], "var(--bac)"],
    ]),
  },
  video: { id: "GdAQcaO4kSs", titulo: "El hombre en busca de sentido, de Viktor Frankl", canal: "Farid Dieck", vistas: 1175632, megusta: 63622, busqueda: "Viktor Frankl sentido de la vida explicado" },
  quiz: [
    { q: "¿Qué tipo de pregunta NO responde la ciencia?", o: ["¿Cómo se forman las estrellas?", "¿Para qué vivo?", "¿Cómo funciona una célula?"], a: 1, e: "La ciencia explica el cómo; el para qué lo abordan la filosofía y las religiones." },
    { q: "¿Qué significa «trascendente»?", o: ["Lo que va más allá de lo material y visible", "Lo que se puede medir", "Lo que es divertido"], a: 0, e: "Las religiones se relacionan con una realidad que trasciende el mundo material." },
    { q: "Según Frankl, ¿qué libertad nos queda siempre?", o: ["La de tener dinero", "La de elegir nuestra actitud", "La de no sufrir nunca"], a: 1, e: "Incluso en un campo de concentración se puede elegir cómo afrontar el sufrimiento." },
    { q: "Una persona agnóstica…", o: ["está segura de que Dios existe", "no sabe si Dios existe", "practica varias religiones"], a: 1, e: "El ateo afirma que Dios no existe; el agnóstico no se pronuncia." },
    { q: "Para el cristianismo, el ser humano es…", o: ["imagen de Dios, creado por amor", "fruto del azar sin sentido", "una máquina"], a: 0, e: "Esa dignidad es la base del sentido de la vida en la visión cristiana." },
  ],
  examen: [
    { q: "¿Quién escribió «Nuestro corazón está inquieto hasta que descanse en ti»?", o: ["San Agustín", "Viktor Frankl", "Sócrates"], a: 0, e: "Está en las «Confesiones», de finales del siglo IV." },
    { q: "Los tres caminos de sentido de Frankl son…", o: ["comer, dormir y trabajar", "crear, amar y la actitud ante el sufrimiento", "estudiar, viajar y jugar"], a: 1, e: "Los expuso en «El hombre en busca de sentido»." },
    { q: "La esperanza cristiana ante la muerte se basa en…", o: ["la reencarnación", "la resurrección de Jesús", "la ciencia médica"], a: 1, e: "Para la fe cristiana la muerte no tiene la última palabra." },
  ],
  feynman: ["Cuáles son las grandes preguntas existenciales", "Qué responde la ciencia, la filosofía y la religión", "Los tres caminos de sentido de Frankl", "Qué propone el cristianismo como sentido de la vida"],
  mapa: mapa("SENTIDO DE LA VIDA", "var(--bac)", [
    ["Preguntas", "¿quién soy? · ¿para qué?", "var(--pen)"],
    ["Respuestas", "ciencia · filosofía · religión", "var(--leaf)"],
    ["Frankl", "crear · amar · actitud", "var(--sun)"],
    ["Cristianismo", "imagen de Dios · esperanza", "var(--bac)"],
  ], 260),
  tarjetas: [
    ["¿Qué es lo trascendente?", "Lo que va más allá de lo material y visible."],
    ["Viktor Frankl", "Psiquiatra superviviente de Auschwitz, autor de «El hombre en busca de sentido»."],
    ["Diferencia entre ateo y agnóstico", "El ateo afirma que Dios no existe; el agnóstico no sabe."],
    ["Frase de san Agustín", "«Nuestro corazón está inquieto hasta que descanse en ti»."],
    ["Fundamento de la dignidad humana en el cristianismo", "El ser humano es imagen de Dios."],
  ],
  familias: ["Compartid en familia qué da sentido a vuestra vida (personas, proyectos, convicciones).", "Leed juntos una cita de Frankl y comentad si estáis de acuerdo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Dimensión personal y trascendente del ser humano; búsqueda de sentido y propuesta cristiana; respeto a otras cosmovisiones (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Diario personal: tres cosas que me dan sentido.", "Cinefórum: un fragmento de una película sobre superación personal.", "Mesa redonda respetuosa con alumnado creyente, agnóstico y ateo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Viktor Frankl, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Viktor_Frankl" },
  ],
  revisado: "2026-11-12",
};
