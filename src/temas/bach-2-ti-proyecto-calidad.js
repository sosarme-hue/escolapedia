// Tecnología e Ingeniería II 2º Bachillerato · Tema 1. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, flecha, ficha, pasos, compara, graf, ciclo, escala, rejilla, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, gantt, pareto, ishikawa, control, uid } = require("./_bach2-ti");

// Red de actividades con el camino crítico (ejemplo del apartado 1.2).
const redSVG = (() => {
  const id = uid("red"), idr = uid("redr");
  const N = { i: [18, 96], a: [80, 96], b: [134, 48], c: [152, 140], d: [194, 48], e: [240, 96] };
  const nodo = (k, txt, c) => `<circle cx="${N[k][0]}" cy="${N[k][1]}" r="15" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>${T(N[k][0], N[k][1] + 4.5, txt, { fs: 11, b: true, c })}`;
  const arco = (p, q, lab, cri, dy = -6, dx = 0) => { const [x1, y1] = N[p], [x2, y2] = N[q], L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L; return `<path d="M${(x1 + ux * 16).toFixed(1)} ${(y1 + uy * 16).toFixed(1)} L ${(x2 - ux * 18).toFixed(1)} ${(y2 - uy * 18).toFixed(1)}" stroke="${cri ? "var(--red)" : "var(--pen)"}" stroke-width="${cri ? 3 : 2}" marker-end="url(#${cri ? idr : id})"/>${T(((x1 + x2) / 2 + dx).toFixed(1), ((y1 + y2) / 2 + dy).toFixed(1), lab, { fs: 10.5, b: true, c: cri ? "var(--red)" : "var(--pen)" })}`; };
  return marco("Red de actividades: A de 3 semanas, después B de 2 y C de 5; D de 2 tras B; E de 3 tras C y D. El camino crítico A-C-E dura 11 semanas", `
  ${arco("i", "a", "A 3", true, -8)}${arco("a", "b", "B 2", false, -2, -14)}${arco("a", "c", "C 5", true, 4, -18)}${arco("b", "d", "D 2", false, -8)}${arco("d", "e", "", false)}${arco("c", "e", "E 3", true, 6, 18)}
  ${nodo("i", "0", "var(--red)")}${nodo("a", "3", "var(--red)")}${nodo("b", "5", "var(--pen)")}${nodo("c", "8", "var(--red)")}${nodo("d", "7", "var(--pen)")}${nodo("e", "11", "var(--red)")}
  ${T(130, 20, "Camino crítico: A → C → E = 11 semanas", { fs: 11.5, b: true, c: "var(--red)" })}${T(130, 172, "B y D tienen 1 semana de holgura", { fs: 11, c: "var(--muted)" })}`, flecha(id, "var(--pen)") + flecha(idr, "var(--red)"));
})();

// Punto muerto: ingresos frente a costes totales.
const muertoSVG = graf("Umbral de rentabilidad: la recta de ingresos corta a la de costes totales en el punto muerto; antes hay pérdidas y después beneficios", "unidades (Q)", "€", [
  { p: [[0, 0.32], [1, 0.82]], c: "var(--red)", t: "" },
  { p: [[0, 0.32], [1, 0.32]], c: "var(--muted)", t: "", dash: true },
  { p: [[0, 0], [1, 0.96]], c: "var(--leaf)", t: "" },
], `<circle cx="${(40 + 0.696 * 200).toFixed(1)}" cy="${(145 - 0.668 * 115).toFixed(1)}" r="5" fill="var(--ink)"/>${T(160, 136, "pérdidas", { fs: 10, c: "var(--red)" })}${T(70, 100, "CF", { fs: 10, b: true, c: "var(--muted)" })}${T(196, 22, "ingresos p·Q", { fs: 10.5, c: "var(--leaf)", b: true })}${T(214, 76, "costes", { fs: 10.5, c: "var(--red)", b: true })}${T(186, 134, "Q*", { fs: 11, b: true })}<path d="M179 68 V 145" stroke="var(--ink)" stroke-width="1" stroke-dasharray="3 3"/>`);

// Diana de exactitud y precisión.
const dianaSVG = marco("Cuatro dianas: exacto y preciso, preciso pero no exacto, exacto pero poco preciso, ni exacto ni preciso", [
  [65, 52, [[0, 0], [3, -2], [-2, 3], [2, 2]], "exacto y preciso", "var(--leaf)"],
  [195, 52, [[18, -16], [21, -13], [16, -12], [20, -18]], "preciso, no exacto", "var(--sun)"],
  [65, 130, [[-14, 10], [16, -8], [6, 18], [-12, -16]], "exacto, poco preciso", "var(--pen)"],
  [195, 130, [[20, 14], [-6, -24], [26, -4], [8, 24]], "ni exacto ni preciso", "var(--red)"],
].map(([x, y, pts, lab, c]) => `${[30, 20, 10].map((r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="var(--line)" stroke-width="1.6"/>`).join("")}<circle cx="${x}" cy="${y}" r="3" fill="var(--ink)"/>${pts.map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="3.6" fill="${c}"/>`).join("")}${T(x, y + 44, lab, { fs: fit(lab, 120, 11, true), b: true, c })}`).join(""));

