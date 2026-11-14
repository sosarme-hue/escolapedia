// Tecnología y Digitalización 1º ESO: la tecnología y el proceso tecnológico. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "La tecnología y el proceso tecnológico",
  minutos: 55,
  objetivos: ["Definir la tecnología y distinguirla de la ciencia y la técnica", "Reconocer la evolución de la tecnología a lo largo de la historia", "Describir las fases del proceso tecnológico de resolución de problemas", "Organizar un proyecto en equipo y elaborar su documentación"],
  claves: ["tecnología", "técnica", "ciencia", "objeto tecnológico", "necesidad", "proceso tecnológico", "diseño", "boceto", "planificación", "construcción", "evaluación", "memoria técnica", "trabajo en equipo"],
  pregunta: {
    texto: "Un bolígrafo de plástico cuesta muy poco. ¿Cuántas personas y conocimientos crees que hacen falta para fabricarlo?",
    respuesta: "Muchísimos. Hace falta extraer petróleo y convertirlo en plástico, fundir metal para la bolita de la punta (que se fabrica con una precisión de milésimas de milímetro), preparar la tinta, diseñar el mecanismo, fabricar los moldes y las máquinas, empaquetar y transportar. Ninguna persona sola sabe hacer todo eso: un objeto tan sencillo es el resultado de miles de años de <b>tecnología</b> acumulada y del trabajo de miles de personas.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la tecnología?</h3><p>La <mark>tecnología</mark> es el conjunto de <b>conocimientos, técnicas y recursos</b> que las personas usan para <b>diseñar y construir objetos, máquinas y sistemas</b> que resuelven problemas o satisfacen necesidades. Las necesidades pueden ser básicas, como alimentarse, protegerse del frío o curarse, o de otro tipo, como comunicarse, desplazarse o divertirse. Todo lo que el ser humano ha creado para ello son <mark>objetos tecnológicos</mark>: desde un cuchillo de sílex o una rueda hasta una lavadora, un puente, un móvil o un programa informático. Conviene distinguir tres palabras que a menudo se confunden. La <b>ciencia</b> busca <b>conocer y explicar</b> cómo funciona la naturaleza: por qué flota un barco, cómo se conduce la electricidad. La <b>técnica</b> es el <b>saber hacer</b>, el conjunto de procedimientos y habilidades prácticas para hacer algo: serrar madera, soldar, tejer. Y la <b>tecnología</b> une las dos: aplica los conocimientos científicos y las técnicas para crear soluciones útiles de forma planificada.</p>`,
    },
    {
      html: `<h3>Breve historia de la tecnología</h3><p>La tecnología es tan antigua como el ser humano. En la <b>Prehistoria</b>, nuestros antepasados fabricaron las primeras herramientas de piedra, dominaron el <b>fuego</b> y, más tarde, con la <b>agricultura y la ganadería</b>, inventaron el arado, la cerámica y los tejidos. En la <b>Edad Antigua</b> aparecieron la <b>rueda</b>, la metalurgia del cobre, el bronce y el hierro, la escritura, las palancas y poleas, y grandes obras de ingeniería como los acueductos romanos. En la <b>Edad Media</b> se extendieron los molinos de agua y de viento, y a mediados del siglo XV la <b>imprenta</b> permitió difundir los libros. La <b>Revolución Industrial</b> (siglos XVIII y XIX) cambió el mundo con la <b>máquina de vapor</b>, las fábricas, el ferrocarril y, después, la electricidad, el teléfono y el automóvil. En el siglo XX llegaron el avión, la radio, la televisión, los plásticos, el ordenador e Internet. Hoy vivimos la <b>era digital</b>, con móviles, inteligencia artificial, robots y energías renovables. Cada avance se apoya en los anteriores, por eso la tecnología avanza cada vez más deprisa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo de la tecnología: herramientas de piedra, rueda, imprenta, máquina de vapor, ordenador e Internet">${BG}
        <path d="M14 96 H 250" stroke="var(--ink)" stroke-width="2.5"/>${fl(236, 96, 252, 96, "var(--ink)", 2.5)}
        ${[["piedra", "2,5 Ma", COL.marron], ["rueda", "−3500", COL.naranja], ["imprenta", "1450", COL.rojo], ["vapor", "1769", COL.gris], ["ordenador", "1946", COL.azul], ["Internet", "1990", COL.verde]].map(([n, f, c], i) => {
          const x = 26 + i * 41, up = i % 2 === 0;
          return `<circle cx="${x}" cy="96" r="6" fill="${c}"/>${t(x, up ? 70 : 128, n, { size: 9.5, color: c })}${t(x, up ? 82 : 140, f, { size: 8.5, weight: 400, color: "var(--muted)" })}`;
        }).join("")}
        ${t(130, 32, "cada invento se apoya en los anteriores", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "OBA1EJWhpxA", titulo: "Qué es la TECNOLOGÍA [Definición, Tipos y Ejemplos]", canal: "Jorge Cogollo", vistas: 944019 },
    },
    {
      html: `<h3>Tecnología y sociedad</h3><p>La tecnología ha transformado la forma de vivir de las personas. Ha permitido producir más alimentos, curar enfermedades y alargar la esperanza de vida, viajar y comunicarse a cualquier distancia, acceder a la información y reducir los trabajos más duros. Pero también tiene <b>efectos negativos</b> que hay que tener en cuenta: el consumo de recursos y energía, la <b>contaminación</b> y los residuos, el cambio climático, la desaparición de algunos empleos, la dependencia de las pantallas o las desigualdades entre quienes tienen acceso a ella y quienes no. Por eso, cuando diseñamos un objeto o elegimos uno, no basta con que funcione: hay que pensar también en su <b>impacto ambiental y social</b>. Un buen diseño tecnológico hoy busca que el objeto sea <b>útil, seguro, accesible</b> para todas las personas (también para quienes tienen alguna discapacidad), que consuma poca energía, que dure y se pueda reparar, y que sus materiales se puedan reciclar al final de su vida útil.</p>`,
    },
    {
      html: `<h3>El proceso tecnológico</h3><p>Cuando los ingenieros y diseñadores crean un objeto nuevo, no lo hacen al azar: siguen un método ordenado, parecido al método científico, llamado <mark>proceso tecnológico</mark> o método de proyectos. Consiste en una serie de <b>fases</b> que llevan desde que se detecta un problema hasta que se tiene una solución que funciona. Las fases son: 1) <b>identificar el problema</b> o la necesidad; 2) <b>buscar información</b>; 3) <b>diseñar</b> la solución (generar ideas, elegir la mejor y dibujarla); 4) <b>planificar</b> el trabajo (materiales, herramientas, tareas y tiempos); 5) <b>construir</b> el objeto; 6) <b>evaluar</b> si funciona y cumple las condiciones, y mejorarlo; y 7) <b>divulgar</b> o presentar el resultado. Es un proceso <b>cíclico</b>: si al evaluar se descubre un fallo, se vuelve a una fase anterior para corregirlo. En el aula de Tecnología se usa este mismo método para hacer proyectos en equipo, y todo el proceso se recoge en un documento llamado <b>memoria técnica</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fases del proceso tecnológico en ciclo: problema, información, diseño, planificación, construcción, evaluación y presentación, con vuelta atrás para mejorar">${BG}
        ${[["1 problema", COL.rojo], ["2 información", COL.naranja], ["3 diseño", COL.sol], ["4 planificación", COL.verde], ["5 construcción", COL.agua], ["6 evaluación", COL.azul], ["7 presentar", COL.morado]].map(([n, c], i) => {
          const a = -Math.PI / 2 + (i / 7) * Math.PI * 2, x = 130 + 88 * Math.cos(a), y = 90 + 66 * Math.sin(a);
          return cj(x - 36, y - 12, 72, 24, n, c, { size: 10, rx: 12 });
        }).join("")}
        <circle cx="130" cy="90" r="30" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>${fl(152, 70, 156, 76, "var(--muted)", 1.5)}
        ${t(130, 94, "mejorar", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Fases 1 y 2: el problema y la información</h3><p>Todo proyecto empieza con un <mark>problema</mark> o una <b>necesidad</b>. Hay que describirlo con claridad y anotar las <b>condiciones</b> que debe cumplir la solución, es decir, sus requisitos: el tamaño máximo, el peso, el precio, los materiales disponibles, el tiempo, la seguridad, la estética… Por ejemplo: «En el patio del instituto hay muchos pájaros en invierno y queremos un <b>comedero</b> que se pueda colgar de un árbol, que proteja las semillas de la lluvia, que se pueda rellenar fácilmente, que esté hecho con materiales reutilizados y que cueste menos de 5 euros». Después hay que <mark>buscar información</mark>: observar soluciones que ya existen (en tiendas, catálogos o Internet), analizar qué tienen de bueno y de malo, consultar libros y webs fiables, preguntar a personas que saben del tema y averiguar qué materiales y técnicas podemos usar. En nuestro ejemplo, convendría saber qué semillas comen los pájaros de la zona y a qué altura conviene colgar el comedero para que los gatos no los alcancen.</p>`,
    },
    {
      html: `<h3>Fase 3: el diseño</h3><p>En la fase de <mark>diseño</mark> se buscan posibles soluciones. Primero, cada miembro del equipo propone ideas libremente, sin criticarlas, en una <b>lluvia de ideas</b>; cuantas más ideas, mejor. Cada idea se representa con un <b>boceto</b>, un dibujo rápido a mano alzada. Después, el equipo compara las propuestas teniendo en cuenta las condiciones del problema, por ejemplo con una tabla de puntos, y <b>elige la mejor</b> solución, o combina lo mejor de varias. Una vez elegida, se define con más detalle mediante <b>croquis</b> con las medidas de cada pieza, las <b>vistas</b> del objeto y, si hace falta, planos de montaje. En esta fase también se deciden los <b>materiales</b> de cada pieza y cómo se van a unir (con tornillos, cola, clavos, encajes…). Hoy los profesionales usan programas de diseño asistido por ordenador (CAD) para hacer los planos y ver el objeto en 3D antes de fabricarlo; en el instituto se pueden usar programas gratuitos y sencillos, como Tinkercad, e incluso imprimir piezas en 3D.</p>${tabla(["Condición", "Idea A: botella", "Idea B: casita de madera", "Idea C: brik"], [["Protege de la lluvia", "2", "3", "2"], ["Fácil de rellenar", "2", "2", "3"], ["Material reutilizado", "3", "1", "3"], ["Coste bajo", "3", "1", "3"], ["Total", "10", "7", "11"]])}`,
      video: { id: "t068vdmj_Ck", titulo: "Fases de un proyecto de Tecnología en la ESO", canal: "Francisco Jose", vistas: 57945 },
    },
    {
      html: `<h3>Fase 4: la planificación</h3><p>Antes de ponerse a construir, hay que <mark>planificar</mark> el trabajo para no perder tiempo ni material. La planificación responde a varias preguntas: <b>¿qué piezas hay que fabricar y en qué orden?</b> (una <b>hoja de procesos</b> con los pasos de fabricación y montaje); <b>¿qué materiales hacen falta y cuánto cuestan?</b> (una <b>lista de materiales</b> con cantidades y un <b>presupuesto</b>); <b>¿qué herramientas usaremos?</b> (una lista de herramientas y las <b>normas de seguridad</b> para cada una); y <b>¿quién hace cada cosa y cuándo?</b> (un <b>reparto de tareas</b> entre los miembros del equipo y un calendario). En un equipo es útil asignar <b>roles</b>, como coordinador, secretario (que toma notas para la memoria), responsable de materiales y responsable de seguridad, y que vayan rotando. Una buena planificación evita muchos problemas: por ejemplo, descubrir a mitad del proyecto que falta un material o que una pieza no se puede hacer con las herramientas del aula.</p>`,
    },
    {
      html: `<h3>Fases 5, 6 y 7: construir, evaluar y presentar</h3><p>En la fase de <mark>construcción</mark> se fabrican las piezas siguiendo los planos y la hoja de procesos: se <b>miden y marcan</b> los materiales, se <b>cortan</b>, se <b>dan forma</b> (limar, lijar, taladrar, doblar), se <b>unen</b> y se dan los <b>acabados</b> (pintura, barniz). Siempre respetando las normas de seguridad del taller y manteniendo el puesto de trabajo limpio y ordenado. Es normal que surjan imprevistos y haya que hacer pequeños cambios, que se anotan. Después viene la <mark>evaluación</mark>: se <b>prueba</b> el objeto para comprobar si funciona y si cumple todas las condiciones del principio; si algo falla, se analiza la causa y se busca una <b>mejora</b>, volviendo a la fase necesaria. También se evalúa el trabajo del equipo: qué ha ido bien y qué se puede mejorar. Por último, se <mark>presenta</mark> el proyecto a los compañeros, explicando el problema, la solución elegida, cómo se construyó y los resultados, y se entrega la <b>memoria técnica</b>, que recoge toda la documentación: descripción del problema, bocetos, planos, lista de materiales, presupuesto, hoja de procesos, evaluación y conclusiones.</p>`,
      video: { id: "MuihMEPuo58", titulo: "Proyectos 1º ESO - Juguetes con movimiento", canal: "auladetecnologias", vistas: 166614 },
    },
  ],
  figura: {
    titulo: "El proceso tecnológico de un vistazo",
    svg: rejilla([
      ["Problema", "necesidad y condiciones", COL.rojo],
      ["Información", "buscar y analizar soluciones", COL.naranja],
      ["Diseño", "ideas, bocetos, croquis", COL.sol],
      ["Planificación", "materiales, tareas, presupuesto", COL.verde],
      ["Construcción", "medir, cortar, unir, acabar", COL.agua],
      ["Evaluación", "probar y mejorar", COL.azul],
      ["Presentación", "explicar el proyecto", COL.morado],
      ["Memoria técnica", "toda la documentación", COL.gris],
    ], 4, 86, "Resumen: fases del proceso tecnológico y memoria técnica"),
  },
  video: { id: "HVpBoJFL7NI", titulo: "Fases del Proyecto Tecnológico", canal: "Gmedrano TIC", vistas: 38651, megusta: 0, busqueda: "el proceso tecnológico fases" },
  ejemplos: [
    { enunciado: "Clasifica como ciencia, técnica o tecnología: a) estudiar por qué el hielo flota; b) saber serrar un listón recto; c) diseñar y fabricar un frigorífico.",
      pasos: ["a) Busca explicar un fenómeno natural: ciencia.", "b) Es una habilidad práctica: técnica.", "c) Aplica conocimientos y técnicas para resolver una necesidad: tecnología."],
      resultado: "a) ciencia; b) técnica; c) tecnología." },
    { enunciado: "Calcula el presupuesto de un comedero que necesita: 1 brik reutilizado (0 €), 50 cm de cuerda a 0,80 €/m, 1 palito de madera de 0,20 € y pintura por valor de 1,50 €.",
      pasos: ["Cuerda: 0,5 m · 0,80 €/m = 0,40 €.", "Suma: 0 + 0,40 + 0,20 + 1,50 = 2,10 €."],
      resultado: "2,10 €, por debajo del límite de 5 €." },
    { enunciado: "Al probar el comedero, el agua de lluvia moja las semillas. ¿En qué fase estáis y qué haréis?",
      pasos: ["Probar el objeto es la fase de evaluación.", "Hay que buscar la causa: el tejadillo es demasiado corto.", "Se vuelve al diseño para alargarlo, se modifica y se prueba otra vez."],
      resultado: "Evaluación: se vuelve al diseño y se mejora el tejadillo." },
  ],
  errores: [
    "Empezar a construir sin diseñar ni planificar.",
    "Confundir ciencia (conocer) con tecnología (crear soluciones).",
    "Olvidar anotar las condiciones del problema y luego no saber si la solución es buena.",
    "Pensar que la evaluación es solo poner nota: es probar y mejorar el objeto.",
    "Dejar la memoria técnica para el final y no recordar qué se hizo.",
  ],
  ejercicios: [
    { q: "Define tecnología con tus palabras.", sol: "Conjunto de conocimientos y técnicas para diseñar y construir objetos y sistemas que resuelven problemas o necesidades." },
    { q: "¿Qué diferencia hay entre ciencia, técnica y tecnología?", sol: "La ciencia explica la naturaleza; la técnica es el saber hacer práctico; la tecnología une ambas para crear soluciones." },
    { q: "Nombra cuatro inventos clave en la historia de la tecnología y su época.", sol: "Fuego y herramientas de piedra (Prehistoria), rueda (Antigüedad), imprenta (siglo XV), máquina de vapor (Revolución Industrial)." },
    { q: "Escribe dos efectos positivos y dos negativos de la tecnología.", sol: "Positivos: mejora la salud y la comunicación. Negativos: contaminación y consumo de recursos." },
    { q: "Escribe en orden las fases del proceso tecnológico.", sol: "Problema, información, diseño, planificación, construcción, evaluación y presentación." },
    { q: "¿Por qué decimos que el proceso tecnológico es cíclico?", sol: "Porque si al evaluar algo falla se vuelve a una fase anterior para mejorarlo." },
    { q: "¿Qué es una lluvia de ideas y qué norma tiene?", sol: "Proponer muchas ideas libremente, sin criticarlas al principio." },
    { q: "¿Qué documentos se preparan en la planificación?", sol: "Hoja de procesos, lista de materiales y presupuesto, lista de herramientas, normas de seguridad y reparto de tareas." },
    { q: "¿Qué es la memoria técnica y qué contiene?", sol: "El documento del proyecto: problema, bocetos, planos, materiales, presupuesto, procesos, evaluación y conclusiones." },
    { q: "Plantea las condiciones que debería cumplir un portalápices para tu mesa.", sol: "Respuesta abierta: por ejemplo, tamaño máximo de 10 × 10 cm, estable, con huecos para lápices y reglas, de material reutilizado y por menos de 3 €." },
  ],
  quiz: [
    { q: "La tecnología sirve para…", o: ["resolver problemas y necesidades", "solo entretener", "explicar la naturaleza"], a: 0, e: "Resolver problemas." },
    { q: "Explicar por qué flota un barco es…", o: ["ciencia", "técnica", "tecnología"], a: 0, e: "Ciencia." },
    { q: "La imprenta se inventó hacia…", o: ["1450", "1769", "1990"], a: 0, e: "Mediados del siglo XV." },
    { q: "La máquina de vapor se asocia a la…", o: ["Revolución Industrial", "Prehistoria", "Edad Media"], a: 0, e: "Revolución Industrial." },
    { q: "La primera fase del proceso tecnológico es…", o: ["construir", "identificar el problema", "evaluar"], a: 1, e: "Identificar el problema." },
    { q: "Un dibujo rápido a mano alzada es un…", o: ["boceto", "plano", "presupuesto"], a: 0, e: "Boceto." },
    { q: "La lista de pasos de fabricación es la…", o: ["hoja de procesos", "memoria", "lluvia de ideas"], a: 0, e: "Hoja de procesos." },
    { q: "Probar el objeto y mejorarlo es la fase de…", o: ["evaluación", "diseño", "información"], a: 0, e: "Evaluación." },
    { q: "El documento que recoge todo el proyecto es la…", o: ["memoria técnica", "factura", "lista de la compra"], a: 0, e: "Memoria técnica." },
    { q: "Los programas de diseño por ordenador se llaman…", o: ["CAD", "GPS", "PDF"], a: 0, e: "CAD." },
  ],
  examen: [
    { q: "Si al evaluar el objeto falla, hay que…", o: ["volver a una fase anterior", "tirarlo", "presentarlo igual"], a: 0, e: "El proceso es cíclico." },
    { q: "Las condiciones que debe cumplir la solución se fijan en la fase de…", o: ["problema", "construcción", "presentación"], a: 0, e: "Al definir el problema." },
    { q: "Un diseño accesible es el que…", o: ["pueden usar todas las personas", "es caro", "es grande"], a: 0, e: "Pensado para todas las personas." },
  ],
  feynman: ["Qué es la tecnología y en qué se diferencia de la ciencia", "Cuáles son las fases del proceso tecnológico", "Qué contiene una memoria técnica"],
  mapa: mapa("TECNOLOGÍA", "var(--eso)", [
    ["Concepto", "ciencia · técnica · tecnología", COL.azul],
    ["Historia", "fuego · rueda · vapor · digital", COL.marron],
    ["Proceso", "problema → diseño → evaluación", COL.verde],
    ["Proyecto", "equipo · memoria técnica", COL.morado],
  ], 300),
  tarjetas: [
    ["Tecnología", "Conocimientos y técnicas para crear soluciones a necesidades."],
    ["Técnica", "Saber hacer práctico: procedimientos y habilidades."],
    ["Objeto tecnológico", "Cualquier objeto creado por las personas para resolver una necesidad."],
    ["Proceso tecnológico", "Método por fases para resolver un problema técnico."],
    ["Condiciones", "Requisitos que debe cumplir la solución."],
    ["Lluvia de ideas", "Proponer muchas ideas sin criticarlas al principio."],
    ["Hoja de procesos", "Lista ordenada de pasos de fabricación y montaje."],
    ["Memoria técnica", "Documento que recoge todo el proyecto."],
  ],
  familias: ["Elegid un objeto de casa y averiguad juntos de qué materiales está hecho y cómo se fabricó.", "Pensad un pequeño problema doméstico (cables enredados, llaves perdidas) y diseñad una solución con materiales reutilizados.", "Comparad cómo se hacía una tarea en tiempos de los abuelos y cómo se hace ahora."],
  profesores: {
    saberes: "Proceso de resolución de problemas: estrategias y fases del proyecto técnico, documentación, trabajo cooperativo; tecnología y sociedad, evolución histórica, impacto ambiental y diseño sostenible y accesible (RD 217/2022, Tecnología y Digitalización, bloques Proceso de resolución de problemas y Tecnología sostenible).",
    ideas: ["Proyecto de comedero para aves con materiales reutilizados y memoria técnica.", "Línea del tiempo colaborativa de inventos con fecha e impacto.", "Rúbrica de coevaluación del trabajo en equipo por roles."],
  },
  fuentes: [RD, wiki("Tecnología", "Tecnología"), wiki("Historia de la tecnología", "Historia_de_la_tecnología"), { t: "INTEF: recursos educativos de Tecnología", url: "https://intef.es/" }],
  revisado: REV,
};

// Ampliación a nivel libro (README, «Tema nivel libro»), pensada para alumnos de 12 años:
// lectura, apartados nuevos, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso1L5").libro(module.exports, {
  lectura: ["El problema de las mochilas", `<p>En el instituto de Lucía había un problema que nadie sabía resolver: en el pasillo de 1.º, las mochilas se amontonaban en el suelo durante el recreo. La gente tropezaba, las mochilas se pisaban y, un día, un compañero que va en silla de ruedas no pudo pasar.</p><p>La profesora de Tecnología propuso convertirlo en un proyecto. «Sois ingenieros e ingenieras», les dijo. «Tenéis tres semanas y un presupuesto de veinte euros por grupo». Lo primero que hicieron fue medir el pasillo, contar las mochilas y preguntar a los demás qué necesitaban. Descubrieron que algunas mochilas pesaban más de seis kilos y que los colgadores tenían que estar a una altura que todos pudieran alcanzar.</p><p>Cada grupo dibujó bocetos. Hubo ideas de todo tipo: estanterías, ganchos, una especie de taquillas de cartón… Eligieron las mejores, hicieron planos, compraron listones y ganchos, y construyeron prototipos. El primer colgador se rompió con dos mochilas. Lo reforzaron, lo volvieron a probar y esta vez aguantó.</p><p>Al final, el pasillo quedó despejado y el equipo de Lucía presentó su proyecto al claustro. Sin saberlo, habían seguido los mismos pasos que siguen los ingenieros de verdad. En este tema aprenderás qué es la tecnología y cómo es el <b>proceso tecnológico</b>, el método para resolver problemas creando objetos.</p>`],
  mas: [
    ["<h3>¿Qué es la tecnología?</h3>", `<p>Es importante distinguir tres palabras parecidas. La <b>ciencia</b> busca conocer y explicar cómo funciona el mundo (por qué flota un barco). La <b>técnica</b> es el conjunto de procedimientos y habilidades para hacer algo (saber clavar un clavo o soldar). La <b>tecnología</b> une las dos: usa los conocimientos científicos y las técnicas para crear objetos y sistemas que resuelven problemas (diseñar y construir un barco). Los objetos que fabrica la tecnología se llaman <b>objetos tecnológicos</b>: un lápiz, una bicicleta o un móvil.</p>`],
    ["<h3>El proceso tecnológico</h3>", `<p>Las fases son: 1) identificar el problema, 2) buscar información, 3) diseñar, 4) planificar, 5) construir, 6) evaluar y 7) presentar. No es un camino en línea recta: es <b>cíclico</b>. Si en la evaluación algo falla, se vuelve a la fase que haga falta (a veces al diseño, a veces a la construcción) hasta que el objeto funciona bien.</p>`],
    ["<h3>Fase 3: el diseño</h3>", `<p>Para elegir la mejor idea es útil hacer una <b>tabla de valoración</b>: en las filas, las propuestas; en las columnas, los criterios (cumple las condiciones, es fácil de construir, es barata, es resistente, es bonita), y se puntúa cada una del 1 al 5. La que suma más puntos suele ser la mejor opción, aunque a veces se combinan ideas de varias.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es la tecnología?</h3>", "Ciencia, técnica y tecnología", [["ciencia", "conocer: por qué flota"], ["técnica", "saber hacer: soldar"], ["tecnología", "crear: diseñar un barco"]], "tres palabras parecidas"],
    ["<h3>Tecnología y sociedad</h3>", "Tecnología y sociedad", [["ventajas", "salud, comunicación, alimentos"], ["inconvenientes", "residuos, contaminación"], ["buen diseño", "útil, seguro, accesible"]], "dos caras de la tecnología"],
    ["<h3>Fases 1 y 2: el problema y la información</h3>", "El problema y la información", [["problema", "describirlo con claridad"], ["condiciones", "tamaño, precio, peso"], ["información", "libros, internet, expertos"], ["objetos parecidos", "analizarlos"]], "fases 1 y 2"],
    ["<h3>Fase 3: el diseño</h3>", "El diseño", [["lluvia de ideas", "sin criticar"], ["bocetos", "dibujos a mano alzada"], ["elegir", "tabla de valoración"], ["croquis y planos", "con medidas"]], "fase 3"],
    ["<h3>Fase 4: la planificación</h3>", "La planificación", [["hoja de procesos", "pasos en orden"], ["materiales", "lista y presupuesto"], ["herramientas", "y su seguridad"], ["equipo", "tareas y calendario"]], "fase 4"],
    ["<h3>Fases 5, 6 y 7: construir, evaluar y presentar</h3>", "Construir, evaluar, presentar", [["construir", "medir, cortar, unir"], ["evaluar", "probar y mejorar"], ["presentar", "explicar y memoria"]], "fases 5, 6 y 7"],
  ],
  bloques: [
    { tras: "<h3>Tecnología y sociedad</h3>", html: `<h3>Diseñar de forma sostenible</h3><p>Cada objeto que usamos tiene un <b>ciclo de vida</b>: se extraen las materias primas, se fabrica, se transporta, se usa y, al final, se convierte en residuo. En cada etapa se gasta energía y se contamina. Diseñar de forma <mark>sostenible</mark> significa reducir ese impacto pensando en todo el ciclo desde el principio.</p><p>Una guía sencilla son las <b>5 R</b>:</p><ul><li><b>Rechazar</b> lo que no necesitamos (envoltorios inútiles, objetos de un solo uso).</li><li><b>Reducir</b> la cantidad de material y de energía.</li><li><b>Reutilizar</b> objetos y materiales para otros usos (un bote de vidrio como portalápices).</li><li><b>Reparar</b> en lugar de tirar.</li><li><b>Reciclar</b> los materiales para fabricar productos nuevos.</li></ul><p>Lo contrario es la <b>obsolescencia programada</b>: diseñar objetos para que se estropeen pronto o no se puedan reparar, de modo que haya que comprar otros. En el aula de Tecnología intentaremos siempre aprovechar materiales reutilizados y construir objetos que duren.</p>`, svg: ["Las 5 R", [["rechazar", "lo que no necesitas"], ["reducir y reutilizar", "menos material"], ["reparar", "en vez de tirar"], ["reciclar", "materiales nuevos"]], "diseño sostenible"] },
    { tras: "<h3>Fases 1 y 2: el problema y la información</h3>", html: `<h3>El análisis de objetos</h3><p>Una de las mejores fuentes de información es estudiar <b>objetos que ya existen</b> y resuelven problemas parecidos. Analizar un objeto es como hacerle una radiografía. Se estudia desde varios puntos de vista:</p><ul><li><b>Análisis formal</b>: ¿qué forma, tamaño, color y peso tiene? Se dibuja con un boceto y se toman medidas.</li><li><b>Análisis funcional</b>: ¿para qué sirve?, ¿cómo se usa?, ¿qué partes tiene y qué hace cada una?</li><li><b>Análisis técnico</b>: ¿de qué materiales está hecho?, ¿cómo se fabricó?, ¿cómo se unen las piezas?</li><li><b>Análisis económico</b>: ¿cuánto cuesta?, ¿quién lo compra?</li><li><b>Análisis social y ambiental</b>: ¿qué necesidad cubre?, ¿qué impacto tiene?, ¿se puede reciclar?</li></ul><p>Por ejemplo, al analizar una grapadora descubrimos un muelle, una palanca y piezas de metal y plástico unidas con remaches. Todo eso nos puede dar ideas para nuestro propio diseño.</p>`, svg: ["Analizar un objeto", [["formal", "forma, tamaño, peso"], ["funcional", "para qué sirve y partes"], ["técnico", "materiales y uniones"], ["social y ambiental", "necesidad e impacto"]], "una radiografía del objeto"] },
    { tras: "<h3>Fase 4: la planificación</h3>", html: `<h3>Herramientas digitales para el proyecto</h3><p>Hoy los proyectos técnicos se apoyan en muchas herramientas digitales, también en el aula:</p><ul><li><b>Buscadores y bases de datos</b> para la fase de información. Hay que comprobar que las fuentes sean fiables y citar de dónde se saca cada dato.</li><li><b>Programas de diseño en 2D y 3D</b> (CAD), como Tinkercad o SketchUp, para dibujar piezas con medidas exactas y verlas desde cualquier ángulo.</li><li><b>Hojas de cálculo</b> para hacer el presupuesto: sumar el precio de los materiales automáticamente.</li><li><b>Impresoras 3D</b> y cortadoras láser para fabricar piezas a partir del diseño digital.</li><li><b>Documentos compartidos</b> para que todo el equipo escriba la memoria a la vez.</li><li><b>Presentaciones</b> con diapositivas para la fase final.</li></ul><p>Las herramientas digitales no sustituyen al lápiz y al papel: el boceto rápido a mano sigue siendo la mejor manera de empezar a pensar una idea.</p>`, svg: ["Herramientas digitales", [["CAD", "Tinkercad, SketchUp"], ["hoja de cálculo", "presupuesto"], ["impresora 3D", "fabricar piezas"], ["documentos", "memoria compartida"]], "el proyecto en el ordenador"] },
    { html: `<h3>Inventoras e inventores que cambiaron el mundo</h3><p>Detrás de cada objeto tecnológico hay personas que detectaron un problema y buscaron una solución. Algunos ejemplos:</p><ul><li><b>Leonardo da Vinci</b> (siglo XV) llenó cuadernos con bocetos de máquinas voladoras, puentes y engranajes, muchos siglos antes de que se pudieran construir.</li><li><b>Narcís Monturiol</b>, de Figueres, diseñó en el siglo XIX el <i>Ictíneo</i>, uno de los primeros submarinos de la historia.</li><li><b>Hedy Lamarr</b>, actriz e inventora, patentó en 1942 un sistema de comunicación por saltos de frecuencia, base de tecnologías como el wifi o el bluetooth.</li><li><b>Margaret Hamilton</b> dirigió el equipo que programó el software de navegación de las misiones Apolo que llegaron a la Luna.</li><li><b>Tim Berners-Lee</b> creó en 1989 la World Wide Web.</li></ul><p>Todos ellos tienen algo en común: la curiosidad, la perseverancia ante los fallos y la capacidad de trabajar con otros. Son las mismas cualidades que necesitas en el taller de Tecnología.</p>`, svg: ["Inventoras e inventores", [["Leonardo da Vinci", "máquinas en bocetos"], ["Narcís Monturiol", "submarino Ictíneo"], ["Hedy Lamarr", "base del wifi"], ["Margaret Hamilton", "software del Apolo"]], "curiosidad y perseverancia"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Analiza una pinza de tender la ropa (formal, funcional y técnico).", ["Formal: alargada, unos 7 cm, ligera, de colores.", "Funcional: sujeta la ropa al tendedero; se abre apretando un extremo.", "Técnico: dos piezas de plástico o madera y un muelle de acero que las une y hace de palanca."], "Es un objeto sencillo formado por dos palancas y un muelle; podría mejorarse con materiales reciclados."],
    ["Elige con una tabla de valoración entre tres ideas de colgador (puntuación 1-5 en resistencia, coste y facilidad): A (4, 3, 4), B (5, 2, 2), C (3, 5, 5).", ["Sumamos los puntos: A = 11, B = 9, C = 13.", "C es la más barata y fácil, pero algo menos resistente.", "Se puede elegir C y reforzarla, o combinar ideas."], "La idea C obtiene más puntos (13); conviene reforzarla para mejorar la resistencia."],
    ["Aplica las 5 R a un proyecto de portalápices.", ["Rechazar: no comprar un portalápices de plástico nuevo.", "Reducir: usar poco material y pegamento.", "Reutilizar: un bote de conserva y cartón.", "Reparar: diseñarlo para poder cambiar una pieza rota.", "Reciclar: separar los restos de cartón y metal."], "Un portalápices hecho con un bote reutilizado y cartón, fácil de reparar y reciclar."],
  ],
  errores: ["Analizar un objeto solo por su aspecto, sin estudiar su función, sus materiales ni su impacto."],
  niveles: "bbbmmmbmmm",
  ejercicios: [
    ["b", "Escribe las 5 R de la sostenibilidad.", "<b>Rechazar, reducir, reutilizar, reparar y reciclar</b>."],
    ["b", "¿Qué es el ciclo de vida de un objeto?", "Las etapas por las que pasa: <b>extracción</b> de materias primas, <b>fabricación</b>, <b>transporte</b>, <b>uso</b> y <b>residuo</b> (o reciclaje)."],
    ["b", "Nombra tres tipos de análisis de un objeto.", "Por ejemplo: <b>formal</b>, <b>funcional</b> y <b>técnico</b> (también económico y social/ambiental)."],
    ["b", "¿Para qué sirve un programa de CAD?", "Para <b>dibujar piezas por ordenador</b> con medidas exactas, en 2D o 3D."],
    ["b", "¿Quién inventó el Ictíneo y qué era?", "<b>Narcís Monturiol</b>; era uno de los primeros <b>submarinos</b>."],
    ["b", "¿Qué es la obsolescencia programada?", "Diseñar objetos para que se <b>estropeen pronto</b> o no se puedan reparar, obligando a comprar otros."],
    ["m", "Haz el análisis funcional de unas tijeras.", "Sirven para cortar papel o tela. Tienen dos hojas con filo unidas por un eje (tornillo) y dos ojos para los dedos. Al cerrar la mano, las hojas se cruzan y cortan: funcionan como dos palancas."],
    ["m", "Propón tres criterios para una tabla de valoración de un proyecto de lámpara.", "Por ejemplo: <b>que ilumine bien</b>, <b>que sea segura</b> (sin cables al aire), <b>que sea barata</b> (también fácil de construir, bonita, sostenible)."],
    ["m", "¿Por qué el boceto a mano sigue siendo útil aunque existan programas de CAD?", "Porque es <b>rápido</b> y permite pensar y comunicar ideas al principio, sin perder tiempo con el ordenador; el CAD sirve después para precisar."],
    ["m", "Explica qué tienen en común los inventores del apartado 3.4.", "La <b>curiosidad</b>, la <b>perseverancia</b> ante los fallos y la capacidad de <b>trabajar en equipo</b>."],
    ["m", "Calcula con una hoja de cálculo (o a mano) el presupuesto: 4 listones a 1,20 €, 6 ganchos a 0,35 € y cola por 2,50 €.", "4 × 1,20 = 4,80 €; 6 × 0,35 = 2,10 €; cola 2,50 €. Total: <b>9,40 €</b>."],
    ["m", "¿En qué fase del proceso está un equipo que descubre que su puente de palillos se hunde con 200 g?", "En la fase de <b>evaluación</b>: debe analizar la causa y volver al diseño o a la construcción para mejorarlo."],
    ["a", "Analiza un objeto de tu mochila desde los cinco puntos de vista del apartado 2.3.", "Respuesta abierta. Debe incluir forma y medidas, función y partes, materiales y uniones, precio aproximado e impacto/reciclaje."],
    ["a", "Redacta las condiciones (requisitos) del problema de las mochilas de la lectura.", "Ejemplo: soportar al menos 8 mochilas de 6 kg; altura accesible para todos (también en silla de ruedas); no ocupar más de 30 cm del pasillo; coste máximo de 20 €; construirlo en 3 semanas; seguro, sin puntas."],
    ["a", "Diseña un proyecto sostenible con materiales reutilizados para ordenar tu escritorio: escribe el problema, tres ideas y la elegida.", "Respuesta abierta. Debe tener un problema claro, tres bocetos o descripciones, una tabla de valoración y justificar la elección con criterios de sostenibilidad."],
    ["a", "Investiga un invento de una mujer (por ejemplo, el limpiaparabrisas o el lavavajillas) y explica qué problema resolvía.", "Respuesta abierta. Ejemplos: Mary Anderson patentó el limpiaparabrisas (1903) para ver con lluvia; Josephine Cochrane, el lavavajillas (1886) para lavar platos sin romperlos."],
    ["a", "Explica dos ventajas y dos riesgos de usar impresoras 3D en el aula.", "Ventajas: fabricar piezas exactas a partir del diseño; probar prototipos rápidamente. Riesgos: gastar mucho plástico si se imprime sin pensar; boquillas calientes que pueden quemar."],
    ["a", "Elabora el índice de la memoria técnica de vuestro proyecto.", "1. Problema y condiciones. 2. Información. 3. Bocetos e idea elegida. 4. Planos. 5. Materiales y presupuesto. 6. Hoja de procesos y reparto de tareas. 7. Construcción e incidencias. 8. Evaluación y mejoras. 9. Conclusiones."],
    ["a", "Compara un objeto antiguo y uno actual que resuelvan la misma necesidad (por ejemplo, un molinillo manual y una batidora).", "Respuesta abierta. Debe comparar materiales, energía que usan, rapidez, precio, durabilidad, facilidad de reparación e impacto ambiental."],
    ["a", "Propón cómo harías accesible para una persona ciega un objeto del aula.", "Respuesta abierta. Ejemplos: añadir relieves o braille, sonidos de aviso, formas diferentes al tacto para cada función, contraste de texturas."],
  ],
  cuartas: ["decorar objetos", "matemáticas", "1950", "Edad Antigua", "presentar", "presupuesto", "boceto", "construcción", "agenda", "WWW", "pintarlo de otro color", "evaluación", "lleva motor"],
  quiz: [
    ["Las etapas de un objeto desde las materias primas hasta el residuo forman su…", ["ciclo de vida", "proceso tecnológico", "presupuesto", "hoja de procesos"], "Extracción, fabricación, uso, residuo."],
    ["Usar un bote de vidrio como portalápices es…", ["reutilizar", "reciclar", "rechazar", "reducir"], "Se da otro uso al objeto."],
    ["Diseñar objetos para que se estropeen pronto es la…", ["obsolescencia programada", "evaluación", "sostenibilidad", "ergonomía"], "Obliga a comprar otros."],
    ["Estudiar de qué materiales está hecho un objeto es un análisis…", ["técnico", "formal", "económico", "funcional"], "Materiales y fabricación."],
    ["Estudiar para qué sirve un objeto y sus partes es un análisis…", ["funcional", "formal", "económico", "social"], "Función y partes."],
    ["Tinkercad y SketchUp son programas de…", ["diseño (CAD)", "música", "mensajería", "contabilidad"], "Dibujo en 2D y 3D."],
    ["Para calcular el presupuesto es útil una…", ["hoja de cálculo", "impresora 3D", "lluvia de ideas", "presentación"], "Suma automáticamente."],
    ["El Ictíneo, uno de los primeros submarinos, lo diseñó…", ["Narcís Monturiol", "Leonardo da Vinci", "Tim Berners-Lee", "Hedy Lamarr"], "Era de Figueres."],
    ["Hedy Lamarr patentó un sistema que es la base del…", ["wifi y el bluetooth", "motor de vapor", "teléfono fijo", "submarino"], "Saltos de frecuencia."],
    ["Una tabla de valoración sirve para…", ["elegir la mejor idea", "construir el objeto", "presentar el proyecto", "pagar los materiales"], "Se puntúan criterios."],
  ],
  examen: [
    ["Reparar un objeto en lugar de tirarlo es una de las…", ["5 R", "fases del diseño", "normas del CAD", "partes de la memoria"], "Rechazar, reducir, reutilizar, reparar, reciclar."],
    ["Analizar objetos existentes sirve sobre todo en la fase de…", ["información", "presentación", "construcción", "evaluación"], "Dan ideas para el diseño."],
    ["La World Wide Web la creó…", ["Tim Berners-Lee", "Margaret Hamilton", "Narcís Monturiol", "Leonardo da Vinci"], "En 1989."],
    ["Un ciclo de vida sostenible busca…", ["reducir el impacto en todas las etapas", "fabricar más rápido", "usar plástico de un solo uso", "que el objeto dure poco"], "Desde la extracción hasta el residuo."],
    ["Las impresoras 3D fabrican piezas a partir de…", ["un diseño digital", "un boceto a lápiz", "un presupuesto", "una lluvia de ideas"], "Diseño en CAD."],
  ],
  tarjetas: [["Ciclo de vida", "Extracción, fabricación, transporte, uso y residuo de un objeto."], ["5 R", "Rechazar, reducir, reutilizar, reparar y reciclar."], ["Análisis de objetos", "Estudio formal, funcional, técnico, económico y ambiental."], ["CAD", "Diseño asistido por ordenador, en 2D o 3D."]],
  glosario: [
    ["tecnología", "Conocimientos y técnicas para crear objetos que resuelven problemas."],
    ["ciencia", "Conocimiento que explica cómo funciona el mundo."],
    ["técnica", "Procedimientos y habilidades para hacer algo."],
    ["objeto tecnológico", "Objeto creado por las personas para cubrir una necesidad."],
    ["proceso tecnológico", "Método por fases para resolver problemas técnicos."],
    ["condiciones", "Requisitos que debe cumplir la solución."],
    ["boceto", "Dibujo rápido a mano alzada."],
    ["prototipo", "Primer modelo que se construye para probar una idea."],
    ["hoja de procesos", "Lista ordenada de pasos de fabricación."],
    ["presupuesto", "Cálculo del coste de los materiales."],
    ["memoria técnica", "Documento que recoge todo el proyecto."],
    ["ciclo de vida", "Etapas de un objeto desde las materias primas al residuo."],
    ["sostenibilidad", "Diseño que reduce el impacto ambiental y social."],
    ["obsolescencia programada", "Diseño para que un objeto dure poco."],
    ["CAD", "Diseño asistido por ordenador."],
  ],
  situacion: { titulo: "Ingenieros del pasillo", reto: "Detectar un problema real del instituto (mochilas, abrigos, bicicletas, ruido…) y resolverlo con un objeto construido en el aula siguiendo el proceso tecnológico, con materiales reutilizados y un presupuesto máximo de 20 €.", pasos: ["Observar el instituto, elegir un problema y escribir las condiciones de la solución.", "Buscar información y analizar objetos que resuelven problemas parecidos.", "Hacer una lluvia de ideas, bocetos y una tabla de valoración.", "Planificar: planos, hoja de procesos, materiales, presupuesto y reparto de tareas.", "Construir el prototipo respetando las normas de seguridad.", "Evaluarlo, mejorarlo y presentarlo con la memoria técnica."], producto: "Un prototipo funcional, la memoria técnica y una presentación de 5 minutos.", evaluacion: ["El proyecto sigue todas las fases del proceso tecnológico.", "El prototipo cumple las condiciones y funciona.", "La memoria técnica es completa y ordenada.", "El diseño es sostenible y accesible y el equipo trabaja de forma cooperativa."] },
  saberes: "análisis de objetos; ciclo de vida y las 5 R; herramientas digitales en el proyecto (CAD, hoja de cálculo, impresión 3D); inventoras e inventores y papel de la tecnología en la historia.",
  familias: ["Analizad juntos un objeto de la cocina: para qué sirve, de qué está hecho, cómo funciona y cómo se podría reciclar."],
  minutos: 100,
});
