// Educación Plástica, Visual y Audiovisual 3º ESO: la textura y la luz. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "La textura y la luz",
  minutos: 50,
  objetivos: ["Distinguir texturas táctiles y visuales, naturales y artificiales", "Conocer técnicas para crear texturas: frottage, estampación, collage, grafismos", "Analizar cómo la luz modela los volúmenes: luces, sombras propias y arrojadas", "Aplicar el claroscuro y las escalas de grises para dar volumen"],
  claves: ["textura", "frottage", "claroscuro", "sombra propia", "sombra arrojada", "contraluz"],
  pregunta: {
    texto: "Un dibujo en papel es completamente plano. ¿Cómo consiguen algunos artistas que un objeto pintado parezca que puedes tocarlo o que sale del papel?",
    respuesta: "Combinando <mark>textura</mark> y <mark>luz</mark>. La textura imita cómo es la superficie (rugosa, lisa, peluda) y las luces y sombras le dan volumen. Caravaggio, por ejemplo, usaba fuertes contrastes de luz y oscuridad para que sus figuras parecieran esculturas.",
  },
  bloques: [
    {
      html: `<h3>Qué es la textura</h3><p>La <b>textura</b> es el aspecto de la superficie de un objeto: rugoso, liso, áspero, suave, brillante, mate, granulado. Percibimos la textura con dos sentidos:</p><ul><li><b>Texturas táctiles</b>: se pueden tocar porque tienen relieve real. La corteza de un árbol, una toalla, la piel de una naranja, un cuadro con pintura muy gruesa.</li><li><b>Texturas visuales</b>: solo se ven; la superficie es lisa, pero el dibujo imita una textura. Una foto de madera impresa en un mueble, el estampado de una tela, el mármol pintado.</li></ul><p>Además, las texturas pueden ser <b>naturales</b> (piedras, hojas, pelo) o <b>artificiales</b> (asfalto, tejidos, plásticos).</p>`,
      svg: svg("Cuatro muestras de textura: madera con vetas, ladrillo, trama de puntos y tejido cruzado", `<rect x="14" y="20" width="110" height="64" rx="6" fill="#c8955c"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M14 ${30 + i * 12} q 30 ${i % 2 ? 6 : -6} 55 0 t 55 0" fill="none" stroke="#8a5a2b" stroke-width="2"/>`).join("")}
        <clipPath id="clb"><rect x="136" y="20" width="110" height="64" rx="6"/></clipPath><rect x="136" y="20" width="110" height="64" rx="6" fill="#c0503a"/><g clip-path="url(#clb)">${[0, 1, 2, 3].map((f) => [0, 1, 2, 3].map((c) => `<rect x="${136 + c * 28 + (f % 2) * 14 - 14}" y="${20 + f * 16}" width="28" height="16" fill="none" stroke="#f3e3d3" stroke-width="2"/>`).join("")).join("")}</g>
        <rect x="14" y="96" width="110" height="64" rx="6" fill="var(--card)" stroke="var(--line)"/>${[...Array(60)].map((_, i) => `<circle cx="${20 + (i % 12) * 9 + (Math.floor(i / 12) % 2) * 4}" cy="${104 + Math.floor(i / 12) * 12}" r="${1 + (i % 12) * 0.25}" fill="var(--ink)"/>`).join("")}
        <rect x="136" y="96" width="110" height="64" rx="6" fill="var(--pen)" fill-opacity=".25"/>${[...Array(10)].map((_, i) => `<path d="M${140 + i * 11} 96 V 160" stroke="var(--pen)" stroke-width="3"/><path d="M136 ${100 + i * 6.4} H 246" stroke="var(--leaf)" stroke-width="2"/>`).join("")}
        ${t(69, 176, "visuales y táctiles", { c: "var(--muted)", s: 10 })}${t(191, 176, "naturales y artificiales", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Valores expresivos de la textura</h3><p>Las texturas despiertan sensaciones y recuerdos: una superficie <b>lisa y brillante</b> sugiere limpieza, modernidad y frialdad (cristal, metal); una <b>rugosa</b>, naturaleza, rusticidad o dureza (piedra, corteza); una <b>suave y esponjosa</b>, comodidad y ternura (algodón, peluche).</p><p>Los diseñadores las usan con intención: un envase con textura de papel kraft transmite «producto natural»; un móvil de cristal pulido, «alta tecnología». En pintura, la textura de la pincelada (empaste grueso o capas lisas) también expresa: las pinceladas gruesas de <mark>Van Gogh</mark> transmiten energía y emoción.</p>`,
    },
    {
      html: `<h3>Técnicas para crear texturas</h3>${tabla(["Técnica", "Cómo se hace"], [["<b>Frottage</b>", "colocar un papel sobre una superficie con relieve y frotar con lápiz o cera"], ["<b>Grattage</b>", "rascar una capa de pintura o cera para dejar ver la de debajo"], ["<b>Estampación</b>", "entintar un objeto (hoja, esponja, tapón) y presionarlo sobre el papel"], ["<b>Collage</b>", "pegar materiales reales: papeles, telas, arena"], ["<b>Grafismos</b>", "repetir trazos, puntos o rayas con lápiz o rotulador"], ["<b>Salpicado y soplado</b>", "salpicar pintura con un cepillo o soplar tinta con una pajita"]])}<p>El pintor surrealista <b>Max Ernst</b> inventó el frottage y el grattage para dejar que el azar sugiriera formas.</p>`,
      video: { id: "yeaBWcAA-WM", titulo: "¿Qué son las texturas visuales? + técnica frottage", canal: "Gisela Duarte", vistas: 110788, megusta: 0 },
    },
    {
      html: `<h3>La luz y el volumen</h3><p>Vemos el volumen de los objetos gracias a la <b>luz</b>: las zonas que la reciben se ven claras y las que no, oscuras. Al representar un objeto iluminado distinguimos:</p><ul><li><b>Luz o zona iluminada</b>: la parte que mira al foco.</li><li><b>Brillo</b>: el punto más claro, donde la luz se refleja directamente.</li><li><b>Penumbra</b>: zona de transición entre luz y sombra.</li><li><b>Sombra propia</b>: parte del objeto que no recibe luz.</li><li><b>Sombra arrojada</b>: la que el objeto proyecta sobre otras superficies.</li><li><b>Luz reflejada</b>: un poco de claridad dentro de la sombra, que rebota desde el suelo.</li></ul>`,
      svg: svg("Esfera iluminada desde arriba a la izquierda: brillo, zona iluminada, penumbra, sombra propia, luz reflejada y sombra arrojada en el suelo", `<defs><radialGradient id="esf" cx="35%" cy="32%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset=".25" stop-color="#d9d9d9"/><stop offset=".65" stop-color="#6b6b6b"/><stop offset=".9" stop-color="#2b2b2b"/><stop offset="1" stop-color="#555"/></radialGradient></defs>
        <ellipse cx="150" cy="140" rx="62" ry="14" fill="#000" fill-opacity=".35"/><circle cx="110" cy="92" r="50" fill="url(#esf)"/><circle cx="26" cy="22" r="10" fill="var(--sun)"/><path d="M36 30 L 70 56" stroke="var(--sun)" stroke-width="2" stroke-dasharray="4 3"/>
        ${t(232, 40, "brillo", { s: 10, a: "end" })}<path d="M196 36 L 98 70" stroke="var(--muted)" stroke-width="1"/>${t(232, 84, "sombra propia", { s: 10, a: "end" })}<path d="M172 80 L 140 104" stroke="var(--muted)" stroke-width="1"/>${t(232, 172, "sombra arrojada", { s: 10, a: "end" })}${t(26, 46, "foco", { c: "var(--hl-ink)", s: 10 })}`),
    },
    {
      html: `<h3>Tipos de iluminación</h3><p>La posición y el tipo de la luz cambian por completo una imagen:</p><ul><li><b>Luz frontal</b>: ilumina de frente; aplana el volumen, apenas hay sombras.</li><li><b>Luz lateral</b>: marca mucho el volumen y las texturas.</li><li><b>Contraluz</b>: la luz está detrás del objeto; se ve su <mark>silueta</mark> oscura con un borde luminoso.</li><li><b>Cenital</b>: desde arriba, como el sol a mediodía.</li><li><b>Nadir</b> (desde abajo): crea un efecto inquietante, típico del cine de terror.</li></ul><p>Además, la luz puede ser <b>dura</b> (foco pequeño, sombras nítidas, como el sol directo) o <b>difusa</b> (sombras suaves, como un día nublado).</p>`,
    },
    {
      html: `<h3>El claroscuro</h3><p>El <b>claroscuro</b> es la técnica de representar el volumen mediante el contraste entre zonas claras y oscuras, con gradaciones suaves. La desarrolló <b>Leonardo da Vinci</b> con el <i>sfumato</i>, unos difuminados tan suaves que no se ven los contornos.</p><p>A finales del siglo XVI, <b>Caravaggio</b> llevó el contraste al extremo con el <mark>tenebrismo</mark>: figuras iluminadas por un foco intenso que surgen de fondos casi negros. En España lo siguieron <b>Ribera</b> y <b>Zurbarán</b>. Esta forma de usar la luz crea dramatismo y dirige la mirada a lo importante.</p>`,
      video: { id: "CyMVDYBleDk", titulo: "5 técnicas de sombreado", canal: "Agata del Barco", vistas: 1021111, megusta: 0 },
    },
    {
      html: `<h3>La escala de grises y el sombreado</h3><p>Para dar volumen con lápiz se trabaja con una <b>escala de grises</b> o de valores: una serie de tonos del blanco al negro. Lo ideal es practicar una escala de 7 a 10 pasos con lápices de distinta dureza (2H, HB, 2B, 6B).</p><p>Técnicas de sombreado:</p><ul><li><b>Degradado</b>: presión gradual del lápiz, sin que se noten los trazos.</li><li><b>Tramado</b> o <i>hatching</i>: líneas paralelas, más juntas cuanto más oscuro.</li><li><b>Trama cruzada</b>: líneas que se cruzan en varias direcciones.</li><li><b>Punteado</b>: puntos más o menos densos.</li><li><b>Difuminado</b>: con difumino o con el dedo, para superficies suaves.</li></ul>`,
      svg: svg("Escala de grises de siete pasos y tres técnicas de sombreado: tramado, trama cruzada y punteado", `${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${20 + i * 31.4}" y="22" width="31.4" height="36" fill="hsl(0 0% ${100 - i * 15}%)" stroke="var(--line)"/>`).join("")}
        <rect x="20" y="80" width="64" height="64" fill="var(--card)" stroke="var(--line)"/>${[...Array(12)].map((_, i) => `<path d="M${24 + i * 5} 140 L ${24 + i * 5 + 0} 84" stroke="var(--ink)" stroke-width="${0.6 + i * 0.12}"/>`).join("")}
        <rect x="98" y="80" width="64" height="64" fill="var(--card)" stroke="var(--line)"/>${[...Array(10)].map((_, i) => `<path d="M${98 + i * 7} 144 L ${98 + i * 7 + 16} 80 M${98 + i * 7} 80 L ${98 + i * 7 + 16} 144" stroke="var(--ink)" stroke-width="0.8"/>`).join("")}
        <rect x="176" y="80" width="64" height="64" fill="var(--card)" stroke="var(--line)"/>${[...Array(120)].map((_, i) => { const x = 180 + ((i * 37) % 56), y = 84 + ((i * 53) % 56); return x < 180 + 56 * ((i % 10) / 10 + 0.15) ? `<circle cx="${x}" cy="${y}" r="1.2" fill="var(--ink)"/>` : ""; }).join("")}
        ${t(52, 162, "tramado", { s: 10 })}${t(130, 162, "trama cruzada", { s: 10 })}${t(208, 162, "punteado", { s: 10 })}`),
    },
    {
      html: `<h3>Luz, textura y fotografía</h3><p>La luz revela las texturas: una luz <b>rasante</b> (muy lateral) hace que destaque cada relieve de una pared de piedra o de una tela, mientras que una luz frontal las borra. Los fotógrafos de producto lo saben y colocan los focos según quieran mostrar o suavizar la superficie.</p><p>En fotografía y cine se habla de la <b>clave</b> de una imagen: <b>clave alta</b> (predominan los tonos claros: luminosa, alegre, limpia) y <b>clave baja</b> (predominan los oscuros: misteriosa, dramática). Fíjate en cómo cambia el ambiente de una película según la luz.</p>`,
    },
    {
      html: `<h3>La textura y la luz en el arte contemporáneo</h3><ul><li><b>Antoni Tàpies</b> incorporó arena, polvo de mármol, telas y objetos a sus cuadros, creando texturas táctiles muy potentes (pintura matérica).</li><li><b>Manolo Millares</b> usó arpilleras rotas y cosidas.</li><li><b>James Turrell</b> y <b>Olafur Eliasson</b> trabajan con la luz como material, creando espacios que cambian de color.</li><li>Los artistas del <b>land art</b> usan las texturas de la naturaleza y la luz del día.</li></ul><p>Observa cómo estos artistas convierten la superficie y la luz en el protagonista de la obra.</p>`,
    },
  ],
  figura: {
    titulo: "Textura y luz en resumen",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Textura táctil o visual; técnicas frottage, estampación, collage; luz: brillo, sombra propia y arrojada; claroscuro y tenebrismo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Textura", "táctil (se toca) · visual (solo se ve)", "var(--pen)"], ["Técnicas", "frottage · grattage · estampación · collage", "var(--leaf)"], ["Luz", "brillo · penumbra · sombra propia · arrojada", "var(--hl-ink)"], ["Claroscuro", "volumen con contraste · tenebrismo", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="190" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "fl1TKE1UMu4", titulo: "Texturas: texturas táctiles y texturas visuales", canal: "Juan Marcel Francia", vistas: 152994, megusta: 0, busqueda: "texturas visuales táctiles plástica" },
  quiz: mezcla([
    { q: "Una foto impresa de madera en un mueble es una textura…", o: ["táctil", "visual", "natural"], a: 1, e: "Solo se ve, no tiene relieve." },
    { q: "Frotar un lápiz sobre un papel colocado encima de una moneda es…", o: ["grattage", "frottage", "collage"], a: 1, e: "Inventado por Max Ernst." },
    { q: "Rascar una capa de cera para descubrir otra de debajo es…", o: ["grattage", "estampación", "punteado"], a: 0, e: "Rascado." },
    { q: "La sombra que un objeto proyecta sobre el suelo es…", o: ["propia", "arrojada", "penumbra"], a: 1, e: "La lanza sobre otra superficie." },
    { q: "El punto más claro de un objeto iluminado es…", o: ["el brillo", "la penumbra", "la luz reflejada"], a: 0, e: "Refleja directamente el foco." },
    { q: "Con la luz detrás del objeto se obtiene…", o: ["luz cenital", "un contraluz", "luz frontal"], a: 1, e: "Se ve la silueta." },
    { q: "¿Qué luz marca más las texturas?", o: ["frontal", "lateral o rasante", "difusa"], a: 1, e: "Crea pequeñas sombras en cada relieve." },
    { q: "El tenebrismo es característico de…", o: ["Caravaggio", "Monet", "Mondrian"], a: 0, e: "Contraste extremo de luz y oscuridad." },
    { q: "Sombrear con líneas paralelas se llama…", o: ["tramado", "difuminado", "punteado"], a: 0, e: "Hatching." },
    { q: "Una imagen con predominio de tonos claros está en…", o: ["clave alta", "clave baja", "contraluz"], a: 0, e: "Luminosa." },
  ]),
  examen: mezcla([
    { q: "Pegar arena y telas sobre un cuadro crea una textura…", o: ["táctil", "visual", "digital"], a: 0, e: "Tiene relieve real." },
    { q: "El sfumato de Leonardo es…", o: ["un difuminado suave sin contornos", "un contraste brusco", "un tipo de collage"], a: 0, e: "Gradaciones muy suaves." },
    { q: "La luz desde abajo produce un efecto…", o: ["inquietante", "natural", "plano"], a: 0, e: "Muy usada en el cine de terror." },
  ]),
  feynman: ["Diferencia entre textura táctil y visual con ejemplos", "Cómo se hace un frottage", "Qué partes tiene la luz sobre una esfera", "Qué es el tenebrismo y para qué sirve"],
  mapa: mapa("TEXTURA Y LUZ", "var(--eso)", [
    ["Textura", "táctil · visual", "var(--pen)"],
    ["Técnicas", "frottage · collage · grafismos", "var(--leaf)"],
    ["Luz", "brillo · sombras", "var(--hl-ink)"],
    ["Claroscuro", "grises · tenebrismo", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Textura táctil", "Tiene relieve real y se puede tocar."],
    ["Textura visual", "Solo se ve; imita una superficie sobre algo liso."],
    ["Frottage", "Frotar un lápiz sobre papel colocado encima de un relieve."],
    ["Sombra propia", "Parte del objeto que no recibe luz."],
    ["Sombra arrojada", "Sombra que el objeto proyecta sobre otra superficie."],
    ["Contraluz", "Luz situada detrás del objeto: se ve su silueta."],
    ["Claroscuro", "Representar el volumen con contraste de luces y sombras."],
    ["Tenebrismo", "Claroscuro extremo con fondos oscuros (Caravaggio)."],
  ],
  familias: ["Haced frottages de texturas de casa (llaves, hojas, rejillas) y adivinad de qué son.", "Iluminad una fruta con una linterna desde distintas posiciones y observad las sombras.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Elementos de la imagen: textura (táctil y visual, técnicas), luz y volumen, claroscuro, valores expresivos de la iluminación (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Catálogo de texturas del centro con frottage.", "Bodegón iluminado con un foco para dibujar luces y sombras.", "Fotografía del mismo objeto con cinco iluminaciones distintas."],
  },
  fuentes: [RD, { t: "Fundació Antoni Tàpies", url: "https://fundaciotapies.org/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Sombrea una esfera con lápiz para que parezca tener volumen.",
      pasos: ["Decide la posición del foco (por ejemplo, arriba a la izquierda).", "Reserva el brillo sin pintar y degrada hacia el lado contrario.", "Oscurece la sombra propia, pero deja una franja algo más clara en el borde (luz reflejada).", "Dibuja la sombra arrojada en el suelo, más oscura junto a la esfera."],
      resultado: "La esfera parece redonda y apoyada en el suelo." },
    { enunciado: "Crea un collage de texturas que represente el mar.",
      pasos: ["Recoge papeles azules y verdes de revistas, papel de seda y arena.", "Arena y papel rugoso en la orilla (texturas táctiles).", "Papeles rasgados en franjas onduladas para las olas.", "Un frottage de una rejilla para imitar la espuma."],
      resultado: "Una imagen que combina texturas visuales y táctiles." },
    { enunciado: "Analiza la luz en «La vocación de san Mateo» de Caravaggio.",
      pasos: ["Un haz de luz lateral entra en diagonal desde la derecha.", "Ilumina los rostros y manos importantes; el fondo queda casi negro.", "El contraste dirige la mirada y da dramatismo: es tenebrismo."],
      resultado: "La luz cuenta la historia: señala a quién llama Cristo." },
  ],
  errores: [
    "Contornear con una línea negra fuerte un objeto que se quiere sombrear con suavidad.",
    "Poner luces y sombras sin decidir antes dónde está el foco.",
    "Confundir sombra propia y sombra arrojada.",
    "Pensar que toda textura tiene que tener relieve real.",
    "Usar un solo lápiz duro para todo: no alcanza los negros profundos.",
  ],
  ejercicios: [
    { q: "Clasifica: piel de naranja, estampado de cebra en una camiseta, papel de lija, mármol impreso en un suelo vinílico.", sol: "Táctil natural; visual artificial; táctil artificial; visual (imita una natural)." },
    { q: "Describe paso a paso la técnica del frottage.", sol: "Colocar un papel fino sobre una superficie con relieve, sujetarlo y frotar en una dirección con lápiz blando o cera, sin apretar demasiado." },
    { q: "¿Qué sensación transmiten una superficie de terciopelo, una de acero pulido y una de piedra rugosa?", sol: "Suavidad y lujo; frialdad y modernidad; dureza y naturaleza." },
    { q: "Dibuja un cubo iluminado desde la derecha y señala la luz, la sombra propia y la arrojada.", sol: "Respuesta gráfica. La cara derecha más clara, la izquierda oscura (sombra propia) y la sombra arrojada hacia la izquierda en el suelo." },
    { q: "Haz una escala de grises de siete pasos. ¿Qué lápices usarías?", sol: "Del blanco del papel al negro: 2H, H, HB, B, 2B, 4B, 6B, aumentando la presión." },
    { q: "Explica la diferencia entre luz dura y luz difusa.", sol: "Dura: foco pequeño o directo, sombras nítidas y contrastadas. Difusa: luz repartida, sombras suaves." },
    { q: "¿Qué iluminación elegirías para fotografiar a un personaje de terror? ¿Y un anuncio de un producto de limpieza?", sol: "Terror: luz desde abajo, clave baja. Limpieza: luz difusa y clara, clave alta." },
    { q: "Nombra dos pintores tenebristas españoles.", sol: "José de Ribera y Francisco de Zurbarán." },
    { q: "¿Por qué la luz rasante es útil para fotografiar texturas?", sol: "Porque al llegar muy inclinada, cada relieve proyecta una pequeña sombra y la textura se hace visible." },
    { q: "Crea una composición abstracta con al menos cuatro técnicas de textura y etiqueta cada una.", sol: "Respuesta abierta. Debe incluir, por ejemplo, frottage, estampación, collage y grafismos, señalados." },
  ],
};
