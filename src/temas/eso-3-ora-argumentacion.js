// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "La argumentación",
  minutos: 50,
  objetivos: ["Distinguir tesis, argumentos y conclusión", "Reconocer y usar los tipos de argumentos más frecuentes", "Construir argumentos sólidos con el modelo ARE (afirmación, razonamiento, evidencia)"],
  claves: ["tesis", "argumento", "conclusión", "dato", "ejemplo", "autoridad", "causa-consecuencia", "analogía", "contraargumento", "modelo ARE"],
  pregunta: {
    texto: "«Deberíamos tener más recreo porque sí» y «Deberíamos tener más recreo porque los estudios muestran que una pausa activa mejora la concentración». ¿Cuál convence más?",
    respuesta: "La segunda, porque da una <mark>razón y una prueba</mark>. Argumentar es defender una opinión (la <b>tesis</b>) con <b>argumentos</b>: razones apoyadas en datos, ejemplos o fuentes. «Porque sí» no es un argumento: es solo repetir la opinión.",
  },
  bloques: [
    {
      html: `<h3>Qué es argumentar</h3><p>Argumentar es <mark>defender una opinión con razones</mark> para convencer a otros. Lo hacemos al pedir permiso para salir, al escribir una reclamación o al debatir en clase. Una argumentación tiene tres elementos: la <b>tesis</b> (la idea que se defiende), los <b>argumentos</b> (las razones que la apoyan) y la <b>conclusión</b> (que recoge y refuerza la tesis).</p>`,
      svg: L.filas("Elementos de la argumentación", [
        ["Tesis", "la opinión que se defiende", "var(--red)"],
        ["Argumentos", "razones que la apoyan", "var(--pen)"],
        ["Conclusión", "resume y refuerza la tesis", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La tesis</h3><p>La tesis es una <b>afirmación clara y discutible</b>: alguien podría defender lo contrario. «El agua moja» no es una tesis, porque nadie lo discute; «Los deberes deberían eliminarse en la ESO» sí lo es. Debe ser concreta y formularse en una sola frase. Puede aparecer al principio (estructura deductiva), al final (inductiva) o en ambos lugares (encuadrada).</p>`,
      svg: L.tabla("¿Es una tesis?", ["Frase", "¿Tesis?"], [
        ["El agua moja.", "no: no se discute"], ["Los deberes sobran.", "sí: es discutible"], ["Hoy es martes.", "no: es un dato"],
      ]),
    },
    {
      html: `<h3>Tipos de argumentos</h3><p>Los argumentos más usados son: de <b>datos</b> o estadísticas («El 60 % de los alumnos…»), de <b>ejemplo</b> (un caso concreto), de <b>autoridad</b> (lo dice un experto o una institución reconocida), de <b>causa-consecuencia</b> («Si…, entonces…»), de <b>analogía</b> (compara con un caso parecido), de <b>experiencia personal</b> y de <b>valores</b> (apelan a lo que se considera justo o bueno: la igualdad, la libertad, la salud).</p>`,
      svg: L.tabla("Tipos de argumentos", ["Tipo", "Ejemplo"], [
        ["Datos", "el 60 % de…"], ["Autoridad", "según la OMS…"], ["Ejemplo", "en Finlandia…"], ["Causa", "si…, entonces…"], ["Valores", "es lo justo"],
      ]),
    },
    {
      html: `<h3>El modelo ARE</h3><p>Para que un argumento sea sólido, sigue el modelo <b>ARE</b>: <mark>Afirmación</mark> (la idea, en una frase), <mark>Razonamiento</mark> (por qué es así) y <mark>Evidencia</mark> (la prueba: un dato, un ejemplo, una cita). Ejemplo: «Las pantallas antes de dormir perjudican el sueño (A), porque su luz retrasa la hormona que nos da sueño (R). Así lo explican los especialistas en medicina del sueño (E)».</p>`,
      svg: L.frase("El modelo ARE: afirmación, razonamiento y evidencia", [
        ["Afirmación", "qué digo", "var(--red)"], ["Razonamiento", "por qué", "var(--pen)"], ["Evidencia", "cómo lo pruebo", "var(--leaf)"],
      ], "un argumento sin evidencia es solo una opinión"),
    },
    {
      html: `<h3>Los contraargumentos</h3><p>Un buen orador no ignora lo que piensan los demás: <b>anticipa los contraargumentos</b>, es decir, las razones que podría dar quien no está de acuerdo, y los responde. «Algunos diréis que sin deberes no se repasa; sin embargo, se puede repasar en clase con actividades». Reconocer la parte de razón del otro (<mark>concesión</mark>) y después rebatirla aumenta la credibilidad.</p>`,
      svg: L.filas("Cómo responder a un contraargumento", [
        ["1. Reconoce", "«Es cierto que…»", "var(--pen)"],
        ["2. Matiza", "«sin embargo…»", "var(--red)"],
        ["3. Prueba", "dato o ejemplo", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Cómo se construye una argumentación",
    svg: L.columnas("Estructura de una argumentación", [
      ["lo que defiendo", "TESIS", ["clara y", "discutible"], "var(--red)"],
      ["por qué", "ARGUMENTOS", ["datos, ejemplos,", "autoridad…"], "var(--pen)"],
      ["lo que dirán", "CONTRA", ["reconocer", "y rebatir"], "var(--inf)"],
      ["para acabar", "CONCLUSIÓN", ["resumir y", "reforzar"], "var(--leaf)"],
    ]),
  },
  video: { id: "6Nx_onSUg2I", titulo: "Tipos de argumentos explicados con ejemplos", canal: "Profesor Paolo Astorga", vistas: 213784, megusta: 0, busqueda: "tipos de argumentos" },
  quiz: [
    { q: "La tesis es…", o: ["la opinión que se defiende", "un dato", "el título"], a: 0, e: "Debe ser clara y discutible." },
    { q: "«Según la Organización Mundial de la Salud…» es un argumento de…", o: ["autoridad", "analogía", "experiencia"], a: 0, e: "Cita una institución reconocida." },
    { q: "«Porque sí» es…", o: ["una falta de argumento", "un argumento de datos", "una conclusión"], a: 0, e: "No da ninguna razón." },
    { q: "En el modelo ARE, la E significa…", o: ["evidencia", "emoción", "ejemplo inventado"], a: 0, e: "La prueba que apoya la idea." },
    { q: "Anticipar lo que dirá quien no está de acuerdo es preparar…", o: ["contraargumentos", "tesis", "ganchos"], a: 0, e: "Y responderlos." },
  ],
  examen: [
    { q: "¿Cuál es una tesis?", o: ["El uniforme debería ser obligatorio.", "Hoy llueve.", "Madrid es la capital de España."], a: 0, e: "Es discutible." },
    { q: "«En mi antiguo instituto se probó y funcionó» es un argumento de…", o: ["ejemplo o experiencia", "autoridad", "valores"], a: 0, e: "Un caso concreto." },
    { q: "Reconocer parte de razón al otro antes de rebatirlo se llama…", o: ["concesión", "falacia", "tesis"], a: 0, e: "«Es cierto que…, sin embargo…»." },
  ],
  feynman: ["Qué es una tesis y cómo saber si una frase lo es", "Cinco tipos de argumentos con ejemplos", "Cómo funciona el modelo ARE", "Por qué conviene anticipar los contraargumentos"],
  mapa: mapa("ARGUMENTAR", "var(--eso)", [
    ["Tesis", "clara y discutible", "var(--red)"],
    ["Argumentos", "datos · autoridad · ejemplo…", "var(--pen)"],
    ["Modelo ARE", "afirmación · razón · evidencia", "var(--leaf)"],
    ["Contraargumentos", "reconocer y rebatir", "var(--inf)"],
  ]),
  tarjetas: [
    ["Tesis", "Opinión clara y discutible que se defiende en una argumentación."],
    ["Argumento de autoridad", "Se apoya en lo que dice un experto o una institución reconocida."],
    ["Modelo ARE", "Afirmación + Razonamiento + Evidencia."],
    ["Contraargumento", "Razón que daría quien defiende la postura contraria."],
    ["Concesión", "Reconocer parte de razón al otro antes de rebatirlo."],
  ],
  familias: ["Cuando pida algo (salir, una paga), pedidle que lo argumente con el modelo ARE.", "Buscad en un anuncio qué tipo de argumento usa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: textos argumentativos orales; tesis, argumentos y contraargumentos; tipos de argumentos (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Taller de tesis: convertir temas en afirmaciones discutibles.", "Cadena ARE: un alumno afirma, otro razona, otro aporta la evidencia.", "Clasificar argumentos de cartas al director o anuncios."],
  },
  fuentes: [
    L.BOE,
    { t: "Argumento, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Argumento" },
    { t: "Fundación Activa-t: recursos de debate escolar", url: "https://www.fundacionactivat.org/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Evaluar la solidez de un argumento", "Usar conectores argumentativos al hablar"],
  bloques: [
    { tras: "Qué es argumentar", html: `<h3>Opinar no es lo mismo que argumentar</h3><p>Todos tenemos opiniones: «Me gusta el verano», «Esa película es aburrida». Una <b>opinión</b> expresa lo que pensamos o sentimos, y no necesita justificarse. <b>Argumentar</b> va un paso más allá: intenta demostrar que nuestra opinión es razonable y que los demás deberían compartirla. Para eso necesitamos razones que el otro pueda comprobar.</p><p>También hay que distinguir entre <mark>hechos</mark> y <mark>opiniones</mark>. Un hecho se puede comprobar («El instituto tiene 600 alumnos»); una opinión es una valoración («El instituto es demasiado grande»). En una buena argumentación, los hechos sirven de prueba para las opiniones. Cuando escuches a alguien, pregúntate: ¿esto es un hecho comprobable o lo que él piensa?</p>` },
    { tras: "Tipos de argumentos", html: `<h3>¿Es un buen argumento?</h3><p>No todos los argumentos tienen la misma fuerza. Para valorarlos, hazte estas preguntas:</p><ul><li><b>¿Es pertinente?</b> ¿Tiene relación con la tesis o se va por las ramas?</li><li><b>¿Es verdadero?</b> ¿Los datos son correctos y actuales? ¿De dónde salen?</li><li><b>¿Es suficiente?</b> Un solo ejemplo no demuestra una regla general: que a tu primo le fuera bien sin estudiar no prueba que estudiar sea inútil.</li><li><b>¿La autoridad es experta en eso?</b> Un futbolista famoso no es una autoridad en medicina.</li></ul><p>Los argumentos de datos y de autoridad bien elegidos suelen ser los más sólidos; los de experiencia personal emocionan, pero solo valen como apoyo.</p>` },
    { tras: "El modelo ARE", html: `<h3>Conectores para argumentar</h3><p>Al hablar, los conectores ayudan al público a seguir el razonamiento. Los más útiles:</p>${L.tb(["Función", "Conectores"], [["Presentar la tesis", "en mi opinión, considero que, defiendo que"], ["Dar razones", "porque, ya que, puesto que, dado que"], ["Añadir", "además, también, por otra parte"], ["Ejemplificar", "por ejemplo, como muestra, así"], ["Oponer", "sin embargo, no obstante, en cambio"], ["Conceder", "es cierto que…, aunque…"], ["Concluir", "por tanto, en conclusión, en definitiva"]])}<p>Evita abusar de «y» o de «entonces»: variar los conectores hace el discurso más claro y más elegante.</p>` },
    { tras: "Los contraargumentos", html: `<h3>Argumentar con respeto</h3><p>El objetivo de argumentar no es «ganar» a toda costa ni humillar al otro, sino <mark>acercarse a la verdad</mark> o a la mejor solución. Por eso hay unas reglas de respeto: criticar las <b>ideas</b>, nunca a las <b>personas</b>; escuchar los argumentos del otro hasta el final; no deformar lo que ha dicho; y reconocer cuando tiene razón.</p><p>Cambiar de opinión ante un buen argumento no es perder: es una muestra de <b>inteligencia</b> y honestidad. Las personas que solo escuchan a quienes piensan como ellas se encierran en una «burbuja» y les cuesta entender el mundo. Practicar la argumentación respetuosa nos hace mejores ciudadanos.</p>` },
    { tras: "Los contraargumentos", html: `<h3>Ordenar los argumentos</h3><p>El orden también convence. Una estrategia clásica es la <b>estructura homérica</b> o «sándwich»: empezar con un argumento <b>fuerte</b>, poner en medio los más <b>débiles</b> y terminar con el <mark>más fuerte de todos</mark>, porque el principio y el final son lo que más se recuerda.</p><p>Para un discurso breve, bastan <b>tres argumentos</b> bien desarrollados: es una cantidad fácil de seguir y de recordar. Es mejor tres argumentos sólidos con sus pruebas que diez razones sueltas. Antes de la conclusión, dedica un momento al contraargumento principal, para que el público vea que has pensado en todas las posturas.</p>` },
  ],
  videos: [
    ["Qué es argumentar", L.vid("CdrNwcg50l8", "Texto argumentativo: características y estructura", "unProfesor", 872550)],
    ["Los contraargumentos", L.vid("F5tGNtMhk4Q", "3 consejos para argumentar mejor", "Miguel Carbonell", 753407)],
  ],
  ejemplos: [
    ["Construye un argumento ARE para la tesis «El instituto debería tener huerto escolar».", ["Afirmación: un huerto mejora el aprendizaje de ciencias.", "Razonamiento: los alumnos ven en directo cómo crecen las plantas y aplican lo estudiado.", "Evidencia: muchos centros con huerto describen más motivación en Biología (ejemplo de un centro cercano)."], "«Un huerto mejora el aprendizaje de ciencias, porque se ve en directo lo que se estudia; por ejemplo, en el instituto de…»."],
    ["Clasifica: «En Japón los alumnos limpian su aula y eso les enseña responsabilidad».", ["Pone el caso de otro país como modelo.", "Sugiere que lo que funciona allí funcionaría aquí.", "Se parece al argumento de ejemplo y de analogía."], "argumento de ejemplo/analogía."],
    ["Responde al contraargumento «Si quitamos los deberes, los alumnos no estudiarán».", ["Concesión: «Es cierto que repasar es necesario».", "Matiz: «sin embargo, se puede repasar en clase con actividades guiadas».", "Prueba: un ejemplo o dato de centros que lo aplican."], "concesión + refutación con prueba."],
  ],
  errores: [
    "Confundir opinión y argumento: «porque sí» o «porque me gusta» no argumentan.",
    "Usar un solo ejemplo como si demostrara una regla general.",
    "Citar como autoridad a alguien que no es experto en el tema.",
    "Ignorar los contraargumentos.",
    "Atacar a la persona en lugar de a sus ideas.",
  ],
  ejercicios: [
    ["¿Hecho u opinión? «Hay 30 alumnos en mi clase», «Mi clase es la más divertida».", "El primero es un hecho (comprobable); el segundo, una opinión."],
    ["Convierte el tema «El uniforme» en una tesis.", "Por ejemplo: «El uniforme debería ser obligatorio en los institutos públicos» (o lo contrario)."],
    ["Escribe un argumento de autoridad para la tesis «Hay que dormir ocho horas».", "Por ejemplo: «Los especialistas en sueño recomiendan a los adolescentes dormir entre ocho y diez horas»."],
    ["Escribe un argumento de causa-consecuencia sobre el reciclaje.", "Por ejemplo: «Si reciclamos el plástico, se reduce la cantidad que acaba en el mar»."],
    ["Escribe un argumento completo con el modelo ARE sobre el deporte.", "Respuesta abierta. Debe tener afirmación, razonamiento y evidencia (dato, ejemplo o cita)."],
    ["¿Es suficiente este argumento? «Mi abuelo fumaba y vivió 90 años, así que fumar no es tan malo».", "No: un caso aislado no demuestra una regla general; los datos médicos muestran lo contrario."],
    ["Escribe un contraargumento a «Las redes sociales solo traen problemas» y respóndelo.", "Contraargumento: «Las redes permiten estar en contacto con amigos lejanos». Respuesta: «Es cierto, pero hay que limitar su uso para evitar sus riesgos»."],
    ["Escribe tres conectores para añadir argumentos.", "Además, también, por otra parte."],
    ["Ordena tres argumentos según la estructura homérica.", "Primero uno fuerte, en medio el más débil y al final el más fuerte."],
    ["Explica por qué cambiar de opinión ante un buen argumento no es perder.", "Porque demuestra que pensamos con honestidad y estamos dispuestos a aprender; el objetivo es acercarse a la verdad, no ganar."],
  ],
  quiz: [
    ["«El instituto tiene 600 alumnos» es…", ["un hecho", "una opinión", "una tesis"], 0, "Se puede comprobar."],
    ["Un argumento pertinente es el que…", ["tiene relación con la tesis", "es muy largo", "es gracioso"], 0, "No se va por las ramas."],
    ["«Ya que» introduce…", ["una razón", "una conclusión", "una oposición"], 0, "Es causal."],
    ["En la estructura homérica, el argumento más fuerte va…", ["al final", "en medio", "no se usa"], 0, "Fuerte, débiles, el más fuerte."],
    ["Argumentar con respeto significa criticar…", ["las ideas, no a las personas", "a las personas", "nada"], 0, "Regla básica del debate."],
  ],
  tarjetas: [
    ["Hecho y opinión", "Un hecho se puede comprobar; una opinión es una valoración personal."],
    ["Estructura homérica", "Argumento fuerte al principio, débiles en medio y el más fuerte al final."],
    ["Conectores de causa", "Porque, ya que, puesto que, dado que."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["La asamblea del viaje de fin de curso", `<p>En la asamblea de 3.º B hay que decidir el viaje de fin de curso. Marta quiere ir a la nieve; Óscar, a un parque de aventuras. Marta empieza: «Es que la nieve mola más». Varios compañeros se encogen de hombros. Entonces habla Óscar: «Propongo el parque de aventuras por tres razones. Cuesta 90 euros menos por persona, lo que permite que vaya toda la clase. Está a dos horas, no a seis. Y tiene actividades para quien no sabe esquiar, que según la encuesta que hice somos once». La clase vota y gana el parque.</p><p>Óscar no ganó porque hablara más alto ni porque fuera más simpático, sino porque <b>argumentó</b>: dijo claramente qué quería, dio razones pertinentes, las apoyó con datos y pensó en lo que preocupaba a sus compañeros. Argumentar es una habilidad que usarás toda la vida: para pedir algo en casa, para defenderte de una injusticia, en un trabajo, en una entrevista o al decidir a quién votar. En este tema aprenderás a construir argumentos sólidos, a ordenarlos, a responder a quien piensa distinto y a distinguir un razonamiento correcto de uno que solo lo parece.</p>`],
  mas: [
    ["<h3>Qué es argumentar</h3>", `<p>Argumentar no es lo mismo que <b>imponer</b> ni que <b>manipular</b>. Quien impone usa la fuerza o la autoridad («porque lo digo yo»); quien manipula busca convencer con trampas, ocultando información o jugando con el miedo. Quien argumenta, en cambio, ofrece razones que el otro puede examinar libremente y aceptar o rechazar. Por eso la argumentación es la base de la convivencia democrática.</p>`],
    ["<h3>La tesis</h3>", `<p>Una buena tesis es <b>concreta</b>: «Hay que cambiar algo del instituto» es demasiado vaga; «El instituto debería abrir la biblioteca por las tardes» se puede defender y discutir. También conviene que sea <b>breve</b>, de una sola frase, para que el público la recuerde, y que se diga pronto, normalmente al principio, para que todos sepan qué se está defendiendo.</p>`],
    ["<h3>El modelo ARE</h3>", `<p>Fíjate en la diferencia: «Deberíamos tener más recreo» es solo una afirmación. Con ARE se convierte en: «Deberíamos tener un recreo más largo (A), porque los estudios muestran que una pausa activa mejora la concentración (R); en un colegio de Finlandia que alargó los descansos, los resultados mejoraron (E)». El público ya no tiene que creerte: puede comprobarlo.</p>`],
    ["<h3>Opinar no es lo mismo que argumentar</h3>", `<p>Tampoco hay que confundir opinión con <b>hecho</b>. Un hecho se puede comprobar y es verdadero o falso para todos («El instituto tiene 600 alumnos»); una opinión expresa una valoración que depende de cada persona («El instituto es demasiado grande»). En un buen discurso, las opiniones se apoyan en hechos, y los hechos se citan con su fuente para que cualquiera pueda verificarlos.</p>`],
    ["<h3>Conectores para argumentar</h3>", `<p>Los conectores también tienen un efecto sobre el oyente: anuncian lo que viene y le ayudan a no perderse. Al hablar conviene usar conectores sencillos y claros («en primer lugar», «además», «sin embargo», «por eso») y no abusar de ellos: si cada frase empieza con un conector, el discurso se vuelve pesado y artificial.</p>`],
    ["<h3>Argumentar con respeto</h3>", `<p>Una buena práctica es la llamada <b>regla de Rapoport</b>: antes de criticar la postura de alguien, resúmela con tanta claridad y justicia que esa persona diga «Sí, eso es exactamente lo que pienso». Solo después se señalan los puntos de acuerdo, lo que se ha aprendido de ella y, por último, las críticas. Así el otro se siente escuchado y está más dispuesto a escuchar.</p>`],
  ],
  svgs: [
    ["<h3>Opinar no es lo mismo que argumentar</h3>", "Opinión y argumento", [["Opinión", "me gusta, no me gusta"], ["Argumento", "opinión + razones"], ["Hecho", "se puede comprobar"]], "no es lo mismo"],
    ["<h3>¿Es un buen argumento?</h3>", "Preguntas para valorar un argumento", [["¿Pertinente?", "tiene que ver con la tesis"], ["¿Verdadero?", "datos comprobables"], ["¿Suficiente?", "no basta un caso"]], "la fuerza de un argumento"],
    ["<h3>Conectores para argumentar</h3>", "Conectores útiles", [["Razón", "porque, ya que, puesto que"], ["Oposición", "sin embargo, aunque"], ["Conclusión", "por tanto, en definitiva"]], "unir las ideas"],
    ["<h3>Argumentar con respeto</h3>", "Argumentar con respeto", [["Ideas", "se critican las ideas"], ["Personas", "no se ataca a nadie"], ["Escucha", "cambiar de opinión es sabio"]], "convencer, no vencer"],
    ["<h3>Ordenar los argumentos</h3>", "Estructura homérica", [["Primero", "un argumento fuerte"], ["En medio", "los más débiles"], ["Al final", "el más fuerte"]], "el orden convence"],
  ],
  bloques: [
    { tras: "<h3>Tipos de argumentos</h3>", html: `<h3>Deducción e inducción</h3><p>Hay dos grandes formas de razonar. En la <mark>deducción</mark> se parte de una idea general y se aplica a un caso concreto: «Todos los alumnos con más del 15 % de faltas pierden la evaluación continua; Raúl tiene un 20 %; por tanto, Raúl pierde la evaluación continua». Si las premisas (las ideas de partida) son verdaderas y el razonamiento es correcto, la conclusión es <b>segura</b>. Este esquema de dos premisas y una conclusión se llama <b>silogismo</b> y lo estudió Aristóteles.</p><p>En la <mark>inducción</mark> se hace lo contrario: se observan muchos casos concretos y se saca una regla general. «En las diez últimas excursiones, los grupos que llevaron mapa no se perdieron; llevar mapa ayuda a no perderse». La conclusión inductiva nunca es del todo segura, sino <b>probable</b>: depende de cuántos casos se hayan observado y de lo representativos que sean. Por eso un buen orador no generaliza a partir de uno o dos ejemplos y reconoce el grado de certeza de lo que afirma: «probablemente», «en la mayoría de los casos».</p>`, svg: ["Dos formas de razonar", [["Deducción", "de lo general a lo concreto"], ["Inducción", "de casos a una regla"], ["Certeza", "segura / probable"]], "deducción e inducción"], video: "tiposArg" },
    { tras: "<h3>La tesis</h3>", html: `<h3>La estructura de un texto argumentativo</h3><p>Tanto si escribes como si hablas, un texto argumentativo tiene tres partes. La <b>introducción</b> presenta el tema y, normalmente, la tesis. El <b>cuerpo argumentativo</b> desarrolla los argumentos, cada uno en un párrafo o bloque, y responde a los contraargumentos. La <b>conclusión</b> recuerda la tesis, resume las razones principales y, a veces, propone una acción.</p><p>Según dónde aparezca la tesis, la estructura puede ser <mark>deductiva</mark> (la tesis al principio y luego las razones, la más clara para un discurso), <mark>inductiva</mark> (primero los datos y ejemplos y la tesis al final, como conclusión, útil cuando el público es contrario y conviene ir convenciéndolo poco a poco) o <mark>encuadrada</mark> (la tesis al principio y se repite al final, reforzada). En la exposición oral, la estructura encuadrada es la más eficaz, porque el oyente no puede volver atrás para releer y agradece oír la idea principal dos veces.</p>`, svg: ["Dónde va la tesis", [["Deductiva", "tesis al principio"], ["Inductiva", "tesis al final"], ["Encuadrada", "al principio y al final"]], "tres estructuras"] },
    { tras: "<h3>Los contraargumentos</h3>", html: `<h3>Refutar y conceder</h3><p>Responder a un contraargumento se llama <mark>refutar</mark>. Hay varias maneras de hacerlo: demostrar que los <b>datos</b> del otro son falsos o están desfasados («Esa cifra es de 2010; la actual es la mitad»); mostrar que el argumento <b>no es pertinente</b> («Eso es cierto, pero no tiene que ver con lo que discutimos»); señalar que es <b>insuficiente</b> («Un caso no demuestra una regla»); o revelar <b>consecuencias</b> que el otro no ha tenido en cuenta.</p><p>A veces lo más inteligente es reconocer que el otro tiene parte de razón: es la <mark>concesión</mark>. Se usa con estructuras como «Es cierto que…, pero…», «Aunque…, …» o «Admito que…; sin embargo…». Por ejemplo: «Es verdad que el uniforme cuesta dinero, pero a la larga resulta más barato que comprar ropa de marca para ir a clase». La concesión transmite honestidad y seguridad, desactiva la objeción y hace que el público confíe más en quien habla, porque ve que no esconde los problemas.</p>`, svg: ["Responder a un contraargumento", [["Refutar", "datos, pertinencia, consecuencias"], ["Conceder", "es cierto que…, pero…"], ["Efecto", "más credibilidad"]], "refutación y concesión"] },
    { tras: "<h3>Ordenar los argumentos</h3>", html: `<h3>Recursos para hacer más persuasivo un argumento</h3><p>Además de buenas razones, el orador puede usar algunos <mark>recursos retóricos</mark> que hacen el mensaje más claro y memorable. La <b>pregunta retórica</b> no espera respuesta, sino que hace pensar al público: «¿De verdad queremos un patio lleno de plásticos?». La <b>enumeración de tres</b> elementos se recuerda con facilidad: «más limpio, más barato y más sano». La <b>repetición</b> de una frase clave al principio de varias ideas refuerza el mensaje, como hacía Martin Luther King con su famoso «Tengo un sueño».</p><p>También funcionan la <b>comparación</b> o analogía, que acerca una idea abstracta a algo conocido («El instituto sin biblioteca es como un gimnasio sin pesas»), y el <b>ejemplo vivo</b>, una pequeña historia real con nombre y detalle, que el público siente más cercana que una cifra. Estos recursos no sustituyen a los argumentos: si se usan sin razones detrás, se convierten en simple manipulación. Pero, bien empleados, ayudan a que unas buenas razones lleguen de verdad al público.</p>`, svg: ["Recursos persuasivos", [["Pregunta retórica", "hace pensar"], ["Regla de tres", "se recuerda mejor"], ["Analogía", "acerca lo abstracto"]], "más claro y memorable"] },
    { html: `<h3>Argumentar en la vida diaria y en la red</h3><p>Argumentamos mucho más de lo que creemos: al escribir una reseña de un videojuego, al pedir a la familia que nos deje ir a un concierto, al reclamar a una tienda o al comentar una noticia en una red social. En todos los casos sirven las mismas reglas: una tesis clara, razones pertinentes, pruebas comprobables y respeto hacia quien piensa distinto.</p><p>En internet, además, conviene tener en cuenta tres cosas. Primero, el <b>tono</b>: sin la voz ni la cara, un mensaje irónico puede parecer un insulto, así que es mejor ser claro y amable. Segundo, la <b>brevedad</b>: en pocas líneas, elige el mejor argumento en lugar de amontonar muchos. Y tercero, la <b>verificación</b>: antes de usar un dato, comprueba de dónde sale, porque en la red circulan muchas cifras falsas. Recuerda también que no todas las discusiones merecen tu tiempo: si el otro solo insulta o no escucha, retirarse a tiempo también es una decisión inteligente.</p>`, svg: ["Argumentar en la red", [["Tono", "claro y amable"], ["Brevedad", "el mejor argumento"], ["Verificación", "comprueba los datos"]]] },
  ],
  ejemplos: [
    ["Construye un silogismo correcto sobre las normas del instituto.", ["Premisa general: en el instituto está prohibido usar el móvil en clase.", "Premisa particular: estamos en clase de matemáticas.", "Conclusión: en clase de matemáticas no se puede usar el móvil."], "Un razonamiento deductivo: si las premisas son verdaderas, la conclusión es segura."],
    ["Responde con una concesión a: «Los deberes son inútiles porque nadie los hace».", ["Reconoce la parte de razón: es cierto que mucha gente no los hace bien.", "Introduce el «pero»: pero eso no demuestra que sean inútiles.", "Aporta tu razón: cuando se hacen bien, ayudan a fijar lo aprendido."], "«Es cierto que muchos no hacen los deberes, pero eso no los hace inútiles: bien hechos, ayudan a fijar lo aprendido»."],
    ["Organiza un discurso con estructura encuadrada sobre el reciclaje.", ["Introducción: dato llamativo y tesis («Reciclar en el instituto es urgente»).", "Cuerpo: tres argumentos (residuos, ahorro, ejemplo de otros centros) y una refutación.", "Conclusión: repetir la tesis y proponer una acción concreta."], "Tesis al principio y al final, reforzada."],
  ],
  errores: ["Generalizar a partir de uno o dos casos y presentarlo como una regla segura."],
  niveles: "bbbmmmmbma",
  ejercicios: [
    ["b", "Define deducción e inducción.", "Deducción: razonar de lo general a lo particular; la conclusión es segura. Inducción: sacar una regla general de casos concretos; la conclusión es probable."],
    ["b", "¿Qué es un silogismo?", "Un razonamiento deductivo con dos premisas y una conclusión, estudiado por Aristóteles."],
    ["b", "Escribe tres conectores de concesión.", "Aunque, si bien, es cierto que… pero, admito que… sin embargo."],
    ["b", "¿Qué tres partes tiene un texto argumentativo?", "Introducción (tema y tesis), cuerpo argumentativo (argumentos y refutación) y conclusión."],
    ["b", "¿Qué es una estructura encuadrada?", "La que presenta la tesis al principio y la repite al final, reforzada."],
    ["b", "¿Qué diferencia hay entre argumentar e imponer?", "Argumentar es ofrecer razones que el otro examina libremente; imponer es obligar con la fuerza o la autoridad."],
    ["b", "Convierte en tesis concreta: «Hay que mejorar el comedor».", "Por ejemplo: «El comedor debería ofrecer una opción vegetariana cada día»."],
    ["m", "Escribe un razonamiento inductivo y explica por qué su conclusión es solo probable.", "«Los cinco últimos lunes ha habido atasco a las ocho; el lunes que viene habrá atasco». Es probable, no seguro: puede ser festivo o cambiar el tráfico."],
    ["m", "Refuta este argumento mostrando que no es pertinente: «Las bicis no deberían ir por la acera porque son caras».", "El precio de la bici no tiene relación con dónde debe circular; lo pertinente sería hablar de la seguridad de los peatones y los ciclistas."],
    ["m", "Refuta con un dato este argumento: «Leer está pasado de moda; ya no lee nadie».", "Según las encuestas de hábitos de lectura, la mayoría de los jóvenes de 14 a 24 años lee libros en su tiempo libre: el dato contradice la afirmación (conviene citar la fuente y el año)."],
    ["m", "¿Cuándo conviene usar una estructura inductiva?", "Cuando el público es contrario o desconfiado: es mejor llevarlo poco a poco con datos y ejemplos hasta la tesis, en lugar de chocar con ella al principio."],
    ["m", "Escribe una concesión sobre el tema «El móvil en el recreo».", "«Es cierto que el móvil permite avisar a la familia en caso de urgencia, pero en el recreo hay teléfono en conserjería, y sin pantallas hablamos y jugamos más»."],
    ["m", "Explica por qué la concesión aumenta la credibilidad.", "Porque muestra que el orador conoce las objeciones, es honesto y no esconde los problemas; el público confía más en quien reconoce los límites de su postura."],
    ["m", "Escribe un comentario respetuoso de 50 palabras discrepando de una reseña negativa de tu película favorita.", "Respuesta abierta. Debe reconocer el punto de vista del otro, dar una o dos razones concretas (guion, actores, efectos) y mantener un tono amable."],
    ["m", "Analiza el argumento de Óscar en la lectura inicial: tesis, razones y pruebas.", "Tesis: ir al parque de aventuras. Razones: es más barato, está más cerca y sirve para quien no esquía. Pruebas: 90 euros menos, dos horas frente a seis, encuesta con once compañeros."],
    ["a", "Escribe un texto argumentativo de 150 palabras con estructura encuadrada sobre la jornada continua.", "Respuesta abierta. Debe tener tesis al principio y al final, al menos dos argumentos de tipos distintos, una concesión o refutación y conectores adecuados."],
    ["a", "Detecta el error: «Mi primo y su amigo suspendieron Física; la Física es imposible de aprobar».", "Es una inducción con muy pocos casos (generalización apresurada): dos ejemplos no permiten concluir una regla general."],
    ["a", "Construye un silogismo con una premisa falsa y explica por qué la conclusión no es fiable.", "«Todos los gatos saben nadar; Misi es un gato; Misi sabe nadar». El razonamiento es correcto, pero la primera premisa es falsa, así que la conclusión no está garantizada."],
    ["a", "Prepara tres respuestas distintas (dato, pertinencia, consecuencias) al contraargumento «Si ponemos fuentes de agua, la gente las ensuciará».", "Dato: en el centro vecino las pusieron hace un año y siguen limpias. Pertinencia: el riesgo de suciedad no anula la necesidad de agua potable. Consecuencias: sin fuentes se compran más botellas de plástico."],
    ["a", "Elige un tema polémico y escribe un argumento de cada tipo: datos, ejemplo, autoridad y valores.", "Respuesta abierta. Debe identificar con claridad cada tipo y que todos apoyen la misma tesis."],
    ["a", "¿Por qué la argumentación es fundamental en una democracia?", "Porque las decisiones colectivas se toman discutiendo razones en lugar de usar la fuerza; permite convencer, llegar a acuerdos, controlar a los gobernantes y respetar a quien piensa distinto."],
    ["a", "Valora: «Cambiar de opinión es de débiles».", "Es falso: cambiar de opinión ante mejores razones demuestra honestidad, capacidad de escucha y pensamiento crítico. Lo débil sería mantener una idea solo por orgullo."],
  ],
  cuartas: ["un chiste", "ejemplo", "una tesis", "exageración", "conclusiones", "un argumento", "es complicado", "un ejemplo", "al principio, y nada más", "solo lo que diga el profesor", "El agua hierve a 100 ºC.", "datos", "pendiente resbaladiza"],
  quiz: [
    ["Razonar de lo general a lo concreto es…", ["deducción", "inducción", "analogía", "concesión"], 0, "La conclusión es segura si las premisas lo son."],
    ["La conclusión de una inducción es…", ["probable", "siempre segura", "siempre falsa", "imposible"], 0, "Depende de los casos observados."],
    ["Un silogismo tiene…", ["dos premisas y una conclusión", "una sola frase", "tres tesis", "solo ejemplos"], 0, "Lo estudió Aristóteles."],
    ["«Es cierto que…, pero…» introduce una…", ["concesión", "tesis", "falacia", "anécdota"], 0, "Reconoce parte de razón al otro."],
    ["En la estructura inductiva, la tesis va…", ["al final", "al principio", "en ningún sitio", "en medio"], 0, "Útil ante un público contrario."],
    ["La estructura más eficaz en un discurso oral suele ser la…", ["encuadrada", "inductiva", "desordenada", "sin tesis"], 0, "El oyente no puede releer."],
    ["Mostrar que un argumento no tiene relación con el tema es demostrar que no es…", ["pertinente", "largo", "gracioso", "breve"], 0, "Una forma de refutar."],
    ["Una buena tesis es…", ["concreta y breve", "vaga y larga", "una pregunta", "un dato"], 0, "Se puede defender y discutir."],
    ["En internet, antes de usar un dato conviene…", ["verificarlo", "exagerarlo", "inventarlo", "repetirlo"], 0, "Circulan muchas cifras falsas."],
    ["Manipular es convencer…", ["con trampas", "con razones", "con datos verificados", "con respeto"], 0, "Oculta información o usa el miedo."],
  ],
  examen: [
    ["«Los diez últimos veranos han sido muy calurosos; el próximo lo será» es…", ["una inducción", "una deducción", "una concesión", "una tesis vaga"], 0, "De casos a una regla."],
    ["Refutar es…", ["responder a un contraargumento", "repetir la tesis", "dar un ejemplo", "concluir"], 0, "Demostrar que no se sostiene."],
    ["La concesión transmite…", ["honestidad y seguridad", "debilidad", "enfado", "duda"], 0, "Aumenta la credibilidad."],
    ["En el cuerpo argumentativo se…", ["desarrollan los argumentos", "saluda al público", "pone el título", "agradece"], 0, "Y se refutan los contraargumentos."],
    ["¿Qué tesis es más concreta?", ["La biblioteca debería abrir por las tardes.", "Hay que cambiar cosas.", "Todo está mal.", "El instituto es grande."], 0, "Se puede defender y discutir."],
  ],
  tarjetas: [["Deducción", "Razonamiento de lo general a lo concreto; conclusión segura."], ["Inducción", "De casos concretos a una regla; conclusión probable."], ["Concesión", "Reconocer parte de razón al otro antes de rebatirlo."], ["Estructura encuadrada", "Tesis al principio y al final."]],
  glosario: [["Argumentar", "Defender una opinión con razones para convencer."], ["Tesis", "Idea principal que se defiende."], ["Argumento", "Razón que apoya la tesis."], ["Contraargumento", "Razón que apoya la postura contraria."], ["Refutación", "Respuesta que demuestra que un argumento no se sostiene."], ["Concesión", "Reconocimiento parcial de la razón del otro."], ["Premisa", "Idea de partida de un razonamiento."], ["Silogismo", "Razonamiento deductivo con dos premisas y conclusión."], ["Deducción", "Razonamiento de lo general a lo particular."], ["Inducción", "Razonamiento de lo particular a lo general."], ["Pertinencia", "Relación de un argumento con la tesis."], ["Conector", "Palabra que une y ordena las ideas."], ["Estructura encuadrada", "Tesis al inicio y al final."], ["Modelo ARE", "Afirmación, razonamiento y evidencia."]],
  situacion: { titulo: "Propuesta para mejorar el instituto", reto: "Convencer al equipo directivo de una mejora concreta y realista para el centro.", pasos: ["Elegir en grupo una mejora concreta y formularla como tesis.", "Buscar al menos tres argumentos de tipos distintos, con datos de una encuesta propia.", "Anticipar dos contraargumentos y preparar su refutación o una concesión.", "Escribir la propuesta con estructura encuadrada y conectores adecuados.", "Defenderla oralmente en tres minutos ante la clase, que hará de equipo directivo."], producto: "Propuesta escrita de una página y exposición oral de tres minutos.", evaluacion: ["La tesis es clara, concreta y realista.", "Los argumentos son pertinentes, variados y están probados.", "Se anticipan y refutan objeciones con respeto.", "La exposición es ordenada y convincente."] },
  familias: ["Cuando vuestro hijo o hija os pida algo, pedidle que lo argumente con el modelo ARE y valorad juntos la fuerza de sus razones."],
  saberes: "la argumentación oral: tesis, tipos de argumentos, deducción e inducción, refutación y concesión, estructura del texto argumentativo.",
  minutos: 100,
});
