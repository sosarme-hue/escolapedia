// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const M = 'font-family="ui-monospace, Menlo, Consolas, monospace"';

// Recuadro de código con líneas coloreadas: [texto, color].
const codigo = (x, y, w, lineas) => `<rect x="${x}" y="${y}" width="${w}" height="${lineas.length * 17 + 14}" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>` +
  lineas.map(([t, c], i) => `<text x="${x + 10}" y="${y + 22 + i * 17}" font-size="12" fill="${c || "var(--ink)"}" ${M} xml:space="preserve">${t.replace(/</g, "&lt;")}</text>`).join("");

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Programación",
  minutos: 40,
  objetivos: ["Representar un algoritmo con un diagrama de flujo", "Usar variables, condicionales, bucles y funciones", "Programar una placa microcontroladora para leer sensores y controlar actuadores"],
  claves: ["algoritmo", "diagrama de flujo", "variable", "condicional", "bucle", "función"],
  pregunta: {
    texto: "Las farolas de tu calle se encienden solas al anochecer. Si tuvieras que darles las instrucciones, ¿qué les dirías?",
    respuesta: "Algo así: <mark>repite siempre: mide la luz; si es menor que un umbral, enciende; si no, apaga</mark>. Acabas de escribir un <b>algoritmo</b> con un <b>bucle</b> y un <b>condicional</b>. Pasarlo a un lenguaje que entienda una placa como Arduino es <b>programar</b>.",
  },
  bloques: [
    {
      html: `<h3>Algoritmos y diagramas de flujo</h3><p>Un <b>algoritmo</b> es una secuencia ordenada y finita de pasos para resolver un problema. Antes de programar conviene dibujarlo con un <b>diagrama de flujo</b>: óvalos para el <b>inicio</b> y el <b>fin</b>, rectángulos para las <b>acciones</b>, rombos para las <mark>decisiones</mark> (sí/no) y paralelogramos para la <b>entrada y salida</b> de datos. Las flechas indican el orden.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo de la farola: leer luz, decidir si es menor que 300, encender o apagar y repetir">
        <defs><marker id="pg1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="95" y="10" width="70" height="22" rx="11" fill="var(--leaf)"/><text x="130" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>inicio</text>
        <path d="M100 44 H 170 L 160 64 H 90 Z" fill="var(--sun)"/><text x="130" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>leer luz</text>
        <path d="M130 76 L 170 98 L 130 120 L 90 98 Z" fill="var(--pen)"/><text x="130" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>luz &lt; 300</text>
        <rect x="16" y="132" width="70" height="24" rx="3" fill="var(--red)"/><text x="51" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>encender</text>
        <rect x="174" y="132" width="70" height="24" rx="3" fill="var(--muted)"/><text x="209" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>apagar</text>
        <g stroke="var(--muted)" stroke-width="2" fill="none" marker-end="url(#pg1)"><path d="M130 32 V 42"/><path d="M130 64 V 74"/><path d="M90 98 H 51 V 128"/><path d="M170 98 H 209 V 128"/><path d="M51 156 V 170 H 250 V 54 H 172"/></g>
        <g ${F} font-size="10" font-weight="700"><text x="66" y="92" fill="var(--leaf)">sí</text><text x="182" y="92" fill="var(--red)">no</text></g>
      </svg>`,
    },
    {
      html: `<h3>Variables y tipos de datos</h3><p>Una <b>variable</b> es una «caja» con nombre donde el programa <mark>guarda un dato</mark> que puede cambiar: la lectura de un sensor, un contador, una puntuación. Cada variable tiene un <b>tipo</b>: número entero (<code>int</code>), decimal (<code>float</code>), verdadero/falso (<code>bool</code>) o texto (<code>String</code>). Con ellas se hacen <b>operaciones</b> aritméticas (+, −, *, /) y <b>comparaciones</b> (&lt;, &gt;, ==, !=).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres cajas con nombre y valor: luz 512, on verdadero, temperatura 21,5">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["int luz", "512", "var(--pen)"], ["bool on", "true", "var(--leaf)"], ["float temp", "21.5", "var(--red)"]].map(([n, v, c], i) => `<rect x="${14 + i * 82}" y="56" width="70" height="56" rx="8" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${49 + i * 82}" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${M}>${v}</text><text x="${49 + i * 82}" y="134" text-anchor="middle" font-size="10" fill="var(--ink)" ${M}>${n}</text>`).join("")}
        <text x="130" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>tipo + nombre = valor</text>
      </svg>`,
    },
    {
      html: `<h3>Estructuras de control</h3><p>Los programas no siempre van en línea recta. El <b>condicional</b> <code>if … else</code> ejecuta unas instrucciones <mark>solo si se cumple una condición</mark>. Los <b>bucles</b> <mark>repiten</mark> instrucciones: <code>for</code> un número fijo de veces (parpadear 10 veces) y <code>while</code> mientras se cumpla una condición (esperar a que se pulse un botón). En Arduino, la función <code>loop()</code> ya es un bucle infinito.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Código con un bucle for que hace parpadear un LED diez veces">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${codigo(14, 22, 232, [["for (int i = 0; i < 10; i++) {", "var(--pen)"], ["  digitalWrite(13, HIGH);"], ["  delay(500);", "var(--muted)"], ["  digitalWrite(13, LOW);"], ["  delay(500);", "var(--muted)"], ["}", "var(--pen)"]])}
        <text x="130" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)" ${F}>repite 10 veces: enciende, espera, apaga</text>
      </svg>`,
    },
    {
      html: `<h3>Funciones</h3><p>Una <b>función</b> es un bloque de código con nombre que <mark>hace una tarea concreta</mark> y se puede llamar muchas veces. Así el programa queda más corto, ordenado y fácil de corregir. Pueden recibir <b>parámetros</b> (datos de entrada) y devolver un resultado. Por ejemplo, <code>parpadear(3)</code> podría encender y apagar un LED tres veces. Todo programa de Arduino tiene dos funciones obligatorias: <code>setup()</code>, que se ejecuta una vez al empezar, y <code>loop()</code>, que se repite sin fin.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura de un programa de Arduino con setup y loop">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${codigo(14, 14, 232, [["void setup() {", "var(--leaf)"], ["  pinMode(13, OUTPUT);"], ["}", "var(--leaf)"], ["void loop() {", "var(--red)"], ["  parpadear(3);"], ["  delay(2000);", "var(--muted)"], ["}", "var(--red)"]])}
        <g ${F} font-size="10" font-weight="700" text-anchor="end"><text x="240" y="36" fill="var(--leaf)">1 vez</text><text x="240" y="87" fill="var(--red)">siempre</text></g>
      </svg>`,
    },
    {
      html: `<h3>Programar una placa: entradas y salidas</h3><p>Una placa como <b>Arduino</b> o <b>micro:bit</b> tiene <b>pines</b> para conectar sensores y actuadores. Con <code>digitalRead()</code> se lee un pulsador (0 o 1) y con <code>analogRead()</code> un sensor analógico, que da un valor <mark>entre 0 y 1023</mark>. Con <code>digitalWrite()</code> se enciende o apaga un LED y con <code>analogWrite()</code> se regula su brillo o la velocidad de un motor. Se puede programar con <b>bloques</b> (mBlock, MakeCode) o con <b>texto</b> (lenguaje C++ de Arduino, Python).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Código de la farola automática que lee una LDR y enciende un LED si hay poca luz">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${codigo(14, 14, 232, [["int luz = analogRead(A0);", "var(--pen)"], ["if (luz < 300) {", "var(--red)"], ["  digitalWrite(13, HIGH);"], ["} else {", "var(--red)"], ["  digitalWrite(13, LOW);"], ["}", "var(--red)"]])}
        <text x="130" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>LDR en A0 · LED en el pin 13</text>
        <text x="130" y="166" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>la farola automática en 6 líneas</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las piezas de cualquier programa",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Variables, condicionales, bucles y funciones con un ejemplo cada uno">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Variables", "guardan datos", "int luz = 512;", "var(--pen)"], ["Condicional", "decide", "if (luz < 300)", "var(--red)"], ["Bucle", "repite", "for · while · loop", "var(--leaf)"], ["Función", "agrupa tareas", "parpadear(3);", "var(--sun)"]]
        .map(([n, d, e, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="64" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="104" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${d}</text>
          <text x="${89 + i * 154}" y="152" text-anchor="middle" font-size="12" fill="var(--ink)" ${M}>${e.replace(/</g, "&lt;")}</text>`).join("")}
    </svg>`,
  },
  video: { id: "EEKMPT_YcTI", titulo: "Cómo programar Arduino UNO desde cero", canal: "Johann Perez E", vistas: 849130, megusta: 0, busqueda: "programación arduino para principiantes" },
  quiz: [
    { q: "En un diagrama de flujo, ¿qué figura representa una decisión?", o: ["Rectángulo", "Rombo", "Óvalo"], a: 1, e: "El rombo tiene dos salidas: sí y no." },
    { q: "¿Qué es una variable?", o: ["Un error del programa", "Un espacio con nombre donde se guarda un dato", "Un tipo de sensor"], a: 1, e: "Su valor puede cambiar mientras el programa se ejecuta." },
    { q: "¿Qué estructura usarías para repetir algo 20 veces?", o: ["if", "for", "else"], a: 1, e: "El bucle for repite un número fijo de veces." },
    { q: "En Arduino, ¿qué función se ejecuta una sola vez al encender la placa?", o: ["loop()", "setup()", "delay()"], a: 1, e: "setup() configura los pines; loop() se repite sin fin." },
    { q: "¿Entre qué valores da la lectura analogRead() en Arduino UNO?", o: ["0 y 1", "0 y 1023", "0 y 100"], a: 1, e: "El conversor de 10 bits da 1024 valores posibles." },
  ],
  examen: [
    { q: "¿Qué tipo de dato usarías para guardar 21,5 °C?", o: ["int", "float", "bool"], a: 1, e: "float guarda números con decimales." },
    { q: "¿Qué hace digitalWrite(13, LOW)?", o: ["Enciende el pin 13", "Pone el pin 13 a 0 V (apagado)", "Lee el pin 13"], a: 1, e: "LOW = 0, apagado; HIGH = 1, encendido." },
    { q: "¿Para qué sirve dividir un programa en funciones?", o: ["Para que sea más lento", "Para reutilizar código y que esté más ordenado", "Para que no se pueda leer"], a: 1, e: "Una función bien nombrada se llama cuantas veces haga falta." },
  ],
  feynman: ["Qué es un algoritmo, con un ejemplo de la vida diaria", "Los símbolos de un diagrama de flujo", "Para qué sirven las variables y sus tipos", "La diferencia entre un condicional y un bucle", "Cómo lee un sensor y controla un LED una placa Arduino"],
  mapa: mapa("PROGRAMACIÓN", "var(--eso)", [
    ["Algoritmo", "pasos · diagrama de flujo", "var(--ink)"],
    ["Datos", "variables · int · float · bool", "var(--pen)"],
    ["Control", "if · for · while · funciones", "var(--red)"],
    ["Placa", "setup · loop · leer · escribir", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es un algoritmo?", "Una secuencia ordenada y finita de pasos para resolver un problema."],
    ["Símbolo de decisión en un diagrama de flujo", "El rombo, con salidas sí y no."],
    ["Diferencia entre for y while", "for repite un número fijo de veces; while repite mientras se cumpla una condición."],
    ["Funciones obligatorias en Arduino", "setup() (una vez) y loop() (se repite siempre)."],
    ["¿Qué hace analogRead()?", "Lee un sensor analógico y devuelve un valor entre 0 y 1023."],
  ],
  familias: ["Escribid juntos el «algoritmo» de una receta sencilla con condicionales («si la masa está seca, añade agua»).", "Probad un editor de bloques online (MakeCode) y programad un LED que parpadee.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Pensamiento computacional, programación y robótica: algoritmos, diagramas de flujo, estructuras de control y programación de sistemas microcontroladores (RD 217/2022, Tecnología 4º).",
    ideas: ["Programar un semáforo con Arduino primero por bloques y después en texto.", "Simular placas en Tinkercad Circuits o Wokwi sin necesidad de material.", "Reto: cada equipo diseña el diagrama de flujo de otro y lo programa."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Referencia del lenguaje Arduino (en inglés)", url: "https://docs.arduino.cc/language-reference/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Usar bucles, condiciones compuestas y operadores en programas", "Probar y depurar programas que controlan una placa con sensores y actuadores"],
  tras: {
    "Variables y tipos de datos": [
      { html: `<h3>Operadores</h3><p>Los programas calculan y comparan con <b>operadores</b>. Los <b>aritméticos</b> hacen cuentas: + (suma), − (resta), * (multiplicación), / (división) y % (resto de la división; 7 % 3 da 1, útil para saber si un número es par). Los de <b>comparación</b> dan verdadero o falso: == (igual), != (distinto), &lt;, &gt;, &lt;= y &gt;=. Ojo: un solo = <mark>asigna</mark> un valor a una variable (x = 5), y dos == <mark>comparan</mark> (¿x == 5?). Los <b>lógicos</b> combinan condiciones: <b>Y</b> (&amp;&amp;, las dos deben cumplirse), <b>O</b> (||, basta una) y <b>NO</b> (!, invierte). Por ejemplo: «si hay poca luz Y hay alguien en la sala, enciende la lámpara».</p>${AMP.tabla(["Operador", "Significado", "Ejemplo", "Resultado"], [["%", "resto", "10 % 4", "2"], ["==", "igual a", "3 == 3", "verdadero"], ["!=", "distinto de", "3 != 5", "verdadero"], ["&amp;&amp;", "y", "(5 > 3) &amp;&amp; (2 > 4)", "falso"], ["||", "o", "(5 > 3) || (2 > 4)", "verdadero"]])}` },
    ],
    "Estructuras de control": [
      { html: `<h3>Los bucles en detalle</h3><p>Un bucle <b>for</b> se usa cuando sabemos cuántas veces repetir. Tiene tres partes: un valor inicial del contador, una condición para seguir y un incremento. <code>for (int i = 0; i &lt; 5; i++)</code> repite 5 veces, con i valiendo 0, 1, 2, 3 y 4. Un bucle <b>while</b> («mientras») repite <mark>mientras se cumpla una condición</mark>, sin saber de antemano cuántas veces: «mientras no se pulse el botón, haz parpadear el LED». Hay que asegurarse de que la condición acabe siendo falsa; si no, el programa queda atrapado en un <b>bucle infinito</b>. En Arduino, la función loop() es en sí misma un bucle infinito que repite el programa principal sin parar.</p>`, video: { id: "yBjaS-REYUc", titulo: "El bucle FOR (estructura repetitiva)", canal: "Eliezer De León", vistas: 228065 } },
    ],
    "Programar una placa: entradas y salidas": [
      { html: `<h3>Del programa a la placa</h3><p>Para programar una placa como Arduino se escribe el código en un entorno de programación (el <b>IDE</b> de Arduino) o con bloques (mBlock, Arduinoblocks, Tinkercad). El programa se <b>compila</b>, es decir, se traduce al lenguaje que entiende el microcontrolador, y se <b>sube</b> a la placa por el cable USB. Todo programa tiene dos partes: <b>setup()</b>, que se ejecuta una vez al principio para configurar los pines como entradas o salidas, y <b>loop()</b>, que se repite sin fin. Para ver qué está pasando dentro se usa el <mark>monitor serie</mark>: con <code>Serial.println(valor)</code> la placa envía al ordenador el valor de una variable, lo que ayuda mucho a encontrar errores. Antes de montar, conviene simular el circuito en Tinkercad Circuits.</p>`, video: { id: "L18nta4pRv8", titulo: "Curso Arduino #3: cómo subir un programa a la placa", canal: "WinterElectro", vistas: 176773 } },
      { html: `<h3>Probar y depurar</h3><p>Un programa casi nunca funciona a la primera. Los errores de <b>sintaxis</b> (un punto y coma olvidado, una llave sin cerrar, una mayúscula mal puesta: <code>digitalwrite</code> en vez de <code>digitalWrite</code>) los detecta el compilador y no deja subir el programa. Los errores de <b>lógica</b> son más difíciles: el programa funciona pero hace otra cosa, por ejemplo porque usamos &gt; en vez de &lt; o el pin equivocado. Para encontrarlos: probar con casos sencillos, mostrar las variables en el monitor serie, <mark>comprobar el circuito</mark> (muchos fallos son cables mal conectados o un LED al revés) y cambiar una sola cosa cada vez. Escribir <b>comentarios</b> (// así) en el código ayuda a entenderlo después.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "¿Qué valores muestra este bucle? for (int i = 2; i <= 10; i = i + 2) Serial.println(i);", pasos: ["Empieza en i = 2.", "Mientras i <= 10, muestra i y le suma 2.", "Valores: 2, 4, 6, 8, 10. Con i = 12 la condición es falsa y para."], resultado: "Muestra 2, 4, 6, 8 y 10 (cinco valores)." },
    { enunciado: "Escribe la condición para encender un ventilador si la temperatura supera 28 °C o si se pulsa un botón.", pasos: ["Condición 1: temperatura > 28.", "Condición 2: botón == HIGH (pulsado).", "Basta una de las dos: operador O (||)."], resultado: "if (temperatura > 28 || boton == HIGH) { encender ventilador }" },
    { enunciado: "Un programa debe hacer parpadear un LED 3 veces cada vez que se pulsa un botón. Escríbelo en pseudocódigo.", pasos: ["En setup: pin del LED como salida y pin del botón como entrada.", "En loop: leer el botón.", "Si está pulsado: repetir 3 veces (encender, esperar 300 ms, apagar, esperar 300 ms)."], resultado: "loop: si botón pulsado → para i de 1 a 3: LED on, espera, LED off, espera." },
  ],
  errores: [
    "Usar = (asignar) en vez de == (comparar) dentro de un if.",
    "Olvidar el punto y coma al final de una instrucción o una llave de cierre.",
    "Escribir mal las mayúsculas: el lenguaje distingue digitalWrite de digitalwrite.",
    "Crear un bucle while cuya condición nunca deja de cumplirse (bucle infinito).",
    "Olvidar configurar el pin con pinMode en setup().",
    "Usar una variable entera (int) para guardar un número con decimales.",
  ],
  ejercicios: [
    { q: "¿Qué tipo de dato usarías para guardar: el número de vidas, la temperatura con decimales, si la puerta está abierta y el nombre del jugador?", sol: "int, float, bool (boolean) y String." },
    { q: "Calcula: 17 % 5, 20 % 4 y 9 / 2 con enteros.", sol: "17 % 5 = 2; 20 % 4 = 0; 9 / 2 con enteros = 4 (se pierde la parte decimal)." },
    { q: "¿Es verdadera o falsa (x > 3) && (x < 10) si x = 12?", sol: "Falsa: la primera es verdadera pero la segunda no, y && exige las dos." },
    { q: "¿Cuántas veces se repite for (int i = 0; i < 8; i++)?", sol: "8 veces (i = 0 a 7)." },
    { q: "Escribe un bucle for que muestre los números del 10 al 1 hacia atrás.", sol: "for (int i = 10; i >= 1; i--) { Serial.println(i); }" },
    { q: "¿Qué diferencia hay entre for y while?", sol: "for se usa cuando se sabe cuántas veces repetir; while repite mientras se cumpla una condición, sin saber de antemano cuántas veces." },
    { q: "Explica qué hacen setup() y loop() en Arduino.", sol: "setup() se ejecuta una vez al principio para configurar; loop() se repite indefinidamente con el programa principal." },
    { q: "Escribe una función que reciba un número y devuelva su doble.", sol: "int doble(int n) { return n * 2; }" },
    { q: "Un LED no se enciende aunque el programa compila. Indica tres posibles causas.", sol: "El LED está conectado al revés, el número de pin del programa no coincide con el del circuito o falta configurar el pin como salida (también un cable suelto)." },
    { q: "Escribe en pseudocódigo un programa que encienda un LED si la lectura de una LDR es menor que 300 y lo apague si no.", sol: "loop: luz = leer A0; si luz < 300 → LED encendido; si no → LED apagado." },
  ],
  quiz: [
    { q: "En programación, == significa…", o: ["asignar", "comparar si son iguales", "sumar"], a: 1, e: "Un solo = asigna." },
    { q: "10 % 3 vale…", o: ["1", "3", "3,33"], a: 0, e: "Es el resto de 10 / 3." },
    { q: "El operador && es verdadero si…", o: ["se cumple al menos una condición", "se cumplen las dos", "no se cumple ninguna"], a: 1, e: "Es el Y lógico." },
    { q: "Un bucle que nunca termina se llama…", o: ["bucle infinito", "función", "variable"], a: 0, e: "Su condición nunca es falsa." },
    { q: "Para ver el valor de una variable desde la placa se usa…", o: ["el monitor serie", "un servomotor", "un relé"], a: 0, e: "Serial.println(valor)." },
  ],
  tarjetas: [
    ["Diferencia entre = y ==", "= asigna un valor; == compara."],
    ["Bucle while", "Repite mientras se cumpla una condición."],
    ["Monitor serie", "Ventana donde la placa envía datos al ordenador; útil para depurar."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Treinta líneas que salvaron una cosecha",
    html: `<p>Un grupo de alumnos de un instituto rural se dio cuenta de que el huerto escolar se secaba cada verano porque nadie podía regarlo en vacaciones. Con una placa Arduino, un sensor de humedad del suelo, un relé y una pequeña bomba de agua escribieron un programa de unas treinta líneas: leer la humedad, compararla con un umbral, regar unos segundos si la tierra estaba seca y esperar. Ese septiembre, las tomateras seguían vivas.</p>
      <p>Programar es dar a una máquina instrucciones tan precisas que pueda ejecutarlas sola. En Tecnología, la programación sale de la pantalla y llega al mundo físico: enciende luces, mueve motores, lee sensores y toma decisiones. En este tema repasarás algoritmos, variables y operadores, aprenderás a usar vectores, condiciones múltiples y funciones, descubrirás cómo controlar el tiempo sin bloquear la placa y cómo comunicarse con ella, y programarás proyectos completos como un semáforo o un sistema de riego. Verás que un buen programa no es el más largo, sino el que es claro, fiable y fácil de mejorar.</p>`,
  },
  svgs: {
    "Operadores": L.rejilla("Operadores de programación por tipo", ["Tipo", "Operadores", "Ejemplo"], [["Aritméticos", "+ − * / %", "17 % 5 = 2"], ["Comparación", "== != < > <= >=", "x >= 10"], ["Lógicos", "&& || !", "a && b"], ["Asignación", "= += ++", "i++"]], { t: "Operadores" }),
    "Los bucles en detalle": L.cajas("Partes de un bucle for", [["Inicio", "int i = 0"], ["Condición", "i < 10"], ["Incremento", "i++"], ["Cuerpo", "lo que|se repite"]], { t: "for (inicio; condición; incremento)" }),
    "Del programa a la placa": L.flujo("Pasos para cargar un programa en Arduino", ["Escribir el código en el IDE", "Verificar y compilar", "Conectar la placa por USB", "Elegir placa y puerto", "Subir y probar"], { t: "Del código a la placa" }),
    "Probar y depurar": L.cajas("Tipos de errores de un programa", [["Sintaxis", "falta ; o llave|no compila"], ["Lógica", "compila pero|hace otra cosa"], ["Ejecución", "valores imposibles|o se cuelga"], ["Montaje", "cable o pin|equivocado"]], { t: "Tipos de errores" }),
  },
  tras: {
    "Algoritmos y diagramas de flujo": [
      {
        html: `<h3>Lenguajes de programación</h3><p>El procesador solo entiende el <b>código máquina</b>: secuencias de ceros y unos que indican operaciones muy simples. Escribir así sería larguísimo, así que usamos <b>lenguajes de programación</b>. Los de <b>bajo nivel</b>, como el ensamblador, están muy cerca del hardware: son rápidos, pero difíciles de leer. Los de <b>alto nivel</b>, como C++, Python, Java o JavaScript, se parecen más al lenguaje humano y sirven para cualquier procesador. Los lenguajes por <b>bloques</b> (Scratch, mBlock, MakeCode) evitan los errores de escritura y son ideales para empezar.</p>
          <p>Para que el ordenador ejecute un programa de alto nivel hay que traducirlo. Un <b>compilador</b> traduce todo el programa de una vez a código máquina antes de ejecutarlo (C++ en Arduino): el resultado es rápido, pero cada cambio exige volver a compilar. Un <b>intérprete</b> traduce y ejecuta línea a línea mientras el programa funciona (Python, JavaScript): es más cómodo para probar, aunque algo más lento. Cada lenguaje tiene su <mark>sintaxis</mark>, sus reglas de escritura: en C++ las instrucciones terminan en punto y coma y los bloques van entre llaves; en Python se usa la sangría. La lógica, en cambio, es la misma en todos: secuencia, decisión y repetición.</p>`,
        svg: L.capas("Niveles de los lenguajes de programación", [["Bloques", "Scratch, mBlock"], ["Alto nivel", "C++, Python, JS"], ["Ensamblador", "bajo nivel"], ["Código máquina", "ceros y unos"]], { t: "De los bloques al hardware" }),
      },
    ],
    "Variables y tipos de datos": [
      {
        html: `<h3>Vectores (arrays)</h3><p>Si un semáforo tiene tres LED en las patillas 11, 12 y 13, podríamos crear tres variables, pero es más práctico un <b>vector</b> o <i>array</i>: una lista de datos del mismo tipo con un solo nombre. En C++ se declara así: <code>int leds[3] = {11, 12, 13};</code>. Cada elemento se identifica por su <b>índice</b>, que <mark>empieza en 0</mark>: <code>leds[0]</code> vale 11 y <code>leds[2]</code> vale 13. Intentar leer <code>leds[3]</code> es un error, porque ese elemento no existe, y en Arduino no avisa: devuelve un valor sin sentido.</p>
          <p>La gran ventaja de los vectores es que se recorren con un bucle: <code>for (int i = 0; i &lt; 3; i++) { pinMode(leds[i], OUTPUT); }</code> configura los tres LED con una sola instrucción repetida. También sirven para guardar varias lecturas de un sensor y calcular su media, lo que reduce el «ruido» de las medidas; para almacenar las notas de una melodía y sus duraciones; o para guardar los ángulos de un brazo robótico en una secuencia de movimientos. Los textos, por cierto, también son vectores: de caracteres.</p>`,
        svg: L.rejilla("Vector de patillas de LED con sus índices", ["Índice", "0", "1", "2"], [["Valor", "11", "12", "13"], ["Acceso", "leds[0]", "leds[1]", "leds[2]"], ["LED", "rojo", "ámbar", "verde"]], { t: "int leds[3] = {11, 12, 13};" }),
      },
    ],
    "Los bucles en detalle": [
      {
        html: `<h3>Condiciones múltiples: else if y switch</h3><p>Muchas veces hay más de dos caminos. Con <code>if … else if … else</code> se encadenan condiciones que se comprueban en orden; en cuanto una se cumple, se ejecuta su bloque y se ignoran las demás. Por ejemplo, con un sensor de temperatura: si supera 30 °C, ventilador al máximo; <i>si no</i>, si supera 25 °C, ventilador a media velocidad; <i>en cualquier otro caso</i>, apagado. El <mark>orden importa</mark>: si se comprobara primero «más de 25», una temperatura de 32 °C entraría ahí y nunca llegaría a la condición de 30.</p>
          <p>Cuando una variable entera puede tomar varios valores concretos, es más claro usar <code>switch</code>: <code>switch (modo) { case 1: … break; case 2: … break; default: … }</code>. Cada <code>case</code> es un valor posible y <code>default</code> recoge los demás. Hay que acordarse del <code>break</code>: sin él, el programa sigue ejecutando el caso siguiente. Es muy útil para menús, para los botones de un mando a distancia o para las máquinas de estados de un robot, en las que una variable <code>estado</code> indica qué está haciendo el sistema en cada momento.</p>`,
        svg: L.flujo("Condiciones encadenadas para controlar un ventilador según la temperatura", ["¿Temperatura > 30 °C?  sí → máximo", "si no, ¿> 25 °C?  sí → medio", "en otro caso → apagado", "Se ejecuta solo un camino", "Orden: de la más exigente a la menos"], { t: "if … else if … else" }),
      },
    ],
    "Funciones": [
      {
        html: `<h3>Controlar el tiempo sin bloquear: millis()</h3><p>La función <code>delay(1000)</code> detiene el programa un segundo. Es cómoda, pero mientras espera la placa <mark>no hace nada más</mark>: no lee pulsadores ni sensores. Si un LED parpadea con <code>delay</code> y a la vez queremos detectar un botón, muchas pulsaciones se perderán. La alternativa es <code>millis()</code>, que devuelve los milisegundos transcurridos desde que se encendió la placa, sin detener nada.</p>
          <p>La técnica consiste en guardar el momento del último cambio y comprobar en cada vuelta del <code>loop</code> si ha pasado el tiempo deseado: <code>if (millis() - anterior &gt;= 500) { anterior = millis(); cambiarLED(); }</code>. Así el <code>loop</code> sigue girando miles de veces por segundo y puede atender varias tareas «a la vez»: hacer parpadear dos LED a ritmos distintos, leer sensores y responder a botones. Como <code>millis()</code> crece mucho, se guarda en una variable de tipo <code>unsigned long</code>. Esta forma de programar, por eventos de tiempo en lugar de esperas, es la que usan los sistemas reales: una lavadora o un microondas nunca se quedan sordos mientras esperan.</p>`,
        svg: L.comparar("delay frente a millis para controlar el tiempo", ["delay()", ["detiene la placa", "no lee sensores", "fácil de usar", "pierde pulsaciones"]], ["millis()", ["no detiene nada", "varias tareas", "compara tiempos", "unsigned long"]]),
      },
    ],
    "Del programa a la placa": [
      {
        html: `<h3>Comunicación serie</h3><p>La placa y el ordenador se comunican por el cable USB mediante la <b>comunicación serie</b>, que envía los datos bit a bit, uno detrás de otro. En <code>setup()</code> se inicia con <code>Serial.begin(9600)</code>, donde 9600 es la velocidad en <b>baudios</b> (bits por segundo), que debe coincidir en la placa y en el <b>monitor serie</b>. Con <code>Serial.print()</code> y <code>Serial.println()</code> la placa envía texto y valores al ordenador: es la mejor herramienta para ver qué está pasando dentro del programa.</p>
          <p>La comunicación también funciona al revés: con <code>Serial.available()</code> se comprueba si han llegado datos y con <code>Serial.read()</code> se leen, de modo que se pueden enviar órdenes desde el teclado («e» para encender, «a» para apagar). El <b>trazador serie</b> dibuja gráficas en tiempo real de las lecturas, ideal para calibrar un sensor. Existen otros protocolos para conectar sensores y pantallas: <b>I2C</b>, que usa solo dos cables para muchos dispositivos, y <b>SPI</b>, más rápido. Con módulos Bluetooth o wifi (como la placa ESP32), la misma idea permite controlar un proyecto desde el móvil o enviar sus datos a Internet: el primer paso hacia el Internet de las cosas.</p>`,
        svg: L.flujo("Comunicación serie entre la placa y el ordenador", ["Serial.begin(9600)", "La placa mide un sensor", "Serial.println(valor)", "El monitor serie lo muestra", "El usuario envía una orden"], { t: "Hablar con la placa" }),
      },
      {
        html: `<h3>Un proyecto completo: el semáforo con pulsador</h3><p>Veamos cómo se organiza un programa real. Un semáforo de peatones tiene tres LED para coches (rojo, ámbar y verde), dos para peatones y un pulsador. <b>Análisis</b>: normalmente los coches tienen verde; cuando un peatón pulsa, tras unos segundos el semáforo de coches pasa a ámbar y luego a rojo, los peatones tienen verde 10 segundos, su verde parpadea y todo vuelve al principio. <b>Diseño</b>: se dibuja el diagrama de flujo y se definen los estados: «coches», «ámbar», «peatones», «parpadeo».</p>
          <p><b>Programación</b>: las patillas se guardan en <mark>constantes con nombre</mark> (<code>const int ROJO = 13;</code>), así el código se entiende y, si se cambia un cable, solo hay que tocar una línea. Cada fase se escribe como una función (<code>fasePeatones()</code>), y el <code>loop</code> solo lee el pulsador y llama a la función que toca. <b>Pruebas</b>: se comprueba cada LED, después el pulsador mostrando su estado en el monitor serie y, al final, la secuencia completa, cronometrando los tiempos. Esta forma de trabajar, analizar, diseñar, programar por partes y probar, es la misma que siguen los equipos profesionales de software.</p>`,
        svg: L.ciclo("Ciclo de estados de un semáforo con pulsador", "semáforo", ["verde coches", "ámbar", "verde peatones", "parpadeo"]),
      },
    ],
  },
  secciones: [5, 5, 5],
  niveles: "bbbbmbbmmm",
  ejercicios: [
    { nivel: "básico", q: "¿Qué diferencia hay entre un compilador y un intérprete?", sol: "El compilador traduce todo el programa a código máquina antes de ejecutarlo; el intérprete traduce y ejecuta línea a línea mientras funciona." },
    { nivel: "básico", q: "En int notas[5] = {7, 4, 9, 6, 8}; ¿cuánto vale notas[2]? ¿Y cuál es el último índice válido?", sol: "notas[2] vale 9 (los índices empiezan en 0). El último índice válido es 4." },
    { nivel: "básico", q: "¿Para qué sirve Serial.begin(9600)?", sol: "Inicia la comunicación serie entre la placa y el ordenador a 9.600 baudios (bits por segundo)." },
    { nivel: "básico", q: "¿Qué hace la instrucción break dentro de un switch?", sol: "Termina el caso actual y sale del switch; sin ella el programa seguiría ejecutando el caso siguiente." },
    { nivel: "básico", q: "¿Qué devuelve la función millis()?", sol: "Los milisegundos que han pasado desde que se encendió o reinició la placa." },
    { nivel: "básico", q: "Pon un ejemplo de lenguaje de bajo nivel, uno de alto nivel y uno por bloques.", sol: "Bajo nivel: ensamblador. Alto nivel: C++ o Python. Bloques: Scratch, mBlock o MakeCode." },
    { nivel: "medio", q: "Escribe un bucle que configure como salida las patillas guardadas en int leds[4] = {8, 9, 10, 11};", sol: "for (int i = 0; i < 4; i++) {\n  pinMode(leds[i], OUTPUT);\n}" },
    { nivel: "medio", q: "Escribe con else if: si la luz (0-1023) es menor que 200, «noche»; si es menor que 600, «nublado»; si no, «sol».", sol: "if (luz < 200) {\n  Serial.println(\"noche\");\n} else if (luz < 600) {\n  Serial.println(\"nublado\");\n} else {\n  Serial.println(\"sol\");\n}" },
    { nivel: "medio", q: "¿Por qué fallaría este orden: if (t > 25) {medio} else if (t > 30) {máximo}?", sol: "Una temperatura de 32 °C cumple ya t > 25 y entra en «medio»; la condición t > 30 nunca se alcanza. Hay que poner primero la más exigente." },
    { nivel: "medio", q: "Escribe un switch que, según la variable modo (1, 2 o 3), encienda el LED rojo, ámbar o verde, y apague todo en otro caso.", sol: "switch (modo) {\n  case 1: digitalWrite(ROJO, HIGH); break;\n  case 2: digitalWrite(AMBAR, HIGH); break;\n  case 3: digitalWrite(VERDE, HIGH); break;\n  default: apagarTodo();\n}" },
    { nivel: "medio", q: "Explica por qué un programa con delay(5000) dentro del loop no detecta bien un pulsador.", sol: "Durante los 5 segundos de espera la placa no ejecuta nada más; si el pulsador se pulsa y se suelta en ese tiempo, nunca se lee." },
    { nivel: "medio", q: "Calcula la media de 10 lecturas de A0 usando un bucle.", sol: "long suma = 0;\nfor (int i = 0; i < 10; i++) {\n  suma = suma + analogRead(A0);\n  delay(10);\n}\nint media = suma / 10;" },
    { nivel: "medio", q: "¿Por qué conviene usar const int ROJO = 13; en lugar de escribir 13 en todo el programa?", sol: "El código se entiende mejor (ROJO dice qué es) y si se cambia el LED de patilla solo hay que modificar una línea." },
    { nivel: "medio", q: "Escribe el programa que encienda el LED 13 si se recibe «e» por el monitor serie y lo apague si se recibe «a».", sol: "void loop() {\n  if (Serial.available() > 0) {\n    char c = Serial.read();\n    if (c == 'e') digitalWrite(13, HIGH);\n    if (c == 'a') digitalWrite(13, LOW);\n  }\n}" },
    { nivel: "medio", q: "¿Qué ventaja tiene el protocolo I2C para conectar muchos sensores?", sol: "Solo necesita dos cables (datos y reloj) compartidos por todos los dispositivos, cada uno con su dirección, lo que ahorra patillas de la placa." },
    { nivel: "medio", q: "Traza este código y di qué muestra: int x = 0; for (int i = 1; i <= 4; i++) { x = x + i * i; } Serial.println(x);", sol: "Suma 1 + 4 + 9 + 16 = 30. Muestra 30." },
    { nivel: "avanzado", q: "Escribe un programa que haga parpadear el LED 13 cada 500 ms con millis(), sin delay.", sol: "unsigned long anterior = 0;\nbool estado = false;\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (millis() - anterior >= 500) {\n    anterior = millis();\n    estado = !estado;\n    digitalWrite(13, estado);\n  }\n}" },
    { nivel: "avanzado", q: "Programa una melodía: guarda 4 notas en un vector y sus duraciones en otro y tócalas con tone() en la patilla 8.", sol: "int notas[4] = {262, 294, 330, 349};\nint dur[4] = {300, 300, 300, 600};\nvoid setup() {\n  for (int i = 0; i < 4; i++) {\n    tone(8, notas[i], dur[i]);\n    delay(dur[i] + 50);\n  }\n}\nvoid loop() {}" },
    { nivel: "avanzado", q: "Escribe una función que devuelva true si la temperatura está entre 18 y 24 °C (ambos incluidos).", sol: "bool confortable(float t) {\n  return t >= 18 && t <= 24;\n}" },
    { nivel: "avanzado", q: "Diseña la máquina de estados del semáforo con pulsador: estados, qué hace cada uno y qué provoca el cambio.", sol: "COCHES: verde coches, rojo peatones; si se pulsa → ÁMBAR. ÁMBAR: 3 s → PEATONES. PEATONES: verde peatones 10 s → PARPADEO. PARPADEO: verde peatones parpadea 4 s → COCHES." },
    { nivel: "avanzado", q: "Dos LED deben parpadear a la vez, uno cada 300 ms y otro cada 700 ms. Explica por qué es imposible con delay y cómo hacerlo con millis.", sol: "Con delay el programa espera a uno y bloquea al otro. Con millis se usan dos variables de tiempo (anterior1, anterior2): en cada vuelta del loop se comprueba por separado si han pasado 300 ms o 700 ms y se cambia solo el LED que toca." },
    { nivel: "avanzado", q: "Un sensor da lecturas que saltan mucho (ruido). Propón dos soluciones de programación.", sol: "Hacer la media de varias lecturas con un vector o un acumulador; usar histéresis en la decisión (dos umbrales distintos para encender y apagar) para que no cambie por pequeñas variaciones." },
    { nivel: "avanzado", q: "Programa el riego del huerto: si la humedad (A0) es menor que 400, activa el relé (patilla 7) 5 segundos; luego espera una hora sin bloquear la lectura de un botón de parada.", sol: "Usar millis(): si humedad < 400 y no se está regando, digitalWrite(7, HIGH) y guardar inicio = millis(); si millis() − inicio >= 5000, apagar el relé y guardar ultimoRiego = millis(); no volver a regar hasta que millis() − ultimoRiego >= 3600000. En cada vuelta se lee el botón y, si se pulsa, se apaga el relé." },
    { nivel: "avanzado", q: "¿Por qué la variable que guarda millis() debe ser unsigned long y no int?", sol: "En Arduino UNO un int llega solo hasta 32.767 (unos 32 segundos en milisegundos) y luego se desborda. Un unsigned long llega a más de 4.000 millones (unos 49 días)." },
    { nivel: "avanzado", q: "Compara programar un proyecto con bloques y con código C++: ventajas de cada uno y cuándo elegirías cada opción.", sol: "Bloques: sin errores de sintaxis, visual y rápido para aprender y prototipos sencillos. Código: más potente y flexible, permite librerías y programas largos y es lo que se usa profesionalmente. Bloques para empezar o enseñar; código para proyectos complejos." },
  ],
  ejemplos: [
    { enunciado: "Configura con un vector y un bucle los tres LED de un semáforo (patillas 11, 12 y 13) y enciéndelos uno tras otro.", pasos: ["Declarar el vector: int leds[3] = {11, 12, 13};", "En setup(), recorrerlo con for para poner cada patilla como OUTPUT.", "En loop(), recorrerlo otra vez encendiendo cada LED, esperando y apagándolo.", "El índice i va de 0 a 2."], resultado: "int leds[3] = {11, 12, 13};\nvoid setup() {\n  for (int i = 0; i < 3; i++) pinMode(leds[i], OUTPUT);\n}\nvoid loop() {\n  for (int i = 0; i < 3; i++) {\n    digitalWrite(leds[i], HIGH);\n    delay(1000);\n    digitalWrite(leds[i], LOW);\n  }\n}" },
    { enunciado: "Clasifica una lectura de temperatura con else if: frío (< 15), agradable (15-25) o calor (> 25), para t = 27.", pasos: ["Primera condición: t < 15 → falso.", "Segunda: t <= 25 → falso.", "Ninguna se cumple → se ejecuta el else.", "Resultado: «calor»."], resultado: "calor" },
    { enunciado: "Calcula cuánto vale millis() a los 2 minutos y medio y si cabe en un int de Arduino UNO.", pasos: ["2,5 min = 150 s.", "150 s · 1.000 = 150.000 ms.", "Un int llega hasta 32.767.", "150.000 > 32.767 → no cabe: hay que usar unsigned long."], resultado: "150.000 ms; necesita unsigned long." },
  ],
  errores: [],
  cuarta: ["Triángulo", "Un bucle infinito", "while (false)", "pinMode()", "0 y 255", "dividir", "0", "ninguna es verdadera", "condicional", "un potenciómetro"],
  quiz: [
    { q: "El lenguaje que entiende directamente el procesador es…", o: ["Python", "el código máquina", "Scratch", "C++"], a: 1, e: "Ceros y unos." },
    { q: "Arduino se programa en C++, que es un lenguaje…", o: ["interpretado", "compilado", "de bloques", "de marcas"], a: 1, e: "Se compila antes de subirlo a la placa." },
    { q: "En int v[4], el último elemento es…", o: ["v[4]", "v[3]", "v[0]", "v[5]"], a: 1, e: "Los índices van de 0 a 3." },
    { q: "En un switch, el caso que recoge los valores no previstos es…", o: ["case 0", "default", "else", "break"], a: 1, e: "Se ejecuta si ningún case coincide." },
    { q: "La diferencia principal entre delay() y millis() es que…", o: ["millis no detiene el programa", "delay es más preciso", "millis apaga la placa", "no hay diferencia"], a: 0, e: "millis solo informa del tiempo transcurrido." },
    { q: "Para guardar el valor de millis() se usa…", o: ["bool", "char", "unsigned long", "float"], a: 2, e: "Es un número muy grande y siempre positivo." },
    { q: "La velocidad de la comunicación serie se mide en…", o: ["hercios", "baudios", "voltios", "píxeles"], a: 1, e: "Bits por segundo." },
    { q: "El protocolo que conecta muchos sensores con solo dos cables es…", o: ["I2C", "USB", "HDMI", "PWM"], a: 0, e: "Cada dispositivo tiene su dirección." },
    { q: "En una cadena if … else if, se ejecuta…", o: ["todas las condiciones verdaderas", "solo la primera condición verdadera", "siempre el else", "ninguna"], a: 1, e: "Por eso importa el orden." },
    { q: "Usar const int ROJO = 13; sirve para…", o: ["que el LED brille más", "dar nombre claro a una patilla fija", "acelerar el programa", "crear un bucle"], a: 1, e: "El código se lee mejor y se cambia en un solo sitio." },
  ],
  cuartaEx: ["char", "Pone el pin 13 a 5 V", "Para ocupar más memoria"],
  examen: [
    { q: "¿Qué hace Serial.available()?", o: ["Indica si han llegado datos por el puerto serie", "Enciende un LED", "Mide la luz", "Borra la memoria"], a: 0, e: "Devuelve cuántos caracteres hay esperando." },
    { q: "¿Qué muestra for (int i = 0; i < 3; i++) Serial.print(i);?", o: ["123", "012", "0123", "3"], a: 1, e: "i toma los valores 0, 1 y 2." },
    { q: "Un error de lógica…", o: ["impide compilar", "hace que el programa haga algo distinto de lo esperado", "solo aparece en Python", "lo corrige el compilador"], a: 1, e: "El programa funciona, pero mal." },
    { q: "El trazador serie sirve para…", o: ["dibujar gráficas de las lecturas en tiempo real", "soldar componentes", "compilar más rápido", "cargar la batería"], a: 0, e: "Muy útil para calibrar sensores." },
    { q: "Un intérprete…", o: ["traduce todo antes de ejecutar", "traduce y ejecuta línea a línea", "es un sensor", "es una placa"], a: 1, e: "Como en Python." },
  ],
  tarjetas: [
    ["Compilador e intérprete", "Traduce todo antes frente a traducir línea a línea."],
    ["Vector (array)", "Lista de datos del mismo tipo; índices desde 0."],
    ["millis()", "Tiempo desde el encendido; permite esperar sin bloquear."],
    ["switch", "Elige entre varios casos de una variable; no olvidar break."],
  ],
  glosario: [
    ["Algoritmo", "Secuencia ordenada y finita de pasos que resuelve un problema."],
    ["Diagrama de flujo", "Representación gráfica de un algoritmo con símbolos normalizados."],
    ["Código máquina", "Instrucciones en binario que ejecuta directamente el procesador."],
    ["Lenguaje de alto nivel", "Lenguaje cercano al humano e independiente del procesador."],
    ["Compilador", "Programa que traduce todo el código fuente a código máquina."],
    ["Intérprete", "Programa que traduce y ejecuta el código línea a línea."],
    ["Sintaxis", "Reglas de escritura de un lenguaje de programación."],
    ["Variable", "Espacio con nombre donde se guarda un dato que puede cambiar."],
    ["Constante", "Dato con nombre que no cambia durante el programa."],
    ["Vector (array)", "Conjunto de datos del mismo tipo identificados por un índice."],
    ["Condicional", "Estructura que ejecuta instrucciones solo si se cumple una condición."],
    ["Bucle", "Estructura que repite instrucciones."],
    ["Función", "Bloque de código con nombre que realiza una tarea."],
    ["millis()", "Función de Arduino que da el tiempo desde el encendido."],
    ["Comunicación serie", "Envío de datos bit a bit entre la placa y otro dispositivo."],
    ["Baudio", "Unidad de velocidad de transmisión: bits por segundo."],
    ["Depurar", "Buscar y corregir los errores de un programa."],
    ["Máquina de estados", "Programa organizado en estados que cambian según las entradas."],
  ],
  situacion: {
    titulo: "Riego inteligente para el huerto escolar",
    reto: "Programad un sistema que mantenga regadas las plantas del huerto o de una maceta del aula cuando no hay nadie, que muestre sus datos y que se pueda controlar a mano.",
    pasos: [
      "Analizad el problema: qué sensores (humedad del suelo, luz, temperatura) y actuadores (relé y bomba, LED, zumbador) necesitáis.",
      "Dibujad el diagrama de flujo y definid los estados del sistema (vigilar, regar, esperar, manual).",
      "Programad por partes con constantes, vectores para las lecturas, funciones para cada tarea y millis() para los tiempos.",
      "Mostrad los datos en el monitor o el trazador serie y permitid órdenes por teclado (regar ahora, modo automático).",
      "Probad el sistema durante varios días, ajustad umbrales y tiempos y documentad los resultados.",
    ],
    producto: "El sistema funcionando, el programa comentado, el diagrama de flujo y un informe con los datos recogidos.",
    evaluacion: ["El algoritmo y el diagrama resuelven el problema y contemplan todos los casos.", "El código usa correctamente constantes, vectores, funciones, condiciones y millis().", "El sistema funciona de forma fiable y segura (agua y electricidad separadas).", "El informe interpreta los datos y propone mejoras."],
  },
  objetivos: ["Usar vectores, else if, switch y millis() en programas para placas", "Comunicar la placa con el ordenador y desarrollar un proyecto completo"],
  fuentes: [{ t: "Referencia del lenguaje de Arduino", url: "https://docs.arduino.cc/language-reference/" }],
});
