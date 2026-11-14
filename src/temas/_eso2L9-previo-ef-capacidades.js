// Educación Física 2º ESO: las capacidades físicas básicas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Las capacidades físicas básicas",
  minutos: 45,
  objetivos: ["Definir las cuatro capacidades físicas básicas", "Reconocer cada capacidad en gestos deportivos y cotidianos", "Conocer pruebas sencillas para medirlas", "Aplicar ejercicios seguros para mejorarlas"],
  claves: ["condición física", "resistencia", "fuerza", "velocidad", "flexibilidad", "test físico"],
  pregunta: {
    texto: "Una gimnasta, un velocista y un maratoniano son deportistas excelentes. ¿Por qué entrenan de forma tan distinta?",
    respuesta: "Porque cada deporte exige sobre todo una <b>capacidad física</b> diferente: la gimnasta necesita mucha <b>flexibilidad</b> y fuerza, el velocista <b>velocidad</b> y el maratoniano <b>resistencia</b>. Las cuatro capacidades forman la <mark>condición física</mark>, y cada persona puede mejorarlas con entrenamiento.",
  },
  bloques: [
    {
      html: `<h3>La condición física</h3><p>La <b>condición física</b> es el conjunto de cualidades que permiten a una persona realizar actividades físicas con eficacia y sin fatigarse en exceso. Depende de cuatro <b>capacidades físicas básicas</b>:</p><ul><li><b>Resistencia</b>: aguantar un esfuerzo durante mucho tiempo.</li><li><b>Fuerza</b>: vencer o soportar una resistencia gracias a los músculos.</li><li><b>Velocidad</b>: hacer movimientos en el menor tiempo posible.</li><li><b>Flexibilidad</b>: mover las articulaciones con la máxima amplitud.</li></ul><p>Todas se combinan en casi cualquier actividad, pero en cada deporte domina alguna. Tener una buena condición física mejora la <mark>salud</mark>, no solo el rendimiento.</p>`,
      svg: svg("Cuatro muñecos representan las capacidades: resistencia corriendo, fuerza empujando, velocidad esprintando y flexibilidad estirando", `${persona(40, 40, "var(--pen)", { piernas: [[-12, 24], [12, 22]], brazos: [[-12, 10], [12, 4]] })}${persona(100, 40, "var(--red)", { brazos: [[22, -4], [22, 4]], piernas: [[-16, 26], [8, 26]] })}<rect x="124" y="40" width="8" height="40" fill="var(--red)" fill-opacity=".3"/>${persona(170, 40, "var(--sun)", { piernas: [[-20, 18], [16, 24]], brazos: [[-18, -4], [18, 14]] })}${persona(224, 40, "var(--leaf)", { brazos: [[-4, -24], [4, -24]], piernas: [[-22, 22], [22, 22]] })}
        ${t(40, 120, "resistencia", { c: "var(--pen)", s: 10 })}${t(106, 120, "fuerza", { c: "var(--red)", s: 10 })}${t(166, 136, "velocidad", { c: "var(--sun)", s: 10 })}${t(224, 120, "flexibilidad", { c: "var(--leaf)", s: 10 })}${t(130, 164, "las cuatro forman la condición física", { c: "var(--muted)", s: 11 })}`),
      video: { id: "JwFqEWCK7nw", titulo: "Las capacidades físicas básicas", canal: "Educación Física y más", vistas: 464443 },
    },
    {
      html: `<h3>La resistencia</h3><p>Es la capacidad de <b>mantener un esfuerzo</b> el mayor tiempo posible retrasando la fatiga. Hay dos tipos:</p><ul><li><b>Aeróbica</b>: esfuerzos largos de intensidad media en los que llega suficiente oxígeno a los músculos (correr 20 minutos, nadar, ir en bici).</li><li><b>Anaeróbica</b>: esfuerzos cortos e intensos en los que el oxígeno no llega a tiempo (un 400 m a tope, varias subidas de escaleras rápidas).</li></ul><p>Se mejora con <b>carrera continua</b>, juegos de larga duración, bici o natación. Prueba típica: el <b>Course Navette</b> (ida y vuelta de 20 m al ritmo de unos pitidos cada vez más rápidos).</p>`,
    },
    {
      html: `<h3>La fuerza</h3><p>Es la capacidad de los músculos para <b>vencer, sostener u oponerse</b> a una resistencia (un peso, el propio cuerpo, un rival). Distinguimos:</p><ul><li><b>Fuerza máxima</b>: mover la mayor carga posible una sola vez.</li><li><b>Fuerza explosiva</b> o potencia: aplicar fuerza muy rápido (saltar, lanzar).</li><li><b>Fuerza-resistencia</b>: repetir un esfuerzo muchas veces (abdominales, flexiones).</li></ul><p>En 2.º de ESO se trabaja con el <mark>propio peso corporal</mark>, balones medicinales ligeros y gomas, cuidando la técnica y la espalda. Nada de grandes pesos. Pruebas: <b>salto horizontal</b> a pies juntos, lanzamiento de balón medicinal, abdominales en 30 segundos.</p>`,
    },
    {
      html: `<h3>La velocidad</h3><p>Es la capacidad de realizar acciones motrices en el <b>menor tiempo posible</b>. Tiene tres formas:</p>${tabla(["Tipo", "Qué es", "Ejemplo"], [["De reacción", "responder rápido a un estímulo", "salir al oír el disparo"], ["Gestual", "hacer un gesto concreto muy rápido", "un remate de voleibol"], ["De desplazamiento", "recorrer una distancia en el menor tiempo", "esprintar 50 m"]])}<p>Se mejora con <b>salidas</b> desde distintas posiciones, juegos de persecución y <b>sprints cortos</b> (10-30 m) con recuperación completa entre repeticiones. Prueba: <b>50 metros lisos</b> o el test de velocidad 10 × 5 m.</p>`,
      svg: svg("Velocista saliendo de la línea con marcas de 0, 25 y 50 metros", `<path d="M20 130 H 250" stroke="var(--line)" stroke-width="3"/><path d="M40 70 V 140 M240 70 V 140" stroke="var(--ink)" stroke-width="2"/><path d="M140 120 V 140" stroke="var(--muted)" stroke-width="2"/>${persona(62, 72, "var(--sun)", { piernas: [[-18, 20], [16, 24]], brazos: [[-16, -2], [18, 12]] })}<path d="M90 92 H 120 M90 102 H 112" stroke="var(--sun)" stroke-width="2"/>${t(40, 156, "0 m", { s: 11 })}${t(140, 156, "25 m", { s: 11 })}${t(240, 156, "50 m", { s: 11 })}${t(130, 40, "velocidad de desplazamiento", { c: "var(--sun)", s: 12 })}`),
    },
    {
      html: `<h3>La flexibilidad</h3><p>Es la capacidad de mover las articulaciones con la <b>mayor amplitud</b> posible sin dañarse. Depende de dos cosas: la <b>movilidad articular</b> (cuánto deja moverse la articulación) y la <b>elasticidad muscular</b> (cuánto se estira el músculo y vuelve a su forma).</p><p>Es la única capacidad que <mark>disminuye desde la infancia</mark> si no se trabaja, por eso conviene estirar a menudo. Se mejora con <b>estiramientos estáticos</b> (mantener 15-30 s sin rebotes) y dinámicos controlados. Prueba: <b>flexión profunda de tronco</b> sentado (sit and reach).</p>`,
      video: { id: "Lx4YFmORsWc", titulo: "Ejercicios de estiramientos para antes y después del ejercicio", canal: "gymvirtual", vistas: 17941135 },
    },
    {
      html: `<h3>¿Qué capacidad domina en cada deporte?</h3>${tabla(["Deporte o acción", "Capacidad principal"], [["Correr un maratón", "resistencia aeróbica"], ["Levantamiento de pesas", "fuerza máxima"], ["Salto de longitud", "fuerza explosiva y velocidad"], ["100 m lisos", "velocidad"], ["Gimnasia rítmica", "flexibilidad"], ["Natación de 1500 m", "resistencia"], ["Portero parando un penalti", "velocidad de reacción"]])}<p>En los deportes colectivos (fútbol, baloncesto) se necesitan <b>todas</b>: resistencia para aguantar el partido, velocidad en los contraataques, fuerza en saltos y choques y flexibilidad para evitar lesiones.</p>`,
    },
    {
      html: `<h3>Las pruebas de condición física</h3><p>Medir las capacidades sirve para conocer tu punto de partida y comprobar si mejoras. Las pruebas más usadas en el instituto son:</p>`,
      svg: svg("Cuatro pruebas: Course Navette, salto horizontal, 50 metros y flexión de tronco sentado", chips([["Resistencia", "Course Navette (20 m)", "var(--pen)"], ["Fuerza", "salto horizontal · abdominales 30 s", "var(--red)"], ["Velocidad", "50 m lisos · 10 × 5 m", "var(--sun)"], ["Flexibilidad", "flexión de tronco sentado", "var(--leaf)"]], 8, 36), 180),
    },
    {
      html: `<h3>Cómo mejorar con seguridad</h3><ul><li><b>Calienta</b> siempre antes y haz vuelta a la calma después.</li><li><b>Progresión</b>: aumenta la carga poco a poco (más tiempo, más repeticiones).</li><li><b>Continuidad</b>: entrenar de vez en cuando no sirve; mejor 3 días a la semana.</li><li><b>Descanso</b>: el cuerpo mejora mientras se recupera.</li><li><b>Técnica correcta</b>: sobre todo en fuerza, espalda recta y movimientos controlados.</li><li>Compárate <b>contigo mismo</b>, no con los demás: cada persona tiene su ritmo de desarrollo, sobre todo en la adolescencia.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Las capacidades físicas básicas",
    svg: filas("Resumen de las cuatro capacidades físicas básicas con su definición y prueba", [["Resistencia", "aguantar el esfuerzo · Course Navette", "var(--pen)"], ["Fuerza", "vencer una resistencia · salto horizontal", "var(--red)"], ["Velocidad", "lo más rápido posible · 50 m", "var(--sun)"], ["Flexibilidad", "máxima amplitud · flexión de tronco", "var(--leaf)"], ["Mejorar", "progresión · continuidad · descanso", "var(--inf)"]], 180),
  },
  video: { id: "JwFqEWCK7nw", titulo: "Las capacidades físicas básicas", canal: "Educación Física y más", vistas: 464443, megusta: 0, busqueda: "capacidades físicas básicas educación física" },
  quiz: mezcla([
    { q: "¿Cuántas capacidades físicas básicas hay?", o: ["cuatro", "dos", "seis"], a: 0, e: "Resistencia, fuerza, velocidad, flexibilidad." },
    { q: "Aguantar un esfuerzo mucho tiempo es…", o: ["resistencia", "velocidad", "flexibilidad"], a: 0, e: "Retrasar la fatiga." },
    { q: "Correr 20 minutos a ritmo suave es resistencia…", o: ["aeróbica", "anaeróbica", "explosiva"], a: 0, e: "Hay oxígeno suficiente." },
    { q: "Saltar lo más lejos posible exige fuerza…", o: ["explosiva", "máxima", "resistencia"], a: 0, e: "Fuerza aplicada rápido." },
    { q: "Salir al oír el disparo es velocidad de…", o: ["reacción", "desplazamiento", "gestual"], a: 0, e: "Respuesta a un estímulo." },
    { q: "La capacidad que se pierde desde la infancia si no se trabaja es la…", o: ["flexibilidad", "fuerza", "velocidad"], a: 0, e: "Hay que estirar a menudo." },
    { q: "El Course Navette mide la…", o: ["resistencia", "flexibilidad", "fuerza"], a: 0, e: "Ida y vuelta de 20 m." },
    { q: "La flexión de tronco sentado mide la…", o: ["flexibilidad", "velocidad", "resistencia"], a: 0, e: "Sit and reach." },
    { q: "Para trabajar la fuerza en 2.º ESO se usa sobre todo…", o: ["el propio peso corporal", "grandes pesos", "nada"], a: 0, e: "Seguridad y técnica." },
    { q: "Un maratón exige sobre todo…", o: ["resistencia aeróbica", "fuerza máxima", "velocidad de reacción"], a: 0, e: "Esfuerzo muy largo." },
  ]),
  examen: mezcla([
    { q: "Un 400 m a máxima intensidad es sobre todo resistencia…", o: ["anaeróbica", "aeróbica", "flexible"], a: 0, e: "Corto e intenso." },
    { q: "La flexibilidad depende de la movilidad articular y de la…", o: ["elasticidad muscular", "velocidad", "frecuencia cardiaca"], a: 0, e: "Músculo que se estira." },
    { q: "En los sprints de entrenamiento, entre repeticiones la recuperación debe ser…", o: ["completa", "nula", "de 2 segundos"], a: 0, e: "Para correr a tope cada vez." },
  ]),
  feynman: ["Qué es la condición física", "Las cuatro capacidades físicas básicas", "Tipos de resistencia, fuerza y velocidad", "Una prueba para medir cada capacidad", "Cómo mejorar con seguridad"],
  mapa: mapa("CONDICIÓN FÍSICA", "var(--eso)", [
    ["Resistencia", "aeróbica · anaeróbica", "var(--pen)"],
    ["Fuerza", "máxima · explosiva · resistencia", "var(--red)"],
    ["Velocidad", "reacción · gestual · desplazamiento", "var(--sun)"],
    ["Flexibilidad", "movilidad · elasticidad", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Condición física", "Cualidades para hacer actividad física con eficacia."],
    ["Resistencia", "Mantener un esfuerzo el mayor tiempo posible."],
    ["Aeróbica", "Esfuerzo largo con oxígeno suficiente."],
    ["Fuerza", "Vencer o soportar una resistencia con los músculos."],
    ["Fuerza explosiva", "Fuerza aplicada muy rápido: saltar, lanzar."],
    ["Velocidad", "Hacer movimientos en el menor tiempo."],
    ["Flexibilidad", "Mover las articulaciones con la máxima amplitud."],
    ["Course Navette", "Prueba de resistencia de ida y vuelta de 20 m."],
  ],
  familias: ["Probad en casa la flexión de tronco sentado y anotad el resultado cada mes.", "Buscad juntos qué capacidad domina en el deporte favorito de la familia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Capacidades físicas básicas: concepto, tipos, métodos de mejora y valoración mediante pruebas; condición física orientada a la salud (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Batería de test al inicio y al final del trimestre.", "Circuito de estaciones con una capacidad en cada una.", "Ficha personal de evolución sin comparaciones entre alumnos."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes: actividad física y salud", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Clasifica: hacer 30 abdominales seguidos.", pasos: ["Hay que repetir un esfuerzo muchas veces.", "No es mover una carga máxima ni aplicarla rápido."], resultado: "Fuerza-resistencia." },
    { enunciado: "Lucía hizo 6 periodos en el Course Navette en octubre y 8 en febrero. ¿Qué ha mejorado?", pasos: ["El Course Navette mide la resistencia.", "Ha aguantado dos periodos más."], resultado: "Ha mejorado su resistencia aeróbica." },
    { enunciado: "Propón un ejercicio para cada capacidad en un circuito de clase.", pasos: ["Resistencia: 3 minutos de comba suave.", "Fuerza: sentadillas con el propio peso.", "Velocidad: sprints de 10 m.", "Flexibilidad: estiramiento de isquiotibiales 20 s."], resultado: "Un circuito con las cuatro capacidades." },
  ],
  errores: [
    "Confundir resistencia con velocidad: correr rápido no es lo mismo que aguantar.",
    "Pensar que la fuerza solo se trabaja con pesas.",
    "Estirar con rebotes bruscos.",
    "Hacer sprints sin recuperar entre repeticiones.",
    "Compararse con los demás en lugar de con uno mismo.",
  ],
  ejercicios: [
    { q: "Define las cuatro capacidades físicas básicas.", sol: "Resistencia: aguantar; fuerza: vencer resistencias; velocidad: rapidez de movimiento; flexibilidad: amplitud articular." },
    { q: "Diferencia la resistencia aeróbica de la anaeróbica con un ejemplo de cada una.", sol: "Aeróbica: correr 20 min suave. Anaeróbica: 400 m a tope." },
    { q: "Escribe los tres tipos de fuerza.", sol: "Máxima, explosiva y fuerza-resistencia." },
    { q: "¿Qué tipo de velocidad usa un portero en un penalti?", sol: "Velocidad de reacción (y gestual)." },
    { q: "¿De qué dos factores depende la flexibilidad?", sol: "De la movilidad articular y la elasticidad muscular." },
    { q: "Indica qué prueba mide cada capacidad.", sol: "Course Navette, salto horizontal, 50 m, flexión de tronco sentado." },
    { q: "¿Qué capacidad domina en la gimnasia rítmica?", sol: "La flexibilidad." },
    { q: "¿Por qué el baloncesto necesita las cuatro capacidades?", sol: "Resistencia para el partido, velocidad en contraataques, fuerza en saltos y flexibilidad contra lesiones." },
    { q: "Nombra tres principios para mejorar con seguridad.", sol: "Progresión, continuidad y descanso (o técnica correcta, calentar)." },
    { q: "Diseña un ejercicio de fuerza sin material.", sol: "Respuesta abierta: sentadillas, flexiones apoyando rodillas, plancha…" },
  ],
};
