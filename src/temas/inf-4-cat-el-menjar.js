// Primeros pasos en catalán, Infantil 4 años: El menjar. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, dibujos, charla, mural, ic, vid, R, A, V, N, M, G, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "El menjar",
  minutos: 15,
  objetivos: ["Dir aliments en català: poma, plàtan, llet, pa", "Dir què ens agrada: M'agrada…", "Fer servir Bon profit! i Tinc gana"],
  claves: ["menjar", "poma", "plàtan", "llet", "pa", "aigua", "m'agrada", "bon profit"],
  pregunta: {
    texto: "Què has esmorzat avui? Llet? Pa?",
    respuesta: "Al matí esmorzem: <mark>llet</mark>, <mark>pa</mark>, fruita… Avui aprenem el nom del menjar en català!",
  },
  bloques: [
    {
      html: `<h3>La fruita</h3><p>La <mark>fruita</mark> és dolça i molt sana.</p><p>Hi ha la <b>poma</b>, el <b>plàtan</b>, la <b>pera</b> i el <b>raïm</b>.</p><p>Quina fruita t'agrada més? Menjar fruita cada dia ens fa créixer forts.</p>`,
      svg: dibujos("La fruita: la poma, el plàtan, la pera i el raïm", [["manzana", "poma", R], ["platano", "plàtan", M], ["pera", "pera", V], ["uva", "raïm", N]], { titulo: "La fruita" }),
    },
    {
      html: `<h3>L'esmorzar</h3><p>Al matí fem l'<mark>esmorzar</mark>.</p><p>Bevem <b>llet</b> i mengem <b>pa</b>. De vegades, un <b>ou</b> o un tros de <b>formatge</b>.</p><p>Esmorzar bé ens dona energia per jugar i aprendre.</p>`,
      svg: dibujos("L'esmorzar: llet, pa, ou i formatge", [["leche", "llet", A], ["pan", "pa", M], ["huevo", "ou", V], ["queso", "formatge", R]], { titulo: "L'esmorzar" }),
    },
    {
      html: `<h3>Aigua, si us plau!</h3><p>Quan tenim set, demanem <mark>aigua</mark>.</p><p>Diem: <b>Aigua, si us plau!</b> I quan ens la donen: <b>Gràcies!</b></p><p>Beure aigua és molt important, sobretot després de córrer.</p>`,
      svg: charla("Un nen demana aigua si us plau i la mare li dona: Té! Gràcies!", [["nino", "Aigua, si us plau!", A], ["mama", "Té, aquí la tens!", R], ["nino", "Gràcies!", A]]),
    },
    {
      html: `<h3>M'agrada…</h3><p>Per dir que una cosa ens agrada diem <mark>M'agrada</mark>.</p><p><b>M'agrada la poma!</b> <b>M'agraden els plàtans!</b></p><p>Si una cosa és molt bona, diem <b>Que bo!</b> i ens fem un massatge a la panxa.</p>`,
      svg: svg("Una nena amb una poma diu M'agrada la poma, que bo", `${nino(80, 150, { pose: "canta", c: R, nina: true, s: 1.3 })}${ic("manzana", 118, 96, 1)}${rot(185, 64, "M'agrada", { size: 17, color: R, w: 800 })}${rot(185, 84, "la poma!", { size: 17, color: R, w: 800 })}${rot(185, 124, "Que bo!", { size: 24, color: V, w: 800 })}${suelo(150)}`),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Així podem <mark>demanar menjar</mark> i dir què ens agrada en català.</p><p>Si tenim gana, diem <b>Tinc gana</b>.</p><p>I abans de menjar, tots junts: <b>Bon profit!</b></p>`,
      svg: dibujos("Tinc gana, aigua i bon profit", [["boca_abierta", "Tinc gana", R], ["agua", "aigua", A], ["sopa", "Bon profit!", V]], { titulo: "Frases per menjar" }),
    },
    {
      html: `<h3>Juguem a la botiga</h3><p>Muntem una <mark>botiga</mark> amb menjar de joguina.</p><p>El client diu: <b>Una poma, si us plau!</b></p><p>El botiguer respon: <b>Aquí la tens!</b> I el client: <b>Gràcies, adéu!</b></p>`,
      svg: svg("Una botiga amb fruita al taulell; una nena compra una poma", `<rect x="120" y="90" width="120" height="60" fill="${"#c08a52"}" stroke="var(--ink)" stroke-width="2"/><rect x="114" y="30" width="132" height="16" rx="4" fill="var(--red)"/>${ic("manzana", 140, 78, 0.8)}${ic("platano", 175, 80, 0.8)}${ic("pera", 210, 76, 0.8)}${nino(60, 150, { pose: "brazos", c: V, nina: true, s: 1.1 })}${suelo(150)}${rot(180, 42, "BOTIGA", { size: 12, color: "#fff", w: 800 })}${rot(130, 172, "Una poma, si us plau!", { color: V })}`),
    },
  ],
  figura: {
    titulo: "El menjar",
    svg: mural("Vuit targetes de menjar en català: poma, plàtan, raïm, pera, llet, pa, ou i aigua", [["manzana", "poma", "fruita", R], ["platano", "plàtan", "fruita", M], ["uva", "raïm", "fruita", N], ["pera", "pera", "fruita", V], ["leche", "llet", "per beure", A], ["pan", "pa", "per esmorzar", M], ["huevo", "ou", "de la gallina", V], ["agua", "aigua", "per a la set", A]], "El menjar en català"),
  },
  video: { ...vid("fbEIibeZawI", "Fruites i verdures (videoclip oficial)", "Dàmaris Gelabert", 2435837), busqueda: "menjar cançó infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Com demanes llet en català?", pasos: ["Diem el nom: llet.", "Afegim si us plau."], resultado: "Llet, si us plau!" },
    { enunciado: "Digues que t'agraden els plàtans.", pasos: ["Comencem amb M'agraden.", "Diem el menjar: els plàtans."], resultado: "M'agraden els plàtans!" },
  ],
  errores: [
    "Dir «leche» en lloc de llet, o «pan» en lloc de pa.",
    "Oblidar el si us plau en demanar.",
    "Dir «uva» en lloc de raïm.",
  ],
  ejercicios: [
    { q: "A berenar, digues en català què menges.", sol: "Per a la família: poma, plàtan, pa, llet… ajudeu-lo amb la paraula." },
    { q: "Demana aigua en català.", sol: "Aigua, si us plau!" },
    { q: "Dibuixa la teva fruita preferida i digues M'agrada…", sol: "Per exemple: M'agrada la poma!" },
    { q: "Juga a la botiga i demana fruita.", sol: "Per a la família: «Un plàtan, si us plau!» – «Aquí el tens!»." },
    { q: "Digues Bon profit! abans de dinar.", sol: "Per a la família: feu-ho tots junts a taula." },
    { q: "Separa la fruita dels altres aliments de joguina.", sol: "Poma, plàtan, pera, raïm…" },
  ],
  quiz: [
    { q: "Com es diu «manzana»?", o: ["Poma", "Pera", "Pa"], a: 0, e: "La poma." },
    { q: "La llet és…", o: ["Leche", "Agua", "Pan"], a: 0, e: "Llet: leche." },
    { q: "Abans de menjar diem…", o: ["Bon profit!", "Bona nit!", "Adéu!"], a: 0, e: "Bon profit!" },
    { q: "Si tenim set demanem…", o: ["Aigua", "Pa", "Formatge"], a: 0, e: "Aigua, si us plau." },
    { q: "Com es diu «pan»?", o: ["Pa", "Pi", "Peu"], a: 0, e: "El pa." },
    { q: "M'agrada vol dir…", o: ["Me gusta", "Tengo sed", "No quiero"], a: 0, e: "M'agrada: me gusta." },
  ],
  examen: [
    { q: "El raïm és…", o: ["La uva", "La pera", "El huevo"], a: 0, e: "Raïm: uva." },
    { q: "Tinc gana vol dir…", o: ["Tengo hambre", "Tengo sueño", "Tengo frío"], a: 0, e: "Tinc gana." },
    { q: "L'ou el pon…", o: ["La gallina", "El gat", "El peix"], a: 0, e: "La gallina pon ous." },
  ],
  feynman: ["Digues quatre menjars en català", "Demana una cosa amb si us plau i dona les gràcies"],
  mapa: mapa("EL MENJAR", "var(--inf)", [
    ["Fruita", "poma, plàtan, raïm", R],
    ["Esmorzar", "llet, pa, ou", A],
    ["Beure", "aigua", V],
    ["Frases", "M'agrada · Bon profit!", N],
  ], 220),
  tarjetas: [
    ["Com es diu «manzana»?", "Poma"],
    ["Com es diu «plátano»?", "Plàtan"],
    ["Com es diu «leche»?", "Llet"],
    ["Com es diu «pan»?", "Pa"],
    ["Com es diu «agua»?", "Aigua"],
    ["Què diem abans de menjar?", "Bon profit!"],
  ],
  familias: [
    "Al mercat, digueu el nom de la fruita en català: pomes, plàtans, raïm.",
    "A l'esmorzar, pregunteu: «Llet o aigua?».",
    "Digueu Bon profit! abans de cada àpat.",
    "Jugueu a la botiga amb menjar de joguina i demaneu amb si us plau.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, vocabulari d'aliments, expressió de gustos (m'agrada) i fórmules de cortesia; vincle amb hàbits d'alimentació saludable (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["Racó de la botiga amb menjar de joguina.", "Esmorzar a la classe: cadascú diu la seva fruita.", "Cançó de fruites amb targetes."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
