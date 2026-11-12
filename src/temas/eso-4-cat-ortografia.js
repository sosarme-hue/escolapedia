// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG. Normativa de l'IEC (Ortografia catalana, 2017).
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Ortografia i normativa",
  minutos: 40,
  objetivos: ["Aplicar les regles d'accentuació i triar entre accent obert i tancat", "Conèixer els accents diacrítics que es mantenen des del 2017", "Fer servir bé la dièresi, l'apòstrof i la contracció"],
  claves: ["accent obert", "accent tancat", "aguda", "plana", "esdrúixola", "diacrític", "dièresi", "apòstrof", "contracció"],
  pregunta: {
    texto: "Per què «cafè» porta l'accent cap avall (`) i «cançó» cap amunt (´)? En castellà només hi ha un accent…",
    respuesta: "Perquè en català hi ha <mark>dos accents</mark>: l'<b>obert</b> o greu (`) i el <b>tancat</b> o agut (´). Indiquen com es pronuncia la vocal: la <i>e</i> de «cafè» és oberta [ɛ] i la <i>o</i> de «cançó» és tancada [o].",
  },
  bloques: [
    {
      html: `<h3>Quan s'accentua</h3><p><b>Agudes</b> (síl·laba tònica final): porten accent si acaben en <mark>vocal, vocal + s, -en, -in</mark>: cafè, francès, també, camí. <b>Planes</b>: porten accent si <mark>no</mark> acaben així: <i>tròpic, fàcil, càntir</i>. <b>Esdrúixoles</b>: sempre: <i>música, àvia, química</i>.</p>`,
      svg: L.filas("Regles d'accentuació", [
        ["Agudes", "vocal, -s, -en, -in: camí", "var(--pen)"],
        ["Planes", "les altres: fàcil", "var(--leaf)"],
        ["Esdrúixoles", "sempre: música", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Obert o tancat?</h3><p>La <b>a</b> sempre porta accent obert: <i>està, àvia</i>. La <b>i</b> i la <b>u</b> sempre tancat: <i>camí, ningú</i>. La <b>e</b> i la <b>o</b> poden ser obertes o tancades segons la pronúncia oriental: <i>cafè / també</i>, <i>còmode / cançó</i>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Taula d'accents: à sempre oberta; í i ú sempre tancades; e i o oberta o tancada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <g font-size="34" ${D}>
            <text x="40" y="70" fill="var(--red)">à</text><text x="95" y="70" fill="var(--leaf)">è é</text>
            <text x="160" y="70" fill="var(--leaf)">í</text><text x="210" y="70" fill="var(--leaf)">ò ó</text>
            <text x="160" y="130" fill="var(--pen)">ú</text>
          </g>
          <g font-size="12">
            <text x="40" y="92" fill="var(--red)">sempre</text><text x="40" y="106" fill="var(--red)">oberta</text>
            <text x="95" y="92" fill="var(--leaf)">oberta o</text><text x="95" y="106" fill="var(--leaf)">tancada</text>
            <text x="210" y="92" fill="var(--leaf)">oberta o</text><text x="210" y="106" fill="var(--leaf)">tancada</text>
            <text x="160" y="150" fill="var(--pen)">sempre tancades</text>
          </g>
        </g></svg>`,
    },
    {
      html: `<h3>Els accents diacrítics</h3><p>Distingeixen paraules que s'escriuen igual. La reforma de l'IEC del <b>2017</b> en va reduir el nombre a <mark>15</mark>: bé/be, déu/deu, és/es, mà/ma, més/mes, món/mon, pèl/pel, què/que, sé/se, sí/si, sòl/sol, són/son, té/te, ús/us, vós/vos. Ja no s'accentuen <i>dona, os, net, vena</i>…</p>`,
      svg: L.tabla("Alguns accents diacrítics", ["Amb accent", "Sense accent"], [
        ["és (verb)", "es (pronom)"], ["més (quantitat)", "mes (de l'any)"], ["sé (saber)", "se (pronom)"], ["té (tenir)", "te (pronom)"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La dièresi</h3><p>La dièresi (¨) té dues funcions. 1) Fer sonar la <b>u</b> en <i>gü, qü</i> davant de <i>e, i</i>: <mark>pingüí, qüestió, aigüera</mark>. 2) Indicar que la <b>i</b> o la <b>u</b> no formen diftong: <mark>veïna, raïm, diürn</mark>. No es posa en les terminacions -isme, -ista, -ina… ni en els infinitius, gerundis i futurs: <i>lluir, lluint, lluirà</i>.</p>`,
      svg: L.filas("Dues funcions de la dièresi", [
        ["fer sonar la u", "pingüí · qüestió", "var(--pen)"],
        ["trencar diftong", "veïna · raïm", "var(--leaf)"],
        ["sense dièresi", "lluir · egoisme", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>Apòstrof i contracció</h3><p>Els articles <b>el, la</b> i la preposició <b>de</b> s'apostrofen davant de vocal o h: <i>l'arbre, l'hora, d'aigua</i>. No s'apostrofa <i>la</i> davant de i, u àtones: <mark>la universitat, la idea</mark>. Les preposicions <b>a, de, per</b> + <b>el, els</b> es contrauen: <i>al, del, pel, als, dels, pels</i> (però «a l'home»).</p>`,
      svg: L.filas("Apòstrof i contracció", [
        ["Apòstrof", "l'arbre · d'aigua", "var(--pen)"], ["Sense apòstrof", "la universitat", "var(--red)"],
        ["Contracció", "al · del · pel", "var(--leaf)"], ["Excepció", "a l'home", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Revisa l'ortografia en quatre passos",
    svg: L.pasos("Passos per revisar l'ortografia catalana", [
      ["Accent", ["aguda, plana", "o esdrúixola?"], "var(--pen)"],
      ["Obert o tancat", ["à sempre `", "í, ú sempre ´"], "var(--leaf)"],
      ["Diacrític", ["és, més, sé,", "té, què…"], "var(--red)"],
      ["Dièresi i apòstrof", ["pingüí, veïna", "l'hora, la idea"], "var(--inf)"],
    ]),
  },
  video: { id: "MbW4uRvLN64", titulo: "L'accentuació en català", canal: "OK CATALÀ", vistas: 208004, megusta: 4410, busqueda: "ortografia catalana accentuació" },
  quiz: [
    { q: "Quina paraula porta accent?", o: ["cami", "camí", "camì"], a: 1, e: "Aguda acabada en vocal; la i sempre porta accent tancat." },
    { q: "La «a» accentuada sempre porta accent…", o: ["obert (à)", "tancat (á)", "cap"], a: 0, e: "En català estàndard: à." },
    { q: "Quina paraula NO porta accent diacrític des del 2017?", o: ["més", "dona", "té"], a: 1, e: "«Dona» ja no s'accentua." },
    { q: "Quina paraula porta dièresi?", o: ["pinguí", "pingüí", "pingui"], a: 1, e: "La u ha de sonar: gü." },
    { q: "Quina forma és correcta?", o: ["l'universitat", "la universitat", "l universitat"], a: 1, e: "La no s'apostrofa davant de u àtona." },
  ],
  examen: [
    { q: "«Fàcil» porta accent perquè és…", o: ["plana no acabada en vocal, -s, -en, -in", "aguda acabada en vocal", "esdrúixola"], a: 0, e: "Les planes s'accentuen quan no acaben com les agudes accentuades." },
    { q: "Contracció correcta de «de + els»:", o: ["dels", "d'els", "dals"], a: 0, e: "de + els = dels." },
    { q: "Quina forma verbal NO porta dièresi?", o: ["lluir", "veïna", "raïm"], a: 0, e: "Els infinitius en -ir no porten dièresi." },
  ],
  feynman: ["Quan s'accentuen les agudes i les planes", "Com sé si l'accent és obert o tancat", "Cinc accents diacrítics actuals", "Les dues funcions de la dièresi"],
  mapa: mapa("ORTOGRAFIA", "var(--eso)", [
    ["Accentuació", "agudes · planes · esdrúixoles", "var(--pen)"],
    ["Obert / tancat", "à · è é · í · ò ó · ú", "var(--leaf)"],
    ["Diacrítics", "15 des del 2017", "var(--red)"],
    ["Dièresi i apòstrof", "pingüí · l'hora", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Agudes amb accent", "Les que acaben en vocal, vocal + s, -en, -in: cafè, camí, també."],
    ["Accent de la a, i, u", "à sempre oberta; í i ú sempre tancades."],
    ["Diacrítics (2017)", "15: bé, déu, és, mà, més, món, pèl, què, sé, sí, sòl, són, té, ús, vós."],
    ["Dièresi", "Fa sonar la u (pingüí) o trenca un diftong (veïna)."],
    ["Contraccions", "al, als, del, dels, pel, pels (a / de / per + el / els)."],
  ],
  familias: ["Feu un dictat curt en català i corregiu-lo junts amb les regles del tema.", "Busqueu en cartells del carrer paraules amb dièresi o apòstrof.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: normes ortogràfiques vigents (Ortografia catalana, IEC 2017) i revisió de textos (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Concurs de diacrítics amb frases de doble sentit.", "Dictat entre iguals amb correcció per regles.", "Revisió ortogràfica de textos publicats a les xarxes del centre."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Ortografia catalana (2017)", url: "https://www.iec.cat/llengua/documents/ortografia_catalana_versio_digital.pdf" },
    { t: "Optimot, consultes lingüístiques", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escriure bé s, ss, c, ç i z, i g, j, tg i tj", "Fer servir correctament l'ela geminada i el guionet", "Combinar els pronoms febles amb apòstrof i guionet"],
  bloques: [
    { tras: "Apòstrof i contracció", html: `<h3>S sorda i s sonora</h3><p>El català distingeix dos sons: la <b>s sorda</b> [s] (com a <i>sol</i>) i la <b>s sonora</b> [z] (com a <i>casa</i>). Cada so s'escriu de diverses maneres:</p>${L.tb(["So", "Grafia", "Quan", "Exemples"], [["sorda [s]", "s", "a principi de paraula o després de consonant", "sol, pensar"], ["sorda [s]", "ss", "entre vocals", "massa, passeig, grossa"], ["sorda [s]", "c / ç", "c davant de e, i; ç davant de a, o, u i a final", "cel, plaça, dolç, braç"], ["sonora [z]", "s", "entre vocals", "casa, rosa, cosí"], ["sonora [z]", "z", "a principi de paraula o després de consonant", "zero, onze, dotze"]])}<p>Fixa't en parelles com <i>cosí</i> (familiar) i <i>cossi</i> (recipient), o <i>casa</i> i <i>cassa</i>: la grafia canvia el so i el significat.</p>` },
    { tras: "Apòstrof i contracció", html: `<h3>G, J, TG i TJ</h3><p>El so de <i>gent</i> i de <i>menjar</i> és el mateix, però s'escriu de dues maneres segons la vocal que ve darrere:</p><ul><li><b>j</b> davant de <b>a, o, u</b>: <i>menjar, jove, juny</i>.</li><li><b>g</b> davant de <b>e, i</b>: <i>gent, girar</i>. Per això en un mateix verb alternen: <i>menjar → mengem, mengi</i>; <i>pujar → pugem</i>.</li><li>Entre vocals el so sovint és més fort i s'escriu <b>tj</b> (davant de a, o, u) o <b>tg</b> (davant de e, i): <i>platja, mitjó, viatge, metge, fetge</i>. Per això: <i>platja → platges</i>.</li></ul><p>A final de paraula s'escriu <b>-ig</b> (<i>passeig, raig, mig</i>) i en plural canvia: <i>passeigs</i> o <i>passejos</i>, <i>migs</i>.</p>` },
    { tras: "La dièresi", html: `<h3>L'ela geminada</h3><p>L'<b>ela geminada</b> (<b>l·l</b>) representa una ela llarga, pronunciada com si fossin dues: <i>col·legi, il·lusió, novel·la, intel·ligent, al·lèrgia, tranquil·litat, pel·lícula, sol·licitud</i>. S'escriu amb un <b>punt volat</b> entre les dues eles (no un punt baix ni un guionet: <s>*col.legi</s>, <s>*col-legi</s>).</p><p>No hi ha una regla senzilla per saber quines paraules la porten, però ajuda pensar en les famílies: si <i>il·lusió</i> la porta, també <i>il·lusionar</i> i <i>il·lusionat</i>. En canvi, paraules molt semblants no la porten: <i>coloma, escola, gola</i>. En cas de dubte, consulta el diccionari de l'IEC (DIEC2) o l'Optimot.</p>` },
    { tras: "La dièresi", html: `<h3>El guionet</h3><p>El <b>guionet</b> (-) uneix elements que formen una sola paraula. Es fa servir sobretot:</p><ul><li>En els <b>numerals</b>, entre desenes i unitats i entre unitats i centenes: <i>vint-i-u, trenta-dos, dos-cents, tres-centes</i>.</li><li>En compostos amb <b>punts cardinals</b>: <i>nord-est, sud-oest</i>.</li><li>En compostos en què el primer element acaba en vocal i el segon comença per <b>r, s, x</b>, perquè no canviï el so: <i>penja-robes, para-sol, gira-sol</i>.</li><li>En compostos formats per la repetició d'una paraula: <i>corre-cuita, xino-xano</i>.</li><li>Per unir els <b>pronoms febles</b> darrere del verb (bloc següent).</li></ul>` },
    { tras: "Apòstrof i contracció", html: `<h3>Pronoms febles: apòstrof i guionet</h3><p>Els pronoms febles (<i>em, et, es, el, la, ens, us, els, li, en, hi, ho</i>) canvien de forma segons on van:</p>${L.tb(["Posició", "Forma", "Exemples"], [["davant de verb que comença en consonant", "plena", "<b>em</b> diu, <b>el</b> veig, <b>en</b> vull"], ["davant de verb que comença en vocal o h", "elidida (apòstrof)", "<b>m'</b>agrada, <b>l'</b>he vist, <b>n'</b>hi ha"], ["darrere de verb acabat en consonant o diftong", "plena amb guionet", "menjar<b>-se</b>, donar<b>-me</b>, compreu<b>-lo</b>"], ["darrere de verb acabat en vocal", "reduïda (apòstrof)", "compra<b>'l</b>, mira<b>'m</b>, porta<b>'ns</b>"]])}<p>Quan n'hi ha dos darrere del verb, van amb guionet entre ells: <i>dona-m'ho</i>, <i>porta-li-ho</i>, <i>anar-se'n</i>.</p>` },
    { tras: "La dièresi", html: `<h3>B o V?</h3><p>En gran part del domini (central, nord-occidental, gran part del valencià) <b>b</b> i <b>v</b> sonen igual, i per això cal fixar-se en la grafia. Algunes pistes útils:</p><ul><li>Després de <b>m</b> sempre <b>b</b>: <i>ambició, tomba, embolic, cambra</i>.</li><li>Després de <b>n</b> sempre <b>v</b>: <i>canviar, enviar, invent, convidar</i>.</li><li>Les terminacions de l'imperfet d'indicatiu dels verbs en -ar s'escriuen amb <b>v</b>: <i>cantava, parlàvem, estudiaven</i>.</li><li>Moltes paraules es diferencien del castellà: <i>advocat</i> (abogado), <i>avorrir</i> (aburrir), <i>gravar</i> (grabar), <i>Esteve</i>, <i>rebentar</i>; en canvi, <i>biga</i> o <i>berruga</i> porten b.</li></ul><p>Compte, doncs, amb la interferència del castellà: no és una bona guia per a la b i la v catalanes. Quan dubtis, busca la paraula al diccionari.</p>` },
  ],
  videos: [
    ["Obert o tancat?", L.vid("HzB7SWUFd_A", "L'accentuació de la e: accent obert o tancat?", "OK CATALÀ", 150254)],
    ["Els accents diacrítics", L.vid("di2wiYc23qg", "Els 15 accents diacrítics", "OK CATALÀ", 116564)],
  ],
  ejemplos: [
    ["Accentua si cal: «cami», «examen», «facil», «cancons», «musica».", ["Camí: aguda acabada en vocal → accent; la i sempre tancada.", "Examen: plana acabada en -en → no porta accent.", "Fàcil: plana acabada en -l → accent; la a sempre oberta.", "Cançons: aguda acabada en -ons → no porta accent (només -as, -es, -is, -os, -us i -en, -in).", "Música: esdrúixola → sempre accent."], "camí, examen, fàcil, cançons, música."],
    ["Escriu amb lletres: 21, 35 i 300.", ["Desenes i unitats amb guionet; entre vint i u s'hi posa -i-: vint-i-u.", "Trenta-cinc: guionet entre desenes i unitats.", "Unitats i centenes amb guionet; en masculí: tres-cents."], "vint-i-u, trenta-cinc, tres-cents."],
    ["Substitueix el complement per un pronom feble: «Vull comprar el llibre», «Agafa la jaqueta», «He vist l'Anna».", ["«Comprar el llibre»: darrere d'infinitiu acabat en -r: comprar-lo.", "«Agafa la jaqueta»: imperatiu acabat en vocal: agafa-la.", "«He vist l'Anna»: davant de verb que comença amb h: l'he vista (el participi concorda amb la)."], "Vull comprar-lo. Agafa-la. L'he vista."],
  ],
  errores: [
    "Escriure l'ela geminada amb punt baix o guionet: *col.legi, *col-legi → col·legi.",
    "Confondre s i ss entre vocals: escriure *cassa en lloc de casa, o *rosa en lloc de rossa (cabells rossos).",
    "Escriure *menjem: davant de e es fa servir g: mengem.",
    "Accentuar agudes acabades en -ons: *cançóns → cançons.",
    "Oblidar el guionet als numerals: *vint i u → vint-i-u.",
    "Posar el pronom darrere del verb sense guionet: *menjarse → menjar-se.",
  ],
  ejercicios: [
    ["Completa amb s o ss: «ca_a», «ma_a», «co_í», «gro_a».", "casa, massa, cosí, grossa."],
    ["Completa amb c o ç: «pla_a», «_el», «dol_», «bra_os».", "plaça, cel, dolç, braços."],
    ["Escriu el plural: platja, viatge, passeig.", "platges, viatges, passeigs (o passejos)."],
    ["Completa amb g o j: «men_ar», «nosaltres men_em», «_ove».", "menjar, mengem, jove."],
    ["Escriu amb ela geminada les que la portin: colegi, escola, ilusió, novela, gola.", "col·legi, il·lusió, novel·la; escola i gola no en porten."],
    ["Escriu amb lletres: 42, 99, 200.", "quaranta-dos, noranta-nou, dos-cents."],
    ["Posa guionet si cal: «para sol», «nord est», «escura dents».", "para-sol, nord-est, escuradents (sense guionet: el segon element no comença per r, s, x)."],
    ["Escriu amb pronom: «Dona el llapis a mi».", "Dona-me'l."],
    ["Escriu amb pronom: «Hem d'anar-nos d'aquí».", "Ens n'hem d'anar (o hem d'anar-nos-en)."],
    ["Accentua: «també», «perque», «historia», «telefon», «jove».", "també, perquè, història, telèfon, jove (no porta accent: plana acabada en vocal)."],
  ],
  quiz: [
    ["Quina forma és correcta?", ["col·legi", "col.legi", "colegi"], 0, "Ela geminada amb punt volat."],
    ["Entre vocals, la s sorda s'escriu…", ["ss", "s", "z"], 0, "massa, passeig."],
    ["«Nosaltres ___ (menjar)»", ["mengem", "menjem", "mengim"], 0, "G davant de e."],
    ["21 s'escriu…", ["vint-i-u", "vint i u", "vintiu"], 0, "Amb guionets i -i-."],
    ["«Compra el pa» amb pronom:", ["Compra'l", "Compra-el", "Compral"], 0, "Verb acabat en vocal: forma reduïda."],
  ],
  tarjetas: [
    ["S sonora / s sorda", "casa (s, [z]) / massa (ss, [s]) entre vocals."],
    ["Ela geminada", "l·l amb punt volat: col·legi, il·lusió, novel·la."],
    ["Pronoms darrere del verb", "menjar-se, compra'l, dona-m'ho."],
  ],
});
