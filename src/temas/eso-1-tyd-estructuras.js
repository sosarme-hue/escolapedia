// Tecnología y Digitalización 1º ESO: las estructuras. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

const flecha2 = (x1, y1, x2, y2, c = "var(--red)") => fl(x1, y1, x2, y2, c, 2.2);

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Las estructuras",
  minutos: 55,
  objetivos: ["Definir qué es una estructura y qué funciones cumple", "Distinguir estructuras naturales y artificiales y sus tipos", "Identificar los esfuerzos que soportan los elementos de una estructura", "Explicar por qué la triangulación hace estables las estructuras"],
  claves: ["estructura", "carga", "esfuerzo", "tracción", "compresión", "flexión", "torsión", "cizalladura", "pilar", "viga", "cimentación", "tirante", "triangulación", "estabilidad", "resistencia"],
  pregunta: {
    texto: "Con una sola hoja de papel puedes intentar sostener un libro a unos centímetros de la mesa. Plana no aguanta nada, pero enrollada en un tubo o doblada en acordeón sí. ¿Qué ha cambiado si el papel es el mismo?",
    respuesta: "Ha cambiado la <b>forma</b>. Una estructura no solo depende del material, sino de cómo está colocado. Al enrollarlo o plegarlo, el papel trabaja de canto y en muchas direcciones, y reparte la carga mejor. Por eso los ingenieros usan tubos, perfiles en forma de I o de U y chapas onduladas: con <b>poco material</b> consiguen <b>mucha resistencia</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una estructura?</h3><p>Una <mark>estructura</mark> es un conjunto de elementos unidos entre sí que se encarga de <b>soportar cargas</b> y fuerzas sin romperse ni deformarse demasiado, y de mantener la forma de un objeto. Todos los objetos, construcciones y seres vivos tienen una estructura: el esqueleto de nuestro cuerpo, el tronco y las ramas de un árbol, el armazón de una silla, el cuadro de una bicicleta, los pilares y las vigas de un edificio o los cables de un puente. Las fuerzas que actúan sobre una estructura se llaman <mark>cargas</mark>. Pueden ser <b>fijas</b>, si actúan siempre (como el peso de la propia estructura, del tejado o de las paredes), o <b>variables</b>, si cambian con el tiempo (las personas y los muebles de un edificio, los coches de un puente, el viento, la nieve o un terremoto). Una buena estructura debe soportar todas las cargas previstas con un <b>margen de seguridad</b>.</p>`,
    },
    {
      html: `<h3>Funciones de las estructuras</h3><p>Las estructuras cumplen varias funciones. <b>Soportar pesos</b>: los pilares de un edificio o las patas de una mesa sostienen todo lo que tienen encima. <b>Mantener la forma</b>: el armazón de una tienda de campaña o las varillas de un paraguas hacen que la tela tenga la forma adecuada. <b>Proteger</b> lo que hay en su interior: el cráneo protege el cerebro, el casco de una moto la cabeza, la caja de un ordenador sus componentes y la cáscara de un huevo al embrión. <b>Salvar distancias</b>: un puente permite cruzar un río y una grúa elevar cargas a gran altura. Y <b>dar rigidez</b> a un objeto: el cuadro de una bicicleta mantiene las ruedas y el sillín en su sitio. Muchas estructuras cumplen varias funciones a la vez. Además, una estructura debe ser <mark>resistente</mark> (soportar las cargas sin romperse), <mark>estable</mark> (no volcar) y <b>ligera y económica</b> (usar el menor material posible).</p>`,
    },
    {
      html: `<h3>Estructuras naturales y artificiales</h3><p>Las <mark>estructuras naturales</mark> son las que existen en la naturaleza sin intervención humana: el esqueleto de los vertebrados, el caparazón de una tortuga, la concha de un caracol, el tallo de una planta, un panal de abejas, una tela de araña o las formaciones rocosas, como los arcos naturales. Muchas de ellas son tan eficaces que han servido de inspiración a los ingenieros: los panales hexagonales inspiraron materiales ligeros y resistentes para aviones, y la estructura interna de los huesos, el diseño de algunas torres. Las <mark>estructuras artificiales</mark> son las construidas por el ser humano para resolver sus necesidades: casas, puentes, torres, presas, túneles, grúas, muebles, vehículos, envases… Algunas son muy antiguas, como los dólmenes prehistóricos o los acueductos romanos, y otras muy modernas, como los rascacielos de más de 800 metros o los puentes colgantes de varios kilómetros.</p>`,
      video: { id: "3EEnn5pO-5g", titulo: "Introducción a las ESTRUCTURAS", canal: "Tecnología con CLASE", vistas: 12488 },
    },
    {
      html: `<h3>Tipos de estructuras artificiales</h3><p>Según su forma y cómo reparten las cargas, hay varios tipos. Las <mark>estructuras masivas</mark> están formadas por una gran cantidad de material, sin apenas huecos: las pirámides de Egipto, las murallas o las presas de gravedad. Son muy resistentes pero pesadas y caras. Las <mark>estructuras abovedadas</mark> usan <b>arcos, bóvedas y cúpulas</b>, que transmiten el peso hacia los lados y hacia abajo; permitieron cubrir grandes espacios con piedra, como en las iglesias románicas y góticas o los acueductos. Las <mark>estructuras entramadas</mark> están formadas por <b>pilares y vigas</b> unidos formando una red, como el esqueleto de un edificio moderno de hormigón armado. Las <mark>estructuras trianguladas</mark> están formadas por barras unidas formando triángulos: torres eléctricas, grúas, puentes de hierro o la estructura de un tejado. Las <mark>estructuras colgantes</mark> sostienen las cargas mediante cables o tirantes que cuelgan de puntos altos: los puentes colgantes y atirantados. Y las <b>estructuras laminares</b> son finas superficies curvadas que cubren un espacio, como la carrocería de un coche, una lata o una tienda de campaña.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro tipos de estructuras: masiva como una pirámide, abovedada con un arco, entramada con pilares y vigas y triangulada como una torre">${BG}
        <path d="M14 76 L 44 30 L 74 76 Z" fill="#fcd34d" stroke="var(--ink)" stroke-width="1.5"/>${t(44, 90, "masiva", { size: 10 })}
        <path d="M150 76 V 46 A 30 30 0 0 1 210 46 V 76 H 196 V 48 A 16 16 0 0 0 164 48 V 76 Z" fill="#e5e7eb" stroke="var(--ink)" stroke-width="1.5"/>${t(180, 90, "abovedada", { size: 10 })}
        <g transform="translate(0 -8)"><path d="M22 168 V 112 M54 168 V 112 M86 168 V 112 M18 112 H 90 M18 140 H 90" stroke="var(--pen)" stroke-width="4"/></g>${t(54, 174, "entramada", { size: 10 })}
        <g transform="translate(0 -8)"><path d="M160 168 L 180 112 L 200 168 M166 150 H 194 M172 132 H 188 M166 150 L 188 132 M194 150 L 172 132 M160 168 L 194 150" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linejoin="round"/></g>${t(180, 174, "triangulada", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Los elementos de una estructura</h3><p>Las estructuras de los edificios y de muchos objetos están formadas por elementos que tienen nombre propio. La <mark>cimentación</mark> es la parte que está bajo tierra y apoya la estructura en el suelo; reparte el peso para que el edificio no se hunda (las <b>zapatas</b> son cimientos de hormigón bajo cada pilar). Los <mark>pilares</mark> o columnas son elementos <b>verticales</b> que transmiten las cargas hacia la cimentación. Las <mark>vigas</mark> son elementos <b>horizontales</b> que se apoyan en los pilares y soportan el peso de los forjados (los suelos de cada planta). Los <b>forjados</b> son las superficies horizontales que separan los pisos. Los <mark>tirantes</mark> son elementos, normalmente cables o barras finas, que <b>tiran</b> para sujetar otras partes, como los cables de un puente atirantado o los vientos de una antena. Los <b>arcos</b> salvan un hueco transmitiendo la carga hacia sus apoyos. Y los <b>perfiles</b> son barras de acero con formas especiales (en I, en T, en L, en U o tubos) que aumentan la resistencia sin añadir mucho peso.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un edificio con cimentación bajo el suelo, pilares verticales, vigas horizontales y forjado">${BG}
        <path d="M10 140 H 250" stroke="#a16207" stroke-width="2"/><rect x="10" y="140" width="240" height="30" fill="#a16207" opacity=".18"/>
        ${[50, 130, 210].map((x) => `<rect x="${x - 14}" y="150" width="28" height="12" fill="#94a3b8" stroke="var(--ink)"/><rect x="${x - 4}" y="40" width="8" height="110" fill="#cbd5e1" stroke="var(--ink)"/>`).join("")}
        <rect x="36" y="86" width="188" height="9" fill="#93c5fd" stroke="var(--ink)"/><rect x="36" y="32" width="188" height="9" fill="#93c5fd" stroke="var(--ink)"/>
        ${t(90, 80, "viga", { size: 10.5, color: COL.azul })}${t(90, 120, "pilar", { size: 10.5 })}${fl(102, 117, 124, 117, "var(--ink)", 1.2)}${t(90, 169, "cimentación", { size: 9, color: COL.marron })}
        ${t(130, 22, "forjado", { size: 10.5, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Los esfuerzos</h3><p>Cuando una carga actúa sobre un elemento de una estructura, este sufre un <mark>esfuerzo</mark>: tiende a deformarse de una forma concreta. Hay cinco esfuerzos básicos. <mark>Tracción</mark>: las fuerzas tiran del elemento hacia fuera y tienden a <b>estirarlo</b>; lo sufren los cables de un puente colgante, la cadena de un columpio o una cuerda al arrastrar algo. <mark>Compresión</mark>: las fuerzas empujan hacia dentro y tienden a <b>aplastarlo</b>; lo sufren los pilares, las patas de una silla o las columnas. <mark>Flexión</mark>: las fuerzas tienden a <b>doblarlo</b>; lo sufren las vigas, una estantería cargada de libros o un trampolín. <mark>Torsión</mark>: las fuerzas tienden a <b>retorcerlo</b>; lo sufren una llave al girar en la cerradura, un destornillador o el eje de un motor. <mark>Cizalladura</mark> o cortadura: dos fuerzas en sentido contrario, muy próximas, tienden a <b>cortarlo</b>; lo sufre el papel al cortarlo con tijeras o un tornillo que une dos chapas que se desplazan. Un mismo elemento puede soportar varios esfuerzos a la vez: una viga flexionada está comprimida por arriba y traccionada por abajo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cinco esfuerzos con flechas: tracción estira, compresión aplasta, flexión dobla, torsión retuerce y cizalladura corta">${BG}
        <rect x="30" y="34" width="50" height="12" fill="#cbd5e1" stroke="var(--ink)"/>${flecha2(30, 40, 10, 40)}${flecha2(80, 40, 100, 40)}${t(55, 66, "tracción", { size: 10 })}
        <rect x="160" y="34" width="50" height="12" fill="#cbd5e1" stroke="var(--ink)"/>${flecha2(140, 40, 158, 40)}${flecha2(230, 40, 212, 40)}${t(185, 66, "compresión", { size: 10 })}
        <path d="M14 94 Q 55 112 96 94" fill="none" stroke="var(--ink)" stroke-width="10" opacity=".25"/><path d="M14 94 Q 55 112 96 94" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${flecha2(55, 80, 55, 98)}<path d="M14 100 l -4 8 h 8 z M96 100 l -4 8 h 8 z" fill="var(--muted)"/>${t(55, 128, "flexión", { size: 10 })}
        <rect x="160" y="90" width="50" height="12" fill="#cbd5e1" stroke="var(--ink)"/><path d="M152 84 a 8 12 0 1 0 0 24" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M218 108 a 8 12 0 1 0 0 -24" fill="none" stroke="var(--red)" stroke-width="2"/>${t(185, 128, "torsión", { size: 10 })}
        <rect x="80" y="140" width="40" height="10" fill="#cbd5e1" stroke="var(--ink)"/><rect x="120" y="146" width="40" height="10" fill="#cbd5e1" stroke="var(--ink)"/>${flecha2(116, 132, 116, 142)}${flecha2(124, 168, 124, 158)}${t(200, 156, "cizalladura", { size: 10, anchor: "start" })}</svg>`,
      video: { id: "_piI8eXhpZ4", titulo: "Esfuerzos en las estructuras", canal: "raultecnologia", vistas: 279604 },
    },
    {
      html: `<h3>Estabilidad y resistencia</h3><p>Una estructura debe ser <mark>estable</mark>: no debe volcar ni desplazarse cuando actúan las cargas. Para conseguirlo se puede <b>ampliar la base</b> (una lámpara con el pie ancho es más difícil de tumbar), <b>bajar el centro de gravedad</b>, colocando el peso abajo (por eso las bases de las sombrillas o de las canastas de baloncesto llevan lastre) o <b>sujetar</b> la estructura con tirantes o anclajes al suelo, como en las tiendas de campaña o las grúas. También debe ser <mark>resistente</mark>: soportar las cargas sin romperse. La resistencia depende del <b>material</b> (el acero resiste más que la madera), de la <b>cantidad</b> de material y, sobre todo, de la <b>forma</b>: una regla colocada de canto se dobla mucho menos que colocada de plano, y un tubo resiste casi tanto como una barra maciza del mismo grosor pero pesa mucho menos. Por eso se usan perfiles en I, tubos y chapas onduladas o plegadas.</p>`,
    },
    {
      html: `<h3>La triangulación</h3><p>Si se unen cuatro barras formando un cuadrado y las uniones pueden girar, basta con empujar una esquina para que el cuadrado se deforme y se convierta en un rombo. Pero si se unen tres barras formando un <mark>triángulo</mark>, la figura <b>no se puede deformar</b> sin romper o estirar alguna barra: el triángulo es la única figura plana que es rígida por sí misma. Por eso, para dar rigidez a una estructura de barras, se añade una barra en diagonal que divide cada cuadrado en dos triángulos. Esta técnica se llama <mark>triangulación</mark>, y se usa en torres eléctricas, grúas, puentes metálicos, estanterías, la estructura de los tejados (cerchas), los andamios o el cuadro de una bicicleta, que está formado por dos triángulos. Las diagonales pueden ser barras, que trabajan a compresión o a tracción, o simples cables tensos, que solo trabajan a tracción. Con la triangulación se consiguen estructuras <b>muy rígidas, ligeras y baratas</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuadrado de barras se deforma en rombo al empujarlo; al añadir una diagonal se forman dos triángulos y ya no se deforma">${BG}
        <path d="M24 60 H 84 V 120 H 24 Z" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/><path d="M44 60 H 104 L 84 120 H 24 Z" fill="none" stroke="var(--red)" stroke-width="3" stroke-linejoin="round"/>${flecha2(18, 50, 40, 58)}
        ${[[44, 60], [104, 60], [84, 120], [24, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--ink)"/>`).join("")}
        ${t(64, 146, "se deforma", { size: 11, color: COL.rojo })}
        <path d="M160 60 H 220 V 120 H 160 Z M160 120 L 220 60" fill="none" stroke="var(--leaf)" stroke-width="3" stroke-linejoin="round"/>
        ${[[160, 60], [220, 60], [220, 120], [160, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--ink)"/>`).join("")}${flecha2(138, 50, 158, 58)}
        ${t(190, 146, "rígida", { size: 11, color: COL.verde })}${t(130, 30, "añadir una diagonal = dos triángulos", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "QbLYPI-6kr8", titulo: "Cómo construir estructuras triangulares resistentes con papel de diario", canal: "Reciclando con el Profe César Calfún Calfulaf", vistas: 53852 },
    },
  ],
  figura: {
    titulo: "Las estructuras en ocho ideas",
    svg: rejilla([
      ["Estructura", "soporta cargas y da forma", COL.azul],
      ["Cargas", "fijas y variables", COL.gris],
      ["Tracción", "tiende a estirar", COL.rojo],
      ["Compresión", "tiende a aplastar", COL.naranja],
      ["Flexión", "tiende a doblar", COL.sol],
      ["Torsión", "tiende a retorcer", COL.morado],
      ["Cizalladura", "tiende a cortar", COL.marron],
      ["Triangulación", "triángulos = rigidez", COL.verde],
    ], 4, 86, "Resumen: estructura, cargas, los cinco esfuerzos y la triangulación"),
  },
  video: { id: "K7CFc9IVixU", titulo: "Estructuras", canal: "Esther María Collado Sáez", vistas: 65563, megusta: 0, busqueda: "estructuras tecnologia 1 eso" },
  ejemplos: [
    { enunciado: "Indica el esfuerzo principal de: a) la cuerda de un columpio con un niño; b) la pata de una mesa; c) un trampolín con un nadador en la punta; d) una llave al abrir una puerta.",
      pasos: ["a) La cuerda tira del asiento y se estira: tracción.", "b) La pata soporta el peso de arriba y se aplasta: compresión.", "c) El trampolín se dobla: flexión.", "d) La llave gira y se retuerce: torsión."],
      resultado: "a) tracción; b) compresión; c) flexión; d) torsión." },
    { enunciado: "Una estantería de barras atornilladas se balancea de un lado a otro. ¿Cómo la harías más rígida?",
      pasos: ["El rectángulo de barras se deforma como un rombo.", "Añadir una barra o un cable en diagonal en la parte trasera.", "Así se forman triángulos, que son indeformables."],
      resultado: "Triangulando: diagonales en la parte de atrás o en los laterales." },
    { enunciado: "Una lámpara de pie se cae con facilidad. Propón dos mejoras.",
      pasos: ["Ampliar la base: un pie más ancho.", "Bajar el centro de gravedad: poner peso en la base."],
      resultado: "Base más ancha y más pesada." },
  ],
  errores: [
    "Pensar que la resistencia depende solo del material y no de la forma.",
    "Confundir tracción (estirar) con compresión (aplastar).",
    "Creer que una viga solo sufre un esfuerzo: al flexionarse se comprime por arriba y se tracciona por abajo.",
    "Pensar que un cuadrado de barras es rígido: hay que triangularlo.",
    "Confundir pilares (verticales) con vigas (horizontales).",
  ],
  ejercicios: [
    { q: "¿Qué es una estructura?", sol: "Un conjunto de elementos unidos que soporta cargas sin romperse ni deformarse demasiado y mantiene la forma de un objeto." },
    { q: "Escribe tres funciones de las estructuras con un ejemplo de cada una.", sol: "Soportar pesos (pilar), proteger (casco), mantener la forma (varillas de un paraguas)." },
    { q: "Pon dos ejemplos de estructuras naturales y dos de artificiales.", sol: "Naturales: esqueleto, panal. Artificiales: puente, torre eléctrica." },
    { q: "Diferencia entre cargas fijas y variables.", sol: "Las fijas actúan siempre (peso propio); las variables cambian (personas, viento, nieve)." },
    { q: "¿Qué tipo de estructura es una torre eléctrica? ¿Y una pirámide?", sol: "Triangulada; masiva." },
    { q: "¿Qué esfuerzo sufren los cables de un puente colgante?", sol: "Tracción." },
    { q: "¿Qué esfuerzo sufre el papel al cortarlo con tijeras?", sol: "Cizalladura." },
    { q: "Escribe tres formas de hacer más estable una estructura.", sol: "Ampliar la base, bajar el centro de gravedad y anclarla con tirantes." },
    { q: "¿Por qué el triángulo es la figura más usada en estructuras de barras?", sol: "Porque es la única figura plana indeformable." },
    { q: "¿Para qué sirve la cimentación?", sol: "Para apoyar la estructura en el terreno y repartir el peso para que no se hunda." },
  ],
  quiz: [
    { q: "Un pilar sufre sobre todo…", o: ["compresión", "tracción", "torsión"], a: 0, e: "Compresión." },
    { q: "Una estantería cargada se dobla por…", o: ["flexión", "tracción", "cizalladura"], a: 0, e: "Flexión." },
    { q: "Un destornillador al girar sufre…", o: ["torsión", "compresión", "flexión"], a: 0, e: "Torsión." },
    { q: "La figura plana indeformable es el…", o: ["triángulo", "cuadrado", "hexágono"], a: 0, e: "Triángulo." },
    { q: "Las vigas son elementos…", o: ["horizontales", "verticales", "enterrados"], a: 0, e: "Horizontales." },
    { q: "Un acueducto romano es una estructura…", o: ["abovedada", "colgante", "laminar"], a: 0, e: "Usa arcos." },
    { q: "El peso de la nieve en un tejado es una carga…", o: ["variable", "fija", "nula"], a: 0, e: "Variable." },
    { q: "Para que una lámpara no vuelque conviene…", o: ["base ancha y pesada", "base estrecha", "más altura"], a: 0, e: "Base ancha y pesada." },
    { q: "Un panal de abejas es una estructura…", o: ["natural", "artificial", "colgante"], a: 0, e: "Natural." },
    { q: "La carrocería de un coche es una estructura…", o: ["laminar", "masiva", "entramada"], a: 0, e: "Laminar." },
  ],
  examen: [
    { q: "Los tirantes trabajan a…", o: ["tracción", "compresión", "torsión"], a: 0, e: "Tiran." },
    { q: "El cuadro de una bicicleta está formado por…", o: ["triángulos", "arcos", "cuadrados"], a: 0, e: "Dos triángulos." },
    { q: "Una regla resiste más a flexión colocada…", o: ["de canto", "de plano", "igual"], a: 0, e: "De canto." },
  ],
  feynman: ["Qué esfuerzos hay y cómo reconocer cada uno", "Por qué triangular una estructura la hace rígida", "Cómo conseguir que una estructura sea estable"],
  mapa: mapa("ESTRUCTURAS", "var(--eso)", [
    ["Funciones", "soportar · proteger · dar forma", COL.azul],
    ["Tipos", "masiva · abovedada · entramada · triangulada", COL.marron],
    ["Esfuerzos", "tracción · compresión · flexión…", COL.rojo],
    ["Condiciones", "resistente · estable · ligera", COL.verde],
  ], 300),
  tarjetas: [
    ["Carga", "Fuerza que actúa sobre una estructura."],
    ["Tracción", "Esfuerzo que tiende a estirar."],
    ["Compresión", "Esfuerzo que tiende a aplastar."],
    ["Flexión", "Esfuerzo que tiende a doblar."],
    ["Torsión", "Esfuerzo que tiende a retorcer."],
    ["Cizalladura", "Esfuerzo que tiende a cortar."],
    ["Pilar", "Elemento vertical que transmite las cargas al suelo."],
    ["Triangulación", "Uso de triángulos para que la estructura no se deforme."],
  ],
  familias: ["Construid una torre con espaguetis y plastilina y comprobad qué forma aguanta más.", "Buscad por la calle ejemplos de cada tipo de estructura.", "Probad con una hoja de papel: ¿cuántas monedas aguanta plana, en tubo o en acordeón?"],
  profesores: {
    saberes: "Estructuras: definición, cargas, funciones, estructuras naturales y artificiales, tipos, elementos, esfuerzos, estabilidad, resistencia y triangulación (RD 217/2022, Tecnología y Digitalización, bloque Proceso de resolución de problemas).",
    ideas: ["Reto del puente de papel: máxima carga con una hoja de papel.", "Torres de espaguetis con nubes o plastilina.", "Construcción de un marco de cartón pluma y comprobación de la triangulación con encuadernadores."],
  },
  fuentes: [RD, wiki("Estructura", "Estructura"), wiki("Celosía", "Celosía"), { t: "Areatecnologia: estructuras", url: "https://www.areatecnologia.com/estructuras.htm" }],
  revisado: REV,
};

