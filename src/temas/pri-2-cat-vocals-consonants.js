// Llengua Catalana 2n de Primària: vocals i consonants. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, silabas: s } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "Vocals i consonants",
  minutos: 25,
  objetivos: ["Distingir les 5 vocals de les 21 consonants", "Saber que les consonants necessiten una vocal per sonar bé", "Comptar vocals i consonants en una paraula"],
  claves: ["vocal", "consonant", "so", "lletra", "h muda"],
  pregunta: {
    texto: "Digues «aaaa» sense tancar la boca. Ara prova de dir només «b», sense cap altra lletra. Què passa?",
    respuesta: "La <b>a</b> sona sola: és una <mark>vocal</mark>. La <b>b</b> sola gairebé no sona: necessita una vocal, com a «be» o «ba». És una <mark>consonant</mark>.",
  },
  bloques: [
    {
      html: `<h3>Dos equips de lletres</h3><p>Les 26 lletres de l'abecedari formen <mark>dos equips</mark>.</p><p>L'equip de les <b>vocals</b> té 5 lletres: a, e, i, o, u.</p><p>L'equip de les <b>consonants</b> té 21 lletres: b, c, d, f, g… i totes les altres. Juntes formen totes les paraules que diem i escrivim.</p>`,
      svg: lista("Vocals: a, e, i, o, u, són 5. Consonants: b, c, d, f, g i les altres, són 21", [["Vocals: a · e · i · o · u", R], ["En són 5", R], ["Consonants: b · c · d · f · g…", A], ["En són 21", A]], { titulo: "Dos equips de lletres", marca: "✓" }),
      video: V("cvocV", "les vocals en català cançó"),
    },
    {
      html: `<h3>Les vocals</h3><p>Les <mark>vocals</mark> sonen soles. L'aire surt sense xocar amb res.</p><p>Amb la <b>a</b> obrim molt la boca. Amb la <b>e</b> estirem els llavis. Amb la <b>i</b> somriem. Amb la <b>o</b> fem un cercle. Amb la <b>u</b> fem un petó.</p><p>Les pots cantar llargues: aaa, eee, iii, ooo, uuu. No s'acaben fins que et quedes sense aire!</p>`,
      svg: dibujos("Boques de la a, la e, la i, la o i la u", [["cara_a", "a", R], ["cara_e", "e", A], ["cara_i", "i", Ve], ["cara_o", "o", N], ["cara_u", "u", M]], { titulo: "La boca de cada vocal" }),
    },
    {
      html: `<h3>Vocals obertes i tancades</h3><p>En català, la <b>e</b> i la <b>o</b> poden sonar de dues maneres: <mark>obertes</mark> o <mark>tancades</mark>.</p><p>Escolta: <i>caf<b>è</b></i> (oberta) i <i>tamb<b>é</b></i> (tancada). <i>m<b>ò</b>bil</i> (oberta) i <i>cançó</i>, amb <b>ó</b> (tancada).</p><p>A vegades l'accent ens ho diu: <b>è</b> i <b>ò</b> són obertes; <b>é</b> i <b>ó</b> són tancades. Escolta-ho bé!</p>`,
      svg: fichas("Vocals amb accent obert i tancat: è, é, ò, ó", [["è", R], ["é", A], ["ò", R], ["ó", A]], { titulo: "Oberta o tancada", nota: "è ò obertes · é ó tancades", grande: true }),
    },
    {
      html: `<h3>Les consonants</h3><p>Les <mark>consonants</mark> necessiten una vocal per sonar bé.</p><p>Quan les diem, l'aire xoca amb els llavis, les dents o la llengua. Amb la <b>p</b> ajuntem els llavis. Amb la <b>t</b>, la llengua toca les dents.</p><p>Per això diem «pe», «te» o «essa». La vocal les ajuda a sonar!</p>`,
      svg: fichas("Consonants en fitxes: b, c, d, f, l, m, n, p, r, s, t, x", [["b", A], ["c", A], ["d", A], ["f", A], ["l", A], ["m", A], ["n", A], ["p", A], ["r", A], ["s", A], ["t", A], ["x", A]], { titulo: "Algunes consonants", nota: "Sonen amb ajuda: be, ce, de, efa…" }),
      video: V("cvocB"),
    },
    {
      html: `<h3>Consonant + vocal</h3><p>Quan una consonant s'uneix a una vocal, formen un <mark>so nou</mark>.</p><p><b>m + a = ma</b>. <b>p + e = pe</b>. <b>s + o = so</b>.</p><p>Amb aquests trossets formem paraules: <i>ma-ma</i>, <i>pe-ra</i>, <i>so-pa</i>. Gairebé totes les paraules barregen vocals i consonants. Es necessiten les unes a les altres!</p>`,
      svg: frase("m més a fa ma; s més o fa so", [["m", A], ["+", "var(--muted)"], ["a", R], ["=", "var(--muted)"], ["ma", Ve], ["/"], ["s", A], ["+", "var(--muted)"], ["o", R], ["=", "var(--muted)"], ["so", Ve]], { titulo: "S'uneixen i sonen", nota: "ma-ma · so-pa", fs: 24 }),
    },
    {
      html: `<h3>Comptem lletres</h3><p>Podem <mark>comptar</mark> les vocals i les consonants d'una paraula.</p><p>A <b>gat</b>: una vocal, la <b>a</b>. Dues consonants, <b>g</b> i <b>t</b>.</p><p>A <b>lluna</b>: dues vocals, <b>u</b> i <b>a</b>. Tres consonants: l, l i n. A <b>peix</b>: vocals e, i; consonants p, x. Pinta les vocals de vermell per veure-les millor!</p>`,
      svg: frase("Gat: g a t. La vocal a en vermell, les consonants g i t en blau", [["g", A], ["a", R], ["t", A], ["/"], ["1 vocal", R], ["2 consonants", A]], { titulo: "gat", nota: "Vocals en vermell, consonants en blau", fs: 26 }),
    },
    {
      html: `<h3>La h muda i altres sorpreses</h3><p>La <b>h</b> és <mark>muda</mark>: no sona gens. <i>Home</i> es diu «ome», però s'escriu amb h. També <i>hora</i> i <i>herba</i>.</p><p>La <b>c</b> sona forta a <i>casa</i> i suau a <i>cel</i>. La <b>g</b> sona diferent a <i>gat</i> i a <i>gerro</i>.</p><p>La <b>r</b> té un rap molt divertit. Escolta'l al vídeo!</p>`,
      svg: dibujos("La c de casa, la c de cel i la h muda d'hora", [["casa", s("c|asa", R), K], ["nube", s("c|el", A), K], ["reloj", s("h|ora", Ve), K]], { titulo: "Consonants especials", nota: "c forta · c suau · h muda" }),
      video: V("cvocB2"),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saber quines lletres són vocals ens ajuda a <mark>llegir i escriure millor</mark>.</p><p>Les vocals ens diuen com partir les paraules en síl·labes: cada síl·laba té una vocal.</p><p>També ens ajuden a no oblidar lletres. Si escrius «pplln», hi falten vocals. La paraula bona és <i>papallona</i>!</p>`,
      svg: charla("Un nen escriu pplln i la nena li diu que falten vocals: papallona", [["nino", "He escrit «pplln».", A], ["nina", "Hi falten vocals!", R], ["nino", "Pa-pa-llo-na?", A], ["nina", "Ara sí!", R]]),
    },
    {
      html: `<h3>Joc: vocal o consonant?</h3><p>Un adult diu una lletra. Si és <b>vocal</b>, fas una <mark>palmada</mark>. Si és <b>consonant</b>, fas un <mark>cop de peu</mark>.</p><p>Després, canvieu: tu dius paraules curtes i l'adult compta les vocals amb els dits.</p><p>Proveu amb <i>sol</i>, <i>lluna</i>, <i>casa</i> i <i>tren</i>. Qui n'encerta més?</p>`,
      svg: charla("Joc: la a és vocal i es fa palmada; la m és consonant i es fa cop de peu", [["nina", "a!", R], ["nino", "Vocal: palmada!", A], ["nina", "m!", R], ["nino", "Consonant: cop de peu!", A]]),
    },
  ],
  figura: {
    titulo: "Vocals i consonants",
    svg: mural("Cinc vocals que sonen soles, vint-i-una consonants que necessiten vocal, consonant més vocal i la h muda", [["cara_a", "a e i o u", "5 vocals: sonen soles", R], ["libro", "b c d f g…", "21 consonants", A], [null, "m + a = ma", "s'uneixen i sonen", Ve], ["reloj", "h", "muda: no sona", N]], "Totes les paraules tenen almenys una vocal"),
  },
  video: V("cvocV", "les vocals en català cançó"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Quantes vocals té «pilota»?",
      pasos: ["Escriu la paraula: p-i-l-o-t-a.", "Encercla les vocals: i, o, a.", "Compta-les: 1, 2, 3."],
      resultado: "«pilota» té 3 vocals." },
    { enunciado: "Quines consonants té «sopa»?",
      pasos: ["Separa les lletres: s-o-p-a.", "Treu les vocals: o, a.", "Queden s i p."],
      resultado: "les consonants són s i p." },
    { enunciado: "Completa amb una vocal: c_sa.",
      pasos: ["Prova amb cada vocal: cesa, cisa, cosa, casa.", "Quina és una paraula que coneixes?", "Casa i cosa són paraules."],
      resultado: "casa (o cosa)." },
  ],
  errores: [
    "Oblidar la h en escriure perquè no sona: home, hora, herba.",
    "Escriure paraules sense vocals: totes en tenen almenys una.",
    "Pensar que la e i la o sempre sonen igual: poden ser obertes o tancades.",
    "Comptar la ç com una vocal: és una consonant.",
  ],
  ejercicios: [
    { q: "Digues les cinc vocals.", sol: "a, e, i, o, u." },
    { q: "Quantes consonants té l'abecedari català?", sol: "21." },
    { q: "Encercla les vocals de «lluna».", sol: "u, a." },
    { q: "Quantes vocals té «papallona»?", sol: "4: a, a, o, a." },
    { q: "Escriu les consonants de «gos».", sol: "g, s." },
    { q: "Completa: m + o = …", sol: "mo." },
    { q: "Quina lletra no sona a «hora»?", sol: "La h." },
    { q: "La è de «cafè» és oberta o tancada?", sol: "Oberta." },
    { q: "Completa amb vocals: p_t_ta.", sol: "patata." },
    { q: "Digues una paraula amb una sola vocal.", sol: "Per exemple: sol, pa, tren, mar, gat." },
  ],
  quiz: [
    { q: "Quantes vocals hi ha?", o: ["5", "10", "26"], a: 0, e: "a, e, i, o, u." },
    { q: "Quina és vocal?", o: ["m", "o", "t"], a: 1, e: "La o." },
    { q: "Quina és consonant?", o: ["e", "u", "p"], a: 2, e: "La p." },
    { q: "Les vocals sonen…", o: ["soles", "mai", "només amb una altra lletra"], a: 0, e: "Sonen soles." },
    { q: "s + a = …", o: ["as", "sa", "so"], a: 1, e: "sa." },
    { q: "Quina lletra és muda?", o: ["h", "m", "a"], a: 0, e: "La h no sona." },
    { q: "Quantes vocals té «gat»?", o: ["1", "2", "3"], a: 0, e: "Només la a." },
    { q: "La è és…", o: ["oberta", "tancada", "muda"], a: 0, e: "Accent obert." },
    { q: "Quantes consonants hi ha?", o: ["21", "5", "12"], a: 0, e: "26 − 5 = 21." },
    { q: "Tota paraula té almenys…", o: ["una vocal", "una h", "una ç"], a: 0, e: "Una vocal." },
  ],
  examen: [
    { q: "Quina vocal surt amb la boca rodona?", o: ["i", "o", "e"], a: 1, e: "La o." },
    { q: "Quines consonants té «pa»?", o: ["p", "a", "p i a"], a: 0, e: "Només la p." },
    { q: "Completa: t + e = …", o: ["et", "te", "ta"], a: 1, e: "te." },
    { q: "Quina paraula està mal escrita?", o: ["mel", "ml", "mal"], a: 1, e: "Li falta una vocal." },
  ],
  feynman: ["Quina diferència hi ha entre vocal i consonant", "Què són les vocals obertes i tancades", "Quina lletra és muda"],
  mapa: mapa("LES LLETRES", "var(--pri)", [
    ["5 vocals", "a, e, i, o, u: sonen soles", R],
    ["21 consonants", "b, c, d… necessiten vocal", A],
    ["S'uneixen", "m + a = ma", Ve],
    ["Especials", "h muda · è oberta, é tancada", N],
  ], 230),
  tarjetas: [
    ["Quines són les vocals?", "a, e, i, o, u"],
    ["Quantes consonants hi ha?", "21"],
    ["Com sonen les vocals?", "Soles"],
    ["Què necessiten les consonants?", "Una vocal per sonar bé"],
    ["p + a = …", "pa"],
    ["Quina lletra és muda?", "La h"],
    ["è i ò són…", "Obertes"],
    ["Hi ha paraules sense vocal?", "No, totes en tenen almenys una"],
  ],
  familias: [
    "Jugueu a palmada (vocal) i cop de peu (consonant) amb lletres soltes.",
    "Llegiu un cartell i compteu quantes vocals té.",
    "Escriviu paraules amb forats a les vocals perquè les completi.",
    "Canteu les vocals fent la boca de cadascuna davant del mirall.",
  ],
  profesores: PROFCA("Consciència fonològica: vocals i consonants, vocals obertes i tancades, combinació de lletres en síl·labes i la h muda", ["Mural de dos equips: vocals i consonants.", "Joc de palmada i cop de peu per discriminar sons.", "Parelles de paraules amb vocal oberta i tancada."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distingir les vocals amb accent obert i tancat", "Conèixer els dígrafs: ll, ny, rr, ss, qu, gu", "Comptar vocals i consonants d'una paraula", "Fer servir la dièresi en casos senzills"],
  lectura: { titulo: "La festa de les lletres", html: `<p>Al país de l'Abecedari, les lletres van organitzar una gran festa.</p><p>Les cinc <b>vocals</b>, A, E, I, O i U, van arribar cantant, perquè elles soles ja sonen: «A-a-a! E-e-e!»</p><p>Les <b>consonants</b> van arribar després. La B, la C, la D… Totes volien cantar, però no podien fer-ho soles.</p><p>—Bbbb… —feia la B, sense poder dir res més.</p><p>—Vine amb mi! —li va dir la A.</p><p>I juntes van cantar: «Ba! Ba! Ba!»</p><p>Aviat totes les consonants van trobar una vocal per ballar: la M amb la A (ma), la P amb la O (po), la S amb la U (su)…</p><p>Al final de la festa, la L i la L es van agafar de la mà i van fer una lletra nova: <b>ll</b>, com a «lluna». I la N i la Y van fer <b>ny</b>, com a «nyam-nyam».</p><p>—Quina festa més bonica! —va dir la H, que és muda i no va poder cantar, però va ballar tota la nit.</p>` },
  tras: {
    "Les vocals": [
      ["L'accent: obert i tancat", `<p>Algunes vocals porten un <mark>accent</mark> a sobre. En català n'hi ha de dues maneres:</p><ul><li><b>Accent obert</b> (\`) : baixa cap a la dreta. Va sobre la <b>à</b>, la <b>è</b> i la <b>ò</b>. Exemples: <i>mà</i>, <i>cafè</i>, <i>òliba</i>.</li><li><b>Accent tancat</b> (´) : puja cap a la dreta. Va sobre la <b>é</b>, la <b>í</b>, la <b>ó</b> i la <b>ú</b>. Exemples: <i>cançó</i>, <i>camí</i>, <i>també</i>, <i>múscul</i>.</li></ul><p>La <b>a</b> sempre porta accent obert: <i>sofà</i>, <i>papà</i>.</p><p>La <b>i</b> i la <b>u</b> sempre porten accent tancat: <i>camí</i>, <i>ningú</i>.</p><p>La <b>e</b> i la <b>o</b> poden portar-ne de tots dos tipus: <i>cafè</i> / <i>també</i>; <i>òliba</i> / <i>cançó</i>.</p><p><b>Activitat</b>: busca en un conte cinc paraules amb accent i digues si és obert o tancat.</p>`,
        H6.dos("Accent", ["OBERT `", ["sofà", "cafè", "òliba"], cAZ], ["TANCAT ´", ["camí", "també", "cançó"], cRO])],
    ],
    "Les consonants": [
      ["Dues lletres, un sol so", `<p>Alguns sons els escrivim amb <mark>dues lletres</mark> juntes. Són els <b>dígrafs</b>:</p><ul><li><b>ll</b>: lluna, cavall, ull.</li><li><b>ny</b>: nyam, muntanya, any.</li><li><b>rr</b>: gorra, terra, carro (només entre vocals).</li><li><b>ss</b>: tassa, gossos, classe (entre vocals, so fort).</li><li><b>qu</b> davant de e i i: <i>que</i>, <i>química</i>, <i>paquet</i>.</li><li><b>gu</b> davant de e i i: <i>guerra</i>, <i>guitarra</i>, <i>guineu</i>.</li><li><b>ix</b>: caixa, peix.</li></ul><p>Quan comptem lletres, el dígraf són dues lletres, però sona com un sol so: <i>lluna</i> té 5 lletres i 4 sons.</p><p>Ull! A <b>qu</b> i <b>gu</b> la u no sona: <i>que</i> sona «ke».</p><p><b>Activitat</b>: busca a la classe objectes que tinguin ll, ny o rr al seu nom.</p>`,
        L6.filas("Dígrafs", [["ll", "lluna", cAZ], ["ny", "muntanya", cVE], ["rr", "gorra", cNA], ["qu / gu", "que, guitarra", cRO]])],
    ],
    "Comptem lletres": [
      ["Vocals i consonants a cada paraula", `<p>Per <mark>comptar</mark> les vocals i consonants d'una paraula, anem lletra per lletra:</p><ul><li><b>gat</b>: g-a-t → 1 vocal (a) i 2 consonants (g, t).</li><li><b>casa</b>: c-a-s-a → 2 vocals i 2 consonants.</li><li><b>arbre</b>: a-r-b-r-e → 2 vocals i 3 consonants.</li><li><b>aigua</b>: a-i-g-u-a → 4 vocals i 1 consonant!</li></ul><p>Algunes paraules tenen moltes vocals juntes: <i>aire</i>, <i>noia</i>, <i>cuina</i>.</p><p>Altres tenen moltes consonants juntes: <i>trist</i>, <i>prompte</i>.</p><p>Recorda que la paraula més curta del català pot tenir una sola lletra: <i>a</i>, <i>i</i>, <i>o</i>. Totes són vocals!</p><p>I que la <b>h</b> no sona, però sí que compta com a consonant: <i>hora</i> té 4 lletres.</p><p><b>Activitat</b>: escriu el teu nom i compta quantes vocals i quantes consonants té.</p>`,
        H6.flujo("Comptem", ["gat|1 v + 2 c", "casa|2 + 2", "arbre|2 + 3", "aigua|4 + 1"], cNA),
        ["KEMPzVCLjZg", "El Pot Petit - Els pirates", "El Pot Petit", 23337866]],
    ],
    "Per a què serveix?": [
      ["Els dos puntets: la dièresi", `<p>A vegades veiem dos puntets damunt d'una vocal: és la <mark>dièresi</mark> (¨).</p><p>Té dues feines:</p><ul><li><b>Fer sonar la u</b> després de q o g: <i>pingüí</i>, <i>aigüera</i>, <i>qüestió</i>. Sense dièresi, la u no sonaria: «pingi».</li><li><b>Separar dues vocals</b> que estan juntes: <i>veïna</i> (ve-ï-na), <i>raïm</i> (ra-ïm), <i>països</i>. Així sabem que la ï va en una altra síl·laba.</li></ul><p>Paraules amb dièresi que fem servir molt:</p><ul><li><b>pingüí</b>, <b>aigües</b>, <b>llengües</b></li><li><b>veïna</b>, <b>raïm</b>, <b>Lluïsa</b></li><li><b>oïda</b>, <b>diürn</b></li></ul><p>Compara: <i>guerra</i> (la u no sona) i <i>pingüí</i> (la u sona).</p><p><b>Activitat</b>: dibuixa un pingüí menjant raïm i escriu-hi les dues paraules amb dièresi.</p>`,
        H6.rueda("Dièresi", "PUNTETS", [["pingüí", cAZ], ["raïm", cMO], ["veïna", cVE], ["aigües", cRO]])],
    ],
  },
  final: [
    ["Embarbussaments", `<p>Els <mark>embarbussaments</mark> són frases difícils de dir de pressa perquè repeteixen sons semblants. Són perfectes per practicar les lletres!</p><ul><li>«<b>Setze jutges d'un jutjat mengen fetge d'un penjat.</b>»</li><li>«<b>Un plat blanc, pla, ple de pebre negre està.</b>»</li><li>«<b>En Pinxo li va dir a en Panxo: vols que et punxi amb un punxó?</b>»</li><li>«<b>Plou poc, però per poc que plogui, plou prou.</b>»</li><li>«<b>Paula, para la taula.</b>»</li></ul><p>Primer els diem a poc a poc, pronunciant bé totes les lletres. Després, cada vegada més de pressa.</p><p>El de «Setze jutges» és tan famós que a vegades es fa servir per saber si algú parla bé el català!</p><p><b>Activitat</b>: aprèn un embarbussament i digues-lo tres vegades seguides sense equivocar-te.</p>`,
      L6.filas("Embarbussa", [["setze", "jutges", cRO], ["plat", "blanc, pla", cAZ], ["Pinxo", "Panxo", cVE], ["Paula", "para la taula", cNA]])],
    ["Repàs: la festa de les lletres", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>Les <b>cinc vocals</b> (a, e, i, o, u) sonen soles.</li><li>Les <b>consonants</b> necessiten una vocal per sonar: <b>b</b> + <b>a</b> = ba.</li><li>Les parelles fan síl·labes: <b>ma</b>, <b>po</b>, <b>su</b>.</li><li>La <b>l</b> i la <b>l</b> fan el dígraf <b>ll</b>: lluna.</li><li>La <b>n</b> i la <b>y</b> fan el dígraf <b>ny</b>: nyam-nyam.</li><li>La <b>h</b> és <b>muda</b>: no sona, però existeix.</li></ul><p>Les lletres treballen en equip per fer paraules, igual que nosaltres treballem en equip a classe!</p><p><b>Activitat</b>: inventa una escena de la festa amb dues lletres noves que es fan amigues.</p>`,
      H6.flujo("Festa", ["vocals|canten", "b + a|ba", "l + l|ll", "h|muda"], cVE)],
  ],
  ejemplos: [
    ["Quin accent porta «camí»?", ["La i sempre porta accent tancat."], "Accent tancat: camí."],
    ["Quantes vocals té «aigua»?", ["a-i-g-u-a"], "Quatre vocals i una consonant."],
  ],
  errores: ["Posar accent obert a la i: «camì».", "Oblidar la dièresi a «pingüí» o «raïm»."],
  ejercicios: [
    ["b", "Digues les cinc vocals.", "A, e, i, o, u."],
    ["b", "Quin accent porta «sofà»?", "Obert."],
    ["b", "Escriu una paraula amb ll.", "Lluna, cavall…"],
    ["b", "Quantes vocals té «gat»?", "Una."],
    ["b", "Com es diuen els dos puntets?", "Dièresi."],
    ["m", "Quin accent porta «cançó»?", "Tancat."],
    ["m", "Compta vocals i consonants: arbre.", "2 vocals i 3 consonants."],
    ["m", "A «guerra», sona la u?", "No."],
    ["m", "Escriu dues paraules amb ny.", "Muntanya, any…"],
    ["m", "Per què «raïm» porta dièresi?", "Per separar la a i la i en dues síl·labes."],
    ["a", "A la lectura, per què la H no pot cantar?", "Perquè és muda."],
    ["a", "Quines lletres fan el dígraf ny?", "La n i la y."],
    ["a", "Classifica: cafè, també, òliba, camí.", "Obert: cafè, òliba. Tancat: també, camí."],
    ["a", "Digues un embarbussament de memòria.", "Setze jutges d'un jutjat…"],
  ],
  quiz: [
    ["La a porta sempre accent…", ["obert", "tancat", "cap"], "Accent."],
    ["És un dígraf…", ["ny", "nt", "pl"], "Dígrafs."],
    ["«Aigua» té…", ["4 vocals", "2 vocals", "1 vocal"], "Comptem."],
    ["Porta dièresi…", ["pingüí", "guerra", "guitarra"], "Dièresi."],
    ["«Setze jutges…» és un…", ["embarbussament", "conte", "poema llarg"], "Embarbussaments."],
  ],
  examen: [
    ["A la lectura, què fan la L i la L?", ["la ll", "la ny", "la rr"], "Lectura."],
    ["Quina lletra és muda?", ["la h", "la b", "la a"], "Repàs."],
  ],
  tarjetas: [
    ["Accents", "Obert: à, è, ò. Tancat: é, í, ó, ú."],
    ["Dígrafs", "ll, ny, rr, ss, qu, gu, ix: dues lletres, un so."],
  ],
  glosario: [
    ["Vocal", "Lletra que sona sola: a, e, i, o, u."],
    ["Consonant", "Lletra que necessita una vocal per sonar."],
    ["Accent obert", "Ratlleta que baixa cap a la dreta: à."],
    ["Accent tancat", "Ratlleta que puja cap a la dreta: í."],
    ["Dígraf", "Dues lletres que fan un sol so."],
    ["Dièresi", "Dos puntets sobre la i o la u."],
    ["Lletra muda", "Lletra que no sona: la h."],
    ["Embarbussament", "Frase difícil de dir de pressa."],
    ["Pingüí", "Ocell que no vola i viu al fred."],
    ["Veïna", "Persona que viu a prop."],
  ],
  situacion: {
    titulo: "El concurs de les lletres",
    reto: "La classe organitza un concurs amb proves de vocals, consonants, accents, dígrafs i embarbussaments.",
    pasos: ["Preparar targetes amb paraules amb accent i dièresi.", "Fer una prova de comptar vocals i consonants.", "Buscar objectes amb dígrafs.", "Fer la final amb embarbussaments."],
    producto: "Un concurs de lletres amb proves i puntuacions.",
    evaluacion: ["Distingeix accent obert i tancat.", "Reconeix dígrafs.", "Compta vocals i consonants.", "Fa servir la dièresi."],
  },
});
