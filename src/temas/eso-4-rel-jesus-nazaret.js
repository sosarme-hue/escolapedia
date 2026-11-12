// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, linea, rueda, figLinea } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "Jesús de Nazaret",
  minutos: 40,
  objetivos: ["Conocer las fuentes históricas sobre Jesús de Nazaret", "Describir el contexto, el mensaje y las acciones de Jesús", "Explicar el significado cristiano de su muerte y resurrección"],
  claves: ["Jesús histórico", "Evangelios", "Reino de Dios", "parábola", "bienaventuranzas", "resurrección"],
  pregunta: {
    texto: "Contamos los años «antes» y «después de Cristo». Un hombre que vivió unos 33 años en una pequeña región del Imperio romano ha marcado la historia de la humanidad. ¿Quién fue Jesús de Nazaret?",
    respuesta: "Un judío de Galilea que vivió a comienzos del siglo I, predicó el <mark>Reino de Dios</mark>, curó enfermos, se acercó a los excluidos y fue crucificado en Jerusalén bajo Poncio Pilato. Sus discípulos anunciaron que había <b>resucitado</b>, y en ese anuncio nació el cristianismo.",
  },
  bloques: [
    {
      html: `<h3>Las fuentes sobre Jesús</h3><p>La mayoría de los historiadores, creyentes o no, aceptan que <mark>Jesús existió</mark>. Las fuentes principales son los <b>Evangelios</b> (Mateo, Marcos, Lucas y Juan), escritos entre los años 65 y 100, y las cartas de san Pablo (desde el año 50). También le mencionan autores no cristianos: el historiador judío <b>Flavio Josefo</b> y los romanos <b>Tácito</b> y Suetonio.</p>`,
      svg: dos("Fuentes cristianas y no cristianas sobre Jesús", ["Cristianas", ["4 Evangelios", "cartas de Pablo", "Hechos de los", "Apóstoles", "(años 50-100)"], "var(--bac)"], ["No cristianas", ["Flavio Josefo", "(judío)", "Tácito", "Suetonio", "(romanos)"], "var(--muted)"]),
    },
    {
      html: `<h3>Su tiempo y su tierra</h3><p>Jesús nació en Belén, probablemente entre el 6 y el 4 a. C., y creció en <b>Nazaret</b>, en Galilea, una región de Palestina dominada por el <b>Imperio romano</b>. Era <mark>judío</mark>: rezaba en la sinagoga, iba al Templo de Jerusalén y conocía las Escrituras. En su época había varios grupos religiosos: fariseos, saduceos, esenios y zelotes, que esperaban un Mesías libertador.</p>`,
      svg: filas("Grupos religiosos judíos en tiempos de Jesús", [["Fariseos", "cumplir la Ley al detalle", "var(--pen)"], ["Saduceos", "sacerdotes del Templo", "var(--sun)"], ["Esenios", "vida apartada, Qumrán", "var(--leaf)"], ["Zelotes", "lucha contra Roma", "var(--red)"]]),
    },
    {
      html: `<h3>El mensaje: el Reino de Dios</h3><p>El centro de su predicación fue el <mark>Reino de Dios</mark>: Dios es un Padre que ama a todos y quiere un mundo de justicia, perdón y fraternidad. Lo explicaba con <b>parábolas</b> (el hijo pródigo, el buen samaritano) y lo mostraba con hechos: curaciones, comidas con pecadores y pobres, perdón. En el Sermón de la Montaña proclamó las <b>bienaventuranzas</b>: «Dichosos los pobres, los que lloran, los que trabajan por la paz…».</p>`,
      svg: rueda("Rasgos del mensaje de Jesús", "REINO|DE DIOS", [["Dios Padre", "var(--sun)"], ["perdón", "var(--leaf)"], ["parábolas", "var(--pen)"], ["pobres", "var(--red)"], ["curaciones", "var(--inf)"], ["amor al otro", "var(--bac)"]], "var(--bac)"),
    },
    {
      html: `<h3>Muerte y resurrección</h3><p>Su libertad ante la Ley y su crítica al Templo provocaron el rechazo de las autoridades religiosas, que lo entregaron al gobernador romano <b>Poncio Pilato</b>. Fue <mark>crucificado</mark> en Jerusalén hacia el año 30, en tiempos de la Pascua judía. Al tercer día, según los Evangelios, sus discípulos encontraron el sepulcro vacío y experimentaron que estaba vivo: la <b>resurrección</b>, centro de la fe cristiana que se celebra en la Semana Santa.</p>`,
      svg: linea("Últimos días de Jesús según los Evangelios", [["domingo", "entrada en|Jerusalén"], ["jueves", "última|cena"], ["viernes", "crucifixión"], ["domingo", "resurrección"]], "var(--bac)"),
    },
  ],
  figura: {
    titulo: "La vida de Jesús en el tiempo",
    svg: figLinea("Línea del tiempo de la vida de Jesús y del nacimiento del cristianismo", [[50, "≈ 6-4 a. C.", "nacimiento en Belén", 1], [160, "≈ 27-28", "bautismo en el Jordán", 0], [280, "≈ 28-30", "predicación en Galilea", 1], [390, "≈ 30", "muerte y resurrección", 0], [490, "≈ 50", "primeras cartas de Pablo", 1], [610, "≈ 65-100", "se escriben los Evangelios", 0]], [[160, 390, "vida pública", "var(--bac)"]]),
  },
  video: { id: "l48uSWXya-U", titulo: "El Jesús histórico en 14 minutos", canal: "Academia Play", vistas: 6015443, megusta: 0, busqueda: "jesús de nazaret histórico" },
  quiz: [
    { q: "¿Cuáles son las principales fuentes sobre Jesús?", o: ["Los Evangelios y las cartas de Pablo", "Los periódicos de la época", "Las monedas romanas"], a: 0, e: "También le mencionan historiadores no cristianos como Flavio Josefo y Tácito." },
    { q: "¿En qué región creció Jesús?", o: ["Egipto", "Galilea", "Roma"], a: 1, e: "En Nazaret, en Galilea, al norte de Palestina." },
    { q: "¿Qué es una parábola?", o: ["Un milagro", "Un relato breve con una enseñanza", "Una oración judía"], a: 1, e: "Jesús usaba ejemplos de la vida diaria para explicar el Reino de Dios." },
    { q: "¿Qué gobernador romano condenó a Jesús?", o: ["Herodes", "Poncio Pilato", "Augusto"], a: 1, e: "La crucifixión era una pena romana." },
    { q: "¿Qué celebran los cristianos el Domingo de Resurrección?", o: ["El nacimiento de Jesús", "Que Jesús resucitó", "El bautismo de Jesús"], a: 1, e: "Es la fiesta más importante del cristianismo." },
  ],
  examen: [
    { q: "Los zelotes eran un grupo judío que…", o: ["vivía en el desierto", "quería expulsar a los romanos por la fuerza", "controlaba el Templo"], a: 1, e: "Esperaban un Mesías político y militar." },
    { q: "¿Qué historiador judío del siglo I menciona a Jesús?", o: ["Flavio Josefo", "Tito Livio", "Heródoto"], a: 0, e: "En sus «Antigüedades judías»." },
    { q: "Las bienaventuranzas forman parte del…", o: ["Sermón de la Montaña", "Apocalipsis", "Génesis"], a: 0, e: "Están en Mateo 5,1-12 y, en otra versión, en Lucas 6." },
  ],
  feynman: ["Qué fuentes cristianas y no cristianas hablan de Jesús", "Cómo era Palestina en tiempos de Jesús", "Qué es el Reino de Dios y cómo lo explicaba", "Por qué murió Jesús y qué significa la resurrección para los cristianos"],
  mapa: mapa("JESÚS DE NAZARET", "var(--bac)", [
    ["Fuentes", "Evangelios · Josefo · Tácito", "var(--muted)"],
    ["Contexto", "Galilea · judío · Roma", "var(--sun)"],
    ["Mensaje", "Reino de Dios · parábolas", "var(--leaf)"],
    ["Pascua", "cruz · resurrección", "var(--bac)"],
  ], 260),
  tarjetas: [
    ["Los cuatro Evangelios", "Mateo, Marcos, Lucas y Juan."],
    ["Fuentes no cristianas sobre Jesús", "Flavio Josefo, Tácito y Suetonio."],
    ["Núcleo del mensaje de Jesús", "El Reino de Dios: amor del Padre, justicia y perdón."],
    ["Parábola", "Relato breve de la vida diaria con una enseñanza."],
    ["Centro de la fe cristiana", "La muerte y resurrección de Jesús."],
  ],
  familias: ["Leed juntos la parábola del buen samaritano (Lc 10,25-37) y pensad quién es hoy «el prójimo».", "Buscad en vuestra localidad tradiciones de Semana Santa o de Navidad y su origen.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Jesucristo: historia, mensaje y misterio pascual; las fuentes y su interpretación (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Mapa de Palestina en el siglo I con los lugares de la vida de Jesús.", "Dramatizar una parábola actualizada.", "Comparar el relato de la pasión en dos Evangelios."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Jesús de Nazaret, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Jes%C3%BAs_de_Nazaret" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Interpretar parábolas y milagros de Jesús", "Conocer los grupos sociales y religiosos de su tiempo"],
  bloques: [
    { tras: "Las fuentes sobre Jesús", html: `<h3>Fuentes no cristianas</h3><p>Además de los Evangelios, varios autores no cristianos mencionan a Jesús. El historiador judío <b>Flavio Josefo</b> (hacia el año 93) habla de «Jesús, un hombre sabio» y de su hermano Santiago. El romano <mark>Tácito</mark> (hacia 116) cuenta que los cristianos toman su nombre de Cristo, «ejecutado en tiempos de Tiberio por el procurador Poncio Pilato». También lo citan Suetonio y Plinio el Joven. La inmensa mayoría de los historiadores, creyentes o no, acepta que Jesús existió, que predicó en Galilea y que murió crucificado en Jerusalén hacia el año 30.</p>` },
    { tras: "Su tiempo y su tierra", html: `<h3>Los grupos de su tiempo</h3>${tabla(["Grupo", "Quiénes eran", "Qué pensaban"], [["Fariseos", "laicos piadosos, muy respetados", "cumplir con detalle la Ley de Moisés; creían en la resurrección"], ["Saduceos", "sacerdotes y aristocracia del Templo", "solo aceptaban la Torá; no creían en la resurrección; colaboraban con Roma"], ["Zelotes", "grupo nacionalista", "expulsar a los romanos con las armas"], ["Esenios", "comunidades apartadas (Qumrán)", "vida austera y pureza, esperando el fin de los tiempos"], ["Publicanos", "recaudadores de impuestos para Roma", "considerados pecadores y traidores"]])}<p>Jesús trató con todos ellos y comió con <mark>publicanos y pecadores</mark>, algo que escandalizaba a muchos.</p>` },
    { tras: "El mensaje: el Reino", html: `<h3>Las parábolas</h3><p>Jesús enseñaba con <mark>parábolas</mark>: relatos sencillos de la vida diaria (semillas, ovejas, monedas, banquetes) que esconden una enseñanza sobre Dios. En la del <b>hijo pródigo</b> (Lc 15), un padre recibe con una fiesta al hijo que había malgastado su herencia: Dios es un Padre misericordioso que siempre perdona. En la del <b>buen samaritano</b> (Lc 10), un extranjero despreciado es quien ayuda al herido: el prójimo es cualquiera que lo necesita. En la del <b>sembrador</b> (Mc 4), la semilla que cae en buena tierra da fruto: hay que acoger la Palabra.</p>`, video: { id: "941C6u6EIJU", titulo: "El significado de la parábola del hijo pródigo", canal: "Break Free", vistas: 432030, megusta: 0 } },
    { tras: "El mensaje: el Reino", html: `<h3>Milagros y Bienaventuranzas</h3><p>Los Evangelios narran que Jesús curó enfermos, expulsó demonios y realizó otros signos. Para los evangelistas, los <b>milagros</b> no son espectáculos: son <mark>signos</mark> de que el Reino de Dios ya está llegando y de que Dios se preocupa por los que sufren. En el <b>Sermón del Monte</b> (Mt 5-7) Jesús proclama las <b>Bienaventuranzas</b>: dichosos los pobres, los que lloran, los mansos, los que tienen hambre de justicia, los misericordiosos, los limpios de corazón, los que trabajan por la paz y los perseguidos. Resume la Ley en el <b>mandamiento del amor</b>: amar a Dios y al prójimo como a uno mismo, incluso a los enemigos.</p>` },
    { tras: "Muerte y resurrección", html: `<h3>La Semana Santa en los Evangelios</h3>${tabla(["Día", "Qué se recuerda"], [["Domingo de Ramos", "entrada de Jesús en Jerusalén, aclamado por la gente"], ["Jueves Santo", "Última Cena: institución de la Eucaristía y lavatorio de los pies"], ["Viernes Santo", "pasión y muerte en la cruz"], ["Sábado Santo", "silencio junto al sepulcro"], ["Domingo de Resurrección", "las mujeres encuentran el sepulcro vacío; Jesús resucitado se aparece"]])}<p>La Pascua es la <b>fiesta más importante</b> del cristianismo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Interpreta la parábola del buen samaritano.", pasos: ["Un hombre es asaltado y queda herido.", "Un sacerdote y un levita pasan de largo.", "Un samaritano, considerado enemigo por los judíos, lo cura y paga su alojamiento.", "Jesús pregunta quién se portó como prójimo."], resultado: "El prójimo no es solo el de tu grupo: es cualquiera que necesita ayuda, y amar es actuar." },
    { enunciado: "Explica por qué Jesús escandalizaba a algunos grupos de su tiempo.", pasos: ["Comía con publicanos y pecadores.", "Curaba en sábado, el día de descanso.", "Criticaba la hipocresía religiosa.", "Se presentaba con una autoridad que solo correspondía a Dios."], resultado: "Su mensaje rompía barreras religiosas y sociales, y eso incomodaba a los poderosos." },
    { enunciado: "Compara las fuentes cristianas y no cristianas sobre Jesús.", pasos: ["Cristianas: Evangelios y cartas, escritos por creyentes con mucha información.", "No cristianas: Josefo, Tácito, Suetonio; pocas líneas, pero de autores que no eran seguidores suyos.", "Ambas coinciden en que existió y murió crucificado con Pilato."], resultado: "Las no cristianas confirman los datos básicos; las cristianas aportan su mensaje y su vida." },
  ],
  errores: [
    "Pensar que los Evangelios son biografías modernas: son testimonios de fe escritos por comunidades.",
    "Creer que no hay ninguna fuente no cristiana sobre Jesús.",
    "Leer las parábolas como hechos reales: son relatos con enseñanza.",
    "Confundir fariseos y saduceos.",
    "Reducir los milagros a magia o espectáculo: en los Evangelios son signos del Reino.",
  ],
  ejercicios: [
    { q: "¿Qué dice Tácito sobre Jesús?", sol: "Que fue ejecutado en tiempos de Tiberio por el procurador Poncio Pilato y que de él toman nombre los cristianos." },
    { q: "Diferencia fariseos y saduceos.", sol: "Los fariseos eran laicos que cumplían la Ley con detalle y creían en la resurrección; los saduceos, sacerdotes ricos del Templo que no creían en ella." },
    { q: "¿Quiénes eran los publicanos?", sol: "Recaudadores de impuestos para Roma, mal vistos por el pueblo." },
    { q: "¿Qué es una parábola?", sol: "Un relato sencillo de la vida diaria que transmite una enseñanza religiosa." },
    { q: "¿Qué enseña la parábola del hijo pródigo?", sol: "Que Dios es un Padre misericordioso que siempre acoge y perdona." },
    { q: "¿Qué significan los milagros en los Evangelios?", sol: "Son signos de que el Reino de Dios llega y de que Dios cuida a quienes sufren." },
    { q: "Escribe tres Bienaventuranzas.", sol: "Por ejemplo: dichosos los misericordiosos, los que trabajan por la paz y los que tienen hambre de justicia." },
    { q: "¿Qué es el mandamiento del amor?", sol: "Amar a Dios sobre todas las cosas y al prójimo como a uno mismo." },
    { q: "¿Qué se celebra el Jueves Santo?", sol: "La Última Cena, la institución de la Eucaristía y el lavatorio de los pies." },
    { q: "¿Por qué la Pascua es la fiesta más importante para los cristianos?", sol: "Porque celebra la resurrección de Jesús, centro de su fe." },
  ],
  quiz: [
    { q: "El historiador judío que menciona a Jesús es…", o: ["Flavio Josefo", "Tácito", "Herodoto"], a: 0, e: "Hacia el año 93." },
    { q: "Los zelotes querían…", o: ["expulsar a los romanos", "colaborar con Roma", "vivir en el desierto"], a: 0, e: "Eran nacionalistas." },
    { q: "La parábola del buen samaritano está en…", o: ["Lucas", "Marcos", "Apocalipsis"], a: 0, e: "Lc 10." },
    { q: "Las Bienaventuranzas forman parte del…", o: ["Sermón del Monte", "Génesis", "Apocalipsis"], a: 0, e: "Mt 5." },
    { q: "La Eucaristía se instituyó el…", o: ["Jueves Santo", "Domingo de Ramos", "Viernes Santo"], a: 0, e: "En la Última Cena." },
  ],
  tarjetas: [
    ["Parábola", "Relato sencillo con una enseñanza sobre Dios."],
    ["Fariseos", "Grupo judío que cumplía estrictamente la Ley."],
    ["Bienaventuranzas", "Declaraciones de dicha del Sermón del Monte."],
  ],
});
