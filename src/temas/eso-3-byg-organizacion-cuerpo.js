// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const NIVELES = [["átomo", "C, H, O, N"], ["molécula", "agua, ADN"], ["célula", "neurona"], ["tejido", "muscular"], ["órgano", "corazón"], ["aparato", "circulatorio"], ["organismo", "persona"]];
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La organización del cuerpo humano",
  minutos: 100,
  objetivos: [
    "Ordenar los niveles de organización desde el átomo hasta el organismo",
    "Describir la célula humana, sus partes y sus orgánulos principales",
    "Explicar la diferenciación celular y el papel de las células madre",
    "Reconocer los cuatro tipos de tejidos, sus variedades y su función",
    "Relacionar órganos, aparatos y sistemas con las funciones vitales y la homeostasis",
    "Conocer las técnicas para estudiar el cuerpo y valorar la donación de órganos",
  ],
  claves: ["nivel de organización", "célula eucariota", "orgánulo", "diferenciación", "tejido", "órgano", "aparato", "sistema", "homeostasis"],
  pregunta: {
    texto: "Tu cuerpo tiene unos 30 billones de células. Todas vienen de una sola, el cigoto. ¿Cómo puede una célula convertirse en neuronas, glóbulos rojos y células de hueso?",
    respuesta: "Todas tienen el <b>mismo ADN</b>, pero cada una <mark>activa solo una parte de sus genes</mark>. Ese proceso se llama <b>diferenciación celular</b>. Las células iguales se agrupan en tejidos, los tejidos forman órganos y los órganos trabajan juntos en aparatos y sistemas.",
  },
  lectura: {
    titulo: "Treinta billones de células y un solo equipo",
    html: `<p>Ahora mismo, mientras lees esta frase, en tu cuerpo están pasando millones de cosas a la vez. Tus ojos convierten la luz en señales eléctricas, tu corazón late unas setenta veces por minuto, tu estómago quizá está digiriendo el desayuno y en tu médula ósea se fabrican unos dos millones de glóbulos rojos cada segundo. Nadie da órdenes en voz alta y, sin embargo, todo encaja.</p>
<p>Lo más sorprendente es que todo empezó con una sola célula, el cigoto, más pequeña que el punto final de esta frase. Esa célula se dividió una y otra vez hasta formar unos treinta billones, y cada una aprendió un oficio distinto: unas transmiten mensajes, otras se contraen, otras recubren, otras defienden. Se agruparon en tejidos, los tejidos en órganos y los órganos en aparatos que se reparten el trabajo de mantenerte vivo.</p>
<p>Entender cómo está organizado el cuerpo es como mirar el plano de una ciudad enorme: hay barrios, calles, servicios y una red de comunicaciones que lo coordina todo. En este tema vas a aprender a leer ese plano, desde los átomos hasta la persona completa.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Los niveles de organización</h3><p>La materia viva se organiza en <b>niveles</b>, como las piezas de un juego de construcción: cada nivel está formado por los del nivel anterior y tiene propiedades nuevas. Los <b>átomos</b> (carbono, hidrógeno, oxígeno, nitrógeno) se unen en <b>moléculas</b> como el agua, las proteínas o el ADN. Las moléculas forman la <mark>célula</mark>, el primer nivel que está vivo. Después vienen los <b>tejidos</b>, los <b>órganos</b>, los <b>aparatos y sistemas</b> y, por último, el <b>organismo</b> completo.</p><p>Los primeros niveles, el <b>atómico</b> y el <b>molecular</b>, son comunes a la materia viva y a la inerte: el carbono de tu piel es el mismo que el del grafito de un lápiz. Lo que cambia es cómo se organizan. A partir de la célula aparecen propiedades que ninguna molécula tiene por sí sola, como nutrirse, relacionarse o reproducirse. Por eso decimos que en cada nivel surgen <mark>propiedades emergentes</mark>: el todo es más que la suma de sus partes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de niveles: átomo, molécula, célula, tejido, órgano, aparato y organismo">${BG}
        ${NIVELES.map(([n], i) => `<rect x="${12 + i * 34}" y="${142 - i * 18}" width="32" height="${18 + i * 18}" rx="4" fill="${i < 2 ? "var(--muted)" : "var(--leaf)"}" fill-opacity="${0.2 + i * 0.1}"/>${t(28 + i * 34, 136 - i * 18, n, { size: 9 })}`).join("")}
        ${t(60, 30, "inerte", { size: 12, color: "var(--muted)" })}${t(160, 30, "vivo →", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>1.2 La célula, unidad de vida</h3><p>La <b>teoría celular</b> dice tres cosas: todos los seres vivos están formados por células; la célula es la <mark>unidad más pequeña que realiza las funciones vitales</mark>; y toda célula procede de otra célula. Las nuestras son <b>eucariotas animales</b>: tienen el ADN dentro de un núcleo y no tienen pared celular ni cloroplastos. Miden entre 10 y 100 micrómetros (μm), así que necesitamos un microscopio para verlas. Un óvulo, la célula humana más grande, apenas llega a 0,1 mm.</p><p>La teoría celular se construyó gracias al microscopio. En 1665 Robert Hooke observó unas «celdillas» en un trozo de corcho y les dio nombre; en el siglo XIX Schleiden y Schwann propusieron que plantas y animales están hechos de células, y Virchow añadió que toda célula procede de otra. Santiago Ramón y Cajal demostró después que el sistema nervioso también está formado por células independientes, las neuronas, y por ello recibió el Premio Nobel en 1906.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula animal con membrana, citoplasma, núcleo, mitocondrias y retículo">${BG}
        <path d="M60 90 C 60 40 140 26 180 46 C 224 66 220 136 176 150 C 128 166 60 140 60 90 Z" fill="var(--sun)" fill-opacity=".18" stroke="var(--inf)" stroke-width="3"/>
        <circle cx="140" cy="92" r="26" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/><circle cx="146" cy="88" r="7" fill="var(--pen)"/>
        <ellipse cx="94" cy="76" rx="14" ry="7" fill="var(--red)" fill-opacity=".6" transform="rotate(-20 94 76)"/><ellipse cx="184" cy="120" rx="13" ry="6" fill="var(--red)" fill-opacity=".6"/>
        <path d="M96 116 q 10 -8 20 0 t 20 0 M98 126 q 10 -8 20 0 t 20 0" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>
        ${t(16, 160, "membrana", { size: 10, anchor: "start", color: "var(--inf)" })}<path d="M50 150 L 70 124" stroke="var(--inf)" stroke-width="1.5"/>${t(140, 22, "núcleo", { size: 10, color: "var(--pen)" })}<path d="M140 26 V 64" stroke="var(--pen)" stroke-width="1.5"/>${t(62, 44, "mitocondria", { size: 10, color: "var(--red)" })}<path d="M70 48 L 88 68" stroke="var(--red)" stroke-width="1.5"/>${t(118, 146, "retículo", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "cU_8pyEFFhk", titulo: "CÉLULAS y TEJIDOS", canal: "Nutrimente", vistas: 348896 },
    },
    {
      html: `<h3>1.3 Las partes de la célula</h3><p>Toda célula humana tiene tres partes básicas: la <b>membrana plasmática</b>, que la rodea y decide qué entra y qué sale; el <b>citoplasma</b>, un líquido gelatinoso donde flotan los orgánulos; y el <b>núcleo</b>, que guarda el ADN. Cada orgánulo tiene una tarea:</p>${tabla(["Orgánulo", "Función"], [["Mitocondria", "Respiración celular: obtiene energía de la glucosa"], ["Ribosoma", "Fabrica proteínas"], ["Retículo endoplasmático", "Fabrica y transporta proteínas y lípidos"], ["Aparato de Golgi", "Empaqueta y envía sustancias"], ["Lisosoma", "Digiere restos y sustancias"], ["Centrosoma", "Organiza la división celular"]])}<p>La <b>membrana plasmática</b> está formada por una doble capa de lípidos con proteínas incrustadas. Es <mark>semipermeable</mark>: deja pasar con facilidad el agua, el oxígeno o el dióxido de carbono, pero controla la entrada de glucosa, iones y otras sustancias. El citoplasma contiene además el <b>citoesqueleto</b>, una red de fibras que da forma a la célula y permite que se mueva y se divida.</p>`,
      svg: L.radial("Orgánulos de la célula animal alrededor del citoplasma", "Citoplasma", ["Núcleo: ADN", "Mitocondria: energía", "Ribosoma: proteínas", "Golgi: empaqueta", "Lisosoma: digiere", "Retículo: fabrica"], "var(--pen)"),
    },
    {
      html: `<h3>1.4 Célula animal y célula vegetal</h3><p>Todas las células eucariotas tienen membrana, citoplasma y núcleo, pero las de animales y plantas presentan diferencias que se explican por su forma de vida. La <mark>célula vegetal</mark> tiene una <b>pared celular</b> rígida de celulosa por fuera de la membrana, que le da forma poligonal y sostén; tiene <b>cloroplastos</b>, donde se realiza la fotosíntesis, y una gran <b>vacuola</b> central que almacena agua. La <mark>célula animal</mark> no tiene pared, por eso su forma es más variable, carece de cloroplastos porque obtiene la materia orgánica de los alimentos y sus vacuolas son pequeñas. Además tiene <b>centriolos</b>, que intervienen en la división celular. Las dos tienen mitocondrias: también las plantas respiran.</p>`,
      svg: L.compara("Diferencias entre célula animal y célula vegetal", ["Animal", "var(--red)", ["sin pared celular", "forma variable", "sin cloroplastos", "vacuolas pequeñas"]], ["Vegetal", "var(--leaf)", ["pared de celulosa", "forma poligonal", "con cloroplastos", "vacuola grande"]]),
    },
    {
      html: `<h3>2.1 La diferenciación celular</h3><p>Después de la fecundación, el cigoto se divide una y otra vez. Al principio las células son iguales, pero pronto se <mark>especializan</mark>: cambian de forma y fabrican proteínas distintas según su trabajo. Una <b>neurona</b> es larga y ramificada para transmitir señales; un <b>glóbulo rojo</b> pierde el núcleo para llevar más oxígeno; una <b>célula muscular</b> es alargada y se contrae. Las <b>células madre</b> todavía no se han especializado y pueden dar lugar a otros tipos. Por eso son tan importantes en la medicina regenerativa y en los trasplantes de médula ósea.</p><p>Hay varios tipos de células madre. Las <b>embrionarias</b>, de las primeras fases del embrión, pueden convertirse en casi cualquier tipo de célula. Las <b>adultas</b> o somáticas, presentes en la médula ósea, la piel o el intestino, solo originan unos pocos tipos y sirven para renovar los tejidos: la piel se cambia por completo cada pocas semanas. Hoy los científicos también saben «reprogramar» células adultas para que vuelvan a comportarse como madre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una célula madre da lugar a una neurona, un glóbulo rojo y una célula muscular">${BG}
        <circle cx="50" cy="90" r="24" fill="var(--sun)" fill-opacity=".3" stroke="var(--inf)" stroke-width="2.5"/><circle cx="50" cy="90" r="8" fill="var(--pen)"/>${t(50, 134, "célula madre", { size: 11 })}
        ${fl(80, 80, 132, 40)}${fl(82, 90, 132, 90)}${fl(80, 100, 132, 140)}
        <g transform="translate(180 38)"><circle r="9" fill="var(--pen)" fill-opacity=".5" stroke="var(--pen)" stroke-width="2"/><path d="M9 0 H 50 M-9 0 l -12 -8 M-6 6 l -10 10 M0 -9 l -4 -12 M50 0 l 8 -6 M50 0 l 8 6" stroke="var(--pen)" stroke-width="2.5" fill="none"/></g>
        <ellipse cx="180" cy="90" rx="18" ry="12" fill="var(--red)" fill-opacity=".75"/><ellipse cx="180" cy="90" rx="7" ry="4" fill="var(--red)"/>
        <rect x="152" y="132" width="78" height="14" rx="7" fill="var(--inf)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        ${t(240, 60, "neurona", { size: 10, anchor: "end" })}${t(180, 116, "glóbulo rojo", { size: 10 })}${t(190, 166, "célula muscular", { size: 10 })}</svg>`,
      video: { id: "I8xf_l5YJH4", titulo: "¿Qué son las células madre?", canal: "Mangel Ciencia", vistas: 345671 },
    },
    {
      html: `<h3>2.2 Los tejidos</h3><p>Un <b>tejido</b> es un conjunto de células parecidas que trabajan juntas en la misma función. En el cuerpo humano hay <mark>cuatro tipos</mark> básicos de tejidos. El <b>epitelial</b> recubre la piel y el interior de los órganos; algunos epitelios forman glándulas que fabrican sudor, saliva u hormonas. El <b>conectivo</b> une y sostiene: incluye el tejido adiposo (grasa), el cartílago, el hueso y la sangre, que también se considera un tejido conectivo porque sus células flotan en una sustancia líquida, el plasma.</p><p>El <b>tejido epitelial</b> puede ser de <mark>revestimiento</mark>, cuando forma láminas que cubren superficies (la epidermis, la mucosa del intestino), o <mark>glandular</mark>, cuando sus células fabrican y vierten sustancias. Las glándulas <b>exocrinas</b> vierten al exterior o a una cavidad, como las sudoríparas o las salivales; las <b>endocrinas</b> vierten hormonas a la sangre, como el tiroides.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro tejidos: epitelial en capas, conectivo, muscular en fibras y nervioso con neuronas">${BG}
        ${[["epitelial", "var(--sun)"], ["conectivo", "var(--red)"], ["muscular", "var(--inf)"], ["nervioso", "var(--pen)"]].map(([n, c], i) => { const x = 14 + (i % 2) * 120, y = 16 + Math.floor(i / 2) * 82; return `<rect x="${x}" y="${y}" width="112" height="64" rx="8" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${t(x + 56, y + 78, n, { size: 11, color: c })}`; }).join("")}
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="${22 + i * 20}" y="30" width="18" height="16" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)"/><circle cx="${31 + i * 20}" cy="38" r="3" fill="var(--pen)"/>`).join("")}
        ${[[150, 34], [180, 50], [210, 32], [196, 66], [160, 64]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)" fill-opacity=".6"/>`).join("")}<path d="M140 44 L 226 58 M148 70 L 220 40" stroke="var(--red)" stroke-width="1.5" fill="none"/>
        ${[0, 1, 2].map((i) => `<rect x="24" y="${108 + i * 14}" width="92" height="10" rx="5" fill="var(--inf)" fill-opacity=".55"/>`).join("")}
        <circle cx="160" cy="128" r="7" fill="var(--pen)" fill-opacity=".6"/><circle cx="208" cy="122" r="7" fill="var(--pen)" fill-opacity=".6"/><path d="M167 128 H 201 M153 128 l -8 -8 M153 128 l -8 8 M215 122 l 8 -8 M215 122 l 8 8" stroke="var(--pen)" stroke-width="2" fill="none"/></svg>`,
      video: { id: "edwgWNg6Ja0", titulo: "¿Qué son los Tejidos? Tipos y Características [Fácil y Rápido] | BIOLOGÍA", canal: "A Cierta Ciencia", vistas: 784613 },
    },
    {
      html: `<h3>2.3 Tejido muscular y tejido nervioso</h3><p>El <b>tejido muscular</b> está formado por células alargadas, las <b>fibras musculares</b>, que pueden <mark>contraerse</mark>. Hay tres clases: el esquelético, que movemos a voluntad; el liso, en las paredes del estómago o de los vasos sanguíneos; y el cardiaco, que solo está en el corazón. El <b>tejido nervioso</b> lo forman las <b>neuronas</b>, que transmiten impulsos eléctricos, y las células de glía, que las protegen y alimentan.</p>${tabla(["Tejido", "Células", "Función", "Dónde"], [["Epitelial", "muy juntas, en capas", "recubrir, segregar", "piel, glándulas"], ["Conectivo", "separadas por una matriz", "unir, sostener, transportar", "hueso, grasa, sangre"], ["Muscular", "fibras alargadas", "contraerse", "músculos, corazón"], ["Nervioso", "neuronas y glía", "transmitir impulsos", "cerebro, nervios"]])}`,
      svg: L.tabla("Los tres tipos de tejido muscular", ["Tipo", "Control", "Dónde"], [["Esquelético", "voluntario", "bíceps, cuádriceps"], ["Liso", "involuntario", "estómago, vasos"], ["Cardiaco", "involuntario", "corazón"]]),
    },
    {
      html: `<h3>2.4 Las variedades del tejido conectivo</h3><p>El <mark>tejido conectivo</mark> es el más variado del cuerpo. Sus células están separadas por mucha <b>matriz extracelular</b>, una sustancia que ellas mismas fabrican y que puede ser blanda, elástica, dura o líquida. Según su matriz distinguimos varias clases:</p><p>• El <b>conjuntivo</b> propiamente dicho rellena huecos y une órganos; forma los tendones y la dermis.<br>• El <b>adiposo</b> almacena grasa, que sirve de reserva de energía y de aislante del frío.<br>• El <b>cartilaginoso</b> es firme pero flexible: está en la nariz, las orejas y los extremos de los huesos.<br>• El <b>óseo</b> tiene una matriz endurecida con sales de calcio y forma los huesos.<br>• La <b>sangre</b> tiene una matriz líquida, el plasma, en la que flotan glóbulos rojos, glóbulos blancos y plaquetas.</p>`,
      svg: L.radial("Variedades del tejido conectivo", "Conectivo", ["Conjuntivo: une", "Adiposo: grasa", "Cartílago", "Óseo: huesos", "Sangre: plasma", "Tendones"], "var(--red)"),
    },
    {
      html: `<h3>3.1 Órganos, aparatos y sistemas</h3><p>Un <b>órgano</b> está formado por varios tejidos y realiza una tarea concreta. El estómago, por ejemplo, tiene epitelio por dentro, músculo liso para mover el alimento, tejido conectivo y nervios. Varios órganos que colaboran forman un <mark>aparato</mark> si son distintos entre sí (aparato digestivo: boca, esófago, estómago, intestinos) o un <mark>sistema</mark> si están hechos sobre todo del mismo tejido (sistema nervioso, sistema muscular). En la práctica, muchos libros usan las dos palabras como sinónimos.</p><p>Un mismo órgano puede trabajar en varios aparatos. El <b>páncreas</b>, por ejemplo, vierte jugo pancreático al intestino (aparato digestivo) y también fabrica insulina (sistema endocrino). La <b>faringe</b> es un cruce de caminos para el aire y para el alimento. Esto demuestra que el cuerpo no está dividido en compartimentos estancos, sino que funciona como una red.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del tejido muscular al estómago y al aparato digestivo">${BG}
        <rect x="16" y="60" width="60" height="44" rx="6" fill="var(--inf)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2"/>${[0, 1, 2].map((i) => `<rect x="22" y="${66 + i * 12}" width="48" height="8" rx="4" fill="var(--inf)" fill-opacity=".6"/>`).join("")}
        ${fl(80, 82, 100, 82)}
        <path d="M112 62 Q 112 48 128 50 Q 160 54 158 86 Q 156 112 128 112 Q 118 112 120 100 Q 138 96 136 80 Q 134 66 120 70 Z" fill="var(--red)" fill-opacity=".35" stroke="var(--red)" stroke-width="2"/>
        ${fl(164, 82, 184, 82)}
        <g transform="translate(220 90)"><circle cy="-56" r="11" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -42 H 20 L 18 40 H -18 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M0 -44 V -20 Q 10 -20 10 -10 Q 10 0 -6 0 Q -14 6 -6 12 Q 8 16 2 28" stroke="var(--red)" stroke-width="3.5" fill="none"/></g>
        ${t(46, 126, "tejido", { size: 11 })}${t(136, 126, "órgano", { size: 11 })}${t(220, 146, "aparato", { size: 11 })}${t(100, 168, "cada nivel une piezas del anterior", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>3.2 Los aparatos y sistemas del cuerpo humano</h3><p>En el cuerpo humano se suelen distinguir estos aparatos y sistemas, que estudiarás a lo largo del curso:</p>${tabla(["Aparato o sistema", "Órganos principales", "Función"], [["Digestivo", "boca, estómago, intestinos, hígado", "transformar los alimentos y absorber nutrientes"], ["Respiratorio", "fosas nasales, tráquea, pulmones", "intercambiar oxígeno y dióxido de carbono"], ["Circulatorio", "corazón, vasos sanguíneos, sangre", "transportar sustancias por el cuerpo"], ["Excretor", "riñones, vejiga, piel", "eliminar desechos de la sangre"], ["Nervioso", "encéfalo, médula, nervios", "recibir información y coordinar respuestas"], ["Endocrino", "hipófisis, tiroides, páncreas", "regular con hormonas"], ["Locomotor", "huesos, articulaciones, músculos", "sostener y mover el cuerpo"], ["Reproductor", "testículos, ovarios, útero", "producir gametos y tener descendencia"], ["Inmunitario", "médula ósea, timo, ganglios", "defender frente a microorganismos"]])}<p>Cada uno tiene su tarea, pero ninguno funciona solo: el locomotor necesita el oxígeno que trae el circulatorio, y este necesita las órdenes del nervioso.</p>`,
      svg: L.radial("Los aparatos y sistemas que forman el cuerpo humano", "Cuerpo", ["Digestivo", "Respiratorio", "Circulatorio", "Nervioso", "Locomotor", "Reproductor"], "var(--leaf)"),
    },
    {
      html: `<h3>3.3 Las funciones vitales</h3><p>Los aparatos y sistemas se reparten las tres <b>funciones vitales</b>. En la <mark>nutrición</mark> participan los aparatos digestivo, respiratorio, circulatorio y excretor: consiguen materia y energía y eliminan desechos. En la <mark>relación</mark> intervienen los sentidos, el sistema nervioso, el sistema endocrino y el aparato locomotor: perciben lo que pasa y responden. La <mark>reproducción</mark> depende del aparato reproductor y permite tener descendencia. Todos están conectados: si uno falla, los demás lo notan.</p><p>Las tres funciones se relacionan entre sí. Para pensar y moverse (relación) hace falta energía, que procede de la nutrición; y para reproducirse hace falta que el organismo esté bien nutrido y coordinado. La función de nutrición se cumple, en el fondo, en cada célula: los aparatos solo se encargan de llevarle lo que necesita y de llevarse sus desechos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres columnas: nutrición, relación y reproducción con los aparatos de cada una">${BG}
        ${[["NUTRICIÓN", ["digestivo", "respiratorio", "circulatorio", "excretor"], "var(--leaf)"], ["RELACIÓN", ["sentidos", "nervioso", "endocrino", "locomotor"], "var(--pen)"], ["REPRODUCCIÓN", ["reproductor"], "var(--red)"]].map(([n, l, c], i) => `<rect x="${10 + i * 82}" y="16" width="76" height="150" rx="10" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${t(48 + i * 82, 38, n, { size: i === 2 ? 8.5 : 10, color: c })}${l.map((a, j) => t(48 + i * 82, 66 + j * 24, a, { size: 10, weight: 400 })).join("")}`).join("")}</svg>`,
    },
    {
      html: `<h3>3.4 La homeostasis: un equilibrio constante</h3><p>Aunque fuera haga frío o calor, aunque comas mucho o estés en ayunas, el medio interno de tu cuerpo se mantiene casi igual: la temperatura ronda los 36,5 °C, la glucosa en sangre está entre unos 70 y 110 mg/dL y el agua se mantiene en torno al 60 % del peso. Este equilibrio se llama <mark>homeostasis</mark>. Para conseguirlo, los receptores detectan un cambio, el sistema nervioso o el endocrino lo procesan y los órganos efectores responden para corregirlo. Por ejemplo, si la temperatura sube, sudamos y los vasos de la piel se dilatan para perder calor; si baja, tiritamos y se nos pone la piel de gallina. Cuando la homeostasis falla aparecen enfermedades, como la diabetes cuando no se regula bien la glucosa.</p>`,
      svg: L.ciclo("Ciclo de la homeostasis: cambio, receptor, control, respuesta y equilibrio", "36,5 °C", ["Cambio", "Receptor", "Control", "Respuesta", "Equilibrio"], "var(--red)"),
    },
    {
      html: `<h3>4.1 Cómo se estudia el cuerpo por dentro</h3><p>Para ver células y tejidos usamos el <b>microscopio óptico</b>, que aumenta hasta unas 1.000 veces, y el <b>microscopio electrónico</b>, que llega a cientos de miles de aumentos y deja ver los orgánulos. Los médicos observan los órganos sin abrir el cuerpo con <mark>técnicas de imagen</mark>: las <b>radiografías</b> muestran bien los huesos; la <b>ecografía</b> usa ultrasonidos y sirve para ver el feto; la <b>resonancia magnética</b> y el <b>TAC</b> dan imágenes en cortes muy detalladas. Una <b>biopsia</b> analiza al microscopio un trocito de tejido.</p><p>Cada técnica tiene ventajas y riesgos. Las radiografías y el TAC usan <b>rayos X</b>, una radiación que en dosis altas puede dañar las células, por eso se evitan si no son necesarias y se protege a las embarazadas. La ecografía y la resonancia no usan radiación ionizante. La <b>endoscopia</b> introduce un tubo fino con una cámara para ver el interior del estómago o del intestino. Y los <b>análisis de sangre y de orina</b> informan del estado de muchos órganos sin necesidad de verlos.</p>`,
      svg: L.tabla("Técnicas para estudiar el cuerpo humano", ["Técnica", "Qué usa", "Qué se ve"], [["Radiografía", "rayos X", "huesos"], ["Ecografía", "ultrasonidos", "feto, órganos"], ["TAC", "rayos X en cortes", "órganos en 3D"], ["Resonancia", "imanes", "tejidos blandos"], ["Biopsia", "microscopio", "células"]]),
    },
    {
      html: `<h3>4.2 Donación y trasplante de órganos</h3><p>Cuando un órgano deja de funcionar, a veces puede sustituirse por el de un donante. Se trasplantan riñones, hígado, corazón, pulmones, córneas y médula ósea. El gran problema es el <mark>rechazo</mark>: el sistema inmunitario del receptor ataca al órgano porque lo reconoce como extraño. Por eso se buscan donantes compatibles y se usan medicamentos inmunosupresores. <b>España</b> es líder mundial en donación desde hace más de treinta años gracias a la Organización Nacional de Trasplantes (ONT). Donar es voluntario, gratuito y anónimo.</p><p>En España funciona el <b>modelo de consentimiento presunto</b>: toda persona es considerada donante salvo que haya dicho lo contrario en vida, aunque en la práctica siempre se consulta a la familia. También se puede donar en vida un riñón o parte del hígado a un familiar, y cualquier persona sana entre 18 y 60 años puede inscribirse como donante de médula ósea. Hablar del tema en casa ayuda a que la familia respete la decisión de cada uno.</p>`,
      svg: L.flujo("Pasos de un trasplante de órganos", ["Donación voluntaria y altruista", "Coordinación de la ONT y búsqueda del receptor compatible", "Cirugía de trasplante", "Inmunosupresores para evitar el rechazo"], "Del donante al receptor"),
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
    { enunciado: "Un músculo se contrae aunque no queramos, sin parar, durante toda la vida. ¿Qué tipo de tejido muscular es y en qué órgano está?",
      pasos: ["Se contrae sin nuestra voluntad: es involuntario, así que puede ser liso o cardiaco.", "No para nunca a lo largo de la vida: es el latido.", "El músculo cardiaco solo está en el corazón."],
      resultado: "tejido muscular cardiaco, en el corazón." },
    { enunciado: "La temperatura de una persona sube a 38 °C tras correr. Explica qué hace su cuerpo para recuperar la homeostasis.",
      pasos: ["Los receptores de la piel y del encéfalo detectan el aumento de temperatura.", "El centro de control, en el encéfalo, envía órdenes.", "Las glándulas sudoríparas producen sudor, que al evaporarse enfría la piel.", "Los vasos de la piel se dilatan y se pierde más calor por radiación."],
      resultado: "suda y dilata los vasos de la piel hasta volver a unos 36,5 °C." },
    { enunciado: "Al microscopio, una célula tiene forma poligonal, una pared gruesa y estructuras verdes. ¿Es animal o vegetal? Justifica tu respuesta con tres datos.",
      pasos: ["La pared celular gruesa solo la tienen las células vegetales (y hongos y bacterias), no las animales.", "Las estructuras verdes son cloroplastos, con clorofila, exclusivos de las células que hacen fotosíntesis.", "La forma poligonal se debe a la pared rígida."],
      resultado: "es una célula vegetal: tiene pared, cloroplastos y forma poligonal." },
  ],
  errores: [
    "Pensar que los átomos o las moléculas están vivos: el primer nivel vivo es la célula.",
    "Confundir tejido y órgano: un tejido tiene un solo tipo de célula; un órgano tiene varios tejidos.",
    "Creer que las células especializadas tienen ADN distinto: tienen el mismo, pero usan genes diferentes.",
    "Decir que la sangre no es un tejido: es un tejido conectivo con matriz líquida.",
    "Olvidar que nuestras células no tienen pared celular ni cloroplastos, que son propios de las plantas.",
    "Pensar que cada órgano pertenece a un único aparato: el páncreas, por ejemplo, actúa en el digestivo y en el endocrino.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Escribe los siete niveles de organización del cuerpo humano en orden.", sol: "Átomo, molécula, célula, tejido, órgano, aparato o sistema, organismo." } },
    { nivel: "básico", ...{ q: "Enuncia los tres principios de la teoría celular.", sol: "Todos los seres vivos están formados por células; la célula es la unidad que realiza las funciones vitales; toda célula procede de otra célula." } },
    { nivel: "básico", ...{ q: "¿Qué orgánulo obtiene energía de la glucosa? ¿Y cuál fabrica proteínas?", sol: "La mitocondria obtiene la energía (respiración celular). Los ribosomas fabrican las proteínas." } },
    { nivel: "básico", ...{ q: "Clasifica en su tejido: hueso, neurona, piel, bíceps, grasa, corazón.", sol: "Hueso: conectivo. Neurona: nervioso. Piel (capa externa): epitelial. Bíceps: muscular esquelético. Grasa: conectivo adiposo. Corazón: muscular cardiaco." } },
    { nivel: "básico", ...{ q: "Indica qué función vital realiza cada aparato: excretor, locomotor, reproductor, respiratorio.", sol: "Excretor y respiratorio: nutrición. Locomotor: relación. Reproductor: reproducción." } },
    { nivel: "básico", q: "Indica tres diferencias entre la célula animal y la vegetal.", sol: "La vegetal tiene pared celular de celulosa, cloroplastos y una gran vacuola central; la animal no tiene pared ni cloroplastos y sus vacuolas son pequeñas. La animal tiene centriolos." },
    { nivel: "básico", q: "Nombra los cuatro tipos de tejidos y escribe un ejemplo de órgano o lugar donde aparezca cada uno.", sol: "Epitelial: la epidermis de la piel. Conectivo: el hueso o la sangre. Muscular: el bíceps o el corazón. Nervioso: el encéfalo." },
    { nivel: "básico", q: "¿Qué es la homeostasis? Pon un ejemplo.", sol: "Es el mantenimiento de unas condiciones internas estables (temperatura, glucosa, agua) aunque cambie el exterior. Ejemplo: sudar cuando hace calor para mantener los 36,5 °C." },
    { nivel: "básico", q: "Relaciona cada orgánulo con su función: lisosoma, aparato de Golgi, núcleo, membrana.", sol: "Lisosoma: digiere sustancias y restos. Aparato de Golgi: empaqueta y envía sustancias. Núcleo: guarda el ADN y dirige la célula. Membrana: separa la célula y controla lo que entra y sale." },
    { nivel: "básico", q: "¿Qué técnica usarías para ver un hueso roto? ¿Y para ver un feto?", sol: "Una radiografía para el hueso, porque los rayos X atraviesan los tejidos blandos y no el hueso. Una ecografía para el feto, porque usa ultrasonidos sin radiación." },
    { nivel: "básico", q: "Escribe dos órganos de cada uno de estos aparatos: digestivo, respiratorio, excretor.", sol: "Digestivo: estómago e intestino delgado. Respiratorio: tráquea y pulmones. Excretor: riñones y vejiga urinaria." },
    { nivel: "básico", q: "¿Quién fue Santiago Ramón y Cajal y qué descubrió?", sol: "Un científico español, Premio Nobel de Medicina en 1906, que demostró que el sistema nervioso está formado por células independientes, las neuronas." },
    { nivel: "medio", ...{ q: "¿Por qué un glóbulo rojo no tiene núcleo?", sol: "Lo pierde al especializarse: así deja más espacio para la hemoglobina y puede transportar más oxígeno." } },
    { nivel: "medio", ...{ q: "¿Qué diferencia hay entre un aparato y un sistema?", sol: "Un aparato reúne órganos de tejidos distintos (aparato digestivo); un sistema está formado sobre todo por el mismo tejido (sistema nervioso)." } },
    { nivel: "medio", ...{ q: "¿Qué son las células madre y por qué interesan a la medicina?", sol: "Son células sin especializar que pueden dar lugar a otros tipos. Podrían reparar tejidos dañados y ya se usan en trasplantes de médula ósea." } },
    { nivel: "medio", ...{ q: "Un óvulo mide 0,1 mm. Exprésalo en micrómetros.", sol: "0,1 mm · 1.000 μm/mm = 100 μm." } },
    { nivel: "medio", q: "Explica qué quiere decir que la membrana plasmática es semipermeable.", sol: "Que no deja pasar todas las sustancias por igual: el agua, el oxígeno y el CO₂ la atraviesan con facilidad, mientras que otras, como la glucosa o los iones, necesitan proteínas de transporte. Así la célula controla su contenido." },
    { nivel: "medio", q: "Diferencia las glándulas exocrinas y las endocrinas con dos ejemplos de cada una.", sol: "Las exocrinas vierten su producto al exterior o a una cavidad: sudoríparas y salivales. Las endocrinas vierten hormonas a la sangre: tiroides e hipófisis." },
    { nivel: "medio", q: "¿Por qué decimos que la sangre y el hueso pertenecen al mismo tipo de tejido si son tan distintos?", sol: "Porque los dos son tejido conectivo: tienen células separadas por mucha matriz extracelular. Lo que cambia es la matriz: líquida en la sangre (plasma) y endurecida con calcio en el hueso." },
    { nivel: "medio", q: "Explica por qué el tejido adiposo es útil y qué pasa si se acumula en exceso.", sol: "Almacena energía como grasa, aísla del frío y protege órganos como los riñones. En exceso aumenta el peso corporal y el riesgo de diabetes, hipertensión y enfermedades del corazón." },
    { nivel: "medio", q: "Pon un ejemplo de órgano que participe en dos aparatos o sistemas y explica cómo.", sol: "El páncreas: vierte jugo pancreático al intestino (digestivo) y fabrica insulina y glucagón que van a la sangre (endocrino). Otro ejemplo es la faringe, por la que pasan el aire y el alimento." },
    { nivel: "medio", q: "Una célula de la piel y una neurona de la misma persona, ¿tienen el mismo ADN? ¿Por qué son tan distintas?", sol: "Sí, tienen el mismo ADN porque proceden del mismo cigoto. Son distintas porque cada una activa genes diferentes durante la diferenciación y fabrica proteínas distintas." },
    { nivel: "medio", q: "Explica qué hace el cuerpo para mantener la temperatura cuando hace mucho frío.", sol: "Los receptores detectan el frío y el encéfalo ordena tiritar (los músculos se contraen y producen calor), contraer los vasos de la piel para perder menos calor y erizar el vello (piel de gallina)." },
    { nivel: "medio", q: "Una célula mide 20 μm en un dibujo ampliado 500 veces. ¿Cuánto mide el dibujo en milímetros?", sol: "20 μm · 500 = 10.000 μm. Como 1 mm = 1.000 μm, el dibujo mide 10 mm (1 cm)." },
    { nivel: "medio", q: "¿Qué ventajas tiene la ecografía frente a la radiografía? ¿Y qué inconveniente?", sol: "Ventajas: no usa radiación ionizante y permite ver órganos blandos en movimiento, como el feto o el corazón. Inconveniente: no atraviesa bien el hueso ni el aire, así que no sirve para ver fracturas ni el interior de los pulmones." },
    { nivel: "avanzado", ...{ q: "¿Qué es el rechazo en un trasplante y cómo se evita?", sol: "Es el ataque del sistema inmunitario del receptor al órgano donado. Se reduce buscando donantes compatibles y con medicamentos inmunosupresores." } },
    { nivel: "avanzado", q: "¿Qué significa que en cada nivel de organización aparecen propiedades emergentes? Explícalo con el ejemplo de la célula.", sol: "Que el conjunto tiene propiedades que no tienen sus partes por separado. Ninguna molécula aislada (proteína, ADN, lípido) está viva, pero cuando se organizan en una célula aparecen la nutrición, la relación y la reproducción." },
    { nivel: "avanzado", q: "Una persona con diabetes tipo 1 no fabrica insulina. Explica qué falla en su homeostasis y qué nivel de organización está dañado.", sol: "No puede regular la glucosa en sangre, que sube demasiado porque la insulina es la hormona que la hace entrar en las células. Están dañadas unas células concretas del páncreas (nivel celular), que el propio sistema inmunitario ha destruido; eso afecta al órgano y al sistema endocrino." },
    { nivel: "avanzado", q: "Argumenta por qué las células madre embrionarias tienen más aplicaciones médicas que las adultas y qué debate ético plantean.", sol: "Pueden originar casi cualquier tipo celular, mientras que las adultas solo dan unos pocos tipos. El debate surge porque para obtenerlas se usan embriones tempranos. Una alternativa son las células adultas reprogramadas, que se comportan como embrionarias sin usar embriones." },
    { nivel: "avanzado", q: "En España hubo unos 2.300 donantes en un año con unos 48 millones de habitantes. Calcula la tasa de donantes por millón de habitantes.", sol: "2.300 / 48 ≈ 47,9 donantes por millón de habitantes, una de las tasas más altas del mundo." },
    { nivel: "avanzado", q: "Diseña un experimento sencillo para comparar células de la mucosa de la boca y de la epidermis de la cebolla al microscopio. ¿Qué diferencias esperas?", sol: "Raspar suavemente el interior de la mejilla con un bastoncillo y extenderlo en un portaobjetos con azul de metileno; separar una telilla de cebolla y teñirla con lugol. Se esperan células bucales redondeadas e irregulares, sin pared, y células de cebolla poligonales, con pared, ordenadas como ladrillos (sin cloroplastos porque el bulbo no hace fotosíntesis)." },
    { nivel: "avanzado", q: "Explica por qué un trasplante de médula ósea puede curar una leucemia y por qué hace falta un donante compatible.", sol: "La médula ósea contiene células madre que fabrican las células de la sangre; si se sustituye la médula enferma por otra sana, se producen células normales. Hace falta compatibilidad para que el sistema inmunitario del receptor no rechace la médula y para que las nuevas células defensivas no ataquen al receptor." },
    { nivel: "avanzado", q: "Construye una tabla con los niveles de organización y escribe un ejemplo de cada uno relacionado con el aparato digestivo.", sol: "Átomo: carbono. Molécula: una enzima digestiva. Célula: célula de la mucosa intestinal. Tejido: epitelio intestinal. Órgano: intestino delgado. Aparato: aparato digestivo. Organismo: la persona." },
    { nivel: "avanzado", q: "¿Por qué crees que la piel se renueva cada pocas semanas y las neuronas apenas se renuevan? ¿Qué consecuencia tiene para las lesiones?", sol: "La piel tiene células madre adultas que se dividen continuamente porque se desgasta con el roce; las neuronas son células muy especializadas que casi no se dividen. Por eso una herida en la piel cicatriza en días, mientras que una lesión en el encéfalo o la médula espinal puede dejar secuelas permanentes." },
  ],
  quiz: [
    { q: "El primer nivel de organización con vida es…", o: ["la molécula", "la célula", "el tejido", "el átomo"], a: 1, e: "La célula es la unidad de vida." },
    { q: "Un conjunto de células parecidas con la misma función es…", o: ["un órgano", "un aparato", "un tejido", "un sistema"], a: 2, e: "Eso es un tejido." },
    { q: "El ADN de la célula humana está en…", o: ["el núcleo", "la membrana", "el lisosoma", "el aparato de Golgi"], a: 0, e: "Somos eucariotas: el ADN está en el núcleo." },
    { q: "La respiración celular ocurre en…", o: ["los ribosomas", "los lisosomas", "el aparato de Golgi", "las mitocondrias"], a: 3, e: "En las mitocondrias." },
    { q: "La sangre es un tejido…", o: ["epitelial", "conectivo", "nervioso", "muscular"], a: 1, e: "Conectivo con matriz líquida." },
    { q: "El músculo que solo está en el corazón es…", o: ["esquelético", "liso", "voluntario", "cardiaco"], a: 3, e: "El cardiaco." },
    { q: "El estómago es…", o: ["un tejido", "un sistema", "un órgano", "una célula"], a: 2, e: "Tiene varios tejidos: es un órgano." },
    { q: "La función de relación la realizan, entre otros…", o: ["el sistema nervioso y los sentidos", "los riñones", "los pulmones", "el intestino"], a: 0, e: "Perciben y responden." },
    { q: "Las células especializadas de una persona tienen…", o: ["ADN distinto", "el mismo ADN", "ningún ADN", "la mitad del ADN"], a: 1, e: "El mismo ADN, con genes distintos activos." },
    { q: "La técnica que usa ultrasonidos es…", o: ["la radiografía", "el TAC", "la biopsia", "la ecografía"], a: 3, e: "La ecografía." },
    { q: "La célula vegetal se diferencia de la animal en que tiene…", o: ["núcleo", "mitocondrias", "pared celular y cloroplastos", "membrana"], a: 2, e: "Pared de celulosa y cloroplastos." },
    { q: "¿Quién demostró que el sistema nervioso está formado por neuronas?", o: ["Ramón y Cajal", "Robert Hooke", "Virchow", "Darwin"], a: 0, e: "Premio Nobel en 1906." },
    { q: "Las glándulas que vierten hormonas a la sangre son…", o: ["exocrinas", "endocrinas", "sudoríparas", "salivales"], a: 1, e: "Endocrinas." },
    { q: "El tejido que almacena grasa es el…", o: ["cartilaginoso", "óseo", "adiposo", "epitelial"], a: 2, e: "El adiposo." },
    { q: "La homeostasis es…", o: ["una enfermedad", "el equilibrio del medio interno", "un tipo de tejido", "la división celular"], a: 1, e: "Mantener constantes temperatura, glucosa, agua…" },
    { q: "Las células madre son…", o: ["células muertas", "glóbulos rojos", "neuronas", "células sin especializar"], a: 3, e: "Pueden dar otros tipos celulares." },
    { q: "El orgánulo que fabrica proteínas es…", o: ["el ribosoma", "la mitocondria", "el lisosoma", "la vacuola"], a: 0, e: "Los ribosomas." },
    { q: "Un órgano que actúa en el aparato digestivo y en el sistema endocrino es…", o: ["el corazón", "el pulmón", "el páncreas", "el fémur"], a: 2, e: "Fabrica jugo pancreático e insulina." },
    { q: "Cuando tenemos calor, el cuerpo…", o: ["tirita", "suda", "eriza el vello", "contrae los vasos de la piel"], a: 1, e: "El sudor enfría al evaporarse." },
    { q: "La técnica que obtiene un trocito de tejido para verlo al microscopio es…", o: ["la resonancia", "la ecografía", "la radiografía", "la biopsia"], a: 3, e: "La biopsia." },
  ],
  examen: [
    { q: "¿Cuál es el orden correcto?", o: ["célula, tejido, órgano, aparato", "tejido, célula, aparato, órgano", "órgano, tejido, célula, aparato", "célula, órgano, tejido, aparato"], a: 0, e: "De menor a mayor complejidad." },
    { q: "Las células humanas no tienen…", o: ["membrana", "mitocondrias", "núcleo", "pared celular"], a: 3, e: "La pared es de plantas, hongos y bacterias." },
    { q: "Las glándulas proceden del tejido…", o: ["muscular", "epitelial", "nervioso", "óseo"], a: 1, e: "Son epitelios que segregan sustancias." },
    { q: "La membrana plasmática es semipermeable porque…", o: ["no deja pasar nada", "deja pasar todo", "controla qué sustancias entran y salen", "es rígida"], a: 2, e: "Selecciona lo que pasa." },
    { q: "La diferenciación celular consiste en…", o: ["que las células se especializan activando genes distintos", "que las células cambian de ADN", "que las células mueren", "que las células se dividen sin parar"], a: 0, e: "Mismo ADN, distinto uso." },
    { q: "La matriz del tejido óseo es dura porque contiene…", o: ["grasa", "plasma", "sales de calcio", "celulosa"], a: 2, e: "Fosfato de calcio, sobre todo." },
    { q: "El rechazo de un trasplante lo provoca…", o: ["el sistema nervioso", "el sistema inmunitario del receptor", "el donante", "la cirugía"], a: 1, e: "Reconoce el órgano como extraño." },
    { q: "La función vital que consigue materia y energía es la…", o: ["relación", "reproducción", "coordinación", "nutrición"], a: 3, e: "Digestivo, respiratorio, circulatorio y excretor." },
  ],
  feynman: [...["Qué son los niveles de organización y por qué la célula es el primero vivo", "Cómo se especializan las células si tienen el mismo ADN", "Cuáles son los cuatro tejidos y qué hace cada uno"], "Qué es la homeostasis, con el ejemplo de la temperatura", "Por qué España es líder en trasplantes y cómo se evita el rechazo"],
  mapa: mapa("CUERPO HUMANO", "var(--eso)", [
    ["Célula", "membrana · citoplasma · núcleo", "var(--pen)"],
    ["Tejidos", "epitelial · conectivo · muscular · nervioso", "var(--leaf)"],
    ["Órganos y aparatos", "varios tejidos · una función", "var(--red)"],
    ["Funciones vitales", "nutrición · relación · reproducción", "var(--inf)"],
  ], 280),
  tarjetas: [
    ...[
    ["¿Qué es un tejido?", "Un conjunto de células parecidas que realizan la misma función."],
    ["Los cuatro tejidos", "Epitelial, conectivo, muscular y nervioso."],
    ["¿Qué hace la mitocondria?", "La respiración celular: saca energía de la glucosa."],
    ["Diferenciación celular", "La especialización de las células, que activan genes distintos."],
    ["Célula madre", "Célula sin especializar que puede dar lugar a otros tipos."],
    ["Órgano", "Estructura con varios tejidos que realiza una tarea concreta."],
    ["Aparato frente a sistema", "Aparato: órganos de tejidos distintos. Sistema: sobre todo del mismo tejido."],
    ["Funciones vitales", "Nutrición, relación y reproducción."],
  ],
    ["Célula vegetal", "Tiene pared de celulosa, cloroplastos y una gran vacuola."],
    ["Homeostasis", "Mantener estable el medio interno: temperatura, glucosa, agua."],
    ["Glándula endocrina", "Vierte hormonas a la sangre; la exocrina, al exterior o a una cavidad."],
    ["Tejido conectivo", "Células separadas por matriz: conjuntivo, adiposo, cartílago, hueso y sangre."],
  ],
  glosario: [
    ["Célula", "Unidad más pequeña de los seres vivos que realiza las funciones vitales."],
    ["Eucariota", "Célula con el ADN dentro de un núcleo rodeado de membrana."],
    ["Orgánulo", "Estructura del citoplasma con una función concreta."],
    ["Membrana plasmática", "Capa que rodea la célula y controla el paso de sustancias."],
    ["Mitocondria", "Orgánulo donde se obtiene energía por respiración celular."],
    ["Diferenciación celular", "Especialización de las células activando genes distintos."],
    ["Célula madre", "Célula sin especializar capaz de originar otros tipos."],
    ["Tejido", "Conjunto de células parecidas con la misma función."],
    ["Matriz extracelular", "Sustancia que rodea las células del tejido conectivo."],
    ["Glándula", "Grupo de células epiteliales que fabrica y vierte sustancias."],
    ["Órgano", "Estructura formada por varios tejidos con una función concreta."],
    ["Aparato", "Conjunto de órganos de tejidos distintos que colaboran."],
    ["Sistema", "Conjunto de órganos formados sobre todo por el mismo tejido."],
    ["Homeostasis", "Mantenimiento de un medio interno estable."],
    ["Biopsia", "Extracción de un trozo de tejido para estudiarlo."],
    ["Rechazo", "Ataque del sistema inmunitario a un órgano trasplantado."],
  ],
  situacion: {
    titulo: "Guía del cuerpo para visitantes",
    reto: "El museo de ciencias de vuestra ciudad quiere una guía ilustrada para que los niños de primaria entiendan cómo está organizado el cuerpo humano. Vuestro grupo la preparará con observaciones reales al microscopio.",
    pasos: [
      "Observad al microscopio células de la mucosa bucal y de la cebolla, dibujadlas y anotad sus diferencias.",
      "Preparad una ficha de cada tipo de tejido con un dibujo, su función y dónde se encuentra.",
      "Elegid un órgano (el estómago, el corazón) y explicad qué tejidos lo forman.",
      "Representad los niveles de organización en una escalera o maqueta con ejemplos.",
      "Añadid una página sobre la donación de órganos con datos de la ONT.",
    ],
    producto: "Una guía ilustrada (en papel o digital) de los niveles de organización, revisada por otro grupo antes de entregarla.",
    evaluacion: [
      "Corrección científica de los dibujos y de las explicaciones.",
      "Uso adecuado del vocabulario del tema.",
      "Claridad y adaptación al público infantil.",
      "Trabajo cooperativo y reparto de tareas.",
    ],
  },
  familias: ["Buscad en casa ejemplos de cada nivel: una molécula (agua), un tejido (la grasa de la carne), un órgano (el corazón de un pollo).", "Hablad sobre la donación de órganos y sobre por qué España es líder mundial.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): niveles de organización, la célula eucariota animal, tejidos, órganos, aparatos y sistemas, funciones vitales y homeostasis. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Observación al microscopio de células de la mucosa bucal teñidas con azul de metileno y de epidermis de cebolla con lugol.",
      "Mural de los niveles de organización con ejemplos de cada aparato.",
      "Medir la temperatura antes y después de hacer ejercicio para hablar de homeostasis.",
      "Debate informado con datos de la ONT sobre la donación de órganos.",
    ],
  },
  fuentes: [...[RD, wiki("Tejido (biología)", "Tejido_(biolog%C3%ADa)"), { t: "Organización Nacional de Trasplantes", url: "https://www.ont.es/" }], wiki("Homeostasis", "Homeostasis")],
  revisado: "2026-11-13",
};
