// Física y Química 2º ESO: la luz y el sonido. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "La luz y el sonido",
  minutos: 55,
  objetivos: ["Explicar qué es una onda y distinguir ondas mecánicas y electromagnéticas", "Describir cómo se produce y propaga el sonido y sus cualidades: intensidad, tono y timbre", "Explicar la propagación rectilínea de la luz, las sombras, la reflexión y la refracción", "Relacionar el color con la luz blanca y valorar la contaminación acústica y lumínica"],
  claves: ["onda", "sonido", "eco", "decibelio", "intensidad", "tono", "timbre", "luz", "reflexión", "refracción", "espectro", "color"],
  pregunta: {
    texto: "En una tormenta ves el relámpago y, unos segundos después, oyes el trueno. Si los dos se producen a la vez, ¿por qué llegan separados?",
    respuesta: "Porque la <mark>luz</mark> viaja a unos 300 000 km/s y llega casi al instante, mientras que el <mark>sonido</mark> viaja por el aire a unos 340 m/s, casi un millón de veces más despacio. Si cuentas los segundos entre el relámpago y el trueno y los divides entre 3, sabrás a cuántos kilómetros está la tormenta.",
  },
  bloques: [
    {
      html: `<h3>Las ondas</h3><p>Si tiras una piedra a un estanque, se forman círculos que se alejan: es una <mark>onda</mark>. Una onda es una <b>perturbación que se propaga transportando energía, pero no materia</b>: el agua sube y baja en su sitio, pero no viaja con la onda, como demuestra una hoja que flota y se mece sin avanzar. Las ondas se describen con la <b>longitud de onda</b> (λ), la distancia entre dos crestas; la <b>amplitud</b>, la altura máxima de la onda; y la <b>frecuencia</b> (f), el número de oscilaciones por segundo, que se mide en <b>hercios (Hz)</b>. Hay dos grandes tipos. Las <mark>ondas mecánicas</mark> necesitan un medio material para propagarse, como el sonido o las olas. Las <mark>ondas electromagnéticas</mark> no necesitan medio y viajan incluso por el vacío, como la luz, las ondas de radio o los rayos X.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Onda con sus elementos: la longitud de onda es la distancia entre dos crestas y la amplitud es la altura de la cresta respecto al centro">${BG}
        <line x1="14" y1="90" x2="246" y2="90" stroke="var(--muted)" stroke-dasharray="3 3"/>
        <path d="M14 90 C 34 30, 54 30, 74 90 S 114 150, 134 90 S 174 30, 194 90 S 234 150, 246 110" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M44 34 H 164" stroke="var(--red)" stroke-width="1.5"/><path d="M44 28 v 12 M164 28 v 12" stroke="var(--red)" stroke-width="1.5"/>${t(104, 26, "longitud de onda (λ)", { size: 10, color: "var(--red)" })}
        ${fl(178, 90, 178, 48, "var(--leaf)", 1.5)}${t(184, 66, "amplitud", { size: 10, color: "var(--leaf)", anchor: "start" })}
        ${t(44, 108, "cresta", { size: 10, color: "var(--muted)" })}${t(104, 164, "valle", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Cómo se produce y se propaga el sonido</h3><p>El <mark>sonido</mark> se produce cuando un cuerpo <b>vibra</b>: las cuerdas de una guitarra, la membrana de un tambor o de un altavoz, nuestras cuerdas vocales. Esa vibración empuja las partículas del aire que hay al lado, estas empujan a las siguientes, y así la vibración se transmite en forma de <b>compresiones y expansiones</b> del aire hasta que llega a nuestro oído y hace vibrar el tímpano. El sonido es una <b>onda mecánica</b>: necesita un medio material para propagarse. Por eso <b>en el vacío no hay sonido</b>: en el espacio, una explosión sería silenciosa. El sonido viaja más rápido en los sólidos que en los líquidos, y más en los líquidos que en los gases, porque las partículas están más juntas. Por eso, si pegas la oreja a una vía, oyes el tren antes que por el aire.</p>${tabla(["Medio", "Velocidad del sonido"], [["Aire (20 °C)", "340 m/s"], ["Agua", "1500 m/s"], ["Madera", "≈ 3800 m/s"], ["Acero", "≈ 5900 m/s"], ["Vacío", "no se propaga"]])}`,
      video: { id: "W7Z5S3wPKEQ", titulo: "¿Cómo viaja el sonido?", canal: "FlexFlix Kids en Español", vistas: 1753260 },
    },
    {
      html: `<h3>Las cualidades del sonido</h3><p>Distinguimos los sonidos por tres cualidades. La <mark>intensidad</mark> o volumen nos dice si un sonido es <b>fuerte o débil</b>. Depende de la <b>amplitud</b> de la onda y se mide en <b>decibelios (dB)</b>. El <mark>tono</mark> nos dice si un sonido es <b>agudo o grave</b>. Depende de la <b>frecuencia</b>: cuanto más rápido vibra la fuente, más agudo es el sonido. El silbido de un pájaro es agudo y el de un contrabajo, grave. El oído humano percibe frecuencias entre unos 20 Hz y 20 000 Hz; por debajo están los <b>infrasonidos</b> (que oyen los elefantes) y por encima los <b>ultrasonidos</b> (que usan los murciélagos, los delfines y las ecografías). El <mark>timbre</mark> nos permite distinguir dos sonidos de la misma intensidad y tono emitidos por fuentes distintas: la misma nota suena diferente en un piano y en una flauta, y reconocemos la voz de cada persona.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de ondas: un sonido fuerte tiene más amplitud que uno débil; un sonido agudo tiene más frecuencia, ondas más juntas, que uno grave">${BG}
        ${[[36, 26, 3, "fuerte"], [36, 8, 3, "débil"]].map(([y, a, n, s], i) => { let d = `M20 ${y + i * 40}`; for (let k = 0; k < n; k++) d += ` q 12 ${-a} 24 0 t 24 0`; return `<path d="${d}" stroke="var(--pen)" stroke-width="2" fill="none"/>${t(230, y + i * 40 + 4, s, { size: 10, anchor: "end", color: "var(--pen)" })}`; }).join("")}
        ${[[126, 14, 10, 4.8, "agudo"], [126, 14, 3, 16, "grave"]].map(([y, a, n, w, s], i) => { let d = `M20 ${y + i * 34}`; for (let k = 0; k < n; k++) d += ` q ${w / 2} ${-a} ${w} 0 t ${w} 0`; return `<path d="${d}" stroke="var(--red)" stroke-width="2" fill="none"/>${t(230, y + i * 34 + 4, s, { size: 10, anchor: "end", color: "var(--red)" })}`; }).join("")}
        ${t(110, 104, "intensidad: amplitud · tono: frecuencia", { size: 9, color: "var(--muted)" })}</svg>`,
      video: { id: "xQBeSWXFVd8", titulo: "El sonido: intensidad, tono y timbre", canal: "Smile and Learn", vistas: 1139677 },
    },
    {
      html: `<h3>El eco y la contaminación acústica</h3><p>Cuando el sonido choca contra un obstáculo, una parte rebota: es la <b>reflexión del sonido</b>. Si la superficie está lejos (a más de 17 m), oímos el sonido reflejado separado del original: es el <mark>eco</mark>. Si está más cerca, los dos sonidos se mezclan y se produce <b>reverberación</b>, como en una iglesia o una habitación vacía. Los murciélagos y los delfines se orientan por <b>ecolocalización</b>, y los barcos miden la profundidad del mar con el <b>sonar</b>. El ruido excesivo es un problema de salud: la <mark>contaminación acústica</mark>. A partir de 85 dB, una exposición prolongada puede dañar el oído, y por encima de 120 dB el sonido causa dolor. Escuchar música muy alta con auriculares durante horas puede provocar pérdida de audición permanente. Para reducir el ruido se usan aislantes, pantallas acústicas en las autopistas y ordenanzas municipales.</p>${tabla(["Fuente", "Nivel aproximado"], [["Respiración tranquila", "10 dB"], ["Conversación", "60 dB"], ["Tráfico intenso", "85 dB"], ["Concierto o discoteca", "110 dB"], ["Avión despegando cerca", "140 dB"]])}`,
    },
    {
      html: `<h3>La luz y su propagación</h3><p>La <mark>luz</mark> es una <b>onda electromagnética</b>: no necesita un medio y viaja por el vacío a la enorme velocidad de <b>300 000 km/s</b>, lo más rápido que existe. Los cuerpos que emiten luz propia son <b>fuentes luminosas</b>: el Sol, una bombilla, una vela o una luciérnaga. Los demás los vemos porque reflejan la luz que les llega. La luz se propaga en <mark>línea recta</mark> en todas direcciones; por eso la representamos con <b>rayos</b>. Según cómo dejan pasar la luz, los materiales son <b>transparentes</b> (dejan pasar la luz y vemos a través: el vidrio, el agua), <b>translúcidos</b> (dejan pasar la luz pero no se ve con nitidez: el papel vegetal, el vidrio esmerilado) u <b>opacos</b> (no dejan pasar la luz: la madera, el metal, tu cuerpo).</p>`,
    },
    {
      html: `<h3>Sombras y eclipses</h3><p>Como la luz viaja en línea recta, cuando un cuerpo opaco se interpone en su camino, detrás de él queda una zona sin luz: la <mark>sombra</mark>. Si la fuente de luz es grande, alrededor de la sombra aparece una zona de semioscuridad llamada <b>penumbra</b>, que solo recibe luz de una parte de la fuente. Las sombras explican los <mark>eclipses</mark>. En un <b>eclipse de Sol</b>, la Luna se coloca entre el Sol y la Tierra y su sombra cae sobre una zona de nuestro planeta: allí se hace de noche en pleno día. En un <b>eclipse de Luna</b>, la Tierra se interpone entre el Sol y la Luna, y la Luna entra en la sombra de la Tierra y se ve rojiza. En España se vio un eclipse total de Sol el 12 de agosto de 2026, y habrá otro el 2 de agosto de 2027 en el sur peninsular.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Eclipse de Sol: el Sol a la izquierda, la Luna en medio y la Tierra a la derecha; la sombra de la Luna cae sobre una zona de la Tierra">${BG}
        <circle cx="24" cy="90" r="40" fill="#ffd34d"/>
        <path d="M34 52 L 230 84 L 230 96 L 34 128 Z" fill="#ffd34d" fill-opacity=".12"/>
        <circle cx="130" cy="90" r="9" fill="#9aa0a6"/><path d="M130 81 L 220 88 L 220 92 L 130 99 Z" fill="var(--ink)" fill-opacity=".6"/>
        <circle cx="226" cy="90" r="22" fill="var(--pen)" fill-opacity=".7"/><circle cx="206" cy="90" r="3" fill="var(--ink)"/>
        ${t(24, 150, "Sol", { size: 11 })}${t(130, 120, "Luna", { size: 11 })}${t(226, 130, "Tierra", { size: 11 })}${t(170, 70, "sombra", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La reflexión de la luz</h3><p>Cuando la luz llega a una superficie y rebota, se produce la <mark>reflexión</mark>. Cumple una ley sencilla: el <b>ángulo de incidencia</b> (el del rayo que llega) es <b>igual al ángulo de reflexión</b> (el del rayo que sale), medidos respecto a la <b>normal</b>, una línea perpendicular a la superficie. Si la superficie es muy lisa y pulida, como un <b>espejo</b>, todos los rayos rebotan ordenadamente y se forma una imagen: es la <b>reflexión especular</b>. En un espejo plano la imagen es del mismo tamaño, está a la misma distancia detrás del espejo y tiene la izquierda y la derecha invertidas. Si la superficie es rugosa, como un papel o una pared, los rayos rebotan en todas direcciones: es la <b>reflexión difusa</b>, gracias a la cual vemos los objetos desde cualquier lugar. Los espejos curvos se usan en los retrovisores, los telescopios y los espejos de aumento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reflexión en un espejo: el rayo incidente y el reflejado forman el mismo ángulo con la normal">${BG}
        <rect x="20" y="140" width="220" height="8" fill="var(--muted)"/><line x1="20" y1="150" x2="240" y2="150" stroke="var(--ink)" stroke-width="2"/>
        <line x1="130" y1="30" x2="130" y2="140" stroke="var(--muted)" stroke-dasharray="4 3"/>${t(136, 40, "normal", { size: 10, color: "var(--muted)", anchor: "start" })}
        ${fl(40, 50, 128, 138, "#e6a100", 3)}${fl(130, 140, 220, 50, "#e6a100", 3)}
        <path d="M130 110 A 30 30 0 0 0 109 119" stroke="var(--red)" fill="none" stroke-width="2"/><path d="M130 110 A 30 30 0 0 1 151 119" stroke="var(--red)" fill="none" stroke-width="2"/>
        ${t(104, 104, "i", { size: 12, color: "var(--red)" })}${t(156, 104, "r", { size: 12, color: "var(--red)" })}${t(130, 172, "ángulo i = ángulo r", { size: 11, color: "var(--red)" })}
        ${t(46, 40, "incidente", { size: 10 })}${t(214, 40, "reflejado", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>La refracción de la luz</h3><p>Si metes un lápiz en un vaso de agua, parece que se quiebra. No se ha roto: la luz ha cambiado de dirección al pasar del agua al aire. Es la <mark>refracción</mark>, el cambio de dirección que sufre la luz al pasar de un medio transparente a otro, porque viaja a distinta velocidad en cada uno (en el agua, a unos 225 000 km/s; en el vidrio, a unos 200 000 km/s). La refracción explica que una piscina parezca menos profunda de lo que es y que veamos los espejismos en la carretera en verano. Gracias a ella funcionan las <b>lentes</b>: las <b>convergentes</b>, más gruesas en el centro, concentran los rayos en un punto (lupas, gafas para la vista cansada o la hipermetropía); las <b>divergentes</b>, más finas en el centro, los separan (gafas para la miopía). También los ojos, las cámaras, los microscopios y los telescopios usan lentes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Refracción: un lápiz dentro de un vaso de agua parece quebrado en la superficie; un rayo de luz cambia de dirección al pasar del aire al agua">${BG}
        <path d="M30 40 h 80 l -6 120 h -68 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M32 80 h 76 l -4 78 h -68 Z" fill="var(--pen)" fill-opacity=".3"/>
        <line x1="50" y1="20" x2="74" y2="80" stroke="#e6a100" stroke-width="6" stroke-linecap="round"/><line x1="80" y1="80" x2="96" y2="150" stroke="#e6a100" stroke-width="6" stroke-linecap="round"/>
        <line x1="140" y1="90" x2="250" y2="90" stroke="var(--ink)" stroke-width="1.5"/><rect x="140" y="90" width="110" height="70" fill="var(--pen)" fill-opacity=".2"/><line x1="196" y1="30" x2="196" y2="160" stroke="var(--muted)" stroke-dasharray="4 3"/>
        ${fl(150, 30, 194, 88, "var(--red)", 2.5)}${fl(196, 92, 218, 156, "var(--red)", 2.5)}${t(160, 84, "aire", { size: 10, anchor: "start" })}${t(146, 112, "agua", { size: 10, anchor: "start" })}
        ${t(70, 174, "lápiz «quebrado»", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "khCrgi80IPU", titulo: "La diferencia entre la reflexión y la refracción de la luz", canal: "FlexFlix Kids en Español", vistas: 2043659 },
    },
    {
      html: `<h3>La luz blanca y los colores</h3><p>En 1666, Isaac Newton hizo pasar un rayo de sol por un <b>prisma</b> de vidrio y vio que salía separado en una banda de colores: rojo, naranja, amarillo, verde, azul, añil y violeta. Es la <mark>dispersión de la luz</mark>. Descubrió así que la <b>luz blanca es una mezcla de todos los colores</b>, y que cada color se refracta un poco distinto. El <b>arcoíris</b> se forma igual: las gotas de lluvia actúan como pequeños prismas. ¿Por qué vemos los objetos de colores? Porque cada objeto <b>absorbe unos colores y refleja otros</b>: un tomate es rojo porque refleja la luz roja y absorbe las demás; una hoja es verde porque refleja la verde. Un objeto blanco refleja todos los colores, y uno negro los absorbe todos; por eso la ropa negra se calienta más al sol. La luz visible es solo una pequeña parte del <b>espectro electromagnético</b>, que incluye también las ondas de radio, las microondas, el infrarrojo, el ultravioleta y los rayos X.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un rayo de luz blanca entra en un prisma y sale separado en los siete colores del arcoíris, de rojo a violeta">${BG}
        <path d="M100 140 L 140 40 L 180 140 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--ink)" stroke-width="2"/>
        <line x1="14" y1="104" x2="122" y2="92" stroke="#fff" stroke-width="5"/><line x1="14" y1="104" x2="122" y2="92" stroke="var(--muted)" stroke-width="1"/>${t(40, 92, "luz blanca", { size: 10 })}
        ${["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#3949ab", "#8e24aa"].map((c, i) => `<line x1="158" y1="${94 + i * 2}" x2="248" y2="${84 + i * 12}" stroke="${c}" stroke-width="3"/>`).join("")}
        ${t(236, 74, "rojo", { size: 9, anchor: "end" })}${t(236, 176, "violeta", { size: 9, anchor: "end" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Sonido y luz, cara a cara",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación: el sonido es una onda mecánica que necesita un medio y viaja a 340 metros por segundo en el aire; la luz es una onda electromagnética que viaja por el vacío a 300 000 kilómetros por segundo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="24" y="24" width="282" height="182" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(165, 58, "Sonido", { size: 18, color: "var(--pen)", font: D })}${t(165, 94, "onda mecánica", { size: 14, weight: 400 })}${t(165, 122, "necesita un medio", { size: 14, weight: 400 })}${t(165, 156, "340 m/s en el aire", { size: 14 })}${t(165, 186, "intensidad · tono · timbre", { size: 12, color: "var(--muted)" })}
      <rect x="334" y="24" width="282" height="182" rx="14" fill="var(--card)" stroke="#e6a100" stroke-width="2.5"/>${t(475, 58, "Luz", { size: 18, color: "#b8860b", font: D })}${t(475, 94, "onda electromagnética", { size: 14, weight: 400 })}${t(475, 122, "viaja por el vacío", { size: 14, weight: 400 })}${t(475, 156, "300 000 km/s", { size: 14 })}${t(475, 186, "reflexión · refracción · color", { size: 12, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "6hhm552J_yI", titulo: "La luz: reflexión y refracción", canal: "Smile and Learn", vistas: 455222, megusta: 4088, busqueda: "propiedades de la luz y el sonido" },
  ejemplos: [
    { enunciado: "Ves un relámpago y oyes el trueno 6 s después. ¿A qué distancia está la tormenta? (sonido: 340 m/s)",
      pasos: ["La luz llega casi al instante: los 6 s son lo que tarda el sonido.", "d = v · t = 340 · 6.", "d = 2040 m ≈ 2 km."],
      resultado: "A unos 2 km." },
    { enunciado: "Gritas frente a una montaña y oyes el eco 2 s después. ¿A qué distancia está la montaña?",
      pasos: ["En 2 s el sonido va y vuelve.", "Distancia total: 340 · 2 = 680 m.", "La montaña está a la mitad: 680 / 2 = 340 m."],
      resultado: "A 340 m." },
    { enunciado: "Un rayo de luz llega a un espejo formando 35° con la normal. ¿Qué ángulo forma el rayo reflejado con la normal? ¿Y con el espejo?",
      pasos: ["Ley de la reflexión: ángulo de incidencia = ángulo de reflexión.", "Con la normal: 35°.", "Con el espejo: 90° − 35° = 55°."],
      resultado: "35° con la normal y 55° con el espejo." },
  ],
  errores: [
    "Pensar que el sonido viaja por el vacío: necesita un medio material.",
    "Confundir intensidad con tono: un sonido fuerte no es más agudo.",
    "Olvidar dividir entre dos al calcular la distancia del eco: el sonido va y vuelve.",
    "Medir el ángulo de reflexión respecto al espejo en lugar de respecto a la normal.",
    "Creer que un objeto rojo «tiene» color rojo: refleja la luz roja y absorbe las demás.",
  ],
  ejercicios: [
    { q: "¿Qué transporta una onda: materia o energía?", sol: "Energía, no materia." },
    { q: "Clasifica en ondas mecánicas o electromagnéticas: el sonido, la luz, las olas, las microondas, los rayos X.", sol: "Mecánicas: sonido y olas. Electromagnéticas: luz, microondas y rayos X." },
    { q: "¿Por qué en el espacio no se oyen las explosiones?", sol: "Porque en el vacío no hay partículas que transmitan la vibración: el sonido no se propaga." },
    { q: "Indica qué cualidad del sonido cambia: a) subir el volumen; b) pasar de un violín a una trompeta tocando la misma nota; c) cantar más agudo.", sol: "a) Intensidad; b) timbre; c) tono." },
    { q: "¿Por qué es peligroso escuchar música muy alta con auriculares durante horas?", sol: "Porque los niveles altos (más de 85 dB) de forma prolongada dañan el oído y pueden causar pérdida de audición permanente." },
    { q: "Clasifica en transparente, translúcido u opaco: cartón, vidrio de la ventana, papel de cocina, agua limpia, una puerta.", sol: "Transparentes: vidrio, agua. Translúcido: papel de cocina. Opacos: cartón y puerta." },
    { q: "Explica qué pasa en un eclipse de Luna.", sol: "La Tierra se coloca entre el Sol y la Luna, y la Luna queda dentro de la sombra de la Tierra." },
    { q: "Un rayo llega a un espejo con un ángulo de incidencia de 50°. ¿Cuál es el ángulo de reflexión?", sol: "50°." },
    { q: "¿Por qué una piscina parece menos profunda de lo que es?", sol: "Por la refracción: la luz que sale del agua cambia de dirección y vemos el fondo más arriba de donde está." },
    { q: "¿De qué color se verá un plátano iluminado solo con luz azul? ¿Por qué?", sol: "Casi negro: el plátano refleja la luz amarilla y absorbe la azul, así que no refleja casi nada." },
  ],
  quiz: [
    { q: "Una onda transporta…", o: ["materia", "energía", "agua"], a: 1, e: "Energía." },
    { q: "La frecuencia se mide en…", o: ["decibelios", "hercios", "metros"], a: 1, e: "Hercios (Hz)." },
    { q: "El sonido no se propaga en…", o: ["el agua", "el acero", "el vacío"], a: 2, e: "El vacío." },
    { q: "El sonido viaja más rápido en…", o: ["el aire", "el agua", "el acero"], a: 2, e: "En los sólidos." },
    { q: "Un sonido agudo tiene…", o: ["alta frecuencia", "baja frecuencia", "mucha amplitud"], a: 0, e: "Alta frecuencia." },
    { q: "La intensidad del sonido se mide en…", o: ["dB", "Hz", "km/s"], a: 0, e: "Decibelios." },
    { q: "La velocidad de la luz es de unos…", o: ["340 m/s", "300 000 km/s", "1500 m/s"], a: 1, e: "300 000 km/s." },
    { q: "Un material que no deja pasar la luz es…", o: ["transparente", "translúcido", "opaco"], a: 2, e: "Opaco." },
    { q: "El lápiz «quebrado» en el agua se debe a la…", o: ["reflexión", "refracción", "difusión"], a: 1, e: "Refracción." },
    { q: "La luz blanca es…", o: ["un solo color", "la mezcla de todos los colores", "luz amarilla"], a: 1, e: "La mezcla de todos." },
  ],
  examen: [
    { q: "Para corregir la miopía se usan lentes…", o: ["convergentes", "divergentes", "planas"], a: 1, e: "Divergentes." },
    { q: "Lo que nos permite distinguir un piano de una flauta es el…", o: ["tono", "timbre", "volumen"], a: 1, e: "El timbre." },
    { q: "Un objeto negro…", o: ["refleja todos los colores", "absorbe todos los colores", "emite luz"], a: 1, e: "Absorbe todos." },
  ],
  feynman: ["Cómo se produce y se propaga el sonido", "Qué diferencia hay entre reflexión y refracción", "Por qué vemos los objetos de colores"],
  mapa: mapa("LUZ Y SONIDO", "var(--eso)", [
    ["Ondas", "mecánicas · electromagnéticas", "var(--pen)"],
    ["Sonido", "vibración · dB · tono · timbre", "var(--red)"],
    ["Luz", "línea recta · sombras · eclipses", "#b8860b"],
    ["Fenómenos", "reflexión · refracción · color", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Onda", "Perturbación que transporta energía sin transportar materia."],
    ["Sonido", "Onda mecánica producida por una vibración; 340 m/s en el aire."],
    ["Tono", "Agudo o grave; depende de la frecuencia."],
    ["Eco", "Sonido reflejado que se oye separado del original."],
    ["Luz", "Onda electromagnética que viaja a 300 000 km/s, incluso en el vacío."],
    ["Reflexión", "La luz rebota; ángulo de incidencia = ángulo de reflexión."],
    ["Refracción", "Cambio de dirección de la luz al pasar de un medio a otro."],
    ["Dispersión", "Separación de la luz blanca en colores con un prisma."],
  ],
  familias: ["En la próxima tormenta, contad los segundos entre el relámpago y el trueno y calculad la distancia.", "Meted un lápiz en un vaso de agua y miradlo desde distintos ángulos.", "Haced un arcoíris con un vaso de agua al sol o con un CD."],
  profesores: {
    saberes: "La energía: ondas, el sonido y sus cualidades, contaminación acústica, la luz, propagación rectilínea, reflexión, refracción, color y espectro (RD 217/2022, Física y Química, bloque «La energía»).",
    ideas: ["Teléfono de vasos y cuerda para estudiar la propagación del sonido en sólidos.", "Medición de niveles de ruido en el centro con una app de sonómetro y propuesta de mejoras.", "Banco óptico con láser, espejos, prismas y lentes."],
  },
  fuentes: [RD, wiki("Sonido", "Sonido"), wiki("Luz", "Luz")],
  revisado: REV,
};
