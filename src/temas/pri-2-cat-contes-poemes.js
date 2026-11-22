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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conèixer rondalles i llegendes catalanes", "Inventar un conte amb les tres parts", "Fer i resoldre endevinalles", "Llegir i recitar en veu alta amb bona entonació"],
  lectura: { titulo: "La llegenda de Sant Jordi", html: `<p>Fa molts i molts anys, prop del poble de Montblanc, hi vivia un drac terrible. Cada dia volia menjar, i la gent del poble li havia de portar animals.</p><p>Quan ja no quedaven ovelles ni vaques, el rei va decidir fer un sorteig: cada dia, una persona del poble aniria a la cova del drac.</p><p>Un dia, la mala sort va tocar a la princesa. Tothom plorava. La princesa va sortir del castell, sola i trista, cap a la cova.</p><p>De sobte, va aparèixer un cavaller amb una armadura brillant, damunt d'un cavall blanc. Era Sant Jordi.</p><p>—No tinguis por, princesa! —va cridar.</p><p>Sant Jordi va lluitar contra el drac i el va vèncer amb la seva llança. De la sang del drac va néixer un roser ple de roses vermelles.</p><p>El cavaller va collir una rosa i la va regalar a la princesa.</p><p>Per això, cada 23 d'abril, a Catalunya regalem roses i llibres.</p>` },
  tras: {
    "Les rondalles": [
      ["Llegendes de la nostra terra", `<p>Les <mark>llegendes</mark> són històries antigues que expliquen l'origen d'un lloc, d'una festa o d'un costum. Barregen fets reals amb fets fantàstics.</p><p>Algunes llegendes catalanes molt conegudes:</p><ul><li><b>Sant Jordi i el drac</b>: explica per què regalem roses el 23 d'abril.</li><li><b>Les quatre barres</b>: diuen que la senyera es va pintar amb els dits plens de sang d'un comte ferit sobre un escut daurat.</li><li><b>El comte Arnau</b>: un cavaller que galopa per les muntanyes amb un cavall de foc.</li><li><b>Les goges</b> o <b>dones d'aigua</b>: fades que viuen als rius i les fonts.</li><li><b>El drac de Sant Llorenç</b>: un drac que vivia en una cova de muntanya.</li></ul><p>Les llegendes passaven d'avis a néts, explicades a la vora del foc.</p><p><b>Activitat</b>: pregunta a casa si coneixen alguna llegenda del vostre poble o comarca.</p>`,
        L6.filas("Llegendes", [["Sant Jordi", "roses", cRO], ["4 barres", "senyera", cNA], ["Arnau", "cavall", cMO], ["goges", "rius", cAZ]]),
        ["e3OLcrQ6rMk", "La llegenda de Sant Jordi", "Pau Font Sancho", 78616]],
    ],
    "Les tres parts": [
      ["Inventem un conte", `<p>Per <mark>inventar un conte</mark> podem seguir uns passos:</p><ul><li><b>1. Triar el personatge</b>: un nen, un animal que parla, una bruixa simpàtica… Com es diu? Com és?</li><li><b>2. Triar el lloc</b>: un bosc, un castell, una ciutat sota el mar, l'espai…</li><li><b>3. Plantejament</b>: comencem amb «Hi havia una vegada…» i presentem el personatge.</li><li><b>4. Nus</b>: passa un problema. «Un dia…» El personatge s'ha de posar en marxa.</li><li><b>5. Desenllaç</b>: el problema se soluciona. «Finalment…» I acabem amb «I vet aquí un gat, vet aquí un gos…».</li></ul><p>Paraules que ajuden a enllaçar: <b>primer</b>, <b>després</b>, <b>de sobte</b>, <b>llavors</b>, <b>al final</b>.</p><p>Un truc: tira un dau de dibuixos per triar personatge, lloc i problema a l'atzar!</p><p><b>Activitat</b>: inventa un conte curt amb un drac, una biblioteca i una clau perduda.</p>`,
        H6.flujo("Conte", ["qui?|personatge", "on?|lloc", "un dia|problema", "al final|solució"], cAZ)],
    ],
    "Les endevinalles": [
      ["Endevinalles populars", `<p>Les <mark>endevinalles</mark> populars s'expliquen des de fa molts anys. Moltes rimen i són molt enginyoses:</p><ul><li>«<b>Tinc fulles i no soc arbre, tinc llom i no soc animal.</b>» (El llibre)</li><li>«<b>Té dents i no menja, té barba i no és home.</b>» (L'all)</li><li>«<b>Quan és petit, porta cua; quan és gran, salta i canta.</b>» (La granota: de capgròs a granota)</li><li>«<b>Blanca per dins, verda per fora; si vols que t'ho digui, espera't.</b>» (La pera)</li><li>«<b>Quina cosa és que, com més gran, menys es veu?</b>» (La foscor)</li></ul><p>Per endevinar-les cal llegir amb atenció i pensar en totes les pistes. Algunes amaguen la solució dins mateix de la frase, com la de la pera: «es<b>pera</b>'t»!</p><p><b>Activitat</b>: aprèn una endevinalla de memòria i fes-la a la teva família.</p>`,
        H6.rueda("Endevina", "QUÈ ÉS?", [["llibre", cAZ], ["all", cVE], ["granota", cNA], ["pera", cRO]])],
    ],
    "Per a què serveix?": [
      ["Llegir en veu alta", `<p>Llegir un conte o un poema en <mark>veu alta</mark> és tot un art. Ho fem bé quan:</p><ul><li>Llegim a poc a poc, <b>sense córrer</b>.</li><li>Pronunciem <b>clar</b>, perquè tothom ens entengui.</li><li>Fem una petita <b>pausa</b> a les comes i una més llarga als punts.</li><li>Pugem la veu a les <b>preguntes</b> (¿?) i la fem més forta a les <b>exclamacions</b> (!).</li><li>Canviem la veu per a cada <b>personatge</b>: veu greu per al drac, veu dolça per a la princesa.</li><li>Mirem de tant en tant el <b>públic</b>.</li></ul><p>Abans de llegir en veu alta, és bo llegir el text en silenci una vegada per entendre'l bé.</p><p>Llegir en veu alta per a algú és un regal: als avis i als germans petits els encanta!</p><p><b>Activitat</b>: llegeix la llegenda de Sant Jordi en veu alta canviant la veu de cada personatge.</p>`,
        L6.filas("Veu alta", [["a poc a poc", "sense córrer", cAZ], ["coma", "pausa", cVE], ["?", "puja la veu", cNA], ["!", "més fort", cRO]])],
    ],
  },
  final: [
    ["Sant Jordi: dia del llibre i la rosa", `<p>El <mark>23 d'abril</mark>, diada de Sant Jordi, és una festa molt especial a Catalunya:</p><ul><li>Els carrers s'omplen de <b>parades</b> de llibres i de roses.</li><li>Tradicionalment es regalen <b>roses</b> i <b>llibres</b> a les persones que estimem.</li><li>Els escriptors i escriptores <b>signen</b> els seus llibres als lectors.</li><li>Les escoles fan <b>jocs florals</b>: concursos de contes i poemes.</li><li>Els balcons es decoren amb <b>senyeres</b>.</li></ul><p>També és el <b>Dia Internacional del Llibre</b>, perquè el 23 d'abril van morir dos grans escriptors: Cervantes i Shakespeare.</p><p>És una festa de l'amor, de la cultura i de la lectura, i no és festiu: es treballa i es va a escola.</p><p><b>Activitat</b>: fes un punt de llibre decorat amb una rosa per regalar-lo per Sant Jordi.</p>`,
      H6.dos("23 d'abril", ["ROSA", ["vermella", "amor", "parades"], cRO], ["LLIBRE", ["llegir", "signatures", "jocs florals"], cAZ])],
    ["Repàs: la llegenda de Sant Jordi", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>És una <b>llegenda</b>: barreja fets que podrien ser reals amb fets fantàstics.</li><li><b>Plantejament</b>: un drac terrible viu prop de Montblanc i vol menjar.</li><li><b>Nus</b>: la mala sort toca a la <b>princesa</b>, que ha d'anar a la cova.</li><li><b>Desenllaç</b>: <b>Sant Jordi</b> vèn el drac amb la llança.</li><li>De la sang del drac neix un <b>roser</b> amb roses vermelles.</li><li>La llegenda explica per què regalem <b>roses</b> el 23 d'abril.</li></ul><p>Personatges: el drac (dolent), la princesa, el rei i Sant Jordi (l'heroi).</p><p><b>Activitat</b>: representeu la llegenda amb titelles fetes amb mitjons.</p>`,
      H6.flujo("Llegenda", ["drac|Montblanc", "princesa|sorteig", "Jordi|lluita", "roser|roses"], cVE)],
  ],
  ejemplos: [
    ["Quina part del conte és «Un dia, la mala sort va tocar a la princesa»?", ["Hi apareix el problema."], "El nus."],
    ["Endevina: té dents i no menja, té barba i no és home.", ["És una planta de cuina amb grans."], "L'all."],
  ],
  errores: ["Llegir en veu alta molt de pressa i sense fer pauses.", "Explicar un conte sense problema: només plantejament i final."],
  ejercicios: [
    ["b", "Què és una llegenda?", "Una història antiga que explica l'origen d'alguna cosa."],
    ["b", "Quin dia és Sant Jordi?", "El 23 d'abril."],
    ["b", "Com comencen molts contes?", "Hi havia una vegada…"],
    ["b", "Què regalem per Sant Jordi?", "Roses i llibres."],
    ["b", "Endevina: tinc fulles i no soc arbre, tinc llom i no soc animal.", "El llibre."],
    ["m", "Digues les tres parts d'un conte.", "Plantejament, nus i desenllaç."],
    ["m", "Què fem a les comes quan llegim?", "Una petita pausa."],
    ["m", "Digues dues paraules per enllaçar un conte.", "Primer, després, de sobte, al final."],
    ["m", "Qui són les goges?", "Fades o dones d'aigua dels rius."],
    ["m", "Per què el 23 d'abril és el Dia del Llibre?", "Perquè van morir Cervantes i Shakespeare."],
    ["a", "A la lectura, què neix de la sang del drac?", "Un roser amb roses vermelles."],
    ["a", "Quin és el nus de la llegenda?", "La princesa ha d'anar a la cova del drac."],
    ["a", "Inventa un conte curt amb les tres parts.", "Resposta oberta."],
    ["a", "On és la pista amagada a l'endevinalla de la pera?", "A «espera't»."],
  ],
  quiz: [
    ["Explica l'origen d'una festa…", ["una llegenda", "una notícia", "una recepta"], "Llegendes."],
    ["Al final del conte hi ha el…", ["desenllaç", "plantejament", "títol"], "Parts."],
    ["Té dents i no menja:", ["l'all", "la pera", "el llibre"], "Endevinalles."],
    ["A les exclamacions la veu…", ["és més forta", "s'atura", "és molt baixa"], "Veu alta."],
    ["Per Sant Jordi regalem…", ["roses i llibres", "torrons", "ous"], "Sant Jordi."],
  ],
  examen: [
    ["A la lectura, a prop de quin poble vivia el drac?", ["Montblanc", "Girona", "Vic"], "Lectura."],
    ["Amb què vèn Sant Jordi el drac?", ["amb la llança", "amb una rosa", "amb un llibre"], "Repàs."],
  ],
  tarjetas: [
    ["Inventar un conte", "Personatge, lloc, problema i solució."],
    ["Sant Jordi", "23 d'abril: roses, llibres i llegenda del drac."],
  ],
  glosario: [
    ["Llegenda", "Història antiga que explica l'origen d'alguna cosa."],
    ["Rondalla", "Conte popular de tradició oral."],
    ["Cavaller", "Home que anava a cavall i lluitava."],
    ["Llança", "Arma llarga amb punta."],
    ["Roser", "Planta que fa roses."],
    ["Sorteig", "Triar a l'atzar."],
    ["Goges", "Fades dels rius i les fonts."],
    ["Endevinalla", "Joc per endevinar una cosa amb pistes."],
    ["Entonació", "Manera de pujar i baixar la veu."],
    ["Jocs florals", "Concurs de contes i poemes."],
  ],
  situacion: {
    titulo: "La nostra diada de Sant Jordi",
    reto: "La classe prepara una parada de Sant Jordi amb contes inventats, endevinalles i punts de llibre per regalar.",
    pasos: ["Inventar un conte curt amb plantejament, nus i desenllaç.", "Il·lustrar-lo i fer-ne un petit llibret.", "Preparar endevinalles per als visitants.", "Llegir els contes en veu alta a la parada."],
    producto: "Una parada de Sant Jordi amb llibrets i endevinalles.",
    evaluacion: ["Coneix llegendes catalanes.", "Inventa un conte amb les tres parts.", "Resol i fa endevinalles.", "Llegeix en veu alta amb entonació."],
  },
});
