// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Fonètica: vocals i consonants",
  minutos: 50,
  objetivos: ["Distingir entre sons i lletres", "Conèixer el sistema vocàlic català i la vocal neutra", "Diferenciar les consonants sordes i sonores i escriure-les correctament"],
  claves: ["fonètica", "so", "lletra", "vocal tònica", "vocal àtona", "vocal neutra", "e oberta", "o oberta", "consonant sorda", "consonant sonora", "dígraf"],
  pregunta: {
    texto: "Per què «casa» i «caça» s'escriuen diferent si només canvia una lletra? I per què molts catalans pronuncien igual la primera i l'última lletra de «casa»?",
    respuesta: "Perquè la <b>s</b> de «casa» és <mark>sonora</mark> (fa vibrar les cordes vocals) i la <b>ç</b> de «caça» és <mark>sorda</mark>. I en català central, la <b>a àtona</b> final es pronuncia com una <b>vocal neutra</b>, un so que no té lletra pròpia. La fonètica estudia aquests sons.",
  },
  bloques: [
    {
      html: `<h3>Sons i lletres</h3><p>La <b>fonètica</b> estudia els <b>sons</b> de la llengua, mentre que l'ortografia estudia les <b>lletres</b> que fem servir per escriure'ls. No sempre hi ha correspondència: una lletra pot representar diversos sons (la <i>x</i> de <i>xarop</i> i la de <i>taxi</i>), i un mateix so es pot escriure amb lletres diferents (<i>cel</i>, <i>sol</i>, <i>caça</i>). Per representar els sons amb precisió es fa servir l'<mark>alfabet fonètic</mark>, entre claudàtors: [kazə].</p>`,
      svg: L.filas("Sons i lletres no sempre coincideixen", [
        ["Una lletra", "x: xarop, taxi", "var(--pen)"],
        ["Un so [s]", "cel, sol, caça", "var(--red)"],
        ["Sense so", "h: hora, home", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El sistema vocàlic</h3><p>En síl·laba <b>tònica</b>, el català té <mark>set vocals</mark>: [a], [ɛ] (e oberta), [e] (e tancada), [i], [ɔ] (o oberta), [o] (o tancada) i [u]. Per això distingim, per exemple, <i>déu</i> [e] i <i>deu</i> [ɛ], el número. En síl·laba <b>àtona</b>, en canvi, moltes vocals es redueixen: en català central les <i>a</i> i <i>e</i> àtones sonen com a vocal neutra [ə] i la <i>o</i> àtona sona [u].</p>`,
      svg: L.filas("Les set vocals tòniques", [
        ["a", "casa", "var(--pen)"],
        ["e oberta / tancada", "cel [ɛ] / cec [e]", "var(--leaf)"],
        ["i, u", "fil, lluna", "var(--inf)"],
        ["o oberta / tancada", "roda [ɔ] / boca [o]", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La vocal neutra</h3><p>La <b>vocal neutra</b> [ə] és un so entre la <i>a</i> i la <i>e</i>, molt característic del català central, balear i rossellonès. Apareix en síl·labes <b>àtones</b> i s'escriu <i>a</i> o <i>e</i>: <i>c<u>a</u>s<u>a</u></i>, <i>p<u>e</u>r<u>a</u></i>. Com que sona igual, de vegades dubtem en escriure. El truc és buscar una <mark>paraula de la mateixa família</mark> on aquesta vocal sigui tònica: <i>pescador</i> amb e perquè ve de <i>peix</i>.</p>`,
      svg: L.frase("Truc de la vocal neutra: pescador", [
        ["p_scador", "dubte", "var(--muted)"], ["peix", "e tònica", "var(--leaf)"],
        ["pescador", "amb e", "var(--pen)"],
      ], "busca la família"),
    },
    {
      html: `<h3>Consonants sordes i sonores</h3><p>Les consonants poden ser <b>sordes</b>, si les cordes vocals no vibren (<i>p, t, k, f, s</i>), o <b>sonores</b>, si vibren (<i>b, d, g, v, z</i>). En català hi ha parelles que distingeixen paraules: <i>casa</i> [z] / <i>caça</i> [s], <i>rossa</i> [s] / <i>rosa</i> [z]. Posa't la mà al coll i pronuncia «sss» i «zzz»: en el segon cas notaràs la <mark>vibració</mark>.</p>`,
      svg: L.tabla("Parelles sorda i sonora", ["Sorda", "Sonora"], [
        ["p: pala", "b: bala"], ["t: tos", "d: dos"], ["s: caça", "z: casa"], ["x: xoc", "j: joc"],
      ]),
    },
    {
      html: `<h3>Els dígrafs</h3><p>Un <b>dígraf</b> és un grup de <mark>dues lletres que representen un sol so</mark>. Els del català són: <i>ll</i> (<i>lluna</i>), <i>ny</i> (<i>canya</i>), <i>rr</i> (<i>carro</i>), <i>ss</i> (<i>massa</i>), <i>l·l</i> (<i>col·legi</i>), <i>ig</i> (<i>maig</i>), <i>tx</i> (<i>cotxe</i>), <i>tg</i> i <i>tj</i> (<i>metge</i>, <i>platja</i>), <i>qu</i> i <i>gu</i> davant de <i>e</i>, <i>i</i> (<i>que</i>, <i>guerra</i>). Els dígrafs es tenen en compte per separar síl·labes: <i>car-ro</i>, <i>mas-sa</i>.</p>`,
      svg: L.filas("Alguns dígrafs", [
        ["ll, ny", "lluna, canya", "var(--pen)"],
        ["rr, ss", "carro, massa", "var(--leaf)"],
        ["l·l", "col·legi", "var(--red)"],
        ["tx, tg, tj", "cotxe, metge, platja", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "El triangle vocàlic del català",
    svg: L.columnas("Vocals segons l'obertura", [
      ["anteriors", "i · e · ɛ", ["fil, cec,", "cel"], "var(--pen)"],
      ["central", "a · ə", ["casa: [a] tònica,", "[ə] àtona"], "var(--red)"],
      ["posteriors", "u · o · ɔ", ["lluna, boca,", "roda"], "var(--leaf)"],
    ]),
  },
  video: { id: "IzFV02ofQPs", titulo: "Vocals obertes i tancades del català (pràctica inclosa)", canal: "Català al Natural", vistas: 35011, megusta: 0, busqueda: "vocals obertes i tancades català" },
  quiz: [
    { q: "Quantes vocals tòniques té el català?", o: ["Set", "Cinc", "Tres"], a: 0, e: "a, ɛ, e, i, ɔ, o, u." },
    { q: "La vocal neutra apareix en síl·labes…", o: ["àtones", "tòniques", "finals amb accent"], a: 0, e: "Casa, pera." },
    { q: "La s de «casa» és…", o: ["sonora", "sorda", "muda"], a: 0, e: "Entre vocals, s sona [z]." },
    { q: "«Ny» és un…", o: ["dígraf", "diftong", "hiat"], a: 0, e: "Dues lletres, un so." },
    { q: "La h en català…", o: ["no sona", "sona com j", "sona com g"], a: 0, e: "És muda." },
  ],
  examen: [
    { q: "Quin parell distingeix sorda i sonora?", o: ["caça / casa", "casa / cases", "mar / mare"], a: 0, e: "[s] / [z]." },
    { q: "Com saps que «pescador» s'escriu amb e?", o: ["Per «peix»", "Per «pasta»", "No es pot saber"], a: 0, e: "Família de paraules." },
    { q: "Com se separa «carro»?", o: ["car-ro", "ca-rro", "carr-o"], a: 0, e: "El dígraf rr se separa." },
  ],
  feynman: ["La diferència entre so i lletra", "Les set vocals tòniques del català", "Què és la vocal neutra i el truc per escriure-la", "Consonants sordes i sonores amb exemples"],
  mapa: mapa("FONÈTICA", "var(--eso)", [
    ["Vocals tòniques", "set: e i o obertes i tancades", "var(--pen)"],
    ["Vocal neutra", "a/e àtones [ə]", "var(--red)"],
    ["Consonants", "sordes · sonores", "var(--leaf)"],
    ["Dígrafs", "ll, ny, rr, ss, l·l…", "var(--inf)"],
  ]),
  tarjetas: [
    ["Fonètica", "Estudi dels sons de la llengua."],
    ["Vocal neutra", "So [ə] de les a i e àtones en català central: casa, pera."],
    ["Consonant sonora", "La que es pronuncia fent vibrar les cordes vocals: b, d, g, z."],
    ["Dígraf", "Dues lletres que representen un sol so: ll, ny, rr, ss, l·l."],
    ["Truc de la família", "Per escriure una vocal àtona, busca una paraula de la família on sigui tònica."],
  ],
  familias: ["Jugueu a dir parelles mínimes (casa/caça, rosa/rossa) i noteu amb la mà al coll la vibració.", "Compareu com pronuncien el català persones de llocs diferents (Lleida, València, Mallorca).", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: sistema fonològic del català, vocalisme tònic i àton, consonantisme, relació entre so i grafia i variació dialectal (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Gravar-se llegint parelles mínimes i escoltar-ne la diferència.", "Mapa dels parlars: com sona la vocal àtona a cada territori.", "Dictat de paraules amb s sorda i sonora."],
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
  objetivos: ["Escriure correctament la essa sorda i sonora", "Reconèixer la variació fonètica entre els parlars"],
  bloques: [
    { tras: "El sistema vocàlic", html: `<h3>Les vocals àtones segons el parlar</h3><p>El català té dos grans blocs dialectals, i una de les diferències principals és com es pronuncien les vocals àtones:</p>${L.tb(["Parlars", "a i e àtones", "o àtona", "Exemple: «porta»"], [["Orientals (central, balear, rossellonès)", "vocal neutra [ə]", "sona [u]", "[ˈpɔrtə]"], ["Occidentals (nord-occidental, valencià)", "es distingeixen: [a] i [e]", "sona [o]", "[ˈpɔrta]"]])}<p>Per això un parlant de Lleida o de València distingeix clarament <i>pera</i> i <i>para</i> en posició àtona, mentre que un de Barcelona les pot confondre. Totes les pronúncies són <mark>correctes</mark>: l'estàndard oral accepta les diverses varietats. Però l'escriptura és <b>comuna</b> per a tothom, i això ens obliga a conèixer l'ortografia encara que no la sentim.</p>` },
    { tras: "La vocal neutra", html: `<h3>O o u àtones?</h3><p>Igual que passa amb la <i>a</i> i la <i>e</i>, en català oriental la <i>o</i> àtona sona [u]: diem [kulɔr] i escrivim <i>color</i>. Per saber si cal escriure <i>o</i> o <i>u</i>, també ens ajuda la família de paraules:</p><ul><li><i>Bosquet</i> amb <i>o</i> per <i>bosc</i>; <i>joguina</i> amb <i>o</i> per <i>joc</i>; <i>florista</i> amb <i>o</i> per <i>flor</i>.</li><li>Compte amb uns quants verbs que alternen <i>o</i> àtona i <i>u</i> tònica: <i>cosir</i> (<i>cuso</i>), <i>tossir</i> (<i>tusso</i>), <i>sortir</i> (<i>surto</i>), <i>collir</i> (<i>cullo</i>) i <i>escopir</i> (<i>escupo</i>). En aquests, la família no ajuda.</li></ul><p>Quan no hi ha cap paraula de referència, cal <mark>memoritzar</mark> la grafia o consultar el diccionari: <i>cuina</i>, <i>fusta</i>, <i>formatge</i>, <i>tovallola</i>.</p>` },
    { tras: "Consonants sordes i sonores", html: `<h3>Com s'escriu la essa</h3><p>La <b>essa sorda</b> [s] i la <b>essa sonora</b> [z] s'escriuen de maneres diferents segons la posició:</p>${L.tb(["So", "Grafies", "Exemples"], [["[s] a l'inici", "s, c (davant e, i)", "<i>sol</i>, <i>cel</i>, <i>cinc</i>"], ["[s] entre vocals", "ss, ç (davant a, o, u), c (davant e, i)", "<i>massa</i>, <i>caça</i>, <i>feliços</i>"], ["[s] després de consonant", "s, c, ç", "<i>pensar</i>, <i>dolça</i>"], ["[z] entre vocals", "s", "<i>casa</i>, <i>rosa</i>"], ["[z] a l'inici o després de consonant", "z", "<i>zero</i>, <i>onze</i>, <i>dotze</i>"]])}<p>El truc principal: entre vocals, <mark>una s sona [z] i dues ss sonen [s]</mark>. Per això <i>cosí</i> (família) i <i>cossi</i> (recipient) són paraules diferents.</p>` },
    { tras: "Consonants sordes i sonores", html: `<h3>L'ensordiment i altres fenòmens</h3><p>A final de paraula, les consonants sonores <b>s'ensordeixen</b>: <i>verd</i> sona [bɛrt], <i>sang</i> sona [saŋk] i <i>àrab</i> sona [aɾəp]. En canvi, quan la paraula fa el femení o el plural, la consonant torna a sonar: <i>verda</i>, <i>àrabs</i>. Per això, per saber com s'escriu una consonant final, ens fixem en les <mark>formes derivades</mark>: <i>verd</i> amb <i>d</i> per <i>verda</i> i <i>verdura</i>; <i>sord</i> amb <i>d</i> per <i>sorda</i>. Hi ha excepcions: <i>llop</i> s'escriu amb <i>p</i>, encara que el femení sigui <i>lloba</i>.</p><p>Un altre fenomen és la <b>sonorització</b>: quan una paraula acaba en s i la següent comença per vocal, la s es fa sonora: <i>els amics</i> [əlzəmiks]. I en molts parlars la <i>v</i> i la <i>b</i> es pronuncien igual, tot i que en algunes zones de les Balears i el País Valencià encara es distingeixen.</p>` },
    { tras: "Els dígrafs", html: `<h3>La x i els seus sons</h3><p>La lletra <i>x</i> pot representar diferents sons:</p><ul><li>[ʃ], com el so de <i>xarxa</i>, <i>caixa</i> o <i>peix</i>. Després de <i>i</i> (<i>caixa</i>) i a l'inici de paraula (<i>xarop</i>) s'escriu <i>x</i>.</li><li>[tʃ], com a <i>xocolata</i> en molts parlars, o a <i>cotxe</i>, on s'escriu <i>tx</i>; a final de paraula, s'escriu <i>tx</i> o <i>ig</i>: <i>despatx</i>, <i>maig</i>.</li><li>[ks], com a <i>taxi</i> o <i>text</i>.</li><li>[gz], com a <i>examen</i> o <i>exacte</i>.</li></ul><p>Fixa't també en la <mark>ela geminada</mark> (<i>l·l</i>), que representa una <i>l</i> doble i llarga: <i>col·legi</i>, <i>il·lusió</i>, <i>novel·la</i>. Cal escriure el punt volat entre les dues eles, i no un punt baix ni un guionet.</p>` },
  ],
  videos: [
    ["La vocal neutra", L.vid("_qywoFr895s", "La vocal neutra en català: què és i com es pronuncia?", "OK CATALÀ", 32601)],
    ["Com s'escriu la essa", L.vid("BZfCx6qFtPk", "Essa sonora i essa sorda", "Escola a casa", 70891)],
  ],
  ejemplos: [
    ["A o e? «p_ixater», «t_rrós».", ["«P_ixater» ve de «peix», amb e tònica.", "«T_rrós» ve de «terra», amb e tònica.", "Si cap paraula de la família no ajuda, consultem el diccionari."], "peixater, terrós."],
    ["S, ss o z? «ca_a» (habitatge), «ro_a» (de color vermell), «do_e» (12).", ["Casa: so [z] entre vocals → s.", "Rossa: so [s] entre vocals → ss.", "Dotze: [dz] després de t → z."], "casa, rossa, dotze."],
    ["Com s'escriu la consonant final de «ver_» i «sor_»?", ["A final de paraula, d i t sonen igual [t].", "Busquem el femení o un derivat: «verda», «verdura»; «sorda».", "La d hi sona clarament, per tant s'escriu d."], "verd, sord."],
  ],
  errores: [
    "Confondre so i lletra: la h no té so però és una lletra.",
    "Escriure a o e àtones al tun-tun, sense buscar la família de paraules.",
    "Escriure una sola s quan el so és sord entre vocals: «pasar» en lloc de «passar».",
    "Fer servir punt baix o guionet en la ela geminada: «col.legi», «col-legi».",
    "Pensar que una pronúncia dialectal és incorrecta: totes les varietats són vàlides.",
  ],
  ejercicios: [
    ["Escriu dues paraules on la lletra x sona diferent.", "Per exemple: «xarop» [ʃ] i «taxi» [ks]."],
    ["Quantes vocals tòniques té el català? Escriu-les.", "Set: a, e oberta, e tancada, i, o oberta, o tancada, u."],
    ["Escriu un parell de paraules que es distingeixin per la e oberta o tancada.", "Per exemple: «déu» (divinitat, e tancada) i «deu» (número, e oberta)."],
    ["A o e? «t_rrassa» i «c_ntant».", "Terrassa (de terra) i cantant (de canto)."],
    ["O o u? «c_lor» i «f_sta».", "Color i fusta."],
    ["S o ss? «po_ar» (col·locar) i «ca_ar» (unir en matrimoni).", "Posar i casar."],
    ["Escriu tres paraules amb dígraf.", "Per exemple: lluna, canya, cotxe."],
    ["Com se separen en síl·labes «massa» i «col·legi»?", "Mas-sa i col-le-gi."],
    ["Per què «verd» s'escriu amb d si sona [t]?", "Per l'ensordiment final: el femení «verda» i «verdura» ens mostren la d."],
    ["En quins parlars no hi ha vocal neutra?", "En els occidentals: nord-occidental i valencià."],
  ],
  quiz: [
    ["Entre vocals, una sola s sona…", ["[z] sonora", "[s] sorda", "muda"], 0, "Casa."],
    ["«Verd» sona amb [t] per…", ["l'ensordiment final", "error ortogràfic", "la vocal neutra"], 0, "Consonant final."],
    ["Els parlars occidentals pronuncien la a àtona…", ["[a]", "[ə]", "[u]"], 0, "No tenen vocal neutra."],
    ["La ela geminada s'escriu…", ["l·l", "l.l", "l-l"], 0, "Punt volat."],
    ["«Dotze» porta z perquè sona…", ["[dz]", "[s]", "[ʃ]"], 0, "Sonora."],
  ],
  tarjetas: [
    ["Ensordiment", "Les consonants sonores finals sonen sordes: verd [bɛrt]."],
    ["Essa entre vocals", "s = [z] (casa); ss = [s] (massa)."],
    ["Parlars occidentals", "Distingeixen a i e àtones: no tenen vocal neutra."],
  ],
});
