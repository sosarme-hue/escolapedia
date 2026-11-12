// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG. Normativa de l'IEC (Ortografia catalana, 2017).
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Ortografia i normativa",
  minutos: 40,
  objetivos: ["Aplicar les regles d'accentuació i triar entre accent obert i tancat", "Conèixer els accents diacrítics que es mantenen des del 2017", "Fer servir bé la dièresi, l'apòstrof i la contracció"],
  claves: ["accent obert", "accent tancat", "aguda", "plana", "esdrúixola", "diacrític", "dièresi", "apòstrof", "contracció"],
  pregunta: {
    texto: "Per què «cafè» porta l'accent cap avall (`) i «cançó» cap amunt (´)? En castellà només hi ha un accent…",
    respuesta: "Perquè en català hi ha <mark>dos accents</mark>: l'<b>obert</b> o greu (`) i el <b>tancat</b> o agut (´). Indiquen com es pronuncia la vocal: la <i>e</i> de «cafè» és oberta [ɛ] i la <i>o</i> de «cançó» és tancada [o].",
  },
  bloques: [
    {
      html: `<h3>Quan s'accentua</h3><p><b>Agudes</b> (síl·laba tònica final): porten accent si acaben en <mark>vocal, vocal + s, -en, -in</mark>: cafè, francès, també, camí. <b>Planes</b>: porten accent si <mark>no</mark> acaben així: <i>tròpic, fàcil, càntir</i>. <b>Esdrúixoles</b>: sempre: <i>música, àvia, química</i>.</p>`,
      svg: L.filas("Regles d'accentuació", [
        ["Agudes", "vocal, -s, -en, -in: camí", "var(--pen)"],
        ["Planes", "les altres: fàcil", "var(--leaf)"],
        ["Esdrúixoles", "sempre: música", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Obert o tancat?</h3><p>La <b>a</b> sempre porta accent obert: <i>està, àvia</i>. La <b>i</b> i la <b>u</b> sempre tancat: <i>camí, ningú</i>. La <b>e</b> i la <b>o</b> poden ser obertes o tancades segons la pronúncia oriental: <i>cafè / també</i>, <i>còmode / cançó</i>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Taula d'accents: à sempre oberta; í i ú sempre tancades; e i o oberta o tancada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <g font-size="34" ${D}>
            <text x="40" y="70" fill="var(--red)">à</text><text x="95" y="70" fill="var(--leaf)">è é</text>
            <text x="160" y="70" fill="var(--leaf)">í</text><text x="210" y="70" fill="var(--leaf)">ò ó</text>
            <text x="160" y="130" fill="var(--pen)">ú</text>
          </g>
          <g font-size="12">
            <text x="40" y="92" fill="var(--red)">sempre</text><text x="40" y="106" fill="var(--red)">oberta</text>
            <text x="95" y="92" fill="var(--leaf)">oberta o</text><text x="95" y="106" fill="var(--leaf)">tancada</text>
            <text x="210" y="92" fill="var(--leaf)">oberta o</text><text x="210" y="106" fill="var(--leaf)">tancada</text>
            <text x="160" y="150" fill="var(--pen)">sempre tancades</text>
          </g>
        </g></svg>`,
    },
    {
      html: `<h3>Els accents diacrítics</h3><p>Distingeixen paraules que s'escriuen igual. La reforma de l'IEC del <b>2017</b> en va reduir el nombre a <mark>15</mark>: bé/be, déu/deu, és/es, mà/ma, més/mes, món/mon, pèl/pel, què/que, sé/se, sí/si, sòl/sol, són/son, té/te, ús/us, vós/vos. Ja no s'accentuen <i>dona, os, net, vena</i>…</p>`,
      svg: L.tabla("Alguns accents diacrítics", ["Amb accent", "Sense accent"], [
        ["és (verb)", "es (pronom)"], ["més (quantitat)", "mes (de l'any)"], ["sé (saber)", "se (pronom)"], ["té (tenir)", "te (pronom)"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La dièresi</h3><p>La dièresi (¨) té dues funcions. 1) Fer sonar la <b>u</b> en <i>gü, qü</i> davant de <i>e, i</i>: <mark>pingüí, qüestió, aigüera</mark>. 2) Indicar que la <b>i</b> o la <b>u</b> no formen diftong: <mark>veïna, raïm, diürn</mark>. No es posa en les terminacions -isme, -ista, -ina… ni en els infinitius, gerundis i futurs: <i>lluir, lluint, lluirà</i>.</p>`,
      svg: L.filas("Dues funcions de la dièresi", [
        ["fer sonar la u", "pingüí · qüestió", "var(--pen)"],
        ["trencar diftong", "veïna · raïm", "var(--leaf)"],
        ["sense dièresi", "lluir · egoisme", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>Apòstrof i contracció</h3><p>Els articles <b>el, la</b> i la preposició <b>de</b> s'apostrofen davant de vocal o h: <i>l'arbre, l'hora, d'aigua</i>. No s'apostrofa <i>la</i> davant de i, u àtones: <mark>la universitat, la idea</mark>. Les preposicions <b>a, de, per</b> + <b>el, els</b> es contrauen: <i>al, del, pel, als, dels, pels</i> (però «a l'home»).</p>`,
      svg: L.filas("Apòstrof i contracció", [
        ["Apòstrof", "l'arbre · d'aigua", "var(--pen)"], ["Sense apòstrof", "la universitat", "var(--red)"],
        ["Contracció", "al · del · pel", "var(--leaf)"], ["Excepció", "a l'home", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Revisa l'ortografia en quatre passos",
    svg: L.pasos("Passos per revisar l'ortografia catalana", [
      ["Accent", ["aguda, plana", "o esdrúixola?"], "var(--pen)"],
      ["Obert o tancat", ["à sempre `", "í, ú sempre ´"], "var(--leaf)"],
      ["Diacrític", ["és, més, sé,", "té, què…"], "var(--red)"],
      ["Dièresi i apòstrof", ["pingüí, veïna", "l'hora, la idea"], "var(--inf)"],
    ]),
  },
  video: { id: "MbW4uRvLN64", titulo: "L'accentuació en català", canal: "OK CATALÀ", vistas: 208004, megusta: 4410, busqueda: "ortografia catalana accentuació" },
  quiz: [
    { q: "Quina paraula porta accent?", o: ["cami", "camí", "camì"], a: 1, e: "Aguda acabada en vocal; la i sempre porta accent tancat." },
    { q: "La «a» accentuada sempre porta accent…", o: ["obert (à)", "tancat (á)", "cap"], a: 0, e: "En català estàndard: à." },
    { q: "Quina paraula NO porta accent diacrític des del 2017?", o: ["més", "dona", "té"], a: 1, e: "«Dona» ja no s'accentua." },
    { q: "Quina paraula porta dièresi?", o: ["pinguí", "pingüí", "pingui"], a: 1, e: "La u ha de sonar: gü." },
    { q: "Quina forma és correcta?", o: ["l'universitat", "la universitat", "l universitat"], a: 1, e: "La no s'apostrofa davant de u àtona." },
  ],
  examen: [
    { q: "«Fàcil» porta accent perquè és…", o: ["plana no acabada en vocal, -s, -en, -in", "aguda acabada en vocal", "esdrúixola"], a: 0, e: "Les planes s'accentuen quan no acaben com les agudes accentuades." },
    { q: "Contracció correcta de «de + els»:", o: ["dels", "d'els", "dals"], a: 0, e: "de + els = dels." },
    { q: "Quina forma verbal NO porta dièresi?", o: ["lluir", "veïna", "raïm"], a: 0, e: "Els infinitius en -ir no porten dièresi." },
  ],
  feynman: ["Quan s'accentuen les agudes i les planes", "Com sé si l'accent és obert o tancat", "Cinc accents diacrítics actuals", "Les dues funcions de la dièresi"],
  mapa: mapa("ORTOGRAFIA", "var(--eso)", [
    ["Accentuació", "agudes · planes · esdrúixoles", "var(--pen)"],
    ["Obert / tancat", "à · è é · í · ò ó · ú", "var(--leaf)"],
    ["Diacrítics", "15 des del 2017", "var(--red)"],
    ["Dièresi i apòstrof", "pingüí · l'hora", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Agudes amb accent", "Les que acaben en vocal, vocal + s, -en, -in: cafè, camí, també."],
    ["Accent de la a, i, u", "à sempre oberta; í i ú sempre tancades."],
    ["Diacrítics (2017)", "15: bé, déu, és, mà, més, món, pèl, què, sé, sí, sòl, són, té, ús, vós."],
    ["Dièresi", "Fa sonar la u (pingüí) o trenca un diftong (veïna)."],
    ["Contraccions", "al, als, del, dels, pel, pels (a / de / per + el / els)."],
  ],
  familias: ["Feu un dictat curt en català i corregiu-lo junts amb les regles del tema.", "Busqueu en cartells del carrer paraules amb dièresi o apòstrof.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: normes ortogràfiques vigents (Ortografia catalana, IEC 2017) i revisió de textos (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Concurs de diacrítics amb frases de doble sentit.", "Dictat entre iguals amb correcció per regles.", "Revisió ortogràfica de textos publicats a les xarxes del centre."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Ortografia catalana (2017)", url: "https://www.iec.cat/llengua/documents/ortografia_catalana_versio_digital.pdf" },
    { t: "Optimot, consultes lingüístiques", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};
