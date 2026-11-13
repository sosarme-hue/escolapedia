// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, arbol, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "La mitología grecolatina",
  minutos: 35,
  objetivos: ["Explicar qué es un mito y para qué servía", "Reconocer a los dioses olímpicos con su nombre griego y latino y sus atributos", "Conocer los grandes héroes y algunos mitos famosos"],
  claves: ["mito", "Olimpo", "Zeus / Júpiter", "atributo", "héroe", "Heracles", "Odisea"],
  pregunta: {
    texto: "Las zapatillas Nike, la empresa de cohetes Apolo o el cereal (de Ceres)… ¿qué tienen en común?",
    respuesta: "Todos llevan nombres de <mark>dioses grecolatinos</mark>: Nike era la diosa de la victoria; Apolo, el dios de la luz; Ceres, la diosa de las cosechas. Los mitos de Grecia y Roma siguen vivos en marcas, palabras, películas y videojuegos.",
  },
  bloques: [
    {
      html: `<h3>Qué es un mito</h3><p>Un <mark>mito</mark> es un relato tradicional protagonizado por dioses, héroes y seres fantásticos que intentaba <b>explicar el mundo</b>: el origen del universo y de los seres humanos, los fenómenos de la naturaleza (el rayo, las estaciones, el eco), las costumbres y los sentimientos. Los griegos los transmitieron primero de forma <b>oral</b>; después los recogieron poetas como <b>Homero</b> y <b>Hesíodo</b>. Los romanos adoptaron casi todos los dioses griegos y les dieron <b>nombres latinos</b>.</p>`,
      svg: filas("Para qué servían los mitos", [["Origen", "del mundo y de los dioses", "var(--pen)"], ["Naturaleza", "rayo, estaciones, eco", "var(--leaf)"], ["Conducta", "premios y castigos", "var(--red)"], ["Identidad", "héroes de cada ciudad", "var(--sun)"]]),
    },
    {
      html: `<h3>El origen de los dioses</h3><p>Según Hesíodo, al principio solo existía el <b>Caos</b>. De él surgieron <b>Gea</b> (la Tierra) y <b>Urano</b> (el Cielo), padres de los <b>Titanes</b>. El titán <b>Cronos</b> derrocó a su padre y, por miedo a que le pasara lo mismo, se tragaba a sus hijos al nacer. Su esposa <b>Rea</b> salvó al pequeño <mark>Zeus</mark> dando a Cronos una piedra envuelta en pañales. Ya adulto, Zeus obligó a su padre a devolver a sus hermanos y, tras una guerra de diez años contra los Titanes, se convirtió en el rey de los dioses.</p>`,
      svg: arbol("Genealogía: de Gea y Urano a Cronos y Rea, y de ellos a Zeus y sus hermanos", [["Gea + Urano", ["Cronos", "Rea"], "var(--muted)", ["titán", "titánide"]], ["Cronos + Rea", ["Zeus", "Hera…"], "var(--pen)", ["rey", "hermanos"]]]),
    },
    {
      html: `<h3>Los dioses del Olimpo</h3><p>Los doce dioses principales vivían en el <mark>monte Olimpo</mark>. Eran <b>inmortales</b> y muy poderosos, pero tenían defectos humanos: celos, ira, orgullo. Cada uno tenía un <b>ámbito</b> (el mar, la guerra, el amor) y unos <mark>atributos</mark>, objetos o animales que permiten reconocerlo en una obra de arte: el rayo y el águila de Zeus, el tridente de Poseidón, la lechuza y el casco de Atenea, el arco de Ártemis o las sandalias aladas de Hermes.</p>`,
      svg: rueda("Algunos dioses del Olimpo con su atributo: Zeus el rayo, Poseidón el tridente, Atenea la lechuza, Hermes las sandalias aladas", "OLIMPO", [["Zeus", "var(--sun)"], ["Poseidón", "var(--inf)"], ["Atenea", "var(--muted)"], ["Hermes", "var(--leaf)"]], "var(--pen)"),
    },
    {
      html: `<h3>Los héroes</h3><p>Los <mark>héroes</mark> eran hijos de un dios y un mortal, o mortales extraordinarios, que realizaban hazañas imposibles. <b>Heracles</b> (Hércules para los romanos), hijo de Zeus, superó doce trabajos, como matar al león de Nemea. <b>Perseo</b> cortó la cabeza de Medusa, la gorgona que convertía en piedra a quien la miraba. <b>Teseo</b> venció al Minotauro en el laberinto de Creta gracias al hilo de Ariadna. <b>Aquiles</b> era invulnerable salvo en el talón. El héroe muestra virtudes como el valor, la astucia y la fuerza, pero también suele tener un punto débil.</p>`,
      svg: filas("Cuatro héroes griegos y su hazaña", [["Heracles", "doce trabajos", "var(--red)"], ["Perseo", "vence a Medusa", "var(--pen)"], ["Teseo", "Minotauro y laberinto", "var(--leaf)"], ["Aquiles", "guerra de Troya", "var(--sun)"]]),
    },
    {
      html: `<h3>La guerra de Troya y la Odisea</h3><p>El mito más famoso es la <mark>guerra de Troya</mark>. El príncipe troyano <b>Paris</b> se llevó a <b>Helena</b>, esposa del rey griego Menelao, y los griegos sitiaron Troya durante diez años. La tomaron gracias a un engaño de <b>Ulises</b> (Odiseo): un enorme <b>caballo de madera</b> lleno de soldados. Homero contó parte de la guerra en la <b>Ilíada</b>, y el largo viaje de regreso de Ulises a su isla, Ítaca, en la <mark>Odisea</mark>: diez años de aventuras con el cíclope Polifemo, las sirenas o la hechicera Circe, mientras su esposa Penélope lo esperaba.</p>`,
      svg: dos("Los dos poemas de Homero", ["Ilíada", ["guerra de Troya", "Aquiles y Héctor", "la cólera", "de Aquiles"], "var(--red)"], ["Odisea", ["regreso de Ulises", "a Ítaca", "Polifemo, sirenas", "Penélope espera"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Dioses griegos y su nombre romano",
    svg: figCols("Tabla de dioses griegos con su nombre romano", [["Griego", ["Zeus", "Hera", "Poseidón", "Afrodita"], "var(--pen)"], ["Romano", ["Júpiter", "Juno", "Neptuno", "Venus"], "var(--red)"], ["Griego", ["Ares", "Hermes", "Ártemis", "Dioniso"], "var(--pen)"], ["Romano", ["Marte", "Mercurio", "Diana", "Baco"], "var(--red)"]]),
  },
  video: { id: "DeIbRemE6Kg", titulo: "Mitología griega: lo esencial. El origen de los dioses del Olimpo", canal: "Mira la Historia / Mitologia", vistas: 6833982, megusta: 0, busqueda: "dioses del olimpo mitología griega" },
  quiz: [
    { q: "¿Cuál es el nombre romano de Zeus?", o: ["Marte", "Júpiter", "Neptuno"], a: 1, e: "Rey de los dioses." },
    { q: "¿Qué atributo identifica a Poseidón?", o: ["El tridente", "La lechuza", "El arco"], a: 0, e: "Dios del mar." },
    { q: "¿Quién venció al Minotauro?", o: ["Perseo", "Teseo", "Aquiles"], a: 1, e: "Con el hilo de Ariadna." },
    { q: "¿Qué cuenta la Odisea?", o: ["El regreso de Ulises a Ítaca", "La fundación de Roma", "Los trabajos de Heracles"], a: 0, e: "Poema de Homero." },
    { q: "¿Qué es un mito?", o: ["Un relato tradicional que explica el mundo", "Una noticia", "Una ley"], a: 0, e: "Con dioses, héroes y seres fantásticos." },
  ],
  examen: [
    { q: "Afrodita, diosa del amor, en Roma se llamaba…", o: ["Venus", "Diana", "Minerva"], a: 0, e: "Como el planeta." },
    { q: "¿Quién salvó a Zeus de ser tragado por Cronos?", o: ["Rea", "Gea", "Hera"], a: 0, e: "Con una piedra envuelta en pañales." },
    { q: "¿Cómo tomaron Troya los griegos?", o: ["Con un caballo de madera", "Con elefantes", "Por hambre"], a: 0, e: "Idea de Ulises." },
  ],
  feynman: ["Qué es un mito y para qué servía", "Cómo nacieron los dioses según Hesíodo", "Cómo se reconoce a un dios en una obra de arte", "Qué cuentan la Ilíada y la Odisea"],
  mapa: mapa("MITOLOGÍA", "var(--sun)", [
    ["Mito", "explica el mundo", "var(--muted)"],
    ["Dioses", "Olimpo · atributos", "var(--pen)"],
    ["Héroes", "Heracles · Perseo · Teseo", "var(--red)"],
    ["Homero", "Ilíada · Odisea", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Mito", "Relato tradicional de dioses y héroes que explica el mundo."],
    ["Atributo", "Objeto o animal que identifica a un dios: el rayo de Zeus."],
    ["Olimpo", "Monte donde vivían los doce dioses principales."],
    ["Héroe", "Hijo de dios y mortal, o mortal excepcional, que realiza hazañas."],
    ["Odisea", "Poema de Homero sobre el regreso de Ulises a Ítaca."],
  ],
  familias: ["Buscad en casa o en el supermercado productos con nombres mitológicos y averiguad de qué dios vienen.", "Ved juntos una película o serie basada en mitos y comentad qué cambia respecto al original.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La mitología grecolatina: dioses olímpicos y sus atributos, ciclos heroicos y pervivencia de los mitos en el arte y la cultura actual (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Identificar dioses por sus atributos en cuadros del Museo del Prado.", "Cómic de un trabajo de Heracles en seis viñetas.", "Rastrear mitos en marcas, logotipos y videojuegos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo del Prado: la mitología en sus colecciones", url: "https://www.museodelprado.es/coleccion/obras-de-arte" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Relacionar mitos con expresiones y palabras actuales", "Interpretar el significado de algunos mitos de transformación"],
  bloques: [
    { tras: "Los dioses del Olimpo", html: `<h3>Los doce olímpicos</h3>${tabla(["Griego", "Romano", "Ámbito", "Atributos"], [["Zeus", "Júpiter", "cielo, rey de los dioses", "rayo, águila"], ["Hera", "Juno", "matrimonio", "pavo real"], ["Poseidón", "Neptuno", "mar, terremotos", "tridente, caballo"], ["Atenea", "Minerva", "sabiduría, guerra estratégica", "lechuza, casco, olivo"], ["Apolo", "Apolo", "luz, música, poesía", "lira, laurel"], ["Ártemis", "Diana", "caza, luna", "arco, ciervo"], ["Afrodita", "Venus", "amor, belleza", "paloma, concha"], ["Ares", "Marte", "guerra violenta", "casco, lanza"], ["Hefesto", "Vulcano", "fuego, herreros", "martillo, yunque"], ["Hermes", "Mercurio", "mensajero, comercio", "sandalias aladas"], ["Deméter", "Ceres", "agricultura", "espigas"], ["Dioniso", "Baco", "vino, fiesta, teatro", "uvas, hiedra"]])}<p>Fuera del Olimpo, <b>Hades</b> (Plutón) reinaba en el mundo de los muertos.</p>` },
    { tras: "Los héroes", html: `<h3>Los doce trabajos de Heracles</h3><p>Heracles, hijo de Zeus y de una mortal, sufrió el odio de <b>Hera</b>, que le hizo enloquecer. Para purificarse tuvo que cumplir <mark>doce trabajos</mark> imposibles al servicio del rey Euristeo. Entre ellos: matar al <b>león de Nemea</b>, cuya piel ningún arma atravesaba (lo estranguló y se vistió con ella); vencer a la <b>hidra de Lerna</b>, a la que le crecían dos cabezas por cada una cortada; limpiar en un día los establos de Augías, desviando dos ríos; o bajar al inframundo para traer al perro de tres cabezas <b>Cerbero</b>. Uno de sus viajes le llevó al extremo occidental del mundo, donde, según el mito, levantó dos columnas: las <b>columnas de Hércules</b>, en el estrecho de Gibraltar, que hoy aparecen en el escudo de España.</p>`, video: { id: "X5UeYa_bTRc", titulo: "El mito del héroe Perseo y Medusa", canal: "Shackleton Kids", vistas: 1245592, megusta: 0 } },
    { tras: "Qué es un mito", html: `<h3>Mitos de transformación</h3><p>Muchos mitos explican el origen de plantas, animales o fenómenos mediante una <b>metamorfosis</b>, como las que reunió el poeta romano <b>Ovidio</b>. <mark>Narciso</mark>, un joven bellísimo, se enamoró de su propio reflejo en el agua y murió mirándolo; en su lugar nació la flor del narciso. La ninfa <b>Eco</b>, castigada por Hera, solo podía repetir las últimas palabras que oía. <b>Dafne</b>, perseguida por Apolo, se convirtió en laurel, y desde entonces el laurel es la planta de Apolo y corona a los vencedores. <b>Aracne</b>, que se atrevió a desafiar a Atenea tejiendo, fue convertida en araña. Detrás de cada historia hay una enseñanza: el peligro de la vanidad o del orgullo ante los dioses.</p>` },
    { tras: "La guerra de Troya y la Odisea", html: `<h3>Los mitos en nuestra lengua</h3><p>Usamos expresiones mitológicas sin darnos cuenta. Un <mark>talón de Aquiles</mark> es un punto débil. Una <b>odisea</b> es un viaje lleno de dificultades. Un <b>trabajo de Hércules</b> es una tarea enorme. Abrir la <b>caja de Pandora</b> es desatar muchos males (Pandora abrió la jarra que contenía todas las desgracias y dentro solo quedó la esperanza). Un <b>caballo de Troya</b> es hoy también un tipo de virus informático que se esconde dentro de un programa aparentemente inofensivo. Y palabras como <b>pánico</b> (del dios Pan), <b>cereal</b> (Ceres), <b>volcán</b> (Vulcano), <b>museo</b> (las Musas) o <b>atlas</b> (el titán Atlas) vienen de los mitos.</p>` },
  ],
  ejemplos: [
    { enunciado: "En un cuadro aparece una mujer con casco, lanza y una lechuza. ¿Qué diosa es?", pasos: ["El casco y la lanza indican una divinidad guerrera.", "La lechuza es el animal de la sabiduría.", "La diosa de la sabiduría y la guerra estratégica es Atenea."], resultado: "Atenea (Minerva en Roma)." },
    { enunciado: "Explica el origen de la expresión «talón de Aquiles».", pasos: ["Su madre, Tetis, lo sumergió de bebé en la laguna Estigia para hacerlo invulnerable.", "Lo sujetaba por el talón, que no tocó el agua.", "En Troya, Paris le clavó una flecha justo allí."], resultado: "Significa «punto débil» de alguien o algo." },
    { enunciado: "¿Qué fenómeno explica el mito de Eco y Narciso?", pasos: ["Eco solo podía repetir las últimas palabras que oía.", "Al morir de pena, solo quedó su voz.", "Narciso se convirtió en flor."], resultado: "El eco (la repetición del sonido) y el origen del narciso; también nos deja la palabra «narcisista»." },
  ],
  errores: [
    "Mezclar nombres griegos y romanos del mismo dios como si fueran dos dioses distintos.",
    "Pensar que los dioses griegos eran perfectos: tenían defectos muy humanos.",
    "Confundir Hércules (nombre romano) con un héroe diferente de Heracles.",
    "Creer que la Ilíada cuenta el caballo de Troya: aparece en la Odisea y en la Eneida.",
    "Confundir mito (relato sagrado tradicional) con mentira.",
  ],
  ejercicios: [
    { q: "Define mito y cita dos funciones que tenía.", sol: "Relato tradicional de dioses y héroes. Explicaba el origen del mundo y los fenómenos naturales, y transmitía normas de conducta." },
    { q: "Escribe el nombre romano de: Zeus, Hera, Ares, Hermes, Afrodita.", sol: "Júpiter, Juno, Marte, Mercurio, Venus." },
    { q: "¿Qué atributos tienen Zeus, Atenea y Ártemis?", sol: "Zeus: rayo y águila. Atenea: lechuza, casco y olivo. Ártemis: arco y ciervo." },
    { q: "Resume el mito del nacimiento de Zeus.", sol: "Cronos se tragaba a sus hijos; Rea le dio una piedra envuelta en pañales y escondió a Zeus, que creció y liberó a sus hermanos." },
    { q: "Cita tres trabajos de Heracles.", sol: "El león de Nemea, la hidra de Lerna y los establos de Augías (también Cerbero, entre otros)." },
    { q: "¿Quién era Medusa y quién la venció?", sol: "Una gorgona que convertía en piedra a quien la miraba. La venció Perseo, usando su escudo como espejo." },
    { q: "¿Por qué empezó la guerra de Troya?", sol: "Porque Paris, príncipe troyano, se llevó a Helena, esposa del rey griego Menelao." },
    { q: "Explica las expresiones «una odisea» y «abrir la caja de Pandora».", sol: "Una odisea: un viaje o una situación llena de dificultades. Abrir la caja de Pandora: provocar muchos males." },
    { q: "¿Qué palabras vienen de Pan, Ceres y Vulcano?", sol: "Pánico, cereal y volcán." },
    { q: "¿Qué enseñanza tiene el mito de Aracne?", sol: "Castiga el orgullo excesivo: no hay que desafiar a los dioses." },
  ],
  quiz: [
    { q: "El dios del vino es…", o: ["Dioniso", "Hefesto", "Apolo"], a: 0, e: "Baco para los romanos." },
    { q: "Las columnas de Hércules están en…", o: ["Gibraltar", "Atenas", "Roma"], a: 0, e: "Hoy en el escudo de España." },
    { q: "Dafne se convirtió en…", o: ["laurel", "araña", "flor"], a: 0, e: "Huyendo de Apolo." },
    { q: "«Pánico» viene de…", o: ["Pan", "Pandora", "Plutón"], a: 0, e: "Dios que causaba terror súbito." },
    { q: "El dios de los herreros es…", o: ["Hefesto", "Hermes", "Ares"], a: 0, e: "Vulcano en Roma." },
  ],
  tarjetas: [
    ["Metamorfosis", "Transformación de un personaje en planta, animal o fenómeno."],
    ["Talón de Aquiles", "Punto débil."],
    ["Caja de Pandora", "Origen de los males del mundo; dentro quedó la esperanza."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Héroes de hace tres mil años", `<p>Un joven con poderes que descubre que su padre es un dios. Una guerra que estalla por una traición. Un viajero que tarda diez años en volver a casa, perseguido por monstruos, tormentas y hechiceras. Parecen argumentos de una saga de películas o de un videojuego, y en cierto modo lo son: las grandes historias de aventuras que nos siguen emocionando se inspiran en los <b>mitos griegos</b>, contados por primera vez hace casi tres mil años.</p><p>Los griegos no inventaron los mitos para entretenerse. Con ellos explicaban por qué existen las estaciones, de dónde viene el fuego, qué pasa después de la muerte o qué ocurre cuando alguien se cree superior a los dioses. Cada mito encerraba una lección sobre el orgullo, la valentía, la astucia o la justicia. Los romanos adoptaron esos relatos, cambiaron el nombre a los dioses y los extendieron por todo su imperio. Después, pintores, escultores, poetas, músicos y cineastas han vuelto a ellos una y otra vez. En este tema conocerás a los dioses y héroes principales, aprenderás a reconocerlos en una obra de arte y descubrirás cuántas palabras y expresiones les debemos.</p>`],
  mas: [
    ["<h3>Qué es un mito</h3>", `<p>Un mito no es lo mismo que una <b>leyenda</b> ni que una <b>fábula</b>. La leyenda parte de un hecho o un personaje histórico y lo adorna con elementos fantásticos (como la del rey Arturo); la fábula es un relato breve, normalmente con animales, que termina con una moraleja (como las de Esopo). El mito, en cambio, habla de un tiempo sagrado y primordial, protagonizado por dioses y héroes.</p>`],
    ["<h3>Los dioses del Olimpo</h3>", `<p>Los griegos honraban a los dioses con <b>oraciones, ofrendas y sacrificios</b> de animales en altares, y celebraban fiestas en su honor con procesiones, música, competiciones y representaciones teatrales. También los consultaban en los <b>oráculos</b>: el más famoso era el de Apolo en Delfos, donde una sacerdotisa, la Pitia, daba respuestas enigmáticas que había que interpretar.</p>`],
    ["<h3>Los héroes</h3>", `<p>Muchos mitos de héroes siguen un mismo esquema: un nacimiento extraordinario, una infancia en peligro, una llamada a la aventura, una serie de pruebas con ayuda de un dios o de un objeto mágico, el enfrentamiento con un monstruo y, al final, la recompensa o un destino trágico. Ese esquema, llamado <b>viaje del héroe</b>, se repite hoy en muchas novelas y películas de aventuras.</p>`],
    ["<h3>Los mitos en nuestra lengua</h3>", `<p>Hasta la geografía y la astronomía están llenas de mitología: el océano <b>Atlántico</b> debe su nombre al titán Atlas; <b>Europa</b> era una princesa raptada por Zeus convertido en toro; los planetas llevan nombres de dioses romanos (Mercurio, Venus, Marte, Júpiter, Saturno, Neptuno) y muchas constelaciones recuerdan a héroes como Orión, Perseo o Andrómeda.</p>`],
  ],
  svgs: [
    ["<h3>Mitos de transformación</h3>", "Metamorfosis de Ovidio", [["Narciso", "se convierte en flor"], ["Dafne", "se convierte en laurel"], ["Aracne", "se convierte en araña"]], "mitos de transformación"],
    ["<h3>Los doce olímpicos</h3>", "Algunos olímpicos y su ámbito", [["Zeus / Júpiter", "cielo y rayo"], ["Atenea / Minerva", "sabiduría"], ["Hefesto / Vulcano", "fuego y forja"]], "nombre griego / romano"],
    ["<h3>Los doce trabajos de Heracles</h3>", "Tres trabajos de Heracles", [["León de Nemea", "piel invulnerable"], ["Hidra de Lerna", "cabezas que renacen"], ["Cerbero", "perro del inframundo"]], "doce trabajos"],
    ["<h3>Los mitos en nuestra lengua</h3>", "Expresiones de origen mitológico", [["Talón de Aquiles", "punto débil"], ["Odisea", "viaje difícil"], ["Caja de Pandora", "origen de males"]], "mitos que hablamos"],
  ],
  bloques: [
    { tras: "<h3>El origen de los dioses</h3>", html: `<h3>Prometeo y Pandora</h3><p>Según un mito, el titán <mark>Prometeo</mark> modeló a los primeros seres humanos con barro. Al verlos débiles y desnudos, robó el <b>fuego</b> de los dioses y se lo entregó para que pudieran calentarse, cocinar y fabricar herramientas. Zeus lo castigó con dureza: lo encadenó a una roca del Cáucaso, donde cada día un águila le devoraba el hígado, que volvía a crecerle por la noche. Siglos después, Heracles lo liberó. Prometeo se convirtió en el símbolo de quien desafía al poder para ayudar a la humanidad y del progreso técnico.</p><p>Zeus también castigó a los hombres. Mandó crear a <mark>Pandora</mark>, la primera mujer, a la que cada dios entregó un don, y la envió a la Tierra con una jarra cerrada que no debía abrir. La curiosidad pudo más y, al levantar la tapa, salieron todos los males: la enfermedad, el trabajo agotador, la vejez, la guerra. Solo quedó dentro la <b>esperanza</b>. Con este relato los griegos explicaban por qué existe el sufrimiento en el mundo.</p>`, svg: ["Prometeo y Pandora", [["Prometeo", "roba el fuego a los dioses"], ["Castigo", "encadenado en el Cáucaso"], ["Pandora", "abre la jarra de los males"]], "origen de la humanidad"] },
    { tras: "<h3>Los doce olímpicos</h3>", html: `<h3>El inframundo</h3><p>Los griegos creían que, al morir, el alma viajaba al <mark>Hades</mark>, el reino subterráneo gobernado por el dios del mismo nombre (Plutón para los romanos) y su esposa <b>Perséfone</b>. Para entrar había que cruzar la laguna <b>Estigia</b> en la barca de <b>Caronte</b>, que cobraba una moneda; por eso se colocaba un óbolo en la boca de los difuntos. La puerta la vigilaba <b>Cerbero</b>, el perro de tres cabezas que impedía salir a los muertos.</p><p>Las almas de la mayoría vagaban por un lugar gris y triste; los héroes y los justos disfrutaban de los <b>Campos Elíseos</b>, y los grandes culpables sufrían castigos eternos en el <b>Tártaro</b>: Sísifo empujaba sin fin una roca montaña arriba y Tántalo tenía hambre y sed rodeado de agua y fruta que se apartaban de él. El mito de Perséfone explicaba además las <b>estaciones</b>: cuando pasa seis meses en el inframundo, su madre Deméter está triste y la tierra no da fruto (otoño e invierno); cuando vuelve, llega la primavera.</p>`, svg: ["El inframundo griego", [["Caronte", "cruza la laguna Estigia"], ["Cerbero", "vigila la puerta"], ["Destinos", "Elíseos o Tártaro"]], "el reino de Hades"] },
    { tras: "<h3>Los doce trabajos de Heracles</h3>", html: `<h3>Las heroínas y las mujeres del mito</h3><p>Los mitos también tienen protagonistas femeninas muy poderosas. <mark>Atalanta</mark> fue una cazadora veloz que participó en la caza del jabalí de Calidón y solo aceptaba casarse con quien la venciera en una carrera. <b>Ariadna</b>, princesa de Creta, dio a Teseo el hilo que le permitió salir del laberinto. <b>Antígona</b> desobedeció al rey para dar sepultura a su hermano, porque consideraba que las leyes de los dioses estaban por encima de las del poder. <b>Medea</b>, hechicera y nieta del Sol, ayudó a Jasón a conseguir el vellocino de oro.</p><p>Las <b>Amazonas</b> eran un pueblo de mujeres guerreras, y las <b>Musas</b>, nueve diosas que inspiraban las artes y las ciencias. Muchas veces, sin embargo, los mitos reflejan una sociedad en la que las mujeres tenían pocos derechos, y presentan como peligrosa a la mujer que actúa por su cuenta. Por eso hoy muchas autoras reescriben estos relatos desde el punto de vista de sus protagonistas femeninas.</p>`, svg: ["Heroínas y mujeres del mito", [["Atalanta", "cazadora y corredora"], ["Antígona", "desobedece al rey"], ["Ariadna", "el hilo del laberinto"]], "protagonistas femeninas"] },
    { tras: "<h3>La guerra de Troya y la Odisea</h3>", html: `<h3>Las aventuras de la Odisea</h3><p>El viaje de <mark>Ulises</mark> está lleno de episodios famosos. En la isla de los cíclopes, quedó atrapado con sus hombres en la cueva del gigante <b>Polifemo</b>, que tenía un solo ojo. Ulises le dijo que se llamaba <b>Nadie</b>, lo emborrachó y le clavó una estaca ardiendo en el ojo. Cuando los otros cíclopes preguntaron quién le atacaba, Polifemo gritó: «¡Nadie me hace daño!», y no acudieron. La hechicera <b>Circe</b> convirtió a sus compañeros en cerdos; Ulises, protegido por una hierba mágica de Hermes, la obligó a devolverles su forma.</p><p>Para escuchar el canto de las <b>sirenas</b>, que atraían a los marineros hacia la muerte, Ulises tapó con cera los oídos de sus hombres y se hizo atar al mástil. Después pasó entre <b>Escila</b>, un monstruo de seis cabezas, y <b>Caribdis</b>, un remolino. Mientras tanto, en Ítaca, <b>Penélope</b> engañaba a sus pretendientes: prometió casarse cuando terminara un sudario, pero deshacía de noche lo que tejía de día. Al volver, Ulises se disfrazó de mendigo y solo él logró tensar su viejo arco.</p>`, svg: ["Episodios de la Odisea", [["Polifemo", "el engaño de «Nadie»"], ["Sirenas", "Ulises atado al mástil"], ["Penélope", "teje y desteje"]], "el regreso de Ulises"] },
    { html: `<h3>Cómo reconocer un mito en el arte</h3><p>Los artistas de todas las épocas han representado mitos, y para identificarlos hay que fijarse en la <mark>iconografía</mark>: los atributos y las escenas típicas de cada personaje. Si vemos a una diosa desnuda saliendo del mar sobre una concha, es el nacimiento de Venus, como en el cuadro de <b>Botticelli</b>. Un joven que se transforma en árbol mientras otro lo persigue es Apolo y Dafne, como en la escultura de <b>Bernini</b>. Un herrero en su fragua recibiendo una visita luminosa es <i>La fragua de Vulcano</i> de <b>Velázquez</b>, y unas mujeres tejiendo es su cuadro <i>Las hilanderas</i>, que esconde el mito de Aracne.</p><p>Para comentar una obra mitológica sigue tres pasos: identifica a los personajes por sus atributos, recuerda el mito que se narra y explica qué momento ha elegido el artista y por qué. Muchas veces el pintor usaba el mito para transmitir un mensaje de su propia época: el poder del rey, el valor del amor o los peligros del orgullo.</p>`, svg: ["Mitos en obras de arte", [["Botticelli", "El nacimiento de Venus"], ["Bernini", "Apolo y Dafne"], ["Velázquez", "La fragua de Vulcano"]], "iconografía mitológica"] },
  ],
  videos: [["<h3>Mitos de transformación</h3>", "narciso"], ["<h3>La guerra de Troya y la Odisea</h3>", "troya"]],
  ejemplos: [
    ["En un cuadro aparece un hombre encadenado a una roca y un águila que lo ataca. ¿Qué mito es?", ["Un personaje encadenado y castigado por un ave es un castigo divino.", "El águila es el animal de Zeus.", "Zeus castigó así a Prometeo por robar el fuego."], "El castigo de Prometeo."],
    ["Explica qué fenómeno natural explica el mito de Perséfone.", ["Hades rapta a Perséfone y la lleva al inframundo.", "Su madre, Deméter, diosa de la agricultura, deja de cuidar la tierra por la pena.", "Se acuerda que Perséfone pase parte del año con su madre y parte con Hades."], "Las estaciones: cuando Perséfone está en el inframundo es otoño e invierno; cuando vuelve, primavera y verano."],
    ["¿Por qué funcionó el engaño de «Nadie» con Polifemo?", ["Ulises dijo que se llamaba Nadie.", "Al ser atacado, Polifemo gritó que «Nadie» le hacía daño.", "Los demás cíclopes entendieron que nadie le atacaba y no acudieron."], "Porque el nombre falso convertía la petición de ayuda en un mensaje absurdo: un ejemplo de la astucia de Ulises."],
  ],
  errores: ["Confundir mito, leyenda y fábula: el mito habla de dioses y héroes en un tiempo sagrado; la leyenda parte de un hecho histórico; la fábula tiene moraleja."],
  niveles: "bbbmbbbmbm",
  ejercicios: [
    ["b", "¿Qué robó Prometeo y cómo fue castigado?", "Robó el fuego de los dioses para los humanos. Zeus lo encadenó a una roca del Cáucaso, donde un águila le devoraba el hígado cada día."],
    ["b", "¿Quién era Caronte?", "El barquero que llevaba las almas de los muertos a través de la laguna Estigia, a cambio de una moneda."],
    ["b", "¿Qué quedó dentro de la jarra de Pandora?", "La esperanza."],
    ["b", "¿Cómo engañó Penélope a sus pretendientes?", "Prometió casarse cuando acabara de tejer un sudario, pero por la noche deshacía lo que tejía de día."],
    ["b", "¿Qué diferencia hay entre los Campos Elíseos y el Tártaro?", "Los Campos Elíseos eran el lugar feliz de los héroes y los justos; el Tártaro, el lugar de castigo de los grandes culpables."],
    ["m", "Explica el castigo de Sísifo y de Tántalo y qué expresión nos ha dejado el segundo.", "Sísifo empujaba eternamente una roca montaña arriba que volvía a caer; Tántalo tenía hambre y sed rodeado de agua y fruta que se apartaban. De él viene «suplicio de Tántalo»: desear algo que está cerca y no se puede alcanzar."],
    ["m", "Distingue mito, leyenda y fábula con un ejemplo de cada uno.", "Mito: Prometeo roba el fuego (dioses, tiempo sagrado). Leyenda: el rey Arturo (personaje quizá histórico con elementos fantásticos). Fábula: la cigarra y la hormiga (animales y moraleja)."],
    ["m", "¿Por qué Antígona es un personaje que sigue interesando hoy?", "Porque plantea el conflicto entre la conciencia y la ley del poder: desobedece al rey para cumplir un deber moral, un dilema que sigue vivo en la objeción de conciencia y los derechos humanos."],
    ["m", "Explica cómo superó Ulises a las sirenas.", "Tapó con cera los oídos de sus marineros y se hizo atar al mástil para escuchar el canto sin poder lanzarse al mar."],
    ["m", "¿Qué es la iconografía? Pon dos ejemplos de atributos.", "El estudio de los símbolos y atributos que permiten identificar a los personajes en el arte. Ejemplos: el tridente de Poseidón y la lechuza de Atenea."],
    ["m", "Resume las etapas del viaje del héroe aplicándolas a Teseo.", "Nacimiento extraordinario (hijo de rey o de Poseidón), llamada a la aventura (ir a Creta), ayuda (el hilo de Ariadna), prueba (el Minotauro en el laberinto) y regreso (vuelve a Atenas, aunque su padre muere al ver las velas negras)."],
    ["m", "¿Por qué se ponía una moneda en la boca de los muertos?", "Para pagar a Caronte el viaje en barca a través de la Estigia; sin ella, el alma vagaba sin poder entrar en el Hades."],
    ["m", "Explica el origen de los nombres «Atlántico» y «Europa».", "Atlántico viene del titán Atlas, que sostenía el cielo en el extremo occidental del mundo; Europa era una princesa fenicia raptada por Zeus transformado en toro."],
    ["a", "¿Qué enseñanza transmite el mito de Prometeo? ¿Tiene sentido hoy?", "Presenta el conocimiento y la técnica como un regalo que hace progresar a la humanidad, pero también como un desafío al orden establecido que tiene un precio. Hoy se usa para reflexionar sobre los avances científicos y sus riesgos (Frankenstein se subtitula «el moderno Prometeo»)."],
    ["a", "Compara a Heracles y a Ulises como héroes.", "Heracles destaca por la fuerza física y supera pruebas con su potencia; Ulises destaca por la astucia y la inteligencia (el caballo de Troya, «Nadie»). Ambos sufren la hostilidad de un dios (Hera, Poseidón) y logran su objetivo tras muchas pruebas."],
    ["a", "Analiza qué dice la historia de Pandora sobre la visión de la mujer en la Grecia antigua.", "Presenta a la primera mujer como la causa de los males por su curiosidad, lo que refleja una sociedad patriarcal que desconfiaba de la mujer y justificaba su exclusión. Comparada con el relato bíblico de Eva, muestra una idea muy extendida en la Antigüedad que hoy se critica."],
    ["a", "Elige una película o serie actual y explica qué esquema o personaje mitológico reconoces en ella.", "Respuesta abierta. Por ejemplo: en una saga de superhéroes aparece el viaje del héroe (llamada, mentor, pruebas, monstruo, regreso), o personajes inspirados en Zeus, Hermes o las Amazonas."],
    ["a", "Describe cómo reconocerías en un cuadro el mito de Apolo y Dafne.", "Un joven con corona de laurel o lira (Apolo) persigue a una muchacha cuyas manos se convierten en ramas y sus pies en raíces: Dafne transformándose en laurel. El momento elegido suele ser el de la metamorfosis."],
    ["a", "¿Por qué crees que los mitos griegos siguen inspirando historias 3.000 años después?", "Porque tratan temas universales (el amor, la muerte, el poder, el orgullo, la búsqueda de la identidad), tienen personajes con defectos humanos y estructuras narrativas emocionantes que pueden adaptarse a cualquier época."],
    ["a", "Escribe un mito breve (100 palabras) que explique un fenómeno natural actual, imitando el estilo griego.", "Respuesta abierta. Debe incluir dioses o héroes, un conflicto, una transformación o castigo y la explicación final del fenómeno (por ejemplo, el origen del arcoíris o del wifi)."],
    ["a", "Explica la relación entre el mito de Aracne y Las hilanderas de Velázquez.", "En el fondo del cuadro se representa la disputa entre Atenea y Aracne ante un tapiz; en primer plano, unas hilanderas trabajan en un taller real. Velázquez une el mito y la vida cotidiana, y quizá reflexiona sobre el valor del trabajo artesanal y del arte."],
  ],
  cuartas: ["Apolo", "La lira", "Heracles", "La vida de Pericles", "Un poema de amor", "Ares", "Creta", "piedra", "Pegaso", "Apolo", "Juno", "Atenea", "Con un túnel"],
  quiz: [
    ["¿Qué robó Prometeo a los dioses?", ["El fuego", "El rayo", "La lira", "El vino"], 0, "Para dárselo a los humanos."],
    ["En la jarra de Pandora solo quedó…", ["la esperanza", "la guerra", "el amor", "la enfermedad"], 0, "Todos los males salieron."],
    ["¿Quién llevaba a los muertos en su barca?", ["Caronte", "Cerbero", "Hermes", "Hades"], 0, "Cobraba un óbolo."],
    ["El mito de Perséfone explica…", ["las estaciones", "el eco", "el arcoíris", "los terremotos"], 0, "Deméter entristece cuando su hija está en el Hades."],
    ["Ulises le dijo a Polifemo que se llamaba…", ["Nadie", "Odiseo", "Héctor", "Todos"], 0, "Por eso nadie le ayudó."],
    ["Para no caer ante las sirenas, Ulises…", ["se hizo atar al mástil", "las mató", "se tapó los ojos", "cambió de rumbo"], 0, "Sus hombres tenían cera en los oídos."],
    ["Antígona es famosa por…", ["desobedecer al rey por un deber moral", "vencer en una carrera", "ayudar a Teseo", "fundar Roma"], 0, "Enterró a su hermano."],
    ["El castigo de Sísifo era…", ["empujar una roca sin fin", "tener sed eterna", "ser devorado por un águila", "tejer de noche"], 0, "En el Tártaro."],
    ["La iconografía estudia…", ["los atributos y símbolos de los personajes", "el origen de las palabras", "los templos", "las monedas"], 0, "Sirve para identificar mitos en el arte."],
    ["Bernini esculpió…", ["Apolo y Dafne", "El Discóbolo", "La Victoria de Samotracia", "El Laocoonte"], 0, "Barroco italiano."],
  ],
  examen: [
    ["¿Quién pintó El nacimiento de Venus?", ["Botticelli", "Velázquez", "Goya", "Picasso"], 0, "Renacimiento italiano."],
    ["Atalanta era…", ["una cazadora muy veloz", "una diosa del mar", "la esposa de Ulises", "una sirena"], 0, "Solo se casaría con quien la venciera corriendo."],
    ["Escila y Caribdis eran…", ["un monstruo y un remolino", "dos diosas", "dos islas felices", "dos héroes"], 0, "De ahí «entre Escila y Caribdis»."],
    ["Una leyenda se diferencia del mito en que…", ["parte de un hecho o personaje histórico", "siempre tiene animales", "no tiene personajes", "es siempre en verso"], 0, "El mito es de un tiempo sagrado."],
    ["Las hilanderas de Velázquez esconde el mito de…", ["Aracne", "Narciso", "Prometeo", "Perseo"], 0, "La tejedora convertida en araña."],
  ],
  tarjetas: [["Prometeo", "Titán que robó el fuego para la humanidad."], ["Caronte", "Barquero que cruza a los muertos por la Estigia."], ["Penélope", "Esposa fiel de Ulises que tejía y destejía."], ["Iconografía", "Estudio de los atributos para identificar personajes en el arte."]],
  glosario: [["Mito", "Relato sagrado tradicional de dioses y héroes."], ["Leyenda", "Relato basado en un hecho histórico con elementos fantásticos."], ["Olimpo", "Monte donde vivían los dioses principales."], ["Titanes", "Dioses anteriores a los olímpicos, hijos de Gea y Urano."], ["Atributo", "Objeto o animal que identifica a un dios o héroe."], ["Héroe", "Semidiós o mortal excepcional que realiza hazañas."], ["Oráculo", "Lugar y respuesta de un dios consultado."], ["Hades", "Dios y reino de los muertos."], ["Estigia", "Laguna que separa el mundo de los vivos y el de los muertos."], ["Tártaro", "Lugar de castigo eterno."], ["Metamorfosis", "Transformación de un ser en otro."], ["Musas", "Nueve diosas inspiradoras de las artes."], ["Iconografía", "Estudio de imágenes y símbolos en el arte."], ["Viaje del héroe", "Esquema narrativo común a muchos mitos."]],
  situacion: { titulo: "Museo mitológico de la clase", reto: "Organizar una exposición que explique mitos a partir de obras de arte.", pasos: ["Cada grupo elige un mito y busca dos obras de arte que lo representen (en el Museo del Prado en línea, por ejemplo).", "Identificar a los personajes por sus atributos.", "Resumir el mito y explicar qué momento eligió cada artista.", "Buscar una huella actual del mito (palabra, marca, película).", "Preparar una cartela para cada obra y hacer de guías en la exposición."], producto: "Exposición con cartelas y una visita guiada de 3 minutos por grupo.", evaluacion: ["Identifica correctamente a los personajes y el mito.", "El resumen del mito es fiel y claro.", "Relaciona el mito con la cultura actual.", "La explicación oral es amena y precisa."] },
  familias: ["Visitad juntos en línea la colección del Museo del Prado y buscad tres cuadros mitológicos; intentad adivinar los dioses por sus atributos."],
  saberes: "mitología grecolatina: dioses, héroes, inframundo, ciclos troyanos y pervivencia en el arte y la lengua.",
  minutos: 100,
});
