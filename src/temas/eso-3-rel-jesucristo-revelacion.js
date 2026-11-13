// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, linea, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "Jesucristo, plenitud de la revelación",
  minutos: 35,
  objetivos: ["Explicar qué significa que Jesucristo es la plenitud de la revelación", "Conocer cómo nos llegan los Evangelios y qué son", "Comprender la fe cristiana en Jesús, verdadero Dios y verdadero hombre"],
  claves: ["revelación", "encarnación", "Evangelios", "Reino de Dios", "verdadero Dios y verdadero hombre", "Pascua", "Trinidad"],
  pregunta: {
    texto: "Si quieres conocer de verdad a alguien, ¿te basta con leer lo que otros dicen de él, o es mejor que te hable directamente?",
    respuesta: "Es mejor que te hable él. La carta a los Hebreos lo dice así: Dios habló muchas veces por medio de los profetas, pero «en esta etapa final nos ha hablado por el <mark>Hijo</mark>» (Hb 1,1-2). Para los cristianos, en Jesús Dios no solo envía un mensaje: <b>se muestra Él mismo</b>. Por eso Jesús es la <b>plenitud de la revelación</b>.",
  },
  bloques: [
    {
      html: `<h3>Dios se revela por etapas</h3><p>La <mark>revelación</mark> es el modo en que Dios se da a conocer. Según la fe cristiana, lo hace poco a poco: primero a través de la <b>creación</b>, cuya belleza y orden hablan de su Creador; después en la <b>historia de Israel</b>, por medio de los patriarcas, Moisés y los profetas; y finalmente, de forma plena y definitiva, en <b>Jesucristo</b>. El concilio Vaticano II lo explica en el documento <i>Dei Verbum</i>: Jesús es a la vez el <b>mediador</b> y la <b>plenitud</b> de toda la revelación. Después de Él no hay que esperar ninguna revelación pública nueva.</p>`,
      svg: linea("Etapas de la revelación de Dios", [["Creación", "el mundo|habla de Dios"], ["Israel", "patriarcas|y Moisés"], ["Profetas", "hablan por|Dios"], ["Jesús", "plenitud"]], "var(--bac)"),
    },
    {
      html: `<h3>La Encarnación: Dios se hace hombre</h3><p>El centro de la fe cristiana es que el Hijo de Dios <mark>se hizo hombre</mark> en Jesús de Nazaret: es la <b>Encarnación</b>. El Evangelio de Juan lo expresa así: «La Palabra se hizo carne y habitó entre nosotros» (Jn 1,14). Jesús nació de <b>María</b> en Belén, creció en Nazaret, trabajó como artesano y vivió como cualquier persona de su tiempo, menos en el pecado. Por eso, al ver a Jesús, vemos cómo es Dios. Él mismo lo dijo al apóstol Felipe: «Quien me ha visto a mí ha visto al Padre» (Jn 14,9).</p>`,
      svg: filas("Claves de la Encarnación", [["Palabra", "el Hijo de Dios", "var(--sun)"], ["Carne", "se hace hombre", "var(--red)"], ["María", "su madre", "var(--pen)"], ["Belén", "nace hacia el 6 a. C.", "var(--leaf)"]]),
    },
    {
      html: `<h3>Los Evangelios</h3><p>Conocemos a Jesús sobre todo por los cuatro <mark>Evangelios</mark> (palabra griega que significa «buena noticia»), escritos por <b>Mateo</b>, <b>Marcos</b>, <b>Lucas</b> y <b>Juan</b> entre los años 65 y 100. No son biografías modernas, sino <b>testimonios de fe</b> basados en recuerdos de los testigos. Se formaron en tres etapas: primero, la <b>vida de Jesús</b>; después, la <b>predicación oral</b> de los apóstoles; por último, la <b>redacción escrita</b>. Los tres primeros se llaman <b>sinópticos</b> porque se parecen mucho y pueden leerse en columnas paralelas; el de Juan es más reflexivo.</p>`,
      svg: filas("Cómo se formaron los Evangelios", [["1. Jesús", "vida y palabras (≈ 30)", "var(--sun)"], ["2. Oral", "predicación apostólica", "var(--pen)"], ["3. Escrito", "Evangelios (65–100)", "var(--leaf)"]]),
    },
    {
      html: `<h3>Palabras y gestos: el Reino de Dios</h3><p>Jesús anunció la llegada del <mark>Reino de Dios</mark>: Dios es un Padre que ama a todos y quiere un mundo nuevo de justicia, perdón y paz. Lo enseñó con <b>palabras</b>, como las bienaventuranzas y las <b>parábolas</b> (el hijo pródigo, el buen samaritano), y lo mostró con <b>gestos</b>: curaba enfermos, perdonaba pecados, comía con personas despreciadas y acogía a los niños y a los pobres. Sus <b>milagros</b> son signos de que el Reino ya está llegando. Llamaba a Dios <i>Abbá</i>, «papá», mostrando una relación única con Él.</p>`,
      svg: dos("Cómo anunció Jesús el Reino", ["Palabras", ["bienaventuranzas", "parábolas", "padrenuestro", "Abbá, Padre"], "var(--pen)"], ["Gestos", ["curaciones", "perdón", "comidas con", "los excluidos"], "var(--leaf)"]),
    },
    {
      html: `<h3>La Pascua: muerte y resurrección</h3><p>La revelación de Jesús llega a su punto culminante en la <mark>Pascua</mark>. Su mensaje y su libertad provocaron el rechazo de las autoridades, y fue <b>crucificado</b> en Jerusalén hacia el año 30. En la cruz muestra hasta dónde llega el amor de Dios: dar la vida por todos. Al tercer día, sus discípulos encontraron el sepulcro vacío y tuvieron encuentros con Él <b>resucitado</b>. La resurrección es el centro de la fe cristiana: confirma que Jesús es el Hijo de Dios y que la muerte no tiene la última palabra. San Pablo escribió: «Si Cristo no ha resucitado, vana es nuestra fe» (1 Cor 15,14).</p>`,
      svg: linea("Los días de la Pascua", [["Jueves", "Última|Cena"], ["Viernes", "muerte en|la cruz"], ["Sábado", "sepulcro"], ["Domingo", "resurrección"]], "var(--red)"),
    },
  ],
  figura: {
    titulo: "Jesucristo, centro de la revelación",
    svg: figCols("Esquema: Jesús revela a Dios con su encarnación, sus palabras, sus gestos y su Pascua", [["Encarnación", ["Dios se hace", "hombre", "nace de María", "Jn 1,14"], "var(--sun)"], ["Palabras", ["Reino de Dios", "parábolas", "bienaventuranzas", "Abbá"], "var(--pen)"], ["Gestos", ["curaciones", "perdón", "acoge a pobres", "milagros"], "var(--leaf)"], ["Pascua", ["muerte en cruz", "resurrección", "nueva alianza", "Espíritu Santo"], "var(--red)"]]),
  },
  video: { id: "qYPjnKixJiA", titulo: "¿De qué modo Jesucristo es verdadero Dios y verdadero hombre?", canal: "En ti confío", vistas: 32995, megusta: 0, busqueda: "Jesús verdadero Dios y verdadero hombre explicación" },
  quiz: [
    { q: "¿Qué es la revelación?", o: ["El modo en que Dios se da a conocer", "Una fotografía", "Un milagro"], a: 0, e: "Por etapas, hasta Jesús." },
    { q: "¿Qué significa «Evangelio»?", o: ["Buena noticia", "Libro sagrado", "Historia antigua"], a: 0, e: "Del griego euangelion." },
    { q: "¿Cuáles son los Evangelios sinópticos?", o: ["Mateo, Marcos y Lucas", "Juan, Pablo y Pedro", "Los cuatro"], a: 0, e: "Se parecen y se leen en paralelo." },
    { q: "¿Qué es la Encarnación?", o: ["El Hijo de Dios se hace hombre", "La resurrección", "Una fiesta"], a: 0, e: "«La Palabra se hizo carne»." },
    { q: "¿Cuál es el centro de la fe cristiana?", o: ["La resurrección de Jesús", "Los milagros", "Las parábolas"], a: 0, e: "1 Cor 15,14." },
  ],
  examen: [
    { q: "«Quien me ha visto a mí ha visto al Padre» se lo dijo Jesús a…", o: ["Felipe", "Pedro", "Pilato"], a: 0, e: "Jn 14,9." },
    { q: "¿Qué documento del Vaticano II habla de la revelación?", o: ["Dei Verbum", "Laudato si'", "Rerum novarum"], a: 0, e: "«Palabra de Dios»." },
    { q: "«Abbá» significa…", o: ["papá", "maestro", "rey"], a: 0, e: "Muestra la confianza de Jesús con Dios." },
  ],
  feynman: ["Qué significa que Jesucristo es la plenitud de la revelación", "Qué es la Encarnación", "Cómo se formaron los Evangelios", "Por qué la Pascua es el centro de la fe cristiana"],
  mapa: mapa("JESUCRISTO", "var(--bac)", [
    ["Revelación", "creación · Israel · Jesús", "var(--pen)"],
    ["Encarnación", "Dios hecho hombre", "var(--sun)"],
    ["Evangelios", "Mt · Mc · Lc · Jn", "var(--leaf)"],
    ["Pascua", "muerte y resurrección", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Revelación", "Dios que se da a conocer; su plenitud es Jesucristo."],
    ["Encarnación", "El Hijo de Dios se hace hombre en Jesús."],
    ["Evangelios sinópticos", "Mateo, Marcos y Lucas, muy parecidos entre sí."],
    ["Reino de Dios", "Centro del mensaje de Jesús: Dios Padre y un mundo nuevo."],
    ["Resurrección", "Jesús vence a la muerte al tercer día: centro de la fe."],
  ],
  familias: ["Leed juntos una parábola (Lc 15,11-32) y comentad qué dice de Dios.", "Mirad una imagen de Jesús en una iglesia o museo y pensad qué momento de su vida representa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Jesucristo, plenitud de la revelación: encarnación, formación de los Evangelios, anuncio del Reino, misterio pascual y fe cristológica (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Sinopsis: comparar en tres columnas un mismo episodio en Mateo, Marcos y Lucas.", "Mural del Reino de Dios con noticias actuales de perdón y justicia.", "Analizar el Credo frase a frase."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Concilio Vaticano II, constitución Dei Verbum", url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar los títulos con que los cristianos confiesan a Jesús", "Relacionar a Jesús con la fe en la Trinidad"],
  bloques: [
    { tras: "Los Evangelios", html: `<h3>Los cuatro evangelistas</h3>${tabla(["Evangelio", "Para quién escribe", "Rasgo de Jesús", "Símbolo"], [["Mateo", "cristianos de origen judío", "el Mesías que cumple las Escrituras", "hombre / ángel"], ["Marcos", "cristianos de Roma", "el Hijo de Dios que sufre; el más breve y antiguo", "león"], ["Lucas", "cristianos de origen pagano", "la misericordia de Dios con los pobres y pecadores", "toro"], ["Juan", "comunidades de Asia Menor", "la Palabra de Dios hecha carne", "águila"]])}<p>Los símbolos de los evangelistas, llamados <mark>Tetramorfos</mark>, aparecen muchas veces en las portadas de iglesias románicas y góticas.</p>`, video: { id: "DVOr2MEw02w", titulo: "¿Por qué hay 4 Evangelios? La diferencia entre Mateo, Marcos, Lucas y Juan", canal: "Codigo De Fe", vistas: 116862, megusta: 0 } },
    { tras: "Palabras y gestos: el Reino de Dios", html: `<h3>Verdadero Dios y verdadero hombre</h3><p>Los primeros cristianos tuvieron que explicar quién era Jesús. Algunos decían que solo era un hombre muy bueno; otros, que era Dios con apariencia humana. Tras largos debates, los concilios de <b>Nicea</b> (325) y <b>Calcedonia</b> (451) formularon la fe de la Iglesia: Jesucristo es <mark>verdadero Dios y verdadero hombre</mark>, una sola persona con dos naturalezas. Como <b>hombre</b>, tuvo hambre, se cansó, lloró por su amigo Lázaro, sintió miedo en Getsemaní. Como <b>Dios</b>, perdonaba pecados, tenía autoridad sobre la ley y sobre la naturaleza y resucitó. Esta fe se reza cada domingo en el <b>Credo</b>.</p>` },
    { tras: "Verdadero Dios y verdadero hombre", html: `<h3>Los nombres de Jesús</h3><p>Cada nombre o título de Jesús expresa algo de su identidad. <b>Jesús</b> (<i>Yeshúa</i>) significa «Dios salva». <mark>Cristo</mark> es la traducción griega de Mesías, «ungido». <b>Hijo de Dios</b> indica su relación única con el Padre. <b>Señor</b> (<i>Kyrios</i>) es el nombre que los judíos daban a Dios, y los cristianos lo aplicaron a Jesús resucitado. <b>Emmanuel</b> significa «Dios con nosotros». Él mismo se describió con imágenes: «Yo soy el <b>buen pastor</b>», «Yo soy la <b>luz del mundo</b>», «Yo soy el <b>camino, la verdad y la vida</b>». Los primeros cristianos resumían su fe en un pez, <i>ichthys</i> en griego, cuyas letras forman las iniciales de «Jesús Cristo, Hijo de Dios, Salvador».</p>` },
    { tras: "La Pascua: muerte y resurrección", html: `<h3>Jesús nos revela la Trinidad</h3><p>Jesús no solo nos muestra cómo es Dios: nos revela que Dios es <mark>comunión de amor</mark>. Habla de su <b>Padre</b>, con quien está unido de forma única, y promete enviar el <b>Espíritu Santo</b>, que llega a los apóstoles en <b>Pentecostés</b>. Por eso los cristianos creen en un solo Dios en tres personas: Padre, Hijo y Espíritu Santo, la <b>Santísima Trinidad</b>. No son tres dioses, sino un único Dios que es amor, como dice san Juan: «Dios es amor» (1 Jn 4,8). Los cristianos se bautizan «en el nombre del Padre y del Hijo y del Espíritu Santo», y al santiguarse recuerdan esta fe.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué se dice que Jesús es la «plenitud» de la revelación.", pasos: ["Antes, Dios se mostraba por la creación y hablaba por los profetas.", "En Jesús, Dios mismo se hace hombre: no envía un mensaje, se muestra.", "Por eso, después de Él no hay que esperar otra revelación pública."], resultado: "Porque en Jesús Dios se revela de forma completa y definitiva." },
    { enunciado: "Busca en el Evangelio un rasgo humano y uno divino de Jesús.", pasos: ["Humano: llora ante la tumba de Lázaro (Jn 11,35).", "Divino: perdona los pecados al paralítico (Mc 2,5-12).", "La Iglesia confiesa ambas cosas a la vez."], resultado: "Jesús es verdadero hombre (llora) y verdadero Dios (perdona pecados)." },
    { enunciado: "Explica el símbolo del pez de los primeros cristianos.", pasos: ["En griego, pez es ichthys.", "Sus letras son las iniciales de Iesous Christos Theou Yios Soter.", "Significa «Jesús Cristo, Hijo de Dios, Salvador»."], resultado: "Un resumen secreto de la fe en tiempos de persecución." },
  ],
  errores: [
    "Pensar que los Evangelios son biografías modernas con todos los datos: son testimonios de fe.",
    "Creer que «Cristo» es un apellido: es un título, significa Mesías.",
    "Pensar que Jesús solo era un buen maestro, o solo Dios disfrazado de hombre.",
    "Confundir la Encarnación (Dios se hace hombre) con la resurrección.",
    "Pensar que la Trinidad son tres dioses: es un solo Dios en tres personas.",
  ],
  ejercicios: [
    { q: "¿Por qué etapas se revela Dios?", sol: "Por la creación, por la historia de Israel (patriarcas, Moisés, profetas) y, plenamente, en Jesucristo." },
    { q: "Explica la frase «La Palabra se hizo carne».", sol: "El Hijo de Dios, la Palabra eterna, se hizo hombre en Jesús de Nazaret (Jn 1,14)." },
    { q: "¿Qué son los Evangelios y quién los escribió?", sol: "Testimonios de fe sobre Jesús, escritos por Mateo, Marcos, Lucas y Juan entre los años 65 y 100." },
    { q: "Nombra las tres etapas de formación de los Evangelios.", sol: "Vida de Jesús, predicación oral de los apóstoles y redacción escrita." },
    { q: "¿Qué es el Reino de Dios?", sol: "El centro del mensaje de Jesús: Dios Padre que ama a todos y quiere un mundo de justicia, perdón y paz." },
    { q: "¿Por qué la resurrección es el centro de la fe cristiana?", sol: "Porque confirma que Jesús es el Hijo de Dios y que la muerte no tiene la última palabra." },
    { q: "Asocia cada evangelista con su símbolo.", sol: "Mateo, hombre o ángel; Marcos, león; Lucas, toro; Juan, águila." },
    { q: "¿Qué afirmaron los concilios de Nicea y Calcedonia?", sol: "Que Jesucristo es verdadero Dios y verdadero hombre." },
    { q: "¿Qué significan «Jesús» y «Cristo»?", sol: "Jesús: «Dios salva». Cristo: «ungido», Mesías." },
    { q: "Explica qué es la Trinidad.", sol: "La fe en un solo Dios en tres personas: Padre, Hijo y Espíritu Santo." },
  ],
  quiz: [
    { q: "El símbolo de san Juan es…", o: ["el águila", "el león", "el toro"], a: 0, e: "Por su visión elevada." },
    { q: "«Yo soy la luz del mundo» lo dijo…", o: ["Jesús", "Moisés", "Isaías"], a: 0, e: "Jn 8,12." },
    { q: "El Espíritu Santo llega a los apóstoles en…", o: ["Pentecostés", "Navidad", "Epifanía"], a: 0, e: "Cincuenta días después de Pascua." },
    { q: "«Ichthys» significa…", o: ["pez", "cruz", "luz"], a: 0, e: "Símbolo de los primeros cristianos." },
    { q: "Calcedonia (451) habló de…", o: ["las dos naturalezas de Cristo", "los sacramentos", "la Biblia"], a: 0, e: "Divina y humana." },
  ],
  tarjetas: [
    ["Tetramorfos", "Símbolos de los evangelistas: hombre, león, toro y águila."],
    ["Trinidad", "Un solo Dios en tres personas: Padre, Hijo y Espíritu Santo."],
    ["Cristo", "Título de Jesús: «ungido», Mesías."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["La persona más influyente de la historia", `<p>Si se pregunta quién ha sido la persona más influyente de la historia, muchos historiadores, creyentes o no, citan el mismo nombre: Jesús de Nazaret. Es una afirmación sorprendente. Jesús nació en una aldea de una provincia pequeña del Imperio romano, nunca escribió un libro, nunca tuvo un ejército ni un cargo político, no viajó más allá de unos cientos de kilómetros y murió joven, ejecutado como un criminal. Sin embargo, el calendario que usamos cuenta los años desde su nacimiento, su vida ha inspirado miles de obras de arte, y hoy más de dos mil millones de personas se declaran sus seguidoras.</p><p>Historiadores creyentes y no creyentes aceptan que Jesús existió realmente. La pregunta que divide a las personas es otra: ¿quién era Jesús? ¿Un gran maestro, un profeta, un revolucionario, o, como afirma la fe cristiana, el Hijo de Dios hecho hombre? En este tema conocerás cómo Dios se da a conocer según el cristianismo, qué cuentan los Evangelios, cuál fue el mensaje de Jesús, qué significan sus nombres y títulos y por qué su muerte y resurrección son el centro de la fe cristiana.</p>`],
  mas: [
    ["<h3>Dios se revela por etapas</h3>", `<p>La Biblia compara la revelación con una conversación que Dios mantiene con la humanidad a lo largo de los siglos: «Muchas veces y de muchos modos habló Dios antiguamente a nuestros padres por los profetas; ahora, en esta etapa final, nos ha hablado por el Hijo» (Hebreos 1,1-2). Jesús es la última y definitiva palabra de Dios.</p>`],
    ["<h3>Los Evangelios</h3>", `<p>Además de los Evangelios, otros autores antiguos no cristianos mencionan a Jesús: el historiador judío <b>Flavio Josefo</b> (siglo I) y los historiadores romanos <b>Tácito</b> y <b>Suetonio</b> (siglo II). Tácito cuenta que «Cristo» fue ejecutado por el procurador Poncio Pilato durante el reinado de Tiberio.</p>`],
    ["<h3>Verdadero Dios y verdadero hombre</h3>", `<p>Los Evangelios muestran a un Jesús plenamente humano: tiene hambre y sed, se cansa, llora ante la tumba de su amigo Lázaro, se enfada con los mercaderes del templo, siente angustia en Getsemaní. Y a la vez actúa con una autoridad que solo corresponde a Dios: perdona pecados, calma la tempestad y se presenta como Señor del sábado.</p>`],
    ["<h3>La Pascua: muerte y resurrección</h3>", `<p>Los relatos de la resurrección no describen el momento en que Jesús resucita, sino las <b>apariciones</b>: a María Magdalena junto al sepulcro, a los discípulos de Emaús, a los apóstoles reunidos, a Tomás, que dudaba. Los testigos cambian por completo: de estar escondidos y asustados pasan a anunciar a Jesús sin miedo, aun a costa de la vida.</p>`],
    ["<h3>Jesús nos revela la Trinidad</h3>", `<p>San Agustín, según una tradición, paseaba por la playa pensando en la Trinidad cuando vio a un niño que intentaba meter todo el mar en un hoyo con un cubo. «Es imposible», le dijo. Y el niño respondió: «Más imposible es que tú comprendas el misterio de Dios». La Trinidad no se entiende del todo, pero se puede contemplar.</p>`],
  ],
  svgs: [
    ["<h3>Los cuatro evangelistas</h3>", "Los evangelistas y sus símbolos", [["Mateo y Marcos", "hombre y león"], ["Lucas", "toro"], ["Juan", "águila"]], "tetramorfos"],
    ["<h3>Verdadero Dios y verdadero hombre</h3>", "Dos naturalezas, una persona", [["Verdadero hombre", "siente, sufre, muere"], ["Verdadero Dios", "perdona y resucita"], ["Calcedonia (451)", "sin mezcla ni separación"]], "el misterio de Cristo"],
    ["<h3>Los nombres de Jesús</h3>", "Los nombres de Jesús", [["Jesús", "Dios salva"], ["Cristo", "el Ungido, Mesías"], ["Señor", "título divino"]], "quién es"],
    ["<h3>Jesús nos revela la Trinidad</h3>", "Un solo Dios, tres personas", [["Padre", "crea y ama"], ["Hijo", "salva"], ["Espíritu Santo", "da vida y santifica"]], "la Trinidad"],
  ],
  bloques: [
    { tras: "<h3>La Encarnación: Dios se hace hombre</h3>", html: `<h3>El Jesús de la historia</h3><p>Los historiadores reconstruyen con bastante seguridad los rasgos básicos de la vida de Jesús. Nació hacia el año <b>6-4 a. C.</b> (el monje que calculó la era cristiana en el siglo VI se equivocó en unos años), en tiempos del rey Herodes el Grande, probablemente en Belén, y creció en <b>Nazaret</b>, en Galilea, en una familia judía sencilla; trabajó como artesano, el oficio de José. Hablaba <b>arameo</b>, conocía las Escrituras y rezaba en la sinagoga.</p><p>Hacia los treinta años fue bautizado por <b>Juan el Bautista</b> en el río Jordán y comenzó a predicar por los pueblos de Galilea. Reunió a un grupo de discípulos, entre ellos los Doce apóstoles, y a varias mujeres que lo acompañaban. Su vida pública duró entre uno y tres años. Su mensaje y su libertad frente a las normas religiosas provocaron el rechazo de las autoridades del templo de Jerusalén, que lo entregaron al gobernador romano <b>Poncio Pilato</b>. Murió crucificado hacia el año <b>30</b>, en vísperas de la Pascua judía. Estos datos básicos los aceptan también historiadores no creyentes.</p>`, svg: ["Vida de Jesús", [["Hacia 6-4 a. C.", "nacimiento"], ["Hacia el 27", "bautismo y predicación"], ["Hacia el 30", "muerte en Jerusalén"]], "datos históricos"] },
    { tras: "<h3>Palabras y gestos: el Reino de Dios</h3>", html: `<h3>Las parábolas</h3><p>Jesús enseñaba con frecuencia mediante <mark>parábolas</mark>, relatos breves sacados de la vida cotidiana (el campo, la pesca, la casa, el trabajo) que encierran una enseñanza sobre Dios y su Reino. No dan la respuesta hecha: obligan a quien escucha a pensar y a tomar postura.</p><p>Algunas de las más conocidas son la del <b>sembrador</b>, que siembra en distintos terrenos (la Palabra de Dios da fruto según cómo se acoge); la del <b>grano de mostaza</b>, la semilla más pequeña que se convierte en un arbusto grande (el Reino empieza humilde pero crece); la del <b>buen samaritano</b>, en la que un extranjero despreciado es quien ayuda al herido (el prójimo es cualquiera que necesita ayuda); la de la <b>oveja perdida</b>, en la que el pastor deja las noventa y nueve para buscar a la que falta; y la del <b>hijo pródigo</b>, quizá la más bella, en la que un padre acoge con un abrazo y una fiesta al hijo que había malgastado su herencia. Las parábolas muestran a un Dios que busca, perdona y ama sin medida.</p>`, svg: ["Parábolas", [["Sembrador", "acoger la Palabra"], ["Buen samaritano", "quién es mi prójimo"], ["Hijo pródigo", "Dios perdona"]], "enseñar con historias"], video: "parabolas" },
    { tras: "<h3>Palabras y gestos: el Reino de Dios</h3>", html: `<h3>Los milagros de Jesús</h3><p>Los Evangelios cuentan que Jesús realizó <mark>milagros</mark>: curaciones de ciegos, leprosos y paralíticos, expulsiones de demonios, dominio sobre la naturaleza (la tempestad calmada, la multiplicación de los panes) y resurrecciones, como la de Lázaro o la hija de Jairo. Incluso sus adversarios reconocían que hacía cosas extraordinarias, aunque las interpretaban de otro modo.</p><p>Para entenderlos bien hay que saber que en los Evangelios no son espectáculos para impresionar ni para obligar a creer: Jesús se niega a hacer prodigios cuando se los piden como prueba. Son <b>signos</b> del Reino de Dios, que muestran que Dios quiere liberar al ser humano de todo lo que lo oprime: la enfermedad, la exclusión, el mal y la muerte. Muchas veces van unidos a la <b>fe</b> de quien los pide («tu fe te ha salvado») y a la reintegración del enfermo en la comunidad, como ocurre con los leprosos, que vivían apartados. Por eso los milagros invitan a preguntarse quién es Jesús, más que a quedarse en lo asombroso.</p>`, svg: ["Tipos de milagros", [["Curaciones", "ciegos, leprosos"], ["Naturaleza", "tempestad, panes"], ["Resurrecciones", "Lázaro, hija de Jairo"]], "signos del Reino"] },
    { tras: "<h3>La Pascua: muerte y resurrección</h3>", html: `<h3>Por qué murió Jesús</h3><p>Desde el punto de vista histórico, Jesús fue condenado por varias razones. Las autoridades religiosas lo acusaron de <b>blasfemia</b>, porque perdonaba pecados, se situaba por encima de la Ley y criticaba el templo. Las autoridades romanas lo vieron como un peligro político: el letrero de la cruz decía «Jesús de Nazaret, rey de los judíos». La <mark>crucifixión</mark> era la pena más cruel y humillante, reservada a esclavos y rebeldes.</p><p>Pero los cristianos ven en esa muerte algo más profundo. Jesús no huyó: aceptó libremente su destino por fidelidad a su misión y por amor. En la Última Cena explicó el sentido de su muerte: su cuerpo «entregado» y su sangre «derramada» por todos. Por eso la fe cristiana habla de <mark>redención</mark>: Jesús carga con el mal y el pecado del mundo y responde con perdón («Padre, perdónalos, porque no saben lo que hacen»). La cruz, que era símbolo de fracaso y vergüenza, se convirtió en el principal símbolo cristiano: el signo de un amor que llega hasta el final.</p>`, svg: ["La cruz", [["Causa religiosa", "acusado de blasfemia"], ["Causa política", "«rey de los judíos»"], ["Sentido cristiano", "amor y redención"]], "de vergüenza a símbolo"] },
    { html: `<h3>Jesús en el arte y la cultura</h3><p>Ninguna figura ha sido representada tantas veces como Jesús. En las <b>catacumbas</b> romanas se le pintaba como el Buen Pastor con una oveja sobre los hombros. El arte bizantino lo mostró como <mark>Pantocrátor</mark>, el Señor de todo, solemne, con el libro en una mano y bendiciendo con la otra, como en los ábsides románicos de Sant Climent de Taüll. El gótico y el barroco insistieron en su humanidad y su sufrimiento: los crucificados de Velázquez o las tallas de Gregorio Fernández y Martínez Montañés buscan conmover al espectador.</p><p>Jesús también inspira la <b>música</b> (las Pasiones de Bach, el Mesías de Händel), la <b>literatura</b> (poemas de san Juan de la Cruz, Unamuno o Gerardo Diego) y el <b>cine</b>, con decenas de películas y series sobre su vida. Conocer a Jesús ayuda, por tanto, a entender buena parte de la cultura occidental, seas creyente o no. Cada época lo ha imaginado a su manera, pero todas se han hecho la misma pregunta: «¿Quién decís que soy yo?».</p>`, svg: ["Jesús en el arte", [["Catacumbas", "Buen Pastor"], ["Románico", "Pantocrátor"], ["Barroco", "Cristo crucificado"]], "una imagen en cada época"] },
  ],
  ejemplos: [
    ["Interpreta la parábola del buen samaritano.", ["Un hombre herido es ignorado por un sacerdote y un levita.", "Un samaritano, extranjero despreciado por los judíos, lo cura y lo cuida.", "Jesús pregunta quién se portó como prójimo."], "El prójimo no se define por la religión o el origen: es quien ayuda a cualquiera que lo necesita."],
    ["Explica por qué la fecha del nacimiento de Jesús no coincide con el año 1.", ["En el siglo VI, Dionisio el Exiguo calculó los años desde el nacimiento de Jesús.", "Pero Herodes el Grande, que reinaba cuando nació Jesús, murió en el año 4 a. C.", "Por tanto, Jesús nació antes de esa fecha."], "Por un error de cálculo: Jesús nació hacia el 6-4 a. C."],
    ["Clasifica estos milagros: la curación de un ciego, la tempestad calmada, la resurrección de Lázaro.", ["Devolver la vista es una curación.", "Calmar la tempestad es dominio sobre la naturaleza.", "Devolver la vida a Lázaro es una resurrección."], "Curación, milagro sobre la naturaleza y resurrección."],
  ],
  errores: ["Pensar que los milagros de Jesús eran espectáculos para obligar a creer, cuando los Evangelios los presentan como signos del Reino."],
  niveles: "bbbbmmbmmm",
  ejercicios: [
    ["b", "¿Dónde creció Jesús y qué lengua hablaba?", "En Nazaret, en Galilea; hablaba arameo."],
    ["b", "¿Quién bautizó a Jesús y dónde?", "Juan el Bautista, en el río Jordán."],
    ["b", "¿Qué es una parábola?", "Un relato breve sacado de la vida cotidiana que encierra una enseñanza sobre Dios y su Reino."],
    ["b", "Cita tres parábolas de Jesús.", "El sembrador, el buen samaritano y el hijo pródigo (también la oveja perdida o el grano de mostaza)."],
    ["b", "Cita tres tipos de milagros de Jesús.", "Curaciones, milagros sobre la naturaleza y resurrecciones."],
    ["b", "¿Qué gobernador romano condenó a Jesús?", "Poncio Pilato."],
    ["b", "¿Qué es el Pantocrátor?", "La representación de Cristo como Señor de todo, típica del arte bizantino y románico."],
    ["m", "Cita dos autores no cristianos que mencionan a Jesús.", "Flavio Josefo y Tácito (también Suetonio)."],
    ["m", "¿Qué enseña la parábola del hijo pródigo?", "Que Dios es un Padre que perdona y acoge con alegría a quien vuelve, sin reproches."],
    ["m", "¿Por qué se dice que los milagros son signos?", "Porque no buscan impresionar, sino mostrar que el Reino de Dios libera al ser humano de la enfermedad, la exclusión, el mal y la muerte."],
    ["m", "Explica las dos causas históricas de la condena de Jesús.", "Religiosa: lo acusaron de blasfemia por perdonar pecados y situarse sobre la Ley. Política: los romanos lo vieron como un posible «rey de los judíos» rebelde."],
    ["m", "¿Qué significa redención?", "Que Jesús, con su muerte aceptada por amor, carga con el mal del mundo y lo vence con el perdón, liberando al ser humano."],
    ["m", "¿Cómo cambiaron los apóstoles tras las apariciones de Jesús resucitado?", "De estar escondidos y asustados pasaron a anunciarlo sin miedo, incluso a costa de su vida."],
    ["m", "Cita dos rasgos humanos de Jesús en los Evangelios.", "Tiene hambre y sed, se cansa, llora por Lázaro, siente angustia en Getsemaní."],
    ["a", "Compara cómo representa a Jesús el arte románico y el barroco.", "El románico lo muestra como Pantocrátor, solemne y majestuoso (su divinidad); el barroco insiste en su sufrimiento y humanidad para conmover."],
    ["a", "¿Por qué la cruz pasó de ser un símbolo de vergüenza a ser el símbolo cristiano?", "Porque los cristianos vieron en ella no un fracaso, sino el signo de un amor que llega hasta el final, confirmado por la resurrección."],
    ["a", "Escribe una parábola actual que transmita la misma enseñanza que la del buen samaritano.", "Respuesta abierta: un relato breve y cotidiano en el que ayuda quien menos se espera."],
    ["a", "¿Qué datos de la vida de Jesús aceptan también los historiadores no creyentes?", "Que existió, nació en Palestina, fue judío de Galilea, predicó, tuvo discípulos, fue bautizado por Juan y murió crucificado bajo Poncio Pilato hacia el año 30."],
    ["a", "Responde personalmente a la pregunta de Jesús: «¿Quién decís que soy yo?».", "Respuesta abierta y personal, argumentada con lo estudiado y respetando cualquier convicción."],
    ["a", "Busca una obra de arte sobre Jesús y analiza qué aspecto suyo resalta.", "Respuesta abierta: identificar la obra, el autor, la época y si destaca su divinidad, su humanidad, su enseñanza o su pasión."],
    ["a", "¿Por qué crees que Jesús enseñaba con parábolas y no con definiciones?", "Porque las historias se recuerdan mejor, conectan con la vida de la gente sencilla y obligan a pensar y decidir, en lugar de dar una respuesta cerrada."],
  ],
  cuartas: ["Un libro de historia", "Ley antigua", "Pedro y Pablo", "La creación", "Los diezmos", "el hombre", "Elías", "Navidad", "barco", "los ángeles", "Judas", "Gaudium et spes", "señor"],
  quiz: [
    ["Jesús creció en…", ["Nazaret", "Roma", "Atenas", "Alejandría"], 0, "En Galilea."],
    ["La lengua materna de Jesús era el…", ["arameo", "latín", "griego", "árabe"], 0, "Lengua de Palestina."],
    ["Bautizó a Jesús…", ["Juan el Bautista", "Pedro", "Pablo", "Moisés"], 0, "En el Jordán."],
    ["Jesús murió hacia el año…", ["30", "1", "70", "100"], 0, "Bajo Poncio Pilato."],
    ["Un relato breve con enseñanza es una…", ["parábola", "profecía", "epístola", "bienaventuranza"], 0, "El sembrador, el samaritano…"],
    ["En la parábola del hijo pródigo, el padre…", ["perdona y hace una fiesta", "castiga al hijo", "lo echa de casa", "no se entera"], 0, "Dios perdona."],
    ["Los milagros en los Evangelios son…", ["signos del Reino", "trucos", "espectáculos", "castigos"], 0, "Liberan al ser humano."],
    ["El historiador romano que menciona a Cristo es…", ["Tácito", "Homero", "Virgilio", "Herodoto"], 0, "Siglo II."],
    ["El letrero de la cruz decía…", ["rey de los judíos", "hijo de José", "maestro de Galilea", "profeta"], 0, "Acusación política."],
    ["El Cristo como Señor de todo se llama…", ["Pantocrátor", "Buen Pastor", "Ecce Homo", "Piedad"], 0, "Arte románico."],
  ],
  examen: [
    ["La parábola del buen samaritano responde a…", ["¿quién es mi prójimo?", "¿cuándo es la Pascua?", "¿quién es el mayor?", "¿cómo rezar?"], 0, "El prójimo es quien ayuda."],
    ["Las autoridades religiosas acusaron a Jesús de…", ["blasfemia", "robo", "rebelión fiscal", "magia"], 0, "Perdonaba pecados."],
    ["Redención significa…", ["liberación del mal por el amor de Jesús", "un castigo", "un milagro", "una parábola"], 0, "Sentido de la cruz."],
    ["Lloró ante la tumba de su amigo…", ["Lázaro", "Pedro", "Juan", "Judas"], 0, "Rasgo humano."],
    ["La primera imagen cristiana de Jesús en las catacumbas fue…", ["el Buen Pastor", "el Pantocrátor", "el crucificado", "el Sagrado Corazón"], 0, "Con una oveja al hombro."],
  ],
  tarjetas: [["Jesús histórico", "Nació hacia el 6-4 a. C. y murió hacia el 30."], ["Parábola", "Relato cotidiano con enseñanza sobre el Reino."], ["Milagro", "Signo del Reino que libera al ser humano."], ["Redención", "Liberación del mal por la muerte y resurrección de Jesús."]],
  glosario: [["Revelación", "Dios que se da a conocer."], ["Encarnación", "El Hijo de Dios se hace hombre."], ["Evangelio", "Buena noticia de Jesús."], ["Sinópticos", "Mateo, Marcos y Lucas."], ["Reino de Dios", "Dios que reina con amor y justicia."], ["Parábola", "Relato breve con enseñanza."], ["Milagro", "Signo extraordinario del Reino."], ["Crucifixión", "Muerte en la cruz, pena romana."], ["Redención", "Liberación del pecado y del mal."], ["Resurrección", "Jesús vuelve a la vida para siempre."], ["Cristo", "El Ungido, el Mesías."], ["Pantocrátor", "Cristo Señor de todo, en el arte."], ["Trinidad", "Un solo Dios en tres personas."], ["Pascua", "Paso de la muerte a la vida."]],
  situacion: { titulo: "Exposición: ¿quién decís que soy yo?", reto: "Organizar una exposición sobre cómo la historia, el arte y la fe han respondido a la pregunta sobre quién es Jesús.", pasos: ["Reunir los datos históricos sobre Jesús y sus fuentes.", "Elegir y explicar tres parábolas y tres milagros.", "Seleccionar obras de arte de distintas épocas que lo representen.", "Recoger respuestas de personas creyentes y no creyentes a la pregunta «¿Quién es Jesús para ti?».", "Montar la exposición con paneles y una guía para los visitantes."], producto: "Exposición de paneles con historia, Evangelio, arte y testimonios.", evaluacion: ["Los datos históricos y bíblicos son correctos.", "Las obras de arte están bien analizadas.", "Los testimonios se presentan con respeto.", "La exposición es clara y visualmente cuidada."] },
  familias: ["Visitad una iglesia o un museo cercano y buscad juntos imágenes de Jesús: ¿qué momento de su vida representan?"],
  saberes: "la revelación de Dios en Jesucristo; el Jesús histórico; parábolas y milagros; la Pascua y la redención; Jesús en el arte.",
  minutos: 100,
});
