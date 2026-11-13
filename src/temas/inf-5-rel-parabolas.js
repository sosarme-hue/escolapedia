// Infantil 5 años · Religión: las parábolas.
const { tema, mapa, svg, rot, big, ic, nino, sol, suelo, corazon, flechaR, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K, MADERA } = require("./_inf5b");

const jesus = (x, y, s = 1, pose = "pie") => nino(x, y, { c: R, pelo: "#5b3a1e", s, pose });

module.exports = tema({
  materia: "Religión",
  titulo: "Las parábolas",
  objetivos: ["Saber que Jesús contaba historias llamadas parábolas", "Conocer la oveja perdida, el sembrador y la casa sobre la roca", "Descubrir qué enseña cada parábola"],
  claves: ["parábola", "Jesús", "oveja perdida", "sembrador", "pastor"],
  pregunta: {
    texto: "¿Te gusta que te cuenten cuentos? ¿Sabías que Jesús también contaba historias?",
    respuesta: "¡Sí! Jesús contaba historias cortas para enseñar. Se llaman <mark>parábolas</mark>.",
  },
  bloques: [
    {
      html: `<h3>Jesús cuenta historias</h3><p>Jesús hablaba a mucha gente. Para que le entendieran, contaba <mark>historias</mark>.</p><p>Esas historias se llaman <b>parábolas</b>. Cada una enseña algo importante.</p><p>¡Vamos a conocer algunas!</p>`,
      svg: svg("Jesús habla sentado y unos niños le escuchan", `${jesus(70, 156, 1, "sentado")}${[140, 180, 220].map((x, i) => nino(x, 158, { c: [A, V, M][i], s: 0.75, pose: "sentado", nina: i === 1 })).join("")}${rot(70, 40, "Había una vez…", { color: R, size: 14 })}${suelo(158)}`),
    },
    {
      html: `<h3>La oveja perdida</h3><p>Un pastor tenía <mark>100 ovejas</mark>. Un día, una se perdió.</p><p>El pastor dejó a las otras y la buscó hasta encontrarla.</p><p>¡Volvió muy contento con ella en brazos!</p>`,
      svg: svg("Un pastor lleva una oveja en brazos; las demás esperan", `${nino(80, 156, { c: MADERA, pose: "brazos" })}${ic("oveja", 104, 112, 0.8)}${[160, 200, 180, 220].map((x, i) => ic("oveja", x, 120 + (i % 2) * 24, 0.8)).join("")}${corazon(80, 40, 1.2)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Qué nos enseña?</h3><p>Dios es como ese pastor: <mark>nos quiere a todos</mark>, uno a uno.</p><p>Si alguien se pierde o está triste, Dios lo busca.</p><p>¡Nadie se queda fuera!</p>`,
      svg: dibujos("Un corazón grande y muchas ovejas: Dios quiere a todos", [["corazon", "Dios nos quiere", R], ["oveja", "a cada uno", V]], { titulo: "La oveja perdida enseña…" }),
    },
    {
      html: `<h3>El sembrador</h3><p>Un sembrador echaba <mark>semillas</mark>.</p><p>Unas cayeron en el camino y en piedras: no crecieron.</p><p>Otras cayeron en <b>tierra buena</b> y dieron mucho trigo. Jesús dice: ¡sed tierra buena!</p>`,
      svg: svg("Semillas en piedras no crecen; en tierra buena crece trigo", `${[50, 90].map((x) => `<ellipse cx="${x}" cy="140" rx="16" ry="8" fill="#9aa3b5"/>`).join("")}${rot(70, 172, "piedras", { color: "var(--muted)" })}<path d="M130 30 V160" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/><rect x="150" y="138" width="96" height="16" rx="4" fill="${MADERA}"/>${[170, 198, 226].map((x) => ic("trigo", x, 116, 1.1)).join("")}${rot(198, 172, "tierra buena", { color: V })}${sol(40, 44, 14)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las parábolas nos ayudan a <mark>ser mejores</mark>.</p><p>Nos enseñan a cuidar a los demás, a buscar al que está solo y a escuchar con atención.</p>`,
      svg: lista("Tres cosas que enseñan las parábolas", [["Dios nos quiere a todos", R], ["Busco al que está solo", A], ["Escucho con atención", V]], { titulo: "Las parábolas enseñan…", marca: "n" }),
    },
    {
      html: `<h3>Juego: busca la oveja</h3><p>Esconde una oveja de papel o un peluche.</p><p>Uno hace de <mark>pastor</mark> y la busca. Los demás dicen «frío» o «caliente».</p><p>¡Cuando la encuentre, todos aplauden!</p>`,
      svg: svg("Un niño busca una oveja escondida detrás de un arbusto", `${nino(70, 156, { c: A, pose: "agacha" })}<circle cx="190" cy="134" r="30" fill="${V}"/><circle cx="214" cy="140" r="22" fill="${V}"/>${ic("oveja", 222, 122, 0.6)}${rot(130, 40, "¿Dónde está?", { color: A, size: 16 })}${suelo(158)}`),
    },
  ],
  figura: {
    titulo: "Parábolas de Jesús",
    svg: mural("La oveja perdida, el sembrador y la casa sobre la roca", [["oveja", "La oveja perdida", "Dios nos busca a todos", V], ["trigo", "El sembrador", "sé tierra buena", M], ["casa", "La casa en la roca", "escucha y haz el bien", A]], "Historias de Jesús"),
  },
  video: { ...vid("n6e_kDN7orM", "El sabio y el necio: ¿casa en la roca o en la arena?", "Bibtoons", 461386), busqueda: "parábolas de jesús para niños" },
  ejemplos: [
    { enunciado: "¿Qué hizo el pastor cuando perdió una oveja?", pasos: ["Tenía 100 ovejas y faltaba una.", "Fue a buscarla hasta encontrarla.", "Volvió contento con ella."], resultado: "la buscó hasta encontrarla." },
    { enunciado: "Una niña construye su casa sobre una roca y otra sobre arena. Llega una tormenta. ¿Cuál aguanta?", pasos: ["La arena se mueve con el agua.", "La roca es fuerte y no se mueve."], resultado: "la casa sobre la roca. Jesús dice que quien escucha y hace el bien es como esa casa." },
  ],
  errores: [
    "Pensar que una parábola es solo un cuento: también enseña algo.",
    "Creer que al pastor le daba igual una oveja: la quería mucho.",
    "Pensar que todas las semillas crecen: solo las de tierra buena.",
  ],
  ejercicios: [
    { q: "Cuenta con tus palabras la oveja perdida.", sol: "Nota para la familia: ayudad con preguntas: ¿qué pasó?, ¿qué hizo el pastor?" },
    { q: "Haz una oveja con algodón y cartulina.", sol: "Nota: pegad bolitas de algodón." },
    { q: "Planta una semilla en un vaso con tierra.", sol: "Regadla y mirad cómo crece, como en el sembrador." },
    { q: "Juega a buscar la oveja escondida.", sol: "Nota: usad un peluche." },
    { q: "Construye una casa con bloques sobre una base firme.", sol: "Recordad la casa sobre la roca." },
    { q: "Piensa en alguien que esté solo y juega con él mañana.", sol: "Como el pastor que busca a la oveja." },
  ],
  quiz: [
    { q: "¿Quién contaba parábolas?", o: ["Jesús", "un rey", "un pirata"], a: 0, e: "Jesús enseñaba con historias." },
    { q: "Una parábola es…", o: ["una historia que enseña", "una canción", "un juego"], a: 0, e: "Cuenta algo para aprender." },
    { q: "¿Cuántas ovejas tenía el pastor?", o: ["100", "3", "10"], a: 0, e: "Y se le perdió una." },
    { q: "El pastor, con la oveja perdida…", o: ["la buscó", "la olvidó", "se enfadó"], a: 0, e: "La buscó hasta encontrarla." },
    { q: "Las semillas crecen en…", o: ["tierra buena", "las piedras", "el camino"], a: 0, e: "Y dan mucho trigo." },
    { q: "La oveja perdida enseña que Dios…", o: ["nos quiere a todos", "no nos ve", "solo quiere a algunos"], a: 0, e: "Uno a uno." },
  ],
  examen: [
    { q: "¿Qué casa aguanta la tormenta?", o: ["la de la roca", "la de la arena", "ninguna"], a: 0, e: "La roca es firme." },
    { q: "El sembrador echaba…", o: ["semillas", "piedras", "agua"], a: 0, e: "Semillas de trigo." },
    { q: "Las parábolas nos ayudan a…", o: ["ser mejores", "dormir", "correr más"], a: 0, e: "Enseñan a hacer el bien." },
  ],
  feynman: ["Qué es una parábola", "Qué pasa en la oveja perdida", "Qué enseña el sembrador"],
  mapa: mapa("LAS PARÁBOLAS", "var(--pri)", [
    ["Qué son", "historias de Jesús", R],
    ["Oveja perdida", "Dios nos busca a todos", V],
    ["Sembrador", "sé tierra buena", M],
    ["Casa en la roca", "escucha y haz el bien", A],
  ], 220),
  tarjetas: [
    ["¿Qué es una parábola?", "Una historia de Jesús que enseña algo"],
    ["¿Qué buscó el pastor?", "La oveja perdida"],
    ["¿Qué enseña la oveja perdida?", "Que Dios nos quiere a todos"],
    ["¿Dónde crecen las semillas?", "En tierra buena"],
    ["¿Qué casa aguanta la tormenta?", "La de la roca"],
    ["¿Para qué sirven las parábolas?", "Para aprender a ser mejores"],
  ],
  familias: [
    "Leed juntos una parábola en una Biblia infantil.",
    "Plantad una semilla y cuidadla entre todos.",
    "Preguntad: «¿qué crees que nos enseña esta historia?».",
    "Animadle a buscar e incluir a quien juega solo en el parque.",
  ],
  profesores: PROF("Religión Católica (oferta voluntaria): Jesús enseña con parábolas; la oveja perdida, el sembrador y la casa sobre roca como expresiones del amor de Dios", ["Dramatización de la oveja perdida con peluches.", "Semillero de clase para hablar del sembrador.", "Construcción de casas sobre arena y piedra en el patio."]),
});
