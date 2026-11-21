// Proyectos Artísticos, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");

module.exports = B.tema({
  titulo: "Las fases del proyecto",
  minutos: 60,
  objetivos: [
    "Conocer las fases de un proyecto artístico y el orden lógico entre ellas",
    "Comparar métodos de trabajo: la metodología proyectual de Munari y el design thinking",
    "Elaborar un calendario realista con hitos y un diario de proyecto",
    "Entender que el proceso es iterativo: se prueba, se revisa y se mejora",
  ],
  claves: ["fase", "metodología", "Munari", "design thinking", "prototipo", "iteración", "cronograma", "hito"],
  pregunta: {
    texto: "¿Por qué tantos proyectos de clase se terminan la noche antes de la entrega?",
    respuesta: "Porque se salta la planificación: se empieza tarde, sin fases ni plazos intermedios. Dividir el proyecto en <mark>fases con fecha</mark> convierte una montaña en una escalera de peldaños pequeños.",
  },
  lectura: {
    titulo: "Arroz verde",
    html: `<p>El diseñador italiano Bruno Munari explicaba su método con una receta: el arroz verde con espinacas. Nadie empieza echando ingredientes al azar en la olla. Primero se define qué plato se quiere, luego se piensa en qué partes tiene, se buscan los ingredientes, se prueba y se corrige la sal. Solo al final se sirve.</p>
    <p>Con un proyecto artístico pasa lo mismo. La creatividad no está reñida con el orden: al contrario, un buen método deja la cabeza libre para lo importante, que es <b>inventar</b>. Munari decía que el método no es algo absoluto, sino una guía que cada creador puede modificar si encuentra una forma mejor.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Por qué trabajar por fases",
      html: `<p>Dividir un proyecto en <b>fases</b> permite saber en todo momento qué toca hacer, repartir el esfuerzo en el tiempo y detectar problemas a tiempo. Cada fase tiene un <b>objetivo</b>, unas <b>tareas</b> y un <b>resultado</b> concreto que sirve de punto de partida para la siguiente.</p>
      <p>Las fases no son compartimentos estancos: a veces una prueba obliga a volver a investigar o a cambiar la idea. Eso no es un fracaso, es parte del método.</p>
      <p>Al terminar cada fase conviene hacer una pequeña <b>revisión</b>: ¿tenemos el resultado previsto?, ¿vamos a tiempo?, ¿hay que cambiar algo del plan? Cinco minutos de revisión ahorran horas de trabajo perdido.</p>`,
      svg: B.flujo("Las seis fases del proyecto artístico", ["Investigar: problema y referentes", "Idear: bocetos y propuesta", "Planificar: recursos y calendario", "Producir la obra", "Difundir y exponer", "Evaluar y documentar"]),
    },
    {
      h: "Fase 1 y 2: investigar e idear",
      html: `<p>La <b>investigación</b> parte de una pregunta: ¿qué quiero contar y qué se ha hecho ya sobre ello? Se recogen datos, imágenes y obras de otros artistas (referentes) y se define el problema con precisión.</p>
      <p>En la <b>ideación</b> se generan muchas ideas, se dibujan bocetos y se eligen las mejores. Al final de esta fase debe existir una <b>propuesta</b> clara: qué obra se hará, con qué técnica, de qué tamaño y para qué lugar.</p>`,
      svg: B.cajas("Investigar e idear: qué se obtiene", [["Investigar", "pregunta clara|referentes"], ["Idear", "bocetos|propuesta elegida"]]),
    },
    {
      h: "Fase 3 y 4: planificar y producir",
      html: `<p>En la <b>planificación</b> se calcula qué hace falta: materiales, herramientas, espacio, personas, permisos, dinero y tiempo. Se hace un presupuesto y un calendario.</p>
      <p>La <b>producción</b> es la fase de hacer la obra. Suele empezar con <b>pruebas</b> o maquetas a pequeña escala, porque es más barato equivocarse en pequeño. Después se realiza la obra definitiva y se documenta cada paso con fotos y notas.</p>`,
      svg: B.comparar("Planificar y producir", ["Planificar", ["materiales", "presupuesto", "calendario", "permisos"]], ["Producir", ["pruebas", "maqueta", "obra final", "registro"]]),
    },
    {
      h: "Fase 5 y 6: difundir y evaluar",
      html: `<p>Una obra se completa cuando llega al <b>público</b>. La <b>difusión</b> incluye el montaje de la exposición o la presentación, el texto que explica la obra, el cartel y las redes.</p>
      <p>La <b>evaluación</b> mira hacia atrás: ¿se cumplió la intención?, ¿qué funcionó y qué no?, ¿qué aprendimos? Sus conclusiones, junto a todo el material reunido, se guardan en el <b>portfolio</b>, que sirve de punto de partida para el siguiente proyecto.</p>`,
      svg: B.ciclo("Un proyecto alimenta al siguiente", "aprender", ["Difundir", "Evaluar", "Portfolio", "Nuevo proyecto"]),
    },
    {
      h: "El método de Bruno Munari",
      html: `<p>En su libro <i>¿Cómo nacen los objetos?</i> (1981), Bruno Munari propuso la <b>metodología proyectual</b>: un orden lógico de pasos que va del <b>problema</b> a la <b>solución</b>. Los principales son: definir el problema, descomponerlo en partes, recoger y analizar datos, pensar con creatividad, probar materiales y técnicas, hacer modelos, verificarlos y dibujar la solución final.</p>
      <p>Su gran idea es que la creatividad funciona mejor <mark>después</mark> de conocer bien el problema, no antes.</p>`,
      svg: B.flujo("Metodología proyectual de Munari (resumen)", ["Problema y sus partes", "Datos y análisis", "Creatividad", "Materiales y modelos", "Verificación y solución"]),
      video: { id: "sibxROkybQE", titulo: "Método de Bruno Munari", canal: "Métodos de Diseño", vistas: 25363 },
    },
    {
      h: "El design thinking",
      html: `<p>El <b>design thinking</b> o pensamiento de diseño, popularizado por la escuela de Stanford y la empresa IDEO, organiza la creación en cinco etapas: <b>empatizar</b> con las personas, <b>definir</b> el reto, <b>idear</b>, <b>prototipar</b> y <b>testear</b>.</p>
      <p>Se representa a menudo como un <b>doble diamante</b>: primero se abre el abanico para descubrir y luego se cierra para definir; después se vuelve a abrir para generar ideas y se cierra para producir una solución. Es muy útil en proyectos con público o comunidad, porque obliga a escuchar a las personas antes de decidir y a probar con ellas versiones baratas y rápidas, como un boceto pegado en la pared o una maqueta de cartón.</p>`,
      svg: B.diamante("Doble diamante: descubrir, definir, idear y producir"),
    },
    {
      h: "El calendario del proyecto",
      html: `<p>Un <b>cronograma</b> reparte las tareas en el tiempo. El más sencillo es el <b>diagrama de Gantt</b>: una tabla con las tareas en filas y las semanas en columnas, donde una barra indica cuándo se hace cada una. Se marcan <b>hitos</b>, momentos clave como «boceto aprobado» o «inauguración».</p>
      <p>Truco práctico: se planifica <b>hacia atrás</b> desde la fecha de entrega y se deja siempre un margen para imprevistos de al menos un 20 % del tiempo.</p>`,
      svg: B.rejilla("Cronograma (Gantt) de un proyecto de 6 semanas", ["Tarea", "S1-2", "S3-4", "S5-6"], [["Investigar", "■■", "", ""], ["Idear", "■", "■", ""], ["Producir", "", "■■", "■"], ["Exponer", "", "", "■■"]]),
    },
    {
      h: "Iterar: probar, fallar, mejorar",
      html: `<p><b>Iterar</b> significa repetir un ciclo de prueba y mejora: hago una versión, la muestro, recojo opiniones y hago otra mejor. Los artistas lo hacen desde siempre: Picasso hizo decenas de estudios antes del <i>Guernica</i>.</p>
      <p>Para iterar bien hay que aceptar el error como información y no como derrota, y guardar todas las versiones en el <b>diario de proyecto</b>. Así se ve cómo ha evolucionado la idea y por qué se tomó cada decisión.</p>`,
      svg: B.ciclo("Ciclo de iteración", "mejorar", ["Hacer", "Mostrar", "Escuchar", "Cambiar"]),
      video: { id: "gHGN6hs2gZY", titulo: "¿Qué es el Design Thinking? Una visión general", canal: "AJ&Smart", vistas: 1029830 },
    },
  ],
  figura: {
    titulo: "Las fases del proyecto en cuatro claves",
    items: [["Fases", "1→6", "investigar", "… evaluar"], ["Munari", "?→!", "del problema", "a la solución"], ["Design thinking", "◇◇", "abrir y", "cerrar"], ["Calendario", "▤", "Gantt", "e hitos"]],
  },
  video: { id: "_H33tA2-j0s", titulo: "Design Thinking ejemplo sencillo", canal: "Zafiro Jeem", vistas: 295608 },
  quiz: [
    ["¿Cuál es la primera fase de un proyecto?", ["Producir", "Investigar", "Exponer", "Evaluar"], 1, "Se parte de una pregunta y de referentes."],
    ["Al terminar la ideación debe haber…", ["una exposición", "una propuesta clara", "un portfolio", "un presupuesto aprobado"], 1, "Qué obra, con qué técnica y para dónde."],
    ["¿Por qué se hacen maquetas antes de la obra final?", ["Porque es obligatorio", "Porque es más barato equivocarse en pequeño", "Para venderlas", "Para alargar el proyecto"], 1, "Las pruebas evitan errores caros."],
    ["¿Quién propuso la metodología proyectual?", ["Picasso", "Bruno Munari", "Henri Cartier-Bresson", "Walt Disney"], 1, "En ¿Cómo nacen los objetos?"],
    ["Según Munari, la creatividad funciona mejor…", ["antes de conocer el problema", "después de analizar el problema", "sin método", "al final de todo"], 1, "Primero datos, luego ideas."],
    ["La primera etapa del design thinking es…", ["prototipar", "testear", "empatizar", "vender"], 2, "Comprender a las personas."],
    ["En el doble diamante, «abrir» significa…", ["elegir una sola opción", "generar y explorar muchas posibilidades", "cerrar el proyecto", "pedir dinero"], 1, "Divergir antes de converger."],
    ["Un diagrama de Gantt sirve para…", ["calcular el presupuesto", "repartir las tareas en el tiempo", "dibujar bocetos", "evaluar la obra"], 1, "Tareas en filas, semanas en columnas."],
    ["Un hito es…", ["un material", "un momento clave del calendario", "un tipo de boceto", "un error"], 1, "Por ejemplo, la inauguración."],
    ["Iterar consiste en…", ["copiar otra obra", "repetir ciclos de prueba y mejora", "trabajar sin plan", "exponer dos veces"], 1, "Hacer, mostrar, escuchar, cambiar."],
  ],
  examen: [
    ["Un grupo tiene 6 semanas. ¿Qué es más sensato?", ["Producir las 6 semanas", "Planificar hacia atrás desde la entrega y dejar margen", "Empezar la última semana", "No hacer calendario"], 1, "Margen de al menos un 20 %."],
    ["En una prueba, la pintura no agarra en la pared. ¿Qué haces según el método?", ["Abandonar", "Volver a investigar materiales y probar otro", "Pintar igual", "Cambiar de grupo"], 1, "Iterar: el error es información."],
    ["Un proyecto para mejorar el comedor escolar empieza entrevistando a los alumnos. ¿Qué etapa del design thinking es?", ["Testear", "Empatizar", "Prototipar", "Idear"], 1, "Se comprende a los usuarios."],
    ["¿Qué fase reúne el material para el siguiente proyecto?", ["Ideación", "Producción", "Evaluación y portfolio", "Difusión"], 2, "El portfolio guarda lo aprendido."],
    ["¿Cuál NO es una ventaja de trabajar por fases?", ["Repartir el esfuerzo", "Detectar problemas a tiempo", "Garantizar que nunca habrá errores", "Saber qué toca hacer"], 2, "Los errores siguen ocurriendo, pero se detectan antes."],
  ],
  feynman: ["Cuáles son las seis fases de un proyecto", "Qué propone el método de Munari", "Qué es el doble diamante", "Cómo se hace un cronograma con hitos"],
  mapa: ["LAS FASES DEL PROYECTO", [["Fases", "investigar → evaluar"], ["Munari", "del problema a la solución"], ["Design thinking", "doble diamante"], ["Tiempo", "Gantt · hitos · iterar"]]],
  tarjetas: [
    ["Fase", "Etapa de un proyecto con objetivo, tareas y resultado propios."],
    ["Metodología proyectual", "Método de Munari que ordena los pasos del problema a la solución."],
    ["Design thinking", "Método en cinco etapas centrado en las personas: empatizar, definir, idear, prototipar y testear."],
    ["Doble diamante", "Esquema que alterna abrir (explorar) y cerrar (decidir) dos veces."],
    ["Prototipo", "Versión de prueba de una obra o idea."],
    ["Cronograma", "Calendario que reparte las tareas de un proyecto en el tiempo."],
    ["Hito", "Momento clave del calendario, como una entrega o la inauguración."],
    ["Iterar", "Repetir ciclos de prueba y mejora."],
  ],
  ejemplos: [
    ["Ordena las fases de un proyecto de fotografía sobre tu barrio.", ["Investigar: pasear, preguntar a vecinos, ver fotógrafos de calle.", "Idear: lista de 20 escenas posibles y elegir 8. Planificar: horarios de luz y permisos.", "Producir las fotos, difundirlas en una exposición y evaluar."], "Investigar → idear → planificar → producir → difundir → evaluar."],
    ["Haz un cronograma para un mural en 4 semanas.", ["Semana 1: investigar y bocetar.", "Semana 2: propuesta final, materiales y permiso; hito: boceto aprobado.", "Semanas 3 y 4: pintar y documentar; hito final: inauguración el viernes."], "Gantt de 4 semanas con dos hitos y un día de margen."],
    ["Aplica el doble diamante a un cartel para la semana cultural.", ["Descubrir: preguntar qué actividades habrá y qué gusta al alumnado.", "Definir: un cartel que se lea a 5 metros y que destaque el concierto.", "Idear 15 bocetos y producir el elegido tras probarlo en el pasillo."], "Abrir, cerrar, abrir y cerrar hasta el cartel final."],
  ],
  errores: [
    "Saltarse la investigación y empezar directamente por la obra final.",
    "No dejar margen en el calendario para imprevistos.",
    "Considerar un fallo en una prueba como un fracaso en lugar de información.",
    "No guardar las versiones previas ni anotar las decisiones.",
  ],
  ejercicios: {
    b: [
      ["Escribe en orden las seis fases de un proyecto.", "Investigar, idear, planificar, producir, difundir y evaluar."],
      ["¿Qué es un hito? Pon dos ejemplos.", "Un momento clave del calendario: boceto aprobado, inauguración, entrega final."],
      ["Nombra las cinco etapas del design thinking.", "Empatizar, definir, idear, prototipar y testear."],
      ["¿Qué significa iterar?", "Repetir ciclos de hacer, mostrar, escuchar y mejorar."],
    ],
    m: [
      ["Explica por qué se planifica hacia atrás desde la entrega.", "Porque la fecha final no se mueve: así se ve cuánto tiempo queda para cada fase y se reserva margen."],
      ["Compara el método de Munari con el design thinking.", "Ambos van del problema a la solución con fases. Munari pone el acento en el análisis del problema y los materiales; el design thinking, en las personas y en probar prototipos con ellas."],
      ["¿Qué debe existir al final de la fase de ideación?", "Una propuesta clara: qué obra, técnica, tamaño, lugar y público."],
      ["Dibuja un Gantt sencillo de 3 semanas para una serie de 5 ilustraciones.", "Semana 1: investigar y bocetar; semana 2: ilustrar 3; semana 3: ilustrar 2, revisar y exponer. Con un hito al final de cada semana."],
    ],
    a: [
      ["Aplica la metodología de Munari a un objeto artístico: una lámpara hecha con materiales reciclados.", "Respuesta abierta: problema (iluminar con material reciclado), partes (base, pantalla, luz), datos (qué materiales, seguridad), creatividad, pruebas de materiales, modelo, verificación y solución."],
      ["Planifica un proyecto propio con fases, tareas, hitos y un Gantt de 6 semanas.", "Respuesta abierta. Se valora la coherencia, el margen para imprevistos y que cada fase tenga un resultado."],
    ],
  },
  glosario: [
    ["Metodología", "Conjunto ordenado de pasos para resolver algo."],
    ["Maqueta", "Modelo a escala reducida de una obra."],
    ["Empatizar", "Ponerse en el lugar de las personas a las que va dirigido el proyecto."],
    ["Divergir", "Abrir el pensamiento para generar muchas opciones."],
    ["Converger", "Elegir y concretar entre las opciones."],
    ["Diagrama de Gantt", "Tabla que muestra la duración de las tareas sobre un calendario."],
    ["Diario de proyecto", "Cuaderno donde se anotan ideas, pruebas y decisiones."],
    ["Verificación", "Comprobación de que una solución funciona."],
  ],
  situacion: {
    titulo: "El plan del proyecto",
    reto: "Planificar de principio a fin un proyecto artístico de seis semanas para el instituto.",
    pasos: [
      "Elegid una intención y el tipo de obra.",
      "Escribid las tareas de cada una de las seis fases.",
      "Haced un Gantt hacia atrás desde la fecha de exposición, con hitos y margen.",
      "Abrid un diario de proyecto con la primera entrada.",
    ],
    producto: "Plan de proyecto con fases, tareas, Gantt e hitos.",
    evaluacion: [
      "Las fases están completas y bien ordenadas.",
      "El calendario es realista y deja margen.",
      "Los hitos son claros y comprobables.",
      "El diario está iniciado y fechado.",
    ],
  },
  familias: [
    "Pedidle que os enseñe el calendario de su proyecto y preguntad por el próximo hito.",
    "Compartid cómo planificáis vosotros una tarea larga en casa o en el trabajo.",
    "Animadle a dividir los trabajos grandes en pasos con fecha.",
    "Celebrad las pruebas fallidas como parte del aprendizaje.",
  ],
  saberes: "Fases del proyecto artístico (investigación, ideación, planificación, producción, difusión, evaluación); metodologías proyectuales (Munari, design thinking, doble diamante); cronograma, diagrama de Gantt e hitos; iteración y diario de proyecto.",
  ideas: [
    "Cocinar en clase la receta del arroz verde de Munari como metáfora del método.",
    "Hacer un Gantt de pared con papel continuo para todo el grupo.",
    "Mini sprint de design thinking de 50 minutos sobre un problema del centro.",
    "Revisar a mitad de proyecto el calendario y reajustarlo.",
  ],
  fuentes: [
    { t: "Bruno Munari, ¿Cómo nacen los objetos? (Gustavo Gili)", url: "https://es.wikipedia.org/wiki/Bruno_Munari" },
    { t: "Design Council: The Double Diamond", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/" },
  ],
});
