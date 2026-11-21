// Proyectos Artísticos, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");

module.exports = B.tema({
  titulo: "Evaluación y portfolio",
  minutos: 60,
  objetivos: [
    "Evaluar un proyecto artístico con criterios claros: proceso, resultado y trabajo en equipo",
    "Usar rúbricas, autoevaluación y coevaluación de forma honesta y útil",
    "Dar y recibir críticas constructivas",
    "Elaborar un portfolio artístico físico o digital que muestre lo mejor del trabajo",
  ],
  claves: ["evaluación", "criterio", "rúbrica", "autoevaluación", "coevaluación", "crítica constructiva", "portfolio", "selección"],
  pregunta: {
    texto: "¿Se puede evaluar el arte si es algo tan personal?",
    respuesta: "No se evalúa si una obra «gusta», sino si el proyecto <mark>cumple lo que se propuso</mark>: si la intención es clara, si la forma la refuerza, si el proceso fue riguroso. Para eso se usan criterios conocidos de antemano.",
  },
  lectura: {
    titulo: "La carpeta de Leonardo",
    html: `<p>Cuando Leonardo da Vinci quiso trabajar para el duque de Milán, no le envió un cuadro: le escribió una carta en la que enumeraba lo que sabía hacer, de puentes y máquinas a esculturas y pinturas. Era, en cierto modo, uno de los primeros portfolios de la historia.</p>
    <p>Hoy, para entrar en una escuela de arte, presentarse a una beca o conseguir un encargo, se pide casi siempre un <b>portfolio</b>: una selección cuidada de trabajos que muestra quién eres como creador. Hacerlo bien exige algo que se aprende en este tema: <b>mirar con distancia</b> tu propio trabajo, evaluarlo y elegir.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Para qué evaluar un proyecto",
      html: `<p>Evaluar no es solo poner nota. Es <b>reflexionar</b> sobre lo que se ha hecho para aprender y mejorar en el siguiente proyecto. Se evalúan tres aspectos: el <b>proceso</b> (investigación, bocetos, organización), el <b>resultado</b> (la obra y su coherencia con la intención) y el <b>trabajo en equipo</b> y la difusión.</p>
      <p>La evaluación más útil es la que se hace <b>durante</b> el proyecto, no solo al final: permite corregir el rumbo a tiempo. Por eso conviene hacer pequeñas revisiones al final de cada fase y no esperar a la entrega para descubrir que algo fallaba desde el principio.</p>`,
      svg: B.cajas("Qué se evalúa en un proyecto", [["Proceso", "investigación, bocetos|diario"], ["Resultado", "obra coherente|con la intención"], ["Equipo", "colaboración|y plazos"], ["Difusión", "textos, montaje|y público"]]),
    },
    {
      h: "Criterios y rúbricas",
      html: `<p>Un <b>criterio</b> es aquello en lo que nos fijamos para valorar: originalidad, coherencia, técnica, presentación… Una <b>rúbrica</b> es una tabla que, para cada criterio, describe varios <b>niveles de logro</b> (por ejemplo, inicial, en desarrollo, logrado y excelente).</p>
      <p>Su gran ventaja es que se conoce <b>desde el principio</b>: el alumno sabe qué se espera y puede usarla como guía mientras trabaja. Así la nota deja de ser una sorpresa. Una buena rúbrica tiene pocos criterios (entre tres y seis), descripciones concretas y observables, y niveles que se distinguen claramente entre sí.</p>`,
      svg: B.rejilla("Fragmento de rúbrica", ["Criterio", "Inicial", "Logrado", "Excelente"], [["Intención", "confusa", "clara", "clara y original"], ["Proceso", "pocos bocetos", "bocetos y pruebas", "muchas versiones"], ["Técnica", "descuidada", "correcta", "dominada"]]),
      video: { id: "UTeiNh6SlyM", titulo: "Evaluar con rúbricas: ¿qué son y cómo elaborarlas?", canal: "EducatPals", vistas: 547365 },
    },
    {
      h: "Autoevaluación y coevaluación",
      html: `<p>En la <b>autoevaluación</b> cada persona valora su propio trabajo con la rúbrica y explica por qué. En la <b>coevaluación</b> los compañeros se evalúan entre sí, por ejemplo, la participación de cada miembro del equipo. La <b>heteroevaluación</b> es la que hace el profesor.</p>
      <p>Para que funcionen hacen falta <b>honestidad</b> y <b>argumentos</b>: no basta con poner un número, hay que señalar ejemplos concretos del diario o de la obra que lo justifiquen.</p>`,
      svg: B.comparar("Quién evalúa", ["Autoevaluación", ["yo valoro", "mi trabajo", "con la rúbrica", "y lo justifico"]], ["Coevaluación", ["los compañeros", "valoran", "con criterios", "y ejemplos"]]),
    },
    {
      h: "La crítica constructiva",
      html: `<p>En las escuelas de arte es habitual la <b>sesión de crítica</b>: cada proyecto se muestra y el grupo comenta. Para que sea útil, la crítica debe ser <b>constructiva</b>: hablar de la obra y no de la persona, ser concreta y proponer mejoras.</p>
      <p>Un método sencillo es el de las tres preguntas: <b>¿qué funciona?</b>, <b>¿qué no se entiende o se podría mejorar?</b> y <b>¿qué probarías?</b> Quien recibe la crítica escucha, toma notas y da las gracias; no tiene que defenderse. Después decide con calma qué sugerencias aplica.</p>`,
      svg: B.flujo("Crítica constructiva en tres preguntas", ["¿Qué funciona?", "¿Qué se podría mejorar?", "¿Qué probarías?"]),
    },
    {
      h: "La memoria del proyecto",
      html: `<p>Al terminar se redacta una <b>memoria</b> breve que resume el proyecto: intención, proceso (con imágenes de bocetos y pruebas), resultado, difusión y una <b>reflexión final</b>. Esta reflexión es la parte más valiosa: qué aprendí, qué haría distinto, qué decisiones fueron acertadas y cuáles no.</p>
      <p>Una memoria clara permite que cualquier persona entienda el proyecto sin haberlo visto y es la base de la página que ocupará en el portfolio. Basta con dos o tres páginas bien ilustradas.</p>`,
      svg: B.capas("Partes de la memoria del proyecto", [["Intención", "qué y por qué"], ["Proceso", "bocetos y pruebas"], ["Resultado", "fotos de la obra"], ["Difusión", "público e impacto"], ["Reflexión", "qué aprendí"]]),
    },
    {
      h: "Qué es un portfolio",
      html: `<p>Un <b>portfolio</b> (o portafolio) es una selección de los mejores trabajos de un creador, presentada de forma cuidada. Hay dos tipos: el <b>portfolio de proceso</b>, que muestra cómo trabajas (bocetos, pruebas, diario), muy útil en la etapa de aprendizaje; y el <b>portfolio de presentación</b>, que muestra solo los resultados más fuertes, para pruebas de acceso, becas o trabajos.</p>
      <p>Puede ser <b>físico</b> (carpeta, cuaderno) o <b>digital</b> (PDF, web, perfil profesional).</p>`,
      svg: B.comparar("Dos tipos de portfolio", ["De proceso", ["bocetos", "pruebas", "diario", "aprendizaje"]], ["De presentación", ["mejores obras", "fotos cuidadas", "textos breves", "accesos y becas"]]),
      video: { id: "vkJF5VWwios", titulo: "Portafolio de artes aceptado: examen de admisión", canal: "Fatima Solana", vistas: 237377 },
    },
    {
      h: "Cómo hacer un buen portfolio",
      html: `<p>Las claves son: <b>seleccionar</b> (mejor 10 obras fuertes que 30 desiguales), <b>ordenar</b> (empezar y terminar con las mejores), <b>fotografiar bien</b> (luz uniforme, fondo neutro, sin reflejos, imagen recta), <b>acompañar</b> cada obra con su ficha y una línea de contexto, e incluir una breve <b>declaración de artista</b> y los datos de contacto.</p>
      <p>Hay que <b>adaptarlo</b> a cada destino: lo que pide una escuela de Bellas Artes no es lo mismo que lo que pide un concurso de ilustración.</p>`,
      svg: B.flujo("Pasos para el portfolio", ["Seleccionar las obras más fuertes", "Fotografiarlas bien", "Ordenar: empezar y acabar fuerte", "Ficha, contexto y declaración", "Adaptar al destino"]),
    },
    {
      h: "Del portfolio al siguiente proyecto",
      html: `<p>El portfolio no es un final, sino un <b>punto de partida</b>. Al revisarlo aparecen temas que se repiten, técnicas que dominas y otras que te gustaría aprender: son pistas para el próximo proyecto.</p>
      <p>Conviene actualizarlo cada curso y guardar copias de seguridad. En el Bachillerato de Artes, un buen portfolio es la mejor carta de presentación para la universidad, las escuelas de arte y diseño o los ciclos formativos de artes plásticas. Un portfolio vivo, que crece y se poda cada año, cuenta mejor que nada tu evolución como creador.</p>`,
      svg: B.ciclo("El ciclo de aprendizaje del creador", "crecer", ["Proyecto", "Evaluación", "Portfolio", "Nuevas ideas"]),
    },
  ],
  figura: {
    titulo: "Evaluación y portfolio en cuatro claves",
    items: [["Criterios", "✓", "rúbrica conocida", "desde el inicio"], ["Reflexión", "?", "qué aprendí", "y qué cambiaría"], ["Crítica", "💬", "concreta y", "constructiva"], ["Portfolio", "▣", "seleccionar", "y presentar"]],
  },
  video: { id: "KjZO6pmrRmE", titulo: "¿Cómo hacer un portafolio de artista? (Lo que aún no te han dicho)", canal: "Estado del Arte", vistas: 122924 },
  quiz: [
    ["Evaluar un proyecto sirve sobre todo para…", ["poner nota", "reflexionar, aprender y mejorar", "comparar con otros", "decidir si gusta"], 1, "La nota es solo una parte."],
    ["Una rúbrica es…", ["un tipo de pincel", "una tabla con criterios y niveles de logro", "un portfolio", "una cartela"], 1, "Describe cada nivel."],
    ["¿Cuándo conviene conocer la rúbrica?", ["Al final", "Desde el principio", "Nunca", "Solo el profesor"], 1, "Sirve de guía."],
    ["La coevaluación la hacen…", ["los compañeros", "las familias", "el propio alumno", "un jurado externo"], 0, "Evaluación entre iguales."],
    ["Una crítica constructiva…", ["habla de la persona", "es concreta y propone mejoras", "es siempre positiva", "evita opinar"], 1, "Sobre la obra y útil."],
    ["Quien recibe una crítica debería…", ["defenderse", "escuchar, anotar y agradecer", "enfadarse", "ignorarla"], 1, "Luego decide qué aplicar."],
    ["La parte más valiosa de la memoria es…", ["la portada", "la reflexión final", "el índice", "la bibliografía"], 1, "Lo que aprendiste."],
    ["El portfolio de presentación muestra…", ["todos los bocetos", "una selección de los mejores resultados", "el presupuesto", "solo textos"], 1, "Para accesos y becas."],
    ["Al fotografiar obras para el portfolio hay que…", ["usar flash directo", "luz uniforme, fondo neutro y sin reflejos", "hacer la foto torcida", "añadir filtros"], 1, "La foto debe ser fiel."],
    ["¿Qué es mejor en un portfolio?", ["30 obras desiguales", "10 obras fuertes y bien presentadas", "Una sola obra", "Solo bocetos"], 1, "Calidad sobre cantidad."],
  ],
  examen: [
    ["Tu autoevaluación dice «Excelente» sin más. ¿Qué falta?", ["Nada", "Justificarlo con ejemplos concretos", "Una nota más alta", "La firma del profesor"], 1, "Hay que argumentar."],
    ["Un compañero dice de tu obra: «Es fea». ¿Cómo la convertirías en crítica constructiva?", ["No se puede", "«El fondo y la figura tienen el mismo tono y no se distingue la figura; prueba a contrastarlos»", "«Es muy fea, cámbiala»", "«Me gusta»"], 1, "Concreta y con propuesta."],
    ["Vas a presentarte a una escuela de ilustración. ¿Qué portfolio preparas?", ["De proceso con todo", "De presentación adaptado a ilustración", "Sin textos", "Con obras de otros"], 1, "Adaptar al destino."],
    ["¿Por qué se empieza y se termina el portfolio con las mejores obras?", ["Por superstición", "Porque la primera y la última impresión son las que más se recuerdan", "Porque es obligatorio", "Por orden cronológico"], 1, "Efecto de primera y última impresión."],
    ["Al revisar tu portfolio ves que en casi todas tus obras aparece el agua. ¿Qué te aporta?", ["Nada", "Una pista sobre un tema propio para futuros proyectos", "Que debes cambiar de tema", "Que el portfolio está mal"], 1, "El portfolio alimenta nuevos proyectos."],
  ],
  feynman: ["Qué es una rúbrica y para qué sirve", "Qué diferencia hay entre autoevaluación y coevaluación", "Cómo se da una crítica constructiva", "Cómo se hace un buen portfolio"],
  mapa: ["EVALUACIÓN Y PORTFOLIO", [["Evaluar", "proceso · resultado · equipo"], ["Herramientas", "rúbrica · auto · coevaluación"], ["Reflexionar", "crítica · memoria"], ["Portfolio", "seleccionar · fotografiar · adaptar"]]],
  tarjetas: [
    ["Criterio de evaluación", "Aspecto en el que nos fijamos para valorar un trabajo."],
    ["Rúbrica", "Tabla con criterios y descripción de niveles de logro."],
    ["Autoevaluación", "Valoración que hace cada persona de su propio trabajo."],
    ["Coevaluación", "Valoración entre compañeros."],
    ["Crítica constructiva", "Comentario concreto sobre la obra que propone mejoras."],
    ["Memoria del proyecto", "Documento que resume intención, proceso, resultado y reflexión."],
    ["Portfolio de proceso", "Muestra cómo trabaja el creador: bocetos, pruebas, diario."],
    ["Portfolio de presentación", "Selección de los mejores resultados para un destino concreto."],
  ],
  ejemplos: [
    ["Autoevalúa el criterio «proceso» con la rúbrica.", ["Leer los niveles: inicial (pocos bocetos), logrado (bocetos y pruebas), excelente (muchas versiones).", "Revisar el diario: 14 miniaturas, 3 pruebas de color y una maqueta.", "Conclusión: nivel excelente, con ejemplos que lo demuestran."], "«Excelente: hice 14 miniaturas, 3 pruebas de color y una maqueta (págs. 4-9 del diario)»."],
    ["Da una crítica constructiva a un cartel.", ["Qué funciona: la imagen es potente y se ve de lejos.", "Qué mejorar: la fecha es pequeña y se pierde.", "Qué probaría: poner la fecha en el mismo color que el título y más grande."], "Crítica concreta, sobre la obra y con una propuesta."],
    ["Selecciona obras para un portfolio de 10 piezas entre 25.", ["Descartar las técnicamente débiles o repetidas.", "Elegir variedad de técnicas y al menos dos proyectos completos con su proceso.", "Ordenar: la más fuerte primero, la segunda más fuerte al final."], "Portfolio de 10 obras equilibrado y bien ordenado."],
  ],
  errores: [
    "Evaluar por el gusto personal y no por criterios.",
    "Poner notas en la coevaluación sin argumentarlas.",
    "Tomarse las críticas como ataques personales.",
    "Meter en el portfolio todo lo hecho, sin seleccionar ni fotografiar bien.",
  ],
  ejercicios: {
    b: [
      ["¿Qué tres aspectos se evalúan en un proyecto?", "El proceso, el resultado y el trabajo en equipo (y la difusión)."],
      ["Define rúbrica.", "Una tabla que, para cada criterio, describe varios niveles de logro."],
      ["Diferencia autoevaluación, coevaluación y heteroevaluación.", "La hace uno mismo, la hacen los compañeros y la hace el profesor, respectivamente."],
      ["Nombra los dos tipos de portfolio.", "De proceso y de presentación."],
    ],
    m: [
      ["Escribe una rúbrica con tres criterios y tres niveles para tu proyecto.", "Respuesta abierta: por ejemplo, intención, proceso y acabado, con descripciones de inicial, logrado y excelente."],
      ["Transforma estas críticas en constructivas: «No me gusta», «Está mal hecho».", "«El color rojo domina y distrae de la figura; prueba a reducirlo». «Los bordes del recorte no están limpios; repásalos con cúter y regla»."],
      ["Explica cómo fotografiar un cuadro para el portfolio.", "Luz natural uniforme o dos focos a 45°, cámara paralela al cuadro y centrada, fondo neutro, sin reflejos ni sombras, y recortar el fondo."],
      ["¿Por qué se dice que la evaluación más útil se hace durante el proyecto?", "Porque permite detectar problemas y corregir el rumbo a tiempo, en lugar de constatarlos al final."],
    ],
    a: [
      ["Redacta la memoria de tu proyecto con la reflexión final.", "Respuesta abierta: intención, proceso con imágenes, resultado, difusión y una reflexión honesta sobre aprendizajes y cambios."],
      ["Diseña tu portfolio digital: selecciona 8 a 10 obras, ordénalas, escribe sus fichas y una declaración de artista.", "Respuesta abierta. Se valora la selección, la calidad de las fotos, el orden y la adecuación al destino."],
    ],
  },
  glosario: [
    ["Evaluación formativa", "Evaluación durante el proceso para mejorar."],
    ["Nivel de logro", "Grado en que se alcanza un criterio."],
    ["Heteroevaluación", "Evaluación que hace otra persona, normalmente el profesor."],
    ["Sesión de crítica", "Puesta en común en la que el grupo comenta los proyectos."],
    ["Reflexión", "Análisis de lo aprendido y de lo que se cambiaría."],
    ["Portafolio", "Forma española de «portfolio»."],
    ["Copia de seguridad", "Duplicado de los archivos para no perderlos."],
    ["Prueba de acceso", "Examen o selección para entrar en un estudio superior."],
  ],
  situacion: {
    titulo: "Cerramos el proyecto",
    reto: "Evaluar vuestro proyecto y preparar cada uno su portfolio de curso.",
    pasos: [
      "Autoevaluaos con la rúbrica, justificando cada nivel con ejemplos.",
      "Haced una sesión de crítica constructiva y una coevaluación del equipo.",
      "Redactad la memoria con la reflexión final.",
      "Seleccionad, fotografiad y ordenad vuestras obras en un portfolio digital.",
    ],
    producto: "Rúbrica completada, memoria del proyecto y portfolio digital.",
    evaluacion: [
      "La autoevaluación es honesta y argumentada.",
      "Las críticas son concretas y constructivas.",
      "La memoria refleja el proceso y lo aprendido.",
      "El portfolio está bien seleccionado, fotografiado y presentado.",
    ],
  },
  familias: [
    "Pedidle que os explique su rúbrica y en qué nivel cree que está.",
    "Practicad juntos la crítica en tres preguntas con un dibujo o una foto.",
    "Ayudadle a fotografiar sus obras con buena luz.",
    "Mirad su portfolio y preguntadle qué obra le representa mejor y por qué.",
  ],
  saberes: "Evaluación del proyecto artístico: criterios, rúbricas, autoevaluación, coevaluación y heteroevaluación; crítica constructiva; memoria y reflexión final; portfolio de proceso y de presentación, físico y digital; fotografía de obra; el portfolio como herramienta para estudios superiores y nuevos proyectos.",
  ideas: [
    "Construir la rúbrica del proyecto con el alumnado al inicio.",
    "Sesión de crítica en ronda con tres pósits por obra.",
    "Taller de fotografía de obra con luz de ventana.",
    "Revisión de portfolios de acceso a escuelas de arte.",
  ],
  fuentes: [
    { t: "Rúbrica (docencia), Wikipedia en español", url: "https://es.wikipedia.org/wiki/R%C3%BAbrica_(docencia)" },
    { t: "Portafolio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Portafolio" },
  ],
});
