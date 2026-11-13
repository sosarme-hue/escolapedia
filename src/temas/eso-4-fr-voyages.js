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

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Un été en Interrail", `<p>«<i>L'été dernier, je suis parti en Interrail avec deux amis. Nous avons pris le train à Barcelone et nous sommes allés d'abord à Montpellier, puis à Lyon et enfin en Suisse. À Genève, nous avons dormi dans une auberge de jeunesse très sympa, au bord du lac. Le troisième jour, notre train avait deux heures de retard et nous avons raté la correspondance pour Zurich ! Heureusement, un employé de la gare nous a aidés et nous avons pris le train suivant. Il faisait très chaud, les paysages étaient magnifiques et nous avons rencontré des jeunes de partout. C'était le meilleur voyage de ma vie.</i>»</p><p>Marc tiene 17 años y cuenta su primer viaje sin padres. En su relato aparecen casi todos los contenidos de este tema: las <b>preposiciones con lugares</b> (<i>à Genève, en Suisse</i>), los <b>transportes</b>, el <b>alojamiento</b>, un <b>problema</b> que hay que resolver en la estación y la combinación de <b>passé composé</b> e <b>imparfait</b> para contar lo que pasó.</p><p>Viajar por países francófonos (Francia, Bélgica, Suiza, Quebec, Marruecos, Senegal…) es una de las mejores maneras de practicar el idioma. Al final del tema serás capaz de organizar un viaje, resolver situaciones en la estación, el hotel o el restaurante, y contarlo después.</p>`],
  mas: [
    ["<h3>Preposiciones con lugares</h3>", `<p>¿Cómo sabes si un país es femenino? La mayoría de los que acaban en <b>-e</b> lo son: <i>la France, l'Espagne, l'Italie, la Belgique, la Suisse, l'Allemagne</i>. Excepciones masculinas: <i>le Mexique, le Cambodge, le Mozambique</i>. Los demás suelen ser masculinos: <i>le Canada, le Japon, le Portugal, le Maroc, le Sénégal, le Brésil</i>. Los plurales llevan <b>aux</b>: <i>aux États-Unis, aux Pays-Bas</i>. Ante vocal, los masculinos usan <b>en</b>: <i>en Irak, en Iran</i>. Para islas pequeñas y algunas regiones, <i>à</i>: <i>à Cuba, à Malte</i>.</p>`],
    ["<h3>Medios de transporte</h3>", `<p>Verbos útiles con los transportes: <i>prendre le train / le bus</i> (coger), <i>monter dans</i> (subir a), <i>descendre de</i> (bajar de), <i>rater</i> (perder: «J'ai raté le bus»), <i>changer à</i> (hacer transbordo: «Il faut changer à Lyon»), <i>conduire</i> (conducir). Y algunas palabras de la estación: <i>le quai</i> (andén), <i>la voie</i> (vía), <i>la correspondance</i> (enlace), <i>le TGV</i> (tren de alta velocidad). Antes de subir al tren, en Francia había que <i>composter son billet</i> (validarlo).</p>`],
    ["<h3>En la estación y en el hotel</h3>", `<p>Al reservar un hotel, piensa en las preguntas que te harán y que tú harás: «C'est pour combien de nuits ?», «Pour combien de personnes ?», «Le petit-déjeuner est compris ?» (¿está incluido?), «À quelle heure faut-il libérer la chambre ?», «Est-ce qu'il y a le wifi ?». Y para pedir: «une chambre double / simple», «avec salle de bains», «avec vue sur la mer», «au rez-de-chaussée» (planta baja). Para pagar: «Je peux payer par carte ?».</p>`],
    ["<h3>Pedir y dar direcciones</h3>", `<p>Otras expresiones para orientarse: <i>à côté de</i> (al lado de), <i>en face de</i> (enfrente de), <i>près de / loin de</i> (cerca / lejos de), <i>entre</i> (entre), <i>au coin de la rue</i> (en la esquina), <i>au bout de la rue</i> (al final de la calle), <i>traverser le pont / la place</i> (cruzar). Para preguntar la distancia: «C'est loin ?» — «Non, c'est à cinq minutes à pied». Y si no entiendes: «Vous pouvez répéter plus lentement, s'il vous plaît ?».</p>`],
    ["<h3>Contar un viaje</h3>", `<p>Recuerda el reparto: el <b>passé composé</b> cuenta los hechos que hacen avanzar la historia («Nous avons pris le train», «Nous avons raté la correspondance»), y el <b>imparfait</b> describe el decorado (el tiempo, el paisaje, cómo te sentías): «Il faisait chaud», «Les paysages étaient magnifiques». Para ordenar el relato, usa marcadores temporales: <i>le premier jour, le lendemain</i> (al día siguiente), <i>deux jours plus tard, à la fin du voyage</i>. Y para valorar: «C'était génial / inoubliable / un peu décevant».</p>`],
  ],
  svgs: [
    ["<h3>Ir a y venir de</h3>", "Ir a y venir de", [["Ciudad", "à Paris · de Paris"], ["País femenino", "en France · de France"], ["País masculino", "au Japon · du Japon"], ["País plural", "aux USA · des USA"]]],
    ["<h3>Tipos de alojamiento y reservas</h3>", "Tipos de alojamiento", [["l'hôtel", "hotel"], ["l'auberge de jeunesse", "albergue juvenil"], ["le camping", "camping"], ["le gîte", "casa rural"]]],
    ["<h3>En el aeropuerto</h3>", "En el aeropuerto", [["l'enregistrement", "facturación"], ["la carte d'embarquement", "embarque"], ["la porte", "puerta de embarque"], ["le retard", "retraso"]]],
    ["<h3>En el restaurante</h3>", "En el restaurante", [["Llegar", "Une table pour deux ?"], ["Pedir", "Je vais prendre…"], ["Pagar", "L'addition, svp."]]],
    ["<h3>Cuando algo sale mal</h3>", "Cuando algo sale mal", [["Pérdida", "J'ai perdu mon passeport."], ["Robo", "On m'a volé mon sac."], ["Ayuda", "Pouvez-vous m'aider ?"]]],
    ["<h3>Escribir una postal</h3>", "Partes de una postal", [["Saludo", "Coucou Léa !"], ["Dónde estás", "Je suis à Nice."], ["Qué haces", "Il fait beau…"], ["Despedida", "Grosses bises"]]],
  ],
  bloques: [
    { tras: "<h3>Ir a y venir de</h3>", html: `<h3>El pronombre y para los lugares</h3><p>Para no repetir un lugar que ya se ha mencionado, el francés usa el pronombre <b>y</b> (allí). Sustituye a un complemento de lugar introducido por <i>à, en, au, aux, dans, chez, sur</i>:</p><ul><li>«Tu vas <b>à Paris</b> cet été ?» — «Oui, j'<b>y</b> vais en juillet.»</li><li>«Vous êtes allés <b>en Belgique</b> ?» — «Oui, nous <b>y</b> sommes allés l'année dernière.»</li><li>«Elle habite <b>au Canada</b> depuis longtemps ?» — «Elle <b>y</b> habite depuis deux ans.»</li></ul><p>En cambio, para el lugar de donde se viene (<i>de, du, des</i>) se usa <b>en</b>: «Tu viens <b>de Londres</b> ?» — «Oui, j'<b>en</b> viens.»</p><p>La posición es la misma que la de los otros pronombres: delante del verbo conjugado («J'<b>y</b> vais»), delante del auxiliar en passé composé («J'<b>y</b> suis allé»), delante del infinitivo («Je vais <b>y</b> aller») y en negativa entre <i>ne</i> y el verbo («Je n'<b>y</b> vais pas»). En el imperativo afirmativo va detrás: «Vas-<b>y</b> !» (¡venga, ve!), una expresión muy frecuente para animar a alguien.</p><p>Fíjate en la expresión <b>il y a</b> (hay), que contiene este mismo pronombre.</p>`, svg: ["El pronombre y", [["Presente", "J'y vais."], ["Passé composé", "J'y suis allé."], ["Infinitivo", "Je vais y aller."], ["Imperativo", "Vas-y !"]]] },
    { tras: "<h3>Tipos de alojamiento y reservas</h3>", html: `<h3>Planificar el viaje: proyectos y futuro</h3><p>Para hablar de un viaje que todavía no has hecho, necesitas expresar <b>planes e intenciones</b>. Hay varias formas:</p><ul><li><b>Futur proche</b> (<i>aller</i> + infinitivo) para planes ya decididos: «Cet été, <b>je vais partir</b> en Bretagne.»</li><li><b>Futur simple</b> para lo que ocurrirá, sobre todo en textos escritos o planes más lejanos: «Nous <b>prendrons</b> le train à 8 heures et nous <b>arriverons</b> à midi.»</li><li><b>Avoir l'intention de</b> + infinitivo (tener intención de), <b>penser</b> + infinitivo (pensar hacer), <b>avoir envie de</b> (tener ganas de): «J'ai envie de visiter Montréal.»</li><li><b>Si</b> + presente, futur simple para las condiciones: «<b>S'il fait beau</b>, nous <b>irons</b> à la plage.»</li></ul><p>Al planificar, también hay que hablar de presupuesto y documentos: <i>le budget</i>, <i>la carte d'identité</i>, <i>le passeport</i>, <i>la carte européenne d'assurance maladie</i> (tarjeta sanitaria europea), <i>réserver à l'avance</i>, <i>faire sa valise</i> (hacer la maleta), <i>emporter</i> (llevarse).</p><p>Ejemplo: «Dans un mois, je vais partir à Bruxelles avec ma classe. Nous prendrons l'avion et nous dormirons dans une auberge de jeunesse. J'ai envie de goûter les gaufres !»</p>`, svg: ["Hablar de planes de viaje", [["Futur proche", "Je vais partir."], ["Futur simple", "Nous prendrons le train."], ["Ganas", "J'ai envie de…"], ["Si + présent", "S'il fait beau, on ira…"]]] },
    { tras: "<h3>Cuando algo sale mal</h3>", html: `<h3>Pedir con cortesía y reclamar</h3><p>En los viajes es importante saber pedir las cosas con <b>educación</b>, sobre todo cuando hay que reclamar. El francés usa mucho el <b>conditionnel de politesse</b>, que suaviza las peticiones:</p><ul><li><b>Je voudrais</b> une chambre plus calme (querría).</li><li><b>Pourriez-vous</b> m'aider, s'il vous plaît ? (¿podría usted…?)</li><li><b>Est-ce que vous pourriez</b> changer ma réservation ?</li><li><b>J'aimerais</b> parler au responsable (me gustaría).</li><li><b>Ce serait possible de</b>… ? (¿sería posible…?)</li></ul><p>Para <b>reclamar</b> sin perder la cortesía: «Excusez-moi, mais il y a un problème avec ma chambre : la douche ne marche pas», «Je suis désolé, mais ce n'est pas ce que j'ai commandé», «Il y a une erreur dans l'addition». Y para agradecer la solución: «Merci beaucoup, c'est très gentil», «Je vous remercie de votre aide».</p><p>Recuerda usar <b>vous</b> con desconocidos y empleados (recepcionistas, camareros, revisores). Empezar con <i>Bonjour</i> y terminar con <i>Merci, au revoir</i> es casi obligatorio en Francia: entrar en una tienda sin saludar se considera de mala educación.</p>`, svg: ["Pedir y reclamar con cortesía", [["Querría", "Je voudrais…"], ["¿Podría…?", "Pourriez-vous… ?"], ["Problema", "Il y a une erreur."], ["Gracias", "C'est très gentil."]]] },
    { html: `<h3>Viajar de forma responsable</h3><p>Hoy se habla mucho del <b>tourisme durable</b> (turismo sostenible) o <b>tourisme responsable</b>: viajar respetando el medio ambiente, la cultura local y a los habitantes del lugar. En francés puedes dar consejos y opinar sobre este tema:</p><ul><li><b>Transporte</b>: «Il vaut mieux prendre le train que l'avion pour les petites distances», «L'avion pollue beaucoup».</li><li><b>Residuos</b>: «Il ne faut pas jeter ses déchets», «Emporte une gourde (cantimplora) réutilisable».</li><li><b>Economía local</b>: «Achetez des produits locaux», «Mangez dans les petits restaurants du quartier».</li><li><b>Respeto</b>: «Respectez les coutumes et les habitants», «Ne faites pas de bruit la nuit».</li></ul><p>Francia, con casi 100 millones de visitantes al año, es el <b>país más visitado del mundo</b>, y algunos lugares sufren <b>le surtourisme</b> (masificación turística): el Mont-Saint-Michel, ciertos barrios de París o las calanques de Marsella limitan ya el número de visitantes. Lo mismo ocurre en ciudades españolas como Barcelona o Palma, así que es un buen tema para comparar y debatir.</p><p>Para debatir: «<b>D'un côté</b>, le tourisme crée des emplois ; <b>de l'autre</b>, il fait monter les prix des logements», «<b>Je pense qu'</b>il faudrait limiter le nombre de touristes».</p>`, svg: ["Turismo responsable", [["Transporte", "prendre le train"], ["Residuos", "une gourde réutilisable"], ["Local", "produits locaux"], ["Debate", "d'un côté… de l'autre"]]] },
  ],
  grupos: [3, 3, 3, 3, 3],
  ejemplos: [
    ["Responde sin repetir el lugar: «Tu es déjà allé en Suisse ?» (sí, el año pasado)", ["En Suisse → y.", "Passé composé: y delante del auxiliar."], "Oui, j'<b>y</b> suis allé l'année dernière."],
    ["Reclama en la recepción del hotel: la habitación es ruidosa y quieres cambiarla.", ["Saluda y expón el problema.", "Pide con conditionnel."], "Bonsoir. Excusez-moi, mais ma chambre est très bruyante. <b>Pourriez-vous</b> me donner une chambre plus calme, s'il vous plaît ?"],
    ["Cuenta un plan: «Si hace buen tiempo, iremos a la playa en bici.»", ["Si + presente.", "Futur simple en la principal.", "Bici: à vélo."], "<b>S'il fait</b> beau, nous <b>irons</b> à la plage à vélo."],
  ],
  errores: ["Confundir y y en con lugares: «J'en vais à Paris» ✗ → «J'y vais» ✓ (en solo para el lugar de procedencia: «J'en viens»)."],
  niveles: "bbmbbmmmaa",
  ejercicios: [
    ["b", "Completa con à, en, au o aux: ___ Lisbonne, ___ Portugal, ___ Allemagne, ___ Pays-Bas.", "<b>à</b> Lisbonne, <b>au</b> Portugal, <b>en</b> Allemagne, <b>aux</b> Pays-Bas."],
    ["b", "Traduce: «andén», «enlace», «perder el tren».", "le quai, la correspondance, rater le train."],
    ["b", "Sustituye con y: «Je vais à la plage.»", "J'<b>y</b> vais."],
    ["b", "Escribe tres tipos de alojamiento en francés.", "l'hôtel, l'auberge de jeunesse, le camping (o le gîte)."],
    ["b", "Traduce: «¿El desayuno está incluido?»", "Le petit-déjeuner est compris ?"],
    ["b", "Completa: «La pharmacie est ___ face ___ la banque.»", "<b>en</b> face <b>de</b> la banque."],
    ["b", "Escribe el saludo y la despedida de una postal a un amigo.", "Ejemplo: «Coucou Hugo !» … «Grosses bises»."],
    ["b", "Traduce: «Querría una habitación doble.»", "<b>Je voudrais</b> une chambre double."],
    ["m", "Responde con y en negativa: «Tu vas au cinéma ce soir ?»", "Non, je n'<b>y</b> vais pas."],
    ["m", "Pon en futur simple: «Nous prenons le train et nous arrivons à midi.»", "Nous <b>prendrons</b> le train et nous <b>arriverons</b> à midi."],
    ["m", "Completa: «S'il ___ (pleuvoir), nous ___ (visiter) le musée.»", "S'il <b>pleut</b>, nous <b>visiterons</b> le musée."],
    ["m", "Transforma en petición cortés: «Changez ma réservation !»", "<b>Pourriez-vous</b> changer ma réservation, s'il vous plaît ?"],
    ["m", "Traduce: «Hay un error en la cuenta.»", "Il y a une erreur dans l'addition."],
    ["m", "Responde con en: «Tu viens de Marseille ?» (sí)", "Oui, j'<b>en</b> viens."],
    ["m", "Da dos consejos de turismo responsable.", "Ejemplo: «Il vaut mieux prendre le train.» «Achetez des produits locaux.»"],
    ["m", "Elige passé composé o imparfait: «Il (faire) froid quand nous (arriver).»", "Il <b>faisait</b> froid quand nous <b>sommes arrivés</b>."],
    ["m", "Explica en francés cómo llegar del instituto a tu casa (3 instrucciones).", "Ejemplo: «Sortez du lycée, tournez à droite, continuez tout droit et traversez la place. C'est au coin de la rue.»"],
    ["m", "Traduce: «Tenemos que hacer transbordo en Lyon.»", "Il faut changer à Lyon. / Nous devons changer à Lyon."],
    ["a", "Escribe un correo (70 palabras) a un albergue juvenil para reservar dos noches para tres personas y hacer dos preguntas.", "Respuesta abierta: saludo formal (Madame, Monsieur), je voudrais réserver, fechas, número de personas, preguntas (petit-déjeuner compris ? wifi ?), Cordialement."],
    ["a", "Escribe el diálogo de una reclamación en un restaurante: el plato no es el que pediste.", "Ejemplo: «— Excusez-moi, mais ce n'est pas ce que j'ai commandé. J'avais demandé le poisson. — Oh, je suis désolé, je vous l'apporte tout de suite. — Merci, c'est très gentil.»"],
    ["a", "Cuenta un viaje real o imaginario (100 palabras) combinando passé composé e imparfait y cuatro marcadores temporales.", "Respuesta abierta: le premier jour, le lendemain, deux jours plus tard, à la fin; hechos en passé composé, descripciones en imparfait, valoración final con c'était."],
    ["a", "Planifica en 60 palabras un viaje de fin de curso a un país francófono: destino, transporte, alojamiento, actividades.", "Respuesta abierta con futur proche / futur simple, preposiciones correctas y vocabulario del tema."],
    ["a", "Corrige: «J'ai allé en Japon en avion et je en suis revenu hier.»", "Je <b>suis allé au</b> Japon en avion et j'<b>en</b> suis revenu hier."],
    ["a", "Opina (50 palabras) sobre la masificación turística con d'un côté… de l'autre.", "Respuesta abierta: d'un côté, le tourisme crée des emplois ; de l'autre, il pollue et fait monter les prix. Je pense qu'il faudrait…"],
    ["a", "Explica la diferencia entre «J'y vais» y «J'en viens».", "Y sustituye el lugar adonde se va (à, en, au…); en, el lugar de donde se viene (de, du…)."],
    ["a", "Escribe una postal (50 palabras) desde Quebec con las cuatro partes.", "Ejemplo: «Coucou Léa ! Je suis à Québec avec ma famille. Il fait froid mais c'est magnifique. Hier, nous avons visité le Vieux-Québec et nous avons mangé une poutine. Tu me manques ! Grosses bises, Marta.»"],
  ],
  cuartas: ["aux", "à la", "dans", "pare aquí", "un billete de primera clase", "en", "una jarra de vino", "¡Buen viaje!", "Je vous prie d'agréer…", "se ha adelantado", "à", "Il faut", "faire"],
  quiz: [
    ["«Tu vas à Rome ?» — «Oui, j'___ vais demain.»", ["y", "en", "le", "lui"], 0, "Y sustituye el lugar adonde se va."],
    ["«Je viens ___ États-Unis.»", ["des", "de", "du", "aux"], 0, "De + les = des."],
    ["«Le quai» es…", ["el andén", "la vía", "el billete", "la taquilla"], 0, "Le quai = andén."],
    ["«S'il fait beau, nous ___ à la plage.»", ["irons", "allons aller", "irions", "sommes allés"], 0, "Si + presente → futur simple."],
    ["Petición cortés:", ["Pourriez-vous m'aider ?", "Aidez-moi !", "Tu m'aides ?", "Il faut m'aider."], 0, "Conditionnel de politesse."],
    ["«Une auberge de jeunesse» es…", ["un albergue juvenil", "una casa rural", "un hotel de lujo", "un camping"], 0, "Alojamiento barato para jóvenes."],
    ["«J'ai raté le train» significa…", ["he perdido el tren", "he cogido el tren", "he reservado el tren", "he bajado del tren"], 0, "Rater = perder (un transporte)."],
    ["«La banque est ___ la poste.» (enfrente de)", ["en face de", "à côté", "loin", "entre de"], 0, "En face de."],
    ["«Le surtourisme» es…", ["la masificación turística", "el turismo rural", "el turismo de lujo", "una agencia de viajes"], 0, "Exceso de turistas."],
    ["«Il y a une erreur dans l'___.»", ["addition", "adition", "additions", "addiction"], 0, "L'addition = la cuenta."],
  ],
  examen: [
    ["«Nous ___ sommes allés l'été dernier.» (en Grèce)", ["y", "en", "la", "lui"], 0, "Y delante del auxiliar."],
    ["«Je vais au lycée ___ pied.»", ["à", "en", "au", "par"], 0, "À pied."],
    ["«J'___ envie de visiter Montréal.»", ["ai", "suis", "ait", "a"], 0, "Avoir envie de."],
    ["«Le petit-déjeuner est ___ ?» (incluido)", ["compris", "inclusif", "comprend", "dedans"], 0, "Compris."],
    ["«Le lendemain» significa…", ["al día siguiente", "el día anterior", "mañana por la mañana", "el último día"], 0, "Le lendemain."],
  ],
  tarjetas: [
    ["J'y vais / J'en viens", "Voy allí / vengo de allí."],
    ["Pourriez-vous… ?", "¿Podría usted…? (cortesía)."],
    ["rater le train", "Perder el tren."],
    ["le tourisme durable", "Turismo sostenible."],
  ],
  glosario: [
    ["la préposition de lieu", "à, en, au, aux: indican el lugar."],
    ["le pronom y", "Sustituye un lugar: J'y vais."],
    ["le billet aller-retour", "Billete de ida y vuelta."],
    ["le quai", "Andén."],
    ["la correspondance", "Enlace, transbordo."],
    ["l'auberge de jeunesse", "Albergue juvenil."],
    ["le gîte", "Casa rural."],
    ["l'enregistrement", "Facturación en el aeropuerto."],
    ["la carte d'embarquement", "Tarjeta de embarque."],
    ["l'addition", "La cuenta en el restaurante."],
    ["le conditionnel de politesse", "Je voudrais, pourriez-vous: peticiones corteses."],
    ["le surtourisme", "Masificación turística."],
    ["le tourisme durable", "Turismo sostenible y responsable."],
    ["la carte postale", "Postal."],
  ],
  situacion: {
    titulo: "Notre voyage de fin d'année en pays francophone",
    reto: "La clase quiere organizar un viaje de fin de curso de cinco días a un país francófono. Por grupos, cada equipo prepara una propuesta completa en francés y la presenta a la clase, que votará la mejor.",
    pasos: ["Elegid destino (Francia, Bélgica, Suiza, Quebec…) e investigad tres lugares que visitar.", "Planificad el transporte y el alojamiento, comparando precios y huella ecológica.", "Escribid el correo de reserva al alojamiento y un programa día a día en futuro.", "Representad dos escenas de problemas (estación, hotel o restaurante) resueltos con cortesía.", "Presentad la propuesta a la clase con un póster o diapositivas (3 minutos).", "Tras la votación, cada alumno escribe la postal que enviaría desde ese destino."],
    producto: "Una propuesta de viaje con programa, correo de reserva, escenas representadas y una postal.",
    evaluacion: ["Usa correctamente las preposiciones con lugares y el pronombre y.", "Expresa planes con futur proche, futur simple y si + presente.", "Resuelve situaciones de viaje con fórmulas de cortesía adecuadas.", "Tiene en cuenta criterios de turismo responsable."],
  },
  saberes: "Decret 175/2022 de Catalunya (Segona llengua estrangera, 4t d'ESO): viatges, interacció en situacions quotidianes i turisme responsable.",
  minutos: 100,
});
