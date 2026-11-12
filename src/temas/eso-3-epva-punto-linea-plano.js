// Educación Plástica, Visual y Audiovisual 3º ESO: punto, línea y plano. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Elementos de la imagen: punto, línea y plano",
  minutos: 50,
  objetivos: ["Reconocer el punto, la línea y el plano como elementos básicos de la imagen", "Analizar sus posibilidades expresivas", "Comprender los principios de composición: equilibrio, peso visual y ritmo", "Aplicar estos elementos en composiciones propias"],
  claves: ["punto", "línea", "plano", "composición", "peso visual", "ritmo"],
  pregunta: {
    texto: "Georges Seurat pintó cuadros enormes usando solo puntitos de colores. ¿Por qué de lejos no se ven los puntos?",
    respuesta: "Porque el ojo <mark>mezcla</mark> los puntos cercanos y los percibe como manchas y colores continuos. Es la base del <b>puntillismo</b>, y también de las pantallas: tu móvil forma las imágenes con millones de puntos de luz llamados píxeles.",
  },
  bloques: [
    {
      html: `<h3>Los elementos básicos del lenguaje visual</h3><p>Igual que el lenguaje escrito tiene letras y palabras, el lenguaje visual tiene <b>elementos básicos</b> con los que se construye cualquier imagen: el <b>punto</b>, la <b>línea</b>, el <b>plano</b> (o forma), el <b>color</b> y la <b>textura</b>.</p><p>En este tema estudiamos los tres primeros. Están en todas partes: en un cuadro, en un logotipo, en una fotografía o en la fachada de un edificio. Saber reconocerlos y usar sus <mark>valores expresivos</mark> te permitirá analizar imágenes y crear composiciones con intención.</p>`,
    },
    {
      html: `<h3>El punto</h3><p>El <b>punto</b> es el elemento visual más simple: la mínima expresión de una marca. No tiene por qué ser redondo ni pequeño: depende de su <b>relación con el espacio</b> que lo rodea. Una luna en un cielo inmenso funciona como un punto.</p><p>Sus valores expresivos:</p><ul><li>Un punto aislado <mark>atrae la mirada</mark> y crea un centro de atención.</li><li>Varios puntos juntos forman <b>líneas</b>, <b>texturas</b> o <b>manchas</b>.</li><li>Puntos de distinto tamaño y densidad crean sensación de volumen y de <b>luz y sombra</b>.</li><li>Puntos de colores puros yuxtapuestos se mezclan en el ojo (puntillismo).</li></ul>`,
      svg: svg("Usos del punto: un punto solo como centro de atención, puntos en fila formando una línea y puntos más densos que crean sombra en una esfera", `<rect x="14" y="20" width="70" height="100" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="58" cy="56" r="7" fill="var(--red)"/>
        <rect x="95" y="20" width="70" height="100" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[...Array(9)].map((_, i) => `<circle cx="${104 + i * 6.5}" cy="${100 - i * 8}" r="2.6" fill="var(--pen)"/>`).join("")}
        <rect x="176" y="20" width="70" height="100" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[...Array(140)].map((_, i) => { const a = i * 2.4, r = 26 * Math.sqrt((i % 70) / 70); const x = 211 + r * Math.cos(a), y = 70 + r * Math.sin(a); return x > 205 || y > 74 ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6" fill="var(--ink)"/>` : ""; }).join("")}
        ${t(49, 140, "atención", { c: "var(--red)", s: 11 })}${t(130, 140, "línea", { c: "var(--pen)", s: 11 })}${t(211, 140, "volumen", { c: "var(--ink)", s: 11 })}${t(130, 166, "el punto crea…", { c: "var(--muted)", s: 11 })}`),
      video: { id: "Mx5EJI8-dEE", titulo: "Elementos visuales de la imagen: punto, línea y plano", canal: "Juan Marcel Francia", vistas: 102585, megusta: 0 },
    },
    {
      html: `<h3>La línea</h3><p>La <b>línea</b> es un punto en movimiento: tiene una dirección y una longitud. Es el elemento más usado en el dibujo, porque sirve para <b>delimitar</b> formas (contorno), <b>sugerir</b> volumen (sombreado con tramas) y <b>dirigir</b> la mirada.</p><p>Según su forma hay líneas <b>rectas</b>, <b>curvas</b>, <b>quebradas</b>, <b>mixtas</b> y <b>onduladas</b>. Según su trazo pueden ser finas, gruesas, continuas, discontinuas, firmes o temblorosas. También hay <b>líneas implícitas</b>, que no se dibujan pero se perciben: la mirada de un personaje o la dirección de un brazo que señala.</p>`,
    },
    {
      html: `<h3>Expresividad de la línea</h3>${tabla(["Línea", "Sensación"], [["Horizontal", "calma, reposo, estabilidad, horizonte"], ["Vertical", "fuerza, elevación, espiritualidad, equilibrio"], ["Diagonal / oblicua", "movimiento, dinamismo, inestabilidad"], ["Curva", "suavidad, delicadeza, continuidad"], ["Quebrada / en zigzag", "tensión, agresividad, nerviosismo"]])}<p>Los artistas lo aprovechan: un paisaje con muchas horizontales transmite paz; una escena de batalla llena de diagonales transmite caos. Las catedrales góticas, con sus verticales, buscan elevar la mirada hacia el cielo.</p>`,
      svg: svg("Cinco tipos de línea con su sensación: horizontal calma, vertical fuerza, diagonal movimiento, curva suavidad y quebrada tensión", `<path d="M20 40 H 80" stroke="var(--pen)" stroke-width="4"/><path d="M110 18 V 64" stroke="var(--pen)" stroke-width="4"/><path d="M140 64 L 186 18" stroke="var(--red)" stroke-width="4"/><path d="M200 50 Q 215 10 230 40 T 250 30" fill="none" stroke="var(--leaf)" stroke-width="4"/>
        ${t(50, 84, "calma", { s: 11 })}${t(110, 84, "fuerza", { s: 11 })}${t(163, 84, "movimiento", { s: 11 })}${t(225, 84, "suavidad", { s: 11 })}
        <path d="M60 140 L 80 110 L 100 140 L 120 110 L 140 140 L 160 110 L 180 140 L 200 110" fill="none" stroke="var(--inf)" stroke-width="4"/>${t(130, 166, "quebrada: tensión", { s: 11 })}`),
    },
    {
      html: `<h3>El plano y la forma</h3><p>El <b>plano</b> es una superficie delimitada por líneas o por cambios de color. Cuando una línea se cierra, crea una <b>forma</b>. Las formas pueden ser:</p><ul><li><b>Geométricas</b>: regulares y medibles (círculo, cuadrado, triángulo). Transmiten orden, precisión, modernidad.</li><li><b>Orgánicas</b>: irregulares y curvas, como las de la naturaleza. Transmiten vida, libertad, naturalidad.</li></ul><p>Las formas básicas tienen connotaciones: el <mark>círculo</mark> sugiere protección y perfección; el <mark>cuadrado</mark>, estabilidad y solidez; el <mark>triángulo</mark>, dinamismo y tensión, sobre todo si se apoya en un vértice.</p>`,
    },
    {
      html: `<h3>Planos y profundidad</h3><p>Los planos también sirven para crear <b>sensación de espacio</b> en una superficie plana. Recursos:</p><ul><li><b>Superposición</b>: lo que tapa a otro parece estar delante.</li><li><b>Tamaño</b>: lo más pequeño parece más lejano.</li><li><b>Posición</b>: lo más alto en el cuadro suele parecer más lejos.</li><li><b>Color y nitidez</b>: lo lejano se ve más azulado y difuminado (perspectiva atmosférica).</li></ul><p>En una fotografía o cuadro distinguimos <mark>primer plano</mark>, <b>plano medio</b> y <b>fondo</b>. Los cubistas, como Picasso y Juan Gris, rompieron estas reglas y mostraron los objetos desde varios puntos de vista a la vez con planos superpuestos.</p>`,
      svg: svg("Tres montañas superpuestas de distinto tamaño y color: la más pequeña y clara parece la más lejana", `<rect x="14" y="14" width="232" height="140" rx="8" fill="#dbeafe"/><path d="M14 110 L 70 50 L 120 100 L 170 40 L 246 110 V 154 H 14 Z" fill="#a5b4fc"/><path d="M14 130 L 90 70 L 160 130 Z" fill="var(--pen)" fill-opacity=".7"/><path d="M110 154 L 190 80 L 246 140 V 154 Z" fill="var(--ink)" fill-opacity=".85"/>
        ${t(70, 172, "fondo", { c: "var(--muted)", s: 11 })}${t(130, 172, "plano medio", { c: "var(--pen)", s: 11 })}${t(210, 172, "primer plano", { c: "var(--ink)", s: 11 })}`),
    },
    {
      html: `<h3>La composición</h3><p><b>Componer</b> es organizar los elementos dentro del formato (el espacio disponible) para transmitir un mensaje. Cada elemento tiene un <b>peso visual</b>: atrae más la mirada si es más grande, más oscuro o de color más intenso, si está aislado o si tiene una forma irregular.</p><p>Según cómo se reparte el peso, la composición es:</p><ul><li><b>Simétrica</b>: los dos lados de un eje son iguales. Transmite orden y calma, pero puede resultar estática.</li><li><b>Asimétrica</b>: los lados son distintos pero el peso está <mark>compensado</mark>, como en una balanza con un objeto grande cerca del centro y uno pequeño lejos.</li></ul>`,
      svg: svg("Dos balanzas: composición simétrica con dos formas iguales y composición asimétrica compensada con una forma grande cerca del centro y una pequeña lejos", `<path d="M20 70 H 120 M70 70 V 100" stroke="var(--ink)" stroke-width="2.5"/><circle cx="40" cy="56" r="14" fill="var(--pen)"/><circle cx="100" cy="56" r="14" fill="var(--pen)"/><path d="M62 108 h 16 l -8 -8 z" fill="var(--ink)"/>
        <path d="M140 70 H 240 M175 70 V 100" stroke="var(--ink)" stroke-width="2.5"/><circle cx="158" cy="48" r="22" fill="var(--red)"/><circle cx="232" cy="62" r="8" fill="var(--red)"/><path d="M167 108 h 16 l -8 -8 z" fill="var(--ink)"/>
        ${t(70, 136, "simétrica", { c: "var(--pen)", s: 12 })}${t(190, 136, "asimétrica", { c: "var(--red)", s: 12 })}${t(190, 152, "compensada", { c: "var(--red)", s: 11 })}`),
      video: { id: "GQNOE9HJP8E", titulo: "Equilibrio compositivo en el lenguaje visual", canal: "Jonatan Lubo", vistas: 93416, megusta: 0 },
    },
    {
      html: `<h3>Esquemas compositivos y ritmo</h3><p>Muchas obras se organizan sobre un <b>esquema compositivo</b>, una estructura geométrica oculta: <b>triangular</b> (estable, muy usada en el Renacimiento), <b>circular</b> (envolvente), <b>en diagonal</b> (dinámica) o en <b>L</b>. La <b>regla de los tercios</b> divide el formato en nueve partes iguales y sitúa los elementos importantes en los cruces de las líneas.</p><p>El <b>ritmo</b> es la repetición ordenada de elementos. Puede ser <b>uniforme</b> (siempre igual, como los postes de una valla), <b>alterno</b> (dos elementos que se intercalan) o <b>creciente/decreciente</b> (los elementos aumentan o disminuyen de tamaño), que crea sensación de movimiento y profundidad.</p>`,
    },
    {
      html: `<h3>Punto, línea y plano en el arte</h3><ul><li><b>Seurat</b> y <b>Signac</b> (puntillismo, siglo XIX) construyeron cuadros con puntos de color puro.</li><li><b>Kandinsky</b> escribió el libro <i>Punto y línea sobre el plano</i> (1926) y pintó composiciones abstractas donde estos elementos expresan emociones como la música.</li><li><b>Mondrian</b> redujo la pintura a líneas horizontales y verticales y planos de colores primarios.</li><li><b>Yayoi Kusama</b> llena espacios enteros de puntos (lunares).</li><li>El <b>arte aborigen australiano</b> usa desde hace siglos puntos para narrar historias.</li></ul><p>Observar estas obras te ayudará a usar los elementos básicos con intención en tus trabajos.</p>`,
    },
  ],
  figura: {
    titulo: "Los elementos básicos y lo que expresan",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="El punto atrae la atención y crea texturas; la línea delimita y da dirección; el plano crea formas y profundidad; la composición organiza con peso visual y ritmo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Punto", "atrae la mirada · texturas · volumen · puntillismo", "var(--red)"], ["Línea", "contorno · dirección · calma, fuerza o movimiento", "var(--pen)"], ["Plano / forma", "geométrica u orgánica · profundidad", "var(--leaf)"], ["Composición", "peso visual · equilibrio · ritmo · tercios", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ivdNulDcKBc", titulo: "7 elementos visuales del diseño gráfico", canal: "Hey Jaime", vistas: 263587, megusta: 0, busqueda: "elementos básicos del lenguaje visual" },
  quiz: mezcla([
    { q: "El elemento visual más simple es…", o: ["la línea", "el punto", "el plano"], a: 1, e: "Es la mínima expresión de una marca." },
    { q: "La técnica de pintar con puntos de color puro se llama…", o: ["puntillismo", "cubismo", "expresionismo"], a: 0, e: "Seurat y Signac." },
    { q: "Las líneas horizontales transmiten…", o: ["calma", "tensión", "movimiento"], a: 0, e: "Como el horizonte." },
    { q: "Las líneas diagonales transmiten…", o: ["reposo", "dinamismo", "solidez"], a: 1, e: "Sugieren caída o avance." },
    { q: "Una forma irregular como la de una hoja es…", o: ["geométrica", "orgánica", "simétrica"], a: 1, e: "Propia de la naturaleza." },
    { q: "En una imagen, lo que tapa a otro objeto parece…", o: ["más lejos", "delante", "más pequeño"], a: 1, e: "Superposición." },
    { q: "Un elemento atrae más la mirada si es…", o: ["pequeño y claro", "grande y oscuro", "igual que los demás"], a: 1, e: "Tiene más peso visual." },
    { q: "Una composición con lados distintos pero compensados es…", o: ["simétrica", "asimétrica", "radial"], a: 1, e: "Equilibrio por compensación." },
    { q: "La regla de los tercios divide el formato en…", o: ["3 partes", "9 partes", "4 partes"], a: 1, e: "Dos líneas horizontales y dos verticales." },
    { q: "¿Qué artista escribió «Punto y línea sobre el plano»?", o: ["Kandinsky", "Mondrian", "Picasso"], a: 0, e: "Publicado en 1926." },
  ]),
  examen: mezcla([
    { q: "La mirada de un personaje que dirige nuestra vista es una línea…", o: ["implícita", "quebrada", "de contorno"], a: 0, e: "No se dibuja pero se percibe." },
    { q: "Repetir postes iguales a la misma distancia crea un ritmo…", o: ["uniforme", "alterno", "creciente"], a: 0, e: "Siempre igual." },
    { q: "Mondrian usaba sobre todo…", o: ["líneas horizontales y verticales", "puntos", "curvas orgánicas"], a: 0, e: "Y planos de colores primarios." },
  ]),
  feynman: ["Por qué el punto no tiene que ser pequeño ni redondo", "Qué sensaciones transmite cada tipo de línea", "Cómo se crea profundidad con planos", "Qué es el peso visual y cómo se equilibra una composición asimétrica"],
  mapa: mapa("PUNTO · LÍNEA · PLANO", "var(--eso)", [
    ["Punto", "atención · textura · píxel", "var(--red)"],
    ["Línea", "dirección · expresión", "var(--pen)"],
    ["Plano", "forma · profundidad", "var(--leaf)"],
    ["Composición", "peso · equilibrio · ritmo", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Punto", "Elemento visual mínimo; depende de su relación con el espacio."],
    ["Puntillismo", "Técnica de pintar con puntos de color puro que el ojo mezcla."],
    ["Línea", "Un punto en movimiento: tiene dirección."],
    ["Línea implícita", "La que no se dibuja pero se percibe (una mirada, un gesto)."],
    ["Forma orgánica", "Irregular y curva, como las de la naturaleza."],
    ["Peso visual", "Capacidad de un elemento para atraer la mirada."],
    ["Composición asimétrica", "Lados distintos con el peso compensado."],
    ["Ritmo", "Repetición ordenada de elementos en una composición."],
  ],
  familias: ["Buscad en casa o en la calle ejemplos de líneas horizontales, verticales y diagonales y comentad qué transmiten.", "Mirad juntos una obra de Kandinsky o Mondrian en la web de un museo.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje visual: elementos básicos de la imagen (punto, línea, plano), valores expresivos, composición, equilibrio, peso visual y ritmo (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Composición abstracta con solo punto, línea y plano para expresar una emoción o una canción.", "Fotografiar el entorno buscando líneas expresivas.", "Retrato puntillista con rotuladores."],
  },
  fuentes: [RD, { t: "Museo Nacional Thyssen-Bornemisza: Kandinsky, Mondrian y Seurat", url: "https://www.museothyssen.org/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Diseña una composición que transmita calma usando solo líneas.",
      pasos: ["Elige líneas horizontales largas y finas.", "Repártelas con ritmo uniforme y espacios amplios entre ellas.", "Evita diagonales y zigzags.", "Deja un punto aislado en un tercio para crear un centro de atención suave."],
      resultado: "Un paisaje abstracto sereno, parecido a un horizonte." },
    { enunciado: "Analiza el uso de la línea en una fotografía de una carrera ciclista en plena curva.",
      pasos: ["Los cuerpos inclinados y las bicis forman diagonales.", "La carretera traza una curva que guía la mirada.", "Las diagonales transmiten velocidad y riesgo."],
      resultado: "La línea diagonal y curva comunica dinamismo." },
    { enunciado: "Equilibra una composición asimétrica con un círculo grande negro.",
      pasos: ["Coloca el círculo grande cerca del centro, algo desplazado a la izquierda.", "Al otro lado, más cerca del borde, sitúa un círculo pequeño de color intenso.", "Comprueba entrecerrando los ojos que ningún lado «pesa» más."],
      resultado: "Composición asimétrica compensada, más dinámica que una simétrica." },
  ],
  errores: [
    "Pensar que el punto siempre es pequeño y redondo.",
    "Colocar el elemento principal siempre en el centro exacto.",
    "Usar demasiados elementos con el mismo peso visual, sin jerarquía.",
    "Confundir simetría con equilibrio: una composición puede estar equilibrada sin ser simétrica.",
    "Dibujar los objetos lejanos del mismo tamaño y nitidez que los cercanos.",
  ],
  ejercicios: [
    { q: "Nombra tres usos expresivos del punto.", sol: "Crear un centro de atención, formar texturas y sugerir volumen o sombra según la densidad (también mezclar colores en el puntillismo)." },
    { q: "Dibuja cinco tipos de línea y escribe junto a cada una la sensación que transmite.", sol: "Horizontal: calma. Vertical: fuerza/elevación. Diagonal: movimiento. Curva: suavidad. Quebrada: tensión." },
    { q: "¿Qué tipo de línea predominaría en un cartel para un festival de música electrónica? ¿Y para un spa?", sol: "Electrónica: diagonales y quebradas (energía). Spa: curvas y horizontales (calma)." },
    { q: "Explica la diferencia entre forma geométrica y orgánica con dos ejemplos de cada una.", sol: "Geométrica: regular y medible (señal de tráfico, ventana). Orgánica: irregular, natural (nube, hoja)." },
    { q: "Enumera cuatro recursos para crear profundidad con planos.", sol: "Superposición, diferencia de tamaño, posición en el cuadro y perspectiva atmosférica (color y nitidez)." },
    { q: "¿Qué tiene más peso visual: un cuadrado pequeño rojo o uno grande gris claro? Razona.", sol: "Depende del conjunto, pero un color intenso como el rojo suele pesar mucho; un gris claro grande también pesa por tamaño. Hay que valorar tamaño, color y posición." },
    { q: "Dibuja un esquema compositivo triangular sobre una obra del Renacimiento que conozcas.", sol: "Respuesta abierta. Ej.: en muchas Vírgenes con el Niño, las figuras forman un triángulo con la cabeza de la Virgen en el vértice." },
    { q: "Pon un ejemplo de ritmo uniforme, alterno y creciente en tu entorno.", sol: "Uniforme: farolas de una calle. Alterno: baldosas blancas y negras. Creciente: escalones vistos en perspectiva." },
    { q: "Sitúa con la regla de los tercios el horizonte y el sol en una foto de un atardecer.", sol: "Horizonte sobre la línea horizontal inferior (o superior) y el sol en uno de los cruces de líneas." },
    { q: "Crea una composición abstracta con punto, línea y plano que represente una emoción y explica tus decisiones.", sol: "Respuesta abierta. Debe justificar el tipo de líneas, formas, peso visual y ritmo según la emoción elegida." },
  ],
};
