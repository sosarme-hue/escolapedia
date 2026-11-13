// Primeros pasos en catalán, Infantil 4 años: Els números de l'1 al 6. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, big, nino, suelo, dado, ic, charla, vid, R, A, V, N, M, G, FUENTES } = require("./_inf4b");

const CA = ["u", "dos", "tres", "quatre", "cinc", "sis"];
const COL = [R, A, V, N, M, R];
// Fila de daus amb el número i el seu nom.
const daus = (label, desde, hasta, titulo) => svg(label, `${rot(130, 24, titulo, { color: G })}${[...Array(hasta - desde + 1)].map((_, k) => { const n = desde + k, x = 50 + k * 80; return `${dado(x, 72, n, 52, COL[n - 1])}${big(x, 132, n, COL[n - 1], 24)}${rot(x, 158, CA[n - 1], { size: 18, color: COL[n - 1], w: 800 })}`; }).join("")}`);

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "Els números de l'1 al 6",
  minutos: 15,
  objetivos: ["Comptar de l'1 al 6 en català: u, dos, tres, quatre, cinc, sis", "Comptar objectes i dits", "Dir l'edat: Tinc quatre anys"],
  claves: ["u", "dos", "tres", "quatre", "cinc", "sis", "quants?"],
  pregunta: {
    texto: "Quants anys tens? Ensenya-ho amb els dits!",
    respuesta: "En tens <mark>quatre</mark>! En català diem: <b>Tinc quatre anys</b>.",
  },
  bloques: [
    {
      html: `<h3>U, dos, tres</h3><p>Comptem en català: <mark>u</mark>, <mark>dos</mark>, <mark>tres</mark>.</p><p>Quan comptem coses diem <b>un</b> o <b>una</b>: un gat, una poma.</p><p>Aixeca un dit per a cada número i digues-lo ben fort!</p>`,
      svg: daus("Daus amb un, dos i tres punts: u, dos, tres", 1, 3, "1 · 2 · 3"),
    },
    {
      html: `<h3>Quatre, cinc, sis</h3><p>Ara seguim comptant una mica més: <mark>quatre</mark>, <mark>cinc</mark>, <mark>sis</mark>.</p><p>Una mà sencera té <b>cinc</b> dits.</p><p>Si aixequem un dit de l'altra mà, ja en tenim <b>sis</b>. Prova-ho!</p>`,
      svg: daus("Daus amb quatre, cinc i sis punts: quatre, cinc, sis", 4, 6, "4 · 5 · 6"),
    },
    {
      html: `<h3>Quants n'hi ha?</h3><p>Per saber quantes coses hi ha, preguntem: <mark>Quants n'hi ha?</mark></p><p>Assenyala cada poma i compta: una, dues, tres, quatre.</p><p>Hi ha <b>quatre pomes</b>! Que bones!</p>`,
      svg: svg("Quatre pomes en fila amb els números de l'u al quatre", `${rot(130, 26, "Quantes pomes hi ha?", { size: 16, color: A, w: 800 })}${[0, 1, 2, 3].map((i) => ic("manzana", 52 + i * 52, 80, 1.4) + rot(52 + i * 52, 124, ["una", "dues", "tres", "quatre"][i], { size: 15, color: COL[i], w: 800 })).join("")}${rot(130, 162, "quatre pomes!", { size: 18, color: N, w: 800 })}`),
    },
    {
      html: `<h3>Comptem amb els dits</h3><p>Els dits ens ajuden a <mark>comptar</mark>.</p><p>Obre una mà: <b>cinc</b>. Obre l'altra i aixeca només un dit: cinc i un fan <b>sis</b>.</p><p>Els dits sempre van amb nosaltres!</p>`,
      svg: svg("Una mà oberta amb cinc dits més un dit de l'altra mà: sis", `${ic("mano", 80, 84, 2.6)}${rot(130, 88, "+", { size: 30, color: G, w: 800 })}<rect x="158" y="56" width="14" height="50" rx="7" fill="#f2c79e" stroke="#c9a27e"/><rect x="152" y="98" width="30" height="34" rx="10" fill="#f2c79e"/>${rot(80, 160, "cinc", { size: 18, color: M, w: 800 })}${rot(166, 160, "u", { size: 18, color: R, w: 800 })}${rot(226, 100, "= sis", { size: 18, color: N, w: 800 })}`),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb els números podem dir <mark>quants anys tenim</mark>: <b>Tinc quatre anys</b>. L'any que ve en tindré cinc!</p><p>També comptem joguines, amics, esglaons o els punts del dau quan juguem.</p>`,
      svg: charla("Un nen pregunta Quants anys tens i una nena respon Tinc quatre anys", [["nino", "Quants anys tens?", A], ["nina", "Tinc quatre anys!", R]]),
    },
    {
      html: `<h3>Juguem: salta i compta</h3><p>Tirem un <mark>dau</mark> gros a terra.</p><p>Comptem els punts en català i fem els mateixos <b>salts</b>: u, dos, tres…</p><p>Si surt un sis, sis salts! Qui es cansa primer?</p>`,
      svg: svg("Un dau amb tres punts i un nen que salta tres vegades comptant en català", `${dado(50, 70, 3, 56, V)}${nino(150, 150, { pose: "salta", c: A })}${["u", "dos", "tres"].map((t, i) => rot(110 + i * 50, 40 - (i % 2) * 10, t, { size: 18, color: COL[i], w: 800 })).join("")}${suelo(150)}${rot(130, 172, "tres salts!", { color: V })}`),
    },
  ],
  figura: {
    titulo: "Els números de l'1 al 6",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Els números de l'u al sis amb daus i el seu nom en català: u, dos, tres, quatre, cinc i sis">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${CA.map((t, i) => { const x = 60 + i * 104; return `<rect x="${x - 46}" y="24" width="92" height="252" rx="14" fill="var(--card)" stroke="${COL[i]}" stroke-width="3"/>${dado(x, 82, i + 1, 60, COL[i])}<text x="${x}" y="180" text-anchor="middle" font-size="44" font-weight="800" fill="${COL[i]}">${i + 1}</text><text x="${x}" y="240" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">${t}</text>`; }).join("")}
    </svg>`,
  },
  video: { ...vid("dj3XGzKL8PI", "Els números: cinc cançons per comptar", "Titelles Pamipipa", 106320), busqueda: "els números cançó infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quants gots hi ha a taula? N'hi ha tres.", pasos: ["Assenyalem cada got.", "Comptem en català: un, dos, tres."], resultado: "hi ha tres gots." },
    { enunciado: "Digues la teva edat en català.", pasos: ["Ensenyem els dits: quatre.", "Comencem amb «Tinc…»."], resultado: "Tinc quatre anys!" },
  ],
  errores: [
    "Dir «cuatro» en lloc de quatre, o «seis» en lloc de sis.",
    "Saltar-se números: u, dos, tres, quatre, cinc, sis, sempre en ordre.",
    "Comptar dues vegades la mateixa cosa: cal assenyalar-ne cadascuna una sola vegada.",
  ],
  ejercicios: [
    { q: "Compta de l'1 al 6 en català.", sol: "U, dos, tres, quatre, cinc, sis." },
    { q: "Puja sis esglaons comptant en català.", sol: "Per a la família: un número per esglaó." },
    { q: "Posa quatre culleres a taula comptant.", sol: "Una, dues, tres, quatre." },
    { q: "Ensenya cinc dits.", sol: "Una mà sencera oberta." },
    { q: "Tira un dau i digues el número en català.", sol: "Per a la família: feu servir un dau de joc de taula." },
    { q: "Respon: Quants anys tens?", sol: "Tinc quatre anys!" },
  ],
  quiz: [
    { q: "Com es diu el 3?", o: ["Tres", "Dos", "Sis"], a: 0, e: "Tres." },
    { q: "Una mà sencera té…", o: ["Cinc dits", "Dos dits", "Sis dits"], a: 0, e: "Cinc dits." },
    { q: "Després del quatre ve el…", o: ["Cinc", "U", "Tres"], a: 0, e: "Quatre, cinc." },
    { q: "Com es diu el 6?", o: ["Sis", "Seis", "Cinc"], a: 0, e: "Sis." },
    { q: "Quants n'hi ha? vol dir…", o: ["¿Cuántos hay?", "Hola", "Adiós"], a: 0, e: "Preguntem quants." },
    { q: "Tinc quatre anys vol dir que tinc…", o: ["4 anys", "2 anys", "6 anys"], a: 0, e: "Quatre: 4." },
  ],
  examen: [
    { q: "Com es diu el 4?", o: ["Quatre", "Cuatro", "Tres"], a: 0, e: "Quatre." },
    { q: "U, dos, …", o: ["Tres", "Cinc", "Sis"], a: 0, e: "Després del dos ve el tres." },
    { q: "Cinc i un fan…", o: ["Sis", "Quatre", "Dos"], a: 0, e: "Cinc i u, sis." },
  ],
  feynman: ["Compta de l'1 al 6 en català", "Digues la teva edat en català"],
  mapa: mapa("ELS NÚMEROS", "var(--inf)", [
    ["u · dos", "1 · 2", R],
    ["tres · quatre", "3 · 4", A],
    ["cinc · sis", "5 · 6", V],
    ["Quants n'hi ha?", "comptem", N],
  ], 220),
  tarjetas: [
    ["1", "U (un, una)"],
    ["2", "Dos"],
    ["3", "Tres"],
    ["4", "Quatre"],
    ["5", "Cinc"],
    ["6", "Sis"],
  ],
  familias: [
    "Compteu en català en pujar escales, en parar taula o en rentar-vos les dents.",
    "Jugueu al parxís o a l'oca dient el número del dau en català.",
    "Pregunteu «Quants n'hi ha?» assenyalant coses de casa.",
    "Canteu cançons de comptar en català.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, números de l'1 al 6 en situacions de joc, recompte d'objectes i resposta física (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["Dau gegant amb salts i picades de mans.", "Cançons de dits per comptar.", "Comptar els infants presents a l'assemblea."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
