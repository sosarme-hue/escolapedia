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
