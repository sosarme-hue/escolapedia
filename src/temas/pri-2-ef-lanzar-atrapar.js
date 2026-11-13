// Educación Física 2º de Primaria: lanzar y atrapar. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, pelota, flechaR, cono, aro, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const bola = (x, y, r = 9, c = P.rojo) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - r} ${y} q${r} ${-r * 0.6} ${2 * r} 0" stroke="#fff" stroke-width="1.5" fill="none"/>`;
const tray = (x1, y1, x2, y2, h, c = "var(--pen)") => `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - h} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
const diana = (x, y, r = 30) => `${[1, 0.66, 0.33].map((k, i) => `<circle cx="${x}" cy="${y}" r="${r * k}" fill="${[P.blanco, P.azul, P.rojo][i]}" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Lanzar y atrapar",
  minutos: 20,
  objetivos: ["Lanzar con una mano y con dos, por arriba y por abajo, apuntando a un objetivo", "Atrapar pelotas de distintos tamaños con las manos preparadas", "Pasar y recibir con un compañero de forma segura"],
  claves: ["lanzar", "atrapar", "puntería", "pase", "recibir", "bote", "rodar", "objetivo"],
  pregunta: {
    texto: "¿Por qué es más fácil atrapar una pelota grande que una pequeñita?",
    respuesta: "Porque la grande se ve mejor y ocupa más espacio en las manos. Para atrapar bien hay que <mark>mirar la pelota</mark> todo el rato y tener las <b>manos preparadas</b>. ¡Hoy vamos a practicarlo!",
  },
  bloques: [
    {
      html: `<h3>Lanzar con dos manos</h3><p>Hay varias formas de <mark>lanzar con dos manos</mark>.</p><p><b>Desde el pecho</b>: la pelota junto al pecho, empujamos con los brazos hacia delante. <b>Por encima de la cabeza</b>: la pelota detrás de la cabeza, como en el saque de banda del fútbol. <b>Por abajo</b>: desde las rodillas, hacia arriba.</p><p>Cada forma sirve para una cosa distinta.</p>`,
      svg: svg("Tres lanzamientos con dos manos: desde el pecho, por encima de la cabeza y por abajo", `${nino(46, 150, { c: P.azul, pose: "palmas", s: 1.2 })}${bola(46, 102, 8)}${flechaR(60, 102, 84, 102, P.rojo)}${etq(46, 172, "pecho", P.azul, 11)}${nino(130, 150, { c: P.verde, pose: "arriba", s: 1.2 })}${bola(130, 46, 8)}${flechaR(142, 44, 166, 38, P.rojo)}${etq(130, 172, "cabeza", P.verde, 11)}${nino(214, 150, { c: P.naranja, pose: "pie", s: 1.2 })}${bola(230, 128, 8)}${flechaR(240, 120, 252, 100, P.rojo)}${etq(214, 172, "por abajo", P.naranja, 11)}${suelo(152)}`),
    },
    {
      html: `<h3>Lanzar con una mano</h3><p>Para lanzar lejos con <mark>una mano</mark>, usamos la mano que más dominamos.</p><p>Ponemos delante el <b>pie contrario</b>: si lanzamos con la derecha, el pie izquierdo va delante. Llevamos el brazo atrás, por encima del hombro, y lanzamos estirándolo con fuerza.</p><p>Al final, el brazo acompaña a la pelota, como si la señaláramos.</p>`,
      svg: svg("Un niño lanza con la mano derecha con el pie izquierdo delante y la pelota vuela lejos", `${nino(66, 156, { c: P.morado, pose: "lanza", s: 1.6 })}${bola(34, 38, 8)}${tray(42, 34, 240, 110, 30, P.rojo)}${etq(66, 174, "pie contrario delante", P.morado, 11)}${etq(196, 150, "¡lejos!", P.rojo, 13)}${suelo(158)}`),
    },
    {
      html: `<h3>Apuntar: la puntería</h3><p>Lanzar no es solo tirar fuerte: hay que <mark>apuntar</mark>.</p><p>Antes de lanzar, miramos el objetivo: una diana, un aro, una caja o las manos del compañero. No dejamos de mirarlo mientras lanzamos.</p><p>Si fallamos, lo corregimos: más fuerte, más flojo, más a un lado. ¡La puntería mejora con práctica!</p>`,
      svg: svg("Un niño mira una diana y lanza una pelota que va al centro", `${nino(50, 156, { c: P.azul, pose: "lanza", s: 1.4 })}${diana(206, 84, 40)}${tray(36, 60, 206, 84, 30, P.rojo)}${bola(206, 84, 7, P.amarillo)}${etq(206, 150, "¡al centro!", P.rojo, 13)}${suelo(158)}`),
      video: V("ef3b"),
    },
    {
      html: `<h3>Atrapar con las manos preparadas</h3><p>Para <mark>atrapar</mark>, nos preparamos antes de que llegue la pelota.</p><p>Las manos van delante, abiertas, con los dedos separados, formando una <b>cesta</b>. Miramos la pelota desde que sale hasta que llega.</p><p>Cuando toca las manos, la llevamos hacia el pecho, sin cerrar los ojos. ¡Abrazamos la pelota!</p>`,
      svg: svg("Un niño con las manos en forma de cesta mira la pelota que llega y la lleva al pecho", `${nino(170, 156, { c: P.verde, pose: "palmas", s: 1.7 })}${bola(70, 60, 12)}${tray(40, 100, 160, 76, 30, P.rojo)}${etq(64, 146, "mirar la pelota", P.rojo, 12)}${etq(170, 174, "manos en cesta", P.verde, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Botar y rodar</h3><p>No todas las pelotas van por el aire. También las podemos hacer <mark>botar</mark> o <mark>rodar</mark>.</p><p>Para botar, empujamos la pelota hacia el suelo con la mano abierta, sin golpearla. Para rodar, la lanzamos por el suelo, agachados, como en los bolos.</p><p>El compañero la recibe con las manos abajo, como una pala. ¡Así es muy fácil atrapar!</p>`,
      svg: svg("Una niña bota una pelota y un niño la hace rodar por el suelo hacia unos bolos", `${nino(50, 156, { c: P.rosa, pose: "pie", s: 1.4, nina: true })}${bola(70, 132, 10)}<path d="M70 116 V70" stroke="${P.rojo}" stroke-width="2" stroke-dasharray="4 4"/>${etq(50, 174, "botar", P.rosa, 12)}${nino(130, 156, { c: P.azul, pose: "agacha", s: 1.2 })}${bola(160, 146, 9)}${flechaR(174, 146, 200, 146, P.rojo)}${[0, 1, 2].map((i) => `<path d="M${214 + i * 14} 156 q-5 -10 0 -24 q5 14 0 24" fill="#fff" stroke="var(--ink)"/>`).join("")}${etq(170, 174, "rodar", P.azul, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Pases con un compañero</h3><p>Un <mark>pase</mark> es lanzar la pelota a un compañero para que la atrape.</p><p>Antes de pasar, miramos al compañero y decimos su nombre. Lanzamos suave, a la altura de su pecho.</p><p>Empezamos cerca y, cuando nos sale bien diez veces seguidas, damos un paso atrás. ¡Un buen pase es el que el otro puede atrapar!</p>`,
      svg: svg("Dos niños se pasan la pelota a la altura del pecho y cada vez se separan un paso más", `${nino(50, 154, { c: P.rojo, pose: "palmas", s: 1.4 })}${nino(210, 154, { c: P.azul, pose: "palmas", s: 1.4 })}${bola(130, 76, 9)}${tray(66, 90, 194, 90, 20, P.rojo)}${etq(130, 150, "«¡Marta!»", "var(--pen)", 13)}${suelo(158)}`),
    },
    {
      html: `<h3>Material diferente</h3><p>Lanzamos y atrapamos <mark>muchas cosas</mark>, no solo pelotas.</p><p>Una pelota de espuma, un globo, un saquito de arena, un aro o un pañuelo. Cada objeto vuela de forma distinta.</p><p>El globo va lento: ¡es fácil de atrapar! La pelota pequeña va rápida y hay que estar más atento. Así entrenamos los ojos y las manos.</p>`,
      svg: svg("Distintos objetos para lanzar: globo, saquito, aro, pañuelo y pelota pequeña", `<ellipse cx="40" cy="60" rx="18" ry="22" fill="${P.rosa}" stroke="var(--ink)"/><path d="M40 82 q-6 20 4 40" stroke="var(--ink)" fill="none"/>${etq(40, 140, "globo")}<rect x="84" y="50" width="34" height="26" rx="8" fill="${P.amarillo}" stroke="var(--ink)"/>${etq(101, 140, "saquito")}${aro(160, 70, 20, P.verde)}${etq(160, 140, "aro")}<path d="M200 50 l30 -6 l-6 30 l-30 4z" fill="${P.celeste}" stroke="var(--ink)"/>${etq(214, 140, "pañuelo")}${bola(130, 116, 7)}${etq(130, 166, "lento ↔ rápido", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Lanzar con seguridad</h3><p>Lanzar es divertido, pero hay que hacerlo <mark>con cuidado</mark>.</p><p>Nunca lanzamos a la cara de nadie. Antes de lanzar, miramos que no haya nadie en medio. Si la pelota se escapa, avisamos y vamos a por ella sin empujar.</p><p>Y cuando el profesor dice «¡quietos!», todos dejamos la pelota en el suelo y escuchamos.</p>`,
      svg: svg("Normas de seguridad: no lanzar a la cara, mirar que no haya nadie en medio y dejar la pelota en el suelo", `<circle cx="50" cy="70" r="24" fill="${P.piel}" stroke="var(--ink)"/>${bola(92, 66, 9)}<path d="M26 46 L74 94 M74 46 L26 94" stroke="${P.rojo}" stroke-width="5"/>${etq(50, 128, "a la cara, no")}${nino(140, 120, { c: P.azul, s: 0.9 })}<circle cx="140" cy="62" r="34" fill="none" stroke="${P.verde}" stroke-width="3" stroke-dasharray="5 4"/>${etq(140, 140, "mirar antes")}${bola(214, 110, 12)}<path d="M190 122 H238" stroke="var(--line)" stroke-width="3"/>${etq(214, 140, "al suelo")}`),
    },
    {
      html: `<h3>Jugamos a vaciar el campo</h3><p>Dividimos el patio en <mark>dos campos</mark> con una línea. Cada equipo tiene muchas pelotas blandas.</p><p>Al oír la señal, lanzamos las pelotas al campo contrario, por abajo o por arriba. Hay que atrapar las que vienen y devolverlas.</p><p>Cuando suena el silbato, contamos: gana el equipo que tiene menos pelotas en su campo. ¡Sin lanzar a nadie!</p>`,
      svg: svg("Dos equipos a cada lado de una línea lanzan pelotas blandas al campo contrario", `<path d="M130 30 V160" stroke="var(--ink)" stroke-width="3" stroke-dasharray="8 6"/>${nino(50, 150, { c: P.rojo, pose: "lanza", s: 1 })}${nino(90, 156, { c: P.rojo, pose: "palmas", s: 1 })}${nino(170, 156, { c: P.azul, pose: "palmas", s: 1 })}${nino(214, 150, { c: P.azul, pose: "lanza", s: 1 })}${[[60, 166], [110, 168], [150, 166], [196, 168], [236, 166]].map(([x, y]) => bola(x, y, 6, P.amarillo)).join("")}${tray(40, 76, 196, 76, 60, P.rojo)}${tray(224, 76, 70, 76, 80, P.azul)}`),
    },
  ],
  figura: {
    titulo: "Lanzar y atrapar",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un niño lanza una pelota mirando al compañero, que la atrapa con las manos en cesta"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Mirar · lanzar · atrapar", { size: 22, color: "var(--pen)" })}${nino(130, 270, { c: P.rojo, pose: "lanza", s: 2.4 })}${nino(510, 270, { c: P.azul, pose: "palmas", s: 2.4 })}${tray(100, 110, 490, 170, 50, P.rojo)}${bola(320, 98, 14)}${rot(130, 290, "pie contrario delante", { size: 14, color: P.rojo })}${rot(510, 290, "manos en cesta", { size: 14, color: P.azul })}</svg>`,
  },
  video: V("ef3v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Lanza con la mano derecha lo más lejos posible.",
      pasos: ["Pon el pie izquierdo delante.", "Lleva el brazo atrás, por encima del hombro.", "Estira el brazo con fuerza y acompaña la pelota."],
      resultado: "Un lanzamiento largo y bien hecho." },
    { enunciado: "Atrapa una pelota que te lanzan suave.",
      pasos: ["Manos delante, en cesta.", "Mira la pelota todo el rato.", "Al tocarla, llévala al pecho."],
      resultado: "La pelota queda abrazada." },
    { enunciado: "Haz diez pases seguidos con un compañero.",
      pasos: ["Mira y di su nombre.", "Lanza suave a la altura del pecho.", "Si lo conseguís, dad un paso atrás."],
      resultado: "Diez pases sin que caiga la pelota." },
  ],
  errores: [
    "Cerrar los ojos al atrapar: hay que mirar la pelota hasta el final.",
    "Lanzar con el pie del mismo lado delante: va el pie contrario.",
    "Tirar muy fuerte al compañero: un buen pase se puede atrapar.",
    "Lanzar sin mirar si hay alguien en medio.",
  ],
  ejercicios: [
    { q: "Di tres formas de lanzar con dos manos.", sol: "Desde el pecho, por encima de la cabeza y por abajo." },
    { q: "Si lanzas con la derecha, ¿qué pie va delante?", sol: "El izquierdo." },
    { q: "¿Qué es la puntería?", sol: "Lanzar apuntando a un objetivo y acertar." },
    { q: "¿Cómo ponemos las manos para atrapar?", sol: "Delante, abiertas, en forma de cesta." },
    { q: "¿Qué hacemos con la pelota al atraparla?", sol: "La llevamos hacia el pecho." },
    { q: "¿Cómo se bota una pelota?", sol: "Empujándola hacia el suelo con la mano abierta." },
    { q: "¿Qué es un pase?", sol: "Lanzar la pelota a un compañero para que la atrape." },
    { q: "¿Qué objeto es más fácil de atrapar, un globo o una pelota pequeña?", sol: "El globo, porque va más lento." },
    { q: "Di dos normas de seguridad al lanzar.", sol: "No lanzar a la cara y mirar que no haya nadie en medio." },
    { q: "Haz una diana con papel y practica la puntería en casa.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Para atrapar miramos…", o: ["la pelota", "el suelo", "al público"], a: 0, e: "La pelota." },
    { q: "Las manos para atrapar forman…", o: ["una cesta", "un puño", "un muro"], a: 0, e: "Una cesta." },
    { q: "Lanzando con la derecha, delante va el pie…", o: ["izquierdo", "derecho", "ninguno"], a: 0, e: "Contrario." },
    { q: "Un pase se lanza a la altura del…", o: ["pecho", "tobillo", "techo"], a: 0, e: "Pecho." },
    { q: "Para botar empujamos con…", o: ["la mano abierta", "el puño", "la cabeza"], a: 0, e: "Mano abierta." },
    { q: "El globo vuela…", o: ["lento", "rapidísimo", "bajo el agua"], a: 0, e: "Lento." },
    { q: "Nunca lanzamos a…", o: ["la cara", "la diana", "un aro"], a: 0, e: "La cara." },
    { q: "Antes de pasar decimos…", o: ["el nombre del compañero", "nada", "adiós"], a: 0, e: "Su nombre." },
    { q: "Al lanzar por encima de la cabeza, la pelota empieza…", o: ["detrás de la cabeza", "en los pies", "en la espalda"], a: 0, e: "Detrás de la cabeza." },
    { q: "Si nos sale bien diez veces…", o: ["damos un paso atrás", "paramos", "nos vamos"], a: 0, e: "Más lejos." },
  ],
  examen: [
    { q: "Rodar la pelota es lanzarla…", o: ["por el suelo", "muy alto", "a la pared"], a: 0, e: "Por el suelo." },
    { q: "La puntería mejora con…", o: ["práctica", "suerte solo", "gritos"], a: 0, e: "Práctica." },
    { q: "Al final del lanzamiento, el brazo…", o: ["acompaña la pelota", "se esconde", "se dobla atrás"], a: 0, e: "Acompaña." },
    { q: "Cuando el profesor dice «¡quietos!»…", o: ["dejamos la pelota en el suelo", "lanzamos más", "corremos"], a: 0, e: "Y escuchamos." },
  ],
  feynman: ["Cómo se lanza con una y con dos manos", "Cómo se atrapa bien una pelota", "Cómo hacer pases seguros con un compañero"],
  mapa: mapa("LANZAR Y ATRAPAR", "var(--pri)", [
    ["Lanzar", "una mano, dos manos", "#e53935"],
    ["Apuntar", "mirar el objetivo", "#fb8c00"],
    ["Atrapar", "manos en cesta, al pecho", "#1e88e5"],
    ["Pase", "suave, al pecho, nombre", "#43a047"],
  ], 230),
  tarjetas: [
    ["Lanzar", "Enviar un objeto con las manos"],
    ["Atrapar", "Coger un objeto que viene"],
    ["Pie contrario", "Delante al lanzar con una mano"],
    ["Puntería", "Apuntar y acertar"],
    ["Cesta", "Manos abiertas para atrapar"],
    ["Botar", "Empujar la pelota al suelo"],
    ["Pase", "Lanzar a un compañero"],
    ["Seguridad", "Nunca a la cara"],
  ],
  familias: [
    "Lanzad y atrapad un globo sin que toque el suelo.",
    "Haced una diana con papel o una caja y practicad la puntería.",
    "Contad cuántos pases seguidos hacéis sin que caiga la pelota.",
    "Jugad a los bolos con botellas de plástico.",
  ],
  profesores: PROF("Educación Física: habilidades motrices básicas de manipulación (lanzamientos con una y dos manos, recepciones, botes, rodar); coordinación óculo-manual; precisión; pases en parejas; normas de seguridad", ["Lanzamientos de precisión a dianas y aros.", "Pases en parejas con progresión de distancia.", "Juego de vaciar el campo con pelotas blandas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
