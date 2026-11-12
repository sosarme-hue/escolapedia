// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "Les vacances et les voyages",
  minutos: 50,
  objetivos: ["Hablar de destinos, transportes y actividades de vacaciones", "Describir el tiempo que hace", "Contar unas vacaciones pasadas y planear unas futuras"],
  claves: ["les vacances", "partir en vacances", "la plage", "la montagne", "en train / à pied", "il fait beau", "il pleut", "les saisons", "la valise", "les grandes vacances"],
  pregunta: {
    texto: "¿Por qué en francés se dice «en avion» y «en voiture», pero «à pied» y «à vélo»?",
    respuesta: "Por una regla sencilla: se usa <mark>en</mark> con los transportes en los que vas <b>dentro</b> (en avion, en train, en bus, en voiture) y <mark>à</mark> con aquellos en los que vas <b>encima</b> o por tus propios medios (à pied, à vélo, à cheval, à moto). Es un buen truco para no equivocarse.",
  },
  bloques: [
    {
      html: `<h3>Destinos y alojamientos</h3><p>Para decir adónde vas de vacaciones: <i>Je pars en vacances <b>à la mer</b></i> (al mar), <i><b>à la montagne</b></i>, <i><b>à la campagne</b></i> (al campo), <i><b>à l'étranger</b></i> (al extranjero). Con países: <i><b>en</b> France</i>, <i><b>au</b> Maroc</i>, <i><b>aux</b> États-Unis</i>; con ciudades: <i><b>à</b> Rome</i>. Puedes alojarte <i>à l'hôtel</i>, <i>au camping</i>, <i>dans un gîte</i> (casa rural) o <mark>chez des amis</mark>.</p>`,
      svg: L.filas("Adónde vas de vacaciones", [
        ["à la mer", "al mar, a la playa", "var(--inf)"],
        ["à la montagne", "a la montaña", "var(--leaf)"],
        ["à la campagne", "al campo", "var(--pen)"],
        ["à l'étranger", "al extranjero", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Los medios de transporte</h3><p>Se viaja <b>en</b> con los transportes cerrados: <i>en voiture</i> (en coche), <i>en train</i>, <i>en bus</i>, <i>en car</i> (autocar), <i>en avion</i>, <i>en bateau</i>, <i>en métro</i>. Se usa <b>à</b> con los abiertos o cuando vas por tus medios: <i>à pied</i> (a pie), <i>à vélo</i>, <i>à moto</i>, <i>à cheval</i>. El verbo más útil es <mark>prendre</mark>: <i>Je prends le train</i>, <i>Nous prenons l'avion</i>.</p>`,
      svg: L.filas("En o à con los transportes", [
        ["en (dentro)", "en voiture, en train", "var(--pen)"],
        ["en (dentro)", "en avion, en bateau", "var(--inf)"],
        ["à (encima)", "à vélo, à moto", "var(--leaf)"],
        ["à (sin vehículo)", "à pied", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El tiempo que hace</h3><p>Para hablar del tiempo se usa <b>il fait</b> + adjetivo: <i>Il fait beau</i> (hace buen tiempo), <i>il fait mauvais</i>, <i>il fait chaud</i> (calor), <i>il fait froid</i>. Con los fenómenos se usan verbos: <i>il pleut</i> (llueve), <i>il neige</i> (nieva). Y con <b>il y a</b>: <i>il y a du soleil</i>, <i>il y a du vent</i>, <i>il y a des nuages</i>. Para preguntar: <mark>Quel temps fait-il ?</mark></p>`,
      svg: L.filas("Quel temps fait-il ?", [
        ["il fait", "beau, chaud, froid", "var(--red)"],
        ["il pleut / neige", "llueve / nieva", "var(--inf)"],
        ["il y a", "du soleil, du vent", "var(--pen)"],
        ["la température", "il fait 25 degrés", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Las actividades de vacaciones</h3><p>En la playa: <i>se baigner</i> (bañarse), <i>nager</i>, <i>bronzer</i> (tomar el sol), <i>faire du surf</i>, <i>construire un château de sable</i>. En la montaña: <i>faire une randonnée</i> (excursión a pie), <i>faire du ski</i>, <i>faire de l'escalade</i>. En la ciudad: <i>visiter des musées</i>, <i>se promener</i> (pasear), <i>faire du shopping</i>, <i>prendre des photos</i>. Y en todas partes: <mark>se reposer</mark> (descansar).</p>`,
      svg: L.filas("Actividades según el destino", [
        ["Playa", "se baigner, bronzer", "var(--inf)"],
        ["Montaña", "faire une randonnée", "var(--leaf)"],
        ["Ciudad", "visiter des musées", "var(--pen)"],
        ["Siempre", "se reposer", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Hacer la maleta</h3><p>Antes de salir hay que <b>faire sa valise</b> (hacer la maleta). Para la playa: <i>un maillot de bain</i> (bañador), <i>une serviette</i> (toalla), <i>des lunettes de soleil</i>, <i>de la crème solaire</i>, <i>une casquette</i> (gorra). Para la montaña: <i>un pull</i>, <i>un anorak</i>, <i>des chaussures de marche</i>. Y no te olvides de <i>la carte d'identité</i> o <i>le passeport</i>, <mark>le billet</mark> (el billete) y el cargador del móvil: <i>le chargeur</i>.</p>`,
      svg: L.filas("En la maleta", [
        ["Playa", "maillot de bain, serviette", "var(--inf)"],
        ["Sol", "lunettes, crème solaire", "var(--red)"],
        ["Montaña", "pull, anorak", "var(--leaf)"],
        ["Papeles", "passeport, billet", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Unas vacaciones en tres tiempos",
    svg: L.columnas("Hablar de vacaciones en pasado, presente y futuro", [
      ["el año pasado", "PASSÉ COMPOSÉ", ["Je suis allé(e)", "à la mer."], "var(--muted)"],
      ["ahora", "PRÉSENT", ["Il fait beau,", "je me baigne."], "var(--pen)"],
      ["el próximo verano", "FUTUR PROCHE", ["Je vais aller", "à la montagne."], "var(--red)"],
    ]),
  },
  video: { id: "p8u_t7xlqSU", titulo: "45 frases básicas en francés para tu viaje a Francia", canal: "Ohlalafrancésconvalentin", vistas: 345980, megusta: 0, busqueda: "les vacances en français" },
  quiz: [
    { q: "«Voy en tren»:", o: ["Je vais en train.", "Je vais à train.", "Je vais au train."], a: 0, e: "Dentro: en." },
    { q: "«Voy a pie»:", o: ["Je vais à pied.", "Je vais en pied.", "Je vais au pied."], a: 0, e: "Sin vehículo: à." },
    { q: "«Hace calor»:", o: ["Il fait chaud.", "Il est chaud.", "Il a chaud."], a: 0, e: "Il fait + adjetivo." },
    { q: "«Llueve»:", o: ["Il pleut.", "Il fait pluie.", "Il y a pleut."], a: 0, e: "Verbo pleuvoir." },
    { q: "«Le maillot de bain» es…", o: ["el bañador", "la toalla", "la gorra"], a: 0, e: "Para bañarse." },
  ],
  examen: [
    { q: "«Me voy de vacaciones a Marruecos»:", o: ["Je pars en vacances au Maroc.", "Je pars en vacances en Maroc.", "Je pars en vacances à Maroc."], a: 0, e: "País masculino: au." },
    { q: "«Faire une randonnée» es…", o: ["hacer una excursión a pie", "hacer una carrera", "hacer la maleta"], a: 0, e: "En la montaña." },
    { q: "«¿Qué tiempo hace?»:", o: ["Quel temps fait-il ?", "Quelle heure est-il ?", "Quel temps est-il ?"], a: 0, e: "Fait-il." },
  ],
  feynman: ["Cuatro destinos con à la / à l'", "La regla de en y à con los transportes", "Cómo se dice el tiempo con il fait, il pleut e il y a", "Seis actividades de vacaciones"],
  mapa: mapa("VACANCES", "var(--eso)", [
    ["Destinos", "à la mer · en France", "var(--inf)"],
    ["Transportes", "en train · à vélo", "var(--pen)"],
    ["Tiempo", "il fait beau · il pleut", "var(--red)"],
    ["Actividades", "se baigner · se promener", "var(--leaf)"],
  ]),
  tarjetas: [
    ["en / à + transporte", "en voiture, en train, en avion; à pied, à vélo, à moto."],
    ["Il fait…", "beau, mauvais, chaud, froid: para hablar del tiempo."],
    ["Il pleut / il neige", "Llueve / nieva."],
    ["Partir en vacances", "Irse de vacaciones: je pars en vacances à la montagne."],
    ["Faire sa valise", "Hacer la maleta."],
  ],
  familias: ["Mirad juntos el parte meteorológico y decid en francés el tiempo de tres ciudades.", "Al preparar un viaje, haced la lista de la maleta en francés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: hablar de vacaciones, viajes y tiempo atmosférico; preposiciones con lugares y transportes, verbos impersonales, combinación de passé composé y futur proche (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A2 del MCER).",
    ideas: ["Parte meteorológico grabado en vídeo por parejas.", "Folleto turístico de una región francófona.", "Juego de la maleta: cada alumno repite la lista y añade un objeto."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Météo-France", url: "https://meteofrance.com/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Decir las estaciones, los meses y las fechas", "Contar unas vacaciones combinando pasado y futuro"],
  bloques: [
    { tras: "Destinos y alojamientos", html: `<h3>Las estaciones, los meses y la fecha</h3><p>Las estaciones son <i>le printemps</i> (primavera), <i>l'été</i> (verano), <i>l'automne</i> (otoño) y <i>l'hiver</i> (invierno). Se dice <b>en</b> été, <b>en</b> automne, <b>en</b> hiver, pero <mark>au printemps</mark>. Los meses: <i>janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</i>, todos en minúscula y con <i>en</i>: <i>en juillet</i>.</p><p>Para la fecha se usa el artículo <i>le</i> y el número cardinal, salvo el día 1, que es <b>premier</b>: <i>le 14 juillet</i>, <i>le 25 décembre</i>, <i>le 1<sup>er</sup> mai</i>. Para preguntar: <i>On est le combien aujourd'hui ?</i> o <i>Quelle est la date ?</i></p>` },
    { tras: "Los medios de transporte", html: `<h3>Los verbos partir, sortir y voyager</h3><p>Al hablar de viajes aparecen verbos que conviene conjugar bien:</p>${L.tb(["Persona", "partir", "voyager"], [["je", "pars", "voyage"], ["tu", "pars", "voyages"], ["il / elle / on", "part", "voyage"], ["nous", "partons", "voyageons"], ["vous", "partez", "voyagez"], ["ils / elles", "partent", "voyagent"]])}<p><i>Partir</i> (irse, salir de viaje) pierde la <i>t</i> en el singular, como <i>sortir</i> (<i>je sors</i>) y <i>dormir</i> (<i>je dors</i>). <i>Voyager</i> es como <i>manger</i>: <mark>nous voyageons</mark>, con <i>e</i>. En passé composé, <i>partir</i> va con <b>être</b> (<i>je suis parti(e)</i>) y <i>voyager</i>, con <b>avoir</b> (<i>j'ai voyagé</i>).</p>` },
    { tras: "El tiempo que hace", html: `<h3>Entender un parte meteorológico</h3><p>Los partes del tiempo usan el futuro y un vocabulario propio. Fíjate en este ejemplo:</p><p><i>Demain, dans le nord de la France, le ciel va être nuageux et il va pleuvoir. Dans le sud, il va faire beau et chaud : jusqu'à 32 degrés à Marseille. Attention aux orages en montagne ! Sur la côte atlantique, le vent va souffler fort.</i></p><p>Vocabulario útil: <i>le ciel</i> (el cielo), <i>nuageux</i> (nublado), <i>ensoleillé</i> (soleado), <i>un orage</i> (una tormenta), <i>une averse</i> (un chaparrón), <i>le brouillard</i> (la niebla), <i>la température</i>, <i>les degrés</i>. Los puntos cardinales: <mark>le nord, le sud, l'est, l'ouest</mark>.</p>` },
    { tras: "Las actividades de vacaciones", html: `<h3>Las vacaciones escolares en Francia</h3><p>En Francia, el curso escolar se divide con vacaciones cada seis o siete semanas, aproximadamente:</p>${L.tb(["Vacaciones", "Cuándo", "Duración"], [["la Toussaint", "finales de octubre", "dos semanas"], ["Noël", "Navidad", "dos semanas"], ["les vacances d'hiver", "febrero", "dos semanas"], ["les vacances de printemps", "abril", "dos semanas"], ["les grandes vacances", "julio y agosto", "unas ocho semanas"]])}<p>Las vacaciones de invierno y primavera se escalonan por <mark>zonas</mark> (A, B y C) para que no todo el país viaje a la vez. Muchos franceses van a la montaña a esquiar en invierno, y en verano las playas del Mediterráneo y del Atlántico se llenan. Una expresión típica de la vuelta al cole es <i>la rentrée</i>.</p>` },
    { tras: "Hacer la maleta", html: `<h3>Contar unas vacaciones: pasado y futuro</h3><p>Para hablar de tus vacaciones, combina los tiempos que ya conoces: el <b>passé composé</b> para lo que hiciste, el <b>presente</b> para describir, y el <b>futur proche</b> para tus planes. Modelo:</p><p><i>L'été dernier, je suis allée en Normandie avec mes parents. Nous avons pris la voiture et nous avons dormi dans un camping près de la mer. Il a fait beau presque tous les jours. J'ai visité le Mont-Saint-Michel et j'ai mangé des crêpes délicieuses. L'été prochain, nous allons partir à la montagne : je vais faire du rafting !</i></p><p>Fíjate en los marcadores (<i>l'été dernier</i>, <i>l'été prochain</i>) y en <mark>il a fait beau</mark>: el tiempo también se puede poner en passé composé.</p>` },
  ],
  videos: [
    ["Los medios de transporte", L.vid("87tQXSSBndw", "Les moyens de transport en français", "Français, C'est facile", 354413)],
    ["El tiempo que hace", L.vid("8bFwmU4ApNg", "Cómo hablar del tiempo en francés (nivel A1)", "La prof Elisabeth", 211044)],
  ],
  ejemplos: [
    ["Completa: «Cet été, je pars ___ Italie ___ avion, et ensuite je vais ___ Rome ___ pied.»", ["Italie es país femenino: en Italie.", "Avion es transporte cerrado: en avion.", "Rome es ciudad: à Rome; a pie: à pied."], "Je pars en Italie en avion, et ensuite je vais à Rome à pied."],
    ["Describe el tiempo: sol, 28 grados, un poco de viento.", ["Il fait beau / il y a du soleil.", "Il fait 28 degrés.", "Il y a un peu de vent."], "Il fait beau, il y a du soleil et un peu de vent. Il fait 28 degrés."],
    ["Pon en passé composé: «Nous partons à la mer et nous nous baignons.»", ["Partir lleva être: nous sommes partis.", "Se baigner es pronominal, lleva être: nous nous sommes baignés.", "Concordancia en masculino plural."], "Nous sommes partis à la mer et nous nous sommes baignés."],
  ],
  errores: [
    "Decir *à avion o *en pied: en avion, à pied.",
    "Decir *il est chaud para el tiempo: il fait chaud.",
    "Decir *en printemps: la forma correcta es au printemps.",
    "Escribir los meses con mayúscula: *Juillet → juillet.",
    "Usar avoir con partir en pasado: *j'ai parti → je suis parti(e).",
  ],
  ejercicios: [
    ["Traduce: al mar, a la montaña, al extranjero.", "à la mer, à la montagne, à l'étranger."],
    ["Completa: Je vais ___ bus, ___ vélo et ___ train.", "en bus, à vélo, en train."],
    ["Escribe tres frases sobre el tiempo de hoy.", "Respuesta abierta. Ejemplo: Il fait froid. Il y a des nuages. Il ne pleut pas."],
    ["Escribe las cuatro estaciones con su preposición.", "au printemps, en été, en automne, en hiver."],
    ["Escribe la fecha: 1 de mayo y 14 de julio.", "le 1er mai, le 14 juillet."],
    ["Conjuga partir con je, nous e ils.", "je pars, nous partons, ils partent."],
    ["Escribe cinco cosas que pones en la maleta para la playa.", "un maillot de bain, une serviette, des lunettes de soleil, de la crème solaire, une casquette."],
    ["Traduce: «El verano pasado fui a Francia en tren».", "L'été dernier, je suis allé(e) en France en train."],
    ["Traduce: «El verano que viene voy a hacer surf».", "L'été prochain, je vais faire du surf."],
    ["Escribe un mensaje de tres frases desde tus vacaciones.", "Respuesta abierta. Ejemplo: Coucou ! Je suis à la plage avec mes cousins. Il fait très chaud et on se baigne tous les jours. Bisous !"],
  ],
  quiz: [
    ["«Au printemps» significa…", ["en primavera", "en verano", "en otoño"], 0, "Excepción con au."],
    ["«Il y a du brouillard» significa…", ["hay niebla", "hay tormenta", "hay sol"], 0, "Brouillard = niebla."],
    ["«Nous ___ (voyager) en été.»", ["voyageons", "voyagons", "voyagez"], 0, "Como manger."],
    ["Las grandes vacances son en…", ["julio y agosto", "diciembre", "abril"], 0, "Verano."],
    ["«La rentrée» es…", ["la vuelta al cole", "la entrada del hotel", "el regreso en tren"], 0, "Septiembre."],
  ],
  tarjetas: [
    ["Estaciones", "au printemps, en été, en automne, en hiver."],
    ["Fechas", "le 14 juillet; el día 1: le premier (1er)."],
    ["Partir", "je pars, nous partons, ils partent; pasado: je suis parti(e)."],
  ],
});