// Nonio de un calibre: lectura 23,35 mm.
const nonioSVG = (() => {
  let s = `<rect x="14" y="56" width="232" height="34" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/><rect x="14" y="90" width="232" height="34" fill="var(--paper)" stroke="var(--pen)" stroke-width="1.6"/>`;
  const x0 = 22, mm = 9; // regla principal: 1 mm = 9 px, de 18 a 42 mm
  for (let v = 18; v <= 42; v++) { const x = x0 + (v - 18) * mm; s += `<path d="M${x} 90 V ${v % 5 === 0 ? 70 : 78}" stroke="var(--ink)" stroke-width="1.2"/>${v % 5 === 0 ? T(x, 66, v, { fs: 9, c: "var(--muted)" }) : ""}`; }
  const z = x0 + 5.35 * mm, p = (19 / 20) * mm; // cero del nonio en 23,35 mm; 20 divisiones en 19 mm
  for (let i = 0; i <= 20; i++) { const x = z + i * p; s += `<path d="M${x.toFixed(1)} 90 V ${i % 2 === 0 ? 106 : 100}" stroke="${i === 7 ? "var(--red)" : "var(--pen)"}" stroke-width="${i === 7 ? 2.4 : 1.2}"/>${i % 4 === 0 ? T(x.toFixed(1), 118, i / 2, { fs: 8.5, c: "var(--pen)" }) : ""}`; }
  s += T(130, 30, "Lectura: 23 mm + 7 × 0,05 = 23,35 mm", { fs: 11.5, b: true }) + T(130, 148, "La raya 7 del nonio coincide con una de la regla", { fs: 10.5, c: "var(--red)", b: true }) + T(130, 166, "apreciación = 1 mm / 20 = 0,05 mm", { fs: 10.5, c: "var(--muted)" });
  return marco("Nonio de 20 divisiones de un calibre: el cero está pasado el 23 y coincide la séptima raya; la medida es 23,35 milímetros", s);
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "El proyecto de ingeniería y la gestión de la calidad",
  minutos: 110,
  objetivos: [
    "Planificar un proyecto con una red de actividades, calcular su camino crítico y representarlo en un diagrama de Gantt",
    "Estimar costes y calcular el umbral de rentabilidad de un producto",
    "Explicar la evolución del concepto de calidad y los sistemas de gestión basados en normas ISO",
    "Aplicar el ciclo PDCA y las herramientas básicas de la calidad: Pareto, Ishikawa, histogramas y gráficos de control",
    "Calcular límites de control y el índice de capacidad de un proceso",
    "Distinguir normalización, certificación y acreditación, y usar los conceptos de error, exactitud, precisión e incertidumbre en una medida",
  ],
  claves: ["camino crítico", "holgura", "diagrama de Gantt", "punto muerto", "calidad total", "ISO 9001", "ciclo PDCA", "diagrama de Pareto", "diagrama de Ishikawa", "gráfico de control", "capacidad de proceso", "normalización", "marcado CE", "incertidumbre", "AMFE"],
  pregunta: {
    texto: "Un fabricante de patinetes eléctricos recibe muchas devoluciones. Tiene diez tipos de fallo distintos y dinero para arreglar solo dos este año. ¿Cómo decide cuáles atacar primero?",
    respuesta: "Con un <mark>diagrama de Pareto</mark>: cuenta cuántas devoluciones produce cada tipo de fallo, los ordena de mayor a menor y dibuja el porcentaje acumulado. Casi siempre unas pocas causas (el 20 % de los tipos) explican la mayoría de los problemas (alrededor del 80 %). Esas son las «pocas vitales» que hay que resolver primero. Después, con un diagrama de Ishikawa, busca la causa raíz de cada una.",
  },
  lectura: {
    titulo: "El coche que cambió la palabra «calidad»",
    html: `<p>En 1950, la industria japonesa tenía fama de fabricar productos baratos y poco fiables. Ese año, un estadístico estadounidense llamado William Edwards Deming dio una serie de conferencias a directivos japoneses. Su mensaje era sorprendente: la calidad no se consigue inspeccionando el producto al final y tirando lo que sale mal, sino <b>mejorando el proceso</b> para que salga bien a la primera. Y eso lo debe hacer toda la empresa, desde la dirección hasta el último operario.</p><p>Toyota llevó la idea al extremo. En sus fábricas, cualquier trabajador podía tirar de una cuerda y detener la cadena de montaje si veía un defecto. Al principio parecía una locura, porque parar una línea cuesta muchísimo dinero. Pero cada parada obligaba a encontrar la causa del fallo y corregirla para siempre. Treinta años después, los coches japoneses eran los más fiables del mundo y las empresas occidentales viajaban a Japón para copiar sus métodos.</p><p>Hoy esas ideas están escritas en normas internacionales como la ISO 9001, que cumplen más de un millón de organizaciones. En este tema verás cómo se planifica un proyecto de ingeniería y cómo se garantiza que su resultado tenga la calidad que se espera.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 El proyecto de ingeniería hoy", p: [
      "Un <b>proyecto de ingeniería</b> es un conjunto de actividades coordinadas, con un principio y un final, que transforma una necesidad en una solución técnica: un producto, una instalación, un proceso o un servicio. Tiene un objetivo concreto, unos recursos limitados (personas, dinero, materiales y máquinas) y un plazo. Por eso todo proyecto se mueve entre tres restricciones que se influyen entre sí: <mark>alcance, tiempo y coste</mark>. Si se quiere más alcance en el mismo plazo, sube el coste; si se recorta el presupuesto, hay que reducir el alcance o alargar el plazo.",
      "En las empresas, el proyecto avanza por etapas cada vez más detalladas: la <b>ingeniería conceptual</b> (estudio de viabilidad y alternativas), la <b>ingeniería básica</b> (soluciones elegidas, cálculos principales, planos de conjunto y presupuesto aproximado) y la <b>ingeniería de detalle</b> (planos de cada pieza, listas de materiales, pliego de condiciones y presupuesto definitivo). Después llegan la fabricación o construcción, la puesta en marcha y el mantenimiento.",
      "Las empresas modernas ya no hacen estas etapas una detrás de otra. En la <b>ingeniería concurrente</b>, los equipos de diseño, fabricación, compras, calidad y ventas trabajan a la vez desde el principio, con modelos digitales compartidos. Así se detectan pronto los problemas (una pieza imposible de fabricar, un material caro) y se acorta el tiempo de lanzamiento. En los proyectos de innovación se usa también la escala <b>TRL</b> (nivel de madurez tecnológica), del 1 (principio básico observado) al 9 (sistema probado en su entorno real).",
    ], svg: pasos("Etapas de un proyecto de ingeniería: ingeniería conceptual, básica y de detalle, fabricación y puesta en marcha", ["Conceptual: viabilidad", "Básica: solución y cálculos", "De detalle: planos y pliego", "Fabricación y puesta en marcha"], "var(--pen)") }),
    bloque({ h: "1.2 Planificar el tiempo: la red de actividades y el camino crítico", p: [
      "Para planificar un proyecto se divide en <b>actividades</b> (tareas con una duración estimada) y se anotan las <b>precedencias</b>: qué actividades deben terminar antes de que empiece otra. Con esa tabla se dibuja una <b>red</b> (método PERT o CPM), en la que las flechas son actividades y los nodos, los instantes en que terminan unas y empiezan otras.",
      "Para cada actividad se calcula el <b>inicio más temprano</b> (recorriendo la red hacia delante y tomando siempre el mayor de los finales que llegan a un nodo) y el <b>inicio más tardío</b> (recorriendo la red hacia atrás desde el final del proyecto). La diferencia entre ambos es la <mark>holgura</mark>: el tiempo que esa actividad puede retrasarse sin retrasar el proyecto.",
      formula("Holgura = inicio más tardío − inicio más temprano"),
      "Las actividades con holgura cero forman el <mark>camino crítico</mark>: la cadena más larga de la red, cuya duración es la duración mínima del proyecto. Cualquier retraso en una actividad crítica retrasa todo el proyecto, así que sobre ellas se concentra la vigilancia. En el ejemplo del dibujo, el camino A → C → E dura 3 + 5 + 3 = 11 semanas, mientras que A → B → D → E dura 10 semanas: B y D pueden retrasarse una semana sin consecuencias.",
    ], svg: redSVG, video: V("pc-cpm", "Ruta crítica o CPM: definición y ejemplo", "ruta crítica CPM") }),
    bloque({ h: "1.3 El diagrama de Gantt y el seguimiento", p: [
      "La red sirve para calcular, pero para comunicar el plan se usa el <b>diagrama de Gantt</b>, ideado por Henry Gantt hacia 1910. Es un gráfico de barras horizontales: cada fila es una actividad y la longitud de su barra, su duración sobre una escala de tiempo (días o semanas). Se marcan también los <b>hitos</b> (momentos clave sin duración, como «entrega del prototipo») y se destacan las actividades críticas.",
      "Durante la ejecución, el Gantt se usa para el <b>seguimiento</b>: se compara lo planificado con lo realizado y se calcula el porcentaje de avance. Si una actividad crítica se retrasa, el jefe de proyecto puede <b>reasignar recursos</b> desde actividades con holgura o solapar tareas. Los programas de gestión de proyectos (y las hojas de cálculo) generan la red y el Gantt a partir de la misma tabla de actividades.",
      "En proyectos de software o de producto muy cambiantes se combinan estas herramientas con métodos <b>ágiles</b> (Scrum, Kanban): el trabajo se divide en ciclos cortos de dos a cuatro semanas, al final de cada uno se entrega algo que funciona y el plan se revisa con el cliente.",
    ], svg: gantt("Diagrama de Gantt del ejemplo: A semanas 1 a 3; B 4 y 5; C 4 a 8; D 6 y 7; E 9 a 11. Las barras críticas están bordeadas en rojo", [["A Diseño", 0, 3, "var(--pen)", 1], ["B Compras", 3, 2, "var(--leaf)"], ["C Prototipo", 3, 5, "var(--pen)", 1], ["D Utillaje", 5, 2, "var(--leaf)"], ["E Ensayos", 8, 3, "var(--pen)", 1]], 11, "Semanas del proyecto") }),
    bloque({ h: "1.4 Costes y umbral de rentabilidad", p: [
      "Un proyecto técnico debe ser también <b>viable económicamente</b>. Los costes se clasifican en <b>fijos</b> (CF), que no dependen de cuántas unidades se fabriquen (alquiler de la nave, amortización de máquinas, sueldos de estructura), y <b>variables</b>, proporcionales a la producción (materias primas, energía, embalaje). Si cada unidad tiene un coste variable c<sub>v</sub> y se venden Q unidades a un precio p:",
      formula("Coste total = CF + c<sub>v</sub> · Q &nbsp;&nbsp; Ingresos = p · Q &nbsp;&nbsp; Beneficio = (p − c<sub>v</sub>) · Q − CF"),
      "El <mark>punto muerto</mark> o umbral de rentabilidad es la cantidad Q* para la que ingresos y costes se igualan y el beneficio es cero. Por debajo hay pérdidas; por encima, beneficios. La diferencia p − c<sub>v</sub> se llama <b>margen de contribución</b>, porque es lo que aporta cada unidad a cubrir los costes fijos.",
      formula("Q* = CF / (p − c<sub>v</sub>)"),
      "Otros indicadores habituales son el <b>coste unitario</b> (coste total entre unidades) y el <b>periodo de retorno</b> de una inversión (tiempo en recuperarla con los beneficios). Una decisión técnica, como automatizar una línea, suele subir los costes fijos y bajar los variables: compensa solo a partir de cierto volumen de producción.",
    ], svg: muertoSVG }),
    bloque({ h: "1.5 Qué es la calidad", p: [
      "Según la norma ISO 9000, la <mark>calidad</mark> es el grado en que un conjunto de características de un producto o servicio cumple los requisitos, tanto los del cliente como los legales. No significa «lujo»: un bolígrafo barato tiene calidad si escribe bien hasta que se acaba la tinta.",
      "El concepto ha evolucionado en cuatro etapas. Primero fue la <b>inspección</b>: revisar los productos al final y apartar los defectuosos. Después llegó el <b>control de calidad</b> con técnicas estadísticas (Shewhart, años veinte): medir muestras durante la producción. Más tarde, el <b>aseguramiento de la calidad</b>: procedimientos escritos que garantizan que todo se hace siempre igual. Por último, la <b>calidad total</b> (TQM): toda la organización, con la dirección al frente, busca satisfacer al cliente y mejorar de forma continua.",
      "La calidad tiene costes: los de <b>prevención</b> (formación, diseño cuidadoso), los de <b>evaluación</b> (inspecciones, ensayos) y, sobre todo, los de la <b>no calidad</b>: piezas rechazadas, reprocesos, garantías, devoluciones y pérdida de clientes. Invertir en prevención reduce mucho los costes totales, porque un fallo descubierto por el cliente cuesta decenas de veces más que uno evitado en el diseño.",
    ], svg: escala("Evolución del concepto de calidad: inspección, control estadístico, aseguramiento y calidad total", "Evolución de la calidad", [["Revisar", "al final", "var(--muted)"], ["Medir", "estadística", "var(--pen)"], ["Asegurar", "normas", "var(--leaf)"], ["Total", "todos", "var(--red)"]], "corregir", "prevenir") }),
    bloque({ h: "1.6 Sistemas de gestión de la calidad: la familia ISO 9000", p: [
      "Un <b>sistema de gestión de la calidad</b> (SGC) es el conjunto de procesos, responsabilidades, documentos y recursos que una organización usa para dirigir y controlar la calidad. La norma de referencia mundial es la <mark>ISO 9001</mark>, publicada por la Organización Internacional de Normalización. Es genérica: sirve igual para una fábrica de tornillos que para un hospital o un ayuntamiento.",
      "Se basa en siete principios: enfoque al cliente, liderazgo, compromiso de las personas, <b>enfoque a procesos</b>, mejora, toma de decisiones basada en evidencias y gestión de las relaciones con proveedores. El enfoque a procesos significa ver la organización como una cadena de actividades con entradas y salidas medibles, cada una con un responsable e indicadores.",
      "Una empresa puede <b>certificarse</b>: una entidad independiente hace una <b>auditoría</b> externa y, si el sistema cumple la norma, emite un certificado válido tres años con auditorías de seguimiento anuales. Junto a la ISO 9001 existen otras normas de gestión con la misma estructura: la ISO 14001 (gestión ambiental), la ISO 45001 (seguridad y salud en el trabajo), la ISO 50001 (energía) y la ISO 27001 (seguridad de la información). Muchas empresas las integran en un único sistema. En Europa también se usa el modelo de excelencia <b>EFQM</b>, que evalúa la organización con puntuaciones.",
    ], svg: rejilla("Normas de sistemas de gestión: ISO 9001 calidad, ISO 14001 medio ambiente, ISO 45001 seguridad y salud, ISO 50001 energía, ISO 27001 información", ["Norma", "Gestiona…"], [["ISO 9001", "la calidad"], ["ISO 14001", "el medio ambiente"], ["ISO 45001", "seguridad y salud"], ["ISO 50001", "la energía"], ["ISO 27001", "la información"]]), video: V("pc-iso", "Conociendo la ISO 9001:2015", "norma ISO 9001 qué es") }),
    bloque({ h: "1.7 El ciclo PDCA y la mejora continua", p: [
      "El motor de cualquier sistema de calidad es la <b>mejora continua</b>, que se organiza con el <mark>ciclo PDCA</mark> (o de Deming), en cuatro fases que se repiten sin fin:",
      "<b>Planificar</b> (Plan): definir el problema, medir la situación de partida, buscar las causas y decidir las acciones y los objetivos. <b>Hacer</b> (Do): aplicar las acciones, a ser posible primero a pequeña escala. <b>Verificar</b> (Check): medir los resultados y compararlos con los objetivos. <b>Actuar</b> (Act): si ha funcionado, se <b>estandariza</b> (se escribe el nuevo procedimiento y se forma al personal); si no, se vuelve a planificar con lo aprendido.",
      "Cada vuelta del ciclo sube un escalón de calidad, como una rueda que empuja hacia arriba por una rampa. Los japoneses llaman <b>kaizen</b> a esta filosofía de pequeñas mejoras constantes en las que participa todo el personal. Otras técnicas relacionadas son las <b>5S</b> (clasificar, ordenar, limpiar, estandarizar y mantener la disciplina en el puesto de trabajo), el <b>poka-yoke</b> (diseños que hacen imposible equivocarse, como un conector USB-C que entra en cualquier posición) y el método <b>Seis Sigma</b>, que busca procesos con menos de 3,4 defectos por millón.",
    ], svg: ciclo("Ciclo PDCA: planificar, hacer, verificar y actuar, que se repite para mejorar continuamente", ["Planificar", "Hacer", "Verificar", "Actuar"], "var(--leaf)", "mejora") }),
    bloque({ h: "1.8 Herramientas de la calidad (I): hoja de datos y diagrama de Pareto", p: [
      "Kaoru Ishikawa reunió siete <b>herramientas básicas de la calidad</b> que permiten resolver la mayoría de los problemas con datos: hoja de recogida de datos, histograma, diagrama de Pareto, diagrama causa-efecto, diagrama de dispersión, estratificación y gráfico de control.",
      "La <b>hoja de recogida de datos</b> es una tabla sencilla donde se anota, con palotes, cada vez que aparece un defecto, clasificado por tipo, máquina, turno o día. Con esos datos se construye el <mark>diagrama de Pareto</mark>: un gráfico de barras con las causas ordenadas de mayor a menor frecuencia y una línea con el porcentaje acumulado.",
      "Se basa en el principio de Pareto o regla <b>80/20</b>: aproximadamente el 80 % de los efectos proceden del 20 % de las causas. El diagrama separa las <b>pocas vitales</b> (las barras de la izquierda, hasta llegar cerca del 80 % acumulado) de las <b>muchas triviales</b>. Así se decide dónde invertir el esfuerzo de mejora. En el ejemplo del dibujo, de 200 defectos, los dos primeros tipos suman 160, es decir, el 80 %.",
      "El <b>histograma</b> muestra cómo se distribuyen los valores de una medida (por ejemplo, el diámetro de 100 ejes): si la campana está centrada en el valor nominal y es estrecha, el proceso es bueno; si está desplazada o es muy ancha, hay que actuar.",
    ], svg: pareto("Diagrama de Pareto de defectos: rayas 100, soldadura 60, pintura 20, montaje 12 y otros 8; la línea acumulada llega al 80 por ciento con las dos primeras causas", [["Rayas", 100], ["Soldad.", 60], ["Pintura", 20], ["Montaje", 12], ["Otros", 8]], "Defectos de un mes (200)"), video: V("pc-pareto", "Diagrama de Pareto: qué es y cómo se hace", "diagrama de Pareto") }),
    bloque({ h: "1.9 Herramientas de la calidad (II): causa-efecto y dispersión", p: [
      "Una vez elegido el problema, hay que encontrar su <b>causa raíz</b>. El <mark>diagrama de Ishikawa</mark> (causa-efecto o espina de pescado) coloca el efecto en la cabeza y, en las espinas principales, las grandes familias de causas. En la industria se usan las <b>6 M</b>: máquinas, métodos, materiales, mano de obra, medición y medio ambiente. El equipo hace una lluvia de ideas y va añadiendo causas secundarias a cada espina.",
      "Para profundizar se usa la técnica de los <b>cinco porqués</b>: se pregunta «¿por qué?» sucesivamente hasta llegar a algo que se pueda corregir. «La pieza sale rayada. ¿Por qué? Porque roza con la guía. ¿Por qué? Porque la guía está desgastada. ¿Por qué? Porque no está en el plan de mantenimiento…».",
      "El <b>diagrama de dispersión</b> comprueba si dos variables están relacionadas: se representan pares de valores (por ejemplo, temperatura del horno y dureza de la pieza) y se observa si forman una nube con tendencia creciente, decreciente o sin relación. La <b>estratificación</b> separa los datos por grupos (turnos, proveedores, máquinas) para descubrir dónde se concentra el problema.",
    ], svg: ishikawa("Diagrama de Ishikawa: el efecto piezas rayadas y seis causas, máquina, método, material, mano de obra, medición y medio", "Piezas|rayadas", ["Máquina", "Método", "Material", "Mano obra", "Medición", "Medio"]), video: V("pc-ishikawa", "Diagrama de Ishikawa: causa y efecto, tipos y ejemplo", "diagrama de Ishikawa causa efecto") }),
    bloque({ h: "1.10 Control estadístico de procesos", p: [
      "Ningún proceso fabrica dos piezas exactamente iguales: siempre hay una <b>variabilidad</b>. Una parte es aleatoria e inevitable (causas comunes); otra se debe a <b>causas asignables</b> (una herramienta desgastada, un lote de material distinto) que sí se pueden detectar y eliminar. El <mark>control estadístico de procesos</mark> (SPC) distingue entre ambas.",
      "Se toman muestras periódicas, se calcula su media y se dibujan en un <b>gráfico de control</b> con una línea central (LC, la media del proceso) y dos límites, el superior (LCS) y el inferior (LCI), situados normalmente a tres desviaciones típicas σ de la media:",
      formula("LCS = μ + 3σ &nbsp;&nbsp; LC = μ &nbsp;&nbsp; LCI = μ − 3σ"),
      "Si todos los puntos caen dentro de los límites y se reparten al azar, el proceso está <b>bajo control</b>. Un punto fuera, o siete seguidos al mismo lado de la línea central, indica una causa asignable: hay que parar y corregir. No hay que confundir los límites de control (lo que el proceso hace) con las <b>tolerancias</b> (lo que el cliente pide). La relación entre ambas es el <b>índice de capacidad</b>:",
      formula("C<sub>p</sub> = (LTS − LTI) / 6σ"),
      "Si C<sub>p</sub> ≥ 1,33 el proceso es capaz con margen; si es menor que 1, fabricará piezas fuera de tolerancia aunque esté bajo control.",
    ], svg: control("Gráfico de control con la línea central en 25,00 milímetros y límites en 24,94 y 25,06; el octavo punto se sale por arriba", [25.01, 24.98, 25.02, 24.97, 25.03, 25.0, 25.02, 25.08, 25.01, 24.99], 24.9, 25.1, 24.94, 25.0, 25.06, "Diámetro medio de las muestras (mm)") }),
    bloque({ h: "1.11 Normalización, certificación y acreditación", p: [
      "La <mark>normalización</mark> es la actividad de elaborar y publicar <b>normas</b>: documentos técnicos, aprobados por consenso, que establecen reglas para productos, procesos o servicios. Gracias a ellas un tornillo M8 de cualquier fabricante encaja en una tuerca M8 de otro, un enchufe funciona en todo un país o una hoja A4 cabe en cualquier carpeta. Las normas son de aplicación <b>voluntaria</b>, salvo que una ley las haga obligatorias.",
      "Hay organismos de normalización internacionales (<b>ISO</b>; <b>IEC</b> para electrotecnia; UIT para telecomunicaciones), europeos (<b>CEN</b>, CENELEC; normas EN) y nacionales. En España es la <b>Asociación Española de Normalización (UNE)</b>; una norma «UNE-EN ISO 9001» es una norma internacional adoptada en Europa y en España.",
      "La <b>certificación</b> es el procedimiento por el que una entidad independiente declara que un producto, un proceso o un sistema cumple una norma. Y la <b>acreditación</b> garantiza que esas entidades de certificación y los laboratorios de ensayo son competentes: en España la concede ENAC. Distinto es el <mark>marcado CE</mark>, obligatorio para vender en la Unión Europea juguetes, máquinas, aparatos eléctricos o equipos de protección: con él, el fabricante declara que su producto cumple las directivas europeas de seguridad, salud y medio ambiente.",
    ], svg: compara("Normalización frente a certificación: la primera redacta normas por consenso y la segunda comprueba que se cumplen", ["Normalización", ["redacta normas", "por consenso", "ISO · CEN · UNE", "voluntarias"]], ["Certificación", ["comprueba", "que se cumplen", "auditoría externa", "certificado"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "1.12 Metrología: medir bien", p: [
      "No se puede controlar lo que no se mide bien. La <b>metrología</b> es la ciencia de la medida. Toda medida tiene un <b>error</b>, la diferencia entre el valor medido y el valor verdadero. Los errores <b>sistemáticos</b> se repiten siempre en el mismo sentido (un calibre con el cero desplazado) y se corrigen calibrando; los <b>aleatorios</b> varían de una medida a otra y se reducen repitiendo la medida y haciendo la media.",
      "Dos palabras que no significan lo mismo: la <mark>exactitud</mark> es la cercanía al valor verdadero y la <mark>precisión</mark> es la cercanía de las medidas entre sí (su repetibilidad). La <b>apreciación</b> o resolución de un instrumento es la menor variación que puede distinguir, y la <b>incertidumbre</b> es el intervalo dentro del cual se encuentra, con una probabilidad dada, el valor verdadero: se escribe, por ejemplo, 23,35 ± 0,05 mm.",
      "Los instrumentos se <b>calibran</b> periódicamente comparándolos con patrones de mayor exactitud, que a su vez se comparan con otros, en una cadena de <b>trazabilidad</b> que termina en los patrones nacionales del Centro Español de Metrología y en las definiciones del Sistema Internacional. En un taller, la medida de longitudes se hace con el <b>calibre</b> (pie de rey), que gracias a su <b>nonio</b> aprecia 0,1, 0,05 o 0,02 mm, y con el <b>micrómetro</b>, que llega a 0,01 mm.",
      formula("Apreciación del nonio = división de la regla / n.º de divisiones del nonio"),
    ], svg: dianaSVG }),
    bloque({ h: "1.13 Lectura del calibre y tolerancias", p: [
      "Para leer un calibre se miran los milímetros enteros de la regla fija que quedan a la izquierda del cero del nonio. Después se busca qué raya del nonio coincide exactamente con una raya de la regla: ese número multiplicado por la apreciación da la parte decimal. En el dibujo, el cero pasa del 23 y coincide la raya 7 de un nonio de 20 divisiones: 23 + 7 · 0,05 = <b>23,35 mm</b>.",
      "En los planos, cada cota importante lleva una <b>tolerancia</b>: el intervalo de valores admisibles. Una cota 25 ± 0,1 admite piezas entre 24,9 mm (cota mínima) y 25,1 mm (cota máxima); la amplitud de ese intervalo, 0,2 mm, es la tolerancia. Cuanto más estrecha es, más cara resulta la pieza, así que el diseñador fija la tolerancia justa que exige su función.",
      "Cuando un eje entra en un agujero, la diferencia de medidas define el <b>ajuste</b>: con <b>juego</b> si el eje es siempre menor que el agujero (piezas que giran o deslizan), con <b>apriete</b> si es siempre mayor (piezas que se montan a presión) o <b>indeterminado</b> si puede pasar cualquiera de las dos cosas. El sistema ISO de tolerancias los designa con letras y números, como 20 H7/g6.",
    ], svg: nonioSVG }),
    bloque({ h: "1.14 Prevenir fallos: el AMFE", p: [
      "La mejor calidad es la que se diseña. El <mark>AMFE</mark> (análisis modal de fallos y efectos) es una técnica preventiva que se aplica al diseño de un producto o de un proceso antes de fabricarlo. El equipo enumera cada componente o etapa, imagina sus <b>modos de fallo</b> posibles, sus efectos y sus causas, y los puntúa de 1 a 10 en tres aspectos: <b>gravedad</b> (G) del efecto, <b>ocurrencia</b> (O) o probabilidad de que pase y <b>detección</b> (D), que es alta cuando el fallo es difícil de detectar antes de que llegue al cliente.",
      formula("NPR = G · O · D"),
      "El <b>número de prioridad de riesgo</b> (NPR) va de 1 a 1 000. Se actúa primero sobre los fallos con NPR más alto y sobre cualquiera con gravedad 9 o 10 (riesgo para personas), aunque su NPR sea bajo. Tras aplicar las mejoras (rediseñar, añadir un sensor, un poka-yoke o una inspección), se recalcula el NPR para comprobar que el riesgo ha bajado.",
      "El AMFE nació en la industria aeroespacial y del automóvil, donde un fallo puede costar vidas. Junto con los ensayos de prototipos y la documentación técnica del proyecto (memoria, planos, pliego de condiciones, presupuesto y manual de uso), forma parte de la <b>gestión del riesgo</b> que exigen las normas actuales.",
    ], svg: rejilla("Tabla de AMFE con tres modos de fallo y su NPR: rotura del soporte 9 por 3 por 4 igual a 108, fuga 6 por 5 por 2 igual a 60, ruido 3 por 6 por 2 igual a 36", ["Fallo", "G·O·D", "NPR"], [["Rotura soporte", "9·3·4", "108"], ["Fuga de aceite", "6·5·2", "60"], ["Ruido", "3·6·2", "36"]], "var(--red)") }),
  ],
  figura: figura("Proyecto y calidad", "Planificación, costes, gestión de la calidad y herramientas", [["Planificar", "Camino crítico", "holgura = 0"], ["Costes", "Q* = CF/(p − cv)", "punto muerto"], ["Gestión", "ISO 9001 · PDCA", "mejora continua"], ["Herramientas", "Pareto · Ishikawa", "gráfico de control"]], "var(--pen)"),
  video: V("pc-iso", "Conociendo la ISO 9001:2015", "norma ISO 9001 qué es"),
  ejemplos: [
    { enunciado: "Un proyecto tiene estas actividades: A (3 semanas, sin precedentes), B (2, tras A), C (5, tras A), D (2, tras B) y E (3, tras C y D). Calcula la duración mínima, el camino crítico y las holguras.", pasos: ["Hacia delante: A empieza en 0 y acaba en 3. B: 3 → 5. C: 3 → 8. D: 5 → 7. E empieza en el mayor de los finales de C y D: máx(8, 7) = 8, y acaba en 11.", "Hacia atrás: E debe empezar como tarde en 8. C, como tarde en 8 − 5 = 3. D, como tarde en 8 − 2 = 6; B, como tarde en 6 − 2 = 4.", "Holguras: A = 0, C = 3 − 3 = 0, E = 0, B = 4 − 3 = 1, D = 6 − 5 = 1."], resultado: "Duración 11 semanas; camino crítico A-C-E; B y D tienen 1 semana de holgura." },
    { enunciado: "Una empresa fabrica lámparas con unos costes fijos de 24 000 € al año y un coste variable de 30 € por unidad. Las vende a 50 €. Calcula el punto muerto y el beneficio si vende 2 000 lámparas.", pasos: ["Margen de contribución: p − c<sub>v</sub> = 50 − 30 = 20 € por lámpara.", "Q* = CF / (p − c<sub>v</sub>) = 24 000 / 20 = 1 200 lámparas.", "Beneficio con 2 000: 20 · 2 000 − 24 000 = 16 000 €."], resultado: "Punto muerto: 1 200 unidades; beneficio: 16 000 €." },
    { enunciado: "En un mes se han registrado estos defectos: rayas 100, soldadura 60, pintura 20, montaje 12 y otros 8. Construye la tabla de Pareto e indica las pocas vitales.", pasos: ["Total: 200 defectos. Porcentajes: 50 %, 30 %, 10 %, 6 % y 4 %.", "Porcentajes acumulados: 50 %, 80 %, 90 %, 96 % y 100 %.", "Las dos primeras causas llegan al 80 %."], resultado: "Pocas vitales: rayas y soldadura (80 % de los defectos)." },
    { enunciado: "Un proceso fabrica ejes de diámetro medio 25,00 mm con σ = 0,02 mm. Calcula los límites de control y di si una muestra de media 25,07 mm indica un problema.", pasos: ["LCS = 25,00 + 3 · 0,02 = 25,06 mm.", "LCI = 25,00 − 3 · 0,02 = 24,94 mm.", "25,07 > 25,06: el punto queda fuera del límite superior."], resultado: "Límites 24,94 y 25,06 mm. La muestra indica una causa asignable: hay que investigar." },
    { enunciado: "El plano de los ejes anteriores exige 25 ± 0,10 mm. Calcula el índice de capacidad C<sub>p</sub> e interprétalo.", pasos: ["LTS − LTI = 25,10 − 24,90 = 0,20 mm.", "6σ = 6 · 0,02 = 0,12 mm.", "C<sub>p</sub> = 0,20 / 0,12 = 1,67."], resultado: "C<sub>p</sub> = 1,67 ≥ 1,33: el proceso es capaz con margen." },
    { enunciado: "Un calibre tiene un nonio de 50 divisiones que ocupan 49 mm. El cero del nonio queda entre 41 y 42 mm de la regla y coincide la raya 18. ¿Cuál es la apreciación y la medida?", pasos: ["Apreciación = 1 mm / 50 = 0,02 mm.", "Parte entera: 41 mm.", "Parte decimal: 18 · 0,02 = 0,36 mm."], resultado: "Apreciación 0,02 mm; medida 41,36 mm." },
  ],
  errores: [
    "Pensar que el camino crítico es el que tiene más actividades: es el que tiene la mayor duración total, aunque tenga menos tareas.",
    "Al recorrer la red hacia delante, tomar el menor de los finales que llegan a un nodo: hay que tomar el mayor, porque deben haber acabado todas las precedentes.",
    "Confundir exactitud con precisión: un instrumento puede dar medidas muy parecidas entre sí (preciso) y todas desplazadas del valor real (inexacto).",
    "Confundir los límites de control (lo que hace el proceso, μ ± 3σ) con las tolerancias del plano (lo que pide el cliente).",
    "Creer que la certificación ISO 9001 garantiza que un producto es bueno: certifica que la empresa tiene un sistema de gestión que cumple la norma.",
    "Calcular el punto muerto dividiendo los costes fijos entre el precio de venta en lugar de entre el margen p − c<sub>v</sub>.",
  ],
  ejercicios: [
    B("Explica las tres restricciones de todo proyecto y qué ocurre si se reduce el plazo manteniendo el alcance.", "Alcance, tiempo y coste. Si se reduce el plazo con el mismo alcance, hay que añadir recursos (más personas, horas extra, subcontratas) y el coste sube; si no se puede, habrá que recortar alcance."),
    B("Ordena y describe las etapas de ingeniería conceptual, de detalle y básica.", "Conceptual: viabilidad y estudio de alternativas. Básica: solución elegida, cálculos principales, planos de conjunto y presupuesto aproximado. De detalle: planos de cada pieza, listas de materiales, pliego de condiciones y presupuesto definitivo."),
    B("¿Qué es la holgura de una actividad? ¿Qué holgura tienen las actividades críticas?", "Es el tiempo que puede retrasarse sin retrasar el final del proyecto (inicio más tardío − inicio más temprano). Las críticas tienen holgura cero."),
    B("Dos actividades en serie, P (4 días) y Q (6 días), y en paralelo con ellas una R (8 días). Todas empiezan al inicio y el proyecto acaba cuando terminan P-Q y R. ¿Duración y camino crítico?", "P-Q dura 4 + 6 = 10 días y R, 8 días. Duración: 10 días; camino crítico P-Q; R tiene 2 días de holgura."),
    B("Una empresa tiene CF = 9 000 €, c<sub>v</sub> = 12 € y p = 21 €. Calcula el punto muerto.", "Q* = 9 000 / (21 − 12) = 9 000 / 9 = 1 000 unidades."),
    B("Explica con un ejemplo la diferencia entre coste fijo y coste variable.", "Fijo: el alquiler de la nave, que se paga igual se fabriquen 10 o 10 000 unidades. Variable: el plástico de cada pieza, que crece proporcionalmente a las unidades fabricadas."),
    B("Define calidad según la ISO 9000 y pon un ejemplo de producto barato con calidad.", "Grado en que las características de un producto cumplen los requisitos. Ejemplo: un paraguas de 5 € que no se rompe con el viento y protege de la lluvia cumple lo que se espera de él."),
    B("Nombra las cuatro fases del ciclo PDCA y qué se hace en la última si la mejora ha funcionado.", "Planificar, hacer, verificar y actuar. Si ha funcionado, se estandariza: se escribe el nuevo procedimiento y se forma al personal."),
    B("¿Qué son las 6 M del diagrama de Ishikawa?", "Máquinas, métodos, materiales, mano de obra, medición y medio ambiente: las seis familias de causas de un problema industrial."),
    B("Distingue normalización, certificación y acreditación.", "Normalización: elaborar normas por consenso (UNE, ISO). Certificación: una entidad independiente comprueba que algo cumple una norma. Acreditación: un organismo (ENAC) reconoce que la entidad certificadora o el laboratorio es competente."),
    B("Un calibre tiene un nonio de 10 divisiones. ¿Qué apreciación tiene? Lee la medida si el cero está entre 12 y 13 mm y coincide la raya 4.", "Apreciación 1/10 = 0,1 mm. Medida: 12 + 4 · 0,1 = 12,4 mm."),
    B("¿Qué significa la cota 40 ± 0,05 mm? Indica las cotas máxima y mínima y la tolerancia.", "La pieza es válida entre 39,95 mm (mínima) y 40,05 mm (máxima). Tolerancia: 0,10 mm."),
    M("Calcula el camino crítico: A (2, inicio), B (4, inicio), C (3, tras A), D (5, tras A y B), E (2, tras C), F (1, tras D y E).", "Adelante: A 0-2; B 0-4; C 2-5; D empieza en máx(2, 4) = 4 y acaba en 9; E 5-7; F empieza en máx(9, 7) = 9 y acaba en 10. Duración 10. Atrás: F empieza como tarde en 9; D en 9 − 5 = 4; E en 9 − 2 = 7; C en 7 − 3 = 4; A debe acabar antes de C y de D, como tarde en mín(4, 4) = 4, así que empieza como tarde en 2; B, en 4 − 4 = 0. Holguras: B 0, D 0, F 0 (críticas); A 2, C 2, E 2. Camino crítico B-D-F."),
    M("En el ejercicio anterior, la actividad C se retrasa 3 días. ¿Cambia la duración del proyecto?", "C tiene 2 días de holgura. Con 3 de retraso, C acaba en 8, E en 10 y F empieza en máx(9, 10) = 10 y acaba en 11: el proyecto se alarga 1 día y el camino crítico pasa a ser A-C-E-F."),
    M("Dibuja el diagrama de Gantt del ejercicio de las actividades A a F en una escala de 10 días.", "Barras: A días 1-2; B días 1-4 (crítica); C días 3-5; D días 5-9 (crítica); E días 6-7; F día 10 (crítica). Las críticas se destacan en otro color."),
    M("Una máquina cuesta 60 000 € y se amortiza en 5 años. El resto de costes fijos son 18 000 €/año. Cada pieza cuesta 4 € de material y energía y se vende a 10 €. ¿Cuántas piezas hay que vender al año para no perder dinero?", "CF anual = 60 000/5 + 18 000 = 30 000 €. Q* = 30 000 / (10 − 4) = 5 000 piezas al año."),
    M("Un fabricante duda entre un proceso manual (CF = 5 000 €, c<sub>v</sub> = 8 €) y uno automático (CF = 20 000 €, c<sub>v</sub> = 3 €). ¿A partir de cuántas unidades compensa el automático?", "Se igualan costes: 5 000 + 8Q = 20 000 + 3Q → 5Q = 15 000 → Q = 3 000. Por encima de 3 000 unidades el automático es más barato."),
    M("Con estos datos de reclamaciones (retraso 45, embalaje roto 25, pieza equivocada 15, factura 10, otros 5), calcula los porcentajes acumulados y di cuáles atacar primero.", "Total 100. Acumulado: 45 %, 70 %, 85 %, 95 %, 100 %. Las pocas vitales son retraso y embalaje roto (70 %), y con pieza equivocada se llega al 85 %."),
    M("Aplica la técnica de los cinco porqués al problema «el robot de soldadura se para varias veces al día».", "Ejemplo: ¿por qué se para? Salta el térmico del motor. ¿Por qué? Se calienta. ¿Por qué? El ventilador no refrigera. ¿Por qué? El filtro está obstruido. ¿Por qué? No está en el plan de mantenimiento. Acción: incluir la limpieza del filtro en el mantenimiento preventivo."),
    M("Un proceso llena botellas con media 1 000 mL y σ = 4 mL. Calcula los límites de control y di si las muestras 1 003, 990, 1 009 y 1 013 mL están bajo control.", "LCS = 1 000 + 12 = 1 012 mL; LCI = 988 mL. 1 003, 990 y 1 009 están dentro; 1 013 se sale por arriba: causa asignable."),
    M("La especificación de las botellas anteriores es 1 000 ± 15 mL. Calcula C<sub>p</sub>.", "C<sub>p</sub> = 30 / (6 · 4) = 30 / 24 = 1,25. Es mayor que 1 pero menor que 1,33: capaz, pero con poco margen."),
    M("Explica por qué un punto fuera de los límites de control no significa necesariamente que haya piezas defectuosas.", "Los límites de control reflejan la variación natural del proceso, no las tolerancias. Si la tolerancia es más ancha que los límites, la pieza puede ser válida aunque el proceso tenga una causa asignable que conviene corregir antes de que sí aparezcan defectos."),
    M("Clasifica los errores: a) el calibre marca 0,03 mm con las bocas cerradas; b) al medir diez veces el mismo diámetro salen valores que varían ±0,02 mm.", "a) Sistemático (error de cero): se corrige restando 0,03 o ajustando el instrumento. b) Aleatorio: se reduce repitiendo la medida y tomando la media."),
    M("Calcula el NPR de: a) fuga en una válvula (G 7, O 4, D 3); b) fallo del freno (G 10, O 2, D 2). ¿Cuál priorizarías?", "a) 84; b) 40. Aunque el NPR del freno es menor, su gravedad es 10 (riesgo para personas), así que se actúa sobre los dos, empezando por el freno."),
    A("Una actividad crítica de 6 semanas puede reducirse a 4 si se gastan 3 000 € más. El proyecto paga una penalización de 2 000 € por cada semana de retraso y va con 2 semanas de retraso. ¿Compensa? ¿Qué condición debe comprobarse antes?", "Ahorro en penalizaciones: 2 · 2 000 = 4 000 €, mayor que 3 000 €: compensa. Antes hay que comprobar que el camino crítico no cambia: si otro camino tiene solo 1 semana menos, al acortar 2 semanas esta actividad pasaría a mandar el otro camino y solo se ganaría 1 semana (2 000 €), que no compensa."),
    A("Una empresa vende 4 000 unidades a 25 € con CF = 30 000 € y c<sub>v</sub> = 15 €. Quiere duplicar el beneficio bajando el precio a 22 €. ¿Cuántas unidades debería vender?", "Beneficio actual: (25 − 15) · 4 000 − 30 000 = 10 000 €. Objetivo 20 000 €: (22 − 15) · Q − 30 000 = 20 000 → 7Q = 50 000 → Q ≈ 7 143 unidades (casi el doble de ventas)."),
    A("Un proceso tiene media 50,02 mm, σ = 0,01 mm y tolerancia 50,00 ± 0,05 mm. Calcula C<sub>p</sub>. Si se define C<sub>pk</sub> = mín(LTS − μ, μ − LTI)/3σ, calcula también C<sub>pk</sub> y explica la diferencia.", "C<sub>p</sub> = 0,10 / 0,06 = 1,67. C<sub>pk</sub> = mín(0,03, 0,07)/0,03 = 1. C<sub>p</sub> solo compara anchuras; C<sub>pk</sub> tiene en cuenta que el proceso está descentrado hacia el límite superior. Hay que centrar la media en 50,00."),
    A("En un gráfico de control aparecen ocho puntos seguidos por encima de la línea central, todos dentro de los límites. ¿Está el proceso bajo control? Razona.", "No. Aunque ningún punto se sale, la probabilidad de que ocho puntos al azar caigan del mismo lado es (1/2)⁸ ≈ 0,4 %: indica un desplazamiento de la media por una causa asignable (por ejemplo, desgaste de herramienta)."),
    A("Diseña el AMFE simplificado (tres modos de fallo con G, O, D y NPR) de una tostadora y propone una mejora para el de mayor riesgo.", "Ejemplo: a) no expulsa la tostada (G 4, O 4, D 3, NPR 48); b) la resistencia se rompe (G 5, O 3, D 2, NPR 30); c) descarga eléctrica por carcasa (G 10, O 2, D 5, NPR 100). Mejora para c): doble aislamiento y prueba de rigidez dieléctrica al 100 % de las unidades, que baja D a 1 (NPR 20)."),
    A("Un calibre tiene un error de cero de +0,04 mm. Se mide una pieza cinco veces: 18,26; 18,28; 18,24; 18,26; 18,26 mm. Da el resultado corregido con una incertidumbre razonable.", "Media: 91,30 / 5 = 18,26 mm. Corrección del cero: 18,26 − 0,04 = 18,22 mm. La dispersión es ±0,02 mm y la apreciación 0,02 mm: resultado 18,22 ± 0,02 mm."),
    A("Explica cómo se integrarían en un único sistema la ISO 9001, la ISO 14001 y la ISO 45001 en una fábrica de muebles, y qué ventaja tendría.", "Las tres comparten estructura (contexto, liderazgo, planificación, apoyo, operación, evaluación y mejora). Se haría un solo manual, un solo mapa de procesos, auditorías internas conjuntas y una única revisión por la dirección con indicadores de calidad (devoluciones), ambientales (residuos de barniz) y de seguridad (accidentes). Ventajas: menos burocracia, coherencia y menor coste de certificación."),
    A("Una pieza debe ajustar en un agujero de 20,000 a 20,021 mm. El eje mide entre 19,980 y 19,993 mm. Calcula el juego máximo y el mínimo y el tipo de ajuste.", "Juego máximo = agujero máx − eje mín = 20,021 − 19,980 = 0,041 mm. Juego mínimo = agujero mín − eje máx = 20,000 − 19,993 = 0,007 mm. Ambos positivos: ajuste con juego (el eje siempre gira libre)."),
  ],
  quiz: [
    q4("Las tres restricciones de un proyecto son…", ["alcance, tiempo y coste", "diseño, fabricación y venta", "calidad, normas y patentes", "personas, máquinas y energía"], 0, "Se influyen entre sí."),
    q4("El camino crítico es…", ["el de más actividades", "la cadena más larga de la red", "el más barato", "el que empieza antes"], 1, "Marca la duración mínima."),
    q4("Las actividades críticas tienen una holgura…", ["máxima", "negativa", "nula", "de una semana"], 2, "Cualquier retraso alarga el proyecto."),
    q4("Al calcular inicios tempranos, en un nodo con varias llegadas se toma…", ["el menor final", "el mayor final", "la media", "la suma"], 1, "Deben haber acabado todas."),
    q4("El diagrama de Gantt representa…", ["causas y efectos", "actividades como barras sobre el tiempo", "costes y beneficios", "defectos ordenados"], 1, "Henry Gantt, hacia 1910."),
    q4("Si CF = 10 000 €, p = 30 € y c<sub>v</sub> = 20 €, el punto muerto es…", ["333 unidades", "500 unidades", "1 000 unidades", "10 000 unidades"], 2, "10 000/(30 − 20)."),
    q4("La calidad total (TQM) implica…", ["solo al departamento de calidad", "a toda la organización", "inspeccionar el 100 % de piezas", "productos de lujo"], 1, "Con la dirección al frente."),
    q4("La norma de sistemas de gestión de la calidad es la…", ["ISO 14001", "ISO 9001", "ISO 45001", "ISO 27001"], 1, "La 14001 es ambiental."),
    q4("En el ciclo PDCA, la «C» significa…", ["Corregir", "Verificar (Check)", "Calcular", "Certificar"], 1, "Plan, Do, Check, Act."),
    q4("El diagrama de Pareto se basa en la regla…", ["50/50", "80/20", "6 M", "3σ"], 1, "Pocas causas, muchos efectos."),
    q4("El diagrama de Ishikawa sirve para…", ["ordenar defectos por frecuencia", "buscar las causas de un problema", "planificar el tiempo", "medir longitudes"], 1, "Espina de pescado."),
    q4("En un gráfico de control, los límites suelen estar a…", ["±1σ de la media", "±2σ", "±3σ", "±6σ"], 2, "LCS = μ + 3σ."),
    q4("Un proceso con C<sub>p</sub> = 0,8…", ["es muy capaz", "producirá piezas fuera de tolerancia", "está fuera de control", "no tiene variabilidad"], 1, "Su variación supera la tolerancia."),
    q4("El organismo español de normalización es…", ["ENAC", "UNE", "CEN", "IEC"], 1, "ENAC acredita."),
    q4("El marcado CE indica que…", ["el producto se fabricó en Europa", "cumple las directivas europeas de seguridad", "la empresa tiene ISO 9001", "el producto es reciclable"], 1, "Obligatorio para vender en la UE."),
    q4("Medidas muy parecidas entre sí pero lejos del valor real son…", ["exactas y precisas", "precisas pero no exactas", "exactas pero no precisas", "ni una cosa ni otra"], 1, "Error sistemático."),
    q4("Un nonio de 20 divisiones tiene una apreciación de…", ["0,02 mm", "0,05 mm", "0,1 mm", "0,2 mm"], 1, "1/20."),
    q4("Un error sistemático se corrige…", ["repitiendo la medida", "calibrando el instrumento", "redondeando", "no tiene corrección"], 1, "Se repite siempre igual."),
    q4("En el AMFE, NPR =", ["G + O + D", "G · O · D", "G · O / D", "(G + O) · D"], 1, "Va de 1 a 1 000."),
    q4("Un ajuste en el que el eje siempre es menor que el agujero es…", ["con apriete", "con juego", "indeterminado", "forzado"], 1, "Permite el giro."),
  ],
  examen: [
    q4("Actividades: A (4), B (3, tras A), C (6, tras A), D (2, tras B y C). La duración mínima es…", ["9", "12", "15", "10"], 1, "A-C-D = 4 + 6 + 2."),
    q4("En el caso anterior, la holgura de B es…", ["0", "2", "3", "6"], 2, "C dura 3 semanas más que B."),
    q4("CF = 50 000 €, p = 120 €, c<sub>v</sub> = 70 €. Punto muerto:", ["417", "714", "1 000", "2 500"], 2, "50 000/50."),
    q4("μ = 10,00 mm y σ = 0,03 mm. El LCS es…", ["10,03", "10,06", "10,09", "10,30"], 2, "10 + 0,09."),
    q4("Tolerancia 10 ± 0,12 mm y σ = 0,03 mm. C<sub>p</sub> =", ["0,75", "1,00", "1,33", "1,50"], 2, "0,24/0,18."),
    q4("Defectos: 70, 20, 6, 4. El porcentaje acumulado de las dos primeras causas es…", ["70 %", "80 %", "90 %", "96 %"], 2, "(70 + 20)/100."),
    q4("Nonio de 50 divisiones, cero entre 7 y 8 mm, coincide la raya 31. Medida:", ["7,31 mm", "7,62 mm", "7,031 mm", "7,155 mm"], 1, "7 + 31 · 0,02."),
    q4("Un fallo con G 8, O 5, D 6 tiene un NPR de…", ["19", "48", "240", "480"], 2, "8 · 5 · 6."),
  ],
  feynman: ["Cómo se encuentra el camino crítico de un proyecto y por qué importa", "Qué es el punto muerto y cómo se calcula", "En qué consiste el ciclo PDCA con un ejemplo", "Para qué sirven el diagrama de Pareto y el de Ishikawa", "Qué diferencia hay entre límites de control y tolerancias"],
  glosario: [
    ["Proyecto", "Conjunto de actividades coordinadas, con inicio y fin, para lograr un objetivo con recursos limitados."],
    ["Ingeniería concurrente", "Forma de trabajo en la que diseño, fabricación y otros departamentos colaboran a la vez desde el principio."],
    ["Camino crítico", "Secuencia de actividades sin holgura que determina la duración mínima del proyecto."],
    ["Holgura", "Tiempo que una actividad puede retrasarse sin retrasar el proyecto."],
    ["Hito", "Momento clave del proyecto, sin duración, que marca el final de una fase."],
    ["Punto muerto", "Cantidad de producto para la que ingresos y costes se igualan."],
    ["Calidad", "Grado en que las características de un producto o servicio cumplen los requisitos."],
    ["Calidad total", "Gestión en la que toda la organización busca satisfacer al cliente y mejorar continuamente."],
    ["Ciclo PDCA", "Ciclo de mejora continua: planificar, hacer, verificar y actuar."],
    ["Diagrama de Pareto", "Barras de causas ordenadas de mayor a menor con su porcentaje acumulado."],
    ["Diagrama de Ishikawa", "Diagrama causa-efecto en forma de espina de pescado."],
    ["Gráfico de control", "Gráfico de la evolución de un proceso con su línea central y límites de control."],
    ["Índice de capacidad", "Cociente entre la tolerancia y la variación natural del proceso (6σ)."],
    ["Norma", "Documento técnico aprobado por consenso que fija reglas para productos o procesos."],
    ["Certificación", "Declaración de una entidad independiente de que algo cumple una norma."],
    ["Incertidumbre", "Intervalo en el que se encuentra, con cierta probabilidad, el valor verdadero de una medida."],
    ["Trazabilidad", "Cadena de calibraciones que enlaza un instrumento con los patrones nacionales."],
    ["AMFE", "Análisis preventivo de los modos de fallo, sus efectos y su prioridad de riesgo."],
  ],
  situacion: {
    titulo: "Calidad en la cafetería del instituto",
    reto: "La cafetería del centro recibe quejas por las colas, los bocadillos que se acaban y los pedidos equivocados. Vuestro equipo actuará como consultor de calidad: medirá el problema, buscará sus causas y propondrá un plan de mejora con un ciclo PDCA completo.",
    pasos: [
      "Diseñad una hoja de recogida de datos y registrad durante una semana las incidencias del recreo (tipo, día y hora).",
      "Construid un diagrama de Pareto con hoja de cálculo e identificad las pocas vitales.",
      "Haced un diagrama de Ishikawa con las 6 M para la incidencia principal y aplicad los cinco porqués.",
      "Proponed dos mejoras con su coste y planificad su puesta en marcha con un pequeño diagrama de Gantt.",
      "Aplicad una mejora a prueba durante una semana, volved a medir y comparad los resultados.",
    ],
    producto: "Un informe de calidad de cuatro páginas con los datos, los diagramas, el plan de mejora y la verificación, presentado a la dirección del centro.",
    evaluacion: [
      "Recoge datos fiables y los representa correctamente en el diagrama de Pareto.",
      "Identifica causas raíz con el diagrama de Ishikawa y los cinco porqués.",
      "Planifica la mejora con tiempos y costes realistas.",
      "Verifica el resultado con datos y extrae conclusiones para estandarizar.",
    ],
  },
  mapa: mapaB("PROYECTO Y CALIDAD", [
    ["Planificación", "red · camino crítico · Gantt", "var(--pen)"],
    ["Viabilidad", "costes fijos y variables · punto muerto", "var(--leaf)"],
    ["Gestión de la calidad", "ISO 9001 · PDCA · normas · CE", "var(--red)"],
    ["Herramientas", "Pareto · Ishikawa · SPC · AMFE", "var(--inf)"],
  ]),
  tarjetas: [
    ["Camino crítico", "Cadena de actividades con holgura cero; fija la duración del proyecto."],
    ["Holgura", "Inicio más tardío − inicio más temprano."],
    ["Punto muerto", "Q* = CF / (p − cv)"],
    ["Margen de contribución", "p − cv: lo que aporta cada unidad a cubrir costes fijos."],
    ["ISO 9001", "Norma de sistemas de gestión de la calidad."],
    ["PDCA", "Planificar, hacer, verificar, actuar."],
    ["Regla de Pareto", "El 80 % de los efectos viene del 20 % de las causas."],
    ["6 M", "Máquinas, métodos, materiales, mano de obra, medición, medio."],
    ["Límites de control", "μ ± 3σ"],
    ["Cp", "(LTS − LTI) / 6σ; capaz si ≥ 1,33."],
    ["Exactitud y precisión", "Cerca del valor real / cerca entre sí."],
    ["NPR del AMFE", "Gravedad · Ocurrencia · Detección"],
  ],
  familias: [
    "Planificad juntos una tarea doméstica grande (una mudanza de habitación, una fiesta) con una lista de actividades, sus duraciones y un diagrama de Gantt en papel.",
    "Buscad en casa productos con el marcado CE y con alguna norma UNE o ISO en la etiqueta y comentad qué garantizan.",
    "Medid con una regla y, si podéis, con un calibre el grosor de varias monedas y comparad la precisión de los dos instrumentos.",
    "Preguntad qué es lo que más se estropea en casa y haced un pequeño Pareto de averías del último año.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Proyectos de investigación y desarrollo»: gestión de proyectos (planificación de tiempos y recursos, camino crítico, diagramas de Gantt, viabilidad económica); sistemas de gestión de la calidad, normalización y certificación; herramientas de mejora continua y de control de calidad; metrología y documentación técnica del proyecto.`,
    ideas: [
      "Planificar el proyecto del trimestre del aula taller con una hoja de cálculo que genere el Gantt y marque el camino crítico.",
      "Recoger datos reales de medidas de piezas impresas en 3D y construir su histograma y su gráfico de control.",
      "Simular una auditoría interna de un procedimiento del aula taller (préstamo de herramientas) siguiendo la ISO 9001.",
      "Concurso de lectura de calibres con piezas preparadas y medidas de referencia.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "UNE: Asociación Española de Normalización", url: "https://www.une.org/" },
    { t: "ISO 9001: Sistemas de gestión de la calidad (ISO)", url: "https://www.iso.org/es/iso-9001-quality-management" },
    { t: "Centro Español de Metrología", url: "https://www.cem.es/" },
  ],
  revisado: "2026-11-21",
};
