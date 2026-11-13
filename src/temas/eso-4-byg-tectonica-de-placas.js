// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La tectónica de placas",
  minutos: 110,
  objetivos: [
    "Describir la estructura interna de la Tierra según los modelos geoquímico y dinámico",
    "Explicar cómo las ondas sísmicas revelan el interior terrestre",
    "Explicar la deriva continental, sus pruebas y la expansión del fondo oceánico",
    "Describir la tectónica de placas, su motor y el ciclo de Wilson",
    "Relacionar cada tipo de borde de placa con sus fenómenos: dorsales, subducción, cordilleras, volcanes y terremotos",
    "Valorar los riesgos sísmicos y volcánicos y las medidas de prevención, también en España",
  ],
  claves: ["litosfera", "astenosfera", "deriva continental", "placa litosférica", "dorsal", "subducción"],
  pregunta: {
    texto: "Si miras un mapa, la costa de Sudamérica y la de África encajan como dos piezas de puzle. ¿Es casualidad?",
    respuesta: "No. Hace unos 200 millones de años estaban <mark>unidas en un supercontinente, Pangea</mark>. Desde entonces se separan unos <b>2-3 cm al año</b>, más o menos lo que te crecen las uñas. Lo explica la <b>tectónica de placas</b>.",
  },
  lectura: {
    titulo: "Un meteorólogo contra todos",
    html: `<p>En 1910, el meteorólogo alemán Alfred Wegener hojeaba un atlas cuando se fijó en algo que muchos habían visto antes: la costa este de Sudamérica y la costa oeste de África encajaban como piezas de un puzle. Wegener no se conformó con la coincidencia. Buscó y encontró fósiles idénticos a ambos lados del océano, rocas de la misma edad que continuaban de un continente al otro y huellas de antiguos glaciares en lugares hoy tropicales.</p>
<p>En 1915 publicó su teoría: los continentes se mueven. Los geólogos de su época se burlaron de él: ¿qué fuerza podía empujar continentes enteros? Un meteorólogo no tenía nada que enseñarles. Wegener murió en 1930 en una expedición en Groenlandia, sin ver su idea aceptada.</p>
<p>Treinta años después, los submarinos y barcos que cartografiaron los fondos oceánicos encontraron cordilleras submarinas de miles de kilómetros, rocas que eran más jóvenes cuanto más cerca estaban de ellas y un registro magnético en franjas simétricas. Wegener tenía razón. Hoy sabemos, además, que el Atlántico se ensancha unos centímetros cada año, más o menos lo que crecen tus uñas. En este tema descubrirás qué mueve el suelo bajo tus pies.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 El interior de la Tierra: el modelo geoquímico</h3><p>La Tierra tiene un radio de unos 6.370 km. Si atendemos a la <b>composición química</b> de los materiales, se distinguen tres capas separadas por superficies llamadas <b>discontinuidades</b>:</p><p>• La <mark>corteza</mark>, la capa más externa y delgada. La <b>corteza continental</b> tiene de 30 a 70 km de espesor (más bajo las grandes cordilleras), está formada por rocas como el granito y es poco densa y muy antigua (hasta 4.000 millones de años). La <b>corteza oceánica</b> tiene solo unos 7 km, está formada por basalto, es más densa y joven (menos de 200 millones de años).<br>• El <mark>manto</mark>, desde la base de la corteza (discontinuidad de Mohorovičić) hasta 2.900 km de profundidad. Está formado por rocas ricas en silicatos de hierro y magnesio, como la peridotita. Supone el 84 % del volumen terrestre. Aunque es <b>sólido</b>, a escala de millones de años se comporta como un material plástico que puede fluir muy lentamente, como la plastilina o el hielo de un glaciar.<br>• El <mark>núcleo</mark>, desde 2.900 km (discontinuidad de Gutenberg) hasta el centro. Está formado por hierro y níquel. Se divide en <b>núcleo externo</b>, líquido, cuyos movimientos generan el campo magnético terrestre, y <b>núcleo interno</b>, sólido por la enorme presión, a unos 5.000-6.000 °C.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de la Tierra con litosfera, astenosfera, manto, núcleo externo y núcleo interno">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="100" cy="90" r="80" fill="var(--red)" opacity=".25"/><circle cx="100" cy="90" r="74" fill="var(--sun)" opacity=".35"/><circle cx="100" cy="90" r="64" fill="var(--sun)" opacity=".55"/>
        <circle cx="100" cy="90" r="36" fill="var(--red)" opacity=".7"/><circle cx="100" cy="90" r="16" fill="var(--red)"/>
        <circle cx="100" cy="90" r="80" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700"><text x="186" y="24" fill="var(--ink)">litosfera</text><text x="186" y="50" fill="var(--sun)">astenosfera</text><text x="186" y="76" fill="var(--ink)">manto</text><text x="186" y="104" fill="var(--red)">núcleo ext.</text><text x="186" y="130" fill="var(--red)">núcleo int.</text></g>
        <g stroke="var(--line)" stroke-width="1"><path d="M168 46 H 182 M160 72 H 182 M130 100 H 182 M110 126 H 182"/></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 El modelo dinámico</h3><p>Para entender la tectónica importa más <b>cómo se comportan</b> los materiales (rígidos, plásticos o líquidos) que de qué están hechos. Según el <b>modelo dinámico</b>, la Tierra tiene estas capas:</p><p>• La <mark>litosfera</mark> es la capa externa <b>rígida</b>. Incluye la corteza y la parte superior del manto, y tiene unos 100 km de espesor de media (menos bajo los océanos, más bajo los continentes). Está rota en fragmentos: las <b>placas litosféricas</b>.<br>• Debajo está la <mark>astenosfera</mark>, una zona del manto superior que, por la temperatura cercana a la de fusión, es <b>más plástica</b> y deformable. Tiene un pequeño porcentaje de roca fundida. Sobre ella se desplazan las placas.<br>• El <b>manto sublitosférico</b> (o mesosfera), sólido pero con movimientos muy lentos de convección, llega hasta el núcleo. En su base hay una zona irregular, la capa D'', donde se acumulan restos de placas hundidas y se originan algunas plumas de material caliente.<br>• La <b>endosfera</b>, que coincide con el núcleo.</p><p>Es importante no confundir <b>corteza</b> y <b>litosfera</b>: la litosfera es más gruesa e incluye parte del manto. Tampoco hay que imaginar el manto como un mar de lava: el magma solo se forma en lugares concretos, cuando baja la presión, sube la temperatura o entra agua.</p>`,
      svg: L6.capas("Modelo dinámico de la Tierra: litosfera, astenosfera, manto sublitosférico y endosfera", [["Litosfera: rígida, en placas", "var(--leaf)", 0.8], ["Astenosfera: más plástica", "var(--sun)", 0.8], ["Manto sublitosférico: convección lenta", "var(--red)", 1.6], ["Endosfera (núcleo): líquida y sólida", "var(--inf)", 1.4]], "Capas según su comportamiento"),
    },
    {
      html: `<h3>1.3 Cómo conocemos el interior: las ondas sísmicas</h3><p>El sondeo más profundo jamás perforado, en la península de Kola (Rusia), llegó a poco más de 12 km: menos del 0,2 % del radio terrestre. Casi todo lo que sabemos del interior procede del estudio de las <mark>ondas sísmicas</mark> que producen los terremotos, que viajan por el interior y se registran en los <b>sismógrafos</b> de todo el mundo. Funciona como una ecografía del planeta.</p><p>Hay dos tipos principales de ondas internas:</p><p>• Las <b>ondas P</b> (primarias) son las más rápidas. Hacen vibrar las partículas en la misma dirección en que avanzan, comprimiendo y estirando el material, como un muelle. <b>Atraviesan sólidos, líquidos y gases</b>.<br>• Las <b>ondas S</b> (secundarias) son más lentas. Hacen vibrar las partículas perpendicularmente a su avance, como una cuerda que se agita. <mark>Solo atraviesan sólidos</mark>.</p><p>La velocidad de las ondas cambia según el material. Cuando cambia de golpe a cierta profundidad, se deduce que hay una <b>discontinuidad</b>. En la de <b>Mohorovičić</b> (de 7 a 70 km) aumenta la velocidad: empieza el manto. En la de <b>Gutenberg</b> (2.900 km) las ondas S desaparecen y las P se frenan: el núcleo externo es <b>líquido</b>. Por eso, tras un terremoto, hay una zona del otro lado de la Tierra, la <b>zona de sombra</b>, a la que no llegan ondas S. En 1936 la sismóloga danesa Inge Lehmann descubrió, por el comportamiento de las ondas P, que el núcleo interno es sólido.</p>`,
      svg: L6.compara("Ondas sísmicas P y S", ["Ondas P", "var(--pen)", ["más rápidas", "comprimen y estiran", "sólidos y líquidos", "llegan primero"]], ["Ondas S", "var(--red)", ["más lentas", "vibran de lado", "solo sólidos", "no cruzan el núcleo externo"]]),
      video: { id: "liDnlvkr_k4", titulo: "Tipos de ondas sísmicas", canal: "Cerebralia", vistas: 291301 },
    },
    {
      html: `<h3>2.1 La deriva continental</h3><p>En 1912, <b>Alfred Wegener</b> presentó la <mark>teoría de la deriva continental</mark>: todos los continentes estuvieron unidos hace unos 300-200 millones de años en un supercontinente al que llamó <b>Pangea</b> («toda la tierra»), rodeado por un único océano, Panthalassa. Pangea se fragmentó y los continentes se fueron desplazando lentamente hasta su posición actual, y siguen moviéndose.</p><p>Primero se separaron dos grandes bloques: <b>Laurasia</b> al norte (Norteamérica, Europa y Asia) y <b>Gondwana</b> al sur (Sudamérica, África, la Antártida, Australia e India), separados por el mar de Tetis. Después, el Atlántico Sur se abrió entre Sudamérica y África, India se separó y viajó hacia el norte hasta chocar con Asia, y Australia se alejó de la Antártida.</p><p>Wegener imaginaba que los continentes, hechos de rocas ligeras, se abrían paso sobre el fondo oceánico como barcos rompiendo el hielo. Ahí estaba su error: no podía explicar qué fuerza los movía, y los cálculos de los físicos demostraban que ni la rotación de la Tierra ni las mareas bastaban. Por eso, aunque sus pruebas eran sólidas, su teoría fue rechazada por la mayoría de los geólogos durante casi medio siglo. En ciencia no basta con describir un fenómeno: hay que proponer un <b>mecanismo</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sudamérica y África encajan; el mismo fósil aparece en las dos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M70 30 Q 110 30 118 60 Q 112 90 96 110 Q 84 140 74 160 Q 64 130 60 100 Q 46 70 70 30 Z" fill="var(--leaf)" opacity=".6"/>
        <path d="M140 40 Q 190 30 210 60 Q 220 90 200 120 Q 186 150 176 150 Q 166 120 160 100 Q 136 90 128 66 Q 132 46 140 40 Z" fill="var(--sun)" opacity=".6"/>
        <ellipse cx="96" cy="96" rx="12" ry="5" fill="var(--pen)"/><ellipse cx="150" cy="86" rx="12" ry="5" fill="var(--pen)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="80" y="22" fill="var(--leaf)">Sudamérica</text><text x="182" y="28" fill="var(--sun)">África</text><text x="124" y="174" fill="var(--pen)">mismo fósil: Mesosaurus</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.2 Las pruebas de Wegener</h3><p>Wegener reunió pruebas de cuatro tipos:</p><p>• <b>Geográficas</b>: el <mark>encaje de las costas</mark> de Sudamérica y África. El encaje es aún mejor si se toma el borde de la plataforma continental, a unos 1.000 m de profundidad, que es el límite real de los continentes.<br>• <b>Paleontológicas</b>: los mismos <mark>fósiles</mark> aparecen en continentes hoy separados por océanos. El reptil <i>Mesosaurus</i>, que vivía en agua dulce y no podía cruzar un océano, se encuentra en Brasil y en Sudáfrica; la planta <i>Glossopteris</i>, en Sudamérica, África, India, Australia y la Antártida; el reptil <i>Lystrosaurus</i>, en África, India y la Antártida.<br>• <b>Geológicas</b>: tipos de rocas de la misma edad y cordilleras antiguas que se interrumpen en una costa y continúan en la de enfrente, como las de Escandinavia, Escocia y los Apalaches de Norteamérica.<br>• <b>Paleoclimáticas</b>: hay huellas de <b>glaciares</b> de hace 300 millones de años en zonas hoy tropicales, como Brasil, India o el sur de África, y depósitos de <b>carbón</b> (de bosques tropicales) en la Antártida. Solo se explican si esos territorios estuvieron en otras latitudes.</p><p>Hoy se añaden pruebas modernas que Wegener no conoció: el <b>paleomagnetismo</b> de las rocas y la medida directa del movimiento con satélites GPS, que detectan desplazamientos de milímetros.</p>`,
      svg: L6.radial("Cuatro tipos de pruebas de la deriva continental", "Pruebas de Wegener", ["Geográficas: encaje de costas", "Paleontológicas: Mesosaurus", "Geológicas: rocas y cordilleras", "Paleoclimáticas: glaciares"], "var(--pen)"),
    },
    {
      html: `<h3>2.3 La expansión del fondo oceánico</h3><p>Tras la Segunda Guerra Mundial, los sónares de los barcos permitieron cartografiar los fondos marinos, y aparecieron sorpresas:</p><p>• En medio de los océanos hay <mark>dorsales oceánicas</mark>: cordilleras submarinas de más de 60.000 km de longitud en total, con un valle central (rift) donde hay volcanes y terremotos. La dorsal mesoatlántica recorre todo el Atlántico de norte a sur y emerge en Islandia.<br>• Junto a algunos continentes hay <b>fosas oceánicas</b> de más de 10 km de profundidad, como la de las Marianas (11 km).<br>• La edad de las rocas del fondo <b>aumenta al alejarse de la dorsal</b>, y ninguna supera los 200 millones de años, mientras que hay rocas continentales de 4.000 millones.<br>• El grosor de los sedimentos también aumenta al alejarse de la dorsal.</p><p>En 1962, <b>Harry Hess</b> propuso la <b>expansión del fondo oceánico</b>: en las dorsales sube magma del manto, se enfría y forma <b>corteza oceánica nueva</b>, que empuja a la anterior hacia los lados, como en dos cintas transportadoras. Esa corteza vuelve a hundirse en el manto en las fosas. La prueba definitiva fue el <b>paleomagnetismo</b>: al solidificarse, los minerales magnéticos del basalto se orientan según el campo magnético de ese momento, que se invierte cada cierto tiempo. A ambos lados de las dorsales hay franjas de polaridad normal e invertida <mark>simétricas</mark>, como un código de barras.</p>`,
      svg: L6.flujo("Expansión del fondo oceánico: el magma sube en la dorsal, forma corteza nueva que se aleja y se hunde en las fosas", ["En la dorsal sube magma del manto", "Se enfría y forma corteza oceánica nueva", "La corteza se aleja hacia los lados (más vieja)", "En las fosas se hunde y vuelve al manto"], "Hess, 1962"),
    },
    {
      html: `<h3>2.4 La teoría de la tectónica de placas</h3><p>En los años sesenta, la deriva continental y la expansión del fondo oceánico se unieron en una teoría que revolucionó la geología, como la evolución revolucionó la biología: la <mark>tectónica de placas</mark>. Sus ideas principales son:</p><p>1) La <b>litosfera</b> está dividida en unas <b>15 placas</b> grandes y muchas pequeñas que encajan como las piezas de un balón. Las principales son la Pacífica (la mayor), la Norteamericana, la Sudamericana, la Euroasiática, la Africana, la Indoaustraliana y la Antártica; entre las pequeñas, la de Nazca, la de Cocos, la Filipina o la Arábiga.<br>2) Las placas pueden incluir corteza oceánica, continental o ambas: la Sudamericana lleva el continente y la mitad del Atlántico Sur. <b>Los continentes no se mueven solos</b>: viajan con su placa.<br>3) Las placas <mark>se mueven</mark> unas respecto a otras entre 1 y 10 cm al año.<br>4) En los <b>bordes</b> entre placas se concentra la actividad geológica: se crea litosfera, se destruye o se desliza. Ahí están la mayoría de los volcanes, terremotos y cordilleras.<br>5) La superficie de la Tierra no crece: la litosfera que se crea en las dorsales se compensa con la que se destruye en las zonas de subducción.</p><p>La teoría explica de forma unificada fenómenos que antes parecían independientes: la distribución de volcanes y terremotos, la formación de cordilleras y océanos, y la posición de los continentes en el pasado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corrientes de convección en el manto que arrastran las placas">
        <defs>${flecha("tp1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="40" width="240" height="20" fill="var(--muted)"/>
        <rect x="10" y="60" width="240" height="110" fill="var(--sun)" opacity=".3"/>
        <path d="M130 150 Q 130 80 70 76 Q 20 76 24 150" fill="none" stroke="var(--red)" stroke-width="3" marker-end="url(#tp1)"/>
        <path d="M130 150 Q 130 80 190 76 Q 240 76 236 150" fill="none" stroke="var(--red)" stroke-width="3" marker-end="url(#tp1)"/>
        <path d="M120 36 L 60 36 M140 36 L 200 36" stroke="var(--ink)" stroke-width="3" marker-end="url(#tp1)"/>
        <g ${F} font-size="11" font-weight="700"><text x="104" y="26" fill="var(--ink)">dorsal</text><text x="96" y="130" fill="var(--red)">convección</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.5 El motor de las placas y el ciclo de Wilson</h3><p>El motor del movimiento es el <mark>calor interno</mark> de la Tierra, que procede de la desintegración de elementos radiactivos y del calor que quedó de su formación. Ese calor provoca lentas <b>corrientes de convección</b> en el manto sólido: el material caliente, menos denso, asciende; al acercarse a la superficie se enfría, se vuelve más denso y desciende. Es parecido a lo que ocurre en una olla de sopa al fuego, aunque muchísimo más lento: el manto se mueve unos centímetros al año.</p><p>Hoy se sabe que también son muy importantes dos fuerzas en los bordes: el <b>tirón de la placa</b> que se hunde en la subducción, que, al ser fría y densa, arrastra al resto de la placa como un mantel que se cae de la mesa, y el <b>empuje desde la dorsal</b>, donde la litosfera nueva, elevada, tiende a deslizarse hacia los lados.</p><p>Como los océanos se abren y se cierran, los continentes se unen y se separan en ciclos de cientos de millones de años: es el <mark>ciclo de Wilson</mark>. Etapas: 1) <b>rift continental</b>: un continente se estira y se rompe (valle del Rift en África oriental); 2) <b>mar estrecho</b> (mar Rojo); 3) <b>océano en expansión</b> (Atlántico); 4) <b>océano que se cierra</b> por subducción (Pacífico); 5) <b>colisión</b> de continentes y formación de una cordillera (Himalaya). Pangea es solo el último de varios supercontinentes; dentro de unos 250 millones de años podría formarse otro.</p>`,
      svg: L6.ciclo("Ciclo de Wilson: rift, mar estrecho, océano en expansión, océano que se cierra y colisión", "Wilson", ["Rift (África)", "Mar estrecho", "Océano abierto", "Se cierra", "Colisión"], "var(--red)"),
    },
    {
      html: `<h3>3.1 Bordes divergentes</h3><p>En los <mark>bordes divergentes</mark> o constructivos, dos placas <b>se separan</b> y se crea litosfera nueva. Son los límites de las dorsales oceánicas.</p><p>Al separarse las placas, disminuye la presión sobre el manto que está debajo, que se funde en parte y forma <b>magma basáltico</b>. Ese magma asciende, sale por fisuras en el valle central de la dorsal (rift) y, al enfriarse, forma nueva corteza oceánica. Las erupciones bajo el agua forman <b>lavas almohadilladas</b>, con forma de cojín. En el fondo de las dorsales hay también <b>fuentes hidrotermales</b> («fumarolas negras»), chimeneas de las que sale agua a más de 350 °C cargada de minerales, alrededor de las cuales viven comunidades de seres vivos sin luz solar.</p><p>En estos bordes hay <b>volcanismo</b> poco explosivo, porque el magma basáltico es fluido y deja escapar los gases, y <b>terremotos</b> poco profundos y, en general, de magnitud moderada. Islandia está sobre la dorsal mesoatlántica: se puede caminar por el valle del rift entre la placa Norteamericana y la Euroasiática, que se separan unos 2 cm al año.</p><p>Los bordes divergentes también pueden nacer en mitad de un continente: es el <b>rift continental</b>. En el valle del Rift africano, el continente se está estirando y agrietando; dentro de millones de años, el este de África podría separarse y el mar inundar el valle, como ocurrió en el mar Rojo.</p>`,
      svg: L6.flujo("Borde divergente: las placas se separan, se funde el manto, asciende magma y se forma corteza nueva", ["Dos placas se separan (← →)", "Baja la presión y se funde parte del manto", "El magma sale por el rift de la dorsal", "Nueva corteza oceánica (Islandia)"], "Borde divergente o constructivo"),
    },
    {
      html: `<h3>3.2 Bordes convergentes</h3><p>En los <mark>bordes convergentes</mark> o destructivos, dos placas <b>chocan</b>. Lo que ocurre depende del tipo de litosfera:</p><p>• <b>Oceánica contra continental</b>: la placa oceánica, más densa, se hunde bajo la continental en una <mark>zona de subducción</mark>. Se forma una <b>fosa oceánica</b>. Al hundirse, la placa libera agua que funde el manto que tiene encima, y el magma asciende y forma <b>volcanes</b> explosivos en el borde del continente. Los sedimentos se comprimen y se forma una <b>cordillera</b> de tipo andino. Ejemplo: la placa de Nazca bajo la Sudamericana, que forma la fosa de Perú-Chile y los Andes.<br>• <b>Oceánica contra oceánica</b>: una se hunde bajo la otra y se forma un <b>arco de islas volcánicas</b> junto a una fosa: Japón, las Marianas, las Aleutianas o las Antillas Menores.<br>• <b>Continental contra continental</b>: ninguna se hunde porque las dos son ligeras. Tras cerrarse el océano que las separaba, los continentes <b>colisionan</b> y la corteza se pliega, se rompe y se apila, formando grandes cordilleras: el <b>Himalaya</b> (India contra Asia, que sigue elevándose unos milímetros al año), los Alpes o los Pirineos. Casi no hay volcanes, pero sí terremotos.</p><p>A lo largo de la placa que se hunde se producen terremotos cada vez más profundos, hasta unos 700 km. Los terremotos más fuertes de la historia, de magnitud superior a 9, ocurrieron en zonas de subducción: Chile (1960), Alaska (1964), Sumatra (2004) y Japón (2011).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Borde convergente: la placa oceánica se hunde bajo la continental formando un volcán">
        <defs>${flecha("tp2", "var(--ink)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="40" width="120" height="30" fill="var(--water)" opacity=".4"/>
        <path d="M10 70 H 130 L 200 160 H 176 L 116 86 H 10 Z" fill="var(--pen)" opacity=".75"/>
        <path d="M130 70 L 150 50 L 160 30 L 170 50 L 250 50 V 100 H 160 Z" fill="var(--sun)" opacity=".75"/>
        <path d="M160 30 Q 158 70 168 110" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M156 24 Q 160 14 166 24" fill="none" stroke="var(--red)" stroke-width="2"/>
        <path d="M40 60 H 90" stroke="var(--ink)" stroke-width="3" marker-end="url(#tp2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="20" y="104" fill="var(--pen)">placa oceánica</text><text x="182" y="80" fill="var(--ink)">continental</text><text x="186" y="140" fill="var(--red)">subducción</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.3 Bordes transformantes y puntos calientes</h3><p>En los <mark>bordes transformantes</mark> o pasivos, dos placas <b>se deslizan lateralmente</b> una junto a otra, sin crear ni destruir litosfera. Lo hacen a lo largo de grandes <b>fallas transformantes</b>. Las placas no se deslizan suavemente: se quedan bloqueadas por el rozamiento, acumulan energía durante años y la liberan de golpe en <b>terremotos</b>, a veces muy destructivos. No hay volcanismo. Las dorsales están cortadas por muchas fallas transformantes que las fragmentan en tramos. El ejemplo más famoso en tierra firme es la <b>falla de San Andrés</b>, en California, entre la placa Pacífica y la Norteamericana, responsable del terremoto de San Francisco de 1906. También es transformante el borde entre las placas Africana y Euroasiática al oeste del estrecho de Gibraltar, cerca de las Azores.</p><p>No toda la actividad está en los bordes. Los <mark>puntos calientes</mark> son zonas del interior de una placa bajo las que asciende una <b>pluma</b> de material caliente desde el manto profundo. Allí se funde el manto y se forman volcanes. Como la placa se mueve sobre el punto caliente, que está casi fijo, se forma una <b>cadena de volcanes</b> cada vez más antiguos: las <b>islas Hawái</b> (la más joven, con volcanes activos, está sobre el punto caliente) o, según muchos geólogos, las <b>Canarias</b>, donde La Palma y El Hierro, las más occidentales, son las más jóvenes. El parque de Yellowstone también está sobre un punto caliente.</p>`,
      svg: L6.compara("Bordes transformantes frente a puntos calientes", ["Transformante", "var(--sun)", ["deslizamiento lateral", "no se crea litosfera", "terremotos, sin volcanes", "falla de San Andrés"]], ["Punto caliente", "var(--red)", ["dentro de una placa", "pluma del manto", "cadena de volcanes", "Hawái, Canarias"]]),
    },
    {
      html: `<h3>3.4 Volcanes, terremotos y cordilleras</h3><p>Si se dibujan en un mapa los volcanes activos y los epicentros de los terremotos, aparecen alineados formando franjas estrechas que coinciden con los <mark>bordes de placa</mark>. El <b>Cinturón de Fuego del Pacífico</b>, que rodea el océano Pacífico desde Chile hasta Nueva Zelanda pasando por Alaska y Japón, reúne alrededor del 75 % de los volcanes activos y el 90 % de los terremotos del planeta: es una sucesión casi continua de zonas de subducción.</p><p>Las <b>cordilleras</b> también se relacionan con las placas. Se distinguen las cordilleras de <b>subducción</b> o de tipo andino, con volcanes y rocas plegadas en el borde de un continente; las de <b>colisión</b>, como el Himalaya, los Alpes o los Pirineos, donde se apilan grandes láminas de roca; y los <b>arcos de islas</b>. El proceso de formación de una cordillera se llama <b>orogénesis</b> y dura decenas de millones de años. Las cordilleras muy antiguas, ya erosionadas, son hoy montañas suaves, como los montes de Toledo.</p><p>Las rocas sometidas a esas presiones y temperaturas se transforman: los esfuerzos forman <b>pliegues</b> y <b>fallas</b>, y las rocas pueden convertirse en rocas metamórficas, como la pizarra o el mármol. Así, la tectónica de placas conecta casi todos los procesos internos de la geología.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa esquemático con puntos de volcanes y terremotos alineados en los bordes de las placas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="20" width="232" height="130" rx="8" fill="var(--water)" opacity=".2"/>
        <path d="M40 30 Q 30 80 50 140 M200 30 Q 230 90 210 140 M90 100 Q 130 90 170 104 M120 20 Q 126 60 120 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>
        ${[[42, 50], [36, 80], [44, 112], [48, 132], [206, 46], [218, 76], [222, 100], [214, 128], [100, 98], [140, 94], [160, 100], [122, 40], [124, 70]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${i % 2 ? "var(--red)" : "var(--sun)"}"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><circle cx="40" cy="164" r="5" fill="var(--red)"/><text x="50" y="168" fill="var(--ink)">volcanes</text><circle cx="140" cy="164" r="5" fill="var(--sun)"/><text x="150" y="168" fill="var(--ink)">terremotos</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.5 Riesgos sísmicos y volcánicos</h3><p>Un <b>terremoto</b> es una vibración brusca del terreno causada por la liberación de energía acumulada en las rocas, normalmente al romperse o moverse una falla. El punto del interior donde se origina es el <b>hipocentro</b>, y el punto de la superficie que está justo encima, el <b>epicentro</b>. Se miden de dos formas: la <mark>magnitud</mark> (escala de magnitud de momento, heredera de la de Richter) mide la <b>energía liberada</b>; cada punto más supone unas 32 veces más energía. La <mark>intensidad</mark> (escala EMS o Mercalli, del I al XII) mide los <b>efectos y daños</b> en un lugar concreto, y disminuye al alejarse del epicentro.</p><p>Los terremotos <b>no se pueden predecir</b> con exactitud, pero sí se puede reducir el <b>riesgo</b>: con <b>mapas de peligrosidad</b>, <b>normas de construcción sismorresistente</b>, planes de emergencia, simulacros y sistemas de alerta de tsunamis. Los <b>volcanes</b>, en cambio, sí dan avisos: pequeños terremotos, hinchamiento del terreno, cambios en los gases. Se vigilan con sismógrafos, GPS, satélites y medidores de gases, lo que permite evacuar a tiempo.</p><p>En <b>España</b>, el riesgo sísmico es moderado; la zona más activa es el sureste (Granada, Murcia, Almería), por el contacto entre las placas Africana y Euroasiática: el terremoto de Lorca (2011, magnitud 5,1) causó nueve muertos. El riesgo volcánico se concentra en <b>Canarias</b>: la erupción de La Palma de 2021 duró 85 días y destruyó más de 1.600 edificios, pero no causó víctimas directas gracias a la vigilancia y la evacuación.</p>`,
      svg: L6.tabla("Magnitud e intensidad de un terremoto", ["", "Magnitud", "Intensidad"], [["Mide", "energía liberada", "daños y efectos"], ["Escala", "de momento (Mw)", "EMS / Mercalli I-XII"], ["Valor", "uno por terremoto", "distinto en cada lugar"], ["Ejemplo", "Lorca: 5,1", "Lorca: VII"]]),
      video: { id: "YyZIRGRQ_1w", titulo: "Anillo de Fuego, la gran zona de terremotos y volcanes", canal: "Un Mundo Inmenso", vistas: 1825375 },
    },
  ],
  figura: {
    titulo: "Los tres tipos de borde de placa",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Bordes divergentes, convergentes y transformantes con su movimiento, su efecto y un ejemplo">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Divergente", "← →", "se crea litosfera", "dorsal atlántica", "var(--leaf)"], ["Convergente", "→ ←", "subducción o cordillera", "Andes, Himalaya", "var(--red)"], ["Transformante", "↑ ↓", "se deslizan, terremotos", "falla de San Andrés", "var(--pen)"]]
        .map(([n, m, e, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="104" text-anchor="middle" font-size="30" font-weight="700" fill="var(--ink)" ${F}>${m}</text>
          <text x="${115 + i * 206}" y="142" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${e}</text>
          <text x="${115 + i * 206}" y="176" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "T2WqVjeOpXo", titulo: "Las placas tectónicas", canal: "Instituto Ángel D'Elía", vistas: 3289559, megusta: 0, busqueda: "tectónica de placas" },
  ejemplos: [
    { enunciado: "Un terremoto se registra en una estación, pero en una zona del otro lado de la Tierra no llegan ondas S. ¿Qué deduces?", pasos: ["Las ondas S no atraviesan los líquidos.", "Si no llegan al otro lado, algo líquido las bloquea en el centro de la Tierra.", "Esa «zona de sombra» de las ondas S se explica por el núcleo externo."], resultado: "El núcleo externo de la Tierra es líquido." },
    { enunciado: "El Atlántico se ensancha unos 2,5 cm al año. ¿Cuánto se habrá abierto en un millón de años?", pasos: ["2,5 cm/año · 1.000.000 años = 2.500.000 cm.", "2.500.000 cm = 25.000 m.", "25.000 m = 25 km."], resultado: "Unos 25 km (en 200 millones de años, unos 5.000 km: el ancho del océano)." },
    { enunciado: "Explica por qué en Japón hay volcanes y terremotos frecuentes.", pasos: ["Japón está sobre un borde convergente donde la placa del Pacífico, oceánica, se hunde bajo otras placas (subducción).", "La fricción entre las placas acumula tensiones que se liberan en terremotos.", "La placa que se hunde se funde parcialmente y el magma asciende formando volcanes."], resultado: "Por la subducción en un borde convergente del Cinturón de Fuego." },
    { enunciado: "Las ondas P viajan a unos 6 km/s y las S a unos 3,5 km/s por la corteza. Un sismógrafo registra las ondas S 20 segundos después que las P. ¿A qué distancia está el terremoto?", pasos: ["Tiempo de las P: t = d/6. Tiempo de las S: t = d/3,5.", "Diferencia: d/3,5 − d/6 = 20 s.", "d · (1/3,5 − 1/6) = d · 0,119 = 20.", "d = 20 / 0,119 ≈ 168 km."], resultado: "El foco está a unos 170 km del sismógrafo. Con tres estaciones se localiza el epicentro." },
    { enunciado: "A 50 km de una dorsal, la roca del fondo oceánico tiene 2 millones de años. ¿A qué velocidad se aleja esa placa de la dorsal? ¿Cuánto se abre el océano al año?", pasos: ["50 km = 5.000.000 cm.", "Velocidad = 5.000.000 cm / 2.000.000 años = 2,5 cm/año.", "Las dos placas se alejan, cada una a 2,5 cm/año.", "El océano se abre 2,5 + 2,5 = 5 cm al año."], resultado: "Cada placa se aleja 2,5 cm/año y el océano se abre unos 5 cm/año." },
    { enunciado: "Un terremoto A tiene magnitud 6 y otro B, magnitud 8. ¿Cuántas veces más energía liberó B?", pasos: ["Cada punto de magnitud equivale a unas 32 veces más energía.", "De 6 a 8 hay 2 puntos.", "32 · 32 ≈ 1.000."], resultado: "B liberó unas 1.000 veces más energía que A." },
  ],
  errores: [
    "Pensar que el manto es líquido: es sólido, aunque se deforma muy lentamente.",
    "Confundir la corteza con la litosfera: la litosfera incluye la corteza y la parte superior del manto.",
    "Creer que los continentes «flotan» sobre un mar de lava.",
    "Confundir magnitud (energía del terremoto) con intensidad (daños en un lugar).",
    "Pensar que los terremotos se pueden predecir con exactitud: solo se pueden prevenir sus daños.",
    "Pensar que los continentes se mueven solos sobre el fondo oceánico, como creía Wegener: se mueven con su placa, que incluye también corteza oceánica.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Nombra las capas de la Tierra según su composición y según su comportamiento.", sol: "Composición: corteza, manto y núcleo. Comportamiento: litosfera, astenosfera (zona más plástica del manto superior), mesosfera, núcleo externo (líquido) y núcleo interno (sólido)." } },
    { nivel: "básico", ...{ q: "¿Qué diferencia hay entre ondas P y S?", sol: "Las P son más rápidas y atraviesan sólidos y líquidos. Las S son más lentas y solo atraviesan sólidos." } },
    { nivel: "básico", ...{ q: "Indica dos pruebas de la deriva continental y explícalas.", sol: "El encaje de las costas de Sudamérica y África, y la presencia de los mismos fósiles (Mesosaurus) en continentes separados por el océano, que no podría haber cruzado." } },
    { nivel: "básico", ...{ q: "¿Por qué la teoría de Wegener no se aceptó al principio?", sol: "Porque no explicaba qué fuerza podía mover los continentes." } },
    { nivel: "básico", ...{ q: "Explica qué ocurre en una dorsal oceánica.", sol: "Dos placas se separan; el magma del manto asciende, se enfría y forma nueva corteza oceánica. Es un borde constructivo." } },
    { nivel: "básico", q: "Indica el espesor aproximado y el tipo de roca de la corteza continental y de la oceánica.", sol: "Continental: de 30 a 70 km, rocas como el granito, menos densa y muy antigua. Oceánica: unos 7 km, basalto, más densa y joven." },
    { nivel: "básico", q: "¿Qué es Pangea? ¿En qué dos bloques se dividió primero?", sol: "El supercontinente que reunía casi todas las tierras hace unos 300-200 Ma. Se dividió en Laurasia (norte) y Gondwana (sur)." },
    { nivel: "básico", q: "Nombra cinco placas litosféricas principales.", sol: "Pacífica, Norteamericana, Sudamericana, Euroasiática, Africana (también Indoaustraliana y Antártica)." },
    { nivel: "básico", q: "¿Qué es el Cinturón de Fuego del Pacífico?", sol: "La franja que rodea el Pacífico, con zonas de subducción, donde se concentran alrededor del 75 % de los volcanes activos y el 90 % de los terremotos." },
    { nivel: "básico", q: "Define hipocentro y epicentro.", sol: "Hipocentro: punto del interior donde se origina el terremoto. Epicentro: punto de la superficie situado justo encima del hipocentro." },
    { nivel: "básico", q: "¿Qué dos fuentes tiene el calor interno de la Tierra?", sol: "La desintegración de elementos radiactivos y el calor residual de la formación del planeta." },
    { nivel: "básico", q: "¿Qué es un punto caliente? Pon dos ejemplos.", sol: "Una zona bajo una placa donde asciende una pluma de material caliente del manto y forma volcanes. Ejemplos: Hawái y, según muchos geólogos, Canarias (también Yellowstone)." },
    { nivel: "medio", ...{ q: "¿Qué tipo de borde forma el Himalaya? ¿Y los Andes?", sol: "El Himalaya, un borde convergente de dos placas continentales (colisión). Los Andes, un borde convergente donde una placa oceánica se hunde bajo una continental (subducción)." } },
    { nivel: "medio", ...{ q: "¿Qué es una falla transformante? Pon un ejemplo.", sol: "Un borde donde dos placas se deslizan lateralmente una junto a otra sin crear ni destruir litosfera. Ejemplo: la falla de San Andrés (California)." } },
    { nivel: "medio", ...{ q: "Describe las etapas del ciclo de Wilson con un ejemplo de cada una.", sol: "Rift (valle del Rift africano), mar estrecho (mar Rojo), océano en expansión (Atlántico), océano en cierre por subducción (Pacífico) y colisión continental (Himalaya)." } },
    { nivel: "medio", ...{ q: "¿Cómo se vigila un volcán activo?", sol: "Con sismógrafos que registran pequeños terremotos, midiendo los gases que emite y con GPS y satélites que detectan si el terreno se hincha." } },
    { nivel: "medio", q: "Explica qué prueba el paleomagnetismo de los fondos oceánicos.", sol: "Las franjas de polaridad magnética normal e invertida son simétricas a ambos lados de las dorsales: la corteza se forma en la dorsal, registra el campo magnético del momento y se aleja hacia los dos lados. Prueba la expansión del fondo oceánico." },
    { nivel: "medio", q: "¿Por qué ninguna roca del fondo oceánico tiene más de unos 200 millones de años, si hay rocas continentales de 4.000 millones?", sol: "Porque la corteza oceánica se crea en las dorsales y se destruye en las zonas de subducción; se recicla continuamente. La continental, ligera, no se hunde y se conserva." },
    { nivel: "medio", q: "¿Por qué los volcanes de Islandia son poco explosivos y los de los Andes muy explosivos?", sol: "En Islandia (borde divergente) el magma es basáltico, fluido y deja escapar los gases. En los Andes (subducción) el magma es más viscoso y rico en gases y agua, que se acumulan y salen de forma explosiva." },
    { nivel: "medio", q: "Diferencia entre magnitud e intensidad de un terremoto.", sol: "La magnitud mide la energía liberada, y cada terremoto tiene un solo valor. La intensidad mide los efectos y daños en cada lugar y disminuye al alejarse del epicentro." },
    { nivel: "medio", q: "Explica la zona de sombra de las ondas S y qué demuestra.", sol: "Es la zona del lado opuesto al terremoto a la que no llegan ondas S. Como las ondas S no atraviesan líquidos, demuestra que el núcleo externo es líquido." },
    { nivel: "medio", q: "¿Por qué no hay que confundir corteza y litosfera?", sol: "La corteza es una capa definida por su composición; la litosfera, por su rigidez. La litosfera incluye la corteza y la parte superior del manto, y es más gruesa (unos 100 km)." },
    { nivel: "medio", q: "Explica por qué el encaje entre Sudamérica y África es mejor si se toma el borde de la plataforma continental.", sol: "Porque el límite real de un continente no es la línea de costa, que cambia con el nivel del mar, sino el borde de la plataforma continental, a unos 1.000 m de profundidad." },
    { nivel: "medio", q: "Ordena las etapas del ciclo de Wilson y pon un ejemplo actual de cada una.", sol: "Rift continental (Rift africano), mar estrecho (mar Rojo), océano en expansión (Atlántico), océano que se cierra (Pacífico), colisión (Himalaya)." },
    { nivel: "medio", q: "¿Por qué la erupción de La Palma de 2021 no causó víctimas directas, a pesar de destruir más de 1.600 edificios?", sol: "Porque el volcán se vigilaba (sismicidad, deformación, gases), se detectaron los avisos previos y se evacuó a la población a tiempo." },
    { nivel: "medio", q: "¿Qué ocurre en una dorsal con la presión y la fusión del manto?", sol: "Al separarse las placas baja la presión sobre el manto, que se funde en parte (fusión por descompresión) y forma magma basáltico que asciende y crea corteza nueva." },
    { nivel: "avanzado", ...{ q: "Indica cuatro medidas para reducir los daños de un terremoto.", sol: "Construir edificios sismorresistentes, no edificar en zonas de mayor riesgo, enseñar a la población cómo actuar y tener planes de emergencia y simulacros." } },
    { nivel: "avanzado", q: "La Palma y El Hierro son las islas canarias más jóvenes y occidentales, y Lanzarote y Fuerteventura las más antiguas. Explica esta distribución con la hipótesis del punto caliente.", sol: "La placa Africana se mueve muy lentamente sobre un punto caliente casi fijo. Cada isla se formó cuando esa parte de la placa estaba sobre él; al desplazarse la placa, las islas se alejaron y envejecieron, y se formaron otras nuevas al oeste, que hoy son las más activas." },
    { nivel: "avanzado", q: "Si India se mueve hacia el norte a unos 5 cm al año, ¿cuánto se ha desplazado en los últimos 50 millones de años? ¿Qué consecuencia ha tenido?", sol: "5 cm · 50.000.000 = 250.000.000 cm = 2.500 km. Al chocar con Asia formó el Himalaya y el Tíbet, que siguen elevándose." },
    { nivel: "avanzado", q: "¿Por qué Wegener no consiguió que se aceptara su teoría, y qué descubrimientos la confirmaron después?", sol: "Porque no explicaba qué fuerza movía los continentes y su mecanismo (continentes surcando el fondo oceánico) era físicamente imposible. La confirmaron la cartografía de dorsales y fosas, la edad del fondo oceánico, el paleomagnetismo simétrico y la distribución de terremotos, que dieron lugar a la tectónica de placas con la convección y el tirón de las placas como motor." },
    { nivel: "avanzado", q: "Explica por qué en el Himalaya hay grandes terremotos pero casi no hay volcanes, y en Japón hay ambos.", sol: "El Himalaya es un borde de colisión entre dos continentes: ninguna placa se hunde profundamente, no hay subducción oceánica que libere agua y funda el manto, y no se forma magma; sí se acumulan esfuerzos que provocan terremotos. Japón está sobre zonas de subducción oceánica, que generan magma (volcanes) y terremotos." },
    { nivel: "avanzado", q: "Propón un plan de cuatro medidas para reducir el riesgo sísmico en una ciudad del sureste español.", sol: "1) Cumplir y revisar la norma sismorresistente en edificios nuevos y reforzar los antiguos, sobre todo colegios y hospitales. 2) Mapa de peligrosidad para evitar construir en suelos que amplifican las ondas. 3) Plan de emergencia y simulacros periódicos. 4) Educación a la población sobre qué hacer durante y después de un terremoto." },
    { nivel: "avanzado", q: "Imagina el mapa del mundo dentro de 100 millones de años según el ciclo de Wilson. ¿Qué océanos crecerán y cuáles menguarán?", sol: "El Atlántico seguirá abriéndose y el Pacífico, rodeado de subducción, se irá cerrando. África oriental podría separarse por el Rift y formar un nuevo océano; el Mediterráneo podría cerrarse al acercarse África a Europa, formando nuevas cordilleras." },
  ],
  quiz: [
    { q: "La discontinuidad que separa la corteza del manto es la de…", o: ["Gutenberg", "Mohorovičić", "Lehmann", "Wegener"], a: 1, e: "Entre 7 y 70 km de profundidad." },
    { q: "El núcleo externo es…", o: ["sólido", "gaseoso", "de basalto", "líquido"], a: 3, e: "Por eso no lo atraviesan las ondas S." },
    { q: "¿Qué capa forma las placas tectónicas?", o: ["La litosfera", "El núcleo", "La astenosfera", "El manto inferior"], a: 0, e: "Corteza + parte superior del manto." },
    { q: "El manto es…", o: ["un mar de lava", "gaseoso", "sólido, pero se deforma lentamente", "líquido como el agua"], a: 2, e: "Se comporta como un material plástico a largo plazo." },
    { q: "Las ondas S no atraviesan…", o: ["los sólidos", "la corteza", "los líquidos", "el manto"], a: 2, e: "Solo viajan por sólidos." },
    { q: "Las ondas que llegan primero a un sismógrafo son…", o: ["las P", "las S", "las superficiales", "todas a la vez"], a: 0, e: "Son las más rápidas." },
    { q: "Mesosaurus en Brasil y Sudáfrica es una prueba…", o: ["geográfica", "paleoclimática", "magnética", "paleontológica"], a: 3, e: "Fósiles iguales en continentes separados." },
    { q: "Las huellas de glaciares en India son una prueba…", o: ["geográfica", "paleoclimática", "paleontológica", "sísmica"], a: 1, e: "Estuvo en latitudes frías." },
    { q: "¿Por qué se rechazó la teoría de Wegener?", o: ["No explicaba qué movía los continentes", "No tenía pruebas", "Era muy antigua", "La propuso un biólogo"], a: 0, e: "Faltaba el mecanismo." },
    { q: "La expansión del fondo oceánico la propuso…", o: ["Hutton", "Lyell", "Hess", "Lehmann"], a: 2, e: "En 1962." },
    { q: "Las franjas magnéticas simétricas se encuentran…", o: ["en los continentes", "a ambos lados de las dorsales", "en las fosas", "en los polos"], a: 1, e: "Prueba la expansión." },
    { q: "Las placas se mueven a una velocidad de…", o: ["1 km al año", "1 m al día", "1 mm cada siglo", "1-10 cm al año"], a: 3, e: "Como crecen las uñas." },
    { q: "El principal motor de las placas es…", o: ["la rotación terrestre", "la Luna", "el viento", "el calor interno y el tirón de las placas"], a: 3, e: "Convección y subducción." },
    { q: "El mar Rojo es un ejemplo de…", o: ["océano que se cierra", "océano que empieza a abrirse", "cordillera", "punto caliente"], a: 1, e: "Etapa del ciclo de Wilson." },
    { q: "En una dorsal oceánica…", o: ["chocan dos placas", "se hunde una placa", "se crea litosfera al separarse las placas", "no hay volcanes"], a: 2, e: "Borde divergente." },
    { q: "Los Andes se forman por…", o: ["subducción de la placa de Nazca", "colisión continental", "un punto caliente", "una dorsal"], a: 0, e: "Cordillera de tipo andino." },
    { q: "El Himalaya se formó por…", o: ["un borde divergente", "el choque de dos placas continentales", "un punto caliente", "una falla transformante"], a: 1, e: "India contra Asia." },
    { q: "La falla de San Andrés es un borde…", o: ["transformante", "divergente", "convergente", "punto caliente"], a: 0, e: "Las placas se deslizan lateralmente." },
    { q: "Las islas Hawái se explican por…", o: ["una dorsal", "una subducción", "una colisión", "un punto caliente"], a: 3, e: "Cadena de volcanes de distinta edad." },
    { q: "La magnitud de un terremoto mide…", o: ["los daños", "la duración", "la energía liberada", "la distancia al epicentro"], a: 2, e: "La intensidad mide los daños." },
  ],
  examen: [
    { q: "¿Qué prueba de la deriva continental es paleontológica?", o: ["El encaje de las costas", "Fósiles iguales en continentes separados", "Las dorsales", "Los glaciares"], a: 1, e: "Como Mesosaurus o Glossopteris." },
    { q: "La subducción es…", o: ["el hundimiento de una placa oceánica bajo otra", "la separación de dos placas", "el deslizamiento lateral", "el ascenso de una pluma"], a: 0, e: "Ocurre en las fosas." },
    { q: "¿Cuál es el motor del movimiento de las placas?", o: ["El viento", "La rotación de la Luna", "El calor interno de la Tierra", "Las mareas"], a: 2, e: "Convección y tirón de la placa." },
    { q: "La litosfera incluye…", o: ["solo la corteza", "la corteza y la parte superior del manto", "el núcleo", "la astenosfera"], a: 1, e: "Unos 100 km de espesor." },
    { q: "Un arco de islas volcánicas como Japón se forma en un borde…", o: ["divergente", "transformante", "continental-continental", "oceánico-oceánico convergente"], a: 3, e: "Una placa oceánica se hunde bajo otra." },
    { q: "Las rocas del fondo oceánico son más antiguas…", o: ["en las dorsales", "en los volcanes", "en todas partes igual", "lejos de las dorsales"], a: 3, e: "Se forman en la dorsal y se alejan." },
    { q: "La zona de mayor riesgo sísmico de la Península es…", o: ["Galicia", "el sureste", "la meseta norte", "Asturias"], a: 1, e: "Contacto entre las placas Africana y Euroasiática." },
    { q: "Los volcanes sí pueden vigilarse porque…", o: ["nunca entran en erupción", "están siempre en los polos", "avisan con terremotos, deformaciones y gases", "no tienen magma"], a: 2, e: "Permite evacuar a tiempo." },
  ],
  feynman: ["Qué son la litosfera y la astenosfera", "Las pruebas de Wegener", "Qué mueve las placas", "Los tres tipos de bordes con un ejemplo", "Por qué hay volcanes en Canarias y terremotos en el sur de España"],
  mapa: mapa("TECTÓNICA DE PLACAS", "var(--eso)", [
    ["Estructura", "litosfera sobre astenosfera", "var(--ink)"],
    ["Wegener", "Pangea · pruebas", "var(--leaf)"],
    ["Bordes", "divergente · convergente · transformante", "var(--red)"],
    ["Consecuencias", "volcanes · terremotos · cordilleras", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["¿Qué es la litosfera?", "La capa rígida externa de la Tierra (corteza y manto superior), dividida en placas."],
    ["¿Qué propuso Wegener?", "La deriva continental: los continentes estuvieron unidos en Pangea y se separaron."],
    ["Borde divergente", "Dos placas se separan y se crea litosfera nueva en una dorsal."],
    ["¿Qué es la subducción?", "El hundimiento de una placa oceánica bajo otra placa en un borde convergente."],
    ["¿Qué es el Cinturón de Fuego del Pacífico?", "La zona de bordes de placa que rodea el Pacífico, con la mayoría de volcanes activos."],
    ["Discontinuidad sísmica", "Límite entre capas donde las ondas cambian bruscamente de velocidad."],
    ["Ciclo de Wilson", "Apertura y cierre de océanos: rift, mar, océano, subducción, colisión."],
    ["Cinturón de Fuego", "Borde del Pacífico con la mayoría de volcanes y terremotos."],
    ["Ondas P y S", "P: rápidas, atraviesan sólidos y líquidos. S: lentas, solo sólidos."],
    ["Expansión del fondo oceánico", "En las dorsales se forma corteza nueva que se aleja y se hunde en las fosas (Hess)."],
    ["Borde transformante", "Las placas se deslizan lateralmente; hay terremotos, no volcanes (San Andrés)."],
    ["Punto caliente", "Pluma del manto bajo una placa que forma cadenas de volcanes (Hawái)."],
  ],
  glosario: [
    ["Corteza", "Capa externa y delgada de la Tierra, continental u oceánica."],
    ["Manto", "Capa entre la corteza y el núcleo; sólida pero plástica a largo plazo."],
    ["Núcleo", "Capa central de hierro y níquel, externa líquida e interna sólida."],
    ["Discontinuidad", "Superficie donde cambia bruscamente la velocidad de las ondas sísmicas."],
    ["Litosfera", "Capa rígida externa (corteza y manto superior) dividida en placas."],
    ["Astenosfera", "Zona más plástica del manto superior sobre la que se mueven las placas."],
    ["Ondas sísmicas", "Vibraciones de los terremotos que viajan por el interior (P y S)."],
    ["Deriva continental", "Teoría de Wegener: los continentes se desplazan."],
    ["Pangea", "Supercontinente que se fragmentó hace unos 200 Ma."],
    ["Dorsal oceánica", "Cordillera submarina donde se crea litosfera."],
    ["Fosa oceánica", "Depresión profunda donde una placa se hunde."],
    ["Paleomagnetismo", "Magnetismo registrado en las rocas al formarse."],
    ["Placa litosférica", "Fragmento rígido de la litosfera que se mueve."],
    ["Subducción", "Hundimiento de una placa oceánica bajo otra."],
    ["Ciclo de Wilson", "Apertura y cierre de océanos a lo largo de cientos de millones de años."],
    ["Punto caliente", "Zona de ascenso de material caliente del manto bajo una placa."],
    ["Epicentro", "Punto de la superficie situado sobre el foco de un terremoto."],
    ["Magnitud", "Medida de la energía liberada por un terremoto."],
  ],
  situacion: {
    titulo: "¿Está preparado nuestro instituto para un terremoto?",
    reto: "Protección Civil propone a los institutos revisar su preparación ante riesgos geológicos. Vuestra clase estudiará el riesgo sísmico de vuestra localidad con datos reales, revisará el plan de evacuación del centro y diseñará una campaña de prevención para el resto del alumnado.",
    pasos: [
      "Consultad el catálogo de terremotos y el mapa de peligrosidad sísmica del Instituto Geográfico Nacional para vuestra zona y relacionadlo con las placas.",
      "Representad en un mapa los terremotos de los últimos años en la Península y explicad su distribución.",
      "Construid un sismógrafo casero o usad la app de un móvil para registrar vibraciones y explicad cómo se localiza un epicentro.",
      "Revisad con el equipo directivo el plan de evacuación del instituto y proponed tres mejoras.",
      "Preparad una campaña (carteles o vídeo breve) con qué hacer antes, durante y después de un terremoto.",
    ],
    producto: "Informe de riesgo de la localidad, mapa comentado, propuestas de mejora del plan de evacuación y campaña de prevención.",
    evaluacion: [
      "Uso correcto de datos reales y su relación con la tectónica de placas.",
      "Comprensión de los conceptos de magnitud, intensidad, peligrosidad y riesgo.",
      "Viabilidad y utilidad de las propuestas para el centro.",
      "Claridad y alcance de la campaña de prevención.",
    ],
  },
  familias: ["Recortad los continentes de un mapa viejo e intentad montar Pangea.", "Buscad en la web del Instituto Geográfico Nacional los últimos terremotos en España.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «La Tierra y su dinámica» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): estructura interna de la Tierra, métodos de estudio, deriva continental, tectónica de placas y sus manifestaciones, riesgos geológicos. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Puzle de Pangea con fósiles y rocas coloreados.",
      "Modelo de convección con agua caliente y colorante, o con cera y una placa calefactora.",
      "Mapa interactivo de terremotos y volcanes del IGN y del USGS en tiempo real.",
      "Situación de aprendizaje: revisión del plan de evacuación del centro ante un terremoto.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Tectónica de placas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tect%C3%B3nica_de_placas" },
    { t: "Escala sismológica de magnitud de momento, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escala_sismol%C3%B3gica_de_magnitud_de_momento" },
  ],
  revisado: "2026-11-13",
};
