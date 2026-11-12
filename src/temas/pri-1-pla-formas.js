// Educación Plástica 1º de Primaria: formas y figuras.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", negro: "#212121", marron: "#8d6e63", rosa: "#f48fb1" };

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Formas y figuras",
  minutos: 25,
  objetivos: ["Dibujar figuras a partir de formas sencillas", "Distinguir formas geométricas y formas libres", "Crear composiciones con formas recortadas"],
  claves: ["forma", "silueta", "geométrica", "libre", "recortar", "collage", "composición"],
  pregunta: {
    texto: "¿Sabrías dibujar un gato usando solo círculos y triángulos?",
    respuesta: "¡Claro! Un <mark>círculo grande</mark> para el cuerpo, otro más pequeño para la cabeza y dos <mark>triángulos</mark> para las orejas. Casi todo se puede dibujar con formas sencillas.",
  },
  bloques: [
    {
      html: `<h3>Todo tiene forma</h3><p>Cada cosa tiene una <mark>forma</mark>: la pelota es redonda, la puerta es alargada y la estrella tiene puntas.</p><p>Si miramos solo el borde de algo, vemos su <b>silueta</b>. Por las siluetas reconocemos las cosas aunque no tengan color.</p>`,
      svg: svg("Siluetas negras de un árbol, una casa y un gato", `<path d="M40 140 V 110 M40 110 q -30 -10 -20 -40 q 0 -30 20 -35 q 20 5 20 35 q 10 30 -20 40" fill="${P.negro}" stroke="${P.negro}" stroke-width="6"/><path d="M95 140 V 90 L 130 60 L 165 90 V 140 Z" fill="${P.negro}"/><g fill="${P.negro}"><ellipse cx="210" cy="125" rx="22" ry="18"/><circle cx="210" cy="96" r="14"/><path d="M198 88 l 3 -14 l 7 9 Z M222 88 l -3 -14 l -7 9 Z"/><path d="M230 130 q 20 -5 15 -30" stroke="${P.negro}" stroke-width="5" fill="none"/></g>`),
    },
    {
      html: `<h3>Formas geométricas</h3><p>Las <mark>formas geométricas</mark> tienen bordes muy regulares: el <b>círculo</b>, el <b>cuadrado</b>, el <b>triángulo</b> y el <b>rectángulo</b>.</p><p>Las conocemos de Matemáticas, pero en Plástica las usamos para <b>crear</b>: con ellas construimos casas, robots, animales y personas.</p>`,
      svg: svg("Un robot hecho con un cuadrado, un rectángulo, círculos y triángulos", `<rect x="105" y="25" width="50" height="40" rx="4" fill="${P.azul}"/><circle cx="120" cy="45" r="6" fill="var(--card)"/><circle cx="140" cy="45" r="6" fill="var(--card)"/><path d="M130 25 V 12" stroke="${P.negro}" stroke-width="3"/><circle cx="130" cy="10" r="5" fill="${P.rojo}"/><rect x="95" y="70" width="70" height="60" rx="4" fill="${P.verde}"/><path d="M130 80 L 145 110 L 115 110 Z" fill="${P.amarillo}"/><rect x="70" y="75" width="22" height="10" fill="${P.naranja}"/><rect x="168" y="75" width="22" height="10" fill="${P.naranja}"/><rect x="105" y="133" width="15" height="30" fill="${P.morado}"/><rect x="140" y="133" width="15" height="30" fill="${P.morado}"/>`),
    },
    {
      html: `<h3>Formas libres</h3><p>Las <mark>formas libres</mark> u orgánicas no tienen reglas: son como las nubes, las hojas, los charcos o las piedras.</p><p>Las encontramos sobre todo en la <b>naturaleza</b>. Para dibujarlas usamos líneas curvas, sin regla y sin compás.</p>`,
      svg: svg("Formas libres: una nube, una hoja y un charco", `<path d="M30 70 q -5 -25 25 -25 q 10 -20 35 -10 q 25 -5 25 20 q 15 15 -5 25 h -70 q -20 0 -10 -10 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M160 120 q 0 -70 70 -80 q 5 70 -70 80 Z M160 120 L 220 50" fill="${P.verde}" stroke="var(--ink)" stroke-width="2"/><path d="M30 140 q 20 -15 60 -8 q 40 4 30 18 q -15 12 -55 8 q -40 -4 -35 -18 Z" fill="${P.azul}" opacity=".6"/>`),
    },
    {
      html: `<h3>Dibujar con formas</h3><p>Un truco de dibujante: antes de dibujar algo, piensa <mark>qué formas lo componen</mark>.</p><p>Un muñeco de nieve son <b>tres círculos</b>. Una casa es un <b>cuadrado y un triángulo</b>. Un coche es un <b>rectángulo con dos círculos</b>. Después añades los detalles.</p>`,
      svg: svg("Un muñeco de nieve con tres círculos y un coche con un rectángulo y dos círculos", `<circle cx="60" cy="135" r="28" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="60" cy="90" r="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="60" cy="56" r="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M60 58 l 14 3 l -14 3 Z" fill="${P.naranja}"/><rect x="130" y="95" width="110" height="35" rx="6" fill="${P.rojo}"/><rect x="155" y="72" width="55" height="25" rx="5" fill="${P.rojo}"/><circle cx="160" cy="133" r="13" fill="${P.negro}"/><circle cx="215" cy="133" r="13" fill="${P.negro}"/>`),
      video: { id: "NooFRrvZ5vw", titulo: "Las formas geométricas: aprende a dibujar", canal: "Genius Kids", vistas: 19159339, megusta: 0 },
    },
    {
      html: `<h3>Grande, mediano y pequeño</h3><p>Una misma forma puede tener <mark>distintos tamaños</mark>. Si dibujamos algo grande, parece que está <b>cerca</b>; si lo dibujamos pequeño, parece que está <b>lejos</b>.</p><p>También podemos ordenar formas de mayor a menor, como las muñecas rusas que se meten unas dentro de otras.</p>`,
      svg: svg("Tres muñecas rusas de tamaño grande, mediano y pequeño", `${[[60, 1], [140, 0.75], [205, 0.5]].map(([x, k]) => `<g transform="translate(${x} ${140}) scale(${k})"><ellipse cx="0" cy="-45" rx="38" ry="48" fill="${P.rojo}"/><circle cx="0" cy="-90" r="26" fill="${P.rojo}"/><circle cx="0" cy="-88" r="17" fill="#ffe0b2"/><circle cx="-6" cy="-90" r="2.5" fill="${P.negro}"/><circle cx="6" cy="-90" r="2.5" fill="${P.negro}"/><circle cx="0" cy="-40" r="14" fill="${P.amarillo}"/></g>`).join("")}`),
    },
    {
      html: `<h3>Recortar formas</h3><p>Podemos crear formas <mark>recortando papel</mark>. Usamos tijeras de punta redonda y las cogemos con cuidado.</p><p>Primero dibujamos la forma con lápiz y luego recortamos <b>siguiendo la línea</b>, girando el papel y no las tijeras. También podemos rasgar el papel con los dedos para hacer formas libres.</p>`,
      svg: svg("Unas tijeras recortando una estrella de papel por la línea", `<path d="M150 30 l 14 32 h 34 l -27 20 l 10 34 l -31 -20 l -31 20 l 10 -34 l -27 -20 h 34 Z" fill="${P.amarillo}" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/><g transform="translate(60 125) rotate(-30)"><circle cx="-12" cy="10" r="10" fill="none" stroke="${P.rojo}" stroke-width="5"/><circle cx="12" cy="10" r="10" fill="none" stroke="${P.rojo}" stroke-width="5"/><path d="M-6 0 L 20 -50 M6 0 L -8 -50" stroke="${P.gris || "#9e9e9e"}" stroke-width="5" stroke-linecap="round"/></g>`),
    },
    {
      html: `<h3>El collage</h3><p>Un <mark>collage</mark> es una obra hecha <b>pegando</b> trozos de papel, tela, revistas, hojas secas o botones sobre una cartulina.</p><p>El pintor <b>Henri Matisse</b>, cuando era mayor, recortaba formas de papel de colores y hacía collages enormes. ¡Pintaba con tijeras!</p>`,
      svg: svg("Un collage de formas libres recortadas en papeles de colores al estilo de Matisse", `<rect x="25" y="20" width="210" height="140" rx="6" fill="#fffde7" stroke="var(--line)" stroke-width="2"/><path d="M60 60 q 15 -30 30 0 q 20 -10 15 15 q 20 10 -5 20 q 5 25 -20 10 q -20 15 -20 -10 q -25 -5 -5 -20 q -15 -20 5 -15 Z" fill="${P.azul}"/><path d="M150 40 q 10 30 40 25 q -5 30 20 45 q -35 5 -40 30 q -15 -25 -45 -20 q 15 -25 0 -45 q 25 0 25 -35 Z" fill="${P.verde}"/><circle cx="200" cy="50" r="14" fill="${P.rojo}"/><rect x="45" y="120" width="40" height="25" fill="${P.naranja}" transform="rotate(-10 65 132)"/>`),
    },
    {
      html: `<h3>Componer: colocar las formas</h3><p><mark>Componer</mark> es decidir dónde va cada forma en el papel. Podemos ponerlas <b>en fila</b>, <b>repetidas</b> como una cenefa o <b>mezcladas</b>.</p><p>Si repetimos formas y colores siguiendo un orden (círculo, cuadrado, círculo, cuadrado…), hacemos una <b>serie</b>, como en los bordes de los platos o las alfombras.</p>`,
      svg: svg("Una cenefa con una serie repetida de círculo rojo, triángulo amarillo y cuadrado azul", `<rect x="10" y="60" width="240" height="60" rx="8" fill="var(--card)" stroke="var(--line)"/>${[0, 1, 2].map((k) => `<circle cx="${32 + k * 80}" cy="90" r="13" fill="${P.rojo}"/><path d="M${49 + k * 80} 103 l 13 -26 l 13 26 Z" fill="${P.amarillo}"/><rect x="${80 + k * 80}" y="79" width="22" height="22" fill="${P.azul}"/>`).join("")}${txt(130, 150, "círculo · triángulo · cuadrado…", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Juego: el monstruo de formas</h3><p>Recorta muchas formas de papeles de colores: círculos, triángulos, rectángulos y alguna forma libre.</p><p>Ahora, <mark>sin dibujar nada</mark>, colócalas sobre una cartulina para inventar un monstruo, un animal o un robot. Muévelas hasta que te guste y luego pégalas. ¡Ponle un nombre!</p>`,
      svg: svg("Un monstruo hecho con formas recortadas: cuerpo rectangular, ojos circulares y dientes triangulares", `<path d="M70 150 V 70 q 60 -60 120 0 V 150 Z" fill="${P.morado}"/><circle cx="105" cy="75" r="16" fill="var(--card)"/><circle cx="155" cy="75" r="11" fill="var(--card)"/><circle cx="108" cy="78" r="7" fill="${P.negro}"/><circle cx="155" cy="78" r="5" fill="${P.negro}"/><rect x="95" y="105" width="70" height="20" fill="${P.negro}"/>${[0, 1, 2, 3].map((i) => `<path d="M${97 + i * 17} 105 l 8 12 l 8 -12 Z" fill="var(--card)"/>`).join("")}<path d="M75 60 l -20 -25 l 30 10 Z M185 60 l 20 -25 l -30 10 Z" fill="${P.naranja}"/>`),
    },
  ],
  figura: {
    titulo: "De formas sencillas a dibujos",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Tres pasos: primero las formas de un gato con círculos y triángulos, luego el contorno y por último el gato coloreado">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[0, 1, 2].map((i) => { const x = 110 + i * 210; const fill = i === 2 ? P.naranja : "none"; const dash = i === 0 ? 'stroke-dasharray="5 4"' : ""; return `<g stroke="var(--ink)" stroke-width="2.5" ${dash}><ellipse cx="${x}" cy="160" rx="55" ry="45" fill="${fill}"/><circle cx="${x}" cy="90" r="35" fill="${fill}"/><path d="M${x - 30} 72 l 4 -38 l 22 22 Z M${x + 30} 72 l -4 -38 l -22 22 Z" fill="${fill}"/></g>${i > 0 ? `<circle cx="${x - 12}" cy="85" r="4" fill="${P.negro}"/><circle cx="${x + 12}" cy="85" r="4" fill="${P.negro}"/><path d="M${x - 6} 100 q 6 6 12 0" stroke="${P.negro}" stroke-width="2" fill="none"/>` : ""}${txt(x, 240, ["1. formas", "2. contorno", "3. color"][i], "var(--ink)", 16)}`; }).join("")}
    </svg>`,
  },
  video: { id: "xa7PoZRYRng", titulo: "Figurativo y abstracto: clases de artes para niños", canal: "CNTV Infantil", vistas: 648347, megusta: 0, busqueda: "formas en el arte para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibuja un pájaro con formas.", pasos: ["Un óvalo para el cuerpo y un círculo para la cabeza.", "Un triángulo pequeño para el pico y otro para la cola.", "Un óvalo más pequeño para el ala, y dos líneas para las patas."], resultado: "un pájaro hecho con formas sencillas." },
    { enunciado: "Haz un collage de otoño.", pasos: ["Recoge hojas secas de distintas formas.", "Colócalas sobre una cartulina formando un árbol o un erizo.", "Pégalas con cola blanca."], resultado: "un collage con formas libres de la naturaleza." },
    { enunciado: "Haz una cenefa para decorar el borde de un folio.", pasos: ["Elige dos formas: por ejemplo, corazón y estrella.", "Dibújalas alternadas: corazón, estrella, corazón…", "Colorea siempre igual cada forma."], resultado: "una serie que se repite." },
  ],
  errores: [
    "Mover las tijeras en vez del papel: se recorta mejor girando el papel.",
    "Poner demasiada cola: el papel se arruga. Basta con un poco en los bordes.",
    "Dibujar todo del mismo tamaño: las cosas cercanas se ven más grandes.",
    "Pegar antes de probar: primero coloca las formas, luego pega.",
  ],
  ejercicios: [
    { q: "Dibuja una casa con un cuadrado y un triángulo.", sol: "El cuadrado abajo y el triángulo encima como tejado." },
    { q: "Dibuja un muñeco de nieve con círculos.", sol: "Tres círculos de mayor a menor, uno encima de otro." },
    { q: "Dibuja tres nubes con formas libres.", sol: "Formas redondeadas e irregulares." },
    { q: "Recorta un círculo de papel siguiendo la línea.", sol: "Gira el papel mientras recortas." },
    { q: "Dibuja la silueta de tu mano.", sol: "Apoya la mano en el papel y repasa el borde con el lápiz." },
    { q: "Haz una serie: círculo, cuadrado, círculo, cuadrado…", sol: "Las formas alternadas en fila." },
    { q: "Dibuja una pelota grande y otra pequeña. ¿Cuál parece más cerca?", sol: "La grande." },
    { q: "Nombra tres cosas de la naturaleza con forma libre.", sol: "Por ejemplo, una nube, una hoja y una piedra." },
    { q: "Haz un collage con trozos de revista.", sol: "Respuesta libre: trozos recortados o rasgados pegados en una cartulina." },
    { q: "Dibuja un robot con rectángulos y círculos.", sol: "Cuerpo rectangular, ojos circulares y lo que quieras añadir." },
  ],
  quiz: [
    { q: "El borde de una cosa sin color es su…", o: ["silueta", "textura", "sombra azul"], a: 0, e: "La silueta." },
    { q: "Una nube es una forma…", o: ["geométrica", "libre", "cuadrada"], a: 1, e: "No tiene reglas." },
    { q: "Un muñeco de nieve se hace con…", o: ["círculos", "triángulos", "cuadrados"], a: 0, e: "Tres círculos." },
    { q: "El tejado de una casa suele ser un…", o: ["círculo", "triángulo", "óvalo"], a: 1, e: "Triángulo." },
    { q: "Un collage se hace…", o: ["pegando trozos", "solo con lápiz", "con plastilina"], a: 0, e: "Se pegan materiales." },
    { q: "Al recortar, giramos…", o: ["las tijeras", "el papel", "la mesa"], a: 1, e: "Giramos el papel." },
    { q: "Matisse hacía collages con…", o: ["papeles recortados", "arena", "fotos"], a: 0, e: "Pintaba con tijeras." },
    { q: "Algo dibujado pequeño parece estar…", o: ["cerca", "lejos", "arriba"], a: 1, e: "Lejos." },
    { q: "Repetir formas en orden es hacer una…", o: ["serie", "mancha", "silueta"], a: 0, e: "Una serie o cenefa." },
    { q: "¿Qué forma es geométrica?", o: ["una hoja", "un cuadrado", "un charco"], a: 1, e: "El cuadrado tiene bordes regulares." },
  ],
  examen: [
    { q: "Las formas libres abundan en…", o: ["la naturaleza", "las reglas", "los números"], a: 0, e: "Nubes, hojas, piedras." },
    { q: "Un coche se puede dibujar con…", o: ["un rectángulo y dos círculos", "tres triángulos", "una espiral"], a: 0, e: "Carrocería y ruedas." },
    { q: "Componer es…", o: ["decidir dónde va cada forma", "borrar", "mezclar colores"], a: 0, e: "Colocar las formas." },
    { q: "Las tijeras de clase deben ser…", o: ["de punta redonda", "muy afiladas", "de cocina"], a: 0, e: "Por seguridad." },
  ],
  feynman: ["Qué diferencia hay entre una forma geométrica y una libre", "Cómo dibujo algo empezando por formas sencillas", "Qué es un collage"],
  mapa: mapa("FORMAS Y FIGURAS", "var(--pri)", [
    ["Geométricas", "círculo · cuadrado · triángulo", "var(--pen)"],
    ["Libres", "nubes · hojas · charcos", "var(--leaf)"],
    ["Dibujar", "formas, contorno y color", "var(--sun)"],
    ["Collage", "recortar, componer y pegar", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Qué es la silueta?", "El borde de una cosa"],
    ["Forma de una nube", "Libre"],
    ["Forma de una pelota", "Círculo"],
    ["Muñeco de nieve", "Tres círculos"],
    ["¿Qué es un collage?", "Una obra hecha pegando trozos"],
    ["Pintor que pintaba con tijeras", "Henri Matisse"],
    ["Repetir formas en orden", "Una serie o cenefa"],
    ["Al recortar, ¿qué giro?", "El papel"],
  ],
  familias: [
    "Guardad revistas y papeles de colores para recortar y hacer collages.",
    "Jugad a adivinar objetos por su sombra o silueta con una linterna.",
    "Dibujad juntos animales empezando por círculos y triángulos.",
    "Supervisad el uso de tijeras y enseñad a pasarlas cerradas y por el mango.",
  ],
  profesores: PROF("Educación Plástica y Visual: la forma (geométrica y orgánica), la silueta, el tamaño, la composición y la técnica del collage; observación de la obra de Henri Matisse", ["Dibujo guiado de animales a partir de formas geométricas.", "Collage colectivo inspirado en los recortables de Matisse.", "Teatro de sombras con siluetas recortadas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
