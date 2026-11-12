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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer la dimensión trascendente del ser humano", "Comparar respuestas filosóficas y religiosas sobre el sentido"],
  bloques: [
    { tras: "Las grandes preguntas", html: `<h3>El ser humano, un ser que se pregunta</h3><p>Los animales satisfacen sus necesidades; el ser humano, además, se pregunta <b>por qué</b> y <b>para qué</b>. Esta capacidad se llama <mark>dimensión trascendente</mark>: ir más allá de lo inmediato y buscar un sentido. Las grandes preguntas suelen aparecer en las <b>situaciones límite</b>: la muerte de un ser querido, una enfermedad, un fracaso, pero también ante experiencias de gran belleza, de amor o de gratitud. Filósofos como Kant resumieron estas preguntas en cuatro: ¿qué puedo saber?, ¿qué debo hacer?, ¿qué me cabe esperar? y ¿qué es el ser humano?</p>` },
    { tras: "Distintas formas de responder", html: `<h3>Respuestas ante el sentido de la vida</h3>${tabla(["Postura", "Qué sostiene", "Ejemplo"], [["Religiosa", "el sentido viene de Dios o de una realidad trascendente", "cristianismo, judaísmo, islam"], ["Humanista", "el sentido lo construye la persona con sus valores y sus relaciones", "compromiso con los demás, la ciencia o el arte"], ["Agnóstica", "no se puede saber si Dios existe", "Protágoras, Huxley"], ["Atea", "Dios no existe; el sentido es humano", "Feuerbach, Sartre"], ["Nihilista", "nada tiene sentido último", "Nietzsche lo analizó como crisis de valores"]])}<p>Todas merecen respeto. Lo importante es buscar con <mark>honestidad</mark> y no vivir sin hacerse preguntas.</p>` },
    { tras: "Viktor Frankl", html: `<h3>Los tres caminos de Frankl</h3><p>Viktor Frankl sobrevivió a Auschwitz y fundó la <mark>logoterapia</mark>, una psicología centrada en el sentido. Según él, encontramos sentido de tres maneras: <b>creando</b> algo valioso (un trabajo, una obra, un proyecto), <b>amando</b> o viviendo algo valioso (una persona, la naturaleza, el arte) y, cuando el sufrimiento es inevitable, con la <b>actitud</b> que tomamos ante él. Frankl citaba a Nietzsche: «quien tiene un <i>porqué</i> para vivir puede soportar casi cualquier <i>cómo</i>». Su libro <i>El hombre en busca de sentido</i> (1946) ha ayudado a millones de personas.</p>`, video: { id: "TXZGZ_0TP7w", titulo: "Entrevista al Dr. Viktor Frankl: el sentido de la vida", canal: "Clínica Cattell Psicólogos en Murcia", vistas: 290652, megusta: 0 } },
    { tras: "La respuesta cristiana", html: `<h3>Fe y razón</h3><p>Para la tradición cristiana, la fe no está reñida con la razón. Agustín de Hipona decía «<i>cree para entender y entiende para creer</i>», y Tomás de Aquino propuso cinco vías para razonar sobre la existencia de Dios a partir del mundo (el movimiento, las causas, el orden…). La <b>fe</b> es confianza en Dios que se revela y en la persona de Jesús, y no una creencia sin pensar. Muchos científicos han sido creyentes, como <mark>Georges Lemaître</mark>, sacerdote y físico que propuso la teoría del origen del universo conocida después como Big Bang. Ciencia y religión responden a preguntas distintas: <b>cómo</b> funciona el mundo y <b>por qué</b> o <b>para qué</b> existe.</p>` },
    { tras: "La respuesta cristiana", html: `<h3>El sentido en la vida diaria</h3><p>El sentido no se encuentra solo en grandes momentos, sino también en lo cotidiano: estudiar algo que te apasiona, cuidar de un hermano, ser fiel a un amigo, ayudar como voluntario, disfrutar de un paisaje. Algunas pistas: conocerte (qué te hace vibrar, qué te preocupa), elegir valores que guíen tus decisiones, cultivar relaciones verdaderas y dedicar tiempo al <mark>silencio y la reflexión</mark>, lejos del ruido de las pantallas. Para muchos creyentes, la oración es una forma de vivir ese encuentro con Dios.</p>` },
  ],
  ejemplos: [
    { enunciado: "Aplica los tres caminos de Frankl a una deportista que sufre una lesión grave.", pasos: ["Crear: dedicar su tiempo a entrenar a niños o a estudiar fisioterapia.", "Amar: apoyarse en su familia y su equipo.", "Actitud: aceptar la lesión y convertirla en una lección de superación."], resultado: "Aunque no pueda competir, puede encontrar sentido por los tres caminos." },
    { enunciado: "Distingue la pregunta científica y la religiosa sobre el universo.", pasos: ["Ciencia: ¿cómo se formó el universo? (Big Bang, hace unos 13.800 millones de años).", "Religión y filosofía: ¿por qué existe algo en lugar de nada? ¿Tiene un propósito?"], resultado: "Son preguntas distintas que pueden ser complementarias." },
    { enunciado: "Clasifica: «Dios no existe», «no se puede saber si Dios existe», «Dios existe y da sentido a la vida».", pasos: ["Negar la existencia de Dios: ateísmo.", "Suspender el juicio: agnosticismo.", "Afirmar a Dios como fuente de sentido: postura religiosa (teísmo)."], resultado: "Ateísmo, agnosticismo y teísmo." },
  ],
  errores: [
    "Pensar que solo las personas religiosas se preguntan por el sentido.",
    "Confundir agnosticismo (no se puede saber) con ateísmo (Dios no existe).",
    "Creer que ciencia y fe son siempre enemigas.",
    "Pensar que el sentido se encuentra de una vez para siempre: se construye a lo largo de la vida.",
    "Reducir la logoterapia de Frankl a «pensar en positivo»: habla también de asumir el sufrimiento con responsabilidad.",
  ],
  ejercicios: [
    { q: "¿Qué es la dimensión trascendente?", sol: "La capacidad humana de ir más allá de lo inmediato y preguntarse por el sentido de la vida." },
    { q: "Pon dos ejemplos de situaciones límite.", sol: "La muerte de un ser querido y una enfermedad grave." },
    { q: "Escribe las cuatro preguntas de Kant.", sol: "¿Qué puedo saber?, ¿qué debo hacer?, ¿qué me cabe esperar? y ¿qué es el ser humano?" },
    { q: "Diferencia humanismo y postura religiosa.", sol: "El humanismo sitúa el sentido en la persona y sus valores; la postura religiosa lo sitúa en Dios o lo trascendente." },
    { q: "¿Qué es la logoterapia?", sol: "La psicoterapia creada por Viktor Frankl, centrada en ayudar a la persona a encontrar sentido." },
    { q: "Explica la frase «quien tiene un porqué para vivir puede soportar casi cualquier cómo».", sol: "Si una persona tiene una razón para vivir, encuentra fuerzas para superar circunstancias muy difíciles." },
    { q: "¿Qué decía Agustín de Hipona sobre fe y razón?", sol: "«Cree para entender y entiende para creer»: se ayudan mutuamente." },
    { q: "¿Quién fue Georges Lemaître?", sol: "Un sacerdote y físico belga que propuso la teoría del origen del universo conocida como Big Bang." },
    { q: "Escribe tres actividades cotidianas que pueden dar sentido.", sol: "Por ejemplo: ayudar a un compañero, cuidar de un familiar, aprender algo que te apasiona." },
    { q: "¿Por qué el silencio ayuda a buscar el sentido?", sol: "Porque permite pensar, conocerse y escuchar lo importante sin distracciones." },
  ],
  quiz: [
    { q: "La logoterapia la fundó…", o: ["Viktor Frankl", "Sigmund Freud", "Kant"], a: 0, e: "Psiquiatra superviviente de Auschwitz." },
    { q: "El agnóstico piensa que…", o: ["no se puede saber si Dios existe", "Dios existe", "Dios no existe"], a: 0, e: "Suspende el juicio." },
    { q: "El Big Bang lo propuso…", o: ["Georges Lemaître", "Darwin", "Galileo"], a: 0, e: "Sacerdote y físico." },
    { q: "Las situaciones límite…", o: ["despiertan las grandes preguntas", "son siempre alegres", "solo afectan a los adultos"], a: 0, e: "Como la muerte o la enfermedad." },
    { q: "Ciencia y religión responden sobre todo a…", o: ["el cómo y el porqué", "lo mismo", "nada"], a: 0, e: "Son preguntas complementarias." },
  ],
  tarjetas: [
    ["Dimensión trascendente", "Capacidad de buscar un sentido más allá de lo inmediato."],
    ["Logoterapia", "Psicología del sentido de Viktor Frankl."],
    ["Agnosticismo", "Postura que dice que no se puede saber si Dios existe."],
  ],
});
