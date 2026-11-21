// Ciencias Generales 2º Bachillerato · El enlace químico y las propiedades de las sustancias (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, agua } = require("./_bach2-cg");

// Red iónica de NaCl.
const redSVG = marco("Red cristalina de cloruro de sodio: iones Na⁺ pequeños y Cl⁻ grandes alternados en las tres direcciones", `
  ${Array.from({ length: 25 }, (_, i) => { const r = Math.floor(i / 5), c = i % 5, x = 50 + c * 40, y = 24 + r * 28, na = (r + c) % 2 === 0;
    return `<circle cx="${x}" cy="${y}" r="${na ? 9 : 14}" fill="${na ? "var(--pen)" : "var(--leaf)"}" fill-opacity="${na ? 0.85 : 0.6}"/>${T(x, y + 4, na ? "+" : "−", { fs: 12, b: true, c: "#fff" })}`; }).join("")}
  ${T(70, 172, "● Na⁺", { fs: 11, b: true, c: "var(--pen)" })}${T(190, 172, "● Cl⁻", { fs: 11, b: true, c: "var(--leaf)" })}`);

// Diagramas de Lewis de H₂O, CO₂ y N₂.
const lewisSVG = marco("Estructuras de Lewis: agua con dos pares solitarios en el oxígeno, dióxido de carbono con dos dobles enlaces y nitrógeno con un triple enlace", `
  ${T(52, 26, "H₂O", { fs: 12, b: true, c: "var(--pen)" })}${T(52, 84, "H − Ö − H", { fs: 15, b: true })}${T(52, 106, "2 pares libres", { fs: 9.5, c: "var(--muted)" })}
  ${T(140, 26, "CO₂", { fs: 12, b: true, c: "var(--red)" })}${T(140, 84, "O = C = O", { fs: 15, b: true })}${T(140, 106, "2 dobles enlaces", { fs: 9.5, c: "var(--muted)" })}
  ${T(222, 26, "N₂", { fs: 12, b: true, c: "var(--leaf)" })}${T(222, 84, "N ≡ N", { fs: 15, b: true })}${T(222, 106, "triple enlace", { fs: 9.5, c: "var(--muted)" })}
  <path d="M14 124 H 246" stroke="var(--line)"/>${T(130, 146, "cada guion = un par de electrones compartido", { fs: 10.5, b: true })}${T(130, 164, "todos los átomos cumplen el octeto (H: dos)", { fs: 10, c: "var(--muted)" })}`);