require("./_eso1L5").libro(module.exports, {
  lectura: ["El puente de espaguetis", `<p>Cada año, en muchos institutos se celebra un concurso curioso: construir un puente con espaguetis crudos y cola, y ver cuánto peso aguanta antes de romperse. El grupo de Nerea empezó pegando espaguetis en paralelo, como las tablas de un puente de madera. Cuando colgaron la primera bolsa con arena, el puente se dobló por el centro y se partió con un crujido.</p><p>«Así no», dijo Nerea. Se fijaron en las fotos de puentes de hierro antiguos y vieron que todos estaban llenos de triángulos. Rehicieron el puente con dos barandillas triangulares unidas por arriba y por abajo, y reforzaron las barras más cargadas pegando varios espaguetis juntos, como si fueran un haz.</p><p>El nuevo puente pesaba casi lo mismo que el primero, unos 200 gramos, pero aguantó más de cinco kilos. El material era idéntico; lo que había cambiado era la <b>forma</b>. Ese es el gran secreto de las estructuras, el mismo que usan los ingenieros cuando diseñan una grúa, un estadio o la torre Eiffel. En este tema aprenderás a ver las estructuras que te rodean, a reconocer los esfuerzos que sufren y a construir las tuyas para que sean estables, resistentes y ligeras.</p>`],
  mas: [
    ["<h3>¿Qué es una estructura?</h3>", `<p>Para diseñar bien una estructura hay que exigirle tres cosas a la vez: que sea <b>resistente</b> (que no se rompa), que sea <b>rígida</b> (que no se deforme demasiado) y que sea <b>estable</b> (que no vuelque). Y, además, que sea <b>ligera y económica</b>, porque cada kilo de material de más cuesta dinero y añade peso que la propia estructura tiene que soportar.</p>`],
    ["<h3>Estabilidad y resistencia</h3>", `<p>El <b>centro de gravedad</b> es el punto donde podemos imaginar concentrado todo el peso de un objeto. Mientras la vertical que pasa por ese punto caiga dentro de la base de apoyo, el objeto no vuelca. Por eso una torre muy alta y estrecha es inestable: basta una pequeña inclinación para que la vertical se salga de la base. La famosa torre de Pisa sigue en pie porque, aunque está inclinada, esa vertical todavía cae dentro de su base.</p>`],
    ["<h3>La triangulación</h3>", `<p>Puedes comprobarlo tú mismo con cuatro tiras de cartón y cuatro encuadernadores: el cuadrado se aplasta con un dedo. Si añades una quinta tira en diagonal, ya no se mueve. En las estructuras trianguladas, cada barra trabaja casi solo a tracción o a compresión, y no a flexión, que es el esfuerzo que más fácilmente rompe una barra delgada.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es una estructura?</h3>", "Estructura", [["soporta", "cargas fijas y variables"], ["resistente", "no se rompe"], ["rígida", "no se deforma"], ["estable", "no vuelca"]], "lo que se le pide"],
    ["<h3>Funciones de las estructuras</h3>", "Funciones", [["soportar", "patas de una mesa"], ["dar forma", "varillas de paraguas"], ["proteger", "cráneo, casco"], ["salvar distancias", "puentes"]], "para qué sirven"],
    ["<h3>Estructuras naturales y artificiales</h3>", "Naturales y artificiales", [["naturales", "esqueleto, panal, concha"], ["artificiales", "puente, silla, edificio"], ["biomímesis", "copiar a la naturaleza"]], "dos orígenes"],
    ["<h3>Estabilidad y resistencia</h3>", "Estabilidad", [["base ancha", "más difícil de tumbar"], ["peso abajo", "centro de gravedad bajo"], ["anclajes", "tirantes y piquetas"], ["resistencia", "material y forma"]], "que no vuelque ni se rompa"],
  ],
  bloques: [
    { tras: "<h3>Los elementos de una estructura</h3>", html: `<h3>Los puentes</h3><p>Un <mark>puente</mark> es una estructura que salva un obstáculo, como un río, un valle o una carretera. Es uno de los mejores ejemplos para ver cómo se reparten las cargas. Hay varios tipos:</p><ul><li><b>Puente de vigas</b>: una o varias vigas apoyadas en pilares. Es el más sencillo (un tronco sobre un arroyo ya es uno), pero las vigas trabajan a flexión, así que no puede salvar grandes distancias sin muchos pilares.</li><li><b>Puente de arco</b>: el arco transmite el peso hacia los apoyos de los extremos y trabaja a compresión. Los romanos construyeron puentes de piedra de este tipo que siguen en pie, como el de Alcántara, en Cáceres.</li><li><b>Puente colgante</b>: el tablero cuelga de cables verticales (péndolas) que se sujetan a dos grandes cables apoyados en torres. Los cables trabajan a tracción y permiten salvar más de un kilómetro, como el Golden Gate de San Francisco.</li><li><b>Puente atirantado</b>: los cables (tirantes) van directamente desde las torres hasta el tablero, en forma de abanico o de arpa. Es muy habitual hoy en las autovías.</li><li><b>Puente de celosía</b>: está hecho de barras trianguladas, como los antiguos puentes de ferrocarril de hierro.</li></ul><p>Elegir el tipo depende de la distancia que hay que salvar, del terreno y del dinero disponible.</p>`, svg: ["Tipos de puentes", [["vigas", "flexión, luces cortas"], ["arco", "compresión"], ["colgante", "cables a tracción"], ["atirantado", "tirantes desde torres"]], "salvar un obstáculo"] },
    { tras: "<h3>Los esfuerzos</h3>", html: `<h3>Esfuerzos combinados: la viga que se dobla</h3><p>En la vida real, un elemento casi nunca sufre un único esfuerzo. Fíjate en una <b>viga</b> apoyada en dos pilares con un peso en el centro: se curva hacia abajo, es decir, sufre <b>flexión</b>. Pero si miramos dentro de ella, la parte de <b>arriba</b> se acorta, porque está <b>comprimida</b>, y la parte de <b>abajo</b> se alarga, porque está <b>traccionada</b>. En el centro hay una zona que casi no trabaja.</p><p>Puedes verlo con una goma de borrar: dibuja unas líneas verticales en un lateral y dóblala. Las líneas se juntan por un lado y se separan por el otro. Este descubrimiento explica dos cosas muy prácticas:</p><ul><li>El <b>hormigón</b> resiste muy bien la compresión pero muy mal la tracción. Por eso las vigas de hormigón llevan <b>barras de acero</b> en la parte de abajo, donde la viga se estira: es el <mark>hormigón armado</mark>.</li><li>Como el centro de la viga trabaja poco, se puede quitar material de ahí sin perder resistencia. Así nacen los <b>perfiles en I</b> y los <b>tubos</b>, que concentran el material arriba y abajo.</li></ul><p>Otros ejemplos de esfuerzos combinados: un tornillo que se aprieta sufre torsión y tracción a la vez; una escalera de mano apoyada en la pared sufre compresión y flexión.</p>`, svg: ["Una viga que se dobla", [["arriba", "se acorta: compresión"], ["centro", "casi no trabaja"], ["abajo", "se alarga: tracción"]], "flexión = compresión + tracción"] },
    { html: `<h3>Perfiles y formas que resisten</h3><p>Ya sabes que la forma importa tanto como el material. Los ingenieros usan <mark>perfiles</mark>, que son barras con una sección (el dibujo que se ve al cortarlas) especialmente pensada para resistir:</p><ul><li><b>Perfil en I o en H</b>: las vigas de acero de los edificios y de las naves industriales.</li><li><b>Perfil en L</b> (angular): esquinas de estanterías metálicas y marcos.</li><li><b>Perfil en U</b>: carriles y refuerzos.</li><li><b>Perfil en T</b>: refuerzos y soportes.</li><li><b>Tubo redondo o cuadrado</b>: cuadros de bicicleta, sillas, andamios. Resiste bien la flexión y la torsión en todas las direcciones.</li></ul><p>Con las <b>chapas</b> pasa lo mismo: una hoja de papel no se sostiene de pie, pero si la doblas en acordeón o la enrollas en un tubo, puede aguantar un libro encima. Por eso las chapas de los tejados son <b>onduladas</b>, el cartón de las cajas lleva un <b>ondulado</b> en el interior y las latas de refresco tienen el fondo abombado. La naturaleza también lo hace: los tallos de los cereales y los huesos largos son <b>huecos</b>, ligeros pero muy resistentes.</p>`, svg: ["Perfiles", [["en I", "vigas de edificios"], ["en L", "estanterías"], ["tubo", "bicicletas, sillas"], ["chapa ondulada", "tejados, cartón"]], "la forma resiste"] },
    { html: `<h3>Construir una estructura en el taller</h3><p>En el aula-taller puedes construir estructuras con materiales sencillos: <b>listones</b> de madera, <b>palillos</b> de brocheta, <b>pajitas</b>, <b>cartón</b>, espaguetis o tiras de papel enrolladas. Para que funcionen bien, sigue estos consejos:</p><ol><li><b>Diseña antes</b>: dibuja un boceto y señala dónde irán las cargas y qué esfuerzo sufrirá cada barra.</li><li><b>Triangula</b> todos los rectángulos con una diagonal o con escuadras de refuerzo (cartelas) en las esquinas.</li><li><b>Cuida las uniones</b>: son el punto débil. Pega con suficiente superficie de contacto, deja secar la cola y, en madera, refuerza con clavos o tornillos.</li><li><b>Ensancha la base</b> y coloca el peso abajo para que sea estable.</li><li><b>Refuerza</b> las barras que sufren compresión: si son largas y finas, tienden a doblarse hacia un lado (se <b>pandean</b>). Puedes unir varias o acortarlas con travesaños.</li><li><b>Prueba y mejora</b>: carga la estructura poco a poco, observa por dónde falla y rediseña esa parte.</li></ol><p>Una buena forma de comparar diseños es calcular la <b>eficiencia</b>: el peso que aguanta dividido entre lo que pesa la estructura. Un puente de 200 g que aguanta 5 kg tiene una eficiencia de 25.</p>`, svg: ["En el taller", [["diseñar", "boceto y cargas"], ["triangular", "diagonales y cartelas"], ["unir bien", "punto débil"], ["probar", "cargar y mejorar"]], "construir y ensayar"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Una viga de hormigón apoyada en dos pilares sostiene una pared en su centro. ¿Dónde hay que colocar las barras de acero?", ["La viga sufre flexión: se curva hacia abajo.", "La parte de arriba se comprime y la de abajo se estira (tracción).", "El hormigón resiste mal la tracción, así que necesita ayuda abajo."], "Las barras de acero van en la parte inferior de la viga, la que se estira."],
    ["Hay que salvar un río de 1.200 m de ancho sin poner pilares en el agua. ¿Qué tipo de puente elegirías?", ["Un puente de vigas necesitaría muchos pilares.", "Un arco de piedra no llega a esa distancia.", "Los cables de acero a tracción permiten salvar grandes luces con solo dos torres."], "Un puente colgante (o, si fuera algo más corto, uno atirantado)."],
    ["El puente de espaguetis de Nerea pesa 200 g y aguanta 5 kg. El de otro grupo pesa 250 g y aguanta 5,5 kg. ¿Cuál es más eficiente?", ["Eficiencia = peso que aguanta ÷ peso propio, en las mismas unidades.", "Nerea: 5.000 g ÷ 200 g = 25.", "Otro grupo: 5.500 g ÷ 250 g = 22."], "El de Nerea es más eficiente (25 frente a 22), aunque aguante menos."],
  ],
  errores: ["Creer que el material que más pesa siempre resiste más: un tubo hueco puede resistir casi lo mismo que una barra maciza y pesa mucho menos."],
  niveles: "bbbbbbbmmm",
  ejercicios: [
    ["b", "¿Qué tres cualidades debe tener una buena estructura?", "Debe ser <b>resistente</b> (no romperse), <b>rígida</b> (no deformarse demasiado) y <b>estable</b> (no volcar); además, ligera y económica."],
    ["b", "Nombra cinco tipos de puentes.", "De <b>vigas</b>, de <b>arco</b>, <b>colgante</b>, <b>atirantado</b> y de <b>celosía</b>."],
    ["b", "¿Qué es un perfil? Pon dos ejemplos.", "Una barra con una sección pensada para resistir: perfil en <b>I</b> (vigas de edificios) y <b>tubo</b> (cuadro de bicicleta)."],
    ["b", "¿Qué es el hormigón armado?", "Hormigón con <b>barras de acero</b> dentro, que resisten la tracción que el hormigón solo no soporta."],
    ["b", "¿Por qué las chapas de los tejados son onduladas?", "Porque el ondulado les da <b>forma</b> y así resisten mucho más la flexión sin usar más material."],
    ["m", "¿Qué esfuerzo sufren los cables de un puente colgante y qué esfuerzo sufre un arco de piedra?", "Los cables, <b>tracción</b>; el arco, <b>compresión</b>."],
    ["m", "Explica qué le pasa por dentro a una viga que se dobla.", "La parte de <b>arriba se comprime</b> (se acorta), la de <b>abajo se tracciona</b> (se alarga) y el centro casi no trabaja."],
    ["m", "¿Por qué una torre alta y estrecha es poco estable?", "Porque tiene una <b>base pequeña</b> y el centro de gravedad <b>alto</b>: con poca inclinación la vertical del centro de gravedad se sale de la base y vuelca."],
    ["m", "Indica dos esfuerzos que sufre a la vez una escalera de mano apoyada en la pared con una persona subida.", "<b>Compresión</b> en los largueros (empujan hacia el suelo) y <b>flexión</b>, porque está inclinada y se curva."],
    ["m", "¿Por qué los huesos largos y los tallos de los cereales son huecos?", "Porque así son <b>ligeros</b> pero conservan casi toda la <b>resistencia</b>: el material está en la parte exterior, donde más trabaja."],
    ["m", "¿Qué significa que una barra «pandea»? ¿Cómo se evita?", "Que una barra larga y fina comprimida se <b>dobla hacia un lado</b>. Se evita haciéndola más gruesa, uniendo varias o acortándola con travesaños."],
    ["m", "¿Por qué las uniones son el punto débil de una maqueta?", "Porque ahí se transmiten todas las fuerzas de una barra a otra y la cola o los clavos tienen poca superficie; si fallan, la estructura se desmonta."],
    ["m", "Haz el experimento del folio: ¿cuántos libros aguanta un folio plano apoyado entre dos libros? ¿Y doblado en acordeón?", "Plano, <b>ninguno</b>: se dobla con su propio peso. En acordeón, puede aguantar uno o más libros. La diferencia es solo la <b>forma</b>."],
    ["a", "Calcula la eficiencia de una torre de pajitas de 80 g que aguanta 2 kg y compárala con otra de 120 g que aguanta 2,4 kg.", "Primera: 2.000 ÷ 80 = <b>25</b>. Segunda: 2.400 ÷ 120 = <b>20</b>. La primera es más eficiente."],
    ["a", "Una estantería metálica de perfiles en L se balancea hacia los lados. Propón tres soluciones.", "1) Añadir <b>diagonales</b> o cruces de San Andrés en la parte de atrás. 2) Poner <b>cartelas</b> en las esquinas. 3) <b>Anclarla a la pared</b>. También ayuda colocar lo más pesado abajo."],
    ["a", "Explica por qué el puente de vigas no sirve para salvar grandes distancias.", "Porque la viga trabaja a <b>flexión</b>: cuanto más larga, más se dobla, y habría que hacerla enorme y pesadísima o poner <b>muchos pilares</b>."],
    ["a", "La torre de Pisa está inclinada y no se cae. Explica por qué usando el centro de gravedad.", "Porque la vertical que pasa por su <b>centro de gravedad</b> todavía cae <b>dentro de su base</b>. Si se inclinara más y saliera, volcaría."],
    ["a", "Diseña con un boceto un puente de palillos de 30 cm de luz. Indica qué barras trabajan a tracción y cuáles a compresión.", "Respuesta abierta. Por ejemplo, una celosía triangular: el cordón <b>superior</b> trabaja a <b>compresión</b>, el <b>inferior</b> a <b>tracción</b> y las diagonales alternan uno y otro esfuerzo."],
    ["a", "Compara una barra maciza y un tubo del mismo diámetro: ¿cuál elegirías para el cuadro de una bicicleta y por qué?", "El <b>tubo</b>: resiste casi lo mismo a flexión y torsión, pero pesa mucho menos, y en una bicicleta el peso importa."],
    ["a", "Analiza la lectura inicial: ¿por qué el primer puente de espaguetis se rompió y el segundo no?", "El primero tenía espaguetis en paralelo que trabajaban a <b>flexión</b> y se partieron. El segundo estaba <b>triangulado</b> (cada barra a tracción o compresión) y las barras más cargadas se <b>reforzaron</b> uniendo varios espaguetis."],
    ["b", "Escribe un ejemplo de estructura que proteja algo.", "El <b>cráneo</b> protege el cerebro; el <b>casco</b> la cabeza; la carcasa del móvil sus circuitos."],
  ],
  cuartas: ["flexión", "torsión", "cizalladura", "pentágono", "colgantes", "entramada", "imaginaria", "centro de gravedad alto", "masiva", "colgante", "flexión", "círculos", "doblada"],
  quiz: [
    ["Una estructura rígida es la que…", ["no se deforma demasiado", "no se mueve de sitio", "pesa mucho", "es de hierro"], "Mantiene su forma con las cargas."],
    ["Los cables de un puente colgante trabajan a…", ["tracción", "compresión", "torsión", "cizalladura"], "Los cables tiran."],
    ["Un arco de piedra trabaja sobre todo a…", ["compresión", "tracción", "torsión", "flexión pura"], "Las piedras se aprietan entre sí."],
    ["En una viga que se dobla, la parte de abajo…", ["se estira (tracción)", "se acorta (compresión)", "no trabaja", "gira"], "La cara convexa se alarga."],
    ["El acero del hormigón armado sirve para resistir…", ["la tracción", "la compresión", "el fuego", "la humedad"], "El hormigón resiste mal la tracción."],
    ["El cuadro de una bicicleta se hace con tubos porque…", ["son ligeros y resistentes", "son más baratos que nada", "no se oxidan nunca", "pesan más"], "Material donde más trabaja."],
    ["Los tirantes de un puente atirantado van…", ["de las torres al tablero", "del suelo al río", "bajo el agua", "de pilar a pilar en horizontal"], "En abanico o en arpa."],
    ["Si una barra fina comprimida se dobla hacia un lado, decimos que…", ["pandea", "se tracciona", "se cizalla", "se tuerce"], "Es el pandeo."],
    ["Un objeto no vuelca si la vertical de su centro de gravedad cae…", ["dentro de la base", "fuera de la base", "en el techo", "a la derecha"], "Condición de estabilidad."],
    ["El cartón de las cajas resiste gracias a…", ["su capa ondulada interior", "su color", "la tinta", "su olor"], "La forma da resistencia."],
  ],
  examen: [
    ["Para salvar 1 km sin pilares en el agua se elige un puente…", ["colgante", "de vigas", "de arco de piedra", "de troncos"], "Cables a tracción."],
    ["Un puente de 200 g que aguanta 6 kg tiene una eficiencia de…", ["30", "12", "3", "1.200"], "6.000 ÷ 200 = 30."],
    ["La viga de acero típica de un edificio tiene perfil en…", ["I", "O", "S", "X"], "Material arriba y abajo."],
    ["El punto débil de una maqueta de palillos suele ser…", ["las uniones", "el color", "la base de cartón", "los palillos enteros"], "Ahí se transmiten las fuerzas."],
    ["Un tornillo que se aprieta sufre a la vez…", ["torsión y tracción", "solo flexión", "solo compresión", "ningún esfuerzo"], "Esfuerzos combinados."],
  ],
  tarjetas: [["Puente colgante", "Tablero que cuelga de cables a tracción apoyados en torres."], ["Hormigón armado", "Hormigón con barras de acero para resistir la tracción."], ["Perfil", "Barra con una sección pensada para resistir: I, L, U, T, tubo."], ["Pandeo", "Una barra larga y fina comprimida se dobla hacia un lado."]],
  glosario: [
    ["estructura", "Conjunto de elementos unidos que soporta cargas y mantiene la forma."],
    ["carga", "Fuerza que actúa sobre una estructura; puede ser fija o variable."],
    ["esfuerzo", "Forma en que un elemento tiende a deformarse al recibir una carga."],
    ["tracción", "Esfuerzo que tiende a estirar un elemento."],
    ["compresión", "Esfuerzo que tiende a aplastar o acortar un elemento."],
    ["flexión", "Esfuerzo que tiende a doblar un elemento."],
    ["torsión", "Esfuerzo que tiende a retorcer un elemento."],
    ["cizalladura", "Esfuerzo que tiende a cortar un elemento."],
    ["pilar", "Elemento vertical que transmite las cargas a la cimentación."],
    ["viga", "Elemento horizontal que soporta cargas y sufre flexión."],
    ["cimentación", "Parte enterrada que apoya la estructura en el suelo."],
    ["triangulación", "Uso de triángulos para dar rigidez a una estructura de barras."],
    ["centro de gravedad", "Punto donde se puede considerar concentrado todo el peso."],
    ["perfil", "Barra con una sección en I, L, U, T o tubo."],
    ["hormigón armado", "Hormigón reforzado con barras de acero."],
  ],
  situacion: { titulo: "El puente más eficiente de la clase", reto: "Diseñar y construir en equipo un puente de palillos o espaguetis de 30 cm de luz que aguante el máximo peso con el mínimo material.", pasos: ["Estudiar fotos de puentes reales y elegir un tipo.", "Dibujar un boceto acotado y señalar qué barras sufren tracción y cuáles compresión.", "Construir el puente triangulando y cuidando las uniones.", "Pesarlo, cargarlo poco a poco hasta que falle y anotar por dónde ha fallado.", "Calcular la eficiencia y proponer una mejora para la versión 2."], producto: "Un puente probado y una ficha con boceto, peso, carga máxima, eficiencia y propuesta de mejora.", evaluacion: ["El boceto identifica bien los esfuerzos de las barras.", "La construcción está triangulada y las uniones son sólidas.", "Se calcula la eficiencia correctamente.", "La propuesta de mejora se basa en el fallo observado."] },
  saberes: "estructuras: cualidades (resistencia, rigidez, estabilidad), tipos de puentes, esfuerzos combinados y flexión en vigas, hormigón armado, perfiles y formas resistentes, centro de gravedad, construcción y ensayo de estructuras en el taller.",
  familias: ["Buscad juntos por la calle o en casa estructuras trianguladas, perfiles y tubos, e intentad adivinar qué esfuerzo sufre cada parte."],
  minutos: 100,
});
