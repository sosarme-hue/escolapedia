// Llengua Catalana 1r de Primària: contes, poemes i endevinalles. Tema escrit en català. Dibuixos i textos propis.
const { mapa } = require("./_util");
const { dibujos, frase, lista, mural, silabas: s, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Contes, poemes i endevinalles",
  minutos: 20,
  objetivos: ["Reconèixer un conte, un poema i una endevinalla", "Conèixer les parts d'un conte i els seus personatges", "Trobar paraules que rimen i resoldre endevinalles"],
  claves: ["conte", "personatge", "poema", "vers", "rima", "endevinalla"],
  pregunta: {
    texto: "Quin és el teu conte preferit? Qui hi surt? Com comença?",
    respuesta: "Molts contes comencen amb «<mark>Hi havia una vegada</mark>» i acaben amb «<mark>i conte contat, ja s'ha acabat</mark>». Avui coneixem els contes, els poemes i les endevinalles.",
  },
  bloques: [
    {
      html: `<h3>Textos per gaudir</h3><p>Hi ha textos que llegim per <mark>gaudir i imaginar</mark>. Són la literatura.</p><p>Avui en coneixem tres: els <b>contes</b>, els <b>poemes</b> i les <b>endevinalles</b>.</p><p>Els contes expliquen històries. Els poemes juguen amb el so de les paraules. Les endevinalles són preguntes amb trampa. Tots tres són molt divertits!</p>`,
      svg: dibujos("Un llibre de contes, un cor per als poemes i un interrogant per a les endevinalles", [["libro", "conte", A], ["corazon", "poema", R], ["interrogacion", "endevinalla", V]], { titulo: "Tres textos per gaudir" }),
    },
    {
      html: `<h3>Les parts del conte</h3><p>Un conte té <mark>tres parts</mark>.</p><p>El <b>principi</b> presenta els personatges: «Hi havia una vegada un nen molt petit, en Patufet».</p><p>Al <b>nus</b> apareix un problema: en Patufet es perd i ningú no el troba. Al <b>final</b> es resol: el troben dins la panxa del bou! I conte contat, ja s'ha acabat.</p>`,
      svg: lista("Les tres parts del conte: principi, nus i final", [["Principi: qui és", A], ["Nus: el problema", R], ["Final: es resol", V]], { titulo: "Un conte té tres parts", marca: "n" }),
      video: vid("6LRyJyaH_Xs", "En Patufet: conte infantil en català", "Pasion Digital INFANTIL", 6729533, 10539),
    },
    {
      html: `<h3>Els personatges</h3><p>Els <mark>personatges</mark> són els qui viuen la història.</p><p>Poden ser persones, animals o fins i tot objectes que parlen. Pensa en «La rateta que escombrava l'escaleta». Hi surten la rateta, el gat, el gos i el ratolí.</p><p>Quan llegeixis un conte, pregunta't: qui hi surt?, com és?, què vol?</p>`,
      svg: dibujos("Els personatges de la rateta: la rateta, el gat, el gos i el ratolí", [["raton", "rateta", R], ["gato", "gat", A], ["perro", "gos", V], ["raton", "ratolí", N]], { titulo: "La rateta que escombrava l'escaleta" }),
    },
    {
      html: `<h3>Els poemes</h3><p>Un <mark>poema</mark> és un text escrit en línies curtes. Cada línia es diu <b>vers</b>.</p><p>Escolta aquest poema: «Tinc un gat / que dorm al plat. / Tinc un peix / que neda ell mateix».</p><p>Els poemes es llegeixen a poc a poc i amb molt de ritme. Alguns semblen cançons! Te'n pots aprendre un de memòria.</p>`,
      svg: frase("Un poema de quatre versos: Tinc un gat que dorm al plat. Tinc un peix que neda ell mateix.", [[`Tinc un g<tspan fill="var(--red)">at</tspan>`, A], ["/"], [`que dorm al pl<tspan fill="var(--red)">at</tspan>.`, A], ["/"], [`Tinc un p<tspan fill="var(--leaf)">eix</tspan>`, A], ["/"], [`que neda ell mat<tspan fill="var(--leaf)">eix</tspan>.`, A]], { fs: 18 }),
    },
    {
      html: `<h3>La rima</h3><p>Dues paraules <mark>rimen</mark> quan acaben amb el mateix so.</p><p><i>Gat</i> rima amb <i>plat</i>. <i>Lluna</i> rima amb <i>pruna</i>. <i>Sol</i> rima amb <i>caragol</i>.</p><p>La rima fa que els poemes sonin bonics i es recordin millor. Juga a buscar rimes: què rima amb <i>pa</i>? Mà! I amb <i>gos</i>? Os!</p>`,
      svg: dibujos("Sol rima amb caragol; gat rima amb plat", [["sol", s("so|l", R, 1), K], ["caracol", s("cara|gol", R, 1), K], ["gato", s("g|at", V, 1), K], ["sopa", s("pl|at", V, 1), K]], { titulo: "Paraules que rimen", nota: "sol i caragol · gat i plat" }),
      video: vid("xIUbVNslPFQ", "La lluna, la pruna", "Contes i Cançóns Infantils - En Català", 1900826, 4247),
    },
    {
      html: `<h3>Les endevinalles</h3><p>Una <mark>endevinalla</mark> descriu una cosa sense dir-ne el nom. L'hem d'endevinar.</p><p>Escolta: «Soc rodona i brillant. Surto de nit i visc al cel». Què és?</p><p>La <b>lluna</b>! Les endevinalles donen <b>pistes</b>: com és, on és i què fa. Cal escoltar bé cada pista fins al final.</p>`,
      svg: dibujos("Endevinalla: rodona, surt de nit i viu al cel; és la lluna", [["interrogacion", "Què és?", A], ["luna", "la lluna!", N]], { titulo: "Rodona, de nit, al cel…", nota: "Les pistes ajuden a endevinar" }),
    },
    {
      html: `<h3>Més endevinalles</h3><p>Prova amb aquestes:</p><p>«Tinc quatre potes, moc la cua i faig bup-bup». <mark>El gos!</mark></p><p>«Soc vermella i rodona, i a dins tinc un cor amb pinyols». <mark>La poma!</mark></p><p>Ara inventa'n una tu. Pensa en un animal i dona tres pistes sense dir-ne el nom.</p>`,
      svg: dibujos("Solucions de dues endevinalles: el gos i la poma", [["perro", "bup-bup!", A], ["manzana", "vermella!", R]], { titulo: "Ho endevines?", nota: "el gos · la poma" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Llegir contes, poemes i endevinalles ens ajuda a <mark>imaginar</mark> i a <b>pensar</b>.</p><p>Aprenem paraules noves i entrenem la memòria.</p><p>També ens fan riure i ens emocionen. Ens ensenyen a ser valents i a ajudar els altres. I són perfectes per compartir amb la família abans d'anar a dormir.</p>`,
      svg: lista("Llegir literatura serveix per imaginar, aprendre paraules i compartir", [["Imagino i penso", A], ["Aprenc paraules", R], ["Comparteixo i ric", V]], { titulo: "Llegir m'ajuda a…" }),
    },
    {
      html: `<h3>Juguem a inventar un conte</h3><p>Tria <mark>tres dibuixos</mark>: un ós, una casa i una estrella.</p><p>Ara inventa un conte amb ells. Comença amb «Hi havia una vegada un ós…».</p><p>Pensa en un problema i en un final. Què li passa a l'ós? Com ho soluciona? Explica-ho en veu alta a la teva família. Tu ets l'autor!</p>`,
      svg: dibujos("Un ós, una casa i una estrella per inventar un conte", [["oso", "ós", A], ["casa", "casa", R], ["estrella", "estrella", V]], { titulo: "Hi havia una vegada un ós…", nota: "Què passa? Com acaba?" }),
    },
  ],
  figura: {
    titulo: "Contes, poemes i endevinalles",
    svg: mural("Tres textos: el conte explica una història, el poema té versos que rimen i l'endevinalla dona pistes", [["libro", "conte", "principi, nus i final", A], ["corazon", "poema", "versos i rima", R], ["interrogacion", "endevinalla", "pistes per endevinar", V]], "Tres textos per gaudir"),
  },
  video: { ...vid("kg-7Nj8rPtc", "El conte de la rateta que escombrava l'escaleta", "Només Babys", 297201, 692), busqueda: "contes en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Què rima amb «ratolí»?",
      pasos: ["Mira com acaba: ra-to-lí. Acaba en «í».", "Busca paraules que acabin igual.", "Per exemple: camí, matí, coixí."],
      resultado: "«ratolí» rima amb «camí», «matí» i «coixí»." },
    { enunciado: "Endevina: «Tinc agulles i no sé cosir. Dic l'hora i no sé llegir».",
      pasos: ["Pensa en una cosa amb agulles que no cus.", "Aquest objecte diu l'hora.", "Les agulles marquen les hores."],
      resultado: "és el rellotge." },
    { enunciado: "Digues les parts de «La rateta que escombrava l'escaleta».",
      pasos: ["Principi: la rateta escombra i troba una moneda.", "Nus: molts animals la volen per casar-s'hi.", "Final: tria el ratolí, que és qui li agrada."],
      resultado: "principi, nus i final." },
  ],
  errores: [
    "Pensar que un poema ha de rimar sempre: molts rimen, però no tots.",
    "Dir la solució d'una endevinalla sense escoltar totes les pistes.",
    "Explicar un conte sense problema ni final: un conte necessita les tres parts.",
    "Creure que rimen paraules que només comencen igual: rimen pel final.",
  ],
  ejercicios: [
    { q: "Com comencen molts contes?", sol: "«Hi havia una vegada…»." },
    { q: "Digues les tres parts d'un conte.", sol: "Principi, nus i final." },
    { q: "Qui és el protagonista d'«En Patufet»?", sol: "En Patufet, un nen molt petit." },
    { q: "Què rima amb «lluna»?", sol: "Per exemple: pruna, una, duna." },
    { q: "Què rima amb «sol»?", sol: "Per exemple: caragol, girasol, mussol." },
    { q: "Endevina: «Salta i salta i no té cua; verda és la seva samarreta». Què és?", sol: "La granota." },
    { q: "Inventa una endevinalla d'un gat.", sol: "Per exemple: «Tinc bigotis, faig mèu i m'agrada dormir al sol»." },
    { q: "Com es diu cada línia d'un poema?", sol: "Vers." },
    { q: "Inventa un final nou per a «La rateta».", sol: "Resposta lliure." },
    { q: "Recita un poema curt a la teva família.", sol: "Resposta lliure: amb ritme i veu clara." },
  ],
  quiz: [
    { q: "«Hi havia una vegada» és el principi d'un…", o: ["conte", "poema", "cartell"], a: 0, e: "Així comencen molts contes." },
    { q: "Les línies d'un poema es diuen…", o: ["versos", "paràgrafs", "contes"], a: 0, e: "Versos." },
    { q: "Què rima amb «gat»?", o: ["gos", "plat", "sol"], a: 1, e: "g-at, pl-at." },
    { q: "Una endevinalla…", o: ["dona pistes", "explica un viatge llarg", "és una recepta"], a: 0, e: "Descriu sense dir el nom." },
    { q: "Al nus del conte…", o: ["apareix un problema", "s'acaba tot", "es diu el títol"], a: 0, e: "El nus és el problema." },
    { q: "Els personatges són…", o: ["els qui viuen la història", "les pàgines", "els dibuixos"], a: 0, e: "Persones, animals o objectes." },
    { q: "«Soc rodona i surto de nit»: és…", o: ["el sol", "la lluna", "el núvol"], a: 1, e: "La lluna." },
    { q: "Què rima amb «lluna»?", o: ["pruna", "casa", "taula"], a: 0, e: "Acaben en «una»." },
    { q: "Com acaben molts contes catalans?", o: ["I conte contat, ja s'ha acabat", "Bon dia", "Fins demà"], a: 0, e: "És la fórmula final." },
    { q: "Quantes parts té un conte?", o: ["2", "3", "5"], a: 1, e: "Principi, nus i final." },
  ],
  examen: [
    { q: "Quin text juga amb rimes i versos?", o: ["el poema", "la llista de la compra", "el cartell"], a: 0, e: "El poema." },
    { q: "Què rima amb «pa»?", o: ["mà", "llet", "got"], a: 0, e: "Acaben en «a»." },
    { q: "La part on es resol el problema és…", o: ["el final", "el principi", "el títol"], a: 0, e: "El final." },
    { q: "«Quatre potes i faig bup-bup»: és…", o: ["el gat", "el gos", "l'ànec"], a: 1, e: "El gos." },
  ],
  feynman: ["Quines parts té un conte", "Què és un vers i què és la rima", "Com funciona una endevinalla"],
  mapa: mapa("TEXTOS PER GAUDIR", "var(--pri)", [
    ["Conte", "principi, nus i final", A],
    ["Personatges", "qui viu la història", N],
    ["Poema", "versos i rima", R],
    ["Endevinalla", "pistes per endevinar", V],
  ], 220),
  tarjetas: [
    ["Com comencen molts contes?", "Hi havia una vegada…"],
    ["Parts del conte", "Principi, nus i final"],
    ["Què són els personatges?", "Els qui viuen la història"],
    ["Què és un vers?", "Cada línia d'un poema"],
    ["Què és la rima?", "Paraules que acaben amb el mateix so"],
    ["Què rima amb «gat»?", "Plat, pat, barat…"],
    ["Què és una endevinalla?", "Un joc que dona pistes sense dir el nom"],
    ["Rodona, de nit, al cel…", "La lluna"],
  ],
  familias: [
    "Llegiu un conte cada nit i pregunteu: qui hi surt?, quin problema hi ha?, com acaba?",
    "Jugueu a buscar rimes mentre cuineu o aneu amb cotxe.",
    "Digueu endevinalles per torns; deixeu que també n'inventi.",
    "Apreneu junts un poema curt o una cançó popular per recitar-los en una reunió familiar.",
  ],
  profesores: {
    saberes: "Educació literària: lectura i escolta de contes, poemes i endevinalles de la tradició catalana; estructura del conte, personatges, vers i rima (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Racó de contes populars catalans: en Patufet, la rateta, la castanyera.", "Capsa de rimes: treure un objecte i buscar paraules que rimin.", "Concurs d'endevinalles inventades per l'alumnat."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
