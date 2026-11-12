// Educación Física 3º ESO: condición física y calentamiento. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Condición física y calentamiento",
  minutos: 50,
  objetivos: ["Definir la condición física y relacionarla con la salud", "Conocer las capacidades físicas básicas y las coordinativas", "Diseñar y dirigir un calentamiento general con sus fases", "Valorar la vuelta a la calma y la prevención de lesiones"],
  claves: ["condición física", "capacidades físicas básicas", "calentamiento", "movilidad articular", "activación", "vuelta a la calma"],
  pregunta: {
    texto: "¿Por qué los futbolistas profesionales dedican casi media hora a calentar antes de un partido, si luego van a correr de todas formas?",
    respuesta: "Porque el cuerpo frío rinde menos y se lesiona más. El <mark>calentamiento</mark> eleva la temperatura de los músculos, acelera el corazón y la respiración y «despierta» el sistema nervioso. Así los músculos son más elásticos, reaccionan antes y el riesgo de lesión baja mucho.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la condición física?</h3><p>La <b>condición física</b> es el <mark>conjunto de capacidades</mark> que permiten al cuerpo realizar actividad física con eficacia y sin fatigarse en exceso. Depende en parte de la genética, pero sobre todo del <b>entrenamiento</b> y de los hábitos.</p><p>Distinguimos dos enfoques:</p><ul><li><b>Condición física orientada a la salud</b>: la que necesitamos para vivir bien, con energía y sin enfermedades. Es la prioridad en la ESO.</li><li><b>Condición física orientada al rendimiento</b>: la de los deportistas que buscan marcas y victorias.</li></ul><p>La Organización Mundial de la Salud recomienda a los adolescentes al menos <b>60 minutos diarios</b> de actividad física moderada o intensa.</p>`,
    },
    {
      html: `<h3>Las capacidades físicas básicas</h3>${tabla(["Capacidad", "Definición", "Ejemplo"], [["<b>Resistencia</b>", "aguantar un esfuerzo durante el mayor tiempo posible", "correr 20 minutos, nadar"], ["<b>Fuerza</b>", "vencer o soportar una resistencia con los músculos", "levantar una mochila, saltar"], ["<b>Velocidad</b>", "realizar acciones en el menor tiempo posible", "un sprint, reaccionar a una salida"], ["<b>Flexibilidad</b>", "amplitud de movimiento de las articulaciones", "tocarse los pies con las piernas estiradas"]])}<p>Además, las <b>capacidades coordinativas</b> (coordinación, equilibrio, agilidad) permiten controlar bien el movimiento. Todas se combinan: un regate en baloncesto exige velocidad, fuerza, coordinación y equilibrio a la vez.</p>`,
      svg: svg("Las cuatro capacidades físicas básicas: resistencia, fuerza, velocidad y flexibilidad", `${caja(14, 20, 112, 60, "resistencia", "var(--leaf)", { s: 13 })}${caja(134, 20, 112, 60, "fuerza", "var(--red)", { s: 13 })}${caja(14, 92, 112, 60, "velocidad", "var(--pen)", { s: 13 })}${caja(134, 92, 112, 60, "flexibilidad", "var(--inf)", { s: 13 })}${t(130, 172, "+ coordinación, equilibrio y agilidad", { c: "var(--muted)", s: 11 })}`),
      video: { id: "JwFqEWCK7nw", titulo: "Las capacidades físicas básicas", canal: "Educación Física y más", vistas: 464416, megusta: 0 },
    },
    {
      html: `<h3>Beneficios de una buena condición física</h3><ul><li><b>Corazón y pulmones</b>: el corazón se hace más fuerte y bombea más sangre en cada latido; en reposo late más despacio.</li><li><b>Músculos y huesos</b>: más fuertes y densos, lo que previene lesiones y, a largo plazo, la osteoporosis.</li><li><b>Peso y metabolismo</b>: ayuda a mantener un peso saludable y reduce el riesgo de diabetes.</li><li><b>Salud mental</b>: libera <b>endorfinas</b>, reduce el estrés y la ansiedad y mejora el sueño y la concentración en clase.</li><li><b>Relaciones</b>: hacer deporte en grupo ayuda a hacer amigos y a trabajar en equipo.</li></ul><p>El <b>sedentarismo</b> es hoy uno de los principales factores de riesgo de enfermedad en los países desarrollados.</p>`,
    },
    {
      html: `<h3>El calentamiento: para qué sirve</h3><p>El <b>calentamiento</b> es el conjunto de ejercicios suaves y progresivos que se hacen <mark>antes de una actividad física intensa</mark> para preparar el organismo. Sus efectos:</p><ul><li>Sube la <b>temperatura muscular</b>: los músculos se vuelven más elásticos.</li><li>Aumenta la <b>frecuencia cardiaca</b> y la respiración: llega más oxígeno a los músculos.</li><li>Lubrica las <b>articulaciones</b> (aumenta el líquido sinovial).</li><li>Activa el <b>sistema nervioso</b>: mejoran los reflejos y la coordinación.</li><li>Prepara la <b>mente</b>: concentración y motivación.</li></ul><p>Resultado: <b>mejor rendimiento</b> y <b>menos lesiones</b>, sobre todo roturas fibrilares y esguinces.</p>`,
    },
    {
      html: `<h3>Las fases del calentamiento general</h3><p>Un calentamiento general dura entre <b>10 y 15 minutos</b> y sigue el principio de <b>progresión</b>: de menos a más intensidad.</p><ol><li><b>Activación cardiovascular</b> (3-5 min): carrera suave, desplazamientos variados (lateral, de espaldas, skipping).</li><li><b>Movilidad articular</b> (3-4 min): círculos de tobillos, rodillas, cadera, tronco, hombros, muñecas y cuello, de abajo arriba o al revés.</li><li><b>Estiramientos dinámicos</b> (2-3 min): balanceos de piernas y brazos, zancadas con giro.</li><li><b>Ejercicios específicos y de intensidad creciente</b> (3-4 min): saltos, cambios de ritmo, progresivos cortos y gestos del deporte que se va a practicar.</li></ol>`,
      svg: svg("Fases del calentamiento con intensidad creciente: activación, movilidad, estiramientos dinámicos y ejercicios específicos", `<path d="M24 150 H 246 M24 150 V 20" stroke="var(--ink)" stroke-width="2"/>${[["activación", "var(--leaf)", 40], ["movilidad", "var(--pen)", 55], ["dinámicos", "var(--inf)", 75], ["específicos", "var(--red)", 110]].map(([n, c, h], i) => `<rect x="${34 + i * 53}" y="${150 - h}" width="46" height="${h}" rx="4" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>${t(57 + i * 53, 166, n, { c, s: 9 })}`).join("")}${t(30, 14, "intensidad", { c: "var(--muted)", s: 10, a: "start" })}<path d="M50 104 L 216 34" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 4"/>`),
      video: { id: "g0z0rqoSmxY", titulo: "Calentamiento para antes de hacer ejercicio", canal: "gymvirtual", vistas: 19106596, megusta: 0 },
    },
    {
      html: `<h3>Calentamiento general y específico</h3><ul><li><b>General</b>: prepara todo el cuerpo con ejercicios que sirven para cualquier actividad. Es el que se hace siempre.</li><li><b>Específico</b>: prepara los músculos y gestos concretos del deporte. En baloncesto, botes, pases y tiros suaves; en atletismo, saltos y salidas; en natación, brazadas suaves.</li></ul><p>Factores que modifican el calentamiento:</p><ul><li><b>Temperatura</b>: si hace frío, hay que calentar más tiempo.</li><li><b>Intensidad</b> de la actividad posterior: cuanto más intensa, más completo.</li><li><b>Edad y nivel</b>: las personas mayores y los principiantes necesitan más progresión.</li><li><b>Hora del día</b>: por la mañana temprano el cuerpo está más «frío».</li></ul>`,
    },
    {
      html: `<h3>Estiramientos: cuándo y cómo</h3><p>Hay dos tipos principales:</p><ul><li><b>Dinámicos</b>: movimientos controlados que llevan la articulación a su amplitud y vuelven (balanceos, zancadas). Son los adecuados en el <mark>calentamiento</mark>.</li><li><b>Estáticos</b>: se mantiene una posición de estiramiento de 15 a 30 segundos sin rebotes. Son mejores en la <mark>vuelta a la calma</mark> o en sesiones de flexibilidad.</li></ul><p>Normas: estirar sin dolor (solo sensación de tensión), respirar con calma, no dar rebotes y mantener la espalda recta. Los estiramientos estáticos largos justo antes de un esfuerzo explosivo pueden reducir un poco la fuerza.</p>`,
    },
    {
      html: `<h3>La vuelta a la calma</h3><p>Al terminar el ejercicio intenso no conviene pararse de golpe. La <b>vuelta a la calma</b> (5-10 minutos) ayuda al cuerpo a volver al estado de reposo:</p><ol><li><b>Carrera o marcha suave</b> que va bajando de ritmo: la frecuencia cardiaca desciende poco a poco.</li><li><b>Estiramientos estáticos</b> de los grupos musculares trabajados.</li><li><b>Respiración</b> profunda y relajación.</li><li><b>Hidratación</b>.</li></ol><p>Parar en seco tras un esfuerzo intenso puede provocar mareos, porque la sangre se acumula en las piernas. Además, la vuelta a la calma favorece la recuperación para la siguiente sesión.</p>`,
    },
    {
      html: `<h3>Valorar la condición física</h3><p>Para saber cómo estamos y ver si mejoramos, se usan <b>pruebas</b> sencillas (la batería de pruebas de condición física):</p>${tabla(["Capacidad", "Prueba"], [["Resistencia", "test de Course Navette (ida y vuelta de 20 m con pitidos)"], ["Fuerza del tren inferior", "salto horizontal a pies juntos"], ["Fuerza del tren superior", "lanzamiento de balón medicinal"], ["Velocidad", "carrera de 30 o 50 m"], ["Flexibilidad", "flexión de tronco sentado (sit and reach)"], ["Agilidad", "carrera de ida y vuelta 4 × 10 m"]])}<p>Lo importante no es compararse con los demás, sino con <b>uno mismo</b>: repetir las pruebas cada trimestre muestra el progreso.</p>`,
    },
  ],
  figura: {
    titulo: "Condición física y calentamiento",
    svg: filas("Condición física: capacidades para la salud; capacidades básicas: resistencia, fuerza, velocidad y flexibilidad; calentamiento en cuatro fases; estiramientos dinámicos antes y estáticos después; vuelta a la calma", [["Condición física", "capacidades para vivir sanos · 60 min al día", "var(--ink)"], ["Capacidades", "resistencia · fuerza · velocidad · flexibilidad", "var(--leaf)"], ["Calentamiento", "activación → movilidad → dinámicos → específico", "var(--red)"], ["Estiramientos", "dinámicos antes · estáticos después", "var(--inf)"], ["Vuelta a la calma", "bajar ritmo · estirar · respirar · beber", "var(--pen)"]], 240),
  },
  video: { id: "HwruBdpaO4I", titulo: "Qué son las capacidades condicionales y para qué sirven", canal: "Educación Física Internacional", vistas: 330080, megusta: 0, busqueda: "cualidades físicas básicas" },
  quiz: mezcla([
    { q: "¿Cuánta actividad física diaria recomienda la OMS a los adolescentes?", o: ["60 minutos", "15 minutos", "3 horas"], a: 0, e: "Moderada o intensa." },
    { q: "La capacidad de aguantar un esfuerzo prolongado es la…", o: ["resistencia", "velocidad", "flexibilidad"], a: 0, e: "Correr, nadar." },
    { q: "La amplitud de movimiento de las articulaciones es la…", o: ["flexibilidad", "fuerza", "agilidad"], a: 0, e: "Capacidad básica." },
    { q: "Un calentamiento general dura aproximadamente…", o: ["10-15 minutos", "1 minuto", "1 hora"], a: 0, e: "Progresivo." },
    { q: "La primera fase del calentamiento es la…", o: ["activación cardiovascular", "estiramiento estático", "competición"], a: 0, e: "Carrera suave." },
    { q: "En el calentamiento se recomiendan estiramientos…", o: ["dinámicos", "estáticos largos", "con rebotes"], a: 0, e: "Movimiento controlado." },
    { q: "El calentamiento aumenta la temperatura muscular, lo que hace a los músculos…", o: ["más elásticos", "más rígidos", "más pesados"], a: 0, e: "Menos lesiones." },
    { q: "Pararse en seco tras un esfuerzo intenso puede provocar…", o: ["mareo", "más fuerza", "nada"], a: 0, e: "La sangre se acumula en las piernas." },
    { q: "El test de Course Navette mide la…", o: ["resistencia", "flexibilidad", "fuerza del brazo"], a: 0, e: "Ida y vuelta de 20 m." },
    { q: "Si hace frío, el calentamiento debe ser…", o: ["más largo", "más corto", "igual"], a: 0, e: "El cuerpo tarda más." },
  ]),
  examen: mezcla([
    { q: "Botes y tiros suaves antes de un partido de baloncesto son calentamiento…", o: ["específico", "general", "estático"], a: 0, e: "Gestos del deporte." },
    { q: "Los estiramientos estáticos se mantienen…", o: ["15-30 segundos", "2 segundos", "5 minutos"], a: 0, e: "Sin rebotes." },
    { q: "Las endorfinas que libera el ejercicio ayudan a…", o: ["reducir el estrés", "aumentar la fiebre", "dormir menos"], a: 0, e: "Bienestar." },
  ]),
  feynman: ["Qué es la condición física orientada a la salud", "Las cuatro capacidades físicas básicas con un ejemplo", "Para qué sirve el calentamiento y sus fases", "Por qué hay que hacer vuelta a la calma"],
  mapa: mapa("CONDICIÓN", "var(--eso)", [
    ["Capacidades", "4 básicas", "var(--leaf)"],
    ["Calentar", "4 fases · progresión", "var(--red)"],
    ["Estirar", "dinámico · estático", "var(--inf)"],
    ["Calma", "bajar · respirar", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Condición física", "Capacidades para hacer actividad con eficacia y sin fatiga excesiva."],
    ["Resistencia", "Aguantar un esfuerzo el mayor tiempo posible."],
    ["Fuerza", "Vencer o soportar una resistencia con los músculos."],
    ["Velocidad", "Hacer acciones en el menor tiempo posible."],
    ["Flexibilidad", "Amplitud de movimiento de las articulaciones."],
    ["Calentamiento", "Ejercicios progresivos que preparan el cuerpo."],
    ["Estiramiento dinámico", "Movimiento controlado: para el calentamiento."],
    ["Vuelta a la calma", "Bajar el ritmo, estirar y respirar tras el esfuerzo."],
  ],
  familias: ["Antes de salir a correr o en bici juntos, que vuestro hijo o hija dirija el calentamiento.", "Proponed un reto familiar: 60 minutos de actividad diaria durante una semana.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Condición física y salud; capacidades físicas básicas y coordinativas; calentamiento general y específico; estiramientos; vuelta a la calma; valoración de la condición física (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Cada grupo diseña y dirige un calentamiento a la clase con ficha.", "Batería de pruebas al inicio y final de trimestre con autoevaluación.", "Diario de actividad física semanal."],
  },
  fuentes: [RD, { t: "OMS: directrices sobre actividad física y hábitos sedentarios", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Diseña un calentamiento de 12 minutos antes de una sesión de baloncesto.",
      pasos: ["3 min: carrera suave por la pista con desplazamientos laterales y de espaldas.", "3 min: movilidad articular de tobillos a cuello.", "2 min: balanceos de piernas, zancadas con giro de tronco.", "4 min: bote en carrera, pases por parejas, saltos y tiros cercanos."],
      resultado: "Calentamiento general + específico, de menos a más." },
    { enunciado: "Lucía se pone a esprintar sin calentar en una mañana fría y nota un pinchazo en el muslo. ¿Qué ha pasado y cómo evitarlo?",
      pasos: ["Músculo frío y poco elástico ante un esfuerzo explosivo.", "Posible rotura fibrilar o contractura.", "Prevención: calentamiento más largo por el frío y progresivo hasta el sprint."],
      resultado: "El calentamiento progresivo previene este tipo de lesiones." },
    { enunciado: "Organiza la vuelta a la calma tras una carrera de 20 minutos.",
      pasos: ["3 min de trote muy suave y caminar.", "Estiramientos estáticos de gemelos, cuádriceps, isquiotibiales y glúteos (20 s cada uno).", "1 min de respiración profunda.", "Beber agua."],
      resultado: "Recuperación progresiva y sin mareos." },
  ],
  errores: [
    "Empezar a jugar o correr fuerte sin calentar.",
    "Hacer estiramientos estáticos largos justo antes de un sprint.",
    "Estirar con rebotes o hasta sentir dolor.",
    "Calentar demasiado intenso y llegar cansado a la actividad.",
    "Parar en seco al terminar el esfuerzo.",
    "Compararse con los demás en las pruebas en lugar de con uno mismo.",
  ],
  ejercicios: [
    { q: "Define condición física y explica la diferencia entre salud y rendimiento.", sol: "Conjunto de capacidades para hacer actividad física con eficacia. Orientada a la salud: para vivir bien; al rendimiento: para competir y lograr marcas." },
    { q: "Indica la capacidad física principal en: maratón, salida de 100 m, levantamiento de pesas, gimnasia rítmica.", sol: "Resistencia, velocidad, fuerza, flexibilidad." },
    { q: "Enumera cinco efectos del calentamiento en el cuerpo.", sol: "Sube la temperatura muscular, la frecuencia cardiaca y la respiración; lubrica las articulaciones; activa el sistema nervioso; prepara la mente." },
    { q: "Ordena las fases: estiramientos dinámicos, activación cardiovascular, ejercicios específicos, movilidad articular.", sol: "Activación cardiovascular, movilidad articular, estiramientos dinámicos, ejercicios específicos." },
    { q: "¿En qué se diferencia un estiramiento dinámico de uno estático? ¿Cuándo usar cada uno?", sol: "Dinámico: movimiento controlado, en el calentamiento. Estático: posición mantenida 15-30 s, en la vuelta a la calma." },
    { q: "Escribe cuatro factores que modifican la duración del calentamiento.", sol: "Temperatura, intensidad de la actividad, edad y nivel, hora del día." },
    { q: "Propón un calentamiento específico para fútbol.", sol: "Conducciones, pases cortos por parejas, cambios de dirección y algún disparo suave." },
    { q: "¿Qué prueba usarías para medir la fuerza de las piernas?", sol: "Salto horizontal a pies juntos." },
    { q: "Explica tres beneficios psicológicos de la actividad física.", sol: "Reduce el estrés y la ansiedad, mejora el estado de ánimo (endorfinas) y mejora el sueño y la concentración." },
    { q: "Diseña y dirige a tu grupo un calentamiento general de 10 minutos y redacta su ficha.", sol: "Respuesta abierta; debe incluir las cuatro fases con tiempos, ejercicios y progresión." },
  ],
};
