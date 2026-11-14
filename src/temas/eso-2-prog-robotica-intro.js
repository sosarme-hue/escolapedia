// Programación y robótica 2º ESO · Introducción a la robótica. Tema nivel libro (lote 8).
// Contenido y dibujos propios: esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-robotica-intro";
const [vHistoria, vPorTodas] = H.videos(S);
const { tx, lienzo } = H;

const esRobot = H.comparar("Máquina automática frente a robot: la máquina repite siempre lo mismo; el robot percibe el entorno con sensores, decide con un programa y actúa", [
  ["Máquina automática", ["repite lo mismo", "no percibe", "tostadora"], "var(--muted)"],
  ["Robot", ["percibe con sensores", "decide y actúa", "robot aspirador"], "var(--pen)"],
], "¿Es un robot?");
const historia = H.linea("Línea del tiempo de la robótica: autómatas antiguos, la palabra robot en 1920, las leyes de Asimov en 1942, el primer robot industrial Unimate en 1961 y los robots actuales", [["s. XVIII", "autómatas"], ["1920", "palabra «robot»"], ["1942", "leyes de Asimov"], ["1961", "Unimate"], ["Hoy", "Marte, hogar"]], "Breve historia");
const cuerpo = H.tablaSvg("Partes del robot comparadas con el cuerpo humano: sensores como los sentidos, controlador como el cerebro, actuadores como los músculos, estructura como el esqueleto y batería como la comida", ["Robot", "Función", "Humano"], [["Sensores", "percibir", "sentidos"], ["Controlador", "decidir", "cerebro"], ["Actuadores", "moverse", "músculos"], ["Estructura", "sostener", "esqueleto"], ["Batería", "energía", "alimentos"]]);
const usos = H.cajas("Robots según su uso: industria, medicina, hogar, exploración, rescate y educación", [
  ["Industria", "soldar, pintar", "var(--pen)"],
  ["Medicina", "cirugía, prótesis", "var(--red)"],
  ["Hogar", "aspirar, cortar césped", "var(--leaf)"],
  ["Exploración", "Marte, fondo marino", "var(--sun)"],
  ["Rescate", "derrumbes, incendios", "var(--inf)"],
  ["Educación", "aprender a programar", "var(--bac)"],
], "¿Para qué sirven?");
const brazo = lienzo("Brazo robótico con articulaciones: base que gira, hombro, codo, muñeca y pinza; cada articulación es un grado de libertad", `
  <rect x="40" y="140" width="70" height="16" rx="4" fill="var(--muted)"/>
  <rect x="62" y="118" width="26" height="24" rx="4" fill="var(--pen)" fill-opacity=".8"/>
  <path d="M75 118 L120 64" stroke="var(--pen)" stroke-width="12" stroke-linecap="round"/>
  <path d="M120 64 L182 70" stroke="var(--pen)" stroke-width="10" stroke-linecap="round"/>
  <path d="M182 70 L200 96" stroke="var(--pen)" stroke-width="8" stroke-linecap="round"/>
  <path d="M200 96 L192 116 M200 96 L214 112" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
  ${[[75, 118], [120, 64], [182, 70], [200, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}
  ${tx(12, 104, "base (gira)", { fs: 10, c: "var(--ink)", a: "start", max: 58 })}${tx(112, 44, "hombro", { fs: 10, c: "var(--ink)", max: 60 })}${tx(176, 52, "codo", { fs: 10, c: "var(--ink)", max: 50 })}${tx(186, 112, "muñeca", { fs: 10, c: "var(--ink)", a: "end", max: 56 })}${tx(222, 130, "pinza", { fs: 10, c: "var(--red)", a: "end", max: 50 })}
  ${tx(130, 20, "4 articulaciones = 4 grados de libertad", { fs: 11.5, c: "var(--muted)", max: 236 })}${tx(130, 172, "cada articulación la mueve un motor", { fs: 10.5, c: "var(--muted)", max: 236 })}`, 180);
