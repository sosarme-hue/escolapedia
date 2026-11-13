// Infantil 5 años · Religión: la familia de Jesús.
const { tema, mapa, svg, rot, big, ic, nino, casa, estrella, corazon, suelo, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K, MADERA } = require("./_inf5b");

const maria = (x, y, s = 1, pose = "pie") => nino(x, y, { c: W, nina: true, pelo: "#5b3a1e", s, pose });
const jose = (x, y, s = 1, pose = "pie") => nino(x, y, { c: MADERA, pelo: "#3b2a1a", s, pose });
const jesus = (x, y, s = 0.7, pose = "pie") => nino(x, y, { c: R, pelo: "#5b3a1e", s, pose });

module.exports = tema({
  materia: "Religión",
  titulo: "La familia de Jesús",
  objetivos: ["Conocer a María y a José, la familia de Jesús", "Saber que Jesús vivió de niño en Nazaret", "Valorar el cariño y la ayuda en la propia familia"],
  claves: ["Jesús", "María", "José", "Nazaret", "Sagrada Familia"],
  pregunta: {
    texto: "¿Quién te cuida en casa? ¿Quién cuidaba a Jesús cuando era pequeño?",
    respuesta: "Jesús tenía una familia, como tú: su madre, <mark>María</mark>, y <mark>José</mark>, que lo cuidaba como un padre.",
  },
  bloques: [
    {
      html: `<h3>Jesús tiene una familia</h3><p>Jesús nació en una <mark>familia</mark>, igual que tú.</p><p>Su madre era <b>María</b>. <b>José</b> lo cuidaba como un padre.</p><p>Los cristianos la llaman <b>la Sagrada Familia</b>.</p>`,
      svg: svg("José, Jesús niño y María juntos", `${jose(70, 150)}${jesus(130, 150)}${maria(190, 150)}${suelo(150)}${rot(70, 172, "José", { color: MADERA })}${rot(130, 172, "Jesús", { color: R })}${rot(190, 172, "María", { color: W })}`),
    },
    {
      html: `<h3>Viven en Nazaret</h3><p>La familia de Jesús vivía en un pueblo pequeño llamado <mark>Nazaret</mark>.</p><p>Su casa era sencilla, de piedra, con un tejado plano.</p><p>Allí Jesús creció feliz.</p>`,
      svg: svg("Un pueblo de casas blancas con un sol: Nazaret", `${ic("sol", 220, 40, 1)}${[[50, 150], [110, 150], [170, 150]].map(([x, y]) => `<rect x="${x - 26}" y="${y - 44}" width="52" height="44" fill="#f3e3c3" stroke="${K}" stroke-width="2"/><rect x="${x - 7}" y="${y - 22}" width="14" height="22" fill="${MADERA}"/>`).join("")}${suelo(152)}${big(110, 50, "Nazaret", MADERA, 26)}`),
    },
    {
      html: `<h3>José, el carpintero</h3><p>José era <mark>carpintero</mark>: hacía mesas, sillas y puertas de madera.</p><p>Jesús le ayudaba en el taller.</p><p>¡Aprendía mucho de él!</p><p>Juntos hacían cosas muy útiles para los vecinos.</p>`,
      svg: svg("José y Jesús trabajan la madera en el taller", `${jose(60, 156, 1, "brazos")}${jesus(206, 156, 0.75, "brazos")}<rect x="90" y="118" width="86" height="10" rx="2" fill="${MADERA}"/><path d="M96 128 v28 M170 128 v28" stroke="${MADERA}" stroke-width="4"/><path d="M120 110 l14 -14 l6 6 l-14 14z" fill="#9aa3b5"/>${rot(130, 40, "El taller de José", { color: MADERA, size: 15 })}${suelo(158)}`),
    },
    {
      html: `<h3>María, la madre de Jesús</h3><p>María cuidaba a Jesús con <mark>mucho cariño</mark>.</p><p>Le daba de comer, le contaba historias y rezaban juntos.</p><p>Los cristianos la llaman <b>la Virgen María</b>.</p>`,
      svg: svg("María abraza a Jesús niño con un corazón encima", `${maria(110, 156, 1.1, "brazos")}${jesus(150, 156, 0.7, "arriba")}${corazon(130, 46, 1.6)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>La familia de Jesús nos enseña a <mark>querernos y ayudarnos</mark> en casa.</p><p>Tú también puedes ayudar: poner la mesa, recoger los juguetes o dar un abrazo.</p>`,
      svg: lista("Tres formas de ayudar en casa", [["Pongo la mesa", A], ["Recojo mis juguetes", V], ["Doy un abrazo", R]], { titulo: "Yo ayudo en mi familia", marca: "n" }),
    },
    {
      html: `<h3>Juego: el árbol de mi familia</h3><p>Dibuja un árbol grande.</p><p>En cada rama pon a una persona de <mark>tu familia</mark>: mamá, papá, abuelos, hermanos…</p><p>¡Todas las familias son especiales!</p><p>Cuélgalo en casa.</p>`,
      svg: dibujos("Mamá, papá, abuelo, abuela y bebé", [["mama", "mamá", R], ["papa", "papá", A], ["abuelo", "abuelo", V], ["abuela", "abuela", N], ["bebe", "bebé", M]], { titulo: "Mi familia" }),
    },
  ],
  figura: {
    titulo: "La Sagrada Familia",
    svg: mural("María, José y Jesús en Nazaret", [["nina", "María", "la madre de Jesús", W], ["nino", "Jesús", "crece en Nazaret", R], ["papa", "José", "carpintero, cuida a Jesús", A]], "La familia de Jesús"),
  },
  video: { ...vid("j71kJWC_xYw", "La Sagrada Familia de Jesús", "PequeFe", 35658), busqueda: "la sagrada familia para niños jesús maría y josé" },
  ejemplos: [
    { enunciado: "¿Quiénes forman la familia de Jesús?", pasos: ["Su madre se llama María.", "José lo cuida como un padre.", "Y Jesús, el hijo."], resultado: "María, José y Jesús: la Sagrada Familia." },
    { enunciado: "¿Cómo ayudaba Jesús en casa?", pasos: ["José era carpintero.", "Jesús le ayudaba en el taller con la madera."], resultado: "ayudaba a José en el taller." },
  ],
  errores: [
    "Pensar que Jesús no tuvo familia: tuvo a María y a José.",
    "Creer que José era pescador: era carpintero.",
    "Pensar que solo hay un tipo de familia: todas las familias son especiales.",
  ],
  ejercicios: [
    { q: "Dibuja a la familia de Jesús: María, José y Jesús.", sol: "Nota para la familia: ayudad a poner los nombres." },
    { q: "Di los nombres de las personas de tu familia.", sol: "Respuesta libre." },
    { q: "Haz una mesa pequeña con piezas, como José el carpintero.", sol: "Nota: con bloques, palillos o plastilina." },
    { q: "Ayuda hoy en casa en una tarea.", sol: "Por ejemplo: poner la mesa o recoger." },
    { q: "Dibuja el árbol de tu familia.", sol: "Nota: una persona en cada rama." },
    { q: "Da un abrazo a alguien de tu familia y dile «te quiero».", sol: "El cariño une a las familias." },
  ],
  quiz: [
    { q: "¿Cómo se llama la madre de Jesús?", o: ["María", "Marta", "Ana"], a: 0, e: "La Virgen María." },
    { q: "José era…", o: ["carpintero", "pescador", "pastor"], a: 0, e: "Trabajaba la madera." },
    { q: "Jesús creció en…", o: ["Nazaret", "Madrid", "el desierto"], a: 0, e: "Un pueblo pequeño." },
    { q: "La familia de Jesús se llama…", o: ["la Sagrada Familia", "la familia feliz", "la familia grande"], a: 0, e: "María, José y Jesús." },
    { q: "Jesús ayudaba a José…", o: ["en el taller", "en el mar", "en el cole"], a: 0, e: "Con la madera." },
    { q: "En mi familia puedo…", o: ["ayudar y querer", "no hacer nada", "enfadarme siempre"], a: 0, e: "Como la familia de Jesús." },
  ],
  examen: [
    { q: "¿Quién cuidaba a Jesús como un padre?", o: ["José", "Pedro", "Juan"], a: 0, e: "José." },
    { q: "María es…", o: ["la madre de Jesús", "la hermana de Jesús", "una vecina"], a: 0, e: "La Virgen María." },
    { q: "¿Dónde vivía la familia de Jesús?", o: ["en Nazaret", "en Roma", "en un barco"], a: 0, e: "En Nazaret." },
  ],
  feynman: ["Quiénes son María y José", "Dónde creció Jesús", "Cómo puedo ayudar en mi familia"],
  mapa: mapa("FAMILIA DE JESÚS", "var(--pri)", [
    ["María", "la madre de Jesús", W],
    ["José", "carpintero", A],
    ["Nazaret", "allí creció Jesús", V],
    ["Mi familia", "nos queremos y ayudamos", R],
  ], 220),
  tarjetas: [
    ["¿Quién es la madre de Jesús?", "María"],
    ["¿Qué trabajo tenía José?", "Carpintero"],
    ["¿Dónde creció Jesús?", "En Nazaret"],
    ["¿Cómo se llama la familia de Jesús?", "La Sagrada Familia"],
    ["¿Cómo ayudaba Jesús?", "En el taller de José"],
    ["¿Cómo ayudo yo en casa?", "Pongo la mesa, recojo, doy abrazos"],
  ],
  familias: [
    "Mirad fotos de la familia y contad historias de cuando era bebé.",
    "Repartid pequeñas tareas para que ayude en casa cada día.",
    "Si sois creyentes, rezad juntos una oración corta por la familia.",
    "Haced juntos el árbol de la familia con fotos o dibujos.",
  ],
  profesores: PROF("Religión Católica (oferta voluntaria): la Sagrada Familia, la infancia de Jesús en Nazaret y los valores de cuidado y ayuda en la familia", ["Belén o figuras de la Sagrada Familia para observar y contar.", "Mural del árbol familiar de cada niño.", "Dramatización del taller de José."]),
});
