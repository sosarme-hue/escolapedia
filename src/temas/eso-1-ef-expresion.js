// Educación Física 1º ESO: expresión corporal y ritmo. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Expresión corporal y ritmo",
  minutos: 45,
  objetivos: ["Usar el cuerpo como medio de comunicación y expresión", "Conocer los recursos expresivos: cuerpo, espacio, tiempo y energía", "Practicar el mimo y la dramatización sencilla", "Moverse siguiendo un ritmo y crear una coreografía en grupo"],
  claves: ["expresión corporal", "lenguaje no verbal", "mimo", "ritmo", "coreografía", "desinhibición"],
  pregunta: {
    texto: "Sin decir una palabra, ¿puedes saber si un amigo está enfadado, triste o contento?",
    respuesta: "Casi siempre sí. Lo dicen su <b>cara</b>, su <b>postura</b>, sus <b>gestos</b> y su forma de moverse. Es el <b>lenguaje no verbal</b>, y se calcula que <mark>gran parte de lo que comunicamos no lo decimos con palabras</mark>. La <b>expresión corporal</b> es el arte de usar ese lenguaje de forma consciente para comunicar y crear.",
  },
  bloques: [
    {
      html: `<h3>El cuerpo comunica</h3><p>La <b>expresión corporal</b> es la disciplina que usa el cuerpo y el movimiento para <b>expresar</b> emociones, ideas y sensaciones y para <b>comunicarse</b> con los demás.</p><p>Nos comunicamos con:</p><ul><li><b>El rostro</b>: cejas, ojos, boca. Es lo primero que miramos.</li><li><b>Los gestos</b>: con las manos y los brazos (saludar, señalar, pedir silencio).</li><li><b>La postura</b>: erguida transmite seguridad; encorvada, tristeza o cansancio.</li><li><b>La mirada</b> y la <b>distancia</b> con el otro.</li></ul><p>En Educación Física la expresión corporal no busca ser actor profesional, sino <b>conocerse</b>, <b>desinhibirse</b> y disfrutar comunicando sin miedo al ridículo.</p>`,
      svg: svg("Tres muñecos con posturas que expresan emociones: alegría con los brazos arriba, tristeza encorvado y enfado con los brazos en jarras", `${persona(50, 40, "var(--sun)", { brazos: [[-16, -20], [16, -20]], piernas: [[-12, 28], [12, 28]] })}<path d="M45 42 Q 50 47 55 42" stroke="var(--sun)" stroke-width="1.6" fill="none"/>${t(50, 120, "alegría", { s: 11, c: "var(--sun)" })}<g transform="rotate(12 130 80)">${persona(130, 46, "var(--pen)", { brazos: [[-6, 18], [6, 18]], piernas: [[-6, 28], [6, 28]] })}</g>${t(130, 120, "tristeza", { s: 11, c: "var(--pen)" })}${persona(210, 40, "var(--red)", { brazos: [[-14, 14], [14, 14]], piernas: [[-14, 28], [14, 28]] })}<path d="M196 68 L 202 58 M224 68 L 218 58" stroke="var(--red)" stroke-width="3" stroke-linecap="round"/>${t(210, 120, "enfado", { s: 11, c: "var(--red)" })}${t(130, 152, "la postura habla antes que la voz", { s: 10, c: "var(--muted)" })}`, 166),
    },
    {
      html: `<h3>Los recursos expresivos</h3><p>Para expresarnos combinamos cuatro elementos:</p>${tabla(["Recurso", "Qué es", "Posibilidades"], [["Cuerpo", "las partes que movemos", "cabeza, tronco, brazos, piernas; aisladas o en conjunto"], ["Espacio", "dónde nos movemos", "niveles (alto, medio, bajo), direcciones, trayectorias, cerca o lejos"], ["Tiempo", "cuándo y a qué velocidad", "rápido o lento, ritmo, pausas, acelerar"], ["Energía", "con qué intensidad", "fuerte o suave, tenso o relajado, brusco o fluido"]])}<p>Un mismo gesto cambia por completo de significado si varía uno de estos elementos: decir adiós con la mano lento y suave transmite pena; rápido y enérgico, alegría.</p>`,
    },
    {
      html: `<h3>El espacio y los niveles</h3><p>El <b>espacio</b> se puede usar de muchas maneras:</p><ul><li><b>Espacio personal</b>: la «burbuja» que nos rodea y que alcanzamos con brazos y piernas sin desplazarnos.</li><li><b>Espacio total</b>: toda la sala, por donde nos desplazamos.</li><li><b>Niveles</b>: alto (de puntillas, saltando), medio (de pie) y bajo (agachado, en el suelo).</li><li><b>Trayectorias</b>: rectas, curvas, en zigzag, en espiral.</li></ul><p>Ejercicio: desplázate por la sala cambiando de nivel cada vez que suene una palmada y de trayectoria con cada pitido, sin chocar con nadie.</p>`,
      svg: svg("Tres muñecos en los tres niveles del espacio: alto de puntillas con brazos arriba, medio de pie y bajo agachado", `<path d="M14 150 H 246" stroke="var(--line)" stroke-width="3"/>${persona(50, 30, "var(--sun)", { brazos: [[-12, -22], [12, -22]], piernas: [[-4, 36], [4, 36]] })}${persona(130, 64, "var(--leaf)")}<g stroke="var(--pen)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="210" cy="104" r="7" fill="var(--pen)" fill-opacity=".2"/><path d="M210 111 L 206 130 L 224 134 L 218 150 M206 130 L 192 140 L 196 150 M208 118 L 226 124"/></g>${t(50, 170, "alto", { s: 11, c: "var(--sun)" })}${t(130, 170, "medio", { s: 11, c: "var(--leaf)" })}${t(210, 170, "bajo", { s: 11, c: "var(--pen)" })}`),
    },
    {
      html: `<h3>El mimo</h3><p>El <b>mimo</b> es el arte de contar historias y representar acciones <b>solo con el cuerpo</b>, sin palabras ni objetos reales. El mimo hace «ver» lo que no existe.</p><p>Técnicas básicas:</p><ul><li><b>El punto fijo</b>: la mano se queda quieta en el aire como si tocara algo sólido (una pared, una cuerda).</li><li><b>La pared invisible</b>: palmas planas que se apoyan y se «despegan» en otro punto.</li><li><b>Tirar de la cuerda</b>: manos que agarran y tiran, con el cuerpo inclinado por el esfuerzo.</li><li><b>Exagerar</b> las expresiones del rostro para que se vean de lejos.</li></ul><p>La <b>pantomima</b> es la representación de una historia completa con mimo. Requiere observar bien cómo hacemos las acciones de la vida diaria.</p>`,
      video: vb("expB"),
    },
    {
      html: `<h3>Dramatización y juego simbólico</h3><p>La <b>dramatización</b> es representar una situación o un personaje usando el cuerpo y, si se quiere, la voz. Algunas actividades:</p><ul><li><b>Estatuas</b>: congelar el cuerpo expresando una emoción o una palabra.</li><li><b>El espejo</b>: por parejas, uno imita exactamente los movimientos del otro, despacio.</li><li><b>Adivina la acción</b>: un compañero representa una profesión o un deporte y los demás adivinan.</li><li><b>Fotografías</b>: en grupo, formar una escena congelada (una boda, un partido, una tormenta).</li><li><b>Improvisaciones</b>: con un comienzo dado («estáis en un ascensor que se para…»).</li></ul><p>Todas exigen <b>respeto</b>: nadie se ríe de nadie; nos reímos <b>con</b> los demás.</p>`,
    },
    {
      html: `<h3>El ritmo y el movimiento</h3><p>El <b>ritmo</b> es la organización del movimiento en el tiempo, de forma ordenada y repetida. Nuestro cuerpo tiene ritmos propios: el corazón, la respiración, los pasos.</p><ul><li>El <b>pulso</b> es el latido regular de la música: lo marcamos con el pie o con palmas.</li><li>Las canciones se suelen agrupar en <b>frases de 8 tiempos</b>: por eso los bailarines cuentan «5, 6, 7, 8» antes de empezar.</li><li>Moverse a ritmo exige escuchar y <b>coordinar</b> brazos y piernas.</li></ul><p>Ejercicios: caminar marcando el pulso de una música; cambiar de dirección cada 8 tiempos; responder con palmas a ritmos del profesor; crear patrones de <b>percusión corporal</b>.</p>`,
      svg: svg("Contar ocho tiempos: ocho huellas alternando pie izquierdo y derecho con los números del 1 al 8", `${[...Array(8)].map((_, i) => `<ellipse cx="${26 + i * 30}" cy="${i % 2 ? 66 : 96}" rx="9" ry="15" fill="${i === 0 ? "var(--red)" : "var(--pen)"}" fill-opacity="${i === 0 ? 0.7 : 0.35}" stroke="${i === 0 ? "var(--red)" : "var(--pen)"}" stroke-width="1.5"/>${t(26 + i * 30, 132, String(i + 1), { s: 13, c: i === 0 ? "var(--red)" : "var(--ink)" })}`).join("")}${t(130, 30, "una frase de 8 tiempos", { s: 11 })}${t(130, 158, "el 1 lleva el acento", { s: 10, c: "var(--red)" })}`, 170),
      video: vb("expB2"),
    },
    {
      html: `<h3>Crear una coreografía</h3><p>Una <b>coreografía</b> es una secuencia de movimientos organizada para bailarse con una música. Pasos para crearla en grupo:</p><ol><li>Elegid una <b>música</b> con un pulso claro (instrumental o libre de derechos).</li><li>Contad las <b>frases de 8 tiempos</b> y decidid cuántas usaréis (por ejemplo, 8 frases).</li><li>Inventad un <b>paso</b> para cada frase o repetid algunos.</li><li>Variad los <b>niveles</b>, las <b>formaciones</b> (fila, círculo, filas cruzadas) y los <b>desplazamientos</b>.</li><li>Incluid un <b>inicio</b> y un <b>final</b> claros, en posición congelada.</li><li><b>Ensayad</b> contando en voz alta y luego solo con la música.</li></ol>`,
    },
    {
      html: `<h3>Beneficios y actitudes</h3>${tabla(["Beneficio", "Por qué"], [["Autoconocimiento", "descubres qué puede hacer tu cuerpo y cómo expresa lo que sientes"], ["Desinhibición", "pierdes el miedo a hacer el ridículo y ganas seguridad"], ["Creatividad", "inventas movimientos, personajes e historias"], ["Comunicación", "aprendes a leer el lenguaje no verbal de los demás"], ["Cooperación", "en grupo hay que escuchar, proponer y ponerse de acuerdo"]])}<p>Actitudes necesarias: <b>respeto</b> a las propuestas de todos, <b>atención</b> al grupo, <b>confianza</b> y ganas de probar. Equivocarse forma parte del proceso.</p>`,
    },
  ],
  figura: {
    titulo: "Expresión corporal y ritmo en un vistazo",
    svg: filas("Resumen: el cuerpo comunica con rostro, gestos y postura; recursos de cuerpo, espacio, tiempo y energía; niveles alto, medio y bajo; mimo y pantomima; ritmo en frases de 8 tiempos; coreografía", [["Lenguaje no verbal", "rostro · gestos · postura", "var(--pen)"], ["Recursos", "cuerpo · espacio · tiempo · energía", "var(--sun)"], ["Niveles", "alto · medio · bajo", "var(--leaf)"], ["Mimo", "punto fijo · pared invisible", "var(--red)"], ["Ritmo", "pulso · frases de 8", "var(--inf)"], ["Coreografía", "pasos · formaciones · final", "var(--ink)"]], 200),
  },
  video: vg("expV"),
  quiz: mezcla([
    { q: "La expresión corporal usa principalmente…", o: ["el cuerpo y el movimiento", "la voz y la escritura", "objetos y decorados"], a: 0, e: "Lenguaje no verbal." },
    { q: "Los cuatro recursos expresivos son…", o: ["cuerpo, espacio, tiempo y energía", "voz, música, luz y vestuario", "fuerza, velocidad, resistencia y flexibilidad"], a: 0, e: "Combinables." },
    { q: "Estar agachado es moverse en el nivel…", o: ["bajo", "medio", "alto"], a: 0, e: "Niveles del espacio." },
    { q: "El mimo representa acciones…", o: ["sin palabras ni objetos reales", "con objetos reales", "cantando"], a: 0, e: "Hace ver lo que no existe." },
    { q: "La técnica en la que la mano queda quieta en el aire es el…", o: ["punto fijo", "espejo", "pulso"], a: 0, e: "Mimo." },
    { q: "En el juego del espejo…", o: ["uno imita los movimientos del otro", "se baila solo", "se habla sin parar"], a: 0, e: "Por parejas." },
    { q: "Las canciones suelen organizarse en frases de…", o: ["8 tiempos", "3 tiempos", "13 tiempos"], a: 0, e: "5, 6, 7, 8." },
    { q: "Una secuencia de movimientos organizada con música es una…", o: ["coreografía", "pantomima", "estatua"], a: 0, e: "Baile." },
    { q: "Una postura encorvada suele transmitir…", o: ["tristeza o cansancio", "alegría", "seguridad"], a: 0, e: "Postura." },
    { q: "La desinhibición consiste en…", o: ["perder el miedo al ridículo", "moverse lo más rápido posible", "no participar"], a: 0, e: "Ganar seguridad." },
  ]),
  examen: mezcla([
    { q: "Un adiós lento y suave suele expresar…", o: ["pena", "euforia", "enfado"], a: 0, e: "Tiempo y energía." },
    { q: "La pantomima es…", o: ["una historia completa contada con mimo", "un baile en pareja", "un tipo de canción"], a: 0, e: "Mimo narrativo." },
    { q: "Contar «5, 6, 7, 8» antes de bailar sirve para…", o: ["empezar todos a la vez al inicio de la frase", "calentar la voz", "medir la velocidad"], a: 0, e: "Frase de 8." },
  ]),
  feynman: ["Cómo comunica el cuerpo sin palabras", "Cuáles son los recursos expresivos", "Qué técnicas básicas usa el mimo", "Qué son el pulso y las frases de 8 tiempos", "Cómo se crea una coreografía en grupo"],
  mapa: mapa("EXPRESIÓN CORPORAL", "var(--eso)", [
    ["Comunicar", "rostro · gesto · postura", "var(--pen)"],
    ["Recursos", "cuerpo · espacio · tiempo · energía", "var(--sun)"],
    ["Mimo y drama", "punto fijo · estatuas", "var(--red)"],
    ["Ritmo", "pulso · coreografía", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Expresión corporal", "Uso del cuerpo para expresar y comunicar."],
    ["Lenguaje no verbal", "Comunicación con rostro, gestos, postura y mirada."],
    ["Niveles", "Alto, medio y bajo en el espacio."],
    ["Energía", "Intensidad del movimiento: fuerte o suave, brusco o fluido."],
    ["Mimo", "Representar acciones sin palabras ni objetos."],
    ["Punto fijo", "Parte del cuerpo que queda inmóvil en el espacio."],
    ["Frase de 8 tiempos", "Unidad para contar la música al bailar."],
    ["Coreografía", "Secuencia de movimientos organizada con música."],
  ],
  familias: ["Jugad a adivinar películas o profesiones con mímica.", "Bailad juntos una canción contando los 8 tiempos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Expresión corporal: lenguaje no verbal, recursos expresivos (cuerpo, espacio, tiempo, energía), mimo y dramatización, ritmo y coreografías sencillas en grupo (RD 217/2022, Educación Física, manifestaciones de la cultura motriz; autorregulación emocional).",
    ideas: ["Galería de estatuas emocionales con fotografía final.", "Coreografía de 8 frases por grupos con música libre de derechos.", "Teatro de mimo por parejas sobre acciones cotidianas."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Representa la emoción «miedo» usando los cuatro recursos expresivos.", pasos: ["Cuerpo: hombros encogidos, manos delante.", "Espacio: nivel medio-bajo, retroceder.", "Tiempo: movimientos rápidos y entrecortados con pausas.", "Energía: tensa."], resultado: "Una postura encogida que retrocede a sacudidas." },
    { enunciado: "Mima que abres una puerta pesada.", pasos: ["Coloca la mano en el pomo invisible (punto fijo).", "Gira la muñeca.", "Inclina el cuerpo y empuja con esfuerzo, sin que la mano se mueva del punto fijo hasta que la puerta «ceda»."], resultado: "El público «ve» la puerta." },
    { enunciado: "Organiza una coreografía de 4 frases de 8 tiempos.", pasos: ["Frase 1: paso lateral derecha-izquierda.", "Frase 2: giro y palmas.", "Frase 3: nivel bajo, subir poco a poco.", "Frase 4: desplazamiento en círculo y pose final."], resultado: "32 tiempos con cambio de nivel y formación." },
  ],
  errores: [
    "Pensar que la expresión corporal es solo bailar.",
    "Reírse de los compañeros en lugar de reír con ellos.",
    "Hacer los gestos demasiado pequeños para que el público los vea.",
    "Empezar a bailar sin contar los tiempos.",
    "Usar siempre el mismo nivel y la misma velocidad.",
  ],
  ejercicios: [
    { q: "Define expresión corporal.", sol: "Disciplina que usa el cuerpo y el movimiento para expresar y comunicar." },
    { q: "Escribe cuatro elementos del lenguaje no verbal.", sol: "Rostro, gestos, postura, mirada (y distancia)." },
    { q: "Nombra los cuatro recursos expresivos con un ejemplo.", sol: "Cuerpo (mover solo los brazos), espacio (nivel bajo), tiempo (lento), energía (fuerte)." },
    { q: "¿Cuáles son los tres niveles del espacio?", sol: "Alto, medio y bajo." },
    { q: "Explica la técnica del punto fijo.", sol: "Una parte del cuerpo queda inmóvil en el espacio como si tocara algo sólido." },
    { q: "Describe el juego del espejo.", sol: "Por parejas, uno imita exactamente y despacio los movimientos del otro." },
    { q: "¿Qué es el pulso de una música?", sol: "El latido regular que se marca con el pie o las palmas." },
    { q: "¿Por qué los bailarines cuentan hasta 8?", sol: "Porque la música se organiza en frases de 8 tiempos." },
    { q: "Escribe tres beneficios de la expresión corporal.", sol: "Autoconocimiento, desinhibición, creatividad, comunicación, cooperación." },
    { q: "Diseña una escena de mimo de 30 segundos con inicio, nudo y final.", sol: "Respuesta abierta." },
  ],
};
