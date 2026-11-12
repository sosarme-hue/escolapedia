// Educación Física 2º ESO: el calentamiento. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El calentamiento",
  minutos: 45,
  objetivos: ["Explicar qué es el calentamiento y para qué sirve", "Conocer sus efectos en el organismo", "Distinguir el calentamiento general y el específico y sus fases", "Diseñar y dirigir un calentamiento general de forma autónoma"],
  claves: ["calentamiento", "activación", "movilidad articular", "calentamiento general", "calentamiento específico", "vuelta a la calma"],
  pregunta: {
    texto: "¿Por qué los futbolistas que salen desde el banquillo corren y hacen ejercicios en la banda antes de entrar al campo?",
    respuesta: "Porque necesitan <b>calentar</b>: preparar el cuerpo para pasar del reposo al esfuerzo intenso. Si entran «en frío», sus músculos son menos elásticos, reaccionan más despacio y tienen <mark>más riesgo de lesionarse</mark>. Unos minutos de carrera suave, movilidad y estiramientos dinámicos los ponen a punto.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el calentamiento?</h3><p>El <b>calentamiento</b> es el conjunto de ejercicios suaves y progresivos que se hacen <mark>antes de una actividad física</mark> para preparar el cuerpo y la mente.</p><p>Tiene tres objetivos principales:</p><ul><li><b>Prevenir lesiones</b>: músculos, tendones y articulaciones están más preparados.</li><li><b>Mejorar el rendimiento</b>: el cuerpo responde mejor y más rápido.</li><li><b>Preparar la mente</b>: aumenta la concentración y la motivación.</li></ul><p>Es la primera parte de cualquier sesión, partido o entrenamiento. Al final de la actividad se hace la <b>vuelta a la calma</b>, que devuelve el cuerpo poco a poco al estado de reposo.</p>`,
      video: { id: "8zzpk_GmfJI", titulo: "Calentamiento general básico en Educación Física", canal: "JorgEF", vistas: 540575 },
    },
    {
      html: `<h3>Efectos en el organismo</h3>${tabla(["Sistema", "Qué ocurre al calentar"], [["Cardiovascular", "sube la frecuencia cardiaca y llega más sangre a los músculos"], ["Respiratorio", "aumenta la frecuencia respiratoria y el oxígeno disponible"], ["Muscular", "sube la temperatura del músculo (1-2 °C), que se vuelve más elástico"], ["Articular", "se produce más líquido sinovial, que lubrica las articulaciones"], ["Nervioso", "los impulsos viajan más rápido: mejoran reflejos y coordinación"]])}<p>Por eso al terminar un buen calentamiento notas el cuerpo caliente, el pulso algo acelerado (unas <b>110-130 pulsaciones</b> por minuto) y una ligera sudoración.</p>`,
      svg: svg("Gráfica de la frecuencia cardiaca: sube poco a poco durante el calentamiento hasta unas 120 pulsaciones antes de la actividad principal", `<path d="M30 150 H 240 M30 150 V 24" stroke="var(--muted)" stroke-width="2"/><path d="M30 130 C 60 128 80 112 110 96 S 130 90 140 88 L 150 60 C 170 52 200 54 236 56" fill="none" stroke="var(--red)" stroke-width="3"/>
        <rect x="30" y="24" width="110" height="126" fill="var(--sun)" fill-opacity=".12"/>${t(85, 40, "calentamiento", { c: "var(--sun)", s: 11 })}${t(192, 40, "actividad", { c: "var(--red)", s: 11 })}${t(26, 92, "120", { s: 10, a: "end" })}${t(26, 134, "70", { s: 10, a: "end" })}${t(136, 168, "tiempo", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Calentamiento general y específico</h3><ul><li><b>General</b>: ejercicios que activan <b>todo el cuerpo</b> y sirven para cualquier deporte: carrera suave, movilidad articular, estiramientos dinámicos, desplazamientos variados. Dura unos <b>8-12 minutos</b>.</li><li><b>Específico</b>: ejercicios relacionados con la <b>actividad concreta</b> que se va a hacer: botes y tiros en baloncesto, toques y saques en voleibol, golpeos suaves en bádminton. Dura unos <b>5-10 minutos</b> y se hace después del general.</li></ul><p>En clase de Educación Física, el general suele ser suficiente; antes de un partido o una prueba exigente se añade el específico.</p>`,
    },
    {
      html: `<h3>Las fases del calentamiento general</h3><p>Se recomienda seguir un orden de lo más suave a lo más intenso:</p><ol><li><b>Activación cardiovascular</b>: carrera continua suave o desplazamientos (2-4 min).</li><li><b>Movilidad articular</b>: rotaciones de tobillos, rodillas, cadera, tronco, hombros, muñecas y cuello, de abajo arriba o de arriba abajo (2-3 min).</li><li><b>Estiramientos dinámicos</b>: movimientos amplios y controlados, sin rebotes bruscos: zancadas, balanceos de piernas, círculos de brazos (2-3 min).</li><li><b>Ejercicios de mayor intensidad</b>: skipping, talones al glúteo, saltos, cambios de dirección y algún sprint corto (2-3 min).</li></ol>`,
      svg: svg("Cuatro fases del calentamiento general de menor a mayor intensidad: activación, movilidad, estiramientos dinámicos e intensidad", chips([["1. Activación", "carrera suave · desplazamientos", "var(--pen)"], ["2. Movilidad articular", "tobillos → cuello", "var(--leaf)"], ["3. Estiramientos dinámicos", "zancadas · balanceos", "var(--sun)"], ["4. Más intensidad", "skipping · saltos · sprints", "var(--red)"]], 8, 36), 180),
      video: { id: "oM7DADETvrQ", titulo: "Fases del calentamiento", canal: "ullesportiu", vistas: 240809 },
    },
    {
      html: `<h3>Principios para calentar bien</h3><ul><li><b>Progresión</b>: empezar suave e ir aumentando la intensidad.</li><li><b>Globalidad</b>: trabajar todas las partes del cuerpo, insistiendo en las que más se van a usar.</li><li><b>Duración adecuada</b>: entre 10 y 20 minutos según la actividad, la persona y el clima. Con frío hace falta más tiempo.</li><li><b>Continuidad</b>: sin pausas largas entre ejercicios y empezando la actividad poco después de acabar (no más de 5-10 minutos).</li><li><b>Sin fatiga</b>: el calentamiento prepara, no cansa.</li><li><b>Variedad</b>: incluir juegos y ejercicios distintos para que no sea monótono.</li></ul>`,
    },
    {
      html: `<h3>Ejercicios de movilidad articular</h3><p>Se hacen con movimientos <b>suaves y amplios</b>, unas 8-10 repeticiones en cada sentido:</p>${tabla(["Articulación", "Ejercicio"], [["Tobillos", "apoyar la punta y girar el pie en círculos"], ["Rodillas", "pies juntos, manos en las rodillas, círculos suaves"], ["Cadera", "manos en la cintura, círculos amplios; abrir y cerrar la «puerta» con la pierna"], ["Tronco", "giros y flexiones laterales"], ["Hombros", "círculos de brazos hacia delante y hacia atrás"], ["Muñecas", "entrelazar los dedos y girar"], ["Cuello", "mirar a un lado y a otro, arriba y abajo; nunca círculos completos rápidos"]])}`,
      svg: svg("Muñeco haciendo círculos de brazos y otro elevando la rodilla en skipping", `${persona(80, 50, "var(--pen)", { brazos: [[-20, -12], [20, -12]] })}<circle cx="80" cy="64" r="26" fill="none" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="4 3"/>${persona(180, 50, "var(--leaf)", { piernas: [[-14, 0], [6, 26]], brazos: [[14, -10], [-12, 14]] })}${t(80, 140, "círculos de brazos", { c: "var(--pen)", s: 11 })}${t(180, 140, "skipping", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>La vuelta a la calma</h3><p>Al terminar la actividad no hay que pararse de golpe. La <b>vuelta a la calma</b> (5-10 minutos) ayuda a:</p><ul><li>Bajar poco a poco la <b>frecuencia cardiaca</b> y la respiración.</li><li>Eliminar sustancias de desecho de los músculos.</li><li>Recuperar la <b>flexibilidad</b> y reducir la rigidez del día siguiente.</li><li>Relajarse física y mentalmente.</li></ul><p>Se hace con carrera muy suave o caminando, <b>estiramientos estáticos</b> (mantener cada posición 15-30 segundos sin rebotes) y ejercicios de respiración o relajación.</p>`,
    },
    {
      html: `<h3>Diseña tu propio calentamiento</h3><p>En 2.º de ESO se espera que sepas dirigir un calentamiento general al grupo. Una propuesta de <b>10 minutos</b>:</p><ol><li>2 min de carrera suave alrededor de la pista, cambiando de sentido a la señal.</li><li>2 min de movilidad: tobillos, rodillas, cadera, tronco, hombros, cuello.</li><li>2 min de desplazamientos: lateral, de espaldas, skipping, talones al glúteo.</li><li>2 min de estiramientos dinámicos: zancadas con giro, balanceos de piernas.</li><li>2 min de juego activo: «pilla-pilla» o pases en movimiento, con algún sprint corto.</li></ol><p>Al dirigirlo, colócate donde todos te vean, explica y <b>demuestra</b> cada ejercicio, cuenta en voz alta y anima al grupo.</p>`,
      video: { id: "MPzfQMxrjdQ", titulo: "Calentamiento para hacer ejercicio (5 min)", canal: "Viviendo Fit", vistas: 11878073 },
    },
  ],
  figura: {
    titulo: "El calentamiento en un vistazo",
    svg: filas("Resumen: objetivos, efectos, general y específico, cuatro fases, principios y vuelta a la calma", [["Para qué", "prevenir lesiones · rendir más · concentrarse", "var(--red)"], ["Efectos", "más pulso, temperatura y elasticidad", "var(--sun)"], ["Tipos", "general (todo el cuerpo) · específico", "var(--pen)"], ["Fases", "activación → movilidad → dinámicos → intensidad", "var(--leaf)"], ["Principios", "progresivo · global · 10-20 min · sin fatiga", "var(--inf)"], ["Vuelta a la calma", "caminar · estirar · respirar", "var(--ink)"]], 200),
  },
  video: { id: "vwr-HLVMtRY", titulo: "El calentamiento", canal: "Educación Física y más", vistas: 222779, megusta: 0, busqueda: "el calentamiento educación física" },
  quiz: mezcla([
    { q: "El calentamiento sirve sobre todo para…", o: ["prevenir lesiones y rendir más", "cansarse antes", "perder peso"], a: 0, e: "Preparar el cuerpo." },
    { q: "Al calentar, la temperatura del músculo…", o: ["sube", "baja", "no cambia"], a: 0, e: "Más elasticidad." },
    { q: "El líquido que lubrica las articulaciones es el…", o: ["sinovial", "sudor", "plasma"], a: 0, e: "Aumenta al calentar." },
    { q: "Un calentamiento con botes y tiros a canasta es…", o: ["específico", "general", "vuelta a la calma"], a: 0, e: "Relacionado con el deporte." },
    { q: "La primera fase del calentamiento general es…", o: ["la activación cardiovascular", "el sprint", "los estiramientos estáticos"], a: 0, e: "Carrera suave." },
    { q: "Un calentamiento debe durar aproximadamente…", o: ["10-20 minutos", "1 minuto", "1 hora"], a: 0, e: "Depende de la actividad." },
    { q: "Con frío, el calentamiento debe ser…", o: ["más largo", "más corto", "igual"], a: 0, e: "Cuesta más subir la temperatura." },
    { q: "En el calentamiento se recomiendan estiramientos…", o: ["dinámicos", "con rebotes bruscos", "muy largos y estáticos"], a: 0, e: "Movimientos controlados." },
    { q: "La vuelta a la calma sirve para…", o: ["recuperar el reposo poco a poco", "acelerar el pulso", "calentar"], a: 0, e: "Final de la sesión." },
    { q: "El calentamiento debe…", o: ["preparar sin cansar", "agotar", "ser lo más intenso posible"], a: 0, e: "Sin fatiga." },
  ]),
  examen: mezcla([
    { q: "Al acabar un buen calentamiento, el pulso suele estar en torno a…", o: ["110-130 ppm", "60 ppm", "200 ppm"], a: 0, e: "Activado pero sin fatiga." },
    { q: "En la vuelta a la calma, cada estiramiento estático se mantiene…", o: ["15-30 segundos", "2 segundos", "5 minutos"], a: 0, e: "Sin rebotes." },
    { q: "¿Qué orden es correcto?", o: ["general → específico → actividad", "específico → general → actividad", "actividad → general"], a: 0, e: "De global a concreto." },
  ]),
  feynman: ["Para qué sirve el calentamiento", "Qué cambia en el cuerpo al calentar", "Diferencia entre calentamiento general y específico", "Las fases del calentamiento general", "Qué es la vuelta a la calma"],
  mapa: mapa("CALENTAMIENTO", "var(--eso)", [
    ["Objetivos", "lesiones · rendimiento", "var(--red)"],
    ["Tipos", "general · específico", "var(--pen)"],
    ["Fases", "activar · movilidad · intensidad", "var(--leaf)"],
    ["Vuelta a la calma", "bajar · estirar", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Calentamiento", "Ejercicios suaves y progresivos antes de la actividad."],
    ["General", "Activa todo el cuerpo; vale para cualquier deporte."],
    ["Específico", "Ejercicios propios del deporte que se va a practicar."],
    ["Movilidad articular", "Movimientos amplios de las articulaciones."],
    ["Estiramiento dinámico", "Movimiento amplio y controlado, sin rebotes."],
    ["Progresión", "De menos a más intensidad."],
    ["Duración", "Entre 10 y 20 minutos."],
    ["Vuelta a la calma", "Bajar el ritmo y estirar al final."],
  ],
  familias: ["Antes de un paseo en bici o un partido, haced juntos 5 minutos de movilidad.", "Pedidle que os dirija el calentamiento que ha aprendido en clase.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El calentamiento general y específico: efectos, fases y principios; vuelta a la calma; elaboración y dirección autónoma de calentamientos (RD 217/2022, Educación Física, vida activa y saludable; autorregulación).",
    ideas: ["Fichas de calentamiento que cada grupo diseña y dirige.", "Tomar el pulso antes y después del calentamiento.", "Banco de juegos de activación propuesto por el alumnado."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes: actividad física y salud", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Diseña el calentamiento específico para un partido de voleibol tras el general.", pasos: ["Movilidad específica de hombros y muñecas.", "Toques de dedos y antebrazos por parejas.", "Saques suaves y algunos remates."], resultado: "Unos 8 minutos de ejercicios con balón propios del voleibol." },
    { enunciado: "Tu compañero empieza a correr a tope nada más llegar. ¿Qué principio no respeta y qué le dirías?", pasos: ["No respeta la progresión.", "Los músculos aún están fríos y poco elásticos.", "Debe empezar con carrera suave e ir subiendo."], resultado: "Que empiece suave: el calentamiento es progresivo." },
    { enunciado: "Tomas el pulso antes del calentamiento (72 ppm) y al acabarlo (124 ppm). ¿Es correcto?", pasos: ["El pulso ha subido de forma clara.", "Está en la zona habitual de 110-130 ppm.", "No llega a niveles de fatiga."], resultado: "Sí: el calentamiento ha sido adecuado." },
  ],
  errores: [
    "Saltarse el calentamiento porque «no hay tiempo».",
    "Empezar con sprints o ejercicios intensos.",
    "Hacer estiramientos con rebotes bruscos.",
    "Calentar tanto que se llega cansado a la actividad.",
    "Dejar pasar mucho tiempo entre el calentamiento y la actividad.",
    "Pararse de golpe al terminar sin vuelta a la calma.",
  ],
  ejercicios: [
    { q: "Escribe los tres objetivos del calentamiento.", sol: "Prevenir lesiones, mejorar el rendimiento y preparar la mente." },
    { q: "Explica dos efectos del calentamiento en el cuerpo.", sol: "Sube la frecuencia cardiaca y la temperatura muscular (o más líquido sinovial, mejores reflejos…)." },
    { q: "¿Qué diferencia hay entre el calentamiento general y el específico?", sol: "El general activa todo el cuerpo; el específico prepara para un deporte concreto." },
    { q: "Ordena las fases: estiramientos dinámicos, carrera suave, skipping, movilidad.", sol: "Carrera suave, movilidad, estiramientos dinámicos, skipping." },
    { q: "Escribe un ejercicio de movilidad para cada articulación: tobillo, cadera, hombro.", sol: "Círculos con la punta del pie; círculos de cadera; círculos de brazos." },
    { q: "¿Por qué en invierno hay que calentar más tiempo?", sol: "Porque cuesta más elevar la temperatura del cuerpo y de los músculos." },
    { q: "Nombra tres principios del calentamiento.", sol: "Progresión, globalidad, continuidad (o duración adecuada, sin fatiga, variedad)." },
    { q: "Diseña un calentamiento específico para bádminton.", sol: "Movilidad de hombro y muñeca, desplazamientos en pista, golpeos suaves de derecha y revés, saques." },
    { q: "¿Qué tipo de estiramientos se hacen en la vuelta a la calma y cuánto duran?", sol: "Estáticos, de 15 a 30 segundos cada uno." },
    { q: "Dirige a tu grupo un calentamiento general de 10 minutos y anota sus partes.", sol: "Respuesta abierta: activación, movilidad, dinámicos e intensidad." },
  ],
};
