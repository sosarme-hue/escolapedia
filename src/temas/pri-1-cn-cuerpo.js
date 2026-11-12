// Ciencias de la Naturaleza 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, check, RD } = require("./_peques");

// Etiqueta con línea que apunta a una parte del dibujo.
const etiqueta = (x1, y1, x2, y2, t, color = "var(--pen)", anchor = "start") =>
  `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${color}" stroke-width="2"/><circle cx="${x1}" cy="${y1}" r="3" fill="${color}"/>${txt(x2 + (anchor === "start" ? 4 : -4), y2 + 5, t, { size: 13, color, anchor })}`;
// Cara grande.
const cara = (x, y, r = 46) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#f2c9a0"/><path d="M${-r} -8 Q ${-r} ${-r - 10} 0 ${-r - 4} Q ${r} ${-r - 10} ${r} -8 Q ${r * 0.6} ${-r * 0.7} 0 ${-r * 0.72} Q ${-r * 0.6} ${-r * 0.7} ${-r} -8 Z" fill="#6b3f1f"/>
  <ellipse cx="-16" cy="-4" rx="7" ry="5" fill="#fff"/><ellipse cx="16" cy="-4" rx="7" ry="5" fill="#fff"/><circle cx="-16" cy="-4" r="3.5" fill="#1b2235"/><circle cx="16" cy="-4" r="3.5" fill="#1b2235"/>
  <path d="M0 2 Q -5 14 0 16 Q 4 16 4 14" stroke="#c48a60" stroke-width="2.5" fill="none"/><path d="M-14 26 Q 0 36 14 26" stroke="var(--red)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="${-r}" cy="4" rx="6" ry="10" fill="#f2c9a0"/><ellipse cx="${r}" cy="4" rx="6" ry="10" fill="#f2c9a0"/></g>`;
