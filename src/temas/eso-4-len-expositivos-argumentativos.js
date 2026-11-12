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
