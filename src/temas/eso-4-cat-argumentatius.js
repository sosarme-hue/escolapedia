// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Textos argumentatius",
  minutos: 40,
  objetivos: ["Reconèixer la tesi i els arguments d'un text", "Conèixer els tipus d'arguments i l'estructura argumentativa", "Fer servir connectors per escriure un article d'opinió"],
  claves: ["tesi", "argument", "contraargument", "conclusió", "connectors", "article d'opinió", "estructura deductiva"],
  pregunta: {
    texto: "«L'institut hauria de començar a les nou del matí.» Si volguessis convèncer la direcció, n'hi hauria prou de dir-ho?",
    respuesta: "No. Necessites <mark>arguments</mark>: dades sobre el son dels adolescents, l'opinió d'experts, exemples d'altres centres… Un <b>text argumentatiu</b> defensa una opinió (la <b>tesi</b>) amb raons per convèncer el receptor.",
  },
  bloques: [
    {
      html: `<h3>Què és argumentar?</h3><p>Argumentar és <mark>defensar una opinió amb raons</mark> per convèncer algú. Ho fem en debats, articles d'opinió, cartes al director, anuncis o discursos. Un text argumentatiu té una <b>tesi</b> (la idea que es defensa), un <b>cos argumentatiu</b> i una <b>conclusió</b>.</p>`,
      svg: L.frase("Estructura: tesi, argument, contraargument i conclusió", [
        ["Cal més verd", "tesi", "var(--red)"], ["perquè refresca", "argument", "var(--pen)"],
        ["tot i que costa,", "contraargument", "var(--muted)"], ["per tant…", "conclusió", "var(--leaf)"],
      ], "tesi + raons + conclusió"),
    },
    {
      html: `<h3>Tipus d'arguments</h3><p>D'<b>autoritat</b> (ho diu un expert o una institució), de <b>dades</b> (xifres i estudis), d'<b>exemple</b> (un cas concret), de <b>causa-efecte</b>, d'<b>experiència personal</b> i de <b>majoria</b> («ho pensa gairebé tothom»). Els de dades i autoritat solen ser els més sòlids.</p>`,
      svg: L.tabla("Tipus d'arguments amb exemple", ["Argument", "Exemple"], [
        ["Dades", "el 70 % dels…"], ["Autoritat", "segons l'OMS…"], ["Exemple", "a Finlàndia…"], ["Experiència", "a mi em va passar…"],
      ]),
    },
    {
      html: `<h3>L'estructura</h3><p>Si la tesi va al començament, l'estructura és <mark>deductiva</mark> (tesi → arguments). Si va al final, és <mark>inductiva</mark> (arguments → tesi). Si apareix al principi i es repeteix al final, és <b>enquadrada</b>.</p>`,
      svg: L.filas("Estructura deductiva, inductiva i enquadrada", [
        ["Deductiva", "tesi → arguments", "var(--pen)"],
        ["Inductiva", "arguments → tesi", "var(--leaf)"],
        ["Enquadrada", "tesi → arguments → tesi", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Els connectors</h3><p>Ajuden el lector a seguir el raonament. <b>Afegir</b>: a més, també, així mateix. <b>Oposar</b>: però, en canvi, tanmateix, no obstant això. <b>Causa</b>: perquè, ja que, atès que. <b>Conseqüència</b>: per tant, així doncs. <b>Concloure</b>: en definitiva, en resum.</p>`,
      svg: L.filas("Connectors per funció", [
        ["Afegir", "a més · així mateix", "var(--leaf)"], ["Oposar", "tanmateix · en canvi", "var(--red)"],
        ["Conseqüència", "per tant", "var(--pen)"], ["Concloure", "en definitiva", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Escriure un article d'opinió</h3><p>1) Tria un tema i la teva <b>tesi</b>. 2) Busca <b>tres arguments</b> de tipus diferents. 3) Pensa un <b>contraargument</b> i rebat-lo. 4) Escriu una <b>conclusió</b> que reforci la tesi. Fes servir la primera persona amb moderació i expressions com <mark>«al meu parer», «considero que», «és evident que»</mark>.</p>`,
      svg: L.filas("Passos per escriure un article d'opinió", [
        ["1", "tria tema i tesi", "var(--red)"], ["2", "tres arguments diferents", "var(--pen)"],
        ["3", "contraargument i rèplica", "var(--muted)"], ["4", "conclusió que reforça", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com es construeix una argumentació",
    svg: L.pasos("Passos de l'argumentació: tesi, arguments, contraargument i conclusió", [
      ["Tesi", ["L'institut hauria", "de començar a les 9."], "var(--red)"],
      ["Arguments", ["dades sobre el son,", "opinió d'experts"], "var(--pen)"],
      ["Contraargument", ["«i els horaris", "de les famílies?»"], "var(--muted)"],
      ["Conclusió", ["En definitiva,", "cal canviar-ho."], "var(--leaf)"],
    ]),
  },
  video: { id: "T632IpYaVwo", titulo: "Com usar els connectors en català: trucs i exemples", canal: "Parlem d'escriure en català", vistas: 88242, megusta: 0, busqueda: "text argumentatiu català connectors" },
  quiz: [
    { q: "La idea principal que defensa un text argumentatiu és…", o: ["la tesi", "el tema", "el títol"], a: 0, e: "La tesi és l'opinió que es vol demostrar." },
    { q: "«Segons l'Organització Mundial de la Salut…» és un argument…", o: ["d'autoritat", "de majoria", "d'experiència"], a: 0, e: "Recolza la tesi en una institució experta." },
    { q: "Si la tesi apareix al final, l'estructura és…", o: ["deductiva", "inductiva", "enquadrada"], a: 1, e: "Inductiva: dels arguments a la tesi." },
    { q: "Quin connector expressa oposició?", o: ["a més", "tanmateix", "per tant"], a: 1, e: "Tanmateix = però, no obstant això." },
    { q: "Recollir l'opinió contrària per rebatre-la és fer servir un…", o: ["contraargument", "exemple", "tecnicisme"], a: 0, e: "Demostra que coneixes l'altra postura." },
  ],
  examen: [
    { q: "«Per tant» introdueix…", o: ["una conseqüència", "una causa", "una oposició"], a: 0, e: "Connector consecutiu." },
    { q: "Un argument de majoria és…", o: ["«ho pensa gairebé tothom»", "«segons un estudi»", "«a mi em va passar»"], a: 0, e: "Es recolza en l'opinió de molta gent." },
    { q: "L'estructura enquadrada…", o: ["presenta la tesi al principi i al final", "no té tesi", "només té arguments"], a: 0, e: "Tesi → arguments → tesi." },
  ],
  feynman: ["Què és la tesi i què són els arguments", "Quatre tipus d'arguments amb exemple", "Les tres estructures argumentatives", "Els passos per escriure un article d'opinió"],
  mapa: mapa("ARGUMENTAR", "var(--eso)", [
    ["Tesi", "l'opinió que es defensa", "var(--red)"],
    ["Arguments", "dades · autoritat · exemple", "var(--pen)"],
    ["Estructura", "deductiva · inductiva", "var(--leaf)"],
    ["Connectors", "tanmateix · per tant", "var(--inf)"],
  ]),
  tarjetas: [
    ["Què és la tesi?", "L'opinió principal que defensa un text argumentatiu."],
    ["Argument d'autoritat", "Recolzar la tesi en el que diu un expert o una institució."],
    ["Estructura deductiva", "La tesi va al principi i després s'argumenta."],
    ["Contraargument", "Opinió contrària que es recull per rebatre-la."],
    ["Connectors d'oposició", "Però, en canvi, tanmateix, no obstant això."],
  ],
  familias: ["Trieu un tema de casa i demaneu-li que defensi la seva postura amb tres arguments de tipus diferents.", "Llegiu junts un article d'opinió en català i busqueu-hi la tesi.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Gèneres discursius: la seqüència argumentativa, tipus d'arguments i connectors (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Debat exprés amb tesi, dos arguments i un contraargument.", "Classificar arguments d'articles d'opinió de la premsa en català.", "Escriure una carta al director sobre un problema del barri."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot: connectors (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Detectar fal·làcies en debats i a les xarxes", "Reconèixer els trets lingüístics de l'argumentació", "Escriure un article d'opinió de cinc paràgrafs"],
  bloques: [
    { tras: "Què és argumentar?", html: `<h3>Tema, tesi i arguments</h3><p>Per entendre un text argumentatiu cal distingir tres conceptes. El <b>tema</b> és de què parla («els deures»). La <b>tesi</b> és què en pensa l'autor, la idea que defensa («els deures s'haurien de reduir a la meitat»). Els <b>arguments</b> són les raons que fa servir per convèncer («els alumnes dormen poc», «un estudi finlandès mostra…»).</p><p>Sovint també hi ha <b>contraarguments</b>, és a dir, les raons de l'opinió contrària, que l'autor recull per rebatre-les. Una bona manera de trobar la tesi és preguntar-se: <mark>de què em vol convèncer aquest text?</mark> La resposta ha de ser una frase que es pugui discutir; si tothom hi està d'acord, no és una tesi.</p>` },
    { tras: "Tipus d'arguments", html: `<h3>Fal·làcies: arguments trampa</h3><p>Una <b>fal·làcia</b> sembla un argument, però no demostra res. Saber-les detectar et protegeix en els debats i a les xarxes socials:</p><ul><li><b>Atac personal</b> (<i>ad hominem</i>): «No li facis cas, que va suspendre física». S'ataca la persona, no la idea.</li><li><b>Generalització precipitada</b>: «El meu cosí va tenir una moto i va caure; les motos són un perill».</li><li><b>Fals dilema</b>: «O estàs amb mi o contra mi». Hi ha més opcions.</li><li><b>Pendent relliscós</b>: «Si avui et deixo sortir, demà voldràs sortir cada dia».</li><li><b>Falsa autoritat</b>: un futbolista opinant de vacunes com si fos metge.</li></ul><p>Un bon argument ha de ser <mark>pertinent, suficient i verificable</mark>.</p>` },
    { tras: "L'estructura", html: `<h3>Trets lingüístics de l'argumentació</h3><p>El text argumentatiu deixa empremtes de l'emissor:</p><ul><li><b>Primera persona</b> i verbs d'opinió: <i>crec, considero, opino, ens sembla</i>.</li><li><b>Adjectius valoratius</b>: <i>inacceptable, imprescindible, injust</i>.</li><li><b>Preguntes retòriques</b>: «De debò volem un planeta sense boscos?»</li><li><b>Modalitzadors</b> que mostren seguretat (<i>sens dubte, és evident que</i>) o prudència (<i>potser, probablement, sembla que</i>).</li><li><b>Connectors</b> de causa, conseqüència i oposició.</li></ul><p>En canvi, el text <b>expositiu</b> evita la primera persona i prefereix les formes impersonals: «es considera», «els científics han demostrat». Comparar aquests trets és una manera ràpida de distingir-los.</p>` },
    { tras: "Els connectors", html: `<h3>Connectors: pronoms i ús correcte</h3>${L.tb(["Funció", "Connectors correctes", "Evita"], [["oposició", "però, tanmateix, no obstant això, en canvi", "*sin embargo"], ["causa", "perquè, ja que, atès que, com que", "*ja que + infinitiu"], ["conseqüència", "per tant, doncs, així doncs, en conseqüència", "*por lo tant"], ["afegir", "a més (a més), així mateix, també", "*ademés"], ["concloure", "en definitiva, en resum, en conclusió", "*en resumides comptes (col·loquial)"], ["exemple", "per exemple, com ara, és a dir", "*o sigui (col·loquial)"]])}<p>Atenció a les <b>interferències</b> del castellà, que en català són incorrectes. A més, el connector <i>no obstant</i> sol és incomplet: cal dir <b>no obstant això</b>. I recorda que <i>ja que</i> va seguit d'un verb conjugat: «ja que <b>plou</b>», no «*ja que ploure».</p>` },
    { tras: "Escriure un article d'opinió", html: `<h3>Model d'article d'opinió</h3><p><i>«<b>Els mòbils, fora de les aules?</b> Cada vegada més instituts prohibeixen el mòbil. Al meu parer, la prohibició total no és la millor solució. En primer lloc, el mòbil és una eina d'aprenentatge: permet buscar informació, fer vídeos o fer servir aplicacions de llengües. A més, segons un informe de la UNESCO, el que importa és com es fa servir la tecnologia, no la tecnologia en si. És cert que distreu i que alguns alumnes en fan un mal ús; tanmateix, això es pot resoldre amb normes clares i acordades. En definitiva, cal educar en l'ús responsable del mòbil, no amagar-lo en un calaix.»</i></p><p>Fixa't en l'estructura: títol, introducció amb tesi, dos arguments, contraargument rebatut i conclusió.</p>` },
  ],
  videos: [
    ["Escriure un article d'opinió", L.vid("3QYq5otisCQ", "Com s'escriu un article d'opinió en català", "Parlem d'escriure en català", 8168)],
  ],
  ejemplos: [
    ["Localitza la tesi i l'estructura: «Segons l'OMS, els adolescents necessiten entre 8 i 10 hores de son. Molts alumnes arriben esgotats a primera hora. Per tant, els instituts haurien de començar més tard.»", ["Busca l'opinió defensada: «els instituts haurien de començar més tard».", "És a l'última frase, introduïda per «per tant».", "El que hi ha abans són arguments: d'autoritat (OMS) i d'experiència."], "tesi al final: estructura inductiva amb arguments d'autoritat i d'experiència."],
    ["Identifica la fal·làcia: «Si deixem que els alumnes triïn una optativa, després voldran triar tots els professors».", ["S'anuncia una cadena de conseqüències cada cop més exagerades.", "No es demostra que una cosa porti a l'altra.", "És una manera de fer por per rebutjar la proposta."], "és una fal·làcia del pendent relliscós."],
    ["Construeix un contraargument rebatut per a la tesi «Cal reciclar a l'institut».", ["Pensa què diria algú en contra: «Reciclar és pesat i ocupa temps».", "Reconeix-ho amb un connector concessiu: «És cert que…».", "Rebat-ho amb un connector d'oposició i una raó."], "«És cert que separar els residus requereix una mica d'esforç; tanmateix, només cal posar tres papereres a cada aula.»"],
  ],
  errores: [
    "Confondre el tema (de què parla) amb la tesi (què en pensa l'autor).",
    "Donar com a argument una opinió sense raons.",
    "Fer servir castellanismes com *sin embargo, *ademés o *por lo tant.",
    "Escriure un text expositiu ple d'opinions personals.",
    "Oblidar la conclusió o fer que contradigui la tesi.",
  ],
  ejercicios: [
    ["Escriu la tesi d'un text que defensa que llegir en paper és millor que en pantalla.", "«Llegir en paper afavoreix més la comprensió que llegir en pantalla.»"],
    ["Quin tipus d'argument és «El 70 % dels joves fa servir xarxes cada dia»?", "Argument de dades (estadístic)."],
    ["Quin tipus d'argument és «La meva germana va començar a fer esport i ara dorm millor»?", "Argument d'experiència personal o d'exemple."],
    ["Identifica la fal·làcia: «No pots parlar del canvi climàtic perquè vas amb avió».", "Atac personal (ad hominem)."],
    ["Corregeix: «Feia fred; sin embargo, vam sortir.»", "«Feia fred; tanmateix (no obstant això), vam sortir.»"],
    ["Completa amb connectors: «Plou; ___, anirem al parc. ___, portarem paraigua.»", "tanmateix / per tant (per això)."],
    ["Escriu tres trets lingüístics del text argumentatiu.", "Primera persona i verbs d'opinió, adjectius valoratius i preguntes retòriques (també modalitzadors i connectors)."],
    ["Quina estructura té un text amb la tesi al començament i repetida al final?", "Enquadrada."],
    ["Transforma en un argument vàlid: «Tots els meus amics fan servir aquesta aplicació, així que és la millor».", "«Aquesta aplicació gasta menys bateria i no guarda dades personals, segons l'anàlisi d'una associació de consumidors.» (Argument de dades i d'autoritat.)"],
    ["Escriu la conclusió d'un text que defensa més zones verdes al barri.", "«En definitiva, més zones verdes milloren la salut, redueixen la calor i ens fan conviure millor; per això, l'ajuntament hauria de convertir el solar en un parc.»"],
  ],
  quiz: [
    ["«O apruves tot o no serveixes per estudiar» és un…", ["fals dilema", "argument d'autoritat", "argument de dades"], 0, "Presenta només dues opcions."],
    ["Quin connector és correcte en català?", ["tanmateix", "sin embargo", "ademés"], 0, "Els altres són castellanismes."],
    ["La tesi és…", ["l'opinió que es defensa", "el tema", "el títol"], 0, "La idea que es vol demostrar."],
    ["«És cert que…; tanmateix…» serveix per…", ["rebatre un contraargument", "obrir una notícia", "definir"], 0, "Concedeix i refuta."],
    ["El text expositiu prefereix…", ["formes impersonals", "moltes exclamacions", "insults"], 0, "Busca objectivitat."],
  ],
  tarjetas: [
    ["Fal·làcia", "Raonament trampa: atac personal, fals dilema, generalització."],
    ["Contraargument", "Opinió contrària que es recull per rebatre-la: És cert que…; tanmateix…"],
    ["Connectors correctes", "tanmateix, no obstant això, a més, per tant (no *sin embargo, *ademés)."],
  ],
});
