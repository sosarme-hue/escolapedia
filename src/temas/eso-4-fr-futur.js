// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Le futur",
  minutos: 35,
  objetivos: ["Usar el futur proche (aller + infinitivo)", "Formar el futur simple con verbos regulares e irregulares", "Expresar planes, predicciones y condiciones con si + presente"],
  claves: ["futur proche", "aller + infinitif", "futur simple", "radicaux irréguliers", "si + présent", "projets"],
  pregunta: {
    texto: "«Je vais partir» y «Je partirai». Las dos hablan del futuro. ¿Cuál dirías si sales de casa en cinco minutos?",
    respuesta: "<mark>«Je vais partir»</mark>, el <b>futur proche</b> (voy a salir): algo cercano o ya decidido. «Je partirai» es el <b>futur simple</b> (saldré): más formal o más lejano, típico de predicciones, promesas y planes a largo plazo.",
  },
  bloques: [
    {
      html: `<h3>Futur proche</h3><p><b>aller en presente + infinitivo</b>: je vais, tu vas, il va, nous allons, vous allez, ils vont + infinitivo. Es el futuro más usado al hablar: <mark>«Ce soir, je vais regarder un film»</mark>. Negativa: «Je ne vais pas sortir».</p>`,
      svg: L.frase("Futur proche: Ce soir, je vais regarder un film", [
        ["Ce soir,", "", "var(--line)"], ["je vais", "aller", "var(--pen)"], ["regarder", "infinitif", "var(--red)"], ["un film.", "", "var(--line)"],
      ], "aller + infinitif = ir a + infinitivo"),
    },
    {
      html: `<h3>Futur simple: formación</h3><p>Se toma el <b>infinitivo</b> (sin la -e final en los verbos en -re) y se añaden las terminaciones de avoir: <mark>-ai, -as, -a, -ons, -ez, -ont</mark>. Parler → je parler<b>ai</b>. Finir → tu finir<b>as</b>. Prendre → il prendr<b>a</b>.</p>`,
      svg: L.tabla("Terminaciones del futur simple", ["", "parler"], [
        ["je", "parlerai"], ["tu", "parleras"], ["nous", "parlerons"], ["ils", "parleront"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Radicales irregulares</h3><p>Algunos verbos cambian el radical, pero las terminaciones son las mismas: <b>être</b> → je <i>serai</i>, <b>avoir</b> → j'<i>aurai</i>, <b>aller</b> → j'<i>irai</i>, <b>faire</b> → je <i>ferai</i>, <b>venir</b> → je <i>viendrai</i>, <b>pouvoir</b> → je <i>pourrai</i>, <b>voir</b> → je <i>verrai</i>, <b>vouloir</b> → je <i>voudrai</i>.</p>`,
      svg: L.tabla("Futuros irregulares", ["Verbe", "Futur"], [
        ["être", "je serai"], ["avoir", "j'aurai"], ["aller", "j'irai"], ["faire", "je ferai"],
      ], "var(--red)"),
    },
    {
      html: `<h3>Usos del futur simple</h3><p><b>Predicciones</b>: «Demain, il pleuvra». <b>Planes a largo plazo</b>: «Plus tard, je serai médecin». <b>Promesas</b>: «Je t'appellerai». Y en las <mark>condicionales</mark>: <b>si + presente, futur simple</b>: «S'il fait beau, nous irons à la plage» (¡nunca futur después de si!).</p>`,
      svg: L.frase("Condicional: S'il fait beau, nous irons à la plage", [
        ["S'il fait beau,", "si + présent", "var(--pen)"], ["nous irons à la plage.", "futur simple", "var(--leaf)"],
      ], "como en inglés: nunca futuro tras «si»"),
    },
    {
      html: `<h3>Hablar de proyectos</h3><p>Expresiones útiles: <i>l'année prochaine, dans cinq ans, plus tard, un jour</i>. Para el futuro profesional: «Je voudrais être…», «J'aimerais travailler dans…», «J'ai l'intention de…», «Je rêve de…».</p>`,
      svg: L.dialogo("Hablar de proyectos de futuro", [
        ["Inès", "Qu'est-ce que tu feras plus tard ?", "var(--pen)"],
        ["Pablo", "Je serai ingénieur, j'espère.", "var(--leaf)"],
        ["Inès", "Moi, je vais étudier en France !", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Dos futuros en francés",
    svg: L.columnas("Futur proche frente a futur simple", [
      ["cercano · decidido", "FUTUR PROCHE", ["Je vais partir", "dans 5 minutes."], "var(--pen)"],
      ["lejano · predicción", "FUTUR SIMPLE", ["Un jour, je", "partirai au Canada."], "var(--leaf)"],
      ["condición", "SI + PRÉSENT", ["Si tu viens,", "on jouera."], "var(--red)"],
    ]),
  },
  video: { id: "2cYZfyeySVA", titulo: "French Made Easy: le futur simple", canal: "Learn French With Alexa", vistas: 374903, megusta: 0, busqueda: "futur simple francés" },
  quiz: [
    { q: "«Ce soir, nous ___ manger au restaurant.»", o: ["allons", "irons", "allez"], a: 0, e: "Futur proche: nous allons + infinitivo." },
    { q: "Futur simple de «parler» con je:", o: ["je parlerai", "je parlais", "je parlai"], a: 0, e: "Infinitivo + -ai." },
    { q: "Futur simple de «être» con nous:", o: ["nous êterons", "nous serons", "nous étions"], a: 1, e: "Radical irregular ser-." },
    { q: "«S'il ___ demain, on restera à la maison.»", o: ["pleuvra", "pleut", "pleuvait"], a: 1, e: "Después de si va presente." },
    { q: "Futur simple de «aller» con j':", o: ["j'allerai", "j'irai", "je vais"], a: 1, e: "Radical irregular ir-." },
  ],
  examen: [
    { q: "Futur simple de «faire» con ils:", o: ["ils feront", "ils faisont", "ils fairont"], a: 0, e: "Radical fer- + -ont." },
    { q: "La negativa de «je vais sortir» es…", o: ["je vais ne pas sortir", "je ne vais pas sortir", "je ne sortir vais"], a: 1, e: "Ne… pas rodea al verbo conjugado (vais)." },
    { q: "Terminación de «vous» en futur simple:", o: ["-ez", "-iez", "-ont"], a: 0, e: "vous parlerez." },
  ],
  feynman: ["La diferencia entre futur proche y futur simple", "Cómo se forma el futur simple", "Cinco radicales irregulares", "La regla de si + presente"],
  mapa: mapa("LE FUTUR", "var(--eso)", [
    ["Futur proche", "aller + infinitif", "var(--pen)"],
    ["Futur simple", "infinitif + -ai, -as…", "var(--leaf)"],
    ["Irréguliers", "serai · aurai · irai · ferai", "var(--red)"],
    ["Si + présent", "S'il pleut, je resterai", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Futur proche", "aller en presente + infinitivo: je vais manger."],
    ["Futur simple", "Infinitivo + -ai, -as, -a, -ons, -ez, -ont."],
    ["Futuros irregulares", "serai, aurai, irai, ferai, viendrai, pourrai, verrai, voudrai."],
    ["Si + presente", "En la condición va presente y en la consecuencia futuro: S'il fait beau, j'irai."],
    ["Expresiones de futuro", "demain, l'année prochaine, dans cinq ans, plus tard, un jour."],
  ],
  familias: ["Pedidle que cuente en francés sus planes para las próximas vacaciones con futur proche.", "Jugad a hacer predicciones del futuro de la familia en futur simple.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: expresar planes, intenciones y predicciones; futur proche y futur simple (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2+ del MCER).",
    ideas: ["Horóscopo de la clase en futur simple.", "Carta a uno mismo para dentro de diez años.", "Cadena de condicionales: «Si je gagne…, j'achèterai…»."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français: le futur", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Conocer todos los radicales irregulares del futur simple", "Usar el futuro detrás de quand y dès que", "Formar el conditionnel présent a partir del futuro"],
  bloques: [
    { tras: "Futur proche", html: `<h3>Futur proche, présent o futur simple</h3><p>Como en inglés con <i>going to</i> y <i>will</i>, en francés se elige la forma según la situación:</p>${L.tb(["Situación", "Forma", "Ejemplo"], [["algo inmediato o ya decidido", "futur proche", "Attention, tu vas tomber !"], ["plan muy cercano y seguro", "présent", "Demain, je pars à Lyon."], ["predicción, futuro lejano, promesa", "futur simple", "Un jour, j'irai au Japon."], ["horario o lenguaje formal", "futur simple", "Le train partira à 8 h."]])}<p>En la conversación diaria el <b>futur proche</b> es el más frecuente; en la escritura y en textos formales (previsiones del tiempo, discursos, horóscopos) domina el <b>futur simple</b>. La negación del futur proche rodea a <i>aller</i>: «Je <b>ne</b> vais <b>pas</b> sortir».</p>` },
    { tras: "Radicales irregulares", html: `<h3>Todos los radicales irregulares</h3><p>Las terminaciones nunca cambian (-ai, -as, -a, -ons, -ez, -ont); solo cambia el radical, que <mark>siempre termina en -r</mark>:</p>${L.tb(["Verbo", "Radical", "Verbo", "Radical"], [["être", "ser-", "pouvoir", "pourr-"], ["avoir", "aur-", "vouloir", "voudr-"], ["aller", "ir-", "devoir", "devr-"], ["faire", "fer-", "savoir", "saur-"], ["venir / tenir", "viendr- / tiendr-", "voir", "verr-"], ["falloir", "faudr- (il faudra)", "envoyer", "enverr-"], ["courir", "courr-", "mourir", "mourr-"]])}<p>Los verbos con cambio ortográfico en presente lo mantienen: <i>acheter → j'achèterai, appeler → j'appellerai, payer → je paierai</i>.</p>` },
    { tras: "Usos del futur simple", html: `<h3>Quand + futuro: diferente al español</h3><p>Aquí el francés se separa del español y del inglés. Después de <b>quand, lorsque, dès que, aussitôt que</b> (en cuanto) y <b>pendant que</b>, si la acción es futura, se usa el <b>futur simple</b>:</p><ul><li>«<b>Quand je serai</b> grand, je serai pilote.» (Cuando <i>sea</i> mayor…)</li><li>«Je t'appellerai <b>dès que j'arriverai</b>.» (en cuanto <i>llegue</i>)</li></ul><p>En cambio, después de <b>si</b> nunca va futuro, sino presente: «<b>Si</b> tu viens, on <b>ira</b> au parc». Resumen: <mark>quand + futur, si + présent</mark>. Es uno de los errores más típicos de los hispanohablantes, que tienden a usar el presente después de quand.</p>` },
    { tras: "Usos del futur simple", html: `<h3>El conditionnel présent</h3><p>Una vez que sabes el futuro, el condicional es fácil: <b>mismo radical</b> que el futuro + <b>terminaciones del imparfait</b> (-ais, -ais, -ait, -ions, -iez, -aient).</p><ul><li><i>parler</i>: je parler<b>ais</b>, nous parler<b>ions</b>.</li><li><i>être</i>: je ser<b>ais</b>; <i>avoir</i>: j'aur<b>ais</b>; <i>aller</i>: j'ir<b>ais</b>; <i>pouvoir</i>: je pourr<b>ais</b>.</li></ul><p>Sirve para la <b>cortesía</b> («Je <b>voudrais</b> un café», «<b>Pourriez</b>-vous m'aider ?»), los <b>consejos</b> («Tu <b>devrais</b> dormir plus»), los <b>deseos</b> («J'<b>aimerais</b> voyager») y las condicionales imaginarias («Si j'avais le temps, je <b>lirais</b> plus»). Ojo con la pronunciación: <i>je parlerai</i> (futuro, [e]) y <i>je parlerais</i> (condicional, [ɛ]) casi suenan igual.</p>` },
    { tras: "Hablar de proyectos", html: `<h3>Escribir sobre tu futuro</h3><p>Un texto tipo «Mon avenir» o «Ma vie dans dix ans» combina lo aprendido:</p><p><i>«L'année prochaine, je <b>vais commencer</b> le bac. Après, j'<b>aimerais</b> étudier la biologie à l'université. Quand j'<b>aurai</b> mon diplôme, je <b>travaillerai</b> dans un laboratoire ou je <b>ferai</b> de la recherche sur les océans. Je <b>voudrais</b> aussi vivre un an à l'étranger, peut-être au Canada. Si tout va bien, j'<b>aurai</b> une petite maison près de la mer et un chien.»</i></p><p>Fíjate en la mezcla: futur proche para lo cercano, condicional para los deseos, futur simple para las predicciones y <i>quand + futur</i>.</p>` },
    { tras: "Futur simple: formación", html: `<h3>Pronunciar bien el futuro</h3><p>En el futuro de los verbos en <b>-er</b>, la <i>e</i> del infinitivo casi no se oye en el francés hablado: <i>je parlerai</i> suena «je parl'ré», <i>nous mangerons</i> suena «nous mang'rons». En cambio, la <b>r</b> se pronuncia siempre, y es la marca que distingue el futuro del presente: <i>je parle</i> / <i>je parlerai</i>.</p><p>Otro detalle: la terminación de <i>je</i> en el futuro (<b>-ai</b>) suena [e], cerrada, como la é; la del condicional (<b>-ais</b>) suena [ɛ], más abierta. Muchos francófonos ya no hacen esta diferencia al hablar, por eso al escribir hay que pensar en el sentido: si es una promesa o un hecho futuro, <i>-ai</i>; si es un deseo, un consejo o algo imaginario, <i>-ais</i>. Practica leyendo en voz alta pronósticos del tiempo: «Demain, il <b>fera</b> beau, mais il <b>pleuvra</b> dans le nord».</p>` },
  ],
  videos: [
    ["Futur simple: formación", L.vid("M7rSRWnS04o", "Aprender francés: le futur simple (fácil y rápido)", "Francés y croissants", 159336)],
    ["Radicales irregulares", L.vid("RR9cev0qIck", "Révise ta grammaire : le futur simple", "Tout en français", 264248)],
  ],
  ejemplos: [
    ["Conjuga «finir» y «prendre» en futur simple con nous.", ["Finir: el infinitivo entero es el radical: finir-.", "Prendre: se quita la -e final: prendr-.", "Se añade la terminación de nous: -ons."], "nous finirons, nous prendrons."],
    ["Traduce: «Cuando tenga dieciocho años, me sacaré el carné.»", ["Después de quand, con acción futura, va futur simple: quand j'aurai.", "La principal también en futuro: je passerai le permis.", "Avoir → aur-."], "Quand j'aurai dix-huit ans, je passerai le permis."],
    ["Haz más cortés: «Je veux un renseignement. Vous pouvez m'aider ?»", ["Vouloir en condicional: je voudrais.", "Pouvoir en condicional con vous e inversión: pourriez-vous.", "Las terminaciones son las del imparfait."], "Je voudrais un renseignement. Pourriez-vous m'aider ?"],
  ],
  errores: [
    "Usar presente después de quand para el futuro: *quand je suis grand → quand je serai grand.",
    "Poner futuro después de si: *si tu viendras → si tu viens.",
    "Olvidar quitar la -e de los verbos en -re: *je prendreai → je prendrai.",
    "Inventar radicales: *je allerai → j'irai; *je pouvrai → je pourrai.",
    "Confundir futur (je serai) y conditionnel (je serais).",
  ],
  ejercicios: [
    ["Conjuga en futur simple: je (parler), tu (finir), il (vendre).", "je parlerai, tu finiras, il vendra."],
    ["Conjuga en futur simple: nous (être), vous (faire), ils (aller).", "nous serons, vous ferez, ils iront."],
    ["Conjuga en futur simple: je (voir), tu (venir), il (falloir).", "je verrai, tu viendras, il faudra."],
    ["Pon en futur proche: «Nous prenons le train.»", "Nous allons prendre le train."],
    ["Pon en negativa: «Je vais sortir ce soir.»", "Je ne vais pas sortir ce soir."],
    ["Completa: «Dès que je (finir) ___ mes examens, je (partir) ___ en vacances.»", "Dès que je finirai mes examens, je partirai en vacances."],
    ["Completa: «S'il (faire) ___ beau, nous (aller) ___ à la plage.»", "S'il fait beau, nous irons à la plage."],
    ["Forma el condicional: je (vouloir), nous (pouvoir), ils (devoir).", "je voudrais, nous pourrions, ils devraient."],
    ["Da un consejo con devoir en condicional: tu amigo no duerme bien.", "Tu devrais éteindre ton portable avant de dormir."],
    ["Escribe tres frases sobre tu vida en diez años.", "Por ejemplo: «Dans dix ans, j'habiterai à Barcelone. Je travaillerai comme ingénieure. J'aurai peut-être des enfants.»"],
  ],
  quiz: [
    ["Futur de «voir» con je:", ["verrai", "voirai", "voyerai"], 0, "Radical verr-."],
    ["«Quand tu ___ grand…»", ["seras", "es", "serais"], 0, "Quand + futur."],
    ["«Je ___ un thé, s'il vous plaît.»", ["voudrais", "voudrai", "veux"], 0, "Cortesía: condicional."],
    ["Futur de «il faut»:", ["il faudra", "il fallera", "il faura"], 0, "Falloir → faudr-."],
    ["El condicional usa el radical del futuro y las terminaciones del…", ["imparfait", "présent", "passé composé"], 0, "-ais, -ait, -ions…"],
  ],
  tarjetas: [
    ["Quand + futur", "Quand je serai grand… (en español: cuando sea)."],
    ["Conditionnel", "Radical del futuro + terminaciones del imparfait: je voudrais."],
    ["Radicales en -r", "ser-, aur-, ir-, fer-, pourr-, voudr-, verr-, viendr-, faudr-."],
  ],
});
