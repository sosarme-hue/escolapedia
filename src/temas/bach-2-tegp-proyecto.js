// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · El proyecto gráfico-plástico: del boceto a la exposición (tema ampliado). Dibujos propios en SVG.
const { tema, TRUCO, cajas, flujo, versus, rueda, piramide, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "El proyecto gráfico-plástico: del boceto a la exposición",
  minutos: 60,
  bloque: "F",
  objetivos: [
    "Aplicar la metodología proyectual a una obra gráfico-plástica",
    "Planificar un proyecto individual o de equipo con tiempos, roles y recursos",
    "Seguir el proceso de elaboración de una obra pictórica",
    "Exponer, difundir y evaluar un proyecto, entendiendo el error como oportunidad",
  ],
  claves: ["metodología proyectual", "briefing", "investigación", "referentes", "boceto", "prototipo", "cronograma", "roles", "memoria", "portfolio", "comisariado", "cartela", "autoevaluación", "rúbrica"],
  pregunta: {
    texto: "¿Por qué los artistas hacen tantos bocetos antes de la obra final?",
    respuesta: "Porque crear no es tener una idea genial de golpe, sino un <b>proceso</b>. Los bocetos permiten probar composiciones, colores y técnicas sin gastar tiempo ni material en la obra definitiva, y detectar <mark>errores</mark> cuando aún son baratos de corregir. Picasso hizo más de 45 estudios para el <i>Guernica</i>: cada uno fue un paso para decidir qué funcionaba.",
  },
  bloques: [
    { h: "La metodología proyectual", p: [
      "Un <mark>proyecto</mark> es un trabajo con un objetivo, unas fases y un resultado. La <b>metodología proyectual</b>, que diseñadores como Bruno Munari describieron paso a paso, ayuda a pasar de una idea vaga a una obra acabada. Sus fases básicas son: <b>definir</b> el problema o el encargo, <b>investigar</b>, <b>idear</b>, <b>experimentar</b> con bocetos y pruebas, <b>realizar</b> la obra, <b>presentarla</b> y <b>evaluarla</b>.",
      "No es un camino rígido: a menudo hay que volver atrás, por ejemplo cuando una prueba técnica falla y obliga a cambiar el material. Lo importante es documentar cada paso para poder explicar y mejorar el trabajo.",
    ], svg: flujo("Fases del proyecto", ["Definir el encargo", "Investigar y buscar referentes", "Idear y bocetar", "Experimentar y realizar", "Exponer y evaluar"]) },
    { h: "Definir e investigar", p: [
      "Todo empieza por entender el <b>encargo</b> o <i>briefing</i>: qué hay que hacer, para quién, con qué medios, en qué formato y con qué plazo. Si el proyecto es libre, conviene formularlo como una pregunta: «¿cómo puedo representar el paso del tiempo con técnicas de grabado?».",
      "Después se <b>investiga</b>: se buscan <b>referentes</b> artísticos, se recogen imágenes, textos y datos, se hacen fotografías y apuntes del natural y se exploran técnicas posibles. Un <b>panel de inspiración</b> o <i>moodboard</i> con colores, texturas e imágenes ayuda a fijar el tono del proyecto. Investigar no es copiar: es alimentar las propias ideas.",
    ], svg: cajas("Investigar", [["Briefing", "qué, para quién, cuándo"], ["Referentes", "artistas y obras"], ["Apuntes", "del natural"], ["Moodboard", "panel de inspiración"], ["Pruebas", "técnicas posibles"], ["Cuaderno", "todo anotado"]]), v: ["pro-a", "Por qué necesitas un mini proyecto creativo"] },
    { h: "Idear, bocetar y experimentar", p: [
      "Para generar ideas sirven técnicas como la <b>lluvia de ideas</b>, los <b>mapas mentales</b>, las listas de palabras o la combinación de conceptos al azar. Se trata de producir muchas ideas y elegir después. Las elegidas se desarrollan en <b>bocetos</b> rápidos (miniaturas de composición) y luego en <b>estudios</b> más detallados de partes concretas.",
      "La <b>experimentación técnica</b> es esencial en esta materia: probar papeles, tintas, mezclas o planchas de prueba antes de la obra definitiva. Todo se guarda en el <b>cuaderno de artista</b>, que es la memoria visual del proceso y a menudo resulta tan interesante como la obra final.",
    ], extra: TRUCO("haz miniaturas de 5 × 7 cm: son tan pequeñas que te obligan a pensar en las grandes masas y no en los detalles."), svg: piramide("Del mucho al uno", [["Muchas ideas", "lluvia de ideas"], ["Miniaturas", "composición"], ["Estudios", "detalles y color"], ["Obra final", ""]]) },
    { h: "Planificar y trabajar en equipo", p: [
      "Un proyecto necesita un <b>cronograma</b> que reparta el tiempo entre las fases, con fechas de entrega intermedias, y una lista de <b>materiales y recursos</b> con su coste. Es habitual dedicar más tiempo del previsto a la realización, así que conviene dejar margen.",
      "En los proyectos de equipo hay que <b>repartir roles</b> según las habilidades: coordinación, investigación, dibujo, estampación, montaje, comunicación. Funcionan bien las reuniones breves de seguimiento, un espacio compartido para los documentos y normas claras para decidir y resolver conflictos. Todos deben participar en todas las fases, aunque cada uno lidere una.",
    ], svg: rueda("EQUIPO", ["coordinación", "investigación", "dibujo", "producción", "montaje", "comunicación"]) },
    { h: "El proceso de una obra pictórica", p: [
      "El RD 243/2022 destaca el <b>proceso de elaboración de una obra pictórica</b>. Tras los bocetos, se elige y prepara el <b>soporte</b> (imprimación, tensado), se hace el <b>encaje</b> o transferencia del dibujo, a veces con una <b>cuadrícula</b> para ampliar el boceto, y se establecen las grandes <b>masas</b> de valor y color.",
      "Luego se trabaja de lo general a lo particular: se ajustan relaciones de color, se construyen las formas y se dejan los <b>detalles</b> y acentos para el final. Es útil mirar la obra de lejos, en un espejo o en una foto en blanco y negro para comprobar los valores. Por último se firma, se deja secar y se protege con barniz si la técnica lo requiere.",
    ], svg: flujo("Elaborar una pintura", ["Boceto definitivo", "Preparar el soporte", "Encaje y cuadrícula", "Masas de valor y color", "Detalles, firma y barniz"]) },
    { h: "Exponer y difundir", p: [
      "Una obra se completa cuando la ven otros. Montar una <b>exposición</b> implica elegir y ordenar las obras con un hilo conductor (eso es <b>comisariar</b>), decidir su colocación a la altura de los ojos (el centro de las obras a unos 150 cm del suelo), cuidar la iluminación y escribir las <b>cartelas</b> con autor, título, año, técnica y medidas, y un texto de sala breve.",
      "La <b>difusión</b> incluye carteles, invitaciones, redes sociales y la web del centro, con buenas fotografías de las obras. También es importante el <b>portfolio</b>, la selección de tus mejores trabajos con su proceso, que te servirá para las pruebas de acceso a estudios superiores de arte y diseño.",
    ], svg: cajas("Montar una exposición", [["Hilo conductor", "comisariado"], ["Altura", "centro a 150 cm"], ["Luz", "sin reflejos"], ["Cartelas", "autor, título, técnica"], ["Texto de sala", "breve"], ["Difusión", "cartel y redes"]]), v: ["pro-b", "Cómo exponer en una galería de arte"] },
    { h: "Evaluar el proyecto", p: [
      "La <b>evaluación</b> no solo mide el resultado: valora el proceso, la investigación, la técnica, la creatividad y la presentación. Se usan <b>rúbricas</b> con criterios y niveles claros, que conviene conocer desde el principio. Hay tres miradas: la <b>autoevaluación</b>, la <b>coevaluación</b> entre compañeros y la del profesorado.",
      "Una buena crítica es concreta y constructiva: señala lo que funciona, lo que se puede mejorar y cómo. Preguntas útiles: ¿se ha respondido al encargo?, ¿la técnica está bien resuelta?, ¿la composición y el color transmiten la idea?, ¿qué haría diferente la próxima vez?",
    ], svg: versus("Qué se evalúa", ["Proceso", ["investigación", "bocetos y pruebas", "planificación", "trabajo en equipo"]], ["Resultado", ["respuesta al encargo", "calidad técnica", "creatividad", "presentación"]]) },
    { h: "El error como oportunidad", p: [
      "En el arte, el <mark>error</mark> no es un fracaso sino información. Una mancha inesperada en una acuarela, una mordida excesiva en un aguafuerte o una estampa mal registrada enseñan algo sobre el material. Muchos descubrimientos artísticos nacieron de accidentes: el frottage de Max Ernst o las texturas de la sal en la acuarela.",
      "Registrar los errores en el cuaderno, analizar sus causas y probar soluciones es parte del aprendizaje. Un artista no es quien nunca se equivoca, sino quien sabe aprovechar lo que ocurre en el proceso. Por eso las pruebas de estado y los bocetos se conservan: cuentan la historia real de la obra.",
    ], svg: flujo("Aprender del error", ["Algo sale distinto", "Analizar la causa", "Probar soluciones", "Incorporar lo aprendido"]) },
  ],
  figura: { titulo: "El proyecto gráfico-plástico de un vistazo", aria: "Resumen de la metodología, la planificación, la exposición y la evaluación", cols: [
    ["Metodología", ["definir", "investigar", "idear", "realizar"]],
    ["Planificación", ["cronograma", "recursos", "roles", "cuaderno"]],
    ["Exposición", ["comisariado", "cartelas", "difusión", "portfolio"]],
    ["Evaluación", ["rúbrica", "autoevaluación", "coevaluación", "error útil"]],
  ] },
  video: ["pro-a", "Por qué necesitas un mini proyecto creativo"],
  ejemplos: [
    ["Planifica un proyecto de cuatro semanas.", ["Semana 1: briefing, investigación y moodboard.", "Semana 2: ideas, miniaturas y pruebas técnicas.", "Semana 3: realización de la obra.", "Semana 4: acabado, montaje, exposición y evaluación."], "Cronograma con entregas parciales."],
    ["Redacta una cartela.", ["Nombre del autor o autora.", "Título en cursiva y año.", "Técnica y soporte.", "Medidas en cm (alto × ancho)."], "Ana López · Raíces, 2027 · Linograbado sobre papel · 30 × 21 cm."],
    ["Analiza un error de estampación.", ["La estampa sale gris y sin negros.", "Causa: poca tinta o poca presión.", "Solución: entintar más y ajustar el tórculo.", "Anotarlo en el cuaderno."], "El error se convierte en conocimiento técnico."],
  ],
  errores: [
    "Saltarse los bocetos y empezar directamente la obra final.",
    "No planificar el tiempo y dejar la realización para el final.",
    "Repartir el trabajo en equipo sin que todos participen en las decisiones.",
    "Exponer sin cartelas ni texto que explique el proyecto.",
    "Tirar las pruebas fallidas en lugar de documentarlas.",
  ],
  ejercicios: {
    b: [
      ["Nombra las fases de la metodología proyectual.", "Definir, investigar, idear, experimentar y realizar, exponer y evaluar."],
      ["¿Qué es un briefing?", "El encargo: qué hay que hacer, para quién, con qué medios y plazo."],
      ["¿Qué datos lleva una cartela?", "Autor, título, año, técnica y medidas."],
      ["¿Qué es un portfolio?", "Una selección de los mejores trabajos con su proceso."],
    ],
    m: [
      ["¿Para qué sirve un moodboard?", "Para reunir imágenes, colores y texturas que fijan el tono visual del proyecto."],
      ["¿Por qué se usa una cuadrícula para ampliar un boceto?", "Para trasladar las proporciones con precisión a un formato mayor."],
      ["Diferencia autoevaluación y coevaluación.", "En la autoevaluación cada uno valora su trabajo; en la coevaluación lo valoran los compañeros."],
      ["¿Qué significa comisariar una exposición?", "Seleccionar y ordenar las obras con un hilo conductor y decidir cómo se presentan."],
    ],
    a: [
      ["Diseña la rúbrica de un proyecto de grabado.", "Respuesta abierta: criterios (investigación, bocetos, técnica, creatividad, presentación) con cuatro niveles descritos."],
      ["Planifica una exposición del trabajo de la clase.", "Respuesta abierta: hilo conductor, espacio, montaje, cartelas, difusión y calendario."],
      ["Cuenta un error en un trabajo tuyo y cómo lo aprovechaste.", "Respuesta abierta: descripción, causa, solución y aprendizaje."],
    ],
  },
  quiz: [
    ["El primer paso de un proyecto es…", ["definir el encargo", "barnizar", "exponer", "firmar"], "Briefing."],
    ["Describió paso a paso la metodología proyectual…", ["Bruno Munari", "Goya", "Durero", "Warhol"], "Diseño."],
    ["Las miniaturas sirven para…", ["probar composiciones", "firmar", "barnizar", "enmarcar"], "Bocetos."],
    ["El cuaderno de artista recoge…", ["el proceso", "solo la obra final", "las notas de otras materias", "nada"], "Memoria visual."],
    ["El cronograma organiza…", ["el tiempo", "los colores", "las tintas", "los marcos"], "Fases."],
    ["La altura habitual del centro de las obras es…", ["unos 150 cm", "50 cm", "3 m", "el suelo"], "Ojos."],
    ["Una cartela incluye…", ["autor, título, técnica y medidas", "el precio solo", "la biografía completa", "el horario"], "Datos."],
    ["Una rúbrica es…", ["una tabla de criterios y niveles", "un pincel", "un tipo de papel", "una exposición"], "Evaluación."],
    ["El error en el proceso es…", ["una oportunidad de aprendizaje", "siempre un fracaso", "irrelevante", "algo que ocultar"], "Información."],
    ["Picasso hizo para el Guernica…", ["decenas de estudios", "ningún boceto", "un solo dibujo", "una fotografía"], "Proceso."],
  ],
  examen: [
    ["En un equipo, los roles se reparten…", ["según las habilidades, con participación de todos", "al azar", "uno lo hace todo", "sin hablar"], "Colaboración."],
    ["Para comprobar los valores de una pintura conviene…", ["verla en blanco y negro o de lejos", "mirarla muy de cerca", "barnizarla", "cambiar el marco"], "Valor."],
    ["La difusión de una exposición incluye…", ["cartel, redes y web", "solo el boca a boca", "nada", "el barniz"], "Público."],
    ["Evaluar el proceso significa valorar…", ["investigación, bocetos y planificación", "solo el resultado", "el precio", "el tamaño"], "Recorrido."],
  ],
  feynman: ["fases del proyecto", "investigación y referentes", "bocetos y experimentación", "exposición y difusión", "evaluación y error"],
  mapa: ["PROYECTO", [["Metodología", "de la idea a la obra"], ["Planificación", "tiempo y equipo"], ["Exposición", "cartelas y difusión"], ["Evaluación", "rúbrica y error"]]],
  tarjetas: [
    ["Briefing", "El encargo del proyecto."],
    ["Moodboard", "Panel de inspiración."],
    ["Miniatura", "Boceto pequeño de composición."],
    ["Cronograma", "Plan de tiempos."],
    ["Comisariar", "Seleccionar y ordenar obras."],
    ["Cartela", "Ficha junto a la obra."],
    ["Rúbrica", "Criterios y niveles de evaluación."],
    ["Portfolio", "Selección de trabajos con su proceso."],
  ],
  glosario: [
    ["Metodología proyectual", "Método ordenado para resolver un encargo creativo."],
    ["Referente", "Obra o artista que inspira o sirve de modelo."],
    ["Estudio", "Dibujo detallado de una parte de la obra."],
    ["Cuaderno de artista", "Cuaderno que recoge ideas, pruebas y procesos."],
    ["Texto de sala", "Texto breve que presenta una exposición."],
    ["Coevaluación", "Evaluación entre compañeros."],
    ["Prueba de estado", "Estampa que muestra cómo va la plancha."],
    ["Difusión", "Acciones para dar a conocer un proyecto."],
  ],
  situacion: SIT(
    "Exposición de fin de curso",
    "La clase de 2º de Bachillerato de Artes organizará su exposición de fin de curso con una obra de cada alumno realizada con las técnicas de la materia.",
    [
      "Definid un título y un hilo conductor común.",
      "Cada alumno desarrolla su proyecto con cuaderno de proceso.",
      "Repartid roles para montaje, cartelas, difusión e inauguración.",
      "Inaugurad la exposición y haced una evaluación final con rúbrica.",
    ],
    "Exposición con obras, cartelas, texto de sala y difusión.",
    [
      "Calidad y coherencia de las obras.",
      "Documentación del proceso.",
      "Organización y difusión de la exposición.",
      "Reflexión crítica en la autoevaluación.",
    ],
  ),
  familias: [
    "Pedid a vuestro hijo o hija que os enseñe su cuaderno de artista y os cuente su proceso.",
    "Visitad juntos una exposición y fijaos en las cartelas y la iluminación.",
    "Ayudad a fotografiar bien sus trabajos para el portfolio.",
    "Hablad de algún error que acabó saliendo bien en vuestra vida.",
  ],
  saberes: "metodología proyectual; planificación y desarrollo de proyectos y organización de equipos; proceso de elaboración de una obra pictórica; exposición y difusión; evaluación de fases y resultados; el error como oportunidad de mejora.",
  ideas: [
    "Rúbrica construida con el alumnado al inicio del proyecto.",
    "Cuaderno de artista como instrumento de evaluación.",
    "Exposición en el centro con roles rotativos.",
    "Portfolio digital para las pruebas de acceso a estudios artísticos.",
  ],
  fuentes: [
    WIKI("Bruno Munari", "Bruno_Munari"),
    WIKI("Portafolio", "Portafolio"),
  ],
});
