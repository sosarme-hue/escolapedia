// Educación Física 1º ESO: el calentamiento general. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El calentamiento general",
  minutos: 45,
  objetivos: ["Explicar qué es el calentamiento y por qué es necesario", "Conocer las fases de un calentamiento general", "Ejecutar correctamente ejercicios de movilidad articular y activación", "Diseñar un calentamiento general sencillo y aplicar la vuelta a la calma"],
  claves: ["calentamiento", "activación", "movilidad articular", "estiramiento dinámico", "progresión", "vuelta a la calma"],
  pregunta: {
    texto: "¿Qué le pasa a una goma elástica que ha estado en la nevera si la estiras de golpe?",
    respuesta: "Se rompe con más facilidad. A los <b>músculos</b> les pasa algo parecido: <mark>en frío son menos elásticos</mark> y más propensos a lesionarse. El <b>calentamiento</b> sube su temperatura poco a poco, los vuelve más flexibles y prepara el corazón, los pulmones y la mente para el esfuerzo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el calentamiento?</h3><p>El <b>calentamiento</b> es el conjunto de ejercicios <b>suaves y progresivos</b> que se realizan al comienzo de una sesión de actividad física para preparar el organismo.</p><p>Se llama <b>general</b> cuando usa ejercicios que mueven <b>todo el cuerpo</b> y sirven para cualquier actividad posterior. Tiene tres objetivos:</p><ol><li><b>Prevenir lesiones</b>: músculos y articulaciones más preparados.</li><li><b>Mejorar el rendimiento</b>: reaccionas mejor y te cansas menos al principio.</li><li><b>Preparar la mente</b>: te concentras y te motivas para lo que viene.</li></ol><p>Es la primera de las tres partes de toda sesión: <b>calentamiento</b>, <b>parte principal</b> y <b>vuelta a la calma</b>.</p>`,
      svg: svg("Las tres partes de una sesión: calentamiento de unos 10 minutos, parte principal de 25 a 30 y vuelta a la calma de 5", `${[[16, 78, "calentamiento", "10 min", "var(--sun)"], [98, 102, "parte principal", "25-30 min", "var(--red)"], [204, 44, "calma", "5 min", "var(--leaf)"]].map(([x, w, n, d, c]) => `<rect x="${x}" y="58" width="${w}" height="50" rx="8" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2.5"/>${t(x + w / 2, 82, n, { s: 10, c: "var(--ink)" })}${t(x + w / 2, 98, d, { s: 9, c: "var(--muted)" })}`).join("")}${t(130, 34, "una sesión de Educación Física", { s: 11 })}<path d="M16 134 H 248" stroke="var(--muted)" stroke-width="1.5"/>${t(130, 152, "tiempo", { s: 10, c: "var(--muted)" })}`, 166),
    },
    {
      html: `<h3>Qué ocurre en el cuerpo</h3><p>Durante el calentamiento el organismo pasa del reposo a la actividad:</p>${tabla(["Sistema", "Qué cambia"], [["Corazón", "late más deprisa y envía más sangre a los músculos"], ["Pulmones", "respiras más rápido y entra más oxígeno"], ["Músculos", "suben 1 o 2 °C de temperatura y ganan elasticidad"], ["Articulaciones", "se lubrican mejor y se mueven con más amplitud"], ["Sistema nervioso", "mejoran la atención y los reflejos"]])}<p>Por eso al terminar de calentar notas un poco de <b>calor</b>, la respiración algo acelerada y ganas de moverte. Si estás muy cansado, te has pasado: el calentamiento debe preparar, no agotar.</p>`,
    },
    {
      html: `<h3>Las fases del calentamiento general</h3><p>Un calentamiento general bien hecho sigue un orden lógico, de lo más suave a lo más intenso:</p><ol><li><b>Activación cardiovascular</b> (3-4 min): carrera suave, desplazamientos variados.</li><li><b>Movilidad articular</b> (2-3 min): movimientos circulares de las articulaciones, de arriba abajo o de abajo arriba.</li><li><b>Estiramientos dinámicos</b> (2 min): movimientos amplios y controlados de los grandes grupos musculares.</li><li><b>Ejercicios de intensidad creciente</b> (2-3 min): skipping, talones al glúteo, saltos suaves, pequeños sprints.</li></ol><p>En total, unos <b>10 minutos</b>. En días fríos o antes de actividades muy intensas conviene alargarlo un poco.</p>`,
      svg: svg("Escalera de cuatro peldaños que sube de intensidad: activación, movilidad, estiramientos dinámicos e intensidad creciente", `${[["activación", "var(--leaf)"], ["movilidad", "var(--inf)"], ["estiram. dinámicos", "var(--sun)"], ["intensidad", "var(--red)"]].map(([n, c], i) => `<rect x="${20 + i * 56}" y="${130 - i * 28}" width="56" height="${28 + i * 28}" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>${t(48 + i * 56, 122 - i * 28, String(i + 1), { s: 12, c })}`).join("")}${[["activación", 0], ["movilidad", 1], ["estiram.", 2], ["intensidad", 3]].map(([n, i]) => t(48 + i * 56, 174, n, { s: 9 })).join("")}<path d="M24 30 L 236 30" stroke="var(--red)" stroke-width="2" marker-end="url(#cal1)"/><defs><marker id="cal1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>${t(130, 22, "de suave a intenso", { s: 10, c: "var(--red)" })}`),
      video: vb("calB2"),
    },
    {
      html: `<h3>La movilidad articular</h3><p>Consiste en mover cada articulación en todas sus direcciones, con movimientos <b>lentos, amplios y controlados</b>. Un orden fácil de recordar es de la <b>cabeza a los pies</b>:</p><ul><li><b>Cuello</b>: mirar arriba-abajo y a los lados (sin girar en círculo completo hacia atrás).</li><li><b>Hombros</b>: círculos hacia delante y hacia atrás.</li><li><b>Codos y muñecas</b>: flexiones y giros.</li><li><b>Cadera</b>: círculos con las manos en la cintura.</li><li><b>Rodillas</b>: pequeños círculos con las piernas juntas y semiflexionadas.</li><li><b>Tobillos</b>: giros apoyando la punta del pie.</li></ul><p>Haz unas <b>8-10 repeticiones</b> de cada movimiento en cada sentido.</p>`,
      svg: svg("Muñeco con círculos discontinuos en cuello, hombros, cadera, rodillas y tobillos indicando la movilidad articular de arriba abajo", `<g transform="translate(-130 -36) scale(2)">${persona(130, 30, "var(--pen)", { brazos: [[-18, 14], [18, 14]], piernas: [[-12, 30], [12, 30]] })}${[[130, 38, 5], [130, 44, 9], [130, 60, 7], [124, 75, 4], [136, 75, 4], [118, 90, 4], [142, 90, 4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="var(--red)" stroke-width="1" stroke-dasharray="2 1.5"/>`).join("")}</g>${t(60, 44, "cuello", { s: 10, c: "var(--red)" })}${t(206, 56, "hombros", { s: 10, c: "var(--red)" })}${t(60, 88, "cadera", { s: 10, c: "var(--red)" })}${t(206, 118, "rodillas", { s: 10, c: "var(--red)" })}${t(60, 148, "tobillos", { s: 10, c: "var(--red)" })}${t(130, 172, "de la cabeza a los pies", { s: 10, c: "var(--muted)" })}`, 180),
      video: vb("calB"),
    },
    {
      html: `<h3>Ejercicios de activación</h3><p>Algunos ejercicios típicos para la primera y la última fase:</p><ul><li><b>Carrera suave</b> en círculo o por el perímetro de la pista, pudiendo hablar sin ahogarte.</li><li><b>Desplazamientos laterales</b> y <b>de espaldas</b>, con cuidado de no chocar.</li><li><b>Skipping</b>: correr elevando las rodillas a la altura de la cadera.</li><li><b>Talones al glúteo</b>: correr llevando los talones hacia atrás.</li><li><b>Saltos</b> pequeños a pies juntos o alternando piernas.</li><li><b>Juegos de persecución</b> sencillos, como el pañuelo o el «pilla-pilla».</li></ul><p>Los juegos son una forma excelente de calentar, porque activan el cuerpo y la atención a la vez.</p>`,
    },
    {
      html: `<h3>Principios de un buen calentamiento</h3>${tabla(["Principio", "Qué significa"], [["Progresión", "empezar suave e ir subiendo la intensidad"], ["Globalidad", "mover todo el cuerpo, no solo las piernas"], ["Continuidad", "sin pausas largas que enfríen el cuerpo"], ["Duración adecuada", "unos 10 minutos; más con frío"], ["Adaptación", "pensar en la actividad que vendrá después"], ["Variedad", "cambiar ejercicios para no aburrirse"]])}<p>Un error común es hacer estiramientos estáticos largos (mantener la postura 30 segundos) al principio: en el calentamiento es mejor usar <b>estiramientos dinámicos</b> y dejar los estáticos para la <b>vuelta a la calma</b>.</p>`,
    },
    {
      html: `<h3>La vuelta a la calma</h3><p>Al terminar la actividad no hay que pararse de golpe. La <b>vuelta a la calma</b> devuelve el cuerpo poco a poco al estado de reposo:</p><ol><li><b>Andar o trotar muy suave</b> 2-3 minutos, para que el corazón baje despacio.</li><li><b>Estiramientos estáticos</b>: mantener cada postura unos 15-20 segundos, sin rebotes ni dolor.</li><li><b>Respiraciones profundas</b> y relajación.</li></ol><p>Así se reduce la sensación de rigidez al día siguiente y el cuerpo se recupera mejor. Además, es un buen momento para comentar en grupo cómo ha ido la sesión.</p>`,
      svg: svg("Muñeco estirando el cuádriceps sujetando el pie por detrás y otro estirando los isquiotibiales con el tronco inclinado", `${persona(80, 34, "var(--leaf)", { brazos: [[-18, 4], [10, 26]], piernas: [[-6, 30], [14, 6]] })}<path d="M94 70 L 96 50" stroke="var(--leaf)" stroke-width="3.2" stroke-linecap="round"/>${t(80, 128, "cuádriceps", { s: 10, c: "var(--leaf)" })}<g stroke="var(--pen)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="196" cy="62" r="7" fill="var(--pen)" fill-opacity=".2"/><path d="M190 66 L 168 86"/><path d="M168 86 L 162 116 M168 86 L 186 116"/><path d="M186 72 L 190 106 M180 78 L 180 108"/></g>${t(180, 140, "isquiotibiales", { s: 10, c: "var(--pen)" })}${t(130, 166, "15-20 segundos, sin rebotes", { s: 10, c: "var(--muted)" })}`, 176),
    },
    {
      html: `<h3>Diseña tu calentamiento</h3><p>Al final del curso debes ser capaz de <b>dirigir un calentamiento</b> a tus compañeros. Plantilla:</p>${tabla(["Fase", "Ejercicios (ejemplo)", "Tiempo"], [["Activación", "carrera suave + desplazamientos laterales", "3 min"], ["Movilidad", "cuello, hombros, cadera, rodillas, tobillos", "3 min"], ["Estiramientos dinámicos", "balanceos de piernas, aperturas de brazos", "2 min"], ["Intensidad", "skipping, talones, 2 sprints cortos", "2 min"]])}<p>Consejos para dirigirlo: colócate donde todos te vean, explica el ejercicio y hazlo tú primero, cuenta en voz alta y corrige con amabilidad.</p>`,
    },
  ],
  figura: {
    titulo: "El calentamiento general en un vistazo",
    svg: filas("Resumen: el calentamiento previene lesiones, mejora el rendimiento y prepara la mente; fases de activación, movilidad, estiramientos dinámicos e intensidad; unos 10 minutos; vuelta a la calma con estiramientos estáticos", [["Para qué", "prevenir · rendir · concentrarse", "var(--pen)"], ["1. Activación", "carrera suave", "var(--leaf)"], ["2. Movilidad", "articulaciones de arriba abajo", "var(--inf)"], ["3. Estiramientos", "dinámicos", "var(--sun)"], ["4. Intensidad", "skipping · saltos · sprints", "var(--red)"], ["Vuelta a la calma", "andar · estirar · respirar", "var(--ink)"]], 200),
  },
  video: vg("calV"),
  quiz: mezcla([
    { q: "El calentamiento se hace…", o: ["al principio de la sesión", "al final", "solo en competiciones"], a: 0, e: "Primera parte." },
    { q: "Un calentamiento general dura unos…", o: ["10 minutos", "1 minuto", "40 minutos"], a: 0, e: "Algo más con frío." },
    { q: "La primera fase es la…", o: ["activación cardiovascular", "intensidad máxima", "vuelta a la calma"], a: 0, e: "Carrera suave." },
    { q: "Al calentar, la temperatura del músculo…", o: ["sube 1 o 2 °C", "baja", "no cambia"], a: 0, e: "Más elasticidad." },
    { q: "Hacer círculos con hombros y tobillos es…", o: ["movilidad articular", "fuerza", "relajación"], a: 0, e: "Articulaciones." },
    { q: "En el calentamiento son mejores los estiramientos…", o: ["dinámicos", "estáticos largos", "con rebotes"], a: 0, e: "Los estáticos, al final." },
    { q: "Correr elevando las rodillas se llama…", o: ["skipping", "talones al glúteo", "zancada"], a: 0, e: "Rodillas a la cadera." },
    { q: "El principio de progresión significa…", o: ["de menos a más intensidad", "siempre igual", "de más a menos"], a: 0, e: "Poco a poco." },
    { q: "La vuelta a la calma sirve para…", o: ["recuperar el reposo poco a poco", "aumentar el pulso", "calentar más"], a: 0, e: "Final de sesión." },
    { q: "Si al acabar de calentar estás agotado…", o: ["te has pasado de intensidad", "lo has hecho perfecto", "debes repetirlo"], a: 0, e: "Preparar, no agotar." },
  ]),
  examen: mezcla([
    { q: "¿Qué orden es correcto en un calentamiento general?", o: ["activación, movilidad, estiramientos dinámicos, intensidad", "intensidad, movilidad, activación", "estiramientos estáticos, sprints, carrera"], a: 0, e: "De suave a intenso." },
    { q: "En invierno el calentamiento debe ser…", o: ["algo más largo", "más corto", "igual de largo pero más intenso al principio"], a: 0, e: "El cuerpo tarda más." },
    { q: "Los estiramientos estáticos se mantienen unos…", o: ["15-20 segundos", "2 segundos", "2 minutos"], a: 0, e: "Sin rebotes." },
  ]),
  feynman: ["Para qué sirve calentar", "Qué cambios produce el calentamiento en el cuerpo", "Cuáles son las fases de un calentamiento general", "Qué diferencia hay entre estiramientos dinámicos y estáticos", "Qué se hace en la vuelta a la calma"],
  mapa: mapa("CALENTAMIENTO", "var(--eso)", [
    ["Objetivos", "prevenir · rendir · atención", "var(--pen)"],
    ["Fases", "activación → intensidad", "var(--red)"],
    ["Principios", "progresión · globalidad", "var(--sun)"],
    ["Vuelta a la calma", "andar · estirar", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Calentamiento general", "Ejercicios suaves y progresivos de todo el cuerpo antes de la actividad."],
    ["Activación", "Fase inicial con carrera suave para subir el pulso."],
    ["Movilidad articular", "Mover cada articulación en todas sus direcciones."],
    ["Estiramiento dinámico", "Movimiento amplio y controlado, sin mantener la postura."],
    ["Skipping", "Correr elevando las rodillas."],
    ["Progresión", "Ir de menos a más intensidad."],
    ["Vuelta a la calma", "Parte final para volver al reposo poco a poco."],
    ["Estiramiento estático", "Mantener una postura 15-20 segundos sin rebotes."],
  ],
  familias: ["Calentad juntos antes de salir en bici o a correr el fin de semana.", "Pedid que os dirija el calentamiento que ha aprendido en clase.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Calentamiento general: objetivos, efectos, fases y principios; movilidad articular y estiramientos; vuelta a la calma; autonomía en su diseño y dirección (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Fichas de calentamiento que cada grupo dirige por turnos.", "Tomar el pulso antes y después de calentar y comparar.", "Juegos de persecución como fase de activación."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Laura empieza la clase haciendo sprints a tope. ¿Qué está haciendo mal?", pasos: ["Se salta la activación y la movilidad.", "No respeta la progresión: empieza por lo más intenso.", "Sus músculos están fríos y aumenta el riesgo de lesión."], resultado: "Debe empezar con carrera suave e ir subiendo la intensidad." },
    { enunciado: "Ordena estos ejercicios: skipping, círculos de hombros, trote suave, balanceos de piernas.", pasos: ["Activación: trote suave.", "Movilidad: círculos de hombros.", "Estiramientos dinámicos: balanceos de piernas.", "Intensidad: skipping."], resultado: "Trote, hombros, balanceos, skipping." },
    { enunciado: "Tu pulso en reposo es 70 y tras calentar es 120. ¿Es razonable?", pasos: ["El pulso debe subir con el calentamiento.", "120 pulsaciones es una activación moderada, adecuada.", "Si fuera 190, sería demasiado intenso."], resultado: "Sí, es un buen nivel de activación." },
  ],
  errores: [
    "Pensar que calentar es solo estirar.",
    "Hacer estiramientos estáticos largos al principio.",
    "Empezar con ejercicios muy intensos.",
    "Calentar solo las piernas.",
    "Pararse de golpe al terminar la actividad.",
  ],
  ejercicios: [
    { q: "Escribe los tres objetivos del calentamiento.", sol: "Prevenir lesiones, mejorar el rendimiento y preparar la mente." },
    { q: "¿Cuáles son las tres partes de una sesión de EF?", sol: "Calentamiento, parte principal y vuelta a la calma." },
    { q: "Explica dos cambios que produce el calentamiento en el cuerpo.", sol: "Sube el pulso y la respiración; los músculos ganan temperatura y elasticidad." },
    { q: "Escribe las cuatro fases del calentamiento general en orden.", sol: "Activación, movilidad articular, estiramientos dinámicos, intensidad creciente." },
    { q: "Nombra cinco articulaciones que se movilizan.", sol: "Cuello, hombros, muñecas, cadera, rodillas, tobillos." },
    { q: "¿Qué es el principio de progresión?", sol: "Aumentar la intensidad poco a poco." },
    { q: "Diferencia un estiramiento dinámico de uno estático.", sol: "El dinámico es un movimiento continuo; el estático mantiene la postura." },
    { q: "Describe la vuelta a la calma.", sol: "Andar o trotar suave, estiramientos estáticos y respiración." },
    { q: "Inventa un juego que sirva como activación.", sol: "Respuesta abierta." },
    { q: "Diseña un calentamiento de 10 minutos con sus cuatro fases.", sol: "Respuesta abierta siguiendo la plantilla." },
  ],
};
