// Infantil 3 anys · Primeros pasos en catalán: Els colors. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, muestras, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "Els colors",
  minutos: 10,
  objetivos: ["Dir quatre colors: vermell, groc, blau i verd", "Assenyalar un color quan el sentim", "Respondre: de quin color és?"],
  claves: ["vermell", "groc", "blau", "verd", "colors", "arc de Sant Martí"],
  pregunta: {
    texto: "De quin color és el sol? I la gespa?",
    respuesta: "El sol és <mark>groc</mark> i la gespa és <mark>verda</mark>. Tot el que veiem té colors!",
  },
  bloques: [
    {
      html: `<h3>Vermell</h3><p>La poma és <mark>vermella</mark>. El cor és vermell.</p><p>Vermell com una maduixa! Busca alguna cosa vermella a casa. Què has trobat?</p><p>Vermell, vermell! Assenyala alguna cosa vermella.</p>`,
      svg: dibujos("Vermell: la poma i el cor", [["manzana", "poma", R], ["corazon", "cor", R]], { titulo: "Vermell" }),
    },
    {
      html: `<h3>Groc</h3><p>El sol és <mark>groc</mark>. L'ànec és groc.</p><p>Groc com un plàtan! Quan fa sol, tot brilla de color groc. Quines coses grogues coneixes?</p><p>Groc, groc! Busca alguna cosa groga a la sala.</p>`,
      svg: dibujos("Groc: el sol i l'ànec", [["sol", "sol", S], ["pato", "ànec", S]], { titulo: "Groc" }),
    },
    {
      html: `<h3>Blau i verd</h3><p>El peix és <mark>blau</mark>, com el mar. La granota és <mark>verda</mark>, com la gespa.</p><p>Blau i verd, que bonics! Busca'ls al parc.</p><p>On és el blau? On és el verd? Assenyala'ls!</p>`,
      svg: dibujos("Blau el peix i verd la granota", [["pez", "blau", A], ["rana", "verd", V]]),
    },
    {
      html: `<h3>L'arc de Sant Martí</h3><p>Quan plou i fa sol surt l'<mark>arc de Sant Martí</mark>.</p><p>Té molts colors: vermell, groc, verd, blau… Has vist mai un arc de Sant Martí al cel?</p>`,
      svg: escena("Un arc de Sant Martí gran al cel", [["arcoiris", 130, 92, 4.2], ["t", 130, 160, "arc de Sant Martí", A, 22]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb els colors podem <mark>demanar coses</mark>.</p><p>Vull la poma vermella, si us plau! Vull la pilota blava! Així tothom sap què volem.</p><p>Vull la pilota verda, si us plau! Gràcies!</p>`,
      svg: dibujos("Demanem coses pel color: la poma vermella, el plàtan groc", [["manzana", "vermella", R], ["platano", "groc", S]], { titulo: "Vull…" }),
    },
    {
      html: `<h3>Juguem!</h3><p>L'adult diu: <mark>Toca una cosa verda!</mark></p><p>Corre i toca-la! Ara: toca una cosa vermella! Qui la troba primer?</p><p>Ara toca una cosa groga! I una de blava! Molt bé!</p>`,
      svg: muestras("Joc: toca una cosa vermella, groga, blava o verda", [["", "vermell", "", R], ["", "groc", "", S], ["", "blau", "", A], ["", "verd", "", V]], { titulo: "Toca una cosa…" }),
    },
  ],
  figura: {
    titulo: "Els colors",
    svg: mural("Els colors: vermell, groc, blau i verd", [["manzana", "vermell", "la poma", R], ["sol", "groc", "el sol", S], ["pez", "blau", "el peix", A], ["rana", "verd", "la granota", V]], "Els colors"),
  },
  video: { ...vid("avpkt-PKu7Q", "El Pot Petit - Colors de l'arc de Sant Martí (Videoclip oficial)", "El Pot Petit", 7457926), busqueda: "cançó dels colors en català infantil" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "De quin color és la granota?",
      pasos: ["Mirem la granota.", "És del color de la gespa.", "Diem el color."],
      resultado: "«Verda!»" },
    { enunciado: "Toca una cosa groga!",
      pasos: ["Mirem al voltant.", "Trobem un plàtan.", "El toquem!"],
      resultado: "«Groc!»" },
  ],
  errores: [
    "Dir «rojo» en català: diem vermell.",
    "Dir «amarillo»: en català és groc.",
    "Confondre blau i verd: blau com el mar, verd com la gespa.",
  ],
  ejercicios: [
    { q: "Assenyala una cosa vermella.", sol: "Per a la família: dieu vermell junts en assenyalar-la." },
    { q: "Troba tres coses grogues.", sol: "Un plàtan, una llimona, una pilota…" },
    { q: "Pinta un peix blau.", sol: "Dibuixeu un peix i que el pinti dient blau." },
    { q: "Juga a toca una cosa verda.", sol: "Correu per casa a tocar coses verdes." },
    { q: "Classifica les ceres per colors.", sol: "Vermell, groc, blau i verd, en quatre munts." },
    { q: "Canta la cançó dels colors.", sol: "Canteu el vídeo assenyalant cada color." },
  ],
  quiz: [
    { q: "El sol és…", o: ["groc", "blau", "verd"], a: 0, e: "Groc." },
    { q: "La poma és…", o: ["vermella", "blava", "groga"], a: 0, e: "Vermella." },
    { q: "El mar és…", o: ["blau", "vermell", "groc"], a: 0, e: "Blau." },
    { q: "La granota és…", o: ["verda", "vermella", "groga"], a: 0, e: "Verda." },
    { q: "«Groc» en castellà és…", o: ["amarillo", "rojo", "verde"], a: 0, e: "Groc = amarillo." },
    { q: "Té molts colors…", o: ["l'arc de Sant Martí", "la nit", "la pedra"], a: 0, e: "L'arc de Sant Martí." },
  ],
  examen: [
    { q: "«Vermell» en castellà és…", o: ["rojo", "azul", "verde"], a: 0, e: "Vermell = rojo." },
    { q: "La gespa és…", o: ["verda", "blava", "vermella"], a: 0, e: "Verda." },
    { q: "L'ànec és…", o: ["groc", "blau", "verd"], a: 0, e: "Groc." },
  ],
  feynman: ["Vermell, groc, blau i verd", "De quin color és?", "L'arc de Sant Martí té molts colors"],
  mapa: mapa("ELS COLORS", "var(--inf)", [
    ["Vermell", "la poma", R],
    ["Groc", "el sol", S],
    ["Blau", "el mar", A],
    ["Verd", "la granota", V],
  ], 220),
  tarjetas: [
    ["rojo", "vermell"],
    ["amarillo", "groc"],
    ["azul", "blau"],
    ["verde", "verd"],
    ["arcoíris", "arc de Sant Martí"],
    ["¿De qué color es?", "De quin color és?"],
  ],
  familias: [
    "En vestir-lo, digueu el color de la roba en català.",
    "Jugueu a toca una cosa blava per casa.",
    "Classifiqueu joguines per colors.",
    "Canteu junts la cançó del vídeo.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: vocabulari dels colors bàsics i resposta física a ordres senzilles", ["Joc toca una cosa + color.", "Classificar objectes en cèrcols de colors.", "Cançó de l'arc de Sant Martí."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
