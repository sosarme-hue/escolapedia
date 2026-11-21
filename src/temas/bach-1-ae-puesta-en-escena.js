// Artes Escénicas I, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");

module.exports = B.tema({
  titulo: "La puesta en escena",
  minutos: 60,
  objetivos: [
    "Definir la puesta en escena y el papel de la dirección escénica",
    "Conocer los tipos de espacio escénico y las partes del escenario",
    "Identificar los lenguajes de la puesta en escena: escenografía, iluminación, vestuario, maquillaje, sonido y utilería",
    "Analizar las decisiones de una puesta en escena y proponer una propia",
  ],
  claves: ["puesta en escena", "dirección", "escenografía", "iluminación", "vestuario", "espacio escénico", "proscenio", "trazo escénico"],
  pregunta: {
    texto: "¿Cómo puede una misma obra de Shakespeare ambientarse en un castillo medieval o en un instituto actual?",
    respuesta: "Gracias a la <b>puesta en escena</b>: el conjunto de <mark>decisiones</mark> con que la dirección y su equipo convierten un texto en espectáculo. El texto es el mismo; el espacio, la luz, el vestuario y el ritmo cambian su sentido.",
  },
  lectura: {
    titulo: "Dos Romeos",
    html: `<p>Este curso, dos institutos de la misma ciudad preparan <i>Romeo y Julieta</i>. En el primero, la directora ha elegido trajes de época, una gran escalera de madera y música de laúd. En el segundo, el director ha puesto a los Montesco y los Capuleto en dos bandas de barrio, con chándales de colores distintos, un muro con grafitis y luz de farolas.</p>
    <p>En el festival de fin de curso, el público ve las dos versiones seguidas. El texto es casi idéntico, pero la sensación es muy diferente: la primera parece un cuento antiguo; la segunda, una noticia de hoy. Ninguna es mejor: cada una es una <b>puesta en escena</b> distinta, una forma propia de leer la obra.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la puesta en escena",
      html: `<p>La <b>puesta en escena</b> es el proceso y el resultado de llevar un texto o una idea al escenario. Incluye todas las decisiones que ve y oye el público: dónde y cuándo ocurre la acción, cómo se mueven los intérpretes, qué visten, cómo es el espacio, la luz y el sonido, y a qué ritmo avanza la obra.</p>
      <p>Una misma obra admite infinitas puestas en escena. Por eso decimos que cada montaje es una <b>interpretación</b> o lectura del texto, y que el teatro se reinventa cada vez que se representa un clásico.</p>`,
      svg: B.estrella("Lenguajes de la puesta en escena", "Puesta en escena", ["Espacio", "Luz", "Vestuario", "Sonido", "Utilería", "Movimiento"]),
    },
    {
      h: "La dirección escénica",
      html: `<p>La figura del <b>director o directora de escena</b> aparece a finales del siglo XIX. Es quien tiene la <b>visión global</b> del espectáculo: decide el concepto (qué quiere contar y cómo), dirige a los intérpretes y coordina al equipo artístico y técnico para que todo responda a una misma idea.</p>
      <p>Su trabajo empieza con el análisis del texto y la elaboración de un <b>concepto de dirección</b>: época, estética, tono y mensaje. Después lo comparte con el escenógrafo, el iluminador, el figurinista y el resto del equipo.</p>`,
      svg: B.flujo("Trabajo de la dirección", ["Analizar el texto", "Definir el concepto: qué y cómo contar", "Reunir y orientar al equipo artístico", "Dirigir los ensayos", "Ajustar ritmo y estreno"]),
    },
    {
      h: "Tipos de espacio escénico",
      html: `<p>El escenario más común es el <b>a la italiana</b>: el público está enfrente y mira a través de un gran marco, la <b>embocadura</b>, como una «cuarta pared» invisible. En el escenario <b>de tres lados</b> (o de empuje) el público rodea la escena por tres lados; en el <b>circular</b> o de arena, por todos.</p>
      <p>También hay espacios <b>no convencionales</b>: la calle, una fábrica, un museo o un bosque. El tipo de espacio cambia la relación con el público: cuanto más lo rodea, más cercanía y menos posibilidades de ocultar cosas.</p>`,
      svg: B.escenarios("Tipos de escenario vistos desde arriba"),
      video: { id: "eMfhK3s8aak", titulo: "Tipos de escenarios teatrales", canal: "Profe Teatro", vistas: 55839 },
    },
    {
      h: "Las partes del escenario",
      html: `<p>En un teatro a la italiana distinguimos el <b>proscenio</b> (la parte delantera, más cercana al público), el <b>telón</b> de boca, las <b>bambalinas</b> (telas horizontales arriba) y los <b>bastidores</b> o patas (telas laterales que ocultan las entradas). Encima está el <b>peine</b> o parrilla, desde donde se cuelgan decorados y focos, y debajo, el <b>foso</b>.</p>
      <p>Las zonas laterales ocultas son las <b>hombreras</b>, donde esperan los intérpretes. La <b>derecha</b> y la <b>izquierda</b> del escenario se nombran desde el punto de vista del actor que mira al público.</p>`,
      svg: B.cajas("Partes del escenario", [["Proscenio", "zona delantera"], ["Bambalinas", "telas de arriba"], ["Bastidores", "telas laterales"], ["Peine", "de donde se cuelga"]]),
    },
    {
      h: "El movimiento escénico",
      html: `<p>La dirección organiza los desplazamientos de los intérpretes: es el <b>trazo</b> o <b>movimiento escénico</b>. El escenario se divide en nueve <b>zonas</b> (fondo, centro y proscenio; derecha, centro e izquierda). El <b>centro del proscenio</b> es la zona más fuerte, la que más atrae la mirada; el fondo y los laterales son más débiles.</p>
      <p>Las posiciones del cuerpo también comunican: de frente al público se da más fuerza; de espaldas, menos. Un buen trazo hace que el público mire siempre donde importa y evita que un intérprete tape a otro.</p>`,
      svg: B.zonas("Las nueve zonas del escenario"),
      video: { id: "vdpSSZDdl1Y", titulo: "Trazo escénico: movimientos y posiciones del actor en el escenario", canal: "Profe Teatro", vistas: 62933 },
    },
    {
      h: "Escenografía y utilería",
      html: `<p>La <b>escenografía</b> es el diseño del espacio: decorados, plataformas, telones, proyecciones. Puede ser <b>realista</b> (imita un lugar con detalle), <b>simbólica</b> (unos pocos elementos que sugieren el lugar) o <b>vacía</b>, donde el espacio se crea con los cuerpos y la luz.</p>
      <p>La <b>utilería</b> son los objetos que usan los intérpretes (una carta, una copa, una espada) y el <b>atrezo</b>, los objetos que decoran. Un solo objeto bien elegido, como una silla, puede transformarse en un trono, un coche o una barca.</p>`,
      svg: B.comparar("Escenografía realista frente a simbólica", ["Realista", ["imita un lugar", "muchos detalles", "época concreta", "cambios lentos"]], ["Simbólica", ["sugiere el lugar", "pocos elementos", "abierta a la imaginación", "cambios rápidos"]]),
    },
    {
      h: "Iluminación y sonido",
      html: `<p>La <b>iluminación</b> no solo permite ver: crea ambientes, marca el paso del tiempo (día, noche), dirige la mirada y expresa emociones. Se juega con la <b>dirección</b> de la luz (frontal, lateral, cenital, contraluz), su <b>intensidad</b> y su <b>color</b>: los cálidos acercan, los fríos distancian.</p>
      <p>El <b>espacio sonoro</b> incluye la música, los efectos (lluvia, puerta, teléfono) y el silencio. Luz y sonido se programan en una mesa y se lanzan en momentos exactos llamados <b>efectos</b> o <b>pies</b> técnicos.</p>`,
      svg: B.luces("Direcciones básicas de la luz escénica"),
      video: { id: "e69_MP6ttMA", titulo: "Práctica de iluminación escénica", canal: "Trade Formación", vistas: 200989 },
    },
    {
      h: "Vestuario, maquillaje y caracterización",
      html: `<p>El <b>vestuario</b>, diseñado por el <b>figurinista</b>, informa de la época, la clase social, la edad y el carácter del personaje, y también de su evolución: un personaje que se arruina puede ir perdiendo color en su ropa. Debe permitir moverse y cambiarse con rapidez.</p>
      <p>El <b>maquillaje</b> y la <b>caracterización</b> (pelucas, barbas, prótesis) refuerzan los rasgos bajo la luz fuerte del escenario, envejecen o transforman al intérprete. Todos los lenguajes deben servir al <b>concepto</b> común de la puesta en escena.</p>`,
      svg: B.cajas("Qué cuenta el vestuario", [["Época", "cuándo ocurre"], ["Clase social", "rico o pobre"], ["Carácter", "colores y formas"], ["Evolución", "cambia con la historia"]]),
    },
  ],
  figura: {
    titulo: "La puesta en escena en cuatro claves",
    items: [["Dirección", "★", "una visión", "común"], ["Espacio", "▭", "escenario y", "escenografía"], ["Luz y sonido", "☀", "ambiente y", "atención"], ["Vestuario", "♛", "época y", "carácter"]],
  },
  video: { id: "5DnAhzkfI-4", titulo: "El teatro y sus elementos. Partes del teatro", canal: "Escuela de Aprendices", vistas: 549947 },
  quiz: [
    ["La puesta en escena es…", ["solo el decorado", "el conjunto de decisiones para llevar una obra al escenario", "el texto escrito", "la venta de entradas"], 1, "Espacio, luz, movimiento, vestuario, ritmo…"],
    ["La figura del director de escena aparece…", ["en Grecia", "a finales del siglo XIX", "en el Siglo de Oro", "en 2000"], 1, "Con el teatro moderno."],
    ["En el escenario a la italiana, el público está…", ["alrededor", "enfrente", "en tres lados", "encima"], 1, "Mira a través de la embocadura."],
    ["El proscenio es…", ["la parte delantera del escenario", "el techo", "el camerino", "el foso"], 0, "La más cercana al público."],
    ["Las telas laterales que ocultan las entradas son…", ["bambalinas", "bastidores o patas", "telones de fondo", "peines"], 1, "Las bambalinas están arriba."],
    ["La zona más fuerte del escenario es…", ["el fondo a la derecha", "el centro del proscenio", "el fondo a la izquierda", "las hombreras"], 1, "Más cercana y central."],
    ["La derecha del escenario se nombra desde…", ["el público", "el actor que mira al público", "el director", "el técnico de luces"], 1, "Convención escénica."],
    ["Una escenografía simbólica…", ["imita con detalle un lugar", "sugiere el lugar con pocos elementos", "no tiene luz", "es siempre de papel"], 1, "Apela a la imaginación."],
    ["La utilería son…", ["los focos", "los objetos que usan los intérpretes", "las telas", "los camerinos"], 1, "Carta, copa, espada…"],
    ["Una luz desde detrás del actor se llama…", ["frontal", "contraluz", "cenital", "lateral"], 1, "Recorta la silueta."],
  ],
  examen: [
    ["Un montaje sitúa Romeo y Julieta en dos bandas de barrio actuales. Es una decisión de…", ["el texto", "la puesta en escena", "la acotación original", "el público"], 1, "Concepto de dirección."],
    ["En un espectáculo el público rodea por completo a los intérpretes. El espacio es…", ["a la italiana", "circular o de arena", "de tres lados", "de calle"], 1, "Arena."],
    ["Dos actores hablan y uno tapa al otro ante el público. Hay que corregir…", ["el vestuario", "el trazo escénico", "el maquillaje", "el sonido"], 1, "Movimiento y posiciones."],
    ["La escena pasa de luz cálida a una luz azul y fría. Probablemente expresa…", ["alegría", "distancia, noche o tristeza", "un error técnico", "fuego"], 1, "Los fríos distancian."],
    ["Un personaje pierde su fortuna y su ropa va perdiendo color. Lo decide…", ["el regidor", "el figurinista", "el técnico de sonido", "el acomodador"], 1, "Diseño de vestuario."],
  ],
  feynman: ["Qué es la puesta en escena y quién la dirige", "Qué tipos de espacio escénico hay", "Cuáles son las partes y zonas del escenario", "Qué aportan la luz y el vestuario"],
  mapa: ["LA PUESTA EN ESCENA", [["Dirección", "concepto · equipo · ensayos"], ["Espacio", "italiana · tres lados · arena · partes"], ["Movimiento", "trazo · nueve zonas · posiciones"], ["Lenguajes", "escenografía · luz · sonido · vestuario"]]],
  tarjetas: [
    ["Puesta en escena", "Conjunto de decisiones para llevar una obra al escenario."],
    ["Director de escena", "Responsable de la visión global del espectáculo."],
    ["Escenario a la italiana", "Escenario con el público enfrente y una embocadura que lo enmarca."],
    ["Proscenio", "Parte delantera del escenario, más cercana al público."],
    ["Bambalinas", "Telas horizontales que ocultan la parte alta del escenario."],
    ["Trazo escénico", "Diseño de los desplazamientos y posiciones de los intérpretes."],
    ["Escenografía", "Diseño del espacio escénico: decorados, plataformas, telones."],
    ["Utilería", "Objetos que manejan los intérpretes en escena."],
  ],
  ejemplos: [
    ["Propón dos puestas en escena para La casa de Bernarda Alba.", ["Realista: casa andaluza blanca, muebles de época, luz de verano intensa.", "Simbólica: un espacio vacío con paredes que se cierran y luz blanca muy dura.", "Vestuario negro en ambas para el luto; en la simbólica, idéntico para todas las hijas."], "Dos lecturas del mismo texto: la primera costumbrista; la segunda subraya el encierro."],
    ["¿Dónde colocarías a un personaje que va a revelar un secreto importante?", ["Buscamos la zona más fuerte del escenario.", "El centro del proscenio está cerca del público y en el centro de la mirada.", "Se le puede aislar con un foco cenital."], "En el centro del proscenio, iluminado con un cenital."],
    ["Sugiere una escena de noche de tormenta sin decorado.", ["Luz: azul y tenue, con destellos blancos de relámpago.", "Sonido: lluvia y truenos en sincronía con los destellos.", "Movimiento: intérpretes encogidos que se protegen del viento."], "La luz, el sonido y el cuerpo crean el espacio."],
  ],
  errores: [
    "Pensar que la puesta en escena es solo poner un decorado bonito.",
    "Confundir la derecha del público con la derecha del escenario.",
    "Colocar a los intérpretes en línea recta y de perfil, tapándose.",
    "Usar luces, músicas y vestuarios que no responden a una misma idea.",
  ],
  ejercicios: {
    b: [
      ["Define puesta en escena.", "Conjunto de decisiones (espacio, luz, sonido, vestuario, movimiento, ritmo) para llevar una obra al escenario."],
      ["Nombra tres tipos de espacio escénico.", "A la italiana, de tres lados y circular o de arena (y espacios no convencionales)."],
      ["¿Qué son el proscenio y las bambalinas?", "Proscenio: parte delantera del escenario; bambalinas: telas horizontales que ocultan la parte alta."],
      ["Cita cuatro direcciones de la luz.", "Frontal, lateral, cenital y contraluz."],
    ],
    m: [
      ["Explica qué hace el director de escena.", "Define el concepto del montaje, dirige a los intérpretes y coordina al equipo artístico y técnico."],
      ["Compara escenografía realista y simbólica.", "La realista imita un lugar con detalle; la simbólica lo sugiere con pocos elementos y deja trabajar la imaginación."],
      ["¿Qué información da el vestuario de un personaje?", "Época, clase social, edad, carácter y su evolución a lo largo de la obra."],
      ["¿Por qué el tipo de escenario cambia la relación con el público?", "Cuanto más rodea el público la escena, más cercanía hay y menos se puede ocultar; a la italiana hay más distancia y marco."],
    ],
    a: [
      ["Diseña la puesta en escena de una escena breve: espacio, zona de cada personaje, luz, sonido y vestuario.", "Respuesta abierta. Se valora la coherencia de todos los lenguajes con un concepto claro."],
      ["Mira una obra grabada y analiza su puesta en escena con los conceptos del tema.", "Respuesta abierta. Debe referirse al espacio, la luz, el vestuario, el movimiento y el concepto general."],
    ],
  },
  glosario: [
    ["Embocadura", "Marco que separa el escenario de la sala en el teatro a la italiana."],
    ["Cuarta pared", "Pared imaginaria entre escena y público."],
    ["Peine", "Estructura sobre el escenario de la que se cuelgan decorados y focos."],
    ["Hombreras", "Zonas laterales ocultas del escenario."],
    ["Cenital", "Luz que cae desde arriba."],
    ["Atrezo", "Objetos que decoran la escena."],
    ["Caracterización", "Transformación del aspecto del intérprete con maquillaje, pelucas o prótesis."],
    ["Concepto de dirección", "Idea central que guía todas las decisiones del montaje."],
  ],
  situacion: {
    titulo: "Cuaderno de dirección",
    reto: "Preparar el cuaderno de dirección de una escena breve.",
    pasos: [
      "Elegid una escena y escribid en una frase vuestro concepto.",
      "Dibujad la planta del escenario con las zonas y los movimientos de cada personaje.",
      "Diseñad la luz, el sonido, el vestuario y un objeto clave.",
      "Ensayadla y presentadla explicando vuestras decisiones.",
    ],
    producto: "Cuaderno de dirección (concepto, planta, trazo, luz, sonido y vestuario) y escena representada.",
    evaluacion: [
      "El concepto es claro y original.",
      "El trazo usa bien las zonas del escenario.",
      "Luz, sonido y vestuario responden al concepto.",
      "La explicación es razonada.",
    ],
  },
  familias: [
    "Visitad un teatro en una jornada de puertas abiertas.",
    "Ved dos versiones de una misma obra o película y comparad su estética.",
    "Fijaos juntos en cómo cambia la luz en un concierto o espectáculo.",
    "Animadle a dibujar el escenario de su obra favorita.",
  ],
  saberes: "La puesta en escena: concepto y dirección escénica; tipos de espacio escénico y partes del escenario; trazo y zonas del escenario; escenografía, utilería y atrezo; iluminación y espacio sonoro; vestuario, maquillaje y caracterización; análisis de puestas en escena.",
  ideas: [
    "Construir maquetas de escenarios a la italiana, de tres lados y circular.",
    "Mover a dos intérpretes por las nueve zonas y comentar el efecto.",
    "Iluminar una misma escena con linternas desde distintas direcciones.",
    "Comparar fotos de dos montajes de un mismo clásico.",
  ],
  fuentes: [
    { t: "Puesta en escena, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Puesta_en_escena" },
    { t: "Escenario, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escenario" },
  ],
});
