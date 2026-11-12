// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Les voyages",
  minutos: 35,
  objetivos: ["Usar las preposiciones con países y ciudades", "Desenvolverse en la estación, el hotel y pidiendo direcciones", "Contar un viaje en pasado"],
  claves: ["en / au / aux / à", "moyens de transport", "la gare", "l'hôtel", "demander son chemin", "les vacances"],
  pregunta: {
    texto: "«Je vais en France», «Je vais au Portugal» y «Je vais à Paris». ¿Por qué tres preposiciones distintas si en español siempre es «a»?",
    respuesta: "Porque en francés depende de lo que viene detrás: <mark>en</mark> para países femeninos (la France), <mark>au</mark> para masculinos (le Portugal), <mark>aux</mark> para plurales (les États-Unis) y <mark>à</mark> para ciudades. Es el primer paso para hablar de viajes.",
  },
  bloques: [
    {
      html: `<h3>Preposiciones con lugares</h3><p><b>Ciudades</b>: à Paris, à Madrid. <b>Países femeninos</b> (casi todos los que acaban en -e): en France, en Espagne, en Italie. <b>Masculinos</b>: au Portugal, au Canada, au Maroc. <b>Plurales</b>: aux États-Unis, aux Pays-Bas.</p>`,
      svg: L.tabla("Preposiciones con ciudades y países", ["", "Exemple"], [
        ["à + ville", "à Lyon"], ["en + pays (f.)", "en Belgique"], ["au + pays (m.)", "au Japon"], ["aux + pays (pl.)", "aux États-Unis"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Medios de transporte</h3><p>Con vehículos en los que vas <b>dentro</b>, se usa <mark>en</mark>: en train, en avion, en voiture, en bus, en bateau. Con los que vas <b>encima</b> o andando, <mark>à</mark>: à vélo, à moto, à pied, à cheval.</p>`,
      svg: L.filas("Medios de transporte con en y con à", [
        ["en", "train · avion · voiture", "var(--pen)"], ["en", "bus · métro · bateau", "var(--pen)"],
        ["à", "vélo · moto · cheval", "var(--leaf)"], ["à", "pied (andando)", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>En la estación y en el hotel</h3><p><b>Gare</b>: <i>Un billet aller-retour pour Lyon, s'il vous plaît. À quelle heure part le train ? C'est quel quai ?</i> <b>Hôtel</b>: <i>J'ai réservé une chambre double pour deux nuits. Le petit-déjeuner est compris ?</i> Usa <mark>«Je voudrais…»</mark> para pedir con educación.</p>`,
      svg: L.dialogo("Diálogo en la taquilla de la estación", [
        ["voyageuse", "Je voudrais un aller-retour pour Lyon.", "var(--pen)"],
        ["employé", "Voilà. Le train part du quai 3.", "var(--leaf)"],
        ["voyageuse", "Merci beaucoup ! Bonne journée.", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Pedir y dar direcciones</h3><p>Para preguntar: <i>Pardon, où est la gare ? / Pour aller au musée, s'il vous plaît ?</i> Para indicar: <mark>allez tout droit</mark> (todo recto), <b>tournez à gauche / à droite</b>, <b>prenez la deuxième rue</b>, <i>c'est en face de / à côté de / près de…</i></p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa con indicaciones: tout droit, tournez à gauche, tournez à droite">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 170 V 20 M30 70 H 230" stroke="var(--line)" stroke-width="22"/>
        <path d="M130 160 V 80" stroke="var(--pen)" stroke-width="4"/><path d="M124 88 l 6 -10 l 6 10" fill="none" stroke="var(--pen)" stroke-width="4"/>
        <path d="M122 70 H 60" stroke="var(--leaf)" stroke-width="4"/><path d="M68 64 l -10 6 l 10 6" fill="none" stroke="var(--leaf)" stroke-width="4"/>
        <path d="M138 70 H 200" stroke="var(--red)" stroke-width="4"/><path d="M192 64 l 10 6 l -10 6" fill="none" stroke="var(--red)" stroke-width="4"/>
        <g ${F} font-size="12" font-weight="700">
          <text x="140" y="140" fill="var(--pen)">tout droit</text>
          <text x="28" y="50" fill="var(--leaf)">à gauche</text>
          <text x="180" y="50" fill="var(--red)">à droite</text>
        </g></svg>`,
    },
    {
      html: `<h3>Contar un viaje</h3><p>Se combinan <b>passé composé</b> para las acciones y <b>imparfait</b> para las descripciones: «L'été dernier, <i>je suis allé</i> en Bretagne avec ma famille. <i>Il faisait</i> beau et la mer <i>était</i> magnifique. <i>Nous avons visité</i> Saint-Malo et <i>nous avons mangé</i> des crêpes.»</p>`,
      svg: L.filas("Contar un viaje: acciones y descripciones", [
        ["Passé composé", "Je suis allé en Bretagne.", "var(--red)"],
        ["Imparfait", "Il faisait beau.", "var(--leaf)"],
        ["Passé composé", "Nous avons visité…", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Kit del viajero en francés",
    svg: L.columnas("Frases útiles para viajar: destino, transporte, alojamiento y orientación", [
      ["adónde", "DESTINATION", ["en France", "au Canada · à Nice"], "var(--pen)"],
      ["cómo", "TRANSPORT", ["en train", "à vélo · à pied"], "var(--leaf)"],
      ["dónde dormir", "HÔTEL", ["Je voudrais", "une chambre."], "var(--inf)"],
      ["por dónde", "CHEMIN", ["tout droit,", "à gauche"], "var(--red)"],
    ]),
  },
  video: { id: "bSLa53whIjE", titulo: "Parler des vacances d'été en français", canal: "La prof Elisabeth", vistas: 173317, megusta: 0, busqueda: "voyager en français vocabulaire vacances" },
  quiz: [
    { q: "«Je vais ___ Italie.»", o: ["au", "en", "à"], a: 1, e: "Italie es femenino: en." },
    { q: "«Nous partons ___ Canada.»", o: ["au", "en", "aux"], a: 0, e: "Le Canada es masculino: au." },
    { q: "«Je vais au lycée ___ vélo.»", o: ["en", "à", "au"], a: 1, e: "Vehículo en el que vas encima: à vélo." },
    { q: "«Tournez à gauche» significa…", o: ["gire a la derecha", "gire a la izquierda", "siga recto"], a: 1, e: "Gauche = izquierda." },
    { q: "«Un billet aller-retour» es…", o: ["un billete de ida y vuelta", "un billete de ida", "una reserva de hotel"], a: 0, e: "Aller = ida; retour = vuelta." },
  ],
  examen: [
    { q: "«Ils habitent ___ États-Unis.»", o: ["en", "au", "aux"], a: 2, e: "País plural: aux." },
    { q: "Forma educada de pedir algo:", o: ["Je veux", "Je voudrais", "Donne-moi"], a: 1, e: "Je voudrais = quisiera." },
    { q: "«Il ___ beau pendant les vacances.» (descripción)", o: ["a fait", "faisait", "fera"], a: 1, e: "Descripción en pasado: imparfait." },
  ],
  feynman: ["Las preposiciones con ciudades y países", "Cuándo se dice en train y cuándo à vélo", "Tres frases para la estación o el hotel", "Cómo dar indicaciones para llegar a un sitio"],
  mapa: mapa("LES VOYAGES", "var(--eso)", [
    ["Lieux", "à Paris · en France · au Maroc", "var(--pen)"],
    ["Transports", "en train · à pied", "var(--leaf)"],
    ["Hôtel / gare", "Je voudrais…", "var(--inf)"],
    ["Chemin", "tout droit · à gauche", "var(--red)"],
  ], 240),
  tarjetas: [
    ["En / au / aux / à", "en + país femenino, au + masculino, aux + plural, à + ciudad."],
    ["En train / à vélo", "En para vehículos en los que vas dentro; à para los de encima y a pie."],
    ["Aller-retour", "Billete de ida y vuelta."],
    ["Tout droit", "Todo recto."],
    ["Je voudrais…", "Quisiera…: forma educada de pedir."],
  ],
  familias: ["Planead en francés un viaje imaginario: destino, transporte y alojamiento.", "Si viajáis, pedidle que lea en voz alta los carteles en francés de aeropuertos o estaciones.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: transacciones en viajes, orientación en la ciudad y relato de experiencias (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2+ del MCER).",
    ideas: ["Simulación de taquilla y recepción de hotel por parejas.", "Juego de direcciones con el plano real de una ciudad francesa.", "Diario de un viaje soñado con passé composé e imparfait."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "France.fr, web oficial de turismo de Francia", url: "https://www.france.fr/fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar las preposiciones de origen (de, du, des)", "Desenvolverse en el aeropuerto, el restaurante y ante un problema", "Escribir una postal y un relato de viaje"],
  bloques: [
    { tras: "Preposiciones con lugares", html: `<h3>Ir a y venir de</h3><p>Igual que hay preposiciones para ir a un lugar, las hay para decir de dónde vienes:</p>${L.tb(["Lugar", "Ir / estar", "Venir de"], [["ciudad", "à Paris", "de Paris, d'Amsterdam"], ["país femenino", "en France", "de France"], ["país masculino", "au Maroc", "du Maroc"], ["país plural", "aux États-Unis", "des États-Unis"], ["región femenina", "en Bretagne", "de Bretagne"], ["isla pequeña", "à Cuba, à Malte", "de Cuba"]])}<p>Los países que empiezan por vocal usan <b>en</b> aunque sean masculinos: <i>en Iran, en Irak</i>. Y México es masculino: <i>au Mexique</i> (aunque acaba en -e). «Je viens <b>du</b> Portugal mais j'habite <b>en</b> Espagne.»</p>` },
    { tras: "En la estación y en el hotel", html: `<h3>En el aeropuerto</h3><p>Vocabulario esencial: <i>l'aéroport, le vol</i> (vuelo), <i>la carte d'embarquement</i> (tarjeta de embarque), <i>la porte</i> (puerta), <i>l'enregistrement</i> (facturación), <i>les bagages</i>, <i>la valise</i>, <i>le bagage à main</i>, <i>le contrôle de sécurité</i>, <i>le passeport</i>, <i>en retard / à l'heure / annulé</i>.</p><p>Frases útiles: «Où est l'enregistrement pour le vol AF 1234 ?», «Je voudrais un siège côté fenêtre / côté couloir», «Le vol a combien de retard ?», «J'ai perdu ma valise. Où est le service des bagages ?». Y lo que oirás por megafonía: «<b>Embarquement immédiat</b> porte 12» (embarque inmediato) o «Dernier appel pour les passagers…».</p>` },
    { tras: "En la estación y en el hotel", html: `<h3>En el restaurante</h3><ul><li>Llegar: «Bonsoir, une table pour quatre, s'il vous plaît.»</li><li>Pedir: «<b>Je voudrais</b> le menu à 18 euros.» / «<b>Pour moi</b>, le poulet avec des frites.» / «<b>Comme</b> boisson, une carafe d'eau.»</li><li>Preguntar: «Qu'est-ce que vous nous conseillez ?» / «Il y a des plats végétariens ?»</li><li>Pagar: «<b>L'addition</b>, s'il vous plaît.» / «Je peux payer par carte ?»</li></ul><p>En Francia, el <b>menu</b> es un conjunto cerrado a precio fijo (entrée + plat + dessert), y <b>la carte</b> es la lista completa de platos. El agua del grifo en jarra (<i>une carafe d'eau</i>) es gratuita, y la propina no es obligatoria porque el servicio está incluido.</p>` },
    { tras: "Pedir y dar direcciones", html: `<h3>Cuando algo sale mal</h3><p>En los viajes surgen problemas. Para explicarlos con educación:</p><ul><li>Avisar: «Excusez-moi, il y a un problème avec ma chambre : la douche <b>ne marche pas</b>.»</li><li>Quejarse: «Le chauffage est en panne», «Il y a trop de bruit», «La chambre n'est pas propre».</li><li>Pedir ayuda: «<b>Pourriez-vous</b> m'aider ?», «<b>Est-ce que je pourrais</b> changer de chambre ?»</li><li>Emergencias: «<b>Au secours !</b>», «J'ai perdu mon passeport», «On m'a volé mon portefeuille», «Appelez une ambulance !». El número de emergencias europeo es el <b>112</b>.</li></ul><p>El condicional (<i>pourriez, voudrais</i>) hace que cualquier petición suene más cortés.</p>` },
    { tras: "Contar un viaje", html: `<h3>Escribir una postal</h3><p>Una postal es breve, informal y en presente o passé composé. Modelo:</p><p><i>«Chère Marta,<br>Je t'écris de Marseille ! Nous sommes arrivés lundi et le temps est magnifique. Hier, nous avons visité le Vieux-Port et nous avons mangé une bouillabaisse délicieuse. Aujourd'hui, nous allons faire une excursion en bateau aux calanques. Demain, on part pour Nice. Tu me manques !<br>Grosses bises,<br>Pablo»</i></p><p>Estructura: saludo (<i>Cher / Chère</i>), dónde estás, qué tiempo hace, qué has hecho, qué vas a hacer y despedida informal (<i>Bises, Grosses bises, À bientôt</i>). Ojo: «Tu me manques» = te echo de menos.</p>` },
    { tras: "Medios de transporte", html: `<h3>Tipos de alojamiento y reservas</h3><p>Al planificar un viaje hay que elegir dónde dormir: <i>un hôtel</i> (con estrellas), <i>une auberge de jeunesse</i> (albergue juvenil, barato y con habitaciones compartidas), <i>un camping</i>, <i>une chambre d'hôtes</i> (casa rural con desayuno) o <i>un gîte</i> (casa rural que se alquila entera).</p><p>Para reservar por teléfono o por correo: «Je voudrais réserver <b>une chambre double</b> / <b>simple</b> pour trois nuits, du 5 au 8 août», «Le petit-déjeuner est compris ?», «Il y a le wifi ?», «C'est combien par nuit ?». Y al llegar: «Bonjour, j'ai une réservation au nom de García». Las palabras <i>la clé</i> (llave), <i>l'ascenseur</i> (ascensor), <i>le rez-de-chaussée</i> (planta baja) y <i>le premier étage</i> (primer piso) te sacarán de muchos apuros.</p>` },
  ],
  videos: [
    ["En la estación y en el hotel", L.vid("0qIJ5dQ-LYI", "Top French phrases for travel you need to know", "The Intrepid Guide", 488975)],
    ["Contar un viaje", L.vid("RnIz7y2htvQ", "Français B1 : expressions et lexique pour parler des vacances", "French School TV", 239355)],
  ],
  ejemplos: [
    ["Completa: «Mon père vient ___ Maroc, ma mère ___ Italie et nous habitons ___ Lyon.»", ["Maroc es masculino: de + le = du.", "Italie es femenino: de (sin artículo).", "Lyon es una ciudad: à."], "Mon père vient du Maroc, ma mère d'Italie et nous habitons à Lyon."],
    ["Pide en un restaurante: menú del día, un filete poco hecho y agua del grifo.", ["Fórmula cortés: Je voudrais…", "«Poco hecho» se dice saignant (à point = en su punto, bien cuit = muy hecho).", "Agua del grifo: une carafe d'eau."], "Je voudrais le menu du jour, avec un steak saignant, et une carafe d'eau, s'il vous plaît."],
    ["Cuenta en pasado: «llegamos el sábado, hacía calor, visitamos el castillo y comimos crepes».", ["Acciones: passé composé (nous sommes arrivés, nous avons visité, nous avons mangé).", "Descripción: imparfait (il faisait chaud).", "Arriver lleva être y concuerda con nous."], "Nous sommes arrivés samedi. Il faisait chaud. Nous avons visité le château et nous avons mangé des crêpes."],
  ],
  errores: [
    "Decir *je viens de le Portugal: de + le = du Portugal.",
    "Usar en con países masculinos: *en Canada → au Canada.",
    "Confundir le menu (precio fijo) con la carte (lista de platos).",
    "Pedir con «je veux»: suena brusco; mejor «je voudrais».",
    "Contar todo un viaje en imparfait: las acciones concretas van en passé composé (nous avons visité) y el imparfait queda para describir (il faisait beau).",
  ],
  ejercicios: [
    ["Completa: «Je pars ___ Suisse et ensuite ___ Pays-Bas.»", "en Suisse, aux Pays-Bas."],
    ["Completa: «Il revient ___ États-Unis.»", "des États-Unis."],
    ["¿Cómo pides un asiento de ventanilla?", "Je voudrais un siège côté fenêtre, s'il vous plaît."],
    ["¿Qué significa «embarquement immédiat»?", "Embarque inmediato: hay que ir ya a la puerta."],
    ["Pide la cuenta.", "L'addition, s'il vous plaît."],
    ["Explica un problema: el aire acondicionado no funciona.", "Excusez-moi, la climatisation ne marche pas (est en panne)."],
    ["Pide cambiar de habitación con cortesía.", "Est-ce que je pourrais changer de chambre, s'il vous plaît ?"],
    ["Traduce: «Te echo de menos.»", "Tu me manques."],
    ["Corrige: «Je voudrais aller en Mexique.»", "Je voudrais aller au Mexique (Mexique es masculino)."],
    ["Escribe una postal de tres frases desde París.", "Por ejemplo: «Chère Ana, je suis à Paris ! Hier, j'ai visité la tour Eiffel. Demain, on va au Louvre. Bises, Leo.»"],
  ],
  quiz: [
    ["«Je viens ___ Japon.»", ["du", "de", "au"], 0, "Japon es masculino."],
    ["«Une carafe d'eau» es…", ["agua del grifo en jarra", "agua con gas", "un café"], 0, "Gratis en Francia."],
    ["«Au secours !» significa…", ["¡Socorro!", "¡Salud!", "¡Adiós!"], 0, "Para emergencias."],
    ["Despedida informal en una postal:", ["Grosses bises", "Veuillez agréer…", "Cordialement"], 0, "Muchos besos."],
    ["«Le vol est annulé» significa que…", ["se ha cancelado", "llega a tiempo", "va con retraso"], 0, "Annulé = cancelado."],
  ],
  tarjetas: [
    ["Venir de", "de Paris, de France, du Maroc, des États-Unis."],
    ["Menu / carte", "Menu: precio fijo. Carte: lista de platos."],
    ["Tu me manques", "Te echo de menos."],
  ],
});
