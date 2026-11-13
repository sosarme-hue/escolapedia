// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "El debate: reglas y roles",
  minutos: 50,
  objetivos: ["Conocer la estructura de un debate académico", "Distinguir los papeles de los participantes: equipos, moderador y jurado", "Preparar las dos posturas y refutar con respeto"],
  claves: ["debate", "moción", "a favor", "en contra", "moderador", "jurado", "exposición inicial", "refutación", "conclusión", "minuto de oro"],
  pregunta: {
    texto: "En un debate escolar te toca defender la postura contraria a la que tú piensas. ¿Es una trampa o tiene sentido?",
    respuesta: "Tiene mucho sentido. En el <b>debate académico</b> la postura se sortea, así que hay que preparar <mark>las dos</mark>. Eso obliga a investigar a fondo, a entender a quien piensa distinto y a argumentar con razones, no con lo que nos gusta. Es un gran entrenamiento para pensar.",
  },
  bloques: [
    {
      html: `<h3>Qué es un debate</h3><p>Un <b>debate</b> es un diálogo organizado en el que dos o más personas o equipos defienden <mark>posturas opuestas</mark> sobre un tema ante un público, siguiendo unas reglas de turnos y tiempos. A diferencia de una discusión, el debate tiene un moderador, un orden y un objetivo: convencer con argumentos a quien escucha, no gritar más que el otro.</p>`,
      svg: L.filas("Discusión frente a debate", [
        ["Discusión", "sin turnos, a veces con gritos", "var(--red)"],
        ["Debate", "reglas, turnos, tiempos, moderador", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La pregunta o moción</h3><p>Todo debate gira en torno a una <b>pregunta</b> o <b>moción</b> formulada de forma clara y que admita dos respuestas: «¿Deberían prohibirse los móviles en los centros educativos?». Un equipo defiende el <b>a favor</b> y otro el <b>en contra</b>. Antes de empezar, es útil <mark>definir los términos</mark> clave («¿qué entendemos por prohibir?, ¿también en el recreo?») para no debatir sobre cosas distintas.</p>`,
      svg: L.frase("Una moción con sus dos posturas", [
        ["¿Prohibir el móvil?", "moción", "var(--ink)"], ["SÍ", "a favor", "var(--leaf)"], ["NO", "en contra", "var(--red)"],
      ], "la postura se suele sortear"),
    },
    {
      html: `<h3>Los participantes</h3><p>En un debate escolar hay varios papeles. Los <b>equipos</b>, de tres a cinco personas, que se reparten las intervenciones. El <b>moderador</b>, que presenta el tema, da la palabra, controla el tiempo y mantiene el respeto. El <b>jurado</b>, que valora a los equipos con una rúbrica. Y el <b>público</b>, que escucha, toma notas y a veces vota o pregunta al final.</p>`,
      svg: L.filas("Los papeles en un debate", [
        ["Equipos", "defienden a favor o en contra", "var(--pen)"],
        ["Moderador", "turnos, tiempo y respeto", "var(--leaf)"],
        ["Jurado", "valora con una rúbrica", "var(--red)"],
        ["Público", "escucha y pregunta", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La estructura del debate académico</h3><p>Los turnos se alternan entre los dos equipos y tienen un tiempo fijo. Primero, la <b>exposición inicial</b>, en la que cada equipo presenta su postura y sus argumentos principales. Después, uno o dos turnos de <b>refutación</b>, en los que se responden los argumentos del rival y se refuerzan los propios. Por último, la <b>conclusión</b>, que resume el debate desde la postura de cada equipo.</p>`,
      svg: L.filas("Turnos de un debate escolar", [
        ["Introducción · 3 min", "postura y argumentos", "var(--pen)"],
        ["Refutación · 4 min", "responder al rival", "var(--red)"],
        ["Conclusión · 3 min", "resumir y cerrar", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Las reglas de oro</h3><p>Un buen debate exige <b>respeto</b>: no se interrumpe, no se insulta y se critican las ideas, no a las personas. Hay que <b>respetar el tiempo</b>: el moderador avisa cuando queda poco y corta al terminar. Los <b>datos</b> deben ser verdaderos y con fuente: inventar es la peor falta. Y se debe <mark>escuchar al rival</mark>, porque sin escuchar es imposible refutar.</p>`,
      svg: L.filas("Reglas de oro del debate", [
        ["Respeto", "ideas sí, personas no", "var(--pen)"],
        ["Tiempo", "ajustarse a cada turno", "var(--leaf)"],
        ["Verdad", "datos reales con fuente", "var(--red)"],
        ["Escucha", "para poder refutar", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "El debate paso a paso",
    svg: L.pasos("Desarrollo de un debate académico", [
      ["Introducción", ["postura y", "argumentos"], "var(--pen)"],
      ["Refutación", ["responder y", "reforzar"], "var(--red)"],
      ["Conclusión", ["resumir y", "cerrar fuerte"], "var(--leaf)"],
      ["Veredicto", ["el jurado valora", "con una rúbrica"], "var(--inf)"],
    ]),
  },
  video: { id: "Ihh95lm-4r8", titulo: "El debate: definición, características, estructura y ejemplos", canal: "Profesor Paolo Astorga", vistas: 66375, megusta: 0, busqueda: "debate académico" },
  quiz: [
    { q: "La pregunta sobre la que se debate se llama…", o: ["moción", "refutación", "rúbrica"], a: 0, e: "Debe admitir dos posturas." },
    { q: "Quien da la palabra y controla el tiempo es…", o: ["el moderador", "el jurado", "el público"], a: 0, e: "También mantiene el respeto." },
    { q: "Responder a los argumentos del rival es…", o: ["refutar", "concluir", "moderar"], a: 0, e: "El turno de refutación." },
    { q: "En el debate académico la postura…", o: ["suele sortearse", "la elige siempre cada uno", "no importa"], a: 0, e: "Hay que preparar las dos." },
    { q: "La peor falta en un debate es…", o: ["inventar datos", "hablar despacio", "tomar notas"], a: 0, e: "Destruye la credibilidad." },
  ],
  examen: [
    { q: "El jurado valora a los equipos con…", o: ["una rúbrica", "un sorteo", "aplausos"], a: 0, e: "Criterios fijados de antemano." },
    { q: "Definir los términos de la moción sirve para…", o: ["no debatir sobre cosas distintas", "perder tiempo", "confundir al rival"], a: 0, e: "Todos hablan de lo mismo." },
    { q: "¿Qué turno resume el debate desde la postura del equipo?", o: ["La conclusión", "La introducción", "La refutación"], a: 0, e: "Cierre del equipo." },
  ],
  feynman: ["La diferencia entre discusión y debate", "Qué es una moción y cómo se formula", "Los papeles del moderador, el jurado y los equipos", "Las tres partes del debate académico"],
  mapa: mapa("EL DEBATE", "var(--eso)", [
    ["Moción", "pregunta con dos posturas", "var(--ink)"],
    ["Papeles", "equipos · moderador · jurado", "var(--pen)"],
    ["Turnos", "intro · refutación · conclusión", "var(--red)"],
    ["Reglas", "respeto · tiempo · verdad", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Debate", "Diálogo organizado con turnos y tiempos en el que se defienden posturas opuestas."],
    ["Moción", "Pregunta o afirmación clara sobre la que se debate."],
    ["Moderador", "Persona que presenta, da la palabra, controla el tiempo y mantiene el respeto."],
    ["Refutación", "Respuesta a los argumentos del equipo contrario."],
    ["Rúbrica", "Tabla de criterios con la que el jurado valora a los equipos."],
  ],
  familias: ["Organizad en casa un minidebate sobre un tema familiar (las tareas, las vacaciones) con turnos de un minuto.", "Ved un debate en televisión y fijaos en si se respetan los turnos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral: interacción oral formal; el debate académico; estrategias de argumentación y refutación; normas de cortesía (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Liga de debate en el aula con mociones sorteadas.", "Rúbrica construida con el alumnado.", "Rotar el papel de moderador y de jurado entre los alumnos."],
  },
  fuentes: [
    L.BOE,
    { t: "Debate, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Debate" },
    { t: "Fundación Activa-t: liga y recursos de debate escolar", url: "https://www.fundacionactivat.org/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Preparar un dosier de investigación para las dos posturas", "Usar técnicas de refutación y el minuto de oro"],
  bloques: [
    { tras: "La pregunta o moción", html: `<h3>Investigar: el dosier del equipo</h3><p>La preparación es lo que más pesa en el resultado. Cada equipo elabora un <b>dosier</b>, una carpeta con toda la información útil:</p><ul><li><b>Definiciones</b> de los términos clave de la moción.</li><li><b>Argumentos a favor y en contra</b>, cada uno con sus pruebas (datos, ejemplos, citas de expertos) y su fuente.</li><li><b>Contraargumentos</b> previsibles del rival y la respuesta a cada uno.</li><li><b>Fichas</b> breves para cada turno.</li></ul><p>Repartid el trabajo: una persona busca datos, otra ejemplos, otra prepara la refutación… pero todos deben conocer el dosier completo, porque la postura se sabe poco antes de empezar.</p>` },
    { tras: "Los participantes", html: `<h3>El papel del moderador</h3><p>El moderador es clave para que el debate funcione. Antes de empezar, <b>presenta</b> el tema, a los equipos y las reglas. Durante el debate, <b>da la palabra</b> en el orden establecido, <b>avisa del tiempo</b> (por ejemplo, levantando una tarjeta cuando queda un minuto) y lo corta cuando se acaba. Si alguien interrumpe o falta al respeto, lo recuerda con calma.</p><p>El moderador debe ser <mark>neutral</mark>: no opina, no ayuda a ningún equipo y trata a todos igual. Al final, agradece la participación y da paso al jurado. Ser moderador es una buena práctica para aprender a escuchar y a hablar con autoridad y amabilidad a la vez.</p>` },
    { tras: "La estructura del debate", html: `<h3>Técnicas de refutación</h3><p>Refutar es <mark>demostrar que el argumento del rival no se sostiene</mark>. Para hacerlo bien:</p><ol><li><b>Toma notas</b> durante la intervención del rival: apunta sus argumentos y sus datos.</li><li><b>Elige</b> los dos o tres argumentos más importantes; no intentes rebatirlo todo.</li><li><b>Cita</b> lo que dijo con exactitud: «El otro equipo ha dicho que…».</li><li><b>Señala el fallo</b>: el dato es falso o antiguo, el ejemplo es un caso aislado, la fuente no es fiable, hay una falacia o la conclusión no se sigue.</li><li><b>Aporta tu prueba</b> y vuelve a tu postura.</li></ol><p>Una refutación eficaz es breve, concreta y siempre respetuosa.</p>` },
    { tras: "La estructura del debate", html: `<h3>Preguntas cruzadas y el minuto de oro</h3><p>En muchos formatos escolares, durante la refutación un equipo puede hacer una <b>pregunta</b> al otro, levantando la mano y pidiendo permiso. El orador puede aceptarla o rechazarla. Las preguntas deben ser <b>breves y concretas</b>: sirven para poner en evidencia una contradicción o un dato dudoso («¿De dónde sale ese 80 %?»).</p><p>Algunos formatos incluyen el <b>minuto de oro</b>: un turno extra de un minuto que cada equipo puede usar una vez para aportar un argumento nuevo o un dato muy potente. Hay que guardarlo para el momento adecuado, normalmente cuando el debate está igualado. Se trata de un recurso <mark>estratégico</mark> que el equipo debe planificar.</p>` },
    { tras: "Las reglas de oro", html: `<h3>Cómo valora el jurado</h3><p>El jurado no decide quién tiene razón en el tema, sino <mark>qué equipo ha debatido mejor</mark>. Para ello usa una <b>rúbrica</b> con criterios como estos:</p>${L.tb(["Criterio", "Qué se valora"], [["Argumentación", "argumentos sólidos con pruebas y fuentes"], ["Refutación", "respuesta a lo que dijo el rival"], ["Expresión oral", "claridad, voz, mirada, gestos"], ["Estructura", "orden y uso del tiempo"], ["Trabajo en equipo", "coherencia entre los miembros"], ["Respeto", "juego limpio y cortesía"]])}<p>Conocer la rúbrica antes ayuda a preparar el debate y a saber en qué fijarse cuando se hace de jurado.</p>` },
  ],
  videos: [
    ["Técnicas de refutación", L.vid("FL1Wj_ROutU", "Debate: técnicas de refutación", "Fundación Educativa Activa-t", 418153)],
    ["Investigar: el dosier del equipo", L.vid("IZzWk5561pM", "Cómo preparar tu primer debate académico", "yems", 54892)],
  ],
  ejemplos: [
    ["Formula una moción sobre el uniforme escolar y define sus términos.", ["Moción: «¿Debería ser obligatorio el uniforme en los institutos públicos?».", "Definir «uniforme»: ¿ropa completa o solo una camiseta?", "Definir el ámbito: ¿todos los cursos? ¿también en Educación Física?"], "moción clara con términos acotados."],
    ["Refuta: «Hay que prohibir el móvil porque en mi clase alguien lo usó para copiar».", ["Citar: «El otro equipo dice que hay que prohibirlo porque alguien copió».", "Señalar el fallo: es un caso aislado (generalización) y copiar ya está sancionado.", "Aportar prueba y volver a la postura: hay otras medidas (dejar los móviles en una caja durante los exámenes)."], "refutación por generalización apresurada + alternativa."],
    ["Escribe una pregunta cruzada eficaz ante el dato «El 90 % de los alumnos usa el móvil en clase».", ["Debe ser breve y concreta.", "Debe poner en duda la fuente o el dato.", "Sin agresividad."], "«¿Podríais decirnos de qué estudio sale ese 90 %?»."],
  ],
  errores: [
    "Preparar solo la postura que uno prefiere.",
    "Intentar refutar todos los argumentos del rival en lugar de los más importantes.",
    "Interrumpir o hablar fuera de turno.",
    "Pasarse del tiempo o dejar turnos a medias.",
    "Que el moderador opine o favorezca a un equipo.",
  ],
  ejercicios: [
    ["Escribe dos diferencias entre una discusión y un debate.", "El debate tiene reglas, turnos y tiempos, y un moderador; la discusión no. En el debate se busca convencer al público con argumentos, no imponerse."],
    ["Formula una moción sobre las tareas en casa.", "Por ejemplo: «¿Deberían eliminarse los deberes en la ESO?»."],
    ["Escribe un argumento a favor y otro en contra de la moción anterior.", "A favor: más tiempo para descansar, hacer deporte y estar con la familia. En contra: los deberes ayudan a consolidar lo aprendido y crear hábito de estudio."],
    ["¿Qué debe hacer el moderador si un participante interrumpe?", "Recordarle con calma que debe esperar su turno y devolver la palabra a quien hablaba."],
    ["Describe los tres turnos de un debate académico.", "Introducción (postura y argumentos), refutación (responder al rival) y conclusión (resumir y cerrar)."],
    ["¿Qué incluirías en el dosier de un equipo?", "Definiciones, argumentos a favor y en contra con pruebas y fuentes, contraargumentos con sus respuestas y fichas para cada turno."],
    ["Escribe una frase para empezar una refutación.", "Por ejemplo: «El equipo contrario ha afirmado que…; sin embargo, los datos muestran que…»."],
    ["¿Para qué sirve el minuto de oro?", "Para aportar, una sola vez, un argumento o un dato muy potente en el momento estratégico."],
    ["Escribe tres criterios de una rúbrica de debate.", "Por ejemplo: calidad de la argumentación, refutación y expresión oral (también estructura, trabajo en equipo y respeto)."],
    ["¿Por qué es útil defender una postura que no compartes?", "Porque obliga a investigar a fondo, a entender a quien piensa distinto y a argumentar con razones."],
  ],
  quiz: [
    ["El dosier contiene…", ["argumentos, pruebas y fuentes de las dos posturas", "solo la conclusión", "chistes"], 0, "Se prepara antes del debate."],
    ["Para refutar conviene…", ["elegir los argumentos más importantes del rival", "rebatirlo todo", "no escuchar"], 0, "Calidad mejor que cantidad."],
    ["Una pregunta cruzada debe ser…", ["breve y concreta", "larga", "agresiva"], 0, "Pone en evidencia un fallo."],
    ["El moderador debe ser…", ["neutral", "del equipo a favor", "del jurado"], 0, "Trata a todos igual."],
    ["El jurado decide…", ["qué equipo ha debatido mejor", "quién tiene razón en el tema", "la moción"], 0, "Según la rúbrica."],
  ],
  tarjetas: [
    ["Dosier", "Carpeta de investigación del equipo con argumentos, pruebas y fuentes de ambas posturas."],
    ["Pregunta cruzada", "Pregunta breve al equipo rival durante su intervención, si la acepta."],
    ["Minuto de oro", "Turno extra de un minuto que cada equipo puede usar una vez."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Defender lo que no piensas", `<p>Faltan diez minutos para la final del torneo de debate escolar. La moción es «¿Debería prohibirse el móvil en los centros educativos?». A Irene le encanta su móvil y está convencida de que no hay que prohibirlo, pero el sorteo ha decidido que su equipo defienda la postura <b>a favor</b> de la prohibición. Durante semanas ha tenido que leer estudios sobre concentración, entrevistar a profesores y escuchar a familias preocupadas. Al principio le costaba; ahora entiende mucho mejor a quienes piensan distinto que ella.</p><p>Eso es lo que hace especial al <b>debate académico</b>: no se trata de gritar más fuerte ni de humillar al rival, sino de investigar, organizar argumentos, escuchar con atención y responder con respeto en un tiempo limitado. Y, a menudo, defender una postura que no es la tuya te enseña más que defender la que ya tenías. En este tema aprenderás qué tipos de debate existen, cómo se formula una moción, cómo se prepara un equipo, qué hacen el moderador y el jurado, cómo se refuta y por qué los debates son una pieza clave de la vida democrática, desde el aula hasta el Parlamento.</p>`],
  mas: [
    ["<h3>Qué es un debate</h3>", `<p>Un debate no es una <b>discusión</b>. En una discusión cada uno intenta imponerse, las personas se interrumpen, no hay tiempos ni reglas y a menudo se acaba hablando de otra cosa. En un debate hay una pregunta clara, turnos con tiempo fijo, un moderador que vela por las normas y un objetivo compartido: que el público y el jurado puedan comparar las mejores razones de cada postura.</p>`],
    ["<h3>Investigar: el dosier del equipo</h3>", `<p>Un buen dosier incluye también las <b>fuentes</b> completas de cada dato (autor, organismo, fecha y enlace), porque el jurado o el equipo rival pueden pedir que las cites. Conviene priorizar organismos oficiales, universidades, estudios científicos y medios de comunicación de calidad, y desconfiar de las páginas sin autor, los foros o las cuentas anónimas de redes sociales.</p>`],
    ["<h3>La estructura del debate académico</h3>", `<p>Los tiempos varían según el torneo, pero un esquema escolar habitual es: <b>exposición inicial</b> de tres o cuatro minutos por equipo, dos turnos de <b>refutación</b> de tres minutos cada uno y <b>conclusión</b> de dos o tres minutos. Empieza siempre el equipo a favor, y el que cierra suele ser el equipo en contra, para compensar.</p>`],
    ["<h3>El papel del moderador</h3>", `<p>Si un participante se pasa de tiempo, el moderador le avisa con una señal acordada (por ejemplo, levantando una tarjeta cuando queda un minuto) y, si continúa, le retira la palabra con amabilidad. Si alguien falta al respeto, interrumpe el debate, recuerda las normas y, si es necesario, informa al jurado para que lo tenga en cuenta. Su autoridad depende de que todos lo vean imparcial.</p>`],
    ["<h3>Técnicas de refutación</h3>", `<p>Una fórmula sencilla para refutar es la de los <b>cuatro pasos</b>: «Ellos han dicho…» (resume el argumento con justicia), «Pero…» (di qué falla), «Porque…» (aporta tu prueba o razonamiento) y «Por tanto…» (explica qué significa para el debate). Así el jurado ve con claridad qué argumento estás atacando y por qué ya no se sostiene.</p>`],
    ["<h3>Cómo valora el jurado</h3>", `<p>Un buen jurado anota durante el debate y justifica su decisión con comentarios concretos («El equipo en contra no respondió al argumento del coste») en lugar de impresiones vagas («Me gustaron más»). Así los equipos saben qué mejorar.</p>`],
  ],
  svgs: [
    ["<h3>Investigar: el dosier del equipo</h3>", "Qué lleva el dosier", [["Argumentos", "de las dos posturas"], ["Pruebas", "datos, ejemplos, citas"], ["Fuentes", "autor, fecha y enlace"]], "la preparación"],
    ["<h3>El papel del moderador</h3>", "Funciones del moderador", [["Presentar", "tema, equipos y reglas"], ["Dar la palabra", "y controlar el tiempo"], ["Cuidar el respeto", "neutral siempre"]], "el moderador"],
    ["<h3>Técnicas de refutación</h3>", "Cómo refutar", [["Escuchar", "toma notas del rival"], ["Elegir", "sus argumentos clave"], ["Responder", "dato, lógica o consecuencia"]], "refutación"],
    ["<h3>Preguntas cruzadas y el minuto de oro</h3>", "Preguntas cruzadas y minuto de oro", [["Pregunta cruzada", "breve y concreta"], ["Respuesta", "directa, sin rodeos"], ["Minuto de oro", "la idea más potente"]]],
    ["<h3>Cómo valora el jurado</h3>", "Criterios del jurado", [["Fondo", "argumentos y pruebas"], ["Forma", "claridad y oratoria"], ["Equipo", "coordinación y respeto"]], "la rúbrica"],
  ],
  bloques: [
    { tras: "<h3>Qué es un debate</h3>", html: `<h3>Tipos de debate</h3><p>No todos los debates son iguales. El <mark>debate académico</mark> o de competición enfrenta a dos equipos con turnos y tiempos fijos, y un jurado decide quién ha debatido mejor. En la <b>mesa redonda</b>, varios expertos exponen distintos puntos de vista sobre un tema sin necesidad de enfrentarse, y después el público pregunta. El <b>coloquio</b> o <b>cinefórum</b> es una conversación abierta tras una charla o una película. La <b>tertulia</b>, frecuente en radio y televisión, es más informal: los participantes opinan con libertad y a veces se interrumpen.</p><p>En la vida pública hay otros formatos: el <b>debate parlamentario</b>, en el que diputados y senadores discuten las leyes con normas muy estrictas; los <b>debates electorales</b> entre candidatos; o la <b>asamblea</b>, en la que un grupo (una clase, una comunidad de vecinos) discute y vota una decisión. Conocer el formato es importante, porque cada uno tiene sus reglas y su tono: lo que funciona en una tertulia puede ser una falta grave en un debate académico.</p>`, svg: ["Tipos de debate", [["Académico", "equipos, tiempos, jurado"], ["Mesa redonda", "expertos y preguntas"], ["Parlamentario", "leyes y normas estrictas"]], "formatos distintos"], video: "debateEst" },
    { tras: "<h3>La pregunta o moción</h3>", html: `<h3>Tipos de mociones y carga de la prueba</h3><p>Las mociones pueden ser de tres tipos. Las de <mark>hecho</mark> preguntan si algo es verdad: «¿Los videojuegos violentos aumentan la agresividad?». Se debaten sobre todo con datos y estudios. Las de <mark>valor</mark> preguntan si algo es bueno, justo o importante: «¿Es más importante la libertad que la seguridad?». Se debaten con principios y ejemplos. Las de <mark>política</mark> o acción proponen una medida: «¿Debería ser obligatorio el voluntariado en la ESO?». Son las más habituales en los torneos escolares y obligan a explicar ventajas, inconvenientes y cómo se aplicaría la medida.</p><p>En las mociones de acción, el equipo a favor tiene la <b>carga de la prueba</b>: es quien propone un cambio y, por tanto, debe demostrar que es necesario, que funcionaría y que sus beneficios superan a sus costes. Al equipo en contra le basta con mostrar que el cambio no es necesario, que no funcionaría o que tendría efectos negativos; también puede proponer una alternativa mejor.</p>`, svg: ["Tipos de moción", [["De hecho", "¿es verdad?"], ["De valor", "¿es bueno o justo?"], ["De acción", "¿deberíamos hacerlo?"]], "carga de la prueba: a favor"] },
    { tras: "<h3>Los participantes</h3>", html: `<h3>Trabajar en equipo</h3><p>En un debate gana el equipo, no la persona más brillante. Por eso hay que <b>repartir los papeles</b> según las fortalezas de cada uno: quien tiene más presencia suele hacer la <b>exposición inicial</b>, porque marca la primera impresión; quienes reaccionan rápido se encargan de la <b>refutación</b>; y quien sabe resumir con fuerza, de la <b>conclusión</b>. Todos, sin embargo, deben conocer todo el dosier por si hay que cambiar sobre la marcha.</p><p>Durante el debate, el equipo se comunica sin hablar: con <b>notas</b> en papel o post-its que se pasan al compañero que va a intervenir, con una hoja compartida donde se apuntan los argumentos del rival y con señales acordadas (por ejemplo, para avisar del tiempo). Antes del torneo conviene hacer <b>simulacros</b>, en los que una parte del equipo hace de rival, para practicar respuestas. Y después de cada debate, el equipo analiza qué funcionó y qué no, sin culpar a nadie: los errores son del equipo.</p>`, svg: ["Papeles en el equipo", [["Exposición", "primera impresión"], ["Refutación", "reflejos y escucha"], ["Conclusión", "resumen con fuerza"]], "gana el equipo"] },
    { tras: "<h3>Las reglas de oro</h3>", html: `<h3>Los debates en la vida pública</h3><p>Los debates no son solo un ejercicio escolar: son una pieza esencial de la <b>democracia</b>. En el <mark>Congreso de los Diputados</mark> y el Senado, las leyes se discuten en sesiones con turnos, tiempos y un presidente que modera, de forma muy parecida a un debate académico. En los <b>juicios</b>, la acusación y la defensa presentan pruebas y argumentos ante un juez, que decide. Y en las campañas electorales, los <b>debates entre candidatos</b> permiten a los votantes comparar propuestas.</p><p>Sin embargo, muchos debates públicos, sobre todo en algunas tertulias de televisión y en redes sociales, se parecen más a una pelea que a un debate: interrupciones, insultos, datos falsos y frases pensadas para hacerse virales. Aprender a debatir en clase te da herramientas para distinguir un buen debate de un espectáculo: fíjate en si se responde a lo que dice el otro, si se aportan pruebas comprobables y si se respeta a las personas aunque se critiquen sus ideas.</p>`, svg: ["Debates en la vida pública", [["Parlamento", "se discuten las leyes"], ["Juicios", "acusación y defensa"], ["Elecciones", "debates entre candidatos"]], "debatir en democracia"] },
    { html: `<h3>Después del debate: aprender del resultado</h3><p>El debate no termina cuando el jurado anuncia el ganador. La parte más útil viene después: el <b>análisis</b>. Lee con atención los comentarios de la rúbrica, pregunta al jurado qué podríais mejorar y escucha también lo que opinan los rivales. Haz una <b>autoevaluación</b> sincera: ¿respondí a los argumentos principales?, ¿respeté el tiempo?, ¿se entendió mi intervención?, ¿mantuve la calma?</p><p>Ganar y perder con <b>deportividad</b> es parte del debate: se felicita al equipo rival, se agradece el trabajo del moderador y del jurado y no se critica su decisión en público. Por último, piensa en lo que has aprendido sobre el tema. Es muy frecuente que, después de investigar las dos posturas, tu opinión inicial haya cambiado o se haya vuelto más matizada. Eso no es un fracaso, sino la demostración de que el debate ha cumplido su objetivo: pensar mejor, juntos.</p>`, svg: ["Aprender después del debate", [["Analizar", "rúbrica y comentarios"], ["Autoevaluarse", "qué mejorar"], ["Deportividad", "felicitar al rival"]]] },
  ],
  ejemplos: [
    ["Clasifica estas mociones: «¿El deporte de élite es bueno para la sociedad?», «¿Debería ampliarse el horario de la biblioteca?», «¿Leer en pantalla reduce la comprensión?».", ["La primera pregunta si algo es bueno: moción de valor.", "La segunda propone una medida: moción de acción.", "La tercera pregunta si algo es verdad: moción de hecho."], "Valor, acción y hecho."],
    ["Reparte los papeles de un equipo de tres: Ana (muy segura), Leo (rápido de reflejos) y Sara (resume muy bien).", ["Ana, por su presencia, hace la exposición inicial.", "Leo, por sus reflejos, se encarga de la refutación.", "Sara, por su capacidad de síntesis, hace la conclusión."], "Ana: exposición; Leo: refutación; Sara: conclusión. Todos preparan todo el dosier."],
    ["El equipo a favor de «uniforme obligatorio» solo ha hablado del precio. ¿Qué le falta para cumplir la carga de la prueba?", ["Demostrar que el cambio es necesario (qué problema resuelve).", "Explicar cómo se aplicaría (quién paga, modelos, plazos).", "Mostrar que los beneficios superan a los costes."], "Le falta probar la necesidad, la viabilidad y el balance de beneficios y costes."],
  ],
  errores: ["Confundir un debate con una discusión o una tertulia: en el debate académico no se interrumpe y se respetan turnos y tiempos."],
  niveles: "bbmbbmmbbm",
  ejercicios: [
    ["b", "Cita cuatro tipos de debate.", "Debate académico, mesa redonda, tertulia, coloquio, debate parlamentario, debate electoral o asamblea."],
    ["b", "¿Qué es una moción de valor? Pon un ejemplo.", "La que pregunta si algo es bueno, justo o importante. Ejemplo: «¿Es más importante la libertad que la seguridad?»."],
    ["b", "¿Qué equipo tiene la carga de la prueba en una moción de acción?", "El equipo a favor, porque propone un cambio y debe demostrar que es necesario y beneficioso."],
    ["b", "¿Cómo se comunica un equipo durante el debate sin hablar?", "Con notas o post-its, una hoja compartida con los argumentos del rival y señales acordadas."],
    ["b", "¿Qué es un simulacro de debate?", "Un ensayo en el que parte del equipo hace de rival para practicar las respuestas."],
    ["b", "¿Qué tres turnos tiene un debate académico escolar típico?", "Exposición inicial, refutación y conclusión."],
    ["m", "Explica dos diferencias entre una mesa redonda y un debate académico.", "En la mesa redonda los expertos exponen puntos de vista sin enfrentarse y no hay ganador; en el debate académico dos equipos defienden posturas opuestas y un jurado decide."],
    ["m", "Formula una moción de hecho, una de valor y una de acción sobre las redes sociales.", "Hecho: «¿Las redes sociales aumentan la ansiedad en adolescentes?». Valor: «¿Son las redes más perjudiciales que beneficiosas?». Acción: «¿Debería prohibirse abrir una cuenta antes de los 16 años?»."],
    ["m", "¿Por qué el equipo en contra no necesita demostrar tanto como el equipo a favor?", "Porque defiende la situación actual; le basta con mostrar que el cambio no es necesario, no funcionaría o tendría efectos negativos."],
    ["m", "¿Qué fuentes son fiables para un dosier y cuáles no?", "Fiables: organismos oficiales, universidades, estudios científicos y medios de calidad. Poco fiables: páginas sin autor, foros, cuentas anónimas y vídeos sin fuentes."],
    ["m", "¿En qué se parece un juicio a un debate académico?", "Hay dos partes con posturas opuestas, turnos regulados, pruebas y argumentos, y una figura neutral (el juez) que decide."],
    ["m", "Escribe tres preguntas para autoevaluar tu intervención en un debate.", "¿Respondí a los argumentos principales del rival? ¿Respeté el tiempo? ¿Se entendió mi mensaje y mantuve la calma?"],
    ["m", "¿Por qué el equipo en contra suele cerrar el debate?", "Para compensar la ventaja del equipo a favor, que abre el debate y fija los términos de la discusión."],
    ["a", "Prepara la exposición inicial (unas 150 palabras) a favor de «¿Debería ampliarse el recreo a 45 minutos?».", "Respuesta abierta. Debe definir los términos, presentar la tesis, dar al menos dos argumentos con pruebas y anunciar la estructura de la intervención."],
    ["a", "Analiza una tertulia de televisión o un hilo de redes y señala tres diferencias con un buen debate.", "Respuesta abierta. Por ejemplo: interrupciones constantes, falta de fuentes, ataques personales, nadie modera y no se responde a lo que dice el otro."],
    ["a", "Explica por qué los debates son esenciales en una democracia.", "Porque permiten comparar propuestas con razones, controlar a quienes gobiernan, tomar decisiones colectivas sin violencia e incluir distintas voces."],
    ["a", "Diseña una rúbrica sencilla de cuatro criterios con tres niveles para un debate de clase.", "Respuesta abierta. Ejemplo: argumentos y pruebas, refutación, oratoria y respeto/trabajo en equipo, cada uno con niveles «en proceso», «adecuado» y «excelente» descritos."],
    ["a", "Tu equipo ha perdido y crees que el jurado se equivocó. ¿Cómo actúas?", "Felicito al rival, agradezco al jurado y al moderador, no critico la decisión en público y después pido en privado los comentarios para entender qué valoraron y mejorar."],
    ["a", "Prepara dos refutaciones distintas al argumento «El voluntariado obligatorio deja de ser voluntariado».", "Ejemplo: 1) Es un juego de palabras: se trata de un servicio comunitario educativo, como otras prácticas obligatorias. 2) Muchos estudiantes descubren así una afición que mantienen libremente después."],
    ["a", "¿Qué aprendiste o podrías aprender al defender una postura contraria a la tuya?", "Respuesta abierta. Debe reflexionar sobre la empatía, la comprensión de otros puntos de vista, la revisión de los propios prejuicios y la mejora de los argumentos."],
    ["a", "Compara un debate parlamentario con un debate académico escolar.", "Ambos tienen moderador (presidente), turnos y tiempos. En el Parlamento se votan leyes reales, los grupos defienden su propia ideología y no hay jurado; en el escolar, la postura se sortea y un jurado valora la calidad del debate."],
  ],
  cuartas: ["conclusión", "el capitán del equipo", "aplaudir", "la decide el público", "beber agua", "fotos del equipo", "repetir tus argumentos", "ofensiva", "el más gracioso", "el color de la ropa", "una votación por móvil", "alargar el debate", "La pregunta cruzada"],
  quiz: [
    ["En una mesa redonda…", ["varios expertos exponen sin enfrentarse", "dos equipos compiten", "un jurado da puntos", "no hay público"], 0, "Después el público pregunta."],
    ["«¿Es justo el examen final único?» es una moción de…", ["valor", "hecho", "acción", "política"], 0, "Pregunta si algo es justo."],
    ["La carga de la prueba en una moción de acción la tiene…", ["el equipo a favor", "el equipo en contra", "el moderador", "el jurado"], 0, "Propone el cambio."],
    ["Durante el debate, el equipo se comunica con…", ["notas y señales", "gritos", "el móvil", "el público"], 0, "Sin interrumpir."],
    ["En el Congreso, quien modera los debates es…", ["el presidente", "el rey", "el jurado", "el público"], 0, "Da la palabra y controla el tiempo."],
    ["Un simulacro sirve para…", ["practicar con un rival ficticio", "elegir la moción", "votar al ganador", "hacer el dosier"], 0, "Preparación del equipo."],
    ["La exposición inicial suele hacerla quien tiene…", ["más presencia", "menos preparación", "más notas", "más prisa"], 0, "Marca la primera impresión."],
    ["Después de perder conviene…", ["felicitar al rival y analizar", "criticar al jurado", "abandonar", "culpar a un compañero"], 0, "Deportividad."],
    ["La tertulia es un formato…", ["más informal", "con jurado", "sin participantes", "solo escrito"], 0, "Frecuente en radio y televisión."],
    ["Una fuente fiable para el dosier es…", ["un organismo oficial", "un foro anónimo", "un meme", "un rumor"], 0, "Con autor y fecha."],
  ],
  examen: [
    ["«¿Debería ser gratuito el transporte escolar?» es una moción de…", ["acción", "hecho", "valor", "opinión"], 0, "Propone una medida."],
    ["Una diferencia entre debate y discusión es que en el debate…", ["hay turnos y reglas", "se grita más", "no hay tema", "gana quien insulta"], 0, "Y un moderador."],
    ["Si cambias de opinión tras debatir…", ["el debate ha cumplido su objetivo", "has fracasado", "debes ocultarlo", "has perdido"], 0, "Pensar mejor, juntos."],
    ["En el dosier, de cada dato se apunta…", ["la fuente completa", "solo el número", "nada más", "una opinión"], 0, "Autor, organismo, fecha y enlace."],
    ["Al equipo en contra le basta con demostrar que el cambio…", ["no es necesario o no funcionaría", "es perfecto", "es caro siempre", "es legal"], 0, "Defiende la situación actual."],
  ],
  tarjetas: [["Mesa redonda", "Expertos exponen puntos de vista sin enfrentarse."], ["Moción de acción", "Propone una medida que hay que justificar."], ["Carga de la prueba", "Obligación de demostrar que recae en quien propone el cambio."], ["Simulacro", "Ensayo de debate con un rival ficticio."]],
  glosario: [["Debate", "Diálogo organizado entre posturas opuestas con reglas."], ["Moción", "Pregunta o propuesta que se debate."], ["Moción de hecho", "Pregunta si algo es verdad."], ["Moción de valor", "Pregunta si algo es bueno o justo."], ["Moción de acción", "Propone una medida concreta."], ["Carga de la prueba", "Deber de demostrar que tiene quien propone el cambio."], ["Dosier", "Carpeta de investigación del equipo."], ["Moderador", "Persona neutral que da la palabra y controla el tiempo."], ["Jurado", "Quienes valoran qué equipo ha debatido mejor."], ["Rúbrica", "Tabla de criterios y niveles de evaluación."], ["Refutación", "Respuesta a los argumentos del rival."], ["Pregunta cruzada", "Pregunta breve a un rival durante su turno."], ["Minuto de oro", "Tiempo para la idea más potente del equipo."], ["Mesa redonda", "Formato de exposición de varios expertos."]],
  situacion: { titulo: "Torneo de debate del aula", reto: "Organizar y celebrar un torneo de debate académico entre los equipos de la clase.", pasos: ["Votar tres mociones de acción sobre temas del centro o de actualidad.", "Formar equipos, sortear posturas y preparar el dosier con fuentes fiables.", "Elaborar entre todos la rúbrica del jurado y elegir moderadores.", "Celebrar los debates con tiempos fijos y preguntas cruzadas.", "Analizar los resultados con la rúbrica y escribir una autoevaluación."], producto: "Torneo de debate con dosieres, rúbrica común y autoevaluaciones.", evaluacion: ["El dosier recoge argumentos de ambas posturas con fuentes fiables.", "Las intervenciones respetan la estructura y los tiempos.", "La refutación responde a los argumentos principales del rival.", "Se mantiene el respeto y la deportividad."] },
  familias: ["Ved juntos un fragmento de un debate parlamentario o electoral y comentad si se respetan los turnos y si se responde a lo que dice el otro."],
  saberes: "el debate académico y otros formatos, tipos de moción, carga de la prueba, trabajo en equipo, moderación, refutación y evaluación.",
  minutos: 100,
});
