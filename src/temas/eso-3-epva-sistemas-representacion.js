// Educación Plástica, Visual y Audiovisual 3º ESO: sistemas de representación. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";
// Pieza en L en isométrica: origen (ox, oy), unidad u.
const iso = (ox, oy, u) => { const P = (x, y, z) => `${(ox + (x - y) * u * 0.866).toFixed(1)} ${(oy + (x + y) * u * 0.5 - z * u).toFixed(1)}`; return P; };

module.exports = {
  materia: M,
  curso: C,
  titulo: "Sistemas de representación: vistas y perspectiva",
  minutos: 50,
  objetivos: ["Conocer los sistemas de representación y para qué sirve cada uno", "Dibujar las vistas diédricas (alzado, planta y perfil) de una pieza sencilla", "Representar piezas en perspectiva caballera e isométrica", "Iniciarse en la perspectiva cónica y la acotación"],
  claves: ["sistema diédrico", "alzado", "planta", "perfil", "perspectiva isométrica", "perspectiva caballera"],
  pregunta: {
    texto: "Si un mueble de montar viene en piezas, ¿cómo sabes qué forma tiene cada una y dónde va sin verlo montado?",
    respuesta: "Por los <mark>planos</mark> del manual: unas veces muestran la pieza en perspectiva, como si la vieras en 3D, y otras con sus <b>vistas</b> desde delante, arriba y el lado, con sus medidas. Los sistemas de representación son el idioma universal de ingenieros, arquitectos y diseñadores.",
  },
  bloques: [
    {
      html: `<h3>Representar el espacio en un papel</h3><p>Los objetos tienen tres dimensiones (alto, ancho y profundo), pero el papel solo tiene dos. Los <b>sistemas de representación</b> son métodos con reglas precisas para dibujar objetos tridimensionales en un plano, de forma que cualquiera pueda interpretarlos igual.</p>${tabla(["Sistema", "Qué muestra", "Uso típico"], [["<b>Diédrico</b>", "vistas separadas con medidas reales", "planos de piezas e instrucciones de fabricación"], ["<b>Axonométrico</b> (isométrica)", "una sola imagen en 3D, medidas reales en los ejes", "catálogos, montajes, videojuegos"], ["<b>Caballera</b>", "cara frontal real y profundidad oblicua", "dibujos rápidos y explicativos"], ["<b>Cónico</b>", "como lo ve el ojo, con puntos de fuga", "arquitectura, arte, ilustración"]])}`,
    },
    {
      html: `<h3>El sistema diédrico: las vistas</h3><p>Imagina la pieza dentro de una caja y mírala de frente a cada cara, <b>perpendicularmente</b>. Cada imagen es una <b>vista</b>:</p><ul><li><b>Alzado</b>: vista desde delante. Es la principal: elige la cara que más información da.</li><li><b>Planta</b>: vista desde arriba.</li><li><b>Perfil</b>: vista desde un lado (normalmente el izquierdo).</li></ul><p>En el <b>sistema europeo</b>, la planta se dibuja <mark>debajo</mark> del alzado y el perfil izquierdo, a la <mark>derecha</mark> del alzado. Las vistas están alineadas: el alzado y la planta tienen el mismo ancho; el alzado y el perfil, la misma altura.</p>`,
      svg: svg("Vistas de una pieza en L: alzado, planta debajo y perfil a la derecha, alineadas", `<path d="M30 30 H 60 V 60 H 110 V 90 H 30 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="30" y="110" width="80" height="50" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/><path d="M60 110 V 160" stroke="var(--leaf)" stroke-width="2"/>
        <path d="M140 30 H 190 V 90 H 140 Z" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2.5"/><path d="M140 60 H 190" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        <path d="M30 92 V 108 M110 92 V 108 M62 30 H 138 M112 90 H 138" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
        ${t(70, 22, "alzado", { c: "var(--pen)", s: 11 })}${t(70, 175, "planta", { c: "var(--leaf)", s: 11 })}${t(165, 22, "perfil", { c: "var(--red)", s: 11 })}${t(228, 120, "sistema", { c: "var(--muted)", s: 10 })}${t(228, 134, "europeo", { c: "var(--muted)", s: 10 })}`),
      video: { id: "7JU-sObizA8", titulo: "Vistas: alzado, planta y perfil", canal: "Aprendo", vistas: 144479, megusta: 0 },
    },
    {
      html: `<h3>Cómo dibujar las vistas paso a paso</h3><ol><li>Observa la pieza y decide qué cara será el <b>alzado</b> (la más característica).</li><li>Dibuja el alzado con sus medidas reales (o a escala).</li><li>Baja líneas de referencia finas y dibuja la <b>planta</b> debajo, con el mismo ancho.</li><li>Lleva líneas horizontales y dibuja el <b>perfil</b> a la derecha, con la misma altura.</li><li>Las aristas que no se ven desde ese punto se dibujan con <mark>línea discontinua</mark> (aristas ocultas).</li><li>Repasa las aristas visibles con línea gruesa continua.</li></ol><p>Un truco: la profundidad de la planta coincide con el ancho del perfil. Puedes trasladarla con un arco de compás o con una línea a 45°.</p>`,
    },
    {
      html: `<h3>Perspectiva isométrica</h3><p>La <b>isométrica</b> es una perspectiva axonométrica en la que los tres ejes (alto, ancho y fondo) forman <mark>120° entre sí</mark>. El eje vertical se dibuja vertical y los otros dos, a 30° con la horizontal, usando el cartabón.</p><p>Las medidas se llevan sobre los ejes en <b>verdadera magnitud</b> (sin reducir), por eso es muy fácil de dibujar a partir de las vistas. Las circunferencias se ven como <b>elipses</b>. Es la perspectiva de muchos manuales de montaje y de los videojuegos «isométricos».</p>`,
      svg: svg("Pieza en L dibujada en perspectiva isométrica con los tres ejes a 120 grados", `${(() => { const P = iso(110, 70, 22); return `<path d="M${P(0, 0, 0)} L ${P(4, 0, 0)} L ${P(4, 0, 1)} L ${P(2, 0, 1)} L ${P(2, 0, 2)} L ${P(0, 0, 2)} Z" fill="var(--pen)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>
          <path d="M${P(0, 0, 2)} L ${P(0, -2, 2)} L ${P(2, -2, 2)} L ${P(2, 0, 2)} Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>
          <path d="M${P(2, 0, 1)} L ${P(2, -2, 1)} L ${P(4, -2, 1)} L ${P(4, 0, 1)} Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>
          <path d="M${P(2, 0, 2)} L ${P(2, -2, 2)} L ${P(2, -2, 1)} L ${P(2, 0, 1)} Z" fill="var(--red)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/>
          <path d="M${P(4, 0, 0)} L ${P(4, -2, 0)} L ${P(4, -2, 1)} L ${P(4, 0, 1)} Z" fill="var(--red)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/>`; })()}
        ${t(40, 160, "ejes a 120°", { c: "var(--muted)", s: 11 })}${t(200, 160, "medidas reales", { c: "var(--muted)", s: 11 })}`),
      video: { id: "daDwoPgdSKY", titulo: "Perspectiva isométrica a partir de las vistas", canal: "Dibujo Técnico paso a paso", vistas: 475408, megusta: 0 },
    },
    {
      html: `<h3>Perspectiva caballera</h3><p>En la <b>perspectiva caballera</b>, la cara frontal del objeto se dibuja <mark>tal como es</mark>, en verdadera magnitud, con los ejes horizontal y vertical a 90°. La profundidad se dibuja sobre un eje oblicuo, normalmente a <b>45°</b>, y se <b>reduce</b> (por ejemplo, a la mitad, coeficiente 0,5) para que no parezca deformada.</p><p>Es la perspectiva más rápida para explicar un objeto con un dibujo: se dibuja el alzado y se «empuja» hacia atrás. Su inconveniente es que las caras laterales y superior se ven deformadas.</p>`,
      svg: svg("Cubo en perspectiva caballera: cara frontal cuadrada real y profundidad a 45 grados reducida a la mitad", `<rect x="50" y="70" width="80" height="80" fill="var(--pen)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2.5"/><path d="M50 70 L 78 42 H 158 L 130 70 Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2.5"/><path d="M130 70 L 158 42 V 122 L 130 150 Z" fill="var(--red)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M130 150 L 158 122" stroke="var(--red)" stroke-width="1"/>${t(90, 166, "cara frontal real", { c: "var(--pen)", s: 11 })}${t(206, 80, "fondo a 45°", { c: "var(--red)", s: 11 })}${t(206, 96, "reducido × 0,5", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Perspectiva cónica</h3><p>La <b>perspectiva cónica</b> representa los objetos como los vemos realmente: lo lejano se ve más pequeño y las líneas paralelas que se alejan parecen juntarse en un <b>punto de fuga</b> situado en la <b>línea de horizonte</b> (a la altura de los ojos del observador).</p><ul><li><b>Cónica frontal</b> (un punto de fuga): el objeto está de frente, como una calle recta o un pasillo.</li><li><b>Cónica oblicua</b> (dos puntos de fuga): el objeto se ve de esquina, como un edificio desde una esquina.</li></ul><p>La descubrieron los artistas del <b>Renacimiento</b> italiano, como Brunelleschi y Piero della Francesca, en el siglo XV.</p>`,
      svg: svg("Calle en perspectiva cónica frontal: las líneas de las aceras y edificios convergen en un punto de fuga sobre la línea de horizonte", `<path d="M14 80 H 246" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="6 4"/><circle cx="130" cy="80" r="4" fill="var(--red)"/>
        <path d="M14 170 L 130 80 L 246 170" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M14 20 L 130 80 M246 20 L 130 80" stroke="var(--muted)" stroke-width="1.5"/>
        <path d="M14 20 V 150 M60 44 V 134 M246 20 V 150 M200 44 V 134" stroke="var(--pen)" stroke-width="2"/>
        ${t(130, 68, "punto de fuga", { c: "var(--red)", s: 11 })}${t(66, 94, "horizonte", { c: "var(--red)", s: 10, a: "start" })}`),
    },
    {
      html: `<h3>Escalas</h3><p>Los objetos reales suelen ser demasiado grandes o pequeños para el papel. La <b>escala</b> es la relación entre la medida del dibujo y la real: <mark>escala = dibujo : realidad</mark>.</p><ul><li><b>Escala natural</b> 1:1: tamaño real.</li><li><b>Escala de reducción</b>, como 1:50 o 1:100: 1 cm en el plano son 50 o 100 cm en la realidad. Se usa en planos de casas y mapas.</li><li><b>Escala de ampliación</b>, como 5:1: el dibujo es 5 veces mayor. Se usa para piezas pequeñas, como las de un reloj.</li></ul><p>En un plano a escala 1:100, una pared de 4 m se dibuja con 4 cm.</p>`,
    },
    {
      html: `<h3>Normalización y acotación</h3><p>Para que un plano se entienda en todo el mundo, se siguen <b>normas</b> (UNE, ISO): tipos de línea, formatos de papel (A4, A3), rotulación y forma de poner las medidas.</p><p>La <b>acotación</b> indica las medidas reales del objeto. Cada <b>cota</b> tiene:</p><ul><li><b>Líneas auxiliares</b> que salen de la pieza.</li><li><b>Línea de cota</b> paralela a la medida, con flechas en los extremos.</li><li><b>Cifra de cota</b>: la medida real, normalmente en milímetros, sobre la línea.</li></ul><p>Regla de oro: cada medida se acota <mark>una sola vez</mark>, en la vista donde se vea más clara.</p>`,
    },
    {
      html: `<h3>Del papel al ordenador y al 3D</h3><p>Hoy los planos se hacen con programas de <b>CAD</b> (diseño asistido por ordenador) y de <b>modelado 3D</b>, como Tinkercad, FreeCAD o SketchUp. Con ellos se diseña una pieza en 3D y el programa genera automáticamente sus vistas y perspectivas.</p><p>Esos modelos se pueden fabricar con una <b>impresora 3D</b>, una cortadora láser o una fresadora. Pero los principios son los mismos que aprendes a mano: elegir bien el alzado, entender aristas visibles y ocultas, trabajar a escala y acotar con claridad. Saber leer y dibujar vistas es la base de profesiones como la arquitectura, la ingeniería o el diseño de producto.</p>`,
    },
  ],
  figura: {
    titulo: "Qué sistema usar",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Diédrico para fabricar con medidas; isométrica para ver en 3D con medidas reales; caballera para explicar rápido; cónica para ver como el ojo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Diédrico", "alzado, planta y perfil · medidas exactas para fabricar", "var(--pen)"], ["Isométrica", "ejes a 120° · medidas reales · manuales", "var(--leaf)"], ["Caballera", "frente real + fondo a 45° reducido", "var(--red)"], ["Cónica", "puntos de fuga · como lo ve el ojo", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="180" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "M7vh5QiySH8", titulo: "Perspectivas caballera e isométrica", canal: "Aprendo", vistas: 92720, megusta: 0, busqueda: "perspectiva caballera isométrica" },
  quiz: mezcla([
    { q: "La vista de un objeto desde arriba se llama…", o: ["alzado", "planta", "perfil"], a: 1, e: "Vista superior." },
    { q: "En el sistema europeo, la planta se dibuja…", o: ["encima del alzado", "debajo del alzado", "a la izquierda"], a: 1, e: "Y el perfil izquierdo, a la derecha." },
    { q: "Las aristas ocultas se dibujan con línea…", o: ["discontinua", "gruesa", "de color"], a: 0, e: "Trazos cortos." },
    { q: "En la isométrica, los ejes forman entre sí…", o: ["90°", "120°", "45°"], a: 1, e: "Tres ángulos iguales." },
    { q: "En la caballera, la cara frontal se dibuja…", o: ["deformada", "en verdadera magnitud", "reducida a la mitad"], a: 1, e: "Lo que se reduce es la profundidad." },
    { q: "El eje de profundidad de la caballera suele ir a…", o: ["45°", "30°", "60°"], a: 0, e: "Con coeficiente de reducción." },
    { q: "Las líneas paralelas que se alejan convergen en el punto de fuga en la perspectiva…", o: ["cónica", "isométrica", "caballera"], a: 0, e: "Como las ve el ojo." },
    { q: "En un plano a escala 1:50, 2 cm representan…", o: ["1 m", "100 m", "25 cm"], a: 0, e: "2 · 50 = 100 cm." },
    { q: "Una escala 10:1 es de…", o: ["reducción", "ampliación", "tamaño natural"], a: 1, e: "El dibujo es 10 veces mayor." },
    { q: "En acotación, cada medida se pone…", o: ["en todas las vistas", "una sola vez", "solo en la planta"], a: 1, e: "Para no duplicar información." },
  ]),
  examen: mezcla([
    { q: "El alzado y la planta de una pieza tienen igual…", o: ["ancho", "altura", "profundidad"], a: 0, e: "Están alineados en vertical." },
    { q: "Una calle recta vista de frente se dibuja en cónica con…", o: ["un punto de fuga", "dos puntos de fuga", "ninguno"], a: 0, e: "Cónica frontal." },
    { q: "Las cifras de cota en dibujo técnico suelen expresarse en…", o: ["mm", "cm", "m"], a: 0, e: "Norma habitual." },
  ]),
  feynman: ["Por qué hacen falta sistemas de representación", "Cómo se colocan alzado, planta y perfil en el sistema europeo", "En qué se diferencian la isométrica y la caballera", "Qué es un punto de fuga"],
  mapa: mapa("REPRESENTACIÓN", "var(--eso)", [
    ["Diédrico", "alzado · planta · perfil", "var(--pen)"],
    ["Axonométrico", "isométrica · 120°", "var(--leaf)"],
    ["Caballera", "frente real · 45°", "var(--red)"],
    ["Cónico", "horizonte · fuga", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Alzado", "Vista frontal de la pieza."],
    ["Planta", "Vista desde arriba; en el sistema europeo, debajo del alzado."],
    ["Perfil izquierdo", "Vista lateral; en el sistema europeo, a la derecha del alzado."],
    ["Arista oculta", "Arista que no se ve: se dibuja con línea discontinua."],
    ["Isométrica", "Ejes a 120° y medidas reales sobre ellos."],
    ["Caballera", "Frente en verdadera magnitud y fondo oblicuo reducido."],
    ["Punto de fuga", "Punto del horizonte donde convergen las paralelas que se alejan."],
    ["Escala 1:100", "1 cm del dibujo = 100 cm reales."],
  ],
  familias: ["Elegid un objeto sencillo de casa (una caja de pañuelos, un taburete) y dibujad juntos sus tres vistas.", "Mirad unas instrucciones de montaje y descubrid qué perspectiva usan.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sistemas de representación: diédrico (vistas), axonométrico (isométrica), caballera, iniciación a la cónica, escalas, normalización y acotación (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Construir piezas con policubos y dibujar sus vistas por parejas.", "Modelar en Tinkercad una pieza dibujada a mano y comparar.", "Fotografiar calles del entorno y trazar sus puntos de fuga."],
  },
  fuentes: [RD, { t: "UNE, Asociación Española de Normalización: dibujo técnico", url: "https://www.une.org/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Construcciones paso a paso",
  ejemplos: [
    { enunciado: "Dibuja las vistas de una pieza en L de 40 mm de ancho, 30 mm de alto y 20 mm de fondo, con un escalón de 20 × 15 mm.",
      pasos: ["Alzado: contorno en L de 40 × 30 con el escalón de 20 × 15 arriba a la derecha.", "Planta debajo: rectángulo de 40 × 20 con una línea en x = 20 (el cambio de altura).", "Perfil a la derecha: rectángulo de 20 × 30 con una línea horizontal discontinua a 15 mm (la arista del escalón queda oculta).", "Repasar aristas visibles y comprobar alineaciones."],
      resultado: "Tres vistas alineadas según el sistema europeo." },
    { enunciado: "Dibuja en caballera un ortoedro de 60 × 40 mm de frente y 40 mm de fondo con coeficiente 0,5.",
      pasos: ["Dibuja la cara frontal de 60 × 40 mm.", "Desde cada vértice, traza líneas a 45° de 40 · 0,5 = 20 mm.", "Une los extremos para formar la cara trasera visible.", "Las aristas ocultas, discontinuas o se omiten."],
      resultado: "Ortoedro en caballera que no parece deformado." },
    { enunciado: "Un salón mide 6 × 4,5 m. ¿Qué medidas tendrá en un plano a escala 1:50?",
      pasos: ["6 m = 600 cm → 600 / 50 = 12 cm.", "4,5 m = 450 cm → 450 / 50 = 9 cm."],
      resultado: "Un rectángulo de 12 × 9 cm." },
  ],
  errores: [
    "Colocar el perfil a la izquierda del alzado en el sistema europeo.",
    "No alinear las vistas: alturas o anchos distintos entre ellas.",
    "Dibujar las aristas ocultas con línea continua.",
    "En caballera, no reducir la profundidad: el objeto parece alargado.",
    "Trazar los ejes de la isométrica a 45° en lugar de a 30° con la horizontal.",
    "Repetir la misma cota en varias vistas.",
  ],
  ejercicios: [
    { q: "Nombra los cuatro sistemas de representación y un uso de cada uno.", sol: "Diédrico (planos de fabricación), isométrico (manuales de montaje), caballera (dibujos explicativos), cónico (arquitectura e ilustración realista)." },
    { q: "Dibuja alzado, planta y perfil de un dado.", sol: "Tres cuadrados iguales alineados: planta debajo del alzado y perfil a su derecha." },
    { q: "¿Qué vistas de un cilindro tumbado son rectángulos y cuál es un círculo?", sol: "Si el eje es horizontal y perpendicular al alzado, el alzado es un círculo y planta y perfil son rectángulos." },
    { q: "Dibuja en isométrica un cubo de 3 cm de arista.", sol: "Respuesta gráfica: ejes a 30° y vertical; aristas de 3 cm sobre los tres ejes; tres caras visibles." },
    { q: "Dibuja en caballera un cubo de 4 cm (coeficiente 0,5). ¿Cuánto miden las aristas oblicuas?", sol: "2 cm a 45°." },
    { q: "En un plano a escala 1:200, una calle mide 7,5 cm. ¿Cuánto mide en la realidad?", sol: "7,5 · 200 = 1.500 cm = 15 m." },
    { q: "Una pieza de 4 mm se dibuja a escala 5:1. ¿Qué medida tiene en el dibujo?", sol: "20 mm." },
    { q: "Explica qué diferencia hay entre una cónica frontal y una oblicua.", sol: "Frontal: un punto de fuga, el objeto de frente. Oblicua: dos puntos de fuga, el objeto visto de esquina." },
    { q: "¿Qué elementos tiene una cota?", sol: "Líneas auxiliares, línea de cota con flechas y cifra de cota." },
    { q: "Diseña una pieza sencilla con policubos (5 cubos), dibuja sus vistas y su isométrica.", sol: "Respuesta abierta. Se valora la alineación de vistas y la correspondencia con la isométrica." },
  ],
};
