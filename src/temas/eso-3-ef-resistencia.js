// Educación Física 3º ESO: resistencia y frecuencia cardiaca. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, ejes, mezcla } = require("./_eso3");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Resistencia y frecuencia cardiaca",
  minutos: 50,
  objetivos: ["Distinguir la resistencia aeróbica y la anaeróbica", "Tomar la frecuencia cardiaca y calcular la zona de actividad saludable", "Conocer los sistemas de entrenamiento continuos y fraccionados", "Planificar una mejora progresiva y segura de la resistencia"],
  claves: ["resistencia aeróbica", "resistencia anaeróbica", "frecuencia cardiaca", "pulso", "zona de actividad", "carrera continua"],
  pregunta: {
    texto: "¿Por qué puedes caminar durante horas, pero solo aguantas unos segundos corriendo a tope?",
    respuesta: "Porque el cuerpo usa sistemas de energía distintos. A ritmo suave, los músculos reciben <mark>suficiente oxígeno</mark> y pueden trabajar mucho tiempo (resistencia <b>aeróbica</b>). A tope, el oxígeno no llega a tiempo, se usa energía rápida que se agota enseguida y aparece la fatiga (resistencia <b>anaeróbica</b>).",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la resistencia?</h3><p>La <b>resistencia</b> es la capacidad de <mark>mantener un esfuerzo durante el mayor tiempo posible</mark> y de recuperarse rápido después. Es la capacidad física más relacionada con la <b>salud</b>, porque mejora el corazón, los pulmones y la circulación.</p><p>Según cómo obtienen la energía los músculos, hay dos tipos:</p><ul><li><b>Aeróbica</b>: hay suficiente oxígeno. Esfuerzos de intensidad baja o media y larga duración (más de 3 minutos): caminar, trotar, nadar, ir en bici.</li><li><b>Anaeróbica</b>: el oxígeno no es suficiente. Esfuerzos muy intensos y cortos: un sprint de 100 m, subir escaleras corriendo.</li></ul>`,
    },
    {
      html: `<h3>Aeróbica y anaeróbica</h3>${tabla(["", "Aeróbica", "Anaeróbica"], [["Oxígeno", "suficiente", "insuficiente (deuda de oxígeno)"], ["Intensidad", "baja o media", "alta o máxima"], ["Duración", "larga, más de 3 min", "corta, de segundos a 2-3 min"], ["Frecuencia cardiaca", "entre 120 y 170 aprox.", "por encima de 170 aprox."], ["Fatiga", "aparece tarde", "aparece pronto"], ["Ejemplos", "maratón, senderismo, natación suave", "100 m lisos, un contraataque, levantar un peso"]])}<p>En la mayoría de deportes se combinan: un partido de fútbol es sobre todo aeróbico, con muchos esfuerzos anaeróbicos (sprints, saltos). En la ESO se prioriza la <b>aeróbica</b>, que es la más saludable y segura.</p>`,
      video: { id: "PW1AX348-CI", titulo: "Diferencias entre ejercicio aeróbico y anaeróbico", canal: "Bestcycling", vistas: 301862, megusta: 0 },
    },
    {
      html: `<h3>La frecuencia cardiaca</h3><p>La <b>frecuencia cardiaca</b> (FC) es el <mark>número de latidos del corazón por minuto</mark> (ppm). Es el mejor indicador de la intensidad de un ejercicio.</p><p>Para tomar el <b>pulso</b>:</p><ol><li>Coloca los dedos índice y corazón (nunca el pulgar, que tiene pulso propio) en la <b>muñeca</b>, bajo el pulgar (pulso radial), o en el <b>cuello</b>, al lado de la tráquea (pulso carotídeo), sin apretar.</li><li>Cuenta los latidos durante <b>15 segundos</b>.</li><li>Multiplica por <b>4</b>.</li></ol><p>Ejemplo: 22 latidos en 15 s → 22 · 4 = 88 ppm. Hoy también se usan pulsómetros y relojes deportivos.</p>`,
      video: { id: "8LfoD0DoZRI", titulo: "Medición del pulso: frecuencia cardiaca", canal: "Ciencias con la Bióloga Elena", vistas: 464650, megusta: 0 },
    },
    {
      html: `<h3>Valores de la frecuencia cardiaca</h3><ul><li><b>FC en reposo</b>: se toma al despertar, antes de levantarse. En adolescentes suele estar entre <b>60 y 90 ppm</b>. Las personas entrenadas tienen valores más bajos: su corazón es más eficaz y bombea más sangre en cada latido. Algunos ciclistas profesionales tienen 35-40 ppm.</li><li><b>FC máxima</b>: el máximo de latidos que puede alcanzar el corazón. Se estima con la fórmula <mark>FC máx = 220 − edad</mark>. A los 15 años: 220 − 15 = 205 ppm.</li><li><b>FC de recuperación</b>: lo que baja en el primer minuto tras el esfuerzo. Cuanto más baja, mejor forma física.</li></ul>`,
    },
    {
      html: `<h3>La zona de actividad saludable</h3><p>Para mejorar la resistencia aeróbica con seguridad hay que trabajar entre el <b>60 % y el 80 %</b> de la FC máxima: es la <b>zona de actividad saludable</b>.</p><p>Para una persona de 15 años (FC máx = 205):</p><ul><li>Límite inferior: 205 · 0,60 = <b>123 ppm</b>.</li><li>Límite superior: 205 · 0,80 = <b>164 ppm</b>.</li></ul><p>Por debajo, el esfuerzo apenas produce mejoras; por encima, se entra en la zona anaeróbica y la fatiga llega pronto. Un truco práctico es el <b>test del habla</b>: en la zona aeróbica puedes hablar mientras corres, aunque no cantar.</p>`,
      svg: svg("Zonas de frecuencia cardiaca para 15 años: menos de 123 ligera, de 123 a 164 zona saludable, más de 164 anaeróbica, máximo 205", `<rect x="30" y="30" width="200" height="120" rx="6" fill="var(--card)" stroke="var(--line)"/>
        <rect x="30" y="110" width="200" height="40" fill="var(--pen)" fill-opacity=".15"/><rect x="30" y="66" width="200" height="44" fill="var(--leaf)" fill-opacity=".3"/><rect x="30" y="30" width="200" height="36" fill="var(--red)" fill-opacity=".18"/>
        <path d="M30 140 C 70 140 80 92 120 90 S 190 86 230 84" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        ${t(26, 114, "123", { c: "var(--ink)", s: 10, a: "end" })}${t(26, 70, "164", { c: "var(--ink)", s: 10, a: "end" })}${t(26, 34, "205", { c: "var(--ink)", s: 10, a: "end" })}
        ${t(130, 48, "anaeróbica", { c: "var(--red)", s: 11 })}${t(170, 104, "zona saludable", { c: "var(--leaf)", s: 11 })}${t(130, 134, "ligera", { c: "var(--pen)", s: 11 })}${t(130, 168, "FC (ppm) a los 15 años", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Sistemas de entrenamiento continuos</h3><p>Se trabaja <b>sin pausas</b> durante un tiempo prolongado:</p><ul><li><b>Carrera continua</b>: correr a ritmo constante y suave entre 15 y 40 minutos, en la zona saludable. Es la base para empezar.</li><li><b>Fartlek</b> («juego de velocidad» en sueco): correr de forma continua cambiando el ritmo según el terreno o a voluntad: más rápido en una cuesta, suave en el llano.</li><li><b>Entrenamiento total</b>: carrera continua combinada con ejercicios de saltos, fuerza o flexibilidad durante el recorrido.</li></ul><p>Otras actividades sirven igual: natación, ciclismo, patinaje, comba, bailes aeróbicos.</p>`,
    },
    {
      html: `<h3>Sistemas fraccionados</h3><p>El esfuerzo se divide en <b>partes</b> con <b>pausas</b> de recuperación entre ellas. Permiten trabajar a mayor intensidad:</p><ul><li><b>Interval training</b>: esfuerzos de intensidad media-alta (por ejemplo, 200 m) con una recuperación incompleta, hasta que la FC baja a unas 120-130 ppm, y se repite.</li><li><b>Circuito</b>: varias estaciones con ejercicios distintos (saltos, comba, abdominales, carrera) que se recorren con un tiempo de trabajo y otro de descanso en cada una.</li></ul><p>Los sistemas fraccionados son más exigentes: deben usarse cuando ya hay una base aeróbica y con supervisión.</p>`,
    },
    {
      html: `<h3>Qué cambia en el cuerpo al entrenar</h3><p>Cuando se entrena la resistencia aeróbica de forma regular, el organismo se <b>adapta</b>:</p><ul><li>El <b>corazón</b> aumenta de tamaño y fuerza: expulsa más sangre en cada latido (más volumen sistólico).</li><li>Los <b>pulmones</b> aprovechan mejor el aire y los músculos respiratorios se fortalecen.</li><li>Aumentan los <b>capilares</b> y las <b>mitocondrias</b> de los músculos, que usan mejor el oxígeno.</li><li>Baja la <b>tensión arterial</b> y mejora el colesterol.</li></ul><p>Estas adaptaciones tardan semanas en aparecer y se pierden si se deja de entrenar: por eso la <mark>regularidad</mark> importa más que la intensidad.</p>`,
    },
    {
      html: `<h3>Cómo mejorar con seguridad</h3><p>Para progresar sin lesiones hay que respetar unos <b>principios del entrenamiento</b>:</p><ul><li><b>Progresión</b>: aumentar poco a poco, primero el tiempo y después la intensidad. Por ejemplo, de 10 a 25 minutos de carrera en ocho semanas.</li><li><b>Continuidad</b>: al menos 3 sesiones por semana; si se para, se pierde lo ganado.</li><li><b>Individualización</b>: cada persona tiene su ritmo.</li><li><b>Alternancia</b> de trabajo y descanso: la mejora se produce durante la recuperación.</li></ul><p>Señales para parar: mareo, dolor en el pecho, falta de aire excesiva o náuseas. Hidrátate y evita las horas de más calor.</p>`,
    },
  ],
  figura: {
    titulo: "Resistencia y corazón",
    svg: filas("Aeróbica con oxígeno suficiente y larga duración; anaeróbica intensa y corta; pulso 15 segundos por 4; FC máxima 220 menos edad; zona saludable 60 a 80 por ciento; continuos y fraccionados", [["Aeróbica", "con oxígeno · baja-media · más de 3 min", "var(--leaf)"], ["Anaeróbica", "sin oxígeno suficiente · intensa · corta", "var(--red)"], ["Pulso", "latidos en 15 s × 4 · muñeca o cuello", "var(--pen)"], ["Zona saludable", "60-80 % de (220 − edad)", "var(--inf)"], ["Sistemas", "continuos (carrera, fartlek) · fraccionados", "var(--ink)"]], 220),
  },
  video: { id: "1S-vFqwC-2k", titulo: "Zonas por frecuencia cardiaca para correr", canal: "Correr conCiencia", vistas: 205738, megusta: 0, busqueda: "frecuencia cardiaca máxima zonas" },
  quiz: mezcla([
    { q: "La resistencia que trabaja con oxígeno suficiente es la…", o: ["aeróbica", "anaeróbica", "explosiva"], a: 0, e: "Larga duración." },
    { q: "Un sprint de 100 m es un esfuerzo…", o: ["anaeróbico", "aeróbico", "de flexibilidad"], a: 0, e: "Intenso y corto." },
    { q: "Para tomar el pulso no se usa el dedo…", o: ["pulgar", "índice", "corazón"], a: 0, e: "Tiene pulso propio." },
    { q: "Si cuentas 20 latidos en 15 segundos, tu FC es…", o: ["80 ppm", "20 ppm", "35 ppm"], a: 0, e: "20 · 4." },
    { q: "La fórmula estimada de la FC máxima es…", o: ["220 − edad", "200 + edad", "180 − peso"], a: 0, e: "A los 15: 205." },
    { q: "La zona de actividad saludable va del…", o: ["60 al 80 % de la FC máx", "10 al 20 %", "90 al 100 %"], a: 0, e: "Aeróbica." },
    { q: "Las personas entrenadas tienen en reposo una FC…", o: ["más baja", "más alta", "igual"], a: 0, e: "Corazón más eficaz." },
    { q: "Correr cambiando de ritmo según el terreno es…", o: ["fartlek", "interval training", "circuito"], a: 0, e: "Juego de velocidad." },
    { q: "Un sistema con esfuerzos y pausas de recuperación es…", o: ["fraccionado", "continuo", "estático"], a: 0, e: "Interval, circuito." },
    { q: "El test del habla indica zona aeróbica si puedes…", o: ["hablar pero no cantar", "cantar a pleno pulmón", "no decir nada"], a: 0, e: "Intensidad moderada." },
  ]),
  examen: mezcla([
    { q: "Para alguien de 14 años, el límite superior de su zona saludable es aproximadamente…", o: ["165 ppm", "206 ppm", "124 ppm"], a: 0, e: "206 · 0,8 ≈ 165." },
    { q: "Al empezar a entrenar, lo primero que se aumenta es…", o: ["el tiempo", "la intensidad máxima", "el peso"], a: 0, e: "Principio de progresión." },
    { q: "¿Cuántas sesiones semanales mínimas se recomiendan para mejorar la resistencia?", o: ["3", "1", "7 obligatorias"], a: 0, e: "Continuidad." },
  ]),
  feynman: ["Diferencia entre resistencia aeróbica y anaeróbica", "Cómo se toma el pulso y se calcula la FC", "Cómo se calcula la zona de actividad saludable", "Diferencia entre sistemas continuos y fraccionados"],
  mapa: mapa("RESISTENCIA", "var(--eso)", [
    ["Aeróbica", "oxígeno · larga", "var(--leaf)"],
    ["Anaeróbica", "intensa · corta", "var(--red)"],
    ["FC", "pulso · 220 − edad", "var(--pen)"],
    ["Entrenar", "continuo · fraccionado", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Resistencia", "Mantener un esfuerzo el mayor tiempo posible."],
    ["Aeróbica", "Con oxígeno suficiente: intensidad media y larga duración."],
    ["Anaeróbica", "Sin oxígeno suficiente: intensa y corta."],
    ["Frecuencia cardiaca", "Latidos por minuto (ppm)."],
    ["Tomar el pulso", "Contar 15 s y multiplicar por 4."],
    ["FC máxima", "220 − edad (estimación)."],
    ["Zona saludable", "Entre el 60 y el 80 % de la FC máxima."],
    ["Fartlek", "Carrera continua con cambios de ritmo."],
  ],
  familias: ["Tomad juntos el pulso en reposo por la mañana durante una semana y anotadlo.", "Salid a caminar o trotar 30 minutos usando el test del habla.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Resistencia aeróbica y anaeróbica; frecuencia cardiaca, toma del pulso y zona de actividad saludable; sistemas continuos y fraccionados; principios del entrenamiento y seguridad (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Plan de carrera continua de 8 semanas con registro de FC.", "Fartlek por el entorno del centro.", "Comparar FC antes, durante y después de distintas actividades en una gráfica."],
  },
  fuentes: [RD, { t: "Fundación Española del Corazón: frecuencia cardiaca", url: "https://fundaciondelcorazon.com/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Cálculos resueltos",
  ejemplos: [
    { enunciado: "Marta tiene 14 años. Calcula su FC máxima y su zona de actividad saludable.",
      pasos: ["FC máx = 220 − 14 = 206 ppm.", "60 %: 206 · 0,6 = 123,6 ≈ 124 ppm.", "80 %: 206 · 0,8 = 164,8 ≈ 165 ppm."],
      resultado: "Debe entrenar entre 124 y 165 ppm." },
    { enunciado: "Tras correr, Pablo cuenta 39 latidos en 15 s; un minuto después, 27. ¿Está en zona saludable? ¿Cuánto se ha recuperado?",
      pasos: ["Durante: 39 · 4 = 156 ppm (dentro de la zona para 15 años, 123-164).", "Tras 1 min: 27 · 4 = 108 ppm.", "Recuperación: 156 − 108 = 48 ppm en un minuto."],
      resultado: "Zona saludable y buena recuperación." },
    { enunciado: "Planifica 4 semanas de carrera continua para alguien que empieza.",
      pasos: ["Semana 1: 3 días × 10 min (o alternar 2 min trote, 1 min caminar).", "Semana 2: 3 × 14 min.", "Semana 3: 3 × 18 min.", "Semana 4: 3 × 22 min, siempre en zona saludable."],
      resultado: "Progresión del tiempo antes que de la intensidad." },
  ],
  errores: [
    "Tomar el pulso con el pulgar o apretando demasiado el cuello.",
    "Olvidar multiplicar por 4 los latidos contados en 15 s.",
    "Empezar a correr demasiado rápido y agotarse a los pocos minutos.",
    "Aumentar a la vez tiempo e intensidad.",
    "Entrenar solo un día a la semana y esperar mejoras.",
    "Ignorar señales de alarma como mareo o dolor en el pecho.",
  ],
  ejercicios: [
    { q: "Clasifica como aeróbico o anaeróbico: maratón, 200 m lisos, paseo en bici de 1 h, levantar un peso máximo.", sol: "Aeróbico, anaeróbico, aeróbico, anaeróbico." },
    { q: "Cuentas 18 latidos en 15 s en reposo. ¿Cuál es tu FC?", sol: "18 · 4 = 72 ppm." },
    { q: "Calcula la FC máxima y la zona saludable de una persona de 16 años.", sol: "204 ppm; 60 % ≈ 122 y 80 % ≈ 163 ppm." },
    { q: "¿Por qué los deportistas de resistencia tienen una FC en reposo baja?", sol: "Su corazón es más fuerte y bombea más sangre en cada latido, así que necesita latir menos veces." },
    { q: "Explica en qué consiste el fartlek.", sol: "Carrera continua con cambios de ritmo según el terreno o a voluntad." },
    { q: "¿Qué diferencia hay entre interval training y carrera continua?", sol: "El interval alterna esfuerzos intensos con pausas; la carrera continua no tiene pausas y es de intensidad moderada." },
    { q: "Diseña un circuito de 6 estaciones para trabajar la resistencia.", sol: "Ejemplo: comba, skipping, saltos laterales, carrera ida y vuelta, escalador, step; 40 s de trabajo y 20 s de pausa." },
    { q: "Nombra cuatro principios del entrenamiento.", sol: "Progresión, continuidad, individualización y alternancia trabajo-descanso." },
    { q: "Indica tres señales que obligan a detener el ejercicio.", sol: "Mareo, dolor en el pecho, náuseas o falta de aire excesiva." },
    { q: "Registra tu FC en reposo, tras calentar, tras 10 min de carrera y 1 min después, y haz una gráfica.", sol: "Respuesta abierta; la gráfica debe subir con el esfuerzo y bajar en la recuperación." },
  ],
};
