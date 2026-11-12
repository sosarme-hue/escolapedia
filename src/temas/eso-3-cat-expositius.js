// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Textos expositius",
  minutos: 50,
  objetivos: ["Reconèixer la intenció i les característiques dels textos expositius", "Identificar-ne les estructures i els recursos explicatius", "Escriure un text expositiu breu i ben organitzat"],
  claves: ["text expositiu", "divulgatiu", "especialitzat", "objectivitat", "estructura analitzant", "estructura sintetitzant", "definició", "exemple", "classificació", "connectors"],
  pregunta: {
    texto: "Una entrada d'enciclopèdia, el llibre de ciències i un vídeo que explica per què el cel és blau. Què tenen en comú?",
    respuesta: "Tots tres són <mark>textos expositius</mark>: la seva intenció és <b>informar i explicar</b> un tema de manera clara i objectiva perquè el receptor l'entengui. No volen convèncer ni explicar una història, sinó fer comprendre.",
  },
  bloques: [
    {
      html: `<h3>Què és un text expositiu</h3><p>Un <b>text expositiu</b> té com a objectiu <mark>transmetre coneixements</mark>: explica què és una cosa, com funciona, per què passa o quines parts té. El trobem als llibres de text, a les enciclopèdies, als diccionaris, a les notícies científiques, als articles de divulgació i als documentals. És la tipologia més habitual en l'àmbit acadèmic: gairebé tot el que estudies a les altres matèries t'arriba en forma de text expositiu, i per això aprendre a llegir-lo i a escriure'l és clau per estudiar millor.</p>`,
      svg: L.filas("On trobem textos expositius", [
        ["Escola", "llibres de text, apunts", "var(--pen)"],
        ["Consulta", "enciclopèdia, diccionari", "var(--leaf)"],
        ["Divulgació", "revistes, documentals", "var(--inf)"],
        ["Vida diària", "prospectes, guies", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Divulgatius i especialitzats</h3><p>Segons el receptor, els textos expositius poden ser <b>divulgatius</b>, adreçats al gran públic, amb un llenguatge clar, exemples i comparacions; o <b>especialitzats</b>, adreçats a experts, amb molt de <mark>vocabulari tècnic</mark> i sense gaires explicacions. Un article sobre els volcans en una revista juvenil és divulgatiu; un informe de geòlegs, especialitzat.</p>`,
      svg: L.tabla("Divulgatiu i especialitzat", ["Divulgatiu", "Especialitzat"], [
        ["gran públic", "experts"], ["llenguatge clar", "tecnicismes"], ["molts exemples", "dades precises"],
      ]),
    },
    {
      html: `<h3>Les característiques lingüístiques</h3><p>Com que vol ser <b>objectiu</b>, el text expositiu fa servir la <b>tercera persona</b> o formes impersonals («es considera», «cal tenir en compte»), el <b>present atemporal</b> («l'aigua bull a 100 graus») i un <mark>vocabulari precís</mark>. Les oracions solen ser enunciatives i els adjectius, especificatius: «energia solar», «sistema nerviós».</p>`,
      svg: L.frase("Marques del text expositiu", [
        ["L'aigua", "3a persona", "var(--pen)"], ["bull", "present atemporal", "var(--red)"],
        ["a 100 graus", "dada precisa", "var(--leaf)"], ["a nivell del mar.", "", "var(--line)"],
      ], "objectivitat"),
    },
    {
      html: `<h3>L'estructura</h3><p>Molts textos expositius tenen tres parts: una <b>introducció</b> que presenta el tema, un <b>desenvolupament</b> que l'explica en paràgrafs i una <b>conclusió</b> que el resumeix. Si la idea principal va al principi, l'estructura és <mark>analitzant</mark> o deductiva; si va al final, després de les dades, és <mark>sintetitzant</mark> o inductiva.</p>`,
      svg: L.filas("Estructures del text expositiu", [
        ["Analitzant", "idea general → detalls", "var(--pen)"],
        ["Sintetitzant", "detalls → idea general", "var(--leaf)"],
        ["Enquadrada", "idea al principi i al final", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Els recursos per explicar</h3><p>Per fer entenedor un tema, el text expositiu fa servir <b>definicions</b> («un volcà és…»), <b>exemples</b> («com l'Etna»), <b>classificacions</b> (tipus de volcans), <b>comparacions</b>, <b>enumeracions</b>, <b>dades</b> i <mark>elements gràfics</mark>: títols, negretes, esquemes, fotografies i taules. També reformula el que és difícil amb «és a dir» o «o sigui».</p>`,
      svg: L.filas("Recursos explicatius", [
        ["Definició", "Un volcà és…", "var(--pen)"],
        ["Exemple", "com ara l'Etna", "var(--leaf)"],
        ["Classificació", "n'hi ha de tres tipus", "var(--inf)"],
        ["Reformulació", "és a dir…", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com s'organitza un text expositiu",
    svg: L.pasos("Parts d'un text expositiu", [
      ["Introducció", ["presenta", "el tema"], "var(--pen)"],
      ["Desenvolupament", ["explica en", "paràgrafs"], "var(--leaf)"],
      ["Conclusió", ["resumeix les", "idees clau"], "var(--red)"],
    ]),
  },
  video: { id: "jpLvojJoIn8", titulo: "Textos expositivos: características, estructura y tipos", canal: "Clases Particulares en Ávila", vistas: 308512, megusta: 0, busqueda: "el text expositiu" },
  quiz: [
    { q: "La intenció del text expositiu és…", o: ["informar i explicar", "convèncer", "explicar una història"], a: 0, e: "Fer comprendre un tema." },
    { q: "Un text per a experts amb molts tecnicismes és…", o: ["especialitzat", "divulgatiu", "literari"], a: 0, e: "Va dirigit a especialistes." },
    { q: "«La Terra gira al voltant del Sol» està en…", o: ["present atemporal", "passat", "futur"], a: 0, e: "És veritat sempre." },
    { q: "Si la idea principal va al final, l'estructura és…", o: ["sintetitzant", "analitzant", "narrativa"], a: 0, e: "Inductiva." },
    { q: "«És a dir» serveix per…", o: ["reformular", "oposar", "concloure una història"], a: 0, e: "Ho torna a dir d'una altra manera." },
  ],
  examen: [
    { q: "Quin text és expositiu?", o: ["Una entrada d'enciclopèdia", "Un conte", "Un anunci"], a: 0, e: "Informa." },
    { q: "Els textos expositius solen fer servir la…", o: ["tercera persona", "primera persona amb emocions", "segona persona"], a: 0, e: "Per ser objectius." },
    { q: "«N'hi ha de tres tipus: …» és una…", o: ["classificació", "definició", "comparació"], a: 0, e: "Ordena en grups." },
  ],
  feynman: ["Per a què serveix un text expositiu", "Diferència entre divulgatiu i especialitzat", "Tres marques lingüístiques d'objectivitat", "L'estructura analitzant i la sintetitzant"],
  mapa: mapa("TEXT EXPOSITIU", "var(--eso)", [
    ["Intenció", "informar i explicar", "var(--pen)"],
    ["Tipus", "divulgatiu · especialitzat", "var(--leaf)"],
    ["Llengua", "3a persona · present", "var(--red)"],
    ["Recursos", "definició · exemple…", "var(--inf)"],
  ]),
  tarjetas: [
    ["Text expositiu", "Text que informa i explica un tema de manera clara i objectiva."],
    ["Text divulgatiu", "Text expositiu per al gran públic, amb llenguatge clar i exemples."],
    ["Present atemporal", "Present que expressa veritats generals: «L'aigua bull a 100 graus»."],
    ["Estructura analitzant", "La idea principal va al principi i després s'explica."],
    ["Reformulació", "Tornar a dir una idea d'una altra manera: «és a dir», «o sigui»."],
  ],
  familias: ["Mireu junts un documental curt i anoteu-ne les definicions i els exemples.", "Demaneu-li que us expliqui en un minut com funciona alguna cosa de casa (la rentadora, el wifi) com si fos un text expositiu.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Gèneres discursius de l'àmbit acadèmic: l'exposició; estructura, recursos explicatius, connectors i marques d'objectivitat (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Convertir un text especialitzat en un de divulgatiu per a alumnes de primària.", "Fer un esquema a partir d'un text del llibre de ciències.", "Preparar una càpsula de vídeo d'un minut explicant un fenomen."],
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
  objetivos: ["Fer servir els connectors propis de l'exposició", "Resumir i esquematitzar un text expositiu"],
  bloques: [
    { tras: "Què és un text expositiu", html: `<h3>Exposició i argumentació: no les confonguis</h3><p>De vegades costa distingir un text expositiu d'un d'argumentatiu, perquè tots dos tracten temes seriosos i fan servir dades. La diferència és la <b>intenció</b>. L'expositiu vol que el lector <mark>entengui</mark> un tema: «El canvi climàtic és l'augment de la temperatura mitjana de la Terra causat principalment pels gasos d'efecte hivernacle». L'argumentatiu vol que el lector <mark>pensi o actuï</mark> d'una manera: «Hem de reduir l'ús del cotxe si volem frenar el canvi climàtic».</p><p>Una pista útil: si trobes opinions («crec», «és vergonyós»), valoracions o crides a l'acció, probablement el text és argumentatiu o, com a mínim, barreja les dues tipologies.</p>` },
    { tras: "Les característiques lingüístiques", html: `<h3>Els connectors de l'exposició</h3><p>Els <b>connectors</b> ajuden el lector a seguir l'explicació i en mostren l'organització. En un text expositiu són especialment útils aquests:</p>${L.tb(["Funció", "Connectors"], [["Ordenar", "en primer lloc, d'una banda, d'altra banda, finalment"], ["Afegir", "a més, també, així mateix"], ["Exemplificar", "per exemple, com ara, en concret"], ["Reformular", "és a dir, o sigui, dit d'una altra manera"], ["Causa", "perquè, ja que, atès que"], ["Conseqüència", "per tant, per això, en conseqüència"], ["Concloure", "en resum, en definitiva, per acabar"]])}<p>Recorda que en català diem <mark>«per tant»</mark> i <mark>«a més»</mark>, i que expressions com «osigui» (junt) o «a més a més» repetit a cada frase empobreixen el text.</p>` },
    { tras: "L'estructura", html: `<h3>Altres estructures internes</h3><p>A més de l'estructura analitzant o sintetitzant, el desenvolupament d'un text expositiu pot organitzar la informació de maneres diferents, segons el que vulgui explicar:</p><ul><li><b>Problema-solució</b>: presenta un problema i les possibles solucions (la contaminació dels oceans i com reduir-la).</li><li><b>Causa-conseqüència</b>: explica per què passa una cosa i què provoca (per què hi ha marees).</li><li><b>Comparació-contrast</b>: mostra semblances i diferències (els rèptils i els amfibis).</li><li><b>Seqüència</b>: explica un procés pas a pas (com es forma la pluja).</li><li><b>Enumeració</b>: llista característiques o elements (les parts de la cèl·lula).</li></ul><p>Identificar aquesta <mark>estructura interna</mark> ajuda molt a fer esquemes i resums.</p>` },
    { tras: "Els recursos per explicar", html: `<h3>Com escriure una bona definició</h3><p>La definició és el recurs més important de l'exposició. Una bona definició segueix un esquema senzill: <b>terme</b> + <b>categoria general</b> + <b>tret específic</b> que el diferencia. Per exemple: «Un <i>volcà</i> (terme) és una <i>obertura de l'escorça terrestre</i> (categoria) <i>per on surt magma del subsòl</i> (tret específic)».</p><p>Evita les definicions <mark>circulars</mark> («un pintor és algú que pinta») i les que comencen amb «és quan» o «és on»: en català formal, després de «és» va un nom («és un procés…», «és un lloc…»). Si el terme és difícil, afegeix-hi un exemple o una comparació que el faci entenedor.</p>` },
    { tras: "Els recursos per explicar", html: `<h3>Resumir i fer esquemes</h3><p>Per estudiar un text expositiu, el millor és transformar-lo. Primer, <b>llegeix-lo</b> sencer i busca les paraules que no entenguis. Després, <b>subratlla</b> les idees principals de cada paràgraf (no més d'una o dues línies per paràgraf). Amb això pots fer:</p><ul><li>Un <b>esquema</b>: les idees ordenades de manera jeràrquica, amb fletxes, claus o números.</li><li>Un <b>mapa conceptual</b>: conceptes dins de caixes units per paraules d'enllaç.</li><li>Un <b>resum</b>: un text breu, amb les teves paraules, que recull les idees principals en el mateix ordre i sense opinions.</li></ul><p>Un bon resum ocupa aproximadament <mark>una quarta part</mark> del text original.</p>` },
  ],
  videos: [
    ["Què és un text expositiu", L.vid("9CuV-Z8CkmQ", "El text expositiu", "Maria Francisca Marimon Frau", 7047)],
    ["Les característiques lingüístiques", L.vid("336DyICh3pQ", "Píndola 11. La connexió i els connectors formals", "De mica en mica. Dra. Aina Monferrer", 18083)],
  ],
  ejemplos: [
    ["Divulgatiu o especialitzat? «Les abelles són insectes que fabriquen mel. Com si fossin una petita ciutat, viuen en grups molt organitzats.»", ["Llenguatge senzill i sense tecnicismes.", "Comparació per fer-ho entenedor («com si fossin una petita ciutat»).", "Adreçat al gran públic."], "és un text divulgatiu."],
    ["Escriu una definició de «biblioteca».", ["Terme: biblioteca.", "Categoria general: un lloc o servei.", "Tret específic: on es conserven i es presten llibres."], "«Una biblioteca és un lloc on es conserven llibres i altres documents perquè la gent els pugui consultar o endur-se'n en préstec.»"],
    ["Quina estructura interna té un text que explica per què hi ha terratrèmols i quins efectes tenen?", ["Primer explica les causes (moviment de les plaques).", "Després explica els efectes (danys, tsunamis).", "Relació: una cosa provoca l'altra."], "estructura de causa-conseqüència."],
  ],
  errores: [
    "Ficar opinions personals en un text que hauria de ser objectiu.",
    "Fer definicions circulars o començades per «és quan».",
    "Escriure tot en un sol paràgraf sense estructura.",
    "Confondre l'exposició amb l'argumentació.",
    "Fer un resum copiant frases senceres del text.",
  ],
  ejercicios: [
    ["Escriu tres llocs on trobem textos expositius.", "Llibres de text, enciclopèdies i documentals."],
    ["Què diferencia un text divulgatiu d'un d'especialitzat?", "El receptor: el divulgatiu va adreçat al gran públic i l'especialitzat, a experts."],
    ["Escriu una frase en present atemporal sobre el Sol.", "Per exemple: «El Sol és una estrella»."],
    ["Explica l'estructura sintetitzant.", "Primer es donen les dades o els detalls i al final s'arriba a la idea principal."],
    ["Escriu dos connectors per exemplificar i dos per concloure.", "Per exemplificar: «per exemple», «com ara». Per concloure: «en resum», «en definitiva»."],
    ["Corregeix la definició: «Un rellotge és quan saps l'hora.»", "«Un rellotge és un instrument que serveix per mesurar i indicar l'hora.»"],
    ["Expositiu o argumentatiu? «Hauríem de prohibir els plàstics d'un sol ús.»", "Argumentatiu: expressa una opinió i proposa una acció."],
    ["Quina estructura interna tindria un text que compara els gats i els gossos?", "Comparació-contrast."],
    ["Quina extensió aproximada ha de tenir un resum?", "Aproximadament una quarta part del text original."],
    ["Reformula amb «és a dir»: «Els animals herbívors mengen plantes.»", "«Els animals herbívors, és a dir, els que s'alimenten de vegetals, mengen plantes.»"],
  ],
  quiz: [
    ["«Per tant» és un connector de…", ["conseqüència", "addició", "exemple"], 0, "Introdueix el resultat."],
    ["Un text que explica com es forma la pluja pas a pas té estructura de…", ["seqüència", "contrast", "problema-solució"], 0, "Procés ordenat."],
    ["Una definició ben feta té terme, categoria i…", ["tret específic", "opinió", "exemple obligatori"], 0, "El que la diferencia."],
    ["En un resum cal evitar…", ["les opinions", "les idees principals", "les teves paraules"], 0, "Ha de ser objectiu."],
    ["Un mapa conceptual uneix conceptes amb…", ["paraules d'enllaç", "dibuixos", "preguntes"], 0, "Caixes i enllaços."],
  ],
  tarjetas: [
    ["Definició", "Terme + categoria general + tret específic."],
    ["Causa-conseqüència", "Estructura que explica per què passa una cosa i què provoca."],
    ["Resum", "Text breu, objectiu i amb paraules pròpies que recull les idees principals."],
  ],
});
