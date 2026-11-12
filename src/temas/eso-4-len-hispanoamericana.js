// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La literatura hispanoamericana del siglo XX",
  minutos: 40,
  objetivos: ["Conocer la gran poesía hispanoamericana: Mistral, Neruda, Vallejo, Paz", "Explicar el realismo mágico y el boom de los años 60", "Identificar a Borges, Rulfo, García Márquez, Vargas Llosa, Cortázar e Isabel Allende"],
  claves: ["realismo mágico", "boom latinoamericano", "Cien años de soledad", "Macondo", "Borges", "Neruda", "Gabriela Mistral"],
  pregunta: {
    texto: "En una novela, una mujer sube al cielo mientras tiende las sábanas, y nadie en el pueblo se sorprende. ¿Es un libro de fantasía?",
    respuesta: "No exactamente. Es <mark>realismo mágico</mark>: lo increíble se cuenta como si fuera normal, dentro de un mundo realista. La escena es de <b>Cien años de soledad</b> (1967), de Gabriel García Márquez, la novela más famosa del <b>boom latinoamericano</b>.",
  },
  bloques: [
    {
      html: `<h3>La gran poesía</h3><p>En el siglo XX Hispanoamérica dio grandes poetas, tres de ellos premios Nobel. <b>Gabriela Mistral</b> (Chile), primera latinoamericana Nobel (1945). <b>Pablo Neruda</b> (Chile, Nobel 1971), autor de <i>Veinte poemas de amor y una canción desesperada</i> y <i>Canto general</i>. <b>César Vallejo</b> (Perú), poeta vanguardista de <i>Trilce</i>. <b>Octavio Paz</b> (México), Nobel en 1990.</p>`,
      svg: L.tabla("Poetas hispanoamericanos del siglo XX", ["Poeta", "País"], [
        ["G. Mistral", "Chile"], ["P. Neruda", "Chile"], ["C. Vallejo", "Perú"], ["O. Paz", "México"],
      ], "var(--red)"),
    },
    {
      html: `<h3>Borges y los precursores</h3><p>El argentino <b>Jorge Luis Borges</b> escribió cuentos breves y perfectos sobre laberintos, espejos, bibliotecas infinitas y el tiempo (<i>Ficciones</i>, <i>El Aleph</i>). El mexicano <b>Juan Rulfo</b>, con <mark><i>Pedro Páramo</i></mark> (1955), creó un pueblo de muertos que hablan, Comala, antecedente del realismo mágico.</p>`,
      svg: L.filas("Borges y Rulfo", [
        ["Borges", "laberintos, espejos, el tiempo", "var(--inf)"],
        ["Rulfo", "Pedro Páramo: Comala", "var(--leaf)"],
      ], "precursores de la nueva narrativa"),
    },
    {
      html: `<h3>El realismo mágico</h3><p>Es una forma de narrar en la que <mark>lo mágico y lo real conviven</mark> sin que los personajes se asombren. Recoge leyendas, creencias populares y la historia de América. El cubano <b>Alejo Carpentier</b> habló de «lo real maravilloso»: la realidad americana ya es asombrosa.</p>`,
      svg: L.filas("Realismo mágico: realidad más magia contada con naturalidad", [
        ["Realidad", "historia, pueblos, familias", "var(--pen)"],
        ["Magia", "lluvias de flores, fantasmas", "var(--red)"],
        ["Tono", "todo se cuenta como normal", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El boom de los años 60</h3><p>Varias novelas se hicieron famosas en todo el mundo a la vez. <b>Gabriel García Márquez</b> (Colombia, Nobel 1982): <i>Cien años de soledad</i>, la historia de los Buendía en <b>Macondo</b>. <b>Mario Vargas Llosa</b> (Perú, Nobel 2010): <i>La ciudad y los perros</i>. <b>Julio Cortázar</b> (Argentina): <i>Rayuela</i>, que se puede leer en distinto orden. <b>Carlos Fuentes</b> (México).</p>`,
      svg: L.tabla("Autores del boom y una novela", ["Autor", "Novela"], [
        ["García Márquez", "Cien años de soledad"], ["Vargas Llosa", "La ciudad y los perros"], ["Cortázar", "Rayuela"], ["Fuentes", "La muerte de A. Cruz"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Después del boom</h3><p>Llegan nuevas voces: <b>Isabel Allende</b> (Chile), con <mark><i>La casa de los espíritus</i></mark> (1982); <b>Elena Poniatowska</b> (México), Premio Cervantes; <b>Laura Esquivel</b> (<i>Como agua para chocolate</i>) y <b>Roberto Bolaño</b> (Chile). Hoy la literatura en español es una de las más leídas del mundo.</p>`,
      svg: L.filas("Autores posteriores al boom", [
        ["Isabel Allende", "La casa de los espíritus", "var(--red)"], ["E. Poniatowska", "Premio Cervantes", "var(--leaf)"],
        ["Laura Esquivel", "Como agua para chocolate", "var(--pen)"], ["Roberto Bolaño", "Los detectives salvajes", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Un siglo de literatura hispanoamericana",
    svg: L.eje("Obras clave de la literatura hispanoamericana del siglo XX", [
      ["1924", "Neruda", ["Veinte poemas", "de amor"], "var(--red)"],
      ["1944", "Borges", ["Ficciones"], "var(--inf)"],
      ["1955", "Rulfo", ["Pedro Páramo"], "var(--leaf)"],
      ["1963", "Cortázar", ["Rayuela"], "var(--muted)"],
      ["1967", "García Márquez", ["Cien años", "de soledad"], "var(--pen)"],
    ]),
  },
  video: { id: "9Ge5XnOTziw", titulo: "El boom latinoamericano", canal: "Academia Libre", vistas: 282449, megusta: 6703, busqueda: "literatura hispanoamericana siglo XX boom realismo mágico" },
  quiz: [
    { q: "¿Qué es el realismo mágico?", o: ["Mezclar lo real y lo mágico con naturalidad", "Ciencia ficción con naves espaciales", "Poesía sobre la naturaleza"], a: 0, e: "Lo extraordinario se cuenta como algo cotidiano." },
    { q: "¿En qué pueblo transcurre Cien años de soledad?", o: ["Comala", "Macondo", "Vetusta"], a: 1, e: "Macondo; Comala es el pueblo de Pedro Páramo." },
    { q: "¿Quién fue la primera persona de Latinoamérica en recibir el Nobel de Literatura?", o: ["Gabriela Mistral", "Pablo Neruda", "Isabel Allende"], a: 0, e: "La chilena Gabriela Mistral, en 1945." },
    { q: "Rayuela, que se puede leer en distinto orden, es de…", o: ["Julio Cortázar", "Vargas Llosa", "Borges"], a: 0, e: "Julio Cortázar, 1963." },
    { q: "Borges es famoso por sus…", o: ["cuentos sobre laberintos y el tiempo", "dramas románticos", "novelas realistas extensas"], a: 0, e: "Ficciones y El Aleph." },
  ],
  examen: [
    { q: "El boom latinoamericano tuvo lugar en los años…", o: ["60", "20", "90"], a: 0, e: "Década de 1960, con éxito internacional." },
    { q: "La casa de los espíritus es de…", o: ["Isabel Allende", "Elena Poniatowska", "Laura Esquivel"], a: 0, e: "Isabel Allende, 1982." },
    { q: "¿Qué poeta escribió Veinte poemas de amor y una canción desesperada?", o: ["Neruda", "Vallejo", "Paz"], a: 0, e: "Pablo Neruda, 1924." },
  ],
  feynman: ["Cuatro grandes poetas hispanoamericanos", "Qué es el realismo mágico con un ejemplo", "Qué fue el boom y tres de sus autores", "Por qué Pedro Páramo es un precursor"],
  mapa: mapa("HISPANOAMÉRICA", "var(--eso)", [
    ["Poesía", "Mistral · Neruda · Paz", "var(--red)"],
    ["Precursores", "Borges · Rulfo", "var(--inf)"],
    ["Boom", "García Márquez · Cortázar", "var(--pen)"],
    ["Después", "Allende · Bolaño", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Realismo mágico", "Narración en la que lo mágico aparece como parte natural de la realidad."],
    ["Boom latinoamericano", "Éxito mundial de la novela hispanoamericana en los años 60."],
    ["Cien años de soledad", "Novela de García Márquez (1967) sobre la familia Buendía en Macondo."],
    ["Pedro Páramo", "Novela de Juan Rulfo (1955) ambientada en Comala, un pueblo de muertos."],
    ["Gabriela Mistral", "Poeta chilena, primera Nobel de Literatura de Latinoamérica (1945)."],
  ],
  familias: ["Leed juntos un cuento breve de Cortázar o Borges y comentadlo.", "Buscad en el mapa los países de los autores del tema.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: literatura hispanoamericana del siglo XX; lectura de cuentos y fragmentos en su contexto (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Escribir un microrrelato de realismo mágico sobre el instituto.", "Leer «Instrucciones para subir una escalera» de Cortázar y escribir instrucciones absurdas.", "Mapa interactivo de autores con un fragmento de cada país."],
  },
  fuentes: [
    L.BOE,
    { t: "Centro Virtual Cervantes: literatura hispanoamericana", url: "https://cvc.cervantes.es/literatura/" },
    { t: "Boom latinoamericano, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Boom_latinoamericano" },
  ],
  revisado: "2026-11-12",
};
