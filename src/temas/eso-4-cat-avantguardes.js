// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Les avantguardes",
  minutos: 35,
  objetivos: ["Explicar què van ser les avantguardes i què volien trencar", "Conèixer el cal·ligrama i els poemes visuals", "Identificar Salvat-Papasseit, J. V. Foix i Junoy"],
  claves: ["avantguardes", "futurisme", "cubisme", "surrealisme", "cal·ligrama", "Salvat-Papasseit", "J. V. Foix"],
  pregunta: {
    texto: "Un poema escrit en forma de bicicleta, amb lletres que van en totes direccions. Encara és un poema?",
    respuesta: "Per als <mark>avantguardistes</mark>, sí! Volien trencar totes les normes: el poema podia ser un dibuix (<b>cal·ligrama</b>), barrejar tipografies o parlar de màquines i velocitat. La poesia també entrava pels ulls.",
  },
  bloques: [
    {
      html: `<h3>Què van ser les avantguardes</h3><p>A principis del segle XX, a Europa sorgeixen moviments que volen <mark>trencar amb tota la tradició</mark> i sorprendre: el <b>futurisme</b> (velocitat, màquines, ciutat), el <b>cubisme</b> (diversos punts de vista alhora), el <b>dadaisme</b> (l'absurd) i el <b>surrealisme</b> (els somnis i l'inconscient).</p>`,
      svg: L.filas("Moviments d'avantguarda", [
        ["Futurisme", "velocitat · màquines", "var(--red)"], ["Cubisme", "punts de vista múltiples", "var(--pen)"],
        ["Dadaisme", "l'absurd", "var(--muted)"], ["Surrealisme", "somnis · inconscient", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>El cal·ligrama</h3><p>És un poema en què les paraules <mark>formen un dibuix</mark> relacionat amb el tema. El va popularitzar el francès Apollinaire. En català, Salvat-Papasseit i Junoy en van fer: la forma visual forma part del significat.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cal·ligrama inventat: les paraules formen una gota de pluja">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle" fill="var(--pen)">
          <text x="130" y="30" font-size="13">plou</text>
          <text x="130" y="48" font-size="13">plou plou</text>
          <text x="130" y="66" font-size="13">la pluja cau</text>
          <text x="130" y="84" font-size="13">sobre els teulats</text>
          <text x="130" y="102" font-size="13">del poble que dorm</text>
          <text x="130" y="120" font-size="13">i el carrer brilla</text>
          <text x="130" y="138" font-size="13">com un mirall</text>
          <text x="130" y="156" font-size="13">de vidre</text>
        </g>
        <text x="236" y="168" text-anchor="end" font-size="11" fill="var(--muted)" ${F}>cal·ligrama</text></svg>`,
    },
    {
      html: `<h3>Joan Salvat-Papasseit</h3><p>Poeta obrer i autodidacte, és el gran avantguardista català. Va escriure poemes visuals i, sobretot, poesia amorosa vitalista: <mark><i>El poema de la rosa als llavis</i></mark> (1923). Versos coneguts com «Tot l'enyor de demà» o «Res no és mesquí» parlen de viure intensament.</p>`,
      svg: L.dialogo("Vers de Salvat-Papasseit", [
        ["Salvat-Papasseit", "Res no és mesquí,", "var(--red)"],
        ["", "ni cap hora és isarda,", "var(--red)"],
        ["", "ni és fosca la ventura de la nit.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>J. V. Foix i el surrealisme</h3><p><b>Josep Vicenç Foix</b> va combinar l'avantguarda amb la tradició: escriu sonets de forma clàssica plens d'<mark>imatges oníriques</mark>, com somnis. El seu vers més famós: «M'exalta el nou i m'enamora el vell» resumeix aquesta barreja. Obres: <i>Sol, i de dol</i>, <i>Gertrudis</i>.</p>`,
      svg: L.filas("La síntesi de Foix", [
        ["El nou", "imatges surrealistes", "var(--inf)"],
        ["El vell", "el sonet clàssic", "var(--pen)"],
        ["Lema", "M'exalta el nou i m'enamora el vell", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Altres noms</h3><p><b>Josep Maria Junoy</b> va escriure cal·ligrames influïts pel cubisme. A l'art, <b>Joan Miró</b> i <b>Salvador Dalí</b> van portar el surrealisme arreu del món. Les avantguardes catalanes van durar poc, però van obrir camins nous a la poesia.</p>`,
      svg: L.tabla("Autors i obres de l'avantguarda catalana", ["Autor", "Obra"], [
        ["Salvat-Papasseit", "La rosa als llavis"], ["J. V. Foix", "Sol, i de dol"], ["J. M. Junoy", "Poemes i cal·ligrames"],
      ], "var(--pen)"),
    },
  ],
  figura: {
    titulo: "L'avantguarda catalana",
    svg: L.columnas("Tres autors de l'avantguarda catalana", [
      ["poeta vitalista", "SALVAT-PAPASSEIT", ["poemes visuals,", "amor i vida"], "var(--red)"],
      ["surrealisme + tradició", "J. V. FOIX", ["sonets plens", "d'imatges de somni"], "var(--inf)"],
      ["cubisme", "JUNOY", ["cal·ligrames", "i art nou"], "var(--pen)"],
    ]),
  },
  video: { id: "O9dPw5ypxcw", titulo: "«Tot l'enyor de demà», de Joan Salvat-Papasseit (Poesia Dibuixada)", canal: "Poesia Dibuixada", vistas: 55628, megusta: 563, busqueda: "avantguardes Salvat-Papasseit Foix" },
  quiz: [
    { q: "Què volien les avantguardes?", o: ["Trencar amb la tradició i sorprendre", "Imitar els clàssics", "Escriure només novel·les"], a: 0, e: "Ruptura i novetat." },
    { q: "Un cal·ligrama és…", o: ["un poema que forma un dibuix", "una carta", "una obra de teatre"], a: 0, e: "La forma visual forma part del sentit." },
    { q: "El poema de la rosa als llavis és de…", o: ["Salvat-Papasseit", "Verdaguer", "Carner"], a: 0, e: "Joan Salvat-Papasseit, 1923." },
    { q: "El surrealisme s'inspira en…", o: ["els somnis i l'inconscient", "la velocitat", "les normes clàssiques"], a: 0, e: "Imatges oníriques." },
    { q: "«M'exalta el nou i m'enamora el vell» és de…", o: ["J. V. Foix", "Maragall", "Fabra"], a: 0, e: "Resumeix la síntesi de Foix." },
  ],
  examen: [
    { q: "El futurisme exalta…", o: ["la velocitat i les màquines", "la vida al camp", "l'Edat Mitjana"], a: 0, e: "Ciutat, màquina, moviment." },
    { q: "Quin pintor català va ser surrealista?", o: ["Salvador Dalí", "Ramon Casas", "Marià Fortuny"], a: 0, e: "Dalí i Miró." },
    { q: "Salvat-Papasseit era…", o: ["un poeta obrer i autodidacte", "un noble ric", "un novel·lista realista"], a: 0, e: "Va treballar de jove i es va formar sol." },
  ],
  feynman: ["Què van ser les avantguardes i quatre moviments", "Què és un cal·ligrama", "Per què Salvat-Papasseit és el gran avantguardista català", "Què vol dir el vers de Foix sobre el nou i el vell"],
  mapa: mapa("AVANTGUARDES", "var(--eso)", [
    ["Moviments", "futurisme · surrealisme", "var(--red)"],
    ["Cal·ligrama", "poema que dibuixa", "var(--pen)"],
    ["Salvat-Papasseit", "La rosa als llavis", "var(--leaf)"],
    ["J. V. Foix", "nou + vell", "var(--inf)"],
  ]),
  tarjetas: [
    ["Avantguardes", "Moviments de principis del segle XX que trenquen amb la tradició."],
    ["Cal·ligrama", "Poema en què les paraules formen un dibuix."],
    ["Joan Salvat-Papasseit", "Poeta avantguardista; El poema de la rosa als llavis (1923)."],
    ["J. V. Foix", "Poeta que combina surrealisme i sonet clàssic."],
    ["Surrealisme", "Avantguarda basada en els somnis i l'inconscient."],
  ],
  familias: ["Feu junts un cal·ligrama sobre un objecte de casa.", "Mireu quadres de Miró i Dalí i comenteu què us suggereixen.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: les avantguardes catalanes i europees; relació entre literatura i arts plàstiques (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Taller de cal·ligrames i poemes visuals.", "Escriure un poema surrealista amb la tècnica del cadàver exquisit.", "Relacionar poemes de Foix amb quadres de Dalí."],
  },
  fuentes: [
    L.BOE,
    { t: "Associació d'Escriptors en Llengua Catalana: Joan Salvat-Papasseit", url: "https://www.escriptors.cat/autors/salvatpapasseitj" },
    { t: "Fundació J. V. Foix", url: "https://www.fundaciojvfoix.cat/" },
  ],
  revisado: "2026-11-12",
};
