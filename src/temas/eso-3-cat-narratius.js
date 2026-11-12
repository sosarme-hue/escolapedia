// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Textos narratius i descriptius",
  minutos: 50,
  objetivos: ["Reconèixer els elements i l'estructura d'una narració", "Distingir els tipus de narrador", "Escriure descripcions ordenades de persones, llocs i objectes"],
  claves: ["narració", "narrador", "personatges", "espai", "temps", "plantejament", "nus", "desenllaç", "descripció", "retrat", "adjectius"],
  pregunta: {
    texto: "«Feia una nit freda i fosca. De sobte, algú va trucar a la porta.» Quina part d'aquestes dues frases descriu i quina narra?",
    respuesta: "La primera frase <b>descriu</b>: ens diu com era la nit. La segona <b>narra</b>: explica un fet que passa i fa avançar la història. Els bons relats <mark>combinen narració i descripció</mark>: la descripció crea l'ambient i la narració aporta l'acció.",
  },
  bloques: [
    {
      html: `<h3>Què és narrar</h3><p>Un <b>text narratiu</b> explica uns <mark>fets</mark>, reals o imaginaris, que els passen a uns <b>personatges</b> en un <b>espai</b> i un <b>temps</b> determinats. Qui els explica és el <b>narrador</b>. Narrem quan expliquem un conte, una notícia, un acudit o què hem fet el cap de setmana. Les marques típiques són els verbs d'acció en passat i els connectors temporals: «aquell dia», «després», «finalment».</p>`,
      svg: L.filas("Elements de la narració", [
        ["Narrador", "qui explica", "var(--pen)"],
        ["Personatges", "a qui li passa", "var(--red)"],
        ["Espai i temps", "on i quan", "var(--leaf)"],
        ["Acció", "què passa", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>L'estructura: plantejament, nus i desenllaç</h3><p>La majoria de narracions tenen tres parts. Al <b>plantejament</b> es presenten els personatges i la situació inicial. Al <b>nus</b> apareix un <mark>conflicte</mark> o problema que complica les coses i manté la intriga. Al <b>desenllaç</b> el conflicte es resol, bé o malament. Alguns relats comencen pel mig de l'acció o deixen el final obert.</p>`,
      svg: L.linea("Estructura de la narració", [
        ["1", "plantejament: qui, on, quan", "var(--pen)"],
        ["2", "nus: apareix el conflicte", "var(--red)"],
        ["3", "desenllaç: es resol", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Els tipus de narrador</h3><p>El narrador pot ser <b>intern</b>, si és un personatge i parla en <b>primera persona</b> («Vaig obrir la porta»): pot ser el protagonista o un testimoni. O pot ser <b>extern</b>, si no participa en la història i narra en <b>tercera persona</b> («La Júlia va obrir la porta»). El narrador extern <mark>omniscient</mark> ho sap tot, fins i tot el que pensen els personatges; l'observador només explica el que es veu.</p>`,
      svg: L.filas("Tipus de narrador", [
        ["Protagonista", "1a persona: «vaig obrir»", "var(--red)"],
        ["Testimoni", "1a persona, ho veu", "var(--inf)"],
        ["Omniscient", "3a persona, ho sap tot", "var(--pen)"],
        ["Observador", "3a persona, només veu", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Què és descriure</h3><p><b>Descriure</b> és explicar <mark>com és</mark> una persona, un animal, un lloc, un objecte o una situació. Les descripcions fan servir molts <b>adjectius</b>, verbs com «ser», «estar», «tenir» o «semblar», i <b>comparacions</b>. Poden ser <b>objectives</b>, com la d'un diccionari o un catàleg, o <b>subjectives</b>, quan l'autor hi afegeix les seves impressions i sentiments.</p>`,
      svg: L.frase("Una descripció subjectiva", [
        ["La casa", "", "var(--line)"], ["era vella", "adjectiu", "var(--pen)"],
        ["i trista,", "valoració", "var(--red)"], ["com un ocell ferit.", "comparació", "var(--leaf)"],
      ], "descripció subjectiva"),
    },
    {
      html: `<h3>Descriure persones: el retrat</h3><p>Quan descrivim una persona podem fer una <b>prosopografia</b> (com és físicament), una <b>etopeia</b> (com és de caràcter) o un <b>retrat</b>, que combina totes dues. Si exagerem els trets per fer riure, és una <mark>caricatura</mark>. Per ordenar-la, segueix un ordre: de dalt a baix, de l'aspecte general als detalls, o del físic al caràcter.</p>`,
      svg: L.filas("Tipus de descripció de persones", [
        ["Prosopografia", "aspecte físic", "var(--pen)"],
        ["Etopeia", "caràcter", "var(--leaf)"],
        ["Retrat", "físic i caràcter", "var(--inf)"],
        ["Caricatura", "trets exagerats", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Narrar i descriure",
    svg: L.columnas("Comparació entre narració i descripció", [
      ["narrar és", "QUÈ PASSA", ["fets en el temps,", "verbs d'acció"], "var(--pen)"],
      ["descriure és", "COM ÉS", ["trets i qualitats,", "adjectius"], "var(--leaf)"],
      ["junts creen", "UN RELAT", ["acció", "i ambient"], "var(--red)"],
    ]),
  },
  video: { id: "YaEVCXcqaZs", titulo: "Tipos de narradores", canal: "Wayraeduca", vistas: 996353, megusta: 0, busqueda: "tipus de narrador" },
  quiz: [
    { q: "On apareix el conflicte d'una narració?", o: ["Al nus", "Al plantejament", "Al títol"], a: 0, e: "El nus complica la situació." },
    { q: "«Vaig sentir un soroll i vaig córrer» té un narrador…", o: ["intern", "omniscient", "observador"], a: 0, e: "Primera persona." },
    { q: "El narrador que sap el que pensen tots els personatges és…", o: ["omniscient", "testimoni", "protagonista"], a: 0, e: "Ho sap tot." },
    { q: "Descriure el caràcter d'una persona és fer una…", o: ["etopeia", "prosopografia", "caricatura"], a: 0, e: "Ètic, caràcter." },
    { q: "Quina categoria abunda a les descripcions?", o: ["L'adjectiu", "La preposició", "La conjunció"], a: 0, e: "Expressa qualitats." },
  ],
  examen: [
    { q: "Al plantejament es presenten…", o: ["els personatges i la situació", "la solució", "la moral"], a: 0, e: "És l'inici." },
    { q: "«La Júlia va entrar sense fer soroll» té narrador…", o: ["extern", "intern", "protagonista"], a: 0, e: "Tercera persona." },
    { q: "Una descripció de catàleg és…", o: ["objectiva", "subjectiva", "una caricatura"], a: 0, e: "Sense opinions." },
  ],
  feynman: ["Els quatre elements de la narració", "Les tres parts d'un relat", "La diferència entre narrador intern i extern", "Prosopografia, etopeia i retrat"],
  mapa: mapa("NARRAR I DESCRIURE", "var(--eso)", [
    ["Elements", "narrador · personatges…", "var(--pen)"],
    ["Estructura", "plantejament · nus · desenllaç", "var(--red)"],
    ["Narrador", "intern · extern", "var(--leaf)"],
    ["Descripció", "objectiva · subjectiva", "var(--inf)"],
  ]),
  tarjetas: [
    ["Nus", "Part de la narració on apareix el conflicte."],
    ["Narrador omniscient", "Narrador extern que ho sap tot, fins i tot els pensaments dels personatges."],
    ["Narrador testimoni", "Personatge secundari que explica en primera persona el que ha vist."],
    ["Prosopografia", "Descripció de l'aspecte físic d'una persona."],
    ["Etopeia", "Descripció del caràcter i la manera de ser d'una persona."],
  ],
  familias: ["Demaneu-li que us expliqui una pel·lícula que hagi vist i identifiqueu-ne junts el plantejament, el nus i el desenllaç.", "Jugueu a descriure una persona de la família sense dir-ne el nom fins que els altres l'endevinin.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Gèneres discursius: la narració i la descripció; elements, estructura, narrador i recursos lingüístics (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Reescriure un conte canviant el tipus de narrador.", "Escriure el retrat d'un personatge de ficció a partir d'una imatge.", "Fer una cadena de microrelats on cada alumne afegeix una part de l'estructura."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Analitzar el temps i el ritme d'una narració", "Fer servir recursos expressius en la descripció"],
  bloques: [
    { tras: "Què és narrar", html: `<h3>Els personatges</h3><p>Els personatges són els éssers que participen en l'acció. El <b>protagonista</b> és el personatge principal, i sovint té un <b>antagonista</b> que s'hi oposa. Al seu voltant hi ha personatges <b>secundaris</b>, que l'ajuden o el dificulten, i personatges <b>de fons</b>, que gairebé no intervenen.</p><p>També els podem classificar segons com evolucionen: els personatges <mark>rodons</mark> són complexos i canvien al llarg de la història (aprenen, maduren, s'equivoquen), mentre que els personatges <mark>plans</mark> tenen pocs trets i no canvien, com el dolent típic d'un conte. El narrador ens els fa conèixer pel que fan, pel que diuen i pel que pensen, i també pel que en diuen els altres personatges.</p>` },
    { tras: "L'estructura: plantejament, nus i desenllaç", html: `<h3>El temps de la narració</h3><p>Una història pot durar uns minuts o molts anys. L'autor decideix com l'explica. Si segueix l'ordre dels fets, el relat és <b>lineal</b>. Però també pot alterar-lo amb una <mark>analepsi</mark> o <i>flashback</i> (un salt enrere per explicar fets del passat) o amb una <b>prolepsi</b> (un avançament del que passarà). Algunes narracions comencen <i>in medias res</i>, és a dir, enmig de l'acció.</p><p>El <b>ritme</b> també canvia: amb el <b>resum</b> s'expliquen anys en una línia («Van passar deu anys»); amb l'<b>escena</b>, sobretot amb diàlegs, el temps del relat i el de la història gairebé coincideixen; i amb l'<b>el·lipsi</b> se salten fets que no interessen.</p>` },
    { tras: "Els tipus de narrador", html: `<h3>Les veus dels personatges: estil directe i indirecte</h3><p>El narrador pot reproduir les paraules dels personatges de dues maneres. En l'<b>estil directe</b> les copia tal com les han dit, amb guió o cometes: <i>—Tinc por —va dir en Pau.</i> En l'<b>estil indirecte</b> les explica ell amb un verb de dicció i una oració introduïda per «que»: <i>En Pau va dir que tenia por.</i></p>${L.tb(["Estil directe", "Estil indirecte"], [["—Vindré demà —va dir.", "Va dir que vindria l'endemà."], ["—Aquí fa fred —va dir.", "Va dir que allà feia fred."], ["—Vols venir? —li va preguntar.", "Li va preguntar si volia anar-hi."]])}<p>Fixa't que en passar a l'indirecte canvien els <mark>temps verbals, les persones i els adverbis</mark> (aquí → allà, demà → l'endemà).</p>` },
    { tras: "Què és descriure", html: `<h3>Recursos per descriure millor</h3><p>Una bona descripció fa que el lector <b>vegi</b> el que descrivim. Per aconseguir-ho, fes servir els <mark>cinc sentits</mark>: no només com és, sinó també com sona, com fa olor, quin tacte té o quin gust té. Afegeix-hi recursos expressius:</p><ul><li><b>Comparació</b>: «Tenia els ulls blaus com el mar».</li><li><b>Metàfora</b>: «Els seus ulls eren dos trossos de mar».</li><li><b>Personificació</b>: «El vent udolava a la finestra».</li><li><b>Hipèrbole</b>: «Feia una calor que fonia les pedres».</li></ul><p>I tria adjectius precisos: «una porta grinyolaire i esquerdada» diu molt més que «una porta vella».</p>` },
    { tras: "Descriure persones: el retrat", html: `<h3>Descriure llocs i objectes</h3><p>Per descriure un <b>lloc</b>, cal seguir un <mark>ordre espacial</mark>: de més a prop a més lluny, de dalt a baix, d'esquerra a dreta o des de l'entrada cap a l'interior. Fes servir expressions de lloc com «al fons», «a mà dreta», «damunt de», «al costat de». Si el lloc és important per a la història, la descripció pot transmetre una sensació: tranquil·litat, misteri, por.</p><p>Per descriure un <b>objecte</b>, explica primer què és i per a què serveix, i després la forma, la mida, el color, el material i les parts. Aquest tipus de descripció, més objectiva, és la que trobem en catàlegs, en anuncis de segona mà o en manuals d'instruccions.</p>` },
  ],
  videos: [
    ["Què és narrar", L.vid("kpJVOSmcXX0", "El text narratiu", "Laura Esteruelas", 6601)],
    ["Descriure persones: el retrat", L.vid("TqV6dIXYDA4", "La descripció de persones (valencià)", "Aula de Emma", 17072)],
  ],
  ejemplos: [
    ["Identifica el narrador: «La Laia no sabia que, darrere la porta, l'esperava el seu germà amb una sorpresa.»", ["Està en tercera persona («la Laia no sabia»).", "El narrador sap coses que el personatge no sap (la sorpresa).", "Per tant, és extern i ho sap tot."], "narrador extern omniscient."],
    ["Passa a estil indirecte: —Demà anirem a la platja —va dir la mare.", ["Verb de dicció + «que»: «La mare va dir que…».", "Canviar el temps verbal: «anirem» → «anirien».", "Canviar l'adverbi: «demà» → «l'endemà»."], "La mare va dir que l'endemà anirien a la platja."],
    ["Millora la descripció: «El meu avi és alt i simpàtic.»", ["Afegir trets físics concrets.", "Afegir un tret de caràcter amb un exemple.", "Afegir un recurs expressiu."], "«El meu avi és alt i prim com un fus, té les mans grosses de pagès i sempre explica acudits que fan riure tothom.»"],
  ],
  errores: [
    "Confondre l'autor (persona real) amb el narrador (veu que explica la història).",
    "Pensar que tot narrador en primera persona és el protagonista: pot ser un testimoni.",
    "Fer descripcions desordenades, saltant del cap als peus i tornant als ulls.",
    "Barrejar temps verbals sense motiu en una narració en passat.",
    "Oblidar el guió de diàleg o fer-lo servir malament en l'estil directe.",
  ],
  ejercicios: [
    ["Escriu els quatre elements de la narració.", "Narrador, personatges, espai i temps, i acció."],
    ["Quina part de l'estructura és «Al final, el drac va fugir i el poble va tornar a ser feliç»?", "El desenllaç."],
    ["Quin tipus de narrador hi ha a «Vaig veure com el meu amic queia de la bici»?", "Narrador intern testimoni (explica el que li passa a un altre)."],
    ["Què és una analepsi?", "Un salt enrere en el temps per explicar fets del passat (flashback)."],
    ["Passa a estil directe: «La Marta va dir que estava cansada».", "—Estic cansada —va dir la Marta."],
    ["Escriu una prosopografia de dues línies d'un company imaginari.", "Resposta oberta. Ha de descriure només l'aspecte físic, amb ordre."],
    ["Escriu una etopeia breu d'un personatge que coneguis.", "Resposta oberta. Ha de descriure el caràcter, amb algun exemple de conducta."],
    ["Escriu una comparació i una personificació sobre la pluja.", "Per exemple: «La pluja queia com fils de plata» i «La pluja picava a la finestra per entrar»."],
    ["Quin ordre seguiries per descriure la teva habitació?", "Un ordre espacial: des de la porta cap a l'interior, o d'esquerra a dreta."],
    ["Diferència entre personatge rodó i pla.", "El rodó és complex i evoluciona; el pla té pocs trets i no canvia."],
  ],
  quiz: [
    ["Un salt enrere en el temps s'anomena…", ["analepsi", "prolepsi", "el·lipsi"], 0, "Flashback."],
    ["«Va dir que vindria» és estil…", ["indirecte", "directe", "poètic"], 0, "Amb «que»."],
    ["El personatge que s'oposa al protagonista és…", ["l'antagonista", "el narrador", "el secundari"], 0, "El rival."],
    ["«El vent udolava» és una…", ["personificació", "comparació", "hipèrbole"], 0, "El vent actua com un ésser viu."],
    ["Un personatge que evoluciona al llarg del relat és…", ["rodó", "pla", "de fons"], 0, "És complex."],
  ],
  tarjetas: [
    ["Analepsi", "Salt enrere en el temps del relat (flashback)."],
    ["Estil indirecte", "El narrador explica el que diu un personatge amb un verb i «que»."],
    ["Personatge rodó", "Personatge complex que evoluciona al llarg de la història."],
  ],
});
