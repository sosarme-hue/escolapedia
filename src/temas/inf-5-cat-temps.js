// Infantil 5 anys · Primeros pasos en catalán: el temps. Tema escrit en català.
const { tema, mapa, svg, rot, big, ic, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "El temps",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Preguntar Quin temps fa?", "Respondre Fa sol, plou, està ennuvolat, fa vent o neva", "Dir fa calor i fa fred i triar la roba"],
  claves: ["el temps", "fa sol", "plou", "ennuvolat", "fa vent", "neva", "fa calor", "fa fred"],
  pregunta: {
    texto: "Mira per la finestra. Fa sol o plou avui?",
    respuesta: "Per saber-ho preguntem <mark>Quin temps fa?</mark> Si brilla el sol, diem <b>Fa sol!</b> Si cau aigua, <b>Plou!</b>",
  },
  bloques: [
    {
      html: `<h3>Quin temps fa?</h3><p>Per saber el temps preguntem <mark>Quin temps fa?</mark></p><p>Mirem per la finestra i responem.</p><p>Cada dia pot fer un temps diferent!</p><p>Avui quin temps fa?</p>`,
      svg: charla("Diàleg: Quin temps fa? Fa sol!", [["nina", "Quin temps fa avui?", A], ["nino", "Fa sol!", M]]),
    },
    {
      html: `<h3>Fa sol, està ennuvolat</h3><p>Si brilla el sol: <mark>Fa sol</mark>.</p><p>Si hi ha molts núvols: <mark>Està ennuvolat</mark>.</p><p>El núvol és gris o blanc i tapa el sol.</p><p>Quan fa sol, sortim a jugar.</p>`,
      svg: dibujos("Fa sol i està ennuvolat", [["sol", "fa sol", M], ["nube", "ennuvolat", A]]),
    },
    {
      html: `<h3>Plou, fa vent, neva</h3><p>Si cau aigua: <mark>Plou</mark>.</p><p>Si bufa l'aire fort: <mark>Fa vent</mark>.</p><p>Si cau neu blanca: <mark>Neva</mark>. Fes el gest de cadascun!</p><p>Cada temps té el seu so.</p>`,
      svg: dibujos("Plou, fa vent i neva", [["lluvia", "plou", W], ["viento", "fa vent", V], ["nieve", "neva", A]]),
    },
    {
      html: `<h3>Fa calor, fa fred</h3><p>A l'estiu: <mark>Fa calor!</mark></p><p>A l'hivern: <mark>Fa fred!</mark></p><p>Quan fa fred, ens posem l'<b>abric</b> i el <b>barret</b>.</p><p>I a la primavera? Ni fred ni calor!</p>`,
      svg: svg("Un nen amb calor al sol i un altre amb fred i abric", `${ic("sol", 50, 44, 1.2)}${nino(70, 150, { c: R, pose: "brazos" })}${rot(70, 172, "fa calor", { color: R, size: 18 })}<path d="M130 20 V160" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>${ic("nieve", 220, 44, 1)}${ic("abrigo", 190, 118, 1.4)}<circle cx="190" cy="82" r="10" fill="#f3c9a1"/>${ic("gorro", 190, 74, 0.6)}${rot(190, 172, "fa fred", { color: A, size: 18 })}`),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saber el temps serveix per <mark>triar la roba</mark> i el que ens emportem.</p><p>Plou? Agafem el <b>paraigua</b>. Fa sol? Ulleres de sol i aigua!</p><p>Així no ens mullem.</p>`,
      svg: dibujos("Paraigua per a la pluja i ulleres per al sol", [["paraguas", "paraigua", R], ["gafas", "ulleres de sol", M]], { titulo: "Plou? Fa sol?" }),
    },
    {
      html: `<h3>Joc: l'home del temps</h3><p>Posa't davant d'un mapa dibuixat, com a la tele.</p><p>Assenyala i digues: <mark>Aquí fa sol! Aquí plou!</mark></p><p>Els altres fan el gest!</p><p>Canvieu els papers!</p>`,
      svg: svg("Mapa del temps amb sol, núvol i pluja i un nen que presenta", `<path d="M90 40 Q140 20 200 40 Q240 60 220 110 Q210 150 160 150 Q110 160 96 120 Q70 80 90 40z" fill="${V}" opacity=".35" stroke="${V}" stroke-width="2"/>${ic("sol", 130, 64, 0.9)}${ic("nube", 190, 70, 0.9)}${ic("lluvia", 160, 120, 0.9)}${nino(44, 158, { c: A, pose: "brazos" })}`),
    },
  ],
  figura: {
    titulo: "Quin temps fa?",
    svg: mural("Fa sol, ennuvolat, plou, fa vent i neva", [["sol", "fa sol", "", M], ["nube", "ennuvolat", "", A], ["lluvia", "plou", "", W], ["viento", "fa vent", "", V], ["nieve", "neva", "", N]], "El temps"),
  },
  video: { ...vid("F3lwqgizPpI", "Cançó: Quin temps fa?", "mel i sucre educació Infantil", 53062), busqueda: "el temps en català per a nens cançó" },
  ejemplos: [
    { enunciado: "Mirem per la finestra i cau aigua. Quin temps fa?", pasos: ["Cau aigua del cel: és pluja.", "Diem: plou."], resultado: "Plou!" },
    { enunciado: "Fa molt de fred. Què diem i què ens posem?", pasos: ["Diem: fa fred!", "Ens posem l'abric i el barret."], resultado: "Fa fred! Posa't l'abric!" },
  ],
  errores: [
    "Confondre fa calor i fa fred.",
    "Dir «llueve» en català: es diu plou.",
    "Pensar que ennuvolat vol dir que plou: només hi ha núvols.",
  ],
  ejercicios: [
    { q: "Cada matí mira per la finestra i digues quin temps fa.", sol: "Nota per a la família: responeu junts fa sol, plou, ennuvolat…" },
    { q: "Fes el gest de plou, fa vent i neva.", sol: "Dits que cauen, braços que es mouen, tremolar de fred." },
    { q: "Dibuixa el temps d'avui.", sol: "Resposta segons el dia." },
    { q: "Tria la roba: fa fred. Abric o samarreta de tirants?", sol: "L'abric." },
    { q: "Juga a l'home o la dona del temps.", sol: "Nota: dibuixeu un mapa amb sols i núvols retallats." },
    { q: "Canta la cançó Quin temps fa?", sol: "Nota: feu els gestos de cada temps." },
  ],
  quiz: [
    { q: "Fa sol vol dir…", o: ["hace sol", "llueve", "nieva"], a: 0, e: "Brilla el sol." },
    { q: "Plou vol dir…", o: ["hace viento", "llueve", "hace calor"], a: 1, e: "Cau aigua." },
    { q: "Si cau neu diem…", o: ["neva", "fa calor", "fa sol"], a: 0, e: "Neva." },
    { q: "A l'hivern…", o: ["fa fred", "fa calor", "sempre fa sol"], a: 0, e: "L'hivern és fred." },
    { q: "Quin temps fa? pregunta…", o: ["el temps", "el nom", "l'edat"], a: 0, e: "Per saber el temps." },
    { q: "Si plou agafem…", o: ["el paraigua", "les ulleres de sol", "el banyador"], a: 0, e: "El paraigua." },
  ],
  examen: [
    { q: "Fa vent vol dir…", o: ["hace viento", "está nublado", "nieva"], a: 0, e: "Bufa l'aire." },
    { q: "A l'estiu diem…", o: ["Fa calor!", "Neva!", "Fa fred!"], a: 0, e: "L'estiu és calorós." },
    { q: "Ennuvolat vol dir…", o: ["nublado", "soleado", "nevado"], a: 0, e: "Hi ha núvols." },
  ],
  feynman: ["Com pregunto quin temps fa", "Cinc temps: fa sol, ennuvolat, plou, fa vent, neva", "La diferència entre fa calor i fa fred"],
  mapa: mapa("EL TEMPS", "var(--pri)", [
    ["Sol i núvols", "fa sol · ennuvolat", M],
    ["Pluja, vent, neu", "plou · fa vent · neva", A],
    ["Calor i fred", "fa calor · fa fred", R],
    ["Pregunta", "Quin temps fa?", V],
  ], 230),
  tarjetas: [
    ["Hace sol", "Fa sol"],
    ["Llueve", "Plou"],
    ["Nublado", "Ennuvolat"],
    ["Hace viento", "Fa vent"],
    ["Nieva", "Neva"],
    ["Hace frío", "Fa fred"],
  ],
  familias: [
    "Cada matí, pregunteu Quin temps fa? abans de sortir.",
    "Feu un calendari del temps amb adhesius de sol, núvol i pluja.",
    "Trieu la roba segons el temps: fa fred, posa't l'abric.",
    "Mireu junts el temps a la tele i digueu-lo en català.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: vocabulari del temps atmosfèric en la rutina diària, relació amb la roba i les estacions", ["Plafó del temps a l'assemblea amb Quin temps fa?", "Cançó amb gestos per a cada temps.", "Joc del presentador del temps amb un mapa de la classe."]),
});
