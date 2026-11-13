// Programación y robótica 3º ESO: robótica con Arduino y micro:bit. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Robótica con Arduino y micro:bit",
  minutos: 50,
  objetivos: ["Conocer las placas programables Arduino y micro:bit y sus partes", "Montar circuitos sencillos con LED, pulsador y resistencia en una placa de prototipos", "Programar las funciones básicas setup y loop y la lectura y escritura de pines", "Programar la micro:bit con MakeCode usando sus sensores integrados"],
  claves: ["microcontrolador", "Arduino", "micro:bit", "pin", "protoboard", "MakeCode"],
  pregunta: {
    texto: "¿Cómo puede una placa del tamaño de una tarjeta de crédito controlar un robot, una estación meteorológica o una instalación artística?",
    respuesta: "Porque lleva un <mark>microcontrolador</mark>: un pequeño ordenador en un solo chip que ejecuta un programa sin parar. Por sus <b>pines</b> lee sensores y controla actuadores. Placas como <b>Arduino</b> y <b>micro:bit</b> son baratas, libres o educativas, y se programan desde el ordenador.",
  },
  bloques: [
    {
      html: `<h3>Placas programables</h3><p>Un <b>microcontrolador</b> es un chip que contiene procesador, memoria y entradas y salidas. A diferencia de un ordenador, ejecuta <mark>un único programa</mark> una y otra vez, desde que se enciende hasta que se apaga.</p><ul><li><b>Arduino</b> nació en Italia en 2005 como proyecto de <b>hardware libre</b>: sus diseños son públicos y cualquiera puede fabricar placas compatibles. Se programa en un lenguaje basado en C++ o con bloques.</li><li><b>micro:bit</b> fue creada por la BBC en 2015 para que los estudiantes aprendieran a programar. Lleva sensores y luces ya integrados y se programa con bloques, JavaScript o Python.</li></ul>`,
      video: { id: "Zs9MZosVuqo", titulo: "Arduino: qué es, cómo funciona y para qué se puede utilizar", canal: "Xataka", vistas: 824776, megusta: 0 },
    },
    {
      html: `<h3>La placa Arduino UNO</h3><p>Es el modelo más usado en las aulas. Sus partes principales:</p>${tabla(["Parte", "Función"], [["<b>Microcontrolador</b> (ATmega328P)", "el «cerebro»; guarda y ejecuta el programa"], ["<b>Puerto USB</b>", "conecta al ordenador para cargar el programa y alimentar la placa"], ["<b>Conector de alimentación</b>", "pila o fuente de 7-12 V para funcionar sin ordenador"], ["<b>Pines digitales 0-13</b>", "entradas o salidas de 0 o 5 V; algunos (~) imitan valores intermedios (PWM)"], ["<b>Pines analógicos A0-A5</b>", "leen tensiones de 0 a 5 V como números de 0 a 1023"], ["<b>Pines 5V, 3.3V y GND</b>", "alimentación para sensores; GND es el negativo (tierra)"], ["<b>LED integrado (pin 13)</b>", "permite probar sin montar nada"]])}`,
      svg: svg("Esquema simplificado de una placa Arduino UNO con USB, pines digitales arriba, pines analógicos y de alimentación abajo y el microcontrolador", `<rect x="30" y="30" width="200" height="120" rx="8" fill="var(--water)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="16" y="44" width="30" height="26" rx="3" fill="var(--muted)"/><rect x="18" y="104" width="24" height="26" rx="3" fill="var(--ink)"/>
        ${Array.from({ length: 14 }, (_, i) => `<rect x="${84 + i * 10}" y="34" width="7" height="9" fill="var(--ink)"/>`).join("")}${Array.from({ length: 12 }, (_, i) => `<rect x="${84 + i * 12}" y="137" width="7" height="9" fill="var(--ink)"/>`).join("")}
        <rect x="120" y="80" width="80" height="22" rx="3" fill="var(--ink)"/><circle cx="214" cy="56" r="4" fill="var(--sun)"/>
        ${t(155, 24, "pines digitales 0-13", { c: "var(--pen)", s: 10 })}${t(155, 166, "5V · GND · A0-A5", { c: "var(--pen)", s: 10 })}${t(160, 120, "microcontrolador", { c: "var(--ink)", s: 10 })}${t(31, 61, "USB", { c: "var(--paper)", s: 9 })}${t(220, 70, "13", { c: "var(--muted)", s: 9 })}`),
    },
    {
      html: `<h3>La protoboard y el primer circuito</h3><p>La <b>placa de prototipos</b> (<i>protoboard</i>) permite montar circuitos sin soldar. Sus agujeros están conectados por dentro: en las <b>columnas centrales</b>, de cinco en cinco; en los <b>carriles laterales</b>, a lo largo (para + y −).</p><p>Para encender un LED desde Arduino:</p><ol><li>Cable del <b>pin 8</b> a una <b>resistencia de 220 Ω</b>.</li><li>La resistencia, a la <b>pata larga</b> del LED (ánodo, +).</li><li>La <b>pata corta</b> (cátodo, −), a <b>GND</b>.</li></ol><p>La resistencia es imprescindible: <mark>limita la corriente</mark> para que el LED no se queme. Monta siempre con la placa <b>desconectada</b> y revisa antes de enchufar.</p>`,
      svg: svg("Circuito de un LED: pin 8 de Arduino, resistencia de 220 ohmios, LED con pata larga al positivo y pata corta a GND", `<rect x="14" y="40" width="60" height="100" rx="6" fill="var(--water)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2.5"/>${t(44, 34, "Arduino", { c: "var(--pen)", s: 11 })}${t(62, 74, "8", { c: "var(--ink)", s: 11, a: "end" })}${t(62, 124, "GND", { c: "var(--ink)", s: 10, a: "end" })}
        <path d="M74 70 H 100" fill="none" stroke="var(--red)" stroke-width="2.5"/><path d="M100 70 l 5 -8 l 8 16 l 8 -16 l 8 16 l 8 -16 l 5 8" fill="none" stroke="var(--ink)" stroke-width="2.2"/><path d="M142 70 H 180 V 82" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M168 82 H 192 L 180 102 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><path d="M168 102 H 192" stroke="var(--ink)" stroke-width="2.5"/><path d="M196 84 l 10 -8 M200 92 l 10 -8" stroke="var(--sun)" stroke-width="2"/>
        <path d="M180 102 V 120 H 74" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        ${t(121, 96, "220 Ω", { c: "var(--ink)", s: 11 })}${t(214, 78, "LED", { c: "var(--ink)", s: 11, a: "start" })}${t(200, 140, "pata larga +, corta −", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Programar Arduino: setup y loop</h3><p>Un programa de Arduino (llamado <b>sketch</b>) tiene siempre dos partes:</p><ul><li><code>setup()</code>: se ejecuta <mark>una sola vez</mark> al encender. Se configuran los pines.</li><li><code>loop()</code>: se repite <mark>sin fin</mark>. Aquí va lo que la placa hace continuamente.</li></ul><pre>void setup() {
  pinMode(8, OUTPUT);     // el pin 8 será una salida
}
void loop() {
  digitalWrite(8, HIGH);  // enciende el LED (5 V)
  delay(500);             // espera 500 ms
  digitalWrite(8, LOW);   // apaga el LED (0 V)
  delay(500);
}</pre><p>Este es el famoso «Blink»: el LED parpadea una vez por segundo. Se escribe en el <b>Arduino IDE</b> y se carga con el botón «Subir». También hay entornos de bloques, como <b>Arduinoblocks</b> o mBlock.</p>`,
    },
    {
      html: `<h3>Leer entradas: pulsadores y sensores</h3><p>Para leer un <b>pulsador</b>, el pin se configura como entrada y se usa <code>digitalRead</code>, que devuelve <code>HIGH</code> (pulsado) o <code>LOW</code>:</p><pre>void setup() {
  pinMode(2, INPUT_PULLUP);   // pulsador en el pin 2
  pinMode(8, OUTPUT);
}
void loop() {
  if (digitalRead(2) == LOW) digitalWrite(8, HIGH);
  else digitalWrite(8, LOW);
}</pre><p>Con <code>INPUT_PULLUP</code>, el pin está a 5 V y baja a 0 V al pulsar, por eso pulsado es <code>LOW</code>. Para sensores analógicos se usa <code>analogRead(A0)</code>, que da un número de 0 a 1023. Con el <b>monitor serie</b> (<code>Serial.println</code>) se ven los valores en el ordenador: es la mejor herramienta para calibrar y depurar.</p>`,
    },
    {
      html: `<h3>La placa micro:bit</h3><p>La <b>micro:bit</b> trae casi todo integrado, así que se puede programar sin montar nada:</p><ul><li>Una <b>matriz de 25 LED</b> (5 × 5) que muestra iconos, texto y números, y que también mide la luz.</li><li><b>Dos botones</b> (A y B) y un logotipo táctil.</li><li><b>Acelerómetro</b> (detecta agitar e inclinar), <b>brújula</b> y sensor de <b>temperatura</b>.</li><li><b>Radio</b> y Bluetooth para comunicar varias placas.</li><li>Altavoz y micrófono (en la versión 2).</li><li>Un <b>conector de borde</b> con pines para añadir motores y sensores externos.</li></ul>`,
      svg: svg("Placa micro:bit con matriz de 5 por 5 LED mostrando un corazón y los botones A y B", `<rect x="40" y="26" width="180" height="120" rx="14" fill="var(--ink)" fill-opacity=".85"/>${Array.from({ length: 25 }, (_, i) => { const f = Math.floor(i / 5), c = i % 5; const on = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 22].includes(i); return `<rect x="${102 + c * 12}" y="${46 + f * 12}" width="7" height="7" rx="1" fill="${on ? "var(--red)" : "var(--muted)"}" fill-opacity="${on ? 1 : 0.5}"/>`; }).join("")}
        <circle cx="66" cy="76" r="11" fill="var(--paper)"/><circle cx="194" cy="76" r="11" fill="var(--paper)"/>${t(66, 80, "A", { s: 11 })}${t(194, 80, "B", { s: 11 })}
        ${Array.from({ length: 5 }, (_, i) => `<rect x="${57 + i * 35}" y="128" width="18" height="16" rx="3" fill="var(--sun)"/>`).join("")}${t(130, 166, "25 LED · 2 botones · sensores integrados", { c: "var(--muted)", s: 10 })}`),
      video: { id: "MY4jDrN9_cc", titulo: "Micro:bit en español: ejemplos de programación sencillos", canal: "BricoGeek", vistas: 149567, megusta: 0 },
    },
    {
      html: `<h3>Programar la micro:bit con MakeCode</h3><p><b>MakeCode</b> es el editor web de Microsoft para la micro:bit. Funciona con bloques (como Scratch) y permite ver el mismo programa en JavaScript o Python. Incluye un <b>simulador</b> para probar sin la placa.</p><ul><li><b>al iniciar</b>: equivale al <code>setup()</code> de Arduino.</li><li><b>para siempre</b>: equivale al <code>loop()</code>.</li><li>Eventos: <b>al presionar el botón A</b>, <b>al agitar</b>, <b>al recibir por radio</b>…</li></ul><p>Ejemplo, un dado electrónico: «al agitar → mostrar número (número al azar entre 1 y 6)». Para pasar el programa, se descarga un archivo <code>.hex</code> y se arrastra a la micro:bit, que el ordenador ve como una memoria USB.</p>`,
    },
    {
      html: `<h3>Del circuito al robot</h3><p>Con una placa, dos <b>motores</b> con ruedas, un <b>controlador de motores</b>, una batería y uno o dos sensores ya tenemos un robot móvil:</p><ul><li><b>Robot que esquiva</b>: ultrasonidos delante; si hay un obstáculo cerca, gira.</li><li><b>Robot siguelíneas</b>: dos sensores infrarrojos mirando al suelo; si uno ve negro, corrige hacia ese lado.</li><li><b>Robot teledirigido</b>: una micro:bit en la mano envía por radio la inclinación y otra en el robot mueve los motores.</li></ul><p>Recomendaciones de seguridad: alimentar los motores aparte, no cortocircuitar la batería y desconectarla al modificar el montaje.</p>`,
    },
    {
      html: `<h3>Arduino o micro:bit: ¿cuál elegir?</h3>${tabla(["", "Arduino UNO", "micro:bit"], [["Programación", "C++ (IDE) o bloques", "bloques, JavaScript, Python"], ["Sensores integrados", "ninguno (solo un LED)", "luz, temperatura, acelerómetro, brújula, botones"], ["Montaje", "protoboard y componentes", "casi nada; pinzas de cocodrilo"], ["Ventaja", "muy versátil, enorme comunidad, hardware libre", "empezar en minutos, ideal para aprender"]])}<p>Las dos comparten la misma lógica: leer entradas, decidir con un programa y controlar salidas. Hay además placas como <b>ESP32</b> (con wifi) o <b>Raspberry Pi</b>, que es ya un ordenador completo.</p>`,
    },
  ],
  figura: {
    titulo: "Robótica con placas programables",
    svg: filas("Microcontrolador: un programa que se repite; Arduino: pines, protoboard, setup y loop; micro:bit: sensores integrados y MakeCode; circuito LED con resistencia; robot con motores y sensores", [["Microcontrolador", "chip que ejecuta un programa sin parar", "var(--ink)"], ["Arduino", "pines 0-13 y A0-A5 · setup() y loop()", "var(--pen)"], ["micro:bit", "25 LED · botones · acelerómetro · MakeCode", "var(--leaf)"], ["Circuito LED", "pin → 220 Ω → LED (pata larga) → GND", "var(--red)"], ["Robot", "placa + motores + controlador + sensores", "var(--inf)"]], 230),
  },
  video: { id: "FKekzzj5844", titulo: "Cómo hacer parpadear un LED con Arduino", canal: "Science Buddies", vistas: 623212, megusta: 0, busqueda: "arduino led parpadeo" },
  quiz: mezcla([
    { q: "Un microcontrolador es…", o: ["un ordenador pequeño en un solo chip", "un tipo de sensor", "un cable USB"], a: 0, e: "Procesador, memoria y E/S." },
    { q: "Arduino es un proyecto de…", o: ["hardware libre", "software de pago", "una consola"], a: 0, e: "Diseños públicos." },
    { q: "En Arduino, la función que se ejecuta una sola vez es…", o: ["setup()", "loop()", "delay()"], a: 0, e: "Configuración." },
    { q: "delay(1000) espera…", o: ["1 segundo", "1 minuto", "1 milisegundo"], a: 0, e: "1.000 ms." },
    { q: "analogRead devuelve en Arduino UNO un número entre…", o: ["0 y 1023", "0 y 1", "0 y 100"], a: 0, e: "10 bits." },
    { q: "La resistencia en serie con un LED sirve para…", o: ["limitar la corriente", "aumentar la luz", "cambiar el color"], a: 0, e: "Evita que se queme." },
    { q: "La pata larga del LED es el…", o: ["ánodo (+)", "cátodo (−)", "neutro"], a: 0, e: "Va hacia el positivo." },
    { q: "¿Cuántos LED tiene la matriz de la micro:bit?", o: ["25", "16", "64"], a: 0, e: "5 × 5." },
    { q: "El editor web por bloques de la micro:bit es…", o: ["MakeCode", "Arduino IDE", "Photoshop"], a: 0, e: "De Microsoft." },
    { q: "Para detectar que agitas la micro:bit se usa el…", o: ["acelerómetro", "sensor de luz", "botón B"], a: 0, e: "Movimiento e inclinación." },
  ]),
  examen: mezcla([
    { q: "Con INPUT_PULLUP, un pulsador pulsado se lee como…", o: ["LOW", "HIGH", "1023"], a: 0, e: "Baja a 0 V." },
    { q: "Para ver en el ordenador los valores de un sensor se usa el…", o: ["monitor serie", "simulador 3D", "protoboard"], a: 0, e: "Serial.println." },
    { q: "En la protoboard, los agujeros de una columna central están conectados de…", o: ["cinco en cinco", "uno en uno", "toda la placa"], a: 0, e: "Los carriles laterales, a lo largo." },
  ]),
  feynman: ["Qué es un microcontrolador y en qué se diferencia de un ordenador", "Cómo se monta un LED con su resistencia", "Qué hacen setup() y loop()", "Ventajas de la micro:bit para empezar"],
  mapa: mapa("PLACAS", "var(--eso)", [
    ["Arduino", "pines · C++", "var(--pen)"],
    ["micro:bit", "sensores · MakeCode", "var(--leaf)"],
    ["Circuito", "protoboard · 220 Ω", "var(--red)"],
    ["Robot", "motores · sensores", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Microcontrolador", "Ordenador en un chip que ejecuta un programa sin parar."],
    ["Pin", "Patilla de la placa para conectar entradas o salidas."],
    ["Protoboard", "Placa para montar circuitos sin soldar."],
    ["setup()", "Se ejecuta una vez al encender: configuración."],
    ["loop()", "Se repite sin fin."],
    ["digitalWrite", "Pone un pin a HIGH (5 V) o LOW (0 V)."],
    ["analogRead", "Lee una tensión como número de 0 a 1023."],
    ["MakeCode", "Editor por bloques de la micro:bit con simulador."],
  ],
  familias: ["Probad juntos el simulador web de MakeCode y cread un dado electrónico.", "Buscad en casa aparatos que podrían llevar un microcontrolador (microondas, lavadora, juguetes).", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Placas programables: microcontrolador, Arduino y micro:bit; pines digitales y analógicos; protoboard; programación de salidas y entradas; MakeCode; robots móviles básicos; seguridad eléctrica (RD 217/2022, programación y robótica).",
    ideas: ["Semáforo con tres LED en Arduino y pulsador de peatones.", "Dado y termómetro con micro:bit usando el simulador antes de la placa.", "Carrera de robots siguelíneas en el pasillo."],
  },
  fuentes: [RD, { t: "Micro:bit Educational Foundation: recursos en español", url: "https://microbit.org/es-es/" }, { t: "Arduino: documentación oficial", url: "https://docs.arduino.cc/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Montajes resueltos",
  ejemplos: [
    { enunciado: "Programa un semáforo con LED rojo (pin 10), ámbar (pin 9) y verde (pin 8): verde 5 s, ámbar 2 s, rojo 5 s.",
      pasos: ["setup: pinMode de 8, 9 y 10 como OUTPUT.", "loop: verde HIGH, delay(5000), verde LOW.", "ámbar HIGH, delay(2000), ámbar LOW.", "rojo HIGH, delay(5000), rojo LOW."],
      resultado: "Un ciclo de 12 segundos que se repite." },
    { enunciado: "Con la micro:bit, muestra un corazón al pulsar A y una carita al pulsar B.",
      pasos: ["al presionar botón A → mostrar ícono corazón.", "al presionar botón B → mostrar ícono carita feliz.", "Probar en el simulador y descargar el .hex."],
      resultado: "Dos eventos, sin montar nada." },
    { enunciado: "Una LDR en A0 da 820 de día y 140 de noche. Programa una luz nocturna.",
      pasos: ["luz = analogRead(A0).", "if (luz < 400) digitalWrite(8, HIGH);", "else digitalWrite(8, LOW);"],
      resultado: "Umbral intermedio calibrado con el monitor serie." },
  ],
  errores: [
    "Montar el LED al revés (pata larga a GND).",
    "Olvidar la resistencia del LED.",
    "No declarar el pin como OUTPUT en setup().",
    "Olvidar el delay y que el parpadeo sea tan rápido que no se vea.",
    "Escribir la instrucción con mayúsculas incorrectas: digitalwrite en lugar de digitalWrite.",
    "Modificar el circuito con la placa conectada.",
  ],
  ejercicios: [
    { q: "Nombra tres diferencias entre Arduino UNO y micro:bit.", sol: "Por ejemplo: micro:bit tiene sensores integrados; Arduino necesita protoboard; micro:bit se programa con MakeCode y Arduino con su IDE en C++." },
    { q: "¿Qué hace este código: digitalWrite(13, HIGH); delay(2000); digitalWrite(13, LOW); delay(2000);?", sol: "Enciende el LED del pin 13 dos segundos y lo apaga dos segundos, sin parar si está en loop()." },
    { q: "Dibuja el circuito para encender un LED desde el pin 7.", sol: "Pin 7 → resistencia 220 Ω → pata larga del LED → pata corta → GND." },
    { q: "¿Qué valor devolverá analogRead si la tensión es 2,5 V?", sol: "Aproximadamente 512 (la mitad de 1023)." },
    { q: "Modifica el «Blink» para que el LED parpadee 4 veces por segundo.", sol: "Cada ciclo dura 250 ms: delay(125) encendido y delay(125) apagado." },
    { q: "Escribe con bloques de MakeCode un termómetro que muestre la temperatura al pulsar A.", sol: "al presionar botón A → mostrar número (temperatura (°C))." },
    { q: "¿Por qué no se conecta un motor directamente a un pin de Arduino?", sol: "Porque necesita más corriente de la que da un pin; se usa un controlador de motores y alimentación aparte." },
    { q: "Explica qué es el hardware libre.", sol: "Hardware cuyos diseños son públicos y pueden estudiarse, modificarse y fabricarse libremente." },
    { q: "Diseña un juego de reflejos con micro:bit: gana quien pulse antes su botón cuando aparezca una imagen.", sol: "Esperar un tiempo al azar; mostrar imagen; al presionar A → mostrar «A gana»; al presionar B → mostrar «B gana»." },
    { q: "Describe un robot que esquive obstáculos: componentes y programa.", sol: "Placa, dos motores con controlador, batería, sensor de ultrasonidos; por siempre: si distancia < 15 cm, girar; si no, avanzar." },
  ],
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["Una placa que nació en un bar", `<p>En 2005, en la ciudad italiana de Ivrea, un grupo de profesores de un instituto de diseño tenía un problema: sus estudiantes, que no eran ingenieros, querían crear objetos interactivos (lámparas que reaccionan al sonido, ropa con luces, instalaciones artísticas), pero las placas electrónicas de la época eran caras y difíciles de programar. Decidieron crear la suya: barata, sencilla y, sobre todo, <b>libre</b>, con todos sus planos publicados para que cualquiera pudiera copiarla y mejorarla. La llamaron <b>Arduino</b>, como el bar donde solían reunirse.</p><p>Hoy hay millones de placas Arduino en institutos, universidades, talleres y empresas de todo el mundo. Con ellas se han construido estaciones meteorológicas, impresoras 3D, invernaderos automáticos, prótesis de bajo coste y satélites de bolsillo. Unos años después, la BBC creó la <b>micro:bit</b> y regaló una a cada alumno de 11-12 años del Reino Unido, para que toda una generación aprendiera a programar objetos reales.</p><p>En este tema aprenderás a usar estas dos placas: a montar circuitos en la protoboard, a programar entradas y salidas digitales y analógicas, a mover servomotores, a ver datos en el monitor serie, a comunicar placas por radio y a dar el salto del circuito al robot.</p>`],
  mas: [
    ["<h3>La protoboard y el primer circuito</h3>", `<p>Antes de conectar la placa al ordenador conviene revisar el montaje: que el LED tenga su resistencia (220 Ω es un valor habitual a 5 V), que la pata larga vaya hacia el pin y la corta hacia GND, que ningún cable una directamente 5 V con GND (sería un cortocircuito) y que cada componente tenga sus patas en columnas distintas. Cualquier cambio en el circuito se hace con la placa desconectada.</p>`],
    ["<h3>La placa micro:bit</h3>", `<p>La micro:bit se alimenta por el cable USB o con un portapilas de dos pilas AAA, y su programa se guarda en la placa: al desconectarla del ordenador sigue funcionando. Sus pines grandes (0, 1, 2, 3V y GND) admiten pinzas de cocodrilo, lo que permite conectar sensores, LED o servos sin soldar ni usar protoboard.</p>`],
    ["<h3>Del circuito al robot</h3>", `<p>Un robot de dos ruedas necesita un <b>controlador de motores</b> (puente H, como el L298N o el L9110), porque los pines solo dan unos miliamperios y los motores necesitan mucho más. El controlador recibe órdenes de la placa (dos pines por motor: adelante o atrás) y toma la energía de una batería aparte. Para regular la velocidad se usa una salida PWM. Es importante unir las masas (GND) de la placa y de la batería de los motores.</p>`],
  ],
  svgs: [
    ["<h3>Placas programables</h3>", "El microcontrolador", [["Procesador", "ejecuta el programa"], ["Memoria", "guarda el programa"], ["Pines", "entradas y salidas"]], "Un ordenador en un chip"],
    ["<h3>Programar Arduino: setup y loop</h3>", "Estructura de un sketch", [["setup()", "una vez: configurar pines"], ["loop()", "se repite sin fin"], ["Subir", "compilar y cargar por USB"]], "Las dos partes del programa"],
    ["<h3>Leer entradas: pulsadores y sensores</h3>", "Leer entradas", [["digitalRead", "HIGH o LOW"], ["analogRead", "de 0 a 1023"], ["INPUT_PULLUP", "pulsado = LOW"]], "Digital y analógica"],
    ["<h3>Programar la micro:bit con MakeCode</h3>", "MakeCode", [["Bloques", "como Scratch"], ["JavaScript y Python", "el mismo programa en texto"], ["Simulador", "probar sin la placa"]], "El editor de la micro:bit"],
    ["<h3>Del circuito al robot</h3>", "Partes de un robot móvil", [["Placa", "el cerebro"], ["Controlador de motores", "puente H"], ["Motores y ruedas", "movimiento"], ["Sensores", "ultrasonidos, infrarrojos"]], "Del circuito al robot"],
    ["<h3>Arduino o micro:bit: ¿cuál elegir?</h3>", "Arduino o micro:bit", [["Arduino", "montar circuitos y robots"], ["micro:bit", "todo integrado, empezar rápido"], ["Ambas", "entradas, programa, salidas"]], "¿Cuál elegir?"],
  ],
  bloques: [
    { tras: "<h3>Programar Arduino: setup y loop</h3>", html: `<h3>Variables, condiciones y funciones en Arduino</h3><p>Arduino se programa en un lenguaje basado en <b>C++</b>. Las variables se declaran indicando su tipo: <b>int</b> para enteros (int contador = 0;), <b>float</b> para decimales (float temperatura;), <b>bool</b> para verdadero o falso y <b>String</b> para textos. Es buena costumbre dar nombre a los pines con constantes al principio: const int LED_ROJO = 10; así, si se cambia la conexión, solo hay que modificar una línea.</p><p>Las estructuras de control son las mismas que en cualquier lenguaje: <b>if (condición) { … } else { … }</b> para decidir, <b>for (int i = 0; i &lt; 5; i++) { … }</b> para repetir un número de veces y <b>while (condición) { … }</b> para repetir mientras se cumpla algo. Las comparaciones usan == (igual), != (distinto), &lt;, &gt;, &lt;= y &gt;=, y las condiciones se combinan con && (y) y || (o). Se pueden crear <b>funciones</b> propias, como void parpadear(int veces) { … }, para no repetir código. Cada instrucción termina en punto y coma y los bloques van entre llaves: olvidar uno de estos signos es el error más frecuente al compilar.</p>`, svg: ["Arduino en C++", [["Variables", "int, float, bool"], ["Decidir", "if (…) { } else { }"], ["Repetir", "for, while"], ["Fin de instrucción", "punto y coma"]], "El lenguaje de Arduino"] },
    { tras: "<h3>Leer entradas: pulsadores y sensores</h3>", html: `<h3>El monitor serie: ver lo que piensa la placa</h3><p>La placa no tiene pantalla, pero puede enviar mensajes al ordenador por el cable USB. En setup() se inicia la comunicación con <b>Serial.begin(9600);</b> (9.600 bits por segundo) y en el programa se envían datos con <b>Serial.println(valor);</b>. En el entorno de Arduino, el <b>monitor serie</b> muestra esos mensajes en una ventana, y el <b>trazador serie</b> los dibuja como una gráfica que se actualiza en tiempo real.</p><p>Es la herramienta principal para <b>calibrar sensores</b>: se imprime el valor de la LDR con luz y a oscuras para elegir el umbral, o la distancia que mide el ultrasonidos para comprobar que es correcta. También sirve para <b>depurar</b>: imprimir mensajes como «entrando en el if» o el valor de una variable permite saber por dónde pasa el programa y por qué no hace lo esperado. El monitor serie también funciona al revés: se pueden escribir órdenes desde el ordenador y la placa las lee con Serial.read().</p>`, svg: ["El monitor serie", [["Iniciar", "Serial.begin(9600)"], ["Enviar", "Serial.println(valor)"], ["Usos", "calibrar y depurar"]], "La placa habla con el ordenador"] },
    { tras: "<h3>El monitor serie: ver lo que piensa la placa</h3>", html: `<h3>Salidas analógicas: PWM y brillo</h3><p>Los pines digitales solo dan 0 V o 5 V: encendido o apagado. ¿Cómo se consigue entonces que un LED brille a medias o que un motor gire despacio? Con la técnica <b>PWM</b> (modulación por ancho de pulsos): el pin se enciende y se apaga muy rápido, unas 500 veces por segundo, y lo que cambia es el porcentaje de tiempo que está encendido. Si está encendido la mitad del tiempo, el LED parece brillar a la mitad.</p><p>En Arduino UNO solo algunos pines admiten PWM: los marcados con el símbolo <b>~</b> (3, 5, 6, 9, 10 y 11). Se usa <b>analogWrite(pin, valor)</b>, con un valor de 0 (apagado) a 255 (máximo). Para hacer que un LED se encienda poco a poco se usa un bucle: for (int b = 0; b &lt;= 255; b++) { analogWrite(9, b); delay(10); }. Combinando la lectura de un potenciómetro (0-1023) con analogWrite (0-255) se regula el brillo o la velocidad girando un mando; para pasar de una escala a otra se divide entre 4 o se usa la función <b>map()</b>.</p>`, svg: ["PWM", [["Pines con ~", "3, 5, 6, 9, 10, 11"], ["analogWrite", "de 0 a 255"], ["map()", "0-1023 → 0-255"]], "Valores intermedios"] },
    { tras: "<h3>Salidas analógicas: PWM y brillo</h3>", html: `<h3>Servomotores y zumbadores</h3><p>Un <b>servomotor</b> es un motor con una pequeña reductora y un circuito de control que lo lleva a un <b>ángulo concreto</b>, normalmente entre 0° y 180°, y lo mantiene ahí. Es ideal para barreras, brazos robóticos, timones o para girar un sensor. Tiene tres cables: alimentación (rojo), masa (marrón o negro) y señal (naranja o amarillo), que va a un pin PWM. En Arduino se usa la biblioteca Servo: #include &lt;Servo.h&gt;, se crea el objeto Servo barrera;, en setup() se indica el pin con barrera.attach(9); y se mueve con <b>barrera.write(90);</b>.</p><p>Un <b>zumbador</b> (buzzer) emite sonidos. Los activos pitan con solo darles tensión; los pasivos pueden tocar notas con la función <b>tone(pin, frecuencia, duración)</b>: tone(8, 440, 500) toca un la de 440 Hz durante medio segundo, y noTone(8) lo calla. Con una lista de frecuencias y un bucle se programan melodías y alarmas. En la micro:bit, el servo se controla con «servo escribir pin P0 a 90» y el altavoz integrado toca notas con los bloques de música.</p>`, svg: ["Servo y zumbador", [["Servo", "ángulo de 0° a 180°"], ["Cables", "rojo, negro y señal"], ["Zumbador", "tone(pin, Hz, ms)"]], "Moverse y sonar"] },
    { tras: "<h3>Programar la micro:bit con MakeCode</h3>", html: `<h3>Proyectos conectados: la radio de la micro:bit</h3><p>Una de las funciones más interesantes de la micro:bit es su <b>radio</b>: varias placas pueden enviarse números, textos o pares nombre-valor sin cables, a unos metros de distancia. Todas deben estar en el mismo <b>grupo</b> («radio establecer grupo 1»). Una placa envía con «radio enviar número 5» y las demás reaccionan con el evento «al recibir radio número».</p><p>Con la radio se pueden hacer proyectos muy variados: un mando a distancia para un robot (una placa en la mano, que envía la inclinación, y otra en el robot que mueve los motores), un sistema de votación en clase, mensajes cifrados entre compañeros, un juego de «patata caliente» o una red de sensores que mide la temperatura en varias aulas y la envía a una placa central conectada al ordenador. También la intensidad de la señal recibida sirve para estimar si otra placa está cerca o lejos, como en un juego de búsqueda del tesoro. Para conectar con el móvil, la micro:bit usa Bluetooth.</p>`, svg: ["Radio de la micro:bit", [["Grupo", "radio establecer grupo 1"], ["Enviar", "número, texto o valor"], ["Recibir", "al recibir radio"], ["Ideas", "mando, votación, sensores"]], "Placas conectadas"] },
  ],
  videos: [["<h3>Programar Arduino: setup y loop</h3>", "semaforo"]],
  grupos: [3, 6, 3, 2],
  ejemplos: [
    ["Programa un LED en el pin 9 que se encienda y apague suavemente (efecto respiración).", ["for (int b = 0; b <= 255; b++) { analogWrite(9, b); delay(8); }", "for (int b = 255; b >= 0; b--) { analogWrite(9, b); delay(8); }", "Todo dentro de loop()."], "El brillo sube y baja continuamente gracias a PWM."],
    ["Una barrera de aparcamiento: al pulsar el botón del pin 2, el servo del pin 9 sube a 90°, espera 3 s y baja a 0°.", ["#include &lt;Servo.h&gt;; Servo barrera;", "setup(): barrera.attach(9); pinMode(2, INPUT_PULLUP); barrera.write(0);", "loop(): if (digitalRead(2) == LOW) { barrera.write(90); delay(3000); barrera.write(0); }"], "La barrera sube con el botón y baja sola a los 3 segundos."],
    ["Mando de robot con dos micro:bit: la del mando envía la inclinación; la del robot gira si es mayor de 300 o menor de −300.", ["Mando: para siempre: radio enviar número (aceleración x).", "Robot: al recibir radio número n: si n > 300: girar a la derecha; si n < −300: girar a la izquierda; si no: avanzar.", "Ambas en el mismo grupo de radio."], "El robot obedece a la inclinación del mando."],
  ],
  niveles: "bbbmbbbbam",
  ejercicios: [
    ["b", "¿Qué pines de Arduino UNO admiten PWM y cómo se reconocen?", "Los marcados con ~: 3, 5, 6, 9, 10 y 11."],
    ["b", "¿Qué rango de valores admite analogWrite? ¿Y qué devuelve analogRead?", "analogWrite: 0 a 255. analogRead: 0 a 1023."],
    ["b", "¿Para qué sirve el monitor serie?", "Para ver en el ordenador los mensajes y valores que envía la placa: calibrar sensores y depurar el programa."],
    ["b", "¿Qué diferencia hay entre un servomotor y un motor de corriente continua?", "El servo va a un ángulo concreto (0-180°) y se queda ahí; el motor de corriente continua gira sin parar."],
    ["b", "¿Qué deben tener en común dos micro:bit para comunicarse por radio?", "Estar en el mismo grupo de radio."],
    ["b", "¿Qué tipo de variable usarías en Arduino para guardar 23,5 °C? ¿Y para contar pulsaciones?", "float para 23,5; int para el contador."],
    ["m", "Escribe el código que lee un potenciómetro en A0 y regula el brillo de un LED en el pin 6.", "int v = analogRead(A0); analogWrite(6, v / 4); (o map(v, 0, 1023, 0, 255))."],
    ["m", "Escribe el código que muestra en el monitor serie el valor de una LDR cada medio segundo.", "setup(): Serial.begin(9600); loop(): Serial.println(analogRead(A0)); delay(500);"],
    ["m", "Programa un zumbador en el pin 8 que toque do, re y mi (262, 294 y 330 Hz) durante 0,3 s cada una.", "tone(8, 262, 300); delay(350); tone(8, 294, 300); delay(350); tone(8, 330, 300); delay(350);"],
    ["m", "¿Por qué se usan constantes como const int LED_ROJO = 10;?", "Para que el programa sea más legible y, si cambia la conexión, baste con cambiar una sola línea."],
    ["m", "Haz que un servo barra de 0° a 180° de 10 en 10 grados, como un radar.", "for (int a = 0; a <= 180; a += 10) { radar.write(a); delay(200); } y después el bucle inverso de 180 a 0."],
    ["m", "Explica qué es PWM con tus palabras.", "Encender y apagar el pin muy rápido; según el porcentaje de tiempo encendido, el LED o el motor reciben una potencia media mayor o menor y parecen brillar o girar a medias."],
    ["m", "Programa una votación con micro:bit: los alumnos pulsan A (sí) o B (no) y la placa central cuenta.", "Alumnos: al presionar A: radio enviar número 1; B: enviar 0. Central: al recibir n: si n = 1: síes + 1; si no: noes + 1. Al presionar A+B: mostrar síes y noes."],
    ["m", "Encuentra el error: void loop() { digitalWrite(13, HIGH) delay(500); }", "Falta el punto y coma tras digitalWrite(13, HIGH). Además, el LED nunca se apaga: falta digitalWrite(13, LOW); delay(500);"],
    ["m", "¿Qué es una biblioteca en Arduino? Pon un ejemplo.", "Un conjunto de funciones ya programadas que se añaden con #include, como Servo.h para controlar servomotores."],
    ["a", "Diseña una alarma de distancia: si el ultrasonidos mide menos de 20 cm, el zumbador pita más rápido cuanto más cerca está el objeto.", "Medir d. Si d < 20: tone(8, 1000, 50); delay(d · 10); (a menos distancia, menos espera entre pitidos). Si no: noTone(8). Mostrar d en el monitor serie para calibrar."],
    ["a", "Programa una función parpadear(pin, veces) en Arduino y úsala para que el LED del pin 13 parpadee 3 veces al pulsar el botón del pin 2.", "void parpadear(int pin, int veces) { for (int i = 0; i < veces; i++) { digitalWrite(pin, HIGH); delay(200); digitalWrite(pin, LOW); delay(200); } } En loop(): if (digitalRead(2) == LOW) parpadear(13, 3);"],
    ["a", "Diseña una red de sensores de temperatura con micro:bit en tres aulas y una placa central que muestre la más alta.", "Cada placa de aula: cada minuto, radio enviar valor «aula1», temperatura. Central: al recibir nombre y valor: guardar en variables por aula; mostrar el máximo y, si supera 26 °C, mostrar un aviso. Todas en el mismo grupo."],
    ["a", "Compara usar delay() y millis() para que un LED parpadee mientras se lee un botón. ¿Por qué es mejor millis()?", "delay() detiene el programa: durante la espera no se lee el botón. Con millis() se comprueba cuánto tiempo ha pasado y se cambia el LED solo cuando toca, sin detenerse, así el botón se lee siempre."],
    ["a", "Diseña un robot sigue-líneas con Arduino: componentes, conexiones y programa en pseudocódigo.", "Arduino, controlador L298N, dos motores con ruedas, dos sensores IR, batería. Sensores en pines 2 y 3; motores en 5, 6 (PWM) y 7, 8. Programa: leer izq y der; ambos blanco: avanzar; izq negro: girar izquierda; der negro: girar derecha; ambos negro: parar."],
  ],
  cuartas: ["una batería", "una impresora", "pinMode()", "1 hora", "0 y 255", "dar color", "emisor", "100", "Excel", "botón A", "nada", "procesador de textos", "en diagonal"],
  quiz: [
    ["En Arduino, las instrucciones terminan con…", ["un punto", "punto y coma", "dos puntos", "nada"], 1, "Punto y coma."],
    ["analogWrite admite valores de…", ["0 a 1023", "0 a 255", "0 a 100", "0 a 1"], 1, "PWM de 8 bits."],
    ["Los pines PWM de Arduino UNO se marcan con…", ["*", "~", "#", "+"], 1, "El símbolo ~."],
    ["Serial.begin(9600) sirve para…", ["iniciar el monitor serie", "encender un LED", "mover un servo", "leer un botón"], 0, "Comunicación con el ordenador."],
    ["Un servomotor gira…", ["sin parar", "a un ángulo de 0 a 180°", "solo con luz", "a 1000 rpm siempre"], 1, "Va a un ángulo y se queda."],
    ["tone(8, 440, 500) toca…", ["un la de 440 Hz medio segundo", "8 notas", "durante 440 s", "nada"], 0, "Frecuencia y duración."],
    ["Para comunicarse por radio, dos micro:bit deben…", ["tocarse", "estar en el mismo grupo", "tener el mismo programa", "estar en el ordenador"], 1, "Mismo grupo de radio."],
    ["Para regular la velocidad de un motor se usa…", ["digitalRead", "PWM", "Serial.println", "delay"], 1, "Potencia media."],
    ["Para controlar motores desde Arduino hace falta…", ["un controlador de motores", "una LDR", "un zumbador", "nada"], 0, "Puente H."],
    ["Una variable para guardar 21,7 °C en Arduino es de tipo…", ["int", "float", "bool", "char"], 1, "Decimal."],
  ],
  examen: [
    ["map(512, 0, 1023, 0, 255) devuelve aproximadamente…", ["512", "127", "255", "0"], 1, "La mitad de la escala."],
    ["barrera.write(90) lleva el servo a…", ["0°", "90°", "180°", "90 vueltas"], 1, "Ángulo indicado."],
    ["El trazador serie muestra los datos como…", ["texto", "una gráfica", "un sonido", "luces"], 1, "Gráfica en tiempo real."],
    ["En C++, «y» lógico se escribe…", ["||", "&&", "==", "!="], 1, "&&."],
    ["Arduino nació en…", ["Estados Unidos", "Italia", "Japón", "España"], 1, "En Ivrea, 2005."],
  ],
  tarjetas: [["PWM", "Encender y apagar muy rápido para lograr valores intermedios."], ["Monitor serie", "Ventana donde la placa envía mensajes al ordenador."], ["Servomotor", "Motor que va a un ángulo de 0 a 180°."], ["Radio de micro:bit", "Comunicación entre placas del mismo grupo."]],
  glosario: [
    ["Microcontrolador", "Ordenador pequeño en un solo chip."],
    ["Arduino", "Placa de hardware libre para prototipos."],
    ["micro:bit", "Placa educativa de la BBC."],
    ["Pin", "Patilla de conexión de entrada o salida."],
    ["Protoboard", "Placa para montar circuitos sin soldar."],
    ["Sketch", "Programa de Arduino."],
    ["setup()", "Función que se ejecuta una vez al empezar."],
    ["loop()", "Función que se repite sin fin."],
    ["digitalWrite", "Pone un pin en HIGH o LOW."],
    ["analogRead", "Lee un valor de 0 a 1023."],
    ["PWM", "Modulación por ancho de pulsos."],
    ["analogWrite", "Salida PWM de 0 a 255."],
    ["Monitor serie", "Comunicación de texto con el ordenador."],
    ["Servomotor", "Motor que se coloca en un ángulo."],
    ["Biblioteca", "Funciones ya programadas que se incluyen."],
    ["MakeCode", "Editor por bloques de la micro:bit."],
    ["Hardware libre", "Diseño electrónico con planos publicados."],
  ],
  situacion: { titulo: "Un aparcamiento automático", reto: "Diseñar y programar por parejas la maqueta de un aparcamiento con barrera de servo, semáforo de LED, sensor de presencia y contador de plazas libres, mostrando los datos en el monitor serie o en una micro:bit.", pasos: ["Definir el funcionamiento y dibujar el esquema de conexiones.", "Montar y probar por separado el semáforo, la barrera y el sensor.", "Calibrar el sensor de presencia con el monitor serie.", "Programar el conjunto con variables, condicionales y funciones.", "Construir la maqueta y probar casos: entrada, salida, aparcamiento lleno.", "Presentar el proyecto con su código comentado."], producto: "Maqueta funcional, esquema, código comentado y vídeo de demostración.", evaluacion: ["El circuito está bien montado y con sus resistencias.", "El sensor está calibrado y el umbral justificado.", "El programa usa variables, condicionales y funciones correctamente.", "El aparcamiento funciona en todos los casos de prueba."] },
  saberes: "sistemas de control programado con placas Arduino y micro:bit: entradas y salidas digitales y analógicas, PWM, servomotores, comunicación serie y por radio, montaje de prototipos y robótica.",
  familias: ["Pedid que os enseñen el semáforo o la barrera que han programado y que os expliquen qué hace cada línea."],
  minutos: 110,
});
