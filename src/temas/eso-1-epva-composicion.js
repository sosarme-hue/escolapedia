// Educación Plástica, Visual y Audiovisual 1º ESO: la composición. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

// Marco de lienzo con contenido.
const marco = (x, y, w, h, dentro, c = "var(--line)") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="var(--card)" stroke="${c}" stroke-width="2"/>${dentro}`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "La composición",
  minutos: 50,
  objetivos: ["Entender la composición como la organización de los elementos en el espacio", "Distinguir composiciones simétricas y asimétricas y reconocer el equilibrio y el peso visual", "Aplicar el ritmo, el centro de interés, las líneas de fuerza y la regla de los tercios", "Componer imágenes propias con intención expresiva"],
  claves: ["composición", "formato", "peso visual", "simetría", "ritmo", "regla de los tercios"],
  pregunta: {
    texto: "Haces una foto a tu amigo delante del mar y queda «rara». La repites moviéndolo un poco a un lado y bajando el horizonte, y de repente queda mucho mejor. ¿Qué ha cambiado?",
    respuesta: "Ha cambiado la <b>composición</b>: el lugar que ocupan los elementos dentro del encuadre. Al sacar a tu amigo del centro y no partir la foto por la mitad con el horizonte, la imagen gana <mark>equilibrio y dinamismo</mark>. Los fotógrafos usan para esto la <b>regla de los tercios</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es componer?</h3><p><b>Componer</b> es <b>organizar</b> los elementos visuales (puntos, líneas, formas, colores, texturas) dentro de un espacio para que la imagen <mark>comunique lo que queremos</mark> y resulte atractiva.</p><p>Antes de empezar una obra hay que decidir:</p><ul><li>El <b>formato</b>: la forma y el tamaño del soporte.</li><li>Qué será lo más <b>importante</b> (el centro de interés).</li><li>Cómo se <b>reparten</b> los elementos: juntos o separados, a un lado o en el centro.</li><li>Qué <b>sensación</b> queremos: calma, movimiento, tensión, alegría…</li></ul><p>Con los mismos elementos se pueden crear composiciones muy distintas. Por eso los artistas hacen varios <b>bocetos</b> pequeños antes de decidir.</p>`,
    },
    {
      html: `<h3>El formato</h3><p>El <b>formato</b> es la forma del soporte, y condiciona mucho la composición:</p>${tabla(["Formato", "Sensación", "Uso típico"], [["Horizontal (apaisado)", "calma, amplitud, estabilidad", "paisajes, panorámicas, pantallas de cine"], ["Vertical", "elevación, esbeltez, dinamismo", "retratos, carteles, historias de redes sociales"], ["Cuadrado", "equilibrio, neutralidad", "álbumes de música, publicaciones de redes"], ["Circular u ovalado", "armonía, concentración", "medallones, rosetones, tondos renacentistas"]])}<p>Un mismo paisaje transmite más calma en horizontal; un árbol alto queda más imponente en vertical. Elige el formato <b>según el tema</b>.</p>`,
      svg: svg("Formatos: horizontal, vertical y cuadrado", `${marco(14, 50, 90, 56, "")}${marco(118, 30, 50, 90, "")}${marco(182, 50, 60, 60, "")}${t(59, 128, "horizontal", { s: 10 })}${t(143, 138, "vertical", { s: 10 })}${t(212, 128, "cuadrado", { s: 10 })}`),
    },
    {
      html: `<h3>El peso visual</h3><p>No todos los elementos «pesan» igual a la vista. Atraen más la mirada (tienen más <b>peso visual</b>) los elementos:</p><ul><li><b>Grandes</b> frente a pequeños.</li><li>De colores <b>cálidos, oscuros o saturados</b> frente a fríos o claros.</li><li><b>Aislados</b> frente a agrupados.</li><li>Con formas <b>regulares</b> o con mucho <b>detalle</b> y textura.</li><li>Situados a la <b>derecha</b> o en la parte <b>superior</b> (en nuestra cultura, que lee de izquierda a derecha).</li></ul><p>Un elemento pequeño rojo puede «pesar» tanto como uno grande gris. Saber esto permite <b>equilibrar</b> la imagen.</p>`,
      svg: svg("Balanza visual: un círculo pequeño rojo equilibra a un círculo grande gris", `<path d="M30 120 H 230" stroke="var(--ink)" stroke-width="3"/><path d="M130 120 L 118 146 H 142 Z" fill="var(--ink)"/><circle cx="70" cy="86" r="32" fill="var(--muted)" fill-opacity=".45"/><circle cx="196" cy="104" r="14" fill="#d7262b"/>${t(70, 164, "grande y gris", { s: 10, c: "var(--muted)" })}${t(196, 164, "pequeño y rojo", { s: 10, c: "#d7262b" })}${t(130, 30, "pesan lo mismo a la vista", { s: 11 })}`),
    },
    {
      html: `<h3>Equilibrio: simetría y asimetría</h3><p>Una composición está <b>equilibrada</b> cuando los pesos visuales se compensan y no parece que vaya a «caerse» hacia un lado.</p><ul><li><b>Simétrica</b>: los elementos se repiten igual a ambos lados de un <b>eje</b>, como en un espejo. Transmite <b>orden</b>, solemnidad y calma, pero puede resultar estática. Es típica de fachadas de templos, escudos y retratos oficiales.</li><li><b>Asimétrica</b>: los dos lados son distintos, pero se compensan (un elemento grande cerca del centro con otro pequeño lejos). Es más <b>dinámica</b> y natural.</li></ul><p>Una composición <b>desequilibrada</b> a propósito transmite inquietud o tensión, y también puede ser una elección expresiva.</p>`,
      svg: svg("Dos composiciones: una simétrica con el eje en el centro y otra asimétrica pero equilibrada", `${marco(14, 30, 110, 100, `<path d="M69 30 V 130" stroke="var(--red)" stroke-dasharray="4 3" stroke-width="1.5"/><rect x="34" y="60" width="24" height="44" fill="var(--pen)" fill-opacity=".4"/><rect x="80" y="60" width="24" height="44" fill="var(--pen)" fill-opacity=".4"/><circle cx="69" cy="48" r="10" fill="var(--sun)"/>`)}${marco(136, 30, 110, 100, `<rect x="152" y="56" width="44" height="60" fill="var(--pen)" fill-opacity=".4"/><circle cx="226" cy="54" r="9" fill="#d7262b"/>`)}${t(69, 150, "simétrica", { s: 11 })}${t(191, 150, "asimétrica", { s: 11 })}`),
      video: vb("comB"),
    },
    {
      html: `<h3>El centro de interés y las líneas de fuerza</h3><p>El <b>centro de interés</b> es el punto o la zona que más llama la atención: hacia donde queremos que mire el espectador primero. Se consigue con contraste, tamaño, color, luz o aislamiento.</p><p>Las <b>líneas de fuerza</b> (o líneas compositivas) son líneas, reales o imaginarias, que <b>guían la mirada</b> por la obra: un camino, una mirada, un brazo extendido, el borde de un río. Pueden llevar al centro de interés.</p><p>Esquemas compositivos clásicos:</p><ul><li><b>Triangular</b>: estabilidad (muchos cuadros religiosos del Renacimiento).</li><li><b>Diagonal</b>: movimiento y profundidad.</li><li><b>Circular</b>: dinamismo cerrado, la mirada gira.</li><li><b>En L</b> u <b>horizontal</b>: calma.</li></ul>`,
    },
    {
      html: `<h3>La regla de los tercios</h3><p>Es una pauta muy usada en fotografía, cine y pintura. Se divide el encuadre con <b>dos líneas horizontales y dos verticales</b> imaginarias en <b>9 partes iguales</b>.</p><ul><li>Los elementos importantes se colocan <b>en los puntos de cruce</b> (puntos fuertes) o a lo largo de las líneas.</li><li>El <b>horizonte</b> se sitúa en el tercio superior o inferior, no en el centro.</li><li>Si una persona mira hacia un lado, se le deja más espacio por delante (espacio de mirada).</li></ul><p>Muchas cámaras de móvil permiten activar una cuadrícula para ayudarte. No es una ley obligatoria, pero da composiciones <mark>equilibradas y dinámicas</mark>.</p>`,
      svg: svg("Encuadre dividido en tercios con el horizonte en el tercio inferior y un árbol en un punto fuerte", `${marco(30, 20, 200, 135, "")}<path d="M96.7 20 V 155 M163.3 20 V 155 M30 65 H 230 M30 110 H 230" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M30 110 H 230" stroke="var(--pen)" stroke-width="3"/><rect x="160" y="70" width="6" height="40" fill="var(--sun)"/><circle cx="163.3" cy="65" r="16" fill="var(--leaf)" fill-opacity=".7"/>${[[96.7, 65], [163.3, 65], [96.7, 110], [163.3, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--red)"/>`).join("")}${t(130, 172, "puntos fuertes en los cruces", { c: "var(--red)", s: 11 })}`),
      video: vb("comB2"),
    },
    {
      html: `<h3>El ritmo</h3><p>El <b>ritmo</b> visual es la <b>repetición</b> ordenada de elementos (formas, colores, líneas) con intervalos. Igual que en la música, crea movimiento y unidad.</p>${tabla(["Tipo de ritmo", "Cómo es", "Ejemplo"], [["Uniforme", "se repite el mismo elemento a la misma distancia", "columnas de un templo, una valla"], ["Alterno", "se alternan dos elementos", "baldosas de ajedrez"], ["Creciente o decreciente", "los elementos aumentan o disminuyen", "una fila de árboles que se aleja"], ["Libre", "repeticiones sin orden fijo", "hojas que caen"]])}<p>El ritmo es fundamental en los <b>mosaicos</b>, los estampados textiles y los diseños de papel pintado.</p>`,
    },
    {
      html: `<h3>Componer tu propia obra</h3><ol><li>Elige el <b>tema</b> y el <b>formato</b> adecuado.</li><li>Haz al menos <b>tres bocetos</b> pequeños («miniaturas») probando distintas colocaciones.</li><li>Decide el <b>centro de interés</b> y cómo llegará a él la mirada.</li><li>Comprueba el <b>equilibrio</b>: ¿la imagen «se cae» hacia algún lado?</li><li>Revisa el <b>espacio vacío</b>: también comunica. No hace falta llenarlo todo.</li></ol><p>Truco para comprobar el equilibrio: mira tu obra en un espejo o dale la vuelta. Los fallos de composición se ven enseguida cuando dejas de reconocer el tema.</p>`,
    },
  ],
  figura: {
    titulo: "La composición en un vistazo",
    svg: filas("Resumen: componer es organizar; el formato condiciona; peso visual; simetría y asimetría; centro de interés y líneas de fuerza; regla de los tercios; ritmo", [["Componer", "organizar los elementos", "var(--pen)"], ["Formato", "horizontal · vertical · cuadrado", "var(--inf)"], ["Peso visual", "tamaño · color · posición", "var(--sun)"], ["Equilibrio", "simétrico · asimétrico", "var(--leaf)"], ["Tercios", "puntos fuertes en los cruces", "var(--red)"], ["Ritmo", "repetición ordenada", "var(--ink)"]], 200),
  },
  video: vg("comV"),
  quiz: mezcla([
    { q: "Componer es…", o: ["organizar los elementos en el espacio", "elegir los colores", "enmarcar un cuadro"], a: 0, e: "Distribuir." },
    { q: "El formato horizontal transmite…", o: ["calma y amplitud", "elevación", "tensión"], a: 0, e: "Como el horizonte." },
    { q: "Tiene más peso visual…", o: ["un elemento rojo y aislado", "uno gris y agrupado", "uno claro y pequeño"], a: 0, e: "Color y aislamiento." },
    { q: "En una composición simétrica…", o: ["los dos lados se repiten como un espejo", "los lados son distintos", "no hay eje"], a: 0, e: "Eje central." },
    { q: "Una composición asimétrica equilibrada es…", o: ["más dinámica", "más solemne", "imposible"], a: 0, e: "Pesos que se compensan." },
    { q: "La zona que más llama la atención es el…", o: ["centro de interés", "formato", "fondo"], a: 0, e: "Hacia donde se mira." },
    { q: "La regla de los tercios divide el encuadre en…", o: ["9 partes", "3 partes", "4 partes"], a: 0, e: "Dos líneas y dos líneas." },
    { q: "Según la regla de los tercios, el horizonte se coloca…", o: ["en un tercio", "en el centro", "fuera del encuadre"], a: 0, e: "Arriba o abajo." },
    { q: "Las columnas de un templo forman un ritmo…", o: ["uniforme", "libre", "creciente"], a: 0, e: "Igual y a igual distancia." },
    { q: "Una composición en diagonal transmite…", o: ["movimiento", "quietud", "simetría"], a: 0, e: "Dinamismo." },
  ]),
  examen: mezcla([
    { q: "Las líneas que guían la mirada son las…", o: ["líneas de fuerza", "líneas de contorno", "líneas auxiliares"], a: 0, e: "Caminos, miradas…" },
    { q: "Un esquema triangular transmite…", o: ["estabilidad", "caos", "velocidad"], a: 0, e: "Base ancha." },
    { q: "Para comprobar el equilibrio se puede…", o: ["mirar la obra en un espejo", "pintarla de negro", "hacerla más grande"], a: 0, e: "Se ven los fallos." },
  ]),
  feynman: ["Qué es la composición", "Qué da más o menos peso visual a un elemento", "Diferencia entre simetría y asimetría", "Cómo se aplica la regla de los tercios", "Tipos de ritmo visual"],
  mapa: mapa("LA COMPOSICIÓN", "var(--eso)", [
    ["Formato", "horizontal · vertical", "var(--pen)"],
    ["Equilibrio", "peso visual · simetría", "var(--leaf)"],
    ["Dirigir la mirada", "centro de interés · tercios", "var(--red)"],
    ["Ritmo", "repetición", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Composición", "Organización de los elementos en el espacio."],
    ["Formato", "Forma y tamaño del soporte."],
    ["Peso visual", "Fuerza con que un elemento atrae la mirada."],
    ["Simetría", "Repetición igual a ambos lados de un eje."],
    ["Asimetría", "Lados distintos que se compensan."],
    ["Centro de interés", "Zona que más atrae la atención."],
    ["Regla de los tercios", "Elementos en los cruces de una cuadrícula de 3 × 3."],
    ["Ritmo", "Repetición ordenada de elementos."],
  ],
  familias: ["Activad la cuadrícula de la cámara del móvil y haced fotos aplicando la regla de los tercios.", "Comparad dos fotos del mismo sitio y decid cuál está mejor compuesta y por qué.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La composición: formato, peso visual, equilibrio, simetría, ritmo, centro de interés, líneas de fuerza y regla de los tercios (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Visor de cartulina para encuadrar en el patio.", "Recortables de formas para probar equilibrios.", "Análisis de la composición de obras del Museo del Prado."],
  },
  fuentes: [RD, { t: "Museo Nacional del Prado: colección en línea", url: "https://www.museodelprado.es/coleccion" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Mejora la composición de una foto de un barco en el centro y el horizonte en la mitad.", pasos: ["Activa la cuadrícula de tercios.", "Baja el horizonte a la línea inferior (más cielo) o súbelo (más mar).", "Coloca el barco en un punto fuerte, dejando espacio hacia donde navega."], resultado: "Imagen más dinámica y equilibrada." },
    { enunciado: "Equilibra una composición con una casa grande a la izquierda.", pasos: ["La casa da mucho peso a la izquierda.", "Añade a la derecha un elemento pequeño pero de color intenso (un globo rojo, un sol).", "Comprueba en el espejo que no se «cae»."], resultado: "Composición asimétrica equilibrada." },
    { enunciado: "Crea un ritmo creciente con círculos.", pasos: ["Traza una línea diagonal.", "Coloca sobre ella círculos cada vez más grandes a la misma distancia.", "Colorea de frío (pequeños) a cálido (grandes)."], resultado: "Sensación de acercamiento y movimiento." },
  ],
  errores: [
    "Colocar siempre lo importante en el centro exacto.",
    "Partir la imagen por la mitad con el horizonte.",
    "Llenar todo el espacio sin dejar zonas de descanso.",
    "Olvidar que un elemento pequeño pero muy llamativo pesa mucho.",
    "Empezar la obra final sin hacer bocetos previos.",
  ],
  ejercicios: [
    { q: "¿Qué formato elegirías para un retrato, una playa y un póster de un concierto? ¿Por qué?", sol: "Vertical; horizontal; vertical (o cuadrado para redes). Por la forma y la sensación del tema." },
    { q: "Ordena de más a menos peso visual: círculo grande gris, círculo pequeño negro, círculo pequeño amarillo pálido.", sol: "Depende del fondo, pero normalmente: pequeño negro ≈ grande gris > pequeño amarillo pálido." },
    { q: "Dibuja una composición simétrica y otra asimétrica con los mismos tres elementos.", sol: "Respuesta práctica." },
    { q: "Busca una obra con esquema triangular y explícalo.", sol: "Respuesta abierta: por ejemplo, una Virgen con el Niño del Renacimiento." },
    { q: "Haz tres fotos del mismo objeto: centrado, en un punto fuerte y en una esquina. ¿Cuál funciona mejor?", sol: "Respuesta práctica: normalmente la del punto fuerte." },
    { q: "Dibuja un ejemplo de ritmo uniforme, alterno y decreciente.", sol: "Respuesta práctica." },
    { q: "Explica qué son las líneas de fuerza con un ejemplo.", sol: "Líneas que guían la mirada; por ejemplo, un camino que lleva hacia una casa." },
    { q: "¿Qué sensación transmite una composición desequilibrada? ¿Cuándo puede ser útil?", sol: "Tensión o inquietud; en un cartel de suspense o una escena de acción." },
    { q: "Haz tres miniaturas de un bodegón con distinta colocación y elige la mejor.", sol: "Respuesta práctica." },
    { q: "Analiza la composición de la portada de un libro o de un disco que te guste.", sol: "Respuesta abierta: formato, centro de interés, equilibrio y ritmo." },
  ],
};
