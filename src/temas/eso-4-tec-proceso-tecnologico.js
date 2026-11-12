// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Proceso tecnológico y proyectos",
  minutos: 35,
  objetivos: ["Aplicar las fases del proceso tecnológico a un problema real", "Planificar un proyecto con tareas, recursos, plazos y presupuesto", "Documentar, evaluar y mejorar un prototipo trabajando en equipo"],
  claves: ["necesidad", "diseño", "prototipo", "planificación", "memoria técnica", "evaluación"],
  pregunta: {
    texto: "Tu clase quiere un cargador solar para los móviles del patio. ¿Por dónde empezaríais: comprando placas solares o haciendo un dibujo?",
    respuesta: "Por ninguna de las dos. Primero hay que <mark>definir bien el problema</mark>: cuántos móviles, cuánta energía, dónde irá, cuánto dinero hay. Después se buscan ideas, se diseña, se planifica y solo entonces se construye. Es el <b>proceso tecnológico</b>, el mismo que siguen los ingenieros.",
  },
  bloques: [
    {
      html: `<h3>Las fases del proceso tecnológico</h3><p>Para resolver un problema con tecnología se siguen unas fases: 1) <b>identificar la necesidad</b> y sus condiciones; 2) <b>buscar información</b> y ver soluciones que ya existen; 3) <b>diseñar</b>: bocetos, croquis y elegir la mejor idea; 4) <b>planificar</b> materiales, herramientas y tiempos; 5) <b>construir</b> el prototipo; 6) <b>evaluar</b>, comprobar que funciona y <mark>mejorarlo</mark>; 7) <b>difundir</b> el resultado. Es un proceso <mark>cíclico</mark>: si algo falla, se vuelve atrás.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rueda de las siete fases del proceso tecnológico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${["necesidad", "información", "diseño", "planificar", "construir", "evaluar", "difundir"].map((t, i) => { const a = (i / 7) * 2 * Math.PI - Math.PI / 2, x = 130 + 88 * Math.cos(a), y = 92 + 66 * Math.sin(a); return `<rect x="${(x - 36).toFixed(1)}" y="${(y - 11).toFixed(1)}" width="72" height="22" rx="11" fill="${["var(--red)", "var(--sun)", "var(--pen)", "var(--inf)", "var(--leaf)", "var(--ink)", "var(--muted)"][i]}"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${i + 1}. ${t}</text>`; }).join("")}
        <circle cx="130" cy="92" r="26" fill="none" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/><text x="130" y="96" text-anchor="middle" font-size="16" fill="var(--muted)" ${F}>↻</text>
      </svg>`,
    },
    {
      html: `<h3>Definir el problema</h3><p>Un buen proyecto empieza por una buena pregunta. Hay que escribir las <mark>condiciones o requisitos</mark> que debe cumplir la solución: qué tiene que hacer, para quién, medidas máximas, presupuesto, seguridad, plazo… Ejemplo: «Un cargador para 4 móviles, que funcione sin enchufe, que cueste menos de 60 € y se pueda guardar en el aula». Con estas condiciones se podrán <b>comparar ideas</b> y evaluar el resultado al final.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ficha de requisitos con casillas: función, usuarios, medidas, presupuesto, seguridad y plazo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="18" width="180" height="146" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${D}>Requisitos</text>
        ${["función", "usuarios", "medidas", "presupuesto", "seguridad", "plazo"].map((t, i) => `<rect x="56" y="${52 + i * 18}" width="11" height="11" rx="2" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M58 ${58 + i * 18} l 3 3 l 6 -7" stroke="var(--leaf)" stroke-width="2" fill="none"/><text x="76" y="${62 + i * 18}" font-size="11" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Diseñar: del boceto al plano</h3><p>Las ideas se dibujan primero a mano alzada: <b>bocetos</b> rápidos para explorar muchas opciones. La mejor idea se pasa a <b>croquis</b>, con medidas aproximadas, y después a <b>planos</b> con <mark>vistas</mark> (alzado, planta y perfil) a escala, a mano o con programas de diseño asistido por ordenador (<b>CAD</b>). Para elegir entre varias ideas se usa una <b>tabla de decisión</b> que puntúa cada una según los requisitos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pieza en perspectiva y sus vistas alzado, planta y perfil">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 70 L 60 54 L 110 54 L 80 70 Z" fill="var(--sun)" opacity=".7" stroke="var(--ink)" stroke-width="1.5"/><path d="M30 70 H 80 V 120 H 30 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M80 70 L 110 54 V 104 L 80 120 Z" fill="var(--sun)" opacity=".5" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="140" y="40" width="50" height="50" fill="none" stroke="var(--pen)" stroke-width="2"/><rect x="140" y="104" width="50" height="30" fill="none" stroke="var(--pen)" stroke-width="2"/><rect x="200" y="40" width="30" height="50" fill="none" stroke="var(--pen)" stroke-width="2"/>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="70" y="140">perspectiva</text><text x="165" y="34">alzado</text><text x="165" y="150">planta</text><text x="215" y="34">perfil</text></g>
      </svg>`,
    },
    {
      html: `<h3>Planificar y construir</h3><p>Antes de cortar nada, el equipo hace un <b>plan de trabajo</b>: lista de <b>tareas</b> en orden, quién hace cada una, <b>materiales y herramientas</b>, tiempo previsto y un <mark>presupuesto</mark> con lo que cuesta cada cosa. Un <b>diagrama de Gantt</b> muestra las tareas en barras sobre un calendario. Durante la construcción se respetan las <mark>normas de seguridad</mark> del taller: gafas, ropa adecuada, herramientas en su sitio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de Gantt con cinco tareas a lo largo de cuatro semanas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="10" fill="var(--muted)" text-anchor="middle">${[1, 2, 3, 4].map((s) => `<text x="${110 + (s - 1) * 36}" y="26">sem ${s}</text>`).join("")}</g>
        <path d="M92 32 V 166 M128 32 V 166 M164 32 V 166 M200 32 V 166 M236 32 V 166" stroke="var(--line)" stroke-width="1"/>
        ${[["diseño", 0, 1, "var(--pen)"], ["materiales", 0.5, 1, "var(--sun)"], ["construir", 1.5, 1.5, "var(--leaf)"], ["probar", 2.8, 0.8, "var(--red)"], ["memoria", 3.2, 0.8, "var(--inf)"]].map(([t, s, d, c], i) => `<text x="14" y="${54 + i * 24}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text><rect x="${92 + s * 36}" y="${42 + i * 24}" width="${d * 36}" height="16" rx="4" fill="${c}"/>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Evaluar, documentar y difundir</h3><p>Al terminar, se comprueba el prototipo con los <mark>requisitos del principio</mark>: ¿funciona?, ¿cuesta lo previsto?, ¿es seguro? Se anotan los fallos y las mejoras posibles. Todo el proyecto se recoge en una <b>memoria técnica</b>: problema, ideas, planos, presupuesto, proceso, pruebas y conclusiones. Por último se <b>difunde</b>: una presentación, un vídeo o una web. Trabajar en <mark>equipo</mark> con roles claros (coordinación, diseño, construcción, documentación) es parte de la nota.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Índice de una memoria técnica con sus apartados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="56" y="16" width="148" height="152" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${D}>Memoria técnica</text>
        ${["1. El problema", "2. Ideas y diseño", "3. Planos", "4. Presupuesto", "5. Construcción", "6. Pruebas", "7. Conclusiones"].map((t, i) => `<text x="72" y="${60 + i * 15}" font-size="11" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "El proyecto en cuatro grandes pasos",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Pensar, diseñar, hacer y evaluar, con lo que se entrega en cada paso">
      <defs>${flecha("pt1", "var(--muted)")}</defs>
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Pensar", "problema y", "requisitos", "var(--red)"], ["Diseñar", "bocetos, planos", "y tabla de decisión", "var(--pen)"], ["Hacer", "plan, Gantt,", "presupuesto, prototipo", "var(--leaf)"], ["Evaluar", "pruebas, mejoras", "y memoria", "var(--sun)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 156}" y="30" width="138" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${85 + i * 156}" y="84" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${85 + i * 156}" y="130" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${85 + i * 156}" y="150" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>
          ${i < 3 ? `<path d="M${156 + i * 156} 110 H ${170 + i * 156}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#pt1)"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "eGCkeh8B9D0", titulo: "El proceso tecnológico", canal: "Mizar", vistas: 232060, megusta: 0, busqueda: "proceso tecnológico proyecto tecnología" },
  quiz: [
    { q: "¿Cuál es la primera fase del proceso tecnológico?", o: ["Construir", "Identificar la necesidad o el problema", "Comprar materiales"], a: 1, e: "Sin entender bien el problema y sus condiciones no se puede diseñar una buena solución." },
    { q: "¿Qué es un boceto?", o: ["Un plano a escala con todas las medidas", "Un dibujo rápido a mano alzada para expresar una idea", "Una foto del prototipo"], a: 1, e: "Los bocetos sirven para explorar ideas; los planos llegan después." },
    { q: "Las tres vistas principales de un objeto son…", o: ["alzado, planta y perfil", "boceto, croquis y plano", "arriba, abajo y dentro"], a: 0, e: "Alzado (de frente), planta (desde arriba) y perfil (de lado)." },
    { q: "¿Para qué sirve un diagrama de Gantt?", o: ["Para calcular el presupuesto", "Para organizar las tareas en el tiempo", "Para dibujar piezas"], a: 1, e: "Muestra cada tarea como una barra sobre un calendario." },
    { q: "¿Qué documento recoge todo el proyecto?", o: ["La memoria técnica", "El boceto", "La factura"], a: 0, e: "Incluye problema, diseño, planos, presupuesto, construcción, pruebas y conclusiones." },
  ],
  examen: [
    { q: "Si en la evaluación el prototipo no cumple un requisito, lo correcto es…", o: ["darlo por terminado", "volver a una fase anterior y mejorarlo", "cambiar los requisitos para que encaje"], a: 1, e: "El proceso tecnológico es cíclico: se corrige y se vuelve a probar." },
    { q: "Una tabla de decisión sirve para…", o: ["elegir la mejor idea según los requisitos", "repartir el dinero", "medir piezas"], a: 0, e: "Se puntúa cada idea en cada criterio y se suma." },
    { q: "¿Qué significa CAD?", o: ["Control automático de datos", "Diseño asistido por ordenador", "Cálculo de áreas y distancias"], a: 1, e: "Computer-Aided Design: programas para dibujar planos y modelos 3D." },
  ],
  feynman: ["Las fases del proceso tecnológico y por qué es cíclico", "Qué son los requisitos de un proyecto, con un ejemplo", "La diferencia entre boceto, croquis y plano", "Qué incluye un plan de trabajo", "Qué apartados tiene una memoria técnica"],
  mapa: mapa("PROCESO TECNOLÓGICO", "var(--eso)", [
    ["Problema", "necesidad · requisitos", "var(--red)"],
    ["Diseño", "bocetos · vistas · CAD", "var(--pen)"],
    ["Construcción", "plan · Gantt · presupuesto", "var(--leaf)"],
    ["Evaluación", "pruebas · memoria · difusión", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["Fases del proceso tecnológico", "Necesidad, información, diseño, planificación, construcción, evaluación y difusión."],
    ["¿Qué es un prototipo?", "Un primer modelo funcional que sirve para probar una solución antes de fabricarla."],
    ["¿Qué es un croquis?", "Un dibujo a mano alzada con las medidas principales, previo al plano."],
    ["¿Qué es un diagrama de Gantt?", "Un gráfico de barras que muestra las tareas de un proyecto en el tiempo."],
    ["¿Qué es la memoria técnica?", "El documento que recoge todo el proyecto, del problema a las conclusiones."],
  ],
  familias: ["Elegid un pequeño problema de casa (ordenar cables, un soporte para la tablet) y pasadlo por las fases del proceso.", "Pedidle que os dibuje el alzado, la planta y el perfil de un objeto de la cocina.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Proceso de resolución de problemas: fases del proyecto técnico, diseño, planificación, documentación y trabajo cooperativo (RD 217/2022, Tecnología 4º).",
    ideas: ["Reto de la torre de espaguetis y nubes con requisitos y presupuesto ficticio.", "Proyecto trimestral con roles rotativos y tablero Kanban.", "Plantilla de memoria técnica compartida en la nube para cada equipo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Diagrama de Gantt, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Diagrama_de_Gantt" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar técnicas de creatividad y criterios de decisión para elegir una solución", "Dibujar vistas, acotar y usar escalas en un plano técnico"],
  tras: {
    "Definir el problema": [
      { html: `<h3>Buscar ideas: técnicas de creatividad</h3><p>Con el problema bien definido, toca generar <b>muchas ideas</b> antes de elegir. La <b>lluvia de ideas</b> (brainstorming) funciona en grupo: durante un tiempo fijo cada persona propone todas las ideas que se le ocurran, por raras que parezcan, y <mark>nadie las critica</mark>; solo al final se ordenan y se valoran. Otras técnicas son el <b>análisis de objetos</b> parecidos que ya existen, para ver qué funciona y qué no; el <b>mapa mental</b>, que ramifica las ideas a partir del problema; o el método <b>SCAMPER</b>, que propone cambiar algo de un producto: sustituir, combinar, adaptar, modificar, darle otro uso, eliminar o reordenar. Cuantas más ideas, más fácil encontrar una buena.</p>`, video: { id: "obtZtbm45a8", titulo: "¿Cómo hacer una lluvia de ideas?", canal: "Los de enmente", vistas: 260770 } },
      { html: `<h3>Elegir la mejor solución</h3><p>Para decidir entre varias ideas de forma objetiva se usa una <b>matriz de decisión</b>. Primero se eligen los <b>criterios</b> que importan, sacados de las condiciones del problema: coste, facilidad de construcción, seguridad, estética, materiales disponibles, tiempo. Después se puntúa cada idea en cada criterio (por ejemplo, de 1 a 5) y, si algún criterio es más importante, se le da más <b>peso</b> multiplicando su puntuación. La idea con <mark>la mayor puntuación total</mark> es la elegida. Así el grupo decide con argumentos y no por quién insiste más.</p>${AMP.tabla(["Criterio (peso)", "Idea A", "Idea B", "Idea C"], [["Coste (×2)", "4 → 8", "2 → 4", "3 → 6"], ["Facilidad (×1)", "3", "5", "4"], ["Seguridad (×2)", "3 → 6", "4 → 8", "5 → 10"], ["<b>Total</b>", "<b>17</b>", "<b>17</b>", "<b>20</b>"]])}` },
    ],
    "Diseñar: del boceto al plano": [
      { html: `<h3>Vistas, acotación y escalas</h3><p>Un plano describe un objeto con sus <b>vistas</b>: el <b>alzado</b> (visto de frente), la <b>planta</b> (visto desde arriba) y el <b>perfil</b> (visto de lado). En el sistema europeo, la planta se dibuja debajo del alzado y el perfil izquierdo, a la derecha del alzado. La <b>acotación</b> indica las medidas reales con líneas de cota, flechas y cifras en milímetros, sin repetir medidas. La <b>escala</b> relaciona el tamaño del dibujo con el real: <mark>escala = medida en el dibujo / medida real</mark>. Una escala 1:10 (de reducción) significa que 1 cm en el papel son 10 cm reales; una escala 2:1 (de ampliación) dibuja el objeto al doble, útil para piezas pequeñas. Las cotas siempre indican la medida real, aunque el dibujo esté a escala.</p>`, video: { id: "p6v3G13lmfE", titulo: "Vistas principales de un objeto", canal: "Universitat d'Alacant", vistas: 181023 } },
    ],
    "Evaluar, documentar y difundir": [
      { html: `<h3>Herramientas de gestión del proyecto</h3><p>Un proyecto en grupo necesita organización. El <b>reparto de tareas</b> asigna roles (coordinación, diseño, construcción, documentación) para que todos participen. El <b>diagrama de Gantt</b> es una tabla con las tareas en filas y el tiempo en columnas, donde una barra indica cuándo empieza y acaba cada tarea; permite ver de un vistazo si vamos con retraso. La <b>hoja de procesos</b> describe en orden las operaciones para fabricar cada pieza, con las herramientas y las <b>normas de seguridad</b>. El <b>presupuesto</b> suma el coste de materiales y, en un proyecto real, de mano de obra. Todo se recoge en la <b>memoria técnica</b>, y hoy es habitual compartirla en la nube y presentar el resultado con una presentación o un vídeo.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Una mesa de 1,2 m de largo se dibuja a escala 1:20. ¿Cuánto mide en el plano?", pasos: ["Pasa a la misma unidad: 1,2 m = 1.200 mm.", "En escala 1:20, la medida del dibujo es la real dividida entre 20.", "1.200 / 20 = 60 mm."], resultado: "6 cm en el plano." },
    { enunciado: "En un plano a escala 1:50, una pared mide 8 cm. ¿Cuál es su longitud real?", pasos: ["Medida real = medida en el dibujo · 50.", "8 cm · 50 = 400 cm.", "400 cm = 4 m."], resultado: "La pared mide 4 m." },
    { enunciado: "Un grupo quiere fabricar un portalápices con 15 € de presupuesto: madera (4 €), pintura (5 €), pegamento (3 €) y tornillos (2 €). ¿Cumplen? ¿Qué margen les queda?", pasos: ["Suma de costes: 4 + 5 + 3 + 2 = 14 €.", "Presupuesto: 15 €.", "Margen: 15 − 14 = 1 €."], resultado: "Cumplen, con 1 € de margen." },
  ],
  errores: [
    "Empezar a construir sin haber definido bien el problema ni las condiciones.",
    "Criticar las ideas durante la lluvia de ideas: corta la creatividad.",
    "Poner en las cotas la medida del dibujo en vez de la medida real.",
    "Colocar las vistas en cualquier sitio: la planta va debajo del alzado.",
    "No probar el prototipo antes de darlo por terminado.",
    "Olvidar las normas de seguridad en el taller (gafas, uso correcto de herramientas).",
  ],
  ejercicios: [
    { q: "Ordena las fases del proceso tecnológico: construir, evaluar, identificar el problema, diseñar, planificar, buscar información.", sol: "Identificar el problema, buscar información, diseñar, planificar, construir y evaluar." },
    { q: "Escribe tres condiciones (requisitos) para el problema: «diseñar un comedero para pájaros para el patio».", sol: "Por ejemplo: que proteja la comida de la lluvia, que cueste menos de 10 € y que se pueda colgar de una rama sin herramientas." },
    { q: "Explica la diferencia entre boceto, croquis y plano.", sol: "Boceto: dibujo rápido a mano alzada de una idea. Croquis: a mano alzada pero con proporciones y medidas. Plano: dibujo técnico preciso, con instrumentos o con ordenador, a escala y acotado." },
    { q: "¿Qué medida tendrá en un plano a escala 1:5 una pieza de 30 cm?", sol: "30 / 5 = 6 cm." },
    { q: "Un tornillo de 8 mm se dibuja a escala 5:1. ¿Cuánto mide en el dibujo?", sol: "8 · 5 = 40 mm." },
    { q: "Dibuja mentalmente las vistas de un dado: ¿qué figura geométrica es cada vista?", sol: "Las tres vistas (alzado, planta y perfil) son cuadrados del mismo tamaño." },
    { q: "Calcula la puntuación de una idea con coste 3 (peso 2), facilidad 4 (peso 1) y seguridad 5 (peso 2).", sol: "3 · 2 + 4 · 1 + 5 · 2 = 6 + 4 + 10 = 20 puntos." },
    { q: "¿Para qué sirve un diagrama de Gantt?", sol: "Para planificar en el tiempo las tareas de un proyecto: cuándo empieza y acaba cada una y cuáles se hacen a la vez." },
    { q: "Indica cuatro apartados de la memoria técnica de un proyecto.", sol: "Descripción del problema, diseño (bocetos y planos), planificación (tareas, materiales y presupuesto) y evaluación (pruebas y mejoras)." },
    { q: "Propón tres preguntas para evaluar un prototipo de lámpara de escritorio.", sol: "¿Ilumina bien la zona de trabajo? ¿Es estable y segura (sin cables sueltos)? ¿Se ha cumplido el presupuesto y el plazo?" },
  ],
  quiz: [
    { q: "En una lluvia de ideas…", o: ["se critican las ideas al momento", "se recogen todas las ideas sin criticarlas", "solo habla el coordinador"], a: 1, e: "La valoración viene después." },
    { q: "En el sistema europeo, la planta se dibuja…", o: ["encima del alzado", "debajo del alzado", "a la izquierda"], a: 1, e: "El perfil izquierdo, a la derecha." },
    { q: "Una escala 1:100 significa que 1 cm en el plano son…", o: ["1 m real", "100 m reales", "1 mm real"], a: 0, e: "100 cm = 1 m." },
    { q: "Una matriz de decisión sirve para…", o: ["elegir una idea con criterios objetivos", "dibujar planos", "calcular escalas"], a: 0, e: "Se puntúa cada idea en cada criterio." },
    { q: "El diagrama de Gantt organiza las tareas en…", o: ["el tiempo", "el espacio", "el presupuesto"], a: 0, e: "Barras sobre un calendario." },
  ],
  tarjetas: [
    ["Escala", "Medida del dibujo / medida real. 1:10 reduce; 2:1 amplía."],
    ["Las tres vistas", "Alzado (frente), planta (arriba) y perfil (lado)."],
    ["Matriz de decisión", "Tabla que puntúa cada idea según criterios con peso."],
  ],
});
