// Biología, Geología y Ciencias Ambientales 1º Bachillerato · Procesos geológicos y rocas (nivel libro).
// Dibujos propios en SVG con las ayudas de _bach1-byg.js.
const { tema, L5, L6, cadena, marco, T, uid, flecha } = require("./_bach1-byg");

// Pliegue con capas: anticlinal y sinclinal.
function pliegue() {
  const capas = [[0, "var(--sun)"], [15, "var(--pen)"], [30, "var(--leaf)"]];
  const s = capas.map(([d, c]) => `<path d="M20 ${100 + d} Q 75 ${20 + d} 130 ${80 + d} T 240 ${60 + d}" fill="none" stroke="${c}" stroke-opacity=".75" stroke-width="13"/>`).join("");
  return marco("Pliegue con un anticlinal y un sinclinal", `${s}
  <path d="M75 34 V 120 M185 76 V 158" stroke="var(--red)" stroke-width="1.6" stroke-dasharray="4 3"/>
  ${T(75, 24, "anticlinal", { fs: 11, b: true, c: "var(--red)" })}${T(185, 172, "sinclinal", { fs: 11, b: true, c: "var(--red)" })}
  ${T(20, 160, "plano axial (rojo)", { fs: 9.5, a: "start" })}${T(240, 24, "capas plegadas", { fs: 9.5, a: "end" })}`);
}

// Falla normal: el bloque derecho desciende a lo largo del plano de falla.
function falla() {
  const id = uid("fa");
  return marco("Falla normal producida por distensión", `<path d="M20 50 H140 L110 160 H20 Z" fill="var(--sun)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.2"/>
  <path d="M133.5 74 H240 V160 H110 Z" fill="var(--sun)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.2"/>
  <path d="M20 80 H131.8 L126.4 100 H20 Z" fill="var(--pen)" fill-opacity=".55"/><path d="M125.3 104 H240 V124 H119.9 Z" fill="var(--pen)" fill-opacity=".55"/>
  <path d="M141 48 L108 168" stroke="var(--red)" stroke-width="2.4"/>
  <path d="M86 136 H 36" stroke="var(--ink)" stroke-width="2.2" marker-end="url(#${id})"/><path d="M172 142 H 222" stroke="var(--ink)" stroke-width="2.2" marker-end="url(#${id})"/>
  ${T(130, 22, "Falla normal: distensión", { fs: 12, b: true })}${T(148, 64, "plano de falla", { fs: 10, c: "var(--red)", b: true, a: "start" })}
  ${T(60, 174, "bloque levantado", { fs: 9.5 })}${T(192, 174, "bloque hundido", { fs: 9.5 })}`, flecha(id, "var(--ink)"));
}

