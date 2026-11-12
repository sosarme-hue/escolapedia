// Programación y robótica 2º ESO: sensores y motores. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Sensores y motores",
  minutos: 55,
  objetivos: ["Explicar qué es un sensor y distinguir sensores digitales y analógicos", "Conocer los sensores más usados en robótica y qué miden", "Distinguir motor de corriente continua, servomotor y motor paso a paso", "Programar comportamientos sencillos que relacionan un sensor con un actuador"],
  claves: ["sensor", "señal digital", "señal analógica", "pulsador", "LDR", "ultrasonidos", "infrarrojos", "actuador", "motor de corriente continua", "servomotor", "driver", "umbral"],
  pregunta: {
    texto: "Las farolas de muchas calles se encienden solas al anochecer, sin que nadie pulse un interruptor. ¿Cómo «saben» que se está haciendo de noche?",
    respuesta: "Llevan un <b>sensor de luz</b>, normalmente una fotorresistencia (LDR), cuya resistencia cambia con la cantidad de luz. Un pequeño circuito o programa compara esa medida con un <b>umbral</b>: si la luz baja de ese valor, enciende la lámpara (el actuador). Es exactamente lo que puedes programar con una placa y un LED: <b>si luz &lt; umbral, encender</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un sensor?</h3><p>Un <mark>sensor</mark> es un dispositivo que <b>detecta una magnitud física o química del entorno</b> (luz, distancia, temperatura, sonido, contacto, humedad…) y la <b>transforma en una señal eléctrica</b> que puede leer un controlador. Son los «sentidos» de los robots y de muchos aparatos: el móvil tiene sensores que detectan si lo giras, si lo acercas a la oreja o la luz que hay para ajustar el brillo de la pantalla; los coches los tienen para aparcar, para encender las luces o para activar el airbag. Desde el punto de vista del programa, un sensor es una <b>entrada</b>: aporta datos que el programa usa para decidir qué hacer. Cada sensor tiene un <b>rango</b> (los valores mínimo y máximo que puede medir) y una <b>precisión</b>. Muchos sensores fallan o dan valores raros a veces, por lo que conviene probarlos bien antes de usarlos en un robot.</p>`,
      video: { id: "KciHoz9QC-Y", titulo: "¡Qué voltaje! Actuadores y sensores", canal: "tecnokids. co", vistas: 62227 },
    },
    {
      html: `<h3>Señales digitales y analógicas</h3><p>Los sensores envían dos tipos de señales. Una <mark>señal digital</mark> solo puede tener <b>dos valores</b>: 1 o 0, verdadero o falso, encendido o apagado. Es lo que da un <b>pulsador</b> (pulsado o no pulsado), un final de carrera o un sensor de infrarrojos que solo indica si hay línea negra o no. En los programas por bloques, una señal digital se usa directamente como condición: «si ¿botón A pulsado? entonces…». Una <mark>señal analógica</mark> puede tomar <b>muchos valores</b> dentro de un rango, de forma continua: la cantidad de luz, la temperatura, el volumen del sonido o la posición de un potenciómetro. En una placa Arduino, una entrada analógica da un número entre 0 y 1023; en la micro:bit, el nivel de luz va de 0 a 255. Para tomar decisiones con una señal analógica se compara con un <mark>umbral</mark>: «si nivel de luz &lt; 50 entonces encender LED».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Señal digital, que salta entre 0 y 1, frente a señal analógica, que varía de forma continua y se compara con un umbral">${BG}
        ${t(16, 22, "digital", { size: 11, color: "var(--pen)", anchor: "start" })}
        <path d="M16 70 H 50 V 36 H 100 V 70 H 130 V 36 H 170 V 70 H 234" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${t(250, 40, "1", { size: 9, anchor: "end" })}${t(250, 74, "0", { size: 9, anchor: "end" })}
        ${t(16, 100, "analógica", { size: 11, color: "var(--red)", anchor: "start" })}
        <path d="M16 160 C 50 160, 60 112, 100 116 S 150 160, 180 140 S 220 108, 244 116" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M16 136 H 244" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="5 4"/>${t(244, 132, "umbral", { size: 9, color: "var(--leaf)", anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Sensores más usados en robótica</h3><p>En robótica educativa se usan sobre todo estos sensores. El <b>pulsador</b> detecta el contacto: sirve para botones de inicio y para detectar choques (en los robots aspiradores, por ejemplo). La <mark>LDR</mark> o fotorresistencia es una resistencia que disminuye cuando recibe más luz; con ella se mide la luminosidad. El <mark>sensor de ultrasonidos</mark> emite un sonido muy agudo, que no oímos, y mide cuánto tarda el eco en volver; como el sonido va a unos 340 m/s, calcula la <b>distancia</b> a un obstáculo, igual que los murciélagos o los sensores de aparcamiento. El <mark>sensor de infrarrojos</mark> emite luz infrarroja y detecta cuánta se refleja: una superficie blanca refleja mucha y una negra casi nada, por eso se usa para <b>seguir líneas</b> o detectar el borde de una mesa. También hay sensores de <b>temperatura</b>, <b>sonido</b> (micrófono), <b>humedad</b>, <b>movimiento</b> (PIR, el de las luces de los portales), y acelerómetros y brújulas, como los de la micro:bit.</p>${tabla(["Sensor", "Mide", "Señal", "Ejemplo de uso"], [["Pulsador", "contacto", "digital", "botón, choque"], ["LDR", "luz", "analógica", "farola automática"], ["Ultrasonidos", "distancia", "analógica", "evitar obstáculos"], ["Infrarrojos", "reflejo (blanco/negro)", "digital o analógica", "seguir una línea"], ["Temperatura", "temperatura", "analógica", "ventilador automático"], ["PIR", "movimiento de personas", "digital", "luz del portal, alarma"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sensor de ultrasonidos: emite ondas que rebotan en un obstáculo; midiendo el tiempo del eco se calcula la distancia">${BG}
        <rect x="16" y="64" width="40" height="40" rx="4" fill="var(--pen)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="36" cy="76" r="7" fill="#c9ccd3" stroke="var(--ink)"/><circle cx="36" cy="94" r="7" fill="#c9ccd3" stroke="var(--ink)"/>
        ${[0, 1, 2].map((i) => `<path d="M${70 + i * 18} 66 q 8 10 0 20" fill="none" stroke="var(--red)" stroke-width="2"/>`).join("")}${fl(70, 60, 200, 60, "var(--red)", 1.5)}
        ${[0, 1, 2].map((i) => `<path d="M${180 - i * 18} 92 q -8 10 0 20" fill="none" stroke="var(--leaf)" stroke-width="2"/>`).join("")}${fl(200, 118, 70, 118, "var(--leaf)", 1.5)}
        <rect x="210" y="40" width="30" height="94" fill="var(--muted)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>${t(225, 150, "obstáculo", { size: 9.5 })}
        ${t(130, 50, "emite", { size: 9.5, color: "var(--red)" })}${t(130, 134, "eco", { size: 9.5, color: "var(--leaf)" })}
        ${t(110, 168, "distancia = 340 · tiempo / 2", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Los actuadores</h3><p>Los <mark>actuadores</mark> son los dispositivos que <b>convierten una señal eléctrica en una acción</b>: movimiento, luz, sonido o calor. Son las <b>salidas</b> del controlador, los «músculos» y la «voz» del robot. Los más sencillos son los <b>LED</b>, que dan luz y sirven para indicar estados (encendido, error, listo); los <b>zumbadores</b> y altavoces, que emiten pitidos o melodías; y las <b>pantallas</b>, como la matriz de 5 × 5 LED de la micro:bit, que muestra iconos y textos. Pero los actuadores más importantes en robótica son los <b>motores</b>, porque permiten que el robot se mueva y actúe sobre su entorno: hacer girar las ruedas, levantar un brazo, abrir una pinza o mover una cámara. También existen actuadores de otros tipos, como los <b>relés</b> (interruptores controlados eléctricamente que encienden aparatos potentes), las bombas de agua para un sistema de riego automático o los electroimanes.</p>`,
    },
    {
      html: `<h3>El motor de corriente continua</h3><p>El <mark>motor de corriente continua</mark> (motor CC o DC) es el motor más sencillo y común: el de los coches de juguete, los ventiladores pequeños o las ruedas de muchos robots. Transforma la energía eléctrica en <b>movimiento de giro continuo</b> gracias a imanes y bobinas de cobre. Cuanto mayor es el voltaje, más rápido gira; y si se <b>invierte la polaridad</b> (se cambian los cables + y −), gira en sentido contrario. Como suele girar muy deprisa y con poca fuerza, se le acopla una <b>reductora</b>, un conjunto de engranajes que reduce la velocidad y aumenta la fuerza, como viste en los mecanismos de Tecnología. Un controlador como Arduino no puede dar suficiente corriente para mover un motor directamente; por eso se usa un circuito intermedio llamado <mark>driver</mark> o controlador de motores (por ejemplo, el L298N), que recibe las órdenes de la placa y da la energía de las pilas al motor. Con dos motores, uno en cada rueda, el robot avanza, retrocede y gira.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot con dos motores: si las dos ruedas giran hacia delante avanza, si una gira más o en sentido contrario el robot gira">${BG}
        ${[[50, "avanzar", "↑", "↑"], [130, "girar a la derecha", "↑", "↓"], [210, "retroceder", "↓", "↓"]].map(([x, s, a, b]) => `<rect x="${x - 22}" y="50" width="44" height="54" rx="6" fill="#c9ccd3" stroke="var(--ink)" stroke-width="1.5"/><rect x="${x - 32}" y="58" width="10" height="38" rx="3" fill="var(--ink)"/><rect x="${x + 22}" y="58" width="10" height="38" rx="3" fill="var(--ink)"/>${t(x - 27, 42, a, { size: 14, color: "var(--red)" })}${t(x + 27, 42, b, { size: 14, color: "var(--red)" })}${t(x, 124, s, { size: 9, weight: 400 })}`).join("")}
        ${t(130, 160, "izquierda · derecha: sentido de cada motor", { size: 9.5, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El servomotor y el motor paso a paso</h3><p>El <mark>servomotor</mark> (o servo) es un motor que no gira continuamente, sino que se coloca en un <b>ángulo exacto</b>, normalmente entre 0° y 180°, y se queda en esa posición con fuerza. Lleva dentro un motor pequeño, una reductora y un circuito que controla la posición. Se programa indicando el ángulo: «fijar servo a 90 grados». Es ideal para <b>brazos robóticos, pinzas, barreras, timones o para girar un sensor</b> y mirar a los lados. Tiene tres cables: dos de alimentación (rojo y negro o marrón) y uno de señal (amarillo o naranja) que va a la placa. También hay servos de <b>rotación continua</b>, que se usan como motores de ruedas. El <mark>motor paso a paso</mark> gira en pequeños pasos iguales (por ejemplo, 200 pasos por vuelta) y permite controlar con mucha precisión cuánto gira. Se usa en las <b>impresoras 3D</b>, las impresoras de papel, las máquinas de control numérico y los escáneres.</p>${tabla(["Motor", "Cómo gira", "Se usa en"], [["Corriente continua", "giro continuo, velocidad según voltaje", "ruedas, ventiladores"], ["Servomotor", "a un ángulo exacto (0°–180°)", "brazos, pinzas, barreras"], ["Paso a paso", "en pasos pequeños y precisos", "impresoras 3D, CNC"]])}`,
      video: { id: "QbgTl6VSA9Y", titulo: "Cómo controlar un servo con un Arduino", canal: "The Engineering Mindset", vistas: 443876 },
    },
    {
      html: `<h3>Programar sensores y motores</h3><p>Lo interesante de la robótica es <b>relacionar sensores y actuadores</b> mediante un programa. La estructura es casi siempre la misma: un <b>bucle «por siempre»</b> que lee el sensor y, con un <b>condicional</b>, decide qué hacer con los actuadores. Algunos ejemplos típicos: una <b>farola automática</b> (si nivel de luz &lt; 50 entonces encender LED, si no apagar LED); un <b>robot que evita obstáculos</b> (si distancia &lt; 20 cm entonces retroceder y girar, si no avanzar); un <b>robot sigue-líneas</b> (si el sensor izquierdo ve negro, girar a la izquierda; si es el derecho, a la derecha; si ninguno, recto); una <b>barrera de aparcamiento</b> (al pulsar el botón, servo a 90°, esperar 3 segundos, servo a 0°); o un <b>termómetro con alarma</b> (si temperatura &gt; 30 entonces sonar el zumbador). Antes de programar, conviene <b>medir los valores reales</b> del sensor mostrándolos en la pantalla para elegir bien el umbral.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa por bloques de un robot que evita obstáculos: por siempre, si distancia menor que 20 entonces retroceder y girar, si no avanzar">${BG}
        <path d="M10 8 h 240 v 22 h -216 v 128 h 216 v 14 h -240 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(18, 23, "por siempre", { size: 10, color: "#fff", anchor: "start" })}
        <path d="M34 34 h 210 v 22 h -186 v 38 h 186 v 20 h -186 v 22 h 186 v 14 h -210 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(40, 49, "si", { size: 10, color: "#fff", anchor: "start" })}
        <path d="M60 38 h 104 l 7 7 l -7 7 h -104 l -7 -7 Z" fill="${SC.ope}" stroke="#fff" stroke-opacity=".6"/>${t(112, 49, "distancia < 20 cm", { size: 9, color: "#fff" })}
        ${bl(58, 58, 140, SC.mov, "retroceder 0,5 s", 16)}${bl(58, 76, 140, SC.mov, "girar a la derecha", 16)}${t(40, 108, "si no", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(58, 116, 120, SC.mov, "avanzar", 16)}</svg>`,
      video: { id: "V0jOKsjeBWQ", titulo: "Sensores: ejemplos con Arduino (gas, infrarrojos, luz, distancia, color)", canal: "ELECTRONOOBS en Español", vistas: 569713 },
    },
    {
      html: `<h3>Montaje, alimentación y seguridad</h3><p>Al montar un robot hay que tener en cuenta algunas normas. Los sensores y actuadores se conectan a los <b>pines</b> de la placa: los sensores a pines de entrada (digitales o analógicos) y los actuadores a pines de salida. Hay que respetar la <b>polaridad</b> (+ y −) y el <b>voltaje</b> de cada componente; por ejemplo, un LED necesita una <b>resistencia</b> en serie para no fundirse, como viste con la ley de Ohm. Los motores consumen mucha corriente, por lo que conviene <b>alimentarlos con pilas o baterías</b> a través de un driver, y no directamente desde el USB del ordenador. Antes de conectar la alimentación, revisa todas las conexiones; si algo se calienta, huele a quemado o el ordenador deja de reconocer la placa, desconecta enseguida. Por último, documenta tu montaje con un <b>esquema</b> y una tabla de conexiones (qué componente va a qué pin): te ahorrará mucho tiempo cuando algo falle.</p>`,
    },
  ],
  figura: {
    titulo: "De la entrada a la salida",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Los sensores, como pulsador, luz, ultrasonidos e infrarrojos, envían datos al controlador, que ejecuta el programa y da órdenes a los actuadores: LED, zumbador, motor y servomotor">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="170" height="190" rx="14" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.5"/>${t(105, 50, "SENSORES", { size: 15, color: "var(--pen)", font: D })}${t(105, 66, "(entradas)", { size: 11, weight: 400 })}
      ${["pulsador", "luz (LDR)", "ultrasonidos", "infrarrojos"].map((s, i) => t(105, 100 + i * 28, s, { size: 13 })).join("")}
      <rect x="235" y="60" width="170" height="110" rx="14" fill="var(--red)" fill-opacity=".1" stroke="var(--red)" stroke-width="2.5"/>${t(320, 96, "CONTROLADOR", { size: 15, color: "var(--red)", font: D })}${t(320, 122, "programa:", { size: 12, weight: 400 })}${t(320, 144, "si… entonces…", { size: 13 })}
      <rect x="450" y="20" width="170" height="190" rx="14" fill="var(--leaf)" fill-opacity=".1" stroke="var(--leaf)" stroke-width="2.5"/>${t(535, 50, "ACTUADORES", { size: 15, color: "var(--leaf)", font: D })}${t(535, 66, "(salidas)", { size: 11, weight: 400 })}
      ${["LED", "zumbador", "motor CC", "servomotor"].map((s, i) => t(535, 100 + i * 28, s, { size: 13 })).join("")}
      ${fl(192, 115, 232, 115, "var(--ink)", 2.5)}${fl(407, 115, 447, 115, "var(--ink)", 2.5)}
    </svg>`,
  },
  video: { id: "3TPVsqlXkCs", titulo: "¿Qué son los sensores? Ejemplos de sensores", canal: "RONIN Educación", vistas: 101063, megusta: 1582, busqueda: "sensores y actuadores robótica" },
  ejemplos: [
    { enunciado: "Programa una luz nocturna con un sensor de luz y un LED.",
      pasos: ["Mide los valores del sensor con luz y a oscuras (por ejemplo, 180 y 20).", "Elige un umbral intermedio: 60.", "Por siempre: si nivel de luz < 60 entonces encender LED, si no apagar LED."],
      resultado: "Farola automática." },
    { enunciado: "Un sensor de ultrasonidos tarda 0,002 s en recibir el eco. ¿A qué distancia está el obstáculo?",
      pasos: ["El sonido va y vuelve: recorre 340 · 0,002 = 0,68 m.", "La distancia es la mitad: 0,68 / 2.", "0,34 m = 34 cm."],
      resultado: "34 cm." },
    { enunciado: "Barrera de aparcamiento con un pulsador y un servo.",
      pasos: ["Al empezar: servo a 0° (barrera bajada).", "Por siempre: si pulsador pulsado entonces servo a 90°, esperar 3 s, servo a 0°.", "Opcional: LED verde mientras está subida."],
      resultado: "Sensor digital + servomotor." },
  ],
  errores: [
    "Confundir sensores (entradas) con actuadores (salidas).",
    "Elegir el umbral sin medir antes los valores reales del sensor.",
    "Conectar un motor directamente a la placa sin driver.",
    "Conectar un LED sin resistencia: se funde.",
    "Pensar que un servo gira sin parar: va a un ángulo concreto (salvo los de rotación continua).",
  ],
  ejercicios: [
    { q: "Define sensor y pon tres ejemplos de sensores del móvil.", sol: "Dispositivo que detecta una magnitud y la convierte en señal eléctrica: de luz, de proximidad, acelerómetro." },
    { q: "Diferencia una señal digital de una analógica con un ejemplo.", sol: "Digital: dos valores (pulsador). Analógica: muchos valores (LDR)." },
    { q: "¿Qué es un umbral y para qué se usa?", sol: "Un valor de referencia con el que se compara una señal analógica para tomar decisiones." },
    { q: "¿Cómo mide la distancia un sensor de ultrasonidos?", sol: "Emite un sonido y mide el tiempo del eco: distancia = 340 · tiempo / 2." },
    { q: "¿Por qué un sensor de infrarrojos distingue el blanco del negro?", sol: "Porque el blanco refleja mucha luz infrarroja y el negro casi nada." },
    { q: "Nombra cuatro actuadores.", sol: "LED, zumbador, motor, servomotor (o pantalla, relé)." },
    { q: "¿Cómo se cambia el sentido de giro de un motor de corriente continua?", sol: "Invirtiendo la polaridad (cambiando + y −)." },
    { q: "¿Para qué sirve un driver de motores?", sol: "Para dar a los motores la corriente que la placa no puede dar, siguiendo sus órdenes." },
    { q: "Diferencia servomotor y motor paso a paso.", sol: "El servo va a un ángulo exacto (0–180°); el paso a paso gira en pasos precisos, como en las impresoras 3D." },
    { q: "Escribe el programa de un robot que evita obstáculos.", sol: "Por siempre: si distancia < 20 cm entonces retroceder y girar, si no avanzar." },
  ],
  quiz: [
    { q: "Un sensor es una…", o: ["entrada", "salida", "batería"], a: 0, e: "Da información." },
    { q: "Un pulsador da una señal…", o: ["digital", "analógica", "de sonido"], a: 0, e: "Dos valores." },
    { q: "La LDR mide…", o: ["luz", "distancia", "temperatura"], a: 0, e: "Fotorresistencia." },
    { q: "El sensor de aparcamiento usa…", o: ["ultrasonidos", "LDR", "pulsadores"], a: 0, e: "Como los murciélagos." },
    { q: "Para seguir una línea negra se usan sensores de…", o: ["infrarrojos", "temperatura", "humedad"], a: 0, e: "Reflexión." },
    { q: "Un LED es un…", o: ["sensor", "actuador", "controlador"], a: 1, e: "Salida de luz." },
    { q: "Para girar a un ángulo exacto se usa un…", o: ["servomotor", "motor CC", "zumbador"], a: 0, e: "Servo." },
    { q: "Las impresoras 3D usan motores…", o: ["paso a paso", "de gasolina", "servos de juguete"], a: 0, e: "Paso a paso." },
    { q: "Si cambias + y − de un motor CC…", o: ["gira al revés", "se para siempre", "va más rápido"], a: 0, e: "Invierte el sentido." },
    { q: "Para comparar una señal analógica se usa un…", o: ["umbral", "driver", "clon"], a: 0, e: "Umbral." },
  ],
  examen: [
    { q: "Si el eco tarda 0,001 s, el obstáculo está a…", o: ["17 cm", "34 cm", "3,4 m"], a: 0, e: "340 · 0,001 / 2 = 0,17 m." },
    { q: "El robot gira a la derecha si…", o: ["la rueda izquierda avanza y la derecha retrocede", "las dos avanzan", "las dos se paran"], a: 0, e: "Giro sobre sí mismo." },
    { q: "Un relé sirve para…", o: ["encender aparatos potentes con una señal pequeña", "medir luz", "programar"], a: 0, e: "Interruptor eléctrico." },
  ],
  feynman: ["Qué diferencia hay entre señal digital y analógica", "Cómo mide la distancia un sensor de ultrasonidos", "Cuándo usarías un motor de corriente continua y cuándo un servomotor"],
  mapa: mapa("SENSORES Y MOTORES", "var(--eso)", [
    ["Señales", "digital · analógica · umbral", "#b8860b"],
    ["Sensores", "pulsador · LDR · ultrasonidos · IR", "var(--pen)"],
    ["Motores", "CC · servo · paso a paso", "var(--leaf)"],
    ["Programa", "por siempre + si… entonces", "var(--red)"],
  ], 300),
  tarjetas: [
    ["Sensor", "Convierte una magnitud del entorno en señal eléctrica."],
    ["Señal digital", "Solo dos valores: 0 o 1."],
    ["Señal analógica", "Muchos valores en un rango."],
    ["Umbral", "Valor de referencia para decidir."],
    ["Ultrasonidos", "Mide distancia con el eco: 340 · t / 2."],
    ["Actuador", "Convierte la señal en acción: motor, LED."],
    ["Servomotor", "Va a un ángulo exacto entre 0° y 180°."],
    ["Driver", "Circuito que da potencia a los motores."],
  ],
  familias: ["Buscad en casa y en la calle aparatos con sensores (farolas, puertas, grifos automáticos).", "Mirad juntos qué sensores tiene vuestro móvil en sus ajustes o con una app.", "Pensad un invento casero con un sensor y un actuador."],
  profesores: {
    saberes: "Robótica: sensores digitales y analógicos, tipos de sensores, actuadores, motores de corriente continua, servomotores y paso a paso, drivers, programación de sistemas sensor–actuador con placas y montaje seguro (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Lectura y gráfica de valores de un sensor de luz con la micro:bit.", "Farola automática con LDR y LED en Arduino.", "Barrera de aparcamiento con pulsador y servomotor."],
  },
  fuentes: [RD, wiki("Sensor", "Sensor"), wiki("Servomotor", "Servomotor")],
  revisado: REV,
};
