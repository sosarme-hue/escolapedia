// Tecnología y Digitalización 1º ESO: los materiales, la madera. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Los materiales: la madera",
  minutos: 55,
  objetivos: ["Distinguir materias primas, materiales y productos, y clasificar los materiales por su origen", "Reconocer las principales propiedades de los materiales", "Describir la obtención, la estructura, las propiedades y los tipos de madera", "Conocer los derivados de la madera y su uso sostenible"],
  claves: ["materia prima", "material", "producto", "propiedades", "dureza", "elasticidad", "madera", "duramen", "albura", "madera dura", "madera blanda", "contrachapado", "aglomerado", "tablero de fibras", "papel", "certificación forestal"],
  pregunta: {
    texto: "Una tabla de madera maciza se curva y se agrieta con la humedad, pero un tablero de contrachapado del mismo grosor apenas se deforma. ¿Por qué?",
    respuesta: "Porque la madera <b>no se comporta igual en todas las direcciones</b>: es muy resistente a lo largo de sus fibras y se hincha y se encoge sobre todo a lo ancho. El <b>contrachapado</b> está hecho de láminas finas de madera pegadas con las fibras <b>cruzadas</b>, una en cada dirección. Así, lo que una lámina tiende a deformarse, la de al lado lo impide, y el tablero queda <b>estable</b>.",
  },
  bloques: [
    {
      html: `<h3>Materias primas, materiales y productos</h3><p>Todo lo que nos rodea está fabricado con algún material. Para entender de dónde salen, conviene distinguir tres conceptos. Las <mark>materias primas</mark> son los recursos que se obtienen directamente de la naturaleza, sin transformar: un tronco de árbol, un mineral de hierro, el petróleo, la arena o el algodón. Los <mark>materiales</mark> son el resultado de transformar las materias primas para que se puedan usar en la fabricación: tablones de madera, chapas de acero, granza de plástico, vidrio o hilo. Y los <mark>productos tecnológicos</mark> son los objetos terminados que se fabrican con esos materiales: una silla, una bicicleta, una botella o una camiseta. Por ejemplo: tronco (materia prima) → tablero (material) → mesa (producto). Según su origen, los materiales pueden ser <b>naturales</b>, si se encuentran en la naturaleza y solo hay que darles forma (madera, lana, piedra, algodón); <b>artificiales</b>, si se obtienen transformando materiales naturales (acero, vidrio, papel, hormigón); y <b>sintéticos</b>, si se fabrican en laboratorios e industrias a partir de sustancias químicas, sobre todo derivadas del petróleo, como los plásticos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del árbol a la mesa: materia prima (tronco), material (tablero) y producto (mesa)">${BG}
        <rect x="18" y="80" width="56" height="26" rx="13" fill="#a16207"/><ellipse cx="74" cy="93" rx="8" ry="13" fill="#fde68a" stroke="#a16207" stroke-width="2"/><circle cx="74" cy="93" r="5" fill="none" stroke="#a16207"/>
        <rect x="104" y="84" width="52" height="16" fill="#fcd34d" stroke="#a16207" stroke-width="2"/><path d="M108 88 h 44 M108 94 h 44" stroke="#a16207" stroke-width=".8"/>
        <rect x="184" y="76" width="62" height="8" fill="#d97706"/><path d="M190 84 v 30 M240 84 v 30" stroke="#92400e" stroke-width="5"/>
        ${fl(82, 93, 100, 93, "var(--ink)", 2)}${fl(160, 93, 180, 93, "var(--ink)", 2)}
        ${t(46, 134, "materia prima", { size: 10, color: COL.marron })}${t(130, 134, "material", { size: 10, color: COL.sol })}${t(215, 134, "producto", { size: 10, color: COL.naranja })}
        ${t(46, 148, "tronco", { size: 9.5, weight: 400 })}${t(130, 148, "tablero", { size: 9.5, weight: 400 })}${t(215, 148, "mesa", { size: 9.5, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Las propiedades de los materiales</h3><p>Para elegir el material adecuado para cada objeto hay que conocer sus <mark>propiedades</mark>, es decir, cómo se comporta. Las <b>propiedades mecánicas</b> indican cómo responde ante las fuerzas: la <b>dureza</b> es la resistencia a ser rayado o penetrado; la <b>tenacidad</b> es la resistencia a romperse por golpes (lo contrario es la <b>fragilidad</b>, como la del vidrio); la <b>elasticidad</b> es la capacidad de recuperar la forma después de deformarse (una goma); la <b>plasticidad</b> es la capacidad de quedarse deformado sin romperse (la plastilina); y la <b>resistencia mecánica</b> es la capacidad de soportar fuerzas sin romperse. Las <b>propiedades térmicas</b> indican cómo se comporta con el calor: los <b>conductores térmicos</b> transmiten bien el calor (los metales) y los <b>aislantes térmicos</b> no (la madera, el corcho). Las <b>propiedades eléctricas</b> indican si conduce la electricidad o es aislante. Y las <b>propiedades ecológicas</b> indican su impacto: si es <b>reciclable</b>, <b>biodegradable</b> (se descompone de forma natural) o <b>tóxico</b>. También importan otras, como la densidad, el aspecto, el precio y la facilidad para trabajarlo.</p>`,
    },
    {
      html: `<h3>La madera: obtención</h3><p>La <mark>madera</mark> es un material <b>natural</b> que se obtiene del <b>tronco de los árboles</b>. Es uno de los materiales más antiguos que ha usado el ser humano, y todavía hoy es muy importante en la construcción, los muebles, los envases o la fabricación de papel. Su obtención tiene varias fases. Primero, la <b>tala</b> de los árboles, normalmente en bosques o plantaciones gestionadas, y la eliminación de las ramas. Después, el <b>descortezado</b> (se quita la corteza) y el <b>transporte</b> de los troncos al aserradero. En el <b>aserradero</b> se cortan los troncos en tablas, tablones, listones y vigas. A continuación viene el <b>secado</b>, una fase fundamental, porque la madera recién cortada tiene mucha agua y, si se usara así, se deformaría y se agrietaría al secarse; se puede secar al aire libre, lo que tarda meses, o en hornos o secaderos, más rápido. Finalmente, se <b>trata</b> con productos que la protegen de los insectos, los hongos y la humedad, y se almacena. Los restos del aserradero (serrín, virutas, recortes) se aprovechan para fabricar tableros, papel o combustible.</p>`,
    },
    {
      html: `<h3>La estructura de la madera</h3><p>Si cortamos un tronco de forma transversal, podemos ver sus partes de fuera hacia dentro. La <b>corteza</b> es la capa externa, que protege el árbol. Debajo está el <b>cámbium</b>, una capa muy fina donde se forman las nuevas células, de modo que el tronco crece a lo ancho. Después viene la <mark>albura</mark>, la madera joven, más clara y blanda, por donde circula la savia. En el centro está el <mark>duramen</mark>, la madera más vieja, más oscura, dura y resistente, que es la más apreciada. Y en el eje está la <b>médula</b>. En el corte se ven también los <mark>anillos de crecimiento</mark>: cada año, el árbol forma un anillo con una parte clara (madera de primavera, de crecimiento rápido) y otra oscura (de verano y otoño); contando los anillos se puede saber la <b>edad</b> del árbol. La madera está formada por <b>fibras</b> alargadas de celulosa unidas por una sustancia llamada lignina, orientadas a lo largo del tronco: por eso es mucho más resistente y fácil de cortar <b>en la dirección de la veta</b> (a favor de las fibras) que en otras direcciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte transversal de un tronco: corteza, albura clara, duramen oscuro, médula y anillos de crecimiento">${BG}
        <circle cx="90" cy="92" r="70" fill="#78350f"/><circle cx="90" cy="92" r="64" fill="#fde68a"/><circle cx="90" cy="92" r="40" fill="#d97706"/>
        ${[56, 48, 32, 24, 16, 8].map((r) => `<circle cx="90" cy="92" r="${r}" fill="none" stroke="#92400e" stroke-width="1"/>`).join("")}<circle cx="90" cy="92" r="3" fill="#451a03"/>
        ${fl(196, 26, 150, 52, "var(--ink)", 1.3)}${t(200, 30, "corteza", { size: 10, anchor: "start" })}
        ${fl(196, 66, 146, 76, "var(--ink)", 1.3)}${t(200, 70, "albura", { size: 10, anchor: "start" })}
        ${fl(196, 106, 118, 100, "var(--ink)", 1.3)}${t(200, 110, "duramen", { size: 10, anchor: "start" })}
        ${fl(196, 146, 94, 94, "var(--ink)", 1.3)}${t(200, 150, "médula", { size: 10, anchor: "start" })}
        ${t(90, 176, "1 anillo = 1 año", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "xq8Kc4-xsdI", titulo: "Tecnología de la madera. Anisotropía. Duramen, albura y anillos de crecimiento", canal: "Volver el Vivo", vistas: 41305 },
    },
    {
      html: `<h3>Propiedades de la madera</h3><p>La madera tiene muchas propiedades que la hacen útil. Es <b>ligera</b> en relación con lo resistente que es, por eso se usa en estructuras como vigas y tejados. Es un buen <b>aislante térmico</b> (por eso los mangos de las cacerolas o las cucharas de cocina son de madera) y un buen <b>aislante eléctrico</b> cuando está seca. Es <b>fácil de trabajar</b> con herramientas sencillas: se puede cortar, lijar, taladrar, clavar y encolar. Tiene un <b>aspecto agradable</b>, con vetas y colores variados. Y es un material <b>renovable</b> (si los bosques se gestionan bien), <b>biodegradable</b> y <b>reciclable</b>. Pero también tiene inconvenientes: es <b>combustible</b>, es decir, arde; le afecta la <b>humedad</b>, que la hace hincharse, deformarse y pudrirse; puede ser atacada por <b>insectos</b> como la carcoma o las termitas y por <b>hongos</b>; y no se comporta igual en todas las direcciones, como hemos visto. Por eso se protege con <b>barnices, pinturas, aceites o lasures</b>, y con productos insecticidas y fungicidas.</p>`,
    },
    {
      html: `<h3>Maderas naturales: duras y blandas</h3><p>Las <mark>maderas naturales</mark> se obtienen directamente de los troncos, cortándolos en tablas, listones o vigas (madera <b>maciza</b>). Según su dureza, se dividen en dos grandes grupos. Las <mark>maderas duras</mark> proceden normalmente de árboles de <b>hoja caduca</b> y de <b>crecimiento lento</b>, por lo que son más densas, resistentes y duraderas, pero también más caras y difíciles de trabajar. Se usan en muebles de calidad, suelos (parqué), puertas o instrumentos musicales. Ejemplos: el <b>roble</b>, el <b>haya</b>, el <b>nogal</b>, el <b>castaño</b>, el cerezo y maderas tropicales como la caoba o el ébano. Las <mark>maderas blandas</mark> proceden sobre todo de <b>coníferas</b> (árboles de hoja perenne en forma de aguja) y de árboles de <b>crecimiento rápido</b>; son más ligeras, baratas y fáciles de trabajar, aunque menos resistentes. Se usan en carpintería de construcción, muebles sencillos, embalajes y palés. Ejemplos: el <b>pino</b>, el <b>abeto</b>, el chopo, el abedul y la balsa, una madera tropical tan ligera que se usa en maquetas y aeromodelismo.</p>${tabla(["Madera", "Tipo", "Características", "Usos"], [["Roble", "dura", "muy resistente y duradera", "muebles, barricas, suelos"], ["Haya", "dura", "clara, fácil de curvar al vapor", "sillas, juguetes, utensilios"], ["Nogal", "dura", "oscura y muy apreciada", "muebles de lujo"], ["Pino", "blanda", "ligera, barata, con nudos", "construcción, muebles sencillos"], ["Abeto", "blanda", "clara y ligera", "estructuras, instrumentos"], ["Balsa", "blanda", "ligerísima", "maquetas"]])}`,
    },
    {
      html: `<h3>Maderas transformadas: los tableros</h3><p>Las <mark>maderas transformadas</mark> o artificiales son tableros que se fabrican con <b>láminas, virutas o fibras de madera</b> unidas con colas o resinas a presión. Tienen varias ventajas: aprovechan los restos y las maderas de menos calidad, son más <b>baratos</b>, se fabrican en <b>grandes tamaños</b> y son más <b>estables</b> que la madera maciza (se deforman menos). Los principales son: el <mark>contrachapado</mark>, formado por varias láminas finas de madera (chapas) encoladas con las fibras cruzadas, que es muy resistente y se usa en muebles, cajones, embarcaciones o en el taller de Tecnología; el <mark>aglomerado</mark>, fabricado con virutas y serrín prensados con cola, que es barato pero poco resistente a la humedad, y se usa en muebles, a menudo recubierto con una lámina decorativa de melamina o de madera; y el <mark>tablero de fibras</mark>, como el <b>DM</b> (o MDF), fabricado con fibras de madera muy finas prensadas, que tiene una superficie lisa y uniforme ideal para pintar o para cortar con láser. También se fabrican tableros de fibras de baja densidad, como el cartón madera, usado en traseras de armarios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tableros: contrachapado con láminas cruzadas, aglomerado con virutas y tablero de fibras DM liso">${BG}
        ${[0, 1, 2, 3, 4].map((i) => `<rect x="14" y="${46 + i * 12}" width="68" height="12" fill="${i % 2 ? "#fbbf24" : "#fde68a"}" stroke="#a16207"/>${i % 2 ? "" : `<path d="M18 ${52 + i * 12} h 60" stroke="#a16207" stroke-width=".6"/>`}`).join("")}
        <rect x="96" y="46" width="68" height="60" fill="#e7c48d" stroke="#a16207"/>${Array.from({ length: 26 }, (_, i) => `<rect x="${100 + ((i * 37) % 58)}" y="${50 + ((i * 23) % 50)}" width="${5 + (i % 4)}" height="2.5" fill="#92400e" transform="rotate(${(i * 47) % 180} ${103 + ((i * 37) % 58)} ${51 + ((i * 23) % 50)})"/>`).join("")}
        <rect x="178" y="46" width="68" height="60" fill="#c8a27a" stroke="#a16207"/>
        ${t(48, 130, "contrachapado", { size: 10, color: COL.marron })}${t(130, 130, "aglomerado", { size: 10, color: COL.marron })}${t(212, 130, "DM (fibras)", { size: 10, color: COL.marron })}
        ${t(48, 146, "láminas cruzadas", { size: 9, weight: 400 })}${t(130, 146, "virutas y cola", { size: 9, weight: 400 })}${t(212, 146, "fibras finas", { size: 9, weight: 400 })}</svg>`,
      video: { id: "31mTT1OSE4Q", titulo: "Así se hace la madera contrachapada en la fábrica", canal: "Recolectando", vistas: 933464 },
    },
    {
      html: `<h3>El papel, el cartón y la madera sostenible</h3><p>De la madera también se obtienen el <mark>papel</mark> y el <mark>cartón</mark>. Para fabricar papel, la madera (normalmente de árboles de crecimiento rápido, como el eucalipto o el pino) se tritura y se mezcla con agua y productos químicos para separar las fibras de celulosa y formar una <b>pasta</b>; la pasta se blanquea, se extiende en capas finas sobre unas telas, se escurre, se prensa y se seca entre rodillos calientes, y se enrolla en grandes bobinas. El cartón se fabrica de forma parecida, con capas más gruesas o con una capa ondulada entre dos lisas (cartón ondulado), muy resistente para hacer cajas. El papel y el cartón se pueden <b>reciclar</b> varias veces: cada tonelada de papel reciclado ahorra árboles, agua y energía. Para que el uso de la madera sea <b>sostenible</b>, hay que talar solo lo que el bosque puede regenerar, replantar, proteger los bosques naturales y combatir la tala ilegal. Al comprar productos de madera o papel, conviene buscar los sellos de <b>certificación forestal</b>, como <b>FSC</b> o <b>PEFC</b>, que garantizan que proceden de bosques gestionados de forma responsable.</p>`,
      video: { id: "mG3rx1ZGjCE", titulo: "Como se Hace el Papel (niños)", canal: "Two Sides Colombia", vistas: 991082 },
    },
  ],
  figura: {
    titulo: "Materiales y madera en ocho ideas",
    svg: rejilla([
      ["Materia prima", "recurso sin transformar", COL.marron],
      ["Material", "materia prima transformada", COL.sol],
      ["Propiedades", "mecánicas, térmicas, ecológicas", COL.azul],
      ["Duramen", "madera vieja, dura y oscura", COL.naranja],
      ["Maderas duras", "roble, haya, nogal", COL.rojo],
      ["Maderas blandas", "pino, abeto, chopo", COL.verde],
      ["Tableros", "contrachapado, aglomerado, DM", COL.gris],
      ["Sostenible", "sellos FSC y PEFC", COL.agua],
    ], 4, 86, "Resumen: materia prima, material, propiedades, estructura y tipos de madera, tableros y sostenibilidad"),
  },
  video: { id: "VQBQ8w6NEoY", titulo: "MDF, melamina, aglomerado, triplay, terciado, MDP, RH ¿Cuál es mejor?", canal: "Taller en Casa", vistas: 1452104, megusta: 0, busqueda: "maderas naturales y transformadas tableros" },
  ejemplos: [
    { enunciado: "Clasifica en materia prima, material o producto: algodón, camiseta, hilo; mineral de hierro, chapa de acero, lata.",
      pasos: ["Directamente de la naturaleza: algodón y mineral de hierro (materias primas).", "Transformados para fabricar: hilo y chapa de acero (materiales).", "Objetos terminados: camiseta y lata (productos)."],
      resultado: "Materias primas: algodón, mineral. Materiales: hilo, chapa. Productos: camiseta, lata." },
    { enunciado: "Necesitas hacer la trasera de un armario barato y ligera. ¿Qué tablero eliges y por qué?",
      pasos: ["No tiene que soportar mucho peso ni verse.", "Interesa que sea fino, ligero y barato.", "Un tablero de fibras fino (cartón madera) o un contrachapado delgado cumplen."],
      resultado: "Un tablero de fibras fino o un contrachapado delgado." },
    { enunciado: "En el corte de un tronco cuentas 35 anillos. ¿Qué edad tenía el árbol? ¿Por qué unos anillos son más anchos que otros?",
      pasos: ["Cada año se forma un anillo.", "35 anillos = unos 35 años.", "Los anillos anchos corresponden a años buenos (más lluvia), y los estrechos, a años secos o fríos."],
      resultado: "Unos 35 años; el ancho del anillo depende del clima de cada año." },
  ],
  errores: [
    "Confundir materia prima (tronco) con material (tablón).",
    "Pensar que todas las maderas de coníferas son duras: casi todas son blandas.",
    "Usar madera sin secar, que luego se deforma y se agrieta.",
    "Creer que el aglomerado resiste bien la humedad: se hincha.",
    "Cortar la madera contra la veta y que se astille.",
  ],
  ejercicios: [
    { q: "Define materia prima, material y producto con un ejemplo de cada.", sol: "Materia prima: recurso natural (tronco). Material: materia prima transformada (tablero). Producto: objeto terminado (mesa)." },
    { q: "Clasifica por su origen: lana, vidrio, plástico, piedra, papel.", sol: "Naturales: lana y piedra. Artificiales: vidrio y papel. Sintéticos: plástico." },
    { q: "Diferencia entre elasticidad y plasticidad.", sol: "La elasticidad es recuperar la forma tras deformarse; la plasticidad, quedarse deformado sin romperse." },
    { q: "Escribe las fases de obtención de la madera.", sol: "Tala, descortezado, transporte, aserrado, secado y tratamiento." },
    { q: "¿Por qué es tan importante secar la madera?", sol: "Porque si se usa húmeda, al secarse se deforma y se agrieta." },
    { q: "¿Qué diferencia hay entre albura y duramen?", sol: "La albura es la madera joven, clara y blanda; el duramen, la más vieja, oscura y resistente." },
    { q: "Escribe tres ventajas y tres inconvenientes de la madera.", sol: "Ventajas: ligera y resistente, aislante, renovable. Inconvenientes: arde, le afecta la humedad, la atacan insectos y hongos." },
    { q: "Diferencia entre maderas duras y blandas con dos ejemplos de cada una.", sol: "Duras: crecimiento lento, densas y caras (roble, nogal). Blandas: crecimiento rápido, ligeras y baratas (pino, abeto)." },
    { q: "¿Cómo se fabrica el contrachapado y por qué es estable?", sol: "Encolando láminas finas con las fibras cruzadas; así unas compensan la deformación de otras." },
    { q: "¿Qué significan los sellos FSC y PEFC?", sol: "Que la madera o el papel proceden de bosques gestionados de forma responsable." },
  ],
  quiz: [
    { q: "El petróleo es una…", o: ["materia prima", "material sintético", "producto"], a: 0, e: "Materia prima." },
    { q: "El plástico es un material…", o: ["natural", "artificial", "sintético"], a: 2, e: "Sintético." },
    { q: "La capacidad de no romperse con los golpes es la…", o: ["tenacidad", "fragilidad", "dureza"], a: 0, e: "Tenacidad." },
    { q: "La madera es un buen…", o: ["aislante térmico", "conductor eléctrico", "metal"], a: 0, e: "Aislante térmico." },
    { q: "La parte más resistente del tronco es el…", o: ["duramen", "cámbium", "corteza"], a: 0, e: "Duramen." },
    { q: "Los anillos de crecimiento indican…", o: ["la edad del árbol", "su altura", "su especie"], a: 0, e: "La edad." },
    { q: "El roble es una madera…", o: ["dura", "blanda", "transformada"], a: 0, e: "Dura." },
    { q: "El pino es una madera…", o: ["blanda", "dura", "sintética"], a: 0, e: "Blanda." },
    { q: "El tablero de láminas cruzadas es el…", o: ["contrachapado", "aglomerado", "DM"], a: 0, e: "Contrachapado." },
    { q: "El papel se fabrica con fibras de…", o: ["celulosa", "plástico", "hierro"], a: 0, e: "Celulosa." },
  ],
  examen: [
    { q: "La madera se corta mejor…", o: ["a favor de la veta", "contra la veta", "da igual"], a: 0, e: "En la dirección de las fibras." },
    { q: "El DM tiene una superficie…", o: ["lisa y uniforme", "con nudos", "de láminas"], a: 0, e: "Ideal para pintar." },
    { q: "Un material que se descompone de forma natural es…", o: ["biodegradable", "tenaz", "conductor"], a: 0, e: "Biodegradable." },
  ],
  feynman: ["Qué diferencia hay entre materia prima, material y producto", "Cómo es la estructura de un tronco y qué nos dicen los anillos", "Qué tipos de madera y de tableros existen y para qué se usan"],
  mapa: mapa("LA MADERA", "var(--eso)", [
    ["Materiales", "origen · propiedades", COL.azul],
    ["Obtención", "tala · aserrado · secado", COL.marron],
    ["Naturales", "duras · blandas", COL.verde],
    ["Transformadas", "contrachapado · aglomerado · DM", COL.sol],
  ], 300),
  tarjetas: [
    ["Materia prima", "Recurso natural sin transformar: tronco, mineral."],
    ["Material sintético", "Fabricado a partir de sustancias químicas: plástico."],
    ["Tenacidad", "Resistencia a romperse por golpes."],
    ["Duramen", "Madera central, vieja, oscura y resistente."],
    ["Maderas duras", "Crecimiento lento, densas: roble, haya, nogal."],
    ["Maderas blandas", "Crecimiento rápido, ligeras: pino, abeto."],
    ["Contrachapado", "Láminas de madera encoladas con las fibras cruzadas."],
    ["Aglomerado", "Virutas y serrín prensados con cola."],
  ],
  familias: ["Recorred la casa y clasificad los muebles en madera maciza o tableros (mirad los cantos).", "Buscad los sellos FSC o PEFC en cuadernos, cajas o muebles.", "Contad los anillos de un tocón o de un tronco de leña."],
  profesores: {
    saberes: "Materiales: materias primas, materiales y productos, clasificación por origen, propiedades; la madera: obtención, estructura, propiedades, maderas naturales y transformadas, papel y cartón, gestión forestal sostenible (RD 217/2022, Tecnología y Digitalización, bloques Proceso de resolución de problemas y Tecnología sostenible).",
    ideas: ["Muestrario de maderas y tableros con ensayos de dureza y humedad.", "Fabricación de papel reciclado en el aula con un bastidor.", "Ficha técnica de un mueble del aula: materiales, uniones y acabados."],
  },
  fuentes: [RD, wiki("Madera", "Madera"), wiki("Tablero de fibra de densidad media", "Tablero_de_fibra_de_densidad_media"), { t: "FSC España: certificación forestal", url: "https://es.fsc.org/" }],
  revisado: REV,
};

// Ampliación a nivel libro (README, «Tema nivel libro»), pensada para alumnos de 12 años:
// lectura, apartados nuevos, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso1L5").libro(module.exports, {
  lectura: ["La caja del abuelo", `<p>Cuando Martina ayudó a vaciar el desván de su abuelo, encontró una caja de madera oscura, pesada, con las esquinas redondeadas por el uso. Dentro había cartas, fotos antiguas y una navaja. «Esta caja la hizo mi padre hace casi cien años», le explicó el abuelo. «Es de nogal. Ya no se hacen cajas así».</p><p>Martina la comparó con el mueble de su habitación, que habían montado el verano anterior con un destornillador y un folleto de instrucciones. Su mueble era ligero, de color blanco y por dentro, en un borde roto, se veían virutas de madera pegadas. «Mi mueble también es de madera, ¿no?», preguntó. «Más o menos», sonrió el abuelo. «Es aglomerado: restos de madera triturados y pegados con cola. Es barato y práctico, pero si se moja, se hincha como una galleta».</p><p>Esa tarde Martina descubrió que no hay una sola madera, sino muchas: duras y blandas, naturales y fabricadas, caras y baratas. Cada una tiene sus ventajas y sus inconvenientes, y elegir bien es la clave para que un objeto dure cien años… o solo unos cuantos.</p><p>En este tema aprenderás qué son los materiales y sus propiedades, cómo se obtiene la madera, qué tipos hay, cómo se trabaja en el taller y por qué es importante gestionar los bosques de forma sostenible.</p>`],
  mas: [
    ["<h3>La estructura de la madera</h3>", `<p>La dirección de las fibras se llama <b>veta</b>. La madera es más resistente y se trabaja mejor <b>a favor de la veta</b>; si se corta o se lija en contra, se astilla. Además, la madera se comporta de forma diferente según la dirección: se hincha y se encoge mucho más a lo ancho que a lo largo. Por eso decimos que es un material <b>anisótropo</b>.</p>`],
    ["<h3>Maderas transformadas: los tableros</h3>", `<p>Muchos tableros se venden <b>chapados</b> o <b>melaminados</b>: se les pega por encima una lámina fina de madera noble o de plástico decorativo, de modo que parecen madera maciza por fuera. Por eso, para saber de qué está hecho un mueble, hay que mirar los cantos o un agujero: allí se ven las láminas, las virutas o las fibras.</p>`],
  ],
  svgs: [
    ["<h3>Las propiedades de los materiales</h3>", "Propiedades de los materiales", [["mecánicas", "dureza, tenacidad, elasticidad"], ["térmicas", "conductor o aislante"], ["eléctricas", "conduce o no"], ["ecológicas", "reciclable, biodegradable"]], "cómo se comportan"],
    ["<h3>La madera: obtención</h3>", "Obtención de la madera", [["tala", "cortar el árbol"], ["descortezado", "quitar la corteza"], ["aserrado", "tablas y listones"], ["secado", "quitar la humedad"]], "del bosque al taller"],
    ["<h3>Propiedades de la madera</h3>", "La madera: pros y contras", [["ventajas", "ligera, aislante, renovable"], ["inconvenientes", "arde, humedad, carcoma"], ["protección", "barniz, pintura, cera"]], "propiedades de la madera"],
    ["<h3>Maderas naturales: duras y blandas</h3>", "Maderas duras y blandas", [["duras", "roble, haya, nogal"], ["crecimiento lento", "caras, resistentes"], ["blandas", "pino, abeto, chopo"], ["crecimiento rápido", "baratas, ligeras"]], "maderas naturales"],
    ["<h3>El papel, el cartón y la madera sostenible</h3>", "Papel, cartón y bosques", [["papel", "pasta de celulosa"], ["cartón", "capas de papel"], ["reciclaje", "contenedor azul"], ["FSC y PEFC", "bosques sostenibles"]], "de la madera al papel"],
  ],
  bloques: [
    { tras: "<h3>Las propiedades de los materiales</h3>", html: `<h3>Cómo elegir el material adecuado</h3><p>Cuando diseñamos un objeto, hay que elegir el material pensando en varias preguntas a la vez:</p><ul><li><b>¿Qué tiene que soportar?</b> Si recibirá golpes, necesita un material tenaz; si tiene que doblarse y volver, elástico.</li><li><b>¿Dónde se usará?</b> Al aire libre o con humedad, mejor materiales que no se pudran ni se oxiden.</li><li><b>¿Cómo se va a fabricar?</b> En el taller del aula interesa un material fácil de cortar y unir.</li><li><b>¿Cuánto cuesta?</b> Hay que ajustarse al presupuesto.</li><li><b>¿Qué impacto tiene?</b> Mejor materiales renovables, reciclados o reciclables.</li><li><b>¿Cómo queda?</b> El aspecto también importa: color, textura, brillo.</li></ul><p>Por ejemplo, para el mango de una sartén necesitamos un aislante térmico que no se queme fácilmente: madera o un plástico especial. Para la sartén misma, un buen conductor del calor que resista altas temperaturas: un metal. Nunca hay un material perfecto: siempre se busca el que mejor equilibra todas las necesidades.</p>`, svg: ["Elegir el material", [["función", "qué debe soportar"], ["ambiente", "humedad, sol, calor"], ["fabricación", "fácil de trabajar"], ["coste e impacto", "precio y sostenibilidad"]], "preguntas para decidir"] },
    { tras: "<h3>Maderas naturales: duras y blandas</h3>", html: `<h3>Las uniones de piezas de madera</h3><p>Para construir un objeto con madera hay que unir piezas. Las uniones pueden ser de dos tipos:</p><ul><li><b>Uniones fijas</b>, que no se pueden deshacer sin romper algo:<ul><li><b>Encolado</b>: con cola blanca (acetato de polivinilo). Se aplica en las dos superficies y se sujetan con <b>gatos</b> o sargentos hasta que se seca.</li><li><b>Clavado</b>: con clavos o puntas, golpeando con un martillo. Es rápido, pero puede rajar la madera si se clava cerca del borde.</li><li><b>Ensambles</b>: las piezas encajan entre sí gracias a cortes con forma (caja y espiga, cola de milano, media madera). Son las uniones tradicionales de los carpinteros.</li></ul></li><li><b>Uniones desmontables</b>, que se pueden deshacer: <b>tornillos</b>, <b>pernos con tuerca</b>, <b>bisagras</b> y los herrajes de los muebles en kit.</li></ul><p>A menudo se combinan: cola y clavos, o cola y tornillos, para que la unión sea más resistente. Antes de atornillar madera dura conviene hacer un pequeño agujero guía con el taladro para que no se raje.</p>`, svg: ["Uniones en madera", [["encolado", "cola blanca y gatos"], ["clavado", "clavos y martillo"], ["ensambles", "cola de milano, espiga"], ["desmontables", "tornillos y bisagras"]], "fijas y desmontables"] },
    { tras: "<h3>Maderas transformadas: los tableros</h3>", html: `<h3>Trabajar la madera en el taller</h3><p>En el aula de Tecnología, trabajar una pieza de madera sigue casi siempre los mismos pasos:</p><ol><li><b>Medir y marcar</b>: con la regla, la escuadra y un lápiz, se dibujan las líneas de corte sobre la madera. Si es posible, se marca a favor de la veta.</li><li><b>Sujetar</b> la pieza en el tornillo de banco o con un gato, para que no se mueva.</li><li><b>Serrar</b>: con el serrucho, la sierra de costilla o la segueta (para curvas), siguiendo la línea por el lado de fuera.</li><li><b>Dar forma y afinar</b>: con la lima o la escofina se rebajan los bordes; con el taladro se hacen agujeros.</li><li><b>Lijar</b>: primero con lija gruesa y después con lija fina, siempre a favor de la veta, hasta que la superficie quede suave.</li><li><b>Unir</b> las piezas con cola, clavos o tornillos.</li><li><b>Dar el acabado</b>: barniz, pintura, tinte o cera, que protegen la madera de la humedad y los insectos y la embellecen.</li></ol><p>Durante todo el proceso hay que respetar las normas de seguridad: gafas, pieza bien sujeta y manos lejos de la hoja de la sierra.</p>`, svg: ["Trabajar la madera", [["medir y marcar", "regla, escuadra, lápiz"], ["serrar", "serrucho, segueta"], ["limar y lijar", "a favor de la veta"], ["acabado", "barniz, pintura, cera"]], "pasos en el taller"] },
    { html: `<h3>El corcho, un tesoro de nuestros bosques</h3><p>No toda la materia prima que da un árbol es madera. El <b>corcho</b> es la corteza del <b>alcornoque</b>, un árbol típico del Mediterráneo, muy abundante en Portugal, en Extremadura, en Andalucía y en Cataluña (especialmente en Girona). Lo más interesante es que se obtiene <b>sin talar el árbol</b>: cada nueve o diez años, los corcheros quitan la corteza a mano con un hacha, con mucho cuidado de no dañar el tronco, y el alcornoque la vuelve a generar. Un alcornoque puede vivir más de doscientos años.</p><p>El corcho tiene propiedades extraordinarias: es <b>muy ligero</b> (flota), <b>impermeable</b>, <b>elástico</b> (recupera la forma después de comprimirse), un excelente <b>aislante térmico y acústico</b>, y es renovable y reciclable. Por eso se usa para tapones de botellas, tablones de anuncios, suelos, aislamientos de edificios, suelas de zapatos e incluso en piezas de cohetes espaciales.</p><p>Los bosques de alcornoques, además, protegen el suelo, previenen incendios y son el hogar de muchas especies. Usar corcho ayuda a que estos bosques se conserven.</p>`, svg: ["El corcho", [["origen", "corteza del alcornoque"], ["sin talar", "se recoge cada 9-10 años"], ["propiedades", "ligero, elástico, aislante"], ["usos", "tapones, suelos, aislantes"]], "un material renovable"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Elige el material para una tabla de cortar de cocina y justifica la elección.", ["Debe ser duro para resistir los cortes del cuchillo.", "Debe aguantar la humedad y poder lavarse.", "No debe soltar sustancias tóxicas.", "Una madera dura (haya, olivo) o un plástico alimentario cumplen estas condiciones."], "Madera dura como el haya o el olivo, sin barnizar o con aceite alimentario; o plástico alimentario."],
    ["Ordena los pasos para fabricar una pieza rectangular de pino de 20 × 10 cm.", ["Medir y marcar el rectángulo con regla y escuadra.", "Sujetar el listón en el tornillo de banco.", "Serrar por el lado exterior de la línea.", "Limar y lijar los bordes a favor de la veta.", "Aplicar barniz si va a estar expuesta a la humedad."], "Medir y marcar → sujetar → serrar → limar y lijar → acabado."],
    ["¿Qué unión usarías para fijar la tapa de una caja que debe abrirse y cerrarse? ¿Y para unir las paredes laterales?", ["La tapa tiene que moverse: unión desmontable con bisagras atornilladas.", "Las paredes no se tienen que separar: unión fija con cola y clavos o un ensamble."], "Tapa: bisagras (unión desmontable). Paredes: cola + clavos o ensamble (unión fija)."],
  ],
  errores: ["Lijar o serrar en contra de la veta, de modo que la madera se astilla."],
  niveles: "bbbbbmbmmm",
  ejercicios: [
    ["b", "Escribe tres preguntas que hay que hacerse para elegir un material.", "Por ejemplo: ¿qué tiene que soportar?, ¿dónde se usará?, ¿cuánto cuesta? (también cómo se fabricará, qué impacto tiene, cómo queda)."],
    ["b", "¿Qué diferencia hay entre una unión fija y una desmontable?", "La <b>fija</b> no se puede deshacer sin romper algo (cola, clavos); la <b>desmontable</b>, sí (tornillos, bisagras)."],
    ["b", "Escribe los pasos para trabajar una pieza de madera en el taller.", "Medir y marcar, sujetar, serrar, limar y taladrar, lijar, unir y dar el acabado."],
    ["b", "¿De qué árbol se obtiene el corcho?", "Del <b>alcornoque</b> (es su corteza)."],
    ["b", "¿Para qué sirven el barniz y la pintura en la madera?", "Para <b>protegerla</b> de la humedad y los insectos y para <b>embellecerla</b>."],
    ["b", "¿Qué herramienta usarías para cortar una curva en una tabla fina?", "La <b>segueta</b> (sierra de marquetería)."],
    ["m", "Explica por qué se dice que el corcho es un material sostenible.", "Porque se obtiene <b>sin talar el árbol</b>, el alcornoque regenera la corteza, es renovable, reciclable y su explotación ayuda a conservar los bosques."],
    ["m", "¿Por qué conviene hacer un agujero guía antes de atornillar madera dura?", "Para que el tornillo entre con facilidad y la madera <b>no se raje</b>."],
    ["m", "Elige el material para una caseta de pájaros al aire libre y el acabado necesario.", "Madera (por ejemplo pino o contrachapado de exterior) con un acabado protector: <b>barniz o pintura para exterior</b>, porque estará expuesta a la lluvia y al sol."],
    ["m", "¿Qué es un ensamble? Nombra dos tipos.", "Una unión en la que las piezas <b>encajan</b> gracias a cortes con forma. Por ejemplo, <b>cola de milano</b> y <b>caja y espiga</b>."],
    ["m", "Explica qué significa que la madera es anisótropa.", "Que sus propiedades <b>cambian según la dirección</b>: es más resistente a lo largo de la veta y se hincha más a lo ancho."],
    ["m", "¿Cómo sabrías si un mueble chapado es de aglomerado o de contrachapado?", "Mirando un <b>canto</b> o un agujero: el aglomerado muestra virutas; el contrachapado, láminas cruzadas."],
    ["a", "Diseña una caja para guardar lápices: elige madera, uniones y acabado, y justifica cada elección.", "Respuesta abierta. Ejemplo: contrachapado de 4 mm (ligero, estable, barato), uniones encoladas y clavadas, tapa con bisagras, acabado con barniz al agua."],
    ["a", "Compara el corcho con el plástico para hacer tapones: ventajas e inconvenientes de cada uno.", "Corcho: natural, renovable, elástico, biodegradable, pero más caro. Plástico: barato y uniforme, pero procede del petróleo y tarda mucho en descomponerse."],
    ["a", "Calcula cuánta madera necesitas para una caja cúbica sin tapa de 20 cm de lado (en cm²) y cuántas piezas son.", "Son <b>5 piezas</b> de 20 × 20 cm (fondo y cuatro paredes) = 5 × 400 = <b>2.000 cm²</b> (sin contar el grosor de la madera)."],
    ["a", "Investiga qué es la carcoma y cómo se puede prevenir y tratar.", "La carcoma es la <b>larva de un escarabajo</b> que excava galerías en la madera. Se previene con barnices y productos protectores, y se trata con insecticidas específicos o calor."],
    ["a", "Explica por qué el pino es la madera más usada en el taller escolar.", "Porque es <b>blanda</b> y fácil de serrar, lijar y clavar, es <b>barata</b>, ligera y se encuentra fácilmente en listones y tablas."],
    ["a", "¿Qué acabado darías a una cuchara de madera para cocinar y por qué?", "Ningún barniz ni pintura (podrían ser tóxicos con el calor); solo <b>aceite alimentario</b> (de oliva o de linaza alimentaria) para protegerla."],
    ["a", "Prepara una ficha del alcornoque: dónde vive, cómo se extrae el corcho, propiedades y usos.", "Respuesta abierta. Debe incluir el área mediterránea (Girona, Extremadura, Portugal…), la extracción manual cada 9-10 años sin talar, propiedades (ligero, elástico, aislante) y usos (tapones, suelos, aislamientos)."],
    ["a", "Explica la relación entre gestión forestal sostenible y prevención de incendios.", "Unos bosques bien gestionados se limpian de maleza, tienen cortafuegos y se aprovechan sus recursos, lo que reduce el combustible acumulado y el riesgo de grandes incendios."],
  ],
  cuartas: ["material artificial", "natural transformado", "elasticidad", "conductor eléctrico", "albura", "su color", "sintética", "dura", "DM", "vidrio", "da igual siempre", "con escamas", "frágil"],
  quiz: [
    ["Para elegir un material hay que tener en cuenta…", ["la función, el ambiente, el coste y el impacto", "solo el precio", "solo el color", "solo el peso"], "Siempre se buscan varias condiciones."],
    ["La cola blanca crea una unión…", ["fija", "desmontable", "elástica", "eléctrica"], "No se puede deshacer sin romper."],
    ["Las bisagras son una unión…", ["desmontable y móvil", "fija", "encolada", "de ensamble"], "Permiten abrir y cerrar."],
    ["La cola de milano es un tipo de…", ["ensamble", "tablero", "acabado", "madera dura"], "Unión tradicional de carpintería."],
    ["Para cortar curvas en tableros finos se usa la…", ["segueta", "escofina", "lija", "escuadra"], "Sierra de marquetería."],
    ["La madera se lija…", ["a favor de la veta", "en contra de la veta", "en círculos", "solo con lija gruesa"], "Primero gruesa, después fina."],
    ["El corcho se obtiene del…", ["alcornoque", "pino", "roble", "haya"], "Es su corteza."],
    ["El corcho se obtiene…", ["sin talar el árbol", "talando el árbol", "de la raíz", "del duramen"], "Se pela la corteza cada 9-10 años."],
    ["Una propiedad del corcho es que…", ["flota y es aislante", "conduce la electricidad", "se oxida", "es muy pesado"], "Es muy ligero."],
    ["Antes de atornillar madera dura conviene…", ["hacer un agujero guía", "mojarla", "pintarla", "calentarla"], "Para que no se raje."],
  ],
  examen: [
    ["El último paso al trabajar una pieza de madera suele ser…", ["el acabado", "medir", "serrar", "marcar"], "Barniz, pintura o cera."],
    ["Los gatos o sargentos sirven para…", ["sujetar las piezas mientras se seca la cola", "cortar curvas", "lijar", "medir ángulos"], "Presionan las piezas."],
    ["Para una cuchara de cocina, el mejor acabado es…", ["aceite alimentario", "barniz sintético", "pintura", "laca"], "No puede ser tóxico."],
    ["Un tornillo es una unión…", ["desmontable", "fija", "encolada", "soldada"], "Se puede quitar."],
    ["Para una pieza que estará a la intemperie conviene…", ["un acabado protector de exterior", "aglomerado sin proteger", "no darle acabado", "pintura de interior"], "La protege de la lluvia y el sol."],
  ],
  tarjetas: [["Unión fija", "No se deshace sin romper: cola, clavos, ensambles."], ["Unión desmontable", "Se puede deshacer: tornillos, bisagras, pernos."], ["Acabado", "Barniz, pintura, tinte o cera que protegen la madera."], ["Corcho", "Corteza del alcornoque: ligera, elástica, aislante y renovable."]],
  glosario: [
    ["materia prima", "Recurso natural sin transformar."],
    ["material", "Materia prima transformada para fabricar."],
    ["producto", "Objeto terminado."],
    ["dureza", "Resistencia a ser rayado o penetrado."],
    ["tenacidad", "Resistencia a romperse con golpes."],
    ["elasticidad", "Capacidad de recuperar la forma."],
    ["aislante térmico", "Material que no transmite bien el calor."],
    ["duramen", "Parte interior y más resistente del tronco."],
    ["veta", "Dirección de las fibras de la madera."],
    ["madera dura", "Madera densa de crecimiento lento: roble, haya."],
    ["madera blanda", "Madera ligera de crecimiento rápido: pino."],
    ["tablero", "Madera transformada: contrachapado, aglomerado, DM."],
    ["ensamble", "Unión de piezas que encajan por su forma."],
    ["acabado", "Tratamiento final que protege y embellece."],
    ["corcho", "Corteza del alcornoque."],
  ],
  situacion: { titulo: "La caja de los recuerdos", reto: "Diseñar y construir en madera una pequeña caja para guardar objetos personales, eligiendo bien los materiales, las uniones y el acabado, como la caja del abuelo de la lectura.", pasos: ["Analizar cajas de distintos materiales y decidir las condiciones (tamaño, tapa, presupuesto).", "Elegir el tipo de madera o tablero y justificarlo con sus propiedades.", "Dibujar el boceto, el croquis acotado y la hoja de procesos.", "Medir, marcar, serrar, lijar y unir las piezas con las uniones elegidas.", "Dar el acabado y añadir un detalle de corcho (por ejemplo, el fondo o un tirador).", "Evaluar la caja y presentarla con su ficha de materiales."], producto: "Una caja de madera acabada con su ficha técnica de materiales y uniones.", evaluacion: ["La elección de los materiales está justificada por sus propiedades.", "Las piezas están bien medidas, cortadas y lijadas.", "Las uniones son resistentes y adecuadas.", "Se respetan las normas de seguridad y se aprovecha bien el material."] },
  saberes: "criterios de elección de materiales; uniones fijas y desmontables en madera; técnicas de trabajo en el taller (medir, marcar, serrar, limar, lijar, unir y acabar); el corcho y el alcornocal como recurso renovable.",
  familias: ["Buscad en casa tres objetos de madera y averiguad si son de madera maciza o de tablero, y cómo están unidas sus piezas."],
  minutos: 100,
});