module.exports = tema({
  titulo: "Procesos geológicos y rocas",
  minutos: 115,
  secciones: [5, 3, 4],
  objetivos: [
    "Distinguir los procesos geológicos internos y externos y relacionarlos con sus fuentes de energía",
    "Explicar el origen de los magmas, su consolidación y la clasificación de las rocas magmáticas",
    "Relacionar los tipos de vulcanismo con la composición del magma",
    "Describir la deformación de las rocas: pliegues, fallas y diaclasas",
    "Explicar el metamorfismo, sus factores y las principales rocas metamórficas",
    "Describir la meteorización, la formación de rocas sedimentarias y el ciclo de las rocas",
  ],
  claves: ["proceso geológico interno", "proceso geológico externo", "magma", "cristalización", "roca plutónica", "roca volcánica", "textura", "erupción", "pliegue", "falla", "diaclasa", "metamorfismo", "foliación", "meteorización", "erosión", "sedimentación", "diagénesis", "ciclo de las rocas"],
  pregunta: {
    texto: "El granito de la sierra de Guadarrama y la arena de una playa del Mediterráneo están formados por los mismos minerales. ¿Cómo puede ser?",
    respuesta: "La arena de muchas playas procede de la <mark>meteorización y erosión del granito</mark> y otras rocas. El granito se formó a varios kilómetros de profundidad por la cristalización lenta de un magma, y está formado por cuarzo, feldespato y mica. Cuando la erosión lo dejó al descubierto, el agua y los cambios de temperatura lo disgregaron; los ríos transportaron los granos de cuarzo, el mineral más resistente, hasta el mar. Con el tiempo, esa arena puede compactarse y formar arenisca: es el <b>ciclo de las rocas</b>.",
  },
  lectura: {
    titulo: "Leer el paisaje en las rocas",
    html: `<p>En 1788, el naturalista escocés James Hutton llevó a dos amigos en barca hasta Siccar Point, un acantilado de la costa de Escocia. Allí les mostró unas capas de roca casi verticales cubiertas por otras capas horizontales de arenisca roja. Hutton razonó así: las capas inferiores se depositaron horizontales en el fondo del mar, se endurecieron, fueron plegadas hasta ponerse verticales, se elevaron, la erosión las arrasó y, después, el mar volvió a cubrirlas y depositó nuevas capas encima. Todo eso, con la lentitud de los procesos que vemos hoy, exigía un tiempo inmenso. Uno de sus acompañantes escribió que «la mente parecía marearse al mirar tan lejos en el abismo del tiempo».</p><p>Hutton había comprendido que las rocas no son eternas: se forman, se destruyen y se transforman en otras rocas en un ciclo sin fin, impulsado por el calor interno de la Tierra y por la energía del Sol. Los procesos que hoy erosionan una montaña o depositan barro en un delta son los mismos que actuaron en el pasado. En este tema aprenderás a reconocer las rocas y a interpretar los procesos que las formaron: cada roca es un documento que cuenta una parte de la historia del planeta.</p>`,
  },
  bloques: [
    { h: "Procesos geológicos internos y externos", p: [
      "El relieve terrestre es el resultado de dos grupos de procesos que actúan a la vez y en sentido opuesto. Los <mark>procesos geológicos internos</mark> se originan en el interior de la Tierra y obtienen su energía del <b>calor interno</b>, procedente del calor residual de la formación del planeta y de la desintegración de elementos radiactivos. Comprenden el magmatismo, el metamorfismo y la deformación de las rocas, y se manifiestan en la superficie como volcanes, terremotos y cordilleras. Son <b>constructivos</b>: crean relieve.",
      "Los <mark>procesos geológicos externos</mark> se producen en la superficie y obtienen su energía de la <b>radiación solar</b>, que mueve la atmósfera y el ciclo del agua, y de la <b>gravedad</b>. Comprenden la meteorización, la erosión, el transporte y la sedimentación, realizados por agentes como el agua, el hielo, el viento o los seres vivos. Son <b>destructivos</b> del relieve: tienden a rebajar las zonas elevadas y a rellenar las depresiones, hasta nivelar el paisaje. El relieve de cada lugar depende del equilibrio entre ambos: en una cordillera joven como los Alpes dominan los procesos internos que la elevan, mientras que en un macizo antiguo como el Macizo Ibérico la erosión ha ganado la partida y quedan relieves suaves. Ambos tipos de procesos, además, forman los tres grandes tipos de rocas: magmáticas, metamórficas y sedimentarias.",
    ], svg: L6.compara("Procesos geológicos internos y externos", ["Internos", "var(--red)", ["calor interno", "magmatismo", "deformación", "crean relieve"]], ["Externos", "var(--pen)", ["Sol y gravedad", "meteorización", "erosión y depósito", "rebajan relieve"]]) },
    { h: "El origen de los magmas", p: [
      "Un <mark>magma</mark> es una masa de roca fundida a alta temperatura (entre 700 y 1.200 °C), formada por una fase líquida rica en silicatos, cristales en suspensión y gases disueltos, como vapor de agua, dióxido de carbono y compuestos de azufre. Aunque el manto es sólido, en ciertas condiciones sus rocas o las de la corteza se funden parcialmente. Hay tres mecanismos: la <b>descompresión</b>, cuando el manto asciende y la presión disminuye sin apenas enfriarse, como en las dorsales y los puntos calientes; la <b>adición de agua</b>, que baja el punto de fusión de las rocas, como en las zonas de subducción; y el <b>aumento de temperatura</b>, cuando un magma caliente funde las rocas de la corteza que atraviesa.",
      "La fusión es <b>parcial</b>: primero se funden los minerales con menor punto de fusión, de modo que el magma es más rico en sílice que la roca de la que procede. Según su contenido en sílice, los magmas se clasifican en <b>básicos</b> (menos del 52 % de SiO₂), como los basálticos, muy calientes y fluidos; <b>intermedios</b>, como los andesíticos; y <b>ácidos</b> (más del 65 %), como los graníticos o riolíticos, más fríos, viscosos y ricos en gases. Al ser menos denso que las rocas que lo rodean, el magma <b>asciende</b> y se acumula en cámaras magmáticas, donde puede cambiar su composición antes de solidificarse o salir al exterior.",
    ], svg: cadena("Formación y ascenso de un magma", [["Fusión parcial del manto", "var(--red)"], ["Asciende por menor densidad", "var(--sun)"], ["Cámara magmática", "var(--pen)"]], ["", ""], "Del manto a la cámara magmática") },
    { h: "La consolidación de los magmas", p: [
      "Cuando el magma se enfría, sus componentes cristalizan en minerales y se forman las <mark>rocas magmáticas</mark> o ígneas. No todos los minerales cristalizan a la vez. El geólogo Norman Bowen describió el orden de cristalización: primero lo hacen los minerales ricos en hierro y magnesio, de color oscuro, como el olivino y los piroxenos, junto con las plagioclasas cálcicas; después los anfíboles y la biotita; y al final, a menor temperatura, el feldespato potásico, la moscovita y el <b>cuarzo</b>. Si los primeros cristales se separan del líquido, por ejemplo al hundirse en la cámara, el magma restante se enriquece en sílice: es la <b>diferenciación magmática</b>, que explica que de un mismo magma puedan derivar rocas distintas.",
      "Al final de la consolidación, los fluidos residuales, ricos en agua y en elementos raros, forman las <b>pegmatitas</b>, rocas de cristales enormes, y los <b>filones hidrotermales</b>, donde precipitan minerales metálicos como galena, blenda o pirita, y también oro y plata. Por eso muchos yacimientos minerales están asociados a rocas magmáticas. La velocidad de enfriamiento determina la <mark>textura</mark>, es decir, el tamaño y disposición de los cristales: un enfriamiento lento permite que los cristales crezcan, y uno rápido produce cristales diminutos o incluso vidrio sin estructura cristalina.",
    ], svg: L5.escala("Serie de cristalización de Bowen simplificada", "Orden de cristalización", [["1º", "olivino", "var(--leaf)"], ["2º", "piroxeno", "var(--inf)"], ["3º", "anfíbol", "var(--pen)"], ["4º", "biotita", "var(--sun)"], ["5º", "cuarzo", "var(--red)"]], "1.200 °C", "650 °C"), v: ["roc-b", "Los magmas y las rocas ígneas"] },
    { h: "Tipos de rocas magmáticas", p: [
      "Según el lugar donde se consolida el magma se distinguen tres tipos de rocas magmáticas. Las <mark>rocas plutónicas</mark> o intrusivas se forman en el interior de la corteza, a varios kilómetros de profundidad, por enfriamiento muy lento, durante miles o millones de años. Tienen <b>textura granuda</b>: todos sus cristales son grandes y visibles a simple vista. Forman grandes masas llamadas plutones o batolitos. Las <mark>rocas volcánicas</mark> o extrusivas se forman en la superficie, al enfriarse rápidamente la lava. Tienen <b>textura porfídica</b>, con algunos cristales grandes formados en la cámara dentro de una pasta de cristales microscópicos, o <b>textura vítrea</b>, sin cristales, como la obsidiana; si los gases escapan al solidificarse, quedan huecos, como en la piedra pómez.",
      "Las <mark>rocas filonianas</mark> se forman al consolidarse el magma en grietas, formando diques y sills, a profundidad intermedia; tienen cristales de tamaño medio. Combinando el lugar de formación con la composición se obtienen las rocas más comunes. Los magmas ácidos forman <b>granito</b> en profundidad y <b>riolita</b> en superficie; ambos son claros, con cuarzo, feldespato y mica. Los intermedios forman diorita y andesita. Los básicos forman <b>gabro</b> en profundidad y <b>basalto</b> en superficie, oscuros y ricos en piroxeno y plagioclasa. El basalto es la roca de la corteza oceánica, y el granito, la más característica de la continental. En la Península hay granitos en Galicia, el Sistema Central y Cataluña, y basaltos en Canarias, Olot y Campo de Calatrava.",
    ], svg: L6.tabla("Rocas magmáticas según composición y lugar de formación", ["Magma", "Plutónica", "Volcánica"], [["Ácido", "granito", "riolita"], ["Intermedio", "diorita", "andesita"], ["Básico", "gabro", "basalto"]]) },
    { h: "El vulcanismo", p: [
      "Un <mark>volcán</mark> es el lugar por donde el magma sale a la superficie. Consta de una cámara magmática, una chimenea y un cráter, y el cono se construye con los materiales emitidos. El tipo de erupción depende sobre todo de la <b>viscosidad</b> del magma y de su contenido en <b>gases</b>. Los magmas básicos, fluidos, dejan escapar los gases fácilmente y producen erupciones <b>efusivas</b>, con coladas de lava que recorren grandes distancias: es el tipo hawaiano, que forma volcanes en escudo de laderas suaves. El tipo estromboliano alterna coladas con explosiones moderadas que lanzan bombas y lapilli, como en la erupción de La Palma de 2021. Los magmas ácidos, viscosos, retienen los gases hasta que la presión los libera de golpe: las erupciones son <b>explosivas</b>, de tipo vulcaniano o pliniano, como la del Vesubio que sepultó Pompeya.",
      "Los productos volcánicos son de tres tipos. Los <b>gases</b>, sobre todo vapor de agua, CO₂ y SO₂. Las <b>lavas</b>, que al enfriarse forman coladas cordadas o escoriáceas y, bajo el agua, lavas almohadilladas. Y los <b>piroclastos</b>, fragmentos lanzados al aire que se clasifican por tamaño en cenizas, lapilli y bombas. Los fenómenos más peligrosos son las <mark>nubes ardientes</mark> o coladas piroclásticas, mezclas de gases y fragmentos a cientos de grados que descienden por las laderas a más de 100 km/h, y los <b>lahares</b>, coladas de barro formadas cuando la erupción funde hielo o se combina con lluvias.",
    ], svg: L6.radial("Productos de una erupción volcánica", "VOLCÁN", ["Gases", "Coladas de lava", "Piroclastos", "Nubes ardientes"], "var(--red)") },
    { h: "La deformación de las rocas: pliegues", p: [
      "Las rocas de la litosfera están sometidas a <b>esfuerzos</b>: de <b>compresión</b>, que tienden a acortarlas, de <b>distensión</b> o tensión, que tienden a estirarlas, y de <b>cizalla</b>, que desplazan unas partes respecto a otras. La respuesta de una roca depende de su naturaleza, de la temperatura, de la presión y del tiempo. Puede deformarse de manera <b>elástica</b>, recuperando su forma al cesar el esfuerzo; <b>plástica</b> o dúctil, quedando deformada permanentemente sin romperse, lo que favorecen las altas temperaturas y presiones de las zonas profundas; o <b>frágil</b>, rompiéndose, lo que es típico de las rocas frías cercanas a la superficie.",
      "Los <mark>pliegues</mark> son ondulaciones de las capas de roca producidas por deformación dúctil, generalmente por compresión. Sus elementos son la <b>charnela</b>, zona de máxima curvatura; los <b>flancos</b>, las dos partes situadas a cada lado; el <b>plano axial</b>, que divide el pliegue en dos mitades; y el <b>eje</b>, la línea de intersección del plano axial con la charnela. Un <b>anticlinal</b> tiene las capas más antiguas en el núcleo y suele tener forma convexa hacia arriba; un <b>sinclinal</b> tiene las capas más modernas en el núcleo y suele ser cóncavo hacia arriba. Según la inclinación del plano axial, los pliegues pueden ser rectos, inclinados, tumbados o acostados. Los pliegues pueden medir desde milímetros hasta decenas de kilómetros, y son característicos de cordilleras como los Pirineos.",
    ], svg: pliegue() },
    { h: "Fallas y diaclasas", p: [
      "Cuando la deformación es frágil, las rocas se rompen. Si no hay desplazamiento entre los bloques, la fractura se llama <mark>diaclasa</mark>: son muy frecuentes y facilitan la entrada del agua y la meteorización, como se observa en los berrocales graníticos. Si los bloques se desplazan uno respecto al otro, la fractura es una <mark>falla</mark>. Sus elementos son el <b>plano de falla</b>, superficie de rotura; los <b>labios</b> o bloques, uno levantado y otro hundido; y el <b>salto</b>, la distancia que se han desplazado.",
      "Según el movimiento de los bloques se distinguen tres tipos. En la <b>falla normal</b>, producida por distensión, el bloque situado sobre el plano inclinado desciende: la corteza se alarga. Son típicas de los rifts y de las dorsales, donde forman fosas tectónicas o grabens (bloques hundidos) y horsts (bloques levantados), como en el Rift africano o en la depresión del Rin. En la <b>falla inversa</b>, producida por compresión, el bloque superior asciende sobre el otro: la corteza se acorta. Si el plano es poco inclinado, se forma un cabalgamiento, característico de las cordilleras de colisión. En la <b>falla de desgarre</b> o de dirección, los bloques se desplazan horizontalmente por cizalla, como en las fallas transformantes. El movimiento brusco de las fallas activas produce la mayor parte de los terremotos.",
    ], svg: falla() },
    { h: "El metamorfismo", p: [
      "El <mark>metamorfismo</mark> es el conjunto de transformaciones que experimenta una roca en estado sólido cuando se ve sometida a condiciones de presión y temperatura diferentes de aquellas en las que se formó. Sus factores son la <b>temperatura</b>, entre unos 200 °C y el inicio de la fusión, que favorece las reacciones químicas; la <b>presión</b>, tanto la litostática, que actúa por igual en todas direcciones por el peso de las rocas, como la <b>presión dirigida</b>, que actúa en una dirección durante la formación de cordilleras; los <b>fluidos</b>, que aceleran las reacciones; y el <b>tiempo</b>. Si la roca llega a fundirse, el proceso ya no es metamorfismo, sino magmatismo.",
      "Durante el metamorfismo, los minerales se <b>recristalizan</b>, aumentando de tamaño, o se transforman en otros estables en las nuevas condiciones, como el granate, la estaurolita o la sillimanita. Bajo presión dirigida, los minerales laminares, como las micas, se orientan perpendicularmente al esfuerzo y la roca adquiere <mark>foliación</mark>, una estructura en láminas. Hay varios tipos de metamorfismo. El <b>regional</b> afecta a grandes áreas durante la formación de cordilleras, con presión y temperatura elevadas. El <b>de contacto</b> se produce alrededor de una intrusión magmática por el aumento de la temperatura, formando una aureola. El <b>dinámico</b> se produce en las fallas por presión dirigida, y el <b>de impacto</b>, al caer un meteorito.",
    ], svg: L6.radial("Factores del metamorfismo", "METAMORFISMO", ["Temperatura", "Presión dirigida", "Fluidos", "Tiempo"], "var(--inf)"), v: ["roc-c", "Las rocas metamórficas"] },
    { h: "Las rocas metamórficas", p: [
      "Las rocas metamórficas se clasifican según su estructura. Las <mark>rocas foliadas</mark> se forman en el metamorfismo regional a partir de rocas con minerales arcillosos, como las lutitas. A medida que aumenta la intensidad del metamorfismo, o grado metamórfico, se forma una secuencia de rocas. La <b>pizarra</b>, de grado bajo, tiene minerales microscópicos y se rompe en láminas planas, por lo que se usa en tejados. La <b>filita</b> tiene un brillo satinado. El <b>esquisto</b>, de grado medio, tiene micas visibles y a menudo cristales de granate. El <b>gneis</b>, de grado alto, presenta bandas claras de cuarzo y feldespato alternadas con bandas oscuras de micas. Si la temperatura sigue aumentando, comienza la fusión parcial y se forman las <b>migmatitas</b>, mezcla de roca metamórfica y magmática.",
      "Las <mark>rocas no foliadas</mark> se forman sobre todo por metamorfismo de contacto o a partir de rocas con un solo mineral dominante. El <b>mármol</b> procede de la caliza, por recristalización de la calcita; es una roca ornamental muy apreciada, como el de Macael (Almería). La <b>cuarcita</b> procede de la arenisca cuarzosa y es muy dura y resistente a la erosión, por lo que forma crestas en el relieve, como en los montes de Toledo. Las <b>corneanas</b> se forman en las aureolas de contacto a partir de rocas arcillosas. Observar una roca metamórfica permite deducir las condiciones que soportó.",
    ], svg: L5.escala("Secuencia de rocas metamórficas a partir de una lutita", "Grado metamórfico creciente", [["1", "lutita", "var(--sun)"], ["2", "pizarra", "var(--inf)"], ["3", "esquisto", "var(--pen)"], ["4", "gneis", "var(--leaf)"], ["5", "migmatita", "var(--red)"]], "bajo", "alto") },
    { h: "La meteorización y el suelo", p: [
      "Cuando las rocas quedan expuestas en la superficie, entran en contacto con la atmósfera, el agua y los seres vivos y se alteran: es la <mark>meteorización</mark>, que se produce sin transporte. La <b>meteorización física o mecánica</b> fragmenta la roca sin cambiar su composición. Las principales formas son la <b>gelifracción</b>, en la que el agua de las grietas se congela, aumenta de volumen un 9 % y actúa como una cuña; la <b>termoclastia</b>, por las dilataciones y contracciones de los cambios de temperatura en los desiertos; la <b>descompresión</b> de rocas formadas en profundidad al quedar en superficie, que produce lajas; y la acción de las raíces.",
      "La <b>meteorización química</b> altera los minerales mediante reacciones con el agua, el oxígeno y el CO₂. La <b>disolución</b> afecta a rocas como la halita, el yeso y la caliza, esta última gracias al agua con CO₂ (ácido carbónico), lo que forma el relieve kárstico, con cuevas, simas y dolinas. La <b>oxidación</b> afecta a los minerales de hierro y da colores rojizos. La <b>hidrólisis</b> transforma los feldespatos en arcillas y es la responsable de que el granito se convierta en arena o «jabre». Los seres vivos intervienen en ambos tipos: es la <b>meteorización biológica</b>. La meteorización es el primer paso para la formación del <mark>suelo</mark>, que se desarrolla cuando los fragmentos de roca se mezclan con materia orgánica y se organizan en capas llamadas horizontes.",
    ], svg: L6.compara("Tipos de meteorización", ["Física", "var(--pen)", ["fragmenta la roca", "gelifracción", "termoclastia", "descompresión"]], ["Química", "var(--leaf)", ["altera minerales", "disolución", "oxidación", "hidrólisis"]]) },
    { h: "Erosión, transporte y sedimentación", p: [
      "Los fragmentos producidos por la meteorización son arrancados y desplazados por los <b>agentes geológicos externos</b>: el agua de escorrentía, los ríos, las aguas subterráneas, los glaciares, el viento, el mar y la gravedad. La <mark>erosión</mark> es el arranque de materiales; el <mark>transporte</mark>, su desplazamiento, que puede ser en disolución, en suspensión (partículas finas como la arcilla), por saltación o por arrastre en el fondo (cantos y gravas); y la <mark>sedimentación</mark>, su depósito cuando el agente pierde energía, en las cuencas sedimentarias, como lagos, deltas, plataformas marinas o fondos oceánicos.",
      "Cada agente deja huellas reconocibles. Los <b>ríos</b> excavan valles en V y depositan sedimentos en llanuras de inundación y deltas, como el del Ebro. Los <b>glaciares</b> excavan valles en U y depositan morrenas, con fragmentos de todos los tamaños mezclados. El <b>viento</b> forma dunas y transporta polvo a miles de kilómetros, como el polvo sahariano que llega a la Península. El <b>mar</b> erosiona acantilados y deposita playas. Durante el transporte, los fragmentos se desgastan y se redondean, y se <b>seleccionan</b> por tamaños: el agua deposita primero los más gruesos y lleva más lejos los finos. Por eso, examinando un sedimento se puede deducir el agente que lo transportó y la distancia recorrida.",
    ], svg: L5.pasos("Etapas de la formación de una roca sedimentaria", ["Meteorización", "Erosión", "Transporte", "Sedimentación", "Diagénesis"], "var(--pen)") },
    { h: "Rocas sedimentarias y ciclo de las rocas", p: [
      "Los sedimentos acumulados en las cuencas se transforman en roca mediante la <mark>diagénesis</mark>: con el enterramiento, el peso de las capas superiores los <b>compacta</b>, expulsa el agua y reduce los huecos; después, los minerales que precipitan del agua, como calcita o sílice, actúan como un <b>cemento</b> que une los granos. Las rocas sedimentarias se disponen en capas o <b>estratos</b> y pueden contener fósiles. Se clasifican en <b>detríticas</b>, formadas por fragmentos de otras rocas y clasificadas según su tamaño: conglomerados (cantos), areniscas (arena) y lutitas (arcilla y limo); <b>químicas</b>, formadas por precipitación de sustancias disueltas, como las evaporitas (yeso, sal) y algunas calizas; <b>orgánicas</b> o bioquímicas, formadas a partir de restos de seres vivos, como muchas calizas de conchas y corales; y los <b>combustibles fósiles</b>, como el carbón y el petróleo.",
      "Todas las rocas están relacionadas mediante el <mark>ciclo de las rocas</mark>. Un magma cristaliza y forma una roca magmática; si queda en superficie, se meteoriza y sus fragmentos forman sedimentos y rocas sedimentarias; si se entierra y sufre presión y temperatura, se transforma en roca metamórfica; y si llega a fundirse, forma un nuevo magma. Hay muchos atajos: cualquier roca puede meteorizarse o fundirse. El ciclo funciona gracias a la tectónica de placas, que hunde, eleva y funde las rocas.",
    ], svg: L6.ciclo("Ciclo de las rocas", "ROCAS", ["Magmática", "Sedimento", "Sedimentaria", "Metamórfica", "Magma"], "var(--sun)") },
  ],
  figura: { titulo: "Procesos geológicos y rocas en cuatro ideas", items: [["Magmatismo", "fusión parcial", "plutónicas", "volcánicas"], ["Deformación", "esfuerzos", "pliegues", "fallas"], ["Metamorfismo", "presión y calor", "foliación", "pizarra, mármol"], ["Externos", "meteorización", "erosión", "diagénesis"]] },
  video: ["roc-a", "El ciclo de las rocas"],
  ejemplos: [
    ["Una roca tiene cristales grandes y visibles de cuarzo, feldespato y mica. Clasifícala.", ["Cristales grandes: textura granuda → enfriamiento lento en profundidad → plutónica.", "Cuarzo, feldespato y mica: magma ácido."], "Es un granito, roca magmática plutónica ácida."],
    ["Una roca oscura tiene una pasta de cristales microscópicos con algunos cristales mayores de olivino. Clasifícala.", ["Pasta microscópica con fenocristales: textura porfídica → volcánica.", "Oscura y con olivino: magma básico."], "Es un basalto, roca volcánica básica."],
    ["En una sierra, las capas más antiguas ocupan el centro de un pliegue. ¿Qué tipo de pliegue es?", ["En el anticlinal las capas más antiguas están en el núcleo.", "En el sinclinal, las más modernas."], "Es un anticlinal."],
    ["Un estrato desplazado tiene el bloque situado sobre el plano de falla hundido 30 m. ¿Qué tipo de falla y qué esfuerzo?", ["El bloque superior ha descendido: falla normal.", "Las fallas normales alargan la corteza: distensión.", "Salto: 30 m."], "Falla normal por distensión, con 30 m de salto."],
    ["Una roca metamórfica con bandas claras y oscuras alternas se formó a partir de una lutita. Indica su nombre y el grado.", ["Bandas alternas: bandeado gnéisico.", "Secuencia de la lutita: pizarra → esquisto → gneis."], "Es un gneis, de grado metamórfico alto."],
    ["Un conglomerado tiene cantos muy redondeados y otro, angulosos. ¿Cuál ha sufrido mayor transporte?", ["El transporte desgasta y redondea los fragmentos.", "Cantos angulosos: poco transporte (brecha)."], "El de cantos redondeados ha recorrido mayor distancia."],
  ],
  errores: [
    "Creer que el manto es líquido y forma magma en todas partes: el magma solo se forma por fusión parcial en zonas concretas.",
    "Confundir el lugar de formación con la composición: granito y riolita tienen igual composición y distinto lugar de formación.",
    "Pensar que una roca metamórfica se ha fundido: el metamorfismo ocurre en estado sólido.",
    "Identificar siempre anticlinal con forma de «montaña»: se define por la edad de las capas del núcleo.",
    "Confundir meteorización y erosión: la meteorización altera la roca in situ; la erosión la arranca.",
    "Creer que las rocas sedimentarias se forman solo en el mar: también en ríos, lagos, desiertos y glaciares.",
  ],
  ejercicios: {
    b: [
      ["¿De dónde obtienen su energía los procesos geológicos internos y externos?", "Internos: del calor interno de la Tierra. Externos: de la radiación solar y la gravedad."],
      ["Define magma.", "Masa de roca fundida con cristales en suspensión y gases disueltos."],
      ["Diferencia rocas plutónicas y volcánicas por su textura.", "Plutónicas: granuda, cristales grandes. Volcánicas: porfídica o vítrea, cristales pequeños o vidrio."],
      ["Indica la roca plutónica y la volcánica de un magma básico.", "Gabro y basalto."],
      ["Cita tres productos de una erupción volcánica.", "Gases, lavas y piroclastos."],
      ["Define pliegue y falla.", "Pliegue: ondulación de capas por deformación dúctil. Falla: fractura con desplazamiento de los bloques."],
      ["¿Qué diferencia hay entre una diaclasa y una falla?", "En la diaclasa no hay desplazamiento de los bloques; en la falla sí."],
      ["Cita los factores del metamorfismo.", "Temperatura, presión (litostática y dirigida), fluidos y tiempo."],
      ["¿De qué roca procede el mármol y de cuál la cuarcita?", "El mármol, de la caliza; la cuarcita, de la arenisca cuarzosa."],
      ["Ordena: transporte, sedimentación, meteorización, diagénesis, erosión.", "Meteorización, erosión, transporte, sedimentación y diagénesis."],
    ],
    m: [
      ["Explica los tres mecanismos de formación de magmas y dónde actúa cada uno.", "Descompresión (dorsales, puntos calientes), adición de agua (subducción) y aumento de temperatura (corteza atravesada por magmas calientes)."],
      ["¿Por qué los magmas ácidos producen erupciones explosivas?", "Son viscosos y retienen los gases; la presión aumenta hasta que se liberan bruscamente."],
      ["Explica la diferenciación magmática.", "Los primeros minerales que cristalizan, pobres en sílice, se separan del líquido; el magma residual se enriquece en sílice y puede formar rocas distintas."],
      ["¿Por qué una roca volcánica puede tener textura porfídica?", "Los fenocristales crecieron lentamente en la cámara magmática; al salir, el resto se enfrió rápido y formó la pasta microcristalina."],
      ["Relaciona los tipos de deformación con la profundidad.", "Cerca de la superficie, rocas frías: deformación frágil (fallas). En profundidad, más temperatura y presión: deformación dúctil (pliegues)."],
      ["Compara una falla normal y una inversa.", "Normal: distensión, el bloque superior baja, la corteza se alarga. Inversa: compresión, el bloque superior sube, la corteza se acorta."],
      ["¿Qué es la foliación y por qué se produce?", "Disposición en láminas de los minerales planos, orientados perpendicularmente a la presión dirigida."],
      ["Diferencia el metamorfismo regional y el de contacto.", "Regional: grandes áreas, presión y temperatura altas en orogenias, rocas foliadas. Contacto: alrededor de una intrusión por la temperatura, aureola, rocas no foliadas."],
      ["Explica la gelifracción y en qué climas es importante.", "El agua de las grietas se congela, aumenta de volumen y fragmenta la roca; en climas con ciclos frecuentes de hielo y deshielo, como la alta montaña."],
      ["¿Por qué el granito se transforma en arena?", "La hidrólisis altera los feldespatos en arcilla; el cuarzo, resistente, queda suelto como arena (jabre)."],
      ["Explica la diagénesis.", "Transformación del sedimento en roca: compactación por el peso que expulsa agua y cementación por minerales que precipitan entre los granos."],
      ["Clasifica: arenisca, yeso, caliza de corales, carbón, conglomerado.", "Detríticas: arenisca y conglomerado. Química: yeso. Orgánica: caliza de corales. Combustible fósil: carbón."],
    ],
    a: [
      ["Describe el recorrido de un átomo de silicio desde un granito hasta un gneis pasando por otras rocas.", "Granito → meteorización (cuarzo suelto) → transporte y sedimentación → arenisca → enterramiento y metamorfismo… o la arcilla de los feldespatos forma lutita → pizarra → esquisto → gneis."],
      ["Una colada de lava basáltica recorrió 15 km y otra andesítica, 1 km. Explica la diferencia.", "El basalto, pobre en sílice y más caliente, es fluido; la andesita, con más sílice, es más viscosa y avanza menos."],
      ["Interpreta un corte con capas plegadas cortadas por una falla y un dique que corta ambas.", "Primero se depositaron las capas, luego se plegaron, después se fracturaron por la falla y, por último, el dique intruyó: el dique es lo más moderno."],
      ["¿Por qué en el Macizo Ibérico abundan granitos y rocas metamórficas, y en las cuencas del Ebro y del Tajo, rocas sedimentarias?", "El Macizo es el núcleo erosionado de una cordillera varisca: aflora su interior profundo. Las cuencas son depresiones que se rellenaron con sedimentos procedentes de la erosión de los relieves cercanos."],
      ["Explica cómo la meteorización química de silicatos influye en el CO₂ atmosférico.", "La hidrólisis consume CO₂ disuelto en el agua y lo transforma en bicarbonato, que llega al mar y precipita como carbonato: la meteorización retira CO₂ a largo plazo."],
      ["Diseña una práctica para clasificar cinco rocas desconocidas.", "Observar textura (cristales, fragmentos, láminas), color, dureza, reacción con HCl diluido (carbonatos), presencia de fósiles o estratos; usar una clave dicotómica."],
      ["Valora los riesgos y beneficios de la actividad volcánica en Canarias.", "Riesgos: coladas, piroclastos, gases y daños a viviendas y cultivos (La Palma). Beneficios: suelos fértiles, turismo, energía geotérmica potencial y creación de territorio."],
      ["Relaciona el ciclo de las rocas con la tectónica de placas.", "La subducción hunde y funde rocas (magmas), la colisión las somete a metamorfismo y las eleva, y la elevación las expone a la erosión, que produce sedimentos."],
    ],
  },
  quiz: [
    ["Los procesos geológicos externos obtienen su energía de…", ["el calor interno", "el Sol y la gravedad", "la radiactividad", "el núcleo"], 1, "Mueven agua y aire."],
    ["La fusión por descompresión ocurre en…", ["las dorsales", "las fosas", "los glaciares", "los deltas"], 0, "El manto asciende."],
    ["Un magma ácido es…", ["pobre en sílice", "rico en sílice y viscoso", "muy fluido", "muy caliente"], 1, "Más del 65 % de SiO₂."],
    ["El primer mineral de la serie de Bowen es…", ["cuarzo", "olivino", "moscovita", "feldespato potásico"], 1, "A mayor temperatura."],
    ["La textura granuda indica…", ["enfriamiento rápido", "enfriamiento lento", "metamorfismo", "sedimentación"], 1, "Rocas plutónicas."],
    ["La obsidiana tiene textura…", ["granuda", "vítrea", "foliada", "detrítica"], 1, "Vidrio volcánico."],
    ["El equivalente volcánico del granito es…", ["basalto", "riolita", "gabro", "andesita"], 1, "Misma composición."],
    ["Las erupciones hawaianas son…", ["muy explosivas", "efusivas", "de cenizas", "plinianas"], 1, "Magma fluido."],
    ["Las nubes ardientes son…", ["coladas de lava", "coladas piroclásticas", "nubes de vapor", "lahares"], 1, "Muy peligrosas."],
    ["La deformación frágil produce…", ["pliegues", "fracturas", "foliación", "magmas"], 1, "Fallas y diaclasas."],
    ["Un sinclinal tiene en el núcleo…", ["las capas más antiguas", "las capas más modernas", "magma", "fallas"], 1, "Definición."],
    ["Una falla inversa se produce por…", ["distensión", "compresión", "cizalla", "meteorización"], 1, "La corteza se acorta."],
    ["El metamorfismo ocurre…", ["en estado sólido", "por fusión", "en la superficie", "solo en el mar"], 0, "Sin fundirse."],
    ["La pizarra procede de…", ["caliza", "lutita", "granito", "arenisca"], 1, "Grado bajo."],
    ["El mármol procede de…", ["caliza", "lutita", "basalto", "arenisca"], 0, "Recristalización de calcita."],
    ["La gelifracción es meteorización…", ["química", "física", "biológica", "por disolución"], 1, "Cuña de hielo."],
    ["El relieve kárstico se forma por…", ["oxidación", "disolución de la caliza", "hidrólisis", "termoclastia"], 1, "Agua con CO₂."],
    ["Los valles en U los excavan…", ["ríos", "glaciares", "el viento", "el mar"], 1, "Valles glaciares."],
    ["La diagénesis incluye…", ["fusión y cristalización", "compactación y cementación", "plegamiento", "erosión"], 1, "Sedimento a roca."],
    ["El conglomerado es una roca…", ["química", "detrítica", "orgánica", "metamórfica"], 1, "Cantos cementados."],
  ],
  examen: [
    ["(PAU) Una roca con fenocristales en una pasta microcristalina es…", ["plutónica", "volcánica", "metamórfica", "sedimentaria"], 1, "Textura porfídica."],
    ["(PAU) El último mineral en cristalizar en la serie de Bowen es…", ["olivino", "piroxeno", "cuarzo", "plagioclasa cálcica"], 2, "A menor temperatura."],
    ["(PAU) En un horst…", ["el bloque central está hundido", "el bloque central está levantado", "hay pliegues", "hay foliación"], 1, "Limitado por fallas normales."],
    ["(PAU) El gneis es una roca de grado metamórfico…", ["bajo", "medio", "alto", "nulo"], 2, "Bandeado."],
    ["(PAU) El metamorfismo de contacto forma…", ["rocas muy foliadas", "una aureola alrededor de la intrusión", "pliegues", "cabalgamientos"], 1, "Por aumento de temperatura."],
    ["(PAU) La hidrólisis de los feldespatos produce…", ["calcita", "arcillas", "cuarzo", "yeso"], 1, "Meteorización química."],
    ["(PAU) Una evaporita es una roca…", ["detrítica", "química", "orgánica", "magmática"], 1, "Precipitación de sales."],
    ["(PAU) En el ciclo de las rocas, una roca sedimentaria enterrada a gran profundidad puede…", ["solo meteorizarse", "transformarse en metamórfica", "convertirse en sedimento", "nada"], 1, "Por presión y temperatura."],
  ],
  feynman: ["Por qué un mismo magma da granito o riolita", "Por qué unos volcanes explotan y otros no", "Cómo se pliega una roca sin romperse", "Qué le pasa a una pizarra si la calientas más", "Cómo una montaña acaba convertida en arena de playa", "Por qué las rocas forman un ciclo"],
  mapa: ["ROCAS", [["Magmáticas", "plutónicas, volcánicas"], ["Metamórficas", "foliadas, no foliadas"], ["Sedimentarias", "detríticas, químicas"], ["Procesos", "internos y externos"]], 260],
  tarjetas: [
    ["Procesos internos", "Calor interno: magmatismo, metamorfismo y deformación."],
    ["Procesos externos", "Sol y gravedad: meteorización, erosión, transporte, sedimentación."],
    ["Magma", "Roca fundida con cristales y gases; básico, intermedio o ácido."],
    ["Fusión parcial", "Por descompresión, agua o calor."],
    ["Serie de Bowen", "Olivino primero, cuarzo al final."],
    ["Plutónica / volcánica", "Granuda en profundidad / porfídica o vítrea en superficie."],
    ["Tipos de erupción", "Efusivas con magma fluido; explosivas con magma viscoso."],
    ["Pliegues", "Anticlinal (núcleo antiguo) y sinclinal (núcleo moderno)."],
    ["Fallas", "Normal (distensión), inversa (compresión), desgarre (cizalla)."],
    ["Metamorfismo", "Cambios en estado sólido por presión y temperatura."],
    ["Meteorización", "Física (fragmenta) y química (altera minerales)."],
    ["Ciclo de las rocas", "Magmática, sedimentaria y metamórfica se transforman entre sí."],
  ],
  glosario: [
    ["Cámara magmática", "Depósito de magma en el interior de la corteza."],
    ["Diferenciación magmática", "Cambio de composición del magma por separación de cristales."],
    ["Textura", "Tamaño, forma y disposición de los componentes de una roca."],
    ["Batolito", "Gran masa de roca plutónica."],
    ["Dique", "Lámina de roca magmática que corta las capas."],
    ["Piroclasto", "Fragmento de roca expulsado en una erupción."],
    ["Lahar", "Colada de barro de origen volcánico."],
    ["Charnela", "Zona de máxima curvatura de un pliegue."],
    ["Salto de falla", "Desplazamiento entre los bloques de una falla."],
    ["Cabalgamiento", "Falla inversa de bajo ángulo."],
    ["Foliación", "Disposición en láminas de los minerales de una roca metamórfica."],
    ["Aureola de contacto", "Zona metamorfizada alrededor de una intrusión."],
    ["Gelifracción", "Rotura de rocas por congelación del agua en sus grietas."],
    ["Karst", "Relieve formado por disolución de rocas solubles."],
    ["Diagénesis", "Conjunto de procesos que transforman un sedimento en roca."],
    ["Estrato", "Capa de roca sedimentaria limitada por dos superficies."],
  ],
  situacion: {
    titulo: "Una ruta geológica por nuestro entorno",
    reto: "Un ayuntamiento quiere ofrecer a los visitantes una ruta que explique las rocas y el paisaje del municipio. Vuestro equipo diseñará la ruta y sus paneles.",
    pasos: [
      "Consultad el mapa geológico del IGME (MAGNA) de vuestra zona e identificad las rocas que afloran.",
      "Seleccionad cinco puntos de interés: afloramientos, edificios con piedra local, pliegues o fallas visibles.",
      "Clasificad las rocas de cada punto y explicad cómo se formaron.",
      "Relacionad cada punto con el ciclo de las rocas y con la historia geológica de la región.",
      "Diseñad los paneles con dibujos y textos breves y un mapa de la ruta.",
    ],
    producto: "Una ruta geológica con mapa, cinco paneles explicativos y una guía digital.",
    evaluacion: ["Las rocas se identifican y clasifican correctamente.", "Los procesos de formación se explican con rigor.", "Los paneles son claros y atractivos.", "La ruta conecta las rocas con la historia geológica de la zona."],
  },
  familias: [
    "Fijaos en las piedras de edificios y monumentos: granito, mármol, pizarra o caliza.",
    "En una excursión, observad pliegues y capas en los cortes de las carreteras.",
    "Visitad un museo de ciencias naturales con colección de rocas y minerales.",
    "Mirad la encimera de la cocina: ¿es granito de verdad o es otra roca?",
  ],
  saberes: "bloque «Dinámica terrestre» y «Procesos geológicos»: procesos internos y externos, magmatismo y rocas magmáticas, vulcanismo, deformación (pliegues, fallas), metamorfismo y rocas metamórficas, meteorización, procesos sedimentarios y rocas sedimentarias, ciclo de las rocas e identificación de rocas del entorno.",
  ideas: [
    "Colección de rocas del entorno y clave dicotómica para identificarlas.",
    "Modelo de pliegues y fallas con capas de plastilina o arena de colores.",
    "Cristalización de sales o de tiosulfato de sodio a distintas velocidades para comparar texturas.",
    "Ensayo de meteorización química: caliza y ácido; hielo en una tiza mojada.",
  ],
  fuentes: [
    { t: "IGME: mapas geológicos de España", url: "https://info.igme.es/cartografiadigital/geologica/" },
    { t: "Ciclo de las rocas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_litol%C3%B3gico" },
    { t: "Roca ígnea, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Roca_%C3%ADgnea" },
  ],
});
