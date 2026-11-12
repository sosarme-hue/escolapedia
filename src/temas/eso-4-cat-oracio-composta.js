// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "L'oració composta",
  minutos: 40,
  objetivos: ["Distingir l'oració simple de la composta", "Reconèixer la juxtaposició i la coordinació", "Classificar les coordinades pel nexe"],
  claves: ["oració composta", "proposició", "juxtaposició", "coordinació", "subordinació", "copulativa", "disjuntiva", "adversativa"],
  pregunta: {
    texto: "«Vaig arribar, vaig veure, vaig vèncer.» Quantes oracions hi ha en aquesta frase de Juli Cèsar?",
    respuesta: "Hi ha <mark>tres verbs conjugats</mark>, és a dir, tres proposicions dins d'una sola <b>oració composta</b>. Estan unides sense nexe, només amb comes: són <b>juxtaposades</b>.",
  },
  bloques: [
    {
      html: `<h3>Simple o composta</h3><p>L'oració <b>simple</b> té un sol verb conjugat. La <b>composta</b> en té dos o més: cada part amb verb s'anomena <mark>proposició</mark>. Truc: <b>compta els verbs conjugats</b> (les perífrasis com «he d'estudiar» compten com un de sol).</p>`,
      svg: L.frase("Oració composta: La Marta estudia i el seu germà juga", [
        ["La Marta", "", "var(--line)"], ["estudia", "verb 1", "var(--pen)"], ["i", "nexe", "var(--red)"],
        ["el seu germà", "", "var(--line)"], ["juga.", "verb 2", "var(--pen)"],
      ], "2 verbs = 2 proposicions"),
    },
    {
      html: `<h3>Tres maneres d'unir proposicions</h3><p><b>Juxtaposició</b>: sense nexe, amb signes de puntuació. <b>Coordinació</b>: amb nexe, i les proposicions tenen el mateix nivell. <b>Subordinació</b>: una proposició depèn de l'altra i hi fa una funció (ho veurem al tema següent).</p>`,
      svg: L.filas("Juxtaposició, coordinació i subordinació", [
        ["Juxtaposició", "sense nexe: , ; :", "var(--pen)"],
        ["Coordinació", "mateix nivell: i, o, però", "var(--leaf)"],
        ["Subordinació", "una depèn de l'altra", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>La juxtaposició</h3><p>Les proposicions s'uneixen <mark>només amb signes de puntuació</mark>: coma, punt i coma o dos punts. «No vinguis demà; no hi seré.» El sentit (aquí, una causa) s'entén pel context.</p>`,
      svg: L.frase("Juxtaposades: No vinguis demà; no hi seré", [
        ["No vinguis demà", "proposició 1", "var(--pen)"], [";", "sense nexe", "var(--red)"], ["no hi seré.", "proposició 2", "var(--leaf)"],
      ], "unides només per la puntuació"),
    },
    {
      html: `<h3>Les coordinades</h3><p><b>Copulatives</b>: sumen (i, ni). <b>Disjuntives</b>: plantegen opcions (o, o bé). <b>Adversatives</b>: s'oposen (però, sinó, en canvi). <b>Distributives</b>: alternen (ara… ara, ja… ja). <b>Explicatives</b>: aclareixen (és a dir, o sigui).</p>`,
      svg: L.tabla("Tipus de coordinades i nexes", ["Tipus", "Nexes"], [
        ["Copulativa", "i · ni"], ["Disjuntiva", "o · o bé"], ["Adversativa", "però · sinó"], ["Explicativa", "és a dir"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Com s'analitza</h3><p>1) Subratlla els verbs conjugats. 2) Separa les proposicions. 3) Busca el nexe: si no n'hi ha, són <b>juxtaposades</b>; si és coordinant, classifica-la. 4) Analitza cada proposició com una oració simple (subjecte i predicat).</p>`,
      svg: L.filas("Quatre passos per analitzar l'oració composta", [
        ["1", "subratlla els verbs", "var(--pen)"], ["2", "separa les proposicions", "var(--leaf)"],
        ["3", "busca i classifica el nexe", "var(--red)"], ["4", "analitza cada part", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com s'uneixen les proposicions",
    svg: L.columnas("Juxtaposició, coordinació i subordinació", [
      ["sense nexe", "JUXTAPOSICIÓ", ["coma, punt i coma", "o dos punts"], "var(--pen)"],
      ["mateix nivell", "COORDINACIÓ", ["i · o · però · sinó", "independents"], "var(--leaf)"],
      ["una depèn de l'altra", "SUBORDINACIÓ", ["que · quan · si…", "(tema següent)"], "var(--muted)"],
    ]),
  },
  video: { id: "1xmgldy--os", titulo: "Oracions compostes I: juxtaposades i coordinades", canal: "Aprèn català amb en Jordi", vistas: 54610, megusta: 0, busqueda: "oració composta català coordinació juxtaposició" },
  quiz: [
    { q: "Quantes proposicions té «Vaig obrir la porta i va entrar el gat»?", o: ["Una", "Dues", "Tres"], a: 1, e: "Dos verbs conjugats: dues proposicions." },
    { q: "«Feia fred; ens vam quedar a casa» és una oració…", o: ["juxtaposada", "coordinada copulativa", "simple"], a: 0, e: "No hi ha nexe, només punt i coma." },
    { q: "Quin nexe és adversatiu?", o: ["ni", "o", "però"], a: 2, e: "«Però» uneix idees oposades." },
    { q: "«Estudies o treballes?» és una coordinada…", o: ["disjuntiva", "copulativa", "explicativa"], a: 0, e: "El nexe «o» planteja una tria." },
    { q: "En la coordinació, les proposicions…", o: ["depenen l'una de l'altra", "tenen el mateix nivell", "sempre van sense nexe"], a: 1, e: "Són independents i del mateix nivell." },
  ],
  examen: [
    { q: "«No vull te, sinó cafè» és coordinada…", o: ["adversativa", "copulativa", "distributiva"], a: 0, e: "«Sinó» corregeix allò negat." },
    { q: "«He d'estudiar» té…", o: ["dos verbs i és composta", "una perífrasi i és simple", "dues proposicions"], a: 1, e: "Una perífrasi verbal compta com un sol nucli." },
    { q: "«És a dir» és un nexe…", o: ["explicatiu", "disjuntiu", "adversatiu"], a: 0, e: "Aclareix el que s'ha dit." },
  ],
  feynman: ["Com saber si una oració és simple o composta", "Què són les juxtaposades", "Els tipus de coordinades amb els seus nexes", "Els passos per analitzar una oració composta"],
  mapa: mapa("ORACIÓ COMPOSTA", "var(--eso)", [
    ["Proposició", "cada part amb el seu verb", "var(--ink)"],
    ["Juxtaposició", "sense nexe: , ; :", "var(--pen)"],
    ["Coordinació", "i · o · però · sinó", "var(--leaf)"],
    ["Anàlisi", "verbs → nexe → parts", "var(--red)"],
  ]),
  tarjetas: [
    ["Què és una proposició?", "Cadascuna de les parts amb verb propi d'una oració composta."],
    ["Oracions juxtaposades", "Proposicions unides sense nexe, amb coma, punt i coma o dos punts."],
    ["Coordinades copulatives", "Sumen idees amb i, ni."],
    ["Coordinades adversatives", "Oposen idees amb però, sinó, en canvi."],
    ["Coordinades disjuntives", "Presenten opcions amb o, o bé."],
  ],
  familias: ["Llegiu un paràgraf d'un llibre en català i compteu quants verbs conjugats té cada oració.", "Demaneu-li que inventi una frase de cada tipus de coordinada sobre el dia d'avui.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: l'oració composta, juxtaposició i coordinació (RD 217/2022, Llengua Catalana i Literatura 4t; Gramàtica de la llengua catalana de l'IEC).",
    ideas: ["Tires de paper amb proposicions i nexes per construir oracions.", "Reescriure juxtaposades com a coordinades i comentar el canvi de matís.", "Caçar coordinades en lletres de cançons en català."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Gramàtica essencial de la llengua catalana (IEC)", url: "https://geiec.iec.cat/" },
  ],
  revisado: "2026-11-12",
};
