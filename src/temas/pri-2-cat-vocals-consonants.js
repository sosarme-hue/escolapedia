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
