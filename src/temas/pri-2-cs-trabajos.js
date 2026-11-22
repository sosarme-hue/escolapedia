// Ciencias Sociales 2º de Primaria: los trabajos y oficios. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, vaca, gallina, pez, barca, mar, hierba, suelo, edificio, camion, chip, flechaR, tick, cruzRoja, pan, leche, engranaje, caja } = require("./_pri2b");

// Persona adulta con un gorro o un detalle de su oficio.
const adulto = (x, y, c, extra = "", nina = false) => `${nino(x, y, { s: 1.25, c, nina })}${extra}`;
const gorroCocinero = (x, y) => `<path transform="translate(${x} ${y})" d="M-10 0 V-8 q-8 -2 -6 -10 q4 -8 12 -4 q4 -8 12 0 q8 -2 6 8 q0 4 -4 6 V0Z" fill="#fff" stroke="var(--ink)" stroke-width="1.2"/>`;
const casco = (x, y, c = "var(--sun)") => `<path transform="translate(${x} ${y})" d="M-14 0 a14 12 0 0 1 28 0 h4 v3 h-36 v-3z" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`;
const gorra = (x, y, c = "#1f6feb") => `<path transform="translate(${x} ${y})" d="M-12 0 q0 -12 12 -12 q12 0 12 12z M8 -2 h12 v3 h-12z" fill="${c}"/>`;
const tractor = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-34" width="34" height="20" fill="var(--red)"/><rect x="4" y="-50" width="24" height="36" fill="var(--red)"/><rect x="9" y="-45" width="14" height="14" fill="var(--water)" opacity=".7"/><circle cx="18" cy="-12" r="14" fill="#1b2235"/><circle cx="18" cy="-12" r="5" fill="var(--sun)"/><circle cx="-20" cy="-8" r="8" fill="#1b2235"/><path d="M-22 -34 V-44" stroke="#555" stroke-width="4"/></g>`;
const espiga = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 V-30" stroke="#c9a46a" stroke-width="2"/>${[-26, -20, -14, -8].map((yy) => `<ellipse cx="-4" cy="${yy}" rx="3" ry="5" fill="#e0b000"/><ellipse cx="4" cy="${yy}" rx="3" ry="5" fill="#e0b000"/>`).join("")}</g>`;
const tienda = (x, y, rotulo, c = "var(--red)") => `<g transform="translate(${x} ${y})"><rect x="-40" y="-60" width="80" height="60" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-44 -60 H44 L40 -46 H-40Z" fill="${c}"/>${[-30, -14, 2, 18].map((a) => `<path d="M${a} -60 L${a + 4} -46" stroke="#fff" stroke-width="5"/>`).join("")}${rot(0, -64, rotulo, { size: 11, color: c, w: 800 })}<rect x="-30" y="-38" width="30" height="24" fill="var(--water)" opacity=".4"/><rect x="8" y="-38" width="22" height="38" fill="#8a5a2b"/></g>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "Los trabajos y oficios",
  objetivos: ["Saber por qué trabajan las personas", "Conocer muchos oficios y profesiones y qué hace cada uno", "Distinguir trabajos que obtienen productos de la naturaleza, los que los transforman y los que dan servicios"],
  claves: ["trabajo", "oficio", "profesión", "herramienta", "uniforme", "producto", "servicio"],
  pregunta: {
    texto: "Esta mañana has desayunado pan con leche. ¿Cuántas personas han trabajado para que llegue a tu mesa?",
    respuesta: "¡Muchísimas! El <mark>agricultor</mark> cultivó el trigo, el <b>ganadero</b> ordeñó la vaca, el <b>panadero</b> hizo el pan, el <b>transportista</b> lo llevó y el <b>tendero</b> te lo vendió. Todos los trabajos son <b>necesarios</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué trabajamos?</h3><p>Las personas adultas <mark>trabajan</mark> para ganar dinero y así pagar la casa, la comida o la ropa.</p><p>Pero el trabajo también sirve para <b>ayudar a los demás</b>. Gracias al trabajo de muchas personas tenemos pan, colegios, médicos y calles limpias. Cada trabajo es importante para que la sociedad funcione.</p>`,
      svg: svg("Una cocinera, un médico y una bombera trabajando", `${suelo(152)}${adulto(54, 152, "#9aa3b5", gorroCocinero(54, 74), true)}${adulto(130, 152, "var(--water)", `${cruzRoja(130, 112, 0.5)}`)}${adulto(206, 152, "var(--red)", casco(206, 76, "var(--sun)"), true)}${txt(54, 172, "cocinera", "var(--pen)", 12)}${txt(130, 172, "médico", "var(--pen)", 12)}${txt(206, 172, "bombera", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Oficios y profesiones</h3><p>Hay <mark>muchísimos trabajos</mark> distintos. Algunos se aprenden practicando mucho, como el de <b>carpintero</b>, <b>peluquera</b> o <b>fontanero</b>: son los <b>oficios</b>.</p><p>Otros necesitan estudiar muchos años en la universidad, como <b>médica</b>, <b>arquitecto</b> o <b>maestra</b>: son las <b>profesiones</b>. Cada persona elige el trabajo que más le gusta y para el que se ha preparado.</p>`,
      svg: svg("Un carpintero con un martillo y una maestra con un libro", `${suelo(152)}${adulto(80, 152, "#8a5a2b", `<g transform="translate(108 94) rotate(30)"><rect x="-3" y="0" width="6" height="26" fill="#a0662f"/><rect x="-10" y="-6" width="20" height="8" fill="#9aa3b5"/></g>`)}<rect x="104" y="140" width="40" height="12" fill="#c9a46a" stroke="var(--ink)"/>${adulto(196, 152, "var(--leaf)", `<rect x="210" y="92" width="22" height="16" fill="var(--red)" stroke="var(--ink)"/>`, true)}${chip(80, 30, 72, "oficio", "#8a5a2b", 13)}${chip(196, 30, 92, "profesión", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>Herramientas y uniformes</h3><p>Cada trabajo usa sus <mark>herramientas</mark>. El carpintero usa martillo y sierra. La médica, el fonendoscopio. El cocinero, cuchillos y sartenes. El agricultor, el tractor.</p><p>Muchos trabajadores llevan <b>uniforme</b> o ropa especial. A veces es para protegerse, como el casco de los obreros o el traje de los bomberos. Otras, para que los reconozcamos, como la policía.</p>`,
      svg: svg("Un martillo, un fonendoscopio, un casco y una sartén", `<g transform="translate(46 90) rotate(30)"><rect x="-4" y="-6" width="8" height="40" fill="#a0662f"/><rect x="-16" y="-14" width="32" height="12" rx="2" fill="#9aa3b5"/></g><g transform="translate(104 90)"><path d="M-14 -24 V-4 q0 16 14 16 q14 0 14 -16 V-24" stroke="#1b2235" stroke-width="3" fill="none"/><path d="M0 12 V24 q0 10 12 10" stroke="#1b2235" stroke-width="3" fill="none"/><circle cx="16" cy="34" r="7" fill="#9aa3b5" stroke="#1b2235" stroke-width="2"/></g>${casco(170, 96, "var(--sun)")}<g transform="translate(212 92)"><ellipse rx="18" ry="8" fill="#555"/><rect x="16" y="-3" width="20" height="6" fill="#1b2235" transform="rotate(0)"/></g>${txt(46, 150, "martillo", "var(--ink)", 12)}${txt(108, 150, "fonendo", "var(--ink)", 12)}${txt(170, 150, "casco", "var(--ink)", 12)}${txt(220, 150, "sartén", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Trabajos que sacan cosas de la naturaleza</h3><p>Algunas personas <mark>obtienen productos de la naturaleza</mark>. El <b>agricultor</b> cultiva frutas, verduras y cereales.</p><p>El <b>ganadero</b> cuida vacas, ovejas y gallinas, que dan leche, lana, carne y huevos. El <b>pescador</b> saca peces del mar. Y el minero saca minerales de la tierra.</p>`,
      svg: svg("Un tractor en el campo de trigo, una vaca y una barca de pesca", `${hierba(130)}${tractor(60, 130, 1)}${[150, 166, 182].map((x) => espiga(x, 130)).join("")}${vaca(222, 130, 0.8)}${mar(144, 26)}${barca(70, 154, "var(--pen)")}${pez(150, 172, 0.5, "var(--inf)")}${txt(130, 30, "campo, granja y mar", "var(--leaf)", 14)}`),
      video: V("5ns5zI7nL5I"),
    },
    {
      html: `<h3>Trabajos que transforman</h3><p>Otras personas <mark>transforman</mark> esos productos en cosas nuevas. Trabajan en <b>fábricas</b> y talleres.</p><p>El trigo se convierte en harina y el <b>panadero</b> hace pan. La leche se convierte en yogur. La madera se convierte en muebles. Los <b>albañiles</b> construyen casas y edificios con ladrillos y cemento.</p>`,
      svg: svg("El trigo se convierte en harina y luego en pan", `${espiga(40, 110)}${espiga(56, 110)}${flechaR(74, 96, 106, 96)}<g transform="translate(132 110)"><path d="M-18 0 L-14 -36 H14 L18 0Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/>${rot(0, -14, "harina", { size: 9 })}</g>${flechaR(158, 96, 190, 96)}${pan(220, 100)}${engranaje(132, 30, 12, "var(--muted)")}${txt(48, 150, "trigo", "#c9a46a", 13)}${txt(132, 150, "fábrica", "var(--muted)", 13)}${txt(220, 150, "pan", "#8a5a2b", 13)}`),
    },
    {
      html: `<h3>Trabajos que dan servicios</h3><p>Muchos trabajos no fabrican cosas: <mark>ayudan a las personas</mark>. Son los <b>servicios</b>.</p><p>El <b>médico</b> nos cura, la <b>maestra</b> enseña, el <b>tendero</b> vende, la <b>conductora</b> del autobús nos lleva y el <b>cartero</b> reparte las cartas. También los peluqueros, los camareros y los informáticos dan servicios.</p>`,
      svg: svg("Una tienda con su tendero y un cartero con su bolsa", `${suelo(152)}${tienda(80, 152, "FRUTERÍA", "var(--leaf)")}${adulto(186, 152, "var(--sun)", `${gorra(186, 76, "var(--sun)")}<rect x="194" y="104" width="22" height="18" rx="3" fill="#8a5a2b"/><rect x="198" y="96" width="14" height="10" fill="#fff" stroke="var(--line)"/>`)}${txt(196, 172, "cartero", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Todos los trabajos son importantes</h3><p>Los trabajos <mark>se necesitan unos a otros</mark>. Sin agricultor no hay trigo. Sin panadero no hay pan. Sin transportista el pan no llega a la tienda.</p><p>Todos los trabajos merecen <b>respeto</b>, y cualquier persona, sea hombre o mujer, puede hacer cualquier trabajo si se prepara para ello.</p>`,
      svg: svg("Cadena del pan: campo, panadería, camión y tienda", `${espiga(30, 100)}${espiga(42, 100)}${flechaR(56, 86, 76, 86)}${pan(98, 92)}${flechaR(122, 86, 142, 86)}${camion(184, 104, "var(--leaf)", 0.7)}${flechaR(214, 86, 228, 86)}<circle cx="242" cy="86" r="10" fill="var(--sun)"/>${["campo", "panadería", "camión", "tienda"].map((t, i) => txt([36, 98, 182, 240][i], 132, t, "var(--pen)", 11)).join("")}${txt(130, 166, "¡nos necesitamos!", "var(--red)", 15)}`),
    },
    {
      html: `<h3>¿Para qué sirve? ¿Qué quiero ser?</h3><p>Conocer los trabajos te ayuda a pensar <mark>qué te gustaría ser</mark> de mayor.</p><p>Si te gustan los animales, puedes ser veterinario. Si te gusta construir, arquitecta. Si te gusta enseñar, maestro. Lo más importante ahora es <b>aprender mucho</b> en el cole y descubrir lo que te gusta.</p>`,
      svg: svg("Una niña sueña con ser astronauta, veterinaria o arquitecta", `${suelo(156)}${nino(60, 156, { nina: true, c: "var(--red)" })}<circle cx="96" cy="90" r="4" fill="var(--line)"/><circle cx="108" cy="76" r="6" fill="var(--line)"/><ellipse cx="180" cy="72" rx="74" ry="50" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${chip(150, 52, 84, "veterinaria", "var(--leaf)", 12)}${chip(206, 80, 84, "arquitecta", "var(--pen)", 12)}${chip(154, 104, 88, "astronauta", "var(--red)", 12)}`),
    },
    {
      html: `<h3>Juego: ¿quién soy?</h3><p>Adivina el oficio. «Uso tijeras y peine y te corto el pelo»: ¡la <mark>peluquera</mark>!</p><p>«Llevo un uniforme rojo y apago incendios»: ¡el <mark>bombero</mark>! «Cuido a los animales enfermos»: ¡la <b>veterinaria</b>! «Hago pan cada mañana muy temprano»: ¡el <b>panadero</b>! Inventa tú otra adivinanza.</p>`,
      svg: svg("Unas tijeras y un peine, un casco de bombero y un pan con signos de interrogación", `<g transform="translate(54 90)"><path d="M-4 0 L18 -30 M4 0 L-18 -30" stroke="#9aa3b5" stroke-width="4" stroke-linecap="round"/><circle cx="-6" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="4"/><circle cx="6" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="4"/></g>${casco(130, 96, "var(--red)")}${pan(206, 92)}${big(54, 150, "?", "var(--pen)", 28)}${big(130, 150, "?", "var(--pen)", 28)}${big(206, 150, "?", "var(--pen)", 28)}${txt(130, 34, "¿Quién soy?", "var(--ink)", 18)}`),
    },
  ],
  figura: {
    titulo: "Tres tipos de trabajos",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Obtener productos de la naturaleza, transformarlos y dar servicios">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Obtienen", "campo · granja · mar", "var(--leaf)"], ["Transforman", "fábrica · taller · obra", "var(--muted)"], ["Dan servicios", "salud · escuela · tienda", "var(--pen)"]].map(([t, d, c], i) => `<rect x="${18 + i * 206}" y="24" width="194" height="212" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(115 + i * 206, 196, t, { size: 21, color: c, w: 800 })}${rot(115 + i * 206, 220, d, { size: 14, color: "var(--muted)" })}`).join("")}
      ${tractor(90, 150, 1.4)}${vaca(160, 150, 0.8)}
      <g transform="translate(320 150)"><rect x="-50" y="-70" width="100" height="70" fill="#9aa3b5" stroke="var(--ink)"/><path d="M-50 -70 l25 -20 v20 l25 -20 v20 l25 -20 v20" fill="#9aa3b5" stroke="var(--ink)"/><rect x="30" y="-110" width="12" height="40" fill="#6b7385"/></g>
      ${nino(500, 160, { s: 1.4, c: "var(--water)" })}${cruzRoja(500, 112, 0.6)}${nino(560, 160, { s: 1.3, c: "var(--leaf)", nina: true })}
    </svg>`,
  },
  video: V("YH2lML9lAR8", "oficios y profesiones para niños"),
  ejemplos: [
    { enunciado: "¿Qué tipo de trabajo hace el pescador?", pasos: ["El pescador saca peces del mar.", "Los peces son productos de la naturaleza.", "Obtiene productos de la naturaleza."], resultado: "obtiene productos de la naturaleza." },
    { enunciado: "¿Qué herramientas usa una peluquera?", pasos: ["Piensa qué hace: corta y peina el pelo.", "Para cortar usa tijeras.", "Para peinar usa peine y secador."], resultado: "tijeras, peine y secador." },
    { enunciado: "¿Quién trabaja para que tengas un yogur?", pasos: ["El ganadero ordeña la vaca.", "En la fábrica la leche se convierte en yogur.", "El transportista lo lleva y el tendero lo vende."], resultado: "ganadero, trabajadores de la fábrica, transportista y tendero." },
  ],
  errores: [
    "Pensar que hay trabajos de chicos y trabajos de chicas: cualquiera puede hacer cualquier trabajo.",
    "Creer que solo es trabajo lo que se hace en una oficina: el campo y la obra también.",
    "Pensar que unos trabajos valen más que otros: todos son necesarios.",
    "Confundir la herramienta con el trabajo: el martillo es la herramienta; el carpintero, el oficio.",
  ],
  ejercicios: [
    { q: "¿Por qué trabajan las personas?", sol: "Para ganar dinero y para ayudar a los demás." },
    { q: "Di cinco oficios o profesiones.", sol: "Por ejemplo: médica, panadero, maestra, carpintero y bombera." },
    { q: "¿Qué hace un agricultor?", sol: "Cultiva frutas, verduras y cereales." },
    { q: "¿Qué hace un ganadero?", sol: "Cuida animales que dan leche, huevos, lana o carne." },
    { q: "Une la herramienta con el oficio: tijeras, martillo, fonendoscopio.", sol: "Peluquera, carpintero y médica." },
    { q: "¿Para qué sirve el casco de los obreros?", sol: "Para protegerse la cabeza." },
    { q: "Di un trabajo que transforma productos.", sol: "Por ejemplo: el panadero (trigo en pan)." },
    { q: "Di dos trabajos que dan servicios.", sol: "Por ejemplo: maestra y conductor de autobús." },
    { q: "¿En qué trabajan las personas de tu familia?", sol: "Respuesta libre." },
    { q: "¿Qué te gustaría ser de mayor? ¿Por qué?", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "El panadero hace…", o: ["pan", "zapatos", "casas"], a: 0, e: "Con harina de trigo." },
    { q: "Los incendios los apagan…", o: ["los bomberos", "los carteros", "los pescadores"], a: 0, e: "Con su uniforme especial." },
    { q: "El agricultor trabaja en…", o: ["el campo", "el mar", "el hospital"], a: 0, e: "Cultiva plantas." },
    { q: "El pescador saca…", o: ["peces del mar", "trigo", "ladrillos"], a: 0, e: "Con su barca y sus redes." },
    { q: "Las tijeras y el peine los usa…", o: ["la peluquera", "el albañil", "el piloto"], a: 0, e: "Corta el pelo." },
    { q: "El cartero…", o: ["reparte cartas", "cura animales", "hace pan"], a: 0, e: "Es un servicio." },
    { q: "La veterinaria cuida…", o: ["animales", "coches", "plantas de plástico"], a: 0, e: "Cuando están enfermos." },
    { q: "En la fábrica…", o: ["se transforman productos", "se pescan peces", "se cultivan tomates"], a: 0, e: "Hacen cosas nuevas." },
    { q: "¿Quién puede ser bombero?", o: ["Hombres y mujeres", "Solo hombres", "Solo mujeres"], a: 0, e: "Cualquiera que se prepare." },
    { q: "El albañil…", o: ["construye casas", "vende fruta", "enseña a leer"], a: 0, e: "Con ladrillos y cemento." },
  ],
  examen: [
    { q: "¿Qué trabajo obtiene productos de la naturaleza?", o: ["Ganadero", "Maestra", "Cartero"], a: 0, e: "Cuida animales." },
    { q: "¿Qué trabajo da un servicio?", o: ["La médica", "El minero", "El pescador"], a: 0, e: "Nos cura." },
    { q: "La herramienta del carpintero es…", o: ["el martillo", "el fonendoscopio", "la red"], a: 0, e: "Trabaja la madera." },
    { q: "Todos los trabajos son…", o: ["necesarios", "inútiles", "iguales"], a: 0, e: "Nos necesitamos unos a otros." },
  ],
  feynman: ["Por qué trabajan las personas", "Tres tipos de trabajos con ejemplos", "Por qué todos los trabajos son importantes"],
  mapaT: ["LOS TRABAJOS", [
    ["Obtienen", "agricultor · ganadero · pescador", "var(--leaf)"],
    ["Transforman", "panadero · albañil · fábrica", "var(--muted)"],
    ["Servicios", "médica · maestra · cartero", "var(--pen)"],
    ["Herramientas", "martillo · tijeras · tractor", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Por qué trabajamos?", "Para ganar dinero y ayudar a los demás"],
    ["¿Qué hace el agricultor?", "Cultiva el campo"],
    ["¿Qué hace el ganadero?", "Cuida animales de granja"],
    ["¿Qué hace el panadero?", "Pan con harina"],
    ["¿Quién apaga incendios?", "Los bomberos"],
    ["Herramienta de la peluquera", "Las tijeras"],
    ["Un trabajo de servicios", "La maestra o el médico"],
    ["¿Hay trabajos solo de chicos?", "No, cualquiera puede hacerlos"],
  ],
  familias: [
    "Hablad de vuestro trabajo: qué hacéis, qué herramientas usáis y a quién ayudáis.",
    "En la compra, pensad juntos cuántos trabajos hay detrás de un producto (por ejemplo, un yogur).",
    "Jugad a las mímicas de oficios: uno representa y el otro adivina.",
    "Preguntad a los abuelos en qué trabajaban y comparad con los trabajos de hoy.",
  ],
  saberes: "Sociedades y territorios: los trabajos y oficios de la localidad, su clasificación según obtengan, transformen o den servicios, y la igualdad entre hombres y mujeres en el trabajo",
  ideas: ["Entrevista a familiares sobre su trabajo y exposición en clase.", "Mural de la cadena del pan o de la leche con dibujos de cada trabajo.", "Rincón de disfraces y herramientas de juguete para jugar a los oficios."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Seguir el camino de un producto desde el campo hasta casa", "Valorar el trabajo en casa y repartir las tareas", "Saber que hombres y mujeres pueden hacer cualquier trabajo", "Conocer oficios antiguos y oficios nuevos"],
  lectura: { titulo: "El viaje de la barra de pan", html: `<p>Una mañana, Martina se preguntó cuántas personas habían trabajado para que ella pudiera desayunar una tostada.</p><p>Su abuelo, que había sido agricultor, se lo explicó.</p><p>—Primero, un <b>agricultor</b> siembra el trigo en otoño. Lo cuida todo el invierno y en verano lo cosecha con una cosechadora.</p><p>—¿Y luego?</p><p>—Un <b>camionero</b> lleva el trigo a una fábrica de harina. Allí, unas máquinas muelen los granos hasta convertirlos en polvo blanco.</p><p>—¡La harina!</p><p>—Exacto. Después, el <b>panadero</b> se levanta a las cuatro de la madrugada. Mezcla la harina con agua, levadura y sal, amasa y hornea el pan.</p><p>—Y la <b>dependienta</b> de la panadería nos lo vende —completó Martina.</p><p>—Y no olvides al mecánico que arregla la cosechadora, a la ingeniera que diseñó el horno y a quien limpia la panadería.</p><p>Martina miró su tostada con otros ojos. ¡Detrás de un trozo de pan había muchísimo trabajo!</p>` },
  tras: {
    "Trabajos que sacan cosas de la naturaleza": [
      ["Del campo a la mesa", `<p>Muchos productos que usamos hacen un largo <mark>camino</mark> antes de llegar a casa. En ese camino trabajan muchas personas:</p><ul><li><b>1. Sector primario</b>: se obtiene la materia prima de la naturaleza. El agricultor cultiva el trigo; el ganadero ordeña la vaca; el pescador pesca.</li><li><b>2. Sector secundario</b>: se transforma la materia prima en una fábrica o un taller. El trigo se convierte en harina; la leche, en yogur o queso.</li><li><b>3. Sector terciario</b>: se lleva y se vende el producto. El camionero lo transporta y el dependiente lo vende en la tienda.</li></ul><p>Por ejemplo, la leche: vaca → granja → fábrica (se envasa) → camión → supermercado → tu desayuno.</p><p>Todos los trabajos de la cadena son necesarios. Si uno falla, el producto no llega.</p><p><b>Actividad</b>: elige un alimento y dibuja su camino hasta tu casa.</p>`,
        H6.flujo("Leche", ["vaca|granja", "fábrica|envasa", "camión|lleva", "tienda|vende"], cAZ)],
    ],
    "Trabajos que dan servicios": [
      ["El trabajo en casa", `<p>En casa también hay mucho <mark>trabajo</mark>, aunque nadie cobre por hacerlo:</p><ul><li>Cocinar y fregar los platos.</li><li>Lavar, tender y doblar la ropa.</li><li>Barrer, limpiar y ordenar.</li><li>Hacer la compra.</li><li>Cuidar a los bebés, a los mayores y a las mascotas.</li><li>Sacar la basura y reciclar.</li></ul><p>Las tareas de casa son cosa de <b>todos</b>: de los padres, las madres, los abuelos… ¡y de los niños también! Cuando nos repartimos las tareas, nadie se cansa demasiado y tenemos más tiempo para estar juntos.</p><p>Los niños de tu edad pueden:</p><ul><li>Hacer la cama y ordenar su habitación.</li><li>Poner y quitar la mesa.</li><li>Llevar la ropa sucia al cesto.</li><li>Dar de comer a la mascota.</li></ul><p><b>Actividad</b>: haz un cuadro de tareas para tu familia, con una tarea para cada persona.</p>`,
        L6.filas("Yo ayudo", [["cama", "hacerla", cAZ], ["mesa", "poner", cVE], ["ropa", "al cesto", cNA], ["mascota", "comida", cRO]])],
    ],
    "Todos los trabajos son importantes": [
      ["Trabajos para todos", `<p>Hace años se pensaba que algunos trabajos eran «de hombres» y otros «de mujeres». Hoy sabemos que eso <mark>no es verdad</mark>: cualquier persona puede hacer cualquier trabajo si se prepara para ello.</p><ul><li>Hay <b>mujeres</b> bomberas, pilotos, mecánicas, científicas, futbolistas y astronautas.</li><li>Hay <b>hombres</b> enfermeros, maestros de infantil, cocineros, peluqueros y bailarines.</li></ul><p>Lo importante para elegir un trabajo es:</p><ul><li>Lo que nos <b>gusta</b>.</li><li>Lo que se nos da <b>bien</b>.</li><li>Lo que queremos <b>aprender</b>.</li></ul><p>Algunas mujeres que abrieron camino: Clara Campoamor luchó para que las mujeres pudieran votar; Marie Curie ganó dos premios Nobel de ciencia.</p><p><b>Actividad</b>: dibuja a un compañero o compañera haciendo el trabajo que le gustaría tener de mayor.</p>`,
        H6.dos("Puedo ser", ["ELLAS", ["bombera", "piloto", "científica"], cMO], ["ELLOS", ["enfermero", "maestro", "cocinero"], cAZ])],
    ],
    "¿Para qué sirve? ¿Qué quiero ser?": [
      ["Oficios de antes y de ahora", `<p>Con el paso del tiempo, algunos <mark>oficios</mark> casi han desaparecido y han aparecido otros nuevos.</p><p><b>Oficios antiguos</b> (hoy hay muy pocos):</p><ul><li>El <b>sereno</b>: vigilaba las calles de noche y tenía las llaves de los portales.</li><li>El <b>afilador</b>: iba por las calles con su silbato afilando cuchillos y tijeras.</li><li>El <b>herrero</b>: hacía herraduras y herramientas de hierro con fuego.</li><li>El <b>lechero</b>: llevaba la leche a las casas.</li></ul><p><b>Oficios nuevos</b>:</p><ul><li><b>Programador</b> de ordenadores y videojuegos.</li><li><b>Piloto de drones</b>.</li><li>Técnico de <b>energía solar</b> y eólica.</li><li>Diseñador de páginas web.</li></ul><p>¡Puede que tú trabajes de mayor en un oficio que todavía no existe!</p><p><b>Actividad</b>: inventa un oficio del futuro y explica qué haría.</p>`,
        L6.filas("Oficios", [["sereno", "antes", cMO], ["afilador", "antes", cNA], ["programador", "ahora", cAZ], ["drones", "ahora", cVE]]),
        ["PiCvbWUdnrU", "Cuando crezca | Canciones Infantiles", "Super Simple Español", 11543487]],
    ],
  },
  final: [
    ["Visita a un taller", `<p>Una buena forma de conocer un trabajo es <mark>visitar</mark> el lugar donde se hace y entrevistar a quien lo hace.</p><p>Antes de la visita, preparamos <b>preguntas</b>:</p><ul><li>¿Cómo se llama tu trabajo?</li><li>¿Qué haces cada día?</li><li>¿Qué herramientas usas?</li><li>¿Llevas uniforme? ¿Por qué?</li><li>¿Qué estudiaste para hacerlo?</li><li>¿Qué es lo que más te gusta? ¿Y lo más difícil?</li></ul><p>Durante la visita hay que:</p><ul><li>Escuchar con atención.</li><li>No tocar las herramientas sin permiso.</li><li>Apuntar o dibujar lo que vemos.</li><li>Dar las gracias al final.</li></ul><p>Podemos visitar una panadería, un taller mecánico, una granja, una fábrica o el parque de bomberos.</p><p><b>Actividad</b>: prepara tres preguntas para entrevistar a un familiar sobre su trabajo.</p>`,
      H6.rueda("Entrevista", "VISITA", [["preguntar", cAZ], ["escuchar", cVE], ["apuntar", cNA], ["gracias", cRO]])],
    ["Repaso: el viaje de la barra de pan", `<p>Repasamos con la <mark>lectura</mark> de Martina:</p><ul><li>El <b>agricultor</b> siembra y cosecha el trigo: sector primario.</li><li>El <b>camionero</b> lleva el trigo a la fábrica: transporte.</li><li>En la fábrica de <b>harina</b> se muelen los granos: sector secundario.</li><li>El <b>panadero</b> amasa y hornea el pan de madrugada.</li><li>La <b>dependienta</b> vende el pan: sector terciario.</li><li>También ayudan el mecánico, la ingeniera y quien limpia.</li></ul><p>Detrás de cada cosa que usamos hay el trabajo de muchas personas. Por eso todos los trabajos merecen respeto.</p><p><b>Actividad</b>: haz una cadena de dibujos con el viaje del pan.</p>`,
      H6.flujo("Pan", ["campo|trigo", "fábrica|harina", "horno|pan", "tienda|vende"], cNA)],
  ],
  ejemplos: [
    ["¿Qué trabajadores hacen falta para que llegue un yogur?", ["Ganadero, fábrica, transporte, tienda."], "Ganadero, trabajador de la fábrica, camionero y dependiente."],
    ["¿Puede una mujer ser bombera?", ["Cualquier persona puede hacer cualquier trabajo."], "Sí."],
  ],
  errores: ["Pensar que hay trabajos solo de hombres o solo de mujeres.", "Creer que el trabajo de casa no es trabajo."],
  ejercicios: [
    ["b", "¿Quién cultiva el trigo?", "El agricultor."],
    ["b", "¿Dónde se convierte el trigo en harina?", "En una fábrica de harina."],
    ["b", "Di una tarea de casa que puedes hacer.", "Hacer la cama, poner la mesa…"],
    ["b", "¿Qué hacía el afilador?", "Afilaba cuchillos y tijeras."],
    ["b", "Di un oficio nuevo.", "Programador, piloto de drones…"],
    ["m", "Ordena: tienda, vaca, fábrica, camión.", "Vaca, fábrica, camión, tienda."],
    ["m", "¿Por qué hay que repartir las tareas de casa?", "Para que nadie se canse y tengamos más tiempo juntos."],
    ["m", "¿Qué es importante para elegir un trabajo?", "Lo que nos gusta y se nos da bien."],
    ["m", "Di dos preguntas para entrevistar a un trabajador.", "¿Qué haces? ¿Qué herramientas usas?"],
    ["m", "¿A qué sector pertenece el pescador?", "Al primario."],
    ["a", "En la lectura, ¿a qué hora se levanta el panadero?", "A las cuatro de la madrugada."],
    ["a", "Nombra los trabajadores del viaje del pan.", "Agricultor, camionero, molinero, panadero, dependienta."],
    ["a", "¿Por qué ya casi no hay serenos?", "Porque hay porteros automáticos y alumbrado."],
    ["a", "Inventa un oficio del futuro.", "Respuesta libre."],
  ],
  quiz: [
    ["El agricultor trabaja en el sector…", ["primario", "secundario", "terciario"], "Del campo a la mesa."],
    ["Las tareas de casa son de…", ["todos", "solo mamá", "nadie"], "Casa."],
    ["Una mujer puede ser…", ["cualquier cosa", "solo maestra", "solo enfermera"], "Para todos."],
    ["Un oficio antiguo es el…", ["sereno", "programador", "piloto de drones"], "Oficios."],
    ["En una visita, al final hay que…", ["dar las gracias", "tocar todo", "irse corriendo"], "Visita."],
  ],
  examen: [
    ["En la lectura, ¿qué se muele en la fábrica?", ["el trigo", "la leche", "la sal"], "Lectura."],
    ["¿Quién vende el pan?", ["la dependienta", "el agricultor", "el camionero"], "Repaso."],
  ],
  tarjetas: [
    ["Cadena del trabajo", "Obtener, transformar, transportar y vender."],
    ["Igualdad", "Cualquier persona puede hacer cualquier trabajo."],
  ],
  glosario: [
    ["Materia prima", "Lo que se saca de la naturaleza para fabricar."],
    ["Sector primario", "Trabajos que obtienen cosas de la naturaleza."],
    ["Sector secundario", "Trabajos que transforman en fábricas."],
    ["Sector terciario", "Trabajos que dan servicios."],
    ["Cosechadora", "Máquina que recoge el cereal."],
    ["Harina", "Polvo que sale de moler el trigo."],
    ["Tarea", "Trabajo que hay que hacer."],
    ["Sereno", "Antiguo vigilante nocturno de las calles."],
    ["Afilador", "Persona que afilaba cuchillos."],
    ["Entrevista", "Conversación con preguntas para conocer algo."],
  ],
  situacion: {
    titulo: "Feria de oficios",
    reto: "La clase organiza una feria de oficios con entrevistas a familiares y la cadena de trabajo de un producto.",
    pasos: ["Entrevistar a un familiar sobre su trabajo.", "Preparar un póster con sus herramientas y uniforme.", "Dibujar la cadena de un producto, del campo a casa.", "Presentar los oficios en una feria para otras clases."],
    producto: "Pósters de oficios y la cadena de un producto.",
    evaluacion: ["Explica la cadena de un producto.", "Valora el trabajo en casa.", "Defiende la igualdad en los trabajos.", "Compara oficios de antes y de ahora."],
  },
});
