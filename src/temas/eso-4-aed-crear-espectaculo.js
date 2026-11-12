// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo, rueda } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "Crear un espectáculo",
  minutos: 60,
  objetivos: ["Planificar las fases de un proyecto escénico, de la idea al estreno", "Organizar un equipo artístico, técnico y de producción", "Elaborar un calendario de ensayos, un presupuesto y un plan de difusión", "Evaluar el proceso y el resultado de forma crítica y constructiva"],
  claves: ["proyecto", "creación colectiva", "producción", "ensayo general", "estreno", "evaluación"],
  pregunta: {
    texto: "Vuestra clase tiene tres meses para estrenar un espectáculo en el salón de actos. Hay ganas, pero nadie sabe por dónde empezar. ¿Qué hacéis primero?",
    respuesta: "Lo primero no es repartir papeles, sino decidir <mark>qué queréis contar y por qué</mark>. Después viene un plan: equipo, calendario, recursos y ensayos. Crear un espectáculo es un <b>proyecto</b> como cualquier otro, y si se organiza bien, cualquier grupo puede estrenar.",
  },
  bloques: [
    {
      html: `<h3>Un proyecto en fases</h3><p>Todo espectáculo, profesional o escolar, sigue unas fases: <b>1) idea</b> y concepto; <b>2) creación o elección del texto</b> o la coreografía; <b>3) organización</b> del equipo y del plan; <b>4) ensayos</b>; <b>5) diseño y construcción</b> de escenografía, vestuario, luz y sonido; <b>6) ensayos técnicos y general</b>; <b>7) estreno</b> y funciones; y <b>8) evaluación</b>. Muchas fases se solapan: mientras los actores ensayan, el equipo técnico construye. Lo importante es tener una <mark>visión común</mark> y un calendario.</p>`,
      svg: flujo("Fases de un espectáculo", ["idea", "texto", "equipo|y plan", "ensayos", "estreno", "evaluar"], "var(--red)"),
    },
    {
      html: `<h3>La idea: qué queremos contar</h3><p>El punto de partida puede ser una <b>obra existente</b> (adaptada a vuestro grupo), un <b>tema</b> que os preocupe (el acoso, las redes, el cambio climático), una <b>historia real</b> del barrio, un <b>poema</b>, una canción o una imagen. Conviene escribir en una frase la <mark>idea central</mark>: «Queremos mostrar cómo una mentira en redes puede destruir una amistad». Esa frase guía todas las decisiones. También hay que decidir el <b>lenguaje</b>: teatro de texto, danza, teatro físico, musical o una mezcla.</p>`,
    },
    {
      html: `<h3>La creación colectiva</h3><p>En la <b>creación colectiva</b>, el texto o la coreografía no vienen dados: el grupo los crea a partir de <mark>improvisaciones</mark>. El proceso: se elige el tema; se improvisan escenas y se graban; se seleccionan las mejores ideas; un pequeño equipo (los dramaturgos) las ordena y escribe; el grupo prueba el resultado y se corrige. Compañías como La Cuadra de Sevilla, Els Comediants o Tricicle trabajaron así. Es más lento, pero todos se sienten autores y el espectáculo habla de lo que de verdad os importa.</p>`,
      svg: flujo("Proceso de creación colectiva", ["tema", "improvisar", "elegir", "escribir", "probar"], "var(--leaf)"),
    },
    {
      html: `<h3>El equipo y sus funciones</h3><p>En un proyecto escolar cada persona puede asumir un papel, y no todos tienen que actuar:</p>${tabla(["Área", "Funciones", "Personas"], [["Dirección", "visión del montaje, ensayos, decisiones finales", "director/a y ayudante"], ["Interpretación", "actuar, bailar, cantar", "elenco"], ["Dramaturgia", "escribir o adaptar el texto", "1 o 2"], ["Escenografía y atrezo", "diseñar y construir decorado y objetos", "equipo plástico"], ["Vestuario y maquillaje", "figurines, buscar y adaptar ropa", "equipo de vestuario"], ["Luz y sonido", "diseño, música, efectos, manejo en la función", "técnicos"], ["Regiduría", "controla entradas, salidas, cambios y tiempos", "regidor/a"], ["Producción y difusión", "presupuesto, materiales, cartel, redes, sala, público", "productores"]])}`,
      video: { id: "nZEdBIlW8pE", titulo: "¿Cómo hacer una obra de teatro? Características del guion teatral", canal: "AlfabetizArte", vistas: 325808, megusta: 0 },
    },
    {
      html: `<h3>Planificación: calendario y presupuesto</h3><p>Hay que trabajar <b>hacia atrás</b> desde la fecha de estreno: si se estrena el 20 de marzo, el ensayo general será el 18, los técnicos el 16, el texto debe estar cerrado en enero… Un <mark>calendario</mark> visible en clase evita sorpresas. El <b>presupuesto</b> recoge los gastos (materiales, telas, maquillaje, impresión de carteles) y los ingresos o recursos (aportación del centro, entrada simbólica, materiales reciclados o prestados). En teatro escolar, la creatividad sustituye al dinero: reutilizar, pedir prestado, construir con cartón.</p>`,
      svg: filas("Calendario de un trimestre", [["Semanas 1-2", "idea, texto, reparto", "var(--pen)"], ["Semanas 3-8", "ensayos por escenas", "var(--leaf)"], ["Semanas 6-9", "decorado, vestuario, luz", "var(--sun)"], ["Semana 10", "ensayos técnicos y general", "var(--red)"], ["Semana 11", "estreno y evaluación", "var(--bac)"]]),
    },
    {
      html: `<h3>Los ensayos</h3><p>Los ensayos tienen una progresión. Primero, <b>lectura</b> en grupo y análisis del texto (quién quiere qué). Después, <b>ensayos de mesa</b> y de escenas sueltas, marcando movimientos. Luego se ensaya <b>sin texto en la mano</b> (hay que memorizar) y se trabaja la intención y el ritmo. Más tarde, los <b>pasadas</b> de la obra entera. Al final, los <mark>ensayos técnicos</mark> (con luz y sonido, parando para ajustar) y el <b>ensayo general</b>, sin paradas y con vestuario, como si fuera el estreno. Cada ensayo empieza con calentamiento y termina con unas notas del director.</p>`,
      svg: dos("Ensayos de interpretación y técnicos", ["Interpretación", ["lectura", "escenas sueltas", "sin texto", "intención", "pasadas"], "var(--pen)"], ["Técnicos", ["montaje", "luz y sonido", "cambios", "con vestuario", "ensayo general"], "var(--red)"]),
    },
    {
      html: `<h3>Difusión y estreno</h3><p>Para que haya público hay que darlo a conocer: <b>cartel</b> con título, fecha, hora y lugar; publicaciones en las <b>redes</b> y la web del centro; invitaciones a familias y a otros cursos; una nota para la revista o la radio local. El día del estreno conviene llegar con tiempo, hacer un calentamiento conjunto y repasar la lista de comprobación (atrezo en su sitio, vestuario, micrófonos). Los <mark>nervios</mark> son normales y dan energía. Si algo falla en escena, se sigue adelante: el público casi nunca se da cuenta. Al final, se saluda todos juntos, también el equipo técnico.</p>`,
      svg: rueda("Difusión de un espectáculo", "ESTRENO", [["cartel", "var(--red)"], ["redes", "var(--pen)"], ["web", "var(--leaf)"], ["invitaciones", "var(--sun)"], ["prensa local", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>Evaluar el proceso</h3><p>Después del estreno, el grupo hace una <mark>evaluación</mark>: qué salió bien, qué se puede mejorar y qué hemos aprendido. Se puede usar una <b>rúbrica</b> (interpretación, trabajo en equipo, cumplimiento de plazos, calidad técnica), un <b>diario de grupo</b> con lo vivido en cada ensayo, la opinión del <b>público</b> con una encuesta breve y el visionado de la <b>grabación</b>. La crítica debe ser constructiva: concreta, respetuosa y con propuestas. Un espectáculo no termina con los aplausos: termina cuando el grupo sabe qué haría mejor la próxima vez.</p>`,
    },
  ],
  figura: {
    titulo: "Hoja de ruta para estrenar",
    svg: `<svg viewBox="0 0 680 210" role="img" aria-label="Ocho pasos: idea, texto, equipo, calendario, ensayos, diseño, ensayo general y estreno con evaluación">
      <rect width="680" height="210" rx="16" fill="var(--paper)"/>
      <path d="M60 70 H 620 Q 650 70 650 105 Q 650 140 620 140 H 200" fill="none" stroke="var(--line)" stroke-width="6"/>
      ${[["Idea", 60, 70], ["Texto", 200, 70], ["Equipo", 340, 70], ["Calendario", 480, 70], ["Ensayos", 620, 140], ["Diseño", 480, 140], ["General", 340, 140], ["¡Estreno!", 200, 140]].map(([t, x, y], i) => `<circle cx="${x}" cy="${y}" r="24" fill="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--bac)", "var(--inf)", "var(--muted)", "var(--red)", "var(--hl-ink)"][i]}"/><text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" ${D}>${i + 1}</text><text x="${x}" y="${y === 70 ? 34 : 186}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      <text x="40" y="136" font-size="13" fill="var(--muted)" ${F}>y después:</text><text x="40" y="156" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>evaluar</text>
    </svg>`,
  },
  video: { id: "MCH7StNflXM", titulo: "¿Qué son las obras de teatro? ¿Cómo se hacen?", canal: "Aula365", vistas: 3020336, megusta: 0, busqueda: "cómo montar una obra de teatro escolar" },
  ejemplos: [
    { enunciado: "Escribe la idea central y el lenguaje de un espectáculo sobre el uso del móvil.", pasos: ["Tema: la dependencia del móvil entre adolescentes.", "Idea central en una frase: «Un día sin móvil puede ser el día en que más cosas te pasen».", "Lenguaje: teatro físico y danza, con pantallas simuladas con luz azul y poco texto."], resultado: "Idea clara que guía todas las decisiones del montaje." },
    { enunciado: "Calcula el calendario hacia atrás para un estreno el viernes 20 de marzo.", pasos: ["Ensayo general: miércoles 18.", "Ensayos técnicos: lunes 16 y martes 17.", "Decorado y vestuario terminados: viernes 13.", "Texto memorizado: final de febrero. Texto cerrado y reparto: mediados de enero."], resultado: "Plan inverso con fechas límite para cada fase." },
    { enunciado: "Elabora un presupuesto mínimo para una obra escolar.", pasos: ["Gastos: telas 30 €, pintura y cartón 20 €, maquillaje 15 €, impresión de carteles 10 €. Total 75 €.", "Recursos: aportación del departamento 50 €; materiales reciclados y ropa prestada por las familias.", "Falta 25 €: entrada simbólica de 1 € o venta de dulces en el descanso."], resultado: "Gastos de 75 € cubiertos con aportación del centro y una pequeña recaudación." },
  ],
  errores: [
    "Empezar repartiendo papeles sin haber decidido qué se quiere contar.",
    "Pensar que solo cuentan los que actúan: técnica, vestuario y producción son igual de importantes.",
    "Dejar la memorización del texto para la última semana.",
    "No hacer ensayo técnico ni general y descubrir los problemas el día del estreno.",
    "Pararse en escena cuando algo falla en vez de seguir adelante.",
    "Evaluar solo con «ha salido bien» o «ha salido mal», sin concretar.",
  ],
  ejercicios: [
    { q: "Escribe en orden las fases de un espectáculo.", sol: "Idea, texto o coreografía, organización del equipo y el plan, ensayos, diseño y construcción, ensayos técnicos y general, estreno y evaluación." },
    { q: "¿Por qué es importante escribir la idea central en una frase?", sol: "Porque da una visión común al grupo y guía todas las decisiones artísticas y técnicas." },
    { q: "Explica qué es la creación colectiva y sus pasos.", sol: "Crear el espectáculo en grupo a partir de improvisaciones: elegir el tema, improvisar, seleccionar ideas, escribir y probar." },
    { q: "Nombra seis funciones del equipo de un espectáculo.", sol: "Dirección, interpretación, dramaturgia, escenografía, vestuario, luz y sonido, regiduría y producción (seis cualesquiera)." },
    { q: "¿Qué hace el regidor durante la función?", sol: "Controla entradas y salidas de actores, cambios de escena y da las órdenes de luz y sonido." },
    { q: "¿Qué significa planificar «hacia atrás»?", sol: "Partir de la fecha de estreno y calcular hacia atrás las fechas límite de cada fase." },
    { q: "Diferencia ensayo técnico y ensayo general.", sol: "Técnico: se prueban luz, sonido y cambios, parando para ajustar. General: la obra entera sin paradas, con todo, como si fuera el estreno." },
    { q: "Diseña el texto de un cartel para vuestro espectáculo.", sol: "Respuesta abierta. Debe incluir título, imagen o lema, fecha, hora, lugar, precio o «entrada libre» y quién lo hace." },
    { q: "¿Qué hacer si a un actor se le olvida el texto en escena?", sol: "Seguir adelante: improvisar con sentido, que un compañero le ayude con una réplica o pasar a lo siguiente sin detener la función." },
    { q: "Propón cuatro criterios para una rúbrica de evaluación del proyecto.", sol: "Calidad de la interpretación, trabajo en equipo, cumplimiento del calendario y calidad técnica (también creatividad y respuesta del público)." },
  ],
  quiz: [
    { q: "Lo primero al crear un espectáculo es decidir…", o: ["qué queremos contar", "quién es el protagonista", "el precio"], a: 0, e: "La idea guía todo." },
    { q: "Crear el texto a partir de improvisaciones del grupo es…", o: ["creación colectiva", "adaptación", "casting"], a: 0, e: "Todos son autores." },
    { q: "El responsable del presupuesto y la difusión es…", o: ["producción", "dirección", "vestuario"], a: 0, e: "Equipo de producción." },
    { q: "Quien controla entradas y salidas en la función es el…", o: ["regidor", "figurinista", "dramaturgo"], a: 0, e: "Regiduría." },
    { q: "Planificar hacia atrás se hace desde…", o: ["la fecha de estreno", "el primer ensayo", "el reparto"], a: 0, e: "Fechas límite." },
    { q: "El ensayo como si fuera el estreno es el…", o: ["ensayo general", "ensayo de mesa", "ensayo técnico"], a: 0, e: "Sin paradas." },
    { q: "En los ensayos técnicos se prueban…", o: ["luz y sonido", "solo los textos", "las entradas"], a: 0, e: "Parando para ajustar." },
    { q: "Si algo falla en escena hay que…", o: ["seguir adelante", "parar la función", "pedir perdón al público"], a: 0, e: "El público casi nunca lo nota." },
    { q: "Una rúbrica sirve para…", o: ["evaluar con criterios", "iluminar", "escribir el texto"], a: 0, e: "Evaluación." },
    { q: "La crítica constructiva es…", o: ["concreta, respetuosa y con propuestas", "solo negativa", "anónima y dura"], a: 0, e: "Para mejorar." },
  ],
  examen: [
    { q: "Las «pasadas» son…", o: ["ensayos de la obra entera", "ensayos de una escena", "lecturas"], a: 0, e: "Para coger ritmo." },
    { q: "Al saludar al final debe salir…", o: ["todo el equipo, también técnicos", "solo el protagonista", "nadie"], a: 0, e: "Es un trabajo colectivo." },
    { q: "En teatro escolar, la falta de dinero se suple con…", o: ["creatividad y reciclaje", "cancelar", "no usar luz"], a: 0, e: "Reutilizar, pedir prestado." },
  ],
  feynman: ["Las fases de un espectáculo de la idea al estreno", "Qué es la creación colectiva", "Las funciones del equipo", "Cómo se planifica, se ensaya y se evalúa"],
  mapa: mapa("CREAR UN ESPECTÁCULO", "var(--red)", [
    ["Idea", "tema · frase central · lenguaje", "var(--pen)"],
    ["Equipo", "dirección · técnica · producción", "var(--sun)"],
    ["Plan", "calendario · presupuesto · ensayos", "var(--leaf)"],
    ["Estreno", "difusión · función · evaluación", "var(--red)"],
  ], 290),
  tarjetas: [
    ["Idea central", "Frase que resume qué quiere contar el espectáculo."],
    ["Creación colectiva", "El grupo crea el texto a partir de improvisaciones."],
    ["Regidor", "Controla entradas, salidas y cambios durante la función."],
    ["Producción", "Gestiona presupuesto, materiales, sala y difusión."],
    ["Planificar hacia atrás", "Fijar las fechas desde el estreno hacia el principio."],
    ["Ensayo técnico", "Ensayo para ajustar luz, sonido y cambios."],
    ["Ensayo general", "Último ensayo completo, como si fuera el estreno."],
    ["Rúbrica", "Tabla de criterios para evaluar el proyecto."],
  ],
  familias: ["Ayudad con materiales reciclados o ropa para el vestuario del proyecto de clase.", "Acudid al estreno y, al salir, decid algo concreto que os haya gustado.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): proyecto escénico, creación colectiva, roles del equipo, producción, difusión y evaluación.",
    ideas: ["Proyecto trimestral con estreno ante otros cursos.", "Tablero de producción con tareas, responsables y fechas.", "Diario de ensayo compartido y rúbrica coevaluada."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Centro de Documentación de las Artes Escénicas y de la Música (INAEM)", url: "https://www.teatro.es/" },
  ],
  revisado: "2026-11-12",
};
