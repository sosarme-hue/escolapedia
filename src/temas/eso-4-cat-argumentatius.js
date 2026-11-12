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
