// Diseño, 2º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "El proceso de diseño: metodología del proyecto",
  minutos: 60,
  objetivos: [
    "Seguir las fases de un proyecto de diseño desde el encargo hasta la presentación",
    "Redactar un briefing e investigar al usuario y el contexto",
    "Usar técnicas de creatividad, bocetos, maquetas y prototipos para idear y probar",
    "Presentar y defender un proyecto y aplicar la evaluación y la mejora continua",
  ],
  claves: ["metodología", "briefing", "investigación", "design thinking", "boceto", "maqueta", "prototipo", "presentación"],
  pregunta: {
    texto: "¿Se diseña con una idea genial que aparece de repente?",
    respuesta: "Casi nunca. El diseño sigue un <mark>método</mark>: investigar, idear muchas opciones, probarlas y mejorar. La inspiración ayuda, pero el proceso es lo que garantiza que la solución funcione.",
  },
  lectura: {
    titulo: "Cinco mil prototipos",
    html: `<p>El inventor británico James Dyson se enfadó porque su aspiradora perdía potencia cuando la bolsa se llenaba de polvo. Se fijó en los ciclones industriales que separan el serrín del aire en los aserraderos y pensó que podía aplicar la idea a una aspiradora sin bolsa.</p>
    <p>Según su propio relato, construyó más de cinco mil prototipos durante cinco años antes de dar con el definitivo. Cada fallo le enseñaba algo. Su historia resume la lección de este tema: diseñar es un proceso de prueba y error ordenado, en el que equivocarse pronto y barato es la mejor manera de acertar al final.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "Las fases del proyecto",
      html: `<p>Todo proyecto de diseño, sea un logotipo o una silla, sigue unas <b>fases</b> parecidas. Primero se analiza el <b>encargo</b> y se recoge en un briefing. Después se <b>investiga</b> el usuario, el contexto y la competencia. Con esa información se <b>idean</b> muchas propuestas y se seleccionan las mejores. Luego se <b>desarrollan y prueban</b> con bocetos, maquetas y prototipos. Por último se <b>presenta</b> la solución y se prepara para su producción.</p>
      <p>El proceso no es lineal: a menudo una prueba obliga a volver atrás. Por eso se habla de un proceso <b>iterativo</b>, en espiral, que mejora en cada vuelta. Saber en qué fase estás ayuda a organizar el tiempo y a no saltarse pasos.</p>`,
      svg: B.flujo("Fases del proyecto", ["Encargo y briefing", "Investigación", "Ideación", "Desarrollo y prototipo", "Presentación y producción"]),
    },
    {
      h: "El briefing",
      html: `<p>El <b>briefing</b> es el documento que resume el encargo. Responde a preguntas básicas: ¿quién es el cliente?, ¿qué necesita?, ¿a quién va dirigido?, ¿qué debe transmitir?, ¿qué plazos y qué presupuesto hay?, ¿qué condiciones técnicas o legales se deben cumplir?</p>
      <p>Un buen briefing evita malentendidos y sirve para evaluar al final si la solución cumple lo pedido. A veces el diseñador redacta un <b>contrabriefing</b>: reformula el encargo con sus propias palabras y, si hace falta, propone cambiarlo. Muchas veces el problema real no es el que el cliente cree al principio: quien pide un cartel quizá necesita, en realidad, que más gente se entere de algo.</p>`,
      svg: B.estrella("Preguntas del briefing", "Briefing", ["Cliente", "Necesidad", "Público", "Mensaje", "Plazo", "Presupuesto"]),
    },
    {
      h: "Investigar: usuario y contexto",
      html: `<p>La investigación evita diseñar para uno mismo. Se estudia al <b>usuario</b> con observación, entrevistas y encuestas, y se resume en herramientas como el <b>mapa de empatía</b> (qué piensa, siente, ve y hace) o la <b>persona</b>, un usuario ficticio que representa a un grupo real.</p>
      <p>También se analiza el <b>contexto</b> (dónde y cuándo se usará) y la <b>competencia</b> (qué soluciones existen ya, qué hacen bien y mal). Con todo ello se elabora un <b>panel de referencias</b> o <i>moodboard</i> con imágenes, colores y texturas que fijan el tono visual del proyecto.</p>`,
      svg: B.cajas("Herramientas de investigación", [["Observación", "ver cómo|se usa"], ["Entrevista", "preguntar|y escuchar"], ["Persona", "usuario|tipo"], ["Moodboard", "panel|de referencias"]]),
    },
    {
      h: "Idear: técnicas de creatividad",
      html: `<p>En la fase de <b>ideación</b> se busca primero la cantidad, sin juzgar (<b>pensamiento divergente</b>), y después se eligen las mejores ideas con criterios (<b>pensamiento convergente</b>). Las técnicas más usadas son la <b>lluvia de ideas</b>, los <b>mapas mentales</b>, el método <b>SCAMPER</b> (sustituir, combinar, adaptar, modificar, proponer otros usos, eliminar, reordenar) y la analogía con la naturaleza o con otros objetos.</p>
      <p>Para elegir se usan matrices de evaluación: cada idea se puntúa según lo bien que cumple el briefing, su viabilidad, su coste y su originalidad.</p>`,
      svg: B.comparar("Dos formas de pensar", ["Divergente", ["muchas ideas", "sin juzgar", "cantidad", "abrir"]], ["Convergente", ["pocas ideas", "con criterios", "calidad", "cerrar"]]),
    },
    {
      h: "El design thinking",
      html: `<p>El <b>design thinking</b> (pensamiento de diseño) es una metodología popularizada por la consultora IDEO y la Universidad de Stanford. Tiene cinco fases: <b>empatizar</b> con el usuario, <b>definir</b> el problema, <b>idear</b>, <b>prototipar</b> y <b>testear</b>. Su clave es poner a las personas en el centro y probar pronto.</p>
      <p>Otra forma de verlo es el <b>doble diamante</b> del British Design Council: dos fases de abrir y cerrar, primero para descubrir y definir el problema y después para desarrollar y entregar la solución. Estas metodologías se usan también fuera del diseño, en empresas, escuelas y servicios públicos.</p>`,
      svg: B.ciclo("Design thinking", "Usuario", ["Empatizar", "Definir", "Idear", "Prototipar", "Testear"]),
      video: { id: "CTKvYD4PGIA", titulo: "Qué es el design thinking: fases y ejemplos", canal: "Diseño industrial y estratégico con Irene Ramos", vistas: 263497 },
    },
    {
      h: "Bocetos, maquetas y prototipos",
      html: `<p>El <b>boceto</b> es un dibujo rápido para pensar y comunicar ideas; no tiene que ser bonito, sino claro. El <b>croquis</b> añade medidas y vistas, y el <b>dibujo técnico o los planos</b> definen la pieza para fabricarla. El <b>arte final</b> es la versión acabada de un diseño gráfico.</p>
      <p>La <b>maqueta</b> es un modelo físico, a menudo a escala y en materiales sencillos (cartón, espuma), para ver volumen y proporción. El <b>prototipo</b> es un modelo que funciona y permite probar el uso real. Hoy se usan programas de diseño 2D y 3D, impresión 3D y prototipos digitales interactivos.</p>`,
      svg: B.flujo("De la idea al objeto", ["Boceto: pensar", "Croquis: medir", "Maqueta: ver el volumen", "Prototipo: probar el uso"]),
      video: { id: "iKN2SV1BuDA", titulo: "Introducción al sketching para diseño de producto", canal: "Domestika", vistas: 4329808 },
    },
    {
      h: "Presentar y evaluar",
      html: `<p>Un proyecto no termina hasta que se <b>presenta</b>. La presentación explica el problema, el proceso y la solución, con imágenes claras: paneles, simulaciones realistas (<i>mockups</i>) y, si es posible, el prototipo. Hay que defender las decisiones con argumentos relacionados con el briefing, no con gustos.</p>
      <p>Después se <b>evalúa</b>: ¿cumple los objetivos?, ¿lo entiende el usuario?, ¿es viable producirlo? La memoria del proyecto recoge todo el proceso. La <b>autoevaluación</b> y la crítica constructiva de otros son parte del aprendizaje del diseñador.</p>`,
      svg: B.cajas("Una buena presentación", [["Problema", "qué se pedía"], ["Proceso", "cómo se llegó"], ["Solución", "mockup y|prototipo"], ["Argumentos", "según|el briefing"]]),
    },
  ],
  figura: {
    titulo: "El método en cuatro claves",
    items: [["Entender", "?", "briefing e", "investigación"], ["Idear", "💡", "muchas ideas,", "elegir bien"], ["Probar", "✎", "boceto, maqueta", "y prototipo"], ["Comunicar", "▣", "presentar", "y evaluar"]],
  },
  video: { id: "kwIJo4Ia4qI", titulo: "Taller de creatividad: design thinking", canal: "Taller Creatividad", vistas: 663415 },
  quiz: [
    ["Que el proceso de diseño sea iterativo significa que…", ["se hace una sola vez", "se repiten ciclos de prueba y mejora", "no tiene fases", "lo hace una máquina"], 1, "Proceso en espiral."],
    ["El briefing es…", ["el boceto final", "el documento que resume el encargo", "la factura", "el prototipo"], 1, "Cliente, público, objetivos, plazos."],
    ["Una «persona» en diseño es…", ["el cliente real", "un usuario ficticio que representa a un grupo", "el diseñador", "un actor"], 1, "Herramienta de investigación."],
    ["El moodboard sirve para…", ["calcular costes", "fijar el tono visual con referencias", "fabricar", "imprimir"], 1, "Panel de referencias."],
    ["En el pensamiento divergente se busca…", ["la idea única", "la cantidad de ideas sin juzgar", "el precio", "el error"], 1, "Abrir posibilidades."],
    ["SCAMPER es…", ["un programa", "una técnica de creatividad", "un material", "una tipografía"], 1, "Sustituir, combinar, adaptar…"],
    ["La primera fase del design thinking es…", ["prototipar", "empatizar", "vender", "testear"], 1, "Entender al usuario."],
    ["La maqueta se diferencia del prototipo en que…", ["la maqueta funciona siempre", "el prototipo permite probar el uso real", "son lo mismo", "la maqueta es digital"], 1, "La maqueta enseña forma y volumen."],
    ["Un mockup es…", ["un error", "una simulación realista del diseño aplicado", "un tipo de letra", "una encuesta"], 1, "Para presentar."],
    ["Las decisiones de diseño se defienden…", ["con el gusto personal", "con argumentos ligados al briefing", "con el precio", "no se defienden"], 1, "Criterios objetivos."],
  ],
  examen: [
    ["Un cliente pide «un logo moderno» y nada más. ¿Qué haces primero?", ["Dibujar el logo", "Completar el briefing con preguntas sobre público, valores y usos", "Elegir colores", "Enviar la factura"], 1, "Sin briefing no hay criterio."],
    ["Diseñas un bastón para personas mayores sin hablar con ninguna. ¿Qué fase te has saltado?", ["Presentación", "Investigación del usuario", "Producción", "Ninguna"], 1, "Empatizar."],
    ["Tienes 40 ideas para un envase. ¿Cómo eliges?", ["Al azar", "Con una matriz de criterios del briefing", "La primera que salió", "La más cara"], 1, "Pensamiento convergente."],
    ["Quieres comprobar si una silla es estable antes de fabricarla. ¿Qué necesitas?", ["Un moodboard", "Un prototipo", "Un logotipo", "Una encuesta"], 1, "Probar el uso."],
    ["En la prueba, los usuarios no entienden un icono. ¿Qué toca?", ["Ignorarlo", "Volver a idear y probar de nuevo", "Ponerlo más grande sin más", "Terminar"], 1, "Iterar."],
  ],
  feynman: ["Las fases de un proyecto de diseño", "Qué es un briefing y para qué sirve", "Las cinco fases del design thinking", "Diferencia entre boceto, maqueta y prototipo"],
  mapa: ["EL PROYECTO", [["Entender", "briefing · usuario · contexto"], ["Idear", "divergir · converger · SCAMPER"], ["Probar", "boceto · maqueta · prototipo"], ["Comunicar", "presentación · memoria · evaluación"]]],
  tarjetas: [
    ["Briefing", "Documento que resume el encargo: cliente, público, objetivos y condiciones."],
    ["Iterativo", "Que avanza en ciclos de prueba y mejora."],
    ["Mapa de empatía", "Esquema de lo que el usuario piensa, siente, ve y hace."],
    ["Moodboard", "Panel de imágenes que fija el tono visual."],
    ["Design thinking", "Método en cinco fases centrado en las personas."],
    ["Boceto", "Dibujo rápido para pensar y comunicar ideas."],
    ["Prototipo", "Modelo que funciona y permite probar el uso."],
    ["Mockup", "Simulación realista del diseño aplicado."],
  ],
  ejemplos: [
    ["Redacta el briefing de un cartel para la semana cultural.", ["Cliente: AMPA y dirección del centro.", "Público: alumnado y familias; mensaje: participación y alegría.", "Condiciones: A3 y versión para redes, logos del centro, entrega en dos semanas."], "Briefing breve que guía y permite evaluar."],
    ["Aplica SCAMPER a un paraguas.", ["Sustituir: tela por material reciclado.", "Combinar: paraguas y linterna para la noche.", "Eliminar: varillas, con una estructura hinchable."], "Tres ideas nuevas a partir de un objeto conocido."],
    ["Organiza la prueba de un prototipo de app de deberes.", ["Elegir cinco usuarios reales.", "Darles tareas concretas sin ayudarles.", "Anotar dónde dudan y preguntar al final."], "Lista de problemas para la siguiente versión."],
  ],
  errores: [
    "Empezar a dibujar sin entender el encargo.",
    "Enamorarse de la primera idea y no explorar alternativas.",
    "No probar con usuarios reales hasta el final.",
    "Defender el diseño con «me gusta» en lugar de argumentos.",
  ],
  ejercicios: {
    b: [
      ["Ordena las fases: prototipo, briefing, presentación, investigación, ideación.", "Briefing, investigación, ideación, prototipo, presentación."],
      ["Cita cinco preguntas que debe responder un briefing.", "Quién es el cliente, qué necesita, a quién se dirige, qué debe transmitir, plazos, presupuesto, condiciones técnicas."],
      ["¿Cuáles son las fases del design thinking?", "Empatizar, definir, idear, prototipar y testear."],
      ["Define boceto, maqueta y prototipo.", "Boceto: dibujo rápido de ideas. Maqueta: modelo físico de forma y volumen. Prototipo: modelo que funciona para probar el uso."],
    ],
    m: [
      ["Crea una «persona» para el diseño de una mochila escolar.", "Respuesta abierta: nombre, edad, rutina, necesidades, frustraciones y deseos, basados en entrevistas reales."],
      ["Explica el doble diamante y relaciónalo con el design thinking.", "Dos rombos de abrir y cerrar: descubrir-definir el problema y desarrollar-entregar la solución; equivalen a empatizar-definir e idear-prototipar-testear."],
      ["¿Por qué conviene equivocarse pronto en un proyecto?", "Porque corregir un boceto es barato y rápido; corregir un producto fabricado es caro. Los prototipos permiten fallar a bajo coste."],
      ["Diseña una matriz para elegir entre tres ideas de logotipo.", "Respuesta abierta: criterios (adecuación al briefing, legibilidad, originalidad, versatilidad) con puntuación de 1 a 5."],
    ],
    a: [
      ["Desarrolla un miniproyecto completo para un objeto del aula: briefing, investigación, 20 bocetos, maqueta y presentación.", "Respuesta abierta. Se valora la coherencia del proceso y la mejora entre versiones."],
      ["Escribe la memoria de un proyecto propio con sus fases, decisiones y autoevaluación.", "Respuesta abierta: estructura clara, imágenes del proceso y reflexión crítica."],
    ],
  },
  glosario: [
    ["Contrabriefing", "Reformulación del encargo por parte del diseñador."],
    ["Competencia", "Productos o marcas que resuelven un problema parecido."],
    ["Lluvia de ideas", "Técnica de generar ideas en grupo sin juzgarlas."],
    ["Mapa mental", "Esquema de ideas que se ramifican desde un centro."],
    ["Croquis", "Dibujo a mano alzada con medidas y vistas."],
    ["Arte final", "Versión acabada de un diseño lista para producir."],
    ["Memoria", "Documento que explica todo el proceso del proyecto."],
    ["Testeo", "Prueba de un diseño con usuarios reales."],
  ],
  situacion: {
    titulo: "Rediseñamos el recreo",
    reto: "Proponer un objeto o servicio que mejore el patio del instituto siguiendo el design thinking.",
    pasos: [
      "Observad el patio y entrevistad a compañeros de distintos cursos.",
      "Definid un problema concreto en una frase.",
      "Generad ideas con lluvia de ideas y SCAMPER, y elegid una con una matriz.",
      "Construid un prototipo sencillo, probadlo y presentad la versión mejorada.",
    ],
    producto: "Prototipo probado, paneles del proceso y presentación de cinco minutos.",
    evaluacion: [
      "La propuesta responde a necesidades detectadas en la investigación.",
      "Se exploran varias ideas antes de elegir.",
      "El prototipo se prueba y se mejora con lo aprendido.",
      "La presentación argumenta las decisiones.",
    ],
  },
  familias: [
    "Pedidle que os entreviste como si fuerais usuarios de su proyecto.",
    "Haced juntos una lluvia de ideas para mejorar algo de casa.",
    "Valorad sus bocetos por la idea, no por lo bonito que estén.",
    "Contad algún error del que aprendisteis en vuestro trabajo.",
  ],
  saberes: "Metodología proyectual: fases del proyecto; el briefing; investigación del usuario y del contexto; técnicas de creatividad; design thinking y doble diamante; boceto, croquis, maqueta y prototipo; herramientas digitales; presentación, memoria y evaluación del proyecto",
  ideas: [
    "Proyecto breve de una semana con todas las fases.",
    "Taller de maquetas rápidas con cartón y cinta.",
    "Sesiones de crítica constructiva entre grupos.",
    "Cuaderno de proyecto con todos los bocetos fechados.",
  ],
  fuentes: [
    { t: "Pensamiento de diseño, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pensamiento_de_dise%C3%B1o" },
    { t: "The Double Diamond, Design Council (en inglés)", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/" },
  ],
});
