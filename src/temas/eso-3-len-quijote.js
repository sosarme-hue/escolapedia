// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Cervantes y El Quijote",
  minutos: 55,
  objetivos: ["Conocer la vida y la obra de Miguel de Cervantes", "Explicar la estructura, el argumento y los personajes del Quijote", "Comprender por qué el Quijote se considera la primera novela moderna"],
  claves: ["Cervantes", "Quijote", "Sancho Panza", "Dulcinea", "libros de caballerías", "parodia", "realidad y ficción", "Novelas ejemplares", "novela moderna"],
  pregunta: {
    texto: "Un hidalgo lee tantos libros de caballerías que pierde el juicio y sale a los caminos a deshacer agravios. ¿Por qué esta historia de 1605 se sigue leyendo en todo el mundo?",
    respuesta: "Porque detrás de las aventuras cómicas hay una pregunta universal: <mark>¿qué es la realidad y qué es lo que imaginamos?</mark> Don Quijote y Sancho, el idealista y el realista, cambian a lo largo del viaje y se parecen cada vez más el uno al otro. Por eso el Quijote es considerado la <b>primera novela moderna</b>.",
  },
  bloques: [
    {
      html: `<h3>La vida de Cervantes</h3><p>Miguel de Cervantes Saavedra nació en Alcalá de Henares en 1547 y murió en Madrid en 1616. Tuvo una vida llena de aventuras y desgracias: fue soldado y luchó en la <b>batalla de Lepanto</b> (1571), donde perdió la movilidad de la mano izquierda, por lo que lo llamaron «el manco de Lepanto». Fue <b>cautivo en Argel</b> durante cinco años, trabajó como recaudador de impuestos y estuvo en la cárcel. Alcanzó la fama ya mayor, con el Quijote.</p>`,
      svg: L.linea("La vida de Miguel de Cervantes", [
        ["1547", "Nace en Alcalá de Henares", "var(--pen)"],
        ["1571", "Lepanto: herido en la mano", "var(--red)"],
        ["1575", "Cinco años cautivo en Argel", "var(--inf)"],
        ["1605", "Primera parte del Quijote", "var(--leaf)"],
        ["1616", "Muere en Madrid", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>La obra de Cervantes</h3><p>Cervantes cultivó todos los géneros. En <b>novela</b> escribió <i>La Galatea</i> (pastoril), las <i>Novelas ejemplares</i> (doce relatos breves como <i>Rinconete y Cortadillo</i> o <i>El licenciado Vidriera</i>), el <i>Persiles</i> (de aventuras) y, sobre todo, el <i>Quijote</i>. En <b>teatro</b> destacan la tragedia <i>La Numancia</i> y los <b>entremeses</b>, piezas breves y cómicas. En <b>poesía</b>, el <i>Viaje del Parnaso</i>.</p>`,
      svg: L.filas("La obra de Cervantes por géneros", [
        ["Novela", "Quijote, Novelas ejemplares", "var(--pen)"],
        ["Teatro", "La Numancia, entremeses", "var(--red)"],
        ["Poesía", "Viaje del Parnaso", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El Quijote: las dos partes</h3><p>La novela se publicó en dos partes: <i>El ingenioso hidalgo don Quijote de la Mancha</i> (<b>1605</b>) y la <i>Segunda parte</i> (<b>1615</b>). Alonso Quijano, un hidalgo de unos cincuenta años, enloquece de tanto leer libros de caballerías y decide hacerse caballero andante con el nombre de don Quijote. Realiza <mark>tres salidas</mark>: la primera, solo; la segunda y la tercera, con su escudero Sancho Panza. Al final, vencido y de vuelta a casa, recupera el juicio y muere.</p>`,
      svg: L.linea("Las tres salidas de don Quijote", [
        ["1.ª", "Solo; lo arman caballero en una venta", "var(--pen)"],
        ["2.ª", "Con Sancho: los molinos, los rebaños", "var(--leaf)"],
        ["3.ª", "2.ª parte: los duques, Barcelona", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Don Quijote y Sancho</h3><p><b>Don Quijote</b> es idealista, culto, valiente y generoso, pero confunde la realidad con lo que ha leído: ve gigantes donde hay molinos y castillos donde hay ventas. <b>Sancho Panza</b>, un labrador vecino suyo, es realista, glotón, a veces miedoso y habla con refranes; lo sigue porque le promete el gobierno de una ínsula. A lo largo de la novela se produce un cambio: don Quijote se vuelve más sensato y Sancho más idealista. Es la <mark>quijotización de Sancho</mark> y la <mark>sanchificación de don Quijote</mark>.</p>`,
      svg: L.filas("Don Quijote y Sancho, dos visiones del mundo", [
        ["Don Quijote", "idealismo, imaginación, libros", "var(--pen)"],
        ["Sancho Panza", "realismo, sentido común, refranes", "var(--leaf)"],
      ], "se influyen mutuamente"),
    },
    {
      html: `<h3>La intención: parodiar los libros de caballerías</h3><p>Cervantes dice en el prólogo que su objetivo es <b>acabar con los libros de caballerías</b>, novelas muy populares que narraban aventuras fantásticas de caballeros invencibles. Para ello hace una <mark>parodia</mark>: imita esas novelas, pero con un caballero viejo, flaco y loco, con un caballo escuálido (Rocinante), una dama inventada (Dulcinea, en realidad una campesina, Aldonza Lorenzo) y aventuras que siempre acaban mal. Pero la obra va mucho más allá de la parodia.</p>`,
      svg: L.tabla("El caballero ideal y su parodia", ["Libros de caballerías", "Don Quijote"], [
        ["joven y fuerte", "viejo y flaco"], ["caballo veloz", "Rocinante"], ["dama noble", "Dulcinea (Aldonza)"], ["siempre vence", "suele acabar molido"],
      ]),
    },
  ],
  figura: {
    titulo: "El Quijote en un vistazo",
    svg: L.columnas("Claves del Quijote", [
      ["1605 y 1615", "DOS PARTES", ["tres salidas", "126 capítulos"], "var(--pen)"],
      ["protagonistas", "QUIJOTE Y SANCHO", ["idealismo", "y realismo"], "var(--red)"],
      ["intención", "PARODIA", ["de los libros", "de caballerías"], "var(--leaf)"],
      ["importancia", "NOVELA MODERNA", ["realidad", "y ficción"], "var(--inf)"],
    ]),
  },
  video: { id: "P5ZNk24nd5A", titulo: "¿Por qué deberías leer «Don Quijote de la Mancha»?", canal: "Sé Curioso (TED-Ed)", vistas: 892555, megusta: 0, busqueda: "el quijote" },
  quiz: [
    { q: "Cervantes nació en…", o: ["Alcalá de Henares", "Toledo", "Sevilla"], a: 0, e: "En 1547." },
    { q: "En Lepanto, Cervantes…", o: ["perdió la movilidad de una mano", "fue nombrado rey", "escribió el Quijote"], a: 0, e: "Lo llamaron «el manco de Lepanto»." },
    { q: "La primera parte del Quijote se publicó en…", o: ["1605", "1499", "1554"], a: 0, e: "La segunda, en 1615." },
    { q: "Don Quijote enloquece por leer…", o: ["libros de caballerías", "poesía mística", "novelas picarescas"], a: 0, e: "Por eso se cree caballero andante." },
    { q: "Dulcinea es en realidad…", o: ["una labradora llamada Aldonza Lorenzo", "una princesa", "la sobrina de don Quijote"], a: 0, e: "Don Quijote la idealiza." },
  ],
  examen: [
    { q: "El caballo de don Quijote se llama…", o: ["Rocinante", "Babieca", "Rucio"], a: 0, e: "El asno de Sancho es el Rucio." },
    { q: "Las Novelas ejemplares son…", o: ["doce relatos breves", "obras de teatro", "poemas"], a: 0, e: "Publicadas en 1613." },
    { q: "La «quijotización» de Sancho significa que…", o: ["Sancho se vuelve más idealista", "Sancho se vuelve loco", "Sancho abandona a don Quijote"], a: 0, e: "Se contagia de los ideales de su amo." },
  ],
  feynman: ["Los hechos más importantes de la vida de Cervantes", "El argumento del Quijote y sus tres salidas", "Cómo son don Quijote y Sancho y cómo cambian", "Por qué el Quijote es una parodia y algo más"],
  mapa: mapa("EL QUIJOTE", "var(--eso)", [
    ["Autor", "Cervantes (1547-1616)", "var(--pen)"],
    ["Partes", "1605 · 1615 · tres salidas", "var(--leaf)"],
    ["Personajes", "don Quijote · Sancho", "var(--red)"],
    ["Sentido", "parodia · novela moderna", "var(--inf)"],
  ]),
  tarjetas: [
    ["Miguel de Cervantes", "Autor del Quijote (1547-1616); soldado en Lepanto y cautivo en Argel."],
    ["Alonso Quijano", "El verdadero nombre del hidalgo que se convierte en don Quijote."],
    ["Sancho Panza", "Escudero de don Quijote: realista, refranero y sencillo."],
    ["Parodia", "Imitación burlesca de un género o una obra: el Quijote parodia los libros de caballerías."],
    ["Novelas ejemplares", "Doce novelas cortas de Cervantes (1613)."],
  ],
  familias: ["Ved juntos una adaptación del episodio de los molinos y comentad qué ve don Quijote y qué ve Sancho.", "Pensad en una persona «quijotesca» que conozcáis y explicad por qué.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: lectura guiada de fragmentos del Quijote; Cervantes y la novela moderna (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Lectura dramatizada de los molinos de viento (I, 8).", "Reescribir una aventura del Quijote en el siglo XXI.", "Ruta del Quijote en un mapa de La Mancha."],
  },
  fuentes: [
    L.BOE,
    { t: "Centro Virtual Cervantes: Don Quijote (edición del Instituto Cervantes)", url: "https://cvc.cervantes.es/literatura/clasicos/quijote/" },
    { t: "Miguel de Cervantes, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Miguel_de_Cervantes" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Comentar episodios famosos del Quijote", "Reconocer las técnicas narrativas modernas de la novela"],
  bloques: [
    { tras: "El Quijote: las dos partes", html: `<h3>Episodios famosos</h3><ul><li><b>La venta y el armado de caballero</b> (I, 3): don Quijote confunde una venta con un castillo y pide al ventero que lo arme caballero.</li><li><b>Los molinos de viento</b> (I, 8): ve treinta gigantes, ataca a uno de los molinos y acaba por los suelos. Él dice que un mago los ha transformado.</li><li><b>Los rebaños</b> (I, 18): confunde dos rebaños de ovejas con dos ejércitos y los pastores le tiran piedras.</li><li><b>Los galeotes</b> (I, 22): libera a unos presos que lo apedrean después.</li><li><b>Sancho, gobernador</b> (II, 42-53): unos duques, para burlarse, le dan el gobierno de la «ínsula Barataria»; Sancho gobierna con sentido común y sabiduría.</li><li><b>El caballero de la Blanca Luna</b> (II, 64): el bachiller Sansón Carrasco, disfrazado, vence a don Quijote en Barcelona y le obliga a volver a casa.</li></ul>` },
    { tras: "Don Quijote y Sancho", html: `<h3>Otros personajes</h3><p>Alrededor de los protagonistas aparecen más de seiscientos personajes de todas las clases sociales: duques, pastores, venteros, presos, estudiantes, sacerdotes… Los más importantes son los vecinos del pueblo de don Quijote: el <b>cura</b> y el <b>barbero</b>, que queman sus libros para curarle; su <b>ama</b> y su <b>sobrina</b>; y el bachiller <b>Sansón Carrasco</b>, que intenta hacerle volver a casa venciéndole en combate.</p><p>También tiene un papel especial <b>Dulcinea del Toboso</b>, que nunca aparece en la novela, pero que mueve las acciones de don Quijote. Es la dama ideal que él inventa a partir de una labradora, Aldonza Lorenzo, a la que apenas conoce.</p>` },
    { tras: "La intención: parodiar", html: `<h3>Realidad y ficción: técnicas modernas</h3><p>El Quijote juega constantemente con los <b>límites entre realidad y ficción</b>, algo muy moderno. Cervantes finge que la historia la escribió un historiador árabe, <b>Cide Hamete Benengeli</b>, y que él solo la ha traducido. En la segunda parte, los personajes han leído la primera parte y conocen a don Quijote y a Sancho. Además, Cervantes critica dentro de la novela un <i>Quijote</i> falso que había publicado otro autor (Avellaneda) en 1614.</p><p>Otros rasgos que la convierten en la primera novela moderna: personajes que <mark>evolucionan</mark>, el uso del <b>diálogo</b> para caracterizarlos, la mezcla de estilos y de historias (pastoriles, sentimentales, de cautivos…) y el <b>humor</b> y la ironía con que se presenta todo.</p>` },
    { tras: "La intención: parodiar", html: `<h3>El final: Alonso Quijano el Bueno</h3><p>Tras ser vencido en Barcelona, don Quijote vuelve a su aldea triste y enfermo. En su lecho de muerte <mark>recupera el juicio</mark>: reniega de los libros de caballerías y vuelve a llamarse Alonso Quijano, «a quien mis costumbres me dieron renombre de Bueno». Sancho, ya contagiado de los ideales de su amo, le pide llorando que no se muera y que salgan juntos al campo vestidos de pastores.</p><p>El final es a la vez cómico y triste. Al morir el personaje, nadie más podrá escribir sus aventuras. Muchos lectores ven en don Quijote un símbolo del <b>idealismo</b>: alguien que lucha por la justicia aunque el mundo se ría de él. Por eso «quijotesco» significa hoy la persona que defiende causas nobles aunque sean imposibles.</p>` },
    { tras: "La intención: parodiar", html: `<h3>La lengua del Quijote</h3><p>Cervantes adapta la lengua a cada personaje y situación. Don Quijote, cuando habla como caballero, usa un <b>lenguaje arcaico</b> y solemne, imitado de los libros de caballerías: «Non fuyades, cobardes y viles criaturas». Sancho habla con <b>refranes</b> y expresiones populares, y a menudo deforma las palabras cultas, lo que provoca risa. El narrador combina con naturalidad el registro culto y el coloquial.</p><p>Muchas expresiones de la novela han pasado al habla de todos los días: «luchar contra molinos de viento» (enfrentarse a enemigos imaginarios), «ser un Quijote» o «la del alba sería». Y su primera frase es una de las más famosas de la literatura: «En un lugar de la Mancha, de cuyo nombre no quiero acordarme…».</p>` },
  ],
  videos: [
    ["La vida de Cervantes", L.vid("f41SJRLj-No", "Miguel de Cervantes: Draw My Life", "Draw My Life en Español", 589108)],
    ["Episodios famosos", L.vid("ir6A-Ns5Em8", "Resumen de Don Quijote de Cervantes: Draw My Life", "Draw My Life en Español", 958589)],
  ],
  ejemplos: [
    ["Comenta el episodio de los molinos de viento.", ["Don Quijote ve treinta o cuarenta gigantes; Sancho le advierte de que son molinos.", "Don Quijote ataca, una aspa lo lanza por los aires y queda malherido.", "Para no admitir su error, culpa al mago Frestón, que habría transformado a los gigantes en molinos."], "contrapone la imaginación de don Quijote y el realismo de Sancho; es humor y parodia."],
    ["¿Por qué el Quijote es una parodia?", ["Imita la estructura de los libros de caballerías: un caballero, su escudero, su dama y sus aventuras.", "Pero todo está rebajado: el caballero es viejo y loco, el caballo flaco, la dama inventada.", "Las aventuras acaban en golpes y risas en lugar de en victorias."], "imita con burla los libros de caballerías para criticarlos."],
    ["Explica la «sanchificación» de don Quijote.", ["Al principio, don Quijote vive totalmente en su mundo de fantasía.", "Poco a poco, sobre todo en la segunda parte, se vuelve más reflexivo y duda.", "Al final, recupera el juicio por completo y ve la realidad como Sancho."], "don Quijote se acerca al realismo de su escudero."],
  ],
  errores: [
    "Pensar que el Quijote es solo una novela cómica: tiene también una reflexión profunda sobre la realidad y los ideales.",
    "Confundir a Dulcinea (personaje imaginado) con una dama real de la novela.",
    "Creer que Cervantes perdió la mano en Lepanto: perdió la movilidad de la mano izquierda.",
    "Confundir el asno de Sancho (el Rucio) con el caballo de don Quijote (Rocinante).",
    "Situar a Cervantes en la Edad Media: vivió entre el Renacimiento y el Barroco.",
  ],
  ejercicios: [
    ["Escribe tres hechos de la vida de Cervantes.", "Luchó en Lepanto (1571), estuvo cautivo en Argel cinco años y publicó el Quijote en 1605 y 1615."],
    ["¿Qué son las Novelas ejemplares?", "Doce relatos breves publicados en 1613, como Rinconete y Cortadillo o El licenciado Vidriera."],
    ["¿Cuántas salidas hace don Quijote y con quién?", "Tres: la primera solo; la segunda y la tercera, con Sancho Panza."],
    ["Describe a Sancho en tres rasgos.", "Realista, sencillo y refranero (también glotón y algo miedoso, pero leal)."],
    ["¿Qué promete don Quijote a Sancho para que lo acompañe?", "El gobierno de una ínsula."],
    ["¿Qué ocurre en la ínsula Barataria?", "Los duques, para burlarse, hacen gobernador a Sancho, que gobierna con sentido común y sabiduría."],
    ["¿Quién es Cide Hamete Benengeli?", "El historiador árabe al que Cervantes atribuye, de forma ficticia, la historia de don Quijote."],
    ["¿Qué significa hoy «luchar contra molinos de viento»?", "Enfrentarse a problemas o enemigos imaginarios o imposibles de vencer."],
    ["¿Cómo termina la novela?", "Don Quijote, vencido, vuelve a casa, recupera el juicio, se llama de nuevo Alonso Quijano y muere."],
    ["Escribe un breve diálogo entre don Quijote y Sancho ante un aerogenerador moderno.", "Respuesta abierta. Debe contraponer la visión fantástica de don Quijote y la realista de Sancho."],
  ],
  quiz: [
    ["Quien vence a don Quijote en Barcelona es…", ["Sansón Carrasco", "el cura", "el barbero"], 0, "Disfrazado de caballero de la Blanca Luna."],
    ["Los que queman los libros de don Quijote son…", ["el cura y el barbero", "Sancho y el ama", "los duques"], 0, "Para curarle la locura."],
    ["El Quijote falso fue publicado por…", ["Avellaneda", "Lope de Vega", "Quevedo"], 0, "En 1614."],
    ["«Quijotesco» significa…", ["idealista que defiende causas nobles", "glotón", "cobarde"], 0, "Por el carácter de don Quijote."],
    ["La primera frase del Quijote es…", ["«En un lugar de la Mancha…»", "«Érase una vez…»", "«Nuestras vidas son los ríos…»"], 0, "«…de cuyo nombre no quiero acordarme»."],
  ],
  tarjetas: [
    ["Cide Hamete Benengeli", "Historiador árabe ficticio al que Cervantes atribuye la historia."],
    ["Ínsula Barataria", "Lugar que los duques dan a Sancho para gobernar, como burla."],
    ["Alonso Quijano el Bueno", "Nombre con el que don Quijote muere tras recuperar el juicio."],
  ],
});
