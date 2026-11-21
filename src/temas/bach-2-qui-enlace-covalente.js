// Química 2º Bachillerato · Enlace covalente y fuerzas intermoleculares (nivel libro). Dibujos propios en SVG.
const { pasos, compara, rejilla, escala, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach2-qui");

// Átomo dibujado como círculo con su símbolo.
const at = (x, y, s, c = "var(--pen)", r = 15) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>${T(x, y + 4.5, s, { fs: 13, b: true, c: "#fff" })}`;
const ln = (x1, y1, x2, y2, c = "var(--ink)") => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="4"/>`;

const agua = marco("Molécula de agua angular con un ángulo de 104,5 grados y dos pares de electrones solitarios sobre el oxígeno", `
  ${ln(130, 70, 78, 120)}${ln(130, 70, 182, 120)}
  <ellipse cx="108" cy="40" rx="12" ry="7" fill="none" stroke="var(--red)" stroke-width="2" transform="rotate(-30 108 40)"/><ellipse cx="152" cy="40" rx="12" ry="7" fill="none" stroke="var(--red)" stroke-width="2" transform="rotate(30 152 40)"/>
  ${at(130, 70, "O", "var(--red)", 18)}${at(78, 120, "H", "var(--muted)", 13)}${at(182, 120, "H", "var(--muted)", 13)}
  <path d="M104 98 Q 130 112 156 98" fill="none" stroke="var(--leaf)" stroke-width="2"/>${T(130, 128, "104,5°", { fs: 13, b: true, c: "var(--leaf)" })}
  ${T(130, 160, "angular: 2 enlaces + 2 pares libres", { fs: 12, b: true })}`);

const sigmaPi = marco("Enlace sigma por solapamiento frontal de orbitales y enlace pi por solapamiento lateral de orbitales p", `
  ${T(65, 24, "σ (frontal)", { fs: 13, b: true, c: "var(--pen)" })}
  <ellipse cx="48" cy="80" rx="26" ry="16" fill="var(--pen)" opacity=".35"/><ellipse cx="82" cy="80" rx="26" ry="16" fill="var(--pen)" opacity=".35"/>
  <circle cx="34" cy="80" r="4" fill="var(--ink)"/><circle cx="96" cy="80" r="4" fill="var(--ink)"/>
  ${T(195, 24, "π (lateral)", { fs: 13, b: true, c: "var(--red)" })}
  <ellipse cx="175" cy="58" rx="9" ry="20" fill="var(--red)" opacity=".35"/><ellipse cx="175" cy="102" rx="9" ry="20" fill="var(--red)" opacity=".35"/>
  <ellipse cx="215" cy="58" rx="9" ry="20" fill="var(--red)" opacity=".35"/><ellipse cx="215" cy="102" rx="9" ry="20" fill="var(--red)" opacity=".35"/>
  <path d="M175 40 Q 195 30 215 40" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M175 120 Q 195 130 215 120" fill="none" stroke="var(--red)" stroke-width="2"/>
  <circle cx="175" cy="80" r="4" fill="var(--ink)"/><circle cx="215" cy="80" r="4" fill="var(--ink)"/>
  ${T(130, 160, "doble enlace = 1 σ + 1 π", { fs: 13, b: true })}`);

const puenteH = marco("Enlaces de hidrógeno entre moléculas de agua: el hidrógeno de una molécula se une al par libre del oxígeno de otra", `
  ${ln(70, 80, 40, 110)}${ln(70, 80, 110, 80)}${at(70, 80, "O", "var(--red)", 16)}${at(40, 110, "H", "var(--muted)", 11)}${at(110, 80, "H", "var(--muted)", 11)}
  <path d="M123 80 H 152" stroke="var(--leaf)" stroke-width="3" stroke-dasharray="5 4"/>
  ${ln(168, 80, 200, 50)}${ln(168, 80, 200, 112)}${at(168, 80, "O", "var(--red)", 16)}${at(200, 50, "H", "var(--muted)", 11)}${at(200, 112, "H", "var(--muted)", 11)}
  ${T(137, 54, "enlace de H", { fs: 11, b: true, c: "var(--leaf)" })}${T(130, 158, "O−H···O : fuerte entre moléculas", { fs: 12, b: true })}`);

module.exports = {
  materia: "Química",
  curso: "2-bachillerato",
  titulo: "Enlace covalente y fuerzas intermoleculares",
  minutos: 120,
  objetivos: [
    "Representar moléculas e iones con estructuras de Lewis, incluidas resonancia, enlaces coordinados y excepciones al octeto",
    "Predecir la geometría de las moléculas con la teoría de repulsión de pares electrónicos (TRPECV)",
    "Determinar la polaridad de los enlaces y de las moléculas",
    "Explicar el enlace con la teoría del enlace de valencia, los enlaces σ y π y la hibridación de orbitales",
    "Distinguir sustancias moleculares y sólidos covalentes, y justificar sus propiedades",
    "Identificar las fuerzas intermoleculares y usarlas para explicar puntos de ebullición y solubilidades",
  ],
  claves: ["enlace covalente", "estructura de Lewis", "enlace coordinado", "resonancia", "carga formal", "TRPECV", "geometría molecular", "momento dipolar", "polaridad", "enlace de valencia", "enlace sigma", "enlace pi", "hibridación", "sólido covalente", "fuerzas de Van der Waals", "enlace de hidrógeno"],
  pregunta: {
    texto: "¿Por qué el agua es líquida a temperatura ambiente si el sulfuro de hidrógeno, una molécula parecida y más pesada, es un gas?",
    respuesta: "Porque las moléculas de agua se atraen muchísimo entre sí mediante <mark>enlaces de hidrógeno</mark>: el oxígeno es tan electronegativo que deja a los hidrógenos casi «desnudos», y estos se pegan a los oxígenos de las moléculas vecinas. El azufre es menos electronegativo y esa atracción es mucho más débil. Sin los enlaces de hidrógeno, el agua herviría a unos −80 °C y no habría océanos ni vida tal como la conocemos.",
  },
  lectura: {
    titulo: "La forma lo es todo",
    html: `<p>El dióxido de carbono y el agua se parecen mucho sobre el papel: un átomo central unido a dos átomos más. Sin embargo, uno es un gas que se escapa de los refrescos y el otro un líquido que cubre el 70 % del planeta. La diferencia está en la forma. El CO₂ es lineal, como un lápiz: sus dos enlaces polares se compensan y la molécula no tiene polos. El agua está doblada, como un boomerang: sus cargas no se anulan y cada molécula es un pequeño imán eléctrico que atrae a sus vecinas.</p><p>La forma de las moléculas decide si una sustancia se disuelve en agua, si hierve a 100 °C o a −160 °C, si un medicamento encaja en una proteína o si una molécula huele a menta o a naranja. Los químicos han aprendido a predecir esa forma con reglas sencillas, basadas en una idea: los pares de electrones se repelen y se colocan lo más lejos posible. En este tema aprenderás a dibujar las moléculas, a predecir su forma y su polaridad y a explicar las fuerzas que las mantienen unidas entre sí.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 El enlace covalente y las estructuras de Lewis", p: [
      "El <mark>enlace covalente</mark> se forma cuando dos átomos, normalmente no metales con electronegatividades parecidas, <b>comparten</b> uno o más pares de electrones. Cada par compartido es un enlace. Lewis propuso representarlo con puntos o rayas: los electrones de valencia alrededor del símbolo, los pares de enlace entre los átomos y los <b>pares libres</b> o solitarios (no compartidos) sobre cada átomo.",
      "Un método sistemático para dibujar una <b>estructura de Lewis</b> es: (1) contar los electrones de valencia de todos los átomos (sumando uno por cada carga negativa y restando uno por cada positiva); (2) elegir el átomo central, normalmente el menos electronegativo, nunca el H; (3) unir los átomos con enlaces simples; (4) completar los octetos de los átomos externos con pares libres; (5) colocar los electrones sobrantes en el átomo central; y (6) si el central no tiene octeto, convertir pares libres de los externos en enlaces dobles o triples. Una fórmula útil: electrones compartidos = electrones necesarios (8 por átomo, 2 por H) − electrones de valencia disponibles.",
    ], svg: pasos("Pasos para dibujar una estructura de Lewis", ["Contar electrones de valencia", "Elegir átomo central y unir", "Completar octetos externos", "Sobrantes al central; si falta, dobles"], "var(--pen)"), video: V("cov-a", "Estructuras de Lewis: teoría y ejercicios", "estructuras de Lewis") }),
    bloque({ h: "1.2 Enlaces múltiples, coordinados y resonancia", p: [
      "Dos átomos pueden compartir dos pares (<b>enlace doble</b>, como O=O o C=O) o tres (<b>enlace triple</b>, N≡N, C≡O). Cuantos más pares se comparten, más corto y fuerte es el enlace: el C−C mide 154 pm y su energía es 348 kJ/mol; el C=C, 134 pm y 614 kJ/mol; el C≡C, 120 pm y 839 kJ/mol. En el <mark>enlace coordinado</mark> o dativo, los dos electrones del par los aporta el mismo átomo: así se forma el ion amonio, NH₃ + H⁺ → NH₄⁺, en el que el nitrógeno cede su par libre al H⁺. Una vez formado, es indistinguible de los demás enlaces N−H.",
      "A veces una sola estructura de Lewis no describe bien una molécula. En el ozono, O₃, se puede dibujar el doble enlace a la izquierda o a la derecha, pero experimentalmente los dos enlaces O−O son iguales, con una longitud intermedia entre simple y doble. Se dice que hay <mark>resonancia</mark>: la estructura real es un <b>híbrido</b> de las formas posibles, con los electrones deslocalizados. Lo mismo ocurre en el ion carbonato (CO₃²⁻, tres formas), el nitrato (NO₃⁻) o el benceno. La resonancia estabiliza la molécula, porque los electrones deslocalizados tienen menos energía.",
    ], svg: rejilla("Longitud y energía de los enlaces carbono-carbono", ["Enlace", "Longitud", "Energía"], [["C−C simple", "154 pm", "348 kJ/mol"], ["C=C doble", "134 pm", "614 kJ/mol"], ["C≡C triple", "120 pm", "839 kJ/mol"], ["C−C benceno", "139 pm", "resonancia"]], "var(--leaf)") }),
    bloque({ h: "1.3 Excepciones al octeto y carga formal", p: [
      "La regla del octeto tiene excepciones. Hay moléculas con <b>octeto incompleto</b>, sobre todo de berilio y boro: en el BeCl₂ el berilio solo tiene 4 electrones y en el BF₃ el boro tiene 6; por eso son aceptores de pares (ácidos de Lewis). Hay moléculas con <mark>octeto expandido</mark>, con más de 8 electrones alrededor del central, posibles en elementos del periodo 3 en adelante: el PCl₅ (10 electrones alrededor del P), el SF₆ (12) o el XeF₄ (12). Por último, hay especies con un número <b>impar</b> de electrones, los radicales, como el NO o el NO₂, que siempre tienen un electrón desapareado y son muy reactivos.",
      "Cuando se pueden dibujar varias estructuras de Lewis, la <b>carga formal</b> ayuda a elegir la más probable. Se calcula para cada átomo como CF = electrones de valencia − electrones de pares libres − ½ · electrones de enlace. La estructura preferida es la que tiene las cargas formales más pequeñas (idealmente cero) y, si hay cargas negativas, sobre los átomos más electronegativos. Por ejemplo, en el CO₂, la estructura O=C=O da carga formal cero en todos los átomos y es mejor que O≡C−O. La suma de las cargas formales es siempre igual a la carga de la especie.",
    ], extra: formula("CF = e⁻ valencia − e⁻ no enlazantes − ½ e⁻ enlazantes"), svg: rejilla("Excepciones a la regla del octeto", ["Tipo", "Ejemplo", "Electrones"], [["Octeto incompleto", "BF₃", "6 en el B"], ["Octeto incompleto", "BeCl₂", "4 en el Be"], ["Octeto expandido", "PCl₅", "10 en el P"], ["Octeto expandido", "SF₆", "12 en el S"], ["Nº impar", "NO", "radical"]], "var(--red)") }),
    bloque({ h: "1.4 Polaridad de los enlaces", p: [
      "Cuando los dos átomos de un enlace covalente son iguales (H₂, Cl₂), comparten los electrones por igual: el enlace es <b>apolar</b>. Si son distintos, el más electronegativo atrae más el par de electrones y adquiere una <b>carga parcial negativa</b> δ⁻, mientras el otro queda con una carga parcial positiva δ⁺: el enlace es <mark>polar</mark> y forma un <b>dipolo</b>. Cuanto mayor es la diferencia de electronegatividad, más polar es el enlace: H−F (1,8) es más polar que H−Cl (0,9), y este más que H−I (0,5).",
      "La polaridad de un enlace se mide con el <b>momento dipolar</b>, μ = q · d, un vector que va (por convenio químico) del átomo positivo al negativo, o al revés en el convenio de la física; lo importante es usar siempre el mismo. Se mide en debyes (D). El carácter iónico de un enlace aumenta con su polaridad: el enlace H−F tiene un 40 % de carácter iónico y el del NaCl, más del 75 %. Así se ve que entre el enlace covalente apolar y el iónico hay una gradación continua, como anunciamos en el tema anterior.",
    ], extra: formula("μ = q · d"), svg: escala("Polaridad creciente de los enlaces de hidrógeno con los halógenos según la diferencia de electronegatividad", "Δ EN y polaridad del enlace", [["H−H", "0", "var(--muted)"], ["H−I", "0,5", "var(--pen)"], ["H−Br", "0,7", "var(--leaf)"], ["H−Cl", "0,9", "#b45309"], ["H−F", "1,8", "var(--red)"]], "apolar", "muy polar") }),
    bloque({ h: "2.1 Geometría molecular: la TRPECV", p: [
      "La <mark>teoría de repulsión de los pares de electrones de la capa de valencia</mark> (TRPECV, o VSEPR en inglés) predice la forma de las moléculas con una idea muy sencilla: los pares de electrones que rodean al átomo central, de enlace o libres, se repelen y se colocan <b>lo más alejados posible</b> unos de otros. Para aplicarla se cuentan las <b>zonas de densidad electrónica</b> del átomo central: cada enlace (simple, doble o triple) cuenta como una zona, igual que cada par libre.",
      "Si el átomo central no tiene pares libres, la geometría es directamente la de las zonas: con 2 zonas, <b>lineal</b> (180°, BeCl₂, CO₂); con 3, <b>trigonal plana</b> (120°, BF₃, SO₃); con 4, <b>tetraédrica</b> (109,5°, CH₄, CCl₄); con 5, <b>bipirámide trigonal</b> (90° y 120°, PCl₅); y con 6, <b>octaédrica</b> (90°, SF₆). Fíjate en que un doble enlace cuenta como una sola zona: el CO₂ tiene dos zonas alrededor del carbono y es lineal, aunque tenga cuatro pares de enlace.",
    ], svg: rejilla("Geometría según el número de zonas electrónicas sin pares libres", ["Zonas", "Geometría", "Ejemplo"], [["2", "lineal 180°", "CO₂"], ["3", "trigonal plana 120°", "BF₃"], ["4", "tetraédrica 109,5°", "CH₄"], ["5", "bipirámide trigonal", "PCl₅"], ["6", "octaédrica 90°", "SF₆"]], "var(--pen)"), video: V("cov-b", "Geometría molecular: la TRPECV", "geometría molecular TRPECV") }),
    bloque({ h: "2.2 Moléculas con pares libres", p: [
      "Cuando el átomo central tiene <b>pares libres</b>, las zonas se siguen colocando según la geometría anterior, pero la forma de la molécula se describe solo por la posición de los <b>átomos</b>, no de los pares libres. Así, con 4 zonas: si son 4 enlaces, la molécula es tetraédrica (CH₄); con 3 enlaces y 1 par libre, es <mark>piramidal trigonal</mark> (NH₃); con 2 enlaces y 2 pares libres, es <mark>angular</mark> (H₂O). Con 3 zonas, 2 enlaces y 1 par libre dan una molécula angular (SO₂, O₃).",
      "Además, los pares libres ocupan más espacio que los de enlace (solo los atrae un núcleo) y <b>repelen más</b>: la repulsión crece en el orden enlace-enlace < enlace-libre < libre-libre. Por eso los ángulos se cierran respecto al tetraédrico: 109,5° en el CH₄, 107° en el NH₃ (un par libre) y 104,5° en el H₂O (dos pares libres). Con 5 y 6 zonas aparecen formas como el balancín (SF₄), la forma de T (ClF₃), la lineal (XeF₂), la pirámide cuadrada (BrF₅) o la plano-cuadrada (XeF₄): los pares libres se colocan donde menos estorban.",
    ], svg: agua }),
    bloque({ h: "2.3 Polaridad de las moléculas", p: [
      "Una molécula con enlaces polares puede ser apolar si su forma hace que los momentos dipolares de los enlaces se <b>anulen</b>. El <mark>momento dipolar de la molécula</mark> es la suma vectorial de los momentos de sus enlaces (y de los pares libres). En el CO₂ (lineal) los dos dipolos C=O son iguales y opuestos: μ = 0, molécula apolar. En el BF₃ (trigonal plana) y en el CCl₄ (tetraédrica), los dipolos también se cancelan por simetría.",
      "En cambio, en el H₂O (angular) los dos dipolos O−H no se anulan y la molécula es <b>polar</b> (μ = 1,85 D); lo mismo ocurre con el NH₃ (piramidal, 1,47 D). Si en una molécula simétrica se sustituye un átomo por otro distinto, la simetría se rompe: el CH₄ es apolar y el CH₃Cl, polar. La regla práctica es: la molécula es apolar si todos los átomos unidos al central son iguales y el central no tiene pares libres (o los tiene colocados simétricamente, como en el XeF₄); en otro caso, suele ser polar. La polaridad decide la solubilidad («lo semejante disuelve a lo semejante») y es clave en las fuerzas intermoleculares.",
    ], svg: compara("Molécula apolar con enlaces polares frente a molécula polar", ["CO₂", ["lineal", "O=C=O", "dipolos opuestos", "μ = 0: apolar"]], ["H₂O", ["angular", "dipolos no", "se anulan", "μ = 1,85 D: polar"]], "var(--muted)", "var(--red)") }),
    bloque({ h: "2.4 La teoría del enlace de valencia: enlaces σ y π", p: [
      "La <mark>teoría del enlace de valencia</mark> (TEV) explica el enlace covalente con orbitales: dos átomos se enlazan cuando un orbital de cada uno, con un electrón desapareado, se <b>solapa</b> con el del otro, y los dos electrones, con espines opuestos, quedan compartidos en la zona de solapamiento. Cuanto mayor es el solapamiento, más fuerte es el enlace. La TEV explica por qué el número de enlaces que forma un átomo, su <b>covalencia</b>, coincide con su número de electrones desapareados.",
      "Hay dos tipos de solapamiento. El <b>frontal</b>, a lo largo del eje que une los núcleos, forma un <mark>enlace σ</mark> (sigma), con la densidad electrónica concentrada entre los núcleos; puede darse entre orbitales s-s, s-p o p-p, y todo enlace simple es σ. El <b>lateral</b>, entre dos orbitales p paralelos, forma un <mark>enlace π</mark> (pi), con la densidad por encima y por debajo del eje; es más débil e impide la rotación del enlace. Un enlace doble está formado por un σ y un π, y uno triple por un σ y dos π. Por eso en el N₂ (N≡N) hay un σ y dos π.",
    ], svg: sigmaPi }),
    bloque({ h: "2.5 La hibridación de orbitales", p: [
      "La TEV simple tiene un problema: el carbono (2s² 2p²) solo tiene dos electrones desapareados, pero forma cuatro enlaces iguales en el metano, dirigidos hacia los vértices de un tetraedro. Pauling lo resolvió con la <mark>hibridación</mark>: al enlazarse, un electrón 2s se promociona a un orbital 2p vacío, y el orbital s y los p se combinan para formar orbitales <b>híbridos</b> iguales entre sí, orientados según la geometría de la molécula.",
      "Con un s y tres p se forman cuatro <b>híbridos sp³</b>, tetraédricos (109,5°): CH₄, NH₃, H₂O, etano. Con un s y dos p, tres <b>sp²</b>, trigonales planos (120°), y queda un p sin hibridar que forma el enlace π: BF₃, eteno (C₂H₄), benceno. Con un s y un p, dos <b>sp</b>, lineales (180°), y quedan dos p para dos enlaces π: BeCl₂, etino (C₂H₂), CO₂. La hibridación es coherente con la TRPECV: 4 zonas ↔ sp³, 3 zonas ↔ sp², 2 zonas ↔ sp. Así se explica que en el eteno los seis átomos estén en un plano y que el doble enlace C=C no pueda girar.",
    ], svg: rejilla("Tipos de hibridación y su geometría", ["Híbrido", "Geometría", "Ejemplos"], [["sp³", "tetraédrica 109,5°", "CH₄, NH₃, H₂O"], ["sp²", "trigonal 120°", "BF₃, C₂H₄"], ["sp", "lineal 180°", "BeCl₂, C₂H₂"]], "#7b3fc4"), video: V("cov-c", "Teoría del enlace de valencia e hibridación", "hibridación de orbitales") }),
    bloque({ h: "3.1 Sólidos covalentes", p: [
      "La mayoría de las sustancias covalentes son <b>moleculares</b>: están formadas por moléculas independientes unidas entre sí por fuerzas débiles. Pero algunas forman <mark>sólidos covalentes</mark> o redes covalentes, en los que todos los átomos están unidos por enlaces covalentes en una red tridimensional gigante, sin moléculas individuales. Los ejemplos clásicos son el <b>diamante</b> (cada carbono sp³ unido a otros cuatro en tetraedro), el <b>cuarzo</b> (SiO₂, cada silicio unido a cuatro oxígenos), el carburo de silicio y el nitruro de boro.",
      "Como para fundirlos hay que romper enlaces covalentes, tienen <b>puntos de fusión altísimos</b> (diamante, más de 3500 °C; cuarzo, 1700 °C), son muy <b>duros</b> (el diamante es el material natural más duro), insolubles en cualquier disolvente y, en general, aislantes. El <b>grafito</b> es una excepción interesante: sus carbonos son sp² y forman capas de hexágonos unidas por fuerzas débiles; por eso es blando y se exfolia (lo usamos en los lápices), y los electrones π deslocalizados de cada capa lo hacen conductor. Una sola capa de grafito es el <b>grafeno</b>, un material de un átomo de espesor, más resistente que el acero y excelente conductor.",
    ], svg: compara("Comparación entre el diamante y el grafito, dos formas del carbono", ["Diamante", ["C sp³", "red 3D", "muy duro", "aislante"]], ["Grafito", ["C sp²", "capas", "blando", "conductor"]], "var(--pen)", "var(--ink)") }),
    bloque({ h: "3.2 Fuerzas intermoleculares de Van der Waals", p: [
      "Entre las moléculas de una sustancia molecular actúan las <mark>fuerzas intermoleculares</mark>, mucho más débiles que los enlaces (unas 100 veces menos), pero responsables de que existan líquidos y sólidos moleculares. Cuando una sustancia molecular hierve, se rompen estas fuerzas, no los enlaces covalentes. Las <b>fuerzas de Van der Waals</b> son de tres tipos. Las <b>dipolo-dipolo</b> (fuerzas de Keesom) actúan entre moléculas polares, que se orientan para que el polo positivo de una mire al negativo de otra (HCl, CH₃Cl).",
      "Las <b>fuerzas de dispersión</b> o <mark>de London</mark> existen entre todas las moléculas, incluidas las apolares: en cada instante, la nube electrónica se desplaza al azar y crea un <b>dipolo instantáneo</b>, que induce otro en la molécula vecina. Son más intensas cuanto más grande y deformable (<b>polarizable</b>) es la nube, es decir, cuanto mayor es la masa molecular, y cuanto más alargada es la molécula. Por eso los halógenos pasan de gas (F₂, Cl₂) a líquido (Br₂) y a sólido (I₂). También hay fuerzas <b>dipolo-dipolo inducido</b> (O₂ disuelto en agua) e <b>ion-dipolo</b>, las que hidratan los iones al disolver una sal en agua.",
    ], svg: barras("Punto de ebullición de los halógenos en grados Celsius más 200 para ver la tendencia de las fuerzas de London", "T ebullición (°C)", [["F₂ (38)", 12, "var(--muted)", "−188"], ["Cl₂ (71)", 166, "var(--leaf)", "−34"], ["Br₂ (160)", 259, "#b45309", "59"], ["I₂ (254)", 384, "#7b3fc4", "184"]]), video: V("cov-d", "Fuerzas intermoleculares: Van der Waals, London y enlace de hidrógeno", "fuerzas intermoleculares") }),
    bloque({ h: "3.3 El enlace de hidrógeno", p: [
      "El <mark>enlace de hidrógeno</mark> (o puente de hidrógeno) es una interacción dipolo-dipolo especialmente intensa que se forma cuando un átomo de hidrógeno unido a un átomo <b>muy electronegativo y pequeño</b> (F, O o N) se atrae con un par libre de otro átomo de F, O o N de una molécula vecina. El hidrógeno, que no tiene más electrones, queda casi como un protón desnudo y se acerca mucho al par libre. Es la fuerza intermolecular más intensa (de 10 a 40 kJ/mol).",
      "Explica la <b>anomalía</b> de los puntos de ebullición: en los hidruros del grupo 16, la temperatura de ebullición sube con la masa (H₂S −60 °C, H₂Se −41 °C, H₂Te −2 °C), pero el agua, la más ligera, hierve a 100 °C. Lo mismo ocurre con el HF y el NH₃. El enlace de hidrógeno explica también que el hielo flote (forma una red abierta, menos densa que el líquido), la alta capacidad calorífica del agua, que el etanol se mezcle con el agua en cualquier proporción y, sobre todo, la estructura de la vida: mantiene unidas las dos hebras del ADN y da su forma a las proteínas.",
    ], svg: puenteH }),
    bloque({ h: "3.4 Propiedades de las sustancias según su enlace", p: [
      "Las <b>sustancias moleculares</b> tienen puntos de fusión y ebullición <b>bajos</b>, porque solo hay que vencer fuerzas intermoleculares: muchas son gases (O₂, CO₂, CH₄) o líquidos (agua, etanol) a temperatura ambiente, y las sólidas (yodo, azúcar, naftaleno) son blandas. No conducen la electricidad en ningún estado, porque no tienen cargas libres (salvo los ácidos que se ionizan en agua). Las apolares se disuelven en disolventes apolares y las polares en disolventes polares, según la regla <mark>«lo semejante disuelve a lo semejante»</mark>.",
      "Para ordenar puntos de ebullición de sustancias moleculares conviene seguir este orden: (1) si alguna forma enlaces de hidrógeno, tiene el punto de ebullición más alto; (2) entre moléculas de masa parecida, las polares hierven más que las apolares; (3) entre moléculas del mismo tipo, hierve más la de mayor masa molecular (más fuerzas de London). Con este tema y el anterior ya puedes clasificar cualquier sustancia: iónica, metálica, covalente molecular o sólido covalente, y predecir sus propiedades a partir de su enlace.",
    ], svg: rejilla("Comparación de los cuatro tipos de sustancias", ["Sustancia", "Fusión", "Conduce"], [["Iónica (NaCl)", "alta", "fundida o disuelta"], ["Metálica (Cu)", "variable", "sí, sólida"], ["Molecular (H₂O)", "baja", "no"], ["Covalente red (SiO₂)", "muy alta", "no (salvo grafito)"]], "var(--leaf)") }),
  ],
  figura: figura("De la estructura a las propiedades", "Pasos para predecir el comportamiento de una sustancia covalente", [["Lewis", "pares de enlace", "y pares libres"], ["Geometría", "TRPECV e hibridación", "lineal, plana, tetraédrica"], ["Polaridad", "μ de la molécula", "se anulan o no"], ["Fuerzas", "London, dipolo, enlace de H", "ebullición y solubilidad"]]),
  video: V("cov-b", "Geometría molecular: la TRPECV", "geometría molecular TRPECV"),
  ejemplos: [
    { enunciado: "Dibuja la estructura de Lewis del CO₂ y del ion NH₄⁺.", pasos: ["CO₂: valencia 4 + 2 · 6 = 16 e⁻; necesarios 3 · 8 = 24; compartidos 8 (4 enlaces).", "Carbono central con dos dobles enlaces: O=C=O, dos pares libres en cada O.", "NH₄⁺: 5 + 4 − 1 = 8 e⁻ → cuatro enlaces N−H, sin pares libres.", "Uno de los enlaces es coordinado (el par era del N), pero los cuatro son iguales."], resultado: "O=C=O (cargas formales 0); NH₄⁺ tetraédrico con carga +1." },
    { enunciado: "Predice la geometría y la polaridad del NH₃ y del BF₃.", pasos: ["NH₃: N con 3 enlaces y 1 par libre = 4 zonas (tetraédrica de zonas).", "Forma de los átomos: piramidal trigonal, ángulo ≈ 107°. Los dipolos no se anulan: polar.", "BF₃: B con 3 enlaces y 0 pares libres = 3 zonas: trigonal plana, 120°.", "Los tres dipolos B−F se anulan por simetría: apolar."], resultado: "NH₃ piramidal y polar; BF₃ trigonal plana y apolar." },
    { enunciado: "Indica la hibridación de cada carbono y el número de enlaces σ y π del propeno, CH₂=CH−CH₃.", pasos: ["C1 y C2 (doble enlace): 3 zonas → sp².", "C3 (solo enlaces simples): 4 zonas → sp³.", "Enlaces σ: 6 C−H + 2 C−C = 8.", "Enlaces π: 1 (en el C=C)."], resultado: "sp², sp², sp³; 8 enlaces σ y 1 π." },
    { enunciado: "Calcula las cargas formales en las dos estructuras posibles del ion tiocianato, [S=C=N]⁻ y [S−C≡N]⁻, y elige la más probable.", pasos: ["[S=C=N]⁻: S (6 − 4 − 2) = 0; C (4 − 0 − 4) = 0; N (5 − 4 − 2) = −1.", "[S−C≡N]⁻: S (6 − 6 − 1) = −1; C = 0; N (5 − 2 − 3) = 0.", "Ambas tienen una sola carga −1. Se prefiere la carga sobre el átomo más electronegativo (N)."], resultado: "Predomina [S=C=N]⁻, aunque la real es un híbrido de resonancia de ambas." },
    { enunciado: "Ordena por punto de ebullición creciente: CH₄, H₂O, H₂S, HCl. Justifícalo.", pasos: ["CH₄: apolar, solo fuerzas de London débiles (16 g/mol): el más bajo.", "H₂S (34) y HCl (36,5): polares, dipolo-dipolo; el HCl es más polar.", "H₂O: enlaces de hidrógeno: el más alto.", "Datos: CH₄ −161, H₂S −60, HCl −85 °C, H₂O 100 °C."], resultado: "CH₄ < HCl < H₂S < H₂O (el H₂S supera al HCl porque es más polarizable)." },
    { enunciado: "Explica por qué el CCl₄ es apolar y el CHCl₃ es polar, si ambos tienen enlaces polares y forma tetraédrica.", pasos: ["CCl₄: cuatro enlaces C−Cl iguales en un tetraedro regular: los dipolos se anulan.", "CHCl₃: un H sustituye a un Cl. El dipolo C−H es muy distinto del C−Cl.", "La suma vectorial ya no es cero."], resultado: "El CCl₄ es apolar (μ = 0) y el CHCl₃ es polar (μ ≈ 1,0 D): la simetría decide." },
  ],
  errores: [
    "Olvidar sumar o restar electrones por la carga al dibujar la estructura de Lewis de un ion.",
    "Describir la geometría incluyendo los pares libres: el agua es angular, no tetraédrica.",
    "Contar un doble enlace como dos zonas en la TRPECV: cuenta como una.",
    "Pensar que una molécula con enlaces polares es siempre polar: el CO₂ y el CCl₄ son apolares.",
    "Creer que al hervir el agua se rompen los enlaces O−H: se rompen los enlaces de hidrógeno entre moléculas.",
    "Decir que hay enlace de hidrógeno en cualquier molécula con H: solo si el H está unido a F, O o N.",
  ],
  ejercicios: [
    B("Dibuja las estructuras de Lewis de Cl₂, HCl, H₂O y NH₃.", "Cl−Cl con tres pares libres en cada Cl; H−Cl con tres pares en el Cl; H−O−H con dos pares en el O; NH₃ con tres enlaces N−H y un par libre en el N."),
    B("Dibuja las estructuras de Lewis del O₂ y del N₂ e indica el tipo de enlace.", "O=O (doble, dos pares libres en cada O); N≡N (triple, un par libre en cada N)."),
    B("¿Qué es un enlace coordinado? Pon un ejemplo.", "Un enlace covalente en el que los dos electrones los aporta el mismo átomo. Ejemplo: NH₃ + H⁺ → NH₄⁺."),
    B("¿Qué molécula tiene un octeto incompleto: BF₃, NF₃ o CF₄?", "BF₃: el boro solo tiene 6 electrones."),
    B("Ordena por polaridad creciente los enlaces: H−F, H−H, H−Cl, H−Br.", "H−H < H−Br < H−Cl < H−F."),
    B("¿Qué geometría tienen las moléculas con 2, 3 y 4 zonas sin pares libres?", "Lineal (180°), trigonal plana (120°) y tetraédrica (109,5°)."),
    B("¿Por qué el ángulo H−O−H (104,5°) es menor que el tetraédrico?", "Porque los dos pares libres del oxígeno repelen más que los de enlace y cierran el ángulo."),
    B("Indica si son polares: H₂, HCl, CO₂, H₂O.", "H₂ apolar; HCl polar; CO₂ apolar (lineal); H₂O polar (angular)."),
    B("¿Qué diferencia hay entre un enlace σ y uno π?", "El σ se forma por solapamiento frontal sobre el eje internuclear; el π por solapamiento lateral de orbitales p, por encima y debajo del eje, y es más débil."),
    B("¿Cuántos enlaces σ y π tiene un enlace triple?", "Un σ y dos π."),
    B("Nombra los tres tipos de fuerzas de Van der Waals.", "Dipolo-dipolo, dipolo-dipolo inducido y de dispersión de London (dipolo instantáneo-dipolo inducido)."),
    B("¿Qué condición debe cumplirse para que haya enlace de hidrógeno?", "Un H unido a F, O o N que se atrae con un par libre de F, O o N de otra molécula."),
    M("Dibuja la estructura de Lewis del ion carbonato, CO₃²⁻, y explica la resonancia.", "4 + 18 + 2 = 24 e⁻. C central con un doble enlace y dos simples a O (con carga −1 cada uno). Hay tres formas equivalentes; la real es un híbrido con tres enlaces C−O iguales, de orden 1⅓."),
    M("Dibuja la estructura de Lewis del SO₂ y predice su geometría.", "18 e⁻. S central con un doble enlace y uno simple (formas resonantes) y un par libre en el S: 3 zonas, geometría angular (≈ 119°), polar."),
    M("Calcula la carga formal de cada átomo en el ion NO₂⁻ (O=N−O)⁻.", "O del doble: 6 − 4 − 2 = 0. N: 5 − 2 − 3 = 0. O del simple: 6 − 6 − 1 = −1. Suma −1, igual a la carga del ion."),
    M("Predice la geometría de PCl₃, CH₂O (metanal) y BeH₂.", "PCl₃: 3 enlaces + 1 par libre, piramidal. CH₂O: 3 zonas (C=O cuenta una), trigonal plana. BeH₂: 2 zonas, lineal."),
    M("Predice geometría y polaridad del SF₆ y del SF₄.", "SF₆: 6 zonas sin pares libres, octaédrica, apolar. SF₄: 5 zonas con 1 par libre (en el ecuador), forma de balancín, polar."),
    M("¿Por qué el NH₃ es polar y el BF₃ no, si ambos tienen 3 enlaces?", "El NH₃ tiene un par libre y forma piramidal: los dipolos no se anulan. El BF₃ no tiene pares libres y es trigonal plano: los dipolos se cancelan."),
    M("Indica la hibridación del átomo central en CH₄, BF₃, BeCl₂, NH₃ y H₂O.", "sp³, sp², sp, sp³, sp³."),
    M("Indica la hibridación de cada carbono en el etino (HC≡CH) y en el ácido acético (CH₃COOH).", "Etino: ambos sp. Ácido acético: CH₃ sp³ y C del COOH sp²."),
    M("¿Cuántos enlaces σ y π tiene la molécula de benceno (C₆H₆)?", "12 σ (6 C−C y 6 C−H) y 3 π, deslocalizados por resonancia en todo el anillo."),
    M("Explica por qué el diamante es duro y aislante y el grafito blando y conductor.", "Diamante: red 3D de C sp³, todos los electrones en enlaces σ localizados. Grafito: capas de C sp² unidas por fuerzas débiles (blando) con electrones π deslocalizados en cada capa (conduce)."),
    M("Ordena por punto de ebullición: F₂, Cl₂, Br₂, I₂, y justifícalo.", "F₂ < Cl₂ < Br₂ < I₂: todas apolares; las fuerzas de London crecen con el tamaño y la masa molecular."),
    M("¿Por qué el agua hierve a 100 °C y el H₂S a −60 °C?", "Las moléculas de agua forman enlaces de hidrógeno (O muy electronegativo y pequeño); el H₂S solo tiene fuerzas dipolo-dipolo y de London, mucho más débiles."),
    M("¿Se disolverá el yodo en agua o en tetracloruro de carbono? ¿Y el NaCl?", "El I₂, apolar, se disuelve mejor en CCl₄ (apolar). El NaCl, iónico, se disuelve en agua (polar) y no en CCl₄."),
    M("Explica por qué el hielo flota en el agua líquida.", "En el hielo, cada molécula forma 4 enlaces de hidrógeno en una red hexagonal abierta, con mucho espacio vacío: es menos denso que el agua líquida, donde la red se rompe en parte y las moléculas se acercan."),
    A("(Tipo PAU) Para las moléculas BeCl₂, NCl₃ y CCl₄: a) dibuja sus estructuras de Lewis; b) predice su geometría con la TRPECV; c) indica la hibridación del átomo central; d) razona su polaridad.", "BeCl₂: Cl−Be−Cl, lineal, sp, apolar. NCl₃: 3 enlaces + 1 par libre, piramidal, sp³, polar. CCl₄: 4 enlaces, tetraédrica, sp³, apolar (dipolos se anulan)."),
    A("(Tipo PAU) Dadas las sustancias CH₃OH, CH₃CH₃, NaCl y SiO₂, ordénalas por punto de fusión y justifica el tipo de enlace o fuerza que se rompe.", "CH₃CH₃ (London) < CH₃OH (enlaces de H) < NaCl (red iónica) < SiO₂ (red covalente, se rompen enlaces Si−O)."),
    A("(Tipo PAU) Razona si son verdaderas o falsas: a) el CO₂ es apolar aunque sus enlaces sean polares; b) en el eteno los carbonos tienen hibridación sp³; c) el HF tiene un punto de ebullición mayor que el HCl; d) el BF₃ cumple la regla del octeto.", "a) Verdadera: es lineal y los dipolos se anulan. b) Falsa: son sp² (doble enlace). c) Verdadera: el HF forma enlaces de hidrógeno (20 °C frente a −85 °C). d) Falsa: el B tiene 6 electrones."),
    A("Dibuja la estructura de Lewis del XeF₄ y predice su geometría y su polaridad.", "Xe: 8 e⁻ + 4 · 7 = 36 e⁻. Xe con 4 enlaces y 2 pares libres: 6 zonas (octaédrica). Los pares libres se colocan opuestos: la molécula es plano-cuadrada y apolar."),
    A("Estima la entalpía de la hidrogenación del eteno (C₂H₄ + H₂ → C₂H₆) con energías de enlace: C=C 614; C−C 348; H−H 436; C−H 413 kJ/mol.", "Rotos: C=C + H−H = 614 + 436 = 1050. Formados: C−C + 2 C−H = 348 + 826 = 1174. ΔH ≈ −124 kJ/mol."),
    A("¿Por qué el etanol (CH₃CH₂OH, 46 g/mol) hierve a 78 °C y el dimetiléter (CH₃OCH₃, misma masa) a −24 °C?", "El etanol tiene un grupo O−H y forma enlaces de hidrógeno entre sus moléculas. En el éter el O no lleva H unido: solo hay dipolo-dipolo y London. Misma masa, distinta fuerza intermolecular."),
    A("Explica con la hibridación por qué en el eteno no hay rotación alrededor del doble enlace y en el etano sí.", "En el eteno, el enlace π se forma por solapamiento lateral de los orbitales p no hibridados, que deben estar paralelos; girar rompería el π. El enlace σ del etano, frontal, se mantiene al girar."),
    A("Explica por qué el pentano (36 °C) hierve a mayor temperatura que el 2,2-dimetilpropano (10 °C), si ambos son C₅H₁₂.", "Ambos son apolares y de igual masa, pero el pentano es lineal y alargado: tiene más superficie de contacto y fuerzas de London más intensas. El isómero ramificado es casi esférico."),
    A("Explica la doble hélice del ADN con los enlaces de hidrógeno y por qué se separa al calentarla a unos 90 °C.", "Las bases enfrentadas se unen por enlaces de hidrógeno (A−T con 2, G−C con 3). Son lo bastante fuertes para mantener la hélice, pero mucho más débiles que los covalentes: al calentar se rompen y las hebras se separan sin romper la secuencia. Más pares G−C, mayor temperatura de separación."),
    A("Clasifica las sustancias A (funde a 1713 °C, insoluble, no conduce), B (funde a −114 °C, soluble en agua, su disolución conduce) y C (funde a 113 °C, soluble en CCl₄, no conduce), y propón cuáles podrían ser.", "A: sólido covalente (SiO₂). B: molecular polar que se ioniza en agua (HCl). C: molecular apolar (I₂, funde a 113,7 °C)."),
  ],
  quiz: [
    q4("En el enlace covalente los átomos…", ["transfieren electrones", "comparten pares de electrones", "forman iones", "comparten protones"], 1, "Entre no metales."),
    q4("¿Cuántos electrones de valencia hay en total en el CO₂?", ["12", "16", "22", "24"], 1, "4 + 6 + 6."),
    q4("El enlace del NH₄⁺ formado con el par del N es…", ["iónico", "coordinado", "metálico", "π"], 1, "Dativo."),
    q4("La resonancia indica que…", ["la molécula vibra", "la estructura real es un híbrido de varias formas de Lewis", "hay electrones libres", "hay iones"], 1, "Electrones deslocalizados."),
    q4("¿Qué molécula tiene octeto expandido?", ["CH₄", "PCl₅", "BF₃", "H₂O"], 1, "10 electrones en el P."),
    q4("El enlace más polar es…", ["H−Cl", "H−F", "H−Br", "H−I"], 1, "Mayor Δ EN."),
    q4("Según la TRPECV, el CH₄ es…", ["plano", "tetraédrico", "piramidal", "lineal"], 1, "4 zonas sin pares libres."),
    q4("La forma del NH₃ es…", ["trigonal plana", "piramidal trigonal", "tetraédrica", "angular"], 1, "Tiene un par libre."),
    q4("En la TRPECV, un enlace doble cuenta como…", ["dos zonas", "una zona", "media zona", "nada"], 1, "Una zona electrónica."),
    q4("¿Qué molécula es apolar?", ["H₂O", "NH₃", "CO₂", "HCl"], 2, "Lineal y simétrica."),
    q4("Un enlace π se forma por…", ["solapamiento frontal", "solapamiento lateral de orbitales p", "transferencia", "atracción de iones"], 1, "Por encima y debajo del eje."),
    q4("La hibridación del carbono en el metano es…", ["sp", "sp²", "sp³", "sin hibridar"], 2, "Tetraédrica."),
    q4("La hibridación del carbono en el etino es…", ["sp", "sp²", "sp³", "d²sp³"], 0, "Lineal, triple enlace."),
    q4("El diamante es un sólido…", ["molecular", "iónico", "covalente reticular", "metálico"], 2, "Red tridimensional de C."),
    q4("El grafito conduce la electricidad porque…", ["tiene iones", "tiene electrones π deslocalizados", "es metálico", "es sp³"], 1, "En cada capa."),
    q4("Las fuerzas de London existen…", ["solo entre moléculas polares", "entre todas las moléculas", "solo en iones", "solo con H"], 1, "Dipolos instantáneos."),
    q4("Las fuerzas de London aumentan con…", ["la carga", "el tamaño y la masa molecular", "la temperatura", "el pH"], 1, "Más polarizabilidad."),
    q4("¿Qué sustancia forma enlaces de hidrógeno?", ["CH₄", "H₂S", "NH₃", "HCl"], 2, "H unido a N."),
    q4("Al hervir el agua se rompen…", ["enlaces O−H", "enlaces de hidrógeno entre moléculas", "enlaces iónicos", "núcleos"], 1, "Fuerzas intermoleculares."),
    q4("«Lo semejante disuelve a lo semejante» significa que…", ["todo se disuelve en agua", "las sustancias polares se disuelven en disolventes polares", "los metales se disuelven en agua", "nada se disuelve"], 1, "Y las apolares en apolares."),
  ],
  examen: [
    q4("Electrones de valencia del ion SO₄²⁻:", ["30", "32", "34", "24"], 1, "6 + 24 + 2."),
    q4("Geometría del H₂S:", ["lineal", "angular", "piramidal", "plana"], 1, "2 enlaces y 2 pares libres."),
    q4("Geometría del SO₃:", ["piramidal", "trigonal plana", "tetraédrica", "angular"], 1, "3 zonas sin pares libres."),
    q4("Hibridación del B en el BF₃:", ["sp", "sp²", "sp³", "sp³d"], 1, "3 zonas."),
    q4("Enlaces σ y π en el CO₂:", ["2 σ y 2 π", "4 σ", "2 σ y 1 π", "1 σ y 2 π"], 0, "Dos dobles enlaces."),
    q4("Molécula polar:", ["CCl₄", "BF₃", "CHCl₃", "CO₂"], 2, "Pierde la simetría."),
    q4("Mayor punto de ebullición:", ["HF", "HCl", "HBr", "F₂"], 0, "Enlaces de hidrógeno."),
    q4("Carga formal del N en el NH₄⁺:", ["0", "+1", "−1", "+2"], 1, "5 − 0 − 4."),
  ],
  feynman: ["Cómo se dibuja paso a paso una estructura de Lewis", "Por qué los pares libres cierran los ángulos de enlace", "Por qué el CO₂ es apolar y el agua polar", "Qué es la hibridación y por qué la necesitamos", "Por qué el grafito conduce y el diamante no", "Por qué el agua hierve a 100 °C"],
  mapa: mapaB("ENLACE COVALENTE", [["Lewis", "pares, resonancia, octeto", "var(--pen)"], ["Geometría", "TRPECV, hibridación", "#7b3fc4"], ["Polaridad", "Δ EN, momento dipolar", "var(--red)"], ["Fuerzas", "London, dipolo, enlace de H", "var(--leaf)"]]),
  tarjetas: [
    ["Enlace covalente", "Compartición de pares de electrones entre no metales."],
    ["Estructura de Lewis", "Pares de enlace y pares libres de valencia."],
    ["Enlace coordinado", "Los dos electrones del par los aporta un átomo."],
    ["Resonancia", "La estructura real es un híbrido de varias de Lewis."],
    ["Carga formal", "CF = valencia − no enlazantes − ½ enlazantes."],
    ["TRPECV", "Los pares de la capa de valencia se repelen y se alejan al máximo."],
    ["Geometrías básicas", "2 lineal, 3 trigonal, 4 tetraédrica, 5 bipirámide, 6 octaedro."],
    ["Molécula polar", "La suma de los dipolos no es cero."],
    ["σ y π", "σ frontal (todo enlace simple); π lateral (en dobles y triples)."],
    ["Hibridación", "sp³ (109,5°), sp² (120°), sp (180°)."],
    ["Fuerzas de London", "Entre todas las moléculas; crecen con la masa."],
    ["Enlace de hidrógeno", "H unido a F, O o N con un par libre de F, O o N vecino."],
  ],
  glosario: [
    ["Par libre", "Par de electrones de valencia no compartido."],
    ["Orden de enlace", "Número de pares compartidos entre dos átomos."],
    ["Radical", "Especie con un electrón desapareado."],
    ["Octeto expandido", "Más de ocho electrones alrededor del átomo central."],
    ["Dipolo", "Pareja de cargas parciales de signo contrario separadas."],
    ["Debye", "Unidad de momento dipolar."],
    ["Zona electrónica", "Enlace o par libre alrededor del átomo central."],
    ["Covalencia", "Número de enlaces covalentes que forma un átomo."],
    ["Solapamiento", "Superposición de orbitales de dos átomos."],
    ["Orbital híbrido", "Combinación de orbitales s y p de un mismo átomo."],
    ["Sólido covalente", "Red de átomos unidos por enlaces covalentes."],
    ["Grafeno", "Lámina de carbono de un átomo de espesor."],
    ["Polarizabilidad", "Facilidad para deformar la nube electrónica."],
    ["Fuerza ion-dipolo", "Atracción entre un ion y una molécula polar."],
    ["Sustancia molecular", "Formada por moléculas unidas por fuerzas débiles."],
  ],
  situacion: {
    titulo: "Moléculas en 3D para la clase de 3º de ESO",
    reto: "El departamento de Física y Química quiere una colección de modelos moleculares para explicar la forma de las moléculas a los alumnos de 3º de ESO. Vuestro equipo diseñará y construirá diez modelos y una ficha de cada uno.",
    pasos: [
      "Elegid diez moléculas que cubran todas las geometrías básicas (por ejemplo CO₂, BF₃, CH₄, NH₃, H₂O, PCl₅, SF₆, C₂H₄, C₂H₂ y HCN).",
      "Dibujad la estructura de Lewis y predecid la geometría, los ángulos, la hibridación y la polaridad de cada una.",
      "Construid los modelos con plastilina y palillos, o diseñadlos con un programa de modelado molecular gratuito y, si es posible, imprimidlos en 3D.",
      "Comprobad vuestras predicciones comparando con los ángulos experimentales en una base de datos.",
      "Preparad una ficha para cada modelo con una explicación sencilla para alumnos más pequeños.",
    ],
    producto: "Diez modelos moleculares con su ficha explicativa y una breve exposición para un grupo de 3º de ESO.",
    evaluacion: ["Las estructuras de Lewis y las geometrías son correctas.", "Los modelos respetan los ángulos y la forma predicha.", "Se justifica bien la polaridad de cada molécula.", "La explicación se adapta al nivel de los alumnos de ESO."],
  },
  familias: [
    "Mezclad agua y aceite y luego añadid un poco de jabón: hablad de moléculas polares y apolares.",
    "Llenad un vaso de agua hasta el borde y observad la «cúpula» de la tensión superficial, debida a los enlaces de hidrógeno.",
    "Meted una botella de agua llena en el congelador (con cuidado): el hielo ocupa más volumen.",
    "Comparad lo rápido que se evapora una gota de agua, de alcohol y de quitaesmalte sobre la mano.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Enlace químico y estructura de la materia»: enlace covalente, estructuras de Lewis, resonancia y excepciones al octeto, geometría molecular (TRPECV), polaridad, teoría del enlace de valencia e hibridación, sólidos covalentes, fuerzas intermoleculares y propiedades de las sustancias.`,
    ideas: [
      "Modelos con globos atados (2 a 6) para ver que se colocan solos en las geometrías de la TRPECV.",
      "Simulación PhET «Forma de la molécula» y «Polaridad de la molécula».",
      "Desviación de un chorro fino de agua y de aceite con una regla cargada para ver la polaridad.",
      "Cromatografía en papel de tintas para relacionar polaridad y solubilidad.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Teoría de repulsión de pares de electrones de valencia, Wikipedia", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_de_repulsi%C3%B3n_de_pares_de_electrones_de_valencia" },
    { t: "Simulación PhET «Forma de la molécula» (en español)", url: "https://phet.colorado.edu/es/simulations/molecule-shapes" },
    { t: "NIST CCCBDB: geometrías experimentales de moléculas", url: "https://cccbdb.nist.gov/" },
  ],
  revisado: "2026-11-21",
};
