// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Neurona: soma con núcleo, dendritas, axón con mielina y terminales.
const neurona = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-14 -4 L -40 -26 M-40 -26 l -10 -4 M-40 -26 l -2 -12 M-12 10 L -36 30 M-36 30 l -12 0 M-36 30 l 0 12 M-2 -16 L -8 -42 M-8 -42 l -8 -6 M-8 -42 l 6 -8" stroke="var(--pen)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle r="17" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2.5"/><circle r="6" fill="var(--pen)"/>
  <path d="M17 0 H 150" stroke="var(--pen)" stroke-width="3"/>
  ${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 30}" y="-7" width="24" height="14" rx="7" fill="var(--sun)" fill-opacity=".8"/>`).join("")}
  <path d="M150 0 l 14 -12 M150 0 l 16 0 M150 0 l 14 12" stroke="var(--pen)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="165" cy="-12" r="3.5" fill="var(--pen)"/><circle cx="167" cy="0" r="3.5" fill="var(--pen)"/><circle cx="165" cy="12" r="3.5" fill="var(--pen)"/>
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La relación: sistema nervioso y sentidos",
  minutos: 55,
  objetivos: ["Explicar los pasos de la función de relación: estímulo, receptor, coordinación y respuesta", "Describir la neurona, el impulso nervioso y la sinapsis", "Diferenciar el sistema nervioso central y periférico y los actos voluntarios y reflejos", "Conocer los órganos de los sentidos y cómo cuidarlos"],
  claves: ["estímulo", "receptor", "efector", "neurona", "sinapsis", "encéfalo", "médula espinal", "acto reflejo"],
  pregunta: {
    texto: "Si tocas una sartén caliente, apartas la mano antes de sentir dolor. ¿Cómo puede el cuerpo responder antes de que te enteres?",
    respuesta: "Porque es un <mark>acto reflejo</mark>: la señal va de la piel a la <b>médula espinal</b> y vuelve directamente al músculo, sin esperar al cerebro. El aviso al cerebro llega una fracción de segundo después, y entonces <b>sientes</b> el dolor. Ese atajo te protege.",
  },
  bloques: [
    {
      html: `<h3>La función de relación</h3><p>Relacionarse es <b>captar información</b> del entorno y del propio cuerpo y <b>responder</b> a ella. Todo cambio que provoca una respuesta es un <mark>estímulo</mark>: una luz, un sonido, el frío o el hambre. Los <b>receptores</b> (en los órganos de los sentidos) lo detectan y lo convierten en impulsos nerviosos. El <b>sistema nervioso</b> recibe la información, la interpreta y decide qué hacer. Los <b>efectores</b> ejecutan la respuesta: los músculos producen movimientos y las glándulas fabrican sustancias. El sistema endocrino también participa, pero de forma más lenta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de la relación: estímulo, receptor, sistema nervioso, efector y respuesta">${BG}
        ${[["estímulo", "luz roja", "var(--sun)"], ["receptor", "ojo", "var(--inf)"], ["coordinación", "sistema nervioso", "var(--pen)"], ["efector", "músculo", "var(--red)"], ["respuesta", "frenar", "var(--leaf)"]].map(([n, e, c], i) => {
          const y = 14 + i * 32;
          return `<rect x="40" y="${y}" width="96" height="26" rx="8" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${t(88, y + 17, n, { size: 11, color: c })}${t(150, y + 17, e, { size: 10, anchor: "start", weight: 400 })}${i < 4 ? fl(88, y + 27, 88, y + 31, c, 2) : ""}`;
        }).join("")}
        ${t(246, 170, "ejemplo: un semáforo", { size: 9, anchor: "end", color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La neurona</h3><p>La <b>neurona</b> es la célula del tejido nervioso, especializada en transmitir impulsos. Tiene un <b>cuerpo celular</b> con el núcleo, unas prolongaciones cortas y ramificadas, las <mark>dendritas</mark>, que reciben señales, y una prolongación larga, el <mark>axón</mark>, que las envía. Muchos axones están envueltos en <b>mielina</b>, una capa de grasa que actúa como el plástico de un cable y acelera el impulso. Algunos axones miden más de un metro, como los que van de la médula a los dedos del pie. Tenemos unos 86.000 millones de neuronas solo en el encéfalo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Neurona con dendritas, cuerpo celular con núcleo, axón con vaina de mielina y terminales">${BG}
        ${neurona(64, 90, 1)}
        ${t(20, 30, "dendritas", { size: 11, anchor: "start", color: "var(--pen)" })}${t(64, 140, "cuerpo celular", { size: 11 })}
        ${t(140, 70, "axón con mielina", { size: 11, color: "#b8860b" })}${t(232, 128, "terminales", { size: 10, anchor: "end", color: "var(--pen)" })}
        ${fl(40, 166, 220, 166, "var(--red)")}${t(130, 160, "sentido del impulso", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>El impulso nervioso y la sinapsis</h3><p>El <b>impulso nervioso</b> es una señal eléctrica que recorre la neurona desde las dendritas hasta el final del axón, a una velocidad de hasta 120 metros por segundo. Pero las neuronas no se tocan. Entre una y otra hay un espacio diminuto, y la conexión se llama <mark>sinapsis</mark>. Cuando el impulso llega al final del axón, se liberan unas sustancias químicas, los <b>neurotransmisores</b>, que cruzan el espacio y activan la neurona siguiente. Muchas drogas y medicamentos actúan precisamente alterando los neurotransmisores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sinapsis: el final de un axón libera neurotransmisores que cruzan un espacio hasta la dendrita de otra neurona">${BG}
        <path d="M14 70 H 90 Q 120 70 120 90 Q 120 110 90 110 H 14" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M246 60 H 170 Q 146 60 146 90 Q 146 120 170 120 H 246" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        ${[[98, 82], [104, 96], [92, 98]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="var(--red)" stroke-width="1.5"/>`).join("")}
        ${[[128, 80], [132, 92], [126, 100], [136, 86], [130, 106]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--red)"/>`).join("")}
        ${t(52, 54, "axón", { size: 11, color: "var(--pen)" })}${t(206, 46, "dendrita", { size: 11, color: "var(--leaf)" })}
        ${t(130, 146, "neurotransmisores", { size: 11, color: "var(--red)" })}<path d="M130 136 V 112" stroke="var(--muted)" stroke-width="1"/>
        ${fl(24, 90, 70, 90, "var(--muted)")}</svg>`,
      video: { id: "4MabFuyhZe4", titulo: "La SINAPSIS [Transmisión de información entre neuronas]", canal: "Nutrimente", vistas: 457966 },
    },
    {
      html: `<h3>La organización del sistema nervioso</h3><p>El sistema nervioso tiene dos partes. El <mark>sistema nervioso central</mark> (SNC) recibe la información, la procesa y elabora las respuestas; está protegido por huesos (cráneo y columna), por tres membranas, las meninges, y por un líquido que amortigua los golpes. El <mark>sistema nervioso periférico</mark> (SNP) está formado por los <b>nervios</b>, haces de axones que conectan el SNC con todo el cuerpo.</p>${tabla(["Parte", "Órganos", "Función"], [["SNC", "encéfalo y médula espinal", "procesar y decidir"], ["SNP somático", "nervios hacia músculos esqueléticos", "movimientos voluntarios"], ["SNP autónomo", "nervios hacia vísceras", "latido, digestión, sudor (involuntario)"]])}`,
    },
    {
      html: `<h3>El encéfalo</h3><p>El <b>encéfalo</b> está dentro del cráneo y tiene tres partes. El <mark>cerebro</mark> es la más grande; su superficie, la corteza, está llena de pliegues y dividida en dos hemisferios. Allí se interpretan los sentidos, se deciden los movimientos voluntarios y residen la memoria, el lenguaje y el razonamiento. El <mark>cerebelo</mark>, detrás y debajo, coordina los movimientos y mantiene el equilibrio: gracias a él no te caes al andar en bici. El <mark>tronco encefálico</mark> une el encéfalo con la médula y controla funciones vitales automáticas, como la respiración y el ritmo del corazón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Encéfalo de perfil: cerebro, cerebelo y tronco encefálico que continúa en la médula espinal">${BG}
        <path d="M40 100 Q 30 40 100 26 Q 170 16 204 62 Q 214 86 196 100 Q 170 108 150 104 Q 100 116 60 112 Q 44 110 40 100 Z" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M70 44 q 10 10 0 20 M100 34 q 10 14 0 26 M130 32 q 12 14 0 30 M160 40 q 10 12 0 24 M86 80 q 20 -6 40 4 M140 78 q 20 -8 40 4" stroke="var(--red)" stroke-width="1.8" fill="none" stroke-opacity=".7"/>
        <path d="M158 106 Q 200 102 206 122 Q 204 140 174 140 Q 150 138 152 120 Z" fill="var(--inf)" fill-opacity=".45" stroke="var(--inf)" stroke-width="2"/>
        <path d="M138 106 Q 136 130 142 150 V 176 H 154 V 150 Q 152 128 156 108" fill="var(--pen)" fill-opacity=".45" stroke="var(--pen)" stroke-width="2"/>
        ${t(110, 74, "cerebro", { size: 13, color: "var(--red)" })}${t(250, 160, "cerebelo", { size: 11, anchor: "end", color: "var(--inf)" })}<path d="M222 150 L 200 136" stroke="var(--muted)" stroke-width="1"/>
        ${t(130, 148, "tronco", { size: 11, anchor: "end", color: "var(--pen)" })}${t(166, 172, "médula", { size: 10, anchor: "start", color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>La médula espinal y los actos reflejos</h3><p>La <b>médula espinal</b> es un cordón de tejido nervioso que recorre el interior de la columna vertebral. Tiene dos funciones: <b>conducir</b> los impulsos entre el encéfalo y los nervios, y <b>elaborar respuestas rápidas</b>, los <mark>actos reflejos</mark>. En un reflejo, la información va del receptor a la médula por una neurona sensitiva; allí una neurona de asociación la pasa a una neurona motora, que activa el músculo. Este camino se llama <b>arco reflejo</b>. Son reflejos retirar la mano del fuego, parpadear o el golpe en la rodilla que hace el médico.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Arco reflejo: receptor en la mano, neurona sensitiva hasta la médula, neurona de asociación, neurona motora y músculo">${BG}
        <ellipse cx="200" cy="60" rx="30" ry="36" fill="var(--muted)" fill-opacity=".15" stroke="var(--muted)" stroke-width="2"/><path d="M186 40 Q 200 60 186 80 M214 40 Q 200 60 214 80" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <path d="M30 140 Q 100 140 150 104 Q 176 84 196 60" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M204 62 Q 200 90 170 110 Q 130 136 60 156" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M196 60 H 204" stroke="var(--leaf)" stroke-width="4"/>
        <circle cx="26" cy="140" r="8" fill="var(--sun)"/><rect x="40" y="148" width="40" height="18" rx="8" fill="var(--red)" fill-opacity=".5"/>
        ${t(26, 124, "receptor", { size: 10, color: "#b8860b" })}${t(96, 174, "músculo", { size: 10, color: "var(--red)" })}
        ${t(200, 112, "médula", { size: 11, color: "var(--muted)" })}${t(76, 124, "sensitiva", { size: 10, color: "var(--pen)" })}${t(160, 152, "motora", { size: 10, color: "var(--red)" })}${t(200, 18, "asociación", { size: 10, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Los receptores sensoriales</h3><p>Los <b>receptores</b> son células o terminaciones nerviosas que captan un tipo concreto de estímulo. Se clasifican según lo que detectan, y muchos se agrupan en los <mark>órganos de los sentidos</mark>. También hay receptores internos que nos informan de la posición de los músculos, del hambre o de la sed.</p>${tabla(["Receptor", "Estímulo", "Dónde"], [["Fotorreceptores", "luz", "retina del ojo"], ["Mecanorreceptores", "sonido, presión, movimiento", "oído, piel"], ["Quimiorreceptores", "sustancias químicas", "lengua y nariz"], ["Termorreceptores", "calor y frío", "piel"], ["Nociceptores", "daño (dolor)", "casi todo el cuerpo"]])}`,
    },
    {
      html: `<h3>El ojo y la vista</h3><p>La luz entra en el ojo por la <b>córnea</b>, transparente, y atraviesa la <b>pupila</b>, un orificio cuyo tamaño regula el <b>iris</b>, la parte de color. Después, el <mark>cristalino</mark>, una lente flexible, enfoca la imagen sobre la <mark>retina</mark>, al fondo del ojo. En la retina hay dos tipos de fotorreceptores: los <b>conos</b>, que distinguen los colores y necesitan mucha luz, y los <b>bastones</b>, que funcionan con poca luz pero solo en blanco y negro. La imagen llega invertida, y el <b>nervio óptico</b> la lleva al cerebro, que la pone del derecho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte del ojo: córnea, iris, pupila, cristalino, retina y nervio óptico, con los rayos de luz enfocados en la retina">${BG}
        <circle cx="140" cy="90" r="60" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M118 90 m 70 -38 A 60 60 0 0 1 200 92 A 60 60 0 0 1 188 128" stroke="var(--red)" stroke-width="5" fill="none"/>
        <path d="M84 62 Q 70 90 84 118" stroke="var(--inf)" stroke-width="3" fill="none"/>
        <path d="M90 66 V 80 M90 100 V 114" stroke="#7a4a2b" stroke-width="6"/>
        <ellipse cx="104" cy="90" rx="8" ry="18" fill="var(--water)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        <path d="M198 96 L 246 108" stroke="var(--sun)" stroke-width="7"/>
        <path d="M14 70 L 104 82 L 199 90 M14 110 L 104 98 L 199 90" stroke="var(--sun)" stroke-width="1.8" fill="none"/>
        ${t(70, 46, "córnea", { size: 10, color: "var(--inf)" })}${t(60, 136, "iris", { size: 10, color: "#7a4a2b" })}<path d="M66 130 L 88 112" stroke="var(--muted)" stroke-width="1"/>${t(104, 170, "cristalino", { size: 10, color: "var(--inf)" })}<path d="M104 160 V 110" stroke="var(--muted)" stroke-width="1"/>
        ${t(210, 40, "retina", { size: 10, color: "var(--red)" })}${t(250, 140, "nervio óptico", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
      video: { id: "FbZdkD2ux54", titulo: "Cómo funciona el ojo humano (Animación)", canal: "Thomas Schwenke ES", vistas: 357247 },
    },
    {
      html: `<h3>El oído: audición y equilibrio</h3><p>El oído tiene tres partes. El <b>oído externo</b>, con la oreja y el conducto auditivo, recoge el sonido hasta el <mark>tímpano</mark>, una membrana que vibra. En el <b>oído medio</b>, tres huesecillos (martillo, yunque y estribo) amplifican esas vibraciones. En el <b>oído interno</b>, la <mark>cóclea</mark> o caracol contiene un líquido y células con pelos que convierten las vibraciones en impulsos que van al cerebro por el nervio auditivo. El oído interno también tiene los <b>conductos semicirculares</b>, que detectan los giros de la cabeza y nos ayudan a mantener el equilibrio.</p>`,
    },
    {
      html: `<h3>Olfato, gusto y tacto</h3><p>El <b>olfato</b> y el <b>gusto</b> son sentidos químicos. En la parte alta de las fosas nasales, la pituitaria amarilla tiene quimiorreceptores que distinguen miles de olores. En la lengua, las <b>papilas gustativas</b> detectan cinco sabores básicos: dulce, salado, ácido, amargo y umami. Por eso, con la nariz tapada, la comida «no sabe a nada»: gran parte del sabor es olor. El <b>tacto</b> está repartido por toda la piel, con receptores de presión, temperatura y dolor. Hay muchos más en los dedos y en los labios que en la espalda.</p>`,
    },
    {
      html: `<h3>Cuidar el sistema nervioso y los sentidos</h3><p>El <b>alcohol</b> y otras <b>drogas</b> alteran los neurotransmisores: ralentizan los reflejos, dañan la memoria y crean adicción. El cerebro adolescente todavía está madurando, por eso es especialmente sensible. <mark>Dormir</mark> de 8 a 10 horas es imprescindible para fijar lo aprendido. Hay que usar casco en la bici y en la moto para proteger el encéfalo y la médula. Los defectos de la vista más comunes son la <b>miopía</b> (no se ve bien de lejos) y la <b>hipermetropía</b> (de cerca); se corrigen con gafas. Escuchar música muy alta con auriculares puede causar una sordera que no tiene cura.</p>`,
    },
  ],
  figura: {
    titulo: "Acto voluntario y acto reflejo",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Acto voluntario: receptor, nervio, médula, cerebro decide, médula, nervio, músculo. Acto reflejo: receptor, médula, músculo, sin pasar por el cerebro">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${t(30, 46, "Voluntario (lento, consciente)", { size: 16, anchor: "start", color: "var(--pen)", font: D })}
      ${["receptor", "nervio sensitivo", "médula", "CEREBRO", "médula", "nervio motor", "músculo"].map((n, i) => { const x = 30 + i * 86; return `<rect x="${x}" y="62" width="78" height="44" rx="8" fill="${i === 3 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i === 3 ? 0.2 : 1}" stroke="var(--pen)" stroke-width="2"/>${t(x + 39, 89, n, { size: n.length > 10 ? 10 : 12 })}${i < 6 ? fl(x + 79, 84, x + 85, 84, "var(--pen)", 2) : ""}`; }).join("")}
      ${t(30, 156, "Reflejo (rápido, automático)", { size: 16, anchor: "start", color: "var(--red)", font: D })}
      ${["receptor", "nervio sensitivo", "MÉDULA", "nervio motor", "músculo"].map((n, i) => { const x = 30 + i * 120; return `<rect x="${x}" y="172" width="108" height="44" rx="8" fill="${i === 2 ? "var(--red)" : "var(--card)"}" fill-opacity="${i === 2 ? 0.2 : 1}" stroke="var(--red)" stroke-width="2"/>${t(x + 54, 199, n, { size: 13 })}${i < 4 ? fl(x + 109, 194, x + 119, 194, "var(--red)", 2) : ""}`; }).join("")}
      ${t(610, 244, "el cerebro se entera después", { size: 13, anchor: "end", color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "L9blnjOdf44", titulo: "El SISTEMA NERVIOSO explicado FÁCIL", canal: "La Hiperactina", vistas: 2087187, megusta: 0, busqueda: "sistema nervioso neurona sinapsis" },
  ejemplos: [
    { enunciado: "Suena el despertador y lo apagas. Identifica el estímulo, el receptor, el centro coordinador, el efector y la respuesta.",
      pasos: ["Estímulo: el sonido del despertador.", "Receptor: las células del oído interno (cóclea).", "Centro coordinador: el cerebro, que reconoce el sonido y decide apagarlo.", "Efector: los músculos del brazo y la mano.", "Respuesta: apagar el despertador. Es un acto voluntario."],
      resultado: "sonido → oído → cerebro → músculos → apagar." },
    { enunciado: "Un impulso viaja a 100 m/s por un axón de 1 m, desde la médula hasta el pie. ¿Cuánto tarda?",
      pasos: ["Tiempo = distancia / velocidad.", "t = 1 m / 100 m/s = 0,01 s.", "Son 10 milésimas de segundo."],
      resultado: "0,01 s (10 ms)." },
    { enunciado: "Una persona sufre una lesión en el cerebelo tras un golpe. ¿Qué síntomas esperarías?",
      pasos: ["El cerebelo coordina los movimientos y mantiene el equilibrio.", "Si se daña, los movimientos serán torpes y descoordinados.", "Tendrá dificultad para andar en línea recta y mantener el equilibrio."],
      resultado: "pérdida de equilibrio y movimientos descoordinados." },
  ],
  errores: [
    "Pensar que en un acto reflejo interviene el cerebro: lo elabora la médula espinal.",
    "Confundir cerebro y encéfalo: el cerebro es solo una parte del encéfalo.",
    "Creer que las neuronas se tocan: se comunican a través de la sinapsis con neurotransmisores.",
    "Confundir dendritas y axón: las dendritas reciben y el axón envía.",
    "Decir que los ojos ven los colores con los bastones: los colores los captan los conos.",
  ],
  ejercicios: [
    { q: "Define estímulo, receptor y efector, con un ejemplo de cada uno.", sol: "Estímulo: cambio que provoca una respuesta (un pinchazo). Receptor: estructura que lo detecta (receptores de dolor de la piel). Efector: órgano que responde (músculo del brazo)." },
    { q: "Dibuja una neurona y señala dendritas, cuerpo celular, núcleo, axón y mielina.", sol: "Ver el dibujo del bloque de la neurona: el impulso entra por las dendritas y sale por el axón." },
    { q: "¿Qué es la sinapsis y qué papel tienen los neurotransmisores?", sol: "Es la zona de comunicación entre dos neuronas. Los neurotransmisores son sustancias químicas que libera el axón y que activan la neurona siguiente." },
    { q: "¿Qué partes forman el sistema nervioso central y cómo se protegen?", sol: "El encéfalo y la médula espinal. Los protegen los huesos (cráneo y vértebras), las meninges y el líquido cefalorraquídeo." },
    { q: "Indica qué parte del encéfalo controla: a) el equilibrio; b) la respiración; c) el lenguaje.", sol: "a) Cerebelo. b) Tronco encefálico. c) Cerebro." },
    { q: "Describe el arco reflejo de retirar la mano del fuego.", sol: "Los receptores de la piel detectan el calor; la neurona sensitiva lleva el impulso a la médula; una neurona de asociación lo pasa a la neurona motora; esta activa los músculos y la mano se aparta." },
    { q: "Clasifica los receptores: retina, papilas gustativas, cóclea, receptores de calor de la piel.", sol: "Retina: fotorreceptores. Papilas: quimiorreceptores. Cóclea: mecanorreceptores. Calor: termorreceptores." },
    { q: "Ordena el camino de la luz en el ojo.", sol: "Córnea → pupila (regulada por el iris) → cristalino → humor vítreo → retina → nervio óptico → cerebro." },
    { q: "¿Por qué nos mareamos al girar muchas veces sobre nosotros mismos?", sol: "El líquido de los conductos semicirculares del oído interno sigue moviéndose cuando paramos y envía al cerebro información de giro que no coincide con lo que vemos." },
    { q: "Explica por qué el alcohol es peligroso al conducir.", sol: "Altera los neurotransmisores, alarga el tiempo de reacción, empeora la coordinación del cerebelo y da una falsa sensación de seguridad." },
  ],
  quiz: [
    { q: "La célula del sistema nervioso es…", o: ["la nefrona", "la neurona", "el glóbulo blanco"], a: 1, e: "La neurona." },
    { q: "Las dendritas…", o: ["reciben impulsos", "envían impulsos", "producen mielina"], a: 0, e: "Reciben señales." },
    { q: "La mielina sirve para…", o: ["frenar el impulso", "acelerar el impulso", "alimentar la neurona"], a: 1, e: "Aísla y acelera." },
    { q: "La conexión entre dos neuronas se llama…", o: ["sinapsis", "nervio", "reflejo"], a: 0, e: "Sinapsis." },
    { q: "El equilibrio lo coordina…", o: ["el cerebro", "el cerebelo", "la médula"], a: 1, e: "El cerebelo." },
    { q: "Los actos reflejos los elabora…", o: ["la médula espinal", "la corteza cerebral", "el corazón"], a: 0, e: "La médula espinal." },
    { q: "Los nervios forman parte del…", o: ["SNC", "SNP", "sistema endocrino"], a: 1, e: "Del sistema nervioso periférico." },
    { q: "Los colores los captan…", o: ["los bastones", "los conos", "el iris"], a: 1, e: "Los conos de la retina." },
    { q: "El tímpano está en…", o: ["el oído externo/medio", "la nariz", "el ojo"], a: 0, e: "Separa el oído externo del medio." },
    { q: "Los sabores básicos son…", o: ["3", "5", "10"], a: 1, e: "Dulce, salado, ácido, amargo y umami." },
  ],
  examen: [
    { q: "El tronco encefálico controla…", o: ["la memoria", "la respiración y el latido", "el equilibrio"], a: 1, e: "Funciones vitales automáticas." },
    { q: "La lente que enfoca la imagen en la retina es…", o: ["la córnea", "el cristalino", "la pupila"], a: 1, e: "El cristalino." },
    { q: "Un músculo que responde a una orden nerviosa es…", o: ["un receptor", "un efector", "un estímulo"], a: 1, e: "Un efector." },
  ],
  feynman: ["Los pasos de la función de relación con un ejemplo", "Cómo viaja un impulso por una neurona y cómo pasa a la siguiente", "Qué diferencia hay entre un acto voluntario y uno reflejo"],
  mapa: mapa("RELACIÓN", "var(--eso)", [
    ["Neurona", "dendritas · axón · sinapsis", "var(--pen)"],
    ["SNC", "encéfalo · médula espinal", "var(--red)"],
    ["SNP", "nervios · somático · autónomo", "var(--leaf)"],
    ["Sentidos", "vista · oído · olfato · gusto · tacto", "var(--inf)"],
  ], 280),
  tarjetas: [
    ["Estímulo", "Cambio del medio o del cuerpo que provoca una respuesta."],
    ["Neurona", "Célula que transmite impulsos: dendritas, cuerpo y axón."],
    ["Sinapsis", "Comunicación entre neuronas mediante neurotransmisores."],
    ["SNC", "Encéfalo y médula espinal."],
    ["Cerebelo", "Coordina los movimientos y el equilibrio."],
    ["Acto reflejo", "Respuesta rápida e involuntaria elaborada por la médula."],
    ["Conos y bastones", "Conos: colores, con mucha luz. Bastones: poca luz, sin color."],
    ["Cóclea", "Parte del oído interno que convierte el sonido en impulsos."],
  ],
  familias: ["Haced la prueba del tiempo de reacción: dejad caer una regla y medid a qué altura la atrapa.", "Probad a comer con la nariz tapada y comentad cuánto sabor es en realidad olor.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: la función de relación, receptores, sistema nervioso, neurona y sinapsis, actos voluntarios y reflejos, órganos de los sentidos y hábitos saludables (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Medida del tiempo de reacción con una regla y estudio estadístico de la clase.", "Mapa de sensibilidad táctil con un compás de dos puntas.", "Disección de ojo de vaca o de cerdo para observar cristalino y retina."],
  },
  fuentes: [RD, wiki("Sistema nervioso", "Sistema_nervioso"), wiki("Arco reflejo", "Arco_reflejo")],
  revisado: "2026-11-12",
};
