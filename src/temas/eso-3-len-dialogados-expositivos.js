// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Los textos dialogados y expositivos",
  minutos: 45,
  objetivos: ["Reconocer los rasgos de los textos dialogados orales y escritos", "Identificar la estructura de un texto expositivo", "Usar conectores para ordenar y explicar ideas"],
  claves: ["diálogo", "conversación", "entrevista", "acotación", "texto expositivo", "divulgativo", "especializado", "estructura deductiva", "conectores"],
  pregunta: {
    texto: "Una entrevista a una científica y el capítulo de tu libro de Biología hablan del mismo tema: las vacunas. ¿En qué se diferencian?",
    respuesta: "La entrevista es un <b>texto dialogado</b>: <mark>varias voces</mark> se turnan para hablar. El capítulo es un <b>texto expositivo</b>: <mark>una sola voz</mark> explica el tema de forma ordenada y objetiva para que lo entiendas. Los dos informan, pero se organizan de manera distinta.",
  },
  bloques: [
    {
      html: `<h3>Qué es un texto dialogado</h3><p>Es el que reproduce un <mark>intercambio de mensajes</mark> entre dos o más personas que alternan los papeles de emisor y receptor. Pueden ser <b>orales</b> (conversación, debate, entrevista, tertulia) o <b>escritos</b> (diálogos en una novela, obras de teatro, entrevistas publicadas, chats).</p>`,
      svg: L.dialogo("Una conversación: dos personas se turnan para hablar", [
        ["Iker", "¿Vienes al partido?", "var(--pen)"],
        ["Sara", "No puedo, tengo examen.", "var(--red)"],
        ["Iker", "¡Pues suerte!", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La conversación y sus normas</h3><p>La conversación es el diálogo más espontáneo. Para que funcione hay que respetar unas normas: <b>respetar el turno de palabra</b>, no interrumpir, escuchar, ajustarse al tema y adecuar el registro. Se organiza en <b>apertura</b> (saludo), <b>cuerpo</b> (los temas) y <b>cierre</b> (despedida).</p>`,
      svg: L.linea("Partes de una conversación", [
        ["1", "Apertura: saludo", "var(--pen)"],
        ["2", "Cuerpo: se tratan los temas", "var(--leaf)"],
        ["3", "Cierre: despedida", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El diálogo escrito: la entrevista y el teatro</h3><p>En la <b>entrevista</b> un periodista pregunta y una persona responde; se escribe con el nombre o las iniciales delante de cada intervención. En el <b>teatro</b>, el texto se compone de los <mark>diálogos</mark> de los personajes y de las <mark>acotaciones</mark>, que indican gestos, movimientos o decorados y suelen ir entre paréntesis y en cursiva.</p>`,
      svg: L.filas("Cómo se escribe el diálogo", [
        ["Entrevista", "P: pregunta / R: respuesta", "var(--pen)"],
        ["Teatro", "NOMBRE. — intervención", "var(--red)"],
        ["Acotación", "(Entra, nervioso.)", "var(--leaf)"],
        ["Novela", "—Hola —dijo Ana.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Qué es un texto expositivo</h3><p>Es el que <mark>explica un tema</mark> de forma clara, ordenada y objetiva para que el receptor lo comprenda. Si va dirigido al gran público (un artículo de divulgación, un libro de texto) es <b>divulgativo</b>; si va dirigido a expertos (un artículo científico) es <b>especializado</b> y usa más tecnicismos.</p>`,
      svg: L.filas("Textos expositivos divulgativos y especializados", [
        ["Divulgativo", "para todos: libro de texto", "var(--pen)"],
        ["Especializado", "para expertos: artículo científico", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La estructura del texto expositivo</h3><p>Suele tener <b>introducción</b> (presenta el tema), <b>desarrollo</b> (lo explica por partes) y <b>conclusión</b> (resume). Según dónde aparezca la idea principal, la estructura es <mark>deductiva</mark> (la idea al principio y luego los detalles), <mark>inductiva</mark> (los datos primero y la idea al final) o <b>encuadrada</b> (la idea al principio y se repite al final).</p>`,
      svg: L.tabla("Estructuras del texto expositivo según la idea principal", ["Estructura", "Idea principal"], [
        ["Deductiva", "al principio"], ["Inductiva", "al final"], ["Encuadrada", "al inicio y al final"],
      ]),
    },
  ],
  figura: {
    titulo: "Dialogar y exponer",
    svg: L.columnas("Comparación entre texto dialogado y texto expositivo", [
      ["varias voces", "DIÁLOGO", ["turnos de palabra", "registro variable"], "var(--pen)"],
      ["una voz que explica", "EXPOSICIÓN", ["orden y claridad", "objetividad"], "var(--leaf)"],
      ["se combinan en", "ENTREVISTA", ["preguntas que piden", "explicaciones"], "var(--red)"],
    ]),
  },
  video: { id: "gG64_pL1q0M", titulo: "Textos expositivos: características, estructura y tipos", canal: "Escuela de Aprendices", vistas: 1241891, megusta: 0, busqueda: "el texto expositivo estructura" },
  quiz: [
    { q: "¿Cuál es un texto dialogado oral?", o: ["Un debate", "Una enciclopedia", "Un manual"], a: 0, e: "Varias personas intercambian turnos." },
    { q: "En el teatro, las indicaciones sobre gestos y decorados se llaman…", o: ["acotaciones", "apartes", "monólogos"], a: 0, e: "Suelen ir entre paréntesis y en cursiva." },
    { q: "Un texto expositivo debe ser sobre todo…", o: ["claro y objetivo", "emotivo y poético", "persuasivo"], a: 0, e: "Su fin es que el receptor entienda." },
    { q: "Si la idea principal aparece al final, la estructura es…", o: ["inductiva", "deductiva", "encuadrada"], a: 0, e: "De los datos a la conclusión." },
    { q: "Un artículo científico para médicos es un texto expositivo…", o: ["especializado", "divulgativo", "dialogado"], a: 0, e: "Va dirigido a expertos." },
  ],
  examen: [
    { q: "En una conversación, la despedida forma parte del…", o: ["cierre", "cuerpo", "nudo"], a: 0, e: "Apertura, cuerpo y cierre." },
    { q: "¿Qué tiempo verbal predomina en los textos expositivos?", o: ["Presente de indicativo", "Imperativo", "Futuro de subjuntivo"], a: 0, e: "El presente con valor general: «El agua hierve a 100 °C»." },
    { q: "Las palabras como «en primer lugar» o «por tanto» son…", o: ["conectores", "acotaciones", "tecnicismos"], a: 0, e: "Unen y ordenan las ideas." },
  ],
  feynman: ["Las normas de una buena conversación", "Cómo se escribe una entrevista y una obra de teatro", "La diferencia entre texto expositivo divulgativo y especializado", "Las estructuras deductiva, inductiva y encuadrada"],
  mapa: mapa("DIALOGAR Y EXPONER", "var(--eso)", [
    ["Dialogados", "conversación · entrevista · teatro", "var(--pen)"],
    ["Normas", "turno · escucha · registro", "var(--red)"],
    ["Expositivos", "divulgativo · especializado", "var(--leaf)"],
    ["Estructura", "deductiva · inductiva", "var(--inf)"],
  ]),
  tarjetas: [
    ["Texto dialogado", "El que reproduce un intercambio de mensajes entre dos o más personas."],
    ["Acotación", "Indicación del autor teatral sobre gestos, movimientos o decorados."],
    ["Texto expositivo", "El que explica un tema de forma clara, ordenada y objetiva."],
    ["Estructura deductiva", "La idea principal aparece al principio y después se desarrolla."],
    ["Texto divulgativo", "Texto expositivo dirigido al gran público, sin demasiados tecnicismos."],
  ],
  familias: ["Ved juntos una entrevista y fijaos en cómo se respetan (o no) los turnos.", "Pedidle que os explique en dos minutos algo que haya aprendido, con introducción, desarrollo y conclusión.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: géneros discursivos dialogados y expositivos; interacción oral y escrita; mecanismos de cohesión y conectores (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Grabar y transcribir una conversación breve para analizar turnos y marcas de oralidad.", "Convertir una entrevista en un texto expositivo y al revés.", "Escribir una escena teatral breve con acotaciones."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE, Ortografía de la lengua española: la raya", url: "https://www.rae.es/dpd/raya" },
    { t: "Texto expositivo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Texto_expositivo" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Transformar estilo directo en indirecto", "Reconocer los recursos de la exposición: definición, ejemplo, clasificación y comparación"],
  bloques: [
    { tras: "Qué es un texto dialogado", html: `<h3>Rasgos del diálogo oral espontáneo</h3><p>Cuando conversamos sin preparar lo que decimos, el lenguaje tiene rasgos propios. Usamos <b>frases cortas e incompletas</b>, repeticiones y muletillas («o sea», «bueno», «¿sabes?»), <b>interjecciones</b> («¡anda!», «¡uf!») y deícticos que solo se entienden en la situación («ponlo <i>ahí</i>», «dame <i>eso</i>»).</p><p>También nos apoyamos en la <mark>entonación</mark>, los gestos y la mirada, y a menudo nos interrumpimos o hablamos a la vez. Todo esto es normal en una conversación entre amigos, pero en un diálogo planificado, como un debate o una entrevista de trabajo, conviene evitar las muletillas y hablar con frases completas.</p>` },
    { tras: "La conversación y sus normas", html: `<h3>Diálogos planificados: debate, coloquio y tertulia</h3><p>No todos los diálogos son espontáneos. En un <b>debate</b> dos o más personas defienden posturas distintas sobre un tema ante un público, con un <b>moderador</b> que da y quita la palabra y controla el tiempo. En un <b>coloquio</b>, después de una charla, el público hace preguntas al ponente. En una <b>tertulia</b> varias personas comentan la actualidad de forma más relajada.</p><p>En todos ellos hay que <mark>preparar las ideas</mark> antes, argumentar con datos, escuchar al otro para poder responderle y mantener el respeto aunque no se esté de acuerdo. Las descalificaciones personales estropean cualquier diálogo.</p>` },
    { tras: "El diálogo escrito", html: `<h3>Del estilo directo al indirecto</h3><p>Cuando contamos lo que otra persona ha dicho, podemos reproducir sus palabras exactas (<b>estilo directo</b>) o integrarlas en nuestro discurso (<b>estilo indirecto</b>). Al pasar al indirecto cambian varios elementos:</p>${L.tb(["Cambia", "Directo", "Indirecto"], [["Persona", "«Yo estoy cansada»", "dijo que <b>ella</b> estaba cansada"], ["Tiempo verbal", "«Iré mañana»", "dijo que <b>iría</b>"], ["Adverbios", "«aquí», «hoy»", "<b>allí</b>, <b>ese día</b>"], ["Preguntas", "«¿Vienes?»", "preguntó <b>si</b> venía"]])}<p>Fíjate en que el estilo indirecto necesita un verbo de habla (decir, preguntar, contestar, explicar) seguido de <i>que</i> o de <i>si</i>.</p>` },
    { tras: "Qué es un texto expositivo", html: `<h3>Rasgos lingüísticos de la exposición</h3><p>Los textos expositivos buscan la <b>objetividad</b> y la <b>claridad</b>, por eso comparten rasgos de lenguaje: usan la <mark>tercera persona</mark> o el plural de modestia («como veremos»), el <b>presente de indicativo con valor atemporal</b> («La Tierra gira alrededor del Sol»), oraciones enunciativas y <b>tecnicismos</b> propios de cada materia (fotosíntesis, sintagma, ecuación).</p><p>Además, suelen apoyarse en elementos gráficos: títulos y subtítulos, negritas, esquemas, tablas, mapas y fotografías con pie. Todo ello ayuda al lector a encontrar la información y a recordarla.</p>` },
    { tras: "Qué es un texto expositivo", html: `<h3>Recursos para explicar</h3><p>Para que el lector comprenda, quien expone usa varios procedimientos:</p><ul><li><b>Definición</b>: dice qué es algo. «Un volcán es una abertura de la corteza terrestre por la que sale magma».</li><li><b>Clasificación</b>: ordena en grupos. «Los volcanes pueden ser activos, durmientes o extintos».</li><li><b>Ejemplificación</b>: pone casos concretos. «Por ejemplo, el Teide».</li><li><b>Comparación</b>: relaciona con algo conocido. «El magma sube como el refresco al agitar la botella».</li><li><b>Causa y consecuencia</b>: explica por qué ocurre algo y qué produce.</li></ul>` },
    { tras: "La estructura del texto expositivo", html: `<h3>Los conectores ordenan las ideas</h3><p>Los <b>conectores</b> son palabras o expresiones que unen las ideas y muestran su relación. En los textos expositivos son imprescindibles:</p>${L.tb(["Sirven para…", "Ejemplos"], [["Ordenar", "en primer lugar, después, por último"], ["Añadir", "además, asimismo, también"], ["Ejemplificar", "por ejemplo, es decir, así"], ["Oponer", "sin embargo, pero, en cambio"], ["Expresar causa", "porque, ya que, puesto que"], ["Concluir", "en resumen, por tanto, en conclusión"]])}<p>Un texto sin conectores parece una lista de frases sueltas; con ellos, el lector sigue el hilo sin esfuerzo.</p>` },
  ],
  videos: [
    ["Del estilo directo al indirecto", L.vid("8RQodf-0Vzo", "Discurso directo y discurso indirecto", "Rocio Carreon", 182161)],
    ["La estructura del texto expositivo", L.vid("jpLvojJoIn8", "Textos expositivos: características, estructura y tipos", "Clases Particulares en Ávila", 308481)],
  ],
  ejemplos: [
    ["Pasa a estilo indirecto: —¿Has terminado ya los deberes? —me preguntó mi padre.", ["Verbo de habla: preguntó. Es una pregunta de sí o no, así que se introduce con «si».", "La segunda persona (has terminado) pasa a primera (había terminado).", "El adverbio «ya» se mantiene."], "Mi padre me preguntó si ya había terminado los deberes."],
    ["Identifica la estructura: «Los delfines respiran aire, tienen pelo al nacer y amamantan a sus crías. Por tanto, son mamíferos».", ["Primero se dan los datos: respiran aire, tienen pelo, amamantan.", "La idea principal aparece al final, introducida por «por tanto».", "Va de lo concreto a la conclusión general."], "estructura inductiva."],
    ["Señala los recursos explicativos: «La fotosíntesis es el proceso por el que las plantas fabrican su alimento. Es como una cocina que funciona con luz solar».", ["«La fotosíntesis es el proceso por el que…»: definición.", "«Es como una cocina…»: comparación con algo conocido.", "Usa el presente atemporal (es, fabrican) y un tecnicismo (fotosíntesis)."], "definición y comparación, con rasgos expositivos."],
  ],
  errores: [
    "Escribir los diálogos de una narración con guion corto (-) en lugar de raya (—).",
    "No cambiar los tiempos verbales y los adverbios al pasar a estilo indirecto.",
    "Introducir opiniones personales en un texto expositivo («a mí me parece que…»).",
    "Encadenar ideas sin conectores, como si fuera una lista.",
    "Confundir acotación (indicación escénica) con diálogo.",
    "Interrumpir o no respetar los turnos en un debate.",
  ],
  ejercicios: [
    ["Escribe cuatro intervenciones de una conversación con apertura, cuerpo y cierre.", "Respuesta abierta. Ejemplo: —Hola, Marta. —Hola. ¿Has visto el horario nuevo? —Sí, empezamos a las ocho. —Vale, hasta mañana."],
    ["Pasa a estilo indirecto: —Mañana iremos al museo —anunció la profesora.", "La profesora anunció que al día siguiente iríamos (o irían) al museo."],
    ["Pasa a estilo directo: Luis me preguntó dónde había dejado la mochila.", "—¿Dónde has dejado la mochila? —me preguntó Luis."],
    ["Escribe una acotación para un personaje que entra enfadado.", "(Entra dando un portazo, con el ceño fruncido.)"],
    ["¿Divulgativo o especializado? Un artículo de una revista juvenil sobre los agujeros negros.", "Divulgativo: va dirigido al gran público."],
    ["Escribe una definición de «isla» con estructura expositiva.", "Una isla es una porción de tierra rodeada de agua por todas partes."],
    ["Ordena con conectores: Se lavan las manos. Se aplica jabón. Se aclaran. Se secan.", "En primer lugar, se mojan las manos; después, se aplica jabón; a continuación, se aclaran y, por último, se secan."],
    ["Señala tres rasgos expositivos en: «El corazón es un músculo que bombea la sangre. Late unas 70 veces por minuto».", "Presente atemporal (es, bombea, late), tercera persona, definición y dato objetivo."],
    ["¿Qué estructura tiene un texto que empieza diciendo «El reciclaje es necesario», da tres razones y termina «Por eso, reciclar es imprescindible»?", "Encuadrada: la idea principal aparece al principio y se repite al final."],
    ["Escribe tres preguntas para entrevistar a un deportista de tu ciudad.", "Respuesta abierta. Ejemplo: ¿Cuándo empezaste a entrenar? ¿Qué es lo más difícil de tu deporte? ¿Qué consejo darías a alguien que empieza?"],
  ],
  quiz: [
    ["«Bueno, o sea, ¿sabes?» son…", ["muletillas", "conectores", "tecnicismos"], 0, "Típicas del diálogo espontáneo."],
    ["En un debate, quien da la palabra es…", ["el moderador", "el ponente", "el público"], 0, "Controla turnos y tiempo."],
    ["«Fotosíntesis» en un texto de Biología es…", ["un tecnicismo", "una muletilla", "un vulgarismo"], 0, "Palabra propia de una materia."],
    ["«Sin embargo» es un conector de…", ["oposición", "orden", "causa"], 0, "Introduce una idea contraria."],
    ["«Los volcanes pueden ser activos, durmientes o extintos» es una…", ["clasificación", "comparación", "acotación"], 0, "Agrupa en clases."],
  ],
  tarjetas: [
    ["Muletilla", "Palabra o expresión que se repite por costumbre al hablar: o sea, bueno, ¿sabes?"],
    ["Tecnicismo", "Palabra propia de una ciencia o materia: fotosíntesis, sintagma, ecuación."],
    ["Conectores de orden", "En primer lugar, después, a continuación, por último."],
  ],
});
