// Ciencias Generales 2º Bachillerato · La estructura de la Tierra y la tectónica de placas (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena, tierra, limite, estratos } = require("./_bach2-cg");

// Ondas sísmicas y zona de sombra.
const sombraSVG = marco("Las ondas P atraviesan todo el planeta, pero las ondas S no pasan por el núcleo externo líquido y dejan una zona de sombra", `
  <circle cx="130" cy="92" r="74" fill="var(--sun)" fill-opacity=".18" stroke="#b45309" stroke-width="2"/><circle cx="130" cy="92" r="40" fill="var(--red)" fill-opacity=".35"/><circle cx="130" cy="92" r="16" fill="var(--red)" fill-opacity=".7"/>
  <circle cx="130" cy="18" r="5" fill="var(--ink)"/>${T(130, 12, "terremoto", { fs: 9.5, b: true })}
  <path d="M130 18 Q 90 60 62 126" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M130 18 Q 170 60 198 126" fill="none" stroke="var(--leaf)" stroke-width="2"/>
  <path d="M130 18 L 130 166" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 3"/>
  ${T(30, 150, "S y P", { fs: 10, b: true, c: "var(--leaf)" })}${T(230, 150, "S y P", { fs: 10, b: true, c: "var(--leaf)" })}${T(130, 178, "solo P (sombra de las S)", { fs: 10, b: true, c: "var(--pen)" })}
  ${T(130, 96, "núcleo", { fs: 9, b: true, c: "#fff" })}`);

// Pruebas de Wegener.
const wegenerSVG = L6.radial("Pruebas de la deriva continental de Wegener", "Wegener", ["Encaje de costas", "Fósiles comunes", "Rocas y cordilleras", "Climas antiguos"], "var(--sun)");

// Ciclo de Wilson.
const wilsonSVG = L6.ciclo("Ciclo de Wilson: un continente se rompe, se abre un océano, después se cierra por subducción y los continentes chocan formando un supercontinente", "Wilson", ["Rift", "Océano joven", "Océano amplio", "Subducción", "Colisión"], "var(--pen)");

