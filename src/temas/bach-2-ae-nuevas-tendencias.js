// Artes Escénicas II, 2º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "Nuevas tendencias: performance, teatro físico y escena digital",
  minutos: 60,
  objetivos: [
    "Conocer las formas escénicas híbridas surgidas desde los años sesenta",
    "Distinguir performance, teatro físico, teatro de objetos, circo contemporáneo y teatro documental",
    "Analizar el uso de las tecnologías digitales en la escena actual",
    "Valorar las nuevas formas de relación con el público: inmersión y participación",
  ],
  claves: ["performance", "teatro físico", "teatro de objetos", "circo contemporáneo", "teatro documental", "inmersivo", "escena digital", "híbrido"],
  pregunta: {
    texto: "¿Puede una persona sentada en silencio durante horas ser un espectáculo?",
    respuesta: "Sí. En 2010 Marina Abramović pasó más de setecientas horas sentada mirando, uno a uno, a los visitantes de un museo. Era una <mark>performance</mark>: una acción real, en un tiempo real, ante un público. Hoy la escena mezcla arte, cuerpo y tecnología sin fronteras fijas.",
  },
  lectura: {
    titulo: "Teatro con el móvil encendido",
    html: `<p>Por una vez, el aviso al entrar es el contrario: «Mantengan el móvil encendido». La compañía ha creado una obra en la que el público vota desde su teléfono qué decisión toma la protagonista. Las respuestas aparecen proyectadas en el fondo y la actriz improvisa según el resultado.</p>
    <p>En la segunda parte, los espectadores bajan al escenario y recorren una casa construida con cartón, donde unos objetos animados cuentan el pasado de la familia. A la salida, un alumno lo resume: «Ha sido teatro, videojuego, exposición y circo a la vez». Sin saberlo, acaba de definir la escena híbrida del siglo XXI.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "La performance",
      html: `<p>La <b>performance</b> nace en los años sesenta y setenta desde las artes plásticas. El artista no representa un personaje: realiza una <b>acción real</b>, a menudo con su propio cuerpo, en un tiempo y un lugar concretos. No suele repetirse y a veces implica riesgo o resistencia física.</p>
      <p>Destacan Marina Abramović, Joseph Beuys, Yoko Ono o el grupo Fluxus, y en España Esther Ferrer. La performance borra la frontera entre arte y vida, y entre artista y espectador. Muchas performances solo se conservan en fotos, vídeos y relatos, lo que plantea cómo guardar la memoria de un arte efímero.</p>`,
      svg: B.comparar("Teatro de personaje frente a performance", ["Teatro", ["personaje ficticio", "tiempo de la ficción", "se repite cada función", "escenario"]], ["Performance", ["el propio artista", "tiempo real", "acción única", "cualquier lugar"]]),
      video: { id: "EmMTKdUAokM", titulo: "El caso del performance art. La tarea de arte", canal: "The Art Assignment (PBS)", vistas: 652835 },
    },
    {
      h: "Teatro físico y teatro visual",
      html: `<p>El <b>teatro físico</b> cuenta sobre todo con el <b>cuerpo</b>: movimiento, acrobacia, mimo y gesto sustituyen a buena parte del texto. Herederos de Lecoq y de la danza-teatro, compañías como DV8 o Complicité mezclan danza y teatro con gran precisión.</p>
      <p>El <b>teatro visual</b> construye el sentido con imágenes, luz y objetos. En España, compañías como <b>La Fura dels Baus</b> o <b>Els Comediants</b> crearon un lenguaje propio de gran impacto visual, en la calle y en grandes espacios, como la ceremonia de los Juegos Olímpicos de Barcelona 1992.</p>`,
      svg: B.cajas("Lenguajes del teatro físico", [["Movimiento", "danza y gesto"], ["Acrobacia", "riesgo y destreza"], ["Mimo", "acción sin objeto"], ["Imagen", "luz y composición"]]),
      video: { id: "Qx-WEL0_6Hk", titulo: "ACCIONS (1984). Performance. La Fura dels Baus", canal: "Marcel·lí Antúnez Roca", vistas: 64043 },
    },
    {
      h: "Teatro de objetos y títeres para adultos",
      html: `<p>En el <b>teatro de objetos</b>, cosas cotidianas (una tetera, un zapato, un periódico) se convierten en personajes. El manipulador está a la vista y el público acepta el juego. Los <b>títeres</b> ya no son solo para niños: hay montajes para adultos con marionetas de gran tamaño o de técnica japonesa (bunraku), manipuladas por varias personas.</p>
      <p>Es un lenguaje muy poético y económico, ideal para el aula, porque obliga a pensar qué significa cada objeto y cómo se mueve. La mirada del manipulador hacia el objeto es la que le da vida ante el público.</p>`,
      svg: B.estrella("Formas de animación", "Objeto vivo", ["Títere de guante", "Marioneta de hilo", "Bunraku", "Sombras", "Objeto cotidiano", "Gran formato"]),
    },
    {
      h: "El circo contemporáneo",
      html: `<p>El <b>nuevo circo</b> o circo contemporáneo nace en Francia y Canadá en los años setenta y ochenta. Mantiene las técnicas circenses (acrobacia, malabares, equilibrios, aéreos, clown), pero elimina los animales y la sucesión de números para construir un <b>espectáculo con dramaturgia</b>, música en directo y una idea que lo une todo.</p>
      <p>Compañías como el Cirque du Soleil popularizaron el formato y en España existen escuelas como la Escola de Circ Rogelio Rivel y festivales como Trapezi en Reus o el Circada de Sevilla, además de numerosas compañías de circo de calle.</p>`,
      svg: B.comparar("Circo tradicional frente a circo contemporáneo", ["Tradicional", ["números sueltos", "animales", "presentador", "carpa"]], ["Contemporáneo", ["dramaturgia unitaria", "sin animales", "música y teatro", "teatros y calle"]]),
    },
    {
      h: "Teatro documental y verbatim",
      html: `<p>El <b>teatro documental</b> utiliza materiales reales: entrevistas, juicios, informes, noticias o testimonios. En el teatro <b>verbatim</b> los actores reproducen palabra por palabra lo que dijeron personas reales. A veces son esas mismas personas, sin formación actoral, quienes suben al escenario, como en los montajes de Rimini Protokoll.</p>
      <p>Este teatro investiga temas actuales (migraciones, memoria histórica, trabajo, tecnología) y plantea preguntas éticas sobre cómo representar a personas reales.</p>`,
      svg: B.flujo("Crear teatro documental", ["Elegir un tema real", "Investigar: entrevistas y documentos", "Seleccionar y ordenar el material", "Ponerlo en escena con rigor y respeto"]),
    },
    {
      h: "Teatro inmersivo y participativo",
      html: `<p>En el <b>teatro inmersivo</b> no hay butacas: el público recorre un edificio entero, elige qué escenas sigue y a veces interactúa con los personajes. Ejemplos famosos son <i>Sleep No More</i> en Nueva York o los espectáculos de recorrido en casas y hoteles.</p>
      <p>En el <b>teatro participativo</b> el público toma decisiones, aporta objetos o historias o se convierte en parte de la acción. El <b>Teatro del Oprimido</b> de Augusto Boal permite que los espectadores salgan a escena para cambiar una situación injusta.</p>`,
      svg: B.escenarios("Del público enfrente al público dentro de la escena"),
    },
    {
      h: "La escena digital",
      html: `<p>La tecnología se ha integrado en el escenario: <b>proyecciones</b> y <i>video mapping</i> sobre la escenografía, cámaras que muestran en pantalla primeros planos en directo, <b>sensores</b> que convierten el movimiento en sonido o luz, pantallas LED y realidad virtual.</p>
      <p>También existen obras para ver por <b>internet</b>, espectáculos en videojuegos y piezas creadas con inteligencia artificial. La pregunta clave es si la tecnología sirve a la idea o se convierte en un simple efecto. Tampoco hay que olvidar el coste, la fiabilidad técnica y la accesibilidad.</p>`,
      svg: B.cajas("Herramientas de la escena digital", [["Video mapping", "imagen sobre objetos"], ["Cámara en directo", "primer plano"], ["Sensores", "cuerpo que suena"], ["Realidad virtual", "otro espacio"]]),
    },
    {
      h: "Analizar una propuesta híbrida",
      html: `<p>Ante un espectáculo híbrido conviene preguntarse: ¿qué <b>disciplinas</b> mezcla?, ¿qué <b>relación</b> establece con el público (frontal, recorrido, participación)?, ¿qué papel tienen el <b>cuerpo</b> y la <b>tecnología</b>?, ¿hay ficción o realidad?</p>
      <p>Por último, hay que valorar si la mezcla aporta algo que una sola disciplina no podría conseguir. Las mejores propuestas no suman lenguajes por moda, sino porque la idea lo necesita.</p>`,
      svg: B.rejilla("Ficha de análisis de un espectáculo híbrido", ["Pregunta", "Ejemplo de respuesta"], [["Disciplinas", "danza + vídeo"], ["Público", "recorre el espacio"], ["Cuerpo", "acrobacia"], ["Tecnología", "sensores"], ["Real/ficción", "testimonios"]]),
    },
  ],
  figura: {
    titulo: "La escena híbrida en cuatro claves",
    items: [["Acción", "●", "performance:", "tiempo real"], ["Cuerpo", "✋", "teatro físico", "y circo"], ["Realidad", "✎", "teatro", "documental"], ["Pantalla", "▣", "escena", "digital"]],
  },
  video: { id: "Ky1ejLB_UFw", titulo: "La tecnología que hace posible la magia del Teatro Real", canal: "El Futuro Es Apasionante de Vodafone", vistas: 188479 },
  quiz: [
    ["La performance nace principalmente desde…", ["la ópera", "las artes plásticas", "el ballet", "la zarzuela"], 1, "Años sesenta y setenta."],
    ["En la performance, el artista normalmente…", ["representa un personaje", "realiza una acción real con su cuerpo", "lee un texto", "se esconde"], 1, "Tiempo y acción reales."],
    ["El teatro físico cuenta sobre todo con…", ["el texto", "el cuerpo y el movimiento", "el decorado", "la música grabada"], 1, "Gesto, acrobacia, mimo."],
    ["El bunraku es una técnica de…", ["iluminación", "títeres japoneses", "danza india", "canto"], 1, "Varios manipuladores."],
    ["El circo contemporáneo se diferencia del tradicional en que…", ["usa más animales", "tiene una dramaturgia unitaria", "no tiene acrobacias", "no tiene música"], 1, "Un espectáculo con idea común."],
    ["En el teatro verbatim…", ["se inventan los diálogos", "se reproducen palabra por palabra testimonios reales", "no hay texto", "solo hay música"], 1, "Teatro documental."],
    ["En el teatro inmersivo el público…", ["se sienta en butacas", "recorre el espacio y elige qué ver", "no asiste", "solo escucha"], 1, "Dentro de la acción."],
    ["El Teatro del Oprimido fue creado por…", ["Augusto Boal", "Peter Brook", "Pina Bausch", "Brecht"], 0, "Participación para el cambio social."],
    ["El video mapping consiste en…", ["grabar la función", "proyectar imágenes ajustadas sobre objetos o escenografía", "vender entradas online", "iluminar con velas"], 1, "Proyección sobre volúmenes."],
    ["Una pregunta clave ante la tecnología en escena es…", ["cuánto cuesta", "si sirve a la idea o es un simple efecto", "si es nueva", "si es grande"], 1, "Uso con sentido."],
  ],
  examen: [
    ["Una artista se sienta seis horas en un museo y permite al público interactuar con ella. Es…", ["una zarzuela", "una performance", "un ballet", "un musical"], 1, "Acción real y duración real."],
    ["Una obra en la que vecinos reales cuentan cómo perdieron su casa, con sus propias palabras, es…", ["teatro documental", "teatro del absurdo", "ópera", "teatro de objetos"], 0, "Testimonios reales."],
    ["Una compañía usa un zapato y una tetera como protagonistas de una historia de amor. Hace…", ["teatro de objetos", "circo", "verbatim", "performance"], 0, "Objetos cotidianos animados."],
    ["Un espectáculo de acrobacias y malabares unido por la historia de una familia y música en directo es…", ["circo tradicional", "circo contemporáneo", "ópera", "danza-teatro"], 1, "Dramaturgia unitaria."],
    ["Los espectadores recorren un hotel y siguen a los personajes que eligen. Es teatro…", ["a la italiana", "inmersivo", "radiofónico", "épico"], 1, "Público dentro de la acción."],
  ],
  feynman: ["Qué diferencia la performance del teatro", "Qué es el teatro físico", "Qué es el teatro documental", "Cómo usar la tecnología con sentido"],
  mapa: ["NUEVAS TENDENCIAS", [["Acción", "performance · happening · Abramović"], ["Cuerpo", "teatro físico · circo · objetos"], ["Realidad", "documental · verbatim · Boal"], ["Tecnología", "mapping · sensores · inmersión"]]],
  tarjetas: [
    ["Performance", "Acción artística real del propio artista ante un público."],
    ["Teatro físico", "Teatro que cuenta con el cuerpo, el gesto y el movimiento."],
    ["Teatro de objetos", "Teatro en que objetos cotidianos son personajes."],
    ["Circo contemporáneo", "Circo con dramaturgia unitaria y sin animales."],
    ["Verbatim", "Teatro que reproduce palabra por palabra testimonios reales."],
    ["Teatro inmersivo", "El público recorre y habita el espacio de la acción."],
    ["Teatro del Oprimido", "Método de Boal en el que el público interviene para cambiar la escena."],
    ["Video mapping", "Proyección de imágenes ajustada a volúmenes y superficies."],
  ],
  ejemplos: [
    ["Clasifica: Sleep No More, Cirque du Soleil, Rimini Protokoll, Marina Abramović.", ["Sleep No More: teatro inmersivo.", "Cirque du Soleil: circo contemporáneo.", "Rimini Protokoll: teatro documental.", "Abramović: performance."], "Cada propuesta pertenece a una tendencia distinta."],
    ["Diseña una escena de teatro de objetos sobre una ruptura.", ["Dos tazas como personajes.", "Se acercan, se tocan y una se aleja por la mesa.", "La que queda se llena de agua (lágrimas) hasta desbordarse."], "Imagen poética con objetos cotidianos."],
    ["Propón un uso con sentido de la cámara en directo.", ["Idea: la soledad de un personaje en una fiesta.", "La cámara muestra su cara en primer plano en una pantalla grande.", "Mientras, en escena, se ve pequeño entre la gente."], "La tecnología muestra lo que el ojo no ve: el contraste interior y exterior."],
  ],
  errores: [
    "Pensar que performance y teatro son exactamente lo mismo.",
    "Usar tecnología en escena solo porque es llamativa.",
    "Creer que el teatro documental no necesita dramaturgia.",
    "Considerar los títeres y el circo como artes solo para niños.",
  ],
  ejercicios: {
    b: [
      ["Define performance.", "Acción artística real, realizada por el propio artista en un tiempo y lugar concretos ante un público."],
      ["Nombra tres técnicas circenses.", "Acrobacia, malabares, equilibrios, aéreos o clown."],
      ["¿Qué es el teatro verbatim?", "Teatro documental que reproduce literalmente las palabras de personas reales."],
      ["Cita dos herramientas de la escena digital.", "Video mapping, cámara en directo, sensores, pantallas LED o realidad virtual."],
    ],
    m: [
      ["Compara el circo tradicional con el contemporáneo.", "El tradicional encadena números, usa animales y un presentador; el contemporáneo crea un espectáculo con dramaturgia unitaria, sin animales y con música y teatro."],
      ["¿Qué problemas éticos plantea el teatro documental?", "Cómo representar a personas reales con respeto, contar con su permiso, no manipular sus palabras y cuidar su intimidad."],
      ["Explica cómo funciona el Teatro del Oprimido.", "Se representa una situación de injusticia y los espectadores pueden detenerla, salir a escena y probar soluciones."],
      ["¿Qué aporta el teatro inmersivo frente al teatro a la italiana?", "El espectador elige su recorrido, está cerca de la acción y vive una experiencia más personal y activa."],
    ],
    a: [
      ["Diseñad una performance de cinco minutos sobre el uso del móvil y presentadla en un espacio del centro.", "Respuesta abierta. Debe ser una acción real, con duración y espacio pensados, y una idea clara."],
      ["Analiza con la ficha del tema un espectáculo híbrido que hayas visto o encontrado en vídeo.", "Respuesta abierta. Debe responder a las cinco preguntas y valorar si la mezcla aporta sentido."],
    ],
  },
  glosario: [
    ["Fluxus", "Movimiento artístico de los sesenta que mezcló arte, música y acción."],
    ["Mimo", "Arte de expresar sin palabras, con el gesto y el cuerpo."],
    ["Bunraku", "Teatro japonés de grandes títeres manipulados a la vista."],
    ["Clown", "Payaso teatral que trabaja la ingenuidad y el fracaso."],
    ["Aéreos", "Técnicas de circo en altura: trapecio, telas, aro."],
    ["Recorrido", "Espectáculo en que el público se desplaza por distintos espacios."],
    ["Pantalla LED", "Pantalla luminosa para imágenes en escena."],
    ["Híbrido", "Que mezcla varias disciplinas artísticas."],
  ],
  situacion: {
    titulo: "Instituto inmersivo",
    reto: "Crear un recorrido escénico por varios espacios del centro con distintas tendencias.",
    pasos: [
      "Elegid un tema común (por ejemplo, «lo que no se ve del instituto»).",
      "Cada grupo prepara una estación: performance, teatro de objetos, documental o teatro físico.",
      "Diseñad el recorrido del público y los tiempos de cada estación.",
      "Representadlo ante otro curso y recoged sus impresiones.",
    ],
    producto: "Recorrido escénico de 20 a 30 minutos por el centro.",
    evaluacion: [
      "Cada estación aplica correctamente su tendencia.",
      "El recorrido es fluido y está bien organizado.",
      "El tema común da unidad a la experiencia.",
      "Se recogen y analizan las opiniones del público.",
    ],
  },
  familias: [
    "Acudid juntos a un espectáculo de circo contemporáneo o de calle.",
    "Visitad una exposición o festival con performances.",
    "Comentad el uso de la tecnología en un concierto o espectáculo.",
    "Preguntadle qué tendencia escénica le parece más interesante y por qué.",
  ],
  saberes: "Nuevas tendencias escénicas: performance y happening, teatro físico y visual, teatro de objetos y títeres, circo contemporáneo, teatro documental y verbatim, teatro inmersivo y participativo (Teatro del Oprimido), escena digital (proyecciones, video mapping, cámara en directo, sensores, realidad virtual). Análisis de propuestas híbridas.",
  ideas: [
    "Taller de teatro de objetos con material del aula.",
    "Performance colectiva en el patio.",
    "Escena breve de teatro verbatim con entrevistas a familiares.",
    "Probar una proyección sencilla sobre cajas blancas.",
  ],
  fuentes: [
    { t: "Arte de performance, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arte_de_performance" },
    { t: "Teatro del Oprimido, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teatro_del_oprimido" },
  ],
});
