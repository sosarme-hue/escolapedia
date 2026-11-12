// Música 1º ESO: la música en la Antigüedad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La música en la Antigüedad",
  minutos: 50,
  objetivos: ["Conocer el origen de la música en la Prehistoria", "Describir la música en Mesopotamia, Egipto, Grecia y Roma", "Comprender la relación de Pitágoras con la música", "Valorar la arqueología musical como forma de recuperar el pasado"],
  claves: ["Prehistoria", "lira", "aulós", "Pitágoras", "ethos", "arqueología musical"],
  pregunta: {
    texto: "Si en la Antigüedad no existían las grabaciones, ¿cómo sabemos cómo era su música?",
    respuesta: "Gracias a la <b>arqueología musical</b>. Los investigadores estudian <b>instrumentos</b> encontrados en excavaciones, <b>pinturas y relieves</b> donde aparecen músicos, <b>textos</b> antiguos que describen la música y algunas <b>partituras</b> grabadas en piedra o papiro. <mark>Con todo ello reconstruyen instrumentos y melodías</mark>, aunque siempre con parte de hipótesis.",
  },
  bloques: [
    {
      html: `<h3>La música en la Prehistoria</h3><p>La música es tan antigua como el ser humano. Los primeros «instrumentos» fueron el propio <b>cuerpo</b> (palmas, pies, voz) y objetos de la naturaleza: piedras, palos, conchas.</p><ul><li>Los instrumentos más antiguos conservados son <b>flautas de hueso</b> de buitre y de marfil de mamut halladas en cuevas de Alemania, con unos <b>40 000 años</b>.</li><li>Se usaban también <b>raspadores</b>, sonajas y tambores de piel.</li><li>Algunas cuevas con pinturas, como las del norte de España, tienen una <b>acústica</b> especial, y se cree que allí se cantaba o se tocaba.</li></ul><p>La música prehistórica estaba unida a la <b>magia</b>, los rituales, la caza y la vida en grupo.</p>`,
      svg: svg("Línea del tiempo: Prehistoria con flautas de hueso de hace 40 000 años, Mesopotamia y Egipto hacia el 3000 antes de Cristo, Grecia hacia el 500 antes de Cristo y Roma hasta el siglo V", `<path d="M16 90 H 246" stroke="var(--ink)" stroke-width="2.5"/>${[[48, "Prehistoria", "flautas de hueso", "var(--sun)"], [104, "Mesopotamia", "y Egipto · arpas", "var(--leaf)"], [164, "Grecia", "lira · aulós", "var(--pen)"], [220, "Roma", "tuba · órgano", "var(--red)"]].map(([x, a, b, c], i) => `<circle cx="${x}" cy="90" r="7" fill="${c}"/>${t(x, i % 2 ? 128 : 52, a, { s: 11, c })}${t(x, i % 2 ? 144 : 68, b, { s: 9 })}`).join("")}${t(48, 166, "−40 000", { s: 9, c: "var(--muted)" })}${t(104, 30, "−3000", { s: 9, c: "var(--muted)" })}${t(164, 166, "−500", { s: 9, c: "var(--muted)" })}${t(220, 30, "hasta el s. V", { s: 9, c: "var(--muted)" })}`),
    },
    {
      html: `<h3>Mesopotamia y Egipto</h3><p>En las primeras civilizaciones la música era cosa de <b>templos y palacios</b>, y los músicos tenían un oficio reconocido.</p><ul><li>En <b>Mesopotamia</b> se encontraron las <b>liras de Ur</b>, de hace unos 4 500 años, decoradas con oro y lapislázuli. Y en la ciudad de Ugarit (Siria) apareció un himno escrito en una tablilla de arcilla, de hacia el 1400 a. C., considerado una de las <b>partituras más antiguas</b> conocidas.</li><li>En <b>Egipto</b> las pinturas de las tumbas muestran <b>arpas</b>, flautas, laúdes, crótalos y el <b>sistro</b>, un sonajero de metal dedicado a la diosa Hathor. La música acompañaba ceremonias religiosas, banquetes y funerales.</li></ul>`,
    },
    {
      html: `<h3>Grecia: la música en el centro de la cultura</h3><p>Para los <b>griegos</b>, la música era fundamental en la educación de los jóvenes, junto con la gimnasia y las letras. La palabra «música» viene de las <b>Musas</b>, las diosas de las artes.</p><ul><li>La música iba casi siempre unida a la <b>poesía</b> y la <b>danza</b>.</li><li>Se usaba en el <b>teatro</b>, donde el coro cantaba y danzaba, en las fiestas religiosas y en los Juegos.</li><li>Era <b>monódica</b>: una sola línea melódica, sin acordes.</li></ul><p>Los griegos creían que cada tipo de música tenía un <b>ethos</b>, un efecto sobre el carácter: unas melodías animaban al valor y otras a la calma. Por eso el filósofo <b>Platón</b> pensaba que había que elegir con cuidado qué música escuchaban los jóvenes.</p>`,
      video: vb("antB"),
    },
    {
      html: `<h3>Los instrumentos griegos</h3>${tabla(["Instrumento", "Tipo", "Uso"], [["Lira", "cordófono pequeño con caja de concha de tortuga", "educación, acompañar la poesía; dios Apolo"], ["Cítara", "lira grande de madera", "músicos profesionales y concursos"], ["Aulós", "aerófono doble de lengüeta", "teatro, fiestas; dios Dioniso"], ["Siringa", "flauta de pan", "pastores; dios Pan"], ["Tímpano", "pandero", "ritos y danzas"]])}<p>La lira representaba el orden y la razón; el aulós, la emoción y la fiesta. Esta oposición entre lo «apolíneo» y lo «dionisíaco» ha inspirado a artistas y pensadores durante siglos.</p>`,
      svg: svg("Dibujo esquemático de una lira griega con brazos curvos, travesaño y siete cuerdas, junto a un aulós de dos tubos", `<path d="M60 150 C 30 150 34 112 58 108 L 50 40 C 46 26 60 22 64 34 M120 150 C 150 150 146 112 122 108 L 130 40 C 134 26 120 22 116 34" fill="none" stroke="var(--sun)" stroke-width="3"/><ellipse cx="90" cy="134" rx="34" ry="20" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2.5"/><path d="M52 50 H 128" stroke="var(--ink)" stroke-width="3"/>${[...Array(7)].map((_, i) => `<path d="M${72 + i * 6} 50 V 132" stroke="var(--ink)" stroke-width="1"/>`).join("")}${t(90, 174, "lira", { s: 11, c: "var(--sun)" })}<path d="M196 40 L 178 150 M204 40 L 226 150" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>${[0, 1, 2].map((k) => `<circle cx="${190 - k * 3}" cy="${80 + k * 20}" r="2" fill="var(--paper)"/><circle cx="${210 + k * 4}" cy="${80 + k * 20}" r="2" fill="var(--paper)"/>`).join("")}${t(202, 174, "aulós", { s: 11, c: "var(--pen)" })}`),
    },
    {
      html: `<h3>Pitágoras y los números del sonido</h3><p>El matemático griego <b>Pitágoras</b> (siglo VI a. C.) descubrió que la música y las matemáticas están unidas. Experimentó con un <b>monocordio</b>, una caja con una sola cuerda tensa:</p><ul><li>Si la cuerda se divide por la <b>mitad</b> (proporción 1:2), suena la misma nota más aguda: la <b>octava</b>.</li><li>Si se toman <b>dos tercios</b> (2:3), suena una <b>quinta</b>, un intervalo muy agradable.</li><li>Si se toman <b>tres cuartos</b> (3:4), suena una <b>cuarta</b>.</li></ul><p>De ahí surgió la idea de que el universo estaba ordenado por números y que los planetas producían una «música de las esferas». Las proporciones de Pitágoras siguen siendo la base de la afinación y de la colocación de los trastes en una guitarra.</p>`,
      svg: svg("Monocordio: una cuerda entera, la mitad que da la octava y dos tercios que dan la quinta", `${[["cuerda entera", 1, "var(--ink)"], ["½: octava", 0.5, "var(--red)"], ["⅔: quinta", 2 / 3, "var(--pen)"], ["¾: cuarta", 0.75, "var(--leaf)"]].map(([n, f, c], i) => `<rect x="20" y="${26 + i * 38}" width="200" height="12" rx="3" fill="var(--card)" stroke="var(--line)"/><path d="M24 ${32 + i * 38} H ${(24 + 192 * f).toFixed(1)}" stroke="${c}" stroke-width="3"/><path d="M${(24 + 192 * f).toFixed(1)} ${22 + i * 38} v 20" stroke="${c}" stroke-width="2"/>${t(24, 20 + i * 38 + 32, n, { s: 10, a: "start", c })}`).join("")}`),
    },
    {
      html: `<h3>Roma</h3><p>Los <b>romanos</b> heredaron gran parte de la música griega, pero le dieron un uso más <b>práctico y espectacular</b>:</p><ul><li><b>Música militar</b>: instrumentos de metal potentes como la <b>tuba</b> (recta), el <b>cornu</b> (curvado en forma de G) y la <b>bucina</b>, para dar órdenes en las batallas.</li><li><b>Espectáculos</b>: en el circo y el anfiteatro sonaba el <b>hydraulis</b>, un órgano que funcionaba con agua para mantener la presión del aire. Es el antepasado del órgano actual.</li><li><b>Vida privada</b>: los banquetes de las familias ricas tenían músicos y bailarinas.</li></ul><p>Muchos instrumentos de metal actuales descienden de los romanos, y hasta el nombre «tuba» viene del latín.</p>`,
    },
    {
      html: `<h3>La península ibérica en la Antigüedad</h3><p>También en nuestro territorio hay huellas de la música antigua:</p><ul><li>En yacimientos <b>íberos</b> aparecen vasijas pintadas con escenas de <b>danzas en corro</b> acompañadas de flautas dobles, muy parecidas al aulós griego.</li><li>Los <b>celtas</b> del norte usaban grandes trompas de guerra y probablemente instrumentos de viento parecidos a los antepasados de la gaita.</li><li>En la <b>Hispania romana</b>, las bailarinas de <b>Gades</b> (la actual Cádiz) eran famosas en todo el Imperio: bailaban acompañándose de <b>crótalos</b>, unos pequeños platillos de mano que muchos consideran antepasados de las <b>castañuelas</b>.</li></ul><p>Los teatros romanos de Mérida, Sagunto o Cartagena muestran que la música y el espectáculo formaban parte de la vida de las ciudades.</p>`,
    },
    {
      html: `<h3>Recuperar la música perdida</h3><p>Hoy, músicos e investigadores reconstruyen instrumentos antiguos a partir de restos arqueológicos y pinturas para saber cómo sonaban. Algunos ejemplos:</p><ul><li>El <b>epitafio de Seikilos</b>, una melodía griega grabada en una columna funeraria (siglo I), es la composición completa más antigua que conservamos con su música escrita.</li><li>Se han tocado réplicas de <b>liras</b>, <b>auloi</b> y cuernos de la Edad del Bronce.</li><li>El músico gallego <b>Abraham Cupeiro</b> divulga cómo sonaban instrumentos como el carnyx celta o la tuba romana.</li></ul><p>Actividad: elige un instrumento antiguo, investiga cómo era y construye una maqueta o un dibujo explicativo.</p>`,
      video: vb("antB2"),
    },
  ],
  figura: {
    titulo: "La música en la Antigüedad en un vistazo",
    svg: filas("Resumen: Prehistoria con flautas de hueso; Mesopotamia con las liras de Ur; Egipto con arpas y sistro; Grecia con lira, aulós y ethos; Pitágoras y las proporciones; Roma con tuba y órgano hidráulico", [["Prehistoria", "cuerpo · flautas de hueso", "var(--sun)"], ["Mesopotamia", "liras de Ur · tablillas", "var(--leaf)"], ["Egipto", "arpas · sistro", "var(--leaf)"], ["Grecia", "lira · aulós · ethos", "var(--pen)"], ["Pitágoras", "1:2 octava · 2:3 quinta", "var(--inf)"], ["Roma", "tuba · cornu · hydraulis", "var(--red)"]], 200),
  },
  video: vg("antV"),
  quiz: mezcla([
    { q: "Los instrumentos más antiguos conservados son…", o: ["flautas de hueso", "violines", "pianos"], a: 0, e: "Unos 40 000 años." },
    { q: "Las liras de Ur son de…", o: ["Mesopotamia", "Roma", "Egipto"], a: 0, e: "Hace unos 4 500 años." },
    { q: "El sistro era un instrumento…", o: ["egipcio", "romano", "prehistórico"], a: 0, e: "Diosa Hathor." },
    { q: "La palabra «música» viene de…", o: ["las Musas", "los músicos romanos", "Pitágoras"], a: 0, e: "Diosas griegas." },
    { q: "El aulós es un…", o: ["aerófono doble de lengüeta", "cordófono", "tambor"], a: 0, e: "Dioniso." },
    { q: "La lira se asociaba al dios…", o: ["Apolo", "Dioniso", "Marte"], a: 0, e: "Orden y razón." },
    { q: "La música griega era…", o: ["monódica", "polifónica", "electrónica"], a: 0, e: "Una sola melodía." },
    { q: "Pitágoras experimentó con el…", o: ["monocordio", "órgano", "sistro"], a: 0, e: "Una cuerda." },
    { q: "La mitad de una cuerda da la…", o: ["octava", "quinta", "cuarta"], a: 0, e: "1:2." },
    { q: "El hydraulis era un…", o: ["órgano de agua romano", "tambor egipcio", "arpa griega"], a: 0, e: "Antepasado del órgano." },
  ]),
  examen: mezcla([
    { q: "El ethos griego era…", o: ["el efecto de la música en el carácter", "un tipo de lira", "una escala romana"], a: 0, e: "Platón." },
    { q: "Dos tercios de una cuerda dan la…", o: ["quinta", "octava", "cuarta"], a: 0, e: "2:3." },
    { q: "¿Para qué usaban los romanos la tuba y el cornu?", o: ["para dar órdenes militares", "para el teatro griego", "para rezar a Hathor"], a: 0, e: "Música militar." },
  ]),
  feynman: ["Cómo sabemos cómo era la música antigua", "Qué función tenía la música en la Prehistoria", "Por qué la música era importante en Grecia", "Qué descubrió Pitágoras con el monocordio", "Para qué usaban la música los romanos"],
  mapa: mapa("MÚSICA ANTIGUA", "var(--eso)", [
    ["Prehistoria", "ritual · flautas de hueso", "var(--sun)"],
    ["Mesopotamia y Egipto", "templos · arpas · liras", "var(--leaf)"],
    ["Grecia", "lira · aulós · Pitágoras", "var(--pen)"],
    ["Roma", "militar · hydraulis", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Arqueología musical", "Estudio de la música del pasado a partir de restos."],
    ["Flauta de hueso", "Instrumento prehistórico de unos 40 000 años."],
    ["Sistro", "Sonajero de metal egipcio."],
    ["Lira", "Cordófono griego asociado a Apolo."],
    ["Aulós", "Aerófono doble griego asociado a Dioniso."],
    ["Ethos", "Efecto de la música sobre el carácter según los griegos."],
    ["Monocordio", "Caja de una cuerda con la que experimentó Pitágoras."],
    ["Hydraulis", "Órgano hidráulico romano."],
  ],
  familias: ["Visitad un museo arqueológico y buscad instrumentos o músicos en vasijas y relieves.", "Probad con una goma elástica a pulsarla entera y por la mitad.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La música en la Antigüedad: funciones, instrumentos y pensamiento musical; relación con otras artes y con las matemáticas; el patrimonio musical (RD 217/2022, Música, contextos y culturas).",
    ideas: ["Monocordio casero con una tabla, dos clavos y una cuerda de guitarra.", "Línea del tiempo musical en el pasillo con dibujos de instrumentos.", "Debate: ¿la música influye en nuestro estado de ánimo, como decían los griegos?"],
  },
  fuentes: [RD, { t: "Museo Arqueológico Nacional", url: "https://www.man.es/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Una cuerda de 60 cm da la nota do. ¿Qué longitud da la octava? ¿Y la quinta?", pasos: ["Octava: la mitad, 60 : 2 = 30 cm.", "Quinta: dos tercios, 60 · 2 : 3 = 40 cm."], resultado: "30 cm (octava) y 40 cm (quinta)." },
    { enunciado: "Clasifica la lira, el aulós y el sistro según Hornbostel-Sachs.", pasos: ["Lira: vibran cuerdas (cordófono).", "Aulós: vibra el aire con una lengüeta (aerófono).", "Sistro: vibran sus láminas metálicas (idiófono)."], resultado: "Cordófono, aerófono e idiófono." },
    { enunciado: "Explica por qué Platón quería controlar la música que escuchaban los jóvenes.", pasos: ["Los griegos creían en el ethos.", "Cada música provocaba un estado de ánimo.", "Querían jóvenes valientes y equilibrados."], resultado: "Porque creía que la música formaba el carácter." },
  ],
  errores: [
    "Pensar que la música empezó con la escritura musical.",
    "Creer que la música griega sonaba con acordes como la actual.",
    "Confundir la lira (cuerda) con el aulós (viento).",
    "Pensar que la tuba romana era igual que la tuba actual.",
    "Creer que conocemos exactamente cómo sonaba la música antigua.",
  ],
  ejercicios: [
    { q: "Cita tres fuentes que nos permiten conocer la música antigua.", sol: "Instrumentos hallados, pinturas y relieves, textos y partituras antiguas." },
    { q: "¿Qué función tenía la música en la Prehistoria?", sol: "Ritual, mágica, social, acompañaba la caza y las celebraciones." },
    { q: "Nombra dos instrumentos egipcios.", sol: "Arpa y sistro (también flautas, crótalos)." },
    { q: "¿Por qué la música era importante en la educación griega?", sol: "Por el ethos: se creía que formaba el carácter." },
    { q: "Diferencia la lira del aulós.", sol: "La lira es un cordófono (Apolo, razón); el aulós, un aerófono doble de lengüeta (Dioniso, emoción)." },
    { q: "¿Qué es el monocordio y qué demostró?", sol: "Una caja con una cuerda; que los intervalos dependen de proporciones numéricas." },
    { q: "Una cuerda mide 90 cm. ¿Qué longitud da la octava?", sol: "45 cm." },
    { q: "Nombra tres instrumentos militares romanos.", sol: "Tuba, cornu y bucina." },
    { q: "¿Qué es el epitafio de Seikilos?", sol: "La composición completa más antigua conservada con su música, grabada en una columna griega." },
    { q: "Elige un instrumento antiguo y escribe una ficha: época, tipo, uso y cómo sonaba.", sol: "Respuesta abierta." },
  ],
};