// Mano abierta.
const mano = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#f2c9a0" stroke="#c48a60" stroke-width="1.5"><rect x="-16" y="-20" width="32" height="34" rx="10"/>
  ${[-12, -4, 4, 12].map((dx, i) => `<rect x="${dx - 3.5}" y="${-48 + Math.abs(i - 1.5) * 4}" width="7" height="32" rx="3.5"/>`).join("")}<rect x="12" y="-14" width="22" height="8" rx="4" transform="rotate(-30 14 -10)"/></g>`;
// Pie.
const pie = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#f2c9a0" stroke="#c48a60" stroke-width="1.5"><path d="M-10 -40 H 10 V -12 Q 40 -14 42 0 H -12 Q -14 -10 -10 -40 Z"/>${[0, 9, 17, 24, 30].map((dx, i) => `<circle cx="${12 + dx}" cy="${-4 - (i ? 0 : 1)}" r="${i ? 3 : 4}"/>`).join("")}</g>`;
// Corazón.
const corazon = (x, y, s = 1, color = "var(--red)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 10 C -24 -6 -14 -26 0 -14 C 14 -26 24 -6 0 10 Z" fill="${color}"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Mi cuerpo",
  minutos: 25,
  objetivos: ["Nombrar las partes del cuerpo: cabeza, tronco y extremidades", "Señalar las partes de la cara, la mano y el pie", "Saber que por dentro tenemos huesos, músculos y un corazón", "Respetar que todos los cuerpos son diferentes"],
  claves: ["cabeza", "tronco", "extremidades", "articulación", "huesos", "músculos"],
  pregunta: {
    texto: "Ponte de pie y toca tu cabeza, tu barriga y tus rodillas. ¿Cuántas partes grandes tiene tu cuerpo?",
    respuesta: "Tu cuerpo tiene <mark>tres partes</mark>: la <b>cabeza</b>, el <b>tronco</b> y las <b>extremidades</b> (los brazos y las piernas).",
  },
  bloques: [
    {
      html: `<h3>Las partes del cuerpo</h3><p>Nuestro cuerpo tiene <mark>tres partes</mark>: la cabeza, el tronco y las extremidades.</p><p>La <b>cabeza</b> está arriba. El <b>tronco</b> está en el centro. Las <b>extremidades</b> son los dos brazos y las dos piernas.</p><p>Todas las partes trabajan juntas. Así podemos jugar, comer y aprender.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño con la cabeza, el tronco y las extremidades señaladas">${BG}
        ${persona(110, 170, 158, "var(--pen)")}
        ${etiqueta(122, 46, 160, 30, "cabeza", "var(--red)")}
        ${etiqueta(118, 100, 160, 92, "tronco", "var(--pen)")}
        ${etiqueta(132, 118, 160, 128, "brazo", "var(--leaf)")}
        ${etiqueta(102, 158, 60, 160, "pierna", "var(--leaf)", "end")}</svg>`,
    },
    {
      html: `<h3>La cabeza y la cara</h3><p>En la cabeza tenemos el <mark>pelo</mark>, las orejas y la cara.</p><p>En la cara están los <b>ojos</b>, la <b>nariz</b> y la <b>boca</b>. También las cejas y las mejillas.</p><p>Con los ojos vemos. Con la nariz olemos y respiramos. Con la boca comemos y hablamos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una cara grande con los ojos, la nariz, la boca y las orejas señalados">${BG}
        ${cara(110, 98, 52)}
        ${etiqueta(126, 94, 186, 52, "ojo", "var(--pen)")}
        ${etiqueta(112, 112, 186, 92, "nariz", "var(--inf)")}
        ${etiqueta(120, 128, 186, 132, "boca", "var(--red)")}
        ${etiqueta(162, 102, 196, 162, "oreja", "var(--leaf)")}
        ${txt(110, 28, "pelo", { size: 13, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El tronco</h3><p>El <mark>tronco</mark> es la parte del medio del cuerpo. Une la cabeza con los brazos y las piernas.</p><p>Por delante tiene el <b>pecho</b> y la <b>barriga</b>. Por detrás tiene la <b>espalda</b>.</p><p>El <b>cuello</b> une la cabeza con el tronco. Por eso puedes girar la cabeza.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niño visto de frente y de espaldas: pecho, barriga y espalda">${BG}
        ${persona(56, 150, 120, "var(--inf)")}${persona(160, 150, 120, "var(--inf)", "var(--ink)")}
        <circle cx="160" cy="54" r="19" fill="#6b3f1f"/>
        ${etiqueta(56, 104, 92, 84, "pecho", "var(--pen)")}${etiqueta(56, 118, 92, 124, "barriga", "var(--red)")}
        ${etiqueta(168, 108, 198, 108, "espalda", "var(--leaf)")}
        ${txt(56, 172, "de frente", { size: 12, color: "var(--muted)" })}${txt(160, 172, "de espaldas", { size: 12, color: "var(--muted)" })}
        ${txt(130, 22, "el tronco", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Brazos y manos</h3><p>Los <mark>brazos</mark> son extremidades. Cada brazo termina en una <b>mano</b>.</p><p>Cada mano tiene <b>cinco dedos</b>. El dedo gordo se llama pulgar.</p><p>Con las manos cogemos, dibujamos, escribimos y aplaudimos. También saludamos y damos abrazos.</p><p>Lávate las manos antes de comer. Así quitas los microbios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una mano abierta con cinco dedos; el pulgar está señalado">${BG}
        ${mano(105, 135, 2.1)}
        ${etiqueta(170, 98, 196, 70, "pulgar", "var(--red)")}
        ${txt(205, 140, "5 dedos", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Piernas y pies</h3><p>Las <mark>piernas</mark> también son extremidades. Cada pierna termina en un <b>pie</b>.</p><p>Cada pie tiene cinco dedos. Detrás está el talón.</p><p>Con las piernas y los pies andamos, corremos y saltamos. También damos patadas al balón. Nos ayudan a no caernos.</p><p>Los pies llevan calcetines y zapatos. Así no se hacen daño.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un pie grande con los dedos y el talón señalados, y un balón">${BG}
        ${pie(70, 140, 2)}
        ${etiqueta(92, 128, 120, 46, "dedos", "var(--pen)")}
        ${etiqueta(52, 132, 30, 160, "talón", "var(--red)", "start")}
        <g transform="translate(205 116)"><circle r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M0 -10 L 10 -3 L 6 9 H -6 L -10 -3 Z" fill="var(--ink)"/></g>
        ${txt(205, 166, "¡patada!", { size: 13, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Nos doblamos</h3><p>El cuerpo se dobla por unos sitios. Se llaman <mark>articulaciones</mark>.</p><p>El <b>codo</b> dobla el brazo. La <b>rodilla</b> dobla la pierna. La muñeca y el tobillo también se doblan.</p><p>Gracias a ellas podemos sentarnos, agacharnos y coger cosas del suelo.</p><p>Un robot de juguete no se dobla bien. ¡Nosotros sí!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brazo doblado por el codo y pierna doblada por la rodilla">${BG}
        <g stroke="#f2c9a0" stroke-width="14" stroke-linecap="round" fill="none"><path d="M30 120 L 80 120 L 100 70"/><path d="M160 50 L 186 100 L 160 150"/></g>
        <circle cx="80" cy="120" r="9" fill="var(--red)"/><circle cx="186" cy="100" r="9" fill="var(--red)"/>
        ${txt(80, 150, "codo", { color: "var(--red)" })}${txt(222, 104, "rodilla", { color: "var(--red)" })}
        ${txt(130, 28, "Las articulaciones", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Por dentro</h3><p>Dentro del cuerpo tenemos <mark>huesos</mark>. Los huesos son duros y nos sostienen. Todos juntos forman el esqueleto.</p><p>Encima tenemos <b>músculos</b>. Los músculos mueven los huesos.</p><p>En el pecho está el <b>corazón</b>. Late sin parar y mueve la sangre por todo tu cuerpo, día y noche.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esqueleto sencillo, un brazo con músculo y un corazón">${BG}
        <g stroke="var(--muted)" stroke-width="5" stroke-linecap="round" fill="none"><circle cx="60" cy="40" r="15" fill="var(--card)"/><path d="M60 56 V 110 M60 66 L 34 98 M60 66 L 86 98 M60 110 L 44 156 M60 110 L 76 156"/><path d="M48 74 H 72 M48 84 H 72 M50 94 H 70"/></g>
        <g transform="translate(140 100)"><path d="M-20 20 L 0 -20 L 30 -20" stroke="#f2c9a0" stroke-width="14" stroke-linecap="round" fill="none"/><ellipse cx="-6" cy="-6" rx="12" ry="9" fill="var(--red)" opacity=".7"/></g>
        ${corazon(214, 96, 1.5)}
        ${txt(60, 172, "huesos", { size: 13 })}${txt(140, 172, "músculo", { size: 13 })}${txt(214, 172, "corazón", { size: 13 })}</svg>`,
      video: { id: "k1UZ4Lz1PHE", titulo: "Los sistemas del cuerpo humano para niños - Recopilación", canal: "Smile and Learn - Español", vistas: 9279685, megusta: 0 },
    },
    {
      html: `<h3>Todos somos diferentes</h3><p>Todos tenemos las mismas partes del cuerpo. Pero <mark>cada cuerpo es distinto</mark>.</p><p>Hay personas altas y bajas. Hay pelo rizado, liso, rubio o moreno. Hay pieles de muchos colores.</p><p>Algunas personas usan gafas o silla de ruedas. Todos los cuerpos merecen <b>respeto</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro niños distintos: alto, bajo, con gafas y en silla de ruedas">${BG}
        ${persona(40, 160, 130, "var(--red)", "#e3b04b")}${persona(95, 160, 100, "var(--leaf)", "var(--ink)")}${persona(150, 160, 118, "var(--sun)", "#6b3f1f")}
        <g fill="none" stroke="var(--ink)" stroke-width="2"><circle cx="146" cy="96" r="5"/><circle cx="157" cy="96" r="5"/></g>
        <g transform="translate(212 160)"><path d="M-14 -40 H 8 V -22" stroke="var(--muted)" stroke-width="4" fill="none"/><path d="M-14 -40 V -62" stroke="var(--muted)" stroke-width="4"/>${persona(-4, -20, 76, "var(--pen)")}<circle cx="-4" cy="-18" r="18" fill="none" stroke="var(--ink)" stroke-width="3.5"/></g>
        <path d="M14 162 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer tu cuerpo te ayuda a <mark>cuidarlo</mark>. También te ayuda a explicar lo que te pasa.</p><p>Si te duele algo, puedes decir dónde: «Me duele la rodilla». Así el médico te ayuda mejor.</p><p>También sirve para jugar. En Educación Física el maestro dice: «Tocaos los tobillos».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño se toca la rodilla y dice al médico que le duele">${BG}
        ${persona(70, 166, 120, "var(--pen)")}${persona(196, 166, 110, "#fff", "var(--muted)")}
        <circle cx="64" cy="146" r="9" fill="none" stroke="var(--red)" stroke-width="3"/>
        <rect x="20" y="10" width="160" height="34" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M60 44 L 66 54 L 74 44" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        ${txt(100, 33, "Me duele la rodilla", { size: 14 })}</svg>`,
    },
    {
      html: `<h3>Juego: el maestro dice</h3><p>Vamos a jugar a <mark>«El maestro dice»</mark>. Un adulto da órdenes y tú las haces.</p><p>«El maestro dice: tócate la nariz». «El maestro dice: dobla las rodillas». «El maestro dice: levanta un brazo».</p><p>Si no dice «el maestro dice», ¡no te muevas! Así repasas las partes del cuerpo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres niños jugando: uno se toca la nariz, otro levanta un brazo">${BG}
        ${persona(60, 162, 120, "var(--leaf)")}${persona(130, 162, 120, "var(--inf)")}${persona(200, 162, 120, "var(--pen)")}
        ${check(230, 40)}
        ${txt(110, 30, "¡Toca la nariz!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Las tres partes del cuerpo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Niño grande con la cabeza, el tronco, los brazos y las piernas en colores distintos">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <g transform="translate(320 280)">
        <path d="M-18 -110 V 0 M18 -110 V 0" stroke="var(--leaf)" stroke-width="18" stroke-linecap="round"/>
        <path d="M-40 -110 Q -40 -190 0 -190 Q 40 -190 40 -110 Z" fill="var(--pen)"/>
        <path d="M-34 -176 L -78 -110 M34 -176 L 78 -110" stroke="var(--leaf)" stroke-width="16" stroke-linecap="round"/>
        <circle cy="-226" r="38" fill="var(--red)"/></g>
      ${txt(150, 60, "CABEZA", { size: 22, color: "var(--red)", font: D, weight: 800 })}${txt(150, 84, "pelo · cara · orejas", { size: 14 })}
      ${txt(150, 160, "TRONCO", { size: 22, color: "var(--pen)", font: D, weight: 800 })}${txt(150, 184, "cuello · pecho · barriga · espalda", { size: 14 })}
      ${txt(500, 130, "EXTREMIDADES", { size: 22, color: "var(--leaf)", font: D, weight: 800 })}${txt(500, 154, "2 brazos con manos", { size: 14 })}${txt(500, 176, "2 piernas con pies", { size: 14 })}
      <g stroke="var(--line)" stroke-width="2"><path d="M220 66 H 276"/><path d="M262 166 H 290"/><path d="M372 140 H 406"/></g>
    </svg>`,
  },
  video: { id: "ppUnmAvLhwE", titulo: "Las partes del cuerpo humano para niños", canal: "Smile and Learn - Español", vistas: 9550632, megusta: 0, busqueda: "partes del cuerpo humano para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿En qué parte del cuerpo están los ojos?",
      pasos: ["Toca tus ojos con cuidado.", "Están en la cara.", "La cara está en la cabeza."],
      resultado: "los ojos están en la cabeza." },
    { enunciado: "¿Cuántos dedos tienes entre las dos manos?",
      pasos: ["Cuenta los dedos de una mano: 1, 2, 3, 4, 5.", "La otra mano tiene otros 5.", "Sigue contando: 6, 7, 8, 9, 10."],
      resultado: "tienes 10 dedos en las manos." },
    { enunciado: "¿Por dónde se dobla la pierna?",
      pasos: ["Siéntate en una silla.", "Mira por dónde se dobla tu pierna.", "Ese sitio se llama rodilla. Es una articulación."],
      resultado: "la pierna se dobla por la rodilla." },
  ],
  errores: [
    "Pensar que el cuello es parte de la cabeza: el cuello une la cabeza con el tronco.",
    "Confundir el codo con la rodilla: el codo está en el brazo y la rodilla en la pierna.",
    "Creer que las extremidades son solo las piernas: también son los brazos.",
    "Reírse de un cuerpo diferente: todos los cuerpos son distintos y merecen respeto.",
  ],
  ejercicios: [
    { q: "Di en voz alta las tres partes del cuerpo.", sol: "Cabeza, tronco y extremidades." },
    { q: "Toca tu nariz, tus orejas y tu barbilla.", sol: "Comprueba que señala cada parte bien." },
    { q: "¿Cuántos brazos y cuántas piernas tienes?", sol: "Dos brazos y dos piernas: cuatro extremidades." },
    { q: "Dibuja una cara con ojos, nariz, boca y orejas.", sol: "Deben aparecer las cuatro partes." },
    { q: "¿Qué parte del cuerpo usas para oler?", sol: "La nariz." },
    { q: "Dobla el brazo. ¿Por dónde se dobla?", sol: "Por el codo." },
    { q: "Pon la mano en el pecho y salta un rato. ¿Qué notas?", sol: "El corazón late más deprisa." },
    { q: "¿Qué hay dentro del cuerpo que es duro?", sol: "Los huesos." },
    { q: "Di una parte del tronco que está detrás.", sol: "La espalda." },
    { q: "Di una cosa que haces con los pies y otra con las manos.", sol: "Por ejemplo: con los pies corro y con las manos dibujo." },
  ],
  quiz: [
    { q: "¿Cuántas partes tiene el cuerpo?", o: ["2", "3", "5"], a: 1, e: "Cabeza, tronco y extremidades." },
    { q: "¿Dónde están los ojos?", o: ["En el tronco", "En la cabeza", "En las piernas"], a: 1, e: "Están en la cara, en la cabeza." },
    { q: "Los brazos y las piernas son…", o: ["extremidades", "articulaciones", "tronco"], a: 0, e: "Son las extremidades." },
    { q: "¿Cuántos dedos tiene una mano?", o: ["4", "5", "10"], a: 1, e: "Cinco dedos." },
    { q: "¿Qué une la cabeza con el tronco?", o: ["El codo", "El cuello", "La rodilla"], a: 1, e: "El cuello." },
    { q: "La pierna se dobla por…", o: ["la rodilla", "el codo", "la muñeca"], a: 0, e: "Por la rodilla." },
    { q: "¿Qué nos sostiene por dentro?", o: ["El pelo", "Los huesos", "Las uñas"], a: 1, e: "Los huesos forman el esqueleto." },
    { q: "¿Qué late sin parar en el pecho?", o: ["El corazón", "El estómago", "La nariz"], a: 0, e: "El corazón mueve la sangre." },
    { q: "La espalda está…", o: ["delante", "detrás", "en la cabeza"], a: 1, e: "En la parte de atrás del tronco." },
    { q: "Los cuerpos de las personas…", o: ["son todos iguales", "son diferentes", "no tienen huesos"], a: 1, e: "Cada cuerpo es distinto." },
  ],
  examen: [
    { q: "¿Qué parte del cuerpo es la barriga?", o: ["La cabeza", "El tronco", "Una extremidad"], a: 1, e: "Está en el tronco." },
    { q: "¿Con qué olemos?", o: ["Con la boca", "Con la nariz", "Con las orejas"], a: 1, e: "Con la nariz." },
    { q: "¿Qué mueven los músculos?", o: ["Los huesos", "El pelo", "Las uñas"], a: 0, e: "Los músculos mueven los huesos." },
    { q: "El codo y la rodilla son…", o: ["huesos", "articulaciones", "dedos"], a: 1, e: "Por ahí se dobla el cuerpo." },
  ],
  feynman: ["Las tres partes del cuerpo", "Qué son las articulaciones", "Qué hay dentro del cuerpo"],
  mapa: mapa("MI CUERPO", "var(--pri)", [
    ["Cabeza", "pelo · cara · orejas", "var(--red)"],
    ["Tronco", "pecho · barriga · espalda", "var(--pen)"],
    ["Extremidades", "brazos y manos · piernas y pies", "var(--leaf)"],
    ["Por dentro", "huesos · músculos · corazón", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["¿Cuáles son las tres partes del cuerpo?", "Cabeza, tronco y extremidades"],
    ["¿Qué hay en la cara?", "Ojos, nariz, boca, cejas y mejillas"],
    ["¿Cuántas extremidades tenemos?", "Cuatro: dos brazos y dos piernas"],
    ["¿Cómo se llama el dedo gordo?", "Pulgar"],
    ["¿Por dónde se dobla el brazo?", "Por el codo"],
    ["¿Qué es el esqueleto?", "Todos los huesos juntos"],
    ["¿Qué hace el corazón?", "Mueve la sangre por el cuerpo"],
    ["¿Son todos los cuerpos iguales?", "No, cada cuerpo es distinto"],
  ],
  familias: [
    "En el baño, nombrad juntos las partes del cuerpo mientras se lava.",
    "Jugad a «El maestro dice» con partes del cuerpo y articulaciones.",
    "Dibujad su silueta en un papel grande y que escriba o pegue los nombres.",
    "Si se hace daño, pedidle que diga con palabras dónde le duele.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: el cuerpo humano, partes y funciones básicas; aceptación de la diversidad corporal (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Silueta a tamaño real en papel continuo con etiquetas.", "Canción de las partes del cuerpo con gestos.", "Escucha del corazón en reposo y tras correr con la mano en el pecho."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
