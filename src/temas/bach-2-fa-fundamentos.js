// Fundamentos Artísticos 2º Bachillerato · Tema 1. Los fundamentos del arte: técnicas, terminología y análisis de la obra. Dibujos propios en SVG.
const { tema, OBRA, cajas, flujo, versus, piramide, rueda, cuadro, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Los fundamentos del arte: técnicas, terminología y análisis de la obra",
  saber: ["A", "F"],
  objetivos: [
    "Distinguir los principales materiales, técnicas y procedimientos de la pintura, la escultura y la arquitectura",
    "Usar con precisión la terminología básica del arte y la arquitectura",
    "Situar una obra en su contexto histórico, geográfico y social",
    "Aplicar un método de análisis formal, técnico e iconográfico a una obra",
    "Conocer las fases de un proyecto artístico",
  ],
  claves: ["soporte", "aglutinante", "pigmento", "temple", "óleo", "fresco", "talla", "modelado", "fundición", "grabado", "arquitrabe", "arco", "bóveda", "iconografía", "contexto"],
  pregunta: {
    texto: "¿Por qué los colores de un cuadro del siglo XV siguen tan vivos y los de muchos murales de los años setenta ya se han apagado?",
    respuesta: "Porque la duración de una obra depende de sus <b>materiales</b> y de la <b>técnica</b>. Un pintor del siglo XV preparaba la tabla con capas de yeso y cola, molía pigmentos minerales y los mezclaba con yema de huevo o aceite de linaza, en capas finas y bien secas. Muchos murales recientes se pintaron con pinturas industriales baratas, sobre muros húmedos y a la intemperie. Conocer la <mark>tecnología del arte</mark> ayuda a entender cómo se hizo una obra, por qué tiene ese aspecto y cómo conservarla.",
  },
  lectura: {
    titulo: "Un huevo en el taller",
    html: `<p>Florencia, hacia 1400. En el taller de un pintor, el aprendiz más joven casca un huevo, separa con cuidado la yema, la pincha y deja caer el líquido en un cuenco. Allí lo mezcla con un polvo azul que ha molido durante horas: lapislázuli traído de Afganistán, más caro que el oro. Con esa pasta, el maestro pintará el manto de la Virgen.</p><p>Cennino Cennini, que se formó en uno de esos talleres, escribió un libro con todos los secretos del oficio: cómo preparar la tabla, cómo dorar, cómo moler los colores. Seis siglos después, los restauradores siguen leyéndolo. Antes de hablar de estilos y genios, el arte es oficio: materiales, herramientas y procedimientos.</p>`,
  },
  bloques: [
    { h: "Materiales, técnicas y procedimientos", p: [
      "Toda obra de arte es, antes que nada, un objeto hecho con <mark>materiales</mark> concretos mediante unas <b>técnicas</b>. Conviene distinguir tres ideas: el <b>material</b> es la materia con la que se trabaja (piedra, madera, pigmento, bronce, vidrio); la <b>técnica</b> es la manera de transformarlo (tallar, modelar, pintar al óleo); y el <b>procedimiento</b> es el conjunto ordenado de pasos que sigue el artista de principio a fin.",
      "Los materiales condicionan el resultado. El mármol permite superficies pulidas y detalles finos; el granito, más duro, obliga a formas sencillas. El óleo admite veladuras transparentes y correcciones; el fresco, en cambio, no perdona errores. Por eso el estudio técnico es la base para comprender una obra, datarla y conservarla. Los museos usan hoy radiografías, reflectografía infrarroja y análisis químicos para ver lo que hay debajo de la superficie.",
    ], svg: cajas("Material, técnica, procedimiento", [["Material", "piedra, madera, pigmento, bronce"], ["Técnica", "tallar, modelar, pintar"], ["Procedimiento", "los pasos en orden"], ["Estudio técnico", "rayos X, infrarrojos"]]) },
    { h: "Las técnicas pictóricas", p: [
      "Una pintura tiene tres componentes: el <b>soporte</b> (muro, tabla, lienzo, papel), el <b>pigmento</b> (polvo de color, mineral, vegetal o sintético) y el <mark>aglutinante</mark>, que une el pigmento y lo fija al soporte. Según el aglutinante se distinguen las técnicas. En el <b>fresco</b>, el pigmento disuelto en agua se aplica sobre el mortero aún húmedo y queda atrapado al secar la cal. El <b>temple</b> usa yema de huevo o cola; seca rápido y da colores mates y precisos.",
      "El <b>óleo</b>, perfeccionado en Flandes en el siglo XV por pintores como Jan van Eyck, usa aceite de linaza: seca despacio, permite fundir los tonos y superponer veladuras brillantes. La <b>acuarela</b> y el <b>gouache</b> usan goma arábiga y agua; el <b>pastel</b> son barras de pigmento casi puro. En el siglo XX llegó el <b>acrílico</b>, una resina sintética de secado rápido, y después las técnicas mixtas y digitales.",
    ], v: ["tec-a", "La técnica de Giotto: pintura al temple de huevo"], svg: cuadro("Técnicas y aglutinantes", [["Técnica", "Aglutinante", "Rasgo"], ["Fresco", "agua sobre cal", "sobre muro húmedo"], ["Temple", "huevo o cola", "mate, preciso"], ["Óleo", "aceite de linaza", "veladuras, brillo"], ["Acrílico", "resina sintética", "secado rápido"]]) },
    { h: "Las técnicas escultóricas y el grabado", p: [
      "La escultura trabaja el volumen real. Hay dos grandes procedimientos. La <mark>talla</mark> es sustractiva: se quita materia a un bloque de piedra o madera hasta liberar la forma. El <b>modelado</b> es aditivo: se añade y moldea un material blando como el barro o la cera. A partir de un modelo se puede hacer una <b>fundición</b> en bronce, por ejemplo con el método de la cera perdida. Hoy se suman el <b>ensamblaje</b> de objetos y la soldadura de metal.",
      "Por su relación con el espacio, la escultura puede ser <b>exenta</b> (de bulto redondo, se rodea) o en <b>relieve</b> (alto, medio o bajo relieve, unida a un fondo). El <b>grabado</b> es una técnica de reproducción: se trabaja una matriz que luego se entinta y se estampa. En la xilografía la matriz es de madera; en el aguafuerte, una plancha de metal mordida con ácido, la técnica de los <i>Caprichos</i> de Goya.",
    ], extra: OBRA("Los Caprichos", "Francisco de Goya", "1799, aguafuerte y aguatinta"), svg: versus("Dos maneras de hacer volumen", ["Talla (quitar)", ["piedra, madera", "cincel y gubia", "no admite errores", "Miguel Ángel"]], ["Modelado (añadir)", ["barro, cera", "manos y palillos", "se corrige", "base para el bronce"]]) },
    { h: "La terminología de la arquitectura", p: [
      "La arquitectura tiene un vocabulario propio. Los <b>elementos sustentantes</b> sostienen el edificio: muros, pilares, columnas. Los <b>elementos sustentados</b> cubren y cierran: dinteles, arcos, bóvedas y cúpulas. El sistema más antiguo es el <mark>adintelado</mark>, con piezas horizontales sobre soportes verticales, como en los templos griegos. El sistema <b>abovedado</b> usa el arco, que reparte el peso hacia los lados y permite cubrir espacios mayores.",
      "Del arco salen las bóvedas: de <b>cañón</b> (un arco prolongado), de <b>arista</b> (dos cañones que se cruzan) y de <b>crucería</b> (con nervios, típica del gótico). La <b>cúpula</b> es media esfera sobre una planta circular o, mediante pechinas, sobre una cuadrada. Otros términos útiles: <b>planta</b> (el dibujo del edificio visto desde arriba), <b>alzado</b> (la fachada), <b>nave</b>, <b>crucero</b>, <b>ábside</b> y <b>contrafuerte</b>.",
    ], svg: piramide("Del soporte a la cubierta", ["cúpula y bóveda", "arco y dintel", "capitel", "fuste y pilar", "basa y cimiento"]) },
    { h: "El contexto: historia, geografía y sociedad", p: [
      "Una obra no se entiende solo por su forma. Hay que preguntarse <b>cuándo</b> y <b>dónde</b> se hizo, <b>quién</b> la encargó y <b>para qué</b>. El <mark>contexto</mark> histórico explica, por ejemplo, por qué las catedrales góticas crecen con las ciudades medievales o por qué el arte barroco busca conmover en plena Contrarreforma. El contexto geográfico explica los materiales disponibles: piedra en Castilla, ladrillo en Aragón y en la llanura del Po.",
      "El contexto social muestra quién paga y quién mira. Durante siglos, los grandes <b>clientes</b> fueron la Iglesia, los reyes y la nobleza; desde el siglo XIX aparecen el mercado, las galerías, los museos públicos y los coleccionistas privados. También importa la <b>función</b>: religiosa, política, funeraria, decorativa, estética o crítica. Una misma imagen puede cambiar de sentido al pasar de un altar a la sala de un museo.",
    ], svg: rueda("CONTEXTO", ["¿cuándo?", "¿dónde?", "¿quién encarga?", "¿para qué?", "¿quién mira?", "¿con qué materiales?"]) },
    { h: "Cómo analizar una obra de arte", p: [
      "Para comentar una obra conviene seguir un orden. Primero, la <b>identificación</b>: título, autor, fecha, técnica, medidas y lugar donde se conserva. Segundo, el <mark>análisis formal</mark>: línea, color, luz, composición, espacio, volumen y movimiento. Tercero, el <b>análisis técnico</b>: materiales, procedimiento y huellas del proceso, como la pincelada o las marcas del cincel.",
      "Cuarto, el <b>análisis iconográfico</b> o del significado: qué representa, qué símbolos usa y qué quería decir. El historiador Erwin Panofsky distinguió tres niveles: lo que vemos (una mujer con una rueda), lo que reconocemos gracias a la cultura (santa Catalina) y el sentido profundo de la obra en su época. Por último, el <b>contexto y la valoración</b>: relación con el estilo, influencia posterior y opinión razonada.",
    ], svg: flujo("Pasos del comentario", ["Identificar: autor, fecha, técnica", "Analizar la forma: línea, color, luz", "Analizar la técnica y el material", "Interpretar el significado", "Contextualizar y valorar"]) },
    { h: "Los elementos del lenguaje visual", p: [
      "Las artes visuales usan un lenguaje con sus propios elementos. El <b>punto</b> y la <b>línea</b> organizan la imagen y la dirigen: las horizontales transmiten calma; las diagonales, movimiento. El <mark>color</mark> se describe por su tono, su saturación y su luminosidad; los colores complementarios, como el rojo y el verde, se refuerzan al ponerse juntos. La <b>luz</b> puede ser natural o artificial, homogénea o contrastada, como en el claroscuro.",
      "La <b>composición</b> es la manera de ordenar los elementos: simétrica o asimétrica, cerrada o abierta, en triángulo, en diagonal. El <b>espacio</b> puede ser plano o tener profundidad gracias a la perspectiva. La <b>textura</b> es la calidad de la superficie, lisa o rugosa, real o pintada. Saber nombrar estos elementos permite describir una obra con precisión, sin limitarse a decir si gusta o no gusta.",
    ], svg: cajas("Elementos del lenguaje visual", [["Línea", "dirige la mirada"], ["Color", "tono, saturación, luz"], ["Luz", "contraste, claroscuro"], ["Composición", "orden de las partes"], ["Espacio", "plano o profundo"], ["Textura", "lisa o rugosa"]]) },
    { h: "El proyecto artístico y sus fases", p: [
      "Crear también es un método. La <mark>metodología proyectual</mark> organiza un proyecto artístico en fases: <b>planteamiento</b> del problema o del encargo; <b>documentación</b> e investigación de referentes; <b>bocetos</b> e ideas alternativas; <b>elección</b> de la propuesta, la técnica y los materiales; <b>realización</b>; y <b>presentación</b> y evaluación del resultado.",
      "En los proyectos colectivos hay que <b>repartir las tareas</b> según las habilidades: quien dibuja mejor, quien domina la fotografía o el vídeo, quien coordina o quien escribe los textos. Elegir el estilo, la técnica y el lenguaje no es un capricho: depende del mensaje, del público, del espacio y del presupuesto. Esta manera de trabajar, propia del diseño y de la arquitectura, sirve igual para un mural, una instalación o una exposición escolar.",
    ], svg: flujo("Fases del proyecto", ["Planteamiento y documentación", "Bocetos e ideas", "Elección de técnica y lenguaje", "Realización y presentación"]) },
  ],
  figura: { titulo: "Los fundamentos del arte de un vistazo", aria: "Resumen de técnicas, terminología, contexto y análisis de la obra", cols: [
    ["Técnicas", ["pintura: fresco, temple", "óleo, acrílico", "escultura: talla", "modelado, fundición"]],
    ["Arquitectura", ["adintelado", "arco y bóveda", "cúpula", "planta y alzado"]],
    ["Contexto", ["cuándo y dónde", "quién encarga", "para qué", "quién mira"]],
    ["Análisis", ["identificar", "forma y técnica", "significado", "valoración"]],
  ] },
  video: ["tec-b", "Los elementos del lenguaje visual: la línea"],
  ejemplos: [
    ["Identifica la técnica de una tabla gótica con fondo dorado y colores mates.", ["El soporte es madera preparada con yeso.", "El oro es pan de oro aplicado sobre bol.", "Los colores son mates y precisos, sin veladuras.", "Antes de 1450 en Italia, lo normal era la yema de huevo."], "Temple sobre tabla con dorado."],
    ["Explica el sistema constructivo de un templo griego.", ["Columnas verticales como soportes.", "Arquitrabe horizontal apoyado sobre ellas.", "No hay arcos ni bóvedas.", "Los espacios interiores son estrechos."], "Sistema adintelado."],
    ["Aplica los pasos del comentario a un retrato.", ["Identificación: autor, fecha, óleo sobre lienzo.", "Forma: composición, luz lateral, colores.", "Significado: quién es el retratado y cómo quiere mostrarse.", "Contexto y valoración: quién lo encargó y qué aporta."], "Comentario ordenado de lo visible a lo interpretado."],
  ],
  errores: [
    "Confundir técnica y material: el mármol es un material; la talla, una técnica.",
    "Llamar «fresco» a cualquier pintura mural: solo lo es si se pinta sobre mortero húmedo.",
    "Describir solo lo que gusta o no gusta, sin usar los elementos del lenguaje visual.",
    "Olvidar el contexto: quién encargó la obra y para qué cambia su sentido.",
  ],
  ejercicios: {
    b: [
      ["Define soporte, pigmento y aglutinante.", "Soporte: superficie sobre la que se pinta (muro, tabla, lienzo, papel). Pigmento: polvo que da el color. Aglutinante: sustancia que une el pigmento y lo fija al soporte (huevo, aceite, cola, resina)."],
      ["¿Qué diferencia hay entre talla y modelado?", "La talla quita materia de un bloque duro (piedra, madera); es sustractiva. El modelado añade y da forma a un material blando (barro, cera); es aditivo."],
      ["Nombra tres elementos sustentantes y tres sustentados de la arquitectura.", "Sustentantes: muro, pilar, columna. Sustentados: dintel, arco, bóveda (también la cúpula)."],
      ["Ordena los pasos del comentario de una obra.", "Identificación, análisis formal, análisis técnico, análisis del significado (iconografía) y contexto con valoración personal razonada."],
    ],
    m: [
      ["¿Por qué el óleo permitió a los pintores flamencos un detalle y un brillo nuevos?", "Porque el aceite seca despacio: permite fundir los tonos, corregir y superponer capas finas y transparentes (veladuras) que reflejan la luz, frente al temple, que seca rápido y queda mate."],
      ["Explica la diferencia entre una bóveda de cañón y una de crucería.", "La de cañón es un arco prolongado que descarga el peso de forma continua sobre muros gruesos. La de crucería concentra el peso en nervios que bajan a pilares, lo que permite muros más finos y ventanales."],
      ["Pon un ejemplo de cómo la función de una obra cambia su sentido.", "Un retablo hecho para rezar en una iglesia se contempla en un museo como obra de arte: pierde su función religiosa y se valora por su estética y su historia."],
      ["¿Qué aportan las radiografías y la reflectografía infrarroja al estudio de una pintura?", "Muestran lo que hay bajo la superficie: el dibujo preparatorio, los arrepentimientos o cambios del autor y restauraciones, lo que ayuda a datar, atribuir y conservar la obra."],
    ],
    a: [
      ["Diseña las fases de un proyecto colectivo de mural para tu centro y reparte cuatro tareas según habilidades.", "Fases: planteamiento y documentación (tema, muro, permisos), bocetos, elección de técnica (acrílico exterior), realización y presentación. Tareas: coordinación, diseño y dibujo, preparación del muro y materiales, documentación fotográfica y difusión."],
      ["Explica los tres niveles de Panofsky con un ejemplo propio.", "Nivel preiconográfico: lo que vemos (un hombre con llaves). Nivel iconográfico: lo que reconocemos por la cultura (san Pedro). Nivel iconológico: el sentido en su época (la autoridad del papa como sucesor de Pedro)."],
    ],
  },
  quiz: [
    ["El aglutinante del temple tradicional es…", ["la yema de huevo", "el aceite de linaza", "la resina acrílica", "la cal húmeda"], "El temple al huevo dominó la pintura sobre tabla hasta el siglo XV."],
    ["La pintura al fresco se aplica…", ["sobre el mortero aún húmedo", "sobre tabla con yeso", "sobre lienzo seco", "sobre papel"], "Al secar la cal, el pigmento queda atrapado en el muro."],
    ["La talla es un procedimiento…", ["sustractivo", "aditivo", "de reproducción", "de ensamblaje"], "Se quita materia al bloque."],
    ["Una escultura que se puede rodear es…", ["exenta o de bulto redondo", "un altorrelieve", "un bajorrelieve", "un grabado"], "El relieve está unido a un fondo."],
    ["El aguafuerte es una técnica de…", ["grabado", "escultura", "pintura mural", "arquitectura"], "Usa una plancha de metal mordida con ácido."],
    ["El sistema adintelado se basa en…", ["piezas horizontales sobre soportes verticales", "arcos y bóvedas", "cúpulas sobre pechinas", "estructuras de hierro"], "Es el sistema de los templos griegos."],
    ["La bóveda de crucería es típica del…", ["gótico", "arte griego", "Neoclasicismo", "arte egipcio"], "Sus nervios concentran el peso en pilares."],
    ["El análisis iconográfico estudia…", ["el significado de lo representado", "la composición", "los materiales", "las medidas"], "Temas, símbolos y sentido."],
    ["Dos colores complementarios son…", ["rojo y verde", "rojo y naranja", "azul y violeta", "amarillo y naranja"], "Se refuerzan al ponerse juntos."],
    ["La primera fase de un proyecto artístico es…", ["el planteamiento y la documentación", "la presentación", "la realización", "la evaluación"], "Antes de bocetar hay que entender el problema."],
  ],
  examen: [
    ["El óleo se difundió en el siglo XV desde…", ["Flandes", "Grecia", "Egipto", "Japón"], "Van Eyck y los primitivos flamencos."],
    ["Las pechinas sirven para…", ["pasar de una planta cuadrada a una cúpula", "sostener un dintel", "decorar capiteles", "cerrar ventanas"], "Son triángulos curvos en las esquinas."],
    ["La cera perdida es un método de…", ["fundición en bronce", "talla en madera", "pintura mural", "grabado"], "La cera se funde y deja el hueco al metal."],
    ["En un proyecto colectivo, las tareas se reparten según…", ["las habilidades requeridas", "el orden de lista", "el azar", "la edad"], "Es un criterio del currículo."],
  ],
  feynman: ["qué es un aglutinante", "talla y modelado", "sistema adintelado y abovedado", "pasos del comentario"],
  mapa: ["FUNDAMENTOS", [["Técnicas", "fresco, temple, óleo, talla"], ["Arquitectura", "dintel, arco, bóveda"], ["Contexto", "cuándo, quién, para qué"], ["Análisis", "forma, técnica, significado"]]],
  tarjetas: [
    ["Aglutinante", "Une el pigmento y lo fija al soporte."],
    ["Fresco", "Pigmento en agua sobre mortero húmedo."],
    ["Óleo", "Pigmento con aceite; veladuras."],
    ["Talla", "Quitar materia a un bloque."],
    ["Modelado", "Añadir y moldear barro o cera."],
    ["Adintelado", "Dintel horizontal sobre soportes."],
    ["Iconografía", "Estudio de temas y símbolos."],
    ["Metodología proyectual", "Fases ordenadas de un proyecto."],
  ],
  glosario: [
    ["Soporte", "Superficie sobre la que se realiza la obra: muro, tabla, lienzo o papel."],
    ["Pigmento", "Sustancia en polvo que aporta el color."],
    ["Veladura", "Capa fina y transparente de pintura que matiza la de debajo."],
    ["Relieve", "Escultura unida a un fondo, en alto, medio o bajo relieve."],
    ["Matriz", "Plancha o taco del que se estampan las copias de un grabado."],
    ["Bóveda", "Cubierta curva formada a partir del arco."],
    ["Planta", "Dibujo de un edificio visto desde arriba."],
    ["Claroscuro", "Contraste fuerte entre luces y sombras."],
  ],
  situacion: SIT(
    "La ficha técnica del museo",
    "El museo de tu ciudad quiere renovar las cartelas de cinco obras para que las entienda cualquier visitante joven.",
    ["Elegid cinco obras del museo o de su web", "Identificad técnica, material y soporte de cada una", "Redactad un análisis formal y del significado de 60 palabras", "Diseñad las cartelas con un icono para cada técnica"],
    "Cinco cartelas claras, con técnica, análisis breve y contexto.",
    ["Uso correcto de la terminología", "Precisión al identificar técnicas y materiales", "Claridad y diseño de las cartelas"],
  ),
  familias: [
    "Visitad un museo o una iglesia cercana y fijaos en los materiales: piedra, madera, pintura, vidrio.",
    "Preguntad a vuestro hijo o hija qué diferencia hay entre talla y modelado con un objeto de casa.",
    "Buscad juntos en la web del Prado una obra y leed su ficha técnica.",
  ],
  saberes: "tecnología del arte, materiales, técnicas y procedimientos; terminología específica del arte y la arquitectura; aspectos históricos, geográficos y sociales del arte; metodologías de estudio de las formas, funciones y significados; metodología proyectual y fases de los proyectos.",
  ideas: [
    "Llevar al aula muestras de materiales (yeso, barro, pigmentos, linóleo) para reconocerlos al tacto.",
    "Hacer una prueba de temple al huevo y otra de acrílico para comparar el secado.",
    "Usar este tema como guía de comentario para todo el curso.",
  ],
  fuentes: [WIKI("Técnica pictórica", "Técnica_pictórica"), { t: "Museo del Prado: colección en línea y fichas técnicas", url: "https://www.museodelprado.es/coleccion" }],
});
