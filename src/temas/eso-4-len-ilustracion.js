// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La literatura del siglo XVIII: Ilustración",
  minutos: 40,
  objetivos: ["Relacionar la Ilustración con la confianza en la razón y la educación", "Conocer los rasgos del Neoclasicismo", "Identificar a Feijoo, Cadalso, Jovellanos, Moratín e Iriarte"],
  claves: ["Ilustración", "razón", "Neoclasicismo", "ensayo", "fábula", "regla de las tres unidades", "Moratín"],
  pregunta: {
    texto: "En el siglo XVIII algunos escritores decían que el teatro debía servir para enseñar y no solo para entretener. ¿Qué pensarías tú de una serie que, en cada capítulo, te diera una lección?",
    respuesta: "Eso pensaban los <mark>ilustrados</mark>: la literatura debía <b>enseñar deleitando</b>. Confiaban en que la razón y la educación harían a la gente más libre y feliz, así que escribieron ensayos, fábulas y comedias con moraleja.",
  },
  bloques: [
    {
      html: `<h3>El Siglo de las Luces</h3><p>La <b>Ilustración</b> fue un movimiento europeo del siglo XVIII que confiaba en la <mark>razón</mark> para entender el mundo y mejorar la sociedad. Defendía la ciencia, la educación y el progreso, y criticaba la superstición. En España llegó con los <b>Borbones</b>, que crearon la Real Academia Española (1713) y la Biblioteca Nacional.</p>`,
      svg: L.linea("Línea del tiempo del siglo XVIII español", [
        ["1700", "Felipe V, primer Borbón", "var(--muted)"],
        ["1713", "nace la Real Academia Española", "var(--pen)"],
        ["1726", "Feijoo: Teatro crítico universal", "var(--inf)"],
        ["1789", "Revolución francesa", "var(--red)"],
        ["1806", "Moratín: El sí de las niñas", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El Neoclasicismo</h3><p>Es el estilo literario de la Ilustración. Imita a los clásicos griegos y latinos y sigue <b>normas</b>: orden, equilibrio, claridad y <mark>finalidad didáctica</mark>. En teatro impone la <b>regla de las tres unidades</b>: una sola acción, en un solo lugar, en menos de un día.</p>`,
      svg: L.filas("Regla de las tres unidades del teatro neoclásico", [
        ["Acción", "una sola historia", "var(--pen)"],
        ["Lugar", "un solo escenario", "var(--leaf)"],
        ["Tiempo", "menos de 24 horas", "var(--red)"],
      ], "las tres unidades"),
    },
    {
      html: `<h3>La prosa: el ensayo</h3><p>El género estrella es el <b>ensayo</b>, que expone ideas para reformar la sociedad. <b>Feijoo</b> combatió supersticiones en su <i>Teatro crítico universal</i>. <b>Cadalso</b> criticó las costumbres españolas en las <i>Cartas marruecas</i>, escritas como cartas de un viajero marroquí. <b>Jovellanos</b> escribió sobre economía y educación.</p>`,
      svg: L.tabla("Autores y obras de la prosa ilustrada", ["Autor", "Obra"], [
        ["Feijoo", "Teatro crítico"], ["Cadalso", "Cartas marruecas"], ["Jovellanos", "Informe… ley agraria"],
      ], "var(--inf)"),
    },
    {
      html: `<h3>La poesía: fábulas</h3><p>La poesía se vuelve didáctica. Las <b>fábulas</b> de <b>Iriarte</b> y <b>Samaniego</b> son relatos breves en verso, protagonizados por animales, que terminan con una <mark>moraleja</mark>. Iriarte se burla de los malos escritores en «El burro flautista»: un burro toca una flauta por casualidad y presume de músico.</p>`,
      svg: L.dialogo("Moraleja de El burro flautista de Iriarte", [
        ["el burro", "¡Oh, qué bien sé tocar!", "var(--muted)"],
        ["moraleja", "Sin reglas del arte, borriquitos hay", "var(--leaf)"],
        ["moraleja", "que una vez aciertan por casualidad.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El teatro: Moratín</h3><p><b>Leandro Fernández de Moratín</b> escribió la comedia más famosa del siglo: <i>El sí de las niñas</i> (1806). Paquita, de 16 años, va a casarse por obligación con don Diego, de 59, aunque ama a otro. La obra critica los <mark>matrimonios concertados</mark> y defiende la libertad para elegir.</p>`,
      svg: L.filas("Personajes de El sí de las niñas", [
        ["Paquita", "16 años, obediente", "var(--red)"],
        ["Don Diego", "59 años, prometido", "var(--muted)"],
        ["Don Carlos", "joven al que ella ama", "var(--pen)"],
        ["Doña Irene", "madre autoritaria", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "La Ilustración en tres géneros",
    svg: L.columnas("Ensayo, fábula y comedia neoclásica con sus autores", [
      ["prosa", "ENSAYO", ["Feijoo · Cadalso", "Jovellanos"], "var(--inf)"],
      ["poesía", "FÁBULA", ["Iriarte · Samaniego", "con moraleja"], "var(--leaf)"],
      ["teatro", "COMEDIA", ["Moratín:", "El sí de las niñas"], "var(--red)"],
    ]),
  },
  video: { id: "nKYmBSllQNo", titulo: "La Ilustración y el Neoclasicismo del siglo XVIII: literatura", canal: "Clases Particulares en Ávila", vistas: 96013, megusta: 0, busqueda: "literatura del siglo XVIII Ilustración Neoclasicismo" },
  quiz: [
    { q: "¿En qué confiaba sobre todo la Ilustración?", o: ["En la razón", "En la fe en los milagros", "En los sentimientos"], a: 0, e: "La razón y la ciencia debían guiar el progreso." },
    { q: "¿Qué finalidad tenía la literatura neoclásica?", o: ["Solo divertir", "Enseñar deleitando", "Expresar el yo del autor"], a: 1, e: "Era didáctica: educar mientras entretiene." },
    { q: "¿Quién escribió las Cartas marruecas?", o: ["Moratín", "Cadalso", "Samaniego"], a: 1, e: "José Cadalso, con un viajero marroquí que observa España." },
    { q: "El sí de las niñas critica…", o: ["los matrimonios concertados", "la guerra", "la ciencia"], a: 0, e: "Defiende que los jóvenes elijan con libertad con quién casarse." },
    { q: "Las fábulas terminan con…", o: ["una moraleja", "un soneto", "una muerte trágica"], a: 0, e: "La moraleja resume la enseñanza." },
  ],
  examen: [
    { q: "La regla de las tres unidades se refiere a…", o: ["acción, lugar y tiempo", "planteamiento, nudo y desenlace", "rima, ritmo y metro"], a: 0, e: "Una acción, un lugar y menos de un día." },
    { q: "¿Qué institución se creó en 1713?", o: ["La Real Academia Española", "El Museo del Prado", "La Universidad de Salamanca"], a: 0, e: "Para «limpiar, fijar y dar esplendor» a la lengua." },
    { q: "Feijoo es conocido por…", o: ["sus ensayos contra la superstición", "sus fábulas", "sus comedias"], a: 0, e: "Teatro crítico universal y Cartas eruditas." },
  ],
  feynman: ["Qué fue la Ilustración y en qué creía", "Tres rasgos del Neoclasicismo", "La regla de las tres unidades", "De qué trata El sí de las niñas"],
  mapa: mapa("ILUSTRACIÓN", "var(--eso)", [
    ["Ideas", "razón · educación · progreso", "var(--pen)"],
    ["Prosa", "ensayo: Feijoo, Cadalso", "var(--inf)"],
    ["Poesía", "fábulas: Iriarte, Samaniego", "var(--leaf)"],
    ["Teatro", "Moratín · tres unidades", "var(--red)"],
  ]),
  tarjetas: [
    ["¿Qué es la Ilustración?", "Movimiento del siglo XVIII que confía en la razón, la ciencia y la educación."],
    ["Neoclasicismo", "Estilo que imita a los clásicos, sigue normas y busca enseñar."],
    ["Cartas marruecas", "Obra de Cadalso que critica la sociedad española desde la mirada de un extranjero."],
    ["El sí de las niñas", "Comedia de Moratín (1806) contra los matrimonios concertados."],
    ["Fabulistas del XVIII", "Tomás de Iriarte y Félix María de Samaniego."],
  ],
  familias: ["Leed juntos una fábula de Samaniego («La lechera») y pedidle que escriba una moraleja actual.", "Preguntadle qué opinaría Moratín de los realities de citas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: la literatura del siglo XVIII en su contexto; lectura de fragmentos de ensayo, fábula y teatro neoclásico (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Lectura dramatizada de una escena de El sí de las niñas.", "Escribir una «carta marrueca» sobre costumbres actuales del instituto.", "Crear fábulas con moraleja sobre redes sociales."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Leandro Fernández de Moratín", url: "https://www.cervantesvirtual.com/portales/leandro_fernandez_de_moratin/" },
    { t: "Literatura española de la Ilustración, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Literatura_espa%C3%B1ola_de_la_Ilustraci%C3%B3n" },
  ],
  revisado: "2026-11-12",
};
