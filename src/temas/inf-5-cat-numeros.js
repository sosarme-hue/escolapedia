// Infantil 5 anys · Primeros pasos en catalán: els números de l'1 al 10. Tema escrit en català.
const { tema, mapa, svg, rot, big, ic, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

const NUM = ["un", "dos", "tres", "quatre", "cinc", "sis", "set", "vuit", "nou", "deu"];
const COL = [R, A, V, N, M, R, A, V, N, M];
const fila = (desde, hasta, titulo) => svg(`Els números del ${desde} al ${hasta} en català`, `${rot(130, 24, titulo, { color: "var(--muted)", size: 15 })}${NUM.slice(desde - 1, hasta).map((w, i) => { const x = 30 + i * 50; return `<circle cx="${x}" cy="82" r="21" fill="${COL[desde - 1 + i]}"/>${big(x, 92, desde + i, "#fff", 26)}${rot(x, 132, w, { color: COL[desde - 1 + i], size: 16 })}`; }).join("")}`);

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "Els números de l'1 al 10",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Comptar de l'1 al 10 en català", "Reconèixer els números quan els sentim", "Preguntar i respondre Quants n'hi ha?"],
  claves: ["un", "dos", "tres", "quatre", "cinc", "sis", "set", "vuit", "nou", "deu", "Quants?"],
  pregunta: {
    texto: "Mostra les dues mans. Quants dits hi ha? Saps comptar-los en català?",
    respuesta: "N'hi ha deu: <mark>un, dos, tres, quatre, cinc, sis, set, vuit, nou, deu</mark>!",
  },
  bloques: [
    {
      html: `<h3>De l'1 al 5</h3><p>Comptem amb una mà: <mark>un, dos, tres, quatre, cinc</mark>.</p><p>Aixeca un dit per cada número.</p><p>Compte: el 5 es diu <b>cinc</b>.</p><p>Compta a poc a poc.</p>`,
      svg: fila(1, 5, "Una mà: de l'1 al 5"),
    },
    {
      html: `<h3>Del 6 al 10</h3><p>Seguim amb l'altra mà: <mark>sis, set, vuit, nou, deu</mark>.</p><p>Ja tens les dues mans obertes!</p><p>El 10 es diu <b>deu</b>.</p><p>Ara compta tots els dits.</p>`,
      svg: fila(6, 10, "L'altra mà: del 6 al 10"),
    },
    {
      html: `<h3>Quants n'hi ha?</h3><p>Per saber la quantitat preguntem <mark>Quants n'hi ha?</mark></p><p>Comptem i responem amb el número.</p><p>«Quantes pomes hi ha?» — «<b>Tres!</b>»</p><p>Prova-ho amb cotxes o llapis.</p>`,
      svg: svg("Tres pomes: n'hi ha tres", `${rot(130, 26, "Quantes pomes hi ha?", { color: "var(--muted)", size: 15 })}${[70, 130, 190].map((x) => ic("manzana", x, 86, 1.4)).join("")}${big(130, 156, "Tres!", R, 30)}`),
    },
    {
      html: `<h3>Quants anys tens?</h3><p>Per dir l'edat diem <mark>Tinc cinc anys</mark>.</p><p>La pregunta és <b>Quants anys tens?</b></p><p>Mostra cinc dits mentre ho dius!</p><p>I tu, quants anys tens? Mostra-ho amb els dits!</p>`,
      svg: charla("Diàleg: Quants anys tens? Tinc cinc anys!", [["nina", "Quants anys tens?", A], ["nino", "Tinc cinc anys!", R]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Els números serveixen per <mark>comptar</mark> als jocs, a les cançons i a l'amagatall.</p><p>I per comptar els graons, les galetes o els cotxes del carrer!</p><p>Els números són a tot arreu.</p>`,
      svg: dibujos("Un cotxe, una pilota i un llibre per comptar", [["coche", "2 cotxes", R], ["pelota", "4 pilotes", A], ["libro", "6 llibres", V]], { titulo: "Comptem coses" }),
    },
    {
      html: `<h3>Joc: salts en català</h3><p>L'adult diu un número: <mark>quatre!</mark></p><p>Tu fas <b>quatre salts</b> comptant en veu alta.</p><p>Després tu dius el número i l'adult salta.</p><p>Qui salta més bé?</p>`,
      svg: svg("Un nen salta i compta: un, dos, tres, quatre", `${nino(70, 156, { c: A, pose: "salta" })}${["un", "dos", "tres", "quatre"].map((w, i) => rot(150 + (i % 2) * 60, 50 + Math.floor(i / 2) * 50, w, { color: COL[i], size: 20 })).join("")}<path d="M20 158 H240" stroke="var(--line)" stroke-width="3"/>`),
    },
  ],
  figura: {
    titulo: "Els números de l'1 al 10",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Els números de l'1 al 10 amb el seu nom en català"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${NUM.map((w, i) => { const x = 72 + (i % 5) * 124, y = i < 5 ? 70 : 180; return `<circle cx="${x}" cy="${y}" r="30" fill="${COL[i]}"/>${big(x, y + 12, i + 1, "#fff", 34)}${rot(x, y + 56, w, { color: COL[i], size: 20 })}`; }).join("")}</svg>`,
  },
  video: { ...vid("Cpp7Hxvsmr8", "Els números de l'1 al 10, cançó infantil per aprendre a comptar", "El Show De Pelina", 230497), busqueda: "els números de l'1 al 10 en català per a nens" },
  ejemplos: [
    { enunciado: "Quants gats hi ha? N'hi ha 2.", pasos: ["Comptem en català: un, dos.", "L'últim número és la resposta."], resultado: "N'hi ha dos." },
    { enunciado: "Quants anys tens? En tens 5.", pasos: ["Comptem amb els dits: un, dos, tres, quatre, cinc.", "Diem: Tinc cinc anys."], resultado: "Tinc cinc anys." },
  ],
  errores: [
    "Confondre sis (6) i set (7): sis va abans que set.",
    "Saltar-se un número quan comptem: a poc a poc, sense pressa.",
    "Dir «soc cinc anys»: es diu tinc cinc anys.",
  ],
  ejercicios: [
    { q: "Compta els graons de l'escala en català.", sol: "Nota per a la família: compteu junts en veu alta." },
    { q: "Compta els dits de l'1 al 10.", sol: "Un, dos, tres, quatre, cinc, sis, set, vuit, nou, deu." },
    { q: "Posa 4 pomes a la taula. Quantes n'hi ha?", sol: "Quatre." },
    { q: "Fes tants salts com el número que sents: tres.", sol: "Tres salts." },
    { q: "Digues la teva edat en català.", sol: "Tinc cinc anys." },
    { q: "Fes el compte enrere d'un coet: de deu a un.", sol: "Deu, nou, vuit, set, sis, cinc, quatre, tres, dos, un… Ja!" },
  ],
  quiz: [
    { q: "Un és el…", o: ["1", "2", "10"], a: 0, e: "Un = 1." },
    { q: "Cinc és el…", o: ["4", "5", "9"], a: 1, e: "Cinc = 5." },
    { q: "Com es diu el 10?", o: ["dos", "deu", "nou"], a: 1, e: "Deu = 10." },
    { q: "Quants n'hi ha? pregunta…", o: ["la quantitat", "el nom", "el color"], a: 0, e: "Comptem i responem." },
    { q: "Després de set ve…", o: ["sis", "vuit", "nou"], a: 1, e: "Set, vuit." },
    { q: "Tres és el…", o: ["3", "8", "6"], a: 0, e: "Tres = 3." },
  ],
  examen: [
    { q: "Sis és el…", o: ["6", "7", "16"], a: 0, e: "Sis = 6." },
    { q: "Per dir l'edat dic…", o: ["Tinc cinc anys", "Em dic cinc", "Hola cinc"], a: 0, e: "Tinc cinc anys." },
    { q: "Com es diu el 2?", o: ["deu", "dos", "nou"], a: 1, e: "Dos = 2." },
  ],
  feynman: ["Comptar de l'1 al 10 en català", "Què vol dir Quants n'hi ha?", "Com dic la meva edat"],
  mapa: mapa("ELS NÚMEROS", "var(--pri)", [
    ["1 a 5", "un, dos, tres, quatre, cinc", R],
    ["6 a 10", "sis, set, vuit, nou, deu", A],
    ["Quants?", "Quants n'hi ha?", V],
    ["L'edat", "Tinc cinc anys!", N],
  ], 240),
  tarjetas: [
    ["1, 2, 3", "un, dos, tres"],
    ["4, 5, 6", "quatre, cinc, sis"],
    ["7, 8", "set, vuit"],
    ["9, 10", "nou, deu"],
    ["Quants n'hi ha?", "Comptem i diem el número"],
    ["Quants anys tens?", "Tinc cinc anys!"],
  ],
  familias: [
    "Compteu en català les coses del dia: graons, culleres, joguines.",
    "Jugueu a fet i amagar comptant fins a deu en català.",
    "Canteu una cançó dels números en català.",
    "Pregunteu Quants n'hi ha? quan pareu taula.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: els numerals de l'1 al 10 en situacions de joc i rutina, la pregunta Quants n'hi ha? i l'edat", ["Comptatge diari en català en passar llista.", "Jocs motors: saltar o picar de mans el número que se sent.", "Cançons i rodolins de números."]),
});
