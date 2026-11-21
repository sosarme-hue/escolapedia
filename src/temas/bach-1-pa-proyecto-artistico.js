// Proyectos Artísticos, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");
const { marco, t, ln, rc, ci, pa } = B;

// Idea, forma y contexto: los tres vértices de todo proyecto.
const idea = marco("Un proyecto une una idea, una forma y un contexto",
  `${ci(130, 64, 46, 'fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"')}${ci(94, 122, 46, 'fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2"')}${ci(166, 122, 46, 'fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"')}
  ${t(130, 36, "Idea", { bold: 1, color: "var(--pen)" })}${t(130, 50, "qué quiero decir", { fs: 9, maxW: 70, color: "var(--muted)" })}
  ${t(72, 140, "Forma", { bold: 1, color: "var(--red)" })}${t(72, 154, "cómo lo hago", { fs: 9, maxW: 60, color: "var(--muted)" })}
  ${t(188, 140, "Contexto", { bold: 1, color: "var(--leaf)" })}${t(188, 154, "para quién", { fs: 9, maxW: 60, color: "var(--muted)" })}
  ${t(130, 108, "obra", { fs: 11, bold: 1 })}`);

module.exports = B.tema({
  titulo: "El proyecto artístico",
  minutos: 60,
  objetivos: [
    "Entender qué es un proyecto artístico y en qué se diferencia de un ejercicio de clase",
    "Reconocer los elementos de todo proyecto: intención, forma, contexto y público",
    "Conocer los principales tipos de proyecto en el arte actual",
    "Valorar el trabajo en equipo y las competencias que desarrolla un proyecto",
  ],
  claves: ["proyecto", "intención", "proceso", "obra", "público", "contexto", "colaboración", "arte contemporáneo"],
  pregunta: {
    texto: "¿Una obra de arte nace de un golpe de inspiración o de un plan?",
    respuesta: "Casi siempre de las dos cosas. La chispa inicial importa, pero lo que convierte una ocurrencia en obra es un <mark>proceso</mark>: investigar, probar, decidir y terminar. Eso es un <b>proyecto</b>.",
  },
  lectura: {
    titulo: "Un pueblo que se pinta a sí mismo",
    html: `<p>Imagina que un grupo de estudiantes de un instituto de pueblo propone al ayuntamiento pintar un mural en la pared vieja del mercado. No quieren un dibujo cualquiera: entrevistan a los mayores del pueblo, recogen fotos antiguas y diseñan una imagen con oficios y fiestas que ya casi nadie recordaba.</p>
    <p>Piden permiso, calculan cuánta pintura necesitan, buscan un pequeño patrocinio y reparten tareas. El mural tarda tres semanas en pintarse, pero tres meses en pensarse. El día de la inauguración, muchos vecinos se reconocen en la pared. Aquello no es solo un dibujo grande: es un <b>proyecto artístico</b>.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es un proyecto artístico",
      html: `<p>Un <b>proyecto artístico</b> es un plan de trabajo para crear una obra o una experiencia artística a partir de una <b>intención</b> clara. Tiene un objetivo, unas fases, unos recursos, un tiempo y un resultado que se muestra a un público.</p>
      <p>Se diferencia de un ejercicio de clase en que no se trata de aplicar una técnica, sino de <b>resolver un problema propio</b>: ¿qué quiero contar y cuál es la mejor forma de hacerlo? Por eso cada proyecto es distinto, aunque todos siguen un camino parecido.</p>
      <p>Un buen proyecto cabe en una frase: «Quiero <i>(intención)</i> mediante <i>(forma)</i> para <i>(público)</i> en <i>(lugar)</i>». Si no sabes completarla, todavía no tienes proyecto, solo una idea suelta.</p>`,
      svg: B.comparar("Ejercicio frente a proyecto", ["Ejercicio", ["aplica una técnica", "tema dado", "una sesión", "resultado previsto"]], ["Proyecto", ["resuelve una idea", "tema propio", "varias fases", "resultado abierto"]]),
    },
    {
      h: "Idea, forma y contexto",
      html: `<p>Todo proyecto une tres elementos. La <b>idea</b> o intención: lo que quieres expresar, denunciar, celebrar o investigar. La <b>forma</b>: el medio y la técnica con que lo haces (pintura, vídeo, escultura, performance, sonido…). Y el <b>contexto</b>: dónde se mostrará y para quién.</p>
      <p>Un mismo tema cambia según el contexto: un mural sobre el agua no funciona igual en un museo que en la fachada de una depuradora. Las buenas obras hacen que los tres elementos <mark>se refuercen</mark> entre sí.</p>`,
      svg: idea,
    },
    {
      h: "El proceso cuenta tanto como el resultado",
      html: `<p>En el arte actual el <b>proceso</b> se valora tanto como la obra final. Las pruebas, los bocetos, los errores y las decisiones forman parte del aprendizaje y, a menudo, se exponen junto a la obra.</p>
      <p>La creatividad no es un don misterioso: es un hábito. Surge de <b>mirar con atención</b>, acumular referencias, combinar ideas que no parecían relacionadas y <b>probar mucho</b>. La inspiración llega con más facilidad cuando ya se está trabajando.</p>`,
      svg: B.ciclo("El proceso creativo como ciclo", "crear", ["Mirar", "Pensar", "Probar", "Revisar"]),
      video: { id: "scZf0l4529M", titulo: "¿Qué es el arte contemporáneo? Todo lo que debes saber en 11 minutos", canal: "Artefact", vistas: 66669 },
    },
    {
      h: "Tipos de proyecto artístico",
      html: `<p>Según su resultado, hay proyectos de <b>obra</b> (un cuadro, una serie de fotos, una escultura), de <b>instalación</b> (un espacio que el público recorre), de <b>acción</b> (performance, happening), <b>audiovisuales</b> (vídeo, animación), <b>escénicos y musicales</b>, de <b>diseño</b> (cartel, libro, vestuario) y <b>digitales</b> (web, realidad aumentada).</p>
      <p>Muchos proyectos actuales son <b>interdisciplinares</b>: mezclan imagen, sonido, cuerpo y tecnología. Elegir el tipo no es una cuestión de gusto: depende de lo que quieras provocar. Una obra se contempla; una instalación se recorre; una acción se vive en directo y luego solo queda su registro.</p>`,
      svg: B.estrella("Tipos de proyecto artístico", "Proyecto", ["Obra", "Instalación", "Acción", "Audiovisual", "Escénico", "Diseño"]),
    },
    {
      h: "Arte en la comunidad",
      html: `<p>Algunos proyectos no se hacen para una galería, sino <b>con y para una comunidad</b>: un barrio, un hospital, un colegio. Es el <b>arte participativo</b> o comunitario. El público deja de ser espectador y se convierte en coautor.</p>
      <p>También existe el <b>arte de intervención</b> en el espacio público (murales, arte urbano autorizado, instalaciones efímeras) y el arte que denuncia problemas sociales o ambientales. En todos ellos importa el <mark>impacto</mark> en las personas tanto como la calidad formal.</p>`,
      svg: B.cajas("Ámbitos de un proyecto", [["Galería o museo", "obra para ser contemplada"], ["Espacio público", "murales, intervenciones"], ["Comunidad", "arte participativo"], ["Red", "proyectos digitales"]]),
    },
    {
      h: "Trabajar en equipo",
      html: `<p>Aunque haya proyectos individuales, la mayoría de los grandes proyectos son <b>colectivos</b>. En un equipo conviene repartir <b>roles</b>: dirección artística, producción (materiales, tiempos, dinero), documentación (fotos, diario) y comunicación (difusión).</p>
      <p>Para que funcione hacen falta acuerdos claros: un calendario compartido, reuniones cortas y frecuentes y respeto por las ideas ajenas. Discutir es bueno si se discute sobre <b>la obra</b>, no sobre las personas.</p>`,
      svg: B.cajas("Roles en un equipo de proyecto", [["Dirección", "visión de la obra"], ["Producción", "recursos y tiempo"], ["Documentación", "diario y fotos"], ["Comunicación", "difusión y público"]]),
    },
    {
      h: "Qué competencias desarrolla",
      html: `<p>Hacer un proyecto entrena mucho más que la técnica: la <b>creatividad</b>, el <b>pensamiento crítico</b>, la <b>planificación</b>, la <b>colaboración</b>, la <b>comunicación</b> oral y escrita y la capacidad de resolver imprevistos.</p>
      <p>Son las mismas competencias que piden la universidad y el mundo laboral, en las artes y fuera de ellas. Por eso la materia sigue el modelo del <b>aprendizaje basado en proyectos</b>: se aprende haciendo.</p>`,
      svg: B.barras("Competencias que trabaja un proyecto (peso orientativo)", [["Creatividad", 5], ["Planificación", 4], ["Colaboración", 4], ["Comunicación", 4], ["Técnica", 3]]),
      video: { id: "xIksvRMvCPs", titulo: "¿Cómo volverte una persona muy creativa? El arte de crear y el mito de la inspiración", canal: "Carly Design", vistas: 495964 },
    },
    {
      h: "Las fases en resumen",
      html: `<p>Todos los temas de esta materia siguen el recorrido de un proyecto real: <b>investigar</b> y buscar referentes, <b>idear</b> con bocetos, <b>planificar</b> los recursos y el presupuesto, <b>producir</b> la obra, <b>difundirla</b> y exponerla y, por último, <b>evaluar</b> y guardar todo en un portfolio.</p>
      <p>No es un camino rígido: a menudo hay que volver atrás. Pero tener el mapa delante ayuda a no perderse. Conviene anotar desde el primer día todo lo que se hace en un <b>diario de proyecto</b>: ideas, fuentes, pruebas, dudas y decisiones. Ese diario será la base del portfolio y de la evaluación final.</p>`,
      svg: B.flujo("Recorrido de un proyecto", ["Investigar y buscar referentes", "Idear y bocetar", "Planificar recursos", "Producir la obra", "Difundir, exponer y evaluar"]),
    },
  ],
  figura: {
    titulo: "El proyecto artístico en cuatro claves",
    items: [["Intención", "?", "qué quiero", "contar"], ["Forma", "✎", "medio y", "técnica"], ["Contexto", "⌂", "dónde y", "para quién"], ["Proceso", "↻", "probar, revisar", "terminar"]],
  },
  video: { id: "J3vgdNJ9yS4", titulo: "¿Qué es la instalación artística?", canal: "Canal22", vistas: 420586 },
  quiz: [
    ["Un proyecto artístico se diferencia de un ejercicio en que…", ["usa más materiales", "parte de una intención propia y tiene fases", "es siempre colectivo", "dura una sola clase"], 1, "Resuelve una idea propia con un proceso."],
    ["Los tres elementos que une todo proyecto son…", ["lápiz, papel y color", "idea, forma y contexto", "dinero, tiempo y suerte", "museo, artista y crítico"], 1, "Qué, cómo y dónde/para quién."],
    ["El «contexto» de una obra es…", ["su técnica", "el lugar y el público al que se dirige", "su precio", "su título"], 1, "Cambia cómo se recibe la obra."],
    ["En el arte actual, el proceso…", ["no importa", "se valora tanto como el resultado", "se esconde siempre", "solo interesa al profesor"], 1, "Bocetos y pruebas forman parte de la obra."],
    ["Una performance es un proyecto de…", ["diseño", "acción", "instalación", "obra bidimensional"], 1, "El cuerpo y el tiempo son el medio."],
    ["En el arte participativo, el público…", ["solo mira", "se convierte en coautor", "paga la entrada", "no existe"], 1, "La comunidad participa en la creación."],
    ["El rol de «producción» en un equipo se encarga de…", ["la idea", "materiales, tiempos y dinero", "las redes sociales", "la crítica"], 1, "Hace posible la obra."],
    ["Un proyecto interdisciplinar…", ["usa un solo medio", "mezcla lenguajes como imagen, sonido y cuerpo", "no tiene fases", "es siempre digital"], 1, "Combina disciplinas."],
    ["Según el tema, la creatividad…", ["es un don innato", "es un hábito que se entrena", "solo surge al azar", "no se puede aprender"], 1, "Mirar, combinar y probar mucho."],
    ["¿Qué fase va justo antes de producir la obra?", ["Evaluar", "Difundir", "Planificar recursos", "Exponer"], 2, "Primero se prevé qué hace falta."],
  ],
  examen: [
    ["Un grupo quiere hacer un mural sobre el agua en la fachada de una depuradora. ¿Qué elemento del proyecto aporta ese lugar?", ["La forma", "El contexto", "La técnica", "El presupuesto"], 1, "El lugar refuerza el significado."],
    ["Laura pinta un bodegón siguiendo las instrucciones del profesor. Es…", ["un proyecto", "un ejercicio", "una instalación", "arte participativo"], 1, "Aplica una técnica a un tema dado."],
    ["En un equipo, nadie hace fotos del proceso. ¿Qué rol falta?", ["Dirección", "Documentación", "Producción", "Comunicación"], 1, "La documentación registra el proceso."],
    ["¿Cuál es un ejemplo de arte comunitario?", ["Un cuadro en una colección privada", "Un mural diseñado con los vecinos de un barrio", "Una escultura de bronce en un museo", "Un retrato por encargo"], 1, "La comunidad participa."],
    ["¿Por qué se dice que el recorrido de un proyecto no es rígido?", ["Porque no tiene fases", "Porque a menudo hay que volver a fases anteriores", "Porque se empieza por el final", "Porque lo decide el público"], 1, "Revisar es parte del proceso."],
  ],
  feynman: ["Qué diferencia un proyecto de un ejercicio", "Cómo se relacionan idea, forma y contexto", "Por qué se valora el proceso", "Qué roles hay en un equipo de proyecto"],
  mapa: ["EL PROYECTO ARTÍSTICO", [["Qué es", "intención + fases + resultado"], ["Elementos", "idea · forma · contexto"], ["Tipos", "obra · instalación · acción · audiovisual"], ["Equipo", "roles · acuerdos · competencias"]]],
  tarjetas: [
    ["Proyecto artístico", "Plan de trabajo para crear una obra a partir de una intención, con fases y recursos."],
    ["Intención", "Lo que el artista quiere expresar o investigar."],
    ["Contexto", "Lugar, momento y público para los que se crea la obra."],
    ["Proceso", "Conjunto de pruebas, decisiones y pasos hasta la obra final."],
    ["Instalación", "Obra que ocupa un espacio que el público recorre o habita."],
    ["Performance", "Acción artística en vivo en la que el cuerpo es el medio."],
    ["Arte participativo", "Proyecto en el que el público o la comunidad colabora en la creación."],
    ["Interdisciplinar", "Que combina varios lenguajes artísticos."],
  ],
  ejemplos: [
    ["Convierte la ocurrencia «quiero hacer algo sobre el móvil» en un proyecto.", ["Intención: mostrar cuánto tiempo pasamos mirando la pantalla.", "Forma: serie de 10 fotografías de manos con móvil en lugares cotidianos.", "Contexto: exposición en el vestíbulo del instituto para alumnos y familias."], "Proyecto «Pantallas»: serie fotográfica con una intención, una forma y un público definidos."],
    ["Clasifica estos proyectos: un vídeo de 3 minutos, un recorrido de telas colgadas en el patio y una acción en la que bailas en la plaza.", ["El vídeo usa imagen en movimiento: audiovisual.", "Las telas crean un espacio que se recorre: instalación.", "Bailar en vivo ante el público: acción o performance."], "Audiovisual, instalación y acción."],
    ["Reparte roles en un equipo de cuatro para un mural.", ["Dirección: coordina el diseño final.", "Producción: pintura, permisos y calendario.", "Documentación: diario y fotos de cada sesión; Comunicación: cartel e invitaciones."], "Cada persona tiene una responsabilidad clara, aunque todos pintan."],
  ],
  errores: [
    "Empezar a producir sin tener clara la intención: la obra queda sin sentido.",
    "Pensar que el proyecto es solo el resultado final y no documentar el proceso.",
    "Elegir una forma que no encaja con el contexto ni con el público.",
    "Trabajar en equipo sin repartir roles ni calendario.",
  ],
  ejercicios: {
    b: [
      ["Define proyecto artístico con tus palabras.", "Un plan para crear una obra a partir de una intención propia, con fases, recursos, tiempo y un público."],
      ["Nombra los tres elementos que une todo proyecto.", "Idea (intención), forma (medio y técnica) y contexto (lugar y público)."],
      ["Cita cinco tipos de proyecto artístico.", "Obra, instalación, acción o performance, audiovisual, escénico, diseño o digital."],
      ["¿Qué cuatro roles conviene repartir en un equipo?", "Dirección artística, producción, documentación y comunicación."],
    ],
    m: [
      ["Explica con un ejemplo cómo cambia una obra si cambia el contexto.", "Una escultura de basura plástica en un museo invita a contemplar; la misma en una playa denuncia directamente la contaminación del lugar."],
      ["¿Por qué se exponen a veces los bocetos junto a la obra?", "Porque muestran el proceso, las decisiones y las pruebas, que forman parte del sentido de la obra y del aprendizaje."],
      ["Diferencia arte de galería y arte comunitario.", "El de galería se crea para ser contemplado; el comunitario se hace con una comunidad, que participa en su creación."],
      ["Enumera cuatro competencias que desarrolla un proyecto y explica una.", "Creatividad, planificación, colaboración y comunicación. Por ejemplo, la planificación obliga a prever tiempos y recursos."],
    ],
    a: [
      ["Busca un proyecto artístico participativo real y descríbelo: intención, forma, contexto y papel del público.", "Respuesta abierta. Debe identificar los tres elementos y explicar cómo participa la comunidad."],
      ["Escribe la ficha inicial de un proyecto propio: título, intención, forma, contexto, público y equipo.", "Respuesta abierta. Se valora la coherencia entre intención, forma y contexto."],
    ],
  },
  glosario: [
    ["Obra", "Resultado material o inmaterial de un proceso artístico."],
    ["Medio", "Material o soporte con el que se hace la obra."],
    ["Público", "Personas que reciben, miran o participan en la obra."],
    ["Happening", "Acción artística con participación del público y parte de improvisación."],
    ["Efímero", "Que dura poco tiempo y desaparece."],
    ["Intervención", "Obra que modifica un espacio existente."],
    ["Coautoría", "Creación compartida entre varias personas."],
    ["Aprendizaje basado en proyectos", "Método en el que se aprende resolviendo un proyecto real."],
  ],
  situacion: {
    titulo: "Nuestro primer proyecto",
    reto: "Proponer en grupo un proyecto artístico breve para un espacio del instituto.",
    pasos: [
      "Elegid un espacio del centro y observad quién lo usa.",
      "Decidid una intención: qué queréis contar a esas personas.",
      "Escoged la forma más adecuada y repartid los cuatro roles.",
      "Presentad la propuesta en una ficha de una página y en dos minutos en voz alta.",
    ],
    producto: "Ficha de proyecto con intención, forma, contexto, público, equipo y calendario aproximado.",
    evaluacion: [
      "La intención es clara y original.",
      "La forma encaja con el espacio y el público.",
      "Los roles y el calendario son realistas.",
      "La presentación es clara y breve.",
    ],
  },
  familias: [
    "Visitad juntos una exposición o un mural del barrio y preguntaos qué quería contar.",
    "Pedidle que os explique la idea de su proyecto en un minuto.",
    "Animadle a llevar un cuaderno donde apunte ideas e imágenes.",
    "Valorad el proceso (pruebas, bocetos) y no solo el resultado.",
  ],
  saberes: "El proyecto artístico: concepto, intención, forma y contexto; el proceso creativo; tipologías de proyectos (obra, instalación, acción, audiovisual, escénico, diseño, digital); arte participativo y en el espacio público; trabajo en equipo y roles.",
  ideas: [
    "Analizar en clase tres proyectos artísticos reales y localizar idea, forma y contexto.",
    "Crear un banco de ideas común en una pared del aula.",
    "Hacer un ensayo de roles con un mini proyecto de una sesión.",
    "Invitar a un artista local a explicar uno de sus proyectos.",
  ],
  fuentes: [
    { t: "Arte participativo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arte_participativo" },
    { t: "Museo Nacional Centro de Arte Reina Sofía", url: "https://www.museoreinasofia.es" },
  ],
});
