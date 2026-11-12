// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Textos expositivos y argumentativos",
  minutos: 40,
  objetivos: ["Distinguir un texto que explica de uno que defiende una opinión", "Reconocer la estructura de cada uno", "Usar distintos tipos de argumentos y conectores"],
  claves: ["exposición", "tesis", "argumento", "contraargumento", "conclusión", "estructura deductiva", "estructura inductiva"],
  pregunta: {
    texto: "«Los móviles emiten ondas de radio» y «Los móviles deberían prohibirse en el instituto». ¿Qué diferencia hay entre estas dos frases?",
    respuesta: "La primera <mark>explica un hecho</mark>: es expositiva y se puede comprobar. La segunda <mark>defiende una opinión</mark>: es argumentativa y necesita razones para convencer. Saber distinguirlas te ayuda a no confundir información con opinión.",
  },
  bloques: [
    {
      html: `<h3>El texto expositivo</h3><p>Su objetivo es <b>explicar</b> un tema de forma clara y objetiva: libros de texto, enciclopedias, folletos de un museo. Usa un lenguaje preciso, tecnicismos, presente atemporal («el agua hierve a 100 °C») y recursos como <mark>definiciones, ejemplos, clasificaciones y comparaciones</mark>.</p>`,
      svg: L.filas("Recursos del texto expositivo", [
        ["Definir", "qué es", "var(--inf)"], ["Clasificar", "tipos de…", "var(--leaf)"],
        ["Ejemplificar", "por ejemplo…", "var(--pen)"], ["Comparar", "igual que…", "var(--red)"],
      ], "recursos para explicar"),
    },
    {
      html: `<h3>Estructura de la exposición</h3><p>Suele tener <b>introducción</b> (presenta el tema), <b>desarrollo</b> (explica por partes) y <b>conclusión</b> (resume). Si la idea principal va al principio, la estructura es <mark>deductiva</mark>; si va al final, <mark>inductiva</mark>.</p>`,
      svg: L.filas("Deductiva: idea al principio. Inductiva: idea al final", [
        ["Deductiva", "idea general → datos", "var(--pen)"],
        ["Inductiva", "datos → idea general", "var(--leaf)"],
        ["Encuadrada", "idea → datos → idea", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>El texto argumentativo</h3><p>Su objetivo es <b>convencer</b>. Tiene una <mark>tesis</mark> (la opinión que se defiende), un <mark>cuerpo argumentativo</mark> (las razones) y una <mark>conclusión</mark>. A veces incluye <b>contraargumentos</b>: se recoge lo que diría el otro para rebatirlo.</p>`,
      svg: L.frase("Estructura de una argumentación sobre los deberes", [
        ["Sobran deberes", "tesis", "var(--red)"], ["porque cansan", "argumento", "var(--pen)"],
        ["aunque refuerzan,", "contraargumento", "var(--muted)"], ["así que…", "conclusión", "var(--leaf)"],
      ], "tesis + razones + conclusión"),
    },
    {
      html: `<h3>Tipos de argumentos</h3><p>Los más usados son los de <b>datos</b> (cifras y estudios), de <b>autoridad</b> (lo dice un experto), de <b>ejemplo</b> (un caso concreto), de <b>causa-consecuencia</b>, de <b>experiencia personal</b> y de <b>mayoría</b> («lo piensa casi todo el mundo»). Los de datos y autoridad suelen ser los más sólidos.</p>`,
      svg: L.tabla("Tipos de argumentos con un ejemplo", ["Argumento", "Ejemplo"], [
        ["Datos", "el 70 % opina…"], ["Autoridad", "según la OMS…"], ["Ejemplo", "en Finlandia…"], ["Experiencia", "a mí me pasó…"],
      ]),
    },
    {
      html: `<h3>Los conectores</h3><p>Son las bisagras del texto. Para <b>añadir</b>: además, asimismo. Para <b>oponer</b>: sin embargo, en cambio. Para <b>causa</b>: porque, ya que. Para <b>consecuencia</b>: por tanto, así pues. Para <b>concluir</b>: en definitiva, en resumen.</p>`,
      svg: L.filas("Conectores por función", [
        ["Añadir", "además · asimismo", "var(--leaf)"], ["Oponer", "sin embargo · en cambio", "var(--red)"],
        ["Consecuencia", "por tanto", "var(--pen)"], ["Concluir", "en definitiva", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Explicar o convencer: comparación",
    svg: L.columnas("Comparación entre texto expositivo y argumentativo", [
      ["intención: explicar", "EXPOSITIVO", ["objetivo, datos,", "tercera persona"], "var(--inf)"],
      ["intención: convencer", "ARGUMENTATIVO", ["subjetivo, opinión,", "tesis y razones"], "var(--red)"],
      ["a menudo se mezclan", "ENSAYO", ["explica y opina", "a la vez"], "var(--leaf)"],
    ]),
  },
  video: { id: "CdrNwcg50l8", titulo: "Texto argumentativo: características y estructura", canal: "unProfesor", vistas: 872542, megusta: 19270, busqueda: "texto argumentativo estructura y tipos de argumentos" },
  quiz: [
    { q: "¿Cuál es la intención principal de un texto expositivo?", o: ["Convencer", "Explicar", "Entretener"], a: 1, e: "El expositivo transmite información de forma objetiva." },
    { q: "La opinión que defiende un texto argumentativo se llama…", o: ["tesis", "tema", "título"], a: 0, e: "La tesis es la idea que el autor quiere demostrar." },
    { q: "«Según un estudio de la Universidad de Salamanca…» es un argumento de…", o: ["experiencia", "autoridad o datos", "mayoría"], a: 1, e: "Apoya la tesis en una fuente experta y en datos." },
    { q: "Si la idea principal aparece al final del texto, la estructura es…", o: ["deductiva", "inductiva", "encuadrada"], a: 1, e: "Inductiva: se parte de datos y se llega a la idea general." },
    { q: "¿Qué conector introduce una oposición?", o: ["además", "por tanto", "sin embargo"], a: 2, e: "«Sin embargo» presenta una idea contraria a la anterior." },
  ],
  examen: [
    { q: "Recoger la opinión contraria para rebatirla es usar un…", o: ["contraargumento", "tecnicismo", "ejemplo"], a: 0, e: "El contraargumento muestra que conoces la otra postura y la refutas." },
    { q: "¿Qué rasgo es típico del texto expositivo?", o: ["Exclamaciones y opiniones", "Presente atemporal y tecnicismos", "Diálogo entre personajes"], a: 1, e: "Busca precisión y objetividad." },
    { q: "«En definitiva» sirve para…", o: ["concluir", "añadir", "oponer"], a: 0, e: "Introduce la conclusión o el resumen." },
  ],
  feynman: ["La diferencia entre explicar y argumentar", "Las partes de un texto argumentativo", "Tres tipos de argumentos con un ejemplo", "Qué es una estructura deductiva y una inductiva"],
  mapa: mapa("EXPONER Y ARGUMENTAR", "var(--eso)", [
    ["Expositivo", "explica · objetivo", "var(--inf)"],
    ["Argumentativo", "convence · tesis", "var(--red)"],
    ["Argumentos", "datos · autoridad · ejemplo", "var(--pen)"],
    ["Estructura", "deductiva · inductiva", "var(--leaf)"],
  ]),
  tarjetas: [
    ["¿Qué es la tesis?", "La opinión principal que defiende un texto argumentativo."],
    ["Argumento de autoridad", "Apoyar la tesis en lo que dice un experto o una institución reconocida."],
    ["Estructura deductiva", "La idea principal va al principio y después se desarrolla."],
    ["Estructura inductiva", "Se parte de datos o ejemplos y la idea principal aparece al final."],
    ["Rasgos del texto expositivo", "Objetividad, tecnicismos, presente atemporal, definiciones y ejemplos."],
  ],
  familias: ["Elegid un tema de casa (la hora de volver, la paga) y pedidle que defienda su postura con tres argumentos de tipos distintos.", "Leed juntos una columna de opinión y buscad la tesis.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Géneros discursivos: secuencias expositiva y argumentativa, organización del texto y conectores (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Debate exprés: cada grupo prepara tesis, dos argumentos y un contraargumento en diez minutos.", "Clasificar los argumentos de anuncios y artículos de opinión.", "Convertir un texto expositivo en argumentativo añadiendo tesis y conectores."],
  },
  fuentes: [
    L.BOE,
    { t: "Argumentación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Argumentaci%C3%B3n" },
    { t: "Centro Virtual Cervantes, recursos de escritura", url: "https://cvc.cervantes.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Reconocer las formas de organizar la información en una exposición", "Escribir un texto argumentativo de cinco párrafos con contraargumento"],
  bloques: [
    { tras: "Estructura de la exposición", html: `<h3>Cómo se organiza la información</h3><p>Dentro del desarrollo, las ideas pueden ordenarse de varias maneras. Reconocerlas ayuda a resumir y a hacer esquemas.</p>${L.tb(["Organización", "Cómo funciona", "Pistas"], [["Enumeración", "presenta una lista de rasgos o elementos", "en primer lugar, además, por último"], ["Comparación y contraste", "señala semejanzas y diferencias", "igual que, en cambio, mientras que"], ["Causa y consecuencia", "explica por qué ocurre algo y qué provoca", "porque, debido a, por eso"], ["Problema y solución", "plantea una dificultad y propone salidas", "el reto es…, una solución sería…"], ["Secuencia temporal", "explica un proceso por pasos", "primero, a continuación, finalmente"]])}<p>También son frecuentes los recursos de <b>ampliación</b>: definiciones, ejemplos, aclaraciones entre paréntesis, gráficos y tablas.</p>` },
    { tras: "El texto argumentativo", html: `<h3>Estructuras de la argumentación</h3><p>Igual que en la exposición, la tesis puede colocarse en distintos lugares:</p><ul><li><b>Deductiva</b>: tesis al principio y después los argumentos. Es la más clara para el lector.</li><li><b>Inductiva</b>: primero los argumentos y la tesis al final, como conclusión. Crea expectación.</li><li><b>Encuadrada</b>: la tesis aparece al principio y se repite, reforzada, al final.</li><li><b>Paralela</b>: se van presentando argumentos de forma independiente, sin una tesis explícita única.</li></ul><p>Para un examen, la estructura más segura es la <mark>encuadrada en cinco párrafos</mark>: introducción con tesis, dos argumentos, un contraargumento rebatido y una conclusión que retoma la tesis.</p>` },
    { tras: "Tipos de argumentos", html: `<h3>Falacias: argumentos tramposos</h3><p>Una <b>falacia</b> parece un argumento, pero no demuestra nada. Saber detectarlas te protege en debates y en redes sociales.</p><ul><li><b>Ataque personal</b> (<i>ad hominem</i>): «No le hagas caso, que suspendió Física». Se ataca a la persona, no a su idea.</li><li><b>Generalización apresurada</b>: «Mi primo tuvo una moto y se cayó; las motos son un peligro». Un caso no basta.</li><li><b>Falso dilema</b>: «O estás conmigo o contra mí». Hay más opciones.</li><li><b>Pendiente resbaladiza</b>: «Si te dejo salir hoy, mañana querrás salir todos los días».</li><li><b>Falsa autoridad</b>: un futbolista opinando sobre vacunas como si fuera médico.</li></ul><p>Un buen argumento es <mark>pertinente, suficiente y verificable</mark>.</p>` },
    { tras: "Los conectores", html: `<h3>Rasgos lingüísticos de la argumentación</h3><p>El texto argumentativo deja huellas del emisor: la <b>primera persona</b> («creo», «considero», «nos parece»), los verbos de opinión, los adjetivos valorativos («inaceptable», «imprescindible») y las preguntas retóricas («¿De verdad queremos un planeta sin bosques?»). También usa la <b>modalidad</b> para mostrar seguridad («sin duda», «es evidente») o prudencia («quizá», «probablemente»).</p><p>El expositivo, en cambio, evita la primera persona y prefiere la <b>impersonalidad</b>: «se considera», «los científicos han demostrado». Comparar ambos rasgos es una forma rápida de distinguirlos.</p>` },
    { tras: "Los conectores", html: `<h3>Escribe tu texto argumentativo</h3><ol><li><b>Elige la tesis</b> en una frase: «Los institutos deberían empezar a las nueve».</li><li><b>Busca tres razones</b> y al menos una de cada tipo distinto: un dato, una autoridad, un ejemplo.</li><li><b>Piensa la objeción</b> más fuerte del contrario y prepara la respuesta («Es cierto que…; sin embargo…»).</li><li><b>Ordena</b>: introducción, argumentos de menos a más fuerte, contraargumento, conclusión.</li><li><b>Revisa los conectores</b>: que cada párrafo empiece con uno distinto.</li></ol>` },
  ],
  videos: [
    ["Tipos de argumentos", L.vid("6Nx_onSUg2I", "Tipos de argumentos explicados con ejemplos", "Profesor Paolo Astorga", 213769)],
    ["Los conectores", L.vid("CY9AgK1yJYw", "Cómo usar correctamente los conectores lógicos", "Renato Zarate Amador", 497755)],
  ],
  ejemplos: [
    ["Localiza la tesis y la estructura: «Según la OMS, los adolescentes necesitan entre 8 y 10 horas de sueño. Muchos alumnos llegan agotados a primera hora. Además, un estudio en Estados Unidos mostró mejores notas al retrasar la entrada. Por tanto, los institutos deberían empezar más tarde.»", ["Busca la opinión que se defiende: «los institutos deberían empezar más tarde».", "Mira dónde está: en la última frase, introducida por «por tanto».", "Lo anterior son argumentos: de autoridad (OMS), de experiencia (alumnos agotados) y de datos (estudio)."], "tesis al final: estructura inductiva con argumentos de autoridad, experiencia y datos."],
    ["Clasifica el texto: «El volcán es una abertura de la corteza terrestre por la que sale magma. Se forma cuando…»", ["La intención es explicar, no convencer.", "Usa presente atemporal («es», «se forma») y tercera persona.", "Hay una definición y tecnicismos (corteza, magma)."], "texto expositivo de divulgación científica."],
    ["Construye un contraargumento rebatido para la tesis «Deberían prohibirse los móviles en el recreo».", ["Piensa qué diría alguien en contra: «Los móviles sirven para avisar a la familia en una emergencia».", "Reconócelo con un conector concesivo: «Es cierto que…».", "Rebátelo con un conector de oposición y una razón: «sin embargo, el centro dispone de teléfono y la familia puede llamar a secretaría»."], "«Es cierto que el móvil permite avisar a la familia; sin embargo, el instituto tiene teléfono para cualquier urgencia.»"],
  ],
  errores: [
    "Confundir el tema (de qué trata) con la tesis (qué opina el autor sobre ese tema).",
    "Dar como argumento una opinión sin razones: «es así porque sí».",
    "Usar siempre «además» y «porque»: hay que variar los conectores según la relación.",
    "Escribir un texto expositivo lleno de opiniones personales en primera persona.",
    "Olvidar la conclusión o hacer que contradiga la tesis.",
  ],
  ejercicios: [
    ["Escribe la tesis de un texto que defiende que leer en papel es mejor que en pantalla.", "«Leer en papel favorece la comprensión más que leer en pantalla.» Es una opinión que se puede defender con argumentos."],
    ["¿Qué tipo de argumento es «El 70 % de los jóvenes usa redes sociales a diario»?", "Argumento de datos (estadístico)."],
    ["¿Qué tipo de argumento es «Mi hermana empezó a hacer deporte y ahora duerme mejor»?", "Argumento de experiencia personal o de ejemplo."],
    ["Identifica la falacia: «No puedes opinar sobre el cambio climático porque viajas en avión».", "Ataque personal (ad hominem): se critica a la persona en vez de responder a su idea."],
    ["Completa con conectores: «Hace frío; ___, iremos al parque. ___, llevaremos abrigo.»", "«Hace frío; sin embargo (no obstante), iremos al parque. Por eso (por tanto), llevaremos abrigo.»"],
    ["Di si la estructura es deductiva o inductiva: la tesis aparece en el primer párrafo.", "Deductiva: de lo general (la tesis) a lo particular (los argumentos)."],
    ["Enumera tres rasgos lingüísticos del texto expositivo.", "Presente atemporal, tercera persona o impersonalidad («se sabe que») y tecnicismos. También: definiciones, ejemplos y oraciones enunciativas."],
    ["¿Qué organización de la información hay en un texto que explica cómo se fabrica el papel paso a paso?", "Secuencia temporal (proceso), con conectores como primero, después, finalmente."],
    ["Convierte esta falacia en un argumento válido: «Todos mis amigos usan esa app, así que es la mejor».", "Argumento de mayoría (débil). Mejor: «Esa app consume menos batería y no guarda datos personales, según el análisis de la OCU», que es un argumento de datos y de autoridad."],
    ["Escribe la conclusión de un texto que defiende reciclar en el instituto.", "«En definitiva, reciclar en el instituto es sencillo, barato y educativo; por eso, todos deberíamos empezar a separar los residuos desde mañana.» Retoma la tesis con un conector de conclusión."],
  ],
  quiz: [
    ["La estructura que pone la tesis al principio y la repite al final es…", ["encuadrada", "inductiva", "paralela"], 0, "La tesis «encuadra» los argumentos."],
    ["«O apruebas todo o no sirves para estudiar» es una falacia de…", ["falso dilema", "autoridad", "datos"], 0, "Presenta solo dos opciones cuando hay más."],
    ["El expositivo suele usar…", ["la impersonalidad", "muchas exclamaciones", "insultos"], 0, "Busca objetividad: «se sabe que»."],
    ["«Es cierto que…; sin embargo…» sirve para…", ["rebatir un contraargumento", "abrir una noticia", "definir un término"], 0, "Concede y luego refuta."],
    ["Explicar cómo se hace el pan paso a paso es una organización…", ["secuencial", "comparativa", "de problema y solución"], 0, "Sigue un orden temporal."],
  ],
  tarjetas: [
    ["Contraargumento", "Objeción del contrario que se recoge para rebatirla: «Es cierto que…; sin embargo…»."],
    ["Falacia", "Razonamiento tramposo que parece un argumento: ataque personal, falso dilema, generalización."],
    ["Estructura encuadrada", "Tesis al principio y repetida al final."],
  ],
});
