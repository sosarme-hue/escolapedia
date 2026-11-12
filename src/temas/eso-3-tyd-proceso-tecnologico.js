// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "El proceso tecnológico y el proyecto",
  minutos: 50,
  objetivos: ["Explicar qué es la tecnología y su relación con la ciencia y la sociedad", "Describir y aplicar las fases del proceso tecnológico", "Elaborar la documentación de un proyecto: memoria, planos, presupuesto y planificación", "Trabajar en equipo con roles, normas de seguridad en el taller y evaluación del producto"],
  claves: ["tecnología", "necesidad", "proceso tecnológico", "diseño", "prototipo", "memoria técnica", "presupuesto", "evaluación"],
  pregunta: {
    texto: "Antes de existir la cremallera, la gente se abrochaba con botones, cordones y ganchos. Whitcomb Judson presentó un primer cierre en 1893, pero se atascaba y se abría solo. Tardaron veinte años en que funcionara bien. ¿Cómo se pasa de una idea a un objeto que funciona?",
    respuesta: "Siguiendo un <mark>proceso tecnológico</mark>: identificar el problema, buscar información, diseñar varias soluciones, construir un <mark>prototipo</mark>, probarlo y corregir los fallos. Ese ciclo de diseñar, construir, probar y mejorar es lo que hacen los equipos de ingeniería, y lo que harás en el taller.",
  },
  bloques: [
    {
      html: `<h3>Qué es la tecnología</h3><p>La <mark>tecnología</mark> es el conjunto de conocimientos, técnicas y recursos que el ser humano utiliza para <b>diseñar y construir objetos, máquinas y sistemas</b> que resuelven problemas o satisfacen necesidades. Las necesidades pueden ser básicas, como alimentarse, abrigarse o curarse, o de otro tipo, como comunicarse, desplazarse o divertirse. La tecnología se diferencia de la <b>ciencia</b> en su objetivo: la ciencia busca <b>conocer</b> y explicar cómo funciona la naturaleza; la tecnología busca <b>hacer</b>, aplicando esos conocimientos para crear soluciones. Ambas se ayudan: la ciencia aporta teorías y la tecnología aporta instrumentos, como el microscopio o el telescopio, que permiten hacer nueva ciencia.</p>`,
    },
    {
      html: `<h3>La tecnología a lo largo de la historia</h3><p>La tecnología nos acompaña desde la Prehistoria. Las primeras <b>herramientas de piedra</b>, el dominio del <b>fuego</b> y la <b>rueda</b> cambiaron la forma de vivir. La <b>agricultura</b> y la <b>metalurgia</b> permitieron las primeras ciudades. La <b>imprenta</b> de Gutenberg (hacia 1450) difundió el conocimiento. La <mark>Revolución Industrial</mark>, a partir del siglo XVIII, trajo la máquina de vapor, las fábricas y el ferrocarril. En el siglo XX llegaron la electricidad en los hogares, el automóvil, el avión, la radio, la televisión y los ordenadores. Hoy vivimos la <b>revolución digital</b>: internet, los teléfonos inteligentes, la inteligencia artificial y la robótica. Cada avance trajo beneficios, pero también nuevos problemas que la sociedad tuvo que resolver.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo de la tecnología: herramientas de piedra, rueda, imprenta, máquina de vapor, electricidad y era digital">${BG}
        <line x1="14" y1="96" x2="246" y2="96" stroke="var(--muted)" stroke-width="3"/>
        ${[["piedra", "−2,5 M", 26], ["rueda", "−3500", 66], ["imprenta", "1450", 106], ["vapor", "1769", 146], ["electricidad", "1880", 190], ["digital", "1990", 234]].map(([n, a, x], i) => `<circle cx="${x}" cy="96" r="6" fill="${["#8a6a4a", "#b8860b", "var(--pen)", "var(--muted)", "#e0a000", "var(--leaf)"][i]}"/>${t(x, i % 2 ? 128 : 74, n, { size: 10 })}${t(x, i % 2 ? 142 : 60, a, { size: 9, weight: 400, color: "var(--muted)" })}`).join("")}
        ${t(130, 24, "de la piedra al chip", { size: 12, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Las fases del proceso tecnológico</h3><p>Para resolver un problema técnico de forma ordenada se sigue el <mark>proceso tecnológico</mark>, que tiene varias fases. Primero, <b>identificar el problema</b> o la necesidad y fijar las condiciones que debe cumplir la solución. Segundo, <b>buscar información</b> sobre soluciones parecidas, materiales y técnicas. Tercero, <b>diseñar</b>: proponer varias ideas, con bocetos, y elegir la mejor. Cuarto, <b>planificar</b>: decidir materiales, herramientas, pasos, tiempos y reparto de tareas. Quinto, <b>construir</b> el objeto o prototipo. Sexto, <b>evaluar</b>: probar si funciona y cumple las condiciones, y proponer mejoras. Por último, <b>comunicar</b> el resultado. No es un camino recto: a menudo hay que volver atrás para corregir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del proceso tecnológico: problema, información, diseño, planificación, construcción y evaluación, con vuelta atrás si algo falla">${BG}
        ${[["problema", 14, 14], ["información", 136, 14], ["diseño", 136, 64], ["planificación", 136, 114], ["construcción", 14, 114], ["evaluación", 14, 64]].map(([n, x, y], i) => caja(x, y, 110, 34, n, ["var(--red)", "var(--pen)", "var(--leaf)", "#b8860b", "var(--muted)", "#9b59b6"][i], { size: 11 })).join("")}
        ${fl(124, 31, 134, 31)}${fl(191, 48, 191, 62)}${fl(191, 98, 191, 112)}${fl(136, 131, 126, 131)}${fl(69, 114, 69, 100)}${fl(124, 76, 134, 80, "var(--red)", 2)}
        ${t(130, 166, "si falla, se vuelve a diseñar", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "eGCkeh8B9D0", titulo: "El proceso tecnológico", canal: "Mizar", vistas: 232064 },
    },
    {
      html: `<h3>Identificar el problema y buscar información</h3><p>Una buena solución empieza por entender bien el problema. Hay que responder preguntas como: ¿qué se necesita exactamente?, ¿quién lo va a usar?, ¿dónde?, ¿qué tamaño, peso o coste máximo puede tener? Esas <b>condiciones</b> o <b>requisitos</b> se escriben en una lista que servirá después para evaluar. Por ejemplo, «diseñar un soporte para el móvil que lo sujete en vertical y horizontal, que se pueda hacer con materiales reciclados y que cueste menos de 3 euros». Después se <mark>busca información</mark>: en internet, en libros, en tiendas, observando objetos parecidos o preguntando a personas expertas. Analizar cómo están hechos otros objetos, desmontándolos si hace falta, se llama <b>análisis de objetos</b>.</p>`,
    },
    {
      html: `<h3>El diseño: de la idea al plano</h3><p>En la fase de <mark>diseño</mark> cada miembro del equipo propone ideas con <b>bocetos</b>, dibujos rápidos a mano alzada. Se pueden usar técnicas como la <b>lluvia de ideas</b>, en la que se apuntan todas las propuestas sin criticarlas. Después se comparan las ideas con los requisitos, por ejemplo con una tabla de puntos, y se elige la mejor, o se combinan varias. La idea elegida se dibuja con más detalle en un <b>croquis</b> con medidas y, finalmente, en <b>planos</b> precisos: vistas, perspectivas y despiece, a mano o con programas de <b>diseño asistido por ordenador (CAD)</b>, como Tinkercad o FreeCAD. Los planos deben tener toda la información necesaria para que cualquiera pueda construir el objeto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del boceto al plano: un boceto a mano alzada, un croquis con medidas y un plano preciso hecho con ordenador">${BG}
        ${[["boceto", 14, "var(--muted)"], ["croquis", 98, "#b8860b"], ["plano", 182, "var(--pen)"]].map(([n, x, c]) => `<rect x="${x}" y="40" width="68" height="90" rx="4" fill="#fff" stroke="${c}" stroke-width="2"/>${t(x + 34, 150, n, { size: 11, color: c })}`).join("")}
        <path d="M28 110 q 4 -30 10 -36 q 14 -4 24 2 q 6 18 2 34 q -18 4 -36 0" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <rect x="112" y="72" width="40" height="40" fill="none" stroke="#b8860b" stroke-width="2"/><line x1="112" y1="120" x2="152" y2="120" stroke="#b8860b"/>${t(132, 128, "40", { size: 8, color: "#b8860b" })}
        <rect x="196" y="72" width="40" height="40" fill="none" stroke="var(--pen)" stroke-width="1.5"/><line x1="196" y1="92" x2="236" y2="92" stroke="var(--pen)" stroke-dasharray="3 2"/><rect x="196" y="118" width="40" height="6" fill="var(--pen)" fill-opacity=".3"/>
        ${fl(84, 86, 96, 86)}${fl(168, 86, 180, 86)}${t(130, 24, "cada vez más preciso", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La planificación</h3><p>Antes de construir hay que <mark>planificar</mark>. Se hace una <b>lista de materiales</b> con las cantidades, una lista de <b>herramientas</b>, y una <b>hoja de procesos</b> con las operaciones en orden: medir y marcar, cortar, perforar, lijar, unir, pintar... Se <b>reparten las tareas</b> entre los miembros del equipo y se fija un <b>calendario</b>, por ejemplo con un <b>diagrama de Gantt</b>, una tabla con las tareas en filas y los días en columnas que muestra qué hay que hacer cada día. También se calcula el <mark>presupuesto</mark>: el coste de cada material por la cantidad usada, más el de otros recursos, para saber si el proyecto es viable. Una buena planificación evita perder tiempo y material.</p>${tabla(["Material", "Cantidad", "Precio unidad", "Total"], [["Tablero contrachapado", "1", "2,50 €", "2,50 €"], ["Listón de pino", "2", "0,80 €", "1,60 €"], ["Cola blanca", "50 g", "0,02 €/g", "1,00 €"], ["Clavos", "20", "0,01 €", "0,20 €"], ["TOTAL", "", "", "5,30 €"]])}`,
    },
    {
      html: `<h3>La construcción y la seguridad en el taller</h3><p>En la fase de <mark>construcción</mark> se fabrica el objeto o un <b>prototipo</b>, un primer modelo para comprobar que la idea funciona antes de fabricarlo de verdad. Se usan herramientas para <b>medir y marcar</b> (regla, escuadra, lápiz), <b>sujetar</b> (tornillo de banco, sargentos), <b>cortar</b> (serrucho, segueta, tijeras), <b>perforar</b> (taladro), <b>desbastar</b> (lima, lija) y <b>unir</b> (cola, clavos, tornillos). En el taller hay que seguir siempre las <b>normas de seguridad</b>: usar <b>gafas de protección</b> al cortar o taladrar, recogerse el pelo y no llevar ropa suelta, sujetar bien las piezas, no jugar con las herramientas, dejar cada una en su sitio y avisar al profesor de cualquier accidente. El orden y la limpieza también son seguridad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Herramientas del taller por función: medir y marcar, sujetar, cortar, perforar, desbastar y unir">${BG}
        ${[["medir", "regla · escuadra", "var(--pen)"], ["sujetar", "tornillo de banco", "var(--muted)"], ["cortar", "serrucho · segueta", "var(--red)"], ["perforar", "taladro", "#b8860b"], ["desbastar", "lima · lija", "#8a6a4a"], ["unir", "cola · tornillos", "var(--leaf)"]].map(([n, e, c], i) => { const x = 10 + (i % 2) * 122, y = 12 + Math.floor(i / 2) * 54; return `<rect x="${x}" y="${y}" width="116" height="46" rx="8" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>${t(x + 58, y + 20, n, { size: 12, color: c })}${t(x + 58, y + 36, e, { size: 9, weight: 400 })}`; }).join("")}</svg>`,
    },
    {
      html: `<h3>La evaluación del producto</h3><p>Cuando el objeto está construido, hay que <mark>evaluarlo</mark>. Se <b>prueba</b> en condiciones reales y se comprueba, uno por uno, si cumple los requisitos que se fijaron al principio: ¿sujeta bien el móvil?, ¿cuesta menos de 3 euros?, ¿es estable? Se anotan los <b>fallos</b> y se proponen <b>mejoras</b>. También se evalúa el <b>proceso</b>: si se cumplió el calendario, si el reparto de tareas funcionó y qué se haría de otra forma. En la industria, la evaluación incluye <b>ensayos</b> de resistencia, seguridad y duración, y el estudio de su <b>impacto ambiental</b>. Un fallo no es un fracaso: es información para mejorar. Muchos inventos famosos necesitaron cientos de prototipos.</p>`,
    },
    {
      html: `<h3>La documentación del proyecto</h3><p>Todo proyecto se recoge en una <mark>memoria técnica</mark>, un documento que permite a otras personas entender y reproducir el trabajo. Suele incluir: una <b>portada</b> con el título y los autores; un <b>índice</b>; la <b>descripción del problema</b> y los requisitos; la <b>información</b> recopilada; los <b>bocetos</b> y la justificación de la solución elegida; los <b>planos</b>; la lista de <b>materiales y herramientas</b>; la <b>hoja de procesos</b>; el <b>presupuesto</b>; la <b>evaluación</b> con las pruebas y las mejoras propuestas; y las <b>conclusiones</b>. Se elabora con un procesador de textos o una herramienta colaborativa en la nube, y se puede acompañar de una <b>presentación</b> para exponerla ante la clase.</p>`,
    },
    {
      html: `<h3>El trabajo en equipo</h3><p>Los proyectos tecnológicos casi nunca los hace una sola persona. Trabajar en <mark>equipo</mark> permite combinar habilidades y repartir el esfuerzo, pero exige organización. Es útil asignar <b>roles</b>: coordinación (organiza y vigila los plazos), secretaría (toma notas y lleva la memoria), responsable de materiales (controla el material y el orden) y responsable de seguridad (vigila las normas del taller). Los roles pueden rotar. Las claves de un buen equipo son la <b>comunicación</b>, el <b>respeto</b> a las ideas de todos, el <b>compromiso</b> con las tareas propias y la <b>resolución de conflictos</b> dialogando. Las empresas usan métodos de trabajo como <b>Scrum</b>, con tareas cortas y reuniones frecuentes para revisar el avance.</p>`,
    },
  ],
  figura: {
    titulo: "Del problema al producto",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Las fases del proceso tecnológico en fila: problema, información, diseño, planificación, construcción, evaluación, con flecha de vuelta al diseño">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${["problema", "información", "diseño", "planificar", "construir", "evaluar"].map((n, i) => caja(14 + i * 104, 64, 98, 46, n, ["var(--red)", "var(--pen)", "var(--leaf)", "#b8860b", "var(--muted)", "#9b59b6"][i], { size: 13 })).join("")}
      ${[0, 1, 2, 3, 4].map(i => fl(112 + i * 104, 87, 118 + i * 104, 87)).join("")}
      <path d="M587 112 V 164 H 222 V 116" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 4"/>${fl(222, 134, 222, 114, "var(--red)", 2.5)}
      ${t(404, 190, "si no cumple los requisitos, se rediseña", { size: 13, color: "var(--red)" })}
      ${t(320, 40, "todo queda recogido en la memoria técnica", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "po9GpSQX-ZM", titulo: "6 pasos del PROCESO TECNOLÓGICO", canal: "Tecnología con CLASE", vistas: 150436, megusta: 0, busqueda: "proceso tecnológico fases proyecto tecnología" },
  ejemplos: [
    { enunciado: "Escribe tres requisitos para un proyecto de «lámpara de escritorio con materiales reciclados».",
      pasos: ["Función: debe iluminar la zona de trabajo y poder orientarse.", "Material y coste: al menos el 70 % reciclado y menos de 8 €.", "Seguridad: la parte eléctrica a 12 V o menos y sin cables accesibles."],
      resultado: "funcionalidad, materiales y coste, y seguridad." },
    { enunciado: "Calcula el presupuesto: 3 listones a 1,20 €, 1 tablero a 3,50 €, 1 bombilla LED a 2,00 € y 1 portalámparas a 0,90 €.",
      pasos: ["Listones: 3 · 1,20 = 3,60 €.", "Sumamos: 3,60 + 3,50 + 2,00 + 0,90.", "= 10,00 €."],
      resultado: "10,00 €." },
    { enunciado: "Ordena las operaciones para hacer una caja de madera: lijar, cortar, medir y marcar, unir con cola, pintar.",
      pasos: ["Antes de cortar hay que medir y marcar.", "Después de cortar se lijan los bordes.", "Se une con cola y, al final, se pinta."],
      resultado: "medir y marcar → cortar → lijar → unir → pintar." },
  ],
  errores: [
    "Empezar a construir sin diseñar ni planificar: se pierden tiempo y material.",
    "Quedarse con la primera idea sin compararla con otras.",
    "Olvidar fijar los requisitos y no poder evaluar después si el objeto los cumple.",
    "Pensar que un prototipo que falla es un fracaso: es información para mejorar.",
    "No usar gafas ni sujetar bien las piezas en el taller.",
  ],
  ejercicios: [
    { q: "¿En qué se diferencian la ciencia y la tecnología?", sol: "La ciencia busca conocer y explicar la naturaleza; la tecnología aplica conocimientos para crear objetos y sistemas que resuelven problemas." },
    { q: "Nombra tres inventos de distintas épocas y la necesidad que resolvieron.", sol: "La rueda (transportar cargas), la imprenta (difundir libros), el teléfono móvil (comunicarse a distancia)." },
    { q: "Enumera en orden las fases del proceso tecnológico.", sol: "Identificar el problema, buscar información, diseñar, planificar, construir, evaluar y comunicar." },
    { q: "¿Qué diferencia hay entre boceto, croquis y plano?", sol: "Boceto: dibujo rápido a mano alzada. Croquis: dibujo a mano con medidas. Plano: dibujo preciso, a escala, con instrumentos o con ordenador." },
    { q: "¿Qué es un diagrama de Gantt y para qué sirve?", sol: "Una tabla con las tareas y los días que muestra cuándo se hace cada una; sirve para planificar el calendario." },
    { q: "¿Qué es un prototipo?", sol: "Un primer modelo de un objeto que se construye para comprobar que la idea funciona y detectar fallos." },
    { q: "Escribe cinco normas de seguridad en el taller.", sol: "Gafas de protección, pelo recogido, sujetar bien las piezas, no jugar con las herramientas, dejarlas en su sitio, avisar de cualquier accidente." },
    { q: "¿Qué apartados debe tener una memoria técnica?", sol: "Portada, índice, problema y requisitos, información, bocetos y solución, planos, materiales y herramientas, hoja de procesos, presupuesto, evaluación y conclusiones." },
    { q: "Propón cuatro roles para un equipo de proyecto y sus funciones.", sol: "Coordinación (organiza), secretaría (memoria), materiales (controla el material), seguridad (vigila las normas)." },
    { q: "Tu soporte para el móvil se cae cuando lo pones en horizontal. ¿En qué fase estás y qué harías?", sol: "En la evaluación; analizaría la causa (base estrecha, centro de gravedad alto), propondría una mejora y volvería a la fase de diseño." },
  ],
  quiz: [
    { q: "La tecnología busca sobre todo…", o: ["conocer la naturaleza", "resolver problemas creando objetos", "hacer experimentos"], a: 1, e: "Resolver problemas." },
    { q: "La primera fase del proceso tecnológico es…", o: ["construir", "identificar el problema", "evaluar"], a: 1, e: "Identificar el problema." },
    { q: "Un dibujo rápido a mano alzada es…", o: ["un plano", "un boceto", "un despiece"], a: 1, e: "Un boceto." },
    { q: "El diagrama de Gantt sirve para…", o: ["calcular el presupuesto", "planificar el calendario", "dibujar vistas"], a: 1, e: "Planificar en el tiempo." },
    { q: "Un primer modelo para probar una idea es…", o: ["un prototipo", "un presupuesto", "una memoria"], a: 0, e: "Un prototipo." },
    { q: "La Revolución Industrial empezó con…", o: ["la imprenta", "la máquina de vapor", "internet"], a: 1, e: "La máquina de vapor." },
    { q: "Al taladrar es obligatorio usar…", o: ["guantes de lana", "gafas de protección", "auriculares"], a: 1, e: "Gafas." },
    { q: "El documento que recoge todo el proyecto es…", o: ["la memoria técnica", "el boceto", "la factura"], a: 0, e: "La memoria técnica." },
    { q: "Para sujetar una pieza al cortarla se usa…", o: ["el tornillo de banco", "la lija", "el pincel"], a: 0, e: "El tornillo de banco." },
    { q: "CAD significa…", o: ["dibujo asistido por ordenador", "cálculo de áreas", "control automático"], a: 0, e: "Diseño asistido por ordenador." },
  ],
  examen: [
    { q: "En la evaluación se comprueba si el objeto…", o: ["cumple los requisitos", "es bonito", "es caro"], a: 0, e: "Cumple los requisitos." },
    { q: "La lluvia de ideas se usa en la fase de…", o: ["diseño", "construcción", "evaluación"], a: 0, e: "Diseño." },
    { q: "El presupuesto sirve para saber…", o: ["el coste del proyecto", "el tiempo", "los roles"], a: 0, e: "El coste." },
  ],
  feynman: ["Qué diferencia hay entre ciencia y tecnología", "Cuáles son las fases del proceso tecnológico y por qué a veces hay que volver atrás", "Qué contiene una memoria técnica"],
  mapa: mapa("PROYECTO TECNOLÓGICO", "var(--eso)", [
    ["Inicio", "problema · requisitos · información", "var(--red)"],
    ["Diseño", "bocetos · croquis · planos · CAD", "var(--leaf)"],
    ["Planificación", "materiales · Gantt · presupuesto", "#b8860b"],
    ["Final", "construir · evaluar · memoria", "var(--pen)"],
  ], 300),
  tarjetas: [
    ["Tecnología", "Conocimientos y técnicas para crear soluciones a necesidades."],
    ["Proceso tecnológico", "Problema, información, diseño, planificación, construcción, evaluación."],
    ["Requisitos", "Condiciones que debe cumplir la solución."],
    ["Boceto", "Dibujo rápido a mano alzada de una idea."],
    ["Prototipo", "Primer modelo para probar una idea."],
    ["Diagrama de Gantt", "Calendario de tareas en una tabla."],
    ["Presupuesto", "Cálculo del coste de los materiales y recursos."],
    ["Memoria técnica", "Documento que recoge todo el proyecto."],
  ],
  familias: ["Elegid un objeto de casa y analizadlo: qué necesidad resuelve, de qué materiales está hecho y cómo se podría mejorar.", "Proponed un pequeño proyecto casero (un organizador de escritorio) y haced juntos la lista de materiales y el presupuesto.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Proceso de resolución de problemas: estrategias, técnicas y marcos de resolución de problemas, fases de proyectos, documentación, presupuesto, trabajo en equipo y seguridad en el taller (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Reto exprés: la torre más alta con 20 espaguetis y cinta, siguiendo todas las fases en 30 minutos.", "Análisis de objetos cotidianos desmontando aparatos viejos.", "Memoria colaborativa en un documento compartido con roles rotatorios."],
  },
  fuentes: [RD, wiki("Proceso tecnológico", "Proceso_tecnol%C3%B3gico"), wiki("Tecnología", "Tecnolog%C3%ADa")],
  revisado: "2026-11-12",
};
