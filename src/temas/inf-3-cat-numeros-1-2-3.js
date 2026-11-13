// Infantil 3 anys · Primeros pasos en catalán: Els números 1, 2, 3. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { vocab, fichas, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "Els números 1, 2, 3",
  minutos: 10,
  objetivos: ["Comptar fins a tres en català: u, dos, tres", "Ensenyar 1, 2 o 3 dits", "Respondre: quants n'hi ha?"],
  claves: ["u", "dos", "tres", "comptar", "dits", "quants?"],
  pregunta: {
    texto: "Quants anys tens? Ensenya-ho amb els dits!",
    respuesta: "Tens <mark>tres</mark> anys! Comptem en català: <mark>u, dos, tres</mark>.",
  },
  bloques: [
    {
      html: `<h3>U</h3><p><mark>Un</mark> sol al cel. Un nas a la cara.</p><p>Ensenya'm un dit! En català, quan comptem, diem <b>u</b>. Un sol, un nas: u!</p><p>Toca't el nas: u! Només en tenim un.</p>`,
      svg: vocab("U: un sol", [["sol", "u", "1", S, 1]], { titulo: "1" }),
    },
    {
      html: `<h3>Dos</h3><p><mark>Dos</mark> ulls. Dues mans. Dos!</p><p>Ensenya'm dos dits! Tenim dos ulls per mirar i dues mans per jugar.</p><p>Toca't les orelles: u, dos! Dues orelles.</p>`,
      svg: vocab("Dos: dos ulls", [["ojo", "dos", "2", A, 2]], { titulo: "2" }),
    },
    {
      html: `<h3>Tres</h3><p><mark>Tres</mark> pilotes. Tres!</p><p>Ensenya'm tres dits! Tu tens tres anys? Doncs ets tan gran com el número tres!</p><p>Comptem les pilotes tocant-les: u, dos, tres!</p>`,
      svg: vocab("Tres: tres pilotes", [["pelota", "tres", "3", R, 3]], { titulo: "3" }),
    },
    {
      html: `<h3>Comptem!</h3><p>Comptem els ànecs: <mark>u, dos, tres!</mark></p><p>Toquem cada ànec amb el dit mentre comptem. N'hi ha tres! Que bé que ho fas!</p><p>Ara comptem les vaques: u, dos, tres!</p>`,
      svg: escena("Comptem tres ànecs: u, dos, tres", [["pato", 50, 80, 1.5], ["pato", 130, 80, 1.5], ["pato", 210, 80, 1.5], ["t", 50, 140, "u", R, 26], ["t", 130, 140, "dos", A, 26], ["t", 210, 140, "tres", V, 26]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Els números ens diuen <mark>quants n'hi ha</mark>.</p><p>Quantes galetes? Dues! Quants anys tens? Tres! Els números serveixen per comptar.</p><p>Ensenya'm tres dits! Tres anys! Que gran que ets!</p>`,
      svg: escena("Tinc tres anys: un pastís amb tres espelmes", [["nino", 66, 82, 2], ["t", 66, 150, "Tinc tres anys!", R, 18], ["svg", `<rect x="160" y="100" width="76" height="40" rx="6" fill="#f08fb0"/><rect x="160" y="96" width="76" height="10" rx="4" fill="#fff"/>${[176, 198, 220].map((x) => `<rect x="${x - 3}" y="74" width="6" height="22" fill="var(--pen)"/><path d="M${x} 62 q5 7 0 12 q-5 -5 0 -12" fill="var(--sun)"/>`).join("")}`], ["t", 198, 162, "3", A, 22]]),
    },
    {
      html: `<h3>Juguem!</h3><p>L'adult diu un número: <mark>Dos!</mark></p><p>Salta dues vegades! Ara tres! Ara u! Comptem els salts en veu alta.</p><p>Salta, salta, salta! Tres salts! Molt bé!</p>`,
      svg: fichas("Joc: salta u, dos o tres cops", [["1", R], ["2", A], ["3", V]], { titulo: "Salta!", nota: "u · dos · tres", grande: true }),
    },
  ],
  figura: {
    titulo: "Els números 1, 2, 3",
    svg: mural("Els números: u, dos, tres", [["sol", "u", "1 · un sol", S], ["ojo", "dos", "2 · dos ulls", A], ["pelota", "tres", "3 · tres pilotes", R]], "Els números 1, 2, 3"),
  },
  video: { ...vid("-apX6TxWycA", "Els números de l'1 al 10 en català - Aprèn a comptar", "Smile and Learn - Català", 94004), busqueda: "cançó dels números en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quantes mans tens?",
      pasos: ["Ensenya les mans.", "Compta: u, dos."],
      resultado: "«Dues mans!»" },
    { enunciado: "Quants anys tens?",
      pasos: ["Ensenya els dits.", "Compta: u, dos, tres."],
      resultado: "«Tinc tres anys!»" },
  ],
  errores: [
    "Dir «uno, dos, tres»: en català comptem u, dos, tres.",
    "Comptar sense tocar: toquem cada cosa en comptar-la.",
    "Comptar dues vegades la mateixa cosa.",
  ],
  ejercicios: [
    { q: "Compta els dits: u, dos, tres.", sol: "Per a la família: toqueu cada dit en comptar." },
    { q: "Ensenya'm dos dits.", sol: "Demaneu 1, 2 o 3 dits en català." },
    { q: "Compta tres escales.", sol: "En pujar escales, comptem en català." },
    { q: "Salta tres vegades.", sol: "Compteu els salts en veu alta." },
    { q: "Quants anys tens?", sol: "Tinc tres anys! ensenyant tres dits." },
    { q: "Posa dues joguines a la capsa.", sol: "Demaneu un número de joguines en català." },
  ],
  quiz: [
    { q: "«U» és…", o: ["1", "2", "3"], a: 0, e: "U = 1." },
    { q: "«Dos» és…", o: ["1", "2", "3"], a: 1, e: "Dos = 2." },
    { q: "«Tres» és…", o: ["1", "2", "3"], a: 2, e: "Tres = 3." },
    { q: "Quants ulls tenim?", o: ["dos", "u", "tres"], a: 0, e: "Dos ulls." },
    { q: "Quants sols hi ha al cel?", o: ["u", "dos", "tres"], a: 0, e: "Un sol." },
    { q: "«Quants n'hi ha?» pregunta…", o: ["cuántos hay", "qué color", "hola"], a: 0, e: "Quants = cuántos." },
  ],
  examen: [
    { q: "U, dos…", o: ["tres", "quatre", "u"], a: 0, e: "U, dos, tres." },
    { q: "Tinc tres anys vol dir…", o: ["tengo tres años", "tengo un gato", "adiós"], a: 0, e: "Tengo tres años." },
    { q: "Quantes mans tens?", o: ["dues", "tres", "una"], a: 0, e: "Dues mans." },
  ],
  feynman: ["U, dos, tres", "Quants n'hi ha?", "Tinc tres anys!"],
  mapa: mapa("1 · 2 · 3", "var(--inf)", [
    ["U", "un sol", S],
    ["Dos", "dos ulls", A],
    ["Tres", "tres pilotes", R],
    ["Quants?", "comptem", V],
  ], 220),
  tarjetas: [
    ["1", "u"],
    ["2", "dos"],
    ["3", "tres"],
    ["¿cuántos?", "quants?"],
    ["Tengo tres años", "Tinc tres anys"],
    ["dos ojos", "dos ulls"],
  ],
  familias: [
    "Compteu en català escales, botons o galetes.",
    "Pregunteu quants anys tens? i que respongui amb els dits.",
    "Mireu el vídeo i compteu junts.",
    "Jugueu a saltar el número que digueu.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: numerals de l'1 al 3, comptatge amb correspondència i resposta física", ["Comptar objectes de l'assemblea en català.", "Saltar o picar de mans el número.", "Cançó per comptar amb els dits."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
