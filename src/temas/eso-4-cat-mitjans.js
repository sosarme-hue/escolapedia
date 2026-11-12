// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Els mitjans de comunicació",
  minutos: 35,
  objetivos: ["Conèixer els mitjans de comunicació en català i les seves funcions", "Classificar els gèneres periodístics", "Detectar notícies falses i llegir els mitjans amb esperit crític"],
  claves: ["mitjans de comunicació", "notícia", "reportatge", "entrevista", "editorial", "columna", "piràmide invertida", "fake news"],
  pregunta: {
    texto: "Veus a les xarxes: «URGENT! Demà tancaran tots els instituts!!!». No té autor, ni data, ni enllaç. Ho compartiries?",
    respuesta: "Millor que no. Té tots els senyals d'una <mark>notícia falsa</mark>: alarma, majúscules, cap font. Els mitjans fiables diuen <b>qui</b> ho explica, <b>quan</b> i <b>d'on</b> ho treuen. Llegir amb esperit crític és tan important com saber llegir.",
  },
  bloques: [
    {
      html: `<h3>Mitjans i funcions</h3><p>Els <b>mitjans de comunicació</b> (premsa, ràdio, televisió, internet) tenen tres funcions: <mark>informar, formar opinió i entretenir</mark>. En català hi ha diaris com <i>Ara</i>, <i>El Punt Avui</i> o <i>VilaWeb</i>, ràdios com Catalunya Ràdio i À Punt, i la televisió 3Cat, IB3 o À Punt.</p>`,
      svg: L.filas("Les tres funcions dels mitjans", [
        ["Informar", "notícies i dades", "var(--inf)"], ["Opinar", "editorials, columnes", "var(--red)"],
        ["Entretenir", "sèries, concursos", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Els gèneres periodístics</h3><p><b>Informatius</b>: notícia, reportatge, entrevista. <b>D'opinió</b>: editorial (opinió del diari, sense signatura), article, columna, carta al director. <b>Mixtos</b>: crònica i crítica, que informen i alhora valoren.</p>`,
      svg: L.filas("Gèneres periodístics en tres grups", [
        ["Informatius", "notícia · reportatge", "var(--inf)"],
        ["D'opinió", "editorial · columna", "var(--red)"],
        ["Mixtos", "crònica · crítica", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La notícia</h3><p>Explica un fet recent i d'interès de manera objectiva. Segueix la <mark>piràmide invertida</mark>: <b>titular</b>, <b>entradeta</b> (resum) i <b>cos</b>, amb els detalls de més a menys importants. Respon a les sis preguntes: què, qui, quan, on, com i per què.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Piràmide invertida de la notícia: titular, entradeta i cos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 16 H 240 L 130 168 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M46 52 H 214 M78 96 H 182" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="40" font-size="15" fill="var(--red)">TITULAR</text>
          <text x="130" y="80" font-size="14" fill="var(--pen)">entradeta</text>
          <text x="130" y="122" font-size="13" fill="var(--inf)">cos</text>
          <text x="130" y="140" font-size="11" fill="var(--muted)">detalls</text>
        </g></svg>`,
    },
    {
      html: `<h3>L'entrevista i el reportatge</h3><p>L'<b>entrevista</b> recull un diàleg de preguntes i respostes amb una persona interessant; comença amb una presentació de l'entrevistat. El <b>reportatge</b> aprofundeix en un tema amb dades, testimonis, fotografies i més extensió que la notícia.</p>`,
      svg: L.dialogo("Fragment d'entrevista", [
        ["periodista", "Quan vas començar a escriure?", "var(--pen)"],
        ["escriptora", "Als dotze anys, en un diari personal.", "var(--leaf)"],
        ["periodista", "I què et va fer publicar?", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Notícies falses</h3><p>Abans de compartir, comprova: <mark>qui ho publica</mark> (és un mitjà conegut?), <b>la data</b>, <b>les fonts</b> (hi ha enllaços, dades?), <b>el to</b> (massa alarma o majúscules?) i si <b>altres mitjans</b> ho expliquen. Hi ha verificadors com <i>Verificat</i> o <i>Maldita</i>.</p>`,
      svg: L.filas("Comprovacions abans de compartir una notícia", [
        ["Qui?", "mitjà o autor conegut", "var(--pen)"], ["Quan?", "data recent", "var(--leaf)"],
        ["Fonts?", "enllaços i dades", "var(--inf)"], ["To?", "sense alarmisme", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Informar, opinar o barrejar",
    svg: L.columnas("Gèneres informatius, d'opinió i mixtos", [
      ["fets objectius", "INFORMATIUS", ["notícia · reportatge", "entrevista"], "var(--inf)"],
      ["valoració signada", "D'OPINIÓ", ["editorial · article", "columna · cartes"], "var(--red)"],
      ["fets + valoració", "MIXTOS", ["crònica", "crítica"], "var(--leaf)"],
    ]),
  },
  video: { id: "4in_YToMu1c", titulo: "¿Qué son los géneros periodísticos? Definición, ejemplos y explicación", canal: "El Edén de los Cínicos", vistas: 70369, megusta: 1233, busqueda: "gèneres periodístics català" },
  quiz: [
    { q: "Quin gènere expressa l'opinió del diari i no va signat?", o: ["L'editorial", "La crònica", "El reportatge"], a: 0, e: "L'editorial representa la línia del mitjà." },
    { q: "El resum que segueix el titular d'una notícia és…", o: ["l'entradeta", "el cos", "la columna"], a: 0, e: "L'entradeta respon a les preguntes bàsiques." },
    { q: "La crònica és un gènere…", o: ["informatiu", "d'opinió", "mixt"], a: 2, e: "Informa i valora alhora." },
    { q: "Quin és un senyal de notícia falsa?", o: ["Té autor i data", "No cita cap font i fa servir majúscules alarmistes", "Ho expliquen diversos mitjans"], a: 1, e: "La manca de fonts i l'alarmisme són senyals d'alerta." },
    { q: "Quines són les tres funcions dels mitjans?", o: ["Informar, formar opinió i entretenir", "Vendre, comprar i llogar", "Escriure, llegir i dibuixar"], a: 0, e: "Són les funcions clàssiques." },
  ],
  examen: [
    { q: "La piràmide invertida posa…", o: ["el més important al principi", "els detalls al principi", "l'opinió al final"], a: 0, e: "De més a menys important." },
    { q: "Quin gènere aprofundeix en un tema amb testimonis i dades?", o: ["El reportatge", "La notícia breu", "L'editorial"], a: 0, e: "El reportatge és més extens i documentat." },
    { q: "Qui escriu una columna?", o: ["Un columnista fix", "El lector", "Ningú"], a: 0, e: "Sempre la mateixa persona, amb estil propi." },
  ],
  feynman: ["Les tres funcions dels mitjans", "Els tres grups de gèneres periodístics", "Les parts de la notícia", "Com detectar una notícia falsa"],
  mapa: mapa("MITJANS", "var(--eso)", [
    ["Funcions", "informar · opinar · entretenir", "var(--pen)"],
    ["Informatius", "notícia · reportatge", "var(--inf)"],
    ["Opinió", "editorial · columna", "var(--red)"],
    ["Esperit crític", "fonts · data · to", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Entradeta", "Primer paràgraf de la notícia que en resumeix l'essencial."],
    ["Editorial", "Text d'opinió del diari, sense signatura."],
    ["Crònica", "Gènere mixt: informa d'uns fets i els valora qui hi era."],
    ["Piràmide invertida", "Ordre de la notícia: de més a menys important."],
    ["Notícia falsa", "Informació inventada o manipulada; es detecta revisant autor, data, fonts i to."],
  ],
  familias: ["Mireu junts la portada d'un diari en català i classifiqueu tres textos per gèneres.", "Quan us arribi un missatge viral, comproveu-lo junts amb un verificador.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Alfabetització mediàtica i informacional: gèneres periodístics, mitjans en català i detecció de desinformació (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Redacció d'un diari digital de l'institut amb notícies i columnes.", "Comparar la mateixa notícia en dos mitjans i detectar-ne la valoració.", "Taller de verificació amb notícies falses reals."],
  },
  fuentes: [
    L.BOE,
    { t: "Verificat, verificació de dades", url: "https://www.verificat.cat/" },
    { t: "Consell de l'Audiovisual de Catalunya", url: "https://www.cac.cat/" },
  ],
  revisado: "2026-11-12",
};
