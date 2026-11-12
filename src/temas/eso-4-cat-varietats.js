// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Les varietats del català",
  minutos: 35,
  objetivos: ["Situar el domini lingüístic del català", "Distingir els dos grans blocs dialectals i els principals dialectes", "Entendre la diferència entre dialecte, estàndard i registre"],
  claves: ["domini lingüístic", "català oriental", "català occidental", "dialecte", "valencià", "balear", "estàndard", "registre"],
  pregunta: {
    texto: "A Barcelona diuen «nen», a València «xiquet», a Mallorca «al·lot». És el mateix idioma?",
    respuesta: "Sí, <mark>és el mateix idioma</mark> amb <b>variants geogràfiques</b>, igual que «autobús» i «guagua» en castellà. El català té diversos dialectes, tots igual de vàlids, i un <b>estàndard</b> comú per als usos formals.",
  },
  bloques: [
    {
      html: `<h3>El domini lingüístic</h3><p>El català es parla en <mark>quatre estats</mark>: Espanya (Catalunya, Comunitat Valenciana, Illes Balears i la Franja d'Aragó, a més del Carxe, a Múrcia), Andorra (on és l'única llengua oficial), França (Catalunya del Nord) i Itàlia (l'Alguer, a Sardenya). Té uns <b>10 milions</b> de parlants.</p>`,
      svg: L.filas("Territoris on es parla català", [
        ["Espanya", "Cat., P. Val., Balears, Franja", "var(--pen)"],
        ["Andorra", "única llengua oficial", "var(--red)"],
        ["França", "Catalunya del Nord", "var(--inf)"],
        ["Itàlia", "l'Alguer (Sardenya)", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Dos grans blocs</h3><p>Segons la pronúncia de les vocals àtones, hi ha el bloc <b>oriental</b> (la a i la e àtones sonen igual, [ə]: «p<i>e</i>ra» i «c<i>a</i>sa») i el bloc <b>occidental</b> (les distingeix: [e] i [a]). També canvia la primera persona del present: <mark>jo canto</mark> (central), <mark>jo cante</mark> (valencià), <mark>jo cant</mark> (balear).</p>`,
      svg: L.tabla("Diferències entre blocs i dialectes", ["Dialecte", "«jo parlo»"], [
        ["central", "parlo"], ["nord-occidental", "parlo / parle"], ["valencià", "parle"], ["balear", "parl"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Els dialectes</h3><p><b>Oriental</b>: rossellonès, central, balear i alguerès. <b>Occidental</b>: nord-occidental (Lleida, la Franja, Andorra) i valencià. Cada dialecte té trets de <b>pronúncia</b>, de <b>lèxic</b> (noi / xiquet / al·lot) i de <b>morfologia</b> (article salat a les Balears: <i>es cotxe, sa casa</i>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema dels dialectes catalans en dos blocs">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <rect x="12" y="14" width="114" height="152" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
          <rect x="134" y="14" width="114" height="152" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
          <text x="69" y="38" font-size="14" fill="var(--pen)">ORIENTAL</text><text x="191" y="38" font-size="14" fill="var(--red)">OCCIDENTAL</text>
          <g font-size="12" fill="var(--ink)" font-weight="400">
            <text x="69" y="70">rossellonès</text><text x="69" y="96">central</text><text x="69" y="122">balear</text><text x="69" y="148">alguerès</text>
            <text x="191" y="80">nord-occidental</text><text x="191" y="124">valencià</text>
          </g>
        </g></svg>`,
    },
    {
      html: `<h3>Lèxic de cada zona</h3><p>Moltes coses tenen diversos noms, tots correctes: <i>noi / xiquet / al·lot</i>; <i>mirall / espill</i>; <i>escombra / granera</i>; <i>sortir / eixir</i>; <i>avui / hui</i>. Els diccionaris normatius (de l'IEC i l'AVL) recullen aquestes formes.</p>`,
      svg: L.tabla("Paraules diferents segons la zona", ["Central", "Valencià", "Balear"], [
        ["noi", "xiquet", "al·lot"], ["mirall", "espill", "espill"], ["escombra", "granera", "granera"], ["avui", "hui", "avui"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Estàndard i registres</h3><p>L'<b>estàndard</b> és la varietat comuna i formal que fan servir l'escola, els mitjans i l'administració; té en compte tots els dialectes. Els <mark>registres</mark> canvien segons la situació (formal o col·loquial). Les institucions normatives són l'<b>Institut d'Estudis Catalans</b> (IEC) i l'<b>Acadèmia Valenciana de la Llengua</b> (AVL).</p>`,
      svg: L.filas("Estàndard, dialecte i registre", [
        ["Dialecte", "varietat del territori", "var(--leaf)"],
        ["Estàndard", "varietat comuna formal", "var(--pen)"],
        ["Registre", "segons la situació", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Una llengua, molts accents",
    svg: L.columnas("Exemples de variants dialectals catalanes", [
      ["Barcelona", "CENTRAL", ["Avui el noi…", "jo canto"], "var(--pen)"],
      ["Lleida", "NORD-OCC.", ["Avui el xic…", "jo canto / cante"], "var(--inf)"],
      ["València", "VALENCIÀ", ["Hui el xiquet…", "jo cante"], "var(--red)"],
      ["Palma", "BALEAR", ["Avui s'al·lot…", "jo cant"], "var(--leaf)"],
    ]),
  },
  video: { id: "N-OqUeLz0Tg", titulo: "Explicación fácil de los dialectos del catalán", canal: "blogdeciencia", vistas: 160031, megusta: 1651, busqueda: "dialectes del català" },
  quiz: [
    { q: "En quants estats es parla català?", o: ["Dos", "Quatre", "Sis"], a: 1, e: "Espanya, Andorra, França i Itàlia." },
    { q: "On és el català l'única llengua oficial?", o: ["A Andorra", "A Catalunya", "A l'Alguer"], a: 0, e: "Andorra té el català com a única llengua oficial." },
    { q: "Quin dialecte pertany al bloc occidental?", o: ["El balear", "El valencià", "El rossellonès"], a: 1, e: "Occidental: nord-occidental i valencià." },
    { q: "«Sa casa» amb article salat és típic del…", o: ["balear", "valencià", "central"], a: 0, e: "L'article salat (es, sa) és propi de les Illes." },
    { q: "Quina institució fixa la norma a la Comunitat Valenciana?", o: ["L'IEC", "L'AVL", "La RAE"], a: 1, e: "L'Acadèmia Valenciana de la Llengua." },
  ],
  examen: [
    { q: "«Hui» és la forma valenciana de…", o: ["avui", "ahir", "demà"], a: 0, e: "Hui = avui." },
    { q: "L'estàndard és…", o: ["la varietat comuna per als usos formals", "un dialecte de Barcelona", "el registre col·loquial"], a: 0, e: "Té en compte tots els dialectes." },
    { q: "Què diferencia el bloc oriental de l'occidental?", o: ["La pronúncia de les vocals àtones", "L'alfabet", "Els números"], a: 0, e: "L'oriental neutralitza a i e àtones en [ə]." },
  ],
  feynman: ["On es parla català", "Els dos blocs dialectals i un tret que els diferencia", "Els dialectes i tres paraules diferents segons la zona", "La diferència entre dialecte, estàndard i registre"],
  mapa: mapa("VARIETATS", "var(--eso)", [
    ["Domini", "4 estats · 10 milions", "var(--pen)"],
    ["Oriental", "central · balear…", "var(--inf)"],
    ["Occidental", "nord-occ. · valencià", "var(--red)"],
    ["Estàndard", "IEC · AVL", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Domini lingüístic del català", "Catalunya, País Valencià, Balears, Franja, Carxe, Andorra, Catalunya del Nord i l'Alguer."],
    ["Bloc oriental", "Rossellonès, central, balear i alguerès."],
    ["Bloc occidental", "Nord-occidental i valencià."],
    ["Article salat", "Es, sa, ses: article propi del balear."],
    ["Estàndard", "Varietat comuna i formal; la regulen l'IEC i l'AVL."],
  ],
  familias: ["Busqueu en un mapa els territoris on es parla català.", "Escolteu junts un fragment d'IB3, À Punt i 3Cat i fixeu-vos en les diferències.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Les llengües i els seus parlants: domini lingüístic, variació dialectal i estàndard (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Mapa col·laboratiu de paraules dialectals de les famílies de l'aula.", "Escolta d'àudios de parlants de diferents zones.", "Debat sobre prejudicis lingüístics."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans", url: "https://www.iec.cat/" },
    { t: "Acadèmia Valenciana de la Llengua", url: "https://www.avl.gva.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Reconèixer trets de pronúncia, morfologia i lèxic de cada dialecte", "Distingir varietats geogràfiques, socials i de registre", "Valorar la diversitat dialectal sense prejudicis"],
  bloques: [
    { tras: "Dos grans blocs", html: `<h3>Trets de pronúncia</h3><p>A més de les vocals àtones, cada zona té trets fonètics propis que ajuden a reconèixer d'on és un parlant:</p>${L.tb(["Tret", "On", "Exemple"], [["a i e àtones sonen [ə]", "oriental", "«casa» i «pare» acaben igual"], ["o àtona sona [u]", "central i part del balear", "«cosí» sona «cusí»"], ["es distingeixen a/e i o/u àtones", "occidental", "«casa» [a], «pare» [e]"], ["la v sona diferent de la b", "balear, Camp de Tarragona, part del valencià", "«vi» amb [v]"], ["la -r final es pronuncia", "valencià", "«cantar» amb r"], ["la ll sona [j] (iodització)", "parlars de les Illes i algunes zones", "«palla» com «paia»"]])}<p>Cap d'aquestes pronúncies és «millor» que una altra: totes són maneres legítimes de parlar la mateixa llengua.</p>` },
    { tras: "Els dialectes", html: `<h3>Trets de morfologia</h3><p>La gramàtica també varia. Els trets més coneguts són:</p><ul><li><b>Primera persona del present</b>: <i>canto</i> (central), <i>cante</i> (valencià), <i>cant</i> (balear), <i>canti</i> (rossellonès).</li><li><b>Article salat</b> a les Balears: <i>es cotxe, sa mare, ses cases</i>, en lloc de <i>el, la, les</i>.</li><li><b>Possessius</b>: <i>la meva</i> (central) i <i>la meua</i> (valencià), totes dues normatives.</li><li><b>Present de subjuntiu</b>: <i>que canti</i> (central), <i>que cante</i> (valencià), <i>que cant</i> (balear).</li><li><b>Demostratius</b>: el valencià conserva tres graus (<i>este, eixe, aquell</i>), mentre que el central en fa servir dos (<i>aquest, aquell</i>).</li></ul><p>L'estàndard accepta moltes d'aquestes formes, sobretot en els textos d'àmbit territorial.</p>` },
    { tras: "Lèxic de cada zona", html: `<h3>Mapa de mots: cada zona, la seva paraula</h3><p>Els dialectòlegs dibuixen <b>isoglosses</b>, línies que separen les zones on es fa servir una forma o una altra. Les isoglosses lèxiques no sempre coincideixen amb les fonètiques: per exemple, <i>espill</i> es diu tant a València com a les Illes, mentre que <i>mirall</i> és propi del Principat. Altres parelles conegudes: <i>xiquet / nen / al·lot</i>, <i>sortir / eixir</i>, <i>bressol / bres</i>, <i>moix / gat</i>, <i>granera / escombra</i>. L'<b>Atles lingüístic del domini català</b> (ALDC) recull milers d'aquestes variants. Conèixer-les ajuda a entendre parlants d'altres zones i enriqueix el vocabulari propi.</p>` },
    { tras: "Estàndard i registres", html: `<h3>Varietats socials i funcionals</h3><p>Una llengua no varia només segons el territori. Els lingüistes distingeixen quatre tipus de varietats:</p>${L.tb(["Tipus", "Depèn de…", "Exemple"], [["geogràfica (dialecte)", "el lloc d'origen", "xiquet / nen / al·lot"], ["històrica", "l'època", "català medieval: «lo rei»"], ["social (sociolecte)", "l'edat, la professió, el grup", "argot juvenil: «flipar»"], ["funcional (registre)", "la situació comunicativa", "«Benvolguda senyora» / «Ei, què tal?»"]])}<p>Un mateix parlant fa servir diverses varietats al llarg del dia: parla amb els amics en registre col·loquial i el seu dialecte, i escriu un treball de classe en registre formal i en estàndard.</p>` },
    { tras: "Estàndard i registres", html: `<h3>Prejudicis lingüístics</h3><p>Un <b>prejudici lingüístic</b> és una opinió sense fonament científic sobre una manera de parlar. Alguns de molt estesos són creure que el català de la pròpia zona és «el més pur», que el valencià és una llengua diferent del català o que els parlars d'una comarca són «mal parlats». La lingüística mostra que <mark>tots els dialectes són sistemes complets i coherents</mark>, amb regles pròpies. La unitat de la llengua està reconeguda per les universitats i per les institucions normatives: l'AVL mateixa defineix el valencià com la llengua compartida amb Catalunya i les Illes. Respectar la variació és també una manera de cuidar la llengua.</p>` },
    { tras: "El domini lingüístic", html: `<h3>Situació sociolingüística</h3><p>El català és llengua <b>oficial</b> a Catalunya, les Illes Balears i la Comunitat Valenciana (on rep el nom de valencià), juntament amb el castellà, i a Andorra, on és l'única oficial. A la Franja, a la Catalunya del Nord i a l'Alguer té un reconeixement més limitat. Per això el seu ús social varia molt: és molt present a l'escola i als mitjans en uns territoris i molt minoritzat en altres. Fenòmens com la <b>interferència</b> (castellanismes com <s>*bueno</s> o <s>*vale</s>) i la <b>substitució lingüística</b> preocupen els sociolingüistes.</p>` },
  ],
  videos: [
    ["Els dialectes", L.vid("gzdws0gZW4o", "Capítol 11. Els dialectes del català", "La Filòloga de Guàrdia", 102193)],
  ],
  ejemplos: [
    ["Identifica el dialecte: «Hui he anat a vore el xiquet i li he comprat una joguina».", ["«Hui» és la forma valenciana d'«avui».", "«Vore» és un verb propi del valencià col·loquial (estàndard: veure).", "«Xiquet» és el mot valencià per a «nen»."], "Valencià (bloc occidental)."],
    ["Identifica el dialecte: «Ses al·lotes han anat a sa platja».", ["«Ses» i «sa» són formes de l'article salat.", "«Al·lotes» és el mot balear per a «noies».", "L'article salat és un tret clar de les Illes."], "Balear (bloc oriental)."],
    ["Classifica la varietat: un metge diu «el pacient presenta una cefalea».", ["No depèn del lloc: no és un dialecte.", "És una manera de parlar pròpia d'un àmbit professional i d'una situació formal.", "Fa servir lèxic especialitzat (cefalea = mal de cap)."], "Varietat funcional: registre formal i llenguatge d'especialitat."],
  ],
  errores: [
    "Pensar que el valencià i el balear són llengües diferents del català: són dialectes d'una mateixa llengua.",
    "Creure que un dialecte és «més correcte» que un altre: l'estàndard és una varietat formal, no un dialecte superior.",
    "Confondre dialecte (lloc) amb registre (situació).",
    "Corregir formes dialectals normatives, com «meua» o «cante», com si fossin errors.",
    "Fer servir castellanismes com *bueno o *vale pensant que són trets dialectals.",
  ],
  ejercicios: [
    ["Digues a quin bloc pertanyen: central, valencià, balear, nord-occidental, rossellonès, alguerès.", "Oriental: central, balear, rossellonès, alguerès. Occidental: valencià, nord-occidental."],
    ["Escriu la forma central de: xiquet, espill, hui, eixir.", "nen (noi), mirall, avui, sortir."],
    ["Conjuga «jo parlar» en central, valencià i balear.", "parlo, parle, parl."],
    ["Escriu amb l'article estàndard: «es ca», «sa casa», «ses portes».", "el gos, la casa, les portes."],
    ["Quin tipus de varietat és «tio, això està flipant»?", "Social i funcional: argot juvenil en registre col·loquial."],
    ["Què és una isoglossa?", "Una línia imaginària que separa zones on es fa servir una forma lingüística o una altra."],
    ["Quins dos possessius femenins són correctes per a «mi casa»?", "la meva casa i la meua casa."],
    ["Corregeix: «Bueno, vale, ja vinc».", "Bé (doncs), d'acord, ja vinc."],
    ["Explica per què «tots els dialectes són igual de vàlids».", "Perquè tots són sistemes complets amb regles pròpies; cap no és superior lingüísticament."],
    ["Quines institucions fixen la norma del català?", "L'Institut d'Estudis Catalans (IEC) i l'Acadèmia Valenciana de la Llengua (AVL)."],
  ],
  quiz: [
    ["«Espill» es diu a…", ["València i les Illes", "només Barcelona", "només l'Alguer"], 0, "Mirall és la forma central."],
    ["Un registre depèn de…", ["la situació comunicativa", "el lloc d'origen", "l'època"], 0, "Formal o col·loquial."],
    ["«Jo canti» és propi del…", ["rossellonès", "valencià", "balear"], 0, "Catalunya del Nord."],
    ["Un prejudici lingüístic és…", ["una opinió sense base científica sobre una manera de parlar", "una regla de l'IEC", "un dialecte"], 0, "Tots els dialectes són vàlids."],
    ["El valencià conserva tres graus de demostratius:", ["este, eixe, aquell", "aquest, aquell, allò", "es, sa, ses"], 0, "El central en fa servir dos."],
  ],
  tarjetas: [
    ["Isoglossa", "Línia que separa zones amb formes lingüístiques diferents."],
    ["Tipus de varietats", "Geogràfica, històrica, social i funcional (registre)."],
    ["Prejudici lingüístic", "Creença sense base científica que una manera de parlar és millor."],
  ],
});
