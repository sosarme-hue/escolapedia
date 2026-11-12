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
