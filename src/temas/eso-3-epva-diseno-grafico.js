// Educación Plástica, Visual y Audiovisual 3º ESO: diseño gráfico y publicidad. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Diseño gráfico y publicidad",
  minutos: 50,
  objetivos: ["Conocer qué es el diseño gráfico y sus campos", "Aplicar los principios de composición: jerarquía, alineación, contraste y espacio", "Diferenciar logotipo, isotipo e imagotipo y elegir tipografías", "Analizar críticamente los mensajes publicitarios y sus estrategias"],
  claves: ["diseño gráfico", "jerarquía visual", "tipografía", "logotipo", "cartel", "publicidad"],
  pregunta: {
    texto: "¿Por qué reconoces la marca de unas zapatillas solo con ver un pequeño símbolo, sin leer ninguna palabra?",
    respuesta: "Porque detrás hay un <mark>diseño gráfico</mark> pensado para ser simple, memorable y repetido en todas partes. La <b>identidad visual</b> de una marca (símbolo, colores y letra) funciona como una firma: el cerebro la asocia al producto en una fracción de segundo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el diseño gráfico?</h3><p>El <b>diseño gráfico</b> organiza imágenes, textos y colores para <mark>comunicar un mensaje de forma clara y atractiva</mark>. A diferencia del arte, que expresa la visión personal del artista, el diseño resuelve un encargo con un objetivo: informar, orientar, vender o identificar.</p><p>Está en todas partes:</p><ul><li><b>Identidad corporativa</b>: logotipos y colores de empresas.</li><li><b>Diseño editorial</b>: libros, revistas, periódicos.</li><li><b>Señalética</b>: señales de tráfico, aeropuertos, hospitales.</li><li><b>Packaging</b>: envases y etiquetas.</li><li><b>Diseño digital</b>: webs, aplicaciones, redes sociales.</li><li><b>Publicidad</b>: carteles, anuncios, banners.</li></ul>`,
    },
    {
      html: `<h3>Principios de composición</h3><p>Un buen diseño se lee sin esfuerzo porque sigue unos principios:</p><ul><li><b>Jerarquía</b>: lo más importante se ve primero (más grande, más contraste, más arriba).</li><li><b>Alineación</b>: los elementos se ordenan sobre ejes invisibles; nada se coloca al azar.</li><li><b>Contraste</b>: de tamaño, color o peso, para destacar y separar.</li><li><b>Proximidad</b>: lo que está relacionado se agrupa.</li><li><b>Repetición</b>: los mismos colores y letras dan unidad.</li><li><b>Espacio en blanco</b>: dejar aire hace que el mensaje respire. <mark>Menos es más</mark>.</li></ul><p>Muchos diseñadores trabajan sobre una <b>retícula</b>, una cuadrícula que ayuda a alinear.</p>`,
      svg: svg("Cartel con jerarquía: título grande arriba, imagen, texto pequeño y logotipo abajo, alineados a la izquierda", `<rect x="70" y="10" width="120" height="160" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M84 10 V 170" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="84" y="22" width="92" height="16" rx="2" fill="var(--ink)"/><rect x="84" y="44" width="60" height="6" rx="2" fill="var(--muted)"/>
        <rect x="84" y="58" width="92" height="56" rx="3" fill="var(--water)" fill-opacity=".5"/><circle cx="150" cy="78" r="10" fill="var(--sun)"/><path d="M84 114 L 112 88 L 132 104 L 148 94 L 176 114 Z" fill="var(--leaf)" fill-opacity=".7"/>
        <rect x="84" y="122" width="80" height="5" rx="2" fill="var(--muted)"/><rect x="84" y="131" width="70" height="5" rx="2" fill="var(--muted)"/><circle cx="92" cy="155" r="8" fill="var(--pen)"/>
        ${t(62, 32, "1", { c: "var(--red)", s: 14, a: "end" })}${t(62, 90, "2", { c: "var(--red)", s: 14, a: "end" })}${t(62, 132, "3", { c: "var(--red)", s: 14, a: "end" })}${t(198, 32, "título", { c: "var(--ink)", s: 10, a: "start" })}${t(198, 90, "imagen", { c: "var(--ink)", s: 10, a: "start" })}${t(198, 132, "texto", { c: "var(--ink)", s: 10, a: "start" })}${t(198, 158, "marca", { c: "var(--ink)", s: 10, a: "start" })}`),
      video: { id: "4fUbj8DzT6Q", titulo: "6 principios del diseño gráfico", canal: "Hey Jaime", vistas: 461330, megusta: 0 },
    },
    {
      html: `<h3>La tipografía</h3><p>La <b>tipografía</b> es el diseño de las letras. Cada familia de letras transmite una personalidad:</p>${tabla(["Tipo", "Rasgos", "Transmite"], [["<b>Con serifa</b> (romana)", "pequeños remates en los extremos", "tradición, seriedad; buena para textos largos impresos"], ["<b>Sin serifa</b> (palo seco)", "trazos limpios sin remates", "modernidad, claridad; ideal para pantallas y señales"], ["<b>Manuscrita</b>", "imita la escritura a mano", "cercanía, elegancia; solo en textos cortos"], ["<b>Decorativa</b>", "formas originales", "llama la atención; solo en títulos"]])}<p>Regla práctica: no uses más de <b>dos familias</b> en un mismo diseño y cuida la <b>legibilidad</b> (tamaño, contraste con el fondo, espacio entre líneas).</p>`,
    },
    {
      html: `<h3>La identidad visual: logotipos</h3><p>La <b>identidad visual</b> es el conjunto de elementos gráficos que representan a una empresa, un club o una institución. Su pieza central es la marca gráfica:</p><ul><li><b>Logotipo</b>: solo texto, con una tipografía propia.</li><li><b>Isotipo</b>: solo símbolo, sin texto.</li><li><b>Imagotipo</b>: símbolo y texto que pueden separarse.</li><li><b>Isologo</b>: símbolo y texto fundidos, inseparables.</li></ul><p>Un buen logo es <mark>simple, memorable, versátil</mark> (funciona en pequeño, en grande y en blanco y negro) y <b>adecuado</b> a lo que representa. Las empresas recogen sus normas de uso (colores exactos, tamaños mínimos) en un <b>manual de identidad corporativa</b>.</p>`,
      svg: svg("Tipos de marca gráfica: logotipo solo texto, isotipo solo símbolo, imagotipo símbolo más texto", `<rect x="14" y="40" width="72" height="80" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/>${t(50, 86, "LUNA", { c: "var(--pen)", s: 18, d: 1 })}
        <rect x="94" y="40" width="72" height="80" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/><circle cx="130" cy="80" r="22" fill="var(--sun)"/><circle cx="140" cy="72" r="20" fill="var(--card)"/>
        <rect x="174" y="40" width="72" height="80" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/><circle cx="206" cy="70" r="15" fill="var(--sun)"/><circle cx="213" cy="64" r="13" fill="var(--card)"/>${t(210, 106, "LUNA", { c: "var(--pen)", s: 14, d: 1 })}
        ${t(50, 140, "logotipo", { s: 11 })}${t(130, 140, "isotipo", { s: 11 })}${t(210, 140, "imagotipo", { s: 11 })}${t(130, 26, "una marca, tres versiones", { c: "var(--muted)", s: 11 })}`),
      video: { id: "blsrqSEsJAA", titulo: "Las 7 características de un buen logo", canal: "Hey Jaime", vistas: 857852, megusta: 0 },
    },
    {
      html: `<h3>El color en el diseño</h3><p>El color comunica antes que el texto. En diseño se eligen <b>paletas</b> reducidas (dos o tres colores principales) y se tienen en cuenta sus asociaciones culturales:</p><ul><li><b>Rojo</b>: energía, urgencia, pasión; muy usado en ofertas y comida rápida.</li><li><b>Azul</b>: confianza, calma, tecnología; bancos y redes sociales.</li><li><b>Verde</b>: naturaleza, salud, ecología.</li><li><b>Amarillo y naranja</b>: alegría, juventud, atención.</li><li><b>Negro</b>: elegancia, lujo.</li></ul><p>Además, hay que garantizar el <b>contraste</b> entre texto y fondo para que lo lea todo el mundo, incluidas las personas con baja visión o daltonismo. Recuerda: pantalla trabaja en <b>RGB</b> e imprenta en <b>CMYK</b>.</p>`,
    },
    {
      html: `<h3>El cartel</h3><p>El <b>cartel</b> es un mensaje que debe entenderse <mark>en pocos segundos</mark>, a menudo a distancia y por alguien que pasa caminando. Por eso:</p><ul><li>Tiene <b>una sola idea</b> principal.</li><li>Usa una <b>imagen potente</b> que atrae la mirada.</li><li>El <b>texto es breve</b>: un titular o eslogan y los datos imprescindibles (qué, cuándo, dónde).</li><li>Sigue una <b>jerarquía clara</b> con contraste de tamaños.</li></ul><p>Pioneros como <b>Toulouse-Lautrec</b> y <b>Alfons Mucha</b> convirtieron el cartel en arte a finales del siglo XIX. En España fue clave el cartelismo de la Guerra Civil y, más tarde, diseñadores como <b>Óscar Mariné</b> o <b>Javier Mariscal</b> (autor de Cobi, la mascota de Barcelona 92).</p>`,
    },
    {
      html: `<h3>La publicidad y sus estrategias</h3><p>La <b>publicidad</b> busca que compremos un producto o adoptemos una idea. Las <b>campañas institucionales</b> o sociales (contra el acoso, por el reciclaje) también usan sus técnicas. Algunas estrategias:</p>${tabla(["Estrategia", "Cómo funciona"], [["<b>Eslogan</b>", "frase breve y pegadiza que se recuerda"], ["<b>Famosos</b>", "una persona admirada recomienda el producto"], ["<b>Emoción</b>", "se asocia el producto a felicidad, amistad o familia"], ["<b>Pertenencia</b>", "«todos lo tienen»: miedo a quedarse fuera"], ["<b>Humor</b>", "hace que el anuncio se recuerde y se comparta"], ["<b>Exclusividad</b>", "«edición limitada», «solo hoy»"]])}`,
    },
    {
      html: `<h3>Leer la publicidad con espíritu crítico</h3><p>La publicidad no vende solo productos: también vende <b>estilos de vida</b> y modelos de belleza o de éxito, a veces irreales (fotos retocadas, cuerpos imposibles). También puede transmitir <b>estereotipos</b> de género, edad u origen.</p><p>En redes sociales, la publicidad se mezcla con el contenido: los <b>influencers</b> deben indicar cuándo una publicación es publicidad (#publi). Antes de dejarte convencer, pregúntate:</p><ul><li>¿Quién paga este mensaje y qué quiere que haga?</li><li>¿Qué emoción intenta despertar?</li><li>¿Qué <mark>no</mark> me está contando?</li></ul><p>En España, la publicidad engañosa y la que discrimina están prohibidas por ley.</p>`,
    },
    {
      html: `<h3>El proceso de diseño</h3><p>Los diseñadores siguen un método parecido al de cualquier proyecto:</p><ol><li><b>Briefing</b>: el encargo. ¿Qué hay que comunicar, a quién y dónde?</li><li><b>Investigación</b>: ver qué hace la competencia y buscar referencias.</li><li><b>Bocetos</b>: muchas ideas rápidas a lápiz, sin miedo a equivocarse.</li><li><b>Selección y desarrollo</b>: se elige la mejor y se pasa a limpio, normalmente en un programa digital (Canva, Inkscape, GIMP).</li><li><b>Prueba</b>: se comprueba en pequeño, en grande, en blanco y negro y con otras personas.</li><li><b>Arte final</b>: el archivo listo para imprimir o publicar.</li></ol>`,
    },
  ],
  figura: {
    titulo: "Claves del diseño gráfico",
    svg: `<svg viewBox="0 0 640 282" role="img" aria-label="Composición: jerarquía, alineación, contraste y espacio; tipografía: serifa, palo seco, dos familias como máximo; marca: logotipo, isotipo, imagotipo; cartel: una idea en pocos segundos; publicidad: estrategias y mirada crítica">
      <rect width="640" height="282" rx="16" fill="var(--paper)"/>
      ${[["Composición", "jerarquía · alineación · contraste · espacio", "var(--pen)"], ["Tipografía", "con serifa · palo seco · máximo dos familias", "var(--leaf)"], ["Marca", "logotipo · isotipo · imagotipo · manual", "var(--red)"], ["Cartel", "una idea · imagen potente · texto breve", "var(--inf)"], ["Publicidad", "estrategias · estereotipos · mirada crítica", "var(--ink)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "7N2v0bpNFKA", titulo: "Fundamentos del diseño: elementos básicos", canal: "LearnFree en Español", vistas: 614853, megusta: 0, busqueda: "diseño gráfico qué es" },
  quiz: mezcla([
    { q: "La principal diferencia entre diseño y arte es que el diseño…", o: ["resuelve un encargo con un objetivo comunicativo", "no usa colores", "siempre es digital"], a: 0, e: "Comunicar, orientar, vender, identificar." },
    { q: "Que lo más importante se vea primero es el principio de…", o: ["jerarquía", "repetición", "proximidad"], a: 0, e: "Tamaño, contraste, posición." },
    { q: "Las letras sin remates en los extremos se llaman…", o: ["con serifa", "de palo seco", "manuscritas"], a: 1, e: "Sans serif." },
    { q: "¿Cuántas familias tipográficas conviene usar como máximo en un diseño?", o: ["dos", "cinco", "todas las posibles"], a: 0, e: "Para dar unidad." },
    { q: "Una marca formada solo por un símbolo, sin texto, es un…", o: ["logotipo", "isotipo", "imagotipo"], a: 1, e: "Iso = símbolo." },
    { q: "Una marca formada solo por texto es un…", o: ["logotipo", "isotipo", "isologo"], a: 0, e: "Texto con tipografía propia." },
    { q: "Un cartel debe entenderse…", o: ["en pocos segundos", "tras leerlo con calma", "solo de cerca"], a: 0, e: "Una idea, imagen potente y texto breve." },
    { q: "El color más asociado a la confianza y la tecnología es el…", o: ["azul", "rojo", "amarillo"], a: 0, e: "Bancos y redes sociales." },
    { q: "«Edición limitada, solo hoy» es una estrategia de…", o: ["exclusividad", "humor", "famosos"], a: 0, e: "Urgencia y escasez." },
    { q: "La etiqueta #publi en una red social indica que…", o: ["la publicación es publicidad", "es un contenido educativo", "es una noticia"], a: 0, e: "Obligatorio para influencers." },
  ]),
  examen: mezcla([
    { q: "El documento que recoge las normas de uso de una marca es el…", o: ["manual de identidad corporativa", "briefing", "storyboard"], a: 0, e: "Colores, tamaños, versiones." },
    { q: "El encargo inicial que recibe un diseñador se llama…", o: ["briefing", "arte final", "boceto"], a: 0, e: "Qué, a quién y dónde." },
    { q: "Agrupar elementos relacionados es el principio de…", o: ["proximidad", "contraste", "alineación"], a: 0, e: "Lo cercano se percibe unido." },
  ]),
  feynman: ["Qué diferencia el diseño gráfico del arte", "Qué es la jerarquía visual y cómo se consigue", "Qué diferencia hay entre logotipo, isotipo e imagotipo", "Qué estrategias usa la publicidad y cómo analizarlas"],
  mapa: mapa("DISEÑO", "var(--eso)", [
    ["Composición", "jerarquía · espacio", "var(--pen)"],
    ["Tipografía", "serifa · palo seco", "var(--leaf)"],
    ["Marca", "logo · isotipo", "var(--red)"],
    ["Publicidad", "estrategias · crítica", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Diseño gráfico", "Organizar imagen, texto y color para comunicar un mensaje."],
    ["Jerarquía", "Lo más importante se ve primero."],
    ["Espacio en blanco", "Aire que hace que el diseño respire."],
    ["Serifa", "Pequeño remate en los extremos de las letras."],
    ["Isotipo", "Marca formada solo por un símbolo."],
    ["Imagotipo", "Símbolo y texto que pueden separarse."],
    ["Eslogan", "Frase breve y pegadiza de una campaña."],
    ["Briefing", "Encargo inicial: qué, a quién y dónde comunicar."],
  ],
  familias: ["Buscad en casa tres envases y comentad su color, su tipografía y a quién se dirigen.", "Al ver anuncios juntos, preguntaos qué estrategia usan y qué no cuentan.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Diseño gráfico: campos, principios de composición, tipografía, identidad visual, color, cartel; publicidad, estrategias persuasivas y lectura crítica (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Diseñar el logotipo de una asociación ficticia del centro siguiendo el proceso completo.", "Rediseñar un cartel saturado aplicando jerarquía y espacio en blanco.", "Crear una contracampaña que revele lo que un anuncio no cuenta."],
  },
  fuentes: [RD, { t: "Autocontrol: código de conducta publicitaria", url: "https://www.autocontrol.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Diseña el cartel de un concierto solidario del instituto el 15 de marzo en el gimnasio.",
      pasos: ["Idea única: la música une.", "Imagen potente: una guitarra cuyas cuerdas son manos entrelazadas.", "Jerarquía: 1) «Concierto solidario», 2) imagen, 3) fecha, hora y lugar, 4) logo del centro.", "Tipografía de palo seco, dos colores y mucho espacio en blanco."],
      resultado: "Un cartel que se entiende en tres segundos." },
    { enunciado: "Crea la marca gráfica de un club de lectura llamado «Páginas».",
      pasos: ["Bocetos: un libro abierto, una hoja, un ojo con forma de libro…", "Elegir el más simple: un libro abierto que forma una P.", "Probarlo en pequeño y en blanco y negro.", "Versiones: isotipo (la P-libro) e imagotipo (P-libro + «Páginas»)."],
      resultado: "Una marca simple, memorable y versátil." },
    { enunciado: "Analiza un anuncio de refresco en el que un grupo de amigos ríe en la playa.",
      pasos: ["Estrategia: emoción y pertenencia (amistad, verano, felicidad).", "No se habla del sabor ni del azúcar.", "Colores cálidos y luz de atardecer.", "Mensaje implícito: «con este refresco serás feliz y tendrás amigos»."],
      resultado: "Un anuncio que vende un estilo de vida más que un producto." },
  ],
  errores: [
    "Mezclar muchas tipografías y colores en un mismo diseño.",
    "Poner todo el texto del mismo tamaño, sin jerarquía.",
    "Llenar todo el espacio: sin aire, el mensaje se pierde.",
    "Escribir textos largos en un cartel.",
    "Diseñar un logo tan detallado que no se reconoce en pequeño.",
    "Creer que la publicidad solo informa, sin ver su intención persuasiva.",
  ],
  ejercicios: [
    { q: "Nombra cinco campos del diseño gráfico con un ejemplo de cada uno.", sol: "Identidad corporativa (logo de un club), editorial (revista), señalética (señales de un hospital), packaging (envase de cereales), digital (app)." },
    { q: "Explica los principios de jerarquía, alineación y contraste.", sol: "Jerarquía: lo importante se ve primero. Alineación: elementos ordenados sobre ejes. Contraste: diferencias de tamaño, color o peso para destacar." },
    { q: "¿Qué tipo de letra elegirías para la señalética de un aeropuerto? ¿Por qué?", sol: "Palo seco: es clara y legible a distancia y en tamaños pequeños." },
    { q: "Clasifica: una manzana mordida sin texto; la palabra de una marca en letras rojas; un símbolo más un nombre.", sol: "Isotipo, logotipo e imagotipo (o isologo si son inseparables)." },
    { q: "¿Qué colores usarías para una marca de productos ecológicos? Justifica.", sol: "Verdes y tonos tierra: se asocian a naturaleza y salud." },
    { q: "¿Qué tres datos imprescindibles debe tener el cartel de un evento?", sol: "Qué, cuándo y dónde." },
    { q: "Identifica la estrategia: «9 de cada 10 dentistas lo recomiendan».", sol: "Argumento de autoridad (expertos), parecido a la estrategia de los famosos." },
    { q: "¿Por qué hay que comprobar un logo en blanco y negro?", sol: "Porque se usará en sellos, fotocopias o fondos de un color, y debe seguir reconociéndose." },
    { q: "Busca un anuncio que transmita un estereotipo y explica cuál es.", sol: "Respuesta abierta; debe identificar el estereotipo (de género, edad, belleza…) y cómo aparece." },
    { q: "Diseña el cartel de una campaña de reciclaje para tu centro: boceto, jerarquía y eslogan.", sol: "Respuesta abierta. Se valora la idea única, la jerarquía, el espacio y un eslogan breve." },
  ],
};
