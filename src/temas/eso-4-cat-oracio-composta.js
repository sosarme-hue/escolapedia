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

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comptar bé els verbs, també les perífrasis", "Conèixer tots els nexes coordinants i fer servir bé però, sinó i sinó que", "Puntuar correctament les oracions compostes"],
  bloques: [
    { tras: "Simple o composta", html: `<h3>Verbs que compten i verbs que no</h3><p>Abans de separar proposicions cal comptar bé els verbs. Compta com <b>un sol verb</b>:</p><ul><li>Les <b>perífrasis verbals</b>: «He d'estudiar», «Deu ser tard», «Acaba de ploure», «Sol llegir de nit». (Atenció: «*vaig a sortir» amb valor de futur és un castellanisme; en català diem «sortiré».)</li><li>El <b>passat perifràstic</b>: «Vaig anar» (és un sol temps verbal, el passat).</li><li>Els <b>temps compostos</b>: «Havíem acabat».</li><li>La <b>passiva</b>: «Va ser construït el 1900».</li></ul><p>En canvi, els infinitius, gerundis i participis que funcionen sols poden formar proposicions subordinades: «M'agrada <i>llegir</i>», «<i>Arribant</i> a casa, vaig veure el gat». Truc: <mark>tantes proposicions com verbs en forma personal</mark>, més les formes no personals que en formen una de pròpia.</p>` },
    { tras: "Les coordinades", html: `<h3>Tots els nexes coordinants</h3>${L.tb(["Tipus", "Significat", "Nexes", "Exemple"], [["Copulativa", "suma", "i, ni, també", "Va arribar i es va asseure."], ["Disjuntiva", "elecció", "o, o bé", "El compres o el lloges?"], ["Adversativa", "oposició", "però, sinó (que), tanmateix, en canvi", "Ho vaig intentar, però no vaig poder."], ["Explicativa", "aclariment", "és a dir, o sigui, això és", "És ovípar, és a dir, pon ous."], ["Distributiva", "alternança", "ara… ara, ja… ja, uns… altres", "Uns reien, altres ploraven."], ["Consecutiva o il·lativa", "conseqüència", "per tant, doncs, així doncs", "Penso, per tant, existeixo."]])}<p>Recorda que en català <b>ni</b> pot anar sol davant d'un verb negatiu: «No menja ni deixa menjar».</p>` },
    { tras: "Les coordinades", html: `<h3>Però, sinó i sinó que</h3><p><b>Però</b> expressa una oposició parcial: la primera part continua sent veritat. «És car, però val la pena». <b>Sinó</b> corregeix: la primera part, negativa, queda anul·lada i substituïda per la segona: «No és car, <b>sinó</b> barat». Si el que segueix porta verb conjugat, cal <mark>sinó que</mark>: «No el va comprar, <b>sinó que</b> el va llogar».</p><p>No confonguis <b>sinó</b> (conjunció, una sola paraula) amb <b>si no</b> (condició + negació): «<b>Si no</b> vens, m'enfadaré». Truc: si pots posar-hi una altra paraula entre mig («si tu no vens»), són dues paraules. Tampoc no confonguis <b>perquè</b> (causa o finalitat) amb <b>per què</b> (pregunta): «<b>Per què</b> no vens? <b>Perquè</b> estic cansat».</p>` },
    { tras: "La juxtaposició", html: `<h3>La puntuació de les compostes</h3><ul><li><b>Coma</b> davant de <i>però, sinó, tanmateix</i>: «Volia anar-hi, però no vaig poder».</li><li><b>Sense coma</b> davant de <i>i, ni, o</i> quan uneixen elements d'una sèrie, excepte si canvia el subjecte i hi pot haver confusió: «L'Anna cuinava, i en Lluís i en Pere paraven taula».</li><li><b>Punt i coma</b> davant de <i>tanmateix, no obstant això, per tant</i> en oracions llargues: «Va estudiar molt; tanmateix, va suspendre».</li><li><b>Dos punts</b> en juxtaposades que expressen causa, conseqüència o explicació: «No sortirem: plou a bots i barrals».</li></ul><p>Una bona puntuació fa el text més clar i, en les juxtaposades, és l'única pista que té el lector per entendre la relació entre les idees.</p>` },
    { tras: "Com s'analitza", html: `<h3>Coordinació entre oracions i dins de l'oració</h3><p>Els nexes coordinants no només uneixen proposicions: també uneixen paraules o sintagmes dins d'una oració simple. A «Vaig comprar pa <b>i</b> llet», «i» uneix dos noms que formen un sol complement directe; l'oració continua sent simple perquè només hi ha un verb. A «Vaig comprar pa <b>i</b> en Lluís va portar llet», en canvi, «i» uneix dues proposicions amb verbs diferents.</p><p>Per això, abans de classificar, mira <mark>què uneix el nexe</mark>: si a cada costat hi ha un verb conjugat, és una oració composta; si no, és una coordinació de paraules. Passa molt amb «però» («És petit però valent») i amb «o» («Vols aigua o suc?»).</p>` },
    { tras: "Com s'analitza", html: `<h3>Una primera mirada a la subordinació</h3><p>En la coordinació, les proposicions són independents: a «Plou i fa fred» cap no depèn de l'altra. En la <b>subordinació</b>, en canvi, una proposició fa una funció dins de l'altra, com si fos una paraula. A «Crec <b>que plourà</b>», la proposició «que plourà» és el complement directe de «crec»: si la traiem, l'oració queda incompleta («Crec…» què?).</p><p>Hi ha tres grans tipus de subordinades, que estudiaràs al tema següent: les <b>substantives</b>, que funcionen com un nom i es poden substituir per «això» («Vull <i>que vinguis</i>» → «Vull això»); les <b>adjectives o de relatiu</b>, que complementen un nom com un adjectiu («el llibre <i>que llegeixo</i>»), i les <b>adverbials</b>, que expressen circumstàncies de temps, causa, finalitat, condició… («Vindré <i>quan pugui</i>»). Saber distingir coordinació i subordinació és el primer pas per analitzar qualsevol text.</p>` },
  ],
  videos: [
    ["Tres maneres d'unir proposicions", L.vid("pn_Vb9yiVM8", "L'oració composta: coordinació i subordinació", "Olimpia Moya", 13727)],
    ["Les coordinades", L.vid("1xmgldy--os", "Oracions compostes I: juxtaposades i coordinades", "Aprèn català amb en Jordi", 54610)],
  ],
  ejemplos: [
    ["Analitza: «El meu germà estudia Medicina i la meva cosina treballa en un hospital.»", ["Verbs: estudia, treballa. Dues proposicions.", "Nexe: «i», conjunció coordinant copulativa.", "P1: subjecte «el meu germà», CD «Medicina». P2: subjecte «la meva cosina», CCL «en un hospital»."], "oració composta coordinada copulativa."],
    ["Analitza: «No vull te, sinó que prefereixo un suc.»", ["Verbs: vull, prefereixo. Dues proposicions.", "Nexe «sinó que», adversatiu: la primera proposició és negativa i la segona la corregeix.", "Subjecte el·líptic en totes dues: jo."], "oració composta coordinada adversativa."],
    ["Analitza: «He de llegir aquest llibre; l'examen és dilluns.»", ["«He de llegir» és una perífrasi: un sol verb. «És»: segon verb.", "No hi ha nexe: només punt i coma.", "Valor: la segona proposició explica la causa de la primera."], "oració composta juxtaposada amb valor causal."],
  ],
  errores: [
    "Comptar les perífrasis («he d'anar», «vaig anar») com dos verbs, o fer servir el castellanisme *vaig a sortir per al futur.",
    "Confondre sinó (conjunció) amb si no (condició).",
    "Escriure *sinó amb verb conjugat sense que: «no el va comprar, sinó que el va llogar».",
    "Dir que una oració és coordinada quan no té nexe: sense nexe és juxtaposada.",
    "Posar coma davant de «i» en una enumeració simple.",
  ],
  ejercicios: [
    ["Compta les proposicions: «Hem estat esperant una hora i no ha vingut ningú.»", "Dues: «hem estat esperant» (perífrasi) i «no ha vingut ningú»."],
    ["Classifica: «Ni estudia ni treballa.»", "Coordinada copulativa (ni… ni)."],
    ["Classifica: «El concert va ser curt, però intens.»", "No és composta: només hi ha un verb («va ser»). «Però» uneix dos adjectius."],
    ["Classifica: «És poliglota, és a dir, parla moltes llengües.»", "Coordinada explicativa."],
    ["Completa amb però, sinó o sinó que: «No ho va dir ell, ___ la seva germana» / «No ho va llegir, ___ ho va veure a la tele» / «És tard, ___ continuarem».", "sinó / sinó que / però."],
    ["Puntua: «Plovia molt tanmateix vam sortir a córrer»", "«Plovia molt; tanmateix, vam sortir a córrer.»"],
    ["Escriu una juxtaposada amb valor de causa.", "«Me'n vaig a dormir: estic esgotat.»"],
    ["Completa amb sinó o si no: «___ estudies, no aprovaràs» / «No és vermell, ___ blau».", "Si no / sinó."],
    ["Classifica: «Ara riu, ara plora.»", "Coordinada distributiva (ara… ara)."],
    ["Transforma en coordinada adversativa: «Tenia gana. No va menjar.»", "«Tenia gana, però no va menjar.» (O: «…; tanmateix, no va menjar.»)"],
  ],
  quiz: [
    ["«És a dir» introdueix una coordinada…", ["explicativa", "disjuntiva", "copulativa"], 0, "Aclareix el que s'ha dit."],
    ["«Vaig anar al cine» té…", ["un verb", "dos verbs", "cap verb"], 0, "Passat perifràstic: un sol temps."],
    ["Quina és correcta?", ["No és vermell, sinó blau.", "No és vermell, si no blau.", "No és vermell sinó que blau."], 0, "Sinó corregeix; sense verb, sense que."],
    ["«Uns canten, altres ballen» és coordinada…", ["distributiva", "adversativa", "explicativa"], 0, "Reparteix l'acció."],
    ["«___ no vens? ___ estic cansat.»", ["Per què / Perquè", "Perquè / Per què", "Per que / Perquè"], 0, "Pregunta separada; causa junt."],
  ],
  tarjetas: [
    ["Perífrasis", "Compten com un sol verb: he d'estudiar, acaba de ploure, vaig anar."],
    ["Sinó / si no", "Sinó corregeix (no és A, sinó B); si no és condició."],
    ["Coordinades explicatives", "És a dir, o sigui, això és."],
  ],
});
