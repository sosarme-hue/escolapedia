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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Relacionar la literatura del XVIII con las reformas de Carlos III", "Comentar un fragmento de El sí de las niñas", "Reconocer los rasgos prerrománticos de finales de siglo"],
  bloques: [
    { tras: "El Siglo de las Luces", html: `<h3>La Ilustración en España</h3><p>En 1700 llega al trono la dinastía de los <b>Borbones</b> con Felipe V, que imita el modelo francés. Se crean instituciones para ordenar el saber: la <b>Real Academia Española</b> (1713), cuyo lema es «Limpia, fija y da esplendor», la Biblioteca Real (hoy Biblioteca Nacional, 1712) y la Real Academia de la Historia (1738). Con <b>Carlos III</b> (1759-1788), el «rey ilustrado», se impulsan reformas: caminos, canales, nuevas industrias, jardines botánicos y la mejora de la enseñanza. Es el <b>despotismo ilustrado</b>: <mark>«todo para el pueblo, pero sin el pueblo»</mark>.</p><p>Los ilustrados españoles fueron pocos, pero muy activos. Se reunían en tertulias y en las <b>Sociedades Económicas de Amigos del País</b>, que difundían técnicas agrícolas y escuelas. Su gran obstáculo fue la oposición de los sectores más tradicionales y, desde 1789, el miedo a la Revolución francesa.</p>` },
    { tras: "La prosa: el ensayo", html: `<h3>Feijoo y Jovellanos</h3><p>El monje benedictino <b>Benito Jerónimo Feijoo</b> escribió el <i>Teatro crítico universal</i> y las <i>Cartas eruditas</i>: cientos de ensayos breves en los que desmonta supersticiones (duendes, milagros falsos, remedios absurdos) con la observación y la razón. Fue un gran divulgador, uno de los primeros en escribir sobre ciencia para el público general.</p><p><b>Gaspar Melchor de Jovellanos</b>, político y escritor asturiano, representa al ilustrado completo. En el <i>Informe sobre la Ley Agraria</i> propuso modernizar el campo, y en sus memorias defendió la educación como base del progreso: «Las fuentes de la prosperidad social son muchas, pero todas nacen de un mismo origen, y este origen es la instrucción pública».</p>` },
    { tras: "La prosa: el ensayo", html: `<h3>Cartas marruecas, más de cerca</h3><p><b>José Cadalso</b> publicó las <i>Cartas marruecas</i> en 1789. Son 90 cartas entre tres personajes: <b>Gazel</b>, un joven marroquí que viaja por España; <b>Ben-Beley</b>, su viejo maestro en Marruecos, y <b>Nuño</b>, un español sensato que le hace de guía. La mirada del extranjero permite criticar con ironía lo que los españoles no ven: la nobleza ociosa, la mala educación, la manía de imitar a Francia o el desprecio por las ciencias. Cadalso no odia España: quiere mejorarla. Su método, el <mark>punto de vista del forastero</mark>, lo tomó de las <i>Cartas persas</i> de Montesquieu.</p>` },
    { tras: "El teatro: Moratín", html: `<h3>El sí de las niñas: personajes y tema</h3>${L.tb(["Personaje", "Quién es"], [["Doña Paquita", "joven de 16 años educada en un convento; obediente, pero enamorada"], ["Don Diego", "rico de 59 años, sensato; quiere casarse con ella"], ["Doña Irene", "madre de Paquita; quiere casarla por interés"], ["Don Carlos", "joven militar, sobrino de don Diego y amado de Paquita"], ["Rita y Calamocha", "criados que ayudan a los enamorados"]])}<p>Toda la acción ocurre en <b>una posada de Alcalá de Henares</b>, en <b>una noche</b> y con <b>una sola acción</b>: respeta las tres unidades. Al descubrir que Paquita ama a Carlos, don Diego renuncia y bendice la boda. El mensaje: la educación que obliga a las chicas a fingir y a obedecer produce matrimonios infelices; los hijos deben poder elegir. Don Diego lo resume: <i>«Esto se llama criar bien a una niña: enseñarla a que desmienta y oculte las pasiones más inocentes con una pérfida disimulación».</i></p>` },
    { tras: "El teatro: Moratín", html: `<h3>Hacia el Romanticismo</h3><p>A finales de siglo aparece una sensibilidad nueva que anticipa el Romanticismo: el <b>Prerromanticismo</b>. Se valora el sentimiento, la melancolía, la noche y la naturaleza salvaje. El mismo Cadalso escribió <i>Noches lúgubres</i>, donde el protagonista, Tediato, intenta desenterrar a su amada muerta en un cementerio. Poetas como <b>Juan Meléndez Valdés</b> pasan de los poemas ligeros y amorosos a temas más sombríos. Así, el siglo de la razón termina dando paso al siglo del sentimiento.</p>` },
  ],
  videos: [
    ["El Siglo de las Luces", L.vid("TpuZUQYeB-g", "La Ilustración del siglo XVIII en 5 minutos", "Clases Particulares en Ávila", 891075)],
    ["El teatro: Moratín", L.vid("2tbDpfoauzg", "El sí de las niñas: resumen", "Resumen Club", 162087)],
  ],
  ejemplos: [
    ["Explica por qué El sí de las niñas es una obra neoclásica.", ["Respeta las tres unidades: una acción (la boda), un lugar (la posada de Alcalá) y un tiempo (una noche).", "Tiene finalidad didáctica: critica los matrimonios concertados y la mala educación de las jóvenes.", "Usa prosa clara y personajes de clase media, verosímiles.", "El final es razonable: don Diego actúa con sensatez."], "es neoclásica por las tres unidades, la intención didáctica, la verosimilitud y la claridad."],
    ["Analiza la fábula de Samaniego «La lechera»: una joven va al mercado soñando con lo que comprará al vender la leche; salta de alegría, el cántaro se rompe y pierde todo.", ["Protagonista y acción: la lechera hace planes antes de tener el dinero.", "Desenlace: la caída del cántaro destruye todos sus sueños.", "Moraleja: no hay que hacer castillos en el aire ni contar con lo que aún no se tiene.", "Rasgos neoclásicos: brevedad, verso, enseñanza moral explícita."], "fábula didáctica cuya moraleja aconseja prudencia y no anticipar ganancias."],
    ["Explica qué técnica usa Cadalso en las Cartas marruecas y para qué sirve.", ["Las cartas las escribe sobre todo un viajero extranjero, Gazel.", "Lo que para un español es normal, a él le parece extraño y lo comenta.", "Eso permite criticar costumbres sin que parezca un ataque directo."], "el punto de vista del forastero: una mirada externa que facilita la crítica social con ironía."],
  ],
  errores: [
    "Pensar que la Ilustración fue un movimiento solo literario: fue científico, político y educativo.",
    "Creer que en El sí de las niñas Paquita se rebela abiertamente: obedece y sufre en silencio hasta el final.",
    "Confundir a Moratín (teatro) con Cadalso (Cartas marruecas) o con Feijoo (ensayo).",
    "Decir que la literatura neoclásica busca sobre todo emocionar: busca enseñar.",
    "Olvidar que el Prerromanticismo aparece ya a finales del XVIII.",
  ],
  ejercicios: [
    ["¿Qué significa «despotismo ilustrado»?", "Una forma de gobierno en la que el rey hace reformas para mejorar la vida del pueblo, pero sin dejar que el pueblo participe: «todo para el pueblo, pero sin el pueblo»."],
    ["Nombra dos instituciones creadas en el siglo XVIII y su función.", "La Real Academia Española (1713), para fijar y cuidar la lengua, y la Biblioteca Real (1712), para guardar y difundir los libros. También la Real Academia de la Historia."],
    ["¿Qué combatía Feijoo en sus ensayos?", "Las supersticiones y los errores comunes, con argumentos racionales y observaciones."],
    ["Explica la regla de las tres unidades.", "Una obra de teatro debe tener una sola acción principal, transcurrir en un solo lugar y durar como máximo un día."],
    ["¿Por qué don Diego renuncia a casarse con Paquita?", "Porque descubre que ella ama a su sobrino don Carlos y comprende que un matrimonio sin amor sería injusto e infeliz."],
    ["Escribe una moraleja para una fábula sobre una cigarra que no trabaja en verano.", "«Quien no trabaja a tiempo, pasa hambre después.» (Es la idea de «La cigarra y la hormiga».)"],
    ["¿Quiénes son Gazel, Ben-Beley y Nuño?", "Los tres corresponsales de las Cartas marruecas: un joven marroquí que viaja por España, su maestro y un amigo español."],
    ["Relaciona: Jovellanos, Iriarte, Moratín, Feijoo — teatro, fábulas, ensayo crítico, informe político.", "Jovellanos: informe político (Ley Agraria). Iriarte: fábulas. Moratín: teatro. Feijoo: ensayo crítico."],
    ["¿Qué rasgos prerrománticos tiene Noches lúgubres?", "La noche, el cementerio, la muerte de la amada, la desesperación y el sentimiento por encima de la razón."],
    ["Explica la frase de Jovellanos sobre la «instrucción pública».", "Dice que la educación es la fuente de toda prosperidad: un país solo progresa si educa a sus ciudadanos. Resume el ideal ilustrado."],
  ],
  quiz: [
    ["El lema de la Real Academia Española es…", ["Limpia, fija y da esplendor", "Todo para el pueblo", "Ciencia y virtud"], 0, "La RAE se fundó en 1713."],
    ["¿Dónde transcurre El sí de las niñas?", ["En una posada de Alcalá de Henares", "En un convento de Toledo", "En la corte de Madrid"], 0, "Respeta la unidad de lugar."],
    ["El «rey ilustrado» fue…", ["Carlos III", "Felipe II", "Fernando VII"], 0, "Reinó de 1759 a 1788."],
    ["Noches lúgubres es una obra…", ["prerromántica", "barroca", "realista"], 0, "Cadalso anticipa el Romanticismo."],
    ["Jovellanos defendía sobre todo…", ["la educación", "la Inquisición", "las supersticiones"], 0, "La instrucción pública como fuente de progreso."],
  ],
  tarjetas: [
    ["Despotismo ilustrado", "Reformas desde el poder: «todo para el pueblo, pero sin el pueblo»."],
    ["Jovellanos", "Ilustrado asturiano: la educación es la base del progreso."],
    ["Prerromanticismo", "Finales del XVIII: sentimiento, noche y melancolía (Noches lúgubres, de Cadalso)."],
  ],
});
