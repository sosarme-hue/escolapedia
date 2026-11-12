// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "La maison et la ville",
  minutos: 50,
  objetivos: ["Nombrar las partes de la casa y los muebles", "Situar objetos con las preposiciones de lugar", "Hablar de los lugares de la ciudad y pedir direcciones"],
  claves: ["la maison", "l'appartement", "la chambre", "la cuisine", "il y a", "sur / sous / dans", "à côté de", "au / à la / aux", "la gare", "tournez à gauche"],
  pregunta: {
    texto: "Un francés te dice: «La pharmacie est en face de la gare, à côté du cinéma». ¿Sabrías encontrarla?",
    respuesta: "Sí: la farmacia está <mark>enfrente de</mark> la estación y <mark>al lado del</mark> cine. Fíjate en <i>du</i>: es la contracción de <i>de + le</i>, igual que en español «del» es <i>de + el</i>. Con las preposiciones de lugar y los nombres de la ciudad ya puedes moverte por cualquier ciudad francófona.",
  },
  bloques: [
    {
      html: `<h3>Las partes de la casa</h3><p>Puedes vivir en <b>une maison</b> (una casa) o en <b>un appartement</b> (un piso) dentro de <b>un immeuble</b> (un edificio). Las habitaciones (<i>les pièces</i>) son: <b>l'entrée</b>, <b>le salon</b> (el salón), <b>la salle à manger</b> (el comedor), <b>la cuisine</b>, <b>la chambre</b> (el dormitorio), <b>la salle de bains</b> y <b>les toilettes</b>. Fuera puede haber <b>un jardin</b>, <b>un balcon</b> o <b>un garage</b>. Ojo: <i>la chambre</i> es el dormitorio, no cualquier habitación.</p>`,
      svg: L.filas("Las habitaciones de la casa", [
        ["Le salon", "el salón", "var(--pen)"],
        ["La cuisine", "la cocina", "var(--leaf)"],
        ["La chambre", "el dormitorio", "var(--red)"],
        ["La salle de bains", "el baño", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Los muebles y «il y a»</h3><p>Para decir lo que hay en un lugar se usa <mark>il y a</mark> (hay): <i>Dans ma chambre, il y a un lit, un bureau et une armoire</i>. Otros muebles: <i>une chaise</i> (silla), <i>une table</i>, <i>un canapé</i> (sofá), <i>une étagère</i> (estantería), <i>une lampe</i>. En negativa, el artículo <i>un</i>, <i>une</i> o <i>des</i> se convierte en <b>de</b>: <i>Il n'y a pas <b>de</b> télé</i>.</p>`,
      svg: L.filas("Il y a / il n'y a pas de", [
        ["Afirmativa", "Il y a un lit.", "var(--leaf)"],
        ["Negativa", "Il n'y a pas de lit.", "var(--red)"],
        ["Pregunta", "Qu'est-ce qu'il y a ?", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Las preposiciones de lugar</h3><p>Para situar un objeto: <b>sur</b> (sobre), <b>sous</b> (debajo de), <b>dans</b> (dentro de), <b>devant</b> (delante de), <b>derrière</b> (detrás de), <b>entre</b> (entre), <b>à côté de</b> (al lado de), <b>en face de</b> (enfrente de), <b>près de</b> (cerca de) y <b>loin de</b> (lejos de). Ejemplo: <i>Le chat est <u>sous</u> le lit</i>. No confundas <mark>sur</mark> (encima) con <mark>sous</mark> (debajo): solo cambia una letra.</p>`,
      svg: L.filas("Preposiciones de lugar", [
        ["sur / sous", "encima / debajo", "var(--pen)"],
        ["devant / derrière", "delante / detrás", "var(--leaf)"],
        ["dans", "dentro de", "var(--red)"],
        ["à côté de", "al lado de", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Los lugares de la ciudad</h3><p>En la ciudad encontramos <b>la gare</b> (estación de tren), <b>la mairie</b> (ayuntamiento), <b>la poste</b> (correos), <b>la bibliothèque</b>, <b>le musée</b>, <b>le cinéma</b>, <b>le marché</b>, <b>la boulangerie</b> (panadería), <b>la pharmacie</b>, <b>l'hôpital</b>, <b>le collège</b> (instituto de 11 a 15 años) y <b>le lycée</b> (de 15 a 18). Para decir adónde vas se usa <i>à</i> con el artículo: <mark>au</mark> cinéma, <mark>à la</mark> gare, <mark>à l'</mark>hôpital, <mark>aux</mark> toilettes.</p>`,
      svg: L.filas("Ir a un lugar: à + artículo", [
        ["à + le = au", "Je vais au cinéma.", "var(--pen)"],
        ["à + la", "Je vais à la gare.", "var(--leaf)"],
        ["à + l'", "Je vais à l'hôpital.", "var(--red)"],
        ["à + les = aux", "Je vais aux toilettes.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Pedir y dar direcciones</h3><p>Para preguntar: <i>Excusez-moi, où est la gare ?</i> o <i>Pour aller à la gare, s'il vous plaît ?</i> Para responder se usa el <b>imperativo</b> con vous: <i>Allez <b>tout droit</b></i> (todo recto), <i>Tournez <b>à gauche</b> / <b>à droite</b></i>, <i>Prenez la <b>deuxième</b> rue</i>, <i>Traversez la place</i>. Y para terminar: <i>C'est <mark>au bout de</mark> la rue</i> (al final de la calle).</p>`,
      svg: L.dialogo("Pedir una dirección", [
        ["Turista", "Pardon, où est la poste ?", "var(--pen)"],
        ["Vecina", "Allez tout droit et tournez à droite.", "var(--red)"],
        ["Turista", "Merci beaucoup !", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Dónde está el gato?",
    svg: L.columnas("Cuatro preposiciones de lugar", [
      ["encima", "SUR", ["Le chat est", "sur le lit."], "var(--pen)"],
      ["debajo", "SOUS", ["Le chat est", "sous la table."], "var(--leaf)"],
      ["dentro", "DANS", ["Le chat est", "dans la boîte."], "var(--red)"],
      ["al lado", "À CÔTÉ DE", ["Le chat est", "à côté du canapé."], "var(--inf)"],
    ]),
  },
  video: { id: "OS40JObvjSo", titulo: "Vocabulaire: la maison (pièces et étages)", canal: "Maprofde FLE", vistas: 372197, megusta: 0, busqueda: "la maison en français" },
  quiz: [
    { q: "«La chambre» es…", o: ["el dormitorio", "la cámara", "la cocina"], a: 0, e: "Falso amigo." },
    { q: "«Debajo de la mesa»:", o: ["sous la table", "sur la table", "dans la table"], a: 0, e: "Sous = debajo." },
    { q: "«Voy al cine»:", o: ["Je vais au cinéma.", "Je vais à le cinéma.", "Je vais à la cinéma."], a: 0, e: "à + le = au." },
    { q: "«No hay sofá»:", o: ["Il n'y a pas de canapé.", "Il n'y a pas un canapé.", "Il y a pas canapé."], a: 0, e: "Negativa: de." },
    { q: "«Gire a la izquierda»:", o: ["Tournez à gauche.", "Tournez à droite.", "Allez tout droit."], a: 0, e: "Gauche = izquierda." },
  ],
  examen: [
    { q: "«La boulangerie» es…", o: ["la panadería", "la biblioteca", "la carnicería"], a: 0, e: "Le pain, el pan." },
    { q: "«Al lado del cine»:", o: ["à côté du cinéma", "à côté de le cinéma", "à côté le cinéma"], a: 0, e: "de + le = du." },
    { q: "«Le lycée» en Francia es para alumnos de…", o: ["15 a 18 años", "6 a 11 años", "11 a 15 años"], a: 0, e: "Le collège: 11-15." },
  ],
  feynman: ["Seis habitaciones de la casa en francés", "Cómo se usa il y a en afirmativa y negativa", "Ocho preposiciones de lugar", "Cómo se pide y se da una dirección"],
  mapa: mapa("MAISON ET VILLE", "var(--eso)", [
    ["Casa", "salon · cuisine · chambre", "var(--pen)"],
    ["Il y a", "il n'y a pas de", "var(--leaf)"],
    ["Lugar", "sur · sous · à côté de", "var(--red)"],
    ["Ciudad", "au · à la · aux", "var(--inf)"],
  ]),
  tarjetas: [
    ["La chambre", "El dormitorio (no cualquier habitación: esa es la pièce)."],
    ["Il y a", "Hay. En negativa: il n'y a pas de."],
    ["Sur / sous", "Sur = encima de; sous = debajo de."],
    ["à + artículo", "au (à + le), à la, à l', aux (à + les)."],
    ["Direcciones", "Allez tout droit, tournez à gauche/à droite, prenez la première rue."],
  ],
  familias: ["Pedidle que os haga una visita guiada por casa en francés, nombrando cada habitación.", "Escondeos un objeto y que diga dónde está con preposiciones en francés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: describir la vivienda y el entorno urbano; preposiciones de lugar, il y a, artículos contractos, imperativo para dar instrucciones (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1-A2 del MCER).",
    ideas: ["Dibujar el plano de la casa ideal y describirlo.", "Búsqueda del tesoro en el aula con instrucciones en francés.", "Plano de un barrio y juego de rol de pedir direcciones."],
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
  objetivos: ["Usar los artículos contractos con de y los ordinales", "Describir tu habitación y tu barrio"],
  bloques: [
    { tras: "Las partes de la casa", html: `<h3>Los pisos y los números ordinales</h3><p>En Francia, la planta baja es <b>le rez-de-chaussée</b> y luego vienen <b>le premier étage</b>, <b>le deuxième étage</b>, etc. Para formar los <mark>ordinales</mark> se añade <b>-ième</b> al número: <i>deux → deuxième</i>, <i>trois → troisième</i>, <i>dix → dixième</i>. Hay algunos cambios: <i>cinq → cinquième</i> (se añade u), <i>neuf → neuvième</i> (f → v) y si el número acaba en <i>e</i>, se quita: <i>quatre → quatrième</i>, <i>onze → onzième</i>. El primero es <b>premier / première</b>.</p><p>Ejemplo: <i>J'habite au troisième étage</i> (vivo en el tercer piso). Los ordinales también sirven para dar direcciones: <i>Prenez la <u>troisième</u> rue à gauche</i>.</p>` },
    { tras: "Las preposiciones de lugar", html: `<h3>De + artículo: du, de la, de l', des</h3><p>Muchas preposiciones de lugar terminan en <b>de</b>: <i>à côté de</i>, <i>en face de</i>, <i>près de</i>, <i>loin de</i>, <i>au bout de</i>. Cuando la palabra siguiente lleva artículo, hay que hacer la contracción:</p>${L.tb(["Combinación", "Resultado", "Ejemplo"], [["de + le", "du", "à côté du lit"], ["de + la", "de la", "près de la fenêtre"], ["de + l'", "de l'", "en face de l'école"], ["de + les", "des", "loin des magasins"]])}<p>Es el mismo mecanismo que con <i>à</i> (au, aux). Solo se contraen las formas masculinas y la plural: con <mark>la</mark> y <mark>l'</mark> no hay contracción.</p>` },
    { tras: "Los muebles y «il y a»", html: `<h3>Describir tu habitación</h3><p>Para describir un espacio de forma ordenada, ve de la entrada hacia dentro o de un lado a otro, y combina <i>il y a</i>, las preposiciones y algún adjetivo. Modelo:</p><p><i>Ma chambre est petite mais très claire. Quand on entre, à droite, il y a mon lit. Au-dessus du lit, il y a des posters de mes groupes préférés. En face du lit, il y a mon bureau avec mon ordinateur, et à côté du bureau, une étagère pleine de livres. Il n'y a pas de télé, mais j'ai une grande fenêtre.</i></p><p>Fíjate en <mark>au-dessus de</mark> (encima de, sin tocar) y su contrario <i>au-dessous de</i> (debajo de). Y en adjetivos útiles para espacios: <i>grand, petit, clair</i> (luminoso), <i>sombre</i> (oscuro), <i>rangé</i> (ordenado), <i>en désordre</i> (desordenado).</p>` },
    { tras: "Los lugares de la ciudad", html: `<h3>Las tiendas y los servicios</h3><p>Muchos nombres de tiendas terminan en <b>-erie</b> y el vendedor en <b>-er / -ère</b>:</p>${L.tb(["Tienda", "Qué venden", "Vendedor"], [["la boulangerie", "le pain, les croissants", "le boulanger"], ["la pâtisserie", "les gâteaux", "le pâtissier"], ["la boucherie", "la viande", "le boucher"], ["la poissonnerie", "le poisson", "le poissonnier"], ["la librairie", "les livres", "le libraire"]])}<p>Ojo con el falso amigo: <i>la librairie</i> es la <mark>librería</mark> (donde se compran libros) y <i>la bibliothèque</i> es la <mark>biblioteca</mark> (donde se prestan). Para hablar de tu barrio: <i>Dans mon quartier, il y a une boulangerie, un parc et une bibliothèque, mais il n'y a pas de cinéma</i>.</p>` },
    { tras: "Pedir y dar direcciones", html: `<h3>El imperativo para dar instrucciones</h3><p>El <b>imperativo</b> se forma con el presente sin pronombre sujeto. Tiene tres personas: <i>tu</i>, <i>nous</i> y <i>vous</i>:</p>${L.tb(["Infinitivo", "tu", "nous", "vous"], [["tourner", "tourne", "tournons", "tournez"], ["prendre", "prends", "prenons", "prenez"], ["aller", "va", "allons", "allez"], ["traverser", "traverse", "traversons", "traversez"]])}<p>Fíjate en que con <i>tu</i>, los verbos en <b>-er</b> (y <i>aller</i>) <mark>pierden la -s</mark>: <i>tu tournes → tourne !</i>, <i>tu vas → va !</i> Con desconocidos usa siempre la forma de <i>vous</i>, que además es la más educada: <i>Prenez le bus numéro 3, puis descendez à la gare</i>.</p>` },
  ],
  videos: [
    ["Las preposiciones de lugar", L.vid("O9b3AWsifes", "Preposiciones de lugar en francés", "Aprenda Francés con Pascal", 130137)],
    ["Pedir y dar direcciones", L.vid("qqOIS9ccKeI", "Dar direcciones en francés (clase 45)", "Pédago FLE con Gladys Mambié", 65655)],
  ],
  ejemplos: [
    ["Describe la imagen: un gato encima del sofá y un perro debajo de la mesa.", ["Gato encima del sofá: sur le canapé.", "Perro debajo de la mesa: sous la table.", "Se usa il y a o être para situar."], "Le chat est sur le canapé et le chien est sous la table."],
    ["Completa: «La pharmacie est en face ___ (el) musée et à côté ___ (la) banque.»", ["de + le musée → du musée.", "de + la banque → de la banque (no hay contracción).", "Se mantiene el resto de la frase."], "La pharmacie est en face du musée et à côté de la banque."],
    ["Da la dirección: todo recto, la segunda calle a la derecha, el museo está al final.", ["Todo recto: allez tout droit.", "Segunda a la derecha: prenez la deuxième rue à droite.", "Al final: le musée est au bout de la rue."], "Allez tout droit, prenez la deuxième rue à droite : le musée est au bout de la rue."],
  ],
  errores: [
    "Decir *à le cinéma o *à les toilettes: se contrae en au y aux.",
    "Decir *à côté de le lit: se contrae en du.",
    "Confundir sur (encima) y sous (debajo).",
    "Usar un/une en negativa: *il n'y a pas une télé → il n'y a pas de télé.",
    "Confundir la librairie (librería) con la bibliothèque (biblioteca).",
  ],
  ejercicios: [
    ["Traduce: el salón, la cocina, el dormitorio, el baño.", "le salon, la cuisine, la chambre, la salle de bains."],
    ["Pon en negativa: «Il y a un jardin.»", "Il n'y a pas de jardin."],
    ["Completa: Je vais ___ marché, ___ piscine et ___ hôpital.", "au marché, à la piscine, à l'hôpital."],
    ["Completa: Le parc est près ___ (el) collège.", "près du collège."],
    ["Escribe el ordinal de: 3, 5, 9.", "troisième, cinquième, neuvième."],
    ["Traduce: «Vivo en el segundo piso».", "J'habite au deuxième étage."],
    ["Pon en imperativo con tu: tourner, aller, prendre.", "tourne, va, prends."],
    ["¿Qué venden en la boucherie y en la poissonnerie?", "En la boucherie, carne; en la poissonnerie, pescado."],
    ["Escribe dónde está tu mochila ahora con una preposición.", "Respuesta abierta. Ejemplo: Mon sac est sous ma chaise."],
    ["Describe tu barrio en dos frases.", "Respuesta abierta. Ejemplo: Dans mon quartier, il y a un parc et une boulangerie. Il n'y a pas de cinéma."],
  ],
  quiz: [
    ["«La planta baja»:", ["le rez-de-chaussée", "le premier étage", "le sous-sol"], 0, "El primer piso es le premier étage."],
    ["Ordinal de «neuf»:", ["neuvième", "neufième", "nouvième"], 0, "f → v."],
    ["Imperativo de «aller» con tu:", ["va", "vas", "allez"], 0, "Pierde la s."],
    ["«Lejos de las tiendas»:", ["loin des magasins", "loin de les magasins", "loin aux magasins"], 0, "de + les = des."],
    ["«La librairie» es…", ["la librería", "la biblioteca", "la papelería"], 0, "Falso amigo."],
  ],
  tarjetas: [
    ["Ordinales", "Número + -ième: deuxième, troisième; premier/première."],
    ["de + artículo", "du (de + le), de la, de l', des (de + les)."],
    ["Imperativo", "tourne, tournons, tournez; con tu, los verbos en -er pierden la s."],
  ],
});
