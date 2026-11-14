// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Diagrama de bloques de lazo cerrado.
const lazo = () => {
  const caja = (x, y, w, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${B.tx(x + w / 2, y + 19, t, { fs: 10.5, maxW: w - 8, bold: true, color: c })}`;
  const fl = (d) => `<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#flz)"/>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de bloques de un sistema de control en lazo cerrado con comparador, controlador, actuador, proceso y sensor">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <defs><marker id="flz" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
    ${B.tx(130, 20, "Control en lazo cerrado", { fs: 13, maxW: 236, bold: true, font: B.D })}
    <circle cx="32" cy="70" r="11" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>${B.tx(32, 74, "±", { fs: 12, maxW: 14, bold: true, color: "var(--red)" })}
    ${fl("M8 70 H 19")}${fl("M43 70 H 56")}${caja(56, 55, 62, "Controlador", "var(--pen)")}${fl("M118 70 H 130")}${caja(130, 55, 52, "Actuador", "var(--sun)")}${fl("M182 70 H 194")}${caja(194, 55, 56, "Proceso", "var(--leaf)")}
    ${fl("M222 85 V 130 H 160")}${caja(100, 115, 60, "Sensor", "var(--inf)")}${fl("M100 130 H 32 V 83")}
    ${B.tx(10, 62, "x", { fs: 11, maxW: 10, bold: true })}${B.tx(48, 62, "e", { fs: 11, maxW: 10, bold: true, color: "var(--red)" })}${B.tx(240, 108, "y", { fs: 11, maxW: 10, bold: true, color: "var(--leaf)" })}
    ${B.tx(130, 168, "realimentación: e = x − y", { fs: 11, maxW: 200, bold: true, color: "var(--muted)" })}
  </svg>`;
};

module.exports = B.tema({
  titulo: "Sistemas de control y automatización",
  minutos: 120,
  objetivos: [
    "Diferenciar sistemas de control en lazo abierto y en lazo cerrado y representarlos con diagramas de bloques",
    "Calcular funciones de transferencia sencillas y describir el control todo-nada, proporcional y PID",
    "Analizar circuitos neumáticos e hidráulicos básicos y calcular fuerzas en cilindros",
    "Diseñar automatismos sencillos con relés, autómatas programables y GRAFCET",
  ],
  claves: ["sistema de control", "lazo cerrado", "realimentación", "diagrama de bloques", "función de transferencia", "PID", "sensor", "actuador", "neumática", "cilindro", "autómata programable", "GRAFCET"],
  pregunta: {
    texto: "El horno de casa mantiene 180 °C durante una hora aunque abras la puerta un momento. ¿Cómo «sabe» cuándo debe calentar más y cuándo parar?",
    respuesta: "Tiene un <b>sensor</b> de temperatura que mide continuamente y un <b>controlador</b> que compara esa medida con la temperatura deseada. Si la medida es menor, enciende la resistencia; si la supera, la apaga. Esa comparación constante entre lo que se quiere y lo que hay es la <mark>realimentación</mark>, la idea que hace funcionar cualquier sistema automático.",
  },
  lectura: {
    titulo: "El regulador que inventó el control",
    html: `<p>Las primeras máquinas de vapor tenían un problema: si la carga disminuía, el motor se aceleraba peligrosamente; si aumentaba, se frenaba. Un operario debía vigilar y abrir o cerrar la válvula del vapor a mano. En 1788 James Watt adaptó a su máquina un ingenio sencillo y genial: dos bolas metálicas que giraban con el eje del motor. Cuanto más rápido giraban, más se separaban por la fuerza centrífuga, y al separarse cerraban la válvula del vapor. Si el motor se frenaba, las bolas caían y la abrían.</p>
    <p>El regulador centrífugo medía la velocidad, la comparaba con la deseada y corregía, sin intervención humana. Era un sistema de control en lazo cerrado, y fue una de las claves de la Revolución Industrial.</p>
    <p>Hoy ese principio está en todas partes: en el piloto automático de un avión, en el control de crucero de un coche, en el termostato de la calefacción, en las fábricas donde robots y autómatas ensamblan, pintan y empaquetan sin descanso. En este tema aprenderás cómo se diseñan esos sistemas y qué piezas los forman.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Sistemas de control y sus elementos",
      html: `<p>Un <b>sistema de control</b> es un conjunto de elementos que actúan juntos para que una o varias magnitudes de un proceso (la <b>variable controlada</b> o salida) se comporten de la manera deseada, fijada por una <b>señal de referencia</b> o consigna (la entrada). Si el control funciona sin intervención humana, se habla de <b>sistema automático</b>.</p>
      <p>Los elementos de un sistema de control son:</p>
      <ul><li><b>Proceso</b> o planta: lo que se quiere controlar (la temperatura de un horno, la velocidad de un motor, el nivel de un depósito).</li>
      <li><b>Sensor</b> o transductor: mide la variable controlada y la convierte en una señal, normalmente eléctrica.</li>
      <li><b>Comparador</b>: resta la medida a la referencia y obtiene la <b>señal de error</b>.</li>
      <li><b>Controlador</b> o regulador: decide qué hacer a partir del error. Puede ser un circuito, un microcontrolador o un autómata.</li>
      <li><b>Actuador</b>: ejecuta la orden sobre el proceso (una resistencia, un motor, una válvula, un cilindro).</li></ul>
      <p>Además, sobre el proceso actúan <b>perturbaciones</b>: cambios externos no deseados que alteran la salida, como abrir la puerta del horno, una cuesta para el control de crucero o una ráfaga de viento para un dron. Un buen sistema de control debe compensarlas.</p>`,
      svg: B.cajas("Elementos de un sistema de control", [["Sensor", "mide la salida"], ["Comparador", "calcula el error"], ["Controlador", "decide la acción"], ["Actuador", "actúa sobre|el proceso"]], { t: "Elementos del control" }),
    },
    {
      h: "Lazo abierto y lazo cerrado",
      html: `<p>En un sistema de control en <b>lazo abierto</b>, la acción de control no depende de la salida: el sistema actúa según una orden fija, sin comprobar el resultado. Una tostadora con temporizador tuesta un tiempo determinado, esté el pan como esté; una lavadora sigue su programa aunque la ropa ya esté limpia; un semáforo cambia por tiempo aunque no haya coches. Son sistemas <b>sencillos y baratos</b>, pero no corrigen las perturbaciones.</p>
      <p>En un sistema en <b>lazo cerrado</b> o realimentado, un sensor mide la salida y la información vuelve al comparador. El controlador actúa según la diferencia entre lo que se quiere y lo que hay: si hay error, corrige. El termostato de la calefacción, el control de crucero, el piloto automático o el cuerpo humano regulando su temperatura son ejemplos.</p>
      <p>El lazo cerrado es más <mark>preciso y robusto</mark> frente a perturbaciones y a cambios en el propio sistema, pero es más complejo, más caro y puede volverse <b>inestable</b>: si el controlador reacciona demasiado fuerte o con retraso, la salida oscila cada vez más, como cuando en la ducha se gira el grifo bruscamente de frío a caliente y al revés. Diseñar el controlador consiste en lograr una respuesta rápida, precisa y estable.</p>`,
      svg: B.comparar("Lazo abierto frente a lazo cerrado", ["Lazo abierto", ["sin sensor de salida", "no corrige", "simple y barato", "tostadora"]], ["Lazo cerrado", ["mide la salida", "corrige el error", "preciso y robusto", "termostato"]]),
      video: { id: "1sKPy-FIgog", titulo: "Teoría de control: sistemas en lazo abierto y lazo cerrado", canal: "kan learn", vistas: 191251 },
    },
    {
      h: "Diagramas de bloques y función de transferencia",
      html: `<p>Los sistemas de control se representan con <b>diagramas de bloques</b>. Cada bloque es un elemento, con una flecha de entrada y otra de salida, y dentro se escribe su <b>función de transferencia</b> G: la relación entre su salida y su entrada (y = G · x). Los círculos son comparadores o sumadores, y los puntos de bifurcación toman una señal sin modificarla.</p>
      <p>Los diagramas se simplifican con unas reglas básicas:</p>
      <ul><li><b>Bloques en serie</b>: se multiplican, G = G₁ · G₂.</li>
      <li><b>Bloques en paralelo</b> (con un sumador): se suman, G = G₁ + G₂.</li>
      <li><b>Lazo cerrado</b> con realimentación negativa: si G es la cadena directa y H la de realimentación, la función de transferencia total es:</li></ul>
      <div class="formula"><span>M = y / x = G / (1 + G · H)</span></div>
      <p>La señal de error vale e = x − H · y. Cuando G es muy grande, M ≈ 1/H: el comportamiento del sistema depende casi solo de la realimentación, que suele ser un sensor preciso, y no de las imperfecciones de la cadena directa. Esa es la gran ventaja del lazo cerrado. En sistemas reales G y H dependen del tiempo y se estudian con herramientas matemáticas más avanzadas (la transformada de Laplace), pero el razonamiento es el mismo.</p>`,
      svg: lazo(),
    },
    {
      h: "Tipos de control: todo-nada, proporcional y PID",
      html: `<p>El controlador decide cómo actuar a partir del error. Los tipos más comunes son:</p>
      <ul><li><b>Todo-nada</b> (on/off): el actuador está totalmente encendido o apagado. Para evitar que conmute continuamente, se usa una <b>histéresis</b>: un termostato fijado a 21 °C enciende por debajo de 20 °C y apaga por encima de 22 °C. Es sencillo, pero la variable oscila alrededor de la consigna.</li>
      <li><b>Proporcional</b> (P): la acción es proporcional al error, u = K_p · e. Cuanto más lejos está la salida de la consigna, más fuerte actúa. Es suave, pero suele dejar un pequeño <b>error permanente</b>, y si K_p es muy alta el sistema oscila.</li>
      <li><b>Integral</b> (I): suma el error a lo largo del tiempo y actúa mientras exista, por pequeño que sea: elimina el error permanente, aunque hace la respuesta más lenta.</li>
      <li><b>Derivativo</b> (D): actúa según la <b>velocidad de cambio</b> del error: se anticipa y frena las oscilaciones.</li></ul>
      <p>El controlador <b>PID</b> combina las tres acciones:</p>
      <div class="formula"><span>u(t) = K_p · e + K_i · ∫e dt + K_d · de/dt</span></div>
      <p>Ajustar (sintonizar) las tres constantes es un arte: se busca una respuesta rápida, con poca <b>sobreoscilación</b> (cuánto se pasa de la consigna) y sin error final. Los PID están en drones, hornos industriales, impresoras 3D y robots que mantienen el equilibrio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Respuesta de un sistema todo-nada que oscila entre dos límites y de un PID que se estabiliza en la consigna">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Respuesta del sistema", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M24 156 H 244 M24 156 V 32" stroke="var(--ink)" stroke-width="1.8"/>
        <path d="M24 74 H 244" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>${B.tx(226, 102, "consigna", { fs: 10, maxW: 54, color: "var(--muted)" })}
        <path d="M24 150 L 80 64 L 100 84 L 120 64 L 140 84 L 160 64 L 180 84 L 200 64 L 220 84 L 240 64" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M24 152 C 60 40, 90 60, 120 78 S 170 74, 240 74" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        ${B.tx(70, 172, "todo-nada: oscila", { fs: 10.5, maxW: 100, bold: true, color: "var(--red)" })}${B.tx(190, 172, "PID: se estabiliza", { fs: 10.5, maxW: 100, bold: true, color: "var(--leaf)" })}
      </svg>`,
      video: { id: "fv6dLTEvl74", titulo: "Explicación del controlador PID", canal: "RealPars", vistas: 1278085 },
    },
    {
      h: "Sensores y transductores",
      html: `<p>Los <b>sensores</b> detectan una magnitud física o química y la convierten en una señal eléctrica que el controlador puede procesar. Pueden ser <b>digitales</b> o todo-nada (solo dicen sí o no) o <b>analógicos</b> (dan un valor proporcional a la magnitud). Los más usados en automatización son:</p>
      <ul><li><b>Posición y presencia</b>: finales de carrera (interruptores mecánicos accionados por una pieza), sensores inductivos (detectan metales sin contacto), capacitivos (detectan casi cualquier material, incluidos líquidos), magnéticos o reed (detectan un imán, por ejemplo en el émbolo de un cilindro) y fotoeléctricos (una barrera de luz que se interrumpe).</li>
      <li><b>Distancia</b>: ultrasonidos (miden el tiempo del eco), infrarrojos y láser (LiDAR).</li>
      <li><b>Temperatura</b>: termistores NTC/PTC, termopares (para temperaturas altas) y sondas Pt100.</li>
      <li><b>Luz</b>: LDR, fotodiodos y fototransistores.</li>
      <li><b>Movimiento</b>: encoders (cuentan las vueltas de un eje), acelerómetros y giróscopos (en móviles y drones), sensores PIR de presencia.</li>
      <li><b>Fuerza y presión</b>: galgas extensométricas (básculas), presostatos.</li></ul>
      <p>Al elegir un sensor se valoran su <b>rango</b> de medida, su <b>sensibilidad</b> (cuánto cambia la salida por cada unidad de la magnitud), su <b>precisión</b>, su <b>resolución</b> y su <b>tiempo de respuesta</b>, además del coste y del entorno de trabajo (polvo, humedad, vibraciones).</p>`,
      svg: B.rejilla("Sensores habituales y lo que detectan", ["Sensor", "Detecta", "Señal"], [["Final carrera", "contacto", "digital"], ["Inductivo", "metal", "digital"], ["Ultrasonidos", "distancia", "analógica"], ["NTC", "temperatura", "analógica"], ["Encoder", "giro", "pulsos"]], { t: "Sensores" }),
    },
    {
      h: "Actuadores eléctricos",
      html: `<p>Los <b>actuadores</b> transforman la orden del controlador en una acción física. Los eléctricos más comunes son:</p>
      <ul><li><b>Motores de corriente continua</b>: su velocidad se regula variando la tensión (o con PWM), y su sentido de giro, invirtiendo la polaridad mediante un <b>puente en H</b>.</li>
      <li><b>Servomotores</b>: motores con reductora, sensor de posición y control interno en lazo cerrado. Se les indica un ángulo (normalmente con una señal PWM) y lo mantienen. Robots, timones, brazos articulados.</li>
      <li><b>Motores paso a paso</b>: giran un ángulo fijo (por ejemplo, 1,8°) con cada pulso. Se controlan con precisión en lazo abierto, contando pulsos: impresoras 3D, fresadoras CNC.</li>
      <li><b>Motores de inducción trifásicos</b>: robustos y baratos, mueven la mayoría de las máquinas industriales. Se controlan con <b>variadores de frecuencia</b>, que ajustan su velocidad y ahorran energía.</li>
      <li><b>Relés y contactores</b>: interruptores accionados por un electroimán. El relé conmuta corrientes pequeñas; el contactor, potencias grandes, y tiene contactos principales y auxiliares.</li>
      <li><b>Electroválvulas</b>, que abren o cierran el paso de un fluido; <b>resistencias</b> calefactoras; <b>zumbadores</b>, lámparas y pantallas como avisos.</li></ul>
      <p>Como un microcontrolador solo da unos pocos miliamperios, entre él y el actuador siempre hay una etapa de potencia: un transistor, un MOSFET, un driver de motores o un relé.</p>`,
      svg: B.cajas("Actuadores eléctricos y su uso", [["Motor CC", "velocidad con PWM"], ["Servomotor", "ángulo preciso"], ["Paso a paso", "pasos de 1,8°"], ["Contactor", "grandes potencias"]], { t: "Actuadores eléctricos" }),
    },
    {
      h: "Neumática e hidráulica: fundamentos",
      html: `<p>La <b>neumática</b> usa aire comprimido para transmitir energía, y la <b>hidráulica</b>, aceite a presión. Ambas producen movimientos lineales potentes y rápidos con elementos sencillos.</p>
      <p>Una instalación neumática tiene un <b>compresor</b> que aspira aire y lo comprime (normalmente a 6-8 bar), un <b>depósito</b> que lo almacena, una <b>unidad de mantenimiento</b> (filtro que retira agua y partículas, regulador de presión con manómetro y, a veces, lubricador), las <b>válvulas</b> que dirigen el aire y los <b>actuadores</b>: cilindros y motores neumáticos.</p>
      <p>Los <b>cilindros</b> tienen un émbolo con un vástago. En el de <b>simple efecto</b>, el aire empuja en un solo sentido y un muelle lo devuelve. En el de <b>doble efecto</b>, el aire empuja en los dos sentidos. La fuerza teórica es la presión por la superficie:</p>
      <div class="formula"><span>F = p · S   ·   1 bar = 10⁵ Pa = 0,1 N/mm²</span></div>
      <p>En el avance, la superficie es la del émbolo, S = π · D² / 4; en el retroceso hay que restar la del vástago, S′ = π · (D² − d²) / 4, por lo que la fuerza de retroceso es menor. La fuerza real es algo menor por los rozamientos.</p>
      <p>La neumática es limpia, rápida, segura en ambientes explosivos y barata, pero el aire es compresible (los movimientos no son precisos a mitad de recorrido) y las fuerzas son moderadas. La hidráulica trabaja a cientos de bares y da fuerzas enormes con precisión, gracias al <b>principio de Pascal</b>: F₁ / S₁ = F₂ / S₂. Así funcionan las prensas, las excavadoras y los frenos de los coches.</p>`,
      svg: B.flujo("Componentes de una instalación neumática", ["Compresor", "Depósito", "Unidad de mantenimiento", "Válvulas", "Cilindro"], { t: "Instalación neumática" }),
    },
    {
      h: "Válvulas y circuitos neumáticos",
      html: `<p>Las <b>válvulas distribuidoras</b> dirigen el aire comprimido. Se designan con dos números: <b>vías</b> (orificios) y <b>posiciones</b>. Una válvula <b>3/2</b> tiene tres vías (presión, utilización y escape) y dos posiciones: sirve para gobernar un cilindro de simple efecto. Una <b>5/2</b> tiene cinco vías y dos posiciones: gobierna un cilindro de doble efecto. Las válvulas se accionan por pulsador, palanca, pedal, rodillo (accionado por la propia máquina), electroimán (<b>electroválvulas</b>) o aire (pilotaje neumático), y vuelven a su posición por muelle o por otra señal.</p>
      <p>En el <b>mando directo</b>, la válvula que acciona el operario alimenta directamente el cilindro. En el <b>mando indirecto</b>, esa válvula solo envía una señal de pilotaje a una válvula de potencia mayor, lo que permite controlar cilindros grandes con elementos pequeños.</p>
      <p>Hay válvulas que realizan funciones lógicas: la <b>válvula selectora</b> o de simultaneidad funciona como una OR (sale aire si llega por una entrada o por otra), y la <b>válvula de simultaneidad</b> o de dos presiones, como una AND (solo sale aire si llega por las dos). Esta última se usa en las prensas para obligar al operario a pulsar con las dos manos a la vez, lejos de la zona peligrosa. Las <b>válvulas reguladoras de caudal</b> controlan la velocidad del cilindro, y las <b>antirretorno</b> dejan pasar el aire en un solo sentido.</p>`,
      svg: B.rejilla("Válvulas neumáticas y su función", ["Válvula", "Uso", "Lógica"], [["3/2", "simple efecto", "—"], ["5/2", "doble efecto", "—"], ["Selectora", "dos mandos", "OR"], ["Simultaneidad", "dos manos", "AND"], ["Reguladora", "velocidad", "—"]], { t: "Válvulas neumáticas" }),
      video: { id: "-s1QxsIObLM", titulo: "Introducción a circuitos neumáticos", canal: "Abel Vila", vistas: 251557 },
    },
    {
      h: "Automatismos cableados con relés y contactores",
      html: `<p>Antes de los autómatas, la lógica de las máquinas se construía con <b>relés</b> y <b>contactores</b> cableados: es la <b>lógica cableada</b>, que todavía se usa en circuitos sencillos y de seguridad. Cada relé tiene una bobina y unos contactos que pueden ser <b>normalmente abiertos</b> (NA, se cierran al activar la bobina) o <b>normalmente cerrados</b> (NC, se abren).</p>
      <p>El circuito más importante es el de <b>marcha-paro con autorretención</b>: un pulsador de marcha (NA) activa la bobina de un contactor; uno de sus contactos auxiliares NA, conectado en paralelo con el pulsador, mantiene la bobina alimentada cuando se suelta. Un pulsador de paro (NC) en serie corta la alimentación y el contactor se desactiva. Es, en la práctica, un <b>biestable</b> eléctrico.</p>
      <p>Los esquemas eléctricos se dibujan en dos partes: el circuito de <b>potencia</b> (lo que alimenta el motor, con contactores y protecciones) y el de <b>mando</b> (pulsadores, bobinas y contactos auxiliares). En la lógica cableada, dos contactos en serie equivalen a una función AND, y en paralelo, a una OR. Los <b>enclavamientos</b> (un contacto NC de un contactor en serie con la bobina del otro) impiden que dos acciones incompatibles ocurran a la vez, como girar un motor en los dos sentidos. El inconveniente de la lógica cableada es que cualquier cambio exige recablear.</p>`,
      svg: B.comparar("Lógica cableada frente a lógica programada", ["Cableada", ["relés y contactores", "cambio = recablear", "sencilla y robusta", "seguridad"]], ["Programada", ["autómata (PLC)", "cambio = programa", "flexible", "muchas funciones"]]),
    },
    {
      h: "El autómata programable (PLC)",
      html: `<p>Un <b>autómata programable</b> o PLC (<i>Programmable Logic Controller</i>) es un ordenador industrial diseñado para controlar máquinas y procesos en tiempo real, en ambientes duros (polvo, vibraciones, ruido eléctrico). Tiene una CPU, memoria, una fuente de alimentación y módulos de <b>entradas</b> (donde se conectan pulsadores y sensores) y de <b>salidas</b> (donde se conectan relés, contactores, electroválvulas y lámparas). Puede ampliarse con módulos analógicos, de comunicaciones o de control de motores.</p>
      <p>El PLC trabaja en un <b>ciclo de scan</b> que se repite continuamente cada pocos milisegundos: lee el estado de todas las entradas, ejecuta el programa de principio a fin con esos valores y actualiza todas las salidas.</p>
      <p>Sus lenguajes están normalizados en la norma IEC 61131-3. Los más usados son:</p>
      <ul><li><b>Diagrama de contactos</b> o <i>ladder</i> (KOP): imita los esquemas de relés, con contactos y bobinas entre dos líneas verticales. Muy intuitivo para electricistas.</li>
      <li><b>Diagrama de funciones</b> (FUP): usa bloques lógicos parecidos a las puertas.</li>
      <li><b>Lista de instrucciones</b> y <b>texto estructurado</b>: más parecidos a un lenguaje de programación.</li>
      <li><b>GRAFCET</b> o SFC: para procesos secuenciales.</li></ul>
      <p>Además de las funciones lógicas, los PLC incluyen <b>temporizadores</b>, <b>contadores</b>, operaciones matemáticas y comunicaciones industriales. Las <b>pantallas táctiles</b> (HMI) permiten al operario vigilar y mandar el proceso, y los sistemas SCADA supervisan plantas enteras.</p>`,
      svg: B.ciclo("Ciclo de scan de un autómata programable", "PLC", ["Leer entradas", "Ejecutar programa", "Actualizar salidas"]),
      video: { id: "NPsepHRSCls", titulo: "Conceptos básicos del controlador lógico programable", canal: "Mentalidad De Ingeniería", vistas: 690331 },
    },
    {
      h: "GRAFCET: describir procesos secuenciales",
      html: `<p>Muchos procesos industriales son <b>secuenciales</b>: se suceden una serie de pasos en un orden fijo, y se pasa de uno a otro cuando se cumple una condición. El <b>GRAFCET</b> (gráfico funcional de control de etapas y transiciones) es un lenguaje gráfico normalizado para describirlos. Sus elementos son:</p>
      <ul><li><b>Etapas</b>: cuadrados numerados que representan un estado del sistema. La etapa inicial se dibuja con doble cuadrado. Cada etapa activa lleva asociadas unas <b>acciones</b> (avanzar un cilindro, encender un motor), escritas en un rectángulo a su derecha.</li>
      <li><b>Transiciones</b>: rayas horizontales entre etapas, con una <b>receptividad</b>: la condición que debe cumplirse para pasar a la siguiente (pulsar marcha, que un sensor detecte el final de carrera, que pase un tiempo).</li>
      <li><b>Arcos</b>: líneas que unen etapas y transiciones.</li></ul>
      <p>La regla de evolución es sencilla: una transición se supera cuando su etapa anterior está activa y su receptividad es verdadera; entonces se desactiva la etapa anterior y se activa la siguiente. El GRAFCET permite también secuencias alternativas (se elige un camino u otro) y simultáneas (varias ramas a la vez).</p>
      <p>Un ejemplo es una estampadora: etapa 0 (reposo); al pulsar marcha, etapa 1 (avanza el cilindro A que sujeta la pieza); al llegar al final, etapa 2 (avanza el cilindro B que estampa); al llegar, etapa 3 (retroceden los dos); al llegar a reposo, vuelve a la etapa 0. Del GRAFCET se pasa directamente al programa del PLC.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="GRAFCET con etapa inicial 0, etapas 1 y 2 con sus acciones y transiciones con sus condiciones">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="10" width="30" height="26" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="44" y="14" width="22" height="18" fill="none" stroke="var(--pen)" stroke-width="1.5"/>${B.tx(55, 28, "0", { fs: 12, maxW: 14, bold: true, color: "var(--pen)" })}
        <path d="M55 36 V 64 M55 92 V 120 M55 148 V 170 H 20 V 4 H 55 V 10" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <path d="M45 50 H 65 M45 106 H 65 M45 160 H 65" stroke="var(--ink)" stroke-width="3"/>
        ${B.tx(74, 54, "marcha", { fs: 10.5, maxW: 80, anchor: "start", color: "var(--red)", bold: true })}${B.tx(74, 110, "a1 (A fuera)", { fs: 10.5, maxW: 90, anchor: "start", color: "var(--red)", bold: true })}${B.tx(74, 164, "b1 (B fuera)", { fs: 10.5, maxW: 90, anchor: "start", color: "var(--red)", bold: true })}
        <rect x="40" y="64" width="30" height="28" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${B.tx(55, 82, "1", { fs: 12, maxW: 14, bold: true, color: "var(--pen)" })}
        <rect x="40" y="120" width="30" height="28" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${B.tx(55, 138, "2", { fs: 12, maxW: 14, bold: true, color: "var(--pen)" })}
        <path d="M70 78 H 150 M70 134 H 150" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="150" y="66" width="96" height="24" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(198, 82, "avanza A", { fs: 11, maxW: 88, bold: true, color: "var(--leaf)" })}
        <rect x="150" y="122" width="96" height="24" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(198, 138, "avanza B", { fs: 11, maxW: 88, bold: true, color: "var(--leaf)" })}
      </svg>`,
    },
    {
      h: "Robótica industrial, seguridad y sociedad",
      html: `<p>Un <b>robot industrial</b> es un manipulador programable con varios ejes. Se describe por sus <b>grados de libertad</b> (el número de movimientos independientes: un brazo típico tiene seis, como un brazo humano hasta la muñeca), su <b>espacio de trabajo</b> (el volumen que alcanza), su <b>carga útil</b>, su <b>precisión</b> y <b>repetibilidad</b> y su velocidad. En el extremo lleva una <b>herramienta</b> o efector final: pinza, ventosa, soldador, pistola de pintura. Los robots <b>colaborativos</b> (cobots) tienen sensores de fuerza que los detienen al tocar a una persona, por lo que pueden trabajar sin vallas.</p>
      <p>La automatización exige medidas de <b>seguridad</b>: paradas de emergencia (seta roja con enclavamiento, cableada directamente para que corte aunque falle el programa), vallas y barreras ópticas que detienen la máquina si alguien entra, mandos a dos manos, y diseño según las normas europeas de máquinas, que obligan al marcado CE.</p>
      <p>La automatización ha aumentado la productividad y la calidad, ha eliminado muchos trabajos peligrosos o repetitivos y ha permitido fabricar productos imposibles a mano. También plantea retos: la sustitución de empleos poco cualificados, la necesidad de formación continua, la dependencia tecnológica y el consumo de energía y materiales. La sociedad debe decidir cómo repartir sus beneficios, y los ingenieros, diseñar sistemas que pongan a las personas en el centro.</p>`,
      svg: B.cajas("Características de un robot industrial", [["Grados de libertad", "ejes: hasta 6"], ["Espacio de trabajo", "volumen alcanzable"], ["Carga útil", "kg que maneja"], ["Repetibilidad", "± décimas de mm"]], { t: "Robot industrial" }),
    },
  ],
  figura: {
    titulo: "Ideas clave del control y la automatización",
    items: [["Lazo cerrado", "M = G/(1+GH)", "mide, compara", "y corrige"], ["PID", "Kp · Ki · Kd", "rápido, preciso", "y estable"], ["Neumática", "F = p · S", "1 bar =", "0,1 N/mm²"], ["PLC", "leer · ejecutar", "· escribir", "ciclo de scan"]],
  },
  video: { id: "3rFGZQz6Vuo", titulo: "Curso básico de PLC desde cero: introducción", canal: "AUTOMATIZACION INDUSTRIAL", vistas: 623297 },
  quiz: [
    ["¿Qué elemento mide la variable controlada?", ["El actuador", "El sensor", "El comparador", "El proceso"], 1, "Convierte la magnitud en una señal."],
    ["El comparador obtiene…", ["la consigna", "la señal de error", "la perturbación", "la potencia"], 1, "e = referencia − medida."],
    ["Una tostadora con temporizador es un sistema en…", ["lazo cerrado", "lazo abierto", "PID", "realimentación positiva"], 1, "No mide cómo está el pan."],
    ["¿Qué ventaja tiene el lazo cerrado?", ["Es más barato", "Corrige las perturbaciones", "No necesita sensores", "Nunca oscila"], 1, "Mide la salida y corrige el error."],
    ["Dos bloques en serie de ganancias 4 y 5 equivalen a…", ["9", "20", "1,25", "0,8"], 1, "Se multiplican."],
    ["Lazo cerrado con G = 9 y H = 1. M =", ["9", "0,9", "10", "0,1"], 1, "M = 9 / (1 + 9) = 0,9."],
    ["La histéresis en un control todo-nada sirve para…", ["aumentar la precisión", "evitar conmutaciones continuas", "eliminar el sensor", "acelerar el sistema"], 1, "Separa el punto de encendido del de apagado."],
    ["¿Qué acción del PID elimina el error permanente?", ["Proporcional", "Integral", "Derivativa", "Ninguna"], 1, "Suma el error en el tiempo."],
    ["¿Qué acción del PID se anticipa y reduce oscilaciones?", ["Proporcional", "Integral", "Derivativa", "Todo-nada"], 2, "Actúa según la velocidad de cambio del error."],
    ["Un sensor inductivo detecta…", ["cualquier material", "objetos metálicos", "luz", "sonido"], 1, "Funciona sin contacto con metales."],
    ["Un encoder mide…", ["temperatura", "el giro de un eje", "presión", "humedad"], 1, "Cuenta pulsos por vuelta."],
    ["Un motor paso a paso es adecuado para…", ["posicionar con precisión contando pulsos", "mover grandes ventiladores", "medir distancias", "generar electricidad"], 0, "Gira un ángulo fijo por pulso."],
    ["La presión típica de una instalación neumática es…", ["0,5 bar", "6 bar", "200 bar", "1000 bar"], 1, "Entre 6 y 8 bar."],
    ["Un cilindro de 40 mm a 6 bar empuja teóricamente…", ["754 N", "240 N", "7540 N", "75 N"], 0, "S = 1257 mm²; F = 0,6 · 1257 ≈ 754 N."],
    ["Una válvula 5/2 sirve para gobernar…", ["un cilindro de simple efecto", "un cilindro de doble efecto", "un motor eléctrico", "un sensor"], 1, "Cinco vías y dos posiciones."],
    ["La válvula de simultaneidad equivale a la función…", ["OR", "AND", "NOT", "XOR"], 1, "Solo da salida si llega aire por las dos entradas."],
    ["En la autorretención, el contacto auxiliar del contactor va…", ["en serie con el paro", "en paralelo con el pulsador de marcha", "en la potencia", "en el motor"], 1, "Mantiene la bobina alimentada."],
    ["El ciclo de scan de un PLC es…", ["ejecutar, leer y escribir", "leer entradas, ejecutar y actualizar salidas", "solo ejecutar", "escribir y leer"], 1, "Se repite cada pocos milisegundos."],
    ["El lenguaje de PLC que imita los esquemas de relés es…", ["GRAFCET", "ladder (contactos)", "texto estructurado", "Python"], 1, "KOP o diagrama de escalera."],
    ["En GRAFCET, la condición para pasar de una etapa a otra se llama…", ["acción", "receptividad", "arco", "etapa inicial"], 1, "Va asociada a cada transición."],
  ],
  examen: [
    ["G₁ = 5 y G₂ = 4 en serie, con realimentación H = 0,2. M =", ["20", "4", "0,8", "20/5"], 1, "G = 20; M = 20 / (1 + 4) = 4."],
    ["Con x = 10 y la salida del caso anterior, el error e = x − H·y vale…", ["2", "8", "0", "10"], 0, "y = 40; e = 10 − 0,2 · 40 = 2."],
    ["Un termostato con consigna 21 °C e histéresis de ±1 °C enciende la calefacción a…", ["21 °C", "20 °C", "22 °C", "19 °C"], 1, "Por debajo de 20 °C enciende; por encima de 22 °C apaga."],
    ["Cilindro de doble efecto D = 50 mm, d = 20 mm, 6 bar. Fuerza de retroceso:", ["990 N", "1178 N", "188 N", "1366 N"], 0, "S′ = π(2500 − 400)/4 = 1649 mm²; F = 0,6 · 1649 ≈ 990 N."],
    ["Prensa hidráulica: émbolo pequeño de 2 cm² con 100 N y grande de 200 cm². Fuerza obtenida:", ["10 000 N", "1 N", "200 N", "1000 N"], 0, "F₂ = 100 · 200 / 2 = 10 000 N."],
    ["Un motor paso a paso de 1,8° por paso recibe 400 pulsos. Gira…", ["2 vueltas", "720 vueltas", "1 vuelta", "4 vueltas"], 0, "200 pasos por vuelta; 400 / 200 = 2 vueltas."],
    ["Para que una prensa solo funcione si se pulsan dos botones a la vez se usa la lógica…", ["OR", "AND", "NOT", "biestable"], 1, "Mando a dos manos."],
    ["En un GRAFCET, ¿cuándo se supera una transición?", ["Siempre", "Cuando su etapa anterior está activa y la receptividad es verdadera", "Cuando la siguiente etapa está activa", "Al encender el PLC"], 1, "Es la regla de evolución."],
  ],
  feynman: ["Qué diferencia hay entre lazo abierto y lazo cerrado, con ejemplos", "Para qué sirve la realimentación y cómo se calcula G/(1 + GH)", "Qué hace cada acción de un PID", "Cómo funciona un cilindro neumático y cómo se calcula su fuerza", "Cómo funciona el circuito de marcha-paro con autorretención", "Qué es un GRAFCET y cómo evoluciona"],
  mapa: ["CONTROL Y AUTOMATIZACIÓN", [["Control", "lazo abierto/cerrado · PID"], ["Sensores y actuadores", "inductivo · encoder · servo"], ["Neumática", "F = p·S · válvulas 3/2 y 5/2"], ["Automatismos", "relés · PLC · GRAFCET"]]],
  tarjetas: [
    ["Elementos del control", "Sensor, comparador, controlador, actuador y proceso."],
    ["Lazo abierto y cerrado", "Abierto: no mide la salida. Cerrado: mide, compara y corrige."],
    ["Diagramas de bloques", "Serie: G₁·G₂. Paralelo: G₁ + G₂. Lazo: G/(1 + GH)."],
    ["Histéresis", "Separación entre el punto de encendido y el de apagado de un todo-nada."],
    ["PID", "u = Kp·e + Ki·∫e + Kd·de/dt."],
    ["Sensores de presencia", "Final de carrera, inductivo, capacitivo, magnético y fotoeléctrico."],
    ["Servo y paso a paso", "Servo: ángulo con control interno. Paso a paso: un ángulo fijo por pulso."],
    ["Fuerza de un cilindro", "F = p·S; retroceso con S′ = π(D² − d²)/4."],
    ["Válvulas 3/2 y 5/2", "3/2: simple efecto. 5/2: doble efecto."],
    ["Autorretención", "Contacto auxiliar NA en paralelo con el pulsador de marcha."],
    ["Ciclo de scan", "Leer entradas, ejecutar programa, actualizar salidas."],
    ["GRAFCET", "Etapas con acciones y transiciones con receptividades."],
  ],
  ejemplos: [
    ["Un sistema tiene un controlador de ganancia 50, un actuador de ganancia 2 y un sensor con H = 0,1. Calcula la función de transferencia y la salida si la referencia es 5.", ["Cadena directa: G = 50 · 2 = 100.", "M = G / (1 + G·H) = 100 / (1 + 10) = 9,09.", "y = 9,09 · 5 = 45,5 (cercano a 1/H · x = 50)."], "M ≈ 9,09; y ≈ 45,5."],
    ["Calcula la fuerza de avance y de retroceso de un cilindro de doble efecto de 63 mm de émbolo y 20 mm de vástago a 6 bar, con un rendimiento del 90 %.", ["Avance: S = π · 63² / 4 = 3117 mm². F = 0,6 · 3117 · 0,9 = 1683 N.", "Retroceso: S′ = π · (63² − 20²) / 4 = 2803 mm².", "F′ = 0,6 · 2803 · 0,9 = 1514 N."], "Avance ≈ 1683 N; retroceso ≈ 1514 N."],
    ["Un termostato todo-nada controla un horno con consigna 200 °C e histéresis total de 10 °C. Describe su funcionamiento.", ["La resistencia se enciende cuando la temperatura baja de 195 °C.", "Permanece encendida hasta superar 205 °C, momento en que se apaga.", "La temperatura oscila entre 195 y 205 °C; sin histéresis, el relé conmutaría continuamente y se desgastaría."], "La temperatura oscila entre 195 y 205 °C."],
    ["Una prensa hidráulica tiene un émbolo pequeño de 1 cm de diámetro y uno grande de 10 cm. ¿Qué fuerza hay que aplicar para levantar un coche de 1500 kg? (g = 9,8)", ["Peso: F₂ = 1500 · 9,8 = 14 700 N.", "La relación de superficies es (10/1)² = 100.", "F₁ = 14 700 / 100 = 147 N."], "F₁ = 147 N (el émbolo pequeño recorre 100 veces más)."],
    ["Diseña el automatismo de un motor con un pulsador de marcha (M), uno de paro (P) y una parada de emergencia (E), con autorretención. Escribe la ecuación lógica de la bobina K.", ["La bobina se activa con M o con su propio contacto K (autorretención): (M + K).", "El paro y la emergencia son NC: deben estar sin pulsar, P̄ y Ē, en serie.", "K = (M + K) · P̄ · Ē."], "K = (M + K) · P̄ · Ē: en ladder, M y K en paralelo, en serie con P y E (contactos NC)."],
    ["Escribe el GRAFCET de un taladro automático: al pulsar marcha baja el taladro (motor encendido) hasta un final de carrera inferior, espera 2 s y sube hasta el final de carrera superior.", ["Etapa 0: reposo. Transición: marcha.", "Etapa 1: motor + bajar. Transición: final de carrera inferior. Etapa 2: motor + temporizador de 2 s. Transición: fin del tiempo.", "Etapa 3: motor + subir. Transición: final de carrera superior → vuelve a la etapa 0."], "Cuatro etapas (0-3) con transiciones marcha, fc inferior, t = 2 s y fc superior."],
  ],
  errores: [
    "Confundir lazo abierto con «sin control»: el lazo abierto también controla, pero no comprueba el resultado.",
    "Escribir la función de lazo cerrado como G/(1 − GH): con realimentación negativa es 1 + GH.",
    "Olvidar restar el vástago en la fuerza de retroceso de un cilindro.",
    "Usar bar directamente con mm² sin pasar a N/mm² (1 bar = 0,1 N/mm²).",
    "Conectar un motor o un relé directamente a la salida de un microcontrolador sin etapa de potencia.",
    "Programar la parada de emergencia solo en el PLC: debe cortar físicamente la alimentación.",
  ],
  ejercicios: {
    b: [
      ["Identifica proceso, sensor y actuador en el control de temperatura de un acuario.", "Proceso: el agua del acuario. Sensor: termómetro o sonda NTC. Actuador: el calentador."],
      ["Clasifica en lazo abierto o cerrado: lavadora con programa fijo, cisterna con boya, alumbrado con reloj, control de crucero.", "Abierto: lavadora y alumbrado con reloj. Cerrado: cisterna con boya y control de crucero."],
      ["Calcula la ganancia de tres bloques en serie de 2, 3 y 4.", "G = 2 · 3 · 4 = 24."],
      ["Calcula M para G = 4 y H = 1.", "M = 4 / 5 = 0,8."],
      ["Explica qué es una perturbación con un ejemplo.", "Un cambio externo no deseado que altera la salida, como una cuesta que frena un coche con control de crucero."],
      ["¿Qué diferencia hay entre un sensor digital y uno analógico?", "El digital solo da dos estados (sí/no); el analógico da un valor proporcional a la magnitud."],
      ["Nombra tres sensores que detecten presencia sin contacto.", "Inductivo, capacitivo y fotoeléctrico (también magnético y ultrasonidos)."],
      ["¿Qué diferencia hay entre un cilindro de simple y de doble efecto?", "El de simple efecto avanza con aire y vuelve con un muelle; el de doble efecto usa aire en los dos sentidos."],
      ["Pasa 6 bar a N/mm² y a pascales.", "0,6 N/mm² = 600 000 Pa."],
      ["¿Qué significa una válvula 3/2?", "Tres vías (orificios) y dos posiciones."],
      ["¿Qué es un contacto normalmente abierto?", "Un contacto que está abierto en reposo y se cierra al activar la bobina o el pulsador."],
      ["Nombra las tres fases del ciclo de scan de un PLC.", "Lectura de entradas, ejecución del programa y actualización de salidas."],
    ],
    m: [
      ["Dibuja (describe) el diagrama de bloques del control de nivel de un depósito con boya y válvula.", "Referencia (nivel deseado) → comparador → controlador (mecanismo de la boya) → actuador (válvula) → proceso (depósito) → nivel; la boya mide el nivel y lo realimenta al comparador."],
      ["Un sistema tiene G = 200 y H = 0,05. Calcula M y compárala con 1/H.", "M = 200 / (1 + 10) = 18,2. 1/H = 20: muy parecido, porque G·H = 10 es grande."],
      ["En el sistema anterior, ¿cuánto cambia M si G baja a 100 por desgaste?", "M = 100 / (1 + 5) = 16,7. G se ha reducido a la mitad, pero M solo baja un 8 %: el lazo cerrado es robusto."],
      ["Explica por qué un control proporcional puro deja un error permanente en un horno.", "Para mantener la resistencia encendida hace falta una acción u = Kp·e distinta de cero, así que debe quedar algo de error. La acción integral lo elimina."],
      ["Calcula la fuerza de avance de un cilindro de 32 mm a 7 bar.", "S = π · 32²/4 = 804 mm². F = 0,7 · 804 = 563 N."],
      ["¿Qué diámetro de cilindro necesitas para ejercer 2000 N a 6 bar (sin pérdidas)?", "S = 2000 / 0,6 = 3333 mm². D = √(4 · 3333 / π) = 65 mm → cilindro comercial de 80 mm (o 63 mm si se sube la presión)."],
      ["Calcula el volumen de aire comprimido que consume un cilindro de simple efecto de 40 mm y 100 mm de carrera en cada avance.", "V = π · 40²/4 · 100 = 125 664 mm³ ≈ 126 cm³ de aire a la presión de trabajo."],
      ["Un motor paso a paso de 200 pasos por vuelta mueve un husillo de 8 mm de paso. ¿Cuántos pulsos hacen falta para desplazar 50 mm?", "50 / 8 = 6,25 vueltas. 6,25 · 200 = 1250 pulsos (resolución: 0,04 mm por paso)."],
      ["Una puerta de garaje debe abrirse si se pulsa el mando o el pulsador de pared. ¿Qué función lógica es y qué válvula neumática la haría?", "Una OR; en neumática, una válvula selectora."],
      ["Escribe la ecuación de un motor que gira a derechas (K1) con enclavamiento respecto a izquierdas (K2), con marcha M1 y paro P.", "K1 = (M1 + K1) · P̄ · K̄2."],
      ["Explica por qué la seta de emergencia debe ser un contacto normalmente cerrado.", "Si se rompe un cable, el circuito se abre y la máquina se para: el fallo deja el sistema en estado seguro. Con un NA, un cable roto impediría la parada."],
      ["Un sensor de ultrasonidos mide un eco de 5,8 ms. ¿A qué distancia está el objeto? (v sonido = 343 m/s)", "d = v · t / 2 = 343 · 0,0058 / 2 = 0,99 m."],
      ["Describe el GRAFCET de un semáforo de peatones que, al pulsar el botón, pasa a ámbar 3 s, a rojo para coches 15 s y vuelve a verde.", "Etapa 0: verde coches. Transición: pulsador. Etapa 1: ámbar; transición t = 3 s. Etapa 2: rojo coches y verde peatones; transición t = 15 s → etapa 0."],
    ],
    a: [
      ["Simplifica un diagrama con G₁ = 10 en serie con un lazo interno (G₂ = 5, H₂ = 0,2) y todo dentro de un lazo externo con H₁ = 0,1.", "Lazo interno: 5 / (1 + 1) = 2,5. Cadena directa: 10 · 2,5 = 25. Lazo externo: M = 25 / (1 + 2,5) = 7,14."],
      ["Un sistema tiene G = K · 2 y H = 1. ¿Qué valor de K hace que M = 0,95?", "M = 2K / (1 + 2K) = 0,95 → 2K = 0,95 + 1,9K → 0,1K = 0,95 → K = 9,5."],
      ["Un cilindro de doble efecto (D = 50 mm, d = 20 mm, carrera 200 mm) hace 10 ciclos por minuto a 6 bar. Calcula el consumo de aire a la presión de trabajo y en aire libre (multiplica por (p + 1)/1, con p en bar).", "V avance = 1963 · 200 = 392 600 mm³; V retroceso = 1649 · 200 = 329 800 mm³. Por ciclo: 0,722 L; por minuto: 7,22 L a 6 bar. En aire libre: 7,22 · 7 = 50,5 L/min."],
      ["Diseña el circuito neumático de una prensa que solo baja si el operario pulsa dos pulsadores a la vez y sube al soltar cualquiera de ellos.", "Dos válvulas 3/2 de pulsador con retorno por muelle conectadas a una válvula de simultaneidad (AND). Su salida pilota una válvula 5/2 con retorno por muelle que gobierna un cilindro de doble efecto: con señal baja; sin señal (al soltar uno), el muelle conmuta la 5/2 y el cilindro sube."],
      ["Programa en lógica (ecuaciones) un depósito con sensor de nivel bajo (B) y alto (A): la bomba K arranca cuando el nivel baja de B y para cuando llega a A.", "Es un todo-nada con histéresis: K = (B̄ + K) · Ā. Arranca con B̄ (nivel bajo), se mantiene por autorretención y para al activarse A."],
      ["Un robot con un brazo de dos segmentos de 0,5 m y 0,3 m gira sus dos articulaciones en el plano. ¿Cuál es su espacio de trabajo?", "Una corona circular de radio máximo 0,5 + 0,3 = 0,8 m y radio mínimo 0,5 − 0,3 = 0,2 m alrededor de la base (si las articulaciones giran 360°)."],
      ["Explica qué pasaría con un PID mal ajustado con K_p muy alta y sin acción derivativa en un dron que mantiene la altura.", "Reaccionaría con fuerza excesiva: se pasaría de la altura deseada, corregiría bruscamente hacia el otro lado y oscilaría cada vez más (inestabilidad). La acción derivativa amortiguaría esas oscilaciones."],
      ["Una cinta transportadora tiene un encoder de 600 pulsos por vuelta en un rodillo de 100 mm de diámetro. ¿Qué distancia corresponde a cada pulso? Si se cuentan 3000 pulsos por segundo, ¿a qué velocidad va la cinta?", "Perímetro = π · 100 = 314,2 mm; por pulso, 0,52 mm. 3000 pulsos/s = 5 vueltas/s → v = 5 · 314,2 = 1571 mm/s ≈ 1,57 m/s."],
      ["Compara para una línea de embotellado una solución con lógica cableada y otra con PLC según coste, flexibilidad y mantenimiento.", "Cableada: barata en sistemas muy simples, robusta, pero cualquier cambio exige recablear y el diagnóstico es lento. PLC: más cara al inicio, pero los cambios se hacen por programa, permite diagnóstico, temporizadores, contadores, comunicaciones y supervisión. Para una línea con varias etapas, el PLC es claramente mejor."],
      ["Debate: propone tres medidas para que la automatización de una fábrica beneficie también a sus trabajadores.", "Formación para que los operarios pasen a tareas de programación, mantenimiento y supervisión; usar cobots en tareas peligrosas o repetitivas manteniendo el empleo; y repartir parte de la productividad ganada en reducción de jornada o mejoras salariales, con participación de los trabajadores en las decisiones."],
    ],
  },
  glosario: [
    ["Sistema de control", "Conjunto de elementos que hace que una magnitud siga una consigna."],
    ["Consigna", "Valor deseado de la variable controlada."],
    ["Realimentación", "Retorno de la medida de la salida al comparador."],
    ["Señal de error", "Diferencia entre la consigna y la medida."],
    ["Perturbación", "Influencia externa no deseada sobre el proceso."],
    ["Función de transferencia", "Relación entre la salida y la entrada de un bloque."],
    ["Histéresis", "Diferencia entre los puntos de encendido y apagado de un control todo-nada."],
    ["PID", "Controlador con acciones proporcional, integral y derivativa."],
    ["Transductor", "Dispositivo que convierte una magnitud física en una señal eléctrica."],
    ["Encoder", "Sensor que mide el giro de un eje mediante pulsos."],
    ["Servomotor", "Motor con control de posición en lazo cerrado."],
    ["Unidad de mantenimiento", "Filtro, regulador y lubricador del aire comprimido."],
    ["Válvula distribuidora", "Válvula que dirige el aire o el aceite a los actuadores."],
    ["Principio de Pascal", "La presión se transmite por igual en un fluido: F₁/S₁ = F₂/S₂."],
    ["Contactor", "Interruptor electromagnético para grandes potencias."],
    ["Autorretención", "Conexión que mantiene activada una bobina tras soltar el pulsador."],
    ["Autómata programable", "Ordenador industrial que controla máquinas en tiempo real."],
    ["GRAFCET", "Lenguaje gráfico de etapas y transiciones para procesos secuenciales."],
  ],
  situacion: {
    titulo: "Un invernadero que se cuida solo",
    reto: "Diseñad y construid la maqueta de un invernadero automático que mantenga la temperatura y la humedad del suelo dentro de unos márgenes, sin intervención humana, y que avise si algo falla.",
    pasos: [
      "Definid las variables controladas, sus consignas y márgenes, y dibujad los diagramas de bloques de cada lazo.",
      "Elegid sensores (temperatura, humedad del suelo, luz) y actuadores (ventilador, bomba, lámpara) con sus etapas de potencia.",
      "Programad un control todo-nada con histéresis y comparadlo con un control proporcional para el ventilador mediante PWM.",
      "Describid con un GRAFCET la secuencia de riego (comprobar humedad, regar, esperar, volver a medir).",
      "Construid la maqueta, registrad los datos durante un día y representad la evolución de las variables.",
      "Añadid una parada de emergencia y una alarma por fallo del sensor.",
    ],
    producto: "La maqueta funcionando, los diagramas de bloques, el GRAFCET, el programa y una gráfica con los datos registrados.",
    evaluacion: [
      "Los diagramas de bloques identifican correctamente sensor, controlador, actuador y proceso.",
      "El control mantiene las variables en los márgenes fijados y se justifica la histéresis elegida.",
      "El GRAFCET describe la secuencia de riego sin ambigüedades.",
      "Se analizan los datos y se proponen mejoras del control.",
    ],
  },
  familias: [
    "Buscad en casa sistemas en lazo abierto (microondas, tostadora) y en lazo cerrado (frigorífico, calefacción) y comentad la diferencia.",
    "Observad el termostato de la calefacción: ¿cuántos grados baja antes de volver a encender?",
    "Si tenéis una cisterna con boya, abrid la tapa y mirad cómo se cierra el grifo al llenarse: es un control realimentado.",
    "Comentad qué trabajos de vuestro entorno se han automatizado y qué ventajas e inconvenientes ha traído.",
  ],
  saberes: "Sistemas automáticos: sistemas de control en lazo abierto y cerrado, diagramas de bloques y función de transferencia, tipos de control (todo-nada, PID), sensores y actuadores, neumática e hidráulica, automatismos con relés y autómatas programables, GRAFCET, robótica industrial y su impacto social (RD 243/2022, Tecnología e Ingeniería I, bloque F).",
  ideas: [
    "Programar un control todo-nada con histéresis en Arduino y dibujar la temperatura con el trazador serie.",
    "Usar un simulador de neumática gratuito para montar circuitos con válvulas 3/2, 5/2 y de simultaneidad.",
    "Programar un PLC educativo o un simulador de ladder con un circuito de marcha-paro.",
    "Ajustar a mano un PID de un robot balancín o de un seguidor de líneas y observar el efecto de cada constante.",
  ],
  fuentes: [
    { t: "Sistema de control, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_de_control" },
    { t: "GRAFCET, Wikipedia en español", url: "https://es.wikipedia.org/wiki/GRAFCET" },
  ],
});
