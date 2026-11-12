// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "El ser humano y la búsqueda de Dios",
  minutos: 35,
  objetivos: ["Reconocer las grandes preguntas que se hace todo ser humano", "Explicar qué es la experiencia religiosa y cómo se expresa", "Conocer cómo el cristianismo entiende la relación entre Dios y el ser humano"],
  claves: ["preguntas de sentido", "experiencia religiosa", "lo sagrado", "rito y símbolo", "fe y razón", "creyente, agnóstico, ateo"],
  pregunta: {
    texto: "Hace más de 40.000 años, los seres humanos ya enterraban a sus muertos con flores y objetos. ¿Por qué lo hacían?",
    respuesta: "Porque se preguntaban qué hay <mark>más allá de la muerte</mark>. Desde siempre, el ser humano se ha hecho preguntas que la ciencia sola no responde: ¿quién soy?, ¿qué sentido tiene mi vida?, ¿qué pasa al morir? Muchas personas encuentran respuesta en <b>Dios</b>: es la <b>búsqueda religiosa</b>, presente en todas las culturas.",
  },
  bloques: [
    {
      html: `<h3>Las grandes preguntas</h3><p>Todo ser humano, en algún momento, se hace <mark>preguntas de sentido</mark>: ¿quién soy?, ¿de dónde vengo?, ¿para qué vivo?, ¿por qué existe el mal y el sufrimiento?, ¿qué hay después de la muerte?, ¿puedo ser feliz? Son preguntas que surgen ante experiencias fuertes, como la muerte de alguien querido, un enamoramiento, una injusticia o la belleza de la naturaleza. No se responden en un laboratorio, sino desde la <b>filosofía</b>, el <b>arte</b> y la <b>religión</b>. Hacérselas es propio del ser humano: ningún animal se pregunta por el sentido de su vida.</p>`,
      svg: filas("Preguntas de sentido", [["Origen", "¿de dónde vengo?", "var(--pen)"], ["Identidad", "¿quién soy?", "var(--leaf)"], ["Sentido", "¿para qué vivo?", "var(--sun)"], ["Mal", "¿por qué el dolor?", "var(--red)"], ["Destino", "¿qué hay al morir?", "var(--muted)"]]),
    },
    {
      html: `<h3>La experiencia religiosa</h3><p>La <mark>experiencia religiosa</mark> es la vivencia de algo que nos supera y da sentido a todo, que las religiones llaman <b>lo sagrado</b> o <b>Dios</b>. Puede despertarse ante el cielo estrellado, el nacimiento de un hijo, el silencio de un templo o un momento de gran dolor o alegría. El filósofo Rudolf Otto la describió como un misterio que, a la vez, <b>atrae</b> (fascina, da paz) y <b>sobrecoge</b> (produce respeto y asombro). Esta experiencia ha dado lugar a todas las religiones del mundo.</p>`,
      svg: dos("El misterio sagrado atrae y sobrecoge", ["Atrae", ["fascinación", "paz y alegría", "confianza", "amor"], "var(--sun)"], ["Sobrecoge", ["asombro", "respeto", "humildad", "temor reverente"], "var(--pen)"]),
    },
    {
      html: `<h3>Cómo se expresa la religión</h3><p>La experiencia religiosa se expresa de muchas formas. Con <b>creencias</b>: lo que se cree sobre Dios, el mundo y el ser humano. Con <b>ritos</b>: gestos y celebraciones (oraciones, sacrificios, peregrinaciones, sacramentos). Con <b>símbolos</b>: objetos o signos que remiten a lo sagrado (la cruz, el agua, la luz). Con <b>normas morales</b>: cómo hay que vivir. Con <b>lugares y tiempos sagrados</b>: templos, fiestas. Y con una <b>comunidad</b> de creyentes que comparte todo esto. Los <mark>símbolos</mark> son importantes porque permiten expresar lo que no cabe en palabras.</p>`,
      svg: rueda("Expresiones de la religión: creencias, símbolos, ritos, normas o ley moral, templos y comunidad", "RELIGIÓN", [["creencias", "var(--pen)"], ["símbolos", "var(--sun)"], ["ritos", "var(--red)"], ["ley", "var(--leaf)"], ["templos", "var(--muted)"], ["comunidad", "var(--inf)"]], "var(--bac)"),
    },
    {
      html: `<h3>Respuestas ante la pregunta por Dios</h3><p>Ante la pregunta por Dios, las personas dan respuestas distintas. El <mark>creyente</mark> afirma que Dios existe y confía en Él. El <b>agnóstico</b> piensa que no podemos saber si Dios existe o no. El <b>ateo</b> afirma que Dios no existe. Y el <b>indiferente</b> no se plantea la pregunta. La Constitución española y la Declaración Universal de los Derechos Humanos reconocen la <b>libertad religiosa</b>: cada persona puede creer, no creer o cambiar de creencia, y todas merecen respeto. El diálogo entre personas con distintas respuestas enriquece a todos.</p>`,
      svg: filas("Actitudes ante la pregunta por Dios", [["Creyente", "Dios existe", "var(--leaf)"], ["Agnóstico", "no se puede saber", "var(--sun)"], ["Ateo", "Dios no existe", "var(--muted)"], ["Indiferente", "no se lo plantea", "var(--inf)"]]),
    },
    {
      html: `<h3>Dios sale al encuentro del ser humano</h3><p>Para el cristianismo, la búsqueda no va solo en una dirección: no es únicamente el ser humano quien busca a Dios, sino que <mark>Dios busca al ser humano</mark> y se da a conocer. Es lo que se llama <b>revelación</b>. San Agustín, después de una juventud inquieta buscando la felicidad, lo resumió en una frase famosa: «Nos hiciste, Señor, para ti, y nuestro corazón está <b>inquieto</b> hasta que descanse en ti». Según la fe cristiana, el ser humano es <b>imagen de Dios</b>, capaz de conocerlo y amarlo, y por eso lleva dentro ese deseo de algo más.</p>`,
      svg: dos("Dos movimientos que se encuentran", ["Ser humano", ["pregunta", "busca sentido", "desea felicidad", "corazón inquieto"], "var(--pen)"], ["Dios", ["sale al encuentro", "se revela", "habla en la historia", "ama primero"], "var(--sun)"]),
    },
  ],
  figura: {
    titulo: "Del interrogante a la respuesta",
    svg: figCols("Esquema: de las preguntas del ser humano a la experiencia religiosa, sus expresiones y la respuesta cristiana", [["Preguntas", ["¿quién soy?", "¿para qué vivo?", "¿por qué el mal?", "¿qué hay al morir?"], "var(--pen)"], ["Experiencia", ["lo sagrado", "atrae y sobrecoge", "asombro", "confianza"], "var(--sun)"], ["Expresión", ["creencias y ritos", "símbolos", "normas", "comunidad"], "var(--leaf)"], ["Cristianismo", ["Dios se revela", "imagen de Dios", "san Agustín:", "corazón inquieto"], "var(--bac)"]]),
  },
  video: { id: "9-fu00xAoBQ", titulo: "El hombre en busca de Dios", canal: "Profes de reli", vistas: 45914, megusta: 0, busqueda: "religión búsqueda de dios ser humano" },
  quiz: [
    { q: "¿Qué es una pregunta de sentido?", o: ["Una pregunta de matemáticas", "Una pregunta sobre el porqué y el para qué de la vida", "Una pregunta de examen"], a: 1, e: "¿Quién soy?, ¿para qué vivo?…" },
    { q: "Lo sagrado, según Rudolf Otto…", o: ["atrae y sobrecoge", "solo da miedo", "es indiferente"], a: 0, e: "Fascina y produce respeto." },
    { q: "¿Qué es un rito?", o: ["Un gesto o celebración religiosa", "Un libro", "Un templo"], a: 0, e: "Oraciones, sacramentos, peregrinaciones." },
    { q: "El agnóstico piensa que…", o: ["Dios existe", "no se puede saber si Dios existe", "Dios no existe"], a: 1, e: "Ni afirma ni niega." },
    { q: "Para el cristianismo, la revelación es…", o: ["Dios que se da a conocer", "un invento humano", "una fiesta"], a: 0, e: "Dios sale al encuentro." },
  ],
  examen: [
    { q: "«Nuestro corazón está inquieto hasta que descanse en ti» es de…", o: ["san Agustín", "san Pablo", "Platón"], a: 0, e: "En las Confesiones." },
    { q: "La libertad religiosa significa que…", o: ["cada uno puede creer, no creer o cambiar de creencia", "todos deben tener la misma religión", "la religión está prohibida"], a: 0, e: "Está en la Constitución y en los derechos humanos." },
    { q: "¿Qué indican los enterramientos prehistóricos con objetos?", o: ["Una preocupación por el más allá", "Que no había cementerios", "Una moda"], a: 0, e: "Primeras huellas religiosas." },
  ],
  feynman: ["Qué preguntas de sentido se hace el ser humano", "Qué es la experiencia religiosa", "Cómo se expresa la religión", "Qué significa que Dios sale al encuentro del ser humano"],
  mapa: mapa("BÚSQUEDA DE DIOS", "var(--bac)", [
    ["Preguntas", "¿quién soy? · ¿para qué?", "var(--pen)"],
    ["Experiencia", "lo sagrado", "var(--sun)"],
    ["Expresión", "ritos · símbolos", "var(--leaf)"],
    ["Respuestas", "creer · dudar · negar", "var(--muted)"],
  ], 260),
  tarjetas: [
    ["Pregunta de sentido", "Pregunta sobre el porqué y el para qué de la vida."],
    ["Experiencia religiosa", "Vivencia de lo sagrado, que atrae y sobrecoge."],
    ["Símbolo religioso", "Signo que remite a lo sagrado: la cruz, el agua, la luz."],
    ["Agnosticismo", "Postura de quien piensa que no se puede saber si Dios existe."],
    ["Revelación", "Dios que se da a conocer al ser humano."],
  ],
  familias: ["Hablad en familia de alguna experiencia que os haya hecho pensar en el sentido de la vida.", "Visitad un templo o un lugar de silencio y comentad qué sentís allí.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La dimensión religiosa del ser humano: preguntas de sentido, experiencia religiosa y sus expresiones, actitudes ante la pregunta por Dios y la respuesta cristiana (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Buzón anónimo de grandes preguntas para trabajar en clase.", "Analizar letras de canciones actuales que expresan búsqueda de sentido.", "Mesa redonda con personas creyentes y no creyentes desde el respeto."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Catecismo de la Iglesia Católica, «El hombre es capaz de Dios»", url: "https://www.vatican.va/archive/catechism_sp/index_sp.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar las grandes familias religiosas", "Explicar la relación entre fe y razón"],
  bloques: [
    { tras: "La experiencia religiosa", html: `<h3>La religiosidad en la historia</h3><p>La religión acompaña al ser humano desde la <b>Prehistoria</b>: enterramientos con ofrendas, pinturas rupestres que quizá eran ritos, monumentos como Stonehenge. Las primeras civilizaciones (Mesopotamia, Egipto) eran <b>politeístas</b>: adoraban a muchos dioses ligados a la naturaleza, como el sol o el río. Grecia y Roma también lo eran, como has estudiado en Cultura Clásica. Con <b>Abraham</b>, hacia el 1800 a. C., nace el <mark>monoteísmo</mark>: la fe en un solo Dios, personal y creador, que está en el origen del judaísmo, el cristianismo y el islam. En Oriente surgieron otras tradiciones, como el hinduismo y el budismo.</p>` },
    { tras: "Cómo se expresa la religión", html: `<h3>Grandes religiones del mundo</h3>${tabla(["Religión", "Origen", "Idea de Dios", "Libro sagrado"], [["Judaísmo", "Abraham y Moisés, Oriente Próximo", "un solo Dios (Yahvé)", "Tanaj (Biblia hebrea)"], ["Cristianismo", "Jesucristo, siglo I", "un solo Dios, Padre, Hijo y Espíritu Santo", "Biblia"], ["Islam", "Mahoma, siglo VII, Arabia", "un solo Dios (Alá)", "Corán"], ["Hinduismo", "India, hace más de 3.000 años", "muchas formas de lo divino", "Vedas"], ["Budismo", "Buda, siglo VI a. C., India", "no se centra en un Dios creador", "enseñanzas de Buda"]])}<p>Aunque son distintas, todas buscan dar sentido a la vida, orientar la conducta y unir a sus creyentes en comunidad.</p>`, video: { id: "UP8zxUg3IKU", titulo: "Benedicto XVI explica el sentido religioso del ser humano", canal: "ROME REPORTS en Español", vistas: 16476, megusta: 0 } },
    { tras: "Respuestas ante la pregunta por Dios", html: `<h3>Fe y razón</h3><p>A veces se piensa que la fe y la razón son enemigas. Para la tradición cristiana, en cambio, son como <mark>dos alas</mark> con las que el espíritu humano se eleva hacia la verdad, según la imagen del papa Juan Pablo II. La <b>razón</b> puede llegar a intuir que existe un Creador al contemplar el orden y la belleza del mundo; la <b>fe</b> acoge lo que Dios revela y que la razón sola no alcanza. Muchos grandes científicos fueron creyentes: <b>Copérnico</b> y <b>Mendel</b> (un monje agustino, padre de la genética) o <b>Georges Lemaître</b>, sacerdote belga que propuso la teoría del <b>Big Bang</b>. Fe y ciencia responden a preguntas distintas: la ciencia explica el <i>cómo</i>; la fe, el <i>porqué</i> y el <i>para qué</i>.</p>` },
    { tras: "Dios sale al encuentro del ser humano", html: `<h3>Testigos de la búsqueda</h3><p>Muchas personas han contado su búsqueda de Dios. <b>San Agustín</b> (siglo IV) buscó la verdad en la filosofía y en otras doctrinas antes de convertirse al cristianismo, y lo narró en sus <i>Confesiones</i>. <b>Edith Stein</b>, filósofa judía alemana, llegó a la fe leyendo la vida de santa Teresa de Jesús; se hizo monja carmelita y murió en Auschwitz. <mark>Blaise Pascal</mark>, matemático y físico francés, escribió que «el corazón tiene razones que la razón no entiende». Y en nuestros días, muchos jóvenes viven la búsqueda en peregrinaciones como el <b>Camino de Santiago</b> o en las Jornadas Mundiales de la Juventud. Sus historias muestran que la pregunta por Dios sigue viva.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una persona contempla una puesta de sol en el mar y siente a la vez paz, asombro y pequeñez. Analiza su experiencia.", pasos: ["La paz y la belleza atraen: es el aspecto fascinante.", "El asombro y la pequeñez sobrecogen: es el aspecto de respeto.", "Ambos juntos son rasgos de la experiencia religiosa según Rudolf Otto."], resultado: "Es una experiencia que puede abrir a lo sagrado: atrae y sobrecoge a la vez." },
    { enunciado: "Clasifica estas frases: «Dios existe», «No podemos saberlo», «Dios no existe», «No me importa».", pasos: ["Afirmar que existe: creyente.", "Decir que no se puede saber: agnóstico.", "Negarlo: ateo.", "No planteárselo: indiferente."], resultado: "Creyente, agnóstico, ateo e indiferente." },
    { enunciado: "¿Contradice la teoría del Big Bang la fe en un Dios creador?", pasos: ["La ciencia explica cómo evolucionó el universo desde un estado inicial.", "La fe responde a por qué existe algo y qué sentido tiene.", "El propio autor de la teoría, Lemaître, era sacerdote."], resultado: "No: responden a preguntas distintas y pueden convivir." },
  ],
  errores: [
    "Pensar que solo las personas creyentes se hacen preguntas de sentido.",
    "Confundir agnóstico (no se puede saber) con ateo (Dios no existe).",
    "Creer que la religión es solo un conjunto de normas: incluye experiencia, creencias, ritos y comunidad.",
    "Pensar que fe y ciencia son necesariamente enemigas.",
    "Faltar al respeto a quien tiene creencias distintas: la libertad religiosa es un derecho.",
  ],
  ejercicios: [
    { q: "Escribe tres preguntas de sentido y explica cuándo suelen aparecer.", sol: "¿Quién soy?, ¿para qué vivo?, ¿qué hay después de la muerte? Suelen surgir ante experiencias fuertes: una muerte, un amor, una injusticia." },
    { q: "¿Qué es la experiencia religiosa?", sol: "La vivencia de lo sagrado, de algo que nos supera y da sentido a todo, que atrae y sobrecoge a la vez." },
    { q: "Cita cuatro formas de expresar la religión.", sol: "Creencias, ritos, símbolos, normas morales, lugares y tiempos sagrados y comunidad." },
    { q: "¿Qué es un símbolo religioso? Pon dos ejemplos.", sol: "Un signo que remite a lo sagrado. Por ejemplo, la cruz y el agua del bautismo." },
    { q: "Define creyente, agnóstico y ateo.", sol: "Creyente: afirma que Dios existe. Agnóstico: piensa que no se puede saber. Ateo: afirma que no existe." },
    { q: "¿Qué es el monoteísmo y qué religiones son monoteístas?", sol: "La fe en un solo Dios. Judaísmo, cristianismo e islam." },
    { q: "Explica la imagen de la fe y la razón como «dos alas».", sol: "Las dos ayudan al ser humano a buscar la verdad; no se oponen, se complementan." },
    { q: "¿Quién fue Georges Lemaître?", sol: "Un sacerdote y científico belga que propuso la teoría del Big Bang." },
    { q: "¿Qué quiso decir san Agustín con «nuestro corazón está inquieto»?", sol: "Que el ser humano busca una felicidad que solo encuentra plenamente en Dios." },
    { q: "¿Por qué es importante la libertad religiosa?", sol: "Porque respeta la conciencia de cada persona para creer, no creer o cambiar de creencia, y permite convivir en paz." },
  ],
  quiz: [
    { q: "Con Abraham nace…", o: ["el monoteísmo", "el budismo", "el politeísmo"], a: 0, e: "Hacia el 1800 a. C." },
    { q: "El libro sagrado del islam es…", o: ["el Corán", "los Vedas", "la Torá"], a: 0, e: "Revelado a Mahoma según el islam." },
    { q: "Mendel, padre de la genética, era…", o: ["monje agustino", "rey", "médico griego"], a: 0, e: "Fe y ciencia." },
    { q: "«El corazón tiene razones que la razón no entiende» es de…", o: ["Pascal", "Descartes", "Platón"], a: 0, e: "Matemático y creyente." },
    { q: "Edith Stein llegó a la fe leyendo a…", o: ["santa Teresa de Jesús", "Cervantes", "Homero"], a: 0, e: "Murió en Auschwitz." },
  ],
  tarjetas: [
    ["Monoteísmo", "Fe en un solo Dios: judaísmo, cristianismo e islam."],
    ["Fe y razón", "Dos alas para buscar la verdad (Juan Pablo II)."],
    ["Lemaître", "Sacerdote y científico que propuso el Big Bang."],
  ],
});
