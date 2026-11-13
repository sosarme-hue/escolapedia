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

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Le week-end de Léa", `<p>Es lunes por la mañana en un instituto de Toulouse. Antes de clase, Léa le cuenta a su amiga Inès su fin de semana: «<i>Samedi, je suis allée au concert de Stromae avec mon frère ! On est arrivés très tôt, on a attendu deux heures, mais on a vu le concert au premier rang. Après, nous sommes rentrés en métro. Dimanche, je n'ai rien fait : j'ai dormi jusqu'à midi !</i>». Inès responde: «<i>Moi, je travaille au restaurant de mes parents le week-end. Je commence à huit heures et je finis à quatre heures. Mais j'adore ça !</i>».</p><p>En esta conversación aparecen los dos tiempos más usados del francés. El <b>présent</b> sirve para hablar de lo que hacemos habitualmente o ahora (<i>je travaille, je commence, j'adore</i>). El <b>passé composé</b> sirve para contar lo que hicimos en un momento concreto del pasado (<i>je suis allée, on a attendu, j'ai dormi</i>), y equivale tanto a nuestro «he ido» como a «fui».</p><p>Dominar estos dos tiempos te permitirá mantener casi cualquier conversación cotidiana. En este tema repasarás la conjugación del presente con sus irregulares, aprenderás a elegir entre <i>avoir</i> y <i>être</i> en el passé composé y a hacer bien las concordancias, que son la gran trampa de este tiempo.</p>`],
  mas: [
    ["<h3>El presente de los verbos en -er</h3>", `<p>Los verbos en -er son el <b>90 %</b> de los verbos franceses, y todos los nuevos que se crean (<i>googler, tweeter, liker</i>) entran en este grupo. Fíjate en la pronunciación: <i>je parle, tu parles, il parle, ils parlent</i> suenan exactamente igual, porque las terminaciones <i>-e, -es, -ent</i> son mudas. Solo <i>nous parlons</i> y <i>vous parlez</i> se distinguen al oído. Por eso en francés el pronombre sujeto es obligatorio.</p>`],
    ["<h3>El passé composé con avoir</h3>", `<p>El passé composé equivale a dos tiempos del español: «<b>J'ai mangé</b>» puede ser «he comido» o «comí», según el contexto. En la lengua hablada y escrita corriente sustituye casi siempre al <i>passé simple</i>, un tiempo que solo encontrarás en los libros y los cuentos (<i>il mangea, ils furent</i>). Para contar tu fin de semana o un viaje, el passé composé es el tiempo que necesitas.</p>`],
    ["<h3>El passé composé con être</h3>", `<p>Un truco para recordar los verbos que van con être es la «casa de être»: casi todos expresan un <b>movimiento o un cambio de estado</b>: <i>aller / venir, arriver / partir, entrer / sortir, monter / descendre, naître / mourir, rester, tomber, retourner, passer</i>, y sus derivados (<i>revenir, devenir, rentrer</i>). Además, todos los verbos <b>pronominales</b> se conjugan con être: «Je me suis levé».</p>`],
  ],
  svgs: [
    ["<h3>Verbos en -er con cambios ortográficos</h3>", "Verbos en -er con cambios ortográficos", [["-ger", "nous mangeons"], ["-cer", "nous commençons"], ["e → è", "j'achète · je me lève"], ["doble consonante", "j'appelle · je jette"]]],
    ["<h3>Verbos en -ir y en -re</h3>", "Verbos en -ir y en -re", [["-ir (finir)", "je finis · nous finissons"], ["-re (vendre)", "je vends · il vend"], ["irregulares -ir", "partir: je pars · nous partons"]]],
    ["<h3>Participios irregulares</h3>", "Participios irregulares frecuentes", [["-u", "eu · vu · lu · bu · pu"], ["-is / -it", "pris · mis · dit · écrit"], ["otros", "été · fait · né · mort"]]],
    ["<h3>Negación y adverbios en el passé composé</h3>", "Negación y adverbios en el passé composé", [["Negación", "je n'ai pas compris"], ["Adverbio corto", "j'ai bien mangé"], ["Rien / jamais", "je n'ai rien vu"]], "ne + auxiliar + pas + participio"],
    ["<h3>Verbos que llevan avoir o être</h3>", "Verbos con avoir o être según el sentido", [["Sin objeto: être", "Je suis sorti."], ["Con objeto: avoir", "J'ai sorti le chien."], ["Otros", "monter · descendre · passer"]]],
  ],
  bloques: [
    { tras: "<h3>El presente de los verbos en -er</h3>", html: `<h3>Usos del presente</h3><p>El presente francés se usa más o menos como el español, pero hay cuatro casos que conviene conocer:</p><ul><li><b>Acciones en curso</b>: el francés no tiene una forma «estoy haciendo» como el inglés; basta con el presente: «Je <b>mange</b>» (estoy comiendo). Si quieres subrayar que la acción está en pleno desarrollo, usa <b>être en train de</b>: «Je <b>suis en train de</b> manger, je te rappelle !».</li><li><b>Duración hasta ahora</b> con <b>depuis</b>: «J'<b>habite</b> à Lyon <b>depuis</b> trois ans» (Vivo en Lyon desde hace tres años / Llevo tres años viviendo en Lyon). Ojo: el francés usa el presente, no el passé composé. También se dice «<b>Ça fait</b> trois ans <b>que</b> j'habite à Lyon».</li><li><b>Futuro cercano y seguro</b>: «Je <b>pars</b> demain», «On <b>se voit</b> ce soir ?».</li><li><b>Presente narrativo</b>: en los relatos y en los libros de historia se usa para dar viveza: «En 1789, le peuple <b>prend</b> la Bastille».</li></ul><p>Además, el presente es el tiempo de los horarios, las instrucciones y las verdades generales: «Le train <b>part</b> à 8 h», «L'eau <b>bout</b> à 100 degrés». Con <b>venir de</b> + infinitivo expresa un pasado inmediato: «Je <b>viens de</b> finir» (acabo de terminar).</p>`, svg: ["Usos del presente en francés", [["En curso", "Je suis en train de…"], ["depuis", "J'habite ici depuis 3 ans."], ["Futuro cercano", "Je pars demain."], ["Pasado inmediato", "Je viens de finir."]]] },
    { tras: "<h3>Verbos en -ir y en -re</h3>", html: `<h3>Pronunciar bien el presente</h3><p>En francés se escriben muchas letras que no se pronuncian, y el presente es un buen ejemplo. Las consonantes finales <b>-s, -t, -d, -x</b> suelen ser mudas: <i>je finis, il finit, je prends, il prend, je veux</i> se pronuncian sin la última letra. Por eso <i>je finis</i> y <i>il finit</i> suenan igual. La terminación <b>-ent</b> de la tercera persona del plural también es muda: <i>ils parlent</i> se dice /il parl/.</p><p>Pero hay que distinguir el singular y el plural de algunos verbos por el sonido de la consonante que reaparece: <i>il finit</i> /fini/ – <i>ils finissent</i> /finis/; <i>il écrit</i> /ekri/ – <i>ils écrivent</i> /ekriv/; <i>il part</i> /par/ – <i>ils partent</i> /part/. Esa consonante final pronunciada es la única pista de que se trata del plural.</p><p>Otro punto importante es la <b>liaison</b>: cuando la palabra siguiente empieza por vocal, la consonante muda se pronuncia y se une a ella. «Ils_ont» /ilzɔ̃/ (tienen) frente a «ils sont» /ilsɔ̃/ (son): la diferencia entre /z/ y /s/ cambia el verbo. Practicar esta pareja es esencial para no confundir <i>avoir</i> y <i>être</i> al hablar, y también en el passé composé: «Ils_ont mangé» / «Ils sont partis».</p>`, svg: ["Letras mudas y liaison", [["Consonantes mudas", "je finis · il prend"], ["-ent mudo", "ils parlent = il parle"], ["Plural audible", "il part / ils partent"], ["Liaison", "ils_ont /z/ · ils sont /s/"]]] },
    { tras: "<h3>La concordancia con être</h3>", html: `<h3>La concordancia con los verbos pronominales</h3><p>Los verbos pronominales se conjugan con <b>être</b>, y normalmente el participio <b>concuerda con el sujeto</b>: «Elle s'est levé<b>e</b> à sept heures», «Nous nous sommes amusé<b>s</b>», «Elles se sont habillé<b>es</b>».</p><p>Pero hay una excepción importante: si el verbo tiene un <b>complemento directo detrás</b> (normalmente una parte del cuerpo), el participio <mark>no concuerda</mark>: «Elle s'est lavée» (se lavó), pero «Elle s'est <b>lavé les mains</b>» (se lavó las manos). «Elle s'est coupée» / «Elle s'est <b>coupé le doigt</b>». Esto ocurre porque, en la segunda frase, el complemento directo es <i>les mains</i>, no <i>se</i>.</p><p>Tampoco concuerda cuando <b>se</b> es complemento indirecto, como en los verbos recíprocos que llevan <i>à</i>: <i>se parler, se téléphoner, se dire, s'écrire</i>. «Elles se sont <b>parlé</b>» (sin -es), porque se habla <i>à</i> quelqu'un; en cambio, «Elles se sont <b>vues</b>», porque se ve <i>quelqu'un</i>.</p><p>Al hablar estas diferencias casi no se oyen, pero en los textos escritos y en los exámenes se tienen en cuenta. Si dudas, quédate con la regla general (concordar con el sujeto) y la excepción de las partes del cuerpo.</p>`, svg: ["Concordancia con los pronominales", [["Regla general", "Elle s'est levée."], ["Parte del cuerpo detrás", "Elle s'est lavé les mains."], ["se = COI", "Elles se sont parlé."]]] },
    { tras: "<h3>Verbos que llevan avoir o être</h3>", html: `<h3>Preguntas y pronombres en el passé composé</h3><p>Para preguntar en passé composé hay tres formas, igual que en presente: con la entonación («Tu <b>as fini</b> ?»), con <b>est-ce que</b> («<b>Est-ce que</b> tu as fini ?») o con <b>inversión</b>, que afecta al auxiliar: «<b>As-tu</b> fini ?», «<b>Est-elle</b> partie ?». Con il / elle y un auxiliar acabado en vocal se añade una -t-: «<b>A-t-il</b> compris ?».</p><p>Los <b>pronombres complemento</b> se colocan delante del auxiliar: «Je <b>l'</b>ai vu», «Tu <b>lui</b> as parlé ?», «Nous <b>y</b> sommes allés». En la negación, el pronombre queda dentro: «Je ne <b>l'</b>ai pas vu».</p><p>Y aquí aparece la regla de concordancia más difícil: con <i>avoir</i>, el participio concuerda con el <b>complemento directo</b> cuando este va <mark>delante</mark> del verbo: «J'ai acheté <b>la robe</b>» (sin concordancia), pero «<b>La robe</b> ? Je <b>l'</b>ai acheté<b>e</b>». «<b>Les photos</b> que j'ai pris<b>es</b>». Con los pronombres <i>lui, leur, y, en</i> nunca hay concordancia.</p><p>Esta regla es más escrita que oral, salvo en participios como <i>pris / prise</i> o <i>fait / faite</i>, donde la consonante final sí se pronuncia en femenino.</p>`, svg: ["Preguntas y pronombres en passé composé", [["Inversión", "As-tu fini ? · A-t-il vu ?"], ["Pronombre delante", "Je l'ai vu."], ["Concordancia COD", "La robe ? Je l'ai achetée."]]] },
    { html: `<h3>Contar el fin de semana</h3><p>Una de las tareas orales y escritas más frecuentes es contar lo que hiciste: el fin de semana, unas vacaciones, una excursión. Para que tu relato sea claro, combina el passé composé con <b>expresiones de tiempo pasado</b>: <i>hier</i> (ayer), <i>avant-hier</i> (anteayer), <i>samedi dernier</i>, <i>le week-end dernier</i>, <i>la semaine dernière</i>, <i>il y a deux jours</i> (hace dos días), <i>l'année dernière</i>, <i>en 2023</i>.</p><p>Ordena las acciones con <b>conectores de secuencia</b>: <i>d'abord</i> (primero), <i>ensuite / puis</i> (después), <i>après</i> (luego), <i>plus tard</i> (más tarde), <i>finalement / enfin</i> (al final). Y para valorar lo que pasó, añade exclamaciones y adjetivos: «C'<b>était</b> génial !», «C'était super / nul / ennuyeux», «Je me suis bien amusé(e)», «J'ai passé un très bon week-end».</p><p>Ejemplo: «Le week-end dernier, je suis allé à la montagne avec ma famille. D'abord, nous avons fait une randonnée. Ensuite, nous avons pique-niqué au bord d'un lac. Plus tard, mon frère est tombé dans l'eau ! Enfin, nous sommes rentrés à la maison très fatigués. C'était génial !». Fíjate en el uso de <i>c'était</i> (imparfait) para valorar, una combinación muy natural.</p>`, svg: ["Contar el fin de semana", [["Cuándo", "le week-end dernier · hier"], ["Hace", "il y a deux jours"], ["Orden", "d'abord · ensuite · enfin"], ["Valorar", "C'était génial !"]]] },
  ],
  grupos: [3, 3, 5, 4],
  ejemplos: [
    ["Traduce: «Estudio francés desde hace cuatro años.»", ["Duración que continúa: depuis + presente.", "No se usa el passé composé."], "J'<b>étudie</b> le français <b>depuis</b> quatre ans."],
    ["Escribe en passé composé: «Elle se lave les mains.»", ["Pronominal: auxiliar être.", "Hay un complemento directo detrás (les mains): no hay concordancia."], "Elle <b>s'est lavé</b> les mains."],
    ["Responde con un pronombre: «Tu as vu la nouvelle série ?» — Sí.", ["La nouvelle série → la (l' ante vocal).", "El pronombre va delante del auxiliar y el participio concuerda (femenino)."], "Oui, je <b>l'ai vue</b>."],
  ],
  errores: [],
  niveles: "bbbbmmbmam",
  ejercicios: [
    ["b", "Conjuga en presente: je (manger), nous (manger), ils (manger).", "je <b>mange</b>, nous <b>mangeons</b>, ils <b>mangent</b>."],
    ["b", "Conjuga en presente: je (prendre), nous (prendre), ils (prendre).", "je <b>prends</b>, nous <b>prenons</b>, ils <b>prennent</b>."],
    ["b", "Escribe el passé composé: tu (regarder), elle (finir), nous (vendre).", "tu <b>as regardé</b>, elle <b>a fini</b>, nous <b>avons vendu</b>."],
    ["b", "Escribe el passé composé con être: je (aller, femenino), ils (venir).", "je <b>suis allée</b>, ils <b>sont venus</b>."],
    ["b", "Escribe el participio de: avoir, être, boire, lire, dire.", "eu, été, bu, lu, dit."],
    ["b", "Traduce: «Acabo de llegar.»", "Je <b>viens d'</b>arriver."],
    ["b", "Ordena con conectores: «nous avons mangé / nous sommes allés au cinéma / nous sommes rentrés» (d'abord, ensuite, enfin).", "D'abord, nous avons mangé. Ensuite, nous sommes allés au cinéma. Enfin, nous sommes rentrés."],
    ["m", "Completa: «Je suis en train de (faire) ___ mes devoirs.»", "en train de <b>faire</b> (infinitivo)."],
    ["m", "Traduce: «Hace dos años que vivo aquí.»", "<b>Ça fait</b> deux ans <b>que</b> j'habite ici. / J'habite ici <b>depuis</b> deux ans."],
    ["m", "Pon en passé composé: «Elles se maquillent.»", "Elles <b>se sont maquillées</b>."],
    ["m", "Pon en passé composé: «Il se brosse les dents.»", "Il <b>s'est brossé</b> les dents (sin concordancia: les dents va detrás)."],
    ["m", "Haz la pregunta con inversión: «Il a compris.»", "<b>A-t-il</b> compris ?"],
    ["m", "Sustituye con un pronombre: «J'ai mangé la pizza.»", "Je <b>l'ai mangée</b>."],
    ["m", "Pon en negativa: «Nous y sommes allés.»", "Nous <b>n'y sommes pas</b> allés."],
    ["m", "Elige: «Elle (a / est) descendu la valise.» / «Elle (a / est) descendue à la cave.»", "Elle <b>a</b> descendu la valise (con objeto). Elle <b>est</b> descendue à la cave (sin objeto)."],
    ["m", "Escribe dos frases con il y a (hace) en passé composé.", "Ejemplo: «Il y a deux jours, j'ai vu un film.» «J'ai commencé le français il y a trois ans.»"],
    ["m", "Completa con la liaison correcta y explica: «Ils ___ faim» / «Ils ___ fatigués».", "Ils <b>ont</b> faim (/z/, avoir) · Ils <b>sont</b> fatigués (/s/, être)."],
    ["a", "Cuenta tu último fin de semana en 60 palabras con passé composé, conectores y una valoración.", "Modelo: «Samedi dernier, je me suis levé tard. D'abord, j'ai pris le petit-déjeuner avec ma famille. Ensuite, je suis allé au parc avec mes amis et nous avons joué au foot. Le soir, nous avons regardé un film. Dimanche, j'ai fait mes devoirs. C'était un week-end tranquille mais sympa.»"],
    ["a", "Corrige: «Hier, elle s'est lavée les cheveux et elle a sortie avec ses amies.»", "Elle s'est <b>lavé</b> les cheveux (complemento detrás) et elle <b>est sortie</b> avec ses amies."],
    ["a", "Explica por qué se escribe «Les lettres que j'ai écrites» pero «J'ai écrit les lettres».", "Con avoir, el participio concuerda con el complemento directo solo si va delante (que = les lettres)."],
    ["a", "Traduce: «Se escribieron durante años y se vieron por fin en París.»", "Ils <b>se sont écrit</b> pendant des années et ils <b>se sont</b> enfin <b>vus</b> à Paris. (Écrire à: sin concordancia; voir quelqu'un: concordancia.)"],
    ["a", "Pon en passé composé el texto: «Nous partons à 8 h. Nous arrivons à Paris à midi. Nous visitons le Louvre et nous montons à la tour Eiffel.»", "Nous <b>sommes partis</b> à 8 h. Nous <b>sommes arrivés</b> à Paris à midi. Nous <b>avons visité</b> le Louvre et nous <b>sommes montés</b> à la tour Eiffel."],
    ["a", "Escribe un diálogo de cuatro líneas en el que alguien pregunta por un viaje con inversión y otro responde con pronombres.", "Ejemplo: «— As-tu visité le château ? — Oui, je l'ai visité. — Es-tu monté à la tour ? — Non, je n'y suis pas monté, il y avait trop de monde.»"],
    ["a", "Explica la diferencia: «Je mange» / «Je suis en train de manger» / «Je viens de manger».", "Como / estoy comiendo (presente general o en curso) · estoy comiendo justo ahora (en pleno desarrollo) · acabo de comer (pasado inmediato)."],
    ["a", "Escribe una frase en presente narrativo sobre un hecho histórico.", "Ejemplo: «En 1969, Neil Armstrong <b>marche</b> sur la Lune.»"],
    ["a", "Escribe tres frases sobre hechos de tu vida con il y a y depuis, una con cada tiempo (passé composé y présent).", "Ejemplo: «J'ai commencé le basket il y a cinq ans. Je joue dans une équipe depuis deux ans. J'ai déménagé il y a un an.»"],
  ],
  cuartas: ["parlont", "allons", "je suis manger", "sont", "partis", "prit", "mangeions", "ne ai", "finissez", "montées", "faisé", "es", "partir"],
  quiz: [
    ["«J'habite à Lyon ___ trois ans.»", ["depuis", "il y a", "pendant", "dans"], 0, "Duración que continúa: depuis + presente."],
    ["«Je ___ de finir mes devoirs.» (acabo de)", ["viens", "suis", "vais", "ai"], 0, "Venir de = acabar de."],
    ["«Ils_ont» se pronuncia con…", ["/z/", "/s/", "/t/", "sin sonido"], 0, "Liaison con avoir."],
    ["«Elle s'est ___ les mains.»", ["lavé", "lavée", "lavées", "laver"], 0, "Complemento directo detrás: sin concordancia."],
    ["«Elles se sont ___.» (se vieron)", ["vues", "vu", "vus", "voir"], 0, "Voir quelqu'un: concordancia."],
    ["«___ -il compris ?»", ["A-t", "As", "Est", "Ai"], 0, "Inversión con -t-."],
    ["«La lettre ? Je l'ai ___.»", ["écrite", "écrit", "écrits", "écrire"], 0, "COD delante: concordancia."],
    ["«Je ___ en train de manger.»", ["suis", "ai", "vais", "viens"], 0, "Être en train de."],
    ["«Le week-end ___, je suis allé à la mer.»", ["dernier", "prochain", "depuis", "il y a"], 0, "Pasado: dernier."],
    ["«Elle a ___ le chien.» (sacó)", ["sorti", "sortie", "sortis", "sortir"], 0, "Con avoir y COD detrás: sin concordancia."],
  ],
  examen: [
    ["«Nous ___ (commencer) à 8 h.»", ["commençons", "commencons", "commenceons", "commencions"], 0, "Cédille delante de -o."],
    ["«Elles ___ arrivées hier.»", ["sont", "ont", "est", "a"], 0, "Arriver con être."],
    ["«Il y a deux jours» significa…", ["hace dos días", "dentro de dos días", "desde hace dos días", "durante dos días"], 0, "Il y a + tiempo = hace."],
    ["«Je ne l'___ pas vu.»", ["ai", "suis", "a", "est"], 0, "Pronombre dentro de la negación."],
    ["«Nous nous sommes bien ___.»", ["amusés", "amusé", "amuser", "amusez"], 0, "Pronominal: concordancia con el sujeto."],
  ],
  tarjetas: [
    ["depuis + présent", "J'habite ici depuis 3 ans (llevo 3 años viviendo aquí)."],
    ["venir de", "Acabar de: je viens de finir."],
    ["Pronominal + parte del cuerpo", "Elle s'est lavé les mains (sin concordancia)."],
    ["COD delante", "La robe ? Je l'ai achetée (concordancia)."],
  ],
  glosario: [
    ["présent", "Presente: acciones habituales, en curso, verdades generales."],
    ["passé composé", "Pasado compuesto: auxiliar avoir / être + participio."],
    ["auxiliaire", "Verbo auxiliar: avoir o être."],
    ["participe passé", "Participio: parlé, fini, vendu, pris."],
    ["accord", "Concordancia del participio en género y número."],
    ["verbe pronominal", "Verbo con pronombre reflexivo: se lever, s'habiller."],
    ["COD", "Complemento directo."],
    ["depuis", "Desde (hace); con presente para duraciones que continúan."],
    ["il y a", "Hace (tiempo pasado)."],
    ["venir de", "Acabar de."],
    ["être en train de", "Estar haciendo algo."],
    ["liaison", "Unión de una consonante final con la vocal de la palabra siguiente."],
    ["inversion", "Pregunta con el verbo delante del sujeto: As-tu fini ?"],
    ["passé simple", "Pasado literario, solo en libros: il mangea."],
  ],
  situacion: {
    titulo: "Le blog de la classe: notre week-end",
    reto: "La clase tiene un blog compartido con el instituto de intercambio en Francia. Cada lunes, varios alumnos publican una entrada contando su fin de semana con fotos, y los franceses comentan y responden con el suyo.",
    pasos: ["Elige un fin de semana real (o una excursión del instituto) y haz una lista de lo que hiciste.", "Escribe una entrada de blog de 120-150 palabras en passé composé con al menos cuatro verbos con être y dos pronominales.", "Añade una frase en presente sobre lo que haces normalmente los fines de semana y otra con depuis.", "Revisa las concordancias con être, los pronominales y los pronombres delante del auxiliar.", "Publica la entrada con fotos y escribe un comentario en francés en la entrada de un alumno francés, con dos preguntas en passé composé."],
    producto: "Una entrada de blog de 120-150 palabras y un comentario a un compañero francés.",
    evaluacion: ["Conjuga correctamente el presente, incluidos los irregulares.", "Elige bien el auxiliar avoir o être y hace las concordancias.", "Ordena el relato con expresiones de tiempo y conectores.", "Formula preguntas en passé composé de forma correcta."],
  },
  saberes: "Decret 175/2022 de Catalunya (Segona llengua estrangera, 4t d'ESO): narració d'experiències personals; present i passé composé.",
  minutos: 100,
});
