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