module.exports = tema({
  titulo: "La estructura de la Tierra y la tectónica de placas",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar los métodos de estudio del interior terrestre, en especial las ondas sísmicas",
    "Describir las capas de la Tierra según su composición y según su comportamiento mecánico",
    "Exponer la deriva continental de Wegener y las pruebas que llevaron a la tectónica de placas",
    "Identificar los tipos de límites de placa y los procesos geológicos asociados a cada uno",
    "Relacionar la tectónica con el vulcanismo, los terremotos, las cordilleras y el ciclo de las rocas",
    "Aplicar la tectónica de placas a la geología de la península ibérica y de Canarias",
  ],
  claves: ["geosfera", "ondas sísmicas", "discontinuidad", "corteza", "manto", "núcleo", "litosfera", "astenosfera", "deriva continental", "Pangea", "expansión del fondo oceánico", "placa litosférica", "dorsal", "subducción", "punto caliente", "ciclo de las rocas"],
  pregunta: {
    texto: "Si nadie ha llegado nunca más allá de 12 km de profundidad, ¿cómo sabemos que el centro de la Tierra es de hierro?",
    respuesta: "Por las <mark>ondas sísmicas</mark>. Cuando hay un gran terremoto, sus ondas atraviesan el planeta y llegan a sismógrafos de todo el mundo. Su <b>velocidad</b> cambia según el material que cruzan, y en ciertas profundidades se desvían o se frenan bruscamente. Las ondas S, que no viajan por líquidos, no atraviesan el núcleo externo: por eso sabemos que es líquido. Combinando estos datos con la <b>densidad media</b> de la Tierra (5,5 g/cm³), el campo magnético y la composición de los meteoritos, se deduce un núcleo de hierro y níquel.",
  },
  lectura: {
    titulo: "El meteorólogo que movió los continentes",
    html: `<p>En 1912, el meteorólogo alemán Alfred Wegener presentó una idea que muchos geólogos consideraron disparatada: los continentes no estaban fijos, sino que se habían desplazado lentamente a lo largo de millones de años. Hace unos 250 millones de años habrían formado un único supercontinente, al que llamó Pangea, rodeado por un océano gigantesco. Sus pruebas eran sugerentes: las costas de Sudamérica y África encajan como piezas de un puzle, en ambos continentes aparecen los mismos fósiles y las mismas rocas, y en la India y en el Sáhara hay huellas de antiguos glaciares.</p><p>Pero Wegener no supo explicar qué fuerza podía mover continentes enteros, y su teoría fue rechazada. Murió en 1930 en una expedición en Groenlandia. Treinta años después, el estudio de los fondos oceánicos, con sonar y con el magnetismo de sus rocas, demostró que tenía razón en lo esencial: el fondo del océano se crea en las dorsales y se destruye en las fosas, y arrastra consigo los continentes. Había nacido la tectónica de placas, la gran teoría que explica los terremotos, los volcanes, las cordilleras y la forma de los continentes. En este tema descubrirás cómo es la Tierra por dentro y por qué su superficie nunca deja de moverse.</p>`,
  },
  bloques: [
    { h: "Cómo se estudia el interior de la Tierra", p: [
      "El interior de la Tierra es inaccesible: el sondeo más profundo, el de Kola en Rusia, solo alcanzó 12,3 km, menos del 0,2 % del radio terrestre (6370 km). Por eso los geólogos usan <b>métodos indirectos</b>. Los <b>métodos directos</b> (minas, sondeos, rocas que salen a la superficie en los volcanes o al erosionarse las cordilleras) solo informan de la parte más externa. Entre los indirectos están el estudio de la <b>densidad</b> (la densidad media de la Tierra es 5,5 g/cm³, pero la de las rocas de la superficie es de unos 2,7, así que el interior debe ser mucho más denso), la <b>gravimetría</b>, el <b>magnetismo</b>, el <b>flujo de calor</b> y el análisis de los <b>meteoritos</b>, restos de los materiales que formaron los planetas.",
      "El método más útil es el <mark>método sísmico</mark>. Los terremotos generan ondas que se propagan por el interior. Las <b>ondas P</b> (primarias) son longitudinales, las más rápidas, y viajan por sólidos y líquidos. Las <b>ondas S</b> (secundarias) son transversales, más lentas, y no se propagan por los líquidos. Su velocidad aumenta con la rigidez de los materiales. Cuando las ondas cambian bruscamente de velocidad a una cierta profundidad, hay una <mark>discontinuidad</mark>, un cambio de material o de estado. Las más importantes son la de <b>Mohorovičić</b> (entre corteza y manto, a 10-70 km), la de <b>Gutenberg</b> (entre manto y núcleo, a 2900 km) y la de <b>Lehmann</b> (entre núcleo externo e interno, a 5150 km).",
    ], svg: sombraSVG, v: ["tie-a", "Capas de la Tierra: núcleo, manto y corteza"] },
    { h: "El modelo geoquímico: corteza, manto y núcleo", p: [
      "Según su <b>composición química</b>, la Tierra tiene tres capas. La <mark>corteza</mark> es la capa externa y más delgada. La <b>corteza continental</b> tiene de 30 a 70 km de espesor (más bajo las cordilleras), es antigua (hasta 4000 millones de años) y está formada por rocas de composición granítica, ricas en silicio y aluminio, poco densas (2,7 g/cm³). La <b>corteza oceánica</b> es más delgada (6-10 km), joven (menos de 180 millones de años) y está formada por basaltos y gabros, más densos (3,0 g/cm³). Esa diferencia de densidad explica por qué los continentes «flotan» más alto que los fondos oceánicos.",
      "El <mark>manto</mark> se extiende desde la discontinuidad de Mohorovičić hasta los 2900 km y supone el 84 % del volumen terrestre. Está formado por rocas de silicatos de hierro y magnesio, como la peridotita, rica en olivino. Aunque es sólido, a lo largo de millones de años se comporta como un material plástico que fluye muy lentamente. El <mark>núcleo</mark>, desde los 2900 km hasta el centro, está formado por hierro con algo de níquel y elementos ligeros. Tiene una parte externa <b>líquida</b> y otra interna <b>sólida</b>, porque allí la enorme presión impide la fusión a pesar de que la temperatura supera los 5000 °C, parecida a la de la superficie del Sol.",
    ], svg: tierra("Capas de la Tierra según su composición: corteza, manto y núcleo", [["Corteza", "0-70 km", "var(--leaf)", 1], ["Manto", "hasta 2900 km", "var(--sun)", 0.92], ["Núcleo externo", "líquido", "var(--red)", 0.55], ["Núcleo interno", "sólido", "#991b1b", 0.19]], "Modelo geoquímico") },
    { h: "El modelo dinámico: litosfera, astenosfera y mesosfera", p: [
      "Según su <b>comportamiento mecánico</b> (si son rígidas o pueden fluir), las capas son otras. La <mark>litosfera</mark> es la capa rígida externa; incluye la corteza y la parte superior del manto, y tiene un espesor de unos 100 km bajo los océanos y hasta 200 km bajo los continentes antiguos. Está fragmentada en grandes piezas, las <b>placas litosféricas</b>, que se mueven unos centímetros al año.",
      "Debajo está la <mark>astenosfera</mark>, una zona del manto superior más caliente y plástica, que se deforma con facilidad y sobre la que se desplazan las placas; aunque su existencia como capa continua se discute, las ondas sísmicas se frenan ligeramente en ella. El resto del manto es el <b>manto sublitosférico</b> o mesosfera, sólido pero capaz de fluir lentamente, por el que circulan corrientes de convección. En su base, la capa D″, de unos 200 km, acumula restos de placas hundidas y es el posible origen de las plumas de material caliente que ascienden. Por último, la <b>endosfera</b> corresponde al núcleo, con la parte externa fluida y la interna sólida. Los movimientos del hierro líquido del núcleo externo generan el <b>campo magnético terrestre</b>.",
    ], svg: L6.tabla("Correspondencia entre el modelo geoquímico y el dinámico", ["Geoquímico", "Dinámico", "Estado"], [["Corteza + manto superior", "Litosfera", "rígida"], ["Manto superior", "Astenosfera", "plástica"], ["Manto", "Mesosfera", "sólido que fluye"], ["Núcleo externo", "Endosfera externa", "líquido"], ["Núcleo interno", "Endosfera interna", "sólido"]]) },
    { h: "La energía interna de la Tierra", p: [
      "La Tierra es un planeta caliente: la temperatura aumenta con la profundidad unos 3 °C cada 100 m en la corteza (<b>gradiente geotérmico</b>), lo que se nota en las minas profundas, y en el centro supera los 5000 °C. Este calor interno procede de dos fuentes. Una es el <b>calor residual</b> de la formación del planeta, cuando los choques de los planetesimales y el hundimiento del hierro hacia el centro liberaron enormes cantidades de energía. La otra es la <b>desintegración de isótopos radiactivos</b> de larga vida, como el uranio-238, el torio-232 y el potasio-40, presentes sobre todo en la corteza y el manto.",
      "El calor tiende a salir hacia la superficie, más fría, y lo hace por <b>conducción</b> en la litosfera y por <b>convección</b> en el manto: el material más caliente y menos denso asciende lentamente y el más frío y denso desciende, formando enormes células que tardan cientos de millones de años en completar un ciclo. Este flujo de calor es el «motor» de la <b>geodinámica interna</b>: mueve las placas, produce los volcanes y los terremotos y levanta las cordilleras. La Tierra también se enfría poco a poco; planetas más pequeños como Marte o la Luna se enfriaron antes y hoy apenas tienen actividad geológica. La energía geotérmica aprovecha este calor interno.",
    ], svg: cadena("El calor interno como motor de la geodinámica", [["Calor residual y radiactividad", "var(--red)"], ["Convección en el manto", "var(--sun)"], ["Placas, volcanes y sismos", "var(--pen)"]], ["sale hacia fuera", "mueve"], "Energía interna de la Tierra") },
    { h: "La deriva continental de Wegener", p: [
      "Alfred Wegener propuso en 1912 la <mark>teoría de la deriva continental</mark>: los continentes estuvieron unidos en un supercontinente, <b>Pangea</b>, que comenzó a fragmentarse hace unos 200 millones de años, y desde entonces se han desplazado hasta su posición actual. Aportó varios tipos de pruebas. <b>Geográficas</b>: el encaje de las costas de Sudamérica y África, aún mejor si se usa el borde de la plataforma continental. <b>Paleontológicas</b>: fósiles de los mismos organismos terrestres, como el reptil <i>Mesosaurus</i> o el helecho <i>Glossopteris</i>, en continentes hoy separados por océanos que no podían cruzar.",
      "<b>Geológicas</b>: rocas y cordilleras de la misma edad y tipo que se continúan a ambos lados del Atlántico, como las de Escandinavia, Escocia y los Apalaches. <b>Paleoclimáticas</b>: huellas de glaciares en zonas hoy tropicales (India, Sudáfrica, Brasil) y depósitos de carbón, formado en climas cálidos, en la Antártida, solo explicables si esos continentes estuvieron en otras latitudes. Sin embargo, Wegener pensaba que los continentes «surcaban» la corteza oceánica empujados por la rotación terrestre y las mareas, fuerzas que los físicos demostraron que eran demasiado débiles. Sin un mecanismo convincente, la teoría quedó relegada durante décadas, hasta que los datos de los océanos le dieron la razón.",
    ], svg: wegenerSVG, v: ["tie-c", "La deriva continental"] },
    { h: "La expansión del fondo oceánico", p: [
      "Tras la Segunda Guerra Mundial, el uso del sonar y los estudios del fondo marino cambiaron la geología. Se descubrió que los océanos tienen una gran cordillera submarina, la <mark>dorsal oceánica</mark>, que recorre el planeta a lo largo de unos 65 000 km, con un valle central (<b>rift</b>) con mucha actividad volcánica. También se encontraron <b>fosas oceánicas</b>, profundísimas depresiones junto a algunas costas y arcos de islas, como la de las Marianas (11 000 m). En 1962, Harry Hess propuso la <b>expansión del fondo oceánico</b>: en las dorsales asciende magma que forma nueva corteza oceánica, que se aleja a ambos lados, y en las fosas la corteza vieja se hunde de nuevo en el manto.",
      "Las pruebas fueron concluyentes. La <b>edad</b> de las rocas del fondo oceánico aumenta simétricamente al alejarse de la dorsal y nunca supera los 180 millones de años, mientras que hay rocas continentales de 4000 millones. El espesor de los <b>sedimentos</b> también crece hacia los continentes. Y el <b>paleomagnetismo</b> mostró bandas de rocas con magnetismo normal e invertido, paralelas y simétricas a ambos lados de la dorsal: al enfriarse, los basaltos registraron la polaridad del campo magnético terrestre en cada época, como una cinta grabadora. Todo ello demostró que el fondo oceánico se mueve y se renueva continuamente.",
    ], svg: limite("Dorsal oceánica: el magma asciende, forma nueva litosfera y las placas se separan", "divergente") },
    { h: "La tectónica de placas", p: [
      "En los años sesenta, la deriva continental y la expansión del fondo oceánico se unieron en la <mark>teoría de la tectónica de placas</mark>, el gran paradigma de la geología. Sus ideas principales son: la litosfera está dividida en unas <b>placas</b> rígidas (siete grandes, como la Pacífica, la Euroasiática, la Africana o la Norteamericana, y muchas menores, como la de Nazca, la Arábiga o la Filipina); las placas pueden incluir corteza oceánica, continental o ambas; se mueven sobre el manto a velocidades de 1 a 15 cm/año, aproximadamente lo que crecen las uñas; y la mayor parte de la actividad geológica (terremotos, volcanes, formación de cordilleras) se concentra en sus <b>bordes</b>.",
      "¿Qué mueve las placas? Hoy se piensa que son la propia litosfera y el manto los que forman un sistema de convección. La fuerza principal es el <b>tirón de la placa</b> (<i>slab pull</i>): la litosfera oceánica vieja, fría y densa se hunde en las zonas de subducción y arrastra al resto de la placa. Contribuye el <b>empuje de la dorsal</b> (<i>ridge push</i>), porque la litosfera recién formada está elevada y tiende a deslizar. Las <b>plumas del manto</b>, columnas de material caliente que ascienden desde zonas profundas, también aportan calor y pueden romper continentes. Las velocidades actuales se miden con precisión mediante <b>GPS</b>: Sudamérica y África se separan unos 3 cm al año.",
    ], svg: L5.barras("Velocidad aproximada de algunas placas (cm/año)", "Velocidad de placas (cm/año)", [["Nazca", 7, "var(--red)", "≈ 7"], ["Pacífica", 9, "var(--pen)", "≈ 9"], ["India", 5, "var(--sun)", "≈ 5"], ["Africana", 2, "var(--leaf)", "≈ 2"], ["Euroasiát.", 1, "var(--inf)", "≈ 1"]]), v: ["tie-b", "Placas tectónicas: qué son las placas litosféricas"] },
    { h: "Bordes divergentes y transformantes", p: [
      "En los <mark>bordes divergentes</mark> o constructivos, dos placas se separan y se crea litosfera nueva. En los océanos son las <b>dorsales</b>, como la Mesoatlántica, que pasa por Islandia: allí la dorsal emerge y se ve el rift en tierra firme, con volcanes y fisuras que se abren unos 2 cm al año. Hay terremotos frecuentes, pero poco profundos y de magnitud moderada, y un vulcanismo de basaltos fluidos. Cuando el proceso empieza en un continente, se forma un <b>rift continental</b>: el continente se abomba, se estira y se fractura en un valle hundido, como el Gran Valle del Rift de África oriental, que con el tiempo puede separar el cuerno de África y convertirse en un nuevo océano, como ya ocurrió con el mar Rojo.",
      "En los <mark>bordes transformantes</mark> o pasivos, dos placas se deslizan lateralmente una junto a otra, sin crearse ni destruirse litosfera. Lo hacen a través de grandes <b>fallas transformantes</b>, que cortan las dorsales en tramos. La más famosa en tierra es la <b>falla de San Andrés</b>, en California, que separa la placa Pacífica de la Norteamericana. Las placas no se deslizan suavemente: se bloquean por el rozamiento, acumulan tensión durante décadas y la liberan de golpe en terremotos destructivos, como el de San Francisco de 1906. En la zona del cabo de San Vicente, la falla Azores-Gibraltar, con un movimiento en parte transformante, originó el terremoto de Lisboa de 1755.",
    ], svg: limite("Falla transformante: dos placas se deslizan lateralmente sin crear ni destruir litosfera", "transformante") },
    { h: "Bordes convergentes: subducción y colisión", p: [
      "En los <mark>bordes convergentes</mark> o destructivos, dos placas se acercan. Si una de ellas es oceánica, la más densa se hunde bajo la otra en una <b>zona de subducción</b>: se forma una <b>fosa</b> oceánica, y a medida que la placa desciende y se calienta, libera agua que funde parcialmente el manto y origina magmas viscosos que ascienden. Si la placa que subduce va bajo otra oceánica, se forma un <b>arco de islas</b> volcánicas, como Japón, las Marianas o las Antillas; si va bajo una continental, se forma una <b>cordillera</b> volcánica en el borde del continente, como los Andes. Las zonas de subducción producen los terremotos más grandes y profundos (hasta 700 km) y volcanes explosivos. El «<b>cinturón de fuego del Pacífico</b>» rodea el océano con estas zonas.",
      "Cuando la subducción consume todo el océano entre dos continentes, estos chocan: es una <b>colisión continental</b>. Como la corteza continental es poco densa, no se hunde; se pliega, se fractura y se apila, levantando grandes <b>cordilleras de colisión</b> con raíces profundas. La India, que se desplazaba hacia el norte, chocó con Asia hace unos 50 millones de años y levantó el <b>Himalaya</b> y el Tíbet, que siguen elevándose unos milímetros al año; por eso en la cima del Everest hay fósiles marinos. Los Alpes y los Pirineos se formaron también por colisiones, de la placa Africana y de la microplaca Ibérica con Europa.",
    ], svg: limite("Zona de subducción: la placa oceánica densa se hunde bajo la continental y forma una fosa y una cordillera volcánica", "subduccion") },
    { h: "Puntos calientes y el ciclo de Wilson", p: [
      "No todos los volcanes están en los bordes de placa. Los <mark>puntos calientes</mark> son zonas de vulcanismo en el interior de las placas, producidas por <b>plumas del manto</b> que ascienden desde gran profundidad. La pluma permanece casi fija mientras la placa se mueve por encima, de modo que se forma una <b>cadena de volcanes</b> cada vez más antiguos en la dirección del movimiento. El ejemplo clásico es <b>Hawái</b>: la isla de Hawái es la más joven y activa, y hacia el noroeste las islas son cada vez más viejas y erosionadas. Islandia combina un punto caliente con una dorsal.",
      "A lo largo de la historia del planeta, los continentes se han unido y separado varias veces. El geólogo canadiense John Tuzo Wilson describió esa secuencia, llamada <mark>ciclo de Wilson</mark>: un supercontinente se rompe por un rift (como hoy África oriental); se abre un océano estrecho (mar Rojo), que se ensancha (Atlántico); con el tiempo, el océano empieza a cerrarse por subducción (Pacífico), hasta que los continentes chocan (Himalaya) y forman un nuevo supercontinente. Cada ciclo dura unos 400-500 millones de años. Antes de Pangea existieron otros, como Rodinia, y los modelos predicen que dentro de unos 250 millones de años se formará un nuevo supercontinente.",
    ], svg: wilsonSVG },
    { h: "La tectónica y el ciclo de las rocas", p: [
      "La tectónica de placas es la gran teoría unificadora de la geología porque relaciona procesos que antes parecían independientes. Explica la distribución de los <b>terremotos</b> y los <b>volcanes</b>, que dibujan en el mapa los bordes de las placas; el origen de las <b>cordilleras</b>; la formación de los <b>océanos</b>; la distribución de muchos yacimientos minerales y de petróleo, y la evolución de los seres vivos, porque la separación de los continentes aisló poblaciones y favoreció la formación de especies distintas (por eso Australia tiene marsupiales únicos). También influye en el clima a largo plazo, al cambiar la posición de los continentes y las corrientes oceánicas.",
      "La tectónica mueve además el <mark>ciclo de las rocas</mark>, la transformación continua de unas rocas en otras. Los <b>magmas</b> que se forman en dorsales, zonas de subducción y puntos calientes originan <b>rocas ígneas</b> (como el granito y el basalto). En la superficie, las rocas se meteorizan y erosionan; sus fragmentos se transportan y se depositan como sedimentos, que se compactan en <b>rocas sedimentarias</b> (arenisca, caliza). Si las rocas quedan enterradas en zonas de colisión o subducción, sufren altas presiones y temperaturas y se transforman en estado sólido en <b>rocas metamórficas</b> (pizarra, mármol, gneis). Si la temperatura aumenta lo suficiente, se funden de nuevo y el ciclo vuelve a empezar.",
    ], svg: L6.ciclo("El ciclo de las rocas: magma, rocas ígneas, sedimentos, rocas sedimentarias y metamórficas", "Rocas", ["Magma", "Ígneas", "Sedimentos", "Sedimentarias", "Metamórficas"], "var(--sun)"), v: ["tie-d", "La formación de las rocas"] },
    { h: "La tectónica de la península ibérica y de Canarias", p: [
      "La península ibérica es el resultado de una larga historia tectónica. Su parte más antigua, el <b>macizo Ibérico</b> en el oeste (Galicia, Extremadura, la Meseta), está formada por granitos, pizarras y cuarcitas de una cordillera, la varisca, que se levantó hace unos 300 millones de años al formarse Pangea y que después fue erosionada hasta quedar casi plana. Al romperse Pangea, Iberia fue una pequeña placa que giró al abrirse el golfo de Vizcaya. Desde hace unos 60 millones de años, el empuje de África contra Europa plegó los sedimentos marinos y levantó los <b>Pirineos</b>, la <b>cordillera Ibérica</b> y las <b>cordilleras Béticas</b>, con Sierra Nevada y el Mulhacén, el pico más alto de la Península.",
      "Hoy la placa Africana sigue empujando a la Euroasiática unos 4-5 mm al año, por lo que el sur y el este peninsular tienen <b>riesgo sísmico</b> moderado: Granada, Murcia, Alicante y Almería han sufrido terremotos destructivos, como el de Lorca de 2011 (magnitud 5,1, nueve muertos). Las <b>islas Canarias</b> son volcánicas: se formaron sobre el fondo oceánico de la placa Africana, probablemente por un <b>punto caliente</b>, y las islas occidentales, más jóvenes (La Palma y El Hierro), son las más activas. En 2021, el volcán de Tajogaite, en La Palma, entró en erupción durante 85 días, destruyó unas 1600 viviendas y mostró que la tectónica no es solo historia: está ocurriendo ahora.",
    ], svg: estratos("Corte de una cordillera plegada por la colisión entre África y Europa, como las Béticas o los Pirineos", [["Calizas", "var(--sun)"], ["Margas", "var(--leaf)"], ["Areniscas", "#b45309"], ["Zócalo varisco", "var(--muted)"]]) },
  ],
  figura: { titulo: "La Tierra y sus placas", items: [["Interior", "ondas P y S", "discontinuidades", "Moho · Gutenberg"], ["Capas", "corteza · manto", "núcleo", "litosfera"], ["Pruebas", "Wegener", "paleomagnetismo", "edad del fondo"], ["Bordes", "divergentes", "convergentes", "transformantes"]] },
  video: ["tie-b", "Placas tectónicas: qué son las placas litosféricas"],
  ejemplos: [
    ["Un sismógrafo registra las ondas P de un terremoto 40 s antes que las S. Si vP = 6 km/s y vS = 3,5 km/s, ¿a qué distancia está el epicentro?", ["tS − tP = d/vS − d/vP = 40 s.", "d · (1/3,5 − 1/6) = 40 → d · 0,119 = 40.", "d = 336 km."], "A unos 336 km."],
    ["Calcula qué fracción del radio terrestre (6370 km) supone el sondeo de Kola (12,3 km).", ["12,3 / 6370 = 0,0019.", "En porcentaje: 0,19 %.", "Comparación: como arañar 1 mm la piel de un melón de 50 cm."], "Menos del 0,2 % del radio."],
    ["La dorsal Mesoatlántica se abre 2,5 cm/año. ¿Cuánto tiempo tardó en abrirse el Atlántico Sur, de unos 5000 km de anchura?", ["5000 km = 5·10⁸ cm.", "t = 5·10⁸ / 2,5.", "t = 2·10⁸ años."], "Unos 200 millones de años: desde la rotura de Pangea."],
    ["Una roca del fondo oceánico está a 600 km de la dorsal y tiene 30 millones de años. ¿A qué velocidad se mueve la placa?", ["v = d / t = 600 km / 3·10⁷ años.", "= 6·10⁷ cm / 3·10⁷ años.", "= 2 cm/año."], "2 cm/año a cada lado (4 cm/año de apertura total)."],
    ["Indica el tipo de borde de placa en: Islandia, los Andes, el Himalaya, la falla de San Andrés.", ["Islandia: dorsal emergida → divergente.", "Andes: subducción oceánica bajo continental → convergente.", "Himalaya: colisión continental → convergente.", "San Andrés: desplazamiento lateral → transformante."], "Divergente, convergente (subducción), convergente (colisión), transformante."],
    ["La India viajó unos 4000 km hacia el norte en unos 70 millones de años hasta chocar con Asia. ¿Cuál fue su velocidad media?", ["4000 km = 4·10⁸ cm.", "v = 4·10⁸ / 7·10⁷.", "v ≈ 5,7 cm/año."], "Unos 6 cm/año, una placa muy rápida."],
  ],
  errores: [
    "Pensar que el manto es líquido: es sólido, aunque fluye muy lentamente a escala geológica.",
    "Confundir corteza con litosfera: la litosfera incluye la corteza y la parte superior del manto.",
    "Creer que las placas son lo mismo que los continentes: muchas incluyen continente y océano, y otras solo océano.",
    "Pensar que los continentes «navegan» sobre el océano como decía Wegener: se mueve toda la litosfera.",
    "Creer que todos los volcanes están en bordes de placa: los puntos calientes, como Hawái, están en el interior.",
    "Pensar que el núcleo interno es sólido porque está frío: está a más de 5000 °C, pero la presión impide que se funda.",
  ],
  ejercicios: {
    b: [
      ["¿Por qué no se puede estudiar directamente el interior de la Tierra? Cita dos métodos directos y dos indirectos.", "Porque los sondeos solo llegan a unos 12 km. Directos: sondeos, minas, rocas volcánicas. Indirectos: ondas sísmicas, densidad, meteoritos, magnetismo, gravimetría."],
      ["Diferencia las ondas P y S.", "P: longitudinales, más rápidas, atraviesan sólidos y líquidos. S: transversales, más lentas, solo atraviesan sólidos."],
      ["¿Qué es una discontinuidad sísmica? Nombra las tres principales y su profundidad.", "Un cambio brusco en la velocidad de las ondas por un cambio de material o estado. Mohorovičić (10-70 km), Gutenberg (2900 km), Lehmann (5150 km)."],
      ["Compara la corteza continental y la oceánica (espesor, edad, rocas, densidad).", "Continental: 30-70 km, hasta 4000 Ma, granítica, 2,7 g/cm³. Oceánica: 6-10 km, menos de 180 Ma, basáltica, 3,0 g/cm³."],
      ["¿De qué está formado el núcleo y en qué estado está cada parte?", "De hierro con níquel. El externo es líquido y el interno sólido."],
      ["Define litosfera y astenosfera.", "Litosfera: capa rígida externa (corteza + manto superior), dividida en placas. Astenosfera: zona plástica del manto superior sobre la que se mueven las placas."],
      ["¿De dónde procede el calor interno de la Tierra?", "Del calor residual de la formación del planeta y de la desintegración de isótopos radiactivos (uranio, torio, potasio)."],
      ["Cita las cuatro pruebas de Wegener con un ejemplo de cada una.", "Geográficas (encaje de Sudamérica y África), paleontológicas (Mesosaurus, Glossopteris), geológicas (cordilleras que se continúan a ambos lados del Atlántico), paleoclimáticas (huellas glaciares en la India y África)."],
      ["¿Por qué se rechazó inicialmente la teoría de Wegener?", "Porque no explicaba de forma convincente qué fuerza movía los continentes; las fuerzas que propuso eran demasiado débiles."],
      ["¿Qué es una dorsal oceánica y qué ocurre en ella?", "Una cordillera submarina con un valle central donde asciende magma y se forma nueva litosfera oceánica que se separa a ambos lados."],
      ["Nombra los tres tipos de bordes de placa e indica qué ocurre en cada uno con la litosfera.", "Divergentes: se crea. Convergentes: se destruye (subducción) o se acumula (colisión). Transformantes: ni se crea ni se destruye."],
      ["¿Qué es un punto caliente? Pon un ejemplo.", "Una zona de vulcanismo en el interior de una placa causada por una pluma del manto. Ejemplo: Hawái (o probablemente Canarias)."],
    ],
    m: [
      ["Explica cómo se deduce que el núcleo externo es líquido.", "Las ondas S no se propagan por líquidos y no atraviesan el núcleo externo: se forma una zona de sombra de ondas S. Además, las ondas P se frenan bruscamente al entrar en él."],
      ["La densidad media de la Tierra es 5,5 g/cm³ y la de las rocas superficiales 2,7 g/cm³. ¿Qué se deduce?", "Que el interior debe ser mucho más denso que la superficie, lo que concuerda con un núcleo metálico de hierro (unos 10-13 g/cm³)."],
      ["Relaciona el modelo geoquímico con el dinámico: ¿qué capas del primero forman la litosfera?", "La litosfera está formada por la corteza (continental u oceánica) y la parte más superficial del manto."],
      ["Explica las tres pruebas de la expansión del fondo oceánico.", "La edad de las rocas aumenta simétricamente al alejarse de la dorsal; el espesor de los sedimentos aumenta hacia los continentes; las bandas de paleomagnetismo normal e invertido son simétricas a ambos lados de la dorsal."],
      ["¿Por qué no hay rocas oceánicas de más de 180 millones de años y sí continentales de 4000 millones?", "Porque la litosfera oceánica se destruye en las zonas de subducción y se renueva en las dorsales; la continental, menos densa, no se hunde y se conserva."],
      ["Explica por qué la litosfera oceánica subduce bajo la continental y no al revés.", "Porque la oceánica es más densa (basaltos, 3,0 g/cm³) que la continental (granítica, 2,7 g/cm³), sobre todo cuando es vieja y fría."],
      ["¿Qué fuerzas mueven las placas según los modelos actuales?", "Principalmente el tirón de la placa que subduce (slab pull), el empuje de la dorsal (ridge push) y la convección del manto, con la contribución de las plumas."],
      ["Describe qué ocurre en una zona de subducción oceánica-continental y pon un ejemplo.", "La placa oceánica se hunde bajo la continental, se forma una fosa, terremotos de foco superficial a profundo y una cordillera con volcanes explosivos. Ejemplo: los Andes (placa de Nazca bajo la Sudamericana)."],
      ["¿Por qué hay fósiles marinos en la cima del Everest?", "Las rocas se formaron como sedimentos en el fondo de un antiguo océano (Tetis) que separaba la India de Asia; al chocar ambos continentes, los sedimentos se plegaron y elevaron hasta formar el Himalaya."],
      ["Explica cómo se forma la cadena de islas de Hawái.", "Una pluma del manto casi fija forma volcanes en la placa Pacífica, que se mueve hacia el noroeste; cada volcán se aleja del punto caliente, se apaga y se erosiona, mientras se forma otro nuevo. Las islas son más antiguas hacia el noroeste."],
      ["Describe las fases del ciclo de Wilson con un ejemplo actual de cada una.", "Rift continental (África oriental), océano estrecho (mar Rojo), océano amplio (Atlántico), cierre por subducción (Pacífico), colisión continental (Himalaya)."],
      ["Explica por qué el sureste de España tiene riesgo sísmico.", "Porque la placa Africana empuja a la Euroasiática unos 4-5 mm/año; la deformación se concentra en las Béticas, donde hay fallas activas que acumulan y liberan tensión en terremotos, como el de Lorca de 2011."],
    ],
    a: [
      ["Con vP = 8 km/s y vS = 4,5 km/s, un sismógrafo registra 60 s de diferencia entre ambas ondas. Calcula la distancia al foco. ¿Cuántas estaciones hacen falta para localizar el epicentro y por qué?", "d·(1/4,5 − 1/8) = 60 → d·0,0972 = 60 → d ≈ 617 km. Hacen falta al menos tres estaciones: cada una da un círculo de posibles epicentros y los tres círculos se cortan en un punto (triangulación)."],
      ["En una dorsal, la banda de polaridad normal más reciente mide 39 km de ancho a cada lado y representa los últimos 780 000 años. Calcula la velocidad de expansión.", "v = 39 km / 780 000 años = 3,9·10⁶ cm / 7,8·10⁵ años = 5 cm/año a cada lado (10 cm/año en total)."],
      ["Calcula qué porcentaje del volumen terrestre ocupa el núcleo (radio 3480 km) y la corteza (espesor medio 20 km). Radio terrestre: 6370 km.", "Núcleo: (3480/6370)³ = 0,163 → 16,3 %. Corteza: 1 − (6350/6370)³ = 1 − 0,9906 = 0,94 %, menos del 1 %."],
      ["Argumenta por qué la tectónica de placas es una teoría y no una hipótesis, citando al menos cuatro tipos de pruebas independientes.", "Explica un gran conjunto de fenómenos y ha superado múltiples pruebas independientes: edad y paleomagnetismo del fondo oceánico, distribución de terremotos y volcanes en los bordes, medidas directas del movimiento con GPS, tomografía sísmica de placas hundidas, fósiles y rocas que encajan entre continentes, puntos calientes con edades progresivas."],
      ["Dibuja (o describe) un corte desde la dorsal Mesoatlántica hasta los Andes indicando las placas, los bordes, la edad de las rocas y los procesos.", "Dorsal (borde divergente, rocas de edad 0, vulcanismo basáltico) → placa Sudamericana: fondo atlántico cada vez más antiguo → margen pasivo atlántico de Brasil (sin actividad) → continente → Andes (borde convergente con la placa de Nazca que subduce desde el oeste; fosa de Perú-Chile, volcanes y terremotos) → placa de Nazca → dorsal del Pacífico oriental."],
      ["La placa de Nazca subduce a 7 cm/año con un ángulo de 30°. ¿Cuántos años tarda un punto en llegar a 100 km de profundidad?", "Distancia recorrida a lo largo de la placa: 100 / sen 30° = 200 km = 2·10⁷ cm. t = 2·10⁷ / 7 ≈ 2,9 millones de años."],
      ["Explica la relación entre la tectónica de placas y la evolución de los seres vivos con dos ejemplos.", "La separación de continentes aisló poblaciones, que evolucionaron por separado: los marsupiales de Australia o los lémures de Madagascar. La unión de continentes permitió migraciones, como el gran intercambio americano cuando se formó el istmo de Panamá. También cambian climas y corrientes oceánicas."],
      ["Busca la diferencia entre el vulcanismo de Islandia (dorsal + punto caliente) y el de los Andes (subducción): tipo de magma, explosividad y riesgos.", "Islandia: magma basáltico, pobre en sílice, fluido y caliente; erupciones efusivas de coladas y fisuras (aunque con hielo pueden ser explosivas y emitir ceniza). Andes: magma andesítico, rico en sílice y gases, viscoso; erupciones explosivas con nubes de ceniza, flujos piroclásticos y lahares. El riesgo humano suele ser mayor en los Andes por su explosividad y la población cercana."],
    ],
  },
  quiz: [
    ["El sondeo más profundo ha alcanzado unos…", ["120 km", "12 km", "1200 km", "2900 km"], 1, "Kola, 12,3 km."],
    ["Las ondas que no atraviesan los líquidos son las…", ["P", "S", "superficiales", "de radio"], 1, "Ondas transversales."],
    ["La discontinuidad de Mohorovičić separa…", ["manto y núcleo", "corteza y manto", "núcleo externo e interno", "litosfera y atmósfera"], 1, "A 10-70 km."],
    ["La corteza oceánica es…", ["más gruesa y antigua", "más delgada y joven", "granítica", "menos densa"], 1, "Basáltica, &lt; 180 Ma."],
    ["El núcleo externo es…", ["sólido", "líquido", "gaseoso", "plasma"], 1, "Por eso hay zona de sombra de las S."],
    ["La litosfera está formada por…", ["solo la corteza", "corteza y manto superior", "el manto", "el núcleo"], 1, "Capa rígida."],
    ["El campo magnético terrestre se genera en…", ["la corteza", "el manto", "el núcleo externo", "la astenosfera"], 2, "Hierro líquido en movimiento."],
    ["El supercontinente de Wegener se llamaba…", ["Rodinia", "Pangea", "Gondwana", "Laurasia"], 1, "«Toda la Tierra»."],
    ["Una prueba paleontológica de Wegener fue…", ["el encaje de las costas", "Mesosaurus", "las tillitas glaciares", "el paleomagnetismo"], 1, "Fósiles en continentes separados."],
    ["En las dorsales oceánicas…", ["se destruye litosfera", "se crea litosfera", "chocan continentes", "no hay volcanes"], 1, "Borde divergente."],
    ["La edad de las rocas del fondo oceánico…", ["es igual en todas partes", "aumenta al alejarse de la dorsal", "disminuye al alejarse", "supera 4000 Ma"], 1, "Simétrica a ambos lados."],
    ["Las bandas magnéticas simétricas a la dorsal demuestran…", ["que el campo no cambia", "la expansión del fondo oceánico", "la existencia del núcleo", "la erosión"], 1, "Registran las inversiones."],
    ["La principal fuerza que mueve las placas es…", ["la rotación terrestre", "el tirón de la placa que subduce", "las mareas", "el viento"], 1, "Slab pull."],
    ["La falla de San Andrés es un borde…", ["divergente", "convergente", "transformante", "de punto caliente"], 2, "Deslizamiento lateral."],
    ["Los Andes se formaron por…", ["colisión continental", "subducción", "un punto caliente", "una dorsal"], 1, "Nazca bajo Sudamérica."],
    ["El Himalaya se formó por…", ["subducción oceánica", "colisión de la India con Asia", "un rift", "un punto caliente"], 1, "Hace unos 50 Ma."],
    ["Hawái es un ejemplo de…", ["dorsal", "punto caliente", "subducción", "falla transformante"], 1, "Volcanes en el interior de la placa."],
    ["El Gran Valle del Rift africano es…", ["una zona de colisión", "un borde divergente continental", "una fosa", "una falla transformante"], 1, "África se está rompiendo."],
    ["El granito es una roca…", ["sedimentaria", "metamórfica", "ígnea", "orgánica"], 2, "Magma enfriado en profundidad."],
    ["Las islas Canarias son de origen…", ["sedimentario", "volcánico", "glaciar", "coralino"], 1, "Probablemente un punto caliente."],
  ],
  examen: [
    ["Con vP = 6 km/s, una onda P recorre 300 km en…", ["50 s", "1800 s", "0,02 s", "5 s"], 0, "300/6."],
    ["El manto se comporta a largo plazo como…", ["un líquido", "un sólido plástico que fluye", "un gas", "un sólido rígido"], 1, "Convección lenta."],
    ["Si una placa se mueve 5 cm/año, en 1 millón de años recorre…", ["5 km", "50 km", "500 m", "5000 km"], 1, "5·10⁶ cm."],
    ["Los terremotos más profundos ocurren en…", ["dorsales", "zonas de subducción", "puntos calientes", "fallas transformantes"], 1, "Hasta 700 km."],
    ["La fase actual del mar Rojo en el ciclo de Wilson es…", ["colisión", "océano estrecho", "cierre por subducción", "supercontinente"], 1, "Océano joven."],
    ["El macizo Ibérico es…", ["la parte más joven de la Península", "la parte más antigua, del ciclo varisco", "un volcán", "una dorsal"], 1, "Unos 300 Ma."],
    ["La erupción del Tajogaite (2021) ocurrió en…", ["Tenerife", "La Palma", "Lanzarote", "El Hierro"], 1, "Duró 85 días."],
    ["Una roca metamórfica se forma por…", ["enfriamiento de magma", "presión y temperatura en estado sólido", "compactación de sedimentos", "evaporación"], 1, "Pizarra, mármol."],
  ],
  feynman: ["Cómo sabemos que el núcleo externo es líquido", "Diferencia entre corteza y litosfera", "Por qué Wegener tenía razón pero no le creyeron", "Qué demuestran las bandas magnéticas del fondo oceánico", "Por qué hay fósiles marinos en el Everest", "Por qué Hawái es una cadena de islas"],
  mapa: ["TECTÓNICA", [["Interior", "ondas sísmicas, capas"], ["Historia", "Wegener, expansión del fondo"], ["Placas", "divergente, convergente, transf."], ["Consecuencias", "volcanes, sismos, rocas"]]],
  tarjetas: [
    ["Ondas P y S", "P: sólidos y líquidos; S: solo sólidos."],
    ["Discontinuidades", "Moho (corteza-manto), Gutenberg (manto-núcleo)."],
    ["Corteza oceánica", "Delgada, basáltica, joven (&lt; 180 Ma)."],
    ["Núcleo", "Hierro y níquel; externo líquido, interno sólido."],
    ["Litosfera", "Capa rígida: corteza + manto superior."],
    ["Pangea", "Supercontinente que se rompió hace 200 Ma."],
    ["Expansión del fondo", "Se crea en dorsales y se destruye en fosas."],
    ["Paleomagnetismo", "Bandas simétricas de polaridad a ambos lados de la dorsal."],
    ["Borde divergente", "Dorsales y rifts: se crea litosfera."],
    ["Subducción", "La placa densa se hunde: fosa, volcanes, sismos."],
    ["Punto caliente", "Pluma del manto bajo una placa: Hawái."],
    ["Ciclo de Wilson", "Rift → océano → subducción → colisión."],
  ],
  glosario: [
    ["Geosfera", "Parte sólida de la Tierra, desde la corteza hasta el núcleo."],
    ["Onda sísmica", "Vibración que se propaga por el interior terrestre tras un terremoto."],
    ["Discontinuidad", "Superficie donde cambia bruscamente la velocidad de las ondas sísmicas."],
    ["Corteza", "Capa más externa y delgada de la Tierra."],
    ["Manto", "Capa intermedia de silicatos entre la corteza y el núcleo."],
    ["Núcleo", "Capa central de hierro y níquel."],
    ["Litosfera", "Capa rígida externa dividida en placas."],
    ["Astenosfera", "Zona plástica del manto superior bajo la litosfera."],
    ["Gradiente geotérmico", "Aumento de la temperatura con la profundidad."],
    ["Deriva continental", "Teoría de Wegener sobre el desplazamiento de los continentes."],
    ["Dorsal", "Cordillera submarina donde se forma litosfera oceánica."],
    ["Fosa oceánica", "Depresión profunda donde una placa se hunde bajo otra."],
    ["Paleomagnetismo", "Magnetismo fósil registrado en las rocas."],
    ["Pluma del manto", "Columna de material caliente que asciende desde el manto profundo."],
    ["Rift", "Valle hundido donde una placa se estira y fractura."],
    ["Ciclo de las rocas", "Transformación continua entre rocas ígneas, sedimentarias y metamórficas."],
  ],
  situacion: {
    titulo: "El puzle de Pangea",
    reto: "Un museo de ciencias quiere una exposición interactiva sobre la tectónica de placas. Vuestro equipo reconstruirá Pangea con pruebas reales y explicará con datos cómo se mueve hoy la península ibérica.",
    pasos: [
      "Recortad los continentes de un mapa por el borde de la plataforma continental y reconstruid Pangea.",
      "Marcad sobre la reconstrucción las pruebas de Wegener: fósiles, cordilleras y huellas glaciares.",
      "Usad un mapa de terremotos y volcanes recientes (IGN, USGS) para dibujar los bordes de placa.",
      "Calculad con datos de GPS la velocidad de separación entre Europa y Norteamérica y entre África y Europa.",
      "Preparad paneles explicativos sobre la tectónica de la Península, las Béticas y Canarias.",
    ],
    producto: "Una exposición con el puzle de Pangea, un mapa de bordes de placa y paneles sobre la geología de España.",
    evaluacion: ["La reconstrucción y las pruebas están bien localizadas.", "Los bordes de placa se deducen correctamente de los datos.", "Los cálculos de velocidad son correctos.", "Los paneles explican con rigor y claridad la tectónica peninsular."],
  },
  familias: [
    "Mirad juntos el mapa de terremotos en tiempo real del Instituto Geográfico Nacional.",
    "Buscad en una excursión rocas plegadas o estratos inclinados y fotografiadlas.",
    "Recortad los continentes de un mapa viejo e intentad unirlos como un puzle.",
    "Comentad las noticias de la erupción de La Palma y cómo se vigilan los volcanes.",
  ],
  saberes: "bloque «C. El sistema Tierra»: métodos de estudio del interior terrestre y ondas sísmicas; estructura de la geosfera según los modelos geoquímico y dinámico; la energía interna de la Tierra; de la deriva continental a la tectónica de placas, pruebas y tipos de bordes; vulcanismo, sismicidad, orogenia, puntos calientes y ciclo de Wilson; el ciclo de las rocas; la tectónica de la península ibérica y de Canarias.",
  ideas: [
    "Simulación de la convección del manto con agua coloreada calentada en un vaso de precipitados.",
    "Modelización de la expansión del fondo oceánico con tiras de papel con bandas de colores.",
    "Localización del epicentro de un terremoto real con datos de tres estaciones del IGN.",
    "Salida de campo para reconocer rocas ígneas, sedimentarias y metamórficas del entorno.",
  ],
  fuentes: [
    { t: "Instituto Geográfico Nacional: terremotos y volcanes", url: "https://www.ign.es/web/ign/portal/sis-area-sismicidad" },
    { t: "IGME-CSIC: geología de España", url: "https://www.igme.es/" },
    { t: "USGS: tectónica de placas", url: "https://www.usgs.gov/programs/earthquake-hazards" },
  ],
});
