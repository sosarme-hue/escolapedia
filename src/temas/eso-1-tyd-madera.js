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
