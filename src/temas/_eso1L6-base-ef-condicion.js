// Educación Física 1º ESO: la condición física y la salud. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, barras, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "La condición física y la salud",
  minutos: 45,
  objetivos: ["Definir la condición física y sus capacidades básicas", "Relacionar la actividad física con la salud", "Tomar y entender la frecuencia cardiaca", "Conocer pruebas sencillas para valorar la propia condición física"],
  claves: ["condición física", "resistencia", "fuerza", "velocidad", "flexibilidad", "frecuencia cardiaca"],
  pregunta: {
    texto: "¿Por qué algunas personas suben cuatro pisos de escaleras sin despeinarse y otras llegan sin aliento?",
    respuesta: "Por su <b>condición física</b>: el nivel de preparación de su cuerpo para hacer esfuerzos. Quien hace actividad física con regularidad tiene un corazón más fuerte, músculos más eficaces y pulmones que aprovechan mejor el oxígeno. <mark>La buena noticia es que la condición física se puede mejorar</mark> a cualquier edad con práctica constante.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la condición física?</h3><p>La <b>condición física</b> es el conjunto de cualidades que permiten a una persona realizar actividades físicas con <b>eficacia</b> y sin cansarse en exceso. Depende de la genética, pero sobre todo del <b>entrenamiento</b> y de los hábitos de vida.</p><p>Se apoya en cuatro <b>capacidades físicas básicas</b>:</p><ul><li><b>Resistencia</b>: aguantar un esfuerzo durante mucho tiempo.</li><li><b>Fuerza</b>: vencer o soportar una resistencia (un peso, el propio cuerpo).</li><li><b>Velocidad</b>: hacer movimientos en el menor tiempo posible.</li><li><b>Flexibilidad</b>: mover las articulaciones con la máxima amplitud.</li></ul>`,
      svg: svg("Cuatro muñecos que representan las capacidades: resistencia corriendo, fuerza levantando un peso, velocidad esprintando y flexibilidad tocándose los pies", `${persona(36, 50, "var(--leaf)", { brazos: [[-14, 8], [14, 14]], piernas: [[-12, 26], [10, 24]] })}${t(36, 130, "resistencia", { s: 10, c: "var(--leaf)" })}${persona(98, 50, "var(--red)", { brazos: [[-12, -18], [12, -18]], piernas: [[-12, 26], [12, 26]] })}<path d="M78 38 H 118" stroke="var(--red)" stroke-width="3"/><rect x="72" y="32" width="8" height="14" rx="2" fill="var(--red)"/><rect x="116" y="32" width="8" height="14" rx="2" fill="var(--red)"/>${t(98, 130, "fuerza", { s: 10, c: "var(--red)" })}${persona(162, 50, "var(--sun)", { brazos: [[-18, -4], [18, 18]], piernas: [[-22, 18], [16, 26]] })}<path d="M128 56 h -10 M130 66 h -14 M128 76 h -10" stroke="var(--sun)" stroke-width="2"/>${t(162, 130, "velocidad", { s: 10, c: "var(--sun)" })}<g stroke="var(--pen)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="234" cy="82" r="7" fill="var(--pen)" fill-opacity=".2"/><path d="M206 108 H 250 M206 108 L 226 90 M226 92 L 248 104"/></g>${t(226, 130, "flexibilidad", { s: 10, c: "var(--pen)" })}${t(130, 160, "las cuatro capacidades físicas básicas", { s: 10, c: "var(--muted)" })}`, 172),
      video: vb("conB"),
    },
    {
      html: `<h3>La resistencia</h3><p>La <b>resistencia</b> es la capacidad de mantener un esfuerzo durante el mayor tiempo posible retrasando la fatiga. Es la capacidad más relacionada con la <b>salud del corazón</b>.</p><ul><li><b>Aeróbica</b>: esfuerzos largos de intensidad moderada, en los que hay oxígeno suficiente. Correr suave 20 minutos, nadar, ir en bici. Es la más saludable.</li><li><b>Anaeróbica</b>: esfuerzos cortos y muy intensos, sin oxígeno suficiente. Un sprint de 200 metros. Produce fatiga rápida.</li></ul><p>Para mejorarla a tu edad, lo mejor son la <b>carrera continua</b> a ritmo cómodo (puedes hablar mientras corres) y los juegos y deportes de larga duración.</p>`,
    },
    {
      html: `<h3>Fuerza, velocidad y flexibilidad</h3>${tabla(["Capacidad", "Ejemplo en la vida diaria", "Cómo trabajarla a tu edad"], [["Fuerza", "llevar la mochila, subir escaleras", "con el propio peso: sentadillas, planchas, trepar, juegos de tracción"], ["Velocidad", "reaccionar ante un balón, cruzar deprisa", "juegos de reacción y persecución, sprints cortos con descanso"], ["Flexibilidad", "atarse los zapatos, alcanzar algo alto", "estiramientos suaves y frecuentes"]])}<p>En la adolescencia no se recomienda levantar <b>pesos grandes</b>: es mejor usar el propio cuerpo y cuidar la técnica. La <b>flexibilidad</b> es la única capacidad que se pierde desde la infancia si no se trabaja, así que conviene estirar con regularidad.</p>`,
    },
    {
      html: `<h3>La frecuencia cardiaca</h3><p>La <b>frecuencia cardiaca</b> (FC) es el número de veces que late el corazón en un minuto. Indica la intensidad del esfuerzo.</p><p>Cómo tomarla:</p><ol><li>Coloca los dedos índice y corazón (nunca el pulgar, que tiene pulso propio) en la <b>muñeca</b>, bajo el pulgar, o en el <b>cuello</b>, al lado de la tráquea.</li><li>Cuenta los latidos durante <b>15 segundos</b>.</li><li>Multiplica por <b>4</b>.</li></ol><p>Valores orientativos a tu edad: en <b>reposo</b>, entre 60 y 100 latidos por minuto; durante un esfuerzo moderado, entre 120 y 160; la <b>máxima</b> se estima en <b>220 − edad</b> (unos 208 a los 12 años).</p>`,
      svg: svg("Gráfica de barras de la frecuencia cardiaca: reposo 75, caminar 100, trote 140 y sprint 190 latidos por minuto", `${barras(26, 150, 214, 110, [["reposo", 75, "var(--leaf)"], ["caminar", 100, "var(--leaf)"], ["trote", 140, "var(--sun)"], ["sprint", 190, "var(--red)"]], 210)}${t(130, 20, "latidos por minuto", { s: 11, c: "var(--muted)" })}`),
      video: vb("conB2"),
    },
    {
      html: `<h3>Actividad física y salud</h3><p>La Organización Mundial de la Salud recomienda a los jóvenes de 5 a 17 años:</p><ul><li>Al menos <b>60 minutos diarios</b> de actividad física de intensidad moderada a vigorosa.</li><li>Actividades que <b>fortalezcan músculos y huesos</b> al menos 3 días por semana.</li><li><b>Reducir el tiempo sentado</b> frente a pantallas.</li></ul><p>Beneficios de cumplirlo:</p>${tabla(["Físicos", "Mentales y sociales"], [["corazón y pulmones más fuertes", "mejor estado de ánimo, menos estrés"], ["huesos y músculos sanos", "mejor concentración y rendimiento escolar"], ["peso saludable", "más autoestima"], ["mejor descanso", "hacer amigos, trabajo en equipo"]])}`,
    },
    {
      html: `<h3>El sedentarismo</h3><p>El <b>sedentarismo</b> es la falta de actividad física habitual: pasar la mayor parte del día sentado o tumbado. Es uno de los grandes problemas de salud actuales, también entre los adolescentes.</p><p>Consecuencias:</p><ul><li>Pérdida de condición física y fatiga ante esfuerzos pequeños.</li><li>Aumento del riesgo de sobrepeso y obesidad.</li><li>Dolores de espalda por malas posturas mantenidas.</li><li>Peor sueño y estado de ánimo.</li></ul><p>Ideas para combatirlo: ir andando o en bici al instituto, usar las escaleras, levantarte cada hora si estudias, practicar un deporte que te guste y quedar con amigos para actividades en movimiento.</p>`,
    },
    {
      html: `<h3>Valorar la condición física</h3><p>Para conocer tu nivel y comprobar tus mejoras se usan <b>pruebas</b> sencillas. Lo importante no es compararse con los demás, sino con <b>uno mismo</b> a lo largo del curso.</p>${tabla(["Capacidad", "Prueba", "Qué mide"], [["Resistencia", "test de ida y vuelta (Course Navette)", "periodos completados a velocidad creciente"], ["Fuerza", "salto horizontal a pies juntos", "centímetros alcanzados"], ["Fuerza", "abdominales en 30 segundos", "número de repeticiones"], ["Velocidad", "carrera de 4 × 10 metros", "tiempo en segundos"], ["Flexibilidad", "flexión de tronco sentado", "centímetros alcanzados"]])}<p>Anota tus resultados en una ficha y repite las pruebas al final del curso.</p>`,
    },
    {
      html: `<h3>Principios para mejorar</h3><ul><li><b>Regularidad</b>: es mejor un poco todos los días que mucho un solo día.</li><li><b>Progresión</b>: aumentar el esfuerzo poco a poco (primero más tiempo, después más intensidad).</li><li><b>Descanso</b>: el cuerpo mejora mientras se recupera; dormir 9 horas es parte del entrenamiento.</li><li><b>Variedad</b>: combinar actividades para trabajar todas las capacidades.</li><li><b>Individualidad</b>: cada persona tiene su ritmo; respeta el tuyo y el de los demás.</li></ul><p>Y no olvides que una buena <b>alimentación</b> y la <b>hidratación</b> son el «combustible» de tu condición física.</p>`,
    },
  ],
  figura: {
    titulo: "La condición física en un vistazo",
    svg: filas("Resumen: condición física; resistencia aeróbica y anaeróbica; fuerza con el propio peso; velocidad; flexibilidad; frecuencia cardiaca en 15 segundos por 4; 60 minutos diarios de actividad", [["Resistencia", "aeróbica · anaeróbica", "var(--leaf)"], ["Fuerza", "con el propio peso", "var(--red)"], ["Velocidad", "reacción · desplazamiento", "var(--sun)"], ["Flexibilidad", "estirar a menudo", "var(--pen)"], ["Pulso", "15 s × 4 · máx. 220 − edad", "var(--inf)"], ["OMS", "60 min al día", "var(--ink)"]], 200),
  },
  video: vg("conV"),
  quiz: mezcla([
    { q: "Aguantar un esfuerzo mucho tiempo es…", o: ["resistencia", "velocidad", "flexibilidad"], a: 0, e: "Retrasar la fatiga." },
    { q: "Correr suave 20 minutos trabaja la resistencia…", o: ["aeróbica", "anaeróbica", "estática"], a: 0, e: "Con oxígeno suficiente." },
    { q: "La capacidad que se pierde desde la infancia si no se trabaja es la…", o: ["flexibilidad", "fuerza", "resistencia"], a: 0, e: "Hay que estirar." },
    { q: "Para tomar el pulso NO se usa el…", o: ["pulgar", "índice", "dedo corazón"], a: 0, e: "Tiene pulso propio." },
    { q: "Si cuentas 20 latidos en 15 segundos, tu FC es…", o: ["80", "20", "35"], a: 0, e: "20 × 4." },
    { q: "La FC máxima se estima con…", o: ["220 − edad", "100 + edad", "edad × 10"], a: 0, e: "Fórmula orientativa." },
    { q: "La OMS recomienda a los jóvenes al menos…", o: ["60 minutos diarios", "60 minutos semanales", "10 minutos diarios"], a: 0, e: "Moderada a vigorosa." },
    { q: "La falta habitual de actividad física es el…", o: ["sedentarismo", "calentamiento", "entrenamiento"], a: 0, e: "Problema de salud." },
    { q: "El salto horizontal mide la…", o: ["fuerza de piernas", "flexibilidad", "resistencia"], a: 0, e: "Potencia." },
    { q: "Mejorar poco a poco aumentando el esfuerzo es el principio de…", o: ["progresión", "variedad", "descanso"], a: 0, e: "Primero tiempo, luego intensidad." },
  ]),
  examen: mezcla([
    { q: "Un sprint de 200 m a tope trabaja sobre todo la resistencia…", o: ["anaeróbica", "aeróbica", "pasiva"], a: 0, e: "Corto e intenso." },
    { q: "La FC máxima estimada a los 12 años es…", o: ["208", "120", "232"], a: 0, e: "220 − 12." },
    { q: "Para comparar tus resultados en las pruebas conviene…", o: ["compararte contigo mismo a lo largo del curso", "compararte con el mejor de la clase", "no repetirlas nunca"], a: 0, e: "Progreso personal." },
  ]),
  feynman: ["Qué es la condición física", "Cuáles son las cuatro capacidades básicas", "Diferencia entre resistencia aeróbica y anaeróbica", "Cómo se toma la frecuencia cardiaca", "Qué consecuencias tiene el sedentarismo"],
  mapa: mapa("CONDICIÓN FÍSICA", "var(--eso)", [
    ["Capacidades", "resistencia · fuerza · velocidad · flex.", "var(--leaf)"],
    ["Pulso", "15 s × 4", "var(--red)"],
    ["Salud", "60 min/día · no sedentarismo", "var(--pen)"],
    ["Pruebas", "comparar con uno mismo", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Condición física", "Cualidades para hacer esfuerzos con eficacia."],
    ["Resistencia aeróbica", "Esfuerzo largo y moderado con oxígeno suficiente."],
    ["Resistencia anaeróbica", "Esfuerzo corto e intenso sin oxígeno suficiente."],
    ["Fuerza", "Capacidad de vencer o soportar una resistencia."],
    ["Velocidad", "Hacer movimientos en el menor tiempo posible."],
    ["Flexibilidad", "Amplitud de movimiento de las articulaciones."],
    ["Frecuencia cardiaca", "Latidos del corazón por minuto."],
    ["Sedentarismo", "Falta habitual de actividad física."],
  ],
  familias: ["Tomaos el pulso en reposo y después de subir escaleras.", "Planificad juntos 60 minutos de actividad un día del fin de semana.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Condición física y salud: capacidades físicas básicas, frecuencia cardiaca, beneficios de la actividad física, sedentarismo y valoración de la condición física (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Ficha personal de pruebas al inicio y al final del curso.", "Registro semanal de minutos de actividad física.", "Circuito de estaciones con una capacidad en cada una."],
  },
  fuentes: [RD, { t: "Organización Mundial de la Salud: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Cuentas 18 latidos en 15 segundos en reposo. ¿Cuál es tu FC? ¿Es normal?", pasos: ["18 × 4 = 72.", "El reposo normal está entre 60 y 100."], resultado: "72 latidos por minuto: normal." },
    { enunciado: "Clasifica: carrera de 15 minutos, salto de longitud, tocar la punta de los pies, reaccionar a un silbato.", pasos: ["15 minutos de carrera: resistencia.", "Salto: fuerza.", "Tocar los pies: flexibilidad.", "Reaccionar al silbato: velocidad de reacción."], resultado: "Resistencia, fuerza, flexibilidad, velocidad." },
    { enunciado: "Marcos juega a la consola 4 horas al día y no hace deporte. Propón tres cambios.", pasos: ["Ir andando o en bici al instituto.", "Apuntarse a un deporte o actividad que le guste dos días por semana.", "Hacer pausas activas cada hora de pantalla."], resultado: "Pequeños cambios diarios reducen el sedentarismo." },
  ],
  errores: [
    "Tomar el pulso con el pulgar.",
    "Pensar que solo los deportistas necesitan condición física.",
    "Creer que la flexibilidad no se pierde si no se trabaja.",
    "Entrenar mucho un día y nada el resto de la semana.",
    "Compararse con los demás en lugar de con uno mismo.",
  ],
  ejercicios: [
    { q: "Define condición física.", sol: "Conjunto de cualidades que permiten realizar esfuerzos con eficacia y sin fatiga excesiva." },
    { q: "Escribe las cuatro capacidades físicas básicas con un ejemplo.", sol: "Resistencia (correr 20 min), fuerza (trepar), velocidad (sprint), flexibilidad (estirar)." },
    { q: "Diferencia resistencia aeróbica y anaeróbica.", sol: "Aeróbica: larga y moderada con oxígeno; anaeróbica: corta e intensa sin oxígeno suficiente." },
    { q: "Explica cómo se toma el pulso.", sol: "Índice y corazón en la muñeca o el cuello, contar 15 s y multiplicar por 4." },
    { q: "Calcula tu frecuencia cardiaca máxima estimada.", sol: "220 − tu edad." },
    { q: "¿Cuánta actividad física recomienda la OMS a tu edad?", sol: "60 minutos diarios moderada-vigorosa y fortalecimiento 3 días por semana." },
    { q: "Escribe tres consecuencias del sedentarismo.", sol: "Pérdida de forma física, sobrepeso, dolor de espalda, peor sueño." },
    { q: "Nombra una prueba para cada capacidad física.", sol: "Course Navette, salto horizontal, 4 × 10 m, flexión de tronco." },
    { q: "Explica el principio de regularidad.", sol: "Practicar a menudo es más eficaz que hacer mucho de vez en cuando." },
    { q: "Haz un registro de tu actividad física durante una semana y calcula la media diaria.", sol: "Respuesta personal." },
  ],
};
