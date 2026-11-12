// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "Le futur proche",
  minutos: 50,
  objetivos: ["Conjugar aller en presente", "Formar el futur proche con aller + infinitivo", "Hablar de planes con marcadores de futuro"],
  claves: ["futur proche", "aller", "infinitif", "je vais", "demain", "ce soir", "la semaine prochaine", "dans deux jours", "ne… pas", "projets"],
  pregunta: {
    texto: "«Voy a estudiar» se dice en francés «Je vais étudier». ¿Qué diferencia hay con el español?",
    respuesta: "¡Casi ninguna! El <mark>futur proche</mark> se forma igual que nuestro «ir a + infinitivo», pero <b>sin la preposición</b>: <i>je vais <s>à</s> étudier</i> sería un error. Es el futuro más usado en la conversación para hablar de planes e intenciones.",
  },
  bloques: [
    {
      html: `<h3>El verbo aller</h3><p>El verbo <b>aller</b> (ir) es muy irregular en presente: <i>je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont</i>. Se usa para decir adónde vas (<i>Je vais au collège</i>), para preguntar cómo está alguien (<i>Comment ça va ?</i>) y, sobre todo, para formar el <mark>futur proche</mark>.</p>`,
      svg: L.tabla("Presente de aller", ["Persona", "aller"], [
        ["je", "vais"], ["tu", "vas"], ["nous", "allons"], ["ils", "vont"],
      ]),
    },
    {
      html: `<h3>Cómo se forma el futur proche</h3><p>El futur proche se forma con <b>aller</b> en presente + <b>infinitivo</b>: <i>Je <u>vais</u> <u>manger</u></i> (voy a comer), <i>Nous <u>allons</u> <u>partir</u></i> (vamos a salir), <i>Ils <u>vont</u> <u>jouer</u></i> (van a jugar). Solo se conjuga <i>aller</i>; el segundo verbo <mark>no cambia nunca</mark>. Y entre los dos no hay preposición.</p>`,
      svg: L.frase("Estructura del futur proche", [
        ["Je", "sujeto", "var(--inf)"], ["vais", "aller", "var(--red)"],
        ["regarder", "infinitivo", "var(--pen)"], ["un film.", "", "var(--line)"],
      ], "aller + infinitivo"),
    },
    {
      html: `<h3>Los marcadores de futuro</h3><p>Para situar la acción en el futuro: <i>tout à l'heure</i> (dentro de un rato), <i>ce soir</i> (esta noche), <i>demain</i> (mañana), <i>après-demain</i> (pasado mañana), <i>ce week-end</i>, <i>la semaine prochaine</i>, <i>le mois prochain</i>, <i>l'année prochaine</i>, <i>dans deux jours</i> (dentro de dos días) y <i>bientôt</i> (pronto). Ojo: «dentro de» se dice <mark>dans</mark>: <i>dans une heure</i>.</p>`,
      svg: L.linea("Del más cercano al más lejano", [
        ["1", "tout à l'heure, ce soir", "var(--pen)"],
        ["2", "demain, après-demain", "var(--leaf)"],
        ["3", "la semaine prochaine", "var(--red)"],
        ["4", "l'année prochaine", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La negación</h3><p>En el futur proche, la negación <i>ne… pas</i> rodea al verbo <b>aller</b>, que es el conjugado: <i>Je <b>ne</b> vais <b>pas</b> sortir ce soir</i>, <i>Nous <b>n'</b>allons <b>pas</b> venir</i>. Lo mismo con <i>ne… jamais</i> o <i>ne… rien</i>: <i>Il ne va rien dire</i>. Delante de vocal, <i>ne</i> se convierte en <mark>n'</mark>: <i>Vous n'allez pas regretter !</i></p>`,
      svg: L.filas("Futur proche en negativa", [
        ["Afirmativa", "Je vais sortir.", "var(--leaf)"],
        ["Negativa", "Je ne vais pas sortir.", "var(--red)"],
        ["Con vocal", "Nous n'allons pas sortir.", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Hablar de planes e intenciones</h3><p>El futur proche sirve para hablar de lo que tienes <b>previsto</b> hacer o de algo que va a pasar <b>seguro</b> pronto: <i>Ce week-end, je vais aller chez ma grand-mère</i>; <i>Regarde le ciel : il va pleuvoir !</i> Para preguntar por los planes de alguien: <mark>Qu'est-ce que tu vas faire</mark> demain ? / <i>Tu vas venir à la fête ?</i></p>`,
      svg: L.dialogo("Hablar de planes", [
        ["Zoé", "Qu'est-ce que tu vas faire samedi ?", "var(--red)"],
        ["Malik", "Je vais jouer au basket. Et toi ?", "var(--pen)"],
        ["Zoé", "Moi, je vais aller au cinéma.", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Pasado reciente, presente y futuro próximo",
    svg: L.columnas("Tres momentos con verbos auxiliares", [
      ["acaba de pasar", "VENIR DE", ["je viens de", "manger"], "var(--muted)"],
      ["está pasando", "ÊTRE EN TRAIN DE", ["je suis en train", "de manger"], "var(--pen)"],
      ["va a pasar", "ALLER", ["je vais", "manger"], "var(--red)"],
    ]),
  },
  video: { id: "DMKojueiA94", titulo: "Le futur proche en français", canal: "Mademoiselle Catherine", vistas: 373502, megusta: 0, busqueda: "le futur proche en français" },
  quiz: [
    { q: "«Voy a comer»:", o: ["Je vais manger.", "Je vais à manger.", "Je vais mange."], a: 0, e: "Sin preposición." },
    { q: "«Nous ___ partir.»", o: ["allons", "allez", "vont"], a: 0, e: "Aller con nous." },
    { q: "«Ils ___ jouer au foot.»", o: ["vont", "vais", "allent"], a: 0, e: "Ils vont." },
    { q: "«Dentro de dos días»:", o: ["dans deux jours", "en deux jours", "il y a deux jours"], a: 0, e: "Dans." },
    { q: "«No voy a salir»:", o: ["Je ne vais pas sortir.", "Je vais ne pas sortir.", "Je ne vais sortir pas."], a: 0, e: "La negación rodea a aller." },
  ],
  examen: [
    { q: "«Tu ___ venir ?»", o: ["vas", "va", "vais"], a: 0, e: "Tu vas." },
    { q: "«L'année prochaine» significa…", o: ["el año que viene", "el año pasado", "este año"], a: 0, e: "Prochain = próximo." },
    { q: "«Il ___ pleuvoir.» (va a llover)", o: ["va", "vais", "vont"], a: 0, e: "Il va." },
  ],
  feynman: ["El presente de aller", "Cómo se forma el futur proche", "Seis marcadores de futuro", "Dónde va la negación en el futur proche"],
  mapa: mapa("FUTUR PROCHE", "var(--eso)", [
    ["Aller", "vais · vas · va · allons…", "var(--red)"],
    ["Forma", "aller + infinitivo", "var(--pen)"],
    ["Marcadores", "demain · dans · prochain", "var(--leaf)"],
    ["Negación", "je ne vais pas + inf.", "var(--inf)"],
  ]),
  tarjetas: [
    ["Aller en presente", "je vais, tu vas, il va, nous allons, vous allez, ils vont."],
    ["Futur proche", "Aller en presente + infinitivo, sin preposición: je vais partir."],
    ["Dans", "Dentro de (tiempo): dans une heure, dans deux jours."],
    ["Prochain / prochaine", "Próximo: la semaine prochaine, le mois prochain."],
    ["Negación", "Rodea a aller: je ne vais pas venir."],
  ],
  familias: ["El domingo, pedidle que os cuente en francés tres planes para la semana.", "Haced juntos una lista de propósitos para el año próximo con «je vais…».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: hablar de planes, intenciones y previsiones; presente de aller, futur proche, marcadores temporales de futuro (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1-A2 del MCER).",
    ideas: ["Agenda de la semana compartida en francés.", "Juego de adivinos: predicciones para los compañeros con il va / elle va.", "Planificar una excursión de clase en futur proche."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Usar venir de y être en train de", "Escribir un plan para las vacaciones"],
  bloques: [
    { tras: "El verbo aller", html: `<h3>Aller à y aller en: adónde vas</h3><p>Cuando <i>aller</i> significa «ir a un lugar», necesita una preposición, igual que en español:</p>${L.tb(["Lugar", "Preposición", "Ejemplo"], [["sitio con artículo masculino", "au", "Je vais au parc."], ["sitio femenino", "à la", "Je vais à la plage."], ["sitio con vocal", "à l'", "Je vais à l'école."], ["varios sitios", "aux", "Je vais aux États-Unis."], ["casa de alguien", "chez", "Je vais chez Paul / chez moi."], ["transporte", "en / à", "en bus, en train · à pied, à vélo"]])}<p>Por eso hay que distinguir dos estructuras: <i>Je vais <b>au</b> cinéma</i> (voy al cine: aller + lugar) y <i>Je vais <b>voir</b> un film</i> (voy a ver una película: aller + infinitivo). Y se pueden combinar: <mark>Je vais aller au cinéma</mark>.</p>` },
    { tras: "Cómo se forma el futur proche", html: `<h3>El futur proche con verbos pronominales</h3><p>Con los verbos pronominales (<i>se lever, se coucher, s'habiller…</i>), el pronombre <b>va delante del infinitivo</b> y concuerda con el sujeto:</p><ul><li><i>Je vais <b>me</b> lever tôt.</i> (Me voy a levantar pronto.)</li><li><i>Tu vas <b>te</b> coucher ?</i></li><li><i>Nous allons <b>nous</b> amuser !</i> (¡Nos vamos a divertir!)</li><li><i>Ils vont <b>s'</b>habiller.</i></li></ul><p>En negativa, <i>ne… pas</i> sigue rodeando a <i>aller</i>: <i>Je <b>ne</b> vais <b>pas</b> me lever tôt</i>. Fíjate en que en español podemos decir «me voy a levantar» o «voy a levantarme», pero en francés el pronombre <mark>solo puede ir delante del infinitivo</mark>.</p>` },
    { tras: "Los marcadores de futuro", html: `<h3>Venir de: el pasado reciente</h3><p>Igual que <i>aller</i> + infinitivo indica algo que va a pasar pronto, <b>venir de</b> + infinitivo indica algo que <mark>acaba de pasar</mark>:</p><ul><li><i>Je <b>viens de</b> finir mes devoirs.</i> (Acabo de terminar los deberes.)</li><li><i>Le train <b>vient de</b> partir.</i> (El tren acaba de salir.)</li><li><i>Nous <b>venons d'</b>arriver.</i> (Acabamos de llegar.)</li></ul><p>El verbo <i>venir</i> es irregular: <i>je viens, tu viens, il vient, nous venons, vous venez, ils viennent</i>. No lo confundas con el passé composé: <i>Je viens de manger</i> (hace un momento) frente a <i>J'ai mangé</i> (en algún momento del pasado).</p>` },
    { tras: "Hablar de planes e intenciones", html: `<h3>Être en train de: la acción en curso</h3><p>Para decir que una acción <b>está ocurriendo ahora mismo</b>, el francés usa <b>être en train de</b> + infinitivo, que equivale a nuestro «estar + gerundio»: <i>Je suis en train de manger</i> (estoy comiendo), <i>Ils sont en train de jouer</i> (están jugando).</p><p>Muchas veces basta con el presente simple: <i>Qu'est-ce que tu fais ? — Je mange</i>. <i>Être en train de</i> se usa para <mark>insistir</mark> en que la acción está en desarrollo: <i>Ne me dérange pas, je suis en train de travailler !</i> Con <i>venir de</i>, <i>être en train de</i> y <i>aller</i> ya tienes los tres momentos de una acción: acaba de pasar, está pasando y va a pasar.</p>` },
    { tras: "Hablar de planes e intenciones", html: `<h3>Escribir tus planes para las vacaciones</h3><p>Para escribir sobre tus planes, organiza el texto en el tiempo y usa varios verbos diferentes después de <i>aller</i>. Modelo:</p><p><i>Cet été, je vais passer deux semaines en Bretagne avec ma famille. Nous allons prendre le train jusqu'à Rennes et ensuite nous allons louer des vélos. Je vais nager dans la mer, même si l'eau est froide ! Mon frère va faire du surf. Le soir, on va manger des crêpes. Je ne vais pas regarder mon portable, je vais profiter des vacances !</i></p><p>Fíjate en los conectores (<i>ensuite</i>, <i>le soir</i>), en la negación y en <mark>profiter de</mark> (aprovechar, disfrutar de), una expresión muy francesa.</p>` },
  ],
  videos: [
    ["El verbo aller", L.vid("Ru9pCQDV1eE", "Aller (to go): present tense", "Learn French With Alexa", 688000)],
    ["Los marcadores de futuro", L.vid("yYoOXFX_PMY", "Tiempos futuros en francés: diferencias entre futur simple y futur proche", "Français avec Pierre", 278852)],
  ],
  ejemplos: [
    ["Pon en futur proche: «Demain, nous visitons le musée.»", ["Aller con nous: allons.", "Visiter pasa a infinitivo.", "El marcador demain se mantiene."], "Demain, nous allons visiter le musée."],
    ["Pon en negativa: «Elle va se coucher tard.»", ["La negación rodea a va.", "El pronombre se queda delante del infinitivo.", "Ne + va + pas + se coucher."], "Elle ne va pas se coucher tard."],
    ["¿Futur proche o venir de? «El partido acaba de empezar.»", ["«Acaba de» indica algo que ha pasado hace un momento.", "Se usa venir de + infinitivo.", "Le match + vient de + commencer."], "Le match vient de commencer."],
  ],
  errores: [
    "Poner preposición: *je vais à manger → je vais manger.",
    "Conjugar el segundo verbo: *je vais mange → je vais manger.",
    "Colocar la negación alrededor del infinitivo: *je vais ne pas sortir.",
    "Usar en para «dentro de»: *en deux jours → dans deux jours.",
    "Poner el pronombre delante de aller: *je me vais lever → je vais me lever.",
  ],
  ejercicios: [
    ["Conjuga aller en presente.", "je vais, tu vas, il va, nous allons, vous allez, ils vont."],
    ["Pon en futur proche: «Tu joues au tennis.»", "Tu vas jouer au tennis."],
    ["Pon en futur proche: «Ils prennent le bus.»", "Ils vont prendre le bus."],
    ["Pon en negativa: «Nous allons travailler.»", "Nous n'allons pas travailler."],
    ["Traduce: «La semana que viene voy a ir a París».", "La semaine prochaine, je vais aller à Paris."],
    ["Completa: Je vais ___ parc et ensuite je vais ___ Léa.", "au parc, chez Léa."],
    ["Traduce: «Me voy a duchar».", "Je vais me doucher."],
    ["Traduce con venir de: «Acabo de llegar».", "Je viens d'arriver."],
    ["Traduce con être en train de: «Estamos estudiando».", "Nous sommes en train d'étudier."],
    ["Escribe tres planes para este fin de semana.", "Respuesta abierta. Ejemplo: Samedi, je vais jouer au foot. Dimanche, je vais aller chez mes cousins. Je ne vais pas faire mes devoirs !"],
  ],
  quiz: [
    ["«Acabamos de comer»:", ["Nous venons de manger.", "Nous allons manger.", "Nous avons venu manger."], 0, "Venir de."],
    ["«Están jugando»:", ["Ils sont en train de jouer.", "Ils vont jouer.", "Ils viennent de jouer."], 0, "En curso."],
    ["«Voy a casa de mi abuela»:", ["Je vais chez ma grand-mère.", "Je vais à ma grand-mère.", "Je vais en ma grand-mère."], 0, "Chez."],
    ["«Ils ___ de partir.» (venir)", ["viennent", "venent", "vont"], 0, "Irregular."],
    ["«Nos vamos a divertir»:", ["Nous allons nous amuser.", "Nous nous allons amuser.", "Nous allons amuser."], 0, "Pronombre delante del infinitivo."],
  ],
  tarjetas: [
    ["Venir de + infinitivo", "Pasado reciente: je viens de manger (acabo de comer)."],
    ["Être en train de", "Acción en curso: je suis en train de lire (estoy leyendo)."],
    ["Chez", "A casa de: je vais chez Paul, chez moi."],
  ],
});
