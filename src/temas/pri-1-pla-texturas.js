// Educación Plástica 1º de Primaria: texturas.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", negro: "#212121", marron: "#8d6e63", arena: "#e6c88f", gris: "#9e9e9e" };
// Muestra cuadrada de textura.
const muestra = (x, y, s, dentro, fondo = "var(--card)") => `<g><clipPath id="m${x}${y}"><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="8"/></clipPath><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="8" fill="${fondo}"/><g clip-path="url(#m${x}${y})">${dentro}</g><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="8" fill="none" stroke="var(--ink)" stroke-width="2"/></g>`;
const rayas = (x, y, s, c) => [...Array(12)].map((_, i) => `<path d="M${x + i * 8} ${y} l ${-s} ${s}" stroke="${c}" stroke-width="2.5"/>`).join("") + [...Array(12)].map((_, i) => `<path d="M${x + s + i * 8} ${y} l ${-s} ${s}" stroke="${c}" stroke-width="2.5"/>`).join("");
const granos = (x, y, s, c, n = 70) => [...Array(n)].map((_, i) => `<circle cx="${(x + ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1 * s).toFixed(1)}" cy="${(y + ((Math.sin(i * 78.233) * 12345.678) % 1 + 1) % 1 * s).toFixed(1)}" r="${1.5 + (i % 3)}" fill="${c}"/>`).join("");
const ondas = (x, y, s, c) => [...Array(6)].map((_, i) => `<path d="M${x} ${y + 8 + i * 12} q ${s / 4} -8 ${s / 2} 0 t ${s / 2} 0" stroke="${c}" stroke-width="2.5" fill="none"/>`).join("");

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Texturas",
  minutos: 25,
  objetivos: ["Descubrir las texturas con el tacto y con la vista", "Distinguir texturas suaves, ásperas, lisas y rugosas", "Crear texturas con distintos materiales y técnicas"],
  claves: ["textura", "suave", "áspero", "liso", "rugoso", "estampar", "frotar"],
  pregunta: {
    texto: "Cierra los ojos y toca tu jersey, la mesa y la suela de tu zapato. ¿Se sienten igual?",
    respuesta: "No: cada cosa tiene una <mark>textura</mark> distinta. El jersey es suave, la mesa es lisa y la suela es rugosa.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la textura?</h3><p>La <mark>textura</mark> es cómo es la superficie de las cosas: lo que notamos al <b>tocarlas</b> con los dedos.</p><p>Algunas cosas son suaves como un peluche. Otras son ásperas como una lija. Nuestros dedos son grandes exploradores de texturas.</p>`,
      svg: svg("Una mano tocando un peluche suave y una lija áspera", `${muestra(25, 40, 90, `<circle cx="70" cy="85" r="60" fill="#f8bbd0"/>${[...Array(40)].map((_, i) => `<path d="M${30 + (i * 23) % 85} ${45 + (i * 31) % 85} q 3 -6 6 0" stroke="#ec407a" stroke-width="1.5" fill="none"/>`).join("")}`)}${muestra(145, 40, 90, granos(145, 40, 90, P.marron, 120), P.arena)}${txt(70, 155, "suave", "var(--ink)", 14)}${txt(190, 155, "áspero", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Liso y rugoso</h3><p>Una superficie <mark>lisa</mark> no tiene bultos: el dedo resbala, como en un cristal o un espejo.</p><p>Una superficie <mark>rugosa</mark> tiene arrugas, bultos o agujeros: como la corteza de un árbol, una piedra o una nuez.</p>`,
      svg: svg("Un cristal liso y la corteza rugosa de un árbol", `${muestra(25, 35, 90, `<path d="M40 50 l 25 0 M40 60 l 15 0" stroke="var(--card)" stroke-width="4"/>`, "#b3e5fc")}${muestra(145, 35, 90, [...Array(7)].map((_, i) => `<path d="M${150 + i * 13} 35 q 8 25 -2 45 q -6 25 4 45" stroke="#4e342e" stroke-width="4" fill="none"/>`).join(""), P.marron)}${txt(70, 152, "liso", "var(--ink)", 14)}${txt(190, 152, "rugoso", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Duro y blando, frío y caliente</h3><p>Al tocar también notamos si algo es <mark>duro</mark> como una piedra o <mark>blando</mark> como un cojín.</p><p>Y si está <b>frío</b> como el metal o el hielo, o <b>templado</b> como la lana. ¡Las texturas nos dan mucha información sin mirar!</p>`,
      svg: svg("Una piedra dura y un cojín blando", `<path d="M30 120 q -5 -40 30 -50 q 40 -10 55 20 q 15 35 -20 45 q -50 10 -65 -15 Z" fill="${P.gris}"/><rect x="150" y="70" width="90" height="60" rx="25" fill="${P.morado}" opacity=".75"/><path d="M195 70 q -5 30 0 60" stroke="var(--card)" stroke-width="2" opacity=".6"/>${txt(70, 160, "duro", "var(--ink)", 14)}${txt(195, 160, "blando", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Texturas que se ven</h3><p>Algunas texturas se pueden <mark>ver aunque no se toquen</mark>: en un dibujo o una foto, las rayas de un tigre o las escamas de un pez parecen ásperas o suaves.</p><p>Son <b>texturas visuales</b>. Las dibujamos con puntos, rayas, círculos y ondas.</p>`,
      svg: svg("Cuatro texturas dibujadas: rayas, puntos, ondas y escamas", `${muestra(20, 25, 50, rayas(20, 25, 50, P.naranja))}${muestra(80, 25, 50, granos(80, 25, 50, P.azul, 30))}${muestra(140, 25, 50, ondas(140, 25, 50, P.verde))}${muestra(200, 25, 50, [...Array(4)].map((_, j) => [...Array(4)].map((__, i) => `<path d="M${200 + i * 14 + (j % 2) * 7} ${36 + j * 11} a 7 7 0 0 1 14 0" stroke="${P.morado}" stroke-width="2" fill="none"/>`).join("")).join(""))}${txt(130, 110, "texturas para mirar", "var(--ink)", 14)}${txt(130, 140, "rayas · puntos · ondas · escamas", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Frotar: el frottage</h3><p>Pon un papel fino encima de una moneda, una hoja de árbol o una rejilla. <mark>Frota encima con una cera</mark> tumbada.</p><p>¡Magia! Aparece en el papel la textura de lo que hay debajo. Esta técnica se llama <b>frottage</b>, que en francés quiere decir «frotar».</p>`,
      svg: svg("Una cera frotando un papel encima de una hoja de árbol: aparece la forma de la hoja", `<rect x="30" y="30" width="200" height="120" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M70 120 q 10 -70 90 -75 q -5 75 -90 75 Z" fill="${P.verde}" opacity=".35"/><path d="M70 120 L 155 50 M95 100 l 5 -20 M110 88 l 10 -20 M125 75 l 15 -15 M95 100 l 20 0 M110 88 l 22 -2" stroke="${P.verde}" stroke-width="2.5"/><rect x="165" y="95" width="60" height="20" rx="4" fill="${P.rojo}" transform="rotate(-25 195 105)"/>`),
      video: { id: "yeaBWcAA-WM", titulo: "¿Qué son las texturas visuales? Técnica frottage", canal: "Gisela Duarte", vistas: 110782, megusta: 0 },
    },
    {
      html: `<h3>Estampar</h3><p><mark>Estampar</mark> es mojar un objeto en pintura y apretarlo sobre el papel, como un sello.</p><p>Podemos estampar con medio limón, una esponja, un tapón, una hoja o nuestras propias <b>huellas de los dedos</b>. Cada objeto deja una textura diferente.</p>`,
      svg: svg("Estampaciones con medio limón, un tapón y huellas de dedos", `<g transform="translate(60 80)"><circle r="30" fill="${P.amarillo}"/>${[...Array(8)].map((_, i) => `<path d="M0 0 L ${(Math.cos(i * Math.PI / 4) * 26).toFixed(1)} ${(Math.sin(i * Math.PI / 4) * 26).toFixed(1)}" stroke="var(--card)" stroke-width="2.5"/>`).join("")}</g>${[0, 1, 2].map((i) => `<circle cx="${130 + i * 25}" cy="60" r="10" fill="none" stroke="${P.rojo}" stroke-width="4"/>`).join("")}${[0, 1, 2, 3].map((i) => `<ellipse cx="${125 + i * 28}" cy="115" rx="10" ry="14" fill="${P.azul}" opacity=".75"/><path d="M${118 + i * 28} 110 q 7 -8 14 0 M${118 + i * 28} 118 q 7 -8 14 0" stroke="var(--card)" stroke-width="1.2" fill="none"/>`).join("")}${txt(130, 160, "limón · tapón · dedos", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Collage de texturas</h3><p>Podemos pegar <mark>materiales de verdad</mark> sobre una cartulina: algodón, papel de lija, arena, lana, papel de aluminio o macarrones.</p><p>Así nuestro dibujo se puede <b>tocar</b>. Una oveja con algodón, un camino con arena, un río con papel de aluminio… ¡y con los ojos cerrados también se disfruta!</p>`,
      svg: svg("Una oveja hecha con algodón sobre un prado de papel", `<rect x="10" y="125" width="240" height="40" fill="${P.verde}" opacity=".6"/>${[[100, 85], [125, 75], [150, 85], [112, 100], [138, 100], [90, 100], [160, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="17" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>`).join("")}<ellipse cx="72" cy="90" rx="14" ry="11" fill="${P.negro}"/><path d="M105 115 v 22 M150 115 v 22" stroke="${P.negro}" stroke-width="5"/><circle cx="68" cy="88" r="2" fill="var(--card)"/>`),
    },
    {
      html: `<h3>¿Para qué sirven las texturas?</h3><p>Las texturas hacen que los dibujos parezcan más <mark>reales</mark>: el pelo de un perro, las escamas de un pez o los ladrillos de una pared.</p><p>También ayudan a las personas <b>ciegas</b>: tocan libros con relieve y letras de puntitos (el braille) para leer y conocer imágenes.</p>`,
      svg: svg("Una pared de ladrillos y unas letras en braille con puntos en relieve", `${[...Array(5)].map((_, j) => [...Array(4)].map((__, i) => `<rect x="${20 + i * 26 + (j % 2) * 13}" y="${35 + j * 20}" width="24" height="18" fill="${P.rojo}" opacity=".75"/>`).join("")).join("")}<rect x="150" y="45" width="90" height="80" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[[0, 0], [0, 1], [1, 0], [0, 2], [2, 0], [3, 1], [3, 2], [2, 2]].map(([a, b]) => `<circle cx="${168 + a * 17}" cy="${65 + b * 17}" r="5" fill="${P.negro}"/>`).join("")}${txt(70, 155, "ladrillos", "var(--muted)", 12)}${txt(195, 150, "braille", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Juego: la caja misteriosa</h3><p>Mete en una caja o bolsa varios objetos: una esponja, una piedra, un trozo de tela y una cuchara.</p><p>Sin mirar, mete la mano y <mark>adivina qué es</mark> solo tocando. Di cómo es su textura: «es suave, blanda y caliente… ¡es un calcetín!».</p>`,
      svg: svg("Una caja con un signo de interrogación y una mano entrando por un agujero", `<rect x="50" y="55" width="160" height="100" rx="8" fill="${P.naranja}" opacity=".8" stroke="var(--ink)" stroke-width="2"/><ellipse cx="130" cy="58" rx="40" ry="10" fill="var(--ink)" opacity=".85"/><text x="130" y="125" text-anchor="middle" font-size="44" font-weight="800" fill="var(--card)">?</text><path d="M115 30 q 15 -15 30 0 v 25 h -30 Z" fill="#ffcc80" stroke="var(--ink)" stroke-width="1.5"/>`),
    },
  ],
  figura: {
    titulo: "Muestrario de texturas",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Seis muestras de texturas: suave, áspera, lisa, rugosa, con rayas y con ondas">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${muestra(30, 40, 80, `<circle cx="70" cy="80" r="60" fill="#f8bbd0"/>`)}${muestra(130, 40, 80, granos(130, 40, 80, P.marron, 90), P.arena)}${muestra(230, 40, 80, "", "#b3e5fc")}${muestra(330, 40, 80, [...Array(6)].map((_, i) => `<path d="M${335 + i * 13} 40 q 8 25 -2 40 q -6 20 4 40" stroke="#4e342e" stroke-width="4" fill="none"/>`).join(""), P.marron)}${muestra(430, 40, 80, rayas(430, 40, 80, P.naranja))}${muestra(530, 40, 80, ondas(530, 40, 80, P.azul))}
      ${["suave", "áspera", "lisa", "rugosa", "rayas", "ondas"].map((t, i) => txt(70 + i * 100, 160, t, "var(--ink)", 16)).join("")}
      ${txt(320, 215, "Se tocan: suave, áspera, lisa, rugosa · Se ven: rayas, ondas", "var(--muted)", 14)}
    </svg>`,
  },
  video: { id: "fl1TKE1UMu4", titulo: "Texturas táctiles y texturas visuales", canal: "Juan Marcel Francia", vistas: 152994, megusta: 0, busqueda: "texturas para niños plástica" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz un frottage de una hoja de árbol.", pasos: ["Coloca la hoja con los nervios hacia arriba.", "Pon encima un folio fino.", "Frota con una cera tumbada, sin apretar mucho, hasta que aparezca la hoja."], resultado: "la forma y los nervios de la hoja en el papel." },
    { enunciado: "Estampa una oruga con tapones.", pasos: ["Moja un tapón en témpera verde.", "Apriétalo en el papel muchas veces, en fila y tocándose.", "Pinta la cabeza y las antenas con un rotulador."], resultado: "una oruga hecha con círculos estampados." },
    { enunciado: "Clasifica: algodón, lija, cristal, corteza.", pasos: ["Toca cada material con los ojos cerrados.", "Algodón: suave. Lija: áspera.", "Cristal: liso. Corteza: rugosa."], resultado: "cada material con su textura." },
  ],
  errores: [
    "Frotar con la punta de la cera: se nota más la textura con la cera tumbada.",
    "Mojar demasiado el objeto al estampar: la mancha tapa la textura.",
    "Usar un papel muy grueso para el frottage: no se nota lo que hay debajo.",
    "Pegar materiales pesados con poca cola: se caen al secarse.",
  ],
  ejercicios: [
    { q: "Toca tu pelo, tu mesa y tu zapato. ¿Cómo es cada uno?", sol: "Por ejemplo: el pelo suave, la mesa lisa y la suela rugosa." },
    { q: "Nombra algo suave.", sol: "Por ejemplo, un peluche, una manta o un gato." },
    { q: "Nombra algo áspero.", sol: "Por ejemplo, una lija, una piedra o un estropajo." },
    { q: "Haz un frottage de una moneda.", sol: "Pon la moneda bajo el papel y frota con lápiz o cera." },
    { q: "Dibuja un pez y rellénalo de escamas.", sol: "Escamas dibujadas con medios círculos." },
    { q: "Estampa tus huellas y conviértelas en animalitos.", sol: "Huellas con patitas, ojos y antenas dibujadas." },
    { q: "Dibuja un tigre con textura de rayas.", sol: "Rayas negras sobre fondo naranja." },
    { q: "Haz una oveja pegando algodón.", sol: "Bolitas de algodón pegadas sobre el dibujo de la oveja." },
    { q: "¿Qué es más rugoso: un espejo o una nuez?", sol: "La nuez." },
    { q: "Busca en casa tres texturas distintas y descríbelas.", sol: "Respuesta libre: una toalla suave, una baldosa lisa, una alfombra rugosa…" },
  ],
  quiz: [
    { q: "La textura es…", o: ["cómo es la superficie", "el color", "el tamaño"], a: 0, e: "Lo que notamos al tocar." },
    { q: "Un peluche es…", o: ["áspero", "suave", "rugoso"], a: 1, e: "Suave." },
    { q: "Una lija es…", o: ["áspera", "lisa", "blanda"], a: 0, e: "Áspera." },
    { q: "Un espejo es…", o: ["rugoso", "liso", "peludo"], a: 1, e: "El dedo resbala." },
    { q: "La corteza de un árbol es…", o: ["lisa", "rugosa", "líquida"], a: 1, e: "Tiene arrugas y bultos." },
    { q: "Frotar con cera sobre un papel con algo debajo se llama…", o: ["frottage", "collage", "modelado"], a: 0, e: "Frottage." },
    { q: "Mojar un objeto en pintura y apretarlo es…", o: ["estampar", "recortar", "borrar"], a: 0, e: "Como un sello." },
    { q: "Las rayas de un tigre dibujado son una textura…", o: ["visual", "de verdad", "invisible"], a: 0, e: "Se ve, pero no se toca." },
    { q: "Para una oveja que se pueda tocar uso…", o: ["algodón", "agua", "un lápiz"], a: 0, e: "El algodón es suave." },
    { q: "El braille son…", o: ["puntos en relieve para leer", "colores", "rayas"], a: 0, e: "Se leen con los dedos." },
  ],
  examen: [
    { q: "¿Qué es suave?", o: ["una piedra", "una manta", "una lija"], a: 1, e: "La manta." },
    { q: "Una nuez es…", o: ["lisa", "rugosa", "blanda"], a: 1, e: "Tiene arrugas." },
    { q: "Para el frottage froto con la cera…", o: ["tumbada", "de punta", "mojada"], a: 0, e: "Tumbada." },
    { q: "Con las huellas de los dedos puedo…", o: ["estampar", "frotar", "recortar"], a: 0, e: "Estampar." },
  ],
  feynman: ["Qué es una textura", "Qué diferencia hay entre una textura que se toca y una que se ve", "Cómo se hace un frottage"],
  mapa: mapa("TEXTURAS", "var(--pri)", [
    ["Al tacto", "suave · áspero · liso · rugoso", "var(--red)"],
    ["A la vista", "rayas · puntos · ondas", "var(--pen)"],
    ["Técnicas", "frotar · estampar", "var(--sun)"],
    ["Collage", "algodón · arena · lana", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Qué es la textura?", "Cómo es la superficie al tocarla"],
    ["Lo contrario de áspero", "Suave"],
    ["Lo contrario de rugoso", "Liso"],
    ["¿Qué es el frottage?", "Frotar con cera sobre un papel con algo debajo"],
    ["¿Qué es estampar?", "Mojar algo en pintura y apretarlo como un sello"],
    ["Textura que solo se ve", "Textura visual"],
    ["Material suave para una oveja", "Algodón"],
    ["Escritura de puntos en relieve", "El braille"],
  ],
  familias: [
    "Haced una caja misteriosa con objetos de casa y jugad a adivinar con el tacto.",
    "En el parque, haced frottages de cortezas, hojas y tapas de alcantarilla con ceras.",
    "Estampad con verduras (patata cortada, medio limón, pimiento) en la cocina.",
    "Guardad materiales de reciclaje (tapones, lana, tela) para collages de texturas.",
  ],
  profesores: PROF("Educación Plástica y Visual: la textura táctil y visual; experimentación con técnicas (frottage, estampación, collage de materiales) y vocabulario sensorial", ["Caja de los sentidos con materiales para tocar sin ver.", "Salida al patio para hacer frottages de distintas superficies.", "Mural táctil colectivo para tocar con los ojos cerrados."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
