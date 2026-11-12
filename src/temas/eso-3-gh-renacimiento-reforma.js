// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figLinea, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "La Edad Moderna: el Renacimiento y la Reforma",
  minutos: 35,
  objetivos: ["Situar el comienzo de la Edad Moderna y sus grandes cambios", "Explicar el humanismo y las características del arte del Renacimiento", "Describir la Reforma protestante y la Contrarreforma católica"],
  claves: ["Edad Moderna", "humanismo", "imprenta", "Renacimiento", "Reforma protestante", "Contrarreforma"],
  pregunta: {
    texto: "Antes de 1450, un libro se copiaba a mano y podía tardar meses en terminarse. Cincuenta años después, en Europa circulaban ya millones de libros impresos. ¿Qué cambió para siempre con este invento?",
    respuesta: "La <mark>imprenta</mark> de Gutenberg permitió copiar libros deprisa y barato. Las ideas viajaban más rápido que nunca: así se difundieron el <b>humanismo</b>, los descubrimientos científicos y las ideas de <b>Lutero</b>, que dividieron la Iglesia. Fue una revolución de la información, como internet en nuestros días.",
  },
  bloques: [
    {
      html: `<h3>Una nueva época: la Edad Moderna</h3><p>La <b>Edad Moderna</b> empieza a finales del siglo XV, con la caída de Constantinopla en manos de los turcos (1453) o el descubrimiento de América (1492), y termina con la Revolución francesa (1789). En ella crecen la <b>población</b>, las <b>ciudades</b> y el <b>comercio</b>; la burguesía gana poder; los reyes refuerzan su autoridad (<mark>monarquías autoritarias</mark>), y Europa se expande por el mundo.</p>`,
      svg: linea("Inicio y fin de la Edad Moderna", [["1453", "caída de|Constantinopla"], ["1492", "llegada a|América"], ["1517", "Lutero:|Reforma"], ["1789", "Revolución|francesa"]], "var(--red)"),
    },
    {
      html: `<h3>El humanismo</h3><p>El <mark>humanismo</mark> fue un movimiento intelectual nacido en Italia en el siglo XIV que puso al <b>ser humano</b> en el centro de sus intereses (antropocentrismo), frente a la visión medieval centrada en Dios (teocentrismo). Los humanistas admiraban la cultura de <b>Grecia y Roma</b>, estudiaban latín, griego y hebreo, y confiaban en la razón y en la observación. Destacaron <b>Erasmo de Rotterdam</b>, <b>Tomás Moro</b> y, en España, <b>Antonio de Nebrija</b>, autor de la primera gramática del castellano (1492).</p>`,
      svg: dos("Teocentrismo medieval frente a antropocentrismo humanista", ["Edad Media", ["Dios en el centro", "fe y tradición", "latín de la Iglesia", "saber en", "monasterios"], "var(--muted)"], ["Humanismo", ["el ser humano", "en el centro", "razón y crítica", "griegos y romanos", "universidades"], "var(--pen)"]),
    },
    {
      html: `<h3>El arte del Renacimiento</h3><p>El <b>Renacimiento</b> fue un estilo artístico que nació en <b>Florencia</b> en el siglo XV (Quattrocento) y se extendió por Europa en el XVI (Cinquecento). Recuperó los modelos clásicos: columnas, arcos de medio punto y cúpulas en arquitectura; el <b>desnudo</b> y las proporciones perfectas en escultura; y la <mark>perspectiva</mark> en pintura, para crear sensación de profundidad. Los artistas contaban con <b>mecenas</b>, como la familia Médici o los papas, que les encargaban obras.</p>`,
      svg: filas("Rasgos del arte del Renacimiento", [["Modelo", "Grecia y Roma", "var(--pen)"], ["Arquitec.", "cúpulas · columnas · arcos", "var(--ink)"], ["Escultura", "desnudo · proporción", "var(--sun)"], ["Pintura", "perspectiva · realismo", "var(--red)"], ["Mecenas", "Médici · papas", "var(--leaf)"]]),
    },
    {
      html: `<h3>La Reforma protestante</h3><p>Muchos criticaban la corrupción de la Iglesia: lujo del clero y venta de <b>indulgencias</b> (perdón de los pecados a cambio de dinero). En 1517, el monje alemán <mark>Martín Lutero</mark> publicó sus 95 tesis contra ellas. Defendía que el ser humano se salva solo por la <b>fe</b>, que cada persona puede leer e interpretar la <b>Biblia</b> y que solo hay dos sacramentos. Rompió con el papa y nació el <b>luteranismo</b>. Después surgieron el <b>calvinismo</b> (Calvino, en Ginebra) y el <b>anglicanismo</b> (Enrique VIII, en Inglaterra).</p>`,
      svg: rueda("Las iglesias protestantes: luteranos en Alemania y Escandinavia, calvinistas en Suiza, anglicanos en Inglaterra y hugonotes en Francia", "REFORMA", [["luteranos", "var(--pen)"], ["calvinistas", "var(--red)"], ["anglicanos", "var(--leaf)"], ["hugonotes", "var(--muted)"]], "var(--ink)"),
    },
    {
      html: `<h3>La Contrarreforma</h3><p>La Iglesia católica respondió con la <mark>Contrarreforma</mark>. En el <b>Concilio de Trento</b> (1545–1563) reafirmó sus creencias: la salvación por la fe y las buenas obras, los siete sacramentos, la autoridad del papa y el culto a la Virgen y los santos. Al mismo tiempo, corrigió abusos y creó <b>seminarios</b> para formar a los sacerdotes. La <b>Compañía de Jesús</b>, fundada por <b>Ignacio de Loyola</b>, se dedicó a la educación y las misiones. Se reforzaron la <b>Inquisición</b> y el Índice de libros prohibidos.</p>`,
      svg: dos("Diferencias entre protestantes y católicos tras Trento", ["Protestantes", ["solo la fe", "libre lectura", "de la Biblia", "dos sacramentos", "sin papa"], "var(--pen)"], ["Católicos", ["fe y obras", "la Iglesia", "interpreta", "siete sacramentos", "autoridad del papa"], "var(--red)"]),
    },
  ],
  figura: {
    titulo: "Cronología del Renacimiento y la Reforma",
    svg: figLinea("Línea del tiempo de 1450 a 1563", [[50, "1450", "imprenta de Gutenberg", 1], [140, "1492", "gramática de Nebrija", 0], [250, "1508", "Capilla Sixtina", 1], [330, "1517", "95 tesis de Lutero", 0], [430, "1534", "Iglesia anglicana", 1], [520, "1545", "Concilio de Trento", 0], [630, "1563", "fin de Trento", 1]], [[50, 330, "Renacimiento", "var(--sun)"], [330, 640, "Reforma", "var(--pen)"]]),
  },
  video: { id: "f-n0PGITuD0", titulo: "El Renacimiento en 10 minutos", canal: "HistoriaEn10'", vistas: 1266076, megusta: 0, busqueda: "el renacimiento y el humanismo" },
  quiz: [
    { q: "¿Qué hecho se toma a menudo como inicio de la Edad Moderna?", o: ["La Revolución francesa", "El descubrimiento de América", "La caída de Roma"], a: 1, e: "1492, o la caída de Constantinopla en 1453." },
    { q: "El humanismo ponía en el centro…", o: ["a Dios", "al ser humano", "al rey"], a: 1, e: "Es el antropocentrismo." },
    { q: "¿Dónde nació el Renacimiento?", o: ["París", "Florencia", "Toledo"], a: 1, e: "En Italia, en el siglo XV." },
    { q: "¿Qué criticó Lutero en sus 95 tesis?", o: ["La venta de indulgencias", "La imprenta", "Las universidades"], a: 0, e: "En 1517." },
    { q: "¿Qué concilio organizó la Contrarreforma?", o: ["Nicea", "Trento", "Letrán"], a: 1, e: "Entre 1545 y 1563." },
  ],
  examen: [
    { q: "La técnica que da profundidad a la pintura renacentista es…", o: ["el claroscuro", "la perspectiva", "el mosaico"], a: 1, e: "Se basa en un punto de fuga." },
    { q: "La Iglesia anglicana la fundó…", o: ["Calvino", "Enrique VIII", "Lutero"], a: 1, e: "Al romper con el papa en 1534." },
    { q: "La Compañía de Jesús la fundó…", o: ["Ignacio de Loyola", "Erasmo", "Teresa de Jesús"], a: 0, e: "Se dedicó a la educación y las misiones." },
  ],
  feynman: ["Qué cambió al pasar de la Edad Media a la Moderna", "Qué es el humanismo y por qué fue importante la imprenta", "Cómo es el arte del Renacimiento", "Qué diferencias hay entre la Reforma y la Contrarreforma"],
  mapa: mapa("RENACIMIENTO Y REFORMA", "var(--sun)", [
    ["Edad Moderna", "1453/1492 – 1789", "var(--ink)"],
    ["Humanismo", "antropocentrismo · imprenta", "var(--pen)"],
    ["Renacimiento", "Florencia · perspectiva", "var(--sun)"],
    ["Reforma", "Lutero · Trento", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Humanismo", "Movimiento intelectual que pone al ser humano en el centro y admira la cultura clásica."],
    ["Mecenas", "Persona rica que protege y paga a artistas y sabios."],
    ["Indulgencias", "Perdón de las penas de los pecados que la Iglesia concedía, a veces a cambio de dinero."],
    ["Martín Lutero", "Monje alemán que en 1517 inició la Reforma protestante."],
    ["Concilio de Trento", "Reunión (1545–1563) que organizó la Contrarreforma católica."],
  ],
  familias: ["Buscad juntos una obra de Leonardo, Miguel Ángel o Rafael y comentad qué la hace renacentista.", "Mirad un edificio de vuestra ciudad con columnas o cúpula y pensad si imita lo clásico.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Edad Moderna, el humanismo, el arte del Renacimiento, la Reforma y la Contrarreforma (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Analizar «La escuela de Atenas» de Rafael: perspectiva y personajes.", "Debate en rol entre Lutero y un teólogo de Trento.", "Taller de imprenta con sellos de goma o tipos móviles."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo del Prado: el Renacimiento en sus colecciones", url: "https://www.museodelprado.es/coleccion/obras-de-arte" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer las grandes obras y artistas del Renacimiento italiano y español", "Explicar las consecuencias políticas de la división religiosa de Europa"],
  bloques: [
    { tras: "Una nueva época: la Edad Moderna", html: `<h3>Economía y sociedad en el siglo XVI</h3><p>La población europea se recuperó de las epidemias medievales y pasó de unos 60 a unos 90 millones de habitantes entre 1450 y 1600. La agricultura seguía ocupando a la mayoría, pero crecieron el <b>comercio</b> y la <b>artesanía</b>. Surgió un <mark>capitalismo comercial</mark>: banqueros como los Fugger o los Médici prestaban dinero a reyes y comerciantes, se crearon las primeras compañías y bolsas de comercio y se usaban letras de cambio. La sociedad seguía siendo <b>estamental</b>: nobleza y clero eran privilegiados, y el estado llano, la gran mayoría, pagaba impuestos. Dentro de este último, la <b>burguesía</b> de comerciantes y banqueros se enriqueció mucho.</p>` },
    { tras: "El humanismo", html: `<h3>La imprenta y la nueva ciencia</h3><p>Hacia 1450, <mark>Johannes Gutenberg</mark> creó en Maguncia (Alemania) la imprenta de <b>tipos móviles</b>: letras de metal sueltas que se combinaban para formar páginas. El primer gran libro impreso fue una Biblia. En 1500 ya había imprentas en más de 250 ciudades europeas. Los libros se abarataron, más personas aprendieron a leer y las ideas se difundieron como nunca. También cambió la ciencia: <b>Copérnico</b> propuso en 1543 que la Tierra gira alrededor del Sol (<b>heliocentrismo</b>), frente a la idea de que la Tierra era el centro del universo; y <b>Vesalio</b> describió con exactitud la anatomía humana estudiando cadáveres.</p>` },
    { tras: "El arte del Renacimiento", html: `<h3>Grandes artistas del Renacimiento</h3>${tabla(["Artista", "Disciplina", "Obra destacada"], [["Brunelleschi", "arquitectura", "cúpula de la catedral de Florencia"], ["Botticelli", "pintura", "El nacimiento de Venus"], ["Leonardo da Vinci", "pintura, ciencia, ingeniería", "La Gioconda, La última cena"], ["Miguel Ángel", "escultura, pintura, arquitectura", "David, Capilla Sixtina, cúpula de San Pedro"], ["Rafael", "pintura", "La escuela de Atenas"], ["Tiziano", "pintura (Venecia)", "retratos de Carlos V"]])}<p>En <b>España</b>, el Renacimiento llegó a principios del siglo XVI. En arquitectura destacan el estilo <mark>plateresco</mark>, con decoración muy fina como la de un platero (fachada de la Universidad de Salamanca), y el estilo sobrio de <b>El Escorial</b>, de Juan de Herrera. En pintura sobresale <b>El Greco</b>, con figuras alargadas y colores intensos, como en «El entierro del conde de Orgaz».</p>` },
    { tras: "La Contrarreforma", html: `<h3>Europa dividida: las guerras de religión</h3><p>La división religiosa provocó enfrentamientos durante más de un siglo. En Alemania, los príncipes luteranos y el emperador <b>Carlos V</b> lucharon hasta la <mark>Paz de Augsburgo</mark> (1555), que permitió a cada príncipe elegir la religión de su territorio. En Francia, católicos y calvinistas (los <b>hugonotes</b>) se enfrentaron en las guerras de religión, con matanzas como la de la noche de San Bartolomé (1572), hasta que el Edicto de Nantes (1598) concedió cierta tolerancia. Los Países Bajos se rebelaron contra Felipe II en parte por motivos religiosos. Al final, el <b>norte de Europa</b> quedó mayoritariamente protestante y el <b>sur</b>, católico, una división que todavía se aprecia hoy.</p>`, video: { id: "V1zdeV-q5u8", titulo: "La Reforma protestante y Lutero", canal: "Academia Play", vistas: 2733275, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "Observa un cuadro: hay un edificio con columnas clásicas, las líneas del suelo se juntan en un punto del fondo y los personajes tienen proporciones realistas. ¿De qué estilo es?", pasos: ["Columnas clásicas: inspiración en Grecia y Roma.", "Líneas que convergen en un punto: perspectiva lineal.", "Proporciones realistas: interés por el cuerpo humano."], resultado: "Es una pintura del Renacimiento, como «La escuela de Atenas» de Rafael." },
    { enunciado: "Compara la idea de salvación de Lutero y la del Concilio de Trento.", pasos: ["Lutero: el ser humano se salva solo por la fe en Dios; las obras no compran la salvación.", "Trento: la salvación llega por la fe y también por las buenas obras.", "Por eso Lutero rechazaba las indulgencias y Trento las mantuvo, aunque prohibió venderlas."], resultado: "Lutero: solo la fe. Trento: fe y buenas obras." },
    { enunciado: "Explica por qué la imprenta favoreció la Reforma protestante.", pasos: ["Las 95 tesis se imprimieron y circularon por Alemania en pocas semanas.", "Lutero tradujo la Biblia al alemán y se imprimieron miles de ejemplares.", "Así cada fiel podía leerla e interpretarla, como él defendía."], resultado: "Difundió muy deprisa las ideas de Lutero y la Biblia en lengua vulgar." },
  ],
  errores: [
    "Pensar que el Renacimiento rechazó la religión: la mayoría de las obras siguieron siendo religiosas.",
    "Confundir humanismo (movimiento intelectual) con Renacimiento (estilo artístico), aunque estén relacionados.",
    "Creer que Lutero quería crear una religión nueva: quería reformar la Iglesia.",
    "Confundir Reforma (protestante) con Contrarreforma (católica).",
    "Situar el Concilio de Trento antes de las tesis de Lutero: fue una respuesta posterior.",
  ],
  ejercicios: [
    { q: "¿Qué hechos marcan el comienzo y el final de la Edad Moderna?", sol: "Empieza con la caída de Constantinopla (1453) o el descubrimiento de América (1492) y termina con la Revolución francesa (1789)." },
    { q: "Define antropocentrismo y teocentrismo.", sol: "Antropocentrismo: el ser humano es el centro del interés y del conocimiento. Teocentrismo: Dios es el centro de todo." },
    { q: "¿Por qué fue tan importante la imprenta?", sol: "Abarató los libros, aumentó el número de lectores y permitió difundir rápidamente las ideas humanistas, científicas y religiosas." },
    { q: "Cita tres características de la arquitectura renacentista.", sol: "Uso de elementos clásicos (columnas, arcos de medio punto, frontones), cúpulas y proporción y simetría." },
    { q: "¿Qué era un mecenas? Pon un ejemplo.", sol: "Una persona poderosa que protegía y pagaba a artistas. Por ejemplo, Lorenzo de Médici en Florencia o el papa Julio II." },
    { q: "¿Qué defendía Lutero?", sol: "La salvación solo por la fe, la libre interpretación de la Biblia, solo dos sacramentos (bautismo y eucaristía) y el rechazo a la autoridad del papa." },
    { q: "¿Qué decidió el Concilio de Trento?", sol: "Reafirmar las creencias católicas (fe y obras, siete sacramentos, autoridad del papa, culto a la Virgen y los santos) y corregir abusos, por ejemplo creando seminarios." },
    { q: "¿Qué es el estilo plateresco? Pon un ejemplo.", sol: "El primer Renacimiento español, con decoración fina como la de un platero. Ejemplo: la fachada de la Universidad de Salamanca." },
    { q: "¿Qué estableció la Paz de Augsburgo?", sol: "Que cada príncipe alemán eligiera la religión de su territorio, católica o luterana (1555)." },
    { q: "¿Qué propuso Copérnico?", sol: "El heliocentrismo: la Tierra y los planetas giran alrededor del Sol." },
  ],
  quiz: [
    { q: "«La escuela de Atenas» la pintó…", o: ["Rafael", "Botticelli", "El Greco"], a: 0, e: "En el Vaticano." },
    { q: "El monasterio de El Escorial lo diseñó…", o: ["Brunelleschi", "Juan de Herrera", "Miguel Ángel"], a: 1, e: "Para Felipe II, con estilo sobrio." },
    { q: "Los calvinistas franceses se llamaban…", o: ["hugonotes", "anglicanos", "jesuitas"], a: 0, e: "Sufrieron la matanza de San Bartolomé." },
    { q: "El heliocentrismo sitúa en el centro…", o: ["la Tierra", "el Sol", "la Luna"], a: 1, e: "Lo propuso Copérnico en 1543." },
    { q: "Gutenberg trabajó en…", o: ["Maguncia", "Florencia", "Roma"], a: 0, e: "En Alemania, hacia 1450." },
  ],
  tarjetas: [
    ["Imprenta de tipos móviles", "Invento de Gutenberg (hacia 1450) que abarató los libros."],
    ["Plateresco", "Primer Renacimiento español, de decoración muy fina."],
    ["Paz de Augsburgo", "1555: cada príncipe alemán elige la religión de su territorio."],
  ],
});
