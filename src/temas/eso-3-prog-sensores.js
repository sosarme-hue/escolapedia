// Programación y robótica 3º ESO: sensores y actuadores. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla, flecha } = require("./_eso3");

const M = "Programación y robótica";
const fl = (d, c = "var(--muted)") => `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.2" marker-end="url(#fs)"/>`;
const defs = `<defs><marker id="fs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--muted)"/></marker></defs>`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Sensores y actuadores",
  minutos: 50,
  objetivos: ["Comprender el esquema de un sistema de control: entrada, proceso y salida", "Conocer los sensores más comunes y qué magnitud miden", "Conocer los actuadores: LED, zumbador, motores y servos", "Distinguir señales digitales y analógicas y el control en lazo abierto y cerrado"],
  claves: ["sensor", "actuador", "controlador", "señal digital", "señal analógica", "realimentación"],
  pregunta: {
    texto: "¿Cómo sabe una puerta automática que te acercas, y cómo se abre sola?",
    respuesta: "Un <mark>sensor</mark> de presencia detecta tu movimiento y envía una señal a un <b>controlador</b> (un pequeño ordenador). Este decide «abrir» y activa un <mark>actuador</mark>: un motor que mueve la puerta. Sensores, controlador y actuadores son los sentidos, el cerebro y los músculos de cualquier robot.",
  },
  bloques: [
    {
      html: `<h3>Sistemas de control: sentir, pensar y actuar</h3><p>Un <b>sistema de control</b> automático funciona como un ser vivo:</p><ul><li><b>Entrada</b>: los <b>sensores</b> captan información del entorno (luz, distancia, temperatura). Son los «sentidos».</li><li><b>Proceso</b>: el <b>controlador</b> (una placa como Arduino o micro:bit) ejecuta un programa y decide qué hacer. Es el «cerebro».</li><li><b>Salida</b>: los <b>actuadores</b> realizan una acción (encender una luz, girar un motor, sonar). Son los «músculos».</li></ul><p>Ejemplo: en una farola automática, un sensor de luz detecta que anochece, el controlador lo compara con un umbral y enciende la lámpara.</p>`,
      svg: svg("Esquema de control: sensor como entrada, controlador como proceso y actuador como salida", `${defs}${caja(10, 64, 70, 44, "sensor", "var(--leaf)")}${caja(96, 64, 72, 44, "controlador", "var(--pen)", { s: 11 })}${caja(184, 64, 66, 44, "actuador", "var(--red)", { s: 11 })}${fl("M80 86 H 94")}${fl("M168 86 H 182")}${t(45, 52, "entrada", { c: "var(--leaf)", s: 11 })}${t(132, 52, "proceso", { c: "var(--pen)", s: 11 })}${t(217, 52, "salida", { c: "var(--red)", s: 11 })}${t(45, 128, "sentidos", { c: "var(--muted)", s: 10 })}${t(132, 128, "cerebro", { c: "var(--muted)", s: 10 })}${t(217, 128, "músculos", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Los sensores</h3><p>Un <b>sensor</b> transforma una magnitud física en una señal eléctrica que el controlador puede leer.</p>${tabla(["Sensor", "Qué detecta", "Uso típico"], [["<b>Pulsador</b>", "si está pulsado o no", "botones, finales de carrera"], ["<b>LDR</b> (fotorresistencia)", "cantidad de luz", "farolas, persianas automáticas"], ["<b>Termistor / sensor de temperatura</b>", "temperatura", "termostatos, invernaderos"], ["<b>Ultrasonidos</b>", "distancia (eco del sonido)", "aparcamiento, robots que esquivan"], ["<b>Infrarrojos</b>", "presencia, línea negra/blanca", "puertas, robots siguelíneas"], ["<b>PIR</b>", "movimiento de personas", "alarmas, luces de pasillo"], ["<b>Humedad</b>", "agua en la tierra o el aire", "riego automático"], ["<b>Acelerómetro</b>", "inclinación y movimiento", "móviles, mandos de consola"]])}`,
      video: { id: "V0jOKsjeBWQ", titulo: "Sensores: ejemplos con Arduino", canal: "ELECTRONOOBS en Español", vistas: 569702, megusta: 0 },
    },
    {
      html: `<h3>Señales digitales y analógicas</h3><p>Los sensores pueden dar dos tipos de señal:</p><ul><li><b>Digital</b>: solo tiene <mark>dos valores</mark>, 0 o 1 (apagado o encendido, 0 V o 5 V). Un pulsador está pulsado o no; un sensor PIR detecta movimiento o no.</li><li><b>Analógica</b>: puede tomar <mark>muchos valores</mark> dentro de un rango. Una LDR da más o menos tensión según la luz. El controlador la convierte en un número: en Arduino, de 0 a 1023; en micro:bit, de 0 a 255 para la luz.</li></ul><p>Con una señal analógica se puede fijar un <b>umbral</b>: «si luz &lt; 300, enciende la farola». Así se convierte una medida continua en una decisión.</p>`,
      svg: svg("Señal digital con dos niveles, 0 y 1, frente a señal analógica que varía de forma continua", `<path d="M20 70 H 240 M20 160 H 240" stroke="var(--line)" stroke-width="1.5"/>
        <path d="M20 66 H 60 V 30 H 110 V 66 H 140 V 30 H 200 V 66 H 240" fill="none" stroke="var(--pen)" stroke-width="3"/>${t(10, 34, "1", { c: "var(--pen)", s: 11 })}${t(10, 70, "0", { c: "var(--pen)", s: 11 })}
        <path d="M20 150 C 50 150 60 100 90 105 S 130 150 160 130 S 210 95 240 110" fill="none" stroke="var(--leaf)" stroke-width="3"/><path d="M20 125 H 240" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 4"/>
        ${t(130, 20, "digital: 0 o 1", { c: "var(--pen)", s: 11 })}${t(130, 90, "analógica: muchos valores", { c: "var(--leaf)", s: 11 })}${t(236, 140, "umbral", { c: "var(--red)", s: 10, a: "end" })}`),
    },
    {
      html: `<h3>El sensor de ultrasonidos</h3><p>Es uno de los favoritos de la robótica educativa. Funciona como un murciélago: emite un pulso de <b>sonido</b> agudo que no oímos y mide el tiempo que tarda en volver el <b>eco</b> tras rebotar en un obstáculo.</p><p>Como el sonido viaja a unos <b>343 m/s</b> (0,0343 cm por microsegundo) y recorre el camino de ida y vuelta:</p><p style="text-align:center"><mark>distancia = (tiempo × 0,0343) / 2</mark></p><p>Si el eco tarda 1.000 µs, la distancia es 1.000 · 0,0343 / 2 ≈ <b>17 cm</b>. Mide entre unos 2 cm y 4 m. Se usa en robots que esquivan obstáculos y en los sensores de aparcamiento de los coches.</p>`,
      video: { id: "KGwtit2bFyo", titulo: "Cómo usar sensores ultrasónicos con Arduino", canal: "Robonyx", vistas: 596915, megusta: 0 },
    },
    {
      html: `<h3>Los actuadores</h3><p>Un <b>actuador</b> convierte una señal eléctrica en una acción física: luz, sonido o movimiento.</p>${tabla(["Actuador", "Qué hace", "Detalle"], [["<b>LED</b>", "emite luz", "necesita una resistencia en serie y tiene polaridad"], ["<b>Zumbador</b>", "emite sonido", "pitidos o melodías sencillas"], ["<b>Motor de corriente continua</b>", "gira sin parar", "ruedas; invertir la polaridad invierte el giro"], ["<b>Servomotor</b>", "gira a un ángulo exacto", "de 0° a 180°: brazos, barreras, timones"], ["<b>Motor paso a paso</b>", "gira por pasos precisos", "impresoras 3D"], ["<b>Relé</b>", "interruptor controlado", "permite encender aparatos de mayor potencia"]])}<p>Los motores consumen mucha corriente: casi siempre necesitan un <b>controlador de motores</b> y una alimentación aparte.</p>`,
    },
    {
      html: `<h3>Control en lazo abierto y lazo cerrado</h3><ul><li><b>Lazo abierto</b>: el sistema actúa sin comprobar el resultado. Una tostadora con temporizador tuesta 2 minutos aunque el pan se queme. Un riego programado riega a las 8 aunque esté lloviendo.</li><li><b>Lazo cerrado</b>: un sensor mide el resultado y el controlador <mark>corrige</mark> la acción. Se llama <b>realimentación</b>. Un termostato enciende la calefacción hasta llegar a 21 °C y la apaga entonces; un riego con sensor de humedad solo riega si la tierra está seca.</li></ul><p>Los sistemas de lazo cerrado son más precisos y eficientes. Los robots que siguen una línea o mantienen el equilibrio funcionan así: miden, corrigen y vuelven a medir continuamente.</p>`,
      svg: svg("Lazo cerrado: el sensor mide el resultado y lo devuelve al controlador para corregir la acción", `${defs}${caja(14, 40, 80, 40, "controlador", "var(--pen)", { s: 11 })}${caja(118, 40, 64, 40, "actuador", "var(--red)", { s: 11 })}${caja(118, 112, 64, 40, "sensor", "var(--leaf)", { s: 11 })}${fl("M94 60 H 116")}${fl("M182 60 H 236")}${fl("M216 60 V 132 H 184")}${fl("M118 132 H 54 V 82")}${t(210, 50, "resultado", { c: "var(--muted)", s: 10 })}${t(80, 148, "realimentación", { c: "var(--leaf)", s: 10 })}`),
    },
    {
      html: `<h3>Programar sensores y actuadores</h3><p>El programa de un sistema de control casi siempre sigue el mismo esquema: un <b>bucle infinito</b> que lee los sensores, decide y actúa.</p><pre>por siempre
    distancia ← leer ultrasonidos
    si distancia &lt; 15 entonces
        parar motores
        girar a la derecha
    si no
        avanzar</pre><p>Antes de programar, conviene <b>calibrar</b>: leer los valores reales del sensor en el lugar donde se usará (la luz de la clase, el color del suelo) y mostrarlos en pantalla para elegir el umbral adecuado.</p>`,
    },
    {
      html: `<h3>Sensores a nuestro alrededor</h3><p>Un <b>teléfono móvil</b> lleva más de diez sensores: acelerómetro y giroscopio (girar la pantalla), sensor de luz ambiental (brillo automático), de proximidad (apaga la pantalla al llamar), brújula, GPS, micrófono, cámaras y lector de huellas.</p><p>Los coches modernos, las casas inteligentes (<i>domótica</i>) y las ciudades usan miles de sensores conectados a internet: es el <b>internet de las cosas</b> (IoT). Esto permite ahorrar energía y mejorar la seguridad, pero también plantea preguntas sobre la <b>privacidad</b>: ¿quién recoge esos datos y para qué?</p>`,
    },
  ],
  figura: {
    titulo: "Sentir, pensar y actuar",
    svg: filas("Sensores: luz, distancia, temperatura; controlador: Arduino o micro:bit; actuadores: LED, zumbador, motores; señal digital o analógica; lazo cerrado con realimentación", [["Sensores", "luz · distancia · temperatura · infrarrojos", "var(--leaf)"], ["Controlador", "Arduino · micro:bit: lee, decide y actúa", "var(--pen)"], ["Actuadores", "LED · zumbador · motor · servo · relé", "var(--red)"], ["Señales", "digital 0/1 · analógica con umbral", "var(--inf)"], ["Lazo cerrado", "medir → corregir → medir (realimentación)", "var(--ink)"]], 210),
  },
  video: { id: "KciHoz9QC-Y", titulo: "Actuadores y sensores", canal: "tecnokids. co", vistas: 62227, megusta: 0, busqueda: "sensores y actuadores" },
  quiz: mezcla([
    { q: "En un sistema de control, los sensores son la…", o: ["entrada", "salida", "alimentación"], a: 0, e: "Captan información." },
    { q: "Un motor es un…", o: ["actuador", "sensor", "controlador"], a: 0, e: "Produce movimiento." },
    { q: "La LDR detecta…", o: ["la luz", "la temperatura", "la distancia"], a: 0, e: "Fotorresistencia." },
    { q: "Una señal que solo vale 0 o 1 es…", o: ["digital", "analógica", "acústica"], a: 0, e: "Dos niveles." },
    { q: "El sensor de ultrasonidos calcula la distancia midiendo…", o: ["el tiempo del eco", "la luz reflejada", "el peso"], a: 0, e: "Ida y vuelta del sonido." },
    { q: "El actuador que gira a un ángulo exacto entre 0° y 180° es el…", o: ["servomotor", "zumbador", "LED"], a: 0, e: "Brazos, barreras." },
    { q: "Un termostato que apaga la calefacción al llegar a 21 °C es un sistema en…", o: ["lazo cerrado", "lazo abierto", "paralelo"], a: 0, e: "Hay realimentación." },
    { q: "Un LED necesita en serie…", o: ["una resistencia", "un motor", "un relé"], a: 0, e: "Para limitar la corriente." },
    { q: "Para detectar una línea negra en el suelo se usa un sensor de…", o: ["infrarrojos", "humedad", "temperatura"], a: 0, e: "El negro refleja menos." },
    { q: "El conjunto de objetos con sensores conectados a internet se llama…", o: ["internet de las cosas", "realidad virtual", "nube"], a: 0, e: "IoT." },
  ]),
  examen: mezcla([
    { q: "Si el eco tarda 2.000 µs, la distancia es aproximadamente…", o: ["34 cm", "17 cm", "69 cm"], a: 0, e: "2.000 · 0,0343 / 2 ≈ 34 cm." },
    { q: "Un riego que funciona cada día a las 8 sin mirar la humedad es…", o: ["lazo abierto", "lazo cerrado", "digital"], a: 0, e: "No comprueba el resultado." },
    { q: "Leer los valores reales de un sensor para fijar el umbral se llama…", o: ["calibrar", "compilar", "depurar"], a: 0, e: "Antes de programar." },
  ]),
  feynman: ["El esquema entrada, proceso y salida con un ejemplo", "Diferencia entre señal digital y analógica", "Cómo mide la distancia un sensor de ultrasonidos", "Qué es la realimentación"],
  mapa: mapa("CONTROL", "var(--eso)", [
    ["Sensores", "entrada · sentidos", "var(--leaf)"],
    ["Controlador", "programa · cerebro", "var(--pen)"],
    ["Actuadores", "salida · músculos", "var(--red)"],
    ["Lazo cerrado", "realimentación", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Sensor", "Convierte una magnitud física en señal eléctrica."],
    ["Actuador", "Convierte una señal eléctrica en luz, sonido o movimiento."],
    ["Controlador", "Placa que ejecuta el programa y decide."],
    ["Señal digital", "Solo dos valores: 0 o 1."],
    ["Señal analógica", "Muchos valores dentro de un rango."],
    ["Umbral", "Valor límite que convierte una medida en decisión."],
    ["Servomotor", "Motor que gira a un ángulo exacto (0°-180°)."],
    ["Realimentación", "El sensor mide el resultado para corregir la acción."],
  ],
  familias: ["Buscad en casa aparatos con sensores (nevera, móvil, horno) y averiguad qué miden.", "Comparad una tostadora (lazo abierto) con un termostato (lazo cerrado).", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sistemas de control: entrada, proceso y salida; sensores digitales y analógicos; actuadores; lazo abierto y cerrado; calibración; internet de las cosas (RD 217/2022, programación, robótica y competencia digital).",
    ideas: ["Farola automática con LDR y LED con umbral calibrado por el alumnado.", "Medir distancias con ultrasonidos y comparar con una regla.", "Debate sobre privacidad en la casa inteligente."],
  },
  fuentes: [RD, { t: "Arduino: documentación oficial de sensores y actuadores", url: "https://docs.arduino.cc/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Sistemas resueltos",
  ejemplos: [
    { enunciado: "Diseña un sistema que encienda una luz de pasillo cuando alguien pasa y la apague a los 30 segundos.",
      pasos: ["Entrada: sensor PIR (digital).", "Proceso: si PIR = 1 → encender, esperar 30 s, apagar.", "Salida: LED o lámpara mediante relé."],
      resultado: "Sistema de lazo abierto en la parte del temporizador." },
    { enunciado: "Calcula la distancia si el eco de un ultrasonidos tarda 580 µs.",
      pasos: ["distancia = tiempo · 0,0343 / 2.", "580 · 0,0343 = 19,9.", "19,9 / 2 ≈ 9,9 cm."],
      resultado: "Unos 10 cm." },
    { enunciado: "Programa un invernadero que encienda un ventilador si la temperatura supera 28 °C.",
      pasos: ["por siempre: temp ← leer sensor.", "si temp > 28 entonces encender motor del ventilador.", "si no apagar motor.", "esperar 1 s y repetir."],
      resultado: "Lazo cerrado: el ventilador baja la temperatura que el sensor vuelve a medir." },
  ],
  errores: [
    "Confundir sensor (entrada) con actuador (salida).",
    "Conectar un LED sin resistencia o al revés.",
    "Conectar un motor directamente a un pin de la placa.",
    "Fijar un umbral sin calibrar el sensor en el lugar real.",
    "Olvidar dividir entre 2 en el cálculo del ultrasonidos.",
    "Leer el sensor una sola vez fuera del bucle.",
  ],
  ejercicios: [
    { q: "Identifica entrada, proceso y salida en un semáforo para peatones con pulsador.", sol: "Entrada: pulsador. Proceso: controlador con temporizador. Salida: luces del semáforo." },
    { q: "Clasifica como sensor o actuador: LDR, servo, zumbador, PIR, LED, termistor.", sol: "Sensores: LDR, PIR, termistor. Actuadores: servo, zumbador, LED." },
    { q: "¿La señal de un pulsador es digital o analógica? ¿Y la de una LDR?", sol: "Pulsador: digital. LDR: analógica." },
    { q: "Un Arduino lee una LDR con valores de 0 a 1023. Si de día da 800 y de noche 150, ¿qué umbral elegirías?", sol: "Un valor intermedio, por ejemplo 400-500." },
    { q: "Calcula la distancia si el eco tarda 3.500 µs.", sol: "3.500 · 0,0343 / 2 ≈ 60 cm." },
    { q: "¿Qué actuador usarías para levantar la barrera de un aparcamiento? ¿Por qué?", sol: "Un servomotor, porque gira a un ángulo exacto (0° bajada, 90° subida)." },
    { q: "Pon un ejemplo de lazo abierto y otro de lazo cerrado en tu casa.", sol: "Abierto: microondas con temporizador. Cerrado: nevera con termostato." },
    { q: "Escribe el programa de una alarma que suene si se abre una puerta (sensor magnético digital).", sol: "por siempre: si sensor = 1 entonces sonar zumbador; si no silenciar." },
    { q: "Nombra cinco sensores de un teléfono móvil.", sol: "Acelerómetro, giroscopio, luz ambiental, proximidad, GPS (también brújula, micrófono, huella)." },
    { q: "Diseña un sistema de riego automático indicando sensores, actuadores y programa.", sol: "Sensor de humedad del suelo; actuador: bomba de agua con relé; programa: si humedad < umbral, regar 10 s; esperar y repetir." },
  ],
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["El invernadero que se cuida solo", `<p>En un pueblo de Almería, la cooperativa de Elena cultiva tomates en invernaderos. Hace unos años, alguien tenía que ir cada pocas horas a abrir ventanas cuando hacía calor, encender el riego cuando la tierra se secaba y cerrar todo si llegaba viento fuerte. Hoy, unos pequeños aparatos clavados en la tierra miden la humedad; otros, colgados del techo, la temperatura y la luz; y una veleta mide el viento. Un controlador lee todos esos datos cada minuto y decide: si la tierra está seca, abre la válvula del riego; si hace más de 30 °C, abre las ventanas con unos motores; si sopla fuerte el viento, las cierra.</p><p>El sistema ahorra casi un tercio del agua y los tomates crecen mejor. Y Elena puede ver todos los datos en el móvil desde casa. Los aparatos que miden son <b>sensores</b>; los que actúan (válvulas, motores, ventiladores) son <b>actuadores</b>; y entre ellos, un <b>programa</b> toma las decisiones.</p><p>En este tema aprenderás cómo funcionan los principales sensores y actuadores, cómo convertir sus lecturas en magnitudes reales, cómo controlar motores y aparatos de más potencia y cómo programar sistemas de control que se corrigen solos.</p>`],
  mas: [
    ["<h3>Los actuadores</h3>", `<p>Al elegir un actuador hay que mirar cuánta corriente necesita. Un pin de Arduino da como mucho unos 20-40 mA: suficiente para un LED o un zumbador, pero no para un motor. Para cargas mayores se usa un transistor, un driver de motores o un relé, y una alimentación aparte.</p>`],
    ["<h3>Programar sensores y actuadores</h3>", `<p>Cuando hay varios sensores y actuadores conviene organizar el programa en partes: primero <b>leer</b> todos los sensores y guardar sus valores en variables con nombres claros; después <b>decidir</b> con condicionales; y por último <b>actuar</b>. Así el programa es más fácil de leer y de depurar. Mostrar las lecturas en el monitor serie o en una pantalla mientras se prueba ayuda a comprobar que cada sensor funciona antes de unirlo todo.</p>`],
    ["<h3>Sensores a nuestro alrededor</h3>", `<p>Cuando los sensores se conectan a internet forman el <b>internet de las cosas</b> (IoT): estaciones meteorológicas, contadores de agua inteligentes, sensores de aparcamiento libre o de calidad del aire. Placas como la ESP32 incluyen wifi para enviar sus datos a la nube, donde se guardan, se representan en gráficas y pueden activar alertas en el móvil.</p>`],
  ],
  svgs: [
    ["<h3>Los sensores</h3>", "Qué mide cada sensor", [["LDR", "luz"], ["Termistor, LM35", "temperatura"], ["Ultrasonidos", "distancia"], ["PIR", "movimiento"]], "Los sentidos de la máquina"],
    ["<h3>El sensor de ultrasonidos</h3>", "Cómo mide el ultrasonidos", [["Emite", "un pulso de sonido"], ["Eco", "rebota en el obstáculo"], ["Distancia", "tiempo × 0,0343 / 2"]], "Como un murciélago"],
    ["<h3>Los actuadores</h3>", "Tipos de actuadores", [["Luz", "LED"], ["Sonido", "zumbador"], ["Movimiento", "motor, servo"], ["Potencia", "relé"]], "De la señal a la acción"],
    ["<h3>Programar sensores y actuadores</h3>", "Esquema del programa", [["Leer", "todos los sensores"], ["Decidir", "condicionales"], ["Actuar", "salidas"]], "Por siempre"],
    ["<h3>Sensores a nuestro alrededor</h3>", "Sensores en la vida diaria", [["Móvil", "acelerómetro, GPS, luz"], ["Coche", "aparcamiento, lluvia"], ["Ciudad", "tráfico, aire, plazas"]], "Rodeados de sensores"],
  ],
  bloques: [
    { tras: "<h3>Señales digitales y analógicas</h3>", html: `<h3>Sensores de temperatura y humedad</h3><p>Para medir la temperatura hay varias opciones. El <b>termistor NTC</b> es una resistencia que disminuye al calentarse; se conecta en un divisor de tensión y su lectura analógica cambia con la temperatura, aunque no de forma proporcional. El <b>LM35</b> es más cómodo: da 10 mV por cada grado, así que a 25 °C su salida es 0,25 V. La micro:bit tiene un sensor de temperatura integrado en su procesador, que mide aproximadamente la temperatura ambiente.</p><p>Para la humedad del aire se usan sensores digitales como el <b>DHT11</b> o el DHT22, que miden a la vez la temperatura y la humedad relativa y envían los datos por un solo pin, con ayuda de una biblioteca. Para la humedad de la <b>tierra</b> se usan sondas con dos patas que se clavan en la maceta: cuanta más agua, mejor conduce la tierra y mayor (o menor, según el modelo) es la lectura. Las sondas resistivas se oxidan con el tiempo; las <b>capacitivas</b> duran más.</p>`, svg: ["Temperatura y humedad", [["NTC", "resistencia que baja con el calor"], ["LM35", "10 mV por grado"], ["DHT11", "temperatura y humedad del aire"], ["Sonda", "humedad de la tierra"]], "Medir el clima"] },
    { tras: "<h3>Sensores de temperatura y humedad</h3>", html: `<h3>Convertir lecturas en magnitudes reales</h3><p>Una entrada analógica de Arduino UNO no da grados ni centímetros, sino un número entre 0 y 1023 que corresponde a una tensión de 0 a 5 V. Cada unidad equivale a unos 5 / 1023 ≈ 0,0049 V. Para obtener la magnitud real hay que <b>convertir</b>: primero se pasa la lectura a voltios (tensión = lectura · 5 / 1023) y después se aplica la relación del sensor. Con el LM35, temperatura = tensión · 100: una lectura de 51 son 0,25 V, es decir, 25 °C.</p><p>Cuando el sensor no tiene una fórmula conocida, se calibra con dos puntos de referencia y se hace una <b>conversión lineal</b>: por ejemplo, si la sonda de humedad da 820 en tierra seca y 350 recién regada, se puede asignar 0 % a 820 y 100 % a 350. La función <b>map(lectura, 820, 350, 0, 100)</b> de Arduino hace ese cálculo. Las lecturas suelen tener pequeñas variaciones (ruido); para estabilizarlas se toman varias medidas seguidas y se calcula la <b>media</b>.</p>`, svg: ["De la lectura a la magnitud", [["Lectura", "0 a 1023"], ["Tensión", "lectura · 5 / 1023"], ["LM35", "°C = tensión · 100"], ["map()", "escala lineal propia"]], "Convertir lecturas"] },
    { tras: "<h3>El sensor de ultrasonidos</h3>", html: `<h3>Programar el sensor de ultrasonidos</h3><p>El módulo más usado, el <b>HC-SR04</b>, tiene cuatro patas: VCC (5 V), GND, <b>Trig</b> (disparo) y <b>Echo</b> (eco). Para medir, el programa pone el pin Trig en alto durante 10 microsegundos, lo que hace que el sensor emita ocho pulsos de ultrasonidos de 40 kHz. Después, el pin Echo permanece en alto mientras el sonido va y vuelve; la función <b>pulseIn(echo, HIGH)</b> mide ese tiempo en microsegundos.</p><p>Como el sonido recorre unos 343 m/s, es decir, 0,0343 cm cada microsegundo, y hace el camino dos veces (ida y vuelta), la distancia es <b>d = tiempo · 0,0343 / 2</b>. Si el eco tarda 1.166 µs, el obstáculo está a unos 20 cm. El sensor mide de 2 cm a unos 4 m. Falla con objetos muy pequeños, blandos (que absorben el sonido, como una cortina) o muy inclinados (el eco se desvía). En la micro:bit existen extensiones de MakeCode con un bloque que devuelve directamente la distancia en centímetros.</p>`, svg: ["Programar el HC-SR04", [["Trig", "pulso de 10 µs"], ["Echo", "pulseIn mide el tiempo"], ["Distancia", "t · 0,0343 / 2 cm"], ["Rango", "de 2 cm a 4 m"]], "Medir distancias"], video: "ultrasonidos" },
    { tras: "<h3>Los actuadores</h3>", html: `<h3>Motores: sentido y velocidad</h3><p>Un <b>motor de corriente continua</b> gira en un sentido u otro según la polaridad de la tensión: si se invierten los cables, gira al revés. Para que la placa pueda cambiar el sentido sin tocar cables se usa un <b>puente H</b>, un circuito con cuatro interruptores electrónicos que invierte la polaridad. Los módulos L298N o L9110 incluyen dos puentes H, perfectos para un robot de dos ruedas: cada motor usa dos pines de la placa (adelante o atrás) y un tercero, PWM, para la velocidad.</p><p>La <b>velocidad</b> se regula con PWM: con analogWrite(pin, 255) el motor va al máximo y con 128, aproximadamente a la mitad. Por debajo de cierto valor el motor no tiene fuerza para arrancar. Para mover cosas despacio y con fuerza se usan <b>motorreductores</b>, que llevan engranajes incorporados. Los <b>motores paso a paso</b> giran en pequeños pasos exactos (por ejemplo, 200 por vuelta) y se usan en impresoras 3D y máquinas de precisión. Los motores siempre se alimentan con una batería o fuente aparte, uniendo su GND con el de la placa.</p>`, svg: ["Controlar un motor", [["Puente H", "cambia el sentido"], ["PWM", "regula la velocidad"], ["Motorreductor", "despacio y con fuerza"], ["Paso a paso", "giros exactos"]], "Sentido y velocidad"] },
    { tras: "<h3>Motores: sentido y velocidad</h3>", html: `<h3>Relés: controlar aparatos de más potencia</h3><p>Una placa de 5 V no puede encender directamente una bomba de riego, una lámpara de 230 V o un ventilador grande. Para eso se usa un <b>relé</b>: un interruptor accionado por un electroimán. Cuando la placa activa la bobina del relé (a través de un transistor, que ya suele venir en los módulos de relé), el electroimán atrae una lámina metálica que cierra el circuito de potencia, totalmente separado del circuito de la placa. Al desactivarla, un muelle vuelve a abrir el contacto y se oye un pequeño «clic».</p><p>Los módulos de relé tienen tres terminales de salida: <b>COM</b> (común), <b>NO</b> (normalmente abierto: conecta con COM solo cuando el relé está activado) y <b>NC</b> (normalmente cerrado: conecta con COM cuando está desactivado). Para encender un aparato al activar el relé se usan COM y NO. Los relés de estado sólido hacen lo mismo sin piezas móviles. Importante: los circuitos de 230 V son peligrosos; en el aula se trabaja siempre con baja tensión (pilas o fuentes de 12 V) y nunca se manipula la red eléctrica.</p>`, svg: ["El relé", [["Bobina", "la activa la placa"], ["COM y NO", "se cierran al activar"], ["Seguridad", "en el aula, solo baja tensión"]], "Un interruptor electromagnético"] },
    { tras: "<h3>Control en lazo abierto y lazo cerrado</h3>", html: `<h3>Controlar mejor: todo o nada y proporcional</h3><p>El control más sencillo es el de <b>todo o nada</b>: si la temperatura es menor que la consigna, la calefacción se enciende al máximo; si es mayor, se apaga. Funciona, pero la temperatura oscila arriba y abajo, y si el sensor da valores cerca del umbral, el actuador se enciende y apaga continuamente. Se mejora con <b>histéresis</b>: dos umbrales, por ejemplo encender por debajo de 20 °C y apagar por encima de 22 °C.</p><p>Un control más fino es el <b>proporcional</b>: la acción depende de cuánto nos alejamos del objetivo. Se calcula el <b>error</b> (consigna − medida) y la salida es proporcional a él: salida = K · error. Un robot sigue-líneas con control proporcional gira poco si la línea está casi centrada y mucho si se ha desviado bastante, con lo que avanza suave y sin zigzaguear. Si la constante K es muy pequeña, reacciona tarde; si es muy grande, se pasa de largo y oscila. Ajustar K probando es parte del trabajo. Los sistemas profesionales usan el control <b>PID</b>, que añade otras dos correcciones.</p>`, svg: ["Tipos de control", [["Todo o nada", "encender o apagar"], ["Histéresis", "dos umbrales"], ["Proporcional", "salida = K · error"]], "Controlar con suavidad"] },
  ],
  grupos: [5, 2, 3, 4],
  ejemplos: [
    ["Un LM35 conectado a A0 da una lectura de 47. ¿Qué temperatura mide?", ["Tensión = 47 · 5 / 1023 ≈ 0,23 V.", "Temperatura = 0,23 · 100 = 23 °C."], "Unos 23 °C."],
    ["Programa un ventilador (por relé en el pin 7) con histéresis: se enciende por encima de 28 °C y se apaga por debajo de 25 °C.", ["Leer la temperatura t.", "Si t > 28: digitalWrite(7, HIGH).", "Si t < 25: digitalWrite(7, LOW).", "Entre 25 y 28 no se cambia nada."], "El ventilador no se enciende y apaga continuamente."],
    ["Un robot sigue-líneas mide un error de −30 (línea a la izquierda). Con K = 2 y velocidad base 150, ¿qué velocidad tiene cada rueda?", ["Corrección = K · error = 2 · (−30) = −60.", "Rueda izquierda = 150 + (−60) = 90.", "Rueda derecha = 150 − (−60) = 210."], "La rueda derecha va más rápida y el robot gira a la izquierda hacia la línea."],
  ],
  niveles: "bbbmmbbmma",
  ejercicios: [
    ["b", "¿Cuánta tensión da un LM35 a 30 °C?", "10 mV por grado: 30 · 10 = 300 mV = 0,3 V."],
    ["b", "¿Qué mide un DHT11?", "La temperatura y la humedad relativa del aire."],
    ["b", "Nombra las cuatro patas del sensor HC-SR04.", "VCC, GND, Trig y Echo."],
    ["b", "¿Para qué sirve un puente H?", "Para cambiar el sentido de giro de un motor de corriente continua desde la placa, invirtiendo la polaridad."],
    ["b", "En un relé, ¿qué terminales usas para que el aparato se encienda al activarlo?", "COM y NO (normalmente abierto)."],
    ["b", "¿Qué es el error en un sistema de control?", "La diferencia entre el valor que se quiere (consigna) y el valor medido."],
    ["m", "Convierte a voltios una lectura analógica de 614 en Arduino UNO.", "614 · 5 / 1023 ≈ 3 V."],
    ["m", "Una sonda de humedad da 800 seca y 300 mojada. Escribe la conversión a porcentaje con map().", "humedad = map(lectura, 800, 300, 0, 100); así 800 → 0 % y 300 → 100 %."],
    ["m", "Si el eco tarda 2.915 µs, ¿a qué distancia está el obstáculo?", "d = 2.915 · 0,0343 / 2 ≈ 50 cm."],
    ["m", "¿Por qué falla el ultrasonidos con una cortina?", "Porque la tela es blanda y absorbe el sonido: el eco vuelve muy débil o no vuelve."],
    ["m", "¿Por qué conviene tomar varias lecturas y hacer la media?", "Porque las lecturas tienen pequeñas variaciones (ruido); la media da un valor más estable."],
    ["m", "Programa la velocidad de un motor según un potenciómetro (A0) con un L298N (pin PWM 5).", "int v = analogRead(A0); analogWrite(5, map(v, 0, 1023, 0, 255)); con los pines de sentido fijados para avanzar."],
    ["m", "Compara control todo o nada y control proporcional con el ejemplo de un horno.", "Todo o nada: la resistencia se enciende al máximo o se apaga, y la temperatura oscila. Proporcional: la potencia es mayor cuanto más lejos está de la temperatura deseada, y se acerca de forma más suave."],
    ["m", "¿Qué ocurre si la constante K del control proporcional es demasiado grande?", "El sistema reacciona en exceso, se pasa del objetivo y oscila (zigzaguea)."],
    ["m", "¿Qué es un motor paso a paso y dónde se usa?", "Un motor que gira en pasos pequeños y exactos (por ejemplo, 200 por vuelta). Se usa en impresoras 3D, plotters y máquinas de precisión."],
    ["a", "Diseña el sistema de control del invernadero de la lectura: sensores, actuadores, tabla de conexiones y programa.", "Sensores: sonda de humedad (A0), DHT11 (pin 2), LDR (A1). Actuadores: bomba por relé (pin 7), ventana con servo (pin 9), ventilador por relé (pin 8). Programa: leer todo; si humedad < 30 %: regar 10 s; si t > 30: abrir ventana; si t > 33: ventilador; si t < 26: cerrar ventana y apagar ventilador."],
    ["a", "Escribe el programa de Arduino que mide la distancia con el HC-SR04 (Trig 9, Echo 10) y la muestra en el monitor serie.", "setup(): pinMode(9, OUTPUT); pinMode(10, INPUT); Serial.begin(9600). loop(): digitalWrite(9, LOW); delayMicroseconds(2); digitalWrite(9, HIGH); delayMicroseconds(10); digitalWrite(9, LOW); long t = pulseIn(10, HIGH); float d = t * 0.0343 / 2; Serial.println(d); delay(200);"],
    ["a", "Un robot sigue-líneas con control proporcional usa una velocidad base de 120 y K = 3. Calcula la velocidad de cada rueda con errores de 0, +10 y −20.", "Error 0: 120 y 120 (recto). Error +10: corrección 30 → izquierda 150, derecha 90 (gira a la derecha). Error −20: corrección −60 → izquierda 60, derecha 180 (gira a la izquierda)."],
    ["a", "Una alarma de temperatura con termistor NTC se dispara de vez en cuando sin motivo. Propón tres causas y soluciones.", "Ruido en las lecturas: hacer la media de varias. Umbral demasiado cerca de la temperatura normal: recalibrar. Ausencia de histéresis: usar dos umbrales. Además, revisar las conexiones flojas en la protoboard."],
    ["a", "Explica cómo convertirías el invernadero en un proyecto de internet de las cosas y qué riesgos de seguridad habría que considerar.", "Usar una placa con wifi (ESP32) que envíe los datos a un servicio en la nube con gráficas y alertas al móvil. Riesgos: accesos no autorizados que podrían activar el riego o abrir ventanas; hay que usar contraseñas seguras, conexiones cifradas y actualizar el software."],
  ],
  cuartas: ["memoria", "cable", "el sonido", "binaria", "el color", "relé", "lazo de corriente", "un condensador de 1 F", "presión", "red social", "100 cm", "lazo proporcional", "soldar"],
  quiz: [
    ["El LM35 da…", ["1 V por grado", "10 mV por grado", "100 V por grado", "1 mV por grado"], 1, "0,25 V a 25 °C."],
    ["El DHT11 mide…", ["luz y sonido", "temperatura y humedad", "distancia", "movimiento"], 1, "Por un solo pin."],
    ["Para pasar una lectura de 0-1023 a voltios se multiplica por…", ["5 / 1023", "1023 / 5", "100", "0,0343"], 0, "5 V de rango."],
    ["La función map() sirve para…", ["dibujar mapas", "cambiar de escala un valor", "medir tiempo", "mover servos"], 1, "Conversión lineal."],
    ["En el HC-SR04, el pin que inicia la medida es…", ["Echo", "Trig", "GND", "VCC"], 1, "Pulso de 10 µs."],
    ["La distancia con ultrasonidos es…", ["t · 0,0343", "t · 0,0343 / 2", "t / 2", "t · 343"], 1, "Ida y vuelta."],
    ["Para cambiar el sentido de un motor se usa un…", ["relé de luz", "puente H", "LM35", "zumbador"], 1, "Invierte la polaridad."],
    ["Los terminales de un relé que se cierran al activarlo son…", ["COM y NC", "COM y NO", "VCC y GND", "Trig y Echo"], 1, "Normalmente abierto."],
    ["En el control proporcional, la salida es…", ["siempre máxima", "K · error", "0 o 1", "aleatoria"], 1, "Proporcional al error."],
    ["Las impresoras 3D usan motores…", ["paso a paso", "de explosión", "de vapor", "eólicos"], 0, "Giros exactos."],
  ],
  examen: [
    ["Una lectura de 1023 en Arduino UNO equivale a…", ["0 V", "2,5 V", "5 V", "1023 V"], 2, "El máximo."],
    ["Si el eco tarda 583 µs, la distancia es unos…", ["5 cm", "10 cm", "20 cm", "1 m"], 1, "583 · 0,0343 / 2 ≈ 10 cm."],
    ["La velocidad de un motor se regula con…", ["PWM", "un LDR", "Echo", "un relé NC"], 0, "analogWrite."],
    ["Encender por debajo de 20 °C y apagar por encima de 22 °C es…", ["histéresis", "PWM", "lazo abierto", "PID"], 0, "Dos umbrales."],
    ["En el aula, los relés deben usarse con…", ["230 V", "baja tensión", "agua", "cualquier cosa"], 1, "Seguridad eléctrica."],
  ],
  tarjetas: [["LM35", "Sensor de temperatura: 10 mV por grado."], ["Puente H", "Circuito que cambia el sentido de un motor."], ["Relé", "Interruptor electromagnético para circuitos de potencia."], ["Control proporcional", "Salida = K · error."]],
  glosario: [
    ["Sistema de control", "Conjunto que mide, decide y actúa."],
    ["Sensor", "Convierte una magnitud física en señal eléctrica."],
    ["Actuador", "Convierte una señal en acción."],
    ["Controlador", "Placa que ejecuta el programa."],
    ["Señal digital", "Solo dos valores: 0 o 1."],
    ["Señal analógica", "Valores continuos."],
    ["LM35", "Sensor de temperatura lineal."],
    ["DHT11", "Sensor de temperatura y humedad."],
    ["Ultrasonidos", "Sonido que no oímos, usado para medir distancias."],
    ["Calibrar", "Medir valores reales para ajustar un sensor."],
    ["Puente H", "Circuito para invertir el giro de un motor."],
    ["Relé", "Interruptor accionado por un electroimán."],
    ["Lazo cerrado", "Control que mide el resultado y corrige."],
    ["Histéresis", "Dos umbrales para evitar cambios continuos."],
    ["Error", "Diferencia entre consigna y medida."],
    ["Control proporcional", "Acción proporcional al error."],
    ["Internet de las cosas", "Objetos con sensores conectados a internet."],
  ],
  situacion: { titulo: "Una maceta inteligente", reto: "Diseñar y construir en parejas una maceta que se riegue sola, avise con luces y sonido de su estado y muestre sus datos, con un control que no gaste agua de más.", pasos: ["Elegir sensores (humedad de la tierra, temperatura, luz) y actuadores (bomba por relé, LED, zumbador).", "Calibrar la sonda de humedad y convertir la lectura a porcentaje.", "Diseñar el programa con lectura, decisión e histéresis.", "Montar el circuito con baja tensión y probarlo por partes.", "Registrar los datos durante una semana y analizar el consumo de agua.", "Presentar la maceta con su esquema, su programa y los resultados."], producto: "Maceta funcional, esquema de conexiones, programa comentado e informe con datos.", evaluacion: ["Los sensores están calibrados y las conversiones son correctas.", "El control usa histéresis o control proporcional justificado.", "El montaje es seguro y funciona de forma estable.", "El informe analiza los datos registrados."] },
  saberes: "sensores y actuadores, señales digitales y analógicas, acondicionamiento y conversión de lecturas, control de motores y relés, sistemas de control en lazo abierto y cerrado, control todo o nada y proporcional, e internet de las cosas.",
  familias: ["Buscad en casa tres aparatos que usen sensores y adivinad qué mide cada uno."],
  minutos: 110,
});
