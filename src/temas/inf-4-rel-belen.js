// Religión, Infantil 4 años: Jesús nace en Belén.
const { mapa } = require("./_util");
const { svg, rot, nino, estrella, suelo, pesebre, secuencia, dibujos, mural, ic, vid, R, A, V, N, M, W, G, MARRON, PROF, FUENTES } = require("./_inf4b");

// Portal de Belén: tejado, estrella, María, José y el pesebre.
const portal = (x = 130, y = 150, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-90 0 V-70 H90 V0" fill="none" stroke="${MARRON}" stroke-width="6"/><path d="M-100 -68 L0 -110 L100 -68z" fill="${MARRON}"/>
  ${pesebre(0, -14, 1.2)}${nino(-50, 0, { c: W, nina: true, pose: "reza", pelo: "#5a3a1b" })}${nino(50, 0, { c: MARRON, pelo: "#5a3a1b" })}</g>`;

module.exports = {
  materia: "Religión",
  curso: "4-anos",
  titulo: "Jesús nace en Belén",
  minutos: 15,
  objetivos: ["Conocer la historia del nacimiento de Jesús", "Reconocer a los personajes del belén: María, José y el niño Jesús", "Descubrir por qué celebramos la Navidad"],
  claves: ["Navidad", "Jesús", "María", "José", "Belén", "pesebre", "estrella"],
  pregunta: {
    texto: "En Navidad, en muchas casas ponen un belén. ¿Qué figuras tiene?",
    respuesta: "Tiene a <mark>María</mark>, a <mark>José</mark> y al <mark>niño Jesús</mark> en un pesebre. ¡Recuerda que Jesús nació en Belén!",
  },
  bloques: [
    {
      html: `<h3>María y José</h3><p><mark>María</mark> y <mark>José</mark> esperaban un bebé.</p><p>Tuvieron que hacer un viaje largo hasta un pueblo llamado <b>Belén</b>.</p><p>María iba montada en un burrito. ¡Estaban muy cansados!</p>`,
      svg: svg("José camina junto al burro en el que va María hacia Belén", `${ic("burro", 120, 118, 2)}${nino(122, 104, { c: W, nina: true, pelo: "#5a3a1b", s: 0.8 })}${nino(196, 150, { c: MARRON, pelo: "#5a3a1b" })}${estrella(220, 34, 12)}${suelo(150)}${rot(130, 172, "Camino de Belén", { color: MARRON })}`),
    },
    {
      html: `<h3>No había sitio</h3><p>En Belén buscaron un lugar para dormir, pero <mark>no había sitio</mark> en ninguna casa.</p><p>Al final encontraron un <b>establo</b>, donde dormían los animales.</p><p>Allí había paja, una mula y un buey.</p>`,
      svg: svg("Un establo sencillo con paja y una vaca", `<path d="M40 150 V70 H220 V150" fill="none" stroke="${MARRON}" stroke-width="6"/><path d="M30 72 L130 30 L230 72z" fill="${MARRON}"/>${ic("vaca", 90, 124, 1.5)}${ic("burro", 170, 124, 1.5)}<path d="M50 150 q20 -10 40 0 q20 -10 40 0 q20 -10 40 0 q20 -10 40 0" stroke="var(--sun)" stroke-width="4" fill="none"/>${rot(130, 172, "un establo", { color: MARRON })}`),
    },
    {
      html: `<h3>¡Nace Jesús!</h3><p>Esa noche nació el <mark>niño Jesús</mark>.</p><p>María lo envolvió en pañales y lo acostó en un <b>pesebre</b>, donde comen los animales.</p><p>Una <b>estrella</b> muy brillante brillaba encima.</p>`,
      svg: svg("El portal de Belén con María, José y el niño Jesús en el pesebre bajo una estrella", `${estrella(130, 24, 14)}${portal(130, 158, 0.95)}`),
    },
    {
      html: `<h3>Los pastores y los Reyes</h3><p>Unos <mark>pastores</mark> que cuidaban ovejas fueron a ver al niño. Un ángel les había dado la noticia.</p><p>Más tarde llegaron los <b>Reyes Magos</b>, siguiendo la estrella, con regalos.</p>`,
      svg: secuencia("Un ángel, los pastores con una oveja y los Reyes Magos con regalos", [["estrella", "ángel", M], ["", "pastores", V, `<ellipse rx="18" ry="12" fill="#fff" stroke="var(--line)" stroke-width="2"/><circle cx="-16" cy="-4" r="7" fill="var(--ink)"/>`], ["", "Reyes", R, `<path d="M-16 8 l4 -18 l8 8 l4 -12 l4 12 l8 -8 l4 18z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`]], { titulo: "Visitan a Jesús" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En <mark>Navidad</mark> recordamos que nació Jesús.</p><p>Es una fiesta de <b>alegría</b> y de familia. Ponemos el belén, cantamos villancicos y compartimos.</p><p>¡Es el cumpleaños de Jesús!</p>`,
      svg: dibujos("La Navidad: la estrella, la familia y cantar villancicos", [["estrella", "belén", M], ["corazon", "familia", R], ["campana", "villancicos", V]], { titulo: "Celebramos la Navidad" }),
    },
    {
      html: `<h3>Juego: montamos el belén</h3><p>Con figuras, plastilina o dibujos, montamos un <mark>belén</mark>.</p><p>¿Dónde va María? ¿Y José? ¿Y el niño Jesús?</p><p>No olvides la estrella arriba, los pastores y la mula y el buey.</p>`,
      svg: svg("Un niño coloca la estrella encima de un belén de juguete", `${portal(150, 156, 0.7)}${estrella(150, 56, 10)}${nino(40, 156, { c: R, pose: "arriba" })}${rot(190, 26, "¡Montamos el belén!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Los personajes del belén",
    svg: mural("Cuatro tarjetas: María, José, el niño Jesús y la estrella", [["mama", "María", "la madre de Jesús", W], ["papa", "José", "cuida de la familia", MARRON], ["bebe", "Jesús", "nace en un pesebre", R], ["estrella", "La estrella", "guía a los Reyes", M]], "Jesús nace en Belén"),
  },
  video: { ...vid("y_0c8XQs890", "El nacimiento de Jesús explicado para niños", "Biblia para niños - AprendeMás", 300869), busqueda: "nacimiento de Jesús para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde nació Jesús?", pasos: ["María y José viajaron a un pueblo.", "No había sitio y fueron a un establo.", "El pueblo se llamaba Belén."], resultado: "en un establo de Belén." },
    { enunciado: "¿Quiénes fueron a visitar a Jesús?", pasos: ["Primero, unos pastores con sus ovejas.", "Después, los Reyes Magos con regalos."], resultado: "los pastores y los Reyes Magos." },
  ],
  errores: [
    "Pensar que Jesús nació en una casa grande: nació en un establo, muy pobre.",
    "Pensar que la Navidad es solo regalos: celebramos que nació Jesús.",
    "Confundir a José con un Rey Mago: José es el padre que cuida de Jesús.",
  ],
  ejercicios: [
    { q: "Señala en un belén a María, José y el niño Jesús.", sol: "Para la familia: aprovechad el belén de casa, de la parroquia o de la calle." },
    { q: "Dibuja la estrella de Belén.", sol: "Para la familia: grande y amarilla, con su cola si quiere." },
    { q: "Canta un villancico.", sol: "Por ejemplo, «Campana sobre campana» o «Los peces en el río»." },
    { q: "Haz el niño Jesús con plastilina en un pesebre.", sol: "Para la familia: una cajita de cerillas sirve de pesebre." },
    { q: "Cuenta la historia con tus palabras.", sol: "Para la familia: ayudad con «primero, después, al final»." },
    { q: "Piensa un regalo sin comprar para alguien de tu familia.", sol: "Un abrazo, un dibujo, ayudar en casa…" },
  ],
  quiz: [
    { q: "¿Dónde nació Jesús?", o: ["En Belén", "En la playa", "En un castillo"], a: 0, e: "En un establo de Belén." },
    { q: "¿Cómo se llama la madre de Jesús?", o: ["María", "Laura", "Ana"], a: 0, e: "María." },
    { q: "¿Dónde acostaron a Jesús?", o: ["En un pesebre", "En una cama grande", "En un coche"], a: 0, e: "En un pesebre." },
    { q: "¿Qué guió a los Reyes Magos?", o: ["Una estrella", "Un mapa", "Un perro"], a: 0, e: "La estrella de Belén." },
    { q: "En Navidad celebramos…", o: ["Que nació Jesús", "El verano", "Que empieza el cole"], a: 0, e: "El nacimiento de Jesús." },
    { q: "¿Quién cuidaba de María y Jesús?", o: ["José", "Un pastor", "Un rey"], a: 0, e: "José." },
  ],
  examen: [
    { q: "¿Por qué fueron al establo?", o: ["No había sitio", "Les gustaban los animales", "Era una fiesta"], a: 0, e: "No había sitio en las casas." },
    { q: "¿Quién avisó a los pastores?", o: ["Un ángel", "Un rey", "Un niño"], a: 0, e: "Un ángel les dio la noticia." },
    { q: "La Navidad es una fiesta de…", o: ["Alegría y familia", "Tristeza", "Deporte"], a: 0, e: "Alegría por el nacimiento de Jesús." },
  ],
  feynman: ["Cuenta la historia de cómo nació Jesús", "Di quién es quién en el belén"],
  mapa: mapa("JESÚS NACE EN BELÉN", "var(--inf)", [
    ["María y José", "viajan a Belén", W],
    ["Un establo", "no había sitio", MARRON],
    ["Jesús", "nace en un pesebre", R],
    ["Visitas", "pastores y Reyes", M],
  ], 220),
  tarjetas: [
    ["¿Dónde nació Jesús?", "En Belén"],
    ["¿Quién es la madre de Jesús?", "María"],
    ["¿Quién es José?", "El padre que cuida de Jesús"],
    ["¿Dónde durmió Jesús?", "En un pesebre"],
    ["¿Qué siguieron los Reyes Magos?", "Una estrella"],
    ["¿Qué celebramos en Navidad?", "Que nació Jesús"],
  ],
  familias: [
    "Montad juntos el belén y contad la historia mientras colocáis las figuras.",
    "Visitad un belén de la parroquia o del ayuntamiento.",
    "Cantad villancicos en familia.",
    "Pensad juntos en un gesto de ayuda para alguien que lo necesite en Navidad.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: el nacimiento de Jesús (Lc 2), la Sagrada Familia y el sentido cristiano de la Navidad. Área de opción voluntaria", ["Belén de clase con figuras hechas por el alumnado.", "Dramatización sencilla del nacimiento.", "Villancicos con instrumentos de pequeña percusión."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
