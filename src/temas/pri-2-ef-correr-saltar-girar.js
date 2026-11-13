// Educación Física 2º de Primaria: correr, saltar y girar. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, cono, aro, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const giro = (cx, cy, r, c) => `<path d="M${cx + r} ${cy} A${r} ${r} 0 1 1 ${cx} ${cy - r}" fill="none" stroke="${c}" stroke-width="3"/><path d="M${cx} ${cy - r} l10 -6 v12z" fill="${c}"/>`;
const arco = (x1, x2, y, h, c) => `<path d="M${x1} ${y} Q${(x1 + x2) / 2} ${y - h} ${x2} ${y}" fill="none" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 5"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Correr, saltar y girar",
  minutos: 20,
  objetivos: ["Correr con buena técnica, cambiando de ritmo y de dirección", "Saltar con un pie y con dos, y caer con suavidad", "Girar sobre uno mismo con control y sin marearse"],
  claves: ["desplazamiento", "correr", "zigzag", "saltar", "impulso", "caída", "girar", "habilidades motrices"],
  pregunta: {
    texto: "¿Qué es más difícil: correr en línea recta o correr en zigzag sin chocar?",
    respuesta: "¡En zigzag! Hay que <mark>cambiar de dirección</mark>, frenar y volver a arrancar. Correr, saltar y girar son <b>habilidades básicas</b>: las usamos en casi todos los juegos y deportes.",
  },
  bloques: [
    {
      html: `<h3>Correr bien</h3><p>Correr parece fácil, pero hay una <mark>forma correcta</mark>.</p><p>Miramos hacia delante, no a los pies. Los brazos se mueven doblados, adelante y atrás, al lado contrario de las piernas. Pisamos con la parte delantera del pie, sin hacer ruido.</p><p>Así corremos más rápido, nos cansamos menos y no nos caemos.</p>`,
      svg: svg("Un niño corriendo con los brazos doblados, mirando al frente, y tres consejos", `${nino(76, 160, { c: P.azul, pose: "corre", s: 2 })}${etq(194, 56, "mirar al frente", P.rojo)}${etq(194, 92, "brazos doblados", P.verde)}${etq(194, 128, "pisar suave", P.morado)}${suelo(162)}`),
    },
    {
      html: `<h3>Cambiar de ritmo</h3><p>No siempre corremos igual. Podemos ir <mark>despacio, a ritmo medio o muy rápido</mark>.</p><p>Al trotar, vamos tranquilos y podemos hablar. Al esprintar, vamos a toda velocidad, pero solo un ratito.</p><p>Escuchamos el pandero: un golpe lento es trotar; golpes rápidos son correr deprisa; silencio es pararse. ¡Hay que frenar a tiempo!</p>`,
      svg: svg("Tres velocidades: caminar, trotar y esprintar, con flechas cada vez más largas", `${[["caminar", 30, P.verde, "pie"], ["trotar", 60, P.naranja, "corre"], ["esprintar", 96, P.rojo, "corre"]].map(([t, w, c, pose], i) => `${nino(30, 56 + i * 50, { c, pose, s: 0.6 })}${flechaR(60, 40 + i * 50, 60 + w, 40 + i * 50, c)}${etq(206, 44 + i * 50, t, c, 13)}`).join("")}`),
    },
    {
      html: `<h3>Cambiar de dirección</h3><p>En los juegos hay que <mark>cambiar de dirección</mark> muchas veces.</p><p>Para girar al correr, frenamos un poco, doblamos las rodillas y empujamos con el pie de fuera.</p><p>Practicamos el <b>zigzag</b> entre conos, sin tocarlos. También correr hacia atrás, de lado y en curva. ¡Así los pies se vuelven muy ágiles!</p>`,
      svg: svg("Un camino en zigzag entre conos con un niño corriendo", `${[0, 1, 2, 3, 4].map((i) => cono(50 + i * 44, 122)).join("")}<path d="M20 110 Q35 70 50 76 Q72 80 94 144 Q116 150 138 76 Q160 70 182 144 Q204 150 226 76 Q240 72 250 100" stroke="${P.azul}" stroke-width="3" fill="none" stroke-dasharray="7 5"/>${nino(24, 172, { c: P.rojo, pose: "corre", s: 0.6 })}${etq(170, 30, "zigzag", P.azul, 14)}`),
      video: V("ef2b"),
    },
    {
      html: `<h3>Saltar con dos pies</h3><p>Para saltar con <mark>dos pies</mark>, hay tres momentos.</p><p><b>Impulso</b>: doblamos las rodillas y echamos los brazos atrás. <b>Vuelo</b>: estiramos el cuerpo y lanzamos los brazos hacia arriba. <b>Caída</b>: caemos con los dos pies a la vez, doblando las rodillas, como un muelle.</p><p>Así el salto es más largo y no nos hacemos daño.</p>`,
      svg: svg("Los tres momentos de un salto: impulso agachado, vuelo con brazos arriba y caída suave", `${nino(44, 154, { c: P.verde, pose: "agacha", s: 1.2 })}${etq(44, 172, "1 impulso", P.verde, 11)}${nino(130, 140, { c: P.verde, pose: "salta", s: 1.2 })}${etq(130, 172, "2 vuelo", P.verde, 11)}${nino(216, 154, { c: P.verde, pose: "agacha", s: 1.2 })}${etq(216, 172, "3 caída", P.verde, 11)}${arco(56, 204, 64, 70, P.naranja)}${suelo(156)}`),
    },
    {
      html: `<h3>Saltar con un pie</h3><p>Saltar con <mark>un solo pie</mark> es más difícil: se llama <b>saltar a la pata coja</b>.</p><p>Primero con el pie derecho y luego con el izquierdo. Usamos los brazos para mantener el equilibrio.</p><p>Con estos saltos jugamos a la rayuela: a la pata coja en las casillas sueltas, con dos pies en las dobles. ¡Sin pisar las rayas!</p>`,
      svg: svg("Una rayuela con casillas numeradas y una niña saltando a la pata coja", `${[[60, 140, "1"], [60, 110, "2"], [44, 80, "3"], [76, 80, "4"], [60, 50, "5"], [44, 20, "6"], [76, 20, "7"]].map(([x, y, n]) => `<rect x="${x - 16}" y="${y - 14}" width="32" height="28" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${rot(x, y + 5, n, { size: 13 })}`).join("")}${nino(176, 154, { c: P.rosa, pose: "equilibrio", s: 1.4, nina: true })}${etq(176, 172, "a la pata coja", P.rosa, 12)}`),
    },
    {
      html: `<h3>Saltar obstáculos</h3><p>También podemos saltar <mark>por encima</mark> de cosas: una cuerda en el suelo, un aro, una línea o un banco bajo.</p><p>Miramos el obstáculo, cogemos carrerilla y saltamos sin tocarlo.</p><p>Con la comba saltamos cada vez que pasa la cuerda. ¡Hay que saltar en el momento justo, siguiendo un ritmo!</p>`,
      svg: svg("Un circuito de saltos: aros en el suelo, una cuerda baja y una comba", `${aro(30, 150, 18)}${aro(70, 150, 18, P.azul)}${aro(110, 150, 18, P.verde)}${arco(16, 124, 140, 50, P.naranja)}<path d="M150 150 V136 M194 150 V136 M150 138 H194" stroke="var(--ink)" stroke-width="3"/>${nino(232, 152, { c: P.morado, pose: "salta", s: 1 })}<path d="M210 112 Q232 174 254 112" stroke="${P.rojo}" stroke-width="3" fill="none"/>${etq(70, 176, "aros", P.azul, 11)}${etq(172, 176, "valla", "var(--ink)", 11)}${etq(232, 176, "comba", P.rojo, 11)}`),
    },
    {
      html: `<h3>Girar sobre uno mismo</h3><p><mark>Girar</mark> es dar vueltas sobre nuestro propio cuerpo.</p><p>Podemos girar de pie, en el aire al saltar, o tumbados, rodando como un tronco. También hacemos medio giro, para mirar atrás, o un giro completo.</p><p>Truco para no marearse: girar despacio, mirar un punto fijo y pararse poco a poco.</p>`,
      svg: svg("Tres formas de girar: de pie, saltando en el aire y rodando por el suelo como un tronco", `${nino(46, 150, { c: P.azul, pose: "brazos", s: 1.1 })}${giro(46, 44, 14, P.rojo)}${etq(46, 172, "de pie", P.rojo, 11)}${nino(130, 136, { c: P.naranja, pose: "salta", s: 1.1 })}${giro(130, 24, 11, P.rojo)}${etq(130, 172, "en el aire", P.rojo, 11)}<rect x="176" y="136" width="64" height="16" rx="8" fill="${P.verde}" stroke="var(--ink)"/><circle cx="244" cy="144" r="9" fill="${P.piel}" stroke="var(--ink)"/>${giro(208, 118, 12, P.rojo)}${etq(208, 172, "como un tronco", P.rojo, 11)}${suelo(154)}`),
    },
    {
      html: `<h3>Todo junto: un circuito</h3><p>En un <mark>circuito</mark> unimos varias habilidades, una detrás de otra.</p><p>Por ejemplo: correr en zigzag entre conos, saltar dentro de unos aros, dar un giro completo y correr rápido hasta la meta.</p><p>Esperamos nuestro turno en la fila y salimos cuando el compañero termina la primera estación. ¡Gana quien lo hace bien, no solo rápido!</p>`,
      svg: svg("Un circuito con conos de zigzag, aros para saltar, un giro y la meta", `${[0, 1, 2].map((i) => cono(26 + i * 26, 140)).join("")}${aro(110, 140, 14)}${aro(140, 140, 14, P.azul)}${giro(186, 120, 16, P.verde)}<path d="M232 100 V150" stroke="var(--ink)" stroke-width="3"/><path d="M232 100 h20 v12 h-20z" fill="${P.rojo}"/>${etq(52, 168, "zigzag", "var(--ink)", 11)}${etq(124, 168, "aros", "var(--ink)", 11)}${etq(186, 168, "giro", "var(--ink)", 11)}${etq(236, 168, "meta", P.rojo, 11)}${flechaR(20, 70, 240, 70, "var(--line)")}`),
    },
    {
      html: `<h3>Jugamos a los semáforos</h3><p>El profesor tiene <mark>tres tarjetas</mark> de colores.</p><p>Con el <b>verde</b>, corremos por todo el patio. Con el <b>amarillo</b>, saltamos con los pies juntos. Con el <b>rojo</b>, damos un giro y nos quedamos quietos.</p><p>Hay que mirar bien la tarjeta y cambiar rápido. ¡Quien se equivoca, hace cinco saltitos!</p>`,
      svg: svg("Un semáforo: verde correr, amarillo saltar, rojo girar y parar", `<rect x="20" y="22" width="56" height="140" rx="12" fill="var(--ink)"/>${[[P.verde, "verde: correr"], [P.amarillo, "amarillo: saltar"], [P.rojo, "rojo: girar y parar"]].map(([c, t], i) => `<circle cx="48" cy="${52 + i * 42}" r="16" fill="${c}"/>${etq(170, 56 + i * 42, t, "var(--ink)", 13)}`).join("")}`),
    },
  ],
  figura: {
    titulo: "Correr, saltar y girar",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un niño corre en zigzag entre conos, salta un aro y gira"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 36, "Habilidades básicas", { size: 22, color: "var(--pen)" })}${nino(110, 270, { c: P.azul, pose: "corre", s: 1.8 })}${rot(110, 80, "Correr", { size: 22, color: P.azul })}${aro(320, 272, 34)}${nino(320, 250, { c: P.verde, pose: "salta", s: 1.8 })}${rot(320, 80, "Saltar", { size: 22, color: P.verde })}${nino(530, 260, { c: P.naranja, pose: "brazos", s: 1.8 })}${giro(530, 98, 13, P.rojo)}${rot(530, 70, "Girar", { size: 22, color: P.rojo })}${suelo(272)}</svg>`,
  },
  video: V("ef2v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Corre en zigzag entre cinco conos.",
      pasos: ["Mira el cono siguiente, no tus pies.", "Frena un poco y dobla las rodillas al girar.", "Empuja con el pie de fuera."],
      resultado: "Pasas todos los conos sin tocarlos." },
    { enunciado: "Salta con los pies juntos lo más lejos que puedas.",
      pasos: ["Dobla las rodillas y echa los brazos atrás.", "Lanza los brazos adelante y arriba.", "Cae con los dos pies y rodillas dobladas."],
      resultado: "Un salto largo y una caída suave." },
    { enunciado: "Da un giro completo sin marearte.",
      pasos: ["Mira un punto fijo delante de ti.", "Gira despacio sobre los pies.", "Para poco a poco y vuelve a mirar el punto."],
      resultado: "Una vuelta entera con control." },
  ],
  errores: [
    "Correr mirando los pies: hay que mirar al frente.",
    "Caer con las piernas rectas: hay que doblar las rodillas.",
    "Girar muy rápido y sin mirar un punto: nos mareamos.",
    "Querer ir rápido en el circuito y hacerlo mal: primero bien.",
  ],
  ejercicios: [
    { q: "Di tres consejos para correr bien.", sol: "Mirar al frente, brazos doblados y pisar suave." },
    { q: "¿Qué diferencia hay entre trotar y esprintar?", sol: "Trotar es correr tranquilo; esprintar, a toda velocidad un ratito." },
    { q: "¿Qué es correr en zigzag?", sol: "Correr cambiando de dirección entre obstáculos." },
    { q: "Di los tres momentos de un salto.", sol: "Impulso, vuelo y caída." },
    { q: "¿Cómo caemos de un salto?", sol: "Con los dos pies y las rodillas dobladas, como un muelle." },
    { q: "¿Qué es saltar a la pata coja?", sol: "Saltar con un solo pie." },
    { q: "Di tres formas de girar.", sol: "De pie, en el aire y rodando como un tronco." },
    { q: "¿Cómo giramos sin marearnos?", sol: "Despacio, mirando un punto fijo y parando poco a poco." },
    { q: "Juega a la rayuela con alguien de casa.", sol: "Respuesta libre." },
    { q: "Diseña un circuito de tres estaciones.", sol: "Por ejemplo: zigzag, aros y giro." },
  ],
  quiz: [
    { q: "Al correr miramos…", o: ["al frente", "a los pies", "al cielo"], a: 0, e: "Al frente." },
    { q: "Los brazos al correr van…", o: ["doblados", "quietos", "en los bolsillos"], a: 0, e: "Doblados." },
    { q: "Esprintar es correr…", o: ["muy rápido", "muy despacio", "hacia atrás"], a: 0, e: "A toda velocidad." },
    { q: "Al cambiar de dirección doblamos…", o: ["las rodillas", "las orejas", "los codos solo"], a: 0, e: "Las rodillas." },
    { q: "El primer momento del salto es…", o: ["el impulso", "la caída", "el vuelo"], a: 0, e: "Impulso." },
    { q: "Caemos de un salto…", o: ["con rodillas dobladas", "con piernas rectas", "de cabeza"], a: 0, e: "Como un muelle." },
    { q: "La pata coja es saltar con…", o: ["un pie", "dos pies", "las manos"], a: 0, e: "Un pie." },
    { q: "Para no marearnos al girar miramos…", o: ["un punto fijo", "todo a la vez", "con ojos cerrados"], a: 0, e: "Un punto fijo." },
    { q: "Rodar tumbado es girar como…", o: ["un tronco", "una pelota", "un pájaro"], a: 0, e: "Un tronco." },
    { q: "En el circuito es importante…", o: ["hacerlo bien", "solo ir rápido", "saltarse estaciones"], a: 0, e: "Bien antes que rápido." },
  ],
  examen: [
    { q: "Correr, saltar y girar son…", o: ["habilidades básicas", "deportes de agua", "juegos de mesa"], a: 0, e: "Habilidades motrices básicas." },
    { q: "En la comba saltamos…", o: ["cuando pasa la cuerda", "cuando queremos", "nunca"], a: 0, e: "En el momento justo." },
    { q: "Con la tarjeta roja del semáforo…", o: ["giramos y paramos", "corremos", "saltamos"], a: 0, e: "Giro y quietos." },
    { q: "En el vuelo del salto los brazos van…", o: ["arriba", "abajo", "atrás"], a: 0, e: "Arriba." },
  ],
  feynman: ["Cómo correr bien y cambiar de ritmo y dirección", "Los tres momentos de un salto", "Cómo girar sin marearse"],
  mapa: mapa("CORRER, SALTAR, GIRAR", "var(--pri)", [
    ["Correr", "frente, brazos, ritmo", "#1e88e5"],
    ["Dirección", "zigzag, atrás, de lado", "#fb8c00"],
    ["Saltar", "impulso, vuelo, caída", "#43a047"],
    ["Girar", "de pie, aire, tronco", "#e53935"],
  ], 230),
  tarjetas: [
    ["Correr bien", "Mirar al frente, brazos doblados"],
    ["Trotar", "Correr tranquilo"],
    ["Esprintar", "Correr muy rápido un ratito"],
    ["Zigzag", "Cambiar de dirección entre conos"],
    ["Salto", "Impulso, vuelo y caída"],
    ["Caída", "Rodillas dobladas, como un muelle"],
    ["Pata coja", "Saltar con un pie"],
    ["Girar", "Mirar un punto fijo"],
  ],
  familias: [
    "Dibujad una rayuela con tiza y jugad juntos.",
    "Saltad a la comba contando cuántos saltos seguidos hacéis.",
    "En el parque, haced un circuito con árboles y bancos.",
    "Jugad a los semáforos con tarjetas de colores.",
  ],
  profesores: PROF("Educación Física: habilidades motrices básicas (desplazamientos, saltos, giros); técnica de carrera; cambios de ritmo y dirección; fases del salto; giros en los tres ejes; circuitos", ["Carrera con cambios de ritmo según señal sonora.", "Circuito de habilidades por estaciones.", "Juego de los semáforos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
