// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Ausiàs March i el Tirant lo Blanc",
  minutos: 55,
  objetivos: ["Situar el Segle d'Or de la literatura valenciana", "Conèixer la poesia d'Ausiàs March i la seva novetat", "Explicar per què el Tirant lo Blanc és una gran novel·la"],
  claves: ["Segle d'Or", "València", "Ausiàs March", "decasíl·lab", "Cants d'amor", "Cants de mort", "Joanot Martorell", "Tirant lo Blanc", "novel·la cavalleresca", "Carmesina"],
  pregunta: {
    texto: "Cervantes, a El Quixot, fa cremar gairebé tots els llibres de cavalleries de la biblioteca de don Quixot, però en salva un de català. Quin i per què?",
    respuesta: "Salva el <mark>Tirant lo Blanc</mark> i diu que, pel seu estil, és «el millor llibre del món», perquè <b>«aquí mengen els cavallers, i dormen i moren als seus llits»</b>. És a dir, li agrada perquè és <b>realista</b>: els cavallers són humans i no herois impossibles.",
  },
  bloques: [
    {
      html: `<h3>El Segle d'Or valencià</h3><p>Al <b>segle XV</b>, la ciutat de <b>València</b> va ser la més rica i poblada de la Corona d'Aragó. Aquesta prosperitat econòmica va afavorir un gran esplendor cultural, que coneixem com el <mark>Segle d'Or</mark> de la literatura catalana. Hi destaquen el poeta <b>Ausiàs March</b> i el novel·lista <b>Joanot Martorell</b>, però també autors com Jaume Roig, Joan Roís de Corella i Isabel de Villena, la primera gran escriptora en català.</p>`,
      svg: L.filas("Autors del Segle d'Or", [
        ["Poesia", "Ausiàs March", "var(--pen)"],
        ["Novel·la", "Joanot Martorell", "var(--red)"],
        ["Altres", "Roig, Corella, Villena", "var(--leaf)"],
      ], "València, segle XV"),
    },
    {
      html: `<h3>Ausiàs March</h3><p><b>Ausiàs March</b> (c. 1400-1459) era un cavaller valencià que va viure a Gandia i a València. La seva gran novetat és que va ser el primer poeta important que va escriure en <mark>català</mark> i no en occità, la llengua tradicional de la poesia. A més, va deixar de banda les fórmules dels trobadors per parlar dels seus sentiments d'una manera <b>personal i profunda</b>, analitzant-se a si mateix.</p>`,
      svg: L.filas("La novetat d'Ausiàs March", [
        ["Llengua", "català, no occità", "var(--pen)"],
        ["To", "personal i introspectiu", "var(--red)"],
        ["Tema", "conflicte d'amor i ànima", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La poesia de March</h3><p>Els seus poemes es classifiquen en <b>cants d'amor</b>, on parla de la lluita entre l'amor <mark>carnal i l'amor espiritual</mark>; <b>cants de mort</b>, escrits després de la mort de la seva esposa; <b>cants morals</b>, sobre la virtut; i un <b>cant espiritual</b>, una pregària a Déu. Sovint s'adreça a la dama amb un nom amagat o <i>senyal</i>, com «Llir entre cards» o «Plena de seny». Un dels seus poemes més famosos comença: «Veles e vents han mos desigs complir».</p>`,
      svg: L.filas("Tipus de poemes d'Ausiàs March", [
        ["Cants d'amor", "carnal o espiritual", "var(--red)"],
        ["Cants de mort", "per l'esposa morta", "var(--muted)"],
        ["Cants morals", "la virtut", "var(--leaf)"],
        ["Cant espiritual", "pregària a Déu", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Joanot Martorell i el Tirant</h3><p><b>Joanot Martorell</b> (c. 1413-1465) era un cavaller valencià que va viure moltes baralles i desafiaments. Va començar a escriure el <b>Tirant lo Blanc</b> el 1460 i va morir sense veure'l publicat: es va imprimir a València el <mark>1490</mark>. La novel·la explica la vida de Tirant, un cavaller bretó que, gràcies al seu valor i a la seva intel·ligència, arriba a ser capità de l'Imperi grec i a salvar Constantinoble dels turcs.</p>`,
      svg: L.linea("Viatges de Tirant", [
        ["1", "Anglaterra: es fa cavaller", "var(--pen)"],
        ["2", "Sicília i Rodes", "var(--leaf)"],
        ["3", "Constantinoble: Carmesina", "var(--red)"],
        ["4", "nord d'Àfrica i retorn", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Una novel·la cavalleresca realista</h3><p>A diferència dels <b>llibres de cavalleries</b> fantàstics, plens de dracs i encanteris, el Tirant és una <mark>novel·la cavalleresca</mark> versemblant: els personatges mengen, es posen malalts, s'enamoren i moren al llit. Hi ha batalles, però també humor, intrigues de palau i una història d'amor amb la princesa <b>Carmesina</b>, amb personatges inoblidables com la divertida <b>Plaerdemavida</b> o la malvada <b>Viuda Reposada</b>.</p>`,
      svg: L.tabla("Llibres de cavalleries i Tirant", ["Cavalleries", "Tirant"], [
        ["fantasia", "realisme"], ["heroi perfecte", "heroi humà"], ["llocs imaginaris", "llocs reals"], ["seriós", "amb humor"],
      ]),
    },
  ],
  figura: {
    titulo: "El Segle d'Or en dues figures",
    svg: L.columnas("Ausiàs March i Joanot Martorell", [
      ["poesia", "AUSIÀS MARCH", ["en català, no occità;", "amor i introspecció"], "var(--pen)"],
      ["novel·la", "MARTORELL", ["Tirant lo Blanc,", "publicat el 1490"], "var(--red)"],
      ["ciutat", "VALÈNCIA", ["capital econòmica", "i cultural, s. XV"], "var(--leaf)"],
    ]),
  },
  video: { id: "A-JI4iYPpqQ", titulo: "Història resumida de Tirant lo Blanc", canal: "Aitana Doncel", vistas: 92963, megusta: 0, busqueda: "Tirant lo Blanc" },
  quiz: [
    { q: "El Segle d'Or de la literatura catalana té el centre a…", o: ["València", "Girona", "Perpinyà"], a: 0, e: "Al segle XV." },
    { q: "La gran novetat d'Ausiàs March és escriure en…", o: ["català i no en occità", "llatí", "castellà"], a: 0, e: "Trenca amb els trobadors." },
    { q: "«Llir entre cards» és…", o: ["un senyal per a la dama", "una novel·la", "un cavaller"], a: 0, e: "Nom amagat." },
    { q: "Qui va escriure el Tirant lo Blanc?", o: ["Joanot Martorell", "Ausiàs March", "Ramon Llull"], a: 0, e: "Cavaller valencià." },
    { q: "El Tirant es va imprimir l'any…", o: ["1490", "1229", "1605"], a: 0, e: "A València." },
  ],
  examen: [
    { q: "Els cants de mort d'Ausiàs March parlen de…", o: ["la mort de la seva esposa", "batalles", "la natura"], a: 0, e: "Dolor per la pèrdua." },
    { q: "La princesa de qui s'enamora Tirant és…", o: ["Carmesina", "Plaerdemavida", "la Viuda Reposada"], a: 0, e: "Filla de l'emperador." },
    { q: "Cervantes elogia el Tirant pel seu…", o: ["realisme", "to fantàstic", "llenguatge en llatí"], a: 0, e: "Els cavallers moren al llit." },
  ],
  feynman: ["Per què el segle XV és el Segle d'Or", "La novetat de la poesia d'Ausiàs March", "Els quatre tipus de cants de March", "Per què el Tirant és una novel·la realista"],
  mapa: mapa("SEGLE D'OR", "var(--eso)", [
    ["Context", "València, s. XV", "var(--leaf)"],
    ["Ausiàs March", "poesia en català", "var(--pen)"],
    ["Tirant", "Martorell, 1490", "var(--red)"],
    ["Realisme", "elogi de Cervantes", "var(--inf)"],
  ]),
  tarjetas: [
    ["Segle d'Or", "Esplendor de la literatura catalana al s. XV, amb centre a València."],
    ["Ausiàs March", "Poeta valencià (c. 1400-1459), el primer gran poeta en català."],
    ["Senyal", "Nom amagat amb què el poeta es refereix a la dama: «Llir entre cards»."],
    ["Tirant lo Blanc", "Novel·la de Joanot Martorell, impresa a València el 1490."],
    ["Novel·la cavalleresca", "Narració de cavallers versemblant, sense elements fantàstics."],
  ],
  familias: ["Escolteu junts una versió cantada de «Veles e vents» (per exemple, la de Raimon) i comenteu-la.", "Busqueu al mapa els llocs on viatja Tirant: Anglaterra, Sicília, Rodes, Constantinoble.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: el Segle d'Or valencià; la poesia d'Ausiàs March i la novel·la cavalleresca del Tirant lo Blanc; lectura de fragments adaptats (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Escoltar musicacions de poemes d'Ausiàs March i comparar-les.", "Fer un mapa interactiu dels viatges de Tirant.", "Comparar un capítol del Tirant amb una escena d'un llibre de cavalleries fantàstic."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: portal Joanot Martorell", url: "https://www.cervantesvirtual.com/portales/joanot_martorell/" },
    { t: "Ausiàs March, Viquipèdia", url: "https://ca.wikipedia.org/wiki/Ausi%C3%A0s_March" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Analitzar la mètrica i els recursos d'Ausiàs March", "Conèixer altres autors del Segle d'Or"],
  bloques: [
    { tras: "Ausiàs March", html: `<h3>La mètrica d'Ausiàs March</h3><p>Ausiàs March escriu gairebé sempre en <b>decasíl·labs</b>, versos de deu síl·labes amb una pausa interna (la <mark>cesura</mark>) després de la quarta síl·laba: <i>Veles e vents // han mos desigs complir</i>. Els versos s'agrupen en <b>estrofes de vuit versos</b> (cobles) i molts poemes acaben amb una <b>tornada</b>, una estrofa curta on apareix el senyal de la dama.</p><p>Per comptar les síl·labes d'un vers en català, comptem fins a l'última síl·laba <b>tònica</b> i hi fem les <b>sinalefes</b> (unim la vocal final d'una paraula amb la inicial de la següent). Aquesta forma, heretada dels trobadors, va ser imitada durant segles: fins i tot va influir en poetes castellans com Garcilaso de la Vega.</p>` },
    { tras: "La poesia de March", html: `<h3>Les imatges de March: comparacions i introspecció</h3><p>Una de les característiques més originals d'Ausiàs March és l'ús de <b>comparacions</b> amb la vida quotidiana per explicar els seus estats interiors. Molts poemes comencen amb una comparació llarga: «Així com cell qui en lo somni es delita…» (així com aquell que gaudeix d'un somni i, quan es desperta, se n'entristeix), el poeta viu de records d'un amor que ja no té.</p><p>Fa servir imatges del mar, de les tempestes, de la malaltia o de la mort. També és molt <mark>introspectiu</mark>: s'analitza, es contradiu i reconeix les seves febleses, una actitud molt moderna. Per això els poetes de molts segles després, com Vicent Andrés Estellés, l'han considerat un referent, i cantants com Raimon n'han popularitzat els versos.</p>` },
    { tras: "Joanot Martorell i el Tirant", html: `<h3>Els personatges del Tirant</h3>${L.tb(["Personatge", "Qui és"], [["Tirant", "cavaller bretó, valent, intel·ligent i enamoradís; arriba a ser capità de l'Imperi"], ["Carmesina", "princesa de Constantinoble, filla de l'emperador; estimada de Tirant"], ["Plaerdemavida", "donzella de la cort, alegre i enginyosa; ajuda els enamorats"], ["Viuda Reposada", "dida de Carmesina, enamorada de Tirant; intenta separar-los amb enganys"], ["Diafebus", "cosí i company inseparable de Tirant"], ["L'emperador", "governant de Constantinoble, ja vell, amenaçat pels turcs"]])}<p>Els noms ja diuen molt dels personatges: <i>Plaerdemavida</i> vol dir «plaer de la meva vida», i el de la <i>Viuda Reposada</i> és irònic, perquè no està gens tranquil·la. Martorell crea personatges amb <mark>profunditat psicològica</mark>, amb virtuts i defectes, molt lluny dels herois perfectes dels llibres de cavalleries.</p>` },
    { tras: "Una novel·la cavalleresca realista", html: `<h3>Per què el Tirant és una obra mestra</h3><p>El Tirant es considera una de les grans novel·les europees del segle XV per diverses raons:</p><ul><li>És <b>realista</b>: llocs reals, estratègia militar creïble, malalties, ferides i morts naturals.</li><li>Té un gran <b>sentit de l'humor</b> i de la ironia, sobretot en les escenes de la cort.</li><li>Barreja <b>molts registres</b>: discursos solemnes, cartes, diàlegs vius, descripcions de festes.</li><li>Reflecteix la <b>història</b> del seu temps: la caiguda de Constantinoble en mans dels turcs (1453) va impressionar tot Europa, i a la novel·la Tirant la salva.</li></ul><p>Moltes aventures s'inspiren en cavallers reals, com <b>Roger de Flor</b>, i en la crònica de Muntaner. Mario Vargas Llosa, premi Nobel, el va considerar una <mark>novel·la total</mark>, que vol abraçar tota la realitat d'un món.</p>` },
    { tras: "Una novel·la cavalleresca realista", html: `<h3>Altres veus del Segle d'Or</h3><p>A més de March i Martorell, la València del segle XV va donar altres autors importants:</p><ul><li><b>Jaume Roig</b>, metge, va escriure l'<i>Espill</i>, una obra en vers molt satírica sobre la vida d'un home que explica les seves desgràcies.</li><li><b>Joan Roís de Corella</b> va cultivar una prosa molt elaborada, plena de llatinismes, coneguda com a <mark>valenciana prosa</mark>, i també poesia religiosa i amorosa.</li><li><b>Isabel de Villena</b>, abadessa del monestir de la Trinitat, va escriure la <i>Vita Christi</i>, una vida de Jesús on dona molt de protagonisme a les dones, especialment a la Mare de Déu.</li></ul><p>Després d'aquest esplendor, als segles XVI i XVII la literatura culta en català va perdre pes davant del castellà, en l'època que tradicionalment s'ha anomenat <b>Decadència</b>.</p>` },
  ],
  videos: [
    ["Ausiàs March", L.vid("D1WhygpYezA", "Ausiàs March: vida i obra (Bit de Literatura)", "Sílvia Caballeria Ferrer", 13195)],
    ["Joanot Martorell i el Tirant", L.vid("yt3c_pM7-ak", "Tirant lo Blanc de Joanot Martorell. Contextualització", "Sílvia Caballeria Ferrer", 13749)],
  ],
  ejemplos: [
    ["Separa la cesura del vers «Veles e vents han mos desigs complir».", ["Comptem: Ve-les-e-vents. No hi ha sinalefa perquè «les» acaba en consonant: 4 síl·labes.", "La quarta síl·laba és «vents»: hi va la pausa.", "Segon hemistiqui: han mos de-sigs com-plir (6 síl·labes fins a la tònica)."], "Veles e vents // han mos desigs complir (4 + 6 = decasíl·lab)."],
    ["Per què el Tirant és una novel·la i no un llibre de cavalleries fantàstic?", ["Els llocs són reals: Anglaterra, Rodes, Constantinoble.", "Els personatges mengen, s'emmalalteixen i moren de manera natural.", "No hi ha dracs ni encanteris; hi ha estratègia militar i humor."], "perquè és versemblant i realista."],
    ["Explica el significat del nom Plaerdemavida.", ["Separem: plaer + de + ma + vida.", "Significa «plaer de la meva vida».", "Encaixa amb el seu caràcter alegre i divertit."], "és un nom parlant que descriu el personatge."],
  ],
  errores: [
    "Pensar que Ausiàs March va escriure en occità: la seva novetat és escriure en català.",
    "Confondre el Tirant lo Blanc amb un llibre de cavalleries fantàstic.",
    "Creure que Martorell va veure el Tirant publicat: va morir el 1465 i es va imprimir el 1490.",
    "Confondre Carmesina (la princesa) amb Plaerdemavida (la donzella).",
    "Situar el Segle d'Or a Barcelona: el centre va ser València.",
  ],
  ejercicios: [
    ["Per què València va ser el centre cultural del segle XV?", "Perquè era la ciutat més rica i poblada de la Corona d'Aragó, i la prosperitat va afavorir la cultura."],
    ["Quina és la principal novetat d'Ausiàs March?", "Escriure poesia en català, i no en occità, i amb un to personal i introspectiu."],
    ["Escriu els quatre tipus de cants d'Ausiàs March.", "Cants d'amor, cants de mort, cants morals i cant espiritual."],
    ["Què és un decasíl·lab?", "Un vers de deu síl·labes; en March sol tenir una cesura després de la quarta."],
    ["Què és un senyal? Escriu-ne un exemple.", "Un nom amagat per referir-se a la dama: «Llir entre cards» o «Plena de seny»."],
    ["Quan es va imprimir el Tirant lo Blanc i on?", "A València, el 1490."],
    ["Escriu tres personatges del Tirant i qui són.", "Tirant (el cavaller), Carmesina (la princesa) i Plaerdemavida (la donzella alegre)."],
    ["Què va dir Cervantes del Tirant?", "Que era «el millor llibre del món» perquè els cavallers hi mengen, dormen i moren als seus llits."],
    ["Quin fet històric reflecteix el Tirant?", "La caiguda de Constantinoble en mans dels turcs (1453): a la novel·la, Tirant la salva."],
    ["Qui era Isabel de Villena i què va escriure?", "Una abadessa valenciana que va escriure la Vita Christi."],
  ],
  quiz: [
    ["La cesura del decasíl·lab de March va després de la síl·laba…", ["4a", "2a", "8a"], 0, "4 + 6."],
    ["L'Espill és obra de…", ["Jaume Roig", "Martorell", "Corella"], 0, "Sàtira en vers."],
    ["La Viuda Reposada…", ["vol separar Tirant i Carmesina", "és la mare de Tirant", "és l'emperadriu"], 0, "Està enamorada de Tirant."],
    ["La «valenciana prosa» la cultiva…", ["Roís de Corella", "Ausiàs March", "Jaume I"], 0, "Prosa molt elaborada."],
    ["La caiguda de Constantinoble va ser el…", ["1453", "1229", "1490"], 0, "En mans dels turcs."],
  ],
  tarjetas: [
    ["Cesura", "Pausa interna del vers; en el decasíl·lab de March, després de la 4a síl·laba."],
    ["Plaerdemavida", "Donzella alegre i enginyosa del Tirant: «plaer de la meva vida»."],
    ["Isabel de Villena", "Abadessa valenciana, autora de la Vita Christi."],
  ],
});
