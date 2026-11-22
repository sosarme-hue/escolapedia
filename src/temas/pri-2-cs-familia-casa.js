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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer tipos de vivienda en distintos lugares", "Ahorrar energía y agua en casa", "Prevenir accidentes domésticos", "Valorar las celebraciones familiares"],
  lectura: { titulo: "La casa de los abuelos", html: `<p>En verano, Sofía pasa unas semanas en el pueblo con sus abuelos. Su casa es muy distinta del piso de la ciudad donde vive con sus padres.</p><p>La casa de los abuelos es de piedra y tiene dos plantas. Abajo hay una cocina grande con una chimenea, y arriba están los dormitorios. Detrás hay un patio con un limonero y un huerto pequeño.</p><p>En la ciudad, Sofía vive en un cuarto piso. Para llegar, coge el ascensor. Desde la ventana ve otros edificios, coches y un parque.</p><p>Por las mañanas, en el pueblo, Sofía ayuda a su abuela a regar el huerto y a dar de comer a las gallinas. Por las tardes, el abuelo le enseña juegos de cuando él era pequeño.</p><p>Al final del verano, toda la familia se reúne para celebrar el cumpleaños de la abuela. Vienen tíos, primos y hasta una bisabuela.</p><p>—Cada casa es diferente —piensa Sofía—, pero en las dos me siento en mi hogar.</p>` },
  tras: {
    "La vivienda": [
      ["Viviendas de aquí y de allá", `<p>Las personas viven en <mark>viviendas</mark> muy distintas según el lugar y el clima:</p><ul><li><b>Piso</b>: en un edificio con muchas viviendas, típico de las ciudades.</li><li><b>Casa</b> o chalé: una vivienda para una familia, a menudo con jardín o patio.</li><li><b>Casa de campo</b> o cortijo: en el campo, con espacio para animales y cultivos.</li><li><b>Cueva</b>: en Granada hay casas excavadas en la roca. Son frescas en verano y calentitas en invierno.</li><li><b>Palafito</b>: casa sobre palos encima del agua, en lugares con ríos o lagos.</li><li><b>Iglú</b>: refugio de nieve que construían los inuit en las zonas heladas.</li><li><b>Jaima</b>: tienda de tela de los pueblos nómadas del desierto.</li></ul><p>Cada vivienda se adapta al <b>clima</b> y a los materiales del lugar.</p><p><b>Actividad</b>: dibuja tu vivienda y otra muy distinta de otro lugar del mundo.</p>`,
        L6.filas("Viviendas", [["piso", "ciudad", cAZ], ["cueva", "Granada", cNA], ["palafito", "sobre agua", cVE], ["iglú", "nieve", cMO]])],
    ],
    "Ayudamos en casa": [
      ["Ahorrar en casa", `<p>En casa gastamos <mark>agua</mark> y <mark>energía</mark>. Si ahorramos, cuidamos el planeta y la familia gasta menos dinero.</p><p>Para ahorrar <b>agua</b>:</p><ul><li>Cerrar el grifo mientras nos lavamos los dientes.</li><li>Ducharnos en vez de bañarnos.</li><li>Avisar si un grifo gotea.</li></ul><p>Para ahorrar <b>energía</b>:</p><ul><li>Apagar la luz al salir de una habitación.</li><li>Apagar la tele y el ordenador cuando no los usamos, sin dejarlos en espera.</li><li>Aprovechar la luz del sol abriendo las persianas.</li><li>No abrir la nevera sin necesidad.</li><li>Cerrar puertas y ventanas con la calefacción encendida.</li></ul><p>Pequeños gestos de todos los días, sumados, ahorran muchísimo.</p><p><b>Actividad</b>: sé el «vigilante del ahorro» de tu casa durante una semana y apunta los gestos de tu familia.</p>`,
        H6.dos("Ahorrar", ["AGUA", ["cerrar grifo", "ducha", "avisar goteo"], cAZ], ["ENERGÍA", ["apagar luz", "apagar tele", "luz del sol"], cNA]),
        ["6g6WGfV0S58", "Responsabilidades en Casa - Conocimiento del medio", "Instituto Canadiense", 329746]],
    ],
    "Normas en casa": [
      ["Prevenir accidentes en casa", `<p>Aunque la casa es un lugar seguro, pueden ocurrir <mark>accidentes</mark>. Con cuidado se evitan:</p><ul><li><b>Cocina</b>: no tocar el fuego, la vitrocerámica ni el horno. No coger cuchillos. Girar los mangos de las sartenes hacia dentro.</li><li><b>Enchufes</b>: no meter los dedos ni objetos. No tocar aparatos eléctricos con las manos mojadas.</li><li><b>Productos de limpieza</b> y <b>medicinas</b>: nunca tocarlos ni probarlos. Deben estar en lugares altos o cerrados.</li><li><b>Ventanas y balcones</b>: no asomarse ni subirse a sillas cerca de ellos.</li><li><b>Suelos</b>: recoger los juguetes para no tropezar y tener cuidado con el suelo mojado.</li></ul><p>Si ocurre algo, avisa enseguida a un adulto.</p><p><b>Actividad</b>: dibuja un plano de tu casa y marca con un triángulo rojo los lugares donde hay que tener cuidado.</p>`,
        H6.rueda("Peligro", "CASA", [["fuego", cRO], ["enchufes", cNA], ["limpieza", cMO], ["ventanas", cAZ]])],
    ],
    "¿Para qué sirve?": [
      ["Celebraciones en familia", `<p>Las familias se reúnen para <mark>celebrar</mark> momentos especiales:</p><ul><li><b>Cumpleaños</b>: con tarta, velas y regalos.</li><li><b>Navidad</b> y <b>Año Nuevo</b>: comidas en familia, belenes, árboles, uvas a medianoche.</li><li><b>Fiestas del pueblo</b>: en verano, con verbenas y procesiones.</li><li><b>Bodas</b>, <b>bautizos</b> y <b>comuniones</b>.</li><li>Otras fiestas según las costumbres de cada familia: el fin del Ramadán, el Año Nuevo chino, Janucá…</li></ul><p>En las celebraciones se comparten comidas típicas, canciones y recuerdos. Los mayores cuentan historias de cuando eran pequeños.</p><p>Celebrar juntos hace que la familia se sienta más <b>unida</b>.</p><p><b>Actividad</b>: cuenta en clase cómo celebra tu familia su fiesta favorita.</p>`,
        L6.filas("Fiestas", [["cumpleaños", "tarta", cRO], ["Navidad", "belén, árbol", cVE], ["Año Nuevo", "uvas", cNA], ["fiestas", "del pueblo", cAZ]])],
    ],
  },
  final: [
    ["Las casas de antes", `<p>Las casas de nuestros bisabuelos eran muy <mark>diferentes</mark> a las de ahora:</p><ul><li>Muchas no tenían <b>agua corriente</b>: había que ir a buscarla a la fuente o al pozo.</li><li>No había <b>calefacción</b>: se calentaban con la chimenea o con un brasero.</li><li>Se cocinaba con <b>leña</b> o carbón.</li><li>No había <b>nevera</b>: los alimentos se guardaban en la despensa fresca o en sal.</li><li>La ropa se lavaba a mano en el <b>río</b> o en el lavadero del pueblo.</li><li>No había televisión: por la noche se escuchaba la radio o se contaban historias.</li></ul><p>Hoy tenemos agua caliente, electricidad, lavadora, nevera y calefacción. ¡La vida en casa es mucho más cómoda!</p><p><b>Actividad</b>: pregunta a tus abuelos cómo era su casa de pequeños y dibújala.</p>`,
      H6.dos("Casa", ["ANTES", ["pozo", "chimenea", "lavar en río"], cMO], ["AHORA", ["grifo", "calefacción", "lavadora"], cAZ])],
    ["Repaso: la casa de los abuelos", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>La casa del pueblo es de <b>piedra</b>, tiene dos <b>plantas</b>, chimenea, patio y huerto.</li><li>En la ciudad, Sofía vive en un <b>piso</b>, en un cuarto piso con ascensor.</li><li>Sofía <b>ayuda</b> en casa: riega el huerto y da de comer a las gallinas.</li><li>El abuelo le enseña juegos de <b>antes</b>.</li><li>La familia se reúne para <b>celebrar</b> el cumpleaños de la abuela.</li><li>Vienen tíos, primos y una <b>bisabuela</b>: ¡cuatro generaciones juntas!</li></ul><p>Sofía descubre que el <b>hogar</b> no es solo la casa: es el lugar donde está la gente que nos quiere.</p><p><b>Actividad</b>: compara tu casa con la de un familiar en una tabla de dos columnas.</p>`,
      L6.filas("Sofía", [["pueblo", "casa de piedra", cNA], ["ciudad", "piso", cAZ], ["ayuda", "huerto", cVE], ["celebra", "cumpleaños", cRO]])],
  ],
  ejemplos: [
    ["¿Dónde hay casas cueva en España?", ["Recuerdo la lista de viviendas."], "En Granada."],
    ["¿Cómo ahorramos agua al lavarnos los dientes?", ["El agua corre sin usarla."], "Cerrando el grifo."],
  ],
  errores: ["Dejar los aparatos en espera pensando que no gastan.", "Guardar los productos de limpieza al alcance de los niños."],
  ejercicios: [
    ["b", "Di un tipo de vivienda.", "Piso, casa, cueva…"],
    ["b", "Di una forma de ahorrar energía.", "Apagar la luz al salir."],
    ["b", "¿Qué no debemos tocar con las manos mojadas?", "Los aparatos eléctricos."],
    ["b", "Di una celebración familiar.", "Cumpleaños, Navidad…"],
    ["b", "¿Qué es un iglú?", "Un refugio de nieve."],
    ["m", "¿Por qué las viviendas son distintas en cada lugar?", "Porque se adaptan al clima y los materiales."],
    ["m", "¿Hacia dónde giramos los mangos de las sartenes?", "Hacia dentro."],
    ["m", "¿Cómo se lavaba antes la ropa?", "A mano, en el río o el lavadero."],
    ["m", "¿Por qué es mejor ducharse que bañarse?", "Porque se gasta menos agua."],
    ["m", "¿Qué es un palafito?", "Una casa sobre palos encima del agua."],
    ["a", "En la lectura, ¿qué diferencias hay entre las dos casas de Sofía?", "Una es de piedra con huerto en el pueblo; otra, un piso en la ciudad."],
    ["a", "¿Qué quiere decir Sofía con «en las dos me siento en mi hogar»?", "Que el hogar es donde está la gente que la quiere."],
    ["a", "Propón tres normas de seguridad para la cocina.", "No tocar el fuego, no coger cuchillos, mangos hacia dentro."],
    ["a", "Compara una casa de antes con una de ahora.", "Antes sin agua corriente ni nevera; ahora con grifo, nevera, calefacción."],
  ],
  quiz: [
    ["Una casa excavada en la roca es una…", ["cueva", "jaima", "palafito"], "Viviendas."],
    ["Para ahorrar energía…", ["apagamos la luz", "dejamos la tele encendida", "abrimos la nevera"], "Ahorro."],
    ["Las medicinas deben estar…", ["en lugares altos o cerrados", "en el suelo", "en la mesa"], "Accidentes."],
    ["En Año Nuevo, en España se toman…", ["uvas", "turrones a mediodía", "castañas"], "Fiestas."],
    ["Antes se calentaban las casas con…", ["chimenea o brasero", "radiadores", "aire acondicionado"], "Antes."],
  ],
  examen: [
    ["En la lectura, ¿qué árbol hay en el patio de los abuelos?", ["un limonero", "un pino", "un olivo"], "Lectura."],
    ["¿Qué celebran al final del verano?", ["el cumpleaños de la abuela", "la Navidad", "una boda"], "Repaso."],
  ],
  tarjetas: [
    ["Ahorrar", "Cerrar grifos y apagar luces y aparatos."],
    ["Seguridad en casa", "Fuego, enchufes, limpieza y ventanas: ¡cuidado!"],
  ],
  glosario: [
    ["Vivienda", "Lugar donde vive una familia."],
    ["Piso", "Vivienda dentro de un edificio."],
    ["Cueva", "Vivienda excavada en la roca."],
    ["Palafito", "Casa sobre palos en el agua."],
    ["Jaima", "Tienda de tela del desierto."],
    ["Ahorrar", "Gastar menos."],
    ["Energía", "Lo que hace funcionar luces y aparatos."],
    ["Accidente doméstico", "Accidente que ocurre en casa."],
    ["Celebración", "Fiesta para un momento especial."],
    ["Hogar", "Casa donde vive la familia."],
  ],
  situacion: {
    titulo: "Casa segura y ahorradora",
    reto: "Cada niño revisa su casa con su familia para hacerla más segura y ahorrar agua y energía.",
    pasos: ["Dibujar el plano de la propia casa.", "Marcar lugares peligrosos y proponer soluciones.", "Anotar durante una semana gestos de ahorro.", "Presentar en clase un cartel con las mejores ideas."],
    producto: "Un plano de casa segura y un cartel de ahorro.",
    evaluacion: ["Conoce tipos de vivienda.", "Propone formas de ahorrar.", "Identifica peligros en casa.", "Valora las celebraciones familiares."],
  },
});
