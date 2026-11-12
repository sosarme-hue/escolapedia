// Llengua Catalana 1r de Primària: la majúscula i el punt. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, lista, mural, silabas: s, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", K = "var(--ink)";
const maj = (w, c = R) => s(`${w[0]}|${w.slice(1)}`, c);

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "La majúscula i el punt",
  minutos: 20,
  objetivos: ["Començar a escriure amb majúscula", "Escriure amb majúscula els noms de persones, animals i llocs", "Posar punt al final de la frase i majúscula després"],
  claves: ["majúscula", "minúscula", "nom propi", "punt", "frase"],
  pregunta: {
    texto: "Mira aquest cartell: «anna i pau van a girona». Quines lletres haurien de ser més grans?",
    respuesta: "La <b>a</b> d'Anna, la <b>p</b> de Pau i la <b>g</b> de Girona. Són <mark>noms</mark> i van amb <b>majúscula</b>. I al final, un <b>punt</b>: «Anna i Pau van a Girona.»",
  },
  bloques: [
    {
      html: `<h3>Majúscules i minúscules</h3><p>Cada lletra té dues formes: la <mark>majúscula</mark> i la <mark>minúscula</mark>.</p><p>La majúscula és <b>més gran</b>: A, B, M. La minúscula és <b>més petita</b>: a, b, m.</p><p>Totes dues sonen igual. El que canvia és la mida i, de vegades, la forma. Mira la B i la b: s'assemblen poc!</p>`,
      svg: fichas("Parelles de majúscula i minúscula: Aa, Bb, Mm, Ee, Pp, Ss", [["Aa", R], ["Bb", A], ["Mm", V], ["Ee", N], ["Pp", R], ["Ss", A]], { titulo: "Gran i petita", nota: "Sonen igual" }),
      video: vid("KKRC6P8yWNs", "Les majúscules", "SuperCampus y SX3", 1295),
    },
    {
      html: `<h3>Quan comencem a escriure</h3><p>La <b>primera paraula</b> del que escrivim comença amb <mark>majúscula</mark>.</p><p>«<b>A</b>vui fa sol.» «<b>E</b>l meu gos és marró.»</p><p>La majúscula és com una porta gran. Avisa que <b>comença una cosa nova</b>. Per això, quan escrius al quadern, la primera lletra sempre va en gran.</p>`,
      svg: frase("La frase Avui fa sol amb la A en majúscula", [[maj("Avui"), K], ["fa", K], ["sol.", K]], { titulo: "La primera lletra, en gran", nota: "La majúscula avisa: comença!", fs: 26 }),
    },
    {
      html: `<h3>Els noms de persones</h3><p>Els noms de les persones s'escriuen amb <mark>majúscula</mark>.</p><p><b>A</b>nna, <b>P</b>au, <b>M</b>arta, <b>J</b>ordi. També els cognoms: <b>G</b>arcia, <b>P</b>uig.</p><p>El teu nom és molt important, per això porta majúscula! Practica escriure'l ben gran a la portada del quadern. Saps escriure també el teu cognom?</p>`,
      svg: dibujos("Tres persones amb el seu nom: Anna, Pau i Marta, amb la primera lletra en vermell", [["nina", maj("Anna"), K], ["nino", maj("Pau"), K], ["abuela", maj("Marta"), K]], { titulo: "Noms de persones" }),
    },
    {
      html: `<h3>Noms de mascotes i de llocs</h3><p>Les <b>mascotes</b> també tenen nom propi: el gos <b>T</b>obi, la gata <b>M</b>ixa.</p><p>Els <b>pobles</b>, les <b>ciutats</b> i els <b>països</b> també porten <mark>majúscula</mark>: <b>G</b>irona, <b>R</b>eus, <b>C</b>atalunya.</p><p>Però si diem només «gos» o «ciutat», va en minúscula. No és un nom propi.</p>`,
      svg: dibujos("Un gos que es diu Tobi, una gata que es diu Mixa i una ciutat, Girona", [["perro", maj("Tobi"), K], ["gato", maj("Mixa"), K], ["torre", maj("Girona"), K]], { titulo: "Mascotes i llocs", nota: "gos, gata i ciutat van en minúscula" }),
    },
    {
      html: `<h3>El punt</h3><p>El <mark>punt</mark> és un puntet que posem <b>al final de la frase</b>.</p><p>Diu: «Aquí s'acaba». «El meu gat és negre<b>.</b>»</p><p>Quan llegim i veiem un punt, fem una <b>petita parada</b>. Respirem i continuem. Sense punts, llegiríem tot seguit i ens quedaríem sense aire. Prova-ho!</p>`,
      svg: frase("La frase El meu gat és negre amb un punt gran al final", [["El", K], ["meu", K], ["gat", K], ["és", K], ["negre", K], [".", R]], { titulo: "El punt diu: aquí s'acaba", nota: "Quan veiem el punt, parem i respirem", fs: 22 }),
    },
    {
      html: `<h3>Després del punt, majúscula</h3><p>Quan una frase s'acaba, en comença una altra de nova.</p><p>Per això, <b>després del punt</b> escrivim amb <mark>majúscula</mark>.</p><p>«Tinc un gos<b>.</b> <b>E</b>s diu Tobi<b>.</b>»</p><p>El punt tanca la porta i la majúscula obre la següent. Sempre van junts, com dos bons amics. Un acaba i l'altre comença.</p>`,
      svg: frase("Dues frases: Tinc un gos. Es diu Tobi. Després del punt va majúscula", [["Tinc", K], ["un", K], ["gos", K], [".", R], ["/"], [maj("Es"), K], ["diu", K], [maj("Tobi", A), K], [".", R]], { titulo: "Punt i després majúscula", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>La majúscula i el punt ens ajuden a <mark>llegir millor</mark>.</p><p>Sabem on comença i on acaba cada frase.</p><p>També serveixen per saber què és un <b>nom</b>. Si llegim «Rosa», sabem que és una persona. Si llegim «rosa», és una flor. Una lletra gran canvia molt! Mira bé cada paraula.</p>`,
      svg: dibujos("Rosa amb majúscula és una nena; rosa amb minúscula és una flor", [["nina", maj("Rosa"), K], ["rosa", "rosa", V]], { titulo: "Persona o flor?", nota: "La majúscula canvia el significat" }),
    },
    {
      html: `<h3>Repassem les regles</h3><p>Abans d'acabar d'escriure, revisa aquestes <mark>tres coses</mark>:</p><p>U: començo amb <b>majúscula</b>? Dos: els <b>noms</b> porten majúscula? Tres: he posat <b>punt</b> al final?</p><p>Si totes tres estan bé, la teva frase està llesta! Pots marcar cada cosa amb un senyal al marge. Així no se t'escapa res!</p>`,
      svg: lista("Tres regles per revisar: començo amb majúscula, noms amb majúscula i punt al final", [["Començo amb majúscula", R], ["Noms amb majúscula", A], ["Punt al final", V]], { titulo: "Abans d'entregar, reviso" }),
    },
    {
      html: `<h3>Juguem als detectius</h3><p>Un detectiu busca <mark>errors</mark> amagats.</p><p>Mira aquesta frase: «anna té un gat» Què hi falta?</p><p>Molt bé! Hi falta la majúscula d'<b>Anna</b> i el <b>punt</b> final: «Anna té un gat.» Inventeu frases amb errors i busqueu-los per torns. Guanya qui en troba més.</p>`,
      svg: frase("Frase amb errors: anna té un gat. Frase corregida: Anna té un gat.", [["anna", R], ["té", R], ["un", R], ["gat", R], ["/"], [maj("Anna", V), K], ["té", K], ["un", K], ["gat", K], [".", V]], { titulo: "Detectius d'errors!", nota: "Hi faltaven la majúscula i el punt", fs: 22 }),
    },
  ],
  figura: {
    titulo: "Quan fem servir majúscula i punt",
    svg: mural("Quatre regles: majúscula per començar, als noms de persones, als noms de llocs, i punt al final de la frase", [["libro", "Avui…", "per començar", R], ["nina", "Anna", "noms de persones", A], ["torre", "Girona", "noms de llocs", V], ["estrella", "fi.", "punt al final", N]], "Majúscula per començar i per als noms; punt per acabar"),
  },
  video: { ...vid("qfGfveW65Fk", "El punt: signes de puntuació per a nens en català", "Smile and Learn - Català", 10054, 65), busqueda: "la majúscula i el punt en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Corregeix: «el meu gos es diu tobi»",
      pasos: ["La primera paraula comença amb majúscula: El.", "Tobi és un nom de mascota: Tobi.", "Al final de la frase posem un punt."],
      resultado: "«El meu gos es diu Tobi.»" },
    { enunciado: "Quantes frases hi ha a «Fa fred. Em poso el barret.»?",
      pasos: ["Busca els punts: n'hi ha dos.", "Cada punt tanca una frase.", "Mira les majúscules: Fa i Em obren cada frase."],
      resultado: "hi ha 2 frases." },
    { enunciado: "Escriu una frase sobre la teva ciutat o el teu poble.",
      pasos: ["Pensa què vols explicar: Visc a Vic.", "Comença amb majúscula: Visc.", "Vic és un lloc: majúscula. Acaba amb punt."],
      resultado: "«Visc a Vic.»" },
  ],
  errores: [
    "Escriure el propi nom amb minúscula: els noms porten sempre majúscula.",
    "Oblidar el punt al final de la frase.",
    "Posar majúscula al mig d'una paraula, com «gAt»: només va al principi.",
    "Posar majúscula a coses que no són noms propis, com «Gos» al mig d'una frase.",
  ],
  ejercicios: [
    { q: "Escriu el teu nom amb majúscula.", sol: "Resposta lliure: la primera lletra, en majúscula." },
    { q: "Escriu la majúscula de: a, m, p.", sol: "A, M, P." },
    { q: "Corregeix: «pau menja pa»", sol: "«Pau menja pa.»" },
    { q: "Porta majúscula «barcelona»?", sol: "Sí: Barcelona és una ciutat." },
    { q: "Porta majúscula «taula»?", sol: "No, tret que sigui la primera paraula de la frase." },
    { q: "Encercla els punts de: «Plou. Agafo el paraigua.»", sol: "Hi ha dos punts: després de «Plou» i de «paraigua»." },
    { q: "Posa el punt: «M'agrada la xocolata»", sol: "«M'agrada la xocolata.»" },
    { q: "Escriu el nom d'una mascota inventada.", sol: "Per exemple: Coco, Núvol, Bigotis (amb majúscula)." },
    { q: "Escriu dues frases sobre casa teva.", sol: "Per exemple: «Casa meva és petita. Té un balcó.»" },
    { q: "Llegeix en veu alta i para al punt: «Salta. Corre. Riu.»", sol: "Cal fer tres parades curtes, una a cada punt." },
  ],
  quiz: [
    { q: "Quina és una lletra majúscula?", o: ["m", "M", "n"], a: 1, e: "M és gran." },
    { q: "Com comença una frase?", o: ["Amb majúscula", "Amb punt", "Amb minúscula"], a: 0, e: "Sempre amb majúscula." },
    { q: "Quina paraula porta majúscula?", o: ["pera", "Laia", "cadira"], a: 1, e: "Laia és un nom de persona." },
    { q: "On va el punt?", o: ["Al principi", "Al final de la frase", "Al mig d'una paraula"], a: 1, e: "El punt diu: aquí s'acaba." },
    { q: "Després d'un punt escrivim…", o: ["majúscula", "minúscula", "un número"], a: 0, e: "Comença una altra frase." },
    { q: "Què està ben escrit?", o: ["la meva gata és Blanca", "La meva gata és blanca.", "la meva Gata és blanca"], a: 1, e: "Majúscula al principi i punt al final." },
    { q: "Porta majúscula «catalunya»?", o: ["Sí", "No", "Només de vegades"], a: 0, e: "Catalunya és un lloc." },
    { q: "Quan llegim i veiem un punt…", o: ["parem una mica", "cridem", "saltem la frase"], a: 0, e: "Fem una petita parada." },
    { q: "«rosa» amb minúscula és…", o: ["una nena", "una flor", "una ciutat"], a: 1, e: "Amb minúscula és la flor." },
    { q: "Quantes frases hi ha a «Hola. Soc el Pau.»?", o: ["1", "2", "3"], a: 1, e: "Dos punts, dues frases." },
  ],
  examen: [
    { q: "Què porta majúscula?", o: ["el nom d'una persona", "qualsevol paraula", "l'última lletra"], a: 0, e: "Els noms propis." },
    { q: "Corregeix «avui és dilluns»:", o: ["Avui és dilluns.", "avui és dilluns.", "Avui Es Dilluns"], a: 0, e: "Majúscula i punt." },
    { q: "El punt es posa…", o: ["quan s'acaba la frase", "quan comença", "entre síl·labes"], a: 0, e: "Al final." },
    { q: "Què és correcte?", o: ["Visc a reus.", "Visc a Reus.", "visc a Reus"], a: 1, e: "Reus és un lloc i la frase acaba en punt." },
  ],
  feynman: ["Quan s'escriu amb majúscula", "Per a què serveix el punt", "Per què va majúscula després del punt"],
  mapa: mapa("MAJÚSCULA I PUNT", "var(--pri)", [
    ["Per començar", "Avui fa sol.", R],
    ["Noms", "Anna, Tobi, Girona", A],
    ["Punt", "al final de la frase", V],
    ["Després del punt", "una altra majúscula", N],
  ], 220),
  tarjetas: [
    ["Com comença una frase?", "Amb majúscula"],
    ["Com acaba una frase?", "Amb punt"],
    ["Porten majúscula els noms de persones?", "Sí: Anna, Pau"],
    ["I els noms de ciutats?", "Sí: Girona, Reus"],
    ["Què faig després d'un punt?", "Escric amb majúscula"],
    ["Què faig quan llegeixo un punt?", "Paro una mica i respiro"],
    ["Majúscula de «b»", "B"],
    ["Corregeix: «pau riu»", "Pau riu."],
  ],
  familias: [
    "Quan feu la llista de la compra, demaneu-li que comenci amb majúscula i posi punt.",
    "Busqueu noms propis als cartells del carrer: carrers, botigues, pobles.",
    "Llegiu junts i feu una pausa exagerada a cada punt, com un joc.",
    "Jugueu als detectius: escriviu una frase amb un error i que el trobi.",
  ],
  profesores: {
    saberes: "Ortografia bàsica: ús de la majúscula a l'inici del text, després de punt i en noms propis; el punt com a marca de final d'oració (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Semàfor d'escriptura: verd la majúscula inicial, vermell el punt final.", "Detectius d'errors amb frases a la pissarra.", "Murals amb els noms propis de la classe, de mascotes i de la població."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
