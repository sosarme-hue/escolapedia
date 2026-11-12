// Educación Plástica 1º de Primaria: puntos y líneas.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", negro: "#212121" };

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Puntos y líneas",
  minutos: 25,
  objetivos: ["Reconocer el punto y la línea como elementos para dibujar", "Distinguir líneas rectas, curvas, en zigzag y en espiral", "Hacer dibujos solo con puntos y líneas"],
  claves: ["punto", "línea recta", "línea curva", "zigzag", "espiral", "contorno"],
  pregunta: {
    texto: "¿Se puede hacer un dibujo usando solo puntitos?",
    respuesta: "¡Sí! Si ponemos muchos <mark>puntos</mark> juntos, forman manchas y figuras. Algunos pintores famosos pintaban así, con miles de puntos de colores.",
  },
  bloques: [
    {
      html: `<h3>El punto</h3><p>El <mark>punto</mark> es la marca más pequeña que podemos hacer. Lo hacemos al apoyar la punta del lápiz en el papel.</p><p>Los puntos pueden ser <b>grandes o pequeños</b>, de muchos colores. Con un rotulador, con el dedo mojado en pintura o con un bastoncillo de algodón.</p>`,
      svg: svg("Puntos de distintos tamaños y colores", `${[[40, 50, 6, P.rojo], [80, 70, 12, P.azul], [130, 45, 4, P.negro], [170, 80, 18, P.amarillo], [215, 50, 9, P.verde], [60, 120, 15, P.naranja], [120, 110, 8, P.morado], [200, 130, 5, P.rojo], [160, 140, 10, P.azul]].map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join("")}`),
    },
    {
      html: `<h3>Muchos puntos juntos</h3><p>Si ponemos los puntos <mark>muy juntos</mark>, se ve una mancha oscura. Si los separamos, la zona se ve más clara.</p><p>Con puntos podemos rellenar un dibujo: un pez, una flor o una mariquita. ¡Ten paciencia y verás qué bonito queda!</p>`,
      svg: svg("Un pez relleno con puntos de colores", `<path d="M40 90 Q 110 20 180 90 Q 110 160 40 90 Z M180 90 L 225 60 L 225 120 Z" fill="none" stroke="var(--ink)" stroke-width="2.5"/>${[...Array(80)].map((_, i) => { const x = 55 + (i % 16) * 8.5, y = 70 + Math.floor(i / 16) * 10, ok = ((x - 110) / 62) ** 2 + ((y - 90) / 30) ** 2 < 0.8; return ok ? `<circle cx="${x}" cy="${y}" r="3" fill="${[P.azul, P.verde, P.naranja][i % 3]}"/>` : ""; }).join("")}<circle cx="70" cy="82" r="5" fill="${P.negro}"/>`),
    },
    {
      html: `<h3>La línea</h3><p>Si movemos el lápiz sin levantarlo, el punto <mark>se pone a caminar</mark> y deja un rastro: eso es una <b>línea</b>.</p><p>Las líneas pueden ser <b>largas o cortas</b>, <b>gruesas o finas</b>. Con ellas dibujamos el borde de las cosas.</p>`,
      svg: svg("Un punto que se convierte en una línea ondulada, y líneas gruesas y finas", `<circle cx="30" cy="60" r="6" fill="${P.rojo}"/><path d="M30 60 q 30 -30 60 0 t 60 0 t 60 0" stroke="${P.rojo}" stroke-width="3" fill="none"/><path d="M30 110 H 230" stroke="var(--ink)" stroke-width="10" stroke-linecap="round"/><path d="M30 145 H 230" stroke="var(--ink)" stroke-width="1.5"/>`),
      video: { id: "kR-4tyRsQ1c", titulo: "Las líneas para niños", canal: "Smile and Learn - Español", vistas: 1903534, megusta: 0 },
    },
    {
      html: `<h3>Líneas rectas</h3><p>Las <mark>líneas rectas</mark> no se tuercen. Pueden ser <b>horizontales</b> (tumbadas, como el horizonte del mar), <b>verticales</b> (de pie, como un árbol) o <b>inclinadas</b> (como un tobogán).</p><p>Para hacerlas muy rectas podemos usar una regla.</p>`,
      svg: svg("Una línea horizontal, una vertical y una inclinada", `<path d="M20 120 H 90" stroke="${P.azul}" stroke-width="5" stroke-linecap="round"/><path d="M130 50 V 125" stroke="${P.verde}" stroke-width="5" stroke-linecap="round"/><path d="M175 125 L 240 55" stroke="${P.rojo}" stroke-width="5" stroke-linecap="round"/>${txt(55, 150, "horizontal", P.azul, 12)}${txt(130, 150, "vertical", P.verde, 12)}${txt(208, 150, "inclinada", P.rojo, 12)}`),
    },
    {
      html: `<h3>Líneas curvas, zigzag y espiral</h3><p>Las <mark>líneas curvas</mark> se doblan suavemente, como una ola. Las líneas en <mark>zigzag</mark> suben y bajan con picos, como un rayo.</p><p>La <mark>espiral</mark> da vueltas y vueltas, como un caracol. ¡Cada línea transmite algo distinto: calma, energía o movimiento!</p>`,
      svg: svg("Una línea curva, una en zigzag y una espiral", `<path d="M15 40 q 20 -30 40 0 t 40 0" stroke="${P.azul}" stroke-width="4" fill="none"/><path d="M15 125 l 15 -25 l 15 25 l 15 -25 l 15 25 l 15 -25" stroke="${P.naranja}" stroke-width="4" fill="none"/><path d="M190 90 m 0 0 a 5 5 0 0 1 10 0 a 10 10 0 0 1 -20 0 a 15 15 0 0 1 30 0 a 20 20 0 0 1 -40 0 a 25 25 0 0 1 50 0" stroke="${P.morado}" stroke-width="4" fill="none"/>${txt(55, 68, "curva", P.azul, 12)}${txt(60, 150, "zigzag", P.naranja, 12)}${txt(190, 140, "espiral", P.morado, 12)}`),
    },
    {
      html: `<h3>Líneas abiertas y cerradas</h3><p>Una línea es <mark>cerrada</mark> si termina donde empezó: deja un espacio dentro, como un corral.</p><p>Una línea es <mark>abierta</mark> si sus extremos no se tocan. Las líneas cerradas forman el <b>contorno</b> de las figuras, que luego podemos colorear.</p>`,
      svg: svg("Una línea abierta y una línea cerrada con un color dentro", `<path d="M30 120 q 20 -80 50 -40 t 40 -30" stroke="var(--ink)" stroke-width="4" fill="none"/><path d="M160 90 q 0 -50 40 -40 q 45 10 30 50 q -15 40 -45 30 q -25 -8 -25 -40 Z" fill="${P.amarillo}" opacity=".6" stroke="var(--ink)" stroke-width="4"/>${txt(75, 150, "abierta", "var(--ink)", 13)}${txt(195, 150, "cerrada", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Las líneas en la naturaleza</h3><p>Si te fijas, hay <mark>líneas por todas partes</mark>: las rayas de una cebra, las vetas de la madera, los surcos de un campo o las ondas del agua cuando tiras una piedra.</p><p>Los artistas observan bien estas líneas para luego dibujarlas.</p>`,
      svg: svg("Ondas en el agua alrededor de una piedra y las rayas de una cebra", `${[12, 25, 38, 51].map((r) => `<ellipse cx="75" cy="95" rx="${r}" ry="${r * 0.5}" fill="none" stroke="${P.azul}" stroke-width="3"/>`).join("")}<rect x="150" y="45" width="90" height="90" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${160 + i * 17} 50 q 8 40 -2 80" stroke="${P.negro}" stroke-width="7" fill="none"/>`).join("")}`),
    },
    {
      html: `<h3>Artistas de puntos y líneas</h3><p>El pintor <b>Joan Miró</b> usaba muchas <mark>líneas negras y puntos de colores</mark> en sus cuadros: estrellas, pájaros y lunas muy sencillos.</p><p>Otros artistas pintaban con miles de puntitos de colores. Mira de lejos y de cerca: ¡el dibujo cambia!</p>`,
      svg: svg("Un dibujo al estilo de Miró con líneas negras, una estrella y puntos de colores", `<path d="M30 130 q 50 -100 100 -40 t 100 -30" stroke="${P.negro}" stroke-width="4" fill="none"/><path d="M190 40 l 0 30 M175 55 l 30 0 M180 45 l 20 20 M200 45 l -20 20" stroke="${P.negro}" stroke-width="3"/><circle cx="70" cy="60" r="14" fill="${P.rojo}"/><circle cx="150" cy="130" r="10" fill="${P.amarillo}" stroke="${P.negro}" stroke-width="2"/><circle cx="215" cy="125" r="8" fill="${P.azul}"/><circle cx="110" cy="45" r="5" fill="${P.verde}"/>`),
      video: { id: "-Zp7Du1ckaY", titulo: "Joan Miró: biografía para niños", canal: "Anakronismos", vistas: 650554, megusta: 0 },
    },
    {
      html: `<h3>Juego: el punto que camina</h3><p>Pon un punto en un papel. Ahora, sin levantar el lápiz, <mark>hazlo caminar</mark>: recto, curvo, en zigzag, en espiral… hasta volver al principio.</p><p>Te saldrá una forma cerrada con muchos huecos. Rellena cada hueco con <b>puntos o rayas</b> de colores diferentes. ¡Es tu obra de arte!</p>`,
      svg: svg("Un garabato cerrado con huecos rellenos de puntos, rayas y color", `<path d="M40 90 q 20 -60 70 -40 l 20 30 l 20 -30 q 50 -10 60 30 q 10 50 -40 60 q -40 10 -60 -20 q -20 30 -50 10 q -30 -15 -20 -40 Z" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M110 90 V 120 M60 90 H 110 M150 90 h 50" stroke="var(--ink)" stroke-width="3"/>${[...Array(12)].map((_, i) => `<circle cx="${62 + (i % 4) * 12}" cy="${70 + Math.floor(i / 4) * 8}" r="2.5" fill="${P.rojo}"/>`).join("")}${[0, 1, 2, 3, 4].map((i) => `<path d="M${155 + i * 9} 95 v 25" stroke="${P.azul}" stroke-width="2.5"/>`).join("")}<path d="M115 95 h 30 v 30 h -30 Z" fill="${P.amarillo}" opacity=".7"/>`),
    },
  ],
  figura: {
    titulo: "Tipos de líneas",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Seis tipos de líneas: horizontal, vertical, inclinada, curva, zigzag y espiral">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <path d="M40 80 H 170" stroke="${P.azul}" stroke-width="6" stroke-linecap="round"/><path d="M320 40 V 115" stroke="${P.verde}" stroke-width="6" stroke-linecap="round"/><path d="M470 115 L 600 45" stroke="${P.rojo}" stroke-width="6" stroke-linecap="round"/>
      <path d="M40 185 q 30 -40 65 0 t 65 0" stroke="${P.azul}" stroke-width="6" fill="none"/><path d="M255 205 l 22 -40 l 22 40 l 22 -40 l 22 40 l 22 -40" stroke="${P.naranja}" stroke-width="6" fill="none"/><path d="M535 185 a 6 6 0 0 1 12 0 a 12 12 0 0 1 -24 0 a 18 18 0 0 1 36 0 a 24 24 0 0 1 -48 0 a 30 30 0 0 1 60 0" stroke="${P.morado}" stroke-width="5" fill="none"/>
      ${[["horizontal", 105, 130], ["vertical", 320, 140], ["inclinada", 535, 140], ["curva", 105, 240], ["zigzag", 320, 240], ["espiral", 535, 240]].map(([t, x, y]) => txt(x, y, t, "var(--ink)", 15)).join("")}
    </svg>`,
  },
  video: { id: "X5rGFxkT7TY", titulo: "El punto y la línea: cómo hacer un dibujo solo con líneas", canal: "Adriana Arunima", vistas: 786632, megusta: 0, busqueda: "el punto y la línea para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibuja una mariquita con puntos.", pasos: ["Dibuja un círculo grande con una línea cerrada.", "Haz una línea recta en medio: son las alas.", "Pinta el círculo de rojo y pon puntos negros grandes."], resultado: "una mariquita hecha con líneas y puntos." },
    { enunciado: "Dibuja la lluvia y un rayo.", pasos: ["Para la lluvia, haz rayitas cortas inclinadas.", "Para el rayo, haz una línea en zigzag.", "Dibuja una nube arriba con una línea curva cerrada."], resultado: "una tormenta con líneas rectas, zigzag y curvas." },
    { enunciado: "Haz un caracol.", pasos: ["Dibuja una espiral grande: es la concha.", "Debajo, una línea curva larga: el cuerpo.", "Añade dos líneas cortas con un punto al final: los cuernos."], resultado: "un caracol hecho con una espiral." },
  ],
  errores: [
    "Apretar mucho el lápiz: la línea sale muy oscura y no se puede borrar.",
    "Hacer los puntos con rayitas: el punto se hace apoyando y levantando la punta.",
    "Dejar huecos en una línea que debería ser cerrada: luego el color se escapa.",
    "Pensar que solo vale la línea recta: las curvas y los zigzag también dan vida al dibujo.",
  ],
  ejercicios: [
    { q: "Llena un círculo con puntos de tres colores.", sol: "Un círculo relleno de puntos sin dejar grandes huecos." },
    { q: "Dibuja tres líneas horizontales y tres verticales.", sol: "Líneas tumbadas y líneas de pie." },
    { q: "Dibuja una línea en zigzag. ¿A qué se parece?", sol: "A un rayo, a los dientes de una sierra o a unas montañas." },
    { q: "Dibuja una espiral. ¿Qué animal tiene esa forma?", sol: "El caracol." },
    { q: "Dibuja una línea abierta y otra cerrada.", sol: "La cerrada termina donde empezó." },
    { q: "Busca en casa algo con rayas.", sol: "Por ejemplo, una camiseta de rayas, una persiana o un paso de cebra en la calle." },
    { q: "Dibuja el mar con líneas curvas.", sol: "Olas con líneas curvas azules." },
    { q: "Haz un camino con puntos que vaya de una casa a un árbol.", sol: "Una fila de puntos entre los dos dibujos." },
    { q: "Dibuja una cebra y ponle rayas.", sol: "Una cebra con rayas negras." },
    { q: "Haz una línea gruesa y otra fina.", sol: "La gruesa con un rotulador gordo o apretando la cera; la fina con lápiz." },
  ],
  quiz: [
    { q: "La marca más pequeña que podemos hacer es…", o: ["la línea", "el punto", "la mancha"], a: 1, e: "El punto." },
    { q: "Una línea tumbada es…", o: ["vertical", "horizontal", "espiral"], a: 1, e: "Como el horizonte." },
    { q: "Una línea de pie es…", o: ["vertical", "horizontal", "curva"], a: 0, e: "Como un árbol." },
    { q: "Un rayo se dibuja con una línea…", o: ["curva", "en zigzag", "en espiral"], a: 1, e: "Con picos." },
    { q: "La concha de un caracol es una…", o: ["espiral", "recta", "zigzag"], a: 0, e: "Da vueltas." },
    { q: "Las olas del mar son líneas…", o: ["rectas", "curvas", "en zigzag"], a: 1, e: "Se doblan suavemente." },
    { q: "Una línea que termina donde empezó es…", o: ["abierta", "cerrada", "fina"], a: 1, e: "Deja un espacio dentro." },
    { q: "Muchos puntos muy juntos se ven…", o: ["más oscuros", "más claros", "invisibles"], a: 0, e: "Forman una mancha." },
    { q: "Miró usaba muchas…", o: ["líneas negras y puntos de colores", "fotos", "esculturas de hielo"], a: 0, e: "Formas sencillas y colores." },
    { q: "La línea es un punto que…", o: ["se para", "camina", "se borra"], a: 1, e: "Deja un rastro." },
  ],
  examen: [
    { q: "Un tobogán es una línea…", o: ["inclinada", "horizontal", "espiral"], a: 0, e: "Inclinada." },
    { q: "Para colorear sin salirse necesito una línea…", o: ["abierta", "cerrada", "en zigzag"], a: 1, e: "Cerrada." },
    { q: "Las rayas de la cebra son…", o: ["puntos", "líneas", "círculos"], a: 1, e: "Líneas." },
    { q: "Con puntos de colores se puede…", o: ["solo escribir", "hacer un dibujo", "nada"], a: 1, e: "Muchos puntos forman figuras." },
  ],
  feynman: ["Qué es un punto y qué es una línea", "Qué tipos de líneas conozco", "Para qué sirven las líneas cerradas"],
  mapa: mapa("PUNTOS Y LÍNEAS", "var(--pri)", [
    ["Punto", "grande · pequeño · de colores", "var(--red)"],
    ["Rectas", "horizontal · vertical · inclinada", "var(--pen)"],
    ["Curvas", "zigzag · espiral · ondas", "var(--sun)"],
    ["Abierta y cerrada", "la cerrada hace contorno", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Qué es un punto?", "La marca más pequeña"],
    ["¿Qué es una línea?", "Un punto que camina"],
    ["Línea tumbada", "Horizontal"],
    ["Línea de pie", "Vertical"],
    ["Línea con picos", "Zigzag"],
    ["Línea que da vueltas", "Espiral"],
    ["Línea que acaba donde empezó", "Cerrada"],
    ["Pintor de líneas negras y puntos de colores", "Joan Miró"],
  ],
  familias: [
    "Dibujad juntos con bastoncillos de algodón mojados en pintura: solo puntos.",
    "En la playa o el parque, haced líneas en la arena con un palo: rectas, curvas, espirales.",
    "Buscad líneas y rayas en la ropa, los suelos y los edificios.",
    "Mirad cuadros de Miró en internet y copiad uno con ceras.",
  ],
  profesores: PROF("Educación Plástica y Visual: elementos básicos del lenguaje visual (punto y línea), tipos de líneas y su expresividad; observación de obras de artistas", ["Puntillismo con bastoncillos y témpera.", "Dictado de líneas: el docente dice el tipo y todos dibujan.", "Observación de una obra de Miró y creación de una versión propia."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
