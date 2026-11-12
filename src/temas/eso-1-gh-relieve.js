// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Corte de la Tierra: corteza, manto y núcleo.
const capas = `<svg viewBox="0 0 260 180" role="img" aria-label="Capas internas de la Tierra: corteza, manto, núcleo externo y núcleo interno">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <circle cx="92" cy="90" r="76" fill="var(--leaf)"/>
  <circle cx="92" cy="90" r="70" fill="var(--sun)"/>
  <circle cx="92" cy="90" r="38" fill="var(--red)"/>
  <circle cx="92" cy="90" r="18" fill="var(--ink)"/>
  <g ${F} font-size="11.5" font-weight="700" fill="var(--ink)">
    <path d="M150 42 L 178 30" stroke="var(--ink)" stroke-width="1.5"/><text x="182" y="34">corteza</text>
    <path d="M150 74 L 178 70" stroke="var(--ink)" stroke-width="1.5"/><text x="182" y="74">manto</text>
    <path d="M118 100 L 178 110" stroke="var(--ink)" stroke-width="1.5"/><text x="182" y="108">núcleo</text><text x="182" y="121" font-weight="400" font-size="10.5">externo</text>
    <path d="M100 92 L 178 146" stroke="var(--ink)" stroke-width="1.5"/><text x="182" y="146">núcleo</text><text x="182" y="159" font-weight="400" font-size="10.5">interno</text>
  </g>
</svg>`;

