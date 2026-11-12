// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Robótica y control",
  minutos: 60,
  objetivos: ["Distinguir sistemas de control en lazo abierto y en lazo cerrado", "Identificar las partes de un robot: sensores, controlador y actuadores", "Conocer las placas programables como Arduino y micro:bit y sus entradas y salidas", "Programar respuestas sencillas de un robot a partir de la información de sus sensores"],
  claves: ["sistema de control", "lazo cerrado", "realimentación", "sensor", "actuador", "microcontrolador", "Arduino", "robot"],
  pregunta: {
    texto: "Un robot aspirador limpia toda la casa sin caerse por las escaleras ni quedarse atascado. ¿Cómo «sabe» lo que tiene alrededor?",
    respuesta: "Gracias a sus <mark>sensores</mark>: de choque, de infrarrojos que detectan el vacío del escalón, de distancia y de giro de las ruedas. Su <b>microcontrolador</b> lee continuamente esos sensores y, según un <b>programa</b>, decide cómo mover los <b>actuadores</b>: los motores de las ruedas y de los cepillos. Es un sistema de control en <b>lazo cerrado</b>.",
  },
  bloques: [
    {
      html: `<h3>Sistemas de control</h3><p>Un <mark>sistema de control</mark> es un conjunto de elementos que gobierna el funcionamiento de una máquina o proceso para conseguir un resultado: que la temperatura de una habitación sea 21 °C, que un semáforo cambie de color o que un ascensor pare en el piso correcto. Todo sistema de control tiene una <b>entrada</b> (la orden o la información que recibe), un <b>proceso</b> o controlador (que decide qué hacer) y una <b>salida</b> (la acción que realiza). Antiguamente se controlaban con mecanismos o circuitos eléctricos; hoy la mayoría están <b>automatizados</b> con circuitos electrónicos y <b>microcontroladores programables</b>.</p>`,
    },
    {
      html: `<h3>Lazo abierto y lazo cerrado</h3><p>En un sistema de <mark>lazo abierto</mark>, la salida <b>no influye</b> en el control: el sistema actúa según la orden recibida sin comprobar el resultado. Un tostador funciona el tiempo marcado, esté el pan tostado o no; una lavadora sigue su programa aunque la ropa ya esté limpia. Son sencillos y baratos, pero no corrigen errores. En un sistema de <mark>lazo cerrado</mark>, un <b>sensor</b> mide la salida y envía esa información al controlador, que la compara con el valor deseado y corrige la acción. Esta vuelta de la información se llama <b>realimentación</b>. El termostato de la calefacción mide la temperatura y enciende o apaga la caldera; el control de crucero de un coche mantiene la velocidad aunque haya cuestas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lazo cerrado: la consigna entra al controlador, este mueve el actuador, el sensor mide la salida y la realimentación vuelve al controlador">${BG}
        ${caja(14, 50, 64, 34, "control", "var(--pen)", { size: 10 })}${caja(100, 50, 64, 34, "actuador", "var(--red)", { size: 10 })}${caja(100, 112, 64, 34, "sensor", "var(--leaf)", { size: 10 })}
        ${fl(78, 67, 98, 67, "var(--ink)", 2)}${fl(164, 67, 244, 67, "var(--ink)", 2)}${t(206, 58, "salida", { size: 10 })}
        <path d="M206 67 V 129 H 168" stroke="var(--leaf)" stroke-width="2" fill="none"/>${fl(180, 129, 166, 129, "var(--leaf)", 2)}
        <path d="M100 129 H 46 V 88" stroke="var(--leaf)" stroke-width="2" fill="none"/>${fl(46, 100, 46, 86, "var(--leaf)", 2)}
        ${t(130, 166, "realimentación", { size: 11, color: "var(--leaf)" })}${t(46, 36, "consigna", { size: 10, color: "var(--muted)" })}${fl(46, 40, 46, 48, "var(--muted)", 1.5)}</svg>`,
    },
    {
      html: `<h3>¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una máquina <b>programable</b> capaz de <b>percibir</b> su entorno mediante sensores, <b>tomar decisiones</b> según un programa y <b>actuar</b> sobre el mundo físico, moviéndose o manipulando objetos, con cierta autonomía. La palabra procede del checo <i>robota</i>, «trabajo forzado», y la usó por primera vez el escritor Karel Čapek en 1920. Hay robots <b>industriales</b> (brazos que sueldan y pintan coches), <b>móviles</b> (aspiradores, vehículos de exploración en Marte, drones), <b>de servicio</b> (en hospitales, almacenes o restaurantes), <b>humanoides</b> y <b>educativos</b>. Un robot tiene tres partes esenciales: <b>sensores</b>, <b>controlador</b> y <b>actuadores</b>, además de una estructura y una fuente de energía.</p>`,
    },
    {
      html: `<h3>Los sensores</h3><p>Los <mark>sensores</mark> son los «sentidos» del robot: detectan una magnitud física y la convierten en una <b>señal eléctrica</b>. Pueden ser <b>digitales</b>, que solo indican sí o no (un pulsador o un final de carrera que detecta un choque), o <b>analógicos</b>, que dan un valor dentro de un intervalo (la cantidad de luz o la temperatura).</p>${tabla(["Sensor", "Qué detecta", "Ejemplo de uso"], [["Pulsador / final de carrera", "contacto, choque", "parachoques del robot"], ["LDR", "cantidad de luz", "seguir una linterna"], ["Infrarrojos (IR)", "línea negra o blanca, obstáculos cercanos", "robot sigue-líneas"], ["Ultrasonidos", "distancia a un objeto", "evitar obstáculos"], ["Temperatura", "calor", "termostato"], ["Acelerómetro", "inclinación y movimiento", "móvil, micro:bit"]])}`,
    },
    {
      html: `<h3>Los actuadores</h3><p>Los <mark>actuadores</mark> son los elementos que realizan la <b>acción</b>: convierten la señal eléctrica que les envía el controlador en movimiento, luz, sonido o calor. Los más comunes en robótica son los <b>motores de corriente continua</b>, que giran sin parar mientras reciben corriente y cambian de sentido al invertir la polaridad (ruedas); los <b>servomotores</b>, que giran hasta un <b>ángulo exacto</b>, normalmente entre 0° y 180° (brazos, barreras, pinzas); y los <b>motores paso a paso</b>, que giran en pasos muy precisos (impresoras 3D). Otros actuadores son los <b>LED</b>, los <b>zumbadores</b>, las <b>pantallas</b>, los <b>relés</b> y las <b>electroválvulas</b>. Como los motores necesitan más corriente de la que da un microcontrolador, se conectan a través de una placa de control de motores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot móvil esquemático con sensor de ultrasonidos delante, placa controladora en el centro y dos ruedas con motores">${BG}
        <rect x="60" y="56" width="140" height="70" rx="12" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="104" y="72" width="52" height="36" rx="3" fill="#1f7a6c" stroke="var(--ink)"/>${t(130, 94, "placa", { size: 9, color: "#fff" })}
        <circle cx="210" cy="78" r="9" fill="#ccc" stroke="var(--ink)" stroke-width="2"/><circle cx="210" cy="104" r="9" fill="#ccc" stroke="var(--ink)" stroke-width="2"/>
        <rect x="74" y="40" width="34" height="14" rx="3" fill="var(--ink)"/><rect x="74" y="128" width="34" height="14" rx="3" fill="var(--ink)"/>
        ${t(230, 60, "sensor", { size: 10, color: "var(--leaf)" })}${t(91, 30, "motor + rueda", { size: 10, color: "var(--red)" })}${t(130, 160, "controlador", { size: 10, color: "var(--pen)" })}${fl(130, 150, 130, 112, "var(--pen)", 1.5)}</svg>`,
    },
    {
      html: `<h3>El controlador: placas programables</h3><p>El cerebro del robot es un <mark>microcontrolador</mark>: un pequeño ordenador en un chip, con procesador, memoria y patillas de entrada y salida. Para usarlo fácilmente se montan en <b>placas programables</b>. <b>Arduino</b> es la más conocida: una placa de <b>hardware libre</b> creada en Italia en 2005, con <b>pines digitales</b> (0 a 13), que pueden ser entradas o salidas de 0 o 5 V, y <b>pines analógicos</b> (A0 a A5), que leen valores entre 0 y 1023. La <b>micro:bit</b>, creada por la BBC, incluye ya una matriz de 25 LED, botones, acelerómetro, brújula y radio. Otras son ESP32, Raspberry Pi Pico o las placas de robots educativos. Se programan desde el ordenador por USB, con bloques o con código.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Placa tipo Arduino con pines digitales arriba, pines analógicos y de alimentación abajo, conector USB y microcontrolador">${BG}
        <rect x="30" y="40" width="200" height="110" rx="8" fill="#1f7a6c" stroke="var(--ink)" stroke-width="2"/>
        <rect x="18" y="62" width="30" height="24" fill="#bbb" stroke="var(--ink)"/>${t(54, 78, "USB", { size: 9, color: "#fff", anchor: "start" })}
        <rect x="104" y="80" width="80" height="26" rx="2" fill="var(--ink)"/>${t(144, 97, "micro", { size: 9, color: "#fff" })}
        <rect x="80" y="46" width="140" height="10" fill="var(--ink)"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${83 + i * 10}" y="48" width="4" height="6" fill="#ddd"/>`).join("")}
        <rect x="80" y="134" width="140" height="10" fill="var(--ink)"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${83 + i * 10}" y="136" width="4" height="6" fill="#ddd"/>`).join("")}
        ${t(150, 30, "pines digitales 0-13", { size: 10, color: "var(--pen)" })}${t(150, 168, "alimentación · analógicos A0-A5", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "Zs9MZosVuqo", titulo: "ARDUINO: QUÉ ES, CÓMO FUNCIONA y PARA QUÉ se puede UTILIZAR", canal: "Xataka", vistas: 824776 },
    },
    {
      html: `<h3>Entradas y salidas</h3><p>Programar un robot consiste en <b>leer las entradas</b> (sensores), <b>decidir</b> con estructuras de control y <b>activar las salidas</b> (actuadores), una y otra vez dentro de un bucle. Las <b>entradas digitales</b> leen 0 o 1, por ejemplo si un pulsador está pulsado. Las <b>entradas analógicas</b> leen un número, por ejemplo la luz que recibe una LDR (0 a 1023 en Arduino). Las <b>salidas digitales</b> encienden o apagan un LED o un zumbador. Las <b>salidas PWM</b> envían pulsos rápidos que simulan valores intermedios, para regular el brillo de un LED o la velocidad de un motor. Con programación por bloques (Arduinoblocks, mBlock, MakeCode) se hace con piezas como «leer pin digital 2» o «escribir pin 13 en ALTO».</p>`,
    },
    {
      html: `<h3>Programar respuestas</h3><p>Algunos programas típicos de robots educativos son estos. <b>Semáforo</b>: encender y apagar tres LED en secuencia con esperas. <b>Luz automática</b>: si la luz medida por la LDR es menor que un umbral, encender un LED; si no, apagarlo. <b>Robot que evita obstáculos</b>: medir la distancia con el sensor de ultrasonidos; si es menor de 20 cm, parar, retroceder y girar; si no, avanzar. <b>Sigue-líneas</b>: dos sensores de infrarrojos miran el suelo; si el izquierdo detecta la línea negra, girar a la izquierda; si es el derecho, a la derecha; si ninguno, seguir recto. Todos usan un bucle <b>por siempre</b> con <b>condicionales</b> que comparan el valor de los sensores con un <b>umbral</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa del robot que evita obstáculos: por siempre, si distancia menor que 20 entonces girar, si no avanzar">${BG}
        <path d="M20 22 H 150 v 22 H 36 v 104 H 150 v 14 H 20 Z" fill="#e0a000" stroke="rgba(0,0,0,.25)"/>${t(28, 37, "por siempre", { size: 10, color: "#fff", anchor: "start" })}
        <path d="M36 46 H 240 v 22 H 52 v 24 H 240 v 20 H 52 v 20 H 240 v 12 H 36 Z" fill="#c88a00" stroke="rgba(0,0,0,.25)"/>${t(44, 61, "si distancia < 20 cm", { size: 10, color: "#fff", anchor: "start" })}${t(44, 107, "si no", { size: 10, color: "#fff", anchor: "start" })}
        <rect x="52" y="70" width="170" height="20" fill="#4c6fd6"/>${t(60, 84, "parar, retroceder, girar", { size: 10, color: "#fff", anchor: "start" })}
        <rect x="52" y="114" width="170" height="18" fill="#4c6fd6"/>${t(60, 127, "avanzar", { size: 10, color: "#fff", anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>Automatización en la industria y en casa</h3><p>La <mark>automatización</mark> consiste en que las máquinas realicen tareas sin intervención humana directa. En la <b>industria</b>, los robots ensamblan coches, empaquetan productos y trabajan sin descanso con gran precisión, en tareas peligrosas o repetitivas; se controlan con autómatas programables (PLC). En la <b>domótica</b>, la casa se automatiza: persianas que bajan con el sol, luces que se encienden al detectar movimiento, calefacción que se programa desde el móvil o alarmas. Con el <b>internet de las cosas (IoT)</b>, los objetos se conectan a la red y se comunican entre sí. Los coches autónomos, los drones de reparto y los robots quirúrgicos son ejemplos de robótica avanzada.</p>`,
    },
    {
      html: `<h3>Robótica, inteligencia artificial y sociedad</h3><p>La <b>inteligencia artificial</b> permite a algunos robots <b>aprender</b> de los datos: reconocer caras y objetos con cámaras, entender la voz o mejorar su forma de andar a base de práctica. La robótica aporta enormes ventajas: más seguridad en trabajos peligrosos, más precisión en cirugía, ayuda a personas mayores o con discapacidad y exploración de lugares inaccesibles. Pero también plantea <b>retos</b>: la sustitución de algunos empleos, que exige nuevas formaciones; la responsabilidad cuando un sistema autónomo comete un error; la privacidad de los datos que recogen; y el uso militar. Por eso es importante que su desarrollo se guíe por principios <b>éticos</b> y que las personas sigan teniendo el control de las decisiones importantes.</p>`,
    },
  ],
  figura: {
    titulo: "Un robot: percibir, decidir, actuar",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Esquema de un robot: sensores de luz, distancia y contacto entran al controlador, que ejecuta el programa y mueve motores, servos, LED y zumbador">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${t(110, 36, "PERCIBIR", { size: 15, color: "var(--leaf)", font: D })}${t(320, 36, "DECIDIR", { size: 15, color: "var(--pen)", font: D })}${t(530, 36, "ACTUAR", { size: 15, color: "var(--red)", font: D })}
      ${caja(40, 56, 140, 32, "luz (LDR)", "var(--leaf)", { size: 13 })}${caja(40, 104, 140, 32, "distancia (ultrasonidos)", "var(--leaf)", { size: 12 })}${caja(40, 152, 140, 32, "contacto (pulsador)", "var(--leaf)", { size: 13 })}
      ${caja(240, 80, 160, 80, "microcontrolador", "var(--pen)", { size: 13 })}${t(320, 148, "+ programa", { size: 12, color: "var(--pen)" })}
      ${caja(460, 56, 140, 32, "motores (ruedas)", "var(--red)", { size: 13 })}${caja(460, 104, 140, 32, "servo (pinza)", "var(--red)", { size: 13 })}${caja(460, 152, 140, 32, "LED y zumbador", "var(--red)", { size: 13 })}
      ${fl(182, 72, 238, 106, "var(--ink)", 2)}${fl(182, 120, 238, 120, "var(--ink)", 2)}${fl(182, 168, 238, 134, "var(--ink)", 2)}
      ${fl(402, 106, 458, 72, "var(--ink)", 2)}${fl(402, 120, 458, 120, "var(--ink)", 2)}${fl(402, 134, 458, 168, "var(--ink)", 2)}
      ${t(320, 222, "un bucle que se repite muchas veces por segundo", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "KciHoz9QC-Y", titulo: "¡Qué Voltaje! - Actuadores y Sensores", canal: "tecnokids. co", vistas: 62227, megusta: 0, busqueda: "robótica sensores actuadores Arduino" },
  ejemplos: [
    { enunciado: "Diseña el programa de una farola automática con una LDR (0 = oscuro, 1023 = mucha luz).",
      pasos: ["Entrada: leer el valor de la LDR en un pin analógico.", "Decisión: si el valor es menor que un umbral, por ejemplo 300, es de noche.", "Salida: encender el LED; si no, apagarlo. Todo dentro de «por siempre»."],
      resultado: "Por siempre: si LDR < 300 entonces LED en ALTO si no LED en BAJO." },
    { enunciado: "Clasifica como lazo abierto o cerrado: secador de pelo, frigorífico, microondas, robot aspirador.",
      pasos: ["El secador y el microondas actúan sin medir el resultado.", "El frigorífico tiene termostato que mide la temperatura.", "El robot aspirador corrige su trayectoria con sensores."],
      resultado: "Abierto: secador, microondas. Cerrado: frigorífico, robot aspirador." },
    { enunciado: "Un robot sigue-líneas tiene dos sensores IR (izquierdo y derecho). ¿Qué hace en cada caso?",
      pasos: ["Ninguno ve la línea: la línea está entre ellos → avanzar recto.", "El izquierdo ve la línea: la línea se va a la izquierda → girar a la izquierda.", "El derecho ve la línea → girar a la derecha."],
      resultado: "Tres condicionales dentro de un bucle «por siempre»." },
  ],
  errores: [
    "Confundir sensor con actuador: el sensor recibe información; el actuador actúa.",
    "Pensar que todo aparato automático es un robot: el robot percibe, decide y actúa con un programa.",
    "Conectar un motor directamente al pin del microcontrolador: necesita un controlador de motores.",
    "Olvidar el bucle «por siempre»: los sensores solo se leerían una vez.",
    "Creer que un servomotor gira sin parar: va a un ángulo concreto.",
  ],
  ejercicios: [
    { q: "¿Cuáles son las tres partes de un sistema de control?", sol: "Entrada, proceso (controlador) y salida." },
    { q: "Explica qué es la realimentación con un ejemplo.", sol: "La información de la salida que vuelve al controlador para corregir; el termostato que mide la temperatura y apaga la caldera." },
    { q: "Define robot y nombra tres tipos.", sol: "Máquina programable que percibe, decide y actúa; industriales, móviles y de servicio." },
    { q: "Indica qué sensor usarías para: detectar un choque, medir distancia y seguir una línea negra.", sol: "Pulsador o final de carrera; ultrasonidos; infrarrojos." },
    { q: "Diferencia entre motor de corriente continua y servomotor.", sol: "El motor CC gira continuamente; el servo gira hasta un ángulo concreto (0-180°)." },
    { q: "¿Qué diferencia hay entre los pines digitales y analógicos de Arduino?", sol: "Los digitales leen o escriben 0/1; los analógicos leen valores de 0 a 1023." },
    { q: "Escribe con bloques un semáforo con tres LED.", sol: "Por siempre: verde ALTO, esperar 5 s, verde BAJO; ámbar ALTO, esperar 1 s, ámbar BAJO; rojo ALTO, esperar 5 s, rojo BAJO." },
    { q: "¿Para qué sirve la salida PWM?", sol: "Para regular el brillo de un LED o la velocidad de un motor con pulsos rápidos." },
    { q: "Pon tres ejemplos de domótica.", sol: "Persianas automáticas, luces con sensor de movimiento, calefacción controlada desde el móvil." },
    { q: "Cita una ventaja y un reto de la robótica para la sociedad.", sol: "Ventaja: trabajos peligrosos más seguros. Reto: sustitución de empleos o responsabilidad ante errores." },
  ],
  quiz: [
    { q: "Un tostador con temporizador es un sistema de…", o: ["lazo abierto", "lazo cerrado", "robot"], a: 0, e: "Lazo abierto." },
    { q: "La información que vuelve de la salida al controlador es la…", o: ["realimentación", "consigna", "potencia"], a: 0, e: "Realimentación." },
    { q: "Los «sentidos» del robot son los…", o: ["actuadores", "sensores", "motores"], a: 1, e: "Sensores." },
    { q: "Para medir distancias se usa un sensor de…", o: ["ultrasonidos", "temperatura", "humedad"], a: 0, e: "Ultrasonidos." },
    { q: "Un servomotor gira…", o: ["sin parar", "hasta un ángulo", "solo con luz"], a: 1, e: "Hasta un ángulo." },
    { q: "Arduino es una placa de…", o: ["hardware libre", "software de pago", "memoria"], a: 0, e: "Hardware libre." },
    { q: "Las entradas analógicas de Arduino leen valores de…", o: ["0 a 1", "0 a 1023", "0 a 100"], a: 1, e: "0 a 1023." },
    { q: "La palabra robot la usó por primera vez…", o: ["Karel Čapek", "Isaac Newton", "Alan Turing"], a: 0, e: "Karel Čapek, en 1920." },
    { q: "La automatización de la vivienda se llama…", o: ["domótica", "robótica", "ofimática"], a: 0, e: "Domótica." },
    { q: "Un LED es un…", o: ["sensor", "actuador", "controlador"], a: 1, e: "Actuador." },
  ],
  examen: [
    { q: "El termostato de la calefacción es un sistema de…", o: ["lazo cerrado", "lazo abierto", "transmisión"], a: 0, e: "Lazo cerrado." },
    { q: "La placa creada por la BBC es…", o: ["micro:bit", "Arduino", "ESP32"], a: 0, e: "micro:bit." },
    { q: "IoT significa…", o: ["internet de las cosas", "inteligencia de la tecnología", "interfaz de objetos"], a: 0, e: "Internet de las cosas." },
  ],
  feynman: ["La diferencia entre lazo abierto y lazo cerrado", "Cómo percibe, decide y actúa un robot", "Cómo programar una luz que se enciende sola"],
  mapa: mapa("ROBÓTICA", "var(--eso)", [
    ["Control", "lazo abierto · cerrado", "var(--pen)"],
    ["Sensores", "luz · distancia · contacto", "var(--leaf)"],
    ["Controlador", "Arduino · micro:bit", "#b8860b"],
    ["Actuadores", "motores · servos · LED", "var(--red)"],
  ], 300),
  tarjetas: [
    ["Lazo abierto", "Actúa sin comprobar el resultado."],
    ["Lazo cerrado", "Un sensor mide la salida y corrige."],
    ["Realimentación", "Información que vuelve al controlador."],
    ["Robot", "Máquina que percibe, decide y actúa."],
    ["Sensor", "Convierte una magnitud física en señal eléctrica."],
    ["Actuador", "Realiza la acción: motor, servo, LED."],
    ["Microcontrolador", "Pequeño ordenador en un chip."],
    ["Umbral", "Valor con el que se compara un sensor para decidir."],
  ],
  familias: ["Buscad en casa tres aparatos automáticos y decidid si son de lazo abierto o cerrado.", "Imaginad un robot que os ayude en casa y dibujad sus sensores y actuadores.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sistemas de control y robótica: lazo abierto y cerrado, sensores, actuadores, placas de control programables, programación de respuestas y automatización (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Semáforo y luz automática con Arduino o micro:bit en placa de prototipos.", "Reto de robot sigue-líneas en un circuito de cinta aislante.", "Simular primero en Tinkercad Circuits o en el simulador de MakeCode."],
  },
  fuentes: [RD, wiki("Robótica", "Rob%C3%B3tica"), wiki("Arduino", "Arduino")],
  revisado: "2026-11-12",
};
