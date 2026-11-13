// Inglés 2º de Primaria: Days of the week. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, fichas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "Days of the week",
  minutos: 20,
  objetivos: ["Decir los siete días de la semana en inglés y en orden", "Preguntar y responder qué día es hoy: Today is Monday", "Contar qué haces cada día: On Monday I play football"],
  claves: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "today", "weekend", "What day is it today?"],
  pregunta: {
    texto: "¿Qué día es hoy? ¿Sabes decirlo en inglés?",
    respuesta: "Si hoy es lunes, dices <mark>Today is Monday</mark>. Los días en inglés se escriben siempre con <b>mayúscula</b>.",
  },
  bloques: [
    {
      html: `<h3>Seven days</h3><p>La semana, <mark>week</mark>, tiene siete días: <b>seven days</b>.</p><p>En inglés los días se escriben siempre con <b>mayúscula</b>: <b>Monday</b>, no «monday». Y todos terminan en <b>-day</b>, que significa día.</p><p>Hoy es <b>today</b>. Mañana es <b>tomorrow</b>. Ayer es <b>yesterday</b>. ¿Cuántos días faltan para el fin de semana?</p>`,
      svg: fichas("Siete días de la semana: M T W T F S S", [["M", A], ["T", A], ["W", A], ["T", A], ["F", A], ["S", R], ["S", R]], { titulo: "Seven days", nota: "Todos terminan en -day" }),
    },
    {
      html: `<h3>Monday to Friday</h3><p>De lunes a viernes vamos <mark>al cole</mark>.</p><p>Lunes es <b>Monday</b>. Martes es <b>Tuesday</b>. Miércoles es <b>Wednesday</b>. Jueves es <b>Thursday</b>. Viernes es <b>Friday</b>.</p><p><b>Wednesday</b> es el más difícil de escribir: tiene una <b>d</b> que no suena. Truco: dilo como se escribe, «wed-nes-day», para recordar las letras.</p>`,
      svg: lista("De lunes a viernes: Monday, Tuesday, Wednesday, Thursday, Friday", [["Monday · Tuesday", A], ["Wednesday", R], ["Thursday · Friday", Ve]], { titulo: "School days" }),
      video: V("in10b"),
    },
    {
      html: `<h3>The weekend</h3><p>El sábado y el domingo son el <mark>fin de semana</mark>: <b>weekend</b>.</p><p>Sábado es <b>Saturday</b>. Domingo es <b>Sunday</b>.</p><p>Fíjate: <b>Sunday</b> tiene la palabra <b>sun</b>, sol. ¡Es el día del sol! El fin de semana no hay cole. Podemos jugar, visitar a los abuelos o ir al parque. ¿Qué haces tú el <b>weekend</b>?</p>`,
      svg: vocab("Fin de semana: Saturday sábado, Sunday domingo", [["pelota", "Saturday", "sábado", R], ["sol", "Sunday", "domingo", A]], { titulo: "The weekend" }),
    },
    {
      html: `<h3>What day is it today?</h3><p>Para preguntar el día decimos <mark>What day is it today?</mark></p><p>Se contesta: <b>It's Tuesday</b> o <b>Today is Tuesday</b>.</p><p>Muchas clases lo preguntan cada mañana en la asamblea. Un niño mira el calendario y contesta. También podemos decir mañana: <b>Tomorrow is Wednesday</b>. ¡Así practicamos el orden de los días!</p>`,
      svg: charla("What day is it today? It's Tuesday! Tomorrow is Wednesday", [["nina", "What day is it today?", R], ["nino", "It's Tuesday!", A], ["nina", "Tomorrow is Wednesday!", R]]),
    },
    {
      html: `<h3>On Monday I…</h3><p>Para decir lo que haces un día usamos <mark>on</mark> delante.</p><p><b>On Monday I play football</b>: el lunes juego al fútbol. <b>On Friday I swim</b>: el viernes nado.</p><p><b>On Sunday I visit Grandma</b>: el domingo visito a la abuela. Piensa en tus actividades de la semana y di una frase para cada día que tengas algo.</p>`,
      svg: lista("Actividades: on Monday I play football, on Friday I swim, on Sunday I visit Grandma", [["On Monday I play football.", A], ["On Friday I swim.", N], ["On Sunday I visit Grandma.", R]], { titulo: "My week" }),
    },
    {
      html: `<h3>Before and after</h3><p>Los días van <mark>siempre en el mismo orden</mark>, como una rueda que gira.</p><p>Después del domingo vuelve el lunes. Antes del viernes va el jueves.</p><p>En inglés, antes es <b>before</b> y después es <b>after</b>. <b>After Monday comes Tuesday</b>. <b>Before Sunday comes Saturday</b>. Prueba a decir los días hacia atrás. ¡Es un reto!</p>`,
      svg: lista("Antes y después: after Monday comes Tuesday, before Sunday comes Saturday", [["after Monday → Tuesday", A], ["before Sunday → Saturday", R], ["after Sunday → Monday", Ve]], { titulo: "Before and after" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunos días <mark>engañan</mark> al leerlos.</p><p><b>Wednesday</b> se dice «uénsdei»: la primera d no suena. <b>Tuesday</b> se dice «chúsdei». <b>Thursday</b> se dice «zérsdei», con la lengua entre los dientes.</p><p><b>Monday</b> se dice «mándei». Di la semana entera dando una palmada en cada día. ¡Como una canción!</p>`,
      svg: lista("Cómo suenan: Wednesday uénsdei, Tuesday chúsdei, Thursday zérsdei, Monday mándei", [["Wednesday → «uénsdei»", A], ["Tuesday → «chúsdei»", R], ["Thursday → «zérsdei»", Ve], ["Monday → «mándei»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los días de la semana aparecen en <mark>calendarios, horarios y agendas</mark>.</p><p>Si los sabes en inglés, podrás leer el horario de un museo o de una piscina cuando viajes.</p><p>También podrás quedar con un amigo: <b>Let's play on Saturday!</b> (¡Juguemos el sábado!). ¡Es muy práctico!</p>`,
      svg: charla("Quedar con un amigo: Let's play on Saturday! OK, see you on Saturday!", [["nino", "Let's play on Saturday!", A], ["nina", "OK! See you on Saturday!", R]]),
    },
    {
      html: `<h3>Jugamos a la rueda de los días</h3><p>Nos ponemos en <mark>círculo</mark>. El primero dice <b>Monday</b>.</p><p>El de su derecha dice el siguiente: <b>Tuesday</b>. Y así seguimos, cada vez más rápido.</p><p>Quien se equivoca o tarda mucho, se sienta. Después jugamos al revés: empezamos en <b>Sunday</b> y vamos hacia atrás. ¡Hay que estar muy atento!</p>`,
      svg: charla("Rueda de los días: Monday! Tuesday! Wednesday!", [["nino", "Monday!", A], ["nina", "Tuesday!", R], ["bebe", "Wednesday!", Ve]]),
    },
  ],
  figura: {
    titulo: "Days of the week",
    svg: mural("Días de la semana: Monday lunes, Tuesday martes, Wednesday miércoles, Thursday jueves, Friday viernes, Saturday sábado, Sunday domingo", [["escuela", "Monday", "lunes", A], ["escuela", "Tuesday", "martes", A], ["escuela", "Wednesday", "miércoles", A], ["escuela", "Thursday", "jueves", A], ["escuela", "Friday", "viernes", A], ["pelota", "Saturday", "sábado", R], ["sol", "Sunday", "domingo", R]], "Days of the week"),
  },
  video: V("in10v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hoy es jueves. Contesta a What day is it today?",
      pasos: ["Jueves es Thursday.", "Contestamos con It's o Today is.", "Thursday va con mayúscula."],
      resultado: "«Today is Thursday.»" },
    { enunciado: "¿Qué día va después del miércoles?",
      pasos: ["Miércoles es Wednesday.", "Después viene el jueves.", "Jueves es Thursday."],
      resultado: "«After Wednesday comes Thursday.»" },
    { enunciado: "Di que el sábado vas al parque.",
      pasos: ["Sábado es Saturday; delante va on.", "Ir es go; parque es park.", "Empieza con On Saturday."],
      resultado: "«On Saturday I go to the park.»" },
  ],
  errores: [
    "Escribir los días con minúscula: en inglés llevan mayúscula, Monday.",
    "Pronunciar la primera d de Wednesday: se dice «uénsdei».",
    "Confundir Tuesday (martes) con Thursday (jueves).",
    "Decir «in Monday»: con los días se usa on, on Monday.",
  ],
  ejercicios: [
    { q: "¿Cuántos días tiene la semana? Dilo en inglés.", sol: "Seven days." },
    { q: "¿Cómo se dice «lunes» en inglés?", sol: "Monday." },
    { q: "¿Qué día es Friday?", sol: "Viernes." },
    { q: "Escribe los días del fin de semana en inglés.", sol: "Saturday y Sunday." },
    { q: "¿Qué día va antes de Thursday?", sol: "Wednesday (miércoles)." },
    { q: "¿Cómo se pregunta qué día es hoy?", sol: "What day is it today?" },
    { q: "¿Qué significa weekend?", sol: "Fin de semana." },
    { q: "¿Qué significa tomorrow?", sol: "Mañana (el día siguiente)." },
    { q: "Di qué haces un día de la semana con On…", sol: "Por ejemplo: On Tuesday I go swimming." },
    { q: "Di los siete días en orden dando una palmada en cada uno.", sol: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday." },
  ],
  quiz: [
    { q: "«Monday» es…", o: ["lunes", "martes", "domingo"], a: 0, e: "Monday = lunes." },
    { q: "«Martes» en inglés es…", o: ["Thursday", "Tuesday", "Wednesday"], a: 1, e: "Tuesday = martes." },
    { q: "«Wednesday» es…", o: ["miércoles", "jueves", "viernes"], a: 0, e: "Wednesday = miércoles." },
    { q: "«Thursday» es…", o: ["martes", "jueves", "sábado"], a: 1, e: "Thursday = jueves." },
    { q: "«Viernes» es…", o: ["Friday", "Sunday", "Monday"], a: 0, e: "Friday = viernes." },
    { q: "«Saturday» es…", o: ["sábado", "domingo", "lunes"], a: 0, e: "Saturday = sábado." },
    { q: "«Sunday» es…", o: ["sábado", "domingo", "viernes"], a: 1, e: "Sunday = domingo." },
    { q: "«Weekend» significa…", o: ["semana", "fin de semana", "mes"], a: 1, e: "Weekend = sábado y domingo." },
    { q: "Los días en inglés se escriben…", o: ["con minúscula", "con mayúscula", "en número"], a: 1, e: "Siempre con mayúscula." },
    { q: "«Today» significa…", o: ["hoy", "mañana", "ayer"], a: 0, e: "Today = hoy." },
  ],
  examen: [
    { q: "Después de Sunday viene…", o: ["Saturday", "Monday", "Friday"], a: 1, e: "La semana vuelve a empezar." },
    { q: "What day is it today? (es viernes) →", o: ["It's Friday.", "It's sunny.", "It's seven."], a: 0, e: "Today is Friday." },
    { q: "El sábado juego se dice…", o: ["On Saturday I play.", "In Saturday I play.", "At Saturday I play."], a: 0, e: "Con días usamos on." },
    { q: "«Yesterday» significa…", o: ["hoy", "ayer", "mañana"], a: 1, e: "Yesterday = ayer." },
  ],
  feynman: ["Cuáles son los siete días de la semana en inglés y en orden", "Cómo preguntar y decir qué día es hoy", "Por qué se dice on Monday"],
  mapa: mapa("DAYS OF THE WEEK", "var(--pri)", [
    ["School days", "Monday … Friday", A],
    ["Weekend", "Saturday, Sunday", R],
    ["Preguntar", "What day is it today?", Ve],
    ["Mi semana", "On Monday I play…", N],
  ], 230),
  tarjetas: [
    ["lunes / martes", "Monday / Tuesday"],
    ["miércoles", "Wednesday"],
    ["jueves / viernes", "Thursday / Friday"],
    ["sábado / domingo", "Saturday / Sunday"],
    ["fin de semana", "weekend"],
    ["hoy / mañana / ayer", "today / tomorrow / yesterday"],
    ["¿Qué día es hoy?", "What day is it today?"],
    ["el lunes juego", "on Monday I play"],
  ],
  familias: [
    "Cada mañana, preguntad What day is it today? en el desayuno.",
    "Haced un horario semanal de la familia con los días en inglés.",
    "Cantad la canción de los días de la semana del tema.",
    "Jugad a decir el día siguiente o el anterior lo más rápido posible.",
  ],
  profesores: PROF("Lengua extranjera: los días de la semana (mayúscula inicial y pronunciación); today, tomorrow, yesterday; preposición on con días; rutinas semanales", ["Rutina del calendario en la asamblea de inglés.", "Rueda de los días hacia delante y hacia atrás.", "Horario personal ilustrado: On Monday I…"]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
