// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "La literatura del segle XIX: la Renaixença",
  minutos: 40,
  objetivos: ["Explicar què va ser la Renaixença i per què va sorgir", "Conèixer els Jocs Florals i la «Oda a la pàtria»", "Identificar Verdaguer, Guimerà i Narcís Oller"],
  claves: ["Renaixença", "Romanticisme", "Jocs Florals", "Oda a la pàtria", "Verdaguer", "Guimerà", "Narcís Oller", "Realisme"],
  pregunta: {
    texto: "Durant segles, el català gairebé no es va fer servir per escriure literatura culta. Què creus que va passar al segle XIX perquè tornés amb força?",
    respuesta: "Va arribar la <mark>Renaixença</mark>: un moviment cultural que, inspirat pel Romanticisme, va voler <b>recuperar el català com a llengua literària</b>. Amb concursos com els Jocs Florals i autors com Verdaguer, el català va tornar a ser una llengua de cultura.",
  },
  bloques: [
    {
      html: `<h3>La Decadència i el renaixement</h3><p>Després del segle d'or medieval (Llull, March, <i>Tirant lo Blanc</i>), entre els segles XVI i XVIII l'ús literari culte del català va minvar: és l'època anomenada <b>Decadència</b>. Al segle XIX, el <mark>Romanticisme</mark>, que valorava les llengües i la història de cada poble, va impulsar-ne la recuperació.</p>`,
      svg: L.linea("Etapes de la literatura catalana fins a la Renaixença", [
        ["XIII-XV", "segle d'or: Llull, March, Tirant", "var(--pen)"],
        ["XVI-XVIII", "Decadència de l'ús culte", "var(--muted)"],
        ["1833", "Aribau: «Oda a la pàtria»", "var(--red)"],
        ["1859", "restauració dels Jocs Florals", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>L'inici: la «Oda a la pàtria»</h3><p>El 1833, <b>Bonaventura Carles Aribau</b> va publicar el poema <i>La pàtria</i>, conegut com a <mark>«Oda a la pàtria»</mark>, on expressa l'enyorança de la terra i de la llengua. Es considera el punt de partida simbòlic de la Renaixença.</p>`,
      svg: L.dialogo("Versos de la Oda a la pàtria d'Aribau", [
        ["Aribau (1833)", "En llemosí sonà lo meu primer vagit,", "var(--red)"],
        ["", "quan del mugró matern", "var(--red)"], ["", "la dolça llet bevia;", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Els Jocs Florals</h3><p>El <b>1859</b> es van restaurar a Barcelona els <mark>Jocs Florals</mark>, un certamen poètic d'origen medieval. Premiaven poemes sobre tres temes: <b>Pàtria, Fe i Amor</b>. Van donar prestigi al català i van fer conèixer nous autors. Qui guanyava els tres premis era nomenat <i>Mestre en Gai Saber</i>.</p>`,
      svg: L.filas("Els tres temes dels Jocs Florals", [
        ["Pàtria", "englantina d'or", "var(--red)"],
        ["Fe", "viola d'or i argent", "var(--pen)"],
        ["Amor", "flor natural", "var(--leaf)"],
      ], "Jocs Florals (1859)"),
    },
    {
      html: `<h3>Jacint Verdaguer</h3><p>És el gran poeta de la Renaixença. Va escriure els poemes èpics <mark><i>L'Atlàntida</i></mark> (1877), sobre el mite del continent enfonsat i l'origen de la península, i <mark><i>Canigó</i></mark> (1886), una llegenda pirinenca. També va escriure poesia religiosa i <i>Montserrat</i>. El seu català va modernitzar la llengua literària.</p>`,
      svg: L.tabla("Obres de Jacint Verdaguer", ["Obra", "Any"], [
        ["L'Atlàntida", "1877"], ["Canigó", "1886"], ["Pàtria", "1888"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Teatre i novel·la: Guimerà i Oller</h3><p><b>Àngel Guimerà</b> és el gran dramaturg: <mark><i>Terra baixa</i></mark> (1897) contrasta la puresa de la muntanya (Manelic) amb la corrupció de la plana (Sebastià); s'ha representat i traduït arreu del món. <b>Narcís Oller</b> és el gran novel·lista realista: <i>La papallona</i>, <i>La febre d'or</i> (sobre l'especulació a la borsa).</p>`,
      svg: L.filas("Guimerà i Oller", [
        ["Guimerà", "teatre: Terra baixa", "var(--red)"],
        ["Narcís Oller", "novel·la: La febre d'or", "var(--inf)"],
      ], "teatre i novel·la"),
    },
  ],
  figura: {
    titulo: "Els grans noms de la Renaixença",
    svg: L.eje("Obres clau de la Renaixença per ordre cronològic", [
      ["1833", "Aribau", ["Oda", "a la pàtria"], "var(--red)"],
      ["1859", "Jocs Florals", ["Pàtria,", "Fe i Amor"], "var(--leaf)"],
      ["1877", "Verdaguer", ["L'Atlàntida"], "var(--pen)"],
      ["1890", "Oller", ["La febre d'or"], "var(--inf)"],
      ["1897", "Guimerà", ["Terra baixa"], "var(--muted)"],
    ]),
  },
  video: { id: "xdIKGHPF6UE", titulo: "La Renaixença i el catalanisme polític", canal: "Flipa amb el David!", vistas: 98812, megusta: 0, busqueda: "la Renaixença literatura catalana" },
  quiz: [
    { q: "Què va ser la Renaixença?", o: ["Un moviment per recuperar el català com a llengua de cultura", "Una guerra del segle XIX", "Un estil d'arquitectura gòtica"], a: 0, e: "Moviment cultural del segle XIX." },
    { q: "Quin poema es considera l'inici simbòlic de la Renaixença?", o: ["Canigó", "Oda a la pàtria", "Terra baixa"], a: 1, e: "D'Aribau, publicat el 1833." },
    { q: "Quins eren els tres temes dels Jocs Florals?", o: ["Pàtria, Fe i Amor", "Mar, Terra i Cel", "Guerra, Pau i Amor"], a: 0, e: "El lema era Patria, Fides, Amor." },
    { q: "Qui va escriure L'Atlàntida i Canigó?", o: ["Guimerà", "Verdaguer", "Oller"], a: 1, e: "Jacint Verdaguer." },
    { q: "Terra baixa és una obra de…", o: ["teatre", "poesia èpica", "assaig"], a: 0, e: "Drama d'Àngel Guimerà (1897)." },
  ],
  examen: [
    { q: "Quin moviment europeu va impulsar la Renaixença?", o: ["El Romanticisme", "La Il·lustració", "El Barroc"], a: 0, e: "Valorava la llengua i la història de cada poble." },
    { q: "Narcís Oller és el gran novel·lista…", o: ["realista", "barroc", "medieval"], a: 0, e: "La febre d'or retrata la Barcelona de la borsa." },
    { q: "En quin any es van restaurar els Jocs Florals?", o: ["1859", "1714", "1936"], a: 0, e: "A Barcelona, el 1859." },
  ],
  feynman: ["Per què es parla de Decadència i de Renaixença", "Què van ser els Jocs Florals", "Dues obres de Verdaguer i de què tracten", "La importància de Terra baixa"],
  mapa: mapa("RENAIXENÇA", "var(--eso)", [
    ["Inici", "Aribau 1833 · Romanticisme", "var(--red)"],
    ["Jocs Florals", "1859 · Pàtria, Fe, Amor", "var(--leaf)"],
    ["Poesia", "Verdaguer: Canigó", "var(--pen)"],
    ["Teatre i novel·la", "Guimerà · Oller", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Renaixença", "Moviment del segle XIX que recupera el català com a llengua literària i de cultura."],
    ["Oda a la pàtria", "Poema d'Aribau (1833), inici simbòlic de la Renaixença."],
    ["Jocs Florals", "Certamen restaurat el 1859 amb els temes Pàtria, Fe i Amor."],
    ["Jacint Verdaguer", "Poeta de L'Atlàntida (1877) i Canigó (1886)."],
    ["Terra baixa", "Drama d'Àngel Guimerà (1897): la muntanya contra la plana."],
  ],
  familias: ["Llegiu junts uns versos de Canigó i busqueu al mapa els llocs que s'hi esmenten.", "Mireu un fragment d'una adaptació de Terra baixa i comenteu els personatges.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: la Renaixença en el seu context històric i cultural; lectura de fragments de Verdaguer, Guimerà i Oller (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Jocs Florals de l'aula amb els tres temes adaptats a l'actualitat.", "Lectura dramatitzada d'una escena de Terra baixa.", "Ruta virtual pels escenaris de Canigó."],
  },
  fuentes: [
    L.BOE,
    { t: "Associació d'Escriptors en Llengua Catalana: Jacint Verdaguer", url: "https://www.escriptors.cat/autors/verdaguerj" },
    { t: "Enciclopèdia.cat: la Renaixença", url: "https://www.enciclopedia.cat/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Relacionar la Renaixença amb el context històric del segle XIX", "Comentar un fragment de Verdaguer o de Guimerà", "Reconèixer els trets del Realisme i del Naturalisme en Narcís Oller"],
  bloques: [
    { tras: "La Decadència i el renaixement", html: `<h3>El context històric</h3><p>El segle XIX va transformar Catalunya. La <b>industrialització</b>, sobretot del tèxtil, va fer créixer ciutats com Barcelona, Sabadell o Terrassa i va crear una burgesia rica i una classe obrera nombrosa. El 1854 es van començar a enderrocar les muralles de Barcelona i el 1859 es va aprovar el <b>Pla Cerdà</b> de l'Eixample. Aquesta burgesia volia una cultura pròpia que mostrés la seva força. Al mateix temps, el <b>Romanticisme</b> europeu valorava el passat medieval, les tradicions populars i la llengua de cada poble com a expressió de la seva ànima. La suma d'aquests factors va fer possible la Renaixença, que més endavant va conduir al <b>catalanisme polític</b>.</p>` },
    { tras: "Els Jocs Florals", html: `<h3>Prosa, premsa i institucions</h3><p>La Renaixença no va ser només poesia. Es van fundar revistes i diaris en català, com <i>La Renaixensa</i> (1871) o el <i>Diari Català</i> (1879) de Valentí Almirall, el primer diari en català. Es van crear entitats excursionistes (la primera, el 1876) que recorrien el país per conèixer-ne el paisatge i la història, i es van recollir rondalles i cançons populars. Al País Valencià, <b>Teodor Llorente</b> i Lo Rat Penat (1878) van impulsar un moviment paral·lel, i a Mallorca ho van fer autors com <b>Marià Aguiló</b> i Josep Lluís Pons i Gallarza. Tot plegat va crear un públic lector en català.</p>` },
    { tras: "Jacint Verdaguer", html: `<h3>Canigó: llegenda i paisatge</h3><p><i>Canigó</i> (1886) és un poema èpic en dotze cants ambientat al Pirineu al segle XI, en temps de la Reconquesta. Explica l'amor entre <b>Gentil</b>, fill del comte Tallaferro, i <b>Flordeneu</b>, la reina de les fades. Gentil abandona el seu deure de cavaller per l'encís de les fades i el seu pare el mata. Al final, el monestir de Sant Martí del Canigó simbolitza el triomf del cristianisme i el naixement de Catalunya. L'obra destaca per les descripcions del paisatge pirinenc i per la riquesa del vocabulari: Verdaguer coneixia la llengua popular i va crear un model de català literari ric i modern.</p>` },
    { tras: "Teatre i novel·la: Guimerà i Oller", html: `<h3>Terra baixa: personatges i símbols</h3>${L.tb(["Personatge", "Representa", "Trets"], [["Manelic", "la muntanya (Terra alta)", "pastor ingenu, pur, fort i noble"], ["Marta", "la víctima que es redimeix", "dominada per Sebastià, s'enamora de Manelic"], ["Sebastià", "la plana (Terra baixa)", "amo ric, cruel i egoista"]])}<p>Sebastià casa Marta amb Manelic per continuar amb ella i tapar la relació. Quan Manelic descobreix la veritat, mata Sebastià («He mort el llop!») i fuig amb Marta cap a la muntanya. L'obra oposa la natura pura a la societat corrompuda, una idea romàntica que el públic europeu va entendre fàcilment.</p>` },
    { tras: "Teatre i novel·la: Guimerà i Oller", html: `<h3>Realisme i Naturalisme</h3><p>A la segona meitat del segle, la novel·la europea es torna <b>realista</b>: vol retratar la societat contemporània amb objectivitat, amb un narrador que ho sap tot i descripcions detallades. El <b>Naturalisme</b>, inspirat per Émile Zola, va més enllà i mostra com l'herència i l'ambient determinen la vida de les persones. <b>Narcís Oller</b>, admirat per Zola i per Galdós, n'és el gran representant català. A <i>La febre d'or</i> (1890-1892) retrata la Barcelona de l'especulació borsària a través de Gil Foix, que s'enriqueix i s'arruïna. A <i>La papallona</i> (1882) explica una història d'amor i d'engany. També cal esmentar <b>Marià Vayreda</b> (<i>La punyalada</i>) i les novel·les rurals.</p>` },
  ],
  videos: [
    ["Els Jocs Florals", L.vid("dM5SI7Mq8-U", "El Romanticisme i la Renaixença", "Draw my studies", 22698)],
  ],
  ejemplos: [
    ["Comenta el vers d'Aribau «En llemosí sonà lo meu primer vagit».", ["«Llemosí» era el nom que es donava llavors al català culte.", "El «primer vagit» és el primer plor del nadó: el poeta diu que el català és la seva llengua materna.", "Expressa l'enyorança romàntica de la llengua i de la terra."], "El poeta reivindica el català com a llengua pròpia i afectiva: idea central de la Renaixença."],
    ["Per què Terra baixa té trets romàntics si és del 1897?", ["Oposa natura (muntanya) i societat (plana).", "Presenta un heroi pur i un malvat clar.", "La passió i la violència final són molt intenses."], "Perquè manté la visió idealitzada de la natura i el conflicte entre passió i societat típics del Romanticisme."],
    ["Classifica: L'Atlàntida, La febre d'or, Oda a la pàtria, Terra baixa.", ["L'Atlàntida: poesia èpica (Verdaguer).", "La febre d'or: novel·la realista (Oller).", "Oda a la pàtria: poesia lírica (Aribau).", "Terra baixa: teatre (Guimerà)."], "Poesia: L'Atlàntida, Oda. Novel·la: La febre d'or. Teatre: Terra baixa."],
  ],
  errores: [
    "Dir que a la Decadència no s'escrivia gens en català: va minvar la literatura culta, però la popular i l'ús social van continuar.",
    "Confondre Romanticisme i Realisme: el primer idealitza, el segon observa la societat amb objectivitat.",
    "Atribuir Terra baixa a Verdaguer: és d'Àngel Guimerà.",
    "Pensar que la Renaixença va ser només a Catalunya: també hi va haver moviment al País Valencià i a les Illes.",
    "Creure que els Jocs Florals eren un invent del segle XIX: es van restaurar, ja existien a l'Edat Mitjana.",
  ],
  ejercicios: [
    ["Quins dos factors van fer possible la Renaixença?", "La burgesia industrial que volia una cultura pròpia i el Romanticisme europeu que valorava les llengües i el passat."],
    ["Quin poema obre simbòlicament la Renaixença i qui el va escriure?", "La pàtria (Oda a la pàtria), de Bonaventura Carles Aribau, 1833."],
    ["Quins premis tenien els Jocs Florals?", "Englantina d'or (Pàtria), viola d'or i argent (Fe) i flor natural (Amor)."],
    ["Resumeix l'argument de Canigó en dues frases.", "Gentil s'enamora de la fada Flordeneu i abandona el seu deure; el seu pare el mata. El monestir de Sant Martí simbolitza el triomf de la fe i el naixement de Catalunya."],
    ["Qui són Manelic i Sebastià i què representen?", "Manelic és el pastor pur de la muntanya; Sebastià, l'amo cruel de la plana. Representen la natura i la societat corrompuda."],
    ["Què vol retratar La febre d'or?", "L'especulació borsària de la Barcelona de finals del XIX."],
    ["Defineix Naturalisme.", "Corrent que mostra com l'herència i l'ambient determinen la vida de les persones (Zola)."],
    ["Anomena un autor valencià i un de mallorquí de la Renaixença.", "Teodor Llorente; Marià Aguiló."],
    ["Què va ser el Diari Català?", "El primer diari en català (1879), fundat per Valentí Almirall."],
    ["Explica la frase «He mort el llop!».", "La diu Manelic en matar Sebastià: el llop simbolitza el mal que l'oprimia a ell i a Marta."],
  ],
  quiz: [
    ["El primer diari en català va ser…", ["el Diari Català (1879)", "La Vanguardia", "L'Avenç"], 0, "Fundat per Valentí Almirall."],
    ["Flordeneu és…", ["la reina de les fades a Canigó", "la protagonista de Terra baixa", "una revista"], 0, "Verdaguer, Canigó."],
    ["Narcís Oller va ser admirat per…", ["Zola", "Shakespeare", "Dante"], 0, "El pare del Naturalisme."],
    ["Lo Rat Penat (1878) es va fundar a…", ["València", "Palma", "Girona"], 0, "Renaixença valenciana."],
    ["Qui mata Sebastià a Terra baixa?", ["Manelic", "Marta", "Gentil"], 0, "«He mort el llop!»"],
  ],
  tarjetas: [
    ["Canigó (1886)", "Gentil i la fada Flordeneu al Pirineu del segle XI."],
    ["Realisme i Naturalisme", "Retrat objectiu de la societat; l'herència i l'ambient determinen la vida (Oller)."],
    ["Renaixença valenciana i balear", "Teodor Llorente i Lo Rat Penat; Marià Aguiló."],
  ],
});
