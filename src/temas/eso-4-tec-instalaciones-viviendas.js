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
