// Programación y robótica 1º ESO: mi primer robot. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Mi primer robot",
  minutos: 60,
  objetivos: ["Definir qué es un robot y distinguirlo de otras máquinas", "Identificar las partes de un robot: estructura, controlador, sensores, actuadores y alimentación", "Programar movimientos y reacciones básicas de un robot educativo por bloques", "Explicar cómo funciona un robot que esquiva obstáculos y uno que sigue una línea"],
  claves: ["robot", "robótica", "automatismo", "controlador", "placa", "sensor", "actuador", "motor", "servomotor", "ultrasonidos", "sensor de línea", "infrarrojos", "LED", "zumbador", "batería"],
  pregunta: {
    texto: "Un microondas sigue un programa y una lavadora también. ¿Son robots?",
    respuesta: "No exactamente. Son <b>automatismos</b>: siguen siempre el mismo programa fijo, con pocos sensores y pocas decisiones. Un <b>robot</b> se distingue porque <b>percibe su entorno</b> con sensores, <b>decide</b> qué hacer según lo que percibe, <b>actúa</b> sobre el mundo moviéndose o manipulando objetos, y se puede <b>reprogramar</b> para hacer tareas distintas. Un robot aspirador que esquiva muebles y vuelve a su base cuando le queda poca batería sí es un robot.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una máquina <b>programable</b> capaz de <b>percibir</b> lo que ocurre a su alrededor mediante sensores, <b>procesar</b> esa información y <b>actuar</b> en consecuencia, moviéndose o manipulando objetos, con cierta autonomía. La <mark>robótica</mark> es la rama de la tecnología que diseña, construye y programa robots, y combina mecánica, electrónica e informática. La palabra «robot» se usó por primera vez en una obra de teatro del escritor checo Karel Čapek, en 1920, y viene de una palabra checa que significa «trabajo forzado». Hoy hay robots de muchos tipos: <b>industriales</b> (brazos que sueldan o pintan coches en las fábricas), <b>domésticos</b> (aspiradores, cortacéspedes), <b>médicos</b> (que ayudan en operaciones de mucha precisión), de <b>exploración</b> (los vehículos que recorren Marte o los submarinos que exploran el fondo del mar), de <b>logística</b> (que mueven paquetes en los almacenes), <b>sociales</b> y <b>educativos</b>, como los que se usan en clase para aprender a programar.</p>`,
      video: { id: "z5IqRReRKtA", titulo: "¿Cuáles son las partes de un robot?", canal: "RONIN Educación", vistas: 38132 },
    },
    {
      html: `<h3>Las partes de un robot</h3><p>Todo robot, desde el más sencillo al más complejo, tiene las mismas partes básicas, que se pueden comparar con un ser vivo. La <mark>estructura</mark> o chasis es el «esqueleto»: sostiene y protege los demás componentes; en los robots educativos suele ser de metal, plástico o piezas de construcción. El <mark>controlador</mark> es el «cerebro»: una pequeña placa electrónica con un microcontrolador (un ordenador diminuto) que guarda el programa y lo ejecuta, recibe la información de los sensores y da órdenes a los actuadores. Los <mark>sensores</mark> son los «sentidos»: captan información del entorno, como la distancia a un objeto, la luz, el color del suelo, el sonido o si se ha pulsado un botón. Los <mark>actuadores</mark> son los «músculos»: los elementos que actúan sobre el entorno, como los motores que mueven las ruedas, los LED que se iluminan o el zumbador que pita. Y la <b>alimentación</b> es la fuente de energía, normalmente pilas o una batería recargable. Además, algunos robots tienen <b>comunicaciones</b> (Bluetooth, wifi, infrarrojos) para recibir programas u órdenes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un robot: los sensores envían información al controlador, que da órdenes a los actuadores; la batería alimenta todo y la estructura lo sostiene">${BG}
        ${cj(8, 60, 66, 40, "sensores", COL.verde, { size: 11 })}${cj(97, 60, 66, 40, "controlador", COL.azul, { size: 10.5 })}${cj(186, 60, 66, 40, "actuadores", COL.naranja, { size: 10.5 })}
        ${fl(74, 80, 95, 80, "var(--ink)", 2)}${fl(163, 80, 184, 80, "var(--ink)", 2)}
        ${t(41, 50, "sentidos", { size: 9, weight: 400, color: "var(--muted)" })}${t(130, 50, "cerebro", { size: 9, weight: 400, color: "var(--muted)" })}${t(219, 50, "músculos", { size: 9, weight: 400, color: "var(--muted)" })}
        ${cj(97, 124, 66, 28, "batería", COL.sol, { size: 10.5 })}<path d="M130 124 V 102" stroke="var(--sun)" stroke-width="2" stroke-dasharray="3 2"/>
        <rect x="4" y="16" width="252" height="146" rx="10" fill="none" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="6 4"/>${t(130, 32, "estructura (chasis)", { size: 9.5, color: "var(--muted)" })}
        ${t(52, 116, "percibir", { size: 9, color: COL.verde })}${t(208, 116, "actuar", { size: 9, color: COL.naranja })}</svg>`,
    },
    {
      html: `<h3>Sensores de un robot educativo</h3><p>Los robots educativos suelen llevar varios sensores. El <mark>sensor de ultrasonidos</mark> mide la <b>distancia</b> a los objetos que tiene delante: emite un sonido muy agudo que no oímos, espera a que rebote en un obstáculo y vuelva, y calcula la distancia a partir del tiempo que ha tardado, igual que hacen los murciélagos y los delfines. Parece un par de «ojos» redondos. El <mark>sensor de línea</mark> (o seguidor de línea) está debajo del robot y mira al suelo: emite luz infrarroja y mide cuánta se refleja; una superficie <b>blanca</b> refleja mucha luz, y una línea <b>negra</b> casi nada. Así, el robot sabe si está encima de la línea o fuera de ella. El <b>sensor de luz</b> mide la luz ambiente, y el <b>receptor de infrarrojos</b> recibe órdenes de un mando a distancia. Muchos robots tienen también <b>botones</b>, un <b>micrófono</b>, sensores de <b>color</b>, de <b>temperatura</b> o de <b>movimiento</b> (que detectan si se inclina o se agita).</p>${tabla(["Sensor", "Qué mide", "Para qué se usa"], [["Ultrasonidos", "distancia a un obstáculo", "esquivar objetos, aparcar"], ["Sensor de línea", "si el suelo es claro u oscuro", "seguir una línea negra"], ["Luz", "cantidad de luz", "buscar la luz, encender faros"], ["Receptor de infrarrojos", "órdenes de un mando", "control remoto"], ["Botón", "si se pulsa", "iniciar un programa"], ["Movimiento (acelerómetro)", "inclinación y sacudidas", "detectar golpes o caídas"]])}`,
      video: { id: "4yneo7gBOuo", titulo: "mBot de Makeblock: vistazo rápido", canal: "Honestips (Español)", vistas: 56082 },
    },
    {
      html: `<h3>Actuadores: motores, luces y sonido</h3><p>Los <mark>actuadores</mark> transforman las órdenes del controlador en acciones. Los más importantes son los <mark>motores</mark>. Los robots con ruedas suelen tener <b>dos motores</b>, uno para cada rueda (más una rueda loca o una bola que gira libre delante o detrás). Combinando la velocidad y el sentido de giro de cada motor, el robot se mueve en todas las direcciones: si las dos ruedas giran <b>hacia delante</b> a la misma velocidad, avanza en línea recta; si giran <b>hacia atrás</b>, retrocede; si la rueda izquierda gira hacia delante y la derecha hacia atrás, el robot <b>gira sobre sí mismo</b> hacia la derecha; y si una rueda va más rápida que la otra, traza una <b>curva</b>. Los <b>servomotores</b> son motores especiales que giran hasta un ángulo exacto (por ejemplo, 90°) y se usan para mover brazos, pinzas o cabezas. Otros actuadores son los <b>LED</b> (luces de colores para indicar estados), las <b>matrices de LED</b> (para mostrar caras, letras o dibujos) y el <b>zumbador</b> o altavoz (para emitir pitidos y melodías).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot de dos ruedas visto desde arriba: si las dos ruedas avanzan, va recto; si la izquierda avanza y la derecha retrocede, gira a la derecha">${BG}
        ${[[60, "recto", [1, 1], COL.verde], [190, "gira a la derecha", [1, -1], COL.naranja]].map(([x, s, [l, r], c]) => `
          <rect x="${x - 26}" y="52" width="52" height="64" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/>
          <rect x="${x - 36}" y="66" width="10" height="28" rx="3" fill="#475569"/><rect x="${x + 26}" y="66" width="10" height="28" rx="3" fill="#475569"/>
          <circle cx="${x}" cy="108" r="4" fill="#94a3b8"/><rect x="${x - 10}" y="56" width="20" height="8" rx="3" fill="${COL.verde}"/>
          ${fl(x - 31, l > 0 ? 70 : 90, x - 31, l > 0 ? 40 : 128, l > 0 ? "var(--leaf)" : "var(--red)", 2.4)}${fl(x + 31, r > 0 ? 70 : 90, x + 31, r > 0 ? 40 : 128, r > 0 ? "var(--leaf)" : "var(--red)", 2.4)}
          ${t(x, 152, s, { size: 10.5, color: c })}`).join("")}
        ${t(130, 24, "dos motores, uno por rueda", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Programar el robot por bloques</h3><p>Los robots educativos se programan con entornos de <b>bloques</b> muy parecidos a Scratch, como <b>mBlock</b> (para los robots mBot), MakeCode (para robots con micro:bit) o las aplicaciones propias de cada fabricante. Además de las categorías conocidas (eventos, control, operadores, variables), aparecen categorías específicas del robot: <b>movimiento</b> («avanzar a velocidad 50 % durante 1 segundo», «girar a la izquierda», «detener motores»), <b>luces</b> («encender LED en rojo»), <b>sonido</b> («tocar nota do durante 0,25 pulsos»), <b>pantalla</b> y <b>sensores</b> («distancia del sensor de ultrasonidos», «estado del sensor de línea»). Hay dos formas de trabajar: <b>en vivo</b>, con el robot conectado al ordenador por cable o Bluetooth, de modo que el ordenador le va dando las órdenes; o <b>cargando</b> el programa en la placa del robot, que después funciona solo, sin ordenador. Un primer programa podría ser: al pulsar el botón del robot, encender los LED en verde, avanzar 1 segundo, girar a la derecha 0,5 segundos, avanzar 1 segundo, pitar y encender los LED en rojo.</p>`,
    },
    {
      html: `<h3>Proyecto 1: el robot que esquiva obstáculos</h3><p>Uno de los primeros proyectos clásicos es un robot que avanza y <b>evita chocar</b>. Usa el <b>sensor de ultrasonidos</b> y una estructura <b>por siempre + si… si no</b>. El algoritmo es: <b>por siempre</b>: <b>si</b> la distancia medida es <b>menor que 15 cm</b> <b>entonces</b>: detenerse, encender los LED en rojo, retroceder un poco y girar (por ejemplo, a la derecha durante medio segundo); <b>si no</b>: encender los LED en verde y avanzar. Así, el robot recorre la habitación y, cada vez que encuentra una pared o un objeto, se aparta y busca otro camino. Al probarlo aparecen detalles que hay que ajustar con pruebas: la <b>distancia</b> límite (si es muy pequeña, choca; si es muy grande, gira demasiado pronto), la <b>velocidad</b> (si va muy rápido, no le da tiempo a frenar) y el <b>tiempo de giro</b>. Una mejora: girar a un lado al azar, con «número al azar entre 1 y 2», para que no se quede atascado en las esquinas. Es la misma idea que usan los robots aspiradores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama del robot que esquiva: por siempre, si la distancia es menor que 15 centímetros, retroceder y girar; si no, avanzar">${BG}
        ${cj(90, 10, 80, 24, "por siempre", COL.naranja, { size: 10 })}${fl(130, 34, 130, 44, "var(--ink)", 1.5)}
        <path d="M130 46 l 56 22 l -56 22 l -56 -22 Z" fill="var(--card)" stroke="${COL.sol}" stroke-width="2"/>${t(130, 72, "¿distancia < 15 cm?", { size: 9.5 })}
        ${fl(74, 68, 50, 68, "var(--ink)", 1.5)}<path d="M50 68 V 104" stroke="var(--ink)" stroke-width="1.5"/>${fl(50, 96, 50, 106, "var(--ink)", 1.5)}${t(62, 62, "sí", { size: 9.5, color: COL.verde })}
        ${fl(186, 68, 210, 68, "var(--ink)", 1.5)}<path d="M210 68 V 104" stroke="var(--ink)" stroke-width="1.5"/>${fl(210, 96, 210, 106, "var(--ink)", 1.5)}${t(198, 62, "no", { size: 9.5, color: COL.rojo })}
        ${cj(8, 106, 84, 40, "atrás y girar", COL.rojo, { size: 10.5 })}${cj(168, 106, 84, 40, "avanzar", COL.verde, { size: 10.5 })}
        <path d="M50 146 V 164 H 250 V 22 H 172" fill="none" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 3"/><path d="M210 146 V 164" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 3"/></svg>`,
      video: { id: "Xqu2ewjxzto", titulo: "Armado de un robot seguidor de línea básico", canal: "Rubén Margon", vistas: 167317 },
    },
    {
      html: `<h3>Proyecto 2: el robot que sigue una línea</h3><p>Otro proyecto clásico es el <mark>robot seguidor de línea</mark>, que recorre un circuito dibujado con una <b>línea negra</b> sobre un fondo blanco, como los robots que transportan materiales en algunas fábricas y hospitales siguiendo marcas en el suelo. Usa un <b>sensor de línea con dos detectores</b>, uno a la izquierda y otro a la derecha, separados más o menos lo que mide la línea de ancho. Hay cuatro casos posibles: si <b>los dos</b> detectores ven negro, el robot está centrado sobre la línea: <b>avanzar</b>. Si solo el <b>izquierdo</b> ve negro, la línea se está curvando hacia la izquierda: <b>girar a la izquierda</b>. Si solo el <b>derecho</b> ve negro: <b>girar a la derecha</b>. Y si <b>ninguno</b> ve negro, el robot se ha salido: <b>retroceder</b> o girar buscando la línea. El programa es un «por siempre» con varias condiciones. Las curvas cerradas y la velocidad son el gran reto: a más velocidad, más fácil es salirse. Con estos dos proyectos, el robot ya hace lo que define a cualquier robot: <b>percibir, decidir y actuar</b>, una y otra vez.</p>`,
    },
  ],
  figura: {
    titulo: "Mi primer robot en ocho ideas",
    svg: rejilla([
      ["Robot", "percibe, decide, actúa", COL.azul],
      ["Controlador", "el cerebro: placa", COL.morado],
      ["Sensores", "los sentidos", COL.verde],
      ["Actuadores", "los músculos", COL.naranja],
      ["Ultrasonidos", "mide distancias", COL.agua],
      ["Sensor de línea", "blanco o negro", COL.gris],
      ["Dos motores", "avanzar, girar, curvas", COL.rojo],
      ["Por siempre + si", "reaccionar sin parar", COL.sol],
    ], 4, 86, "Resumen: robot, controlador, sensores, actuadores, ultrasonidos, sensor de línea, motores y programa reactivo"),
  },
  video: { id: "05vdHuPkL1I", titulo: "Robot seguidor de línea (cómo funciona)", canal: "El profe García", vistas: 321955, megusta: 0, busqueda: "robot educativo seguidor de linea como funciona" },
  ejemplos: [
    { enunciado: "Clasifica como sensor o actuador: motor, sensor de ultrasonidos, LED, botón, zumbador, sensor de línea.",
      pasos: ["Captan información: ultrasonidos, botón, sensor de línea → sensores.", "Actúan sobre el entorno: motor, LED, zumbador → actuadores."],
      resultado: "Sensores: ultrasonidos, botón, línea. Actuadores: motor, LED, zumbador." },
    { enunciado: "¿Qué hace un robot de dos ruedas si la rueda izquierda gira hacia delante al 50 % y la derecha hacia delante al 20 %?",
      pasos: ["Las dos avanzan, así que el robot avanza.", "La izquierda va más rápida: el robot se desvía hacia el lado de la rueda lenta.", "Traza una curva hacia la derecha."],
      resultado: "Avanza trazando una curva hacia la derecha." },
    { enunciado: "En el seguidor de línea, el detector izquierdo ve negro y el derecho ve blanco. ¿Qué debe hacer el robot?",
      pasos: ["La línea queda a la izquierda del robot.", "Para volver a centrarse, debe girar hacia la izquierda."],
      resultado: "Girar a la izquierda." },
  ],
  errores: [
    "Llamar robot a cualquier máquina automática: debe percibir, decidir, actuar y ser reprogramable.",
    "Confundir sensores (perciben) con actuadores (actúan).",
    "Poner la condición del sensor fuera de un bucle «por siempre».",
    "Elegir una distancia de frenado demasiado pequeña o una velocidad excesiva.",
    "No comprobar la batería: con poca carga, los motores van más lentos y el robot se comporta distinto.",
  ],
  ejercicios: [
    { q: "¿Qué es un robot?", sol: "Una máquina programable que percibe su entorno con sensores, decide y actúa con cierta autonomía." },
    { q: "Escribe cinco tipos de robots según su uso.", sol: "Industriales, domésticos, médicos, de exploración y educativos." },
    { q: "Escribe las partes de un robot y su equivalente en un ser vivo.", sol: "Estructura (esqueleto), controlador (cerebro), sensores (sentidos), actuadores (músculos) y alimentación (energía)." },
    { q: "¿Cómo mide la distancia el sensor de ultrasonidos?", sol: "Emite un sonido, espera su eco y calcula la distancia a partir del tiempo." },
    { q: "¿Cómo distingue el sensor de línea el blanco del negro?", sol: "Por la luz infrarroja reflejada: el blanco refleja mucha y el negro casi nada." },
    { q: "Escribe tres actuadores de un robot educativo.", sol: "Motores, LED y zumbador." },
    { q: "¿Cómo gira un robot de dos ruedas sobre sí mismo?", sol: "Haciendo girar una rueda hacia delante y la otra hacia atrás." },
    { q: "Escribe el algoritmo del robot que esquiva obstáculos.", sol: "Por siempre: si distancia < 15 cm, retroceder y girar; si no, avanzar." },
    { q: "¿Qué hace el seguidor de línea si ninguno de los detectores ve la línea?", sol: "Se ha salido: retrocede o gira para buscarla." },
    { q: "Diferencia entre trabajar en vivo y cargar el programa en el robot.", sol: "En vivo, el ordenador da las órdenes conectado; cargado, el robot funciona solo." },
  ],
  quiz: [
    { q: "El «cerebro» del robot es el…", o: ["controlador", "motor", "chasis"], a: 0, e: "Controlador." },
    { q: "Los «sentidos» del robot son los…", o: ["sensores", "actuadores", "cables"], a: 0, e: "Sensores." },
    { q: "Un motor es un…", o: ["actuador", "sensor", "controlador"], a: 0, e: "Actuador." },
    { q: "Para medir distancias se usa el sensor de…", o: ["ultrasonidos", "línea", "temperatura"], a: 0, e: "Ultrasonidos." },
    { q: "Una línea negra refleja…", o: ["poca luz", "mucha luz", "sonido"], a: 0, e: "Poca luz." },
    { q: "La palabra «robot» la popularizó…", o: ["Karel Čapek", "Isaac Newton", "Ada Lovelace"], a: 0, e: "En 1920." },
    { q: "Si las dos ruedas avanzan igual, el robot…", o: ["va recto", "gira", "se para"], a: 0, e: "Recto." },
    { q: "Un motor que gira hasta un ángulo exacto es un…", o: ["servomotor", "zumbador", "LED"], a: 0, e: "Servomotor." },
    { q: "Un entorno de bloques para robots mBot es…", o: ["mBlock", "Word", "GIMP"], a: 0, e: "mBlock." },
    { q: "Un robot aspirador que esquiva muebles usa la estructura…", o: ["por siempre + si", "solo secuencia", "ninguna"], a: 0, e: "Percibe y decide sin parar." },
  ],
  examen: [
    { q: "Un microondas es más bien un…", o: ["automatismo", "robot", "sensor"], a: 0, e: "Programa fijo." },
    { q: "Si el detector derecho ve negro y el izquierdo blanco, el seguidor de línea debe…", o: ["girar a la derecha", "girar a la izquierda", "parar"], a: 0, e: "La línea está a la derecha." },
    { q: "Si el robot va muy rápido al esquivar, puede…", o: ["chocar antes de frenar", "volar", "ir más lento"], a: 0, e: "No le da tiempo a frenar." },
  ],
  feynman: ["Qué diferencia a un robot de una máquina automática", "Cómo se mueve y gira un robot de dos ruedas", "Cómo decide un robot seguidor de línea hacia dónde girar"],
  mapa: mapa("MI PRIMER ROBOT", "var(--eso)", [
    ["Partes", "estructura · controlador · batería", COL.azul],
    ["Sensores", "ultrasonidos · línea · luz", COL.verde],
    ["Actuadores", "motores · LED · zumbador", COL.naranja],
    ["Programas", "esquivar · seguir línea", COL.morado],
  ], 300),
  tarjetas: [
    ["Robot", "Máquina programable que percibe, decide y actúa."],
    ["Controlador", "Placa que ejecuta el programa: el cerebro."],
    ["Sensor", "Elemento que capta información del entorno."],
    ["Actuador", "Elemento que actúa: motor, LED, zumbador."],
    ["Sensor de ultrasonidos", "Mide distancias con el eco de un sonido."],
    ["Sensor de línea", "Distingue suelo claro y oscuro con luz infrarroja."],
    ["Servomotor", "Motor que gira hasta un ángulo exacto."],
    ["Seguidor de línea", "Robot que recorre un circuito marcado en el suelo."],
  ],
  familias: ["Buscad en casa y en la calle máquinas con sensores y actuadores.", "Dibujad juntos en un papel grande un circuito negro para un robot seguidor de línea.", "Ved un vídeo de los robots que exploran Marte y comentad qué sensores llevan."],
  profesores: {
    saberes: "Robótica educativa: concepto de robot, tipos, partes (estructura, controlador, sensores, actuadores, alimentación), sensores de ultrasonidos, línea, luz e infrarrojos, motores y servomotores, programación por bloques en vivo y cargada, proyectos de evitar obstáculos y seguidor de línea (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Robot que esquiva obstáculos en un recinto de cajas.", "Circuito de cinta aislante negra para el seguidor de línea.", "Si no hay robots: simulador en línea o «robot humano» con tarjetas de sensores."],
  },
  fuentes: [RD, wiki("Robot", "Robot"), wiki("Robótica", "Robótica"), { t: "mBlock (entorno de programación por bloques)", url: "https://mblock.cc/" }],
  revisado: REV,
};
