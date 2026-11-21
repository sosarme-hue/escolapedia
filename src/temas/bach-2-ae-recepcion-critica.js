// Artes Escénicas II, 2º de Bachillerato. Tema 10 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "La recepción y la crítica del espectáculo",
  minutos: 60,
  objetivos: [
    "Comprender el papel activo del espectador en las artes escénicas",
    "Analizar un espectáculo con una guía ordenada de observación",
    "Conocer los tipos de crítica y escribir una crítica argumentada",
    "Valorar con respeto y criterio el trabajo propio y ajeno",
  ],
  claves: ["recepción", "espectador", "convivio", "horizonte de expectativas", "análisis", "crítica", "argumentación", "valoración"],
  pregunta: {
    texto: "¿Una obra es la misma si la ve otro público?",
    respuesta: "No del todo. El teatro sucede <mark>entre</mark> los intérpretes y el público, y cada sala reacciona distinto: risas, silencios, toses o aplausos cambian la función. Por eso el espectador no es pasivo: <b>completa</b> el espectáculo con su mirada.",
  },
  lectura: {
    titulo: "Dos críticas, un estreno",
    html: `<p>El lunes salen dos críticas del mismo estreno. La primera dice: «Aburrida. No la vean». La segunda explica que el montaje convierte un clásico en una reflexión sobre la soledad digital, elogia el trabajo de la protagonista y el uso de la luz, pero señala que la segunda parte pierde ritmo por una escenografía demasiado lenta en los cambios.</p>
    <p>En clase, la profesora pregunta cuál es más útil. Todos eligen la segunda, aunque sea menos rotunda. «La primera es una opinión», resume una alumna; «la segunda es una crítica: describe, analiza y valora con argumentos». Esa diferencia es el objetivo de este tema.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El espectador activo",
      html: `<p>El teatro necesita un público presente. El teórico argentino Jorge Dubatti lo llama <b>convivio</b>: la reunión de artistas y espectadores en el mismo espacio y tiempo. Por eso cada función es <b>única</b> e irrepetible. Una grabación conserva la imagen, pero no la experiencia compartida de esa noche.</p>
      <p>El espectador interpreta lo que ve con su experiencia, sus emociones y sus conocimientos: llena los silencios, relaciona imágenes y saca conclusiones. Algunas propuestas le piden más (participar, decidir, recorrer el espacio), pero siempre es un <b>cocreador</b> del sentido.</p>`,
      svg: B.ciclo("El circuito de la función", "función", ["Intérpretes", "Acción", "Público", "Reacción"]),
      video: { id: "c7V5Qb6SF8Y", titulo: "Seminario de crítica teatral: convivio y tecnovivio", canal: "Cátedra Ingmar Bergman UNAM", vistas: 3639 },
    },
    {
      h: "Expectativas y contexto de la recepción",
      html: `<p>Cada espectador llega con un <b>horizonte de expectativas</b>: lo que sabe de la obra, del autor o de la compañía, lo que ha leído en la prensa y lo que espera del género. Si el espectáculo lo rompe, puede sorprender, entusiasmar o molestar.</p>
      <p>También influyen el <b>contexto</b> (la época, la ciudad, lo que ocurre en la sociedad), el espacio y el precio. Muchas obras hoy clásicas fueron un escándalo en su estreno, como <i>La consagración de la primavera</i> en 1913. Con el tiempo, la recepción de una obra cambia: lo que escandalizó puede convertirse en un clásico.</p>`,
      svg: B.cajas("Lo que influye en la recepción", [["Expectativas", "lo que espero"], ["Conocimientos", "lo que sé"], ["Contexto", "época y sociedad"], ["Experiencia", "lo que he vivido"]]),
    },
    {
      h: "Guía para analizar un espectáculo",
      html: `<p>Antes de opinar hay que <b>observar</b>. Una guía útil recorre: la <b>ficha</b> (título, autoría, dirección, compañía, lugar y fecha), el <b>tema</b> y la propuesta, la <b>dramaturgia</b> (estructura, ritmo), la <b>interpretación</b>, los <b>lenguajes</b> escénicos (espacio, luz, sonido, vestuario, tecnología) y la <b>relación con el público</b>.</p>
      <p>Conviene tomar notas breves justo al salir, con imágenes concretas que se recuerden: un gesto, un cambio de luz, una frase. Las impresiones se borran rápido. Si se puede, ayuda leer antes el texto o informarse sobre la compañía.</p>`,
      svg: B.flujo("Guía de análisis", ["Ficha del espectáculo", "Tema y propuesta", "Dramaturgia y ritmo", "Interpretación", "Lenguajes escénicos", "Relación con el público"]),
    },
    {
      h: "Opinión, análisis y crítica",
      html: `<p>Una <b>opinión</b> dice si algo gusta o no («me ha encantado»). Un <b>análisis</b> describe y explica cómo está hecho el espectáculo. La <b>crítica</b> une ambos: describe, analiza e <b>interpreta</b>, y después <b>valora</b> con argumentos basados en lo observado.</p>
      <p>Una buena crítica distingue lo que el espectáculo pretende de lo que consigue, y juzga cada montaje según su propia propuesta, no según lo que el crítico habría hecho. También tiene en cuenta los medios con los que se ha hecho: no se exige lo mismo a un grupo escolar que a un teatro nacional.</p>`,
      svg: B.capas("De la opinión a la crítica", [["Opinión", "me gusta o no"], ["Descripción", "qué se ve y se oye"], ["Análisis", "cómo está hecho"], ["Interpretación", "qué significa"], ["Valoración", "juicio argumentado"]]),
    },
    {
      h: "Tipos de crítica",
      html: `<p>La <b>crítica periodística</b> aparece en prensa, radio o medios digitales poco después del estreno; es breve y orienta al público. La <b>crítica académica</b> o ensayística estudia los espectáculos con más profundidad en revistas y libros. Hoy son muy influyentes los <b>blogs</b>, los pódcast y las redes sociales.</p>
      <p>Existen también los <b>premios</b>, como los Max de las artes escénicas o el Premio Nacional de Teatro, y los coloquios con el público, que son otra forma de recepción y debate.</p>`,
      svg: B.rejilla("Tipos de crítica", ["Tipo", "Dónde", "Rasgo"], [["Periodística", "prensa y medios", "breve, orienta"], ["Académica", "revistas, libros", "profunda"], ["Digital", "blogs, redes", "rápida, personal"], ["Coloquio", "tras la función", "diálogo"]]),
    },
    {
      h: "Cómo escribir una crítica",
      html: `<p>Una estructura sencilla tiene cuatro partes. <b>Título</b> sugerente y <b>entrada</b> que presenta el espectáculo y engancha. <b>Cuerpo</b>: qué propone, cómo lo hace (dramaturgia, interpretación, lenguajes) con ejemplos concretos. <b>Valoración</b>: aciertos y debilidades argumentados. <b>Cierre</b>: una frase que resuma y, si se quiere, una recomendación.</p>
      <p>Hay que usar <b>vocabulario técnico</b> preciso (trazo, contraluz, ritmo, subtexto) y evitar contar el final o detalles que estropeen la sorpresa.</p>`,
      svg: B.capas("Estructura de una crítica", [["Título", "sugerente"], ["Entrada", "presenta y engancha"], ["Cuerpo", "propuesta y lenguajes"], ["Valoración", "aciertos y fallos"], ["Cierre", "resumen"]]),
      video: { id: "qA-2lvEqcws", titulo: "Seminario de crítica teatral: proceso de la crítica teatral", canal: "Cátedra Ingmar Bergman UNAM", vistas: 1708 },
    },
    {
      h: "La ética del público y de la crítica",
      html: `<p>Ser espectador implica <b>respeto</b>: llegar puntual, apagar el móvil, no grabar sin permiso y no molestar al resto. Aplaudir, reírse o guardar silencio también forman parte de la función.</p>
      <p>Quien escribe una crítica tiene una <b>responsabilidad</b>: detrás de cada espectáculo hay meses de trabajo de muchas personas. Se puede ser exigente sin ser cruel, criticar el trabajo y no a las personas, y reconocer los aciertos aunque el conjunto no convenza.</p>`,
      svg: B.comparar("Crítica útil frente a crítica dañina", ["Útil", ["describe y argumenta", "ejemplos concretos", "critica el trabajo", "reconoce aciertos"]], ["Dañina", ["solo opina", "generaliza", "ataca a personas", "busca la burla"]]),
    },
    {
      h: "La autoevaluación y la coevaluación",
      html: `<p>Las mismas herramientas sirven para valorar los <b>trabajos de clase</b>. En la <b>autoevaluación</b> cada intérprete analiza su propio proceso: qué ha aprendido, qué le ha costado y qué mejoraría. En la <b>coevaluación</b> los compañeros comentan el trabajo de los demás con una rúbrica común.</p>
      <p>Una técnica útil es la de «dos estrellas y un deseo»: dos aciertos concretos y una propuesta de mejora. Así la crítica se convierte en una herramienta para crecer, no para juzgar.</p>`,
      svg: B.cajas("Dos estrellas y un deseo", [["Estrella 1", "un acierto concreto"], ["Estrella 2", "otro acierto"], ["Deseo", "una mejora posible"], ["Rúbrica", "criterios comunes"]]),
    },
  ],
  figura: {
    titulo: "Recepción y crítica en cuatro claves",
    items: [["Convivio", "♣", "artistas y público", "juntos"], ["Observar", "◉", "guía de", "análisis"], ["Argumentar", "✎", "describir,", "interpretar, valorar"], ["Respeto", "✓", "exigente,", "nunca cruel"]],
  },
  video: { id: "f84EHNdeEFk", titulo: "Seminario de crítica teatral: poética del teatro", canal: "Cátedra Ingmar Bergman UNAM", vistas: 3765 },
  quiz: [
    ["Para Jorge Dubatti, el convivio es…", ["una fiesta tras el estreno", "la reunión de artistas y público en el mismo espacio y tiempo", "un tipo de crítica", "un premio"], 1, "Base del teatro."],
    ["El horizonte de expectativas es…", ["el decorado del fondo", "lo que el espectador espera según lo que sabe", "el telón", "la taquilla"], 1, "Influye en la recepción."],
    ["La consagración de la primavera provocó un escándalo en su estreno de…", ["1789", "1913", "1975", "2010"], 1, "París."],
    ["El primer paso de la guía de análisis es…", ["la valoración", "la ficha del espectáculo", "el cierre", "la recomendación"], 1, "Datos básicos."],
    ["Una crítica se diferencia de una opinión porque…", ["es más corta", "argumenta a partir de lo observado", "siempre es negativa", "no da datos"], 1, "Describe, analiza, valora."],
    ["La crítica periodística suele ser…", ["muy extensa", "breve y cercana al estreno", "anónima", "un libro"], 1, "Orienta al público."],
    ["Los Premios Max reconocen…", ["el cine", "las artes escénicas", "la música clásica grabada", "la literatura"], 1, "En España."],
    ["En una crítica conviene evitar…", ["los ejemplos", "contar el final", "el vocabulario técnico", "la valoración"], 1, "No estropear la sorpresa."],
    ["Una crítica útil…", ["ataca a las personas", "critica el trabajo y reconoce aciertos", "solo opina", "generaliza"], 1, "Ética de la crítica."],
    ["«Dos estrellas y un deseo» es una técnica de…", ["iluminación", "coevaluación", "producción", "escritura dramática"], 1, "Dos aciertos y una mejora."],
  ],
  examen: [
    ["«No vayan, es horrible» es…", ["una crítica argumentada", "una opinión sin argumentos", "un análisis", "una ficha"], 1, "No describe ni explica."],
    ["Un espectador que esperaba un Lorca tradicional se enfada ante un montaje actual. Se ha roto su…", ["horizonte de expectativas", "rider", "partitura", "caché"], 0, "Lo que esperaba."],
    ["Una crítica dice: «El contraluz final convierte a los personajes en sombras». Está…", ["opinando sin datos", "describiendo e interpretando un lenguaje concreto", "resumiendo el argumento", "dando la ficha"], 1, "Ejemplo concreto."],
    ["Durante la función, alguien graba con el móvil y comenta en voz alta. Falla la…", ["ética del espectador", "dramaturgia", "escenografía", "taquilla"], 0, "Respeto al público y artistas."],
    ["Tras un ensayo, cada alumno dice dos aciertos y una mejora de un compañero. Hacen…", ["coevaluación", "producción", "distribución", "caracterización"], 0, "Dos estrellas y un deseo."],
  ],
  feynman: ["Por qué el espectador es activo", "Qué es el horizonte de expectativas", "Diferencia entre opinión y crítica", "Cómo se estructura una crítica"],
  mapa: ["RECEPCIÓN Y CRÍTICA", [["Público", "convivio · cocreador · expectativas"], ["Análisis", "ficha · propuesta · lenguajes"], ["Crítica", "describir · interpretar · valorar"], ["Ética", "respeto · argumentos · coevaluación"]]],
  tarjetas: [
    ["Recepción", "Modo en que el público percibe e interpreta un espectáculo."],
    ["Convivio", "Encuentro de artistas y público en el mismo espacio y tiempo."],
    ["Horizonte de expectativas", "Lo que el espectador espera según lo que sabe."],
    ["Análisis", "Descripción y explicación de cómo está hecho un espectáculo."],
    ["Crítica", "Texto que describe, interpreta y valora con argumentos."],
    ["Crítica periodística", "Crítica breve en medios, cercana al estreno."],
    ["Autoevaluación", "Valoración del propio trabajo y proceso."],
    ["Coevaluación", "Valoración del trabajo de los compañeros con criterios comunes."],
  ],
  ejemplos: [
    ["Transforma una opinión en crítica: «La actriz principal está genial».", ["Describir: mantiene la tensión en un monólogo de diez minutos.", "Concretar: el paso del susurro al grito en la escena del juicio.", "Valorar: sostiene ella sola el ritmo de la segunda parte."], "Del adjetivo a la argumentación con ejemplos."],
    ["Escribe la entrada de una crítica.", ["Dato: título, compañía y lugar.", "Gancho: una imagen del espectáculo.", "Tesis: la idea principal de la crítica."], "«Un pasillo de hospital, una silla y una mujer que espera: así arranca…»."],
    ["Aplica «dos estrellas y un deseo» a una escena de clase.", ["Estrella 1: las entradas están muy bien medidas.", "Estrella 2: el silencio final funciona.", "Deseo: proyectar más la voz al fondo del escenario."], "Valoración concreta y constructiva."],
  ],
  errores: [
    "Confundir opinión personal con crítica.",
    "Resumir el argumento y olvidar analizar los lenguajes.",
    "Juzgar el montaje por lo que uno habría hecho y no por su propuesta.",
    "Criticar a las personas en lugar del trabajo.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es el convivio teatral?", "La reunión de artistas y espectadores en el mismo espacio y tiempo, que hace única cada función."],
      ["Nombra los apartados de la guía de análisis.", "Ficha, tema y propuesta, dramaturgia y ritmo, interpretación, lenguajes escénicos y relación con el público."],
      ["Cita tres tipos de crítica.", "Periodística, académica y digital (blogs, pódcast, redes)."],
      ["Indica dos normas de conducta del espectador.", "Llegar puntual, apagar el móvil, no grabar sin permiso y no molestar."],
    ],
    m: [
      ["Explica con un ejemplo cómo influye el horizonte de expectativas.", "Quien espera una comedia ligera y encuentra un drama puede sentirse decepcionado aunque el montaje sea bueno."],
      ["Diferencia opinión, análisis y crítica.", "La opinión dice si gusta; el análisis explica cómo está hecho; la crítica describe, interpreta y valora con argumentos."],
      ["¿Qué partes tiene una crítica?", "Título, entrada, cuerpo con la propuesta y los lenguajes, valoración argumentada y cierre."],
      ["¿Por qué la crítica tiene una responsabilidad ética?", "Porque valora el trabajo de muchas personas e influye en el público; debe ser exigente, argumentada y respetuosa."],
    ],
    a: [
      ["Escribe una crítica de 300 a 400 palabras de un espectáculo visto este curso.", "Respuesta abierta. Debe seguir la estructura, usar vocabulario técnico y argumentar con ejemplos concretos."],
      ["Organizad un coloquio tras una representación de clase con preguntas preparadas y una rúbrica de coevaluación.", "Respuesta abierta. Se valora la calidad de las preguntas y el respeto en las valoraciones."],
    ],
  },
  glosario: [
    ["Cocreador", "Quien completa el sentido de la obra con su interpretación."],
    ["Tecnovivio", "Experiencia escénica mediada por la tecnología, sin presencia compartida."],
    ["Ficha artística", "Lista de autoría, dirección, reparto y equipo."],
    ["Tesis", "Idea principal que defiende una crítica."],
    ["Rúbrica", "Tabla de criterios y niveles para evaluar."],
    ["Coloquio", "Diálogo entre artistas y público tras la función."],
    ["Premios Max", "Premios españoles de las artes escénicas."],
    ["Spoiler", "Dato que revela el final o una sorpresa."],
  ],
  situacion: {
    titulo: "La revista de la escena",
    reto: "Crear una revista digital del grupo con críticas de espectáculos vistos durante el curso.",
    pasos: [
      "Asistid a uno o varios espectáculos (en directo o en grabaciones).",
      "Tomad notas con la guía de análisis.",
      "Escribid una crítica individual siguiendo la estructura del tema.",
      "Revisad las críticas por parejas y publicadlas en la web o el blog del centro.",
    ],
    producto: "Revista digital con críticas, fichas y fotografías.",
    evaluacion: [
      "La crítica describe, interpreta y valora con argumentos.",
      "Se usa vocabulario escénico preciso.",
      "La redacción es correcta y atractiva.",
      "Las valoraciones son respetuosas.",
    ],
  },
  familias: [
    "Tras ver una obra, pedidle que os explique por qué le ha gustado o no.",
    "Leed juntos una crítica de prensa de un espectáculo que hayáis visto.",
    "Asistid a un coloquio con la compañía después de una función.",
    "Animadle a escribir sus críticas en un cuaderno o blog.",
  ],
  saberes: "Recepción del espectáculo: el espectador activo, convivio, horizonte de expectativas y contexto; guía de análisis de espectáculos; opinión, análisis y crítica; tipos de crítica (periodística, académica, digital), premios y coloquios; estructura y redacción de la crítica; ética del espectador y de la crítica; autoevaluación y coevaluación.",
  ideas: [
    "Ver una función y escribir críticas individuales.",
    "Comparar dos críticas reales del mismo estreno.",
    "Coloquio con una compañía tras una función escolar.",
    "Rúbrica común de coevaluación para los trabajos del curso.",
  ],
  fuentes: [
    { t: "Premios Max de las Artes Escénicas", url: "https://www.premiosmax.com" },
    { t: "Crítica teatral, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Cr%C3%ADtica_teatral" },
  ],
});
