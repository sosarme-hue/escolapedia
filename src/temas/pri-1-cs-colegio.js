// Ciencias Sociales 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, check, RD } = require("./_peques");

// Edificio del colegio.
const cole = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-60" y="-50" width="120" height="50" fill="var(--sun)" fill-opacity=".55" stroke="var(--ink)" stroke-width="2"/><path d="M-66 -50 L 0 -80 L 66 -50 Z" fill="var(--red)"/><circle cy="-62" r="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -62 V -67 M0 -62 H 4" stroke="var(--ink)" stroke-width="1.5"/>${[-44, -22, 22, 44].map((d) => `<rect x="${d - 7}" y="-40" width="14" height="14" fill="var(--water)"/>`).join("")}<rect x="-10" y="-24" width="20" height="24" fill="var(--pen)"/></g>`;
const pizarra = (x, y, w = 90, h = 54) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="var(--leaf)" stroke="#8a5a2b" stroke-width="4"/>`;
const pupitre = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-20" y="-4" width="40" height="6" rx="2" fill="#c98a4a"/><path d="M-16 2 V 22 M16 2 V 22" stroke="var(--muted)" stroke-width="3"/></g>`;
const lapiz = (x, y, s = 1, c = "var(--sun)") => `<g transform="translate(${x} ${y}) scale(${s}) rotate(-35)"><rect x="-4" y="-24" width="8" height="38" fill="${c}"/><path d="M-4 14 L 0 24 L 4 14 Z" fill="#f2c9a0"/><rect x="-4" y="-28" width="8" height="5" fill="var(--red)"/></g>`;
const mochila = (x, y, c = "var(--pen)") => `<g transform="translate(${x} ${y})"><rect x="-20" y="-28" width="40" height="46" rx="10" fill="${c}"/><rect x="-14" y="-4" width="28" height="16" rx="4" fill="#fff" fill-opacity=".35"/><path d="M-10 -28 Q 0 -40 10 -28" stroke="${c}" stroke-width="4" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "Mi colegio",
  minutos: 25,
  objetivos: ["Conocer las dependencias del colegio y para qué sirven", "Saber quiénes trabajan en el colegio", "Respetar las normas de clase y del patio", "Cuidar el material y el colegio"],
  claves: ["colegio", "aula", "patio", "maestro", "compañeros", "normas"],
  pregunta: {
    texto: "Si en el recreo te haces una herida en la rodilla, ¿a quién se lo dices y adónde vas?",
    respuesta: "Se lo dices a la <mark>maestra o al maestro de guardia</mark> del patio. Te acompañarán a curarte. En el colegio hay muchas personas que nos <b>cuidan</b>.",
  },
  bloques: [
    {
      html: `<h3>Mi colegio</h3><p>El <mark>colegio</mark> es el lugar donde aprendemos. También hacemos amigos y jugamos.</p><p>Cada colegio tiene un <b>nombre</b>. ¿Sabes cómo se llama el tuyo?</p><p>Vamos al cole de lunes a viernes. Llevamos una mochila con el material. Allí aprendemos a leer, a escribir y a contar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El edificio del colegio con un reloj y dos niños con mochila en la puerta">${BG}
        ${sol(226, 34, 12)}${cole(110, 148, 1.3)}${persona(206, 156, 70, "var(--red)")}${persona(236, 156, 64, "var(--leaf)")}
        <path d="M14 150 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(110, 172, "CEIP El Pinar", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los espacios del cole</h3><p>El colegio tiene muchos <mark>espacios</mark>. Cada uno sirve para algo.</p><p>En el <b>aula</b> aprendemos. En el <b>patio</b> jugamos en el recreo. En el <b>comedor</b> comemos. En la <b>biblioteca</b> leemos cuentos.</p><p>En el <b>gimnasio</b> hacemos Educación Física. También hay baños y un despacho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Plano del colegio con aula, patio, comedor, biblioteca y gimnasio">${BG}
        ${[["aula", 16, 20, 74, 60, "var(--pen)"], ["comedor", 94, 20, 74, 60, "var(--inf)"], ["biblioteca", 172, 20, 74, 60, "var(--leaf)"], ["gimnasio", 16, 86, 74, 74, "var(--red)"], ["patio", 94, 86, 152, 74, "var(--sun)"]].map(([t, x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.5"/>${txt(x + w / 2, y + h / 2 + 5, t, { size: 12, color: "var(--ink)" })}`).join("")}
        ${arbol(220, 152, 0.55)}</svg>`,
      video: { id: "zn7K6z8WSLk", titulo: "Las dependencias de la escuela para niños", canal: "Educativo Yuri", vistas: 104620, megusta: 0 },
    },
    {
      html: `<h3>Mi clase</h3><p>Mi clase es el <mark>aula</mark>. Allí paso mucho tiempo con mis compañeros.</p><p>Hay mesas y sillas, una <b>pizarra</b> y estanterías con libros. También hay un perchero para los abrigos y una papelera.</p><p>En la pared ponemos nuestros dibujos y el calendario. ¡Es nuestra segunda casa!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un aula con pizarra, mesas, estantería y perchero">${BG}
        ${pizarra(70, 22, 120, 60)}${txt(130, 58, "a e i o u", { size: 15, color: "#fff", font: D, weight: 800 })}
        ${pupitre(80, 132)}${pupitre(130, 132)}${pupitre(180, 132)}
        <g transform="translate(232 120)"><rect x="-16" y="-50" width="32" height="70" fill="#c98a4a"/><path d="M-16 -26 H 16 M-16 -2 H 16" stroke="#8a5a2b" stroke-width="2"/>${[-10, -4, 2, 8].map((d, i) => `<rect x="${d}" y="-46" width="5" height="18" fill="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--sun)"][i]}"/>`).join("")}</g>
        <g transform="translate(30 120)"><path d="M0 40 V -40 M-10 -32 H 10" stroke="#8a5a2b" stroke-width="3"/><path d="M-10 -32 q -6 24 6 30 h 4" fill="var(--red)"/></g>
        ${txt(130, 172, "mesas", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las personas del cole</h3><p>En el colegio trabajan <mark>muchas personas</mark>.</p><p>Los <b>maestros</b> nos enseñan. El <b>director</b> o la directora organiza el colegio. El <b>conserje</b> abre la puerta y arregla cosas.</p><p>En el comedor están los <b>cocineros</b> y los monitores. El personal de limpieza deja todo limpio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una maestra, un conserje con llaves y una cocinera con gorro">${BG}
        ${persona(50, 156, 110, "var(--red)", "#6b3f1f")}<rect x="62" y="96" width="18" height="24" rx="2" fill="var(--card)" stroke="var(--ink)"/>
        ${persona(130, 156, 116, "var(--muted)")}<circle cx="152" cy="118" r="5" fill="none" stroke="#b8860b" stroke-width="2.5"/>
        ${persona(210, 156, 110, "#fff", "#6b3f1f")}<path d="M198 52 h 24 v -10 q -12 -12 -24 0 Z" fill="#fff" stroke="var(--line)" stroke-width="2"/>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(50, 174, "maestra", { size: 12 })}${txt(130, 174, "conserje", { size: 12 })}${txt(210, 174, "cocinera", { size: 12 })}</svg>`,
      video: { id: "oxw3EAH5vls", titulo: "Las personas que trabajan en la escuela | Educación Primaria", canal: "Escuela de Aprendices", vistas: 209833, megusta: 0 },
    },
    {
      html: `<h3>Mis compañeros</h3><p>Los niños y niñas de mi clase son mis <mark>compañeros</mark>. Algunos son también mis amigos.</p><p>Con los compañeros <b>compartimos</b> el material y los juegos. Nos ayudamos cuando alguien no entiende algo.</p><p>Si alguien está solo en el recreo, le invitamos a jugar. Nadie se queda fuera.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro niños juegan juntos en corro">${BG}
        ${persona(50, 156, 96, "var(--red)", "#6b3f1f")}${persona(100, 156, 96, "var(--pen)")}${persona(150, 156, 96, "var(--leaf)", "#e3b04b")}${persona(200, 156, 96, "var(--sun)", "#6b3f1f")}
        <path d="M66 110 H 84 M116 110 H 134 M166 110 H 184" stroke="#f2c9a0" stroke-width="6" stroke-linecap="round"/>
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(130, 28, "¡Jugamos todos!", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Las normas de clase</h3><p>Para estar a gusto, seguimos unas <mark>normas</mark>.</p><p>Levantamos la mano para hablar. Esperamos nuestro <b>turno</b>. Escuchamos cuando otro habla.</p><p>Hablamos en voz baja y no corremos dentro del aula. Al terminar, recogemos y dejamos todo ordenado.</p><p>Las normas nos ayudan a aprender mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña levanta la mano para hablar en clase">${BG}
        ${persona(90, 160, 110, "var(--inf)", "#6b3f1f")}<path d="M104 104 L 118 56" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><circle cx="119" cy="52" r="5" fill="#f2c9a0"/>
        ${pupitre(90, 150)}
        <rect x="138" y="40" width="110" height="104" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
        ${["mano arriba", "esperar turno", "escuchar", "recoger"].map((t, i) => check(154, 62 + i * 24) + txt(169, 67 + i * 24, t, { size: 11, anchor: "start" })).join("")}</svg>`,
    },
    {
      html: `<h3>Un día en el cole</h3><p>Cada día en el colegio sigue un <mark>orden</mark>.</p><p>Primero <b>entramos</b> y saludamos. Luego tenemos clases. A media mañana salimos al <b>recreo</b>.</p><p>Después hay más clases. Algunos niños se quedan al <b>comedor</b>. Por la tarde, <b>salimos</b> y nos recoge la familia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro dibujos en orden: entrada, clase, recreo y salida">${BG}
        ${[["entrada", "var(--pen)"], ["clase", "var(--leaf)"], ["recreo", "var(--sun)"], ["salida", "var(--red)"]].map(([t, c], i) => `<rect x="${14 + i * 60}" y="44" width="54" height="80" rx="8" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${txt(41 + i * 60, 150, t, { size: 11 })}${txt(41 + i * 60, 36, String(i + 1), { size: 16, color: c, font: D, weight: 800 })}`).join("")}
        ${mochila(41, 98)}${pizarra(80, 66, 42, 28)}<circle cx="161" cy="96" r="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${persona(221, 118, 56, "var(--red)")}</svg>`,
    },
    {
      html: `<h3>Cuido mi material</h3><p>Para trabajar usamos <mark>material escolar</mark>: lápices, gomas, pinturas, tijeras, cuadernos y libros.</p><p>Ponemos el <b>nombre</b> en nuestras cosas. Las guardamos en su sitio. No las rompemos ni las tiramos.</p><p>También cuidamos el material de todos y el colegio. No pintamos las mesas ni las paredes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una mochila, lápices de colores, una goma y un cuaderno">${BG}
        ${mochila(50, 112, "var(--red)")}
        ${lapiz(106, 98, 1, "var(--sun)")}${lapiz(126, 98, 1, "var(--pen)")}${lapiz(146, 98, 1, "var(--leaf)")}
        <rect x="174" y="104" width="22" height="14" rx="3" fill="#f5b5c8"/><rect x="186" y="104" width="10" height="14" fill="var(--pen)"/>
        <rect x="206" y="72" width="40" height="52" rx="3" fill="var(--water)"/><rect x="212" y="82" width="28" height="10" fill="#fff"/>
        ${txt(130, 160, "Pongo mi nombre", { size: 13, color: "var(--pen)" })}${txt(226, 90, "Ana", { size: 9, color: "var(--ink)" })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer bien el colegio te ayuda a <mark>moverte solo</mark> con seguridad.</p><p>Sabrás ir al baño, a la biblioteca o al comedor sin perderte. Sabrás a quién pedir ayuda.</p><p>Y si suena la alarma, sigues a tu maestro. Salís en fila, sin correr, hasta el patio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una fila de niños sale en orden siguiendo a la maestra hacia una señal de salida">${BG}
        <rect x="186" y="26" width="60" height="28" rx="4" fill="var(--leaf)"/>${txt(216, 45, "SALIDA", { size: 12, color: "#fff" })}
        ${persona(200, 156, 104, "var(--red)", "#6b3f1f")}${[0, 1, 2, 3].map((i) => persona(150 - i * 36, 156, 72, ["var(--pen)", "var(--leaf)", "var(--sun)", "var(--inf)"][i])).join("")}
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(80, 40, "en fila, sin correr", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Juego: ¿dónde estoy?</h3><p>Escucha la pista y di en qué <mark>lugar del cole</mark> estás.</p><p>1. Hay muchos libros y hablamos bajito.</p><p>2. Hay columpios, un arenero y salimos a jugar.</p><p>3. Huele a comida y hay bandejas.</p><p>4. Hay colchonetas, aros y pelotas.</p><p>Soluciones: biblioteca, patio, comedor y gimnasio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro tarjetas: libros, columpio, plato y pelota">${BG}
        ${[0, 1, 2, 3].map((i) => `<rect x="${14 + i * 60}" y="40" width="54" height="86" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(41 + i * 60, 150, String(i + 1), { size: 16, color: "var(--pen)", font: D, weight: 800 })}`).join("")}
        ${[0, 1, 2].map((j) => `<rect x="${28 + j * 9}" y="66" width="8" height="34" fill="${["var(--red)", "var(--pen)", "var(--leaf)"][j]}"/>`).join("")}
        <path d="M88 60 H 120 M92 60 V 108 M116 60 V 108 M100 60 V 92 M110 60 V 92" stroke="var(--ink)" stroke-width="2.5"/><rect x="96" y="90" width="18" height="5" fill="var(--red)"/>
        <ellipse cx="161" cy="92" rx="20" ry="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="161" cy="88" r="7" fill="var(--inf)"/>
        <circle cx="221" cy="86" r="16" fill="var(--red)"/><path d="M205 86 H 237" stroke="#fff" stroke-width="2.5"/>
        ${txt(130, 28, "¿Dónde estoy?", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Mi colegio",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Resumen: espacios, personas, compañeros y normas del colegio">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${cole(320, 150, 1.8)}
      ${[["ESPACIOS", "aula · patio · comedor", 100, 60, "var(--pen)"], ["PERSONAS", "maestros · conserje", 540, 60, "var(--red)"], ["COMPAÑEROS", "compartir · ayudar", 100, 240, "var(--leaf)"], ["NORMAS", "turno · escuchar · orden", 540, 240, "var(--inf)"]].map(([t, d, x, y, c]) => `<rect x="${x - 90}" y="${y - 30}" width="180" height="64" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(x, y - 2, t, { size: 16, color: c, font: D, weight: 800 })}${txt(x, y + 20, d, { size: 12 })}`).join("")}
      ${txt(320, 186, "Aprendemos y convivimos", { size: 16, color: "var(--ink)" })}
    </svg>`,
  },
  video: { id: "bLapXY2hyD8", titulo: "Mi Colegio: Sus ambientes y su comunidad", canal: "Miss Tila", vistas: 170583, megusta: 0, busqueda: "el colegio para niños dependencias" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres un cuento nuevo para leer. ¿Adónde vas?",
      pasos: ["Piensa dónde se guardan los libros del cole.", "Allí hay estanterías llenas de cuentos.", "Ese espacio es la biblioteca."],
      resultado: "vas a la biblioteca." },
    { enunciado: "Quieres decir algo en clase, pero habla un compañero. ¿Qué haces?",
      pasos: ["Escucho a mi compañero hasta que termina.", "Levanto la mano.", "Espero a que el maestro me dé el turno."],
      resultado: "levanto la mano y espero mi turno." },
    { enunciado: "Se ha roto la persiana de clase. ¿Quién la arregla?",
      pasos: ["El maestro lo avisa.", "En el cole hay una persona que abre, cierra y arregla cosas.", "Es el conserje."],
      resultado: "la arregla el conserje." },
  ],
  errores: [
    "Pensar que en el colegio solo trabajan los maestros: también el conserje, los cocineros y el personal de limpieza.",
    "Hablar todos a la vez: hay que esperar el turno.",
    "Dejar a un compañero solo en el recreo: todos podemos jugar juntos.",
    "Correr si suena la alarma: se sale en fila y sin correr.",
  ],
  ejercicios: [
    { q: "Di el nombre de tu colegio.", sol: "Respuesta libre." },
    { q: "Di tres espacios de tu colegio.", sol: "Por ejemplo: el aula, el patio y el comedor." },
    { q: "¿Para qué sirve el gimnasio?", sol: "Para hacer Educación Física." },
    { q: "Di el nombre de tu maestra o maestro.", sol: "Respuesta libre." },
    { q: "¿Quién abre la puerta del colegio por la mañana?", sol: "El conserje." },
    { q: "Dibuja tu clase con la pizarra y las mesas.", sol: "Respuesta libre." },
    { q: "Di dos normas de clase.", sol: "Por ejemplo: levantar la mano y recoger." },
    { q: "Ordena: recreo, entrada, salida, clase.", sol: "Entrada, clase, recreo, salida." },
    { q: "¿Qué haces si un compañero está solo en el patio?", sol: "Le invito a jugar." },
    { q: "Pon tu nombre en tres cosas de tu material.", sol: "Comprueba que está escrito." },
  ],
  quiz: [
    { q: "¿Dónde comemos en el cole?", o: ["En el comedor", "En el gimnasio", "En la biblioteca"], a: 0, e: "En el comedor." },
    { q: "¿Dónde leemos cuentos tranquilos?", o: ["En el patio", "En la biblioteca", "En el baño"], a: 1, e: "En la biblioteca." },
    { q: "En el recreo salimos al…", o: ["patio", "comedor", "despacho"], a: 0, e: "Al patio." },
    { q: "¿Quién nos enseña?", o: ["El maestro", "El conserje", "El cocinero"], a: 0, e: "Los maestros." },
    { q: "¿Quién organiza el colegio?", o: ["El director", "Un alumno", "El cocinero"], a: 0, e: "El director o la directora." },
    { q: "Para hablar en clase…", o: ["grito", "levanto la mano", "me levanto"], a: 1, e: "Levanto la mano y espero." },
    { q: "Mis compañeros son…", o: ["los niños de mi clase", "mis abuelos", "los vecinos"], a: 0, e: "Los niños y niñas de mi clase." },
    { q: "Si suena la alarma…", o: ["corro", "salgo en fila sin correr", "me escondo"], a: 1, e: "Salimos en orden." },
    { q: "¿Qué hay en el aula?", o: ["Pizarra y mesas", "Columpios", "Una nevera"], a: 0, e: "Pizarra, mesas y sillas." },
    { q: "Al terminar de trabajar…", o: ["dejo todo tirado", "recojo y ordeno", "me voy"], a: 1, e: "Recogemos." },
  ],
  examen: [
    { q: "¿Para qué sirve el gimnasio?", o: ["Para Educación Física", "Para comer", "Para dormir"], a: 0, e: "Educación Física." },
    { q: "¿Quién cocina en el comedor?", o: ["Los cocineros", "Los maestros", "Los alumnos"], a: 0, e: "Los cocineros." },
    { q: "¿Qué va primero en el día?", o: ["La salida", "La entrada", "El recreo"], a: 1, e: "Primero entramos." },
    { q: "Con los compañeros…", o: ["compartimos", "nos peleamos", "no hablamos"], a: 0, e: "Compartimos y nos ayudamos." },
  ],
  feynman: ["Los espacios del colegio", "Las personas que trabajan en el colegio", "Las normas de clase"],
  mapa: mapa("MI COLEGIO", "var(--pri)", [
    ["Espacios", "aula · patio · comedor", "var(--pen)"],
    ["Personas", "maestros · conserje · cocina", "var(--red)"],
    ["Compañeros", "compartir · ayudar", "var(--leaf)"],
    ["Normas", "turno · escuchar · recoger", "var(--inf)"],
  ], 220),
  tarjetas: [
    ["¿Dónde aprendemos?", "En el aula"],
    ["¿Dónde jugamos en el recreo?", "En el patio"],
    ["¿Dónde leemos cuentos?", "En la biblioteca"],
    ["¿Quién arregla cosas en el cole?", "El conserje"],
    ["¿Quién organiza el colegio?", "El director o la directora"],
    ["¿Cómo pido hablar en clase?", "Levantando la mano"],
    ["¿Qué hacemos con un compañero solo?", "Le invitamos a jugar"],
    ["¿Cómo salimos si suena la alarma?", "En fila y sin correr"],
  ],
  familias: [
    "Preguntadle cada día por algo que ha aprendido y con quién ha jugado.",
    "Pedidle que os enseñe el colegio y os diga para qué sirve cada espacio.",
    "Marcad juntos el material con su nombre.",
    "Practicad en casa esperar el turno para hablar en la mesa.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: el colegio como espacio de convivencia; dependencias, miembros de la comunidad educativa y normas (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Recorrido por el centro con un plano sencillo y pegatinas.", "Entrevista al conserje o al personal de cocina.", "Elaboración conjunta de las normas de clase con dibujos."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