const autonomia = H.comparar("Grados de autonomía: robot teleoperado, controlado por una persona; programado, que repite una secuencia; y autónomo, que decide según sus sensores", [
  ["Teleoperado", ["lo maneja", "una persona", "dron, robot", "de rescate"], "var(--red)"],
  ["Programado", ["repite", "una secuencia", "brazo de", "fábrica"], "var(--sun)"],
  ["Autónomo", ["decide con", "sus sensores", "aspirador,", "rover"], "var(--leaf)"],
], "¿Quién decide?");
const placas = H.cajas("Placas controladoras habituales en el aula: micro:bit, Arduino, mBot y LEGO; se programan con bloques o texto", [
  ["micro:bit", "pantalla de LED, botones", "var(--pen)"],
  ["Arduino", "libre, muy versátil", "var(--inf)"],
  ["mBot", "robot móvil con mBlock", "var(--leaf)"],
  ["LEGO", "piezas y motores", "var(--red)"],
], "El cerebro del robot");
const programa = H.scratch("Primer programa de un robot móvil: cuando se pulse el botón, encender luces verdes, avanzar al 50 por ciento durante 2 segundos, girar a la derecha 1 segundo, parar y sonar una nota", [
  ["cuando se pulse el botón", "eventos"], ["luces LED en verde", "robot"], ["avanzar a velocidad 50 %", "robot"], ["esperar 2 segundos", "control"], ["girar a la derecha a 50 %", "robot"], ["esperar 1 segundo", "control"], ["parar motores", "robot"], ["tocar nota Do 0,5 pulsos", "sonido"],
], "Primer programa del robot");
const cargar = H.pasos("Del ordenador al robot: programar en el editor, conectar por cable o Bluetooth, cargar el programa, probar en el suelo y depurar", [
  "Programar en el editor (mBlock, MakeCode)",
  "Conectar por cable USB o Bluetooth",
  "Cargar el programa en la placa",
  "Probar en el suelo, con espacio",
  "Observar, medir y depurar",
], "Del ordenador al robot");
const ia = H.flechas("Robots con inteligencia artificial: captan datos con cámaras y sensores, un modelo entrenado reconoce lo que ve, el robot decide y actúa", ["Captar: cámara, micrófono, lidar", "Reconocer con un modelo entrenado", "Decidir qué hacer", "Actuar y aprender de los resultados"], "Robots que aprenden");
const sociedad = H.comparar("Robots y sociedad: beneficios como trabajos peligrosos y precisión; retos como el empleo, la seguridad, la privacidad y la responsabilidad", [
  ["Beneficios", ["trabajos peligrosos", "más precisión", "ayuda a personas"], "var(--leaf)"],
  ["Retos", ["cambios en el empleo", "seguridad y datos", "¿quién responde?"], "var(--red)"],
], "Robots y personas");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Introducción a la robótica",
  minutos: 110,
  objetivos: [
    "Definir qué es un robot y distinguirlo de una máquina automática",
    "Explicar el ciclo percibir, decidir y actuar y las partes de un robot",
    "Conocer la historia de la robótica y clasificar robots por su forma, su uso y su autonomía",
    "Entender qué son las articulaciones y los grados de libertad",
    "Conocer las placas controladoras y programar un primer robot",
    "Reflexionar sobre el impacto de los robots y la inteligencia artificial en la sociedad",
  ],
  claves: ["robot", "robótica", "sensor", "controlador", "actuador", "estructura", "autonomía", "grado de libertad", "articulación", "efector final", "placa controladora", "teleoperado", "humanoide", "inteligencia artificial", "ética"],
  pregunta: {
    texto: "Una lavadora automática y un robot aspirador funcionan solos. ¿Por qué decimos que el aspirador es un robot y la lavadora normalmente no?",
    respuesta: "Porque el robot aspirador <mark>percibe su entorno</mark> con sensores (detecta paredes, escaleras, suciedad), <b>decide</b> con su programa qué hacer y <b>cambia su comportamiento</b> según lo que encuentra. La lavadora sigue siempre la misma secuencia de pasos, sin observar lo que pasa a su alrededor. Lo que define a un robot es ese ciclo de <b>percibir, decidir y actuar</b>.",
  },
  lectura: {
    titulo: "Un robot a 225 millones de kilómetros",
    html: `<p>En febrero de 2021, el rover <b>Perseverance</b> de la NASA aterrizó en el cráter Jezero de Marte. Es un robot del tamaño de un coche, con seis ruedas, un brazo de dos metros, 23 cámaras, micrófonos, una estación meteorológica y un taladro para recoger muestras de roca.</p>
<p>Las señales de radio tardan entre <b>5 y 20 minutos</b> en viajar de la Tierra a Marte, según la posición de los planetas. Por eso es imposible conducirlo con un mando como un coche teledirigido: cuando llegase la orden de frenar, el robot ya habría caído por un barranco. La solución es que Perseverance sea en gran parte <b>autónomo</b>. Los ingenieros le indican un destino y el robot fotografía el terreno, analiza las rocas y pendientes, elige el camino más seguro y avanza.</p>
<p>Perseverance llevaba además un pequeño helicóptero, <b>Ingenuity</b>, que se convirtió en la primera aeronave en volar en otro planeta. Ambos son el resultado del trabajo de cientos de personas de muchas especialidades: mecánica, electrónica, programación, geología. Eso es la robótica: unir muchas ciencias para construir máquinas que perciben, deciden y actúan donde las personas no pueden llegar.</p>`,
  },
  bloques: [
    {
      html: `<h3>6.1 ¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una máquina programable capaz de <b>percibir su entorno</b> mediante sensores, <b>procesar</b> esa información con un programa y <b>actuar</b> sobre el mundo físico, moviéndose o manipulando objetos, con cierto grado de autonomía. La <mark>robótica</mark> es la rama de la tecnología que diseña, construye y programa robots. Une la mecánica, la electrónica y la informática.</p><p>No todas las máquinas que funcionan solas son robots. Una tostadora, un reloj o un semáforo sencillo son <b>máquinas automáticas</b>: repiten siempre la misma secuencia y no se adaptan a lo que pasa a su alrededor. Un robot, en cambio, <b>cambia su comportamiento</b> según lo que detecta: el robot aspirador gira al encontrar una pared y evita caer por las escaleras.</p><p>Un robot tampoco tiene por qué parecer una persona. La mayoría de los robots del mundo son brazos industriales, vehículos o aparatos con formas muy distintas a la humana.</p>`,
      svg: esRobot,
    },
    {
      html: `<h3>6.2 Percibir, decidir y actuar</h3><p>Todo robot funciona repitiendo un ciclo de tres fases, muchas veces por segundo:</p><p>• <b>Percibir</b>: los <mark>sensores</mark> captan información del entorno: distancia a los obstáculos, luz, color del suelo, temperatura, sonido, inclinación…<br>• <b>Decidir</b>: el <mark>controlador</mark>, una pequeña computadora, ejecuta el programa, que compara los datos de los sensores con lo que debe hacer y elige una acción.<br>• <b>Actuar</b>: los <mark>actuadores</mark> (motores, luces, altavoces, pinzas) ejecutan la acción.</p><p>Lo que hace el robot cambia el entorno (se acerca a una pared, recoge un objeto), y eso modifica lo que perciben sus sensores en la siguiente vuelta del ciclo. Por eso decimos que un robot es un <b>sistema de control en lazo cerrado</b>: observa el resultado de sus acciones y se corrige. Programar un robot consiste, sobre todo, en escribir las reglas de la fase de decidir: «si la distancia es menor de 20 cm, girar; si no, avanzar».</p>`,
      svg: H.viejo(S, 0),
    },
    {
      html: `<h3>6.3 Un poco de historia</h3><p>El sueño de construir máquinas que se mueven solas es muy antiguo. Los ingenieros griegos construían figuras movidas por agua o vapor, y en el siglo XVIII se pusieron de moda los <b>autómatas</b>: muñecos mecánicos que escribían, dibujaban o tocaban instrumentos gracias a complicados engranajes.</p><p>La palabra <b>«robot»</b> apareció en 1920 en la obra de teatro <i>R.U.R.</i> del escritor checo <b>Karel Čapek</b>; viene de <i>robota</i>, que significa «trabajo forzado». En 1942, el escritor <b>Isaac Asimov</b> imaginó las <b>tres leyes de la robótica</b>, que proponían que un robot no debe dañar a las personas. En 1961, el robot <b>Unimate</b> empezó a trabajar en una fábrica de coches: fue el primer robot industrial.</p><p>Desde entonces, los robots no han dejado de mejorar gracias a los microprocesadores, sensores más baratos y, últimamente, la inteligencia artificial. Hoy hay robots en fábricas, hospitales, casas, almacenes, el fondo del mar y la superficie de Marte.</p>`,
      svg: historia,
      video: vHistoria,
    },
    {
      html: `<h3>6.4 Las partes de un robot</h3><p>Aunque cada robot es distinto, casi todos tienen las mismas partes:</p><p>• <b>Estructura</b> o <b>chasis</b>: el «esqueleto» que sostiene las piezas. Puede ser de metal, plástico, madera o incluso cartón.<br>• <b>Sensores</b>: captan información, como los de distancia por ultrasonidos, los infrarrojos que siguen una línea, los de luz o los pulsadores.<br>• <b>Controlador</b>: la placa electrónica con un microcontrolador que ejecuta el programa.<br>• <b>Actuadores</b>: producen movimiento u otras acciones. Los más comunes son los <b>motores</b> de las ruedas o de las articulaciones, pero también los LED, los zumbadores o las pantallas.<br>• <b>Fuente de energía</b>: pilas, batería recargable o conexión a la red eléctrica.<br>• <b>Efector final</b>: en los brazos robóticos, la herramienta del extremo: una pinza, una ventosa, un soldador.</p><p>Todas estas partes están conectadas por <b>cables</b> que llevan la energía y las señales eléctricas.</p>`,
      svg: H.viejo(S, 1),
    },
    {
      html: `<h3>6.5 El robot y el cuerpo humano</h3><p>Para entender cómo funciona un robot, ayuda compararlo con el cuerpo humano, porque muchos robots están inspirados en los seres vivos:</p><p>• Los <b>sensores</b> son como nuestros <b>sentidos</b>: la cámara es como los ojos, el micrófono como el oído, el sensor de contacto como el tacto.<br>• El <b>controlador</b> es como el <b>cerebro</b>: recibe la información, la procesa y da órdenes.<br>• Los <b>actuadores</b> son como los <b>músculos</b>: transforman las órdenes en movimiento.<br>• La <b>estructura</b> es como el <b>esqueleto</b>.<br>• Los <b>cables</b> son como los <b>nervios</b>, que llevan señales.<br>• La <b>batería</b> es como los <b>alimentos</b>, que dan energía.</p><p>Hay una diferencia importante: nosotros aprendemos y nos adaptamos de forma natural, mientras que un robot solo hace lo que dice su programa. Incluso los robots con inteligencia artificial necesitan que alguien los entrene y les marque objetivos.</p>`,
      svg: cuerpo,
    },
    {
      html: `<h3>6.6 Tipos de robots según su forma</h3><p>Los robots se pueden clasificar por su forma y su manera de moverse:</p><p>• <b>Brazos robóticos</b> o manipuladores: están fijos en un sitio y mueven un brazo articulado. Son los más numerosos en la industria.<br>• <b>Robots móviles con ruedas</b>: se desplazan por el suelo, como los robots aspiradores, los de almacén o los rovers de Marte.<br>• <b>Robots con patas</b>: caminan con dos, cuatro o seis patas y pueden moverse por terrenos irregulares, como los robots «perro».<br>• <b>Drones</b>: robots voladores con hélices.<br>• <b>Robots acuáticos</b>: exploran el mar en superficie o bajo el agua.<br>• <b>Humanoides</b>: tienen forma humana, con cabeza, tronco, brazos y piernas. Son muy difíciles de construir porque mantener el equilibrio sobre dos piernas es complicado.</p><p>La forma de un robot depende de la tarea: no tendría sentido construir un humanoide para pintar coches en una cadena de montaje.</p>`,
      svg: H.viejo(S, 4),
    },
    {
      html: `<h3>6.7 Robots según su uso</h3><p>Los robots hacen trabajos que son <b>repetitivos</b>, <b>peligrosos</b>, <b>muy precisos</b> o imposibles para las personas:</p><p>• <b>Industria</b>: sueldan, pintan, montan piezas y empaquetan en las fábricas, sin cansarse y con gran precisión.<br>• <b>Logística</b>: mueven estanterías en los grandes almacenes de las tiendas en línea.<br>• <b>Medicina</b>: robots cirujanos que permiten operar con cortes muy pequeños, prótesis robóticas, exoesqueletos para rehabilitación.<br>• <b>Hogar</b>: aspiradores, friegasuelos, cortacésped y limpiadores de piscinas.<br>• <b>Exploración</b>: rovers en Marte y robots submarinos en las profundidades del océano.<br>• <b>Rescate y seguridad</b>: entran en edificios derrumbados, apagan incendios o desactivan explosivos.<br>• <b>Agricultura</b>: recogen fruta o quitan malas hierbas.<br>• <b>Educación</b>: robots para aprender a programar, como el que usarás en clase.</p>`,
      svg: usos,
      video: vPorTodas,
    },
    {
      html: `<h3>6.8 Articulaciones y grados de libertad</h3><p>Un brazo robótico se mueve gracias a sus <mark>articulaciones</mark>, que son como las del brazo humano: hombro, codo, muñeca. Cada articulación la mueve un motor y puede ser de dos tipos:</p><p>• <b>De rotación</b>: gira alrededor de un eje, como el codo.<br>• <b>Lineal</b> o prismática: se desliza en línea recta, como un cajón.</p><p>El número de movimientos independientes que puede hacer un robot se llama <mark>grados de libertad</mark>. Cada articulación aporta, normalmente, un grado de libertad. Un brazo con base giratoria, hombro, codo y muñeca tiene 4 grados de libertad. Los robots industriales suelen tener 6, lo que les permite colocar la herramienta en cualquier posición y con cualquier orientación. El brazo humano, contando hombro, codo y muñeca, tiene 7.</p><p>En el extremo del brazo está el <b>efector final</b>: la pinza, ventosa o herramienta que realiza la tarea. Cuantos más grados de libertad, más versátil es el robot, pero también más difícil de programar.</p>`,
      svg: brazo,
    },
    {
      html: `<h3>6.9 ¿Quién decide? La autonomía</h3><p>Los robots se diferencian también por su grado de <mark>autonomía</mark>, es decir, por cuánto deciden ellos solos:</p><p>• <b>Teleoperados</b>: una persona los controla a distancia, con un mando o desde un ordenador, viendo lo que capta su cámara. Se usan en rescate, en desactivación de explosivos o en cirugía, donde el cirujano maneja el robot desde una consola.<br>• <b>Programados</b>: repiten una secuencia fija de movimientos. Es el caso de muchos brazos industriales: si la pieza no está en su sitio, no lo notan.<br>• <b>Autónomos</b>: perciben el entorno y deciden por sí mismos cómo cumplir su tarea, como el robot aspirador, los coches autónomos o el rover de Marte.</p><p>Muchos robots combinan modos: un dron puede volar solo hasta un punto y luego pasar a control manual. A medida que aumenta la autonomía, el programa del robot debe prever más situaciones y ser más fiable, porque nadie está mirando para corregirlo.</p>`,
      svg: autonomia,
    },
    {
      html: `<h3>6.10 Las placas controladoras</h3><p>El «cerebro» de un robot educativo es una <mark>placa controladora</mark>: una tarjeta electrónica con un <b>microcontrolador</b> (un ordenador diminuto), conectores para sensores y actuadores, y un puerto para recibir los programas. Algunas de las más usadas en los institutos son:</p><p>• <b>micro:bit</b>: pequeña placa con una matriz de 25 LED, dos botones, brújula, acelerómetro y Bluetooth. Se programa con bloques en MakeCode o con Python.<br>• <b>Arduino</b>: placa de <b>hardware libre</b> muy versátil, creada en Italia, a la que se pueden conectar cientos de sensores y motores. Se programa con texto o con bloques (mBlock, Arduinoblocks).<br>• <b>mBot</b> y robots similares: robots móviles ya montados, con sensores de distancia y de línea, que se programan con mBlock, un entorno muy parecido a Scratch.<br>• Kits de <b>LEGO</b>: piezas, motores y sensores para construir robots de muchas formas.</p><p>Lo que aprendiste en Scratch sirve directamente: eventos, bucles, condicionales y variables funcionan igual.</p>`,
      svg: placas,
    },
    {
      html: `<h3>6.11 Programar un robot</h3><p>Programar un robot se parece mucho a programar en Scratch, pero con una diferencia: el programa no mueve un dibujo en la pantalla, sino una máquina real. En los editores de bloques aparecen categorías nuevas con bloques para los motores («avanzar a velocidad 50 %», «girar a la derecha», «parar motores»), los LED, el zumbador y los sensores.</p><p>El proceso tiene estos pasos:</p><p>1. <b>Programar</b> en el editor del ordenador.<br>2. <b>Conectar</b> el robot por cable USB o Bluetooth.<br>3. <b>Cargar</b> el programa en la placa (en algunos modos, el programa se ejecuta desde el ordenador en directo).<br>4. <b>Probar</b> en el suelo, con espacio libre.<br>5. <b>Observar</b> y <b>depurar</b>.</p><p>El mundo real es imperfecto: las ruedas patinan, las pilas se gastan y los motores no giran exactamente igual. Por eso un programa que avanza «2 segundos» no recorre siempre la misma distancia, y los robots necesitan sensores para corregirse.</p>`,
      svg: programa,
    },
    {
      html: `<h3>6.12 Probar con cuidado: simuladores y seguridad</h3><p>Antes de cargar un programa en un robot real conviene <b>probarlo</b>. Hay <b>simuladores</b> que muestran un robot virtual en la pantalla, con sus sensores y motores, para comprobar el programa sin riesgo de que el robot se caiga de la mesa. También se pueden hacer pruebas «desenchufadas»: un compañero hace de robot y sigue el programa en papel.</p><p>Al trabajar con robots reales hay que seguir unas normas de <b>seguridad</b>:</p><p>• Probar los robots móviles en el <b>suelo</b>, nunca en el borde de una mesa.<br>• Mantener los dedos, el pelo y los cables lejos de ruedas y engranajes.<br>• Desconectar la batería antes de cambiar piezas o cables.<br>• No mezclar pilas nuevas y gastadas y reciclarlas en el contenedor adecuado.<br>• Tratar el material con cuidado y guardarlo ordenado.</p><p>En las fábricas, los robots industriales trabajan dentro de jaulas o con sensores que los detienen si una persona se acerca demasiado.</p>`,
      svg: cargar,
    },
    {
      html: `<h3>6.13 Robots e inteligencia artificial</h3><p>Los robots tradicionales siguen reglas escritas por programadores: «si la distancia es menor que 20, girar». Pero algunas tareas son demasiado complejas para escribir todas las reglas: reconocer a una persona en una imagen, entender una orden hablada o agarrar objetos de formas distintas. Para eso se usa la <mark>inteligencia artificial</mark> (IA).</p><p>Con la IA, en lugar de escribir las reglas, se <b>entrena</b> un modelo con miles de ejemplos: fotos de personas, grabaciones de voz, intentos de agarrar objetos. El modelo aprende a reconocer patrones y el robot lo usa para decidir. Así funcionan los coches autónomos, que reconocen peatones y señales, o los robots de almacén que aprenden a coger paquetes.</p><p>La IA no hace que el robot «piense» como una persona: reconoce patrones a partir de datos. Si los datos de entrenamiento son pobres o están sesgados, el robot se equivocará. Con herramientas como las extensiones de Scratch o páginas de aprendizaje automático para escuelas, puedes entrenar tus propios modelos sencillos.</p>`,
      svg: ia,
    },
    {
      html: `<h3>6.14 Robots y sociedad</h3><p>Los robots traen grandes <b>beneficios</b>: hacen trabajos peligrosos, sucios o agotadores; aumentan la precisión en la industria y en la medicina; ayudan a personas mayores o con discapacidad; y exploran lugares donde no podemos ir.</p><p>Pero también plantean <b>retos</b> que la sociedad debe pensar:</p><p>• <b>Empleo</b>: algunos trabajos desaparecen o cambian, y aparecen otros nuevos (técnicos de mantenimiento, programadores de robots). Hace falta formación para adaptarse.<br>• <b>Seguridad</b>: un robot que falla puede causar daños; deben diseñarse con sistemas de parada y pruebas rigurosas.<br>• <b>Privacidad</b>: los robots con cámaras y micrófonos recogen datos de nuestras casas.<br>• <b>Responsabilidad</b>: si un coche autónomo tiene un accidente, ¿quién es responsable: el fabricante, el programador o el dueño?</p><p>La Unión Europea ha aprobado normas para que la IA y los robots sean seguros y respeten los derechos de las personas. Como futuros ciudadanos y quizá creadores de robots, también os toca participar en estas decisiones.</p>`,
      svg: sociedad,
    },
  ],
  figura: H.figura(S),
  video: H.video(S),
  ejemplos: [
    { enunciado: "¿Es un robot una puerta automática de supermercado que se abre al detectar a una persona?", pasos: ["Percibe: tiene un sensor de presencia.", "Decide: si detecta a alguien, abre; si no, cierra.", "Actúa: un motor mueve la puerta.", "Pero solo hace una tarea fija y muy simple, sin moverse por el entorno."], resultado: "Es un sistema automático con sensor; algunos lo consideran un robot muy sencillo, pero no un robot en sentido pleno." },
    { enunciado: "Identifica sensores, controlador y actuadores de un robot cortacésped.", pasos: ["Sensores: cable perimetral, sensor de choque, sensor de lluvia, sensor de inclinación.", "Controlador: placa con el programa que decide la ruta.", "Actuadores: motores de las ruedas y motor de la cuchilla."], resultado: "Percibe los límites y obstáculos, decide y corta el césped." },
    { enunciado: "¿Cuántos grados de libertad tiene un brazo con base giratoria, hombro, codo y pinza que se abre y cierra?", pasos: ["Base: 1. Hombro: 1. Codo: 1.", "La pinza abre y cierra: suele contarse aparte como efector final.", "Grados de libertad del brazo: 3 (más la pinza)."], resultado: "3 grados de libertad para posicionar, más la apertura de la pinza." },
    { enunciado: "Clasifica por su autonomía: un dron de juguete con mando, un robot aspirador y un brazo que suelda siempre en el mismo punto.", pasos: ["Dron con mando: lo controla una persona → teleoperado.", "Aspirador: decide según sus sensores → autónomo.", "Brazo de soldadura: repite una secuencia → programado."], resultado: "Teleoperado, autónomo y programado." },
    { enunciado: "Un robot avanza 2 segundos al 50 % y recorre 40 cm. ¿Cuánto recorrerá en 5 segundos? ¿Por qué el resultado real puede variar?", pasos: ["Velocidad: 40 cm : 2 s = 20 cm/s.", "En 5 s: 20 · 5 = 100 cm.", "Puede variar por el rozamiento del suelo, la carga de las pilas o el arranque del motor."], resultado: "Unos 100 cm, aproximadamente." },
    { enunciado: "Programa un robot que, al pulsar su botón, haga un cuadrado aproximado.", pasos: ["cuando se pulse el botón.", "repetir 4: avanzar al 50 % 1 s, girar a la derecha el tiempo necesario para 90° (se ajusta probando, por ejemplo 0,6 s).", "parar motores."], resultado: "Un cuadrado aproximado; el tiempo de giro se calibra con pruebas." },
  ],
  errores: [
    "Pensar que un robot tiene que tener forma humana: la mayoría no la tiene.",
    "Confundir una máquina automática que repite siempre lo mismo con un robot que percibe y se adapta.",
    "Creer que el robot «sabe» lo que debe hacer: solo hace lo que dice su programa.",
    "Esperar que un robot real recorra siempre la misma distancia con el mismo tiempo: el mundo físico tiene rozamiento, pilas que se gastan y motores imperfectos.",
    "Probar robots móviles encima de la mesa o manipularlos con la batería conectada.",
    "Pensar que la inteligencia artificial hace que el robot piense como una persona: reconoce patrones a partir de datos.",
  ],
  ejercicios: H.nivelar([
    ["Define robot y robótica.", "Un robot es una máquina programable que percibe su entorno con sensores, procesa la información y actúa sobre el mundo físico con cierta autonomía. La robótica es la tecnología que los diseña, construye y programa."],
    ["Explica las tres fases del ciclo de un robot.", "Percibir (los sensores captan información), decidir (el controlador ejecuta el programa) y actuar (los actuadores hacen la acción). Se repite continuamente."],
    ["Nombra las partes principales de un robot.", "Estructura, sensores, controlador, actuadores, fuente de energía y, en los brazos, efector final."],
    ["¿De dónde viene la palabra robot y quién la usó por primera vez?", "Del checo «robota», trabajo forzado. La usó Karel Čapek en su obra de teatro R.U.R. en 1920."],
    ["Relaciona cada parte del robot con una parte del cuerpo: sensores, controlador, actuadores, estructura.", "Sensores: sentidos. Controlador: cerebro. Actuadores: músculos. Estructura: esqueleto."],
    ["Escribe cuatro tipos de robots según su forma.", "Brazos robóticos, robots móviles con ruedas, drones y humanoides (también con patas y acuáticos)."],
    ["Escribe tres usos de los robots en medicina.", "Robots cirujanos, prótesis robóticas y exoesqueletos para rehabilitación."],
    ["¿Qué es una placa controladora? Nombra dos.", "Una tarjeta electrónica con un microcontrolador que ejecuta el programa del robot y se conecta a sensores y actuadores. Por ejemplo, micro:bit y Arduino."],
    ["Escribe tres normas de seguridad al trabajar con robots en clase.", "Probar en el suelo, mantener dedos y pelo lejos de ruedas y engranajes, y desconectar la batería antes de cambiar piezas."],
    ["¿Qué fue Unimate y en qué año empezó a trabajar?", "El primer robot industrial; empezó a trabajar en una fábrica de coches en 1961."],
    ["Explica por qué un robot aspirador es un robot y una tostadora no.", "El aspirador percibe paredes, escaleras y suciedad, decide y cambia lo que hace; la tostadora repite siempre lo mismo sin observar el entorno."],
    ["Identifica sensores, controlador y actuadores de un coche autónomo.", "Sensores: cámaras, radares, lidar, GPS. Controlador: ordenador de a bordo con IA. Actuadores: volante, acelerador, frenos y luces controlados por motores."],
    ["¿Qué son los grados de libertad? ¿Cuántos tiene un brazo con base, hombro, codo y muñeca?", "El número de movimientos independientes que puede hacer un robot; normalmente uno por articulación. Ese brazo tiene 4."],
    ["Explica la diferencia entre articulación de rotación y lineal con un ejemplo de cada una.", "La de rotación gira alrededor de un eje, como el codo. La lineal se desliza en línea recta, como un cajón o un émbolo."],
    ["Clasifica según su autonomía: robot de cirugía manejado por un médico, rover de Marte, brazo de pintura de coches.", "Teleoperado, autónomo y programado."],
    ["¿Por qué el rover Perseverance tiene que ser autónomo?", "Porque las señales tardan de 5 a 20 minutos en llegar a Marte; si lo condujeran desde la Tierra, las órdenes llegarían tarde y podría chocar o caer."],
    ["Explica qué es un sistema en lazo cerrado con el ejemplo de un robot que sigue una pared.", "El robot mide la distancia a la pared, la compara con la deseada y corrige el giro; el movimiento cambia la distancia y vuelve a medir. Observa el resultado de sus acciones y se corrige."],
    ["¿Por qué un robot que avanza «2 segundos» no recorre siempre la misma distancia?", "Porque influyen el rozamiento del suelo, la carga de la batería, el peso y las diferencias entre motores. Por eso se usan sensores para corregir."],
    ["Escribe el programa en bloques para que un robot avance, se pare, encienda una luz roja y pite.", "cuando se pulse el botón · avanzar al 50 % · esperar 2 s · parar motores · luces LED en rojo · tocar nota Do."],
    ["Explica qué es un efector final y pon tres ejemplos.", "La herramienta del extremo de un brazo robótico que realiza la tarea. Ejemplos: pinza, ventosa y soldador (o pistola de pintura)."],
    ["Escribe tres ventajas de usar simuladores antes de probar con el robot real.", "No se rompe el robot, se prueba más rápido y se pueden probar situaciones difíciles de preparar en la realidad."],
    ["Describe cómo aprende un robot con inteligencia artificial a reconocer manzanas maduras.", "Se le enseñan miles de fotos de manzanas etiquetadas como maduras o verdes; el modelo aprende los patrones de color y forma y después clasifica manzanas nuevas que ve con su cámara."],
    ["Diseña un robot para ayudar en una biblioteca: forma, sensores, actuadores y grado de autonomía.", "Por ejemplo: robot móvil con ruedas y un brazo pequeño; sensores de distancia, cámara y lector de códigos; actuadores: motores, pinza y pantalla; autónomo para colocar libros, con modo teleoperado para casos difíciles."],
    ["Un robot sigue-líneas se sale en las curvas cerradas. Propón dos soluciones.", "Reducir la velocidad en las curvas y acercar los sensores o usar más sensores; también hacer giros más fuertes cuando un sensor detecta la línea."],
    ["Debate: ¿quién debe ser responsable si un robot de reparto atropella a alguien? Argumenta.", "Respuesta abierta. Deben valorarse el fabricante (diseño y pruebas), el programador (fallos del software), la empresa que lo usa (mantenimiento) y la necesidad de leyes claras y seguros."],
    ["Calcula: un robot recorre 30 cm en 1,5 s. ¿Cuánto tardará en recorrer 2 m?", "Velocidad: 30 : 1,5 = 20 cm/s. 200 cm : 20 cm/s = 10 s."],
    ["Explica las tres leyes de la robótica de Asimov y si crees que bastan para los robots actuales.", "1) Un robot no dañará a un humano ni permitirá que sufra daño. 2) Obedecerá las órdenes humanas salvo que contradigan la primera. 3) Protegerá su existencia salvo que contradiga las anteriores. Son ficción y no bastan: los robots reales necesitan normas técnicas, leyes y responsabilidad humana."],
    ["Compara un brazo humano (7 grados de libertad) con uno industrial de 6. ¿Qué ventaja da el grado extra?", "Permite llegar al mismo punto con distintas posturas, por ejemplo para esquivar un obstáculo con el codo. Con 6 se puede colocar la herramienta en cualquier posición y orientación, pero con menos flexibilidad de postura."],
    ["Propón cómo afectará la robótica a un oficio que conozcas y qué nuevas tareas podrían aparecer.", "Respuesta abierta. Ejemplo: en un almacén, los robots moverán estanterías y las personas supervisarán, repararán y programarán los robots y atenderán casos especiales."],
    ["Diseña el programa de un robot que se mueva y se detenga si detecta un obstáculo a menos de 15 cm, usando el ciclo percibir-decidir-actuar.", "por siempre: leer distancia (percibir); si distancia < 15 entonces parar motores y luz roja; si no, avanzar al 50 % y luz verde (decidir y actuar)."],
  ]),
  quiz: H.test([
    ["Un robot se caracteriza por…", ["percibir, decidir y actuar", "tener forma humana", "funcionar con pilas", "no necesitar programa"], "Ciclo de control."],
    ["Los sensores sirven para…", ["captar información del entorno", "mover las ruedas", "dar energía", "sostener el robot"], "Como los sentidos."],
    ["El controlador del robot es como…", ["el cerebro", "los músculos", "el esqueleto", "los ojos"], "Ejecuta el programa."],
    ["Un motor es un…", ["actuador", "sensor", "controlador", "chasis"], "Produce movimiento."],
    ["La palabra robot viene de una obra de…", ["Karel Čapek", "Isaac Asimov", "Ada Lovelace", "Julio Verne"], "R.U.R., 1920."],
    ["El primer robot industrial fue…", ["Unimate", "Perseverance", "Roomba", "ASIMO"], "1961."],
    ["Un dron es un robot…", ["volador", "submarino", "humanoide", "fijo"], "Con hélices."],
    ["Los robots más numerosos en la industria son…", ["los brazos robóticos", "los humanoides", "los drones", "los robots perro"], "Manipuladores fijos."],
    ["Un robot con forma humana se llama…", ["humanoide", "manipulador", "rover", "autómata industrial"], "Cabeza, tronco, brazos, piernas."],
    ["Los grados de libertad son…", ["los movimientos independientes de un robot", "las horas que funciona", "los sensores que tiene", "los programas cargados"], "Uno por articulación."],
    ["El codo es una articulación de…", ["rotación", "deslizamiento lineal", "soldadura", "presión"], "Gira sobre un eje."],
    ["La pinza al final de un brazo robótico es el…", ["efector final", "controlador", "chasis", "sensor"], "Realiza la tarea."],
    ["Un robot controlado a distancia por una persona es…", ["teleoperado", "autónomo", "programado", "humanoide"], "Con mando o consola."],
    ["Un robot que decide solo según sus sensores es…", ["autónomo", "teleoperado", "un autómata", "manual"], "Como el aspirador."],
    ["Arduino es…", ["una placa controladora de hardware libre", "un robot humanoide", "un sensor de luz", "un lenguaje de bloques"], "Creada en Italia."],
    ["micro:bit se programa, por ejemplo, con…", ["MakeCode", "Word", "Photoshop", "una calculadora"], "Bloques o Python."],
    ["Antes de probar un robot real conviene…", ["usar un simulador o una prueba en papel", "ponerlo en el borde de la mesa", "quitarle los sensores", "cambiar las pilas por otras gastadas"], "Seguridad."],
    ["Un robot que se observa y se corrige funciona en…", ["lazo cerrado", "lazo abierto", "modo apagado", "modo manual"], "Usa la información de sus sensores."],
    ["La IA permite a un robot…", ["reconocer patrones aprendidos de datos", "pensar como una persona", "funcionar sin energía", "no equivocarse nunca"], "Se entrena con ejemplos."],
    ["Un reto social de la robótica es…", ["el cambio en los empleos", "que los robots sean de colores", "que no hay robots en Marte", "que no se pueden programar"], "Formación y adaptación."],
  ], 2),
  examen: H.test([
    ["Brazo con base, hombro, codo y muñeca:", ["4 grados de libertad", "2 grados de libertad", "6 grados de libertad", "1 grado de libertad"], "Uno por articulación."],
    ["Un robot recorre 20 cm/s. En 4 s recorre…", ["80 cm", "24 cm", "5 cm", "40 cm"], "20 · 4."],
    ["Un brazo de soldadura que repite siempre lo mismo es…", ["programado", "teleoperado", "autónomo", "humanoide"], "Secuencia fija."],
    ["Perseverance es autónomo porque…", ["las señales tardan minutos en llegar a Marte", "no tiene cámaras", "es muy pequeño", "no hay gravedad"], "Retraso de comunicación."],
    ["Un sensor de choque de un robot aspirador es un elemento de…", ["percepción", "actuación", "estructura", "energía"], "Entrada."],
    ["La diferencia clave entre robot y máquina automática es que el robot…", ["se adapta a lo que percibe", "es más caro", "tiene ruedas", "usa electricidad"], "Percibe y decide."],
    ["Si los datos de entrenamiento de una IA están sesgados, el robot…", ["se equivocará con más facilidad", "funcionará mejor", "no se encenderá", "será teleoperado"], "Calidad de los datos."],
    ["En clase, los robots móviles se prueban…", ["en el suelo con espacio", "en el borde de la mesa", "con la batería abierta", "con los dedos en las ruedas"], "Seguridad."],
  ], 0),
  feynman: ["Qué diferencia a un robot de una máquina automática", "Cómo funciona el ciclo percibir, decidir y actuar", "Qué partes tiene un robot y a qué se parecen en el cuerpo humano", "Qué son los grados de libertad y la autonomía", "Qué beneficios y retos plantean los robots en la sociedad"],
  mapa: H.mapa("ROBÓTICA", "var(--eso)", [
    ["Qué es", "percibir · decidir · actuar", "var(--pen)"],
    ["Partes", "sensores · controlador · actuadores", "var(--red)"],
    ["Tipos", "forma · uso · autonomía", "#b8860b"],
    ["Sociedad", "IA · empleo · ética", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Robot", "Máquina programable que percibe, decide y actúa."],
    ["Robótica", "Une mecánica, electrónica e informática."],
    ["Sensor", "Capta información del entorno: sentidos."],
    ["Controlador", "Placa que ejecuta el programa: cerebro."],
    ["Actuador", "Motor, luz o altavoz que actúa: músculos."],
    ["Čapek, 1920", "Origen de la palabra robot."],
    ["Unimate, 1961", "Primer robot industrial."],
    ["Grados de libertad", "Movimientos independientes; uno por articulación."],
    ["Efector final", "Herramienta del extremo del brazo."],
    ["Autonomía", "Teleoperado · programado · autónomo."],
    ["Placa controladora", "micro:bit, Arduino, mBot."],
    ["Lazo cerrado", "El robot observa el resultado y se corrige."],
  ],
  glosario: [
    ["Robot", "Máquina programable que percibe su entorno, procesa la información y actúa con cierta autonomía."],
    ["Robótica", "Rama de la tecnología que diseña, construye y programa robots."],
    ["Autómata", "Máquina que imita movimientos de seres vivos siguiendo un mecanismo fijo."],
    ["Sensor", "Dispositivo que capta una magnitud del entorno y la convierte en una señal eléctrica."],
    ["Controlador", "Placa electrónica que ejecuta el programa del robot y toma las decisiones."],
    ["Actuador", "Dispositivo que convierte una orden eléctrica en una acción: movimiento, luz o sonido."],
    ["Chasis", "Estructura que sostiene las piezas del robot."],
    ["Articulación", "Unión móvil entre dos partes de un robot, de rotación o lineal."],
    ["Grados de libertad", "Número de movimientos independientes que puede realizar un robot."],
    ["Efector final", "Herramienta situada en el extremo de un brazo robótico."],
    ["Robot teleoperado", "Robot controlado a distancia por una persona."],
    ["Robot autónomo", "Robot que decide por sí mismo según la información de sus sensores."],
    ["Humanoide", "Robot con forma parecida a la del cuerpo humano."],
    ["Microcontrolador", "Pequeño ordenador en un solo chip que controla un aparato."],
    ["Lazo cerrado", "Sistema de control que mide el resultado de sus acciones y se corrige."],
    ["Inteligencia artificial", "Técnicas que permiten a las máquinas reconocer patrones y tomar decisiones a partir de datos."],
  ],
  situacion: {
    titulo: "Un robot que ayuda en el instituto",
    reto: "La dirección del centro pide propuestas de robots que puedan ayudar en el día a día del instituto: repartir material, guiar a visitantes, vigilar el huerto o ayudar a un compañero con movilidad reducida. Vuestro equipo diseñará uno y programará un prototipo sencillo.",
    pasos: [
      "Detectad una necesidad real del centro hablando con alumnos, profesores o personal.",
      "Diseñad el robot: forma, sensores, actuadores, controlador, grados de libertad y nivel de autonomía, con un boceto rotulado.",
      "Escribid su programa en pseudocódigo con el ciclo percibir-decidir-actuar.",
      "Programad un prototipo sencillo con el robot de clase o un simulador que muestre la idea principal.",
      "Analizad los beneficios, los riesgos y las normas de seguridad y privacidad de vuestro robot.",
      "Presentad la propuesta en una feria de ideas con el prototipo funcionando.",
    ],
    producto: "Ficha técnica con boceto, programa del prototipo, análisis de impacto y presentación.",
    evaluacion: [
      "El diseño identifica correctamente sensores, controlador, actuadores y autonomía.",
      "El programa aplica el ciclo percibir-decidir-actuar y funciona en el prototipo.",
      "Se analizan con criterio los beneficios, riesgos, seguridad y privacidad.",
      "La presentación es clara y responde a una necesidad real.",
    ],
  },
  familias: ["Buscad en casa aparatos que tengan sensores y comentad si son robots o máquinas automáticas.", "Ved juntos un vídeo del rover Perseverance o de robots de rescate y comentad cómo perciben su entorno.", "Jugad al «robot humano»: uno da órdenes de movimiento y el otro las ejecuta con los ojos cerrados.", "Hablad de qué trabajos de vuestra familia podrían cambiar con los robots."],
  profesores: {
    saberes: H.saberes("Robótica: concepto de robot, ciclo de percepción, decisión y actuación; componentes (sensores, controladores, actuadores, estructura y alimentación); evolución histórica; clasificación por morfología, aplicación y autonomía; articulaciones y grados de libertad; placas controladoras y programación por bloques de robots; normas de seguridad; robótica, inteligencia artificial e impacto social y ético", "robòtica educativa: components d'un robot, sistemes de control, programació de plaques controladores i anàlisi crítica de l'impacte de l'automatització i la intel·ligència artificial."),
    ideas: [
      "Construir un brazo robótico hidráulico con jeringuillas y cartón para contar grados de libertad.",
      "Clasificar fotos de robots reales por forma, uso y autonomía en un mural.",
      "Primeras pruebas con micro:bit, mBot o el robot del centro: avanzar, girar y luces.",
      "Debate por equipos sobre robots y empleo o sobre coches autónomos.",
      "Proyecto interdisciplinar con Ciencias: robots inspirados en animales (biomimética).",
    ],
  },
  fuentes: [H.RD, H.DEC, H.wiki("Robot", "Robot"), H.wiki("Robótica", "Rob%C3%B3tica"), H.wiki("Perseverance (rover)", "Perseverance_(astrom%C3%B3vil)"), { t: "micro:bit Educational Foundation", url: "https://microbit.org/es-es/" }],
  revisado: H.REV,
};
