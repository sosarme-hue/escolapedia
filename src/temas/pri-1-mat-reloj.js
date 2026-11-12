// Matemáticas 1º de Primaria: el reloj y el calendario.
const { mapa } = require("./_util");
const { svg, num, txt, reloj, PROF, FUENTES } = require("./_pri1");

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "El reloj y el calendario",
  minutos: 25,
  objetivos: ["Leer la hora en punto y la media en un reloj de agujas", "Ordenar los momentos del día", "Conocer los días de la semana y los meses del año"],
  claves: ["hora", "en punto", "y media", "día", "semana", "mes", "año"],
  pregunta: {
    texto: "¿Cómo sabes cuándo es la hora del recreo o cuántos días faltan para tu cumpleaños?",
    respuesta: "Con el <mark>reloj</mark> sabemos la hora del recreo, y con el <mark>calendario</mark> contamos los días que faltan para el cumpleaños.",
  },
  bloques: [
    {
      html: `<h3>Mañana, tarde y noche</h3><p>El día tiene momentos: por la <mark>mañana</mark> nos levantamos y vamos al cole. Por la <mark>tarde</mark> jugamos y merendamos. Por la <mark>noche</mark> cenamos y dormimos.</p><p>Siempre van en el mismo orden: mañana, tarde, noche… ¡y otra vez mañana!</p>`,
      svg: svg("Un sol saliendo por la mañana, un sol alto por la tarde y una luna por la noche", `<rect x="10" y="30" width="78" height="100" rx="10" fill="var(--sun)" opacity=".25"/><circle cx="49" cy="100" r="18" fill="var(--sun)"/><rect x="91" y="30" width="78" height="100" rx="10" fill="var(--water)" opacity=".3"/><circle cx="130" cy="65" r="18" fill="var(--sun)"/><rect x="172" y="30" width="78" height="100" rx="10" fill="var(--ink)" opacity=".85"/><path d="M215 55 a 18 18 0 1 0 12 30 a 14 14 0 1 1 -12 -30" fill="var(--sun)"/>${txt(49, 155, "mañana", "var(--ink)", 13)}${txt(130, 155, "tarde", "var(--ink)", 13)}${txt(211, 155, "noche", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>El reloj de agujas</h3><p>El reloj tiene los <b>números del 1 al 12</b> en un círculo y <mark>dos agujas</mark>.</p><p>La aguja <b>corta</b> marca la hora. La aguja <b>larga</b> marca los minutos. Las dos giran siempre hacia el mismo lado, el de las agujas del reloj.</p>`,
      svg: svg("Un reloj con la aguja corta roja y la aguja larga azul", `${reloj(78, 90, 64, 10, 10)}${txt(202, 70, "corta: hora", "var(--red)", 13)}${txt(202, 110, "larga: minutos", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>La hora en punto</h3><p>Cuando la aguja larga está <mark>arriba, en el 12</mark>, es la hora <b>en punto</b>.</p><p>Miramos la aguja corta: si señala el 3, son <b>las 3 en punto</b>. Si señala el 9, son las 9 en punto.</p>`,
      svg: svg("Dos relojes: las tres en punto y las nueve en punto", `${reloj(70, 80, 55, 3, 0)}${reloj(190, 80, 55, 9, 0)}${txt(70, 160, "las 3 en punto", "var(--ink)", 13)}${txt(190, 160, "las 9 en punto", "var(--ink)", 13)}`),
      video: { id: "VIKnShZHmbk", titulo: "¿Qué hora es? En punto, y media, y cuarto", canal: "Smile and Learn - Español", vistas: 724061, megusta: 0 },
    },
    {
      html: `<h3>La hora y media</h3><p>Cuando la aguja larga está <mark>abajo, en el 6</mark>, ha pasado media hora: son <b>y media</b>.</p><p>La aguja corta estará entre dos números. Si está entre el 4 y el 5, son <b>las 4 y media</b>. Siempre miramos el número que ya ha pasado.</p>`,
      svg: svg("Un reloj que marca las cuatro y media", `${reloj(90, 85, 65, 4, 30)}${txt(205, 80, "las 4", "var(--red)", 16)}${txt(205, 104, "y media", "var(--pen)", 16)}`),
    },
    {
      html: `<h3>El reloj digital</h3><p>Algunos relojes no tienen agujas: muestran <mark>números</mark>. Son los relojes <b>digitales</b>, como el del móvil o el del microondas.</p><p>El primer número es la hora y el segundo, los minutos. <b>3:00</b> son las 3 en punto. <b>3:30</b> son las 3 y media.</p>`,
      svg: svg("Dos relojes digitales: 3:00 y 3:30", `${[["3:00", "en punto"], ["3:30", "y media"]].map(([t, d], i) => `<rect x="${25 + i * 120}" y="50" width="95" height="55" rx="10" fill="var(--ink)"/>${num(72 + i * 120, 89, t, "var(--leaf)", 28)}${txt(72 + i * 120, 135, d, "var(--ink)", 14)}`).join("")}`),
    },
    {
      html: `<h3>Los días de la semana</h3><p>Una semana tiene <mark>7 días</mark>: <b>lunes, martes, miércoles, jueves, viernes, sábado y domingo</b>.</p><p>De lunes a viernes vamos al cole. El sábado y el domingo son el <b>fin de semana</b>. Después del domingo, empieza otra vez el lunes.</p>`,
      svg: svg("Los siete días de la semana en fila, con el fin de semana en otro color", `${DIAS.map((d, i) => `<rect x="${8 + i * 35.5}" y="50" width="32" height="70" rx="6" fill="${i < 5 ? "var(--pen)" : "var(--red)"}" opacity="${i < 5 ? 0.85 : 0.75}"/><text transform="translate(${28 + i * 35.5} 112) rotate(-90)" font-size="11" font-weight="700" fill="var(--card)" font-family="inherit">${d}</text>`).join("")}${txt(90, 145, "cole", "var(--pen)", 13)}${txt(215, 145, "fin de semana", "var(--red)", 12)}`),
      video: { id: "ZKbYDeQ_wNg", titulo: "Los días de la semana para niños", canal: "Smile and Learn - Español", vistas: 2800530, megusta: 0 },
    },
    {
      html: `<h3>Ayer, hoy y mañana</h3><p><mark>Hoy</mark> es el día en que estamos. <b>Ayer</b> fue el día de antes. <b>Mañana</b> será el día de después.</p><p>Si hoy es martes, ayer fue lunes y mañana será miércoles. Es como el número anterior y el siguiente, ¡pero con días!</p>`,
      svg: svg("Ayer lunes, hoy martes y mañana miércoles", `${[["ayer", "lunes", "var(--muted)"], ["hoy", "martes", "var(--red)"], ["mañana", "miércoles", "var(--leaf)"]].map(([a, d, c], i) => `<rect x="${15 + i * 80}" y="45" width="70" height="80" rx="10" fill="var(--card)" stroke="${c}" stroke-width="${i === 1 ? 4 : 2}"/>${txt(50 + i * 80, 75, a, c, 15)}${txt(50 + i * 80, 105, d, "var(--ink)", 12)}`).join("")}`),
    },
    {
      html: `<h3>Los meses y el calendario</h3><p>Un año tiene <mark>12 meses</mark>: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre y diciembre.</p><p>El <b>calendario</b> nos muestra los días de cada mes. Lo usamos para apuntar cumpleaños, fiestas y excursiones.</p>`,
      svg: svg("Una hoja de calendario del mes de mayo con el día 15 rodeado", `<rect x="40" y="20" width="180" height="140" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="40" y="20" width="180" height="26" rx="8" fill="var(--red)"/>${txt(130, 39, "MAYO", "var(--card)", 14)}${[...Array(31)].map((_, i) => num(55 + (i % 7) * 25, 66 + Math.floor(i / 7) * 20, i + 1, "var(--ink)", 10)).join("")}<circle cx="55" cy="102" r="10" fill="none" stroke="var(--red)" stroke-width="2.5"/>`),
    },
    {
      html: `<h3>¿Para qué sirve? Mi horario</h3><p>Con el reloj y el calendario <b>organizamos el tiempo</b>: a qué hora empieza el cole, qué día hay educación física o cuántos días faltan para las vacaciones.</p><p>Juego: haz <mark>tu horario de un día</mark>. Dibuja relojes con la hora en que te levantas, comes, meriendas y te acuestas.</p>`,
      svg: svg("Un horario con tres relojes: levantarse a las 8, comer a las 2, dormir a las 9", `${[[8, "levantarme"], [2, "comer"], [9, "dormir"]].map(([h, t], i) => `${reloj(45 + i * 85, 70, 34, h, 0)}${txt(45 + i * 85, 130, t, "var(--ink)", 12)}${num(45 + i * 85, 155, `${h}:00`, "var(--pen)", 14)}`).join("")}`),
    },
  ],
  figura: {
    titulo: "En punto y media",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Cuatro relojes: las 7 en punto, las 7 y media, las 12 en punto y las 12 y media">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[[7, 0, "las 7 en punto"], [7, 30, "las 7 y media"], [12, 0, "las 12 en punto"], [12, 30, "las 12 y media"]].map(([h, m, t], i) => reloj(85 + i * 157, 110, 65, h, m) + txt(85 + i * 157, 220, t, "var(--ink)", 15)).join("")}
    </svg>`,
  },
  video: { id: "XCgJB97DEGM", titulo: "¿Qué hora es? Aprender a decir la hora", canal: "Smile and Learn - Español", vistas: 2458966, megusta: 0, busqueda: "aprender la hora niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "La aguja larga está en el 12 y la corta en el 8. ¿Qué hora es?", pasos: ["La larga en el 12: es en punto.", "La corta señala el 8."], resultado: "son las 8 en punto." },
    { enunciado: "La aguja larga está en el 6 y la corta entre el 2 y el 3. ¿Qué hora es?", pasos: ["La larga en el 6: es y media.", "La corta ya ha pasado el 2."], resultado: "son las 2 y media." },
    { enunciado: "Hoy es jueves. ¿Qué día será pasado mañana?", pasos: ["Mañana es el día siguiente: viernes.", "Pasado mañana es el siguiente del viernes."], resultado: "pasado mañana será sábado." },
  ],
  errores: [
    "Confundir las agujas: la corta es la hora y la larga, los minutos.",
    "En «y media», decir la hora del número que viene: si está entre el 4 y el 5, son las 4 y media.",
    "Olvidar el orden de los días de la semana o de los meses: cantad la canción para recordarlos.",
    "Pensar que la semana empieza en domingo: en España empieza en lunes.",
  ],
  ejercicios: [
    { q: "¿Qué haces por la mañana? ¿Y por la noche?", sol: "Por ejemplo: por la mañana voy al cole; por la noche duermo." },
    { q: "Dibuja un reloj que marque las 5 en punto.", sol: "La aguja larga en el 12 y la corta en el 5." },
    { q: "Dibuja un reloj que marque las 10 y media.", sol: "La aguja larga en el 6 y la corta entre el 10 y el 11." },
    { q: "Un reloj digital marca 7:00. ¿Qué hora es?", sol: "Las 7 en punto." },
    { q: "¿Cuántos días tiene una semana?", sol: "7 días." },
    { q: "¿Qué día va después del miércoles?", sol: "El jueves." },
    { q: "Si hoy es domingo, ¿qué día fue ayer?", sol: "El sábado." },
    { q: "¿Cuántos meses tiene un año?", sol: "12 meses." },
    { q: "¿En qué mes es tu cumpleaños?", sol: "Respuesta personal." },
    { q: "Di los días del fin de semana.", sol: "Sábado y domingo." },
  ],
  quiz: [
    { q: "La aguja corta marca…", o: ["los minutos", "la hora", "el día"], a: 1, e: "La corta es la hora." },
    { q: "Si la aguja larga está en el 12, es…", o: ["en punto", "y media", "de noche"], a: 0, e: "En punto." },
    { q: "Si la aguja larga está en el 6, es…", o: ["en punto", "y media", "mediodía"], a: 1, e: "Ha pasado media hora." },
    { q: "Larga en el 12 y corta en el 4: son las…", o: ["12", "4 en punto", "4 y media"], a: 1, e: "Las 4 en punto." },
    { q: "Una semana tiene…", o: ["5 días", "7 días", "12 días"], a: 1, e: "De lunes a domingo." },
    { q: "Después del viernes viene…", o: ["el jueves", "el sábado", "el lunes"], a: 1, e: "Viernes, sábado." },
    { q: "Un año tiene…", o: ["12 meses", "7 meses", "10 meses"], a: 0, e: "De enero a diciembre." },
    { q: "El primer mes del año es…", o: ["diciembre", "marzo", "enero"], a: 2, e: "Enero." },
    { q: "Si hoy es lunes, mañana es…", o: ["domingo", "martes", "miércoles"], a: 1, e: "Lunes, martes." },
    { q: "8:30 en un reloj digital son las…", o: ["8 en punto", "8 y media", "3 y ocho"], a: 1, e: "30 minutos es media hora." },
  ],
  examen: [
    { q: "Por la noche…", o: ["vamos al cole", "dormimos", "desayunamos"], a: 1, e: "Por la noche dormimos." },
    { q: "Larga en el 6, corta entre el 9 y el 10: son las…", o: ["9 y media", "10 y media", "6 y 9"], a: 0, e: "La corta ya ha pasado el 9." },
    { q: "El día antes del jueves es…", o: ["viernes", "miércoles", "martes"], a: 1, e: "Miércoles, jueves." },
    { q: "¿Qué mes va después de junio?", o: ["mayo", "julio", "agosto"], a: 1, e: "Junio, julio." },
  ],
  feynman: ["Qué marca cada aguja del reloj", "Cómo sé si es en punto o y media", "Cuáles son los días de la semana en orden"],
  mapa: mapa("EL TIEMPO", "var(--pri)", [
    ["Momentos del día", "mañana · tarde · noche", "var(--sun)"],
    ["Reloj", "corta: hora · larga: minutos", "var(--red)"],
    ["Semana", "7 días, de lunes a domingo", "var(--pen)"],
    ["Año", "12 meses, de enero a diciembre", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Qué marca la aguja corta?", "La hora"],
    ["¿Qué marca la aguja larga?", "Los minutos"],
    ["Larga en el 12", "En punto"],
    ["Larga en el 6", "Y media"],
    ["Días de la semana", "Lunes, martes, miércoles, jueves, viernes, sábado, domingo"],
    ["¿Cuántos meses tiene el año?", "12"],
    ["Fin de semana", "Sábado y domingo"],
    ["Si hoy es martes, ayer fue…", "Lunes"],
  ],
  familias: [
    "Tened en casa un reloj de agujas a su altura y preguntad la hora en punto y la media.",
    "Colgad un calendario y marcad con él cumpleaños, excursiones y días especiales.",
    "Cada mañana, preguntad: «¿Qué día es hoy? ¿Y mañana?».",
    "Cantad juntos canciones de los días de la semana y los meses.",
  ],
  profesores: PROF("Sentido de la medida: el tiempo; momentos del día, lectura de horas en punto y medias en relojes analógicos y digitales, días de la semana y meses del año", ["Reloj de cartulina con agujas móviles para cada alumno.", "Calendario de aula actualizado cada mañana por el encargado del día.", "Rutina visual del horario con relojes dibujados."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
