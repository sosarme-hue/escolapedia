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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Una noche bajo las estrellas", `<p>En un campamento de verano, lejos de las luces de la ciudad, un grupo de chicos y chicas se tumba en la hierba a mirar el cielo. Nunca habían visto tantas estrellas. Alguien recuerda que la luz de algunas salió hace miles de años y que la Tierra es un punto diminuto en una galaxia con miles de millones de soles. Se hace el silencio. Entonces Marina pregunta en voz baja: «¿Vosotros creéis que todo esto tiene algún sentido? ¿Que hay algo, o alguien, detrás?».</p><p>Durante un buen rato hablan de todo: de la muerte de un abuelo, de lo que quieren ser de mayores, de si somos solo materia, de por qué existe el mal, de si Dios existe. Unos creen, otros dudan, otros piensan que no. Pero todos se han hecho la misma clase de preguntas que la humanidad se hace desde hace miles de años. En este tema conocerás esas grandes preguntas, cómo se expresa la experiencia religiosa, qué respuestas han dado las religiones, los creyentes y los no creyentes, y cómo dialogan la fe y la razón. No se trata de imponer ninguna respuesta, sino de aprender a pensar a fondo la propia.</p>`],
  mas: [
    ["<h3>Las grandes preguntas</h3>", `<p>Estas preguntas suelen aparecer en momentos especiales: ante la belleza de la naturaleza, al enamorarse, ante la muerte de un ser querido, una enfermedad, una injusticia o un gran cambio en la vida. La adolescencia, con todos sus cambios, es una etapa en la que muchas personas empiezan a planteárselas con fuerza por primera vez.</p>`],
    ["<h3>Cómo se expresa la religión</h3>", `<p>Todas las religiones tienen también una dimensión <b>comunitaria</b>: los creyentes no viven su fe solos, sino en grupos que celebran juntos, se ayudan y transmiten sus tradiciones. Y una dimensión <b>ética</b>: cada religión propone una forma de vivir y de tratar a los demás, que en muchos casos coincide con la llamada regla de oro: «Trata a los demás como quieres que te traten a ti».</p>`],
    ["<h3>Dios sale al encuentro del ser humano</h3>", `<p>Por eso la fe cristiana no se presenta como una teoría, sino como una <b>relación</b> personal: creer es confiar en alguien, como se confía en un amigo, y no solo aceptar unas ideas. Esa relación se alimenta con la oración, la lectura de la Biblia, los sacramentos y la vida en comunidad.</p>`],
    ["<h3>Fe y razón</h3>", `<p>La ciencia y la fe responden a preguntas distintas: la ciencia explica <b>cómo</b> funciona el universo; la fe se pregunta <b>por qué</b> existe y <b>para qué</b> vivimos. Por eso muchos grandes científicos han sido creyentes.</p>`],
  ],
  svgs: [
    ["<h3>La religiosidad en la historia</h3>", "La religiosidad en la historia", [["Prehistoria", "enterramientos con ofrendas"], ["Antigüedad", "templos y mitos"], ["Hoy", "miles de millones de creyentes"]], "desde siempre"],
    ["<h3>Grandes religiones del mundo</h3>", "Tres religiones monoteístas", [["Judaísmo", "la Torá"], ["Cristianismo", "la Biblia"], ["Islam", "el Corán"]], "hijas de Abraham"],
    ["<h3>Fe y razón</h3>", "Fe y razón", [["Razón", "busca y comprende"], ["Fe", "confía y da sentido"], ["Juntas", "dos alas para volar"]], "no son enemigas"],
    ["<h3>Testigos de la búsqueda</h3>", "Testigos de la búsqueda", [["San Agustín", "corazón inquieto"], ["Pascal", "razones del corazón"], ["Edith Stein", "fe tras buscar la verdad"]], "personas que buscaron"],
  ],
  bloques: [
    { tras: "<h3>La experiencia religiosa</h3>", html: `<h3>Lo sagrado: lugares, tiempos y personas</h3><p>Las religiones distinguen entre lo <mark>sagrado</mark>, lo que se relaciona con la divinidad y merece un respeto especial, y lo <b>profano</b>, lo de la vida ordinaria. Esa distinción se nota en el <b>espacio</b>: templos, iglesias, mezquitas, sinagogas, santuarios o montañas sagradas son lugares separados en los que se entra de otro modo, a veces descalzo, con la cabeza cubierta o en silencio. También en el <b>tiempo</b>: cada religión tiene sus fiestas y su calendario (el domingo cristiano, el sabbat judío, el ramadán musulmán), que interrumpen la rutina para recordar lo esencial.</p><p>Hay además <b>personas</b> dedicadas a lo sagrado (sacerdotes, rabinos, imanes, monjes y monjas) y <b>acciones</b> sagradas: oraciones, ofrendas, ayunos y <mark>peregrinaciones</mark>, viajes a un lugar santo, como el Camino de Santiago para los cristianos, La Meca para los musulmanes o el río Ganges para los hindúes. Todo esto muestra que el ser humano necesita expresar con signos visibles su relación con lo que le supera.</p>`, svg: ["Expresiones de lo sagrado", [["Lugares", "templos, santuarios"], ["Tiempos", "fiestas, día santo"], ["Acciones", "oración, peregrinación"]], "sagrado y profano"] },
    { tras: "<h3>Grandes religiones del mundo</h3>", html: `<h3>El diálogo entre religiones</h3><p>A lo largo de la historia, las diferencias religiosas han provocado a veces guerras y persecuciones. Pero también hay una larga tradición de <mark>diálogo</mark> y convivencia. En la Iglesia católica, el Concilio Vaticano II, en el documento <i>Nostra aetate</i> (1965), afirmó que la Iglesia «no rechaza nada de lo que en estas religiones hay de verdadero y santo» y pidió a los católicos que conocieran y respetaran a creyentes de otras religiones, en especial a judíos y musulmanes.</p><p>En 1986, el papa Juan Pablo II reunió en <b>Asís</b> (Italia) a líderes de muchas religiones para rezar por la paz, cada uno según su tradición; estos encuentros se han repetido después. Hoy, en España conviven iglesias católicas y evangélicas, mezquitas, sinagogas, templos budistas y otros lugares de culto, y la Constitución garantiza la libertad religiosa. El diálogo no significa pensar que todas las religiones dicen lo mismo, sino conocerse, respetarse, colaborar en causas comunes como la paz o la ayuda a los pobres y rechazar cualquier violencia en nombre de Dios.</p>`, svg: ["Diálogo interreligioso", [["Nostra aetate", "Vaticano II, 1965"], ["Asís", "oración por la paz, 1986"], ["Hoy", "convivencia y libertad religiosa"]], "conocerse y respetarse"] },
    { tras: "<h3>Respuestas ante la pregunta por Dios</h3>", html: `<h3>La increencia y la indiferencia</h3><p>En los siglos XIX y XX, algunos pensadores formularon críticas profundas a la religión. A Marx, Nietzsche y Freud se les llama a veces los «<mark>maestros de la sospecha</mark>», porque sospechaban que detrás de la fe había otra cosa. <b>Karl Marx</b> pensaba que la religión era «el opio del pueblo», un consuelo que impedía a los pobres luchar contra la injusticia. <b>Friedrich Nietzsche</b> proclamó que «Dios ha muerto» y que el ser humano debía crear sus propios valores. <b>Sigmund Freud</b> la veía como una ilusión nacida del deseo infantil de protección.</p><p>Muchos creyentes han respondido a estas críticas, reconociendo a veces lo que tienen de verdad: cuando la religión se ha usado para justificar injusticias, se ha traicionado a sí misma. Hoy, además del ateísmo y el agnosticismo, está muy extendida la <mark>indiferencia religiosa</mark>: personas a las que la pregunta por Dios no les interesa o no se la plantean. El diálogo respetuoso entre creyentes y no creyentes es necesario en una sociedad plural y ayuda a ambos a pensar mejor.</p>`, svg: ["Formas de increencia", [["Ateísmo", "Dios no existe"], ["Agnosticismo", "no se puede saber"], ["Indiferencia", "no interesa"]], "maestros de la sospecha"] },
    { tras: "<h3>Fe y razón</h3>", html: `<h3>Caminos de la razón hacia Dios</h3><p>Muchos filósofos han intentado mostrar con la razón que la existencia de Dios es razonable. Los más famosos son las <mark>cinco vías</mark> de <b>santo Tomás de Aquino</b> (siglo XIII). Parten de la observación del mundo: todo lo que se mueve es movido por otro, y no puede haber una cadena infinita, así que debe existir un <b>primer motor</b>; todo efecto tiene una causa, y debe haber una <b>causa primera</b>; las cosas existen pero podrían no existir, así que debe haber un ser <b>necesario</b>; en el mundo hay grados de bondad y perfección, que remiten a un ser <b>perfecto</b>; y la naturaleza muestra un <b>orden</b> que apunta a una inteligencia ordenadora.</p><p>Otros caminos parten del ser humano: la <b>conciencia moral</b>, que nos dice que el bien vale aunque nadie nos vea; el deseo de felicidad y de sentido; o la experiencia de la <b>belleza</b>. Estos argumentos no son demostraciones como las de las matemáticas, y los no creyentes han propuesto objeciones. Pero muestran que creer en Dios no tiene por qué ir contra la razón, y que la fe puede dar razones de lo que cree.</p>`, svg: ["Caminos hacia Dios", [["Cinco vías", "santo Tomás de Aquino"], ["Conciencia", "el bien vale siempre"], ["Belleza y sentido", "deseo de plenitud"]], "razones para creer"], video: "viasTomas" },
    { html: `<h3>Mis propias preguntas</h3><p>La búsqueda de sentido no es solo un tema de estudio: es una experiencia personal. Muchas personas, creyentes o no, cultivan su <mark>interioridad</mark>, es decir, su capacidad de mirar hacia dentro, conocerse y preguntarse qué es lo importante. Algunas formas sencillas de hacerlo son buscar momentos de <b>silencio</b> sin pantallas, pasear por la naturaleza, escribir un diario, contemplar una obra de arte, escuchar música con atención o conversar a fondo con alguien de confianza.</p><p>Para los creyentes, la <b>oración</b> es una forma de diálogo con Dios en esa interioridad. Para quien no cree, la reflexión, la meditación o el compromiso con los demás pueden ser caminos de sentido. En cualquier caso, la búsqueda es <b>libre</b>: nadie puede creer por otro ni imponer la fe, y cada persona tiene derecho a hacerse sus preguntas a su ritmo. Lo que sí vale para todos es la invitación a no vivir en la superficie, a no conformarse con respuestas rápidas y a respetar profundamente el camino de los demás.</p>`, svg: ["Cultivar la interioridad", [["Silencio", "sin pantallas"], ["Diario", "escribir lo que siento"], ["Diálogo", "con otros o con Dios"]]] },
  ],
  videos: [["<h3>La religiosidad en la historia</h3>", "religiones"]],
  ejemplos: [
    ["Clasifica como sagrado o profano: una mezquita, un supermercado, el ramadán, unas vacaciones de verano.", ["La mezquita es un lugar dedicado a la oración: sagrado.", "El supermercado es un lugar de la vida ordinaria: profano.", "El ramadán es un tiempo religioso de ayuno: sagrado.", "Las vacaciones son un tiempo ordinario de descanso: profano."], "Sagrados: la mezquita y el ramadán. Profanos: el supermercado y las vacaciones."],
    ["Explica la vía de la causa primera con un ejemplo.", ["Un efecto tiene una causa: el vaso se cae porque lo empujé.", "Esa causa tiene a su vez otra causa, y así sucesivamente.", "Si la cadena fuera infinita, no habría un comienzo y nada existiría ahora."], "Debe haber una causa primera no causada, que santo Tomás identifica con Dios."],
    ["¿Qué respondería un creyente a la crítica de Marx de que la religión es «el opio del pueblo»?", ["Reconoce que a veces la religión se ha usado para justificar injusticias.", "Recuerda que la Biblia y muchos creyentes han denunciado la injusticia (los profetas, la doctrina social).", "Señala que la fe cristiana invita a transformar el mundo, no a resignarse."], "Que el abuso de la religión no define a la religión, y que la fe auténtica impulsa a luchar por la justicia."],
  ],
  errores: ["Confundir el diálogo interreligioso con pensar que todas las religiones dicen exactamente lo mismo."],
  niveles: "bbbbbbmbmm",
  ejercicios: [
    ["b", "Define sagrado y profano.", "Sagrado: lo relacionado con la divinidad, que merece un respeto especial. Profano: lo de la vida ordinaria."],
    ["b", "Cita tres lugares de peregrinación de distintas religiones.", "Santiago de Compostela (cristianismo), La Meca (islam) y el río Ganges (hinduismo)."],
    ["b", "¿Qué fue el encuentro de Asís de 1986?", "Una reunión convocada por Juan Pablo II en la que líderes de muchas religiones rezaron por la paz, cada uno según su tradición."],
    ["b", "¿Quiénes son los «maestros de la sospecha»?", "Marx, Nietzsche y Freud, que criticaron la religión sospechando que escondía otra cosa."],
    ["b", "¿Qué es la indiferencia religiosa?", "La actitud de quien no se plantea la pregunta por Dios o no le da importancia."],
    ["b", "Cita las cinco vías de santo Tomás.", "Primer motor, causa primera, ser necesario, grados de perfección y orden del universo."],
    ["m", "Explica qué afirmó el documento Nostra aetate.", "Que la Iglesia no rechaza nada de lo verdadero y santo que hay en otras religiones, y pidió conocer y respetar a sus creyentes, especialmente judíos y musulmanes."],
    ["m", "Resume la crítica de Freud a la religión y una posible respuesta.", "Freud la veía como una ilusión nacida del deseo infantil de protección. Respuesta: que deseemos algo no prueba que no exista; además, la fe adulta exige compromiso y no solo consuelo."],
    ["m", "¿Por qué los argumentos sobre Dios no son demostraciones matemáticas?", "Porque parten de la experiencia del mundo y razonan sobre lo que la supera; muestran que creer es razonable, pero admiten objeciones y requieren una decisión libre."],
    ["m", "Explica el argumento de la conciencia moral.", "Experimentamos que el bien obliga aunque nadie nos vea ni nos premie; ese carácter absoluto del deber moral apunta, para muchos, a un fundamento más allá del ser humano."],
    ["m", "¿Qué tienen en común las religiones en su dimensión ética?", "Proponen una forma de vida y de trato a los demás; muchas comparten la regla de oro: tratar a los demás como queremos que nos traten."],
    ["m", "¿Por qué el ser humano necesita signos visibles para expresar lo sagrado?", "Porque es un ser corporal y social: expresa lo que vive por dentro con gestos, lugares, tiempos y objetos que se pueden compartir con otros."],
    ["m", "Cita tres formas de cultivar la interioridad.", "Momentos de silencio sin pantallas, escribir un diario, pasear por la naturaleza (también contemplar arte, escuchar música o conversar a fondo)."],
    ["a", "Compara las respuestas del creyente, el agnóstico, el ateo y el indiferente ante la pregunta «¿Existe Dios?».", "Creyente: sí, y confía en él. Agnóstico: no se puede saber. Ateo: no existe. Indiferente: no le interesa la pregunta."],
    ["a", "¿Por qué el diálogo entre religiones es importante para la paz?", "Porque muchas guerras se han justificado con motivos religiosos; el conocimiento mutuo, el respeto y la colaboración desactivan prejuicios y deslegitiman la violencia en nombre de Dios."],
    ["a", "Elige una de las cinco vías y escribe una objeción que podría plantear un no creyente.", "Respuesta abierta. Ejemplo: sobre la vía del orden, un no creyente puede decir que la evolución explica el orden de los seres vivos sin necesidad de un diseñador."],
    ["a", "¿Qué aspectos de las críticas a la religión pueden ser útiles para los propios creyentes?", "Ayudan a purificar la fe: a no usarla para justificar injusticias (Marx), a no vivirla como mero consuelo infantil (Freud) y a mostrar que da sentido y valor a la vida (Nietzsche)."],
    ["a", "Describe un lugar sagrado de tu entorno y explica cómo se comportan allí las personas.", "Respuesta abierta. Debe describir el lugar, los signos que lo identifican como sagrado y las normas de comportamiento (silencio, vestimenta, gestos)."],
    ["a", "Escribe una reflexión personal (100 palabras) sobre una gran pregunta que te hayas hecho.", "Respuesta abierta y personal, respetando las convicciones de cada alumno."],
    ["a", "Explica la diferencia entre libertad religiosa y relativismo.", "La libertad religiosa es el derecho a creer, no creer o cambiar de creencia sin ser obligado. El relativismo afirma que todas las ideas valen lo mismo y que no hay verdad. Se puede defender la libertad religiosa sin pensar que todo da igual."],
    ["a", "¿Por qué crees que la pregunta por Dios sigue presente en una sociedad científica y tecnológica?", "Porque la ciencia explica cómo funcionan las cosas, pero no responde por sí sola a preguntas de sentido (por qué existimos, qué hay tras la muerte, qué vale la pena), que siguen inquietando a las personas."],
  ],
  cuartas: ["Una pregunta de cocina", "no existe", "Un dios", "es lo mismo que creer", "una película", "el ateísmo", "el Talmud", "pirata", "Nietzsche", "Lorca", "Nietzsche", "la religión es obligatoria para todos", "Que comían mucho"],
  quiz: [
    ["Lo que se relaciona con la divinidad y merece especial respeto es…", ["lo sagrado", "lo profano", "lo indiferente", "lo científico"], 0, "Frente a lo ordinario."],
    ["Un viaje a un lugar santo es una…", ["peregrinación", "excursión escolar", "emigración", "procesión"], 0, "Santiago, La Meca, el Ganges."],
    ["El día santo judío es el…", ["sabbat", "domingo", "viernes", "ramadán"], 0, "Del viernes al sábado por la tarde."],
    ["El documento Nostra aetate es del…", ["Concilio Vaticano II", "Concilio de Trento", "siglo XIII", "año 2020"], 0, "1965."],
    ["El encuentro de Asís de 1986 lo convocó…", ["Juan Pablo II", "Francisco", "Pablo VI", "Benedicto XVI"], 0, "Oración por la paz."],
    ["«La religión es el opio del pueblo» es de…", ["Marx", "Nietzsche", "Freud", "Pascal"], 0, "Maestro de la sospecha."],
    ["«Dios ha muerto» lo proclamó…", ["Nietzsche", "Marx", "san Agustín", "Freud"], 0, "Siglo XIX."],
    ["Las cinco vías son de…", ["santo Tomás de Aquino", "san Agustín", "Pascal", "Platón"], 0, "Siglo XIII."],
    ["La vía del primer motor parte de…", ["el movimiento", "la belleza", "la Biblia", "la conciencia"], 0, "Todo lo que se mueve es movido por otro."],
    ["Quien no se plantea la pregunta por Dios muestra…", ["indiferencia religiosa", "ateísmo militante", "fe", "agnosticismo"], 0, "Muy extendida hoy."],
  ],
  examen: [
    ["Freud veía la religión como…", ["una ilusión nacida del deseo de protección", "una ciencia", "una ley", "una fiesta"], 0, "Maestro de la sospecha."],
    ["Para la fe cristiana, creer es sobre todo…", ["confiar en alguien", "aprender datos", "obedecer sin pensar", "ir a misa"], 0, "Una relación personal."],
    ["El diálogo entre religiones busca…", ["conocerse, respetarse y colaborar", "fundirlas en una", "convencer a la fuerza", "ignorarse"], 0, "Sin violencia en nombre de Dios."],
    ["La interioridad es la capacidad de…", ["mirar hacia dentro y preguntarse por lo importante", "estar siempre conectado", "hablar mucho", "competir"], 0, "Silencio, reflexión."],
    ["La vía del orden parte de…", ["el orden de la naturaleza", "el dinero", "la historia de Roma", "los sueños"], 0, "Apunta a una inteligencia ordenadora."],
  ],
  tarjetas: [["Sagrado / profano", "Lo relacionado con Dios frente a lo ordinario."], ["Nostra aetate", "Documento del Vaticano II sobre las otras religiones (1965)."], ["Maestros de la sospecha", "Marx, Nietzsche y Freud, críticos de la religión."], ["Cinco vías", "Argumentos de santo Tomás sobre la existencia de Dios."]],
  glosario: [["Pregunta de sentido", "Pregunta sobre el porqué y el para qué de la vida."], ["Experiencia religiosa", "Vivencia de lo que nos supera y da sentido."], ["Sagrado", "Lo que se relaciona con la divinidad."], ["Profano", "Lo de la vida ordinaria."], ["Rito", "Gesto o celebración religiosa."], ["Peregrinación", "Viaje a un lugar santo."], ["Monoteísmo", "Creencia en un solo Dios."], ["Revelación", "Dios que se da a conocer."], ["Ateísmo", "Afirmación de que Dios no existe."], ["Agnosticismo", "Postura de que no se puede saber si Dios existe."], ["Indiferencia religiosa", "Desinterés por la pregunta de Dios."], ["Diálogo interreligioso", "Encuentro y respeto entre religiones."], ["Cinco vías", "Argumentos racionales de santo Tomás."], ["Interioridad", "Dimensión interior de la persona."]],
  situacion: { titulo: "El mural de las grandes preguntas", reto: "Recoger, clasificar y dialogar sobre las grandes preguntas que se hacen las personas de tu entorno.", pasos: ["Hacer una encuesta anónima a compañeros, familiares y vecinos sobre la pregunta más importante que se han hecho.", "Clasificar las preguntas (origen, sentido, muerte, mal, Dios, felicidad).", "Investigar cómo responden a dos de ellas una religión, un filósofo creyente y uno no creyente.", "Organizar un diálogo respetuoso en clase con las distintas respuestas.", "Crear un mural con las preguntas, las respuestas y una reflexión personal."], producto: "Mural de las grandes preguntas con respuestas diversas y reflexiones personales.", evaluacion: ["La encuesta y la clasificación son rigurosas.", "Se presentan con fidelidad respuestas creyentes y no creyentes.", "El diálogo se desarrolla con respeto y escucha.", "La reflexión personal es profunda y sincera."] },
  familias: ["Aprovechad un paseo o una noche tranquila para conversar sobre alguna gran pregunta, escuchando sin juzgar."],
  saberes: "la búsqueda de sentido y la experiencia religiosa; lo sagrado; diálogo interreligioso; increencia; fe y razón.",
  minutos: 100,
});
