// Educación Plástica, Visual y Audiovisual 3º ESO: la imagen fija. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";
// Silueta sencilla de persona (cabeza + cuerpo) centrada en x, con escala k y base en y.
const persona = (x, y, k, c = "var(--pen)") => `<circle cx="${x}" cy="${y - 62 * k}" r="${12 * k}" fill="${c}"/><path d="M${x - 20 * k} ${y} Q ${x - 20 * k} ${y - 46 * k} ${x} ${y - 46 * k} Q ${x + 20 * k} ${y - 46 * k} ${x + 20 * k} ${y} Z" fill="${c}"/>`;

// Persona vista de frente con la cabeza en (x, hy) y radio r; el encuadre la recorta.
const cabeza = (x, hy, r) => `<path d="M${x - r * 1.9} ${hy + r * 9} V ${hy + r * 2.4} Q ${x - r * 1.9} ${hy + r * 1.3} ${x} ${hy + r * 1.3} Q ${x + r * 1.9} ${hy + r * 1.3} ${x + r * 1.9} ${hy + r * 2.4} V ${hy + r * 9} Z" fill="var(--pen)"/><circle cx="${x}" cy="${hy}" r="${r}" fill="var(--sun)" stroke="var(--pen)" stroke-width="2"/><circle cx="${x - r * 0.35}" cy="${hy - r * 0.1}" r="${Math.max(1, r * 0.1)}" fill="var(--ink)"/><circle cx="${x + r * 0.35}" cy="${hy - r * 0.1}" r="${Math.max(1, r * 0.1)}" fill="var(--ink)"/><path d="M${x - r * 0.35} ${hy + r * 0.4} Q ${x} ${hy + r * 0.65} ${x + r * 0.35} ${hy + r * 0.4}" fill="none" stroke="var(--ink)" stroke-width="${Math.max(1, r * 0.08)}"/>`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "La imagen fija: fotografía y cómic",
  minutos: 50,
  objetivos: ["Conocer los tipos de plano y los ángulos de cámara", "Aplicar reglas de composición como la ley de los tercios", "Identificar los elementos del lenguaje del cómic: viñeta, bocadillo, onomatopeya y elipsis", "Crear una fotografía o una historieta breve con intención comunicativa"],
  claves: ["encuadre", "plano", "ángulo", "regla de los tercios", "viñeta", "bocadillo"],
  pregunta: {
    texto: "¿Por qué una misma persona puede parecer poderosa en una foto y frágil en otra, sin cambiar nada de ella?",
    respuesta: "Porque cambia <mark>cómo se fotografía</mark>: desde abajo (contrapicado) parece grande e imponente; desde arriba (picado), pequeña y débil. El encuadre, el plano y el ángulo son decisiones que <b>dan significado</b> a la imagen, igual en la fotografía que en el cómic.",
  },
  bloques: [
    {
      html: `<h3>La imagen fija</h3><p>Una <b>imagen fija</b> es la que no se mueve: una fotografía, una ilustración, un cartel o una viñeta de cómic. Aunque está quieta, puede contar una historia completa, transmitir emociones o convencer.</p><p>Para leerla y crearla hay que entender tres decisiones del autor:</p><ul><li><b>El encuadre</b>: qué parte de la realidad entra en la imagen y qué queda fuera.</li><li><b>El plano</b>: a qué distancia se muestra al sujeto.</li><li><b>El ángulo</b>: desde qué altura se mira.</li></ul><p>A ellas se suman la <b>composición</b> (cómo se reparten los elementos), la <b>luz</b> y el <b>color</b>.</p>`,
    },
    {
      html: `<h3>Los tipos de plano</h3><p>El <b>plano</b> indica cuánto espacio ocupa la figura humana en el encuadre. Cada uno tiene una función:</p>${tabla(["Plano", "Qué muestra", "Para qué sirve"], [["<b>Gran plano general</b>", "un paisaje enorme con personas diminutas", "situar, dar sensación de inmensidad"], ["<b>Plano general</b>", "la figura entera con su entorno", "presentar el lugar y la acción"], ["<b>Plano americano</b>", "de la cabeza a las rodillas", "personajes en acción, diálogos"], ["<b>Plano medio</b>", "de la cabeza a la cintura", "conversaciones, gestos"], ["<b>Primer plano</b>", "el rostro y los hombros", "emociones"], ["<b>Plano detalle</b>", "una parte pequeña: un ojo, una mano", "destacar algo importante"]])}`,
      svg: svg("Escala de planos: general con la figura entera, medio hasta la cintura y primer plano del rostro", `${["general", "medio", "primer plano"].map((n, i) => `<g><clipPath id="pl${i}"><rect x="${14 + i * 82}" y="30" width="72" height="110" rx="6"/></clipPath><rect x="${14 + i * 82}" y="30" width="72" height="110" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><g clip-path="url(#pl${i})">${cabeza(50 + i * 82, [62, 72, 88][i], [7, 15, 30][i])}</g>${t(50 + i * 82, 160, n, { s: 11 })}</g>`).join("")}${t(130, 20, "cuanto más cerca, más emoción", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Los ángulos de cámara</h3><p>El <b>ángulo</b> depende de la altura de la cámara respecto al sujeto:</p><ul><li><b>Normal</b>: a la altura de los ojos. Es neutro y natural.</li><li><b>Picado</b>: desde arriba. El sujeto parece <mark>pequeño, débil o vulnerable</mark>.</li><li><b>Contrapicado</b>: desde abajo. El sujeto parece <mark>grande, poderoso o amenazante</mark>.</li><li><b>Cenital</b>: totalmente desde arriba, en vertical. Muestra formas y recorridos.</li><li><b>Nadir</b>: totalmente desde abajo. Es muy expresivo y poco habitual.</li></ul><p>Los superhéroes se dibujan a menudo en contrapicado; las víctimas de una historia, en picado.</p>`,
      svg: svg("Ángulos de cámara: picado desde arriba, normal a la altura de los ojos y contrapicado desde abajo", `${persona(150, 160, 1.4, "var(--leaf)")}
        <rect x="24" y="22" width="26" height="18" rx="4" fill="var(--red)"/><path d="M50 36 L 136 82" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
        <rect x="24" y="64" width="26" height="18" rx="4" fill="var(--pen)"/><path d="M50 73 H 132" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 4"/>
        <rect x="24" y="140" width="26" height="18" rx="4" fill="var(--inf)"/><path d="M50 144 L 134 86" stroke="var(--inf)" stroke-width="2" stroke-dasharray="5 4"/>
        ${t(37, 16, "picado", { c: "var(--red)", s: 11 })}${t(37, 98, "normal", { c: "var(--pen)", s: 11 })}${t(48, 174, "contrapicado", { c: "var(--inf)", s: 11 })}${t(222, 60, "sujeto", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>La composición: la regla de los tercios</h3><p>La <b>composición</b> es la forma de ordenar los elementos dentro del encuadre. La guía más conocida es la <b>regla de los tercios</b>: se divide la imagen con dos líneas horizontales y dos verticales en <mark>nueve partes iguales</mark>, y se colocan los elementos importantes sobre las líneas o en sus cruces (los <b>puntos fuertes</b>).</p><p>Por ejemplo, el horizonte se sitúa en el tercio superior o inferior, no en el centro, y los ojos de un retrato, en la línea de arriba. Otras pautas útiles: dejar <b>aire</b> hacia donde mira el sujeto, usar <b>líneas</b> que guíen la mirada y buscar <b>simetría</b> o contraste según la intención.</p>`,
      svg: svg("Regla de los tercios: cuadrícula de nueve partes, horizonte en el tercio inferior y sol en un punto fuerte", `<rect x="20" y="20" width="220" height="140" rx="6" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/><path d="M20 113 H 240 V 160 H 20 Z" fill="var(--leaf)" fill-opacity=".35"/>
        <path d="M93 20 V 160 M167 20 V 160 M20 67 H 240 M20 113 H 240" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
        <circle cx="167" cy="67" r="16" fill="var(--sun)"/>${[[93, 67], [93, 113], [167, 113]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>`).join("")}
        ${t(130, 176, "sujeto en un punto fuerte", { c: "var(--red)", s: 11 })}`),
      video: { id: "Up-jAVRisQQ", titulo: "Composición fotográfica: la regla de los tercios", canal: "RBG Escuela", vistas: 737761, megusta: 0 },
    },
    {
      html: `<h3>La fotografía: luz, enfoque y edición</h3><p>Fotografiar significa «escribir con luz». La cámara (o el móvil) recoge la luz a través del <b>objetivo</b> y la registra en un sensor. Algunos recursos expresivos:</p><ul><li><b>Luz</b>: la luz suave de un día nublado favorece los retratos; el contraluz crea siluetas; la luz lateral marca las texturas.</li><li><b>Enfoque</b>: desenfocar el fondo (poca profundidad de campo) aísla al sujeto.</li><li><b>Color o blanco y negro</b>: el blanco y negro resalta formas y contrastes.</li></ul><p>Con la <b>edición digital</b> se ajustan el brillo, el contraste o el color. También se pueden manipular las fotos, por eso hay que leerlas con <mark>espíritu crítico</mark>.</p>`,
    },
    {
      html: `<h3>Fotografía y sociedad</h3><p>La fotografía cumple funciones muy distintas:</p><ul><li><b>Documental y periodística</b>: testimonia hechos reales. El fotoperiodismo ha mostrado guerras, catástrofes y logros históricos.</li><li><b>Artística</b>: expresa la mirada personal del autor.</li><li><b>Publicitaria</b>: presenta productos de forma atractiva para vender.</li><li><b>Personal</b>: recuerdos, redes sociales.</li></ul><p>En las redes compartimos imágenes a diario. Es importante respetar el <b>derecho a la propia imagen</b>: no se debe publicar la foto de otra persona sin su permiso, y en el caso de menores hace falta el consentimiento de sus familias.</p>`,
    },
    {
      html: `<h3>El cómic: un lenguaje propio</h3><p>El <b>cómic</b> (historieta o tebeo) cuenta una historia mediante una secuencia de imágenes y texto. Sus elementos son:</p>${tabla(["Elemento", "Qué es"], [["<b>Viñeta</b>", "cada recuadro; representa un instante de la acción"], ["<b>Bocadillo</b>", "globo con lo que dicen (borde liso) o piensan (en forma de nube) los personajes"], ["<b>Cartela</b>", "recuadro del narrador: «Mientras tanto…»"], ["<b>Onomatopeya</b>", "palabra que imita un sonido: ¡BOOM!, ¡ZAS!"], ["<b>Líneas cinéticas</b>", "trazos que indican movimiento"], ["<b>Metáfora visual</b>", "una bombilla para una idea, estrellas para un golpe"]])}`,
      svg: svg("Página de cómic con tres viñetas: bocadillo de diálogo, bocadillo de pensamiento y onomatopeya", `<rect x="14" y="14" width="110" height="70" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="134" y="14" width="112" height="70" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="14" y="94" width="232" height="72" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <ellipse cx="70" cy="38" rx="40" ry="16" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/><path d="M60 52 L 52 66 L 72 53" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>${t(70, 42, "¡Hola!", { s: 11 })}
        <ellipse cx="190" cy="36" rx="38" ry="15" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="176" cy="60" r="4" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="170" cy="72" r="2.5" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${t(190, 40, "Hmm…", { s: 11 })}
        <path transform="translate(0 -5)" d="M130 108 L 142 124 L 162 112 L 158 132 L 182 136 L 160 146 L 168 162 L 146 152 L 132 166 L 126 148 L 102 152 L 116 138 L 98 124 L 120 124 Z" fill="var(--sun)" stroke="var(--red)" stroke-width="2"/>${t(138, 142, "¡BOOM!", { c: "var(--red)", s: 12 })}
        ${t(52, 116, "viñeta", { c: "var(--muted)", s: 10 })}`),
      video: { id: "gyo8ntBIGn8", titulo: "Cómo hacer una historieta en 7 pasos", canal: "Arte en el Cole", vistas: 827779, megusta: 0 },
    },
    {
      html: `<h3>Narrar con viñetas</h3><p>Entre una viñeta y la siguiente pasa un tiempo que el lector imagina: es la <b>elipsis</b>. El autor elige qué momentos mostrar y cuáles se sobreentienden.</p><ul><li>El <b>orden de lectura</b> en Occidente va de izquierda a derecha y de arriba abajo (el manga japonés, al revés).</li><li>El <b>tamaño y la forma de la viñeta</b> cambian el ritmo: viñetas pequeñas aceleran; una viñeta grande detiene la acción y la hace importante.</li><li>Los <b>planos y ángulos</b> funcionan igual que en la fotografía.</li><li>El <b>guion</b> previo organiza la historia: planteamiento, nudo y desenlace.</li></ul><p>España tiene una gran tradición de tebeos, desde <b>Mortadelo y Filemón</b> de Francisco Ibáñez hasta autores premiados como Paco Roca (<i>Arrugas</i>).</p>`,
    },
    {
      html: `<h3>Crear tu propia imagen</h3><p>Para crear una foto o una historieta con intención:</p><ol><li><b>Idea</b>: ¿qué quieres contar o transmitir?</li><li><b>Boceto o guion</b>: dibuja a mano las viñetas o el encuadre (un <i>storyboard</i> sencillo).</li><li><b>Decisiones visuales</b>: elige plano, ángulo y composición para cada imagen.</li><li><b>Realización</b>: fotografía o dibuja, primero a lápiz y después entinta y colorea.</li><li><b>Texto</b>: rotula bocadillos y cartelas con letra clara.</li><li><b>Revisión</b>: pide a alguien que lo lea y comprueba si entiende la historia.</li></ol><p>Hay aplicaciones gratuitas para montar cómics con fotos o dibujos, pero el lenguaje es el mismo que en papel.</p>`,
    },
  ],
  figura: {
    titulo: "Las decisiones de la imagen fija",
    svg: `<svg viewBox="0 0 640 282" role="img" aria-label="Plano: distancia al sujeto; ángulo: altura de la mirada; composición: tercios y puntos fuertes; cómic: viñeta, bocadillo y elipsis; lectura crítica">
      <rect width="640" height="282" rx="16" fill="var(--paper)"/>
      ${[["Plano", "general · americano · medio · primer plano · detalle", "var(--pen)"], ["Ángulo", "picado (débil) · normal · contrapicado (poder)", "var(--red)"], ["Composición", "regla de los tercios · puntos fuertes · aire", "var(--leaf)"], ["Cómic", "viñeta · bocadillo · onomatopeya · elipsis", "var(--inf)"], ["Lectura crítica", "edición, manipulación y derecho a la imagen", "var(--ink)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "vqxgn8IbNa4", titulo: "13 planos de la fotografía que debes conocer", canal: "Hanns", vistas: 396353, megusta: 0, busqueda: "planos fotográficos tipos" },
  quiz: mezcla([
    { q: "El plano que muestra el rostro y los hombros es el…", o: ["primer plano", "plano general", "plano americano"], a: 0, e: "Ideal para emociones." },
    { q: "El plano americano encuadra a la persona…", o: ["de la cabeza a las rodillas", "entera con su entorno", "solo los ojos"], a: 0, e: "Típico del wéstern." },
    { q: "En un picado, el sujeto parece…", o: ["poderoso", "pequeño o débil", "igual que en la realidad"], a: 1, e: "Se mira desde arriba." },
    { q: "Para que un personaje parezca imponente se usa el…", o: ["contrapicado", "picado", "cenital"], a: 0, e: "Desde abajo." },
    { q: "La regla de los tercios divide la imagen en…", o: ["4 partes", "9 partes", "3 partes"], a: 1, e: "Dos líneas horizontales y dos verticales." },
    { q: "En la regla de los tercios, el horizonte se coloca…", o: ["en el centro", "en un tercio superior o inferior", "fuera del encuadre"], a: 1, e: "Evita partir la imagen en dos." },
    { q: "El globo con forma de nube indica…", o: ["un grito", "un pensamiento", "la voz del narrador"], a: 1, e: "El borde liso es diálogo." },
    { q: "«¡ZAS!» en un cómic es una…", o: ["cartela", "onomatopeya", "elipsis"], a: 1, e: "Imita un sonido." },
    { q: "El tiempo que transcurre entre dos viñetas y el lector imagina es la…", o: ["elipsis", "metáfora visual", "línea cinética"], a: 0, e: "Lo que no se muestra." },
    { q: "Publicar la foto de otra persona sin permiso vulnera su…", o: ["derecho a la propia imagen", "derecho de autor del móvil", "nada"], a: 0, e: "Hace falta consentimiento." },
  ]),
  examen: mezcla([
    { q: "Para mostrar un paisaje inmenso con personas diminutas se usa el…", o: ["gran plano general", "plano detalle", "plano medio"], a: 0, e: "Sitúa y da inmensidad." },
    { q: "Una viñeta muy grande en una página sirve para…", o: ["destacar un momento importante", "acelerar el ritmo", "ahorrar espacio"], a: 0, e: "Detiene la acción." },
    { q: "Desenfocar el fondo de un retrato sirve para…", o: ["aislar al sujeto", "mostrar el entorno", "corregir el color"], a: 0, e: "Poca profundidad de campo." },
  ]),
  feynman: ["Qué es el encuadre y por qué es una decisión", "Cómo cambia el significado entre picado y contrapicado", "Cómo se aplica la regla de los tercios", "Qué elementos tiene el lenguaje del cómic"],
  mapa: mapa("IMAGEN FIJA", "var(--eso)", [
    ["Plano", "general → detalle", "var(--pen)"],
    ["Ángulo", "picado · contrapicado", "var(--red)"],
    ["Composición", "tercios · aire", "var(--leaf)"],
    ["Cómic", "viñeta · bocadillo", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Encuadre", "La parte de la realidad que entra en la imagen."],
    ["Primer plano", "Rostro y hombros: muestra emociones."],
    ["Plano detalle", "Una parte pequeña: un ojo, una mano."],
    ["Picado", "Desde arriba: el sujeto parece débil."],
    ["Contrapicado", "Desde abajo: el sujeto parece poderoso."],
    ["Regla de los tercios", "Nueve partes; lo importante en líneas y cruces."],
    ["Bocadillo", "Globo con diálogo (liso) o pensamiento (nube)."],
    ["Elipsis", "Tiempo omitido entre viñetas que el lector imagina."],
  ],
  familias: ["Haced juntos tres fotos de la misma persona en picado, normal y contrapicado, y comentad qué transmite cada una.", "Leed un cómic y buscad onomatopeyas, cartelas y metáforas visuales.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje de la imagen fija: encuadre, plano, ángulo, composición, fotografía y sus funciones, derecho a la propia imagen; lenguaje del cómic y narrativa secuencial (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Reto fotográfico en el centro con un plano y un ángulo asignados a cada grupo.", "Convertir un cuento corto en una historieta de seis viñetas.", "Analizar portadas de periódico: plano, ángulo e intención."],
  },
  fuentes: [RD, { t: "Agencia Española de Protección de Datos: imágenes de menores en internet", url: "https://www.aepd.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Análisis guiados",
  ejemplos: [
    { enunciado: "Analiza una foto de un futbolista celebrando un gol, tomada desde abajo, del pecho a la cabeza, con el estadio desenfocado.",
      pasos: ["Plano: plano medio corto (pecho y cabeza).", "Ángulo: contrapicado, que lo engrandece.", "Enfoque: fondo desenfocado que aísla al jugador.", "Intención: transmitir triunfo y heroísmo."],
      resultado: "Una imagen que convierte al jugador en un héroe." },
    { enunciado: "Planifica una foto de un paisaje con un árbol solitario aplicando la regla de los tercios.",
      pasos: ["Divide el encuadre en 3 × 3.", "Coloca el horizonte en la línea inferior para dar protagonismo al cielo.", "Sitúa el árbol sobre una línea vertical, en un punto fuerte.", "Deja aire hacia el lado al que se inclina el árbol."],
      resultado: "Una composición equilibrada y dinámica, no centrada." },
    { enunciado: "Cuenta en tres viñetas que un chico olvida el paraguas y se moja.",
      pasos: ["Viñeta 1, plano general: sale de casa con sol; el paraguas queda en el perchero.", "Viñeta 2, plano medio: mira al cielo nublado (bocadillo de pensamiento: «Oh, no…»).", "Viñeta 3, plano general: llueve a cántaros, onomatopeya «¡PLASH!».", "La elipsis entre las viñetas 1 y 2 sugiere el paso del tiempo."],
      resultado: "Una historieta mínima con planteamiento, nudo y desenlace." },
  ],
  errores: [
    "Colocar siempre al sujeto en el centro exacto de la foto.",
    "Cortar a las personas por las articulaciones (tobillos, rodillas) sin intención.",
    "Confundir picado (desde arriba) con contrapicado (desde abajo).",
    "Poner demasiado texto en los bocadillos y tapar el dibujo.",
    "No respetar el orden de lectura de las viñetas.",
    "Publicar fotos de otras personas sin su consentimiento.",
  ],
  ejercicios: [
    { q: "Ordena del más abierto al más cerrado: primer plano, plano general, plano medio, plano detalle, plano americano.", sol: "Plano general, plano americano, plano medio, primer plano, plano detalle." },
    { q: "¿Qué plano usarías para mostrar el nerviosismo de unas manos antes de un examen?", sol: "Plano detalle." },
    { q: "¿Qué ángulo eliges para que un dragón parezca aterrador? ¿Y para que el caballero parezca indefenso?", sol: "Contrapicado para el dragón y picado para el caballero." },
    { q: "Dibuja un rectángulo, traza la cuadrícula de los tercios y marca los cuatro puntos fuertes.", sol: "Respuesta gráfica: dos líneas a 1/3 y 2/3 en cada dirección; los puntos fuertes son sus cuatro cruces." },
    { q: "Explica la diferencia entre un bocadillo de diálogo y uno de pensamiento.", sol: "El de diálogo tiene borde liso y un rabillo que apunta a quien habla; el de pensamiento tiene forma de nube y burbujas." },
    { q: "Escribe tres onomatopeyas y el sonido que representan.", sol: "Por ejemplo: ¡RING! (timbre), ¡GUAU! (perro), ¡CRASH! (choque)." },
    { q: "¿Para qué sirve una cartela?", sol: "Para la voz del narrador: sitúa en el tiempo o el lugar, o aclara lo que pasa." },
    { q: "¿Qué funciones puede tener una fotografía? Pon un ejemplo de cada una.", sol: "Documental (noticia), artística (exposición), publicitaria (anuncio), personal (álbum familiar)." },
    { q: "Busca una foto publicitaria y analiza su plano, ángulo, composición e intención.", sol: "Respuesta abierta; debe identificar los cuatro aspectos y relacionarlos con el mensaje." },
    { q: "Crea una historieta de cuatro viñetas con al menos dos planos distintos, un bocadillo y una onomatopeya.", sol: "Respuesta abierta. Se valora la claridad narrativa y el uso de los elementos pedidos." },
  ],
};
