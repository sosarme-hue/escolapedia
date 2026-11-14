// Educación Física 2º ESO: la resistencia aeróbica. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "La resistencia aeróbica",
  minutos: 45,
  objetivos: ["Explicar qué es la resistencia aeróbica y sus beneficios", "Tomar el pulso y usarlo para controlar el esfuerzo", "Conocer métodos de entrenamiento: carrera continua y fartlek", "Planificar una carrera de 15-20 minutos a ritmo adecuado"],
  claves: ["resistencia aeróbica", "oxígeno", "frecuencia cardiaca", "pulso", "carrera continua", "fartlek"],
  pregunta: {
    texto: "¿Cómo puedes saber, sin ningún aparato, si estás corriendo demasiado rápido para aguantar 20 minutos?",
    respuesta: "Con la <b>prueba del habla</b>: si puedes hablar en frases cortas mientras corres, vas a un ritmo aeróbico. Si te falta el aire para decir dos palabras, vas demasiado rápido. También puedes <mark>tomarte el pulso</mark> en la muñeca o el cuello y comprobar que no se dispara.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la resistencia aeróbica?</h3><p>Es la capacidad de mantener un esfuerzo de <b>intensidad media o baja</b> durante <b>mucho tiempo</b> (más de 3-4 minutos), gracias a que llega <mark>suficiente oxígeno</mark> a los músculos.</p><p>Con ese oxígeno, los músculos obtienen energía de los azúcares y las grasas de forma eficiente y casi sin producir fatiga. Por eso se puede caminar, correr suave, nadar o pedalear durante mucho rato.</p><p>Cuando el esfuerzo es muy intenso, el oxígeno no llega a tiempo y el cuerpo usa la vía <b>anaeróbica</b>: rápida pero agotadora. Eso es lo que sientes al final de un sprint largo.</p>`,
      video: { id: "kmF4OL6vhmk", titulo: "Resistencia aeróbica y anaeróbica", canal: "Myprotein España", vistas: 129196 },
    },
    {
      html: `<h3>Corazón y pulmones trabajan juntos</h3><p>Durante el ejercicio aeróbico:</p><ol><li>Los <b>pulmones</b> respiran más rápido y más hondo para captar oxígeno.</li><li>El <b>corazón</b> late más deprisa y bombea más sangre en cada latido.</li><li>La <b>sangre</b> lleva el oxígeno a los músculos y recoge el dióxido de carbono.</li><li>Los <b>músculos</b> usan el oxígeno para producir energía.</li></ol><p>Con entrenamiento, el corazón se hace más fuerte y bombea más sangre en cada latido, así que en reposo <b>late menos veces</b>: una persona entrenada puede tener 55 pulsaciones por minuto frente a 75 de una sedentaria.</p>`,
      svg: svg("Circuito del oxígeno: pulmones, corazón, sangre y músculos", `<rect x="20" y="30" width="80" height="40" rx="10" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)"/><rect x="160" y="30" width="80" height="40" rx="10" fill="var(--red)" fill-opacity=".14" stroke="var(--red)"/><rect x="160" y="110" width="80" height="40" rx="10" fill="var(--leaf)" fill-opacity=".14" stroke="var(--leaf)"/><rect x="20" y="110" width="80" height="40" rx="10" fill="var(--sun)" fill-opacity=".14" stroke="var(--sun)"/>
        <path d="M100 50 H 156" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl2res)"/><path d="M200 70 V 106" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl2res)"/><path d="M160 130 H 104" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl2res)"/><path d="M60 110 V 74" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl2res)"/><defs><marker id="fl2res" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--ink)"/></marker></defs>
        ${t(60, 55, "pulmones", { c: "var(--pen)", s: 12 })}${t(200, 55, "corazón", { c: "var(--red)", s: 12 })}${t(200, 135, "músculos", { c: "var(--leaf)", s: 12 })}${t(60, 135, "sangre (CO₂)", { c: "var(--sun)", s: 11 })}${t(128, 42, "O₂", { s: 11 })}${t(222, 92, "O₂", { s: 11 })}${t(130, 172, "más entrenamiento → corazón más eficiente", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Beneficios para la salud</h3><ul><li>Fortalece el <b>corazón</b> y mejora la circulación.</li><li>Aumenta la capacidad de los <b>pulmones</b>.</li><li>Ayuda a mantener un <b>peso saludable</b>.</li><li>Reduce el riesgo de enfermedades como la diabetes o la hipertensión.</li><li>Mejora el <b>estado de ánimo</b>, reduce el estrés y ayuda a dormir mejor.</li><li>Mejora la concentración y el rendimiento en los estudios.</li></ul><p>La OMS recomienda a los adolescentes <mark>al menos 60 minutos diarios</mark> de actividad física moderada o intensa, sobre todo aeróbica.</p>`,
    },
    {
      html: `<h3>Cómo tomarse el pulso</h3><p>La <b>frecuencia cardiaca</b> (FC) es el número de latidos del corazón por minuto (ppm). Se puede medir en:</p><ul><li>La <b>muñeca</b> (arteria radial): por el lado del pulgar.</li><li>El <b>cuello</b> (arteria carótida): a un lado de la nuez, presionando suave.</li></ul><p>Usa los dedos <b>índice y corazón</b>, nunca el pulgar (tiene pulso propio). Cuenta los latidos durante <b>15 segundos y multiplica por 4</b>. Por ejemplo, 30 latidos en 15 s son 120 ppm.</p>`,
      video: { id: "dFIhJiMcyk8", titulo: "Aprende a tomar tu pulso", canal: "Fundación Colombiana del Corazón", vistas: 545257 },
    },
    {
      html: `<h3>La zona de trabajo aeróbico</h3><p>Para mejorar la resistencia aeróbica no hace falta ir a tope. A tu edad, una zona orientativa es entre <b>140 y 170 pulsaciones por minuto</b>, aproximadamente.</p>${tabla(["Situación", "Pulso orientativo", "Sensación"], [["Reposo", "60-80 ppm", "tranquilo"], ["Calentamiento", "110-130 ppm", "algo activado"], ["Zona aeróbica", "140-170 ppm", "puedes hablar en frases cortas"], ["Esfuerzo máximo", "más de 185 ppm", "no puedes hablar"]])}<p>Son valores orientativos: cada persona es distinta. La <b>prueba del habla</b> es una buena guía cuando no puedes medir.</p>`,
      svg: svg("Escala de pulsaciones con la zona aeróbica entre 140 y 170 resaltada en verde", `<rect x="20" y="70" width="220" height="30" rx="6" fill="var(--line)"/><rect x="${20 + (140 - 60) * 220 / 140}" y="70" width="${30 * 220 / 140}" height="30" fill="var(--leaf)" fill-opacity=".6"/><rect x="${20 + (185 - 60) * 220 / 140}" y="70" width="${15 * 220 / 140}" height="30" fill="var(--red)" fill-opacity=".5"/>
        ${[60, 100, 140, 170, 200].map((v) => t(20 + (v - 60) * 220 / 140, 118, String(v), { s: 10 })).join("")}${t(20 + (155 - 60) * 220 / 140, 58, "zona aeróbica", { c: "var(--leaf)", s: 12 })}${t(220, 140, "máximo", { c: "var(--red)", s: 11 })}${t(40, 140, "reposo", { c: "var(--muted)", s: 11 })}${t(130, 168, "pulsaciones por minuto", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Métodos de entrenamiento</h3><ul><li><b>Carrera continua</b>: correr sin parar a ritmo constante y suave entre 15 y 30 minutos. Es el método básico.</li><li><b>Fartlek</b>: carrera continua con <b>cambios de ritmo</b> (por ejemplo, 1 minuto más rápido y 2 minutos suave). Viene del sueco y significa «juego de velocidad».</li><li><b>Juegos y deportes</b> de larga duración: ultimate, fútbol, comba, baile, bici o natación.</li><li><b>Circuitos</b>: varias estaciones encadenadas con poco descanso.</li></ul>`,
    },
    {
      html: `<h3>Aprende a dosificar tu esfuerzo</h3><p>El error más frecuente es <b>salir demasiado rápido</b> y tener que parar a los 5 minutos. Consejos:</p><ul><li>Empieza más despacio de lo que crees que puedes.</li><li>Mantén un ritmo <b>regular</b>; usa vueltas a la pista como referencia.</li><li>Respira de forma rítmica, por nariz y boca.</li><li>Lleva los brazos relajados y el tronco erguido.</li><li>Si necesitas parar, <b>camina</b> en lugar de detenerte del todo.</li></ul><p>Una buena meta para 2.º de ESO: correr <mark>20 minutos seguidos</mark> a ritmo cómodo.</p>`,
      svg: svg("Dos estrategias: salir rápido y parar frente a ritmo regular que llega a 20 minutos", `<path d="M30 150 H 240 M30 150 V 30" stroke="var(--muted)" stroke-width="2"/><path d="M30 120 L 60 50 L 90 140 L 110 148" fill="none" stroke="var(--red)" stroke-width="3"/><path d="M30 120 L 50 90 H 236" fill="none" stroke="var(--leaf)" stroke-width="3"/>${t(120, 62, "salgo a tope", { c: "var(--red)", s: 11 })}${t(180, 80, "ritmo regular", { c: "var(--leaf)", s: 11 })}${t(236, 168, "20 min", { s: 10, a: "end" })}${t(26, 40, "ritmo", { s: 10, a: "end" })}`),
    },
    {
      html: `<h3>Plan de 4 semanas para correr 20 minutos</h3>${tabla(["Semana", "3 sesiones por semana"], [["1", "4 × (3 min correr + 1 min andar)"], ["2", "3 × (5 min correr + 1 min andar)"], ["3", "2 × (8 min correr + 1 min andar)"], ["4", "15-20 min seguidos de carrera continua"]])}<p>Antes, calentamiento; después, vuelta a la calma y estiramientos. Anota tu pulso al acabar cada sesión: verás que, con el mismo esfuerzo, <b>cada semana sube menos</b>.</p>`,
      video: { id: "Wn5iseQaDbk", titulo: "¿Cómo tomar la frecuencia cardiaca?", canal: "VITAL SUPPORT SAS", vistas: 1094989 },
    },
  ],
  figura: {
    titulo: "La resistencia aeróbica",
    svg: filas("Resumen de la resistencia aeróbica: definición, sistemas, pulso, zona, métodos y consejo", [["Qué es", "esfuerzo largo con oxígeno suficiente", "var(--pen)"], ["Quién trabaja", "pulmones · corazón · sangre · músculos", "var(--red)"], ["Pulso", "15 s × 4 · muñeca o cuello", "var(--sun)"], ["Zona", "≈ 140-170 ppm · prueba del habla", "var(--leaf)"], ["Métodos", "carrera continua · fartlek · juegos", "var(--inf)"], ["Consejo", "empieza despacio y ritmo regular", "var(--ink)"]], 200),
  },
  video: { id: "kmF4OL6vhmk", titulo: "Resistencia aeróbica y anaeróbica", canal: "Myprotein España", vistas: 129196, megusta: 0, busqueda: "resistencia aeróbica y anaeróbica" },
  quiz: mezcla([
    { q: "En la resistencia aeróbica, a los músculos llega…", o: ["oxígeno suficiente", "nada de oxígeno", "solo agua"], a: 0, e: "Por eso dura mucho." },
    { q: "Correr 25 minutos suave es un esfuerzo…", o: ["aeróbico", "anaeróbico", "explosivo"], a: 0, e: "Larga duración." },
    { q: "Para tomarse el pulso no se usa el dedo…", o: ["pulgar", "índice", "corazón"], a: 0, e: "Tiene pulso propio." },
    { q: "25 latidos en 15 segundos son…", o: ["100 ppm", "25 ppm", "60 ppm"], a: 0, e: "25 × 4." },
    { q: "La zona aeróbica orientativa a tu edad es…", o: ["140-170 ppm", "60-80 ppm", "más de 200 ppm"], a: 0, e: "Esfuerzo moderado." },
    { q: "Si puedes hablar en frases cortas mientras corres, vas…", o: ["a ritmo aeróbico", "demasiado rápido", "parado"], a: 0, e: "Prueba del habla." },
    { q: "Fartlek significa…", o: ["juego de velocidad", "carrera lenta", "saltar"], a: 0, e: "Cambios de ritmo." },
    { q: "Una persona entrenada en reposo tiene el pulso…", o: ["más bajo", "más alto", "igual"], a: 0, e: "Corazón más eficiente." },
    { q: "La OMS recomienda a los adolescentes al menos…", o: ["60 minutos diarios", "10 minutos a la semana", "3 horas diarias"], a: 0, e: "Actividad moderada o intensa." },
    { q: "El error más común al correr es…", o: ["salir demasiado rápido", "ir despacio", "calentar"], a: 0, e: "Hay que dosificar." },
  ]),
  examen: mezcla([
    { q: "La carótida se toma en…", o: ["el cuello", "la muñeca", "el tobillo"], a: 0, e: "A un lado de la nuez." },
    { q: "Si tras el ejercicio cuentas 42 latidos en 15 s, tu FC es…", o: ["168 ppm", "142 ppm", "84 ppm"], a: 0, e: "42 × 4." },
    { q: "Un entrenamiento de 1 min rápido + 2 min suave repetido es…", o: ["fartlek", "carrera continua pura", "estiramiento"], a: 0, e: "Cambios de ritmo." },
  ]),
  feynman: ["Qué es la resistencia aeróbica", "Qué hacen pulmones y corazón al correr", "Cómo se toma el pulso", "Qué es la zona aeróbica y la prueba del habla", "Carrera continua y fartlek"],
  mapa: mapa("RESISTENCIA AERÓBICA", "var(--eso)", [
    ["Oxígeno", "pulmones · corazón", "var(--pen)"],
    ["Pulso", "15 s × 4", "var(--red)"],
    ["Zona", "140-170 ppm", "var(--leaf)"],
    ["Métodos", "continua · fartlek", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Resistencia aeróbica", "Esfuerzo largo de intensidad media con oxígeno suficiente."],
    ["Anaeróbica", "Esfuerzo intenso y corto sin oxígeno suficiente."],
    ["Frecuencia cardiaca", "Latidos del corazón por minuto (ppm)."],
    ["Tomar el pulso", "Índice y corazón; 15 s × 4."],
    ["Zona aeróbica", "≈ 140-170 ppm a tu edad."],
    ["Prueba del habla", "Si puedes hablar en frases cortas, vas bien."],
    ["Carrera continua", "Correr sin parar a ritmo suave."],
    ["Fartlek", "Carrera con cambios de ritmo."],
  ],
  familias: ["Salid a caminar o correr suave juntos 20 minutos el fin de semana.", "Tomaos el pulso en reposo por la mañana y comparad.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Resistencia aeróbica: concepto, adaptaciones y beneficios; control de la intensidad mediante la frecuencia cardiaca y la percepción del esfuerzo; métodos continuos y fraccionados sencillos (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Registro de pulso antes, durante y después de una carrera.", "Plan de 4 semanas con autoevaluación.", "Carrera por parejas con la prueba del habla."],
  },
  fuentes: [RD, { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Cuentas 38 latidos en 15 segundos al acabar una carrera. ¿Cuál es tu FC? ¿Estás en zona aeróbica?", pasos: ["38 × 4 = 152 ppm.", "152 está entre 140 y 170."], resultado: "152 ppm: sí, zona aeróbica." },
    { enunciado: "Marcos sale muy rápido, a los 4 minutos no puede hablar y para. ¿Qué le recomiendas?", pasos: ["No puede hablar: ritmo anaeróbico.", "Debe empezar más despacio y mantener un ritmo regular."], resultado: "Bajar el ritmo y usar la prueba del habla." },
    { enunciado: "Diseña una sesión de fartlek de 15 minutos.", pasos: ["Calentamiento 5 min.", "5 × (1 min rápido + 2 min suave) = 15 min.", "Vuelta a la calma y estiramientos."], resultado: "Fartlek 5 × (1' + 2')." },
  ],
  errores: [
    "Salir a tope y tener que parar a los pocos minutos.",
    "Tomarse el pulso con el pulgar.",
    "Contar 15 segundos y olvidar multiplicar por 4.",
    "Creer que solo mejora la resistencia si se acaba agotado.",
    "Pararse en seco al terminar sin vuelta a la calma.",
  ],
  ejercicios: [
    { q: "Define la resistencia aeróbica.", sol: "Capacidad de mantener un esfuerzo de intensidad media durante mucho tiempo con oxígeno suficiente." },
    { q: "Diferencia aeróbico y anaeróbico con un ejemplo.", sol: "Aeróbico: correr 20 min suave. Anaeróbico: sprint de 300 m." },
    { q: "Explica cómo se toma el pulso en la muñeca.", sol: "Dedos índice y corazón en la arteria radial, 15 s y multiplicar por 4." },
    { q: "Calcula la FC si cuentas 33 latidos en 15 s.", sol: "132 ppm." },
    { q: "Escribe tres beneficios de la resistencia aeróbica.", sol: "Corazón más fuerte, peso saludable, mejor ánimo (o mejor sueño, pulmones…)." },
    { q: "¿Qué es la prueba del habla?", sol: "Si puedes hablar en frases cortas mientras corres, estás en ritmo aeróbico." },
    { q: "¿Qué diferencia hay entre carrera continua y fartlek?", sol: "La continua es a ritmo constante; el fartlek tiene cambios de ritmo." },
    { q: "¿Por qué una persona entrenada tiene menos pulsaciones en reposo?", sol: "Su corazón bombea más sangre en cada latido." },
    { q: "Da tres consejos para no pararte en una carrera de 20 minutos.", sol: "Empezar despacio, ritmo regular, respirar rítmicamente." },
    { q: "Escribe tu plan semanal para mejorar la resistencia.", sol: "Respuesta abierta: 3 sesiones con progresión." },
  ],
};
