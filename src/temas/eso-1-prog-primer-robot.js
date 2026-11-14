// Programación y robótica 1º ESO · Mi primer robot. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const spa = lienzo("Ciclo de un robot: percibe con sensores, piensa con el controlador y actúa con actuadores, y vuelve a empezar", `
  ${[["Percibir", "sensores", "var(--pen)", 50, 60], ["Pensar", "controlador", "var(--sun)", 130, 30], ["Actuar", "actuadores", "var(--red)", 210, 60]].map(([a, b, c, x, y]) => `<circle cx="${x}" cy="${y + 30}" r="34" fill="var(--card)" stroke="${c}" stroke-width="2.6"/>${tx(x, y + 28, a, { fs: 12, c, max: 62 })}${tx(x, y + 44, b, { fs: 9.5, c: "var(--muted)", max: 62 })}`).join("")}
  <path d="M80 72 L98 60 M162 60 L180 72" stroke="var(--muted)" stroke-width="2.4"/><path d="M92 56 L100 58 L96 66 M174 64 L182 74 L172 76" fill="none" stroke="var(--muted)" stroke-width="2.2"/>
  <path d="M190 120 Q130 160 70 120" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>${tx(130, 162, "y vuelta a empezar", { fs: 11, c: "var(--muted)" })}`, 172);

const esRobot = comparar("Máquina programada frente a robot: el robot percibe su entorno y cambia lo que hace según lo que detecta", [
  ["Máquina", ["sigue un programa fijo", "no percibe el entorno", "microondas"], "var(--muted)"],
  ["Robot", ["percibe con sensores", "decide y actúa", "aspiradora robot"], "var(--pen)"],
], "¿Es un robot?");

const partes = lienzo("Partes de un robot educativo: chasis, ruedas con motores, placa controladora, sensor de ultrasonidos, sensor de línea, luces, zumbador y batería", `
  <rect x="60" y="60" width="140" height="70" rx="12" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.4"/>
  <rect x="44" y="70" width="16" height="50" rx="5" fill="var(--ink)"/><rect x="200" y="70" width="16" height="50" rx="5" fill="var(--ink)"/>
  <rect x="95" y="72" width="70" height="36" rx="4" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)"/>${tx(130, 95, "placa", { fs: 10.5, max: 60 })}
  <circle cx="112" cy="46" r="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2.4"/><circle cx="148" cy="46" r="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2.4"/><rect x="100" y="54" width="60" height="6" fill="var(--sun)"/>
  <circle cx="80" cy="118" r="5" fill="var(--red)"/><circle cx="180" cy="118" r="5" fill="var(--red)"/><rect x="118" y="132" width="24" height="8" rx="2" fill="var(--inf)"/>
  ${tx(130, 24, "ultrasonidos (ojos)", { fs: 10.5, c: "var(--sun)", max: 140 })}${tx(12, 148, "motor y rueda", { fs: 10, c: "var(--ink)", a: "start", max: 86 })}${tx(230, 150, "luces LED", { fs: 10, c: "var(--red)", a: "end", max: 80 })}${tx(130, 160, "sensor de línea", { fs: 10, c: "var(--inf)", max: 90 })}`, 170);

const tablaPartes = tabla(["Parte", "Función", "En el cuerpo humano"], [["Sensores", "captar información del entorno", "sentidos"], ["Controlador", "procesar y decidir", "cerebro"], ["Actuadores", "moverse, iluminar, sonar", "músculos"], ["Estructura", "sostener las piezas", "esqueleto"], ["Alimentación", "dar energía", "comida"]]);

const sensores = cajas("Sensores habituales de un robot educativo: ultrasonidos, línea, luz y botón", [
  ["Ultrasonidos", "distancia en cm", "var(--sun)"],
  ["Sigue-líneas", "negro o blanco", "var(--inf)"],
  ["Luz", "cuánta luz hay", "var(--pen)"],
  ["Botón", "pulsado o no", "var(--leaf)"],
], "Los sentidos del robot");

const eco = lienzo("Sensor de ultrasonidos: emite un sonido que rebota en el obstáculo; cuanto más tarda el eco, más lejos está", `
  <rect x="18" y="64" width="40" height="40" rx="6" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"/><circle cx="32" cy="78" r="6" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><circle cx="32" cy="92" r="6" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
  ${[0, 1, 2].map((i) => `<path d="M${70 + i * 22} 70 Q${78 + i * 22} 84 ${70 + i * 22} 98" fill="none" stroke="var(--pen)" stroke-width="2"/>`).join("")}${[0, 1, 2].map((i) => `<path d="M${190 - i * 22} 74 Q${182 - i * 22} 84 ${190 - i * 22} 94" fill="none" stroke="var(--red)" stroke-width="1.6" stroke-dasharray="3 2"/>`).join("")}
  <rect x="210" y="40" width="30" height="90" rx="4" fill="var(--muted)" fill-opacity=".4" stroke="var(--muted)" stroke-width="2"/>${tx(225, 148, "pared", { fs: 10.5, c: "var(--muted)", max: 50 })}
  ${tx(110, 40, "ida", { fs: 11, c: "var(--pen)", max: 40 })}${tx(160, 124, "eco", { fs: 11, c: "var(--red)", max: 40 })}${tx(130, 166, "más tiempo = más distancia", { fs: 11.5, fam: D })}`, 176);

const actuadores = cajas("Actuadores de un robot educativo: motores, luces LED, zumbador y pantalla", [
  ["Motores", "giran las ruedas", "var(--ink)"],
  ["Luces LED", "colores", "var(--red)"],
  ["Zumbador", "notas y pitidos", CAT.sonido],
  ["Pantalla", "dibujos o texto", "var(--pen)"],
], "Lo que hace el robot");

const giros = lienzo("Cómo gira un robot con dos ruedas: si las dos van hacia delante avanza; si una va más rápida, gira; si van en sentidos contrarios, gira sobre sí mismo", `
  ${[["Avanzar", "↑", "↑", 44], ["Girar", "↑", "·", 130], ["Rotar", "↑", "↓", 216]].map(([t, a, b, x]) => `<rect x="${x - 22}" y="44" width="44" height="54" rx="8" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"/><rect x="${x - 32}" y="52" width="10" height="38" rx="3" fill="var(--ink)"/><rect x="${x + 22}" y="52" width="10" height="38" rx="3" fill="var(--ink)"/>${tx(x - 27, 40, a, { fs: 14, c: "var(--leaf)", max: 16 })}${tx(x + 27, 40, b, { fs: 14, c: b === "↓" ? "var(--red)" : "var(--leaf)", max: 16 })}${tx(x, 120, t, { fs: 12, max: 76 })}`).join("")}
  ${tx(130, 154, "dos motores · tres movimientos", { fs: 11.5, fam: D })}`, 166);

const programa = scratch("Programa de bloques de un robot: al pulsar el botón, encender luces verdes, avanzar al 50 por ciento un segundo, girar a la derecha y parar", [
  ["cuando se pulse el botón", "eventos"], ["luces LED en verde", "robot"], ["avanzar a velocidad 50 %", "robot"], ["esperar 1 segundo", "control"], ["girar a la derecha a velocidad 50 %", "robot"], ["esperar 0.5 segundos", "control"], ["parar motores", "robot"], ["tocar nota Do", "sonido"],
], "Primer programa del robot");

const cargar = pasos("Del ordenador al robot: programar, conectar, cargar el programa, probar y depurar", [
  "Programar con bloques",
  "Conectar por cable o Bluetooth",
  "Cargar el programa",
  "Probar en el suelo",
  "Depurar y repetir",
], "Del ordenador al robot");

const esquivar = scratch("Robot que esquiva obstáculos: por siempre, si la distancia es menor que 20 cm, retroceder y girar; si no, avanzar", [
  ["cuando se pulse el botón", "eventos"], ["por siempre", "robot"], ["si (distancia) < 20 cm entonces", "control", 1], ["parar · luces en rojo", "robot", 2], ["retroceder 0.5 seg y girar", "robot", 2], ["si no", "control", 1], ["luces en verde · avanzar", "robot", 2],
], "Esquivar obstáculos");

const linea = lienzo("Robot seguidor de línea: dos sensores miran el suelo; si el izquierdo ve negro, gira a la izquierda; si el derecho ve negro, a la derecha", `
  <path d="M40 160 C60 100 100 120 120 80 C140 40 190 50 220 20" fill="none" stroke="var(--ink)" stroke-width="14" stroke-linecap="round"/>
  <rect x="96" y="70" width="44" height="34" rx="6" fill="var(--pen)" fill-opacity=".4" stroke="var(--pen)" stroke-width="2" transform="rotate(-40 118 87)"/>
  <circle cx="112" cy="70" r="4" fill="var(--sun)"/><circle cx="130" cy="86" r="4" fill="var(--sun)"/>
  ${tx(196, 104, "2 sensores", { fs: 11, c: "var(--sun)", max: 100 })}${tx(196, 122, "blanco · negro", { fs: 11, c: "var(--muted)", max: 100 })}${tx(196, 150, "seguir el borde", { fs: 11.5, fam: D, max: 110 })}`, 172);

const tablaLinea = tabla(["Sensor izquierdo", "Sensor derecho", "El robot…"], [["blanco", "blanco", "avanza (va centrado)"], ["negro", "blanco", "gira a la izquierda"], ["blanco", "negro", "gira a la derecha"], ["negro", "negro", "avanza o para (cruce)"]]);

const usos = cajas("Robots en la sociedad: industria, hogar, medicina y exploración", [
  ["Industria", "montar coches", "var(--ink)"],
  ["Hogar", "aspirar, cortar césped", "var(--leaf)"],
  ["Medicina", "cirugía de precisión", "var(--red)"],
  ["Exploración", "Marte, fondo marino", "var(--pen)"],
], "Robots por todas partes");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Mi primer robot",
  minutos: 110,
  objetivos: [
    "Definir qué es un robot y distinguirlo de una máquina automática",
    "Identificar las partes de un robot: sensores, controlador, actuadores, estructura y alimentación",
    "Conocer cómo funcionan los sensores de distancia y de línea",
    "Programar los movimientos, las luces y los sonidos de un robot con bloques",
    "Construir un robot que esquiva obstáculos y otro que sigue una línea",
    "Reflexionar sobre el papel de los robots en la sociedad",
  ],
  claves: ["robot", "sensor", "actuador", "controlador", "motor", "ultrasonidos", "seguidor de línea", "placa", "cargar programa", "robótica"],
  pregunta: {
    texto: "Un microondas sigue un programa y una lavadora también. ¿Son robots?",
    respuesta: "En sentido estricto, no. Siguen un programa fijo, pero apenas <b>perciben</b> lo que pasa a su alrededor. Un <mark>robot</mark> tiene <b>sensores</b> para captar información del entorno, un <b>controlador</b> que decide qué hacer y <b>actuadores</b> que actúan, y cambia su comportamiento según lo que detecta. Una aspiradora robot que esquiva los muebles sí lo es.",
  },
  lectura: {
    titulo: "Las tortugas de Grey Walter",
    html: `<p>En 1948, en Inglaterra, el neurólogo <b>William Grey Walter</b> construyó dos pequeños robots con forma de tortuga, a los que llamó Elmer y Elsie. Tenían un caparazón de plástico, tres ruedas, dos motores y solo dos «sentidos»: una célula que detectaba la luz y un interruptor que notaba cuándo chocaban con algo.</p><p>Su comportamiento era sorprendente. Se acercaban a la luz, pero si era demasiado intensa se alejaban; si chocaban con un obstáculo, retrocedían y giraban; y cuando su batería se agotaba, buscaban la luz de su «casa» para recargarse. Los visitantes del laboratorio creían que las tortugas estaban vivas.</p><p>Grey Walter quería demostrar que con muy pocas piezas y reglas sencillas se podían conseguir comportamientos que parecían inteligentes. Las suyas fueron de los primeros robots autónomos de la historia. Hoy, los robots educativos que se usan en clase funcionan con la misma idea: sensores, un pequeño «cerebro» y motores. En este tema vas a programar el tuyo para que esquive obstáculos y siga un camino.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es un robot?</h3><p>Un <mark>robot</mark> es una máquina <b>programable</b> capaz de <b>percibir</b> su entorno mediante sensores, <b>procesar</b> esa información y <b>actuar</b> sobre el mundo físico de forma autónoma, es decir, sin que una persona lo controle en cada momento.</p><p>La clave está en la palabra <b>percibir</b>. Un microondas o una lavadora siguen un programa, pero hacen siempre lo mismo pase lo que pase. Una aspiradora robot, en cambio, detecta las paredes, los muebles y los escalones, y cambia de dirección según lo que encuentra.</p><p>La palabra «robot» la inventó el escritor checo <b>Karel Čapek</b> en 1920, en una obra de teatro. Viene de «robota», que en checo significa «trabajo forzado». La <b>robótica</b> es la ciencia y la técnica que diseña, construye y programa robots, y combina la mecánica, la electrónica y la informática.</p>`, svg: esRobot, video: { id: "z5IqRReRKtA", titulo: "¿Cuáles son las partes de un robot?", canal: "RONIN Educación", vistas: 38132 } },
    { html: `<h3>1.2 Percibir, pensar y actuar</h3><p>Todos los robots funcionan siguiendo un <b>ciclo</b> que se repite sin parar, muchas veces por segundo:</p><ol><li><b>Percibir</b>: los sensores miden algo del entorno (distancia, luz, color del suelo, si se pulsa un botón).</li><li><b>Pensar</b>: el controlador recibe esos datos y, siguiendo su programa, decide qué hacer.</li><li><b>Actuar</b>: los actuadores ejecutan la decisión (girar las ruedas, encender una luz, emitir un sonido).</li></ol><p>Y vuelta a empezar. Si te fijas, este ciclo es un <b>bucle «por siempre»</b> con <b>condiciones</b> dentro: lo mismo que ya has programado en Scratch. La diferencia es que ahora los datos vienen del mundo real y las acciones mueven objetos de verdad.</p><p>Las personas también funcionamos así: los ojos ven un semáforo en rojo (percibir), el cerebro decide parar (pensar) y los músculos de las piernas se detienen (actuar).</p>`, svg: spa },
    { html: `<h3>1.3 Las partes de un robot</h3><p>Aunque hay robots de muchas formas, casi todos tienen las mismas partes, que se pueden comparar con las de un ser vivo:</p>${tablaPartes}<p>El <b>controlador</b> suele ser una <b>placa electrónica</b> con un microcontrolador: un pequeño ordenador en un chip que guarda y ejecuta el programa. En los robots educativos se usan placas como las de los kits tipo mBot o micro:bit.</p><p>La <b>estructura</b> o chasis puede ser de metal, plástico, madera o incluso cartón, y sostiene todas las piezas. La <b>alimentación</b> suele ser una batería recargable o pilas. Sin energía, el robot no puede hacer nada, por eso muchos robots modernos, como las aspiradoras, vuelven solos a su base para recargarse.</p>` },
    { html: `<h3>1.4 Un robot educativo por dentro</h3><p>Un robot educativo típico con ruedas tiene estas piezas:</p><ul><li>Un <b>chasis</b> que lo sostiene todo.</li><li>Dos <b>motores</b>, cada uno con su rueda, y una rueda loca o una bola delante o detrás para apoyarse.</li><li>Una <b>placa controladora</b> con conectores para los sensores y los motores, un botón y, a menudo, luces LED y un zumbador incorporados.</li><li>Un <b>sensor de ultrasonidos</b> delante, que parece un par de ojos.</li><li>Un <b>sensor de línea</b> debajo, mirando al suelo.</li><li>Un <b>portapilas</b> o batería.</li></ul><p>Montar el robot es parte del aprendizaje: hay que seguir las instrucciones con cuidado, conectar cada cable en su puerto y comprobar que los tornillos están bien apretados. Muchos fallos de los robots no son del programa, sino de un cable suelto o de unas pilas gastadas.</p>`, svg: partes },
    { html: `<h3>1.5 Sensores de un robot educativo</h3><p>Los <mark>sensores</mark> son los «sentidos» del robot. Los más habituales en los robots de clase son:</p><ul><li><b>Sensor de ultrasonidos</b>: mide la <b>distancia</b> a un obstáculo, en centímetros. Sirve para no chocar.</li><li><b>Sensor de línea</b> (o sigue-líneas): detecta si el suelo debajo es <b>claro u oscuro</b>. Sirve para seguir un camino pintado.</li><li><b>Sensor de luz</b>: mide cuánta luz hay. Sirve para que el robot busque la luz o encienda sus faros a oscuras.</li><li><b>Botón o pulsador</b>: detecta si está pulsado. Sirve para empezar un programa o detectar choques.</li><li>Otros: <b>sonido</b>, <b>temperatura</b>, <b>acelerómetro</b> (inclinación y movimiento), <b>infrarrojos</b> (para mandos a distancia).</li></ul><p>Cada sensor da un dato: un número (la distancia, la luz) o un sí/no (botón pulsado). Con ese dato, el programa decide.</p>`, svg: sensores, video: { id: "4yneo7gBOuo", titulo: "mBot de Makeblock: vistazo rápido", canal: "Honestips (Español)", vistas: 56082 } },
    { html: `<h3>1.6 Cómo mide la distancia el sensor de ultrasonidos</h3><p>El sensor de ultrasonidos funciona como los <b>murciélagos</b> y los <b>delfines</b>. Tiene dos piezas redondas: una emite un sonido muy agudo, que los humanos no oímos (ultrasonido), y la otra escucha el <b>eco</b>.</p><p>El sonido sale, choca con un obstáculo y vuelve. El sensor mide el <b>tiempo</b> que tarda en ir y volver. Como el sonido viaja a unos 340 metros por segundo, el controlador puede calcular la distancia: cuanto más tarda el eco, más lejos está el obstáculo.</p><p>Por ejemplo, si el eco tarda 2 milésimas de segundo en volver, el sonido ha recorrido 340 · 0,002 = 0,68 m en total (ida y vuelta), así que el obstáculo está a 0,34 m, es decir, a 34 cm.</p><p>El sensor tiene límites: no detecta bien objetos muy finos, muy blandos (como un cojín, que absorbe el sonido) o inclinados (el eco rebota hacia otro lado). Por eso conviene probar el robot con distintos obstáculos.</p>`, svg: eco },
    { html: `<h3>1.7 Actuadores: motores, luces y sonido</h3><p>Los <mark>actuadores</mark> son las partes que <b>actúan</b> sobre el mundo:</p><ul><li><b>Motores</b>: hacen girar las ruedas. Se puede elegir la <b>velocidad</b> (por ejemplo, de 0 a 100 %) y el <b>sentido</b> (hacia delante o hacia atrás).</li><li><b>Luces LED</b>: se encienden en distintos colores. Sirven para avisar de lo que está haciendo el robot.</li><li><b>Zumbador</b>: emite pitidos y notas musicales.</li><li><b>Pantalla</b> o matriz de LED: muestra dibujos, números o texto.</li><li>En robots más complejos: <b>servomotores</b> (giran a un ángulo exacto, para brazos y pinzas), bombas, ventiladores…</li></ul><p>Con <b>dos motores</b> se consiguen todos los movimientos: si las dos ruedas giran hacia delante a la misma velocidad, el robot avanza recto; si una va más rápido que la otra, gira hacia el lado de la lenta; si giran en sentidos contrarios, el robot <b>rota sobre sí mismo</b>.</p>`, svg: actuadores },
    { html: `<h3>1.8 Moverse con dos motores</h3><p>Entender cómo se mueve un robot de dos ruedas es clave para programarlo:</p>${tabla(["Motor izquierdo", "Motor derecho", "Movimiento"], [["adelante 50 %", "adelante 50 %", "avanza recto"], ["atrás 50 %", "atrás 50 %", "retrocede"], ["adelante 50 %", "parado", "gira a la derecha"], ["parado", "adelante 50 %", "gira a la izquierda"], ["adelante 50 %", "atrás 50 %", "rota a la derecha sobre sí mismo"]])}<p>En la práctica, los robots no son perfectos: si un motor es un poco más fuerte que el otro, el robot se desvía aunque los dos tengan la misma velocidad. Por eso, en lugar de confiar solo en el tiempo («avanza 2 segundos»), los robots usan los <b>sensores</b> para corregir su camino. Esa es la diferencia entre un programa a ciegas y un robot de verdad.</p>`, svg: giros },
    { html: `<h3>2.1 Programar el robot por bloques</h3><p>Los robots educativos se programan con entornos de <b>bloques</b> muy parecidos a Scratch (mBlock, MakeCode y otros). Además de los bloques habituales de eventos, control y operadores, tienen categorías propias para el robot:</p><ul><li><b>Movimiento</b>: avanzar, retroceder, girar a izquierda o derecha a una velocidad, parar motores.</li><li><b>Luces y sonido</b>: encender LED de un color, tocar una nota.</li><li><b>Sensores</b>: distancia del ultrasonidos, valor del sensor de línea, nivel de luz, ¿botón pulsado?</li><li><b>Eventos</b>: cuando el robot se enciende, cuando se pulsa el botón.</li></ul><p>Un primer programa podría ser: «cuando se pulse el botón: luces en verde, avanzar a velocidad 50 % durante 1 segundo, girar a la derecha medio segundo, parar motores y tocar una nota». Antes de cargarlo, es buena idea leerlo y predecir qué hará el robot.</p>`, svg: programa },
    { html: `<h3>2.2 Del ordenador al robot</h3><p>Hay dos formas de que el robot ejecute un programa:</p><ul><li><b>Modo en directo</b> (conectado): el robot está unido al ordenador por cable USB o Bluetooth, y el programa se ejecuta en el ordenador, que va dando órdenes al robot. Es cómodo para probar, pero el robot no puede alejarse.</li><li><b>Modo cargado</b> (autónomo): el programa se <b>carga</b> («se sube») a la placa del robot. Después se puede desconectar y el robot funciona solo, con su batería.</li></ul><p>El proceso de trabajo es siempre un ciclo: <b>programar</b> → <b>cargar</b> → <b>probar</b> en el suelo → observar qué falla → <b>depurar</b> y volver a empezar. Los robots casi nunca hacen lo que esperas a la primera: los suelos resbalan, las pilas se gastan, los sensores ven cosas inesperadas. Ser paciente y probar en condiciones reales es la mitad del trabajo de un ingeniero de robótica.</p>`, svg: cargar },
    { html: `<h3>2.3 Proyecto 1: el robot que esquiva obstáculos</h3><p>Vamos a programar un robot que se mueve solo por una habitación sin chocar. Usaremos el sensor de <b>ultrasonidos</b> y el ciclo percibir-pensar-actuar:</p><ol><li><b>Por siempre</b>, medir la distancia.</li><li><b>Si</b> la distancia es menor que 20 cm: parar, poner las luces en rojo, retroceder medio segundo y girar.</li><li><b>Si no</b>: poner las luces en verde y avanzar.</li></ol><p>Prueba distintos valores: con 5 cm el robot frenará demasiado tarde y chocará; con 50 cm girará todo el rato aunque el obstáculo esté lejos. También puedes variar el giro: si siempre gira hacia el mismo lado, puede quedarse atrapado en una esquina; si gira hacia un lado <b>al azar</b>, tendrá más posibilidades de salir.</p>`, svg: esquivar, video: { id: "Xqu2ewjxzto", titulo: "Armado de un robot seguidor de línea básico", canal: "Rubén Margon", vistas: 167317 } },
    { html: `<h3>2.4 Proyecto 2: el robot que sigue una línea</h3><p>Un <b>robot seguidor de línea</b> recorre un camino pintado de negro sobre un suelo blanco. Usa dos sensores de línea, uno a cada lado, que miran el suelo. El programa compara lo que ve cada sensor:</p>${tablaLinea}<p>Así, cada vez que el robot empieza a salirse de la línea, uno de los sensores lo detecta y el robot corrige hacia ese lado. Este tipo de robots se usan de verdad en <b>fábricas</b> y <b>almacenes</b>, donde transportan piezas siguiendo líneas pintadas en el suelo.</p><p>Para terminar, piensa en el papel de los robots en la sociedad: montan coches, ayudan en operaciones quirúrgicas, exploran Marte y limpian casas. Hacen trabajos peligrosos, repetitivos o de mucha precisión. Pero también plantean preguntas: ¿qué pasará con los empleos que sustituyen?, ¿quién es responsable si un robot se equivoca? Son debates que tu generación ayudará a resolver.</p>`, svg: linea, video: { id: "05vdHuPkL1I", titulo: "Robot seguidor de línea (cómo funciona)", canal: "El profe García", vistas: 321955 } },
  ],
  ejemplos: [
    { enunciado: "Clasifica: termómetro, aspiradora robot, tostadora, coche autónomo.", pasos: ["Termómetro y tostadora: no deciden según el entorno.", "Aspiradora y coche autónomo: perciben, deciden y actúan."], resultado: "Robots: aspiradora y coche autónomo." },
    { enunciado: "Identifica sensores y actuadores de una aspiradora robot.", pasos: ["Sensores: choque, distancia, escalones, batería.", "Actuadores: motores de ruedas, cepillos, aspirador."], resultado: "Percibe con sensores y actúa con motores." },
    { enunciado: "El eco tarda 0,004 s en volver. ¿A qué distancia está el obstáculo?", pasos: ["Recorrido total: 340 · 0,004 = 1,36 m.", "Es ida y vuelta: 1,36 : 2."], resultado: "0,68 m = 68 cm." },
    { enunciado: "¿Qué hace el robot si el motor izquierdo va adelante y el derecho atrás?", pasos: ["Las ruedas giran en sentidos contrarios.", "El robot rota sobre sí mismo."], resultado: "Rota hacia la derecha." },
    { enunciado: "Programa que el robot pite si alguien se acerca a menos de 10 cm.", pasos: ["por siempre:", "si distancia < 10 entonces tocar nota; luces rojas."], resultado: "Un sencillo detector de presencia." },
    { enunciado: "El seguidor de línea se sale en las curvas cerradas. ¿Qué puedes cambiar?", pasos: ["Reducir la velocidad.", "Girar con más fuerza cuando un sensor ve negro."], resultado: "Más despacio y giros más bruscos." },
  ],
  errores: [
    "Llamar robot a cualquier máquina automática que no percibe el entorno.",
    "Confundir sensores (perciben) con actuadores (actúan).",
    "Programar movimientos solo por tiempo y esperar que el robot vaya siempre igual.",
    "Elegir una distancia de reacción demasiado pequeña o demasiado grande.",
    "Olvidar cargar el programa en el robot o probar con las pilas gastadas.",
    "No probar el robot en el suelo real con obstáculos y líneas reales.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es un robot?", sol: "Una máquina programable que percibe su entorno con sensores, procesa la información y actúa de forma autónoma." },
    { nivel: "básico", q: "¿Quién inventó la palabra «robot» y qué significa?", sol: "Karel Čapek en 1920; viene de «robota», trabajo forzado en checo." },
    { nivel: "básico", q: "Escribe las tres fases del ciclo de un robot.", sol: "Percibir, pensar y actuar." },
    { nivel: "básico", q: "Nombra las cinco partes de un robot.", sol: "Sensores, controlador, actuadores, estructura y alimentación." },
    { nivel: "básico", q: "Relaciona cada parte con el cuerpo humano: sensores, controlador, actuadores.", sol: "Sentidos, cerebro, músculos." },
    { nivel: "básico", q: "¿Qué mide el sensor de ultrasonidos?", sol: "La distancia a un obstáculo." },
    { nivel: "básico", q: "¿Qué detecta el sensor de línea?", sol: "Si el suelo es claro u oscuro." },
    { nivel: "básico", q: "Nombra cuatro actuadores.", sol: "Motores, luces LED, zumbador y pantalla." },
    { nivel: "básico", q: "¿Qué hace el robot si las dos ruedas giran hacia delante a la misma velocidad?", sol: "Avanza recto." },
    { nivel: "básico", q: "¿Qué es cargar un programa en el robot?", sol: "Pasar el programa a la placa para que funcione solo, sin ordenador." },
    { nivel: "básico", q: "Pon dos ejemplos de robots en la sociedad.", sol: "Robots de fábricas de coches y aspiradoras robot (también robots en Marte o quirófanos)." },
    { nivel: "básico", q: "¿Qué animal usa un sistema parecido al sensor de ultrasonidos?", sol: "El murciélago (y el delfín)." },
    { nivel: "medio", q: "¿Es un robot una puerta automática? Razónalo.", sol: "Es un caso límite: percibe y actúa, pero hace siempre lo mismo; muchos la consideran un automatismo, no un robot." },
    { nivel: "medio", q: "El eco tarda 0,001 s. Calcula la distancia al obstáculo.", sol: "340 · 0,001 = 0,34 m (ida y vuelta) → 0,17 m = 17 cm." },
    { nivel: "medio", q: "Completa: motor izquierdo parado, motor derecho adelante → el robot…", sol: "Gira a la izquierda." },
    { nivel: "medio", q: "Programa que el robot dibuje un cuadrado en el suelo (avanzar y girar).", sol: "Repetir 4: avanzar 1 s, girar a la derecha el tiempo necesario para 90°." },
    { nivel: "medio", q: "¿Por qué un robot que avanza «2 segundos» no recorre siempre la misma distancia?", sol: "Por las pilas, el suelo, el peso o diferencias entre motores." },
    { nivel: "medio", q: "Escribe el algoritmo del robot que esquiva obstáculos.", sol: "Por siempre: si distancia < 20 → parar, retroceder y girar; si no → avanzar." },
    { nivel: "medio", q: "¿Qué objetos detecta mal el sensor de ultrasonidos? ¿Por qué?", sol: "Blandos (absorben el sonido), muy finos o inclinados (el eco no vuelve)." },
    { nivel: "medio", q: "Explica la tabla del seguidor de línea cuando el sensor derecho ve negro.", sol: "El robot se está saliendo por la izquierda; gira a la derecha para volver." },
    { nivel: "medio", q: "Programa las luces del robot: verdes al avanzar, rojas al parar.", sol: "Antes de avanzar: LED verde; antes de parar: LED rojo." },
    { nivel: "medio", q: "Diferencia el modo en directo del modo cargado.", sol: "En directo el programa corre en el ordenador conectado; cargado, en el robot autónomo." },
    { nivel: "medio", q: "Diseña un robot «polilla» que vaya hacia la luz. ¿Qué sensor y qué lógica usarías?", sol: "Sensor de luz: si hay más luz a un lado, girar hacia ese lado; si es igual, avanzar." },
    { nivel: "avanzado", q: "El robot que esquiva se queda atrapado en las esquinas. Propón dos mejoras.", sol: "Girar a un lado al azar y girar un ángulo mayor o retroceder más." },
    { nivel: "avanzado", q: "Diseña un robot aparcador: debe parar exactamente a 10 cm de la pared. Escribe el programa.", sol: "repetir hasta que distancia < 10: avanzar despacio; parar motores." },
    { nivel: "avanzado", q: "¿Qué pasa con el seguidor de línea si los dos sensores ven negro? Propón qué hacer en un cruce.", sol: "Hay un cruce o línea ancha; se puede avanzar recto, parar o decidir un giro programado." },
    { nivel: "avanzado", q: "Compara las tortugas de Grey Walter con un robot educativo actual.", sol: "Ambos tienen sensores, controlador y motores; las tortugas usaban circuitos analógicos, los actuales un microcontrolador programable." },
    { nivel: "avanzado", q: "Debate: escribe dos ventajas y dos inconvenientes de usar robots en el trabajo.", sol: "Ventajas: trabajos peligrosos y precisión. Inconvenientes: pérdida de empleos y responsabilidad ante errores." },
    { nivel: "avanzado", q: "Diseña un robot de rescate para un edificio derrumbado: ¿qué sensores y actuadores necesitaría?", sol: "Sensores: distancia, cámara, temperatura, sonido; actuadores: orugas, luces, altavoz, brazo." },
  ],
  quiz: [
    { q: "Un robot se diferencia de una máquina automática en que…", o: ["es más caro", "percibe el entorno y decide", "tiene luces", "es de metal"], a: 1, e: "Sensores y decisión." },
    { q: "El ciclo de un robot es…", o: ["correr, saltar, parar", "percibir, pensar, actuar", "cargar, borrar, guardar", "ver, oír, oler"], a: 1, e: "Percibir-pensar-actuar." },
    { q: "Los sensores son como…", o: ["los músculos", "los sentidos", "el esqueleto", "la comida"], a: 1, e: "Captan información." },
    { q: "El controlador es como…", o: ["los sentidos", "el cerebro", "los huesos", "la piel"], a: 1, e: "Decide." },
    { q: "Los actuadores son como…", o: ["el cerebro", "los músculos", "los ojos", "la sangre"], a: 1, e: "Actúan." },
    { q: "La palabra robot la inventó…", o: ["Grey Walter", "Karel Čapek", "Ada Lovelace", "Boole"], a: 1, e: "Obra de teatro de 1920." },
    { q: "El sensor de ultrasonidos mide…", o: ["la luz", "la distancia", "la temperatura", "el color"], a: 1, e: "Con el eco." },
    { q: "El sensor de línea detecta…", o: ["sonidos", "suelo claro u oscuro", "distancias", "botones"], a: 1, e: "Blanco o negro." },
    { q: "Un motor es un…", o: ["sensor", "actuador", "controlador", "programa"], a: 1, e: "Actúa." },
    { q: "Un zumbador sirve para…", o: ["medir distancias", "emitir sonidos", "ver colores", "cargar pilas"], a: 1, e: "Pitidos y notas." },
    { q: "Ruedas en sentidos contrarios: el robot…", o: ["avanza", "rota sobre sí mismo", "se para", "retrocede"], a: 1, e: "Gira en el sitio." },
    { q: "Rueda izquierda adelante y derecha parada: gira a la…", o: ["izquierda", "derecha", "no gira", "atrás"], a: 1, e: "Hacia el lado parado." },
    { q: "La placa controladora contiene…", o: ["un motor", "un microcontrolador", "una rueda", "un sensor de línea"], a: 1, e: "Pequeño ordenador." },
    { q: "Cargar el programa permite que el robot…", o: ["se apague", "funcione solo", "cambie de color", "no se mueva"], a: 1, e: "Autónomo." },
    { q: "El sonido viaja a unos…", o: ["34 m/s", "340 m/s", "3 400 m/s", "3 m/s"], a: 1, e: "En el aire." },
    { q: "El ultrasonidos detecta mal…", o: ["una pared", "un cojín blando", "una caja", "una puerta"], a: 1, e: "Absorbe el sonido." },
    { q: "Para no chocar, el robot comprueba la distancia…", o: ["una vez", "por siempre", "nunca", "al final"], a: 1, e: "Bucle." },
    { q: "Si el sensor izquierdo ve negro, el seguidor gira a la…", o: ["derecha", "izquierda", "atrás", "no gira"], a: 1, e: "Hacia la línea." },
    { q: "Las tortugas de Grey Walter eran…", o: ["animales", "de los primeros robots autónomos", "videojuegos", "juguetes de cuerda"], a: 1, e: "1948." },
    { q: "Un robot de fábrica que monta coches trabaja en…", o: ["el hogar", "la industria", "Marte", "el mar"], a: 1, e: "Industria." },
  ],
  examen: [
    { q: "Eco de 0,002 s. Distancia:", o: ["68 cm", "34 cm", "17 cm", "340 cm"], a: 1, e: "340 · 0,002 : 2." },
    { q: "Ruedas: izquierda parada, derecha adelante. El robot…", o: ["gira a la derecha", "gira a la izquierda", "avanza", "retrocede"], a: 1, e: "Hacia el lado parado." },
    { q: "¿Cuál es un sensor?", o: ["motor", "botón", "LED", "zumbador"], a: 1, e: "Detecta pulsación." },
    { q: "¿Cuál es un actuador?", o: ["ultrasonidos", "luz LED", "sensor de línea", "sensor de luz"], a: 1, e: "Actúa." },
    { q: "«si distancia < 20 → girar; si no → avanzar» va dentro de…", o: ["un evento sin bucle", "por siempre", "un sonido", "nada"], a: 1, e: "Ciclo continuo." },
    { q: "Los dos sensores ven blanco. El seguidor…", o: ["gira", "avanza", "retrocede", "rota"], a: 1, e: "Va centrado." },
    { q: "Para que el robot funcione sin cable hay que…", o: ["modo en directo", "cargar el programa", "quitar las pilas", "apagarlo"], a: 1, e: "Autónomo." },
    { q: "Robot = máquina que…", o: ["solo gira", "percibe, decide y actúa", "solo se enciende", "tiene pantalla"], a: 1, e: "Definición." },
  ],
  feynman: ["Qué diferencia hay entre una máquina automática y un robot", "Cómo funciona el ciclo percibir, pensar y actuar", "Cómo mide la distancia un sensor de ultrasonidos", "Cómo decide un robot seguidor de línea hacia dónde girar"],
  figura: {
    titulo: "Mi primer robot en un vistazo",
    svg: resumen("Resumen: robot, ciclo, sensores, actuadores, programación y proyectos", [
      ["Robot", "percibe · piensa · actúa · autónomo", "var(--pen)"],
      ["Sensores", "ultrasonidos · línea · luz · botón", "var(--sun)"],
      ["Actuadores", "motores · LED · zumbador · pantalla", "var(--red)"],
      ["Programar", "bloques · cargar · probar · depurar", CAT.robot],
      ["Proyectos", "esquivar obstáculos · seguir línea", "var(--leaf)"],
    ]),
  },
  video: { id: "05vdHuPkL1I", titulo: "Robot seguidor de línea (cómo funciona)", canal: "El profe García", vistas: 321955, megusta: 0, busqueda: "robot educativo seguidor de linea como funciona" },
  mapa: mapa("ROBOT", CAT.robot, [
    ["Percibir", "sensores", "var(--sun)"],
    ["Pensar", "placa · programa", "var(--pen)"],
    ["Actuar", "motores · luces · sonido", "var(--red)"],
    ["Proyectos", "esquivar · seguir línea", "var(--leaf)"],
  ], 250),
  glosario: [
    ["Robot", "Máquina programable que percibe, decide y actúa de forma autónoma."],
    ["Robótica", "Ciencia y técnica que diseña, construye y programa robots."],
    ["Sensor", "Dispositivo que capta información del entorno."],
    ["Actuador", "Dispositivo que actúa sobre el entorno: motor, luz, sonido."],
    ["Controlador", "Placa que ejecuta el programa y toma decisiones."],
    ["Microcontrolador", "Pequeño ordenador en un chip."],
    ["Ultrasonidos", "Sonido muy agudo que usamos para medir distancias con el eco."],
    ["Sensor de línea", "Sensor que distingue suelo claro de oscuro."],
    ["Motor", "Actuador que convierte la electricidad en movimiento giratorio."],
    ["Servomotor", "Motor que gira hasta un ángulo exacto."],
    ["Autónomo", "Que funciona solo, sin control humano directo."],
    ["Cargar un programa", "Pasar el programa del ordenador a la placa del robot."],
    ["Seguidor de línea", "Robot que recorre un camino pintado en el suelo."],
  ],
  situacion: {
    titulo: "Robots al rescate",
    reto: "En equipos, vais a programar un robot educativo para que recorra un circuito con una línea, esquive obstáculos y avise con luces y sonidos cuando llegue a la meta.",
    pasos: [
      "Montad o revisad el robot: conexiones, pilas y sensores.",
      "Probad cada sensor por separado y anotad sus valores.",
      "Programad el seguimiento de línea y ajustad la velocidad.",
      "Añadid la detección de obstáculos y las señales de luz y sonido.",
      "Haced una carrera en el circuito, anotad tiempos y fallos, y depurad.",
    ],
    producto: "Un robot programado que completa el circuito y un diario de pruebas del equipo.",
    evaluacion: ["Identifica y usa bien sensores y actuadores.", "El programa usa bucles y condiciones de forma correcta.", "Prueba, mide y mejora el robot de forma sistemática.", "Trabaja en equipo y explica el funcionamiento."],
  },
  tarjetas: [
    ["Robot", "Percibe, piensa, actúa"], ["Sensor", "Sentidos"], ["Controlador", "Cerebro"],
    ["Actuador", "Músculos"], ["Ultrasonidos", "Distancia por eco"], ["Sensor de línea", "Claro u oscuro"],
    ["Motores", "Ruedas"], ["LED", "Luces de colores"], ["Zumbador", "Sonidos"],
    ["Cargar", "Robot autónomo"], ["Rotar", "Ruedas en sentidos contrarios"], ["Čapek", "Inventó la palabra"],
  ],
  familias: ["Buscad en casa aparatos con sensores y decidid juntos si son robots.", "Ved un vídeo de robots de rescate o de exploración espacial y comentadlo.", "Jugad a ser un robot: uno da órdenes de motores y el otro las ejecuta.", "Hablad sobre qué trabajos os gustaría que hicieran los robots y cuáles no."],
  profesores: {
    saberes: "Robótica educativa: concepto de robot, ciclo percepción-procesamiento-actuación, sensores (ultrasonidos, línea, luz, pulsador), actuadores (motores, LED, zumbador), placa controladora, programación por bloques, carga del programa, proyectos de evitación de obstáculos y seguimiento de línea; impacto social de la robótica (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Medir con el sensor de ultrasonidos y comparar con una regla.", "Circuito de cinta aislante negra en el suelo del aula.", "Actividad desenchufada de «robot humano» con órdenes de motores.", "Debate sobre robots y empleo."],
  },
  fuentes: [RD, wiki("Robot", "Robot"), wiki("Robótica", "Robótica"), wiki("William Grey Walter", "William_Grey_Walter"), wiki("Karel Čapek", "Karel_Čapek")],
  revisado: REV,
};
