// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

// Onda senoidal entre x0 y x1.
function onda(x0, x1, y, amp, lambda, color, w = 3) {
  let d = `M${x0} ${y}`;
  for (let x = x0; x <= x1; x += 2) d += ` L ${x} ${(y - amp * Math.sin(((x - x0) / lambda) * 2 * Math.PI)).toFixed(1)}`;
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"/>`;
}

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Ondas: sonido y luz",
  minutos: 40,
  objetivos: ["Describir una onda con su amplitud, longitud de onda, frecuencia y velocidad", "Explicar las características del sonido y sus fenómenos", "Conocer la naturaleza de la luz, la reflexión, la refracción y el espectro electromagnético"],
  claves: ["onda", "longitud de onda", "frecuencia", "hercio (Hz)", "reflexión", "refracción"],
  pregunta: {
    texto: "En una tormenta ves el rayo y cuentas 3 segundos hasta oír el trueno. ¿A qué distancia ha caído?",
    respuesta: "A unos <b>1 000 metros</b>. La luz llega casi al instante (300 000 km/s), pero el sonido viaja a <mark>unos 340 m/s</mark> en el aire: 340 · 3 ≈ 1 020 m. Truco: divide los segundos entre 3 y tendrás los kilómetros.",
  },
  bloques: [
    {
      html: `<h3>Qué es una onda</h3><p>Una <b>onda</b> es una perturbación que <mark>transporta energía sin transportar materia</mark>. Cuando haces «la ola» en un estadio, la ola recorre las gradas pero cada persona se queda en su sitio. Las <b>ondas mecánicas</b> (sonido, olas) necesitan un medio; las <b>electromagnéticas</b> (luz, radio) pueden viajar por el vacío. Según cómo vibra el medio, son <b>transversales</b> (perpendicular a la propagación) o <b>longitudinales</b> (en la misma dirección).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Onda transversal en una cuerda y onda longitudinal en un muelle">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${onda(20, 240, 54, 22, 70, "var(--pen)")}
        <g fill="none" stroke="var(--leaf)" stroke-width="2.5">${[20, 26, 32, 38, 44, 70, 90, 110, 116, 122, 128, 134, 160, 180, 200, 206, 212, 218, 224, 240].map((x) => `<path d="M${x} 116 V 146"/>`).join("")}</g>
        <g ${F} font-size="12" font-weight="700"><text x="20" y="100" fill="var(--pen)">transversal (cuerda, luz)</text><text x="20" y="168" fill="var(--leaf)">longitudinal (sonido)</text></g>
      </svg>`,
    },
    {
      html: `<h3>Magnitudes de una onda</h3><p>La <b>amplitud (A)</b> es la altura máxima de la vibración. La <b>longitud de onda (λ)</b> es la distancia entre dos crestas. El <b>periodo (T)</b> es el tiempo de una oscilación y la <b>frecuencia (f = 1/T)</b>, cuántas oscilaciones hay por segundo, en <b>hercios (Hz)</b>. Todas se relacionan con la velocidad:</p>
      <div class="formula"><span>v = λ · f</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Onda con la amplitud y la longitud de onda señaladas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 90 H 246" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        ${onda(20, 240, 90, 40, 100, "var(--pen)")}
        <path d="M45 90 V 50" stroke="var(--red)" stroke-width="2.5"/><text x="50" y="76" font-size="13" font-weight="700" fill="var(--red)" ${F}>A</text>
        <path d="M45 34 H 145 M45 28 V 40 M145 28 V 40" stroke="var(--leaf)" stroke-width="2.5"/><text x="95" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="var(--leaf)" ${F}>λ</text>
        <text x="130" y="164" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>cresta · valle · cresta</text>
      </svg>`,
    },
    {
      html: `<h3>El sonido</h3><p>El sonido es una onda mecánica longitudinal: el aire se comprime y se expande. Su velocidad depende del medio: <mark>unos 340 m/s en el aire</mark>, 1 500 m/s en el agua y más de 5 000 m/s en el acero. Sus cualidades: la <b>intensidad</b> (fuerte o débil, depende de la amplitud, se mide en <b>decibelios</b>), el <b>tono</b> (agudo o grave, depende de la frecuencia) y el <b>timbre</b> (lo que distingue un violín de una flauta). Oímos entre 20 Hz y 20 000 Hz.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sonido grave de frecuencia baja y sonido agudo de frecuencia alta">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${onda(20, 240, 54, 20, 80, "var(--pen)")}${onda(20, 240, 128, 20, 26, "var(--red)")}
        <g ${F} font-size="12" font-weight="700"><text x="20" y="94" fill="var(--pen)">grave: baja frecuencia</text><text x="20" y="168" fill="var(--red)">agudo: alta frecuencia</text></g>
      </svg>`,
    },
    {
      html: `<h3>Fenómenos ondulatorios</h3><p>Cuando una onda choca con un obstáculo y vuelve, hay <b>reflexión</b>: es el <mark>eco</mark> y lo que usan el sónar de los barcos o las ecografías. Cuando pasa de un medio a otro, cambia de velocidad y de dirección: es la <b>refracción</b>, que hace que un lápiz parezca roto dentro de un vaso de agua. La <b>difracción</b> permite que oigas a alguien detrás de una esquina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rayo de luz que se refleja en un espejo con ángulos iguales y otro que se desvía al entrar en el agua">
        <defs>${flecha("on1", "var(--sun)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 70 H 120" stroke="var(--ink)" stroke-width="4"/><path d="M67 70 V 20" stroke="var(--line)" stroke-dasharray="4 3"/>
        <path d="M24 24 L 67 70 L 110 24" fill="none" stroke="var(--sun)" stroke-width="3" marker-end="url(#on1)"/>
        <rect x="140" y="90" width="110" height="76" fill="var(--water)" opacity=".35"/><path d="M195 40 V 160" stroke="var(--line)" stroke-dasharray="4 3"/>
        <path d="M150 40 L 195 90 L 215 160" fill="none" stroke="var(--sun)" stroke-width="3" marker-end="url(#on1)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="67" y="96" fill="var(--ink)">reflexión</text><text x="195" y="30" fill="var(--pen)">refracción</text></g>
      </svg>`,
    },
    {
      html: `<h3>La luz y el espectro electromagnético</h3><p>La luz es una <b>onda electromagnética</b> transversal que viaja en el vacío a <mark>c = 300 000 km/s</mark>, lo más rápido que existe. La luz visible es solo una pequeña parte del <b>espectro electromagnético</b>, que va de las ondas de radio (λ muy larga) a los rayos gamma (λ muy corta), pasando por microondas, infrarrojo, ultravioleta y rayos X. La luz blanca es una mezcla de colores que un prisma separa: el arcoíris.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Espectro electromagnético de las ondas de radio a los rayos gamma con la franja visible en colores">
        <defs><linearGradient id="on2" x1="0" x2="1"><stop offset="0" stop-color="#d33"/><stop offset=".2" stop-color="#f80"/><stop offset=".4" stop-color="#ec0"/><stop offset=".6" stop-color="#3a3"/><stop offset=".8" stop-color="#36c"/><stop offset="1" stop-color="#839"/></linearGradient></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 50 ${Array.from({ length: 116 }, (_, i) => { const x = 14 + i * 2; const l = 60 - (i / 116) * 56; return `L ${x} ${(50 - 14 * Math.sin((x - 14) / l * 6.28)).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2"/>
        <rect x="140" y="82" width="36" height="24" fill="url(#on2)"/><path d="M14 82 H 246 V 106 H 14 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="34" y="124">radio</text><text x="80" y="124">micro</text><text x="120" y="124">IR</text><text x="158" y="124">visible</text><text x="194" y="124">UV</text><text x="216" y="140">rayos X</text><text x="236" y="124">γ</text></g>
        <text x="130" y="164" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>← λ larga · · · λ corta, más energía →</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Sonido frente a luz",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación entre el sonido y la luz: tipo de onda, medio y velocidad">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["SONIDO", "onda mecánica longitudinal", "necesita un medio (no hay en el vacío)", "≈ 340 m/s en el aire", "eco · sónar · ecografía", "var(--pen)"], ["LUZ", "onda electromagnética transversal", "viaja también por el vacío", "300 000 km/s", "espejos · lentes · fibra óptica", "var(--sun)"]]
        .map(([n, a, b, v, u, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="60" text-anchor="middle" font-size="26" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="96" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="120" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${b}</text>
          <text x="${165 + i * 310}" y="156" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" ${F}>${v}</text>
          <text x="${165 + i * 310}" y="190" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${u}</text>`).join("")}
    </svg>`,
  },
  video: { id: "0EPA36B6PTQ", titulo: "¿Qué es una onda? Tipos, características y aplicaciones", canal: "A Cierta Ciencia", vistas: 1058518, megusta: 0, busqueda: "ondas sonido y luz física" },
  quiz: [
    { q: "Una onda transporta…", o: ["materia", "energía sin transportar materia", "solo sonido"], a: 1, e: "Las partículas del medio vibran en su sitio; lo que avanza es la energía." },
    { q: "Una onda tiene λ = 2 m y f = 170 Hz. ¿Cuál es su velocidad?", o: ["85 m/s", "340 m/s", "172 m/s"], a: 1, e: "v = λ · f = 2 · 170 = 340 m/s." },
    { q: "¿Qué cualidad del sonido depende de la frecuencia?", o: ["La intensidad", "El tono", "El timbre"], a: 1, e: "Frecuencia alta = sonido agudo; baja = grave." },
    { q: "¿Por qué no se oye el sonido en el espacio?", o: ["Porque hace frío", "Porque no hay un medio material que vibre", "Porque la luz lo tapa"], a: 1, e: "El sonido es una onda mecánica: necesita aire, agua o un sólido." },
    { q: "El lápiz que parece roto dentro de un vaso de agua se debe a la…", o: ["reflexión", "refracción", "difracción"], a: 1, e: "La luz cambia de velocidad y de dirección al pasar del agua al aire." },
  ],
  examen: [
    { q: "Gritas frente a una montaña y el eco vuelve en 2 s. ¿A qué distancia está? (v = 340 m/s)", o: ["680 m", "340 m", "170 m"], a: 1, e: "El sonido va y vuelve: recorre 680 m en total, así que la montaña está a 340 m." },
    { q: "¿Qué onda electromagnética tiene más energía?", o: ["Ondas de radio", "Luz visible", "Rayos gamma"], a: 2, e: "Cuanto menor es la longitud de onda (mayor frecuencia), más energía: los rayos gamma." },
    { q: "Los humanos oímos frecuencias entre…", o: ["20 Hz y 20 000 Hz", "0 Hz y 100 Hz", "1 000 Hz y 1 000 000 Hz"], a: 0, e: "Por debajo están los infrasonidos y por encima los ultrasonidos." },
  ],
  feynman: ["Qué es una onda y qué transporta", "Las magnitudes de una onda y la fórmula v = λ · f", "Las tres cualidades del sonido", "La diferencia entre reflexión y refracción", "Qué es el espectro electromagnético"],
  mapa: mapa("ONDAS", "var(--eso)", [
    ["Onda", "energía sin materia", "var(--ink)"],
    ["Magnitudes", "A · λ · f · v = λ·f", "var(--leaf)"],
    ["Sonido", "mecánica · 340 m/s · tono, timbre", "var(--pen)"],
    ["Luz", "electromagnética · 300 000 km/s", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Relación entre velocidad, longitud de onda y frecuencia", "v = λ · f."],
    ["Velocidad del sonido en el aire", "Unos 340 m/s."],
    ["Velocidad de la luz en el vacío", "300 000 km/s (3 · 10⁸ m/s)."],
    ["¿Qué es la refracción?", "El cambio de dirección de una onda al pasar de un medio a otro en el que cambia su velocidad."],
    ["Rango de frecuencias audibles para los humanos", "De 20 Hz a 20 000 Hz."],
  ],
  familias: ["En la próxima tormenta, contad los segundos entre rayo y trueno y calculad la distancia.", "Llenad vasos con distintas cantidades de agua y golpeadlos: ¿cuál suena más agudo?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La energía: ondas, sonido y luz, fenómenos ondulatorios y espectro electromagnético (RD 217/2022, Física y Química 4º).",
    ideas: ["Medir la velocidad del sonido con eco y un cronómetro, o con la app phyphox.", "Ver ondas en una cubeta o con un muelle «slinky» (transversales y longitudinales).", "Separar la luz blanca con un CD o un prisma."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Espectro electromagnético, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar la ecuación v = λ · f a ondas de sonido y de luz", "Explicar la reflexión, la refracción y la formación de imágenes en espejos y lentes"],
  tras: {
    "Magnitudes de una onda": [
      { html: `<h3>La ecuación fundamental de las ondas</h3><p>En un periodo T, la onda avanza exactamente una longitud de onda λ. Por eso su velocidad es <mark>v = λ / T = λ · f</mark>. La velocidad depende del <b>medio</b> por el que viaja la onda, no de cómo la produzcamos: si un músico toca una nota más aguda (más frecuencia), la longitud de onda se acorta para que la velocidad siga siendo la misma. Cuando una onda pasa de un medio a otro, su <b>frecuencia no cambia</b> (la fija la fuente), pero sí cambian la velocidad y la longitud de onda. La <b>amplitud</b> está relacionada con la energía que transporta: una ola más alta lleva más energía, y un sonido de más amplitud suena más fuerte.</p><div class="formula"><span>v = λ · f</span></div>`, video: { id: "rKf92Vgx2ag", titulo: "Lo que necesitas saber sobre ondas", canal: "QuantumFracture", vistas: 2056633 } },
    ],
    "El sonido": [
      { html: `<h3>Cualidades del sonido y contaminación acústica</h3><p>El oído distingue tres <b>cualidades</b> del sonido. La <b>intensidad</b> (fuerte o débil) depende de la amplitud y se mide en <b>decibelios</b> (dB): una conversación tiene unos 60 dB y un concierto, 110 dB. El <b>tono</b> (agudo o grave) depende de la frecuencia: las personas oímos de 20 a 20.000 Hz; por debajo están los <b>infrasonidos</b> y por encima los <b>ultrasonidos</b>, que usan los murciélagos y las ecografías. El <b>timbre</b> permite distinguir un violín de una flauta que tocan la misma nota, y depende de la forma de la onda. Los ruidos por encima de 85 dB durante mucho tiempo dañan el oído: es la <mark>contaminación acústica</mark>. El <b>eco</b> se produce cuando el sonido rebota en un obstáculo a más de 17 m y oímos el reflejo separado del original.</p>` },
    ],
    "Fenómenos ondulatorios": [
      { html: `<h3>Reflexión y refracción de la luz</h3><p>En la <b>reflexión</b>, la luz rebota en una superficie: el rayo reflejado sale con el <mark>mismo ángulo</mark> con que llegó el incidente (medido desde la normal, la perpendicular a la superficie). Así funcionan los espejos. En la <b>refracción</b>, la luz cambia de medio y de velocidad, y por eso se <b>desvía</b>: al pasar del aire al agua se acerca a la normal porque va más lenta. El <b>índice de refracción</b> n = c / v indica cuánto más lenta va la luz en un medio que en el vacío: el agua tiene n = 1,33 y el vidrio, unos 1,5. La refracción explica que un lápiz parezca roto dentro de un vaso de agua, que una piscina parezca menos profunda y la formación del arcoíris.</p>`, video: { id: "zC3B9yL9R4U", titulo: "Reflexión y refracción de la luz", canal: "Profesor Particular Puebla", vistas: 628479 } },
    ],
    "La luz y el espectro electromagnético": [
      { html: `<h3>Espejos y lentes</h3><p>Los <b>espejos planos</b> forman una imagen del mismo tamaño, derecha y simétrica (con la izquierda y la derecha invertidas). Los espejos <b>curvos</b> pueden aumentar o reducir la imagen: los cóncavos se usan para maquillarse y en los faros; los convexos, en los retrovisores, porque abarcan más campo. Las <b>lentes</b> aprovechan la refracción. Las <b>convergentes</b>, más gruesas en el centro, concentran los rayos en un punto, el foco: forman las lupas y corrigen la <b>hipermetropía</b>. Las <b>divergentes</b>, más finas en el centro, separan los rayos y corrigen la <b>miopía</b>. El ojo humano tiene su propia lente, el cristalino, que enfoca la imagen sobre la retina.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "La nota la de un diapasón tiene una frecuencia de 440 Hz. Si el sonido viaja a 340 m/s, ¿cuál es su longitud de onda?", pasos: ["v = λ · f → λ = v / f.", "λ = 340 / 440.", "λ ≈ 0,77 m."], resultado: "λ ≈ 0,77 m." },
    { enunciado: "Ves un relámpago y oyes el trueno 6 s después. ¿A qué distancia está la tormenta? (Sonido: 340 m/s.)", pasos: ["La luz llega prácticamente al instante (300.000 km/s).", "El sonido tarda 6 s: d = v · t = 340 · 6.", "d = 2.040 m."], resultado: "La tormenta está a unos 2 km." },
    { enunciado: "Una emisora de radio emite en 100 MHz. Calcula la longitud de onda de sus ondas (c = 3 · 10⁸ m/s).", pasos: ["f = 100 MHz = 10⁸ Hz.", "λ = c / f = 3 · 10⁸ / 10⁸.", "λ = 3 m."], resultado: "λ = 3 m." },
  ],
  errores: [
    "Pensar que el sonido se propaga en el vacío: necesita un medio material.",
    "Creer que la onda transporta materia: transporta energía; las partículas solo oscilan.",
    "Confundir la frecuencia (tono) con la amplitud (intensidad).",
    "Pensar que la frecuencia cambia al pasar de un medio a otro: cambian la velocidad y la longitud de onda.",
    "Medir los ángulos de reflexión y refracción desde la superficie y no desde la normal.",
  ],
  ejercicios: [
    { q: "Una onda tiene un periodo de 0,02 s. ¿Cuál es su frecuencia?", sol: "f = 1 / T = 1 / 0,02 = 50 Hz." },
    { q: "Una ola tiene λ = 4 m y f = 0,5 Hz. Calcula su velocidad.", sol: "v = λ · f = 4 · 0,5 = 2 m/s." },
    { q: "Clasifica como mecánica o electromagnética y como transversal o longitudinal: el sonido, la luz, una ola en una cuerda.", sol: "Sonido: mecánica y longitudinal. Luz: electromagnética y transversal. Cuerda: mecánica y transversal." },
    { q: "Un barco envía un ultrasonido al fondo y recibe el eco a los 0,4 s. Si en el agua el sonido va a 1.500 m/s, ¿qué profundidad hay?", sol: "Ida y vuelta: d total = 1.500 · 0,4 = 600 m. Profundidad = 300 m." },
    { q: "¿Por qué en la Luna los astronautas se comunican por radio aunque estén al lado?", sol: "Porque en la Luna no hay aire y el sonido no se propaga en el vacío; las ondas de radio son electromagnéticas y sí lo hacen." },
    { q: "Calcula la longitud de onda de un sonido de 20 Hz y de uno de 20.000 Hz en el aire (340 m/s).", sol: "20 Hz: λ = 17 m. 20.000 Hz: λ = 0,017 m = 1,7 cm." },
    { q: "Un rayo de luz llega a un espejo con 35° respecto a la normal. ¿Con qué ángulo se refleja?", sol: "También con 35° respecto a la normal (ley de la reflexión)." },
    { q: "Calcula la velocidad de la luz en el agua (n = 1,33).", sol: "v = c / n = 300.000 / 1,33 ≈ 225.600 km/s." },
    { q: "Ordena de menor a mayor frecuencia: rayos X, ondas de radio, luz visible, microondas, ultravioleta.", sol: "Radio < microondas < luz visible < ultravioleta < rayos X." },
    { q: "¿Qué lente necesita una persona miope? ¿Por qué?", sol: "Una lente divergente: en el ojo miope la imagen se forma delante de la retina, y la lente divergente separa los rayos para que enfoquen más atrás, sobre ella." },
  ],
  quiz: [
    { q: "Si la frecuencia de un sonido aumenta en el mismo medio, su longitud de onda…", o: ["aumenta", "disminuye", "no cambia"], a: 1, e: "v = λ·f es constante en el medio." },
    { q: "El tono de un sonido depende de su…", o: ["amplitud", "frecuencia", "timbre"], a: 1, e: "Más frecuencia, más agudo." },
    { q: "En la reflexión, el ángulo de reflexión es…", o: ["igual al de incidencia", "el doble", "siempre 90°"], a: 0, e: "Ley de la reflexión." },
    { q: "La luz, al pasar del aire al agua…", o: ["va más rápido", "va más despacio y se desvía", "no cambia"], a: 1, e: "Es la refracción." },
    { q: "Las lentes convergentes corrigen…", o: ["la miopía", "la hipermetropía", "el daltonismo"], a: 1, e: "Concentran los rayos." },
  ],
  tarjetas: [
    ["Ecuación fundamental de las ondas", "v = λ · f."],
    ["Cualidades del sonido", "Intensidad (amplitud), tono (frecuencia) y timbre (forma de la onda)."],
    ["Índice de refracción", "n = c / v: cuánto más lenta va la luz en ese medio."],
  ],
});
