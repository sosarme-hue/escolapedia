// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Novecentismo, vanguardias y Generación del 27",
  minutos: 45,
  objetivos: ["Reconocer el Novecentismo y a Juan Ramón Jiménez", "Explicar qué buscaban las vanguardias: ultraísmo, creacionismo, surrealismo", "Conocer a los poetas del 27 y su fusión de tradición y vanguardia"],
  claves: ["Novecentismo", "poesía pura", "vanguardias", "greguería", "surrealismo", "Generación del 27", "Lorca", "Las Sinsombrero"],
  pregunta: {
    texto: "«El arcoíris es la cinta que se pone la naturaleza después de lavarse la cabeza.» Es una frase de hace cien años. ¿Es un chiste, un poema o las dos cosas?",
    respuesta: "¡Las dos cosas! Es una <mark>greguería</mark> de Ramón Gómez de la Serna: humor + metáfora. Las <b>vanguardias</b> de principios del siglo XX querían romper con todo lo anterior y sorprender, y los poetas del <b>27</b> aprendieron de ellas sin olvidar la tradición.",
  },
  bloques: [
    {
      html: `<h3>El Novecentismo</h3><p>Hacia 1914 aparece una generación de intelectuales con formación universitaria y europea: <b>Ortega y Gasset</b> (ensayo), <b>Gabriel Miró</b> y <b>Ramón Pérez de Ayala</b> (novela). Buscan el rigor y un arte para minorías. En poesía destaca <mark>Juan Ramón Jiménez</mark>, Nobel en 1956, autor de <i>Platero y yo</i>, que persigue la <b>poesía pura</b>: desnuda, sin adornos.</p>`,
      svg: L.filas("Autores del Novecentismo", [
        ["Ortega y Gasset", "ensayo", "var(--inf)"], ["Juan Ramón Jiménez", "poesía pura", "var(--pen)"],
        ["Gabriel Miró", "novela lírica", "var(--leaf)"],
      ], "Novecentismo (hacia 1914)"),
    },
    {
      html: `<h3>Las vanguardias</h3><p>Movimientos artísticos que quieren <mark>romper con la tradición</mark> y sorprender: el <b>futurismo</b> (la velocidad y la máquina), el <b>cubismo</b>, el <b>ultraísmo</b> y el <b>creacionismo</b> (la imagen nueva) y el <b>surrealismo</b> (el subconsciente y los sueños). En España, <b>Ramón Gómez de la Serna</b> inventó la <i>greguería</i>: «Humorismo + metáfora».</p>`,
      svg: L.filas("Vanguardias y lo que buscaban", [
        ["Futurismo", "velocidad y máquinas", "var(--red)"], ["Creacionismo", "imágenes nuevas", "var(--pen)"],
        ["Surrealismo", "sueños, subconsciente", "var(--inf)"], ["Greguería", "humor + metáfora", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La Generación del 27</h3><p>Grupo de poetas amigos que se reunió en <b>1927</b> para homenajear a Góngora en el tricentenario de su muerte. Su gran aportación es <mark>unir tradición y vanguardia</mark>: escriben romances y canciones populares junto a imágenes surrealistas. Muchos coincidieron en la <b>Residencia de Estudiantes</b> de Madrid.</p>`,
      svg: L.filas("La Generación del 27 une tradición y vanguardia", [
        ["Tradición", "Góngora · romance · copla", "var(--leaf)"],
        ["Vanguardia", "imagen · surrealismo", "var(--red)"],
        ["Resultado", "poesía nueva y popular", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Los poetas del 27</h3><p><b>Federico García Lorca</b>: <i>Romancero gitano</i>, <i>Poeta en Nueva York</i> y teatro como <i>La casa de Bernarda Alba</i>. <b>Rafael Alberti</b>: <i>Marinero en tierra</i>. <b>Luis Cernuda</b>, <b>Vicente Aleixandre</b> (Nobel 1977), <b>Pedro Salinas</b>, <b>Jorge Guillén</b>, <b>Dámaso Alonso</b> y <b>Gerardo Diego</b>.</p>`,
      svg: L.tabla("Poetas del 27 y una obra de cada uno", ["Autor", "Obra"], [
        ["Lorca", "Romancero gitano"], ["Alberti", "Marinero en tierra"], ["Cernuda", "La realidad y el deseo"], ["Salinas", "La voz a ti debida"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Las Sinsombrero</h3><p>Las mujeres del 27 fueron olvidadas durante décadas. Se las llama <mark>Las Sinsombrero</mark> porque se quitaron el sombrero en público como gesto de libertad. Entre ellas, la poeta <b>Concha Méndez</b>, la pintora <b>Maruja Mallo</b>, la pensadora <b>María Zambrano</b> y la escritora <b>Ernestina de Champourcín</b>. La Guerra Civil dispersó al grupo: Lorca fue asesinado en 1936 y muchos se exiliaron.</p>`,
      svg: L.filas("Las Sinsombrero", [
        ["Concha Méndez", "poeta", "var(--red)"], ["Maruja Mallo", "pintora", "var(--leaf)"],
        ["María Zambrano", "filósofa", "var(--inf)"], ["E. de Champourcín", "poeta", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Del Novecentismo al 27",
    svg: L.eje("Hitos de la literatura española entre 1914 y 1936", [
      ["1914", "Novecentismo", ["Platero y yo", "Ortega"], "var(--inf)"],
      ["1918", "Vanguardias", ["ultraísmo", "greguerías"], "var(--red)"],
      ["1927", "Homenaje", ["a Góngora", "en Sevilla"], "var(--pen)"],
      ["1928", "Lorca", ["Romancero", "gitano"], "var(--leaf)"],
      ["1936", "Guerra Civil", ["muerte de Lorca", "y exilio"], "var(--muted)"],
    ]),
  },
  video: { id: "psRu2l8kQUA", titulo: "La Generación del 27: resumen", canal: "Clases Particulares en Ávila", vistas: 242592, megusta: 0, busqueda: "Generación del 27 vanguardias novecentismo" },
  quiz: [
    { q: "¿Qué homenaje dio nombre a la Generación del 27?", o: ["A Góngora", "A Cervantes", "A Bécquer"], a: 0, e: "En 1927 se cumplían 300 años de la muerte de Góngora." },
    { q: "La greguería es…", o: ["humor + metáfora", "un poema largo épico", "una novela"], a: 0, e: "Así la definió Ramón Gómez de la Serna." },
    { q: "Juan Ramón Jiménez buscaba la…", o: ["poesía pura", "poesía social", "poesía épica"], a: 0, e: "Una poesía desnuda, esencial." },
    { q: "¿Qué vanguardia explora los sueños y el subconsciente?", o: ["Futurismo", "Surrealismo", "Cubismo"], a: 1, e: "El surrealismo, inspirado en Freud." },
    { q: "¿Quién escribió La casa de Bernarda Alba?", o: ["Alberti", "Lorca", "Cernuda"], a: 1, e: "Federico García Lorca, 1936." },
  ],
  examen: [
    { q: "El gran rasgo del 27 es…", o: ["unir tradición y vanguardia", "rechazar toda tradición", "escribir solo novela"], a: 0, e: "Mezclan romance popular e imagen vanguardista." },
    { q: "Las Sinsombrero son…", o: ["las mujeres artistas del 27", "un movimiento futurista", "un grupo de novelistas realistas"], a: 0, e: "Escritoras y artistas olvidadas durante décadas." },
    { q: "¿Qué poeta del 27 recibió el Nobel?", o: ["Vicente Aleixandre", "Pedro Salinas", "Gerardo Diego"], a: 0, e: "Aleixandre, en 1977." },
  ],
  feynman: ["Qué es la poesía pura de Juan Ramón Jiménez", "Qué buscaban las vanguardias y un ejemplo", "Por qué el 27 se llama así y qué lo caracteriza", "Quiénes fueron Las Sinsombrero"],
  mapa: mapa("ENTRE 1914 Y 1936", "var(--eso)", [
    ["Novecentismo", "Ortega · Juan Ramón", "var(--inf)"],
    ["Vanguardias", "surrealismo · greguería", "var(--red)"],
    ["Generación del 27", "Lorca · Alberti · Cernuda", "var(--pen)"],
    ["Las Sinsombrero", "Méndez · Mallo · Zambrano", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Novecentismo", "Grupo intelectual de hacia 1914: Ortega, Juan Ramón Jiménez, Miró."],
    ["Vanguardias", "Movimientos de ruptura: futurismo, cubismo, ultraísmo, creacionismo, surrealismo."],
    ["Greguería", "Invento de Gómez de la Serna: humorismo + metáfora."],
    ["Generación del 27", "Poetas que unen tradición y vanguardia; homenaje a Góngora en 1927."],
    ["Federico García Lorca", "Autor de Romancero gitano y La casa de Bernarda Alba; asesinado en 1936."],
  ],
  familias: ["Inventad greguerías en familia sobre objetos de casa («La lavadora es…»).", "Escuchad una canción con letra de Lorca o Alberti (por ejemplo, de Camarón o Paco Ibáñez).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: Novecentismo, vanguardias y Generación del 27, con atención a las autoras (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Concurso de greguerías y caligramas.", "Ver el documental «Las Sinsombrero» y elaborar fichas de cada autora.", "Lectura en voz alta del «Romance de la luna, luna»."],
  },
  fuentes: [
    L.BOE,
    { t: "Residencia de Estudiantes (CSIC)", url: "https://www.residencia.csic.es/" },
    { t: "Generación del 27, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Explicar las etapas de la Generación del 27", "Comentar un poema de Lorca y una greguería", "Conocer el teatro de Lorca y la figura de Miguel Hernández"],
  bloques: [
    { tras: "El Novecentismo", html: `<h3>Juan Ramón Jiménez y la poesía pura</h3><p>Juan Ramón Jiménez (Moguer, 1881 - Puerto Rico, 1958), premio Nobel en 1956, es el maestro de los poetas del 27. Su obra pasa por tres etapas: una <b>sensitiva</b>, de influencia modernista y melancólica; una <b>intelectual</b>, desde <i>Diario de un poeta recién casado</i> (1916), en la que busca la <mark>poesía pura</mark>, desnuda de adornos («¡Intelijencia, dame / el nombre exacto de las cosas!»), y una <b>suficiente o verdadera</b> en el exilio americano. Escribía la <i>j</i> en lugar de la <i>g</i> como rasgo personal.</p><p>Su obra en prosa más conocida es <b><i>Platero y yo</i></b> (1914), elegía andaluza sobre un burrito «pequeño, peludo, suave», que muchos niños han leído en el colegio.</p>` },
    { tras: "Las vanguardias", html: `<h3>Ramón Gómez de la Serna y las greguerías</h3><p>Ramón Gómez de la Serna (Madrid, 1888-1963) fue el gran introductor de las vanguardias en España desde su tertulia del café Pombo. Inventó la <b>greguería</b>, que definió con una fórmula: <mark>humorismo + metáfora = greguería</mark>. Es una frase breve que mira las cosas de una manera nueva y sorprendente:</p><ul><li>«El arco iris es la bufanda del cielo».</li><li>«El tornillo es un clavo peinado con raya al medio».</li><li>«El agua se suelta el pelo en las cascadas».</li><li>«La luna es el ojo de buey del barco de la noche».</li></ul><p>Escribió miles. Son un buen modelo para entender la imagen vanguardista: unir dos realidades que nadie había relacionado.</p>` },
    { tras: "La Generación del 27", html: `<h3>Las etapas del grupo</h3>${L.tb(["Etapa", "Años", "Rasgos", "Ejemplos"], [["Poesía pura y vanguardias", "hasta 1927", "influencia de Juan Ramón y del ultraísmo; también poesía popular", "Marinero en tierra (Alberti)"], ["Surrealismo y compromiso", "1927-1936", "crisis personal, imágenes oníricas, preocupación social", "Poeta en Nueva York (Lorca), Sobre los ángeles (Alberti)"], ["Después de la guerra", "desde 1939", "exilio y nostalgia, o poesía existencial en España", "Hijos de la ira (Dámaso Alonso)"]])}<p>La Guerra Civil rompió el grupo: Lorca fue asesinado en 1936; Alberti, Cernuda, Salinas y Guillén se exiliaron; Aleixandre y Dámaso Alonso se quedaron en España.</p>` },
    { tras: "Los poetas del 27", html: `<h3>Lorca: poesía y teatro</h3><p>Federico García Lorca (Fuente Vaqueros, 1898 - Víznar, 1936) unió como nadie lo popular y lo vanguardista. En el <i>Romancero gitano</i> (1928) usa el romance tradicional con metáforas sorprendentes («Verde que te quiero verde. / Verde viento. Verdes ramas»). Su gran tema es el <b>destino trágico</b> y la frustración, a menudo simbolizados por la luna, la sangre, el caballo o el agua estancada.</p><p>En el teatro escribió tragedias rurales protagonizadas por mujeres que chocan contra las normas sociales: <i>Bodas de sangre</i>, <i>Yerma</i> y <b><i>La casa de Bernarda Alba</i></b> (1936), donde una madre autoritaria encierra a sus cinco hijas tras la muerte de su marido. Lorca dirigió además La Barraca, un teatro universitario que llevó los clásicos a los pueblos.</p>` },
    { tras: "Las Sinsombrero", html: `<h3>Miguel Hernández, entre el 27 y la guerra</h3><p>Miguel Hernández (Orihuela, 1910 - Alicante, 1942) fue pastor de cabras en su infancia y se formó leyendo por su cuenta. Su primer gran libro, <i>El rayo que no cesa</i> (1936), son sonetos de amor y dolor. Durante la Guerra Civil escribió poesía comprometida con la República (<i>Viento del pueblo</i>). Encarcelado al terminar la guerra, compuso en prisión el <i>Cancionero y romancero de ausencias</i>, con poemas tan conmovedores como las «Nanas de la cebolla», para su hijo, que pasaba hambre. Murió de tuberculosis en la cárcel a los 31 años. Se le considera el <mark>«genial epígono»</mark> del 27, según Dámaso Alonso.</p>` },
  ],
  videos: [
    ["Las vanguardias", L.vid("qKqUkrdKJpE", "El Novecentismo y las vanguardias: resumen", "Clases Particulares en Ávila", 124925)],
    ["Los poetas del 27", L.vid("of9aOwwNTac", "Breve biografía de Federico García Lorca", "JessieOrtiz87", 254701)],
  ],
  ejemplos: [
    ["Explica la greguería «El arco iris es la bufanda del cielo».", ["Identifica las dos realidades: el arco iris y una bufanda.", "Busca la semejanza: los dos son franjas alargadas de colores que «envuelven».", "Fíjate en el humor: el cielo se convierte en alguien que se abriga."], "es una metáfora humorística: humorismo + metáfora = greguería."],
    ["Comenta estos versos de Lorca: «Verde que te quiero verde. / Verde viento. Verdes ramas. / El barco sobre la mar / y el caballo en la montaña.»", ["Métrica: octosílabos con rima asonante en los pares: es un romance.", "Repetición obsesiva de «verde» (anáfora) que crea un ambiente misterioso.", "El verde simboliza la muerte y el deseo frustrado en el poema.", "Mezcla de tradición (romance) y vanguardia (imágenes irracionales)."], "romance tradicional con simbolismo y repeticiones de influencia vanguardista: síntesis típica del 27."],
    ["Explica por qué La casa de Bernarda Alba es una tragedia.", ["Hay un conflicto entre el deseo de libertad (Adela) y la autoridad (Bernarda).", "El destino parece inevitable: las hijas no pueden escapar del encierro.", "El final es la muerte: Adela se suicida al creer muerto a Pepe el Romano."], "es una tragedia porque el choque entre libertad y autoridad lleva a un final de muerte inevitable."],
  ],
  errores: [
    "Pensar que todos los del 27 escribieron igual: cada uno tiene su estilo, aunque compartan rasgos.",
    "Olvidar a las mujeres del 27: Concha Méndez, Ernestina de Champourcín, María Teresa León, Rosa Chacel…",
    "Confundir la greguería con un chiste: es una metáfora con humor.",
    "Atribuir Platero y yo a Lorca: es de Juan Ramón Jiménez.",
    "Creer que la Generación del 27 rechaza la tradición: la une con la vanguardia.",
  ],
  ejercicios: [
    ["¿Qué es la poesía pura?", "Una poesía desnuda de adornos y de anécdota, que busca la esencia de las cosas con palabras exactas. La defendió Juan Ramón Jiménez."],
    ["Inventa una greguería.", "Por ejemplo: «Los paraguas son murciélagos que se abren cuando llueve». Debe unir humor y metáfora."],
    ["¿Por qué se toma 1927 como fecha del grupo?", "Porque en 1927 se celebró en Sevilla un homenaje a Góngora en el tercer centenario de su muerte, en el que participaron varios de estos poetas."],
    ["Nombra tres poetas del 27 que se exiliaron.", "Rafael Alberti, Luis Cernuda y Pedro Salinas (también Jorge Guillén y Emilio Prados)."],
    ["¿Qué símbolos usa Lorca y qué significan?", "La luna (muerte), la sangre (vida, pasión y violencia), el caballo (pasión, vitalidad) y el agua estancada (frustración)."],
    ["Resume La casa de Bernarda Alba en dos líneas.", "Tras enviudar, Bernarda impone ocho años de luto y encierro a sus cinco hijas. La rebeldía de la menor, Adela, termina en tragedia."],
    ["¿Qué fue La Barraca?", "Un grupo de teatro universitario dirigido por Lorca que llevaba obras clásicas del Siglo de Oro a los pueblos de España."],
    ["¿Por qué se llama Sinsombrero a las mujeres del 27?", "Porque se quitaron el sombrero en público en la Puerta del Sol como gesto de libertad y rebeldía frente a las normas sociales."],
    ["¿Qué escribió Miguel Hernández en la cárcel?", "El Cancionero y romancero de ausencias, con poemas como las «Nanas de la cebolla»."],
    ["Explica la frase «unir tradición y vanguardia» con un ejemplo.", "Usar formas antiguas como el romance o la canción popular con imágenes nuevas y sorprendentes, como hace Lorca en el Romancero gitano."],
  ],
  quiz: [
    ["Platero y yo es de…", ["Juan Ramón Jiménez", "Lorca", "Alberti"], 0, "Prosa poética de 1914."],
    ["«Humorismo + metáfora» define…", ["la greguería", "el soneto", "el esperpento"], 0, "Fórmula de Ramón Gómez de la Serna."],
    ["El Romancero gitano usa sobre todo…", ["el romance", "el soneto", "el verso libre"], 0, "Octosílabos con rima asonante en los pares."],
    ["¿Quién escribió las «Nanas de la cebolla»?", ["Miguel Hernández", "Luis Cernuda", "Dámaso Alonso"], 0, "Desde la cárcel, para su hijo."],
    ["Poeta en Nueva York pertenece a la etapa…", ["surrealista", "de poesía pura", "romántica"], 0, "Imágenes oníricas y crítica social."],
  ],
  tarjetas: [
    ["Poesía pura", "Poesía esencial, sin adornos: Juan Ramón Jiménez."],
    ["La casa de Bernarda Alba", "Tragedia de Lorca (1936): autoridad frente a libertad."],
    ["Miguel Hernández", "El rayo que no cesa; murió en la cárcel en 1942."],
  ],
});
