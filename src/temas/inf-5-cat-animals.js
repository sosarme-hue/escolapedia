// Infantil 5 anys · Primeros pasos en catalán: els animals i els seus sons. Tema escrit en català.
const { tema, mapa, svg, rot, big, ic, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

const fa = (a, x, y, son, c) => `${ic(a, x, y, 1.3)}<rect x="${x - 40}" y="${y - 66}" width="80" height="28" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${rot(x, y - 46, son, { color: c, size: 16 })}`;

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "Els animals i els seus sons",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Dir el nom d'animals de casa i de granja en català", "Imitar els seus sons", "Dir El gos fa bub-bub"],
  claves: ["gos", "gat", "vaca", "ànec", "porc", "ovella", "cavall", "lleó", "fa"],
  pregunta: {
    texto: "Com fa el gos? I sabies que en català els animals tenen noms propis?",
    respuesta: "El perro en català és el <mark>gos</mark> i fa <b>bub-bub!</b> El gato és el <mark>gat</mark> i fa <b>mèu!</b>",
  },
  bloques: [
    {
      html: `<h3>El gos i el gat</h3><p>El <mark>gos</mark> fa <b>bub-bub!</b></p><p>El <mark>gat</mark> fa <b>mèu!</b></p><p>Són animals que viuen a casa amb nosaltres.</p><p>El gos és un gran amic i el gat és molt juganer. Tens algun animal a casa? Com es diu?</p>`,
      svg: svg("El gos fa bub-bub i el gat fa mèu", `${fa("perro", 75, 120, "bub-bub!", N)}${fa("gato", 185, 120, "mèu!", A)}${rot(75, 166, "gos", { color: N, size: 20 })}${rot(185, 166, "gat", { color: A, size: 20 })}`),
    },
    {
      html: `<h3>A la granja</h3><p>La <mark>vaca</mark> fa <b>mu!</b></p><p>El <mark>porc</mark> fa <b>oinc-oinc!</b></p><p>L'<mark>ànec</mark> fa <b>quac-quac!</b></p><p>A la granja viuen molts animals. El pagès els cuida cada dia i els dona menjar. Imita'ls tots!</p>`,
      svg: svg("La vaca fa mu, el porc fa oinc i l'ànec fa quac", `${fa("vaca", 48, 120, "mu!", A)}${fa("cerdo", 130, 120, "oinc!", R)}${fa("pato", 212, 120, "quac!", M)}${rot(48, 166, "vaca", { color: A, size: 18 })}${rot(130, 166, "porc", { color: R, size: 18 })}${rot(212, 166, "ànec", { color: M, size: 18 })}`),
    },
    {
      html: `<h3>L'ovella i el cavall</h3><p>L'<mark>ovella</mark> fa <b>bee!</b></p><p>El <mark>cavall</mark> fa <b>iiii!</b>, és a dir, renilla.</p><p>Galopa per la classe com un cavall!</p><p>L'ovella ens dona la llana per fer jerseis.</p>`,
      svg: svg("L'ovella fa bee i el cavall fa iiii", `${fa("oveja", 75, 120, "bee!", V)}${fa("caballo", 185, 120, "iiii!", N)}${rot(75, 166, "ovella", { color: V, size: 20 })}${rot(185, 166, "cavall", { color: N, size: 20 })}`),
    },
    {
      html: `<h3>Com fa el lleó?</h3><p>Per dir el so fem servir <mark>fa</mark>.</p><p><b>La vaca fa mu.</b> <b>El lleó fa grrr!</b>, és a dir, rugeix.</p><p>Pregunta: «Com fa el…?»</p><p>Prova-ho amb altres animals.</p>`,
      svg: charla("Diàleg: Com fa el lleó? El lleó fa GRRR!", [["nina", "Com fa el lleó?", A], ["leon", "El lleó fa GRRR!", R]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb els animals cantem <mark>cançons</mark> i entenem els contes en català.</p><p>I quan anem a una granja escola, sabem dir el nom de cada animal!</p><p>Quin és el teu preferit?</p>`,
      svg: dibujos("Animals de la granja: vaca, porc, ànec i ovella", [["vaca", "vaca", A], ["cerdo", "porc", R], ["pato", "ànec", M], ["oveja", "ovella", V]], { titulo: "A la granja hi ha…" }),
    },
    {
      html: `<h3>Joc: endevina l'animal</h3><p>Algú fa un so: <mark>quac-quac!</mark></p><p>Els altres endevinen: <b>És l'ànec!</b></p><p>Després canviem!</p><p>Pots fer el so fluix o fort. Qui endevina més animals guanya un aplaudiment!</p>`,
      svg: svg("Un nen fa quac-quac i una nena endevina: és l'ànec", `${nino(60, 156, { c: A, pose: "palmas" })}${rot(60, 40, "Quac-quac!", { color: A, size: 16 })}${nino(200, 156, { c: R, pose: "arriba", nina: true })}${rot(200, 40, "És l'ànec!", { color: R, size: 16 })}${ic("pato", 130, 110, 1.3)}`),
    },
  ],
  figura: {
    titulo: "Els animals i els seus sons",
    svg: mural("Vuit animals i el seu so en català", [["perro", "gos", "bub-bub!", N], ["gato", "gat", "mèu!", A], ["vaca", "vaca", "mu!", A], ["cerdo", "porc", "oinc-oinc!", R], ["pato", "ànec", "quac-quac!", M], ["oveja", "ovella", "bee!", V], ["caballo", "cavall", "iiii!", N], ["leon", "lleó", "grrr!", R]], "Com fa l'animal?"),
  },
  video: { ...vid("1GFMJUHO0ek", "Els sons dels animals per a nens en català", "Smile and Learn - Català", 36697), busqueda: "els animals i els seus sons en català nens" },
  ejemplos: [
    { enunciado: "Com fa el gos?", pasos: ["El perro en català és el gos.", "El gos borda: bub-bub."], resultado: "El gos fa bub-bub!" },
    { enunciado: "Sentim «bee». Quin animal és?", pasos: ["Bee és el so de l'ovella.", "Diem: és l'ovella."], resultado: "És l'ovella!" },
  ],
  errores: [
    "Dir «perro» en català: es diu gos.",
    "Dir «pato»: en català és ànec.",
    "Confondre porc (cerdo) i gos (perro).",
  ],
  ejercicios: [
    { q: "Imita cinc animals en català.", sol: "Bub-bub, mèu, mu, oinc-oinc, quac-quac. Nota per a la família: endevineu quin és." },
    { q: "Uneix cada animal amb el seu so: vaca, ànec, ovella.", sol: "Vaca-mu, ànec-quac, ovella-bee." },
    { q: "Mou-te com un cavall i com un ànec.", sol: "Galopar i caminar com un ànec." },
    { q: "Dibuixa el teu animal preferit i digues el seu nom en català.", sol: "Resposta lliure." },
    { q: "Mira el vídeo i repeteix cada so.", sol: "Nota: atureu el vídeo per repetir." },
    { q: "Llegiu un conte d'animals i feu els sons.", sol: "Nota: deixeu que ell o ella faci els sons." },
  ],
  quiz: [
    { q: "Perro en català és…", o: ["gos", "gat", "porc"], a: 0, e: "Gos." },
    { q: "Com fa el gat?", o: ["bub-bub", "mèu", "mu"], a: 1, e: "El gat fa mèu." },
    { q: "La vaca fa…", o: ["mu", "bee", "quac"], a: 0, e: "Mu!" },
    { q: "Quac-quac és l'…", o: ["ànec", "ovella", "lleó"], a: 0, e: "L'ànec." },
    { q: "Oveja en català és…", o: ["ovella", "vaca", "cavall"], a: 0, e: "Ovella: bee." },
    { q: "El lleó fa…", o: ["grrr!", "oinc!", "bee!"], a: 0, e: "Rugeix." },
  ],
  examen: [
    { q: "Cerdo en català és…", o: ["porc", "gos", "pollet"], a: 0, e: "Porc: oinc-oinc." },
    { q: "Caballo en català és…", o: ["cavall", "camell", "conill"], a: 0, e: "Cavall." },
    { q: "El gos fa…", o: ["bub-bub", "mèu", "mu"], a: 0, e: "Bub-bub!" },
  ],
  feynman: ["El nom de sis animals en català", "Els seus sons", "Com dic La vaca fa mu"],
  mapa: mapa("ELS ANIMALS", "var(--pri)", [
    ["A casa", "gos bub-bub · gat mèu", N],
    ["A la granja", "vaca mu · porc oinc · ànec quac", A],
    ["Més", "ovella bee · cavall iiii", V],
    ["Fa…", "El lleó fa grrr!", R],
  ], 250),
  tarjetas: [
    ["Perro", "Gos: bub-bub!"],
    ["Gato", "Gat: mèu!"],
    ["Vaca", "Vaca: mu!"],
    ["Pato", "Ànec: quac-quac!"],
    ["Cerdo", "Porc: oinc-oinc!"],
    ["Oveja", "Ovella: bee!"],
  ],
  familias: [
    "Jugueu a endevinar animals pel so en català.",
    "Canteu cançons d'animals en català al cotxe o al bany.",
    "A la granja escola o al camp, digueu els animals en català.",
    "Llegiu un conte d'animals i feu els sons en català.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: vocabulari d'animals, onomatopeies i l'estructura L'animal fa…", ["Cançons tradicionals d'animals.", "Joc d'endevinar l'animal pel so.", "Titelles d'animals per dramatitzar diàlegs."]),
});
