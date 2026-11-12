// Tecnología y Digitalización 2º ESO: materiales de uso técnico. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Materiales de uso técnico",
  minutos: 55,
  objetivos: ["Distinguir materias primas, materiales y productos tecnológicos", "Clasificar los materiales de uso técnico y describir sus propiedades", "Conocer la madera y sus derivados, los metales, los plásticos y los materiales pétreos y cerámicos", "Elegir el material adecuado para un objeto y valorar el reciclaje"],
  claves: ["materia prima", "material", "producto", "propiedades", "madera", "tableros", "metales ferrosos", "plásticos", "cerámicos", "reciclaje"],
  pregunta: {
    texto: "¿Por qué las sartenes son de metal, los mangos de plástico y las ventanas de vidrio? ¿No sería más fácil hacerlo todo del mismo material?",
    respuesta: "Porque cada material tiene unas <mark>propiedades</mark> distintas. El metal conduce bien el calor y cocina la comida; el plástico del mango es aislante y no te quemas; el vidrio es transparente y deja pasar la luz. Elegir el <mark>material adecuado</mark> para cada pieza es una de las decisiones más importantes al diseñar un objeto.",
  },
  bloques: [
    {
      html: `<h3>Materias primas, materiales y productos</h3><p>Todo lo que fabricamos procede de la naturaleza. Las <mark>materias primas</mark> son los recursos que se extraen directamente de la naturaleza: la madera de los árboles, los minerales de las minas, el petróleo, la arcilla, el algodón o la lana. Pueden ser de origen <b>vegetal</b>, <b>animal</b> o <b>mineral</b>. Las materias primas casi nunca se usan tal cual: se transforman en la industria para obtener <mark>materiales</mark>, que ya se pueden usar para fabricar objetos. Por ejemplo, del árbol se obtienen tablones; del mineral de hierro, el acero; del petróleo, los plásticos; de la arena, el vidrio. Por último, con los materiales se fabrican los <mark>productos tecnológicos</mark>: una mesa, una bici, una botella. Los materiales que se usan para fabricar objetos se llaman <b>materiales de uso técnico</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de transformación: materia prima, el árbol; material, los tablones; producto, una silla. Y mineral de hierro, acero, bicicleta">${BG}
        ${[["materia prima", 14], ["material", 98], ["producto", 182]].map(([s, x]) => `${t(x + 32, 26, s, { size: 10, color: "var(--pen)" })}`).join("")}
        <rect x="42" y="66" width="8" height="30" fill="#8a6a4a"/><circle cx="46" cy="56" r="18" fill="var(--leaf)"/>
        ${[0, 1, 2].map((i) => `<rect x="${108 + i * 3}" y="${56 + i * 12}" width="44" height="8" fill="#d9b48a" stroke="#8a6a4a"/>`).join("")}
        <path d="M200 56 v 40 M232 76 v 20 M200 76 h 32 M200 76 v -20" stroke="#8a6a4a" stroke-width="5" stroke-linecap="round"/>
        <path d="M30 140 l 10 -12 l 16 4 l 8 12 l -12 10 l -18 -2 Z" fill="#8a6a6a"/>
        <rect x="108" y="128" width="44" height="18" rx="2" fill="#9aa0a6" stroke="var(--ink)"/>
        <circle cx="200" cy="146" r="11" fill="none" stroke="var(--ink)" stroke-width="2.5"/><circle cx="236" cy="146" r="11" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M200 146 l 14 -18 l 14 0 l 8 18 M214 128 l -4 -6" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        ${fl(80, 70, 100, 70)}${fl(164, 70, 184, 70)}${fl(80, 140, 100, 140)}${fl(164, 140, 182, 140)}</svg>`,
    },
    {
      html: `<h3>Las propiedades de los materiales</h3><p>Para elegir un material hay que conocer sus <mark>propiedades</mark>. Las <b>propiedades mecánicas</b> indican cómo responden a las fuerzas: la <b>dureza</b> (resistencia a ser rayado), la <b>tenacidad</b> (resistencia a romperse por golpes; lo contrario es la <b>fragilidad</b>), la <b>elasticidad</b> (recuperar la forma), la <b>plasticidad</b> (quedarse deformado), la <b>ductilidad</b> (estirarse en hilos) y la <b>maleabilidad</b> (extenderse en láminas). Las <b>propiedades térmicas</b> indican cómo se comportan con el calor (conductores o aislantes térmicos, dilatación, punto de fusión). Las <b>propiedades eléctricas</b>, si dejan pasar la corriente (conductores) o no (aislantes). Otras propiedades son la <b>densidad</b>, la <b>transparencia</b>, el <b>magnetismo</b> o la resistencia a la <b>oxidación</b>. También importan las propiedades <b>ecológicas</b>: si es reciclable, biodegradable o tóxico.</p>${tabla(["Propiedad", "Significado", "Ejemplo"], [["Dureza", "difícil de rayar", "diamante, acero"], ["Tenacidad", "aguanta golpes sin romperse", "acero, madera"], ["Fragilidad", "se rompe con un golpe", "vidrio, cerámica"], ["Elasticidad", "recupera la forma", "goma, muelle"], ["Ductilidad", "se estira en hilos", "cobre"], ["Maleabilidad", "se extiende en láminas", "aluminio, oro"]])}`,
      video: { id: "BvELTShsiHE", titulo: "Los materiales y sus propiedades", canal: "Happy Learning Español", vistas: 495024 },
    },
    {
      html: `<h3>Clasificación de los materiales</h3><p>Los materiales de uso técnico se clasifican en varios grupos según su origen y su composición. Las <mark>maderas</mark> se obtienen de los árboles. Los <mark>metales</mark> se obtienen de minerales. Los <mark>plásticos</mark> son materiales sintéticos que se fabrican, sobre todo, a partir del petróleo. Los <mark>materiales pétreos</mark> son rocas que se usan casi como salen de la cantera: mármol, granito, pizarra. Los <mark>materiales cerámicos y el vidrio</mark> se obtienen moldeando y cociendo arcilla o fundiendo arena. Los <mark>materiales textiles</mark> son fibras que se hilan y tejen, naturales (algodón, lana, seda) o sintéticas (nailon, poliéster). Y los <b>materiales compuestos</b> combinan varios para mejorar sus propiedades, como el hormigón armado (hormigón con barras de acero) o la fibra de carbono de las bicis de competición.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seis grupos de materiales: madera, metales, plásticos, pétreos, cerámicos y vidrio, y textiles">${BG}
        ${[["madera", "#c49a6c"], ["metales", "#9aa0a6"], ["plásticos", "#4c7ee8"], ["pétreos", "#7a7f86"], ["cerámicos", "#d97a4a"], ["textiles", "#9a66e0"]].map(([s, c], i) => { const x = 14 + (i % 3) * 82, y = 26 + Math.floor(i / 3) * 76; return `<rect x="${x}" y="${y}" width="72" height="56" rx="10" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${t(x + 36, y + 33, s, { size: 11 })}`; }).join("")}</svg>`,
    },
    {
      html: `<h3>La madera</h3><p>La <mark>madera</mark> se obtiene del tronco de los árboles. Se tala el árbol, se descorteza, se corta en tablones en el aserradero y se <b>seca</b> para que no se deforme ni se pudra. Es <b>ligera</b>, <b>resistente</b>, buena <b>aislante</b> del calor y la electricidad, fácil de trabajar y bonita; además es <b>renovable</b> y biodegradable si los bosques se gestionan bien. Sus inconvenientes son que arde, se hincha con la humedad y la atacan hongos e insectos como la carcoma; por eso se protege con barnices y pinturas. Hay dos grandes tipos. Las <b>maderas blandas</b> proceden de árboles de crecimiento rápido, casi siempre coníferas como el <b>pino</b> o el abeto: son baratas y fáciles de trabajar, y se usan en construcción, muebles sencillos y embalajes. Las <b>maderas duras</b> proceden de árboles de crecimiento lento, como el <b>roble</b>, el <b>nogal</b>, la haya o el castaño: son más resistentes y caras, y se usan en muebles de calidad, suelos y herramientas.</p>`,
      video: { id: "Mv_XTt6mEI4", titulo: "De qué se compone la madera", canal: "Qué Hongo", vistas: 39372 },
    },
    {
      html: `<h3>Los derivados de la madera</h3><p>Para aprovechar los restos de madera y conseguir piezas grandes y estables, se fabrican <mark>tableros artificiales</mark>. El <b>contrachapado</b> está formado por láminas finas de madera pegadas con las vetas cruzadas, lo que lo hace muy resistente: se usa en muebles y maquetas. El <b>aglomerado</b> se fabrica con virutas y serrín prensados con cola: es barato y se usa en muebles de cocina y estanterías, normalmente forrado con melamina. El <b>tablero de fibras (DM o MDF)</b> se hace con fibras de madera muy finas prensadas: es liso y fácil de pintar y cortar. El <b>listón</b> y el <b>tablero alistonado</b> unen tiras de madera maciza. Además, de la madera se obtienen el <b>papel</b> y el <b>cartón</b>, a partir de la pasta de celulosa, y el <b>corcho</b>, de la corteza del alcornoque, muy abundante en España y Portugal.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tableros derivados de la madera vistos de canto: contrachapado con capas cruzadas, aglomerado con virutas y DM con fibras finas y uniformes">${BG}
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="20" y="${30 + i * 8}" width="64" height="8" fill="${i % 2 ? "#e2c49a" : "#c49a6c"}" stroke="#8a6a4a" stroke-width=".8"/>`).join("")}${t(52, 100, "contrachapado", { size: 10 })}
        <rect x="100" y="30" width="64" height="40" fill="#d9b48a" stroke="#8a6a4a"/>${Array.from({ length: 22 }, (_, k) => `<rect x="${102 + (k * 23) % 58}" y="${32 + (k * 17) % 34}" width="${4 + (k % 3) * 2}" height="2.5" fill="#8a6a4a" transform="rotate(${(k * 37) % 90 - 45} ${104 + (k * 23) % 58} ${33 + (k * 17) % 34})"/>`).join("")}${t(132, 100, "aglomerado", { size: 10 })}
        <rect x="180" y="30" width="64" height="40" fill="#b88a5a" stroke="#8a6a4a"/>${t(212, 100, "DM", { size: 10 })}
        ${t(130, 140, "con restos de madera", { size: 11, color: "var(--muted)" })}${t(130, 158, "y cola, prensados", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los metales</h3><p>Los <mark>metales</mark> se obtienen de minerales extraídos de las minas, que se tratan en hornos para separar el metal. Son <b>buenos conductores</b> del calor y la electricidad, tienen <b>brillo</b>, son <b>resistentes</b>, tenaces, dúctiles y maleables, y se pueden fundir y moldear. Además, se reciclan muchas veces sin perder calidad. Se dividen en dos grupos. Los <b>metales férricos</b> o ferrosos contienen hierro: el <b>hierro</b> puro se usa poco porque es blando y se oxida; el <b>acero</b> (hierro con menos de un 2 % de carbono) es el metal más usado del mundo, en estructuras, coches, herramientas y electrodomésticos; el <b>acero inoxidable</b> lleva cromo y níquel y no se oxida; la <b>fundición</b> tiene más carbono y se usa para piezas moldeadas, como las tapas de alcantarilla. Los <b>metales no férricos</b> no contienen hierro: el <b>cobre</b> (cables eléctricos), el <b>aluminio</b> (ligero: latas, ventanas, aviones), el <b>cinc</b>, el <b>estaño</b>, el plomo, el oro o la plata. También se usan aleaciones como el <b>bronce</b> (cobre y estaño) y el <b>latón</b> (cobre y cinc).</p>`,
    },
    {
      html: `<h3>Los plásticos</h3><p>Los <mark>plásticos</mark> son materiales sintéticos formados por moléculas muy largas, los <b>polímeros</b>, que se fabrican sobre todo a partir del <b>petróleo</b>. Son <b>ligeros</b>, baratos, fáciles de moldear en cualquier forma y color, <b>aislantes</b> térmicos y eléctricos, impermeables y resistentes a la corrosión. Su gran inconveniente es que tardan cientos de años en degradarse y contaminan mares y suelos. Se clasifican en tres grupos. Los <b>termoplásticos</b> se ablandan con el calor y se pueden moldear muchas veces, por lo que son reciclables: el PET de las botellas, el polietileno (PE) de las bolsas, el PVC de las tuberías, el polipropileno (PP) de los táperes y el poliestireno (PS) del «corcho blanco». Los <b>termoestables</b> no se ablandan con el calor una vez moldeados: la baquelita de los enchufes y la melamina. Los <b>elastómeros</b> son muy elásticos: el caucho de los neumáticos, el neopreno o la silicona.</p>${tabla(["Código", "Plástico", "Uso típico"], [["1 PET", "tereftalato de polietileno", "botellas de agua"], ["2 PEAD", "polietileno de alta densidad", "botes de detergente"], ["3 PVC", "policloruro de vinilo", "tuberías, ventanas"], ["4 PEBD", "polietileno de baja densidad", "bolsas, film"], ["5 PP", "polipropileno", "táperes, tapones"], ["6 PS", "poliestireno", "bandejas, corcho blanco"]])}`,
    },
    {
      html: `<h3>Pétreos, cerámicos y vidrio</h3><p>Los <mark>materiales pétreos</mark> son rocas naturales que se usan casi sin transformar, solo cortadas y pulidas: el <b>mármol</b> y el <b>granito</b> en suelos y encimeras, la <b>pizarra</b> en tejados, y la arena y la grava como áridos. Son duros y resistentes a la compresión, pero pesados. Con ellos se fabrican materiales <b>aglomerantes</b>: el <b>yeso</b>, la <b>cal</b> y el <b>cemento</b>, que mezclados con agua se endurecen; el cemento con arena forma el mortero, y con arena y grava, el <b>hormigón</b>. Los <mark>materiales cerámicos</mark> se fabrican moldeando <b>arcilla</b> húmeda y cociéndola en hornos: los ladrillos, las tejas, los azulejos, la loza de los platos y la porcelana. Son duros y aislantes, pero frágiles. El <mark>vidrio</mark> se obtiene fundiendo arena de sílice con otras sustancias a unos 1500 °C: es transparente, duro, frágil, impermeable y se recicla infinitas veces sin perder calidad.</p>`,
    },
    {
      html: `<h3>Elegir materiales y reciclar</h3><p>Al diseñar, el material se elige pensando en la <b>función</b> de cada pieza (qué propiedades necesita), en su <b>coste</b>, en lo fácil que es <b>trabajarlo</b> con las herramientas disponibles, en su <b>aspecto</b> y en su <b>impacto ambiental</b>. Extraer y transformar materias primas consume energía y agua, genera residuos y destruye paisajes; por eso es fundamental aplicar las <mark>tres erres</mark>: <b>reducir</b> la cantidad de material y de envases, <b>reutilizar</b> los objetos y <b>reciclar</b> los residuos para obtener materiales nuevos. En España se separan en contenedores: <b>amarillo</b> para envases de plástico, latas y briks; <b>azul</b> para papel y cartón; <b>verde</b> para vidrio; <b>marrón</b> para orgánico; y los puntos limpios para aparatos eléctricos, pilas, aceite y otros residuos especiales. Reciclar una lata de aluminio ahorra el 95 % de la energía necesaria para fabricarla desde cero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Contenedores de reciclaje: amarillo para envases, azul para papel y cartón, verde para vidrio y marrón para orgánico">${BG}
        ${[["#f2c40f", "envases"], ["#2f6fd6", "papel"], ["#2e9d55", "vidrio"], ["#8a5a3a", "orgánico"]].map(([c, s], i) => { const x = 18 + i * 60; return `<path d="M${x} 50 h 44 l -4 80 h -36 Z" fill="${c}"/><rect x="${x - 3}" y="40" width="50" height="12" rx="3" fill="${c}" stroke="var(--ink)" stroke-opacity=".3"/><circle cx="${x + 8}" cy="134" r="4" fill="var(--ink)"/><circle cx="${x + 36}" cy="134" r="4" fill="var(--ink)"/>${t(x + 22, 156, s, { size: 10 })}`; }).join("")}
        ${t(130, 26, "reducir · reutilizar · reciclar", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Grandes familias de materiales",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen de materiales: madera, ligera y aislante; metales, conductores y resistentes; plásticos, ligeros y moldeables; pétreos y cerámicos, duros pero frágiles">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Madera", "ligera · aislante", "pino · roble · DM", "#b5653a"], ["Metales", "conductores", "acero · cobre · aluminio", "var(--muted)"], ["Plásticos", "ligeros · moldeables", "PET · PVC · caucho", "var(--pen)"], ["Pétreos y cerámicos", "duros · frágiles", "granito · ladrillo · vidrio", "var(--red)"]].map(([a, b, c, col], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="30" width="140" height="170" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 70, 72, a, { size: a.length > 10 ? 13 : 16, color: col, font: D })}${t(x + 70, 120, b, { size: 12, weight: 400 })}${t(x + 70, 156, c, { size: 11, color: "var(--muted)" })}`; }).join("")}
    </svg>`,
  },
  video: { id: "DhLwvErBp9s", titulo: "Los materiales tecnológicos: tipos, clasificación y ejemplos", canal: "Pizarra Tecnológica", vistas: 56065, megusta: 768, busqueda: "materiales de uso técnico" },
  ejemplos: [
    { enunciado: "Elige material para el mango de un destornillador y justifica.",
      pasos: ["Función: sujetarlo con la mano y aislar si se toca un cable.", "Propiedades necesarias: aislante eléctrico, resistente, ligero y cómodo.", "Material: un plástico (polipropileno o un termoestable) o madera dura."],
      resultado: "Plástico aislante o madera dura." },
    { enunciado: "Sigue la cadena de transformación de una lata de refresco.",
      pasos: ["Materia prima: bauxita, un mineral.", "Material: aluminio, obtenido en la industria.", "Producto: la lata; al reciclarla vuelve a ser material."],
      resultado: "Bauxita → aluminio → lata → reciclaje." },
    { enunciado: "¿Qué contenedor corresponde a: un brik de leche, una revista, un tarro de mermelada, una piel de plátano?",
      pasos: ["Brik: es un envase → amarillo.", "Revista: papel → azul.", "Tarro: vidrio → verde (la tapa metálica, al amarillo). Piel de plátano: orgánico → marrón."],
      resultado: "Amarillo, azul, verde y marrón." },
  ],
  errores: [
    "Confundir materia prima y material: el árbol es materia prima y el tablón es material.",
    "Pensar que el aglomerado es madera maciza: son virutas prensadas con cola.",
    "Llamar «hierro» a cualquier metal ferroso: casi todo lo que usamos es acero.",
    "Creer que todos los plásticos se reciclan igual: los termoestables no se pueden volver a fundir.",
    "Echar el vidrio al contenedor amarillo o la cerámica rota al verde.",
  ],
  ejercicios: [
    { q: "Clasifica en materia prima, material o producto: algodón, camiseta, hilo, petróleo, botella, PET.", sol: "Materias primas: algodón y petróleo. Materiales: hilo y PET. Productos: camiseta y botella." },
    { q: "Define dureza, tenacidad y fragilidad con un ejemplo.", sol: "Dureza: resistencia a ser rayado (diamante). Tenacidad: resistencia a romperse por golpes (acero). Fragilidad: se rompe con facilidad (vidrio)." },
    { q: "¿Qué diferencia hay entre ductilidad y maleabilidad?", sol: "Ductilidad: capacidad de estirarse en hilos (cobre). Maleabilidad: capacidad de extenderse en láminas (aluminio)." },
    { q: "Escribe dos maderas blandas y dos duras con un uso.", sol: "Blandas: pino (construcción), abeto (embalajes). Duras: roble (muebles), haya (herramientas)." },
    { q: "¿Cómo se fabrica el contrachapado y por qué es resistente?", sol: "Pegando láminas finas de madera con las vetas cruzadas; al alternar la dirección, resiste en todas las direcciones." },
    { q: "¿Qué es el acero y por qué se usa más que el hierro puro?", sol: "Una aleación de hierro con menos de un 2 % de carbono; es más duro y resistente que el hierro." },
    { q: "Escribe tres metales no férricos y un uso de cada uno.", sol: "Cobre (cables), aluminio (latas, ventanas), estaño (soldaduras) u otros." },
    { q: "Explica la diferencia entre termoplásticos y termoestables.", sol: "Los termoplásticos se ablandan con el calor y se pueden remoldear y reciclar; los termoestables no se ablandan una vez moldeados." },
    { q: "¿Cómo se fabrican los ladrillos y el vidrio?", sol: "Ladrillos: moldeando arcilla y cociéndola en un horno. Vidrio: fundiendo arena de sílice con otras sustancias." },
    { q: "Elige el material para: una ventana, un cable eléctrico, una tabla de cortar, una bolsa de basura. Justifícalo.", sol: "Ventana: vidrio (transparente). Cable: cobre (conductor) con funda de plástico (aislante). Tabla: madera dura o polietileno (resistente, higiénico). Bolsa: polietileno (ligero, flexible, impermeable)." },
  ],
  quiz: [
    { q: "El petróleo es…", o: ["una materia prima", "un material", "un producto"], a: 0, e: "Materia prima." },
    { q: "La capacidad de estirarse en hilos es la…", o: ["maleabilidad", "ductilidad", "dureza"], a: 1, e: "Ductilidad." },
    { q: "El pino es una madera…", o: ["blanda", "dura", "artificial"], a: 0, e: "Blanda." },
    { q: "Tablero de láminas encoladas con las vetas cruzadas:", o: ["aglomerado", "contrachapado", "DM"], a: 1, e: "Contrachapado." },
    { q: "El acero es hierro con…", o: ["cobre", "carbono", "plástico"], a: 1, e: "Carbono." },
    { q: "Un metal ligero que se usa en latas y aviones:", o: ["plomo", "aluminio", "hierro"], a: 1, e: "Aluminio." },
    { q: "Los plásticos se fabrican sobre todo con…", o: ["petróleo", "arcilla", "madera"], a: 0, e: "Petróleo." },
    { q: "Un plástico muy elástico como el caucho es un…", o: ["termoplástico", "termoestable", "elastómero"], a: 2, e: "Elastómero." },
    { q: "Los ladrillos se fabrican con…", o: ["arena fundida", "arcilla cocida", "cemento"], a: 1, e: "Arcilla cocida." },
    { q: "El vidrio va al contenedor…", o: ["amarillo", "verde", "azul"], a: 1, e: "Verde." },
  ],
  examen: [
    { q: "El hormigón está formado por…", o: ["cemento, arena, grava y agua", "arcilla y agua", "yeso y madera"], a: 0, e: "Cemento, arena, grava y agua." },
    { q: "El corcho se obtiene del…", o: ["pino", "alcornoque", "roble"], a: 1, e: "Del alcornoque." },
    { q: "Un material que se rompe fácilmente con un golpe es…", o: ["tenaz", "frágil", "dúctil"], a: 1, e: "Frágil." },
  ],
  feynman: ["Qué diferencia hay entre materia prima, material y producto", "Qué propiedades tienen la madera, los metales y los plásticos", "Cómo elegirías el material de un objeto"],
  mapa: mapa("MATERIALES", "var(--eso)", [
    ["Propiedades", "mecánicas · térmicas · eléctricas", "var(--pen)"],
    ["Madera", "blandas · duras · tableros", "#b5653a"],
    ["Metales y plásticos", "férricos · termoplásticos", "var(--red)"],
    ["Pétreos y cerámicos", "granito · ladrillo · vidrio", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Materia prima", "Recurso que se extrae directamente de la naturaleza."],
    ["Material", "Materia prima transformada, lista para fabricar objetos."],
    ["Tenacidad", "Resistencia a romperse por golpes."],
    ["Contrachapado", "Láminas de madera encoladas con las vetas cruzadas."],
    ["Acero", "Hierro con menos de un 2 % de carbono; el metal más usado."],
    ["Termoplástico", "Plástico que se ablanda con el calor; reciclable."],
    ["Cerámica", "Material de arcilla moldeada y cocida: ladrillos, azulejos."],
    ["Tres erres", "Reducir, reutilizar y reciclar."],
  ],
  familias: ["Recorred la cocina y anotad de qué material es cada utensilio y por qué.", "Buscad el código de reciclaje (número en un triángulo) en envases de plástico de casa.", "Revisad juntos cómo separáis la basura y en qué contenedor va cada residuo."],
  profesores: {
    saberes: "Materiales tecnológicos y su impacto ambiental: clasificación, propiedades, madera y derivados, metales, plásticos, pétreos y cerámicos; criterios de selección y reciclaje (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Muestrario de materiales con fichas de propiedades elaboradas por el alumnado.", "Pruebas sencillas de dureza, flexibilidad y conductividad en el taller.", "Auditoría de residuos del aula durante una semana y propuestas de reducción."],
  },
  fuentes: [RD, wiki("Material", "Material"), wiki("Plástico", "Plástico")],
  revisado: REV,
};
