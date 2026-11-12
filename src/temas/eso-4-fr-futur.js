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
