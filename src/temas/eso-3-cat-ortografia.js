// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Ortografia: accentuació i apòstrof",
  minutos: 55,
  objetivos: ["Aplicar les regles generals d'accentuació", "Triar entre accent obert i tancat", "Apostrofar correctament articles, preposicions i pronoms, i fer les contraccions"],
  claves: ["síl·laba tònica", "aguda", "plana", "esdrúixola", "accent obert", "accent tancat", "accent diacrític", "apòstrof", "contracció", "dièresi"],
  pregunta: {
    texto: "Per què «cafè» porta accent i «cafetera» no? I per què escrivim «l'àvia» però «la universitat»?",
    respuesta: "«Cafè» és una paraula <b>aguda</b> acabada en vocal, i les agudes acabades en vocal s'accentuen; «cafetera» és <b>plana</b> acabada en vocal, i aquestes no s'accentuen. I «la» no s'apostrofa davant d'una <mark>i o u àtones</mark>: «la universitat», però sí davant de vocal tònica: «l'àvia».",
  },
  bloques: [
    {
      html: `<h3>Agudes, planes i esdrúixoles</h3><p>En cada paraula hi ha una síl·laba que pronunciem amb més força: la <b>síl·laba tònica</b>. Segons on és, les paraules són <b>agudes</b> (l'última: <i>ca-<u>fè</u></i>), <b>planes</b> (la penúltima: <i><u>tau</u>-la</i>) o <b>esdrúixoles</b> (l'antepenúltima: <i><u>mú</u>-si-ca</i>). Per saber si una paraula porta accent, primer cal trobar la síl·laba tònica i saber quina mena de paraula és.</p>`,
      svg: L.filas("Tipus de paraules segons la síl·laba tònica", [
        ["Aguda", "ca-FÈ, can-ÇÓ", "var(--pen)"],
        ["Plana", "TAU-la, LLA-pis", "var(--leaf)"],
        ["Esdrúixola", "MÚ-si-ca", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Les regles d'accentuació</h3><p>S'accentuen les <b>agudes</b> acabades en <mark>vocal, vocal + s, -en o -in</mark>: <i>sofà</i>, <i>cafès</i>, <i>també</i>, <i>camí</i>. Les <b>planes</b> s'accentuen quan <b>no</b> acaben així: <i>llàpis</i> no (acaba en vocal + s), però sí <i>fàcil</i>, <i>préssec</i>, <i>dièsel</i>. Les <b>esdrúixoles</b> s'accentuen sempre: <i>música</i>, <i>àguila</i>, <i>pàgina</i>.</p>`,
      svg: L.filas("Quan s'accentua", [
        ["Agudes", "vocal, vocal+s, -en, -in", "var(--pen)"],
        ["Planes", "les altres terminacions", "var(--leaf)"],
        ["Esdrúixoles", "sempre", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Accent obert o tancat</h3><p>En català hi ha dos accents. L'<b>accent obert</b> o greu va sobre <i>à</i>, <i>è</i>, <i>ò</i>: <i>mà</i>, <i>cafè</i>, <i>història</i>. L'<b>accent tancat</b> o agut va sobre <i>é</i>, <i>í</i>, <i>ó</i>, <i>ú</i>: <i>també</i>, <i>camí</i>, <i>cançó</i>, <i>ningú</i>. La <i>a</i> sempre porta accent obert i la <i>i</i> i la <i>u</i>, sempre tancat. Amb la <i>e</i> i la <i>o</i> depèn de la <mark>pronúncia</mark>: <i>cafè</i> però <i>també</i>; <i>història</i> però <i>cançó</i>.</p>`,
      svg: L.tabla("Accent obert i tancat", ["Obert", "Tancat"], [
        ["à: sofà", "—"], ["è: cafè", "é: també"], ["ò: història", "ó: cançó"], ["—", "í, ú: camí, ningú"],
      ]),
    },
    {
      html: `<h3>L'apòstrof</h3><p>L'<b>apòstrof</b> (') indica que una vocal desapareix davant d'una altra. S'apostrofen els articles <b>el</b> i <b>la</b> (<i>l'home</i>, <i>l'escola</i>), la preposició <b>de</b> (<i>d'aigua</i>), els pronoms febles (<i>m'agrada</i>, <i>t'estimo</i>, <i>l'agafo</i>, <i>n'hi ha</i>) i l'article personal (<i>n'Andreu</i>). Sempre davant de <mark>vocal o h</mark>, perquè la h no sona: <i>l'hora</i>, <i>d'herba</i>.</p>`,
      svg: L.filas("Paraules que s'apostrofen", [
        ["el, la", "l'home, l'escola", "var(--pen)"],
        ["de", "d'aigua, d'herba", "var(--leaf)"],
        ["pronoms", "m'agrada, l'agafo", "var(--red)"],
      ], "davant de vocal o h"),
    },
    {
      html: `<h3>Les contraccions</h3><p>Quan les preposicions <b>a</b>, <b>de</b> i <b>per</b> van davant dels articles <b>el</b> i <b>els</b>, s'uneixen i formen una <mark>contracció</mark>: <i>a + el = al</i>, <i>de + els = dels</i>, <i>per + el = pel</i>. També hi ha <i>ca + el = cal</i> i <i>ca + en = can</i>. Però si l'article s'apostrofa, no hi ha contracció: <i>a l'home</i>, <i>de l'avi</i>, <i>per l'estiu</i>. I amb l'article femení tampoc: <i>a la platja</i>.</p>`,
      svg: L.filas("Contraccions", [
        ["a + el(s)", "al, als", "var(--pen)"],
        ["de + el(s)", "del, dels", "var(--leaf)"],
        ["per + el(s)", "pel, pels", "var(--red)"],
        ["ca + el, en", "cal, can", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com decidir si una paraula porta accent",
    svg: L.pasos("Passos per accentuar una paraula", [
      ["Síl·laba tònica", ["on carrega", "la veu?"], "var(--pen)"],
      ["Tipus", ["aguda, plana", "o esdrúixola"], "var(--leaf)"],
      ["Terminació", ["vocal, vocal+s,", "-en, -in?"], "var(--red)"],
      ["Obert o tancat", ["à sempre obert;", "í, ú tancat"], "var(--inf)"],
    ]),
  },
  video: { id: "MbW4uRvLN64", titulo: "L'accentuació en català", canal: "OK CATALÀ", vistas: 208038, megusta: 0, busqueda: "accentuació català" },
  quiz: [
    { q: "«Cançó» és una paraula…", o: ["aguda", "plana", "esdrúixola"], a: 0, e: "La tònica és l'última." },
    { q: "Les planes acabades en vocal…", o: ["no s'accentuen", "s'accentuen sempre", "porten dièresi"], a: 0, e: "Taula, casa." },
    { q: "La «a» accentuada sempre porta accent…", o: ["obert", "tancat", "diacrític"], a: 0, e: "à." },
    { q: "Quina forma és correcta?", o: ["l'escola", "la escola", "le escola"], a: 0, e: "Davant de vocal." },
    { q: "a + els =", o: ["als", "a els", "al's"], a: 0, e: "Contracció." },
  ],
  examen: [
    { q: "Les esdrúixoles…", o: ["s'accentuen sempre", "no s'accentuen mai", "només si acaben en -s"], a: 0, e: "Música, pàgina." },
    { q: "Quina és correcta?", o: ["a l'home", "al home", "al'home"], a: 0, e: "Si s'apostrofa, no hi ha contracció." },
    { q: "«Fàcil» porta accent perquè és…", o: ["plana acabada en consonant", "aguda", "esdrúixola"], a: 0, e: "Plana amb terminació no protegida." },
  ],
  feynman: ["Com es troba la síl·laba tònica", "Les regles d'accentuació de les agudes i les planes", "Quan es fa servir l'accent obert i quan el tancat", "Quan s'apostrofa i quan es contrau"],
  mapa: mapa("ACCENT I APÒSTROF", "var(--eso)", [
    ["Agudes", "vocal, vocal+s, -en, -in", "var(--pen)"],
    ["Planes", "les altres", "var(--leaf)"],
    ["Apòstrof", "el, la, de, pronoms", "var(--red)"],
    ["Contracció", "al, del, pel, can", "var(--inf)"],
  ]),
  tarjetas: [
    ["Paraula aguda", "La síl·laba tònica és l'última: cafè, camí."],
    ["Agudes amb accent", "Les acabades en vocal, vocal + s, -en o -in."],
    ["Planes amb accent", "Les que no acaben en vocal, vocal + s, -en ni -in: fàcil."],
    ["Accent obert i tancat", "à sempre obert; í, ú sempre tancat; e i o, segons la pronúncia."],
    ["Contraccions", "al, als, del, dels, pel, pels, cal, can."],
  ],
  familias: ["Jugueu a dictar-vos cinc paraules cada dia i comproveu-ne els accents amb el diccionari.", "Busqueu errors d'apòstrof en cartells i rètols del carrer.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: normes ortogràfiques d'accentuació, accent diacrític, dièresi, apostrofació i contracció segons l'Ortografia catalana de l'IEC (2017) (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Dictats breus i autocorrecció amb codi de colors.", "Classificar paraules en agudes, planes i esdrúixoles en un mural.", "Concurs d'apostrofació amb exemples i excepcions."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Ortografia catalana (2017)", url: "https://www.iec.cat/llengua/documents/ortografia_catalana_versio_digital.pdf" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Conèixer els accents diacrítics vigents", "Aplicar les excepcions de l'apostrofació"],
  bloques: [
    { tras: "Les regles d'accentuació", html: `<h3>Diftongs, hiats i dièresi</h3><p>Per comptar bé les síl·labes cal saber si dues vocals juntes formen una sola síl·laba (<b>diftong</b>: <i>cau-re</i>, <i>noi</i>, <i>quan</i>) o dues (<b>hiat</b>: <i>ve-í</i>, <i>pa-ís</i>). Això afecta l'accentuació: <i>veí</i> és aguda acabada en vocal i, per tant, porta accent.</p><p>La <b>dièresi</b> (¨) té dues funcions: indica que la <i>u</i> sona en els grups <i>gü</i> i <i>qü</i> davant de <i>e</i> o <i>i</i> (<i>pingüí</i>, <i>qüestió</i>), i indica que una <i>i</i> o una <i>u</i> fan <mark>hiat</mark> quan no hi ha d'anar accent: <i>veïna</i>, <i>raïm</i>, <i>diürn</i>. Excepció: l'infinitiu, el gerundi, el futur i el condicional dels verbs acabats en <i>-uir</i> no porten dièresi: <i>conduir</i>, <i>traduint</i>, <i>conduiré</i>.</p>` },
    { tras: "Accent obert o tancat", html: `<h3>E i o: obertes o tancades?</h3><p>Com que l'accent de la <i>e</i> i la <i>o</i> depèn de la pronúncia, i aquesta varia segons el dialecte, és útil conèixer algunes pistes de la norma general:</p>${L.tb(["Vocal", "Exemples"], [["é tancada", "també, només, conté"], ["è oberta", "cafè, francès, ciència"], ["ó tancada", "cançó, acció, famós"], ["ò oberta", "història, òpera, mòbil"]])}<p>Algunes pistes: les terminacions <i>-ó</i>, <i>-ós</i> i <i>-ció</i> porten accent tancat, i les terminacions <i>-ència</i> i <i>-òria</i>, obert.</p><p>Quan dubtis, consulta el <mark>diccionari</mark>: amb la pràctica, la majoria de paraules s'aprenen de memòria.</p>` },
    { tras: "Accent obert o tancat", html: `<h3>Els accents diacrítics</h3><p>L'<b>accent diacrític</b> serveix per distingir paraules que s'escriuen igual però tenen significats diferents. Des de l'Ortografia de l'IEC de 2017, només en queden <mark>quinze</mark>:</p><p><i>bé</i> (adverbi) / <i>be</i> (xai) · <i>déu</i> (divinitat) / <i>deu</i> (número) · <i>és</i> (verb) / <i>es</i> (pronom) · <i>mà</i> / <i>ma</i> (possessiu) · <i>més</i> / <i>mes</i> · <i>món</i> / <i>mon</i> · <i>pèl</i> / <i>pel</i> · <i>què</i> / <i>que</i> · <i>sé</i> / <i>se</i> · <i>sí</i> / <i>si</i> · <i>sóc</i> / <i>soc</i> (de suro) · <i>són</i> / <i>son</i> (dormir) · <i>té</i> / <i>te</i> · <i>ús</i> / <i>us</i> · <i>vós</i> / <i>vos</i>.</p><p>Paraules que abans portaven diacrític i ara no: <i>dona</i> (de donar i el nom), <i>net</i>, <i>adeu</i>… Si trobes textos antics amb <i>dóna</i> o <i>móra</i>, és perquè són anteriors a la reforma.</p>` },
    { tras: "L'apòstrof", html: `<h3>Les excepcions de l'apostrofació</h3><p>L'article <b>la</b> i el pronom <b>la</b> <mark>no s'apostrofen</mark> en aquests casos:</p><ul><li>Davant de <i>i</i>, <i>u</i>, <i>hi</i>, <i>hu</i> <b>àtones</b>: <i>la universitat</i>, <i>la història</i>, <i>la humanitat</i>, <i>la invitació</i>. En canvi, si són tòniques, sí: <i>l'illa</i>, <i>l'última</i>.</li><li>Davant del prefix negatiu <i>a-</i>: <i>la anormalitat</i>, <i>la asimetria</i>.</li><li>Davant dels noms de les lletres: <i>la essa</i>, <i>la erra</i>.</li><li>Davant de <i>una</i> quan es refereix a l'hora: <i>la una</i>.</li></ul><p>L'article <b>el</b> i la preposició <b>de</b> no s'apostrofen davant d'una <i>i</i> o <i>u</i> que fan de consonant (semivocals): <i>el iogurt</i>, <i>de iode</i>. I recorda que els <b>plurals</b> <i>els</i> i <i>les</i> no s'apostrofen mai.</p>` },
    { tras: "Les contraccions", html: `<h3>Els pronoms febles: apòstrof i guionet</h3><p>Els pronoms febles s'escriuen de manera diferent segons la seva posició:</p>${L.tb(["Posició", "Com s'escriu", "Exemples"], [["Davant del verb, verb amb consonant", "forma plena separada", "<i>em diu</i>, <i>el compro</i>, <i>en vull</i>"], ["Davant del verb, verb amb vocal o h", "forma elidida amb apòstrof", "<i>m'agrada</i>, <i>l'he vist</i>, <i>n'hi ha</i>"], ["Darrere del verb acabat en consonant o -u", "forma plena amb guionet", "<i>agafeu-lo</i>, <i>fes-ho</i>, <i>mirant-la</i>"], ["Darrere del verb acabat en vocal", "forma reduïda amb apòstrof", "<i>compra'n</i>, <i>porta'l</i>, <i>menja't</i>"]])}<p>Quan en van dos darrere del verb, s'uneixen amb guionets o apòstrofs: <i>dona-li-ho</i>, <i>porta-me'l</i>. El pronom <i>ho</i> no s'apostrofa mai: <i>compra-ho</i>. Aquesta escriptura reflecteix la <mark>pronúncia</mark>: llegeix en veu alta i ho veuràs.</p>` },
  ],
  videos: [
    ["Diftongs, hiats i dièresi", L.vid("ZhYFyV62CVk", "Diftongs i hiats: què són i com identificar-los", "OK CATALÀ", 253042)],
    ["L'apòstrof", L.vid("gmevqUgcVUw", "Com s'apostrofa en català: explicació i exemples", "Parlem d'escriure en català", 49477)],
  ],
  ejemplos: [
    ["Accentua, si cal: «pastis», «examen», «telefon».", ["Pastís: aguda acabada en -is (vocal + s) → s'accentua: pastís.", "Examen: plana acabada en -en → no s'accentua.", "Telèfon: esdrúixola → sempre; e oberta → telèfon."], "pastís, examen, telèfon."],
    ["Apostrofa si cal: «la illa», «la idea», «de iogurt».", ["«Illa»: i tònica → l'illa.", "«Idea»: i àtona → la idea.", "«Iogurt»: i semivocal → de iogurt."], "l'illa, la idea, de iogurt."],
    ["Escriu correctament: «Vaig a el cine amb els amics de el meu germà».", ["a + el = al.", "de + el = del.", "«els amics» ja és correcte."], "Vaig al cine amb els amics del meu germà."],
  ],
  errores: [
    "Accentuar planes acabades en vocal + s: «llàpis» en lloc de «llapis».",
    "Posar accent obert a la i: «camì» en lloc de «camí».",
    "Escriure «dóna» amb accent: des del 2017 s'escriu «dona».",
    "Apostrofar «la» davant d'i/u àtones: «l'universitat».",
    "Fer contracció quan s'apostrofa: «al home» en lloc de «a l'home».",
    "Escriure els pronoms darrere del verb sense guionet: «comprao» en lloc de «compra-ho».",
  ],
  ejercicios: [
    ["Classifica: «ordinador», «música», «arbre».", "Ordinador: aguda. Música: esdrúixola. Arbre: plana."],
    ["Accentua, si cal: «perque», «facil», «cami».", "Perquè, fàcil, camí."],
    ["Obert o tancat? «cafe», «canço», «historia».", "Cafè (obert), cançó (tancat), història (obert)."],
    ["Escriu tres parells de diacrítics vigents.", "Per exemple: bé/be, més/mes, sí/si."],
    ["Posa dièresi on calgui: «veina», «pingui», «raim».", "Veïna, pingüí, raïm."],
    ["Apostrofa si cal: «la hora», «la humitat», «el home».", "L'hora, la humitat (u àtona), l'home."],
    ["Fes la contracció si cal: «per el carrer», «a la platja», «de els nens».", "Pel carrer, a la platja (no hi ha contracció), dels nens."],
    ["Corregeix: «Me agrada molt la escola».", "M'agrada molt l'escola."],
    ["Escriu amb el pronom darrere: «(agafar) el llibre» → agafa + el.", "Agafa'l."],
    ["Escriu amb el pronom darrere: «(comprar) això» → compreu + ho.", "Compreu-ho."],
  ],
  quiz: [
    ["Quin accent diacrític es manté?", ["més", "dóna", "móra"], 0, "Més/mes."],
    ["«La universitat» no s'apostrofa perquè la u és…", ["àtona", "tònica", "una consonant"], 0, "Excepció."],
    ["Quina és correcta?", ["pingüí", "pinguí", "pingüì"], 0, "La u sona."],
    ["«Porta + el» darrere del verb:", ["porta'l", "porta-el", "portal"], 0, "Forma reduïda."],
    ["«Veí» porta accent perquè és…", ["aguda acabada en vocal", "plana", "esdrúixola"], 0, "Hiat ve-í."],
  ],
  tarjetas: [
    ["Diacrítics (2017)", "Només 15: bé, déu, és, mà, més, món, pèl, què, sé, sí, sóc, són, té, ús, vós."],
    ["La no s'apostrofa", "Davant d'i/u àtones, del prefix a-, de les lletres i de «la una»."],
    ["Dièresi", "Fa sonar la u (pingüí) o marca hiat sense accent (veïna)."],
  ],
});
