// Música 4º de Primaria: canciones populares de España. Sin letras de canciones: solo se nombran.
// La melodía del dibujo es inventada para este tema. Dibujos propios en SVG.
const { tema, L, svg, tx, t, melodia, corro, AZ, RO, VE, NA, AM, AG, MO } = require("./_pri4d");

// Silueta muy simplificada de la península (solo orientativa) con puntos por zonas.
// puntos: [x, y, texto, color, "up" | "down"]
const PENINSULA = "M40 46 L 70 34 L 120 38 L 160 34 L 200 40 L 228 52 L 214 76 L 206 104 L 190 122 L 168 140 L 130 146 L 100 144 L 82 132 L 66 136 L 58 112 L 60 84 L 44 74 Z";
const mapaZonas = (label, puntos, titulo, extra = "") => svg(label, `<path d="${PENINSULA}" fill="${AM}" fill-opacity=".14" stroke="var(--muted)" stroke-width="1.6"/>${extra}${puntos.map(([x, y, s, c, pos = "up"]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>${tx(x, pos === "up" ? y - 9 : y + 17, s, { s: 10, c })}`).join("")}${tx(130, 168, titulo, { s: 11, c: "var(--muted)" })}`);

module.exports = tema({
  materia: "Música",
  titulo: "Canciones populares de España",
  objetivos: ["Saber qué es una canción popular y cómo se transmite", "Reconocer tipos de canciones populares: de cuna, de juego, de trabajo y de fiesta", "Conocer cantos, danzas e instrumentos tradicionales de distintas zonas de España", "Cantar, tocar y crear acompañamientos sencillos valorando el patrimonio musical"],
  claves: ["canción popular", "tradición oral", "folclore", "nana", "canción de corro", "romance", "jota", "muiñeira", "sardana", "sevillanas", "patrimonio"],
  pregunta: [
    "Seguro que conoces canciones que nadie te enseñó con un libro: las cantabas en el patio, en el corro, o te las cantaba tu abuela para dormir. ¿Sabes quién las inventó?",
    "Nadie lo sabe: son <mark>canciones populares</mark>. Se han ido pasando de boca en boca durante siglos, y cada pueblo las ha cantado a su manera. Forman parte de nuestro <b>patrimonio</b>, igual que un castillo o una catedral, y por eso es importante conocerlas y seguir cantándolas.",
  ],
  bloques: [
    ["¿Qué es una canción popular?", `<p>Una <mark>canción popular</mark> o tradicional es la que pertenece a todo un pueblo. Normalmente no se sabe quién la compuso, porque se ha transmitido por <b>tradición oral</b>: de padres a hijos, cantando, sin papel ni partitura.</p><p>Como se aprendían de oído, cada lugar fue cambiando un poco la letra o la melodía, y por eso una misma canción puede tener <b>versiones</b> distintas en cada pueblo. Al conjunto de canciones, danzas, cuentos y costumbres de un pueblo lo llamamos <b>folclore</b>.</p>`,
      svg("La canción pasa de la abuela al padre y a la niña", `${[[50, 84, MO, "abuela", 18], [130, 84, AZ, "padre", 18], [210, 84, VE, "niña", 14]].map(([x, y, c, s, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/>${tx(x, y + 38, s, { s: 11, c })}`).join("")}${[[66, 112], [146, 194]].map(([a, b]) => `<path d="M${a} 70 q ${(b - a) / 2} -30 ${b - a} 0" fill="none" stroke="${RO}" stroke-width="2"/><path d="M${b - 7} 64 l 7 6 l -9 2" fill="none" stroke="${RO}" stroke-width="2"/>${t((a + b) / 2, 46, "♪", { s: 16, c: RO })}`).join("")}${tx(130, 160, "tradición oral: de boca en boca", { s: 11, c: "var(--muted)" })}`)],
    ["Una canción para cada momento", `<p>Antiguamente había una canción para cada momento de la vida. Las <mark>nanas</mark> o canciones de cuna se cantaban suave y lento para dormir a los bebés. Las <b>canciones de juego</b> acompañaban los corros, la comba y los juegos de palmas.</p><p>Las <b>canciones de trabajo</b> ayudaban a llevar el ritmo al segar, moler o lavar la ropa. Había <b>villancicos</b> para Navidad, <b>rondas</b> que los mozos cantaban por las calles de noche y <b>romances</b>, que contaban largas historias de caballeros, princesas y aventuras.</p>`,
      L.filas("Tipos de canciones populares", [["nana", "para dormir: suave y lenta", MO], ["de juego", "corro, comba, palmas", VE], ["de trabajo", "llevar el ritmo", NA], ["de fiesta", "villancicos, rondas", RO]], "Una canción para cada momento")],
    ["Canciones de corro y de juego", `<p>Las <mark>canciones de corro</mark> son de las más conocidas: los niños se dan la mano, giran y hacen lo que dice la letra, como agacharse, saltar o cambiar de sitio. Ejemplos muy conocidos son «El patio de mi casa», «Al corro de la patata» o «La Tarara».</p><p>También hay <b>retahílas</b> para echar a suertes y canciones para saltar a la comba, donde la cuerda marca el <b>pulso</b>. Estas canciones tienen melodías cortas, que se repiten mucho y usan pocas notas; por eso son tan fáciles de recordar.</p>`,
      svg("Corro de niños cantando", `${corro(130, 70, 74, 34, 7, [VE, AZ, RO, NA, MO, AM, VE])}${t(130, 76, "♪ ♫", { s: 18, c: RO })}${tx(130, 160, "girar, agacharse, saltar…", { s: 11, c: "var(--muted)" })}`)],
    ["Cantos y danzas del norte", `<p>En <b>Galicia</b> y <b>Asturias</b> suena la <mark>gaita</mark>, un instrumento de viento con una bolsa de aire que el gaitero aprieta con el brazo. Con ella se acompaña la <b>muiñeira</b>, una danza alegre con saltitos. En <b>Cantabria</b> son típicos la pandereta y el rabel, un pequeño instrumento de cuerda frotada.</p><p>En el <b>País Vasco</b> y <b>Navarra</b> se bailan danzas al son del <b>txistu</b>, una flauta de solo tres agujeros, y del tamboril, que toca la misma persona a la vez: una mano para la flauta y otra para el tambor.</p>`,
      mapaZonas("Mapa: zonas del norte de España", [[54, 52, "Galicia", AZ, "down"], [92, 40, "Asturias", VE, "up"], [126, 42, "Cantabria", NA, "down"], [164, 42, "País Vasco", RO, "up"]], "gaita · pandereta · rabel · txistu")],
    ["Jotas y sardanas", `<p>La <mark>jota</mark> es una de las danzas y cantos más extendidos de España, y la más famosa es la <b>jota aragonesa</b>. Es rápida, de compás ternario, con saltos, vueltas y castañuelas; se acompaña con guitarras, bandurrias y laúdes, y a veces un cantante canta una copla a pleno pulmón.</p><p>En <b>Cataluña</b> se baila la <mark>sardana</mark>, en corro y con las manos cogidas en alto. La toca una <b>cobla</b>, un grupo de músicos con instrumentos de viento. En <b>Valencia</b> suenan la <b>dolçaina</b> y el tabalet en muchas fiestas.</p>`,
      mapaZonas("Mapa: Aragón, Cataluña y Valencia", [[176, 72, "Aragón: jota", RO, "down"], [212, 58, "Cataluña", AZ, "up"], [196, 108, "Valencia", VE, "down"]], "jota · sardana · dolçaina"), "mu8b"],
    ["Del centro, del sur y de las islas", `<p>En <b>Castilla</b> se cantan y bailan <b>seguidillas</b> y jotas castellanas, con dulzaina, tamboril y pandereta. En <b>Andalucía</b> son muy populares las <mark>sevillanas</mark>, que se bailan en pareja en las ferias, y el <mark>flamenco</mark>, con cante, toque de guitarra, baile y palmas.</p><p>El flamenco es tan importante que la UNESCO lo declaró <b>Patrimonio Cultural Inmaterial de la Humanidad</b>. En las islas <b>Canarias</b> suena el <b>timple</b>, una guitarrita pequeña, y en <b>Baleares</b> se bailan los <b>boleros</b>.</p>`,
      mapaZonas("Mapa: Castilla, Andalucía y las islas", [[122, 82, "Castilla", NA, "up"], [124, 128, "Andalucía", RO, "up"], [236, 100, "Baleares", AZ, "down"], [29, 128, "Canarias", VE, "up"]], "seguidillas · sevillanas · flamenco · timple", `<rect x="4" y="104" width="50" height="34" rx="6" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/><circle cx="231" cy="96" r="3" fill="${AZ}" fill-opacity=".3"/>`)],
    ["Instrumentos populares", `<p>La música popular usa instrumentos sencillos que muchas veces se fabricaban en casa. De <b>percusión</b>: la <mark>pandereta</mark>, las <mark>castañuelas</mark>, el tamboril, la zambomba de Navidad e incluso una botella de anís rascada con una cuchara o un almirez.</p><p>De <b>cuerda</b>: la <b>guitarra</b>, la <b>bandurria</b> y el <b>laúd</b>, que forman las rondallas. De <b>viento</b>: la <b>gaita</b>, la <b>dulzaina</b> y el <b>txistu</b>. Cada zona tiene sus instrumentos, y escucharlos nos ayuda a reconocer de dónde viene una canción.</p>`,
      L.filas("Instrumentos de la música popular", [["percusión", "pandereta, castañuelas", RO], ["cuerda", "guitarra, bandurria, laúd", AZ], ["viento", "gaita, dulzaina, txistu", VE], ["de casa", "botella, almirez", NA]], "Instrumentos populares")],
    ["¿Cómo son sus melodías?", `<p>Las canciones populares infantiles suelen tener <b>melodías cortas</b> que se repiten, con <b>pocas notas</b> y saltos pequeños. Muchas usan solo <mark>sol, mi y la</mark>, las notas con las que los niños de todo el mundo cantan sus juegos. Su compás suele ser <b>binario</b> (para caminar en corro) o <b>ternario</b> (como la jota).</p><p>Además, muchas tienen <b>estribillo</b>: una parte que vuelve siempre igual y que todos cantan juntos, mientras las estrofas cambian. Mira esta melodía inventada al estilo de una canción de corro.</p>`,
      melodia("Melodía inventada al estilo de una canción de corro, con sol, mi y la", [[2, { corchea: true }], [2, { corchea: true }], [0], [0, { barra: true }], [3, { corchea: true }], [2, { corchea: true }], [0], [0, { barra: true }], [2, { corchea: true }], [3, { corchea: true }], [2, { corchea: true }], [0, { corchea: true }], [0, { barra: true }], [0, { blanca: true }]], { compas: ["2", "4"], fin: true, x0: 66, g: 10, extra: tx(130, 24, "sol sol mi · la sol mi · sol la sol mi · mi", { s: 11, c: AZ }) })],
    ["Taller: acompañamos una canción", `<p>Elegid una canción popular que conozca toda la clase. Vamos a acompañarla en grupos. El <b>grupo 1</b> canta la melodía. El <b>grupo 2</b> toca el <mark>pulso</mark> con panderetas, un golpe en cada tiempo. El <b>grupo 3</b> repite un <b>ostinato</b> con castañuelas o claves, por ejemplo «ta, ti-ti».</p><p>El <b>grupo 4</b> toca solo en el estribillo, con un golpe fuerte de pandero al final. Después cambiad los papeles. Para terminar, preguntad en casa qué canciones cantaban de pequeños y traedlas a clase para crear un cancionero.</p>`,
      L.filas("Reparto del acompañamiento", [["grupo 1", "canta la melodía", MO], ["grupo 2", "pulso con panderetas", AZ], ["grupo 3", "ostinato: ta, ti-ti", VE], ["grupo 4", "golpe en el estribillo", RO]], "Taller en grupos")],
  ],
  ejemplos: [
    ["¿Por qué una misma canción popular tiene versiones distintas?", ["Se aprendía de oído, sin partitura.", "Cada pueblo la fue cambiando un poco."], "Por la tradición oral."],
    ["¿Qué tipo de canción es la que se canta suave para dormir a un bebé?", ["Es lenta y tranquila.", "Se canta junto a la cuna."], "Una nana o canción de cuna."],
    ["Oyes una danza rápida, ternaria, con castañuelas y bandurrias. ¿Qué puede ser?", ["Compás ternario y saltos.", "Guitarras, bandurrias y castañuelas."], "Una jota, por ejemplo la aragonesa."],
  ],
  errores: [
    "Pensar que las canciones populares tienen un autor conocido: normalmente es anónimo.",
    "Creer que solo hay una versión «buena» de cada canción: cada lugar tiene la suya.",
    "Confundir la gaita gallega con la dulzaina: la gaita tiene bolsa de aire.",
    "Pensar que el flamenco es solo baile: también es cante, toque de guitarra y palmas.",
    "Tocar el acompañamiento más fuerte que la voz: la melodía debe oírse bien.",
  ],
  ejercicios: [
    ["¿Qué es la tradición oral?", "Transmitir canciones y cuentos de boca en boca, sin escribirlos."],
    ["Nombra cuatro tipos de canciones populares.", "Nanas, de juego, de trabajo y de fiesta (villancicos, rondas)."],
    ["¿Qué es un romance?", "Una canción popular que cuenta una larga historia."],
    ["Escribe el nombre de dos canciones de corro.", "Por ejemplo, «El patio de mi casa» y «Al corro de la patata»."],
    ["¿Con qué instrumento se acompaña la muiñeira?", "Con la gaita."],
    ["¿Qué tiene de especial el txistu?", "Es una flauta de tres agujeros que se toca con una mano mientras la otra toca el tamboril."],
    ["¿Dónde se baila la sardana y cómo?", "En Cataluña, en corro y con las manos en alto."],
    ["¿Qué declaró la UNESCO sobre el flamenco?", "Que es Patrimonio Cultural Inmaterial de la Humanidad."],
    ["Clasifica: pandereta, bandurria, gaita, castañuelas.", "Percusión: pandereta, castañuelas. Cuerda: bandurria. Viento: gaita."],
    ["Pregunta en casa por una canción de su infancia y escribe su título.", "Respuesta libre."],
  ],
  figura: ["España canta y baila", mapaZonas("Mapa de canciones y danzas populares de España", [[54, 52, "muiñeira", AZ, "down"], [164, 42, "txistu", RO, "up"], [176, 72, "jota", NA, "down"], [212, 58, "sardana", MO, "up"], [124, 128, "sevillanas", RO, "up"], [118, 84, "seguidillas", VE, "up"]], "cada zona tiene sus cantos y danzas")],
  video: "mu8v",
  quiz: [
    ["Una canción popular suele ser de autor…", ["anónimo", "famoso", "extranjero"], "Anónimo."],
    ["Se transmitía por…", ["tradición oral", "internet", "partituras"], "De boca en boca."],
    ["La canción para dormir a un bebé es la…", ["nana", "jota", "ronda"], "Nana."],
    ["El romance cuenta…", ["una historia", "un chiste", "los números"], "Historias."],
    ["La muiñeira se acompaña con…", ["gaita", "piano", "trompeta"], "Galicia."],
    ["El txistu es una flauta de…", ["tres agujeros", "diez agujeros", "cuatro cuerdas"], "Tres agujeros."],
    ["La jota más famosa es la…", ["aragonesa", "irlandesa", "griega"], "Aragón."],
    ["La sardana se baila en…", ["Cataluña", "Andalucía", "Canarias"], "Cataluña."],
    ["El timple es típico de…", ["Canarias", "Asturias", "Aragón"], "Canarias."],
    ["La parte que se repite igual en una canción es el…", ["estribillo", "silencio", "compás"], "Estribillo."],
  ],
  examen: [
    ["El conjunto de canciones, danzas y costumbres de un pueblo es el…", ["folclore", "teatro", "ritmo"], "Folclore."],
    ["El flamenco fue declarado por la UNESCO…", ["Patrimonio Inmaterial de la Humanidad", "deporte olímpico", "danza prohibida"], "UNESCO."],
    ["Guitarra, bandurria y laúd forman…", ["rondallas", "coblas", "orquestas de viento"], "Rondalla."],
    ["Las sevillanas se bailan…", ["en pareja", "solo sentados", "en cadena larga"], "En pareja."],
  ],
  feynman: ["Qué es una canción popular y por qué tiene versiones", "Qué tipos de canciones populares hay", "Danzas e instrumentos de distintas zonas de España", "Cómo acompañar una canción con pulso y ostinato"],
  mapa: ["CANCIONES POPULARES", RO, [["Tipos", "nana · juego · trabajo · fiesta", MO], ["Norte", "gaita · muiñeira · txistu", AZ], ["Este", "jota · sardana", NA], ["Sur y centro", "sevillanas · flamenco", RO]], 240],
  tarjetas: [
    ["Canción popular", "Canción de un pueblo, de autor anónimo."],
    ["Tradición oral", "Transmitir de boca en boca."],
    ["Nana", "Canción para dormir."],
    ["Romance", "Canción que cuenta una historia."],
    ["Muiñeira", "Danza gallega con gaita."],
    ["Jota", "Danza ternaria con castañuelas."],
    ["Sardana", "Danza catalana en corro."],
    ["Flamenco", "Cante, toque y baile; patrimonio UNESCO."],
  ],
  familias: ["Preguntad a los abuelos qué canciones cantaban de niños y grabadlas.", "Escuchad juntos música popular de vuestra comunidad y nombrad sus instrumentos."],
  saberes: "Canción popular y tradición oral; repertorio tradicional de España; danzas e instrumentos populares por zonas; interpretación y acompañamiento con pulso y ostinato (Música y Danza)",
  ideas: ["Cancionero de clase con canciones que traen las familias.", "Mapa mural de España con danzas e instrumentos.", "Acompañamiento en grupos de una canción de corro."],
  fuentes: [["Diccionario de la RAE: folclore", "https://dle.rae.es/folclore"], ["UNESCO: el flamenco", "https://ich.unesco.org/es/RL/el-flamenco-00363"]],
});
