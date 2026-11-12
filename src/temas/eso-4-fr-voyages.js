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
