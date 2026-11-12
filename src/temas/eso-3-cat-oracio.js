// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "L'oració simple",
  minutos: 55,
  objetivos: ["Identificar el subjecte i el predicat d'una oració", "Distingir el predicat nominal del verbal", "Reconèixer els complements del verb i substituir-los per pronoms febles"],
  claves: ["oració", "subjecte", "predicat", "concordança", "subjecte el·líptic", "atribut", "complement directe", "complement indirecte", "complement circumstancial", "complement de règim verbal"],
  pregunta: {
    texto: "Com podem saber quin és el subjecte de «Ahir a la tarda em van trucar els meus avis»?",
    respuesta: "Canviant el nombre del verb: si diem «em <b>va</b> trucar», hem de dir «el meu <b>avi</b>». El grup que canvia amb el verb és el subjecte: <mark>els meus avis</mark>. Aquesta és la <b>prova de la concordança</b>, la manera més segura de trobar-lo, encara que el subjecte vagi al final de la frase.",
  },
  bloques: [
    {
      html: `<h3>Què és una oració</h3><p>Una <b>oració</b> és una unitat amb <mark>sentit complet</mark> que té un verb conjugat. Si té un sol verb, és una <b>oració simple</b>: <i>La Laia estudia música</i>. Si en té més d'un, és composta. Les frases sense verb, com <i>Bon dia!</i> o <i>Prohibit fumar</i>, s'anomenen <b>enunciats no oracionals</b>. La majoria d'oracions tenen dues parts: el <b>subjecte</b> i el <b>predicat</b>.</p>`,
      svg: L.frase("Oració simple: la Laia estudia música", [
        ["La Laia", "subjecte", "var(--pen)"], ["estudia música.", "predicat", "var(--red)"],
      ], "un sol verb conjugat"),
    },
    {
      html: `<h3>El subjecte</h3><p>El <b>subjecte</b> és el SN que <mark>concorda en persona i nombre</mark> amb el verb. Normalment indica qui fa l'acció, però no sempre (<i>A mi m'agraden <u>les maduixes</u></i>: el subjecte és «les maduixes»). Pot anar davant o darrere del verb. Quan no apareix perquè ja es dedueix de la forma verbal, diem que és un <b>subjecte el·líptic</b> o omès: <i>Ø Anirem a la platja</i> (nosaltres).</p>`,
      svg: L.filas("Prova de la concordança", [
        ["Singular", "M'agrada la maduixa.", "var(--pen)"],
        ["Plural", "M'agraden les maduixes.", "var(--red)"],
        ["Subjecte", "les maduixes", "var(--leaf)"],
      ], "el que canvia amb el verb"),
    },
    {
      html: `<h3>Predicat nominal i predicat verbal</h3><p>El <b>predicat nominal</b> té un verb <b>copulatiu</b> (<i>ser</i>, <i>estar</i>, <i>semblar</i>) i un <b>atribut</b> que expressa una qualitat del subjecte: <i>La sopa <u>és calenta</u></i>. L'atribut concorda amb el subjecte i es pot substituir per <mark>ho</mark>: <i>Ho és</i>. El <b>predicat verbal</b> té qualsevol altre verb, que expressa una acció o un procés: <i>La Mar <u>corre cada dia</u></i>.</p>`,
      svg: L.filas("Tipus de predicat", [
        ["Nominal", "és calenta → ho és", "var(--pen)"],
        ["Verbal", "corre cada dia", "var(--red)"],
      ], "ser, estar, semblar + atribut"),
    },
    {
      html: `<h3>El complement directe i l'indirecte</h3><p>El <b>complement directe</b> (CD) completa el significat del verb i se substitueix pels pronoms <i>el, la, els, les</i>, <i>en</i> o <i>ho</i>: <i>Compro <u>el diari</u> → <b>El</b> compro</i>. En català, el CD de persona <mark>no porta preposició</mark>: <i>Veig la Maria</i>. El <b>complement indirecte</b> (CI) indica qui rep el benefici o el perjudici de l'acció, porta <i>a</i> o <i>per a</i> i se substitueix per <i>li</i> o <i>els</i>: <i>Dono el regal <u>a l'avi</u> → <b>Li</b> dono</i>.</p>`,
      svg: L.frase("CD i CI amb pronoms febles", [
        ["Dono", "verb", "var(--red)"], ["el regal", "CD → el", "var(--pen)"],
        ["a l'avi.", "CI → li", "var(--leaf)"],
      ], "L'hi dono."),
    },
    {
      html: `<h3>Els complements circumstancials</h3><p>Els <b>complements circumstancials</b> (CC) indiquen les circumstàncies de l'acció: <b>lloc</b> (<i>a l'escola</i>), <b>temps</b> (<i>ahir</i>), <b>manera</b> (<i>ràpidament</i>), <b>companyia</b> (<i>amb els amics</i>), <b>causa</b> (<i>per la pluja</i>), <b>finalitat</b> (<i>per aprovar</i>), <b>instrument</b> (<i>amb el martell</i>) o <b>quantitat</b> (<i>molt</i>). Es poden moure de lloc i, sovint, eliminar sense que la frase perdi el sentit.</p>`,
      svg: L.filas("Complements circumstancials", [
        ["Lloc", "a l'escola (on?)", "var(--pen)"],
        ["Temps", "ahir (quan?)", "var(--leaf)"],
        ["Manera", "ràpidament (com?)", "var(--red)"],
        ["Companyia", "amb els amics", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Passos per analitzar una oració simple",
    svg: L.pasos("Com analitzar una oració simple", [
      ["Verb", ["troba el verb", "conjugat"], "var(--red)"],
      ["Subjecte", ["prova de la", "concordança"], "var(--pen)"],
      ["Predicat", ["nominal", "o verbal"], "var(--leaf)"],
      ["Complements", ["pronoms febles", "i preguntes"], "var(--inf)"],
    ]),
  },
  video: { id: "cf6UUzIA8No", titulo: "El subjecte i el predicat en català: t'ho expliquem fàcil!", canal: "OK CATALÀ", vistas: 61936, megusta: 0, busqueda: "subjecte i predicat català" },
  quiz: [
    { q: "El subjecte concorda amb el verb en…", o: ["persona i nombre", "gènere i temps", "mode"], a: 0, e: "Prova de la concordança." },
    { q: "A «M'agraden els gats», el subjecte és…", o: ["els gats", "m'", "jo"], a: 0, e: "Concorda amb «agraden»." },
    { q: "«La Núria és simpàtica» té predicat…", o: ["nominal", "verbal", "el·líptic"], a: 0, e: "Verb copulatiu + atribut." },
    { q: "El CI se substitueix per…", o: ["li, els", "el, la", "hi"], a: 0, e: "Dono a l'avi → li dono." },
    { q: "«Veig ___ Maria» en català:", o: ["la", "a la", "per la"], a: 0, e: "El CD de persona no porta «a»." },
  ],
  examen: [
    { q: "«Ahir» és un CC de…", o: ["temps", "lloc", "manera"], a: 0, e: "Respon a quan." },
    { q: "L'atribut se substitueix per…", o: ["ho", "li", "en"], a: 0, e: "Ho és." },
    { q: "A «Anirem a la platja», el subjecte és…", o: ["el·líptic (nosaltres)", "la platja", "no en té"], a: 0, e: "Es dedueix del verb." },
  ],
  feynman: ["Què és una oració simple", "La prova de la concordança per trobar el subjecte", "La diferència entre predicat nominal i verbal", "El CD i el CI amb els seus pronoms febles"],
  mapa: mapa("ORACIÓ SIMPLE", "var(--eso)", [
    ["Subjecte", "concorda amb el verb", "var(--pen)"],
    ["Pred. nominal", "ser/estar/semblar + atribut", "var(--leaf)"],
    ["CD · CI", "el, la, en, ho · li, els", "var(--red)"],
    ["CC", "lloc, temps, manera…", "var(--inf)"],
  ]),
  tarjetas: [
    ["Subjecte", "SN que concorda en persona i nombre amb el verb."],
    ["Subjecte el·líptic", "Subjecte que no apareix però es dedueix del verb: Ø Anirem."],
    ["Atribut", "Complement dels verbs copulatius; se substitueix per «ho»."],
    ["Complement directe", "Se substitueix per el, la, els, les, en o ho."],
    ["Complement indirecte", "Indica qui rep l'acció; se substitueix per li o els."],
  ],
  familias: ["Agafeu frases del diari i jugueu a trobar el subjecte canviant el verb de singular a plural.", "Digueu frases en veu alta i responeu-les amb pronoms febles: «Has fet els deures?» «Sí, els he fet».", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: l'oració simple, subjecte i predicat, complements verbals i pronominalització amb pronoms febles (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Construir oracions amb targetes de colors per a cada funció.", "Torneig de pronominalització: substituir complements per pronoms febles.", "Analitzar titulars i comprovar si tenen verb o són enunciats no oracionals."],
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
  minutos: 70,
  objetivos: ["Reconèixer el complement de règim verbal i el predicatiu", "Classificar les oracions simples"],
  bloques: [
    { tras: "Predicat nominal i predicat verbal", html: `<h3>El complement predicatiu</h3><p>Alguns verbs no copulatius porten un complement que, com l'atribut, expressa una qualitat del subjecte o del CD i hi <b>concorda</b>: és el <mark>complement predicatiu</mark>. <i>La Marta ha arribat <u>cansada</u></i>; <i>Els nens dormien <u>tranquils</u></i>; <i>Han nomenat l'Anna <u>delegada</u></i>.</p><p>Per distingir-lo d'un complement circumstancial de manera, fixa't en la concordança: a <i>ha arribat cansada</i>, «cansada» canvia si canviem el subjecte (<i>el Pere ha arribat cansat</i>). En canvi, a <i>ha arribat ràpidament</i>, l'adverbi no canvia mai. El predicatiu se substitueix sovint pel pronom <b>hi</b>: <i>Hi ha arribat</i>, tot i que aquesta substitució no sempre resulta natural.</p>` },
    { tras: "El complement directe i l'indirecte", html: `<h3>El complement de règim verbal</h3><p>Alguns verbs exigeixen un complement amb una <b>preposició fixa</b>: <i>parlar <u>de</u></i>, <i>pensar <u>en</u></i>, <i>confiar <u>en</u></i>, <i>adonar-se <u>de</u></i>, <i>renunciar <u>a</u></i>. Aquest complement és el <mark>complement de règim verbal</mark> (CRV) o complement preposicional. No es pot eliminar sense que el verb quedi incomplet: <i>Penso <u>en les vacances</u></i>.</p><p>Se substitueix per <b>en</b> si la preposició és <i>de</i> (<i>Parlem <u>del viatge</u> → <b>En</b> parlem</i>) i per <b>hi</b> si és <i>a</i>, <i>en</i> o <i>amb</i> (<i>Penso <u>en les vacances</u> → <b>Hi</b> penso</i>). Compte: davant de «que» o d'un infinitiu, la preposició cau: <i>Estic segur <u>que</u> vindrà</i>, i no «de que».</p>` },
    { tras: "Els complements circumstancials", html: `<h3>Els pronoms febles i les funcions</h3><p>Els pronoms febles són una eina perfecta per <b>comprovar les funcions</b>. Aquesta taula resumeix les substitucions més habituals:</p>${L.tb(["Funció", "Pronom", "Exemple"], [["CD determinat", "el, la, els, les", "Llegeixo <u>el llibre</u> → <b>El</b> llegeixo."], ["CD indeterminat", "en", "Vull <u>pa</u> → <b>En</b> vull."], ["CD neutre", "ho", "Sé <u>que plourà</u> → <b>Ho</b> sé."], ["CI", "li, els", "Escric <u>a la tieta</u> → <b>Li</b> escric."], ["Atribut", "ho", "És <u>alt</u> → <b>Ho</b> és."], ["CRV amb de", "en", "Parla <u>de futbol</u> → <b>En</b> parla."], ["CRV amb a, en", "hi", "Pensa <u>en tu</u> → <b>Hi</b> pensa."], ["CC de lloc", "hi / en", "Vaig <u>a Vic</u> → <b>Hi</b> vaig. Vinc <u>de Vic</u> → <b>En</b> vinc."]])}<p>Recorda: el CI plural és <mark>els</mark> (mai «lis») i el CD neutre és <mark>ho</mark>.</p>` },
    { tras: "Els complements circumstancials", html: `<h3>Classes d'oracions simples</h3><p>Podem classificar les oracions simples amb diversos criteris:</p><ul><li>Segons la <b>intenció</b> (modalitat): enunciatives (<i>Plou.</i>), interrogatives (<i>Plou?</i>), exclamatives (<i>Com plou!</i>), imperatives (<i>Tanca la finestra.</i>), desideratives (<i>Tant de bo plogui.</i>) i dubitatives (<i>Potser plourà.</i>).</li><li>Segons el <b>predicat</b>: <b>copulatives</b> (amb atribut) i <b>predicatives</b>. Les predicatives poden ser <b>transitives</b>, si tenen CD (<i>Menjo pa</i>), o <b>intransitives</b>, si no en tenen (<i>Dormo</i>).</li><li>Altres tipus: <b>reflexives</b> (<i>La Mar es pentina</i>), <b>recíproques</b> (<i>Els amics s'abracen</i>), <b>passives</b> (<i>El castell va ser construït al segle XII</i>) i <b>impersonals</b>, que no tenen subjecte (<i>Plou</i>, <i>Hi ha festa</i>, <i>Fa fred</i>).</li></ul><p>En les impersonals amb <i>haver-hi</i>, el verb va sempre en <mark>singular</mark>: <i>Hi ha molts nens</i>, i no «hi han».</p>` },
    { tras: "Els complements circumstancials", html: `<h3>Una anàlisi completa, pas a pas</h3><p>Analitzem <i>Ahir els meus cosins van regalar un rellotge a l'avi a Lleida</i>:</p><ol><li><b>Verb</b>: «van regalar» (passat perifràstic).</li><li><b>Subjecte</b>: canviem el nombre del verb («va regalar») → ha de canviar «els meus cosins». Subjecte: <i>els meus cosins</i> (SN).</li><li><b>Predicat</b>: la resta. És <b>verbal</b>, perquè «regalar» no és copulatiu.</li><li><b>CD</b>: «un rellotge» → <i>en van regalar un</i>.</li><li><b>CI</b>: «a l'avi» → <i>li van regalar</i>.</li><li><b>CC</b>: «ahir» (temps) i «a Lleida» (lloc → <i>hi</i>).</li></ol><p>Finalment, la classifiquem: oració simple, <mark>enunciativa afirmativa, predicativa i transitiva</mark>. Si la feina es fa amb ordre, l'anàlisi és molt més fàcil.</p>` },
  ],
  videos: [
    ["El complement directe i l'indirecte", L.vid("MGtwAxnBbi8", "El complement directe | Morfosintaxi | 3r i 4t ESO", "3CatCampus", 64433)],
    ["Els pronoms febles i les funcions", L.vid("-Qj_1GXgEjI", "El complement indirecte (CI): explicació i errors comuns", "Parlem d'escriure en català", 39676)],
  ],
  ejemplos: [
    ["Troba el subjecte de «Em fan mal els peus».", ["Verb: fan.", "Canviem el nombre: «em fa mal…» → «el peu».", "El grup que canvia és «els peus»."], "el subjecte és «els peus»."],
    ["Analitza «La meva germana és infermera».", ["Verb copulatiu: és.", "Subjecte: la meva germana (concorda amb «és»).", "Atribut: infermera → «ho és»."], "subjecte + predicat nominal (verb copulatiu + atribut)."],
    ["Substitueix per pronoms febles: «Explico el conte als nens».", ["CD determinat: el conte → el.", "CI plural: als nens → els.", "Combinació «els + el», que davant de vocal s'escriu «els l'»."], "Els l'explico."],
  ],
  errores: [
    "Posar «a» davant del CD de persona: «Veig a la Maria» en lloc de «Veig la Maria».",
    "Dir «lis» com a CI plural en lloc de «els».",
    "Concordar «haver-hi» amb el complement: «hi han molts nens» en lloc de «hi ha».",
    "Pensar que el subjecte sempre va davant del verb.",
    "Confondre l'atribut (amb ser, estar, semblar) i el predicatiu (amb altres verbs).",
    "Mantenir la preposició davant de «que»: «estic segur de que» en lloc de «estic segur que».",
  ],
  ejercicios: [
    ["Troba el subjecte: «A la Marta li agraden les pel·lícules de por».", "Les pel·lícules de por."],
    ["Quin subjecte té «Hem guanyat el partit»?", "Subjecte el·líptic: nosaltres."],
    ["Nominal o verbal? «El cel sembla gris».", "Nominal (sembla + atribut «gris»)."],
    ["Substitueix el CD: «Mengem les galetes».", "Les mengem."],
    ["Substitueix el CD: «Vull aigua».", "En vull."],
    ["Substitueix el CI: «Escric una carta als meus cosins».", "Els escric una carta."],
    ["Troba el CRV: «Ens hem adonat de l'error».", "«De l'error» (se substitueix per «en»: Ens n'hem adonat)."],
    ["Classifica segons la modalitat: «Tant de bo vinguis!».", "Desiderativa."],
    ["Corregeix: «Hi havien molts cotxes».", "Hi havia molts cotxes."],
    ["Analitza els CC de «Demà anirem amb bici al parc».", "Demà: CC de temps. Amb bici: CC d'instrument o mitjà. Al parc: CC de lloc."],
  ],
  quiz: [
    ["A «Ha arribat cansada», «cansada» és…", ["complement predicatiu", "atribut", "CD"], 0, "Verb no copulatiu."],
    ["«Parlem del viatge» → ", ["En parlem", "Hi parlem", "El parlem"], 0, "CRV amb «de» → en."],
    ["«Plou» és una oració…", ["impersonal", "copulativa", "passiva"], 0, "No té subjecte."],
    ["Una oració amb CD és…", ["transitiva", "intransitiva", "copulativa"], 0, "Té complement directe."],
    ["«Hi ha molts nens» porta el verb en…", ["singular", "plural", "infinitiu"], 0, "Haver-hi és impersonal."],
  ],
  tarjetas: [
    ["Complement predicatiu", "Qualitat del subjecte o del CD amb un verb no copulatiu: Ha arribat cansada."],
    ["Complement de règim verbal", "Complement amb preposició fixa: penso en tu → hi penso."],
    ["Oració impersonal", "Oració sense subjecte: Plou. Hi ha festa. Fa fred."],
  ],
});
