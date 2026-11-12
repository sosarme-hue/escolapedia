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
