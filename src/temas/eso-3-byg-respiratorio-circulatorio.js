// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Corazón en corte: AD, AI, VD, VI (sangre pobre en O2 en azul y rica en rojo).
const corazon = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-50 -30 Q -52 -60 -22 -58 Q -4 -56 0 -40 Q 4 -56 22 -58 Q 52 -60 50 -30 Q 48 10 0 60 Q -48 10 -50 -30 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M-46 -28 Q -46 -52 -22 -52 Q -6 -50 -4 -30 V -14 H -46 Z" fill="var(--pen)" fill-opacity=".55"/>
  <path d="M46 -28 Q 46 -52 22 -52 Q 6 -50 4 -30 V -14 H 46 Z" fill="var(--red)" fill-opacity=".55"/>
  <path d="M-46 -8 H -4 V 48 Q -40 14 -46 -8 Z" fill="var(--pen)" fill-opacity=".8"/>
  <path d="M46 -8 H 4 V 48 Q 40 14 46 -8 Z" fill="var(--red)" fill-opacity=".8"/>
  <path d="M0 -40 V 56" stroke="var(--ink)" stroke-width="3"/><path d="M-46 -11 H -4 M4 -11 H 46" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 3"/>
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "Los aparatos respiratorio y circulatorio",
  minutos: 55,
  objetivos: ["Distinguir la respiración pulmonar de la respiración celular", "Describir las vías respiratorias, los pulmones y el intercambio de gases", "Explicar la composición de la sangre, los vasos y el funcionamiento del corazón", "Interpretar la circulación doble y cerrada y adoptar hábitos cardiosaludables"],
  claves: ["alvéolo", "intercambio de gases", "diafragma", "plasma", "arteria", "vena", "capilar", "circulación doble"],
  pregunta: {
    texto: "Respiramos para conseguir oxígeno, pero ¿adónde va ese oxígeno y para qué lo usa el cuerpo?",
    respuesta: "Los pulmones lo pasan a la <b>sangre</b>, el corazón lo bombea a todo el cuerpo y cada <b>célula</b> lo usa en sus <mark>mitocondrias</mark> para «quemar» la glucosa y sacar energía. El residuo, el CO₂, hace el camino al revés y sale al espirar. Los dos aparatos trabajan como un equipo.",
  },
  bloques: [
    {
      html: `<h3>Dos respiraciones distintas</h3><p>En biología, «respiración» tiene dos significados. La <b>respiración pulmonar</b> o ventilación es lo que hacemos con los pulmones: tomar aire con oxígeno (O₂) y expulsar aire con dióxido de carbono (CO₂). La <mark>respiración celular</mark> ocurre dentro de las mitocondrias de cada célula: la glucosa reacciona con el oxígeno y libera la energía que la célula necesita.</p><p><b>glucosa + oxígeno → CO₂ + agua + energía</b></p><p>El aparato respiratorio y el circulatorio existen para que esa reacción no se detenga nunca.</p>`,
    },
    {
      html: `<h3>Las vías respiratorias</h3><p>El aire entra por las <b>fosas nasales</b>, donde los pelos y el moco retienen el polvo y el aire se calienta y se humedece. Después pasa por la <b>faringe</b>, la <b>laringe</b> (donde están las cuerdas vocales) y la <b>tráquea</b>, un tubo reforzado con anillos de cartílago para que no se cierre. La tráquea se divide en dos <mark>bronquios</mark>, uno para cada pulmón, que se ramifican en tubos cada vez más finos, los <mark>bronquiolos</mark>, como las ramas de un árbol puesto boca abajo. Al final de cada bronquiolo hay racimos de alvéolos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vías respiratorias: fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y pulmones">${BG}
        <path d="M70 120 Q 52 60 96 52 Q 108 52 112 64 V 156 Q 74 162 70 120 Z M190 120 Q 208 60 164 52 Q 152 52 148 64 V 156 Q 186 162 190 120 Z" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>
        <path d="M130 14 V 64 M130 64 Q 120 72 112 84 M130 64 Q 140 72 148 84" stroke="var(--inf)" stroke-width="7" fill="none" stroke-linecap="round"/>
        ${[0, 1, 2, 3, 4].map((i) => `<path d="M125 ${20 + i * 9} H 135" stroke="#fff" stroke-width="2"/>`).join("")}
        <path d="M112 84 L 98 104 M112 84 L 108 112 M98 104 L 86 118 M98 104 L 96 126 M148 84 L 162 104 M148 84 L 152 112 M162 104 L 174 118 M162 104 L 164 126" stroke="var(--inf)" stroke-width="3" fill="none"/>
        ${t(230, 30, "tráquea", { size: 11, anchor: "end" })}<path d="M190 27 H 138" stroke="var(--muted)" stroke-width="1"/>
        ${t(230, 80, "bronquio", { size: 11, anchor: "end" })}<path d="M182 77 H 152" stroke="var(--muted)" stroke-width="1"/>
        ${t(248, 160, "bronquiolos", { size: 11, anchor: "end" })}<path d="M200 152 L 168 124" stroke="var(--muted)" stroke-width="1"/>${t(130, 174, "pulmones", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Los alvéolos y el intercambio de gases</h3><p>Los <b>alvéolos pulmonares</b> son saquitos microscópicos con una pared finísima, de una sola capa de células, rodeados de <b>capilares</b> sanguíneos. Tenemos unos 300 millones, que juntos ocupan la superficie de una pista de tenis. Allí ocurre el <mark>intercambio de gases</mark> por <b>difusión</b>: cada gas pasa de donde hay más concentración a donde hay menos. El O₂ del aire alveolar pasa a la sangre y el CO₂ de la sangre pasa al alvéolo para ser expulsado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Alvéolo rodeado por un capilar: el oxígeno pasa a la sangre y el dióxido de carbono sale al alvéolo">${BG}
        <circle cx="120" cy="88" r="56" fill="var(--water)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2.5"/>
        <path d="M30 150 Q 50 30 120 26 Q 194 30 214 150" stroke-width="14" fill="none" stroke="url(#gc)"/>
        <defs><linearGradient id="gc" x1="0" x2="1"><stop offset="0" stop-color="var(--pen)"/><stop offset="1" stop-color="var(--red)"/></linearGradient></defs>
        ${fl(112, 60, 112, 34, "var(--red)")}${t(100, 74, "O₂", { size: 13, color: "var(--red)" })}
        ${fl(140, 34, 140, 60, "var(--pen)")}${t(152, 74, "CO₂", { size: 13, color: "var(--pen)" })}
        ${t(120, 112, "alvéolo", { size: 12, color: "var(--inf)" })}${t(30, 170, "sangre pobre en O₂", { size: 10, anchor: "start", color: "var(--pen)" })}${t(240, 170, "rica en O₂", { size: 10, anchor: "end", color: "var(--red)" })}</svg>`,
      video: { id: "bmc0dIor6LA", titulo: "Intercambio de gases en los alvéolos", canal: "unProfesor", vistas: 414642 },
    },
    {
      html: `<h3>La ventilación pulmonar</h3><p>Los pulmones no tienen músculos: se llenan y se vacían gracias al <mark>diafragma</mark>, un músculo en forma de cúpula bajo los pulmones, y a los músculos intercostales. En la <b>inspiración</b>, el diafragma se contrae y baja, las costillas suben, la caja torácica se agranda y el aire entra. En la <b>espiración</b>, el diafragma se relaja y sube, el volumen disminuye y el aire sale. En reposo respiramos unas 12 a 16 veces por minuto y movemos medio litro de aire en cada respiración.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Inspiración con el diafragma bajado y pulmones grandes; espiración con el diafragma subido y pulmones pequeños">${BG}
        ${[[70, "inspiración", 1.1, 128, "var(--leaf)"], [190, "espiración", 0.85, 104, "var(--red)"]].map(([x, n, s, d, c]) => `<g transform="translate(${x} 90) scale(${s})"><path d="M-6 -10 Q -40 -40 -40 10 Q -40 40 -6 36 Z M6 -10 Q 40 -40 40 10 Q 40 40 6 36 Z" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/><path d="M0 -60 V -10" stroke="var(--inf)" stroke-width="5"/></g><path d="M${x - 50} ${d} Q ${x} ${d - (x < 100 ? 6 : 26)} ${x + 50} ${d}" stroke="var(--ink)" stroke-width="4" fill="none"/>${t(x, 162, n, { size: 12, color: c })}`).join("")}
        ${fl(70, 18, 70, 34, "var(--leaf)")}${fl(190, 34, 190, 18, "var(--red)")}${t(130, 146, "diafragma", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La sangre</h3><p>El aparato circulatorio transporta sustancias por todo el cuerpo. Está formado por la <b>sangre</b>, los <b>vasos sanguíneos</b> y el <b>corazón</b>. Un adulto tiene unos 5 litros de sangre. Su parte líquida, el <mark>plasma</mark> (55 %), es agua con nutrientes, sales, hormonas y desechos disueltos. El resto son células:</p>${tabla(["Componente", "Cómo es", "Función"], [["Glóbulos rojos (eritrocitos)", "discos sin núcleo, con hemoglobina", "transportar O₂ y parte del CO₂"], ["Glóbulos blancos (leucocitos)", "con núcleo, de varios tipos", "defender de infecciones"], ["Plaquetas", "fragmentos de células", "coagular la sangre en las heridas"]])}`,
    },
    {
      html: `<h3>Los vasos sanguíneos</h3><p>Hay tres tipos de vasos. Las <b>arterias</b> llevan la sangre <mark>desde el corazón</mark> hacia los órganos; tienen paredes gruesas y elásticas porque soportan mucha presión. Las <b>venas</b> llevan la sangre <mark>hacia el corazón</mark>; sus paredes son más finas y tienen <b>válvulas</b> que impiden que la sangre retroceda, sobre todo en las piernas. Los <b>capilares</b> son finísimos, con una sola capa de células, y unen arterias y venas: en ellos se produce el intercambio de sustancias entre la sangre y las células.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de una arteria de pared gruesa, una vena de pared fina con válvula y un capilar de una sola capa">${BG}
        <circle cx="50" cy="76" r="34" fill="var(--red)" fill-opacity=".8"/><circle cx="50" cy="76" r="18" fill="var(--paper)"/>
        <ellipse cx="130" cy="76" rx="36" ry="28" fill="var(--pen)" fill-opacity=".7"/><ellipse cx="130" cy="76" rx="29" ry="21" fill="var(--paper)"/><path d="M108 66 Q 130 84 152 66" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <circle cx="210" cy="76" r="12" fill="#a05ad0" fill-opacity=".8"/><circle cx="210" cy="76" r="9" fill="var(--paper)"/>
        ${t(50, 134, "arteria", { size: 12, color: "var(--red)" })}${t(50, 150, "pared gruesa", { size: 10, weight: 400 })}
        ${t(130, 134, "vena", { size: 12, color: "var(--pen)" })}${t(130, 150, "con válvulas", { size: 10, weight: 400 })}
        ${t(210, 134, "capilar", { size: 12, color: "#7a3ab0" })}${t(210, 150, "una capa", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>El corazón</h3><p>El <b>corazón</b> es un músculo hueco del tamaño de un puño, situado entre los pulmones. Tiene <mark>cuatro cavidades</mark>: dos <b>aurículas</b> arriba, que reciben la sangre de las venas, y dos <b>ventrículos</b> abajo, que la expulsan por las arterias. Un tabique separa el lado derecho, con sangre pobre en oxígeno, del izquierdo, con sangre rica en oxígeno. Entre aurículas y ventrículos, y a la salida de las arterias, hay <b>válvulas</b> que hacen que la sangre circule en un solo sentido. Su cierre produce el sonido del latido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corazón en corte con aurícula y ventrículo derechos en azul y aurícula y ventrículo izquierdos en rojo">${BG}
        ${corazon(130, 92, 1.05)}
        ${t(14, 46, "aurícula", { size: 10, anchor: "start", color: "var(--pen)" })}${t(14, 58, "derecha", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${t(246, 46, "aurícula", { size: 10, anchor: "end", color: "var(--red)" })}${t(246, 58, "izquierda", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(14, 130, "ventrículo", { size: 10, anchor: "start", color: "var(--pen)" })}${t(14, 142, "derecho", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${t(246, 130, "ventrículo", { size: 10, anchor: "end", color: "var(--red)" })}${t(246, 142, "izquierdo", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(130, 176, "el lado derecho del corazón queda a tu izquierda", { size: 9, color: "var(--muted)", weight: 400 })}</svg>`,
      video: { id: "acwdt48G4Gw", titulo: "Cómo funciona el corazón (Animación)", canal: "Thomas Schwenke ES", vistas: 1286563 },
    },
    {
      html: `<h3>El latido, el pulso y la tensión</h3><p>Cada latido tiene dos fases. En la <b>sístole</b>, el músculo se contrae y empuja la sangre; en la <b>diástole</b>, se relaja y las cavidades se llenan. En reposo, el corazón late entre <mark>60 y 100 veces por minuto</mark>, y más deprisa al hacer ejercicio. Cada latido produce una onda en las arterias, el <b>pulso</b>, que se nota en la muñeca o el cuello. La <b>tensión arterial</b> es la fuerza de la sangre contra las paredes de las arterias; se dan dos cifras, la máxima (sístole) y la mínima (diástole), por ejemplo 12/8.</p>`,
    },
    {
      html: `<h3>Una circulación doble y cerrada</h3><p>La circulación humana es <b>cerrada</b>, porque la sangre siempre va dentro de vasos, y <b>doble</b>, porque pasa dos veces por el corazón en cada vuelta. En la <mark>circulación menor o pulmonar</mark>, el ventrículo derecho envía sangre pobre en O₂ a los pulmones por la arteria pulmonar; allí se oxigena y vuelve a la aurícula izquierda por las venas pulmonares. En la <mark>circulación mayor o general</mark>, el ventrículo izquierdo la impulsa por la aorta a todo el cuerpo y vuelve, pobre en O₂, a la aurícula derecha por las venas cavas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la circulación doble: circuito pulmonar arriba y circuito general abajo">${BG}
        <rect x="90" y="70" width="80" height="44" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M130 70 V 114" stroke="var(--ink)" stroke-width="2"/>
        ${t(110, 96, "D", { size: 13, color: "var(--pen)" })}${t(150, 96, "I", { size: 13, color: "var(--red)" })}
        <rect x="92" y="14" width="76" height="26" rx="8" fill="var(--water)" fill-opacity=".25" stroke="var(--inf)" stroke-width="2"/>${t(130, 31, "pulmones", { size: 11, color: "var(--inf)" })}
        <rect x="82" y="142" width="96" height="26" rx="8" fill="var(--sun)" fill-opacity=".25" stroke="#b8860b" stroke-width="2"/>${t(130, 159, "resto del cuerpo", { size: 11, color: "#8a6a0b" })}
        <path d="M100 70 Q 60 54 92 30" stroke="var(--pen)" stroke-width="3" fill="none"/><path d="M168 30 Q 200 54 160 70" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M170 104 Q 236 120 178 152" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M82 152 Q 24 120 90 104" stroke="var(--pen)" stroke-width="3" fill="none"/>
        ${t(224, 58, "menor", { size: 10, color: "var(--muted)" })}${t(232, 136, "mayor", { size: 10, color: "var(--muted)" })}
        ${t(36, 50, "pobre", { size: 9, color: "var(--pen)" })}${t(36, 62, "en O₂", { size: 9, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>El sistema linfático</h3><p>No todo el líquido que sale de los capilares vuelve a ellos. El sobrante se recoge en otra red de vasos, el <b>sistema linfático</b>, y forma la <b>linfa</b>, un líquido transparente sin glóbulos rojos. Los vasos linfáticos la devuelven a la sangre cerca del corazón. Por el camino atraviesa los <mark>ganglios linfáticos</mark>, pequeños filtros llenos de glóbulos blancos que atrapan microbios: por eso se hinchan cuando tenemos una infección, por ejemplo en el cuello. Además, los vasos linfáticos del intestino absorben las grasas de la digestión.</p>`,
    },
    {
      html: `<h3>Cuidar los pulmones y el corazón</h3><p>El <b>tabaco</b> es la principal causa evitable de enfermedad: paraliza los cilios que limpian los bronquios, provoca bronquitis crónica y cáncer de pulmón, y endurece las arterias. El vapeo tampoco es inocuo. Otras enfermedades respiratorias frecuentes son el <b>asma</b> y las infecciones como la gripe o la neumonía. Las <mark>enfermedades cardiovasculares</mark>, como el infarto o el ictus, son la primera causa de muerte en España; se relacionan con la hipertensión, el colesterol alto, el sedentarismo y la obesidad. El ejercicio regular y una dieta sana son la mejor prevención.</p>`,
    },
  ],
  figura: {
    titulo: "El viaje del oxígeno",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="El oxígeno entra por la nariz, llega a los alvéolos, pasa a la sangre, el corazón lo bombea y las células lo usan; el CO2 hace el camino al revés">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["aire", "nariz y tráquea", "var(--inf)"], ["alvéolos", "difusión a la sangre", "var(--inf)"], ["corazón", "lo bombea", "var(--red)"], ["arterias", "lo reparten", "var(--red)"], ["células", "mitocondrias: energía", "var(--leaf)"]].map(([n, d, c], i) => { const x = 20 + i * 122; return `<rect x="${x}" y="70" width="110" height="80" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 55, 104, n, { size: n.length > 10 ? 12 : 15, color: c, font: D })}${t(x + 55, 128, d, { size: 11, weight: 400 })}${i < 4 ? fl(x + 111, 110, x + 121, 110, "var(--red)") : ""}`; }).join("")}
      ${t(320, 50, "O₂ →", { size: 18, color: "var(--red)" })}
      <path d="M570 160 V 200 H 75 V 160" stroke="var(--pen)" stroke-width="3" fill="none" stroke-dasharray="8 5"/>${fl(75, 175, 75, 158, "var(--pen)", 3)}
      ${t(320, 228, "← el CO₂ hace el camino al revés y sale al espirar", { size: 15, color: "var(--pen)" })}
    </svg>`,
  },
  video: { id: "uUpdItCbr24", titulo: "¿Cómo funciona el sistema respiratorio? (Animación)", canal: "Thomas Schwenke ES", vistas: 692385, megusta: 0, busqueda: "intercambio de gases alveolos" },
  ejemplos: [
    { enunciado: "Sigue a un glóbulo rojo que sale del ventrículo izquierdo hasta que vuelve a él. ¿Por qué cavidades y vasos pasa?",
      pasos: ["Sale por la aorta (circulación mayor) y llega por las arterias a los capilares de un órgano, donde deja el O₂.", "Vuelve pobre en O₂ por las venas cavas a la aurícula derecha, y baja al ventrículo derecho.", "Sale por la arteria pulmonar a los pulmones, donde capta O₂ (circulación menor).", "Vuelve por las venas pulmonares a la aurícula izquierda y baja al ventrículo izquierdo."],
      resultado: "VI → aorta → cuerpo → cavas → AD → VD → arteria pulmonar → pulmones → venas pulmonares → AI → VI." },
    { enunciado: "En reposo, una persona respira 15 veces por minuto y mueve 0,5 L en cada respiración. ¿Cuántos litros de aire respira en una hora?",
      pasos: ["Por minuto: 15 · 0,5 = 7,5 L.", "Por hora: 7,5 · 60 = 450 L."],
      resultado: "unos 450 litros de aire por hora." },
    { enunciado: "La arteria pulmonar lleva sangre pobre en oxígeno. ¿Entonces por qué se llama arteria?",
      pasos: ["El nombre de un vaso no depende del oxígeno que lleva.", "Depende del sentido: las arterias salen del corazón y las venas llegan a él.", "La arteria pulmonar sale del ventrículo derecho hacia los pulmones."],
      resultado: "porque sale del corazón; las venas pulmonares, en cambio, llevan sangre rica en O₂." },
  ],
  errores: [
    "Pensar que las arterias siempre llevan sangre roja y las venas azul: depende del sentido, no del oxígeno.",
    "Confundir la respiración pulmonar con la celular.",
    "Creer que los pulmones tienen músculos propios: los mueve el diafragma.",
    "Decir que el intercambio de gases ocurre en los bronquios: ocurre en los alvéolos.",
    "Situar el lado izquierdo del corazón a la izquierda del dibujo: en los esquemas se ve como si lo miraras de frente.",
    "Pensar que la sangre de las venas es azul: es rojo oscuro; se ve azulada a través de la piel.",
  ],
  ejercicios: [
    { q: "Escribe la reacción de la respiración celular y di dónde ocurre.", sol: "Glucosa + oxígeno → dióxido de carbono + agua + energía. Ocurre en las mitocondrias de las células." },
    { q: "Ordena el recorrido del aire desde la nariz hasta el alvéolo.", sol: "Fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y alvéolos." },
    { q: "¿Por qué los alvéolos son tan eficaces para el intercambio de gases?", sol: "Son muchísimos (gran superficie), tienen la pared muy fina y están rodeados de capilares, así que los gases difunden con facilidad." },
    { q: "Explica qué hace el diafragma en la inspiración y en la espiración.", sol: "En la inspiración se contrae y baja: aumenta el volumen del tórax y entra aire. En la espiración se relaja y sube: disminuye el volumen y sale el aire." },
    { q: "Indica la función de los glóbulos rojos, los blancos y las plaquetas.", sol: "Rojos: transportar oxígeno. Blancos: defender de infecciones. Plaquetas: coagular la sangre." },
    { q: "Compara arterias, venas y capilares.", sol: "Arterias: salen del corazón, pared gruesa y elástica. Venas: llegan al corazón, pared fina y válvulas. Capilares: unen ambas, una sola capa, intercambio de sustancias." },
    { q: "¿Por qué la pared del ventrículo izquierdo es más gruesa que la del derecho?", sol: "Porque bombea la sangre a todo el cuerpo (circulación mayor), que necesita mucha más fuerza que enviarla solo a los pulmones." },
    { q: "Tu pulso es de 18 latidos en 15 segundos. ¿Cuántas pulsaciones por minuto son? ¿Es normal en reposo?", sol: "18 · 4 = 72 pulsaciones por minuto. Sí, está entre 60 y 100." },
    { q: "¿Qué significa que la circulación sea doble y cerrada?", sol: "Doble: la sangre pasa dos veces por el corazón en cada vuelta (circuito pulmonar y general). Cerrada: siempre circula dentro de vasos." },
    { q: "Cita tres efectos del tabaco sobre estos aparatos.", sol: "Paraliza los cilios de los bronquios, causa bronquitis crónica y cáncer de pulmón, y daña las arterias aumentando el riesgo de infarto." },
  ],
  quiz: [
    { q: "El intercambio de gases ocurre en…", o: ["la tráquea", "los alvéolos", "los bronquios"], a: 1, e: "En los alvéolos." },
    { q: "El músculo principal de la respiración es…", o: ["el diafragma", "el corazón", "el bíceps"], a: 0, e: "El diafragma." },
    { q: "La respiración celular se produce en…", o: ["los pulmones", "las mitocondrias", "el corazón"], a: 1, e: "En las mitocondrias." },
    { q: "Las cuerdas vocales están en…", o: ["la laringe", "la tráquea", "los bronquios"], a: 0, e: "En la laringe." },
    { q: "Transportan el oxígeno…", o: ["los glóbulos blancos", "los glóbulos rojos", "las plaquetas"], a: 1, e: "Con la hemoglobina." },
    { q: "Las venas…", o: ["salen del corazón", "llegan al corazón", "no tienen válvulas"], a: 1, e: "Llevan la sangre al corazón." },
    { q: "El corazón tiene…", o: ["2 cavidades", "4 cavidades", "6 cavidades"], a: 1, e: "Dos aurículas y dos ventrículos." },
    { q: "La aorta sale del…", o: ["ventrículo izquierdo", "ventrículo derecho", "aurícula derecha"], a: 0, e: "Del ventrículo izquierdo." },
    { q: "La contracción del corazón se llama…", o: ["diástole", "sístole", "pulso"], a: 1, e: "Sístole." },
    { q: "Los ganglios linfáticos…", o: ["filtran la linfa", "bombean sangre", "producen bilis"], a: 0, e: "Atrapan microbios." },
  ],
  examen: [
    { q: "La sangre de la arteria pulmonar es…", o: ["rica en O₂", "pobre en O₂", "linfa"], a: 1, e: "Va del ventrículo derecho a los pulmones." },
    { q: "En la inspiración el diafragma…", o: ["se contrae y baja", "se relaja y sube", "no se mueve"], a: 0, e: "Así aumenta el volumen del tórax." },
    { q: "El plasma es…", o: ["un tipo de célula", "la parte líquida de la sangre", "un vaso"], a: 1, e: "Agua con sustancias disueltas." },
  ],
  feynman: ["Qué diferencia hay entre respirar con los pulmones y la respiración celular", "Cómo pasa el oxígeno del aire a la sangre", "Cómo funciona el corazón y qué es la circulación doble"],
  mapa: mapa("RESPIRAR Y CIRCULAR", "var(--eso)", [
    ["Vías respiratorias", "nariz · tráquea · bronquios", "var(--inf)"],
    ["Pulmones", "alvéolos · diafragma · difusión", "var(--leaf)"],
    ["Sangre y vasos", "plasma · arterias · venas · capilares", "var(--red)"],
    ["Corazón", "4 cavidades · circulación doble", "var(--pen)"],
  ], 280),
  tarjetas: [
    ["Respiración celular", "Glucosa + O₂ → CO₂ + agua + energía, en las mitocondrias."],
    ["Alvéolo", "Saquito pulmonar donde se intercambian los gases con la sangre."],
    ["Difusión", "Paso de un gas de donde hay más concentración a donde hay menos."],
    ["Diafragma", "Músculo bajo los pulmones que permite la ventilación."],
    ["Arteria", "Vaso que sale del corazón; pared gruesa y elástica."],
    ["Vena", "Vaso que llega al corazón; pared fina y válvulas."],
    ["Sístole y diástole", "Contracción y relajación del corazón."],
    ["Circulación doble", "Menor (pulmones) y mayor (cuerpo): la sangre pasa dos veces por el corazón."],
  ],
  familias: ["Tomaos el pulso en reposo y después de subir escaleras y comparad.", "Hablad sobre el tabaco y el vapeo y sus efectos en los pulmones.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: anatomía y fisiología de los aparatos respiratorio y circulatorio, intercambio de gases, sangre, corazón, circulación doble y hábitos saludables (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Modelo de pulmón con botella, globos y membrana elástica como diafragma.", "Disección de corazón de cerdo o cordero para ver cavidades y válvulas.", "Medida del pulso y de la frecuencia respiratoria antes y después del ejercicio, con gráfica."],
  },
  fuentes: [RD, wiki("Aparato respiratorio", "Aparato_respiratorio"), wiki("Aparato circulatorio", "Aparato_circulatorio")],
  revisado: "2026-11-12",
};
