// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · La tinta y las técnicas húmedas y mixtas de dibujo (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, escala, cajas, flujo, versus, rueda, crono, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "La tinta y las técnicas húmedas y mixtas de dibujo",
  minutos: 60,
  bloque: "B",
  objetivos: [
    "Conocer los tipos de tinta y sus herramientas: plumilla, caña, pincel y rotulador",
    "Crear valores con líneas, tramas, punteados y aguadas",
    "Combinar la tinta con otras técnicas en dibujos mixtos",
    "Valorar la tradición del dibujo a tinta en Occidente y en Oriente",
  ],
  claves: ["tinta china", "tinta ferrogálica", "sepia", "plumilla", "caña", "pincel", "aguada", "tramado", "punteado", "reserva", "sumi-e", "técnica mixta", "rotulador calibrado"],
  pregunta: {
    texto: "Con un solo bote de tinta negra, ¿cómo se pueden conseguir grises?",
    respuesta: "De dos maneras. Por <b>línea</b>: la tinta siempre es negra, pero si separas o juntas los trazos, los cruzas o los puntos, el ojo mezcla el negro con el blanco del papel y percibe grises. Y por <mark>aguada</mark>: diluyendo la tinta con más o menos agua se obtiene una gama de transparencias, del gris perla al negro.",
  },
  bloques: [
    { h: "Las técnicas húmedas de dibujo", p: [
      "Las <mark>técnicas húmedas</mark> de dibujo usan un líquido que se aplica con un útil y se seca sobre el papel. La más importante es la <b>tinta</b>, pero también las <b>aguadas</b> de tinta, los lápices y ceras acuarelables y los rotuladores. Frente a las técnicas secas, la tinta es <b>definitiva</b>: no se borra, lo que exige planificar y da al trazo una gran decisión.",
      "El soporte debe aguantar la humedad: papeles de dibujo de buen gramaje, cartulinas satinadas para la línea fina y papeles de acuarela para las aguadas. Se suele encajar antes con un lápiz suave y borrar cuando la tinta está seca.",
    ], svg: versus("Seco frente a húmedo", ["Técnicas secas", ["se borran", "por frotamiento", "polvo frágil", "capas"]], ["Técnicas húmedas", ["definitivas", "líquido que seca", "trazo decidido", "aguadas"]]) },
    { h: "Tipos de tinta", p: [
      "La <b>tinta china</b> está hecha de negro de humo y cola o goma; es intensamente negra y, una vez seca, resistente al agua. Desde la Edad Media se usó la <b>tinta ferrogálica</b>, de agallas de roble y sulfato de hierro, que con el tiempo se vuelve parda y puede corroer el papel. La <b>sepia</b>, originalmente de calamar, y el <b>bistre</b>, de hollín de madera, dan tonos marrones cálidos.",
      "Hoy existen <b>tintas acrílicas</b> de colores, resistentes al agua, y <b>tintas solubles</b> que se pueden reactivar. Para la caligrafía oriental se frota una barra de tinta sólida sobre una piedra con agua. Elegir una tinta resistente o soluble cambia lo que puedes hacer encima.",
    ], svg: cajas("Tintas", [["China", "negro de humo, resistente"], ["Ferrogálica", "agallas e hierro"], ["Sepia y bistre", "tonos pardos"], ["Acrílicas", "colores, resistentes"], ["Barra oriental", "frotada en piedra"]]) },
    { h: "Plumilla, caña y pincel", p: [
      "La <b>plumilla</b> metálica, montada en un mango, es flexible: al presionar se abren sus puntas y la línea engorda. Hay plumillas finas para dibujo y anchas para caligrafía. La <b>caña</b> tallada en bisel da líneas rotundas e irregulares, muy expresivas, como en los dibujos de Rembrandt o Van Gogh. La <b>pluma de ave</b> fue el útil clásico hasta el siglo XIX.",
      "El <b>pincel</b> fino de punta permite líneas que pasan de finísimas a gruesas en un solo gesto, la base del cómic y de la tradición oriental. Los <b>rotuladores calibrados</b> dan una línea constante, cómoda para el boceto y la ilustración, aunque menos expresiva.",
    ], extra: TRUCO("moja la plumilla hasta la mitad, descarga el exceso en el borde del bote y prueba en un papel aparte antes de dibujar."), svg: rueda("ÚTILES DE TINTA", ["plumilla", "caña", "pluma de ave", "pincel", "rotulador", "estilógrafo"]) },
    { h: "Construir valores con la línea", p: [
      "Con la tinta el tono se construye con recursos gráficos. El <b>rayado</b> o sombreado paralelo oscurece al juntar las líneas. El <b>tramado</b> o <i>cross-hatching</i> cruza capas de líneas en distintas direcciones. El <b>punteado</b> crea grises con la densidad de puntos, lento pero muy fino. También se usan <b>garabatos</b> y texturas libres.",
      "Las líneas pueden seguir la forma del objeto, como si lo envolvieran, para reforzar el volumen. Grabadores como Durero desarrollaron estos sistemas con tal precisión que sus estampas parecen tener todas las gradaciones de un cuadro. Es esencial respetar los <b>blancos</b>: con tinta, la luz es el papel que no se toca.",
    ], svg: escala("Valores con tinta", ["papel", "punteado", "rayado", "tramado doble", "tramado triple", "negro"]) },
    { h: "La aguada", p: [
      "La <mark>aguada</mark> consiste en diluir la tinta en agua y aplicarla con pincel en manchas transparentes. Se suelen preparar tres o cuatro recipientes con diluciones distintas y se pinta de claro a oscuro, superponiendo capas cuando la anterior está seca. También se puede trabajar <b>húmedo sobre húmedo</b> para fundidos suaves.",
      "La aguada combinada con línea de plumilla fue la técnica preferida para los <b>bocetos</b> y estudios de luz desde el Renacimiento: Claudio de Lorena, Rembrandt o Goya la usaron con maestría. En el siglo XX fue básica en la ilustración y el dibujo de arquitectura.",
    ], extra: OBRA("Álbumes de dibujos", "Francisco de Goya", "1796-1828, aguadas de tinta china y sepia"), svg: flujo("Pintar una aguada", ["Encaje suave a lápiz", "Preparar diluciones", "De claro a oscuro, por capas", "Línea final de plumilla"]), v: ["tin-b", "Cómo hacer aguadas"] },
    { h: "La tradición oriental", p: [
      "En China y Japón la tinta y el pincel son la base de la pintura y la caligrafía. La <b>pintura de tinta</b> china (<i>shuimo</i>) y el <b>sumi-e</b> japonés buscan captar la esencia de un bambú, una montaña o un pájaro con pocas pinceladas, aprovechando el vacío del papel como parte de la obra.",
      "El pintor prepara su tinta frotando la barra, controla la carga de agua del pincel y la velocidad del gesto: una pincelada no se corrige. Esta concepción influyó en artistas occidentales como Van Gogh, Henri Michaux o los expresionistas abstractos, y sigue viva en el manga.",
    ], svg: crono("La tinta en el tiempo", [["s. III a. C.", "tinta china"], ["s. XII", "ferrogálica"], ["1500", "Durero"], ["1650", "Rembrandt"], ["1800", "Goya"], ["1890", "Van Gogh"], ["s. XX", "cómic y manga"]]) },
    { h: "Técnicas mixtas de dibujo", p: [
      "Una <mark>técnica mixta</mark> combina dos o más materiales en la misma obra para sumar sus cualidades. Ejemplos frecuentes son la <b>tinta y aguada</b>, la tinta sobre <b>acuarela</b>, el <b>lápiz acuarelable</b> que se trabaja en seco y se funde con agua, la <b>tinta con pastel</b> o el uso de <b>reservas</b> de cera o líquido enmascarador que repelen la tinta.",
      "Para que una técnica mixta funcione hay que conocer el orden: las técnicas húmedas suelen ir debajo de las secas, una tinta soluble se corre si pintas encima con agua, y las grasas repelen el agua. La prueba previa en un papel aparte vuelve a ser la mejor aliada.",
    ], svg: cajas("Combinaciones", [["Tinta + aguada", "línea y mancha"], ["Tinta + acuarela", "contorno y color"], ["Lápiz acuarelable", "seco y húmedo"], ["Cera + tinta", "reserva"], ["Tinta + pastel", "fondo y luz"], ["Rotulador + lápiz", "ilustración"]]), v: ["tin-a", "Seis formas de usar tinta china"] },
    { h: "La tinta hoy: ilustración y cómic", p: [
      "La tinta sigue siendo la base del <b>cómic</b>: el dibujante hace el lápiz y el entintador fija la línea con plumilla o pincel. Autores como Moebius, Carlos Giménez, Paco Roca o Ana Penyas muestran estilos muy distintos, de la línea clara a la mancha expresiva.",
      "También se usa en el <b>cuaderno de viaje</b> o <i>urban sketching</i>, en ilustración editorial y en el tatuaje. Muchos ilustradores escanean sus tintas y las colorean digitalmente: un ejemplo de cómo las técnicas tradicionales y las digitales se complementan.",
    ], svg: flujo("De lápiz a viñeta", ["Guion y boceto", "Lápiz definitivo", "Entintado con plumilla o pincel", "Escaneado y color digital"]) },
  ],
  figura: { titulo: "La tinta de un vistazo", aria: "Resumen de tintas, útiles, recursos gráficos y técnicas mixtas", cols: [
    ["Tintas", ["china", "ferrogálica", "sepia y bistre", "acrílicas"]],
    ["Útiles", ["plumilla", "caña", "pincel", "rotulador"]],
    ["Valores", ["rayado", "tramado", "punteado", "aguada"]],
    ["Mixtas", ["tinta y acuarela", "acuarelables", "reservas", "cómic"]],
  ] },
  video: ["tin-a", "Seis formas de usar tinta china"],
  ejemplos: [
    ["Sombrea una esfera solo con plumilla.", ["Decide la luz y deja el brillo en blanco.", "Rayado suave que sigue la curva.", "Segunda capa cruzada en la sombra propia.", "Tramado denso en la sombra arrojada."], "Volumen por densidad de líneas."],
    ["Pinta un paisaje con aguada.", ["Tres diluciones: clara, media y oscura.", "Cielo y fondo con la clara.", "Planos medios con la media.", "Primer plano y detalles con la oscura."], "Profundidad por valores: lo lejano, más claro."],
    ["Combina acuarela y tinta en una ilustración.", ["Dibujo a lápiz.", "Línea con tinta resistente al agua.", "Borrar el lápiz.", "Colorear con acuarela encima."], "La tinta resistente no se corre con el agua."],
  ],
  errores: [
    "Cargar demasiado la plumilla y provocar manchas.",
    "Usar tinta soluble bajo la acuarela: se corre.",
    "Rellenar todo y perder los blancos del papel.",
    "Borrar el lápiz antes de que la tinta esté seca.",
  ],
  ejercicios: {
    b: [
      ["¿De qué está hecha la tinta china?", "De negro de humo y cola o goma."],
      ["Nombra cuatro útiles para dibujar con tinta.", "Plumilla, caña, pluma de ave, pincel, rotulador."],
      ["¿Qué es una aguada?", "Tinta diluida en agua aplicada con pincel en manchas transparentes."],
      ["¿Qué es el tramado?", "Sombreado con capas de líneas cruzadas."],
    ],
    m: [
      ["¿Por qué la tinta ferrogálica daña algunos manuscritos?", "Porque es ácida y con el tiempo corroe el papel, además de volverse parda."],
      ["Explica cómo se pinta una aguada por capas.", "Se preparan diluciones y se aplican de claro a oscuro, esperando a que seque cada capa."],
      ["¿Qué buscaba el sumi-e?", "Captar la esencia del motivo con pocas pinceladas seguras, usando el vacío del papel."],
      ["¿Por qué es importante el orden en una técnica mixta?", "Porque los materiales interactúan: lo graso repele el agua y lo soluble se corre."],
    ],
    a: [
      ["Compara un dibujo de Rembrandt con caña y uno de Durero con plumilla.", "Rembrandt: trazo libre, rápido y manchas de aguada. Durero: sistema ordenado de líneas y tramas precisas."],
      ["Dibuja un mismo objeto con punteado, tramado y aguada y valora cada resultado.", "Respuesta abierta: precisión y lentitud del punteado, energía del tramado, atmósfera de la aguada."],
      ["Diseña una página de cómic entintada y explica tus decisiones.", "Respuesta abierta: útil elegido, grosores, uso del negro y del blanco, ritmo de viñetas."],
    ],
  },
  quiz: [
    ["La tinta china resiste el agua…", ["una vez seca", "nunca", "solo con calor", "si se diluye"], "Negro de humo."],
    ["La plumilla engorda la línea al…", ["presionar", "levantar", "mojar más", "girar el papel"], "Flexibilidad."],
    ["La sepia daba un tono…", ["pardo", "azul", "verde", "rojo"], "Calamar."],
    ["El punteado crea grises por…", ["densidad de puntos", "dilución", "color", "frotado"], "Mezcla óptica."],
    ["En la aguada se pinta…", ["de claro a oscuro", "de oscuro a claro", "solo en negro", "sin agua"], "Capas."],
    ["El sumi-e es una tradición…", ["japonesa", "flamenca", "griega", "azteca"], "Tinta y pincel."],
    ["Dibujó con caña y aguada…", ["Rembrandt", "Warhol", "Mondrian", "Lichtenstein"], "Siglo XVII."],
    ["Un líquido enmascarador sirve para…", ["reservar blancos", "fijar", "diluir", "borrar"], "Reserva."],
    ["El lápiz acuarelable…", ["se funde con agua", "es de grafito", "es graso", "es de tinta china"], "Mixta."],
    ["En el cómic, el entintado…", ["fija la línea definitiva", "colorea", "escribe el guion", "rotula solo"], "Plumilla o pincel."],
  ],
  examen: [
    ["La tinta es una técnica…", ["definitiva, que no se borra", "seca", "grasa", "de grabado"], "Planificar."],
    ["Con tinta, la luz es…", ["el papel sin tocar", "tinta blanca", "la aguada oscura", "el tramado"], "Blancos."],
    ["La técnica mixta…", ["combina varios materiales", "usa solo tinta", "es siempre digital", "prohíbe el agua"], "Suma cualidades."],
    ["Para colorear con acuarela sobre línea de tinta, esta debe ser…", ["resistente al agua", "soluble", "de lápiz", "grasa"], "No se corre."],
  ],
  feynman: ["tipos de tinta", "plumilla, caña y pincel", "rayado, tramado y punteado", "aguada", "técnica mixta"],
  mapa: ["TINTA", [["Tintas", "china, sepia"], ["Útiles", "plumilla, caña, pincel"], ["Valores", "trama y aguada"], ["Mixtas", "acuarela, cera"]]],
  tarjetas: [
    ["Tinta china", "Negro de humo y cola."],
    ["Plumilla", "Punta metálica flexible."],
    ["Tramado", "Líneas cruzadas."],
    ["Punteado", "Grises por densidad de puntos."],
    ["Aguada", "Tinta diluida en agua."],
    ["Sumi-e", "Pintura japonesa de tinta."],
    ["Reserva", "Zona protegida para que no reciba tinta."],
    ["Técnica mixta", "Combinación de materiales."],
  ],
  glosario: [
    ["Tinta ferrogálica", "Tinta de agallas y sulfato de hierro usada desde la Edad Media."],
    ["Bistre", "Tinta parda de hollín de madera."],
    ["Caña", "Tallo hueco tallado en bisel para dibujar."],
    ["Estilógrafo", "Pluma de punta tubular que da una línea constante."],
    ["Aguada", "Mancha de tinta diluida."],
    ["Húmedo sobre húmedo", "Aplicar color sobre papel o capa aún mojados."],
    ["Entintado", "Paso del cómic que fija la línea final a tinta."],
    ["Urban sketching", "Dibujo del natural en la calle, con cuaderno."],
  ],
  situacion: SIT(
    "Cuaderno de viaje del barrio",
    "La clase elaborará un cuaderno de viaje colectivo del barrio del instituto, dibujado del natural con tinta y aguada.",
    [
      "Recorred el barrio y elegid lugares significativos.",
      "Dibujad del natural con rotulador o plumilla.",
      "Completad en clase con aguadas y anotaciones manuscritas.",
      "Escanead las páginas y montad un cuaderno digital e impreso.",
    ],
    "Cuaderno de viaje colectivo del barrio.",
    [
      "Uso variado de recursos gráficos de la tinta.",
      "Observación del natural y composición de cada página.",
      "Coherencia del cuaderno final.",
    ],
  ),
  familias: [
    "Hojead juntos un cómic y fijaos en cómo se usa el negro.",
    "Probad a dibujar con un palillo mojado en café: es una «tinta» casera.",
    "Buscad en internet una caligrafía japonesa y copiad un trazo con pincel.",
    "Llevad un cuaderno pequeño en una excursión y dibujad un lugar.",
  ],
  saberes: "técnicas húmedas y mixtas de dibujo; la tinta y sus herramientas; materiales, útiles y soportes del dibujo y su terminología.",
  ideas: [
    "Muestrario de recursos gráficos con plumilla.",
    "Escala de aguadas de cinco diluciones.",
    "Taller de sumi-e con barra y piedra de tinta.",
    "Entintar una página de cómic propia.",
  ],
  fuentes: [
    WIKI("Tinta china", "Tinta_china"),
    WIKI("Aguada", "Aguada"),
  ],
});
