// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Instalaciones en viviendas",
  minutos: 40,
  objetivos: ["Identificar las instalaciones de una vivienda y sus elementos", "Explicar la instalación eléctrica y sus dispositivos de seguridad", "Proponer medidas de ahorro energético y conocer la vivienda domótica"],
  claves: ["cuadro general", "interruptor diferencial", "toma de tierra", "agua sanitaria", "calefacción", "domótica"],
  pregunta: {
    texto: "Se te cae el secador en el lavabo lleno de agua y, al instante, se va la luz de toda la casa. ¿Ha sido mala suerte o te ha salvado algo?",
    respuesta: "Te ha salvado el <mark>interruptor diferencial</mark> del cuadro eléctrico. Detecta que la corriente se está «escapando» (por el agua o por una persona) y <b>corta en milésimas de segundo</b>, antes de que la descarga sea peligrosa. Es el elemento de seguridad más importante de la instalación eléctrica.",
  },
  bloques: [
    {
      html: `<h3>Las instalaciones de una casa</h3><p>Una vivienda necesita varias <b>instalaciones</b> para ser cómoda y segura: <b>electricidad</b>, <b>agua</b> (fría y caliente) y <b>saneamiento</b> (desagües), <b>calefacción</b> y climatización, <b>gas</b> (en algunas casas), <b>telecomunicaciones</b> (teléfono, fibra, antena) y <b>ventilación</b>. Todas deben cumplir <mark>normas técnicas</mark>, como el Reglamento Electrotécnico de Baja Tensión (REBT) o el Código Técnico de la Edificación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Casa en corte con las instalaciones de electricidad, agua, desagüe y calefacción">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 70 L 130 20 L 230 70 V 160 H 30 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M30 112 H 230" stroke="var(--ink)" stroke-width="2"/>
        <path d="M44 154 V 80 H 210" stroke="var(--sun)" stroke-width="3" fill="none"/>
        <path d="M60 160 V 124 H 200 V 90" stroke="var(--water)" stroke-width="3" fill="none"/>
        <path d="M180 160 V 130 H 216" stroke="var(--muted)" stroke-width="5" fill="none"/>
        <rect x="94" y="138" width="30" height="16" fill="var(--red)" opacity=".7"/>
        <g ${F} font-size="10" font-weight="700"><text x="60" y="76" fill="var(--sun)">electricidad</text><text x="100" y="120" fill="var(--water)">agua</text><text x="184" y="150" fill="var(--muted)">desagüe</text><text x="127" y="150" font-size="9" fill="var(--red)">calefacción</text></g>
      </svg>`,
    },
    {
      html: `<h3>La instalación eléctrica</h3><p>La electricidad llega de la red a <b>230 V</b> en corriente alterna. Pasa por la <b>caja general de protección</b>, el <b>contador</b> y llega al <mark>cuadro general de mando y protección</mark>, de donde salen los <b>circuitos</b> independientes: alumbrado, enchufes de uso general, cocina y horno, lavadora y baño… Cada circuito tiene cables de un grosor adecuado: <b>fase</b> (marrón, negro o gris), <b>neutro</b> (azul) y <b>tierra</b> (amarillo y verde).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido de la electricidad: red, caja de protección, contador, cuadro y circuitos">
        <defs>${flecha("iv1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["red", "var(--muted)"], ["CGP", "var(--ink)"], ["contador", "var(--pen)"], ["cuadro", "var(--red)"]].map(([t, c], i) => `<rect x="${12 + i * 62}" y="30" width="52" height="30" rx="6" fill="${c}"/><text x="${38 + i * 62}" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text>${i < 3 ? `<path d="M${64 + i * 62} 45 H ${72 + i * 62}" stroke="var(--muted)" stroke-width="2" marker-end="url(#iv1)"/>` : ""}`).join("")}
        ${["alumbrado", "enchufes", "cocina", "lavadora", "baño"].map((t, i) => `<path d="M212 60 V ${80 + i * 18} H 150" stroke="var(--sun)" stroke-width="2" fill="none"/><text x="144" y="${84 + i * 18}" text-anchor="end" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <g ${F} font-size="9" font-weight="700"><rect x="14" y="120" width="10" height="10" fill="#8b5a2b"/><text x="28" y="129" fill="var(--ink)">fase</text><rect x="14" y="136" width="10" height="10" fill="var(--pen)"/><text x="28" y="145" fill="var(--ink)">neutro</text><rect x="14" y="152" width="10" height="10" fill="var(--sun)" stroke="var(--leaf)" stroke-width="3"/><text x="28" y="161" fill="var(--ink)">tierra</text></g>
      </svg>`,
    },
    {
      html: `<h3>Seguridad eléctrica</h3><p>El cuadro tiene tres protecciones clave. El <b>interruptor general (IGA)</b> corta toda la casa si se consume más potencia de la contratada. Los <b>pequeños interruptores automáticos (PIA)</b>, uno por circuito, saltan ante <mark>sobrecargas y cortocircuitos</mark>. El <b>interruptor diferencial</b> detecta <mark>fugas de corriente</mark> a tierra y protege a las personas de descargas. La <b>toma de tierra</b> conduce las fugas al suelo. Nunca se manipula nada con el circuito conectado ni con las manos mojadas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuadro eléctrico con interruptor general, diferencial y cinco interruptores automáticos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="30" width="220" height="110" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M28 70 H 232" stroke="var(--line)" stroke-width="2"/>
        <rect x="34" y="78" width="28" height="48" rx="3" fill="var(--red)"/><rect x="68" y="78" width="40" height="48" rx="3" fill="var(--sun)"/>
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="${116 + i * 22}" y="78" width="18" height="48" rx="3" fill="var(--pen)"/><rect x="${121 + i * 22}" y="88" width="8" height="14" fill="#fff"/>`).join("")}
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="48" y="156" fill="var(--red)">IGA</text><text x="88" y="156" fill="var(--sun)">diferencial</text><text x="176" y="156" fill="var(--pen)">PIA (uno por circuito)</text><text x="130" y="56" fill="var(--muted)">cuadro general de mando y protección</text></g>
      </svg>`,
    },
    {
      html: `<h3>Agua, saneamiento, calefacción y gas</h3><p>El <b>agua fría</b> llega de la red con presión, pasa por la <b>llave de paso</b> y el contador y se reparte a los grifos. El <b>agua caliente sanitaria (ACS)</b> se produce en un calentador, una caldera, un termo eléctrico o una <mark>bomba de calor</mark>. El <b>saneamiento</b> recoge las aguas sucias por gravedad; los <b>sifones</b> evitan que suban los malos olores. La <b>calefacción</b> puede ser por radiadores, suelo radiante o bomba de calor (aerotermia), y el gas exige ventilación y revisiones periódicas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lavabo con sifón en forma de U que retiene agua y bloquea los olores">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M40 40 H 160 Q 160 80 120 84 H 80 Q 40 80 40 40 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M100 84 V 110 Q 100 134 120 134 Q 140 134 140 110 V 100 H 230" fill="none" stroke="var(--muted)" stroke-width="10"/>
        <path d="M100 116 Q 100 134 120 134 Q 140 134 140 116" fill="none" stroke="var(--water)" stroke-width="6"/>
        <path d="M150 30 V 20 H 130 V 36" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M130 40 V 54" stroke="var(--water)" stroke-width="3" stroke-dasharray="3 3"/>
        <g ${F} font-size="11" font-weight="700"><text x="150" y="150" fill="var(--water)">sifón: agua que tapa</text><text x="150" y="164" fill="var(--water)">los olores</text><text x="180" y="94" fill="var(--muted)">desagüe</text></g>
      </svg>`,
    },
    {
      html: `<h3>Ahorro energético y domótica</h3><p>Una casa eficiente gasta menos y contamina menos: buen <b>aislamiento</b> y ventanas de doble vidrio, bombillas <b>LED</b>, electrodomésticos con <mark>etiqueta energética</mark> A, termostatos a 19-21 °C en invierno, placas solares en el tejado. La <b>domótica</b> automatiza la vivienda: persianas que bajan solas con el sol, luces con sensor de presencia, calefacción que se enciende desde el móvil, alarmas y detectores de humo o de fugas de agua. Es un <b>sistema de control</b> aplicado a la casa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etiqueta energética con barras de colores de la A a la G">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${["A", "B", "C", "D", "E", "F", "G"].map((l, i) => `<path d="M30 ${20 + i * 20} H ${70 + i * 18} L ${80 + i * 18} ${28 + i * 20} L ${70 + i * 18} ${36 + i * 20} H 30 Z" fill="${["#1a9850", "#66bd63", "#a6d96a", "#fee08b", "#fdae61", "#f46d43", "#d73027"][i]}"/><text x="38" y="${33 + i * 20}" font-size="12" font-weight="700" fill="#fff" ${F}>${l}</text>`).join("")}
        <path d="M200 24 L 186 36 H 214 Z" fill="var(--ink)"/><rect x="186" y="36" width="28" height="12" fill="var(--ink)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="200" y="70" fill="var(--leaf)">A = gasta</text><text x="200" y="86" fill="var(--leaf)">menos</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las tres protecciones del cuadro eléctrico",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Interruptor general, interruptores automáticos y diferencial: de qué protegen">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["IGA", "interruptor general", "corta toda la casa", "si hay exceso de consumo", "var(--red)"], ["PIA", "uno por circuito", "salta con sobrecargas", "y cortocircuitos", "var(--pen)"], ["Diferencial", "protege a las personas", "detecta fugas de corriente", "y corta al instante", "var(--sun)"]]
        .map(([n, a, b, c1, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="62" text-anchor="middle" font-size="24" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="140" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="160" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${c1}</text>`).join("")}
    </svg>`,
  },
  video: { id: "VwOkqM4j-ts", titulo: "Tablero eléctrico domiciliario bien explicado", canal: "Mundo Electrico 14", vistas: 2780026, megusta: 0, busqueda: "instalación eléctrica vivienda cuadro eléctrico diferencial" },
  quiz: [
    { q: "¿A qué tensión llega la electricidad a las viviendas en España?", o: ["12 V", "230 V", "1 000 V"], a: 1, e: "La red doméstica es de 230 V en corriente alterna." },
    { q: "¿De qué color es el cable de tierra?", o: ["Azul", "Amarillo y verde", "Marrón"], a: 1, e: "Fase: marrón, negro o gris; neutro: azul; tierra: amarillo y verde." },
    { q: "¿Qué dispositivo protege a las personas de las descargas?", o: ["El PIA", "El interruptor diferencial", "El contador"], a: 1, e: "Detecta fugas de corriente y corta en milisegundos." },
    { q: "¿Para qué sirve el sifón de un lavabo?", o: ["Para aumentar la presión", "Para que no suban los malos olores del desagüe", "Para calentar el agua"], a: 1, e: "El agua que queda en la curva hace de tapón para los gases." },
    { q: "Las persianas que bajan solas cuando da el sol son un ejemplo de…", o: ["domótica", "saneamiento", "toma de tierra"], a: 0, e: "La domótica automatiza la vivienda con sensores, controladores y actuadores." },
  ],
  examen: [
    { q: "Un PIA salta cuando…", o: ["hay una fuga a tierra", "hay una sobrecarga o un cortocircuito en su circuito", "se acaba el contrato"], a: 1, e: "Protege la instalación (los cables) de calentarse en exceso." },
    { q: "¿Qué significa ACS?", o: ["Agua caliente sanitaria", "Aire de climatización solar", "Alta corriente segura"], a: 0, e: "Es el agua caliente de grifos y duchas." },
    { q: "¿Qué electrodoméstico gasta menos energía?", o: ["Clase A", "Clase D", "Clase G"], a: 0, e: "En la etiqueta energética, A es la más eficiente y G la menos." },
  ],
  feynman: ["Qué instalaciones tiene una vivienda", "El recorrido de la electricidad desde la red hasta un enchufe", "La diferencia entre IGA, PIA y diferencial", "Cómo funciona un sifón", "Cinco medidas de ahorro energético en casa"],
  mapa: mapa("INSTALACIONES", "var(--eso)", [
    ["Eléctrica", "230 V · cuadro · circuitos", "var(--sun)"],
    ["Seguridad", "IGA · PIA · diferencial · tierra", "var(--red)"],
    ["Agua y calor", "ACS · saneamiento · calefacción", "var(--water)"],
    ["Eficiencia", "etiqueta A · domótica", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Función del interruptor diferencial", "Detectar fugas de corriente a tierra y cortar para proteger a las personas."],
    ["Función de los PIA", "Proteger cada circuito frente a sobrecargas y cortocircuitos."],
    ["Colores de los cables", "Fase: marrón, negro o gris · neutro: azul · tierra: amarillo y verde."],
    ["¿Qué es la domótica?", "La automatización y el control de la vivienda con sensores, controladores y actuadores."],
    ["¿Para qué sirve un sifón?", "Para que el agua retenida impida que suban los olores del desagüe."],
  ],
  familias: ["Abrid juntos el cuadro eléctrico de casa (sin tocar nada) e identificad el IGA, el diferencial y los PIA.", "Revisad la etiqueta energética de la nevera o la lavadora y comentad qué significa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Instalaciones en viviendas: eléctrica, agua, saneamiento, calefacción, gas y telecomunicaciones, ahorro energético y domótica (RD 217/2022, Tecnología 4º).",
    ideas: ["Montar en panel un circuito de alumbrado con interruptor y conmutada a baja tensión.", "Simular la factura de la luz de una familia y proponer ahorros.", "Maqueta domótica con Arduino: luz con sensor de presencia y persiana con servo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Reglamento Electrotécnico para Baja Tensión (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular el consumo y el coste de la energía de una vivienda", "Interpretar la factura eléctrica y la etiqueta de eficiencia energética de un edificio"],
  tras: {
    "La instalación eléctrica": [
      { html: `<h3>Circuitos de una vivienda y potencia contratada</h3><p>La instalación de una casa se divide en <b>circuitos independientes</b>, cada uno con su interruptor magnetotérmico (PIA) y un cable de grosor adecuado: el de alumbrado usa cable de 1,5 mm² y un PIA de 10 A; el de enchufes de uso general, 2,5 mm² y 16 A; y los de cocina-horno y lavadora-lavavajillas, cables más gruesos (4-6 mm²) porque consumen mucho. Cuanta más corriente, <mark>más grueso debe ser el cable</mark>, para que no se caliente. La <b>potencia contratada</b> (por ejemplo, 4,6 kW) es la máxima que podemos usar a la vez: si encendemos horno, lavadora y secador juntos y la superamos, salta el <b>ICP</b> o el limitador del contador. Para elegirla, se suman las potencias de los aparatos que solemos usar a la vez.</p>` },
    ],
    "Seguridad eléctrica": [
      { html: `<h3>Qué hacer ante un accidente eléctrico</h3><p>La corriente es peligrosa a partir de unos 30 mA que atraviesen el cuerpo: puede provocar quemaduras, contracciones musculares que impiden soltar el cable y paradas cardiacas. Por eso el interruptor diferencial corta en cuanto detecta una fuga de esa magnitud. Normas básicas: no manipular aparatos con las manos mojadas ni en el baño; no sobrecargar enchufes con ladrones; desenchufar tirando de la clavija, no del cable; tapar los enchufes si hay niños. Si alguien se queda pegado a un cable, <mark>no hay que tocarle</mark>: primero se corta la corriente en el cuadro general o se le separa con un objeto aislante seco (madera, plástico), y después se llama al 112.</p>` },
    ],
    "Agua, saneamiento, calefacción y gas": [
      { html: `<h3>Telecomunicaciones y gas</h3><p>Los edificios tienen una <b>infraestructura común de telecomunicaciones</b> (ICT) que lleva a cada vivienda la televisión (antena terrestre y parabólica), el teléfono y la <b>fibra óptica</b>, a través de un armario de registro en la entrada. Dentro de casa, la red de datos se distribuye por cable o por wifi. La instalación de <b>gas</b> (natural, por tubería, o butano y propano, en bombonas) tiene sus propias normas: llave de paso general y en cada aparato, rejillas de ventilación que <mark>nunca deben taparse</mark> y revisiones periódicas obligatorias por un técnico autorizado. Si huele a gas no hay que encender luces ni interruptores (una chispa podría provocar una explosión): se cierra la llave, se abren ventanas y se sale de casa para llamar a emergencias.</p>` },
    ],
    "Ahorro energético y domótica": [
      { html: `<h3>La factura y la certificación energética</h3><p>La factura de la luz tiene dos partes principales: el <b>término de potencia</b>, que se paga por los kW contratados aunque no se use nada, y el <b>término de energía</b>, que se paga por los kWh consumidos. Además se añaden el impuesto eléctrico, el alquiler del contador y el IVA. En muchas tarifas el precio cambia según la hora: es más barato usar la lavadora por la noche o el fin de semana. Los edificios tienen un <b>certificado de eficiencia energética</b>, obligatorio para vender o alquilar, con una letra de la <mark>A (más eficiente) a la G</mark> según la energía que necesitan y el CO₂ que emiten. El aislamiento de paredes y ventanas, la orientación y el tipo de calefacción son los factores que más influyen.</p>`, video: { id: "dLIXiTW1BaM", titulo: "¿En qué consiste el certificado de eficiencia energética?", canal: "laSexta Noticias", vistas: 109658 } },
    ],
  },
  ejemplos: [
    { enunciado: "Una familia quiere usar a la vez el horno (2.200 W), la lavadora (2.000 W), la nevera (200 W) y luces (300 W). ¿Les basta con 3,45 kW contratados?", pasos: ["Suma de potencias: 2.200 + 2.000 + 200 + 300 = 4.700 W = 4,7 kW.", "Potencia contratada: 3,45 kW.", "4,7 > 3,45: el limitador cortará."], resultado: "No; necesitan al menos 4,7 kW o no usar horno y lavadora a la vez." },
    { enunciado: "Calcula el consumo mensual de un televisor de 100 W encendido 4 horas al día y su coste a 0,15 €/kWh.", pasos: ["Energía diaria: 0,1 kW · 4 h = 0,4 kWh.", "En 30 días: 0,4 · 30 = 12 kWh.", "Coste: 12 · 0,15 = 1,80 €."], resultado: "12 kWh y 1,80 € al mes." },
    { enunciado: "Se cambian 10 bombillas incandescentes de 60 W por LED de 8 W. Si están encendidas 5 h al día, ¿cuánto se ahorra en un año a 0,15 €/kWh?", pasos: ["Ahorro de potencia: 10 · (60 − 8) = 520 W = 0,52 kW.", "Energía ahorrada al año: 0,52 · 5 · 365 = 949 kWh.", "Dinero: 949 · 0,15 ≈ 142 €."], resultado: "Unos 949 kWh y 142 € al año." },
  ],
  errores: [
    "Confundir potencia (kW, lo que consume un aparato en cada momento) con energía (kWh, lo que consume en un tiempo).",
    "Pensar que el diferencial protege de las sobrecargas: eso lo hace el magnetotérmico; el diferencial protege a las personas de las fugas.",
    "Tocar a una persona electrocutada antes de cortar la corriente.",
    "Encender la luz para buscar una fuga de gas.",
    "Tapar las rejillas de ventilación de la cocina o del calentador para que no entre frío.",
  ],
  ejercicios: [
    { q: "Nombra las partes de la instalación eléctrica desde la calle hasta un enchufe.", sol: "Acometida, caja general de protección, contador, derivación individual, cuadro general de mando y protección (ICP, IGA, diferencial y PIA) y circuitos interiores hasta el enchufe." },
    { q: "¿Qué función tienen el IGA, el diferencial y los PIA?", sol: "IGA: protege toda la instalación de sobrecargas y cortocircuitos. Diferencial: detecta fugas a tierra y protege a las personas. PIA: protege cada circuito por separado." },
    { q: "¿Por qué el cable del horno es más grueso que el de las luces?", sol: "Porque el horno consume más corriente, y un cable fino se calentaría demasiado y podría provocar un incendio." },
    { q: "Calcula la intensidad que consume un horno de 2.300 W a 230 V.", sol: "I = P / V = 2.300 / 230 = 10 A." },
    { q: "Una vitrocerámica de 1.500 W funciona 1,5 horas al día. ¿Cuántos kWh consume en un mes de 30 días?", sol: "1,5 kW · 1,5 h · 30 = 67,5 kWh." },
    { q: "¿Qué es el término de potencia de la factura?", sol: "La parte que se paga por la potencia contratada, se consuma o no." },
    { q: "Indica cuatro elementos de la instalación de agua de una vivienda.", sol: "Acometida, contador, llave de paso general, tuberías de agua fría y caliente, calentador o caldera y grifos (con los desagües y sifones)." },
    { q: "¿Qué harías si al llegar a casa huele a gas?", sol: "No encender luces ni aparatos, cerrar la llave del gas, abrir ventanas, salir de la vivienda y llamar a emergencias desde fuera." },
    { q: "Indica cinco medidas de ahorro energético en casa.", sol: "Bombillas LED, electrodomésticos de clase A, aislar ventanas, apagar aparatos en lugar de dejarlos en espera y poner la calefacción a 19-21 °C." },
    { q: "¿Qué puede hacer una casa domótica? Pon tres ejemplos.", sol: "Encender luces al detectar presencia, regular la calefacción desde el móvil y bajar las persianas según la luz o la hora (también alarmas y avisos de fugas de agua)." },
  ],
  quiz: [
    { q: "El cable del circuito de alumbrado suele ser de…", o: ["1,5 mm²", "6 mm²", "10 mm²"], a: 0, e: "Las luces consumen poca corriente." },
    { q: "Si alguien se electrocuta, lo primero es…", o: ["tirar de su brazo", "cortar la corriente", "echarle agua"], a: 1, e: "O separarle con un objeto aislante seco." },
    { q: "Si huele a gas, no debes…", o: ["abrir las ventanas", "encender la luz", "cerrar la llave"], a: 1, e: "Una chispa podría provocar una explosión." },
    { q: "El término de energía de la factura se paga por…", o: ["los kW contratados", "los kWh consumidos", "el número de enchufes"], a: 1, e: "El de potencia, por los kW." },
    { q: "En el certificado energético, la letra más eficiente es la…", o: ["A", "D", "G"], a: 0, e: "De la A a la G." },
  ],
  tarjetas: [
    ["Potencia contratada", "Máxima potencia que se puede usar a la vez en una vivienda."],
    ["Término de energía", "Parte de la factura que paga los kWh consumidos."],
    ["Certificado energético", "Calificación de la A a la G de la eficiencia de un edificio."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "La casa que paga la mitad",
    html: `<p>Dos pisos idénticos, en el mismo edificio y con familias parecidas. Uno paga unos 1.800 euros al año entre luz, gas y agua; el otro, menos de 900. La diferencia no está en pasar frío ni en ducharse menos. El segundo piso tiene las ventanas con doble vidrio y rotura de puente térmico, bombillas LED, una bomba de calor en lugar de radiadores eléctricos, grifos con aireadores, la potencia contratada ajustada a lo que realmente necesita y unas placas solares compartidas en la azotea.</p>
      <p>Detrás de cada interruptor, grifo y radiador hay instalaciones diseñadas con normas precisas para que sean útiles, seguras y eficientes. En este tema recorrerás la instalación eléctrica desde la calle hasta el enchufe y aprenderás a leer sus esquemas, sabrás qué hacer ante un accidente, entenderás cómo funcionan el agua, la calefacción, el gas y las telecomunicaciones, y descubrirás cómo la energía solar, la domótica y la arquitectura bioclimática pueden reducir a la mitad el consumo de una vivienda. Con estos conocimientos podrás leer una factura y tomar decisiones con criterio.</p>`,
  },
  svgs: {
    "Circuitos de una vivienda y potencia contratada": L.rejilla("Circuitos de una vivienda con su sección de cable y su PIA", ["Circuito", "Uso", "Cable", "PIA"], [["C1", "alumbrado", "1,5 mm²", "10 A"], ["C2", "enchufes", "2,5 mm²", "16 A"], ["C3", "cocina y horno", "6 mm²", "25 A"], ["C4", "lavadora", "4 mm²", "20 A"], ["C5", "baño y cocina", "2,5 mm²", "16 A"]], { t: "Circuitos básicos" }),
    "Qué hacer ante un accidente eléctrico": L.flujo("Pasos ante un accidente eléctrico", ["No tocar a la persona", "Cortar la corriente en el cuadro", "Si no se puede, separar con material aislante", "Llamar al 112", "Primeros auxilios si sabes"], { t: "Ante un accidente" }),
    "Telecomunicaciones y gas": L.cajas("Servicios de la infraestructura común de telecomunicaciones", [["TV terrestre", "antena|en la azotea"], ["TV satélite", "parabólica"], ["Teléfono e Internet", "fibra óptica|y cobre"], ["Registros", "cajas en cada|planta y vivienda"]], { t: "ICT del edificio" }),
    "La factura y la certificación energética": L.barras("Ejemplo de reparto de una factura de luz mensual", [["Potencia", 15], ["Energía", 38], ["Impuestos", 10], ["Contador", 1]], { t: "Factura de 64 € (ejemplo)", unidad: " €" }),
  },
  tras: {
    "Circuitos de una vivienda y potencia contratada": [
      {
        html: `<h3>Esquemas de la instalación interior</h3><p>Los electricistas trabajan con <b>esquemas</b> que usan símbolos normalizados. Los más sencillos son: el <b>punto de luz simple</b>, una lámpara controlada por un interruptor colocado en serie con ella en la <b>fase</b> (el cable marrón, negro o gris), mientras el <b>neutro</b> (azul) va directo a la lámpara; la <b>toma de corriente</b> o enchufe, con fase, neutro y <b>tierra</b> (amarillo y verde) conectados en paralelo con los demás enchufes del circuito; y el <b>timbre</b>, accionado por un pulsador que solo cierra el circuito mientras se aprieta.</p>
          <p>Para encender una luz desde dos sitios, por ejemplo desde los dos extremos de un pasillo, se usa un <mark>circuito conmutado</mark> con dos <b>conmutadores</b>. Cada conmutador tiene tres bornes y elige por cuál de dos cables (los «puentes») pasa la fase; la lámpara luce cuando los dos conmutadores están en la misma posición respecto a esos puentes, y al cambiar cualquiera de ellos se apaga. Para tres o más puntos se intercala un <b>conmutador de cruce</b>. Hoy muchas viviendas usan también <b>telerruptores</b> o mecanismos inteligentes. Los esquemas pueden ser <b>multifilares</b>, con todos los cables dibujados, o <b>unifilares</b>, con un solo trazo y marcas que indican el número de conductores, que es como se representa el cuadro general.</p>`,
        svg: L.cajas("Circuitos básicos de una vivienda", [["Punto de luz", "interruptor en|la fase"], ["Enchufe", "fase, neutro|y tierra"], ["Conmutado", "una luz desde|dos sitios"], ["Timbre", "pulsador:|solo al apretar"]], { t: "Esquemas básicos" }),
      },
    ],
    "Seguridad eléctrica": [
      {
        html: `<h3>Normas y profesionales</h3><p>Las instalaciones eléctricas de los edificios en España deben cumplir el <b>Reglamento Electrotécnico para Baja Tensión</b> (<mark>REBT</mark>), que fija los circuitos mínimos, el grosor de los cables, las protecciones, la toma de tierra y las distancias de seguridad en baños y cocinas. Por ejemplo, en el baño se definen <b>volúmenes</b> alrededor de la bañera y la ducha donde no se pueden poner enchufes ni interruptores, porque el agua y la piel mojada aumentan mucho el riesgo de electrocución.</p>
          <p>Solo un <b>instalador autorizado</b> puede hacer o reformar una instalación. Al terminar, entrega el <b>certificado de instalación eléctrica</b> (el antiguo «boletín»), necesario para dar de alta la luz con la compañía. Las instalaciones de gas y de calefacción también tienen sus reglamentos y necesitan revisiones periódicas obligatorias. En casa, lo que sí puedes hacer con seguridad es cambiar una bombilla con el interruptor apagado, rearmar un PIA que ha saltado tras desenchufar el aparato que lo provocó y pulsar una vez al mes el botón de prueba del diferencial para comprobar que funciona. Ante cualquier otra avería, lo prudente es llamar a un profesional.</p>`,
        svg: L.cajas("Lo que puedes hacer y lo que debe hacer un profesional", [["Tú puedes", "cambiar bombillas|sin tensión"], ["Tú puedes", "probar el|diferencial cada mes"], ["Profesional", "nuevos circuitos|y reformas"], ["Profesional", "certificado|de instalación"]], { t: "REBT y seguridad" }),
      },
    ],
    "Agua, saneamiento, calefacción y gas": [
      {
        html: `<h3>Calefacción y climatización: la bomba de calor</h3><p>Hay varias formas de calentar una casa. Las <b>calderas</b> queman gas natural o gasóleo y calientan agua que circula por radiadores o por <b>suelo radiante</b>; las de condensación aprovechan también el calor del vapor de los humos y gastan menos. Los <b>radiadores eléctricos</b> convierten la electricidad en calor por efecto Joule: 1 kWh de electricidad da 1 kWh de calor, lo que resulta caro. Las estufas de <b>biomasa</b> queman pellets o leña, un combustible renovable.</p>
          <p>La opción más eficiente es la <b>bomba de calor</b>, que funciona como una nevera al revés: un gas refrigerante absorbe calor del aire exterior (incluso a temperaturas bajo cero), un compresor lo comprime y lo calienta más, y ese calor se cede al interior. Por cada kWh de electricidad entrega 3 o 4 kWh de calor: su rendimiento, el <mark>COP</mark>, es de 3 a 4. En verano invierte el ciclo y refrigera. Cuando la bomba de calor calienta agua para radiadores, suelo radiante y agua caliente sanitaria se llama <b>aerotermia</b>; si toma el calor del subsuelo, <b>geotermia</b>. Al usar electricidad, que puede venir de fuentes renovables, ayuda a reducir las emisiones de los edificios.</p>`,
        svg: L.flujo("Ciclo de una bomba de calor en modo calefacción", ["El refrigerante toma calor del aire exterior", "El compresor lo comprime y lo calienta", "Cede el calor dentro de la casa", "La válvula lo expande y lo enfría", "Vuelve a empezar (COP 3-4)"], { t: "Bomba de calor" }),
        video: { id: "mHrlRcPlVcE", titulo: "Cómo funciona la aerotermia y tipos de bombas de calor", canal: "Caloryfrio.com", vistas: 217475 },
      },
    ],
    "Telecomunicaciones y gas": [
      {
        html: `<h3>Energía solar en la vivienda</h3><p>El sol puede aportar buena parte de la energía de una casa de dos formas. La <b>energía solar térmica</b> usa colectores en el tejado por los que circula un líquido que se calienta y transfiere ese calor a un depósito de agua caliente sanitaria; en España, el Código Técnico de la Edificación obliga a que los edificios nuevos cubran así una parte del agua caliente (o con otra renovable). La <b>energía solar fotovoltaica</b> usa paneles de silicio que transforman la luz directamente en electricidad en corriente continua; un <b>inversor</b> la convierte en alterna a 230 V para usarla en casa.</p>
          <p>En el <mark>autoconsumo</mark>, la vivienda usa la electricidad de sus paneles mientras los produce, y el excedente se vierte a la red y se descuenta en la factura (<b>compensación de excedentes</b>). Se puede añadir una batería para guardar la energía y usarla de noche, aunque encarece la instalación. Un panel de unos 400 W de potencia pico produce en España alrededor de 1,5 kWh al día de media. Los vecinos de un edificio pueden compartir una instalación en la azotea (<b>autoconsumo colectivo</b>) o unirse en una <b>comunidad energética</b> local. Para aprovecharlo al máximo, conviene poner la lavadora o el lavavajillas en las horas de sol.</p>`,
        svg: L.flujo("Instalación de autoconsumo fotovoltaico", ["Paneles: luz → corriente continua", "Inversor: continua → alterna 230 V", "Consumo en casa", "Excedente a la red (se compensa)", "Opcional: batería para la noche"], { t: "Autoconsumo solar" }),
      },
    ],
    "Ahorro energético y domótica": [
      {
        html: `<h3>La domótica por dentro</h3><p>Una vivienda domótica funciona como un sistema de control: <b>sensores</b> (temperatura, humedad, presencia, apertura de puertas y ventanas, fugas de agua, humo), un <b>controlador</b> o pasarela que decide según unas reglas y <b>actuadores</b> (relés, motores de persianas, válvulas, enchufes inteligentes, termostatos). Las reglas se llaman <b>escenas</b> o automatizaciones: «si no hay nadie en casa, apagar luces y bajar la calefacción a 16 °C»; «si se detecta una fuga de agua, cerrar la electroválvula y avisar al móvil».</p>
          <p>Los dispositivos se comunican por cable (el estándar <b>KNX</b>, muy usado en edificios) o de forma inalámbrica (wifi, Zigbee, Z-Wave o el nuevo estándar común <mark>Matter</mark>, que busca que aparatos de marcas distintas se entiendan). La domótica aporta <b>confort</b>, <b>ahorro</b> energético (la calefacción solo funciona en las estancias ocupadas), <b>seguridad</b> (alarmas técnicas y de intrusión) y <b>accesibilidad</b>, muy importante para personas mayores o con discapacidad, que pueden controlar la casa con la voz. Sus riesgos son la dependencia de Internet y de un fabricante, la privacidad de los datos que recoge y la ciberseguridad: hay que cambiar las contraseñas de fábrica y mantenerla actualizada.</p>`,
        svg: L.flujo("Funcionamiento de una escena domótica de fuga de agua", ["Sensor detecta agua en el suelo", "El controlador aplica la regla", "Electroválvula cierra el agua", "Aviso al móvil", "Registro del evento"], { t: "Escena: fuga de agua" }),
      },
    ],
    "La factura y la certificación energética": [
      {
        html: `<h3>Arquitectura bioclimática y aislamiento</h3><p>La energía más barata es la que no se gasta. La <b>arquitectura bioclimática</b> diseña los edificios aprovechando el clima del lugar para necesitar poca calefacción y refrigeración. En el hemisferio norte, las estancias principales y las ventanas grandes se orientan al <b>sur</b>, donde entra el sol en invierno, que va bajo; en verano, con el sol alto, unos <b>aleros</b>, toldos o árboles de hoja caduca dan sombra. La <b>ventilación cruzada</b>, abriendo ventanas en fachadas opuestas, refresca de noche, y los muros gruesos de piedra o ladrillo acumulan calor (<b>inercia térmica</b>) y suavizan los cambios de temperatura.</p>
          <p>El <b>aislamiento</b> térmico (lana mineral, poliestireno, corcho, fibra de madera) en fachadas y cubiertas reduce las pérdidas de calor, y las ventanas con doble o triple vidrio y marcos con rotura de <b>puente térmico</b> evitan que el frío entre por los bordes. Los edificios de <mark>consumo casi nulo</mark>, obligatorios en la Unión Europea para las nuevas construcciones, combinan todo esto con renovables y ventilación con recuperación de calor. Rehabilitar edificios antiguos con estos criterios es una de las grandes tareas para frenar el cambio climático, ya que los edificios consumen alrededor del 40 % de la energía en Europa.</p>`,
        svg: L.cajas("Estrategias de la arquitectura bioclimática", [["Orientación sur", "sol en|invierno"], ["Aleros y toldos", "sombra|en verano"], ["Aislamiento", "fachada,|cubierta, ventanas"], ["Ventilación", "cruzada|de noche"]], { t: "Diseño bioclimático" }),
      },
    ],
  },
  secciones: [7, 4, 4],
  niveles: "bbmmmbbbbb",
  ejercicios: [
    { nivel: "básico", q: "¿De qué color son los cables de fase, neutro y tierra?", sol: "Fase: marrón, negro o gris. Neutro: azul. Tierra: amarillo y verde." },
    { nivel: "básico", q: "¿Qué es un circuito conmutado y dónde se usa?", sol: "Un circuito que permite encender y apagar una luz desde dos puntos distintos con dos conmutadores; se usa en pasillos, escaleras y dormitorios." },
    { nivel: "básico", q: "¿Qué significan las siglas REBT?", sol: "Reglamento Electrotécnico para Baja Tensión, la norma que deben cumplir las instalaciones eléctricas de los edificios." },
    { nivel: "básico", q: "¿Qué diferencia hay entre energía solar térmica y fotovoltaica?", sol: "La térmica calienta un líquido para obtener agua caliente; la fotovoltaica transforma la luz en electricidad." },
    { nivel: "básico", q: "Nombra cuatro estrategias de la arquitectura bioclimática.", sol: "Orientar las estancias al sur, poner aleros o toldos para dar sombra en verano, aislar bien fachadas y ventanas, ventilación cruzada e inercia térmica de muros gruesos." },
    { nivel: "medio", q: "¿Por qué el interruptor de una lámpara debe cortar la fase y no el neutro?", sol: "Porque así, con el interruptor apagado, la lámpara queda sin tensión; si cortara el neutro, el portalámparas seguiría con tensión y habría riesgo al cambiar la bombilla." },
    { nivel: "medio", q: "Una bomba de calor con COP 4 entrega 12.000 kWh de calor al año. ¿Cuánta electricidad consume? ¿Y un radiador eléctrico para dar lo mismo?", sol: "Bomba de calor: 12.000 / 4 = 3.000 kWh. Radiador eléctrico (rendimiento 1): 12.000 kWh, cuatro veces más." },
    { nivel: "medio", q: "Con el ejercicio anterior y la electricidad a 0,15 €/kWh, ¿cuánto se ahorra al año con la bomba de calor?", sol: "Radiador: 12.000 · 0,15 = 1.800 €. Bomba: 3.000 · 0,15 = 450 €. Ahorro: 1.350 € al año." },
    { nivel: "medio", q: "Una casa tiene 8 paneles de 400 W. Si cada uno produce 1,5 kWh al día, ¿cuánta energía generan al año?", sol: "8 · 1,5 = 12 kWh al día. Al año: 12 · 365 = 4.380 kWh." },
    { nivel: "medio", q: "¿Qué hace el inversor en una instalación fotovoltaica?", sol: "Convierte la corriente continua que producen los paneles en corriente alterna a 230 V y 50 Hz para usarla en la vivienda y verterla a la red." },
    { nivel: "medio", q: "Explica por qué no puede haber enchufes junto a la bañera.", sol: "El agua es conductora y la piel mojada tiene mucha menos resistencia, así que una descarga sería mucho más peligrosa. El REBT define volúmenes de seguridad alrededor de bañera y ducha donde se prohíben enchufes e interruptores." },
    { nivel: "medio", q: "Describe una escena domótica para cuando la familia sale de casa.", sol: "Al activar «salir» (o detectar que todos los móviles se alejan): apagar todas las luces y los enchufes de espera, bajar la calefacción a 16 °C, bajar persianas, activar la alarma y cerrar la llave de agua si se va de viaje." },
    { nivel: "medio", q: "¿Qué ventajas aporta la domótica a una persona mayor que vive sola?", sol: "Controlar luces y persianas con la voz, recordatorios de medicación, detectores de caídas, de humo o de fugas con aviso a familiares y apertura de la puerta sin desplazarse." },
    { nivel: "medio", q: "¿Qué es la compensación de excedentes en el autoconsumo?", sol: "La energía que los paneles producen y la casa no usa se vierte a la red y la compañía la descuenta en la factura, normalmente a un precio menor que el de compra." },
    { nivel: "medio", q: "¿Por qué conviene orientar al sur las ventanas grandes de una casa en España?", sol: "Porque en invierno el sol, que va bajo, entra por ellas y calienta la casa gratis; en verano, con el sol alto, un alero las protege fácilmente." },
    { nivel: "medio", q: "¿Qué puedes hacer tú en casa si salta un PIA y qué no debes hacer?", sol: "Desenchufar el aparato sospechoso y volver a subir el PIA. Si vuelve a saltar, no insistir ni puentearlo: hay una avería y debe revisarla un instalador autorizado." },
    { nivel: "avanzado", q: "Dibuja (describe) el esquema de un circuito conmutado: qué cables llegan a cada conmutador y a la lámpara.", sol: "La fase llega al borne común del primer conmutador; de sus otros dos bornes salen dos cables (puentes) a los dos bornes del segundo conmutador; del común del segundo sale el cable a la lámpara. El neutro va directo a la lámpara y la tierra a su carcasa si es metálica." },
    { nivel: "avanzado", q: "Una familia consume 3.600 kWh al año y su instalación solar produce 4.380 kWh, pero solo aprovecha directamente el 40 % de lo producido. ¿Cuánta energía compra a la red y cuánta vierte?", sol: "Aprovecha 0,4 · 4.380 = 1.752 kWh. Compra 3.600 − 1.752 = 1.848 kWh. Vierte 4.380 − 1.752 = 2.628 kWh, que se compensan en la factura." },
    { nivel: "avanzado", q: "Compara calefacción con caldera de gas, radiadores eléctricos y aerotermia en coste, emisiones y mantenimiento.", sol: "Gas: coste medio, emite CO₂ al quemar, necesita revisiones. Radiadores eléctricos: instalación barata pero consumo muy caro (COP 1). Aerotermia: instalación cara pero consumo bajo (COP 3-4) y sin emisiones directas; con electricidad renovable, casi sin emisiones." },
    { nivel: "avanzado", q: "Calcula el ahorro anual de cambiar un piso de potencia contratada de 6,9 kW a 4,6 kW si el término de potencia cuesta 0,10 €/kW al día.", sol: "Diferencia: 2,3 kW. Ahorro: 2,3 · 0,10 · 365 ≈ 84 € al año, siempre que no se usen a la vez aparatos que sumen más de 4,6 kW." },
    { nivel: "avanzado", q: "Propón un plan de rehabilitación energética de un piso de los años 70 con un presupuesto limitado, ordenando las medidas de más a menos rentables.", sol: "1) LED y ajustar la potencia contratada (coste bajo, ahorro inmediato). 2) Burletes y sellado de ventanas, aireadores en grifos. 3) Termostato programable. 4) Cambiar ventanas a doble vidrio. 5) Aislamiento de fachada (mejor con la comunidad). 6) Bomba de calor o autoconsumo colectivo." },
    { nivel: "avanzado", q: "¿Qué riesgos de ciberseguridad y privacidad tiene una casa domótica? Propón tres medidas.", sol: "Riesgos: que alguien acceda a cámaras o cerraduras, que se sepa cuándo no hay nadie en casa, robo de datos. Medidas: cambiar las contraseñas de fábrica, actualizar los dispositivos, separar la red domótica (red de invitados o VLAN) y elegir marcas que cifren los datos." },
    { nivel: "avanzado", q: "Explica por qué los edificios de consumo casi nulo necesitan ventilación con recuperación de calor.", sol: "Están tan bien aislados y sellados que no se renueva el aire por las rendijas; hay que ventilar para la salud, y al hacerlo se perdería el calor. El recuperador cruza el aire que sale con el que entra y le transfiere gran parte de su calor." },
    { nivel: "avanzado", q: "En un pasillo largo se quiere encender la luz desde tres puntos. ¿Qué mecanismos necesitas?", sol: "Dos conmutadores en los extremos y un conmutador de cruce en el punto intermedio (por cada punto adicional se añade otro de cruce). Alternativa: pulsadores con un telerruptor." },
    { nivel: "avanzado", q: "Analiza la etiqueta energética de un frigorífico: clase A con 100 kWh/año frente a clase E con 300 kWh/año. Si el A cuesta 150 € más, ¿en cuántos años se amortiza a 0,15 €/kWh?", sol: "Ahorro anual: (300 − 100) · 0,15 = 30 €. Amortización: 150 / 30 = 5 años; como un frigorífico dura unos 15 años, compensa claramente." },
  ],
  ejemplos: [
    { enunciado: "Calcula cuánto ahorra al año una familia que sustituye un termo eléctrico de 1.500 W que funciona 3 h al día por una bomba de calor para ACS con COP 3.", pasos: ["Consumo del termo: 1,5 kW · 3 h · 365 = 1.642,5 kWh.", "Misma energía térmica con COP 3: 1.642,5 / 3 = 547,5 kWh.", "Ahorro: 1.642,5 − 547,5 = 1.095 kWh.", "A 0,15 €/kWh: 1.095 · 0,15 ≈ 164 €."], resultado: "Unos 164 € y 1.095 kWh al año." },
    { enunciado: "Explica qué ocurre en un circuito conmutado cuando se pulsa el segundo conmutador estando la luz encendida.", pasos: ["Con la luz encendida, los dos conmutadores conectan con el mismo puente.", "Al cambiar el segundo, este pasa al otro puente.", "La fase ya no tiene camino hasta la lámpara: el circuito se abre.", "La luz se apaga; cambiar cualquiera de los dos la vuelve a encender."], resultado: "La luz se apaga: cada conmutador cambia el estado." },
    { enunciado: "Dimensiona una instalación de autoconsumo para cubrir unos 3.000 kWh al año con paneles de 400 W que producen 1,5 kWh al día.", pasos: ["Producción anual por panel: 1,5 · 365 = 547,5 kWh.", "Paneles necesarios: 3.000 / 547,5 ≈ 5,5 → 6 paneles.", "Potencia instalada: 6 · 400 W = 2,4 kW pico.", "Habrá excedentes en verano y déficit en invierno: se compensan con la red."], resultado: "6 paneles, unos 2,4 kW." },
  ],
  errores: ["Puentear un PIA o un diferencial que salta a menudo: elimina la protección y puede provocar un incendio o una electrocución."],
  cuarta: ["400 V", "Rojo", "El IGA", "Para que el agua salga más rápido", "climatización solar", "25 mm²", "llamar por teléfono junto a la persona", "salir de casa", "el agua caliente", "B+"],
  quiz: [
    { q: "Para encender una luz desde dos puntos se usa un circuito…", o: ["simple", "conmutado", "en paralelo con el timbre", "de tierra"], a: 1, e: "Con dos conmutadores." },
    { q: "El interruptor de una lámpara debe cortar…", o: ["el neutro", "la fase", "la tierra", "las tres"], a: 1, e: "Así la lámpara queda sin tensión." },
    { q: "El documento que entrega el instalador al terminar es…", o: ["la factura de la luz", "el certificado de instalación", "el certificado energético", "la escritura"], a: 1, e: "Antes se llamaba «boletín»." },
    { q: "Una bomba de calor con COP 3 entrega por cada kWh eléctrico…", o: ["1 kWh de calor", "3 kWh de calor", "0,3 kWh", "30 kWh"], a: 1, e: "Toma el resto del calor del aire exterior." },
    { q: "La aerotermia es…", o: ["una caldera de gas", "una bomba de calor que calienta agua", "un panel fotovoltaico", "un tipo de aislamiento"], a: 1, e: "Para radiadores, suelo radiante y ACS." },
    { q: "En una instalación fotovoltaica, el inversor…", o: ["convierte continua en alterna", "almacena energía", "calienta el agua", "mide el consumo"], a: 0, e: "Para usar la electricidad a 230 V." },
    { q: "El estándar común que busca que aparatos domóticos de distintas marcas se entiendan es…", o: ["Matter", "HDMI", "REBT", "ACS"], a: 0, e: "Lo apoyan los grandes fabricantes." },
    { q: "En el hemisferio norte, las ventanas grandes conviene orientarlas al…", o: ["norte", "sur", "este siempre", "da igual"], a: 1, e: "Para captar el sol en invierno." },
    { q: "La rotura de puente térmico en una ventana…", o: ["evita que el frío pase por el marco", "hace que se abra sola", "es un tipo de cristal tintado", "mide la temperatura"], a: 0, e: "Separa el interior y el exterior del marco." },
    { q: "Los edificios consumen en Europa cerca del…", o: ["5 %", "15 %", "40 %", "90 %"], a: 2, e: "Por eso su rehabilitación es clave." },
  ],
  cuartaEx: ["se cambia de compañía", "Antena de comunicación satelital", "Clase E"],
  examen: [
    { q: "El cable de tierra sirve para…", o: ["llevar la corriente al aparato", "desviar a tierra una fuga y proteger a las personas", "medir el consumo", "encender la luz"], a: 1, e: "Junto con el diferencial evita descargas." },
    { q: "Para tres puntos de encendido de una misma luz se necesita…", o: ["tres interruptores simples", "dos conmutadores y uno de cruce", "un timbre", "un diferencial"], a: 1, e: "El de cruce va en medio." },
    { q: "La energía solar térmica sirve sobre todo para…", o: ["producir electricidad", "calentar agua", "cargar el móvil", "iluminar"], a: 1, e: "Con colectores y un depósito." },
    { q: "En autoconsumo, conviene poner la lavadora…", o: ["de noche", "en las horas de sol", "nunca", "solo en invierno"], a: 1, e: "Así se usa la energía de los paneles." },
    { q: "Un riesgo de la domótica es…", o: ["el ahorro energético", "la privacidad y la ciberseguridad", "la accesibilidad", "el confort"], a: 1, e: "Hay que cambiar contraseñas y actualizar." },
  ],
  tarjetas: [
    ["Circuito conmutado", "Dos conmutadores encienden y apagan una luz desde dos sitios."],
    ["COP de la bomba de calor", "kWh de calor por cada kWh eléctrico: 3 a 4."],
    ["Autoconsumo", "Usar la electricidad de tus paneles y compensar el excedente."],
    ["Bioclimática", "Orientación, sombra, aislamiento e inercia para gastar menos."],
  ],
  glosario: [
    ["Fase", "Conductor que lleva la tensión; marrón, negro o gris."],
    ["Neutro", "Conductor de retorno de la corriente; azul."],
    ["Toma de tierra", "Conexión que desvía a tierra las fugas; amarillo y verde."],
    ["Cuadro general de mando y protección", "Caja con el IGA, el diferencial y los PIA."],
    ["Interruptor diferencial", "Protección que corta la corriente si detecta una fuga a tierra."],
    ["PIA", "Pequeño interruptor automático que protege cada circuito de sobrecargas y cortocircuitos."],
    ["Conmutador", "Mecanismo que permite controlar una luz desde dos puntos."],
    ["REBT", "Reglamento Electrotécnico para Baja Tensión."],
    ["Potencia contratada", "Máximo de kW que se pueden usar a la vez en la vivienda."],
    ["ACS", "Agua caliente sanitaria."],
    ["Bomba de calor", "Máquina que transporta calor del exterior al interior con un compresor."],
    ["Aerotermia", "Bomba de calor aire-agua para calefacción y ACS."],
    ["COP", "Rendimiento de una bomba de calor: calor entregado entre electricidad consumida."],
    ["Autoconsumo", "Producir y consumir la propia electricidad, normalmente solar."],
    ["Inversor", "Aparato que convierte corriente continua en alterna."],
    ["Domótica", "Automatización y control de la vivienda."],
    ["Arquitectura bioclimática", "Diseño que aprovecha el clima para reducir el consumo."],
    ["Puente térmico", "Zona de un edificio por donde se escapa el calor más fácilmente."],
  ],
  situacion: {
    titulo: "Auditoría energética de mi casa",
    reto: "Realizad una auditoría energética de vuestra vivienda (o de una vivienda tipo) y proponed un plan de mejora que reduzca al menos un 25 % el consumo, con su coste y su plazo de amortización.",
    pasos: [
      "Recoged las facturas de luz (y gas si lo hay) de un año y analizad la potencia contratada, el consumo mensual y su coste.",
      "Haced un inventario de aparatos con su potencia y horas de uso, y calculad su consumo anual en una hoja de cálculo.",
      "Revisad la vivienda: orientación, ventanas, aislamiento, calefacción, iluminación y aparatos en espera.",
      "Proponed mejoras (LED, ajuste de potencia, bomba de calor, autoconsumo, aislamiento, domótica) con su coste y ahorro anual.",
      "Calculad el plazo de amortización de cada mejora y ordenadlas de más a menos rentable.",
    ],
    producto: "Un informe de auditoría con tablas, gráficos de consumo y un plan de mejora priorizado.",
    evaluacion: ["Los cálculos de potencia, energía y coste son correctos y usan bien las unidades (kW, kWh, €).", "El diagnóstico identifica los principales puntos de consumo.", "Las mejoras son técnicamente adecuadas y se justifican con datos.", "El informe es claro e incluye la amortización de cada medida."],
  },
  objetivos: ["Interpretar esquemas eléctricos básicos y conocer la normativa de las instalaciones", "Comparar sistemas de calefacción y valorar el autoconsumo y la arquitectura bioclimática"],
  fuentes: [{ t: "IDAE: guías de ahorro energético en el hogar", url: "https://www.idae.es/" }],
});
