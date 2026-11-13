// Comunicación y representación, Infantil 4 años: trazos rectos, curvos y en espiral.
const { mapa } = require("./_util");
const { svg, rot, nino, sol, suelo, trazo, ic, dibujos, mural, vid, R, A, V, N, M, W, G, PROF, FUENTES } = require("./_inf4b");

// Tarjeta del mural con un trazo dibujado en vez de un icono.
const muralTrazos = (label, items, cab) => `<svg viewBox="0 0 640 300" role="img" aria-label="${label}"><rect width="640" height="300" rx="16" fill="var(--paper)"/>
  <text x="320" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink)">${cab}</text>
  ${items.map(([t, p, c], i) => { const x = 20 + i * 155; return `<rect x="${x}" y="48" width="140" height="232" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 70, c)}<text x="${x + 70}" y="255" text-anchor="middle" font-size="22" font-weight="800" fill="${c}">${p}</text>`; }).join("")}</svg>`;

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Trazos: rectos, curvos y en espiral",
  minutos: 15,
  objetivos: ["Hacer trazos rectos, de arriba abajo y de izquierda a derecha", "Hacer trazos curvos y en ondas", "Dibujar una espiral desde el centro hacia fuera"],
  claves: ["trazo", "recto", "curvo", "ondas", "espiral", "zigzag"],
  pregunta: {
    texto: "¿Cómo es el camino de una hormiga? ¿Y el de una ola del mar? ¿Y la casa de un caracol?",
    respuesta: "La hormiga va <mark>recta</mark>, la ola hace <mark>curvas</mark> y el caracol tiene una <mark>espiral</mark>. ¡Son trazos!",
  },
  bloques: [
    {
      html: `<h3>Trazos rectos</h3><p>Un trazo <mark>recto</mark> no se tuerce. Va derecho, como la lluvia que cae.</p><p>Lo hacemos de <b>arriba abajo</b> y de <b>izquierda a derecha</b>.</p><p>Primero en el aire, luego con el lápiz.</p>`,
      svg: svg("Rayas verticales como lluvia y una raya horizontal como un camino", `${ic("nube", 70, 34, 1.6)}${[40, 60, 80, 100].map((x) => trazo("vertical", x, 60, 60, W)).join("")}${trazo("recto", 150, 90, 90, R)}${ic("hormiga", 245, 90, 0.7)}${rot(70, 160, "de arriba abajo", { color: W })}${rot(195, 160, "de lado", { color: R })}`),
    },
    {
      html: `<h3>Trazos curvos</h3><p>Un trazo <mark>curvo</mark> es redondeado, como un arco o una ola.</p><p>Si hacemos muchas curvas seguidas, salen <b>ondas</b>, como el mar o una serpiente.</p><p>¡Mueve el brazo suave, como el agua!</p>`,
      svg: svg("Unas ondas de mar con un barco y un arco de colores", `<path d="M50 100 A80 70 0 0 1 210 100" stroke="var(--red)" stroke-width="6" fill="none"/><path d="M64 100 A66 56 0 0 1 196 100" stroke="var(--sun)" stroke-width="6" fill="none"/>${ic("barco", 130, 112, 1)}${trazo("ondas", 30, 136, 200, W)}${rot(130, 168, "arcos y ondas", { color: W })}`),
    },
    {
      html: `<h3>Trazos en zigzag</h3><p>El <mark>zigzag</mark> sube y baja con picos, como los dientes de un cocodrilo o una montaña.</p><p>Arriba, abajo, arriba, abajo.</p><p>Se hace con rayas rectas que cambian de camino.</p>`,
      svg: svg("Un zigzag como unas montañas con el sol encima", `${sol(210, 40, 14)}${trazo("zigzag", 30, 110, 200, V)}${trazo("zigzag", 30, 130, 200, V, true)}${rot(130, 166, "arriba, abajo, arriba…", { color: V })}`),
    },
    {
      html: `<h3>La espiral</h3><p>La <mark>espiral</mark> da vueltas y vueltas, cada vez más grande.</p><p>Empieza en el <b>centro</b>, como un puntito, y va saliendo hacia fuera.</p><p>Es como la casa del caracol o un remolino.</p>`,
      svg: svg("Una espiral grande que empieza en un punto rojo y un caracol al lado", `<circle cx="90" cy="85" r="6" fill="var(--red)"/>${trazo("espiral", 90, 85, 120, N)}${ic("caracol", 205, 100, 1.6)}${rot(90, 166, "empieza en el centro", { color: R })}${rot(205, 166, "caracol", { color: G })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los trazos preparan la mano para <mark>dibujar y escribir</mark>.</p><p>Las letras están hechas de trazos: la <b>i</b> es recta, la <b>o</b> es curva.</p><p>¡Cuanto más jugamos con trazos, más fuerte y ágil está la mano!</p>`,
      svg: svg("Un lápiz y una mano; la i está hecha de un trazo recto y la o de un trazo curvo", `${ic("lapiz", 40, 80, 1.4)}<path d="M100 60 V120" stroke="var(--leaf)" stroke-width="9" stroke-linecap="round"/><circle cx="100" cy="42" r="7" fill="var(--leaf)"/><circle cx="160" cy="90" r="30" fill="none" stroke="var(--inf)" stroke-width="9"/>${ic("mano", 225, 85, 1.4)}${rot(100, 150, "recto", { color: V })}${rot(160, 150, "curvo", { color: N })}${rot(130, 172, "Las letras están hechas de trazos", { color: A })}`),
    },
    {
      html: `<h3>Juego: trazos con el cuerpo</h3><p>Ponemos <mark>música</mark>. Con una cinta o un pañuelo dibujamos en el aire.</p><p>Música lenta: ondas suaves. Música rápida: zigzag.</p><p>Al final hacemos una espiral gigante en el suelo y caminamos por ella.</p>`,
      svg: svg("Un niño baila con una cinta que dibuja ondas en el aire", `${nino(90, 150, { pose: "baila", c: A, s: 1.2 })}<path d="M108 76 q20 -30 40 0 t40 0 t40 0" stroke="var(--red)" stroke-width="5" fill="none" stroke-linecap="round"/>${suelo(150)}${rot(130, 172, "¡Dibujamos en el aire!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Cuatro trazos",
    svg: muralTrazos("Cuatro tarjetas: trazo recto, trazo curvo en ondas, zigzag y espiral", [
      [(x, c) => `<path d="M${x - 45} 150 H${x + 45}" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`, "recto", R],
      [(x, c) => trazo("ondas", x - 50, 150, 100, c).replace('stroke-width="4"', 'stroke-width="7"'), "ondas", W],
      [(x, c) => trazo("zigzag", x - 50, 160, 100, c).replace('stroke-width="4"', 'stroke-width="7"'), "zigzag", V],
      [(x, c) => trazo("espiral", x, 145, 100, c).replace('stroke-width="4"', 'stroke-width="6"'), "espiral", N],
    ], "Trazos para preparar la mano"),
  },
  video: { ...vid("qDT2Qr14c6s", "Dibujar formas | Trazos", "Pinkfong en español", 1994374), busqueda: "grafomotricidad trazos infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibujamos la lluvia.", pasos: ["Ponemos el lápiz arriba, debajo de la nube.", "Bajamos recto, sin levantar el lápiz.", "Hacemos muchas rayas, una al lado de otra."], resultado: "¡ya llueve en el papel!" },
    { enunciado: "Dibujamos la casa del caracol.", pasos: ["Hacemos un puntito en el centro.", "Damos vueltas alrededor, cada vez más grandes."], resultado: "una espiral, como la del caracol." },
  ],
  errores: [
    "Apretar mucho el lápiz: la mano se cansa. Mejor suave y suelto.",
    "Empezar la espiral por fuera: se empieza en el centro.",
    "Coger el lápiz con todo el puño: mejor con los dedos índice y pulgar, ayudados del corazón.",
  ],
  ejercicios: [
    { q: "Haz trazos rectos en un papel grande con ceras.", sol: "Para la familia: papel grande en la pared o el suelo; el brazo se mueve mejor." },
    { q: "Dibuja ondas en una bandeja con arena o harina.", sol: "Para la familia: con el dedo índice, de izquierda a derecha." },
    { q: "Repasa un zigzag hecho con cinta en el suelo, caminando.", sol: "Para la familia: primero con el cuerpo, luego en el papel." },
    { q: "Haz una espiral con plastilina.", sol: "Un churro largo enrollado desde el centro." },
    { q: "Dibuja la lluvia y el mar.", sol: "Rayas rectas para la lluvia y ondas para el mar." },
    { q: "Rasga papel en tiras y pégalas rectas.", sol: "Para la familia: rasgar fortalece los dedos para el lápiz." },
  ],
  quiz: [
    { q: "La lluvia cae con trazos…", o: ["Rectos", "En espiral", "Redondos"], a: 0, e: "Cae recta, de arriba abajo." },
    { q: "La casa del caracol es una…", o: ["Raya", "Espiral", "Zigzag"], a: 1, e: "Da vueltas: es una espiral." },
    { q: "Las olas del mar son…", o: ["Ondas", "Puntos", "Cuadrados"], a: 0, e: "Suben y bajan suaves: ondas." },
    { q: "La espiral empieza…", o: ["En el centro", "Fuera", "Abajo"], a: 0, e: "Desde un puntito en el centro." },
    { q: "Con picos, arriba y abajo, es un…", o: ["Zigzag", "Círculo", "Punto"], a: 0, e: "El zigzag tiene picos." },
    { q: "Los trazos nos preparan para…", o: ["Escribir", "Dormir", "Comer"], a: 0, e: "Las letras están hechas de trazos." },
  ],
  examen: [
    { q: "La letra o es un trazo…", o: ["Curvo", "Recto", "En zigzag"], a: 0, e: "La o es redonda." },
    { q: "Para hacer la lluvia vamos…", o: ["De arriba abajo", "De abajo arriba", "En círculo"], a: 0, e: "Como cae el agua." },
    { q: "El lápiz se coge…", o: ["Suave, con los dedos", "Con fuerza, con el puño", "Con la boca"], a: 0, e: "Pinza suave con los dedos." },
  ],
  feynman: ["Enseña a alguien a hacer una espiral", "Dibuja en el aire un recto, una onda y un zigzag"],
  mapa: mapa("TRAZOS", "var(--inf)", [
    ["Recto", "como la lluvia", R],
    ["Curvo", "como las olas", A],
    ["Zigzag", "como montañas", V],
    ["Espiral", "como el caracol", N],
  ], 220),
  tarjetas: [
    ["¿Cómo es el trazo de la lluvia?", "Recto"],
    ["¿Cómo es el trazo de las olas?", "Curvo, en ondas"],
    ["¿Qué trazo tiene picos?", "El zigzag"],
    ["¿Qué trazo tiene el caracol?", "La espiral"],
    ["¿Dónde empieza la espiral?", "En el centro"],
    ["¿Para qué sirven los trazos?", "Para dibujar y escribir"],
  ],
  familias: [
    "Dibujad con tiza en la acera: caminos rectos, ondas y espirales para recorrer.",
    "Usad una bandeja con sal o harina para hacer trazos con el dedo.",
    "Dejad que pinte en vertical (papel pegado en la pared): fortalece el hombro y la muñeca.",
    "Jugad con plastilina, pinzas y rasgar papel: preparan los dedos para el lápiz.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: lenguaje plástico y grafomotricidad, control del trazo (recto, curvo, zigzag, espiral), direccionalidad y coordinación visomotora", ["Circuitos de trazos con cinta adhesiva en el suelo.", "Dibujo rítmico con música lenta y rápida.", "Bandejas sensoriales de arena para el trazo con el dedo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
