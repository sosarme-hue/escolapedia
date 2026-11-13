// Primeros pasos en catalán, Infantil 4 años: Les joguines. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, dibujos, charla, mural, ic, vid, R, A, V, N, M, G, MARRON, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "Les joguines",
  minutos: 15,
  objetivos: ["Dir joguines en català: pilota, cotxe, nina, osset", "Preguntar i respondre: Què és? És una pilota", "Compartir i recollir les joguines"],
  claves: ["joguina", "pilota", "globus", "cotxe", "tren", "nina", "osset"],
  pregunta: {
    texto: "Quina és la teva joguina preferida?",
    respuesta: "Potser és la <mark>pilota</mark>, el <mark>cotxe</mark> o l'<mark>osset</mark> de peluix. En català, «juguete» es diu <b>joguina</b>!",
  },
  bloques: [
    {
      html: `<h3>La pilota i el globus</h3><p>La <mark>pilota</mark> és rodona i bota. Hi juguem a futbol o a passar-nos-la.</p><p>El <mark>globus</mark> s'infla d'aire i vola. Compte, que se t'escapa cap al cel!</p>`,
      svg: dibujos("La pilota i el globus", [["pelota", "pilota", R], ["globo", "globus", A]], { titulo: "Les joguines" }),
    },
    {
      html: `<h3>El cotxe i el tren</h3><p>El <mark>cotxe</mark> de joguina corre per terra: brum, brum!</p><p>El <mark>tren</mark> té vagons i fa: xu, xu!</p><p>Fes un tren amb els teus amics, posats en fila. Qui és la locomotora?</p>`,
      svg: dibujos("El cotxe i el tren", [["coche", "cotxe", R], ["tren", "tren", V]], { titulo: "Joguines que corren" }),
    },
    {
      html: `<h3>La nina i l'osset</h3><p>La <mark>nina</mark> és una joguina que sembla una persona petita.</p><p>L'<mark>osset</mark> de peluix és tou i suau.</p><p>Els abracem, els donem menjar de mentida i els portem a dormir.</p>`,
      svg: dibujos("La nina i l'osset de peluix", [["nina", "nina", N], ["oso", "osset", M]], { titulo: "Joguines per abraçar" }),
    },
    {
      html: `<h3>Què és?</h3><p>Per saber què és una cosa preguntem: <mark>Què és?</mark></p><p>I responem: <b>És una pilota</b>, <b>és un cotxe</b>.</p><p>Fixa't: diem <b>una</b> pilota i <b>un</b> cotxe. Així podem endevinar joguines amagades!</p>`,
      svg: charla("Una nena pregunta Què és i el nen respon És una pilota", [["nina", "Què és?", R], ["nino", "És una pilota!", A]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb aquestes paraules podem <mark>jugar en català</mark> amb altres nens.</p><p>Per compartir diem <b>Té!</b> o <b>Juguem junts?</b></p><p>I quan acabem, tots a una: <b>A recollir!</b></p>`,
      svg: svg("Una capsa de joguines amb una pilota, un cotxe i un osset: a recollir", `<path d="M60 90 H200 L190 150 H70z" fill="${MARRON}"/><rect x="54" y="82" width="152" height="14" rx="4" fill="#a8713f"/>${ic("pelota", 95, 70, 0.9)}${ic("coche", 135, 72, 0.9)}${ic("oso", 175, 68, 0.9)}${rot(130, 30, "A recollir!", { size: 22, color: V, w: 800 })}${rot(130, 172, "Guardem les joguines", { color: G })}`),
    },
    {
      html: `<h3>Juguem: la capsa misteriosa</h3><p>Amaguem una <mark>joguina</mark> dins d'una capsa.</p><p>Hi fiques la mà sense mirar i la toques. Què és? <b>És un cotxe!</b></p><p>Si l'encertes, hi pots jugar una estona.</p>`,
      svg: svg("Un nen fica la mà en una capsa misteriosa amb un interrogant", `<rect x="110" y="80" width="110" height="70" rx="6" fill="var(--inf)"/><rect x="104" y="72" width="122" height="14" rx="4" fill="var(--pen)"/>${ic("interrogacion", 165, 118, 1.2)}${nino(70, 150, { c: R, pose: "brazos", s: 1.1 })}${suelo(150)}${rot(130, 30, "Què és?", { size: 18, color: N, w: 800 })}${rot(130, 172, "És un cotxe!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Les joguines",
    svg: mural("Sis targetes de joguines en català: pilota, globus, cotxe, tren, nina i osset", [["pelota", "pilota", "rodona i bota", R], ["globo", "globus", "vola", A], ["coche", "cotxe", "brum, brum", R], ["tren", "tren", "xu, xu", V], ["nina", "nina", "per abraçar", N], ["oso", "osset", "de peluix", M]], "Les joguines en català"),
  },
  video: { ...vid("Cs-stT-6B-0", "Les joguines (videoclip oficial)", "El Pot Petit", 3920087), busqueda: "joguines cançó infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Què és? (assenyalem un tren)", pasos: ["Mirem la joguina: té vagons.", "Fa xu, xu.", "Responem amb És un…"], resultado: "És un tren!" },
    { enunciado: "Passa la pilota a un amic en català.", pasos: ["Li donem la pilota.", "Diem «Té!»."], resultado: "Té! – Gràcies!" },
  ],
  errores: [
    "Dir «juguete» en lloc de joguina.",
    "Dir «pelota» en lloc de pilota.",
    "Barrejar un i una: un cotxe, una pilota.",
  ],
  ejercicios: [
    { q: "Digues en català tres joguines de la teva habitació.", sol: "Per a la família: pilota, cotxe, nina, osset, tren…" },
    { q: "Juga a la capsa misteriosa: toca i endevina.", sol: "Per a la família: «Què és?» – «És un…!»." },
    { q: "Recull les joguines cantant A recollir!", sol: "Per a la família: convertiu la recollida en un joc." },
    { q: "Dibuixa la teva joguina preferida i digues com es diu.", sol: "Resposta lliure." },
    { q: "Comparteix una joguina dient Té!", sol: "I l'altre respon Gràcies!" },
    { q: "Fes un tren amb la família: xu, xu!", sol: "Per a la família: el primer diu «Som-hi!»." },
  ],
  quiz: [
    { q: "Com es diu «pelota»?", o: ["Pilota", "Pinta", "Pera"], a: 0, e: "La pilota." },
    { q: "El tren fa…", o: ["Xu, xu", "Miau", "Brum"], a: 0, e: "Xu, xu!" },
    { q: "L'osset és…", o: ["Un peluix", "Un cotxe", "Un globus"], a: 0, e: "L'osset de peluix." },
    { q: "«Juguete» en català és…", o: ["Joguina", "Jaqueta", "Joc de cartes"], a: 0, e: "Joguina." },
    { q: "Què és? vol dir…", o: ["¿Qué es?", "¿Cuántos?", "¿Cómo te llamas?"], a: 0, e: "Preguntem què és." },
    { q: "A recollir! vol dir…", o: ["¡A recoger!", "¡A comer!", "¡A dormir!"], a: 0, e: "Guardem les joguines." },
  ],
  examen: [
    { q: "El cotxe fa…", o: ["Brum, brum", "Xu, xu", "Bup, bup"], a: 0, e: "Brum, brum!" },
    { q: "Com es diu «muñeca»?", o: ["Nina", "Nena", "Mà"], a: 0, e: "La nina." },
    { q: "El globus…", o: ["Vola", "Bota a terra", "Fa xu, xu"], a: 0, e: "S'infla d'aire i vola." },
  ],
  feynman: ["Digues cinc joguines en català", "Pregunta Què és? i respon És un… / És una…"],
  mapa: mapa("LES JOGUINES", "var(--inf)", [
    ["pilota · globus", "bota · vola", R],
    ["cotxe · tren", "brum · xu, xu", A],
    ["nina · osset", "per abraçar", V],
    ["Què és?", "És un… / És una…", N],
  ], 220),
  tarjetas: [
    ["Com es diu «pelota»?", "Pilota"],
    ["Com es diu «globo»?", "Globus"],
    ["Com es diu «coche»?", "Cotxe"],
    ["Com es diu «muñeca»?", "Nina"],
    ["Com es diu «osito»?", "Osset"],
    ["Com es diu «juguete»?", "Joguina"],
  ],
  familias: [
    "Mentre jugueu, digueu de tant en tant el nom de les joguines en català.",
    "Feu servir «A recollir!» com a senyal: amb una cançó és més fàcil.",
    "Jugueu a la capsa misteriosa amb joguines de casa.",
    "Practiqueu Té! i Gràcies! quan compartiu.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, vocabulari de joguines, estructures Què és? / És un…, rutines de l'aula i convivència en el joc (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["Bossa misteriosa de joguines.", "Cançó de recollir com a rutina.", "Racó de joc amb etiquetes en català."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
