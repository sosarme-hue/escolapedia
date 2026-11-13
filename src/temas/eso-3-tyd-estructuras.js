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

require("./_eso3L7").libro(module.exports, {
  lectura: ["El puente que bailaba", `<p>El 7 de noviembre de 1940, el puente colgante de Tacoma Narrows, en Estados Unidos, empezó a ondular con un viento de unos 60 km/h. No era un huracán, pero el tablero se retorcía como una cinta de gimnasia. Los conductores abandonaron los coches y, al cabo de una hora, el puente se partió y cayó al río. Afortunadamente no murió ninguna persona. Las imágenes, filmadas por un fotógrafo, se estudian hoy en todas las escuelas de ingeniería.</p><p>¿Qué falló? El tablero era muy estrecho y delgado, demasiado <b>flexible</b>. El viento lo hacía oscilar y la estructura no tenía suficiente <b>rigidez</b> a la <b>torsión</b> para frenar el movimiento. Los ingenieros aprendieron la lección: desde entonces los tableros de los puentes colgantes se diseñan con perfiles más rígidos, celosías trianguladas y formas aerodinámicas, y se ensayan con maquetas en túneles de viento.</p><p>Las estructuras están por todas partes: en tu esqueleto, en la silla en la que te sientas, en el edificio de tu instituto y en el puente que cruzas cada día. En este tema aprenderás qué cargas soportan, qué esfuerzos sufren sus elementos, qué condiciones deben cumplir y cómo se diseñan para ser resistentes, rígidas y estables usando el menor material posible.</p>`],
  mas: [
    ["<h3>¿Qué es una estructura?</h3>", `<p>Las funciones principales de una estructura son <b>soportar pesos</b> (una estantería), <b>mantener la forma</b> (el armazón de una tienda de campaña), <b>proteger</b> (la carcasa de un móvil, el cráneo), <b>salvar distancias</b> (un puente) y <b>dar altura</b> (una grúa o una torre). Un mismo objeto puede cumplir varias a la vez: el casco de una bicicleta protege y mantiene su forma.</p>`],
    ["<h3>Perfiles y uniones</h3>", `<p>Las uniones pueden ser <b>fijas</b>, que no se pueden deshacer sin romper las piezas (soldadura, remaches, adhesivos), o <b>desmontables</b> (tornillos y tuercas, pasadores). También se distingue entre uniones <b>rígidas</b>, que impiden el giro entre las barras (un nudo soldado), y <b>articuladas</b>, que permiten girar (una bisagra o un pasador). En las maquetas, las escuadras de cartulina en las esquinas convierten una unión débil en una unión más rígida.</p>`],
    ["<h3>Construir estructuras en el taller</h3>", `<p>Para trabajar con seguridad se usan gafas al cortar listones, se sujeta la pieza con el tornillo de banco y se aplica la cola en capas finas, esperando el tiempo de secado. Una buena maqueta se planifica antes: plano con medidas, lista de barras (número y longitud) y orden de montaje, empezando por las caras planas que luego se unen entre sí.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es una estructura?</h3>", "Funciones de una estructura", [["Soportar pesos", "estantería, mesa"], ["Mantener la forma", "tienda de campaña"], ["Proteger", "casco, carcasa, cráneo"], ["Salvar distancias", "puente, pasarela"]], "Para qué sirve una estructura"],
    ["<h3>Estructuras naturales y artificiales</h3>", "Estructuras naturales y artificiales", [["Naturales", "esqueleto, panal, tela de araña"], ["Artificiales", "puente, edificio, grúa"], ["Inspiración", "la naturaleza enseña a diseñar"]], "Naturales y artificiales"],
    ["<h3>Perfiles y uniones</h3>", "Perfiles y uniones", [["Perfiles", "en T, doble T, en U, tubo"], ["Fijas", "soldadura, remaches, cola"], ["Desmontables", "tornillos, pasadores"]], "Ahorrar material y unir"],
    ["<h3>Estructuras célebres</h3>", "Estructuras célebres", [["Pirámides", "masiva, de piedra"], ["Acueducto de Segovia", "arcos de granito"], ["Torre Eiffel", "triangulada, de hierro"], ["Golden Gate", "colgante, de acero"]], "Historia de las estructuras"],
    ["<h3>Construir estructuras en el taller</h3>", "Construir maquetas en el taller", [["Planificar", "plano y lista de barras"], ["Montar", "caras planas y luego unir"], ["Reforzar", "triángulos y escuadras"]], "Del plano a la maqueta"],
  ],
  bloques: [
    { tras: "<h3>¿Qué es una estructura?</h3>", html: `<h3>Las cargas: fijas y variables</h3><p>Las <b>cargas</b> son las fuerzas externas que actúan sobre una estructura. Se clasifican en <b>cargas fijas o permanentes</b>, que actúan siempre y con el mismo valor, como el propio peso de la estructura, el de los tabiques o el del tejado; y <b>cargas variables</b>, que cambian con el tiempo: las personas y muebles de un edificio, los coches de un puente, la nieve acumulada, el viento o un terremoto.</p><p>Las cargas también pueden ser <b>estáticas</b>, aplicadas lentamente y sin cambios bruscos, o <b>dinámicas</b>, aplicadas de golpe o de forma repetida: un salto, un frenazo, las ráfagas de viento o la vibración de una máquina. Las cargas dinámicas son más peligrosas porque pueden producir oscilaciones, como en el puente de Tacoma. Por eso los ingenieros calculan las estructuras con un <b>coeficiente de seguridad</b>: las diseñan para aguantar bastante más carga de la que esperan recibir.</p>`, svg: ["Tipos de cargas", [["Fijas", "peso propio, tejado, tabiques"], ["Variables", "personas, nieve, viento"], ["Dinámicas", "golpes, vibraciones, ráfagas"]], "Las cargas"] },
    { tras: "<h3>Estructuras naturales y artificiales</h3>", html: `<h3>Tipos de estructuras artificiales</h3><p>Según cómo se reparten las cargas, las estructuras artificiales se agrupan en varios tipos. Las <b>masivas</b> acumulan mucho material y apenas tienen huecos: pirámides, presas de gravedad, murallas. Las <b>abovedadas</b> usan arcos, bóvedas y cúpulas, que trabajan a compresión y desvían el peso hacia los apoyos: acueductos, catedrales, puentes romanos. Las <b>entramadas</b> forman un esqueleto de pilares y vigas, como los edificios de hormigón armado. Las <b>trianguladas</b> están hechas de barras que forman triángulos: torres eléctricas, grúas, el armazón de un tejado. Las <b>colgantes</b> sostienen el peso con cables que trabajan a tracción: puentes colgantes y atirantados. Las <b>laminares</b> son finas superficies curvas o plegadas, como la carrocería de un coche o una lata. Y las <b>neumáticas</b> se sostienen con aire a presión: castillos hinchables o cubiertas de algunos pabellones.</p>`, svg: ["Tipos de estructuras artificiales", [["Masivas", "presas, murallas"], ["Abovedadas", "arcos, cúpulas"], ["Trianguladas", "torres, grúas"], ["Colgantes", "puentes de cables"]], "Tipos de estructuras"] },
    { tras: "<h3>Perfiles y uniones</h3>", html: `<h3>Los puentes: estructuras para salvar distancias</h3><p>Los puentes resumen todos los conceptos del tema. El <b>puente de viga</b> es el más sencillo: un tablero apoyado en sus extremos que trabaja a flexión, útil para distancias cortas. El <b>puente de arco</b> transmite el peso a compresión hacia los estribos, por eso pudo construirse en piedra desde la época romana. El <b>puente de celosía</b> refuerza el tablero con barras en triángulos. En el <b>puente colgante</b>, el tablero cuelga de péndolas unidas a dos grandes cables apoyados en torres y anclados en los extremos; los cables trabajan a tracción y las torres a compresión. En el <b>puente atirantado</b>, los tirantes van directamente de las torres al tablero, formando un abanico o un arpa.</p><p>La distancia entre apoyos se llama <b>luz</b>. Cuanto mayor es la luz, más importante es aligerar el tablero y aprovechar materiales que trabajan bien a tracción, como el acero: los puentes colgantes alcanzan luces de casi 2 km.</p>`, svg: ["Tipos de puentes", [["Viga", "tablero a flexión, luz corta"], ["Arco", "compresión hacia los estribos"], ["Colgante", "cables a tracción y torres"], ["Atirantado", "tirantes de la torre al tablero"]], "Tipos de puentes"] },
    { tras: "<h3>Construir estructuras en el taller</h3>", html: `<h3>Ensayar estructuras y calcular su eficiencia</h3><p>En el aula, las maquetas se <b>ensayan</b> colgando o colocando pesos poco a poco hasta que la estructura se rompe o se deforma demasiado. Para comparar maquetas de distinto tamaño se calcula la <b>eficiencia estructural</b>: la carga máxima soportada dividida entre el peso de la estructura. Un puente de palillos de 150 g que aguanta 9 kg (9.000 g) tiene una eficiencia de 9.000 / 150 = 60: soporta 60 veces su propio peso.</p><p>Durante el ensayo conviene observar <b>dónde y cómo falla</b> la estructura: si se rompe una barra a compresión, se puede reforzar o acortar; si se despega una unión, hay que mejorarla; si la estructura se tuerce hacia un lado, falta triangulación o arriostramiento. Registrar la carga, la deformación y el tipo de fallo en una tabla, con fotos, permite mejorar el diseño en el siguiente prototipo.</p>`, svg: ["Eficiencia estructural", [["Fórmula", "carga máxima / peso propio"], ["Ejemplo", "9.000 g / 150 g = 60"], ["Observar", "dónde y cómo falla"]], "Ensayar y comparar"] },
  ],
  videos: [["<h3>Flexión, torsión y cortadura</h3>", "flexion"]],
  grupos: [4, 3, 4, 3],
  ejemplos: [
    ["Clasifica las cargas de un puente: peso del tablero, coches, viento, peso de las barandillas, nieve.", ["Fijas: peso del tablero y de las barandillas (siempre están).", "Variables: coches, viento y nieve (cambian con el tiempo).", "El viento y los coches que frenan son además cargas dinámicas."], "Fijas: tablero y barandillas; variables: coches, viento y nieve."],
    ["Dos maquetas de puente: A pesa 120 g y aguanta 6 kg; B pesa 200 g y aguanta 8 kg. ¿Cuál es más eficiente?", ["A: 6.000 / 120 = 50.", "B: 8.000 / 200 = 40.", "Se compara: 50 > 40."], "La A es más eficiente aunque soporte menos carga total."],
    ["En un puente colgante, indica el esfuerzo de: cables principales, péndolas, torres y tablero.", ["Cables principales: tracción (cuelgan y se estiran).", "Péndolas: tracción.", "Torres: compresión (reciben el peso de los cables).", "Tablero: flexión entre péndolas."], "Cables y péndolas a tracción, torres a compresión y tablero a flexión."],
  ],
  errores: ["Comparar maquetas solo por la carga que aguantan, sin dividir entre su peso (eficiencia)."],
  niveles: "bbbbmbmmmb",
  ejercicios: [
    ["b", "Clasifica en fijas o variables: el peso de un tejado, la nieve, los alumnos de un aula, los tabiques.", "Fijas: peso del tejado y tabiques. Variables: nieve y alumnos."],
    ["b", "¿Qué diferencia hay entre una carga estática y una dinámica? Da un ejemplo de cada una.", "La estática se aplica lentamente y no cambia (un libro sobre una mesa); la dinámica se aplica de golpe o repetidamente (alguien que salta sobre la mesa)."],
    ["b", "Indica el tipo de estructura: presa, catedral gótica, torre eléctrica, castillo hinchable, carrocería de coche.", "Presa: masiva. Catedral: abovedada. Torre eléctrica: triangulada. Castillo hinchable: neumática. Carrocería: laminar."],
    ["b", "Escribe cuatro funciones de las estructuras con un ejemplo de cada una.", "Soportar pesos (estantería), mantener la forma (tienda de campaña), proteger (casco), salvar distancias (puente)."],
    ["b", "¿Qué es la luz de un puente?", "La distancia entre dos apoyos consecutivos del puente."],
    ["b", "Diferencia entre unión rígida y articulada, con un ejemplo.", "La rígida impide el giro entre las piezas (nudo soldado); la articulada lo permite (bisagra, pasador)."],
    ["m", "Calcula la eficiencia de una torre de espaguetis de 80 g que soporta 3,2 kg.", "3,2 kg = 3.200 g. Eficiencia = 3.200 / 80 = 40: aguanta 40 veces su peso."],
    ["m", "¿Por qué los arcos pudieron construirse con piedra y las vigas largas no?", "El arco trabaja a compresión y la piedra resiste muy bien la compresión. Una viga larga trabaja a flexión y su parte inferior se estira (tracción), esfuerzo que la piedra resiste mal y se agrieta."],
    ["m", "Explica qué falló en el puente de Tacoma Narrows y cómo se evita hoy.", "El tablero era demasiado estrecho y flexible a torsión; el viento lo hizo oscilar hasta romperlo. Hoy se diseñan tableros más rígidos, con celosías y formas aerodinámicas, y se ensayan en túneles de viento."],
    ["m", "¿Qué es el coeficiente de seguridad y por qué se usa?", "Es el margen con el que se diseña una estructura: aguantar varias veces la carga prevista. Se usa porque las cargas reales pueden ser mayores de lo esperado, los materiales tienen defectos y hay cargas dinámicas."],
    ["m", "Diferencia un puente colgante de uno atirantado.", "En el colgante, el tablero cuelga de péndolas unidas a grandes cables que van de torre a torre y se anclan en los extremos. En el atirantado, los tirantes van directamente de la torre al tablero."],
    ["m", "Una maqueta se tuerce hacia un lado al cargarla. ¿Qué le falta y cómo lo arreglas?", "Le falta rigidez: no está triangulada o arriostrada. Se añaden diagonales en las caras laterales y escuadras en las esquinas."],
    ["m", "Indica el esfuerzo de cada elemento al sentarte en una silla: patas, asiento, travesaños.", "Patas: compresión. Asiento: flexión. Travesaños entre patas: tracción o compresión según el lado, y evitan que las patas se abran."],
    ["m", "¿Por qué se usan perfiles en doble T en lugar de vigas macizas?", "Porque concentran el material arriba y abajo, donde la flexión produce los mayores esfuerzos (compresión y tracción), y ahorran el material del centro, que trabaja poco. Pesan menos con casi la misma resistencia."],
    ["m", "Nombra tres estructuras naturales y la estructura artificial que se ha inspirado en cada una.", "Panal de abejas: paneles de nido de abeja en aviones. Tela de araña: estructuras de cables tensados. Huesos huecos de las aves: tubos ligeros en bicicletas."],
    ["a", "Diseña el ensayo de un puente de palillos: material, cómo aplicar la carga, qué medir y cómo registrar.", "Material: puente, dos mesas a 30 cm, cubo colgado del centro, arena y báscula. Se añade arena poco a poco. Se mide la carga máxima (pesando el cubo) y el peso del puente; se anota la deformación, el punto de fallo y se fotografía. Se calcula la eficiencia."],
    ["a", "Una estantería de 1 m cargada con libros se curva en el centro. Propón tres soluciones y justifica cada una.", "Poner un apoyo intermedio (reduce la luz a la mitad), usar una balda más gruesa o con un perfil en L en el borde (más rígida a flexión) o cambiar a un material más rígido (madera maciza en vez de aglomerado)."],
    ["a", "Compara la eficiencia de tres torres: A (50 g, 1,5 kg), B (90 g, 3,6 kg), C (40 g, 1,0 kg). Ordénalas y explica qué puede hacer mejor a la B.", "A: 1.500/50 = 30. B: 3.600/90 = 40. C: 1.000/40 = 25. Orden: B > A > C. La B probablemente está mejor triangulada y sus barras a compresión son más cortas, lo que evita que se pandeen."],
    ["a", "Explica la estabilidad de una grúa torre: ¿para qué sirve el contrapeso y qué pasaría sin él?", "La carga en el extremo de la pluma crea un giro que tiende a volcar la grúa. El contrapeso, al otro lado, crea un giro contrario y mantiene el centro de gravedad dentro de la base. Sin él, la grúa volcaría hacia la carga."],
    ["a", "Analiza la Torre Eiffel: tipo de estructura, material, esfuerzos y por qué es tan ligera para su altura.", "Es una estructura triangulada de hierro pudelado. Sus barras trabajan a tracción y compresión, sin flexión importante. Al ser una celosía casi vacía, el viento pasa a través y el peso es muy bajo para sus 300 m: si se fundiera, su hierro formaría una placa de solo unos centímetros de altura sobre su base."],
  ],
  cuartas: ["esfuerzos", "torsión", "flexión", "compresión", "flexión", "rectángulo", "neumática", "estrechar la base", "colgante", "pegadas", "torsión", "parte", "aislar el edificio"],
  quiz: [
    ["El peso propio de un edificio es una carga…", ["variable", "fija", "dinámica", "neumática"], 1, "Actúa siempre con el mismo valor."],
    ["Un golpe o una vibración producen cargas…", ["estáticas", "dinámicas", "fijas", "nulas"], 1, "Se aplican de golpe o repetidamente."],
    ["Una presa de gravedad es una estructura…", ["laminar", "masiva", "colgante", "neumática"], 1, "Acumula mucho material."],
    ["Una catedral gótica es una estructura…", ["abovedada", "colgante", "triangulada", "neumática"], 0, "Bóvedas y arcos a compresión."],
    ["La distancia entre apoyos de un puente se llama…", ["luz", "flecha", "vano libre de carga", "estribo"], 0, "La luz."],
    ["En un puente atirantado, los tirantes trabajan a…", ["compresión", "tracción", "torsión", "cortadura"], 1, "Tiran del tablero hacia la torre."],
    ["La eficiencia de una maqueta es…", ["peso / carga", "carga máxima / peso propio", "carga + peso", "altura / base"], 1, "Cuántas veces su peso aguanta."],
    ["Diseñar para aguantar más de lo previsto es aplicar un…", ["coeficiente de seguridad", "perfil", "tirante", "estribo"], 0, "Margen de seguridad."],
    ["La carrocería de un coche es una estructura…", ["laminar", "masiva", "entramada", "abovedada"], 0, "Superficie fina y curvada."],
    ["Una bisagra es una unión…", ["rígida", "articulada", "soldada", "fija"], 1, "Permite girar."],
  ],
  examen: [
    ["Un puente de arco transmite el peso a…", ["tracción", "compresión", "torsión", "cortadura"], 1, "Hacia los estribos."],
    ["Una maqueta de 100 g que aguanta 5 kg tiene eficiencia…", ["5", "50", "500", "0,05"], 1, "5.000 / 100 = 50."],
    ["El puente de Tacoma cayó sobre todo por…", ["exceso de coches", "oscilaciones del viento", "un terremoto", "corrosión"], 1, "Falta de rigidez a torsión."],
    ["Los edificios de pilares y vigas son estructuras…", ["entramadas", "masivas", "neumáticas", "laminares"], 0, "Esqueleto de pilares y vigas."],
    ["Las torres de un puente colgante trabajan a…", ["tracción", "compresión", "torsión", "flexión pura"], 1, "Reciben el peso de los cables."],
  ],
  tarjetas: [["Carga fija", "Actúa siempre: peso propio, tejado, tabiques."], ["Carga dinámica", "Se aplica de golpe o repetida: saltos, viento, vibración."], ["Eficiencia estructural", "Carga máxima dividida entre el peso propio."], ["Luz de un puente", "Distancia entre dos apoyos."]],
  glosario: [
    ["Estructura", "Conjunto de elementos que soportan cargas sin romperse ni deformarse en exceso."],
    ["Carga", "Fuerza externa que actúa sobre una estructura."],
    ["Esfuerzo", "Tensión interna que sufre un elemento por las cargas."],
    ["Tracción", "Esfuerzo que tiende a estirar."],
    ["Compresión", "Esfuerzo que tiende a aplastar."],
    ["Flexión", "Esfuerzo que tiende a curvar."],
    ["Torsión", "Esfuerzo que tiende a retorcer."],
    ["Cortadura", "Esfuerzo que tiende a cortar."],
    ["Estabilidad", "Capacidad de no volcar."],
    ["Rigidez", "Capacidad de no deformarse."],
    ["Triangulación", "Uso de triángulos para hacer rígida una estructura."],
    ["Perfil", "Forma de la sección de una barra o viga."],
    ["Luz", "Distancia entre apoyos."],
    ["Coeficiente de seguridad", "Margen con el que se diseña para aguantar más de lo previsto."],
    ["Eficiencia estructural", "Carga máxima entre peso propio."],
    ["Cimentación", "Parte que reparte el peso sobre el terreno."],
  ],
  situacion: { titulo: "Concurso de puentes de palillos", reto: "Diseñar y construir en equipos un puente de palillos y cola que salve una luz de 30 cm, pese menos de 150 g y alcance la mayor eficiencia posible.", pasos: ["Estudiar tipos de puentes y elegir uno justificando sus esfuerzos.", "Dibujar el plano a escala 1:1 y la lista de barras.", "Construir las dos caras laterales trianguladas y unirlas con travesaños.", "Ensayar con un cubo y arena hasta la rotura, registrando carga y tipo de fallo.", "Calcular la eficiencia y proponer mejoras para un segundo prototipo."], producto: "Puente, plano, tabla de ensayo y ficha de mejoras.", evaluacion: ["El diseño está justificado con los esfuerzos de cada elemento.", "El puente cumple la luz y el peso máximo.", "El ensayo se registra con datos y fotos.", "Se calcula la eficiencia y se analizan los fallos."] },
  saberes: "estructuras: cargas, esfuerzos, condiciones (estabilidad, resistencia, rigidez), tipos y elementos; diseño, construcción y ensayo de prototipos.",
  familias: ["Buscad en vuestro barrio un puente o una grúa y averiguad qué tipo de estructura es y qué esfuerzos soportan sus partes."],
  minutos: 110,
});
