// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "Impactos ambientales y sostenibilidad",
  minutos: 110,
  objetivos: [
    "Identificar los principales impactos humanos sobre la atmósfera, el agua, el suelo y los seres vivos",
    "Explicar el efecto invernadero, el cambio climático y las medidas de mitigación y adaptación",
    "Explicar la lluvia ácida, el agujero de la capa de ozono y la contaminación del agua y del suelo",
    "Analizar las causas de la pérdida de biodiversidad y las medidas de conservación",
    "Calcular y reducir la huella ecológica y aplicar la economía circular",
    "Proponer medidas de desarrollo sostenible a escala personal, local y global",
  ],
  claves: ["impacto ambiental", "efecto invernadero", "cambio climático", "biodiversidad", "desarrollo sostenible", "huella ecológica"],
  pregunta: {
    texto: "Si toda la humanidad viviera como la media de los españoles, necesitaríamos unas 2,5 Tierras. ¿Qué significa eso?",
    respuesta: "Que <mark>consumimos recursos más deprisa</mark> de lo que el planeta los regenera y producimos más residuos de los que puede absorber. Es la <b>huella ecológica</b>. El reto del <b>desarrollo sostenible</b> es cubrir nuestras necesidades sin dejar sin recursos a las generaciones futuras.",
  },
  lectura: {
    titulo: "El agujero que se cerró",
    html: `<p>En 1985, tres científicos británicos que trabajaban en la Antártida publicaron un dato alarmante: cada primavera austral, la capa de ozono sobre el polo sur se reducía a la mitad. El ozono de la estratosfera nos protege de la radiación ultravioleta del Sol, que provoca cáncer de piel, cataratas y daña a las plantas y al plancton. La causa eran unos gases que parecían inofensivos, los CFC, que se usaban en aerosoles, frigoríficos y aires acondicionados.</p>
<p>La respuesta fue sorprendentemente rápida. En 1987, los países del mundo firmaron el Protocolo de Montreal para dejar de fabricar CFC. Las empresas encontraron sustitutos, y hoy el protocolo lo han ratificado todos los países de la ONU. Los científicos calculan que la capa de ozono se recuperará a lo largo de este siglo, hacia 2066 sobre la Antártida.</p>
<p>Esta historia demuestra que los problemas ambientales globales tienen solución cuando la ciencia avisa, la sociedad escucha y los gobiernos cooperan. Hoy afrontamos retos mayores, como el cambio climático o la pérdida de biodiversidad. En este tema estudiarás sus causas, sus consecuencias y lo que podemos hacer, desde los acuerdos internacionales hasta lo que comes o cómo vas al instituto.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es un impacto ambiental</h3><p>Un <mark>impacto ambiental</mark> es cualquier alteración del medio, positiva o negativa, causada por la actividad humana. Los impactos negativos pueden afectar a la <b>atmósfera</b> (contaminación del aire, cambio climático), a la <b>hidrosfera</b> (vertidos, sobreexplotación de acuíferos, plásticos en el mar), a la <b>geosfera</b> y al suelo (erosión, desertificación, residuos) y a la <b>biosfera</b> (pérdida de especies y de ecosistemas).</p><p>Los impactos pueden ser <b>locales</b>, como el vertido de una fábrica en un río, o <b>globales</b>, como el cambio climático, que afecta a todo el planeta aunque las emisiones procedan de lugares concretos. Pueden ser <b>reversibles</b>, si el medio se recupera al cesar la causa, o <b>irreversibles</b>, como la extinción de una especie.</p><p>La magnitud de los impactos depende de tres factores: el tamaño de la <b>población</b>, que ha pasado de 1.000 millones de personas en 1800 a más de 8.000 millones; el nivel de <b>consumo</b> de cada persona; y la <b>tecnología</b> empleada, que puede aumentar los impactos o reducirlos.</p><p>Antes de construir una carretera, un embalse o una fábrica, la ley obliga en España y en la Unión Europea a hacer una <b>evaluación de impacto ambiental</b>, un estudio que prevé sus efectos y propone medidas para evitarlos o corregirlos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Impactos en el aire, el agua y el suelo: chimenea, vertido y suelo erosionado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="70" width="22" height="80" fill="var(--muted)"/><path d="M40 66 Q 30 40 50 30 Q 70 20 64 4" fill="none" stroke="var(--muted)" stroke-width="8" opacity=".5"/>
        <path d="M100 150 Q 130 140 160 150 V 166 H 100 Z" fill="var(--water)" opacity=".5"/><path d="M128 110 V 146" stroke="var(--ink)" stroke-width="5"/><path d="M128 146 Q 132 152 128 158" stroke="var(--sun)" stroke-width="4" fill="none"/>
        <path d="M180 150 L 196 128 L 212 146 L 226 120 L 246 150 Z" fill="var(--sun)" opacity=".6"/><path d="M196 140 l 6 6 M218 136 l 6 6" stroke="var(--ink)" stroke-width="1.5"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="42" y="168" fill="var(--ink)">aire</text><text x="130" y="100" fill="var(--ink)">agua</text><text x="214" y="168" fill="var(--ink)">suelo</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 Los recursos naturales</h3><p>Los <mark>recursos naturales</mark> son los materiales y la energía que obtenemos de la naturaleza para satisfacer nuestras necesidades: agua, suelo, alimentos, madera, minerales, combustibles o el paisaje. Se clasifican en:</p><p>• <b>Renovables</b>: se regeneran a un ritmo igual o mayor que el de su consumo, como la energía solar, el viento, el agua o la madera de un bosque bien gestionado. Pero un recurso renovable puede agotarse si se <b>sobreexplota</b>: si se pesca más rápido de lo que los peces se reproducen, el caladero se agota, como ocurrió con el bacalao de Terranova en 1992. Lo mismo pasa con un acuífero del que se extrae más agua de la que entra.<br>• <b>No renovables</b>: existen en cantidades limitadas o se forman a lo largo de millones de años, mucho más despacio de lo que se consumen. Son los combustibles fósiles (carbón, petróleo, gas natural), el uranio y los minerales. Algunos, como los metales, pueden <b>reciclarse</b>; los combustibles fósiles, no: al quemarlos, desaparecen.</p><p>La extracción y el uso de recursos causan impactos: las minas a cielo abierto destruyen el paisaje, la extracción de petróleo provoca vertidos y la tala de bosques reduce la biodiversidad. Por eso, la <b>gestión sostenible</b> busca usar los recursos renovables sin superar su ritmo de regeneración, sustituir los no renovables por renovables siempre que sea posible y aprovechar al máximo los materiales mediante la reutilización y el reciclaje.</p>`,
      svg: L6.compara("Recursos renovables y no renovables", ["Renovables", "var(--leaf)", ["se regeneran", "sol, viento, agua", "madera, pesca", "se agotan si se sobreexplotan"]], ["No renovables", "var(--red)", ["cantidad limitada", "carbón, petróleo, gas", "uranio, minerales", "tardan millones de años"]]),
    },
    {
      html: `<h3>2.1 El cambio climático</h3><p>Algunos gases de la atmósfera, como el <b>vapor de agua</b>, el <b>dióxido de carbono</b> (CO₂), el <b>metano</b> (CH₄) y el <b>óxido nitroso</b> (N₂O), dejan pasar la luz del Sol pero retienen parte del calor que la Tierra emite hacia el espacio. Es el <mark>efecto invernadero</mark>, un fenómeno natural y necesario: sin él, la temperatura media de la Tierra sería de unos −18 °C en lugar de 15 °C.</p><p>El problema es su <b>intensificación</b>. Desde la Revolución Industrial, las actividades humanas han aumentado mucho la concentración de estos gases:</p><p>• La <b>quema de combustibles fósiles</b> en centrales eléctricas, industrias, transporte y calefacción es la principal fuente de CO₂.<br>• La <b>deforestación</b>, sobre todo de las selvas tropicales, libera el carbono de los árboles y elimina sumideros.<br>• La <b>ganadería</b> (la digestión de las vacas), los arrozales y los vertederos emiten metano, un gas unas 28 veces más potente que el CO₂ en cien años.<br>• Los <b>abonos</b> nitrogenados emiten óxido nitroso.</p><p>El resultado es el <mark>calentamiento global</mark>. La temperatura media del planeta ya ha subido alrededor de 1,2 °C respecto a la época preindustrial, y 2024 fue el año más cálido registrado. Los científicos del IPCC, el grupo de expertos de la ONU, concluyen que es «inequívoco» que la influencia humana ha calentado la atmósfera, el océano y la tierra. Hay que distinguir el <b>tiempo</b> (lo que ocurre un día concreto) del <b>clima</b> (la media de muchos años): un invierno frío no desmiente el calentamiento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efecto invernadero: la luz del Sol entra, la Tierra emite calor y los gases devuelven una parte">
        <defs>${flecha("ia1", "var(--sun)")}${flecha("ia2", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 150 Q 130 120 250 150 V 170 H 10 Z" fill="var(--leaf)" opacity=".5"/>
        <path d="M10 50 Q 130 30 250 50" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".4"/>
        <circle cx="34" cy="22" r="14" fill="var(--sun)"/>
        <path d="M46 30 L 110 134" stroke="var(--sun)" stroke-width="3" marker-end="url(#ia1)"/>
        <path d="M130 134 L 160 54" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#ia2)"/>
        <path d="M166 50 L 196 130" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#ia2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="170" y="30" fill="var(--muted)">CO₂, CH₄</text><text x="246" y="96" text-anchor="end" fill="var(--red)">calor devuelto</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.2 Consecuencias y respuestas al cambio climático</h3><p>El calentamiento global tiene consecuencias que ya se observan:</p><p>• <b>Olas de calor</b> más frecuentes e intensas, <b>sequías</b> más largas e incendios forestales más grandes. España, en la región mediterránea, es una de las zonas más afectadas de Europa.<br>• <b>Lluvias torrenciales</b> más intensas, porque un aire más cálido contiene más vapor de agua.<br>• <b>Deshielo</b> de glaciares de montaña y de los casquetes de Groenlandia y la Antártida, y reducción del hielo del Ártico.<br>• <b>Subida del nivel del mar</b>, unos 20 cm desde 1900, por el agua del deshielo y la dilatación del océano al calentarse. Amenaza deltas, playas y ciudades costeras.<br>• <b>Acidificación del océano</b> y calentamiento del agua, que blanquea y mata los corales.<br>• Cambios en la distribución de las especies, que suben en altitud o se desplazan hacia los polos, y extinciones de las que no pueden hacerlo.</p><p>Frente al cambio climático hay dos tipos de respuestas. La <mark>mitigación</mark> consiste en reducir sus causas: sustituir los combustibles fósiles por energías renovables, mejorar la eficiencia energética, electrificar el transporte, proteger y plantar bosques. El <b>Acuerdo de París</b> (2015) compromete a casi todos los países a limitar el calentamiento muy por debajo de 2 °C y, si es posible, a 1,5 °C. La Unión Europea se ha propuesto alcanzar la neutralidad climática en 2050. La <mark>adaptación</mark> consiste en prepararse para los efectos inevitables: cultivos resistentes a la sequía, ciudades con más sombra y zonas verdes, protección de las costas o sistemas de alerta ante olas de calor.</p>`,
      svg: L6.compara("Mitigación y adaptación al cambio climático", ["Mitigación", "var(--leaf)", ["reducir las causas", "energías renovables", "eficiencia", "proteger bosques"]], ["Adaptación", "var(--pen)", ["prepararse", "cultivos resistentes", "ciudades con sombra", "alertas de calor"]]),
    },
    {
      html: `<h3>2.3 Contaminación atmosférica: lluvia ácida y capa de ozono</h3><p>Además del CO₂, la actividad humana emite otros <mark>contaminantes atmosféricos</mark>. Los óxidos de <b>azufre</b> (SO₂), procedentes de la quema de carbón y petróleo, y los óxidos de <b>nitrógeno</b> (NOₓ), de los motores de los coches y las centrales térmicas, reaccionan con el agua de la atmósfera y forman ácido sulfúrico y ácido nítrico. Estos ácidos caen con la lluvia, la nieve o la niebla, a veces a cientos de kilómetros de su origen: es la <mark>lluvia ácida</mark>. Daña los bosques, acidifica los lagos hasta dejarlos sin peces y corroe los monumentos de piedra caliza y mármol. En Europa se redujo mucho al filtrar las chimeneas y usar combustibles con menos azufre.</p><p>En las ciudades, los óxidos de nitrógeno, las <b>partículas</b> finas de los motores diésel y el ozono que se forma a ras de suelo crean la «boina» de contaminación, o <i>smog</i>, que causa enfermedades respiratorias y cardiovasculares. Las <b>zonas de bajas emisiones</b> de las ciudades buscan reducirla.</p><p>Otro problema fue el <mark>agujero de la capa de ozono</mark>. El ozono de la estratosfera, entre 15 y 35 km de altura, absorbe la mayor parte de la radiación ultravioleta. Los CFC lo destruían. Gracias al <b>Protocolo de Montreal</b> (1987), la capa se está recuperando. Es un problema distinto del cambio climático, aunque a menudo se confundan.</p>`,
      svg: L6.flujo("Formación de la lluvia ácida: emisiones, reacción con el agua, lluvia y daños", ["Chimeneas y coches emiten SO₂ y NOₓ", "Reaccionan con el agua del aire", "Forman ácidos que caen con la lluvia", "Dañan bosques, lagos y monumentos"], "La lluvia ácida"),
    },
    {
      html: `<h3>2.4 El agua: contaminación y sobreexplotación</h3><p>Solo el 2,5 % del agua de la Tierra es dulce, y la mayor parte está helada o bajo tierra. El <mark>agua dulce</mark> disponible es un recurso escaso y mal repartido, y la actividad humana la amenaza de dos formas.</p><p>La <b>contaminación del agua</b> se produce por:</p><p>• <b>Vertidos urbanos</b> de aguas residuales con materia orgánica, detergentes y microorganismos, si no se depuran.<br>• <b>Vertidos industriales</b> con metales pesados como el mercurio o el plomo y otras sustancias tóxicas.<br>• La <b>agricultura y la ganadería</b>, que aportan nitratos, fosfatos y pesticidas. El exceso de nutrientes causa la <b>eutrofización</b>, como en el Mar Menor, y los nitratos contaminan los acuíferos y hacen el agua no potable.<br>• Los <b>plásticos</b>, que llegan al mar y se fragmentan en <b>microplásticos</b>, que ingieren los peces y ya se encuentran en la sal, el agua embotellada y nuestro propio cuerpo.</p><p>La <b>sobreexplotación</b> se produce cuando se extrae más agua de la que se renueva. En España, el regadío consume alrededor del 80 % del agua. Muchos acuíferos están sobreexplotados, como el que alimenta las Tablas de Daimiel, que llegaron a secarse, o el de Doñana. En la costa, el bombeo excesivo provoca la entrada de agua de mar.</p><p>Las soluciones son <b>depurar</b> las aguas residuales y reutilizarlas, usar el <b>riego por goteo</b>, reducir los abonos, controlar los pozos ilegales y ahorrar agua en casa.</p>`,
      svg: L6.radial("Causas de la contaminación del agua", "Agua contaminada", ["Aguas residuales urbanas", "Vertidos industriales", "Nitratos y pesticidas", "Plásticos y microplásticos"], "var(--pen)"),
    },
    {
      html: `<h3>2.5 El suelo: erosión y desertificación</h3><p>El <mark>suelo</mark> es un recurso que tarda cientos o miles de años en formarse, pero puede perderse en pocos años. Es la base de la agricultura y de los ecosistemas terrestres, almacena agua y carbono y alberga una enorme cantidad de seres vivos.</p><p>Sus principales amenazas son:</p><p>• La <b>erosión</b>: cuando se elimina la vegetación por la tala, los incendios, el sobrepastoreo o el arado en pendiente, la lluvia y el viento arrastran el suelo fértil. España es uno de los países europeos con más erosión.<br>• La <b>desertificación</b>: es la degradación de las tierras en zonas áridas, semiáridas y subhúmedas secas por la acción combinada del clima (sequías) y de las actividades humanas. Según el Ministerio para la Transición Ecológica, más del 70 % del territorio español está en zonas susceptibles de desertificación, sobre todo en el sureste y en las Canarias. No debe confundirse con la <b>desertización</b>, que es el avance natural de un desierto.<br>• La <b>contaminación</b> del suelo por residuos, vertederos, metales pesados de la minería o un uso excesivo de pesticidas.<br>• La <b>salinización</b>, por regar con agua salobre en climas secos.<br>• El <b>sellado</b> del suelo: la construcción de ciudades, carreteras y polígonos lo cubre de asfalto y hormigón y lo inutiliza para siempre.</p><p>Para protegerlo se reforestan las zonas degradadas, se practican técnicas de conservación como las terrazas, los cultivos en curvas de nivel o mantener cubierta vegetal, y se lucha contra los incendios.</p>`,
      svg: L6.radial("Amenazas del suelo", "Suelo", ["Erosión", "Desertificación", "Contaminación", "Salinización y sellado"], "var(--sun)"),
    },
    {
      html: `<h3>3.1 La pérdida de biodiversidad</h3><p>La <mark>biodiversidad</mark> es la variedad de la vida en todos sus niveles: la diversidad <b>genética</b> dentro de cada especie, la diversidad de <b>especies</b> y la diversidad de <b>ecosistemas</b>. Se han descrito unos 2 millones de especies, pero se calcula que puede haber muchas más.</p><p>La biodiversidad nos proporciona <b>servicios ecosistémicos</b> imprescindibles: alimentos, madera, medicamentos (muchos proceden de plantas y hongos), la polinización de los cultivos por los insectos, la depuración del agua, la formación del suelo, la regulación del clima y el disfrute del paisaje.</p><p>Hoy las especies se extinguen a un ritmo de decenas a cientos de veces mayor que el natural, y muchos científicos hablan de una <b>sexta extinción masiva</b>, esta vez causada por los humanos. Según el informe de la IPBES (2019), alrededor de un millón de especies están amenazadas. Las cinco causas principales son:</p><p>1) La <b>destrucción y fragmentación de hábitats</b>, por la deforestación, la agricultura intensiva y la urbanización: es la principal.<br>2) La <b>sobreexplotación</b>: caza, pesca excesiva y comercio ilegal de especies.<br>3) La <b>contaminación</b> del aire, el agua y el suelo.<br>4) Las <b>especies invasoras</b>.<br>5) El <b>cambio climático</b>.</p><p>Perder especies debilita los ecosistemas: las redes tróficas se simplifican y se vuelven más frágiles.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cinco causas principales de pérdida de biodiversidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["destrucción de hábitats", "var(--red)", 220], ["sobreexplotación", "var(--sun)", 190], ["cambio climático", "var(--pen)", 170], ["contaminación", "var(--muted)", 150], ["especies invasoras", "var(--leaf)", 140]].map(([t, c, w], i) => `<rect x="14" y="${22 + i * 30}" width="${w}" height="22" rx="5" fill="${c}" opacity=".85"/><text x="20" y="${37 + i * 30}" font-size="11" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>3.2 Espacios protegidos y especies invasoras</h3><p>Para conservar la biodiversidad se crean <mark>espacios naturales protegidos</mark>, con distintos niveles de protección. En España hay 16 <b>parques nacionales</b>, como Doñana, el Teide, Picos de Europa, Ordesa o Cabrera; además, parques naturales, reservas y monumentos naturales, y espacios de la <b>Red Natura 2000</b> de la Unión Europea, que cubre alrededor del 27 % del territorio español.</p><p>También se elaboran <b>planes de recuperación</b> de especies amenazadas, con cría en cautividad, protección del hábitat y reintroducción. El caso del <b>lince ibérico</b> es un éxito mundial: en 2002 quedaban menos de 100 ejemplares, y en 2024 se superaron los 2.000. También se han recuperado el quebrantahuesos, el águila imperial ibérica y el oso pardo cantábrico.</p><p>Una amenaza creciente son las <mark>especies invasoras</mark>: especies introducidas por el ser humano, de forma voluntaria o accidental, fuera de su área natural, que se expanden y desplazan a las autóctonas, porque compiten con ellas, las depredan o les transmiten enfermedades. Ejemplos en España: el <b>mejillón cebra</b>, que obstruye tuberías en el Ebro; el <b>cangrejo rojo americano</b>, que transmitió una enfermedad al cangrejo autóctono; la <b>cotorra argentina</b> en las ciudades; el <b>visón americano</b>, que desplaza al europeo; o el <b>camalote</b>, que cubre el Guadiana. Nunca hay que liberar mascotas exóticas en la naturaleza.</p>`,
      svg: L6.linea("Recuperación del lince ibérico de 2002 a 2024", [["2002", "menos de 100"], ["2010", "unos 300"], ["2015", "unos 500"], ["2020", "más de 1.100"], ["2024", "más de 2.000"]], "El lince ibérico"),
    },
    {
      html: `<h3>4.1 Residuos y energía</h3><p>Generamos enormes cantidades de <mark>residuos</mark>: cada español produce unos 470 kg de residuos urbanos al año. Muchos acaban en <b>vertederos</b>, que ocupan suelo, emiten metano y pueden contaminar las aguas subterráneas, o se incineran. La gestión de los residuos sigue una jerarquía, la regla de las <b>tres erres</b>, de lo mejor a lo peor:</p><p>1) <b>Reducir</b>: lo mejor es no generar el residuo, por ejemplo evitando los envases innecesarios y el usar y tirar.<br>2) <b>Reutilizar</b>: dar más usos a un objeto, como una botella rellenable o ropa de segunda mano.<br>3) <b>Reciclar</b>: transformar el residuo en materia prima para fabricar productos nuevos. Para ello hay que separarlo bien: contenedor amarillo (envases), azul (papel y cartón), verde (vidrio), marrón (orgánico) y gris (resto). Los residuos peligrosos, como pilas, aceite o aparatos electrónicos, se llevan a los puntos limpios.</p><p>Solo después viene la valorización energética (incineración) y, en último lugar, el vertedero.</p><p>La <mark>energía</mark> es la clave de la sostenibilidad, porque su producción a partir de combustibles fósiles es la mayor fuente de gases de efecto invernadero. Hay que avanzar hacia las <b>energías renovables</b>: solar, eólica, hidráulica, biomasa y geotérmica. En España ya generan más de la mitad de la electricidad. Pero la energía más limpia es la que no se consume: la <b>eficiencia energética</b> (aislamiento de edificios, bombillas LED, electrodomésticos eficientes) y el <b>ahorro</b> son igual de importantes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide invertida de residuos: reducir arriba, reutilizar, reciclar y vertedero abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["reducir", 220, "var(--leaf)"], ["reutilizar", 170, "var(--pen)"], ["reciclar", 120, "var(--sun)"], ["vertedero", 70, "var(--red)"]].map(([t, w, c], i) => `<rect x="${130 - w / 2}" y="${20 + i * 36}" width="${w}" height="30" rx="5" fill="${c}"/><text x="130" y="${40 + i * 36}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <text x="130" y="172" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>de mejor (arriba) a peor (abajo)</text>
      </svg>`,
    },
    {
      html: `<h3>4.2 La huella ecológica</h3><p>La <mark>huella ecológica</mark> mide la superficie de tierra y mar biológicamente productiva que hace falta para producir todo lo que consume una persona o un país (alimentos, energía, madera, materiales) y absorber sus residuos, especialmente el CO₂. Se expresa en <b>hectáreas globales</b> por persona.</p><p>La <b>biocapacidad</b> del planeta, la superficie productiva disponible, es de alrededor de 1,6 hectáreas globales por habitante. Pero la huella media mundial ronda las 2,6: estamos consumiendo como si tuviéramos más de un planeta y medio. Cada año, la organización Global Footprint Network calcula el <b>Día de la Sobrecapacidad de la Tierra</b>, la fecha en la que la humanidad ha consumido los recursos que el planeta puede regenerar en un año; en los últimos años ha caído a finales de julio o principios de agosto. Si todos viviéramos como un español medio, necesitaríamos unas 2,5 Tierras; como un estadounidense medio, unas cinco.</p><p>La mayor parte de la huella de los países ricos se debe a la <b>huella de carbono</b>, la superficie de bosque necesaria para absorber el CO₂ emitido. Otra medida relacionada es la <b>huella hídrica</b>, el agua necesaria para producir lo que consumimos: unos 15.000 litros por kilo de carne de vaca.</p><p>La huella se reduce consumiendo menos energía, usando el transporte público, la bici o yendo a pie, comiendo menos carne y más productos locales y de temporada, evitando el desperdicio de comida y comprando solo lo necesario.</p>`,
      svg: L6.barras("Planetas necesarios si todos vivieran como un habitante medio de cada país", [["Mundo", 34, "1,7"], ["España", 50, "2,5"], ["EE. UU.", 100, "5"]], "Planetas Tierra necesarios", 100),
      video: { id: "TM2Be7MqykY", titulo: "¿Qué es la huella ecológica? Calcular huella ecológica", canal: "EcologíaVerde", vistas: 360483 },
    },
    {
      html: `<h3>4.3 El desarrollo sostenible</h3><p>El concepto de <mark>desarrollo sostenible</mark> se definió en el informe Brundtland de la ONU (1987): es el desarrollo que <b>satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras</b> para satisfacer las suyas. Une tres dimensiones que deben equilibrarse:</p><p>• <b>Ambiental</b>: conservar los recursos y los ecosistemas.<br>• <b>Social</b>: garantizar la igualdad, la salud, la educación y el bienestar de todas las personas.<br>• <b>Económica</b>: generar riqueza y empleo de forma duradera.</p><p>En 2015, la ONU aprobó la <b>Agenda 2030</b>, con 17 <mark>Objetivos de Desarrollo Sostenible</mark> (ODS), como el fin de la pobreza y el hambre, la salud y el bienestar, la educación de calidad, el agua limpia, la energía asequible y no contaminante, la acción por el clima, la vida submarina y la vida de ecosistemas terrestres.</p><p>Las medidas para avanzar hacia la sostenibilidad se toman a distintas escalas:</p><p>• <b>Global</b>: acuerdos internacionales como el Protocolo de Montreal, el Acuerdo de París o el Convenio sobre la Diversidad Biológica.<br>• <b>Nacional y local</b>: leyes ambientales, impuestos a la contaminación, transporte público, carriles bici, depuradoras o espacios protegidos.<br>• <b>Personal</b>: moverse a pie, en bici o en transporte público, consumir producto local y de temporada, ahorrar agua y energía, reducir los residuos y participar en iniciativas de mejora del entorno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos que se cruzan: ambiental, social y económico; en el centro, sostenible">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="104" cy="70" r="46" fill="var(--leaf)" opacity=".35"/><circle cx="156" cy="70" r="46" fill="var(--pen)" opacity=".35"/><circle cx="130" cy="112" r="46" fill="var(--sun)" opacity=".35"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="84" y="56" fill="var(--ink)">ambiental</text><text x="178" y="56" fill="var(--ink)">social</text><text x="130" y="146" fill="var(--ink)">económico</text><text x="130" y="90" font-size="10" fill="var(--red)">sostenible</text></g>
      </svg>`,
    },
    {
      html: `<h3>4.4 La economía circular</h3><p>La economía tradicional es <b>lineal</b>: extraer materias primas, fabricar, usar y tirar. Este modelo agota los recursos y genera montañas de residuos. La <mark>economía circular</mark> propone que los productos y los materiales se mantengan en uso el mayor tiempo posible y que los residuos se conviertan en recursos para fabricar otros productos.</p><p>Se basa en ampliar las «erres»: <b>repensar</b> lo que de verdad necesitamos, <b>reducir</b> el consumo, <b>reutilizar</b>, <b>reparar</b>, <b>reacondicionar</b> (poner a punto productos usados para venderlos de nuevo) y, en último lugar, <b>reciclar</b>.</p><p>También exige el <b>ecodiseño</b>: diseñar los productos desde el principio para que duren, se puedan arreglar y se desmonten fácilmente para recuperar sus materiales. Frente a ello está la <b>obsolescencia programada</b>, el diseño de productos para que dejen de funcionar o queden anticuados antes de tiempo.</p><p>Algunos ejemplos de economía circular: alquilar o compartir en vez de comprar (bicis o coches compartidos), comprar ropa y aparatos de segunda mano, hacer <b>compost</b> con los restos orgánicos para abonar, devolver los envases, o aprovechar los residuos de una industria como materia prima de otra. La Unión Europea ha aprobado normas como el <b>derecho a la reparación</b> de los aparatos.</p>`,
      svg: L6.ciclo("Economía circular: diseñar, producir, usar, reparar y reciclar", "Circular", ["Ecodiseño", "Producir", "Usar y compartir", "Reparar", "Reciclar"], "var(--leaf)"),
      video: { id: "Lc4-2cVKxp0", titulo: "Economía circular: descubre lo que es", canal: "COTEC", vistas: 3154048 },
    },
  ],
  figura: {
    titulo: "Del problema a la solución",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Cuatro problemas ambientales con una medida para cada uno">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Cambio climático", "más CO₂", "renovables y", "menos coche", "var(--red)"], ["Biodiversidad", "hábitats perdidos", "espacios", "protegidos", "var(--leaf)"], ["Residuos", "plásticos, basura", "reducir, reutilizar", "y reciclar", "var(--sun)"], ["Agua", "escasez, vertidos", "ahorrar y", "depurar", "var(--water)"]]
        .map(([n, p, s1, s2, c], i) => `<rect x="${16 + i * 154}" y="20" width="146" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="56" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="92" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${p}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${s1}</text>
          <text x="${89 + i * 154}" y="162" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${s2}</text>`).join("")}
    </svg>`,
  },
  video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359316, megusta: 0, busqueda: "impactos ambientales desarrollo sostenible" },
  ejemplos: [
    { enunciado: "Un país tiene una huella ecológica de 4 hectáreas globales por persona y la biocapacidad del planeta es de 1,6 por persona. ¿Cuántos planetas harían falta si todos vivieran así?", pasos: ["Se divide la huella entre la biocapacidad disponible por persona.", "4 / 1,6 = 2,5."], resultado: "Harían falta 2,5 planetas." },
    { enunciado: "Explica cómo se forma la lluvia ácida y propón dos soluciones.", pasos: ["Al quemar carbón y derivados del petróleo se emiten óxidos de azufre y de nitrógeno.", "En la atmósfera reaccionan con el agua y forman ácido sulfúrico y ácido nítrico.", "Caen con la lluvia y dañan bosques, lagos y edificios.", "Soluciones: filtros en las chimeneas y sustituir los combustibles fósiles por renovables."], resultado: "La causan los óxidos de S y N; se reduce con filtros y energías limpias." },
    { enunciado: "Clasifica estas acciones según las «erres»: arreglar una bici, llevar botellas al contenedor verde, comprar a granel, usar un tarro de mermelada para guardar botones.", pasos: ["Arreglar la bici: reparar.", "Contenedor verde: reciclar.", "Comprar a granel: reducir envases.", "Usar el tarro para otra cosa: reutilizar."], resultado: "Reparar, reciclar, reducir y reutilizar." },
    { enunciado: "Un coche emite 120 g de CO₂ por kilómetro. Si un alumno va al instituto en coche, a 5 km de ida y 5 de vuelta, 175 días al año, ¿cuánto CO₂ se emite? ¿Y si va en bici?", pasos: ["Distancia diaria = 10 km.", "Distancia anual = 10 · 175 = 1.750 km.", "CO₂ = 1.750 · 120 g = 210.000 g = 210 kg.", "En bici, las emisiones directas son 0."], resultado: "Unos 210 kg de CO₂ al año en coche, que la bici o ir a pie evitan." },
    { enunciado: "Una familia genera 1,3 kg de residuos al día por persona y son cuatro. Si el 40 % es materia orgánica que podrían compostar, ¿cuántos kilos dejarían de ir al contenedor en un año?", pasos: ["Residuos diarios = 1,3 · 4 = 5,2 kg.", "Orgánico diario = 5,2 · 0,40 = 2,08 kg.", "Anual = 2,08 · 365 ≈ 759 kg."], resultado: "Unos 760 kg al año, que además se convertirían en abono." },
    { enunciado: "La concentración de CO₂ era de unos 280 ppm en 1800 y de unos 420 ppm en 2024. ¿Cuánto ha aumentado en porcentaje? ¿A qué ritmo medio anual?", pasos: ["Aumento = 420 − 280 = 140 ppm.", "Porcentaje = 140 / 280 · 100 = 50 %.", "Años = 2024 − 1800 = 224.", "Ritmo medio = 140 / 224 ≈ 0,6 ppm/año (hoy es más de 2 ppm/año)."], resultado: "Ha aumentado un 50 %, y el ritmo se ha acelerado mucho en las últimas décadas." },
  ],
  errores: [
    "Confundir el agujero de la capa de ozono con el cambio climático: son problemas distintos con causas distintas.",
    "Pensar que el efecto invernadero es malo en sí: sin él la Tierra estaría a −18 °C; el problema es su aumento.",
    "Creer que reciclar es lo más importante: reducir y reutilizar ahorran más recursos.",
    "Confundir tiempo meteorológico (lo que pasa hoy) con clima (la media de muchos años).",
    "Pensar que una especie invasora es cualquier especie exótica: es la que se expande y daña a las autóctonas.",
    "Confundir desertificación (degradación de la tierra por el clima y la acción humana) con desertización (avance natural de un desierto).",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Indica tres gases de efecto invernadero y su origen.", sol: "CO₂ (combustibles fósiles y deforestación), metano (ganadería, arrozales, vertederos) y óxido nitroso (fertilizantes)." } },
    { nivel: "básico", ...{ q: "Indica cuatro consecuencias del cambio climático.", sol: "Subida del nivel del mar, olas de calor y sequías más frecuentes, deshielo de glaciares y polos, y desplazamiento o extinción de especies." } },
    { nivel: "básico", ...{ q: "Indica tres causas de pérdida de biodiversidad.", sol: "La destrucción de hábitats, la contaminación y las especies invasoras (también la sobreexplotación y el cambio climático)." } },
    { nivel: "básico", ...{ q: "Calcula cuántos planetas harían falta si la huella media fuera de 2,6 hectáreas globales y la biocapacidad de 1,6.", sol: "2,6 / 1,6 ≈ 1,6 planetas." } },
    { nivel: "básico", ...{ q: "Propón cinco acciones para reducir tu huella ecológica.", sol: "Ir andando, en bici o en transporte público; ahorrar luz y calefacción; comer más vegetales y productos de temporada; no desperdiciar comida; comprar menos y reutilizar o reparar." } },
    { nivel: "básico", ...{ q: "¿Qué es una especie invasora? Pon dos ejemplos de España.", sol: "Una especie introducida que se expande y desplaza a las autóctonas. Ejemplos: el mejillón cebra y el cangrejo rojo americano (también la cotorra argentina)." } },
    { nivel: "básico", q: "Clasifica estos recursos en renovables y no renovables: petróleo, viento, madera, uranio, agua, carbón.", sol: "Renovables: viento, madera, agua. No renovables: petróleo, uranio, carbón." },
    { nivel: "básico", q: "¿Qué es un impacto ambiental? Pon un ejemplo local y otro global.", sol: "Cualquier alteración del medio causada por la actividad humana. Local: vertido de una fábrica en un río. Global: el cambio climático." },
    { nivel: "básico", q: "Indica en qué contenedor se depositan: un brik, un periódico, un tarro de cristal, una piel de plátano y unas pilas.", sol: "Brik: amarillo. Periódico: azul. Tarro: verde. Piel de plátano: marrón (orgánico). Pilas: punto limpio o contenedor específico." },
    { nivel: "básico", q: "Nombra cuatro energías renovables.", sol: "Solar, eólica, hidráulica, biomasa (también geotérmica y mareomotriz)." },
    { nivel: "básico", q: "¿Qué es la biodiversidad y qué tres niveles tiene?", sol: "La variedad de la vida: diversidad genética, de especies y de ecosistemas." },
    { nivel: "básico", q: "Nombra tres parques nacionales españoles.", sol: "Doñana, Teide, Picos de Europa (también Ordesa, Cabrera, Garajonay, Sierra Nevada…)." },
    { nivel: "medio", ...{ q: "¿Qué diferencia hay entre mitigar y adaptarse al cambio climático?", sol: "Mitigar es reducir sus causas (emitir menos gases); adaptarse es prepararse para sus efectos (proteger costas, ahorrar agua)." } },
    { nivel: "medio", ...{ q: "¿Por qué se considera un éxito el Protocolo de Montreal?", sol: "Porque casi todos los países prohibieron los CFC y la capa de ozono se está recuperando: demuestra que la cooperación internacional puede resolver un problema global." } },
    { nivel: "medio", ...{ q: "Explica la diferencia entre economía lineal y circular.", sol: "La lineal extrae, fabrica, usa y tira. La circular mantiene los materiales en uso el mayor tiempo posible y convierte los residuos en recursos." } },
    { nivel: "medio", ...{ q: "Explica qué son los Objetivos de Desarrollo Sostenible.", sol: "17 metas aprobadas por la ONU para 2030 que buscan acabar con la pobreza, proteger el planeta y asegurar la prosperidad de todos, como la acción por el clima o el agua limpia." } },
    { nivel: "medio", q: "¿Por qué un recurso renovable puede agotarse? Pon un ejemplo.", sol: "Si se consume más rápido de lo que se regenera (sobreexplotación). Ejemplo: el bacalao de Terranova, agotado por la pesca excesiva en 1992, o un acuífero sobreexplotado." },
    { nivel: "medio", q: "Explica por qué un invierno muy frío no demuestra que no exista el calentamiento global.", sol: "Porque el tiempo de un día o una estación no es el clima, que es la media de muchos años en todo el planeta; las tendencias se miden con décadas de datos globales." },
    { nivel: "medio", q: "¿Por qué sube el nivel del mar con el calentamiento global?", sol: "Por el agua que aportan los glaciares y casquetes que se funden en tierra y porque el agua del océano se dilata al calentarse." },
    { nivel: "medio", q: "Explica qué son los microplásticos y por qué preocupan.", sol: "Fragmentos de plástico de menos de 5 mm procedentes de la degradación de plásticos mayores o de productos como fibras textiles. Los ingieren los animales marinos, pasan a la cadena trófica y llegan a los humanos." },
    { nivel: "medio", q: "Diferencia desertificación y desertización.", sol: "Desertificación: degradación de tierras secas por el clima y las actividades humanas. Desertización: avance natural de un desierto." },
    { nivel: "medio", q: "¿Qué es una especie invasora y por qué no se deben liberar mascotas exóticas?", sol: "Una especie introducida que se expande y daña a las autóctonas. Una mascota liberada (tortuga de Florida, cotorra) puede reproducirse, competir con las especies locales y transmitirles enfermedades." },
    { nivel: "medio", q: "¿Qué es la obsolescencia programada y cómo la combate la economía circular?", sol: "Diseñar productos para que duren poco o queden anticuados. La economía circular la combate con el ecodiseño, el derecho a la reparación y la reutilización." },
    { nivel: "medio", q: "Explica las tres dimensiones del desarrollo sostenible con un ejemplo de cada una.", sol: "Ambiental: proteger un bosque. Social: garantizar el acceso de todos al agua potable. Económica: crear empleo en energías renovables." },
    { nivel: "avanzado", q: "Explica por qué el Protocolo de Montreal funcionó y por qué es más difícil reducir las emisiones de CO₂.", sol: "Los CFC tenían sustitutos baratos y los fabricaban pocas empresas. El CO₂ procede de la energía que mueve casi toda la economía (transporte, industria, electricidad), y sustituirla exige grandes inversiones y cambios de hábitos en todo el mundo." },
    { nivel: "avanzado", q: "Analiza el caso de Doñana: qué amenazas sufre y qué medidas propondrías.", sol: "Amenazas: sobreexplotación del acuífero por regadíos y pozos ilegales, sequía y cambio climático, contaminación, presión turística. Medidas: cerrar pozos ilegales, reducir el regadío, vigilar el acuífero, restaurar cauces y compensar a los agricultores." },
    { nivel: "avanzado", q: "Calcula tu huella de carbono por transporte en una semana (distancias y medios) y propone dos cambios para reducirla.", sol: "Respuesta abierta: multiplicar kilómetros en coche por unos 120 g de CO₂/km, en autobús por unos 30-70 g por pasajero y km; a pie o en bici, 0. Cambios: ir andando o en bici a lo que esté cerca, compartir coche o usar transporte público." },
    { nivel: "avanzado", q: "Algunas personas dicen que reciclar es suficiente. Argumenta por qué es mejor reducir y reutilizar.", sol: "Reciclar consume energía y agua, no todo se recicla y los materiales pierden calidad. Reducir evita fabricar el producto (materias primas, energía, transporte) y reutilizar alarga su vida sin transformarlo; por eso están antes en la jerarquía." },
    { nivel: "avanzado", q: "Explica la relación entre la pérdida de polinizadores y la seguridad alimentaria.", sol: "Muchos cultivos (frutas, hortalizas, almendros) dependen de los insectos para su polinización. Si disminuyen las abejas y otros polinizadores por pesticidas, pérdida de hábitat y cambio climático, bajan las cosechas y la variedad de alimentos." },
    { nivel: "avanzado", q: "Diseña un plan de economía circular para la cafetería del instituto con cuatro medidas.", sol: "1) Vasos y botellas reutilizables en lugar de desechables. 2) Compost con los restos orgánicos para el huerto. 3) Productos locales y de temporada con menos envases. 4) Separación correcta de residuos y medición mensual para mejorar." },
    { nivel: "avanzado", q: "Un 70 % del territorio español es susceptible de desertificación. Explica qué factores naturales y humanos lo favorecen y propón tres medidas.", sol: "Naturales: clima semiárido, sequías, lluvias torrenciales que arrastran el suelo, pendientes. Humanos: incendios, sobrepastoreo, agricultura intensiva, sobreexplotación de acuíferos. Medidas: reforestar con especies autóctonas, cultivos en terrazas o curvas de nivel con cubierta vegetal, controlar los pozos y prevenir incendios." },
  ],
  quiz: [
    { q: "El efecto invernadero…", o: ["es siempre perjudicial", "es natural y necesario; el problema es su aumento", "solo existe en las ciudades", "lo causa el agujero de ozono"], a: 1, e: "Sin él la Tierra estaría a −18 °C." },
    { q: "El principal gas de efecto invernadero emitido por los humanos es…", o: ["el oxígeno", "el nitrógeno", "el helio", "el CO₂"], a: 3, e: "Sobre todo por los combustibles fósiles." },
    { q: "El metano procede sobre todo de…", o: ["la ganadería, los arrozales y los vertederos", "los volcanes", "el océano", "los bosques"], a: 0, e: "Es más potente que el CO₂." },
    { q: "La temperatura media global ha subido alrededor de…", o: ["0,1 °C", "5 °C", "1,2 °C", "10 °C"], a: 2, e: "Respecto a la época preindustrial." },
    { q: "Reducir las emisiones de gases es…", o: ["adaptación", "desertificación", "mitigación", "eutrofización"], a: 2, e: "Actúa sobre las causas." },
    { q: "El Acuerdo de París busca limitar el calentamiento a…", o: ["muy por debajo de 2 °C y si es posible 1,5 °C", "5 °C", "0 °C", "10 °C"], a: 0, e: "Firmado en 2015." },
    { q: "La lluvia ácida la causan sobre todo…", o: ["el oxígeno", "el vapor de agua", "el ozono", "los óxidos de azufre y nitrógeno"], a: 3, e: "Forman ácidos con el agua." },
    { q: "Los CFC dañaban…", o: ["los océanos", "la capa de ozono", "el suelo", "los ríos"], a: 1, e: "Prohibidos por el Protocolo de Montreal." },
    { q: "La eutrofización se debe a un exceso de…", o: ["nitratos y fosfatos", "oxígeno", "sal", "plásticos"], a: 0, e: "Como en el Mar Menor." },
    { q: "En España, la mayor parte del agua la consume…", o: ["la industria", "las casas", "el regadío", "el turismo"], a: 2, e: "Alrededor del 80 %." },
    { q: "La desertificación es…", o: ["el avance natural de un desierto", "la degradación de tierras secas por el clima y la acción humana", "la formación de dunas", "la subida del mar"], a: 1, e: "La desertización es el avance natural." },
    { q: "¿Cuál es la principal causa de pérdida de biodiversidad?", o: ["Los terremotos", "La lluvia", "Los volcanes", "La destrucción de hábitats"], a: 3, e: "Deforestación y urbanización." },
    { q: "El cangrejo rojo americano en España es…", o: ["autóctono", "una especie extinta", "un parque nacional", "una especie invasora"], a: 3, e: "Desplazó al cangrejo autóctono." },
    { q: "El lince ibérico ha pasado de menos de 100 ejemplares en 2002 a…", o: ["menos de 50", "más de 2.000", "un millón", "cero"], a: 1, e: "Éxito de conservación." },
    { q: "En la jerarquía de residuos, lo más importante es…", o: ["reciclar", "incinerar", "reducir", "el vertedero"], a: 2, e: "Lo mejor es no generar el residuo." },
    { q: "Las pilas usadas se llevan…", o: ["al punto limpio o contenedor específico", "al contenedor amarillo", "al orgánico", "al vidrio"], a: 0, e: "Son residuos peligrosos." },
    { q: "La huella ecológica mide…", o: ["los pasos al día", "la superficie necesaria para mantener nuestro consumo", "la contaminación del agua", "el tamaño del pie"], a: 1, e: "En hectáreas globales." },
    { q: "Si la huella media es 2,6 ha y la biocapacidad 1,6 ha, necesitamos unos…", o: ["1,6 planetas", "0,5 planetas", "4 planetas", "10 planetas"], a: 0, e: "2,6 / 1,6 ≈ 1,6." },
    { q: "¿Cuántos Objetivos de Desarrollo Sostenible aprobó la ONU?", o: ["5", "10", "100", "17"], a: 3, e: "Agenda 2030." },
    { q: "La economía circular propone…", o: ["extraer, usar y tirar", "fabricar más rápido", "mantener los materiales en uso y convertir residuos en recursos", "usar solo plástico"], a: 2, e: "Como en los ecosistemas." },
  ],
  examen: [
    { q: "¿Qué gases son los principales responsables del aumento del efecto invernadero?", o: ["Oxígeno y nitrógeno", "Dióxido de carbono y metano", "Helio y argón", "Hidrógeno y neón"], a: 1, e: "Combustibles fósiles, ganadería y deforestación." },
    { q: "Plantar árboles en las calles para dar sombra en olas de calor es una medida de…", o: ["adaptación", "mitigación", "desertificación", "reciclaje"], a: 0, e: "Prepararse para los efectos." },
    { q: "El agujero de la capa de ozono y el cambio climático…", o: ["son el mismo problema", "los causa la lluvia ácida", "son problemas distintos con causas distintas", "no existen"], a: 2, e: "CFC frente a gases de efecto invernadero." },
    { q: "Un recurso renovable puede agotarse si…", o: ["se recicla", "se consume más rápido de lo que se regenera", "se protege", "se estudia"], a: 1, e: "Sobreexplotación." },
    { q: "La Red Natura 2000 es…", o: ["una empresa de reciclaje", "un acuerdo sobre el clima", "un parque nacional", "una red de espacios protegidos de la Unión Europea"], a: 3, e: "Cubre alrededor del 27 % de España." },
    { q: "La huella ecológica de los países ricos se debe sobre todo a…", o: ["el agua de lluvia", "los parques", "la pesca deportiva", "la huella de carbono"], a: 3, e: "Emisiones de CO₂." },
    { q: "La obsolescencia programada…", o: ["los hace más duraderos", "acorta la vida de los productos", "es un tipo de reciclaje", "es una energía renovable"], a: 1, e: "La combate el ecodiseño." },
    { q: "El desarrollo sostenible tiene en cuenta…", o: ["solo el medio ambiente", "solo la economía", "el medio ambiente, la sociedad y la economía", "solo el presente"], a: 2, e: "Sin comprometer a las generaciones futuras." },
  ],
  feynman: ["Qué es un impacto ambiental, con un ejemplo de cada medio", "Cómo funciona el efecto invernadero y por qué se ha intensificado", "Las causas de la pérdida de biodiversidad", "La regla de las tres erres en orden", "Qué es el desarrollo sostenible y tres cosas que puedes hacer tú"],
  mapa: mapa("SOSTENIBILIDAD", "var(--eso)", [
    ["Impactos", "aire · agua · suelo", "var(--ink)"],
    ["Clima", "efecto invernadero · +1,2 °C", "var(--red)"],
    ["Biodiversidad", "hábitats · invasoras", "var(--leaf)"],
    ["Soluciones", "3 erres · renovables · ODS", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es el efecto invernadero?", "La retención de parte del calor emitido por la Tierra por gases como el CO₂ y el metano."],
    ["¿Qué es la biodiversidad?", "La variedad de seres vivos: genes, especies y ecosistemas."],
    ["Las tres erres", "Reducir, reutilizar y reciclar (en ese orden de importancia)."],
    ["Definición de desarrollo sostenible", "El que satisface las necesidades presentes sin comprometer las de las generaciones futuras."],
    ["¿Qué es la huella ecológica?", "La superficie productiva necesaria para mantener el consumo y absorber los residuos de una persona o país."],
    ["Lluvia ácida", "Lluvia con ácidos formados a partir de óxidos de azufre y nitrógeno."],
    ["Economía circular", "Mantener productos y materiales en uso y convertir los residuos en recursos."],
    ["Mitigación y adaptación", "Mitigar: reducir las causas del cambio climático. Adaptarse: prepararse para sus efectos."],
    ["Recurso renovable", "Se regenera a un ritmo igual o mayor que su consumo, si no se sobreexplota."],
    ["Desertificación", "Degradación de tierras secas por el clima y la actividad humana."],
    ["Especie invasora", "Especie introducida que se expande y desplaza a las autóctonas."],
    ["Protocolo de Montreal", "Acuerdo de 1987 que prohibió los CFC; la capa de ozono se recupera."],
  ],
  glosario: [
    ["Impacto ambiental", "Alteración del medio causada por la actividad humana."],
    ["Recurso renovable", "Recurso que se regenera a un ritmo igual o mayor que su consumo."],
    ["Recurso no renovable", "Recurso limitado o que tarda millones de años en formarse."],
    ["Efecto invernadero", "Retención de calor por algunos gases de la atmósfera."],
    ["Calentamiento global", "Aumento de la temperatura media del planeta por actividad humana."],
    ["Mitigación", "Reducción de las causas del cambio climático."],
    ["Adaptación", "Preparación para los efectos del cambio climático."],
    ["Lluvia ácida", "Precipitación con ácidos formados a partir de óxidos de azufre y nitrógeno."],
    ["Capa de ozono", "Zona de la estratosfera que absorbe la radiación ultravioleta."],
    ["Microplásticos", "Fragmentos de plástico de menos de 5 mm."],
    ["Desertificación", "Degradación de tierras secas por el clima y la acción humana."],
    ["Biodiversidad", "Variedad de genes, especies y ecosistemas."],
    ["Especie invasora", "Especie introducida que daña a las autóctonas."],
    ["Huella ecológica", "Superficie productiva necesaria para mantener un consumo."],
    ["Biocapacidad", "Superficie productiva disponible en el planeta por persona."],
    ["Desarrollo sostenible", "Desarrollo que no compromete a las generaciones futuras."],
    ["Economía circular", "Modelo que mantiene los materiales en uso y convierte residuos en recursos."],
    ["Obsolescencia programada", "Diseño de productos para que duren poco."],
  ],
  situacion: {
    titulo: "Instituto sostenible: auditoría y plan de acción",
    reto: "El consejo escolar quiere que el centro reduzca su huella ecológica. Vuestra clase hará una auditoría ambiental del instituto (energía, agua, residuos y movilidad) y presentará un plan de acción con objetivos medibles.",
    pasos: [
      "Formad equipos para energía, agua, residuos y movilidad, y diseñad cómo medir cada uno (facturas, contadores, pesaje de residuos, encuesta de transporte).",
      "Recoged los datos durante dos semanas y calculad indicadores (kWh por alumno, litros por día, kg de residuos, % de alumnos que vienen a pie o en bici).",
      "Estimad la huella de carbono del centro con factores de emisión y comparadla con otros centros.",
      "Proponed al menos dos medidas por equipo con su coste, su ahorro y cómo se medirá el resultado.",
      "Presentad el plan al consejo escolar y diseñad una campaña de sensibilización para el resto del alumnado.",
    ],
    producto: "Informe de auditoría con datos y gráficos, plan de acción con objetivos medibles y campaña de sensibilización.",
    evaluacion: [
      "Rigor en la recogida y el tratamiento de los datos.",
      "Uso correcto de los conceptos de huella, recursos y sostenibilidad.",
      "Viabilidad y medición de las propuestas.",
      "Trabajo en equipo y calidad de la presentación y la campaña.",
    ],
  },
  familias: ["Calculad juntos vuestra huella ecológica con una calculadora online y elegid una mejora para el mes.", "Durante una semana, separad y pesad la basura de casa: ¿qué se podría reducir?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «Ecología y sostenibilidad» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): impactos ambientales, cambio climático, contaminación, pérdida de biodiversidad, gestión de recursos y residuos, huella ecológica y desarrollo sostenible. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Auditoría ambiental del centro (energía, agua, residuos y movilidad).",
      "Análisis de datos reales de CO₂ y temperatura (NOAA, AEMET) con hojas de cálculo.",
      "Debate estructurado sobre un conflicto ambiental cercano (regadío, embalse, parque eólico).",
      "Situación de aprendizaje: plan de acción para un instituto sostenible.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Objetivos de Desarrollo Sostenible, Naciones Unidas", url: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" },
    { t: "Calentamiento global, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Calentamiento_global" },
  ],
  revisado: "2026-11-13",
};
