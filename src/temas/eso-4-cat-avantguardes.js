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

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Situar les avantguardes catalanes en el seu context històric", "Analitzar un poema de Salvat-Papasseit", "Reconèixer els recursos del futurisme i del surrealisme"],
  bloques: [
    { tras: "Què van ser les avantguardes", html: `<h3>Els grans ismes</h3>${L.tb(["Moviment", "Any i país", "Idea clau", "Recursos"], [["Futurisme", "1909, Itàlia (Marinetti)", "velocitat, màquines, ciutat moderna", "onomatopeies, paraules en llibertat"], ["Cubisme", "1907-1914, França (Picasso, Braque)", "veure un objecte des de molts punts de vista", "fragments, cal·ligrames"], ["Dadaisme", "1916, Zuric (Tzara)", "l'absurd, rebuig de la lògica", "poemes fets a l'atzar"], ["Surrealisme", "1924, França (Breton)", "els somnis i l'inconscient", "escriptura automàtica, imatges oníriques"]])}<p>Tots aquests moviments comparteixen la idea que l'art ha de ser <b>nou</b>, provocador i lliure de les normes antigues.</p>` },
    { tras: "Què van ser les avantguardes", html: `<h3>Barcelona, ciutat d'avantguarda</h3><p>Durant la Primera Guerra Mundial (1914-1918), l'estat espanyol va ser neutral i Barcelona es va convertir en refugi d'artistes estrangers, com el pintor <b>Francis Picabia</b>, que hi va publicar la revista dadaista <i>391</i> (1917). Les <b>Galeries Dalmau</b> havien fet el 1912 una de les primeres exposicions cubistes fora de París. Els escriptors catalans van fundar revistes per difondre les noves idees: <i>Troços</i>, de Junoy (1916), i <i>Un enemic del poble</i> (1917), on Salvat-Papasseit va publicar els seus primers manifestos. El 1928, Salvador Dalí, Sebastià Gasch i Lluís Montanyà van signar el <mark>Manifest groc</mark>, un atac directe a la cultura noucentista.</p>` },
    { tras: "Joan Salvat-Papasseit", html: `<h3>Vida i obra de Salvat-Papasseit</h3><p>Va néixer a Barcelona el <b>1894</b>. Va perdre el pare de petit i va haver de treballar des de molt jove: va ser aprenent, vigilant nocturn al moll i dependent d'una llibreria. Era <b>autodidacte</b> i de pensament revolucionari. Va publicar <i>Poemes en ondes hertzianes</i> (1919) i <i>L'irradiador del port i les gavines</i> (1921), amb poemes visuals i futuristes, com «Les conquestes». Malalt de tuberculosi, va morir el <b>1924</b>, amb només trenta anys. La seva poesia amorosa i vitalista, sobretot <i>El poema de la rosa als llavis</i>, ha estat musicada per cantautors com Joan Manuel Serrat, i és una de les més llegides de la literatura catalana.</p>` },
    { tras: "J. V. Foix i el surrealisme", html: `<h3>Llegir un poema surrealista</h3><p>Davant d'un poema de Foix no cal buscar una història lògica, sinó deixar-se portar per les <b>imatges</b>, com en un somni. Els seus textos de <i>Gertrudis</i> (1927) i <i>KRTU</i> (1932) són proses poètiques en què el jo poètic es passeja per paisatges familiars (Sarrià, Port de la Selva) que de cop es tornen estranys: apareixen personatges impossibles, objectes que canvien de forma, ciutats buides. El lector ha d'interpretar què <mark>simbolitzen</mark>: la por, el desig, la recerca de la persona estimada. Foix va escriure també un <i>Diari 1918</i> i va treballar tota la vida a la pastisseria familiar. El 1984 va rebre el Premi Nacional de les Lletres Espanyoles.</p>` },
    { tras: "Altres noms", html: `<h3>Herència de les avantguardes</h3><p>Les avantguardes catalanes van ser breus, perquè el Noucentisme dominava les institucions i després la Guerra Civil (1936-1939) va tallar la vida cultural. Però la seva influència va ser enorme. Després de la guerra, el grup <b>Dau al Set</b> (1948), amb Joan Brossa i Antoni Tàpies, va recuperar l'esperit surrealista. <b>Joan Brossa</b> va fer <mark>poesia visual</mark> i poemes objecte durant dècades, i avui els poemes visuals, la poesia d'Instagram o la performance poètica continuen el camí obert per Salvat i Junoy. Les avantguardes van ensenyar que un poema també pot ser una imatge, un objecte o una acció.</p>` },
    { tras: "Joan Salvat-Papasseit", html: `<h3>Comentari: «Res no és mesquí»</h3><p>Aquest poema de Salvat-Papasseit comença així: «Res no és mesquí, / ni cap hora és isarda, / ni és fosca la ventura de la nit». Per comentar-lo podem seguir tres passos:</p><ul><li><b>Tema</b>: una crida a viure amb intensitat, perquè tot el que ens envolta té valor.</li><li><b>Estructura</b>: una enumeració de negacions («res no», «ni cap», «ni») que el poeta transforma en una afirmació de la vida.</li><li><b>Recursos</b>: la repetició, la metàfora (la nit com a aventura) i un llenguatge proper i col·loquial.</li></ul><p>És un poema <mark>vitalista</mark>: malgrat la pobresa i la malaltia, el poeta celebra la vida. El cantautor Joan Manuel Serrat en va fer una cançó molt coneguda.</p>` },
  ],
  videos: [
    ["Joan Salvat-Papasseit", L.vid("wm1GTEyW1I4", "Joan Salvat-Papasseit", "Santa Mònica", 11001)],
    ["Què van ser les avantguardes", L.vid("PW4RfVNj2Pk", "Les Avantguardes", "Adri SM", 9117)],
  ],
  ejemplos: [
    ["A quin isme pertany un poema ple de cotxes, avions i onomatopeies com «brrrr»?", ["La velocitat i les màquines són temes futuristes.", "Les onomatopeies i les «paraules en llibertat» són recursos de Marinetti.", "Salvat-Papasseit en va fer de semblants."], "Futurisme."],
    ["Comenta «M'exalta el nou i m'enamora el vell» de Foix.", ["Contraposa dos termes: nou / vell.", "Expressa admiració per l'avantguarda i amor per la tradició.", "Resumeix la seva obra: sonets clàssics amb imatges surrealistes."], "Foix uneix avantguarda i tradició."],
    ["Explica per què un cal·ligrama és avantguardista.", ["Trenca la disposició tradicional del vers.", "La forma visual forma part del significat.", "Fa que el lector miri el poema com una imatge."], "Perquè trenca les normes de la poesia tradicional i barreja text i imatge."],
  ],
  errores: [
    "Pensar que les avantguardes van ser un sol moviment: van ser diversos ismes amb idees diferents.",
    "Confondre futurisme (màquines, velocitat) amb surrealisme (somnis, inconscient).",
    "Creure que Foix va abandonar la tradició: va escriure sonets clàssics.",
    "Buscar una lògica narrativa en un poema surrealista en lloc d'interpretar-ne les imatges.",
    "Atribuir els cal·ligrames només a Salvat: Junoy també en va fer, i el model és Apollinaire.",
  ],
  ejercicios: [
    ["Relaciona: futurisme, dadaisme, surrealisme / somnis, absurd, màquines.", "Futurisme: màquines. Dadaisme: absurd. Surrealisme: somnis."],
    ["Per què Barcelona va ser un refugi d'artistes entre 1914 i 1918?", "Perquè l'estat espanyol era neutral a la Primera Guerra Mundial."],
    ["Què va ser el Manifest groc?", "Un manifest del 1928 de Dalí, Gasch i Montanyà contra la cultura noucentista."],
    ["Escriu dos títols de Salvat-Papasseit.", "Poemes en ondes hertzianes; El poema de la rosa als llavis (o L'irradiador del port i les gavines)."],
    ["Quina malaltia va causar la mort de Salvat-Papasseit i quan?", "La tuberculosi, el 1924."],
    ["Què és l'escriptura automàtica?", "Escriure sense control racional, deixant sortir l'inconscient (surrealisme)."],
    ["Quin grup va recuperar el surrealisme després de la guerra?", "Dau al Set (1948), amb Brossa i Tàpies."],
    ["Per què les avantguardes catalanes van durar poc?", "Pel domini del Noucentisme i per la Guerra Civil."],
    ["Escriu un cal·ligrama breu sobre la pluja (descriu-ne la forma).", "Resposta oberta: per exemple, les paraules «cau, cau, gota» disposades en línies verticals com gotes."],
    ["Quina revista va fundar Junoy el 1916?", "Troços."],
  ],
  quiz: [
    ["Qui va escriure el manifest futurista (1909)?", ["Marinetti", "Breton", "Apollinaire"], 0, "Futurisme italià."],
    ["La revista 391 la va publicar a Barcelona…", ["Picabia", "Foix", "Dalí"], 0, "1917, dadaisme."],
    ["KRTU (1932) és obra de…", ["J. V. Foix", "Salvat-Papasseit", "Junoy"], 0, "Prosa poètica surrealista."],
    ["Joan Brossa és conegut per…", ["la poesia visual", "la novel·la realista", "la normativa"], 0, "Poemes objecte."],
    ["El Manifest groc es va signar el…", ["1928", "1859", "1975"], 0, "Dalí, Gasch, Montanyà."],
  ],
  tarjetas: [
    ["Manifest groc (1928)", "Dalí, Gasch i Montanyà contra el Noucentisme."],
    ["Escriptura automàtica", "Tècnica surrealista per deixar parlar l'inconscient."],
    ["Joan Brossa", "Poesia visual i poemes objecte; Dau al Set (1948)."],
  ],
});
