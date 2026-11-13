// Primeros pasos en catalán, Infantil 4 años: Colors i formes. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, forma, dibujos, muestras, ic, vid, R, A, V, N, M, G, FUENTES } = require("./_inf4b");

// Fila de formes amb el seu nom.
const formes = (label, items, titulo) => svg(label, `${titulo ? rot(130, 24, titulo, { color: G }) : ""}${items.map(([f, t, c, t2], i) => { const w = 248 / items.length, x = 6 + w * (i + 0.5); return `${forma(f, x, 76, 46, c)}${rot(x, 130, t, { size: 17, color: c, w: 800 })}${t2 ? rot(x, 150, t2, { size: 15, color: c, w: 800 }) : ""}`; }).join("")}`);

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "Colors i formes",
  minutos: 15,
  objetivos: ["Dir els colors en català: vermell, blau, groc i verd", "Conèixer les formes: rodona, quadrat i triangle", "Ajuntar color i forma: un quadrat blau"],
  claves: ["vermell", "blau", "groc", "verd", "rodona", "quadrat", "triangle"],
  pregunta: {
    texto: "De quin color és una maduixa?",
    respuesta: "La maduixa és <mark>vermella</mark>. Avui aprenem els colors i les formes en català!",
  },
  bloques: [
    {
      html: `<h3>Vermell i blau</h3><p>La poma és de color <mark>vermell</mark>, com la maduixa i el tomàquet.</p><p>El mar i el cel són de color <mark>blau</mark>.</p><p>Busca a la classe una cosa vermella i una cosa blava.</p>`,
      svg: dibujos("Una poma vermella i un peix blau", [["manzana", "vermell", R], ["pez", "blau", A]], { titulo: "Els colors" }),
    },
    {
      html: `<h3>Groc i verd</h3><p>El sol i el plàtan són de color <mark>groc</mark>.</p><p>L'herba i la granota són de color <mark>verd</mark>.</p><p>Quin color t'agrada més? El meu color preferit és…</p>`,
      svg: dibujos("Un plàtan groc i una granota verda", [["platano", "groc", M], ["rana", "verd", V]], { titulo: "Els colors" }),
    },
    {
      html: `<h3>La rodona</h3><p>La forma rodona és la <mark>rodona</mark> o el cercle.</p><p>La pilota, el sol i les rodes del cotxe són rodons.</p><p>Fes una rodona a l'aire amb el dit. Dona tota la volta!</p>`,
      svg: svg("Una rodona gran i al costat una pilota i un sol, que són rodons", `${forma("circulo", 75, 80, 80, A)}${ic("pelota", 165, 70, 1.3)}${ic("sol", 220, 70, 1.3)}${rot(75, 150, "rodona", { size: 22, color: A, w: 800 })}${rot(192, 130, "són rodons!", { color: G })}`),
    },
    {
      html: `<h3>El quadrat i el triangle</h3><p>El <mark>quadrat</mark> té quatre costats iguals, com una finestra.</p><p>El <mark>triangle</mark> té tres costats i tres puntes, com el teulat d'una casa.</p><p>Compta els costats amb el dit.</p>`,
      svg: formes("Un quadrat de quatre costats i un triangle de tres costats", [["cuadrado", "quadrat", R, "4 costats"], ["triangulo", "triangle", V, "3 costats"]], "Les formes"),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Amb els colors i les formes podem <mark>explicar</mark> com són les coses.</p><p>Diem la forma i després el color: <b>una rodona vermella</b>, <b>un quadrat blau</b>, <b>un triangle groc</b>.</p>`,
      svg: formes("Una rodona vermella, un quadrat blau i un triangle groc", [["circulo", "rodona", R, "vermella"], ["cuadrado", "quadrat", A, "blau"], ["triangulo", "triangle", M, "groc"]], "Forma + color"),
    },
    {
      html: `<h3>Juguem a «Veig, veig»</h3><p>Un adult diu: <mark>Veig, veig… una cosa de color verd!</mark></p><p>Tu busques a la classe una cosa verda i la assenyales.</p><p>Si l'encertes, et toca a tu dir «Veig, veig».</p>`,
      svg: muestras("Quatre rodones de colors per jugar a Veig, veig: vermell, blau, groc i verd", [["", "vermell", "", R], ["", "blau", "", A], ["", "groc", "", M], ["", "verd", "", V]], { titulo: "Veig, veig… una cosa de color…" }),
    },
  ],
  figura: {
    titulo: "Colors i formes",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A dalt quatre colors: vermell, blau, groc i verd. A baix tres formes: rodona, quadrat i triangle">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["vermell", R], ["blau", A], ["groc", M], ["verd", V]].map(([t, c], i) => `<circle cx="${110 + i * 140}" cy="62" r="34" fill="${c}"/><text x="${110 + i * 140}" y="122" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">${t}</text>`).join("")}
      ${[["circulo", "rodona", R], ["cuadrado", "quadrat", A], ["triangulo", "triangle", V]].map(([f, t, c], i) => `${forma(f, 160 + i * 160, 196, 60, c)}<text x="${160 + i * 160}" y="272" text-anchor="middle" font-size="22" font-weight="800" fill="${c}">${t}</text>`).join("")}
    </svg>`,
  },
  video: { ...vid("fK7ulVv3_aI", "La cançó dels colors | El cançoner del Mic", "SX3", 4868564), busqueda: "els colors cançó infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "De quin color és l'herba?", pasos: ["Mirem l'herba del pati.", "És del mateix color que la granota."], resultado: "verd." },
    { enunciado: "Quina forma té una finestra?", pasos: ["Comptem els costats: u, dos, tres, quatre.", "Tots quatre són iguals."], resultado: "un quadrat." },
  ],
  errores: [
    "Dir «rojo» en lloc de vermell: en català diem vermell.",
    "Dir «amarillo» en lloc de groc.",
    "Confondre el quadrat i el triangle: el quadrat té quatre costats i el triangle, tres.",
  ],
  ejercicios: [
    { q: "Busca a casa una cosa vermella, una blava, una groga i una verda.", sol: "Per a la família: que l'assenyali i digui el color en català." },
    { q: "Dibuixa una rodona, un quadrat i un triangle.", sol: "Per a la família: digueu el nom de cada forma en català." },
    { q: "Ordena les peces de construcció per colors.", sol: "Vermell, blau, groc i verd." },
    { q: "Retalla un triangle de paper i compta'n els costats.", sol: "Tres costats." },
    { q: "Juga a «Veig, veig» amb un adult.", sol: "Per a la família: «Veig, veig una cosa de color blau!»." },
    { q: "Canta la cançó dels colors.", sol: "Per a la família: atureu el vídeo i pregunteu «De quin color és?»." },
  ],
  quiz: [
    { q: "La poma és de color…", o: ["Vermell", "Blau", "Verd"], a: 0, e: "Vermell, com la maduixa." },
    { q: "El sol és de color…", o: ["Groc", "Blau", "Verd"], a: 0, e: "Groc." },
    { q: "La granota és de color…", o: ["Verd", "Vermell", "Groc"], a: 0, e: "Verd." },
    { q: "La pilota té forma de…", o: ["Rodona", "Quadrat", "Triangle"], a: 0, e: "És rodona." },
    { q: "Quina forma té tres puntes?", o: ["El triangle", "La rodona", "El quadrat"], a: 0, e: "El triangle." },
    { q: "El mar és de color…", o: ["Blau", "Groc", "Vermell"], a: 0, e: "Blau." },
  ],
  examen: [
    { q: "Quants costats té el quadrat?", o: ["Quatre", "Tres", "Cap"], a: 0, e: "Quatre costats iguals." },
    { q: "Com es diu «amarillo» en català?", o: ["Groc", "Verd", "Blau"], a: 0, e: "Groc." },
    { q: "Una rodona vermella és…", o: ["Rodona i vermella", "Quadrada i blava", "Un triangle"], a: 0, e: "Forma rodona, color vermell." },
  ],
  feynman: ["Digues quatre colors en català", "Digues tres formes en català"],
  mapa: mapa("COLORS I FORMES", "var(--inf)", [
    ["vermell · blau", "la poma · el mar", R],
    ["groc · verd", "el sol · la granota", M],
    ["rodona", "com la pilota", A],
    ["quadrat · triangle", "4 i 3 costats", V],
  ], 220),
  tarjetas: [
    ["De quin color és la maduixa?", "Vermell"],
    ["De quin color és el mar?", "Blau"],
    ["De quin color és el sol?", "Groc"],
    ["De quin color és l'herba?", "Verd"],
    ["Quina forma té la pilota?", "Rodona"],
    ["Quants costats té el triangle?", "Tres"],
  ],
  familias: [
    "Quan el vestiu, pregunteu en català: «Vermell o blau?».",
    "Pel carrer, busqueu formes: senyals rodones, finestres quadrades i teulats triangulars.",
    "Jugueu a «Veig, veig» al cotxe o al parc.",
    "Barrejar les dues llengües és normal: aneu repetint la paraula en català.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, vocabulari de colors i formes bàsiques, comprensió oral amb suport visual (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["Joc de «Veig, veig» amb objectes de l'aula.", "Bossa misteriosa de formes per tocar i dir el nom.", "Mural de colors amb objectes que porten els infants."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
