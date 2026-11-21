// Análisis Musical I, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "Análisis de obras de distintos estilos",
  minutos: 60,
  objetivos: [
    "Aplicar la guía completa de análisis a obras de épocas y estilos distintos",
    "Reconocer los rasgos musicales que caracterizan los grandes periodos de la música occidental",
    "Relacionar los elementos musicales con el contexto histórico y la función de la obra",
    "Redactar un comentario de audición ordenado y argumentado",
  ],
  claves: ["estilo", "contexto", "comentario de audición", "Barroco", "Clasicismo", "Romanticismo", "jazz", "música popular urbana"],
  pregunta: {
    texto: "Escuchas diez segundos de una obra que no conoces. ¿Podrías adivinar si es del siglo XVIII o de hace un año?",
    respuesta: "Casi siempre, sí. Cada época y cada estilo tienen una <mark>huella sonora</mark>: unos instrumentos, unas texturas, unas armonías y unas formas propias. Este tema reúne todo lo aprendido para que puedas reconocer esas huellas y escribir un comentario completo de cualquier obra.",
  },
  lectura: {
    titulo: "De Bach a los Beatles",
    html: `<p>En 1963, un crítico del diario <i>The Times</i> escribió que las canciones de los Beatles tenían «cadencias eolias», como las de Mahler. Los propios Beatles no tenían ni idea de qué era aquello: ninguno sabía leer partituras.</p>
    <p>La anécdota muestra dos cosas. Primera: el análisis musical sirve para cualquier música, sea una sinfonía o una canción pop. Segunda: los músicos populares usaban, de oído, recursos que la tradición clásica llevaba siglos empleando. En este tema aplicarás la guía de análisis a obras de estilos muy distintos y descubrirás qué los une y qué los separa.</p>`,
  },
  secciones: [2, 4, 2],
  bloques: [
    {
      h: "El estilo musical",
      html: `<p>El <b>estilo</b> es el conjunto de rasgos que comparten las obras de una época, un lugar, un género o un autor. Igual que reconocemos un edificio gótico por sus arcos apuntados, reconocemos una obra barroca por su bajo continuo o una canción de reguetón por su dembow.</p>
      <p>El estilo depende del <b>contexto</b>: la tecnología disponible (instrumentos, grabación), la función de la música (religiosa, cortesana, de concierto, de baile, comercial) y las ideas de cada época. Por eso el análisis no termina en los elementos: siempre hay que preguntarse <mark>por qué suena así</mark>.</p>`,
      svg: B.cronologia("Grandes periodos de la música occidental", [["Edad Media", "gregoriano"], ["1600", "Barroco"], ["1750", "Clasicismo"], ["1820", "Romanticismo"], ["1900", "s. XX"], ["1950", "pop y rock"]]),
      video: { id: "xTRj1X8Hd1s", titulo: "La historia de la música en menos de 10 minutos", canal: "La Cata Musical", vistas: 730484 },
    },
    {
      h: "La guía completa de comentario",
      html: `<p>Un <b>comentario de audición</b> se organiza en cuatro partes. <b>1. Ficha</b>: título, autor, fecha, género y plantilla. <b>2. Análisis de los elementos</b>: ritmo y tempo, melodía, armonía, textura y timbre. <b>3. Forma</b>: esquema con letras y minutaje. <b>4. Contexto y valoración</b>: época, estilo, función y opinión argumentada.</p>
      <p>No hace falta decirlo todo: es mejor señalar los <b>rasgos más característicos</b> y justificarlos con ejemplos («en el 1:12 entra el metal en fortísimo»).</p>`,
      svg: B.flujo("Partes del comentario de audición", ["Ficha técnica", "Elementos: ritmo, melodía, armonía, textura, timbre", "Forma con minutaje", "Contexto y valoración"]),
    },
    {
      h: "Analizar una obra barroca",
      html: `<p>El <b>Barroco</b> (1600-1750) se reconoce por el <b>bajo continuo</b> (un bajo con acordes del clave o el órgano), el <b>ritmo constante</b> e incesante, el contraste entre <b>solista y tutti</b> y el uso de la <b>polifonía</b> y la melodía acompañada.</p>
      <p>Ejemplo: el primer movimiento de «La primavera» de <b>Vivaldi</b> (1725). Ficha: concierto para violín y orquesta de cuerda. Elementos: compás 4/4, Allegro, tonalidad mayor, melodías imitativas de cantos de pájaros. Forma: <b>ritornello</b>, un estribillo orquestal que alterna con episodios del violín solista. Contexto: música descriptiva con un soneto como programa.</p>`,
      svg: B.formas("Forma ritornello del concierto barroco", [["Concierto", "A B A C A D A"]], "Tutti (A) y episodios del solista"),
    },
    {
      h: "Analizar una obra clásica",
      html: `<p>El <b>Clasicismo</b> (1750-1820) busca equilibrio y claridad: <b>melodías</b> cantables con frases simétricas de 4 + 4 compases, <b>melodía acompañada</b> con acompañamientos como el bajo de Alberti, armonía basada en I, IV y V, y formas claras como la <b>sonata</b>.</p>
      <p>Ejemplo: <i>Pequeña serenata nocturna</i> de <b>Mozart</b> (1787), primer movimiento. Ficha: serenata para cuerda. Elementos: 4/4, Allegro, Sol mayor, tema inicial en arpegio ascendente enérgico y segundo tema más suave. Forma sonata: exposición, desarrollo breve y reexposición. Contexto: música de entretenimiento para la sociedad vienesa.</p>`,
      svg: B.flujo("Forma sonata en la Pequeña serenata nocturna", ["Exposición: dos temas (Sol M → Re M)", "Desarrollo: breve, modulante", "Reexposición: temas en Sol M", "Coda: cierre enérgico"]),
    },
    {
      h: "Analizar una obra romántica",
      html: `<p>El <b>Romanticismo</b> (1820-1900) prioriza la expresión de los sentimientos: melodías amplias y apasionadas, <b>armonía más rica</b> con cromatismos y modulaciones, contrastes extremos de dinámica y tempo, orquestas enormes y piezas breves para piano de carácter íntimo.</p>
      <p>Ejemplo: Nocturno op. 9 n.º 2 de <b>Chopin</b> (1832). Ficha: piano solo. Elementos: compás de 12/8, Andante, melodía muy adornada en la mano derecha sobre un acompañamiento en la izquierda, uso del <i>rubato</i> (flexibilidad de tempo). Forma: ternaria con variaciones de la melodía en cada regreso. Contexto: el salón burgués y el piano como instrumento romántico.</p>`,
      svg: B.comparar("Clasicismo frente a Romanticismo", ["Clasicismo", ["equilibrio", "frases simétricas", "armonía clara", "formas fijas"]], ["Romanticismo", ["expresión", "melodías amplias", "cromatismo", "contrastes extremos"]]),
    },
    {
      h: "Analizar música del siglo XX, jazz y popular",
      html: `<p>El <b>siglo XX</b> rompe reglas: atonalidad, ritmos irregulares, nuevos timbres y electrónica. Erik Satie la anticipó con piezas sencillas y estáticas como las <i>Gymnopédies</i> (1888). El <b>jazz</b> aporta la improvisación, el swing, los acordes de séptima y la forma de tema y solos (AABA de 32 compases o blues de 12).</p>
      <p>La <b>música popular urbana</b> (pop, rock, hip hop, reguetón) usa el compás de 4/4, progresiones repetidas, la forma estrofa-estribillo y la tecnología de estudio. Ejemplo: «Yesterday» de los <b>Beatles</b> (1965): voz y guitarra con cuarteto de cuerda, Fa mayor con giros a re menor, forma AABA con puente. Un pop con recursos clásicos.</p>`,
      svg: B.rejilla("Rasgos de tres estilos del siglo XX", ["Estilo", "Rasgo", "Forma"], [["Jazz", "swing, improvisa", "AABA, blues"], ["Rock", "guitarra eléctrica", "estrofa-estribillo"], ["Electrónica", "sintetizador", "capas y bucles"], ["Hip hop", "rap, samples", "estrofa-gancho"]]),
      video: { id: "_c0WOFgfXyc", titulo: "La obra de piano más triste de la historia: Gymnopédie 1 de Satie", canal: "Jaime Altozano", vistas: 2608757 },
    },
    {
      h: "Comparar estilos",
      html: `<p>Comparar dos obras es una de las mejores formas de entender ambas. Elige un mismo elemento y obsérvalo en las dos: ¿cómo usa cada una la <b>textura</b>?, ¿qué papel tiene el <b>ritmo</b>?, ¿qué <b>instrumentos</b> emplea?, ¿qué <b>forma</b> sigue?</p>
      <p>Descubrirás continuidades sorprendentes (el estribillo del rondó y el del pop, el bajo ostinato barroco y el bucle electrónico) y diferencias que se explican por el <mark>contexto</mark>: la grabación, la tecnología o el público al que se dirige.</p>`,
      svg: B.rejilla("Un mismo elemento en cuatro épocas", ["", "Barroco", "Clásico", "Pop"], [["Textura", "polifonía", "mel. acomp.", "mel. acomp."], ["Ritmo", "constante", "regular", "4/4 backbeat"], ["Timbre", "clave, cuerda", "orquesta", "banda, sintes"], ["Forma", "ritornello", "sonata", "estrofa-estrib."]]),
    },
    {
      h: "Redactar el comentario",
      html: `<p>Al redactar, empieza por una <b>presentación</b> breve (qué obra es y a qué estilo pertenece). Después, describe los <b>elementos</b> y la <b>forma</b> con vocabulario técnico y ejemplos con minutaje. Termina con una <b>conclusión</b> que relacione lo escuchado con el contexto y aporte tu <b>valoración personal</b> razonada.</p>
      <p>Evita frases vacías («es muy bonita») y justifica siempre: «resulta solemne porque usa un tempo lento, textura homofónica y metal en forte».</p>`,
      svg: B.capas("Estructura del comentario escrito", [["Presentación", "obra y estilo"], ["Desarrollo", "elementos y forma"], ["Conclusión", "contexto y valoración"]]),
    },
  ],
  figura: {
    titulo: "Huellas de cada estilo",
    items: [["Barroco", "1600-1750", "bajo continuo", "ritmo constante"], ["Clasicismo", "1750-1820", "equilibrio", "forma sonata"], ["Romanticismo", "1820-1900", "expresión", "cromatismo"], ["S. XX y pop", "1900-hoy", "nuevos timbres", "estrofa-estribillo"]],
  },
  video: { id: "rI3vw0r0jd8", titulo: "¿Por qué los Beatles revolucionaron el pop? Análisis musical", canal: "Jaime Altozano", vistas: 2401286 },
  quiz: [
    ["El estilo musical es…", ["el título de una obra", "el conjunto de rasgos que comparten obras de una época, lugar o autor", "el instrumento principal", "el tempo"], 1, "Es la huella sonora común."],
    ["El bajo continuo es característico del…", ["Clasicismo", "Barroco", "Romanticismo", "pop"], 1, "Un bajo con acordes del clave u órgano."],
    ["La forma ritornello alterna…", ["estrofa y estribillo", "tutti orquestal y episodios del solista", "exposición y desarrollo", "dos coros"], 1, "Típica del concierto barroco."],
    ["Las frases simétricas y la claridad son rasgos del…", ["Clasicismo", "Barroco", "jazz", "siglo XX"], 0, "Busca equilibrio."],
    ["El rubato es…", ["un acorde", "una flexibilidad expresiva del tempo", "una forma", "un instrumento"], 1, "Muy usado en el Romanticismo."],
    ["El cromatismo y los contrastes extremos son propios del…", ["Romanticismo", "Barroco", "gregoriano", "Clasicismo"], 0, "La música expresa sentimientos intensos."],
    ["La improvisación y el swing caracterizan el…", ["Barroco", "jazz", "Clasicismo", "gregoriano"], 1, "Rasgos esenciales del jazz."],
    ["La primera parte de un comentario de audición es la…", ["valoración", "ficha técnica", "forma", "conclusión"], 1, "Título, autor, fecha, género y plantilla."],
    ["En «Yesterday», la voz y la guitarra se acompañan de…", ["una big band", "un cuarteto de cuerda", "un coro gregoriano", "un sintetizador"], 1, "Un recurso clásico en una canción pop."],
    ["En un comentario, decir solo «es muy bonita» es…", ["suficiente", "una valoración vacía que hay que justificar", "un análisis formal", "la ficha"], 1, "Hay que argumentar con elementos musicales."],
  ],
  examen: [
    ["Escuchas clave, cuerda, ritmo incesante y un violín solista que alterna con la orquesta. ¿Qué estilo es?", ["Romántico", "Barroco", "Jazz", "Pop"], 1, "Bajo continuo y contraste solista-tutti."],
    ["Una obra con melodía de frases 4 + 4, acompañamiento de Alberti y forma sonata es…", ["barroca", "clásica", "romántica", "electrónica"], 1, "Rasgos típicos del Clasicismo."],
    ["¿Qué tienen en común el estribillo del rondó y el del pop?", ["Nada", "Una sección que vuelve alternando con otras", "La instrumentación", "El compás de 3/4"], 1, "Ambos se basan en la repetición de un estribillo."],
    ["El Nocturno op. 9 n.º 2 de Chopin tiene textura de…", ["polifonía", "melodía acompañada", "monodia", "canon"], 1, "Melodía en la derecha y acompañamiento en la izquierda."],
    ["¿Por qué hay que relacionar el análisis con el contexto?", ["No hace falta", "Porque la función, la tecnología y la época explican por qué la obra suena así", "Para alargar el texto", "Porque lo dice el autor"], 1, "El contexto da sentido a los rasgos."],
  ],
  feynman: ["Qué es el estilo y de qué depende", "Las cuatro partes de un comentario de audición", "Rasgos del Barroco, Clasicismo y Romanticismo", "Qué une una sonata clásica y una canción pop"],
  mapa: ["ANÁLISIS DE OBRAS", [["Método", "ficha · elementos · forma · contexto"], ["Clásica", "Barroco · Clasicismo · Romanticismo"], ["Siglo XX", "jazz · rock · electrónica"], ["Comentario", "presentación · desarrollo · conclusión"]]],
  tarjetas: [
    ["Estilo", "Rasgos comunes de las obras de una época, lugar, género o autor."],
    ["Comentario de audición", "Ficha, elementos, forma y contexto con valoración."],
    ["Barroco", "1600-1750: bajo continuo, ritmo constante, contraste solista-tutti."],
    ["Clasicismo", "1750-1820: equilibrio, frases simétricas, forma sonata."],
    ["Romanticismo", "1820-1900: expresión, cromatismo, contrastes extremos."],
    ["Ritornello", "Estribillo orquestal que alterna con el solista."],
    ["Rubato", "Flexibilidad expresiva del tempo."],
    ["Jazz", "Improvisación, swing y acordes de séptima."],
  ],
  ejemplos: [
    ["Escribe la ficha técnica de «La primavera» de Vivaldi.", ["Título: «La primavera», primer movimiento (Allegro).", "Autor: Antonio Vivaldi, 1725.", "Género: concierto para violín solista.", "Plantilla: violín solista, cuerda y bajo continuo."], "Ficha completa con título, autor, fecha, género y plantilla."],
    ["Compara la textura de un coral de Bach y una canción de pop.", ["Coral: cuatro voces en bloque, homofonía.", "Pop: voz principal con acompañamiento de banda: melodía acompañada.", "En ambos la melodía va arriba, pero en el pop el acompañamiento tiene ritmo propio."], "Homofonía frente a melodía acompañada."],
    ["Redacta la conclusión de un comentario sobre el Nocturno op. 9 n.º 2 de Chopin.", ["Situar la obra en el Romanticismo.", "Relacionar su intimidad con el piano y el salón burgués.", "Valorar con argumentos musicales: melodía adornada, rubato, dinámica suave."], "«Es una obra romántica íntima: la melodía adornada y el rubato expresan una emoción personal propia del salón del siglo XIX.»"],
  ],
  errores: [
    "Contar la biografía del autor en lugar de analizar la música.",
    "Describir los elementos sin minutaje ni ejemplos concretos.",
    "Asignar un estilo por un solo rasgo, sin comprobar los demás.",
    "Valorar sin argumentos musicales.",
  ],
  ejercicios: {
    b: [
      ["Define estilo musical.", "El conjunto de rasgos musicales que comparten las obras de una época, un lugar, un género o un autor."],
      ["Enumera las cuatro partes de un comentario de audición.", "Ficha técnica, análisis de los elementos, forma y contexto con valoración."],
      ["Cita dos rasgos del Barroco y dos del Clasicismo.", "Barroco: bajo continuo y ritmo constante. Clasicismo: frases simétricas y forma sonata."],
      ["¿Qué es el rubato?", "Una flexibilidad expresiva del tempo que acelera y retiene ligeramente, típica del Romanticismo."],
    ],
    m: [
      ["Explica la forma ritornello.", "Un estribillo orquestal (ritornello) que vuelve varias veces, a menudo en distintas tonalidades, alternando con episodios del solista."],
      ["Compara el papel de la armonía en el Clasicismo y en el Romanticismo.", "En el Clasicismo es clara y basada en I, IV y V; en el Romanticismo se enriquece con cromatismos, acordes de séptima y modulaciones frecuentes para intensificar la expresión."],
      ["¿Qué rasgos clásicos encuentras en «Yesterday»?", "El cuarteto de cuerda, la melodía de frases equilibradas, la armonía con giros al relativo menor y una forma clara AABA."],
      ["¿Por qué es importante el contexto en un análisis?", "Porque explica los rasgos: la función, la tecnología y el público determinan instrumentos, duración, forma y carácter."],
    ],
    a: [
      ["Escribe un comentario completo de una obra barroca o clásica a elección con la guía del tema.", "Respuesta abierta: debe incluir ficha, elementos con minutaje, esquema formal y conclusión que relacione rasgos y contexto con valoración argumentada."],
      ["Compara una obra del siglo XVIII y una canción actual en tres elementos (textura, ritmo y forma).", "Respuesta abierta: tabla o texto que señale semejanzas (repetición, estribillo, melodía acompañada) y diferencias (instrumentación, tecnología, compás) justificadas por el contexto."],
    ],
  },
  glosario: [
    ["Estilo", "Conjunto de rasgos musicales comunes a un grupo de obras."],
    ["Contexto", "Circunstancias históricas, sociales y técnicas de una obra."],
    ["Plantilla", "Conjunto de instrumentos y voces de una obra."],
    ["Tutti", "Toda la orquesta tocando a la vez."],
    ["Ritornello", "Estribillo orquestal del concierto barroco."],
    ["Bajo de Alberti", "Acompañamiento en acordes desplegados típico del Clasicismo."],
    ["Cromatismo", "Uso de notas ajenas a la escala por semitonos."],
    ["Rubato", "Flexibilidad expresiva del tempo."],
    ["Improvisación", "Creación musical en el momento de la interpretación."],
    ["Música programática", "Música que describe una historia o una imagen."],
  ],
  situacion: {
    titulo: "Nuestra antología comentada",
    reto: "Elaborar entre toda la clase una antología de ocho obras de distintos estilos, cada una con su comentario de audición.",
    pasos: [
      "Repartid los estilos: Barroco, Clasicismo, Romanticismo, siglo XX, jazz, rock, pop y una música tradicional.",
      "Cada pareja elige una obra representativa y la escucha con la guía.",
      "Redactad el comentario con ficha, elementos, forma y contexto.",
      "Reunid los comentarios en una lista de reproducción comentada y presentadla.",
    ],
    producto: "Una antología digital con ocho obras comentadas y enlazadas.",
    evaluacion: [
      "El comentario sigue la estructura y usa minutaje.",
      "Identifica con acierto los rasgos de estilo.",
      "Relaciona los rasgos con el contexto.",
      "La valoración está argumentada.",
    ],
  },
  familias: [
    "Pedidle que os comente una obra de vuestra época favorita.",
    "Escuchad juntos «La primavera» de Vivaldi y una canción actual y comparad.",
    "Id a un concierto y comentad después la obra con la guía.",
    "Construid una lista de reproducción familiar de distintos estilos.",
  ],
  saberes: "Análisis Musical I: el estilo y el contexto; el comentario de audición (ficha, elementos, forma, contexto y valoración); rasgos del Barroco, Clasicismo, Romanticismo, siglo XX, jazz y música popular urbana; comparación de estilos.",
  ideas: [
    "Juego de «adivina la época» con fragmentos de diez segundos.",
    "Comentarios en parejas con rúbrica común.",
    "Comparar versiones clásicas y pop de una misma obra.",
    "Crear una antología digital colaborativa del grupo.",
  ],
  fuentes: [
    { t: "Las cuatro estaciones (Vivaldi), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Las_cuatro_estaciones_(Vivaldi)" },
    { t: "Yesterday (canción), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Yesterday" },
  ],
});
