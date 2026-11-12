// Música 1º ESO: la música en los medios. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La música en los medios",
  minutos: 50,
  objetivos: ["Reconocer las funciones de la música en el cine, la publicidad, la radio y los videojuegos", "Diferenciar música diegética y extradiegética", "Analizar cómo la música transmite emociones y mensajes", "Usar la música de forma responsable respetando los derechos de autor"],
  claves: ["banda sonora", "leitmotiv", "diegética", "sintonía", "jingle", "derechos de autor"],
  pregunta: {
    texto: "Si quitas el sonido a una escena de miedo, ¿da el mismo miedo?",
    respuesta: "Casi nunca. Gran parte de la tensión la crea la <b>música</b>: notas graves y largas, sonidos que suben poco a poco, silencios repentinos. <mark>La música dirige nuestras emociones</mark> sin que nos demos cuenta. Prueba a ver una escena de terror con música alegre: lo que da miedo se vuelve casi cómico.",
  },
  bloques: [
    {
      html: `<h3>Música por todas partes</h3><p>Hoy escuchamos más música que nunca, y gran parte nos llega a través de los <b>medios de comunicación</b>: cine, televisión, radio, publicidad, videojuegos, redes sociales y plataformas de streaming.</p><p>En los medios, la música casi nunca está «sola»: acompaña imágenes, palabras o acciones y cumple una <b>función</b>:</p><ul><li><b>Emocionar</b>: alegría, tensión, tristeza, épica.</li><li><b>Identificar</b>: un programa, una marca, un personaje.</li><li><b>Ambientar</b>: una época, un lugar, una cultura.</li><li><b>Unir</b> escenas y dar ritmo al montaje.</li><li><b>Vender</b>: hacer que recordemos un producto.</li></ul>`,
    },
    {
      html: `<h3>La música en el cine</h3><p>Desde el principio, el cine fue acompañado de música. En la época del <b>cine mudo</b> (hasta 1927), un pianista o una pequeña orquesta tocaba en directo en la sala mientras se proyectaba la película.</p><p>Hoy cada película tiene su <b>banda sonora</b>, que incluye todo lo que se oye: diálogos, efectos sonoros y música. La <b>música original</b> la escribe un <b>compositor</b> pensando en cada escena, y la graba normalmente una orquesta sinfónica, a veces mezclada con instrumentos electrónicos.</p><p>El compositor trabaja junto al director y mide la música al segundo para que encaje con la imagen: un golpe de platillo justo cuando se cierra una puerta, un silencio antes del susto.</p>`,
      video: vb("medB"),
    },
    {
      html: `<h3>Diegética y extradiegética</h3><p>Hay dos tipos de música en una película o serie:</p><ul><li><b>Diegética</b> (o de pantalla): suena <b>dentro de la historia</b> y los personajes la oyen. Un músico tocando en un bar, la radio de un coche, alguien cantando en la ducha.</li><li><b>Extradiegética</b> (o incidental): solo la oye el <b>espectador</b>. Es la orquesta que suena mientras el héroe corre o cuando dos personajes se despiden.</li></ul><p>A veces un director juega con ambas: una música que parecía de fondo resulta que la está escuchando el protagonista en sus auriculares. Ese cambio sorprende y hace reír o pensar.</p>`,
      svg: svg("Esquema: dentro de la pantalla, un personaje oye la radio (música diegética); fuera, el espectador oye la orquesta que el personaje no oye (extradiegética)", `<rect x="16" y="20" width="150" height="104" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="60" cy="58" r="10" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/><path d="M60 68 V 98 M60 78 l -14 10 M60 78 l 14 10 M60 98 l -10 18 M60 98 l 10 18" stroke="var(--pen)" stroke-width="2.5" fill="none"/><rect x="110" y="74" width="34" height="22" rx="4" fill="var(--leaf)" fill-opacity=".4" stroke="var(--leaf)" stroke-width="2"/>${t(127, 64, "♪", { s: 14, c: "var(--leaf)" })}${t(91, 142, "diegética: la oye el personaje", { s: 10, c: "var(--leaf)" })}<circle cx="218" cy="70" r="12" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2"/><path d="M206 98 Q 218 84 230 98" stroke="var(--sun)" stroke-width="2.5" fill="none"/>${t(218, 44, "♪ ♫", { s: 14, c: "var(--red)" })}${t(218, 118, "espectador", { s: 10, c: "var(--sun)" })}${t(130, 166, "extradiegética: solo la oye el público", { s: 10, c: "var(--red)" })}`),
    },
    {
      html: `<h3>Recursos de la música de cine</h3><ul><li><b>Leitmotiv</b>: un tema musical corto asociado a un personaje, un lugar o una idea. Cada vez que aparece, lo reconocemos, aunque no salga en pantalla. Es como una «firma» sonora.</li><li><b>Tema principal</b>: la melodía más reconocible de la película, que suele sonar en los títulos de crédito.</li><li><b>Mickeymousing</b>: la música imita exactamente cada movimiento, como en los dibujos animados (una escala que sube cuando alguien sube una escalera).</li><li><b>Contraste</b>: música alegre en una escena triste para crear ironía o inquietud.</li><li><b>Silencio</b>: quitar la música de golpe aumenta la tensión.</li></ul><p>Los timbres también «hablan»: los metales suenan heroicos, las cuerdas graves dan inquietud y una caja de música, nostalgia o misterio.</p>`,
    },
    {
      html: `<h3>Música y publicidad</h3><p>En un anuncio de 20 segundos la música tiene que captar la atención y quedarse en la memoria. Se usan varios recursos:</p>${tabla(["Recurso", "Qué es", "Para qué"], [["Jingle", "canción breve compuesta para la marca", "que repitamos el nombre del producto"], ["Logotipo sonoro", "melodía de 2 o 3 segundos", "identificar la marca al instante"], ["Canción conocida", "un éxito pagando sus derechos", "asociar el producto a una emoción"], ["Música ambiental", "fondo instrumental", "crear un clima: lujo, energía, calma"]])}<p>La publicidad busca que asociemos el producto con una <b>emoción agradable</b>. Escuchar con espíritu crítico nos ayuda a no dejarnos llevar: la música no hace mejor el producto.</p>`,
      video: vb("medB2"),
    },
    {
      html: `<h3>Radio, televisión y videojuegos</h3><ul><li>En la <b>radio</b>, donde no hay imagen, la música lo es todo: la <b>sintonía</b> identifica el programa, las <b>cuñas</b> y <b>ráfagas</b> separan secciones y la música de fondo acompaña la voz del locutor.</li><li>En la <b>televisión</b> y las series, la <b>cabecera</b> con su tema musical crea la identidad y nos avisa de que empieza el capítulo.</li><li>En los <b>videojuegos</b>, la música es <b>interactiva</b>: cambia según lo que hace el jugador. Se acelera cuando aparece un enemigo, se vuelve misteriosa en una cueva y triunfal al ganar. Los primeros videojuegos tenían melodías de pocas notas por limitaciones técnicas, pero hoy muchas bandas sonoras se graban con orquesta y se tocan en conciertos.</li></ul>`,
    },
    {
      html: `<h3>Derechos de autor y uso responsable</h3><p>La música tiene <b>autor</b>, y su obra está protegida por los <b>derechos de autor</b>. Eso significa que no podemos usar libremente cualquier canción en un vídeo, un anuncio o un videojuego.</p><ul><li>Para usar música protegida hay que pedir <b>permiso</b> o pagar una <b>licencia</b>.</li><li>Existe música con licencias <b>Creative Commons</b> o de <b>dominio público</b> que se puede usar respetando sus condiciones (por ejemplo, citando al autor).</li><li>Las obras de autores fallecidos hace más de 70 años suelen estar en dominio público, aunque las grabaciones concretas pueden seguir protegidas.</li></ul><p>Las redes sociales detectan automáticamente canciones protegidas y pueden silenciar o borrar un vídeo. Cuando hagas tus propios proyectos, la mejor opción es <b>componer tu propia música</b>.</p>`,
    },
    {
      html: `<h3>Analiza y crea</h3><p>Actividad 1: elige un anuncio o una escena de película de un minuto y analiza:</p><ol><li>¿Hay música diegética, extradiegética o ambas?</li><li>¿Qué emoción transmite? ¿Con qué instrumentos y a qué velocidad?</li><li>¿Hay leitmotiv, silencios o efectos que coinciden con la imagen?</li></ol><p>Actividad 2: con una aplicación sencilla de edición, pon <b>tres músicas distintas</b> a la misma escena de 30 segundos grabada por vosotros (alegre, misteriosa, épica) usando música propia o libre de derechos. Mostrad las tres versiones y comentad cómo cambia el significado de la escena.</p>`,
    },
  ],
  figura: {
    titulo: "La música en los medios en un vistazo",
    svg: filas("Resumen: funciones de emocionar, identificar y ambientar; cine con banda sonora y leitmotiv; diegética y extradiegética; publicidad con jingle; radio con sintonía; videojuegos con música interactiva; derechos de autor", [["Funciones", "emocionar · identificar · ambientar", "var(--pen)"], ["Cine", "banda sonora · leitmotiv", "var(--red)"], ["Tipos", "diegética / extradiegética", "var(--leaf)"], ["Publicidad", "jingle · logotipo sonoro", "var(--sun)"], ["Radio y juegos", "sintonía · música interactiva", "var(--inf)"], ["Derechos", "licencia · Creative Commons", "var(--ink)"]], 200),
  },
  video: vg("medV"),
  quiz: mezcla([
    { q: "La música que oyen los personajes dentro de la historia es…", o: ["diegética", "extradiegética", "un jingle"], a: 0, e: "De pantalla." },
    { q: "Un tema asociado a un personaje que se repite es un…", o: ["leitmotiv", "jingle", "eco"], a: 0, e: "Firma sonora." },
    { q: "En el cine mudo la música…", o: ["se tocaba en directo en la sala", "no existía", "venía grabada en la película"], a: 0, e: "Pianista u orquesta." },
    { q: "Una canción breve creada para una marca es un…", o: ["jingle", "leitmotiv", "himno"], a: 0, e: "Publicidad." },
    { q: "La música que identifica un programa de radio es la…", o: ["sintonía", "banda sonora", "nana"], a: 0, e: "Identidad." },
    { q: "En los videojuegos la música suele ser…", o: ["interactiva", "siempre igual", "inexistente"], a: 0, e: "Cambia con el jugador." },
    { q: "La música que imita cada movimiento de la imagen es…", o: ["mickeymousing", "contraste", "diegética"], a: 0, e: "Dibujos animados." },
    { q: "Para usar una canción protegida en un vídeo hay que…", o: ["tener permiso o licencia", "citar el título", "bajar el volumen"], a: 0, e: "Derechos de autor." },
    { q: "Creative Commons es un tipo de…", o: ["licencia", "instrumento", "compás"], a: 0, e: "Permite usos con condiciones." },
    { q: "Quitar la música de golpe en una escena suele…", o: ["aumentar la tensión", "relajar", "no cambiar nada"], a: 0, e: "Silencio expresivo." },
  ]),
  examen: mezcla([
    { q: "Un personaje pone un disco y suena una canción. Es música…", o: ["diegética", "extradiegética", "publicitaria"], a: 0, e: "La oye el personaje." },
    { q: "Música alegre en una escena trágica es un recurso de…", o: ["contraste", "mickeymousing", "leitmotiv"], a: 0, e: "Ironía o inquietud." },
    { q: "El objetivo principal de un logotipo sonoro es…", o: ["identificar la marca al instante", "contar una historia larga", "acompañar diálogos"], a: 0, e: "2-3 segundos." },
  ]),
  feynman: ["Qué funciones cumple la música en los medios", "Diferencia entre música diegética y extradiegética", "Qué es un leitmotiv", "Cómo usa la música la publicidad", "Por qué hay que respetar los derechos de autor"],
  mapa: mapa("MÚSICA Y MEDIOS", "var(--eso)", [
    ["Cine", "banda sonora · leitmotiv", "var(--red)"],
    ["Publicidad", "jingle · logo sonoro", "var(--sun)"],
    ["Radio, TV y juegos", "sintonía · interactiva", "var(--pen)"],
    ["Derechos", "licencias · CC", "var(--ink)"],
  ], 230),
  tarjetas: [
    ["Banda sonora", "Todo el sonido de una película: diálogos, efectos y música."],
    ["Música diegética", "La que oyen los personajes dentro de la historia."],
    ["Música extradiegética", "La que solo oye el espectador."],
    ["Leitmotiv", "Tema musical asociado a un personaje o idea."],
    ["Jingle", "Canción breve compuesta para un anuncio."],
    ["Sintonía", "Música que identifica un programa."],
    ["Música interactiva", "La que cambia según las acciones del jugador."],
    ["Derechos de autor", "Protección legal de una obra y su autor."],
  ],
  familias: ["Ved una escena de película sin sonido y luego con sonido: comentad las diferencias.", "Buscad juntos anuncios y adivinad la marca solo por su música.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La música en los medios audiovisuales: funciones, recursos, música y publicidad, videojuegos; uso responsable y derechos de autor; creación de bandas sonoras sencillas (RD 217/2022, Música, contextos y culturas; interpretación y creación).",
    ideas: ["Sonorizar un corto mudo de dominio público en grupos.", "Concurso de logotipos sonoros para el instituto.", "Análisis de la música de un videojuego que juegue la clase."],
  },
  fuentes: [RD, { t: "Creative Commons España", url: "https://creativecommons.org/licenses/?lang=es" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "En una escena, un músico callejero toca el acordeón y, cuando el protagonista se aleja, empieza a sonar una orquesta. Clasifica ambas músicas.", pasos: ["El acordeón está dentro de la historia y el personaje lo oye: diegética.", "La orquesta no está en la escena: extradiegética."], resultado: "Acordeón diegético; orquesta extradiegética." },
    { enunciado: "Propón la música para un anuncio de una bebida energética.", pasos: ["Emoción buscada: energía y movimiento.", "Tempo rápido, batería marcada, guitarras eléctricas o sintetizadores.", "Un logotipo sonoro de tres notas ascendentes al final."], resultado: "Música rápida, potente y con un final reconocible." },
    { enunciado: "Diseña un leitmotiv para un personaje misterioso de tu propia historia.", pasos: ["Instrumento de timbre oscuro: clarinete grave o violonchelo.", "Melodía corta de cuatro notas que baja y sube un semitono.", "Tempo lento y matiz piano."], resultado: "Un motivo breve, grave y suave que se repite cada vez que aparece." },
  ],
  errores: [
    "Pensar que la banda sonora es solo la música (incluye diálogos y efectos).",
    "Confundir música diegética con «música que suena alta».",
    "Creer que cualquier canción de internet se puede usar libremente.",
    "Pensar que la música de los anuncios es neutra y no influye.",
    "Creer que la música de videojuegos es siempre igual de principio a fin.",
  ],
  ejercicios: [
    { q: "Escribe cinco funciones de la música en los medios.", sol: "Emocionar, identificar, ambientar, unir escenas y vender." },
    { q: "¿Cómo era la música en el cine mudo?", sol: "Se tocaba en directo en la sala, con piano u orquesta." },
    { q: "Define música diegética y pon un ejemplo.", sol: "La que oyen los personajes; una radio que suena en la escena." },
    { q: "¿Qué es un leitmotiv?", sol: "Un tema musical asociado a un personaje, lugar o idea." },
    { q: "Diferencia un jingle de un logotipo sonoro.", sol: "El jingle es una canción breve; el logotipo sonoro, una melodía de 2-3 segundos." },
    { q: "¿Qué es la sintonía de un programa?", sol: "La música que lo identifica y abre." },
    { q: "Explica por qué la música de los videojuegos es interactiva.", sol: "Porque cambia según lo que hace el jugador." },
    { q: "¿Qué hay que hacer para usar una canción protegida en un vídeo?", sol: "Pedir permiso o pagar una licencia." },
    { q: "Elige un anuncio y describe su música: instrumentos, tempo y emoción.", sol: "Respuesta abierta." },
    { q: "Inventa un logotipo sonoro de tres o cuatro notas para tu clase y descríbelo.", sol: "Respuesta abierta." },
  ],
};
