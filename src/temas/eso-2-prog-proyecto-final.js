// Programación y robótica 2º ESO: proyecto final. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Proyecto final",
  minutos: 60,
  objetivos: ["Planificar en equipo un proyecto de programación o robótica que resuelva un reto", "Aplicar las fases del proyecto: idea, diseño, construcción, programación y pruebas", "Organizar el trabajo, el tiempo y los materiales y documentarlo en un diario y una memoria", "Presentar el proyecto y evaluar el resultado y el trabajo del equipo"],
  claves: ["proyecto", "reto", "requisitos", "equipo", "roles", "planificación", "prototipo", "diario de proyecto", "memoria", "prueba", "presentación", "evaluación"],
  pregunta: {
    texto: "¿Qué es más importante en un proyecto final: que el robot funcione perfectamente el día de la presentación o lo que el equipo ha aprendido por el camino?",
    respuesta: "Las dos cosas cuentan, pero los profesores, y también los ingenieros de verdad, valoran mucho el <b>proceso</b>: cómo se planificó, qué problemas aparecieron, cómo se resolvieron y qué se haría distinto. Un proyecto que falla en la demostración pero está bien <b>documentado</b>, con pruebas y mejoras explicadas, demuestra más aprendizaje que uno que funciona por casualidad sin que nadie sepa explicar por qué.",
  },
  bloques: [
    {
      html: `<h3>El reto: elegir un proyecto</h3><p>El <mark>proyecto final</mark> es la oportunidad de juntar todo lo aprendido en el curso: algoritmos, programación por bloques, eventos, bucles, condicionales, variables, sensores y motores. Todo empieza con un <b>reto</b>: un problema o una necesidad a la que dar respuesta. Algunas ideas: un <b>videojuego</b> educativo para alumnos de Primaria; una <b>historia interactiva</b> sobre un tema de otra asignatura; un <b>robot</b> que siga una línea o salga de un laberinto; un <b>sistema de riego automático</b> para las plantas del instituto con un sensor de humedad; una <b>alarma</b> para la puerta de la clase; un <b>semáforo</b> con pulsador para peatones; una <b>estación meteorológica</b> con micro:bit; o un <b>robot de cartón</b> con motores que haga una tarea sencilla. Al elegir, piensa en tres cosas: que os motive, que sea útil o divertido para alguien y, sobre todo, que sea <b>realista</b> con el tiempo y los materiales disponibles.</p>`,
    },
    {
      html: `<h3>Definir requisitos y formar el equipo</h3><p>Una vez elegida la idea, hay que concretar qué debe hacer exactamente. Los <mark>requisitos</mark> son las condiciones que debe cumplir el proyecto: qué funciones tendrá («el robot debe parar si encuentra un obstáculo a menos de 15 cm»), con qué materiales se hará, cuánto puede medir o costar y en qué plazo debe estar listo. Conviene distinguir lo <b>imprescindible</b> (sin lo cual el proyecto no funciona) de lo <b>deseable</b> (mejoras que se añadirán si sobra tiempo). Los proyectos se hacen en <b>equipos</b> de 3 o 4 personas, y es útil repartir <mark>roles</mark>: una persona <b>coordinadora</b>, que organiza las tareas y vigila el calendario; una <b>secretaria</b>, que lleva el diario y la documentación; una <b>responsable de materiales</b>, que los prepara y los recoge; y una <b>portavoz</b>, que presenta el proyecto. Los roles no impiden que todos programen y construyan: todos deben saber explicar cómo funciona el proyecto.</p>${tabla(["Rol", "Responsabilidad"], [["Coordinador/a", "organiza tareas y calendario, modera el equipo"], ["Secretario/a", "lleva el diario y la memoria"], ["Materiales", "prepara, cuida y recoge el material"], ["Portavoz", "presenta el proyecto y habla con el profesor"]])}`,
    },
    {
      html: `<h3>Diseñar la solución</h3><p>Antes de construir o programar se <mark>diseña</mark> la solución. Primero, una <b>lluvia de ideas</b> en la que cada uno propone soluciones sin criticarlas; después se comparan y se elige la mejor o se combinan. Luego se hacen los <b>bocetos</b> del robot o de las pantallas del juego, y una lista de <b>componentes</b>: placa, sensores, motores, cables, pilas, piezas de la estructura; o personajes, fondos y sonidos si es un proyecto de Scratch. Para la parte de programación, se dibuja el <b>diagrama de flujo</b> o se escribe el <b>pseudocódigo</b> de cada comportamiento: ¿qué hace el robot al encenderse?, ¿qué lee en cada momento?, ¿qué decisiones toma? Si hay electrónica, se dibuja el <b>esquema de conexiones</b>: qué componente va a cada pin de la placa. Un buen diseño ahorra mucho tiempo: es mucho más fácil corregir un error en un papel que en un robot ya montado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Documentos del diseño: boceto del robot, diagrama de flujo del programa, lista de materiales y esquema de conexiones">${BG}
        ${[[10, 12, "boceto", "var(--pen)"], [134, 12, "diagrama de flujo", "#b8860b"], [10, 96, "lista de materiales", "var(--leaf)"], [134, 96, "esquema de conexiones", "var(--red)"]].map(([x, y, s, c]) => `<rect x="${x}" y="${y}" width="116" height="76" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${t(x + 58, y + 68, s, { size: 9, color: c })}`).join("")}
        <rect x="42" y="24" width="50" height="22" rx="4" fill="none" stroke="var(--muted)" stroke-width="1.5"/><circle cx="50" cy="50" r="6" fill="none" stroke="var(--muted)" stroke-width="1.5"/><circle cx="84" cy="50" r="6" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
        <ellipse cx="192" cy="22" rx="14" ry="5" fill="none" stroke="var(--muted)" stroke-width="1.5"/><path d="M192 28 L 204 38 L 192 48 L 180 38 Z" fill="none" stroke="var(--muted)" stroke-width="1.5"/><rect x="178" y="52" width="28" height="8" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
        ${[0, 1, 2, 3].map((i) => `<path d="M24 ${110 + i * 10} h 6 M36 ${110 + i * 10} h 60" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
        <rect x="150" y="106" width="34" height="40" rx="3" fill="none" stroke="var(--muted)" stroke-width="1.5"/><path d="M184 114 H 214 M184 126 H 220 M184 138 H 210" stroke="var(--muted)" stroke-width="1.5"/><circle cx="216" cy="114" r="3" fill="var(--muted)"/><circle cx="222" cy="126" r="3" fill="var(--muted)"/><circle cx="212" cy="138" r="3" fill="var(--muted)"/></svg>`,
    },
    {
      html: `<h3>Planificar: tareas, tiempo y recursos</h3><p>La <mark>planificación</mark> consiste en decidir <b>qué hay que hacer, quién lo hace y cuándo</b>. Se divide el proyecto en <b>tareas</b> pequeñas y concretas (diseñar el chasis, montar los motores, programar el movimiento, programar el sensor, decorar, hacer pruebas, preparar la presentación), se asigna cada tarea a una o dos personas y se fija una <b>fecha</b> para cada una en un calendario o un tablero. Un método muy práctico es el <b>tablero de tareas</b> con tres columnas: <i>Por hacer</i>, <i>Haciendo</i> y <i>Hecho</i>, con una nota adhesiva por tarea que se va moviendo. Así todo el equipo ve de un vistazo cómo va el proyecto. Hay que contar con <b>imprevistos</b>: siempre algo tarda más de lo previsto, una pieza se rompe o un sensor no funciona. Por eso conviene dejar las últimas sesiones libres para pruebas y arreglos, y tener primero una <b>versión mínima</b> que funcione.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tablero de tareas con tres columnas: por hacer, haciendo y hecho, con notas adhesivas de tareas">${BG}
        ${[["Por hacer", 8, "var(--red)"], ["Haciendo", 92, "#b8860b"], ["Hecho", 176, "var(--leaf)"]].map(([s, x, c]) => `<rect x="${x}" y="10" width="76" height="160" rx="6" fill="${c}" fill-opacity=".08" stroke="${c}" stroke-width="1.5"/>${t(x + 38, 28, s, { size: 10.5, color: c })}`).join("")}
        ${[[14, 40, "decorar", "#ffe27a"], [14, 74, "presentación", "#ffe27a"], [98, 40, "sensor", "#ffd0a8"], [98, 74, "pruebas", "#ffd0a8"], [182, 40, "chasis", "#c8f0c8"], [182, 74, "motores", "#c8f0c8"], [182, 108, "diseño", "#c8f0c8"]].map(([x, y, s, c]) => `<rect x="${x}" y="${y}" width="64" height="26" rx="3" fill="${c}" stroke="var(--ink)" stroke-opacity=".3"/>${t(x + 32, y + 17, s, { size: 9.5 })}`).join("")}
        ${fl(80, 53, 96, 53, "var(--muted)", 1.5)}${fl(164, 53, 180, 53, "var(--muted)", 1.5)}</svg>`,
    },
    {
      html: `<h3>Construir y programar por partes</h3><p>Llega el momento de <b>construir</b> el <mark>prototipo</mark>, la primera versión real del proyecto. La regla de oro es <b>avanzar por partes y probar cada una antes de seguir</b>. En un robot, por ejemplo: primero se monta el chasis con los motores y se programa solo el movimiento (avanzar, girar, parar); cuando eso funciona, se añade el sensor y se muestra su valor en pantalla para comprobar que mide bien; después se escribe el programa que une sensor y motores; y por último se añaden los extras (luces, sonidos, decoración). Si se monta todo de golpe y no funciona, es muy difícil saber dónde está el fallo. Para la estructura se pueden usar <b>materiales reciclados</b> como cartón, tapones, palos o botellas, además de piezas de kits. Trabajad con <b>seguridad</b>: cuidado con las herramientas de corte y con la pistola de silicona, y desconectad las pilas mientras manipuláis los circuitos.</p>`,
      video: { id: "pCM4Xc0Nyns", titulo: "Sencillo robot hecho de cartón", canal: "Muy Fácil De Hacer", vistas: 1352978 },
    },
    {
      html: `<h3>Probar, depurar y mejorar</h3><p>Con el prototipo terminado empiezan las <mark>pruebas</mark>. Hay que comprobar, uno por uno, que se cumplen todos los <b>requisitos</b> definidos al principio, y apuntar el resultado en una tabla: qué se probó, qué se esperaba, qué pasó y qué se cambió. Probad en <b>condiciones distintas</b>: con más o menos luz, en otro suelo, con la batería más baja, con otra persona jugando. Cuando algo falla, se <b>depura</b>: se busca la causa (¿es la programación, el montaje, el sensor, las pilas?), se cambia <b>una sola cosa cada vez</b> y se vuelve a probar. Muchos problemas de robótica vienen de cosas sencillas: pilas gastadas, cables sueltos, un umbral mal elegido o una rueda que roza. Cada mejora que hagáis es una nueva <b>versión</b>: guardad las versiones del programa con nombres distintos (v1, v2, v3) para poder volver atrás si algo empeora.</p>${tabla(["Prueba", "Esperado", "Resultado", "Cambio"], [["Avanza en línea recta", "recto 1 m", "se desvía a la izquierda", "ajustar velocidad de un motor"], ["Para ante obstáculo", "para a 15 cm", "para a 5 cm", "subir el umbral a 20"], ["Funciona con poca luz", "sigue la línea", "se pierde", "recalibrar el sensor"]])}`,
    },
    {
      html: `<h3>Documentar: diario y memoria</h3><p>Todo proyecto debe quedar <mark>documentado</mark>. Durante el trabajo se lleva un <b>diario de proyecto</b>: en cada sesión se anota la fecha, qué se ha hecho, quién lo ha hecho, qué problemas han surgido y qué se hará en la siguiente sesión; también se hacen fotos del proceso. Al final se elabora una <mark>memoria</mark>, un documento que explica el proyecto completo y que debería permitir a otra persona entenderlo y repetirlo. Sus apartados habituales son: <b>portada</b> (título, equipo, fecha); <b>introducción</b> (el reto y los requisitos); <b>diseño</b> (bocetos, esquemas, diagramas); <b>materiales y presupuesto</b>; <b>construcción</b> (pasos con fotos); <b>programación</b> (capturas del programa explicadas); <b>pruebas</b> (la tabla de pruebas); <b>conclusiones</b> (qué funciona, qué no, qué mejoraríais); y <b>fuentes</b> (tutoriales, imágenes o código de otros que hayáis usado, siempre citados).</p>`,
    },
    {
      html: `<h3>Presentar y evaluar</h3><p>El proyecto termina con una <mark>presentación</mark> ante la clase o incluso ante otras clases o las familias. Una buena presentación dura pocos minutos y sigue un orden claro: cuál era el reto, cómo lo habéis resuelto, una <b>demostración</b> en directo (o un vídeo, por si algo falla ese día), las dificultades que encontrasteis y cómo las superasteis, y qué mejoraríais. Todos los miembros del equipo deben participar y saber responder preguntas. Después llega la <mark>evaluación</mark>, que suele hacerse con una <b>rúbrica</b> que valora el funcionamiento, la creatividad, la programación, la documentación, la presentación y el trabajo en equipo. Además de la nota del profesor, es muy útil la <b>autoevaluación</b> (qué he aportado yo, qué he aprendido) y la <b>coevaluación</b> (cómo ha funcionado el equipo). Y, si el proyecto ha quedado bien, ¡compartidlo!: en la comunidad de Scratch, en la web del centro o en una feria de ciencia y tecnología.</p>`,
      video: { id: "DGl3j8neFY8", titulo: "mBot2: cómo programar el mBot 2", canal: "Cosas de Informatica", vistas: 19760 },
    },
  ],
  figura: {
    titulo: "Las fases del proyecto final",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Fases del proyecto: reto, requisitos y equipo, diseño, planificación, construcción y programación, pruebas, documentación y presentación">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1", "Reto", "var(--pen)"], ["2", "Requisitos", "#b8860b"], ["3", "Diseño", "var(--red)"], ["4", "Planificar", SC.apa], ["5", "Construir", "var(--leaf)"], ["6", "Probar", SC.con], ["7", "Documentar", SC.sen], ["8", "Presentar", "var(--pen)"]].map(([n, s, col], i) => { const x = 22 + (i % 4) * 152; const y = 26 + Math.floor(i / 4) * 96; return `<rect x="${x}" y="${y}" width="140" height="74" rx="12" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2.5"/><circle cx="${x + 22}" cy="${y + 37}" r="13" fill="${col}"/>${t(x + 22, y + 42, n, { size: 13, color: "#fff" })}${t(x + 86, y + 42, s, { size: s.length > 14 ? 10.5 : 13 })}${i % 4 < 3 ? fl(x + 141, y + 37, x + 151, y + 37, "var(--muted)", 2) : ""}`; }).join("")}
      ${t(320, 222, "con versiones mínimas que funcionan y mejoras poco a poco", { size: 11, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "EHOyL2hd0I8", titulo: "Primeros pasos con mBot", canal: "Programamos", vistas: 19413, megusta: 0, busqueda: "proyecto robótica mBot primeros pasos" },
  ejemplos: [
    { enunciado: "Define los requisitos de un sistema de riego automático con micro:bit.",
      pasos: ["Imprescindible: medir la humedad de la tierra y activar la bomba si está seca (umbral).", "Imprescindible: parar la bomba cuando la tierra esté húmeda.", "Deseable: mostrar un icono en la pantalla y avisar con un sonido si falta agua en el depósito."],
      resultado: "Requisitos imprescindibles y deseables." },
    { enunciado: "Planifica 6 sesiones para un robot sigue-líneas.",
      pasos: ["Sesiones 1–2: diseño, esquema y montaje del chasis con motores.", "Sesiones 3–4: programar movimiento, probar sensores y programar el seguimiento.", "Sesión 5: pruebas y mejoras; sesión 6: memoria y presentación."],
      resultado: "Tareas, tiempos y margen para imprevistos." },
    { enunciado: "El robot no avanza el día de la prueba. ¿Cómo depuras?",
      pasos: ["Comprobar lo sencillo: pilas cargadas y cables bien conectados.", "Probar un programa mínimo que solo mueva los motores.", "Si eso funciona, el fallo está en el programa del sensor: mostrar sus valores y revisar el umbral."],
      resultado: "Ir de lo simple a lo complejo, cambiando una cosa cada vez." },
  ],
  errores: [
    "Elegir un proyecto demasiado ambicioso para el tiempo disponible.",
    "Empezar a construir sin diseñar ni planificar.",
    "Montar y programar todo de golpe y no saber dónde está el fallo.",
    "Dejar la documentación para el último día.",
    "Que solo una persona del equipo sepa cómo funciona el proyecto.",
  ],
  ejercicios: [
    { q: "Propón tres ideas de proyecto final y elige una justificando por qué.", sol: "Respuesta abierta: debe ser motivadora, útil y realista con el tiempo y materiales." },
    { q: "¿Qué son los requisitos de un proyecto? Distingue imprescindibles y deseables.", sol: "Condiciones que debe cumplir; los imprescindibles son necesarios para funcionar y los deseables, mejoras." },
    { q: "Nombra cuatro roles de un equipo de proyecto y su función.", sol: "Coordinador (organiza), secretario (documenta), materiales (prepara), portavoz (presenta)." },
    { q: "¿Qué documentos se preparan en la fase de diseño?", sol: "Bocetos, lista de materiales, diagrama de flujo o pseudocódigo y esquema de conexiones." },
    { q: "¿Cómo funciona un tablero de tareas?", sol: "Con columnas Por hacer, Haciendo y Hecho y una nota por tarea que se va moviendo." },
    { q: "¿Qué es un prototipo?", sol: "La primera versión real del proyecto, para probarla y mejorarla." },
    { q: "¿Por qué hay que construir y probar por partes?", sol: "Para localizar los fallos fácilmente." },
    { q: "Diseña una tabla de pruebas para un semáforo con pulsador.", sol: "Prueba (pulsar botón), esperado (pasa a rojo para coches en 3 s), resultado y cambio." },
    { q: "¿Qué apartados tiene la memoria de un proyecto?", sol: "Portada, introducción, diseño, materiales y presupuesto, construcción, programación, pruebas, conclusiones y fuentes." },
    { q: "¿Qué diferencia hay entre autoevaluación y coevaluación?", sol: "En la autoevaluación cada uno se valora a sí mismo; en la coevaluación se valora a los compañeros o al equipo." },
  ],
  quiz: [
    { q: "Un proyecto empieza con…", o: ["un reto", "la presentación", "la nota"], a: 0, e: "Problema o necesidad." },
    { q: "Las condiciones que debe cumplir el proyecto son los…", o: ["requisitos", "roles", "prototipos"], a: 0, e: "Requisitos." },
    { q: "Quien organiza tareas y calendario es el…", o: ["coordinador", "portavoz", "responsable de materiales"], a: 0, e: "Coordinador/a." },
    { q: "Antes de construir hay que…", o: ["diseñar", "presentar", "evaluar"], a: 0, e: "Diseño." },
    { q: "Un tablero de tareas tiene columnas…", o: ["por hacer, haciendo, hecho", "lunes, martes, miércoles", "sí y no"], a: 0, e: "Estado de cada tarea." },
    { q: "La primera versión real del proyecto es el…", o: ["prototipo", "boceto", "diario"], a: 0, e: "Prototipo." },
    { q: "Al depurar conviene cambiar…", o: ["una cosa cada vez", "todo a la vez", "nada"], a: 0, e: "Así se sabe qué funcionó." },
    { q: "Un fallo muy frecuente en robótica son…", o: ["pilas gastadas", "fondos de Scratch", "colores"], a: 0, e: "Revisar lo sencillo." },
    { q: "El documento final que explica el proyecto es la…", o: ["memoria", "rúbrica", "lista"], a: 0, e: "Memoria." },
    { q: "La herramienta para evaluar con criterios es la…", o: ["rúbrica", "protoboard", "LDR"], a: 0, e: "Rúbrica." },
  ],
  examen: [
    { q: "Si queda poco tiempo, lo primero es tener…", o: ["una versión mínima que funcione", "la decoración", "el vídeo"], a: 0, e: "Lo imprescindible." },
    { q: "Guardar el programa como v1, v2, v3 sirve para…", o: ["poder volver atrás", "ocupar menos", "nada"], a: 0, e: "Control de versiones." },
    { q: "En la memoria, los tutoriales usados van en…", o: ["fuentes", "portada", "presupuesto"], a: 0, e: "Siempre citados." },
  ],
  feynman: ["Cuáles son las fases de un proyecto de programación o robótica", "Por qué hay que construir y probar por partes", "Qué debe incluir la memoria y la presentación del proyecto"],
  mapa: mapa("PROYECTO", "var(--eso)", [
    ["Idear", "reto · requisitos · equipo", "var(--pen)"],
    ["Diseñar", "bocetos · diagramas · esquemas", "#b8860b"],
    ["Hacer", "construir · programar · probar", "var(--leaf)"],
    ["Comunicar", "diario · memoria · presentación", "var(--red)"],
  ], 290),
  tarjetas: [
    ["Reto", "Problema o necesidad que el proyecto resuelve."],
    ["Requisitos", "Condiciones que debe cumplir el proyecto."],
    ["Roles", "Coordinación, secretaría, materiales, portavoz."],
    ["Tablero de tareas", "Por hacer · Haciendo · Hecho."],
    ["Prototipo", "Primera versión real para probar."],
    ["Tabla de pruebas", "Prueba, esperado, resultado, cambio."],
    ["Memoria", "Documento que explica todo el proyecto."],
    ["Rúbrica", "Criterios para evaluar el proyecto."],
  ],
  familias: ["Pedid al estudiante que os presente su proyecto final en casa como ensayo.", "Ayudad a reunir materiales reciclados (cartón, tapones, botellas).", "Comentad juntos qué ha sido lo más difícil del proyecto y cómo lo resolvió el equipo."],
  profesores: {
    saberes: "Proyecto de programación y robótica: fases del proceso de resolución de problemas, trabajo cooperativo con roles, planificación, prototipado, pruebas y depuración, documentación, comunicación y evaluación (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Proyecto por retos con tablero de tareas visible en el aula.", "Feria final de proyectos abierta a otros cursos y familias.", "Rúbrica compartida desde el inicio con autoevaluación y coevaluación."],
  },
  fuentes: [RD, wiki("Gestión de proyectos", "Gestión_de_proyectos"), wiki("Robótica educativa", "Robótica_educativa")],
  revisado: REV,
};
