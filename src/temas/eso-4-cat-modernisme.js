// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Modernisme i Noucentisme",
  minutos: 40,
  objetivos: ["Explicar el Modernisme com a voluntat de modernitzar la cultura catalana", "Conèixer Maragall, Víctor Català, Rusiñol i Raimon Casellas", "Contrastar-lo amb l'ordre i la claredat del Noucentisme: Carner, d'Ors, Fabra"],
  claves: ["Modernisme", "paraula viva", "Víctor Català", "Solitud", "Noucentisme", "Josep Carner", "Pompeu Fabra", "normativa"],
  pregunta: {
    texto: "La Sagrada Família i el Palau de la Música són modernistes. Creus que els escriptors d'aquella època també volien trencar amb el passat i fer coses noves?",
    respuesta: "Sí. El <mark>Modernisme</mark> (1892-1911) va voler convertir la cultura catalana en una <b>cultura moderna i europea</b>. Després, el <mark>Noucentisme</mark> va reaccionar posant ordre, claredat i normes, i va fixar la llengua amb Pompeu Fabra.",
  },
  bloques: [
    {
      html: `<h3>Què va ser el Modernisme</h3><p>Moviment cultural (arquitectura, pintura, literatura) que va voler <mark>modernitzar Catalunya</mark> i acostar-la a Europa. Els artistes es veien enfrontats a una societat burgesa materialista. Temes: l'artista incomprès, la natura salvatge, la lluita entre l'individu i la societat.</p>`,
      svg: L.filas("Idees del Modernisme", [
        ["Modernitat", "mirar cap a Europa", "var(--pen)"], ["Artista", "incomprès, rebel", "var(--red)"],
        ["Natura", "salvatge i simbòlica", "var(--leaf)"], ["Societat", "burgesa i materialista", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>La poesia: Joan Maragall</h3><p>Va defensar la teoria de la <mark>paraula viva</mark>: el poema neix d'una inspiració espontània i no s'ha de corregir gaire. Obres: <i>La vaca cega</i>, <i>El comte Arnau</i>, el <i>Cant espiritual</i> («Si el món ja és tan formós, Senyor…»).</p>`,
      svg: L.dialogo("Versos del Cant espiritual de Maragall", [
        ["Maragall", "Si el món ja és tan formós, Senyor,", "var(--pen)"],
        ["", "si es mira amb la pau vostra", "var(--pen)"], ["", "a dintre l'ull…", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La narrativa: Víctor Català</h3><p><b>Víctor Català</b> era el pseudònim de <b>Caterina Albert</b>, que va haver d'amagar que era dona per publicar. La seva novel·la <mark><i>Solitud</i></mark> (1905) explica com la Mila, casada amb un home apàtic, s'enfronta sola a la duresa de la muntanya i troba la llibertat. També destaquen <b>Raimon Casellas</b> (<i>Els sots feréstecs</i>) i <b>Santiago Rusiñol</b> (<i>L'auca del senyor Esteve</i>).</p>`,
      svg: L.tabla("Narrativa modernista", ["Autor", "Obra"], [
        ["Víctor Català", "Solitud"], ["R. Casellas", "Els sots feréstecs"], ["S. Rusiñol", "L'auca del sr. Esteve"],
      ], "var(--red)"),
    },
    {
      html: `<h3>El Noucentisme</h3><p>Cap al <b>1906</b>, una nova generació reacciona contra la rebel·lia modernista. El Noucentisme defensa l'<mark>ordre, la claredat, la ciutat i el classicisme</mark> mediterrani. Vol construir un país modern amb institucions: l'Institut d'Estudis Catalans (1907), biblioteques, escoles. El seu ideòleg és <b>Eugeni d'Ors</b>.</p>`,
      svg: L.filas("Modernisme contra Noucentisme", [
        ["Modernisme", "rebel·lia · natura · individu", "var(--red)"],
        ["Noucentisme", "ordre · ciutat · institucions", "var(--pen)"],
      ], "dues actituds oposades"),
    },
    {
      html: `<h3>Carner i Fabra</h3><p><b>Josep Carner</b>, el «príncep dels poetes», escriu una poesia elegant i treballada (<i>Els fruits saborosos</i>). <b>Pompeu Fabra</b> fixa la <mark>normativa</mark> del català modern: les <i>Normes ortogràfiques</i> (1913), la <i>Gramàtica</i> (1918) i el <i>Diccionari general</i> (1932). Gràcies a ell el català té una llengua estàndard comuna.</p>`,
      svg: L.linea("L'obra normativa de Pompeu Fabra", [
        ["1907", "neix l'Institut d'Estudis Catalans", "var(--muted)"],
        ["1913", "Normes ortogràfiques", "var(--pen)"],
        ["1918", "Gramàtica catalana", "var(--leaf)"],
        ["1932", "Diccionari general", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Modernisme o Noucentisme?",
    svg: L.columnas("Comparació entre Modernisme i Noucentisme", [
      ["1892-1911", "MODERNISME", ["rebel·lia, natura,", "paraula viva"], "var(--red)"],
      ["autors", "Maragall", ["Víctor Català", "Rusiñol"], "var(--red)"],
      ["1906-1923", "NOUCENTISME", ["ordre, ciutat,", "obra ben feta"], "var(--pen)"],
      ["autors", "Carner", ["Eugeni d'Ors", "Pompeu Fabra"], "var(--pen)"],
    ]),
  },
  video: { id: "hjMD2g4SuUw", titulo: "Llengua Catalana i Literatura: el Modernisme", canal: "Adri SM", vistas: 30722, megusta: 476, busqueda: "Modernisme i Noucentisme literatura catalana" },
  quiz: [
    { q: "Què volia el Modernisme?", o: ["Modernitzar la cultura catalana i acostar-la a Europa", "Tornar a l'Edat Mitjana", "Prohibir el català"], a: 0, e: "Volia una cultura moderna i europea." },
    { q: "Qui era Víctor Català?", o: ["Caterina Albert", "Joan Maragall", "Josep Carner"], a: 0, e: "Pseudònim de l'escriptora Caterina Albert." },
    { q: "La teoria de la «paraula viva» és de…", o: ["Maragall", "Fabra", "d'Ors"], a: 0, e: "Joan Maragall defensava la inspiració espontània." },
    { q: "El Noucentisme defensava…", o: ["l'ordre i la claredat", "la rebel·lia i el caos", "la vida al camp"], a: 0, e: "Classicisme, ciutat, institucions." },
    { q: "Qui va fixar la normativa del català modern?", o: ["Pompeu Fabra", "Santiago Rusiñol", "Àngel Guimerà"], a: 0, e: "Normes (1913), Gramàtica (1918), Diccionari (1932)." },
  ],
  examen: [
    { q: "Solitud (1905) explica la història de…", o: ["la Mila a la muntanya", "un pirata", "el comte Arnau"], a: 0, e: "La Mila s'allibera tot afrontant la solitud." },
    { q: "Quina institució es va crear el 1907?", o: ["L'Institut d'Estudis Catalans", "La Universitat de Barcelona", "El Liceu"], a: 0, e: "Impulsada pel Noucentisme." },
    { q: "Josep Carner era conegut com…", o: ["el príncep dels poetes", "el poeta de la paraula viva", "el pare de la Renaixença"], a: 0, e: "Per l'elegància de la seva poesia." },
  ],
  feynman: ["Què volia el Modernisme i quins temes tractava", "La paraula viva de Maragall", "De què tracta Solitud i per què Caterina Albert va fer servir pseudònim", "Què va aportar Pompeu Fabra"],
  mapa: mapa("1892-1923", "var(--eso)", [
    ["Modernisme", "modernitat · rebel·lia", "var(--red)"],
    ["Autors modernistes", "Maragall · Víctor Català", "var(--leaf)"],
    ["Noucentisme", "ordre · ciutat · classicisme", "var(--pen)"],
    ["Autors noucentistes", "Carner · d'Ors · Fabra", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Modernisme", "Moviment (1892-1911) que vol modernitzar la cultura catalana."],
    ["Paraula viva", "Teoria de Maragall: el poema neix de la inspiració espontània."],
    ["Solitud", "Novel·la de Víctor Català (Caterina Albert), 1905."],
    ["Noucentisme", "Moviment (1906-1923) d'ordre, claredat i institucions."],
    ["Pompeu Fabra", "Va fixar la normativa: Normes (1913), Gramàtica (1918), Diccionari (1932)."],
  ],
  familias: ["Visiteu (o mireu en línia) un edifici modernista i comenteu-ne els elements.", "Llegiu junts el «Cant espiritual» de Maragall.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: Modernisme i Noucentisme en el seu context; lectura de fragments i relació amb altres arts (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Comparar un edifici modernista i un de noucentista i relacionar-los amb els textos.", "Club de lectura de Solitud (fragments).", "Recerca sobre escriptores amb pseudònim masculí."],
  },
  fuentes: [
    L.BOE,
    { t: "Associació d'Escriptors en Llengua Catalana: Víctor Català", url: "https://www.escriptors.cat/autors/catalav" },
    { t: "Institut d'Estudis Catalans: Pompeu Fabra", url: "https://www.iec.cat/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Explicar el teatre modernista de Rusiñol i el Noucentisme en l'art", "Comentar un fragment modernista o noucentista", "Relacionar Fabra amb la llengua estàndard actual"],
  bloques: [
    { tras: "Què va ser el Modernisme", html: `<h3>Context: de la Renaixença al Modernisme</h3><p>Cap al <b>1890</b>, una generació jove considera que la Renaixença s'ha quedat antiga: massa Jocs Florals, massa nostàlgia del passat i poca relació amb Europa. Revistes com <i>L'Avenç</i> (1881-1915) defensen una cultura <mark>moderna, cosmopolita i laica</mark>. Els modernistes llegeixen Nietzsche, Ibsen, Maeterlinck i els simbolistes francesos. Hi ha dues tendències: els <b>regeneracionistes</b>, que volen transformar la societat amb l'art, i els <b>esteticistes</b>, que defensen l'art per l'art. Les <b>Festes Modernistes</b> de Sitges (1892-1899), organitzades per Santiago Rusiñol al Cau Ferrat, van ser l'aparador del moviment.</p>` },
    { tras: "La narrativa: Víctor Català", html: `<h3>Solitud: símbols i lectura</h3><p>A <i>Solitud</i>, la Mila arriba amb el seu marit Matias a una ermita de muntanya. Matias és mandrós i indiferent; en canvi, el pastor <b>Gaietà</b>, savi i bo, li ensenya a estimar la muntanya a través de les seves rondalles. L'<b>Ànima</b>, un personatge brutal i salvatge, representa la violència de la natura i dels instints: acaba matant Gaietà i violant la Mila. Al final, la protagonista decideix marxar sola, lliure i adulta. La muntanya funciona com un símbol de l'interior de la Mila: el seu ascens és un procés de <mark>coneixement d'ella mateixa</mark>. La novel·la és una de les més importants de la literatura catalana i ha estat traduïda a moltes llengües.</p>` },
    { tras: "La narrativa: Víctor Català", html: `<h3>El teatre modernista</h3><p><b>Santiago Rusiñol</b>, pintor i escriptor, és la figura central del teatre modernista. A <i>L'alegria que passa</i> (1898), un poble gris rep la visita d'una companyia de circ: l'art (la poesia, la llibertat) xoca amb la societat materialista i tancada del poble. A <i>L'auca del senyor Esteve</i> (1907) Rusiñol satiritza amb humor la mentalitat botiguera de la burgesia barcelonina, tot i que acaba mostrant-ne també el valor. Altres autors teatrals de l'època són <b>Adrià Gual</b>, que va fundar el Teatre Íntim, i el mateix Guimerà, que continua estrenant obres.</p>` },
    { tras: "El Noucentisme", html: `<h3>El Noucentisme en accions</h3><p>El Noucentisme no és només literatura: és un projecte polític i cultural. La <b>Mancomunitat de Catalunya</b> (1914-1925), presidida per Enric Prat de la Riba, va crear la <b>Biblioteca de Catalunya</b>, l'Escola Industrial, escoles de mestres i una xarxa de biblioteques populars. Eugeni d'Ors va donar-li nom i idees amb el seu <i>Glosari</i>, articles breus publicats al diari. En art, l'escultor <b>Aristides Maillol</b> (amb <i>La Mediterrània</i>) i el pintor <b>Joaquim Sunyer</b> busquen la serenitat clàssica. El model és la <mark>ciutat ordenada</mark>, la «Catalunya-ciutat», enfront de la natura salvatge dels modernistes.</p>` },
    { tras: "Carner i Fabra", html: `<h3>Poesia noucentista: l'obra ben feta</h3><p>Els poetes noucentistes treballen molt el vers: busquen la <b>perfecció formal</b>, la mètrica clàssica i un llenguatge culte i precís, al contrari de la paraula viva de Maragall. <b>Josep Carner</b> és el model; a <i>Els fruits saborosos</i> (1906) cada fruita és una metàfora d'una edat o d'una actitud de la vida. Altres poetes són <b>Guerau de Liost</b> (<i>La muntanya d'ametistes</i>) i, amb una veu més personal, <b>Josep Maria López-Picó</b>. Fora del moviment, però contemporani, <b>Joan Salvat-Papasseit</b> preparava ja el camí de les avantguardes.</p>` },
    { tras: "La narrativa: Víctor Català", html: `<h3>La novel·la rural modernista</h3><p>Molts narradors modernistes situen les seves històries a la <b>muntanya o al camp</b>, però no per idealitzar-los, com feia la Renaixença, sinó per mostrar-ne la duresa i la força primitiva. És l'anomenada <mark>novel·la rural</mark>. <b>Raimon Casellas</b>, a <i>Els sots feréstecs</i> (1901), explica el fracàs d'un capellà que vol civilitzar un poble salvatge de muntanya. <b>Prudenci Bertrana</b>, a <i>Josafat</i> (1906), presenta un campaner de la catedral de Girona dominat pels instints. <b>Joaquim Ruyra</b>, amb <i>Marines i boscatges</i> (1903), escriu narracions de mar i de bosc amb una prosa molt rica. En totes aquestes obres, l'individu lluita contra un entorn hostil que sovint el derrota.</p>` },
  ],
  videos: [
    ["Què va ser el Modernisme", L.vid("yM3yMVbgq0Q", "El Modernisme català: què és?", "Enciclopèdia Catalana", 21824)],
    ["El Noucentisme", L.vid("yKg_r5zxaB8", "1906-1923 Noucentisme", "Manel Trenchs Mola", 17445)],
  ],
  ejemplos: [
    ["Modernista o noucentista? «L'artista viu sol a la muntanya, lluny d'una ciutat que no l'entén».", ["L'artista incomprès és un tema modernista.", "La natura salvatge enfront de la ciutat també.", "Un noucentista exaltaria la ciutat ordenada."], "Modernista."],
    ["Modernista o noucentista? «La ciutat, clara i mesurada, és l'obra més bella de l'home».", ["Exalta la ciutat i la mesura.", "Valora l'ordre i la feina ben feta.", "Respon a l'ideal de la «Catalunya-ciutat»."], "Noucentista."],
    ["Compara la paraula viva de Maragall amb la poesia de Carner.", ["Maragall: inspiració espontània, poca correcció, sinceritat.", "Carner: treball del vers, perfecció formal, llenguatge culte.", "Són dues maneres oposades d'entendre la creació."], "Maragall confia en la inspiració; Carner, en l'ofici i la forma perfecta."],
  ],
  errores: [
    "Confondre Víctor Català amb un home: era Caterina Albert.",
    "Pensar que el Modernisme va ser només arquitectura: també literatura, pintura i teatre.",
    "Situar Pompeu Fabra al Modernisme: la seva obra normativa és noucentista.",
    "Creure que el Noucentisme defensava la natura salvatge: defensava la ciutat i l'ordre.",
    "Confondre L'Avenç (revista modernista) amb una institució noucentista.",
  ],
  ejercicios: [
    ["Quines dues tendències tenia el Modernisme?", "Regeneracionista (transformar la societat amb l'art) i esteticista (l'art per l'art)."],
    ["Què van ser les Festes Modernistes de Sitges?", "Trobades artístiques (1892-1899) organitzades per Rusiñol al Cau Ferrat."],
    ["Quin paper tenen Gaietà i l'Ànima a Solitud?", "Gaietà, el pastor savi, li fa estimar la muntanya; l'Ànima representa la violència i els instints salvatges."],
    ["Què representa la muntanya a Solitud?", "L'interior de la Mila: el seu procés de coneixement i alliberament."],
    ["De què tracta L'alegria que passa?", "Un circ arriba a un poble gris: l'art i la llibertat xoquen amb la societat materialista."],
    ["Què va fer la Mancomunitat de Catalunya?", "Va crear institucions culturals i educatives: Biblioteca de Catalunya, biblioteques populars, escoles."],
    ["Qui va escriure el Glosari?", "Eugeni d'Ors."],
    ["Què és la «Catalunya-ciutat»?", "L'ideal noucentista d'un país ordenat, urbà i civilitzat."],
    ["Explica Els fruits saborosos.", "Llibre de Carner (1906) en què cada fruita és metàfora d'una edat o actitud de la vida."],
    ["Per què és important Pompeu Fabra avui?", "Perquè la seva normativa és la base del català estàndard que fem servir."],
  ],
  quiz: [
    ["L'Avenç era…", ["una revista modernista", "una novel·la", "un partit"], 0, "1881-1915."],
    ["El Cau Ferrat és a…", ["Sitges", "Girona", "Vic"], 0, "Casa-taller de Rusiñol."],
    ["Qui va presidir la Mancomunitat?", ["Prat de la Riba", "Maragall", "Rusiñol"], 0, "Des del 1914."],
    ["A Solitud, qui mata Gaietà?", ["L'Ànima", "Matias", "la Mila"], 0, "Símbol de la violència."],
    ["La poesia noucentista busca…", ["la perfecció formal", "la inspiració espontània", "el vers lliure"], 0, "Obra ben feta."],
  ],
  tarjetas: [
    ["L'alegria que passa", "Teatre de Rusiñol (1898): art contra materialisme."],
    ["Mancomunitat", "1914-1925; Prat de la Riba; institucions noucentistes."],
    ["Glosari", "Articles breus d'Eugeni d'Ors, ideòleg del Noucentisme."],
  ],
});
