// Educación Plástica 2º de Primaria: texturas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, flechaR, V, P, mancha, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const caja = (x, y, w, h, inner, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${inner}${etq(x + w / 2, y + h + 16, t)}`;
// Patrones dentro de una caja (x, y, w, h).
const puntos = (x, y, w, h, c) => { let o = ""; for (let i = 6; i <= w - 6; i += 11) for (let j = 6; j <= h - 6; j += 11) o += `<circle cx="${x + i}" cy="${y + j}" r="2.2" fill="${c}"/>`; return o; };
const rayas = (x, y, w, h, c) => { let o = ""; for (let i = 8; i < h; i += 8) o += `<path d="M${x + 6} ${y + i} H${x + w - 6}" stroke="${c}" stroke-width="2.5"/>`; return o; };
const cruces = (x, y, w, h, c) => { let o = ""; for (let i = 10; i < w - 4; i += 14) for (let j = 10; j < h - 4; j += 14) o += `<path d="M${x + i - 4} ${y + j - 4} l8 8 M${x + i + 4} ${y + j - 4} l-8 8" stroke="${c}" stroke-width="2"/>`; return o; };
const ondas = (x, y, w, h, c) => { let o = ""; for (let j = 10; j < h; j += 12) o += `<path d="M${x + 6} ${y + j} ${[...Array(Math.floor((w - 12) / 12))].map(() => "q3 -5 6 0 t6 0").join(" ")}" stroke="${c}" stroke-width="2" fill="none"/>`; return o; };
const hoja = (x, y, s = 1, c = P.verde) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -40 q30 20 0 70 q-30 -50 0 -70z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -36 V28 M0 -16 l-10 -8 M0 -16 l10 -8 M0 0 l-12 -8 M0 0 l12 -8 M0 14 l-9 -7 M0 14 l9 -7" stroke="var(--ink)" stroke-width="1.2" fill="none"/></g>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Texturas",
  minutos: 25,
  objetivos: ["Reconocer texturas con el tacto y con la vista: lisa, rugosa, suave, áspera", "Copiar texturas con la técnica del frotado (frottage)", "Inventar texturas con puntos, rayas y estampados"],
  claves: ["textura", "lisa", "rugosa", "suave", "áspera", "táctil", "visual", "frottage", "estampar"],
  pregunta: {
    texto: "Cierra los ojos y toca tu jersey, la mesa y la suela de tu zapato. ¿Se sienten igual?",
    respuesta: "No. Cada cosa tiene su <mark>textura</mark>: el jersey es <b>suave</b>, la mesa es <b>lisa</b> y la suela es <b>rugosa</b>. La textura es cómo es la superficie de algo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una textura?</h3><p>La <mark>textura</mark> es cómo es la superficie de las cosas, es decir, su «piel».</p><p>Algunas cosas son <b>lisas</b>, como un cristal. Otras son <b>rugosas</b>, con bultos, como la corteza de un árbol.</p><p>Hay cosas <b>suaves</b>, como un peluche, y cosas <b>ásperas</b>, como una lija. Toca diez objetos de clase y di qué textura tiene cada uno.</p>`,
      svg: svg("Cuatro texturas: lisa como un cristal, rugosa como una corteza, suave como un peluche y áspera como una lija", `${caja(14, 26, 50, 60, `<rect x="20" y="32" width="38" height="48" rx="4" fill="${P.celeste}" opacity=".6"/><path d="M26 40 l10 -6 M26 52 l18 -12" stroke="#fff" stroke-width="3"/>`, "lisa")}${caja(76, 26, 50, 60, `<rect x="82" y="32" width="38" height="48" fill="${P.marron}"/>${[0, 1, 2, 3].map((i) => `<path d="M${86 + i * 9} 34 q-3 22 2 44" stroke="#4e342e" stroke-width="2.5" fill="none"/>`).join("")}`, "rugosa")}${caja(138, 26, 50, 60, `<circle cx="163" cy="56" r="20" fill="${P.rosa}"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${163 + Math.cos(i * 0.785) * 18} ${56 + Math.sin(i * 0.785) * 18} l${Math.cos(i * 0.785) * 6} ${Math.sin(i * 0.785) * 6}" stroke="${P.rosa}" stroke-width="3"/>`).join("")}`, "suave")}${caja(200, 26, 50, 60, `<rect x="206" y="32" width="38" height="48" fill="#d8b47a"/>${puntos(204, 30, 42, 52, "#8d6e3f")}`, "áspera")}${etq(130, 150, "Cada cosa tiene su «piel»", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Texturas que se tocan</h3><p>Las texturas que notamos con los dedos se llaman <mark>táctiles</mark>.</p><p>Para descubrirlas, lo mejor es cerrar los ojos y tocar despacio. Las yemas de los dedos sienten muchísimo.</p><p>Notamos si algo está frío o caliente, duro o blando, liso o con bultos. Las personas ciegas leen con los dedos gracias a unos puntitos en relieve: el <b>braille</b>.</p>`,
      svg: svg("Una mano toca una superficie con bultos y puntos de braille", `<rect x="20" y="96" width="220" height="54" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${50 + i * 32}" cy="${114 + (i % 2) * 14}" r="4" fill="var(--ink)"/><circle cx="${60 + i * 32}" cy="114" r="4" fill="var(--ink)"/>`).join("")}<g transform="translate(130 70)"><path d="M-30 20 q-6 -30 6 -34 q8 -2 10 8 v-26 q0 -8 8 -8 q8 0 8 8 v20 q0 -8 8 -8 q8 0 8 8 v6 q0 -6 7 -6 q7 0 7 8 v22 q0 14 -14 18 h-36z" fill="${P.piel}" stroke="var(--ink)" stroke-width="2"/></g>${etq(130, 170, "Los dedos «ven» las texturas", "var(--pen)", 13)}`),
      video: V("pl4b"),
    },
    {
      html: `<h3>Texturas que se ven</h3><p>Otras texturas solo se <mark>ven</mark>. Se llaman visuales.</p><p>Si dibujas muchos puntitos, parece arena. Si dibujas rayas curvas, parece el pelo de un perro. Con escamas pequeñas, parece un pez.</p><p>El papel sigue siendo liso, pero el dibujo <b>engaña a los ojos</b>. ¡Parece que se puede tocar! Los ilustradores usan este truco en los cuentos.</p>`,
      svg: svg("Un pez con escamas dibujadas, una playa de puntitos y un erizo con rayas", `<g transform="translate(70 66)"><ellipse rx="42" ry="24" fill="${P.naranja}"/><path d="M38 0 l22 -16 v32z" fill="${P.naranja}"/>${[[-20, -6], [-8, -10], [4, -6], [16, -10], [-14, 6], [-2, 2], [10, 6], [22, 2]].map(([x, y]) => `<path d="M${x} ${y} q6 6 0 12" stroke="var(--ink)" stroke-width="1.5" fill="none"/>`).join("")}<circle cx="-28" cy="-6" r="3" fill="var(--ink)"/></g><rect x="20" y="120" width="220" height="40" rx="6" fill="${P.amarillo}" opacity=".5"/>${puntos(20, 118, 220, 44, "#a67c00")}<g transform="translate(192 66)"><ellipse rx="34" ry="22" fill="${P.marron}"/>${[...Array(12)].map((_, i) => `<path d="M${-28 + i * 5} ${-14 + Math.abs(i - 6) * 2} l${-2 + i * 0.4} -14" stroke="#4e342e" stroke-width="2.5"/>`).join("")}<circle cx="30" cy="2" r="3" fill="var(--ink)"/></g>`),
    },
    {
      html: `<h3>El frotado</h3><p>Hay una técnica mágica para <mark>copiar texturas</mark>: el frotado. Los artistas la llaman <b>frottage</b>.</p><p>Pones un papel fino encima de algo con relieve: una hoja de árbol, una moneda o una rejilla.</p><p>Después frotas con una cera <b>tumbada</b>, sin apretar mucho. ¡Aparece la forma como por arte de magia! Prueba con hojas de varias formas.</p>`,
      svg: svg("Técnica del frotado: un papel sobre una hoja y una cera tumbada que hace aparecer la hoja", `${hoja(60, 92, 1.2)}${flechaR(96, 92, 136, 92, "var(--muted)")}<rect x="146" y="30" width="96" height="124" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><g opacity=".9">${[...Array(14)].map((_, i) => `<path d="M156 ${44 + i * 7} H232" stroke="${P.verde}" stroke-width="5" opacity=".35"/>`).join("")}${hoja(194, 92, 1.2, "none")}</g><g transform="translate(224 140) rotate(-20)"><rect x="-22" y="-7" width="44" height="14" rx="4" fill="${P.verde}" stroke="var(--ink)"/></g>${etq(60, 160, "hoja")}${etq(194, 170, "¡aparece!")}`),
    },
    {
      html: `<h3>Estampar texturas</h3><p>También podemos <mark>estampar</mark>: mojar un objeto en pintura y presionarlo sobre el papel, como un sello.</p><p>Una esponja deja puntitos. Un tenedor deja rayas. Medio limón deja una estrella. Un trozo de cartón ondulado deja líneas.</p><p>Con estas texturas puedes hacer el pelo de un león, la hierba o un cielo. ¡Cada objeto tiene su huella!</p>`,
      svg: svg("Objetos para estampar y su huella: esponja, tenedor y medio limón", `<rect x="22" y="30" width="48" height="34" rx="6" fill="${P.amarillo}" stroke="var(--ink)"/>${puntos(22, 28, 48, 38, "#c49000")}<path d="M120 26 v30 M128 26 v30 M136 26 v30 M144 26 v30 M120 56 q12 14 24 0 v34" stroke="#9aa5c0" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="210" cy="50" r="22" fill="${P.amarillo}" stroke="var(--ink)"/>${[...Array(8)].map((_, i) => `<path d="M210 50 l${(Math.cos(i * 0.785) * 18).toFixed(1)} ${(Math.sin(i * 0.785) * 18).toFixed(1)}" stroke="#fff" stroke-width="2"/>`).join("")}${puntos(20, 108, 52, 40, P.azul)}${rayas(106, 104, 54, 46, P.rojo)}<g transform="translate(210 128)">${[...Array(8)].map((_, i) => `<path d="M0 0 L${(Math.cos(i * 0.785) * 22).toFixed(1)} ${(Math.sin(i * 0.785) * 22).toFixed(1)}" stroke="${P.verde}" stroke-width="5"/>`).join("")}</g>${flechaR(46, 72, 46, 98, "var(--muted)")}${flechaR(134, 92, 134, 102, "var(--muted)")}${flechaR(210, 78, 210, 98, "var(--muted)")}`),
    },
    {
      html: `<h3>Inventar texturas</h3><p>Con un rotulador puedes <mark>inventar texturas</mark> sin parar.</p><p>Prueba con puntos, rayas, cruces, ondas, círculos o zigzags. Si los dibujos están muy juntos, la zona se ve oscura. Si están separados, se ve clara.</p><p>Divide un folio en cuadrados y rellena cada uno con una textura diferente. ¡Parecerá un muestrario de telas!</p>`,
      svg: svg("Muestrario de texturas inventadas: puntos, rayas, cruces y ondas", `${caja(16, 20, 108, 58, puntos(16, 20, 108, 58, P.rojo), "puntos")}${caja(136, 20, 108, 58, rayas(136, 20, 108, 58, P.azul), "rayas")}${caja(16, 100, 108, 52, cruces(16, 100, 108, 52, P.verde), "cruces")}${caja(136, 100, 108, 52, ondas(136, 100, 108, 52, P.morado), "ondas")}`),
    },
    {
      html: `<h3>Collage de texturas</h3><p>Podemos pegar <mark>materiales de verdad</mark> en un dibujo.</p><p>Un trozo de lana para el pelo. Papel de lija para la arena. Algodón para las nubes. Papel de aluminio para un pez brillante.</p><p>Así el dibujo se puede <b>tocar</b>. Queda precioso y es muy divertido de hacer. Guarda en una caja los restos de materiales que encuentres en casa.</p>`,
      svg: svg("Un dibujo con materiales pegados: nubes de algodón, playa de lija y un pez de papel de aluminio", `<rect x="14" y="14" width="232" height="152" rx="8" fill="${P.celeste}" opacity=".45"/>${[[60, 42], [180, 36]].map(([x, y]) => `<g fill="#fff" stroke="var(--line)" stroke-width="1.5"><circle cx="${x}" cy="${y}" r="13"/><circle cx="${x + 15}" cy="${y - 4}" r="15"/><circle cx="${x + 30}" cy="${y}" r="12"/></g>`).join("")}<rect x="14" y="128" width="232" height="38" fill="#d8b47a"/>${puntos(14, 126, 232, 42, "#8d6e3f")}<g transform="translate(120 96)"><ellipse rx="28" ry="15" fill="#cfd8dc" stroke="#78909c" stroke-width="2"/><path d="M26 0 l16 -11 v22z" fill="#cfd8dc" stroke="#78909c" stroke-width="2"/><path d="M-12 -8 l6 6 M0 -10 l6 6 M-6 4 l6 6" stroke="#fff" stroke-width="2"/><circle cx="-16" cy="-3" r="2.5" fill="var(--ink)"/></g>${etq(75, 70, "algodón", "var(--ink)", 11)}${etq(196, 150, "lija", "var(--ink)", 11)}${etq(120, 124, "aluminio", "var(--ink)", 11)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las texturas hacen que las cosas sean <mark>más bonitas y más útiles</mark>.</p><p>Los suelos rugosos no resbalan. Las toallas suaves secan y abrazan. Los libros para bebés tienen texturas para que aprendan tocando.</p><p>En las aceras hay baldosas con bultos que avisan a las personas ciegas de un paso de peatones. ¡Las texturas también ayudan!</p>`,
      svg: svg("Baldosas con bultos en la acera junto a un paso de peatones y una persona con bastón", `<rect x="14" y="110" width="232" height="56" fill="var(--line)" opacity=".5"/><rect x="20" y="116" width="80" height="44" fill="${P.amarillo}" opacity=".8"/>${puntos(18, 112, 84, 50, "#a67c00")}${[0, 1, 2, 3].map((i) => `<rect x="${130 + i * 28}" y="116" width="16" height="44" fill="#fff" stroke="var(--line)"/>`).join("")}${nino(60, 108, { c: P.azul, s: 1.2 })}<path d="M74 70 L96 108" stroke="${P.blanco}" stroke-width="3"/><path d="M74 70 L96 108" stroke="var(--ink)" stroke-width="1" opacity=".5"/>${etq(170, 40, "Los bultos avisan", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Jugamos a la bolsa del tacto</h3><p>Metemos varios objetos en una <mark>bolsa de tela</mark>. Por ejemplo, una piedra, un peluche, una esponja y una cuchara.</p><p>Un niño mete la mano sin mirar. Toca un objeto y describe su textura: «Es rugoso, duro y frío».</p><p>Los demás intentan adivinar qué es. Si aciertan, sacamos el objeto. ¡Con los ojos cerrados se aprende mucho!</p>`,
      svg: svg("Una bolsa de tela misteriosa y un niño que dice: es rugoso, duro y frío", `<path d="M60 70 q-30 0 -30 50 q0 40 60 40 q60 0 60 -40 q0 -50 -30 -50z" fill="${P.morado}" opacity=".8" stroke="var(--ink)" stroke-width="2"/><path d="M60 70 q30 -14 60 0" stroke="var(--ink)" stroke-width="3" fill="none"/>${rot(90, 122, "?", { size: 40, color: "#fff", w: 800 })}${nino(200, 160, { c: P.verde, s: 1.3 })}<rect x="150" y="12" width="100" height="44" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${etq(200, 30, "Es rugoso,", "var(--ink)", 12)}${etq(200, 46, "duro y frío", "var(--ink)", 12)}`),
    },
  ],
  figura: {
    titulo: "Texturas: táctiles y visuales",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Texturas: lisa, rugosa, suave y áspera, y técnicas para hacerlas: frotado, estampado y dibujo"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 34, "Texturas", { size: 22, color: "var(--pen)" })}${[["lisa", P.celeste], ["rugosa", P.marron], ["suave", P.rosa], ["áspera", "#d8b47a"]].map(([t, c], i) => `<rect x="${40 + i * 146}" y="56" width="120" height="90" rx="10" fill="${c}" opacity=".85"/>${i === 1 ? rayas(186, 56, 120, 90, "#4e342e") : i === 3 ? puntos(478, 56, 120, 90, "#8d6e3f") : ""}${rot(100 + i * 146, 172, t, { size: 18 })}`).join("")}${rot(320, 214, "Cómo se hacen", { size: 18, color: "var(--pen)" })}${rot(140, 262, "frotado con cera", { size: 16 })}${rot(320, 262, "estampar", { size: 16 })}${rot(500, 262, "dibujar puntos y rayas", { size: 16 })}</svg>`,
  },
  video: V("pl4v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Copia la textura de una moneda.",
      pasos: ["Pon la moneda debajo de un papel fino.", "Tumba una cera y frota sin apretar.", "Mira cómo aparece el dibujo de la moneda."],
      resultado: "Has hecho un frotado (frottage)." },
    { enunciado: "Dibuja un león con melena que parezca de pelo.",
      pasos: ["Dibuja la cara del león.", "Alrededor, haz muchas rayas cortas y curvas.", "Usa amarillo y naranja juntos."],
      resultado: "Una melena con textura visual de pelo." },
    { enunciado: "¿Qué textura tiene la corteza de un árbol?",
      pasos: ["Tócala con la yema de los dedos.", "Tiene bultos, grietas y es dura.", "No es lisa."],
      resultado: "Es rugosa." },
  ],
  errores: [
    "Frotar con la punta de la cera: hay que usarla tumbada.",
    "Apretar demasiado al frotar: el papel se rompe y no sale la forma.",
    "Confundir suave con lisa: un peluche es suave pero no liso.",
    "Usar demasiada pintura al estampar: la huella sale emborronada.",
  ],
  ejercicios: [
    { q: "¿Qué es una textura?", sol: "Cómo es la superficie de algo: lisa, rugosa, suave, áspera…" },
    { q: "Di algo que sea liso.", sol: "Por ejemplo: un cristal, un espejo o una mesa." },
    { q: "Di algo que sea rugoso.", sol: "Por ejemplo: la corteza de un árbol o una piedra." },
    { q: "Di algo suave.", sol: "Por ejemplo: un peluche, una toalla o el pelo de un gato." },
    { q: "¿Qué es una textura táctil?", sol: "La que notamos al tocar." },
    { q: "¿Qué es una textura visual?", sol: "La que se ve en un dibujo aunque el papel sea liso." },
    { q: "¿Cómo se llama la técnica de frotar una cera sobre un papel?", sol: "Frotado o frottage." },
    { q: "¿Qué huella deja una esponja al estampar?", sol: "Muchos puntitos." },
    { q: "Haz un muestrario de cuatro texturas inventadas.", sol: "Respuesta libre: por ejemplo, puntos, rayas, cruces y ondas." },
    { q: "Haz un frotado con tres hojas de árboles distintos.", sol: "Respuesta libre: se ven los nervios de cada hoja." },
  ],
  quiz: [
    { q: "La textura es…", o: ["el color de algo", "cómo es su superficie", "su tamaño"], a: 1, e: "La «piel» de las cosas." },
    { q: "Un cristal es…", o: ["liso", "rugoso", "áspero"], a: 0, e: "Liso." },
    { q: "La corteza de un árbol es…", o: ["lisa", "rugosa", "blanda"], a: 1, e: "Rugosa." },
    { q: "Un peluche es…", o: ["suave", "áspero", "duro"], a: 0, e: "Suave." },
    { q: "Una lija es…", o: ["lisa", "áspera", "suave"], a: 1, e: "Áspera." },
    { q: "Las texturas que se tocan son…", o: ["táctiles", "visuales", "sonoras"], a: 0, e: "Táctiles." },
    { q: "Para el frotado la cera se usa…", o: ["de punta", "tumbada", "mojada"], a: 1, e: "Tumbada." },
    { q: "Estampar es…", o: ["mojar un objeto en pintura y presionarlo", "recortar papel", "borrar"], a: 0, e: "Como un sello." },
    { q: "Una esponja estampada deja…", o: ["puntitos", "una línea recta", "un círculo perfecto"], a: 0, e: "Puntitos." },
    { q: "El braille se lee…", o: ["con los oídos", "con los dedos", "con la nariz"], a: 1, e: "Con puntos en relieve." },
  ],
  examen: [
    { q: "Un dibujo de puntitos que parece arena es una textura…", o: ["visual", "táctil", "musical"], a: 0, e: "Se ve, no se toca." },
    { q: "¿Qué puedes copiar con el frotado?", o: ["una hoja de árbol", "un sonido", "un olor"], a: 0, e: "Cualquier cosa con relieve." },
    { q: "Para hacer nubes que se puedan tocar usarías…", o: ["algodón", "piedras", "agua"], a: 0, e: "El algodón es suave." },
    { q: "Los suelos rugosos sirven para…", o: ["no resbalar", "brillar", "sonar"], a: 0, e: "Agarran más." },
  ],
  feynman: ["Qué es una textura y qué tipos hay", "Cómo se hace un frotado", "Cómo inventar texturas visuales"],
  mapa: mapa("TEXTURAS", "var(--pri)", [
    ["Tipos", "lisa, rugosa, suave, áspera", "#1e88e5"],
    ["Táctiles", "se tocan", "#e53935"],
    ["Visuales", "se ven: puntos, rayas", "#43a047"],
    ["Técnicas", "frotado, estampado, collage", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Textura", "Cómo es la superficie de algo"],
    ["Lisa", "Sin bultos, como un cristal"],
    ["Rugosa", "Con bultos y grietas, como una corteza"],
    ["Suave / áspera", "Peluche / lija"],
    ["Textura táctil", "La que notamos al tocar"],
    ["Textura visual", "La que vemos en un dibujo"],
    ["Frotado (frottage)", "Frotar una cera tumbada sobre un papel encima de algo con relieve"],
    ["Estampar", "Mojar un objeto en pintura y presionarlo como un sello"],
  ],
  familias: [
    "Jugad a la bolsa del tacto con objetos de casa.",
    "Haced frotados de monedas, llaves u hojas del parque.",
    "Estampad con esponjas, tenedores o verduras cortadas.",
    "Guardad una caja de materiales (lana, algodón, telas) para hacer collages.",
  ],
  profesores: PROF("Educación Plástica y Visual: la textura como elemento del lenguaje visual; texturas táctiles y visuales; técnicas de frottage, estampación y collage; exploración sensorial de materiales", ["Bolsa del tacto con descripción oral.", "Frottage de hojas y objetos del aula.", "Muestrario de texturas gráficas en cuadrícula."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
