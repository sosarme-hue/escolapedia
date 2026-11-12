// Tecnología y Digitalización 2º ESO: estructuras y esfuerzos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Estructuras y esfuerzos",
  minutos: 55,
  objetivos: ["Definir estructura, conocer sus funciones y distinguir estructuras naturales y artificiales", "Identificar cargas y los cinco tipos de esfuerzos: tracción, compresión, flexión, torsión y cortadura", "Reconocer los elementos de una estructura y la función de cada uno", "Explicar las condiciones de una buena estructura: resistencia, rigidez y estabilidad, y la triangulación"],
  claves: ["estructura", "carga", "esfuerzo", "tracción", "compresión", "flexión", "torsión", "cortadura", "pilar", "viga", "triangulación", "estabilidad"],
  pregunta: {
    texto: "Una hoja de papel se dobla sola si la sujetas de un extremo. Pero si la doblas en acordeón, puede aguantar un libro encima. ¿Cómo es posible, si es el mismo papel?",
    respuesta: "Porque la resistencia no depende solo del material, sino también de la <mark>forma</mark>. Al plegar el papel, los pliegues trabajan como pequeñas vigas y reparten el peso. Los ingenieros usan este truco en el cartón ondulado, en las chapas de los tejados y en las vigas en forma de I o de T: con poco material consiguen <mark>estructuras</mark> muy resistentes.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una estructura?</h3><p>Una <mark>estructura</mark> es un conjunto de elementos unidos entre sí que sirve para <b>soportar fuerzas</b> (cargas) y transmitirlas al suelo sin romperse ni deformarse demasiado. Todos los cuerpos y objetos tienen una: el esqueleto de un animal, el tronco y las ramas de un árbol, el armazón de una silla, el cuadro de una bici o los pilares y vigas de un edificio. Hay <b>estructuras naturales</b>, creadas por la naturaleza, como el esqueleto, el caparazón de una tortuga, una telaraña, un panal de abejas o una montaña; y <b>estructuras artificiales</b>, construidas por las personas, como puentes, torres, grúas, presas, estanterías o tiendas de campaña. Muchas estructuras artificiales imitan a las naturales: la torre Eiffel se inspiró en la estructura del fémur, y los paneles en forma de panal se usan en aviones.</p>`,
    },
    {
      html: `<h3>Las funciones de las estructuras</h3><p>Las estructuras cumplen varias <mark>funciones</mark>. <b>Soportar pesos</b>: los pilares de un edificio, las patas de una mesa o una estantería. <b>Salvar distancias</b>: los puentes, las pasarelas o los tendidos eléctricos. <b>Proteger</b> objetos o seres vivos: el casco de una moto, el cráneo, el caparazón, una caja de embalaje o la carcasa de un móvil. <b>Dar forma y rigidez</b> a un objeto: las varillas de un paraguas, el armazón de una tienda de campaña o las costillas de un barco. Y <b>mantener la posición</b> de otros elementos: el chasis de un coche sujeta el motor y las ruedas; una grúa eleva cargas a gran altura. Una misma estructura puede tener varias funciones a la vez: nuestro esqueleto nos da forma, soporta el peso, protege los órganos y permite el movimiento.</p>`,
    },
    {
      html: `<h3>Cargas y esfuerzos</h3><p>Las fuerzas que actúan sobre una estructura se llaman <mark>cargas</mark>. Las <b>cargas fijas</b> o permanentes actúan siempre: el propio peso de la estructura, el tejado, los tabiques. Las <b>cargas variables</b> cambian con el tiempo: las personas y muebles de un edificio, los coches de un puente, el viento, la nieve o un terremoto. Al recibir cargas, los elementos de la estructura sufren tensiones internas que tienden a deformarlos: son los <mark>esfuerzos</mark>. Hay cinco tipos básicos: <b>tracción</b>, <b>compresión</b>, <b>flexión</b>, <b>torsión</b> y <b>cortadura</b> o cizalladura. Un buen diseño consigue que cada elemento soporte el esfuerzo para el que está preparado, con el material y la forma adecuados.</p>`,
      video: { id: "awx1lI6U-EQ", titulo: "Tipos de esfuerzos. Tecnología", canal: "Ruben Sebastian", vistas: 221149 },
    },
    {
      html: `<h3>Tracción y compresión</h3><p>Un elemento sufre <mark>tracción</mark> cuando las fuerzas tienden a <b>estirarlo</b>, alargarlo: tiran de sus extremos hacia fuera. Sufren tracción los cables de un puente colgante o de un ascensor, las cuerdas de una guitarra, la cadena de un columpio o un tirante. Los elementos que trabajan a tracción se llaman <b>tirantes</b> y suelen ser de acero, cables o cuerdas, porque estos materiales resisten muy bien que tiren de ellos. Un elemento sufre <mark>compresión</mark> cuando las fuerzas tienden a <b>aplastarlo</b>, acortarlo: empujan sus extremos hacia dentro. Sufren compresión los pilares de un edificio, las patas de una silla, las columnas de un templo o los cimientos. Los materiales pétreos, el hormigón y el ladrillo resisten muy bien la compresión, pero mal la tracción; por eso el hormigón se refuerza con barras de acero (hormigón armado).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tracción: una barra con flechas hacia fuera que tienden a estirarla. Compresión: una barra con flechas hacia dentro que tienden a aplastarla">${BG}
        <rect x="60" y="40" width="140" height="22" rx="3" fill="var(--pen)" fill-opacity=".4" stroke="var(--pen)" stroke-width="2"/>${fl(58, 51, 18, 51, "var(--red)", 3)}${fl(202, 51, 242, 51, "var(--red)", 3)}${t(130, 86, "tracción: se estira", { size: 12, color: "var(--red)" })}
        <rect x="60" y="112" width="140" height="22" rx="3" fill="var(--pen)" fill-opacity=".4" stroke="var(--pen)" stroke-width="2"/>${fl(18, 123, 56, 123, "var(--red)", 3)}${fl(242, 123, 204, 123, "var(--red)", 3)}${t(130, 158, "compresión: se aplasta", { size: 12, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Flexión, torsión y cortadura</h3><p>Un elemento sufre <mark>flexión</mark> cuando las fuerzas tienden a <b>doblarlo</b>, a curvarlo. Les pasa a las vigas que soportan un peso en el centro, a un trampolín cuando un nadador salta en la punta o a una estantería cargada de libros. En la flexión, la parte de arriba del elemento se comprime y la de abajo se estira. Un elemento sufre <mark>torsión</mark> cuando las fuerzas tienden a <b>retorcerlo</b>, a girar un extremo respecto al otro: una llave al girar en la cerradura, un destornillador, el eje de un motor o una toalla al escurrirla. Un elemento sufre <mark>cortadura</mark> o cizalladura cuando dos fuerzas muy próximas y de sentido contrario tienden a <b>cortarlo</b>: el papel en unas tijeras, un tornillo que une dos chapas, o los puntos de apoyo de una viga.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Flexión: una viga apoyada en dos extremos se dobla con un peso en el centro. Torsión: una barra retorcida por giros opuestos. Cortadura: unas tijeras cortan una lámina">${BG}
        <path d="M14 56 Q 70 76, 126 56" stroke="var(--pen)" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M14 64 l -6 14 h 12 Z M126 64 l -6 14 h 12 Z" fill="var(--muted)"/>${fl(70, 20, 70, 56, "var(--red)", 3)}${t(70, 98, "flexión", { size: 11 })}
        <rect x="156" y="44" width="80" height="16" rx="3" fill="var(--pen)" fill-opacity=".4" stroke="var(--pen)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M${168 + i * 18} 44 l 10 16" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}
        <path d="M150 34 a 10 18 0 0 0 0 36" stroke="var(--red)" fill="none" stroke-width="2.5"/>${fl(152, 70, 158, 70, "var(--red)", 2)}<path d="M242 70 a 10 18 0 0 0 0 -36" stroke="var(--red)" fill="none" stroke-width="2.5"/>${fl(240, 34, 234, 34, "var(--red)", 2)}${t(196, 98, "torsión", { size: 11 })}
        <rect x="60" y="126" width="140" height="8" fill="var(--pen)" fill-opacity=".4" stroke="var(--pen)"/>${fl(124, 110, 124, 124, "var(--red)", 3)}${fl(136, 150, 136, 136, "var(--red)", 3)}${t(130, 170, "cortadura", { size: 11 })}</svg>`,
      video: { id: "TQJHVua8nEo", titulo: "Ejemplos de esfuerzos en estructuras (columpio y más)", canal: "Ruben Sebastian", vistas: 68496 },
    },
    {
      html: `<h3>Los elementos de una estructura</h3><p>Las estructuras de los edificios y de muchos objetos están formadas por elementos con nombres propios. Los <mark>cimientos</mark> o la <b>zapata</b> están bajo tierra y reparten el peso de toda la estructura sobre el terreno para que no se hunda. Los <mark>pilares</mark> y columnas son elementos verticales que soportan el peso y lo transmiten a los cimientos: trabajan a <b>compresión</b>. Las <mark>vigas</mark> son elementos horizontales que soportan el peso de los forjados y lo transmiten a los pilares: trabajan a <b>flexión</b>. Los <b>forjados</b> son las superficies horizontales que forman los suelos y los techos. Los <mark>tirantes</mark> o tensores son cables o barras que trabajan a <b>tracción</b> y sujetan otros elementos. Los <b>arcos</b> salvan huecos transmitiendo las cargas a los lados, y trabajan a compresión, por eso se pueden hacer con piedras sin mortero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura de un edificio: cimientos bajo el suelo, pilares verticales, vigas horizontales y forjados formando los pisos">${BG}
        <rect x="10" y="140" width="240" height="30" fill="#c9a37a" fill-opacity=".4"/>
        ${[40, 130, 220].map((x) => `<rect x="${x - 16}" y="146" width="32" height="14" fill="var(--muted)"/><rect x="${x - 5}" y="40" width="10" height="106" fill="var(--pen)"/>`).join("")}
        ${[40, 92].map((y) => `<rect x="30" y="${y}" width="200" height="10" fill="var(--red)" fill-opacity=".8"/><rect x="30" y="${y - 4}" width="200" height="4" fill="var(--muted)"/>`).join("")}
        ${t(244, 30, "forjado", { size: 9, anchor: "end", color: "var(--muted)" })}${t(84, 70, "viga", { size: 10, color: "var(--red)" })}${t(170, 124, "pilar", { size: 10, color: "var(--pen)" })}${t(84, 168, "cimientos", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Condiciones de una buena estructura</h3><p>Para que una estructura funcione bien debe cumplir tres condiciones. Debe ser <mark>resistente</mark>: soportar las cargas sin romperse. Depende del material y de la forma y el grosor de sus elementos. Debe ser <mark>rígida</mark>: no deformarse demasiado al recibir las cargas. Una estantería que se tuerce al poner libros no es rígida, aunque no se rompa. Y debe ser <mark>estable</mark>: mantener el equilibrio sin volcarse. La estabilidad mejora si el <b>centro de gravedad</b> está bajo y si la <b>base</b> es ancha: por eso las grúas tienen contrapesos y patas extendidas, las lámparas de pie tienen una base pesada y los conos de tráfico son anchos abajo. Además, una buena estructura debe ser <b>ligera</b> y <b>económica</b>, usando el material justo: ni más (sería cara y pesada), ni menos (sería peligrosa).</p>`,
    },
    {
      html: `<h3>La triangulación</h3><p>Si unes cuatro listones formando un cuadrado con un clavo en cada esquina y lo empujas por un lado, se deforma fácilmente en un rombo. Pero si unes tres listones formando un <b>triángulo</b>, no se deforma: el triángulo es el único polígono que es <mark>indeformable</mark>. Por eso, para dar rigidez a una estructura, se añaden barras en diagonal que la dividen en triángulos: es la <mark>triangulación</mark>. Se ve en las grúas, las torres de alta tensión, los puentes metálicos, las cerchas de los tejados, la torre Eiffel, las porterías de fútbol, los andamios o las escaleras de tijera. Las estructuras formadas por barras unidas en triángulos se llaman <b>estructuras trianguladas</b> o de celosía, y son muy resistentes y ligeras a la vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuadrado de barras se deforma en rombo al empujarlo; al añadir una diagonal se divide en dos triángulos y queda rígido">${BG}
        <rect x="14" y="60" width="50" height="50" fill="none" stroke="var(--pen)" stroke-width="4"/>${fl(6, 64, 12, 64, "var(--red)", 2)}${fl(68, 85, 84, 85, "var(--muted)", 2)}
        <path d="M88 110 L 112 60 L 162 60 L 138 110 Z" fill="none" stroke="var(--red)" stroke-width="4"/>${t(88, 140, "se deforma", { size: 11, color: "var(--red)" })}
        <path d="M186 110 V 60 H 236 V 110 Z M186 110 L 236 60" fill="none" stroke="var(--leaf)" stroke-width="4"/>${t(211, 140, "rígido", { size: 11, color: "var(--leaf)" })}
        ${t(130, 168, "el triángulo no se deforma", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Tipos de estructuras artificiales</h3><p>Según su forma y cómo transmiten las cargas, las estructuras artificiales se agrupan en varios tipos. Las <b>masivas</b> están formadas por grandes cantidades de material, sin apenas huecos: las pirámides de Egipto, las murallas o las presas de gravedad. Las <b>abovedadas</b> usan arcos, bóvedas y cúpulas, como los acueductos romanos o las catedrales. Las <b>entramadas</b> están formadas por pilares, vigas y forjados unidos, como la mayoría de los edificios actuales de hormigón armado. Las <b>trianguladas</b> usan barras formando triángulos, como las grúas o los puentes metálicos. Las <b>colgadas</b> sostienen el peso con cables que trabajan a tracción, como los puentes colgantes (el Golden Gate) o los atirantados. Las <b>laminares</b> son finas superficies curvas que dan forma y protegen, como la carrocería de un coche, una lata o un casco. Y las <b>neumáticas</b> se sostienen con aire a presión, como los castillos hinchables.</p>${tabla(["Tipo", "Ejemplo"], [["Masiva", "pirámide, presa"], ["Abovedada", "acueducto, catedral"], ["Entramada", "edificio de hormigón"], ["Triangulada", "grúa, torre eléctrica"], ["Colgada", "puente colgante"], ["Laminar", "carrocería, casco"], ["Neumática", "castillo hinchable"]])}`,
    },
  ],
  figura: {
    titulo: "Los cinco esfuerzos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Los cinco esfuerzos con un ejemplo: tracción en el cable de un ascensor, compresión en un pilar, flexión en una viga, torsión en una llave y cortadura en unas tijeras">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Tracción", "estirar", "cable", "var(--pen)"], ["Compresión", "aplastar", "pilar", "var(--red)"], ["Flexión", "doblar", "viga", "#b8860b"], ["Torsión", "retorcer", "llave", "var(--leaf)"], ["Cortadura", "cortar", "tijeras", "#7b3fc4"]].map(([a, b, c, col], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="30" width="112" height="170" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 56, 74, a, { size: 15, color: col, font: D })}${t(x + 56, 120, b, { size: 14, weight: 400 })}${t(x + 56, 164, c, { size: 13, color: "var(--muted)" })}`; }).join("")}
    </svg>`,
  },
  video: { id: "AI_LQnkxIe0", titulo: "Esfuerzos de tracción y compresión", canal: "Ingeniosos", vistas: 112887, megusta: 2135, busqueda: "estructuras y esfuerzos tecnología" },
  ejemplos: [
    { enunciado: "Indica el esfuerzo principal en un columpio con un niño sentado: cadenas, travesaño superior y postes.",
      pasos: ["Las cadenas soportan el peso tirando de ellas: tracción.", "El travesaño horizontal se dobla con el peso: flexión.", "Los postes verticales soportan el peso desde arriba: compresión."],
      resultado: "Cadenas: tracción; travesaño: flexión; postes: compresión." },
    { enunciado: "Una estantería de cuatro baldas se tuerce hacia un lado al cargarla. ¿Cómo la arreglarías?",
      pasos: ["Problema: falta de rigidez; su forma rectangular se deforma.", "Solución: triangular con una barra o un panel en diagonal en la parte trasera.", "Además, fijarla a la pared mejora la estabilidad."],
      resultado: "Triangulación (y anclaje a la pared)." },
    { enunciado: "¿Por qué las grúas torre tienen un contrapeso de hormigón en el brazo corto?",
      pasos: ["La carga en el extremo del brazo largo tiende a volcar la grúa.", "El contrapeso en el otro lado compensa ese efecto.", "Así el centro de gravedad queda sobre la base y la grúa es estable."],
      resultado: "Para mantener la estabilidad." },
  ],
  errores: [
    "Confundir carga y esfuerzo: la carga es la fuerza externa y el esfuerzo es lo que sufre el elemento por dentro.",
    "Pensar que una viga trabaja a compresión: trabaja a flexión.",
    "Creer que una estructura resistente es siempre rígida: puede no romperse y aun así deformarse mucho.",
    "Pensar que más material siempre es mejor: la estructura debe ser resistente y también ligera y económica.",
    "Olvidar que la flexión combina compresión (arriba) y tracción (abajo).",
  ],
  ejercicios: [
    { q: "Pon dos ejemplos de estructuras naturales y dos de artificiales.", sol: "Naturales: esqueleto, panal. Artificiales: puente, estantería (u otros)." },
    { q: "Indica la función principal de: un casco, un puente, el armazón de un paraguas, una estantería.", sol: "Proteger, salvar distancias, dar forma y soportar pesos." },
    { q: "Clasifica las cargas en fijas o variables: el peso del tejado, la nieve, las personas de un estadio, los tabiques.", sol: "Fijas: tejado y tabiques. Variables: nieve y personas." },
    { q: "Indica el esfuerzo: a) la cuerda de una guitarra; b) la pata de una mesa; c) un trampolín; d) un tornillo que une dos chapas; e) una llave en la cerradura.", sol: "a) Tracción; b) compresión; c) flexión; d) cortadura; e) torsión." },
    { q: "¿Qué partes de una viga se comprimen y cuáles se estiran al flexionarse?", sol: "La parte superior se comprime y la inferior se estira." },
    { q: "Explica la función de los cimientos, los pilares y las vigas.", sol: "Cimientos: repartir el peso sobre el terreno. Pilares: soportar el peso verticalmente (compresión). Vigas: soportar los forjados y llevar el peso a los pilares (flexión)." },
    { q: "Explica las tres condiciones de una buena estructura.", sol: "Resistente (no se rompe), rígida (no se deforma demasiado) y estable (no vuelca)." },
    { q: "¿Cómo se mejora la estabilidad de una lámpara de pie?", sol: "Con una base ancha y pesada que baje el centro de gravedad." },
    { q: "¿Por qué el triángulo es la forma más usada en grúas y torres eléctricas?", sol: "Porque es el único polígono indeformable: da rigidez con poco material." },
    { q: "Clasifica: la presa de un pantano, un puente colgante, la carrocería de un coche, una torre de alta tensión.", sol: "Masiva, colgada, laminar y triangulada." },
  ],
  quiz: [
    { q: "Una estructura sirve sobre todo para…", o: ["soportar cargas", "producir energía", "conducir electricidad"], a: 0, e: "Soportar cargas." },
    { q: "El esqueleto es una estructura…", o: ["natural", "artificial", "neumática"], a: 0, e: "Natural." },
    { q: "La nieve sobre un tejado es una carga…", o: ["fija", "variable", "nula"], a: 1, e: "Variable." },
    { q: "Un cable de ascensor sufre…", o: ["compresión", "tracción", "torsión"], a: 1, e: "Tracción." },
    { q: "Un pilar sufre…", o: ["compresión", "flexión", "cortadura"], a: 0, e: "Compresión." },
    { q: "Una viga con peso en el centro sufre…", o: ["tracción", "flexión", "torsión"], a: 1, e: "Flexión." },
    { q: "Al escurrir una toalla se produce…", o: ["torsión", "compresión", "cortadura"], a: 0, e: "Torsión." },
    { q: "Las tijeras producen un esfuerzo de…", o: ["flexión", "cortadura", "tracción"], a: 1, e: "Cortadura." },
    { q: "El polígono indeformable es el…", o: ["cuadrado", "triángulo", "hexágono"], a: 1, e: "El triángulo." },
    { q: "Una estructura que no vuelca es…", o: ["rígida", "estable", "resistente"], a: 1, e: "Estable." },
  ],
  examen: [
    { q: "El elemento que reparte el peso sobre el terreno es…", o: ["la viga", "el cimiento", "el tirante"], a: 1, e: "El cimiento." },
    { q: "Un puente colgante es una estructura…", o: ["masiva", "colgada", "laminar"], a: 1, e: "Colgada." },
    { q: "El hormigón armado lleva acero para resistir mejor la…", o: ["compresión", "tracción", "torsión"], a: 1, e: "La tracción." },
  ],
  feynman: ["Qué son las cargas y qué esfuerzos pueden sufrir los elementos", "Qué hace cada elemento de un edificio: cimientos, pilares y vigas", "Por qué se triangulan las estructuras"],
  mapa: mapa("ESTRUCTURAS", "var(--eso)", [
    ["Funciones", "soportar · salvar · proteger", "var(--pen)"],
    ["Esfuerzos", "tracción · compresión · flexión…", "var(--red)"],
    ["Elementos", "cimientos · pilares · vigas", "#b8860b"],
    ["Condiciones", "resistente · rígida · estable", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Estructura", "Conjunto de elementos que soporta cargas y las transmite al suelo."],
    ["Tracción", "Esfuerzo que tiende a estirar un elemento."],
    ["Compresión", "Esfuerzo que tiende a aplastar un elemento."],
    ["Flexión", "Esfuerzo que tiende a doblar un elemento; típico de las vigas."],
    ["Torsión", "Esfuerzo que tiende a retorcer un elemento."],
    ["Cortadura", "Esfuerzo que tiende a cortar un elemento."],
    ["Triangulación", "Dividir una estructura en triángulos para hacerla rígida."],
    ["Estabilidad", "Capacidad de no volcar; mejora con base ancha y centro de gravedad bajo."],
  ],
  familias: ["Construid juntos un puente de palillos o de papel y probad cuántas monedas aguanta.", "Buscad por la calle triángulos en estructuras: grúas, farolas, porterías, puentes.", "Identificad en casa elementos que trabajen a tracción, compresión y flexión."],
  profesores: {
    saberes: "Estructuras: tipos, cargas y esfuerzos, elementos estructurales, condiciones (resistencia, rigidez y estabilidad) y triangulación (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Reto de la torre de papel más alta capaz de sostener una pelota de tenis.", "Puentes de palillos con prueba de carga y análisis de la rotura.", "Esponjas marcadas con líneas para visualizar compresión y tracción en la flexión."],
  },
  fuentes: [RD, wiki("Estructura", "Estructura"), wiki("Esfuerzo interno", "Esfuerzo_interno")],
  revisado: REV,
};
