// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Caja de bloque de un diagrama de control.
const caja = (x, y, w, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="8" fill="${c}"/><text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>`;

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Control y robótica",
  minutos: 40,
  objetivos: ["Distinguir sistemas de control en lazo abierto y en lazo cerrado", "Clasificar sensores y actuadores y explicar su función", "Describir las partes de un robot y sus aplicaciones"],
  claves: ["sistema de control", "lazo cerrado", "realimentación", "sensor", "actuador", "microcontrolador"],
  pregunta: {
    texto: "Un robot aspirador limpia toda la casa sin caerse por las escaleras ni chocar con los muebles. ¿Cómo «sabe» por dónde ir?",
    respuesta: "Tiene <mark>sensores</mark> (de choque, de distancia, de caída) que le informan de lo que pasa, un <b>microcontrolador</b> que decide según un programa y <b>actuadores</b> (motores) que lo mueven. Mide, decide y actúa una y otra vez: es un <b>sistema de control en lazo cerrado</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es un sistema de control</h3><p>Un <b>sistema de control</b> gobierna una máquina o un proceso para que haga lo que queremos sin que una persona esté pendiente todo el tiempo. Tiene una <b>entrada</b> (la orden o lo que se mide), un <b>controlador</b> que decide y una <b>salida</b> (lo que se hace). Están en todas partes: la cisterna del váter, el termostato de la calefacción, los semáforos o el piloto automático de un avión.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama: entrada, controlador y salida">
        <defs>${flecha("cr1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${caja(14, 72, 64, "entrada", "var(--leaf)")}${caja(98, 72, 70, "controlador", "var(--pen)")}${caja(188, 72, 58, "salida", "var(--red)")}
        <g stroke="var(--muted)" stroke-width="2.5" marker-end="url(#cr1)"><path d="M78 89 H 94"/><path d="M168 89 H 184"/></g>
        <g ${F} font-size="10" fill="var(--muted)" text-anchor="middle"><text x="46" y="130">orden o medida</text><text x="133" y="130">decide</text><text x="217" y="130">acción</text></g>
      </svg>`,
    },
    {
      html: `<h3>Lazo abierto y lazo cerrado</h3><p>En <b>lazo abierto</b> el sistema actúa <mark>sin comprobar el resultado</mark>: una tostadora con temporizador tuesta 2 minutos aunque el pan ya esté quemado. En <b>lazo cerrado</b> hay <mark>realimentación</mark>: un sensor mide la salida y el controlador corrige. El termostato mide la temperatura y apaga la calefacción al llegar a 21 °C. Son más precisos pero más caros y complejos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lazo cerrado: la salida se mide con un sensor y vuelve al controlador">
        <defs>${flecha("cr2", "var(--muted)")}${flecha("cr3", "var(--sun)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${caja(14, 40, 60, "consigna", "var(--leaf)")}${caja(98, 40, 70, "controlador", "var(--pen)")}${caja(188, 40, 58, "proceso", "var(--red)")}${caja(120, 112, 60, "sensor", "var(--sun)")}
        <g stroke="var(--muted)" stroke-width="2.5" fill="none" marker-end="url(#cr2)"><path d="M74 57 H 94"/><path d="M168 57 H 184"/></g>
        <path d="M217 74 V 129 H 184" fill="none" stroke="var(--sun)" stroke-width="2.5" marker-end="url(#cr3)"/><path d="M120 129 H 84 V 76 L 94 70" fill="none" stroke="var(--sun)" stroke-width="2.5" marker-end="url(#cr3)"/>
        <text x="130" y="168" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)" ${F}>realimentación</text>
      </svg>`,
    },
    {
      html: `<h3>Sensores: los sentidos</h3><p>Un <b>sensor</b> convierte una magnitud física en una <mark>señal eléctrica</mark>. Pueden ser <b>digitales</b> (sí/no: pulsador, final de carrera, sensor de infrarrojos de presencia) o <b>analógicos</b> (dan un valor: LDR para la luz, termistor o sensor de temperatura, <b>ultrasonidos</b> para medir distancias, potenciómetro para la posición). El robot aspirador usa infrarrojos para no caerse y un sensor de choque en el parachoques.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sensor de ultrasonidos midiendo la distancia a una pared con el eco">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="70" width="60" height="36" rx="4" fill="var(--pen)"/><circle cx="36" cy="88" r="11" fill="var(--card)"/><circle cx="64" cy="88" r="11" fill="var(--card)"/>
        <rect x="220" y="30" width="20" height="120" fill="var(--muted)"/>
        ${[0, 1, 2].map((i) => `<path d="M${100 + i * 30} 70 Q ${110 + i * 30} 88 ${100 + i * 30} 106" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>`).join("")}
        ${[0, 1].map((i) => `<path d="M${200 - i * 30} 116 Q ${190 - i * 30} 132 ${200 - i * 30} 148" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="4 3"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="20" y="130" fill="var(--pen)">ultrasonidos</text><text x="110" y="60" fill="var(--leaf)">emite</text><text x="150" y="168" fill="var(--red)">eco</text></g>
      </svg>`,
    },
    {
      html: `<h3>Actuadores: los músculos</h3><p>Un <b>actuador</b> transforma la señal del controlador en una <mark>acción</mark>. Los más usados en robótica educativa son los <b>motores de corriente continua</b> (giran sin parar, para ruedas), los <b>servomotores</b> (giran a un ángulo exacto, para brazos y pinzas), los <b>motores paso a paso</b> (giran en pasos precisos, como en las impresoras 3D), los <b>LED</b> y los <b>zumbadores</b>. Un <b>relé</b> permite que el circuito de control encienda aparatos de más potencia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Motor de corriente continua con rueda y servomotor con brazo a 90 grados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="60" width="60" height="40" rx="8" fill="var(--sun)"/><path d="M84 80 H 104" stroke="var(--ink)" stroke-width="4"/><circle cx="114" cy="80" r="22" fill="none" stroke="var(--ink)" stroke-width="5"/><path d="M100 64 A 22 22 0 0 1 132 70" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <rect x="160" y="70" width="70" height="36" rx="4" fill="var(--pen)"/><circle cx="182" cy="70" r="8" fill="var(--card)"/><path d="M182 70 V 30" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/><path d="M182 70 L 216 70" stroke="var(--ink)" stroke-width="2" stroke-dasharray="3 3"/><path d="M196 70 A 14 14 0 0 0 182 56" fill="none" stroke="var(--red)" stroke-width="2"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="70" y="130" fill="var(--sun)">motor CC: gira continuo</text><text x="196" y="130" fill="var(--pen)">servo: va a 90°</text></g>
      </svg>`,
    },
    {
      html: `<h3>Los robots</h3><p>Un <b>robot</b> es una máquina programable que percibe su entorno y actúa sobre él. Sus partes: <b>estructura</b> (chasis o brazo articulado), <b>sensores</b>, <b>actuadores</b>, <b>sistema de control</b> (un <mark>microcontrolador</mark> como la placa Arduino) y <b>fuente de energía</b>. Hay robots <b>industriales</b> (brazos que sueldan o pintan coches), <b>móviles</b> (aspiradores, rovers de Marte), <b>médicos</b> (cirugía) y <b>humanoides</b>. La robótica crea empleos nuevos y cambia otros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot móvil con sus partes: sensores, placa controladora, motores y batería">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="60" y="70" width="140" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="96" y="82" width="56" height="30" rx="3" fill="var(--leaf)"/><rect x="164" y="84" width="26" height="28" rx="3" fill="var(--sun)"/>
        <circle cx="86" cy="130" r="16" fill="var(--ink)"/><circle cx="174" cy="130" r="16" fill="var(--ink)"/>
        <rect x="200" y="80" width="18" height="34" rx="4" fill="var(--pen)"/>
        <g ${F} font-size="11" font-weight="700"><text x="96" y="58" fill="var(--leaf)">microcontrolador</text><text x="196" y="68" fill="var(--pen)">sensor</text><text x="150" y="166" fill="var(--ink)">motores</text><text x="166" y="140" fill="var(--sun)"> </text><text x="10" y="100" fill="var(--sun)">batería →</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Percibir, decidir y actuar",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Sensores, controlador y actuadores con ejemplos de cada uno">
      <defs>${flecha("cr4", "var(--muted)")}</defs>
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["SENSORES", "perciben", "LDR · ultrasonidos", "pulsador · temperatura", "var(--leaf)"], ["CONTROLADOR", "decide", "Arduino · micro:bit", "con un programa", "var(--pen)"], ["ACTUADORES", "actúan", "motores · servos", "LED · zumbador", "var(--red)"]]
        .map(([n, v, a, b, c], i) => `<rect x="${20 + i * 210}" y="24" width="180" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${110 + i * 210}" y="62" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${110 + i * 210}" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${v}</text>
          <text x="${110 + i * 210}" y="140" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${a}</text>
          <text x="${110 + i * 210}" y="160" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${b}</text>
          ${i < 2 ? `<path d="M${202 + i * 210} 110 H ${226 + i * 210}" stroke="var(--muted)" stroke-width="3" marker-end="url(#cr4)"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "Zs9MZosVuqo", titulo: "Arduino: qué es, cómo funciona y para qué se puede utilizar", canal: "Xataka", vistas: 824666, megusta: 0, busqueda: "robótica sensores actuadores arduino" },
  quiz: [
    { q: "Una tostadora que tuesta un tiempo fijo sin mirar el pan es un sistema de control…", o: ["en lazo abierto", "en lazo cerrado", "realimentado"], a: 0, e: "No comprueba el resultado: actúa según una orden fija." },
    { q: "¿Qué es la realimentación?", o: ["Recargar la batería", "Medir la salida y usarla para corregir la acción", "Repetir el programa"], a: 1, e: "Es lo que caracteriza a los sistemas en lazo cerrado." },
    { q: "¿Qué sensor usarías para medir la distancia a un obstáculo?", o: ["LDR", "Ultrasonidos", "Termistor"], a: 1, e: "Emite un sonido inaudible y mide el tiempo que tarda el eco." },
    { q: "¿Qué actuador gira hasta un ángulo exacto?", o: ["Motor de corriente continua", "Servomotor", "Zumbador"], a: 1, e: "El servomotor tiene control de posición interno." },
    { q: "¿Qué parte de un robot ejecuta el programa?", o: ["Los sensores", "El microcontrolador", "El chasis"], a: 1, e: "Es el «cerebro»: lee sensores, decide y manda órdenes a los actuadores." },
  ],
  examen: [
    { q: "Un termostato de calefacción es un ejemplo de…", o: ["lazo abierto", "lazo cerrado", "actuador"], a: 1, e: "Mide la temperatura y enciende o apaga la caldera según la consigna." },
    { q: "Un pulsador es un sensor…", o: ["analógico", "digital", "actuador"], a: 1, e: "Solo tiene dos estados: pulsado o no." },
    { q: "¿Para qué sirve un relé?", o: ["Para medir la luz", "Para que un circuito de poca potencia active otro de mucha potencia", "Para guardar el programa"], a: 1, e: "Es un interruptor accionado por un electroimán." },
  ],
  feynman: ["Qué es un sistema de control con un ejemplo de casa", "La diferencia entre lazo abierto y lazo cerrado", "Tres sensores y qué miden", "Tres actuadores y qué hacen", "Las partes de un robot móvil"],
  mapa: mapa("CONTROL Y ROBÓTICA", "var(--eso)", [
    ["Control", "entrada → controlador → salida", "var(--ink)"],
    ["Lazo cerrado", "realimentación con sensor", "var(--sun)"],
    ["Sensores", "LDR · ultrasonidos · pulsador", "var(--leaf)"],
    ["Actuadores", "motor · servo · LED", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Sistema de control en lazo cerrado", "El que mide la salida con un sensor y corrige la acción (realimentación)."],
    ["¿Qué es un sensor?", "Un dispositivo que convierte una magnitud física en una señal eléctrica."],
    ["¿Qué es un actuador?", "Un dispositivo que convierte una señal eléctrica en una acción (movimiento, luz, sonido)."],
    ["Diferencia entre motor CC y servomotor", "El motor CC gira de forma continua; el servo se coloca en un ángulo concreto."],
    ["Partes de un robot", "Estructura, sensores, actuadores, sistema de control y fuente de energía."],
  ],
  familias: ["Buscad en casa sistemas de control (cisterna, nevera, lavadora) y decid si son de lazo abierto o cerrado.", "Si tenéis robot aspirador, observad cómo reacciona al chocar o al acercarse a una escalera.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sistemas de control y robótica: lazo abierto y cerrado, sensores, actuadores, microcontroladores y montaje de robots (RD 217/2022, Tecnología 4º).",
    ideas: ["Robot siguelíneas con dos sensores infrarrojos y dos motores.", "Semáforo inteligente con Arduino y pulsador para peatones.", "Debate sobre robots y empleo con noticias actuales."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sistema de control, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_de_control" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir sensores digitales y analógicos y conectarlos a una placa", "Describir las partes de un robot y sus aplicaciones industriales"],
  tras: {
    "Sensores: los sentidos": [
      { html: `<h3>Sensores digitales y analógicos</h3><p>Un <b>sensor digital</b> solo da dos valores: activado o no (1 o 0). Ejemplos: un pulsador, un final de carrera, un sensor de infrarrojos que detecta si hay un obstáculo o un sensor de movimiento PIR. Un <b>sensor analógico</b> da un valor que varía de forma continua según la magnitud medida: una LDR (luz), un termistor o un sensor de temperatura, un potenciómetro (posición) o un sensor de humedad. En una placa como Arduino, los digitales se leen con <mark>digitalRead</mark> en los pines digitales y los analógicos con <mark>analogRead</mark> en los pines A0-A5, que devuelven un número de 0 a 1023. El <b>sensor de ultrasonidos</b> mide distancias: envía un pitido inaudible y calcula cuánto tarda en volver el eco, como los murciélagos.</p>`, video: { id: "V0jOKsjeBWQ", titulo: "Sensores: ejemplos con Arduino", canal: "ELECTRONOOBS en Español", vistas: 569693 } },
    ],
    "Actuadores: los músculos": [
      { html: `<h3>Motores para robots</h3><p>Los robots usan tres tipos principales de motores. El <b>motor de corriente continua</b> (CC) gira rápido mientras recibe corriente; para invertir el sentido hay que cambiar la polaridad, y suele llevar una <b>reductora</b> de engranajes para ganar fuerza y perder velocidad. El <b>servomotor</b> gira a un <mark>ángulo exacto</mark> (normalmente entre 0° y 180°) que le indicamos por programa: es ideal para brazos, pinzas o la dirección de un coche. El <b>motor paso a paso</b> avanza en pequeños pasos iguales, con mucha precisión: lo usan las impresoras 3D y las máquinas CNC. Como las placas de control dan muy poca corriente, los motores se conectan a través de un <b>driver</b> o de un transistor, con su propia alimentación.</p>` },
    ],
    "Los robots": [
      { html: `<h3>Partes de un robot y grados de libertad</h3><p>Un robot tiene una <b>estructura</b> mecánica (el chasis o el brazo), <b>sensores</b> para percibir el entorno, <b>actuadores</b> para moverse, un <b>sistema de control</b> (el «cerebro», una placa programable) y una <b>fuente de energía</b>. Los brazos robóticos se describen por sus <b>grados de libertad</b>: cada articulación que puede moverse de forma independiente añade uno. El brazo humano, sin contar la mano, tiene 7; los robots industriales suelen tener 6, suficientes para colocar su herramienta en cualquier posición y orientación. En el extremo llevan el <b>efector final</b>: una pinza, una ventosa, un soldador o una pistola de pintura.</p>`, video: { id: "eR3JTR5nCjo", titulo: "Robótica industrial", canal: "Automatización Industrial", vistas: 100589 } },
      { html: `<h3>Robots en la industria y en la vida diaria</h3><p>Los robots <b>industriales</b> sueldan, pintan, montan y empaquetan en las fábricas de coches o de alimentos: trabajan sin descanso, con precisión y en tareas peligrosas o repetitivas. Los <b>robots de servicio</b> salen de las fábricas: aspiradoras autónomas, robots que reparten en almacenes y hospitales, robots quirúrgicos que el cirujano maneja con gran precisión, drones o vehículos autónomos. Los <b>robots móviles</b> educativos siguen líneas o esquivan obstáculos. Esta automatización aumenta la productividad, pero también plantea retos: <mark>cambia muchos empleos</mark>, exige nuevas habilidades y obliga a pensar en la seguridad y la responsabilidad cuando un robot toma decisiones.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Diseña el sistema de control de una farola que se enciende sola de noche. ¿Es de lazo abierto o cerrado?", pasos: ["Entrada: una LDR mide la luz ambiental.", "Control: si la luz baja de un valor, la placa ordena encender.", "Salida: el actuador es la lámpara (a través de un relé).", "El sistema mide la luz y actúa según lo que mide: hay realimentación."], resultado: "Sensor LDR → controlador → relé y lámpara. Es de lazo cerrado." },
    { enunciado: "Un sensor analógico en Arduino lee 512. ¿Qué tensión hay en el pin si la placa trabaja a 5 V?", pasos: ["analogRead convierte 0-5 V en 0-1023.", "Tensión = lectura · 5 / 1023.", "512 · 5 / 1023 ≈ 2,5 V."], resultado: "Unos 2,5 V, la mitad del rango." },
    { enunciado: "Un sensor de ultrasonidos recibe el eco 2 ms después de enviar el pulso. ¿A qué distancia está el obstáculo? (Sonido: 340 m/s.)", pasos: ["2 ms = 0,002 s, tiempo de ida y vuelta.", "Distancia total = 340 · 0,002 = 0,68 m.", "El obstáculo está a la mitad: 0,34 m."], resultado: "A 34 cm." },
  ],
  errores: [
    "Pensar que un sistema automático siempre es de lazo cerrado: una tostadora con temporizador es de lazo abierto.",
    "Conectar un motor directamente a un pin de la placa: necesita un driver o un transistor.",
    "Confundir sensor (capta información) con actuador (actúa sobre el entorno).",
    "Leer un sensor analógico con digitalRead: solo daría 0 o 1.",
    "Pensar que cualquier máquina automática es un robot: un robot es programable y puede hacer tareas distintas.",
  ],
  ejercicios: [
    { q: "Clasifica como sensor o actuador: LDR, motor, zumbador, pulsador, servomotor, termistor, LED.", sol: "Sensores: LDR, pulsador y termistor. Actuadores: motor, zumbador, servomotor y LED." },
    { q: "Explica la diferencia entre lazo abierto y lazo cerrado con un ejemplo de cada uno.", sol: "Lazo abierto: actúa sin comprobar el resultado (lavadora con programa fijo). Lazo cerrado: mide el resultado y corrige (calefacción con termostato)." },
    { q: "Identifica entrada, control y salida en un termostato de calefacción.", sol: "Entrada: sensor de temperatura. Control: el termostato compara con la temperatura deseada. Salida: la caldera que se enciende o apaga." },
    { q: "¿Qué diferencia hay entre un sensor digital y uno analógico? Pon un ejemplo de cada uno.", sol: "El digital da solo dos valores (pulsador); el analógico da valores continuos (LDR)." },
    { q: "¿Qué motor elegirías para mover la pinza de un brazo robótico a un ángulo exacto? ¿Y para las ruedas de un coche?", sol: "Para la pinza, un servomotor. Para las ruedas, motores de corriente continua con reductora." },
    { q: "¿Cuántos grados de libertad tiene un brazo con hombro (giro y elevación), codo y muñeca (giro)?", sol: "4: dos en el hombro, uno en el codo y uno en la muñeca." },
    { q: "¿Qué valor devolverá analogRead si en el pin hay 0 V? ¿Y 5 V?", sol: "0 y 1023." },
    { q: "Un robot móvil debe parar a 20 cm de una pared. Describe en pseudocódigo su programa con un sensor de ultrasonidos.", sol: "Repetir siempre: medir distancia; si distancia > 20 cm, motores hacia delante; si no, parar motores." },
    { q: "Indica tres ventajas y una desventaja de usar robots en una fábrica.", sol: "Ventajas: trabajan sin descanso, con precisión y en tareas peligrosas. Desventaja: alto coste inicial y pérdida de algunos empleos (también necesitan mantenimiento)." },
    { q: "Pon tres ejemplos de robots de servicio.", sol: "Aspiradoras autónomas, robots quirúrgicos y robots de reparto en almacenes u hospitales (también drones)." },
  ],
  quiz: [
    { q: "Un pulsador es un sensor…", o: ["analógico", "digital", "actuador"], a: 1, e: "Solo da pulsado o no." },
    { q: "analogRead en Arduino devuelve valores entre…", o: ["0 y 1", "0 y 1023", "0 y 255"], a: 1, e: "Convierte 0-5 V en 0-1023." },
    { q: "El motor que gira a un ángulo exacto es el…", o: ["servomotor", "motor de CC", "zumbador"], a: 0, e: "Normalmente de 0° a 180°." },
    { q: "Los robots industriales suelen tener…", o: ["1 grado de libertad", "6 grados de libertad", "20 grados de libertad"], a: 1, e: "Suficientes para cualquier posición y orientación." },
    { q: "El sensor de ultrasonidos mide…", o: ["la luz", "la distancia", "la temperatura"], a: 1, e: "Por el tiempo del eco." },
  ],
  tarjetas: [
    ["Sensor analógico", "Da valores continuos; en Arduino se lee con analogRead (0-1023)."],
    ["Servomotor", "Motor que gira a un ángulo exacto indicado por programa."],
    ["Grados de libertad", "Número de movimientos independientes de un robot."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Un robot en Marte, a 20 minutos de distancia",
    html: `<p>Cuando el robot Perseverance avanza por el cráter Jezero, en Marte, nadie lo maneja con un mando. Una orden desde la Tierra tarda entre 5 y 20 minutos en llegar, demasiado para esquivar una roca a tiempo. Por eso el robot decide por sí mismo: sus cámaras y sensores miden el terreno, su ordenador calcula el camino más seguro, los motores de sus seis ruedas lo mueven y, a cada paso, vuelve a medir para corregir el rumbo. Es un sistema de control en lazo cerrado funcionando a 200 millones de kilómetros.</p>
      <p>La misma idea, medir, decidir y actuar, está en el termostato de tu casa, en el robot aspirador, en el brazo que suelda coches o en el coche que frena solo ante un peatón. En este tema conocerás cómo funcionan los sistemas de control, qué sensores y actuadores usan los robots, cómo se leen los sensores y se controlan los motores con una placa como Arduino y cómo se programa un robot que sigue una línea o esquiva obstáculos. También reflexionarás sobre cómo los robots están cambiando el trabajo y qué normas éticas deberían seguir.</p>`,
  },
  svgs: {
    "Sensores digitales y analógicos": L.comparar("Sensores digitales frente a sensores analógicos", ["Digital", ["solo 0 o 1", "pulsador", "final de carrera", "infrarrojos"]], ["Analógico", ["valores continuos", "LDR", "termistor", "potenciómetro"]]),
    "Motores para robots": L.rejilla("Tipos de motores para robots y su uso", ["Motor", "Cómo gira", "Uso"], [["CC", "continuo, rápido", "ruedas"], ["Servo", "a un ángulo", "pinzas, brazos"], ["Paso a paso", "pasos exactos", "impresoras 3D"]], { t: "Motores" }),
    "Partes de un robot y grados de libertad": L.capas("Partes de un robot", [["Control", "microcontrolador"], ["Sensores", "percibir"], ["Actuadores", "moverse"], ["Estructura", "chasis o brazo"], ["Energía", "batería"]], { t: "Partes de un robot" }),
    "Robots en la industria y en la vida diaria": L.cajas("Tipos de robots según su uso", [["Industriales", "soldar, pintar|montar"], ["De servicio", "aspirador|reparto"], ["Médicos", "cirugía|rehabilitación"], ["Exploración", "Marte, fondos|marinos"]], { t: "Robots por todas partes" }),
  },
  tras: {
    "Lazo abierto y lazo cerrado": [
      {
        html: `<h3>Control todo-nada y control proporcional</h3><p>En un sistema en lazo cerrado, el controlador compara la medida con la <b>consigna</b> (el valor deseado) y calcula el <b>error</b>: la diferencia entre ambos. La forma más sencilla de actuar es el <b>control todo-nada</b>: si la temperatura está por debajo de 21 °C, la calefacción se enciende a tope; si está por encima, se apaga. Es lo que hacen muchos termostatos. Para que el aparato no se encienda y apague cada pocos segundos alrededor de la consigna, se añade una <mark>histéresis</mark>: se enciende a 20,5 °C y se apaga a 21,5 °C.</p>
          <p>El control todo-nada provoca oscilaciones. Un control más fino es el <b>proporcional</b>: la acción es mayor cuanto mayor es el error. Un robot que sigue una pared gira mucho si está muy desviado y poco si casi va recto, y así su movimiento es suave. Los sistemas industriales usan el <b>control PID</b>, que además tiene en cuenta el error acumulado (parte integral) y lo rápido que cambia (parte derivativa); lo encontramos en el control de velocidad de crucero de un coche, en los drones que se mantienen quietos en el aire o en los hornos industriales. Ajustar bien estas acciones es un trabajo clave de la ingeniería de control.</p>`,
        svg: L.flujo("Lazo cerrado con consigna, error y corrección", ["Consigna: 21 °C", "Sensor mide: 19 °C", "Error = 21 − 19 = 2 °C", "Controlador decide la acción", "Actuador calienta y se vuelve a medir"], { t: "Consigna y error" }),
      },
    ],
    "Sensores digitales y analógicos": [
      {
        html: `<h3>Leer sensores con Arduino</h3><p>Una placa <b>Arduino</b> tiene patillas digitales (0 a 13) y analógicas (A0 a A5). Para leer un sensor digital, como un pulsador, primero se configura la patilla como entrada con <code>pinMode(2, INPUT)</code> y luego se lee con <code>digitalRead(2)</code>, que devuelve <b>HIGH</b> (1, unos 5 V) o <b>LOW</b> (0, 0 V). Para que la entrada no quede «flotando» cuando el pulsador está suelto se usa una resistencia de <b>pull-down</b> o se activa la de pull-up interna con <code>INPUT_PULLUP</code>.</p>
          <p>Los sensores analógicos se conectan a las patillas A0-A5 y se leen con <code>analogRead(A0)</code>. El <b>conversor analógico-digital</b> de la placa transforma la tensión de 0 a 5 V en un número de <mark>0 a 1023</mark> (10 bits). Para pasar ese valor a una unidad útil se usa la función <code>map</code>: <code>map(valor, 0, 1023, 0, 100)</code> lo convierte en un porcentaje. En el programa se suele comparar la lectura con un <b>umbral</b>: si la luz baja de 300, se enciende el LED. Los sensores más complejos, como el de ultrasonidos, miden tiempos (<code>pulseIn</code>) y otros, como los de temperatura y humedad, envían los datos por un protocolo de comunicación con su propia librería. Con el <b>monitor serie</b> (<code>Serial.println</code>) se ven las lecturas en el ordenador para calibrar.</p>`,
        svg: L.rejilla("Funciones de Arduino para leer sensores", ["Sensor", "Patilla", "Función", "Valor"], [["Pulsador", "digital", "digitalRead", "0 o 1"], ["LDR", "A0-A5", "analogRead", "0-1023"], ["Ultrasonidos", "digital", "pulseIn", "µs"], ["Ver datos", "USB", "Serial.println", "texto"]], { t: "Leer sensores" }),
      },
    ],
    "Motores para robots": [
      {
        html: `<h3>Controlar motores: puente H y PWM</h3><p>Una patilla de Arduino solo puede dar unos 20-40 mA, muy poco para un motor, que puede necesitar cientos de miliamperios. Por eso los motores se conectan a través de un <b>controlador</b> o <i>driver</i>, como el L298N o el L9110, que recibe las órdenes de la placa y entrega la corriente de una batería aparte. Dentro hay un <mark>puente H</mark>: cuatro interruptores electrónicos dispuestos en forma de H alrededor del motor. Cerrando una pareja en diagonal, la corriente atraviesa el motor en un sentido; cerrando la otra pareja, lo atraviesa al revés y el motor <b>invierte su giro</b>.</p>
          <p>Para regular la <b>velocidad</b> se usa la modulación por ancho de pulso, <b>PWM</b>: la placa enciende y apaga la alimentación cientos de veces por segundo y varía qué parte del tiempo está encendida (el <b>ciclo de trabajo</b>). Con <code>analogWrite(pin, 255)</code> está siempre encendida (100 %), con 128 la mitad del tiempo (50 %, velocidad media) y con 0 apagada. El motor, por su inercia, no nota los pulsos y gira más o menos rápido. El mismo método regula el brillo de un LED. Los servomotores se controlan con la librería Servo (<code>miServo.write(90)</code>) y los motores paso a paso, con secuencias de pulsos que avanzan un ángulo fijo cada vez.</p>`,
        svg: L.barras("Ciclo de trabajo PWM según el valor de analogWrite", [["analogWrite 0", 0.5], ["analogWrite 64", 25], ["analogWrite 128", 50], ["analogWrite 255", 100]], { t: "PWM: tiempo encendido", unidad: " %" }),
      },
    ],
    "Partes de un robot y grados de libertad": [
      {
        html: `<h3>Robots móviles: seguir líneas y evitar obstáculos</h3><p>Dos retos clásicos de la robótica educativa muestran cómo se combinan sensores, control y motores. El <b>robot siguelíneas</b> lleva debajo dos sensores de infrarrojos que distinguen el suelo blanco (refleja la luz) de una línea negra (la absorbe). Si los dos ven blanco, la línea está en medio y el robot avanza recto; si el sensor izquierdo ve negro, la línea se ha desviado a la izquierda y el robot gira a la izquierda frenando esa rueda; y al revés. Es un control en lazo cerrado repetido muchas veces por segundo.</p>
          <p>El <b>robot evitaobstáculos</b> usa un sensor de <b>ultrasonidos</b> delante, que emite un pulso y mide el tiempo que tarda el eco: distancia = tiempo × velocidad del sonido (unos 343 m/s) ÷ 2, porque el sonido va y vuelve. Si el obstáculo está a más de 20 cm avanza; si está más cerca, se para, retrocede un poco, gira y vuelve a medir. Estos robots tienen <b>tracción diferencial</b>: dos ruedas motrices independientes y una rueda loca; para girar, una rueda va más rápido que la otra o en sentido contrario. Combinando comportamientos sencillos se logran robots que parecen inteligentes, como los aspiradores domésticos que recorren toda la casa.</p>`,
        svg: L.rejilla("Decisiones de un robot siguelíneas según sus dos sensores", ["Sensor izq.", "Sensor der.", "Acción"], [["blanco", "blanco", "recto"], ["negro", "blanco", "girar izquierda"], ["blanco", "negro", "girar derecha"], ["negro", "negro", "parar (cruce)"]], { t: "Siguelíneas" }),
      },
      {
        html: `<h3>Programar un robot</h3><p>Un programa de Arduino tiene siempre dos partes. En <code>setup()</code> se escriben las instrucciones que se ejecutan <b>una sola vez</b> al encender: configurar patillas como entrada o salida, iniciar el monitor serie o colocar un servo en su posición inicial. En <code>loop()</code> va lo que se repite <mark>sin parar</mark>: leer los sensores, decidir con estructuras <code>if</code> y actuar sobre los motores, LED o zumbadores. La función <code>delay(ms)</code> detiene el programa unos milisegundos, aunque en robots conviene usarla con cuidado porque mientras espera no lee los sensores.</p>
          <p>Se puede programar con bloques (mBlock, ArduinoBlocks, MakeCode para micro:bit) o en lenguaje C++ con el entorno de Arduino. Una buena práctica es dividir el comportamiento en funciones: <code>avanzar()</code>, <code>girarIzquierda()</code>, <code>parar()</code>, <code>medirDistancia()</code>. Así el <code>loop</code> se lee casi como una frase. Antes de montar el robot completo hay que <b>probar cada parte por separado</b>: primero un motor, después el sensor mostrando sus lecturas en el monitor serie, y solo al final todo junto. Muchos robots también usan una <b>máquina de estados</b>: el robot está en «buscar», «seguir» o «esquivar», y cambia de estado según lo que detectan sus sensores.</p>`,
        svg: L.flujo("Estructura de un programa de Arduino para un robot", ["setup(): configurar patillas", "loop(): leer sensores", "Decidir con if / else", "Actuar sobre los motores", "Volver a empezar el loop"], { t: "setup y loop" }),
      },
    ],
    "Robots en la industria y en la vida diaria": [
      {
        html: `<h3>Robótica, trabajo y ética</h3><p>Los robots industriales tradicionales trabajan dentro de jaulas, porque son rápidos y fuertes y podrían herir a una persona. Hoy se extienden los <b>robots colaborativos</b> o <b>cobots</b>: más ligeros, con sensores de fuerza que los detienen si tocan a alguien, diseñados para trabajar al lado de las personas en tareas como atornillar o empaquetar. La robotización aumenta la productividad y elimina trabajos peligrosos, repetitivos o pesados, pero también <mark>sustituye empleos</mark> poco cualificados y crea otros nuevos: programación, mantenimiento, diseño de robots. Por eso la formación a lo largo de la vida es cada vez más importante.</p>
          <p>La robótica plantea preguntas éticas. El escritor Isaac Asimov imaginó en 1942 tres <b>leyes de la robótica</b>, la primera de ellas que un robot no debe dañar a un ser humano. Hoy los debates son reales: ¿quién es responsable si un coche autónomo causa un accidente?, ¿deben existir armas que decidan solas a quién atacar?, ¿qué datos pueden recoger los robots domésticos? La Unión Europea exige que las máquinas sean seguras y que los sistemas de alto riesgo tengan siempre supervisión humana. Diseñar robots útiles también es diseñarlos para que respeten a las personas.</p>`,
        svg: L.comparar("Ventajas y retos de la robotización", ["Ventajas", ["más productividad", "menos riesgos", "más precisión", "nuevos empleos"]], ["Retos", ["pérdida de empleos", "responsabilidad", "privacidad", "dependencia"]]),
      },
    ],
  },
  secciones: [3, 6, 6],
  niveles: "bbbbmmmamb",
  ejercicios: [
    { nivel: "básico", q: "¿Qué es la consigna en un sistema de control? ¿Y el error?", sol: "La consigna es el valor que queremos conseguir (por ejemplo, 21 °C). El error es la diferencia entre la consigna y lo que mide el sensor." },
    { nivel: "básico", q: "¿Qué valores devuelve digitalRead? ¿Y analogRead?", sol: "digitalRead devuelve HIGH (1) o LOW (0). analogRead devuelve un número entre 0 y 1023." },
    { nivel: "básico", q: "¿Qué parte del programa de Arduino se ejecuta una vez y cuál se repite?", sol: "setup() se ejecuta una sola vez al encender; loop() se repite sin parar." },
    { nivel: "básico", q: "¿Para qué sirve un puente H?", sol: "Para controlar un motor de corriente continua y poder invertir su sentido de giro cambiando el sentido de la corriente." },
    { nivel: "básico", q: "¿Qué es un cobot?", sol: "Un robot colaborativo, diseñado para trabajar junto a las personas de forma segura, con sensores que lo detienen si toca a alguien." },
    { nivel: "básico", q: "¿Por qué los motores no se conectan directamente a las patillas de Arduino?", sol: "Porque una patilla solo da unos 20-40 mA y un motor necesita mucha más corriente; se usa un controlador con una batería aparte." },
    { nivel: "básico", q: "Explica qué ve un sensor de infrarrojos sobre una línea negra y sobre el suelo blanco.", sol: "El blanco refleja la luz infrarroja y el sensor la recibe; el negro la absorbe y el sensor no recibe reflejo. Así distingue la línea del suelo." },
    { nivel: "medio", q: "Un termostato tiene consigna 21 °C con histéresis de ±0,5 °C. ¿Cuándo se enciende y cuándo se apaga la calefacción? ¿Para qué sirve la histéresis?", sol: "Se enciende al bajar de 20,5 °C y se apaga al superar 21,5 °C. Evita que la calefacción se encienda y apague continuamente alrededor de 21 °C." },
    { nivel: "medio", q: "Convierte con map una lectura de 768 (de 0 a 1023) a un porcentaje de 0 a 100.", sol: "768 · 100 / 1023 ≈ 75 %. En código: map(768, 0, 1023, 0, 100) → 75." },
    { nivel: "medio", q: "¿Qué tensión hay en una patilla analógica si analogRead devuelve 205? (Placa de 5 V)", sol: "V = 205 · 5 / 1023 ≈ 1,0 V." },
    { nivel: "medio", q: "Con analogWrite(9, 191), ¿qué ciclo de trabajo tiene la señal PWM?", sol: "191 / 255 ≈ 0,75 → 75 % del tiempo encendida; el motor gira a unas tres cuartas partes de su velocidad." },
    { nivel: "medio", q: "Compara el control todo-nada y el proporcional con el ejemplo de un robot que sigue una pared.", sol: "Todo-nada: si está lejos gira a tope hacia la pared, si está cerca gira a tope hacia fuera: avanza en zigzag. Proporcional: gira más cuanto más desviado está y poco si casi va bien: avanza de forma suave." },
    { nivel: "medio", q: "Escribe en pseudocódigo el programa de un siguelíneas con dos sensores.", sol: "Repetir siempre: leer izq y der. Si izq = blanco y der = blanco → avanzar. Si izq = negro → girar a la izquierda. Si der = negro → girar a la derecha. Si los dos negro → parar." },
    { nivel: "medio", q: "Un sensor de ultrasonidos mide un eco de 1.166 µs. ¿A qué distancia está el obstáculo?", sol: "d = 0,001166 s · 343 m/s / 2 ≈ 0,20 m = 20 cm." },
    { nivel: "medio", q: "¿Cómo gira un robot de tracción diferencial a la derecha? Da dos formas.", sol: "Haciendo que la rueda izquierda gire más rápido que la derecha (giro amplio) o que las ruedas giren en sentidos contrarios (giro sobre sí mismo)." },
    { nivel: "medio", q: "¿Por qué conviene probar cada sensor y cada motor por separado antes de montar el robot entero?", sol: "Porque si falla todo junto es muy difícil saber si el problema es de conexión, de un componente o del programa. Probar por partes localiza los errores enseguida." },
    { nivel: "medio", q: "¿Qué es una resistencia pull-down y qué problema evita?", sol: "Una resistencia que une la entrada a 0 V cuando el pulsador está suelto. Evita que la entrada quede «flotando» y lea valores al azar." },
    { nivel: "avanzado", q: "Escribe el programa de Arduino que encienda un LED (patilla 13) cuando la LDR (A0) lea menos de 300.", sol: "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  int luz = analogRead(A0);\n  if (luz < 300) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}" },
    { nivel: "avanzado", q: "Escribe una función avanzar(velocidad) para un controlador con las patillas ENA = 5, IN1 = 7 e IN2 = 8.", sol: "void avanzar(int velocidad) {\n  digitalWrite(7, HIGH);\n  digitalWrite(8, LOW);\n  analogWrite(5, velocidad);\n}" },
    { nivel: "avanzado", q: "Diseña la máquina de estados de un robot aspirador con estados «limpiar», «esquivar» y «volver a cargar».", sol: "Limpiar: avanza; si detecta obstáculo → esquivar; si batería < 15 % → volver. Esquivar: retrocede, gira un ángulo aleatorio → limpiar. Volver: busca la señal de la base y avanza hacia ella; al conectar, se para y carga." },
    { nivel: "avanzado", q: "Calcula los grados de libertad de un brazo con base giratoria, hombro, codo, muñeca con dos giros y pinza. ¿Cuenta la pinza?", sol: "Base 1 + hombro 1 + codo 1 + muñeca 2 = 5 grados de libertad. La pinza abre y cierra, pero no posiciona el extremo, así que normalmente no se cuenta como grado de libertad del brazo." },
    { nivel: "avanzado", q: "¿Por qué usar delay() largos puede hacer que un robot choque? Propón una solución.", sol: "Mientras espera, el programa no lee los sensores: si aparece un obstáculo no reacciona. Solución: usar esperas cortas, o controlar el tiempo con millis() para medir sin detener el programa." },
    { nivel: "avanzado", q: "Debate: ¿quién debería ser responsable si un coche autónomo causa un accidente? Da argumentos para dos posturas.", sol: "Fabricante: diseñó el sistema que tomó la decisión y debe garantizar su seguridad. Conductor o propietario: debía supervisar y estar atento para intervenir. La ley europea tiende a exigir supervisión humana y responsabilidad del fabricante por defectos." },
    { nivel: "avanzado", q: "Una fábrica sustituye 20 puestos de empaquetado por 4 robots y crea 3 puestos de técnico. Analiza el impacto y propón medidas sociales.", sol: "Pérdida neta de 17 puestos, aunque los nuevos son más cualificados y mejor pagados, y desaparecen tareas repetitivas. Medidas: formar a los trabajadores para los nuevos puestos, recolocarlos en otras áreas, planes de transición y formación profesional continua." },
    { nivel: "avanzado", q: "Explica cómo un dron usa el control en lazo cerrado para mantenerse quieto en el aire.", sol: "Sus sensores (giróscopo, acelerómetro, barómetro, GPS) miden continuamente su inclinación, altura y posición; el controlador calcula el error respecto a la posición deseada y ajusta la velocidad de cada hélice cientos de veces por segundo, normalmente con control PID." },
  ],
  ejemplos: [
    { enunciado: "Diseña el control de un invernadero que abra una ventana (servo) si la temperatura supera 28 °C y la cierre por debajo de 25 °C.", pasos: ["Entrada: sensor de temperatura (analógico o digital con librería).", "Consigna con histéresis: abrir a más de 28 °C, cerrar a menos de 25 °C.", "Salida: servomotor a 90° (abierta) o 0° (cerrada).", "Es un sistema en lazo cerrado: tras abrir, la temperatura baja y se vuelve a medir."], resultado: "Control todo-nada con histéresis de 3 °C en lazo cerrado." },
    { enunciado: "Un robot evitaobstáculos mide 15 cm al frente. Describe qué hace su programa.", pasos: ["Lee la distancia con el sensor de ultrasonidos: 15 cm.", "Compara con el umbral: 15 < 20 cm → hay obstáculo.", "Para los motores, retrocede medio segundo y gira a la derecha.", "Vuelve a medir: si hay más de 20 cm libres, avanza."], resultado: "Esquiva el obstáculo y continúa." },
    { enunciado: "Con analogWrite, regula un motor al 40 % de su velocidad.", pasos: ["El valor máximo es 255 (100 %).", "40 % de 255 = 0,4 · 255 = 102.", "Instrucción: analogWrite(pinMotor, 102).", "El motor recibe pulsos encendidos el 40 % del tiempo."], resultado: "analogWrite(pinMotor, 102)" },
  ],
  errores: ["Conectar un motor directamente a una patilla de Arduino: puede dañar la placa; hay que usar un controlador o un transistor."],
  cuarta: ["con sensores de luz", "Aumentar la potencia", "Pulsador", "LED", "La batería", "de temperatura", "0 y 5", "motor paso a paso de juguete", "100 grados de libertad", "la humedad"],
  quiz: [
    { q: "La diferencia entre la consigna y el valor medido es…", o: ["la histéresis", "el error", "la potencia", "el umbral"], a: 1, e: "El controlador actúa para reducirlo." },
    { q: "La histéresis de un termostato sirve para…", o: ["calentar más rápido", "evitar que se encienda y apague continuamente", "medir la humedad", "ahorrar batería del mando"], a: 1, e: "Separa el punto de encendido y el de apagado." },
    { q: "¿Qué función de Arduino lee una patilla analógica?", o: ["digitalRead", "analogRead", "analogWrite", "pinMode"], a: 1, e: "Devuelve de 0 a 1023." },
    { q: "Con analogWrite(pin, 128) el motor gira aproximadamente a…", o: ["0 %", "25 %", "50 %", "100 %"], a: 2, e: "128 es la mitad de 255." },
    { q: "Un puente H permite…", o: ["medir la distancia", "invertir el sentido de giro de un motor", "leer un pulsador", "guardar el programa"], a: 1, e: "Cambia el sentido de la corriente." },
    { q: "En un siguelíneas, si el sensor izquierdo ve negro, el robot debe…", o: ["girar a la izquierda", "girar a la derecha", "acelerar recto", "dar marcha atrás"], a: 0, e: "La línea se ha desplazado a la izquierda." },
    { q: "La distancia con ultrasonidos se calcula con…", o: ["tiempo × 343 / 2", "tiempo × 343", "tiempo / 2", "343 / tiempo"], a: 0, e: "Se divide entre 2 porque el sonido va y vuelve." },
    { q: "Las instrucciones que se ejecutan una sola vez van en…", o: ["loop()", "setup()", "delay()", "if"], a: 1, e: "Por ejemplo, configurar las patillas." },
    { q: "Un robot diseñado para trabajar junto a personas es un…", o: ["cobot", "dron", "servo", "sensor"], a: 0, e: "Robot colaborativo." },
    { q: "El control que ajusta la acción según el error, su acumulado y su variación es el…", o: ["todo-nada", "PID", "lazo abierto", "PWM"], a: 1, e: "Proporcional, integral y derivativo." },
  ],
  cuartaEx: ["programa", "sensor de luz", "Para cargar la batería"],
  examen: [
    { q: "El conversor analógico-digital de Arduino tiene…", o: ["1 bit", "8 bits", "10 bits", "64 bits"], a: 2, e: "Por eso da 1.024 valores (0-1023)." },
    { q: "PWM regula la velocidad de un motor variando…", o: ["el color del cable", "la parte del tiempo que está encendido", "el tamaño del motor", "la temperatura"], a: 1, e: "Es el ciclo de trabajo." },
    { q: "Un robot de tracción diferencial gira…", o: ["con un volante", "variando la velocidad de cada rueda", "solo marcha atrás", "con una hélice"], a: 1, e: "Una rueda más rápida que la otra." },
    { q: "INPUT_PULLUP en Arduino…", o: ["activa una resistencia interna para que la entrada no quede flotando", "enciende un LED", "acelera el motor", "borra el programa"], a: 0, e: "Así el pulsador da lecturas fiables." },
    { q: "Una pregunta ética de la robótica actual es…", o: ["¿de qué color pintar el robot?", "¿quién responde si un coche autónomo causa un accidente?", "¿cuántos tornillos lleva?", "¿qué voltaje usa?"], a: 1, e: "La responsabilidad es un debate abierto." },
  ],
  tarjetas: [
    ["Consigna y error", "Valor deseado y diferencia con lo medido."],
    ["analogRead y map", "Lee 0-1023 y lo convierte a la escala que queramos."],
    ["Puente H y PWM", "Invierte el giro y regula la velocidad de un motor."],
    ["setup() y loop()", "Una vez al inicio y repetición sin fin."],
  ],
  glosario: [
    ["Sistema de control", "Conjunto que gobierna un proceso sin intervención continua de una persona."],
    ["Lazo cerrado", "Control que mide el resultado y corrige la acción."],
    ["Consigna", "Valor que se desea alcanzar."],
    ["Histéresis", "Margen entre los valores de encendido y apagado de un control."],
    ["Control PID", "Control que combina acciones proporcional, integral y derivativa."],
    ["Sensor", "Dispositivo que convierte una magnitud física en una señal eléctrica."],
    ["Actuador", "Dispositivo que convierte una señal en una acción."],
    ["Conversor analógico-digital", "Circuito que transforma una tensión en un número."],
    ["Umbral", "Valor de referencia para tomar una decisión."],
    ["Puente H", "Circuito que permite invertir el sentido de giro de un motor."],
    ["PWM", "Modulación por ancho de pulso para regular velocidad o brillo."],
    ["Servomotor", "Motor que gira hasta un ángulo exacto."],
    ["Grado de libertad", "Cada movimiento independiente que puede hacer un robot."],
    ["Tracción diferencial", "Sistema de giro con dos ruedas motrices independientes."],
    ["Máquina de estados", "Forma de programar en la que el sistema pasa de un estado a otro según las entradas."],
    ["Cobot", "Robot colaborativo que trabaja junto a personas."],
    ["Microcontrolador", "Chip programable que controla el robot."],
  ],
  situacion: {
    titulo: "Robot de rescate en el laberinto",
    reto: "Por equipos, construid y programad un robot móvil que recorra un circuito del aula siguiendo una línea, detecte un obstáculo en el camino, lo esquive y avise con una señal luminosa y sonora al llegar a la «zona de rescate».",
    pasos: [
      "Diseñad el robot: chasis, dos motores con controlador, sensores de infrarrojos, ultrasonidos, LED y zumbador; dibujad el esquema de conexiones.",
      "Probad por separado cada motor y cada sensor, mostrando las lecturas en el monitor serie para calibrar los umbrales.",
      "Programad los comportamientos como funciones (avanzar, girar, parar, medir) y organizadlos en una máquina de estados.",
      "Ajustad velocidades con PWM y probad en el circuito, anotando tiempos y fallos en una tabla.",
      "Mejorad el robot y presentad su funcionamiento explicando el control en lazo cerrado que utiliza.",
    ],
    producto: "El robot funcionando, el esquema de conexiones, el programa comentado y una tabla de pruebas.",
    evaluacion: ["El esquema es correcto y las conexiones son seguras (controlador de motores, alimentación).", "El programa está bien estructurado en funciones o estados y usa correctamente sensores y PWM.", "El robot completa el recorrido y esquiva el obstáculo de forma fiable.", "El equipo explica el sistema de control y documenta las pruebas y mejoras."],
  },
  objetivos: ["Leer sensores y controlar motores con Arduino (analogRead, PWM, puente H)", "Programar comportamientos de robots móviles y valorar el impacto de la robótica"],
  fuentes: [{ t: "Documentación de Arduino en español", url: "https://docs.arduino.cc/" }],
});
