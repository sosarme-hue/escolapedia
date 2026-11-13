// Infantil 5 años · Descubrimiento y exploración del entorno: el reloj y los días de la semana.
const { mapa } = require("./_util");
const { reloj } = require("./_pri1");
const { ic, vin, fichas, mural, t, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

const DIAS = [["L", "var(--red)"], ["M", "var(--inf)"], ["X", "var(--sun)"], ["J", "var(--leaf)"], ["V", "var(--water)"], ["S", "var(--pen)"], ["D", "var(--red)"]];

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "El reloj y los días de la semana",
  minutos: 15,
  objetivos: ["Saber que el reloj mide el tiempo", "Leer las horas en punto", "Decir los siete días de la semana en orden"],
  claves: ["reloj", "hora", "en punto", "mañana", "tarde", "noche", "semana"],
  pregunta: { texto: "¿Cómo sabemos cuándo es la hora de ir al cole?", respuesta: "Mirando el <mark>reloj</mark>. Y para saber si hay cole, miramos qué <mark>día de la semana</mark> es." },
  bloques: [
    {
      html: `<h3>El reloj</h3><p>El <mark>reloj</mark> nos dice la hora. Tiene números del 1 al 12 y dos agujas.</p><p>La aguja <b>corta</b> marca la hora. La aguja <b>larga</b> marca los minutos.</p>`,
      svg: vin("Un reloj con la aguja corta roja y la aguja larga azul", `${reloj(80, 92, 62, 3, 0)}${t(200, 70, "corta: hora", { size: 16, color: "var(--red)", max: 110 })}${t(200, 110, "larga: minutos", { size: 16, color: "var(--pen)", max: 110 })}`),
    },
    {
      html: `<h3>Las horas en punto</h3><p>Cuando la aguja larga mira <mark>hacia arriba</mark>, al 12, es una hora <b>en punto</b>.</p><p>La aguja corta dice qué hora es. Si señala el 8, son <b>las ocho en punto</b>.</p>`,
      svg: vin("Relojes que marcan las ocho, las doce y las tres en punto", `${reloj(48, 78, 38, 8)}${reloj(130, 78, 38, 12)}${reloj(212, 78, 38, 3)}${t(48, 142, "las 8", { size: 17 })}${t(130, 142, "las 12", { size: 17 })}${t(212, 142, "las 3", { size: 17 })}${t(130, 172, "en punto: la larga, arriba", { size: 14, color: "var(--muted)" })}`),
    },
    {
      html: `<h3>Mañana, tarde y noche</h3><p>Por la <mark>mañana</mark> nos levantamos y vamos al cole. Por la <mark>tarde</mark> jugamos y merendamos.</p><p>Por la <mark>noche</mark> cenamos, nos bañamos y dormimos. ¡Así pasa un día entero!</p>`,
      svg: vin("Mañana con sol y cole, tarde con juego, noche con luna y cama", `${ic("sol", 46, 60, 1.3)}${ic("pelota", 130, 60, 1.3)}${ic("luna", 214, 60, 1.3)}${ic("escuela", 46, 112, 1)}${ic("pan", 130, 112, 1)}${ic("cama", 214, 112, 1)}${t(46, 160, "mañana", { size: 16, max: 80 })}${t(130, 160, "tarde", { size: 16 })}${t(214, 160, "noche", { size: 16 })}`),
    },
    {
      html: `<h3>Los días de la semana</h3><p>La <mark>semana</mark> tiene siete días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.</p><p>Después del domingo, vuelve a empezar el lunes. ¡Es como una rueda!</p>`,
      svg: fichas("Los siete días de la semana: lunes, martes, miércoles, jueves, viernes, sábado y domingo", DIAS, { titulo: "7 días", nota: "lunes, martes, miércoles…" }),
    },
    {
      html: `<h3>¿Para qué sirve? Saber qué toca</h3><p>De <mark>lunes a viernes</mark> vamos al cole. El <mark>sábado y el domingo</mark> es fin de semana: descansamos en casa.</p><p>El reloj y el calendario nos dicen qué toca hacer.</p>`,
      svg: vin("De lunes a viernes, cole; sábado y domingo, en casa", `${DIAS.map(([d, c], i) => `<rect x="${12 + i * 34}" y="40" width="30" height="40" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(27 + i * 34, 68, d, { size: 18, color: c })}`).join("")}${ic("escuela", 92, 118, 1.2)}${ic("casa", 214, 118, 1.2)}${t(92, 166, "cole", { size: 17 })}${t(214, 166, "casa", { size: 17 })}<path d="M12 90 H162 M182 90 H248" stroke="var(--muted)" stroke-width="3"/>`),
    },
    {
      html: `<h3>Juego: el reloj de papel</h3><p>Haz un <mark>reloj</mark> con un plato de papel. Escribe los números y pon dos agujas con un encuadernador.</p><p>Un adulto dice una hora en punto y tú la marcas.</p>`,
      svg: vin("Un reloj hecho con un plato de papel y dos agujas", `<circle cx="130" cy="88" r="70" fill="var(--card)" stroke="var(--sun)" stroke-width="8" stroke-dasharray="4 4"/>${reloj(130, 88, 58, 10)}${t(130, 174, "¿qué hora es?", { size: 16, color: "var(--muted)" })}`),
    },
  ],
  figura: {
    titulo: "El tiempo",
    svg: mural("Mural: el reloj, mañana, tarde y noche, los días de la semana", [["reloj", "reloj", "horas en punto", "var(--pen)"], ["sol", "mañana", "al cole", "var(--inf)"], ["luna", "noche", "a dormir", "var(--muted)"], ["calendario", "semana", "7 días", "var(--red)"]]),
  },
  video: vid("aXCfpS2Lx2Q", "Días de la semana - Canciones infantiles", "Toobys Español", 1774579, "días de la semana canción"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "La aguja larga está en el 12 y la corta en el 9. ¿Qué hora es?", pasos: ["La larga en el 12: es en punto.", "Miramos la corta: señala el 9.", "Decimos la hora."], resultado: "son las nueve en punto." },
    { enunciado: "Hoy es miércoles. ¿Qué día será mañana?", pasos: ["Decimos la semana: lunes, martes, miércoles…", "Después del miércoles va el jueves.", "Mañana es el día siguiente."], resultado: "mañana será jueves." },
  ],
  errores: [
    "Mirar la aguja larga para decir la hora: la hora la dice la corta.",
    "Pensar que la semana empieza en domingo: en España empieza el lunes.",
    "Confundir «mañana» (el día siguiente) con «la mañana» (cuando nos levantamos).",
  ],
  ejercicios: [
    { q: "Canta los días de la semana.", sol: nota("cantadla cada mañana diciendo qué día es hoy.") },
    { q: "Haz un reloj con un plato de papel.", sol: nota("un encuadernador en el centro deja mover las agujas.") },
    { q: "Marca en tu reloj las 7 en punto y las 9 en punto.", sol: nota("relacionad cada hora con algo: a las 9 empieza el cole.") },
    { q: "Di algo que haces por la mañana, por la tarde y por la noche.", sol: nota("dibujadlo en tres viñetas.") },
    { q: "Di qué días vas al cole.", sol: nota("de lunes a viernes; colgad un calendario con pegatinas.") },
    { q: "Mira el reloj de casa a la hora de cenar.", sol: nota("si es digital, enseñadle también uno de agujas.") },
  ],
  quiz: [
    { q: "¿Qué nos dice la hora?", o: ["el reloj", "la mesa", "la cuchara"], a: 0, e: "El reloj." },
    { q: "La aguja corta marca…", o: ["la hora", "los minutos", "el día"], a: 0, e: "La hora." },
    { q: "La semana tiene…", o: ["7 días", "5 días", "10 días"], a: 0, e: "Siete días." },
    { q: "Después del lunes va el…", o: ["martes", "domingo", "viernes"], a: 0, e: "El martes." },
    { q: "Dormimos por la…", o: ["noche", "mañana", "tarde"], a: 0, e: "Por la noche." },
    { q: "El fin de semana es…", o: ["sábado y domingo", "lunes y martes", "jueves"], a: 0, e: "Sábado y domingo." },
  ],
  examen: [
    { q: "Larga en el 12 y corta en el 4. Son las…", o: ["4 en punto", "12", "2"], a: 0, e: "Las cuatro en punto." },
    { q: "Antes del domingo va el…", o: ["sábado", "lunes", "miércoles"], a: 0, e: "El sábado." },
    { q: "Vamos al cole de…", o: ["lunes a viernes", "sábado a domingo", "nunca"], a: 0, e: "De lunes a viernes." },
  ],
  feynman: ["Para qué sirve el reloj", "Cómo leo una hora en punto", "Los días de la semana"],
  mapa: mapa("EL TIEMPO", "var(--pen)", [
    ["Reloj", "corta: hora · larga: minutos", "var(--red)"],
    ["En punto", "la larga en el 12", "var(--pen)"],
    ["El día", "mañana · tarde · noche", "var(--inf)"],
    ["La semana", "7 días: lunes… domingo", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["¿Qué marca la aguja corta?", "La hora"],
    ["En punto: la larga está en…", "El 12"],
    ["¿Cuántos días tiene la semana?", "7"],
    ["Primer día de la semana", "Lunes"],
    ["Fin de semana", "Sábado y domingo"],
    ["Después del jueves…", "Viernes"],
  ],
  familias: [
    "Cada mañana, decid juntos qué día es hoy, qué fue ayer y qué será mañana.",
    "Tened un reloj de agujas a la vista y nombrad las horas en punto.",
    "Usad un calendario con pegatinas para las actividades de la semana.",
    "Relacionad horas con rutinas: a las 9, cole; a las 9 de la noche, a dormir.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: nociones temporales (mañana, tarde, noche; días de la semana) e iniciación a la lectura del reloj en horas en punto", ["Calendario de aula con el encargado que cambia el día.", "Reloj de aula grande con las horas de las rutinas marcadas.", "Canción de los días de la semana en la asamblea."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
