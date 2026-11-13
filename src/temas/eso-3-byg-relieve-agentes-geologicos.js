// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El relieve y los agentes geológicos",
  minutos: 105,
  objetivos: [
    "Diferenciar los procesos geológicos internos y externos",
    "Explicar la meteorización, la erosión, el transporte y la sedimentación, y cómo se forma el suelo",
    "Reconocer las formas de relieve que crean las aguas, los glaciares, el viento y el mar",
    "Relacionar el tipo de roca con el paisaje e interpretar un mapa topográfico",
    "Valorar los riesgos geológicos y el papel del ser humano como agente geológico",
  ],
  claves: ["relieve", "meteorización", "erosión", "transporte", "sedimentación", "suelo", "modelado kárstico", "glaciar", "mapa topográfico", "riesgo geológico"],
  pregunta: {
    texto: "Los Pirineos llevan millones de años perdiendo roca por la lluvia, el hielo y los ríos. ¿Por qué siguen teniendo picos de más de 3.000 metros?",
    respuesta: "Porque hay dos fuerzas enfrentadas. Los <mark>procesos internos</mark>, movidos por el calor de la Tierra, levantan las montañas. Los <mark>procesos externos</mark>, movidos por el Sol y la gravedad, las desgastan. El relieve que vemos es el resultado, en cada momento, de esa competición.",
  },
  lectura: {
    titulo: "La ciudad que esculpió el agua",
    html: `<p>A unos 35 kilómetros de Cuenca hay un lugar donde las rocas parecen edificios, animales y personajes: un tormo con forma de barco, otro que recuerda a un elefante, un puente natural, unos «hongos» de piedra en equilibrio. Desde hace siglos se le llama la Ciudad Encantada, y las leyendas contaban que la habían construido seres mágicos.</p>
<p>La realidad es igual de sorprendente. Hace unos 90 millones de años, en el Cretácico, esa zona estaba cubierta por un mar cálido en cuyo fondo se acumularon capas de restos calcáreos. Con el tiempo se convirtieron en roca caliza y dolomía, y el choque de las placas las levantó hasta más de mil metros de altitud. Desde entonces, el agua de lluvia, ligeramente ácida, se ha colado por las grietas y ha ido disolviendo la roca poco a poco. Las capas inferiores, más blandas, se han desgastado más deprisa que las superiores, y así han quedado esas setas de piedra.</p>
<p>Nadie esculpió la Ciudad Encantada en un día: el agua lleva millones de años trabajando, milímetro a milímetro. En este tema descubrirás cómo el agua, el hielo, el viento, el mar y los seres vivos, también nosotros, transforman sin descanso el paisaje.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Dos fuerzas que modelan el relieve</h3><p>El <b>relieve</b> es el conjunto de formas de la superficie terrestre: montañas, valles, llanuras, costas. Lo construyen y lo destruyen dos tipos de procesos. Los <mark>procesos internos</mark> se deben a la energía del interior de la Tierra: mueven las placas, forman cordilleras, provocan volcanes y terremotos. Tienden a <b>levantar</b> el relieve. Los <mark>procesos externos</mark> se deben a la energía del Sol, que mueve el agua y el aire, y a la gravedad. Los realizan los <b>agentes geológicos externos</b>: el agua, el hielo, el viento, el mar y los seres vivos. Tienden a <b>allanar</b> el relieve.</p><p>El resultado depende de cuál gane: en las cordilleras jóvenes, como los Alpes o el Himalaya, los procesos internos siguen levantando y las cumbres son altas y afiladas; en macizos muy antiguos, como los de la Meseta, la erosión ha ganado durante cientos de millones de años y el relieve es suave y redondeado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una montaña: el calor interno la levanta desde abajo y el agua, el hielo y el viento la desgastan desde arriba">${BG}
        <path d="M14 150 L 90 60 L 120 80 L 150 40 L 246 150 Z" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/>
        <path d="M140 52 L 150 40 L 160 52 Z" fill="#fff"/>
        ${fl(130, 176, 130, 132, "var(--red)", 3)}${t(170, 172, "procesos internos", { size: 10, anchor: "start", color: "var(--red)" })}
        ${[[60, 30], [80, 22], [100, 30]].map(([x, y]) => `<path d="M${x} ${y} l -3 8" stroke="var(--water)" stroke-width="2"/>`).join("")}
        ${fl(200, 50, 172, 70, "var(--inf)")}${t(130, 18, "procesos externos: agua, hielo, viento", { size: 10, color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>1.2 Las etapas del modelado</h3><p>Los agentes externos actúan siempre en cuatro etapas. La <b>meteorización</b> rompe o altera las rocas en el mismo sitio donde están, sin moverlas. La <b>erosión</b> arranca los fragmentos sueltos. El <b>transporte</b> los lleva a otro lugar, arrastrados, rodando o disueltos en el agua; durante el viaje se redondean y se hacen más pequeños. Finalmente, la <b>sedimentación</b> los deposita cuando el agente pierde fuerza, por ejemplo en la desembocadura de un río. Con el tiempo, esos <b>sedimentos</b> se compactan y forman nuevas <mark>rocas sedimentarias</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro etapas en una ladera: meteorización en la cumbre, erosión, transporte por el río y sedimentación en el mar">${BG}
        <path d="M14 40 L 60 30 L 100 70 Q 150 120 200 130 H 246 V 170 H 14 Z" fill="#c9a37a"/>
        <rect x="200" y="130" width="46" height="40" fill="var(--water)" fill-opacity=".5"/>
        <path d="M60 34 Q 100 74 130 98 Q 166 124 200 132" stroke="var(--water)" stroke-width="5" fill="none"/>
        ${[[220, 160], [228, 156], [236, 162], [214, 164]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#8a6a4a"/>`).join("")}
        ${[["1 meteorización", 20, 22], ["2 erosión", 108, 52], ["3 transporte", 150, 92], ["4 sedimentación", 120, 150]].map(([n, x, y]) => t(x, y, n, { size: 10, anchor: "start", color: "var(--ink)" })).join("")}</svg>`,
    },
    {
      html: `<h3>1.3 La meteorización</h3><p>La <b>meteorización física</b> rompe la roca sin cambiar sus minerales. La más importante en climas fríos es la <mark>gelifracción</mark>: el agua entra en las grietas, se congela por la noche, aumenta su volumen casi un 10 % y actúa como una cuña que parte la roca. En los desiertos, los cambios bruscos de temperatura entre el día y la noche también la agrietan. La <b>meteorización química</b> cambia los minerales: el agua de lluvia, ligeramente ácida, <mark>disuelve</mark> la caliza y transforma el feldespato del granito en arcilla. Las raíces y los líquenes también colaboran.</p><p>La meteorización es el primer paso para que se forme el suelo: sin rocas rotas y alteradas no habría arena, limo ni arcilla, ni nutrientes minerales para las plantas.</p>`,
      svg: L.compara("Meteorización física y química", ["Física", "var(--pen)", ["rompe la roca", "no cambia minerales", "gelifracción", "cambios de calor"]], ["Química", "var(--leaf)", ["altera los minerales", "agua y CO₂", "disuelve la caliza", "granito a arcilla"]]),
    },
    {
      html: `<h3>1.4 El suelo</h3><p>El <mark>suelo</mark> es la capa superficial de la corteza en la que crecen las plantas. Se forma muy despacio: hace falta entre 100 y 1.000 años para que se forme un solo centímetro. Primero, la meteorización rompe la roca madre; después llegan los líquenes y los musgos, y sus restos, junto con los de otros seres vivos, forman el <b>humus</b>, la materia orgánica oscura y fértil. Las lombrices, los hongos y las bacterias lo mezclan y descomponen.</p><p>Un suelo maduro tiene varias capas llamadas <mark>horizontes</mark>, que se ven en un corte del terreno. El <b>horizonte A</b>, el más superficial, es oscuro y rico en humus y en vida. El <b>horizonte B</b> acumula las arcillas y sales que el agua arrastra desde arriba. El <b>horizonte C</b> está formado por fragmentos de la roca madre poco alterados. Debajo está la <b>roca madre</b>.</p><p>Como tarda tanto en formarse, el suelo es un <b>recurso no renovable</b> a escala humana. Si se quita la vegetación, la lluvia lo arrastra en pocos años y el terreno puede acabar en <b>desertificación</b>.</p>`,
      svg: L.capas("Horizontes del suelo", [["A: humus y vida", "#6b4a2f", 34], ["B: arcillas y sales", "#a77b4f", 38], ["C: roca fragmentada", "#c9a37a", 38], ["Roca madre", "#8d8d8d", 34]], "Perfil de un suelo maduro"),
    },
    {
      html: `<h3>2.1 Las aguas de arroyada y los torrentes</h3><p>Cuando llueve, parte del agua corre por la superficie sin cauce fijo: son las <b>aguas de arroyada</b>. En terrenos blandos y sin vegetación, como las arcillas, excavan surcos que con el tiempo se hacen profundos, las <b>cárcavas</b>, y forman paisajes desolados llamados <mark>badlands</mark>, como los del desierto de Tabernas en Almería o las Bardenas Reales en Navarra. Los <b>torrentes</b> son cursos de agua cortos y de mucha pendiente que solo llevan agua tras las lluvias: excavan en la cabecera, transportan por un canal y depositan en un <b>cono de deyección</b> al llegar al llano.</p><p>En España muchos cauces mediterráneos, llamados <b>ramblas</b> o barrancos, pasan secos casi todo el año. Por eso se olvida su peligro y se construye en ellos, pero tras una tormenta intensa pueden convertirse en pocos minutos en torrentes violentos que arrastran coches, árboles y rocas.</p>`,
      svg: L.flujo("Partes de un torrente", ["Cuenca de recepción: erosiona", "Canal de desagüe: transporta", "Cono de deyección: sedimenta"], "Un torrente de montaña"),
    },
    {
      html: `<h3>2.2 Los ríos</h3><p>Los <b>ríos</b> son corrientes de agua permanentes y el agente externo que más modifica el relieve de la Tierra. En su <b>curso alto</b>, con mucha pendiente, <mark>erosionan</mark> y excavan <b>valles en forma de V</b>, gargantas y cañones. En el <b>curso medio</b>, con menos pendiente, sobre todo <mark>transportan</mark>, y el cauce forma curvas llamadas <b>meandros</b>. En el <b>curso bajo</b>, casi llano, <mark>sedimentan</mark> y forman llanuras de inundación. En la desembocadura pueden crear un <b>delta</b>, si depositan más sedimento del que el mar se lleva, como el del Ebro, o un <b>estuario</b>, si el mar entra en el río.</p><p>Cada río drena una <b>cuenca hidrográfica</b>, el territorio cuyas aguas van a parar a él. En la península, los ríos de la vertiente atlántica, como el Tajo o el Guadalquivir, son largos y caudalosos; los de la mediterránea, salvo el Ebro, son cortos y de caudal muy irregular, con crecidas violentas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfil de un río: curso alto con valle en V y erosión, curso medio con meandros y transporte, curso bajo con sedimentación y delta">${BG}
        <path d="M14 30 Q 80 120 140 140 Q 200 156 246 158" stroke="var(--water)" stroke-width="5" fill="none"/>
        <path d="M14 26 L 14 170 H 246 V 162 Q 200 158 140 144 Q 80 126 14 34" fill="#c9a37a" fill-opacity=".5"/>
        <path d="M30 80 L 46 110 L 62 80" stroke="var(--ink)" stroke-width="2" fill="none"/>
        <path d="M110 118 q 8 -10 16 0 t 16 0" stroke="var(--water)" stroke-width="3" fill="none"/>
        <path d="M216 158 L 230 146 L 246 150 M216 158 L 236 168" stroke="#8a6a4a" stroke-width="2" fill="none"/>
        ${t(46, 24, "alto: erosión", { size: 10, color: "var(--red)" })}${t(130, 92, "medio: transporte", { size: 10, color: "#b8860b" })}${t(204, 128, "bajo: sedimenta", { size: 10, color: "var(--leaf)" })}${t(232, 140, "delta", { size: 9, color: "#8a6a4a" })}</svg>`,
    },
    {
      html: `<h3>2.3 Las aguas subterráneas y el karst</h3><p>Parte del agua de lluvia se infiltra en el suelo y forma <b>acuíferos</b>, rocas porosas empapadas de agua de las que sacamos agua con pozos y que salen al exterior en los <b>manantiales</b>. En las zonas de <b>caliza</b>, el agua con dióxido de carbono disuelve la roca y crea el <mark>modelado kárstico</mark>. En superficie aparecen el <b>lapiaz</b>, con surcos y aristas, y las <b>dolinas</b>, hundimientos circulares. Bajo tierra se forman <b>cuevas</b>, donde el goteo de agua deposita la caliza de nuevo y crea <b>estalactitas</b>, que cuelgan del techo, y <b>estalagmitas</b>, que crecen desde el suelo. Un ejemplo famoso es la Ciudad Encantada de Cuenca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paisaje kárstico: dolina en superficie y cueva con estalactitas y estalagmitas bajo tierra">${BG}
        <rect x="14" y="40" width="232" height="130" fill="#d8d0b8"/><path d="M14 40 H 90 Q 110 70 130 40 H 246" stroke="#8a7a5a" stroke-width="3" fill="none"/>
        <path d="M50 100 Q 60 80 130 84 Q 210 80 220 110 Q 216 146 130 148 Q 46 146 50 100 Z" fill="var(--paper)" stroke="#8a7a5a" stroke-width="2"/>
        ${[80, 104, 150, 176, 196].map((x, i) => `<path d="M${x - 5} ${84 + (i % 2) * 2} L ${x} ${104 + (i % 3) * 6} L ${x + 5} ${84 + (i % 2) * 2} Z" fill="#b8a77a"/>`).join("")}
        ${[92, 140, 186].map((x, i) => `<path d="M${x - 6} 148 L ${x} ${126 + i * 4} L ${x + 6} 148 Z" fill="#b8a77a"/>`).join("")}
        ${t(110, 30, "dolina", { size: 11 })}${t(230, 70, "caliza", { size: 10, anchor: "end", color: "#8a7a5a" })}${t(130, 120, "cueva", { size: 11, color: "var(--muted)" })}
        ${t(30, 72, "estalactita", { size: 9, anchor: "start" })}${t(240, 162, "estalagmita", { size: 9, anchor: "end" })}</svg>`,
      video: { id: "-AGTkMzJ0eM", titulo: "El MODELADO KÁRSTICO y sus formas de relieve", canal: "Daniel Geohistoria", vistas: 40384 },
    },
    {
      html: `<h3>2.4 Los glaciares</h3><p>Un <b>glaciar</b> es una gran masa de hielo que se forma donde la nieve se acumula año tras año sin fundirse y que se desliza lentamente ladera abajo por su propio peso. Hay glaciares de casquete, que cubren continentes como la Antártida, y glaciares de montaña. Estos nacen en un <b>circo</b>, una hoya donde se acumula el hielo, y bajan por una <b>lengua</b> que excava un <mark>valle en forma de U</mark>. Las rocas que arrastra se depositan en las <b>morrenas</b>. Hace 20.000 años los glaciares cubrían parte de los Pirineos y de Sierra Nevada; sus valles en U todavía se ven.</p><p>Hoy en la península solo quedan pequeños glaciares en los Pirineos, como el del Aneto, y están desapareciendo a gran velocidad por el calentamiento global: han perdido más del 80 % de su superficie desde 1850.</p>`,
      svg: L.flujo("Formas del modelado glaciar", ["Circo: se acumula el hielo", "Lengua: el hielo baja", "Valle en U: excava", "Morrena: deposita rocas"], "Un glaciar de montaña"),
      video: { id: "7VLuKxIlaOA", titulo: "GLACIARES. Relieve Glaciar", canal: "GEOLOGIA EN EL CAMPO", vistas: 21485 },
    },
    {
      html: `<h3>2.5 El viento</h3><p>El viento es un agente importante en los <b>desiertos</b>, donde no hay vegetación que sujete el suelo. Erosiona de dos formas: la <b>deflación</b>, que levanta y se lleva la arena fina y deja suelos de piedras, y la <b>abrasión</b>, cuando los granos de arena chocan contra las rocas como un chorro de arena y las pulen, a veces con formas de seta. El viento transporta la arena y la deposita formando <mark>dunas</mark>, montículos que avanzan con el viento. El polvo del Sahara llega a menudo a la península ibérica y a Canarias, tiñendo el cielo de naranja: es la <b>calima</b>.</p>`,
      svg: L.compara("Erosión eólica", ["Deflación", "var(--sun)", ["levanta la arena", "deja suelo de piedras", "desiertos pedregosos", "polvo y calima"]], ["Abrasión", "var(--red)", ["la arena golpea", "pule las rocas", "rocas en seta", "como un chorro"]], "Después deposita la arena en dunas"),
    },
    {
      html: `<h3>2.6 El mar</h3><p>El mar modela la costa con las <b>olas</b>, las <b>corrientes</b> y las <b>mareas</b>. Las olas golpean las costas rocosas, las socavan por la base y forman <mark>acantilados</mark> que retroceden con el tiempo; al pie queda una <b>plataforma de abrasión</b>. En las zonas abrigadas, el mar deposita arena y forma <b>playas</b>. Las corrientes paralelas a la costa pueden construir <b>flechas litorales</b> y cerrar <b>albuferas</b>, lagunas de agua salada como la de Valencia. Un <b>tómbolo</b> es una barra de arena que une una isla con tierra, como el de Gibraltar.</p><p>Las costas españolas muestran ambos tipos: la costa cantábrica y la Costa Brava son abruptas, con acantilados y calas; buena parte de la costa mediterránea y de Huelva es baja y arenosa, con largas playas, dunas y marismas como las de Doñana.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Costa con un acantilado erosionado por las olas a la izquierda y una playa de arena en una bahía a la derecha">${BG}
        <rect x="14" y="110" width="232" height="60" fill="var(--water)" fill-opacity=".45"/>
        <path d="M14 40 H 80 L 86 100 Q 80 112 74 112 H 14 Z" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/><path d="M80 100 Q 86 108 80 112" fill="var(--water)" fill-opacity=".6"/>
        <path d="M96 118 q 8 -8 16 0 M120 124 q 8 -8 16 0" stroke="var(--inf)" stroke-width="2.5" fill="none"/>
        <path d="M160 112 Q 200 96 246 92 V 112 Z" fill="#f2d9a0" stroke="#d0b070" stroke-width="2"/>
        ${t(46, 32, "acantilado", { size: 11 })}${t(206, 84, "playa", { size: 11, color: "#b8860b" })}${t(118, 150, "olas", { size: 11, color: "var(--inf)" })}</svg>`,
      video: { id: "2jKCcoO9EV0", titulo: "Los procesos geológicos externos: modelado eólico y litoral", canal: "mcgrawhilltv", vistas: 54635 },
    },
    {
      html: `<h3>3.1 Cada roca, un paisaje</h3><p>El mismo agente no crea el mismo relieve en todas partes: depende del tipo de roca. Es el <mark>modelado según la roca</mark>.</p><p>En el <b>granito</b> la meteorización química avanza por las grietas, que forman una red de cuadros. Los bordes se redondean y quedan grandes <b>bolos</b> apilados, formando berrocales como los de La Pedriza en Madrid o la sierra de Gredos. En la <b>caliza</b> domina la disolución y aparece el karst, con dolinas, lapiaces y cuevas, como en los Picos de Europa o el Torcal de Antequera. En las <b>arcillas</b>, blandas e impermeables, la arroyada excava cárcavas y badlands. Donde alternan capas duras y blandas, las blandas se desgastan antes y quedan relieves en escalón, mesas y cerros testigo, como en Las Bardenas.</p><p>En <b>Canarias</b>, el relieve es volcánico: conos, coladas de lava, calderas como la de Taburiente y malpaíses. Allí los procesos internos siguen muy activos, como se vio en la erupción de La Palma en 2021.</p>`,
      svg: L.tabla("El relieve según el tipo de roca", ["Roca", "Proceso", "Paisaje"], [["Granito", "grietas", "bolos y berrocal"], ["Caliza", "disolución", "karst y cuevas"], ["Arcilla", "arroyada", "cárcavas"], ["Volcánica", "erupciones", "conos y coladas"]]),
    },
    {
      html: `<h3>3.2 Los seres vivos y el ser humano</h3><p>Los seres vivos también son agentes geológicos. Las <b>raíces</b> de los árboles agrandan las grietas de las rocas; las lombrices y otros animales remueven el suelo; los corales construyen arrecifes enormes. Pero hoy el agente que más rápido cambia el relieve es el <mark>ser humano</mark>: excava minas y canteras, construye embalses que retienen los sedimentos de los ríos (por eso el delta del Ebro está retrocediendo), canaliza cauces, rellena zonas costeras y elimina la vegetación, lo que acelera la erosión. La pérdida de suelo fértil por erosión afecta gravemente a gran parte de España.</p><p>La erosión del suelo es uno de los principales problemas ambientales de España: se calcula que cerca de un tercio del territorio sufre un riesgo alto de desertificación, sobre todo en el sureste. La repoblación forestal, las terrazas de cultivo y el arado siguiendo las curvas de nivel ayudan a frenarla.</p>`,
      svg: L.radial("El ser humano como agente geológico", "Ser humano", ["Minas y canteras", "Embalses", "Canalizar ríos", "Talar bosques", "Construir costas", "Repoblar"], "var(--red)"),
    },
    {
      html: `<h3>3.3 Los riesgos geológicos externos</h3><p>Algunos procesos externos pueden causar daños: son <b>riesgos geológicos</b>. Las <mark>inundaciones</mark> ocurren cuando un río se desborda tras lluvias intensas; en el Mediterráneo son frecuentes en otoño con las DANA, como la de Valencia en 2024. Los <b>deslizamientos</b> y desprendimientos de ladera arrastran rocas y tierra. Los <b>aludes</b> son masas de nieve que caen por las pendientes. Se pueden <b>prevenir</b> sus daños: no construir en cauces ni zonas inundables, repoblar las laderas con vegetación, construir muros y redes de protección, y vigilar los avisos meteorológicos.</p><p>Para planificar se elaboran <b>mapas de riesgo</b> que señalan las zonas inundables o con peligro de deslizamientos. El riesgo depende de tres factores: la <b>peligrosidad</b> (lo probable e intenso que es el fenómeno), la <b>exposición</b> (cuántas personas y bienes hay en la zona) y la <b>vulnerabilidad</b> (lo preparados que están).</p>`,
      svg: L.tabla("Riesgos geológicos externos", ["Riesgo", "Causa", "Prevención"], [["Inundación", "lluvias intensas", "no construir en cauces"], ["Deslizamiento", "laderas inestables", "vegetación y muros"], ["Alud", "nieve acumulada", "barreras y avisos"]]),
    },
    {
      html: `<h3>3.4 Leer el relieve en un mapa</h3><p>Para representar el relieve en un papel plano se usan los <mark>mapas topográficos</mark>, como los del Instituto Geográfico Nacional. En ellos, el relieve se dibuja con <mark>curvas de nivel</mark>: líneas que unen puntos que están a la misma altitud. La diferencia de altura entre dos curvas seguidas, la <b>equidistancia</b>, es siempre la misma en un mapa, por ejemplo 20 metros.</p><p>Para leerlas hay algunas reglas: cuando las curvas están muy <b>juntas</b>, la pendiente es fuerte; cuando están <b>separadas</b>, el terreno es suave. Una serie de curvas cerradas que van subiendo hacia el centro indica una <b>montaña</b>. Las curvas en forma de V que apuntan hacia arriba de la ladera señalan un <b>valle</b>, por donde suele correr un río.</p><p>La <b>escala</b> indica cuántas veces se ha reducido la realidad: en un mapa a escala 1:50.000, un centímetro equivale a 50.000 centímetros, es decir, 500 metros. Con un mapa topográfico podemos trazar un <b>perfil</b>, un corte que muestra cómo sube y baja el terreno a lo largo de una línea.</p>`,
      svg: L.flujo("Cómo leer un mapa topográfico", ["Mira la escala y la equidistancia", "Curvas juntas: pendiente fuerte", "Curvas separadas: terreno suave", "V hacia arriba: valle"], "Las curvas de nivel"),
    },
  ],
  figura: {
    titulo: "Cada agente, su relieve",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Formas de relieve de cada agente: río, valle en V, meandro, delta; karst, dolina y cueva; glaciar, valle en U y morrena; viento, dunas; mar, acantilado y playa">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Ríos", "valle en V · meandro · delta", "var(--water)"], ["Agua subterránea", "dolina · cueva · estalactita", "#8a7a5a"], ["Glaciares", "circo · valle en U · morrena", "var(--inf)"], ["Viento", "dunas · rocas en seta", "#b8860b"], ["Mar", "acantilado · playa · tómbolo", "var(--pen)"]].map(([n, d, c], i) => { const y = 20 + i * 46; return `<rect x="20" y="${y}" width="600" height="38" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(36, y + 25, n, { size: 15, anchor: "start", color: c, font: D })}${t(250, y + 25, d, { size: 13, anchor: "start", weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "s4ygTft3_ZQ", titulo: "Agentes geológicos externos. Meteorización y transporte. Manuel Toharia", canal: "Marcos P.", vistas: 144325 },
  ejemplos: [
    { enunciado: "En lo alto de una montaña de 2.500 m ves bloques de roca angulosos amontonados al pie de una pared. ¿Qué proceso los ha formado?",
      pasos: ["A esa altura hiela casi todas las noches durante gran parte del año.", "El agua de las grietas se congela, aumenta de volumen y parte la roca.", "Los fragmentos caen por la gravedad y quedan angulosos porque no han sido transportados."],
      resultado: "gelifracción (meteorización física)." },
    { enunciado: "Un río arrastra cantos rodados redondeados en su desembocadura, pero en su nacimiento las piedras son angulosas. Explica la diferencia.",
      pasos: ["En el nacimiento, los fragmentos acaban de desprenderse.", "Durante el transporte chocan entre sí y con el cauce.", "Se desgastan las aristas y se hacen más pequeños y redondos."],
      resultado: "el transporte los redondea; cuanto más largo el viaje, más redondos." },
    { enunciado: "Un embalse retiene el 90 % de los sedimentos de un río. ¿Qué le pasará a su delta?",
      pasos: ["Un delta crece si el río aporta más sedimento del que el mar se lleva.", "Si el embalse retiene casi todo, llega muy poco a la desembocadura.", "El mar sigue erosionando igual."],
      resultado: "el delta retrocederá, como ocurre en el delta del Ebro." },
    { enunciado: "En un mapa a escala 1:25.000, dos pueblos están separados 8 cm. ¿Qué distancia real hay entre ellos?",
      pasos: ["1 cm del mapa son 25.000 cm reales, es decir, 250 m.", "8 · 250 m = 2.000 m."],
      resultado: "2 km en línea recta." },
    { enunciado: "Un suelo se forma a razón de 1 cm cada 200 años. ¿Cuánto tarda en formarse un horizonte A de 30 cm? Si una tala hace que la lluvia arrastre 1 cm al año, ¿cuánto tarda en perderse?",
      pasos: ["Formación: 30 · 200 = 6.000 años.", "Pérdida: 30 cm a 1 cm por año = 30 años."],
      resultado: "6.000 años para formarse y solo 30 para perderse: el suelo es un recurso no renovable." },
    { enunciado: "Excursionistas encuentran en la sierra de Gredos grandes bloques redondeados de granito, unos encima de otros. ¿Cómo se han formado?",
      pasos: ["El granito tiene una red de grietas que lo divide en bloques.", "El agua penetra por las grietas y altera el granito (meteorización química).", "Las aristas se alteran más deprisa y los bloques se redondean.", "El material alterado se erosiona y los bolos quedan al descubierto."],
      resultado: "es un berrocal, típico del modelado granítico." },
  ],
  errores: [...[
    "Confundir meteorización y erosión: la meteorización rompe la roca sin moverla; la erosión la arranca.",
    "Pensar que los procesos externos levantan montañas: tienden a allanar; levantan los internos.",
    "Confundir estalactitas (cuelgan del techo) con estalagmitas (crecen desde el suelo).",
    "Decir que los valles glaciares tienen forma de V: tienen forma de U; los fluviales, de V.",
    "Creer que el ser humano no es un agente geológico: hoy es uno de los más rápidos.",
  ], "Pensar que las curvas de nivel juntas indican terreno llano: indican pendiente fuerte."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Diferencia procesos geológicos internos y externos según su energía y su efecto.", sol: "Internos: energía del interior de la Tierra; levantan el relieve. Externos: energía solar y gravedad; desgastan y allanan el relieve." } },
    { nivel: "básico", ...{ q: "Ordena y define las cuatro etapas de la acción de un agente externo.", sol: "Meteorización (rotura en el sitio), erosión (arranque), transporte (traslado) y sedimentación (depósito)." } },
    { nivel: "básico", ...{ q: "Nombra tres formas de relieve glaciar.", sol: "Circo, valle en U y morrena." } },
    { nivel: "básico", ...{ q: "¿Qué son la deflación y la abrasión eólicas?", sol: "Deflación: el viento levanta y se lleva las partículas finas. Abrasión: la arena que transporta el viento golpea y pule las rocas." } },
    { nivel: "básico", q: "¿Qué es el humus y en qué horizonte del suelo abunda?", sol: "La materia orgánica oscura que procede de los restos de seres vivos descompuestos. Abunda en el horizonte A." },
    { nivel: "básico", q: "Nombra las tres partes de un torrente y qué ocurre en cada una.", sol: "Cuenca de recepción (erosión), canal de desagüe (transporte) y cono de deyección (sedimentación)." },
    { nivel: "básico", q: "Diferencia estalactita y estalagmita.", sol: "La estalactita cuelga del techo de la cueva; la estalagmita crece desde el suelo." },
    { nivel: "básico", q: "¿Qué es una curva de nivel?", sol: "Una línea de un mapa que une los puntos que están a la misma altitud." },
    { nivel: "básico", q: "Cita tres formas del relieve costero.", sol: "Acantilado, playa, flecha litoral, albufera o tómbolo." },
    { nivel: "básico", q: "Asocia cada paisaje con su roca: berrocal, karst, cárcavas.", sol: "Berrocal: granito. Karst: caliza. Cárcavas: arcilla." },
    { nivel: "básico", q: "¿Qué es la calima?", sol: "Polvo fino del Sahara que el viento transporta hasta la península y Canarias y tiñe el cielo de naranja." },
    { nivel: "básico", q: "Escribe dos ejemplos de cómo el ser humano modifica el relieve.", sol: "Minas y canteras, embalses, canalización de ríos, rellenos costeros o tala de bosques." },
    { nivel: "medio", ...{ q: "Explica la gelifracción y di en qué climas es frecuente.", sol: "El agua de las grietas se congela, aumenta de volumen y rompe la roca. Es frecuente en climas fríos y en alta montaña, con heladas nocturnas." } },
    { nivel: "medio", ...{ q: "¿Por qué la caliza forma cuevas y el granito no?", sol: "Porque el agua ligeramente ácida disuelve la caliza (meteorización química), mientras que el granito no se disuelve, sino que se altera a arcilla." } },
    { nivel: "medio", ...{ q: "Describe qué hace un río en cada uno de sus cursos.", sol: "Alto: erosiona y forma valles en V. Medio: transporta y forma meandros. Bajo: sedimenta y forma llanuras y deltas." } },
    { nivel: "medio", ...{ q: "¿Qué diferencia hay entre un delta y un estuario?", sol: "En el delta el río deposita más sedimento del que el mar se lleva y gana terreno al mar. En el estuario el mar entra en la desembocadura." } },
    { nivel: "medio", ...{ q: "¿Cómo se forma un acantilado y por qué retrocede?", sol: "Las olas golpean la base de una costa rocosa y la socavan; la parte superior se queda sin apoyo y se desploma, así que el acantilado retrocede tierra adentro." } },
    { nivel: "medio", ...{ q: "Propón tres medidas para reducir el riesgo de inundación en una ciudad.", sol: "No construir en zonas inundables ni en cauces, mantener limpios los cauces y crear zonas verdes que absorban el agua; además, sistemas de alerta." } },
    { nivel: "medio", q: "Describe los horizontes de un suelo maduro.", sol: "A: superficial, oscuro, rico en humus y vida. B: acumula arcillas y sales arrastradas desde arriba. C: fragmentos de roca madre poco alterados. Debajo, la roca madre." },
    { nivel: "medio", q: "¿Por qué se dice que el suelo es un recurso no renovable?", sol: "Porque tarda cientos o miles de años en formarse y puede perderse por erosión en pocos años si se elimina la vegetación." },
    { nivel: "medio", q: "Compara la cumbre de los Alpes con las sierras de la Meseta. ¿Por qué son tan distintas?", sol: "Los Alpes son jóvenes y siguen levantándose: cumbres altas y afiladas. Los macizos de la Meseta son antiguos y la erosión ha ganado durante millones de años: relieve suave." },
    { nivel: "medio", q: "Explica de qué tres factores depende un riesgo geológico.", sol: "Peligrosidad (probabilidad e intensidad del fenómeno), exposición (personas y bienes en la zona) y vulnerabilidad (grado de preparación)." },
    { nivel: "medio", q: "¿Por qué están desapareciendo los glaciares de los Pirineos?", sol: "Por el calentamiento global: la nieve que se acumula cada invierno es menor que el hielo que se funde en verano." },
    { nivel: "medio", q: "En un mapa a escala 1:50.000, ¿cuántos metros reales son 3 cm?", sol: "1 cm son 500 m, así que 3 cm son 1.500 m." },
    { nivel: "medio", q: "Explica cómo se forma un meandro y por qué se desplaza.", sol: "En una curva, el agua va más rápida por el lado exterior y lo erosiona, mientras que en el interior va lenta y deposita sedimentos. Así la curva se acentúa y se desplaza." },
    { nivel: "medio", q: "Compara las costas cantábrica y onubense.", sol: "La cantábrica es abrupta, con acantilados y rías. La de Huelva es baja y arenosa, con playas, dunas y marismas." },
    { nivel: "avanzado", q: "Observa este dato: un valle tiene forma de U en su parte alta y de V más abajo. ¿Qué historia geológica cuenta?", sol: "La parte alta estuvo ocupada por un glaciar, que excavó el valle en U, durante la última glaciación. Más abajo el hielo no llegó y el valle lo excavó un río, en V." },
    { nivel: "avanzado", q: "Diseña un experimento con una bandeja de arena y agua para comprobar cómo influye la pendiente en la erosión.", sol: "Preparar dos bandejas iguales de arena con pendientes distintas, verter la misma cantidad de agua a la misma velocidad y medir la arena arrastrada y la profundidad de los surcos. Se espera más erosión con más pendiente." },
    { nivel: "avanzado", q: "Explica por qué la DANA de Valencia de 2024 causó tantos daños, usando los conceptos de peligrosidad, exposición y vulnerabilidad.", sol: "Peligrosidad: lluvias extraordinarias en pocas horas en barrancos de régimen torrencial. Exposición: muchas viviendas, polígonos y carreteras en zonas inundables. Vulnerabilidad: avisos tardíos y población sin saber cómo actuar." },
    { nivel: "avanzado", q: "En un mapa con equidistancia de 20 m, entre la base y la cumbre de un monte hay 12 curvas de nivel y la base está a 600 m. ¿Qué altura aproximada tiene la cumbre?", sol: "12 · 20 = 240 m de desnivel; la cumbre está a unos 600 + 240 = 840 m." },
    { nivel: "avanzado", q: "Relaciona la construcción de embalses con el retroceso de las playas.", sol: "Los embalses retienen la arena y los sedimentos que los ríos llevan al mar. Sin ese aporte, las olas y corrientes se llevan más arena de la que llega y las playas y deltas retroceden." },
    { nivel: "avanzado", q: "¿Qué agente externo predominará en cada lugar: alta montaña pirenaica, desierto de Tabernas, Picos de Europa y costa gallega? Justifícalo.", sol: "Pirineos: hielo (gelifracción y glaciares). Tabernas: arroyada sobre arcillas y viento. Picos de Europa: disolución de la caliza (karst). Costa gallega: el mar (oleaje) y los ríos (rías)." },
    { nivel: "avanzado", q: "Explica por qué la Ciudad Encantada tiene formas de seta.", sol: "Está formada por capas de roca caliza y dolomía de distinta dureza. La lluvia y la disolución desgastan más deprisa las capas inferiores, más blandas, y las superiores, más duras, quedan como sombreros." },
    { nivel: "avanzado", q: "Propón tres medidas para frenar la desertificación en el sureste de España y explica cómo actúa cada una.", sol: "Repoblación con especies autóctonas (las raíces sujetan el suelo), terrazas y arado siguiendo las curvas de nivel (frenan la escorrentía) y uso eficiente del agua de los acuíferos (evita su agotamiento y la pérdida de vegetación)." },
    { nivel: "avanzado", q: "¿Por qué los cantos de una morrena son angulosos y de todos los tamaños, mientras que los de una playa son redondeados y del mismo tamaño?", sol: "El hielo transporta los fragmentos sin que choquen apenas entre sí y los deposita todos juntos al fundirse. En la playa el oleaje los mueve continuamente, los desgasta y los selecciona por tamaño." },
    { nivel: "avanzado", q: "Explica cómo la erupción de La Palma en 2021 muestra la competición entre procesos internos y externos.", sol: "Los procesos internos crearon un cono nuevo y coladas que ganaron terreno al mar (deltas lávicos). Desde entonces, la lluvia, el viento y el oleaje empiezan a erosionarlos: los procesos externos tienden a allanar lo que los internos construyen." },
  ],
  quiz: [
    { q: "Los procesos geológicos internos tienden a…", o: ["allanar el relieve", "levantar el relieve", "formar suelo", "crear dunas"], a: 1, e: "Con la energía interna de la Tierra." },
    { q: "Romper una roca sin moverla es…", o: ["erosión", "sedimentación", "meteorización", "transporte"], a: 2, e: "Primera etapa." },
    { q: "La gelifracción la produce…", o: ["el hielo en las grietas", "el viento", "el mar", "las raíces"], a: 0, e: "El agua aumenta de volumen al congelarse." },
    { q: "La capa del suelo rica en humus es el horizonte…", o: ["C", "B", "roca madre", "A"], a: 3, e: "La más superficial." },
    { q: "Las cárcavas se forman sobre todo en…", o: ["granito", "arcillas", "caliza", "lava"], a: 1, e: "Por la arroyada." },
    { q: "El cono de deyección es la zona de un torrente donde…", o: ["erosiona", "nace", "sedimenta", "transporta"], a: 2, e: "Al llegar al llano." },
    { q: "Un valle en forma de V es típico de…", o: ["un río", "un glaciar", "el viento", "el mar"], a: 0, e: "En su curso alto." },
    { q: "Las curvas que forma un río en su curso medio son…", o: ["deltas", "cárcavas", "dolinas", "meandros"], a: 3, e: "Se desplazan con el tiempo." },
    { q: "Las dolinas y los lapiaces son formas…", o: ["glaciares", "kársticas", "eólicas", "litorales"], a: 1, e: "Por disolución de la caliza." },
    { q: "Lo que cuelga del techo de una cueva es una…", o: ["estalagmita", "dolina", "estalactita", "morrena"], a: 2, e: "Crece hacia abajo." },
    { q: "Las rocas que arrastra un glaciar se depositan en…", o: ["las morrenas", "los deltas", "las dunas", "las albuferas"], a: 0, e: "Cantos angulosos." },
    { q: "La abrasión eólica consiste en…", o: ["levantar la arena", "formar dunas", "disolver la roca", "pulir rocas con arena"], a: 3, e: "Como un chorro de arena." },
    { q: "Una laguna costera separada del mar por una flecha de arena es una…", o: ["ría", "albufera", "playa", "dolina"], a: 1, e: "Como la de Valencia." },
    { q: "Los berrocales con bolos son típicos del…", o: ["karst", "desierto", "granito", "glaciar"], a: 2, e: "Como La Pedriza." },
    { q: "Curvas de nivel muy juntas indican…", o: ["pendiente fuerte", "terreno llano", "un río", "el mar"], a: 0, e: "Gran desnivel en poca distancia." },
    { q: "En un mapa 1:50.000, 1 cm equivale a…", o: ["50 m", "5 km", "50 km", "500 m"], a: 3, e: "50.000 cm = 500 m." },
    { q: "El delta del Ebro retrocede sobre todo porque…", o: ["sube el río", "los embalses retienen sedimentos", "hay glaciares", "llueve más"], a: 1, e: "Llega poca arena al mar." },
    { q: "Un suelo tarda en formar un centímetro…", o: ["un año", "un día", "de 100 a 1.000 años", "un millón de años"], a: 2, e: "Es no renovable." },
    { q: "Las DANA causan sobre todo…", o: ["inundaciones", "aludes", "erupciones", "terremotos"], a: 0, e: "Lluvias torrenciales." },
    { q: "El relieve de Canarias es sobre todo…", o: ["glaciar", "kárstico", "granítico", "volcánico"], a: 3, e: "Procesos internos activos." },
  ],
  examen: [
    { q: "La energía de los procesos externos procede…", o: ["del interior terrestre", "del Sol y la gravedad", "de la Luna", "del magma"], a: 1, e: "Mueve el agua y el aire." },
    { q: "La sedimentación ocurre cuando el agente…", o: ["gana fuerza", "rompe rocas", "pierde fuerza", "se congela"], a: 2, e: "Deposita los materiales." },
    { q: "El agente externo que más modifica el relieve de la Tierra es…", o: ["el río", "el viento", "el glaciar", "el mar"], a: 0, e: "Corrientes permanentes." },
    { q: "Un valle glaciar tiene forma de…", o: ["V", "cono", "seta", "U"], a: 3, e: "El hielo excava el fondo." },
    { q: "La disolución de la caliza es meteorización…", o: ["física", "química", "biológica únicamente", "eólica"], a: 1, e: "Cambia los minerales." },
    { q: "El horizonte B del suelo…", o: ["es la roca madre", "tiene mucho humus", "acumula arcillas y sales", "no existe"], a: 2, e: "Arrastradas desde arriba." },
    { q: "Las líneas que unen puntos de igual altitud son…", o: ["paralelos", "meridianos", "isobaras", "curvas de nivel"], a: 3, e: "Mapas topográficos." },
    { q: "Para reducir el riesgo de inundación conviene…", o: ["no construir en zonas inundables", "talar las riberas", "canalizar con hormigón todo", "construir en los cauces"], a: 0, e: "Respetar el espacio del río." },
  ],
  feynman: [...["Por qué el relieve es una competición entre procesos internos y externos", "Las cuatro etapas de la acción de un agente externo", "Qué formas crea cada agente: ríos, karst, glaciares, viento y mar"], "Cómo se forma un suelo y por qué no es renovable", "Cómo se lee el relieve en un mapa topográfico"],
  mapa: mapa("AGENTES EXTERNOS", "var(--eso)", [
    ["Etapas", "meteorizar · erosionar · transportar · sedimentar", "var(--ink)"],
    ["Agua", "ríos · torrentes · karst", "var(--water)"],
    ["Hielo y viento", "glaciares · dunas", "var(--inf)"],
    ["Mar y humanos", "acantilados · playas · embalses", "var(--pen)"],
  ], 300),
  tarjetas: [
    ...[
    ["Meteorización", "Rotura o alteración de las rocas en su sitio."],
    ["Erosión", "Arranque de los materiales por un agente externo."],
    ["Sedimentación", "Depósito de los materiales cuando el agente pierde fuerza."],
    ["Gelifracción", "Rotura de rocas por el hielo que se forma en sus grietas."],
    ["Valle en V y en U", "V: fluvial. U: glaciar."],
    ["Modelado kárstico", "Formas creadas por la disolución de la caliza: dolinas, cuevas, estalactitas."],
    ["Delta", "Depósito de sedimentos en la desembocadura de un río."],
    ["Riesgo geológico", "Proceso natural que puede causar daños, como una inundación."],
  ],
    ["Horizontes del suelo", "Capas A (humus), B (acumulación) y C (roca fragmentada)."],
    ["Berrocal", "Paisaje granítico de grandes bolos redondeados."],
    ["Curva de nivel", "Línea que une puntos de igual altitud en un mapa."],
    ["Escala", "Relación entre una distancia del mapa y la real."],
  ],
  glosario: [
    ["Relieve", "Conjunto de formas de la superficie terrestre."],
    ["Proceso interno", "Proceso causado por la energía del interior de la Tierra."],
    ["Agente geológico externo", "Agua, hielo, viento, mar o seres vivos que modelan el relieve."],
    ["Meteorización", "Rotura o alteración de las rocas en su sitio."],
    ["Erosión", "Arranque de materiales por un agente externo."],
    ["Sedimentación", "Depósito de materiales cuando el agente pierde fuerza."],
    ["Gelifracción", "Rotura de rocas por el hielo en sus grietas."],
    ["Suelo", "Capa superficial de la corteza donde crecen las plantas."],
    ["Humus", "Materia orgánica descompuesta del suelo."],
    ["Cárcava", "Surco profundo excavado por la arroyada en terrenos blandos."],
    ["Meandro", "Curva de un río en su curso medio."],
    ["Delta", "Depósito de sedimentos en la desembocadura de un río."],
    ["Acuífero", "Roca porosa empapada de agua subterránea."],
    ["Karst", "Relieve creado por la disolución de la caliza."],
    ["Morrena", "Depósito de rocas arrastradas por un glaciar."],
    ["Duna", "Montículo de arena acumulado por el viento."],
    ["Acantilado", "Costa rocosa vertical socavada por las olas."],
    ["Curva de nivel", "Línea que une puntos de igual altitud."],
    ["Riesgo geológico", "Proceso natural que puede causar daños."],
  ],
  situacion: {
    titulo: "Geólogos de nuestro entorno",
    reto: "El ayuntamiento quiere crear una ruta geológica por la comarca y os pide que identifiquéis las formas de relieve, los agentes que las crearon y los riesgos de la zona.",
    pasos: [
      "Localizad vuestra zona en el visor del Instituto Geográfico Nacional y en un mapa topográfico.",
      "Identificad tres formas de relieve y el agente que las ha creado, y trazad un perfil topográfico.",
      "Haced una salida o usad fotografías para describir un corte de suelo y sus horizontes.",
      "Consultad el mapa de zonas inundables y valorad los riesgos con peligrosidad, exposición y vulnerabilidad.",
      "Diseñad la ruta con paradas, fotos y explicaciones breves.",
    ],
    producto: "Guía de la ruta geológica con mapa, perfil, fotografías y fichas de cada parada.",
    evaluacion: [
      "Identificación correcta de formas de relieve y agentes.",
      "Uso correcto del mapa topográfico, la escala y el perfil.",
      "Análisis riguroso de los riesgos.",
      "Claridad y calidad de la guía.",
    ],
  },
  familias: ["En una excursión, buscad un ejemplo de meteorización, de erosión y de sedimentación y fotografiadlo.", "Consultad el mapa de zonas inundables de vuestro municipio.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geología: procesos geológicos externos e internos, agentes geológicos y formas de modelado, el suelo, el relieve según el tipo de roca, interpretación de mapas topográficos, riesgos geológicos y el papel del ser humano (RD 217/2022, Biología y Geología 1º a 3º). En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Mesa de arena con agua para simular erosión, meandros y deltas.",
      "Disolución de una tiza o una caliza en vinagre para ver la meteorización química.",
      "Lectura de un mapa topográfico o de fotos aéreas del IGN para identificar formas de relieve.",
      "Construcción de un perfil topográfico a partir de un mapa de curvas de nivel.",
      "Columna de suelo en una botella para observar los horizontes y la infiltración.",
    ],
  },
  fuentes: [...[RD, wiki("Erosión", "Erosi%C3%B3n"), wiki("Karst", "Karst")], { t: "Instituto Geográfico Nacional", url: "https://www.ign.es/" }],
  revisado: "2026-11-13",
};
