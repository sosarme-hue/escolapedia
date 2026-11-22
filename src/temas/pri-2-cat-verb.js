// Llengua Catalana 2n de Primària: el verb. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "El verb",
  minutos: 25,
  objetivos: ["Saber que el verb diu el que fan les persones, els animals i les coses", "Trobar el verb en una frase", "Distingir si l'acció va passar, passa ara o passarà"],
  claves: ["verb", "acció", "passat", "present", "futur", "infinitiu"],
  pregunta: {
    texto: "Mira per la finestra. Què fa la gent? I els ocells?",
    respuesta: "La gent <b>camina</b>, <b>parla</b>, <b>espera</b>… Els ocells <b>volen</b> i <b>canten</b>. Totes aquestes paraules diuen accions: són <mark>verbs</mark>.",
  },
  bloques: [
    {
      html: `<h3>Paraules d'acció</h3><p>Els <mark>verbs</mark> són les paraules que diuen <b>el que es fa</b>.</p><p>El nen <b>salta</b>. El gos <b>borda</b>. La nena <b>llegeix</b>. L'ocell <b>vola</b>.</p><p>Si pots fer el gest amb el cos, segurament és un verb! Prova-ho: corre, salta, aplaudeix, dorm.</p>`,
      svg: dibujos("Un nen salta, un gos borda, una nena llegeix i un ocell vola", [["nino", "salta", R], ["perro", "borda", A], ["libro", "llegeix", Ve], ["pajaro", "vola", N]], { titulo: "Què fan?", nota: "salta · borda · llegeix · vola" }),
      video: V("cverV", "verbs per a nens"),
    },
    {
      html: `<h3>Verbs de cada dia</h3><p>Des que et lleves fas moltes <mark>accions</mark>.</p><p>Et <b>despertes</b>, et <b>rentes</b>, et <b>vesteixes</b> i <b>esmorzes</b>. A l'escola <b>escrius</b>, <b>comptes</b> i <b>jugues</b>.</p><p>A la nit <b>sopes</b>, et <b>dutxes</b> i <b>dorms</b>. Cada cosa que fas és un verb!</p>`,
      svg: lista("Al matí em desperto i esmorzo; a l'escola escric i jugo; a la nit sopo i dormo", [["Em desperto i esmorzo", M], ["Escric i jugo", A], ["Sopo i em dutxo", Ve], ["Dormo", N]], { titulo: "El meu dia en verbs", marca: "n" }),
    },
    {
      html: `<h3>El verb a la frase</h3><p>Gairebé a totes les frases hi ha un <mark>verb</mark>. Per trobar-lo, pregunta: <b>què fa?</b></p><p>«El meu avi <b>rega</b> les plantes.» Què fa el meu avi? Rega.</p><p>«Les nenes <b>canten</b> una cançó.» Què fan les nenes? Canten. El verb és el cor de la frase.</p>`,
      svg: frase("El meu avi rega les plantes: rega és el verb", [["El meu avi", A], ["rega", R], ["/"], ["les plantes", A]], { titulo: "Pregunta: què fa?", nota: "El verb, en vermell", fs: 26 }),
    },
    {
      html: `<h3>El nom del verb</h3><p>Cada verb té un <mark>nom</mark>, com un cognom. Es diu <b>infinitiu</b>.</p><p>Els infinitius acaben en <b>-ar</b>, <b>-er</b>, <b>-re</b> o <b>-ir</b>: <i>salt<b>ar</b></i>, <i>tém<b>er</b></i>, <i>beu<b>re</b></i>, <i>dorm<b>ir</b></i>.</p><p>«Salta», «saltem» i «va saltar» són del verb <b>saltar</b>. És la forma que busquem al diccionari.</p>`,
      svg: parejas("Salta és de saltar; beu és de beure; dorm és de dormir", [[null, "salta", null, "saltar"], [null, "beu", null, "beure"], [null, "dorm", null, "dormir"]], { izq: "a la frase", der: "infinitiu", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Qui ho fa?</h3><p>El verb canvia segons <mark>qui fa l'acció</mark>.</p><p><i>Jo <b>canto</b>. Tu <b>cantes</b>. Ella <b>canta</b>.</i></p><p><i>Nosaltres <b>cantem</b>. Vosaltres <b>canteu</b>. Ells <b>canten</b>.</i></p><p>El final del verb ens dona una pista: «cantem» ens diu que som nosaltres. El verb es posa el vestit de cada persona!</p>`,
      svg: lista("Jo canto, tu cantes, nosaltres cantem, ells canten", [["jo canto · tu cantes", A], ["ell o ella canta", Ve], ["nosaltres cantem", N], ["ells canten", R]], { titulo: "El verb cantar", marca: "♪" }),
    },
    {
      html: `<h3>Ahir, avui i demà</h3><p>El verb també diu <mark>quan</mark> passa l'acció.</p><p><b>Passat</b> (ja ha passat): <i>Ahir <b>vaig jugar</b> a futbol.</i></p><p><b>Present</b> (passa ara): <i>Avui <b>jugo</b> a futbol.</i></p><p><b>Futur</b> (passarà): <i>Demà <b>jugaré</b> a futbol.</i> Les paraules <i>ahir</i>, <i>avui</i> i <i>demà</i> t'ajuden a saber-ho.</p>`,
      svg: lista("Passat: ahir vaig jugar; present: avui jugo; futur: demà jugaré", [["Ahir vaig jugar: passat", N], ["Avui jugo: present", Ve], ["Demà jugaré: futur", R]], { titulo: "Quan?", marca: "n" }),
    },
    {
      html: `<h3>Verbs per parlar i sentir</h3><p>No tots els verbs són de moure's. Hi ha verbs de <mark>parlar</mark>: <i>dir</i>, <i>preguntar</i>, <i>explicar</i>, <i>cridar</i>.</p><p>I verbs de <mark>pensar i sentir</mark>: <i>pensar</i>, <i>estimar</i>, <i>recordar</i>, <i>somiar</i>.</p><p>«La Laia <b>pensa</b> en la seva àvia i l'<b>estima</b> molt.» També són accions, encara que no es vegin.</p>`,
      svg: dibujos("Verbs de parlar, pensar i sentir: pregunta, pensa, estima", [["interrogacion", "pregunta", A], ["nina", "pensa", Ve], ["corazon", "estima", R]], { titulo: "Accions que no es veuen", nota: "dir · pensar · estimar · somiar" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Sense verbs <mark>no podem explicar el que passa</mark>. «El gos… la pilota» no diu res.</p><p>Amb un verb, tot pren vida: «El gos <b>mossega</b> la pilota». «El gos <b>porta</b> la pilota».</p><p>Quan expliques què vas fer el cap de setmana, fas servir verbs en passat: «<b>vaig anar</b> al parc», «<b>vaig menjar</b> un gelat».</p>`,
      svg: charla("Una nena explica què va fer: vaig anar al parc i vaig menjar un gelat", [["nina", "Vaig anar al parc!", R], ["nino", "I què vas fer?", A], ["nina", "Vaig menjar un gelat.", R], ["nino", "Que bé!", A]]),
    },
    {
      html: `<h3>Joc de mímica</h3><p>Escriviu verbs en paperets: <i>nedar</i>, <i>dormir</i>, <i>escombrar</i>, <i>pintar</i>, <i>plorar</i>…</p><p>Un jugador treu un paper i fa la <mark>mímica</mark> sense parlar. Els altres endevinen el verb.</p><p>Qui l'encerta el diu en una frase: «Estàs <b>nedant</b>!». Després li toca a ell fer la mímica.</p>`,
      svg: dibujos("Mímica de verbs: nedar, dormir, menjar i pintar", [["pez", "nedar", N], ["cama", "dormir", A], ["cuchara", "menjar", Ve], ["lapiz", "pintar", R]], { titulo: "Quin verb és?", nota: "Fes el gest sense parlar" }),
    },
  ],
  figura: {
    titulo: "El verb",
    svg: mural("El verb diu accions; el seu nom acaba en ar, er, re, ir; canvia segons qui i quan", [["nino", "salta", "acció: què fa?", R], [null, "-ar -er -re -ir", "infinitiu: saltar", A], ["nina", "jo · tu · ella", "qui ho fa?", Ve], ["reloj", "ahir · avui · demà", "quan?", N]], "El verb és el cor de la frase"),
  },
  video: V("cverV", "verbs per a nens"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Busca el verb: «El gat beu llet».",
      pasos: ["Pregunta: què fa el gat?", "Beu.", "El seu infinitiu és beure."],
      resultado: "el verb és «beu» (beure)." },
    { enunciado: "Quan passa? «Demà anirem a la platja».",
      pasos: ["Busca la pista: demà.", "L'acció encara no ha passat.", "anirem és futur."],
      resultado: "en el futur." },
    { enunciado: "Completa amb el verb ballar: «Nosaltres …».",
      pasos: ["Qui: nosaltres.", "El final per a nosaltres és -em.", "ball + em."],
      resultado: "Nosaltres ballem." },
  ],
  errores: [
    "Confondre el verb amb el nom: a «el ball», ball és un nom; a «la Laia balla», balla és verb.",
    "Oblidar que els verbs de pensar i sentir també són verbs: estimo, penso.",
    "Barrejar temps: «Ahir jugo» està malament; és «Ahir vaig jugar».",
    "No fer coincidir el verb amb qui ho fa: «nosaltres canta» està malament.",
  ],
  ejercicios: [
    { q: "Digues tres verbs que fas a l'esbarjo.", sol: "Per exemple: corro, salto, jugo." },
    { q: "Busca el verb: «El nadó plora».", sol: "plora (plorar)." },
    { q: "Quin és l'infinitiu de «mengem»?", sol: "menjar." },
    { q: "Acaba en -ar, -er, -re o -ir? «viure».", sol: "En -re." },
    { q: "Completa: «Tu … (saltar)».", sol: "saltes." },
    { q: "Passat, present o futur? «Ahir va ploure».", sol: "Passat." },
    { q: "Passat, present o futur? «Demà veuré l'àvia».", sol: "Futur." },
    { q: "Posa en passat: «Avui jugo».", sol: "Ahir vaig jugar." },
    { q: "Escriu una frase amb el verb «nedar».", sol: "Per exemple: Els peixos neden al mar." },
    { q: "Fes la mímica del verb «escombrar».", sol: "Moure els braços com amb una escombra." },
  ],
  quiz: [
    { q: "El verb diu…", o: ["accions", "colors", "noms"], a: 0, e: "El que es fa." },
    { q: "Quin és un verb?", o: ["pilota", "córrer", "vermell"], a: 1, e: "córrer." },
    { q: "Verb a «La nena llegeix un llibre»:", o: ["nena", "llegeix", "llibre"], a: 1, e: "Què fa? Llegeix." },
    { q: "Infinitiu de «canta»:", o: ["cançó", "cantar", "cantant"], a: 1, e: "cantar." },
    { q: "«Ahir vaig menjar» és…", o: ["passat", "present", "futur"], a: 0, e: "Ja ha passat." },
    { q: "«Demà viatjaré» és…", o: ["passat", "present", "futur"], a: 2, e: "Passarà." },
    { q: "Completa: «Nosaltres …»", o: ["corre", "correm", "corro"], a: 1, e: "correm." },
    { q: "Quina pregunta troba el verb?", o: ["què fa?", "com és?", "quants?"], a: 0, e: "Què fa?" },
    { q: "Quin és un verb de sentir?", o: ["estimar", "taula", "blau"], a: 0, e: "estimar." },
    { q: "Infinitiu de «beu»:", o: ["beure", "begut", "beguda"], a: 0, e: "beure." },
  ],
  examen: [
    { q: "Verb a «Els ocells volen alt»:", o: ["ocells", "volen", "alt"], a: 1, e: "volen." },
    { q: "Infinitiu de «escrivim»:", o: ["escriure", "escriptor", "escrit"], a: 0, e: "escriure." },
    { q: "«Avui jugo» és…", o: ["passat", "present", "futur"], a: 1, e: "Ara." },
    { q: "Completa: «Jo … (ballar)»", o: ["ballo", "balla", "ballen"], a: 0, e: "ballo." },
  ],
  feynman: ["Què és un verb i com es troba", "Què és l'infinitiu", "Com sabem si una acció és passada, present o futura"],
  mapa: mapa("EL VERB", "var(--pri)", [
    ["Què és", "diu accions: salta, llegeix", R],
    ["Infinitiu", "-ar, -er, -re, -ir", A],
    ["Qui?", "jo canto, ells canten", Ve],
    ["Quan?", "vaig jugar · jugo · jugaré", N],
  ], 240),
  tarjetas: [
    ["Què és un verb?", "Una paraula que diu una acció"],
    ["Pregunta per trobar-lo", "Què fa?"],
    ["Acabaments de l'infinitiu", "-ar, -er, -re, -ir"],
    ["Infinitiu de «corre»", "córrer"],
    ["«Ahir vaig saltar» és…", "passat"],
    ["«Avui salto» és…", "present"],
    ["«Demà saltaré» és…", "futur"],
    ["«Nosaltres … (cantar)»", "cantem"],
  ],
  familias: [
    "Jugueu a la mímica de verbs després de sopar.",
    "Abans de dormir, que expliqui tres coses que ha fet avui (verbs en passat).",
    "Planegeu el cap de setmana amb verbs en futur: anirem, veurem, menjarem.",
    "Llegiu un conte i busqueu què fa cada personatge.",
  ],
  profesores: PROFCA("Reflexió sobre la llengua: el verb com a paraula que expressa accions, l'infinitiu, la concordança amb la persona i la noció de passat, present i futur", ["Mímica de verbs per equips.", "Línia del temps amb ahir, avui i demà.", "Diari de classe amb verbs en passat."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Fer servir verbs de moviment i d'esport", "Reconèixer les tres famílies de verbs: -ar, -er/-re, -ir", "Distingir el passat, el present i el futur", "Escriure instruccions amb verbs"],
  lectura: { titulo: "La recepta del pa amb tomàquet", html: `<p>Diumenge al matí, l'avi Josep i la Mireia preparen l'esmorzar.</p><p>—Avui farem pa amb tomàquet —diu l'avi—. És el més bo del món!</p><p>Primer, la Mireia <b>renta</b> els tomàquets sota l'aixeta. L'avi <b>talla</b> el pa a llesques i les <b>torra</b> una mica.</p><p>Després, la Mireia <b>parteix</b> un tomàquet per la meitat i el <b>refrega</b> damunt del pa. El pa es <b>torna</b> vermell i sucós.</p><p>—Ara, un raig d'oli —diu l'avi. La Mireia <b>tira</b> l'oli amb compte.</p><p>—I una mica de sal! —La Mireia l'<b>escampa</b> amb els dits.</p><p>Tota la família <b>seu</b> a taula. La mare <b>tasta</b> el pa i <b>somriu</b>.</p><p>—Mmm! Boníssim!</p><p>—L'ha fet la Mireia —diu l'avi, orgullós.</p><p>—Demà en <b>farem</b> més? —pregunta la Mireia.</p><p>—Demà farem truita de patates! —respon l'avi.</p>` },
  tras: {
    "Verbs de cada dia": [
      ["Verbs de moviment i d'esport", `<p>Molts verbs expliquen com ens <mark>movem</mark>:</p><ul><li><b>caminar</b>, <b>córrer</b>, <b>saltar</b>, <b>ballar</b></li><li><b>nedar</b>, <b>pujar</b>, <b>baixar</b>, <b>girar</b></li><li><b>enfilar-se</b>, <b>ajupir-se</b>, <b>rodolar</b>, <b>lliscar</b></li></ul><p>I altres verbs són d'<mark>esport</mark>:</p><ul><li><b>xutar</b> la pilota, <b>marcar</b> un gol</li><li><b>llançar</b>, <b>atrapar</b>, <b>botar</b></li><li><b>pedalar</b> amb la bicicleta</li><li><b>patinar</b>, <b>esquiar</b></li></ul><p>Amb aquests verbs podem explicar un partit: «En Joan <b>corre</b>, <b>bota</b> la pilota, la <b>llança</b>… i <b>marca</b>!»</p><p>Fixa't que alguns verbs porten <b>-se</b>: enfilar-se, ajupir-se, banyar-se. Vol dir que l'acció la fem a nosaltres mateixos.</p><p>El verb és la paraula més important de la frase, perquè ens explica què passa. Sense verb, la frase queda coixa: «En Joan… la pilota.» Què fa en Joan? La xuta? L'atrapa? La llança?</p><p><b>Activitat</b>: jugueu a «Simon diu»: «Simon diu: salteu! Simon diu: gireu!».</p>`,
        H6.dos("Verbs", ["MOVIMENT", ["córrer", "saltar", "nedar"], cAZ], ["ESPORT", ["xutar", "llançar", "patinar"], cVE])],
    ],
    "El nom del verb": [
      ["Tres famílies de verbs", `<p>El nom del verb (l'<mark>infinitiu</mark>) pot acabar de maneres diferents. Així fem tres famílies:</p><ul><li><b>1a família: -ar</b>. cantar, saltar, jugar, ballar, mirar. És la més gran!</li><li><b>2a família: -er o -re</b>. córrer, conèixer, beure, viure, escriure, fer.</li><li><b>3a família: -ir</b>. dormir, sortir, obrir, llegir, servir.</li></ul><p>Per saber de quina família és un verb, el posem en infinitiu i mirem com acaba:</p><ul><li>«ell <i>canta</i>» → can<b>tar</b> → 1a família.</li><li>«ella <i>beu</i>» → beu<b>re</b> → 2a família.</li><li>«ells <i>dormen</i>» → dor<b>mir</b> → 3a família.</li></ul><p>Al diccionari els verbs apareixen sempre en infinitiu.</p><p>Alguns verbs molt importants són una mica especials i canvien molt: <i>ser</i> (jo soc, tu ets, ell és), <i>anar</i> (jo vaig, tu vas) i <i>fer</i> (jo faig, tu fas). Els aprendrem a poc a poc!</p><p><b>Activitat</b>: fes tres caixes (-ar, -er/-re, -ir) i classifica deu verbs.</p>`,
        L6.filas("Famílies", [["1a", "-ar: cantar", cAZ], ["2a", "-er / -re: beure", cRO], ["3a", "-ir: dormir", cVE], ["diccionari", "infinitiu", cNA]])],
    ],
    "Ahir, avui i demà": [
      ["Passat, present i futur", `<p>El verb ens diu <mark>quan</mark> passa l'acció:</p><ul><li><b>Passat</b> (ja ha passat): «Ahir <b>vaig jugar</b> al parc.» «La setmana passada <b>vam anar</b> d'excursió.»</li><li><b>Present</b> (passa ara): «Avui <b>jugo</b> al parc.» «Ara <b>llegeixo</b> un conte.»</li><li><b>Futur</b> (passarà): «Demà <b>jugaré</b> al parc.» «L'estiu que ve <b>anirem</b> a la platja.»</li></ul><p>Les paraules <b>ahir</b>, <b>avui</b>, <b>demà</b>, <b>ara</b>, <b>abans</b> i <b>després</b> ens ajuden a saber el temps.</p><p>En català, molt sovint el passat es fa amb <b>vaig</b>, <b>vas</b>, <b>va</b>, <b>vam</b>, <b>vau</b>, <b>van</b> + infinitiu: <i>vaig menjar</i>, <i>va ploure</i>, <i>van cantar</i>.</p><p>Quan expliquem una història, normalment fem servir el passat: «Un dia, la princesa <b>va sortir</b> del castell i <b>va trobar</b> un drac.»</p><p><b>Activitat</b>: explica una cosa que vas fer ahir, una que fas avui i una que faràs demà.</p>`,
        H6.flujo("Temps", ["ahir|vaig jugar", "avui|jugo", "demà|jugaré", "vaig|+ infinitiu"], cMO),
        ["4atoVE3t-yo", "Dàmaris Gelabert - Els dies de la setmana", "Dàmaris Gelabert", 231533629]],
    ],
    "Per a què serveix?": [
      ["Verbs per donar instruccions", `<p>Les <mark>receptes</mark>, les instruccions dels jocs o les normes de classe fan servir molts verbs que diuen què hem de fer:</p><ul><li><b>Renta</b> les mans.</li><li><b>Talla</b> el pa.</li><li><b>Barreja</b> la farina i els ous.</li><li><b>Posa</b> la massa al forn.</li><li><b>Espera</b> deu minuts.</li></ul><p>Per fer unes bones instruccions:</p><ul><li>Escrivim els passos <b>en ordre</b>: primer, després, finalment.</li><li>Comencem cada pas amb un <b>verb</b>.</li><li>Fem frases <b>curtes</b> i clares.</li><li>Posem números o dibuixos.</li></ul><p>Altres verbs de cuina: <b>bullir</b>, <b>fregir</b>, <b>pelar</b>, <b>remenar</b>, <b>tastar</b>, <b>untar</b>.</p><p>Les instruccions també es fan servir per muntar joguines, plantar llavors o jugar a un joc de taula. Si estan ben escrites, tothom les pot seguir!</p><p><b>Activitat</b>: escriu les instruccions per rentar-se les dents en cinc passos.</p>`,
        H6.rueda("Cuina", "RECEPTA", [["rentar", cAZ], ["tallar", cRO], ["barrejar", cNA], ["tastar", cVE]])],
    ],
  },
  final: [
    ["Verbs que s'assemblen", `<p>Hi ha verbs que volen dir gairebé el <mark>mateix</mark>. Són sinònims:</p><ul><li><b>parlar</b>, <b>dir</b>, <b>explicar</b>, <b>xerrar</b></li><li><b>mirar</b>, <b>veure</b>, <b>observar</b></li><li><b>caminar</b>, <b>passejar</b>, <b>anar</b></li><li><b>començar</b>, <b>iniciar</b></li></ul><p>I verbs que volen dir el <mark>contrari</mark>:</p><ul><li><b>obrir</b> ↔ <b>tancar</b></li><li><b>pujar</b> ↔ <b>baixar</b></li><li><b>entrar</b> ↔ <b>sortir</b></li><li><b>riure</b> ↔ <b>plorar</b></li><li><b>donar</b> ↔ <b>rebre</b></li><li><b>encendre</b> ↔ <b>apagar</b></li></ul><p>Quan escrivim, canviar un verb per un sinònim ens ajuda a no repetir: «La Mireia <i>diu</i>… L'avi <i>explica</i>… La mare <i>pregunta</i>…»</p><p><b>Activitat</b>: juga amb un company: tu fas un verb amb mímica i ell fa el contrari.</p>`,
      L6.filas("Contraris", [["obrir", "tancar", cAZ], ["pujar", "baixar", cVE], ["entrar", "sortir", cNA], ["riure", "plorar", cRO]])],
    ["Repàs: la recepta del pa amb tomàquet", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>Verbs de cuina: <b>rentar</b>, <b>tallar</b>, <b>torrar</b>, <b>partir</b>, <b>refregar</b>, <b>tirar</b>, <b>escampar</b>, <b>tastar</b>.</li><li>1a família (-ar): rentar, tallar, torrar, tastar.</li><li>2a família (-re): somriure. 3a família (-ir): partir.</li><li>Present: «la Mireia <b>renta</b>», «l'avi <b>talla</b>».</li><li>Futur: «Demà en <b>farem</b> més?», «Demà <b>farem</b> truita».</li></ul><p>El pa amb tomàquet és un plat típic de la cuina catalana. Només cal pa, tomàquet, oli i sal!</p><p><b>Activitat</b>: escriu la recepta del pa amb tomàquet en cinc passos, començant cada pas amb un verb.</p>`,
      H6.flujo("Recepta", ["torra|el pa", "refrega|tomàquet", "tira|oli", "escampa|sal"], cRO)],
  ],
  ejemplos: [
    ["De quina família és «escriure»?", ["Acaba en -re."], "De la 2a família."],
    ["Posa en passat: «Avui jugo a pilota».", ["Ahir + vaig + infinitiu."], "Ahir vaig jugar a pilota."],
  ],
  errores: ["Confondre l'infinitiu amb la forma conjugada: buscar «canto» al diccionari.", "Barrejar temps: «Ahir jugaré»."],
  ejercicios: [
    ["b", "Digues tres verbs de moviment.", "Córrer, saltar, nedar."],
    ["b", "Infinitiu de «canta».", "Cantar."],
    ["b", "Contrari d'«obrir».", "Tancar."],
    ["b", "«Demà aniré a la platja» és passat, present o futur?", "Futur."],
    ["b", "Digues un verb de cuina.", "Tallar, rentar, bullir…"],
    ["m", "Classifica: dormir, ballar, beure.", "Ballar 1a, beure 2a, dormir 3a."],
    ["m", "Posa en futur: «Avui llegeixo».", "Demà llegiré."],
    ["m", "Posa en passat: «Avui menjo poma».", "Ahir vaig menjar poma."],
    ["m", "Digues un sinònim de «mirar».", "Veure, observar."],
    ["m", "Ordena: posa al forn, barreja, espera.", "Barreja, posa al forn, espera."],
    ["a", "A la lectura, què fa la Mireia amb el tomàquet?", "El parteix i el refrega damunt del pa."],
    ["a", "Copia una frase en futur de la lectura.", "Demà farem truita de patates."],
    ["a", "Escriu les instruccions per fer un entrepà.", "Resposta oberta."],
    ["a", "Explica un partit amb cinc verbs d'esport.", "Resposta oberta."],
  ],
  quiz: [
    ["És un verb d'esport…", ["xutar", "dormir", "llegir"], "Esport."],
    ["«Llegir» és de la…", ["3a família", "1a família", "2a família"], "Famílies."],
    ["«Vaig jugar» és…", ["passat", "present", "futur"], "Temps."],
    ["Les receptes comencen amb un…", ["verb", "nom propi", "article"], "Instruccions."],
    ["Contrari de «pujar»:", ["baixar", "córrer", "saltar"], "Contraris."],
  ],
  examen: [
    ["A la lectura, què preparen?", ["pa amb tomàquet", "truita", "pastís"], "Lectura."],
    ["Què faran demà?", ["truita de patates", "pa amb tomàquet", "amanida"], "Repàs."],
  ],
  tarjetas: [
    ["Famílies", "-ar (cantar), -er/-re (córrer, beure), -ir (dormir)."],
    ["Temps", "Ahir vaig jugar; avui jugo; demà jugaré."],
  ],
  glosario: [
    ["Infinitiu", "Nom del verb: cantar, beure, dormir."],
    ["Família de verbs", "Grup de verbs que acaben igual."],
    ["Passat", "El que ja ha passat."],
    ["Present", "El que passa ara."],
    ["Futur", "El que passarà."],
    ["Instruccions", "Passos per fer una cosa."],
    ["Recepta", "Instruccions per cuinar un plat."],
    ["Refregar", "Fregar una cosa contra una altra."],
    ["Xutar", "Donar un cop de peu a la pilota."],
    ["Sinònim", "Paraula que vol dir el mateix."],
  ],
  situacion: {
    titulo: "El nostre receptari",
    reto: "La classe fa un receptari amb receptes senzilles de les famílies, escrites com a instruccions amb verbs.",
    pasos: ["Demanar a casa una recepta fàcil.", "Escriure els ingredients i els passos en ordre.", "Començar cada pas amb un verb i revisar el temps.", "Il·lustrar les receptes i fer-ne un llibre."],
    producto: "Un receptari de la classe.",
    evaluacion: ["Fa servir verbs de moviment i cuina.", "Classifica verbs per famílies.", "Distingeix passat, present i futur.", "Escriu instruccions clares."],
  },
});
