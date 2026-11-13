// Primeros pasos en catalán, Infantil 4 años: El meu cos. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, dibujos, charla, mural, vid, R, A, V, N, M, G, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "El meu cos",
  minutos: 15,
  objetivos: ["Dir les parts del cos en català: cap, ulls, nas, boca", "Dir mans i peus", "Seguir ordres senzilles: toca't el nas"],
  claves: ["cos", "cap", "ulls", "orelles", "nas", "boca", "mans", "peus"],
  pregunta: {
    texto: "Toca't el nas. Saps com es diu «nariz» en català?",
    respuesta: "Es diu <mark>nas</mark>. I tot el teu cos és el <b>cos</b>!",
  },
  bloques: [
    {
      html: `<h3>El cap i el cos</h3><p>A dalt de tot tenim el <mark>cap</mark>. Al cap hi ha els cabells.</p><p>Al mig hi ha la <b>panxa</b> i l'esquena.</p><p>Tot junt és el nostre <mark>cos</mark>. Toca't el cap amb les dues mans!</p>`,
      svg: svg("Un nen aixeca les mans sobre el cap: el cap i el cos", `${nino(80, 150, { pose: "arriba", c: A, s: 1.4 })}${rot(180, 64, "el cap", { size: 26, color: R, w: 800 })}${rot(180, 112, "el cos", { size: 24, color: A, w: 800 })}${suelo(150)}`),
    },
    {
      html: `<h3>La cara</h3><p>A la cara tenim dos <mark>ulls</mark> per mirar i dues <mark>orelles</mark> per escoltar.</p><p>Tenim el <b>nas</b> per olorar i la <b>boca</b> per menjar i parlar.</p><p>Assenyala cada part.</p>`,
      svg: dibujos("La cara: els ulls, les orelles, el nas i la boca", [["ojo", "ulls", A], ["oreja", "orelles", R], ["nariz", "nas", V], ["boca", "boca", N]], { titulo: "La cara" }),
    },
    {
      html: `<h3>Mans i peus</h3><p>Al final dels braços tenim les <mark>mans</mark>. Amb les mans piquem de mans i agafem coses.</p><p>Al final de les cames tenim els <mark>peus</mark>. Amb els peus caminem i saltem.</p>`,
      svg: dibujos("Les mans i els peus", [["mano", "mans", R], ["pie", "peus", A]], { titulo: "Mans i peus" }),
    },
    {
      html: `<h3>Toca't el nas!</h3><p>Juguem a fer el que diu la mestra.</p><p>Si diu <mark>Toca't el nas!</mark>, et toques el nas. Si diu <mark>Toca't els peus!</mark>, t'ajups i et toques els peus.</p><p>Escolta bé i fes-ho de pressa!</p>`,
      svg: charla("La mestra diu Toca't el nas i el nen respon El meu nas", [["mama", "Toca't el nas!", A], ["nino", "El meu nas!", R]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Conèixer el cos ens ajuda a <mark>explicar què ens passa</mark>.</p><p>Si ens fa mal alguna cosa podem dir: <b>Em fa mal la panxa</b> o <b>Em fa mal el peu</b>.</p><p>I així ens poden ajudar.</p>`,
      svg: svg("Una nena es toca la panxa i diu Em fa mal la panxa", `${nino(80, 150, { pose: "reza", c: R, nina: true, s: 1.3, boca: "cerrada" })}${rot(180, 80, "Em fa mal", { size: 18, color: R, w: 800 })}${rot(180, 104, "la panxa", { size: 18, color: R, w: 800 })}${suelo(150)}${rot(130, 172, "Ho expliquem i ens ajuden", { color: G })}`),
    },
    {
      html: `<h3>Juguem: cap, espatlles, genolls i peus</h3><p>Cantem i toquem cada part: <mark>cap</mark>, <b>espatlles</b>, <b>genolls</b> i <b>peus</b>.</p><p>Primer a poc a poc. Després, cada vegada més de pressa!</p><p>Qui s'equivoca, riu i torna a començar!</p>`,
      svg: svg("Quatre nens toquen el cap, les espatlles, els genolls i els peus", `${[["arriba", "cap", R], ["brazos", "espatlles", A], ["agacha", "genolls", V], ["agacha", "peus", N]].map(([pose, t, c], i) => nino(36 + i * 63, 140, { pose, c, nina: i % 2 === 1, s: 0.9 }) + rot(36 + i * 63, 166, t, { size: 13, color: c, w: 800 })).join("")}${suelo(142)}${rot(130, 24, "més de pressa!", { color: G })}`),
    },
  ],
  figura: {
    titulo: "El meu cos",
    svg: mural("Vuit targetes del cos en català: cap, ulls, orelles, nas, boca, mans, peus i cos", [["nino", "cap", "a dalt", R], ["ojo", "ulls", "per mirar", A], ["oreja", "orelles", "per escoltar", V], ["nariz", "nas", "per olorar", N], ["boca", "boca", "per menjar", R], ["mano", "mans", "per agafar", A], ["pie", "peus", "per caminar", V], ["nina", "cos", "tot junt", N]], "Les parts del cos en català"),
  },
  video: { ...vid("RFNG5ccI9IQ", "El cos", "KZoo Music", 128690), busqueda: "el cos cançó infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Toca't les orelles!", pasos: ["Les orelles són a banda i banda del cap.", "Hi posem les mans."], resultado: "mans a les orelles!" },
    { enunciado: "Amb què mirem?", pasos: ["Tanquem els ulls: no veiem res.", "Els obrim: ho veiem tot."], resultado: "amb els ulls." },
  ],
  errores: [
    "Dir «nariz» en lloc de nas.",
    "Confondre ulls (per mirar) i orelles (per escoltar).",
    "Dir «el cabeza»: en català és el cap.",
  ],
  ejercicios: [
    { q: "Toca la part del cos que digui l'adult.", sol: "Per a la família: cada vegada més de pressa; és un joc!" },
    { q: "Dibuixa una cara amb ulls, nas i boca.", sol: "Per a la família: digueu el nom de cada part en català." },
    { q: "Canta «Cap, espatlles, genolls i peus».", sol: "Per a la família: tocant cada part mentre canteu." },
    { q: "Pica de mans tres vegades.", sol: "U, dos, tres!" },
    { q: "Salta amb els peus junts.", sol: "Per a la família: «Salta! Salta!»." },
    { q: "Digues amb què escoltes.", sol: "Amb les orelles." },
  ],
  quiz: [
    { q: "El cap és…", o: ["La cabeza", "El pie", "La mano"], a: 0, e: "El cap és a dalt de tot." },
    { q: "Amb els ulls…", o: ["Mirem", "Mengem", "Saltem"], a: 0, e: "Els ulls són per mirar." },
    { q: "Com es diu «nariz»?", o: ["Nas", "Boca", "Orella"], a: 0, e: "El nas." },
    { q: "Amb els peus…", o: ["Caminem", "Escoltem", "Mirem"], a: 0, e: "Caminem i saltem." },
    { q: "Toca't la boca: em toco…", o: ["La boca", "El genoll", "L'orella"], a: 0, e: "La boca." },
    { q: "Les mans serveixen per…", o: ["Agafar", "Olorar", "Escoltar"], a: 0, e: "Agafem i piquem de mans." },
  ],
  examen: [
    { q: "Les orelles són per…", o: ["Escoltar", "Mirar", "Menjar"], a: 0, e: "Escoltem amb les orelles." },
    { q: "Com es diu «pies»?", o: ["Peus", "Mans", "Ulls"], a: 0, e: "Els peus." },
    { q: "Si em fa mal la panxa dic…", o: ["Em fa mal la panxa", "Bon dia", "Adéu"], a: 0, e: "Així ens poden ajudar." },
  ],
  feynman: ["Assenyala i digues en català cinc parts del cos", "Dona una ordre: Toca't…"],
  mapa: mapa("EL MEU COS", "var(--inf)", [
    ["cap", "a dalt de tot", R],
    ["ulls · orelles", "mirar · escoltar", A],
    ["nas · boca", "olorar · menjar", V],
    ["mans · peus", "agafar · caminar", N],
  ], 220),
  tarjetas: [
    ["Com es diu «cabeza»?", "Cap"],
    ["Com es diu «ojos»?", "Ulls"],
    ["Com es diu «nariz»?", "Nas"],
    ["Com es diu «boca»?", "Boca"],
    ["Com es diu «manos»?", "Mans"],
    ["Com es diu «pies»?", "Peus"],
  ],
  familias: [
    "Al bany, jugueu a «Toca't…»: el nas, les mans, els peus.",
    "Canteu «Cap, espatlles, genolls i peus» cada vegada més de pressa.",
    "Quan el vestiu, digueu on va cada peça: les sabates als peus.",
    "Deixeu que us doni ordres a vosaltres: li encanta manar.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, vocabulari del cos, comprensió d'ordres senzilles i resposta física; vincle amb el coneixement del propi cos (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["«Simon diu» amb parts del cos.", "Cançó de gestos amb el cos.", "Ninot gran amb etiquetes en català."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
