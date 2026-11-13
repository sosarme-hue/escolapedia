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

require("./_eso3L7").libro(module.exports, {
  lectura: ["Un soporte para la tablet de la abuela", `<p>La abuela de Marta lee el periódico en una tablet, pero se le cansan las manos de sostenerla y, si la apoya en la mesa, ve las letras torcidas. Marta lo cuenta en clase de Tecnología y la profesora lo convierte en el reto del trimestre: diseñar un soporte que mantenga la tablet inclinada, que sea estable, que se pueda plegar para guardarlo en un cajón y que cueste menos de 6 euros.</p><p>El primer impulso del grupo es ponerse a cortar cartón. Pero la profesora les frena: «¿Cuánto mide la tablet? ¿Qué ángulo es cómodo para leer? ¿Cuánto pesa?». Tras medir y probar con libros apilados, descubren que el ángulo ideal está entre 60 y 70 grados y que la tablet pesa 480 gramos. Dibujan cuatro bocetos, eligen el más sencillo, hacen un prototipo de cartón pluma, lo prueban… y se vuelca. Añaden un tope trasero, lo prueban de nuevo y esta vez aguanta.</p><p>Sin saberlo, han seguido el <b>proceso tecnológico</b>: el método que usan ingenieras, diseñadores y empresas para pasar de un problema a un objeto que funciona. En este tema aprenderás cada fase, cómo planificar y presupuestar un proyecto, cómo trabajar en equipo y cómo documentarlo para que otros puedan repetirlo.</p>`],
  mas: [
    ["<h3>Qué es la tecnología</h3>", `<p>Conviene distinguir tres palabras que a menudo se confunden. La <b>técnica</b> es el saber hacer práctico de un oficio (soldar, coser, tallar), que puede aprenderse sin conocer la ciencia que lo explica. La <b>ciencia</b> busca conocer y explicar la naturaleza. La <b>tecnología</b> une ambas: usa el conocimiento científico y las técnicas para diseñar soluciones de forma ordenada. Un objeto tecnológico, por sencillo que sea, se puede analizar desde varios puntos de vista: su <b>forma</b>, su <b>función</b>, los <b>materiales</b> con que está hecho, su <b>funcionamiento</b> y su <b>impacto</b> económico y ambiental. A esto se le llama <b>análisis de objetos</b>.</p>`],
    ["<h3>Identificar el problema y buscar información</h3>", `<p>Las respuestas se convierten en una lista de <b>requisitos</b> o <b>especificaciones</b>, que conviene escribir de forma medible: no «que sea barato», sino «que cueste menos de 6 €»; no «que sea pequeño», sino «que quepa en una caja de 20 × 15 cm». Así, al final, se puede comprobar con objetividad si se han cumplido. Para buscar información se analizan <b>soluciones que ya existen</b>, se consultan catálogos, páginas web fiables y personas expertas, y se tiene en cuenta quién será el usuario: no es lo mismo un objeto para un niño que para una persona mayor o con movilidad reducida.</p>`],
    ["<h3>La planificación</h3>", `<p>El <b>diagrama de Gantt</b> es una tabla en la que cada fila es una tarea y cada columna una sesión o un día; una barra horizontal indica cuándo empieza y termina cada tarea y quién es responsable. Ayuda a ver qué tareas pueden hacerse a la vez (por ejemplo, pintar unas piezas mientras se cortan otras) y cuáles dependen de otras (no se puede unir antes de cortar). Una buena planificación deja siempre un margen para imprevistos.</p>`],
    ["<h3>La evaluación del producto</h3>", `<p>La evaluación tiene dos caras: la del <b>objeto</b> (¿funciona?, ¿cumple cada requisito?, ¿es seguro?) y la del <b>proceso</b> (¿nos organizamos bien?, ¿cumplimos el calendario y el presupuesto?, ¿qué haríamos distinto?). Si algo falla, se vuelve a la fase que corresponda: rediseñar una pieza, cambiar un material o ajustar una medida. Por eso se dice que el proceso tecnológico es <b>cíclico</b>: cada prueba aporta información para mejorar.</p>`],
  ],
  svgs: [
    ["<h3>Qué es la tecnología</h3>", "Técnica, ciencia y tecnología", [["Técnica", "saber hacer práctico"], ["Ciencia", "conocer y explicar"], ["Tecnología", "diseñar soluciones"]], "Tres palabras distintas"],
    ["<h3>Identificar el problema y buscar información</h3>", "Requisitos medibles", [["Mal: «barato»", "Bien: «menos de 6 €»"], ["Mal: «pequeño»", "Bien: «cabe en 20 × 15 cm»"], ["Mal: «resistente»", "Bien: «aguanta 500 g»"]], "Requisitos que se pueden comprobar"],
    ["<h3>La planificación</h3>", "Diagrama de Gantt sencillo", [["Diseñar", "sesiones 1 y 2 · Ana"], ["Cortar piezas", "sesiones 3 y 4 · Luis"], ["Unir y pintar", "sesiones 5 y 6 · todos"], ["Evaluar", "sesión 7 · todos"]], "Planificación por sesiones"],
    ["<h3>La evaluación del producto</h3>", "Evaluación del objeto y del proceso", [["Objeto", "¿cumple cada requisito?"], ["Proceso", "¿tiempo y coste previstos?"], ["Mejora", "volver a la fase que falló"]], "Evaluar para mejorar"],
    ["<h3>La documentación del proyecto</h3>", "Partes de la memoria técnica", [["Portada e índice", "título, equipo, fecha"], ["Diseño", "bocetos, planos, cálculos"], ["Planificación", "materiales, Gantt, coste"], ["Evaluación", "pruebas y conclusiones"]], "La memoria técnica"],
    ["<h3>El trabajo en equipo</h3>", "Roles de un equipo de proyecto", [["Coordinación", "organiza y reparte"], ["Secretaría", "redacta la memoria"], ["Material", "herramientas y piezas"], ["Seguridad", "vigila las normas"]], "Roles en el equipo"],
  ],
  bloques: [
    { tras: "<h3>La tecnología a lo largo de la historia</h3>", html: `<h3>Tecnología, sociedad y medio ambiente</h3><p>Cada avance tecnológico cambia la forma de vivir: la imprenta extendió la lectura, el ferrocarril acortó las distancias, el teléfono móvil ha cambiado cómo nos comunicamos. Pero la tecnología también tiene <b>efectos no deseados</b>: contaminación, consumo de recursos, residuos electrónicos, pérdida de empleos en algunos sectores o dependencia de las pantallas. Por eso un buen diseño no se pregunta solo «¿funciona?», sino también «¿a quién beneficia?, ¿qué impacto tiene?, ¿qué pasará con el objeto cuando deje de servir?».</p><p>El <b>desarrollo sostenible</b> pide satisfacer las necesidades actuales sin comprometer las de las generaciones futuras. En un proyecto escolar se traduce en decisiones concretas: elegir materiales reciclados o reciclables, evitar piezas que no se puedan separar, gastar la menor energía posible y diseñar objetos que se puedan <b>reparar</b>. La <b>accesibilidad</b> también forma parte de un diseño responsable: pensar en personas con poca visión, poca fuerza en las manos o en silla de ruedas mejora el objeto para todo el mundo.</p>`, svg: ["Impactos de la tecnología", [["Positivos", "salud, comunicación, confort"], ["Negativos", "residuos, contaminación"], ["Diseño responsable", "reparable, accesible, reciclable"]], "Toda tecnología tiene impacto"] },
    { tras: "<h3>El diseño: de la idea al plano</h3>", html: `<h3>Diseño asistido por ordenador y fabricación digital</h3><p>Hoy gran parte del diseño se hace con programas de <b>CAD</b> (diseño asistido por ordenador), como Tinkercad, FreeCAD o SketchUp. Permiten dibujar piezas en 3D con medidas exactas, girarlas, comprobar si encajan entre sí y obtener automáticamente las vistas y los planos. Un cambio de medida se corrige en segundos, sin volver a dibujar todo.</p><p>Esos diseños pueden enviarse a máquinas de <b>fabricación digital</b> (CAM): la <b>impresora 3D</b> fabrica una pieza depositando capas finas de plástico fundido; la <b>cortadora láser</b> corta o graba madera, cartón o metacrilato siguiendo un dibujo vectorial; la <b>fresadora CNC</b> talla piezas quitando material. Muchos institutos y ayuntamientos tienen espacios <i>maker</i> o <i>fab labs</i> con estas máquinas. La fabricación digital facilita hacer <b>prototipos rápidos</b>: se prueba, se corrige el archivo y se vuelve a fabricar.</p>`, svg: ["Del CAD a la pieza", [["Diseño CAD", "pieza 3D con medidas"], ["Archivo", "STL o SVG"], ["Máquina", "impresora 3D o láser"], ["Prototipo", "probar y corregir"]], "Fabricación digital"] },
    { tras: "<h3>La planificación</h3>", html: `<h3>El presupuesto</h3><p>El <b>presupuesto</b> calcula cuánto costará el proyecto antes de empezar, para comprobar que está dentro del límite fijado en los requisitos. Se hace una tabla con cada material o componente, la <b>cantidad</b>, el <b>precio unitario</b> y el <b>importe</b> (cantidad × precio). La suma de importes es el coste de materiales.</p><p>En una empresa real también se cuentan la <b>mano de obra</b> (horas de trabajo × precio por hora), el uso de máquinas, la energía y otros gastos generales; y sobre la suma se aplica el <b>IVA</b> (21 % en general en España). En el aula basta con los materiales, pero conviene añadir un pequeño margen (un 10 %) por si una pieza se rompe o hay que repetirla. Si el presupuesto supera el límite, hay que volver al diseño y buscar alternativas: otro material, menos piezas o piezas reutilizadas.</p>${"<table class=\"tb\"><thead><tr><th>Material</th><th>Cantidad</th><th>Precio unitario</th><th>Importe</th></tr></thead><tbody><tr><td>Cartón pluma A4</td><td>2</td><td>1,10 €</td><td>2,20 €</td></tr><tr><td>Bisagra pequeña</td><td>2</td><td>0,60 €</td><td>1,20 €</td></tr><tr><td>Cola blanca</td><td>1</td><td>1,50 €</td><td>1,50 €</td></tr><tr><td><b>Total</b></td><td></td><td></td><td><b>4,90 €</b></td></tr></tbody></table>"}`, svg: ["Cómo se calcula un presupuesto", [["Importe", "cantidad × precio unitario"], ["Materiales", "suma de importes"], ["Empresa", "+ mano de obra + IVA"]], "El presupuesto"] },
    { tras: "<h3>La evaluación del producto</h3>", html: `<h3>Innovación, patentes y licencias</h3><p>Una <b>invención</b> es una idea técnica nueva; una <b>innovación</b> es una invención que llega al mercado y se usa. Muchas innovaciones no son inventos totalmente nuevos, sino <b>mejoras</b> de objetos existentes: más ligeros, más baratos, más fáciles de usar o más sostenibles.</p><p>Para proteger una invención se solicita una <b>patente</b>, que da a su autor el derecho exclusivo de fabricarla y venderla durante 20 años a cambio de hacerla pública; en España se tramita en la Oficina Española de Patentes y Marcas. Los diseños y los nombres comerciales también se protegen (diseño industrial y marca). En el otro extremo está el <b>hardware y software libre</b>: sus autores comparten los planos o el código con licencias que permiten usarlos, modificarlos y redistribuirlos, como Arduino o muchos diseños de impresión 3D con licencias <i>Creative Commons</i>. En un proyecto escolar hay que citar siempre de dónde se han tomado ideas, imágenes o diseños.</p>`, svg: ["Proteger o compartir", [["Patente", "exclusiva 20 años"], ["Marca", "protege el nombre"], ["Licencia libre", "usar, mejorar y compartir"]], "Propiedad de las ideas"] },
  ],
  videos: [["<h3>Identificar el problema y buscar información</h3>", "procesoA"], ["<h3>La evaluación del producto</h3>", "procesoB"]],
  grupos: [3, 6, 5],
  ejemplos: [
    ["Un grupo tiene 8 € para un juguete con motor. Materiales: motor 2,50 €, portapilas 0,90 €, 2 pilas a 0,80 €, interruptor 0,60 €, madera 1,80 €. ¿Cumple? ¿Y con un 10 % de margen?", ["Pilas: 2 · 0,80 = 1,60 €.", "Total: 2,50 + 0,90 + 1,60 + 0,60 + 1,80 = 7,40 €.", "Con margen: 7,40 · 1,10 = 8,14 €."], "Cumple (7,40 € < 8 €), pero con el margen del 10 % se pasa: conviene buscar algo más barato, por ejemplo reutilizar madera."],
    ["Planifica en un diagrama de Gantt de 6 sesiones las tareas: diseñar (2 sesiones), cortar (2), unir (1), pintar (1) y evaluar (1). Pintar puede hacerse a la vez que unir otras piezas.", ["Sesiones 1-2: diseñar.", "Sesiones 3-4: cortar.", "Sesión 5: unir unas piezas y pintar otras en paralelo.", "Sesión 6: evaluar."], "El proyecto cabe en 6 sesiones gracias a hacer dos tareas en paralelo en la sesión 5."],
    ["El soporte de tablet de la lectura se vuelca hacia atrás al tocar la pantalla. Aplica el proceso tecnológico para corregirlo.", ["Evaluación: el requisito «estable» no se cumple.", "Causa: la base es corta y el centro de gravedad cae fuera de ella.", "Rediseño: alargar la base hacia atrás o añadir un tope trasero.", "Nuevo prototipo y nueva prueba."], "Se vuelve a la fase de diseño, se modifica el prototipo y se repite la evaluación: el proceso es cíclico."],
  ],
  errores: ["Escribir requisitos vagos («que sea bonito», «que sea barato») que luego no se pueden comprobar."],
  niveles: "bbbbbbmmma",
  ejercicios: [
    ["b", "Define técnica, ciencia y tecnología con un ejemplo de cada una.", "Técnica: saber hacer práctico (un carpintero que ensambla una silla). Ciencia: conocer y explicar la naturaleza (estudiar por qué la madera se dilata con la humedad). Tecnología: usar ambos para diseñar una solución (diseñar una silla plegable con piezas fabricadas en serie)."],
    ["b", "Analiza un objeto cotidiano (un sacapuntas) desde su forma, función, materiales y funcionamiento.", "Forma: pequeño prisma con un agujero cónico. Función: afilar lápices. Materiales: cuerpo de plástico o aluminio y cuchilla de acero. Funcionamiento: al girar el lápiz, la cuchilla inclinada corta virutas finas de madera y grafito."],
    ["b", "Convierte en requisitos medibles: «que sea pequeño», «que aguante», «que no sea caro».", "«Que quepa en una caja de 15 × 10 × 5 cm», «que soporte un peso de 1 kg sin deformarse», «que cueste menos de 5 €». Así se pueden comprobar con una regla, una pesa y la factura."],
    ["b", "¿Qué es la fabricación digital? Nombra tres máquinas.", "Fabricar piezas directamente a partir de un archivo de ordenador. Ejemplos: impresora 3D (añade capas de plástico), cortadora láser (corta o graba láminas) y fresadora CNC (talla quitando material)."],
    ["b", "¿Qué diferencia hay entre invención e innovación?", "Una invención es una idea técnica nueva; una innovación es una invención (o una mejora) que llega al mercado y la gente la usa."],
    ["b", "Cita tres impactos positivos y tres negativos del teléfono móvil.", "Positivos: comunicación instantánea, acceso a información, ayuda en emergencias. Negativos: residuos electrónicos, extracción de minerales como el coltán, dependencia y distracción."],
    ["m", "Calcula el presupuesto: 4 tornillos a 0,15 €, 2 listones a 1,30 €, 1 bote de pintura a 2,40 € y 1 lija a 0,50 €.", "Tornillos: 4 · 0,15 = 0,60 €. Listones: 2 · 1,30 = 2,60 €. Pintura: 2,40 €. Lija: 0,50 €. Total: 0,60 + 2,60 + 2,40 + 0,50 = 6,10 €."],
    ["m", "Un presupuesto de materiales es 25 €. Añade 2 horas de mano de obra a 12 €/h y el 21 % de IVA.", "Mano de obra: 2 · 12 = 24 €. Base: 25 + 24 = 49 €. IVA: 49 · 0,21 = 10,29 €. Total: 49 + 10,29 = 59,29 €."],
    ["m", "Ordena y explica las fases para fabricar un portalápices con un tubo de cartón reciclado.", "1) Identificar: guardar 10 lápices, estable, coste 0 €. 2) Información: ver portalápices existentes. 3) Diseño: bocetos y elegir uno con base ancha. 4) Planificación: materiales (tubo, cartón, cola) y operaciones. 5) Construcción: medir, cortar, pegar la base, decorar. 6) Evaluación: probar con 10 lápices y comprobar que no vuelca. 7) Memoria."],
    ["m", "¿Por qué se dice que el proceso tecnológico es cíclico? Pon un ejemplo.", "Porque, si la evaluación muestra que algo no cumple, se vuelve a una fase anterior (diseño, materiales…) y se repite. Ejemplo: un puente de palillos que cede se rediseña con triángulos y se vuelve a probar."],
    ["m", "Explica qué es un diagrama de Gantt y qué ventaja tiene identificar tareas en paralelo.", "Es una tabla con las tareas en filas y el tiempo en columnas, con barras que indican cuándo se hace cada tarea. Detectar tareas que pueden hacerse a la vez (pintar unas piezas mientras se cortan otras) acorta el tiempo total y aprovecha a todo el equipo."],
    ["m", "¿Qué ventajas tiene diseñar con un programa CAD frente a dibujar a mano?", "Medidas exactas, cambios rápidos sin redibujar, vistas y planos automáticos, comprobar encajes en 3D y enviar el archivo directamente a una impresora 3D o cortadora láser."],
    ["m", "¿Qué es una patente? ¿Y una licencia libre? Pon un ejemplo de producto con licencia libre.", "Patente: derecho exclusivo a fabricar y vender una invención durante 20 años a cambio de hacerla pública. Licencia libre: permite usar, modificar y compartir el diseño o el código. Ejemplo: la placa Arduino (hardware libre)."],
    ["m", "Escribe cuatro preguntas que harías para evaluar el proceso (no el objeto) de tu proyecto.", "¿Cumplimos el calendario del Gantt? ¿Gastamos lo presupuestado? ¿Cada miembro hizo su rol? ¿Qué cambiaríamos la próxima vez para trabajar mejor?"],
    ["m", "Propón dos mejoras de accesibilidad para un mando a distancia pensado para personas mayores.", "Botones grandes, con relieve y en colores contrastados; pocas funciones visibles y letras grandes. También un botón con forma distinta para encender."],
    ["a", "Tu equipo dispone de 10 sesiones y 12 € para construir una grúa. El presupuesto sale a 14,30 €. Propón tres formas de ajustarlo sin renunciar a los requisitos.", "Sustituir piezas compradas por reutilizadas (cartón, tapones, madera de cajas de fruta), cambiar un material caro por otro más barato con resistencia suficiente (contrachapado fino en lugar de listón macizo) y simplificar el diseño para reducir piezas. Después, recalcular el presupuesto."],
    ["a", "Diseña la tabla de evaluación de un soporte para tablet con 4 requisitos, cómo se comprueba cada uno y el resultado esperado.", "Inclinación entre 60° y 70° (transportador). Estable al tocar la pantalla (10 toques, no vuelca). Plegable a menos de 3 cm de grosor (regla). Coste menor de 6 € (presupuesto). Cada requisito se marca como «cumple / no cumple» con observaciones."],
    ["a", "Compara proteger con patente y compartir con licencia libre un diseño de prótesis de mano impresa en 3D. ¿Qué elegirías y por qué?", "La patente daría ingresos exclusivos al autor, pero encarecería la prótesis. La licencia libre permite que cualquier hospital o persona con impresora la fabrique y mejore a bajo coste. Para un producto social, la licencia libre multiplica su impacto; una empresa podría preferir la patente para recuperar la inversión."],
    ["a", "Analiza el ciclo de vida de una botella de plástico: materias primas, fabricación, uso y fin de vida. Propón un rediseño más sostenible.", "Materia prima: petróleo. Fabricación: inyección y soplado, con gasto energético. Uso: minutos u horas. Fin de vida: reciclaje o, en el peor caso, vertedero y océanos. Rediseño: botella reutilizable de acero o vidrio, o plástico reciclado con sistema de depósito y retorno."],
    ["a", "Redacta el índice completo de la memoria técnica de un proyecto de lámpara con materiales reciclados.", "1. Portada. 2. Índice. 3. Problema y requisitos. 4. Búsqueda de información. 5. Bocetos y solución elegida. 6. Planos y esquema eléctrico. 7. Materiales y herramientas. 8. Hoja de procesos y Gantt. 9. Presupuesto. 10. Construcción (fotos). 11. Evaluación y mejoras. 12. Conclusiones y fuentes."],
  ],
  cuartas: ["ganar dinero", "documentar", "un plano acotado", "medir piezas", "un despiece", "el ordenador", "zapatillas deportivas", "el diagrama de Gantt", "el formón", "control de averías", "pesa mucho", "evaluación final", "la calidad de los materiales"],
  quiz: [
    ["Un requisito bien escrito es…", ["«que sea bonito»", "«que cueste menos de 6 €»", "«que sea útil»", "«que guste a todos»"], 1, "Se puede medir y comprobar al final."],
    ["La tecnología se diferencia de la ciencia en que…", ["no usa conocimientos", "busca diseñar soluciones", "solo estudia la naturaleza", "es más antigua"], 1, "La ciencia explica; la tecnología aplica para resolver problemas."],
    ["El importe de un material es…", ["cantidad × precio unitario", "precio + IVA", "solo el precio unitario", "la suma de todos los materiales"], 0, "Importe = cantidad · precio unitario."],
    ["CAM significa…", ["fabricación asistida por ordenador", "cámara de vídeo", "cálculo de áreas", "control de motores"], 0, "Computer Aided Manufacturing: máquinas controladas por ordenador."],
    ["Una impresora 3D fabrica piezas…", ["quitando material", "añadiendo capas", "doblando chapa", "con moldes de arena"], 1, "Es fabricación aditiva: capa a capa."],
    ["Una patente protege una invención durante…", ["5 años", "20 años", "para siempre", "1 año"], 1, "En general, 20 años."],
    ["El proceso tecnológico es cíclico porque…", ["siempre se repite igual", "si algo falla se vuelve a una fase anterior", "no tiene final", "empieza por la evaluación"], 1, "La evaluación puede llevar a rediseñar."],
    ["Diseñar pensando en personas mayores o con discapacidad es…", ["accesibilidad", "obsolescencia", "patentar", "presupuestar"], 0, "Un diseño accesible es usable por más personas."],
    ["En la evaluación del proceso se pregunta…", ["si el objeto es bonito", "si se cumplieron plazos y presupuesto", "el precio de venta", "la marca"], 1, "Evalúa cómo se ha trabajado, no solo el resultado."],
    ["Una innovación es…", ["cualquier idea", "una invención que llega a usarse", "un plano", "una patente caducada"], 1, "La innovación llega al mercado o a los usuarios."],
  ],
  examen: [
    ["Materiales: 3 piezas a 1,50 € y 2 a 0,75 €. El total es…", ["5,25 €", "6,00 €", "4,50 €", "2,25 €"], 1, "3·1,50 = 4,50 y 2·0,75 = 1,50; total 6,00 €."],
    ["Si el prototipo no cumple un requisito, lo primero es…", ["entregarlo igual", "buscar la causa y volver a la fase adecuada", "cambiar los requisitos", "empezar otro proyecto"], 1, "La evaluación guía la mejora."],
    ["Arduino es un ejemplo de…", ["patente cerrada", "hardware libre", "marca de muebles", "programa CAD"], 1, "Sus planos se comparten con licencia libre."],
    ["Un programa de CAD sirve para…", ["calcular el IVA", "diseñar piezas con medidas exactas", "pintar", "soldar"], 1, "Diseño asistido por ordenador."],
    ["El orden correcto es…", ["construir, diseñar, evaluar", "identificar, diseñar, planificar, construir, evaluar", "planificar, identificar, construir", "evaluar, diseñar, construir"], 1, "Es el orden de las fases."],
  ],
  tarjetas: [["Requisito medible", "Condición que se puede comprobar con un número: menos de 6 €, aguanta 500 g."], ["Fabricación digital", "Fabricar piezas desde un archivo: impresora 3D, láser, CNC."], ["Patente", "Derecho exclusivo a explotar una invención durante 20 años."], ["Análisis de objetos", "Estudiar forma, función, materiales, funcionamiento e impacto."]],
  glosario: [
    ["Tecnología", "Conocimientos y técnicas para diseñar objetos y sistemas que resuelven problemas."],
    ["Técnica", "Saber hacer práctico de un oficio."],
    ["Proceso tecnológico", "Fases ordenadas para pasar de un problema a una solución construida y evaluada."],
    ["Requisito", "Condición que debe cumplir la solución; mejor si es medible."],
    ["Boceto", "Dibujo rápido a mano alzada para expresar una idea."],
    ["Croquis", "Dibujo a mano alzada con medidas y vistas."],
    ["Plano", "Dibujo técnico exacto, a escala y normalizado."],
    ["Prototipo", "Primer modelo que sirve para probar la idea."],
    ["Diagrama de Gantt", "Tabla que muestra cuándo se hace cada tarea."],
    ["Presupuesto", "Cálculo previo del coste del proyecto."],
    ["Hoja de procesos", "Lista ordenada de operaciones con herramientas y responsables."],
    ["CAD / CAM", "Diseño y fabricación asistidos por ordenador."],
    ["Memoria técnica", "Documento que recoge todo el proyecto."],
    ["Innovación", "Invención o mejora que llega a usarse."],
    ["Patente", "Protección legal exclusiva de una invención."],
    ["Licencia libre", "Permiso para usar, modificar y compartir un diseño o programa."],
  ],
  situacion: { titulo: "Un objeto que facilita la vida a una persona mayor", reto: "Diseñar y construir, en equipos de cuatro, un objeto que resuelva una dificultad real de una persona mayor de vuestro entorno (sujetar una tablet, abrir botes, encontrar las llaves…), con un coste máximo de 6 € y materiales reutilizados.", pasos: ["Entrevistar a la persona y escribir 4-5 requisitos medibles.", "Buscar soluciones existentes y hacer cada uno un boceto; elegir el mejor con una tabla de criterios.", "Preparar croquis, lista de materiales, presupuesto y diagrama de Gantt.", "Construir un prototipo, probarlo con la persona y mejorarlo.", "Redactar la memoria técnica y presentar el objeto en 3 minutos."], producto: "Prototipo funcional, memoria técnica y presentación oral.", evaluacion: ["Los requisitos son medibles y se comprueban uno a uno.", "El presupuesto no supera los 6 € y está bien calculado.", "El prototipo funciona y se ha mejorado tras las pruebas.", "La memoria está completa y el equipo ha cumplido sus roles."] },
  saberes: "proceso de resolución de problemas, estrategias de diseño y fabricación, planificación, presupuestos, documentación y trabajo cooperativo; tecnología sostenible y accesible.",
  familias: ["Elegid un objeto de casa y analizadlo juntos: forma, función, materiales y cómo funciona."],
  minutos: 110,
});
