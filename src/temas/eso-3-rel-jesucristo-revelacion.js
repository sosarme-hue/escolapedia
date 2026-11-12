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
