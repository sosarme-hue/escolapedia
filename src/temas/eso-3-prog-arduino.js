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
        ${t(155, 24, "pines digitales 0-13", { c: "var(--pen)", s: 10 })}${t(155, 166, "5V · GND · A0-A5", { c: "var(--pen)", s: 10 })}${t(160, 120, "microcontrolador", { c: "var(--ink)", s: 10 })}${t(31, 86, "USB", { c: "var(--muted)", s: 10 })}${t(220, 70, "13", { c: "var(--muted)", s: 9 })}`),
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
