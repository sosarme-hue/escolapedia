// Infantil 5 anys · Primeros pasos en catalán: la meva casa. Tema escrit en català.
const { tema, mapa, svg, rot, big, ic, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

const casaCorte = (extra = "") => `<path d="M30 70 L130 20 L230 70z" fill="${R}"/><rect x="40" y="70" width="180" height="96" fill="var(--card)" stroke="${K}" stroke-width="2.5"/><path d="M130 70 V166 M40 118 H220" stroke="${K}" stroke-width="2"/>${ic("cama", 85, 98, 1)}${ic("banera", 175, 98, 1)}${ic("sofa", 85, 146, 1)}${ic("cocina", 175, 146, 0.9)}${extra}`;

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "La meva casa",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Dir les parts de la casa en català", "Anomenar la porta i la finestra", "Dir on és una cosa: a la cuina"],
  claves: ["casa", "habitació", "lavabo", "cuina", "menjador", "porta", "finestra", "On és…?"],
  pregunta: {
    texto: "On dorms? I on es cuina? Saps com es diuen aquests llocs en català?",
    respuesta: "Dormim a l'<mark>habitació</mark> i cuinem a la <mark>cuina</mark>. Totes juntes formen <b>la meva casa</b>.",
  },
  bloques: [
    {
      html: `<h3>La meva casa</h3><p>La casa té una <mark>porta</mark> per entrar.</p><p>També té <b>finestres</b> per on entra la llum.</p><p>A dins hi ha moltes parts. Les coneixes?</p><p>Cada part té el seu nom.</p>`,
      svg: dibujos("Casa, porta i finestra", [["casa", "casa", R], ["puerta", "porta", N], ["ventana", "finestra", W]]),
    },
    {
      html: `<h3>L'habitació i el lavabo</h3><p>A l'<mark>habitació</mark> hi ha el llit: és on dormim.</p><p>Al <mark>lavabo</mark> ens banyem i ens rentem les dents.</p><p>Quina té més coses teves?</p>`,
      svg: dibujos("Habitació i lavabo", [["cama", "habitació", A], ["banera", "lavabo", W]]),
    },
    {
      html: `<h3>La cuina i el menjador</h3><p>A la <mark>cuina</mark> preparem el menjar.</p><p>Al <mark>menjador</mark> hi ha el sofà i la taula: hi mengem, juguem i mirem la tele.</p><p>La família s'hi reuneix.</p>`,
      svg: dibujos("Cuina i menjador", [["cocina", "cuina", R], ["sofa", "menjador", A]]),
    },
    {
      html: `<h3>On és el gat?</h3><p>Per preguntar on és una cosa diem <mark>On és…?</mark></p><p>«On és el gat?» — «<b>A la cuina!</b>»</p><p>Busca'l al dibuix!</p><p>Hi ha el llit, la banyera, el sofà i els fogons.</p>`,
      svg: svg("Casa amb quatre parts i un gat a la cuina", casaCorte(`${ic("gato", 208, 150, 0.6)}${rot(130, 14, "On és el gat?", { color: K, size: 13 })}`)),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Serveix per <mark>explicar com és casa teva</mark> i jugar en català.</p><p>«La meva habitació és blava». «Jugo al menjador». Ensenya casa teva!</p><p>Pots fer-ho a tota la família.</p>`,
      svg: charla("Diàleg: Aquesta és la meva habitació! Que bonica!", [["nino", "Aquesta és la meva habitació!", A], ["nina", "Que bonica! És blava!", R]]),
    },
    {
      html: `<h3>Joc: on s'ha amagat?</h3><p>Amaguem un ninot per casa.</p><p>Preguntem <mark>On és l'ós?</mark> i el busquem.</p><p>Quan el trobem, diem on era: <b>Al lavabo!</b></p><p>Després l'amaga una altra persona!</p>`,
      svg: svg("Un osset amagat al lavabo de la casa", casaCorte(`${ic("oso", 196, 104, 0.55)}${rot(130, 14, "On és l'ós?", { color: K, size: 13 })}`)),
    },
  ],
  figura: {
    titulo: "Les parts de la casa",
    svg: mural("Habitació, lavabo, cuina i menjador", [["cama", "habitació", "hi dormim", A], ["banera", "lavabo", "ens rentem", W], ["cocina", "cuina", "cuinem", R], ["sofa", "menjador", "mengem i juguem", V]], "La meva casa"),
  },
  video: { ...vid("68UBWtLXmqM", "Aprèn les habitacions de la casa", "Smile and Learn - Català", 26083), busqueda: "la casa en català per a nens parts de la casa" },
  ejemplos: [
    { enunciado: "On ens rentem les dents?", pasos: ["Ens rentem les dents on hi ha la pica i la banyera.", "Aquest lloc es diu lavabo."], resultado: "Al lavabo." },
    { enunciado: "On és el sofà?", pasos: ["El sofà és on mirem la tele.", "Aquest lloc és el menjador."], resultado: "Al menjador." },
  ],
  errores: [
    "Dir «cocina» en català: es diu cuina.",
    "Confondre habitació (on dormim) i lavabo (on ens rentem).",
    "Dir «ventana»: en català és finestra.",
  ],
  ejercicios: [
    { q: "Passeja per casa i digues el nom de cada part en català.", sol: "Nota per a la família: habitació, lavabo, cuina, menjador." },
    { q: "Compta les finestres de casa.", sol: "Resposta segons la casa. Compteu en català." },
    { q: "Juga a amagar un ninot i pregunta On és?", sol: "A la cuina, al lavabo…" },
    { q: "Dibuixa la teva habitació.", sol: "Resposta lliure: que digui La meva habitació." },
    { q: "Toca la porta i la finestra.", sol: "Nota: digueu la paraula i que la toqui." },
    { q: "Enganxa dibuixos d'objectes a la part correcta de la casa.", sol: "Llit a l'habitació, banyera al lavabo, sofà al menjador, fogons a la cuina." },
  ],
  quiz: [
    { q: "Cocina en català és…", o: ["cuina", "lavabo", "porta"], a: 0, e: "Cuina." },
    { q: "Dormim a…", o: ["l'habitació", "la cuina", "el lavabo"], a: 0, e: "A l'habitació hi ha el llit." },
    { q: "Ventana en català és…", o: ["porta", "finestra", "taula"], a: 1, e: "Finestra." },
    { q: "Ens rentem les dents al…", o: ["lavabo", "menjador", "jardí"], a: 0, e: "Al lavabo." },
    { q: "On és…? pregunta…", o: ["el lloc", "el nom", "el color"], a: 0, e: "On és = dónde está." },
    { q: "El sofà és al…", o: ["menjador", "lavabo", "llit"], a: 0, e: "Al menjador." },
  ],
  examen: [
    { q: "Puerta en català és…", o: ["porta", "finestra", "sostre"], a: 0, e: "Porta." },
    { q: "Cuinem a la…", o: ["cuina", "habitació", "finestra"], a: 0, e: "Cuina." },
    { q: "Lavabo és on…", o: ["ens rentem", "dormim", "cuinem"], a: 0, e: "Ens rentem." },
  ],
  feynman: ["Com es diu casa, porta i finestra", "Les quatre parts de la casa en català", "Com pregunto On és…?"],
  mapa: mapa("LA MEVA CASA", "var(--pri)", [
    ["Casa", "porta · finestra", R],
    ["Dormir i rentar-se", "habitació · lavabo", A],
    ["Cuinar i jugar", "cuina · menjador", V],
    ["On és…?", "A la cuina!", N],
  ], 230),
  tarjetas: [
    ["Ventana", "Finestra"],
    ["Dormitorio", "Habitació"],
    ["Baño", "Lavabo"],
    ["Cocina", "Cuina"],
    ["Comedor / salón", "Menjador"],
    ["On és el gat?", "A la cuina!"],
  ],
  familias: [
    "Enganxeu cartells en català a les portes de cada part de la casa.",
    "Jugueu a amagar una joguina i pregunteu On és?",
    "Quan aneu a un lloc de casa, digueu-ho en català: Anem a la cuina!",
    "Dibuixeu junts un plànol de casa vostra amb els noms en català.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: vocabulari de la casa i les seves parts, la pregunta On és…? en situacions de joc", ["Casa de nines per anomenar les parts.", "Joc d'amagar amb On és…? a la classe.", "Cançó de les parts de la casa."]),
});
