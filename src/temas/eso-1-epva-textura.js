// Educación Plástica, Visual y Audiovisual 1º ESO: la textura. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

// Cuadro de muestra de textura (x, y, lado) con un dibujo interior.
const muestra = (x, y, l, dentro, nombre, c = "var(--pen)") => `<rect x="${x}" y="${y}" width="${l}" height="${l}" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/><g>${dentro}</g>${t(x + l / 2, y + l + 16, nombre, { s: 10, c })}`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "La textura",
  minutos: 50,
  objetivos: ["Definir la textura y distinguir texturas táctiles y visuales", "Diferenciar texturas naturales y artificiales, orgánicas y geométricas", "Crear texturas con técnicas gráficas, de frotado, de estampado y de collage", "Usar la textura con intención expresiva en una composición"],
  claves: ["textura", "textura táctil", "textura visual", "frottage", "estampación", "collage"],
  pregunta: {
    texto: "En un videojuego, una pared de piedra parece rugosa aunque la pantalla sea completamente lisa. ¿Cómo es posible?",
    respuesta: "Porque es una <b>textura visual</b>: un dibujo de luces, sombras y manchas que imita la piedra. Nuestro cerebro recuerda cómo es tocar una piedra y lo «siente» al verla. <mark>Las texturas visuales engañan a la vista; las táctiles se notan con las manos</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la textura?</h3><p>La <b>textura</b> es el aspecto de la <b>superficie</b> de un objeto: si es lisa o rugosa, suave o áspera, brillante o mate, blanda o dura.</p><p>Percibimos la textura con dos sentidos:</p><ul><li>Con el <b>tacto</b>, al tocar la superficie.</li><li>Con la <b>vista</b>, porque la luz crea pequeñas sombras y brillos en los relieves.</li></ul><p>Todo tiene textura: la corteza de un árbol, una toalla, un cristal, la piel de una naranja, el asfalto. En el arte, la textura aporta <b>realismo</b>, <b>riqueza</b> y <b>emoción</b>: una superficie rugosa puede transmitir dureza o antigüedad; una lisa, limpieza y modernidad.</p>`,
    },
    {
      html: `<h3>Texturas táctiles y visuales</h3><ul><li><b>Táctiles</b>: tienen <b>relieve real</b> y se pueden tocar. La arena pegada en un cuadro, el empaste grueso de pintura, un relieve de barro, la tela de un collage.</li><li><b>Visuales</b>: son <b>planas</b>, solo se ven. Imitan o inventan una textura con dibujo o pintura: el veteado de la madera dibujado, una foto de una pared, un estampado de tela impreso.</li></ul><p>Una textura táctil siempre es también visual (se ve), pero una visual no es táctil. Si cierras los ojos y pasas la mano por una foto de una piedra, notarás el papel liso.</p>`,
      svg: svg("Dos muestras: a la izquierda una superficie con relieve real y sombras; a la derecha un dibujo plano de madera veteada", `${muestra(28, 30, 90, [...Array(16)].map((_, i) => `<circle cx="${40 + (i % 4) * 22}" cy="${42 + Math.floor(i / 4) * 22}" r="7" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)"/><path d="M${44 + (i % 4) * 22} ${46 + Math.floor(i / 4) * 22} a 7 7 0 0 1 -9 -1" fill="none" stroke="var(--ink)" stroke-width="1.5" opacity=".5"/>`).join(""), "táctil: relieve")}${muestra(142, 30, 90, [0, 1, 2, 3, 4, 5].map((i) => `<path d="M146 ${40 + i * 14} C 170 ${34 + i * 14} 200 ${48 + i * 14} 228 ${40 + i * 14}" fill="none" stroke="var(--sun)" stroke-width="2"/>`).join("") + `<ellipse cx="190" cy="76" rx="10" ry="6" fill="none" stroke="var(--sun)" stroke-width="2"/>`, "visual: dibujo", "var(--sun)")}`),
      video: vb("texB"),
    },
    {
      html: `<h3>Naturales y artificiales</h3><ul><li><b>Naturales</b>: las que encontramos en la naturaleza: la corteza de los árboles, las piedras, las plumas, las escamas de un pez, las vetas de la madera. Suelen ser <b>orgánicas</b> e irregulares.</li><li><b>Artificiales</b>: las fabricadas por el ser humano: el tejido de un jersey, el cartón ondulado, una rejilla metálica, el plástico de burbujas. Muchas son <b>geométricas</b> y regulares, con un patrón que se repite.</li></ul><p>Observar texturas naturales con una lupa es una gran fuente de ideas: muchos diseños textiles y de papel pintado se inspiran en ellas.</p>`,
      svg: svg("Cuatro muestras de texturas: escamas, corteza de árbol, tejido de punto y rejilla", `${muestra(14, 24, 52, [0, 1, 2].map((r) => [0, 1, 2].map((c) => `<path d="M${18 + c * 16 + (r % 2) * 8} ${36 + r * 12} a 8 8 0 0 0 16 0" fill="none" stroke="var(--leaf)" stroke-width="1.6"/>`).join("")).join(""), "escamas", "var(--leaf)")}${muestra(76, 24, 52, [0, 1, 2, 3].map((i) => `<path d="M${84 + i * 12} 28 C ${78 + i * 12} 44 ${90 + i * 12} 56 ${82 + i * 12} 72" fill="none" stroke="var(--sun)" stroke-width="1.8"/>`).join(""), "corteza", "var(--sun)")}${muestra(138, 24, 52, [0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => `<path d="M${142 + c * 12} ${30 + r * 11} l 5 7 l 5 -7" fill="none" stroke="var(--red)" stroke-width="1.6"/>`).join("")).join(""), "punto", "var(--red)")}${muestra(200, 24, 52, [0, 1, 2, 3].map((i) => `<path d="M${206 + i * 12} 24 V 76 M200 ${30 + i * 12} H 252" stroke="var(--pen)" stroke-width="1.4"/>`).join(""), "rejilla")}${t(70, 120, "naturales", { c: "var(--leaf)", s: 12 })}${t(195, 120, "artificiales", { c: "var(--red)", s: 12 })}`, 140),
    },
    {
      html: `<h3>Texturas gráficas: con lápiz y rotulador</h3><p>Con instrumentos de dibujo podemos crear texturas visuales repitiendo <b>puntos, líneas y manchas</b>:</p><ul><li><b>Punteado</b>: arena, piel, cielos estrellados.</li><li><b>Rayado</b> y <b>tramado</b>: madera, hierba, tejidos.</li><li><b>Líneas curvas y espirales</b>: agua, pelo rizado, vetas.</li><li><b>Garabatos</b> y círculos pequeños: musgo, nubes, espuma.</li></ul><p>La clave está en <mark>repetir un mismo gesto</mark> de forma más o menos regular y en variar la presión y la densidad para conseguir luces y sombras. Hacer un «catálogo» de 12 texturas inventadas es un buen ejercicio de entrenamiento.</p>`,
    },
    {
      html: `<h3>El frottage o frotado</h3><p>El <b>frottage</b> (del francés <i>frotter</i>, frotar) consiste en colocar un papel fino sobre una superficie con relieve y <mark>frotar con un lápiz blando o una cera</mark> tumbada. El relieve aparece en el papel como una textura visual.</p><p>Se pueden frotar monedas, hojas de árbol (por el revés, donde se notan los nervios), suelas de zapatillas, rejillas, maderas o paredes.</p><p>El pintor surrealista <b>Max Ernst</b> lo popularizó hacia 1925: frotaba tablas del suelo de su casa y veía en las vetas bosques, animales y figuras fantásticas. Es una técnica perfecta para «capturar» texturas reales y usarlas después recortadas en un collage.</p>`,
      svg: svg("Una hoja bajo un papel y una cera frotando: en el papel aparecen los nervios de la hoja", `<path d="M60 140 C 40 100 60 50 110 34 C 120 80 100 120 60 140 Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><path d="M60 140 L 104 44 M76 104 L 96 96 M84 86 L 104 80 M70 120 L 90 116" stroke="var(--leaf)" stroke-width="1.5"/><rect x="140" y="40" width="100" height="100" rx="4" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/><path d="M168 132 C 150 100 168 62 210 50 M168 132 L 206 56 M182 104 L 200 96 M188 88 L 206 82" fill="none" stroke="var(--ink)" stroke-width="3" opacity=".55" stroke-dasharray="2 2"/><rect x="210" y="108" width="30" height="12" rx="3" transform="rotate(-30 225 114)" fill="var(--red)"/>${t(80, 164, "hoja", { c: "var(--leaf)", s: 11 })}${t(190, 164, "frottage", { s: 11 })}`),
    },
    {
      html: `<h3>Otras técnicas para crear texturas</h3>${tabla(["Técnica", "Cómo se hace", "Efecto"], [["Estampación", "mojar en pintura un objeto (esponja, corcho, hoja, verdura cortada) y presionarlo sobre el papel", "repetición de huellas"], ["Esgrafiado", "cubrir el papel con ceras de colores, tapar con cera negra y rascar con un palillo", "líneas de colores sobre negro"], ["Salpicado", "frotar un cepillo de dientes con pintura sobre una rejilla", "lluvia de puntos finos"], ["Collage", "pegar papeles, telas, arena, cartón…", "textura táctil real"], ["Empaste", "aplicar pintura espesa con espátula", "relieve de pintura"], ["Sal y acuarela", "echar sal sobre la acuarela húmeda", "manchas estrelladas"]])}`,
      video: vb("texB2"),
    },
    {
      html: `<h3>La textura en el arte</h3><ul><li><b>Vincent van Gogh</b> pintaba con pinceladas gruesas y visibles (empaste) que dan movimiento y vibración a sus cielos y campos.</li><li><b>Antoni Tàpies</b> mezclaba la pintura con arena, polvo de mármol y otros materiales para crear cuadros que parecen muros.</li><li><b>Manolo Millares</b> usaba sacos de arpillera rotos y cosidos.</li><li>Los <b>mosaicos</b> romanos y los <b>trencadís</b> de Gaudí crean texturas con fragmentos de piedra o cerámica.</li></ul><p>En diseño gráfico, las texturas dan carácter: un papel con aspecto envejecido sugiere tradición; un fondo metálico, tecnología.</p>`,
    },
    {
      html: `<h3>Practica: un cuadro de texturas</h3><ol><li>Dibuja un tema sencillo con formas grandes: un pez, un paisaje, un animal.</li><li>Divide el dibujo en <b>zonas</b> (escamas, aletas, agua, fondo…).</li><li>Rellena cada zona con una <b>textura distinta</b>: unas gráficas (puntos, líneas), otras de frottage recortado y pegado, alguna táctil (papel arrugado, tela, arena).</li><li>Busca <b>contraste</b>: pon junto a una zona lisa otra muy rugosa para que ambas destaquen.</li></ol><p>Al terminar, pasa la mano por la obra con los ojos cerrados y comprueba qué zonas son táctiles y cuáles solo visuales.</p>`,
    },
  ],
  figura: {
    titulo: "La textura en un vistazo",
    svg: filas("Resumen: la textura es el aspecto de la superficie; táctil y visual; natural y artificial; texturas gráficas; frottage; estampación, esgrafiado y collage", [["Textura", "aspecto de la superficie", "var(--pen)"], ["Táctil · visual", "se toca · solo se ve", "var(--inf)"], ["Natural · artificial", "orgánica · geométrica", "var(--leaf)"], ["Gráficas", "puntos · rayas · tramas", "var(--sun)"], ["Frottage", "frotar sobre un relieve", "var(--red)"], ["Otras técnicas", "estampar · esgrafiar · collage", "var(--ink)"]], 220),
  },
  video: vg("texV"),
  quiz: mezcla([
    { q: "La textura es el aspecto de…", o: ["la superficie", "el contorno", "el color"], a: 0, e: "Lisa, rugosa…" },
    { q: "Una textura que se puede tocar es…", o: ["táctil", "visual", "artificial siempre"], a: 0, e: "Relieve real." },
    { q: "Una foto de una pared de ladrillo tiene textura…", o: ["visual", "táctil", "natural"], a: 0, e: "Es plana." },
    { q: "La corteza de un árbol es una textura…", o: ["natural", "artificial", "geométrica"], a: 0, e: "De la naturaleza." },
    { q: "El tejido de un jersey es una textura…", o: ["artificial", "natural", "orgánica"], a: 0, e: "Fabricada." },
    { q: "Frotar un lápiz sobre un papel colocado encima de un relieve es…", o: ["frottage", "esgrafiado", "estampación"], a: 0, e: "Del francés frotar." },
    { q: "¿Quién popularizó el frottage?", o: ["Max Ernst", "Van Gogh", "Picasso"], a: 0, e: "Surrealista." },
    { q: "Rascar una capa de cera negra para ver los colores de debajo es…", o: ["esgrafiado", "collage", "salpicado"], a: 0, e: "Con un palillo." },
    { q: "Pegar materiales sobre un soporte es…", o: ["collage", "frottage", "punteado"], a: 0, e: "Textura real." },
    { q: "Un artista que mezclaba pintura con arena:", o: ["Tàpies", "Seurat", "Mondrian"], a: 0, e: "Cuadros como muros." },
  ]),
  examen: mezcla([
    { q: "La pintura muy espesa aplicada con espátula es…", o: ["empaste", "aguada", "punteado"], a: 0, e: "Relieve." },
    { q: "Una textura táctil es también…", o: ["visual", "invisible", "artificial"], a: 0, e: "Se ve y se toca." },
    { q: "Para estampar una textura se usa…", o: ["un objeto mojado en pintura", "una goma", "un compás"], a: 0, e: "Huellas." },
  ]),
  feynman: ["Qué es la textura", "Diferencia entre textura táctil y visual", "Cómo se hace un frottage", "Tres técnicas para crear texturas", "Cómo usaron la textura Van Gogh o Tàpies"],
  mapa: mapa("LA TEXTURA", "var(--eso)", [
    ["Tipos", "táctil · visual", "var(--pen)"],
    ["Origen", "natural · artificial", "var(--leaf)"],
    ["Técnicas", "frottage · estampar · collage", "var(--red)"],
    ["En el arte", "Van Gogh · Tàpies · Ernst", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Textura", "Aspecto de la superficie de un objeto."],
    ["Táctil", "Tiene relieve real y se puede tocar."],
    ["Visual", "Es plana: solo se ve."],
    ["Natural", "Textura de la naturaleza: corteza, piedra…"],
    ["Frottage", "Frotar un lápiz sobre un papel encima de un relieve."],
    ["Estampación", "Imprimir con un objeto mojado en pintura."],
    ["Esgrafiado", "Rascar una capa para descubrir la de debajo."],
    ["Collage", "Pegar materiales diversos sobre un soporte."],
  ],
  familias: ["Salid a hacer frottages de hojas, monedas y tapas de alcantarilla con ceras.", "Estampad con medias patatas talladas o con esponjas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La textura: tipos, cualidades expresivas y técnicas gráfico-plásticas para obtenerla (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Catálogo de texturas por frottage del centro escolar.", "Muestrario táctil con ojos vendados.", "Composición mixta con texturas gráficas, frottage y collage."],
  },
  fuentes: [RD, { t: "Fundació Antoni Tàpies", url: "https://fundaciotapies.org/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Haz un frottage de una hoja de árbol.", pasos: ["Coloca la hoja con los nervios hacia arriba y un folio fino encima.", "Sujeta el folio y frota con una cera tumbada, siempre en la misma dirección.", "Aparecen el contorno y los nervios: recórtala si quieres usarla en un collage."], resultado: "Una textura visual que reproduce la hoja real." },
    { enunciado: "Crea un esgrafiado de un cielo nocturno.", pasos: ["Colorea todo el papel con ceras de colores vivos y apretando.", "Cubre todo con cera negra (o témpera negra con jabón).", "Rasca con un palillo estrellas, una luna y un paisaje."], resultado: "Líneas de colores brillantes sobre fondo negro." },
    { enunciado: "Dibuja un tronco de árbol con textura gráfica.", pasos: ["Dibuja el contorno del tronco.", "Rellena con líneas verticales onduladas, más juntas en el lado de la sombra.", "Añade algunos óvalos (nudos) y grietas con trazos cortos."], resultado: "Un tronco con aspecto rugoso usando solo líneas." },
  ],
  errores: [
    "Pensar que una foto de una superficie rugosa es una textura táctil.",
    "Hacer el frottage con la punta del lápiz en lugar de con el lado, rompiendo el papel.",
    "Usar la misma textura en todas las zonas, lo que hace la obra monótona.",
    "Poner demasiada pintura al estampar y perder el dibujo de la huella.",
  ],
  ejercicios: [
    { q: "Describe con adjetivos la textura de cinco objetos de tu mochila.", sol: "Por ejemplo: estuche (suave), regla (lisa), goma (blanda), libro (mate), cremallera (rugosa)." },
    { q: "Clasifica como táctiles o visuales: arena pegada, foto de mármol, papel arrugado, dibujo de escamas.", sol: "Táctil, visual, táctil, visual." },
    { q: "Escribe tres texturas naturales y tres artificiales.", sol: "Por ejemplo: corteza, plumas, piedra; tela vaquera, cartón ondulado, plástico de burbujas." },
    { q: "Haz un catálogo de 9 texturas gráficas en una cuadrícula de 3 × 3.", sol: "Respuesta práctica." },
    { q: "Haz frottages de cinco superficies distintas del aula y etiquétalos.", sol: "Respuesta práctica." },
    { q: "Explica la técnica del esgrafiado.", sol: "Capa de colores, capa oscura encima y rascar para descubrir los colores." },
    { q: "Estampa un motivo con media patata tallada y forma una composición repetida.", sol: "Respuesta práctica." },
    { q: "¿Qué sensación transmite una textura rugosa? ¿Y una lisa y brillante?", sol: "Dureza, antigüedad, naturaleza; limpieza, modernidad, frialdad." },
    { q: "Busca una obra de Van Gogh y describe cómo usa la textura.", sol: "Respuesta abierta: pinceladas gruesas, visibles y en remolino que dan movimiento." },
    { q: "Crea una composición que combine al menos una textura táctil, una de frottage y una gráfica.", sol: "Respuesta práctica." },
  ],
};
