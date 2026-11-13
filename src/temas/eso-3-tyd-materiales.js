// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Materiales: madera, metales y plásticos",
  minutos: 55,
  objetivos: ["Clasificar los materiales de uso técnico según su origen y su naturaleza", "Relacionar las propiedades de los materiales con sus aplicaciones", "Conocer la obtención, los tipos y el trabajo de la madera, los metales y los plásticos", "Valorar el impacto ambiental de los materiales y la importancia del reciclaje"],
  claves: ["materia prima", "material", "dureza", "tenacidad", "madera", "metal ferroso", "termoplástico", "reciclaje"],
  pregunta: {
    texto: "¿Por qué las sartenes son de metal pero tienen el mango de plástico o de madera?",
    respuesta: "Porque cada material tiene <mark>propiedades</mark> distintas. El metal es <b>buen conductor del calor</b> y transmite el calor del fuego a los alimentos; el plástico y la madera son <b>aislantes térmicos</b> y evitan que te quemes. Elegir el material adecuado para cada parte de un objeto es una de las decisiones más importantes del diseño tecnológico.",
  },
  bloques: [
    {
      html: `<h3>Materias primas, materiales y productos</h3><p>Todos los objetos que nos rodean están hechos de <b>materiales</b>. Conviene distinguir tres conceptos. Las <mark>materias primas</mark> son los recursos que se obtienen directamente de la naturaleza: la madera de los árboles, los minerales de las minas, el petróleo de los pozos. Los <mark>materiales</mark> son las materias primas ya transformadas y preparadas para fabricar objetos: tablones, chapas de acero, láminas de plástico. Los <mark>productos tecnológicos</mark> son los objetos terminados: una mesa, una bicicleta, una botella. Por ejemplo: <b>árbol</b> (materia prima) → <b>tablero</b> (material) → <b>estantería</b> (producto).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de transformación: materia prima (árbol), material (tablón) y producto (silla)">${BG}
        <rect x="30" y="80" width="10" height="40" fill="#8b5a2b"/><circle cx="35" cy="66" r="24" fill="var(--leaf)"/>${t(35, 146, "materia prima", { size: 10, color: "var(--leaf)" })}
        ${fl(66, 94, 94, 94, "var(--muted)", 2)}
        <rect x="102" y="84" width="56" height="10" fill="#c79a5b" stroke="#8b5a2b"/><rect x="102" y="98" width="56" height="10" fill="#c79a5b" stroke="#8b5a2b"/>${t(130, 146, "material", { size: 10, color: "#8b5a2b" })}
        ${fl(166, 94, 192, 94, "var(--muted)", 2)}
        <path d="M206 60 V 120 M206 92 H 236 V 120 M236 92 V 120" stroke="#8b5a2b" stroke-width="5" fill="none" stroke-linecap="round"/>${t(222, 146, "producto", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Clasificación de los materiales</h3><p>Según su <b>origen</b>, los materiales pueden ser <b>naturales</b>, que se encuentran en la naturaleza, como la madera, la lana o la piedra; o <b>sintéticos</b>, fabricados por el ser humano a partir de otros, como el plástico o el hormigón. Según su <b>naturaleza</b>, los materiales de uso técnico se agrupan en grandes familias:</p>${tabla(["Grupo", "Ejemplos", "Origen"], [["Maderas", "pino, roble, contrachapado", "árboles"], ["Metales", "acero, aluminio, cobre", "minerales"], ["Plásticos", "PVC, PET, metacrilato", "petróleo"], ["Pétreos", "mármol, granito, arena", "rocas"], ["Cerámicos y vidrios", "ladrillo, porcelana, vidrio", "arcilla, arena"], ["Textiles", "algodón, lana, nailon", "plantas, animales, petróleo"]])}`,
      video: { id: "DhLwvErBp9s", titulo: "Los Materiales Tecnológicos: Tipos, Clasificación y Ejemplos", canal: "Pizarra Tecnologica", vistas: 56065 },
    },
    {
      html: `<h3>Propiedades de los materiales</h3><p>Para elegir un material hay que conocer sus <mark>propiedades</mark>. Las <b>mecánicas</b> describen cómo responde a las fuerzas: la <b>dureza</b> es la resistencia a ser rayado; la <b>tenacidad</b>, la resistencia a romperse por golpes (lo contrario es la <b>fragilidad</b>, como el vidrio); la <b>elasticidad</b>, la capacidad de recuperar su forma; la <b>plasticidad</b>, la capacidad de deformarse sin romperse y quedarse deformado. Las <b>térmicas</b> indican si conduce bien el calor o es aislante, y su punto de fusión. Las <b>eléctricas</b>, si es conductor o aislante. También importan las propiedades <b>ecológicas</b> (si es reciclable, biodegradable o tóxico) y las <b>económicas</b> (precio y facilidad de obtención).</p>`,
      video: { id: "sp2KB-UMpNM", titulo: "Pantera Rosa. Propiedades de Materiales", canal: "tecnologiaoyg", vistas: 1015732 },
    },
    {
      html: `<h3>La madera: obtención y propiedades</h3><p>La <mark>madera</mark> se obtiene del tronco de los árboles. El proceso es: <b>tala</b> del árbol, <b>descortezado</b>, <b>aserrado</b> en tablones y <b>secado</b>, al aire o en hornos, para quitarle la humedad y evitar que se deforme. Es un material <b>natural, renovable, ligero, aislante</b> del calor y la electricidad, fácil de trabajar y reciclable. Sus inconvenientes son que <b>arde</b>, absorbe humedad y puede pudrirse o ser atacada por insectos, por eso se protege con barnices y pinturas. Se distinguen las <b>maderas duras</b>, de árboles de crecimiento lento como el roble, el nogal o el haya, resistentes y caras; y las <b>maderas blandas</b>, de crecimiento rápido como el pino o el abeto, baratas y fáciles de trabajar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de un tronco con corteza, albura, duramen y médula; anillos de crecimiento">${BG}
        <circle cx="100" cy="92" r="66" fill="#6b4423"/><circle cx="100" cy="92" r="60" fill="#e8c48a"/><circle cx="100" cy="92" r="42" fill="#c58b4f"/>
        <circle cx="100" cy="92" r="50" fill="none" stroke="#b07a3f" stroke-width="1"/><circle cx="100" cy="92" r="32" fill="none" stroke="#8b5a2b"/><circle cx="100" cy="92" r="22" fill="none" stroke="#8b5a2b"/><circle cx="100" cy="92" r="12" fill="none" stroke="#8b5a2b"/><circle cx="100" cy="92" r="4" fill="#5a3a1a"/>
        ${fl(196, 34, 158, 50, "var(--ink)", 1.2)}${t(200, 32, "corteza", { size: 10, anchor: "start" })}
        ${fl(196, 70, 152, 82, "var(--ink)", 1.2)}${t(200, 74, "albura", { size: 10, anchor: "start" })}
        ${fl(196, 110, 130, 104, "var(--ink)", 1.2)}${t(200, 114, "duramen", { size: 10, anchor: "start" })}
        ${fl(196, 148, 104, 94, "var(--ink)", 1.2)}${t(200, 152, "médula", { size: 10, anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>Maderas naturales y tableros artificiales</h3><p>Además de la <b>madera maciza</b>, se fabrican <mark>tableros artificiales</mark> que aprovechan mejor los árboles y los restos de serrerías. El <b>contrachapado</b> se forma pegando láminas finas de madera con las fibras cruzadas, lo que lo hace muy resistente; se usa en el taller de tecnología. El <b>aglomerado</b> se hace con virutas y serrín prensados con cola; es barato y se usa en muebles, a menudo recubierto de melamina. El <b>tablero de fibras (DM o MDF)</b> se fabrica con fibras de madera muy finas prensadas; es homogéneo y fácil de cortar. Los derivados de la madera también incluyen el <b>papel</b> y el <b>cartón</b>, fabricados a partir de la celulosa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tableros artificiales: contrachapado con capas cruzadas, aglomerado con virutas y DM homogéneo">${BG}
        <rect x="20" y="60" width="64" height="8" fill="#e8c48a" stroke="#8b5a2b"/><rect x="20" y="68" width="64" height="8" fill="#c58b4f" stroke="#8b5a2b"/><rect x="20" y="76" width="64" height="8" fill="#e8c48a" stroke="#8b5a2b"/><rect x="20" y="84" width="64" height="8" fill="#c58b4f" stroke="#8b5a2b"/><rect x="20" y="92" width="64" height="8" fill="#e8c48a" stroke="#8b5a2b"/>${t(52, 128, "contrachapado", { size: 10 })}
        <rect x="98" y="60" width="64" height="40" fill="#d9b27c" stroke="#8b5a2b"/>${[[104, 66], [118, 74], [136, 64], [150, 80], [110, 90], [128, 86], [146, 94], [140, 72], [108, 78], [124, 96]].map(([x, y]) => `<path d="M${x} ${y} l 8 3" stroke="#8b5a2b" stroke-width="2"/>`).join("")}${t(130, 128, "aglomerado", { size: 10 })}
        <rect x="176" y="60" width="64" height="40" fill="#b68a5e" stroke="#6b4423"/>${t(208, 128, "DM (MDF)", { size: 10 })}
        ${t(130, 156, "láminas · virutas · fibras", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los metales</h3><p>Los <mark>metales</mark> se obtienen de <b>minerales</b> extraídos de minas, que se tratan en procesos como la fundición en altos hornos. Son <b>buenos conductores</b> del calor y la electricidad, tienen brillo metálico, son resistentes, <b>tenaces</b> y muchos son <b>dúctiles</b> (se estiran en hilos) y <b>maleables</b> (se extienden en láminas). Se pueden fundir y reciclar indefinidamente. Su principal problema es la <b>oxidación</b> y la corrosión. Se clasifican en <b>metales ferrosos</b>, que contienen hierro: el hierro puro, el <b>acero</b> (hierro con menos del 2 % de carbono, el metal más usado) y la <b>fundición</b> (con más carbono, dura pero frágil); y <b>no ferrosos</b>: aluminio, cobre, zinc, estaño, plomo, oro, titanio.</p>`,
    },
    {
      html: `<h3>Metales no ferrosos y aleaciones</h3><p>Cada metal no ferroso tiene aplicaciones típicas. El <b>aluminio</b> es ligero y no se oxida en profundidad: latas, ventanas, aviones. El <b>cobre</b> es el mejor conductor barato: cables eléctricos y tuberías. El <b>zinc</b> protege al acero del óxido (galvanizado). El <b>estaño</b> se usa para soldar componentes electrónicos. El <b>titanio</b> es ligero y muy resistente: prótesis y aviones. Las <mark>aleaciones</mark> son mezclas de un metal con otros elementos para mejorar sus propiedades: el <b>bronce</b> (cobre y estaño), el <b>latón</b> (cobre y zinc), el <b>acero inoxidable</b> (acero con cromo y níquel).</p>${tabla(["Metal", "Propiedad destacada", "Uso típico"], [["Acero", "resistente y barato", "estructuras, herramientas"], ["Aluminio", "ligero", "latas, ventanas"], ["Cobre", "muy conductor", "cables"], ["Estaño", "funde a baja temperatura", "soldadura"], ["Titanio", "ligero y resistente", "prótesis"]])}`,
    },
    {
      html: `<h3>Los plásticos</h3><p>Los <mark>plásticos</mark> son materiales <b>sintéticos</b> fabricados sobre todo a partir del <b>petróleo</b>. Están formados por moléculas muy largas, los <b>polímeros</b>. Son ligeros, baratos, aislantes, impermeables y fáciles de moldear en cualquier forma y color. Pero tardan cientos de años en degradarse y contaminan mares y suelos. Se clasifican en tres grupos. Los <b>termoplásticos</b> se ablandan con el calor y se pueden moldear y <b>reciclar</b> muchas veces: PET, PVC, polietileno, poliestireno, metacrilato. Los <b>termoestables</b>, una vez moldeados, no se ablandan con el calor: baquelita, melamina, resinas. Los <b>elastómeros</b> son muy elásticos: caucho, neopreno, silicona.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de plásticos: termoplásticos con cadenas sueltas, termoestables con cadenas unidas en red y elastómeros con cadenas enrolladas">${BG}
        ${caja(14, 30, 72, 24, "termoplásticos", "var(--pen)", { size: 9 })}${caja(94, 30, 72, 24, "termoestables", "var(--red)", { size: 9 })}${caja(174, 30, 72, 24, "elastómeros", "var(--leaf)", { size: 9 })}
        <path d="M20 76 q 10 -8 20 0 t 20 0 t 20 0 M20 96 q 10 8 20 0 t 20 0 t 20 0 M20 116 q 10 -8 20 0 t 20 0 t 20 0" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
        <path d="M100 76 H 160 M100 96 H 160 M100 116 H 160 M110 76 V 116 M130 76 V 116 M150 76 V 116" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        <path d="M180 80 c 10 -16 20 16 30 0 s 20 16 30 0 M180 104 c 10 -16 20 16 30 0 s 20 16 30 0 M196 80 V 104 M226 80 V 104" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>
        ${t(50, 146, "se funden", { size: 10 })}${t(50, 160, "y se reciclan", { size: 10 })}${t(130, 146, "no se", { size: 10 })}${t(130, 160, "ablandan", { size: 10 })}${t(210, 146, "muy", { size: 10 })}${t(210, 160, "elásticos", { size: 10 })}</svg>`,
      video: { id: "jgfPQQcQInc", titulo: "CLASIFICACIÓN de los MATERIALES", canal: "Conocimiento en un click", vistas: 43919 },
    },
    {
      html: `<h3>Trabajar los materiales en el taller</h3><p>En el taller se realizan operaciones básicas con cada material, siempre con las <b>normas de seguridad</b>: gafas, ropa ajustada, pelo recogido y herramientas en buen estado. Las operaciones son: <b>medir y marcar</b> (regla, escuadra, lápiz o punta de trazar); <b>sujetar</b> (tornillo de banco, sargentos); <b>cortar</b> (serrucho o segueta para madera, sierra de arco para metal, cúter o sierra para plástico); <b>perforar</b> (taladro con la broca adecuada a cada material); <b>rebajar y afinar</b> (lima, escofina y papel de lija); <b>unir</b> (clavos, tornillos, cola blanca para madera, remaches o soldadura para metal, pegamentos específicos para plástico); y <b>acabar</b> (barnizar o pintar). Los plásticos termoplásticos también se pueden <b>doblar con calor</b>.</p>`,
    },
    {
      html: `<h3>Impacto ambiental y las tres erres</h3><p>Obtener y fabricar materiales tiene <b>consecuencias ambientales</b>: la tala excesiva provoca <b>deforestación</b>; la minería destruye paisajes y contamina aguas; la fabricación de metales consume mucha energía; y los plásticos generan residuos que llegan a los océanos como <b>microplásticos</b>. Para reducir este impacto se aplica la regla de las <mark>tres erres</mark>: <b>reducir</b> el consumo de materiales y envases, <b>reutilizar</b> los objetos dándoles otro uso, y <b>reciclar</b> los materiales para fabricar productos nuevos. Reciclar aluminio ahorra hasta el 95 % de la energía. Es importante separar los residuos: amarillo (envases de plástico y metal), azul (papel y cartón) y verde (vidrio). La madera de bosques gestionados de forma sostenible lleva el sello <b>FSC</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres contenedores de reciclaje: amarillo para envases, azul para papel y cartón, verde para vidrio">${BG}
        <rect x="24" y="60" width="60" height="80" rx="6" fill="#f2c94c" stroke="var(--ink)" stroke-width="2"/><rect x="20" y="52" width="68" height="12" rx="4" fill="#d4a92a" stroke="var(--ink)" stroke-width="2"/>${t(54, 104, "envases", { size: 10 })}
        <rect x="100" y="60" width="60" height="80" rx="6" fill="#4a7bd6" stroke="var(--ink)" stroke-width="2"/><rect x="96" y="52" width="68" height="12" rx="4" fill="#2f5db5" stroke="var(--ink)" stroke-width="2"/>${t(130, 104, "papel", { size: 10, color: "#fff" })}
        <rect x="176" y="60" width="60" height="80" rx="6" fill="#3aa35a" stroke="var(--ink)" stroke-width="2"/><rect x="172" y="52" width="68" height="12" rx="4" fill="#2a7d43" stroke="var(--ink)" stroke-width="2"/>${t(206, 104, "vidrio", { size: 10, color: "#fff" })}
        ${t(130, 164, "reducir · reutilizar · reciclar", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Las grandes familias de materiales y sus propiedades",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Comparación de madera, metales y plásticos: origen, propiedades destacadas y un inconveniente de cada uno">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${caja(30, 24, 180, 40, "MADERA", "#8b5a2b", { size: 15 })}${caja(230, 24, 180, 40, "METALES", "var(--pen)", { size: 15 })}${caja(430, 24, 180, 40, "PLÁSTICOS", "var(--red)", { size: 15 })}
      ${t(120, 96, "origen: árboles", { size: 13 })}${t(320, 96, "origen: minerales", { size: 13 })}${t(520, 96, "origen: petróleo", { size: 13 })}
      ${t(120, 132, "renovable, ligera", { size: 13, color: "var(--leaf)" })}${t(320, 132, "conductores, tenaces", { size: 13, color: "var(--leaf)" })}${t(520, 132, "ligeros, baratos", { size: 13, color: "var(--leaf)" })}
      ${t(120, 156, "aislante", { size: 13, color: "var(--leaf)" })}${t(320, 156, "reciclables siempre", { size: 13, color: "var(--leaf)" })}${t(520, 156, "aislantes, moldeables", { size: 13, color: "var(--leaf)" })}
      ${t(120, 196, "✗ arde y se pudre", { size: 13, color: "var(--red)" })}${t(320, 196, "✗ se oxidan", { size: 13, color: "var(--red)" })}${t(520, 196, "✗ contaminan", { size: 13, color: "var(--red)" })}
      ${t(320, 238, "elegir el material = equilibrar propiedades, precio e impacto ambiental", { size: 13, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "Tx2y3BPiV6g", titulo: "¿Cuáles son las propiedades de los materiales?", canal: "FlexFlix Kids en Español", vistas: 1540709, megusta: 0, busqueda: "materiales tecnológicos madera metales plásticos" },
  ejemplos: [
    { enunciado: "Elige el material para el cable de un cargador de móvil: el hilo interior y la funda.",
      pasos: ["El hilo debe conducir la electricidad: un metal buen conductor y dúctil, el cobre.", "La funda debe aislar y ser flexible: un plástico, como el PVC.", "Cada parte se elige por sus propiedades."],
      resultado: "Hilo de cobre y funda de PVC." },
    { enunciado: "Una botella de agua es de PET. ¿Qué tipo de plástico es y qué se puede hacer al tirarla?",
      pasos: ["El PET se ablanda con el calor y se puede volver a moldear.", "Es un termoplástico.", "Se deposita en el contenedor amarillo para reciclarlo."],
      resultado: "Termoplástico; al contenedor amarillo." },
    { enunciado: "¿Por qué la estructura de una bicicleta de carretera cara es de aluminio o titanio y no de acero?",
      pasos: ["El acero es resistente pero pesado.", "El aluminio y el titanio son mucho más ligeros y resistentes.", "Además, no se oxidan como el acero sin proteger."],
      resultado: "Por su ligereza, resistencia y resistencia a la corrosión." },
  ],
  errores: [
    "Confundir materia prima con material: el petróleo es materia prima; el plástico, material.",
    "Pensar que «duro» significa «que no se rompe»: el vidrio es duro pero frágil.",
    "Creer que todos los plásticos se pueden reciclar fundiéndolos: los termoestables no.",
    "Decir que el acero es un metal puro: es una aleación de hierro y carbono.",
    "Pensar que la madera es siempre sostenible: depende de que el bosque se gestione bien.",
  ],
  ejercicios: [
    { q: "Indica la materia prima, el material y un producto para: algodón, mineral de hierro y petróleo.", sol: "Algodón → tela → camiseta; mineral de hierro → acero → clavo; petróleo → PET → botella." },
    { q: "Define dureza, tenacidad y elasticidad.", sol: "Dureza: resistencia a ser rayado. Tenacidad: resistencia a romperse por golpes. Elasticidad: recuperar la forma al cesar la fuerza." },
    { q: "Ordena las fases de obtención de la madera.", sol: "Tala, descortezado, aserrado y secado." },
    { q: "Diferencia entre maderas duras y blandas, con dos ejemplos de cada.", sol: "Duras: crecimiento lento, resistentes y caras (roble, nogal). Blandas: crecimiento rápido, baratas (pino, abeto)." },
    { q: "¿Cómo se fabrica el contrachapado y por qué es resistente?", sol: "Pegando láminas finas con las fibras cruzadas; así resiste en todas las direcciones." },
    { q: "¿Qué diferencia hay entre metales ferrosos y no ferrosos? Pon ejemplos.", sol: "Los ferrosos contienen hierro (acero, fundición); los no ferrosos no (aluminio, cobre)." },
    { q: "¿Qué es una aleación? Di la composición del bronce y del latón.", sol: "Mezcla de un metal con otros elementos. Bronce: cobre y estaño. Latón: cobre y zinc." },
    { q: "Clasifica: PVC, baquelita, caucho, PET, silicona, melamina.", sol: "Termoplásticos: PVC, PET. Termoestables: baquelita, melamina. Elastómeros: caucho, silicona." },
    { q: "Nombra la herramienta para cortar madera, metal y para perforar.", sol: "Serrucho o segueta; sierra de arco; taladro." },
    { q: "Explica la regla de las tres erres con un ejemplo de cada una.", sol: "Reducir (usar una botella reutilizable), reutilizar (tarros como botes), reciclar (latas al contenedor amarillo)." },
  ],
  quiz: [
    { q: "El petróleo es…", o: ["un material", "una materia prima", "un producto"], a: 1, e: "Materia prima." },
    { q: "La resistencia a ser rayado es la…", o: ["tenacidad", "dureza", "elasticidad"], a: 1, e: "Dureza." },
    { q: "Un material que se rompe con facilidad al golpearlo es…", o: ["frágil", "tenaz", "dúctil"], a: 0, e: "Frágil." },
    { q: "El pino es una madera…", o: ["dura", "blanda", "artificial"], a: 1, e: "Blanda." },
    { q: "El tablero de láminas cruzadas es el…", o: ["aglomerado", "contrachapado", "DM"], a: 1, e: "Contrachapado." },
    { q: "El acero es hierro con…", o: ["carbono", "cobre", "aluminio"], a: 0, e: "Carbono (menos del 2 %)." },
    { q: "El metal típico de los cables eléctricos es el…", o: ["cobre", "estaño", "plomo"], a: 0, e: "Cobre." },
    { q: "Los plásticos que se reciclan fundiéndolos son los…", o: ["termoestables", "termoplásticos", "elastómeros"], a: 1, e: "Termoplásticos." },
    { q: "El caucho es un…", o: ["termoplástico", "elastómero", "metal"], a: 1, e: "Elastómero." },
    { q: "El vidrio va al contenedor…", o: ["amarillo", "azul", "verde"], a: 2, e: "Verde." },
  ],
  examen: [
    { q: "El latón es una aleación de…", o: ["cobre y zinc", "cobre y estaño", "hierro y carbono"], a: 0, e: "Cobre y zinc." },
    { q: "Capacidad de estirarse en hilos:", o: ["ductilidad", "maleabilidad", "dureza"], a: 0, e: "Ductilidad." },
    { q: "La melamina es un plástico…", o: ["termoestable", "termoplástico", "elastómero"], a: 0, e: "Termoestable." },
  ],
  feynman: ["La diferencia entre materia prima, material y producto", "Por qué cada parte de un objeto lleva un material distinto", "Los tres tipos de plásticos y cuáles se reciclan"],
  mapa: mapa("MATERIALES", "var(--eso)", [
    ["Clasificación", "naturales · sintéticos", "var(--pen)"],
    ["Propiedades", "mecánicas · térmicas · eléctricas", "var(--red)"],
    ["Familias", "madera · metales · plásticos", "var(--leaf)"],
    ["Impacto", "reducir · reutilizar · reciclar", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Materia prima", "Recurso natural sin transformar."],
    ["Dureza", "Resistencia a ser rayado."],
    ["Tenacidad", "Resistencia a romperse por golpes."],
    ["Contrachapado", "Láminas de madera pegadas con fibras cruzadas."],
    ["Acero", "Hierro con menos del 2 % de carbono."],
    ["Aleación", "Mezcla de un metal con otros elementos."],
    ["Termoplástico", "Se ablanda con calor; reciclable."],
    ["Tres erres", "Reducir, reutilizar, reciclar."],
  ],
  familias: ["Buscad en casa un objeto de madera, uno de metal y uno de plástico, y explicad por qué se eligió cada material.", "Separad juntos los residuos de un día y comprobad a qué contenedor va cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Materiales tecnológicos: clasificación, propiedades, madera, metales y plásticos, técnicas de fabricación, seguridad e impacto ambiental (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Caja de muestras: probar dureza, flexibilidad y conductividad de varios materiales.", "Analizar un objeto desmontado e identificar los materiales de cada pieza.", "Debate sobre los plásticos de un solo uso con datos de residuos."],
  },
  fuentes: [RD, wiki("Material", "Material"), wiki("Plástico", "Pl%C3%A1stico")],
  revisado: "2026-11-12",
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["¿De qué está hecha una zapatilla?", `<p>Lucía se ha comprado unas zapatillas para correr y, por curiosidad, busca en internet cómo se fabrican. Descubre que en un par puede haber más de diez materiales distintos: una suela de caucho que se agarra al asfalto, una entresuela de espuma de plástico que amortigua cada pisada, un tejido de poliéster transpirable para la parte de arriba, ojales metálicos, cordones de algodón, una pieza rígida de plástico en el talón y pegamentos que lo unen todo.</p><p>Cada material está elegido por sus <b>propiedades</b>: el caucho, por su elasticidad y su agarre; la espuma, por ser ligera y absorber los golpes; el tejido, por dejar pasar el aire. Pero esa mezcla tiene un problema: al final de su vida, separar tantos materiales pegados es casi imposible, y la mayoría de las zapatillas acaban en un vertedero. Por eso algunas marcas ya diseñan zapatillas de un solo material, fáciles de reciclar.</p><p>En este tema conocerás de dónde salen los materiales, sus propiedades y cómo se eligen; estudiarás la madera, los metales, los plásticos y otros materiales de uso técnico; aprenderás a trabajarlos con seguridad en el taller y a reducir su impacto ambiental.</p>`],
  mas: [
    ["<h3>Propiedades de los materiales</h3>", `<p>Otras propiedades importantes son las <b>térmicas</b> (conductividad térmica: los metales conducen el calor y el corcho lo aísla; dilatación: los materiales aumentan de tamaño al calentarse), las <b>eléctricas</b> (conductores como el cobre y aislantes como el plástico o la cerámica), las <b>ópticas</b> (transparentes como el vidrio, translúcidos como el papel vegetal y opacos como la madera) y las <b>ecológicas</b>: si el material es reciclable, biodegradable o tóxico.</p>`],
    ["<h3>Trabajar los materiales en el taller</h3>", `<p>Cada material exige su herramienta: la madera se corta con serrucho o segueta y se lija a favor de la veta; el metal se marca con punta de trazar y granete (un pequeño hundimiento para que la broca no resbale) y se corta con sierra de arco; el plástico se corta con cúter o sierra de dientes finos y se dobla calentándolo con una pistola de aire caliente. Las herramientas se guardan limpias en su sitio y se avisa al profesorado de cualquier herida, por pequeña que sea.</p>`],
  ],
  svgs: [
    ["<h3>Clasificación de los materiales</h3>", "Clasificación por origen", [["Naturales", "madera, lana, piedra"], ["Artificiales", "vidrio, acero, papel"], ["Sintéticos", "plásticos, fibras sintéticas"]], "Según su origen"],
    ["<h3>Propiedades de los materiales</h3>", "Propiedades de los materiales", [["Mecánicas", "dureza, tenacidad, elasticidad"], ["Térmicas", "conducir o aislar el calor"], ["Eléctricas", "conductor o aislante"], ["Ecológicas", "reciclable, biodegradable"]], "Tipos de propiedades"],
    ["<h3>Los metales</h3>", "Los metales", [["Ferrosos", "hierro, acero, fundición"], ["No ferrosos", "cobre, aluminio, zinc"], ["Ventaja", "se reciclan sin fin"]], "Ferrosos y no ferrosos"],
    ["<h3>Metales no ferrosos y aleaciones</h3>", "Aleaciones", [["Bronce", "cobre y estaño"], ["Latón", "cobre y zinc"], ["Acero inoxidable", "acero, cromo y níquel"]], "Mezclas que mejoran"],
    ["<h3>Trabajar los materiales en el taller</h3>", "Operaciones del taller", [["Medir y marcar", "regla, escuadra, granete"], ["Cortar", "serrucho, sierra de arco"], ["Perforar", "taladro y broca adecuada"], ["Unir", "cola, tornillos, remaches"]], "Trabajar con seguridad"],
  ],
  bloques: [
    { tras: "<h3>Propiedades de los materiales</h3>", html: `<h3>Cómo elegir un material</h3><p>Elegir el material adecuado es una de las decisiones más importantes de un proyecto. Se tienen en cuenta varios <b>criterios</b>: la <b>función</b> del objeto (qué esfuerzos soporta, si debe conducir o aislar, si estará al aire libre o en contacto con agua o alimentos); las <b>propiedades</b> del material; su <b>precio</b> y disponibilidad; la <b>facilidad para trabajarlo</b> con las herramientas que tenemos; el <b>aspecto</b> (color, textura, peso); y su <b>impacto ambiental</b>, incluido qué pasará con él al final de su vida útil.</p><p>Por ejemplo, para la carcasa de un altavoz portátil interesa un material ligero, resistente a los golpes, aislante y fácil de moldear: un termoplástico como el ABS. Para una tabla de cortar se busca un material duro, que no suelte sustancias y que se pueda lavar: madera dura o polietileno de alta densidad. Una forma práctica de decidir es hacer una <b>tabla de valoración</b>: se puntúa cada material candidato del 1 al 5 en cada criterio y se elige el de mayor puntuación total.</p>`, svg: ["Criterios para elegir un material", [["Función", "esfuerzos, ambiente, uso"], ["Propiedades", "mecánicas, térmicas…"], ["Coste y trabajo", "precio, herramientas"], ["Ambiente", "reciclable, origen"]], "Elegir bien"] },
    { tras: "<h3>Los plásticos</h3>", html: `<h3>Cómo se fabrican los objetos de plástico y metal</h3><p>Los plásticos llegan a las fábricas en forma de granza (pequeñas bolitas) y se transforman por calor. En el <b>moldeo por inyección</b> el plástico fundido se inyecta a presión en un molde cerrado: así se hacen tapones, cubos o piezas de juguetes. En la <b>extrusión</b> el plástico pasa por una boquilla con forma, como la pasta de dientes del tubo, y sale un perfil continuo: tubos, cables, marcos de ventanas. En el <b>soplado</b> se infla un tubo de plástico caliente dentro de un molde: botellas. En el <b>termoconformado</b> una lámina caliente se adapta a un molde por vacío: bandejas y envases de yogur.</p><p>Los metales se trabajan por <b>fundición y moldeo</b> (se vierte el metal líquido en un molde), <b>laminación</b> (se pasa entre rodillos hasta convertirlo en chapa), <b>forja</b> (se golpea en caliente), <b>estampación</b> (una prensa corta y da forma a la chapa, como en las carrocerías) y <b>trefilado</b> (se estira para hacer alambres y cables).</p>`, svg: ["Procesos de fabricación", [["Inyección", "tapones, piezas de juguete"], ["Extrusión", "tubos, perfiles, cables"], ["Soplado", "botellas"], ["Laminación", "chapa metálica"]], "Dar forma a los materiales"] },
    { tras: "<h3>Cómo se fabrican los objetos de plástico y metal</h3>", html: `<h3>Pétreos, cerámicos, vidrio y textiles</h3><p>Los <b>materiales pétreos</b> se obtienen de las rocas: el mármol y el granito para suelos y encimeras; la pizarra para tejados; y la arena y la grava, que mezcladas con cemento y agua forman el <b>hormigón</b>, el material de construcción más usado del mundo. Si se le añaden barras de acero se obtiene el <b>hormigón armado</b>, que resiste también la tracción.</p><p>Los <b>cerámicos</b> se fabrican con arcilla moldeada y cocida en hornos: ladrillos y tejas (cerámica porosa), azulejos (con un esmalte impermeable) y loza y porcelana para vajillas y sanitarios. Son duros, aislantes y resistentes al calor, pero frágiles. El <b>vidrio</b> se obtiene fundiendo arena de sílice con otros minerales a unos 1.500 °C; es transparente, duro y frágil, y se recicla al 100 % sin perder calidad. Los <b>textiles</b> pueden ser naturales (algodón, lino, lana, seda) o sintéticos (poliéster, nailon, elastano), y se usan también en la técnica: geotextiles en carreteras, fibras en cuerdas de escalada o tejidos ignífugos para bomberos.</p>`, svg: ["Otros materiales de uso técnico", [["Pétreos", "granito, pizarra, hormigón"], ["Cerámicos", "ladrillo, azulejo, porcelana"], ["Vidrio", "transparente y reciclable"], ["Textiles", "algodón, lana, poliéster"]], "Más allá de madera, metal y plástico"] },
    { tras: "<h3>Pétreos, cerámicos, vidrio y textiles</h3>", html: `<h3>Materiales compuestos y nuevos materiales</h3><p>Un <b>material compuesto</b> une dos o más materiales para sumar sus ventajas. La <b>fibra de vidrio</b> y la <b>fibra de carbono</b> se forman con hilos muy resistentes embebidos en una resina plástica: son ligeras y muy resistentes, y se usan en cascos, raquetas, palas de aerogeneradores, bicicletas de competición y aviones. El hormigón armado y el contrachapado también son materiales compuestos.</p><p>La investigación crea <b>nuevos materiales</b> con propiedades sorprendentes. Los <b>bioplásticos</b> se fabrican a partir de almidón de maíz o caña de azúcar y algunos son compostables. Los materiales con <b>memoria de forma</b> recuperan su forma original al calentarse (se usan en ortodoncia y en medicina). El <b>grafeno</b>, una lámina de carbono de un átomo de grosor, es muy resistente, flexible y buen conductor. Y los materiales <b>inteligentes</b> cambian una propiedad según el entorno, como las gafas que se oscurecen con el sol.</p>`, svg: ["Compuestos y nuevos materiales", [["Fibra de carbono", "ligera y muy resistente"], ["Bioplásticos", "de maíz o caña de azúcar"], ["Memoria de forma", "recupera su forma"], ["Grafeno", "carbono de un átomo"]], "Materiales del futuro"] },
  ],
  grupos: [4, 2, 2, 4, 2],
  ejemplos: [
    ["Haz una tabla de valoración (1-5) para elegir el material de una caja de herramientas: madera, acero y polipropileno. Criterios: resistencia, peso, precio y facilidad de trabajo.", ["Madera: 3 + 3 + 4 + 5 = 15.", "Acero: 5 + 1 + 3 + 2 = 11.", "Polipropileno: 4 + 5 + 4 + 2 = 15 (en el taller escolar es difícil de moldear).", "Desempate: en el taller, la madera es más fácil de trabajar."], "Para fabricarla en el aula, la madera; en una fábrica, el polipropileno inyectado."],
    ["¿Qué proceso de fabricación se usa para: botella de agua, tubo de PVC, tapón de rosca y chapa de un coche?", ["Botella: soplado.", "Tubo: extrusión.", "Tapón: inyección.", "Chapa: laminación y estampación."], "Soplado, extrusión, inyección y laminación + estampación."],
    ["¿Por qué las palas de un aerogenerador son de fibra de vidrio o de carbono y no de acero?", ["Las palas miden más de 50 m y deben girar con poco viento.", "El acero es resistente pero muy pesado.", "Los compuestos tienen gran resistencia con poco peso y no se oxidan."], "Por su relación resistencia/peso y su resistencia a la corrosión."],
  ],
  errores: ["Elegir un material solo por su precio sin comprobar si sus propiedades cumplen la función."],
  niveles: "bbbbmbmbbm",
  ejercicios: [
    ["b", "Clasifica por sus propiedades ópticas: vidrio de ventana, papel vegetal, tabla de madera, metacrilato.", "Transparentes: vidrio y metacrilato. Translúcido: papel vegetal. Opaco: madera."],
    ["b", "Nombra cuatro criterios para elegir un material.", "Función y propiedades necesarias, precio y disponibilidad, facilidad para trabajarlo e impacto ambiental (también el aspecto)."],
    ["b", "¿Qué es el hormigón armado y por qué se usa?", "Hormigón con barras de acero en su interior. El hormigón resiste bien la compresión y el acero la tracción, así que juntos soportan también la flexión."],
    ["b", "Nombra tres materiales cerámicos y una aplicación de cada uno.", "Ladrillo (muros), azulejo (paredes de baños y cocinas) y porcelana (vajillas y lavabos)."],
    ["b", "¿Qué es un material compuesto? Pon dos ejemplos.", "La unión de dos o más materiales para sumar sus ventajas: fibra de carbono (fibras + resina) y contrachapado (láminas de madera + cola)."],
    ["b", "¿Para qué sirve el granete?", "Para marcar un pequeño hundimiento en el metal antes de taladrar, de modo que la broca no resbale."],
    ["m", "Explica la diferencia entre inyección y extrusión con un ejemplo de cada una.", "Inyección: el plástico fundido entra a presión en un molde cerrado y sale una pieza (un tapón). Extrusión: el plástico pasa por una boquilla y sale un perfil continuo (un tubo)."],
    ["m", "¿Qué propiedades hacen que el cobre se use en cables y el plástico en su funda?", "El cobre es muy buen conductor eléctrico y dúctil (se estira en hilos). El plástico es aislante, flexible e impermeable, y protege del contacto."],
    ["m", "¿Por qué el vidrio es un material muy sostenible si se recicla?", "Porque se recicla al 100 % infinitas veces sin perder calidad, y fundir vidrio reciclado consume menos energía que fabricarlo desde arena."],
    ["m", "Elige el material para: la suela de una bota, una sartén y su mango, y una ventana. Justifica.", "Suela: caucho (elastómero, elástico y antideslizante). Sartén: aluminio o acero (conduce el calor). Mango: plástico termoestable o madera (aislante térmico). Ventana: vidrio (transparente) con marco de aluminio o PVC."],
    ["m", "Explica qué es un bioplástico y si siempre es biodegradable.", "Un plástico fabricado a partir de materias vegetales (almidón de maíz, caña de azúcar). No siempre es biodegradable: algunos tienen la misma estructura que los plásticos del petróleo; solo algunos son compostables."],
    ["m", "¿Cómo se fabrica un alambre de cobre y una chapa de acero?", "Alambre: trefilado, estirando el metal a través de agujeros cada vez más pequeños. Chapa: laminación, pasando el metal entre rodillos."],
    ["m", "¿Qué diferencia hay entre conductividad térmica y dilatación? Pon un ejemplo de cada una.", "Conductividad: facilidad para transmitir el calor (una cuchara de metal se calienta en la sopa). Dilatación: aumento de tamaño con el calor (las vías del tren tienen juntas para dilatarse)."],
    ["m", "Describe cómo cortar y doblar una lámina de metacrilato en el taller.", "Se marca la línea, se corta con sierra de dientes finos o se raya varias veces con cúter y se parte por la marca. Para doblar se calienta la línea con una pistola de aire caliente o una resistencia y se dobla sobre un canto."],
    ["m", "¿Qué ventajas tiene la fibra de carbono? ¿Y qué inconvenientes?", "Ventajas: muy ligera, muy resistente y rígida, no se oxida. Inconvenientes: es cara, frágil ante golpes puntuales y muy difícil de reciclar."],
    ["a", "Diseña una tabla de valoración para el material de una estantería exterior de jardín con tres candidatos y cinco criterios. Elige y justifica.", "Candidatos: pino tratado, aluminio, polietileno reciclado. Criterios: resistencia a la intemperie, resistencia mecánica, precio, facilidad de trabajo, sostenibilidad. Por ejemplo: pino 3+4+4+5+4 = 20; aluminio 5+4+2+2+4 = 17; polietileno 5+3+3+2+5 = 18. Se elige el pino tratado para fabricarla en el aula."],
    ["a", "Analiza el ciclo de vida de una lata de aluminio y explica por qué reciclarla ahorra tanta energía.", "Bauxita → alúmina → aluminio por electrólisis (muchísima electricidad) → laminación → lata → uso → contenedor amarillo → fundición. Reciclar evita la electrólisis y ahorra hasta un 95 % de la energía."],
    ["a", "Las zapatillas de la lectura tienen diez materiales pegados. Propón un rediseño más sostenible y explica sus ventajas e inconvenientes.", "Usar un solo tipo de plástico (por ejemplo, poliéster para tejido, suela y espuma) y uniones cosidas o encajadas en lugar de pegamento. Ventajas: se puede reciclar entera. Inconvenientes: puede perder algo de agarre o amortiguación y el diseño es más caro de desarrollar."],
    ["a", "Compara hormigón, madera y acero como materiales de estructura de un edificio: resistencia, peso, fuego, coste y huella de carbono.", "Hormigón: resiste compresión, pesado, buen comportamiento al fuego, barato, alta huella de CO₂ por el cemento. Madera: ligera, renovable, almacena CO₂, se protege del fuego con tratamientos. Acero: muy resistente, recicla bien, pierde resistencia con el fuego, gran consumo energético al fabricarlo."],
    ["a", "Explica qué es un material con memoria de forma y propón un objeto cotidiano que se beneficiaría de él.", "Un material (como el nitinol, aleación de níquel y titanio) que, deformado, recupera su forma original al calentarse. Ejemplo: montura de gafas que vuelve a su forma si se doblan, o un tendedero que se despliega solo al sol."],
  ],
  cuartas: ["un residuo", "ductilidad", "plástico", "sintética", "tablero de virutas", "plomo", "plata", "metales", "cerámico", "marrón", "estaño y plomo", "tenacidad", "metal"],
  quiz: [
    ["El granito y la pizarra son materiales…", ["cerámicos", "pétreos", "textiles", "plásticos"], 1, "Se obtienen de las rocas."],
    ["Los ladrillos y azulejos son materiales…", ["pétreos", "cerámicos", "metálicos", "compuestos"], 1, "Arcilla cocida."],
    ["Las botellas de plástico se fabrican por…", ["extrusión", "soplado", "forja", "laminación"], 1, "Se infla el plástico en un molde."],
    ["Los tubos de plástico se fabrican por…", ["extrusión", "inyección", "soplado", "estampación"], 0, "Salen por una boquilla."],
    ["La chapa metálica se obtiene por…", ["trefilado", "laminación", "soplado", "inyección"], 1, "Entre rodillos."],
    ["La fibra de carbono es un material…", ["natural", "compuesto", "pétreo", "cerámico"], 1, "Fibras + resina."],
    ["Un material translúcido…", ["deja pasar la luz y se ve a través", "deja pasar algo de luz pero no se ve con claridad", "no deja pasar la luz", "emite luz"], 1, "Como el papel vegetal."],
    ["El vidrio se recicla…", ["una vez", "infinitas veces sin perder calidad", "nunca", "solo si es blanco"], 1, "Al 100 %."],
    ["El grafeno está formado por…", ["silicio", "carbono", "hierro", "plástico"], 1, "Una lámina de carbono de un átomo."],
    ["El hormigón armado lleva en su interior…", ["madera", "barras de acero", "plástico", "vidrio"], 1, "Para resistir la tracción."],
  ],
  examen: [
    ["Un tapón de rosca se fabrica por…", ["inyección", "soplado", "forja", "laminación"], 0, "Molde cerrado."],
    ["Para un mango de sartén conviene un material…", ["conductor térmico", "aislante térmico", "transparente", "magnético"], 1, "Para no quemarse."],
    ["Un bioplástico se fabrica a partir de…", ["petróleo", "vegetales como el maíz", "arena", "metal"], 1, "Almidón o caña de azúcar."],
    ["El primer criterio para elegir un material es…", ["el color", "la función", "la marca", "la moda"], 1, "Qué debe hacer el objeto."],
    ["Los alambres se fabrican por…", ["trefilado", "soplado", "inyección", "termoconformado"], 0, "Estirando el metal."],
  ],
  tarjetas: [["Material compuesto", "Une dos o más materiales para sumar ventajas."], ["Inyección", "Plástico fundido a presión en un molde cerrado."], ["Hormigón armado", "Hormigón con acero: resiste compresión y tracción."], ["Tabla de valoración", "Puntuar materiales por criterios para elegir."]],
  glosario: [
    ["Materia prima", "Recurso natural del que se obtienen materiales."],
    ["Material", "Sustancia preparada para fabricar productos."],
    ["Dureza", "Resistencia a ser rayado."],
    ["Tenacidad", "Resistencia a romperse por golpes."],
    ["Elasticidad", "Capacidad de recuperar la forma."],
    ["Ductilidad", "Capacidad de estirarse en hilos."],
    ["Maleabilidad", "Capacidad de extenderse en láminas."],
    ["Aleación", "Mezcla de un metal con otros elementos."],
    ["Termoplástico", "Plástico que se ablanda con el calor y se recicla."],
    ["Termoestable", "Plástico que no se ablanda con el calor."],
    ["Elastómero", "Plástico muy elástico, como el caucho."],
    ["Extrusión", "Proceso que hace perfiles continuos pasando el material por una boquilla."],
    ["Laminación", "Proceso que convierte el metal en chapa entre rodillos."],
    ["Cerámico", "Material de arcilla moldeada y cocida."],
    ["Material compuesto", "Unión de materiales para sumar ventajas."],
    ["Bioplástico", "Plástico de origen vegetal."],
  ],
  situacion: { titulo: "Un objeto de un solo material", reto: "Diseñar un objeto útil para el aula (portalápices, organizador de cables, soporte de móvil) eligiendo el material con una tabla de valoración y pensando en su reciclaje al final de su vida.", pasos: ["Definir la función y los requisitos del objeto.", "Elegir tres materiales candidatos y valorarlos con al menos cinco criterios.", "Diseñar el objeto con el material elegido, evitando mezclar materiales o pegarlos.", "Construirlo en el taller con las herramientas y normas de seguridad adecuadas.", "Explicar su ciclo de vida y cómo se reciclará."], producto: "Objeto construido, tabla de valoración y ficha del ciclo de vida.", evaluacion: ["La elección del material está justificada con criterios.", "El objeto cumple su función.", "Se trabaja con las herramientas adecuadas y con seguridad.", "El diseño facilita la reutilización o el reciclaje."] },
  saberes: "materiales de uso técnico: clasificación, propiedades, criterios de elección, procesos de fabricación y técnicas de trabajo en el taller; impacto ambiental, economía circular y nuevos materiales.",
  familias: ["Elegid un objeto de casa e intentad averiguar de qué materiales está hecho y por qué."],
  minutos: 110,
});
