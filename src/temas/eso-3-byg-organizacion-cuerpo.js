// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const NIVELES = [["átomo", "C, H, O, N"], ["molécula", "agua, ADN"], ["célula", "neurona"], ["tejido", "muscular"], ["órgano", "corazón"], ["aparato", "circulatorio"], ["organismo", "persona"]];

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La organización del cuerpo humano",
  minutos: 50,
  objetivos: ["Ordenar los niveles de organización desde el átomo hasta el organismo", "Describir la célula humana y sus orgánulos principales", "Reconocer los cuatro tipos de tejidos y su función", "Relacionar órganos, aparatos y sistemas con las funciones vitales"],
  claves: ["nivel de organización", "célula eucariota", "orgánulo", "diferenciación", "tejido", "órgano", "aparato", "sistema"],
  pregunta: {
    texto: "Tu cuerpo tiene unos 30 billones de células. Todas vienen de una sola, el cigoto. ¿Cómo puede una célula convertirse en neuronas, glóbulos rojos y células de hueso?",
    respuesta: "Todas tienen el <b>mismo ADN</b>, pero cada una <mark>activa solo una parte de sus genes</mark>. Ese proceso se llama <b>diferenciación celular</b>. Las células iguales se agrupan en tejidos, los tejidos forman órganos y los órganos trabajan juntos en aparatos y sistemas.",
  },
  bloques: [
    {
      html: `<h3>Los niveles de organización</h3><p>La materia viva se organiza en <b>niveles</b>, como las piezas de un juego de construcción: cada nivel está formado por los del nivel anterior y tiene propiedades nuevas. Los <b>átomos</b> (carbono, hidrógeno, oxígeno, nitrógeno) se unen en <b>moléculas</b> como el agua, las proteínas o el ADN. Las moléculas forman la <mark>célula</mark>, el primer nivel que está vivo. Después vienen los <b>tejidos</b>, los <b>órganos</b>, los <b>aparatos y sistemas</b> y, por último, el <b>organismo</b> completo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de niveles: átomo, molécula, célula, tejido, órgano, aparato y organismo">${BG}
        ${NIVELES.map(([n], i) => `<rect x="${12 + i * 34}" y="${142 - i * 18}" width="32" height="${18 + i * 18}" rx="4" fill="${i < 2 ? "var(--muted)" : "var(--leaf)"}" fill-opacity="${0.2 + i * 0.1}"/>${t(28 + i * 34, 136 - i * 18, n, { size: 9 })}`).join("")}
        ${t(60, 30, "inerte", { size: 12, color: "var(--muted)" })}${t(160, 30, "vivo →", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>La célula, unidad de vida</h3><p>La <b>teoría celular</b> dice tres cosas: todos los seres vivos están formados por células; la célula es la <mark>unidad más pequeña que realiza las funciones vitales</mark>; y toda célula procede de otra célula. Las nuestras son <b>eucariotas animales</b>: tienen el ADN dentro de un núcleo y no tienen pared celular ni cloroplastos. Miden entre 10 y 100 micrómetros (μm), así que necesitamos un microscopio para verlas. Un óvulo, la célula humana más grande, apenas llega a 0,1 mm.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula animal con membrana, citoplasma, núcleo, mitocondrias y retículo">${BG}
        <path d="M60 90 C 60 40 140 26 180 46 C 224 66 220 136 176 150 C 128 166 60 140 60 90 Z" fill="var(--sun)" fill-opacity=".18" stroke="var(--inf)" stroke-width="3"/>
        <circle cx="140" cy="92" r="26" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/><circle cx="146" cy="88" r="7" fill="var(--pen)"/>
        <ellipse cx="94" cy="76" rx="14" ry="7" fill="var(--red)" fill-opacity=".6" transform="rotate(-20 94 76)"/><ellipse cx="184" cy="120" rx="13" ry="6" fill="var(--red)" fill-opacity=".6"/>
        <path d="M96 116 q 10 -8 20 0 t 20 0 M98 126 q 10 -8 20 0 t 20 0" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>
        ${t(16, 160, "membrana", { size: 10, anchor: "start", color: "var(--inf)" })}<path d="M50 150 L 70 124" stroke="var(--inf)" stroke-width="1.5"/>${t(140, 22, "núcleo", { size: 10, color: "var(--pen)" })}<path d="M140 26 V 64" stroke="var(--pen)" stroke-width="1.5"/>${t(62, 44, "mitocondria", { size: 10, color: "var(--red)" })}<path d="M70 48 L 88 68" stroke="var(--red)" stroke-width="1.5"/>${t(118, 146, "retículo", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "cU_8pyEFFhk", titulo: "CÉLULAS y TEJIDOS", canal: "Nutrimente", vistas: 348896 },
    },
    {
      html: `<h3>Las partes de la célula</h3><p>Toda célula humana tiene tres partes básicas: la <b>membrana plasmática</b>, que la rodea y decide qué entra y qué sale; el <b>citoplasma</b>, un líquido gelatinoso donde flotan los orgánulos; y el <b>núcleo</b>, que guarda el ADN. Cada orgánulo tiene una tarea:</p>${tabla(["Orgánulo", "Función"], [["Mitocondria", "Respiración celular: obtiene energía de la glucosa"], ["Ribosoma", "Fabrica proteínas"], ["Retículo endoplasmático", "Fabrica y transporta proteínas y lípidos"], ["Aparato de Golgi", "Empaqueta y envía sustancias"], ["Lisosoma", "Digiere restos y sustancias"], ["Centrosoma", "Organiza la división celular"]])}`,
    },
    {
      html: `<h3>La diferenciación celular</h3><p>Después de la fecundación, el cigoto se divide una y otra vez. Al principio las células son iguales, pero pronto se <mark>especializan</mark>: cambian de forma y fabrican proteínas distintas según su trabajo. Una <b>neurona</b> es larga y ramificada para transmitir señales; un <b>glóbulo rojo</b> pierde el núcleo para llevar más oxígeno; una <b>célula muscular</b> es alargada y se contrae. Las <b>células madre</b> todavía no se han especializado y pueden dar lugar a otros tipos. Por eso son tan importantes en la medicina regenerativa y en los trasplantes de médula ósea.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una célula madre da lugar a una neurona, un glóbulo rojo y una célula muscular">${BG}
        <circle cx="50" cy="90" r="24" fill="var(--sun)" fill-opacity=".3" stroke="var(--inf)" stroke-width="2.5"/><circle cx="50" cy="90" r="8" fill="var(--pen)"/>${t(50, 134, "célula madre", { size: 11 })}
        ${fl(80, 80, 132, 40)}${fl(82, 90, 132, 90)}${fl(80, 100, 132, 140)}
        <g transform="translate(180 38)"><circle r="9" fill="var(--pen)" fill-opacity=".5" stroke="var(--pen)" stroke-width="2"/><path d="M9 0 H 50 M-9 0 l -12 -8 M-6 6 l -10 10 M0 -9 l -4 -12 M50 0 l 8 -6 M50 0 l 8 6" stroke="var(--pen)" stroke-width="2.5" fill="none"/></g>
        <ellipse cx="180" cy="90" rx="18" ry="12" fill="var(--red)" fill-opacity=".75"/><ellipse cx="180" cy="90" rx="7" ry="4" fill="var(--red)"/>
        <rect x="152" y="132" width="78" height="14" rx="7" fill="var(--inf)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        ${t(240, 60, "neurona", { size: 10, anchor: "end" })}${t(180, 116, "glóbulo rojo", { size: 10 })}${t(190, 166, "célula muscular", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Los tejidos</h3><p>Un <b>tejido</b> es un conjunto de células parecidas que trabajan juntas en la misma función. En el cuerpo humano hay <mark>cuatro tipos</mark> básicos de tejidos. El <b>epitelial</b> recubre la piel y el interior de los órganos; algunos epitelios forman glándulas que fabrican sudor, saliva u hormonas. El <b>conectivo</b> une y sostiene: incluye el tejido adiposo (grasa), el cartílago, el hueso y la sangre, que también se considera un tejido conectivo porque sus células flotan en una sustancia líquida, el plasma.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro tejidos: epitelial en capas, conectivo, muscular en fibras y nervioso con neuronas">${BG}
        ${[["epitelial", "var(--sun)"], ["conectivo", "var(--red)"], ["muscular", "var(--inf)"], ["nervioso", "var(--pen)"]].map(([n, c], i) => { const x = 14 + (i % 2) * 120, y = 16 + Math.floor(i / 2) * 82; return `<rect x="${x}" y="${y}" width="112" height="64" rx="8" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${t(x + 56, y + 78, n, { size: 11, color: c })}`; }).join("")}
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="${22 + i * 20}" y="30" width="18" height="16" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)"/><circle cx="${31 + i * 20}" cy="38" r="3" fill="var(--pen)"/>`).join("")}
        ${[[150, 34], [180, 50], [210, 32], [196, 66], [160, 64]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)" fill-opacity=".6"/>`).join("")}<path d="M140 44 L 226 58 M148 70 L 220 40" stroke="var(--red)" stroke-width="1.5" fill="none"/>
        ${[0, 1, 2].map((i) => `<rect x="24" y="${108 + i * 14}" width="92" height="10" rx="5" fill="var(--inf)" fill-opacity=".55"/>`).join("")}
        <circle cx="160" cy="128" r="7" fill="var(--pen)" fill-opacity=".6"/><circle cx="208" cy="122" r="7" fill="var(--pen)" fill-opacity=".6"/><path d="M167 128 H 201 M153 128 l -8 -8 M153 128 l -8 8 M215 122 l 8 -8 M215 122 l 8 8" stroke="var(--pen)" stroke-width="2" fill="none"/></svg>`,
      video: { id: "edwgWNg6Ja0", titulo: "¿Qué son los Tejidos? Tipos y Características [Fácil y Rápido] | BIOLOGÍA", canal: "A Cierta Ciencia", vistas: 784613 },
    },
    {
      html: `<h3>Tejido muscular y tejido nervioso</h3><p>El <b>tejido muscular</b> está formado por células alargadas, las <b>fibras musculares</b>, que pueden <mark>contraerse</mark>. Hay tres clases: el esquelético, que movemos a voluntad; el liso, en las paredes del estómago o de los vasos sanguíneos; y el cardiaco, que solo está en el corazón. El <b>tejido nervioso</b> lo forman las <b>neuronas</b>, que transmiten impulsos eléctricos, y las células de glía, que las protegen y alimentan.</p>${tabla(["Tejido", "Células", "Función", "Dónde"], [["Epitelial", "muy juntas, en capas", "recubrir, segregar", "piel, glándulas"], ["Conectivo", "separadas por una matriz", "unir, sostener, transportar", "hueso, grasa, sangre"], ["Muscular", "fibras alargadas", "contraerse", "músculos, corazón"], ["Nervioso", "neuronas y glía", "transmitir impulsos", "cerebro, nervios"]])}`,
    },
    {
      html: `<h3>Órganos, aparatos y sistemas</h3><p>Un <b>órgano</b> está formado por varios tejidos y realiza una tarea concreta. El estómago, por ejemplo, tiene epitelio por dentro, músculo liso para mover el alimento, tejido conectivo y nervios. Varios órganos que colaboran forman un <mark>aparato</mark> si son distintos entre sí (aparato digestivo: boca, esófago, estómago, intestinos) o un <mark>sistema</mark> si están hechos sobre todo del mismo tejido (sistema nervioso, sistema muscular). En la práctica, muchos libros usan las dos palabras como sinónimos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del tejido muscular al estómago y al aparato digestivo">${BG}
        <rect x="16" y="60" width="60" height="44" rx="6" fill="var(--inf)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2"/>${[0, 1, 2].map((i) => `<rect x="22" y="${66 + i * 12}" width="48" height="8" rx="4" fill="var(--inf)" fill-opacity=".6"/>`).join("")}
        ${fl(80, 82, 100, 82)}
        <path d="M112 62 Q 112 48 128 50 Q 160 54 158 86 Q 156 112 128 112 Q 118 112 120 100 Q 138 96 136 80 Q 134 66 120 70 Z" fill="var(--red)" fill-opacity=".35" stroke="var(--red)" stroke-width="2"/>
        ${fl(164, 82, 184, 82)}
        <g transform="translate(220 90)"><circle cy="-56" r="11" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -42 H 20 L 18 40 H -18 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M0 -44 V -20 Q 10 -20 10 -10 Q 10 0 -6 0 Q -14 6 -6 12 Q 8 16 2 28" stroke="var(--red)" stroke-width="3.5" fill="none"/></g>
        ${t(46, 126, "tejido", { size: 11 })}${t(136, 126, "órgano", { size: 11 })}${t(220, 146, "aparato", { size: 11 })}${t(100, 168, "cada nivel une piezas del anterior", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las funciones vitales</h3><p>Los aparatos y sistemas se reparten las tres <b>funciones vitales</b>. En la <mark>nutrición</mark> participan los aparatos digestivo, respiratorio, circulatorio y excretor: consiguen materia y energía y eliminan desechos. En la <mark>relación</mark> intervienen los sentidos, el sistema nervioso, el sistema endocrino y el aparato locomotor: perciben lo que pasa y responden. La <mark>reproducción</mark> depende del aparato reproductor y permite tener descendencia. Todos están conectados: si uno falla, los demás lo notan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres columnas: nutrición, relación y reproducción con los aparatos de cada una">${BG}
        ${[["NUTRICIÓN", ["digestivo", "respiratorio", "circulatorio", "excretor"], "var(--leaf)"], ["RELACIÓN", ["sentidos", "nervioso", "endocrino", "locomotor"], "var(--pen)"], ["REPRODUCCIÓN", ["reproductor"], "var(--red)"]].map(([n, l, c], i) => `<rect x="${10 + i * 82}" y="16" width="76" height="150" rx="10" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${t(48 + i * 82, 38, n, { size: i === 2 ? 8.5 : 10, color: c })}${l.map((a, j) => t(48 + i * 82, 66 + j * 24, a, { size: 10, weight: 400 })).join("")}`).join("")}</svg>`,
    },
    {
      html: `<h3>Cómo se estudia el cuerpo por dentro</h3><p>Para ver células y tejidos usamos el <b>microscopio óptico</b>, que aumenta hasta unas 1.000 veces, y el <b>microscopio electrónico</b>, que llega a cientos de miles de aumentos y deja ver los orgánulos. Los médicos observan los órganos sin abrir el cuerpo con <mark>técnicas de imagen</mark>: las <b>radiografías</b> muestran bien los huesos; la <b>ecografía</b> usa ultrasonidos y sirve para ver el feto; la <b>resonancia magnética</b> y el <b>TAC</b> dan imágenes en cortes muy detalladas. Una <b>biopsia</b> analiza al microscopio un trocito de tejido.</p>`,
    },
    {
      html: `<h3>Donación y trasplante de órganos</h3><p>Cuando un órgano deja de funcionar, a veces puede sustituirse por el de un donante. Se trasplantan riñones, hígado, corazón, pulmones, córneas y médula ósea. El gran problema es el <mark>rechazo</mark>: el sistema inmunitario del receptor ataca al órgano porque lo reconoce como extraño. Por eso se buscan donantes compatibles y se usan medicamentos inmunosupresores. <b>España</b> es líder mundial en donación desde hace más de treinta años gracias a la Organización Nacional de Trasplantes (ONT). Donar es voluntario, gratuito y anónimo.</p>`,
    },
  ],
  figura: {
    titulo: "Del átomo al organismo",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Siete niveles en fila: átomo, molécula, célula, tejido, órgano, aparato y organismo, con un ejemplo de cada uno">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${NIVELES.map(([n, e], i) => { const x = 20 + i * 88; return `<rect x="${x}" y="50" width="78" height="110" rx="12" fill="var(--card)" stroke="${i < 2 ? "var(--muted)" : "var(--leaf)"}" stroke-width="2.5"/>${t(x + 39, 96, n, { size: 14, color: i < 2 ? "var(--muted)" : "var(--leaf)", font: D })}${t(x + 39, 126, e, { size: 11, weight: 400 })}${i < 6 ? fl(x + 79, 105, x + 87, 105) : ""}`; }).join("")}
      ${t(110, 34, "materia inerte", { size: 13, color: "var(--muted)" })}${t(420, 34, "materia viva", { size: 13, color: "var(--leaf)" })}
      ${t(320, 196, "cada nivel tiene propiedades que no tienen sus partes por separado", { size: 13, color: "var(--muted)", weight: 400 })}
    </svg>`,
  },
  video: { id: "mHpqQ7mZSvY", titulo: "Niveles de organización de la materia y los seres vivos", canal: "Nutrimente", vistas: 1245930, megusta: 0, busqueda: "niveles de organización del cuerpo humano" },
  ejemplos: [
    { enunciado: "Ordena de menor a mayor complejidad: estómago, célula epitelial, aparato digestivo, proteína, epitelio, ser humano.",
      pasos: ["La proteína es una molécula: es el nivel más simple de la lista.", "La célula epitelial es el primer nivel vivo.", "Muchas células epiteliales juntas forman el epitelio, un tejido.", "El estómago es un órgano con varios tejidos.", "Con otros órganos forma el aparato digestivo, y todos los aparatos forman el ser humano."],
      resultado: "proteína → célula epitelial → epitelio → estómago → aparato digestivo → ser humano." },
    { enunciado: "Un glóbulo rojo mide 7 μm. ¿Cuántos cabrían en fila en 1 mm?",
      pasos: ["1 mm = 1.000 μm.", "Dividimos: 1.000 / 7 ≈ 142,9.", "Solo cuentan los glóbulos completos."],
      resultado: "unos 142 glóbulos rojos." },
    { enunciado: "Al microscopio ves células muy juntas, en varias capas y sin apenas espacio entre ellas, recubriendo una superficie. ¿Qué tejido es y dónde podría estar?",
      pasos: ["Células muy unidas y en capas: es la característica del tejido epitelial.", "Recubre una superficie: su función es proteger.", "Ejemplos de epitelios de revestimiento: la piel o el interior de la boca."],
      resultado: "tejido epitelial, por ejemplo de la piel." },
  ],
  errores: [
    "Pensar que los átomos o las moléculas están vivos: el primer nivel vivo es la célula.",
    "Confundir tejido y órgano: un tejido tiene un solo tipo de célula; un órgano tiene varios tejidos.",
    "Creer que las células especializadas tienen ADN distinto: tienen el mismo, pero usan genes diferentes.",
    "Decir que la sangre no es un tejido: es un tejido conectivo con matriz líquida.",
    "Olvidar que nuestras células no tienen pared celular ni cloroplastos, que son propios de las plantas.",
  ],
  ejercicios: [
    { q: "Escribe los siete niveles de organización del cuerpo humano en orden.", sol: "Átomo, molécula, célula, tejido, órgano, aparato o sistema, organismo." },
    { q: "Enuncia los tres principios de la teoría celular.", sol: "Todos los seres vivos están formados por células; la célula es la unidad que realiza las funciones vitales; toda célula procede de otra célula." },
    { q: "¿Qué orgánulo obtiene energía de la glucosa? ¿Y cuál fabrica proteínas?", sol: "La mitocondria obtiene la energía (respiración celular). Los ribosomas fabrican las proteínas." },
    { q: "¿Por qué un glóbulo rojo no tiene núcleo?", sol: "Lo pierde al especializarse: así deja más espacio para la hemoglobina y puede transportar más oxígeno." },
    { q: "Clasifica en su tejido: hueso, neurona, piel, bíceps, grasa, corazón.", sol: "Hueso: conectivo. Neurona: nervioso. Piel (capa externa): epitelial. Bíceps: muscular esquelético. Grasa: conectivo adiposo. Corazón: muscular cardiaco." },
    { q: "¿Qué diferencia hay entre un aparato y un sistema?", sol: "Un aparato reúne órganos de tejidos distintos (aparato digestivo); un sistema está formado sobre todo por el mismo tejido (sistema nervioso)." },
    { q: "Indica qué función vital realiza cada aparato: excretor, locomotor, reproductor, respiratorio.", sol: "Excretor y respiratorio: nutrición. Locomotor: relación. Reproductor: reproducción." },
    { q: "¿Qué son las células madre y por qué interesan a la medicina?", sol: "Son células sin especializar que pueden dar lugar a otros tipos. Podrían reparar tejidos dañados y ya se usan en trasplantes de médula ósea." },
    { q: "Un óvulo mide 0,1 mm. Exprésalo en micrómetros.", sol: "0,1 mm · 1.000 μm/mm = 100 μm." },
    { q: "¿Qué es el rechazo en un trasplante y cómo se evita?", sol: "Es el ataque del sistema inmunitario del receptor al órgano donado. Se reduce buscando donantes compatibles y con medicamentos inmunosupresores." },
  ],
  quiz: [
    { q: "El primer nivel de organización con vida es…", o: ["la molécula", "la célula", "el tejido"], a: 1, e: "La célula es la unidad de vida." },
    { q: "Un conjunto de células parecidas con la misma función es…", o: ["un órgano", "un tejido", "un aparato"], a: 1, e: "Eso es un tejido." },
    { q: "El ADN de la célula humana está en…", o: ["el núcleo", "la membrana", "el lisosoma"], a: 0, e: "Somos eucariotas: el ADN está en el núcleo." },
    { q: "La respiración celular ocurre en…", o: ["los ribosomas", "las mitocondrias", "el aparato de Golgi"], a: 1, e: "En las mitocondrias." },
    { q: "La sangre es un tejido…", o: ["epitelial", "conectivo", "nervioso"], a: 1, e: "Conectivo con matriz líquida." },
    { q: "El músculo que solo está en el corazón es…", o: ["esquelético", "liso", "cardiaco"], a: 2, e: "El cardiaco." },
    { q: "El estómago es…", o: ["un tejido", "un órgano", "un sistema"], a: 1, e: "Tiene varios tejidos: es un órgano." },
    { q: "La función de relación la realizan, entre otros…", o: ["el sistema nervioso y los sentidos", "los riñones", "los pulmones"], a: 0, e: "Perciben y responden." },
    { q: "Las células especializadas de una persona tienen…", o: ["ADN distinto", "el mismo ADN", "sin ADN todas"], a: 1, e: "El mismo ADN, con genes distintos activos." },
    { q: "La técnica que usa ultrasonidos es…", o: ["la radiografía", "la ecografía", "la biopsia"], a: 1, e: "La ecografía." },
  ],
  examen: [
    { q: "¿Cuál es el orden correcto?", o: ["célula, tejido, órgano, aparato", "tejido, célula, aparato, órgano", "órgano, tejido, célula, aparato"], a: 0, e: "De menor a mayor complejidad." },
    { q: "Las células humanas no tienen…", o: ["membrana", "pared celular", "mitocondrias"], a: 1, e: "La pared es de plantas, hongos y bacterias." },
    { q: "Las glándulas proceden del tejido…", o: ["epitelial", "muscular", "nervioso"], a: 0, e: "Son epitelios que segregan sustancias." },
  ],
  feynman: ["Qué son los niveles de organización y por qué la célula es el primero vivo", "Cómo se especializan las células si tienen el mismo ADN", "Cuáles son los cuatro tejidos y qué hace cada uno"],
  mapa: mapa("CUERPO HUMANO", "var(--eso)", [
    ["Célula", "membrana · citoplasma · núcleo", "var(--pen)"],
    ["Tejidos", "epitelial · conectivo · muscular · nervioso", "var(--leaf)"],
    ["Órganos y aparatos", "varios tejidos · una función", "var(--red)"],
    ["Funciones vitales", "nutrición · relación · reproducción", "var(--inf)"],
  ], 280),
  tarjetas: [
    ["¿Qué es un tejido?", "Un conjunto de células parecidas que realizan la misma función."],
    ["Los cuatro tejidos", "Epitelial, conectivo, muscular y nervioso."],
    ["¿Qué hace la mitocondria?", "La respiración celular: saca energía de la glucosa."],
    ["Diferenciación celular", "La especialización de las células, que activan genes distintos."],
    ["Célula madre", "Célula sin especializar que puede dar lugar a otros tipos."],
    ["Órgano", "Estructura con varios tejidos que realiza una tarea concreta."],
    ["Aparato frente a sistema", "Aparato: órganos de tejidos distintos. Sistema: sobre todo del mismo tejido."],
    ["Funciones vitales", "Nutrición, relación y reproducción."],
  ],
  familias: ["Buscad en casa ejemplos de cada nivel: una molécula (agua), un tejido (la grasa de la carne), un órgano (el corazón de un pollo).", "Hablad sobre la donación de órganos y sobre por qué España es líder mundial.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: niveles de organización, la célula eucariota animal, tejidos, órganos, aparatos y sistemas, y su relación con las funciones vitales (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Observación al microscopio de células de la mucosa bucal teñidas con azul de metileno.", "Mural de los niveles de organización con ejemplos de cada aparato.", "Debate informado con datos de la ONT sobre la donación de órganos."],
  },
  fuentes: [RD, wiki("Tejido (biología)", "Tejido_(biolog%C3%ADa)"), { t: "Organización Nacional de Trasplantes", url: "https://www.ont.es/" }],
  revisado: "2026-11-12",
};
