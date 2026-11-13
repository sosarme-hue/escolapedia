// Infantil 3 anys · Primeros pasos en catalán: Els animals. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, suenan, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "Els animals",
  minutos: 10,
  objetivos: ["Dir sis animals: gos, gat, vaca, porc, ànec i peix", "Imitar els sons dels animals", "Respondre: quin animal és?"],
  claves: ["animals", "gos", "gat", "vaca", "porc", "ànec", "peix", "granja"],
  pregunta: {
    texto: "Quin animal t'agrada més?",
    respuesta: "N'hi ha molts! El <mark>gos</mark>, el <mark>gat</mark>, la <mark>vaca</mark>… Anem a conèixer-los en català.",
  },
  bloques: [
    {
      html: `<h3>El gos i el gat</h3><p>Aquest és el <mark>gos</mark>. Aquest és el <mark>gat</mark>.</p><p>Viuen a casa amb nosaltres. El gos mou la cua i el gat fa una migdiada.</p><p>Bub bub, diu el gos. Mèu, diu el gat.</p>`,
      svg: dibujos("El gos i el gat", [["perro", "gos", A], ["gato", "gat", N]]),
    },
    {
      html: `<h3>A la granja</h3><p>A la <mark>granja</mark> hi ha la vaca, el porc i l'ànec.</p><p>La vaca ens dona llet. L'ànec neda a la bassa. El porc juga amb el fang!</p>`,
      svg: dibujos("A la granja: vaca, porc i ànec", [["vaca", "vaca", A], ["cerdo", "porc", R], ["pato", "ànec", N]], { titulo: "A la granja" }),
    },
    {
      html: `<h3>A l'aigua</h3><p>El <mark>peix</mark> viu a l'aigua. Neda, neda, neda!</p><p>Movem la mà com un peix que neda. La granota també salta a l'aigua: xof!</p><p>Neda com un peix movent els braços!</p>`,
      svg: escena("Un peix neda a l'aigua", [["svg", `<path d="M0 120 q 32 -14 65 0 t 65 0 t 65 0 t 65 0 V180 H0z" fill="var(--water)" opacity=".35"/>`], ["pez", 90, 80, 2.2], ["rana", 200, 96, 1.2], ["t", 130, 164, "el peix", A, 26]]),
    },
    {
      html: `<h3>Com fan?</h3><p>El gos fa <mark>bub bub</mark>. La vaca fa <mark>muu</mark>.</p><p>El gat fa mèu. L'ànec fa cuac. Fem tots els sons junts!</p><p>El porc fa oinc, oinc! Fes-ho tu ara!</p>`,
      svg: suenan("Sons: el gos bub bub, la vaca muu, l'ànec cuac", [["perro", "bub bub", A], ["vaca", "muu", R], ["pato", "cuac", V]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Els animals surten a molts <mark>contes i cançons</mark>.</p><p>Si sabem com es diuen, entendrem millor les històries. I els cuidarem molt!</p><p>Quin és el teu animal preferit? Per què t'agrada?</p>`,
      svg: dibujos("Els animals surten als contes i a les cançons", [["libro", "contes", A], ["guitarra", "cançons", R], ["corazon", "cuidar", V]]),
    },
    {
      html: `<h3>Juguem!</h3><p>L'adult fa un so: <mark>Muu!</mark> Quin animal és?</p><p>És la vaca! Ara fes tu un so i l'adult endevina l'animal.</p><p>Ara fa cuac: quin animal és? L'ànec!</p>`,
      svg: charla("Joc: Muu! Quin animal és? És la vaca!", [["mama", "Muu! Quin animal és?", R], ["nino", "És la vaca!", A]]),
    },
  ],
  figura: {
    titulo: "Els animals",
    svg: mural("Els animals: gos, gat, vaca, porc, ànec i peix", [["perro", "gos", "bub bub", A], ["gato", "gat", "mèu", N], ["vaca", "vaca", "muu", V], ["cerdo", "porc", "oinc", R], ["pato", "ànec", "cuac", N], ["pez", "peix", "neda", A]], "Els animals"),
  },
  video: { ...vid("oCMLc-YkMI8", "PAÍS DE XAUXA. LA GRANJA D'EN JEPET (Original)", "PAÍS DE XAUXA", 503981), busqueda: "cançó animals català infantil" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Fa mèu. Quin animal és?",
      pasos: ["Escoltem el so.", "Pensem: qui fa mèu?"],
      resultado: "«És el gat!»" },
    { enunciado: "On viu el peix?",
      pasos: ["Mirem el dibuix.", "El peix neda."],
      resultado: "«A l'aigua!»" },
  ],
  errores: [
    "Dir «perro» en català: diem gos.",
    "Dir «cerdo»: en català és porc.",
    "Pensar que el gos fa guau en català: fa bub bub.",
  ],
  ejercicios: [
    { q: "Digues gos i gat.", sol: "Per a la família: assenyaleu dibuixos o peluixos." },
    { q: "Fes el so de la vaca.", sol: "Muu! I la resta: bub bub, mèu, cuac." },
    { q: "Camina com un ànec.", sol: "Cuac, cuac mentre camina." },
    { q: "Neda com un peix.", sol: "La mà fa ones: peix, peix!" },
    { q: "Juga a quin animal és?", sol: "Feu un so i que endevini l'animal en català." },
    { q: "Dibuixa el teu animal preferit.", sol: "Pregunteu: quin animal és? i que respongui en català." },
  ],
  quiz: [
    { q: "«Gos» en castellà és…", o: ["perro", "gato", "pato"], a: 0, e: "Gos = perro." },
    { q: "«Gat» és…", o: ["gato", "vaca", "pez"], a: 0, e: "Gat = gato." },
    { q: "«Porc» és…", o: ["cerdo", "perro", "pato"], a: 0, e: "Porc = cerdo." },
    { q: "«Ànec» és…", o: ["pato", "pez", "pollo"], a: 0, e: "Ànec = pato." },
    { q: "La vaca fa…", o: ["muu", "bub bub", "cuac"], a: 0, e: "Muu!" },
    { q: "El peix viu…", o: ["a l'aigua", "a l'arbre", "al llit"], a: 0, e: "A l'aigua." },
  ],
  examen: [
    { q: "El gos fa…", o: ["bub bub", "mèu", "muu"], a: 0, e: "Bub bub." },
    { q: "«Peix» és…", o: ["pez", "pato", "perro"], a: 0, e: "Peix = pez." },
    { q: "La vaca viu a…", o: ["la granja", "el mar", "el cel"], a: 0, e: "A la granja." },
  ],
  feynman: ["Gos, gat, vaca, porc, ànec i peix", "Bub bub, mèu, muu, cuac", "Quin animal és?"],
  mapa: mapa("ANIMALS", "var(--inf)", [
    ["A casa", "gos, gat", A],
    ["A la granja", "vaca, porc, ànec", R],
    ["A l'aigua", "peix", V],
    ["Sons", "bub bub, muu", N],
  ], 230),
  tarjetas: [
    ["perro", "gos"],
    ["gato", "gat"],
    ["vaca", "vaca"],
    ["cerdo", "porc"],
    ["pato", "ànec"],
    ["pez", "peix"],
  ],
  familias: [
    "Anomeneu en català els animals que veieu al carrer o als contes.",
    "Feu els sons dels animals en català i en castellà.",
    "Jugueu a quin animal és? amb peluixos dins una bossa.",
    "Canteu junts la cançó del vídeo.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: vocabulari d'animals propers i les seves onomatopeies", ["Bossa misteriosa amb animals de joguina.", "Imitar animals en sentir el nom.", "Cançó de la granja."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
