// Tecnología e Ingeniería II 2º Bachillerato · Tema 13. Nivel libro. Dibujos propios en SVG.
const { marco, T, ficha, pasos, compara, rejilla, ciclo, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-ti");

// Piezas de un esquema de contactos (ladder).
const NA = (x, y) => `<path d="M${x} ${y - 9} V ${y + 9} M${x + 12} ${y - 9} V ${y + 9}" stroke="var(--ink)" stroke-width="2"/>`;
const NC = (x, y) => `${NA(x, y)}<path d="M${x - 2} ${y + 9} L ${x + 14} ${y - 9}" stroke="var(--red)" stroke-width="1.8"/>`;
const bob = (x, y) => `<path d="M${x - 3} ${y - 9} Q ${x - 10} ${y} ${x - 3} ${y + 9} M${x + 3} ${y - 9} Q ${x + 10} ${y} ${x + 3} ${y + 9}" fill="none" stroke="var(--pen)" stroke-width="2"/>`;
const hilo = (d) => `<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="1.6"/>`;

// Marcha-paro con autoenclavamiento en lenguaje de contactos.
const ladderSVG = marco("Esquema de contactos de un arranque con marcha y paro: el contacto cerrado de paro S0 en serie con el pulsador de marcha S1, en paralelo con el contacto de autoenclavamiento KM, activa la bobina KM; un segundo escalón enciende el piloto H1 con KM", `
  <path d="M16 22 V 158 M244 22 V 158" stroke="var(--ink)" stroke-width="3"/>
  ${hilo("M16 56 H 40 M52 56 H 80 M92 56 H 188 M204 56 H 244")}${NC(40, 56)}${NA(80, 56)}${bob(196, 56)}
  ${hilo("M68 56 V 98 H 80 M92 98 H 108 V 56")}${NA(80, 98)}
  ${hilo("M16 136 H 80 M92 136 H 188 M204 136 H 244")}${NA(80, 136)}${bob(196, 136)}
  ${T(46, 38, "S0", { fs: 10.5, b: true, c: "var(--red)" })}${T(86, 38, "S1", { fs: 10.5, b: true })}${T(196, 38, "KM", { fs: 10.5, b: true, c: "var(--pen)" })}
  ${T(86, 120, "KM", { fs: 10, b: true })}${T(130, 92, "autoenclavamiento", { fs: 9.5, c: "var(--muted)", a: "start" })}
  ${T(86, 158, "KM", { fs: 10, b: true })}${T(196, 158, "H1", { fs: 10.5, b: true, c: "var(--pen)" })}
  ${T(46, 80, "paro", { fs: 9, c: "var(--muted)" })}${T(130, 172, "S0 paro (NC) · S1 marcha (NA) · KM contactor", { fs: 9.5, c: "var(--muted)" })}`);

// Grafcet de un ciclo de taladrado.
const grafcetSVG = (() => {
  const et = (y, n, ini) => `<rect x="40" y="${y}" width="22" height="22" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${ini ? `<rect x="43" y="${y + 3}" width="16" height="16" fill="none" stroke="var(--ink)" stroke-width="1.4"/>` : ""}${T(51, y + 15, n, { fs: 11, b: true })}`;
  const tr = (y, txt) => `<path d="M43 ${y} H 59" stroke="var(--ink)" stroke-width="3"/>${T(70, y + 4, txt, { fs: 9.5, a: "start", c: "var(--red)", b: true })}`;
  const acc = (y, txt) => `<path d="M62 ${y + 11} H 110" stroke="var(--ink)" stroke-width="1.4"/><rect x="110" y="${y + 1}" width="120" height="20" fill="var(--card)" stroke="var(--pen)" stroke-width="1.6"/>${T(170, y + 15, txt, { fs: 9.5, b: true, c: "var(--pen)" })}`;
  return marco("Grafcet de un taladro: etapa inicial 0 de reposo; al pulsar marcha con la pieza presente pasa a la etapa 1, que baja el taladro girando; al llegar al final de carrera inferior pasa a la etapa 2, que lo sube; al llegar arriba vuelve a la etapa 0", `
  ${hilo("M51 8 V 12 M51 34 V 52 M51 74 V 92 M51 114 V 132 M51 154 V 166 H 22 V 4 H 51 V 12")}<path d="M18 90 L 22 82 L 26 90 Z" fill="var(--ink)"/>
  ${et(12, "0", true)}${tr(43, "marcha · pieza")}${et(52, "1")}${acc(52, "Bajar + girar")}${tr(83, "b1 (abajo)")}${et(92, "2")}${acc(92, "Subir + girar")}${tr(123, "b0 (arriba)")}
  ${T(170, 160, "etapa · transición · acción", { fs: 9.5, c: "var(--muted)" })}`);
})();

// Cronograma de un temporizador a la conexión (TON).
const tonSVG = marco("Cronograma de un temporizador a la conexión TON de 3 segundos: la salida Q se activa 3 segundos después de que la entrada IN pase a uno y se desactiva cuando IN vuelve a cero; un pulso de entrada más corto que 3 segundos no llega a activar la salida", `
  ${T(18, 56, "IN", { fs: 11, b: true, a: "start" })}${T(18, 116, "Q", { fs: 11, b: true, a: "start", c: "var(--red)" })}
  <path d="M40 62 H 60 V 34 H 170 V 62 H 196 V 34 H 220 V 62 H 248" fill="none" stroke="var(--pen)" stroke-width="2.4"/>
  <path d="M40 122 H 120 V 94 H 170 V 122 H 248" fill="none" stroke="var(--red)" stroke-width="2.4"/>
  <path d="M60 70 V 136 M120 70 V 136" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M60 142 H 120" stroke="var(--ink)" stroke-width="1.4"/><path d="M60 138 V 146 M120 138 V 146" stroke="var(--ink)" stroke-width="1.4"/>${T(90, 158, "PT = 3 s", { fs: 10.5, b: true })}
  ${T(208, 84, "pulso < PT:", { fs: 9.5, c: "var(--muted)" })}${T(208, 144, "Q no se activa", { fs: 9.5, c: "var(--muted)" })}${T(130, 24, "Temporizador TON", { fs: 11.5, b: true })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Automatización programada: sensores, actuadores y autómatas",
  minutos: 120,
  objetivos: [
    "Distinguir la automatización cableada de la programada y valorar las ventajas de esta",
    "Seleccionar sensores y actuadores adecuados para una aplicación industrial",
    "Describir la estructura y el ciclo de funcionamiento de un autómata programable",
    "Programar automatismos sencillos en lenguaje de contactos con temporizadores y contadores",
    "Modelar procesos secuenciales con Grafcet y traducirlos a un programa",
    "Aplicar criterios de seguridad en el diseño de automatismos",
  ],
  claves: ["automatización", "lógica cableada", "lógica programada", "autómata programable", "PLC", "ciclo de scan", "entradas y salidas", "sensor inductivo", "sensor capacitivo", "sensor fotoeléctrico", "contactor", "electroválvula", "lenguaje de contactos", "autoenclavamiento", "temporizador", "contador", "Grafcet", "IEC 61131-3"],
  pregunta: {
    texto: "Una fábrica de coches cambia de modelo cada pocos años. Antes había que recablear armarios enteros llenos de relés; hoy basta con cargar un programa nuevo en unos aparatos del tamaño de un libro. ¿Qué aparato es ese y por qué cambió la industria?",
    respuesta: "Es el <mark>autómata programable</mark> o PLC (controlador lógico programable). Lee las señales de los <b>sensores</b>, ejecuta un programa y gobierna los <b>actuadores</b>. Como la lógica está en el programa y no en los cables, modificar el funcionamiento es tan sencillo como editarlo. Nació en 1968, precisamente porque General Motors necesitaba cambiar sus líneas de montaje sin rehacer miles de conexiones.",
  },
  lectura: {
    titulo: "El encargo de General Motors",
    html: `<p>En 1968, la división Hydramatic de General Motors publicó un pliego de condiciones curioso: quería un «controlador estándar de máquinas» que sustituyera a los armarios de relés de sus líneas de montaje. Cada cambio de modelo obligaba a desmontar y recablear cientos de relés, lo que costaba semanas y mucho dinero. El nuevo aparato debía ser programable, resistir el ambiente de la fábrica, ser fácil de mantener por los electricistas y competir en precio con los relés.</p><p>Un pequeño equipo dirigido por el ingeniero Dick Morley, de la empresa Bedford Associates, presentó el <b>Modicon 084</b>: una caja robusta, sin ventiladores ni discos, que se programaba con un lenguaje que imitaba los esquemas de relés que los electricistas ya conocían. Ese lenguaje es el <b>diagrama de contactos</b> o <i>ladder</i>, que todavía hoy se usa en todo el mundo.</p><p>Medio siglo después, los autómatas controlan desde depuradoras y metros hasta parques de atracciones, y se comunican en red con robots, pantallas táctiles y la nube. En este tema aprenderás cómo perciben el mundo, cómo deciden y cómo actúan.</p>`,
  },
  bloques: [
    bloque({ h: "13.1 La automatización industrial", p: [
      "<b>Automatizar</b> un proceso es conseguir que funcione con la mínima intervención humana, transfiriendo las tareas de control y, a menudo, también las de fuerza a máquinas. Un sistema automatizado tiene dos partes: la <b>parte operativa</b>, que actúa sobre el proceso (motores, cilindros, resistencias) e incluye los sensores, y la <b>parte de mando</b> o de control, que recibe información de los sensores y del operador y decide qué deben hacer los actuadores.",
      "La automatización aumenta la productividad y la calidad (las piezas salen iguales), reduce costes, libera a las personas de trabajos repetitivos, peligrosos o insalubres y permite procesos imposibles a mano (por precisión o velocidad). Sus inconvenientes son la inversión inicial, la necesidad de personal cualificado para el mantenimiento y su impacto en algunos empleos, que exige formación y recolocación.",
      "Según cómo se procese la información, los automatismos pueden ser <b>combinacionales</b> (las salidas dependen solo de las entradas actuales, como una puerta que se abre si hay alguien delante y no está bloqueada) o <b>secuenciales</b> (dependen también de lo que ha pasado antes, como un ciclo de lavado). La mayoría de los procesos industriales son secuenciales.",
    ], svg: compara("Partes de un sistema automatizado: parte operativa con sensores y actuadores, y parte de mando con el autómata y el diálogo con el operador", ["Parte operativa", ["proceso o máquina", "actuadores", "sensores", "energía de potencia"]], ["Parte de mando", ["autómata o relés", "programa", "pulsadores, pantalla", "señales de control"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "13.2 Lógica cableada y lógica programada", p: [
      "En la <b>lógica cableada</b>, la función del automatismo depende de cómo se conectan físicamente sus componentes: relés, contactores, temporizadores y pulsadores. Es la solución clásica y sigue siendo útil para automatismos muy sencillos (el arranque de un motor) o para circuitos de seguridad. Sus desventajas: ocupa mucho espacio, cualquier cambio exige recablear, la búsqueda de averías es lenta y los contactos se desgastan.",
      "En la <mark>lógica programada</mark>, la función está en un programa que se ejecuta en un dispositivo electrónico: un <b>autómata programable</b> (PLC), un microcontrolador o un ordenador industrial. El cableado se reduce a conectar sensores a las entradas y actuadores a las salidas; la lógica que los relaciona se escribe y se modifica en el programa.",
      "Las ventajas de la lógica programada son claras: flexibilidad para cambiar el funcionamiento, menor tamaño, posibilidad de funciones complejas (cálculos, temporizaciones precisas, regulación PID, comunicaciones), diagnóstico de averías, registro de datos y menor coste en automatismos medianos y grandes. Por eso es la base de la industria actual.",
    ], svg: rejilla("Comparación entre lógica cableada y lógica programada en flexibilidad, tamaño, funciones y diagnóstico", ["Criterio", "Cableada", "Programada"], [["Cambios", "recablear", "editar programa"], ["Tamaño", "grande", "compacto"], ["Funciones", "sencillas", "cálculo, red, PID"], ["Averías", "difícil", "diagnóstico"], ["Coste", "bajo si es simple", "bajo si es complejo"]], "var(--pen)") }),
    bloque({ h: "13.3 Sensores todo o nada", p: [
      "Los <b>detectores</b> o sensores todo o nada dan una señal binaria: hay o no hay objeto. Los más sencillos son los <b>pulsadores</b>, los interruptores y los <b>finales de carrera</b>, que se accionan mecánicamente por contacto (una leva, el vástago de un cilindro) y tienen contactos normalmente abiertos (NA) o normalmente cerrados (NC).",
      "Los <b>detectores de proximidad</b> funcionan sin contacto. Los <mark>inductivos</mark> generan un campo magnético alterno y detectan objetos <b>metálicos</b> a pocos milímetros, porque las corrientes inducidas en el metal amortiguan su oscilador; son robustos y muy usados en máquinas. Los <b>capacitivos</b> detectan cualquier material (plástico, madera, líquidos, granos) porque su presencia cambia la capacidad de un condensador; sirven, por ejemplo, para el nivel de un silo. Los <b>magnéticos</b> (reed o de efecto Hall) detectan un imán, como el del émbolo de un cilindro neumático.",
      "Los <b>fotoeléctricos</b> usan un emisor de luz (normalmente infrarroja) y un receptor: de <b>barrera</b> (emisor y receptor enfrentados; el objeto corta el haz; alcance de decenas de metros), <b>réflex</b> (con un espejo reflector) y de <b>reflexión directa</b> (la luz rebota en el propio objeto). Los de <b>ultrasonidos</b> miden el tiempo del eco y detectan cualquier material, incluso transparente.",
      "Los detectores electrónicos tienen salida de transistor <b>PNP</b> (entrega tensión positiva a la entrada del autómata cuando detecta; habitual en Europa) o <b>NPN</b> (conecta la entrada a 0 V). Hay que elegir el tipo que corresponda a las entradas del autómata.",
    ], svg: rejilla("Detectores de proximidad: inductivo para metales, capacitivo para cualquier material, magnético para imanes, fotoeléctrico y ultrasonidos", ["Detector", "Detecta", "Ejemplo"], [["Inductivo", "metales", "piezas de acero"], ["Capacitivo", "todo material", "nivel de grano"], ["Magnético", "imanes", "émbolo cilindro"], ["Fotoeléctrico", "corte de luz", "cinta, puertas"], ["Ultrasonidos", "eco", "nivel, distancia"]], "var(--leaf)"), video: V("au-sensores", "Cómo funcionan los sensores capacitivos, inductivos y ópticos", "sensores inductivos capacitivos ópticos") }),
    bloque({ h: "13.4 Sensores analógicos", p: [
      "Cuando no basta con saber si algo está o no, sino cuánto, se usan sensores <b>analógicos</b>, que dan una señal proporcional a la magnitud: temperatura (Pt100, termopar), presión, nivel, caudal, distancia, peso (células de carga con galgas) o posición (potenciómetros). Ya se estudiaron en el tema de control.",
      "En la industria, sus señales se normalizan con un <b>transmisor</b>: <b>0-10 V</b> o, mejor, <mark>4-20 mA</mark>. La señal de corriente no se ve afectada por la resistencia de cables largos y el «cero vivo» de 4 mA permite detectar un cable roto (0 mA). El autómata las lee con una <b>entrada analógica</b>, que contiene un conversor A/D. Con una resolución de n bits, el rango se divide en 2<sup>n</sup> valores.",
      formula("Valor = mín + (I − 4 mA) / 16 mA · (máx − mín)"),
      "Ejemplo: un transmisor de presión de 0 a 10 bar da 4-20 mA. Si mide 13,6 mA, la presión es 0 + (13,6 − 4)/16 · 10 = 6 bar. Con un conversor de 12 bits (4096 valores) la resolución es 10 bar/4096 ≈ 2,4 mbar.",
      "Cada vez se usan más los sensores <b>digitales inteligentes</b>, que envían el valor ya convertido por un bus de comunicaciones (IO-Link, Profibus, Modbus) junto con datos de diagnóstico.",
    ], svg: ficha("Señal normalizada 4-20 mA: 4 miliamperios corresponden al mínimo, 20 al máximo y 0 indica un cable roto", "Señal 4-20 mA", ["4 mA = valor mínimo", "20 mA = valor máximo", "0 mA = cable roto", "no le afectan los cables largos"], "var(--pen)") }),
    bloque({ h: "13.5 Actuadores", p: [
      "Los <b>actuadores</b> transforman las órdenes de la parte de mando en acciones sobre el proceso. Los <b>eléctricos</b> incluyen motores (de inducción trifásicos, de corriente continua, paso a paso y servomotores), resistencias calefactoras, lámparas y electroimanes. Los <b>neumáticos</b> e <b>hidráulicos</b> son cilindros y motores gobernados por electroválvulas (tema 8): una salida del autómata excita la bobina de la electroválvula, y esta dirige el aire o el aceite al cilindro.",
      "Las salidas de un autómata no pueden alimentar directamente cargas grandes. Se usan elementos <b>preaccionadores</b>: el <b>relé</b> (un electroimán que mueve contactos), el <mark>contactor</mark> (un relé robusto para conmutar motores y cargas de potencia, con contactos principales y auxiliares), el <b>relé de estado sólido</b> (sin partes móviles, para conmutaciones rápidas como el PWM de una resistencia) y el <b>variador de frecuencia</b>, que regula la velocidad de los motores de inducción variando la frecuencia de la tensión.",
      "Los motores se protegen con un <b>interruptor magnetotérmico</b> (cortocircuitos) y un <b>relé térmico</b> o guardamotor (sobrecargas). Para invertir el giro de un motor trifásico se usan dos contactores que intercambian dos fases, con un <b>enclavamiento</b> eléctrico (un contacto NC de cada uno en la bobina del otro) que impide que se activen a la vez, porque provocarían un cortocircuito.",
    ], svg: pasos("Cadena de mando de un motor: la salida del autómata activa la bobina del contactor, el contactor conmuta la potencia y el motor gira protegido por el relé térmico", ["Salida del autómata (24 V)", "Bobina del contactor", "Contactos de potencia", "Motor con relé térmico"], "var(--red)") }),
    bloque({ h: "13.6 El autómata programable", p: [
      "Un <mark>autómata programable</mark> o <b>PLC</b> (<i>programmable logic controller</i>) es un ordenador industrial diseñado para controlar procesos en tiempo real en ambientes hostiles (polvo, vibraciones, ruido eléctrico, temperaturas extremas). Sus partes son: la <b>fuente de alimentación</b> (normalmente 24 V de continua), la <b>CPU</b> (procesador que ejecuta el programa), la <b>memoria</b> (de programa, de datos y del sistema operativo), los módulos de <b>entradas</b> y de <b>salidas</b>, digitales y analógicas, y las <b>interfaces de comunicación</b> (Ethernet, Profinet, Modbus).",
      "Las <b>entradas digitales</b> reciben las señales de pulsadores y detectores, normalmente de 24 V, aisladas mediante optoacopladores. Las <b>salidas digitales</b> pueden ser de <b>relé</b> (sirven para continua y alterna, pero son lentas y se desgastan), de <b>transistor</b> (rápidas, solo para continua) o de <b>triac</b> (para alterna). Las direcciones de entradas y salidas se nombran según el fabricante, por ejemplo I0.0 o %I0.0 para la primera entrada y Q0.0 para la primera salida.",
      "Por su forma, hay autómatas <b>compactos</b> (todo en una caja, para máquinas pequeñas), <b>modulares</b> (se añaden módulos según las necesidades) y los <b>relés programables</b> o nanoautómatas (como los usados en domótica y en el aula). También existen autómatas de seguridad, con hardware redundante, para proteger a las personas.",
    ], svg: ficha("Partes de un autómata programable: fuente de alimentación, CPU, memoria, entradas, salidas y comunicaciones", "Autómata programable", ["Fuente: 24 V DC", "CPU + memoria", "Entradas: I0.0, I0.1…", "Salidas: Q0.0 (relé o transistor)"], "var(--red)"), video: V("au-plc", "Qué es un PLC y cómo funciona", "qué es un PLC autómata programable") }),
    bloque({ h: "13.7 El ciclo de scan", p: [
      "El autómata no ejecuta las instrucciones «cuando ocurren las cosas», sino en un bucle continuo llamado <mark>ciclo de scan</mark>. En cada ciclo: <b>1)</b> lee el estado de todas las entradas y lo guarda en una memoria, la <b>imagen de proceso de entradas</b>; <b>2)</b> ejecuta el programa completo, de arriba abajo, usando esa imagen y calculando los nuevos valores de las salidas en la <b>imagen de proceso de salidas</b>; <b>3)</b> copia esa imagen a las salidas físicas. Además, realiza tareas internas de autodiagnóstico y comunicaciones.",
      "El <b>tiempo de ciclo</b> suele ser de unos pocos milisegundos (depende de la longitud del programa y de la velocidad de la CPU). Esto tiene consecuencias: una señal de entrada más corta que un ciclo puede pasar desapercibida (para pulsos muy rápidos hay entradas de interrupción y contadores rápidos), y el tiempo de reacción máximo ante un cambio es de unos dos ciclos.",
      "Como el programa se ejecuta en orden, si una salida se escribe en dos escalones distintos, solo cuenta el último. Por eso cada bobina debe aparecer una sola vez en el programa. Un <b>vigilante</b> (<i>watchdog</i>) detiene el autómata y pone las salidas en estado seguro si un ciclo tarda demasiado, por ejemplo por un bucle infinito.",
    ], svg: ciclo("Ciclo de scan de un autómata: leer las entradas, ejecutar el programa y escribir las salidas, una y otra vez cada pocos milisegundos", ["Leer entradas", "Ejecutar programa", "Escribir salidas"], "var(--pen)", "pocos ms") }),
    bloque({ h: "13.8 Lenguajes de programación", p: [
      "La norma internacional <b>IEC 61131-3</b> define los lenguajes de programación de autómatas, para que los programadores puedan trabajar con equipos de distintos fabricantes. Hay dos lenguajes <b>gráficos</b>: el <mark>diagrama de contactos</mark> (LD, <i>ladder</i> o KOP), que imita los esquemas eléctricos de relés, y el <b>diagrama de bloques de funciones</b> (FBD o FUP), que usa puertas lógicas y bloques como en electrónica digital.",
      "Y dos <b>textuales</b>: el <b>texto estructurado</b> (ST o SCL), parecido a Pascal o a C, con instrucciones IF, CASE, FOR y operaciones matemáticas, ideal para cálculos y algoritmos; y la lista de instrucciones (IL o AWL), parecida al ensamblador, hoy en desuso. Además, el <b>diagrama funcional secuencial</b> (SFC), basado en el Grafcet, organiza los programas secuenciales en etapas y transiciones.",
      "En el lenguaje de contactos, el programa se dibuja entre dos líneas verticales (la de la izquierda representa la tensión y la de la derecha, la masa) con escalones horizontales. Cada escalón tiene <b>contactos</b> a la izquierda (condiciones) y una <b>bobina</b> a la derecha (acción). Un contacto NA (‑| |‑) «conduce» cuando su variable vale 1; un contacto NC (‑|/|‑) conduce cuando vale 0. Los contactos en <b>serie</b> equivalen a la función Y (AND) y en <b>paralelo</b>, a la función O (OR). Así, la ecuación Q = (I1 + I2) · <span style=\"text-decoration:overline\">I3</span> se dibuja con I1 e I2 en paralelo, en serie con un contacto NC de I3.",
    ], svg: rejilla("Lenguajes de la norma IEC 61131-3: diagrama de contactos, diagrama de bloques de funciones, texto estructurado y diagrama funcional secuencial", ["Lenguaje", "Tipo", "Uso típico"], [["LD (ladder)", "gráfico", "lógica de relés"], ["FBD", "gráfico", "lógica y bloques"], ["ST", "textual", "cálculos"], ["SFC (Grafcet)", "gráfico", "secuencias"]], "var(--pen)"), video: V("au-ladder", "Introducción a ladder: lenguaje escalera o diagrama de contactos", "introducción lenguaje ladder") }),
    bloque({ h: "13.9 Marcha, paro y memorias", p: [
      "El automatismo más básico es el <b>arranque de un motor con dos pulsadores</b>: marcha (S1, NA) y paro (S0, NC). El problema es que el pulsador de marcha solo está pulsado un instante. La solución es el <mark>autoenclavamiento</mark> (o realimentación): un contacto NA de la propia salida KM se coloca en paralelo con el pulsador de marcha. Al pulsar S1, KM se activa y su contacto mantiene el circuito cerrado aunque soltemos S1. Al pulsar S0, se abre el circuito y KM se desactiva.",
      "Su ecuación lógica es KM = (S1 + KM) · S0, donde S0 vale 1 mientras no se pulsa porque es NC. Por <b>seguridad</b>, el pulsador de paro y la seta de emergencia se cablean siempre con contactos <b>NC</b>: si un cable se rompe, la entrada pasa a 0 y la máquina se para, en lugar de quedarse sin poder detenerse. En el programa se usa entonces un contacto NA para esa entrada, porque en reposo vale 1.",
      "Los autómatas también tienen bobinas de <b>activación</b> (SET, S) y <b>desactivación</b> (RESET, R), que funcionan como un biestable RS: S pone la salida a 1 y la mantiene aunque la condición desaparezca, y R la pone a 0. Si ambas se activan a la vez, prevalece la que esté escrita después en el programa. Además, disponen de <b>marcas</b> (memorias internas, como M0.0) para guardar resultados intermedios, y de contactos de <b>flanco</b> (P y N), que se activan solo durante un ciclo cuando una señal pasa de 0 a 1 o de 1 a 0.",
    ], svg: ladderSVG, video: V("au-ejemplo", "Ejemplo básico de automatización: diagrama ladder y PLC", "ejemplo marcha paro ladder PLC") }),
    bloque({ h: "13.10 Temporizadores y contadores", p: [
      "Los <b>temporizadores</b> son bloques que miden el tiempo. El <mark>temporizador a la conexión</mark> (TON) activa su salida Q un tiempo PT después de que la entrada IN pase a 1, y la desactiva en cuanto IN vuelve a 0; si IN dura menos que PT, Q no llega a activarse. Sirve para retrasar el arranque de algo o para filtrar señales breves. El temporizador <b>a la desconexión</b> (TOF) activa Q inmediatamente al activarse IN y la mantiene un tiempo PT después de que IN vuelva a 0, como el alumbrado de una escalera. El de <b>impulso</b> (TP) da un pulso de duración PT fija. El valor transcurrido se puede leer en ET.",
      "Los <b>contadores</b> cuentan flancos de subida de una entrada. El contador <b>ascendente</b> (CTU) incrementa su valor CV en cada pulso de CU y activa su salida Q cuando CV alcanza el valor de preselección PV; la entrada R lo pone a cero. Hay también contadores descendentes (CTD) y ascendentes-descendentes (CTUD), útiles para contar los coches que entran y salen de un aparcamiento.",
      "Ejemplo: en una línea de envasado, un detector fotoeléctrico cuenta botellas; cada 12 (PV = 12), el contador activa el cambio de caja y se reinicia. Un TON de 2 s retrasa el arranque de la cinta para que el operador se aparte, y una baliza parpadea con dos temporizadores encadenados que se reinician mutuamente.",
    ], svg: tonSVG }),
    bloque({ h: "13.11 El Grafcet", p: [
      "El <mark>Grafcet</mark> (gráfico funcional de control de etapas y transiciones, normalizado en la IEC 60848) es un método gráfico para describir procesos <b>secuenciales</b>. Sus elementos son: las <b>etapas</b> (cuadrados numerados; cada una es un estado estable del sistema; la <b>etapa inicial</b> se dibuja con doble cuadro), las <b>acciones</b> asociadas a cada etapa (rectángulos a su derecha, que se ejecutan mientras la etapa está activa), las <b>transiciones</b> (trazos horizontales entre etapas) con sus <b>receptividades</b> (las condiciones lógicas para pasar) y los <b>arcos</b> que los unen.",
      "Sus reglas de evolución son sencillas: al arrancar, se activa la etapa inicial; una transición se <b>franquea</b> cuando la etapa anterior está activa y su receptividad es verdadera; al franquearla, se activa la etapa siguiente y se desactiva la anterior. Así, el proceso avanza paso a paso.",
      "Además de la <b>secuencia lineal</b>, hay estructuras de <b>selección de secuencia</b> (bifurcación en O: se sigue un camino u otro según la condición, con receptividades excluyentes) y de <b>secuencias simultáneas</b> (bifurcación en Y, dibujada con doble línea: varios caminos avanzan a la vez y se sincronizan al final). El Grafcet es una herramienta de diseño independiente de la tecnología, que después se programa en el autómata con SFC o se traduce a lenguaje de contactos.",
    ], svg: grafcetSVG, video: V("au-grafcet", "Grafcet básico: aprende paso a paso a diseñar diagramas", "grafcet básico paso a paso") }),
    bloque({ h: "13.12 Del Grafcet al programa", p: [
      "Para programar un Grafcet en lenguaje de contactos, se asigna a cada etapa una <b>marca</b> (M0, M1, M2…), que vale 1 cuando la etapa está activa. Se usan bobinas SET y RESET: para cada transición, se escribe un escalón con el contacto de la etapa anterior en serie con la receptividad, que activa (SET) la etapa siguiente y desactiva (RESET) la anterior. La etapa inicial se activa en el primer ciclo con una marca de arranque.",
      "Después, en una sección aparte, se programan las <b>salidas</b>: cada salida se activa con los contactos de las etapas en las que debe actuar, en paralelo si son varias. Por ejemplo, en el taladro de la figura del apartado anterior: «girar» = M1 + M2, «bajar» = M1 y «subir» = M2. Así, cada bobina de salida aparece una sola vez.",
      "Ejemplo: escalón de la transición 1 → 2: |‑ M1 ‑‑ b1 ‑| → (S M2) y (R M1). Escalón de salida: |‑ M1 ‑| → (Q bajar). Este método es sistemático: funciona para cualquier Grafcet y facilita mucho la búsqueda de errores, porque en todo momento se puede ver qué etapa está activa.",
    ], svg: pasos("Pasos para programar un Grafcet en lenguaje de contactos: una marca por etapa, activar la inicial, un escalón con SET y RESET por transición y las salidas a partir de las etapas", ["Una marca por etapa", "Etapa inicial en 1.er ciclo", "Transición: SET siguiente, RESET anterior", "Salidas: OR de etapas"], "var(--leaf)") }),
    bloque({ h: "13.13 Seguridad en los automatismos", p: [
      "Una máquina automática puede causar accidentes graves, por lo que la seguridad debe diseñarse desde el principio, según la Directiva de Máquinas europea y sus normas. Principios básicos: los pulsadores de <b>paro y emergencia</b> se cablean con contactos NC; la <b>seta de emergencia</b> debe cortar la energía peligrosa por medios físicos (no solo por programa), con enclavamiento mecánico, y la máquina no debe volver a arrancar sola al desenclavarla.",
      "Los resguardos (puertas, vallas) llevan <b>interruptores de seguridad</b> que paran la máquina al abrirlos, y las zonas peligrosas se vigilan con <b>barreras fotoeléctricas</b> o escáneres láser de seguridad. Las funciones críticas usan <b>relés o autómatas de seguridad</b>, con canales redundantes que se vigilan entre sí, de modo que un fallo único no anula la protección.",
      "Otras buenas prácticas: los actuadores opuestos (subir y bajar, giro a derechas e izquierdas) se enclavan entre sí en el programa y también en el cableado; ante un fallo de alimentación, la máquina debe quedar en un estado seguro; las salidas de las válvulas deben elegirse de forma que, sin energía, los cilindros no hagan movimientos peligrosos; y se deben señalizar los estados con pilotos y alarmas.",
    ], svg: ficha("Principios de seguridad en automatismos: paros con contactos normalmente cerrados, seta de emergencia que corta por hardware, enclavamientos y autómatas de seguridad", "Diseño seguro", ["Paros y emergencias: NC", "Seta: corte por hardware", "Enclavar movimientos opuestos", "Sin energía: estado seguro"], "var(--red)") }),
    bloque({ h: "13.14 Autómatas, microcontroladores y la industria 4.0", p: [
      "Los <b>microcontroladores</b> (como los de las placas Arduino o ESP32) también pueden automatizar procesos y son muy baratos, versátiles y fáciles de aprender, por lo que se usan en prototipos, domótica, electrodomésticos y en el aula. Sin embargo, no están preparados para el ambiente industrial (ruido, tensiones de 24 V, vibraciones), no garantizan tiempos de respuesta ni tienen certificaciones de seguridad. El autómata es la opción industrial; el microcontrolador, la de los productos de consumo y los prototipos.",
      "Los automatismos actuales se comunican en <b>red</b>: los autómatas intercambian datos con <b>pantallas HMI</b> (interfaces táctiles para el operador), con variadores, robots y sensores mediante buses de campo (Profinet, EtherCAT, Modbus) y con sistemas <b>SCADA</b>, que supervisan y registran todo el proceso desde un ordenador. Los <b>robots industriales</b> y los robots colaborativos (cobots), que trabajan junto a personas con sensores de fuerza, completan la automatización flexible.",
      "La <b>industria 4.0</b> conecta todo esto con internet, la nube y el análisis de datos: los sensores informan en tiempo real del estado de las máquinas, lo que permite el <b>mantenimiento predictivo</b> (reparar antes de que se averíen), los <b>gemelos digitales</b> (modelos virtuales que simulan la fábrica) y la fabricación personalizada. El próximo tema trata estas tecnologías emergentes.",
    ], svg: figura("Pirámide de la automatización", "De los sensores a la nube", [["Campo", "sensores, actuadores", "señales"], ["Control", "autómatas, robots", "programa"], ["Supervisión", "HMI, SCADA", "operador"], ["Gestión", "nube, datos", "industria 4.0"]], "var(--pen)") }),
  ],
  figura: figura("Automatización programada", "Percibir, decidir, actuar", [["Sensores", "todo o nada", "analógicos 4-20 mA"], ["Autómata", "ciclo de scan", "IEC 61131-3"], ["Programa", "contactos, Grafcet", "TON, CTU"], ["Actuadores", "contactor", "electroválvula"]], "var(--red)"),
  video: V("au-plc", "Qué es un PLC y cómo funciona", "qué es un PLC autómata programable"),
  ejemplos: [
    { enunciado: "Elige sensores para: detectar tapones de acero en una cinta, el nivel de harina en una tolva y el paso de cajas de cartón a 5 m.", pasos: ["Tapones de acero: detector inductivo.", "Harina: detector capacitivo (detecta materiales no metálicos).", "Cajas a 5 m: fotoeléctrico de barrera o réflex."], resultado: "Inductivo, capacitivo y fotoeléctrico." },
    { enunciado: "Un transmisor de nivel de 0 a 4 m da 4-20 mA. ¿Qué nivel corresponde a 10 mA? ¿Qué corriente da con 3 m?", pasos: ["Nivel = (10 − 4)/16 · 4 = 1,5 m.", "I = 4 + (3/4) · 16 = 16 mA.", "Si se leyera 0 mA, indicaría un cable roto."], resultado: "1,5 m; 16 mA." },
    { enunciado: "Escribe la ecuación y describe el esquema de contactos de un motor con marcha S1 (NA) y paro S0 (NC).", pasos: ["Autoenclavamiento: KM = (S1 + KM) · S0.", "Escalón: S1 en paralelo con un contacto NA de KM, en serie con el contacto de S0, y la bobina KM.", "S0 se programa con contacto NA porque en reposo su entrada vale 1."], resultado: "Arranque con memoria y paro prioritario." },
    { enunciado: "Diseña con un temporizador el alumbrado de una escalera que se mantiene 2 minutos encendido después de pulsar.", pasos: ["Entrada: pulsador; salida: lámparas.", "Temporizador TOF con PT = 120 s: Q se activa al pulsar.", "Al soltar, Q se mantiene 120 s y luego se apaga."], resultado: "Lámpara = Q del TOF de 120 s." },
    { enunciado: "Describe el Grafcet de un cilindro que sale al pulsar marcha y vuelve al llegar al final de carrera.", pasos: ["Etapa 0 (inicial): reposo. Transición: marcha · a0 (cilindro dentro).", "Etapa 1: acción A+ (salir). Transición: a1 (final de carrera exterior).", "Etapa 2: acción A− (entrar). Transición: a0, vuelve a la etapa 0."], resultado: "Secuencia lineal de tres etapas." },
    { enunciado: "Programa en contactos la transición de la etapa 1 a la 2 del ejemplo anterior y la salida A+.", pasos: ["Etapa 1 = marca M1; etapa 2 = M2.", "Escalón: contacto M1 en serie con a1 → SET M2 y RESET M1.", "Salida: contacto M1 → bobina A+."], resultado: "Método de marcas con SET y RESET." },
  ],
  errores: [
    "Cablear el pulsador de paro o la seta de emergencia con un contacto NA: si se rompe el cable, la máquina no se puede parar.",
    "Usar el mismo bobinado de salida en dos escalones distintos: solo cuenta el último que ejecuta el autómata.",
    "Pensar que el autómata reacciona instantáneamente: lee las entradas una vez por ciclo de scan.",
    "Usar un detector inductivo para detectar plástico, papel o líquidos.",
    "Conectar un motor directamente a una salida del autómata, sin contactor ni protecciones.",
    "En un Grafcet, poner dos etapas seguidas sin transición o dos transiciones seguidas sin etapa: deben alternarse.",
  ],
  ejercicios: [
    B("Indica dos ventajas de la lógica programada frente a la cableada.", "Flexibilidad para cambiar el funcionamiento editando el programa; menor tamaño, funciones complejas y diagnóstico."),
    B("¿Qué detector usarías para saber si un cilindro neumático ha llegado al final de su carrera sin contacto?", "Un detector magnético (reed o Hall) que detecta el imán del émbolo."),
    B("Diferencia entre un detector fotoeléctrico de barrera y uno de reflexión directa.", "En el de barrera, emisor y receptor están enfrentados y el objeto corta el haz; en el de reflexión directa, la luz rebota en el propio objeto."),
    B("¿Por qué la señal 4-20 mA empieza en 4 y no en 0 mA?", "Para distinguir el valor mínimo (4 mA) de un fallo o un cable roto (0 mA)."),
    B("Nombra las partes de un autómata programable.", "Fuente de alimentación, CPU, memoria, entradas, salidas y comunicaciones."),
    B("¿Qué tipo de salida de autómata elegirías para conmutar una carga de alterna a baja frecuencia? ¿Y para pulsos rápidos de continua?", "Relé (o triac); transistor."),
    B("Describe las tres fases del ciclo de scan.", "Leer entradas a la imagen de proceso, ejecutar el programa y escribir las salidas."),
    B("¿Qué función lógica representan dos contactos en serie? ¿Y en paralelo?", "Serie: Y (AND). Paralelo: O (OR)."),
    B("Nombra los cuatro lenguajes gráficos o textuales de la IEC 61131-3 más usados.", "Contactos (LD), bloques de funciones (FBD), texto estructurado (ST) y diagrama secuencial (SFC)."),
    B("¿Para qué sirve un contacto de autoenclavamiento?", "Para mantener activada una salida después de soltar el pulsador de marcha."),
    B("Diferencia entre un temporizador TON y uno TOF.", "TON retrasa la activación; TOF retrasa la desactivación."),
    B("¿Qué elementos tiene un Grafcet?", "Etapas, acciones, transiciones con receptividades y arcos."),
    M("Un transmisor de temperatura de −20 a 80 °C da 4-20 mA. ¿Qué temperatura indica con 12 mA? ¿Y con 6 mA?", "12 mA: −20 + (8/16) · 100 = 30 °C. 6 mA: −20 + (2/16) · 100 = −7,5 °C."),
    M("Un sensor de presión de 0 a 16 bar se lee con una entrada analógica de 12 bits. Calcula la resolución.", "16/4096 = 0,0039 bar ≈ 3,9 mbar."),
    M("Escribe la ecuación lógica y describe el escalón: una prensa baja (Q0) si se pulsan a la vez los dos pulsadores de las manos (I1 e I2) y la puerta (I3, NA que se cierra al cerrar la puerta) está cerrada.", "Q0 = I1 · I2 · I3: tres contactos NA en serie con la bobina Q0."),
    M("Una bomba (Q0) se activa si el nivel está bajo (I0 = 1) o si se pulsa el manual (I1), siempre que no esté activo el sensor de seco (I2). Escribe la ecuación.", "Q0 = (I0 + I1) · I2 negada: I0 e I1 en paralelo, en serie con un contacto NC de I2."),
    M("Diseña el enclavamiento de un motor con giro a derechas (KM1) e izquierdas (KM2).", "Cada bobina lleva en serie un contacto NC de la otra: KM1 = (S1 + KM1) · S0 · KM2 negada; KM2 = (S2 + KM2) · S0 · KM1 negada. También se enclava en el cableado."),
    M("Un aparcamiento de 50 plazas cuenta los coches con dos fotocélulas (entrada y salida). Indica qué contador usarías y cuándo se enciende el cartel «Completo».", "Un contador ascendente-descendente CTUD: CU con la fotocélula de entrada y CD con la de salida; «Completo» cuando CV ≥ 50."),
    M("Si el ciclo de scan de un autómata es de 8 ms, ¿podría detectar con una entrada normal un pulso de 3 ms? ¿Cuál es el tiempo de reacción máximo aproximado?", "No con seguridad, porque puede ocurrir entre dos lecturas. Hace falta una entrada de interrupción o rápida. Reacción máxima ≈ 2 ciclos = 16 ms."),
    M("Dibuja el cronograma de un TON de 5 s si la entrada está activa de t = 2 s a t = 10 s y de t = 12 s a t = 15 s.", "Q se activa en t = 7 s y se desactiva en t = 10 s. En el segundo pulso (3 s < 5 s) Q no se activa."),
    M("Describe el Grafcet de una puerta de garaje: abre al pulsar el mando, espera 20 s abierta y cierra.", "0: reposo; mando → 1: abrir; final de carrera abierta → 2: espera (TON 20 s); fin de tiempo → 3: cerrar; final de carrera cerrada → 0."),
    M("En el Grafcet anterior, ¿qué debería ocurrir si una fotocélula detecta un obstáculo mientras la puerta cierra? Modifícalo.", "Añadir una selección de secuencia en la etapa 3: si fotocélula → volver a la etapa 1 (abrir); si cerrada → etapa 0."),
    M("Escribe los escalones del Grafcet del taladro del apartado 13.11 con marcas M0, M1 y M2.", "Primer ciclo → S M0. M0 · marcha · pieza → S M1, R M0. M1 · b1 → S M2, R M1. M2 · b0 → S M0, R M2. Salidas: bajar = M1; subir = M2; girar = M1 + M2."),
    A("Un depósito tiene una bomba de llenado (Q0) que debe arrancar cuando el nivel baja de un sensor inferior (I0 = 0) y parar al llegar al superior (I1 = 1). Diseña la lógica con SET y RESET y explica por qué hace falta memoria.", "S Q0 cuando I0 = 0 (contacto NC de I0); R Q0 cuando I1 = 1. Entre los dos niveles, ningún sensor decide, y la bomba debe recordar si está llenando o no: es un automatismo secuencial con histéresis."),
    A("Diseña el Grafcet de dos cilindros A y B con la secuencia A+ B+ B− A−, con finales de carrera a0, a1, b0 y b1 y pulsador de marcha.", "0 (inicial) → marcha · a0 · b0 → 1: A+ → a1 → 2: B+ → b1 → 3: B− → b0 → 4: A− → a0 → 0."),
    A("Una línea de llenado debe, a la vez, llenar una botella (2 s) y colocar el tapón siguiente en el cargador. Cuando terminan ambas, la cinta avanza. Describe la estructura del Grafcet.", "Secuencias simultáneas: tras la etapa inicial, una transición abre dos ramas en Y (llenado con TON 2 s; carga de tapón). Ambas terminan en etapas de espera, y una transición común sincroniza (doble línea) y activa la etapa «avanzar cinta»."),
    A("Un taller compara un autómata de 450 € con una placa de microcontrolador de 30 € para controlar una prensa. Argumenta qué elegir.", "El autómata: está preparado para el ambiente industrial y las tensiones de 24 V, tiene E/S protegidas, garantiza tiempos de respuesta, existe versión de seguridad y facilita el mantenimiento. La seguridad de las personas en una prensa justifica el coste."),
    A("En un cruce peatonal, el semáforo de coches está en verde hasta que un peatón pulsa; entonces pasa a ámbar 3 s, rojo 15 s (verde peatones) y vuelve a verde. Diseña el Grafcet con temporizadores.", "0 (inicial, verde coches, rojo peatones) → pulsador → 1: ámbar, TON 3 s → T1 → 2: rojo coches, verde peatones, TON 15 s → T2 → 0. Se puede añadir un tiempo mínimo en verde para coches."),
    A("Analiza qué ocurre en el programa KM = (S1 + KM) · S0 si la seta de emergencia se cablea con un contacto NA y el cable se rompe. ¿Y si se cablea NC?", "Con NA, la entrada vale siempre 0 y pulsarla no cambia nada: la máquina no se puede parar. Con NC, la rotura pone la entrada a 0, igual que pulsar: la máquina se para (fallo seguro)."),
    A("Diseña la automatización de una cinta que clasifica piezas metálicas y de plástico en dos cajas: elige sensores y actuadores, dibuja el Grafcet y escribe la lógica de las salidas.", "Sensores: capacitivo (hay pieza), inductivo (es metálica), fotoeléctrico de posición. Actuadores: motor de cinta con contactor, cilindro expulsor con electroválvula. Grafcet con selección de secuencia: si metálica, expulsar en la primera posición; si no, dejar pasar a la segunda. Salidas a partir de las marcas de etapa."),
  ],
  quiz: [
    q4("La parte de mando de un automatismo…", ["realiza el trabajo físico", "decide qué deben hacer los actuadores", "es siempre neumática", "son los sensores"], 1, "Control."),
    q4("En la lógica programada, para cambiar el funcionamiento…", ["se recablea", "se edita el programa", "se cambian los relés", "no se puede"], 1, "Flexibilidad."),
    q4("Un detector inductivo detecta…", ["cualquier material", "solo metales", "solo líquidos", "solo luz"], 1, "Corrientes inducidas."),
    q4("Para detectar granos de cereal se usa un detector…", ["inductivo", "capacitivo", "magnético", "final de carrera"], 1, "Cualquier material."),
    q4("Un fotoeléctrico de barrera tiene…", ["emisor y receptor enfrentados", "solo emisor", "un imán", "un contacto mecánico"], 0, "El objeto corta el haz."),
    q4("En una señal 4-20 mA, 0 mA indica…", ["el valor mínimo", "el valor máximo", "un cable roto", "la mitad"], 2, "Cero vivo."),
    q4("Para conmutar un motor trifásico desde un autómata se usa…", ["un pulsador", "un contactor", "un detector", "una marca"], 1, "Preaccionador."),
    q4("La primera fase del ciclo de scan es…", ["escribir salidas", "leer entradas", "ejecutar el programa", "apagar"], 1, "Imagen de proceso."),
    q4("Las salidas de transistor sirven para…", ["alterna", "continua y conmutación rápida", "cualquier potencia", "entradas"], 1, "Rápidas."),
    q4("El lenguaje que imita los esquemas de relés es…", ["ST", "FBD", "LD (contactos)", "SFC"], 2, "Ladder."),
    q4("Dos contactos en paralelo equivalen a…", ["AND", "OR", "NOT", "XOR"], 1, "Cualquiera de los dos."),
    q4("El contacto de autoenclavamiento se coloca…", ["en serie con el paro", "en paralelo con la marcha", "en la salida", "en la fuente"], 1, "Memoria."),
    q4("El paro de emergencia se cablea con contacto…", ["NA", "NC", "de flanco", "temporizado"], 1, "Fallo seguro."),
    q4("Una bobina SET…", ["activa la salida y la mantiene", "la desactiva", "cuenta pulsos", "mide tiempo"], 0, "Biestable."),
    q4("Un TON con PT = 5 s y una entrada de 3 s…", ["activa Q 3 s", "no activa Q", "activa Q 5 s", "activa Q siempre"], 1, "No llega a PT."),
    q4("El alumbrado de escalera usa un temporizador…", ["TON", "TOF", "contador", "flanco"], 1, "Retardo a la desconexión."),
    q4("Un contador CTU activa Q cuando…", ["CV = 0", "CV ≥ PV", "R = 1", "siempre"], 1, "Preselección."),
    q4("En el Grafcet, la etapa inicial se dibuja…", ["con doble cuadro", "con un círculo", "con doble línea", "en rojo"], 0, "Doble cuadrado."),
    q4("Una transición se franquea cuando…", ["su receptividad es verdadera, aunque la etapa anterior esté inactiva", "la etapa anterior está activa y la receptividad es verdadera", "pasan 5 s", "se pulsa paro"], 1, "Regla de evolución."),
    q4("Las secuencias simultáneas se dibujan con…", ["doble línea horizontal", "una flecha", "un círculo", "línea discontinua"], 0, "Bifurcación en Y."),
  ],
  examen: [
    q4("Transmisor 0-10 bar, 4-20 mA. Lectura 8 mA:", ["2,5 bar", "5 bar", "8 bar", "4 bar"], 0, "(8 − 4)/16 · 10."),
    q4("Transmisor 0-100 °C. ¿Qué corriente a 75 °C?", ["12 mA", "16 mA", "15 mA", "18 mA"], 1, "4 + 0,75 · 16."),
    q4("KM = (S1 + KM) · S0. Si S0 se pulsa (entrada a 0):", ["KM = 1", "KM = 0", "depende de S1", "KM parpadea"], 1, "El paro prevalece."),
    q4("Q = I1 · I2 + I3. En contactos:", ["I1 e I2 en paralelo, en serie con I3", "I1 e I2 en serie, en paralelo con I3", "todos en serie", "todos en paralelo"], 1, "Serie = AND."),
    q4("Resolución de 12 bits en 0-20 bar:", ["≈ 4,9 mbar", "≈ 20 mbar", "≈ 0,5 bar", "≈ 1 mbar"], 0, "20/4096."),
    q4("TON de 4 s; IN activa de 1 a 9 s. Q activa de:", ["1 a 9 s", "5 a 9 s", "5 a 13 s", "1 a 5 s"], 1, "Retraso a la conexión."),
    q4("TOF de 4 s; IN activa de 1 a 3 s. Q activa de:", ["1 a 7 s", "1 a 3 s", "5 a 7 s", "3 a 7 s"], 0, "Retraso a la desconexión."),
    q4("Secuencia A+ B+ B− A−. ¿Cuántas etapas tiene el Grafcet con la inicial?", ["4", "5", "3", "6"], 1, "Inicial + 4 movimientos."),
  ],
  feynman: ["Qué diferencia hay entre automatizar con relés y con un autómata", "Cómo elegir un detector según el material del objeto", "Qué hace un autómata en cada ciclo de scan", "Por qué los paros se cablean con contactos cerrados", "Cómo se pasa de un Grafcet a un programa"],
  glosario: [
    ["Automatización", "Transferencia de tareas de control y producción a máquinas."],
    ["Lógica cableada", "Automatismo cuya función depende de las conexiones físicas."],
    ["Lógica programada", "Automatismo cuya función está en un programa."],
    ["Autómata programable (PLC)", "Ordenador industrial que controla procesos en tiempo real."],
    ["Ciclo de scan", "Bucle de lectura de entradas, ejecución del programa y escritura de salidas."],
    ["Detector inductivo", "Sensor sin contacto que detecta metales."],
    ["Detector capacitivo", "Sensor sin contacto que detecta cualquier material."],
    ["Detector fotoeléctrico", "Sensor que detecta objetos por la interrupción o reflexión de luz."],
    ["4-20 mA", "Señal analógica normalizada de corriente."],
    ["Contactor", "Relé robusto para conmutar cargas de potencia."],
    ["Electroválvula", "Válvula gobernada por una bobina eléctrica."],
    ["Lenguaje de contactos", "Lenguaje gráfico que imita los esquemas de relés."],
    ["Autoenclavamiento", "Contacto de una salida que la mantiene activada."],
    ["Marca", "Memoria interna de un bit del autómata."],
    ["Temporizador TON", "Bloque que retrasa la activación de su salida."],
    ["Contador", "Bloque que cuenta flancos de una entrada."],
    ["Grafcet", "Método gráfico de etapas y transiciones para procesos secuenciales."],
    ["Receptividad", "Condición lógica asociada a una transición."],
  ],
  situacion: {
    titulo: "La pequeña fábrica del aula",
    reto: "Vuestro equipo automatizará una maqueta de proceso industrial (una cinta clasificadora, un ascensor o un cruce con semáforos) con un relé programable o un autómata, partiendo de un Grafcet diseñado por vosotros.",
    pasos: [
      "Describid el proceso y su secuencia, y elegid los sensores y actuadores justificando cada uno.",
      "Diseñad el Grafcet, incluyendo la etapa inicial, las condiciones de arranque y las situaciones anómalas.",
      "Haced la tabla de asignación de entradas, salidas, marcas y temporizadores.",
      "Programad el autómata con el método de marcas, simulad el programa y montadlo en la maqueta.",
      "Añadid un paro de emergencia correctamente cableado y comprobad el comportamiento ante fallos.",
    ],
    producto: "La maqueta funcionando, el Grafcet, la tabla de asignación, el programa comentado y una demostración.",
    evaluacion: [
      "Elige sensores y actuadores adecuados y justifica la elección.",
      "Diseña un Grafcet correcto y completo.",
      "Programa de forma sistemática y documentada.",
      "Aplica criterios de seguridad en el diseño y en las pruebas.",
    ],
  },
  mapa: mapaB("AUTOMATIZACIÓN", [
    ["Sensores", "todo o nada · analógicos 4-20 mA", "var(--leaf)"],
    ["Autómata", "partes · E/S · ciclo de scan", "var(--pen)"],
    ["Programación", "contactos · TON · CTU · Grafcet", "var(--red)"],
    ["Actuadores", "contactor · motor · electroválvula", "var(--inf)"],
  ]),
  tarjetas: [
    ["Inductivo", "detecta metales"],
    ["Capacitivo", "detecta cualquier material"],
    ["4-20 mA", "4 = mínimo, 20 = máximo, 0 = cable roto"],
    ["Ciclo de scan", "leer entradas, ejecutar, escribir salidas"],
    ["Serie y paralelo", "AND y OR"],
    ["Autoenclavamiento", "KM = (S1 + KM) · S0"],
    ["Paro y emergencia", "siempre contactos NC"],
    ["SET y RESET", "activar y mantener; desactivar"],
    ["TON", "retrasa la activación"],
    ["TOF", "retrasa la desactivación"],
    ["CTU", "Q = 1 cuando CV ≥ PV"],
    ["Grafcet", "etapas, transiciones y acciones"],
  ],
  familias: [
    "Buscad en casa automatismos con temporizador (lavadora, microondas, alumbrado de escalera) y describid su secuencia.",
    "Fijaos en las puertas automáticas de un comercio: ¿qué sensor usan y qué pasa si alguien se queda en medio?",
    "Observad un ascensor y escribid juntos la secuencia de etapas de un viaje.",
    "Comentad qué trabajos se han automatizado en vuestra profesión o en la de vuestros conocidos.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas automáticos»: automatización programada; sensores y actuadores; autómatas programables, estructura y ciclo de funcionamiento; lenguajes de programación; temporizadores y contadores; diseño de automatismos secuenciales con Grafcet; seguridad.`,
    ideas: [
      "Simulación de automatismos con software gratuito antes de cargarlos en un relé programable.",
      "Maquetas de procesos (cinta, ascensor, semáforo) automatizadas por equipos.",
      "Comparación práctica de una solución con relés y otra con autómata para el mismo problema.",
      "Visita virtual o real a una industria automatizada de la zona.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Controlador lógico programable, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Controlador_l%C3%B3gico_programable" },
    { t: "GRAFCET, Wikipedia en español", url: "https://es.wikipedia.org/wiki/GRAFCET" },
    { t: "IEC 61131-3, Wikipedia en español", url: "https://es.wikipedia.org/wiki/IEC_61131-3" },
  ],
  revisado: "2026-11-21",
};
