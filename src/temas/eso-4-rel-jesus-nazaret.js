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
