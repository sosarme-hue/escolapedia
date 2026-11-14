// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

module.exports = B.tema({
  titulo: "El proyecto de ingeniería",
  minutos: 110,
  objetivos: [
    "Describir las fases de un proyecto de ingeniería y los documentos que genera",
    "Aplicar metodologías de diseño y de gestión (design thinking, Scrum, Gantt, PERT)",
    "Calcular el camino crítico, el presupuesto y la viabilidad de un proyecto sencillo",
    "Valorar la normalización, la propiedad industrial y el impacto del ciclo de vida del producto",
  ],
  claves: ["proyecto", "requisitos", "prototipo", "diagrama de Gantt", "camino crítico", "Scrum", "normalización", "patente", "ciclo de vida"],
  pregunta: {
    texto: "Un puente, una app y una silla de ruedas eléctrica no se parecen en nada. ¿Qué tienen en común sus ingenieros antes de fabricar la primera pieza?",
    respuesta: "Todos siguen un <mark>proceso ordenado</mark>: definen el problema y los requisitos, generan y evalúan soluciones, planifican tiempo y dinero, construyen un <b>prototipo</b>, lo ensayan y documentan cada decisión. Ese método, el <b>proyecto de ingeniería</b>, es lo que convierte una idea en un producto fiable, seguro y fabricable.",
  },
  lectura: {
    titulo: "El ventilador que nació en una semana",
    html: `<p>En marzo de 2020, los hospitales de medio mundo se quedaron sin respiradores. En varias ciudades españolas, equipos de ingenieros, médicos y estudiantes se pusieron a trabajar contrarreloj. No empezaron dibujando piezas: primero hablaron con los sanitarios para saber qué necesitaban exactamente, qué presiones y volúmenes de aire, qué alarmas, cuánto tiempo debía funcionar sin fallar.</p>
    <p>Después repartieron el trabajo en pequeños equipos, fijaron reuniones diarias de quince minutos y fabricaron prototipos con impresoras 3D y componentes que se podían comprar en cualquier tienda. Cada versión se probaba, se medía y se mejoraba. Algunos diseños se abandonaron en dos días; otros superaron los ensayos y obtuvieron la autorización sanitaria.</p>
    <p>Aquella carrera mostró, con urgencia real, lo que es un proyecto de ingeniería: un método para pasar de una necesidad a una solución que funciona, cumpliendo plazos, costes, normas y requisitos de seguridad. En este tema estudiarás ese método, las herramientas para planificarlo y los documentos que lo dejan por escrito, para que cualquiera pueda fabricar, revisar o mejorar lo que diseñas.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es un proyecto de ingeniería",
      html: `<p>Un <b>proyecto</b> es un conjunto de actividades coordinadas, con un <mark>principio y un fin definidos</mark>, que se emprende para crear un producto, un servicio o un resultado único. Se distingue de una operación rutinaria, como fabricar en serie, porque cada proyecto afronta un problema nuevo y tiene unos recursos limitados: tiempo, dinero, personas y materiales.</p>
      <p>En ingeniería, el proyecto busca una <b>solución técnica</b> a una necesidad: una máquina, una estructura, un circuito, un programa o un sistema completo. Esa solución debe cumplir a la vez varias condiciones que a menudo se contradicen: que <b>funcione</b> (requisitos funcionales), que sea <b>segura</b>, que respete las <b>normas</b> y la ley, que sea <b>fabricable</b> con los medios disponibles, que tenga un <b>coste</b> razonable y que su impacto ambiental sea el menor posible.</p>
      <p>Se suele hablar del <b>triángulo de restricciones</b>: alcance, tiempo y coste. Si se amplía el alcance (más funciones), aumentan el tiempo o el coste; si se recorta el plazo, hay que gastar más o hacer menos. En el centro del triángulo está la <b>calidad</b>. Gestionar un proyecto es, en gran parte, equilibrar esas tres variables sin sacrificar la calidad ni la seguridad.</p>`,
      svg: B.ciclo("Triángulo de restricciones: alcance, tiempo y coste alrededor de la calidad", "Calidad", ["Alcance", "Tiempo", "Coste"]),
    },
    {
      h: "Las fases del proyecto",
      html: `<p>Aunque cada empresa tiene su propio procedimiento, casi todos los proyectos recorren las mismas fases:</p>
      <ol><li><b>Identificación de la necesidad</b>: qué problema hay, a quién afecta y en qué contexto.</li>
      <li><b>Especificaciones y requisitos</b>: lo que la solución debe hacer, medido en cifras (carga máxima, autonomía, precio objetivo…).</li>
      <li><b>Búsqueda de información</b>: soluciones existentes, patentes, normas, materiales y tecnologías disponibles.</li>
      <li><b>Generación y selección de ideas</b>: bocetos, alternativas y elección razonada.</li>
      <li><b>Diseño de detalle y planificación</b>: planos, cálculos, lista de materiales, presupuesto y calendario.</li>
      <li><b>Construcción del prototipo</b> y <b>ensayos</b>.</li>
      <li><b>Evaluación, mejora y documentación</b> final.</li></ol>
      <p>Las fases no son una línea recta: los ensayos suelen revelar fallos que obligan a volver al diseño. Por eso se dice que el proceso es <mark>iterativo</mark>. Cuanto antes se detecta un error, más barato es corregirlo: cambiar una cota en un plano cuesta minutos; cambiarla cuando el molde ya está fabricado puede costar miles de euros.</p>`,
      svg: B.flujo("Fases del proyecto de ingeniería en cadena", ["Necesidad y requisitos", "Información y normas", "Ideas y selección", "Diseño y planificación", "Prototipo y ensayos", "Evaluación y mejora"], { t: "Fases del proyecto" }),
      video: { id: "Q6g0Ks7EN1c", titulo: "Fases del proyecto técnico", canal: "PEGATECNICA PEDAGOGICA", vistas: 62678 },
    },
    {
      h: "Requisitos y especificaciones",
      html: `<p>Un buen proyecto empieza por un <b>pliego de condiciones</b> claro. Los <b>requisitos</b> se clasifican en <b>funcionales</b> (lo que el producto debe hacer: «elevar 5 kg a 1 m de altura») y <b>no funcionales</b> (cómo debe hacerlo: «en menos de 4 s, con un ruido inferior a 60 dB, por menos de 40 €»). También hay <b>restricciones</b>: normas obligatorias, tamaño máximo, materiales permitidos o plazo de entrega.</p>
      <p>Un requisito útil es <mark>medible y verificable</mark>. «Que sea ligero» no sirve, porque nadie puede comprobarlo; «masa inferior a 1,2 kg» sí, porque basta una báscula. Una técnica habitual es redactar los requisitos con criterios SMART: específicos, medibles, alcanzables, relevantes y con plazo.</p>
      <p>Además, conviene ordenar los requisitos por prioridad. El método <b>MoSCoW</b> los clasifica en imprescindibles (<i>must</i>), importantes (<i>should</i>), deseables (<i>could</i>) y descartados por ahora (<i>won't</i>). Así, si falta tiempo o dinero, el equipo sabe qué puede dejar fuera sin que el producto deje de cumplir su función principal.</p>`,
      svg: B.comparar("Requisito mal formulado frente a requisito medible", ["Vago", ["que sea ligero", "que sea barato", "que vaya rápido", "no se comprueba"]], ["Medible", ["masa < 1,2 kg", "coste < 40 €", "subida < 4 s", "se verifica"]]),
    },
    {
      h: "Del boceto al prototipo",
      html: `<p>Para generar ideas se usan técnicas de creatividad como la <b>lluvia de ideas</b> (sin críticas al principio), el <b>análisis morfológico</b> (descomponer el producto en funciones y combinar soluciones para cada una) o el <b>SCAMPER</b> (sustituir, combinar, adaptar, modificar, proponer otros usos, eliminar, reordenar).</p>
      <p>Las ideas se seleccionan con una <b>matriz de decisión ponderada</b>: se eligen criterios (coste, seguridad, facilidad de fabricación…), se les asigna un peso según su importancia, se puntúa cada alternativa y se multiplica. Gana la que obtiene la suma ponderada mayor, aunque el resultado siempre se revisa con sentido común.</p>
      <p>La idea elegida se representa primero en <b>bocetos</b> y <b>croquis</b> a mano alzada y después en planos normalizados y modelos <b>CAD</b> (diseño asistido por ordenador). El modelo digital permite simular esfuerzos, comprobar que las piezas encajan y preparar la fabricación. Por último se construye un <mark>prototipo</mark>: un modelo funcional que sirve para ensayar. Puede ser de baja fidelidad (cartón, piezas impresas en 3D) o un prototipo casi idéntico al producto final, llamado preserie.</p>`,
      svg: B.flujo("Del boceto al prototipo", ["Boceto a mano alzada", "Croquis acotado", "Modelo CAD 3D", "Simulación", "Prototipo físico"], { t: "De la idea al objeto" }),
    },
    {
      h: "Design thinking",
      html: `<p>El <b>design thinking</b> o pensamiento de diseño es una metodología centrada en las <mark>personas usuarias</mark>. Parte de la idea de que muchos productos fracasan no porque estén mal calculados, sino porque resuelven un problema que nadie tenía. Tiene cinco etapas:</p>
      <ul><li><b>Empatizar</b>: observar y entrevistar a los usuarios para entender sus necesidades reales.</li>
      <li><b>Definir</b>: formular el problema con precisión («Las personas mayores necesitan abrir botes sin hacer fuerza con la muñeca»).</li>
      <li><b>Idear</b>: generar muchas soluciones posibles.</li>
      <li><b>Prototipar</b>: construir versiones rápidas y baratas.</li>
      <li><b>Testear</b>: probarlas con usuarios y aprender de sus reacciones.</li></ul>
      <p>Igual que el proceso general, el design thinking es iterativo: lo que se aprende en el test lleva a redefinir el problema o a idear de nuevo. Es especialmente útil en las primeras fases, cuando todavía no está claro qué hay que diseñar, y se combina muy bien con el cálculo técnico de las fases posteriores.</p>`,
      svg: B.ciclo("Ciclo del design thinking en cinco etapas", "Usuario", ["Empatizar", "Definir", "Idear", "Prototipar", "Testear"]),
      video: { id: "LeoEnRjAYM0", titulo: "Qué es el Design Thinking y para qué sirve: fases y ejemplos", canal: "IEBS Business School", vistas: 227246 },
    },
    {
      h: "Gestión clásica y gestión ágil",
      html: `<p>La gestión <b>en cascada</b> (o predictiva) planifica todo el proyecto al principio y ejecuta las fases una detrás de otra: no se empieza el diseño hasta cerrar los requisitos, ni se fabrica hasta cerrar el diseño. Funciona bien cuando el problema está muy claro y los cambios son caros, como en la construcción de un edificio o de un puente.</p>
      <p>Las metodologías <b>ágiles</b> nacieron en el desarrollo de software, donde los requisitos cambian a menudo. La más usada es <b>Scrum</b>. El trabajo se divide en <b>sprints</b>, ciclos cortos de una a cuatro semanas, y al final de cada uno se entrega un incremento que funciona. Hay tres roles: el <b>product owner</b> (representa al cliente y ordena la lista de tareas o <i>product backlog</i>), el <b>scrum master</b> (facilita el proceso y elimina obstáculos) y el <b>equipo de desarrollo</b>. Cada día se celebra una reunión breve de pie (<i>daily</i>) para coordinarse.</p>
      <p>Muchos proyectos de ingeniería actuales son <mark>híbridos</mark>: planifican en cascada las partes físicas costosas (moldes, obra) y gestionan de forma ágil el software y los prototipos. Un tablero <b>Kanban</b> con columnas «por hacer», «en curso» y «hecho» ayuda a ver el estado del trabajo de un vistazo.</p>`,
      svg: B.comparar("Gestión en cascada frente a gestión ágil", ["Cascada", ["plan completo al inicio", "fases en orden", "cambios caros", "obra, puentes"]], ["Ágil (Scrum)", ["sprints cortos", "entregas parciales", "admite cambios", "software, prototipos"]]),
      video: { id: "HhC75IonpOU", titulo: "Scrum en 6 minutos", canal: "Metodologías Ágiles | Cristian Henao", vistas: 1181031 },
    },
    {
      h: "Planificar el tiempo: Gantt y PERT",
      html: `<p>Para planificar, el proyecto se descompone en <b>tareas</b> (estructura de desglose del trabajo) y se estima la duración de cada una. Algunas dependen de otras: no se puede montar un circuito antes de comprar los componentes. Esas relaciones se llaman <b>precedencias</b>.</p>
      <p>El <b>diagrama de Gantt</b> representa cada tarea como una barra horizontal sobre un eje de tiempo. Se ve de un vistazo qué se hace cada semana, qué tareas se solapan y cuándo hay hitos (fechas clave, como la entrega del prototipo). Es la herramienta más usada para comunicar el calendario.</p>
      <p>El <b>diagrama PERT</b> representa las tareas como una red de nodos y flechas. Permite calcular el <mark>camino crítico</mark>: la cadena de tareas dependientes cuya suma de duraciones es la más larga. Esa suma es la duración mínima del proyecto, y cualquier retraso en una tarea crítica retrasa todo el proyecto. Las tareas que no están en el camino crítico tienen <b>holgura</b>: pueden retrasarse algo sin afectar a la fecha final. Conocer el camino crítico indica dónde hay que vigilar más y dónde conviene poner más recursos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de Gantt con cuatro tareas y el camino crítico en rojo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Diagrama de Gantt", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <g stroke="var(--line)" stroke-width="1">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${70 + i * 26} 30 V 160"/>`).join("")}</g>
        ${[["A Diseño", 0, 2, 1], ["B Compra", 2, 1, 0], ["C Programa", 2, 3, 1], ["D Montaje", 5, 1, 1]].map(([t, s, d, cr], i) => `${B.tx(64, 52 + i * 30, t, { fs: 10.5, maxW: 58, anchor: "end" })}<rect x="${70 + s * 26}" y="${40 + i * 30}" width="${d * 26}" height="16" rx="4" fill="${cr ? "var(--red)" : "var(--pen)"}"/>`).join("")}
        ${[1, 2, 3, 4, 5, 6].map((i) => B.tx(57 + i * 26, 172, `s${i}`, { fs: 9.5, maxW: 22, color: "var(--muted)" })).join("")}
      </svg>`,
      video: { id: "oDFbPhmgqLQ", titulo: "Diagrama de GANTT", canal: "Bilbao & Bejarano Arquitectos", vistas: 642422 },
    },
    {
      h: "Presupuesto y viabilidad",
      html: `<p>El <b>presupuesto</b> recoge todos los costes del proyecto. Los <b>costes directos</b> se asignan a una unidad concreta del producto: materiales, componentes y horas de trabajo de fabricación. Los <b>costes indirectos</b> son generales: alquiler del taller, electricidad, administración, amortización de las máquinas. Además, se distinguen los <b>costes fijos</b>, que no dependen de cuántas unidades se fabriquen (el molde de inyección, el diseño), y los <b>variables</b>, que crecen con cada unidad (plástico, tornillos).</p>
      <p>Con esos datos se calcula el <b>punto muerto</b> o umbral de rentabilidad: el número de unidades a partir del cual los ingresos cubren todos los costes. Si cada unidad se vende a un precio p, tiene un coste variable v y los costes fijos son CF, el punto muerto es:</p>
      <div class="formula"><span>Q = CF / (p − v)</span></div>
      <p>La diferencia p − v se llama <b>margen de contribución</b>. Un estudio de <b>viabilidad</b> analiza si el proyecto es técnicamente posible, económicamente rentable, legalmente permitido y ambientalmente aceptable. Si alguna de las cuatro respuestas es «no», el proyecto debe replantearse antes de invertir más.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica del punto muerto: recta de ingresos y recta de costes totales que se cortan">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 H 240 M30 150 V 20" stroke="var(--ink)" stroke-width="2"/>
        <path d="M30 150 L 230 40" stroke="var(--leaf)" stroke-width="3"/><path d="M30 105 L 230 70" stroke="var(--red)" stroke-width="3"/><path d="M30 105 H 230" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
        <circle cx="137" cy="91" r="5" fill="var(--sun)"/><path d="M137 91 V 150" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="4 3"/>
        ${B.tx(137, 166, "punto muerto Q", { fs: 10.5, maxW: 100, bold: true, color: "var(--sun)" })}
        ${B.tx(214, 34, "ingresos", { fs: 10.5, maxW: 60, color: "var(--leaf)", bold: true })}${B.tx(214, 62, "costes", { fs: 10.5, maxW: 60, color: "var(--red)", bold: true })}
        ${B.tx(70, 120, "costes fijos", { fs: 10, maxW: 70, color: "var(--muted)" })}${B.tx(230, 164, "unidades", { fs: 9.5, maxW: 50, color: "var(--muted)" })}
      </svg>`,
    },
    {
      h: "La documentación técnica",
      html: `<p>Un proyecto que no está documentado no se puede fabricar, mantener ni mejorar. La <b>documentación técnica</b> suele organizarse en cuatro partes:</p>
      <ul><li><b>Memoria</b>: describe el problema, los requisitos, las alternativas estudiadas, la solución elegida, los cálculos justificativos y los resultados de los ensayos.</li>
      <li><b>Planos</b>: de conjunto, de despiece y de detalle, normalizados y acotados, con su lista de piezas.</li>
      <li><b>Pliego de condiciones</b>: materiales, calidades, tolerancias, normas que deben cumplirse y condiciones de fabricación y montaje.</li>
      <li><b>Presupuesto</b>: mediciones, precios unitarios y coste total.</li></ul>
      <p>Además, se elaboran el <b>manual de usuario</b>, las instrucciones de montaje y mantenimiento, y el <b>análisis de riesgos</b>. En productos industriales se usa un sistema de <b>control de versiones</b>: cada plano lleva un número de revisión, y cualquier cambio queda registrado con su fecha, su autor y su motivo. Así se evita que el taller fabrique con un plano antiguo. Hoy gran parte de esta documentación se genera directamente desde el modelo CAD y se comparte en la nube con todo el equipo.</p>`,
      svg: B.cajas("Las cuatro partes de la documentación técnica", [["Memoria", "qué y por qué|cálculos"], ["Planos", "conjunto|despiece"], ["Pliego", "materiales|normas"], ["Presupuesto", "mediciones|precios"]], { t: "Documentación del proyecto" }),
    },
    {
      h: "Normalización y calidad",
      html: `<p>La <b>normalización</b> consiste en establecer reglas comunes para productos, procesos y servicios: dimensiones, símbolos, métodos de ensayo, requisitos de seguridad. Gracias a ella, un tornillo M8 comprado en cualquier país encaja en una tuerca M8, y un plano dibujado en Bilbao se entiende en Shanghái. Las normas las elaboran organismos de normalización: <b>UNE</b> en España (a través de la Asociación Española de Normalización), <b>EN</b> en Europa e <b>ISO</b> a escala internacional.</p>
      <p>En el ámbito de la gestión, la familia <b>ISO 9001</b> define cómo debe organizarse una empresa para garantizar la calidad de lo que produce, y la <b>ISO 14001</b> hace lo mismo con la gestión ambiental. Muchas empresas no pueden ser proveedoras de la industria del automóvil o de la aeronáutica sin estos certificados.</p>
      <p>En la Unión Europea, muchos productos (juguetes, máquinas, aparatos eléctricos) deben llevar el <mark>marcado CE</mark>: el fabricante declara que cumplen las directivas europeas de seguridad, salud y medio ambiente. El control de calidad comprueba con <b>ensayos e inspecciones</b> que cada lote cumple las tolerancias y requisitos fijados.</p>`,
      svg: B.capas("Niveles de normalización: ISO, EN y UNE", [["ISO", "internacional"], ["EN", "Europa"], ["UNE", "España"], ["Empresa", "normas internas"]], { t: "Organismos de normalización" }),
    },
    {
      h: "Propiedad industrial e intelectual",
      html: `<p>Las ideas técnicas tienen valor económico, y la ley permite protegerlas. La <b>propiedad industrial</b> se registra en España en la Oficina Española de Patentes y Marcas (OEPM) e incluye:</p>
      <ul><li><b>Patente</b>: protege una invención que sea <mark>nueva, inventiva y con aplicación industrial</mark>. Da el derecho exclusivo de explotarla durante 20 años a cambio de hacerla pública. Después pasa a ser de dominio público.</li>
      <li><b>Modelo de utilidad</b>: protege mejoras técnicas menores (una forma nueva que da una ventaja práctica) durante 10 años, con requisitos menos exigentes.</li>
      <li><b>Diseño industrial</b>: protege la apariencia externa de un producto.</li>
      <li><b>Marca</b>: protege los signos que distinguen productos o empresas.</li></ul>
      <p>La <b>propiedad intelectual</b>, en cambio, protege obras creativas, incluidos los programas informáticos, desde el momento de su creación. Existen licencias libres, como las de <b>código abierto</b> o <b>Creative Commons</b>, que permiten compartir diseños y programas con condiciones. Antes de diseñar, consultar bases de datos de patentes evita reinventar algo ya protegido y es una fuente excelente de ideas.</p>`,
      svg: B.rejilla("Tipos de protección de la propiedad industrial y su duración", ["Figura", "Protege", "Años"], [["Patente", "invención", "20"], ["Mod. utilidad", "mejora", "10"], ["Diseño", "apariencia", "hasta 25"], ["Marca", "nombre, logo", "10 renov."]], { t: "Propiedad industrial" }),
    },
    {
      h: "Ciclo de vida, ecodiseño y emprendimiento",
      html: `<p>Todo producto tiene un <b>ciclo de vida</b>: extracción de materias primas, fabricación, distribución, uso y fin de vida (reutilización, reciclado o vertedero). El <b>análisis de ciclo de vida</b> (ACV) cuantifica el impacto ambiental de cada etapa: energía, emisiones de CO₂, agua y residuos. A menudo sorprende: en un coche de combustión el mayor impacto está en el uso, mientras que en un móvil está en la fabricación.</p>
      <p>El <b>ecodiseño</b> integra el medio ambiente desde las primeras fases del proyecto: elegir materiales reciclables o reciclados, reducir la cantidad de material, facilitar el desmontaje y la reparación, alargar la vida útil y disminuir el consumo energético. Es la base de la <mark>economía circular</mark>, que busca cerrar el ciclo para que los residuos vuelvan a ser recursos. El diseño accesible y universal, pensado para personas con capacidades diversas, es otra exigencia ética del buen proyecto.</p>
      <p>Por último, muchos proyectos acaban convertidos en empresas. El <b>emprendimiento tecnológico</b> utiliza herramientas como el lienzo de modelo de negocio (<i>Canvas</i>) o el producto mínimo viable para comprobar, con poco gasto, si una idea interesa al mercado antes de fabricarla a gran escala.</p>`,
      svg: B.ciclo("Ciclo de vida de un producto con economía circular", "ACV", ["Materias primas", "Fabricación", "Distribución", "Uso", "Fin de vida"]),
    },
  ],
  figura: {
    titulo: "Herramientas del proyecto de ingeniería",
    items: [["Requisitos", "medibles", "qué debe hacer", "y con qué límites"], ["Gantt / PERT", "camino crítico", "cuándo se hace", "cada tarea"], ["Presupuesto", "Q = CF/(p−v)", "cuánto cuesta", "y si es rentable"], ["Documentación", "memoria · planos", "para fabricar", "y mejorar"]],
  },
  video: { id: "a4yuwK97NYk", titulo: "Fases de un proyecto de innovación", canal: "Tu Club Tecnológico", vistas: 30785 },
  quiz: [
    ["¿Qué distingue un proyecto de una operación rutinaria?", ["Que usa máquinas", "Que tiene principio y fin y resultado único", "Que lo hace una sola persona", "Que no tiene presupuesto"], 1, "Un proyecto es temporal y busca un resultado nuevo; fabricar en serie es una operación repetitiva."],
    ["Las tres variables del triángulo de restricciones son…", ["calidad, precio y diseño", "alcance, tiempo y coste", "materiales, energía y agua", "normas, planos y memoria"], 1, "Alcance, tiempo y coste; la calidad queda en el centro."],
    ["¿Cuál de estos requisitos es verificable?", ["Que sea cómodo", "Que pese menos de 800 g", "Que sea bonito", "Que dure mucho"], 1, "Un requisito verificable se puede medir con un instrumento."],
    ["Un requisito no funcional describe…", ["lo que hace el producto", "cómo lo hace: rapidez, ruido, coste", "quién lo fabrica", "la marca"], 1, "Los no funcionales fijan prestaciones y límites."],
    ["¿Qué etapa del design thinking consiste en observar y entrevistar a usuarios?", ["Idear", "Testear", "Empatizar", "Prototipar"], 2, "Empatizar es entender a las personas antes de definir el problema."],
    ["En Scrum, un sprint es…", ["un diagrama de barras", "un ciclo corto de trabajo con entrega", "el jefe del proyecto", "una norma ISO"], 1, "Dura de una a cuatro semanas y termina con un incremento que funciona."],
    ["¿Quién ordena la lista de tareas (backlog) en Scrum?", ["El scrum master", "El product owner", "El cliente final directamente", "Nadie"], 1, "El product owner representa al cliente y prioriza el backlog."],
    ["El camino crítico es…", ["la tarea más cara", "la cadena de tareas dependientes más larga", "la tarea más peligrosa", "el último hito"], 1, "Su duración total es la duración mínima del proyecto."],
    ["Una tarea con holgura…", ["no se puede retrasar nada", "puede retrasarse algo sin retrasar el proyecto", "está en el camino crítico", "no tiene duración"], 1, "La holgura es el margen de retraso permitido."],
    ["¿Qué diagrama representa las tareas como barras sobre un eje de tiempo?", ["PERT", "Gantt", "Kanban", "Canvas"], 1, "El Gantt muestra el calendario con barras."],
    ["El coste del molde de inyección es un coste…", ["variable", "fijo", "nulo", "de distribución"], 1, "No depende del número de piezas fabricadas."],
    ["El punto muerto se calcula como…", ["Q = CF · (p − v)", "Q = CF / (p − v)", "Q = p / v", "Q = (p − v) / CF"], 1, "Costes fijos entre margen de contribución unitario."],
    ["¿Qué documento justifica la solución elegida y sus cálculos?", ["El presupuesto", "La memoria", "El pliego", "La marca"], 1, "La memoria describe y justifica el proyecto."],
    ["¿Qué documento fija materiales, calidades y normas de fabricación?", ["Pliego de condiciones", "Memoria", "Manual de usuario", "Gantt"], 0, "El pliego establece las condiciones técnicas."],
    ["Las normas españolas se denominan…", ["DIN", "UNE", "ANSI", "JIS"], 1, "UNE: normas españolas; DIN son alemanas."],
    ["La norma ISO 9001 se refiere a…", ["gestión de la calidad", "gestión ambiental", "dibujo técnico", "seguridad eléctrica"], 0, "La ISO 14001 es la ambiental."],
    ["Una patente protege una invención durante…", ["5 años", "10 años", "20 años", "para siempre"], 2, "20 años; después pasa al dominio público."],
    ["Para proteger la forma exterior de un producto se usa…", ["una patente", "un diseño industrial", "un modelo de utilidad", "una licencia libre"], 1, "El diseño industrial protege la apariencia."],
    ["El ecodiseño busca…", ["productos más caros", "reducir el impacto ambiental desde el diseño", "solo reciclar al final", "eliminar la documentación"], 1, "Integra el medio ambiente en todas las fases."],
    ["¿Qué analiza el ACV?", ["El coste de la publicidad", "El impacto ambiental de todas las etapas de un producto", "La velocidad de fabricación", "El número de patentes"], 1, "Análisis de ciclo de vida: de la cuna a la tumba."],
  ],
  examen: [
    ["Un proyecto tiene tareas A (3 días), B (2 días, tras A), C (5 días, tras A) y D (1 día, tras B y C). Su duración mínima es…", ["6 días", "9 días", "11 días", "8 días"], 1, "Camino crítico A-C-D: 3 + 5 + 1 = 9 días."],
    ["En el caso anterior, la holgura de B es…", ["0 días", "2 días", "3 días", "5 días"], 2, "B puede empezar el día 3 y debe acabar antes del día 8: 5 − 2 = 3 días de holgura."],
    ["CF = 6000 €, p = 25 €, v = 10 €. El punto muerto es…", ["240 unidades", "400 unidades", "600 unidades", "171 unidades"], 1, "Q = 6000 / (25 − 10) = 400."],
    ["¿Qué metodología es más adecuada para un software cuyos requisitos cambian a menudo?", ["Cascada", "Ágil (Scrum)", "Ninguna", "Solo Gantt"], 1, "Las ágiles admiten cambios entre sprints."],
    ["¿Cuál NO es requisito de una patente?", ["Novedad", "Actividad inventiva", "Aplicación industrial", "Ser bonita"], 3, "La estética se protege como diseño industrial."],
    ["El marcado CE indica que…", ["el producto se fabricó en Europa", "el fabricante declara que cumple las directivas europeas", "es de calidad superior", "está patentado"], 1, "Es una declaración de conformidad, no un sello de origen."],
    ["En una matriz ponderada, criterio coste (peso 0,6) y seguridad (0,4). A puntúa 8 y 5; B, 6 y 9. ¿Cuál gana?", ["A con 6,8", "B con 7,2", "Empate", "A con 7,2"], 1, "A: 4,8 + 2 = 6,8; B: 3,6 + 3,6 = 7,2."],
    ["¿Qué etapa suele concentrar el mayor impacto ambiental de un móvil?", ["El uso", "La fabricación", "El transporte", "La publicidad"], 1, "La extracción de materiales y la fabricación de chips pesan más que la carga."],
  ],
  feynman: ["Las fases de un proyecto y por qué es iterativo", "La diferencia entre requisito funcional, no funcional y restricción", "Cómo se calcula el camino crítico y qué es la holgura", "Cómo funciona Scrum: roles, sprints y backlog", "Qué documentos forman un proyecto y para qué sirve cada uno", "Qué protege una patente y qué un diseño industrial"],
  mapa: ["PROYECTO DE INGENIERÍA", [["Proceso", "necesidad → prototipo → mejora"], ["Metodologías", "design thinking · Scrum"], ["Planificación", "Gantt · PERT · presupuesto"], ["Documentos y normas", "memoria · UNE · patentes"]]],
  tarjetas: [
    ["¿Qué es un proyecto?", "Actividades coordinadas, con inicio y fin, para lograr un resultado único con recursos limitados."],
    ["Triángulo de restricciones", "Alcance, tiempo y coste; en el centro, la calidad."],
    ["Requisito verificable", "El que se puede medir y comprobar: «masa < 1,2 kg»."],
    ["Etapas del design thinking", "Empatizar, definir, idear, prototipar y testear."],
    ["Roles de Scrum", "Product owner, scrum master y equipo de desarrollo."],
    ["Diagrama de Gantt", "Barras de tareas sobre un eje de tiempo."],
    ["Camino crítico", "Cadena de tareas dependientes más larga; marca la duración mínima."],
    ["Punto muerto", "Q = CF / (p − v): unidades para cubrir todos los costes."],
    ["Partes del proyecto", "Memoria, planos, pliego de condiciones y presupuesto."],
    ["UNE, EN, ISO", "Normas española, europea e internacional."],
    ["Patente", "Protege una invención nueva, inventiva e industrial 20 años."],
    ["Ecodiseño", "Diseñar reduciendo el impacto ambiental en todo el ciclo de vida."],
  ],
  ejemplos: [
    ["Reformula como requisitos medibles: «un cargador solar portátil, ligero, que cargue rápido y sea barato».", ["Ligero → masa inferior a 400 g.", "Cargue rápido → carga completa de un móvil de 4000 mAh en menos de 4 h con sol directo.", "Barato → precio de venta inferior a 35 €.", "Se añade una restricción: cumplir la norma de seguridad de baterías y llevar marcado CE."], "Requisitos: m < 400 g; t de carga < 4 h; precio < 35 €; marcado CE."],
    ["Tareas: A diseño (4 d); B compra (3 d, tras A); C programación (6 d, tras A); D montaje (2 d, tras B); E pruebas (3 d, tras C y D). Calcula la duración mínima y el camino crítico.", ["Caminos posibles: A-B-D-E = 4 + 3 + 2 + 3 = 12 d.", "A-C-E = 4 + 6 + 3 = 13 d.", "El más largo es A-C-E."], "Duración mínima 13 días; camino crítico A-C-E. B y D tienen 1 día de holgura."],
    ["Una empresa fabricará una lámpara. Molde y diseño: 18 000 €. Coste variable: 12 € por unidad. Precio de venta: 30 €. ¿Cuántas debe vender para no perder dinero?", ["Margen de contribución: p − v = 30 − 12 = 18 €.", "Q = CF / (p − v) = 18 000 / 18.", "Q = 1000 unidades."], "Punto muerto: 1000 lámparas; a partir de la 1001 hay beneficio."],
    ["Matriz ponderada para elegir el material de una carcasa: criterios coste (0,5), resistencia (0,3) y reciclabilidad (0,2). Notas de 0 a 10: ABS (8, 6, 5), aluminio (4, 9, 9), madera (7, 5, 8).", ["ABS: 8·0,5 + 6·0,3 + 5·0,2 = 4 + 1,8 + 1 = 6,8.", "Aluminio: 2 + 2,7 + 1,8 = 6,5.", "Madera: 3,5 + 1,5 + 1,6 = 6,6."], "Gana el ABS (6,8), aunque por poco: conviene revisar los pesos con el equipo."],
    ["Un equipo de cuatro personas quiere desarrollar una app de control de un invernadero en 8 semanas. Organízalo con Scrum.", ["Product owner: la persona que habla con el agricultor y ordena el backlog (lecturas de sensores, alarmas, riego remoto…).", "Scrum master: quien organiza las reuniones y resuelve bloqueos.", "Sprints de 2 semanas: 4 sprints. Al final de cada uno se enseña una versión que funciona.", "Daily de 15 minutos y revisión con el agricultor al cerrar cada sprint."], "4 sprints de 2 semanas con entregas parciales y prioridades revisadas en cada uno."],
    ["Un inventor ha mejorado la forma de una pinza de tender para que no se caiga con el viento. ¿Qué protección le conviene?", ["No es una invención radical, sino una mejora práctica de un objeto conocido.", "El modelo de utilidad protege mejoras técnicas con ventaja práctica, con menos requisitos que la patente.", "Si además la forma es estéticamente original, puede registrar el diseño industrial."], "Modelo de utilidad (10 años), y opcionalmente diseño industrial."],
  ],
  errores: [
    "Empezar a dibujar piezas sin haber definido los requisitos: se diseña algo que no resuelve el problema.",
    "Redactar requisitos vagos («resistente», «barato») que nadie puede comprobar.",
    "Pensar que el camino crítico es la tarea más larga: es la cadena de tareas dependientes más larga.",
    "Confundir costes fijos y variables al calcular el punto muerto.",
    "Creer que una patente protege una idea sin desarrollar: protege una invención concreta y con aplicación industrial.",
    "Dejar la documentación para el final: se pierden decisiones, cálculos y versiones de los planos.",
  ],
  ejercicios: {
    b: [
      ["Enumera en orden las fases de un proyecto de ingeniería.", "Necesidad, especificaciones y requisitos, búsqueda de información, ideas y selección, diseño de detalle y planificación, prototipo y ensayos, evaluación, mejora y documentación."],
      ["Explica qué significa que el proceso de proyecto es iterativo.", "Que no es lineal: los resultados de los ensayos y evaluaciones obligan a volver a fases anteriores (diseño, requisitos) y repetir hasta lograr una solución válida."],
      ["Clasifica como funcional o no funcional: «abrir la puerta del garaje», «hacerlo en menos de 15 s», «con un ruido menor de 55 dB».", "Abrir la puerta: funcional. Los otros dos describen cómo lo hace: no funcionales."],
      ["Convierte en requisito medible: «una mochila grande y resistente».", "Por ejemplo: capacidad de 25 a 30 L y soportar 15 kg de carga durante 1000 ciclos de levantamiento sin rotura de costuras."],
      ["Nombra las cinco etapas del design thinking.", "Empatizar, definir, idear, prototipar y testear."],
      ["¿Qué tres roles hay en Scrum?", "Product owner (prioriza el backlog), scrum master (facilita) y equipo de desarrollo (construye)."],
      ["¿Para qué sirve un diagrama de Gantt?", "Para representar en el tiempo las tareas del proyecto como barras, ver sus solapamientos, dependencias e hitos y comunicar el calendario."],
      ["Clasifica como coste fijo o variable: alquiler del taller, tornillos, licencia del programa CAD, plástico.", "Fijos: alquiler y licencia. Variables: tornillos y plástico (crecen con cada unidad)."],
      ["¿Qué cuatro partes tiene la documentación de un proyecto?", "Memoria, planos, pliego de condiciones y presupuesto."],
      ["¿Qué significan las siglas UNE, EN e ISO?", "UNE: Una Norma Española; EN: norma europea; ISO: Organización Internacional de Normalización."],
      ["¿Cuánto dura una patente y qué ocurre después?", "20 años desde la solicitud; después la invención pasa al dominio público y cualquiera puede usarla."],
      ["Cita tres medidas de ecodiseño.", "Usar materiales reciclados o reciclables, reducir la cantidad de material y facilitar el desmontaje y la reparación (también: menor consumo, mayor vida útil)."],
    ],
    m: [
      ["Calcula el punto muerto: CF = 12 000 €, precio 40 €, coste variable 16 €.", "Margen = 40 − 16 = 24 €. Q = 12 000 / 24 = 500 unidades."],
      ["Con los datos anteriores, ¿qué beneficio se obtiene vendiendo 800 unidades?", "Beneficio = (p − v)·N − CF = 24·800 − 12 000 = 19 200 − 12 000 = 7200 €."],
      ["Tareas: A (2 d), B (4 d, tras A), C (3 d, tras A), D (2 d, tras C). E (1 d, tras B y D). Halla la duración mínima.", "Caminos: A-B-E = 2 + 4 + 1 = 7; A-C-D-E = 2 + 3 + 2 + 1 = 8. Duración mínima 8 días, camino crítico A-C-D-E."],
      ["En el ejercicio anterior, ¿qué holgura tiene B?", "B puede acabar como tarde el día 7 (E empieza el 7). Empieza como pronto el día 2 y dura 4: acaba el 6. Holgura = 1 día."],
      ["Matriz ponderada: precio (0,4), autonomía (0,4), peso (0,2). Dron X: 6, 9, 5. Dron Y: 9, 5, 8. ¿Cuál elegir?", "X = 2,4 + 3,6 + 1 = 7,0. Y = 3,6 + 2 + 1,6 = 7,2. Gana Y por poco."],
      ["Aplica el método MoSCoW a una bici eléctrica escolar: frenos, cargador USB para el móvil, autonomía de 30 km, GPS antirrobo, color personalizable.", "Must: frenos y autonomía de 30 km. Should: GPS antirrobo. Could: cargador USB. Won't (por ahora): color personalizable."],
      ["¿Por qué un proyecto de puente suele gestionarse en cascada y una app con Scrum?", "En el puente, cambiar el diseño durante la obra es carísimo y los requisitos son estables; en la app los requisitos cambian y cada versión se puede probar y corregir con poco coste."],
      ["Aplica SCAMPER a un paraguas: propone una idea en tres de las letras.", "Sustituir: tela por material que repele agua y no se rompe con el viento. Combinar: paraguas con linterna en el mango. Eliminar: varillas exteriores, abriendo hacia dentro (paraguas invertido)."],
      ["Explica por qué un requisito debe ser verificable con un ejemplo de ensayo.", "Porque al final hay que demostrar que se cumple. Si el requisito es «soporta 50 kg», el ensayo consiste en aplicar 50 kg y comprobar que no rompe ni se deforma más de lo permitido."],
      ["Un plano se cambia de la revisión B a la C. ¿Qué información debe quedar registrada?", "Qué se cambió, por qué, quién lo hizo, cuándo y quién lo aprobó, para que nadie fabrique con la versión B."],
      ["Diferencia patente y modelo de utilidad.", "La patente protege invenciones con actividad inventiva elevada durante 20 años y exige examen más riguroso; el modelo de utilidad protege mejoras técnicas menores durante 10 años con requisitos más sencillos."],
      ["Explica qué es el marcado CE y si garantiza que un producto es europeo.", "Es la declaración del fabricante de que el producto cumple las directivas europeas de seguridad y salud. No indica el país de fabricación: un producto hecho en Asia también lo lleva si cumple."],
      ["¿Qué etapa del ciclo de vida pesa más en un frigorífico y qué haría el ecodiseño?", "El uso, por su consumo eléctrico durante años. El ecodiseño mejoraría el aislamiento y el compresor para reducir el consumo (clase energética alta)."],
    ],
    a: [
      ["Una empresa duda entre dos procesos. Inyección: CF = 30 000 €, v = 3 €. Impresión 3D: CF = 2000 €, v = 10 €. ¿A partir de cuántas piezas compensa la inyección?", "Coste total igual: 30 000 + 3N = 2000 + 10N → 28 000 = 7N → N = 4000 piezas. Por encima de 4000, la inyección es más barata."],
      ["Red PERT: A (3), B (2, tras A), C (4, tras A), D (5, tras B), E (2, tras C), F (3, tras D y E). Calcula la duración, el camino crítico y la holgura de C y E.", "A-B-D-F = 3 + 2 + 5 + 3 = 13; A-C-E-F = 3 + 4 + 2 + 3 = 12. Duración 13, crítico A-B-D-F. C y E comparten 1 día de holgura (su camino dura 12)."],
      ["En el ejercicio anterior, la tarea B se retrasa 2 días. ¿Cuánto dura ahora el proyecto?", "B pasa a 4 días: A-B-D-F = 3 + 4 + 5 + 3 = 15 días. Como B es crítica, el proyecto se retrasa los 2 días completos."],
      ["Precio 50 €, v = 20 €, CF = 45 000 €. El mercado estima vender 1200 unidades. ¿Es viable? ¿Qué precio mínimo haría falta para cubrir costes con esas ventas?", "Q = 45 000 / 30 = 1500 > 1200: no se cubren costes. Precio mínimo: 45 000 / 1200 + 20 = 37,5 + 20 = 57,5 €."],
      ["Diseña la estructura de desglose del trabajo (EDT) de un robot seguidor de líneas en cuatro paquetes con dos tareas cada uno.", "Mecánica: chasis, sistema de tracción. Electrónica: placa de sensores, driver de motores. Programación: lectura de sensores, algoritmo de control. Gestión: planificación y presupuesto, documentación y pruebas."],
      ["Con una matriz de pesos coste 0,3, seguridad 0,5 y estética 0,2, la alternativa P obtiene 9, 4, 9 y la Q obtiene 5, 9, 4. Calcula, comenta el resultado y propone qué pasaría si la seguridad pesara 0,3 y el coste 0,5.", "Caso 1: P = 2,7 + 2 + 1,8 = 6,5; Q = 1,5 + 4,5 + 0,8 = 6,8, gana Q. Caso 2: P = 4,5 + 1,2 + 1,8 = 7,5; Q = 2,5 + 2,7 + 0,8 = 6,0, gana P. El resultado depende mucho de los pesos; en un producto peligroso, la seguridad debe pesar más o fijarse como requisito mínimo."],
      ["Explica por qué en un proyecto ágil también hace falta documentación y qué tipo conviene.", "Para que otros entiendan, mantengan y certifiquen el producto. Se prioriza documentación ligera y actualizada: requisitos como historias de usuario, decisiones de diseño, esquemas y manual, generados a la vez que el producto."],
      ["Calcula el beneficio de un sprint de mejora: cuesta 6000 € y reduce el coste variable de 14 a 12 € en un producto del que se venden 5000 unidades al año.", "Ahorro anual = 2 € · 5000 = 10 000 €. Beneficio en el primer año = 10 000 − 6000 = 4000 €; se amortiza en 0,6 años (unos 7 meses)."],
      ["Un estudiante quiere patentar «un coche que funcione con agua». Analiza si cumple los requisitos de patentabilidad.", "Le falta una invención concreta y una aplicación industrial demostrable: como idea vaga no es patentable. Además, debe respetar las leyes físicas (el agua no es combustible); sin una realización técnica descrita, la solicitud se rechazaría."],
      ["Propone tres indicadores para medir la sostenibilidad de una botella reutilizable frente a una de un solo uso.", "Emisiones de CO₂ por litro servido a lo largo de su vida, número de usos antes de ser desechada y porcentaje de material reciclable o reciclado. Comparándolos se calcula a partir de cuántos usos compensa la reutilizable."],
    ],
  },
  glosario: [
    ["Proyecto", "Conjunto de actividades temporales para lograr un resultado único."],
    ["Requisito", "Condición que debe cumplir la solución, preferiblemente medible."],
    ["Pliego de condiciones", "Documento con materiales, calidades, normas y condiciones de fabricación."],
    ["Prototipo", "Modelo funcional que se construye para ensayar la solución."],
    ["CAD", "Diseño asistido por ordenador."],
    ["Design thinking", "Metodología de diseño centrada en las personas usuarias."],
    ["Scrum", "Metodología ágil basada en sprints, roles y backlog."],
    ["Sprint", "Ciclo corto de trabajo que termina en una entrega que funciona."],
    ["Diagrama de Gantt", "Representación de tareas como barras en el tiempo."],
    ["Diagrama PERT", "Red de tareas y dependencias para calcular el camino crítico."],
    ["Camino crítico", "Secuencia de tareas dependientes más larga del proyecto."],
    ["Holgura", "Tiempo que una tarea puede retrasarse sin retrasar el proyecto."],
    ["Punto muerto", "Unidades vendidas a partir de las cuales hay beneficio."],
    ["Normalización", "Establecimiento de reglas técnicas comunes (UNE, EN, ISO)."],
    ["Marcado CE", "Declaración de conformidad con las directivas europeas."],
    ["Patente", "Derecho exclusivo de explotación de una invención durante 20 años."],
    ["Análisis de ciclo de vida", "Evaluación del impacto ambiental de un producto en todas sus etapas."],
    ["Ecodiseño", "Diseño que reduce el impacto ambiental desde el inicio."],
  ],
  situacion: {
    titulo: "Un producto para el patio del instituto",
    reto: "En equipos de cuatro, detectad una necesidad real del patio o de las aulas (sombra, aparcabicis, recogida selectiva, un banco modular…) y llevad a cabo el anteproyecto completo de una solución, como si fuerais una pequeña oficina técnica.",
    pasos: [
      "Entrevistad a cinco usuarios y redactad la definición del problema y una lista de requisitos medibles ordenados con MoSCoW.",
      "Generad al menos tres alternativas con bocetos y elegid una con una matriz de decisión ponderada.",
      "Dibujad la solución en CAD y construid un prototipo a escala o de baja fidelidad.",
      "Planificad la fabricación real con un diagrama de Gantt y calculad el camino crítico y el presupuesto.",
      "Organizad el trabajo en dos sprints con un tablero Kanban y una reunión breve diaria.",
      "Presentad la documentación (memoria, planos, pliego y presupuesto) y probad el prototipo con usuarios.",
    ],
    producto: "Un anteproyecto con memoria, planos, presupuesto, Gantt y prototipo, presentado ante la clase y la dirección del centro.",
    evaluacion: [
      "Los requisitos son medibles y la elección de la alternativa está justificada.",
      "La planificación (Gantt, camino crítico) y el presupuesto son coherentes y realistas.",
      "El prototipo permite comprobar la idea y se ha mejorado tras la prueba con usuarios.",
      "La documentación es completa, ordenada y cumple las normas básicas de presentación.",
    ],
  },
  familias: [
    "Pedidle que os explique el camino crítico usando una tarea doméstica, como preparar una comida con varios platos.",
    "Buscad juntos el marcado CE en tres aparatos de casa y comentad qué significa.",
    "Elegid un objeto que se haya roto en casa y pensad cómo lo rediseñaríais para que durara más.",
    "Animadle a repasar las tarjetas del tema en voz alta diez minutos al día.",
  ],
  saberes: "Proyectos de investigación y desarrollo: estrategias de gestión y desarrollo de proyectos (metodologías ágiles y design thinking), diagramas de Gantt y PERT, presupuesto y viabilidad, documentación técnica, normalización, propiedad industrial, ciclo de vida del producto y emprendimiento (RD 243/2022, Tecnología e Ingeniería I, bloque A).",
  ideas: [
    "Gestionar todo el curso como un proyecto Scrum con tablero Kanban en el aula.",
    "Calcular un Gantt real con una hoja de cálculo o con software libre de gestión de proyectos.",
    "Consultar la base de datos de patentes de la OEPM para estudiar una invención relacionada con el reto.",
    "Analizar el ciclo de vida de un objeto cotidiano con una herramienta sencilla de huella de carbono.",
  ],
  fuentes: [
    { t: "Oficina Española de Patentes y Marcas (OEPM)", url: "https://www.oepm.es" },
    { t: "Diagrama de Gantt, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Diagrama_de_Gantt" },
    { t: "Método de la ruta crítica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%A9todo_de_la_ruta_cr%C3%ADtica" },
  ],
});
