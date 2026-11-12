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
