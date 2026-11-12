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
        ["", "si es mira amb la pau vostra a dintre l'ull…", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La narrativa: Víctor Català</h3><p><b>Víctor Català</b> era el pseudònim de <b>Caterina Albert</b>, que va haver d'amagar que era dona per publicar. La seva novel·la <mark><i>Solitud</i></mark> (1905) explica com la Mila, casada amb un home apàtic, s'enfronta sola a la duresa de la muntanya i troba la llibertat. També destaquen <b>Raimon Casellas</b> (<i>Els sots feréstecs</i>) i <b>Santiago Rusiñol</b> (<i>L'auca del senyor Esteve</i>).</p>`,
      svg: L.tabla("Narrativa modernista", ["Autor", "Obra"], [
        ["Víctor Català", "Solitud"], ["R. Casellas", "Els sots feréstecs"], ["S. Rusiñol", "L'auca del senyor Esteve"],
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
