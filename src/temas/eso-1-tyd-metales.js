// Tecnología y Digitalización 1º ESO: los metales. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Los metales",
  minutos: 55,
  objetivos: ["Explicar cómo se obtienen los metales a partir de los minerales", "Reconocer las propiedades de los metales y relacionarlas con sus usos", "Distinguir metales ferrosos y no ferrosos, y conocer los principales", "Describir técnicas básicas de trabajo con metales y su reciclaje"],
  claves: ["metal", "mena", "ganga", "metalurgia", "conductividad", "ductilidad", "maleabilidad", "oxidación", "aleación", "hierro", "acero", "fundición", "cobre", "aluminio", "reciclaje"],
  pregunta: {
    texto: "Una lata de refresco se puede reciclar y volver a estar en la tienda, convertida en otra lata, en unas pocas semanas. ¿Por qué merece tanto la pena reciclar el aluminio?",
    respuesta: "Porque obtener aluminio nuevo a partir de su mineral, la <b>bauxita</b>, gasta muchísima electricidad. Fundir latas usadas para fabricar otras nuevas ahorra alrededor del <b>95 % de esa energía</b>, y el aluminio se puede reciclar <b>una y otra vez</b> sin perder calidad. Además, se evita abrir nuevas minas y generar residuos. Por eso cada lata en el contenedor amarillo cuenta.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los metales?</h3><p>Los <mark>metales</mark> son materiales que se obtienen a partir de ciertos <b>minerales</b> de la corteza terrestre. Son de los materiales más usados por el ser humano: están en los coches, los edificios, los cables, los electrodomésticos, las monedas, los móviles y en casi cualquier máquina. Su importancia es tal que se han usado para nombrar periodos de la historia, como la <b>Edad del Cobre</b>, la <b>Edad del Bronce</b> y la <b>Edad del Hierro</b>. Muy pocos metales se encuentran puros en la naturaleza (el oro es una excepción); casi siempre forman parte de minerales combinados con otros elementos, como el oxígeno o el azufre. Los minerales de los que se puede extraer un metal de forma rentable se llaman <mark>menas</mark>: por ejemplo, la <b>hematites</b> y la magnetita (hierro), la <b>calcopirita</b> (cobre), la <b>bauxita</b> (aluminio), la <b>galena</b> (plomo) o la <b>blenda</b> (cinc). La roca sin valor que acompaña a la mena en el yacimiento se llama <b>ganga</b>. A temperatura ambiente, todos los metales son sólidos, excepto el <b>mercurio</b>, que es líquido.</p>`,
    },
    {
      html: `<h3>La obtención de los metales</h3><p>La <mark>metalurgia</mark> es el conjunto de procesos para obtener los metales a partir de sus minerales y prepararlos para su uso. Tiene varias etapas. 1) <b>Extracción</b> del mineral en <b>minas</b>, que pueden ser a cielo abierto, cuando el yacimiento está cerca de la superficie, o subterráneas, con galerías. 2) <b>Separación</b> de la mena y la ganga: se tritura el mineral y se separa la parte útil por distintos métodos (por densidad, con imanes, con agua y productos químicos). 3) <b>Obtención del metal</b>: normalmente se calienta la mena a temperaturas muy altas en hornos, con otras sustancias que le quitan el oxígeno o el azufre, y el metal se funde y se separa; algunos metales, como el aluminio, se obtienen usando electricidad. 4) <b>Afino</b>: se eliminan las impurezas para conseguir un metal más puro o con la composición deseada. 5) <b>Conformación</b>: el metal se moldea en formas útiles (láminas, barras, perfiles, tubos, alambres) que se venden a las industrias. La minería y la metalurgia consumen mucha energía y pueden causar impactos ambientales importantes, como la destrucción del paisaje, la contaminación de ríos y la generación de residuos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etapas de la metalurgia: extracción en la mina, separación de la mena, horno, afino y conformación en barras y láminas">${BG}
        ${[["mina", COL.marron], ["separar", COL.gris], ["horno", COL.rojo], ["afino", COL.naranja], ["formas", COL.azul]].map(([n, c], i) => cj(8 + i * 50, 60, 38, 40, n, c, { size: 10 })).join("")}
        ${[0, 1, 2, 3].map((i) => fl(47 + i * 50, 80, 57 + i * 50, 80, "var(--ink)", 1.6)).join("")}
        ${t(27, 124, "mineral", { size: 9, weight: 400 })}${t(77, 124, "mena", { size: 9, weight: 400 })}${t(127, 124, "metal", { size: 9, weight: 400 })}${t(177, 124, "puro", { size: 9, weight: 400 })}${t(227, 124, "barras", { size: 9, weight: 400 })}
        ${t(130, 36, "del mineral al metal", { size: 11, color: COL.azul })}</svg>`,
    },
    {
      html: `<h3>Propiedades de los metales</h3><p>Los metales tienen un conjunto de propiedades que los hacen muy útiles. Tienen un <b>brillo metálico</b> característico cuando están pulidos. Son buenos <mark>conductores del calor</mark>, por eso las cacerolas son de metal, y buenos <mark>conductores de la electricidad</mark>, por eso los cables son de cobre o aluminio. La mayoría son <b>duros, tenaces y resistentes</b>, por lo que se usan en estructuras y herramientas. Son <mark>dúctiles</mark>: se pueden estirar en <b>hilos</b> o alambres. Y son <mark>maleables</mark>: se pueden extender en <b>láminas</b> finas sin romperse, como el papel de aluminio. Además, se pueden <b>fundir</b> y verter en moldes, y la mayoría son <b>reciclables</b> casi sin límite. Su <b>densidad</b> suele ser alta (son pesados), aunque algunos, como el aluminio o el titanio, son ligeros. Su principal inconveniente es que muchos sufren <mark>oxidación</mark> o corrosión: reaccionan con el oxígeno y la humedad del aire y se deterioran, como el hierro que se cubre de herrumbre rojiza. Para evitarlo se protegen con pinturas, barnices, recubrimientos de otros metales (como el cinc del acero galvanizado) o se usan metales que no se oxidan, como el acero inoxidable.</p>`,
      video: { id: "Xl5IePthqsg", titulo: "Propiedades de los metales [fácil y rápido]", canal: "A Cierta Ciencia", vistas: 205261 },
    },
    {
      html: `<h3>Metales ferrosos y no ferrosos</h3><p>Los metales se clasifican en dos grandes grupos. Los <mark>metales ferrosos</mark> son el <b>hierro</b> y los materiales que tienen hierro como componente principal: el <b>acero</b> y la <b>fundición</b>. Son los más usados del mundo (más del 90 % del metal que se produce), porque son resistentes y relativamente baratos. Casi todos son <b>atraídos por los imanes</b> y se oxidan con facilidad si no se protegen. Los <mark>metales no ferrosos</mark> son todos los demás: cobre, aluminio, cinc, estaño, plomo, titanio, níquel, oro, plata… Suelen ser más caros, pero tienen propiedades especiales: más ligereza, mejor conducción eléctrica o más resistencia a la corrosión. Muchos metales se usan mezclados con otros elementos formando <mark>aleaciones</mark>, que tienen mejores propiedades que los metales puros. Por ejemplo, el <b>bronce</b> (cobre y estaño) es más duro que el cobre; el <b>latón</b> (cobre y cinc) es dorado, fácil de mecanizar y se usa en grifos, llaves e instrumentos musicales; y el <b>acero</b> es una aleación de hierro con un poco de carbono.</p>`,
      video: { id: "ZSR-igxb88E", titulo: "Materiales Ferrosos", canal: "eimende", vistas: 49364 },
    },
    {
      html: `<h3>Hierro, acero y fundición</h3><p>El <b>hierro</b> se obtiene en grandes hornos llamados <mark>altos hornos</mark>, de más de 30 metros de altura. Por arriba se introducen el mineral de hierro, carbón de coque (que da calor y quita el oxígeno al mineral) y piedra caliza (que se une a las impurezas); por abajo se inyecta aire muy caliente. A unos 1.500 °C el hierro se funde y sale por la parte inferior como <b>arrabio</b>, un hierro con bastante carbono, mientras las impurezas forman la <b>escoria</b>, que flota encima. El arrabio no se usa tal cual, sino que se transforma. Si se le quita parte del carbono hasta dejarlo por debajo del 2 % aproximadamente, se obtiene <mark>acero</mark>, el metal más usado del mundo: es duro, tenaz, se puede soldar, laminar y forjar, y se usa en estructuras de edificios y puentes, coches, barcos, herramientas o latas. Añadiéndole cromo y níquel se obtiene el <b>acero inoxidable</b>, que no se oxida, ideal para cubiertos, fregaderos o material médico. Si tiene más carbono (entre el 2 % y el 6,7 %), se llama <mark>fundición</mark>: es muy dura pero frágil, y se usa para piezas que se fabrican en moldes, como tapas de alcantarilla, bancos de parque, sartenes o bloques de motor.</p>${tabla(["Material ferroso", "Carbono", "Propiedades", "Usos"], [["Hierro puro", "casi nada", "blando y poco útil", "imanes, núcleos eléctricos"], ["Acero", "menos del 2 %", "duro, tenaz, soldable", "vigas, coches, herramientas"], ["Acero inoxidable", "con cromo y níquel", "no se oxida", "cubiertos, fregaderos"], ["Fundición", "2 % a 6,7 %", "dura y frágil, se moldea", "tapas de alcantarilla, sartenes"]])}`,
    },
    {
      html: `<h3>Metales no ferrosos más usados</h3><p>El <mark>cobre</mark> es rojizo, muy buen conductor de la electricidad y del calor, dúctil y maleable, y resiste bien la corrosión (con el tiempo se cubre de una capa verde que lo protege). Se usa en <b>cables eléctricos</b>, motores, tuberías y en aleaciones como el bronce y el latón. El <mark>aluminio</mark> es plateado, <b>muy ligero</b> (pesa casi tres veces menos que el acero), buen conductor, fácil de trabajar y <b>no se oxida</b> en profundidad, porque forma una fina capa protectora. Se usa en latas, papel de aluminio, ventanas, bicicletas, aviones y líneas eléctricas de alta tensión. El <b>cinc</b> se usa sobre todo para proteger el acero de la oxidación (<b>galvanizado</b>) y en canalones. El <b>estaño</b> se usa en las soldaduras de los circuitos electrónicos y para recubrir las latas de conserva (hojalata). El <b>plomo</b> es muy denso y blando; se usaba en tuberías y pinturas, pero es <b>tóxico</b>, por lo que hoy su uso está muy limitado (baterías, protección contra rayos X). El <b>titanio</b> es ligero, muy resistente y no se oxida; se usa en aviones, prótesis e implantes dentales. Y los metales preciosos, como el <b>oro</b> y la <b>plata</b>, se usan en joyería y también en electrónica, por su excelente conductividad.</p>`,
    },
    {
      html: `<h3>Trabajar con metales</h3><p>Para dar forma a los metales se usan distintas técnicas. En la industria, el metal fundido se vierte en moldes (<b>moldeo</b>), se pasa entre rodillos para obtener chapas y perfiles (<b>laminación</b>), se estira por agujeros cada vez más pequeños para hacer alambres (<b>trefilado</b>), se golpea en caliente para darle forma (<b>forja</b>) o se corta y se le quita material con máquinas (<b>mecanizado</b>). En el taller escolar se trabaja sobre todo con chapas finas, alambres y varillas de metales blandos, como el aluminio, el cobre o la hojalata. Las operaciones básicas son: <b>medir y marcar</b> con una regla y una punta de trazar; <b>cortar</b> con unas tijeras de chapa, una sierra de arco o unos alicates de corte; <b>limar</b> los bordes para que no corten; <b>doblar</b> con alicates, tornillo de banco o una dobladora; <b>taladrar</b>; y <b>unir</b> las piezas con tornillos, remaches o soldadura blanda con estaño (en electrónica). Hay que tener mucho cuidado, porque los bordes y las virutas de metal <b>cortan</b>: siempre con guantes y gafas de protección cuando sea necesario.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Técnicas de conformación: moldeo vertiendo metal en un molde, laminación entre rodillos y trefilado de alambre">${BG}
        <path d="M22 50 l 18 18" stroke="#f97316" stroke-width="5" stroke-linecap="round"/><rect x="20" y="70" width="50" height="34" fill="#94a3b8" stroke="var(--ink)" stroke-width="1.5"/><path d="M32 70 v 20 h 26 v -20" fill="#fb923c"/>
        ${t(45, 130, "moldeo", { size: 10.5 })}
        <circle cx="130" cy="64" r="14" fill="#cbd5e1" stroke="var(--ink)" stroke-width="1.5"/><circle cx="130" cy="98" r="14" fill="#cbd5e1" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="92" y="74" width="38" height="14" fill="#64748b"/><rect x="130" y="78" width="40" height="6" fill="#64748b"/>
        ${t(130, 130, "laminación", { size: 10.5 })}
        <rect x="200" y="62" width="10" height="44" fill="#475569"/><path d="M186 84 H 200 M210 84 H 250" stroke="#b45309" stroke-width="6"/><path d="M210 84 H 250" stroke="#b45309" stroke-width="2.5"/>
        ${t(220, 130, "trefilado", { size: 10.5 })}
        ${t(130, 160, "formas industriales del metal", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El reciclaje de los metales</h3><p>Los metales son recursos <b>no renovables</b>: las reservas de sus minerales son limitadas. Por eso es muy importante <mark>reciclarlos</mark>. Una gran ventaja de los metales es que se pueden <b>fundir y volver a usar indefinidamente</b> sin perder sus propiedades. Reciclarlos <b>ahorra mucha energía</b> (en el caso del aluminio, alrededor del 95 %, y en el del acero, más de la mitad), reduce la necesidad de abrir minas, disminuye la contaminación y los residuos, y ahorra dinero. El proceso es sencillo: se recogen los objetos metálicos, se separan los ferrosos de los no ferrosos (los ferrosos se separan fácilmente con grandes <b>electroimanes</b>), se trituran, se limpian, se funden y se vuelven a convertir en lingotes, chapas o barras. En casa, las <b>latas</b> de bebidas y conservas, el papel de aluminio limpio y las bandejas metálicas van al <b>contenedor amarillo</b>; los objetos metálicos grandes y los aparatos eléctricos y electrónicos, que contienen metales valiosos como el cobre, el oro o el litio, se llevan al <b>punto limpio</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Los metales en ocho ideas",
    svg: rejilla([
      ["Mena", "mineral del que sale el metal", COL.marron],
      ["Conductores", "del calor y la electricidad", COL.sol],
      ["Dúctil", "se estira en hilos", COL.azul],
      ["Maleable", "se extiende en láminas", COL.agua],
      ["Ferrosos", "hierro, acero, fundición", COL.gris],
      ["No ferrosos", "cobre, aluminio, cinc…", COL.naranja],
      ["Aleación", "mezcla: bronce, latón", COL.morado],
      ["Reciclaje", "aluminio: ahorra 95 %", COL.verde],
    ], 4, 86, "Resumen: mena, propiedades, metales ferrosos y no ferrosos, aleaciones y reciclaje"),
  },
  video: { id: "HHDxZvUEfEs", titulo: "Así se hace el ACERO: de la MINA de HIERRO al material que sostiene el MUNDO", canal: "Asi se Hace", vistas: 327506, megusta: 0, busqueda: "los metales propiedades y tipos" },
  ejemplos: [
    { enunciado: "¿Qué metal elegirías para: a) un cable eléctrico; b) el cuadro de una bicicleta ligera; c) una tapa de alcantarilla?",
      pasos: ["a) Necesita conducir muy bien la electricidad: cobre.", "b) Necesita ser ligero y resistente: aluminio (o titanio).", "c) Pieza moldeada, dura y barata: fundición."],
      resultado: "a) cobre; b) aluminio; c) fundición." },
    { enunciado: "Tienes una mezcla de latas de acero y de aluminio. ¿Cómo las separarías rápidamente?",
      pasos: ["El acero es ferroso y lo atrae un imán.", "El aluminio no es ferroso y no lo atrae.", "Se pasa un imán (o electroimán) sobre la mezcla."],
      resultado: "Con un imán: se quedan pegadas las de acero." },
    { enunciado: "Para fabricar una lata de aluminio nueva se necesitan 100 unidades de energía. ¿Cuánta energía se necesita si se fabrica con aluminio reciclado (ahorro del 95 %)?",
      pasos: ["Ahorro: 95 % de 100 = 95 unidades.", "Energía necesaria: 100 − 95 = 5 unidades."],
      resultado: "Solo 5 unidades: veinte veces menos." },
  ],
  errores: [
    "Confundir mena (mineral útil) con ganga (roca sin valor).",
    "Pensar que el acero es un metal puro: es una aleación de hierro y carbono.",
    "Decir que todos los metales los atrae un imán: el aluminio o el cobre no.",
    "Confundir ductilidad (hilos) con maleabilidad (láminas).",
    "Creer que la fundición es «metal fundido»: es una aleación de hierro con mucho carbono.",
  ],
  ejercicios: [
    { q: "¿Qué es una mena? Pon dos ejemplos con su metal.", sol: "Un mineral del que se extrae un metal de forma rentable: hematites (hierro) y bauxita (aluminio)." },
    { q: "Escribe las etapas de la metalurgia.", sol: "Extracción, separación de mena y ganga, obtención del metal, afino y conformación." },
    { q: "Escribe cinco propiedades de los metales.", sol: "Brillo metálico, conductividad térmica y eléctrica, dureza y tenacidad, ductilidad y maleabilidad." },
    { q: "¿Qué es la oxidación y cómo se evita?", sol: "El deterioro del metal al reaccionar con el oxígeno y la humedad; con pinturas, recubrimientos (galvanizado) o usando acero inoxidable." },
    { q: "Diferencia entre metales ferrosos y no ferrosos con ejemplos.", sol: "Ferrosos: con hierro como base (acero, fundición). No ferrosos: el resto (cobre, aluminio)." },
    { q: "¿Qué es una aleación? Pon dos ejemplos.", sol: "Una mezcla de un metal con otros elementos; bronce (cobre y estaño) y latón (cobre y cinc)." },
    { q: "¿Qué se introduce en un alto horno y qué se obtiene?", sol: "Mineral de hierro, coque y caliza, con aire caliente; se obtiene arrabio y escoria." },
    { q: "Diferencia entre acero y fundición.", sol: "El acero tiene menos del 2 % de carbono y es tenaz; la fundición tiene más y es dura y frágil." },
    { q: "¿Por qué los cables de alta tensión son de aluminio y no de cobre?", sol: "Porque el aluminio es mucho más ligero y conduce bien la electricidad, y es más barato." },
    { q: "Escribe tres ventajas del reciclaje de metales.", sol: "Ahorra energía, evita abrir nuevas minas y reduce la contaminación y los residuos." },
  ],
  quiz: [
    { q: "El único metal líquido a temperatura ambiente es el…", o: ["mercurio", "plomo", "estaño"], a: 0, e: "Mercurio." },
    { q: "La roca sin valor que acompaña a la mena es la…", o: ["ganga", "escoria", "bauxita"], a: 0, e: "Ganga." },
    { q: "Estirar un metal en hilos es posible por su…", o: ["ductilidad", "maleabilidad", "fragilidad"], a: 0, e: "Ductilidad." },
    { q: "El papel de aluminio es posible por la…", o: ["maleabilidad", "ductilidad", "oxidación"], a: 0, e: "Maleabilidad." },
    { q: "El acero es hierro con…", o: ["un poco de carbono", "mucho estaño", "cobre"], a: 0, e: "Menos del 2 % de carbono." },
    { q: "El bronce es una aleación de…", o: ["cobre y estaño", "hierro y carbono", "cobre y cinc"], a: 0, e: "Cobre y estaño." },
    { q: "El metal más usado en cables eléctricos es el…", o: ["cobre", "plomo", "hierro"], a: 0, e: "Cobre." },
    { q: "El aluminio se obtiene de la…", o: ["bauxita", "galena", "hematites"], a: 0, e: "Bauxita." },
    { q: "El galvanizado protege el acero con…", o: ["cinc", "oro", "plomo"], a: 0, e: "Cinc." },
    { q: "Las latas van al contenedor…", o: ["amarillo", "azul", "verde"], a: 0, e: "Amarillo." },
  ],
  examen: [
    { q: "El acero inoxidable lleva…", o: ["cromo y níquel", "plomo", "estaño"], a: 0, e: "Cromo y níquel." },
    { q: "Pasar el metal entre rodillos para hacer chapas es la…", o: ["laminación", "forja", "trefilado"], a: 0, e: "Laminación." },
    { q: "El plomo hoy se usa poco porque…", o: ["es tóxico", "es caro", "es ligero"], a: 0, e: "Es tóxico." },
  ],
  feynman: ["Cómo se obtiene un metal a partir de un mineral", "Qué diferencia hay entre metales ferrosos y no ferrosos", "Por qué es tan importante reciclar los metales"],
  mapa: mapa("METALES", "var(--eso)", [
    ["Obtención", "mena · horno · afino", COL.marron],
    ["Propiedades", "conductores · dúctiles · maleables", COL.sol],
    ["Ferrosos", "hierro · acero · fundición", COL.gris],
    ["No ferrosos", "cobre · aluminio · aleaciones", COL.naranja],
  ], 300),
  tarjetas: [
    ["Mena", "Mineral del que se extrae un metal de forma rentable."],
    ["Metalurgia", "Procesos para obtener y preparar los metales."],
    ["Ductilidad", "Capacidad de estirarse en hilos."],
    ["Maleabilidad", "Capacidad de extenderse en láminas."],
    ["Acero", "Hierro con menos del 2 % de carbono: duro y tenaz."],
    ["Fundición", "Hierro con más del 2 % de carbono: duro y frágil."],
    ["Aleación", "Mezcla de un metal con otros elementos: bronce, latón."],
    ["Oxidación", "Deterioro del metal por el oxígeno y la humedad."],
  ],
  familias: ["Con un imán, comprobad qué objetos metálicos de casa son ferrosos.", "Buscad objetos oxidados y pensad cómo podrían haberse protegido.", "Llevad juntos al punto limpio un aparato viejo y comentad qué metales contiene."],
  profesores: {
    saberes: "Materiales metálicos: obtención y metalurgia, propiedades, metales ferrosos (hierro, acero, fundición) y no ferrosos, aleaciones, técnicas de conformación y trabajo en el taller, oxidación y reciclaje (RD 217/2022, Tecnología y Digitalización, bloques Proceso de resolución de problemas y Tecnología sostenible).",
    ideas: ["Ensayo de conductividad térmica con varillas de distintos metales y cera.", "Experimento de oxidación de clavos en agua, agua salada, aceite y aire seco.", "Proyecto de un llavero o soporte de alambre y chapa de aluminio."],
  },
  fuentes: [RD, wiki("Metal", "Metal"), wiki("Acero", "Acero"), { t: "Ecoembes: reciclaje de envases metálicos", url: "https://www.ecoembes.com/" }],
  revisado: REV,
};
