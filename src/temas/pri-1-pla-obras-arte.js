// Educación Plástica 1º de Primaria: mirar obras de arte.
// Los cuadros se representan con dibujos propios sencillos «al estilo de», nunca con reproducciones.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", azulOsc: "#1a237e", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", negro: "#212121", marron: "#8d6e63", oro: "#c9a227", piel: "#ffcc80", gris: "#9e9e9e" };
const marco = (x, y, w, h, dentro) => `<g><rect x="${x - 7}" y="${y - 7}" width="${w + 14}" height="${h + 14}" rx="3" fill="${P.oro}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fffde7"/><g transform="translate(${x} ${y}) scale(${(w / 100).toFixed(3)} ${(h / 70).toFixed(3)})">${dentro}</g></g>`;
const nocheEstrellada = `<rect width="100" height="70" fill="${P.azulOsc}"/>${[[20, 15], [45, 10], [70, 20], [85, 8]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${P.amarillo}" opacity=".9"/><circle cx="${x}" cy="${y}" r="8" fill="none" stroke="${P.amarillo}" stroke-width="1.2"/>`).join("")}<path d="M5 35 q 20 -12 40 0 t 40 0" stroke="#90caf9" stroke-width="2.5" fill="none"/><path d="M10 45 q 20 -12 40 0 t 40 0" stroke="#90caf9" stroke-width="2" fill="none"/><path d="M15 70 q 3 -40 8 -55 q 5 15 8 55 Z" fill="${P.negro}"/><path d="M40 70 v -10 h 50 v 10 Z" fill="#3949ab"/>`;
const girasoles = `<rect width="100" height="70" fill="#ffe082"/><path d="M30 70 l 5 -20 h 30 l 5 20 Z" fill="${P.naranja}"/>${[[40, 25], [55, 18], [65, 32], [35, 40], [50, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="${P.amarillo}"/><circle cx="${x}" cy="${y}" r="3.5" fill="${P.marron}"/>`).join("")}`;
const miro = `<rect width="100" height="70" fill="#fffde7"/><path d="M10 55 q 25 -45 45 -10 t 35 -20" stroke="${P.negro}" stroke-width="2" fill="none"/><circle cx="25" cy="18" r="7" fill="${P.rojo}"/><circle cx="75" cy="50" r="5" fill="${P.azul}"/><path d="M80 10 v 12 M74 16 h 12 M76 12 l 8 8 M84 12 l -8 8" stroke="${P.negro}" stroke-width="1.5"/><circle cx="50" cy="60" r="4" fill="${P.amarillo}" stroke="${P.negro}"/>`;
const retrato = `<rect width="100" height="70" fill="#5d4037"/><path d="M22 70 q 0 -24 28 -24 q 28 0 28 24 Z" fill="${P.negro}"/><circle cx="50" cy="32" r="14" fill="${P.piel}"/><path d="M36 30 q 14 -25 28 0 q -2 -16 -14 -16 q -12 0 -14 16 Z" fill="#3e2723"/><circle cx="45" cy="31" r="1.5" fill="${P.negro}"/><circle cx="55" cy="31" r="1.5" fill="${P.negro}"/><path d="M46 38 q 4 3 8 0" stroke="${P.negro}" fill="none"/>`;
const paisaje = `<rect width="100" height="40" fill="#bbdefb"/><rect y="40" width="100" height="30" fill="#aed581"/><path d="M0 40 l 25 -22 l 20 22 Z M35 40 l 25 -25 l 25 25 Z" fill="#8d6e63"/><circle cx="85" cy="12" r="6" fill="${P.amarillo}"/><path d="M15 70 q 20 -15 40 -30" stroke="#90caf9" stroke-width="5" fill="none"/>`;
const bodegon = `<rect width="100" height="70" fill="#d7ccc8"/><rect y="45" width="100" height="25" fill="#8d6e63"/><circle cx="30" cy="42" r="8" fill="${P.rojo}"/><circle cx="45" cy="44" r="7" fill="${P.verde}"/><path d="M60 47 l 3 -25 h 10 l 3 25 Z" fill="${P.azul}" opacity=".7"/><ellipse cx="80" cy="46" rx="10" ry="4" fill="${P.amarillo}"/>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Mirar obras de arte",
  minutos: 25,
  objetivos: ["Observar con calma una obra de arte y describirla", "Conocer qué es un museo y cómo nos comportamos en él", "Distinguir retrato, paisaje y bodegón y conocer algunos artistas"],
  claves: ["obra de arte", "museo", "pintor", "retrato", "paisaje", "bodegón", "escultura"],
  pregunta: {
    texto: "Si miras un cuadro durante un minuto entero, ¿crees que verás cosas que no veías al principio?",
    respuesta: "¡Seguro que sí! Al <mark>mirar despacio</mark> descubrimos colores, personajes y detalles escondidos. Mirar arte es como jugar a encontrar tesoros.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una obra de arte?</h3><p>Una <mark>obra de arte</mark> es algo que una persona crea para expresar ideas, contar historias o hacer sentir emociones.</p><p>Pueden ser <b>pinturas</b>, <b>esculturas</b>, edificios, fotografías… Las personas que las hacen son <b>artistas</b>: pintores, escultores, arquitectos.</p>`,
      svg: svg("Un cuadro enmarcado y una escultura sobre un pedestal", `${marco(25, 40, 110, 80, paisaje)}<rect x="175" y="110" width="50" height="45" fill="var(--line)"/><path d="M200 110 q -20 -15 -10 -45 q 5 -15 10 -15 q 5 0 10 15 q 10 30 -10 45 Z" fill="${P.gris}"/><circle cx="200" cy="45" r="11" fill="${P.gris}"/>${txt(80, 160, "pintura", "var(--ink)", 13)}${txt(200, 170, "escultura", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>El museo</h3><p>Muchas obras de arte se guardan en los <mark>museos</mark>, para que todo el mundo pueda verlas. En España hay museos muy famosos, como el <b>Museo del Prado</b> en Madrid.</p><p>En el museo <b>miramos sin tocar</b>, hablamos bajito y no corremos. Así cuidamos las obras para que las vean también otros niños dentro de muchos años.</p>`,
      svg: svg("La sala de un museo con cuadros en la pared y un niño mirando", `<rect x="10" y="20" width="240" height="110" fill="#efebe9"/><rect x="10" y="130" width="240" height="30" fill="#bcaaa4"/>${marco(30, 45, 60, 45, retrato)}${marco(120, 40, 90, 55, nocheEstrellada)}<circle cx="170" cy="118" r="9" fill="${P.piel}"/><rect x="161" y="127" width="18" height="22" rx="5" fill="${P.verde}"/><path d="M60 125 H 230" stroke="${P.rojo}" stroke-width="2" stroke-dasharray="6 4"/>`),
    },
    {
      html: `<h3>Mirar despacio</h3><p>Para mirar un cuadro, nos hacemos <mark>preguntas</mark>: ¿Qué veo? ¿Qué colores hay? ¿Hay personas o animales? ¿Qué están haciendo? ¿Es de día o de noche?</p><p>Y la pregunta más importante: <b>¿qué siento al mirarlo?</b> Todas las respuestas valen si las explicamos.</p>`,
      svg: svg("Una lupa sobre un cuadro y bocadillos con preguntas", `${marco(30, 45, 120, 85, girasoles)}<circle cx="125" cy="80" r="26" fill="none" stroke="var(--ink)" stroke-width="5"/><path d="M144 99 l 22 22" stroke="var(--ink)" stroke-width="8" stroke-linecap="round"/>${txt(215, 50, "¿qué veo?", P.azul, 13)}${txt(215, 85, "¿colores?", P.rojo, 13)}${txt(215, 120, "¿qué siento?", P.verde, 13)}`),
    },
    {
      html: `<h3>El retrato</h3><p>Un <mark>retrato</mark> es una obra que muestra a una <b>persona</b>. Puede ser solo la cara o el cuerpo entero.</p><p>Si el artista se pinta a sí mismo, se llama <b>autorretrato</b>. Antes de que existieran las fotos, los retratos eran la forma de recordar cómo era alguien.</p>`,
      svg: svg("Un retrato de una persona en un marco dorado", `${marco(70, 25, 120, 115, retrato)}`),
    },
    {
      html: `<h3>El paisaje y el bodegón</h3><p>Un <mark>paisaje</mark> muestra la <b>naturaleza</b> o una ciudad: montañas, ríos, árboles, cielo, casas.</p><p>Un <mark>bodegón</mark> muestra <b>objetos quietos</b> sobre una mesa: frutas, jarras, flores, platos. Los pintores los colocan con cuidado antes de pintarlos.</p>`,
      svg: svg("Un paisaje con montañas y un río, y un bodegón con frutas y una jarra", `${marco(20, 40, 100, 75, paisaje)}${marco(145, 40, 100, 75, bodegon)}${txt(70, 145, "paisaje", "var(--ink)", 13)}${txt(195, 145, "bodegón", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Vincent van Gogh</h3><p><b>Vincent van Gogh</b> fue un pintor que usaba <mark>colores muy vivos</mark> y pinceladas gruesas, como remolinos.</p><p>Pintó un cielo de noche lleno de estrellas que giran y muchos cuadros de <b>girasoles</b> amarillos. Sus cuadros parecen moverse.</p>`,
      svg: svg("Dibujo al estilo de Van Gogh: un cielo nocturno con estrellas y remolinos, y un jarrón con girasoles", `${marco(15, 40, 120, 85, nocheEstrellada)}${marco(160, 40, 85, 85, girasoles)}${txt(130, 160, "dibujos «al estilo de» Van Gogh", "var(--muted)", 11)}`),
      video: { id: "N7DHaAqfKwE", titulo: "¿Sabes qué pintó Vincent van Gogh?", canal: "FlexFlix Kids en Español", vistas: 344925, megusta: 0 },
    },
    {
      html: `<h3>Joan Miró y Diego Velázquez</h3><p><b>Joan Miró</b>, de Barcelona, pintaba con <mark>formas sencillas</mark>, líneas negras y colores primarios: parecen dibujos de niños, ¡y por eso nos encantan!</p><p><b>Diego Velázquez</b>, de Sevilla, pintó hace casi 400 años <b>Las Meninas</b>, con una princesa niña y su gente alrededor. Está en el Museo del Prado.</p>`,
      svg: svg("Dibujo al estilo de Miró con formas y colores primarios, y una niña con vestido ancho al estilo de Las Meninas", `${marco(15, 40, 110, 80, miro)}<rect x="152" y="33" width="96" height="94" fill="${P.oro}"/><rect x="159" y="40" width="82" height="80" fill="#4e342e"/><path d="M200 75 l -26 42 h 52 Z" fill="#eceff1"/><circle cx="200" cy="65" r="10" fill="${P.piel}"/><path d="M190 63 q 10 -16 20 0" fill="#ffe082"/>${txt(70, 160, "al estilo de Miró", "var(--muted)", 11)}${txt(200, 160, "una menina", "var(--muted)", 11)}`),
      video: { id: "bZ1XFmi44PA", titulo: "Lunnis de Leyenda: Velázquez", canal: "Clan TVE", vistas: 116542, megusta: 0 },
    },
    {
      html: `<h3>¿Para qué sirve el arte?</h3><p>El arte sirve para <mark>expresar</mark> lo que sentimos y pensamos, para recordar personas y momentos y para que el mundo sea más <b>bonito</b>.</p><p>También nos enseña cómo vivía la gente hace mucho tiempo: su ropa, sus casas, sus juegos. ¡Los cuadros son ventanas al pasado!</p>`,
      svg: svg("Un cuadro como una ventana abierta al pasado con una casa antigua", `<rect x="55" y="25" width="150" height="120" fill="${P.oro}"/><rect x="65" y="35" width="130" height="100" fill="#bbdefb"/><rect x="65" y="100" width="130" height="35" fill="#aed581"/><path d="M95 100 v -30 l 25 -20 l 25 20 v 30 Z" fill="#d7ccc8" stroke="var(--ink)"/><rect x="113" y="80" width="14" height="20" fill="#5d4037"/><path d="M65 35 l 25 15 M195 35 l -25 15" stroke="var(--card)" stroke-width="3"/>`),
    },
    {
      html: `<h3>Juego: soy un artista</h3><p>Elige un cuadro que te guste y haz <mark>tu propia versión</mark>. Puedes cambiar los colores, añadir tu mascota o ponerte tú dentro del cuadro.</p><p>Después, monta una <b>exposición</b> en casa: cuelga los dibujos, ponles un título y tu nombre, e invita a tu familia a visitarla con el «billete» de entrada.</p>`,
      svg: svg("Una pared con tres dibujos infantiles enmarcados y cartelas con su título", `<rect x="10" y="20" width="240" height="140" fill="#efebe9"/>${[[25, nocheEstrellada], [100, girasoles], [175, miro]].map(([x, d]) => `${marco(x, 45, 60, 50, d)}<rect x="${x + 8}" y="112" width="44" height="12" fill="var(--card)" stroke="var(--line)"/>`).join("")}`),
    },
  ],
  figura: {
    titulo: "Tres tipos de cuadros",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Un retrato con una persona, un paisaje con montañas y un bodegón con frutas">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${marco(45, 35, 160, 150, retrato)}${marco(240, 50, 165, 120, paisaje)}${marco(440, 50, 165, 120, bodegon)}
      ${txt(125, 225, "retrato: personas", "var(--ink)", 16)}${txt(322, 225, "paisaje: naturaleza", "var(--ink)", 16)}${txt(522, 225, "bodegón: objetos", "var(--ink)", 16)}
    </svg>`,
  },
  video: { id: "3cqdOhuboC4", titulo: "Obra comentada: Las meninas, de Velázquez", canal: "Museo Nacional del Prado", vistas: 653495, megusta: 0, busqueda: "Las Meninas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Mira un cuadro de girasoles y descríbelo.", pasos: ["¿Qué veo? Flores amarillas en un jarrón.", "¿Qué colores? Sobre todo amarillos y naranjas: colores cálidos.", "¿Qué siento? Alegría, como si hiciera sol."], resultado: "es un bodegón de flores, alegre y luminoso." },
    { enunciado: "¿Es un retrato, un paisaje o un bodegón? Un cuadro con montañas y un río.", pasos: ["¿Hay personas en primer plano? No.", "¿Hay objetos sobre una mesa? No.", "Hay naturaleza: montañas y río."], resultado: "es un paisaje." },
    { enunciado: "Haz tu autorretrato.", pasos: ["Mírate en un espejo: forma de la cara, color de ojos y pelo.", "Dibuja primero las formas grandes y luego los detalles.", "Colorea y fírmalo como los artistas."], resultado: "un autorretrato firmado." },
  ],
  errores: [
    "Mirar un cuadro solo un segundo: hay que mirar despacio para descubrir detalles.",
    "Pensar que solo hay una respuesta correcta sobre lo que hace sentir un cuadro.",
    "Tocar las obras en el museo: el sudor de las manos las estropea.",
    "Confundir retrato (personas) con bodegón (objetos).",
  ],
  ejercicios: [
    { q: "¿Qué es un museo?", sol: "Un lugar donde se guardan y se enseñan obras de arte." },
    { q: "Di tres normas para visitar un museo.", sol: "No tocar, hablar bajito y no correr." },
    { q: "¿Qué muestra un retrato?", sol: "A una persona." },
    { q: "¿Qué muestra un paisaje?", sol: "La naturaleza o una ciudad." },
    { q: "¿Qué muestra un bodegón?", sol: "Objetos quietos, como frutas, flores o jarras." },
    { q: "Dibuja un bodegón con tres frutas de tu casa.", sol: "Respuesta libre: tres frutas colocadas sobre una mesa." },
    { q: "¿Qué pintor pintó girasoles y cielos con remolinos?", sol: "Vincent van Gogh." },
    { q: "¿En qué museo está Las Meninas?", sol: "En el Museo del Prado, en Madrid." },
    { q: "Dibuja tu autorretrato y fírmalo.", sol: "Respuesta libre." },
    { q: "Elige un cuadro y di qué sientes al mirarlo.", sol: "Respuesta libre, explicando por qué." },
  ],
  quiz: [
    { q: "En un museo…", o: ["tocamos los cuadros", "miramos sin tocar", "corremos"], a: 1, e: "Para cuidar las obras." },
    { q: "Un retrato muestra…", o: ["una persona", "frutas", "montañas"], a: 0, e: "Personas." },
    { q: "Un paisaje muestra…", o: ["objetos en una mesa", "la naturaleza", "solo una cara"], a: 1, e: "Naturaleza o ciudad." },
    { q: "Un bodegón muestra…", o: ["objetos quietos", "animales corriendo", "el mar"], a: 0, e: "Frutas, jarras, flores." },
    { q: "Si el pintor se pinta a sí mismo es un…", o: ["autorretrato", "paisaje", "bodegón"], a: 0, e: "Autorretrato." },
    { q: "Van Gogh pintó…", o: ["girasoles", "Las Meninas", "fotos"], a: 0, e: "Girasoles y cielos estrellados." },
    { q: "Las Meninas las pintó…", o: ["Miró", "Velázquez", "Van Gogh"], a: 1, e: "Diego Velázquez." },
    { q: "Miró pintaba con…", o: ["formas sencillas y colores vivos", "solo gris", "solo fotos"], a: 0, e: "Líneas negras y colores primarios." },
    { q: "El Museo del Prado está en…", o: ["Madrid", "París", "Sevilla"], a: 0, e: "En Madrid." },
    { q: "Al mirar un cuadro, la pregunta más importante es…", o: ["¿cuánto cuesta?", "¿qué siento?", "¿cuánto pesa?"], a: 1, e: "Lo que nos hace sentir." },
  ],
  examen: [
    { q: "Las personas que hacen esculturas son…", o: ["escultores", "cocineros", "pilotos"], a: 0, e: "Escultores." },
    { q: "Un cuadro con un jarrón y manzanas es un…", o: ["retrato", "bodegón", "paisaje"], a: 1, e: "Objetos quietos." },
    { q: "¿Qué pintor era de Barcelona?", o: ["Joan Miró", "Van Gogh", "Velázquez"], a: 0, e: "Joan Miró." },
    { q: "En el museo hablamos…", o: ["bajito", "gritando", "nunca"], a: 0, e: "Bajito, para no molestar." },
  ],
  feynman: ["Qué es una obra de arte", "Cómo se mira un cuadro despacio", "Qué diferencia hay entre retrato, paisaje y bodegón"],
  mapa: mapa("MIRAR ARTE", "var(--pri)", [
    ["Obras", "pintura · escultura · edificio", "var(--pen)"],
    ["Museo", "mirar sin tocar · hablar bajito", "var(--red)"],
    ["Tipos de cuadro", "retrato · paisaje · bodegón", "var(--sun)"],
    ["Artistas", "Van Gogh · Miró · Velázquez", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Dónde se guardan las obras de arte?", "En los museos"],
    ["Cuadro de una persona", "Retrato"],
    ["Cuadro de la naturaleza", "Paisaje"],
    ["Cuadro de objetos quietos", "Bodegón"],
    ["Pintor de los girasoles", "Vincent van Gogh"],
    ["Pintor de Las Meninas", "Diego Velázquez"],
    ["Pintor de formas sencillas y colores vivos, de Barcelona", "Joan Miró"],
    ["Norma de oro del museo", "Mirar sin tocar"],
  ],
  familias: [
    "Visitad un museo cercano: muchos tienen talleres para niños y entrada gratuita algunos días.",
    "Mirad juntos un cuadro en internet durante un minuto y contad cada uno tres cosas que veis.",
    "Montad una exposición en casa con sus dibujos, con título y firma.",
    "Buscad en la web del Museo del Prado obras con niños o animales y comentadlas.",
  ],
  profesores: PROF("Educación Plástica y Visual: observación y descripción de obras de arte, géneros pictóricos (retrato, paisaje, bodegón), artistas relevantes del patrimonio y normas de comportamiento en museos", ["Rutina de pensamiento «Veo, pienso, me pregunto» ante una obra.", "Visita virtual al Museo del Prado proyectada en clase.", "Exposición de aula con versiones propias de obras famosas."]),
  fuentes: [...FUENTES, { t: "Museo Nacional del Prado", url: "https://www.museodelprado.es/" }],
  revisado: "2026-11-12",
};
