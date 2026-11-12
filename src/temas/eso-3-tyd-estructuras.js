// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Flecha de carga simple
const carga = (x, y, l = 26) => fl(x, y - l, x, y, "var(--red)", 2.5);

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Estructuras",
  minutos: 55,
  objetivos: ["Definir qué es una estructura y cuáles son sus funciones", "Identificar los esfuerzos que soportan los elementos de una estructura", "Reconocer los elementos estructurales y los tipos de estructuras", "Aplicar la triangulación y otras técnicas para conseguir estructuras estables y resistentes"],
  claves: ["estructura", "carga", "esfuerzo", "tracción", "compresión", "flexión", "triangulación", "estabilidad"],
  pregunta: {
    texto: "Un puente de espaguetis bien diseñado puede sostener más de 50 kg. ¿Cómo es posible con un material tan frágil?",
    respuesta: "Gracias a la <mark>forma de la estructura</mark>. Si los espaguetis se disponen formando <b>triángulos</b>, las cargas se reparten y cada barra solo trabaja a <b>tracción</b> o <b>compresión</b>, que es como mejor resiste. Una buena estructura no depende solo del material, sino de cómo se colocan sus elementos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una estructura?</h3><p>Una <mark>estructura</mark> es un conjunto de elementos unidos entre sí que soportan las <b>fuerzas</b> que actúan sobre un cuerpo, sin romperse ni deformarse en exceso, y mantienen su forma. Las fuerzas que actúan sobre una estructura se llaman <b>cargas</b>: pueden ser <b>fijas</b>, como el propio peso de la estructura, o <b>variables</b>, como las personas, los coches, el viento o la nieve. Todo tiene estructura: el esqueleto de un animal, el tronco de un árbol, una silla, un edificio, una grúa o la carcasa de un móvil. Las funciones de una estructura son <b>soportar pesos</b>, <b>mantener la forma</b>, <b>proteger</b> objetos frágiles (una caja de huevos, un casco) y <b>salvar distancias</b>, como un puente.</p>`,
    },
    {
      html: `<h3>Estructuras naturales y artificiales</h3><p>Las <b>estructuras naturales</b> las crea la naturaleza: el esqueleto humano, la concha de un caracol, un panal de abejas, una tela de araña o una cueva. Las <b>estructuras artificiales</b> las construye el ser humano, a menudo imitando a las naturales: el panal hexagonal inspira paneles ligeros de aviones, y los huesos huecos de las aves inspiran tubos ligeros y resistentes. Las estructuras artificiales se clasifican según su forma en: <b>masivas</b> (mucho material macizo: pirámides, presas), <b>abovedadas</b> (arcos y bóvedas: puentes romanos, catedrales), <b>entramadas</b> (vigas y pilares: edificios), <b>trianguladas</b> (barras formando triángulos: torres eléctricas, grúas), <b>colgantes</b> (cables que sostienen: puentes colgantes) y <b>neumáticas</b> (aire a presión: castillos hinchables).</p>${tabla(["Tipo", "Idea", "Ejemplo"], [["Masiva", "mucho material macizo", "pirámide, presa"], ["Abovedada", "arcos y bóvedas", "acueducto, catedral"], ["Entramada", "vigas y pilares", "edificio de hormigón"], ["Triangulada", "barras en triángulo", "torre eléctrica, grúa"], ["Colgante", "cables tensos", "puente colgante"], ["Neumática", "aire a presión", "castillo hinchable"]])}`,
    },
    {
      html: `<h3>Los esfuerzos</h3><p>Cuando una carga actúa sobre un elemento, este sufre un <mark>esfuerzo</mark>: una tensión interna que tiende a deformarlo. Hay cinco esfuerzos básicos. <b>Tracción</b>: dos fuerzas tiran en sentidos opuestos y el elemento tiende a <b>estirarse</b> (un cable de grúa, una cuerda de columpio). <b>Compresión</b>: dos fuerzas empujan hacia el elemento y tiende a <b>aplastarse</b> (una columna, la pata de una silla). <b>Flexión</b>: la carga actúa perpendicular al elemento y tiende a <b>doblarlo</b> (una viga, una estantería cargada, un trampolín). <b>Torsión</b>: fuerzas que tienden a <b>retorcerlo</b> (una llave en la cerradura, un destornillador). <b>Cortadura o cizalla</b>: fuerzas opuestas muy próximas que tienden a <b>cortarlo</b> (las tijeras, un remache).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esfuerzos de tracción, con fuerzas que estiran, y de compresión, con fuerzas que aplastan una barra">${BG}
        ${t(130, 26, "TRACCIÓN: estira", { size: 11, color: "var(--pen)" })}
        <rect x="80" y="40" width="100" height="22" rx="3" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${fl(80, 51, 30, 51, "var(--red)", 3)}${fl(180, 51, 230, 51, "var(--red)", 3)}
        ${t(130, 104, "COMPRESIÓN: aplasta", { size: 11, color: "var(--leaf)" })}
        <rect x="80" y="118" width="100" height="22" rx="3" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${fl(28, 129, 78, 129, "var(--red)", 3)}${fl(232, 129, 182, 129, "var(--red)", 3)}</svg>`,
      video: { id: "awx1lI6U-EQ", titulo: "Tipos de esfuerzos Tecnología", canal: "Ruben Sebastian", vistas: 221145 },
    },
    {
      html: `<h3>Flexión, torsión y cortadura</h3><p>La <mark>flexión</mark> es muy habitual: cuando se carga una viga apoyada en sus extremos, se curva hacia abajo. Su parte superior se <b>comprime</b> y su parte inferior se <b>estira</b>; por eso las vigas tienen formas como la de <b>doble T</b> (perfil en I), que pone el material arriba y abajo, donde más se necesita, y ahorra peso en el centro. La <b>torsión</b> aparece en ejes que giran, como el eje de un motor o la llave que gira en una cerradura. La <b>cortadura</b> aparece en tornillos, remaches y pasadores que unen piezas: si se pasan de carga, se cortan por el plano de unión. Un mismo elemento puede soportar varios esfuerzos a la vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Viga apoyada en dos extremos con una carga en el centro: se curva, la parte de arriba se comprime y la de abajo se estira">${BG}
        <path d="M30 70 Q 130 110 230 70 L 230 90 Q 130 130 30 90 Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>
        <path d="M30 92 L 20 112 H 40 Z M230 92 L 220 112 H 240 Z" fill="var(--ink)"/>
        ${carga(130, 86, 40)}${t(144, 54, "carga", { size: 10, color: "var(--red)", anchor: "start" })}
        ${t(70, 66, "comprime", { size: 10, color: "var(--leaf)" })}${t(130, 140, "estira", { size: 10, color: "var(--red)" })}
        ${t(130, 166, "FLEXIÓN", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Elementos de una estructura</h3><p>Las estructuras de los edificios y otras construcciones se componen de elementos con nombre propio. La <b>cimentación</b> (zapatas, losas) reparte el peso de la estructura sobre el terreno. Los <b>pilares</b> o <b>columnas</b> son elementos verticales que trabajan a <b>compresión</b> y transmiten las cargas hacia el suelo. Las <b>vigas</b> son elementos horizontales que soportan el forjado y trabajan a <b>flexión</b>. El <b>forjado</b> es el suelo o techo de cada planta. Los <b>tirantes</b> o <b>cables</b> trabajan a <b>tracción</b>. Los <b>arcos</b> distribuyen la carga hacia los lados y trabajan a compresión. En una estructura, las cargas siempre viajan desde arriba hasta el terreno a través de estos elementos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura de un edificio: cimentación, pilares, vigas y forjados">${BG}
        <rect x="30" y="140" width="200" height="14" fill="#a08870" stroke="var(--ink)"/>${t(130, 170, "cimentación", { size: 10, color: "#6b4423" })}
        <rect x="50" y="40" width="12" height="100" fill="var(--muted)"/><rect x="124" y="40" width="12" height="100" fill="var(--muted)"/><rect x="198" y="40" width="12" height="100" fill="var(--muted)"/>
        <rect x="40" y="34" width="180" height="10" fill="var(--pen)"/><rect x="40" y="86" width="180" height="10" fill="var(--pen)"/>
        ${t(94, 70, "pilar", { size: 10 })}${fl(82, 66, 64, 66, "var(--ink)", 1.2)}${t(170, 112, "viga", { size: 10, color: "var(--pen)" })}${fl(170, 104, 170, 98, "var(--pen)", 1.2)}
        ${t(130, 24, "forjado", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Condiciones de una estructura: estabilidad</h3><p>Una buena estructura debe ser <b>estable</b>, <b>resistente</b> y <b>rígida</b>, y además ligera y económica. Es <mark>estable</mark> si no vuelca. Para ello, la vertical que pasa por su <b>centro de gravedad</b> debe caer dentro de su <b>base de apoyo</b>. La estabilidad aumenta si se <b>amplía la base</b> (las patas de una grúa se abren, un trípode separa sus patas), si se <b>baja el centro de gravedad</b> (poniendo más peso abajo, como en la base de una lámpara) o si se <b>ancla</b> la estructura al suelo (tirantes de una carpa, los cimientos de una farola). La Torre de Pisa sigue en pie porque su centro de gravedad aún cae dentro de la base.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos objetos inclinados: uno estable, con la vertical del centro de gravedad dentro de la base, y otro que vuelca porque cae fuera">${BG}
        <g transform="rotate(-12 70 140)"><rect x="40" y="50" width="60" height="90" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2.5"/></g>
        <circle cx="61" cy="96" r="4" fill="var(--ink)"/><line x1="61" y1="96" x2="61" y2="146" stroke="var(--ink)" stroke-dasharray="4 3"/>${t(70, 168, "estable", { size: 11, color: "var(--leaf)" })}
        <g transform="rotate(-30 196 140)"><rect x="180" y="40" width="32" height="100" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2.5"/></g>
        <circle cx="171" cy="94" r="4" fill="var(--ink)"/><line x1="171" y1="94" x2="171" y2="146" stroke="var(--ink)" stroke-dasharray="4 3"/>${t(200, 168, "vuelca", { size: 11, color: "var(--red)" })}
        <line x1="20" y1="142" x2="240" y2="142" stroke="var(--ink)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>Resistencia y rigidez: la triangulación</h3><p>Una estructura es <b>resistente</b> si soporta las cargas sin romperse, y <b>rígida</b> si no se deforma. La resistencia depende del <b>material</b>, de la <b>forma</b> y de la <b>sección</b> de los elementos: una hoja de papel no aguanta nada plana, pero doblada en forma de tubo o de acordeón sostiene un libro. La técnica más importante para dar rigidez es la <mark>triangulación</mark>. Un cuadrado formado por cuatro barras unidas por sus extremos se deforma fácilmente en un rombo; en cambio, un <b>triángulo</b> es la única figura que <b>no se deforma</b> si sus lados no cambian de longitud. Por eso, añadiendo una barra diagonal (un <b>tirante</b> o una <b>escuadra</b>) se rigidiza el cuadrado. Las torres eléctricas, las grúas y los puentes metálicos están formados por triángulos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuadrado de barras se deforma en rombo al empujarlo; con una diagonal formando triángulos, se mantiene rígido">${BG}
        <path d="M30 130 H 100 L 120 60 H 50 Z" fill="none" stroke="var(--red)" stroke-width="3"/>${[[30, 130], [100, 130], [120, 60], [50, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/>`).join("")}${fl(14, 60, 44, 60, "var(--ink)", 2)}${t(75, 156, "se deforma", { size: 11, color: "var(--red)" })}
        <path d="M150 130 H 220 V 60 H 150 Z M150 130 L 220 60" fill="none" stroke="var(--leaf)" stroke-width="3"/>${[[150, 130], [220, 130], [220, 60], [150, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/>`).join("")}${fl(130, 60, 146, 60, "var(--ink)", 2)}${t(185, 156, "rígido", { size: 11, color: "var(--leaf)" })}</svg>`,
      video: { id: "TQJHVua8nEo", titulo: "Ejemplos de esfuerzos y esfuerzos en estructuras (columpio y puente)", canal: "Ruben Sebastian", vistas: 68496 },
    },
    {
      html: `<h3>Perfiles y uniones</h3><p>Para ahorrar material sin perder resistencia, las barras y vigas no suelen ser macizas, sino que tienen formas especiales llamadas <mark>perfiles</mark>: en <b>I o doble T</b> (vigas de edificios), en <b>L o ángulo</b>, en <b>T</b>, en <b>U</b> y <b>tubulares</b> (redondos o cuadrados, como los cuadros de bicicleta). Cuanto más alejado está el material del centro en la dirección de la carga, más resiste a la flexión. Las <b>uniones</b> entre elementos también son clave: pueden ser <b>fijas</b> (soldadura, remaches, pegamento) o <b>desmontables</b> (tornillos y tuercas). En maquetas de taller se usan escuadras de cartulina en las esquinas para reforzar las uniones y triangular.</p>`,
    },
    {
      html: `<h3>Estructuras célebres</h3><p>La historia de las estructuras muestra la evolución de la técnica. Las <b>pirámides de Egipto</b> son estructuras masivas que soportan todo a compresión. Los romanos dominaron el <b>arco</b> en acueductos como el de <b>Segovia</b>, levantado sin argamasa: las piedras se sujetan solo por compresión. Las <b>catedrales góticas</b> usaron arbotantes para llevar el empuje de las bóvedas fuera del edificio. La <b>Torre Eiffel</b> (1889) es una estructura triangulada de hierro. Los <b>puentes colgantes</b>, como el Golden Gate, sostienen el tablero con cables a tracción. Hoy, los rascacielos combinan acero y hormigón armado, con amortiguadores para resistir el viento y los terremotos.</p>`,
    },
    {
      html: `<h3>Construir estructuras en el taller</h3><p>En el aula de tecnología se construyen maquetas de estructuras con <b>listones de madera</b>, <b>palillos</b>, <b>pajitas</b>, <b>cartulina</b> o <b>espaguetis</b>, y se ponen a prueba con cargas. Para diseñar una buena estructura conviene: identificar las <b>cargas</b> que soportará; elegir el <b>tipo</b> de estructura; <b>triangular</b> las partes que se puedan deformar; reforzar las <b>uniones</b>; ampliar la <b>base</b> y bajar el centro de gravedad para que sea estable; y usar el <b>mínimo material</b> posible. Al final se mide su eficiencia: la <b>carga que soporta dividida entre su peso</b>. Un buen puente de palillos de 100 g puede soportar más de 10 kg, es decir, cien veces su propio peso.</p>`,
    },
  ],
  figura: {
    titulo: "Los cinco esfuerzos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cinco esfuerzos con un ejemplo cada uno: tracción, compresión, flexión, torsión y cortadura">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="40" y="90" width="70" height="20" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>${fl(40, 100, 16, 100, "var(--red)", 3)}${fl(110, 100, 134, 100, "var(--red)", 3)}${t(75, 50, "TRACCIÓN", { size: 13, color: "var(--pen)" })}${t(75, 160, "cable de grúa", { size: 12, color: "var(--muted)" })}
      <rect x="180" y="70" width="20" height="60" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${fl(190, 44, 190, 68, "var(--red)", 3)}${fl(190, 156, 190, 132, "var(--red)", 3)}${t(190, 30, "COMPRESIÓN", { size: 13, color: "var(--leaf)" })}${t(190, 184, "pilar", { size: 12, color: "var(--muted)" })}
      <path d="M260 90 Q 315 120 370 90 V 104 Q 315 134 260 104 Z" fill="#b8860b" fill-opacity=".2" stroke="#b8860b" stroke-width="2"/>${fl(315, 70, 315, 104, "var(--red)", 3)}${t(315, 50, "FLEXIÓN", { size: 13, color: "#b8860b" })}${t(315, 160, "viga, estantería", { size: 12, color: "var(--muted)" })}
      <rect x="410" y="90" width="80" height="20" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2"/><path d="M410 100 l 8 -10 l 8 20 l 8 -20 l 8 20 l 8 -20 l 8 20 l 8 -20 l 8 20 l 8 -20" stroke="var(--red)" fill="none"/><path d="M402 80 A 12 22 0 0 0 402 120" stroke="var(--ink)" stroke-width="2.5" fill="none"/><path d="M498 120 A 12 22 0 0 0 498 80" stroke="var(--ink)" stroke-width="2.5" fill="none"/>${t(450, 50, "TORSIÓN", { size: 13, color: "var(--red)" })}${t(450, 160, "llave, destornillador", { size: 12, color: "var(--muted)" })}
      <rect x="540" y="80" width="70" height="14" fill="var(--muted)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/><rect x="540" y="98" width="70" height="14" fill="var(--muted)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/>${fl(560, 60, 560, 82, "var(--red)", 3)}${fl(590, 132, 590, 110, "var(--red)", 3)}${t(575, 40, "CORTADURA", { size: 13 })}${t(575, 160, "tijeras, remache", { size: 12, color: "var(--muted)" })}
      ${t(320, 212, "la forma de la estructura decide qué esfuerzo soporta cada elemento", { size: 13, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "AI_LQnkxIe0", titulo: "Esfuerzos de TRACCIÓN y COMPRESIÓN", canal: "Ingeniosos", vistas: 112877, megusta: 0, busqueda: "estructuras tipos de esfuerzos tecnología" },
  ejemplos: [
    { enunciado: "Indica el esfuerzo principal en: la cuerda de un columpio, la pata de una mesa y una balda de estantería cargada.",
      pasos: ["La cuerda está estirada por el peso: tracción.", "La pata soporta el peso de la mesa que la aplasta: compresión.", "La balda se curva hacia abajo: flexión."],
      resultado: "Tracción, compresión y flexión." },
    { enunciado: "Un puente de palillos pesa 150 g y soporta 9 kg. ¿Cuál es su eficiencia?",
      pasos: ["Pasamos a las mismas unidades: 9 kg = 9 000 g.", "Eficiencia = carga / peso = 9 000 / 150.", "= 60."],
      resultado: "Soporta 60 veces su propio peso." },
    { enunciado: "Una estantería se tambalea y se deforma hacia los lados. ¿Cómo se puede mejorar?",
      pasos: ["La deformación lateral indica que sus marcos rectangulares no están triangulados.", "Se añade una barra diagonal o un tablero trasero que forme triángulos.", "Además, se puede anclar a la pared para que no vuelque."],
      resultado: "Triangular con diagonales o un fondo y anclarla." },
  ],
  errores: [
    "Confundir la carga (la fuerza externa) con el esfuerzo (la tensión interna del elemento).",
    "Pensar que una viga cargada solo se comprime: arriba se comprime y abajo se estira.",
    "Creer que un cuadrado de barras es rígido: necesita una diagonal.",
    "Pensar que la estabilidad depende solo del peso: importan la base y el centro de gravedad.",
    "Usar mucho material para hacerla resistente en lugar de mejorar la forma.",
  ],
  ejercicios: [
    { q: "Define estructura y cita tres de sus funciones.", sol: "Conjunto de elementos que soporta cargas manteniendo la forma; soportar pesos, proteger y salvar distancias." },
    { q: "Clasifica: tela de araña, acueducto, torre eléctrica, presa, castillo hinchable.", sol: "Natural; abovedada; triangulada; masiva; neumática." },
    { q: "¿Qué esfuerzo soporta un cable de un ascensor? ¿Y un pilar?", sol: "Tracción; compresión." },
    { q: "Pon un ejemplo de torsión y otro de cortadura.", sol: "Torsión: girar una llave. Cortadura: un papel cortado con tijeras o un remache." },
    { q: "¿Por qué las vigas suelen tener perfil en doble T?", sol: "Porque en flexión las zonas que más trabajan son la superior y la inferior; así se pone allí el material y se ahorra peso." },
    { q: "Nombra los elementos de la estructura de un edificio y su esfuerzo.", sol: "Cimentación; pilares (compresión); vigas (flexión); forjados; tirantes (tracción)." },
    { q: "¿Cuándo vuelca una estructura? Da tres formas de hacerla más estable.", sol: "Cuando la vertical del centro de gravedad cae fuera de la base. Ampliar la base, bajar el centro de gravedad y anclarla." },
    { q: "Explica por qué se usa la triangulación.", sol: "Porque el triángulo es la única figura que no se deforma si sus lados no cambian, y da rigidez." },
    { q: "Una torre de pajitas de 40 g soporta 2 kg. Calcula su eficiencia.", sol: "2 000 / 40 = 50 veces su peso." },
    { q: "¿Qué tipos de unión hay entre los elementos de una estructura?", sol: "Fijas (soldadura, remaches, pegamento) y desmontables (tornillos y tuercas)." },
  ],
  quiz: [
    { q: "Las fuerzas que actúan sobre una estructura son…", o: ["cargas", "perfiles", "uniones"], a: 0, e: "Cargas." },
    { q: "El esfuerzo que estira un elemento es la…", o: ["compresión", "tracción", "flexión"], a: 1, e: "Tracción." },
    { q: "Una columna trabaja sobre todo a…", o: ["tracción", "compresión", "torsión"], a: 1, e: "Compresión." },
    { q: "Una viga cargada trabaja a…", o: ["flexión", "torsión", "cortadura"], a: 0, e: "Flexión." },
    { q: "Al girar un destornillador, este sufre…", o: ["cortadura", "torsión", "tracción"], a: 1, e: "Torsión." },
    { q: "La figura que no se deforma es el…", o: ["cuadrado", "triángulo", "hexágono"], a: 1, e: "Triángulo." },
    { q: "Una torre eléctrica es una estructura…", o: ["masiva", "triangulada", "neumática"], a: 1, e: "Triangulada." },
    { q: "Para aumentar la estabilidad conviene…", o: ["subir el centro de gravedad", "ampliar la base", "reducir la base"], a: 1, e: "Ampliar la base." },
    { q: "El acueducto de Segovia es una estructura…", o: ["abovedada", "colgante", "entramada"], a: 0, e: "Abovedada (arcos)." },
    { q: "Los tornillos y tuercas son uniones…", o: ["fijas", "desmontables", "soldadas"], a: 1, e: "Desmontables." },
  ],
  examen: [
    { q: "En un puente colgante, los cables trabajan a…", o: ["tracción", "compresión", "flexión"], a: 0, e: "Tracción." },
    { q: "La parte inferior de una viga cargada se…", o: ["comprime", "estira", "retuerce"], a: 1, e: "Se estira." },
    { q: "La cimentación sirve para…", o: ["repartir el peso sobre el terreno", "sostener el tejado", "unir vigas"], a: 0, e: "Repartir el peso." },
  ],
  feynman: ["Los cinco esfuerzos con un ejemplo de cada uno", "Por qué el triángulo da rigidez a una estructura", "Qué hace que un objeto vuelque o no"],
  mapa: mapa("ESTRUCTURAS", "var(--eso)", [
    ["Cargas", "fijas · variables", "var(--pen)"],
    ["Esfuerzos", "tracción · compresión · flexión…", "var(--red)"],
    ["Elementos", "pilar · viga · cimentación", "var(--leaf)"],
    ["Condiciones", "estable · resistente · rígida", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Estructura", "Conjunto de elementos que soporta cargas sin deformarse."],
    ["Carga", "Fuerza que actúa sobre una estructura."],
    ["Tracción", "Esfuerzo que estira."],
    ["Compresión", "Esfuerzo que aplasta."],
    ["Flexión", "Esfuerzo que dobla."],
    ["Torsión", "Esfuerzo que retuerce."],
    ["Triangulación", "Formar triángulos para dar rigidez."],
    ["Estabilidad", "No volcar: centro de gravedad sobre la base."],
  ],
  familias: ["Buscad en casa ejemplos de los cinco esfuerzos y comentadlos.", "Haced un reto: construir con 20 palillos y plastilina la torre más alta que aguante un libro.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Estructuras: cargas, esfuerzos, elementos estructurales, tipos de estructuras, estabilidad, resistencia, rigidez y triangulación (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Concurso de puentes de palillos midiendo la eficiencia carga/peso.", "Barras de goma espuma con líneas dibujadas para ver la flexión.", "Construir un cuadrado y un triángulo con tiras de cartulina y encuadernadores."],
  },
  fuentes: [RD, wiki("Estructura", "Estructura"), wiki("Viga", "Viga")],
  revisado: "2026-11-12",
};
