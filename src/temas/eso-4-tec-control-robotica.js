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
