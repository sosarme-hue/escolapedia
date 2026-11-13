// Llengua Catalana 2n de Primària: contes i poemes. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "Contes i poemes",
  minutos: 25,
  objetivos: ["Reconèixer les parts d'un conte: inici, nus i desenllaç", "Saber què és un poema, un vers i una rima", "Gaudir de rondalles, cançons i endevinalles de la tradició catalana"],
  claves: ["conte", "rondalla", "personatge", "inici", "nus", "desenllaç", "poema", "vers", "rima", "endevinalla"],
  pregunta: {
    texto: "Com comencen i com acaben els contes que t'expliquen a casa?",
    respuesta: "Molts comencen amb «<i>Hi havia una vegada</i>» i acaben amb «<i>I vet aquí un gat, vet aquí un gos, aquest conte ja s'ha fos</i>». Són les fórmules dels <mark>contes</mark> en català.",
  },
  bloques: [
    {
      html: `<h3>Què és un conte?</h3><p>Un <mark>conte</mark> és una història curta i <b>inventada</b>.</p><p>Molts comencen amb «<i>Hi havia una vegada</i>» o «<i>Una vegada era un…</i>». I acaben amb «<i>Vet aquí un gat, vet aquí un gos, aquest conte ja s'ha fos</i>».</p><p>Als contes pot passar de tot: animals que parlen, gegants, dracs i bruixes!</p>`,
      svg: frase("Hi havia una vegada… i vet aquí un gat, vet aquí un gos, aquest conte ja s'ha fos", [["Hi havia una vegada…", A], ["/"], ["vet aquí un gat, vet aquí un gos,", R], ["/"], ["aquest conte ja s'ha fos", R]], { titulo: "Així comencen i acaben", fs: 20 }),
      video: V("cconV", "contes en català per a nens"),
    },
    {
      html: `<h3>Les rondalles</h3><p>Les <mark>rondalles</mark> són contes populars que s'expliquen de pares a fills des de fa molts anys.</p><p>N'hi ha de molt coneguts: <i>En Patufet</i>, que era tan petit que es va amagar sota una col. <i>La rateta que escombrava l'escaleta</i>. <i>Els tres porquets</i>.</p><p>I a Sant Jordi expliquem la llegenda del cavaller, la princesa i el drac!</p>`,
      svg: dibujos("Rondalles: en Patufet, la rateta i els tres porquets", [["nino", "Patufet", R], ["raton", "la rateta", A], ["cerdo", "tres porquets", Ve]], { titulo: "Rondalles de casa nostra" }),
    },
    {
      html: `<h3>Els personatges</h3><p>Els <mark>personatges</mark> són els qui surten al conte. Poden ser persones, animals o éssers màgics.</p><p>El <b>protagonista</b> és el més important: a ell li passa l'aventura. En Patufet és el protagonista del seu conte.</p><p>A vegades hi ha un personatge que fa nosa, com el <b>llop</b>. I d'altres que ajuden!</p>`,
      svg: dibujos("Personatges: la Caputxeta, el llop i l'àvia", [["nina", "Caputxeta", R], ["lobo", "llop", K], ["abuela", "àvia", A]], { titulo: "Qui surt al conte?", nota: "La protagonista és la Caputxeta" }),
    },
    {
      html: `<h3>Les tres parts</h3><p>Els contes tenen <mark>tres parts</mark>.</p><p><b>Inici</b>: es presenten els personatges i el lloc. <i>Hi havia una vegada tres porquets…</i></p><p><b>Nus</b>: apareix un problema. <i>El llop bufa i tira les cases…</i></p><p><b>Desenllaç</b>: el problema es resol i s'acaba la història. <i>La casa de totxos aguanta!</i></p>`,
      svg: lista("Inici: qui i on; nus: el problema; desenllaç: com acaba", [["Inici: qui i on", Ve], ["Nus: el problema", R], ["Desenllaç: com acaba", A]], { titulo: "Les parts del conte", marca: "n" }),
    },
    {
      html: `<h3>Què és un poema?</h3><p>Un <mark>poema</mark> és un text escrit perquè <b>soni bonic</b>.</p><p>S'escriu en <b>línies curtes</b>. Cada línia es diu <b>vers</b>. Un grup de versos és una <b>estrofa</b>.</p><p>Molts poemes tenen <mark>rima</mark>: els versos acaben amb un so semblant. <i>Lluna</i> rima amb <i>cap ni una</i>; <i>sol</i> rima amb <i>cargol</i>.</p>`,
      svg: parejas("Lluna rima amb una; sol rima amb cargol", [["luna", "lluna", null, "una"], ["sol", "sol", "caracol", "cargol"]], { izq: "paraula", der: "rima", color: A, color2: R, flecha: "♪" }),
    },
    {
      html: `<h3>Cançons i poemes populars</h3><p>Hi ha poemes i cançons que tothom sap de memòria.</p><p>«<i>Cargol, treu banya, puja a la muntanya…</i>» «<i>Plou i fa sol, les bruixes es pentinen…</i>» «<i>Sol, solet, vine'm a veure, vine'm a veure…</i>»</p><p>Tenen <mark>ritme</mark> i rima, i per això es recorden tan bé. Pregunta als avis quines en saben!</p>`,
      svg: frase("Cargol, treu banya, puja a la muntanya", [["Cargol, treu banya,", Ve], ["/"], ["puja a la muntanya…", Ve]], { titulo: "Una cançó popular", nota: "Ritme i rima per recordar-la", fs: 22 }),
      video: V("cconB"),
    },
    {
      html: `<h3>Les endevinalles</h3><p>Una <mark>endevinalla</mark> descriu una cosa <b>sense dir el nom</b>. Tu l'has d'endevinar.</p><p>Solen tenir rima i donar pistes: el color, la forma, per a què serveix.</p><p>«<i>Tinc agulles i no cuso, tinc números i no compto.</i>» Què és? El <b>rellotge</b>! Inventa'n tu una d'un animal o d'una fruita.</p>`,
      svg: dibujos("Endevinalla: tinc agulles i no cuso, tinc números i no compto: el rellotge", [["interrogacion", "Què és?", A], ["reloj", "el rellotge!", R]], { titulo: "Agulles i números…", nota: "Té agulles i números, però no cus ni compta" }),
      video: V("cconB2"),
    },
    {
      html: `<h3>Recitar i explicar</h3><p>Per <mark>recitar</mark> un poema: parla a poc a poc, fes una pausa al final de cada vers i posa-hi emoció.</p><p>Per <mark>explicar</mark> un conte, fes servir paraules d'ordre: <b>primer</b>, <b>després</b>, <b>aleshores</b>, <b>al final</b>.</p><p>Mira el públic, canvia la veu de cada personatge i somriu. Seràs un gran contacontes!</p>`,
      svg: lista("Primer, després, aleshores, al final: per explicar un conte en ordre", [["Primer…", A], ["Després…", N], ["Aleshores…", Ve], ["Al final…", R]], { titulo: "Explico en ordre", marca: "n" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Els contes i els poemes ens fan <mark>imaginar</mark>, riure i emocionar-nos.</p><p>Amb les rondalles coneixem la nostra cultura. Amb els poemes juguem amb els sons de les paraules.</p><p>A més, llegint aprens paraules noves. I el dia de <b>Sant Jordi</b>, el 23 d'abril, regalem llibres i roses!</p>`,
      svg: charla("Un nen diu que per Sant Jordi li han regalat un llibre de contes; la nena diu que ella una rosa", [["nino", "M'han regalat un llibre!", A], ["nina", "Per Sant Jordi?", R], ["nino", "Sí, de rondalles!", A], ["rosa", "I jo una rosa!", R]]),
    },
  ],
  figura: {
    titulo: "Contes i poemes",
    svg: mural("El conte té inici, nus i desenllaç; el poema té versos i rima; les endevinalles donen pistes", [["libro", "conte", "inici, nus, desenllaç", A], ["cerdo", "rondalla", "conte popular", Ve], ["luna", "poema", "versos i rima", R], ["interrogacion", "endevinalla", "pistes sense el nom", N]], "Hi havia una vegada… i aquest conte ja s'ha fos"),
  },
  video: V("cconV", "contes en català per a nens"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quin és el nus d'«Els tres porquets»?",
      pasos: ["Inici: tres porquets fan les seves cases.", "Quin problema apareix?", "El llop bufa i tira les cases de palla i de fusta."],
      resultado: "el nus és quan el llop tira les cases." },
    { enunciado: "Busca una rima per a «gat».",
      pasos: ["Mira el final: -at.", "Busca paraules que acabin igual.", "plat, prat, blat…"],
      resultado: "gat rima amb plat." },
    { enunciado: "Endevina: «Blanca per dins, verda per fora; si no ho endevines, espera't una hora».",
      pasos: ["Pistes: blanca per dins i verda per fora.", "Pot ser una fruita.", "La pista es diu al final: «espera»."],
      resultado: "la pera." },
  ],
  errores: [
    "Explicar el conte desordenat: fes servir primer, després, al final.",
    "Confondre el nus amb l'inici: el nus és quan apareix el problema.",
    "Dir vers a tot el poema: cada línia és un vers; el grup és una estrofa.",
    "Dir el nom de la cosa en una endevinalla: aleshores no cal endevinar!",
  ],
  ejercicios: [
    { q: "Com comencen molts contes en català?", sol: "Hi havia una vegada." },
    { q: "Digues la fórmula final d'un conte.", sol: "I vet aquí un gat, vet aquí un gos, aquest conte ja s'ha fos." },
    { q: "Digues les tres parts d'un conte.", sol: "Inici, nus i desenllaç." },
    { q: "Qui és el protagonista d'«En Patufet»?", sol: "En Patufet." },
    { q: "Què és una rondalla?", sol: "Un conte popular que s'explica de generació en generació." },
    { q: "Com es diu cada línia d'un poema?", sol: "Vers." },
    { q: "Busca una rima per a «sol».", sol: "cargol, gol, mol…" },
    { q: "Canta «Cargol, treu banya».", sol: "Cargol, treu banya, puja a la muntanya…" },
    { q: "Endevina: «Tinc agulles i no cuso».", sol: "El rellotge." },
    { q: "Quin dia regalem llibres i roses?", sol: "Per Sant Jordi, el 23 d'abril." },
  ],
  quiz: [
    { q: "Un conte és una història…", o: ["curta i inventada", "sempre real", "sense personatges"], a: 0, e: "Curta i inventada." },
    { q: "Molts contes comencen amb…", o: ["Hi havia una vegada", "Bon dia", "Fi"], a: 0, e: "Hi havia una vegada." },
    { q: "La part on apareix el problema és el…", o: ["inici", "nus", "desenllaç"], a: 1, e: "Nus." },
    { q: "La part on es resol és el…", o: ["inici", "nus", "desenllaç"], a: 2, e: "Desenllaç." },
    { q: "Una rondalla és un conte…", o: ["popular", "de ciència", "sense final"], a: 0, e: "De tradició popular." },
    { q: "Cada línia d'un poema és un…", o: ["vers", "paràgraf", "títol"], a: 0, e: "Vers." },
    { q: "«Sol» rima amb…", o: ["cargol", "lluna", "casa"], a: 0, e: "-ol." },
    { q: "Una endevinalla…", o: ["diu el nom", "dona pistes sense el nom", "no té resposta"], a: 1, e: "Dona pistes." },
    { q: "En Patufet era molt…", o: ["petit", "gran", "lent"], a: 0, e: "Petit." },
    { q: "Per Sant Jordi regalem…", o: ["llibres i roses", "torrons", "ous"], a: 0, e: "Llibres i roses." },
  ],
  examen: [
    { q: "A l'inici es presenten…", o: ["els personatges i el lloc", "la rima", "el final"], a: 0, e: "Qui i on." },
    { q: "Un grup de versos és una…", o: ["estrofa", "rima", "rondalla"], a: 0, e: "Estrofa." },
    { q: "«Cargol, treu banya» és…", o: ["una cançó popular", "un conte llarg", "una recepta"], a: 0, e: "Cançó popular." },
    { q: "«Tinc agulles i no cuso…»", o: ["el rellotge", "l'agulla", "el peix"], a: 0, e: "El rellotge." },
  ],
  feynman: ["Quines són les parts d'un conte", "Què són el vers, l'estrofa i la rima", "Què és una rondalla i una endevinalla"],
  mapa: mapa("CONTES I POEMES", "var(--pri)", [
    ["Conte", "inici, nus i desenllaç", A],
    ["Rondalla", "conte popular: en Patufet", Ve],
    ["Poema", "versos, estrofes i rima", R],
    ["Endevinalla", "pistes sense el nom", N],
  ], 230),
  tarjetas: [
    ["Com comencen els contes?", "Hi havia una vegada"],
    ["Parts del conte", "Inici, nus i desenllaç"],
    ["Què passa al nus?", "Apareix un problema"],
    ["Què és una rondalla?", "Un conte popular"],
    ["Què és un vers?", "Cada línia d'un poema"],
    ["Què és la rima?", "Versos que acaben amb so semblant"],
    ["Què és una endevinalla?", "Pistes per endevinar una cosa"],
    ["Quan regalem llibres?", "Per Sant Jordi, el 23 d'abril"],
  ],
  familias: [
    "Expliqueu-li una rondalla que us explicaven a vosaltres de petits.",
    "Canteu junts cançons populars: «Cargol, treu banya», «Plou i fa sol».",
    "Feu un concurs d'endevinalles durant el sopar.",
    "Per Sant Jordi, aneu junts a triar un llibre de contes.",
  ],
  profesores: PROFCA("Educació literària: contes i rondalles de tradició oral, estructura narrativa (inici, nus i desenllaç), poemes, cançons i endevinalles populars, i la diada de Sant Jordi", ["Racó de rondalles amb titelles.", "Recital de poemes i cançons populars.", "Bústia d'endevinalles inventades per l'alumnat."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};
