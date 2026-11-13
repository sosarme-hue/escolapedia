// Educación Plástica 2º de Primaria: modelado con plastilina y arcilla. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, flechaR, sol, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const ARC = "#c8794a", ARC2 = "#a85d33";
const bola = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.25}" fill="#fff" opacity=".45"/>`;
const churro = (x, y, w, c, h = 12) => `<rect x="${x}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const placa = (x, y, w, h, c) => `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>`;
const caracol = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-34" y="-8" width="62" height="16" rx="8" fill="${P.verde}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="-2" cy="-26" r="22" fill="${P.naranja}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="-2" cy="-26" r="13" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="-2" cy="-26" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M-30 -6 l-6 -16 M-26 -6 l2 -16" stroke="var(--ink)" stroke-width="2"/><circle cx="-36" cy="-23" r="3" fill="var(--ink)"/><circle cx="-24" cy="-23" r="3" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Modelado con plastilina y arcilla",
  minutos: 25,
  objetivos: ["Conocer la plastilina y la arcilla y sus diferencias", "Hacer bolas, churros, placas y pellizcos para modelar figuras", "Crear una figura en volumen, unir piezas y decorarla"],
  claves: ["modelar", "volumen", "plastilina", "arcilla", "bola", "churro", "placa", "barbotina", "escultura"],
  pregunta: {
    texto: "Un dibujo es plano. ¿Cómo podrías hacer un caracol que puedas coger con la mano y mirar por todos los lados?",
    respuesta: "<mark>Modelándolo</mark> con plastilina o arcilla. Así tiene <b>volumen</b>: alto, ancho y fondo. Es una pequeña escultura.",
  },
  bloques: [
    {
      html: `<h3>Plano y con volumen</h3><p>Un dibujo en un papel es <mark>plano</mark>: solo tiene alto y ancho.</p><p>Una figura de plastilina tiene <mark>volumen</mark>: también tiene fondo. La puedes girar y verla por delante, por detrás y por los lados.</p><p>Las figuras con volumen se llaman <b>esculturas</b>. Hacer figuras con las manos apretando y dando forma se llama <b>modelar</b>.</p>`,
      svg: svg("Un círculo dibujado en un papel plano y una bola de plastilina con volumen", `<path d="M20 120 L70 100 L130 120 L80 144z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><ellipse cx="75" cy="121" rx="22" ry="9" fill="none" stroke="${P.rojo}" stroke-width="3"/>${bola(190, 100, 32, P.rojo)}<ellipse cx="190" cy="136" rx="30" ry="6" fill="var(--ink)" opacity=".15"/>${etq(75, 166, "plano")}${etq(190, 166, "con volumen")}`),
    },
    {
      html: `<h3>Plastilina y arcilla</h3><p>Para modelar usamos sobre todo <mark>dos materiales</mark>.</p><p>La <b>plastilina</b> es de colores y nunca se seca. Podemos usarla una y otra vez.</p><p>La <b>arcilla</b> es barro: tierra mezclada con agua. Es marrón o gris y se seca con el aire. Cuando se seca, se pone dura y la figura queda para siempre. Así se hacen los platos y los botijos.</p>`,
      svg: svg("Bloques de plastilina de colores y un bloque de arcilla marrón con un vaso de agua", `${[P.rojo, P.amarillo, P.azul, P.verde].map((c, i) => `<rect x="${16 + i * 24}" y="70" width="20" height="56" rx="3" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}${etq(60, 150, "plastilina")}<path d="M150 126 q-6 -50 10 -56 q30 -8 60 4 q14 20 4 52z" fill="${ARC}" stroke="var(--ink)" stroke-width="1.5"/><rect x="226" y="96" width="22" height="30" rx="3" fill="${P.celeste}" opacity=".7" stroke="var(--ink)"/>${etq(190, 150, "arcilla")}${etq(60, 40, "No se seca", "var(--muted)", 11)}${etq(190, 40, "Se seca y endurece", "var(--muted)", 11)}`),
    },
    {
      html: `<h3>Primero, amasar</h3><p>Antes de modelar hay que <mark>amasar</mark> el material, como si fuera pan.</p><p>Lo apretamos y lo doblamos con las manos varias veces. Así se calienta y se vuelve blando.</p><p>La plastilina fría está dura y se rompe. La arcilla, si está seca, se moja un poco con agua. Trabaja siempre sobre una tabla o un plástico para no manchar la mesa.</p>`,
      svg: svg("Dos manos amasan una bola de plastilina sobre una tabla", `<rect x="30" y="126" width="200" height="16" rx="4" fill="#c99a5b"/>${placa(130, 116, 70, 22, P.verde)}<path d="M74 100 q-8 -22 10 -30 h32 q10 0 10 10 v14 q-26 4 -52 6z" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/><path d="M186 100 q8 -22 -10 -30 h-32 q-10 0 -10 10 v14 q26 4 52 6z" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/>${etq(130, 40, "Apretar y doblar", "var(--pen)", 15)}${etq(130, 164, "sobre una tabla", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Bolas y churros</h3><p>Con la plastilina hacemos <mark>formas básicas</mark>.</p><p>Una <b>bola</b> se hace girando un trozo entre las palmas, en círculos. Un <b>churro</b> se hace rodando una bola sobre la mesa con la mano estirada, adelante y atrás.</p><p>Con bolas hacemos cabezas, ojos y frutas. Con churros hacemos patas, serpientes y letras. ¡Escribe tu nombre con churros!</p>`,
      svg: svg("Cómo hacer una bola girando entre las palmas y un churro rodando sobre la mesa", `${bola(56, 64, 22, P.azul)}<path d="M30 64 a26 26 0 0 1 52 0" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 4"/>${etq(56, 112, "bola")}${churro(126, 64, 110, P.rojo, 16)}<path d="M150 40 h60 M150 40 l8 -5 M150 40 l8 5 M210 40 l-8 -5 M210 40 l-8 5" stroke="var(--muted)" stroke-width="2"/>${etq(181, 112, "churro")}${churro(20, 146, 40, P.rojo)}${churro(64, 146, 40, P.amarillo)}${bola(122, 146, 10, P.verde)}${bola(146, 146, 10, P.verde)}${etq(198, 150, "patas y ojos", "var(--muted)", 11)}`),
      video: V("pl5b"),
    },
    {
      html: `<h3>Placas y pellizcos</h3><p>Si aplastamos una bola con la palma, sale una <mark>placa</mark>: una forma plana y redonda.</p><p>Con un rodillo queda más fina y lisa. Con placas hacemos orejas, alas o la base de una figura.</p><p>El <b>pellizco</b> es hundir el pulgar en una bola y ir apretando los bordes. Así salen cuencos y nidos. ¡Hazle un nido a un pájaro de plastilina!</p>`,
      svg: svg("Una placa aplastada con un rodillo y un cuenco hecho con la técnica del pellizco", `${placa(70, 92, 96, 28, P.amarillo)}<rect x="22" y="56" width="96" height="14" rx="7" fill="#c99a5b" stroke="var(--ink)"/><rect x="12" y="59" width="12" height="8" rx="3" fill="#a8763a"/><rect x="116" y="59" width="12" height="8" rx="3" fill="#a8763a"/>${etq(70, 136, "placa")}<path d="M156 80 q0 50 40 50 q40 0 40 -50z" fill="${ARC}" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="196" cy="80" rx="40" ry="10" fill="${ARC2}" stroke="var(--ink)" stroke-width="1.5"/>${bola(186, 78, 6, P.azul)}${bola(204, 78, 6, P.azul)}${etq(196, 150, "pellizco: cuenco")}`),
    },
    {
      html: `<h3>Unir las piezas</h3><p>Una figura se hace con <mark>varias piezas</mark>. Hay que unirlas bien para que no se caigan.</p><p>Con plastilina basta con apretar y alisar la unión con el dedo. A veces ayuda un palillo por dentro.</p><p>Con arcilla usamos <b>barbotina</b>: barro muy aguado, como un pegamento. Rayamos las dos partes, ponemos barbotina y las juntamos. ¡Así quedan pegadas!</p>`,
      svg: svg("Cómo unir piezas: rayar, poner barbotina y juntar una cabeza a un cuerpo de arcilla", `${bola(40, 70, 18, ARC)}<path d="M30 86 l6 6 M38 86 l6 6 M46 86 l-2 6" stroke="var(--ink)" stroke-width="1.5"/>${etq(40, 120, "1. rayar")}${flechaR(66, 72, 92, 72)}<rect x="104" y="58" width="34" height="34" rx="5" fill="${P.celeste}" opacity=".5" stroke="var(--ink)"/><path d="M108 74 q13 -6 26 0 v14 h-26z" fill="${ARC2}" opacity=".7"/>${etq(121, 120, "2. barbotina")}${flechaR(148, 72, 174, 72)}${bola(212, 56, 16, ARC)}<ellipse cx="212" cy="92" rx="22" ry="20" fill="${ARC}" stroke="var(--ink)" stroke-width="1.5"/>${etq(212, 130, "3. juntar")}${etq(130, 164, "Barbotina = barro aguado", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Herramientas y detalles</h3><p>Además de las manos, podemos usar <mark>herramientas</mark> sencillas.</p><p>Un palillo sirve para hacer agujeros y rayas. Un tenedor de plástico hace texturas, como el pelo. Un tapón deja círculos.</p><p>Los detalles hacen que la figura cobre vida: ojos, boca, escamas o plumas. Cuando la arcilla se seca, se puede <b>pintar</b> con témperas. ¡Queda preciosa!</p>`,
      svg: svg("Herramientas de modelado: palillo, tenedor de plástico, tapón y un caracol terminado", `<path d="M30 40 L60 120" stroke="#c99a5b" stroke-width="5" stroke-linecap="round"/>${etq(44, 140, "palillo")}<path d="M88 40 v28 M96 40 v28 M104 40 v28 M88 68 q8 10 16 0 M96 76 v44" stroke="#9aa5c0" stroke-width="4" fill="none" stroke-linecap="round"/>${etq(96, 140, "tenedor")}${caracol(194, 116, 1.15)}${etq(194, 150, "¡con detalles!")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El modelado es <mark>de los oficios más antiguos</mark> del mundo.</p><p>Hace miles de años ya se hacían vasijas de barro para guardar agua y comida. Hoy los alfareros siguen haciendo platos, tazas y botijos.</p><p>Los escultores hacen estatuas. ¡Y en las películas de animación con plastilina, cada personaje se modela a mano!</p>`,
      svg: svg("Un alfarero hace una vasija en el torno y al lado hay un botijo", `<rect x="40" y="128" width="80" height="12" rx="4" fill="#78909c"/><rect x="74" y="140" width="12" height="24" fill="#546e7a"/><path d="M58 128 q-6 -30 12 -46 h20 q18 16 12 46z" fill="${ARC}" stroke="var(--ink)" stroke-width="1.5"/>${nino(150, 160, { c: P.azul, pose: "sentado", s: 1.1 })}<path d="M196 150 q-24 0 -24 -26 q0 -26 30 -30 q30 4 30 30 q0 26 -24 26z" fill="${ARC}" stroke="var(--ink)" stroke-width="1.5"/><path d="M196 94 v-14 h10 v14" fill="${ARC}" stroke="var(--ink)"/><path d="M226 110 l12 -10" stroke="var(--ink)" stroke-width="4"/>${etq(210, 172, "botijo")}${etq(80, 30, "alfarero", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Jugamos al zoo de plastilina</h3><p>Cada niño elige un animal y lo <mark>modela con bolas, churros y placas</mark>.</p><p>Primero piensa qué piezas necesita: un cuerpo, una cabeza, patas, cola…</p><p>Al final ponemos todos los animales juntos sobre una mesa y hacemos un zoo. Cada uno presenta el suyo: «Es una jirafa». «El cuello es un churro largo». ¡Qué zoo tan bonito!</p>`,
      svg: svg("Un zoo de plastilina: un caracol, una serpiente de churro y un pájaro en su nido", `<rect x="10" y="140" width="240" height="26" rx="6" fill="${P.verde}" opacity=".35"/>${caracol(60, 140, 0.9)}<path d="M110 136 q12 -16 24 0 t24 0 t20 -6" stroke="${P.amarillo}" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M110 136 q12 -16 24 0 t24 0 t20 -6" stroke="var(--ink)" stroke-width="1" fill="none" opacity=".4"/><circle cx="174" cy="126" r="3" fill="var(--ink)"/><path d="M200 140 q0 -16 20 -16 q20 0 20 16z" fill="${ARC}" stroke="var(--ink)"/>${bola(220, 108, 14, P.azul)}<path d="M232 106 l10 4 l-10 4z" fill="${P.naranja}"/>${sol(36, 34, 12)}${etq(150, 40, "Nuestro zoo", "var(--pen)", 15)}`),
    },
  ],
  figura: {
    titulo: "Modelar: las formas básicas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Formas básicas del modelado: bola, churro, placa y pellizco, y un caracol hecho con ellas"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 34, "Bola + churro + placa + pellizco", { size: 20, color: "var(--pen)" })}${bola(80, 120, 36, P.rojo)}${churro(150, 120, 110, P.amarillo, 22)}${placa(340, 124, 100, 34, P.azul)}<path d="M430 104 q0 60 48 60 q48 0 48 -60z" fill="${ARC}" stroke="var(--ink)" stroke-width="2"/><ellipse cx="478" cy="104" rx="48" ry="12" fill="${ARC2}" stroke="var(--ink)" stroke-width="2"/>${["bola", "churro", "placa", "pellizco"].map((t, i) => rot([80, 205, 340, 478][i], 196, t, { size: 16 })).join("")}${caracol(580, 160, 1)}${rot(580, 196, "¡figura!", { size: 16, color: "var(--pen)" })}${rot(320, 262, "Amasar → formar → unir → decorar", { size: 18 })}</svg>`,
  },
  video: V("pl5v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Modela un caracol.",
      pasos: ["Haz un churro para el cuerpo.", "Haz otro churro y enróllalo en espiral para la concha.", "Pon la concha encima y añade dos antenas."],
      resultado: "Un caracol hecho con dos churros." },
    { enunciado: "Pega una oreja de arcilla a una cabeza.",
      pasos: ["Raya la oreja y la cabeza donde se unen.", "Pon un poco de barbotina.", "Aprieta y alisa la unión con el dedo."],
      resultado: "La oreja queda bien pegada." },
    { enunciado: "Haz un cuenco pequeño.",
      pasos: ["Haz una bola.", "Hunde el pulgar en el centro.", "Aprieta los bordes girando la bola poco a poco."],
      resultado: "Un cuenco hecho con la técnica del pellizco." },
  ],
  errores: [
    "Modelar con la plastilina fría y dura: primero hay que amasarla.",
    "Pegar piezas de arcilla sin barbotina: al secarse se caen.",
    "Hacer patas muy finas y largas: la figura no se sostiene.",
    "Dejar la arcilla sin tapar: se seca antes de terminar.",
  ],
  ejercicios: [
    { q: "¿Qué es modelar?", sol: "Dar forma a un material blando con las manos para hacer figuras con volumen." },
    { q: "¿Qué diferencia hay entre la plastilina y la arcilla?", sol: "La plastilina no se seca; la arcilla se seca y se endurece." },
    { q: "¿Para qué sirve amasar?", sol: "Para que el material se caliente y se ablande." },
    { q: "¿Cómo se hace una bola?", sol: "Girando un trozo entre las palmas de las manos." },
    { q: "¿Cómo se hace un churro?", sol: "Rodando una bola sobre la mesa con la mano estirada." },
    { q: "¿Qué es una placa?", sol: "Una forma plana que sale al aplastar una bola." },
    { q: "¿Qué es la barbotina?", sol: "Barro muy aguado que sirve para pegar piezas de arcilla." },
    { q: "Di dos herramientas que puedes usar para modelar.", sol: "Por ejemplo: palillo, tenedor de plástico, rodillo o tapón." },
    { q: "Modela tu nombre con churros de plastilina.", sol: "Respuesta libre: cada letra es un churro doblado." },
    { q: "Modela un animal con al menos tres formas básicas.", sol: "Respuesta libre: por ejemplo, un gato con bolas, churros y placas." },
  ],
  quiz: [
    { q: "Una figura con volumen se llama…", o: ["dibujo", "escultura", "cenefa"], a: 1, e: "Escultura." },
    { q: "La plastilina…", o: ["se seca", "no se seca", "se derrite con agua"], a: 1, e: "Se puede usar muchas veces." },
    { q: "La arcilla es…", o: ["barro", "papel", "madera"], a: 0, e: "Tierra con agua." },
    { q: "Antes de modelar hay que…", o: ["amasar", "congelar", "pintar"], a: 0, e: "Amasar." },
    { q: "Rodando la plastilina sobre la mesa sale un…", o: ["churro", "cuenco", "cubo"], a: 0, e: "Churro." },
    { q: "Aplastando una bola sale una…", o: ["placa", "espiral", "bola"], a: 0, e: "Placa." },
    { q: "Hundir el pulgar en una bola sirve para hacer…", o: ["un cuenco", "una serpiente", "una placa"], a: 0, e: "Pellizco." },
    { q: "La barbotina sirve para…", o: ["pegar arcilla", "pintar", "secar"], a: 0, e: "Es el pegamento de barro." },
    { q: "La arcilla seca se puede…", o: ["pintar", "volver a amasar siempre", "comer"], a: 0, e: "Se pinta con témperas." },
    { q: "Quien hace vasijas de barro es un…", o: ["alfarero", "panadero", "cartero"], a: 0, e: "Alfarero." },
  ],
  examen: [
    { q: "Un dibujo en papel es…", o: ["plano", "con volumen", "una escultura"], a: 0, e: "Solo alto y ancho." },
    { q: "Para hacer las patas de un animal usas…", o: ["churros", "placas finas", "pellizcos"], a: 0, e: "Churros cortos y gruesos." },
    { q: "Para no manchar la mesa trabajamos…", o: ["sobre una tabla o plástico", "en el suelo", "en la pared"], a: 0, e: "Sobre una tabla." },
    { q: "Si la arcilla se seca mientras trabajas…", o: ["la mojas un poco", "la tiras", "la metes al horno"], a: 0, e: "Un poco de agua." },
  ],
  feynman: ["Qué diferencia hay entre plano y volumen", "Cómo se hacen bolas, churros, placas y pellizcos", "Cómo se unen piezas de arcilla"],
  mapa: mapa("MODELADO", "var(--pri)", [
    ["Materiales", "plastilina y arcilla", "#e53935"],
    ["Formas", "bola, churro, placa, pellizco", "#1e88e5"],
    ["Unir", "apretar o barbotina", "#43a047"],
    ["Acabar", "detalles, secar, pintar", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Modelar", "Dar forma con las manos a un material blando"],
    ["Volumen", "Alto, ancho y fondo: se ve por todos lados"],
    ["Plastilina", "De colores; no se seca"],
    ["Arcilla", "Barro; se seca y se endurece"],
    ["Churro", "Se hace rodando sobre la mesa"],
    ["Placa", "Se hace aplastando una bola"],
    ["Pellizco", "Hundir el pulgar para hacer un cuenco"],
    ["Barbotina", "Barro aguado para pegar piezas"],
  ],
  familias: [
    "Haced plastilina casera con harina, sal, agua y colorante.",
    "Modelad juntos las letras del nombre de cada uno.",
    "Montad un pequeño zoo o una granja de plastilina.",
    "Si visitáis un mercado o un museo, buscad piezas de cerámica.",
  ],
  profesores: PROF("Educación Plástica y Visual: el volumen; modelado con materiales blandos (plastilina, arcilla); técnicas básicas (bola, churro, placa, pellizco); unión con barbotina; acabado y decoración", ["Taller de formas básicas con plastilina.", "Pequeñas piezas de arcilla secadas al aire y pintadas.", "Exposición de clase: el zoo de plastilina."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
