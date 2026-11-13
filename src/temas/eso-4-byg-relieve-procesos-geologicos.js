// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El relieve y los procesos geológicos",
  minutos: 105,
  objetivos: [
    "Distinguir los procesos geológicos internos y externos y su fuente de energía",
    "Explicar la meteorización, la erosión, el transporte y la sedimentación",
    "Reconocer las formas de relieve que crean los ríos, los glaciares, el viento y el mar",
    "Reconocer el modelado kárstico y el granítico y localizar ejemplos en España",
    "Relacionar el relieve con el tipo de roca, el clima y la acción humana",
    "Identificar los riesgos geológicos externos y proponer medidas para reducirlos",
  ],
  claves: ["proceso interno", "proceso externo", "meteorización", "erosión", "sedimentación", "modelado"],
  pregunta: {
    texto: "El Gran Cañón del Colorado tiene más de 1 500 metros de profundidad. ¿Quién lo excavó?",
    respuesta: "Un <mark>río</mark>, con mucha paciencia. El río Colorado ha ido <b>erosionando</b> la roca durante unos 5 o 6 millones de años, mientras la zona se elevaba. El relieve es la lucha entre las fuerzas internas, que <b>levantan</b>, y las externas, que <b>desgastan</b>.",
  },
  lectura: {
    titulo: "Un río con paciencia",
    html: `<p>Asómate al borde del Gran Cañón del Colorado, en Arizona, y verás un abismo de más de 1.500 metros de profundidad y hasta 29 kilómetros de anchura. En el fondo, como un hilo marrón, corre el río Colorado. Cuesta creer que ese río, que en muchos tramos se puede cruzar en balsa, haya excavado semejante tajo. Pero así fue.</p>
<p>El secreto es el tiempo. Durante unos cinco o seis millones de años, el río ha arrastrado arena y cantos que, como una lija, han ido rebajando su cauce mientras la región se elevaba lentamente empujada por fuerzas internas. Cada año, apenas una fracción de milímetro. En las paredes del cañón quedan al descubierto capas de rocas que cuentan casi 2.000 millones de años de historia.</p>
<p>No hace falta ir a Arizona. En España, el río Lobos en Soria, el Duratón en Segovia o el Cares en Asturias han excavado hoces espectaculares en roca caliza. Y en la playa, en el monte o en la pared de tu propio instituto puedes ver cómo el agua, el hielo, el viento y los seres vivos desgastan las rocas sin descanso. El relieve no es un decorado fijo: es el resultado de una lucha lenta entre fuerzas que levantan y fuerzas que desgastan.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Dos fuerzas en lucha</h3><p>El relieve de la Tierra cambia por la acción de dos tipos de procesos geológicos:</p><p>• Los <mark>procesos internos</mark> se deben al <b>calor del interior</b> de la Tierra. El movimiento de las placas pliega y rompe las rocas, forma cordilleras, levanta o hunde bloques de corteza y produce volcanes y terremotos. En general, <b>crean relieve</b>: hacen que la superficie sea más abrupta.<br>• Los <mark>procesos externos</mark> se deben a la <b>energía del Sol</b>, que mueve la atmósfera y el ciclo del agua, y a la <b>gravedad</b>, que hace caer las rocas y correr el agua ladera abajo. El agua de lluvia, los ríos, los glaciares, el viento, el mar y los seres vivos <b>desgastan el relieve</b> y tienden a allanarlo.</p><p>Los dos tipos de procesos actúan a la vez. Una cordillera joven, como los Alpes o el Himalaya, tiene picos altos y escarpados porque los procesos internos aún la elevan más deprisa de lo que se erosiona. Una cordillera antigua, como los montes de Toledo, tiene formas suaves porque la erosión ha ganado la partida durante cientos de millones de años. El aspecto de un paisaje depende de esta lucha y también del <b>tipo de roca</b>, del <b>clima</b> y, cada vez más, de la <b>acción humana</b>. Al conjunto de formas que crean los procesos externos se le llama <b>modelado</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las fuerzas internas levantan una montaña y las externas la desgastan">
        <defs>${flecha("rl1", "var(--red)")}${flecha("rl2", "var(--pen)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 150 L 100 60 L 130 80 L 170 40 L 240 150 Z" fill="var(--sun)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 172 V 120" stroke="var(--red)" stroke-width="4" marker-end="url(#rl1)"/>
        <path d="M200 24 L 176 50" stroke="var(--pen)" stroke-width="3" marker-end="url(#rl2)"/><path d="M60 40 L 84 70" stroke="var(--pen)" stroke-width="3" marker-end="url(#rl2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="138" y="168" fill="var(--red)">internos: levantan</text><text x="12" y="30" fill="var(--pen)">externos: desgastan</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 Pliegues y fallas</h3><p>Las rocas sometidas a fuerzas (esfuerzos) se deforman. Cómo lo hacen depende de la intensidad del esfuerzo, de la temperatura y de la presión.</p><p>Cuando las rocas son <b>plásticas</b>, porque están a gran profundidad y temperatura, o el esfuerzo es lento, se doblan sin romperse y forman <mark>pliegues</mark>. Un pliegue cuyas capas se curvan hacia arriba, en forma de arco, es un <b>anticlinal</b>; en su núcleo están las rocas más antiguas. Si se curvan hacia abajo, en forma de cuenco, es un <b>sinclinal</b>, con las rocas más modernas en el centro. Son muy visibles en los Pirineos.</p><p>Cuando las rocas son <b>rígidas</b> o el esfuerzo es brusco, se rompen. Si los bloques no se desplazan, la fractura es una <b>diaclasa</b>. Si los bloques se desplazan, es una <mark>falla</mark>. En una <b>falla normal</b>, producida por estiramiento, un bloque baja respecto al otro. En una <b>falla inversa</b>, producida por compresión, un bloque sube sobre el otro. En una falla de <b>desgarre</b>, los bloques se deslizan lateralmente. Las fallas pueden formar bloques levantados (<b>horst</b>), como la sierra de Gredos, y fosas hundidas (<b>graben</b>), como el valle del Tiétar. El movimiento brusco de una falla produce terremotos.</p>`,
      svg: L6.compara("Pliegues y fallas: cómo se deforman las rocas", ["Pliegues", "var(--leaf)", ["rocas plásticas", "se doblan", "anticlinal: arco", "sinclinal: cuenco"]], ["Fallas", "var(--red)", ["rocas rígidas", "se rompen y desplazan", "normal e inversa", "horst y graben"]]),
    },
    {
      html: `<h3>1.3 El ciclo de las rocas</h3><p>Los procesos internos y externos están unidos en el <mark>ciclo de las rocas</mark>, un conjunto de transformaciones que convierte unas rocas en otras a lo largo de millones de años. Hay tres grandes tipos de rocas:</p><p>• Las <b>rocas magmáticas</b> se forman cuando se enfría y solidifica un magma. Si se enfría lentamente en el interior, se forman cristales grandes y la roca es <b>plutónica</b>, como el granito. Si se enfría rápidamente en la superficie, tras una erupción, la roca es <b>volcánica</b>, como el basalto.<br>• Las <b>rocas sedimentarias</b> se forman en la superficie, por la acumulación de sedimentos que se compactan y se cementan (arenisca, conglomerado, arcilla), por la precipitación de sustancias disueltas (caliza, yeso, sal) o por restos de seres vivos (carbón).<br>• Las <b>rocas metamórficas</b> se forman cuando otras rocas sufren altas presiones y temperaturas sin llegar a fundirse: la arcilla se transforma en pizarra, la caliza en mármol y el granito puede convertirse en gneis.</p><p>El ciclo funciona así: las rocas expuestas en la superficie se <b>meteorizan</b> y se <b>erosionan</b>; los sedimentos se transportan y se depositan; al enterrarse, forman rocas sedimentarias; con más presión y temperatura se vuelven metamórficas; si se funden, forman magma, que al enfriarse origina rocas magmáticas; y los procesos internos levantan de nuevo todas ellas hasta la superficie, donde el ciclo vuelve a empezar.</p>`,
      svg: L6.ciclo("Ciclo de las rocas: magmáticas, sedimentos, sedimentarias, metamórficas y magma", "Rocas", ["Magmáticas", "Sedimentos", "Sedimentarias", "Metamórficas", "Magma"], "var(--pen)"),
    },
    {
      html: `<h3>2.1 La meteorización física</h3><p>La <mark>meteorización</mark> es la alteración de las rocas <b>en el mismo lugar</b> donde se encuentran, sin que haya transporte. Prepara el terreno para la erosión, porque convierte la roca compacta en fragmentos o en materiales sueltos. Puede ser física, química o biológica.</p><p>La <mark>meteorización física</mark> o mecánica rompe la roca en trozos cada vez más pequeños sin cambiar sus minerales. Los procesos principales son:</p><p>• La <b>gelifracción</b>: el agua se mete en las grietas, se congela, aumenta su volumen un 9 % y actúa como una cuña que parte la roca. Es muy intensa en la alta montaña, donde el agua se congela por la noche y se funde de día. Al pie de las paredes rocosas se acumulan entonces <b>canchales</b> o pedreras de piedras angulosas.<br>• La <b>termoclastia</b>: en los desiertos, la diferencia de temperatura entre el día y la noche puede superar los 40 °C. La roca se dilata y se contrae una y otra vez, y su superficie se agrieta y se descama.<br>• La <b>descompresión</b>: las rocas formadas en profundidad, como el granito, se expanden cuando la erosión elimina las rocas que tenían encima, y se agrietan en lajas paralelas a la superficie, como las capas de una cebolla.<br>• La <b>haloclastia</b>: en las costas y en los desiertos, el agua salada se evapora en las grietas y los cristales de sal, al crecer, las ensanchan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gelifracción: el agua de una grieta se congela y la abre">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, 6, "agua"], [190, 18, "hielo"]].map(([x, w, t]) => `<path d="M${x - 50} 150 V 50 H ${x - w / 2} L ${x} 130 L ${x + w / 2} 50 H ${x + 50} V 150 Z" fill="var(--muted)" opacity=".6" stroke="var(--ink)" stroke-width="2"/><path d="M${x - w / 2} 50 L ${x} 130 L ${x + w / 2} 50 Z" fill="${t === "agua" ? "var(--water)" : "var(--inf)"}" opacity=".8"/><text x="${x}" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <text x="125" y="100" text-anchor="middle" font-size="22" fill="var(--muted)" ${F}>→</text>
        <text x="130" y="170" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>al congelarse, el agua aumenta un 9 % de volumen</text>
      </svg>`,
    },
    {
      html: `<h3>2.2 Meteorización química y biológica</h3><p>La <mark>meteorización química</mark> altera los minerales de la roca mediante reacciones químicas, de modo que se forman sustancias nuevas. Es más intensa en los climas <b>cálidos y húmedos</b>, porque las reacciones son más rápidas con calor y necesitan agua. Las principales son:</p><p>• La <b>disolución</b>: el agua de lluvia lleva CO₂ disuelto y es ligeramente ácida; disuelve rocas como la caliza, el yeso o la sal.<br>• La <b>oxidación</b>: el oxígeno reacciona con los minerales que contienen hierro y forma óxidos, que dan el color rojizo de muchos suelos, como las tierras rojas mediterráneas.<br>• La <b>hidrólisis</b>: el agua transforma algunos minerales en arcillas. El feldespato del granito se convierte en arcilla, y el granito acaba deshaciéndose en arena.</p><p>La <mark>meteorización biológica</mark> la producen los seres vivos. Las <b>raíces</b> de los árboles crecen en las grietas y las abren como cuñas: lo vemos en las aceras levantadas por las raíces. Los <b>líquenes</b> y los musgos segregan ácidos que alteran la superficie de la roca, y los animales excavadores, como las lombrices o los topos, remueven el suelo.</p><p>Las tres meteorizaciones suelen actuar juntas, y su resultado más importante es la formación del <b>suelo</b>, una capa de fragmentos de roca, arcilla, humus, agua y aire, imprescindible para la vida. Un centímetro de suelo tarda cientos de años en formarse.</p>`,
      svg: L6.radial("Tipos de meteorización química y biológica", "Meteorización", ["Disolución de la caliza", "Oxidación del hierro", "Hidrólisis: arcilla", "Raíces y líquenes"], "var(--sun)"),
      video: { id: "Dmw-jiNyN2A", titulo: "Cómo funciona la meteorización", canal: "La Información", vistas: 108451 },
    },
    {
      html: `<h3>2.3 Erosión, transporte y sedimentación</h3><p>Los <mark>agentes geológicos externos</mark> (las aguas de escorrentía, los ríos, los glaciares, el viento y el mar) trabajan en tres pasos que se suceden:</p><p>• La <b>erosión</b> es el arranque de materiales de la superficie. Los agentes la hacen con su propia fuerza y, sobre todo, con los fragmentos que llevan, que golpean y raspan las rocas como una lija. Cuanta más energía tiene el agente (más velocidad, más volumen, más pendiente), más erosiona.<br>• El <b>transporte</b> es el desplazamiento de esos materiales. Un río lleva los más finos en <b>suspensión</b>, que enturbian el agua; arrastra los cantos por el fondo, rodando o a saltos; y lleva sales <b>disueltas</b>. Durante el transporte, los cantos chocan entre sí y se redondean: por eso las piedras de un río son lisas y redondas, y las de un canchal, angulosas.<br>• La <b>sedimentación</b> es el depósito de los materiales cuando el agente <b>pierde energía</b>. Primero se depositan los más gruesos y pesados, y los más finos llegan más lejos.</p><p>Los sedimentos se acumulan en capas horizontales llamadas <b>estratos</b>. Con el tiempo, el peso de las capas superiores los compacta y los minerales disueltos en el agua los cementan: se forman las <b>rocas sedimentarias</b>. Este proceso se llama <b>diagénesis</b>. Así, la arena se convierte en arenisca, los cantos en conglomerado y el barro en arcilla compacta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfil de un río: erosión en la montaña, transporte en el tramo medio y sedimentación en la desembocadura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 40 Q 60 50 100 100 Q 160 140 250 146 V 170 H 10 Z" fill="var(--sun)" opacity=".35"/>
        <path d="M14 46 Q 60 56 100 104 Q 160 142 250 150" fill="none" stroke="var(--water)" stroke-width="5"/>
        ${[[30, 50], [60, 64], [140, 128], [200, 145], [220, 148], [236, 150]].map(([x, y], i) => `<circle cx="${x}" cy="${y + 8}" r="${i < 2 ? 4 : 2.5}" fill="var(--ink)"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="20" y="30" fill="var(--red)">erosión</text><text x="110" y="86" fill="var(--pen)">transporte</text><text x="164" y="124" fill="var(--leaf)">sedimentación</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.1 Los ríos y los torrentes</h3><p>El agua de lluvia que no se infiltra ni se evapora corre por la superficie: es la <b>escorrentía</b>. Al principio corre en láminas (arroyada difusa), que arrancan suelo en las laderas sin vegetación; cuando se concentra en surcos, se forman <b>cárcavas</b>, y en terrenos arcillosos, las <b>malas tierras</b> o <i>badlands</i>, como las de las Bardenas Reales en Navarra.</p><p>Los <b>torrentes</b> son cursos de agua de montaña que solo llevan agua tras lluvias fuertes. Tienen tres partes: la <b>cuenca de recepción</b>, donde se recoge el agua y se erosiona; el <b>canal de desagüe</b>, por donde baja con fuerza; y el <b>cono de deyección</b>, en forma de abanico, donde deposita los materiales al llegar a terreno llano.</p><p>Los <mark>ríos</mark> llevan agua todo el año. En su <b>curso alto</b>, con mucha pendiente, predomina la erosión: excavan <b>valles en V</b>, <b>gargantas</b> o <b>cañones</b> y forman rápidos y cascadas. En el <b>curso medio</b>, con menos pendiente, predomina el transporte: el río dibuja curvas llamadas <b>meandros</b>, erosiona la orilla exterior y deposita en la interior. En el <b>curso bajo</b> predomina la sedimentación: forma <b>llanuras de inundación</b>, que el río cubre en las crecidas, y <b>terrazas</b> fluviales. En la desembocadura, si el mar es tranquilo, los sedimentos forman un <b>delta</b>, como el del Ebro; si hay mareas fuertes, el mar entra en el río y forma un <b>estuario</b>, como el del Guadalquivir.</p>`,
      svg: L6.flujo("Curso de un río: alto con erosión, medio con transporte y bajo con sedimentación", ["Curso alto: erosión, valle en V y cascadas", "Curso medio: transporte y meandros", "Curso bajo: sedimentación y llanura", "Desembocadura: delta o estuario"], "Del nacimiento al mar"),
    },
    {
      html: `<h3>3.2 Los glaciares</h3><p>Un <mark>glaciar</mark> es una gran masa de hielo que se forma por la acumulación y compactación de la nieve durante muchos años y que se desplaza lentamente ladera abajo por su propio peso, unos metros al año. Hay <b>glaciares de casquete</b>, que cubren grandes extensiones, como en la Antártida y Groenlandia, y <b>glaciares de valle</b> o alpinos, en las montañas.</p><p>Un glaciar de valle tiene un <b>circo</b>, una depresión con forma de anfiteatro donde se acumula la nieve, y una <b>lengua</b> que desciende por el valle. El hielo arranca rocas del fondo y las paredes y las arrastra; esas rocas, incrustadas en la base del hielo, raspan el fondo como una lima y dejan estrías. El glaciar excava así <b>valles en forma de U</b>, de fondo plano y paredes verticales, muy distintos de los valles en V de los ríos.</p><p>Los materiales que transporta el glaciar, de todos los tamaños y mezclados, se depositan formando <b>morrenas</b>: laterales, en los bordes, y frontales, en el extremo de la lengua. Cuando el hielo se funde, los circos se llenan de agua y forman <b>lagos glaciares</b> o ibones.</p><p>En España solo quedan pequeños glaciares en los Pirineos, como el del Aneto, que se reducen rápidamente por el calentamiento global. Pero durante la última glaciación, hace unos 20.000 años, los glaciares cubrieron las cumbres de los Pirineos, la cordillera Cantábrica, el Sistema Central y Sierra Nevada, y dejaron circos, valles en U y lagos, como el de Sanabria.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Valle fluvial en forma de V y valle glaciar en forma de U">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 40 L 64 140 L 114 40" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M58 132 L 70 132" stroke="var(--water)" stroke-width="5"/>
        <path d="M146 40 Q 146 140 196 140 Q 246 140 246 40" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M152 70 Q 156 128 196 128 Q 236 128 240 70" fill="var(--inf)" opacity=".4"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="64" y="166" fill="var(--water)">río: valle en V</text><text x="196" y="166" fill="var(--inf)">glaciar: valle en U</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.3 Las aguas subterráneas y el modelado kárstico</h3><p>Parte del agua de lluvia se <b>infiltra</b> en el terreno y circula por los poros y las grietas de las rocas. Cuando llega a una capa impermeable, se acumula y empapa la roca que está por encima: es un <mark>acuífero</mark>. El límite superior de la zona empapada es el <b>nivel freático</b>. El agua de los acuíferos sale de forma natural por los <b>manantiales</b> o se extrae con pozos. En España, los acuíferos abastecen a millones de personas, pero muchos están <b>sobreexplotados</b> o <b>contaminados</b> por nitratos de la agricultura.</p><p>Las rocas <b>calizas</b> se disuelven lentamente con el agua de lluvia, que lleva CO₂ disuelto. Así se forma el <mark>relieve kárstico</mark>. En la superficie aparecen <b>lapiaces</b> (surcos y crestas en la roca), <b>dolinas</b> (hoyos circulares), <b>poljés</b> (grandes depresiones de fondo plano) y <b>hoces</b> o cañones. Bajo tierra, el agua excava <b>simas</b>, <b>cuevas</b> y galerías por las que corren ríos subterráneos.</p><p>Cuando el agua cargada de caliza gotea dentro de una cueva, pierde CO₂ y vuelve a precipitar la caliza: así crecen las <b>estalactitas</b> (desde el techo), las <b>estalagmitas</b> (desde el suelo) y las <b>columnas</b>, cuando se unen. En España son famosos la Ciudad Encantada de Cuenca, El Torcal de Antequera y cuevas como la de Nerja o las del Drach en Mallorca.</p>`,
      svg: L6.capas("Cueva kárstica: superficie con lapiaces y dolinas, caliza con simas y cueva con estalactitas", [["Superficie: lapiaces y dolinas", "var(--leaf)", 0.8], ["Caliza: el agua se infiltra por grietas y simas", "var(--sun)", 1.2], ["Cueva: estalactitas, estalagmitas y columnas", "var(--pen)", 1.2], ["Capa impermeable: río subterráneo", "var(--inf)", 0.8]], "El karst por dentro"),
      video: { id: "XEZriViVJe8", titulo: "El modelado kárstico (1ª parte)", canal: "CTMSJB", vistas: 48385 },
    },
    {
      html: `<h3>3.4 El relieve granítico</h3><p>El <mark>granito</mark> es una roca plutónica dura y resistente, formada por cristales de cuarzo, feldespato y mica. Sin embargo, tiene muchas grietas, las <b>diaclasas</b>, que se forman por descompresión y se cortan en tres direcciones, dividiendo la roca en bloques más o menos cúbicos.</p><p>El agua penetra por las diaclasas y altera químicamente el granito: el feldespato se convierte en arcilla y la roca se deshace en una arena gruesa llamada <b>lehm</b> o jabre. La alteración avanza más deprisa por las aristas y las esquinas de los bloques, que tienen más superficie en contacto con el agua, así que los bloques se van redondeando. Cuando la lluvia y los ríos lavan la arena, quedan al descubierto las formas típicas del relieve granítico:</p><p>• <b>Bolos</b> o piedras caballeras: bloques redondeados, a veces apoyados unos sobre otros en un equilibrio sorprendente.<br>• <b>Berrocales</b>: zonas cubiertas de bolos.<br>• <b>Tors</b>: torres o castillos de bloques apilados.<br>• <b>Domos</b> o cúpulas: grandes masas de granito lisas y redondeadas.<br>• <b>Pilancones</b> o pilas: pequeños huecos en la superficie de la roca donde se acumula el agua.</p><p>En España hay paisajes graníticos espectaculares en La Pedriza de Madrid, Los Barruecos de Cáceres, la sierra de Gredos o en muchas zonas de Galicia, donde el granito es la roca más abundante.</p>`,
      svg: L6.flujo("Formación de un berrocal: diaclasas, alteración, redondeo y lavado de la arena", ["El granito tiene diaclasas que forman bloques", "El agua lo altera y forma arena (lehm)", "Las aristas se redondean más deprisa", "Se lava la arena: quedan bolos y berrocales"], "Del granito al berrocal"),
    },
    {
      html: `<h3>3.5 El viento y los desiertos</h3><p>El <mark>viento</mark> es un agente geológico importante en las zonas donde no hay vegetación que proteja el suelo: los desiertos, algunas costas y las tierras de cultivo sin cubierta vegetal.</p><p>El viento realiza dos tipos de <b>erosión</b>. La <b>deflación</b> consiste en levantar y llevarse las partículas finas, polvo y arena; en algunos desiertos deja el suelo cubierto solo de cantos, formando el desierto pedregoso o <b>reg</b>. La <b>abrasión</b> o corrasión consiste en el desgaste de las rocas por el choque de los granos de arena que lleva el viento, como un chorro de arena. Como la arena viaja cerca del suelo, desgasta más la base de las rocas y forma <b>rocas en forma de seta</b>.</p><p>El viento <b>transporta</b> el polvo a enormes distancias: el polvo del Sáhara llega con frecuencia a Canarias y a la Península, tiñe el cielo de naranja y deja barro en los coches cuando llueve («lluvia de barro»).</p><p>Cuando pierde fuerza, el viento <b>deposita</b> la arena y forma <mark>dunas</mark>, montículos que avanzan lentamente: tienen una ladera suave por donde sube la arena y otra empinada por donde cae. Los desiertos arenosos se llaman <b>erg</b>. Hay dunas en las playas de Doñana, en Maspalomas (Gran Canaria) y en Corralejo (Fuerteventura).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Duna de arena formada por el viento y acantilado con arco excavado por el mar">
        <defs>${flecha("rl3", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 140 Q 50 70 80 90 L 110 140 Z" fill="var(--sun)" opacity=".7"/><path d="M14 60 H 50" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#rl3)"/>
        <rect x="136" y="132" width="114" height="38" fill="var(--water)" opacity=".4"/>
        <path d="M160 140 V 50 H 250 V 140 Z M190 140 V 110 Q 200 92 214 110 V 140 Z" fill="var(--muted)" fill-rule="evenodd" opacity=".75"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="60" y="164" fill="var(--sun)">duna</text><text x="204" y="40" fill="var(--ink)">acantilado y arco</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.6 El mar y las costas</h3><p>El <mark>mar</mark> modela las costas con la fuerza de las <b>olas</b>, las <b>corrientes</b> y las <b>mareas</b>. Las olas, empujadas por el viento, golpean la costa con una fuerza enorme, comprimen el aire en las grietas y lanzan contra la roca arena y cantos.</p><p>En las <b>costas acantiladas</b>, de roca, predomina la erosión. El oleaje excava la base del acantilado y forma una muesca; cuando la roca de arriba se queda sin apoyo, se derrumba, y el acantilado retrocede. Al pie queda una <b>plataforma de abrasión</b>, una superficie plana que se ve con la marea baja. Las olas aprovechan las zonas débiles y excavan <b>cuevas</b>, que al atravesar un saliente forman <b>arcos</b>; si el arco se derrumba, queda un pilar aislado, un <b>farallón</b>. Ejemplo: la playa de las Catedrales (Lugo).</p><p>En las <b>costas bajas</b>, de arena, predomina la sedimentación. Las corrientes que corren paralelas a la costa transportan la arena y la depositan formando <b>playas</b>, <b>flechas</b> (lenguas de arena que avanzan desde la costa), <b>tómbolos</b> (que unen una isla a tierra, como en Peñíscola) y <b>barras</b> o <b>restingas</b> que pueden cerrar una laguna costera, llamada <b>albufera</b>: es el caso de La Manga del Mar Menor o de la Albufera de Valencia.</p><p>Los puertos, los espigones y los embalses de los ríos, que retienen la arena, alteran este equilibrio, y muchas playas españolas pierden arena cada año.</p>`,
      svg: L6.compara("Costas acantiladas y costas bajas", ["Costa acantilada", "var(--pen)", ["predomina la erosión", "acantilados", "cuevas, arcos, farallones", "plataforma de abrasión"]], ["Costa baja", "var(--sun)", ["predomina el depósito", "playas y flechas", "tómbolos", "barras y albuferas"]]),
    },
    {
      html: `<h3>4.1 Riesgos geológicos externos</h3><p>Los procesos externos pueden ser peligrosos para las personas. Para estudiar un riesgo se distinguen tres factores: la <b>peligrosidad</b> (la probabilidad de que ocurra un fenómeno de cierta intensidad), la <b>exposición</b> (las personas y bienes que hay en la zona) y la <b>vulnerabilidad</b> (cuánto daño sufrirían).</p><p>• Las <mark>inundaciones</mark> son el riesgo natural que más daños causa en España, sobre todo por las lluvias torrenciales del otoño en el Mediterráneo, asociadas a las DANA (depresiones aisladas en niveles altos). La DANA de octubre de 2024 en Valencia causó más de 200 muertos. El riesgo aumenta cuando se construye en cauces y llanuras de inundación y cuando el suelo se impermeabiliza con asfalto.<br>• Los <mark>movimientos de ladera</mark> (desprendimientos de rocas, deslizamientos de tierra, coladas de barro) se producen en pendientes fuertes, sobre todo tras lluvias intensas o al cortar laderas para hacer carreteras.<br>• La <b>erosión del suelo</b> por deforestación, incendios, sobrepastoreo o malas prácticas agrícolas conduce a la <b>desertificación</b>, la degradación de tierras en zonas secas. Afecta a gran parte del sureste de España.</p><p>Las medidas para reducir estos riesgos son la <b>ordenación del territorio</b> con mapas de riesgo que indican dónde no construir, la <b>reforestación</b> de laderas y cuencas, las obras de contención (muros, redes, presas) y los <b>sistemas de alerta</b> que avisan a la población a tiempo.</p>`,
      svg: L6.tabla("Riesgos geológicos externos: causas y medidas", ["Riesgo", "Causa", "Medida"], [["Inundación", "lluvia torrencial", "no construir en cauces"], ["Ladera", "pendiente y lluvia", "muros, redes, árboles"], ["Desertificación", "pérdida de suelo", "reforestar"], ["Costa", "falta de arena", "respetar la costa"]]),
    },
  ],
  figura: {
    titulo: "Agentes externos y sus formas de relieve",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Ríos, glaciares, viento y mar con las formas que crean">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Ríos", "valles en V", "meandros · deltas", "var(--water)"], ["Glaciares", "valles en U", "circos · morrenas", "var(--inf)"], ["Viento", "dunas", "rocas pulidas", "var(--sun)"], ["Mar", "acantilados", "playas · arcos", "var(--pen)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="116" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="146" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "iauTV6OmIns", titulo: "Procesos externos que modifican el relieve", canal: "MARIO CARREÓN", vistas: 102606, megusta: 0, busqueda: "agentes geológicos externos erosión" },
  ejemplos: [
    { enunciado: "Explica por qué en las montañas abundan los canchales (acumulaciones de piedras angulosas) al pie de las paredes rocosas.", pasos: ["En la alta montaña la temperatura oscila alrededor de 0 °C muchos días.", "El agua de las grietas se congela, aumenta su volumen y abre la grieta (gelifracción).", "Los fragmentos sueltos caen y se acumulan al pie de la pared."], resultado: "Son producto de la meteorización física por gelifracción." },
    { enunciado: "¿Por qué se forma una estalactita?", pasos: ["El agua de lluvia, con CO₂, disuelve la caliza al atravesar el terreno.", "Al gotear en el techo de la cueva, el agua pierde CO₂.", "La caliza disuelta precipita y se deposita en capas alrededor de la gota."], resultado: "Por precipitación de caliza en el techo de una cueva kárstica." },
    { enunciado: "Un río forma en su curso alto un valle estrecho y en su curso bajo, meandros y una llanura. Explica la diferencia.", pasos: ["En el curso alto la pendiente es fuerte y el agua va rápida: predomina la erosión y excava un valle en V.", "En el curso bajo la pendiente es suave y el agua va lenta: predomina la sedimentación.", "El río se curva formando meandros y deposita sedimentos que forman una llanura aluvial."], resultado: "Arriba domina la erosión y abajo, la sedimentación." },
    { enunciado: "Un río transporta 2 millones de toneladas de sedimentos al año. Si la densidad de la roca es de 2,5 t/m³ y su cuenca mide 10.000 km², ¿cuántos milímetros de terreno pierde la cuenca cada año? ¿Y en un millón de años?", pasos: ["Volumen = 2.000.000 t / 2,5 t/m³ = 800.000 m³.", "Superficie = 10.000 km² = 10.000.000.000 m².", "Espesor = 800.000 / 10.000.000.000 = 0,00008 m = 0,08 mm al año.", "En un millón de años: 0,08 mm · 1.000.000 = 80.000 mm = 80 m."], resultado: "Unos 0,08 mm al año, que en un millón de años son 80 m de relieve rebajado." },
    { enunciado: "Una estalactita mide 1,5 m y crece unos 0,1 mm al año. ¿Cuánto tiempo ha tardado en formarse?", pasos: ["1,5 m = 1.500 mm.", "Tiempo = 1.500 mm / 0,1 mm por año = 15.000 años."], resultado: "Unos 15.000 años, si el ritmo de crecimiento ha sido constante." },
    { enunciado: "Un acantilado retrocede 30 cm al año. Una casa está a 12 m del borde. ¿Cuánto tiempo tardará el borde en alcanzarla?", pasos: ["12 m = 1.200 cm.", "Tiempo = 1.200 / 30 = 40 años.", "Los temporales pueden provocar derrumbes bruscos, así que el riesgo aparece antes."], resultado: "Unos 40 años de media, aunque un temporal puede adelantarlo." },
  ],
  errores: [
    "Confundir meteorización (alteración de la roca sin transporte) con erosión (arranque y transporte).",
    "Pensar que estalactitas y estalagmitas son lo mismo: las primeras cuelgan del techo y las segundas crecen del suelo.",
    "Creer que un valle en U lo excava un río: es la forma típica de un valle glaciar.",
    "Pensar que las rocas duras no se alteran: el granito se meteoriza químicamente con el agua.",
    "Creer que construir en el cauce seco de un río es seguro: las riadas lo vuelven a ocupar.",
    "Pensar que el relieve no cambia: lo hace continuamente, aunque a un ritmo tan lento que solo se nota en catástrofes como riadas o derrumbes.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Indica qué agente geológico forma: un valle en V, un valle en U, una duna y un acantilado.", sol: "Valle en V: río. Valle en U: glaciar. Duna: viento. Acantilado: mar (oleaje)." } },
    { nivel: "básico", ...{ q: "¿Qué tipo de meteorización predomina en un clima cálido y húmedo? ¿Y en uno frío?", sol: "En el cálido y húmedo, la química. En el frío, la física por gelifracción." } },
    { nivel: "básico", ...{ q: "¿Qué es una dolina y en qué rocas aparece?", sol: "Una depresión circular formada por disolución, propia de las rocas calizas (relieve kárstico)." } },
    { nivel: "básico", ...{ q: "Explica la diferencia entre erosión, transporte y sedimentación.", sol: "Erosión: arranque de materiales. Transporte: desplazamiento por agua, hielo o viento. Sedimentación: depósito cuando el agente pierde energía." } },
    { nivel: "básico", ...{ q: "Pon un ejemplo de meteorización biológica.", sol: "Las raíces de un árbol que crecen en una grieta y la abren, o los líquenes que segregan ácidos." } },
    { nivel: "básico", ...{ q: "Nombra tres formas del relieve granítico.", sol: "Berrocales (bolos), domos y tors (también pilancones)." } },
    { nivel: "básico", q: "¿Qué fuente de energía tienen los procesos internos y los externos?", sol: "Los internos, el calor del interior de la Tierra. Los externos, la energía del Sol y la gravedad." },
    { nivel: "básico", q: "Diferencia un anticlinal de un sinclinal.", sol: "En el anticlinal las capas se curvan hacia arriba (arco) y las rocas más antiguas están en el núcleo. En el sinclinal se curvan hacia abajo (cuenco) y las más modernas están en el centro." },
    { nivel: "básico", q: "Nombra los tres grandes tipos de rocas y un ejemplo de cada uno.", sol: "Magmáticas (granito, basalto), sedimentarias (arenisca, caliza) y metamórficas (pizarra, mármol)." },
    { nivel: "básico", q: "¿Por qué las piedras de un río son redondeadas y las de un canchal, angulosas?", sol: "Las del río chocan entre sí durante el transporte y se desgastan. Las del canchal se rompieron por gelifracción y apenas se han movido." },
    { nivel: "básico", q: "Nombra las tres partes de un glaciar de valle o de las formas que deja.", sol: "Circo, lengua y morrenas (también valle en U y lagos glaciares)." },
    { nivel: "básico", q: "¿Qué es un acuífero?", sol: "Una capa de roca permeable empapada de agua subterránea, situada sobre una capa impermeable." },
    { nivel: "medio", ...{ q: "¿Qué forma un delta y por qué no todos los ríos lo tienen?", sol: "Los sedimentos que deposita un río al llegar a un mar tranquilo. No se forma si las corrientes y las mareas se llevan los sedimentos." } },
    { nivel: "medio", ...{ q: "¿Qué es un torrente y cuáles son sus partes?", sol: "Un curso de agua de montaña que solo lleva agua tras lluvias fuertes. Partes: cuenca de recepción, canal de desagüe y cono de deyección." } },
    { nivel: "medio", ...{ q: "¿Qué riesgo geológico externo causa más daños en España y por qué?", sol: "Las inundaciones, por las lluvias torrenciales del otoño mediterráneo y por haber construido en zonas inundables." } },
    { nivel: "medio", q: "Explica qué es la termoclastia y dónde es más frecuente.", sol: "La rotura de la roca por dilatación y contracción repetidas debidas a los cambios bruscos de temperatura entre el día y la noche. Es frecuente en los desiertos." },
    { nivel: "medio", q: "¿Por qué la meteorización química es más intensa en climas cálidos y húmedos?", sol: "Porque las reacciones químicas son más rápidas con calor y necesitan agua." },
    { nivel: "medio", q: "Diferencia una falla normal de una inversa.", sol: "En la normal, producida por estiramiento, un bloque baja respecto al otro. En la inversa, producida por compresión, un bloque sube sobre el otro." },
    { nivel: "medio", q: "Describe el recorrido de una roca de granito por el ciclo de las rocas hasta convertirse en arenisca.", sol: "El granito aflora, se meteoriza y se erosiona; los granos de cuarzo se transportan y se depositan como arena; al enterrarse, se compacta y se cementa (diagénesis) y forma arenisca." },
    { nivel: "medio", q: "Diferencia un delta de un estuario.", sol: "El delta es un depósito de sedimentos en la desembocadura en un mar tranquilo (Ebro). El estuario es una desembocadura ancha donde entra el mar por las mareas y no se acumulan sedimentos (Guadalquivir)." },
    { nivel: "medio", q: "¿Cómo se forman los bolos graníticos?", sol: "El agua penetra por las diaclasas y altera el granito en arena; las aristas se alteran más deprisa y los bloques se redondean; al lavarse la arena, quedan los bolos." },
    { nivel: "medio", q: "Explica cómo se forman un arco y un farallón en un acantilado.", sol: "Las olas excavan cuevas en las zonas débiles de un saliente; si la cueva lo atraviesa, se forma un arco; si el techo del arco se derrumba, queda un pilar aislado, el farallón." },
    { nivel: "medio", q: "¿Por qué el polvo del Sáhara llega a la Península y qué efecto tiene?", sol: "El viento levanta el polvo fino por deflación y lo transporta a miles de kilómetros. Tiñe el cielo, empeora la calidad del aire y produce lluvias de barro." },
    { nivel: "medio", q: "Diferencia peligrosidad, exposición y vulnerabilidad con el ejemplo de una inundación.", sol: "Peligrosidad: probabilidad de una riada de cierta intensidad. Exposición: casas y personas en la llanura de inundación. Vulnerabilidad: cuánto se dañarían (por ejemplo, viviendas en planta baja)." },
    { nivel: "medio", q: "¿Qué diferencia hay entre deflación y abrasión eólica?", sol: "La deflación es el levantamiento y arrastre de partículas finas por el viento. La abrasión es el desgaste de las rocas por el choque de los granos de arena que transporta." },
    { nivel: "medio", q: "¿Por qué las inundaciones son más peligrosas en una ciudad muy asfaltada?", sol: "Porque el asfalto impide que el agua se infiltre; aumenta la escorrentía, que llega más rápido y en mayor cantidad a los cauces y las calles." },
    { nivel: "avanzado", ...{ q: "Propón tres medidas para reducir el riesgo de deslizamientos en una ladera junto a una carretera.", sol: "Reforestar o cubrir la ladera con vegetación, construir muros de contención o redes y drenar el agua para que no empape el terreno." } },
    { nivel: "avanzado", q: "¿Por qué los Alpes tienen picos escarpados y los montes de Toledo formas suaves?", sol: "Los Alpes son una cordillera joven que los procesos internos aún elevan más deprisa de lo que se erosiona. Los montes de Toledo son muy antiguos y la erosión los ha desgastado durante cientos de millones de años." },
    { nivel: "avanzado", q: "Un embalse en un río retiene sedimentos. Explica qué consecuencias puede tener aguas abajo y en la costa.", sol: "El agua sale sin sedimentos y con más capacidad erosiva, excava el cauce; el delta y las playas reciben menos arena y retroceden, como ha ocurrido en el delta del Ebro." },
    { nivel: "avanzado", q: "¿Qué relación hay entre el calentamiento global y los glaciares de los Pirineos? ¿Qué consecuencias tiene?", sol: "Al subir la temperatura, la nieve acumulada no compensa la fusión y los glaciares pierden masa; muchos han desaparecido y los demás podrían hacerlo en pocas décadas. Se pierde un paisaje y un indicador climático, y cambia el régimen de los ríos de montaña." },
    { nivel: "avanzado", q: "Explica por qué en un acuífero costero no se debe bombear demasiada agua.", sol: "Si baja mucho el nivel freático, el agua salada del mar penetra en el acuífero (intrusión marina) y lo saliniza, inutilizándolo para el consumo y el riego." },
    { nivel: "avanzado", q: "Diseña un pequeño experimento para comprobar que el agua con CO₂ disuelve la caliza más que el agua sola.", sol: "Poner trozos iguales de caliza o tiza pesados en dos vasos, uno con agua mineral y otro con agua con gas (o con vinagre como ácido más fuerte). Tras varios días, secar y pesar. El que pierde más masa demuestra la disolución. Mantener iguales la cantidad de agua, el tamaño y el tiempo." },
    { nivel: "avanzado", q: "Imagina que tu ayuntamiento quiere construir un barrio en la llanura de inundación de un río. Redacta tres argumentos científicos para el informe.", sol: "1) La llanura de inundación forma parte del río y se inundará en las crecidas, aunque pasen años sin hacerlo. 2) Impermeabilizar el suelo aumenta la escorrentía y el riesgo aguas abajo. 3) Los mapas de riesgo y la normativa desaconsejan construir allí; es mejor dedicarla a parques o cultivos que soporten inundaciones." },
  ],
  quiz: [
    { q: "La energía de los procesos externos procede…", o: ["del calor interno", "del Sol y la gravedad", "de la Luna", "de los volcanes"], a: 1, e: "Mueven el agua, el aire y el hielo." },
    { q: "Los procesos internos tienden a…", o: ["allanar el relieve", "formar suelos", "formar dunas", "crear relieve"], a: 3, e: "Pliegan, rompen y elevan." },
    { q: "Un pliegue en forma de arco es…", o: ["un anticlinal", "un sinclinal", "una falla", "un horst"], a: 0, e: "Rocas más antiguas en el núcleo." },
    { q: "Si un bloque sube sobre otro por compresión, la falla es…", o: ["normal", "de desgarre", "inversa", "una diaclasa"], a: 2, e: "La normal se produce por estiramiento." },
    { q: "El mármol es una roca…", o: ["magmática", "sedimentaria", "metamórfica", "volcánica"], a: 2, e: "Procede de la caliza." },
    { q: "La gelifracción es…", o: ["meteorización física", "meteorización química", "un tipo de sedimentación", "un proceso interno"], a: 0, e: "El hielo actúa como una cuña." },
    { q: "El color rojizo de muchos suelos se debe a…", o: ["la disolución", "la gelifracción", "el viento", "la oxidación del hierro"], a: 3, e: "Meteorización química." },
    { q: "¿Qué hacen los agentes externos cuando pierden energía?", o: ["Erosionan", "Sedimentan", "Se congelan", "Pliegan"], a: 1, e: "Depositan primero lo más grueso." },
    { q: "La diagénesis convierte…", o: ["sedimentos en roca sedimentaria", "roca en magma", "caliza en mármol", "hielo en agua"], a: 0, e: "Compactación y cementación." },
    { q: "Los meandros son típicos del…", o: ["curso alto", "circo glaciar", "curso medio", "desierto"], a: 2, e: "El río serpentea." },
    { q: "Un valle en U lo excava…", o: ["un río", "un glaciar", "el viento", "el mar"], a: 1, e: "Fondo plano y paredes verticales." },
    { q: "Las morrenas son…", o: ["lagos", "dunas", "cuevas", "depósitos de un glaciar"], a: 3, e: "Materiales mezclados de todos los tamaños." },
    { q: "El cono de deyección es la parte de un torrente donde…", o: ["se recoge el agua", "nace el río", "hay hielo", "se depositan los materiales"], a: 3, e: "Al llegar a terreno llano." },
    { q: "Las estalagmitas crecen…", o: ["desde el techo", "desde el suelo", "en la superficie", "en el mar"], a: 1, e: "Las estalactitas cuelgan del techo." },
    { q: "El relieve kárstico se forma en…", o: ["granito", "basalto", "caliza", "pizarra"], a: 2, e: "Se disuelve con agua y CO₂." },
    { q: "La Pedriza de Madrid es un relieve…", o: ["granítico", "kárstico", "glaciar", "volcánico"], a: 0, e: "Bolos y berrocales." },
    { q: "Las dunas las forma…", o: ["el mar", "el viento", "un glaciar", "un río"], a: 1, e: "Al depositar la arena." },
    { q: "Un tómbolo es…", o: ["una barra de arena que une una isla a tierra", "un arco marino", "un lago glaciar", "una duna"], a: 0, e: "Como en Peñíscola." },
    { q: "La Albufera de Valencia es…", o: ["un lago glaciar", "un poljé", "un estuario", "una laguna costera cerrada por una barra"], a: 3, e: "Costa baja." },
    { q: "El riesgo natural que más daños causa en España es…", o: ["los volcanes", "los tsunamis", "las inundaciones", "las dunas"], a: 2, e: "Sobre todo con las DANA." },
  ],
  examen: [
    { q: "La meteorización es…", o: ["el transporte de sedimentos", "la alteración de la roca sin transporte", "el depósito de sedimentos", "un proceso interno"], a: 1, e: "Ocurre en el mismo lugar." },
    { q: "¿Qué forma deja un glaciar al retirarse?", o: ["Una morrena", "Un delta", "Una duna", "Un tómbolo"], a: 0, e: "Depósito de materiales mezclados." },
    { q: "En el curso alto de un río predomina…", o: ["la sedimentación", "la formación de deltas", "la erosión", "el viento"], a: 2, e: "Valles en V y cascadas." },
    { q: "Un horst es…", o: ["un pliegue", "un bloque levantado entre fallas", "una cueva", "un glaciar"], a: 1, e: "La fosa hundida es un graben." },
    { q: "Las cuevas con estalactitas se forman en rocas…", o: ["graníticas", "volcánicas", "metamórficas", "calizas"], a: 3, e: "Modelado kárstico." },
    { q: "La abrasión del viento forma…", o: ["meandros", "valles en U", "estalactitas", "rocas en forma de seta"], a: 3, e: "La arena desgasta la base de las rocas." },
    { q: "Un farallón es…", o: ["una barra de arena", "un pilar aislado tras derrumbarse un arco", "un lago", "un tipo de duna"], a: 1, e: "Costa acantilada." },
    { q: "¿Qué medida reduce el riesgo de inundación?", o: ["Construir en el cauce", "Talar los bosques", "No construir en llanuras de inundación", "Asfaltar el suelo"], a: 2, e: "Ordenación del territorio." },
  ],
  feynman: ["La diferencia entre procesos internos y externos", "Qué es la meteorización y sus tipos", "Los tres pasos del trabajo de un agente externo", "Por qué un valle de río es en V y uno de glaciar en U", "Dos formas que crea el mar en la costa"],
  mapa: mapa("RELIEVE", "var(--eso)", [
    ["Procesos internos", "pliegues · fallas · volcanes", "var(--red)"],
    ["Meteorización", "física · química", "var(--muted)"],
    ["Agentes externos", "erosión → transporte → sedimento", "var(--pen)"],
    ["Formas", "valles · dunas · acantilados", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es la meteorización?", "La alteración y rotura de las rocas en el lugar donde están, sin transporte."],
    ["¿Qué es la sedimentación?", "El depósito de los materiales transportados cuando el agente pierde energía."],
    ["Forma de un valle fluvial", "En V."],
    ["Forma de un valle glaciar", "En U."],
    ["¿Qué es un delta?", "Una acumulación de sedimentos en la desembocadura de un río."],
    ["Gelifracción", "Rotura de la roca por el hielo que se forma en sus grietas."],
    ["Relieve kárstico", "Formas de disolución de la caliza: dolinas, lapiaces, cuevas, estalactitas."],
    ["Berrocal", "Acumulación de bolos de granito redondeados."],
    ["Anticlinal y sinclinal", "Anticlinal: pliegue en arco. Sinclinal: pliegue en cuenco."],
    ["Falla", "Fractura con desplazamiento de bloques: normal, inversa o de desgarre."],
    ["Ciclo de las rocas", "Magmáticas, sedimentarias y metamórficas se transforman unas en otras."],
    ["Acuífero", "Roca permeable empapada de agua subterránea sobre una capa impermeable."],
  ],
  glosario: [
    ["Proceso interno", "Proceso geológico causado por el calor interno que crea relieve."],
    ["Proceso externo", "Proceso causado por el Sol y la gravedad que desgasta el relieve."],
    ["Pliegue", "Deformación de rocas plásticas que se doblan sin romperse."],
    ["Falla", "Fractura de la roca con desplazamiento de los bloques."],
    ["Diaclasa", "Fractura de la roca sin desplazamiento."],
    ["Meteorización", "Alteración de las rocas en el lugar donde están."],
    ["Gelifracción", "Rotura de la roca por la congelación del agua en sus grietas."],
    ["Erosión", "Arranque de materiales por un agente externo."],
    ["Sedimentación", "Depósito de materiales cuando el agente pierde energía."],
    ["Diagénesis", "Transformación de sedimentos en roca sedimentaria."],
    ["Meandro", "Curva amplia de un río en su curso medio."],
    ["Delta", "Depósito de sedimentos en la desembocadura de un río."],
    ["Morrena", "Depósito de materiales que deja un glaciar."],
    ["Acuífero", "Capa de roca empapada de agua subterránea."],
    ["Karst", "Relieve formado por disolución de rocas calizas."],
    ["Berrocal", "Zona cubierta de bolos graníticos."],
    ["Duna", "Acumulación de arena formada por el viento."],
    ["Desertificación", "Degradación de tierras en zonas secas por pérdida de suelo."],
  ],
  situacion: {
    titulo: "Guía geológica de nuestro entorno",
    reto: "La oficina de turismo de vuestra comarca quiere una ruta geológica para estudiantes y familias. Vuestra clase debe identificar los procesos que han formado el relieve cercano, localizar puntos de interés y explicar los riesgos de la zona.",
    pasos: [
      "Estudiad el mapa geológico (IGME) y las imágenes de satélite de vuestra comarca: tipos de roca, ríos, montañas y costa.",
      "Elegid de cinco a ocho puntos de interés (un pliegue, un valle, una cueva, un berrocal, un acantilado…) y explicad qué procesos los formaron.",
      "Haced una salida de campo para fotografiar y dibujar los puntos, siguiendo las normas de seguridad.",
      "Consultad el mapa de zonas inundables y localizad los riesgos geológicos de la zona.",
      "Redactad la guía con mapa, fichas de cada punto y recomendaciones de seguridad.",
    ],
    producto: "Guía de la ruta geológica, con mapa, fichas ilustradas y un apartado de riesgos y buenas prácticas.",
    evaluacion: [
      "Identificación correcta de los procesos y las formas de relieve.",
      "Uso de fuentes cartográficas reales y de observaciones de campo.",
      "Análisis riguroso de los riesgos y medidas propuestas.",
      "Calidad divulgativa de la guía para un público no especializado.",
    ],
  },
  familias: ["En una excursión, buscad señales de erosión: raíces que rompen el asfalto, piedras redondeadas en un río.", "Mirad juntos imágenes de satélite del delta del Ebro y de un valle de los Pirineos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «La Tierra y su dinámica» y «Proyecto científico» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): procesos geológicos internos y externos, deformación de las rocas, ciclo de las rocas, modelado del relieve y riesgos geológicos. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Mesa de arena con agua para simular erosión y formación de deltas y meandros.",
      "Disolver tiza en agua con gas y en vinagre para modelizar el karst.",
      "Plastilina en capas para modelizar pliegues y fallas con compresión y estiramiento.",
      "Situación de aprendizaje: guía de una ruta geológica del entorno.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Geomorfología, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Geomorfolog%C3%ADa" },
    { t: "Ciclo litológico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_litol%C3%B3gico" },
  ],
  revisado: "2026-11-13",
};
