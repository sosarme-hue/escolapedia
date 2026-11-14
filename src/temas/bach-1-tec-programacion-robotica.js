// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Bloque de código dentro de un apartado (el texto ya va escapado).
const code = (s) => `<pre style="${B.PRE}">${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`;

// Diagrama de flujo sencillo con una decisión.
const flujoDecision = () => {
  const caja = (y, t, c, rx = 6) => `<rect x="80" y="${y}" width="100" height="24" rx="${rx}" fill="var(--card)" stroke="${c}" stroke-width="2.2"/>${B.tx(130, y + 16, t, { fs: 10.5, maxW: 92, bold: true, color: c })}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo: inicio, leer sensor, decisión si hay poca luz, encender o apagar el LED y volver">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${caja(8, "Inicio", "var(--leaf)", 12)}${caja(42, "Leer luz", "var(--pen)")}
    <path d="M130 76 L 170 96 L 130 116 L 90 96 Z" fill="var(--card)" stroke="var(--sun)" stroke-width="2.2"/>${B.tx(130, 100, "luz < 300?", { fs: 10, maxW: 70, bold: true, color: "var(--sun)" })}
    <rect x="12" y="130" width="90" height="24" rx="6" fill="var(--card)" stroke="var(--red)" stroke-width="2.2"/>${B.tx(57, 146, "LED encendido", { fs: 10, maxW: 82, bold: true, color: "var(--red)" })}
    <rect x="158" y="130" width="90" height="24" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="2.2"/>${B.tx(203, 146, "LED apagado", { fs: 10, maxW: 82, bold: true, color: "var(--muted)" })}
    <path d="M130 32 V 42 M130 66 V 76 M90 96 H 57 V 130 M170 96 H 203 V 130" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    <path d="M57 154 V 170 H 254 M203 154 V 170 M254 170 V 54 H 180" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>
    ${B.tx(76, 90, "sí", { fs: 10, maxW: 14, bold: true, color: "var(--leaf)" })}${B.tx(184, 90, "no", { fs: 10, maxW: 14, bold: true, color: "var(--red)" })}
  </svg>`;
};

