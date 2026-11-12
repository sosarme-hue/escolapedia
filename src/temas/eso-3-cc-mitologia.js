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
