// Ciencias Sociales 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, luna, nube, arbol, flor, casa, check, RD } = require("./_peques");

const flecha = (x1, y, x2, c = "var(--muted)") => `<path d="M${x1} ${y} H ${x2}" stroke="${c}" stroke-width="3"/><path d="M${x2 - 8} ${y - 6} L ${x2} ${y} L ${x2 - 8} ${y + 6}" stroke="${c}" stroke-width="3" fill="none"/>`;
const tarta = (x, y, velas = 1) => `<g transform="translate(${x} ${y})"><rect x="-22" y="-20" width="44" height="20" rx="4" fill="var(--sun)" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.5"/><path d="M-22 -12 H 22" stroke="var(--red)" stroke-width="3"/>${[...Array(velas)].map((_, i) => { const vx = (i - (velas - 1) / 2) * 9; return `<rect x="${vx - 1.5}" y="-32" width="3" height="12" fill="var(--pen)"/><circle cx="${vx}" cy="-35" r="2.5" fill="var(--inf)"/>`; }).join("")}</g>`;
const bebe = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cy="-12" rx="16" ry="12" fill="var(--water)" fill-opacity=".6"/><circle cy="-30" r="11" fill="#f4c7a1"/><circle cx="-4" cy="-31" r="1.5" fill="var(--ink)"/><circle cx="4" cy="-31" r="1.5" fill="var(--ink)"/><path d="M-3 -26 Q 0 -24 3 -26" stroke="var(--ink)" stroke-width="1.2" fill="none"/></g>`;
const telViejo = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-24 0 L -18 -26 H 18 L 24 0 Z" fill="#7a3030"/><circle cy="-13" r="8" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><circle cy="-13" r="2" fill="var(--ink)"/><rect x="-26" y="-36" width="52" height="9" rx="4" fill="#5a2020"/></g>`;
const movil = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-13" y="-44" width="26" height="44" rx="5" fill="var(--ink)"/><rect x="-10" y="-38" width="20" height="30" rx="2" fill="var(--water)"/><circle cy="-4" r="2" fill="#fff"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Ayer, hoy y mañana",
  minutos: 25,
  objetivos: ["Usar bien ayer, hoy y mañana", "Distinguir el pasado, el presente y el futuro", "Ordenar en una línea del tiempo momentos de la propia vida", "Notar cómo cambian las cosas con el paso del tiempo"],
  claves: ["ayer", "hoy", "mañana", "pasado", "presente", "futuro", "línea del tiempo"],
  pregunta: {
    texto: "¿Cómo eras tú cuando eras un bebé? ¿Y cómo serás de mayor?",
    respuesta: "Cuando eras bebé eras muy pequeño: eso es el <mark>pasado</mark>. Ahora vas al cole: eso es el <mark>presente</mark>. De mayor serás más alto: eso es el <mark>futuro</mark>. El tiempo siempre avanza.",
  },
  bloques: [
    {
      html: `<h3>Ayer, hoy y mañana</h3><p><mark>Hoy</mark> es el día en que estamos ahora.</p><p><mark>Ayer</mark> fue el día de antes. Ya pasó y no vuelve.</p><p><mark>Mañana</mark> será el día de después. Todavía no ha llegado.</p><p>Si hoy es martes, ayer fue lunes. Y mañana será miércoles. ¡Los días van siempre en orden!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres hojas de calendario: ayer lunes, hoy martes y mañana miércoles">${BG}
        ${[["ayer", "lunes", "var(--muted)"], ["hoy", "martes", "var(--pen)"], ["mañana", "miércoles", "var(--leaf)"]].map(([t, d, c], i) => {
          const x = 46 + i * 84;
          return `${txt(x, 34, t, { size: 15, color: c, font: D, weight: 800 })}<rect x="${x - 36}" y="46" width="72" height="84" rx="8" fill="var(--card)" stroke="${c}" stroke-width="${i === 1 ? 4 : 2}"/><rect x="${x - 36}" y="46" width="72" height="20" rx="8" fill="${c}"/>${txt(x, 104, d, { size: 13 })}`;
        }).join("")}
        ${flecha(20, 156, 240)}</svg>`,
    },
    {
      html: `<h3>El pasado</h3><p>El <mark>pasado</mark> es todo lo que ya ocurrió. Puede ser ayer, la semana pasada o hace muchos años.</p><p>Para hablar del pasado decimos: «antes», «ayer», «hace tiempo» o «cuando era pequeño».</p><p>Recordamos el pasado con fotos y vídeos. También con lo que cuentan los mayores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un álbum de fotos abierto con la foto de un bebé y la de una tarta de cumpleaños">${BG}
        <rect x="30" y="30" width="200" height="120" rx="8" fill="#c99a6a"/><rect x="38" y="36" width="90" height="108" fill="var(--card)"/><rect x="132" y="36" width="90" height="108" fill="var(--card)"/><path d="M130 36 V 144" stroke="#a37a4c" stroke-width="2"/>
        <rect x="50" y="48" width="66" height="66" fill="var(--water)" fill-opacity=".2" stroke="var(--line)"/>${bebe(83, 104)}
        <rect x="144" y="48" width="66" height="66" fill="var(--sun)" fill-opacity=".15" stroke="var(--line)"/>${tarta(177, 104, 3)}
        ${txt(83, 134, "bebé", { size: 12, color: "var(--muted)" })}${txt(177, 134, "3 años", { size: 12, color: "var(--muted)" })}
        ${txt(130, 22, "antes", { size: 14, color: "var(--muted)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>El presente</h3><p>El <mark>presente</mark> es lo que pasa <b>ahora</b>, en este momento.</p><p>Ahora estás en primero de Primaria. Ahora estás aprendiendo cosas nuevas.</p><p>Para hablar del presente decimos: «hoy», «ahora» o «en este momento».</p><p>Mira a tu alrededor. Todo lo que ves está pasando en el presente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño en clase, sentado frente a la pizarra">${BG}
        <rect x="40" y="20" width="180" height="70" rx="6" fill="#2f5d47" stroke="#8a5a2b" stroke-width="5"/>
        ${txt(130, 52, "HOY", { size: 22, color: "#fff", font: D, weight: 800 })}${txt(130, 76, "estoy en 1.º", { size: 12, color: "#e9f3ec", weight: 400 })}
        ${persona(130, 166, 66, "var(--pen)")}<rect x="90" y="140" width="80" height="8" rx="3" fill="#c99a6a"/>
        ${txt(40, 170, "ahora", { size: 14, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>El futuro</h3><p>El <mark>futuro</mark> es lo que todavía no ha pasado. Es lo que <b>vendrá</b> después.</p><p>Mañana, el verano que viene y cuando seas mayor son futuro.</p><p>Para hablar del futuro decimos: «mañana», «después» o «cuando sea mayor».</p><p>¿Qué te gustaría ser de mayor? ¿Qué harás el próximo verano?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño imagina, en una nube de pensamiento, que de mayor será astronauta">${BG}
        ${persona(60, 166, 80, "var(--pen)")}
        <circle cx="86" cy="82" r="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="98" cy="70" r="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <ellipse cx="172" cy="70" rx="72" ry="54" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g transform="translate(150 92)"><path d="M0 -60 Q 12 -46 12 -16 H -12 Q -12 -46 0 -60 Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/><circle cy="-38" r="5" fill="var(--water)"/><path d="M-12 -18 L -20 -4 L -12 -8 Z M12 -18 L 20 -4 L 12 -8 Z" fill="var(--red)"/><path d="M-6 -12 Q 0 0 6 -12 Z" fill="var(--sun)"/></g>
        ${luna(204, 46, 10)}${txt(200, 98, "de mayor", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Así crezco</h3><p>Las personas <mark>crecemos</mark> y cambiamos con el tiempo.</p><p>Primero somos <b>bebés</b>. No sabemos andar ni hablar. Después somos <b>niños</b> y vamos al cole.</p><p>Luego somos <b>adultos</b> y trabajamos. Al final somos <b>mayores</b>, como los abuelos.</p><p>Es el ciclo de la vida. Todos pasamos por él.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro personas en fila de menor a mayor: bebé, niño, adulto y abuelo">${BG}
        ${bebe(34, 150)}${persona(92, 150, 64, "var(--pen)")}${persona(160, 150, 96, "var(--leaf)")}${persona(224, 150, 90, "var(--muted)", "#ddd")}
        <path d="M248 92 V 150" stroke="#8a5a2b" stroke-width="3"/><path d="M248 92 q -6 -6 -10 0" stroke="#8a5a2b" stroke-width="3" fill="none"/>
        ${txt(34, 170, "bebé", { size: 12 })}${txt(92, 170, "niño", { size: 12 })}${txt(160, 170, "adulto", { size: 12 })}${txt(224, 170, "mayor", { size: 12 })}</svg>`,
      video: { id: "Ji4GrFkfla0", titulo: "Cómo elaborar una línea de tiempo de tu vida", canal: "Escuela de Aprendices", vistas: 1204233, megusta: 0 },
    },
    {
      html: `<h3>La línea del tiempo</h3><p>Podemos ordenar lo que pasa en una <mark>línea del tiempo</mark>.</p><p>Es una flecha. A la izquierda va lo que pasó <b>primero</b>. A la derecha, lo que pasó <b>después</b>.</p><p>En tu línea puedes poner cuando naciste y cuando aprendiste a andar. También tu primer día de cole y tu último cumpleaños.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una línea del tiempo con cuatro momentos: nací, anduve, fui al cole y cumplí 6 años">${BG}
        ${flecha(14, 110, 248, "var(--pen)")}
        ${[["nací", 0], ["ando", 1], ["cole", 3], ["6 años", 6]].map(([t, a], i) => {
          const x = 36 + i * 60;
          return `<circle cx="${x}" cy="110" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>${txt(x, 140, t, { size: 12 })}${txt(x, 158, a + (a === 1 ? " año" : " años"), { size: 10, color: "var(--muted)", weight: 400 })}`;
        }).join("")}
        ${bebe(36, 92)}<g transform="translate(96 96)"><circle cy="-30" r="8" fill="#f4c7a1"/><path d="M0 -22 V -8 M0 -8 L -6 4 M0 -8 L 7 2 M0 -18 L -7 -10 M0 -18 L 7 -12" stroke="var(--pen)" stroke-width="3" stroke-linecap="round"/></g>
        <g transform="translate(156 96)"><rect x="-14" y="-24" width="28" height="22" rx="4" fill="var(--red)"/><path d="M-8 -24 Q 0 -34 8 -24" stroke="var(--red)" stroke-width="3" fill="none"/></g>${tarta(216, 96, 6)}
        ${txt(36, 30, "primero", { size: 12, color: "var(--muted)" })}${txt(216, 30, "después", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las cosas cambian</h3><p>Con el tiempo, las <mark>cosas cambian</mark>.</p><p>Antes, los teléfonos tenían cable y una rueda con números. Ahora llevamos el móvil en el bolsillo.</p><p>Antes, mucha gente lavaba la ropa a mano en el río. Ahora tenemos lavadora.</p><p>Los coches, las casas y la ropa también han cambiado mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un teléfono antiguo de rueda y un teléfono móvil">${BG}
        <rect x="14" y="20" width="112" height="140" rx="10" fill="#c99a6a" fill-opacity=".18"/><rect x="134" y="20" width="112" height="140" rx="10" fill="var(--water)" fill-opacity=".14"/>
        ${txt(70, 42, "antes", { size: 14, color: "#8a5a2b", font: D, weight: 800 })}${txt(190, 42, "ahora", { size: 14, color: "var(--pen)", font: D, weight: 800 })}
        ${telViejo(70, 120)}<path d="M94 112 q 14 10 4 26" stroke="var(--ink)" stroke-width="2" fill="none"/>${movil(190, 124)}</svg>`,
    },
    {
      html: `<h3>Preguntamos a los mayores</h3><p>Los abuelos saben muchas cosas del <mark>pasado</mark>.</p><p>Pregúntales: ¿a qué jugabais? ¿Cómo era vuestra escuela? ¿Teníais tele?</p><p>Mirad juntos <b>fotos antiguas</b>. Muchas son en blanco y negro.</p><p>Así descubrimos cómo vivía la gente antes. ¡Y aprendemos la historia de nuestra familia!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una abuela le enseña a una niña una foto antigua en blanco y negro">${BG}
        ${persona(70, 166, 100, "var(--inf)", "#ddd")}${persona(190, 166, 70, "var(--red)")}
        <rect x="104" y="60" width="54" height="44" rx="3" fill="#eee" stroke="#777" stroke-width="3" transform="rotate(-6 131 82)"/>
        <g transform="rotate(-6 131 82)"><circle cx="122" cy="76" r="7" fill="#999"/><path d="M114 96 Q 122 84 130 96 Z" fill="#999"/><circle cx="142" cy="78" r="6" fill="#777"/><path d="M135 96 Q 142 86 149 96 Z" fill="#777"/></g>
        ${txt(130, 30, "¿Cómo era antes?", { size: 14, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber ordenar el tiempo nos ayuda a <mark>contar lo que pasa</mark>.</p><p>Primero me levanté, después desayuné y luego vine al cole.</p><p>También nos ayuda a <b>planear</b>: mañana traeré el libro.</p><p>Y conocer el pasado nos enseña de dónde venimos. Así entendemos mejor el mundo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres palabras con flechas: primero, después y luego, para contar una historia en orden">${BG}
        ${[["primero", "var(--pen)"], ["después", "var(--leaf)"], ["luego", "var(--red)"]].map(([t, c], i) => {
          const x = 46 + i * 84;
          return `<rect x="${x - 36}" y="64" width="72" height="44" rx="10" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${txt(x, 92, t, { size: 13, color: c })}${i < 2 ? flecha(x + 38, 86, x + 46) : ""}`;
        }).join("")}
        ${sol(46, 38, 10)}<path d="M112 34 H 148 Q 146 54 130 54 Q 114 54 112 34 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M118 34 Q 130 26 142 34" fill="var(--sun)"/>${casa(214, 50, 0.45, "var(--sun)")}
        ${txt(130, 142, "contamos en orden", { size: 13, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Juego: ¿qué fue primero?</h3><p>Mira las tres viñetas de una planta. Están <mark>desordenadas</mark>.</p><p>¿Qué pasó primero? ¿Qué pasó después? ¿Y al final?</p><p>Primero se planta la <b>semilla</b>. Después sale una plantita. Al final crece una <b>flor</b>.</p><p>Inventa otra historia en tres viñetas. Pide a un amigo que la ordene.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres viñetas desordenadas: una flor, una semilla y una plantita">${BG}
        ${[0, 1, 2].map((i) => `<rect x="${14 + i * 82}" y="30" width="74" height="96" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M${20 + i * 82} 108 H ${82 + i * 82}" stroke="#8a5a2b" stroke-width="6"/>`).join("")}
        <path d="M51 106 V 70" stroke="var(--leaf)" stroke-width="3"/>${flor(51, 70, "var(--red)")}<ellipse cx="44" cy="90" rx="7" ry="3" fill="var(--leaf)"/>
        <ellipse cx="133" cy="104" rx="6" ry="4" fill="#8a5a2b" stroke="var(--ink)" stroke-width="1"/>
        <path d="M215 106 V 88" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="208" cy="88" rx="7" ry="3" fill="var(--leaf)"/><ellipse cx="222" cy="86" rx="7" ry="3" fill="var(--leaf)"/>
        ${["A", "B", "C"].map((l, i) => txt(51 + i * 82, 150, l, { size: 16, color: "var(--pen)", font: D, weight: 800 })).join("")}
        ${txt(130, 172, "orden: B, C, A", { size: 11, color: "var(--muted)", weight: 400 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Pasado, presente y futuro",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Una flecha del tiempo con el pasado a la izquierda, el presente en el centro y el futuro a la derecha">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${flecha(40, 200, 600, "var(--ink)")}
      ${[["PASADO", "ayer · antes", "var(--muted)"], ["PRESENTE", "hoy · ahora", "var(--pen)"], ["FUTURO", "mañana · después", "var(--leaf)"]].map(([t, d, c], i) => {
        const x = 130 + i * 190;
        return `<circle cx="${x}" cy="200" r="12" fill="${c}"/>${txt(x, 246, t, { size: 24, color: c, font: D, weight: 800 })}${txt(x, 272, d, { size: 15 })}`;
      }).join("")}
      ${bebe(130, 170)}${persona(320, 182, 110, "var(--pen)")}${persona(510, 182, 140, "var(--leaf)")}
    </svg>`,
  },
  video: { id: "tpBrlHtR3GA", titulo: "Pasado, Presente y Futuro | Aprendemos Cantando. Canciones para Niños.", canal: "Happy Learning Español", vistas: 577847, megusta: 3287, busqueda: "pasado presente y futuro para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hoy es viernes. ¿Qué día fue ayer? ¿Qué día será mañana?",
      pasos: ["Decimos los días en orden.", "Antes del viernes va el jueves.", "Después del viernes va el sábado."],
      resultado: "ayer fue jueves y mañana será sábado." },
    { enunciado: "«Cuando era bebé, dormía en una cuna.» ¿Es pasado, presente o futuro?",
      pasos: ["Dice «cuando era bebé».", "Eso ya ocurrió hace tiempo.", "Lo que ya ocurrió es pasado."],
      resultado: "es pasado." },
    { enunciado: "Ordena: comer, despertarse, cenar.",
      pasos: ["Por la mañana nos despertamos.", "Al mediodía comemos.", "Por la noche cenamos."],
      resultado: "despertarse, comer y cenar." },
  ],
  errores: [
    "Decir «mañana» por «esta mañana»: «mañana» también es el día que viene.",
    "Usar «ayer» para cualquier cosa del pasado, aunque pasara hace mucho.",
    "Poner lo más reciente a la izquierda en la línea del tiempo: lo primero va a la izquierda.",
    "Pensar que las cosas siempre fueron como ahora.",
  ],
  ejercicios: [
    { q: "Si hoy es lunes, ¿qué día fue ayer?", sol: "Domingo." },
    { q: "Si hoy es jueves, ¿qué día será mañana?", sol: "Viernes." },
    { q: "Di algo que hiciste ayer.", sol: "Respuesta libre en pasado." },
    { q: "Di algo que harás mañana.", sol: "Respuesta libre en futuro." },
    { q: "«Estoy leyendo un cuento.» ¿Pasado, presente o futuro?", sol: "Presente." },
    { q: "«El verano que viene iré a la playa.» ¿Pasado, presente o futuro?", sol: "Futuro." },
    { q: "Ordena: adulto, bebé, niño, mayor.", sol: "Bebé, niño, adulto y mayor." },
    { q: "Di una cosa que antes era distinta.", sol: "Por ejemplo: los teléfonos tenían cable." },
    { q: "Haz tu línea del tiempo con tres fotos o dibujos.", sol: "De izquierda a derecha, de lo más antiguo a lo más nuevo." },
    { q: "Pregunta a un abuelo a qué jugaba de niño.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "El día de antes de hoy es…", o: ["ayer", "mañana", "hoy"], a: 0, e: "Ayer." },
    { q: "El día de después de hoy es…", o: ["ayer", "mañana", "anteayer"], a: 1, e: "Mañana." },
    { q: "Lo que ya pasó es el…", o: ["futuro", "presente", "pasado"], a: 2, e: "El pasado." },
    { q: "Lo que pasa ahora es el…", o: ["presente", "pasado", "futuro"], a: 0, e: "El presente." },
    { q: "Lo que todavía no ha pasado es el…", o: ["pasado", "futuro", "presente"], a: 1, e: "El futuro." },
    { q: "Primero somos…", o: ["mayores", "bebés", "adultos"], a: 1, e: "Bebés." },
    { q: "En la línea del tiempo, lo primero va…", o: ["a la izquierda", "a la derecha", "arriba"], a: 0, e: "A la izquierda." },
    { q: "Antes los teléfonos…", o: ["tenían cable", "eran de juguete", "no existían nunca"], a: 0, e: "Tenían cable." },
    { q: "Para saber cómo era antes podemos…", o: ["preguntar a los abuelos", "dormir", "correr"], a: 0, e: "Preguntar a los abuelos." },
    { q: "Si hoy es sábado, mañana es…", o: ["viernes", "domingo", "lunes"], a: 1, e: "Domingo." },
  ],
  examen: [
    { q: "«Ayer fui al parque» habla del…", o: ["pasado", "futuro", "presente"], a: 0, e: "Del pasado." },
    { q: "«Ahora estoy en clase» habla del…", o: ["pasado", "presente", "futuro"], a: 1, e: "Del presente." },
    { q: "¿Qué va antes?", o: ["ser niño", "ser bebé", "ser adulto"], a: 1, e: "Ser bebé." },
    { q: "Las fotos antiguas nos enseñan…", o: ["el pasado", "el futuro", "nada"], a: 0, e: "El pasado." },
  ],
  feynman: ["Ayer, hoy y mañana", "Pasado, presente y futuro", "Cómo se hace una línea del tiempo"],
  mapa: mapa("EL TIEMPO PASA", "var(--pri)", [
    ["Pasado", "ayer · antes · fotos", "var(--muted)"],
    ["Presente", "hoy · ahora", "var(--pen)"],
    ["Futuro", "mañana · de mayor", "var(--leaf)"],
    ["Línea del tiempo", "primero → después", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["¿Qué es ayer?", "El día de antes de hoy"],
    ["¿Qué es mañana?", "El día de después de hoy"],
    ["¿Qué es el pasado?", "Lo que ya ocurrió"],
    ["¿Qué es el presente?", "Lo que pasa ahora"],
    ["¿Qué es el futuro?", "Lo que todavía no ha pasado"],
    ["¿Cómo crecemos?", "Bebé, niño, adulto y mayor"],
    ["¿Qué es una línea del tiempo?", "Una flecha con las cosas en orden"],
    ["¿Quién sabe del pasado?", "Los mayores, las fotos y los libros"],
  ],
  familias: [
    "Mirad juntos fotos de cuando era bebé y ordenadlas.",
    "Por la noche, preguntad: ¿qué hiciste hoy? ¿Qué harás mañana?",
    "Que pregunte a los abuelos cómo era su escuela.",
    "Haced una línea del tiempo de su vida en una tira de papel.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: nociones temporales básicas (antes, ahora, después; ayer, hoy, mañana), cambios en la propia vida y en los objetos cotidianos, la línea del tiempo personal y las fuentes orales y familiares (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Línea del tiempo de la clase con una foto de cada alumno de bebé.", "Entrevista a un abuelo o abuela en el aula.", "Rincón de objetos antiguos y modernos para comparar."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
