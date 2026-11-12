// Física y Química 2º ESO: la energía y sus transformaciones. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "La energía y sus transformaciones",
  minutos: 55,
  objetivos: ["Definir energía, conocer sus unidades y sus propiedades", "Identificar las formas de energía y calcular energías cinética y potencial sencillas", "Explicar la conservación y la degradación de la energía y el rendimiento de una máquina", "Comparar las fuentes de energía renovables y no renovables y proponer medidas de ahorro"],
  claves: ["energía", "julio", "energía cinética", "energía potencial", "conservación de la energía", "degradación", "rendimiento", "fuentes renovables", "combustibles fósiles", "ahorro energético"],
  pregunta: {
    texto: "Dicen que «la energía ni se crea ni se destruye». Entonces, ¿por qué hay que ahorrar energía si nunca se acaba?",
    respuesta: "Porque, aunque la cantidad total se <mark>conserva</mark>, en cada transformación una parte se convierte en <b>calor</b> que se dispersa por el ambiente y ya no podemos aprovechar. La energía se <mark>degrada</mark>: pasa de formas útiles, como la electricidad o la gasolina, a calor disperso. Además, muchas de las fuentes que usamos, como el petróleo, se agotan y contaminan.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la energía?</h3><p>Todo lo que ocurre a nuestro alrededor necesita energía: que crezca una planta, que se mueva un coche, que brille una bombilla o que tú puedas correr y pensar. La <mark>energía</mark> es la <b>capacidad de un cuerpo o sistema para producir cambios</b> en sí mismo o en otros: moverlos, calentarlos, deformarlos, iluminarlos. Su unidad en el SI es el <mark>julio (J)</mark>, en honor al físico inglés James Joule. Como el julio es pequeño, se usan también el <b>kilojulio</b> (1 kJ = 1000 J), la <b>caloría</b> (1 cal = 4,18 J), muy usada en los alimentos (en realidad, las «calorías» de las etiquetas son kilocalorías), y el <b>kilovatio hora</b> (1 kWh = 3 600 000 J), que aparece en el recibo de la luz.</p>`,
    },
    {
      html: `<h3>Propiedades de la energía</h3><p>La energía tiene cuatro propiedades fundamentales. Se puede <mark>transferir</mark> de unos cuerpos a otros: el palo de golf transfiere energía a la pelota y el radiador al aire de la habitación. Se puede <mark>almacenar</mark> y transportar: en las pilas y baterías, en los alimentos, en la gasolina, en el agua de un embalse o en un muelle comprimido. Se <mark>transforma</mark> de unas formas en otras: un panel solar transforma la energía de la luz en eléctrica, y un motor, la eléctrica en movimiento. Y se <mark>conserva</mark>: en cualquier proceso, la energía total antes y después es la misma. Además, en cada transformación una parte se <b>degrada</b> en calor que se dispersa y que ya no es útil para producir más cambios.</p>`,
    },
    {
      html: `<h3>Formas de energía</h3><p>La energía se presenta de muchas formas. La <b>energía mecánica</b> es la que tienen los cuerpos por su movimiento o su posición. La <b>energía térmica</b> está relacionada con el movimiento de las partículas y con la temperatura. La <b>energía eléctrica</b> es la de las cargas que se mueven por un cable. La <b>energía química</b> está almacenada en los enlaces de las sustancias y se libera en reacciones: en los alimentos, en los combustibles o en las pilas. La <b>energía radiante</b> o electromagnética viaja con la luz y otras radiaciones, como la del Sol. La <b>energía nuclear</b> está en el núcleo de los átomos y se libera al romperlos (fisión) o unirlos (fusión). La <b>energía sonora</b> es la que transportan las vibraciones del aire.</p>${tabla(["Forma de energía", "Ejemplo"], [["Mecánica", "un coche en marcha, el agua de un embalse"], ["Térmica", "el agua caliente de la ducha"], ["Eléctrica", "la corriente que llega al enchufe"], ["Química", "un bocadillo, la gasolina, una pila"], ["Radiante", "la luz del Sol"], ["Nuclear", "el uranio de una central"], ["Sonora", "la música de un altavoz"]])}`,
      video: { id: "NAPAMIpGB-s", titulo: "¿Qué es la energía? Tipos de energía", canal: "Smile and Learn", vistas: 3042840 },
    },
    {
      html: `<h3>Energía cinética y potencial</h3><p>La <mark>energía cinética</mark> es la que tiene un cuerpo por estar en <b>movimiento</b>. Depende de su masa y, sobre todo, de su velocidad: <b>Ec = ½ · m · v²</b>. Como la velocidad está al cuadrado, si un coche duplica su velocidad, su energía cinética se multiplica por cuatro; por eso los choques a alta velocidad son tan peligrosos. La <mark>energía potencial gravitatoria</mark> es la que tiene un cuerpo por estar a cierta <b>altura</b>: <b>Ep = m · g · h</b>, donde h es la altura en metros. El agua de un embalse o una maceta en un balcón tienen energía potencial. También existe la <b>energía potencial elástica</b>, la de un muelle comprimido o un arco tenso. La suma de la cinética y la potencial es la <mark>energía mecánica</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Montaña rusa: arriba el vagón tiene mucha energía potencial y poca cinética; abajo tiene mucha cinética y poca potencial; la suma se mantiene">${BG}
        <path d="M14 40 C 70 40, 90 150, 140 150 S 210 80, 246 80" stroke="var(--ink)" stroke-width="3" fill="none"/>
        <rect x="22" y="26" width="26" height="14" rx="4" fill="var(--red)"/><rect x="128" y="136" width="26" height="14" rx="4" fill="var(--red)"/>
        ${[[30, 56, 60, 8], [140, 56, 10, 58]].map(([x, y, ep, ec]) => `<rect x="${x - 14}" y="${y + 60 - ep}" width="10" height="${ep}" fill="var(--pen)"/><rect x="${x}" y="${y + 60 - ec}" width="10" height="${ec}" fill="var(--leaf)"/>`).join("")}
        <rect x="186" y="20" width="10" height="10" fill="var(--pen)"/>${t(200, 29, "potencial", { size: 10, anchor: "start" })}<rect x="186" y="36" width="10" height="10" fill="var(--leaf)"/>${t(200, 45, "cinética", { size: 10, anchor: "start" })}
        ${t(130, 174, "Ep + Ec = constante (sin rozamiento)", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las transformaciones de la energía</h3><p>La energía cambia continuamente de forma. Cuando comes, la energía química de los alimentos se transforma en energía mecánica de tus músculos y en energía térmica que mantiene tu cuerpo a 37 °C. En una <b>central hidroeléctrica</b>, la energía potencial del agua del embalse se transforma en cinética al caer, esta mueve una turbina y un generador la convierte en eléctrica. En casa, esa energía eléctrica se transforma en luz en una bombilla, en calor en un horno, en movimiento en una batidora y en sonido en un altavoz. Una <b>cadena de transformaciones</b> muy importante empieza en el Sol: su energía nuclear se convierte en luz, las plantas la transforman en energía química con la fotosíntesis, y de ellas viene casi toda la energía que usamos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de transformaciones en una central hidroeléctrica: energía potencial del agua, cinética al caer, mecánica en la turbina, eléctrica en el generador y luz en una bombilla">${BG}
        ${[["potencial", 14, 20, "var(--pen)"], ["cinética", 136, 20, "var(--leaf)"], ["mecánica", 136, 76, "#b8860b"], ["eléctrica", 14, 76, "var(--red)"], ["luz y calor", 14, 132, "#e6a100"]].map(([s, x, y, c]) => caja(x, y, 110, 30, s, c, { size: 11 })).join("")}
        ${fl(124, 35, 134, 35)}${fl(191, 50, 191, 74)}${fl(136, 91, 126, 91)}${fl(69, 106, 69, 130)}
        ${t(196, 140, "embalse → turbina", { size: 9, color: "var(--muted)" })}${t(196, 154, "→ generador → casa", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Conservación y degradación</h3><p>El <mark>principio de conservación de la energía</mark> dice que <b>la energía no se crea ni se destruye, solo se transforma</b>: la cantidad total de energía de un sistema aislado permanece constante. Si dejas caer una pelota, su energía potencial se transforma en cinética; al botar, parte se transforma en sonido y en calor, y por eso cada bote es más bajo. La energía no ha desaparecido: se ha repartido entre el aire y el suelo, que se han calentado un poquito. Esa energía térmica dispersa ya no se puede aprovechar para que la pelota vuelva a subir. Por eso decimos que la energía se <mark>degrada</mark>: en cada transformación disminuye la <b>energía útil</b>. Es imposible construir una máquina que funcione siempre sin recibir energía: el famoso «movimiento perpetuo» no existe.</p>`,
      video: { id: "b2khuHTzkeU", titulo: "La energía y sus transformaciones: renovables vs no renovables", canal: "La Mano Maestra", vistas: 836890 },
    },
    {
      html: `<h3>El rendimiento</h3><p>Ninguna máquina convierte toda la energía que recibe en energía útil: siempre se pierde una parte, casi siempre en forma de calor. El <mark>rendimiento</mark> indica qué porcentaje de la energía consumida se aprovecha: <b>rendimiento = (energía útil / energía consumida) · 100</b>. Una bombilla incandescente antigua solo convertía en luz un 5 % de la electricidad: el 95 % se perdía en calor, por eso quemaba. Una bombilla <b>LED</b> aprovecha más del 40 %, y por eso gasta unas cinco veces menos para dar la misma luz. Un motor de gasolina tiene un rendimiento de alrededor del 30 %, y un motor eléctrico, de más del 85 %. Mejorar el rendimiento de las máquinas es una de las formas más eficaces de ahorrar energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo de energía de una bombilla: entran 100 julios de electricidad; en una incandescente salen 5 de luz y 95 de calor; en un LED salen 40 de luz y 60 de calor">${BG}
        ${[[28, "incandescente", 5], [104, "LED", 40]].map(([y, s, u]) => `${t(20, y, s, { size: 11, anchor: "start" })}<rect x="20" y="${y + 8}" width="60" height="30" fill="var(--red)" fill-opacity=".7"/>${t(50, y + 28, "100 J", { size: 10, color: "#fff" })}
          <path d="M80 ${y + 8} L 130 ${y + 8} L 130 ${y + 8 + 30 * u / 100} L 80 ${y + 8 + 30 * u / 100} Z" fill="#e6a100"/><path d="M80 ${y + 8 + 30 * u / 100} L 130 ${y + 8 + 30 * u / 100} Q 170 ${y + 40}, 170 ${y + 60} L ${170 - 30 * (100 - u) / 100} ${y + 60} Q ${170 - 30 * (100 - u) / 100} ${y + 44}, 80 ${y + 38} Z" fill="var(--muted)" fill-opacity=".5"/>
          ${t(136, y + 18, `${u} J luz`, { size: 10, anchor: "start", color: "#b8860b" })}${t(176, y + 58, `${100 - u} J calor`, { size: 10, anchor: "start", color: "var(--muted)" })}`).join("")}</svg>`,
    },
    {
      html: `<h3>Fuentes de energía</h3><p>Las <mark>fuentes de energía</mark> son los recursos de la naturaleza de los que obtenemos energía. Las <mark>no renovables</mark> existen en cantidades limitadas y se agotan porque tardan millones de años en formarse: son los <b>combustibles fósiles</b> (carbón, petróleo y gas natural), que proceden de restos de seres vivos enterrados hace millones de años, y el <b>uranio</b> de las centrales nucleares. Hoy siguen dando la mayor parte de la energía del mundo, pero contaminan: los fósiles emiten CO₂, que causa el cambio climático, y las nucleares producen residuos radiactivos. Las <mark>renovables</mark> son inagotables o se regeneran rápidamente: la <b>solar</b>, la <b>eólica</b> (viento), la <b>hidráulica</b> (ríos y embalses), la <b>biomasa</b> (restos vegetales), la <b>geotérmica</b> (calor del interior de la Tierra) y la <b>mareomotriz</b> (mareas). Contaminan mucho menos, aunque dependen del tiempo y ocupan espacio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fuentes renovables, como el sol, el viento y el agua, frente a no renovables, como el petróleo, el carbón y el uranio">${BG}
        <line x1="130" y1="14" x2="130" y2="166" stroke="var(--line)" stroke-width="2"/>${t(66, 28, "renovables", { size: 12, color: "var(--leaf)" })}${t(196, 28, "no renovables", { size: 12, color: "var(--red)" })}
        <circle cx="34" cy="64" r="12" fill="#ffd34d"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return `<line x1="${(34 + 16 * Math.cos(a)).toFixed(1)}" y1="${(64 + 16 * Math.sin(a)).toFixed(1)}" x2="${(34 + 22 * Math.cos(a)).toFixed(1)}" y2="${(64 + 22 * Math.sin(a)).toFixed(1)}" stroke="#e6a100" stroke-width="2"/>`; }).join("")}
        <path d="M96 60 v 50" stroke="var(--muted)" stroke-width="3"/><path d="M96 60 l 18 -6 M96 60 l -10 -16 M96 60 l -6 18" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>
        <path d="M22 130 q 10 -8 20 0 t 20 0 t 20 0 t 20 0" stroke="var(--pen)" stroke-width="3" fill="none"/>${t(66, 160, "sol · viento · agua", { size: 10, color: "var(--muted)" })}
        <rect x="150" y="54" width="24" height="40" rx="4" fill="var(--ink)"/>${t(162, 112, "petróleo", { size: 9 })}<path d="M196 90 l 10 -18 l 12 6 l 8 12 Z" fill="#333"/>${t(212, 112, "carbón", { size: 9 })}
        <circle cx="192" cy="138" r="10" fill="var(--leaf)" fill-opacity=".6" stroke="var(--ink)"/>${t(196, 160, "uranio", { size: 9 })}</svg>`,
      video: { id: "aINlFT1m-sM", titulo: "Tipos de energías: renovables y no renovables", canal: "Smile and Learn", vistas: 1254962 },
    },
    {
      html: `<h3>Ahorro y uso responsable de la energía</h3><p>El consumo de energía no deja de crecer y la mayoría todavía procede de combustibles fósiles. Para frenar el cambio climático y no agotar los recursos hay dos caminos: producir más energía con fuentes <b>renovables</b> y <mark>consumir menos</mark> con medidas de <b>ahorro y eficiencia</b>. En casa podemos apagar las luces y los aparatos que no usamos (el «modo espera» también gasta), usar bombillas LED, comprar electrodomésticos de clase energética A, aislar bien ventanas y paredes, poner la calefacción a unos 20 °C y el aire acondicionado a unos 26 °C, ducharnos en lugar de bañarnos y poner la lavadora llena y en frío. Para movernos, andar, ir en bici o en transporte público ahorra mucha más energía que el coche. Y reciclar también ahorra la energía que costaría fabricar materiales nuevos.</p>`,
    },
  ],
  figura: {
    titulo: "La energía en una frase",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="La energía se transfiere, se almacena, se transforma y se conserva, pero se degrada en calor; se obtiene de fuentes renovables y no renovables">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${t(320, 34, "Energía: capacidad de producir cambios (J)", { size: 17, font: D })}
      ${[["se transfiere", "var(--pen)"], ["se almacena", "#b8860b"], ["se transforma", "var(--leaf)"], ["se conserva", "#7b3fc4"], ["se degrada", "var(--red)"]].map(([s, c], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="58" width="112" height="70" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 56, 98, s, { size: 13, color: c })}`; }).join("")}
      <rect x="40" y="150" width="270" height="56" rx="12" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>${t(175, 184, "Renovables: sol, viento, agua…", { size: 13 })}
      <rect x="330" y="150" width="270" height="56" rx="12" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2"/>${t(465, 184, "No renovables: fósiles, uranio", { size: 13 })}
    </svg>`,
  },
  video: { id: "Mk8Env3xrMI", titulo: "Tipos de Energía", canal: "FlexFlix Kids en Español", vistas: 3259337, megusta: 0, busqueda: "la energía y sus transformaciones" },
  ejemplos: [
    { enunciado: "Calcula la energía cinética de una bici con su ciclista (80 kg) que va a 5 m/s.",
      pasos: ["Ec = ½ · m · v².", "Ec = 0,5 · 80 · 5² = 0,5 · 80 · 25.", "Ec = 1000 J."],
      resultado: "1000 J = 1 kJ." },
    { enunciado: "¿Qué energía potencial tiene una maceta de 2 kg en un balcón a 10 m de altura? (g = 9,8 N/kg)",
      pasos: ["Ep = m · g · h.", "Ep = 2 · 9,8 · 10.", "Ep = 196 J."],
      resultado: "196 J." },
    { enunciado: "Un motor consume 500 J y produce 150 J de trabajo útil. ¿Cuál es su rendimiento? ¿Qué pasa con el resto?",
      pasos: ["Rendimiento = (150 / 500) · 100.", "Rendimiento = 30 %.", "Los otros 350 J se degradan, sobre todo en calor."],
      resultado: "30 %; 350 J se pierden en calor." },
  ],
  errores: [
    "Pensar que la energía se gasta y desaparece: se transforma y se degrada en calor.",
    "Confundir energía y potencia: el kWh es energía; el W (vatio) es potencia, la rapidez con que se usa la energía.",
    "Olvidar elevar la velocidad al cuadrado en la energía cinética.",
    "Creer que las «calorías» de las etiquetas son calorías: son kilocalorías.",
    "Considerar renovable el gas natural porque es «más limpio»: es un combustible fósil y se agota.",
  ],
  ejercicios: [
    { q: "Define energía y escribe su unidad en el SI.", sol: "Capacidad de un cuerpo para producir cambios. Se mide en julios (J)." },
    { q: "Pasa a julios: 3 kJ, 200 cal y 2 kWh.", sol: "3000 J; 200 · 4,18 = 836 J; 2 · 3 600 000 = 7 200 000 J." },
    { q: "Indica la forma de energía principal: una tableta de chocolate, un rayo de sol, un tren en marcha, el agua de un embalse.", sol: "Química, radiante, cinética (mecánica) y potencial (mecánica)." },
    { q: "Calcula la energía cinética de un balón de 0,5 kg a 20 m/s.", sol: "Ec = 0,5 · 0,5 · 400 = 100 J." },
    { q: "Si un coche duplica su velocidad, ¿cuánto aumenta su energía cinética?", sol: "Se multiplica por 4, porque depende del cuadrado de la velocidad." },
    { q: "Calcula la energía potencial de una persona de 50 kg en lo alto de un trampolín de 5 m.", sol: "Ep = 50 · 9,8 · 5 = 2450 J." },
    { q: "Escribe la cadena de transformaciones de energía al encender una linterna de pilas.", sol: "Química (pila) → eléctrica → luminosa y térmica (bombilla)." },
    { q: "Una bombilla consume 60 J y emite 9 J de luz. ¿Qué rendimiento tiene?", sol: "9 / 60 · 100 = 15 %." },
    { q: "Clasifica en renovables o no renovables: carbón, eólica, biomasa, uranio, gas natural, geotérmica.", sol: "Renovables: eólica, biomasa, geotérmica. No renovables: carbón, uranio, gas natural." },
    { q: "Propón cinco medidas para ahorrar energía en tu casa.", sol: "Apagar luces y aparatos en espera, usar LED, regular la calefacción a 20 °C, ducharse en vez de bañarse, poner la lavadora llena y en frío (y otras válidas)." },
  ],
  quiz: [
    { q: "La unidad de energía en el SI es el…", o: ["vatio", "julio", "newton"], a: 1, e: "El julio (J)." },
    { q: "La energía de un cuerpo por su movimiento es…", o: ["potencial", "cinética", "química"], a: 1, e: "Cinética." },
    { q: "La energía potencial gravitatoria depende de…", o: ["la velocidad", "la altura", "el color"], a: 1, e: "De la masa y la altura." },
    { q: "La energía almacenada en los alimentos es…", o: ["química", "nuclear", "sonora"], a: 0, e: "Química." },
    { q: "En un panel solar, la luz se transforma en energía…", o: ["eléctrica", "química", "nuclear"], a: 0, e: "Eléctrica." },
    { q: "La energía…", o: ["se crea", "se destruye", "se conserva"], a: 2, e: "Se conserva." },
    { q: "La energía «perdida» en las transformaciones suele ser…", o: ["luz", "calor", "sonido"], a: 1, e: "Calor disperso." },
    { q: "Una bombilla LED tiene un rendimiento…", o: ["mayor que una incandescente", "menor", "igual"], a: 0, e: "Mucho mayor." },
    { q: "¿Cuál es una fuente renovable?", o: ["Petróleo", "Viento", "Uranio"], a: 1, e: "El viento (eólica)." },
    { q: "Los combustibles fósiles emiten…", o: ["oxígeno", "CO₂", "helio"], a: 1, e: "CO₂, gas de efecto invernadero." },
  ],
  examen: [
    { q: "1 kWh equivale a…", o: ["1000 J", "3 600 000 J", "4,18 J"], a: 1, e: "3,6 millones de julios." },
    { q: "La suma de energía cinética y potencial es la energía…", o: ["térmica", "mecánica", "química"], a: 1, e: "Mecánica." },
    { q: "La biomasa es energía…", o: ["renovable", "fósil", "nuclear"], a: 0, e: "Renovable." },
  ],
  feynman: ["Qué es la energía y qué propiedades tiene", "Cómo se transforma la energía en una central hidroeléctrica", "Por qué hay que ahorrar energía si se conserva"],
  mapa: mapa("ENERGÍA", "var(--eso)", [
    ["Formas", "cinética · potencial · química…", "var(--pen)"],
    ["Principio", "se conserva · se degrada", "var(--red)"],
    ["Rendimiento", "útil / consumida · 100", "#b8860b"],
    ["Fuentes", "renovables · no renovables", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Energía", "Capacidad para producir cambios; se mide en julios (J)."],
    ["Energía cinética", "Ec = ½ · m · v²."],
    ["Energía potencial", "Ep = m · g · h."],
    ["Conservación", "La energía no se crea ni se destruye, solo se transforma."],
    ["Degradación", "En cada transformación parte de la energía se pierde como calor no útil."],
    ["Rendimiento", "Porcentaje de energía útil respecto a la consumida."],
    ["Fuentes renovables", "Solar, eólica, hidráulica, biomasa, geotérmica, mareomotriz."],
    ["Combustibles fósiles", "Carbón, petróleo y gas natural: se agotan y emiten CO₂."],
  ],
  familias: ["Leed juntos un recibo de la luz y buscad los kWh consumidos en el mes.", "Haced una ronda por casa buscando aparatos en espera y bombillas que se puedan cambiar por LED.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La energía: concepto, formas, transformaciones, conservación y degradación, rendimiento, fuentes renovables y no renovables y uso responsable (RD 217/2022, Física y Química, bloque «La energía»).",
    ideas: ["Auditoría energética del aula o del centro con propuestas de ahorro.", "Montaje de una minicentral hidroeléctrica con una botella, un molinillo y un pequeño motor.", "Debate por grupos sobre el mix energético de España con datos de Red Eléctrica."],
  },
  fuentes: [RD, wiki("Energía (física)", "Energía_(física)"), wiki("Energía renovable", "Energía_renovable")],
  revisado: REV,
};
