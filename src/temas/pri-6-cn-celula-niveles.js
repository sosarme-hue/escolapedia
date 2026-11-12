// Ciencias de la Naturaleza 6º de Primaria: la célula y los niveles de organización. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, anillos, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Célula animal (redonda) y vegetal (con pared y cloroplastos) en pequeño.
const celAnimal = (x, y, r = 34) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.82}" fill="#fecaca" fill-opacity=".6" stroke="var(--red)" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r * 0.3}" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.5"/><ellipse cx="${x - r * 0.55}" cy="${y - r * 0.3}" rx="6" ry="3.5" fill="#fdba74" stroke="#c2410c"/><ellipse cx="${x + r * 0.5}" cy="${y + r * 0.35}" rx="6" ry="3.5" fill="#fdba74" stroke="#c2410c"/>`;
const celVegetal = (x, y, w = 70, h = 62) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="4" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/><rect x="${x - w / 2 + 14}" y="${y - h / 2 + 10}" width="${w - 26}" height="${h - 22}" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="1.2"/><circle cx="${x - w / 2 + 12}" cy="${y + h / 2 - 12}" r="7" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.2"/>${[[-w / 2 + 8, -h / 2 + 8], [w / 2 - 8, -h / 2 + 14], [w / 2 - 9, h / 2 - 10], [0, h / 2 - 6]].map(([a, b]) => `<ellipse cx="${x + a}" cy="${y + b}" rx="5" ry="3" fill="#22c55e" stroke="#15803d"/>`).join("")}`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La célula y los niveles de organización",
  minutos: 45,
  objetivos: ["Saber qué es la célula y cuáles son sus partes", "Distinguir la célula animal de la vegetal", "Diferenciar seres unicelulares y pluricelulares", "Ordenar los niveles de organización: célula, tejido, órgano, aparato y organismo"],
  claves: ["célula", "membrana", "citoplasma", "núcleo", "unicelular", "pluricelular", "tejido", "órgano", "aparato", "sistema", "organismo", "microscopio"],
  pregunta: {
    texto: "Una ballena azul mide 30 metros y una hormiga, 3 milímetros. ¿Tienen algo en común por dentro?",
    respuesta: "Sí: las dos están formadas por <mark>células</mark>. Las células de la ballena no son gigantes: son casi del mismo tamaño que las de la hormiga. La diferencia es que la ballena tiene <b>muchísimas más</b>. Todos los seres vivos, grandes o pequeños, están hechos de células.",
  },
  bloques: [
    {
      html: `<h3>La célula, la pieza básica de la vida</h3><p>Igual que una casa está hecha de ladrillos, los seres vivos están hechos de <mark>células</mark>. La célula es la <b>unidad más pequeña que tiene vida</b>: se alimenta, se relaciona con lo que la rodea y se reproduce. Por eso decimos que es la unidad básica de los seres vivos.</p><p>Las células son tan pequeñas que no se ven a simple vista. La mayoría mide entre 10 y 100 <b>micras</b> (una micra es la milésima parte de un milímetro). En el punto de esta frase cabrían decenas de células. Para verlas necesitamos un <b>microscopio</b>, un aparato con lentes que hace que las cosas se vean cientos de veces más grandes.</p><p>Hay células de formas muy distintas: redondas, alargadas, con ramas o planas. Cada forma está pensada para el trabajo que hace esa célula.</p>`,
      svg: svg("Un ladrillo es a una casa lo que una célula es a un ser vivo", `${tit("Ladrillos de la vida")}<rect x="22" y="70" width="40" height="22" fill="#e07a5f" stroke="var(--ink)"/>${t(42, 112, "ladrillo", { size: 10, weight: 400 })}<path d="M90 120 V70 L120 48 L150 70 V120 Z" fill="#f2cc8f" stroke="var(--ink)" stroke-width="1.5"/>${[0, 1, 2, 3].map((i) => `<path d="M90 ${80 + i * 10} H150" stroke="#e07a5f" stroke-width="1"/>`).join("")}${t(120, 136, "casa", { size: 10, weight: 400 })}${celAnimal(200, 80, 22)}${t(200, 112, "célula", { size: 10, weight: 400 })}${tx(130, 162, "Muchas células juntas forman un ser vivo", 230, { weight: 700, color: COL.azul })}`),
      video: vid("aoj9oTvVJ8o"),
    },
    {
      html: `<h3>Las partes de la célula</h3><p>Aunque hay células muy diferentes, casi todas tienen <b>tres partes</b>:</p><p>La <mark>membrana</mark> es una capa muy fina que rodea la célula. La separa del exterior y decide qué sustancias entran (como el alimento y el oxígeno) y cuáles salen (como los desechos). Funciona como la puerta vigilada de un colegio.</p><p>El <mark>citoplasma</mark> es el interior de la célula. Es una especie de gelatina con agua donde flotan unas pequeñas estructuras llamadas <b>orgánulos</b>. Cada orgánulo tiene una tarea: por ejemplo, las <b>mitocondrias</b> obtienen la energía de los alimentos.</p><p>El <mark>núcleo</mark> es el centro de mando. Dentro guarda el <b>material genético</b> (ADN), que tiene las instrucciones para que la célula funcione y para fabricar células nuevas. Las bacterias son una excepción: no tienen núcleo y su ADN está suelto en el citoplasma.</p>`,
      svg: svg("Célula con sus partes señaladas: membrana, citoplasma, núcleo y mitocondria", `${tit("Partes de la célula")}<ellipse cx="110" cy="100" rx="78" ry="58" fill="#fecaca" fill-opacity=".55" stroke="var(--red)" stroke-width="3"/><circle cx="110" cy="100" r="22" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/><circle cx="114" cy="96" r="6" fill="#6d28d9"/><ellipse cx="66" cy="78" rx="12" ry="6" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><ellipse cx="150" cy="128" rx="12" ry="6" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><circle cx="150" cy="74" r="5" fill="#bae6fd"/><circle cx="70" cy="128" r="4" fill="#bae6fd"/>
        <path d="M184 86 L200 62" stroke="var(--ink)"/>${et(222, 58, "membrana", 70, { size: 11, color: COL.rojo })}<path d="M130 100 L200 100" stroke="var(--ink)"/>${et(226, 104, "núcleo", 60, { size: 11, color: COL.morado })}<path d="M162 128 L200 142" stroke="var(--ink)"/>${et(226, 146, "mitocondria", 60, { size: 11, color: COL.naranja })}<path d="M80 110 L40 166" stroke="var(--ink)"/>${et(70, 172, "citoplasma", 80, { size: 11, color: COL.agua })}`),
    },
    {
      html: `<h3>Célula animal y célula vegetal</h3><p>Las células de los animales y las de las plantas se parecen, pero tienen diferencias importantes.</p><p>La <mark>célula vegetal</mark> tiene, por fuera de la membrana, una <b>pared celular</b> dura y rígida. Gracias a ella sus células tienen forma de caja y las plantas se mantienen tiesas. También tiene <b>cloroplastos</b>, unos orgánulos verdes con <b>clorofila</b> donde se fabrica el alimento con la luz del sol (la fotosíntesis). Y suele tener una gran <b>vacuola</b>, un depósito de agua que ocupa casi todo el interior.</p><p>La <mark>célula animal</mark> no tiene pared ni cloroplastos. Por eso su forma es más variable y blanda, y no puede fabricar su alimento: lo obtiene de lo que come el animal. Sus vacuolas, si tiene, son pequeñas.</p>`,
      svg: svg("Célula animal redondeada y célula vegetal con forma de caja, pared, cloroplastos y gran vacuola", `${tit("Animal y vegetal")}${celAnimal(70, 92, 44)}${celVegetal(190, 92, 88, 80)}${et(70, 150, "animal", 100, { size: 12, color: COL.rojo })}${et(190, 150, "vegetal", 100, { size: 12, color: COL.verde })}${tx(70, 166, "sin pared ni cloroplastos", 110)}${tx(190, 166, "pared + cloroplastos + vacuola", 110)}`),
      video: vid("0tTJbBi3Zbw"),
    },
    {
      html: `<h3>Seres unicelulares y pluricelulares</h3><p>Algunos seres vivos están formados por <b>una sola célula</b>: son los <mark>seres unicelulares</mark>. Esa única célula lo hace todo: se alimenta, se mueve, detecta lo que hay a su alrededor y se reproduce. Casi todos son microscópicos. Ejemplos: las <b>bacterias</b>, los <b>paramecios</b> que nadan en los charcos o las <b>levaduras</b> que hacen subir el pan.</p><p>Otros están formados por <b>muchas células</b>: son los <mark>seres pluricelulares</mark>, como las plantas, los animales y la mayoría de los hongos. Tu cuerpo, por ejemplo, tiene unos <b>30 billones</b> de células.</p><p>En los pluricelulares, las células se <b>reparten el trabajo</b>. Unas solo transmiten mensajes, otras solo se contraen para moverse, otras solo transportan oxígeno. Cada una se especializa en una tarea y la hace muy bien, pero ya no podría vivir sola.</p>`,
      svg: svg("Un paramecio formado por una sola célula frente a una persona formada por billones de células", `${tit("Una célula o muchas")}<ellipse cx="68" cy="92" rx="44" ry="22" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/>${[...Array(18)].map((_, i) => { const a = (i / 18) * 2 * Math.PI; return `<path d="M${(68 + 44 * Math.cos(a)).toFixed(1)} ${(92 + 22 * Math.sin(a)).toFixed(1)} l${(5 * Math.cos(a)).toFixed(1)} ${(5 * Math.sin(a)).toFixed(1)}" stroke="var(--water)" stroke-width="1.5"/>`; }).join("")}<circle cx="72" cy="90" r="7" fill="#c4b5fd"/>${et(68, 136, "unicelular", 110, { size: 12, color: COL.agua })}${tx(68, 152, "paramecio: 1 célula", 110)}
        <circle cx="190" cy="56" r="12" fill="#f3c9a1"/><path d="M190 68 V110 M190 78 L172 98 M190 78 L208 98 M190 110 L178 136 M190 110 L202 136" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>${et(190, 152, "pluricelular", 110, { size: 12, color: COL.azul })}${tx(190, 168, "persona: 30 billones", 110)}`),
    },
    {
      html: `<h3>Células especializadas</h3><p>En tu cuerpo hay más de 200 tipos de células. Fíjate en algunas y en cómo su forma está relacionada con su trabajo:</p>${tabla(["Célula", "Forma", "Trabajo"], [["Neurona", "con muchas ramas y una cola larga", "transmite mensajes"], ["Glóbulo rojo", "disco aplastado, sin núcleo", "lleva oxígeno por la sangre"], ["Célula muscular", "alargada como un hilo", "se contrae para movernos"], ["Célula de la piel", "plana, como una baldosa", "protege y cubre el cuerpo"], ["Óvulo y espermatozoide", "grande y redondo / con cola", "sirven para la reproducción"]])}<p>Las plantas también tienen células especializadas: las de las <b>raíces</b> absorben agua; las de las <b>hojas</b> tienen muchos cloroplastos para hacer la fotosíntesis; y otras forman tubos que llevan la savia.</p>`,
      svg: svg("Cuatro células especializadas: neurona, glóbulo rojo, célula muscular y célula de la piel", `${tit("Cada forma, un trabajo")}<g transform="translate(60 74)"><circle r="12" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>${[0, 70, 140, 200, 250].map((a) => `<path d="M0 0 L${(26 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(26 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="#6d28d9" stroke-width="2"/>`).join("")}<path d="M10 6 Q40 20 70 10" stroke="#6d28d9" stroke-width="2" fill="none"/></g>${tx(60, 112, "neurona", 90, { weight: 700 })}
        <ellipse cx="196" cy="72" rx="26" ry="18" fill="var(--red)"/><ellipse cx="196" cy="72" rx="12" ry="7" fill="#b91c1c"/>${tx(196, 112, "glóbulo rojo", 90, { weight: 700 })}
        <path d="M24 140 Q60 130 100 140 Q60 150 24 140 Z" fill="#fca5a5" stroke="var(--red)"/>${tx(62, 168, "célula muscular", 100, { weight: 700 })}
        ${[0, 1, 2].map((i) => `<rect x="${152 + i * 30}" y="130" width="28" height="16" rx="2" fill="#fde68a" stroke="#b45309"/>`).join("")}${tx(196, 168, "piel", 90, { weight: 700 })}`),
    },
    {
      html: `<h3>Los niveles de organización</h3><p>En un ser pluricelular, las células no están desordenadas: se agrupan en equipos cada vez más grandes. Son los <mark>niveles de organización</mark>.</p><p>1. <b>Célula</b>: la unidad más pequeña con vida.</p><p>2. <b>Tejido</b>: grupo de células parecidas que hacen el mismo trabajo. Por ejemplo, el tejido muscular.</p><p>3. <b>Órgano</b>: unión de varios tejidos que trabajan juntos en una tarea. Por ejemplo, el corazón, el estómago o una hoja.</p><p>4. <b>Aparato o sistema</b>: conjunto de órganos que colaboran en una función. Por ejemplo, el aparato digestivo.</p><p>5. <b>Organismo</b>: el ser vivo completo, formado por todos sus aparatos y sistemas trabajando a la vez.</p><p>Es como un colegio: cada alumno (célula) está en una clase (tejido), las clases forman un ciclo (órgano), los ciclos forman la etapa (aparato) y todas juntas forman el colegio (organismo).</p>`,
      svg: svg("Escalera de niveles: célula, tejido, órgano, aparato y organismo", `${tit("De pequeño a grande")}${[["célula", COL.rojo], ["tejido", COL.naranja], ["órgano", COL.sol], ["aparato", COL.verde], ["organismo", COL.azul]].map(([s, c], i) => cj(12 + i * 48, 150 - (30 + i * 22), 46, 30 + i * 22, s, c, { op: 0.22, size: 11 })).join("")}${tx(130, 170, "Cada nivel está formado por el anterior", 230)}`),
    },
    {
      html: `<h3>Los tejidos del cuerpo humano</h3><p>En el cuerpo humano hay cuatro tipos principales de tejidos:</p><p>El <mark>tejido epitelial</mark> recubre el cuerpo por fuera (la piel) y por dentro (el interior del estómago o de la boca). Sus células están muy juntas, como baldosas.</p><p>El <mark>tejido muscular</mark> forma los músculos. Sus células se contraen y se estiran, y así nos movemos, late el corazón y avanza la comida por el intestino.</p><p>El <mark>tejido nervioso</mark> está formado por neuronas. Recibe información y envía órdenes: forma el cerebro, la médula y los nervios.</p><p>El <mark>tejido conectivo</mark> une y sostiene a los demás. Hay varios tipos: el <b>óseo</b> (los huesos), el <b>cartilaginoso</b> (la punta de la nariz o las orejas), el <b>adiposo</b> (la grasa, que guarda energía) y la <b>sangre</b>, que es un tejido líquido.</p>`,
      svg: svg("Cuatro fichas con los tejidos: epitelial, muscular, nervioso y conectivo", `${tit("Cuatro tejidos")}${fichas([["Epitelial", "piel, recubre", COL.sol], ["Muscular", "músculos, mueve", COL.rojo], ["Nervioso", "neuronas, mensajes", COL.morado], ["Conectivo", "hueso, grasa, sangre", COL.azul]])}`),
    },
    {
      html: `<h3>Del órgano al organismo</h3><p>Sigamos un ejemplo completo. Las <b>células musculares</b> del corazón forman el <b>tejido muscular cardiaco</b>. Ese tejido, junto con otros (nervioso, conectivo, epitelial), forma un órgano: el <mark>corazón</mark>. El corazón, los <b>vasos sanguíneos</b> y la sangre forman el <mark>aparato circulatorio</mark>. Y el aparato circulatorio, con el digestivo, el respiratorio, el nervioso y todos los demás, forma el <mark>organismo</mark>: una persona.</p><p>¿Aparato o sistema? Se suele llamar <b>aparato</b> al conjunto de órganos <b>distintos</b> que colaboran (el aparato digestivo tiene boca, estómago, intestino…) y <b>sistema</b> al formado por órganos <b>del mismo tejido</b> (el sistema muscular o el sistema nervioso). En la práctica, muchos libros usan las dos palabras igual.</p><p>En las plantas pasa lo mismo: las células forman tejidos, los tejidos forman órganos (<b>raíz, tallo, hojas, flores</b>) y todos juntos forman la planta.</p>`,
      svg: svg("Ejemplo: célula muscular, tejido cardiaco, corazón, aparato circulatorio y persona", `${tit("Un ejemplo: el corazón")}${columna([["célula muscular", COL.rojo], ["tejido muscular cardiaco", COL.naranja], ["órgano: el corazón", COL.sol], ["aparato circulatorio", COL.verde], ["organismo: la persona", COL.azul]], 130, 190, 32, 20, 8)}`),
    },
    {
      html: `<h3>Cómo usar el microscopio</h3><p>En el laboratorio del colegio podemos observar células con un <mark>microscopio óptico</mark>. Sus partes principales son el <b>ocular</b> (la lente por la que miras), los <b>objetivos</b> (lentes de distintos aumentos), la <b>platina</b> (donde se coloca la muestra), la <b>luz</b> y los <b>tornillos</b> para enfocar.</p><p>Para calcular cuánto aumenta, se <b>multiplican</b> los aumentos del ocular y del objetivo. Con un ocular de 10 y un objetivo de 40, la imagen se ve 400 veces más grande.</p><p>Una práctica clásica es observar la <b>piel de cebolla</b>. Se arranca una capa finísima de la parte de dentro, se pone sobre un cristal (el portaobjetos) con una gota de agua y un colorante, y se tapa con otro cristal muy fino. Al mirar se ven las células como ladrillos en fila, con su pared y su núcleo. Recuerda: siempre se empieza con el objetivo de menos aumentos.</p>`,
      svg: svg("Microscopio óptico con ocular, objetivos, platina, tornillo y luz", `${tit("El microscopio")}<path d="M120 160 h70 v-10 h-70z" fill="var(--muted)"/><path d="M168 150 V60 q0 -8 -8 -10" stroke="var(--ink)" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="110" y="38" width="20" height="16" rx="2" fill="var(--ink)" transform="rotate(-20 120 46)"/><rect x="116" y="54" width="22" height="34" rx="3" fill="var(--muted)"/><rect x="120" y="88" width="6" height="14" fill="var(--ink)"/><rect x="130" y="88" width="6" height="10" fill="var(--ink)"/><rect x="100" y="112" width="70" height="6" fill="var(--ink)"/><circle cx="128" cy="134" r="7" fill="var(--sun)"/><circle cx="176" cy="104" r="7" fill="var(--muted)" stroke="var(--ink)"/>
        ${et(58, 44, "ocular", 70, { size: 11, color: COL.azul })}<path d="M80 44 L110 44" stroke="var(--ink)"/>${et(58, 96, "objetivos", 70, { size: 11, color: COL.azul })}<path d="M84 94 L118 94" stroke="var(--ink)"/>${et(58, 118, "platina", 70, { size: 11, color: COL.azul })}<path d="M80 116 L100 116" stroke="var(--ink)"/>${et(58, 140, "luz", 70, { size: 11, color: COL.sol })}<path d="M70 138 L120 134" stroke="var(--ink)"/>${et(218, 106, "tornillo", 60, { size: 11, color: COL.azul })}`),
    },
  ],
  figura: {
    titulo: "La célula y sus niveles en ocho ideas",
    svg: rejilla([
      ["Célula", "unidad básica de vida", COL.rojo],
      ["Membrana", "controla lo que entra y sale", COL.naranja],
      ["Núcleo", "guarda el ADN", COL.morado],
      ["Vegetal", "pared y cloroplastos", COL.verde],
      ["Unicelular", "una sola célula", COL.agua],
      ["Pluricelular", "muchas células", COL.azul],
      ["Niveles", "célula, tejido, órgano…", COL.sol],
      ["Microscopio", "ocular × objetivo", COL.marron],
    ], 4, 86, "Resumen: célula, partes, tipos, seres unicelulares y pluricelulares, niveles y microscopio"),
  },
  video: vgen("przV9YavZmI", "niveles de organización de los seres vivos primaria"),
  ejemplos: [
    { enunciado: "Observas una célula con forma de caja, pared gruesa y muchos puntos verdes. ¿Es animal o vegetal?",
      pasos: ["La pared celular solo la tienen las células vegetales (y las de hongos y bacterias).", "Los puntos verdes son cloroplastos, que hacen la fotosíntesis.", "Las células animales no tienen ni pared ni cloroplastos."],
      resultado: "Es una célula vegetal, probablemente de una hoja." },
    { enunciado: "Ordena de menor a mayor: estómago, persona, célula del estómago, aparato digestivo, tejido.",
      pasos: ["El nivel más pequeño es la célula del estómago.", "Las células parecidas forman un tejido.", "Varios tejidos forman el órgano: el estómago.", "El estómago y otros órganos forman el aparato digestivo.", "Todos los aparatos forman la persona."],
      resultado: "célula → tejido → estómago → aparato digestivo → persona." },
    { enunciado: "Un microscopio tiene un ocular de 10 aumentos y tres objetivos de 4, 10 y 40. ¿Qué aumentos puedes conseguir?",
      pasos: ["Se multiplican el ocular y el objetivo.", "10 × 4 = 40; 10 × 10 = 100; 10 × 40 = 400."],
      resultado: "40, 100 o 400 aumentos." },
  ],
  errores: [
    "Pensar que los seres grandes tienen células más grandes: tienen más células, no más grandes.",
    "Decir que las células animales tienen pared celular: solo tienen membrana.",
    "Confundir tejido y órgano: el tejido es un grupo de células iguales; el órgano une varios tejidos.",
    "Creer que los seres unicelulares no están vivos: una sola célula realiza todas las funciones vitales.",
    "Sumar los aumentos del ocular y del objetivo: hay que multiplicarlos.",
  ],
  ejercicios: [
    { q: "¿Por qué decimos que la célula es la unidad básica de los seres vivos?", sol: "Porque es lo más pequeño que tiene vida: se alimenta, se relaciona y se reproduce, y todos los seres vivos están formados por células." },
    { q: "Escribe las tres partes de la célula y la función de cada una.", sol: "Membrana: separa y controla lo que entra y sale. Citoplasma: interior con los orgánulos. Núcleo: guarda el ADN y dirige la célula." },
    { q: "Escribe tres diferencias entre la célula animal y la vegetal.", sol: "La vegetal tiene pared celular, cloroplastos y una vacuola grande; la animal no tiene pared ni cloroplastos y sus vacuolas son pequeñas." },
    { q: "Clasifica en unicelulares o pluricelulares: bacteria, pino, paramecio, perro, seta, levadura.", sol: "Unicelulares: bacteria, paramecio y levadura. Pluricelulares: pino, perro y seta." },
    { q: "¿Qué ventaja tiene que las células se especialicen?", sol: "Cada una hace muy bien su trabajo y el organismo funciona mejor; a cambio, ya no pueden vivir solas." },
    { q: "Relaciona cada célula con su función: neurona, glóbulo rojo, célula muscular.", sol: "Neurona: transmite mensajes. Glóbulo rojo: lleva oxígeno. Célula muscular: se contrae para mover el cuerpo." },
    { q: "Define tejido y pon dos ejemplos del cuerpo humano.", sol: "Grupo de células parecidas que hacen el mismo trabajo. Ejemplos: tejido muscular y tejido nervioso (también epitelial, óseo…)." },
    { q: "¿A qué nivel pertenecen: corazón, sangre, aparato respiratorio, neurona?", sol: "Corazón: órgano. Sangre: tejido (conectivo). Aparato respiratorio: aparato. Neurona: célula." },
    { q: "Nombra tres órganos de una planta.", sol: "Raíz, tallo y hojas (también flores y frutos)." },
    { q: "Con un ocular de 15 y un objetivo de 10, ¿cuántas veces se ve aumentada la muestra?", sol: "15 × 10 = 150 aumentos." },
  ],
  quiz: [
    { q: "Todos los seres vivos están formados por…", o: ["células", "átomos solo", "piedras"], a: 0, e: "La célula es la unidad de los seres vivos." },
    { q: "La parte que controla qué entra y sale de la célula es…", o: ["la membrana", "el núcleo", "la vacuola"], a: 0, e: "La membrana." },
    { q: "El ADN se guarda en…", o: ["la pared", "el núcleo", "la membrana"], a: 1, e: "En el núcleo." },
    { q: "Los cloroplastos están en las células…", o: ["de la sangre", "vegetales", "animales"], a: 1, e: "Vegetales: hacen la fotosíntesis." },
    { q: "Un paramecio es un ser…", o: ["sin células", "pluricelular", "unicelular"], a: 2, e: "Tiene una sola célula." },
    { q: "Un grupo de células parecidas que hacen el mismo trabajo es…", o: ["un tejido", "un aparato", "un órgano"], a: 0, e: "Un tejido." },
    { q: "El corazón es…", o: ["un tejido", "una célula", "un órgano"], a: 2, e: "Un órgano formado por varios tejidos." },
    { q: "¿Qué nivel es el más grande?", o: ["organismo", "órgano", "aparato"], a: 0, e: "El organismo es el ser vivo completo." },
    { q: "La sangre es un tejido…", o: ["conectivo", "epitelial", "nervioso"], a: 0, e: "Es un tejido conectivo líquido." },
    { q: "Con ocular 10 y objetivo 40 se ve…", o: ["4 veces más grande", "50 veces más grande", "400 veces más grande"], a: 2, e: "10 × 40 = 400." },
  ],
  examen: [
    { q: "La célula vegetal tiene forma de caja gracias a…", o: ["la pared celular", "el núcleo", "las mitocondrias"], a: 0, e: "La pared celular es rígida." },
    { q: "Las neuronas forman el tejido…", o: ["óseo", "muscular", "nervioso"], a: 2, e: "Nervioso." },
    { q: "La raíz de una planta es…", o: ["un órgano", "un organismo", "una célula"], a: 0, e: "Un órgano de la planta." },
    { q: "Las bacterias…", o: ["no tienen núcleo", "tienen cloroplastos", "son pluricelulares"], a: 0, e: "Su ADN está suelto en el citoplasma." },
  ],
  feynman: ["Qué partes tiene una célula y para qué sirven", "En qué se diferencian la célula animal y la vegetal", "Cómo se ordenan los niveles de organización, con un ejemplo"],
  mapa: mapa("LA CÉLULA", "var(--pri)", [
    ["Partes", "membrana · citoplasma · núcleo", COL.rojo],
    ["Tipos", "animal · vegetal", COL.verde],
    ["Seres vivos", "unicelulares · pluricelulares", COL.agua],
    ["Niveles", "tejido · órgano · aparato", COL.azul],
  ], 250),
  tarjetas: [
    ["Célula", "La unidad más pequeña con vida."],
    ["Membrana", "Capa que rodea la célula y controla lo que entra y sale."],
    ["Núcleo", "Centro de mando que guarda el ADN."],
    ["Cloroplasto", "Orgánulo verde de las plantas donde se hace la fotosíntesis."],
    ["Unicelular", "Ser vivo de una sola célula, como una bacteria."],
    ["Tejido", "Grupo de células parecidas que hacen el mismo trabajo."],
    ["Órgano", "Varios tejidos que trabajan juntos, como el corazón."],
    ["Aparato o sistema", "Varios órganos que colaboran en una función."],
  ],
  familias: ["Mirad con una lupa una hoja, un trozo de cebolla o la piel de la mano y comentad qué se ve.", "Haced una célula comestible con gelatina y frutas como orgánulos.", "Jugad a ordenar los niveles con ejemplos de casa: célula, tejido, órgano, aparato y persona.", "Buscad fotos de neuronas y glóbulos rojos y comparad sus formas."],
  profesores: PROF("Ciencias de la Naturaleza: la célula como unidad de los seres vivos, células animales y vegetales, seres unicelulares y pluricelulares, niveles de organización (célula, tejido, órgano, aparato, organismo) y uso del microscopio", ["Práctica de epidermis de cebolla con microscopio o lupa binocular.", "Maqueta por grupos de una célula animal y otra vegetal con materiales reciclados.", "Juego de tarjetas para ordenar niveles de organización con ejemplos de plantas y animales."]),
  fuentes: [RD, wiki("Célula", "Célula"), wiki("Tejido (biología)", "Tejido_(biología)"), { t: "Instituto Cajal (CSIC)", url: "https://www.cajal.csic.es/" }],
  revisado: REV,
};
