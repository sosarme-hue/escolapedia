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
