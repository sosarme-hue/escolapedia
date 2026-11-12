// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { flujo, filas, dos, barras, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Toma de decisiones",
  minutos: 30,
  objetivos: ["Aplicar un proceso ordenado para tomar decisiones", "Reconocer los sesgos y presiones que influyen en las decisiones", "Valorar las consecuencias y aprender de los errores"],
  claves: ["decisión", "alternativas", "criterios", "sesgo", "presión de grupo", "plan B"],
  pregunta: {
    texto: "Al terminar 4.º de ESO tendrás que elegir: ¿Bachillerato o FP?, ¿qué modalidad?, ¿cerca de casa o en otra ciudad? Muchos eligen lo mismo que sus amigos. ¿Es una buena forma de decidir?",
    respuesta: "Puede salir bien, pero es arriesgado. Las <mark>decisiones</mark> importantes merecen un método: informarse, comparar alternativas con criterios propios, prever consecuencias y tener un <b>plan B</b>. Así reduces la influencia de la presión de grupo y de los sesgos.",
  },
  bloques: [
    {
      html: `<h3>Un proceso en seis pasos</h3><p>1) <b>Define</b> qué tienes que decidir y para cuándo. 2) <b>Infórmate</b> bien (webs oficiales, orientación, gente que lo ha vivido). 3) Haz una lista de <mark>alternativas</mark>, incluso las que no habías pensado. 4) Fija tus <b>criterios</b> (lo que te importa: gusto, salidas, distancia, duración). 5) <b>Compara</b> y elige. 6) <b>Actúa y revisa</b>: si no funciona, ajusta.</p>`,
      svg: flujo("Seis pasos para decidir", ["definir", "informarse", "alternativas", "criterios", "elegir", "revisar"], "var(--pri)"),
    },
    {
      html: `<h3>Comparar con una matriz</h3><p>Una <mark>matriz de decisión</mark> ayuda a ser objetivo: pones las alternativas en filas, los criterios en columnas, puntúas cada una de 1 a 5 y das más peso a los criterios que más te importan. La alternativa con más puntos no es obligatoria, pero te obliga a pensar por qué la eliges o no.</p>`,
      svg: barras("Puntuación de tres alternativas en una matriz de decisión", [["Bach. Ciencias", 28, "var(--pen)", "28 puntos"], ["FP Sanidad", 30, "var(--leaf)", "30 puntos"], ["Bach. General", 24, "var(--sun)", "24 puntos"]], 36),
    },
    {
      html: `<h3>Sesgos y presiones</h3><p>No siempre decidimos con la razón. Los <mark>sesgos</mark> son atajos mentales que nos engañan: el <b>efecto rebaño</b> (hacer lo que hace la mayoría), el <b>sesgo de confirmación</b> (buscar solo lo que nos da la razón), el <b>miedo a perder</b> o decidir por <b>emoción</b> del momento. También influyen la familia, los amigos, las redes y los estereotipos. Escuchar opiniones es bueno; dejar que otros decidan por ti, no.</p>`,
      svg: filas("Sesgos frecuentes al decidir", [["Rebaño", "«lo hacen todos mis amigos»", "var(--red)"], ["Confirmación", "solo leo lo que me gusta", "var(--sun)"], ["Emoción", "decido enfadado o eufórico", "var(--inf)"], ["Estereotipo", "«eso es de chicos/chicas»", "var(--bac)"]]),
    },
    {
      html: `<h3>Equivocarse también enseña</h3><p>Ninguna decisión es perfecta y casi todas tienen <b>vuelta atrás</b>: se puede cambiar de modalidad, pasar de FP a la universidad o al revés. Tener un <mark>plan B</mark> reduce la ansiedad. Tras decidir, conviene revisar: ¿qué salió bien?, ¿qué haría distinto? Así cada decisión te prepara para la siguiente.</p>`,
      svg: dos("Decisión impulsiva frente a decisión meditada", ["Impulsiva", ["sin información", "por presión", "sin criterios", "sin plan B", "más arrepentimiento"], "var(--red)"], ["Meditada", ["bien informada", "propia", "criterios claros", "con plan B", "más seguridad"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Ejemplo de matriz de decisión",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Matriz con tres alternativas y cuatro criterios ponderados">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="13" text-anchor="middle">
        ${["alternativa", "me gusta (×3)", "salidas (×2)", "cerca (×1)", "duración (×1)", "total"].map((t, i) => `<text x="${[100, 240, 350, 450, 550, 630][i]}" y="36" font-weight="700" fill="var(--muted)">${t}</text>`).join("")}
        ${[["Bach. Ciencias", 4, 4, 5, 3, "var(--pen)"], ["FP Sanidad", 5, 4, 3, 4, "var(--leaf)"], ["Bach. General", 3, 3, 5, 4, "var(--sun)"]].map(([n, a, b, c, d, col], i) => { const y = 82 + i * 46; const tot = a * 3 + b * 2 + c + d; return `<rect x="20" y="${y - 26}" width="640" height="38" rx="8" fill="var(--card)" stroke="${col}" stroke-width="2"/><text x="100" y="${y}" font-weight="700" fill="${col}">${n}</text><text x="240" y="${y}" fill="var(--ink)">${a}</text><text x="350" y="${y}" fill="var(--ink)">${b}</text><text x="450" y="${y}" fill="var(--ink)">${c}</text><text x="550" y="${y}" fill="var(--ink)">${d}</text><text x="630" y="${y}" font-weight="700" font-size="16" fill="var(--ink)">${tot}</text>`; }).join("")}
      </g>
      <text x="340" y="208" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>puntúa de 1 a 5 y multiplica por el peso de cada criterio</text>
    </svg>`,
  },
  video: { id: "dbtyoNPFfp0", titulo: "Dos preguntas para tomar buenas decisiones. José Carlos Ruiz, filósofo y profesor", canal: "AprendemosJuntos", vistas: 2101560, megusta: 0, busqueda: "toma de decisiones adolescentes" },
  quiz: [
    { q: "¿Cuál es el primer paso para tomar una decisión?", o: ["Elegir rápido", "Definir qué hay que decidir", "Preguntar a un amigo y hacer lo mismo"], a: 1, e: "Saber qué decides y para cuándo ordena el resto del proceso." },
    { q: "El efecto rebaño consiste en…", o: ["decidir lo que hace la mayoría", "comparar con criterios", "informarse bien"], a: 0, e: "Es un sesgo social muy común." },
    { q: "En una matriz de decisión, los criterios son…", o: ["las opciones posibles", "los aspectos que te importan para comparar", "los resultados"], a: 1, e: "Gusto, salidas, distancia, duración, coste…" },
    { q: "Tener un plan B sirve para…", o: ["no decidir nunca", "reducir la ansiedad si algo no sale como esperabas", "complicar la decisión"], a: 1, e: "La mayoría de decisiones tienen vuelta atrás." },
    { q: "El sesgo de confirmación es…", o: ["buscar solo la información que nos da la razón", "pedir consejo", "cambiar de opinión"], a: 0, e: "Conviene buscar también argumentos en contra." },
  ],
  examen: [
    { q: "En la matriz del ejemplo, ¿por qué gana FP Sanidad?", o: ["Porque está más cerca", "Porque puntúa alto en el criterio con más peso (me gusta ×3)", "Por azar"], a: 1, e: "5 × 3 + 4 × 2 + 3 + 4 = 30 puntos, frente a 28 y 24." },
    { q: "Elegir modalidad por un estereotipo («eso es de chicos») es…", o: ["una decisión informada", "un sesgo que limita tus opciones", "lo recomendable"], a: 1, e: "Los estereotipos de género reducen las alternativas reales." },
    { q: "Después de decidir conviene…", o: ["no volver a pensar en ello", "revisar qué salió bien y qué cambiarías", "culpar a otros si sale mal"], a: 1, e: "Revisar convierte cada decisión en aprendizaje." },
  ],
  feynman: ["Los seis pasos para tomar una decisión", "Cómo funciona una matriz de decisión", "Cuatro sesgos o presiones que influyen al decidir", "Por qué equivocarse también enseña"],
  mapa: mapa("DECIDIR", "var(--pri)", [
    ["Proceso", "definir · informarse · elegir", "var(--pen)"],
    ["Matriz", "alternativas × criterios", "var(--leaf)"],
    ["Sesgos", "rebaño · confirmación", "var(--red)"],
    ["Plan B", "revisar · aprender", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Pasos para decidir", "Definir, informarse, alternativas, criterios, elegir, revisar."],
    ["Matriz de decisión", "Tabla que puntúa alternativas según criterios con peso."],
    ["Efecto rebaño", "Decidir lo que hace la mayoría sin pensar si te conviene."],
    ["Sesgo de confirmación", "Buscar solo la información que confirma lo que ya piensas."],
    ["Plan B", "Alternativa preparada por si la primera opción no funciona."],
  ],
  familias: ["Usad una matriz de decisión para una elección familiar real (vacaciones, una compra).", "Contadle una decisión importante que tomasteis y qué aprendisteis de ella.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Toma de decisiones responsable: proceso, sesgos, influencia del entorno y proyecto personal (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["Matriz de decisión real sobre el itinerario tras 4.º con criterios propios.", "Análisis de sesgos en anuncios y redes sociales.", "Charla de antiguos alumnos que cambiaron de rumbo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sesgo cognitivo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sesgo_cognitivo" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar técnicas de decisión a elecciones académicas reales", "Reconocer las emociones y los estilos de decisión propios"],
  bloques: [
    { tras: "Un proceso en seis pasos", html: `<h3>Estilos de decisión</h3>${tabla(["Estilo", "Cómo decide", "Riesgo"], [["Impulsivo", "lo primero que se le ocurre", "arrepentirse"], ["Dependiente", "lo que dicen otros (familia, amigos)", "vivir una elección ajena"], ["Evitador", "deja pasar el tiempo hasta que otros o las circunstancias deciden", "perder oportunidades"], ["Intuitivo", "por lo que «siente»", "dejar fuera información importante"], ["Planificado", "se informa, compara y decide", "bloquearse si analiza demasiado"]])}<p>El objetivo es acercarse al estilo <mark>planificado</mark> sin perder de vista lo que sientes: la intuición también es información.</p>` },
    { tras: "Comparar con una matriz", html: `<h3>Otras herramientas</h3><p>Además de la matriz ponderada, hay técnicas sencillas. La <b>lista de pros y contras</b> ayuda a ver la decisión de un vistazo. La <mark>regla 10-10-10</mark> pregunta cómo te sentirás con la decisión dentro de 10 minutos, 10 meses y 10 años, para no dejarse llevar solo por el momento. El <b>árbol de decisiones</b> dibuja cada opción y sus consecuencias posibles, como ramas. Y la técnica del <b>«consejo a un amigo»</b>: ¿qué le recomendarías a un amigo en tu misma situación? Suele dar una respuesta más serena.</p>` },
    { tras: "Sesgos y presiones", html: `<h3>Las emociones al decidir</h3><p>Las emociones no son el enemigo: el <b>miedo</b> avisa de riesgos, la <b>ilusión</b> indica lo que te motiva. El problema llega cuando una emoción intensa decide por ti. Para gestionar la <mark>ansiedad</mark> ante decisiones importantes ayuda dividir la decisión en pasos pequeños, informarse (la incertidumbre alimenta el miedo), hablar con alguien de confianza, dormir bien y darse un plazo razonable. Una regla útil: no tomes decisiones importantes en caliente, cuando estás muy enfadado, triste o eufórico.</p>` },
    { tras: "Equivocarse también enseña", html: `<h3>El plan B y la reversibilidad</h3><p>Pocas decisiones académicas son definitivas. El sistema educativo tiene muchas <b>pasarelas</b>: se puede cambiar de modalidad de Bachillerato, pasar de FP de grado medio a superior, o de un grado superior a la universidad. Antes de decidir, pregúntate: ¿es una decisión <mark>reversible</mark>? Si lo es, no hace falta tanto miedo; si no, merece más tiempo. Tener un <b>plan B</b> (qué haré si no consigo la nota o si no me gusta) da tranquilidad y permite arriesgarse con la primera opción.</p>` },
  ],
  ejemplos: [
    { enunciado: "Aplica la regla 10-10-10 a «dejar las clases de música porque este mes estoy cansado».", pasos: ["En 10 minutos: alivio.", "En 10 meses: quizá eche de menos tocar y a los compañeros.", "En 10 años: podría lamentar haber dejado algo que me gustaba por un cansancio pasajero."], resultado: "Mejor buscar una solución intermedia (menos horas) que abandonar en caliente." },
    { enunciado: "Daniel duda entre Bachillerato de Ciencias y FP de grado medio de Electromecánica. Dibuja un árbol de decisión sencillo.", pasos: ["Rama 1, Bachillerato: PAU → Ingeniería (4 años) o FP de grado superior.", "Rama 2, FP grado medio: trabajar como técnico a los 18 o seguir a grado superior y luego, si quiere, universidad.", "Ambas ramas pueden llegar a estudios superiores."], resultado: "La decisión es menos definitiva de lo que parece; puede elegir según sus intereses actuales." },
    { enunciado: "Identifica el estilo: «Elegí Humanidades porque mi madre dice que es lo mejor para mí».", pasos: ["La decisión la toma otra persona.", "No se mencionan intereses propios ni información."], resultado: "Estilo dependiente: conviene escuchar a la familia, pero decidir uno mismo." },
  ],
  errores: [
    "Dejar que pase el plazo de matrícula sin decidir.",
    "Decidir en un momento de emoción intensa.",
    "Pensar que una decisión académica es irreversible.",
    "Copiar la elección de los amigos.",
    "Analizar tanto que nunca se decide (parálisis por análisis).",
  ],
  ejercicios: [
    { q: "Cita los cinco estilos de decisión.", sol: "Impulsivo, dependiente, evitador, intuitivo y planificado." },
    { q: "¿Qué riesgo tiene el estilo evitador?", sol: "Que otros o las circunstancias decidan por ti y pierdas oportunidades." },
    { q: "Explica la regla 10-10-10.", sol: "Pensar cómo te sentirás con la decisión en 10 minutos, 10 meses y 10 años." },
    { q: "¿Para qué sirve un árbol de decisiones?", sol: "Para visualizar las opciones y sus posibles consecuencias como ramas." },
    { q: "¿Qué es el sesgo de confirmación?", sol: "Buscar solo la información que confirma lo que ya pensabas." },
    { q: "Da tres consejos para gestionar la ansiedad ante una decisión.", sol: "Informarse, dividir la decisión en pasos y hablar con alguien de confianza." },
    { q: "¿Qué es una pasarela educativa?", sol: "Un camino que permite pasar de un tipo de estudios a otro." },
    { q: "¿Para qué sirve un plan B?", sol: "Para tener una alternativa si la primera opción no sale, lo que da tranquilidad." },
    { q: "Haz una lista de dos pros y dos contras de elegir una FP de grado medio.", sol: "Pros: práctica y empleo antes; acceso a grado superior. Contras: menos opciones de acceso directo a la universidad; especialización temprana." },
    { q: "¿Qué le dirías a un amigo que quiere dejar los estudios por una mala nota?", sol: "Que no decida en caliente, que analice las causas, pida ayuda y valore las alternativas." },
  ],
  quiz: [
    { q: "El estilo planificado…", o: ["se informa y compara", "decide al azar", "deja que otros decidan"], a: 0, e: "Es el más recomendable." },
    { q: "La regla 10-10-10 sirve para…", o: ["ver la decisión a corto y largo plazo", "contar hasta diez", "elegir en diez segundos"], a: 0, e: "Evita decidir solo por el momento." },
    { q: "Decidir muy enfadado es…", o: ["mala idea", "lo mejor", "obligatorio"], a: 0, e: "Mejor esperar a calmarse." },
    { q: "Una decisión reversible…", o: ["se puede cambiar después", "es para siempre", "no existe"], a: 0, e: "Muchas académicas lo son." },
    { q: "La parálisis por análisis es…", o: ["no decidir nunca por pensar demasiado", "decidir rápido", "un examen"], a: 0, e: "Hay que ponerse un plazo." },
  ],
  tarjetas: [
    ["Estilo dependiente", "Decidir según lo que dicen otros."],
    ["Regla 10-10-10", "¿Cómo me sentiré en 10 minutos, 10 meses y 10 años?"],
    ["Plan B", "Alternativa si la primera opción no sale."],
  ],
});
module.exports.bloques.find((b) => b.html.includes("<h3>Sesgos y presiones")).video = { id: "3hG4gwIPwDs", titulo: "¿Cómo nos engañan? Pt1: los sesgos cognitivos", canal: "CuriosaMente", vistas: 775884, megusta: 0 };
