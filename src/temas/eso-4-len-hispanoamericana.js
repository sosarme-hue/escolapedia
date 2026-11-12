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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comentar un poema de Neruda y un fragmento de realismo mágico", "Explicar las técnicas narrativas del boom", "Conocer el cuento hispanoamericano: Borges, Cortázar, Monterroso"],
  bloques: [
    { tras: "La gran poesía", html: `<h3>Neruda, Vallejo y Paz</h3><p><b>Pablo Neruda</b> pasó por muchas etapas: el amor juvenil de <i>Veinte poemas de amor y una canción desesperada</i> (1924) («Puedo escribir los versos más tristes esta noche»), el surrealismo angustiado de <i>Residencia en la tierra</i>, el compromiso político del <i>Canto general</i> (1950), una historia poética de América, y la sencillez de las <i>Odas elementales</i>, dedicadas a la cebolla, el tomate o los calcetines.</p><p>El peruano <b>César Vallejo</b> (<i>Trilce</i>, <i>Poemas humanos</i>) renovó el lenguaje poético con una sintaxis rota y un dolor profundo por el sufrimiento humano: «Hay golpes en la vida, tan fuertes… ¡Yo no sé!». El mexicano <b>Octavio Paz</b>, Nobel en 1990, unió poesía y ensayo (<i>El laberinto de la soledad</i>, sobre la identidad mexicana).</p>` },
    { tras: "Borges y los precursores", html: `<h3>El cuento hispanoamericano</h3><p>Hispanoamérica es la gran tierra del cuento en español. Además de Borges, destacan:</p><ul><li><b>Julio Cortázar</b> (Argentina): lo fantástico irrumpe en la vida cotidiana. En «Casa tomada», algo invisible va ocupando una casa; en «La noche boca arriba», un motociclista herido sueña que es un indio perseguido… o al revés.</li><li><b>Juan Rulfo</b> (México): <i>El llano en llamas</i>, cuentos secos y duros del campo mexicano.</li><li><b>Horacio Quiroga</b> (Uruguay): la selva y la muerte; <i>Cuentos de la selva</i> para niños.</li><li><b>Augusto Monterroso</b> (Guatemala): maestro del microrrelato. «El dinosaurio» tiene una sola frase: <mark>«Cuando despertó, el dinosaurio todavía estaba allí»</mark>.</li></ul>` },
    { tras: "El realismo mágico", html: `<h3>Cómo funciona el realismo mágico</h3><p>No es literatura fantástica, porque los hechos extraordinarios <b>no provocan miedo ni sorpresa</b>: forman parte de la vida normal. En <i>Cien años de soledad</i>, Remedios la bella sube al cielo mientras tiende las sábanas, y su familia solo lamenta haber perdido las sábanas; llueve durante cuatro años, once meses y dos días; una mujer come tierra y cal. El narrador lo cuenta con el mismo tono tranquilo con que describe una comida.</p><p>Sus rasgos son: <mark>tono neutro ante lo prodigioso</mark>, exageración (hipérbole), tiempo cíclico (la historia se repite en las generaciones), mezcla de mitos, historia de América y leyendas familiares, y un espacio inventado que resume un continente: Macondo, Comala, Santa María.</p>` },
    { tras: "El boom de los años 60", html: `<h3>Las técnicas del boom</h3><p>Los autores del boom leyeron a Faulkner, Joyce y Kafka, y renovaron la novela en español con técnicas atrevidas:</p>${L.tb(["Técnica", "En qué consiste", "Ejemplo"], [["Ruptura del orden temporal", "saltos al pasado y al futuro", "comienzo de Cien años de soledad"], ["Varios narradores", "la historia se cuenta desde varios puntos de vista", "La ciudad y los perros"], ["Monólogo interior", "los pensamientos del personaje, sin orden lógico", "Pedro Páramo"], ["Lector activo", "el lector debe reconstruir o elegir el orden", "Rayuela"], ["Mezcla de registros", "lo culto y lo popular, lo real y lo mítico", "Cien años de soledad"]])}<p>El boom se benefició también de editoriales de Barcelona, como Seix Barral, y de la agente literaria Carmen Balcells, que llevaron a estos autores a todo el mundo.</p>` },
    { tras: "Después del boom", html: `<h3>Dos comienzos para recordar</h3><p><i>Cien años de soledad</i> empieza con una de las frases más famosas de la literatura: «<i>Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo</i>». En una sola oración salta al futuro (el fusilamiento) y al pasado (el hielo), y presenta la familia y su mundo, donde el hielo es un prodigio.</p><p><i>Pedro Páramo</i> también arranca con fuerza: «<i>Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo</i>». Juan Preciado irá descubriendo poco a poco que todos los habitantes del pueblo están muertos y que las voces que oye son murmullos de ánimas.</p>` },
  ],
  videos: [
    ["El realismo mágico", L.vid("LLjy4wF8wi4", "Isabel Allende: «El realismo mágico es una manera de entender el mundo»", "AprendemosJuntos", 527754)],
    ["El boom de los años 60", L.vid("rgSAFOnuICM", "¿Por qué debería leer «Cien años de soledad»?", "Sé Curioso (TED-Ed)", 1187765)],
  ],
  ejemplos: [
    ["Analiza el comienzo de Cien años de soledad.", ["«Muchos años después… frente al pelotón»: prolepsis o salto al futuro.", "«Había de recordar aquella tarde remota»: analepsis o salto al pasado.", "El hielo aparece como algo maravilloso: lo cotidiano se vuelve mágico.", "Presenta al protagonista (Aureliano) y a su padre: la saga familiar."], "en una frase rompe el orden temporal y presenta el tono mágico de la novela."],
    ["¿Es realismo mágico o fantástico? «Un hombre ve que su casa se llena de mariposas amarillas que le siguen siempre; nadie en el pueblo se extraña.»", ["Hay un hecho extraordinario: las mariposas que le siguen.", "Los personajes no se asustan ni buscan explicación.", "El tono es natural, como si fuera normal."], "es realismo mágico (lo prodigioso se acepta con naturalidad). Si causara terror e intriga, sería literatura fantástica."],
    ["Comenta el microrrelato «Cuando despertó, el dinosaurio todavía estaba allí».", ["Tiene solo siete palabras, pero sugiere una historia completa.", "«Cuando despertó» invita a pensar en un sueño; «todavía» indica que el dinosaurio ya estaba antes.", "El lector debe imaginar el resto: quién despertó, dónde, por qué hay un dinosaurio."], "microrrelato que obliga al lector a completar la historia; la brevedad intensifica la sorpresa."],
  ],
  errores: [
    "Confundir el realismo mágico con la literatura fantástica: en el realismo mágico lo extraordinario no asusta.",
    "Atribuir Rayuela a García Márquez: es de Cortázar.",
    "Pensar que Macondo es un pueblo real: es inventado, aunque inspirado en Aracataca.",
    "Decir que Borges escribió novelas largas: escribió cuentos, poemas y ensayos.",
    "Creer que el boom es un movimiento con un manifiesto: fue un éxito editorial simultáneo de autores distintos.",
  ],
  ejercicios: [
    ["¿Qué es el microrrelato? Pon un ejemplo.", "Un relato brevísimo que sugiere una historia completa, como «El dinosaurio» de Monterroso."],
    ["Explica tres etapas de la poesía de Neruda.", "Amor juvenil (Veinte poemas de amor), surrealismo angustiado (Residencia en la tierra) y compromiso político (Canto general). También las Odas elementales."],
    ["¿Qué significa que en Cien años de soledad el tiempo es cíclico?", "Que la historia se repite: los Buendía repiten nombres, caracteres y errores generación tras generación."],
    ["¿Qué descubre Juan Preciado en Comala?", "Que todos los habitantes del pueblo están muertos y que las voces que oye son de ánimas."],
    ["Nombra tres técnicas del boom.", "Ruptura del orden temporal, monólogo interior y varios narradores (o el lector activo de Rayuela)."],
    ["¿Qué tienen en común los temas de Borges?", "Los laberintos, los espejos, el tiempo, el infinito y la identidad: reflexiones filosóficas en forma de cuento."],
    ["¿Qué ocurre en «Casa tomada»?", "Dos hermanos viven en una casa grande que algo invisible y misterioso va ocupando poco a poco, hasta que tienen que abandonarla."],
    ["Explica la frase de Carpentier «lo real maravilloso».", "Para Carpentier, la realidad americana (su naturaleza, su historia, sus mezclas culturales) ya es en sí misma prodigiosa y no hace falta inventar lo maravilloso."],
    ["Relaciona: La casa de los espíritus, Ficciones, Pedro Páramo, La ciudad y los perros.", "Isabel Allende, Borges, Juan Rulfo, Vargas Llosa."],
    ["Escribe un microrrelato de una o dos frases.", "Por ejemplo: «Al abrir la mochila encontró el examen aprobado. Lo malo es que todavía no lo había hecho.» Debe sugerir una historia y sorprender."],
  ],
  quiz: [
    ["«El dinosaurio» es un microrrelato de…", ["Monterroso", "Cortázar", "Rulfo"], 0, "Una sola frase."],
    ["Las Odas elementales son de…", ["Neruda", "Vallejo", "Paz"], 0, "Odas a la cebolla, al tomate…"],
    ["Contar en el realismo mágico lo prodigioso con tono…", ["neutro, natural", "de terror", "de burla"], 0, "Nadie se asombra."],
    ["Pedro Páramo transcurre en…", ["Comala", "Macondo", "Buenos Aires"], 0, "Un pueblo de muertos."],
    ["«Casa tomada» es un cuento de…", ["Cortázar", "Borges", "Quiroga"], 0, "Lo fantástico en lo cotidiano."],
  ],
  tarjetas: [
    ["Microrrelato", "Relato brevísimo que sugiere una historia: «El dinosaurio», de Monterroso."],
    ["Julio Cortázar", "Rayuela y cuentos fantásticos («Casa tomada»)."],
    ["Pablo Neruda", "Veinte poemas de amor, Canto general; Nobel en 1971."],
  ],
});
