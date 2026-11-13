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

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Del enfado a la patente",
    html: `<p>En 1956, el ingeniero español Manuel Jalón vio a las limpiadoras de un hangar escurrir la fregona con las manos, agachadas y mojadas. Se preguntó si había una forma mejor. Hizo bocetos, probó materiales, construyó prototipos con un cubo y un escurridor de rodillos y, tras muchos intentos, patentó junto a su socio un sistema de cubo con escurridor que acabó en casi todas las casas del mundo. Lo que empezó como una molestia cotidiana se convirtió en un producto industrial.</p>
      <p>Así funciona la tecnología: alguien detecta una necesidad, la define con precisión, genera ideas, elige la mejor con criterio, la dibuja, la construye, la prueba y la mejora. Ese camino, el <b>proceso tecnológico</b>, es el mismo para diseñar una silla, una app o un puente. En este tema aprenderás cada fase como lo haría un equipo de ingeniería: analizar objetos, dibujar en perspectiva y con vistas, elegir materiales, trabajar con seguridad, organizarte con herramientas de gestión y proteger tus ideas. Y lo pondrás en práctica en un proyecto real.</p>`,
  },
  svgs: {
    "Buscar ideas: técnicas de creatividad": L.estrella("Técnicas de creatividad para generar ideas", "Ideas", ["lluvia de ideas", "SCAMPER", "mapa mental", "analogías", "6 sombreros", "bocetos"]),
    "Elegir la mejor solución": L.rejilla("Matriz de decisión con tres ideas puntuadas", ["Criterio (peso)", "Idea A", "Idea B", "Idea C"], [["Coste (×2)", "3", "5", "4"], ["Facilidad (×1)", "4", "2", "5"], ["Seguridad (×2)", "5", "4", "3"], ["Total", "20", "20", "19"]], { t: "Matriz de decisión" }),
    "Vistas, acotación y escalas": L.cajas("Tipos de escala: natural, de reducción y de ampliación", [["Natural 1:1", "igual que|el objeto"], ["Reducción 1:50", "casas,|muebles"], ["Ampliación 5:1", "piezas|pequeñas"], ["Cotas", "en mm, sin|unidades"]], { t: "Escalas y cotas" }),
    "Herramientas de gestión del proyecto": L.rejilla("Diagrama de Gantt simplificado de un proyecto de cuatro semanas", ["Tarea", "S1", "S2", "S3", "S4"], [["Diseño", "■", "■", "", ""], ["Compras", "", "■", "", ""], ["Construcción", "", "■", "■", ""], ["Pruebas", "", "", "", "■"], ["Memoria", "", "", "■", "■"]], { t: "Diagrama de Gantt" }),
  },
  tras: {
    "Buscar ideas: técnicas de creatividad": [
      {
        html: `<h3>Análisis de objetos</h3><p>Antes de inventar algo conviene estudiar lo que ya existe. El <b>análisis de objetos</b> examina un producto desde varios puntos de vista para entender por qué es como es. El análisis <b>formal</b> describe su forma, tamaño, color y textura, y lo representa con bocetos y vistas. El análisis <b>técnico</b> estudia sus piezas, los materiales de cada una, cómo se unen y cómo se fabricaron. El análisis <b>funcional</b> explica para qué sirve, cómo se usa y qué principio lo hace funcionar (una palanca, un muelle, un circuito).</p>
          <p>Además, se hace un análisis <b>económico</b> (cuánto cuesta, a quién va dirigido, si compensa repararlo) y un análisis <b>socioambiental</b>: qué necesidad cubre, qué impacto tiene al fabricarlo, al usarlo y al desecharlo, y si se puede reciclar o reparar. Por ejemplo, al analizar una grapadora descubrimos que su cuerpo es de acero porque debe resistir golpes, que funciona como una <mark>palanca</mark> y que un muelle empuja las grapas. Analizar objetos entrena el ojo para detectar buenas soluciones que se pueden adaptar a nuestro problema y errores que hay que evitar. Muchos inventos nacen de combinar ideas que ya funcionaban en otro contexto.</p>`,
        svg: L.cajas("Cinco puntos de vista del análisis de objetos", [["Formal", "forma y tamaño"], ["Técnico", "piezas y materiales"], ["Funcional", "para qué y cómo"], ["Económico", "coste y público"], ["Socioambiental", "impacto y reciclaje"], ["Histórico", "cómo ha cambiado"]], { t: "Analizar un objeto", cols: 2 }),
      },
    ],
    "Diseñar: del boceto al plano": [
      {
        html: `<h3>Perspectivas: caballera e isométrica</h3><p>Las vistas describen un objeto con exactitud, pero cuesta imaginarlo. Para verlo de un golpe se usan las <b>perspectivas</b>, que lo dibujan en tres dimensiones sobre el papel. En la <b>perspectiva caballera</b>, la cara frontal se dibuja en verdadera magnitud, igual que en el alzado, y la profundidad se traza con líneas inclinadas a <mark>45°</mark>, reducidas normalmente a la mitad para que no parezca demasiado alargada. Es rápida y muy útil para objetos con una cara principal, como un mueble o una caja.</p>
          <p>En la <b>perspectiva isométrica</b>, los tres ejes (ancho, alto y profundidad) forman entre sí ángulos iguales de <mark>120°</mark>: las líneas verticales siguen verticales y las otras se inclinan 30° respecto a la horizontal. Las medidas se toman sin reducir, así que es fácil dibujarla sobre papel de trama isométrica. El objeto se ve más natural y equilibrado, por eso se usa en catálogos e instrucciones de montaje. Para dibujar cualquiera de las dos se empieza por una caja que envuelve el objeto y se van «tallando» los huecos. Pasar de vistas a perspectiva, y al revés, es una de las destrezas clave de la ingeniería.</p>`,
        svg: L.comparar("Perspectiva caballera frente a isométrica", ["Caballera", ["cara frontal real", "fondo a 45°", "fondo × 0,5", "rápida"]], ["Isométrica", ["ejes a 120°", "líneas a 30°", "sin reducir", "más natural"]]),
      },
    ],
    "Vistas, acotación y escalas": [
      {
        html: `<h3>Diseño asistido por ordenador (CAD)</h3><p>Hoy los planos se hacen con programas de <b>diseño asistido por ordenador</b> o <b>CAD</b>. En el CAD en dos dimensiones (LibreCAD, QCAD) se dibujan vistas y planos con líneas precisas, capas y cotas automáticas. En el <b>modelado 3D</b> (Tinkercad, FreeCAD, SketchUp, Fusion) se construye un modelo virtual del objeto a partir de formas básicas que se suman o se restan, o bien dibujando un perfil y extruyéndolo. Del modelo 3D el programa obtiene automáticamente las vistas acotadas y la perspectiva.</p>
          <p>Las ventajas son enormes: se corrigen errores sin borrar, se prueban versiones distintas, se calculan volúmenes y masas, se simula si una pieza resistirá un esfuerzo o si dos piezas encajan, y el archivo se envía directamente a máquinas de <b>fabricación asistida por ordenador</b> (<mark>CAM</mark>): impresoras 3D, cortadoras láser o fresadoras CNC. Además, el equipo puede trabajar a la vez en la nube sobre el mismo diseño. Los formatos más habituales son <b>STL</b> para imprimir en 3D, <b>DXF</b> y <b>SVG</b> para cortar con láser y <b>STEP</b> para intercambiar modelos entre programas distintos. Muchos de estos programas son gratuitos o libres y funcionan en el navegador, por lo que se pueden usar en el instituto y en casa. Aun así, el boceto a mano sigue siendo imprescindible para pensar rápido: el CAD llega cuando la idea ya está clara.</p>`,
        svg: L.flujo("Del diseño por ordenador a la fabricación", ["Boceto a mano", "Modelo 3D en CAD", "Simular y comprobar", "Exportar (STL, DXF)", "Fabricar con CAM"], { t: "De CAD a CAM" }),
      },
    ],
    "Planificar y construir": [
      {
        html: `<h3>Elegir los materiales</h3><p>Cada pieza de un proyecto necesita el material adecuado. Para elegirlo se tienen en cuenta sus <b>propiedades</b>: <b>mecánicas</b> (dureza, resistencia, elasticidad, tenacidad), <b>térmicas</b> y <b>eléctricas</b> (si conduce o aísla), su <b>peso</b>, su facilidad para trabajarlo con las herramientas disponibles, su <b>precio</b> y su impacto ambiental. Los más usados en el taller escolar son la <b>madera</b> y sus derivados (contrachapado, DM), fáciles de cortar y unir; los <b>metales</b> (aluminio, acero), resistentes y conductores; y los <b>plásticos</b> (PLA, metacrilato, PVC), ligeros, aislantes y moldeables.</p>
          <p>Un buen ingeniero piensa también en el <mark>ciclo de vida</mark> del material: de dónde sale, cuánta energía cuesta producirlo, si se puede reutilizar o reciclar y qué pasará al final. Los materiales reciclados (cartón, botellas, maderas recuperadas) son perfectos para prototipos. Por ejemplo, para la estructura de un comedero de pájaros conviene madera tratada para exterior, resistente a la humedad; para la tapa, un plástico transparente que deje ver el nivel de comida; y para las uniones, tornillos de acero inoxidable que no se oxiden.</p>`,
        svg: L.rejilla("Comparación de materiales del taller", ["Material", "Peso", "Resiste", "Trabajar"], [["Madera / DM", "medio", "media", "fácil"], ["Aluminio", "ligero", "alta", "media"], ["Acero", "pesado", "muy alta", "difícil"], ["Plástico PLA", "ligero", "baja", "fácil (3D)"], ["Cartón", "muy ligero", "baja", "muy fácil"]], { t: "Elegir material" }),
      },
      {
        html: `<h3>Seguridad en el taller</h3><p>El taller es un lugar de trabajo con herramientas cortantes, calor y electricidad, y la seguridad es lo primero. Hay que usar los <b>equipos de protección individual</b> (EPI) adecuados a cada tarea: <b>gafas</b> al cortar, taladrar o lijar; <b>guantes</b> al manipular piezas con rebabas (pero nunca con máquinas giratorias, que pueden atraparlos); mascarilla con polvo o vapores; y el pelo recogido, sin pulseras ni ropa suelta. Las herramientas se usan solo para lo que están pensadas, se sujetan las piezas con un tornillo de banco o un sargento y se corta siempre <mark>en dirección contraria al cuerpo</mark>.</p>
          <p>Las máquinas eléctricas se usan con permiso del profesorado, comprobando antes que cables y enchufes están en buen estado. El soldador y la pistola de cola caliente se dejan en su soporte. Hay que conocer las <b>señales de seguridad</b>: las de <b>obligación</b> son círculos azules (uso obligatorio de gafas), las de <b>prohibición</b>, círculos rojos tachados, las de <b>advertencia</b>, triángulos amarillos (riesgo eléctrico) y las de <b>emergencia</b>, rectángulos verdes (salida, botiquín). El orden y la limpieza también son seguridad: un taller ordenado evita tropiezos y pérdidas de herramientas.</p>`,
        svg: L.cajas("Tipos de señales de seguridad", [["Obligación", "círculo azul|(usar gafas)"], ["Prohibición", "círculo rojo|tachado"], ["Advertencia", "triángulo|amarillo"], ["Emergencia", "rectángulo|verde"]], { t: "Señales del taller" }),
      },
    ],
    "Herramientas de gestión del proyecto": [
      {
        html: `<h3>Normalización, patentes y emprendimiento</h3><p>Para que las piezas de distintos fabricantes encajen, los tornillos sean intercambiables y los planos se entiendan en todo el mundo, existen las <b>normas</b> técnicas. En España las elabora la UNE, en Europa el CEN y a nivel mundial la <b>ISO</b>. Hay normas para el formato del papel (el DIN A4 mide 210 × 297 mm), las escalas, las cotas, los enchufes o la seguridad de los juguetes. El marcado <mark>CE</mark> indica que un producto cumple las exigencias europeas de seguridad, salud y medio ambiente para venderse en la Unión.</p>
          <p>Quien inventa algo nuevo puede protegerlo con una <b>patente</b>, que le da el derecho exclusivo a explotarlo durante 20 años a cambio de hacer pública la invención; pasado ese tiempo, cualquiera puede usarla. Las mejoras más sencillas se protegen como <b>modelo de utilidad</b> y el aspecto externo, como <b>diseño industrial</b>; en España lo gestiona la Oficina Española de Patentes y Marcas. Muchos proyectos escolares podrían convertirse en productos: para ello hay que estudiar el mercado, calcular costes, buscar financiación y pensar en la fabricación en serie. El emprendimiento tecnológico empieza, precisamente, con un buen proceso tecnológico.</p>`,
        svg: L.cajas("Formas de proteger y normalizar un producto", [["Norma ISO/UNE", "medidas y|formatos comunes"], ["Marcado CE", "seguridad|en la UE"], ["Patente", "20 años de|exclusiva"], ["Diseño industrial", "protege|el aspecto"]], { t: "Normas y patentes" }),
      },
    ],
  },
  secciones: [5, 4, 6],
  niveles: "bbbbmmmbbm",
  ejercicios: [
    { nivel: "básico", q: "Nombra los cinco puntos de vista del análisis de un objeto.", sol: "Formal (forma, tamaño), técnico (piezas, materiales, uniones), funcional (para qué sirve y cómo funciona), económico (coste, público) y socioambiental (impacto, reciclaje)." },
    { nivel: "básico", q: "¿Qué ángulo forman las líneas de profundidad en la perspectiva caballera? ¿Y los ejes de la isométrica?", sol: "En la caballera, las líneas de profundidad van a 45° (normalmente reducidas a la mitad). En la isométrica, los tres ejes forman ángulos de 120° entre sí." },
    { nivel: "básico", q: "¿Qué significan las siglas CAD y CAM?", sol: "CAD: diseño asistido por ordenador. CAM: fabricación asistida por ordenador." },
    { nivel: "básico", q: "Indica el EPI adecuado para: taladrar madera, lijar, manipular chapa con rebabas.", sol: "Taladrar: gafas (y nunca guantes con la máquina girando). Lijar: gafas y mascarilla. Manipular chapa: guantes." },
    { nivel: "básico", q: "Describe la forma y el color de las señales de obligación, prohibición, advertencia y emergencia.", sol: "Obligación: círculo azul. Prohibición: círculo con borde rojo y banda cruzada. Advertencia: triángulo amarillo con borde negro. Emergencia: rectángulo o cuadrado verde." },
    { nivel: "básico", q: "¿Cuánto dura una patente y qué se da a cambio?", sol: "20 años de derechos exclusivos de explotación; a cambio, la invención se hace pública y, al terminar, cualquiera puede usarla." },
    { nivel: "medio", q: "Haz el análisis técnico y funcional de unas tijeras.", sol: "Técnico: dos hojas de acero afiladas, mangos de plástico, unidas por un tornillo o remache que hace de eje. Funcional: son dos palancas de primer género unidas por el fulcro; al cerrar los mangos, las hojas se cruzan y cortan por cizalladura." },
    { nivel: "medio", q: "Dibuja (describe) en perspectiva caballera un cubo de 4 cm de arista con reducción 0,5. ¿Cuánto miden las líneas de profundidad?", sol: "La cara frontal es un cuadrado de 4 × 4 cm. Las aristas de profundidad se trazan a 45° con 4 · 0,5 = 2 cm." },
    { nivel: "medio", q: "Elige material para: la caja de un altavoz, el soporte de un móvil impreso en 3D y el eje de un coche de juguete. Justifica.", sol: "Caja de altavoz: DM o contrachapado, rígido, fácil de cortar y con buen comportamiento acústico. Soporte: PLA, ligero y fácil de imprimir. Eje: varilla de acero, resistente y que no se dobla." },
    { nivel: "medio", q: "¿Por qué no se deben usar guantes al trabajar con un taladro de columna?", sol: "Porque el guante puede quedar atrapado por la broca o el portabrocas en movimiento y arrastrar la mano, causando lesiones graves." },
    { nivel: "medio", q: "Explica dos ventajas del modelado 3D frente al dibujo a mano y una ventaja del boceto a mano.", sol: "3D: se corrigen errores fácilmente y se obtienen vistas, medidas y archivos de fabricación automáticamente; permite simular. Boceto a mano: es mucho más rápido para explorar ideas al principio." },
    { nivel: "medio", q: "Aplica SCAMPER a una mochila escolar: propón una idea para tres de sus letras.", sol: "Sustituir: tela por material reciclado impermeable. Combinar: añadir una batería solar para cargar el móvil. Adaptar: correas acolchadas como las de montaña. (Modificar, Poner otros usos, Eliminar y Reordenar también valen.)" },
    { nivel: "medio", q: "Una hoja DIN A4 mide 210 × 297 mm. ¿Cuánto mide un A3? ¿Y un A5?", sol: "A3 es el doble de A4: 297 × 420 mm. A5 es la mitad: 148 × 210 mm (cada formato se obtiene doblando por la mitad el anterior)." },
    { nivel: "medio", q: "¿Qué indica el marcado CE en un juguete?", sol: "Que el fabricante declara que cumple las normas europeas de seguridad y salud aplicables y que puede venderse en la Unión Europea." },
    { nivel: "medio", q: "Completa un plan de trabajo de un portalápices: 4 tareas con responsable, tiempo y herramientas.", sol: "Ejemplo: 1) Marcar y cortar la madera (Ana, 1 h, regla, sierra). 2) Lijar (Luis, 30 min, lija, gafas). 3) Montar y encolar (Sara, 45 min, cola, sargentos). 4) Pintar y barnizar (Pau, 1 h, pincel, mascarilla)." },
    { nivel: "medio", q: "Calcula la puntuación ponderada de dos ideas: A (coste 4, seguridad 3, estética 5) y B (coste 3, seguridad 5, estética 3), con pesos 2, 3 y 1.", sol: "A: 4·2 + 3·3 + 5·1 = 8 + 9 + 5 = 22. B: 3·2 + 5·3 + 3·1 = 6 + 15 + 3 = 24. Gana B." },
    { nivel: "avanzado", q: "Haz el análisis socioambiental de una botella de plástico de un solo uso y propón un rediseño.", sol: "Cubre la necesidad de transportar agua, pero se fabrica con petróleo, se usa minutos y tarda siglos en degradarse; mucha acaba en el mar. Rediseño: botella reutilizable de acero o vidrio, o envase retornable con depósito." },
    { nivel: "avanzado", q: "Una pieza de 40 × 25 × 10 mm se dibuja en isométrica a escala 2:1. ¿Qué longitud tienen sus aristas en el dibujo?", sol: "Se multiplican todas por 2: 80 mm, 50 mm y 20 mm, trazadas sobre los tres ejes isométricos sin reducción." },
    { nivel: "avanzado", q: "Explica por qué la patente obliga a publicar la invención y cómo beneficia eso a la sociedad.", sol: "Es un pacto: el inventor obtiene 20 años de exclusiva y la sociedad conoce cómo funciona. Así otros pueden aprender de ella, mejorarla y, al caducar, usarla libremente, lo que acelera el progreso." },
    { nivel: "avanzado", q: "Diseña el diagrama de Gantt de un proyecto de 5 semanas con 6 tareas, indicando cuáles pueden hacerse a la vez.", sol: "Ejemplo: S1 definir y buscar ideas; S1-S2 diseño; S2 compra de materiales (a la vez que el final del diseño); S3-S4 construcción; S4-S5 memoria (a la vez que la construcción); S5 pruebas y presentación." },
    { nivel: "avanzado", q: "Un prototipo de lámpara se calienta demasiado en la evaluación. Describe cómo volverías atrás en el proceso tecnológico.", sol: "Identificar la causa (bombilla demasiado potente o poca ventilación); volver a la fase de diseño para añadir ranuras o cambiar a LED; revisar materiales (uno resistente al calor); construir la mejora y repetir la prueba hasta cumplir el requisito." },
    { nivel: "avanzado", q: "Compara una pieza fabricada por impresión 3D con la misma fabricada por inyección de plástico, pensando en 10 unidades y en 100.000.", sol: "Para 10 unidades, la impresión 3D es más barata: no necesita molde. Para 100.000, la inyección es mucho más rápida y barata por pieza, aunque el molde cueste miles de euros, porque ese coste se reparte entre muchas unidades." },
    { nivel: "avanzado", q: "Propón un plan de seguridad para una sesión de taller en la que se va a cortar con sierra de marquetería, taladrar y soldar con estaño.", sol: "Repaso de normas al inicio; EPI: gafas para cortar y taladrar, ventilación o extractor para soldar; piezas sujetas con tornillo de banco; soldador en su soporte y lejos de cables; taladro solo con supervisión; zona ordenada y botiquín localizado." },
    { nivel: "avanzado", q: "Explica qué es el ciclo de vida de un producto y aplícalo a un móvil.", sol: "Son todas sus etapas: extracción de materias primas (minerales, a veces en condiciones de explotación), fabricación (mucha energía), transporte, uso (carga eléctrica) y fin de vida (reparación, reutilización, reciclaje en un punto limpio o residuo). Alargar el uso es lo que más reduce su impacto." },
    { nivel: "avanzado", q: "Tu proyecto escolar podría venderse. Enumera cinco pasos para convertirlo en un producto.", sol: "Estudiar el mercado y los clientes; mejorar el diseño para fabricarlo en serie y con materiales adecuados; calcular costes y precio; comprobar normas (marcado CE) y proteger la idea (modelo de utilidad o diseño); buscar financiación y canales de venta." },
  ],
  ejemplos: [
    { enunciado: "Analiza una grapadora desde los puntos de vista formal, técnico y funcional.", pasos: ["Formal: cuerpo alargado de unos 15 cm, metálico con base de goma.", "Técnico: piezas de acero estampado, un muelle, un empujador y un yunque; unidas por un eje.", "Funcional: es una palanca; al presionar, una cuchilla empuja la grapa, que atraviesa el papel y se dobla contra el yunque.", "El muelle devuelve la palanca y empuja la siguiente grapa."], resultado: "Un objeto sencillo que combina palanca, muelle y materiales resistentes." },
    { enunciado: "Dibuja en isométrica una pieza en L de 60 mm de largo, 40 mm de alto y 20 mm de fondo, con un escalón de 30 × 20 mm.", pasos: ["Trazar los tres ejes isométricos desde un punto: vertical y dos a 30°.", "Dibujar la caja envolvente de 60 × 40 × 20 mm sin reducir medidas.", "Marcar en la cara frontal el escalón: 30 mm de largo por 20 mm de alto.", "Llevar el escalón hacia el fondo con paralelas al eje de profundidad y borrar las líneas sobrantes."], resultado: "Una perspectiva isométrica de la pieza en L con medidas reales." },
    { enunciado: "Elige el material de un cartel para el patio que estará al sol y a la lluvia.", pasos: ["Requisitos: resistir agua y rayos UV, ser ligero y fácil de cortar.", "Cartón: descartado, se deshace con el agua.", "Madera sin tratar: se pudre; tratada o barnizada, sirve pero pesa más.", "Metacrilato o chapa de aluminio: resisten la intemperie y son ligeros."], resultado: "Metacrilato o aluminio (o madera tratada si se prefiere un material natural)." },
  ],
  errores: [],
  cuarta: ["Hacer la memoria técnica", "Una lista de precios", "izquierda, derecha y centro", "Para medir piezas", "El diagrama de Gantt", "se vota cada idea al instante", "a la derecha del alzado", "10 cm reales", "comprar herramientas", "los colores"],
  quiz: [
    { q: "En la perspectiva caballera, la profundidad se dibuja…", o: ["vertical", "a 45° y normalmente reducida", "a 120°", "no se dibuja"], a: 1, e: "La cara frontal va en verdadera magnitud." },
    { q: "En la isométrica, los ejes forman ángulos de…", o: ["90°", "45°", "120°", "60°"], a: 2, e: "Tres ángulos iguales de 120°." },
    { q: "CAM significa…", o: ["Cálculo de áreas medidas", "fabricación asistida por ordenador", "control automático de máquinas", "cámara digital"], a: 1, e: "Las máquinas fabrican a partir del archivo de diseño." },
    { q: "El análisis funcional de un objeto estudia…", o: ["su color", "para qué sirve y cómo funciona", "su precio", "su historia"], a: 1, e: "Por ejemplo, qué mecanismo usa." },
    { q: "Una señal circular azul indica…", o: ["prohibición", "obligación", "peligro", "salida de emergencia"], a: 1, e: "Por ejemplo, uso obligatorio de gafas." },
    { q: "Con un taladro en marcha NO se deben usar…", o: ["gafas", "guantes", "calzado cerrado", "el pelo recogido"], a: 1, e: "Pueden quedar atrapados por la broca." },
    { q: "Una patente protege una invención durante…", o: ["5 años", "20 años", "70 años", "para siempre"], a: 1, e: "Después pasa a ser de uso libre." },
    { q: "El marcado CE indica que un producto…", o: ["está hecho en Europa", "cumple los requisitos de seguridad europeos", "es reciclado", "es barato"], a: 1, e: "Es obligatorio para venderlo en la UE." },
    { q: "¿Qué propiedad describe que un material no se rompe al recibir golpes?", o: ["Dureza", "Tenacidad", "Conductividad", "Densidad"], a: 1, e: "La dureza es resistir el rayado." },
    { q: "Un DIN A4 mide…", o: ["210 × 297 mm", "297 × 420 mm", "148 × 210 mm", "200 × 300 mm"], a: 0, e: "El A3 es el doble y el A5, la mitad." },
  ],
  cuartaEx: ["romper el prototipo", "dibujar vistas", "Corte asistido de diseños"],
  examen: [
    { q: "Estudiar de qué piezas y materiales está hecho un objeto es el análisis…", o: ["formal", "técnico", "económico", "histórico"], a: 1, e: "Incluye también las uniones y la fabricación." },
    { q: "Para un prototipo rápido y barato es buena idea usar…", o: ["acero inoxidable", "cartón y materiales reciclados", "titanio", "vidrio"], a: 1, e: "Fáciles de trabajar y de bajo coste." },
    { q: "La perspectiva más usada en instrucciones de montaje es…", o: ["la isométrica", "la caballera", "ninguna", "la cónica de tres puntos"], a: 0, e: "Se ve equilibrada y usa medidas reales." },
    { q: "El organismo que elabora normas técnicas a nivel mundial es…", o: ["la ISO", "la UNE", "la OMS", "la CNMV"], a: 0, e: "International Organization for Standardization." },
    { q: "Cortar «en dirección contraria al cuerpo» es una norma de…", o: ["estética", "seguridad", "acotación", "gestión"], a: 1, e: "Evita cortes si la herramienta resbala." },
  ],
  tarjetas: [
    ["Análisis de objetos", "Formal, técnico, funcional, económico y socioambiental."],
    ["Caballera e isométrica", "45° con reducción frente a ejes a 120° sin reducir."],
    ["CAD y CAM", "Diseño y fabricación asistidos por ordenador."],
    ["Patente", "Exclusiva de 20 años a cambio de publicar la invención."],
  ],
  glosario: [
    ["Proceso tecnológico", "Conjunto de fases para resolver un problema con tecnología."],
    ["Requisito", "Condición que debe cumplir la solución."],
    ["Lluvia de ideas", "Técnica de grupo para generar muchas ideas sin criticarlas."],
    ["Matriz de decisión", "Tabla para elegir una idea puntuando criterios con pesos."],
    ["Análisis de objetos", "Estudio de un producto desde varios puntos de vista."],
    ["Boceto", "Dibujo rápido a mano alzada."],
    ["Croquis", "Dibujo a mano con las medidas aproximadas."],
    ["Vistas", "Proyecciones del objeto: alzado, planta y perfil."],
    ["Perspectiva caballera", "Representación con la cara frontal real y la profundidad a 45°."],
    ["Perspectiva isométrica", "Representación con los tres ejes a 120° y medidas reales."],
    ["Escala", "Relación entre la medida del dibujo y la real."],
    ["Cota", "Medida indicada en un plano."],
    ["CAD", "Diseño asistido por ordenador."],
    ["Prototipo", "Primer modelo funcional de un objeto para probarlo."],
    ["EPI", "Equipo de protección individual: gafas, guantes, mascarilla…"],
    ["Diagrama de Gantt", "Gráfico que organiza las tareas de un proyecto en el tiempo."],
    ["Memoria técnica", "Documento que recoge todo el proyecto."],
    ["Patente", "Derecho exclusivo para explotar una invención durante 20 años."],
  ],
  situacion: {
    titulo: "Un objeto que mejora el aula",
    reto: "Detectad un problema real de vuestra aula o del patio (cables enredados, mochilas por el suelo, ruido, falta de sombra) y diseñad, construid y evaluad un prototipo que lo resuelva, siguiendo todas las fases del proceso tecnológico.",
    pasos: [
      "Observad el aula, elegid un problema y redactad sus requisitos (función, medidas, coste máximo, seguridad).",
      "Analizad dos objetos que ya existan con un uso parecido y generad al menos diez ideas con lluvia de ideas o SCAMPER.",
      "Elegid la mejor idea con una matriz de decisión y dibujadla en boceto, vistas acotadas y perspectiva (a mano y en CAD).",
      "Elaborad el plan de trabajo con diagrama de Gantt, lista de materiales y presupuesto, y construid el prototipo con las normas de seguridad.",
      "Evaluad el prototipo con los requisitos y con usuarios reales, anotad mejoras y presentad la memoria técnica.",
    ],
    producto: "El prototipo, la memoria técnica (con planos, presupuesto, Gantt y evaluación) y una presentación de tres minutos.",
    evaluacion: ["El problema y los requisitos están bien definidos.", "La elección de la idea se justifica con criterios y los planos son correctos (vistas, cotas, escala, perspectiva).", "El prototipo funciona, se construye con seguridad y se ajusta al presupuesto.", "La memoria es completa y la evaluación propone mejoras realistas."],
  },
  objetivos: ["Analizar objetos y representarlos en perspectiva caballera e isométrica", "Elegir materiales, trabajar con seguridad y conocer normas y patentes"],
  fuentes: [{ t: "Oficina Española de Patentes y Marcas", url: "https://www.oepm.es/" }],
});
