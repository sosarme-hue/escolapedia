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
