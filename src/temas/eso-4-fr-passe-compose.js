// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Le présent et le passé composé",
  minutos: 40,
  objetivos: ["Conjugar en presente los verbos en -er, -ir y los irregulares más usados", "Formar el passé composé con avoir y con être", "Hacer la concordancia del participio con être"],
  claves: ["présent", "verbes en -er", "passé composé", "auxiliaire", "participe passé", "accord", "la maison d'être"],
  pregunta: {
    texto: "«J'ai mangé» y «Je suis allé». Los dos están en pasado. ¿Por qué uno usa «ai» (tengo) y el otro «suis» (soy)?",
    respuesta: "Porque el <b>passé composé</b> tiene <mark>dos auxiliares</mark>. Casi todos los verbos usan <b>avoir</b>, pero un grupo de verbos de movimiento y cambio de estado (aller, venir, partir, naître…) y todos los pronominales usan <b>être</b>. Con être, además, el participio concuerda: «Elle est allé<b>e</b>».",
  },
  bloques: [
    {
      html: `<h3>El presente de los verbos en -er</h3><p>Son el 90 % de los verbos. Se quita <i>-er</i> y se añade: <mark>-e, -es, -e, -ons, -ez, -ent</mark>. Ojo: -e, -es, -e y -ent <b>no se pronuncian</b>: <i>je parle, tu parles, il parle, ils parlent</i> suenan igual.</p>`,
      svg: L.tabla("Presente del verbo parler", ["Pronom", "parler"], [
        ["je", "parle"], ["tu", "parles"], ["nous", "parlons"], ["ils", "parlent"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Irregulares imprescindibles</h3><p>Además de être y avoir: <b>aller</b> (je vais, nous allons, ils vont), <b>faire</b> (je fais, nous faisons, ils font), <b>prendre</b> (je prends, nous prenons, ils prennent), <b>venir</b> (je viens, ils viennent), <b>pouvoir</b> (je peux) y <b>vouloir</b> (je veux).</p>`,
      svg: L.tabla("Verbos irregulares en presente", ["", "je", "ils"], [
        ["aller", "vais", "vont"], ["faire", "fais", "font"], ["prendre", "prends", "prennent"], ["venir", "viens", "viennent"],
      ], "var(--red)"),
    },
    {
      html: `<h3>El passé composé con avoir</h3><p><b>avoir en presente + participio</b>. Expresa acciones <mark>terminadas</mark> en el pasado: «Hier, j'<b>ai regardé</b> un film». Participios: -er → <b>-é</b> (mangé), -ir → <b>-i</b> (fini). Irregulares: fait, pris, eu, été, vu, dit, écrit, bu, lu.</p>`,
      svg: L.frase("Passé composé con avoir: Hier, j'ai regardé un film", [
        ["Hier,", "", "var(--line)"], ["j'ai", "avoir", "var(--pen)"], ["regardé", "participe", "var(--red)"], ["un film.", "", "var(--line)"],
      ], "avoir + participe passé"),
    },
    {
      html: `<h3>El passé composé con être</h3><p>Lo llevan unos 15 verbos de <b>movimiento o cambio</b> y todos los pronominales (<i>je me suis levé</i>). Un truco es la «<mark>maison d'être</mark>»: aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir, passer, retourner (y sus derivados como revenir, devenir).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La casa de être: verbos de movimiento alrededor de una casa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M70 80 L 130 30 L 190 80 V 150 H 70 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        <rect x="116" y="110" width="28" height="40" fill="var(--pen)" opacity=".8"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle">
          <text x="130" y="72" fill="var(--pen)">ÊTRE</text>
          <text x="130" y="96" fill="var(--ink)" font-size="11">rester</text>
          <text x="40" y="96" fill="var(--leaf)">entrer</text><text x="222" y="96" fill="var(--red)">sortir</text>
          <text x="40" y="128" fill="var(--leaf)">arriver</text><text x="222" y="128" fill="var(--red)">partir</text>
          <text x="40" y="44" fill="var(--inf)">monter</text><text x="222" y="44" fill="var(--inf)">descendre</text>
          <text x="40" y="168" fill="var(--muted)">naître</text><text x="222" y="168" fill="var(--muted)">mourir</text>
          <text x="130" y="170" fill="var(--ink)">aller · venir · tomber</text>
        </g></svg>`,
    },
    {
      html: `<h3>La concordancia con être</h3><p>Con <b>être</b>, el participio <mark>concuerda con el sujeto</mark> como un adjetivo: + <b>e</b> en femenino, + <b>s</b> en plural. «Il est parti» / «Elle est parti<b>e</b>» / «Ils sont parti<b>s</b>» / «Elles sont parti<b>es</b>». Con avoir, en general, no concuerda.</p>`,
      svg: L.filas("Concordancia del participio con être", [
        ["il", "est parti", "var(--pen)"], ["elle", "est partie", "var(--red)"],
        ["ils", "sont partis", "var(--leaf)"], ["elles", "sont parties", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Avoir o être?",
    svg: L.columnas("Elegir el auxiliar del passé composé", [
      ["casi todos los verbos", "AVOIR", ["j'ai mangé", "nous avons fini"], "var(--pen)"],
      ["movimiento · cambio", "ÊTRE", ["je suis allé(e)", "elle est née"], "var(--red)"],
      ["verbos pronominales", "ÊTRE", ["je me suis levé(e)", "ils se sont lavés"], "var(--leaf)"],
    ]),
  },
  video: { id: "3ut4sE0GQKQ", titulo: "El passé composé en francés: ¡no te compliques!", canal: "ProfeOriZulu", vistas: 645203, megusta: 26939, busqueda: "passé composé francés explicación" },
  quiz: [
    { q: "«Nous ___ (parler) français.»", o: ["parlons", "parlez", "parlent"], a: 0, e: "Nous → -ons." },
    { q: "«Ils ___ (aller) au cinéma.»", o: ["allent", "vont", "vais"], a: 1, e: "Aller es irregular: ils vont." },
    { q: "Passé composé de «manger» con je:", o: ["je suis mangé", "j'ai mangé", "j'ai manger"], a: 1, e: "Avoir + participio en -é." },
    { q: "«Elle ___ arrivée hier.»", o: ["a", "est", "ai"], a: 1, e: "Arriver usa être." },
    { q: "«Elles sont ___.» (partir)", o: ["parti", "partie", "parties"], a: 2, e: "Con être, concordancia femenino plural: -es." },
  ],
  examen: [
    { q: "Participio de «faire»:", o: ["faité", "fait", "fais"], a: 1, e: "Irregular: fait." },
    { q: "«Je me ___ levée à sept heures.»", o: ["suis", "ai", "est"], a: 0, e: "Los pronominales usan être." },
    { q: "¿Qué verbo NO usa être?", o: ["venir", "tomber", "regarder"], a: 2, e: "Regarder usa avoir: j'ai regardé." },
  ],
  feynman: ["Las terminaciones del presente de los verbos en -er", "Cinco irregulares en presente", "Cómo se forma el passé composé con avoir", "Qué verbos usan être y cuándo concuerda el participio"],
  mapa: mapa("PASSÉ COMPOSÉ", "var(--eso)", [
    ["Présent -er", "-e -es -e -ons -ez -ent", "var(--pen)"],
    ["Avoir +", "participe: mangé, fini", "var(--leaf)"],
    ["Être +", "aller, venir, partir…", "var(--red)"],
    ["Accord", "elle est partie", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Terminaciones del presente en -er", "-e, -es, -e, -ons, -ez, -ent."],
    ["Passé composé", "Auxiliar (avoir o être) en presente + participio pasado."],
    ["Participios irregulares", "fait, pris, eu, été, vu, dit, écrit, bu, lu."],
    ["Verbos con être", "Movimiento y cambio (aller, venir, partir, naître…) y pronominales."],
    ["Concordancia con être", "El participio concuerda con el sujeto: elle est partie, ils sont partis."],
  ],
  familias: ["Pedidle que os cuente en francés tres cosas que hizo el fin de semana.", "Dibujad juntos la «maison d'être» y pegadla en su habitación.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: presente de indicativo y passé composé; elección del auxiliar y concordancia (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2 del MCER).",
    ideas: ["Diario de las vacaciones en passé composé.", "Juego de mímica con verbos de la maison d'être.", "Corregir textos con errores de auxiliar y concordancia."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français: le passé composé", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Conjugar los verbos en -ir y -re y los cambios ortográficos de -er", "Memorizar los participios irregulares", "Colocar la negación y los adverbios en el passé composé"],
  bloques: [
    { tras: "El presente de los verbos en -er", html: `<h3>Verbos en -er con cambios ortográficos</h3><p>Algunos verbos en -er son regulares en las terminaciones, pero cambian la escritura para conservar el sonido:</p>${L.tb(["Tipo", "Cambio", "Ejemplo"], [["-ger", "nous + e", "manger → nous mang<b>e</b>ons"], ["-cer", "nous: c → ç", "commencer → nous commen<b>ç</b>ons"], ["-eler / -eter", "doblan la consonante (salvo nous, vous)", "s'appeler → je m'appe<b>ll</b>e, jeter → je je<b>tt</b>e"], ["e + consonante + er", "e → è (salvo nous, vous)", "acheter → j'ach<b>è</b>te, se lever → je me l<b>è</b>ve"], ["é + consonante + er", "é → è (salvo nous, vous)", "préférer → je préf<b>è</b>re"], ["-yer", "y → i (salvo nous, vous)", "payer → je pa<b>i</b>e, envoyer → j'envo<b>i</b>e"]])}<p>Recuerda que las formas <i>nous</i> y <i>vous</i> casi nunca cambian, porque en ellas la sílaba que se acentúa es la terminación y no la raíz. Esto ayuda a pronunciar bien y a no equivocarse por escrito.</p>` },
    { tras: "Irregulares imprescindibles", html: `<h3>Verbos en -ir y en -re</h3><p>Los verbos regulares en <b>-ir</b> (como <i>finir, choisir, réussir</i>) añaden <b>-iss-</b> en el plural: je fin<b>is</b>, tu fin<b>is</b>, il fin<b>it</b>, nous fin<b>issons</b>, vous fin<b>issez</b>, ils fin<b>issent</b>. Otros en -ir no siguen este modelo y funcionan con dos raíces: <i>partir</i> (je pars, nous partons), <i>sortir</i> (je sors), <i>dormir</i> (je dors).</p><p>Los verbos en <b>-re</b> regulares (<i>attendre, vendre, répondre, entendre</i>) toman -s, -s, nada, -ons, -ez, -ent: j'attends, tu attends, il attend, nous attendons, vous attendez, ils attendent. Y no olvides los irregulares muy frecuentes <b>pouvoir</b> (je peux), <b>vouloir</b> (je veux), <b>devoir</b> (je dois), <b>savoir</b> (je sais) y <b>mettre</b> (je mets).</p>` },
    { tras: "El passé composé con avoir", html: `<h3>Participios irregulares</h3><p>Los participios irregulares más usados se agrupan por su terminación:</p>${L.tb(["Terminación", "Verbos"], [["-u", "avoir → eu, boire → bu, lire → lu, voir → vu, pouvoir → pu, vouloir → voulu, devoir → dû, savoir → su, venir → venu"], ["-is", "prendre → pris, mettre → mis, apprendre → appris, comprendre → compris"], ["-it", "dire → dit, écrire → écrit, faire → fait, conduire → conduit"], ["-ert", "ouvrir → ouvert, offrir → offert, découvrir → découvert"], ["otros", "être → été, naître → né, mourir → mort"]])}<p>Fíjate en que <i>avoir</i> y <i>être</i> forman su passé composé con <b>avoir</b>: «J'<b>ai eu</b> peur», «J'<b>ai été</b> malade».</p>` },
    { tras: "La concordancia con être", html: `<h3>Negación y adverbios en el passé composé</h3><p>En los tiempos compuestos, la negación rodea al <b>auxiliar</b>, no al participio: «Je <b>n'</b>ai <b>pas</b> mangé», «Elle <b>n'</b>est <b>pas</b> venue», «Nous <b>ne</b> sommes <b>jamais</b> allés à Rome». Con los pronominales, el <i>ne</i> va antes del pronombre: «Je <b>ne</b> me suis <b>pas</b> levé tôt».</p><p>Los adverbios cortos (<i>bien, mal, déjà, encore, toujours, beaucoup, trop, vite</i>) se colocan entre el auxiliar y el participio: «J'ai <b>bien</b> dormi», «Tu as <b>déjà</b> fini ?», «Il a <b>beaucoup</b> travaillé». Los adverbios de tiempo concretos (<i>hier, ce matin, la semaine dernière</i>) van al principio o al final de la frase.</p>` },
    { tras: "La concordancia con être", html: `<h3>Verbos que llevan avoir o être</h3><p>Algunos verbos de la «maison d'être» (<i>monter, descendre, sortir, passer, rentrer, retourner</i>) pueden llevar también <b>avoir</b> cuando tienen complemento directo, y entonces cambian de significado:</p><ul><li>«Je <b>suis</b> sorti à huit heures» (salí) / «J'<b>ai</b> sorti la poubelle» (saqué la basura).</li><li>«Elle <b>est</b> montée au 3<sup>e</sup> étage» (subió) / «Elle <b>a</b> monté les valises» (subió las maletas).</li><li>«Nous <b>sommes</b> passés par Lyon» (pasamos por) / «Nous <b>avons</b> passé une semaine à Lyon» (pasamos una semana).</li></ul><p>Truco: si después del verbo hay un <mark>objeto directo</mark>, el auxiliar es avoir y no hay concordancia con el sujeto.</p>` },
  ],
  videos: [
    ["El passé composé con avoir", L.vid("DffQo6ThZQ4", "Passé composé: explicación sobre el pasado compuesto", "onparle", 400122)],
    ["El passé composé con être", L.vid("R7CMGVsanu8", "Être or avoir in the passé composé", "Learn French With Alexa", 585094)],
  ],
  ejemplos: [
    ["Pon en passé composé: «Le week-end, je vais à la plage, je lis un livre et je bois un jus.»", ["Aller es de la maison d'être: je suis allé(e).", "Lire y boire llevan avoir con participio irregular: j'ai lu, j'ai bu.", "Cambia «le week-end» por «le week-end dernier» para marcar el pasado."], "Le week-end dernier, je suis allé(e) à la plage, j'ai lu un livre et j'ai bu un jus."],
    ["Pon en negativa: «Elles se sont couchées tard.»", ["Es pronominal: auxiliar être y concordancia en femenino plural (-es).", "La negación rodea al bloque pronombre + auxiliar: ne se sont pas.", "El participio no cambia de lugar."], "Elles ne se sont pas couchées tard."],
    ["Elige el auxiliar: «Il (est / a) descendu les escaliers en courant.»", ["Descendre es verbo de movimiento de la maison d'être.", "Pero aquí tiene complemento directo: les escaliers.", "Con complemento directo se usa avoir y no hay concordancia."], "Il a descendu les escaliers en courant."],
  ],
  errores: [
    "Usar avoir con los verbos de la maison d'être: *j'ai allé → je suis allé.",
    "Olvidar la concordancia con être: *elle est parti → elle est partie.",
    "Colocar la negación alrededor del participio: *j'ai ne pas mangé → je n'ai pas mangé.",
    "Inventar participios regulares: *prendu, *faisé → pris, fait.",
    "Escribir *nous mangons: los verbos en -ger conservan la e: nous mangeons.",
    "Olvidar que avoir y être forman su passé composé con avoir: *je suis été → j'ai été.",
  ],
  ejercicios: [
    ["Conjuga en presente: nous (commencer), j' (acheter), ils (payer).", "nous commençons, j'achète, ils paient."],
    ["Conjuga finir en presente: je, nous, ils.", "je finis, nous finissons, ils finissent."],
    ["Escribe el participio de: voir, mettre, écrire, ouvrir, boire.", "vu, mis, écrit, ouvert, bu."],
    ["Pon en passé composé: «Nous faisons nos devoirs.»", "Nous avons fait nos devoirs."],
    ["Pon en passé composé: «Elle vient avec sa sœur.»", "Elle est venue avec sa sœur."],
    ["Pon en passé composé: «Ils se lèvent à 7 h.»", "Ils se sont levés à 7 h."],
    ["Pon en negativa: «J'ai compris la question.»", "Je n'ai pas compris la question."],
    ["Coloca el adverbio: «J'ai mangé (bien).»", "J'ai bien mangé."],
    ["Elige: «J'(ai / suis) sorti le chien.»", "J'ai sorti le chien: tiene complemento directo."],
    ["Escribe tres frases sobre lo que hiciste ayer.", "Por ejemplo: «Hier, je suis allé au lycée. J'ai déjeuné à la cantine. Le soir, j'ai regardé une série.»"],
  ],
  quiz: [
    ["Participio de «prendre»:", ["pris", "prendu", "prenu"], 0, "Grupo -is."],
    ["«Nous ___ (manger) à midi.»", ["mangeons", "mangons", "mangions"], 0, "-ger: nous + e."],
    ["«Je ___ pas allé au cinéma.»", ["ne suis", "suis ne", "n'ai"], 0, "Negación alrededor del auxiliar."],
    ["«Ils ___ (finir) à 5 h.»", ["finissent", "finent", "finissons"], 0, "-ir regular: -issent."],
    ["«Elle a ___ les valises.»", ["monté", "montée", "montés"], 0, "Con avoir no concuerda con el sujeto."],
  ],
  tarjetas: [
    ["Verbos -ir regulares", "finir: je finis, nous finissons, ils finissent."],
    ["Participios irregulares", "vu, lu, bu, pris, mis, dit, écrit, fait, ouvert, été, eu."],
    ["Negación en passé composé", "Ne + auxiliar + pas + participio: je n'ai pas vu."],
  ],
});
