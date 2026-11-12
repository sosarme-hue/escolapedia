// Tecnología y Digitalización 2º ESO: el proceso de resolución de problemas. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "El proceso de resolución de problemas",
  minutos: 50,
  objetivos: ["Explicar qué es la tecnología y cómo responde a necesidades humanas", "Seguir las fases del proceso tecnológico para resolver un problema", "Elaborar los documentos de un proyecto: memoria, planos, presupuesto y plan de trabajo", "Trabajar en equipo con normas de seguridad y evaluar el impacto de los productos"],
  claves: ["tecnología", "necesidad", "proceso tecnológico", "diseño", "prototipo", "memoria técnica", "presupuesto", "trabajo en equipo", "seguridad en el taller"],
  pregunta: {
    texto: "Se te cae el móvil al agua cada vez que vas a la piscina. ¿Cómo lo resolvería un ingeniero?",
    respuesta: "No empezaría a construir a lo loco. Seguiría el <mark>proceso tecnológico</mark>: definir bien el problema (proteger el móvil del agua y poder usarlo), buscar ideas (fundas, bolsas, cordones flotantes), elegir la mejor, dibujarla con medidas, planificar materiales y tiempo, construir un <b>prototipo</b>, probarlo en el agua y mejorarlo si falla.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la tecnología?</h3><p>Desde que el ser humano talló la primera piedra para cortar, ha fabricado objetos para vivir mejor. La <mark>tecnología</mark> es el conjunto de <b>conocimientos, técnicas y habilidades</b> que se usan para diseñar y construir objetos, máquinas y sistemas que <b>resuelven problemas</b> y <b>satisfacen necesidades</b> humanas. Esas necesidades pueden ser básicas (alimentarse, abrigarse, tener una vivienda, curarse) o no tan básicas (comunicarse, divertirse, desplazarse rápido). La tecnología se apoya en la <b>ciencia</b>, que explica cómo funciona el mundo, y en la <b>técnica</b>, que es el saber hacer práctico. Un puente, una bicicleta, una vacuna, una app o una silla son productos tecnológicos. Todos empezaron siendo un problema que alguien quiso resolver.</p>`,
    },
    {
      html: `<h3>Ciencia, técnica y tecnología</h3><p>Estas tres palabras se usan a menudo como si fueran lo mismo, pero no lo son. La <mark>ciencia</mark> busca <b>conocer</b>: por qué ocurren las cosas, cuáles son las leyes de la naturaleza. La <mark>técnica</mark> es el conjunto de <b>procedimientos prácticos</b> para hacer algo: serrar madera, soldar, programar. La <mark>tecnología</mark> une las dos para <b>diseñar y fabricar</b> soluciones de forma ordenada. Por ejemplo, la ciencia descubrió cómo se comporta la electricidad; la técnica enseña a pelar un cable y empalmarlo; y la tecnología usa ambas para diseñar un coche eléctrico. Las tres avanzan juntas: los nuevos instrumentos tecnológicos, como los microscopios o los telescopios, permiten nuevos descubrimientos científicos.</p>${tabla(["", "Pregunta que responde", "Ejemplo"], [["Ciencia", "¿Por qué ocurre?", "las leyes de la electricidad"], ["Técnica", "¿Cómo se hace?", "pelar y empalmar un cable"], ["Tecnología", "¿Cómo lo resuelvo?", "diseñar un coche eléctrico"]])}`,
    },
    {
      html: `<h3>Las fases del proceso tecnológico</h3><p>Para resolver un problema técnico de forma ordenada se sigue el <mark>proceso tecnológico</mark> o método de proyectos. Tiene varias fases: 1) <b>Identificar el problema</b> y la necesidad: qué hay que resolver y con qué condiciones. 2) <b>Buscar información</b> sobre soluciones que ya existen. 3) <b>Diseñar</b>: proponer varias ideas, compararlas y elegir la mejor. 4) <b>Planificar</b>: decidir materiales, herramientas, tareas, tiempos y costes. 5) <b>Construir</b> el objeto o un prototipo. 6) <b>Evaluar</b>: comprobar si funciona y cumple las condiciones. 7) <b>Comunicar</b> el resultado con una memoria y una presentación. Si algo falla, se vuelve atrás y se mejora: el proceso es un <b>ciclo</b>, no una línea recta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del proceso tecnológico en siete fases: problema, información, diseño, planificación, construcción, evaluación y comunicación; si falla, se vuelve a mejorar">${BG}
        ${["problema", "información", "diseño", "planificación", "construcción", "evaluación", "comunicación"].map((s, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 7, x = 130 + 92 * Math.cos(a), y = 92 + 60 * Math.sin(a); return `<rect x="${(x - 38).toFixed(1)}" y="${(y - 11).toFixed(1)}" width="76" height="22" rx="11" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${t(x.toFixed(1), (y + 3.5).toFixed(1), `${i + 1}. ${s}`, { size: 8.5 })}`; }).join("")}
        <path d="M152 70 A 30 30 0 1 1 108 70" stroke="var(--red)" stroke-width="2" fill="none"/>${fl(112, 66, 106, 72, "var(--red)", 2)}${t(130, 96, "mejorar", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "eGCkeh8B9D0", titulo: "El proceso tecnológico", canal: "Mizar", vistas: 232087 },
    },
    {
      html: `<h3>Definir el problema y buscar información</h3><p>La primera fase es la más importante: si el problema está mal definido, la solución no servirá. Hay que escribir con claridad <b>qué necesidad</b> se quiere cubrir y las <mark>condiciones o requisitos</mark> que debe cumplir la solución: medidas máximas, peso, precio, materiales disponibles, tiempo para construirlo, seguridad, aspecto. Por ejemplo: «Diseñar un soporte para el móvil que se pueda usar en el pupitre, que mida menos de 15 cm, que se fabrique con materiales reciclados y que cueste menos de 3 euros». Después se <b>busca información</b>: en internet, en catálogos, en tiendas, preguntando a usuarios o analizando objetos parecidos. Analizar un objeto que ya existe (cómo es, de qué está hecho, cómo funciona, cuánto cuesta) se llama <b>análisis de objetos</b> y da muchas ideas.</p>`,
    },
    {
      html: `<h3>Diseñar: de la idea al plano</h3><p>En la fase de <mark>diseño</mark> cada miembro del equipo propone ideas, sin descartar ninguna al principio (es la <b>lluvia de ideas</b>). Después se dibujan <b>bocetos</b>: dibujos rápidos a mano alzada, sin medidas exactas, que sirven para explicar la idea. Luego se comparan las propuestas con una tabla que puntúa cómo cumple cada una las condiciones, y se elige la mejor o se combinan varias. Por último se pasa la idea elegida a <b>croquis</b>, dibujos a mano alzada pero con medidas y proporciones, y a <b>planos</b>, dibujos precisos con instrumentos o con programas de diseño por ordenador (CAD), con las <b>vistas</b>, las medidas y la escala. Con los planos, cualquiera debe poder fabricar el objeto sin preguntar nada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del boceto al plano: un boceto rápido a mano, un croquis con medidas y un plano preciso con vistas y escala">${BG}
        ${[[12, "boceto"], [96, "croquis"], [180, "plano"]].map(([x, s]) => `<rect x="${x}" y="24" width="70" height="100" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${t(x + 35, 146, s, { size: 11 })}`).join("")}
        <path d="M24 100 q 4 -30 10 -40 q 14 -6 26 0 q 6 14 4 40 Z" fill="none" stroke="var(--muted)" stroke-width="2"/><path d="M30 70 q 14 -4 26 4" stroke="var(--muted)" fill="none"/>
        <path d="M106 100 l 2 -40 l 40 1 l -1 39 Z" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M106 108 h 42 M106 104 v 8 M148 104 v 8" stroke="var(--red)"/>${t(127, 120, "120", { size: 8, color: "var(--red)" })}${t(157, 56, "80", { size: 8, color: "var(--red)" })}<path d="M157 61 v 39 M153 61 h 8 M153 100 h 8" stroke="var(--red)"/>${""}
        <rect x="194" y="40" width="20" height="30" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="220" y="40" width="20" height="30" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="194" y="76" width="20" height="20" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${t(215, 116, "E 1:2", { size: 9, color: "var(--muted)" })}
        ${fl(84, 74, 94, 74, "var(--muted)", 1.5)}${fl(168, 74, 178, 74, "var(--muted)", 1.5)}${t(130, 168, "cada vez más preciso", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Planificar: materiales, tiempo y dinero</h3><p>Antes de construir hay que <mark>planificar</mark>. Se hace una <b>lista de materiales</b> con las cantidades y una <b>lista de herramientas</b>. Se divide el trabajo en <b>tareas</b> (medir, cortar, lijar, montar, pintar), se ordena y se reparte entre los miembros del equipo, indicando cuánto tiempo llevará cada una: es la <b>hoja de procesos</b> o plan de trabajo. También se calcula el <mark>presupuesto</mark>: cuánto costarán los materiales. Se multiplica la cantidad de cada material por su precio unitario y se suman todos los importes. Planificar bien evita desperdiciar material, ahorra dinero y permite terminar a tiempo. En la industria, una buena planificación decide si un producto es rentable o no.</p>${tabla(["Material", "Cantidad", "Precio unitario", "Importe"], [["Listón de pino", "2 m", "1,50 €/m", "3,00 €"], ["Contrachapado", "1 plancha", "2,40 €", "2,40 €"], ["Tornillos", "12", "0,05 €", "0,60 €"], ["Cola blanca", "1 bote", "1,20 €", "1,20 €"], ["Total", "", "", "7,20 €"]])}`,
    },
    {
      html: `<h3>Construir, evaluar y mejorar</h3><p>En la fase de <mark>construcción</mark> se fabrica el objeto siguiendo los planos y el plan de trabajo. A menudo se hace primero un <mark>prototipo</mark>: un primer modelo, a veces con materiales más baratos como el cartón, para probar si la idea funciona antes de fabricar la versión definitiva. Después se <b>evalúa</b>: se comprueba si el objeto funciona y si cumple todas las condiciones del principio. Se hacen <b>pruebas</b> y se anotan los fallos: ¿aguanta el peso?, ¿se cae?, ¿se ha pasado del presupuesto? Si algo falla, se analiza la causa y se <b>rediseña</b>. Los errores no son un fracaso, sino información para mejorar: los ingenieros prueban cientos de prototipos antes de lanzar un producto al mercado.</p>`,
      video: { id: "po9GpSQX-ZM", titulo: "6 pasos del proceso tecnológico", canal: "Tecnología con CLASE", vistas: 150442 },
    },
    {
      html: `<h3>La memoria técnica</h3><p>Al terminar, el equipo <b>comunica</b> su trabajo con una <mark>memoria técnica</mark>, un documento que recoge todo el proyecto para que otros puedan entenderlo, repetirlo o mejorarlo. Suele tener estos apartados: <b>portada</b> con el título y los autores; <b>índice</b>; <b>planteamiento del problema</b> y condiciones; <b>búsqueda de información</b>; <b>diseño</b>, con los bocetos y la justificación de la solución elegida; <b>planos</b>; <b>lista de materiales y presupuesto</b>; <b>plan de trabajo</b>; descripción de la <b>construcción</b>, con fotos; <b>evaluación</b>, con las pruebas, los problemas encontrados y las mejoras posibles; y <b>conclusiones</b>. La memoria se puede hacer con un procesador de textos o en una web, y se acompaña de una <b>presentación</b> oral con diapositivas.</p>`,
    },
    {
      html: `<h3>Trabajo en equipo y seguridad en el taller</h3><p>Los proyectos tecnológicos se hacen en <mark>equipo</mark>, como en las empresas. Conviene repartir <b>roles</b> (coordinador, secretario, responsable de material, responsable de seguridad), escuchar todas las ideas, cumplir los plazos y llevar un <b>diario</b> del proyecto. En el taller hay que respetar las <mark>normas de seguridad</mark>: usar cada herramienta solo para lo que sirve y como ha explicado el profesorado; ponerse <b>gafas de protección</b> al cortar, taladrar o lijar; sujetar bien las piezas con el tornillo de banco; no correr ni jugar; mantener el puesto ordenado y limpio; recogerse el pelo largo y no llevar colgantes ni ropa suelta cerca de máquinas; desenchufar las herramientas eléctricas antes de cambiar una pieza; y avisar enseguida de cualquier accidente, por pequeño que sea.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Señales de seguridad en el taller: uso obligatorio de gafas, uso obligatorio de guantes y peligro de cortes">${BG}
        ${[[50, "gafas"], [130, "guantes"]].map(([x, s]) => `<circle cx="${x}" cy="72" r="34" fill="#1f6fd1"/>${t(x, 132, s, { size: 11 })}`).join("")}
        <path d="M30 70 h 40 M34 70 a 8 8 0 1 0 16 0 M50 70 a 8 8 0 1 0 16 0" stroke="#fff" stroke-width="3" fill="none"/>
        <path d="M118 92 v -26 q 0 -6 5 -6 v -10 q 0 -5 4 -5 q 4 0 4 5 v 10 q 0 -12 4 -12 q 4 0 4 5 v 13 q 0 -10 4 -10 q 4 0 4 5 v 26 q 0 10 -14 10 q -15 0 -19 -15 Z" fill="#fff"/>
        <path d="M210 36 L 246 102 L 174 102 Z" fill="#ffd34d" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/><path d="M196 92 l 24 -30 M206 92 l 14 -18" stroke="var(--ink)" stroke-width="3"/>${t(210, 132, "cortes", { size: 11 })}
        ${t(130, 164, "obligatorio · peligro", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Tecnología, sociedad y medio ambiente</h3><p>Los productos tecnológicos cambian nuestra forma de vivir: la imprenta, la máquina de vapor, la electricidad, el automóvil o internet transformaron la sociedad. La tecnología tiene <b>efectos positivos</b>: más salud, más comunicación, menos trabajo físico. Pero también puede tener <b>efectos negativos</b>: contaminación, agotamiento de recursos, residuos, desigualdades o adicciones. Por eso, al diseñar, hay que pensar en todo el <mark>ciclo de vida</mark> del producto: de dónde salen los materiales, cuánta energía consume al fabricarse y al usarse, cuánto dura y qué pasa cuando se tira. El <b>diseño sostenible</b> aplica la regla de las <b>tres erres</b>: reducir, reutilizar y reciclar, y busca productos duraderos, reparables y fáciles de desmontar. También se tiene en cuenta la <b>accesibilidad</b>: que los puedan usar todas las personas.</p>`,
    },
  ],
  figura: {
    titulo: "El proyecto tecnológico paso a paso",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen del proyecto: necesidad, diseño con bocetos y planos, planificación con presupuesto, construcción de un prototipo, evaluación y memoria técnica">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Problema", "necesidad y", "condiciones", "var(--pen)"], ["Diseño", "bocetos, croquis", "y planos", "#b8860b"], ["Planificar", "materiales, tareas", "y presupuesto", "var(--red)"], ["Construir", "prototipo", "y pruebas", "var(--leaf)"], ["Comunicar", "memoria y", "presentación", "#7b3fc4"]].map(([a, b, c, col], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="40" width="112" height="150" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 56, 84, a, { size: 15, color: col, font: D })}${t(x + 56, 126, b, { size: 11, weight: 400 })}${t(x + 56, 146, c, { size: 11, weight: 400 })}${i < 4 ? fl(x + 112, 115, x + 124, 115, "var(--muted)", 2) : ""}`; }).join("")}
      ${t(320, 216, "si algo falla, se vuelve atrás y se mejora", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "6I4Mf8k7Wls", titulo: "Pasos del proceso tecnológico (Flipped Classroom)", canal: "Tecnología con CLASE", vistas: 63541, megusta: 539, busqueda: "proceso tecnológico fases" },
  ejemplos: [
    { enunciado: "Escribe el problema y tres condiciones para un proyecto de «portalápices para el aula».",
      pasos: ["Necesidad: guardar ordenados los lápices y rotuladores del pupitre.", "Condiciones: que quepan al menos 12 lápices, que no mida más de 12 cm de alto.", "Que esté hecho con material reciclado y cueste menos de 2 €."],
      resultado: "Problema bien definido con condiciones medibles." },
    { enunciado: "Calcula el presupuesto: 3 m de listón a 1,20 €/m, 1 plancha de cartón pluma a 2,50 € y 20 clavos a 0,02 € cada uno.",
      pasos: ["Listón: 3 · 1,20 = 3,60 €.", "Cartón pluma: 1 · 2,50 = 2,50 €.", "Clavos: 20 · 0,02 = 0,40 €. Total: 3,60 + 2,50 + 0,40 = 6,50 €."],
      resultado: "6,50 €." },
    { enunciado: "Un puente de palillos se rompe con 2 kg y debía aguantar 5 kg. ¿Qué haces?",
      pasos: ["Evaluación: no cumple la condición.", "Análisis: observar por dónde se ha roto (uniones, centro…).", "Rediseño: reforzar con triángulos o más palillos y volver a probar."],
      resultado: "Volver a la fase de diseño y mejorar el prototipo." },
  ],
  errores: [
    "Empezar a construir sin haber definido el problema ni hecho planos.",
    "Confundir boceto y croquis: el croquis lleva medidas.",
    "Olvidar las condiciones al evaluar: un objeto bonito que no cumple los requisitos no resuelve el problema.",
    "Calcular el presupuesto sin multiplicar por la cantidad de cada material.",
    "Pensar que un fallo en las pruebas significa que el proyecto ha fracasado: es información para mejorar.",
  ],
  ejercicios: [
    { q: "Define tecnología y pon tres ejemplos de productos tecnológicos que uses cada día.", sol: "Conjunto de conocimientos y técnicas para diseñar y construir objetos que resuelven problemas y satisfacen necesidades. Ejemplos: la bici, el móvil, la nevera (u otros válidos)." },
    { q: "Explica la diferencia entre ciencia, técnica y tecnología con un ejemplo.", sol: "La ciencia explica por qué (cómo se transmite el calor), la técnica enseña a hacer (soldar una pieza), la tecnología diseña soluciones (un frigorífico)." },
    { q: "Ordena las fases: construcción, diseño, evaluación, identificación del problema, planificación, búsqueda de información.", sol: "Identificación del problema, búsqueda de información, diseño, planificación, construcción y evaluación." },
    { q: "¿Qué es un prototipo y para qué sirve?", sol: "Un primer modelo del objeto que sirve para probar si la idea funciona antes de fabricar la versión definitiva." },
    { q: "¿Qué diferencia hay entre un croquis y un plano?", sol: "El croquis se hace a mano alzada con medidas; el plano se hace con instrumentos o con CAD, con precisión y a escala." },
    { q: "Calcula el importe de 15 tornillos a 0,08 € y 2 botes de pintura a 3,25 €.", sol: "15 · 0,08 = 1,20 €; 2 · 3,25 = 6,50 €; total 7,70 €." },
    { q: "Enumera seis apartados de una memoria técnica.", sol: "Portada, índice, planteamiento del problema, diseño, planos, presupuesto, plan de trabajo, construcción, evaluación y conclusiones (seis de ellos)." },
    { q: "Escribe cinco normas de seguridad del taller.", sol: "Usar gafas al cortar o taladrar, sujetar las piezas con el tornillo de banco, mantener el orden, no correr, recogerse el pelo, desenchufar las máquinas antes de manipularlas, avisar de cualquier accidente (cinco de ellas)." },
    { q: "Pon un efecto positivo y uno negativo del teléfono móvil en la sociedad.", sol: "Positivo: comunicación inmediata y acceso a información. Negativo: adicción, residuos electrónicos o pérdida de privacidad." },
    { q: "Explica qué es el diseño sostenible y aplica las tres erres a una botella de plástico.", sol: "Diseñar pensando en todo el ciclo de vida para reducir el impacto. Reducir: usar una cantimplora. Reutilizar: rellenarla o usarla como maceta. Reciclar: tirarla al contenedor amarillo." },
  ],
  quiz: [
    { q: "La tecnología sirve para…", o: ["solo hacer ciencia", "resolver problemas y necesidades", "hacer dibujos"], a: 1, e: "Resolver problemas." },
    { q: "La primera fase del proceso tecnológico es…", o: ["construir", "identificar el problema", "evaluar"], a: 1, e: "Identificar el problema." },
    { q: "Un dibujo rápido a mano alzada y sin medidas es un…", o: ["plano", "croquis", "boceto"], a: 2, e: "Boceto." },
    { q: "El documento que recoge todo el proyecto es la…", o: ["memoria técnica", "factura", "hoja de cálculo"], a: 0, e: "La memoria técnica." },
    { q: "Un primer modelo para probar la idea es un…", o: ["boceto", "prototipo", "presupuesto"], a: 1, e: "Prototipo." },
    { q: "El presupuesto se calcula…", o: ["sumando cantidades por precios", "contando herramientas", "midiendo piezas"], a: 0, e: "Cantidad por precio, y se suman." },
    { q: "Al taladrar hay que usar…", o: ["gafas de protección", "guantes de lana", "auriculares"], a: 0, e: "Gafas." },
    { q: "Si el prototipo falla, hay que…", o: ["abandonar", "rediseñar y volver a probar", "tirarlo"], a: 1, e: "Mejorar." },
    { q: "Los programas de diseño por ordenador se llaman…", o: ["CAD", "PDF", "USB"], a: 0, e: "CAD." },
    { q: "Las tres erres son…", o: ["reducir, reutilizar, reciclar", "romper, recoger, reparar", "rápido, ruidoso, robusto"], a: 0, e: "Reducir, reutilizar y reciclar." },
  ],
  examen: [
    { q: "La ciencia responde a la pregunta…", o: ["¿cómo se hace?", "¿por qué ocurre?", "¿cuánto cuesta?"], a: 1, e: "¿Por qué ocurre?" },
    { q: "El plan que ordena las tareas y su duración es la…", o: ["hoja de procesos", "memoria", "portada"], a: 0, e: "Hoja de procesos." },
    { q: "Analizar un objeto que ya existe sirve para…", o: ["copiarlo exacto", "obtener ideas e información", "nada"], a: 1, e: "Obtener ideas." },
  ],
  feynman: ["Qué fases tiene el proceso tecnológico y por qué es un ciclo", "Cómo se pasa de una idea a un plano", "Qué debe contener una memoria técnica"],
  mapa: mapa("PROYECTO", "var(--eso)", [
    ["Problema", "necesidad · condiciones", "var(--pen)"],
    ["Diseño", "bocetos · croquis · planos", "#b8860b"],
    ["Planificación", "materiales · tareas · presupuesto", "var(--red)"],
    ["Construcción", "prototipo · pruebas · memoria", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Tecnología", "Conocimientos y técnicas para diseñar objetos que resuelven problemas."],
    ["Proceso tecnológico", "Método ordenado: problema, información, diseño, planificación, construcción, evaluación."],
    ["Condiciones", "Requisitos que debe cumplir la solución (medidas, precio, materiales…)."],
    ["Boceto", "Dibujo rápido a mano alzada, sin medidas."],
    ["Croquis", "Dibujo a mano alzada con medidas."],
    ["Prototipo", "Primer modelo para probar la idea."],
    ["Presupuesto", "Suma de cantidad por precio de cada material."],
    ["Memoria técnica", "Documento que recoge todo el proyecto."],
  ],
  familias: ["Elegid un objeto de casa (un abrelatas, una pinza) y analizad juntos de qué está hecho y cómo funciona.", "Pensad un pequeño problema doméstico y proponed tres soluciones con bocetos.", "Repasad las normas de seguridad al usar herramientas en casa."],
  profesores: {
    saberes: "Proceso de resolución de problemas: estrategias y fases del proyecto técnico, documentación, trabajo en equipo, seguridad e impacto social y ambiental (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Proyecto por equipos: soporte de móvil con materiales reciclados con memoria y presentación.", "Análisis de objetos cotidianos con ficha guiada (forma, función, materiales, coste, impacto).", "Rúbrica de autoevaluación del trabajo en equipo."],
  },
  fuentes: [RD, wiki("Tecnología", "Tecnología"), wiki("Proceso tecnológico", "Proceso_tecnológico")],
  revisado: REV,
};
