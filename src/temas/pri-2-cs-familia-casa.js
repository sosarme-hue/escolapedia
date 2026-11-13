// Ciencias Sociales 2º de Primaria: la familia y la casa. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, perro, gato, chip, flechaR, tick, equis, corazon, suelo, edificio, arbol, hierba } = require("./_pri2b");

// Persona adulta (más alta) con el muñeco de palitos.
const adulto = (x, y, o = {}) => nino(x, y, { s: 1.3, ...o });
const abuelo = (x, y, o = {}) => nino(x, y, { s: 1.2, pelo: "#c9ccd6", ...o });
// Casa por dentro: corte con habitaciones.
const casaCorte = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-100 -60 L0 -100 L100 -60Z" fill="var(--red)"/><rect x="-90" y="-60" width="180" height="120" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-90 0 H90 M0 -60 V60" stroke="var(--ink)" stroke-width="2"/></g>`;
const cama = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-28" y="-12" width="56" height="12" fill="var(--pen)"/><rect x="-28" y="-22" width="12" height="10" rx="3" fill="#fff" stroke="var(--line)"/><rect x="-32" y="-26" width="4" height="30" fill="#8a5a2b"/><rect x="28" y="-16" width="4" height="20" fill="#8a5a2b"/></g>`;
const sofa = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-20" width="60" height="16" rx="4" fill="var(--leaf)"/><rect x="-34" y="-8" width="68" height="10" rx="4" fill="var(--leaf)"/><rect x="-34" y="-16" width="8" height="18" rx="3" fill="#2f7d4f"/><rect x="26" y="-16" width="8" height="18" rx="3" fill="#2f7d4f"/></g>`;
const cocina = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-30" width="60" height="30" fill="#cfd5df" stroke="var(--ink)" stroke-width="1.5"/><circle cx="-14" cy="-24" r="4" fill="#1b2235"/><circle cx="0" cy="-24" r="4" fill="#1b2235"/><rect x="-24" y="-16" width="48" height="12" fill="var(--card)" stroke="var(--ink)"/><path d="M10 -30 V-40 h10 v4" stroke="var(--muted)" stroke-width="2" fill="none"/></g>`;
const banera = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-30 -14 H30 V-4 q0 10 -10 10 H-20 q-10 0 -10 -10Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M24 -14 V-32 h-8" stroke="var(--muted)" stroke-width="2" fill="none"/>${[0, 1, 2].map((i) => `<circle cx="${-10 + i * 10}" cy="-18" r="4" fill="var(--water)" opacity=".5"/>`).join("")}</g>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "La familia y la casa",
  objetivos: ["Conocer los miembros de la familia y los distintos tipos de familia", "Nombrar las partes de la casa y para qué sirve cada una", "Saber cómo ayudar en casa y repartir las tareas"],
  claves: ["familia", "abuelos", "hermanos", "tíos", "primos", "vivienda", "tareas de casa"],
  pregunta: {
    texto: "¿Todas las familias son iguales? Piensa en tus amigos: ¿cuántas personas viven en su casa?",
    respuesta: "No, <mark>cada familia es diferente</mark>. Unas son grandes y otras pequeñas. Algunas tienen un papá y una mamá, otras dos mamás, una sola persona adulta o viven con los abuelos. Lo importante es que <b>se quieren y se cuidan</b>.",
  },
  bloques: [
    {
      html: `<h3>Mi familia</h3><p>La <mark>familia</mark> es el grupo de personas que nos quiere y nos cuida. Con ella vivimos, jugamos y aprendemos.</p><p>En la familia están los <b>padres o madres</b>, los <b>hermanos</b> y las <b>hermanas</b>. También los <b>abuelos</b>, los <b>tíos</b> y los <b>primos</b>, aunque muchas veces viven en otra casa.</p>`,
      svg: svg("Una familia: dos adultos, una niña, un niño y un perro", `${suelo(156)}${adulto(54, 156, { c: "var(--pen)" })}${adulto(104, 156, { c: "var(--red)", nina: true })}${nino(150, 156, { c: "var(--sun)", nina: true })}${nino(188, 156, { c: "var(--leaf)", s: 0.8 })}${perro(226, 156, 0.8)}${corazon(130, 30, 1.4)}`),
    },
    {
      html: `<h3>Cada familia es distinta</h3><p>Hay <mark>muchos tipos de familia</mark>. Unas tienen papá y mamá. Otras, dos papás o dos mamás. Otras, solo una mamá o solo un papá.</p><p>Hay familias con muchos hijos y familias con un hijo. Algunos niños viven con sus abuelos o están adoptados. Todas las familias son <b>igual de importantes</b>.</p>`,
      svg: svg("Tres familias distintas: una grande, una madre con su hija y un abuelo con su nieto", `${suelo(150)}<rect x="12" y="40" width="96" height="120" rx="10" fill="var(--pen)" opacity=".08"/>${adulto(36, 146, { c: "var(--pen)", s: 1.1 })}${adulto(64, 146, { c: "var(--red)", nina: true, s: 1.1 })}${nino(86, 146, { c: "var(--leaf)", s: 0.7 })}${nino(100, 146, { c: "var(--sun)", s: 0.6, nina: true })}<rect x="116" y="40" width="64" height="120" rx="10" fill="var(--red)" opacity=".08"/>${adulto(136, 146, { c: "var(--inf)", nina: true, s: 1.1 })}${nino(160, 146, { c: "var(--pen)", nina: true, s: 0.75 })}<rect x="188" y="40" width="64" height="120" rx="10" fill="var(--leaf)" opacity=".08"/>${abuelo(208, 146, { c: "#8a5a2b", s: 1.1 })}${nino(232, 146, { c: "var(--red)", s: 0.75 })}`),
    },
    {
      html: `<h3>El árbol familiar</h3><p>Podemos dibujar a la familia en un <mark>árbol familiar</mark> o genealógico.</p><p>Arriba van los <b>abuelos</b>. En el medio, los <b>padres</b> y los <b>tíos</b>. Abajo, tú, tus <b>hermanos</b> y tus <b>primos</b>. Los hijos de tus tíos son tus primos. Los padres de tus padres son tus abuelos.</p>`,
      svg: svg("Un árbol familiar: abuelos arriba, padres en medio y nietos abajo", `<path d="M130 40 V80 M70 80 H190 M70 80 V100 M190 80 V100 M70 120 V140 M40 140 H104" stroke="var(--line)" stroke-width="2.5" fill="none"/>${[["abuelos", 130, 30, "var(--muted)"], ["mamá", 70, 112, "var(--red)"], ["tía", 190, 112, "var(--pen)"], ["yo", 36, 152, "var(--leaf)"], ["hermano", 108, 152, "var(--leaf)"], ["prima", 190, 152, "var(--leaf)"]].map(([t, x, y, c]) => chip(x, y, t.length > 5 ? 66 : 54, t, c, 12)).join("")}<path d="M190 120 V140" stroke="var(--line)" stroke-width="2.5"/>`),
    },
    {
      html: `<h3>La vivienda</h3><p>La familia vive en una <mark>vivienda</mark> o casa. Hay viviendas de muchos tipos.</p><p>Un <b>piso</b> está en un edificio con muchos vecinos. Una <b>casa</b> (unifamiliar) es para una sola familia y a veces tiene jardín. En el campo hay <b>casas de pueblo</b> y masías. ¡Hay hasta casas sobre ruedas, las caravanas!</p>`,
      svg: svg("Un edificio de pisos, una casa con jardín y una caravana", `${hierba(146)}${edificio(54, 146, 52, 110, "#9aa3b5")}<g transform="translate(140 146)"><rect x="-30" y="-44" width="60" height="44" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-36 -44 L0 -70 L36 -44Z" fill="var(--red)"/><rect x="-8" y="-24" width="16" height="24" fill="#8a5a2b"/></g><g transform="translate(220 146)"><rect x="-30" y="-36" width="54" height="28" rx="8" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><rect x="-22" y="-30" width="14" height="10" fill="var(--water)" opacity=".7"/><circle cx="-8" cy="-6" r="7" fill="#1b2235"/><path d="M24 -14 h8" stroke="var(--ink)" stroke-width="2"/></g>${txt(54, 170, "piso", "var(--pen)", 13)}${txt(140, 170, "casa", "var(--red)", 13)}${txt(218, 170, "caravana", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Las partes de la casa</h3><p>Una casa tiene varias <mark>habitaciones</mark>, y cada una sirve para algo.</p><p>En la <b>cocina</b> preparamos la comida. En el <b>salón</b> o comedor descansamos y comemos juntos. En los <b>dormitorios</b> dormimos. En el <b>baño</b> nos lavamos. También hay pasillo, ventanas, puertas y, a veces, terraza.</p>`,
      svg: svg("Una casa por dentro con cocina, salón, dormitorio y baño", `${casaCorte(130, 110)}${cocina(85, 108)}${sofa(175, 102)}${cama(85, 166)}${banera(175, 164)}${rot(85, 62, "cocina", { size: 11, color: "var(--pen)" })}${rot(175, 64, "salón", { size: 11, color: "var(--pen)" })}${rot(85, 124, "dormitorio", { size: 11, color: "var(--pen)" })}${rot(175, 124, "baño", { size: 11, color: "var(--pen)" })}`),
      video: V("BsI3GyLoiio"),
    },
    {
      html: `<h3>Ayudamos en casa</h3><p>En casa <mark>todos colaboramos</mark>. Las tareas se reparten entre todos los que viven allí, sean mayores o pequeños.</p><p>Tú puedes <b>hacer tu cama</b>, recoger tus juguetes, poner la mesa, dar de comer a la mascota o separar la basura. Si todos ayudan, el trabajo se acaba antes y queda tiempo para jugar.</p>`,
      svg: svg("Una niña pone la mesa y un niño recoge sus juguetes", `${suelo(152)}<rect x="40" y="108" width="80" height="8" fill="#a0662f"/><path d="M48 116 V152 M112 116 V152" stroke="#a0662f" stroke-width="5"/><ellipse cx="62" cy="104" rx="12" ry="4" fill="#fff" stroke="var(--ink)"/><ellipse cx="98" cy="104" rx="12" ry="4" fill="#fff" stroke="var(--ink)"/>${nino(26, 152, { nina: true, c: "var(--red)", pose: "brazos" })}${nino(176, 152, { c: "var(--pen)", pose: "agacha" })}<rect x="204" y="128" width="40" height="24" fill="var(--sun)" stroke="var(--ink)"/><circle cx="214" cy="122" r="7" fill="var(--red)"/><rect x="224" y="114" width="12" height="12" fill="var(--leaf)"/>${txt(130, 36, "Todos ayudamos", "var(--leaf)", 16)}`),
    },
    {
      html: `<h3>Normas en casa</h3><p>Para vivir bien juntos hay <mark>normas</mark>. Las normas nos ayudan a respetarnos y a estar a gusto.</p><p>Por ejemplo: dar las gracias y pedir las cosas por favor, hablar sin gritar, respetar el descanso de los demás y cuidar las cosas de todos. Cuando nos enfadamos, lo arreglamos <b>hablando</b>.</p>`,
      svg: svg("Dos niños hablan y se dan la mano", `${suelo(152)}${nino(86, 152, { c: "var(--pen)", pose: "brazos" })}${nino(174, 152, { c: "var(--red)", pose: "brazos", nina: true })}<g><rect x="20" y="22" width="92" height="28" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rot(66, 41, "¿Me ayudas?", { size: 12 })}</g><g><rect x="146" y="22" width="96" height="28" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rot(194, 41, "¡Claro que sí!", { size: 12 })}</g>`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer bien tu casa te ayuda a estar <mark>seguro</mark>. Debes saber tu <b>dirección</b>: la calle, el número y el pueblo o ciudad.</p><p>También es importante saberte el <b>teléfono</b> de un familiar y el número de emergencias, el <b>112</b>. En casa, no toques los enchufes, el horno ni los productos de limpieza.</p>`,
      svg: svg("Una placa de dirección y un teléfono con el número 112", `<rect x="20" y="50" width="120" height="70" rx="10" fill="#1f6feb"/><rect x="26" y="56" width="108" height="58" rx="7" fill="none" stroke="#fff" stroke-width="2"/>${rot(80, 80, "Calle Mayor", { size: 14, color: "#fff" })}${big(80, 106, "nº 8", "#fff", 20)}<g transform="translate(200 90)"><rect x="-24" y="-44" width="48" height="88" rx="8" fill="#1b2235"/><rect x="-18" y="-34" width="36" height="58" rx="3" fill="var(--card)"/>${big(0, 2, "112", "var(--red)", 18)}</g>${txt(80, 152, "mi dirección", "var(--pen)", 14)}${txt(200, 152, "emergencias", "var(--red)", 14)}`),
    },
    {
      html: `<h3>Juego: ¿quién es quién?</h3><p>Resuelve las adivinanzas de la familia. «Es la madre de mi madre». ¡Es mi <mark>abuela</mark>!</p><p>«Es el hijo de mis tíos». ¡Es mi <mark>primo</mark>! «Es la hermana de mi padre». ¡Es mi <b>tía</b>! Ahora inventa tú una adivinanza para tus compañeros.</p>`,
      svg: svg("Una abuela, una tía y un primo con signos de interrogación", `${suelo(150)}${abuelo(60, 150, { c: "var(--inf)", nina: true })}${adulto(132, 150, { c: "var(--pen)", nina: true })}${nino(204, 150, { c: "var(--leaf)" })}${chip(60, 170, 66, "abuela", "var(--inf)", 12)}${chip(132, 170, 54, "tía", "var(--pen)", 12)}${chip(204, 170, 60, "primo", "var(--leaf)", 12)}${big(130, 32, "¿Quién es?", "var(--red)", 18)}`),
    },
  ],
  figura: {
    titulo: "Mi familia y mi casa",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="La familia: abuelos, padres, hermanos, tíos y primos. La casa: cocina, salón, dormitorio y baño">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <path d="M20 200 H300" stroke="var(--line)" stroke-width="3"/>
      ${abuelo(50, 200, { c: "#8a5a2b" })}${adulto(110, 200, { c: "var(--pen)" })}${adulto(160, 200, { c: "var(--red)", nina: true })}${nino(210, 200, { c: "var(--sun)", nina: true })}${nino(250, 200, { c: "var(--leaf)", s: 0.8 })}
      ${rot(160, 236, "La familia nos quiere y nos cuida", { size: 15, color: "var(--pen)", w: 800 })}
      ${casaCorte(470, 150)}${cocina(425, 148)}${sofa(515, 140)}${cama(425, 204)}${banera(515, 202)}
      ${rot(425, 104, "cocina", { size: 12, color: "var(--pen)" })}${rot(515, 106, "salón", { size: 12, color: "var(--pen)" })}${rot(425, 166, "dormitorio", { size: 12, color: "var(--pen)" })}${rot(515, 166, "baño", { size: 12, color: "var(--pen)" })}
    </svg>`,
  },
  video: V("L5qReX-NrZM", "tipos de familia para niños"),
  ejemplos: [
    { enunciado: "¿Quién es el hermano de tu madre?", pasos: ["Tu madre tiene un hermano.", "Los hermanos de tus padres son tus tíos.", "Si es un chico, es tu tío."], resultado: "es tu tío." },
    { enunciado: "¿En qué habitación preparamos la cena?", pasos: ["La cena es comida.", "La comida se prepara con fogones y nevera.", "Esa habitación es la cocina."], resultado: "en la cocina." },
    { enunciado: "Reparte tres tareas para esta tarde.", pasos: ["Piensa qué hay que hacer: mesa, juguetes y mascota.", "Elige una tarea que puedas hacer tú.", "Las otras se reparten entre los demás."], resultado: "yo pongo la mesa; mi hermano recoge; papá da de comer al perro." },
  ],
  errores: [
    "Pensar que solo hay un tipo de familia: hay muchas y todas valen igual.",
    "Confundir tíos con primos: los primos son los hijos de los tíos.",
    "Creer que las tareas de casa son solo de los mayores: todos colaboramos.",
    "No saberse la dirección de casa: es importante por seguridad.",
  ],
  ejercicios: [
    { q: "Escribe los nombres de las personas que viven en tu casa.", sol: "Respuesta libre." },
    { q: "¿Quiénes son los padres de tus padres?", sol: "Mis abuelos." },
    { q: "¿Quiénes son los hijos de tus tíos?", sol: "Mis primos." },
    { q: "Dibuja tu árbol familiar con tres generaciones.", sol: "Abuelos arriba, padres y tíos en medio, yo y mis hermanos y primos abajo." },
    { q: "Di tres tipos de vivienda.", sol: "Piso, casa con jardín y caravana (también masía o casa de pueblo)." },
    { q: "Escribe las partes de la casa y para qué sirven.", sol: "Cocina: cocinar. Salón: descansar. Dormitorio: dormir. Baño: lavarse." },
    { q: "Di tres tareas de casa que puedes hacer tú.", sol: "Hacer la cama, poner la mesa y recoger los juguetes." },
    { q: "Escribe una norma de tu casa.", sol: "Respuesta libre: por ejemplo, pedir las cosas por favor." },
    { q: "¿Cuál es tu dirección?", sol: "Respuesta libre: calle, número y localidad." },
    { q: "¿Qué número llamamos en una emergencia?", sol: "El 112." },
  ],
  quiz: [
    { q: "La madre de tu madre es tu…", o: ["tía", "abuela", "prima"], a: 1, e: "Los padres de tus padres son tus abuelos." },
    { q: "Los hijos de tus tíos son tus…", o: ["primos", "hermanos", "abuelos"], a: 0, e: "Son tus primos." },
    { q: "Las familias son…", o: ["todas iguales", "diferentes", "solo de cuatro personas"], a: 1, e: "Cada familia es distinta." },
    { q: "Dormimos en…", o: ["la cocina", "el dormitorio", "el baño"], a: 1, e: "Es la habitación de dormir." },
    { q: "Nos lavamos en…", o: ["el baño", "el salón", "la terraza"], a: 0, e: "Ahí está la ducha." },
    { q: "Un piso está en…", o: ["un edificio", "un árbol", "una cueva"], a: 0, e: "Con muchos vecinos." },
    { q: "Las tareas de casa son…", o: ["solo de mamá", "de todos", "de nadie"], a: 1, e: "Todos colaboramos." },
    { q: "Si nos enfadamos en casa…", o: ["gritamos", "lo hablamos", "rompemos cosas"], a: 1, e: "Hablando se arregla." },
    { q: "El número de emergencias es…", o: ["112", "123", "999"], a: 0, e: "Uno, uno, dos." },
    { q: "La hermana de tu padre es tu…", o: ["tía", "abuela", "madre"], a: 0, e: "Es tu tía." },
  ],
  examen: [
    { q: "¿Qué hace la familia?", o: ["Nos quiere y nos cuida", "Nada", "Solo cocina"], a: 0, e: "Es nuestro grupo más cercano." },
    { q: "¿Para qué sirve la cocina?", o: ["Para preparar la comida", "Para dormir", "Para bañarse"], a: 0, e: "Ahí se cocina." },
    { q: "¿Qué tarea puede hacer un niño de 2º?", o: ["Poner la mesa", "Conducir", "Arreglar el tejado"], a: 0, e: "¡Y hacer la cama!" },
    { q: "¿Qué debes saber de memoria?", o: ["Tu dirección", "El precio del pan", "La matrícula del coche"], a: 0, e: "Por seguridad." },
  ],
  feynman: ["Quiénes forman una familia", "Las partes de la casa y para qué sirven", "Cómo ayudo en casa"],
  mapaT: ["FAMILIA Y CASA", [
    ["Familia", "padres · hermanos · abuelos", "var(--red)"],
    ["Tipos", "todas distintas, todas valen", "var(--pen)"],
    ["Casa", "cocina · salón · dormitorio · baño", "var(--leaf)"],
    ["Ayudo", "cama · mesa · juguetes", "var(--sun)"],
  ]],
  tarjetas: [
    ["Los padres de tus padres", "Tus abuelos"],
    ["Los hermanos de tus padres", "Tus tíos"],
    ["Los hijos de tus tíos", "Tus primos"],
    ["¿Todas las familias son iguales?", "No, cada una es distinta"],
    ["¿Dónde dormimos?", "En el dormitorio"],
    ["¿Dónde cocinamos?", "En la cocina"],
    ["Una tarea que hago en casa", "Poner la mesa o hacer la cama"],
    ["Número de emergencias", "112"],
  ],
  familias: [
    "Mirad fotos antiguas y construid juntos el árbol familiar con tres generaciones.",
    "Haced un cuadro de tareas semanal donde cada miembro de la familia tenga la suya.",
    "Practicad la dirección completa y el teléfono de un familiar hasta que lo diga de memoria.",
    "Dibujad juntos el plano de vuestra casa y escribid el nombre de cada habitación.",
  ],
  saberes: "Sociedades y territorios: la familia, sus miembros y su diversidad; la vivienda y sus dependencias; corresponsabilidad en las tareas domésticas y normas de convivencia",
  ideas: ["Mural «Nuestras familias» con una foto o dibujo de cada alumno.", "Árbol genealógico sencillo con fotos y flechas.", "Plano de la casa con piezas de cartulina para nombrar las habitaciones."],
});