// Perfil de costa con sus formas.
const costa = `<svg viewBox="0 0 260 180" role="img" aria-label="Formas del relieve costero: cabo, golfo, península, isla y playa">
  <rect width="260" height="180" rx="14" fill="var(--pen)" opacity=".22"/>
  <path d="M0 0 H260 V60 C 230 60 220 95 200 100 C 180 104 172 70 150 70 C 130 70 132 120 110 130 C 92 138 70 110 50 112 C 30 114 20 70 0 70 Z" fill="var(--leaf)"/>
  <ellipse cx="190" cy="148" rx="26" ry="12" fill="var(--leaf)"/>
  <path d="M42 108 C 52 104 62 110 70 116" stroke="var(--sun)" stroke-width="6" fill="none" stroke-linecap="round"/>
  <g ${F} font-size="11.5" font-weight="700" fill="var(--ink)" text-anchor="middle">
    <text x="200" y="124">cabo</text><text x="150" y="98">golfo</text><text x="112" y="152">península</text><text x="190" y="152">isla</text><text x="46" y="134">playa</text><text x="130" y="30" fill="#fff">continente</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "El relieve terrestre",
  objetivos: ["Describir la estructura interna de la Tierra", "Explicar cómo actúan las fuerzas internas y externas que forman el relieve", "Reconocer las principales formas del relieve continental, costero y oceánico", "Situar los grandes conjuntos del relieve de los continentes"],
  claves: ["corteza", "manto", "núcleo", "placa tectónica", "volcán", "terremoto", "erosión", "montaña", "llanura", "meseta", "cabo", "golfo", "plataforma continental"],
  pregunta: [
    "En lo alto del Himalaya, a más de 5000 metros, los escaladores encuentran fósiles de animales marinos. ¿Cómo llegaron conchas del mar a la montaña más alta del mundo?",
    "Porque esas rocas se formaron en el <mark>fondo de un mar</mark> hace millones de años. La placa de la India avanzó lentamente hacia el norte y chocó con la de Asia: el choque plegó y levantó los sedimentos marinos hasta formar el Himalaya. Las <b>fuerzas internas</b> de la Tierra mueven los continentes unos centímetros al año, pero con el tiempo suficiente pueden levantar montañas enteras.",
  ],
  bloques: [
    ["El interior de la Tierra", `<p>La Tierra está formada por capas, como una cebolla. La más externa es la <mark>corteza</mark>, una capa rocosa y fina: mide entre 5 km bajo los océanos y unos 70 km bajo las grandes cordilleras. Sobre ella vivimos.</p><p>Debajo está el <b>manto</b>, la capa más gruesa (casi 2900 km). Está formado por rocas muy calientes que, aunque parecen sólidas, se mueven muy despacio, como una pasta. En el centro está el <b>núcleo</b>, de hierro y níquel, con temperaturas de más de 5000 °C: la parte exterior es líquida y la interior, sólida. El calor del interior es el motor de muchos cambios del relieve.</p>`,
      capas],
    ["Las placas tectónicas", `<p>La corteza y la parte más alta del manto forman la <b>litosfera</b>, que no es una pieza única: está rota en grandes fragmentos llamados <mark>placas tectónicas</mark>. Hay unas quince grandes, como la Euroasiática, la Africana, la Pacífica o la Sudamericana.</p><p>Las placas flotan sobre el manto y se mueven unos pocos centímetros al año, más o menos lo que crecen tus uñas. En sus bordes ocurren los fenómenos más intensos: cuando dos placas <b>chocan</b>, se forman cordilleras; cuando se <b>separan</b>, sale magma y se forma nueva corteza, como en el centro del océano Atlántico. Hace unos 250 millones de años todos los continentes estaban unidos en uno solo, <b>Pangea</b>.</p>`,
      H.filas("Qué pasa en los bordes de las placas", [["Chocan", "se levantan cordilleras", "var(--red)"], ["Se separan", "sale magma: nueva corteza", "var(--sun)"], ["Rozan", "terremotos frecuentes", "var(--pen)"]]), V.gh3b],
    ["Volcanes y terremotos", `<p>Las <mark>fuerzas internas</mark> de la Tierra crean relieve de forma brusca. Un <b>volcán</b> es una abertura por la que sale <b>magma</b> (roca fundida) del interior; cuando llega a la superficie se llama <b>lava</b>. Al enfriarse, la lava y las cenizas forman montañas con forma de cono. En 2021 el volcán de La Palma, en Canarias, creó tierra nueva que se adentró en el mar.</p><p>Los <b>terremotos</b> o seísmos son movimientos bruscos de la corteza causados por el roce o el choque de las placas. El punto del interior donde se originan se llama <b>hipocentro</b>, y el de la superficie situado justo encima, <b>epicentro</b>. Si ocurren bajo el mar pueden provocar olas gigantes, los <b>tsunamis</b>.</p>`,
      H.dos("Fuerzas internas bruscas", ["Volcán", ["sale magma", "lava y cenizas", "forma conos", "La Palma, 2021"], "var(--red)"], ["Terremoto", ["sacudida brusca", "hipocentro", "epicentro", "puede dar tsunami"], "var(--ink)"])],
    ["Las fuerzas externas: la erosión", `<p>Mientras las fuerzas internas levantan el relieve, las <mark>fuerzas externas</mark> lo desgastan poco a poco. Son los <b>agentes</b> que actúan desde fuera: el agua de los ríos y la lluvia, el hielo de los glaciares, el viento, el mar y también los seres vivos y las personas.</p><p>Actúan en tres pasos. Primero, la <b>erosión</b> arranca trozos de roca. Después, el <b>transporte</b> los lleva a otros lugares. Por último, la <b>sedimentación</b> los deposita en zonas bajas, donde se acumulan. Así, los ríos excavan valles y forman deltas, el viento talla rocas en el desierto y el mar crea acantilados. Es un trabajo muy lento, pero constante.</p>`,
      H.flujo("Cómo trabajan las fuerzas externas", ["erosión|arranca", "transporte|lleva", "sedimen-|tación"], "var(--leaf)")],
    ["El relieve de los continentes", `<p>En la superficie de los continentes hay formas elevadas y formas llanas. Las <mark>montañas</mark> son elevaciones del terreno; cuando se agrupan en línea forman una <b>cordillera</b> o <b>sierra</b>. La parte alta es la cima y las laderas son sus lados.</p><p>Entre las montañas hay <b>valles</b>, zonas hundidas por donde suelen correr ríos. Las <b>llanuras</b> son extensiones planas y bajas, muchas veces junto a ríos o costas. Las <b>mesetas</b> también son llanas pero están elevadas sobre el nivel del mar, como la Meseta Central de España. Las <b>depresiones</b> son zonas hundidas rodeadas de terrenos más altos, como la del Guadalquivir.</p>`,
      tabla(["Forma", "Cómo es", "Ejemplo"], [["Cordillera", "conjunto de montañas en línea", "los Pirineos"], ["Valle", "zona hundida entre montañas", "el valle de Arán"], ["Llanura", "terreno plano y bajo", "la llanura del Po"], ["Meseta", "terreno plano y elevado", "la Meseta Central"], ["Depresión", "zona hundida entre relieves", "depresión del Guadalquivir"]])],
    ["El relieve de las costas", `<p>La <mark>costa</mark> es el lugar donde la tierra se encuentra con el mar. Tiene formas propias. Un <b>cabo</b> es un saliente de tierra que se adentra en el mar, como el cabo de Finisterre. Un <b>golfo</b> es lo contrario: una entrada grande del mar en la tierra; si es pequeña se llama <b>bahía</b> o cala.</p><p>Una <b>península</b> es una porción de tierra rodeada de agua por todas partes menos por una, el <b>istmo</b>, que la une al continente. Una <b>isla</b> está rodeada de agua por completo; varias islas juntas forman un <b>archipiélago</b>, como Canarias. Las costas pueden ser altas, con <b>acantilados</b>, o bajas, con <b>playas</b> de arena.</p>`,
      costa],
    ["El relieve del fondo del mar", `<p>Bajo los océanos también hay relieve, y es más grande que el de los continentes. Junto a la costa está la <mark>plataforma continental</mark>, una zona poco profunda (hasta unos 200 m) donde hay mucha pesca. Después viene el <b>talud continental</b>, una pendiente fuerte que baja hacia las profundidades.</p><p>Más allá se extiende la <b>llanura abisal</b>, entre 3000 y 6000 m de profundidad. En medio de los océanos hay grandes cordilleras submarinas, las <b>dorsales</b>, donde las placas se separan. Y en algunos lugares hay <b>fosas</b> marinas muy profundas: la de las Marianas, en el Pacífico, supera los 11 000 m, más que la altura del Everest.</p>`,
      H.flujo("Del litoral al fondo oceánico", ["plataforma|0-200 m", "talud", "llanura|abisal", "dorsal", "fosa|11 000 m"], "var(--pen)")],
    ["Los grandes relieves del mundo", `<p>Cada continente tiene grandes conjuntos de relieve. En <b>Asia</b> está el <mark>Himalaya</mark>, con el Everest (8849 m), la montaña más alta del planeta. En <b>América</b> destacan los <b>Andes</b>, la cordillera más larga (unos 7000 km), y las Montañas Rocosas. En <b>África</b> está el Kilimanjaro, un volcán, y el gran desierto del Sáhara.</p><p>En <b>Europa</b> sobresalen los <b>Alpes</b>, con el Mont Blanc, los Pirineos y los Cárpatos, además de la gran llanura europea. En <b>Oceanía</b> predominan las mesetas y desiertos de Australia, y la <b>Antártida</b> está cubierta por una capa de hielo de hasta 4 km de espesor. En España, el pico más alto es el <b>Teide</b> (3715 m), un volcán de Tenerife.</p>`,
      H.barras("Montañas más altas de Asia, América, África y Europa, y el Teide (metros)", [["Everest", 8849, "var(--red)", "8849"], ["Aconcagua", 6961, "var(--sun)", "6961"], ["Kilimanjaro", 5895, "var(--leaf)", "5895"], ["Elbrús", 5642, "var(--pen)", "5642"], ["Teide", 3715, "var(--muted)", "3715"]], 8849)],
  ],
  ejemplos: [
    ["¿Por qué en Japón hay tantos terremotos y volcanes?", ["Japón está en el borde entre varias placas tectónicas.", "Las placas chocan y se rozan allí con frecuencia.", "En los bordes de las placas se concentran los fenómenos internos."], "Porque está sobre el límite de varias placas tectónicas."],
    ["Un río arrastra piedras desde la montaña y las deja en su desembocadura. ¿Qué procesos ha realizado?", ["Arrancar las piedras: erosión.", "Llevarlas río abajo: transporte.", "Dejarlas en la desembocadura: sedimentación."], "Erosión, transporte y sedimentación."],
    ["La Meseta Central y la llanura del Guadalquivir son planas. ¿Qué las diferencia?", ["Las dos son terrenos llanos.", "La Meseta está elevada (unos 600-800 m).", "La depresión del Guadalquivir está baja, cerca del nivel del mar."], "La altitud: la meseta es llana y alta; la llanura, llana y baja."],
  ],
  errores: [
    "Pensar que el manto es líquido como el agua: es roca muy caliente que fluye lentísimamente.",
    "Confundir hipocentro (en el interior) y epicentro (en la superficie).",
    "Llamar meseta a cualquier llanura: la meseta está elevada.",
    "Confundir cabo (tierra que entra en el mar) con golfo (mar que entra en la tierra).",
    "Creer que el relieve no cambia: cambia siempre, aunque muy despacio.",
  ],
  ejercicios: [
    ["Nombra las tres capas de la Tierra de fuera a dentro.", "Corteza, manto y núcleo."],
    ["¿Qué son las placas tectónicas?", "Los grandes fragmentos en que está dividida la litosfera, que se mueven lentamente sobre el manto."],
    ["¿Qué ocurre cuando chocan dos placas?", "Se pliegan y elevan los materiales y se forman cordilleras; también hay terremotos."],
    ["Diferencia entre magma y lava.", "El magma es roca fundida en el interior; cuando sale a la superficie se llama lava."],
    ["¿Qué agentes externos modelan el relieve?", "El agua (ríos y lluvia), el hielo, el viento, el mar y los seres vivos, incluidas las personas."],
    ["Define valle y depresión.", "Valle: zona hundida entre montañas, a menudo con un río. Depresión: zona hundida rodeada de terrenos más altos."],
    ["¿Qué diferencia hay entre una península y una isla?", "La isla está rodeada de agua por completo; la península, por todas partes menos por el istmo."],
    ["¿Qué es la plataforma continental y por qué es importante?", "La zona del fondo marino poco profunda junto a la costa; en ella hay mucha pesca."],
    ["¿Cuál es la montaña más alta del mundo y dónde está?", "El Everest (8849 m), en el Himalaya, Asia."],
    ["¿Cuál es el pico más alto de España y de qué tipo es?", "El Teide (3715 m), en Tenerife; es un volcán."],
  ],
  figura: ["El relieve terrestre", H.figCols("Cómo se forma el relieve", [["Interior", ["corteza", "manto", "núcleo", "placas"], "var(--red)"], ["Fuerzas internas", ["levantan", "volcanes", "terremotos", "cordilleras"], "var(--sun)"], ["Fuerzas externas", ["desgastan", "erosión", "transporte", "sedimentación"], "var(--leaf)"], ["Formas", ["montaña, valle", "llanura, meseta", "cabo, golfo", "plataforma, fosa"], "var(--pen)"]])],
  video: V.gh3v,
  quiz: [
    ["La capa más externa de la Tierra es…", ["la corteza", "el manto", "el núcleo"], "Sobre ella vivimos."],
    ["El núcleo está formado sobre todo por…", ["hierro y níquel", "agua", "arena"], "A más de 5000 °C."],
    ["Las placas tectónicas se mueven…", ["unos centímetros al año", "kilómetros al día", "nada"], "Como crecen las uñas."],
    ["El supercontinente antiguo se llamaba…", ["Pangea", "Atlántida", "Gondwana Sur"], "Hace unos 250 millones de años."],
    ["El punto de la superficie sobre el origen de un terremoto es…", ["el epicentro", "el hipocentro", "el cráter"], "Justo encima del hipocentro."],
    ["Depositar materiales en zonas bajas es…", ["sedimentación", "erosión", "transporte"], "El último paso."],
    ["Un terreno llano y elevado es una…", ["meseta", "llanura", "depresión"], "Como la Meseta Central."],
    ["Un saliente de tierra en el mar es un…", ["cabo", "golfo", "istmo"], "Como Finisterre."],
    ["La zona del fondo marino junto a la costa es…", ["la plataforma continental", "la fosa", "la dorsal"], "Hasta unos 200 m."],
    ["La cordillera más larga del mundo son…", ["los Andes", "los Alpes", "los Pirineos"], "Unos 7000 km."],
  ],
  examen: [
    ["Las dorsales son…", ["cordilleras submarinas", "fosas profundas", "islas"], "Donde las placas se separan."],
    ["Canarias es un…", ["archipiélago", "istmo", "golfo"], "Conjunto de islas."],
    ["El Himalaya se formó por…", ["el choque de dos placas", "la erosión del viento", "un volcán"], "India contra Asia."],
  ],
  feynman: ["Cómo es el interior de la Tierra", "Qué son las placas y qué pasa en sus bordes", "Cómo las fuerzas externas desgastan el relieve", "Qué formas tiene el relieve en continentes, costas y océanos"],
  mapa: ["EL RELIEVE", "var(--red)", [["Interior", "corteza · manto · núcleo", "var(--red)"], ["Internas", "placas · volcanes · seísmos", "var(--sun)"], ["Externas", "erosión · sedimentación", "var(--leaf)"], ["Formas", "continente · costa · océano", "var(--inf)"]], 230],
  tarjetas: [
    ["Corteza", "Capa rocosa exterior de la Tierra (5-70 km)."],
    ["Placa tectónica", "Fragmento de la litosfera que se mueve sobre el manto."],
    ["Epicentro", "Punto de la superficie justo encima del origen de un terremoto."],
    ["Erosión", "Desgaste de las rocas por el agua, el hielo, el viento o el mar."],
    ["Meseta", "Terreno llano y elevado."],
    ["Cabo / golfo", "Tierra que entra en el mar / mar que entra en la tierra."],
    ["Península", "Tierra rodeada de agua salvo por el istmo."],
    ["Plataforma continental", "Fondo marino poco profundo junto a la costa."],
  ],
  familias: ["En una excursión, buscad juntos ejemplos de erosión: piedras redondeadas en un río, rocas talladas o tierra arrastrada por la lluvia.", "Con plastilina de varios colores, haced las capas de la Tierra y cortad la bola por la mitad."],
  saberes: "El relieve terrestre: estructura interna, tectónica de placas, agentes internos y externos, y formas del relieve continental, costero y oceánico (Geografía e Historia, 1º ESO, RD 217/2022).",
  ideas: ["Modelar placas con galletas sobre nata para ver choques y separaciones.", "Mapa mudo de los grandes relieves de cada continente.", "Consultar en directo el mapa de terremotos del Instituto Geográfico Nacional."],
  fuentes: [["Instituto Geográfico Nacional: últimos terremotos", "https://www.ign.es/web/ign/portal/sis-catalogo-terremotos"], ["IGN: volcanología", "https://www.ign.es/web/ign/portal/vlc-area-volcanologia"]],
});
