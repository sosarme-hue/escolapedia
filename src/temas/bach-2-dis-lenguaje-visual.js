// Diseño, 2º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "El lenguaje visual: forma, composición y color",
  minutos: 60,
  objetivos: [
    "Usar los elementos básicos del lenguaje visual (punto, línea, plano, textura) con intención",
    "Aplicar las leyes de la Gestalt y los principios de composición en un diseño",
    "Elegir el color con criterios: modelos RGB y CMYK, armonías, contraste y psicología",
    "Analizar cómo una composición guía la mirada y transmite un mensaje",
  ],
  claves: ["punto", "línea", "plano", "Gestalt", "composición", "jerarquía", "color", "contraste"],
  pregunta: {
    texto: "¿Por qué miras primero un sitio concreto de un cartel, aunque nadie te lo diga?",
    respuesta: "Porque el diseñador ha usado el <mark>tamaño, el contraste, el color y la posición</mark> para crear una jerarquía. El lenguaje visual tiene reglas que guían la mirada.",
  },
  lectura: {
    titulo: "Tres segundos",
    html: `<p>Se calcula que un cartel en la calle tiene unos tres segundos para captar la atención de alguien que pasa. En una red social, todavía menos: el dedo sigue bajando si nada lo detiene.</p>
    <p>En ese tiempo tan corto nadie lee con calma. El cerebro percibe primero formas, contrastes y colores, agrupa lo que está cerca, separa la figura del fondo y decide si algo le interesa. El diseñador que conoce estas reglas de la percepción no deja nada al azar: decide qué se verá primero, qué después y qué sensación quedará. Ese es el objetivo de este tema.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Los elementos básicos",
      html: `<p>Todo mensaje visual se construye con unos pocos <b>elementos básicos</b>. El <b>punto</b> atrae la mirada y marca un centro de interés. La <b>línea</b> dirige el recorrido visual, separa y transmite sensaciones: la horizontal calma, la vertical eleva, la diagonal da dinamismo. El <b>plano</b> o forma define superficies: el círculo es continuo y amable, el cuadrado estable y el triángulo dinámico o agresivo.</p>
      <p>La <b>textura</b> añade calidad táctil, visual o real, y el <b>espacio en blanco</b> (o espacio negativo) deja respirar a los demás elementos. En diseño, el vacío también comunica: es sinónimo de orden, calma y elegancia.</p>`,
      svg: B.cajas("Elementos básicos", [["Punto", "centro de|interés"], ["Línea", "dirección|y ritmo"], ["Plano", "forma y|superficie"], ["Textura y vacío", "tacto visual|y respiro"]]),
    },
    {
      h: "La percepción: leyes de la Gestalt",
      html: `<p>La psicología de la <b>Gestalt</b> («forma» en alemán) estudió a principios del siglo XX cómo el cerebro organiza lo que ve. Sus leyes son herramientas básicas del diseñador. Por <b>proximidad</b>, lo que está cerca se percibe como grupo. Por <b>semejanza</b>, agrupamos lo que comparte forma, color o tamaño. Por <b>cierre</b>, completamos las formas incompletas. Por <b>figura y fondo</b>, separamos lo que destaca de lo que lo rodea.</p>
      <p>Hay más: continuidad (seguimos las líneas), simplicidad (preferimos formas sencillas) o destino común. Muchos logotipos juegan con el cierre o con la figura y el fondo, como la flecha escondida entre letras.</p>`,
      svg: B.gestalt("Cuatro leyes de la Gestalt: proximidad, semejanza, cierre y figura-fondo"),
      video: { id: "UnenlTAGuFg", titulo: "Teoría de la Gestalt aplicada al diseño gráfico", canal: "Hey Jaime", vistas: 252163 },
    },
    {
      h: "Composición y jerarquía",
      html: `<p><b>Componer</b> es organizar los elementos en un formato. El <b>equilibrio</b> puede ser simétrico (estable, formal) o asimétrico (dinámico, moderno), compensando pesos visuales. El peso aumenta con el tamaño, el color intenso, el contraste y la posición alejada del centro.</p>
      <p>La <b>jerarquía</b> ordena la información por importancia: un elemento principal (titular o imagen), uno secundario y los detalles. La <b>regla de los tercios</b> sitúa los puntos de interés en los cruces de una cuadrícula de 3 × 3. En occidente leemos en Z o en F, de arriba a la izquierda hacia abajo a la derecha, y el diseñador aprovecha ese recorrido para colocar lo esencial donde la vista llega primero.</p>`,
      svg: B.tercios("Regla de los tercios: el motivo se sitúa en un punto fuerte"),
    },
    {
      h: "Contraste, ritmo y alineación",
      html: `<p>El <b>contraste</b> crea interés y diferencia: grande-pequeño, claro-oscuro, lleno-vacío, recto-curvo. Sin contraste todo pesa igual y nada destaca. El <b>ritmo</b> nace de la repetición de elementos con un intervalo; puede ser regular, alterno o progresivo, como en una melodía.</p>
      <p>La <b>alineación</b> une visualmente los elementos aunque estén separados: un texto alineado a la izquierda y una imagen que arranca en la misma línea parecen relacionados. Junto a la proximidad y la repetición, son los principios que más mejoran un diseño principiante en poco tiempo.</p>`,
      svg: B.cajas("Cuatro principios rápidos", [["Contraste", "lo importante|destaca"], ["Repetición", "ritmo y|coherencia"], ["Alineación", "todo|conectado"], ["Proximidad", "agrupa lo|relacionado"]]),
    },
    {
      h: "Formato y retícula",
      html: `<p>El <b>formato</b> es el soporte: su tamaño y proporción condicionan el diseño. Los papeles siguen la norma DIN (A4, A3…) y las pantallas tienen proporciones como 16:9 o 9:16. Un formato vertical sugiere elevación y uno horizontal, calma.</p>
      <p>La <b>retícula</b> es una estructura invisible de márgenes, columnas, filas y medianiles que ordena los elementos. Da coherencia a las páginas de una revista o a las pantallas de una web y facilita trabajar rápido. El diseñador puede romperla a propósito para crear sorpresa, pero solo funciona si antes existe un orden.</p>`,
      svg: B.reticula("Página con retícula de cuatro columnas: márgenes, columnas, titular, texto e imagen"),
    },
    {
      h: "El color: modelos y armonías",
      html: `<p>El diseñador trabaja con dos modelos de color. El <b>RGB</b> (rojo, verde, azul) es aditivo: mezcla luces y se usa en pantallas. El <b>CMYK</b> (cian, magenta, amarillo y negro) es sustractivo: mezcla tintas y se usa en imprenta. Un mismo color puede verse distinto en pantalla y en papel; por eso existen guías como Pantone.</p>
      <p>Las <b>armonías</b> combinan colores de forma agradable: monocromática (un tono con variaciones), análoga (colores vecinos en el círculo cromático) y complementaria (opuestos, máximo contraste). La regla 60-30-10 reparte un color dominante, uno secundario y uno de acento.</p>`,
      svg: B.circulo("Círculo cromático de 12 colores"),
    },
    {
      h: "Psicología y uso del color",
      html: `<p>Los colores despiertan asociaciones, en parte culturales. El rojo sugiere energía, pasión o peligro; el azul, confianza y calma (por eso lo usan bancos y tecnológicas); el verde, naturaleza y salud; el amarillo, alegría y atención; el negro, elegancia o luto. En otras culturas el blanco se asocia al luto.</p>
      <p>Además del significado, el color debe ser <b>legible</b> y <b>accesible</b>: el texto necesita suficiente contraste con el fondo, y no conviene transmitir información solo con el color, porque alrededor de un 8 % de los hombres tiene alguna forma de daltonismo.</p>`,
      svg: B.rejilla("Asociaciones del color", ["Color", "Asociación", "Uso típico"], [["Rojo", "energía, alerta", "ofertas, peligro"], ["Azul", "confianza", "bancos, tecnología"], ["Verde", "naturaleza", "ecología, salud"], ["Amarillo", "alegría", "atención"], ["Negro", "elegancia", "lujo"]]),
      video: { id: "X8kbrAzV6BM", titulo: "Psicología del color en diseño gráfico: ¿qué evocan y transmiten los colores?", canal: "Marco Creativo", vistas: 323315 },
    },
  ],
  figura: {
    titulo: "Leer una imagen en cuatro pasos",
    items: [["Elementos", "•—▲", "punto, línea", "y plano"], ["Percepción", "◐", "leyes de", "la Gestalt"], ["Composición", "▦", "jerarquía y", "retícula"], ["Color", "◉", "modelo, armonía", "y significado"]],
  },
  video: { id: "7N2v0bpNFKA", titulo: "Fundamentos del diseño: elementos básicos", canal: "LearnFree en Español", vistas: 615599 },
  quiz: [
    ["La línea diagonal transmite…", ["calma", "dinamismo", "estabilidad", "silencio"], 1, "Movimiento e inestabilidad."],
    ["El espacio en blanco en diseño…", ["es un error", "deja respirar y también comunica", "debe eliminarse", "solo sirve en libros"], 1, "Orden y elegancia."],
    ["Por la ley de proximidad percibimos como grupo…", ["lo que tiene el mismo color", "lo que está cerca", "lo que está incompleto", "lo que está detrás"], 1, "Agrupación espacial."],
    ["Completar mentalmente un círculo dibujado a trozos es la ley de…", ["semejanza", "cierre", "continuidad", "figura-fondo"], 1, "El cerebro cierra la forma."],
    ["La jerarquía visual sirve para…", ["que todo pese igual", "ordenar la información por importancia", "decorar", "rellenar"], 1, "Principal, secundario, detalle."],
    ["En la regla de los tercios, el motivo se coloca…", ["en el centro exacto", "en los cruces de la cuadrícula 3 × 3", "en una esquina", "fuera del formato"], 1, "Puntos fuertes."],
    ["La retícula es…", ["un filtro de color", "una estructura invisible que ordena la página", "una tipografía", "un tipo de papel"], 1, "Márgenes, columnas, medianiles."],
    ["Para un folleto impreso se trabaja en…", ["RGB", "CMYK", "HTML", "MP3"], 1, "Tintas de imprenta."],
    ["Una armonía complementaria usa…", ["colores vecinos", "colores opuestos en el círculo", "un solo tono", "solo grises"], 1, "Máximo contraste."],
    ["No conviene transmitir información solo con el color porque…", ["es caro", "hay personas con daltonismo", "cansa la vista", "no se imprime"], 1, "Accesibilidad."],
  ],
  examen: [
    ["En un cartel todo tiene el mismo tamaño y color. ¿Qué principio falla?", ["Alineación", "Contraste y jerarquía", "Retícula", "Formato"], 1, "Nada destaca."],
    ["Un logo usa el hueco entre dos letras para formar una flecha. ¿Qué ley aprovecha?", ["Proximidad", "Figura y fondo", "Semejanza", "Continuidad"], 1, "El fondo se vuelve figura."],
    ["Diseñas una web: ¿qué modelo de color usas?", ["CMYK", "RGB", "Pantone solo", "Ninguno"], 1, "Pantallas: luz."],
    ["Quieres transmitir calma y confianza para una clínica. ¿Qué gama eliges?", ["Rojos y negros", "Azules y verdes suaves", "Amarillo fluorescente", "Marrones oscuros"], 1, "Asociaciones del color."],
    ["Los iconos de un menú tienen formas distintas pero el mismo color y se leen como un conjunto. ¿Por qué?", ["Por cierre", "Por semejanza de color", "Por la regla de los tercios", "Por el formato"], 1, "Agrupamos lo semejante."],
  ],
  feynman: ["Qué transmiten la línea horizontal, la vertical y la diagonal", "Cuatro leyes de la Gestalt con un ejemplo cada una", "Qué es la jerarquía visual", "Diferencia entre RGB y CMYK"],
  mapa: ["LENGUAJE VISUAL", [["Elementos", "punto · línea · plano · textura · vacío"], ["Percepción", "proximidad · semejanza · cierre"], ["Composición", "equilibrio · jerarquía · tercios · retícula"], ["Color", "RGB/CMYK · armonías · significado"]]],
  tarjetas: [
    ["Gestalt", "Teoría que explica cómo el cerebro organiza lo que percibe."],
    ["Proximidad", "Lo cercano se percibe como un grupo."],
    ["Figura y fondo", "Separamos lo que destaca de lo que lo rodea."],
    ["Jerarquía visual", "Orden de importancia de los elementos de un diseño."],
    ["Peso visual", "Atracción de un elemento según tamaño, color y posición."],
    ["Retícula", "Estructura de columnas y márgenes que ordena la página."],
    ["RGB / CMYK", "Color luz para pantallas / color tinta para imprenta."],
    ["Armonía complementaria", "Combinación de colores opuestos en el círculo cromático."],
  ],
  ejemplos: [
    ["Ordena por jerarquía la información de un cartel de concierto.", ["1: nombre del grupo (grande, contraste).", "2: fecha y lugar (tamaño medio).", "3: precio, web y patrocinadores (pequeño, abajo)."], "Tres niveles claros que se leen en ese orden."],
    ["Propón una paleta 60-30-10 para una marca de helados.", ["60 %: blanco crema (fondo).", "30 %: rosa fresa (formas y titulares).", "10 %: verde menta (botones y detalles)."], "Paleta alegre, con un acento complementario."],
    ["Explica por qué un texto gris claro sobre fondo blanco es un mal diseño.", ["Contraste insuficiente.", "Difícil de leer para muchas personas y en pantallas con sol.", "Solución: gris oscuro o negro, o fondo más oscuro."], "La legibilidad va antes que la estética."],
  ],
  errores: [
    "Llenar todo el espacio: el vacío también es parte del diseño.",
    "Dar el mismo peso a todos los elementos, sin jerarquía.",
    "Preparar para imprenta en RGB y llevarse sorpresas de color.",
    "Usar el color como única forma de distinguir información.",
  ],
  ejercicios: {
    b: [
      ["¿Qué sensación transmite cada tipo de línea: horizontal, vertical y diagonal?", "Horizontal: calma; vertical: elevación y estabilidad; diagonal: dinamismo."],
      ["Define con tus palabras las leyes de proximidad y de cierre.", "Proximidad: lo que está cerca parece un grupo. Cierre: completamos las formas incompletas."],
      ["¿Qué modelo de color se usa en pantalla y cuál en imprenta?", "RGB en pantalla (luz) y CMYK en imprenta (tintas)."],
      ["Cita tres factores que aumentan el peso visual.", "Tamaño, color intenso, contraste, posición alejada del centro, forma irregular."],
    ],
    m: [
      ["Busca un logotipo que use la ley de figura y fondo y explícalo.", "Respuesta abierta: describir qué forma aparece en el espacio negativo y qué aporta al mensaje."],
      ["Dibuja dos composiciones con los mismos elementos: una simétrica y otra asimétrica. Compara.", "La simétrica resulta estable y formal; la asimétrica, más dinámica, equilibrada por pesos."],
      ["Explica la regla 60-30-10 con un ejemplo de una habitación o una web.", "60 % color dominante (paredes o fondo), 30 % secundario (muebles o bloques), 10 % acento (cojines o botones)."],
      ["¿Por qué un rojo puede verse distinto en el móvil y en un folleto impreso?", "El móvil usa luz RGB y el folleto tintas CMYK con una gama más reducida; hay que convertir y comprobar con pruebas o guías Pantone."],
    ],
    a: [
      ["Analiza un cartel real: elementos, leyes de la Gestalt, jerarquía, retícula y color.", "Respuesta abierta. Se valora usar el vocabulario del tema y justificar cada observación."],
      ["Rediseña un aviso del instituto aplicando contraste, alineación, proximidad y repetición.", "Respuesta abierta: comparación antes y después con explicación de cada mejora."],
    ],
  },
  glosario: [
    ["Espacio negativo", "Zona vacía alrededor o entre los elementos."],
    ["Medianil", "Espacio entre dos columnas de una retícula."],
    ["Formato DIN", "Serie normalizada de tamaños de papel (A4, A3…)."],
    ["Pantone", "Sistema de referencia de colores para imprenta."],
    ["Síntesis aditiva", "Mezcla de luces: más luz, más claro (RGB)."],
    ["Síntesis sustractiva", "Mezcla de tintas: más tinta, más oscuro (CMYK)."],
    ["Daltonismo", "Dificultad para distinguir ciertos colores."],
    ["Lectura en Z", "Recorrido habitual de la mirada en una página occidental."],
  ],
  situacion: {
    titulo: "El aviso que nadie lee",
    reto: "Rediseñar un cartel informativo del centro para que se entienda en tres segundos.",
    pasos: [
      "Fotografiad un cartel del centro y analizad sus fallos.",
      "Definid la jerarquía: qué debe leerse primero, después y al final.",
      "Bocetad tres composiciones y elegid una con retícula y paleta de color.",
      "Probadlo con compañeros: ¿qué recuerdan tras tres segundos?",
    ],
    producto: "Cartel rediseñado con informe de análisis y prueba con usuarios.",
    evaluacion: [
      "La jerarquía es clara y se capta rápido.",
      "Aplica principios de composición y Gestalt con intención.",
      "El color es coherente, legible y accesible.",
    ],
  },
  familias: [
    "Jugad a adivinar qué mira primero cada uno en un anuncio de revista.",
    "Buscad logos con «trucos» de figura y fondo.",
    "Observad qué colores usan los bancos, los supermercados y las marcas de comida rápida.",
    "Ordenad juntos una estantería pensando en ritmo y alineación.",
  ],
  saberes: "Elementos configurativos del lenguaje visual; percepción visual y leyes de la Gestalt; principios de composición: equilibrio, jerarquía, contraste, ritmo, alineación; formato y retícula; el color en el diseño: modelos RGB y CMYK, armonías, psicología y accesibilidad",
  ideas: [
    "Ejercicios rápidos de composición con recortes de papel negro.",
    "Galería de logos para descubrir leyes de la Gestalt.",
    "Comparación de pruebas de color en pantalla y en papel.",
    "Uso de un comprobador de contraste en línea para textos.",
  ],
  fuentes: [
    { t: "Psicología de la Gestalt, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Psicolog%C3%ADa_de_la_Gestalt" },
    { t: "Pautas de accesibilidad WCAG: contraste mínimo (W3C)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
  ],
});
