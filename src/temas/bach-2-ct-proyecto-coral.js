// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "El proyecto coral: dirección, grabación y concierto",
  minutos: 60,
  objetivos: [
    "Dirigir una obra sencilla con los gestos básicos de dirección",
    "Planificar un ensayo y un proyecto coral completo",
    "Grabar y difundir una interpretación respetando los derechos de autor y de imagen",
    "Conocer los estudios y salidas profesionales relacionados con la voz",
  ],
  claves: ["anacrusa", "ictus", "corte", "plan de ensayo", "presencia escénica", "micrófono", "coro virtual", "derechos de autor"],
  pregunta: {
    texto: "¿Qué hace falta para que un coro de instituto pase de cantar en clase a dar un concierto y publicar su grabación?",
    respuesta: "Un <mark>proyecto</mark>: un objetivo, un repertorio, un calendario de ensayos, personas encargadas de cada tarea (dirección, sonido, difusión), un concierto bien preparado y una grabación que respete los <mark>derechos de autor</mark> y de imagen de todos.",
  },
  lectura: {
    titulo: "Del aula al escenario",
    html: `<p>Un concierto dura una hora, pero detrás hay semanas de trabajo: elegir obras, estudiar, ensayar, conseguir la sala, diseñar el cartel, preparar el programa de mano, probar el sonido, colocar sillas, recibir al público y, al final, recoger.</p>
    <p>En 2º de Bachillerato el coro deja de ser solo una actividad de clase y se convierte en un <b>proyecto</b> que los propios alumnos pueden dirigir y organizar. Es la mejor forma de aprender todo lo que rodea a la música: liderazgo, trabajo en equipo, tecnología y comunicación. Y también de descubrir si alguna de estas tareas puede ser tu futura profesión.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Dirigir: los gestos básicos",
      html: `<p>En 1º viste para qué sirven los gestos del director; ahora se trata de <b>hacerlos</b>. La posición inicial es de pie, estable, con los brazos a la altura del pecho y la mirada al coro. Antes de empezar se hace la <b>anacrusa</b> o <i>levare</i>: un gesto preparatorio de un pulso, al tempo de la obra, en el que el director <b>respira con el coro</b>.</p>
      <p>Cada pulso se marca con un <b>ictus</b>, el punto en que el gesto «rebota». Para terminar se hace el <b>corte</b>, un pequeño círculo que se cierra. El <b>tamaño</b> del gesto indica la dinámica (grande, forte; pequeño, piano), y la mano izquierda puede indicar entradas y matices.</p>`,
      svg: B.flujo("Empezar y terminar una obra", ["Posición: brazos arriba, mirada al coro", "Anacrusa: respirar juntos", "Ictus: primer pulso, entra el coro", "Corte: círculo que se cierra"]),
      video: { id: "38g8A5skd14", titulo: "Coro: gesto de dirección", canal: "Proyecto Educativo", vistas: 25580 },
    },
    {
      h: "Planificar un ensayo",
      html: `<p>Un ensayo eficaz tiene una estructura. Empieza con un <b>calentamiento</b> de 10 a 15 minutos (cuerpo, respiración y voz), sigue con el trabajo de la obra <b>más difícil</b> cuando el coro está fresco, alterna después el trabajo <b>por cuerdas</b> y de conjunto, y termina con una obra que ya salga bien, para acabar con sensación de logro.</p>
      <p>El director debe preparar el ensayo en casa: saber qué compases trabajará, qué problemas espera y cómo los va a corregir. Hablar poco y cantar mucho es una regla de oro: mejor una indicación concreta («más piano en el compás 12») que un discurso largo.</p>`,
      svg: B.barras("Ejemplo de ensayo de 60 minutos", [["Calentamiento", 12], ["Obra difícil", 20], ["Por cuerdas", 10], ["Repaso", 12], ["Obra final", 6]], { t: "Minutos dedicados a cada parte", unidad: " min" }),
    },
    {
      h: "El proyecto coral",
      html: `<p>Un <b>proyecto coral</b> parte de un <b>objetivo</b> (un concierto de Navidad, un intercambio con otro coro, una grabación benéfica) y de una <b>fecha</b>. A partir de ahí se elige el <b>repertorio</b> equilibrando estilos y dificultad, se hace un <b>calendario</b> de ensayos y se reparten <b>responsabilidades</b>.</p>
      <p>Además de cantantes y dirección, hacen falta equipos de <b>producción</b> (sala, sillas, permisos), <b>comunicación</b> (cartel, redes, programa de mano) y <b>técnica</b> (sonido, luces, grabación). Al acabar, una <b>evaluación</b> del grupo ayuda a mejorar el siguiente proyecto.</p>`,
      svg: B.estrella("Equipos de un proyecto coral", "Proyecto", ["Dirección", "Cantantes", "Producción", "Comunicación", "Técnica"]),
    },
    {
      h: "El concierto",
      html: `<p>En el concierto también se «canta» con el cuerpo. La <b>presencia escénica</b> incluye entrar y salir en orden, colocarse sin ruido, mantener una postura atenta, mirar al director y al público, no moverse entre obras y <b>saludar</b> todos a la vez cuando el director lo indica.</p>
      <p>Los <b>nervios</b> son normales: se controlan con un buen calentamiento, respiraciones lentas, rutinas conocidas y la confianza de haber ensayado. Un pequeño fallo no se corrige con gestos ni caras: se sigue cantando. El <b>programa de mano</b> informa al público de las obras, autores y textos.</p>`,
      svg: B.cajas("Claves de la presencia escénica", [["Entrada", "en orden|y en silencio"], ["Postura", "atenta|y estable"], ["Mirada", "director|y público"], ["Saludo", "todos|a la vez"]]),
    },
    {
      h: "Grabar la voz y el coro",
      html: `<p>Para grabar se usan micrófonos de dos tipos principales: los <b>dinámicos</b>, resistentes y poco sensibles, buenos para directo; y los de <b>condensador</b>, más sensibles y detallados, preferidos para grabar voces y coros. Un coro se suele grabar con una <b>pareja estéreo</b> situada delante, a cierta altura y distancia.</p>
      <p>La sala influye tanto como el micrófono: una iglesia da mucha reverberación; un aula, poca. Hay que vigilar que el nivel <b>no sature</b> (que no llegue al rojo). Después, con un editor gratuito como <b>Audacity</b>, se puede cortar, igualar el volumen y añadir un poco de reverberación.</p>`,
      svg: B.comparar("Dos tipos de micrófono", ["Dinámico", ["resistente", "poco sensible", "ideal en directo", "no necesita corriente"]], ["Condensador", ["muy sensible", "más detalle", "ideal para grabar", "necesita corriente"]]),
      video: { id: "RFpF5IX7WJI", titulo: "7 errores al grabar voces que debemos evitar", canal: "Nico Astegiano", vistas: 224164 },
    },
    {
      h: "Coros virtuales y difusión",
      html: `<p>En un <b>coro virtual</b>, cada cantante se graba en casa con auriculares, siguiendo una <b>pista guía</b> (piano y metrónomo, o un vídeo del director). Después se sincronizan todas las pistas, se mezcla el audio y se monta el vídeo en mosaico.</p>
      <p>Para difundir una grabación hay que respetar dos derechos. Los <b>derechos de autor</b>: si la obra no es de dominio público, puede necesitar permiso o licencia, y siempre se cita al compositor y al arreglista. Y el <b>derecho a la propia imagen</b>: para publicar vídeos de menores hace falta la autorización de sus familias y del centro.</p>`,
      svg: B.flujo("Pasos de un coro virtual", ["Pista guía con metrónomo", "Cada uno se graba con auriculares", "Sincronizar y mezclar el audio", "Montar el vídeo y pedir permisos"]),
      video: { id: "qVx-Wpl1IC4", titulo: "8 pasos básicos para elaborar un coro virtual", canal: "SergioValleGT", vistas: 16058 },
    },
    {
      h: "La voz como profesión",
      html: `<p>La voz abre muchos caminos profesionales. Se puede estudiar en un <b>conservatorio superior</b> las especialidades de <b>Canto</b> o de <b>Dirección</b> (de coro o de orquesta), o el grado de <b>Pedagogía</b> para ser profesor de música. Existen coros profesionales, como el <b>Coro Nacional de España</b> o el <b>Coro de RTVE</b>, y teatros de ópera con coro estable.</p>
      <p>Otras profesiones relacionadas son la <b>logopedia</b> (que cuida y rehabilita la voz), la <b>musicoterapia</b>, el <b>doblaje</b> y la locución, la <b>técnica de sonido</b> y la producción musical. Todas valoran lo que se aprende en un coro: escucha, disciplina y trabajo en equipo.</p>`,
      svg: B.rejilla("Salidas relacionadas con la voz", ["Profesión", "Dónde se estudia"], [["Cantante", "conservatorio superior"], ["Director de coro", "conservatorio superior"], ["Logopeda", "universidad"], ["Técnico de sonido", "FP superior"]]),
    },
  ],
  figura: {
    titulo: "Un proyecto coral completo",
    items: [["Dirigir", "🎼", "anacrusa", "ictus y corte"], ["Ensayar", "⏱", "plan", "por partes"], ["Actuar", "🎤", "presencia", "escénica"], ["Grabar", "🎧", "micrófonos", "y permisos"]],
  },
  video: { id: "4tQKa0JdTZY", titulo: "¿Cómo dar la entrada al coro? Ejercicio de técnica de dirección coral", canal: "Alejandro Navarro", vistas: 41663 },
  quiz: [
    ["La anacrusa o levare es…", ["el gesto final", "un gesto preparatorio de un pulso antes de empezar", "un tipo de micrófono", "una obra"], 1, "En él se respira con el coro."],
    ["El ictus es…", ["el punto donde rebota el gesto en cada pulso", "un tipo de coro", "el saludo", "un silencio"], 0, "Marca cada pulso."],
    ["Un gesto pequeño del director indica normalmente…", ["forte", "piano", "más rápido", "fin de la obra"], 1, "El tamaño indica la dinámica."],
    ["En un ensayo, la obra más difícil conviene trabajarla…", ["al final", "al principio, con el coro fresco", "nunca", "solo en casa"], 1, "Después del calentamiento."],
    ["Un equipo de comunicación de un proyecto coral se encarga de…", ["la afinación", "el cartel, las redes y el programa de mano", "las sillas", "los micrófonos"], 1, "Difunde el concierto."],
    ["Si te equivocas en un concierto…", ["paras y pides perdón", "sigues cantando sin gestos", "miras al compañero", "sales del escenario"], 1, "El público casi nunca lo nota."],
    ["Los micrófonos más usados para grabar coros son de…", ["condensador", "juguete", "teléfono fijo", "dinámicos solo"], 0, "Son más sensibles."],
    ["Al grabar, el nivel no debe…", ["superar el rojo (saturar)", "verse", "moverse", "bajar nunca"], 0, "La saturación estropea el sonido."],
    ["Para publicar vídeos de cantantes menores de edad hace falta…", ["nada", "autorización de sus familias y del centro", "solo el permiso del director", "cambiarles el nombre"], 1, "Derecho a la propia imagen."],
    ["El Coro Nacional de España es…", ["un coro profesional", "un coro escolar", "un grupo de pop", "un coro virtual"], 0, "Ligado al Instituto Nacional de las Artes Escénicas y de la Música."],
  ],
  examen: [
    ["El corte al final de una obra se hace con…", ["un aplauso", "un pequeño círculo que se cierra", "un golpe en el atril", "la voz"], 1, "Todos terminan a la vez."],
    ["Una regla de oro del ensayo es…", ["hablar mucho y cantar poco", "hablar poco y cantar mucho", "no calentar", "repetir todo desde el principio"], 1, "Indicaciones concretas."],
    ["La pareja estéreo sirve para…", ["grabar un coro con sensación de espacio", "amplificar a un solista", "afinar", "dirigir"], 0, "Dos micrófonos delante del coro."],
    ["En un coro virtual, la pista guía sirve para…", ["que todos canten al mismo tempo y tono", "decorar el vídeo", "sustituir al coro", "nada"], 0, "Con metrónomo o vídeo del director."],
    ["La especialidad de Dirección se estudia en…", ["el conservatorio superior", "la ESO", "una autoescuela", "el instituto de idiomas"], 0, "Enseñanzas artísticas superiores."],
  ],
  feynman: ["Cómo se empieza y se termina una obra dirigiendo", "Cómo se organiza un ensayo eficaz", "Qué equipos y pasos tiene un proyecto coral", "Qué hay que tener en cuenta al grabar y publicar"],
  mapa: ["EL PROYECTO CORAL", [["Dirección", "anacrusa · ictus · corte"], ["Ensayo", "calentar · difícil · repaso"], ["Concierto", "presencia · nervios · programa"], ["Grabación", "micrófonos · coro virtual · permisos"]]],
  tarjetas: [
    ["Anacrusa", "Gesto preparatorio antes del primer pulso."],
    ["Ictus", "Punto de rebote del gesto en cada pulso."],
    ["Corte", "Gesto que indica el final del sonido."],
    ["Plan de ensayo", "Orden y tiempo de cada actividad del ensayo."],
    ["Presencia escénica", "Forma de estar en el escenario."],
    ["Micrófono de condensador", "Micrófono sensible, ideal para grabar voces."],
    ["Coro virtual", "Grabaciones individuales unidas en un vídeo."],
    ["Derecho de imagen", "Derecho a decidir sobre la publicación de la propia imagen."],
  ],
  ejemplos: [
    ["Vas a dirigir el inicio de una obra en 4/4 que empieza en el primer tiempo. Describe tus gestos.", ["Posición: brazos arriba, mirada a todo el coro.", "Anacrusa en el cuarto tiempo, al tempo de la obra, respirando.", "Ictus del primer tiempo: entra el coro.", "Seguir el esquema de 4/4 (abajo, izquierda, derecha, arriba)."], "Anacrusa + ictus a tempo y esquema del compás."],
    ["Planifica un ensayo de 50 minutos a una semana del concierto.", ["10 min de calentamiento.", "15 min de los pasajes que aún fallan.", "15 min del programa completo en orden, sin parar.", "10 min de entradas, salidas y saludo."], "Ensayo general con escena incluida."],
    ["El coro quiere subir a redes el vídeo del concierto de una obra de Whitacre. ¿Qué compruebas?", ["Si la obra tiene derechos de autor vigentes y si se necesita licencia.", "Citar al compositor y al arreglista.", "Tener las autorizaciones de imagen de las familias.", "Contar con el permiso del centro."], "Derechos de autor y de imagen antes de publicar."],
  ],
  errores: [
    "Empezar a dirigir sin anacrusa, de modo que el coro no sabe cuándo entrar.",
    "Pasar el ensayo hablando en lugar de cantar.",
    "Grabar con el nivel tan alto que el sonido satura.",
    "Publicar vídeos sin permisos de imagen ni citar a los autores.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es la anacrusa en la dirección?", "Un gesto preparatorio de un pulso, a tempo, en el que el director respira con el coro antes de que entre."],
      ["Di las partes de un ensayo bien planificado.", "Calentamiento, obra difícil, trabajo por cuerdas o de conjunto, repaso y obra final que salga bien."],
      ["Nombra dos tipos de micrófono.", "Dinámico y de condensador."],
      ["Di dos salidas profesionales relacionadas con la voz.", "Por ejemplo, cantante y logopeda (también director de coro, profesor, técnico de sonido o actor de doblaje)."],
    ],
    m: [
      ["Explica cómo indica el director la dinámica.", "Con el tamaño del gesto: grande para forte, pequeño para piano; la mano izquierda puede reforzar los matices."],
      ["¿Por qué conviene trabajar la obra difícil al principio del ensayo?", "Porque el coro está fresco y concentrado tras el calentamiento y rinde más."],
      ["Explica los pasos de un coro virtual.", "Crear una pista guía, que cada cantante se grabe con auriculares, sincronizar y mezclar el audio y montar el vídeo con los permisos necesarios."],
      ["¿Qué dos derechos hay que respetar al publicar una grabación?", "Los derechos de autor de la obra (licencia y cita) y el derecho a la propia imagen de los cantantes."],
    ],
    a: [
      ["Dirige ante la clase el inicio y el final de una obra del repertorio. Grábate y evalúa tu anacrusa, tus ictus y tu corte.", "Respuesta abierta: autoevaluación con la grabación según los gestos del tema."],
      ["Diseña el plan completo de un proyecto coral: objetivo, repertorio, calendario, equipos y difusión.", "Respuesta abierta: documento con objetivos, obras, fechas, responsables, plan de comunicación y permisos."],
    ],
  },
  glosario: [
    ["Anacrusa", "Gesto preparatorio del director antes de la entrada."],
    ["Ictus", "Punto exacto en que se marca el pulso."],
    ["Corte", "Gesto de final del sonido."],
    ["Calentamiento", "Preparación del cuerpo y la voz antes de cantar."],
    ["Programa de mano", "Folleto con las obras y autores del concierto."],
    ["Pareja estéreo", "Dos micrófonos que captan el coro con sensación de espacio."],
    ["Saturación", "Distorsión por grabar a un nivel demasiado alto."],
    ["Pista guía", "Grabación de referencia para grabar en casa."],
    ["Dominio público", "Obras que pueden usarse libremente por haber caducado sus derechos."],
  ],
  situacion: {
    titulo: "Nuestro concierto de fin de curso",
    reto: "Organizar de principio a fin el concierto de despedida del coro de 2º de Bachillerato y su grabación.",
    pasos: [
      "Definir objetivo, fecha, sala y repertorio.",
      "Repartir equipos: dirección, producción, comunicación y técnica.",
      "Preparar los ensayos con su plan y dirigir alguna obra.",
      "Celebrar el concierto, grabarlo y difundirlo con todos los permisos.",
    ],
    producto: "Un concierto, su programa de mano y una grabación publicada.",
    evaluacion: [
      "La planificación es realista y completa.",
      "Cada equipo cumple sus tareas.",
      "La interpretación y la presencia escénica están cuidadas.",
      "Se respetan los derechos de autor y de imagen.",
    ],
  },
  familias: [
    "Asistid al concierto del coro y ayudad a difundirlo.",
    "Firmad a tiempo las autorizaciones de imagen.",
    "Hablad de las salidas profesionales de la música sin prejuicios.",
    "Ayudad a preparar los nervios antes de actuar: calma y confianza.",
  ],
  saberes: "Coro y Técnica Vocal II: técnica básica de dirección coral; planificación del ensayo; diseño y gestión de proyectos musicales; presencia escénica y control de la ansiedad; grabación y edición del sonido; coros virtuales; difusión, derechos de autor y de imagen; estudios y profesiones vinculados a la voz.",
  ideas: [
    "Dejar que cada alumno dirija el calentamiento al menos una vez.",
    "Grabar los ensayos y escucharlos en grupo.",
    "Organizar el concierto como proyecto interdisciplinar con otras materias.",
    "Invitar a un logopeda o a un cantante profesional a dar una charla.",
  ],
  fuentes: [
    { t: "Dirección de coro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Director_de_coro" },
    { t: "Coro Nacional de España (INAEM)", url: "https://ocne.mcu.es/" },
    { t: "Audacity, editor de audio libre", url: "https://www.audacityteam.org/" },
  ],
});
