// Análisis Musical II, 2º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El Renacimiento: misa, motete, madrigal y música instrumental",
  minutos: 60,
  objetivos: [
    "Reconocer por audición la polifonía imitativa y la homofonía renacentistas",
    "Distinguir los géneros vocales religiosos (misa, motete) y profanos (madrigal, villancico)",
    "Identificar las primeras formas instrumentales y las danzas",
    "Relacionar la música con la Reforma, la Contrarreforma y el humanismo",
  ],
  claves: ["polifonía imitativa", "homofonía", "misa", "motete", "madrigal", "madrigalismo", "villancico", "danza"],
  pregunta: {
    texto: "¿Por qué en un motete de Victoria parece que las voces «se persiguen» sin chocar nunca?",
    respuesta: "Porque usa la <mark>imitación</mark>: cada voz entra por turnos con el mismo motivo, y el contrapunto controla con cuidado las disonancias para que todo suene equilibrado. Es el ideal renacentista de claridad, proporción y serenidad.",
  },
  lectura: {
    titulo: "La misa que salvó la polifonía",
    html: `<p>Cuenta una leyenda que el Concilio de Trento (1545-1563) estuvo a punto de prohibir la polifonía en las iglesias: tantas voces entrelazadas impedían entender el texto sagrado. Palestrina habría compuesto entonces la <i>Misa del papa Marcelo</i>, tan clara que convenció a los obispos.</p>
    <p>La historia es exagerada, pero refleja un problema real del Renacimiento: equilibrar la belleza del contrapunto con la comprensión de la palabra. En este tema aprenderás a reconocer cómo lo resolvieron los grandes polifonistas, cómo el madrigal pintó con sonidos cada palabra del poema y cómo los instrumentos empezaron a tener música propia.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "El sonido del Renacimiento",
      html: `<p>Entre 1450 y 1600, la música europea busca el <b>equilibrio</b> y la <b>claridad</b>, ideales del humanismo. Lo habitual son obras vocales a <b>cuatro, cinco o seis voces</b> de igual importancia, con un registro que va del bajo al soprano. La interpretación suele ser <b>a cappella</b>, aunque los instrumentos podían doblar las voces.</p>
      <p>La armonía se basa aún en los <b>modos</b>, pero cada vez se oyen más acordes completos y cadencias que anuncian la tonalidad. Las disonancias se preparan y se resuelven con mucho cuidado: el resultado es un sonido sereno y fluido. Frente a la Edad Media, el ritmo fluye sin tantos contrastes y las voces se reparten el protagonismo.</p>`,
      svg: B.estrella("Rasgos de la música renacentista", "Renacimiento", ["4-6 voces", "Imitación", "A cappella", "Modos", "Equilibrio", "Texto claro"]),
    },
    {
      h: "Dos texturas: imitación y homofonía",
      html: `<p>El análisis del Renacimiento gira en torno a dos texturas. En la <b>polifonía imitativa</b>, las voces entran una tras otra con el mismo motivo (un <b>punto de imitación</b>), y la obra encadena varios puntos, uno por cada frase del texto. En la <b>homofonía</b> o estilo de acordes, todas las voces cantan el mismo texto con el mismo ritmo, y las palabras se entienden mejor.</p>
      <p>Los compositores alternan ambas para dar variedad y subrayar palabras importantes: un «Et incarnatus est» suele aparecer en acordes solemnes.</p>`,
      svg: B.comparar("Polifonía imitativa y homofonía", ["Imitativa", ["entradas sucesivas", "mismo motivo", "voces independientes", "texto superpuesto"]], ["Homofonía", ["todas a la vez", "mismo ritmo", "bloques de acordes", "texto claro"]]),
    },
    {
      h: "La misa y el motete",
      html: `<p>La <b>misa polifónica</b> pone música a las cinco partes del ordinario: Kyrie, Gloria, Credo, Sanctus y Agnus Dei. Muchas se construyen sobre material previo: la <b>misa parodia</b> reutiliza un motete o una canción entera, y la <b>misa sobre cantus firmus</b> coloca una melodía conocida en notas largas.</p>
      <p>El <b>motete</b> es una obra religiosa en latín, más breve y libre, sobre textos bíblicos. Grandes autores: <b>Josquin des Prez</b>, <b>Palestrina</b>, <b>Orlando di Lasso</b> y los españoles <b>Tomás Luis de Victoria</b>, Cristóbal de Morales y Francisco Guerrero.</p>`,
      svg: B.rejilla("Géneros religiosos", ["Género", "Texto", "Rasgo"], [["Misa", "ordinario, latín", "5 partes"], ["Motete", "bíblico, latín", "puntos de imitación"], ["Coral", "alemán", "homofonía, pueblo"], ["Anthem", "inglés", "coro e iglesia"]]),
      video: { id: "cj8_2UiE-ew", titulo: "O magnum mysterium, Tomás Luis de Victoria", canal: "Acapella Project Sonority", vistas: 242787 },
    },
    {
      h: "Reforma y Contrarreforma",
      html: `<p>La <b>Reforma protestante</b> cambió la música religiosa. Lutero creó el <b>coral</b>: melodías sencillas en alemán, en homofonía, para que cantara toda la comunidad. En Inglaterra, la iglesia anglicana desarrolló el <b>anthem</b> en inglés.</p>
      <p>La Iglesia católica respondió con la <b>Contrarreforma</b>: el Concilio de Trento pidió una polifonía que dejara entender el texto y evitara melodías profanas. El estilo de Palestrina, con su imitación transparente y su cuidado de la palabra, se convirtió en modelo durante siglos.</p>`,
      svg: B.comparar("Dos respuestas a la crisis religiosa", ["Reforma", ["coral luterano", "lengua vulgar", "canta el pueblo", "homofonía"]], ["Contrarreforma", ["latín", "polifonía clara", "Palestrina, Victoria", "texto inteligible"]]),
    },
    {
      h: "El madrigal",
      html: `<p>El <b>madrigal</b> italiano es el gran género profano: poesía culta en lengua vulgar (Petrarca, Tasso) a cuatro o cinco voces. Su rasgo más llamativo es el <b>madrigalismo</b>: la música imita el significado de cada palabra. «Subir» se canta con notas ascendentes, «suspiro» se interrumpe con silencios, «dolor» se tiñe de disonancias o cromatismos.</p>
      <p>Al final del siglo, <b>Gesualdo</b> llevó el cromatismo a extremos sorprendentes y <b>Monteverdi</b> abrió el camino hacia el Barroco. En Inglaterra, el madrigal se hizo más ligero y popular.</p>`,
      svg: B.melodia("Madrigalismo: la palabra «subir» se canta con una escala ascendente", [0, 1, 2, 3, 4, 5, 6, 7], { titulo: "La música pinta la palabra", nombres: ["su", "", "bir", "", "al", "", "cie", "lo"] }),
      video: { id: "6dVPu71D8VI", titulo: "Carlo Gesualdo, Moro, lasso, al mio duolo", canal: "EtaCarinae2010", vistas: 713957 },
    },
    {
      h: "El villancico y la canción española",
      html: `<p>En la España de los Reyes Católicos triunfa el <b>villancico</b>: canción profana en castellano (no necesariamente navideña), con textura <b>homofónica</b>, ritmos vivos y una forma fija de <b>estribillo y coplas</b>. <b>Juan del Encina</b> es su gran autor, y los cancioneros, como el <i>Cancionero de Palacio</i>, recogen cientos de ejemplos.</p>
      <p>Otras formas son el <b>romance</b>, que narra historias con una melodía repetida para cada estrofa, y la <b>ensalada</b> de Mateo Flecha, que mezcla idiomas y estilos con humor.</p>`,
      svg: B.formas("Forma del villancico", [["Villancico", "A B B A"]], "Estribillo (A), mudanzas (B) y vuelta"),
    },
    {
      h: "Las formas instrumentales",
      html: `<p>Los instrumentos empiezan a tener repertorio propio. Unas formas imitan a las vocales (la <b>canzona</b> y el <b>ricercare</b>, contrapuntísticos). Otras nacen de la improvisación: la <b>fantasía</b> y la <b>tocata</b>. Las <b>diferencias</b> (variaciones) españolas para vihuela o tecla, de Luis de Narváez o Antonio de Cabezón, son de las primeras variaciones de la historia.</p>
      <p>Instrumentos típicos: vihuela, laúd, órgano, flautas de pico, violas da gamba, chirimías y sacabuches, agrupados en familias o «consorts».</p>`,
      svg: B.capas("Origen de las formas instrumentales", [["De la voz", "canzona, ricercare"], ["De la improvisación", "fantasía, tocata"], ["De la variación", "diferencias"]]),
    },
    {
      h: "Las danzas",
      html: `<p>La danza cortesana se escribe en <b>parejas contrastantes</b>: una danza lenta en compás binario seguida de otra rápida en ternario que suele usar el mismo material. Las más típicas son <b>pavana y gallarda</b>, o <b>basse danse y tourdion</b>. Su forma es sencilla, por secciones repetidas (AABBCC), y su textura, homofónica, con ritmo muy marcado.</p>
      <p>Estas parejas son el origen de la <b>suite</b> barroca, que estudiarás en el próximo tema. Al escucharlas, cuenta los pulsos y fíjate en el cambio de compás entre una y otra.</p>`,
      svg: B.compases("Pareja de danzas: pavana lenta y gallarda rápida", [["Pavana", 2, "binario, lento"], ["Gallarda", 3, "ternario, vivo"]]),
    },
  ],
  figura: {
    titulo: "Claves del Renacimiento musical",
    items: [["Imitación", "voz a voz", "puntos de", "imitación"], ["Religiosa", "misa · motete", "Palestrina", "Victoria"], ["Profana", "madrigal", "madrigalismos", "villancico"], ["Instrumental", "danzas", "pavana", "gallarda"]],
  },
  video: { id: "3n8XdKkrqgo", titulo: "Kyrie de la Misa del papa Marcelo, Palestrina", canal: "morphthing1", vistas: 2160320 },
  quiz: [
    ["La textura más característica del Renacimiento es…", ["monodia", "polifonía imitativa", "melodía acompañada", "bajo continuo"], 1, "Voces que entran por turnos."],
    ["En la homofonía, las voces…", ["se imitan", "cantan a la vez con el mismo ritmo", "improvisan", "cantan textos distintos"], 1, "Bloques de acordes."],
    ["La misa polifónica pone música al…", ["propio", "ordinario", "oficio", "coral"], 1, "Kyrie, Gloria, Credo, Sanctus, Agnus Dei."],
    ["Tomás Luis de Victoria es un compositor…", ["de madrigales ingleses", "religioso español", "de óperas", "de danzas"], 1, "Gran polifonista de la Contrarreforma."],
    ["El coral luterano se canta…", ["en latín", "en alemán, por la comunidad", "a solo", "sin texto"], 1, "Homofonía sencilla para todos."],
    ["Un madrigalismo es…", ["una danza", "imitar con la música el sentido de una palabra", "un instrumento", "un tipo de misa"], 1, "La música «pinta» el texto."],
    ["El villancico renacentista es…", ["siempre navideño", "canción profana con estribillo y coplas", "una misa", "una danza lenta"], 1, "Juan del Encina, Cancionero de Palacio."],
    ["Las diferencias españolas son…", ["variaciones", "fugas", "motetes", "corales"], 0, "Narváez, Cabezón."],
    ["La pavana es una danza…", ["rápida y ternaria", "lenta y binaria", "vocal", "religiosa"], 1, "Se empareja con la gallarda."],
    ["El Concilio de Trento pidió una polifonía…", ["más compleja", "que dejara entender el texto", "instrumental", "en lengua vulgar"], 1, "Claridad de la palabra."],
  ],
  examen: [
    ["Escuchas cuatro voces que entran una tras otra con el mismo motivo en latín. ¿Género y textura?", ["Madrigal homofónico", "Motete con polifonía imitativa", "Coral luterano", "Villancico"], 1, "Latín + imitación."],
    ["Un coro canta en italiano y la palabra «morir» suena con una disonancia cromática. ¿Qué recurso es?", ["Cantus firmus", "Madrigalismo", "Isorritmia", "Bajo continuo"], 1, "Expresa el sentido del texto."],
    ["Una pieza de vihuela repite un tema con cambios sucesivos. Es…", ["una canzona", "unas diferencias", "una pavana", "un motete"], 1, "Variaciones."],
    ["¿Qué pareja de danzas es correcta?", ["Pavana y gallarda", "Minueto y trío", "Allemande y fuga", "Tango y vals"], 0, "Lenta binaria y rápida ternaria."],
    ["La misa parodia…", ["se burla del texto", "reutiliza material polifónico previo", "es monódica", "es instrumental"], 1, "Toma un motete o canción ya existente."],
  ],
  feynman: ["Polifonía imitativa frente a homofonía", "Cómo respondieron Reforma y Contrarreforma", "Qué es un madrigalismo con un ejemplo", "Cómo eran las danzas en parejas"],
  mapa: ["EL RENACIMIENTO", [["Texturas", "imitación · homofonía"], ["Religiosa", "misa · motete · coral"], ["Profana", "madrigal · villancico"], ["Instrumental", "danzas · diferencias"]]],
  tarjetas: [
    ["Punto de imitación", "Motivo que cada voz canta al entrar por turnos."],
    ["Homofonía", "Voces que cantan el mismo texto con el mismo ritmo."],
    ["Misa parodia", "Misa que reutiliza una obra polifónica previa."],
    ["Motete renacentista", "Obra religiosa polifónica en latín."],
    ["Coral", "Canto luterano en alemán, homofónico, para la comunidad."],
    ["Madrigal", "Canción profana culta a varias voces en lengua vulgar."],
    ["Villancico", "Canción profana española con estribillo y coplas."],
    ["Pavana y gallarda", "Pareja de danzas: lenta binaria y rápida ternaria."],
  ],
  ejemplos: [
    ["Escuchas un Kyrie a cuatro voces que alterna entradas imitativas y acordes. Analiza la textura.", ["Entradas sucesivas: polifonía imitativa.", "Pasajes en acordes: homofonía.", "Latín, a cappella: misa renacentista."], "Polifonía imitativa con pasajes homofónicos, típica de Palestrina o Victoria."],
    ["Un coro en castellano repite un estribillo, ritmo vivo y voces a la vez. ¿Qué es?", ["Castellano, profano.", "Homofonía y estribillo.", "Siglo XV-XVI."], "Un villancico renacentista (Juan del Encina)."],
    ["En un madrigal, en «volar» las voces suben rápidamente. Explica el recurso.", ["Palabra con idea de movimiento.", "Escala ascendente rápida.", "Música al servicio del texto."], "Es un madrigalismo: la música representa el significado de la palabra."],
  ],
  errores: [
    "Confundir el villancico renacentista con el navideño actual.",
    "Decir que la música renacentista usa bajo continuo.",
    "Llamar madrigal a cualquier obra religiosa en latín.",
    "Olvidar que la homofonía también es típica del Renacimiento.",
  ],
  ejercicios: {
    b: [
      ["Define polifonía imitativa y homofonía.", "Imitativa: voces que entran sucesivamente con el mismo motivo. Homofonía: todas a la vez con el mismo ritmo."],
      ["Nombra las cinco partes del ordinario de la misa.", "Kyrie, Gloria, Credo, Sanctus y Agnus Dei."],
      ["Cita tres polifonistas españoles.", "Tomás Luis de Victoria, Cristóbal de Morales y Francisco Guerrero."],
      ["¿Qué es un madrigalismo?", "La representación musical del significado de una palabra del texto."],
    ],
    m: [
      ["Compara el coral luterano con el motete católico.", "Coral: alemán, homofonía, melodía sencilla para la comunidad. Motete: latín, polifonía imitativa para el coro profesional."],
      ["Explica la forma del villancico.", "Estribillo (A), mudanzas o coplas (B) y vuelta al estribillo, en esquema A B B A."],
      ["¿Por qué se emparejaban las danzas?", "Para contrastar una danza lenta binaria (pavana) con otra rápida ternaria (gallarda), a menudo con la misma melodía transformada."],
      ["Indica el origen de tres formas instrumentales.", "Canzona: de la canción vocal. Tocata: de la improvisación. Diferencias: de la variación sobre un tema."],
    ],
    a: [
      ["Escucha el Kyrie de la Misa del papa Marcelo y señala, con minutaje, dos entradas imitativas y un pasaje homofónico.", "Respuesta abierta: deben indicarse los momentos en que entran sucesivamente las voces y aquellos en que cantan en bloque."],
      ["Compara un madrigal de Gesualdo con un villancico de Juan del Encina en cinco rasgos.", "Respuesta abierta: idioma, textura (imitación y cromatismo / homofonía), armonía, forma (libre / estribillo) y carácter."],
    ],
  },
  glosario: [
    ["Contrapunto", "Arte de combinar líneas melódicas independientes."],
    ["Cantus firmus", "Melodía preexistente en notas largas que sirve de base."],
    ["Contrarreforma", "Respuesta católica a la Reforma, con el Concilio de Trento."],
    ["Anthem", "Obra coral religiosa anglicana en inglés."],
    ["Cromatismo", "Uso de semitonos fuera del modo o la escala."],
    ["Cancionero", "Colección manuscrita de canciones."],
    ["Vihuela", "Instrumento de cuerda pulsada español del siglo XVI."],
    ["Ricercare", "Obra instrumental contrapuntística, antecedente de la fuga."],
    ["Consort", "Conjunto de instrumentos de la misma familia."],
  ],
  situacion: {
    titulo: "Pintar con la voz",
    reto: "Crear un breve madrigal moderno que represente con la música el sentido de un poema.",
    pasos: [
      "Elegid un poema corto con palabras de movimiento o emoción.",
      "Señalad las palabras que queréis «pintar».",
      "Componed una melodía a tres voces con un madrigalismo para cada palabra.",
      "Interpretad y explicad cada recurso al resto de la clase.",
    ],
    producto: "Un madrigal breve interpretado y una ficha con sus madrigalismos.",
    evaluacion: [
      "Usa al menos tres madrigalismos reconocibles.",
      "Combina imitación y homofonía.",
      "Interpreta con afinación y empaste.",
      "Explica la relación texto-música.",
    ],
  },
  familias: [
    "Escuchad juntos una obra de Tomás Luis de Victoria en una iglesia o en casa.",
    "Buscad villancicos del Cancionero de Palacio y comparadlos con los navideños.",
    "Pedidle que os explique qué es un madrigalismo con un ejemplo cantado.",
    "Ved un vídeo de danzas renacentistas y contad los pasos.",
  ],
  saberes: "Análisis Musical II: la música del Renacimiento: polifonía imitativa y homofonía; misa, motete, coral y anthem; Reforma y Contrarreforma; madrigal y madrigalismos; villancico y romance; formas instrumentales (canzona, ricercare, fantasía, tocata, diferencias) y danzas en pareja.",
  ideas: [
    "Seguir con partitura las entradas de un motete marcando cada voz con un color.",
    "Comparar un coral luterano y un motete en la misma sesión.",
    "Bailar una pavana y una gallarda para sentir los compases.",
    "Buscar madrigalismos en canciones actuales.",
  ],
  fuentes: [
    { t: "Música del Renacimiento, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_del_Renacimiento" },
  ],
});
