// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "La forma musical",
  minutos: 60,
  objetivos: [
    "Reconocer motivo, semifrase, frase y periodo en una melodía",
    "Aplicar los principios de repetición, variación y contraste",
    "Identificar de oído y en partitura las formas binaria, ternaria, rondó, variaciones y canción",
    "Usar una forma sencilla para organizar una pieza propia",
  ],
  claves: ["motivo", "frase", "periodo", "repetición", "contraste", "binaria", "ternaria", "rondó"],
  pregunta: {
    texto: "¿Por qué sabes que una canción está a punto de terminar aunque no la hayas oído nunca?",
    respuesta: "Porque la música tiene <mark>forma</mark>: se organiza en frases que se responden, secciones que se repiten y contrastes que vuelven a la idea inicial. Tu oído aprende esos patrones sin darte cuenta y anticipa el final, igual que reconoces cuándo acaba una frase al hablar.",
  },
  lectura: {
    titulo: "El estribillo que se queda",
    html: `<p>¿Por qué algunas canciones se te quedan pegadas después de oírlas una sola vez? Los compositores de pop lo saben bien: el <b>estribillo</b> se repite varias veces, siempre igual, y entre medias las <b>estrofas</b> cuentan algo nuevo. La repetición da memoria; el contraste, interés.</p>
    <p>Ese mismo equilibrio lo buscaban Mozart en sus rondós y Bach en sus danzas. Cambian los instrumentos, los estilos y los siglos, pero la pregunta de fondo sigue siendo la misma: cuánto repetir y cuándo sorprender. Este tema te da las herramientas para verlo y usarlo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Del motivo a la frase",
      html: `<p>La música se construye como un texto. El <b>motivo</b> es la idea más pequeña con sentido, de dos a cuatro notas con un ritmo propio, como las cuatro notas de la <i>Quinta sinfonía</i> de Beethoven. Varios motivos forman una <b>semifrase</b>, y dos semifrases forman una <b>frase</b>, que suele durar 4 u 8 compases y termina con una cadencia.</p>
      <p>Al leer o tocar, conviene detectar dónde empieza y acaba cada frase: ahí se respira, se matiza y se da sentido a la música. Las frases se marcan con una <b>ligadura de expresión</b> larga.</p>`,
      svg: B.formas("De la idea más pequeña a la frase", [["Motivo", "A"], ["Semifrase", "A A'"], ["Frase", "A A' B A''"]]),
    },
    {
      h: "Pregunta y respuesta",
      html: `<p>Muchas melodías se organizan en <b>periodos</b>: dos frases que se contestan. La primera, el <b>antecedente</b>, termina en suspenso, normalmente con una semicadencia en el V, como una pregunta. La segunda, el <b>consecuente</b>, empieza igual o parecido y termina en la tónica con una cadencia auténtica, como una respuesta.</p>
      <p>Es lo que pasa en el «Himno de la alegría» de Beethoven: la primera frase queda abierta y la segunda, casi idéntica, la cierra.</p>
      <p>Componer con pregunta y respuesta es la forma más fácil de crear melodías equilibradas.</p>`,
      svg: B.melodia("Antecedente que sube y consecuente que vuelve a la tónica", [0, 1, 2, -1, 0, 1, -1, -2], { nombres: ["Mi", "Fa", "Sol", "Re", "Mi", "Fa", "Re", "Do"], perfil: true }),
    },
    {
      h: "Repetición, variación y contraste",
      html: `<p>La forma nace de tres principios. La <b>repetición</b> vuelve a presentar una idea igual y da unidad: el oyente reconoce y recuerda. La <b>variación</b> repite la idea con cambios (de ritmo, de instrumento, de tonalidad, de adornos): mantiene la unidad y añade interés. El <b>contraste</b> presenta una idea nueva y distinta, con otro carácter, que evita la monotonía.</p>
      <p>Para nombrar las secciones se usan <b>letras</b>: A para la primera idea, B para la que contrasta, A' para A variada.</p>
      <p>Una buena obra equilibra los tres: demasiada repetición aburre; demasiado contraste desorienta.</p>`,
      svg: B.cajas("Los tres principios de la forma", [["Repetición", "A A|unidad, memoria"], ["Variación", "A A'|unidad + interés"], ["Contraste", "A B|novedad"], ["Equilibrio", "ni monotonía|ni caos"]]),
    },
    {
      h: "Formas binaria y ternaria",
      html: `<p>La <b>forma binaria</b> (AB) tiene dos secciones distintas, a menudo repetidas cada una (AABB). Es típica de las danzas barrocas, como las de las suites de Bach.</p>
      <p>La <b>forma ternaria</b> (ABA) presenta una sección, un contraste y la vuelta a la primera. La vuelta de A da sensación de cierre y regreso a casa. La usan los minuetos con trío, muchas arias barrocas (<i>da capo</i>) y numerosas piezas románticas para piano.</p>
      <p>Una pista para reconocerla: si al final «vuelve» lo del principio, piensa en ABA.</p>`,
      svg: B.formas("Formas binaria y ternaria", [["Binaria", "A A B B"], ["Ternaria", "A B A"], ["Minueto", "A B A' Coda"]]),
      video: { id: "aAzNpGBfIfM", titulo: "Cuáles son las partes de una canción", canal: "Lapnayh PopMusic", vistas: 138313 },
    },
    {
      h: "Rondó y tema con variaciones",
      html: `<p>En el <b>rondó</b>, una sección principal (el <b>estribillo</b> A) vuelve una y otra vez, alternando con secciones distintas llamadas <b>coplas</b> o episodios: <b>ABACA</b> o ABACABA. Es una forma alegre y fácil de seguir; muchos últimos movimientos de sonatas y conciertos clásicos son rondós.</p>
      <p>En el <b>tema con variaciones</b> se presenta una melodía sencilla (A) y después se repite transformada varias veces: A A1 A2 A3… Cada variación puede cambiar el ritmo, el modo, la armonía o el acompañamiento. Mozart escribió doce variaciones sobre la melodía que conocemos como «Estrellita, ¿dónde estás?».</p>`,
      svg: B.formas("Rondó y tema con variaciones", [["Rondó", "A B A C A"], ["Variaciones", "A A' A'' A'''"]]),
    },
    {
      h: "La forma canción",
      html: `<p>La mayoría de la música popular actual usa la <b>forma canción</b>, que combina <b>estrofas</b> (misma música, letra diferente) y <b>estribillo</b> (misma música y misma letra, la parte más pegadiza). Suele haber además una <b>introducción</b>, un <b>preestribillo</b> que prepara la llegada del estribillo, un <b>puente</b> que aporta contraste antes del final y una <b>coda</b> o final.</p>
      <p>Un esquema típico: Intro - Estrofa - Estribillo - Estrofa - Estribillo - Puente - Estribillo - Coda.</p>
      <p>En el jazz es habitual la forma <b>AABA</b> de 32 compases.</p>`,
      svg: B.formas("Esquema típico de una canción pop", [["Canción", "In E Es E Es P Es"], ["Jazz", "A A B A"]]),
    },
    {
      h: "La forma sonata",
      html: `<p>La <b>forma sonata</b> es la gran forma del Clasicismo y la base de muchos primeros movimientos de sinfonías, sonatas y cuartetos. Tiene tres partes. La <b>exposición</b> presenta dos temas contrastantes, el segundo en otra tonalidad. El <b>desarrollo</b> trabaja esos temas, los fragmenta y pasa por varias tonalidades: es la zona de mayor tensión. La <b>reexposición</b> vuelve a presentar los dos temas, ahora en la tonalidad principal. Puede cerrar con una <b>coda</b>.</p>
      <p>Es, en el fondo, un gran ABA' con un drama tonal en el centro.</p>`,
      svg: B.flujo("Partes de la forma sonata", ["Exposición: tema 1 y tema 2", "Desarrollo: tensión y modulaciones", "Reexposición: temas en la tónica", "Coda: cierre"]),
      video: { id: "vghUx7TefYA", titulo: "¿Qué es una sonata? Su historia", canal: "Raquel Aller", vistas: 94890 },
    },
    {
      h: "Analizar y crear con la forma",
      html: `<p>Para descubrir la forma de una pieza al escucharla: <b>1.</b> anota el minuto de cada cambio importante (de melodía, instrumento o carácter); <b>2.</b> pon letras a cada sección (A, B, A'…); <b>3.</b> busca qué se repite y qué contrasta; <b>4.</b> compara el esquema con las formas conocidas.</p>
      <p>Para componer, la forma es un plano previo: decide antes cuántas secciones habrá, cuál se repite y dónde estará el contraste. Una pieza breve en <mark>ABA</mark> o un pequeño rondó son un buen punto de partida.</p>`,
      svg: B.rejilla("Ejemplo de análisis con minutaje", ["Minuto", "Sección", "Qué pasa"], [["0:00", "A", "tema principal"], ["0:40", "B", "nueva melodía, menor"], ["1:20", "A", "vuelve el tema"], ["2:00", "C", "otro contraste"], ["2:40", "A", "tema y final"]]),
    },
  ],
  figura: {
    titulo: "Claves de la forma musical",
    items: [["Frase", "4 + 4", "motivo, semifrase", "y frase"], ["Principios", "A A' B", "repetición, variación", "y contraste"], ["Formas", "AB · ABA", "rondó", "variaciones"], ["Canción", "E · Es · P", "estrofa, estribillo", "y puente"]],
  },
  video: { id: "2G6xMcUUbEA", titulo: "¿Qué es la forma sonata? Aprende su estructura", canal: "Liberty Park Music", vistas: 206873 },
  quiz: [
    ["La idea musical más pequeña con sentido es el…", ["periodo", "motivo", "estribillo", "puente"], 1, "Dos a cuatro notas con ritmo propio."],
    ["Una frase suele durar…", ["1 compás", "4 u 8 compases", "32 compases", "un movimiento"], 1, "Termina con una cadencia."],
    ["El antecedente de un periodo suele terminar en…", ["la tónica", "una semicadencia", "una coda", "un silencio largo"], 1, "Queda abierto, como una pregunta."],
    ["La variación consiste en…", ["repetir sin cambios", "repetir con cambios", "presentar algo totalmente nuevo", "terminar la obra"], 1, "Se escribe A'."],
    ["La forma ternaria es…", ["AB", "ABA", "ABACA", "AABA"], 1, "Vuelve la primera sección."],
    ["El rondó se caracteriza por…", ["un estribillo que vuelve entre coplas", "dos temas en tonalidades distintas", "una sola sección", "la improvisación"], 0, "ABACA."],
    ["En la forma canción, la parte con la misma música y la misma letra es…", ["la estrofa", "el estribillo", "el puente", "la intro"], 1, "La más pegadiza."],
    ["El puente de una canción aporta…", ["repetición", "contraste antes del final", "la introducción", "el final"], 1, "Rompe la alternancia estrofa-estribillo."],
    ["La parte de la forma sonata con más tensión y modulaciones es…", ["la exposición", "el desarrollo", "la reexposición", "la coda"], 1, "Trabaja y fragmenta los temas."],
    ["La forma típica del jazz de 32 compases es…", ["ABA", "AABA", "ABACA", "AB"], 1, "Tres veces A con un puente B."],
  ],
  examen: [
    ["Escuchas: tema 1, tema nuevo en menor, tema 1 de nuevo. ¿Qué forma es?", ["binaria", "ternaria", "rondó", "sonata"], 1, "ABA."],
    ["Una pieza suena A B A C A D A. ¿Qué forma es?", ["variaciones", "rondó", "binaria", "canción"], 1, "El estribillo A vuelve entre episodios."],
    ["Una melodía se repite cinco veces con cambios de ritmo y modo. Es…", ["un rondó", "un tema con variaciones", "una forma binaria", "una forma sonata"], 1, "A A1 A2 A3 A4."],
    ["Dos frases: la primera acaba en V y la segunda en I. Forman…", ["un motivo", "un periodo antecedente-consecuente", "un rondó", "un puente"], 1, "Pregunta y respuesta."],
    ["En la reexposición de la forma sonata, el segundo tema aparece…", ["en otra tonalidad", "en la tonalidad principal", "suprimido", "improvisado"], 1, "Todo se resuelve en la tónica."],
  ],
  feynman: ["La diferencia entre motivo, frase y periodo", "Los tres principios de la forma con un ejemplo", "Cómo distinguir de oído una forma ABA de un rondó", "Las partes de una canción pop"],
  mapa: ["LA FORMA MUSICAL", [["Unidades", "motivo · frase · periodo"], ["Principios", "repetición · variación · contraste"], ["Formas", "binaria · ternaria · rondó · variaciones"], ["Grandes formas", "canción · sonata"]]],
  tarjetas: [
    ["Motivo", "Idea musical mínima con sentido."],
    ["Frase", "Unidad de 4 u 8 compases cerrada por una cadencia."],
    ["Periodo", "Dos frases que se responden: antecedente y consecuente."],
    ["Forma binaria", "Dos secciones distintas: AB."],
    ["Forma ternaria", "Sección, contraste y vuelta: ABA."],
    ["Rondó", "Estribillo que alterna con coplas: ABACA."],
    ["Estribillo", "Sección que se repite con la misma música y letra."],
    ["Forma sonata", "Exposición, desarrollo y reexposición."],
  ],
  ejemplos: [
    ["Describe la forma de «Estrellita, ¿dónde estás?».", ["Primera frase (estrellita, dónde estás): A.", "Segunda frase, nueva melodía que desciende: B.", "Vuelve la primera frase: A."], "Forma ternaria ABA."],
    ["Una canción: intro, estrofa 1, estribillo, estrofa 2, estribillo, puente, estribillo ×2. Escribe su esquema.", ["Intro = In; estrofas = E; estribillo = Es; puente = P.", "Orden: In E Es E Es P Es Es."], "In - E - Es - E - Es - P - Es - Es: forma canción con puente."],
    ["Planifica un rondó de 40 compases.", ["Elige un estribillo A de 8 compases en Do mayor.", "Copla B de 8 compases en La menor.", "Copla C de 8 compases en Fa mayor.", "Orden: A B A C A."], "5 secciones × 8 compases = 40 compases en forma ABACA."],
  ],
  errores: [
    "Poner una letra nueva a una sección que solo está variada (debe ser A', no C).",
    "Confundir estrofa y estribillo: el estribillo repite también la letra.",
    "Pensar que la forma solo existe en la música clásica.",
    "No anotar el minutaje al analizar, lo que impide comprobar las repeticiones.",
  ],
  ejercicios: {
    b: [
      ["Define motivo, frase y periodo.", "Motivo: idea mínima. Frase: unidad de 4 u 8 compases con cadencia. Periodo: dos frases que se responden."],
      ["Escribe con letras las formas binaria, ternaria y rondó.", "AB, ABA y ABACA."],
      ["¿Qué diferencia hay entre estrofa y estribillo?", "La estrofa repite la música con letra distinta; el estribillo repite música y letra."],
      ["Nombra las tres partes de la forma sonata.", "Exposición, desarrollo y reexposición."],
    ],
    m: [
      ["¿Por qué la vuelta de A en la forma ternaria da sensación de final?", "Porque el oyente reconoce la idea inicial tras el contraste y lo vive como un regreso a casa que cierra el recorrido."],
      ["Explica la diferencia entre un rondó y un tema con variaciones.", "En el rondó la sección A vuelve igual entre secciones nuevas; en las variaciones no hay secciones nuevas, sino la misma melodía transformada cada vez."],
      ["Inventa un antecedente y un consecuente de 4 compases cada uno en Do mayor (con nombres de notas).", "Respuesta abierta: el antecedente debe acabar en una nota del acorde de Sol (Sol, Si o Re) y el consecuente, empezando igual, en Do."],
      ["¿Qué función tiene el puente en una canción?", "Aportar contraste (nueva melodía, armonía o intensidad) antes del último estribillo para que este vuelva con más fuerza."],
    ],
    a: [
      ["Analiza la forma de una canción actual con minutaje y letras. ¿Coincide con el esquema típico?", "Respuesta abierta: debe marcar los tiempos de cada sección, nombrarlas (intro, estrofa, preestribillo, estribillo, puente, coda) y compararlas con el esquema típico."],
      ["Compón una pieza breve en forma ABA para un instrumento o voz y explica qué contrasta en B.", "Respuesta abierta: A y su repetición deben coincidir; B debe contrastar en al menos un elemento (modo, ritmo, registro o carácter)."],
    ],
  },
  glosario: [
    ["Semifrase", "Mitad de una frase, formada por motivos."],
    ["Antecedente", "Primera frase de un periodo, termina en suspenso."],
    ["Consecuente", "Segunda frase de un periodo, termina en la tónica."],
    ["Copla", "Sección del rondó que alterna con el estribillo."],
    ["Puente", "Sección de contraste en una canción."],
    ["Preestribillo", "Fragmento que prepara la llegada del estribillo."],
    ["Desarrollo", "Parte de la forma sonata que transforma los temas."],
    ["Minutaje", "Anotación de los tiempos en que cambia cada sección."],
  ],
  situacion: {
    titulo: "Rondó de clase",
    reto: "Componer e interpretar en grupo un rondó en el que cada equipo crea una copla.",
    pasos: [
      "Entre todos se compone un estribillo A de 8 compases.",
      "Cada equipo crea una copla de 8 compases que contraste con A.",
      "Se decide el orden: A B A C A D A.",
      "Se ensaya, se interpreta y se graba.",
    ],
    producto: "La partitura o esquema del rondó y su grabación.",
    evaluacion: [
      "El estribillo se repite igual cada vez.",
      "Cada copla contrasta claramente con A.",
      "La forma final es reconocible al escucharla.",
      "Los enlaces entre secciones son fluidos.",
    ],
  },
  familias: [
    "Escuchad juntos una canción y contad cuántas veces suena el estribillo.",
    "Pedidle que os explique la forma de vuestra canción favorita con letras.",
    "Jugad a crear una frase musical que «pregunte» y otra que «responda».",
    "Escuchad un rondó clásico, como el «Rondó alla turca» de Mozart.",
  ],
  saberes: "Lenguaje y Práctica Musical: motivo, frase, semifrase y periodo; principios de repetición, variación y contraste; formas binaria, ternaria, rondó, tema con variaciones, forma canción y forma sonata; análisis auditivo de la forma y su uso en la creación (RD 243/2022).",
  ideas: [
    "Musicogramas con colores para cada sección.",
    "Análisis de la forma de canciones que propone el alumnado.",
    "Componer pregunta y respuesta en parejas.",
    "Montar un rondó de clase con coplas de cada grupo.",
  ],
  fuentes: [
    { t: "Forma musical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Forma_musical" },
    { t: "Rondó, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Rond%C3%B3" },
  ],
});