module.exports = B.tema({
  titulo: "Programación y robótica",
  minutos: 120,
  objetivos: [
    "Diseñar algoritmos con diagramas de flujo y pseudocódigo y traducirlos a un lenguaje de programación",
    "Usar variables, tipos de datos, operadores, estructuras de control, funciones y listas",
    "Programar un microcontrolador para leer sensores y gobernar actuadores",
    "Analizar robots móviles, sistemas IoT y el impacto ético y de seguridad de los sistemas programados",
  ],
  claves: ["algoritmo", "diagrama de flujo", "variable", "condicional", "bucle", "función", "lista", "microcontrolador", "Arduino", "robot móvil", "máquina de estados", "Internet de las cosas"],
  pregunta: {
    texto: "Un robot aspirador limpia toda la casa sin mapa previo y vuelve solo a su base. ¿Hay alguien dentro que piense?",
    respuesta: "No: dentro hay un <b>microcontrolador</b> que ejecuta un programa miles de veces por segundo. Lee sus <b>sensores</b> (choque, distancia, caída, giro de las ruedas), decide con <b>condicionales</b> y <b>bucles</b> qué hacer en cada situación y da órdenes a sus motores. La «inteligencia» del robot son <mark>algoritmos</mark> que alguien ha escrito, probado y mejorado.",
  },
  lectura: {
    titulo: "El primer programa de la historia",
    html: `<p>En 1843, Ada Lovelace tradujo al inglés un artículo sobre la máquina analítica de Charles Babbage, un ordenador mecánico de engranajes que nunca llegó a construirse por completo. Sus notas fueron tres veces más largas que el texto original. En ellas describió, paso a paso, cómo la máquina podría calcular una serie de números complicados: es considerado el primer programa de la historia.</p>
    <p>Lovelace fue más allá: intuyó que una máquina así podría manipular no solo números, sino cualquier cosa que pudiera representarse con símbolos, como notas musicales. Un siglo después, Alan Turing formalizó la idea de máquina capaz de ejecutar cualquier algoritmo, y Grace Hopper creó el primer compilador, que traducía instrucciones cercanas al lenguaje humano a código de máquina.</p>
    <p>Hoy programar es una forma de pensar: dividir un problema en pasos pequeños, prever todas las situaciones, probar y corregir. Esos programas controlan los frenos de un coche, el marcapasos de un corazón o el brazo de un robot quirúrgico. En este tema aprenderás las estructuras comunes a todos los lenguajes y las aplicarás a la electrónica y la robótica.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Algoritmos, diagramas de flujo y pseudocódigo",
      html: `<p>Un <b>algoritmo</b> es una secuencia <mark>finita, ordenada y precisa</mark> de instrucciones que resuelve un problema. Debe terminar, cada paso debe estar definido sin ambigüedad y debe producir un resultado. Una receta de cocina o las instrucciones de montaje de un mueble son algoritmos para personas; un programa es un algoritmo escrito para una máquina.</p>
      <p>Antes de programar conviene diseñar el algoritmo con herramientas independientes del lenguaje:</p>
      <ul><li><b>Diagramas de flujo</b>: usan símbolos normalizados unidos por flechas. Óvalos para el inicio y el fin, rectángulos para los procesos, rombos para las decisiones (con dos salidas, sí y no) y romboides para la entrada y salida de datos.</li>
      <li><b>Pseudocódigo</b>: una descripción en lenguaje casi natural con estructura de programa: «si luz &lt; 300 entonces encender LED; si no, apagar LED».</li></ul>
      <p>Diseñar bien un algoritmo implica <b>descomponer</b> el problema en partes más sencillas, reconocer <b>patrones</b> que se repiten, quedarse con lo esencial (<b>abstracción</b>) y ordenar los pasos. Este modo de razonar, el <b>pensamiento computacional</b>, sirve también fuera de la informática. Un mismo problema puede resolverse con varios algoritmos; se elige el más claro, el más rápido o el que menos memoria consume.</p>`,
      svg: flujoDecision(),
    },
    {
      h: "Lenguajes y entornos de programación",
      html: `<p>Los procesadores solo entienden <b>código máquina</b>: secuencias de ceros y unos específicas de cada procesador. Escribir así es lentísimo, por eso se usan <b>lenguajes de programación</b>:</p>
      <ul><li><b>De bajo nivel</b> (ensamblador): cada instrucción corresponde casi a una del procesador. Muy rápidos, pero difíciles y poco portables.</li>
      <li><b>De alto nivel</b> (Python, C, C++, Java, JavaScript): cercanos al lenguaje humano y válidos para distintos procesadores.</li>
      <li><b>Visuales o por bloques</b> (Scratch, ArduinoBlocks, MakeCode): se encajan piezas gráficas. Evitan errores de sintaxis y son ideales para empezar.</li></ul>
      <p>Para que el procesador ejecute un programa de alto nivel hay que traducirlo. Un <b>compilador</b> traduce todo el programa de una vez a código máquina y genera un ejecutable (C, C++, el lenguaje de Arduino). Un <b>intérprete</b> traduce y ejecuta instrucción a instrucción mientras el programa funciona (Python, JavaScript): más cómodo para probar, algo más lento.</p>
      <p>Los programas se escriben en un <b>entorno de desarrollo</b> (IDE), que incluye editor con colores, compilador, depurador y herramientas para cargar el programa en la placa. Los equipos profesionales usan además sistemas de <b>control de versiones</b> como Git, que guardan el historial de cambios y permiten que varias personas trabajen en el mismo código.</p>`,
      svg: B.capas("Niveles de los lenguajes de programación", [["Bloques", "Scratch, MakeCode"], ["Alto nivel", "Python, C++, Java"], ["Ensamblador", "instrucciones"], ["Código máquina", "0 y 1"]], { t: "Del humano a la máquina" }),
    },
    {
      h: "Variables, tipos de datos y operadores",
      html: `<p>Una <b>variable</b> es un espacio de memoria con un <b>nombre</b> en el que se guarda un dato que puede cambiar durante el programa. Una <b>constante</b> guarda un valor fijo, como el número de un pin. Cada variable tiene un <b>tipo de dato</b>, que indica qué valores puede guardar y cuánta memoria ocupa:</p>
      <ul><li><b>Enteros</b> (int): números sin decimales, como 25 o −3.</li>
      <li><b>Reales</b> o de coma flotante (float): números con decimales, como 21,5.</li>
      <li><b>Booleanos</b> (bool): verdadero o falso.</li>
      <li><b>Caracteres</b> y <b>cadenas de texto</b> (char, String): «A», «Hola».</li></ul>
      <p>En lenguajes como C++ hay que declarar el tipo; en Python se deduce al asignar el valor. La <b>asignación</b> se escribe con un solo signo igual: <code>temp = 21.5</code>.</p>
      <p>Los <b>operadores</b> permiten hacer cálculos y comparaciones:</p>
      <ul><li><b>Aritméticos</b>: + − * / y % (resto de la división entera: 17 % 5 = 2).</li>
      <li><b>De comparación</b>: == (igual), != (distinto), &lt;, &gt;, &lt;=, &gt;=. Dan un resultado booleano.</li>
      <li><b>Lógicos</b>: and (&amp;&amp;), or (||) y not (!), que combinan condiciones igual que el álgebra de Boole.</li></ul>
      <p>Hay que vigilar la división entre enteros: en C++, 7 / 2 da 3, porque se descartan los decimales. Los nombres de variables deben ser claros: <code>distanciaCm</code> mejor que <code>x</code>.</p>`,
      svg: B.rejilla("Tipos de datos y ejemplos", ["Tipo", "Ejemplo", "Uso"], [["int", "25", "contadores"], ["float", "21.5", "medidas"], ["bool", "true", "estados"], ["String", "\"Hola\"", "mensajes"]], { t: "Tipos de datos" }),
    },
    {
      h: "Estructuras de control",
      html: `<p>Todo programa se construye con tres estructuras básicas, demostró en 1966 el teorema de la programación estructurada:</p>
      <ul><li><b>Secuencial</b>: las instrucciones se ejecutan una detrás de otra.</li>
      <li><b>Condicional</b> o selectiva: se ejecuta un bloque u otro según una condición. <b>if</b> (si), <b>else</b> (si no) y <b>else if</b> (si no, si…), o <b>switch</b> para elegir entre muchos casos.</li>
      <li><b>Repetitiva</b> o bucle: se repite un bloque. El bucle <b>for</b> repite un número conocido de veces; el <b>while</b> (mientras) repite mientras se cumpla una condición, que se comprueba al principio.</li></ul>
      ${code(`for (int i = 0; i < 5; i++) {
  parpadear();          // se repite 5 veces
}
while (distancia > 20) {
  avanzar();            // mientras no haya obstáculo
  distancia = medir();
}`)}
      <p>Un error típico es el <b>bucle infinito</b>: un while cuya condición nunca deja de cumplirse porque dentro no cambia nada. En los microcontroladores, en cambio, el programa principal es un bucle infinito a propósito: la función <code>loop()</code> de Arduino se repite mientras la placa tenga alimentación. Las estructuras se pueden <b>anidar</b>: un if dentro de un for, un bucle dentro de otro. La <b>sangría</b> del código muestra qué instrucciones están dentro de cada bloque.</p>`,
      svg: B.cajas("Las tres estructuras de control", [["Secuencial", "una tras otra"], ["Condicional", "if / else|switch"], ["Repetitiva", "for: n veces|while: mientras"]], { t: "Estructuras de control", cols: 3 }),
    },
    {
      h: "Funciones, listas y modularidad",
      html: `<p>Una <b>función</b> es un bloque de código con nombre que realiza una tarea concreta. Se define una vez y se <b>llama</b> tantas veces como haga falta. Puede recibir <b>parámetros</b> (datos de entrada) y <b>devolver</b> un resultado con <code>return</code>:</p>
      ${code(`float celsiusAFahrenheit(float c) {
  return c * 9.0 / 5.0 + 32;
}
float f = celsiusAFahrenheit(25);  // f = 77`)}
      <p>Dividir un programa en funciones es la <b>programación modular</b>: el código es más corto, más legible, más fácil de probar y de reutilizar. Cada función debe hacer una sola cosa y tener un nombre que lo diga. Las variables declaradas dentro de una función son <b>locales</b> (solo existen dentro de ella); las declaradas fuera son <b>globales</b>.</p>
      <p>Para manejar muchos datos del mismo tipo se usan <b>vectores</b> o <b>listas</b> (arrays): una variable con varias posiciones numeradas desde 0. Por ejemplo, <code>notas[0]</code> es el primer elemento. Con un bucle for se recorren todos para calcular una media, buscar un máximo u ordenarlos. Las librerías son colecciones de funciones ya escritas por otros (para manejar una pantalla, un servo o un sensor) que se incluyen en el programa y ahorran mucho trabajo.</p>`,
      svg: B.flujo("Llamada a una función: datos de entrada, proceso y resultado", ["Programa principal", "Llama a la función con parámetros", "La función calcula", "return: devuelve el resultado", "El programa continúa"], { t: "Funciones" }),
    },
    {
      h: "Depuración, pruebas y buenas prácticas",
      html: `<p>Casi ningún programa funciona a la primera. Los errores (<i>bugs</i>) son de tres tipos:</p>
      <ul><li><b>De sintaxis</b>: el código no respeta las reglas del lenguaje (falta un punto y coma o una llave). El compilador los detecta y señala la línea.</li>
      <li><b>De ejecución</b>: el programa compila pero falla al ejecutarse, por ejemplo al dividir entre cero o acceder a una posición inexistente de una lista.</li>
      <li><b>Lógicos</b>: el programa funciona pero hace algo distinto de lo previsto (un &lt; en lugar de un &lt;=). Son los más difíciles de encontrar.</li></ul>
      <p>La <b>depuración</b> consiste en localizarlos y corregirlos. Técnicas útiles: imprimir el valor de las variables en el monitor serie, ejecutar paso a paso con un depurador, probar cada función por separado y explicar el código en voz alta a otra persona (o a un patito de goma).</p>
      <p>Las <b>pruebas</b> comprueban el programa con casos normales, casos límite (el valor justo en el umbral, una lista vacía) y casos erróneos (un sensor desconectado). Un buen programa además está <b>comentado</b> (explica el porqué, no lo obvio), usa nombres claros, evita números mágicos con constantes con nombre, tiene una sangría coherente y se guarda con control de versiones. El código se lee muchas más veces de las que se escribe.</p>`,
      svg: B.rejilla("Tipos de errores de programación", ["Error", "Ejemplo", "Lo detecta"], [["Sintaxis", "falta ;", "compilador"], ["Ejecución", "dividir entre 0", "al ejecutar"], ["Lógico", "< por <=", "las pruebas"]], { t: "Errores" }),
    },
    {
      h: "Microcontroladores y placas de desarrollo",
      html: `<p>Un <b>microcontrolador</b> es un pequeño ordenador completo en un chip: procesador, memoria de programa (flash), memoria de datos (RAM), temporizadores, conversor analógico-digital y pines de entrada y salida. Está en lavadoras, mandos, coches, juguetes y relojes. Las <b>placas de desarrollo</b> como Arduino, micro:bit, Raspberry Pi Pico o ESP32 facilitan su uso: incluyen regulador de tensión, conexión USB y pines accesibles.</p>
      <p>Un programa de Arduino tiene dos funciones obligatorias: <code>setup()</code>, que se ejecuta una vez al encender (configurar pines, iniciar la comunicación), y <code>loop()</code>, que se repite indefinidamente:</p>
      ${code(`const int LED = 9;            // pin del LED
void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);        // monitor serie
}
void loop() {
  int luz = analogRead(A0);  // 0 a 1023
  Serial.println(luz);
  if (luz < 300) digitalWrite(LED, HIGH);
  else digitalWrite(LED, LOW);
  delay(100);
}`)}
      <p>Una <b>Raspberry Pi</b> no es un microcontrolador sino un ordenador con sistema operativo, útil para tareas más pesadas (visión artificial, servidores). El <b>ESP32</b> añade wifi y Bluetooth, por lo que es muy usado en proyectos de Internet de las cosas.</p>`,
      svg: B.comparar("Microcontrolador frente a miniordenador", ["Microcontrolador", ["Arduino, ESP32", "sin sistema operativo", "tiempo real", "bajo consumo"]], ["Miniordenador", ["Raspberry Pi", "con Linux", "más potencia", "más consumo"]]),
      video: { id: "CnfZWD-yrDs", titulo: "Cómo programar Arduino: estructura del programa en el IDE", canal: "El profe García", vistas: 29740 },
    },
    {
      h: "Entradas, salidas y comunicación",
      html: `<p>Los pines de un microcontrolador pueden configurarse de varias formas:</p>
      <ul><li><b>Entrada digital</b>: <code>digitalRead(pin)</code> lee HIGH o LOW (pulsadores, finales de carrera, sensores todo-nada). Necesitan resistencias de <b>pull-up</b> o <b>pull-down</b> para no quedar flotando; muchas placas incluyen pull-up internas (<code>INPUT_PULLUP</code>). Los pulsadores mecánicos rebotan y dan varios pulsos: se filtra por programa (<i>debounce</i>).</li>
      <li><b>Salida digital</b>: <code>digitalWrite(pin, HIGH)</code> pone el pin a 5 V o 3,3 V. Da solo unos 20 mA: suficiente para un LED, no para un motor.</li>
      <li><b>Entrada analógica</b>: <code>analogRead(pin)</code> usa el ADC para leer una tensión (en Arduino Uno, de 0 a 1023 para 0-5 V). Sirve para potenciómetros, LDR, termistores y sensores con salida de tensión. La función <code>map()</code> convierte la lectura a la escala deseada.</li>
      <li><b>Salida PWM</b>: <code>analogWrite(pin, valor)</code> con valores de 0 a 255 regula el brillo de un LED o la velocidad de un motor a través de un driver.</li></ul>
      <p>Para comunicarse con otros dispositivos se usan protocolos: <b>serie</b> (UART), con el ordenador o con módulos Bluetooth; <b>I2C</b>, con dos cables para muchos sensores y pantallas; y <b>SPI</b>, más rápido, para tarjetas SD. En lugar de <code>delay()</code>, que detiene todo el programa, en proyectos complejos se usa <code>millis()</code>, que permite hacer varias tareas a la vez comprobando el tiempo transcurrido.</p>`,
      svg: B.rejilla("Funciones de entrada y salida de Arduino", ["Función", "Tipo", "Rango"], [["digitalRead", "entrada", "0 / 1"], ["digitalWrite", "salida", "0 / 1"], ["analogRead", "entrada ADC", "0-1023"], ["analogWrite", "salida PWM", "0-255"]], { t: "Entradas y salidas" }),
    },
    {
      h: "Robots móviles: estructura y movimiento",
      html: `<p>Un <b>robot</b> es una máquina programable que percibe su entorno con sensores, toma decisiones y actúa sobre él con cierta autonomía. Sus subsistemas son la <b>estructura</b> o chasis, los <b>actuadores</b> (motores y su driver), los <b>sensores</b>, el <b>controlador</b> (microcontrolador y programa), la <b>alimentación</b> (baterías) y, a veces, la <b>comunicación</b>.</p>
      <p>Los robots móviles más sencillos usan <b>tracción diferencial</b>: dos ruedas motrices independientes y una rueda loca. Si las dos giran igual, el robot avanza recto; si una gira más rápido, gira hacia el lado de la lenta; si giran en sentidos contrarios, gira sobre sí mismo. Su velocidad lineal y angular son:</p>
      <div class="formula"><span>v = (v_D + v_I) / 2   ·   ω = (v_D − v_I) / L</span></div>
      <p>siendo v_D y v_I las velocidades de las ruedas derecha e izquierda y L la distancia entre ellas. La velocidad de cada rueda depende de su diámetro y de su giro: v = π · d · n / 60 (n en rpm).</p>
      <p>Los sensores típicos son de <b>infrarrojos</b> para detectar líneas en el suelo, de <b>ultrasonidos</b> para medir distancias a obstáculos, <b>bumpers</b> de choque, <b>encoders</b> en las ruedas para medir el recorrido (odometría) y una <b>unidad inercial</b> (acelerómetro y giróscopo) para conocer la orientación. Los robots avanzados combinan cámaras y LiDAR para construir un mapa y localizarse en él a la vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot de tracción diferencial visto desde arriba con dos ruedas motrices, rueda loca y sensores">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Tracción diferencial", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <rect x="80" y="44" width="100" height="110" rx="18" fill="var(--pen)" opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="62" y="110" width="16" height="36" rx="4" fill="var(--ink)"/><rect x="182" y="110" width="16" height="36" rx="4" fill="var(--ink)"/>
        <circle cx="130" cy="56" r="6" fill="var(--muted)"/>
        <rect x="106" y="30" width="48" height="10" rx="3" fill="var(--sun)"/>${B.tx(130, 38, "sensores", { fs: 8.5, maxW: 44, bold: true, color: "#fff" })}
        <rect x="108" y="88" width="44" height="30" rx="4" fill="var(--leaf)"/>${B.tx(130, 107, "MCU", { fs: 11, maxW: 36, bold: true, color: "#fff" })}
        <path d="M70 104 V 80 M190 104 V 70" stroke="var(--red)" stroke-width="3"/><path d="M64 88 L 70 78 L 76 88 M184 78 L 190 68 L 196 78" fill="none" stroke="var(--red)" stroke-width="3"/>
        ${B.tx(40, 92, "v_I", { fs: 12, maxW: 26, bold: true, color: "var(--red)" })}${B.tx(220, 80, "v_D", { fs: 12, maxW: 26, bold: true, color: "var(--red)" })}
        <path d="M70 164 H 190" stroke="var(--ink)" stroke-width="1.5"/>${B.tx(130, 176, "L", { fs: 11, maxW: 14, bold: true })}
      </svg>`,
    },
    {
      h: "Algoritmos para robots: seguidores, obstáculos y estados",
      html: `<p>Un <b>seguidor de líneas</b> usa dos o más sensores infrarrojos que distinguen el negro de la línea del blanco del suelo. El algoritmo más sencillo es todo-nada: si el sensor izquierdo ve la línea, girar a la izquierda; si la ve el derecho, girar a la derecha; si ninguno, seguir recto. Con más sensores se calcula la <b>posición</b> de la línea y un control <b>proporcional</b> (o PID) ajusta la diferencia de velocidad entre ruedas: el robot va más rápido y oscila menos.</p>
      <p>Un robot que <b>evita obstáculos</b> mide la distancia con ultrasonidos: si es menor que un umbral, se detiene, gira y vuelve a medir.</p>
      <p>Cuando el comportamiento es complejo se programa como una <mark>máquina de estados</mark>: el robot está siempre en un estado (avanzar, girar, buscar, cargar) y pasa a otro cuando ocurre un evento. Se implementa con una variable que guarda el estado actual y un <code>switch</code> en el bucle principal:</p>
      ${code(`switch (estado) {
  case AVANZAR:
    avanzar();
    if (distancia() < 20) estado = GIRAR;
    break;
  case GIRAR:
    girar();
    if (distancia() > 40) estado = AVANZAR;
    break;
}`)}
      <p>Es la versión programada del GRAFCET y hace el código claro y fácil de ampliar.</p>`,
      svg: B.ciclo("Máquina de estados de un robot que evita obstáculos", "Estados", ["Avanzar", "Obstáculo < 20 cm", "Girar", "Libre > 40 cm"]),
      video: { id: "n-gJ00GTsNg", titulo: "Sensor de distancia ultrasónico HC-SR04 y Arduino", canal: "Science Buddies", vistas: 428390 },
    },
    {
      h: "Internet de las cosas y la nube",
      html: `<p>El <b>Internet de las cosas</b> (IoT) conecta a internet objetos cotidianos e industriales para que envíen datos y reciban órdenes: termostatos, contadores de agua, sensores de un campo de cultivo, máquinas de una fábrica, farolas o pulseras de actividad. Un sistema IoT tiene varias capas:</p>
      <ul><li><b>Dispositivos</b>: sensores y actuadores con un microcontrolador que tiene conexión (wifi, Bluetooth, LoRa, redes móviles).</li>
      <li><b>Comunicación</b>: los datos viajan con protocolos ligeros como <b>MQTT</b>, en el que los dispositivos publican mensajes en «temas» y otros se suscriben a ellos a través de un servidor llamado <i>broker</i>, o mediante peticiones <b>HTTP</b> a un servidor web.</li>
      <li><b>Nube</b>: servidores que almacenan los datos, los procesan y generan avisos.</li>
      <li><b>Aplicación</b>: paneles web o móviles para visualizar los datos y mandar órdenes.</li></ul>
      <p>El IoT permite el mantenimiento predictivo, la agricultura de precisión, las ciudades inteligentes o la domótica. Sus retos son el <b>consumo energético</b> de millones de dispositivos (se diseñan para dormir la mayor parte del tiempo y funcionar años con una pila), la <b>interoperabilidad</b> entre fabricantes y, sobre todo, la <b>seguridad</b> y la <b>privacidad</b> de los datos que recogen.</p>`,
      svg: B.capas("Capas de un sistema IoT", [["Aplicación", "panel, móvil"], ["Nube", "datos, avisos"], ["Comunicación", "wifi, MQTT"], ["Dispositivos", "sensores"]], { t: "Internet de las cosas" }),
      video: { id: "gV7l2YOSOQ4", titulo: "Internet de las cosas (IoT): en qué consiste y cómo funciona", canal: "InnovaSecure", vistas: 405097 },
    },
    {
      h: "Inteligencia artificial, ciberseguridad y ética",
      html: `<p>La <b>inteligencia artificial</b> (IA) permite que los sistemas aprendan a partir de datos en lugar de seguir reglas escritas una a una. En el <b>aprendizaje automático</b>, un modelo se entrena con muchos ejemplos (miles de fotos de piezas buenas y defectuosas) y después clasifica casos nuevos. Hoy se usa en visión artificial para inspeccionar productos, en robots que aprenden a agarrar objetos, en asistentes de voz y en la conducción asistida. Incluso pequeños microcontroladores pueden ejecutar modelos sencillos.</p>
      <p>Todo sistema conectado puede ser atacado. La <b>ciberseguridad</b> exige cambiar las contraseñas por defecto, actualizar el software, cifrar las comunicaciones, dar a cada dispositivo solo los permisos necesarios y separar las redes de los dispositivos IoT. Una cámara o un enchufe inteligente mal protegidos pueden usarse para espiar o para atacar otros sistemas.</p>
      <p>Programar sistemas que actúan en el mundo real tiene implicaciones <b>éticas</b>: ¿quién es responsable si un robot o un coche autónomo causa un daño? ¿Están los datos de entrenamiento libres de <b>sesgos</b> que discriminen a ciertas personas? ¿Se respeta la <b>privacidad</b>, como exige el Reglamento General de Protección de Datos? ¿Es accesible para todos? La Unión Europea regula la IA según su nivel de riesgo. Un buen ingeniero piensa en estas preguntas desde el principio del diseño.</p>`,
      svg: B.cajas("Retos de los sistemas programados", [["IA", "aprende de datos|cuidado con sesgos"], ["Ciberseguridad", "contraseñas, cifrado|actualizaciones"], ["Privacidad", "RGPD|datos mínimos"], ["Responsabilidad", "¿quién responde?|seguridad"]], { t: "Ética y seguridad" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de la programación y la robótica",
    items: [["Algoritmo", "pasos finitos", "diagrama de flujo", "y pseudocódigo"], ["Control", "if · for · while", "decidir", "y repetir"], ["Arduino", "setup() · loop()", "leer sensores", "y actuar"], ["Robot", "v = (vD + vI)/2", "sensores, MCU", "y motores"]],
  },
  video: { id: "SZTXmCbfjP0", titulo: "Algoritmo y diagrama de flujo", canal: "CompilaTec", vistas: 341949 },
  quiz: [
    ["Un algoritmo debe ser…", ["infinito y ambiguo", "finito, ordenado y preciso", "escrito en Python", "siempre gráfico"], 1, "Debe terminar y cada paso debe estar claro."],
    ["En un diagrama de flujo, el rombo representa…", ["el inicio", "una decisión", "un proceso", "la salida de datos"], 1, "Tiene dos salidas: sí y no."],
    ["¿Qué traduce todo el programa de una vez a código máquina?", ["Un intérprete", "Un compilador", "Un depurador", "Un editor"], 1, "El intérprete traduce instrucción a instrucción."],
    ["El tipo de dato adecuado para una temperatura de 21,5 °C es…", ["int", "float", "bool", "char"], 1, "Tiene decimales."],
    ["17 % 5 vale…", ["3,4", "2", "3", "12"], 1, "El operador % da el resto de la división entera."],
    ["En C++, 7 / 2 con enteros da…", ["3,5", "3", "4", "error"], 1, "La división entera descarta los decimales."],
    ["¿Qué operador compara si dos valores son iguales?", ["=", "==", "!=", "<="], 1, "Un solo = es asignación."],
    ["Para repetir un bloque un número conocido de veces se usa…", ["if", "for", "switch", "return"], 1, "while se usa cuando no se sabe cuántas veces."],
    ["Un bucle while cuya condición nunca cambia provoca…", ["un error de sintaxis", "un bucle infinito", "una función", "una lista"], 1, "El programa no sale nunca del bucle."],
    ["La instrucción return sirve para…", ["repetir", "devolver un resultado desde una función", "leer un pin", "comentar"], 1, "Termina la función y entrega el valor."],
    ["El primer elemento de una lista notas es…", ["notas[1]", "notas[0]", "notas[-1]", "notas.primero"], 1, "Los índices empiezan en 0."],
    ["Un < escrito en lugar de un <= es un error…", ["de sintaxis", "de ejecución", "lógico", "de compilación"], 2, "El programa funciona pero hace algo distinto."],
    ["En Arduino, la función que se ejecuta una sola vez al encender es…", ["loop()", "setup()", "main()", "start()"], 1, "loop() se repite indefinidamente."],
    ["analogRead en un Arduino Uno devuelve valores entre…", ["0 y 1", "0 y 255", "0 y 1023", "0 y 5"], 2, "ADC de 10 bits."],
    ["analogWrite(pin, 128) genera…", ["una tensión exacta de 2,5 V", "una señal PWM al 50 %", "una lectura", "un error"], 1, "128 de 255 es aproximadamente el 50 %."],
    ["¿Por qué un motor no se conecta directamente a un pin de Arduino?", ["Por el color", "Porque el pin da solo unos 20 mA", "Porque es digital", "Porque gira al revés"], 1, "Hace falta un driver o un transistor."],
    ["En un robot de tracción diferencial, si las ruedas giran en sentidos contrarios a la misma velocidad…", ["avanza", "gira sobre sí mismo", "retrocede", "se para"], 1, "v = 0 y ω máxima."],
    ["Un sensor de ultrasonidos mide…", ["el color", "la distancia por el eco", "la temperatura", "la inclinación"], 1, "Mide el tiempo de ida y vuelta del sonido."],
    ["En MQTT, los dispositivos publican mensajes en…", ["temas a través de un broker", "correos electrónicos", "páginas web", "tarjetas SD"], 0, "Otros dispositivos se suscriben a esos temas."],
    ["¿Cuál es una buena práctica de seguridad IoT?", ["Mantener la contraseña de fábrica", "Cambiar contraseñas y actualizar el software", "Abrir todos los puertos", "No cifrar"], 1, "Las contraseñas por defecto son públicas."],
  ],
  examen: [
    ["¿Qué muestra este código? x = 3; for i de 1 a 4: x = x + i. Valor final de x:", ["13", "10", "7", "16"], 0, "3 + 1 + 2 + 3 + 4 = 13."],
    ["¿Cuántas veces se ejecuta for (int i = 0; i < 10; i += 2)?", ["10", "5", "4", "6"], 1, "i = 0, 2, 4, 6, 8."],
    ["Con a = 5 y b = 8, ¿qué vale (a > 3) && (b < 6)?", ["true", "false", "8", "error"], 1, "La segunda condición es falsa."],
    ["Lectura analogRead = 512 con 5 V de referencia. Tensión aproximada:", ["2,5 V", "5 V", "1,2 V", "0,5 V"], 0, "512 · 5 / 1024 = 2,5 V."],
    ["Ruedas de 6,5 cm de diámetro a 120 rpm. Velocidad del robot (recto):", ["40,8 cm/s", "24,5 cm/s", "7,8 cm/s", "81,7 cm/s"], 0, "v = π · 6,5 · 120 / 60 = 40,8 cm/s."],
    ["v_D = 30 cm/s, v_I = 10 cm/s, L = 14 cm. Velocidad angular:", ["1,43 rad/s", "20 rad/s", "2,86 rad/s", "0,7 rad/s"], 0, "ω = (30 − 10) / 14 = 1,43 rad/s (gira a la izquierda)."],
    ["map(600, 0, 1023, 0, 100) devuelve aproximadamente…", ["58", "60", "600", "6"], 0, "600 · 100 / 1023 ≈ 58."],
    ["Un sensor IoT envía un dato cada 10 minutos y duerme el resto. ¿Qué mejora?", ["La seguridad", "La autonomía de la batería", "La resolución", "El color"], 1, "El consumo en reposo es mínimo."],
  ],
  feynman: ["Qué es un algoritmo y cómo se dibuja un diagrama de flujo", "Qué diferencia hay entre un bucle for y un while", "Para qué sirven las funciones y los parámetros", "Qué hacen setup() y loop() en Arduino", "Cómo gira un robot de tracción diferencial", "Qué riesgos de seguridad tiene un dispositivo IoT y cómo evitarlos"],
  mapa: ["PROGRAMACIÓN Y ROBÓTICA", [["Algoritmos", "diagrama de flujo · pseudocódigo"], ["Programas", "variables · if · for · funciones"], ["Microcontroladores", "E/S digitales · ADC · PWM"], ["Aplicaciones", "robots · IoT · IA y ética"]]],
  tarjetas: [
    ["Algoritmo", "Secuencia finita, ordenada y precisa de pasos que resuelve un problema."],
    ["Símbolos del diagrama de flujo", "Óvalo: inicio/fin. Rectángulo: proceso. Rombo: decisión."],
    ["Compilador e intérprete", "Compilador: traduce todo de una vez. Intérprete: instrucción a instrucción."],
    ["Tipos de datos", "int, float, bool, char y String."],
    ["Operador %", "Resto de la división entera: 17 % 5 = 2."],
    ["Estructuras de control", "Secuencial, condicional (if, switch) y repetitiva (for, while)."],
    ["Función", "Bloque con nombre, parámetros y return; se reutiliza."],
    ["Tipos de errores", "Sintaxis, ejecución y lógicos."],
    ["Arduino", "setup() una vez; loop() siempre."],
    ["Entradas y salidas", "digitalRead/Write (0-1), analogRead (0-1023), analogWrite PWM (0-255)."],
    ["Tracción diferencial", "v = (v_D + v_I)/2; ω = (v_D − v_I)/L."],
    ["IoT", "Dispositivos conectados que envían datos a la nube (wifi, MQTT)."],
  ],
  ejemplos: [
    ["Escribe en pseudocódigo un algoritmo que lea la temperatura cada minuto y encienda un ventilador si supera 28 °C, apagándolo por debajo de 26 °C.", ["Repetir siempre: leer temperatura T.", "Si T > 28, encender ventilador; si no, si T < 26, apagar ventilador (entre 26 y 28 no se cambia: histéresis).", "Esperar 60 s."], "repetir siempre:\n  T = leer_temperatura()\n  si T > 28: encender_ventilador()\n  si no, si T < 26: apagar_ventilador()\n  esperar(60)"],
    ["Escribe una función que calcule la media de una lista de 5 notas.", ["Declarar una variable suma = 0.", "Recorrer la lista con un for y acumular cada nota.", "Devolver suma / 5 (como número real)."], "float media(float notas[], int n) {\n  float suma = 0;\n  for (int i = 0; i < n; i++) {\n    suma = suma + notas[i];\n  }\n  return suma / n;\n}"],
    ["Programa un semáforo con tres LED (pines 2, 3 y 4) que esté 5 s en verde, 2 s en ámbar y 5 s en rojo.", ["En setup() se configuran los tres pines como salida.", "En loop() se enciende cada LED, se espera su tiempo y se apaga.", "La secuencia se repite indefinidamente porque loop() es un bucle."], "void setup() {\n  pinMode(2, OUTPUT); pinMode(3, OUTPUT); pinMode(4, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(2, HIGH); delay(5000); digitalWrite(2, LOW);\n  digitalWrite(3, HIGH); delay(2000); digitalWrite(3, LOW);\n  digitalWrite(4, HIGH); delay(5000); digitalWrite(4, LOW);\n}"],
    ["Convierte la lectura de un potenciómetro (0-1023) en el ángulo de un servo (0-180°).", ["Leer con analogRead(A0).", "Escalar con map(lectura, 0, 1023, 0, 180).", "Enviar el ángulo al servo con la librería Servo."], "#include <Servo.h>\nServo s;\nvoid setup() { s.attach(9); }\nvoid loop() {\n  int lectura = analogRead(A0);\n  int angulo = map(lectura, 0, 1023, 0, 180);\n  s.write(angulo);\n  delay(15);\n}"],
    ["Un robot tiene ruedas de 6 cm de diámetro, separadas 12 cm. La derecha gira a 100 rpm y la izquierda a 60 rpm. Calcula su velocidad lineal y angular y el radio de la curva.", ["v_D = π · 6 · 100 / 60 = 31,4 cm/s; v_I = π · 6 · 60 / 60 = 18,8 cm/s.", "v = (31,4 + 18,8) / 2 = 25,1 cm/s; ω = (31,4 − 18,8) / 12 = 1,05 rad/s.", "Radio de giro R = v / ω = 25,1 / 1,05 = 23,9 cm."], "v ≈ 25 cm/s; ω ≈ 1,05 rad/s; gira a la izquierda con R ≈ 24 cm."],
    ["Un sensor de ultrasonidos da un pulso de eco de 1166 µs. Escribe el cálculo de la distancia en cm (velocidad del sonido 0,0343 cm/µs).", ["El sonido va y vuelve: hay que dividir entre 2.", "d = 1166 · 0,0343 / 2.", "d = 20 cm."], "long t = pulseIn(ECHO, HIGH);   // 1166 µs\nfloat d = t * 0.0343 / 2;       // 20,0 cm"],
  ],
  errores: [
    "Usar = (asignación) en lugar de == (comparación) dentro de un if.",
    "Olvidar actualizar la variable de un while y crear un bucle infinito.",
    "Empezar a contar las posiciones de una lista desde 1 en lugar de 0.",
    "Dividir enteros esperando decimales (7 / 2 = 3 en C++).",
    "Conectar motores o relés directamente a los pines del microcontrolador.",
    "Dejar entradas digitales sin resistencia de pull-up o pull-down: leen valores aleatorios.",
  ],
  ejercicios: {
    b: [
      ["Define algoritmo y nombra sus tres características.", "Secuencia de instrucciones para resolver un problema; debe ser finito, ordenado y preciso (sin ambigüedad)."],
      ["Dibuja (describe) con símbolos el diagrama de flujo para decidir si un número es par.", "Inicio (óvalo) → leer N (romboide) → ¿N % 2 == 0? (rombo) → sí: escribir «par»; no: escribir «impar» (romboides) → fin (óvalo)."],
      ["Diferencia compilador e intérprete con un ejemplo de lenguaje para cada uno.", "El compilador traduce todo el programa de una vez y genera un ejecutable (C++, Arduino). El intérprete traduce y ejecuta línea a línea (Python)."],
      ["Indica el tipo de dato de: número de alumnos, altura en metros, ¿está encendido?, nombre.", "int, float, bool y String."],
      ["Calcula: 23 % 4, 15 / 4 (enteros) y 15.0 / 4.", "3, 3 y 3,75."],
      ["Evalúa con x = 4: (x > 2) && (x < 10), (x == 5) || (x != 3), !(x > 3).", "true, true y false."],
      ["¿Cuántas veces se repite for (int i = 1; i <= 6; i++)?", "6 veces (i = 1 a 6)."],
      ["Escribe un bucle que muestre los números del 10 al 1.", "for (int i = 10; i >= 1; i--) { Serial.println(i); }"],
      ["Clasifica el error: falta una llave de cierre; el programa divide entre una variable que vale 0; el robot gira a la derecha cuando debía girar a la izquierda.", "Sintaxis, ejecución y lógico."],
      ["¿Qué hacen setup() y loop()?", "setup() se ejecuta una vez al iniciar (configuración); loop() se repite continuamente (programa principal)."],
      ["¿Qué rango de valores da analogRead y qué rango acepta analogWrite en Arduino Uno?", "analogRead: 0 a 1023. analogWrite: 0 a 255."],
      ["Nombra cuatro subsistemas de un robot móvil.", "Estructura, actuadores (motores), sensores, controlador y alimentación (y comunicación)."],
    ],
    m: [
      ["Escribe en pseudocódigo un algoritmo que pida 10 números y muestre el mayor.", "mayor = leer()\nrepetir 9 veces:\n  n = leer()\n  si n > mayor: mayor = n\nescribir(mayor)"],
      ["Escribe una función que reciba una distancia en cm y devuelva true si es menor que 20.", "bool hayObstaculo(float d) {\n  return d < 20;\n}"],
      ["¿Qué valor tiene s al terminar? s = 0; for (i = 1; i <= 5; i++) s = s + i * i;", "s = 1 + 4 + 9 + 16 + 25 = 55."],
      ["Encuentra el error lógico: if (temp > 30) encender(); if (temp < 30) apagar(); ¿qué pasa si temp = 30?", "Con temp = 30 no se cumple ninguna condición y el ventilador se queda como estaba. Hay que usar else o >= en una de ellas (o una histéresis)."],
      ["Programa la lectura de un pulsador en el pin 7 con pull-up interna para encender un LED en el pin 13 mientras está pulsado.", "void setup() {\n  pinMode(7, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (digitalRead(7) == LOW) digitalWrite(13, HIGH);\n  else digitalWrite(13, LOW);\n}"],
      ["Una LDR da lecturas entre 100 (oscuro) y 900 (luz). Escribe la instrucción que convierte la lectura a un porcentaje de luz.", "int luz = map(lectura, 100, 900, 0, 100); (y conviene limitarla con constrain(luz, 0, 100))."],
      ["Calcula el valor de analogWrite para que un motor reciba el 75 % de su tensión.", "0,75 · 255 ≈ 191."],
      ["Escribe el algoritmo de un seguidor de líneas con dos sensores (I y D, 1 = ve la línea).", "si I == 1 y D == 0: girar a la izquierda\nsi no, si I == 0 y D == 1: girar a la derecha\nsi no, si I == 1 y D == 1: avanzar recto (cruce)\nsi no: buscar la línea (girar despacio)"],
      ["Ruedas de 7 cm a 90 rpm. ¿Cuánto tarda el robot en recorrer 2 m en línea recta?", "v = π · 7 · 90 / 60 = 33 cm/s. t = 200 / 33 = 6,1 s."],
      ["¿Por qué es mejor millis() que delay() en un robot que debe vigilar un sensor mientras hace parpadear un LED?", "delay() detiene todo el programa: durante la espera no se lee el sensor. Con millis() se comprueba si ha pasado el tiempo sin bloquear, y el bucle sigue leyendo sensores."],
      ["Describe la máquina de estados de una puerta automática con sensor de presencia.", "Estados: CERRADA, ABRIENDO, ABIERTA, CERRANDO. CERRADA → ABRIENDO si detecta presencia; ABRIENDO → ABIERTA al final de carrera; ABIERTA → CERRANDO tras 5 s sin presencia; CERRANDO → ABRIENDO si detecta presencia, o → CERRADA al final de carrera."],
      ["Explica cómo funciona MQTT con el ejemplo de un sensor de temperatura y un móvil.", "El sensor publica la temperatura en el tema «casa/salon/temp» en un broker. La app del móvil está suscrita a ese tema y recibe cada nuevo valor. Para mandar una orden, el móvil publica en «casa/salon/calefaccion» y el actuador, suscrito, la ejecuta."],
      ["Indica tres medidas de seguridad para una cámara IP doméstica.", "Cambiar la contraseña por defecto por una robusta, actualizar el firmware y conectarla a una red separada (o desactivar el acceso remoto si no se usa), además de usar comunicaciones cifradas."],
    ],
    a: [
      ["Escribe una función que ordene de menor a mayor una lista de n números (método de la burbuja).", "void ordenar(int v[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - 1 - i; j++) {\n      if (v[j] > v[j + 1]) {\n        int aux = v[j];\n        v[j] = v[j + 1];\n        v[j + 1] = aux;\n      }\n    }\n  }\n}"],
      ["Programa un control proporcional para un seguidor de líneas con un sensor que da la posición de la línea entre −100 (izquierda) y 100 (derecha). Velocidad base 150 y Kp = 0,8.", "int error = posicion();          // −100 a 100\nint correccion = 0.8 * error;\nint vIzq = 150 + correccion;\nint vDer = 150 - correccion;\nanalogWrite(MOTOR_IZQ, constrain(vIzq, 0, 255));\nanalogWrite(MOTOR_DER, constrain(vDer, 0, 255));"],
      ["Un robot debe girar 90° sobre sí mismo con ruedas a ±20 cm/s y L = 15 cm. ¿Cuánto tiempo deben girar los motores?", "ω = (20 − (−20)) / 15 = 2,67 rad/s. 90° = π/2 = 1,571 rad. t = 1,571 / 2,67 = 0,59 s."],
      ["Con encoders de 20 pulsos por vuelta en ruedas de 6,5 cm, ¿cuántos pulsos corresponden a 1 m de recorrido? ¿Qué resolución tiene la medida?", "Perímetro = π · 6,5 = 20,4 cm. Por pulso: 1,02 cm. 1 m = 100 / 1,02 ≈ 98 pulsos. Resolución ≈ 1 cm."],
      ["Implementa con millis() un LED que parpadee cada 500 ms sin bloquear el programa.", "unsigned long antes = 0;\nbool estado = false;\nvoid loop() {\n  if (millis() - antes >= 500) {\n    antes = millis();\n    estado = !estado;\n    digitalWrite(13, estado);\n  }\n  // aquí se pueden leer sensores sin esperas\n}"],
      ["Un nodo IoT consume 80 mA durante 2 s cada vez que envía un dato y 0,05 mA dormido. Envía un dato cada 15 minutos. ¿Cuánto dura una batería de 2000 mA·h?", "Consumo por ciclo de 900 s: 80 · 2 + 0,05 · 898 = 160 + 44,9 = 204,9 mA·s. Media = 204,9 / 900 = 0,228 mA. Duración = 2000 / 0,228 ≈ 8780 h ≈ 1 año."],
      ["Diseña la máquina de estados de un robot aspirador con los estados LIMPIAR, ESQUIVAR, VOLVER_BASE y CARGAR, indicando los eventos.", "LIMPIAR → ESQUIVAR si choca u obstáculo cerca; ESQUIVAR → LIMPIAR tras girar un ángulo aleatorio; LIMPIAR → VOLVER_BASE si batería < 15 %; VOLVER_BASE → CARGAR al detectar la base; CARGAR → LIMPIAR con batería al 100 %."],
      ["Explica qué es el sesgo en un sistema de IA y propone un ejemplo y una solución en un sistema de control de acceso con reconocimiento facial.", "Es un error sistemático aprendido de datos de entrenamiento no representativos. Si el sistema se entrena casi solo con fotos de un grupo de personas, fallará más con otras, que no podrán entrar. Solución: datos variados y equilibrados, pruebas por grupos y una alternativa de acceso manual."],
      ["Calcula cuántos bytes ocupa guardar cada minuto, durante un día, la temperatura (float, 4 bytes) y la hora (unsigned long, 4 bytes) en un registrador de datos.", "1440 registros · 8 bytes = 11 520 bytes ≈ 11,3 kB: cabe en la memoria de una tarjeta SD, pero no en los 2 kB de RAM de un Arduino Uno."],
      ["Debate: ¿quién debería ser responsable si un robot de reparto autónomo atropella a un peatón? Argumenta considerando a fabricante, programador, empresa y usuario.", "La respuesta debe valorar que el fabricante responde de defectos de diseño y de seguridad; la empresa operadora, del mantenimiento y del uso correcto; y que el marco legal europeo tiende a exigir seguros obligatorios, trazabilidad (registro de decisiones) y supervisión humana en sistemas de alto riesgo."],
    ],
  },
  glosario: [
    ["Algoritmo", "Secuencia finita y ordenada de pasos que resuelve un problema."],
    ["Diagrama de flujo", "Representación gráfica de un algoritmo con símbolos normalizados."],
    ["Pseudocódigo", "Descripción de un algoritmo en lenguaje casi natural."],
    ["Compilador", "Programa que traduce todo el código fuente a código máquina."],
    ["Intérprete", "Programa que traduce y ejecuta el código instrucción a instrucción."],
    ["Variable", "Espacio de memoria con nombre cuyo valor puede cambiar."],
    ["Tipo de dato", "Clase de valores que puede guardar una variable."],
    ["Condicional", "Estructura que ejecuta un bloque u otro según una condición."],
    ["Bucle", "Estructura que repite un bloque de instrucciones."],
    ["Función", "Bloque de código con nombre que realiza una tarea y puede devolver un valor."],
    ["Lista o vector", "Variable con varias posiciones numeradas desde 0."],
    ["Depuración", "Proceso de localizar y corregir errores en un programa."],
    ["Microcontrolador", "Ordenador completo en un chip para controlar dispositivos."],
    ["PWM", "Señal de pulsos cuyo ciclo de trabajo regula una potencia media."],
    ["Tracción diferencial", "Sistema de dos ruedas motrices independientes que gira variando sus velocidades."],
    ["Máquina de estados", "Modelo en el que el sistema está en un estado y cambia con eventos."],
    ["Internet de las cosas", "Red de objetos conectados que envían datos y reciben órdenes."],
    ["MQTT", "Protocolo ligero de mensajes por temas para IoT."],
  ],
  situacion: {
    titulo: "Un robot para la feria de ciencias",
    reto: "Por equipos, construid y programad un robot móvil que complete un circuito con un tramo de seguimiento de línea, un tramo con obstáculos y una zona final donde debe enviar un aviso por wifi o Bluetooth al llegar.",
    pasos: [
      "Diseñad el algoritmo de cada tramo con diagramas de flujo y la máquina de estados global.",
      "Montad el chasis con dos motores, driver, sensores infrarrojos, ultrasonidos y un microcontrolador.",
      "Programad y probad cada función por separado (leer sensores, mover motores, medir distancia).",
      "Integrad el programa con la máquina de estados y ajustad la constante proporcional del seguidor.",
      "Añadid la comunicación final y medid el tiempo y la fiabilidad en diez recorridos.",
      "Documentad el código con comentarios y publicadlo en un repositorio con control de versiones.",
    ],
    producto: "El robot funcionando, el código comentado en un repositorio, los diagramas y una presentación de dos minutos para la feria.",
    evaluacion: [
      "Los algoritmos están bien diseñados y se corresponden con el código.",
      "El código es modular, legible y usa correctamente estructuras de control y funciones.",
      "El robot completa el circuito de forma fiable y se han ajustado sus parámetros con datos.",
      "Se trabaja en equipo con control de versiones y se reflexiona sobre seguridad y mejoras.",
    ],
  },
  familias: [
    "Pedidle que os explique un algoritmo cotidiano (preparar el desayuno) con un diagrama de flujo.",
    "Si tenéis un robot aspirador o un juguete programable, observad juntos cómo reacciona a los obstáculos.",
    "Revisad la seguridad de los aparatos conectados de casa: contraseñas, actualizaciones y permisos.",
    "Animadle a programar un pequeño proyecto propio con un simulador gratuito en línea.",
  ],
  saberes: "Sistemas informáticos emergentes y sistemas automáticos: algoritmos, diagramas de flujo, lenguajes de programación, estructuras de datos y de control, funciones, programación de microcontroladores con sensores y actuadores, robótica, Internet de las cosas, inteligencia artificial, ciberseguridad y ética (RD 243/2022, Tecnología e Ingeniería I, bloques E y F).",
  ideas: [
    "Programar primero en un simulador en línea de Arduino antes de montar el circuito real.",
    "Organizar una liga de seguidores de línea con cronometraje y registro de ajustes de Kp.",
    "Montar una estación meteorológica IoT con un ESP32 y un panel gratuito en la nube.",
    "Debatir un caso real de sesgo algorítmico y redactar unas normas éticas para los proyectos de clase.",
  ],
  fuentes: [
    { t: "Referencia del lenguaje de Arduino", url: "https://docs.arduino.cc/language-reference/" },
    { t: "Ada Lovelace, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ada_Lovelace" },
  ],
});
