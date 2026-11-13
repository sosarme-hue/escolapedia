// Ciencias Sociales 3º de Primaria: el sistema solar. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, barras, vid, vgen, RD, PROF, sol, estrella, planeta } = require("./_pri3b");

// Fondo de cielo oscuro con estrellitas.
const cielo = (h = 180) => `<rect x="0" y="0" width="260" height="${h}" rx="12" fill="#0f172a"/>${[[20, 30], [60, 160], [100, 24], [150, 168], [200, 30], [240, 150], [228, 60], [36, 120], [130, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2" fill="#fff"/>`).join("")}`;
// Título claro sobre fondo oscuro.
const titB = (s) => et(130, 22, s, 236, { size: 13, color: "#fde68a" });
const txB = (x, y, s, w, o = {}) => et(x, y, s, w, { size: 10, weight: 400, color: "#e2e8f0", ...o });
// Luna en una fase: f de 0 (nueva) a 1 (llena), creciente a la derecha.
const fase = (x, y, r, tipo) => {
  const base = `<circle cx="${x}" cy="${y}" r="${r}" fill="#334155"/>`;
  if (tipo === "llena") return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fde68a"/>`;
  if (tipo === "nueva") return base;
  if (tipo === "creciente") return `${base}<path d="M${x} ${y - r} A${r} ${r} 0 0 1 ${x} ${y + r} A${r * 0.4} ${r} 0 0 0 ${x} ${y - r}z" fill="#fde68a"/>`;
  return `${base}<path d="M${x} ${y - r} A${r} ${r} 0 0 0 ${x} ${y + r} A${r * 0.4} ${r} 0 0 1 ${x} ${y - r}z" fill="#fde68a"/>`;
};

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "El sistema solar",
  minutos: 45,
  objetivos: ["Saber qué es el universo, una galaxia y una estrella", "Describir el sistema solar y nombrar sus ocho planetas en orden", "Distinguir planetas rocosos y gaseosos", "Conocer la Luna, sus fases y otros astros", "Valorar la exploración del espacio y la Tierra como planeta con vida"],
  claves: ["universo", "galaxia", "Vía Láctea", "estrella", "Sol", "planeta", "órbita", "satélite", "Luna", "fases de la Luna", "cometa", "astronauta"],
  pregunta: {
    texto: "Por la noche vemos miles de estrellas pequeñitas y, de día, un Sol enorme. Pero los científicos dicen que el Sol también es una estrella. ¿Cómo puede ser, si es tan diferente?",
    respuesta: "El Sol es una <mark>estrella</mark> igual que las que vemos por la noche: una enorme bola de gas que da <b>luz y calor</b>. La diferencia es que el Sol está <b>muchísimo más cerca</b> de nosotros. Las demás estrellas están tan lejos que las vemos como puntitos. Si nos alejáramos mucho del Sol, también lo veríamos como un puntito brillante.",
  },
  bloques: [
    {
      html: `<h3>El universo</h3><p>El <mark>universo</mark> es <b>todo lo que existe</b>: las estrellas, los planetas, los satélites, el polvo y el gas del espacio, y también nosotros. Es tan grande que nadie sabe dónde termina.</p><p>En el universo, las estrellas se agrupan en enormes conjuntos llamados <mark>galaxias</mark>. Cada galaxia tiene miles de millones de estrellas. Hay galaxias con forma de espiral, con forma ovalada y con formas irregulares.</p><p>Nuestra galaxia se llama la <mark>Vía Láctea</mark>. Tiene forma de espiral, como un remolino. En las noches muy oscuras, lejos de las luces de la ciudad, se ve en el cielo como una franja blanquecina, como si alguien hubiera derramado leche. ¡De ahí viene su nombre!</p><p>Dentro de la Vía Láctea, en uno de sus brazos, está nuestra estrella, el <b>Sol</b>, con todos los planetas que giran a su alrededor. Juntos forman el <b>sistema solar</b>. El sistema solar es solo una parte pequeñísima del universo.</p>`,
      svg: svg("El universo contiene galaxias; nuestra galaxia es la Vía Láctea y en ella está el sistema solar", `${cielo()}${titB("Nuestro lugar en el universo")}<g transform="translate(110 104)">${[0, 1, 2, 3].map((k) => `<path d="M0 0 ${[...Array(30)].map((_, i) => { const a = (i / 30) * Math.PI * 2.4 + (k * Math.PI) / 2, r = 3 + i * 2; return `L${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r * 0.6).toFixed(1)}`; }).join(" ")}" stroke="#c7d2fe" stroke-width="3" fill="none" stroke-opacity=".7"/>`).join("")}<circle r="8" fill="#fef3c7"/></g><circle cx="146" cy="116" r="4" fill="#fbbf24"/>${fl(190, 140, 152, 120, "#fbbf24", 2)}${txB(212, 150, "aquí está el Sol", 90, { weight: 700, color: "#fbbf24" })}${txB(110, 168, "Vía Láctea: nuestra galaxia", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>El Sol, nuestra estrella</h3><p>Las <mark>estrellas</mark> son enormes bolas de <b>gases muy calientes</b> que producen su propia <b>luz y calor</b>. El <mark>Sol</mark> es la estrella más cercana a la Tierra y está en el centro del sistema solar.</p><p>El Sol es gigantesco: dentro de él cabrían más de un millón de planetas como la Tierra. Y está muy caliente: en su superficie hay unos 5.500 grados, y en su interior, millones de grados.</p><p>Aunque el Sol está a unos <b>150 millones de kilómetros</b> de la Tierra, su luz tarda solo unos ocho minutos en llegar hasta nosotros.</p><p>El Sol es imprescindible para la vida:</p><p>• Nos da <b>luz</b>: gracias a él existe el día.<br>• Nos da <b>calor</b>: sin él, la Tierra sería una bola de hielo.<br>• Permite que las <b>plantas</b> fabriquen su alimento.<br>• Produce el <b>viento</b> y la <b>lluvia</b>, al calentar el aire y el agua.</p><p>¡Cuidado! <b>Nunca mires directamente al Sol</b>, ni siquiera con gafas de sol, porque te puede dañar los ojos. Y en verano usa crema protectora y gorra.</p>`,
      svg: svg("El Sol da luz y calor; es mucho más grande que la Tierra", `${tit("El Sol, nuestra estrella")}<circle cx="70" cy="104" r="56" fill="var(--sun)"/><circle cx="70" cy="104" r="44" fill="#fbbf24"/><circle cx="168" cy="104" r="4" fill="var(--water)"/>${et(168, 92, "Tierra", 50, { size: 10.5, color: COL.azul })}${filas([["luz", "el día", COL.sol], ["calor", "temperatura", COL.rojo], ["vida", "seres vivos", COL.verde]], 120, 18, { x: 150, wa: 40, wb: 70 })}`),
      video: vid("wANko2eM_uY"),
    },
    {
      html: `<h3>El sistema solar</h3><p>El <mark>sistema solar</mark> está formado por el <b>Sol</b> y todos los astros que giran a su alrededor: <b>ocho planetas</b>, sus <b>satélites</b>, planetas enanos, asteroides y cometas.</p><p>Los <mark>planetas</mark> son astros grandes y redondos que <b>no tienen luz propia</b>: brillan porque reflejan la luz del Sol. Cada planeta gira alrededor del Sol siguiendo un camino llamado <mark>órbita</mark>. Además, los planetas giran sobre sí mismos, como una peonza.</p><p>Los ocho planetas, ordenados del más cercano al más lejano del Sol, son: <b>Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno</b>.</p><p>Para recordarlos, puedes usar esta frase: «<b>M</b>i <b>V</b>ieja <b>T</b>ía <b>M</b>arta <b>J</b>ugaba <b>S</b>iempre <b>U</b>nas <b>N</b>ueces». La primera letra de cada palabra es la de un planeta.</p><p>Cuanto más lejos del Sol está un planeta, más <b>frío</b> es y más tiempo tarda en dar la vuelta completa alrededor del Sol. Mercurio tarda solo 88 días; la Tierra, un año; ¡y Neptuno, unos 165 años!</p>`,
      svg: svg("El Sol y los ocho planetas en orden: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno", `${cielo()}${titB("Los ocho planetas")}<circle cx="-10" cy="96" r="34" fill="#fbbf24"/>${planeta(36, 96, 3, "#a8a29e", "")}${planeta(52, 96, 5, "#fcd34d", "")}${planeta(70, 96, 5.5, "#3b82f6", "")}${planeta(88, 96, 4, "#ef4444", "")}${planeta(118, 96, 13, "#d6a77a", "")}${planeta(160, 96, 10, "#eab308", "", true)}${planeta(198, 96, 7.5, "#67e8f9", "")}${planeta(228, 96, 7.5, "#6366f1", "")}${["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"].map((n, i) => txB([36, 52, 70, 88, 118, 160, 198, 228][i], i % 2 ? 140 : 126, n, i === 4 ? 40 : 34, { size: 9 })).join("")}${txB(130, 166, "Mi Vieja Tía Marta Jugaba Siempre Unas Nueces", 236, { weight: 700, color: "#fde68a" })}`),
    },
    {
      html: `<h3>Planetas rocosos y gaseosos</h3><p>Los planetas del sistema solar se dividen en dos grupos:</p><p>• Los <mark>planetas rocosos</mark> o interiores son los cuatro <b>más cercanos</b> al Sol: Mercurio, Venus, la Tierra y Marte. Son <b>pequeños</b> y tienen una superficie <b>sólida</b>, de rocas, sobre la que se podría caminar.</p><p>• Los <mark>planetas gaseosos</mark> o exteriores son los cuatro <b>más lejanos</b>: Júpiter, Saturno, Urano y Neptuno. Son <b>gigantes</b> y están formados sobre todo por <b>gases</b>. No tienen un suelo firme. Todos tienen <b>anillos</b>, aunque los más vistosos son los de Saturno, hechos de trozos de hielo y roca.</p><p>Algunas curiosidades:</p><p>• <b>Mercurio</b> es el más pequeño y el más cercano al Sol.<br>• <b>Venus</b> es el más caliente, porque está cubierto de nubes que atrapan el calor. Es el astro más brillante del cielo después del Sol y la Luna.<br>• <b>Marte</b> es el planeta rojo, por el color de sus rocas.<br>• <b>Júpiter</b> es el más grande: dentro cabrían más de mil Tierras.</p>`,
      svg: svg("Planetas rocosos pequeños y planetas gaseosos gigantes", `${tit("Rocosos y gaseosos")}${planeta(24, 86, 6, "#a8a29e", "Mercurio")}${planeta(66, 86, 9, "#fcd34d", "Venus")}${planeta(102, 86, 9, "#3b82f6", "Tierra")}${planeta(136, 86, 7, "#ef4444", "Marte")}${et(78, 50, "rocosos: pequeños", 120, { size: 11, color: COL.marron })}${planeta(40, 146, 18, "#d6a77a", "")}${planeta(108, 146, 15, "#eab308", "", true)}${planeta(170, 146, 11, "#67e8f9", "")}${planeta(220, 146, 11, "#6366f1", "")}${et(196, 50, "gaseosos:", 100, { size: 11, color: COL.morado })}${et(196, 66, "gigantes con anillos", 110, { size: 10.5, color: COL.morado })}${tx(130, 176, "Júpiter · Saturno · Urano · Neptuno", 236)}`),
    },
    {
      html: `<h3>La Tierra, un planeta con vida</h3><p>La <b>Tierra</b> es nuestro planeta. Es el <b>tercero</b> más cercano al Sol y el único del sistema solar donde sabemos que hay <b>vida</b>. Esto es posible porque reúne unas condiciones especiales:</p><p>• Está a la <b>distancia justa</b> del Sol: ni tan cerca que haga un calor insoportable, ni tan lejos que todo esté congelado.<br>• Tiene <b>agua líquida</b>: cubre casi tres cuartas partes de su superficie, en océanos, mares, ríos y lagos. Por eso, desde el espacio, la Tierra se ve azul y la llaman el «planeta azul».<br>• Tiene <b>aire</b> con oxígeno, que forma la <b>atmósfera</b>, una capa que nos protege de los rayos peligrosos del Sol y de los trozos de roca que vienen del espacio.</p><p>La Tierra tiene forma de <b>esfera</b>, como una pelota, un poco achatada por los polos. Como es tan grande, desde el suelo nos parece plana.</p><p>La Tierra es nuestra casa y no tenemos otra. Por eso debemos cuidarla: no contaminar el aire ni el agua, ahorrar energía y proteger a los seres vivos.</p>`,
      svg: svg("La Tierra: distancia justa al Sol, agua líquida y aire", `${tit("Un planeta con vida")}<circle cx="70" cy="104" r="48" fill="var(--water)"/><path d="M40 84 q12 -12 24 -4 q8 14 -6 20 q-12 4 -18 -16z M74 72 q16 -6 22 10 q-4 12 -16 8z M70 118 q14 -6 22 8 q-6 16 -22 10z" fill="var(--leaf)"/><circle cx="70" cy="104" r="54" fill="none" stroke="var(--water)" stroke-opacity=".4" stroke-width="5"/>${filas([["distancia", "ni frío ni calor", COL.sol], ["agua", "líquida: planeta azul", COL.azul], ["aire", "atmósfera con oxígeno", COL.verde]], 70, 32, { x: 140, wa: 70, wb: 110, dos: true })}`),
    },
    {
      html: `<h3>La Luna, nuestro satélite</h3><p>Los <mark>satélites</mark> son astros que giran alrededor de un planeta. La Tierra tiene un satélite natural: la <mark>Luna</mark>. Otros planetas tienen muchos: ¡Saturno y Júpiter tienen decenas de lunas!</p><p>La Luna es mucho más pequeña que la Tierra. No tiene luz propia: brilla porque refleja la luz del Sol. No tiene aire ni agua líquida, por eso no hay vida. Su superficie está llena de <b>cráteres</b>, unos agujeros que hicieron las rocas del espacio al chocar contra ella.</p><p>La Luna tarda unos <b>28 días</b> en dar una vuelta completa alrededor de la Tierra. Mientras gira, el Sol ilumina partes distintas de ella, y por eso la vemos con formas diferentes. Son las <mark>fases de la Luna</mark>:</p><p>• <b>Luna nueva</b>: no se ve.<br>• <b>Cuarto creciente</b>: se ve la mitad derecha, con forma de D.<br>• <b>Luna llena</b>: se ve redonda y completa.<br>• <b>Cuarto menguante</b>: se ve la mitad izquierda, con forma de C.</p><p>Un truco para recordarlo: la Luna es <b>mentirosa</b>. Cuando tiene forma de C, no está «creciendo», sino menguando; y cuando parece una D, está creciendo.</p>`,
      svg: svg("Fases de la Luna: nueva, cuarto creciente, llena y cuarto menguante", `${cielo()}${titB("Las fases de la Luna")}${fase(38, 92, 20, "nueva")}${fase(100, 92, 20, "creciente")}${fase(162, 92, 20, "llena")}${fase(224, 92, 20, "menguante")}${txB(38, 132, "nueva", 60, { weight: 700 })}${txB(100, 132, "creciente (D)", 64, { weight: 700 })}${txB(162, 132, "llena", 60, { weight: 700 })}${txB(224, 132, "menguante (C)", 64, { weight: 700 })}${txB(130, 162, "una vuelta a la Tierra: unos 28 días", 220)}`),
      video: vid("ma0kKMc9PbE"),
    },
    {
      html: `<h3>Otros astros del sistema solar</h3><p>Además del Sol, los planetas y los satélites, en el sistema solar hay otros astros:</p><p>• Los <mark>planetas enanos</mark>: son parecidos a los planetas, pero más pequeños. El más famoso es <b>Plutón</b>, que hasta 2006 se consideraba el noveno planeta.</p><p>• Los <mark>asteroides</mark>: son rocas de distintos tamaños que giran alrededor del Sol. La mayoría están entre Marte y Júpiter, formando el <b>cinturón de asteroides</b>.</p><p>• Los <mark>cometas</mark>: son bolas de hielo, polvo y roca que viajan alrededor del Sol en órbitas muy alargadas. Cuando se acercan al Sol, el hielo se calienta y les sale una larga <b>cola</b> brillante. El cometa Halley se ve desde la Tierra cada 76 años.</p><p>• Los <mark>meteoritos</mark>: son trocitos de roca del espacio que entran en la atmósfera de la Tierra. Al rozar con el aire se calientan y brillan: son las <b>estrellas fugaces</b>. La mayoría se deshacen antes de llegar al suelo. En agosto se pueden ver muchas, son las Perseidas o «lágrimas de San Lorenzo».</p>`,
      svg: svg("Cometa con cola, asteroides y una estrella fugaz", `${cielo()}${titB("Cometas y asteroides")}<path d="M60 70 L200 40 L200 54z" fill="#e0f2fe" fill-opacity=".5"/><circle cx="60" cy="70" r="8" fill="#e0f2fe"/>${txB(60, 92, "cometa", 60, { weight: 700 })}${[[150, 120, 7], [172, 112, 4], [188, 126, 5], [210, 116, 3], [134, 128, 3]].map(([x, y, r]) => `<path d="M${x - r} ${y} q${r} ${-r * 1.3} ${2 * r} 0 q${-r * 0.4} ${r * 1.2} ${-2 * r} 0z" fill="#a8a29e"/>`).join("")}${txB(172, 146, "asteroides", 80, { weight: 700 })}<path d="M30 150 l50 -26" stroke="#fde68a" stroke-width="2"/><circle cx="80" cy="124" r="3" fill="#fde68a"/>${txB(54, 164, "estrella fugaz", 90, { weight: 700, color: "#fde68a" })}`),
    },
    {
      html: `<h3>Explorando el espacio</h3><p>Desde siempre, las personas han mirado al cielo con curiosidad. Los científicos que estudian los astros se llaman <mark>astrónomos</mark>, y usan <b>telescopios</b>, unos instrumentos que hacen que los objetos lejanos se vean más cerca y más grandes. En España hay observatorios muy importantes en Canarias, porque allí el cielo es muy limpio.</p><p>Hace unos setenta años, las personas empezaron a viajar al espacio:</p><p>• En 1957 se lanzó el primer <b>satélite artificial</b>, el Sputnik.<br>• En 1961, <b>Yuri Gagarin</b> fue el primer <b>astronauta</b> en viajar al espacio.<br>• En 1969, <b>Neil Armstrong</b> fue la primera persona que pisó la Luna.</p><p>Hoy, muchos astronautas viven durante meses en la <b>Estación Espacial Internacional</b>, que da vueltas alrededor de la Tierra. El español <b>Pedro Duque</b> fue astronauta y viajó dos veces al espacio.</p><p>También enviamos <b>sondas</b> y robots sin personas a otros planetas. Varios robots recorren Marte haciendo fotos y analizando sus rocas. Y alrededor de la Tierra giran miles de satélites artificiales que sirven para la televisión, el GPS o saber el tiempo que hará.</p>`,
      svg: svg("Línea del tiempo de la exploración espacial: Sputnik 1957, Gagarin 1961, la Luna 1969", `${tit("Viajes al espacio")}<g transform="translate(40 96)"><path d="M0 -40 q12 14 12 40 h-24 q0 -26 12 -40z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/><circle cy="-14" r="5" fill="var(--water)"/><path d="M-12 0 l-8 12 h8z M12 0 l8 12 h-8z" fill="var(--red)"/><path d="M-6 0 l6 16 l6 -16z" fill="var(--sun)"/></g>${filas([["1957", "primer satélite", COL.gris], ["1961", "Gagarin, primer astronauta", COL.rojo], ["1969", "Armstrong pisa la Luna", COL.azul], ["hoy", "estación espacial y robots", COL.verde]], 56, 30, { x: 84, wa: 40, wb: 130 })}`),
    },
    {
      html: `<h3>¡Repasamos jugando!</h3><p>Vamos a hacer un <b>modelo del sistema solar</b> en el patio o en el pasillo del colegio:</p><p>1. Un compañero hace de <b>Sol</b> y se coloca en el centro con una pelota amarilla grande.<br>2. Otros ocho compañeros son los <b>planetas</b>. Cada uno lleva un cartel con su nombre y se coloca en orden, cada vez más lejos del Sol.<br>3. Los planetas caminan despacio en círculo alrededor del Sol: es su <b>órbita</b>. Los más cercanos dan la vuelta antes.<br>4. Mientras caminan, giran sobre sí mismos.<br>5. Un compañero hace de <b>Luna</b> y da vueltas alrededor del planeta Tierra.</p><p>Comprueba lo que has aprendido:</p><p>• ¿Qué planeta va justo después de la Tierra? → Marte.<br>• ¿Cuál es el más grande? → Júpiter.<br>• ¿Cuál tiene los anillos más bonitos? → Saturno.<br>• ¿Qué astro da luz y calor? → El Sol.<br>• ¿Qué es la Luna? → El satélite de la Tierra.</p>`,
      svg: svg("Juego: niños como planetas girando alrededor de un niño que hace de Sol", `${tit("Modelo en el patio")}${[30, 50, 70].map((r) => `<ellipse cx="130" cy="106" rx="${r * 1.6}" ry="${r}" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>`).join("")}<circle cx="130" cy="106" r="16" fill="var(--sun)"/>${et(130, 110, "Sol", 26, { size: 10 })}${planeta(178, 106, 6, "#ef4444", "")}${planeta(80, 74, 6, "#3b82f6", "")}${planeta(190, 150, 9, "#d6a77a", "")}${planeta(38, 120, 7, "#eab308", "", true)}${et(178, 92, "Marte", 40, { size: 9.5, color: COL.rojo })}${et(80, 60, "Tierra", 40, { size: 9.5, color: COL.azul })}`),
    },
  ],
  figura: {
    titulo: "El sistema solar en ocho ideas",
    svg: rejilla([
      ["Universo", "todo lo que existe", COL.morado],
      ["Vía Láctea", "nuestra galaxia", COL.azul],
      ["Sol", "estrella: luz y calor", COL.sol],
      ["8 planetas", "giran en órbitas", COL.naranja],
      ["Rocosos", "Mercurio a Marte", COL.marron],
      ["Gaseosos", "Júpiter a Neptuno", COL.agua],
      ["Tierra", "agua, aire y vida", COL.verde],
      ["Luna", "satélite con fases", COL.gris],
    ], 4, 86, "Resumen del sistema solar"),
  },
  video: vgen("e07dXmHUspU", "el sistema solar para niños"),
  ejemplos: [
    { enunciado: "Ordena los planetas de más cerca a más lejos del Sol: Tierra, Júpiter, Mercurio, Neptuno, Marte.",
      pasos: ["Usa la frase: Mi Vieja Tía Marta Jugaba Siempre Unas Nueces.", "Mercurio (M), Tierra (T), Marte (M), Júpiter (J), Neptuno (N)."],
      resultado: "Mercurio, Tierra, Marte, Júpiter, Neptuno." },
    { enunciado: "Ves la Luna con forma de C. ¿Está creciendo o menguando?",
      pasos: ["La Luna es «mentirosa».", "Si parece una C, no está creciendo: está menguando."],
      resultado: "Está en cuarto menguante." },
    { enunciado: "Mercurio tarda 88 días en dar la vuelta al Sol y la Tierra 365. ¿Cuántos días más tarda la Tierra?",
      pasos: ["Restamos: 365 − 88 = 277."],
      resultado: "277 días más." },
  ],
  errores: [
    "Pensar que el Sol es un planeta: es una estrella.",
    "Creer que la Luna tiene luz propia: refleja la luz del Sol.",
    "Pensar que Plutón sigue siendo el noveno planeta: es un planeta enano.",
    "Confundir creciente y menguante: la C es menguante y la D es creciente.",
  ],
  ejercicios: [
    { q: "¿Qué es el universo?", sol: "Todo lo que existe: estrellas, planetas, galaxias, gas y polvo del espacio, y nosotros." },
    { q: "¿Cómo se llama nuestra galaxia? ¿Qué forma tiene?", sol: "La Vía Láctea. Tiene forma de espiral." },
    { q: "¿Qué es una estrella? Escribe la más cercana a la Tierra.", sol: "Una enorme bola de gases muy calientes que da luz y calor. La más cercana es el Sol." },
    { q: "Escribe los ocho planetas en orden.", sol: "Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno." },
    { q: "¿Qué es una órbita?", sol: "El camino que sigue un planeta al girar alrededor del Sol (o un satélite alrededor de un planeta)." },
    { q: "¿Qué diferencia hay entre los planetas rocosos y los gaseosos?", sol: "Los rocosos son pequeños, cercanos al Sol y de superficie sólida; los gaseosos son gigantes, lejanos y de gases." },
    { q: "¿Por qué hay vida en la Tierra?", sol: "Porque está a la distancia justa del Sol, tiene agua líquida y aire con oxígeno." },
    { q: "Escribe las cuatro fases de la Luna.", sol: "Luna nueva, cuarto creciente, luna llena y cuarto menguante." },
    { q: "¿Qué es una estrella fugaz?", sol: "Un trocito de roca del espacio que brilla al entrar en la atmósfera de la Tierra (un meteorito)." },
    { q: "¿Quién fue la primera persona en pisar la Luna y en qué año?", sol: "Neil Armstrong, en 1969." },
  ],
  quiz: [
    { q: "El Sol es…", o: ["un planeta", "una estrella", "un satélite"], a: 1, e: "Una estrella." },
    { q: "Nuestra galaxia es la…", o: ["Vía Láctea", "Osa Mayor", "Luna"], a: 0, e: "La Vía Láctea." },
    { q: "¿Cuántos planetas tiene el sistema solar?", o: ["siete", "ocho", "nueve"], a: 1, e: "Ocho." },
    { q: "El planeta más cercano al Sol es…", o: ["Mercurio", "Venus", "Marte"], a: 0, e: "Mercurio." },
    { q: "El planeta más grande es…", o: ["Saturno", "Júpiter", "la Tierra"], a: 1, e: "Júpiter." },
    { q: "El planeta rojo es…", o: ["Marte", "Venus", "Urano"], a: 0, e: "Marte." },
    { q: "La Tierra es el planeta número…", o: ["dos", "tres", "cuatro"], a: 1, e: "El tercero." },
    { q: "La Luna es un…", o: ["satélite", "planeta", "cometa"], a: 0, e: "Un satélite." },
    { q: "Cuando la Luna se ve completa es…", o: ["luna nueva", "luna llena", "cuarto menguante"], a: 1, e: "Luna llena." },
    { q: "Los astros con cola brillante son los…", o: ["cometas", "planetas", "satélites"], a: 0, e: "Los cometas." },
  ],
  examen: [
    { q: "Los planetas brillan porque…", o: ["reflejan la luz del Sol", "tienen fuego", "son estrellas"], a: 0, e: "Reflejan la luz del Sol." },
    { q: "Plutón es un…", o: ["planeta enano", "satélite de la Tierra", "cometa"], a: 0, e: "Un planeta enano." },
    { q: "La Luna tarda en dar la vuelta a la Tierra unos…", o: ["28 días", "365 días", "24 horas"], a: 0, e: "Unos 28 días." },
    { q: "Pedro Duque fue un…", o: ["astronauta español", "planeta", "telescopio"], a: 0, e: "Un astronauta español." },
  ],
  feynman: ["Qué es el sistema solar", "Los ocho planetas en orden con la frase para recordarlos", "Por qué la Luna cambia de forma"],
  mapa: mapa("SISTEMA SOLAR", "var(--pri)", [
    ["Sol", "estrella · luz y calor", COL.sol],
    ["Planetas", "rocosos · gaseosos", COL.naranja],
    ["Luna", "satélite · fases", COL.gris],
    ["Otros astros", "cometas · asteroides", COL.morado],
  ], 250),
  tarjetas: [
    ["Universo", "Todo lo que existe."],
    ["Galaxia", "Conjunto enorme de estrellas: la Vía Láctea."],
    ["Estrella", "Bola de gas que da luz y calor: el Sol."],
    ["Planeta", "Astro sin luz propia que gira alrededor del Sol."],
    ["Órbita", "Camino que sigue un astro al girar."],
    ["Satélite", "Astro que gira alrededor de un planeta."],
    ["Fases de la Luna", "Nueva, creciente, llena y menguante."],
    ["Cometa", "Bola de hielo y polvo con cola brillante."],
  ],
  familias: ["Observad la Luna durante un mes y dibujad su forma cada pocos días.", "Buscad una noche oscura lejos de la ciudad para ver las estrellas y la Vía Láctea.", "Visitad un planetario o un museo de la ciencia.", "Haced juntos un móvil del sistema solar con bolas de papel pintadas."],
  profesores: PROF("Ciencias Sociales: el universo, las galaxias y el sistema solar; el Sol; los planetas y sus características; la Tierra; la Luna y sus fases; otros astros; la exploración espacial", ["Modelo vivo del sistema solar en el patio.", "Diario lunar de un mes con dibujos de las fases.", "Maqueta del sistema solar a escala aproximada de distancias."]),
  fuentes: [RD, wiki("Sistema solar", "Sistema solar"), wiki("Luna", "Luna"), wiki("Vía Láctea", "Vía Láctea")],
  revisado: REV,
};
