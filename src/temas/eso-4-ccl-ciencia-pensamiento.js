// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "Ciencia y pensamiento en la Antigüedad",
  minutos: 60,
  objetivos: ["Conocer las principales escuelas filosóficas griegas y romanas", "Explicar aportaciones científicas de la Antigüedad en matemáticas, astronomía, medicina y técnica", "Comprender cómo Eratóstenes midió la Tierra", "Valorar la herencia científica clásica y sus límites"],
  claves: ["presocráticos", "Academia", "Liceo", "Euclides", "Hipócrates", "Eratóstenes"],
  pregunta: {
    texto: "Hace 2.200 años, sin satélites ni GPS, un sabio midió el tamaño de la Tierra con un palo, unas sombras y mucha cabeza. Se equivocó en menos de un 2 %. ¿Cómo lo hizo?",
    respuesta: "Fue <mark>Eratóstenes</mark>, director de la Biblioteca de Alejandría. Comparó la sombra del Sol en dos ciudades el mismo día y aplicó la geometría. Es solo un ejemplo de la enorme <b>ciencia</b> que griegos y romanos desarrollaron usando la razón y la observación.",
  },
  bloques: [
    {
      html: `<h3>Los primeros sabios: ciencia y filosofía unidas</h3><p>En Grecia, filosofía y ciencia nacieron juntas, en el siglo VI a. C. Los <b>presocráticos</b> buscaron explicaciones naturales al mundo. <b>Tales de Mileto</b> predijo un eclipse y aplicó la geometría para calcular la altura de las pirámides por su sombra. <b>Pitágoras</b> y sus seguidores pensaron que <mark>todo es número</mark>: descubrieron relaciones matemáticas en la música y el famoso teorema de los triángulos rectángulos. <b>Demócrito</b> propuso que la materia está formada por átomos indivisibles, una idea que la química confirmaría más de 2.000 años después.</p>`,
      svg: filas("Primeros sabios griegos", [["Tales", "predice un eclipse, geometría", "var(--water)"], ["Pitágoras", "todo es número; teorema", "var(--pen)"], ["Heráclito", "todo cambia", "var(--red)"], ["Demócrito", "átomos y vacío", "var(--leaf)"]]),
    },
    {
      html: `<h3>Sócrates, Platón y Aristóteles</h3><p>Atenas vivió en los siglos V y IV a. C. su gran momento intelectual. <b>Sócrates</b> se preguntó por la virtud y la justicia mediante el diálogo. Su discípulo <b>Platón</b> fundó la <mark>Academia</mark> (387 a. C.), la primera escuela de estudios superiores; en su puerta, se decía, estaba escrito: «No entre aquí quien no sepa geometría». <b>Aristóteles</b>, alumno de Platón, fundó el <mark>Liceo</mark> y escribió sobre casi todo: lógica, física, biología (clasificó más de 500 animales), política, ética y poesía. Su influencia duró hasta el siglo XVII.</p>`,
      svg: filas("Maestros y discípulos", [["Sócrates", "el diálogo, s. V a. C.", "var(--red)"], ["Platón", "alumno de Sócrates: Academia", "var(--pen)"], ["Aristóteles", "alumno de Platón: Liceo", "var(--leaf)"], ["Alejandro", "alumno de Aristóteles", "var(--sun)"]]),
      video: { id: "LXrd-E3oV8U", titulo: "La filosofía griega, resumen: presocráticos, sofistas, Sócrates, Platón, Aristóteles", canal: "Cuaderno de Historia", vistas: 312412, megusta: 0 },
    },
    {
      html: `<h3>Escuelas helenísticas y romanas</h3><p>Tras Alejandro Magno, la filosofía se centró en cómo vivir feliz en un mundo inseguro. El <b>epicureísmo</b> (Epicuro) buscaba la felicidad en placeres sencillos, la amistad y la ausencia de dolor y miedo. El <b>estoicismo</b> (Zenón) enseñaba a aceptar con serenidad lo que no depende de nosotros y a vivir según la razón. Los romanos adoptaron estas ideas: el cordobés <b>Séneca</b> y el emperador <b>Marco Aurelio</b> fueron grandes estoicos. Hoy decimos «tomárselo con estoicismo» para hablar de soportar las dificultades con calma.</p>`,
      svg: dos("Epicureísmo frente a estoicismo", ["Epicuro", ["placer sencillo", "amistad", "sin dolor", "sin miedo", "jardín"], "var(--sun)"], ["Estoicos", ["razón", "virtud", "aceptar", "serenidad", "Séneca"], "var(--pen)"]),
    },
    {
      html: `<h3>Matemáticas</h3><p>Los griegos convirtieron las matemáticas en una ciencia de <mark>demostraciones</mark>. <b>Euclides</b>, en Alejandría, escribió los <i>Elementos</i> (hacia el 300 a. C.), que partían de unos pocos axiomas para demostrar cientos de teoremas; fue el libro de texto de geometría durante más de 2.000 años. <b>Arquímedes</b> de Siracusa calculó un valor muy aproximado de π, descubrió el principio de flotación («¡Eureka!», gritó al darse cuenta en el baño) y explicó la palanca: «Dadme un punto de apoyo y moveré el mundo».</p>`,
    },
    {
      html: `<h3>Astronomía y geografía: Eratóstenes</h3><p>Los griegos sabían que la Tierra es <b>esférica</b>: Aristóteles lo dedujo de la sombra curva que proyecta sobre la Luna en los eclipses. <b>Eratóstenes</b> sabía que en Siena (Asuán), el mediodía del solsticio de verano, el Sol caía vertical en un pozo, sin sombra. Ese mismo día, en Alejandría, un palo daba una sombra con un ángulo de unos <b>7,2°</b>, es decir, 1/50 de la circunferencia. Como la distancia entre ambas ciudades era de unos 5.000 estadios, la Tierra medía 50 × 5.000 = <mark>250.000 estadios</mark>, unos 40.000 km: casi exacto. <b>Aristarco</b> incluso propuso que la Tierra gira alrededor del Sol, pero se impuso el modelo geocéntrico de <b>Ptolomeo</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento de Eratóstenes: rayos de sol paralelos; en Siena no hay sombra, en Alejandría la sombra forma un ángulo de 7,2 grados, igual al ángulo en el centro de la Tierra">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="96" cy="120" r="54" fill="var(--water)" opacity=".35" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M250 89 H 152 M250 120 H 166 M250 40 H 150" stroke="var(--sun)" stroke-width="2.5"/>
        <path d="M96 120 L 150 120" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/><path d="M96 120 L 140 89" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M150 120 h 14" stroke="var(--ink)" stroke-width="3"/><path d="M140 89 l 12 -8" stroke="var(--ink)" stroke-width="3"/>
        <path d="M118 120 A 22 22 0 0 0 114 107" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="11" font-weight="700"><text x="172" y="140" fill="var(--ink)">Siena</text><text x="160" y="76" fill="var(--ink)">Alejandría</text><text x="62" y="112" fill="var(--red)">7,2°</text><text x="176" y="32" fill="var(--hl-ink)">rayos del Sol</text><text x="14" y="22" fill="var(--pen)">7,2° = 1/50 de 360°</text><text x="14" y="38" fill="var(--pen)">Tierra ≈ 40.000 km</text></g></svg>`,
      video: { id: "tk1Z4LQUfh4", titulo: "Eratóstenes: el genio que midió la Tierra con palos y sombras", canal: "Universable", vistas: 336670, megusta: 0 },
    },
    {
      html: `<h3>Medicina</h3><p><b>Hipócrates</b> de Cos (siglo V a. C.), «padre de la medicina», separó la medicina de la magia: las enfermedades tienen <mark>causas naturales</mark> y hay que observar al paciente, anotar los síntomas y respetar el poder curativo de la naturaleza. Explicaba la salud como equilibrio de cuatro humores (sangre, flema, bilis amarilla y bilis negra), teoría que hoy sabemos errónea. Su <b>juramento hipocrático</b>, que obliga a no hacer daño y a guardar el secreto médico, inspira aún el compromiso de los médicos. En Roma, <b>Galeno</b> estudió la anatomía diseccionando animales y fue la gran autoridad médica hasta el Renacimiento.</p>`,
    },
    {
      html: `<h3>Técnica e inventos</h3><p>En la Antigüedad hubo inventos sorprendentes. <b>Herón de Alejandría</b> construyó la <i>eolípila</i>, una esfera que giraba con vapor, y puertas de templo automáticas. El <mark>mecanismo de Anticitera</mark>, hallado en un naufragio, es una especie de calculadora de engranajes de bronce que predecía eclipses y posiciones de los astros: el «ordenador» más antiguo conocido. Arquímedes ideó el <b>tornillo</b> para elevar agua y máquinas de guerra. Los romanos destacaron en ingeniería: calzadas, acueductos, el hormigón y la <b>grúa</b> movida por personas.</p>`,
      svg: rueda("Inventos de la Antigüedad", "INVENTOS", [["tornillo", "var(--water)"], ["eolípila", "var(--red)"], ["Anticitera", "var(--sun)"], ["acueducto", "var(--pen)"], ["hormigón", "var(--muted)"], ["palanca", "var(--leaf)"]], "var(--ink)"),
    },
    {
      html: `<h3>Alejandría y la herencia científica</h3><p>La <b>Biblioteca de Alejandría</b>, fundada hacia el 300 a. C., quiso reunir todos los libros del mundo: llegó a tener cientos de miles de rollos de papiro, y en el <b>Museo</b> trabajaban sabios pagados por el rey. Allí estudiaron Euclides, Eratóstenes, Herón o la matemática <b>Hipatia</b> (siglo IV d. C.). Gran parte de ese saber se perdió, pero mucho se salvó gracias a las copias de Bizancio y a los <mark>traductores árabes</mark>, que lo transmitieron a Europa en la Edad Media. Los científicos del Renacimiento, como Copérnico o Galileo, partieron de los clásicos para superarlos.</p>${tabla(["Campo", "Sabio", "Aportación"], [["Geometría", "Euclides", "los Elementos, demostraciones"], ["Física", "Arquímedes", "flotación, palanca, π"], ["Geografía", "Eratóstenes", "midió la Tierra"], ["Medicina", "Hipócrates, Galeno", "observación, anatomía"], ["Astronomía", "Ptolomeo", "modelo geocéntrico"], ["Biología", "Aristóteles", "clasificación de animales"]])}`,
    },
  ],
  figura: {
    titulo: "El saber antiguo en cuatro campos",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Filosofía, matemáticas, astronomía y medicina con sus principales autores">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Filosofía", ["Sócrates", "Platón", "Aristóteles"], "var(--pen)"], ["Matemáticas", ["Pitágoras", "Euclides", "Arquímedes"], "var(--leaf)"], ["Astronomía", ["Eratóstenes", "Aristarco", "Ptolomeo"], "var(--sun)"], ["Medicina", ["Hipócrates", "Galeno", "Herófilo"], "var(--red)"]].map(([t, ls, c], i) => `<rect x="${20 + i * 162}" y="16" width="150" height="168" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${20 + i * 162}" y="16" width="150" height="38" rx="12" fill="${c}"/><text x="${95 + i * 162}" y="41" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" ${D}>${t}</text>${ls.map((l, j) => `<text x="${95 + i * 162}" y="${88 + j * 32}" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${l}</text>`).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "v2Aywxr9ywU", titulo: "Los científicos de la antigua Grecia", canal: "unProfesor", vistas: 10646, megusta: 0, busqueda: "ciencia en la antigua grecia" },
  ejemplos: [
    { enunciado: "Repite el cálculo de Eratóstenes si el ángulo hubiera sido de 9° y la distancia entre ciudades de 1.000 km.", pasos: ["9° es 9 / 360 = 1/40 de la circunferencia.", "Si 1/40 de la vuelta son 1.000 km, la vuelta entera son 40 × 1.000 km.", "Circunferencia = 40.000 km."], resultado: "La circunferencia de la Tierra sería de 40.000 km." },
    { enunciado: "Tales midió la altura de una pirámide con su sombra. Si un palo de 2 m da una sombra de 3 m y la pirámide da una sombra de 219 m, ¿cuánto mide la pirámide?", pasos: ["A la misma hora, la razón altura / sombra es igual para todos los objetos (triángulos semejantes).", "Palo: 2 / 3. Pirámide: h / 219.", "h = 219 × 2 / 3 = 146 m."], resultado: "La pirámide mide unos 146 m (como la de Keops)." },
    { enunciado: "¿Cómo reaccionarían un estoico y un epicúreo si pierden el autobús y llegan tarde a un concierto?", pasos: ["Estoico: no depende de mí que el autobús se haya ido; acepto con calma y actúo con razón (busco otra forma de llegar).", "Epicúreo: evito el sufrimiento inútil; disfruto del rato con mis amigos y del resto del concierto.", "Ambos buscan la serenidad (ataraxia), pero por caminos distintos."], resultado: "Ambos evitarían enfadarse, el estoico aceptando y el epicúreo buscando el placer sencillo." },
  ],
  errores: [
    "Pensar que en la Antigüedad se creía que la Tierra era plana: los sabios griegos sabían que era esférica.",
    "Creer que toda la ciencia antigua era correcta: los cuatro humores o el geocentrismo eran erróneos.",
    "Confundir la Academia (Platón) con el Liceo (Aristóteles).",
    "Pensar que epicureísmo significa buscar placeres excesivos: Epicuro defendía placeres sencillos y moderados.",
    "Creer que la Biblioteca de Alejandría desapareció en un solo incendio: decayó a lo largo de siglos.",
  ],
  ejercicios: [
    { q: "¿Qué aportaron Tales, Pitágoras y Demócrito?", sol: "Tales: predijo un eclipse y aplicó la geometría. Pitágoras: todo es número, el teorema de los triángulos rectángulos. Demócrito: la materia formada por átomos." },
    { q: "¿Qué escuelas fundaron Platón y Aristóteles?", sol: "Platón, la Academia; Aristóteles, el Liceo." },
    { q: "Explica la diferencia entre epicureísmo y estoicismo.", sol: "El epicureísmo busca la felicidad en placeres sencillos y en evitar el dolor; el estoicismo, en vivir según la razón y aceptar con serenidad lo que no depende de nosotros." },
    { q: "¿Qué son los Elementos de Euclides?", sol: "Un tratado de geometría que demuestra teoremas a partir de axiomas; se usó como libro de texto durante más de 2.000 años." },
    { q: "Explica la anécdota del «¡Eureka!».", sol: "Arquímedes, al meterse en el baño, comprendió que un cuerpo sumergido desplaza un volumen de agua igual al suyo, y salió gritando «¡Eureka!» («¡Lo encontré!»)." },
    { q: "¿Cómo supo Aristóteles que la Tierra es esférica?", sol: "Porque en los eclipses de Luna la sombra de la Tierra sobre ella es siempre curva." },
    { q: "Explica paso a paso el experimento de Eratóstenes.", sol: "En Siena el Sol no hacía sombra; en Alejandría, a la misma hora, la sombra formaba 7,2° (1/50 de círculo). Multiplicó por 50 la distancia entre las ciudades (5.000 estadios) y obtuvo 250.000 estadios, unos 40.000 km." },
    { q: "¿Por qué se considera a Hipócrates padre de la medicina?", sol: "Porque explicó las enfermedades por causas naturales, basó la medicina en la observación y estableció un código ético para los médicos." },
    { q: "¿Qué era el mecanismo de Anticitera?", sol: "Un aparato de engranajes de bronce que calculaba posiciones astronómicas y eclipses; se considera la calculadora analógica más antigua." },
    { q: "¿Cómo llegó a Europa gran parte de la ciencia griega?", sol: "Gracias a las copias de Bizancio y a las traducciones árabes, que en la Edad Media pasaron al latín." },
  ],
  quiz: [
    { q: "«Todo es número» es una idea de…", o: ["Pitágoras", "Heráclito", "Epicuro"], a: 0, e: "Y su escuela." },
    { q: "Demócrito propuso que la materia está formada por…", o: ["átomos", "agua", "cuatro humores"], a: 0, e: "Indivisibles." },
    { q: "Platón fundó la…", o: ["Academia", "Biblioteca", "Stoa"], a: 0, e: "En el 387 a. C." },
    { q: "Los Elementos de geometría los escribió…", o: ["Euclides", "Arquímedes", "Ptolomeo"], a: 0, e: "En Alejandría." },
    { q: "«Dadme un punto de apoyo y moveré el mundo» se atribuye a…", o: ["Arquímedes", "Tales", "Galeno"], a: 0, e: "Sobre la palanca." },
    { q: "Eratóstenes midió…", o: ["la circunferencia de la Tierra", "la distancia a la Luna", "la velocidad de la luz"], a: 0, e: "Con sombras y geometría." },
    { q: "El padre de la medicina es…", o: ["Hipócrates", "Galeno", "Aristóteles"], a: 0, e: "De la isla de Cos." },
    { q: "Séneca fue un filósofo…", o: ["estoico", "epicúreo", "presocrático"], a: 0, e: "Nacido en Córdoba." },
    { q: "Ptolomeo defendía un universo…", o: ["geocéntrico", "heliocéntrico", "infinito"], a: 0, e: "La Tierra en el centro." },
    { q: "Hipatia fue una matemática de…", o: ["Alejandría", "Atenas", "Roma"], a: 0, e: "Siglo IV d. C." },
  ],
  examen: [
    { q: "Aristarco propuso que…", o: ["la Tierra gira alrededor del Sol", "la Tierra es plana", "todo es agua"], a: 0, e: "No se impuso hasta Copérnico." },
    { q: "La teoría de los cuatro humores…", o: ["era errónea pero duró siglos", "es la base de la medicina actual", "la inventó Euclides"], a: 0, e: "Hipócrates y Galeno." },
    { q: "El mecanismo de Anticitera servía para…", o: ["calcular posiciones de los astros", "mover barcos", "subir agua"], a: 0, e: "Engranajes de bronce." },
  ],
  feynman: ["Las grandes escuelas filosóficas griegas y romanas", "Tres aportaciones matemáticas y físicas", "Cómo midió Eratóstenes la Tierra", "Hipócrates y la medicina basada en la observación"],
  mapa: mapa("CIENCIA ANTIGUA", "var(--leaf)", [
    ["Filosofía", "Academia · Liceo · estoicos", "var(--pen)"],
    ["Matemáticas", "Pitágoras · Euclides · Arquímedes", "var(--leaf)"],
    ["Astronomía", "Eratóstenes · Ptolomeo", "var(--sun)"],
    ["Medicina", "Hipócrates · Galeno", "var(--red)"],
  ], 290),
  tarjetas: [
    ["Academia", "Escuela fundada por Platón en Atenas."],
    ["Liceo", "Escuela fundada por Aristóteles."],
    ["Estoicismo", "Vivir según la razón y aceptar con serenidad lo que no depende de nosotros."],
    ["Euclides", "Autor de los Elementos de geometría."],
    ["Arquímedes", "Principio de flotación, palanca y valor de π."],
    ["Eratóstenes", "Midió la circunferencia de la Tierra con sombras."],
    ["Hipócrates", "Padre de la medicina; enfermedades con causas naturales."],
    ["Biblioteca de Alejandría", "Gran centro del saber antiguo, con cientos de miles de rollos."],
  ],
  familias: ["Repetid el experimento de Tales: medid la sombra de un palo y la de un edificio para calcular su altura.", "Haced en la bañera o en un cubo el experimento de Arquímedes con un objeto que se hunde.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): pensamiento filosófico grecolatino, ciencia y técnica en la Antigüedad y su transmisión.",
    ideas: ["Experimento de Eratóstenes coordinado con otro instituto a cientos de kilómetros.", "Medir la altura del edificio del centro con el método de Tales.", "Debate estoicos contra epicúreos sobre situaciones cotidianas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Eratóstenes, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Erat%C3%B3stenes" },
  ],
  revisado: "2026-11-12",
};
