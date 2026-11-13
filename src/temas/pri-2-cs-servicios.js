// Ciencias Sociales 2º de Primaria: los servicios públicos. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, publico, cruzRoja, bus, camion, edificio, arbol, hierba, suelo, chip, tick, equis, flechaR, contenedor, gota, libro } = require("./_pri2b");

const farola = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 V-70 q0 -8 10 -8 h6" stroke="#555" stroke-width="4" fill="none"/><path d="M12 -80 h16 l-4 8 h-8z" fill="#555"/><circle cx="20" cy="-68" r="5" fill="var(--sun)"/></g>`;
const ambulancia = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-40" y="-36" width="56" height="28" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M16 -8 V-30 H30 L40 -18 V-8Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M-24 -26 h8 v-4 h4 v4 h8 v4 h-8 v4 h-4 v-4 h-8z" fill="var(--red)"/><rect x="-6" y="-42" width="12" height="6" fill="#1f6feb"/><circle cx="-24" cy="-6" r="7" fill="#1b2235"/><circle cx="26" cy="-6" r="7" fill="#1b2235"/></g>`;
const bomberos = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-44" y="-36" width="60" height="28" fill="var(--red)"/><path d="M16 -8 V-30 H32 L42 -18 V-8Z" fill="var(--red)"/><rect x="20" y="-27" width="10" height="8" fill="var(--water)" opacity=".7"/><path d="M-40 -42 H10 M-40 -46 H10" stroke="#cfd5df" stroke-width="2"/>${[-36, -26, -16, -6, 4].map((a) => `<path d="M${a} -46 V-42" stroke="#cfd5df" stroke-width="2"/>`).join("")}<circle cx="-28" cy="-6" r="7" fill="#1b2235"/><circle cx="26" cy="-6" r="7" fill="#1b2235"/></g>`;
const policia = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 -8 V-20 H-16 L-8 -32 H12 L20 -20 H30 V-8Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><rect x="-30" y="-18" width="60" height="5" fill="#1f6feb"/><rect x="-4" y="-38" width="10" height="6" fill="#1f6feb"/><circle cx="-17" cy="-6" r="7" fill="#1b2235"/><circle cx="17" cy="-6" r="7" fill="#1b2235"/></g>`;
const libroAbierto = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -4 Q-14 -12 -30 -8 V18 Q-14 14 0 22Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -4 Q14 -12 30 -8 V18 Q14 14 0 22Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/>${[0, 6, 12].map((d) => `<path d="M-24 ${d - 2} q10 -3 20 0 M4 ${d - 2} q10 -3 20 0" stroke="var(--line)" fill="none"/>`).join("")}</g>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "Los servicios públicos",
  objetivos: ["Saber qué son los servicios públicos y para qué sirven", "Conocer los principales: educación, sanidad, seguridad, transporte, limpieza y cultura", "Entender que se pagan entre todos y que hay que cuidarlos"],
  claves: ["servicio público", "colegio", "centro de salud", "bomberos", "policía", "biblioteca", "impuestos"],
  pregunta: {
    texto: "Cada mañana las calles están limpias, las farolas se apagan solas y el colegio abre sus puertas. ¿Quién hace que todo eso funcione?",
    respuesta: "Son los <mark>servicios públicos</mark>. Los organizan el ayuntamiento y otros gobiernos para <b>todas las personas</b>. Se pagan con el dinero que aportamos entre todos: los <b>impuestos</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un servicio público?</h3><p>Un <mark>servicio público</mark> es algo que se hace para <b>ayudar a todas las personas</b> de una localidad o de un país.</p><p>Por ejemplo, el colegio, el centro de salud, la limpieza de las calles, el autobús o la biblioteca. Son de <b>todos</b> y cualquiera puede usarlos, sea rico o pobre, mayor o pequeño.</p>`,
      svg: svg("El colegio, el centro de salud y la biblioteca son de todos", `${suelo(146)}${publico(50, 146, "COLEGIO", "var(--sun)", 76)}${publico(132, 146, "SALUD", "var(--red)", 64)}${publico(214, 146, "BIBLIOTECA", "var(--pen)", 78)}${cruzRoja(132, 60, 0.6)}${txt(130, 168, "para todas las personas", "var(--leaf)", 13)}`),
      video: V("cgCZwyvb1V0"),
    },
    {
      html: `<h3>La educación</h3><p>Todos los niños y niñas tienen <mark>derecho a ir al colegio</mark>. En España, la escuela es obligatoria desde los 6 hasta los 16 años.</p><p>En el colegio aprendemos a leer, a escribir, a contar y a convivir. Los <b>maestros y maestras</b> nos enseñan. En los colegios públicos, las familias no pagan por las clases.</p>`,
      svg: svg("Una maestra en la pizarra y dos alumnos", `${suelo(152)}<rect x="40" y="30" width="120" height="70" rx="4" fill="#2f5d4a" stroke="#8a5a2b" stroke-width="4"/>${rot(100, 60, "2 + 3 = 5", { size: 18, color: "#fff" })}${rot(100, 86, "Hola", { size: 15, color: "#fff" })}${nino(186, 152, { nina: true, c: "var(--red)", s: 1.25, pose: "lanza" })}${nino(66, 152, { c: "var(--pen)", s: 0.75, pose: "sentado" })}${nino(120, 152, { c: "var(--leaf)", s: 0.75, pose: "sentado", nina: true })}`),
    },
    {
      html: `<h3>La sanidad</h3><p>Cuando estamos enfermos vamos al <mark>centro de salud</mark>. Allí nos atienden el <b>médico</b>, la <b>pediatra</b> o el personal de <b>enfermería</b>.</p><p>Si algo es muy grave, vamos al <b>hospital</b>. Las <b>ambulancias</b> llevan a las personas heridas. Las vacunas nos protegen de muchas enfermedades. ¡Y todo esto es para todos!</p>`,
      svg: svg("Un hospital con una cruz roja y una ambulancia", `${suelo(152)}<g transform="translate(70 152)"><rect x="-56" y="-100" width="112" height="100" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2].map((r) => [0, 1, 2, 3].map((k) => `<rect x="${-48 + k * 26}" y="${-86 + r * 26}" width="16" height="14" fill="var(--water)" opacity=".5"/>`).join("")).join("")}<rect x="-12" y="-24" width="24" height="24" fill="#8a5a2b"/></g>${cruzRoja(70, 36, 1.2)}${ambulancia(196, 152, 1.1)}${txt(196, 172, "ambulancia", "var(--red)", 13)}`),
    },
    {
      html: `<h3>La seguridad</h3><p>Algunos servicios nos <mark>protegen</mark>. La <b>policía</b> vigila que se cumplan las normas y ayuda a quien lo necesita.</p><p>Los <b>bomberos</b> apagan incendios y rescatan a personas. Protección Civil ayuda en las inundaciones y las tormentas. En una emergencia llamamos al <b>112</b> y nos envían ayuda.</p>`,
      svg: svg("Un camión de bomberos y un coche de policía", `${suelo(150)}${bomberos(74, 150, 1.25)}${policia(196, 150, 1.25)}${txt(74, 170, "bomberos", "var(--red)", 13)}${txt(196, 170, "policía", "#1f6feb", 13)}${big(130, 34, "112", "var(--red)", 24)}`),
    },
    {
      html: `<h3>La limpieza y el agua</h3><p>Cada día, los <mark>barrenderos</mark> limpian las calles y los camiones recogen la <b>basura</b> de los contenedores.</p><p>El ayuntamiento también lleva el <b>agua potable</b> hasta los grifos de las casas y se lleva el agua sucia por el alcantarillado. Y enciende las <b>farolas</b> por la noche para que veamos.</p>`,
      svg: svg("Un camión de la basura recoge un contenedor junto a una farola", `${suelo(150)}${camion(80, 150, "var(--leaf)", 1.2)}${contenedor(160, 150, "#2f9e44", "")}${farola(212, 150)}${gota(236, 120, 1)}${txt(80, 170, "basura", "var(--leaf)", 13)}${txt(220, 170, "luz y agua", "var(--sun)", 13)}`),
    },
    {
      html: `<h3>El transporte público</h3><p>El <mark>transporte público</mark> lleva a muchas personas a la vez. Lo puede usar cualquiera pagando un billete.</p><p>Son el <b>autobús</b>, el <b>metro</b>, el <b>tren</b> y el tranvía. Contaminan menos que ir cada uno en su coche y hay menos atascos. Dentro, cedemos el asiento a las personas mayores.</p>`,
      svg: svg("Un autobús en una parada con personas esperando", `${suelo(150)}${bus(90, 150, "var(--sun)", 1.4)}<g><path d="M200 150 V70" stroke="#555" stroke-width="3"/><rect x="186" y="54" width="28" height="22" rx="3" fill="#1f6feb"/>${rot(200, 70, "BUS", { size: 10, color: "#fff" })}</g>${nino(222, 150, { c: "var(--red)", nina: true, s: 0.8 })}${nino(242, 150, { c: "var(--pen)", s: 0.7 })}`),
    },
    {
      html: `<h3>Cultura, deporte y ocio</h3><p>También hay servicios para <mark>aprender y divertirse</mark>. En la <b>biblioteca</b> podemos leer y llevarnos libros prestados gratis.</p><p>En el <b>polideportivo</b> hacemos deporte. Los <b>parques</b> son para jugar y pasear. Y en el museo o la casa de cultura vemos exposiciones y obras de teatro.</p>`,
      svg: svg("Un libro abierto, una pelota y un parque con columpio", `${libroAbierto(60, 90, 1.4)}<circle cx="130" cy="96" r="18" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M114 90 q16 10 32 0 M130 78 v36" stroke="var(--ink)" stroke-width="1.5" fill="none"/><g transform="translate(206 140)"><path d="M-26 0 L-14 -64 H14 L26 0" stroke="var(--red)" stroke-width="4" fill="none"/><path d="M-6 -64 V-26 M6 -64 V-26" stroke="var(--ink)" stroke-width="1.5"/><rect x="-10" y="-26" width="20" height="5" fill="#8a5a2b"/></g>${txt(60, 140, "biblioteca", "var(--pen)", 13)}${txt(130, 140, "deporte", "var(--sun)", 13)}${txt(206, 160, "parque", "var(--red)", 13)}`),
    },
    {
      html: `<h3>¿Quién los paga?</h3><p>Los servicios públicos cuestan mucho dinero: los sueldos de los maestros, las ambulancias, los autobuses… Los pagamos <mark>entre todos</mark>.</p><p>Las personas adultas aportan una parte de su dinero: son los <b>impuestos</b>. Con ese dinero, el ayuntamiento y los gobiernos pagan los servicios. Por eso son de todos y <b>hay que cuidarlos</b>.</p>`,
      svg: svg("Monedas de muchas personas van a una hucha común y salen un colegio y un hospital", `${[30, 70, 110].map((x, i) => `${nino(x, 70, { c: ["var(--pen)", "var(--red)", "var(--leaf)"][i], s: 0.6 })}<circle cx="${x}" cy="84" r="7" fill="var(--sun)" stroke="var(--ink)"/>`).join("")}${flechaR(70, 96, 70, 112)}<g transform="translate(70 136)"><ellipse rx="34" ry="22" fill="#f4b6c2" stroke="var(--ink)" stroke-width="1.5"/><rect x="-10" y="-24" width="20" height="4" fill="var(--ink)"/>${rot(0, 6, "de todos", { size: 11 })}</g>${flechaR(108, 136, 140, 136)}${publico(196, 96, "COLEGIO", "var(--sun)", 70)}${publico(196, 170, "SALUD", "var(--red)", 60)}`),
    },
    {
      html: `<h3>Juego: ¿a quién llamo?</h3><p>Une cada problema con el servicio que lo soluciona. «Hay humo en un edificio»: los <mark>bomberos</mark>. «Me duele mucho la tripa»: el <mark>centro de salud</mark>.</p><p>«Quiero leer un cuento nuevo»: la <b>biblioteca</b>. «Tengo que ir al centro de la ciudad»: el <b>autobús</b>. «Alguien se ha perdido»: la <b>policía</b>. Recuerda: en una emergencia, el <b>112</b>.</p>`,
      svg: svg("Un edificio con humo y un camión de bomberos; una niña con dolor de tripa y una cruz roja", `${edificio(46, 128, 44, 80, "#9aa3b5")}<g fill="#6b7385" opacity=".6"><circle cx="40" cy="40" r="10"/><circle cx="52" cy="28" r="12"/></g>${flechaR(76, 100, 110, 100)}${bomberos(160, 128, 0.9)}${txt(150, 40, "¡Hay humo!", "var(--muted)", 15)}${chip(130, 160, 120, "¡bomberos!", "var(--red)", 14)}`),
    },
  ],
  figura: {
    titulo: "Servicios públicos: para todos",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Educación, sanidad, seguridad, limpieza, transporte y cultura">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Educación", "colegio", "var(--sun)"], ["Sanidad", "hospital", "var(--red)"], ["Seguridad", "bomberos", "#1f6feb"], ["Limpieza", "basura", "var(--leaf)"], ["Transporte", "autobús", "var(--pen)"], ["Cultura", "biblioteca", "var(--inf)"]].map(([t, d, c], i) => `<rect x="${14 + i * 104}" y="30" width="96" height="200" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(62 + i * 104, 190, t, { size: 15, color: c, w: 800 })}${rot(62 + i * 104, 212, d, { size: 13, color: "var(--muted)" })}`).join("")}
      ${publico(62, 150, "COLE", "var(--sun)", 60)}${cruzRoja(166, 110, 2)}${bomberos(270, 150, 0.85)}${contenedor(374, 150, "#2f9e44", "")}${bus(478, 150, "var(--sun)", 0.9)}${libroAbierto(582, 110, 1.3)}
    </svg>`,
  },
  video: V("nlhS2aJNfqY", "qué son los servicios públicos"),
  ejemplos: [
    { enunciado: "¿El colegio público es un servicio público?", pasos: ["Es para todos los niños y niñas.", "Lo pagamos entre todos con los impuestos.", "Lo organiza el gobierno."], resultado: "sí, es el servicio de educación." },
    { enunciado: "Ves fuego en el monte. ¿Qué haces?", pasos: ["Es una emergencia.", "Me alejo del fuego y aviso a un adulto.", "El adulto llama al 112 para que vengan los bomberos."], resultado: "avisar a un adulto y llamar al 112." },
    { enunciado: "¿Por qué no debemos romper los columpios del parque?", pasos: ["El parque es un servicio público.", "Se paga con el dinero de todos.", "Si se rompe, nadie puede usarlo y cuesta dinero arreglarlo."], resultado: "porque es de todos y hay que cuidarlo." },
  ],
  errores: [
    "Pensar que los servicios públicos son gratis: los pagamos entre todos con los impuestos.",
    "Creer que lo que es de todos no es de nadie: es de todos y lo cuidamos.",
    "Llamar al 112 para jugar: es solo para emergencias de verdad.",
    "Pensar que solo hay servicios en las ciudades: los pueblos también tienen.",
  ],
  ejercicios: [
    { q: "¿Qué es un servicio público?", sol: "Algo que se organiza para ayudar a todas las personas." },
    { q: "Di cinco servicios públicos.", sol: "Colegio, centro de salud, bomberos, autobús y biblioteca." },
    { q: "¿A dónde vamos si estamos enfermos?", sol: "Al centro de salud o, si es grave, al hospital." },
    { q: "¿Qué hacen los bomberos?", sol: "Apagan incendios y rescatan a personas." },
    { q: "¿Qué número llamamos en una emergencia?", sol: "El 112." },
    { q: "¿Qué hacen los barrenderos?", sol: "Limpian las calles." },
    { q: "Di dos transportes públicos.", sol: "Por ejemplo: el autobús y el metro." },
    { q: "¿Qué podemos hacer en la biblioteca?", sol: "Leer y llevarnos libros prestados." },
    { q: "¿Con qué dinero se pagan los servicios públicos?", sol: "Con los impuestos que pagamos entre todos." },
    { q: "Escribe dos formas de cuidar los servicios públicos.", sol: "No romper los columpios y devolver los libros de la biblioteca." },
  ],
  quiz: [
    { q: "Un servicio público es para…", o: ["todas las personas", "solo los ricos", "solo los mayores"], a: 0, e: "Es de todos." },
    { q: "Si estás enfermo vas al…", o: ["centro de salud", "polideportivo", "museo"], a: 0, e: "Te atiende el médico." },
    { q: "Los incendios los apagan…", o: ["los bomberos", "los barrenderos", "los maestros"], a: 0, e: "Con sus camiones." },
    { q: "El número de emergencias es…", o: ["112", "123", "911"], a: 0, e: "En España y en Europa." },
    { q: "En la biblioteca podemos…", o: ["llevarnos libros prestados", "comprar ropa", "ver al médico"], a: 0, e: "Gratis." },
    { q: "El autobús es…", o: ["transporte público", "un servicio de sanidad", "un juguete"], a: 0, e: "Lleva a muchas personas." },
    { q: "¿Quién limpia las calles?", o: ["Los barrenderos", "Los pilotos", "Los cocineros"], a: 0, e: "Cada día." },
    { q: "Los servicios públicos se pagan con…", o: ["los impuestos", "caramelos", "nada"], a: 0, e: "Dinero de todos." },
    { q: "La escuela en España es obligatoria desde los…", o: ["6 años", "12 años", "18 años"], a: 0, e: "Hasta los 16." },
    { q: "Los columpios del parque…", o: ["se cuidan", "se rompen", "se esconden"], a: 0, e: "Son de todos." },
  ],
  examen: [
    { q: "¿Cuál es un servicio de seguridad?", o: ["La policía", "La biblioteca", "El parque"], a: 0, e: "Nos protege." },
    { q: "¿Qué lleva a las personas heridas al hospital?", o: ["La ambulancia", "El camión de la basura", "El tranvía"], a: 0, e: "Con su sirena." },
    { q: "¿Para qué sirven los impuestos?", o: ["Para pagar los servicios públicos", "Para nada", "Para comprar juguetes"], a: 0, e: "Entre todos." },
    { q: "El 112 se llama…", o: ["en emergencias", "para jugar", "para pedir pizza"], a: 0, e: "Solo emergencias." },
  ],
  feynman: ["Qué es un servicio público", "Cinco servicios públicos y para qué sirven", "Quién paga los servicios públicos"],
  mapaT: ["SERVICIOS PÚBLICOS", [
    ["Educación y salud", "colegio · centro de salud", "var(--red)"],
    ["Seguridad", "policía · bomberos · 112", "#1f6feb"],
    ["Limpieza y transporte", "basura · autobús · metro", "var(--leaf)"],
    ["Los pagamos", "entre todos: impuestos", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es un servicio público?", "Algo para ayudar a todas las personas"],
    ["Servicio de educación", "El colegio"],
    ["Servicio de sanidad", "El centro de salud y el hospital"],
    ["¿Quién apaga los incendios?", "Los bomberos"],
    ["Número de emergencias", "112"],
    ["Un transporte público", "El autobús"],
    ["¿Qué prestamos en la biblioteca?", "Libros"],
    ["¿Cómo se pagan?", "Con los impuestos de todos"],
  ],
  familias: [
    "Sacad juntos el carné de la biblioteca y llevaos un libro prestado.",
    "En un paseo, contad cuántos servicios públicos veis: farolas, papeleras, parada de bus…",
    "Practicad cómo llamar al 112 y qué decir: nombre, dirección y qué pasa.",
    "Usad un día el transporte público y hablad de por qué contamina menos.",
  ],
  saberes: "Sociedades y territorios: los servicios públicos (educación, sanidad, seguridad, limpieza, transporte y cultura), su financiación con impuestos y el respeto por los bienes comunes",
  ideas: ["Visita de bomberos o policía local al colegio.", "Mapa del barrio con pegatinas de servicios públicos.", "Juego de rol: llamar al 112 y explicar una emergencia."],
});
