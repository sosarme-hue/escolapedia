// Programación y robótica 2º ESO: introducción a la robótica. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Introducción a la robótica",
  minutos: 50,
  objetivos: ["Definir qué es un robot y en qué se diferencia de otras máquinas", "Identificar las partes de un robot: estructura, sensores, controlador, actuadores y energía", "Clasificar los robots según su uso y su forma", "Conocer la historia de la robótica y reflexionar sobre su impacto en la sociedad"],
  claves: ["robot", "robótica", "sensor", "actuador", "controlador", "microcontrolador", "programa", "autonomía", "robot industrial", "robot educativo", "automatización", "inteligencia artificial"],
  pregunta: {
    texto: "Una lavadora automática hace la colada sola y un robot aspirador limpia la casa solo. ¿Por qué decimos que el aspirador es un robot y la lavadora normalmente no?",
    respuesta: "Porque el robot aspirador <b>percibe su entorno con sensores</b> (choques, escaleras, suciedad), <b>decide</b> con su programa qué hacer y <b>actúa moviéndose</b> por la casa, adaptándose a lo que encuentra. La lavadora sigue un programa fijo de pasos y no se mueve ni reacciona a un entorno cambiante: es una máquina <b>automática</b>, pero no un robot.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una <b>máquina programable</b> capaz de <b>percibir su entorno</b> mediante sensores, <b>procesar</b> esa información y <b>actuar</b> sobre el mundo físico (moviéndose, cogiendo objetos, encendiendo luces) de forma <b>autónoma</b> o semiautónoma. La clave está en ese ciclo: <b>percibir → decidir → actuar</b>, que se repite continuamente. La <mark>robótica</mark> es la rama de la tecnología que diseña, construye, programa y utiliza robots; combina la <b>mecánica</b> (estructuras y mecanismos), la <b>electrónica</b> (circuitos, sensores, motores) y la <b>informática</b> (programación). Una máquina que solo repite siempre los mismos movimientos sin enterarse de lo que pasa a su alrededor es una máquina <b>automática</b>, pero no se suele considerar un robot. Y no todos los robots tienen forma humana: la mayoría parecen brazos, coches, drones o simples cajas con ruedas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de un robot: percibir con sensores, decidir con el programa y actuar con motores, que cambia el entorno y vuelve a empezar">${BG}
        ${caja(14, 60, 70, 44, "percibir", "var(--pen)", { size: 11 })}${caja(95, 60, 70, 44, "decidir", "var(--red)", { size: 11 })}${caja(176, 60, 70, 44, "actuar", "var(--leaf)", { size: 11 })}
        ${fl(84, 82, 93, 82, "var(--ink)", 2)}${fl(165, 82, 174, 82, "var(--ink)", 2)}
        ${t(49, 120, "sensores", { size: 9.5, color: "var(--muted)" })}${t(130, 120, "programa", { size: 9.5, color: "var(--muted)" })}${t(211, 120, "motores", { size: 9.5, color: "var(--muted)" })}
        <path d="M211 128 C 211 162, 49 162, 49 128" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-dasharray="5 4"/>${fl(52, 140, 49, 130, "var(--muted)", 1.8)}${t(130, 172, "el entorno cambia y se repite", { size: 9.5, color: "var(--muted)" })}
        ${t(130, 40, "robot", { size: 14, font: D })}</svg>`,
    },
    {
      html: `<h3>Las partes de un robot</h3><p>Aunque los robots sean muy distintos, todos tienen las mismas partes básicas. La <mark>estructura</mark> o chasis es el «esqueleto»: sostiene y protege los demás componentes; puede ser de metal, plástico, madera o incluso cartón. Los <mark>sensores</mark> son sus «sentidos»: captan información del entorno, como la luz, la distancia, el sonido, el contacto o la temperatura. El <mark>controlador</mark> es su «cerebro»: un pequeño ordenador, normalmente un <b>microcontrolador</b> o una placa como Arduino o micro:bit, que ejecuta el programa, lee los sensores y decide qué hacer. Los <mark>actuadores</mark> son sus «músculos»: los elementos que producen una acción, como los <b>motores</b> que mueven ruedas y brazos, los LED, los altavoces o las pinzas. La <b>fuente de energía</b> (pilas, baterías o la red eléctrica) alimenta todo el sistema. Y, por supuesto, el <b>programa</b>, sin el cual el robot no haría nada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot móvil con sus partes señaladas: sensor de distancia delante, controlador en el centro, batería, motores con ruedas y chasis">${BG}
        <rect x="70" y="70" width="120" height="50" rx="8" fill="#c9ccd3" stroke="var(--ink)" stroke-width="2"/>
        <rect x="104" y="78" width="52" height="24" rx="3" fill="#2f7d4f" stroke="var(--ink)"/>${t(130, 94, "placa", { size: 9, color: "#fff" })}
        <rect x="160" y="80" width="22" height="30" rx="3" fill="#e6a100" stroke="var(--ink)"/>
        <rect x="190" y="82" width="12" height="20" rx="2" fill="var(--pen)" stroke="var(--ink)"/><circle cx="198" cy="87" r="3" fill="#fff"/><circle cx="198" cy="97" r="3" fill="#fff"/>
        <circle cx="90" cy="124" r="14" fill="var(--ink)"/><circle cx="170" cy="124" r="14" fill="var(--ink)"/><circle cx="90" cy="124" r="5" fill="#888"/><circle cx="170" cy="124" r="5" fill="#888"/>
        ${t(214, 60, "sensor", { size: 9.5, color: "var(--pen)" })}${fl(212, 64, 202, 80, "var(--pen)", 1.2)}
        ${t(110, 44, "controlador", { size: 9.5, color: "var(--red)" })}${fl(116, 48, 124, 76, "var(--red)", 1.2)}
        ${t(196, 36, "batería", { size: 9.5, color: "#b8860b" })}${fl(190, 40, 174, 78, "#b8860b", 1.2)}
        ${t(40, 160, "motor y rueda", { size: 9.5, color: "var(--leaf)" })}${fl(52, 150, 78, 132, "var(--leaf)", 1.2)}
        ${t(40, 64, "chasis", { size: 9.5, color: "var(--muted)" })}${fl(48, 68, 70, 80, "var(--muted)", 1.2)}</svg>`,
    },
    {
      html: `<h3>Sensores y actuadores: entradas y salidas</h3><p>Desde el punto de vista del controlador, los sensores son <b>entradas</b> (le dan información) y los actuadores son <b>salidas</b> (reciben sus órdenes). Por ejemplo, en un robot que sigue una línea negra en el suelo, dos sensores de infrarrojos miran el suelo: si el sensor izquierdo ve negro, el programa ordena girar a la izquierda, y si es el derecho, a la derecha. En un robot que evita obstáculos, un sensor de ultrasonidos mide la distancia y, si es menor de 20 cm, los motores retroceden y giran. Los sensores pueden ser <b>digitales</b>, si solo dan dos valores (pulsado o no, hay línea o no), o <b>analógicos</b>, si dan un valor que varía (la cantidad de luz, la distancia en centímetros). Y los actuadores más usados en robótica educativa son los <b>motores de corriente continua</b> (para las ruedas), los <b>servomotores</b> (que giran a un ángulo exacto, para brazos y pinzas), los LED y los zumbadores.</p>${tabla(["Entrada (sensor)", "Salida (actuador)", "Comportamiento"], [["Ultrasonidos: distancia", "Motores de las ruedas", "Si hay un obstáculo cerca, girar"], ["Infrarrojos: línea negra", "Motores de las ruedas", "Seguir la línea"], ["Luz (LDR)", "LED", "Si está oscuro, encender la luz"], ["Pulsador", "Zumbador", "Al pulsar, sonar"]])}`,
    },
    {
      html: `<h3>Una breve historia de la robótica</h3><p>La idea de máquinas que se mueven solas es muy antigua: en la Grecia clásica, Herón de Alejandría construyó <b>autómatas</b> movidos por agua y aire, y en el siglo XV Leonardo da Vinci diseñó un caballero mecánico. En el siglo XVIII se hicieron famosos los autómatas de relojería que escribían o tocaban música. La palabra <b>robot</b> la inventó el escritor checo <b>Karel Čapek</b> en su obra de teatro <i>R.U.R.</i> (1920), a partir de la palabra checa <i>robota</i>, que significa «trabajo forzado». El escritor <b>Isaac Asimov</b> popularizó el término «robótica» y propuso sus famosas <b>tres leyes de la robótica</b> en sus relatos. En 1961 empezó a trabajar en una fábrica de coches de Estados Unidos el primer robot industrial, <b>Unimate</b>. Desde entonces los robots han llegado a las fábricas, a los hospitales, a los hogares y hasta a Marte, donde los vehículos robóticos exploran la superficie del planeta.</p>`,
      video: { id: "wUNEXQ0lJTU", titulo: "Historia de la robótica: los datos más asombrosos", canal: "RONIN Educación", vistas: 120294 },
    },
    {
      html: `<h3>Tipos de robots</h3><p>Los robots se pueden clasificar de varias formas. Según su <b>uso</b>: los <mark>robots industriales</mark>, casi siempre brazos articulados, que sueldan, pintan, montan y empaquetan en las fábricas con gran rapidez y precisión; los <b>robots de servicio</b>, que ayudan a las personas, como los aspiradores, los cortacésped, los robots de reparto o los que guían en museos; los <b>robots médicos</b>, como los que ayudan a operar con movimientos muy precisos o las prótesis robóticas; los <b>robots de exploración</b>, que van a lugares peligrosos o inaccesibles, como el fondo del mar, volcanes, zonas con radiación o el espacio; y los <b>robots educativos</b>, como mBot, LEGO, micro:bit o los hechos con Arduino, para aprender a programar. Según su <b>forma</b>, hay brazos fijos, robots móviles con ruedas u orugas, robots con patas, drones voladores, robots submarinos y <b>humanoides</b>, con forma parecida a la humana.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tipos de robots según su forma: brazo industrial, robot móvil con ruedas, dron y humanoide">${BG}
        <rect x="16" y="120" width="40" height="10" fill="var(--ink)"/><path d="M36 120 L 30 84 L 56 60" fill="none" stroke="#e6a100" stroke-width="7" stroke-linecap="round"/><circle cx="30" cy="84" r="5" fill="var(--ink)"/><path d="M56 60 l 8 -4 M56 60 l 8 6" stroke="var(--ink)" stroke-width="2.5"/>${t(36, 150, "brazo", { size: 10 })}
        <rect x="80" y="96" width="44" height="22" rx="5" fill="var(--pen)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="90" cy="122" r="7" fill="var(--ink)"/><circle cx="114" cy="122" r="7" fill="var(--ink)"/><rect x="122" y="100" width="6" height="10" fill="#888"/>${t(102, 150, "móvil", { size: 10 })}
        <rect x="150" y="84" width="30" height="12" rx="4" fill="var(--muted)"/><path d="M150 90 h -12 M180 90 h 12" stroke="var(--ink)" stroke-width="2"/><ellipse cx="136" cy="84" rx="10" ry="3" fill="var(--red)" fill-opacity=".6"/><ellipse cx="194" cy="84" rx="10" ry="3" fill="var(--red)" fill-opacity=".6"/><path d="M138 84 v 6 M192 84 v 6" stroke="var(--ink)" stroke-width="2"/>${t(165, 150, "dron", { size: 10 })}
        <circle cx="228" cy="62" r="10" fill="#c9ccd3" stroke="var(--ink)" stroke-width="1.5"/><rect x="216" y="74" width="24" height="30" rx="4" fill="#c9ccd3" stroke="var(--ink)" stroke-width="1.5"/><path d="M220 104 v 20 M236 104 v 20 M216 80 l -8 16 M240 80 l 8 16" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>${t(228, 150, "humanoide", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Robots en nuestra vida</h3><p>Los robots están mucho más presentes de lo que parece. En las <b>fábricas</b> de coches, más de la mitad del trabajo de montaje y soldadura lo hacen robots; también en las de alimentos, medicamentos o electrónica. En los grandes <b>almacenes</b> de las tiendas por internet, robots móviles transportan las estanterías hasta los trabajadores. En los <b>hospitales</b>, los robots quirúrgicos permiten operaciones con pequeñas incisiones y menos riesgo, y hay exoesqueletos que ayudan a caminar a personas con lesiones. En el <b>campo</b>, hay tractores autónomos, robots que ordeñan las vacas y drones que vigilan los cultivos. En <b>casa</b>, aspiradores y cortacésped robóticos. Y en el <b>espacio</b>, robots como los rovers de Marte o el brazo robótico de la Estación Espacial Internacional. Los <b>coches autónomos</b>, que conducen solos con cámaras, radares y programas de inteligencia artificial, son también robots sobre ruedas.</p>`,
      video: { id: "xUva8lVnWNM", titulo: "¡Robots por todos lados!", canal: "Educar Portal", vistas: 133390 },
    },
    {
      html: `<h3>Robots, inteligencia artificial y sociedad</h3><p>Muchos robots modernos usan <mark>inteligencia artificial</mark> (IA): programas capaces de aprender a partir de ejemplos para reconocer objetos en una imagen, entender la voz o mejorar sus movimientos. Esto los hace más útiles, pero también plantea preguntas importantes. Los robots pueden hacer <b>trabajos peligrosos, repetitivos o muy precisos</b>, ahorrar esfuerzo a las personas y producir más barato; pero algunos empleos desaparecen y aparecen otros nuevos, por lo que hay que <b>formarse</b> para ellos. Hay que decidir <b>quién es responsable</b> si un robot o un coche autónomo causa un accidente, cómo proteger la <b>privacidad</b> de los datos que recogen sus cámaras y micrófonos, y qué límites poner a los robots en el ámbito militar. La Unión Europea ya ha aprobado leyes sobre la inteligencia artificial. La tecnología no es buena ni mala por sí misma: depende de cómo decidamos usarla entre todos.</p>`,
    },
    {
      html: `<h3>La robótica educativa</h3><p>Para aprender robótica en el instituto se usan <b>kits y placas</b> pensados para estudiantes. La <b>micro:bit</b> es una pequeña placa con LED, botones, sensores de luz, temperatura y movimiento, y brújula, que se programa por bloques con MakeCode. <b>Arduino</b> es una placa con un microcontrolador a la que se conectan sensores, motores y LED; se programa en mBlock o Arduinoblocks (bloques) o en un lenguaje de texto basado en C++. El <b>mBot</b> es un robot móvil ya montado con sensores de ultrasonidos y de línea, que se programa con mBlock. También hay kits de <b>LEGO</b> y robots sencillos para los más pequeños. Con estas herramientas se aplican a la vez la programación, la electrónica y la mecánica que se estudian en Tecnología. Además, muchos centros participan en <b>competiciones de robótica</b> como la First LEGO League, donde equipos de estudiantes diseñan robots para superar retos.</p>${tabla(["Plataforma", "Qué es", "Cómo se programa"], [["micro:bit", "placa con sensores y LED integrados", "MakeCode (bloques y Python)"], ["Arduino", "placa con microcontrolador", "Arduinoblocks, mBlock o C++"], ["mBot", "robot móvil con sensores", "mBlock (bloques)"], ["LEGO Education", "piezas, motores y sensores", "bloques propios"]])}`,
    },
  ],
  figura: {
    titulo: "Las partes de un robot y sus equivalentes humanos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Partes de un robot comparadas con el cuerpo humano: sensores como los sentidos, controlador como el cerebro, actuadores como los músculos, estructura como el esqueleto y energía como la comida">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Sensores", "sentidos", "distancia, luz, línea", "var(--pen)"], ["Controlador", "cerebro", "Arduino, micro:bit", "var(--red)"], ["Actuadores", "músculos", "motores, LED, pinza", "var(--leaf)"], ["Estructura", "esqueleto", "chasis, piezas", "var(--muted)"], ["Energía", "alimento", "pilas, batería", "#b8860b"]].map(([a, b, c, col], i) => { const x = 14 + i * 126; return `<rect x="${x}" y="30" width="108" height="150" rx="14" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2.5"/>${t(x + 54, 66, a, { size: 15, color: col, font: D })}${t(x + 54, 102, "= " + b, { size: 13 })}${t(x + 54, 146, c, { size: 9.5, weight: 400 })}`; }).join("")}
      ${t(320, 210, "y un programa que lo une todo", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "bHOrWkkXWmM", titulo: "¿Qué es la robótica?", canal: "RONIN Educación", vistas: 190339, megusta: 2498, busqueda: "qué es la robótica partes de un robot" },
  ejemplos: [
    { enunciado: "Identifica las partes de un robot aspirador.",
      pasos: ["Sensores: de choque, de escaleras (infrarrojos) y de suciedad.", "Controlador: su placa con el programa. Actuadores: motores de ruedas y cepillos.", "Estructura: carcasa redonda. Energía: batería recargable."],
      resultado: "Tiene todas las partes de un robot." },
    { enunciado: "¿Es un robot una puerta automática de supermercado?",
      pasos: ["Tiene un sensor que detecta personas y un motor que abre la puerta.", "Pero solo hace una acción fija y no se adapta ni se mueve por el entorno.", "Se considera una máquina automática más que un robot."],
      resultado: "Automatismo, no robot (aunque comparte partes)." },
    { enunciado: "Diseña el comportamiento de un robot que no se cae de la mesa.",
      pasos: ["Sensor: infrarrojos mirando al suelo delante.", "Si deja de detectar superficie: parar, retroceder y girar.", "Si no: seguir avanzando, dentro de un bucle por siempre."],
      resultado: "Percibir, decidir y actuar." },
  ],
  errores: [
    "Pensar que todos los robots tienen forma humana.",
    "Confundir una máquina automática con un robot: el robot percibe y se adapta.",
    "Confundir sensores (entradas) con actuadores (salidas).",
    "Olvidar que sin programa un robot no hace nada.",
    "Pensar que la palabra «robot» la inventó Asimov: fue Karel Čapek.",
  ],
  ejercicios: [
    { q: "Define robot y robótica.", sol: "Robot: máquina programable que percibe, decide y actúa de forma autónoma. Robótica: tecnología que diseña, construye y programa robots." },
    { q: "¿Qué tres disciplinas combina la robótica?", sol: "Mecánica, electrónica e informática." },
    { q: "Nombra las partes de un robot y su equivalente en el cuerpo humano.", sol: "Sensores (sentidos), controlador (cerebro), actuadores (músculos), estructura (esqueleto), energía (alimento)." },
    { q: "Clasifica como sensor o actuador: motor, LDR, LED, ultrasonidos, zumbador, pulsador.", sol: "Sensores: LDR, ultrasonidos, pulsador. Actuadores: motor, LED, zumbador." },
    { q: "¿Qué diferencia hay entre un sensor digital y uno analógico?", sol: "El digital da dos valores; el analógico, un valor que varía." },
    { q: "¿De dónde viene la palabra robot y quién la inventó?", sol: "Del checo «robota» (trabajo forzado); Karel Čapek, en 1920." },
    { q: "¿Cuál fue el primer robot industrial y cuándo empezó a trabajar?", sol: "Unimate, en 1961." },
    { q: "Pon un ejemplo de robot industrial, de servicio, médico y de exploración.", sol: "Brazo soldador, robot aspirador, robot quirúrgico, rover de Marte." },
    { q: "Escribe una ventaja y un problema de los robots en el trabajo.", sol: "Hacen trabajos peligrosos o repetitivos; algunos empleos desaparecen." },
    { q: "Nombra dos plataformas de robótica educativa y cómo se programan.", sol: "micro:bit (MakeCode) y mBot (mBlock)." },
  ],
  quiz: [
    { q: "Un robot debe poder…", o: ["percibir, decidir y actuar", "solo moverse", "hablar"], a: 0, e: "El ciclo del robot." },
    { q: "El «cerebro» del robot es…", o: ["el controlador", "el motor", "la batería"], a: 0, e: "Controlador." },
    { q: "Un motor es un…", o: ["sensor", "actuador", "controlador"], a: 1, e: "Actuador." },
    { q: "Un sensor de ultrasonidos mide…", o: ["la distancia", "la temperatura", "el color"], a: 0, e: "Distancia." },
    { q: "La palabra robot la inventó…", o: ["Asimov", "Čapek", "Da Vinci"], a: 1, e: "Karel Čapek." },
    { q: "El primer robot industrial fue…", o: ["Unimate", "R2-D2", "mBot"], a: 0, e: "Unimate, 1961." },
    { q: "Un robot que explora Marte es de…", o: ["exploración", "servicio doméstico", "industria"], a: 0, e: "Exploración." },
    { q: "Un servomotor sirve para…", o: ["girar a un ángulo exacto", "medir luz", "dar energía"], a: 0, e: "Brazos y pinzas." },
    { q: "La micro:bit se programa con…", o: ["MakeCode", "Word", "Photoshop"], a: 0, e: "MakeCode." },
    { q: "Los robots que aprenden de ejemplos usan…", o: ["inteligencia artificial", "solo pilas", "vapor"], a: 0, e: "IA." },
  ],
  examen: [
    { q: "Las tres leyes de la robótica las propuso…", o: ["Isaac Asimov", "Karel Čapek", "Leonardo"], a: 0, e: "En sus relatos." },
    { q: "Para un robot sigue-líneas se usan sensores de…", o: ["infrarrojos", "temperatura", "sonido"], a: 0, e: "Detectan el negro del suelo." },
    { q: "Un sensor que solo da «pulsado» o «no pulsado» es…", o: ["digital", "analógico", "actuador"], a: 0, e: "Dos valores." },
  ],
  feynman: ["Qué hace que una máquina sea un robot", "Cuáles son las partes de un robot y para qué sirve cada una", "Qué ventajas y qué problemas plantean los robots en la sociedad"],
  mapa: mapa("ROBOT", "var(--eso)", [
    ["Ciclo", "percibir · decidir · actuar", "var(--pen)"],
    ["Partes", "sensores · controlador · actuadores", "var(--red)"],
    ["Tipos", "industrial · servicio · exploración", "#b8860b"],
    ["Sociedad", "empleo · IA · ética", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Robot", "Máquina programable que percibe, decide y actúa."],
    ["Robótica", "Mecánica + electrónica + informática."],
    ["Sensor", "Entrada: capta información del entorno."],
    ["Actuador", "Salida: produce una acción (motor, LED)."],
    ["Controlador", "Cerebro: placa que ejecuta el programa."],
    ["Karel Čapek", "Inventó la palabra robot (1920)."],
    ["Unimate", "Primer robot industrial (1961)."],
    ["Robot educativo", "micro:bit, Arduino, mBot, LEGO."],
  ],
  familias: ["Buscad en casa máquinas automáticas y robots y discutid cuáles son robots de verdad.", "Ved juntos un vídeo de un robot de Marte o de un robot quirúrgico.", "Debatid en familia qué trabajos haríais con robots y cuáles no."],
  profesores: {
    saberes: "Robótica: concepto de robot, componentes (estructura, sensores, controlador, actuadores, energía), clasificación, historia, aplicaciones e implicaciones sociales y éticas, y plataformas de robótica educativa (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Clasificación de imágenes de máquinas en «robot» o «automatismo» con justificación.", "Juego de rol: un alumno-robot con sensores (ojos tapados) y otro como programa.", "Debate sobre robots y empleo con ejemplos del entorno."],
  },
  fuentes: [RD, wiki("Robótica", "Robótica"), wiki("Robot", "Robot")],
  revisado: REV,
};
