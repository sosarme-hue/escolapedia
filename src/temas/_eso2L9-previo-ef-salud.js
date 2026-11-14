// Educación Física 2º ESO: salud, postura, hidratación y descanso. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Salud: postura, hidratación y descanso",
  minutos: 45,
  objetivos: ["Adoptar posturas correctas al estar sentado, levantar pesos y llevar la mochila", "Explicar la importancia de la hidratación antes, durante y después del ejercicio", "Valorar el descanso y el sueño para la salud y el rendimiento", "Identificar hábitos saludables y perjudiciales"],
  claves: ["higiene postural", "columna vertebral", "hidratación", "deshidratación", "sueño", "descanso", "hábitos saludables"],
  pregunta: {
    texto: "Pasas unas seis horas al día sentado en clase y varias más con el móvil. ¿Qué le pasa a tu espalda?",
    respuesta: "Si te sientas encorvado y con la cabeza inclinada hacia la pantalla, los músculos y los discos de la <b>columna</b> soportan mucha más carga de la necesaria. Con el tiempo aparecen dolores. Una buena <mark>higiene postural</mark> y moverse cada cierto tiempo lo evitan.",
  },
  bloques: [
    {
      html: `<h3>La salud y los hábitos</h3><p>La OMS define la <b>salud</b> como un estado de completo bienestar <b>físico, mental y social</b>, no solo la ausencia de enfermedad. Depende en gran parte de nuestros <b>hábitos</b>:</p><ul><li><b>Saludables</b>: actividad física diaria, alimentación equilibrada, hidratación, buen descanso, higiene, buena postura.</li><li><b>Perjudiciales</b>: sedentarismo, abuso de pantallas, dormir poco, tabaco, alcohol y otras drogas, mala alimentación.</li></ul><p>En este tema nos centramos en tres hábitos muy relacionados con la Educación Física: la <b>postura</b>, la <b>hidratación</b> y el <b>descanso</b>.</p>`,
    },
    {
      html: `<h3>La columna vertebral</h3><p>La columna tiene <b>33 vértebras</b> y cuatro curvas naturales vistas de lado: cervical, dorsal, lumbar y sacra. Esas curvas amortiguan los golpes como un muelle.</p><p>La <b>higiene postural</b> son las normas para mantener esas curvas en su posición natural al sentarse, estar de pie, levantar pesos o dormir. Si se fuerzan durante mucho tiempo pueden aparecer:</p><ul><li><b>Hipercifosis</b>: «chepa», curva dorsal exagerada.</li><li><b>Hiperlordosis</b>: curva lumbar exagerada.</li><li><b>Escoliosis</b>: desviación lateral de la columna.</li></ul>`,
      svg: svg("Columna vertebral de perfil con las curvas cervical, dorsal, lumbar y sacra", `<path d="M120 20 C 108 40 108 50 118 64 C 134 84 136 100 122 120 C 110 136 112 148 124 166" fill="none" stroke="var(--ink)" stroke-width="10" stroke-linecap="round" stroke-dasharray="7 3"/>
        ${t(150, 40, "cervical", { c: "var(--pen)", s: 11, a: "start" })}${t(150, 86, "dorsal", { c: "var(--red)", s: 11, a: "start" })}${t(150, 126, "lumbar", { c: "var(--sun)", s: 11, a: "start" })}${t(150, 160, "sacra", { c: "var(--leaf)", s: 11, a: "start" })}<path d="M146 36 H 120 M146 82 H 134 M146 122 H 124 M146 156 H 122" stroke="var(--muted)" stroke-width="1"/>${t(60, 96, "vista lateral", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Posturas correctas</h3>${tabla(["Situación", "Cómo hacerlo"], [["Sentado", "espalda apoyada en el respaldo, pies en el suelo, rodillas a 90°, pantalla a la altura de los ojos"], ["Con el móvil", "subir el móvil a la altura de los ojos en vez de bajar la cabeza"], ["Levantar peso", "flexionar las rodillas, espalda recta, peso pegado al cuerpo, subir con las piernas"], ["Mochila", "las dos asas, bien ajustada, que no pase del 10-15 % de tu peso"], ["Dormir", "de lado o boca arriba, almohada que mantenga el cuello recto"]])}<p>Además, cada 45-60 minutos sentado conviene <b>levantarse y moverse</b> un par de minutos.</p>`,
      video: { id: "ygcmGps4V2U", titulo: "Higiene postural", canal: "Educación Virtual Udca", vistas: 430102 },
    },
    {
      html: `<h3>Cómo levantar peso del suelo</h3><p>Es una de las acciones en las que más lesiones de espalda se producen. La clave es <b>usar las piernas, no la espalda</b>.</p>`,
      svg: svg("Comparación: levantar una caja doblando la espalda, incorrecto, y flexionando las rodillas con la espalda recta, correcto", `<path d="M20 126 H 240" stroke="var(--line)" stroke-width="3"/><rect x="94" y="106" width="26" height="20" fill="var(--sun)" fill-opacity=".4" stroke="var(--sun)"/><g stroke="var(--red)" stroke-width="3.2" stroke-linecap="round" fill="none"><path d="M58 126 L 66 84 L 74 126"/><path d="M66 84 L 104 80"/><path d="M100 81 L 104 106"/></g><circle cx="112" cy="78" r="7" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="3"/>
        <rect x="178" y="98" width="26" height="22" fill="var(--sun)" fill-opacity=".4" stroke="var(--sun)"/><g stroke="var(--leaf)" stroke-width="3.2" stroke-linecap="round" fill="none"><path d="M174 126 L 166 104 L 186 98 M206 126 L 214 104 L 194 98"/><path d="M190 98 V 60"/><path d="M190 68 L 182 100 M190 68 L 198 100"/></g><circle cx="190" cy="52" r="7" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M60 22 L 80 42 M80 22 L 60 42" stroke="var(--red)" stroke-width="3"/><path d="M180 30 L 188 38 L 202 20" fill="none" stroke="var(--leaf)" stroke-width="3"/>${t(70, 150, "espalda doblada", { c: "var(--red)", s: 11 })}${t(190, 150, "rodillas flexionadas", { c: "var(--leaf)", s: 11 })}${t(190, 166, "espalda recta", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>La hidratación</h3><p>El cuerpo de un adolescente es aproximadamente un <b>60 % agua</b>. Al hacer ejercicio sudamos para enfriarnos y perdemos agua y sales minerales. Si no se reponen aparece la <b>deshidratación</b>:</p><ul><li>Sed, boca seca, cansancio, dolor de cabeza.</li><li>Calambres y bajada del rendimiento.</li><li>En casos graves, mareos y <b>golpe de calor</b>.</li></ul><p>Una pérdida de solo el 2 % del peso en agua ya reduce el rendimiento de forma clara. Una pista sencilla: la orina debe ser de color <b>amarillo claro</b>.</p>`,
      video: { id: "Ysla29Bab6E", titulo: "La importancia de la hidratación en el deporte", canal: "Sanitas", vistas: 40028 },
    },
    {
      html: `<h3>Cuándo y cuánto beber</h3><ul><li><b>Antes</b>: un vaso de agua (200-300 ml) en la hora previa.</li><li><b>Durante</b>: pequeños sorbos cada 15-20 minutos, sobre todo si hace calor.</li><li><b>Después</b>: beber hasta recuperar lo perdido.</li></ul><p>Para la actividad de clase basta con <b>agua</b>. Las bebidas isotónicas solo son útiles en esfuerzos largos (más de una hora) o con mucho calor. Las <mark>bebidas energéticas</mark> (con mucha cafeína y azúcar) <b>no son adecuadas</b> para adolescentes. Y los refrescos azucarados no hidratan mejor que el agua.</p><p>No hay que esperar a tener sed: cuando aparece, ya se ha empezado a perder agua.</p>`,
      svg: svg("Línea temporal de la hidratación: antes un vaso, durante sorbos cada 15-20 minutos y después reponer", chips([["Antes", "1 vaso (200-300 ml) en la hora previa", "var(--pen)"], ["Durante", "sorbos cada 15-20 min", "var(--inf)"], ["Después", "reponer lo perdido", "var(--leaf)"], ["Evitar", "bebidas energéticas y refrescos", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>El descanso y el sueño</h3><p>Mientras duermes, tu cuerpo <b>repara los músculos</b>, segrega la hormona del crecimiento, ordena lo que has aprendido y recupera energía. Los adolescentes necesitan entre <b>8 y 10 horas</b> de sueño cada noche.</p><p>Dormir poco provoca cansancio, peor concentración y memoria, irritabilidad, más riesgo de lesiones y peor rendimiento deportivo. Consejos para dormir bien:</p><ul><li>Horarios regulares, también el fin de semana.</li><li>Dejar las <b>pantallas</b> al menos 1 hora antes de dormir: su luz retrasa el sueño.</li><li>Habitación oscura, tranquila y fresca.</li><li>Cenar ligero y no tomar bebidas con cafeína por la tarde.</li><li>Hacer ejercicio durante el día (no justo antes de acostarse).</li></ul>`,
      video: { id: "95yHdyHNPto", titulo: "Siete consejos para dormir bien", canal: "AprendemosJuntos", vistas: 1019846 },
    },
    {
      html: `<h3>Un día saludable</h3>${tabla(["Momento", "Hábito"], [["Mañana", "desayuno completo, mochila bien colocada, ir andando o en bici si se puede"], ["En clase", "sentarse bien, levantarse en los cambios, beber agua"], ["Tarde", "al menos 60 min de actividad física, deberes con buena postura"], ["Noche", "cena ligera, pantallas fuera 1 h antes, 8-10 h de sueño"]])}<p>No se trata de ser perfecto, sino de <b>sumar pequeños hábitos</b> cada día.</p>`,
    },
  ],
  figura: {
    titulo: "Salud: postura, hidratación y descanso",
    svg: filas("Resumen: salud, columna, postura, levantar peso, hidratación y sueño", [["Salud", "bienestar físico, mental y social", "var(--ink)"], ["Columna", "4 curvas · evitar cifosis, lordosis, escoliosis", "var(--pen)"], ["Postura", "espalda apoyada · móvil a los ojos", "var(--inf)"], ["Levantar", "flexionar rodillas · peso pegado", "var(--leaf)"], ["Hidratación", "antes, durante y después · agua", "var(--sun)"], ["Sueño", "8-10 h · sin pantallas 1 h antes", "var(--red)"]], 200),
  },
  video: { id: "ygcmGps4V2U", titulo: "Higiene postural", canal: "Educación Virtual Udca", vistas: 430102, megusta: 0, busqueda: "higiene postural hidratación descanso" },
  quiz: mezcla([
    { q: "Según la OMS, la salud es…", o: ["bienestar físico, mental y social", "no tener fiebre", "estar fuerte"], a: 0, e: "Definición amplia." },
    { q: "¿Cuántas curvas naturales tiene la columna vista de lado?", o: ["cuatro", "ninguna", "dos"], a: 0, e: "Cervical, dorsal, lumbar, sacra." },
    { q: "La desviación lateral de la columna se llama…", o: ["escoliosis", "lordosis", "cifosis"], a: 0, e: "Hacia un lado." },
    { q: "Para levantar peso del suelo hay que…", o: ["flexionar las rodillas con la espalda recta", "doblar la espalda", "girar el tronco"], a: 0, e: "Usar las piernas." },
    { q: "La mochila no debería superar el…", o: ["10-15 % de tu peso", "50 % de tu peso", "1 % de tu peso"], a: 0, e: "Y con las dos asas." },
    { q: "Durante el ejercicio conviene beber…", o: ["sorbos cada 15-20 minutos", "nada", "un litro de golpe"], a: 0, e: "Poco y a menudo." },
    { q: "Para la clase de Educación Física la mejor bebida es…", o: ["agua", "bebida energética", "refresco"], a: 0, e: "Suficiente." },
    { q: "Las bebidas energéticas en adolescentes…", o: ["no son adecuadas", "son recomendables", "hidratan mejor"], a: 0, e: "Cafeína y azúcar." },
    { q: "Los adolescentes necesitan dormir…", o: ["8-10 horas", "5 horas", "12-14 horas"], a: 0, e: "Cada noche." },
    { q: "Las pantallas conviene dejarlas…", o: ["1 hora antes de dormir", "al apagar la luz", "no importa"], a: 0, e: "Su luz retrasa el sueño." },
  ]),
  examen: mezcla([
    { q: "La «chepa» o curva dorsal exagerada se llama…", o: ["hipercifosis", "hiperlordosis", "escoliosis"], a: 0, e: "Zona dorsal." },
    { q: "Una señal sencilla de buena hidratación es la orina…", o: ["amarilla clara", "muy oscura", "inexistente"], a: 0, e: "Color pajizo." },
    { q: "Perder un 2 % del peso en agua…", o: ["ya reduce el rendimiento", "no afecta", "mejora la velocidad"], a: 0, e: "Deshidratación leve." },
  ]),
  feynman: ["Qué es la salud según la OMS", "Las curvas de la columna y la higiene postural", "Cómo levantar peso correctamente", "Cuándo y qué beber al hacer ejercicio", "Por qué dormir 8-10 horas"],
  mapa: mapa("SALUD", "var(--eso)", [
    ["Postura", "sentado · mochila · móvil", "var(--pen)"],
    ["Levantar", "rodillas · espalda recta", "var(--leaf)"],
    ["Hidratación", "antes · durante · después", "var(--sun)"],
    ["Descanso", "8-10 h · sin pantallas", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Salud", "Bienestar físico, mental y social."],
    ["Higiene postural", "Normas para cuidar la columna en el día a día."],
    ["Escoliosis", "Desviación lateral de la columna."],
    ["Hipercifosis", "Curva dorsal exagerada."],
    ["Levantar peso", "Rodillas flexionadas, espalda recta, peso pegado."],
    ["Deshidratación", "Pérdida de agua y sales que reduce el rendimiento."],
    ["Hidratación", "Beber antes, durante y después."],
    ["Sueño", "8-10 horas; repara y consolida lo aprendido."],
  ],
  familias: ["Revisad juntos el peso de la mochila con una báscula.", "Acordad una hora sin pantallas antes de dormir para toda la familia.", "Llevad siempre una botella de agua a las actividades deportivas."],
  profesores: {
    saberes: "Hábitos saludables: higiene postural y cuidado de la espalda, hidratación en la actividad física, descanso y sueño; efectos de hábitos perjudiciales (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Pesar mochilas y calcular su porcentaje sobre el peso corporal.", "Diario de sueño de una semana.", "Taller práctico de cómo levantar cargas."],
  },
  fuentes: [RD, { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }, { t: "Asociación Española de Pediatría: Familia y Salud", url: "https://www.familiaysalud.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Pesas 50 kg. ¿Cuánto debería pesar como máximo tu mochila?", pasos: ["10 % de 50 = 5 kg.", "15 % de 50 = 7,5 kg."], resultado: "Entre 5 y 7,5 kg como máximo." },
    { enunciado: "Juan se acuesta a las 0:30 y se levanta a las 7:15. ¿Duerme suficiente?", pasos: ["De 0:30 a 7:15 hay 6 h 45 min.", "Necesita 8-10 h."], resultado: "No: le faltan al menos 1 h 15 min." },
    { enunciado: "Pesas 50 kg antes de un partido y 49 kg después. ¿Qué porcentaje de agua has perdido y qué haces?", pasos: ["Has perdido 1 kg.", "1 / 50 = 2 %.", "Hay que beber para reponerlo."], resultado: "2 %: deshidratación leve; beber agua poco a poco." },
  ],
  errores: [
    "Levantar peso del suelo doblando la espalda.",
    "Llevar la mochila colgada de un solo hombro.",
    "Esperar a tener sed para beber.",
    "Pensar que las bebidas energéticas hidratan.",
    "Usar el móvil en la cama antes de dormir.",
    "Recuperar el sueño de la semana durmiendo hasta mediodía el domingo.",
  ],
  ejercicios: [
    { q: "Define salud según la OMS.", sol: "Estado de completo bienestar físico, mental y social." },
    { q: "Nombra las cuatro curvas de la columna.", sol: "Cervical, dorsal, lumbar y sacra." },
    { q: "Explica tres normas para sentarse bien.", sol: "Espalda apoyada, pies en el suelo, pantalla a la altura de los ojos." },
    { q: "Describe cómo levantar una caja del suelo.", sol: "Flexionar las rodillas, espalda recta, caja pegada al cuerpo, subir con las piernas." },
    { q: "¿Qué síntomas tiene la deshidratación?", sol: "Sed, cansancio, dolor de cabeza, calambres, mareos." },
    { q: "Explica cuándo beber durante la actividad física.", sol: "Antes un vaso, durante sorbos cada 15-20 min, después reponer." },
    { q: "¿Por qué no se recomiendan las bebidas energéticas?", sol: "Llevan mucha cafeína y azúcar; no son adecuadas para adolescentes." },
    { q: "¿Qué ocurre en el cuerpo mientras dormimos?", sol: "Se reparan músculos, se segrega hormona del crecimiento y se consolida lo aprendido." },
    { q: "Escribe cuatro consejos para dormir bien.", sol: "Horario regular, sin pantallas 1 h antes, habitación oscura, sin cafeína por la tarde." },
    { q: "Analiza tu día y propón dos hábitos saludables nuevos.", sol: "Respuesta abierta." },
  ],
};
