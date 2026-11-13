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
      video: V("cverB"),
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
