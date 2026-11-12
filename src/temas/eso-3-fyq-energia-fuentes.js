// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "La energía y sus fuentes",
  minutos: 55,
  objetivos: ["Definir la energía, sus unidades y sus formas principales", "Aplicar el principio de conservación de la energía y explicar la degradación", "Calcular energías cinética y potencial gravitatoria sencillas", "Comparar las fuentes de energía renovables y no renovables y valorar el ahorro energético"],
  claves: ["energía", "julio", "energía cinética", "energía potencial", "conservación de la energía", "rendimiento", "renovable", "no renovable"],
  pregunta: {
    texto: "En un día soleado de primavera, más de la mitad de la electricidad que se consume en España sale del sol y del viento. Hace veinte años era menos del 10 %. ¿De dónde sale la energía y por qué importa tanto cómo la obtenemos?",
    respuesta: "La energía no se crea: <mark>se transforma</mark> de unas formas en otras. Las centrales la toman de una <mark>fuente</mark> (el viento, el sol, el agua, el gas, el uranio) y la convierten en electricidad. Elegir fuentes renovables reduce la contaminación y el CO₂, y no depende de combustibles que se agotan o que hay que importar.",
  },
  bloques: [
    {
      html: `<h3>Qué es la energía</h3><p>La <mark>energía</mark> es la capacidad que tiene un cuerpo o un sistema para producir <b>cambios</b>: moverse, calentarse, iluminar, deformar, hacer funcionar una máquina o mantener la vida. Todo lo que ocurre en el universo implica energía. Su unidad en el SI es el <b>julio (J)</b>, en honor al físico inglés James Joule; 1 J es aproximadamente la energía necesaria para levantar una manzana de 100 g a 1 m de altura. Como el julio es una unidad pequeña, se usan también el <b>kilojulio (kJ)</b>; la <b>caloría (cal)</b>, muy usada en los alimentos (1 cal = 4,18 J); y el <b>kilovatio hora (kWh)</b>, que aparece en la factura de la luz (1 kWh = 3,6 millones de J).</p>`,
    },
    {
      html: `<h3>Las formas de la energía</h3><p>La energía se presenta de muchas formas. La <b>energía cinética</b> la tienen los cuerpos en movimiento: un coche, el viento, el agua de un río. La <b>potencial gravitatoria</b> la tienen por su altura: el agua de un embalse. La <b>elástica</b>, los cuerpos deformados, como un muelle comprimido o un arco tenso. La <b>energía química</b> está almacenada en los enlaces de las sustancias: en los alimentos, el gas o una pila. La <b>térmica</b> está relacionada con la agitación de las partículas. La <b>eléctrica</b> la transporta la corriente. La <b>radiante</b> o luminosa la transportan la luz y otras ondas electromagnéticas. La <b>nuclear</b> está en los núcleos de los átomos. Y la <b>sonora</b> la transportan las vibraciones del aire. La suma de cinética y potencial se llama <mark>energía mecánica</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ocho formas de energía en tarjetas: cinética, potencial, química, térmica, eléctrica, radiante, nuclear y sonora">${BG}
        ${[["cinética", "var(--red)"], ["potencial", "var(--pen)"], ["química", "var(--leaf)"], ["térmica", "#f08a24"], ["eléctrica", "#e0a000"], ["radiante", "#b8860b"], ["nuclear", "#9b59b6"], ["sonora", "var(--muted)"]].map(([n, c], i) => caja(12 + (i % 2) * 122, 14 + Math.floor(i / 2) * 40, 114, 32, n, c, { size: 12 })).join("")}</svg>`,
    },
    {
      html: `<h3>La energía cinética</h3><p>La <mark>energía cinética</mark> es la que tiene un cuerpo por estar en movimiento. Depende de su <b>masa</b> y, sobre todo, de su <b>velocidad</b>: <b>Ec = ½ · m · v²</b>, con la masa en kg, la velocidad en m/s y la energía en julios. Como la velocidad está elevada al cuadrado, si un coche duplica su velocidad, su energía cinética se multiplica por cuatro. Por eso los choques a alta velocidad son tan destructivos y por eso la distancia de frenado aumenta tanto: los frenos tienen que eliminar toda esa energía convirtiéndola en calor. Un camión a la misma velocidad que un coche tiene mucha más energía cinética porque su masa es mucho mayor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo coche a 50 y a 100 kilómetros por hora: al doblar la velocidad, la energía cinética se multiplica por cuatro">${BG}
        ${[[40, "50 km/h", 1], [108, "100 km/h", 4]].map(([y, v, k]) => `<rect x="20" y="${y}" width="44" height="18" rx="5" fill="var(--red)"/><circle cx="30" cy="${y + 20}" r="5" fill="var(--ink)"/><circle cx="54" cy="${y + 20}" r="5" fill="var(--ink)"/>${t(42, y - 6, v, { size: 10 })}<rect x="80" y="${y}" width="${k * 30}" height="22" rx="4" fill="#e0a000" fill-opacity=".7"/>${t(86 + k * 30, y + 16, "Ec × " + k, { size: 11, anchor: "start" })}`).join("")}
        ${t(130, 166, "Ec = ½ · m · v²", { size: 14, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>La energía potencial gravitatoria</h3><p>La <mark>energía potencial gravitatoria</mark> es la que tiene un cuerpo por estar a una cierta <b>altura</b>. Depende de su masa, de la altura y de la gravedad: <b>Ep = m · g · h</b>, con g = 9,8 m/s². Una maceta en un balcón del quinto piso tiene mucha más energía potencial que en el primero; si cae, esa energía se convierte en cinética. Las <b>centrales hidroeléctricas</b> aprovechan la energía potencial del agua de los embalses: al caer por tuberías, el agua gana velocidad, mueve una turbina y un generador produce electricidad. Algunas, llamadas de <b>bombeo</b>, suben agua cuando sobra electricidad y la dejan caer cuando se necesita, funcionando como una gran batería.</p>`,
    },
    {
      html: `<h3>La conservación de la energía</h3><p>La energía tiene una propiedad fundamental: el <mark>principio de conservación de la energía</mark> dice que <b>la energía no se crea ni se destruye, solo se transforma</b> de unas formas en otras. La cantidad total de energía del universo es siempre la misma. Un ejemplo es la montaña rusa: arriba del todo el vagón tiene mucha energía potencial; al bajar, se transforma en cinética y gana velocidad; al volver a subir, la cinética se vuelve a transformar en potencial. Si no hubiera rozamiento, la energía mecánica se conservaría y el vagón podría volver a la misma altura. Otros ejemplos: en una bombilla, la energía eléctrica se transforma en luz y calor; en una placa solar, la luz en electricidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Montaña rusa: arriba la energía es sobre todo potencial, abajo sobre todo cinética, y la suma se mantiene">${BG}
        <path d="M14 34 Q 60 34 90 90 Q 120 132 150 90 Q 180 50 220 60 L 246 60" stroke="var(--muted)" stroke-width="3" fill="none"/>
        <rect x="20" y="20" width="22" height="12" rx="3" fill="var(--red)"/><rect x="108" y="100" width="22" height="12" rx="3" fill="var(--red)"/>
        <line x1="20" y1="164" x2="150" y2="164" stroke="var(--muted)"/>
        ${[[30, 40, 2, "arriba"], [104, 4, 38, "abajo"]].map(([x, p, c, n]) => `<rect x="${x}" y="${164 - p}" width="14" height="${p}" fill="var(--pen)"/><rect x="${x + 16}" y="${164 - c}" width="14" height="${c}" fill="var(--red)"/>${t(x + 15, 176, n, { size: 9, weight: 400 })}`).join("")}
        ${t(246, 130, "Ep + Ec = constante", { size: 10, anchor: "end", color: "var(--leaf)" })}${t(170, 152, "■ Ep", { size: 10, anchor: "start", color: "var(--pen)" })}${t(210, 152, "■ Ec", { size: 10, anchor: "start", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La degradación de la energía y el rendimiento</h3><p>Aunque la energía se conserva, en cada transformación una parte se convierte en <b>calor</b> que se dispersa en el entorno y ya no se puede aprovechar: decimos que la energía se <mark>degrada</mark>. Por eso ninguna máquina convierte toda la energía que recibe en energía útil. El <mark>rendimiento</mark> indica qué porcentaje se aprovecha: <b>rendimiento = energía útil / energía consumida · 100</b>. Una bombilla incandescente antigua solo convertía en luz el 5 % de la energía; el resto era calor. Una bombilla LED aprovecha alrededor del 40 %. Un motor de gasolina aprovecha un 25-30 %, y uno eléctrico, más del 85 %. Mejorar el rendimiento es una de las formas más eficaces de ahorrar energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de una bombilla LED: de 100 julios de electricidad, 40 salen como luz útil y 60 se pierden como calor">${BG}
        <rect x="14" y="70" width="70" height="40" fill="#e0a000" fill-opacity=".7"/>${t(49, 95, "100 J", { size: 13 })}${t(49, 60, "eléctrica", { size: 10 })}
        <path d="M84 70 H 150 L 230 46 V 62 L 150 86 Z" fill="var(--leaf)" fill-opacity=".6"/>${t(236, 42, "40 J luz", { size: 11, anchor: "end", color: "var(--leaf)" })}
        <path d="M84 86 V 110 H 150 L 220 150 L 206 160 L 150 120 Z" fill="var(--red)" fill-opacity=".4"/>${t(246, 176, "60 J calor", { size: 11, anchor: "end", color: "var(--red)" })}
        ${t(130, 24, "rendimiento = 40 %", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Las fuentes de energía no renovables</h3><p>Las <mark>fuentes no renovables</mark> son las que existen en cantidades limitadas y se agotan al usarlas, porque tardan millones de años en formarse. Los <b>combustibles fósiles</b> son el <b>carbón</b>, el <b>petróleo</b> y el <b>gas natural</b>, formados a partir de restos de seres vivos enterrados hace millones de años. Al quemarlos se obtiene mucha energía, pero se libera <b>CO₂</b>, que causa el cambio climático, y otros contaminantes. La <b>energía nuclear</b> se obtiene de la <b>fisión</b> de núcleos de uranio: no emite CO₂, pero genera residuos radiactivos peligrosos durante miles de años y tiene riesgo de accidentes graves, como los de Chernóbil (1986) o Fukushima (2011). Todavía hoy, los combustibles fósiles proporcionan más del 70 % de la energía que se consume en España.</p>`,
    },
    {
      html: `<h3>Las fuentes de energía renovables</h3><p>Las <mark>fuentes renovables</mark> son inagotables o se regeneran rápidamente, y casi no emiten CO₂. La <b>solar</b> aprovecha la luz del Sol con <b>paneles fotovoltaicos</b> que producen electricidad o con <b>colectores térmicos</b> que calientan agua. La <b>eólica</b> usa la fuerza del viento con aerogeneradores; España es uno de los mayores productores del mundo. La <b>hidráulica</b> aprovecha el agua de los embalses. La <b>biomasa</b> quema restos agrícolas y forestales. La <b>geotérmica</b> usa el calor del interior de la Tierra, muy útil en Canarias. La <b>mareomotriz</b> y la <b>undimotriz</b> usan las mareas y las olas. Sus inconvenientes son que dependen del tiempo (no siempre hace sol o viento), ocupan mucho terreno y necesitan sistemas para almacenar la energía, como baterías.</p>${tabla(["Fuente", "Tipo", "Ventaja", "Inconveniente"], [["Petróleo", "no renovable", "mucha energía", "CO₂, se agota"], ["Nuclear", "no renovable", "sin CO₂", "residuos radiactivos"], ["Solar", "renovable", "limpia, abundante", "solo de día"], ["Eólica", "renovable", "limpia, barata", "depende del viento"], ["Hidráulica", "renovable", "se puede almacenar", "embalses, sequías"]])}`,
      video: { id: "NAPAMIpGB-s", titulo: "¿Qué es la energía? Tipos de energía. Energías renovables y no renovables", canal: "Smile and Learn - Español", vistas: 3042719 },
    },
    {
      html: `<h3>De la central a tu casa</h3><p>La mayoría de las centrales eléctricas funcionan de forma parecida: una fuente de energía hace girar una <b>turbina</b>, que mueve un <mark>generador</mark> o alternador, donde unos imanes que giran dentro de bobinas producen corriente eléctrica por inducción electromagnética. En las térmicas y nucleares, el calor hierve agua y el vapor mueve la turbina; en las hidroeléctricas, la mueve el agua; en las eólicas, el viento. Solo los paneles fotovoltaicos producen electricidad directamente, sin piezas que giren. La electricidad sale de la central a alta tensión por las <b>líneas de transporte</b>, para perder menos energía, y en las <b>subestaciones</b> se baja la tensión hasta los 230 V que llegan a los enchufes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de una central: la fuente mueve una turbina, la turbina un generador, la electricidad viaja por líneas de alta tensión y llega a las casas a 230 voltios">${BG}
        ${[["fuente", "var(--red)"], ["turbina", "var(--muted)"], ["generador", "#e0a000"]].map(([n, c], i) => caja(8 + i * 84, 28, 76, 36, n, c, { size: 11 })).join("")}
        ${fl(84, 46, 92, 46)}${fl(168, 46, 176, 46)}
        <path d="M70 140 L 82 92 L 94 140 M76 116 H 88" stroke="var(--muted)" stroke-width="2" fill="none"/><path d="M160 140 L 172 92 L 184 140 M166 116 H 178" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <path d="M82 96 Q 127 112 172 96" stroke="#e0a000" stroke-width="2" fill="none"/>${fl(214, 66, 214, 90, "var(--muted)", 2)}
        <path d="M206 130 L 226 112 L 246 130 V 150 H 206 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${t(127, 160, "alta tensión", { size: 10, color: "#b8860b" })}${t(226, 168, "230 V", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>El ahorro energético y el futuro</h3><p>La energía más limpia es la que <mark>no se gasta</mark>. En casa podemos ahorrar mucho con pequeños gestos: apagar las luces y los aparatos en lugar de dejarlos en espera (el famoso «piloto rojo» puede suponer hasta un 10 % de la factura), usar bombillas LED, aprovechar la luz natural, poner la lavadora llena y en frío, ajustar la calefacción a unos 20 °C y el aire acondicionado a unos 26 °C, y elegir electrodomésticos con buena <b>etiqueta energética</b> (clase A). En el transporte, andar, ir en bici o en transporte público ahorra energía y contamina menos. La <b>transición energética</b> que vive España busca sustituir los combustibles fósiles por renovables, electrificar el transporte y mejorar el aislamiento de los edificios para alcanzar la neutralidad climática en 2050.</p>`,
    },
  ],
  figura: {
    titulo: "Fuentes de energía",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Dos grupos de fuentes: no renovables, carbón, petróleo, gas natural y uranio; renovables, solar, eólica, hidráulica, biomasa, geotérmica y marina">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(20, 20, 290, 44, "NO RENOVABLES", "var(--red)", { size: 16 })}${caja(330, 20, 290, 44, "RENOVABLES", "var(--leaf)", { size: 16 })}
      ${["carbón", "petróleo", "gas natural", "uranio (nuclear)"].map((n, i) => t(165, 98 + i * 30, n, { size: 15, weight: 400 })).join("")}
      ${["solar · eólica", "hidráulica", "biomasa · geotérmica", "mareomotriz · olas"].map((n, i) => t(475, 98 + i * 30, n, { size: 15, weight: 400 })).join("")}
      ${t(165, 226, "se agotan · CO₂ o residuos", { size: 13, color: "var(--red)", font: D })}${t(475, 226, "inagotables · casi sin CO₂", { size: 13, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "b2khuHTzkeU", titulo: "La ENERGÍA y sus TRANSFORMACIONES. Renovables vs No Renovables", canal: "La Mano Maestra", vistas: 836872, megusta: 0, busqueda: "la energía y sus tipos conservación" },
  ejemplos: [
    { enunciado: "Calcula la energía cinética de una bicicleta con su ciclista (80 kg) que va a 5 m/s.",
      pasos: ["Ec = ½ · m · v².", "Ec = 0,5 · 80 · 5².", "Ec = 0,5 · 80 · 25 = 1000 J."],
      resultado: "1000 J = 1 kJ." },
    { enunciado: "¿Qué energía potencial tiene una maceta de 2 kg en un balcón a 12 m de altura?",
      pasos: ["Ep = m · g · h.", "Ep = 2 · 9,8 · 12.", "Ep = 235,2 J."],
      resultado: "unos 235 J." },
    { enunciado: "Un motor consume 2000 J y realiza un trabajo útil de 500 J. ¿Cuál es su rendimiento?",
      pasos: ["Rendimiento = útil / consumida · 100.", "= 500 / 2000 · 100.", "= 25 %."],
      resultado: "25 %; el 75 % se pierde como calor." },
  ],
  errores: [
    "Decir que la energía se «gasta» o «desaparece»: se transforma y se degrada.",
    "Olvidar elevar al cuadrado la velocidad en la energía cinética.",
    "Pensar que la energía nuclear es renovable: el uranio se agota.",
    "Confundir potencia (W) con energía (J o kWh).",
    "Creer que las renovables no tienen ningún inconveniente: dependen del tiempo y ocupan terreno.",
  ],
  ejercicios: [
    { q: "Define energía y escribe su unidad en el SI.", sol: "Capacidad de un sistema para producir cambios. Se mide en julios (J)." },
    { q: "Indica la forma de energía principal de: una pila, un arco tenso, el agua de un embalse, el Sol, un coche en marcha.", sol: "Química, elástica, potencial gravitatoria, radiante (y nuclear en su interior), cinética." },
    { q: "Calcula la energía cinética de un balón de 0,4 kg a 20 m/s.", sol: "Ec = 0,5 · 0,4 · 400 = 80 J." },
    { q: "¿Qué ocurre con la energía cinética de un coche si su velocidad se triplica?", sol: "Se multiplica por 9." },
    { q: "Calcula la energía potencial de una persona de 60 kg en lo alto de un trampolín de 10 m.", sol: "Ep = 60 · 9,8 · 10 = 5880 J." },
    { q: "Describe las transformaciones de energía en una montaña rusa.", sol: "Arriba, potencial; al bajar, se transforma en cinética; al subir, vuelve a potencial; parte se pierde como calor por rozamiento." },
    { q: "Explica qué significa que la energía se degrada.", sol: "Que en cada transformación una parte se convierte en calor que se dispersa y ya no se puede aprovechar." },
    { q: "Clasifica: carbón, viento, uranio, biomasa, gas natural, sol.", sol: "No renovables: carbón, uranio, gas natural. Renovables: viento, biomasa, sol." },
    { q: "Cita una ventaja y un inconveniente de la energía eólica y de la nuclear.", sol: "Eólica: limpia; depende del viento. Nuclear: no emite CO₂; genera residuos radiactivos." },
    { q: "Propón cinco gestos de ahorro energético en casa.", sol: "Apagar aparatos en espera, bombillas LED, aprovechar la luz natural, lavadora llena y en frío, calefacción a unos 20 °C." },
  ],
  quiz: [
    { q: "La unidad de energía del SI es…", o: ["el vatio", "el julio", "el newton"], a: 1, e: "El julio." },
    { q: "1 kWh equivale a…", o: ["1000 J", "3,6 millones de J", "4,18 J"], a: 1, e: "3,6 · 10⁶ J." },
    { q: "La energía de un cuerpo en movimiento es…", o: ["potencial", "cinética", "química"], a: 1, e: "Cinética." },
    { q: "Ep = m · g · h es la energía…", o: ["cinética", "potencial gravitatoria", "térmica"], a: 1, e: "Potencial gravitatoria." },
    { q: "La energía…", o: ["se crea en las centrales", "se transforma", "se destruye al usarla"], a: 1, e: "Se transforma." },
    { q: "Una LED frente a una incandescente tiene…", o: ["más rendimiento", "menos rendimiento", "igual"], a: 0, e: "Más rendimiento." },
    { q: "Es renovable…", o: ["el gas natural", "la biomasa", "el uranio"], a: 1, e: "La biomasa." },
    { q: "La energía nuclear se obtiene por…", o: ["fisión del uranio", "combustión", "fotosíntesis"], a: 0, e: "Fisión." },
    { q: "Los paneles fotovoltaicos transforman la luz en…", o: ["calor", "electricidad", "movimiento"], a: 1, e: "Electricidad." },
    { q: "Los combustibles fósiles al quemarse emiten…", o: ["O₂", "CO₂", "nada"], a: 1, e: "CO₂." },
  ],
  examen: [
    { q: "Si la masa se duplica a igual velocidad, la Ec…", o: ["se duplica", "se cuadruplica", "no cambia"], a: 0, e: "Proporcional a la masa." },
    { q: "Un aparato con rendimiento del 30 % de 1000 J aprovecha…", o: ["30 J", "300 J", "700 J"], a: 1, e: "300 J." },
    { q: "En un generador eléctrico la energía se produce por…", o: ["inducción electromagnética", "fisión", "rozamiento"], a: 0, e: "Inducción." },
  ],
  feynman: ["Qué significa que la energía se conserva pero se degrada", "Cómo se calculan la energía cinética y la potencial", "Ventajas e inconvenientes de las fuentes renovables y no renovables"],
  mapa: mapa("ENERGÍA", "var(--eso)", [
    ["Formas", "cinética · potencial · química · eléctrica", "var(--red)"],
    ["Cálculo", "Ec = ½mv² · Ep = mgh", "var(--pen)"],
    ["Principio", "conservación · degradación · rendimiento", "#b8860b"],
    ["Fuentes", "renovables · no renovables · ahorro", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Energía", "Capacidad de producir cambios; se mide en julios."],
    ["Energía cinética", "Ec = ½ · m · v²."],
    ["Energía potencial", "Ep = m · g · h."],
    ["Conservación", "La energía no se crea ni se destruye, se transforma."],
    ["Degradación", "Parte de la energía se convierte en calor no aprovechable."],
    ["Rendimiento", "Energía útil / energía consumida · 100."],
    ["No renovable", "Se agota: carbón, petróleo, gas, uranio."],
    ["Renovable", "Inagotable: solar, eólica, hidráulica, biomasa…"],
  ],
  familias: ["Leed juntos la factura de la luz: cuántos kWh se consumen al mes y cuánto cuestan.", "Buscad la etiqueta energética de la nevera o la lavadora y comentad qué significa.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La energía: formas, transformaciones, conservación y degradación, energía mecánica, fuentes renovables y no renovables y uso responsable (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Medir con un vatímetro el consumo en espera de los aparatos del aula.", "Pelota que rebota para discutir conservación y degradación.", "Mapa de las centrales de España con datos de Red Eléctrica en tiempo real."],
  },
  fuentes: [RD, wiki("Energía renovable", "Energ%C3%ADa_renovable"), wiki("Principio de conservación de la energía", "Principio_de_conservaci%C3%B3n_de_la_energ%C3%ADa")],
  revisado: "2026-11-12",
};
