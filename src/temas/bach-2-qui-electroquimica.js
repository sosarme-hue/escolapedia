// Química 2º Bachillerato · Electroquímica: pilas y electrólisis (nivel libro). Dibujos propios en SVG.
const { pasos, compara, rejilla, escala, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach2-qui");

const daniell = marco("Pila Daniell: electrodo de zinc en sulfato de zinc y electrodo de cobre en sulfato de cobre unidos por un puente salino; los electrones van del zinc al cobre por el hilo", `
  <path d="M14 70 V 150 H 104 V 70" fill="var(--muted)" fill-opacity=".18" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M156 70 V 150 H 246 V 70" fill="var(--pen)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2.5"/>
  <rect x="50" y="48" width="16" height="88" fill="#8a8f98"/><rect x="194" y="48" width="16" height="88" fill="#b8682e"/>
  <path d="M84 120 V 84 H 176 V 120" fill="none" stroke="#b45309" stroke-width="10" stroke-linecap="round" stroke-opacity=".7"/>${T(130, 68, "puente salino", { fs: 10, c: "#b45309", b: true })}
  <path d="M58 48 V 22 H 202 V 48" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="130" cy="22" r="11" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>${T(130, 26.5, "V", { fs: 12, b: true })}
  ${T(92, 15, "e⁻ →", { fs: 11, b: true, c: "var(--red)" })}${T(168, 15, "e⁻ →", { fs: 11, b: true, c: "var(--red)" })}
  ${T(58, 164, "Ánodo (−) Zn", { fs: 11, b: true, c: "var(--ink)" })}${T(202, 164, "Cátodo (+) Cu", { fs: 11, b: true, c: "var(--ink)" })}
  ${T(58, 178, "Zn → Zn²⁺ + 2e⁻", { fs: 10, c: "var(--pen)" })}${T(202, 178, "Cu²⁺ + 2e⁻ → Cu", { fs: 10, c: "var(--red)" })}`);

const electrolisis = marco("Cuba electrolítica con cloruro de sodio fundido: una fuente externa obliga a los iones sodio a ir al cátodo y a los cloruros al ánodo", `
  <path d="M40 60 V 160 H 220 V 60" fill="#f4b183" fill-opacity=".35" stroke="var(--ink)" stroke-width="2.5"/>
  <rect x="70" y="40" width="14" height="96" fill="#555"/><rect x="176" y="40" width="14" height="96" fill="#555"/>
  <path d="M77 40 V 22 H 110 M 150 22 H 183 V 40" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M110 12 V 32 M118 16 V 28 M142 12 V 32 M150 16 V 28" stroke="var(--ink)" stroke-width="3"/>
  ${T(77, 154, "Cátodo (−)", { fs: 10.5, b: true })}${T(183, 154, "Ánodo (+)", { fs: 10.5, b: true })}
  ${[[104, 86, "Na⁺", "var(--pen)"], [110, 124, "Na⁺", "var(--pen)"], [156, 90, "Cl⁻", "var(--leaf)"], [150, 126, "Cl⁻", "var(--leaf)"]].map(([x, y, s, c]) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/>${T(x, y + 4, s, { fs: 10, b: true, c: "#fff" })}`).join("")}
  ${T(77, 176, "Na⁺ + e⁻ → Na", { fs: 10.5, c: "var(--pen)", b: true })}${T(183, 176, "2Cl⁻ → Cl₂ + 2e⁻", { fs: 10.5, c: "var(--leaf)", b: true })}`);

module.exports = {
  materia: "Química",
  curso: "2-bachillerato",
  titulo: "Electroquímica: pilas y electrólisis",
  minutos: 125,
  objetivos: [
    "Describir una pila galvánica, sus electrodos, el puente salino y su notación",
    "Usar los potenciales estándar de reducción para calcular la fuerza electromotriz de una pila",
    "Predecir la espontaneidad de reacciones redox relacionando E° con ΔG°",
    "Explicar la electrólisis y aplicar las leyes de Faraday",
    "Describir pilas, baterías y pilas de combustible de uso actual",
    "Explicar la corrosión de los metales y los métodos para evitarla",
  ],
  claves: ["pila galvánica", "ánodo", "cátodo", "puente salino", "fuerza electromotriz", "potencial estándar de reducción", "electrodo de hidrógeno", "serie electroquímica", "espontaneidad", "electrólisis", "leyes de Faraday", "constante de Faraday", "batería", "pila de combustible", "corrosión", "protección catódica"],
  pregunta: {
    texto: "¿Por qué el móvil se calienta cuando lo cargas y por qué pierde capacidad con los años?",
    respuesta: "Una batería de iones de litio es una <mark>pila recargable</mark>: al usarla, los iones Li⁺ viajan del grafito al óxido metálico y los electrones salen por el circuito dando energía al móvil. Al cargarla, el cargador fuerza la reacción contraria: es una <b>electrólisis</b>, y parte de la energía se pierde como calor por la resistencia interna. Con cada ciclo se forman capas y reacciones secundarias que atrapan algo de litio, y la batería almacena un poco menos. Por eso conviene evitar el calor excesivo y las descargas completas.",
  },
  lectura: {
    titulo: "Ranas, pilas y coches eléctricos",
    html: `<p>En 1780, el médico italiano Luigi Galvani observó que las patas de una rana muerta se contraían al tocarlas con dos metales distintos. Creyó haber descubierto la «electricidad animal». Su colega Alessandro Volta sospechó que la electricidad venía de los metales, no de la rana, y en 1800 lo demostró apilando discos de zinc y cobre separados por cartón empapado en salmuera: había inventado la <b>pila</b>, la primera fuente de corriente continua de la historia. Por eso hablamos hoy de pilas «galvánicas» o «voltaicas» y medimos la tensión en voltios.</p><p>Pocos años después, Humphry Davy usó una gran pila para descomponer sales fundidas y aislar por primera vez el sodio, el potasio, el calcio y el magnesio. Su ayudante, Michael Faraday, estableció las leyes cuantitativas de la <b>electrólisis</b>. Dos siglos más tarde, las mismas ideas están detrás de los coches eléctricos, del aluminio de las latas, del cromado de los grifos, de la producción de hidrógeno verde y de la protección de barcos y oleoductos frente a la corrosión.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Pilas galvánicas: la pila Daniell", p: [
      "Si se introduce una lámina de zinc en una disolución de sulfato de cobre, el zinc se oxida y el cobre se deposita, pero la energía de la reacción se pierde como calor, porque los electrones pasan directamente de un átomo a otro. Una <mark>pila galvánica</mark> (o voltaica) separa las dos semirreacciones en dos recipientes, de modo que los electrones tienen que viajar por un hilo conductor externo y producen una <b>corriente eléctrica</b> aprovechable. La <b>pila Daniell</b> tiene un electrodo de zinc en ZnSO₄ y otro de cobre en CuSO₄.",
      "El electrodo donde ocurre la <b>oxidación</b> se llama <mark>ánodo</mark> (en la pila Daniell, el zinc: Zn → Zn²⁺ + 2 e⁻) y es el polo <b>negativo</b>, porque de él salen los electrones. El electrodo donde ocurre la <b>reducción</b> es el <mark>cátodo</mark> (el cobre: Cu²⁺ + 2 e⁻ → Cu), polo <b>positivo</b>. Los electrones van siempre por el circuito externo del ánodo al cátodo. Para cerrar el circuito y mantener la neutralidad eléctrica de las disoluciones, se usa un <b>puente salino</b> (un tubo con KCl o KNO₃ en gel) por el que migran iones: los aniones hacia el ánodo y los cationes hacia el cátodo. Con el tiempo, la lámina de zinc adelgaza y la de cobre engorda.",
    ], svg: daniell, video: V("el-a", "Pilas electroquímicas, voltaicas o galvánicas: pila Daniell", "pila Daniell galvánica") }),
    bloque({ h: "1.2 Notación de las pilas y fuerza electromotriz", p: [
      "Las pilas se representan con una notación abreviada: se escribe el <b>ánodo a la izquierda</b> y el <b>cátodo a la derecha</b>; una barra vertical (|) separa fases distintas (el metal y su disolución) y una doble barra (‖) representa el puente salino. La pila Daniell es: <b>Zn(s) | Zn²⁺(aq, 1 M) ‖ Cu²⁺(aq, 1 M) | Cu(s)</b>. Si un electrodo no tiene metal propio (por ejemplo, el par Fe³⁺/Fe²⁺ o el H⁺/H₂), se usa un electrodo inerte de platino o de grafito: Pt | H₂(g) | H⁺(aq).",
      "La diferencia de potencial entre los dos electrodos cuando no circula corriente es la <mark>fuerza electromotriz</mark> (fem) de la pila, E. Se mide en voltios con un voltímetro de alta resistencia. En condiciones estándar (disoluciones 1 M, gases a 1 bar y normalmente 25 °C), se llama fem estándar, E°. Para la pila Daniell, E° = 1,10 V. La fem indica la «tendencia» de los electrones a fluir del ánodo al cátodo: cuanto mayor es, más energía da cada electrón. Al conectar varias pilas en serie, sus fem se suman: así se construyen las baterías de 9 V o la de un coche (seis celdas de unos 2 V).",
    ], extra: formula("Zn(s) | Zn²⁺(1 M) ‖ Cu²⁺(1 M) | Cu(s) ; E° = 1,10 V"), svg: pasos("Cómo se escribe la notación de una pila", ["Ánodo a la izquierda (oxidación)", "| separa metal y disolución", "‖ representa el puente salino", "Cátodo a la derecha (reducción)"], "var(--pen)") }),
    bloque({ h: "1.3 Potenciales estándar de reducción", p: [
      "No se puede medir el potencial de un solo electrodo, solo diferencias. Por eso se toma como referencia el <mark>electrodo estándar de hidrógeno</mark> (EEH): una lámina de platino en una disolución de H⁺ 1 M con burbujeo de H₂ a 1 bar, al que se asigna por convenio <b>E° = 0,00 V</b>. Se construye una pila con cada electrodo y el de hidrógeno, y la fem medida es el <b>potencial estándar de reducción</b> de ese electrodo, E°. Si el electrodo actúa como cátodo frente al hidrógeno, su E° es positivo (Cu²⁺/Cu: +0,34 V); si actúa como ánodo, negativo (Zn²⁺/Zn: −0,76 V).",
      "Ordenando los pares por su E° se obtiene la <mark>serie electroquímica</mark>. Cuanto <b>mayor</b> (más positivo) es E°, mayor tendencia tiene la forma oxidada a reducirse: <b>oxidante más fuerte</b> (F₂: +2,87 V; MnO₄⁻/Mn²⁺: +1,51 V; Cl₂: +1,36 V). Cuanto <b>menor</b> (más negativo), mayor tendencia tiene la forma reducida a oxidarse: <b>reductor más fuerte</b> (Li: −3,05 V; Na: −2,71 V; Zn: −0,76 V). Los potenciales de reducción son propiedades intensivas: si se multiplica una semirreacción por un número, E° <b>no cambia</b>.",
    ], svg: escala("Serie electroquímica: potenciales estándar de reducción de algunos pares en voltios", "Potenciales estándar de reducción (V)", [["−3,05", "Li⁺/Li", "var(--pen)"], ["−0,76", "Zn²⁺/Zn", "var(--pen)"], ["0,00", "H⁺/H₂", "var(--muted)"], ["+0,34", "Cu²⁺/Cu", "#b45309"], ["+0,80", "Ag⁺/Ag", "#b45309"], ["+1,36", "Cl₂/Cl⁻", "var(--red)"]], "reductor fuerte", "oxidante fuerte"), video: V("el-b", "Espontaneidad y potenciales de reducción", "potenciales de reducción espontaneidad") }),
    bloque({ h: "1.4 Fem de una pila y espontaneidad", p: [
      "Con la tabla de potenciales se calcula la fem estándar de cualquier pila: <mark>E°pila = E°cátodo − E°ánodo</mark>, donde ambos son potenciales de <b>reducción</b>. El cátodo es siempre el par de mayor E° (el que se reduce) y el ánodo el de menor E°. Para la pila Daniell: E° = 0,34 − (−0,76) = 1,10 V. Para una pila de cobre y plata: E° = 0,80 − 0,34 = 0,46 V, con el cobre como ánodo.",
      "La fem está relacionada con la energía libre: <mark>ΔG° = −n F E°</mark>, donde n es el número de electrones intercambiados y F = 96 485 C/mol es la <b>constante de Faraday</b> (la carga de un mol de electrones). Así, una reacción redox es <b>espontánea</b> si E° > 0 (ΔG° < 0) y no espontánea si E° < 0. De aquí sale una regla muy útil: un oxidante reacciona espontáneamente con cualquier reductor de un par con E° menor. Por eso el zinc desplaza al cobre de sus sales y el cobre no desplaza al zinc; los metales con E° negativo se disuelven en ácidos liberando H₂ y los de E° positivo (Cu, Ag, Au) no. En la pila Daniell, ΔG° = −2 · 96 485 · 1,10 = −212 kJ/mol.",
    ], extra: formula("E°pila = E°cátodo − E°ánodo ; ΔG° = −n F E° ; F = 96 485 C/mol"), svg: rejilla("Relación entre la fem, la energía libre y la espontaneidad", ["E°", "ΔG°", "Reacción"], [["E° > 0", "ΔG° < 0", "espontánea"], ["E° = 0", "ΔG° = 0", "equilibrio"], ["E° < 0", "ΔG° > 0", "no espontánea"]], "var(--leaf)") }),
    bloque({ h: "1.5 Influencia de la concentración: ecuación de Nernst", p: [
      "Los potenciales estándar se refieren a concentraciones 1 M. Si las concentraciones son otras, la fem cambia según la <mark>ecuación de Nernst</mark>: <b>E = E° − (0,059 / n) · log Q</b> a 25 °C, donde Q es el cociente de reacción. Para la pila Daniell, Q = [Zn²⁺] / [Cu²⁺]: si se aumenta la concentración de Cu²⁺ (reactivo), Q disminuye y la fem aumenta; si se acumula Zn²⁺ (producto), la fem disminuye. Es una forma eléctrica del principio de Le Chatelier.",
      "A medida que la pila funciona, los reactivos se gastan, Q aumenta y la fem baja, hasta que la reacción alcanza el equilibrio: en ese momento <b>E = 0</b> y la pila está «agotada». Entonces Q = K, y de la ecuación se deduce que <b>E° = (0,059 / n) log K</b>: los potenciales estándar permiten calcular constantes de equilibrio enormes que serían imposibles de medir directamente (para la pila Daniell, K ≈ 10³⁷). La ecuación de Nernst explica también las <b>pilas de concentración</b>, con dos electrodos iguales en disoluciones de distinta concentración, y es la base del funcionamiento del pH-metro y de los impulsos nerviosos de nuestras neuronas.",
    ], extra: formula("E = E° − (0,059 / n) · log Q (25 °C) ; en el equilibrio E = 0 → E° = (0,059/n) log K"), svg: graf("La fem de una pila disminuye a medida que se gastan los reactivos hasta anularse en el equilibrio", "tiempo de funcionamiento", "fem E", [{ p: [[0, 0.85], [0.3, 0.8], [0.6, 0.7], [0.8, 0.5], [0.9, 0.25], [1, 0.02]], c: "var(--pen)", t: "E" }]) }),
    bloque({ h: "2.1 La electrólisis", p: [
      "Una reacción redox no espontánea (E° < 0) puede producirse si se aporta energía eléctrica desde una fuente externa: es la <mark>electrólisis</mark>. Se realiza en una <b>cuba electrolítica</b>: dos electrodos conectados a una fuente de corriente continua sumergidos en un electrolito fundido o disuelto. Al igual que en la pila, el <b>ánodo</b> es el electrodo de la <b>oxidación</b> y el <b>cátodo</b> el de la <b>reducción</b>, pero los signos se invierten: en la electrólisis, el ánodo es el <b>positivo</b> (conectado al polo + de la fuente, atrae a los aniones) y el cátodo el <b>negativo</b> (atrae a los cationes).",
      "En la electrólisis del <b>cloruro de sodio fundido</b>, los Na⁺ van al cátodo y se reducen a sodio metálico (Na⁺ + e⁻ → Na) y los Cl⁻ van al ánodo y se oxidan a cloro gaseoso (2 Cl⁻ → Cl₂ + 2 e⁻). La reacción global, 2 NaCl → 2 Na + Cl₂, tiene E° = −2,71 − 1,36 = −4,07 V, así que hace falta aplicar más de 4,07 V (en la práctica, más, por las sobretensiones y la resistencia). Así se obtienen industrialmente el sodio, el magnesio y otros metales muy reductores que no se pueden obtener por reducción química.",
    ], svg: electrolisis, video: V("el-c", "Electrólisis y leyes de Faraday", "electrólisis ley de Faraday") }),
    bloque({ h: "2.2 Electrólisis en disolución acuosa", p: [
      "Cuando el electrolito está disuelto en agua, el agua también puede oxidarse o reducirse, y compite con los iones. En el cátodo se reduce la especie con <b>mayor</b> potencial de reducción: si es un catión poco reductor (Cu²⁺, Ag⁺), se deposita el metal; si es muy reductor (Na⁺, K⁺, Al³⁺, Mg²⁺), se reduce el agua y se desprende hidrógeno: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻. En el ánodo se oxida la especie que lo haga con más facilidad: los haluros Cl⁻, Br⁻, I⁻ se oxidan a halógeno; los aniones oxigenados (SO₄²⁻, NO₃⁻) no se oxidan y se oxida el agua: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻.",
      "Así, la electrólisis de una disolución de <b>CuSO₄</b> deposita cobre en el cátodo y desprende O₂ en el ánodo. La de una disolución concentrada de <b>NaCl</b> (salmuera) da H₂ en el cátodo, Cl₂ en el ánodo y deja NaOH en la disolución: es el proceso <b>cloro-álcali</b>, una de las mayores industrias químicas del mundo (el cloro se oxida antes que el agua por la sobretensión del oxígeno). Y la electrólisis del <b>agua</b> acidulada o con un electrolito como Na₂SO₄ produce H₂ y O₂ en proporción 2:1: si la electricidad es renovable, se obtiene el llamado <b>hidrógeno verde</b>.",
    ], svg: rejilla("Productos de la electrólisis de algunas disoluciones acuosas", ["Disolución", "Cátodo (−)", "Ánodo (+)"], [["CuSO₄", "Cu", "O₂"], ["NaCl conc.", "H₂", "Cl₂"], ["Na₂SO₄", "H₂", "O₂"], ["AgNO₃", "Ag", "O₂"], ["KI", "H₂", "I₂"]], "#7b3fc4") }),
    bloque({ h: "2.3 Leyes de Faraday", p: [
      "Michael Faraday descubrió en 1833 que la cantidad de sustancia depositada o liberada en un electrodo es <b>proporcional a la carga eléctrica</b> que ha circulado. La carga se calcula como <b>Q = I · t</b> (amperios por segundos), y como un mol de electrones transporta 96 485 C (<mark>1 faraday</mark>), los moles de electrones son n(e⁻) = I · t / F. Con la semirreacción se pasa a moles de sustancia: para depositar un mol de Cu (Cu²⁺ + 2 e⁻ → Cu) hacen falta 2 mol de electrones, es decir, 2 F = 192 970 C.",
      "Todo se resume en la expresión <mark>m = (I · t · M) / (n · F)</mark>, donde M es la masa molar y n el número de electrones de la semirreacción. Por ejemplo, ¿cuánto cobre se deposita con 2,0 A durante una hora? Q = 7200 C; n(e⁻) = 0,0746 mol; n(Cu) = 0,0373 mol; m = 2,37 g. La segunda ley de Faraday dice que, si se conectan varias cubas en serie (con la misma carga), las masas depositadas son proporcionales a M/n de cada sustancia. Para gases, los moles se pasan a volumen con PV = nRT.",
    ], extra: formula("Q = I · t ; n(e⁻) = Q / F ; m = I · t · M / (n · F)"), svg: pasos("Cálculo de la masa depositada en una electrólisis", ["Carga: Q = I · t (en C)", "Moles de electrones: Q / 96 485", "Semirreacción: mol de sustancia", "Masa (× M) o volumen (PV = nRT)"], "var(--red)") }),
    bloque({ h: "2.4 Aplicaciones industriales de la electrólisis", p: [
      "La electrólisis es imprescindible en la industria. El <b>aluminio</b> se obtiene por el proceso Hall-Héroult: electrólisis de alúmina (Al₂O₃) disuelta en criolita fundida a unos 960 °C, con ánodos de carbono; consume tanta electricidad (unos 14 kWh por kilo) que reciclar una lata ahorra el 95 % de la energía. El <b>proceso cloro-álcali</b> produce cloro, hidróxido de sodio e hidrógeno a partir de salmuera. El <b>refinado del cobre</b> usa ánodos de cobre impuro y cátodos de cobre puro: se obtiene cobre del 99,99 % para cables, y del barro anódico se recuperan oro y plata.",
      "La <mark>galvanotecnia</mark> recubre objetos con una fina capa metálica conectándolos como cátodo: cromado de grifos y piezas de coche, niquelado, dorado y plateado de joyas, galvanizado electrolítico del acero con zinc. Con la <b>anodización</b>, en cambio, se engrosa la capa protectora de óxido del aluminio, conectándolo como ánodo. Otras aplicaciones son la obtención de sodio, magnesio, flúor y litio, la producción de hidrógeno verde por electrólisis del agua y la recarga de cualquier batería, que es una electrólisis que invierte la reacción de descarga.",
    ], svg: rejilla("Grandes aplicaciones industriales de la electrólisis", ["Proceso", "Materia prima", "Producto"], [["Hall-Héroult", "Al₂O₃ fundida", "aluminio"], ["Cloro-álcali", "salmuera", "Cl₂, NaOH, H₂"], ["Refinado", "Cu impuro", "Cu 99,99 %"], ["Galvanotecnia", "sales de Cr, Ni, Au", "recubrimientos"], ["Electrolizador", "agua", "H₂ verde"]], "#b45309") }),
    bloque({ h: "3.1 Pilas, baterías y pilas de combustible", p: [
      "Las pilas comerciales se clasifican en <b>primarias</b> (no recargables) y <b>secundarias</b> (recargables o baterías). Entre las primarias, la <b>pila alcalina</b> (1,5 V) tiene un ánodo de zinc en pasta y un cátodo de MnO₂ con electrolito de KOH; las <b>pilas de botón</b> de óxido de plata o de litio alimentan relojes y calculadoras. Entre las secundarias, la <b>batería de plomo-ácido</b> de los coches (Pb y PbO₂ en H₂SO₄, 2 V por celda) es muy fiable y barata pero pesada; las de <b>níquel-hidruro metálico</b> sustituyeron a las de níquel-cadmio, tóxicas.",
      "Las <mark>baterías de iones de litio</mark>, que valieron el Nobel de Química de 2019 a Goodenough, Whittingham y Yoshino, dominan hoy móviles, portátiles y coches eléctricos: los iones Li⁺ se intercalan en un ánodo de grafito al cargar y en un cátodo de óxido metálico (LiCoO₂, LiFePO₄…) al descargar, con unos 3,7 V por celda y una gran energía por kilo. Las <b>pilas de combustible</b> generan electricidad de forma continua a partir de un combustible y oxígeno: en la de hidrógeno, 2 H₂ + O₂ → 2 H₂O, el único residuo es agua; se usan en naves espaciales, autobuses y camiones. El reciclado de pilas es esencial, porque contienen metales valiosos y, a veces, tóxicos.",
    ], svg: rejilla("Comparación de pilas y baterías comerciales", ["Tipo", "Voltaje", "Uso"], [["Alcalina (Zn/MnO₂)", "1,5 V", "mandos, juguetes"], ["Plomo-ácido", "2 V/celda", "coches"], ["Ni-MH", "1,2 V", "pilas recargables"], ["Ion-litio", "3,7 V", "móvil, coche eléctrico"], ["Combustible H₂", "≈ 1 V/celda", "autobuses, espacio"]], "var(--pen)"), video: V("el-d", "Cómo funcionan las baterías", "cómo funcionan las baterías") }),
    bloque({ h: "3.2 La corrosión y su prevención", p: [
      "La <mark>corrosión</mark> es la oxidación no deseada de los metales por su entorno. La más importante es la del <b>hierro</b>, que funciona como una pila en miniatura: en una zona de la superficie (ánodo) el hierro se oxida, Fe → Fe²⁺ + 2 e⁻; los electrones viajan por el metal hasta otra zona (cátodo), donde reducen el oxígeno disuelto en una gota de agua, O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Los iones Fe²⁺ siguen oxidándose y forman la herrumbre, Fe₂O₃ · xH₂O, porosa y quebradiza, que no protege el metal. La sal (agua de mar, sal de las carreteras) acelera la corrosión porque aumenta la conductividad.",
      "Para evitarla se usan varios métodos. Los <b>recubrimientos</b> (pintura, plástico, aceite) aíslan el metal del oxígeno y del agua. El <b>galvanizado</b> recubre el acero con zinc, que se oxida antes que el hierro porque es más reductor (E° = −0,76 frente a −0,44 V) y lo protege aunque se raye. La <mark>protección catódica</mark> une a la estructura un <b>ánodo de sacrificio</b> de un metal más reductor (Mg, Zn), que se corroe en su lugar: se usa en cascos de barcos, oleoductos y calentadores de agua; o bien se conecta la estructura al polo negativo de una fuente. También se emplean <b>aleaciones</b> resistentes como el acero inoxidable (con cromo, que forma una capa de óxido protectora) y la pasivación.",
    ], svg: compara("Métodos de protección del hierro frente a la corrosión", ["Barrera", ["pintura, plástico", "aceite, esmalte", "falla si se raya", ""]], ["Electroquímica", ["galvanizado (Zn)", "ánodo de sacrificio", "Mg o Zn se oxidan", "protege aunque se raye"]], "var(--muted)", "var(--leaf)"), video: V("el-e", "Qué es la corrosión y cómo detenerla", "corrosión cómo detenerla") }),
  ],
  figura: figura("Pila frente a electrólisis", "Dos caras de la misma química", [["Pila", "espontánea", "química → eléctrica"], ["Electrólisis", "forzada", "eléctrica → química"], ["Ánodo", "oxidación", "(−) pila; (+) cuba"], ["Cátodo", "reducción", "(+) pila; (−) cuba"]]),
  video: V("el-a", "Pilas electroquímicas, voltaicas o galvánicas: pila Daniell", "pila Daniell galvánica"),
  ejemplos: [
    { enunciado: "Con E°(Ag⁺/Ag) = +0,80 V y E°(Cu²⁺/Cu) = +0,34 V, describe la pila, escribe su notación y calcula E°.", pasos: ["Cátodo: el de mayor E°, Ag⁺ + e⁻ → Ag.", "Ánodo: Cu → Cu²⁺ + 2 e⁻.", "Global: Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.", "E° = 0,80 − 0,34 = 0,46 V."], resultado: "Cu | Cu²⁺ ‖ Ag⁺ | Ag; E° = 0,46 V." },
    { enunciado: "¿Se disolverá el zinc en HCl 1 M? ¿Y el cobre? E°(Zn²⁺/Zn) = −0,76 V; E°(Cu²⁺/Cu) = +0,34 V.", pasos: ["Zn + 2 H⁺ → Zn²⁺ + H₂: E° = 0 − (−0,76) = +0,76 V > 0.", "Espontánea: el zinc se disuelve desprendiendo H₂.", "Cu + 2 H⁺ → Cu²⁺ + H₂: E° = 0 − 0,34 = −0,34 V < 0.", "No espontánea."], resultado: "El zinc sí se disuelve; el cobre no." },
    { enunciado: "Calcula ΔG° de la pila Daniell (E° = 1,10 V).", pasos: ["n = 2 electrones.", "ΔG° = −n F E° = −2 · 96 485 · 1,10.", "= −212 267 J/mol."], resultado: "ΔG° = −212 kJ/mol: reacción espontánea." },
    { enunciado: "Calcula la fem de la pila Daniell a 25 °C si [Zn²⁺] = 0,010 M y [Cu²⁺] = 1,0 M.", pasos: ["Q = [Zn²⁺] / [Cu²⁺] = 0,010.", "E = 1,10 − (0,059/2) · log 0,010.", "= 1,10 − 0,0295 · (−2) = 1,10 + 0,059."], resultado: "E = 1,16 V." },
    { enunciado: "¿Qué masa de cobre se deposita al pasar 2,0 A durante 1,0 h por una disolución de CuSO₄? (Cu = 63,5)", pasos: ["Q = 2,0 · 3600 = 7200 C.", "n(e⁻) = 7200 / 96 485 = 0,0746 mol.", "Cu²⁺ + 2 e⁻ → Cu: n(Cu) = 0,0373 mol.", "m = 0,0373 · 63,5."], resultado: "m = 2,37 g de cobre." },
    { enunciado: "¿Cuánto tiempo hace falta para obtener 1,00 kg de aluminio con una corriente de 50 000 A? (Al = 27)", pasos: ["n(Al) = 1000 / 27 = 37,0 mol.", "Al³⁺ + 3 e⁻ → Al: n(e⁻) = 111 mol.", "Q = 111 · 96 485 = 1,07 · 10⁷ C.", "t = Q / I = 214 s."], resultado: "t ≈ 214 s, unos 3,6 minutos." },
  ],
  errores: [
    "Pensar que el ánodo es siempre el polo negativo: lo es en la pila, pero en la electrólisis es el positivo.",
    "Multiplicar E° por el coeficiente al ajustar la reacción: el potencial no cambia.",
    "Restar mal: E°pila = E°cátodo − E°ánodo, con potenciales de reducción.",
    "Olvidar el número de electrones n en las leyes de Faraday o en ΔG° = −nFE°.",
    "Creer que en la electrólisis de NaCl acuoso se deposita sodio.",
    "Usar el tiempo en minutos u horas en Q = I · t en lugar de segundos.",
  ],
  ejercicios: [
    B("¿Qué diferencia hay entre una pila galvánica y una cuba electrolítica?", "La pila produce electricidad con una reacción redox espontánea; la cuba usa electricidad para provocar una reacción no espontánea."),
    B("En una pila, ¿dónde ocurre la oxidación y cuál es su signo?", "En el ánodo, que es el polo negativo."),
    B("¿Para qué sirve el puente salino?", "Para cerrar el circuito y mantener la neutralidad eléctrica de las disoluciones mediante la migración de iones."),
    B("Escribe la notación de la pila formada por Mg/Mg²⁺ (E° = −2,37 V) y Ag⁺/Ag (+0,80 V) y calcula E°.", "Mg | Mg²⁺ ‖ Ag⁺ | Ag; E° = 0,80 − (−2,37) = 3,17 V."),
    B("¿Qué es el electrodo estándar de hidrógeno y qué potencial tiene?", "Pt con H₂ a 1 bar en H⁺ 1 M; por convenio E° = 0,00 V."),
    B("Ordena como oxidantes: Cl₂ (1,36 V), Ag⁺ (0,80 V), Cu²⁺ (0,34 V), Zn²⁺ (−0,76 V).", "Cl₂ > Ag⁺ > Cu²⁺ > Zn²⁺."),
    B("¿Qué metal es mejor reductor, el Li (−3,05 V) o el Cu (+0,34 V)?", "El litio: menor potencial de reducción, mayor tendencia a oxidarse."),
    B("¿Qué signo tiene E° de una reacción espontánea? ¿Y ΔG°?", "E° > 0 y ΔG° < 0."),
    B("En la electrólisis, ¿a qué electrodo van los cationes?", "Al cátodo, que es el negativo."),
    B("¿Qué es un faraday?", "La carga de un mol de electrones: 96 485 C."),
    B("¿Por qué se galvaniza el hierro con zinc?", "El zinc es más reductor y se oxida antes que el hierro, protegiéndolo incluso si la capa se raya."),
    B("Cita tres tipos de pilas o baterías y un uso de cada una.", "Alcalina (mandos), plomo-ácido (coches), ion-litio (móviles y coches eléctricos)."),
    M("Se construye una pila con Fe²⁺/Fe (−0,44 V) y Cu²⁺/Cu (+0,34 V). Indica ánodo, cátodo, reacción global y E°.", "Ánodo Fe (Fe → Fe²⁺ + 2 e⁻); cátodo Cu (Cu²⁺ + 2 e⁻ → Cu). Fe + Cu²⁺ → Fe²⁺ + Cu; E° = 0,78 V."),
    M("¿Reaccionará el cloro con una disolución de bromuro? ¿Y el yodo con cloruro? E°(Cl₂/Cl⁻) = 1,36 V; E°(Br₂/Br⁻) = 1,07 V; E°(I₂/I⁻) = 0,54 V.", "Cl₂ + 2 Br⁻ → 2 Cl⁻ + Br₂: E° = 0,29 V > 0, sí. I₂ + 2 Cl⁻: E° = 0,54 − 1,36 < 0, no."),
    M("¿Se puede guardar una disolución de CuSO₄ en un recipiente de hierro? ¿Y de plata?", "Hierro no: Fe + Cu²⁺ es espontánea (E° = 0,78 V) y el recipiente se corroe. Plata sí: Ag + Cu²⁺ no es espontánea (E° = 0,34 − 0,80 < 0)."),
    M("Calcula ΔG° de la reacción Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag (E° = 3,17 V).", "ΔG° = −2 · 96 485 · 3,17 = −612 kJ/mol."),
    M("Calcula la fem de la pila Zn | Zn²⁺ (1,0 M) ‖ Cu²⁺ (0,0010 M) | Cu a 25 °C.", "Q = 1/0,001 = 1000; E = 1,10 − 0,0295 · 3 = 1,01 V."),
    M("¿Qué volumen de cloro, medido en c.n., se desprende en la electrólisis de NaCl fundido al pasar 5,0 A durante 30 min?", "Q = 9000 C → 0,0933 mol e⁻ → 0,0466 mol Cl₂ → 1,04 L."),
    M("¿Qué intensidad hace falta para depositar 0,50 g de plata en 10 min? (Ag = 108)", "n(Ag) = 4,63 · 10⁻³ mol = n(e⁻); Q = 447 C; I = 447 / 600 = 0,74 A."),
    M("Dos cubas en serie contienen AgNO₃ y CuSO₄. Si se depositan 1,08 g de plata, ¿cuánto cobre se deposita?", "n(e⁻) = 0,0100 mol → n(Cu) = 0,0050 mol → 0,318 g."),
    M("Indica los productos de la electrólisis de una disolución acuosa de KBr y escribe las semirreacciones.", "Cátodo: 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻. Ánodo: 2 Br⁻ → Br₂ + 2 e⁻. Queda KOH en disolución."),
    M("Explica por qué la electrólisis de NaCl acuoso no produce sodio.", "El agua (E° de reducción mucho mayor que el del Na⁺, −2,71 V) se reduce antes: se forma H₂ y OH⁻, no sodio."),
    M("Explica la corrosión del hierro como una pila y escribe las semirreacciones.", "Ánodo: Fe → Fe²⁺ + 2 e⁻. Cátodo (donde hay O₂ y agua): O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Fe²⁺ y OH⁻ forman hidróxidos que se oxidan a herrumbre."),
    A("(Tipo PAU) Se construye una pila con un electrodo de aluminio en Al³⁺ 1 M y otro de plata en Ag⁺ 1 M. E°(Al³⁺/Al) = −1,66 V; E°(Ag⁺/Ag) = +0,80 V. a) Escribe las semirreacciones y la reacción global ajustada. b) Calcula E° y ΔG°. c) Escribe la notación e indica el sentido de los electrones.", "a) Ánodo: Al → Al³⁺ + 3 e⁻; cátodo: Ag⁺ + e⁻ → Ag (×3). Al + 3 Ag⁺ → Al³⁺ + 3 Ag. b) E° = 2,46 V; ΔG° = −3 · 96 485 · 2,46 = −712 kJ. c) Al | Al³⁺ ‖ Ag⁺ | Ag; los e⁻ van del Al a la Ag por el hilo."),
    A("(Tipo PAU) Se electroliza una disolución de CuCl₂ con una corriente de 3,0 A durante 45 min. a) Escribe las reacciones en cada electrodo. b) Calcula la masa de cobre depositada. c) Calcula el volumen de cloro a 25 °C y 1 atm.", "a) Cátodo: Cu²⁺ + 2 e⁻ → Cu; ánodo: 2 Cl⁻ → Cl₂ + 2 e⁻. b) Q = 8100 C → 0,0840 mol e⁻ → 0,0420 mol Cu → 2,67 g. c) 0,0420 mol Cl₂ → V = 0,0420 · 0,082 · 298 = 1,03 L."),
    A("(Tipo PAU) Razona si son verdaderas o falsas: a) en una pila el cátodo es el polo negativo; b) el cobre se disuelve en HCl 1 M; c) en la electrólisis el ánodo es el positivo; d) si se duplica la intensidad, se deposita el doble de masa en el mismo tiempo.", "a) Falsa: es el positivo. b) Falsa: E° = −0,34 V. c) Verdadera. d) Verdadera: m ∝ I · t."),
    A("Calcula la constante de equilibrio de la reacción de la pila Daniell a 25 °C.", "log K = n E° / 0,059 = 2 · 1,10 / 0,059 = 37,3 → K ≈ 2 · 10³⁷: la reacción es prácticamente completa."),
    A("Un objeto de 50 cm² se quiere niquelar con una capa de 20 µm (densidad del Ni 8,9 g/cm³; Ni = 58,7). ¿Cuánto tiempo hace falta con 1,5 A?", "V = 50 · 0,0020 = 0,10 cm³ → 0,89 g → 0,0152 mol Ni → 0,0303 mol e⁻ → Q = 2925 C → t = 1950 s ≈ 32,5 min."),
    A("Una batería de móvil tiene 4000 mAh a 3,7 V. ¿Qué carga y qué energía almacena? ¿Cuántos moles de electrones circulan en una descarga completa?", "Q = 4,0 A · 3600 s = 14 400 C; E = Q · V = 53 280 J ≈ 53 kJ (14,8 Wh); n(e⁻) = 14 400 / 96 485 = 0,149 mol."),
    A("En una pila de combustible de hidrógeno, E° = 1,23 V. Calcula ΔG° por mol de H₂ y compáralo con ΔH° de combustión (−286 kJ/mol). ¿Qué rendimiento máximo tiene?", "H₂ → 2 H⁺ + 2 e⁻: n = 2; ΔG° = −2 · 96 485 · 1,23 = −237 kJ/mol. Rendimiento máximo = 237/286 = 83 %, mucho mayor que el de un motor térmico."),
    A("¿Qué metales de la lista podrían actuar como ánodo de sacrificio para proteger una tubería de hierro (−0,44 V)? Mg (−2,37 V), Cu (+0,34 V), Zn (−0,76 V), Sn (−0,14 V).", "Mg y Zn, porque tienen menor potencial de reducción que el hierro y se oxidan en su lugar. Cu y Sn no: acelerarían la corrosión del hierro."),
    A("Explica por qué una lata de hojalata (acero recubierto de estaño) se oxida muy rápido cuando se raya, mientras que el acero galvanizado no.", "El estaño (−0,14 V) es menos reductor que el hierro (−0,44 V): en la raya, el hierro actúa de ánodo y se corroe más deprisa. El zinc (−0,76 V) es más reductor y se oxida él, protegiendo al hierro."),
    A("Calcula la energía eléctrica (en kWh) necesaria para producir 1 kg de aluminio si la cuba trabaja a 4,5 V.", "Q = 1,07 · 10⁷ C (ver ejemplo); E = Q · V = 4,8 · 10⁷ J = 13,4 kWh. Por eso reciclar aluminio ahorra tanta energía."),
  ],
  quiz: [
    q4("En una pila galvánica, la oxidación ocurre en…", ["el cátodo", "el ánodo", "el puente salino", "el voltímetro"], 1, "Ánodo = oxidación."),
    q4("En una pila, el ánodo es el polo…", ["positivo", "negativo", "neutro", "depende"], 1, "Salen los electrones."),
    q4("Los electrones circulan por el hilo…", ["del cátodo al ánodo", "del ánodo al cátodo", "por el puente salino", "no circulan"], 1, "Del polo − al +."),
    q4("El puente salino sirve para…", ["aportar electrones", "cerrar el circuito y mantener la neutralidad", "aumentar el voltaje", "medir E"], 1, "Migran iones."),
    q4("E° del electrodo estándar de hidrógeno:", ["1 V", "0 V", "−1 V", "1,23 V"], 1, "Por convenio."),
    q4("Un E° de reducción muy positivo indica…", ["buen reductor", "buen oxidante", "metal activo", "nada"], 1, "Tendencia a reducirse."),
    q4("E°pila =", ["E°ánodo − E°cátodo", "E°cátodo − E°ánodo", "E°cátodo + E°ánodo", "n · E°"], 1, "Con potenciales de reducción."),
    q4("Si se multiplica una semirreacción por 2, su E°…", ["se duplica", "no cambia", "se divide", "cambia de signo"], 1, "Propiedad intensiva."),
    q4("ΔG° = …", ["nFE°", "−nFE°", "−RT ln E", "FE°/n"], 1, "Relación termodinámica."),
    q4("La constante de Faraday vale…", ["6,02 · 10²³ C", "96 485 C/mol", "1,6 · 10⁻¹⁹ C", "8,31 J/mol K"], 1, "Carga de 1 mol de e⁻."),
    q4("En la electrólisis, el ánodo es…", ["negativo", "positivo", "neutro", "de hidrógeno"], 1, "Atrae a los aniones."),
    q4("En la electrólisis del NaCl fundido, en el cátodo se obtiene…", ["Cl₂", "Na", "H₂", "O₂"], 1, "Na⁺ + e⁻ → Na."),
    q4("En la electrólisis del NaCl acuoso, en el cátodo se obtiene…", ["Na", "H₂", "Cl₂", "O₂"], 1, "Se reduce el agua."),
    q4("Según Faraday, la masa depositada es proporcional a…", ["el voltaje", "la carga", "la temperatura", "el volumen"], 1, "Q = I · t."),
    q4("El aluminio se obtiene por…", ["reducción con carbono", "electrólisis de alúmina fundida", "tostación", "destilación"], 1, "Hall-Héroult."),
    q4("Las baterías de los móviles son de…", ["plomo-ácido", "ion-litio", "zinc-carbono", "níquel-cadmio"], 1, "Nobel 2019."),
    q4("Una pila de combustible de H₂ produce como residuo…", ["CO₂", "agua", "ozono", "NO₂"], 1, "2 H₂ + O₂ → 2 H₂O."),
    q4("La herrumbre es…", ["Fe₃C", "Fe₂O₃ · xH₂O", "FeCl₃", "Fe puro"], 1, "Óxido hidratado."),
    q4("Un ánodo de sacrificio para el hierro puede ser de…", ["Cu", "Ag", "Mg", "Au"], 2, "Más reductor."),
    q4("La sal acelera la corrosión porque…", ["es ácida", "aumenta la conductividad del agua", "es oxidante", "baja la temperatura"], 1, "Facilita el circuito."),
  ],
  examen: [
    q4("E° de la pila Zn (−0,76) / Cu (+0,34):", ["0,42 V", "1,10 V", "−1,10 V", "0,34 V"], 1, "0,34 − (−0,76)."),
    q4("E° de la pila Cu (+0,34) / Ag (+0,80):", ["1,14 V", "0,46 V", "1,26 V", "−0,46 V"], 1, "0,80 − 0,34."),
    q4("ΔG° para n = 2 y E° = 1 V:", ["−193 kJ", "+193 kJ", "−96,5 kJ", "−386 kJ"], 0, "−2 · 96 485 · 1."),
    q4("Carga de 2 A durante 100 s:", ["50 C", "200 C", "100 C", "2 C"], 1, "I · t."),
    q4("Moles de e⁻ con 96 485 C:", ["0,5", "1", "2", "96 485"], 1, "Un faraday."),
    q4("Mol de Cu depositados con 2 mol de e⁻:", ["1", "2", "0,5", "4"], 0, "Cu²⁺ + 2 e⁻."),
    q4("¿Qué metal se disuelve en HCl 1 M?", ["Ag", "Au", "Zn", "Cu"], 2, "E° negativo."),
    q4("Productos de la electrólisis de CuSO₄(aq):", ["Cu y O₂", "H₂ y O₂", "Cu y SO₂", "H₂ y S"], 0, "Se oxida el agua."),
  ],
  feynman: ["Por qué una pila necesita puente salino", "Por qué el ánodo es negativo en la pila y positivo en la electrólisis", "Qué significa que un par tenga E° muy negativo", "Por qué no se obtiene sodio al electrolizar agua salada", "Cómo funciona una batería de litio", "Por qué un ánodo de sacrificio protege un barco"],
  mapa: mapaB("ELECTROQUÍMICA", [["Pilas", "espontánea, E° > 0", "var(--pen)"], ["Potenciales", "E°cát − E°án; ΔG° = −nFE°", "var(--leaf)"], ["Electrólisis", "forzada; Faraday", "var(--red)"], ["Aplicaciones", "baterías, Al, corrosión", "#b45309"]]),
  tarjetas: [
    ["Ánodo", "Electrodo de la oxidación (− en la pila, + en la electrólisis)."],
    ["Cátodo", "Electrodo de la reducción (+ en la pila, − en la electrólisis)."],
    ["Puente salino", "Cierra el circuito y mantiene la neutralidad."],
    ["Notación", "Ánodo | disolución ‖ disolución | cátodo."],
    ["EEH", "Electrodo estándar de hidrógeno: E° = 0 V."],
    ["E°pila", "E°cátodo − E°ánodo."],
    ["Espontaneidad", "E° > 0 ⇔ ΔG° < 0; ΔG° = −nFE°."],
    ["Nernst", "E = E° − (0,059/n) log Q."],
    ["Faraday", "F = 96 485 C/mol; m = I t M / (n F)."],
    ["Electrólisis acuosa", "Na⁺, K⁺: se reduce el agua; SO₄²⁻, NO₃⁻: se oxida el agua."],
    ["Ion-litio", "Li⁺ se intercala en grafito y en óxido metálico; 3,7 V."],
    ["Protección catódica", "Ánodo de sacrificio de Mg o Zn."],
  ],
  glosario: [
    ["Pila galvánica", "Dispositivo que produce electricidad con una reacción redox espontánea."],
    ["Fuerza electromotriz", "Diferencia de potencial de una pila en circuito abierto."],
    ["Electrodo inerte", "Electrodo de Pt o grafito que no participa en la reacción."],
    ["Serie electroquímica", "Ordenación de pares redox según su E°."],
    ["Ecuación de Nernst", "Relación entre la fem y las concentraciones."],
    ["Pila de concentración", "Pila con dos electrodos iguales en concentraciones distintas."],
    ["Cuba electrolítica", "Recipiente donde se produce una electrólisis."],
    ["Sobretensión", "Voltaje adicional al teórico necesario en una electrólisis."],
    ["Galvanotecnia", "Recubrimiento de objetos con metal por electrólisis."],
    ["Anodización", "Engrosamiento electrolítico de la capa de óxido del aluminio."],
    ["Batería", "Pila recargable o conjunto de pilas."],
    ["Pila de combustible", "Pila alimentada continuamente con combustible y oxidante."],
    ["Corrosión", "Oxidación no deseada de un metal."],
    ["Ánodo de sacrificio", "Metal más reductor que se corroe para proteger otro."],
    ["Hidrógeno verde", "H₂ obtenido por electrólisis del agua con energía renovable."],
  ],
  situacion: {
    titulo: "Una pila de limones para el aula",
    reto: "El departamento quiere una demostración que encienda un LED solo con frutas y metales. Vuestro equipo diseñará la mejor pila casera posible y explicará con los potenciales de reducción por qué funciona.",
    pasos: [
      "Construid una pila con un limón, una lámina de zinc (o un clavo galvanizado) y una de cobre; medid su voltaje con un multímetro.",
      "Probad otros pares de metales (Mg, Al, Fe, Cu) y otros electrolitos (patata, vinagre, agua salada) y anotad los voltajes.",
      "Comparad los voltajes con los que predicen los potenciales estándar y explicad las diferencias.",
      "Conectad varias pilas en serie hasta encender un LED y medid la intensidad.",
      "Preparad un póster que explique ánodo, cátodo, reacciones y la diferencia con una pila comercial y con una batería de litio.",
    ],
    producto: "El montaje que enciende el LED, una tabla de resultados y un póster explicativo.",
    evaluacion: ["Las medidas son correctas y se registran con unidades.", "Se identifican bien ánodo, cátodo y semirreacciones.", "Se comparan los resultados con E° y se discuten las diferencias.", "El póster es claro y riguroso."],
  },
  familias: [
    "Mirad las pilas y baterías de casa y comparad su voltaje y su tipo.",
    "Llevad las pilas gastadas a un punto de reciclaje y comentad por qué no van a la basura normal.",
    "Buscad objetos cromados, galvanizados u oxidados y explicad qué les pasa.",
    "Leed la capacidad de la batería del móvil (mAh) y estimad cuánta energía almacena.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Reacciones químicas» (electroquímica): pilas galvánicas, potenciales estándar de reducción, fem y espontaneidad, ecuación de Nernst, electrólisis y leyes de Faraday, aplicaciones tecnológicas (baterías, pilas de combustible, obtención de metales) y corrosión.`,
    ideas: [
      "Montaje de una pila Daniell con puente salino de papel empapado en KNO₃.",
      "Electrólisis de KI con fenolftaleína y almidón: colores en cada electrodo.",
      "Cobreado de una llave o moneda y comprobación de la ley de Faraday pesando.",
      "Experimento de corrosión con clavos en distintas condiciones (agua, sal, aceite, zinc, cobre) durante una semana.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Pila galvánica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Celda_galv%C3%A1nica" },
    { t: "Electrólisis, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Electr%C3%B3lisis" },
    { t: "Premio Nobel de Química 2019: baterías de ion-litio", url: "https://www.nobelprize.org/prizes/chemistry/2019/summary/" },
  ],
  revisado: "2026-11-21",
};
