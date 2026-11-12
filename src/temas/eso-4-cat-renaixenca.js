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
