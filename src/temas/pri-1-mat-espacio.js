// Matemáticas 1º de Primaria: situarse en el espacio.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const nino = (x, y, c = "var(--pen)") => `<g><circle cx="${x}" cy="${y}" r="10" fill="var(--sun)"/><rect x="${x - 9}" y="${y + 10}" width="18" height="24" rx="5" fill="${c}"/><path d="M${x - 5} ${y + 34} v 14 M${x + 5} ${y + 34} v 14" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/></g>`;
const caja = (x, y, w = 60, h = 45) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--sun)" opacity=".7" stroke="var(--ink)" stroke-width="2"/><path d="M${x} ${y + 12} H ${x + w}" stroke="var(--ink)" stroke-width="1"/></g>`;
const gato = (x, y, c = "var(--ink)") => `<g><ellipse cx="${x}" cy="${y}" rx="14" ry="10" fill="${c}"/><circle cx="${x + 12}" cy="${y - 10}" r="8" fill="${c}"/><path d="M${x + 7} ${y - 16} l 2 -7 l 4 5 M${x + 14} ${y - 17} l 3 -7 l 3 6" fill="${c}" stroke="${c}" stroke-width="2"/><path d="M${x - 14} ${y} q -10 -4 -8 -14" stroke="${c}" stroke-width="3" fill="none"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Situarse en el espacio",
  minutos: 20,
  objetivos: ["Usar las palabras arriba, abajo, delante, detrás, dentro, fuera, cerca y lejos", "Distinguir la derecha y la izquierda", "Seguir y dar instrucciones para moverse"],
  claves: ["arriba", "abajo", "delante", "detrás", "derecha", "izquierda", "dentro", "fuera"],
  pregunta: {
    texto: "Has perdido tu pelota. Tu hermana te dice: «Está debajo de la mesa, a la derecha de la silla». ¿Sabrías encontrarla?",
    respuesta: "Sí: las palabras <mark>debajo</mark> y <mark>a la derecha</mark> te dicen exactamente dónde mirar. Son palabras para situarse en el espacio.",
  },
  bloques: [
    {
      html: `<h3>Arriba y abajo</h3><p>Lo que está más alto está <mark>arriba</mark>. Lo que está más bajo está <mark>abajo</mark>.</p><p>El sol está arriba, en el cielo. Tus pies están abajo. Si algo está tocando la parte de arriba, decimos que está <b>encima</b>; si está por debajo, decimos <b>debajo</b>.</p>`,
      svg: svg("Un gato encima de una caja y una pelota debajo de la mesa", `<rect x="20" y="90" width="100" height="10" fill="var(--leaf)"/><path d="M30 100 V 150 M110 100 V 150" stroke="var(--leaf)" stroke-width="6"/><circle cx="70" cy="135" r="13" fill="var(--red)"/>${caja(160, 105)}${gato(188, 92)}${txt(70, 75, "debajo", "var(--red)")}${txt(190, 60, "encima", "var(--ink)")}`),
    },
    {
      html: `<h3>Delante y detrás</h3><p>Lo que ves con tus ojos sin girarte está <mark>delante</mark> de ti. Lo que está a tu espalda está <mark>detrás</mark>.</p><p>En una fila, el primero va delante y el último va detrás. Si te das la vuelta, ¡lo que estaba detrás ahora está delante!</p>`,
      svg: svg("Una fila de tres niños: uno delante, otro en medio y otro detrás", `${["var(--red)", "var(--pen)", "var(--leaf)"].map((c, i) => nino(200 - i * 65, 60, c)).join("")}<path d="M235 85 l 15 0 M244 79 l 7 6 l -7 6" stroke="var(--ink)" stroke-width="2.5" fill="none"/>${txt(200, 140, "delante", "var(--red)")}${txt(70, 140, "detrás", "var(--leaf)")}`),
      video: { id: "KAVQtWeZ0t4", titulo: "Preposiciones de lugar: los conceptos espaciales para niños", canal: "Smile and Learn - Español", vistas: 2080116, megusta: 0 },
    },
    {
      html: `<h3>Dentro y fuera</h3><p>Si algo está metido en una caja, una casa o un círculo, está <mark>dentro</mark>. Si no está metido, está <mark>fuera</mark>.</p><p>Los peces están dentro del agua. Cuando sales al recreo, estás fuera de la clase.</p>`,
      svg: svg("Un círculo con tres estrellas dentro y dos fuera", `<circle cx="100" cy="85" r="60" fill="var(--water)" opacity=".2" stroke="var(--water)" stroke-width="3"/>${[[80, 70], [115, 65], [100, 105]].map(([x, y]) => `<text x="${x}" y="${y}" font-size="22">⭐</text>`).join("")}${[[195, 60], [215, 130]].map(([x, y]) => `<text x="${x}" y="${y}" font-size="22">⭐</text>`).join("")}${txt(100, 165, "dentro", "var(--water)")}${txt(215, 165, "fuera", "var(--ink)")}`),
    },
    {
      html: `<h3>Cerca y lejos</h3><p>Algo está <mark>cerca</mark> si podemos llegar en poco tiempo o tocarlo. Está <mark>lejos</mark> si hay mucho camino hasta llegar.</p><p>Tu mesa está cerca de tu silla. La luna está muy lejos. Las cosas lejanas se ven más pequeñas.</p>`,
      svg: svg("Un árbol grande cerca y un árbol pequeño lejos", `<path d="M10 140 H 250" stroke="var(--leaf)" stroke-width="3"/><rect x="58" y="90" width="14" height="50" fill="var(--sun)" opacity=".7"/><circle cx="65" cy="70" r="35" fill="var(--leaf)"/><rect x="198" y="118" width="5" height="22" fill="var(--sun)" opacity=".7"/><circle cx="200" cy="110" r="12" fill="var(--leaf)"/>${nino(20, 92, "var(--red)")}${txt(65, 165, "cerca", "var(--leaf)")}${txt(200, 165, "lejos", "var(--muted)")}`),
    },
    {
      html: `<h3>Derecha e izquierda</h3><p>Tenemos dos lados: la <mark>derecha</mark> y la <mark>izquierda</mark>. Mucha gente escribe con la mano derecha.</p><p>Un truco: pon las manos delante con los dedos hacia arriba y separa el pulgar. La mano que forma una <b>L</b> de verdad es la <b>izquierda</b>.</p>`,
      svg: svg("Dos manos: la izquierda forma una letra L con el pulgar y el índice", `<path d="M60 60 V 130 H 100 V 115 H 75 V 60 Z" fill="var(--pen)" opacity=".85"/>${txt(80, 50, "L", "var(--pen)", 22)}<path d="M200 60 V 130 H 160 V 115 H 185 V 60 Z" fill="var(--red)" opacity=".6"/>${txt(80, 160, "izquierda", "var(--pen)")}${txt(180, 160, "derecha", "var(--red)")}`),
      video: { id: "TVEsH3TeGhQ", titulo: "Izquierda, derecha, arriba, abajo", canal: "Pocoyó en español", vistas: 14226882, megusta: 16527 },
    },
    {
      html: `<h3>Entre y al lado</h3><p>Si algo tiene una cosa a cada lado, está <mark>entre</mark> las dos. Si está pegado a otra cosa, está <mark>al lado</mark>.</p><p>En la fila de lápices, el azul está entre el rojo y el verde. El rojo está al lado del azul.</p>`,
      svg: svg("Tres lápices: el azul está entre el rojo y el verde", `${["var(--red)", "var(--pen)", "var(--leaf)"].map((c, i) => `<rect x="${55 + i * 55}" y="40" width="22" height="80" rx="3" fill="${c}"/><path d="M${55 + i * 55} 120 L ${66 + i * 55} 145 L ${77 + i * 55} 120 Z" fill="var(--sun)"/>`).join("")}${txt(121, 30, "entre", "var(--pen)")}`),
    },
    {
      html: `<h3>Caminos e instrucciones</h3><p>Para ir de un sitio a otro seguimos un <mark>camino</mark>. Lo podemos explicar con instrucciones: «Ve hacia delante 3 pasos, gira a la derecha y anda 2 pasos».</p><p>En un plano, dibujamos el camino con flechas. ¡Es como dar órdenes a un robot!</p>`,
      svg: svg("Una cuadrícula con un robot que sigue flechas hasta una estrella", `${[...Array(5)].map((_, i) => [...Array(4)].map((__, j) => `<rect x="${40 + i * 36}" y="${15 + j * 36}" width="36" height="36" fill="var(--card)" stroke="var(--line)"/>`).join("")).join("")}<rect x="46" y="129" width="24" height="18" rx="4" fill="var(--pen)"/><circle cx="53" cy="137" r="3" fill="var(--card)"/><circle cx="63" cy="137" r="3" fill="var(--card)"/><path d="M58 125 V 60 H 165" stroke="var(--red)" stroke-width="3" fill="none" stroke-dasharray="6 4"/><text x="153" y="70" font-size="20">⭐</text>${txt(130, 175, "2 arriba y 3 a la derecha", "var(--red)", 12)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Usamos estas palabras para <b>explicar dónde están las cosas</b> y no perdernos: «Las llaves están dentro del cajón de la izquierda».</p><p>También para <mark>cruzar la calle</mark>: miramos a la izquierda y a la derecha antes de cruzar por el paso de cebra.</p>`,
      svg: svg("Un paso de cebra con flechas a izquierda y derecha", `<rect x="0" y="60" width="260" height="70" fill="var(--muted)" opacity=".5"/>${[...Array(6)].map((_, i) => `<rect x="${55 + i * 26}" y="65" width="14" height="60" fill="var(--card)"/>`).join("")}<path d="M30 40 h -20 l 8 -6 M10 40 l 8 6 M230 40 h 20 l -8 -6 M250 40 l -8 6" stroke="var(--red)" stroke-width="3" fill="none"/>${txt(40, 25, "izquierda", "var(--red)", 12)}${txt(220, 25, "derecha", "var(--red)", 12)}${nino(130, 118, "var(--pen)")}`),
    },
    {
      html: `<h3>Juego: Simón dice</h3><p>Jugamos a <mark>«Simón dice»</mark>: «Simón dice: levanta la mano derecha. Simón dice: pon una mano encima de la cabeza. Simón dice: ponte detrás de la silla».</p><p>Si la orden no empieza por «Simón dice», ¡no te muevas! Gana quien no se equivoca.</p>`,
      svg: svg("Un niño con la mano derecha levantada y un bocadillo que dice Simón dice", `${nino(80, 80, "var(--leaf)")}<path d="M89 95 L 105 65" stroke="var(--sun)" stroke-width="6" stroke-linecap="round"/><rect x="130" y="35" width="115" height="50" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${txt(188, 57, "Simón dice:", "var(--pen)", 13)}${txt(188, 75, "¡mano derecha!", "var(--ink)", 12)}`),
    },
  ],
  figura: {
    titulo: "¿Dónde está la pelota?",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Una pelota en distintos sitios respecto a una caja: encima, debajo, dentro, delante y al lado">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["encima", 0], ["dentro", 1], ["al lado", 2], ["delante", 3]].map(([t, i]) => { const x = 40 + i * 150; const box = `<rect x="${x}" y="110" width="90" height="70" fill="var(--sun)" opacity="${i === 1 ? 0.5 : 0.75}" stroke="var(--ink)" stroke-width="2"/>`; const ball = [[x + 45, 95], [x + 45, 150], [x + 110, 165], [x + 45, 195]][i]; return (i === 3 ? box + `<circle cx="${ball[0]}" cy="${ball[1]}" r="15" fill="var(--red)"/>` : `${i === 1 ? "" : box}<circle cx="${ball[0]}" cy="${ball[1]}" r="15" fill="var(--red)"/>${i === 1 ? box : ""}`) + txt(x + 45, 240, t, "var(--ink)", 16); }).join("")}
    </svg>`,
  },
  video: { id: "3wdLezvyPQI", titulo: "Ubicación en el espacio: arriba, abajo, izquierda y derecha", canal: "FlexFlix Kids en Español", vistas: 1262138, megusta: 0, busqueda: "arriba abajo izquierda derecha niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde está el gato si está sobre el sofá?", pasos: ["«Sobre» quiere decir tocando la parte de arriba.", "El gato está más alto que el asiento."], resultado: "el gato está encima del sofá." },
    { enunciado: "¿Cuál es tu mano izquierda?", pasos: ["Pon las dos manos delante, con los dedos hacia arriba.", "Separa el pulgar.", "La que forma una L bien escrita es la izquierda."], resultado: "la mano que forma la L." },
    { enunciado: "Da instrucciones para ir de la puerta a tu mesa.", pasos: ["Piensa en el camino.", "Cuenta los pasos: por ejemplo, 4 pasos hacia delante.", "Di hacia dónde giras: a la derecha, y 2 pasos más."], resultado: "«4 pasos adelante, giro a la derecha y 2 pasos»." },
  ],
  errores: [
    "Confundir derecha e izquierda: usa el truco de la L o una pulsera en una mano.",
    "Olvidar que la derecha y la izquierda de quien está enfrente son al revés que las tuyas.",
    "Decir «allí» o «ahí» en vez de explicar: usa palabras como encima, dentro o al lado.",
    "Pensar que una cosa lejana es más pequeña de verdad: solo lo parece.",
  ],
  ejercicios: [
    { q: "Nombra algo que esté encima de tu mesa ahora.", sol: "Por ejemplo, un lápiz, un libro o un estuche." },
    { q: "¿Qué hay detrás de ti en clase?", sol: "Respuesta libre: la pared, otro compañero, una estantería…" },
    { q: "Levanta la mano derecha. ¿Con qué mano escribes?", sol: "Respuesta según cada niño o niña." },
    { q: "Dibuja una pelota dentro de una caja y otra fuera.", sol: "Una pelota dentro del dibujo de la caja y otra fuera del borde." },
    { q: "¿Qué está más cerca de ti: la pizarra o tu estuche?", sol: "Normalmente el estuche." },
    { q: "Pon tu goma entre dos lápices.", sol: "La goma debe quedar en medio, con un lápiz a cada lado." },
    { q: "Completa: los peces viven ____ del agua.", sol: "Dentro." },
    { q: "¿Hacia dónde miras antes de cruzar la calle?", sol: "A la izquierda y a la derecha (y otra vez a la izquierda)." },
    { q: "Dibuja un sol arriba y una flor abajo.", sol: "El sol en la parte alta de la hoja y la flor en la parte baja." },
    { q: "Da una instrucción para ir de tu silla a la puerta.", sol: "Por ejemplo: «3 pasos hacia delante y giro a la izquierda»." },
  ],
  quiz: [
    { q: "El techo está…", o: ["arriba", "abajo", "dentro"], a: 0, e: "Es lo más alto de la habitación." },
    { q: "Las raíces de un árbol están…", o: ["arriba", "debajo de la tierra", "delante"], a: 1, e: "Bajo el suelo." },
    { q: "En una fila, el primero va…", o: ["detrás", "delante", "al lado"], a: 1, e: "El primero va delante." },
    { q: "La ropa guardada en el armario está…", o: ["dentro", "fuera", "encima"], a: 0, e: "Metida en el armario." },
    { q: "La luna está…", o: ["cerca", "lejos", "dentro"], a: 1, e: "Muy lejos de la Tierra." },
    { q: "El truco de la L sirve para encontrar la mano…", o: ["derecha", "izquierda", "de arriba"], a: 1, e: "La izquierda forma la L." },
    { q: "Si tienes un amigo a cada lado, estás…", o: ["entre", "detrás", "fuera"], a: 0, e: "En medio de los dos." },
    { q: "Antes de cruzar, miro…", o: ["solo arriba", "a los dos lados", "detrás"], a: 1, e: "Izquierda y derecha." },
    { q: "Si me doy la vuelta, lo que estaba detrás queda…", o: ["delante", "dentro", "lejos"], a: 0, e: "Ahora lo veo delante." },
    { q: "Una pelota sobre la mesa está…", o: ["debajo", "encima", "dentro"], a: 1, e: "Toca la parte de arriba." },
  ],
  examen: [
    { q: "Los zapatos se ponen en los pies, que están…", o: ["arriba", "abajo", "dentro"], a: 1, e: "Los pies están abajo." },
    { q: "El último de la fila va…", o: ["delante", "detrás", "entre"], a: 1, e: "Detrás de todos." },
    { q: "El agua de la botella cerrada está…", o: ["fuera", "dentro", "encima"], a: 1, e: "Dentro de la botella." },
    { q: "Una cosa que puedo tocar sin moverme está…", o: ["cerca", "lejos", "detrás siempre"], a: 0, e: "Está cerca." },
  ],
  feynman: ["Cómo distingo la derecha de la izquierda", "Qué diferencia hay entre dentro y fuera", "Cómo doy instrucciones para llegar a un sitio"],
  mapa: mapa("SITUARSE EN EL ESPACIO", "var(--pri)", [
    ["Arriba · abajo", "encima · debajo", "var(--pen)"],
    ["Delante · detrás", "lo que veo · mi espalda", "var(--red)"],
    ["Dentro · fuera", "cerca · lejos", "var(--leaf)"],
    ["Derecha · izquierda", "la L es la izquierda", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["Lo contrario de arriba", "Abajo"],
    ["Lo contrario de delante", "Detrás"],
    ["Lo contrario de dentro", "Fuera"],
    ["Lo contrario de cerca", "Lejos"],
    ["¿Qué mano forma la L?", "La izquierda"],
    ["Si hay algo a cada lado, estoy…", "Entre"],
    ["¿Dónde miro antes de cruzar?", "A la izquierda y a la derecha"],
    ["Encima quiere decir…", "Sobre algo, tocando su parte de arriba"],
  ],
  familias: [
    "Al recoger, dad órdenes con estas palabras: «pon el coche dentro de la caja, encima de la estantería».",
    "Jugad a esconder un objeto y dar pistas: «está debajo de algo que está a la derecha de la puerta».",
    "Poned una pulsera o un punto de color en la mano derecha si aún las confunde.",
    "Al cruzar la calle, decid en voz alta: «miro a la izquierda, miro a la derecha».",
  ],
  profesores: PROF("Sentido espacial: localización de objetos y personas con referencias (arriba-abajo, delante-detrás, dentro-fuera, cerca-lejos, derecha-izquierda) y descripción de recorridos sencillos", ["Circuito en el gimnasio con instrucciones de posición.", "Robot de suelo o «robot humano» con tarjetas de flechas.", "Dibujar un plano sencillo del aula y marcar dónde se sienta cada uno."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