// Mar de electrones del enlace metálico.
const metalSVG = marco("Enlace metálico: red de cationes metálicos sumergidos en un mar de electrones libres que se mueven por todo el metal", `
  <rect x="20" y="24" width="220" height="124" rx="12" fill="var(--sun)" fill-opacity=".12" stroke="var(--sun)" stroke-width="2"/>
  ${Array.from({ length: 15 }, (_, i) => { const x = 46 + (i % 5) * 42, y = 50 + Math.floor(i / 5) * 38; return `<circle cx="${x}" cy="${y}" r="12" fill="var(--red)" fill-opacity=".75"/>${T(x, y + 4, "+", { fs: 13, b: true, c: "#fff" })}`; }).join("")}
  ${[[66, 66], [110, 40], [150, 72], [196, 104], [88, 110], [130, 136], [176, 46], [214, 76], [40, 90], [108, 92], [170, 118]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="var(--pen)"/>`).join("")}
  ${T(130, 168, "cationes (+) en un mar de electrones (•)", { fs: 11, b: true, c: "var(--muted)" })}`);

// Polaridad y puente de hidrógeno.
const puenteSVG = marco("Puentes de hidrógeno entre moléculas de agua: el hidrógeno positivo de una molécula atrae al oxígeno negativo de otra", `
  ${agua(70, 70, 1.15)}${agua(178, 70, 1.15, 30)}${agua(124, 128, 1.15, -20)}
  <path d="M84 84 L 112 116" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><path d="M164 86 L 136 116" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><path d="M84 70 L 164 70" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>
  ${T(130, 24, "puentes de hidrógeno (- - -)", { fs: 12, b: true, c: "var(--pen)" })}${T(130, 172, "por eso el agua hierve a 100 °C", { fs: 10.5, c: "var(--muted)" })}`);

module.exports = tema({
  titulo: "El enlace químico y las propiedades de las sustancias",
  minutos: 120,
  secciones: [3, 4, 5],
  objetivos: [
    "Explicar por qué se unen los átomos a partir de la estabilidad energética y la regla del octeto",
    "Describir el enlace iónico, el covalente y el metálico y predecir el tipo de enlace a partir de la electronegatividad",
    "Representar moléculas sencillas con estructuras de Lewis y deducir su geometría y polaridad",
    "Identificar las fuerzas intermoleculares y relacionarlas con los puntos de fusión y ebullición y la solubilidad",
    "Relacionar el tipo de enlace con las propiedades de las sustancias y con sus aplicaciones",
    "Formular y nombrar compuestos inorgánicos binarios y algunos compuestos de interés según la IUPAC",
  ],
  claves: ["enlace químico", "regla del octeto", "enlace iónico", "red cristalina", "enlace covalente", "estructura de Lewis", "molécula", "polaridad", "electronegatividad", "enlace metálico", "fuerzas intermoleculares", "puente de hidrógeno", "sólido covalente", "formulación", "óxido", "hidruro"],
  pregunta: {
    texto: "El diamante y el grafito de un lápiz están hechos solo de carbono. ¿Por qué uno es el material más duro y el otro se deshace al escribir?",
    respuesta: "Por cómo están <mark>enlazados</mark> sus átomos. En el <b>diamante</b>, cada carbono se une con cuatro enlaces covalentes a otros cuatro en una red tridimensional rígida: para rayarlo hay que romper muchísimos enlaces fuertes. En el <b>grafito</b>, cada carbono se une a tres formando láminas hexagonales; las láminas se mantienen juntas solo por <b>fuerzas débiles</b> y resbalan unas sobre otras, dejando un rastro gris en el papel. La misma sustancia, enlazada de otra forma, tiene propiedades opuestas.",
  },
  lectura: {
    titulo: "El material de un átomo de grosor",
    html: `<p>En 2004, dos físicos de la Universidad de Mánchester, Andre Geim y Konstantin Novoselov, hicieron algo aparentemente infantil: pegaron cinta adhesiva sobre un trozo de grafito, la despegaron y repitieron la operación una y otra vez con los restos. Al final obtuvieron láminas de carbono de un solo átomo de grosor. Acababan de aislar el <b>grafeno</b>, y seis años después recibieron el premio Nobel de Física.</p><p>El grafeno es una red hexagonal de átomos de carbono unidos por enlaces covalentes muy fuertes. Es unas doscientas veces más resistente que el acero, flexible, casi transparente y conduce la electricidad y el calor mejor que el cobre, porque uno de los electrones de cada carbono queda libre para moverse por toda la lámina. Hoy se investiga para baterías que se carguen en minutos, pantallas plegables, filtros que potabilicen el agua del mar o sensores médicos. Todo ello depende de una sola cosa: cómo se unen los átomos. En este tema aprenderás por qué los átomos se enlazan, qué tipos de enlace existen y cómo el enlace explica que la sal se disuelva, que los metales brillen o que el agua sea líquida.</p>`,
  },
  bloques: [
    { h: "¿Por qué se unen los átomos?", p: [
      "Salvo los gases nobles, los átomos casi nunca están aislados en la naturaleza: se unen formando moléculas, cristales o metales. Un <mark>enlace químico</mark> es la fuerza que mantiene unidos a dos o más átomos. Los átomos se enlazan porque, al hacerlo, el conjunto alcanza una <b>energía menor</b> que la de los átomos separados, es decir, se vuelve más estable. Cuando dos átomos se acercan, sus núcleos atraen los electrones del otro, pero también se repelen los núcleos entre sí y los electrones entre sí. A una cierta distancia, la <b>distancia de enlace</b>, la energía es mínima y el enlace se forma.",
      "Una regla práctica para predecir los enlaces es la <mark>regla del octeto</mark>, propuesta por Lewis y Kossel en 1916: los átomos tienden a ganar, perder o compartir electrones hasta tener ocho en su capa de valencia, como los gases nobles (el hidrógeno busca dos, como el helio). Los metales, con pocos electrones de valencia, tienden a perderlos; los no metales, con muchos, a ganarlos o compartirlos. Según cómo se consiga el octeto, distinguimos tres tipos de enlace entre átomos: <b>iónico</b> (transferencia de electrones), <b>covalente</b> (compartición) y <b>metálico</b> (electrones compartidos por todo el cristal). La regla tiene excepciones (BF₃, SF₆), pero sirve para la mayoría de compuestos.",
    ], svg: L5.graf("Energía de dos átomos según su distancia: la energía es mínima a la distancia de enlace", "distancia", "energía", [{ p: [[0.04, 1], [0.12, 0.35], [0.22, 0.05], [0.32, 0.22], [0.5, 0.42], [0.75, 0.5], [1, 0.52]], c: "var(--pen)", t: "átomos separados" }], `${T(84, 162, "distancia de enlace", { fs: 10, b: true, c: "var(--red)" })}<circle cx="84" cy="139" r="4" fill="var(--red)"/>`) },
    { h: "Electronegatividad y tipo de enlace", p: [
      "El tipo de enlace depende sobre todo de la diferencia de <mark>electronegatividad</mark> (ΔEN) entre los átomos que se unen. Si los dos átomos son no metales con electronegatividad igual o parecida (ΔEN menor de 0,4), comparten los electrones por igual: el enlace es <b>covalente apolar</b>, como en el H₂, el O₂ o el Cl₂. Si la diferencia es moderada (entre 0,4 y 1,7, aproximadamente), comparten los electrones de forma desigual, porque el átomo más electronegativo los atrae más: el enlace es <b>covalente polar</b>, como en el H–Cl o el O–H del agua.",
      "Si la diferencia es grande (más de 1,7), el átomo más electronegativo arranca el electrón al otro y se forman iones: el enlace es <b>iónico</b>, como en el NaCl (ΔEN = 3,0 − 0,9 = 2,1). En la práctica, la regla rápida es: <b>metal + no metal → iónico</b>; <b>no metal + no metal → covalente</b>; <b>metal + metal → metálico</b>. Hay que entender que no hay fronteras exactas: el enlace químico es un continuo entre el covalente puro y el iónico puro, y muchos enlaces tienen un carácter intermedio. Los valores de electronegatividad de Pauling van de 0,7 (cesio) a 4,0 (flúor).",
    ], svg: L5.escala("Escala de diferencia de electronegatividad y tipo de enlace", "Diferencia de electronegatividad (ΔEN)", [["0", "H–H", "var(--leaf)"], ["0,4", "C–H", "var(--leaf)"], ["0,9", "H–Cl", "var(--pen)"], ["1,4", "O–H", "var(--pen)"], ["2,1", "Na–Cl", "var(--red)"]], "covalente apolar", "iónico") },
    { h: "El enlace iónico", p: [
      "El <mark>enlace iónico</mark> se forma entre un metal y un no metal. El metal cede sus electrones de valencia y se convierte en un catión; el no metal los capta y se convierte en un anión. Por ejemplo, el sodio (1s² 2s² 2p⁶ 3s¹) cede su electrón 3s y queda como Na⁺, con la configuración del neón; el cloro (… 3s² 3p⁵) lo capta y queda como Cl⁻, con la del argón. Los iones de carga opuesta se atraen por <b>fuerzas electrostáticas</b> muy intensas. El magnesio cede dos electrones (Mg²⁺) y el oxígeno capta dos (O²⁻), formando MgO.",
      "Los compuestos iónicos no forman moléculas, sino <mark>redes cristalinas</mark>: estructuras tridimensionales ordenadas en las que cada ion está rodeado de iones de signo contrario. En el NaCl, cada Na⁺ tiene seis Cl⁻ alrededor y viceversa. Por eso la fórmula NaCl no indica una molécula, sino la <b>proporción</b> de iones (1:1). La fórmula se deduce para que la carga total sea cero: el aluminio forma Al³⁺ y el oxígeno O²⁻, así que el óxido es Al₂O₃ (2·3 = 3·2 = 6 cargas). La energía que se desprende al formarse la red, la <b>energía reticular</b>, es mayor cuanto mayores son las cargas y menores los iones; por eso el MgO funde a 2852 °C y el NaCl a 801 °C.",
    ], svg: redSVG },
    { h: "Propiedades de los compuestos iónicos", p: [
      "Las propiedades de las sustancias iónicas se explican por sus fuertes atracciones en la red. Son <b>sólidos</b> a temperatura ambiente con <b>puntos de fusión y ebullición altos</b>, porque hay que romper muchas atracciones intensas. Son <b>duros</b> (difíciles de rayar) pero <b>frágiles</b>: un golpe desplaza las capas, enfrenta iones del mismo signo, que se repelen, y el cristal se rompe en planos limpios (por eso la sal se rompe en cubitos).",
      "Muchos son <b>solubles en agua</b>, porque las moléculas polares del agua rodean a los iones y los separan de la red (<b>solvatación</b>), y en cambio son insolubles en disolventes apolares como la gasolina. En estado sólido <b>no conducen</b> la electricidad, porque los iones están fijos; pero sí la conducen <b>fundidos o disueltos</b>, porque entonces los iones se mueven libremente. Así funcionan los electrolitos de nuestro cuerpo y las bebidas isotónicas: las sales disueltas en la sangre (Na⁺, K⁺, Ca²⁺, Cl⁻) permiten los impulsos nerviosos y la contracción muscular. Ejemplos de compuestos iónicos útiles son la sal común, el carbonato de calcio de las rocas calizas y las conchas, el fluoruro de sodio de la pasta de dientes o el yeso (sulfato de calcio).",
    ], svg: L5.ficha("Propiedades de los compuestos iónicos", "Compuestos iónicos", ["sólidos, p. fusión alto", "duros pero frágiles", "solubles en agua", "conducen fundidos o disueltos"], "var(--pen)") },
    { h: "El enlace covalente y las estructuras de Lewis", p: [
      "El <mark>enlace covalente</mark> se forma entre no metales que comparten pares de electrones para completar su octeto. Cada par compartido es un enlace. Si se comparte un par, el enlace es <b>sencillo</b> (H–H, H–Cl); si se comparten dos, <b>doble</b> (O=O, O=C=O); si se comparten tres, <b>triple</b> (N≡N). Los enlaces múltiples son más cortos y fuertes: el triple enlace del N₂ es tan difícil de romper que el nitrógeno del aire, el 78 %, es casi inerte, y las plantas necesitan bacterias especiales para aprovecharlo.",
      "Para representar las moléculas se usan las <mark>estructuras de Lewis</mark>, en las que los electrones de valencia se dibujan como puntos o rayas. Se dibujan así: se suman los electrones de valencia de todos los átomos; se coloca en el centro el átomo menos electronegativo (nunca el hidrógeno); se unen los átomos con enlaces sencillos; se reparten los electrones restantes como <b>pares solitarios</b> para completar octetos, y si faltan electrones se forman enlaces dobles o triples. En el agua, el oxígeno (6 e⁻) se une a dos hidrógenos y le quedan dos pares solitarios; en el CO₂ (16 e⁻), el carbono forma dos dobles enlaces. El número de enlaces que forma un átomo es su <b>valencia covalente</b>: H, 1; O, 2; N, 3; C, 4.",
    ], svg: lewisSVG, v: ["enl-c", "Estructuras de Lewis: qué son y ejercicios"] },
    { h: "Geometría y polaridad de las moléculas", p: [
      "Las moléculas tienen forma tridimensional. Según la teoría de repulsión de pares electrónicos (<b>TRPECV</b>), los pares de electrones que rodean al átomo central, compartidos o solitarios, se repelen y se colocan lo más lejos posible. Con dos pares de enlace, la molécula es <b>lineal</b> (CO₂, 180°); con tres, <b>triangular plana</b> (BF₃, 120°); con cuatro, <b>tetraédrica</b> (CH₄, 109,5°). Si algunos pares son solitarios, la forma cambia: el NH₃ es una <b>pirámide</b> (107°) y el H₂O es <b>angular</b> (104,5°), porque los pares solitarios ocupan más espacio y cierran el ángulo.",
      "La geometría decide si una molécula es <mark>polar</mark>. Un enlace es polar si une átomos de distinta electronegatividad: se forma un dipolo con una carga parcial negativa (δ−) en el átomo más electronegativo y una positiva (δ+) en el otro. Pero una molécula con enlaces polares puede ser apolar si su forma es simétrica y los dipolos se anulan: el CO₂, lineal, es apolar, igual que el CH₄. En cambio, el agua, angular, es <b>muy polar</b>: el oxígeno queda negativo y los hidrógenos positivos. Esa polaridad explica que el agua disuelva la sal y el azúcar y que un chorro de agua se desvíe al acercarle un globo frotado.",
    ], svg: L6.tabla("Geometría y polaridad de algunas moléculas", ["Molécula", "Forma", "Polar"], [["CO₂", "lineal", "no"], ["CH₄", "tetraédrica", "no"], ["NH₃", "piramidal", "sí"], ["H₂O", "angular", "sí"], ["HCl", "lineal", "sí"]]) },
    { h: "Sustancias moleculares y sólidos covalentes", p: [
      "Las sustancias covalentes pueden ser de dos tipos muy diferentes. Las <b>sustancias moleculares</b> están formadas por moléculas independientes (O₂, H₂O, CO₂, azúcar). Los enlaces dentro de cada molécula son fuertes, pero entre unas moléculas y otras solo hay fuerzas débiles. Por eso suelen ser <b>gases o líquidos</b> a temperatura ambiente, o sólidos blandos con <b>puntos de fusión bajos</b> (la cera, el yodo, el hielo), no conducen la electricidad y se disuelven mejor en disolventes de polaridad parecida: «lo semejante disuelve a lo semejante».",
      "Los <mark>sólidos covalentes</mark> o redes covalentes son cristales en los que todos los átomos están unidos por enlaces covalentes formando una red gigante. El <b>diamante</b> (cada C unido a 4 C), el <b>cuarzo</b> (SiO₂, cada Si unido a 4 O) o el carburo de silicio son <b>durísimos</b>, tienen <b>puntos de fusión altísimos</b> (el diamante, unos 3550 °C), son insolubles y no conducen la electricidad. El <b>grafito</b> y el grafeno son excepciones: sus láminas tienen un electrón deslocalizado por átomo, por lo que conducen. Otras formas del carbono son los <b>fullerenos</b>, como el C₆₀, con forma de balón de fútbol, y los <b>nanotubos</b>, cilindros de grafeno muy resistentes.",
    ], svg: L5.compara("Sustancias moleculares frente a sólidos covalentes", ["Moleculares", ["H₂O, CO₂, O₂", "gases o líquidos", "p. fusión bajo", "blandas", "no conducen"]], ["Red covalente", ["diamante, SiO₂", "sólidos", "p. fusión muy alto", "durísimos", "no conducen*"]], "var(--leaf)", "var(--pen)") },
    { h: "El enlace metálico", p: [
      "Los metales tienen pocos electrones de valencia y baja electronegatividad. En el <mark>enlace metálico</mark>, los átomos ceden sus electrones de valencia a un fondo común: el metal es una red ordenada de <b>cationes</b> sumergida en un «<b>mar de electrones</b>» que se mueven libremente por todo el cristal y que mantienen unidos a los cationes. Este modelo sencillo explica casi todas las propiedades metálicas.",
      "Los metales son <b>buenos conductores</b> de la electricidad y del calor, porque sus electrones libres transportan carga y energía; el cobre y la plata son los mejores. Tienen <b>brillo metálico</b>, porque los electrones absorben y reemiten la luz. Son <b>dúctiles</b> (se estiran en hilos) y <b>maleables</b> (se extienden en láminas): al golpearlos, las capas de cationes se deslizan sin romperse, porque el mar de electrones se reajusta; con el papel de aluminio o los cables lo comprobamos a diario. Sus puntos de fusión son muy variados, desde el mercurio, líquido a temperatura ambiente, hasta el wolframio, que funde a 3422 °C. Mezclando metales se obtienen <b>aleaciones</b> con propiedades mejoradas: el acero (hierro y carbono), el bronce (cobre y estaño) o el latón (cobre y cinc).",
    ], svg: metalSVG, v: ["enl-a", "Qué es un enlace químico: iónico, covalente y metálico"] },
    { h: "Las fuerzas intermoleculares", p: [
      "Entre las moléculas de las sustancias covalentes actúan <mark>fuerzas intermoleculares</mark>, mucho más débiles que los enlaces, pero responsables de que existan líquidos y sólidos moleculares. Las <b>fuerzas de dispersión</b> (de London) aparecen en todas las moléculas, incluso las apolares, por dipolos instantáneos que se forman al moverse los electrones; crecen con el tamaño de la molécula, por eso el flúor y el cloro son gases, el bromo es líquido y el yodo es sólido. Las fuerzas <b>dipolo-dipolo</b> se dan entre moléculas polares, como el HCl, que se atraen por sus polos opuestos.",
      "El <mark>puente de hidrógeno</mark> es la fuerza intermolecular más intensa. Se forma cuando un hidrógeno unido a un átomo muy electronegativo y pequeño (F, O o N) es atraído por un par solitario de otro de esos átomos de una molécula vecina. Gracias a los puentes de hidrógeno, el agua es líquida a temperatura ambiente (el H₂S, de masa parecida, es un gas), tiene un calor específico muy alto que regula el clima, y el hielo es menos denso que el agua y flota, lo que protege la vida bajo los lagos helados. Los puentes de hidrógeno también mantienen unidas las dos hebras del ADN y dan forma a las proteínas.",
    ], svg: puenteSVG, v: ["enl-b", "Fuerzas de Van der Waals"] },
    { h: "El enlace y las propiedades de las sustancias", p: [
      "Conociendo el tipo de enlace se pueden predecir las propiedades de una sustancia, y al revés: a partir de sus propiedades se deduce su enlace. Si una sustancia funde a alta temperatura, es soluble en agua y conduce disuelta, pero no en estado sólido, es <b>iónica</b>. Si es un gas o un líquido volátil que no conduce, es <b>molecular</b>. Si es muy dura, funde a más de 1500 °C y no conduce ni se disuelve, es una <b>red covalente</b>. Si brilla, conduce en estado sólido y se puede estirar, es <b>metálica</b>.",
      "Este razonamiento tiene aplicaciones prácticas. Los ingenieros de materiales eligen sustancias según el enlace: cerámicas iónicas y covalentes para soportar altas temperaturas (losetas del transbordador espacial, frenos de cerámica), metales para conducir y resistir esfuerzos, polímeros moleculares para ser ligeros y aislantes. En la cocina, sabemos que el aceite (apolar) no se mezcla con el vinagre (polar, con agua) salvo con un emulsionante como la yema de huevo, cuya lecitina tiene una parte polar y otra apolar. Y en medicina, la polaridad de un fármaco decide si atraviesa las membranas celulares, que son apolares por dentro.",
    ], svg: L6.tabla("Tipo de enlace y propiedades de las sustancias", ["Sustancia", "Fusión", "Conduce"], [["Iónica (NaCl)", "alta", "fundida/disuelta"], ["Molecular (H₂O)", "baja", "no"], ["Red covalente", "muy alta", "no (salvo grafito)"], ["Metálica (Cu)", "variable", "sí, sólida"]]) },
    { h: "Formulación inorgánica: compuestos binarios", p: [
      "Para comunicarse sin ambigüedad, los químicos siguen las normas de la <b>IUPAC</b>. En los compuestos binarios (de dos elementos) se escribe primero el elemento menos electronegativo y después el más electronegativo, y los subíndices se deducen intercambiando los <b>números de oxidación</b> (las cargas que tendrían los átomos si el enlace fuese iónico). El oxígeno actúa casi siempre con −2, el hidrógeno con +1 (−1 frente a metales), los alcalinos con +1 y los alcalinotérreos con +2.",
      "Los <mark>óxidos</mark> combinan un elemento con oxígeno: Fe₂O₃ se nombra trióxido de dihierro (nomenclatura de composición, con prefijos mono-, di-, tri-, tetra-, penta-) u óxido de hierro(III) (con números de oxidación entre paréntesis). El CO₂ es dióxido de carbono. Los <b>hidruros</b> combinan un metal con hidrógeno (NaH, hidruro de sodio), y los no metales forman compuestos con nombre propio como el agua (H₂O), el amoniaco (NH₃) o el metano (CH₄); con los halógenos y el azufre forman haluros de hidrógeno (HCl, cloruro de hidrógeno, que disuelto en agua es el ácido clorhídrico). Las <b>sales binarias</b> combinan un metal con un no metal: NaCl (cloruro de sodio), CaF₂ (difluoruro de calcio o fluoruro de calcio), FeS (sulfuro de hierro(II)). Con estas reglas puedes nombrar cientos de sustancias.",
    ], svg: L6.tabla("Ejemplos de formulación de compuestos binarios", ["Fórmula", "Composición", "Con n.º oxid."], [["Fe₂O₃", "trióxido de dihierro", "óxido de hierro(III)"], ["CO₂", "dióxido de carbono", "—"], ["CaH₂", "dihidruro de calcio", "hidruro de calcio"], ["CuCl₂", "dicloruro de cobre", "cloruro de cobre(II)"]]), v: ["enl-d", "Nomenclatura de óxidos, hidruros e hidróxidos"] },
    { h: "Compuestos de interés y química del carbono", p: [
      "Además de los binarios, hay compuestos inorgánicos de tres elementos muy importantes. Los <b>hidróxidos</b> (metal + grupo OH⁻) son bases: el NaOH (hidróxido de sodio, sosa cáustica) se usa para fabricar jabón y desatascar tuberías; el Ca(OH)₂ es la cal apagada. Los <b>oxoácidos</b> contienen hidrógeno, un no metal y oxígeno: el H₂SO₄ (ácido sulfúrico) es el compuesto industrial más producido del mundo y se usa en baterías y fertilizantes; el HNO₃ (ácido nítrico), en abonos y explosivos. Sus <b>oxosales</b>, como el CaCO₃ (carbonato de calcio) o el KNO₃ (nitrato de potasio), forman rocas, abonos y la pólvora.",
      "El carbono merece un capítulo propio: puede formar cuatro enlaces covalentes y unirse a otros carbonos en cadenas y anillos casi infinitos, por eso existen más de cien millones de compuestos orgánicos. Los <b>hidrocarburos</b> (C y H) son la base de los combustibles: metano (CH₄), propano (C₃H₈), octano de la gasolina. Con grupos funcionales aparecen los <b>alcoholes</b> (–OH, como el etanol), los <b>ácidos carboxílicos</b> (–COOH, como el ácido acético del vinagre), las <b>aminas</b> y los <b>ésteres</b> de los aromas. Y uniendo miles de unidades pequeñas se forman los <b>polímeros</b>: los plásticos, pero también las proteínas, el almidón y el ADN de los seres vivos.",
    ], svg: arbol("Familias de compuestos de interés", "Compuestos", [["Hidróxidos", "NaOH, Ca(OH)₂: bases"], ["Oxoácidos", "H₂SO₄, HNO₃: ácidos"], ["Oxosales", "CaCO₃, KNO₃"], ["Orgánicos", "CH₄, etanol, polímeros"]]) },
  ],
  figura: { titulo: "El enlace químico", items: [["Iónico", "metal + no metal", "red cristalina", "NaCl"], ["Covalente", "no metales", "Lewis · polaridad", "H₂O, diamante"], ["Metálico", "mar de e⁻", "conduce, brilla", "Cu, Fe"], ["Intermolec.", "dispersión", "dipolo-dipolo", "puente de H"]] },
  video: ["enl-a", "Qué es un enlace químico: iónico, covalente y metálico"],
  ejemplos: [
    ["Predice el tipo de enlace en KBr, CH₄, Cu y O₂ con la electronegatividad (K 0,8; Br 2,8; C 2,5; H 2,1; O 3,5).", ["KBr: ΔEN = 2,0 > 1,7 → iónico (metal + no metal).", "CH₄: ΔEN = 0,4 → covalente casi apolar.", "Cu: metal + metal → metálico.", "O₂: ΔEN = 0 → covalente apolar (doble enlace)."], "Iónico, covalente, metálico y covalente apolar."],
    ["Explica la formación del óxido de aluminio con la regla del octeto y escribe su fórmula.", ["Al (grupo 13) pierde 3 e⁻ → Al³⁺ (configuración del neón).", "O (grupo 16) gana 2 e⁻ → O²⁻ (configuración del neón).", "Neutralidad: 2 Al³⁺ (+6) y 3 O²⁻ (−6)."], "Al₂O₃."],
    ["Dibuja la estructura de Lewis del amoniaco (NH₃) y deduce su geometría y polaridad.", ["Electrones de valencia: N 5 + 3·1 = 8 e⁻ (4 pares).", "N central unido a 3 H con enlaces sencillos (3 pares) y 1 par solitario.", "4 pares alrededor del N → base tetraédrica; con 1 par solitario la forma es piramidal (107°).", "Enlaces N–H polares que no se anulan."], "Piramidal y polar."],
    ["¿Por qué el CO₂ es apolar si sus enlaces C=O son polares?", ["Cada enlace C=O es polar: el O (3,5) atrae más que el C (2,5).", "La molécula es lineal (O=C=O, 180°).", "Los dos dipolos son iguales y opuestos y se anulan."], "Por su geometría lineal y simétrica."],
    ["Ordena por punto de ebullición creciente CH₄, H₂O y H₂S y justifícalo.", ["CH₄: apolar, solo fuerzas de dispersión débiles → el más bajo (−162 °C).", "H₂S: polar, dipolo-dipolo → intermedio (−60 °C).", "H₂O: puentes de hidrógeno → el más alto (100 °C)."], "CH₄ &lt; H₂S &lt; H₂O."],
    ["Formula o nombra: a) óxido de hierro(II); b) PbO₂; c) cloruro de calcio; d) N₂O₅.", ["a) Fe²⁺ y O²⁻ → FeO.", "b) Dióxido de plomo u óxido de plomo(IV).", "c) Ca²⁺ y Cl⁻ → CaCl₂.", "d) Pentaóxido de dinitrógeno."], "FeO; dióxido de plomo; CaCl₂; pentaóxido de dinitrógeno."],
  ],
  errores: [
    "Pensar que el NaCl está formado por moléculas: es una red de iones y la fórmula indica solo la proporción.",
    "Creer que los compuestos iónicos conducen siempre: en estado sólido no, solo fundidos o disueltos.",
    "Confundir enlace polar con molécula polar: una molécula simétrica (CO₂, CH₄) puede ser apolar.",
    "Pensar que al hervir agua se rompen los enlaces O–H: se rompen los puentes de hidrógeno entre moléculas.",
    "Poner el hidrógeno como átomo central en las estructuras de Lewis: solo forma un enlace.",
    "Al formular, no comprobar la neutralidad: los subíndices deben hacer que la suma de cargas sea cero.",
  ],
  ejercicios: {
    b: [
      ["¿Por qué se unen los átomos? Enuncia la regla del octeto.", "Porque el conjunto enlazado tiene menos energía y es más estable que los átomos separados. Regla del octeto: los átomos tienden a ganar, perder o compartir electrones hasta tener 8 en su última capa, como los gases nobles."],
      ["Indica el tipo de enlace: a) MgCl₂; b) H₂O; c) Fe; d) Cl₂; e) CaO.", "a) Iónico. b) Covalente polar. c) Metálico. d) Covalente apolar. e) Iónico."],
      ["¿Qué ion forman el litio, el calcio, el azufre y el bromo? Justifícalo con su grupo.", "Li⁺ (grupo 1, pierde 1 e⁻); Ca²⁺ (grupo 2, pierde 2); S²⁻ (grupo 16, gana 2); Br⁻ (grupo 17, gana 1)."],
      ["Escribe la fórmula de los compuestos iónicos que forman: a) K y O; b) Mg y N; c) Al y Cl.", "a) K₂O. b) Mg₃N₂ (Mg²⁺ y N³⁻). c) AlCl₃."],
      ["Enumera cuatro propiedades de los compuestos iónicos.", "Sólidos con alto punto de fusión; duros pero frágiles; solubles en agua y no en disolventes apolares; conducen la electricidad fundidos o disueltos, no en estado sólido."],
      ["Dibuja la estructura de Lewis de H₂, Cl₂ y HCl.", "H–H (un par compartido). Cl–Cl con tres pares solitarios en cada Cl. H–Cl con tres pares solitarios en el Cl."],
      ["¿Cuántos enlaces covalentes suelen formar H, O, N y C?", "H: 1; O: 2; N: 3; C: 4."],
      ["Explica el modelo del mar de electrones.", "El metal es una red de cationes rodeada por electrones de valencia libres que se mueven por todo el cristal y mantienen unidos los cationes."],
      ["¿Por qué los metales conducen la electricidad y se pueden estirar en hilos?", "Conducen porque tienen electrones libres que transportan la carga. Son dúctiles porque las capas de cationes pueden deslizarse sin romperse: el mar de electrones se reajusta."],
      ["Cita los tres tipos de fuerzas intermoleculares de más débil a más fuerte.", "Fuerzas de dispersión (London) &lt; dipolo-dipolo &lt; puentes de hidrógeno."],
      ["Nombra: CO, SO₃, NaH, KCl.", "Monóxido de carbono; trióxido de azufre; hidruro de sodio; cloruro de potasio."],
      ["Formula: dióxido de nitrógeno, óxido de calcio, amoniaco, sulfuro de hidrógeno.", "NO₂; CaO; NH₃; H₂S."],
    ],
    m: [
      ["Calcula ΔEN y clasifica los enlaces: N–H (3,0 y 2,1), Na–F (0,9 y 4,0), C–C, S–O (2,5 y 3,5).", "N–H: 0,9 → covalente polar. Na–F: 3,1 → iónico. C–C: 0 → covalente apolar. S–O: 1,0 → covalente polar."],
      ["Explica por qué el MgO tiene un punto de fusión (2852 °C) mucho mayor que el NaCl (801 °C).", "Los iones del MgO tienen carga doble (Mg²⁺, O²⁻) y son más pequeños, así que la atracción electrostática y la energía reticular son mucho mayores; hace falta más energía para romper la red."],
      ["¿Por qué un cristal de sal se rompe al golpearlo y una lámina de cobre se dobla?", "En la sal, el golpe desplaza las capas y enfrenta iones del mismo signo, que se repelen y fracturan el cristal. En el cobre, los cationes se desplazan, pero el mar de electrones los sigue manteniendo unidos."],
      ["Dibuja la estructura de Lewis del CH₄ y del CO₂ e indica su geometría.", "CH₄: C central con 4 enlaces sencillos a H, sin pares solitarios; tetraédrica (109,5°). CO₂: O=C=O con dos pares solitarios en cada O; lineal (180°)."],
      ["Dibuja la estructura de Lewis del N₂ y explica por qué el nitrógeno del aire es poco reactivo.", ":N≡N: con un par solitario en cada N. El triple enlace es muy corto y muy fuerte (945 kJ/mol), así que cuesta mucha energía romperlo."],
      ["Explica por qué el agua es una molécula polar y el CH₄ no.", "En el agua, los enlaces O–H son polares y la molécula es angular, así que los dipolos no se anulan. En el CH₄, los enlaces C–H son poco polares y la forma tetraédrica es simétrica: se anulan."],
      ["¿Por qué el yodo (I₂) se disuelve en gasolina pero no en agua, y la sal al revés?", "«Lo semejante disuelve a lo semejante»: el I₂ es apolar y se disuelve en un disolvente apolar; la sal es iónica y se disuelve en un disolvente polar como el agua, que solvata sus iones."],
      ["Explica por qué el F₂ es gas, el Br₂ líquido y el I₂ sólido a temperatura ambiente.", "Son moléculas apolares unidas solo por fuerzas de dispersión, que aumentan con el tamaño y el número de electrones. El I₂ es la mayor, con fuerzas más intensas, y es sólido."],
      ["Una sustancia funde a 1600 °C, es muy dura, insoluble y no conduce ni fundida. ¿Qué tipo de sustancia es? Da un ejemplo.", "Un sólido covalente (red covalente). Ejemplo: cuarzo (SiO₂) o diamante."],
      ["Describe las diferencias entre diamante y grafito según su enlace.", "Diamante: cada C unido a 4 C en red tridimensional, durísimo, aislante. Grafito: cada C unido a 3 C en láminas con un electrón deslocalizado, blando (las láminas resbalan), conductor."],
      ["Nombra con las dos nomenclaturas: Fe₂O₃, CuO, SnO₂, Cu₂O.", "Trióxido de dihierro / óxido de hierro(III); monóxido de cobre / óxido de cobre(II); dióxido de estaño / óxido de estaño(IV); monóxido de dicobre / óxido de cobre(I)."],
      ["Indica el número de oxidación de cada elemento en: H₂SO₄, NaOH, CaCO₃.", "H₂SO₄: H +1, S +6, O −2. NaOH: Na +1, O −2, H +1. CaCO₃: Ca +2, C +4, O −2."],
    ],
    a: [
      ["Con la TRPECV, deduce la geometría de BF₃, H₂O y SiH₄ y explica cuáles son polares.", "BF₃: 3 pares de enlace, triangular plana (120°), apolar porque los dipolos se anulan. H₂O: 2 de enlace y 2 solitarios, angular (104,5°), polar. SiH₄: 4 de enlace, tetraédrica, apolar."],
      ["El HF hierve a 20 °C y el HCl a −85 °C, aunque el HF es más ligero. Explícalo.", "Entre moléculas de HF hay puentes de hidrógeno, porque el F es muy pequeño y electronegativo; entre las de HCl solo hay fuerzas dipolo-dipolo y de dispersión, más débiles. Romper los puentes de hidrógeno cuesta más energía."],
      ["Explica por qué el hielo flota y qué consecuencias tiene para la vida en los lagos.", "Al congelarse, las moléculas de agua forman una red abierta de puentes de hidrógeno con huecos, de modo que el hielo es menos denso (0,92 g/cm³) que el agua líquida. El hielo queda en la superficie y aísla el agua de debajo, que sigue líquida a unos 4 °C y permite la vida durante el invierno."],
      ["Tienes tres sólidos blancos: A funde a 801 °C y conduce disuelto; B funde a 186 °C y no conduce disuelto; C funde a 1710 °C y no conduce. Identifica su tipo de enlace y propón cuáles podrían ser (sal, azúcar, arena).", "A: iónico (sal, NaCl). B: molecular (azúcar, sacarosa; se disuelve pero no forma iones). C: red covalente (arena, SiO₂)."],
      ["Explica por qué la mayonesa necesita yema de huevo para que el aceite y el vinagre no se separen.", "El aceite es apolar y el vinagre (agua) es polar: no se mezclan. La lecitina de la yema es anfipática: su parte apolar se une al aceite y su parte polar al agua, de modo que rodea las gotitas de aceite y forma una emulsión estable."],
      ["Formula: a) hidróxido de hierro(III); b) ácido sulfúrico; c) carbonato de sodio; d) nitrato de potasio; e) sulfato de cobre(II).", "a) Fe(OH)₃. b) H₂SO₄. c) Na₂CO₃. d) KNO₃. e) CuSO₄."],
      ["Un compuesto contiene un metal X del grupo 2 y un no metal Y del periodo 2 que forma un ion Y³⁻. Escribe su fórmula general y ponle nombre si X es magnesio.", "X²⁺ y Y³⁻ → X₃Y₂. Y³⁻ del periodo 2 es el nitrógeno (N³⁻). Con magnesio: Mg₃N₂, dinitruro de trimagnesio (nitruro de magnesio)."],
      ["El grafeno conduce la electricidad mejor que el cobre y es más resistente que el acero. Explica ambas propiedades con su enlace y propone una aplicación.", "Cada C forma tres enlaces covalentes muy fuertes en una red hexagonal plana, lo que le da resistencia. El cuarto electrón de cada C queda deslocalizado por toda la lámina y puede moverse libremente, lo que lo hace conductor. Aplicaciones: baterías de carga rápida, pantallas flexibles, sensores, filtros de desalación."],
    ],
  },
  quiz: [
    ["Los átomos se enlazan porque…", ["ganan masa", "el conjunto tiene menos energía", "pierden protones", "aumenta su volumen"], 1, "El enlace estabiliza el sistema."],
    ["Según la regla del octeto, los átomos buscan…", ["8 protones", "8 electrones en la última capa", "8 neutrones", "8 enlaces"], 1, "Como los gases nobles."],
    ["Un metal y un no metal suelen formar enlace…", ["covalente", "metálico", "iónico", "de hidrógeno"], 2, "Hay transferencia de electrones."],
    ["Con una diferencia de electronegatividad de 2,5 el enlace es…", ["covalente apolar", "covalente polar", "iónico", "metálico"], 2, "Mayor de 1,7."],
    ["La fórmula NaCl indica…", ["una molécula", "la proporción de iones en la red", "dos átomos unidos", "un gas"], 1, "Es una red cristalina."],
    ["Los compuestos iónicos conducen la electricidad…", ["siempre", "fundidos o disueltos", "solo en estado sólido", "nunca"], 1, "Los iones deben poder moverse."],
    ["El oxígeno y el aluminio forman…", ["AlO", "Al₂O₃", "Al₃O₂", "AlO₂"], 1, "Al³⁺ y O²⁻."],
    ["En el N₂ el enlace es…", ["sencillo", "doble", "triple", "iónico"], 2, "N≡N."],
    ["La molécula de agua es…", ["lineal y apolar", "angular y polar", "tetraédrica y apolar", "plana y apolar"], 1, "104,5° con dos pares solitarios."],
    ["El CO₂ es apolar porque…", ["sus enlaces son apolares", "es lineal y los dipolos se anulan", "es iónico", "no tiene electrones"], 1, "Simetría."],
    ["La geometría del metano (CH₄) es…", ["lineal", "plana", "tetraédrica", "piramidal"], 2, "109,5°."],
    ["¿Cuál es una red covalente?", ["sal", "hielo", "diamante", "cobre"], 2, "Todos los C unidos covalentemente."],
    ["El grafito conduce la electricidad porque…", ["es un metal", "tiene electrones deslocalizados en sus láminas", "es iónico", "tiene puentes de hidrógeno"], 1, "Un electrón libre por carbono."],
    ["El modelo del mar de electrones explica el enlace…", ["iónico", "covalente", "metálico", "de hidrógeno"], 2, "Cationes en electrones libres."],
    ["La ductilidad de los metales se debe a que…", ["sus iones se repelen", "las capas de cationes se deslizan sin romperse", "son líquidos", "son moléculas"], 1, "El mar de electrones se reajusta."],
    ["La fuerza intermolecular más intensa es…", ["la de dispersión", "dipolo-dipolo", "el puente de hidrógeno", "la gravedad"], 2, "Con H unido a F, O o N."],
    ["El agua hierve a 100 °C y no a −80 °C gracias a…", ["sus enlaces iónicos", "los puentes de hidrógeno", "su masa", "su color"], 1, "Hay que romperlos para separar moléculas."],
    ["«Lo semejante disuelve a lo semejante» significa que…", ["todo se disuelve en agua", "los polares se disuelven en polares y los apolares en apolares", "los metales se disuelven en agua", "nada se disuelve"], 1, "Aceite en gasolina, sal en agua."],
    ["Fe₂O₃ se nombra…", ["óxido de hierro(II)", "óxido de hierro(III)", "dióxido de hierro", "hierro trioxígeno"], 1, "El hierro actúa con +3."],
    ["La fórmula del amoniaco es…", ["NH₄", "NH₃", "N₂H", "HN₃"], 1, "Nombre aceptado por la IUPAC."],
  ],
  examen: [
    ["El K y el S forman…", ["KS", "K₂S", "KS₂", "K₂S₃"], 1, "K⁺ y S²⁻."],
    ["Una sustancia gaseosa a temperatura ambiente que no conduce es probablemente…", ["iónica", "metálica", "molecular", "red covalente"], 2, "Fuerzas intermoleculares débiles."],
    ["El NH₃ tiene forma…", ["plana", "piramidal", "lineal", "tetraédrica regular"], 1, "Un par solitario."],
    ["Al fundir hielo se rompen…", ["enlaces O–H", "puentes de hidrógeno", "enlaces iónicos", "núcleos"], 1, "Fuerzas entre moléculas."],
    ["La energía reticular es mayor cuando los iones…", ["son grandes y de carga baja", "son pequeños y de carga alta", "son neutros", "son gases"], 1, "Más atracción."],
    ["CaCl₂ se nombra…", ["cloruro de calcio", "clorato de calcio", "calcio dicloro", "cloruro cálcico(II)"], 0, "Ca²⁺ y 2 Cl⁻."],
    ["El latón es una aleación de…", ["hierro y carbono", "cobre y cinc", "cobre y estaño", "aluminio y oro"], 1, "El bronce es cobre y estaño."],
    ["Un enlace entre dos átomos de cloro es…", ["iónico", "covalente polar", "covalente apolar", "metálico"], 2, "ΔEN = 0."],
  ],
  feynman: ["Por qué el diamante y el grafito son tan distintos", "Por qué la sal conduce disuelta pero no en sólido", "Por qué el agua es polar y el CO₂ no", "Por qué los metales brillan y se doblan", "Por qué el hielo flota", "Cómo se deduce la fórmula de un compuesto iónico"],
  mapa: ["ENLACE QUÍMICO", [["Iónico", "red, frágil, conduce disuelto"], ["Covalente", "Lewis, geometría, polaridad"], ["Metálico", "mar de e⁻, conduce, dúctil"], ["Intermolecular", "dispersión, dipolo, puente H"]]],
  tarjetas: [
    ["Regla del octeto", "Los átomos buscan 8 e⁻ en su última capa."],
    ["Enlace iónico", "Transferencia de e⁻: metal + no metal; red cristalina."],
    ["Enlace covalente", "Compartición de pares de e⁻ entre no metales."],
    ["Enlace metálico", "Red de cationes en un mar de electrones libres."],
    ["ΔEN", "&lt; 0,4 apolar · 0,4–1,7 polar · &gt; 1,7 iónico."],
    ["Estructura de Lewis", "Electrones de valencia como puntos y rayas."],
    ["Geometrías", "Lineal 180°, triangular 120°, tetraédrica 109,5°."],
    ["Molécula polar", "Dipolos que no se anulan: H₂O, NH₃, HCl."],
    ["Red covalente", "Diamante, cuarzo: durísimos, p. fusión muy alto."],
    ["Puente de hidrógeno", "H unido a F, O o N atraído por otro F, O o N."],
    ["Óxido", "Elemento + oxígeno (−2): Fe₂O₃, CO₂."],
    ["Lo semejante disuelve…", "Polar en polar, apolar en apolar."],
  ],
  glosario: [
    ["Enlace químico", "Fuerza que mantiene unidos a los átomos en una sustancia."],
    ["Regla del octeto", "Tendencia a completar ocho electrones en la capa de valencia."],
    ["Catión", "Ion positivo formado al perder electrones."],
    ["Anión", "Ion negativo formado al ganar electrones."],
    ["Red cristalina", "Estructura ordenada y repetida de iones o átomos."],
    ["Energía reticular", "Energía desprendida al formarse una red iónica."],
    ["Enlace covalente", "Unión por compartición de pares de electrones."],
    ["Par solitario", "Par de electrones de valencia que no forma enlace."],
    ["Dipolo", "Molécula o enlace con un polo positivo y otro negativo."],
    ["Molécula apolar", "Molécula sin dipolo neto, por enlaces apolares o simetría."],
    ["Sólido covalente", "Cristal de átomos unidos todos por enlaces covalentes."],
    ["Aleación", "Mezcla de metales (o metal y otro elemento) con propiedades metálicas."],
    ["Fuerzas de dispersión", "Atracciones débiles por dipolos instantáneos."],
    ["Puente de hidrógeno", "Atracción de un H unido a F, O o N por otro de esos átomos."],
    ["Número de oxidación", "Carga que tendría un átomo si todos sus enlaces fueran iónicos."],
    ["Polímero", "Molécula gigante formada por muchas unidades repetidas."],
  ],
  situacion: {
    titulo: "Detectives de materiales",
    reto: "Un laboratorio ha recibido seis sólidos blancos sin etiqueta: sal, azúcar, arena fina, bicarbonato, cera rallada y polvo de aluminio. Vuestro equipo debe identificarlos por sus propiedades y explicar cada resultado con el tipo de enlace.",
    pasos: [
      "Diseñad las pruebas: aspecto, dureza, solubilidad en agua y en aceite, conductividad (sólido y disuelto) y comportamiento al calentar suavemente.",
      "Haced las pruebas con las normas de seguridad y anotad los resultados en una tabla.",
      "Clasificad cada muestra como iónica, molecular, red covalente o metálica.",
      "Identificad cada sustancia y justificad la identificación con los modelos de enlace.",
      "Redactad una ficha técnica de cada material con su fórmula, su nombre IUPAC y un uso.",
    ],
    producto: "Un informe de identificación con tabla de resultados y fichas técnicas de los seis materiales.",
    evaluacion: ["El diseño de las pruebas es completo y seguro.", "La tabla de resultados es clara y rigurosa.", "La identificación se justifica correctamente con el tipo de enlace.", "Las fórmulas y los nombres siguen las normas de la IUPAC."],
  },
  familias: [
    "Mezclad agua y aceite, agitad y añadid unas gotas de lavavajillas: observad qué pasa y por qué.",
    "Comparad cómo se rompe un terrón de sal y cómo se dobla papel de aluminio.",
    "Frotad un globo en el pelo y acercadlo a un chorro fino de agua del grifo.",
    "Buscad en casa productos con fórmulas químicas en la etiqueta (bicarbonato, sosa, sal) y nombradlas.",
  ],
  saberes: "bloque «B. Un universo de materia y energía»: el enlace químico iónico, covalente y metálico y las fuerzas intermoleculares; relación entre el tipo de enlace y las propiedades de las sustancias; estructuras de Lewis, geometría y polaridad molecular; formulación y nomenclatura de compuestos inorgánicos según las normas de la IUPAC y compuestos de interés en la vida cotidiana y la industria.",
  ideas: [
    "Prueba de conductividad de sustancias sólidas y disueltas con un circuito con LED.",
    "Construcción de modelos moleculares con plastilina y palillos para estudiar la geometría.",
    "Desviación de un chorro de agua y de otro de aceite con un globo cargado.",
    "Concurso de formulación por equipos con tarjetas de iones.",
  ],
  fuentes: [
    { t: "IUPAC: Nomenclatura de Química Inorgánica. Recomendaciones de 2005 (versión en español)", url: "https://iupac.org/what-we-do/books/redbook/" },
    { t: "Premio Nobel de Física 2010: el grafeno", url: "https://www.nobelprize.org/prizes/physics/2010/summary/" },
  ],
});
