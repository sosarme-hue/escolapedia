// Química 2º Bachillerato · Enlace iónico y enlace metálico (nivel libro). Dibujos propios en SVG.
const { pasos, compara, rejilla, escala, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, niveles } = require("./_bach2-qui");

// Red de NaCl vista en un plano: iones alternos.
const redNaCl = marco("Corte de la red cristalina del cloruro de sodio: cada ion sodio rodeado de iones cloruro y al revés", `
  ${[0, 1, 2, 3, 4].map((i) => [0, 1, 2, 3].map((j) => { const na = (i + j) % 2 === 0, x = 50 + i * 40, y = 30 + j * 38;
    return `<circle cx="${x}" cy="${y}" r="${na ? 9 : 15}" fill="${na ? "var(--pen)" : "var(--leaf)"}" opacity=".9"/>${T(x, y + 4, na ? "+" : "−", { fs: 12, b: true, c: "#fff" })}`; }).join("")).join("")}
  ${T(130, 172, "Na⁺ (azul, pequeño) y Cl⁻ (verde, grande): 6 : 6", { fs: 11.5, b: true })}`);

// Mar de electrones.
const marElectrones = marco("Modelo del mar de electrones: cationes metálicos ordenados rodeados de electrones de valencia que se mueven libremente", `
  <rect x="16" y="16" width="228" height="140" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  ${[0, 1, 2, 3, 4].map((i) => [0, 1, 2].map((j) => { const x = 46 + i * 42, y = 46 + j * 40; return `<circle cx="${x}" cy="${y}" r="13" fill="#b45309"/>${T(x, y + 4.5, "+", { fs: 14, b: true, c: "#fff" })}`; }).join("")).join("")}
  ${[[66, 30], [110, 64], [150, 106], [200, 70], [88, 108], [176, 30], [26, 88], [130, 140], [220, 126], [44, 140], [236, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--pen)"/>`).join("")}
  ${T(130, 172, "cationes fijos + electrones deslocalizados", { fs: 11.5, b: true })}`);

const bornHaber = niveles("Ciclo de Born-Haber del cloruro de sodio: sublimación, ionización, disociación, afinidad electrónica y energía de red", [["Na(s) + ½Cl₂", 0.42, "var(--ink)"], ["Na⁺(g) + Cl(g)", 1, "var(--red)"], ["Na⁺ + Cl⁻ (g)", 0.78, "var(--pen)"], ["NaCl(s)", 0.05, "var(--leaf)"]], [[0, 1, "var(--red)", "+725"], [1, 2, "var(--pen)", "−349"], [2, 3, "var(--leaf)", "U"], [0, 3, "var(--muted)", "−411"]], "U = −787 kJ/mol");

module.exports = {
  materia: "Química",
  curso: "2-bachillerato",
  titulo: "Enlace iónico y enlace metálico",
  minutos: 110,
  objetivos: [
    "Explicar por qué se forman los enlaces con la curva de energía potencial y la regla del octeto",
    "Predecir el tipo de enlace a partir de la diferencia de electronegatividad",
    "Describir la formación del enlace iónico y las redes cristalinas iónicas con su índice de coordinación",
    "Calcular la energía de red con el ciclo de Born-Haber y compararla con la ecuación de Born-Landé",
    "Justificar las propiedades de los compuestos iónicos a partir de su estructura",
    "Explicar el enlace metálico con el modelo del mar de electrones y la teoría de bandas, y las propiedades de los metales",
  ],
  claves: ["enlace químico", "regla del octeto", "energía potencial", "enlace iónico", "red cristalina", "índice de coordinación", "energía de red", "ciclo de Born-Haber", "ecuación de Born-Landé", "enlace metálico", "mar de electrones", "teoría de bandas", "semiconductor", "aleación"],
  pregunta: {
    texto: "¿Por qué la sal se rompe en trocitos al golpearla y una cuchara de metal solo se dobla?",
    respuesta: "En la sal, los iones positivos y negativos se alternan en una red rígida. Un golpe desplaza una capa y enfrenta iones de <mark>la misma carga</mark>, que se repelen y parten el cristal. En un metal, los cationes están sumergidos en un «mar» de electrones que se mueven libremente: si una capa se desliza, los electrones siguen manteniéndola unida, y el metal se deforma sin romperse.",
  },
  lectura: {
    titulo: "Del grano de sal al chip de silicio",
    html: `<p>Si pudieras hacerte tan pequeño como un átomo y entrar en un grano de sal, verías un edificio perfecto: iones de sodio y de cloro colocados en los vértices de cubos diminutos, repetidos billones de veces en las tres direcciones. No hay moléculas de «NaCl»: cada ion sodio está rodeado de seis iones cloruro y cada cloruro de seis sodios. Ese orden explica por qué los cristales de sal son cúbicos, por qué funden a 801 °C y por qué se disuelven en agua y conducen la electricidad.</p><p>Ahora entra en un cable de cobre. Allí también hay orden, pero los átomos han soltado sus electrones de valencia, que se mueven por todo el metal como un gas. Por eso el cobre brilla, conduce la corriente y se puede estirar en hilos finísimos. Y si entras en un chip de silicio, encontrarás algo intermedio: un material que apenas conduce, pero que, añadiendo unos pocos átomos de fósforo o de boro, se convierte en el corazón de toda la electrónica. En este tema descubrirás que todas esas propiedades salen de una sola pregunta: cómo se reparten los electrones entre los átomos.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 ¿Por qué se unen los átomos?", p: [
      "Un <mark>enlace químico</mark> es la fuerza que mantiene unidos a los átomos en una sustancia. Los átomos se unen porque el conjunto enlazado tiene <b>menos energía</b> y es más estable que los átomos por separado. Si representamos la energía potencial de dos átomos frente a la distancia entre sus núcleos, al acercarse desde lejos la energía baja (dominan las atracciones entre los núcleos y los electrones del otro átomo), llega a un <b>mínimo</b> y, si se acercan más, sube bruscamente (dominan las repulsiones entre núcleos y entre nubes electrónicas).",
      "La distancia del mínimo es la <b>distancia de enlace</b> y la profundidad del pozo es la <b>energía de enlace</b>, la que hay que aportar para separar los átomos. En 1916, Lewis y Kossel observaron que los gases nobles, con ocho electrones en la última capa, casi no reaccionan, y enunciaron la <b>regla del octeto</b>: los átomos tienden a ganar, perder o compartir electrones hasta tener ocho en su capa de valencia (dos en el caso del hidrógeno). Es una regla útil, aunque con muchas excepciones, que verás en el tema de enlace covalente.",
    ], svg: graf("Curva de energía potencial de dos átomos frente a la distancia entre núcleos: baja hasta un mínimo que marca la distancia de enlace y sube bruscamente al acercarlos más", "distancia entre núcleos", "energía", [{ p: [[0.08, 1], [0.14, 0.5], [0.22, 0.12], [0.3, 0.05], [0.45, 0.22], [0.65, 0.38], [1, 0.45]], c: "var(--pen)", t: "" }], T(96, 152, "d enlace", { fs: 11, b: true, c: "var(--red)" }) + `<path d="M100 139 V 150" stroke="var(--red)" stroke-width="2"/>`) }),
    bloque({ h: "1.2 Tipos de enlace y electronegatividad", p: [
      "El tipo de enlace depende de cómo se reparten los electrones, y eso depende de la <b>electronegatividad</b> de los átomos. Si los dos átomos son muy distintos, uno metálico (baja EI) y otro no metálico (AE muy negativa), uno <b>cede</b> electrones y el otro los <b>capta</b>: se forman iones que se atraen y aparece el <mark>enlace iónico</mark> (NaCl, CaO). Si los dos son no metales con electronegatividades parecidas, ninguno puede arrancar los electrones del otro y los <b>comparten</b>: es el <b>enlace covalente</b> (H₂, H₂O, CH₄).",
      "Si todos los átomos son metálicos, con baja electronegatividad, todos ceden sus electrones de valencia a un fondo común: es el <mark>enlace metálico</mark> (Cu, Fe, Na). Como regla orientativa, una diferencia de electronegatividad mayor de 1,7-2,0 indica un enlace predominantemente iónico; entre 0,4 y 1,7, covalente polar; y menor de 0,4, covalente casi apolar. En realidad no hay fronteras nítidas: todo enlace iónico tiene algo de covalente y al revés. Así, el NaCl (diferencia 2,1) es iónico, el HCl (0,9) es covalente polar y el Cl₂ (0) covalente apolar.",
    ], svg: rejilla("Tipo de enlace según los átomos y la diferencia de electronegatividad", ["Átomos", "Δ EN", "Enlace"], [["metal + no metal", "> 1,7", "iónico"], ["no metales distintos", "0,4 - 1,7", "covalente polar"], ["no metales iguales", "≈ 0", "covalente apolar"], ["metal + metal", "pequeña", "metálico"]], "var(--pen)"), video: V("ion-a", "Tipos de enlace: iónico, covalente y metálico", "tipos de enlace químico") }),
    bloque({ h: "1.3 La formación del enlace iónico", p: [
      "El <mark>enlace iónico</mark> se forma por la atracción electrostática entre iones de carga opuesta, tras la <b>transferencia de electrones</b> de un metal a un no metal. Por ejemplo, el sodio ([Ne] 3s¹) cede su electrón 3s y queda como Na⁺ con la configuración del neón; el cloro ([Ne] 3s² 3p⁵) lo capta y queda como Cl⁻ con la del argón. Ambos alcanzan el octeto. El número de electrones que gana o pierde un átomo al formar un compuesto iónico es su <b>valencia iónica</b> o electrovalencia: +1 para el Na, +2 para el Mg, −1 para el Cl, −2 para el O.",
      "Ahora bien, ¿es favorable energéticamente? Arrancar el electrón del sodio cuesta 496 kJ/mol y el cloro solo devuelve 349 kJ/mol al captarlo: el balance de formar los iones gaseosos es <b>desfavorable</b>. Lo que hace estable el compuesto es la enorme energía que se libera cuando millones de iones de carga opuesta se acercan y se ordenan en una red cristalina: la energía de red. Por eso los compuestos iónicos no existen como pares de iones aislados, sino como <b>sólidos cristalinos</b>. La fórmula (NaCl, CaCl₂) no indica una molécula, sino la proporción de iones que hace el cristal neutro.",
    ], svg: pasos("Formación del cloruro de sodio", ["Na pierde 1 e⁻ → Na⁺ (cuesta 496 kJ/mol)", "Cl gana 1 e⁻ → Cl⁻ (libera 349 kJ/mol)", "Los iones se atraen y forman la red", "La energía de red estabiliza el cristal"], "var(--pen)") }),
    bloque({ h: "1.4 Las redes cristalinas iónicas", p: [
      "En un sólido iónico los iones se colocan en una <mark>red cristalina</mark>, una estructura tridimensional ordenada que se repite en el espacio a partir de una unidad mínima, la <b>celda unidad</b>. El <b>índice de coordinación</b> es el número de iones de signo contrario que rodean a cada ion a la misma distancia. Depende sobre todo de la relación entre los radios del catión y del anión: cuanto más grande es el catión respecto al anión, más aniones caben a su alrededor.",
      "Las estructuras más típicas son: la del <b>cloruro de sodio</b> (cúbica centrada en las caras, índice 6:6), que tienen también el KCl, el MgO o el CaO; la del <b>cloruro de cesio</b> (cúbica simple, 8:8), porque el Cs⁺ es muy grande; la de la <b>fluorita</b>, CaF₂ (8:4), en la que cada Ca²⁺ tiene 8 F⁻ alrededor y cada F⁻ solo 4 Ca²⁺, porque hay el doble de fluoruros; y la de la <b>blenda</b>, ZnS (4:4). Los índices de coordinación deben respetar la fórmula: en el CaF₂, 8 : 4 = 2 : 1 al revés de la proporción de iones. La forma de los cristales que vemos (cubos de sal, octaedros de fluorita) refleja la geometría de la red.",
    ], svg: redNaCl }),
    bloque({ h: "2.1 La energía de red y la ecuación de Born-Landé", p: [
      "La <mark>energía de red</mark> o energía reticular, U, es la energía que se desprende al formarse un mol de cristal iónico a partir de sus iones en estado gaseoso: Na⁺(g) + Cl⁻(g) → NaCl(s), U = −787 kJ/mol. Es negativa (se libera energía) y mide la estabilidad del cristal: cuanto más negativa, más fuerte es el enlace iónico. Algunos libros la definen como la energía para separar el cristal en iones gaseosos, con signo positivo.",
      "Born y Landé calcularon U teóricamente sumando las atracciones y repulsiones electrostáticas de todos los iones de la red: U = − (N<sub>A</sub> · M · z₊ · z₋ · e²) / (4π ε₀ · r₀) · (1 − 1/n), donde M es la <b>constante de Madelung</b> (depende de la geometría de la red: 1,748 para el NaCl), z₊ y z₋ las cargas de los iones, r₀ la distancia entre sus centros (suma de radios) y n el <b>exponente de Born</b> (entre 5 y 12), que tiene en cuenta la repulsión de las nubes electrónicas. Lo importante para razonar es que <b>|U| es proporcional a z₊ · z₋ / r₀</b>: crece mucho con la carga de los iones y disminuye con su tamaño.",
    ], extra: formula("U = − N<sub>A</sub> M z₊ z₋ e² / (4π ε₀ r₀) · (1 − 1/n) ; |U| ∝ z₊ · z₋ / r₀"), svg: compara("Factores de los que depende la energía de red", ["Más carga", ["z₊ · z₋ mayor", "MgO: 2 · 2 = 4", "|U| muy grande", "−3791 kJ/mol"]], ["Más tamaño", ["r₀ mayor", "NaI: 102 + 220", "|U| menor", "−704 kJ/mol"]], "var(--red)", "var(--pen)"), video: V("ion-b", "Ecuación de Born-Landé y ciclo de Born-Haber", "energía reticular Born-Landé") }),
    bloque({ h: "2.2 El ciclo de Born-Haber", p: [
      "La energía de red no se puede medir directamente, porque no se pueden juntar iones gaseosos en el laboratorio. Pero, como la entalpía es una función de estado, se puede calcular con la ley de Hess mediante el <mark>ciclo de Born-Haber</mark> (1919). Se compara la formación directa del compuesto desde sus elementos (entalpía de formación, que sí se mide) con un camino imaginario en etapas: (1) <b>sublimar</b> el metal, Na(s) → Na(g), +107 kJ; (2) <b>ionizar</b> el metal, Na(g) → Na⁺(g), +496 kJ; (3) <b>disociar</b> la molécula del no metal, ½ Cl₂(g) → Cl(g), +122 kJ (la mitad de la energía de enlace); (4) añadir el electrón al no metal (<b>afinidad electrónica</b>), Cl(g) → Cl⁻(g), −349 kJ; y (5) formar la red, U.",
      "Como los dos caminos deben dar lo mismo: ΔH°<sub>f</sub> = ΔH<sub>sub</sub> + EI + ½ D + AE + U. Con ΔH°<sub>f</sub>(NaCl) = −411 kJ/mol se despeja U = −411 − 107 − 496 − 122 + 349 = <b>−787 kJ/mol</b>. El resultado coincide muy bien con el de Born-Landé, lo que confirma que el NaCl es casi totalmente iónico. Cuando los dos valores difieren mucho (por ejemplo, en el AgI), es señal de que el enlace tiene bastante carácter covalente. Si el no metal es líquido (Br₂) o sólido (I₂), hay que sumar también su vaporización o sublimación; y si el ion tiene carga 2, hay que sumar las dos energías de ionización o las dos afinidades.",
    ], extra: formula("ΔH°<sub>f</sub> = ΔH<sub>sub</sub> + EI + ½ D + AE + U"), svg: bornHaber }),
    bloque({ h: "2.3 Comparar energías de red", p: [
      "Con la idea |U| ∝ z₊ · z₋ / r₀ se pueden ordenar compuestos sin hacer cálculos, una pregunta muy habitual. Primero se mira la <b>carga</b>, que es el factor que más pesa: el MgO (iones +2 y −2) tiene una energía de red unas cinco veces mayor que el NaCl (+1 y −1), aunque sus iones sean de tamaño parecido. Después, a igual carga, se mira el <b>tamaño</b>: en los haluros de sodio, |U| disminuye del NaF al NaI, porque el anión es cada vez mayor y la distancia r₀ crece.",
      "La energía de red explica muchas propiedades. Cuanto mayor es |U|, mayor es el <mark>punto de fusión</mark> (NaF 993 °C, NaCl 801, NaBr 747, NaI 661; MgO 2852 °C), mayor la <b>dureza</b> y, en general, menor la <b>solubilidad</b> en agua, porque al agua le cuesta más separar los iones. Por eso el MgO y el CaO se usan como materiales refractarios en los hornos, y por eso los carbonatos y fosfatos de iones +2 y −2 o −3, como el CaCO₃ o el Ca₃(PO₄)₂, son muy poco solubles y forman rocas, conchas y huesos.",
    ], svg: barras("Energías de red de algunos compuestos iónicos en valor absoluto en kilojulios por mol", "|U| (kJ/mol)", [["MgO", 3791, "var(--red)", "3791"], ["CaO", 3401, "#b45309", "3401"], ["NaF", 923, "var(--pen)", "923"], ["NaCl", 787, "var(--pen)", "787"], ["NaI", 704, "var(--pen)", "704"]]) }),
    bloque({ h: "2.4 Propiedades de los compuestos iónicos", p: [
      "Los compuestos iónicos son <b>sólidos cristalinos</b> a temperatura ambiente, con <mark>puntos de fusión y ebullición altos</mark>, porque para fundirlos hay que vencer las fuertes atracciones entre iones de toda la red. Son <b>duros</b> (cuesta rayarlos) pero <b>frágiles</b>: un golpe desplaza un plano de iones, enfrenta cargas iguales y el cristal se rompe por planos (exfoliación). Muchos son <b>solubles en agua</b> y otros disolventes polares: las moléculas de agua, que son dipolos, rodean a los iones (los <b>solvatan</b> o hidratan) y los separan de la red; en disolventes apolares, como la gasolina, son insolubles.",
      "En estado sólido <b>no conducen</b> la electricidad, porque los iones están fijos en la red. En cambio, <b>fundidos o disueltos</b> son buenos conductores, porque los iones pueden moverse hacia los electrodos: son <b>electrolitos</b>. Esta propiedad se aprovecha en la electrólisis del NaCl fundido para obtener sodio y cloro, y en las bebidas isotónicas, que reponen los iones que perdemos con el sudor. La solubilidad depende de un equilibrio entre la energía de red y la energía de hidratación de los iones, como estudiarás en el tema de equilibrios de solubilidad.",
    ], svg: compara("Conductividad eléctrica de un compuesto iónico según su estado", ["Sólido", ["iones fijos", "en la red", "NO conduce", "aislante"]], ["Fundido o disuelto", ["iones libres", "se mueven", "SÍ conduce", "electrolito"]], "var(--muted)", "var(--leaf)") }),
    bloque({ h: "3.1 El enlace metálico: el mar de electrones", p: [
      "Los metales tienen pocos electrones de valencia y energías de ionización bajas, así que no pueden alcanzar el octeto ni compartiendo ni captando electrones. El <mark>modelo del mar de electrones</mark> (o del gas electrónico, de Drude, 1900) propone que los átomos metálicos ceden sus electrones de valencia a un fondo común: quedan <b>cationes</b> ordenados en una red cristalina, sumergidos en una nube de electrones <b>deslocalizados</b> que no pertenecen a ningún átomo concreto y se mueven libremente por todo el metal.",
      "El enlace metálico es la atracción entre esos cationes y la nube de electrones que los rodea. Es un enlace <b>no direccional</b>: cada catión es atraído por igual en todas las direcciones. Su fuerza aumenta con el número de electrones de valencia que aporta cada átomo y disminuye con el tamaño del catión. Por eso los alcalinos (un electrón, cationes grandes) son blandos y funden a temperaturas bajas (el cesio funde a 28 °C, en la mano), mientras que los metales de transición, que aportan electrones s y d, son duros y funden a temperaturas muy altas (hierro 1538 °C, wolframio 3422 °C).",
    ], svg: marElectrones }),
    bloque({ h: "3.2 La teoría de bandas", p: [
      "La <mark>teoría de bandas</mark> es el modelo cuántico del enlace metálico. Cuando se unen N átomos, sus N orbitales atómicos de un mismo tipo se combinan y forman N orbitales «moleculares» extendidos por todo el cristal, con energías tan próximas que forman una <b>banda</b> continua. La banda formada por los orbitales de valencia es la <b>banda de valencia</b>, y la siguiente banda vacía, la <b>banda de conducción</b>. Entre ellas puede haber una zona de energías prohibidas, el <b>gap</b> o banda prohibida.",
      "En un <b>conductor</b> (metal), la banda de valencia está semillena o se solapa con la de conducción: los electrones pasan a estados vacíos con muy poca energía y se mueven por el cristal. En un <b>aislante</b> (diamante, vidrio) la banda de valencia está llena y el gap es grande (más de 3-5 eV): los electrones no pueden saltar. En un <mark>semiconductor</mark> (silicio, 1,1 eV; germanio, 0,7 eV) el gap es pequeño: a temperatura ambiente algunos electrones lo superan y conducen un poco, y la conductividad aumenta al calentar (al revés que en los metales). Añadiendo impurezas (<b>dopado</b>) con fósforo (tipo n, electrones extra) o boro (tipo p, huecos) se controla su conductividad: es la base de diodos, transistores, LED y placas solares.",
    ], svg: compara("Bandas de energía de un conductor y de un aislante", ["Conductor", ["bandas solapadas", "o semillenas", "sin gap", "conduce"]], ["Aislante", ["banda llena", "gap > 3 eV", "no hay saltos", "no conduce"]], "#b45309", "var(--muted)"), video: V("ion-c", "El enlace metálico y la teoría de bandas", "enlace metálico teoría de bandas") }),
    bloque({ h: "3.3 Propiedades y estructuras de los metales", p: [
      "El mar de electrones explica todas las propiedades típicas de los metales. Son <b>buenos conductores</b> de la electricidad (los electrones se mueven al aplicar un voltaje) y del calor (los electrones transportan la energía). Tienen <b>brillo metálico</b>, porque los electrones libres absorben y reemiten la luz de casi todas las frecuencias. Son <mark>dúctiles y maleables</mark>: se pueden estirar en hilos y laminar en láminas, porque al deslizarse un plano de cationes sobre otro, el mar de electrones sigue uniéndolos y no aparecen repulsiones. La conductividad eléctrica de los metales disminuye al aumentar la temperatura, porque los cationes vibran más y estorban el paso de los electrones.",
      "Los cationes de los metales se empaquetan de la forma más compacta posible. Las tres redes más comunes son la <b>cúbica centrada en el cuerpo</b> (índice de coordinación 8, ocupa el 68 % del espacio: Fe a temperatura ambiente, Na, Cr, W), la <b>cúbica centrada en las caras</b> (índice 12, 74 %: Cu, Al, Ag, Au) y la <b>hexagonal compacta</b> (índice 12, 74 %: Mg, Zn, Ti). Los metales de red cúbica centrada en las caras suelen ser los más dúctiles, porque tienen muchos planos por los que deslizarse: el oro es tan maleable que con un gramo se puede hacer una lámina de un metro cuadrado.",
    ], svg: rejilla("Redes cristalinas de los metales", ["Red", "Coordinación", "Ejemplos"], [["Cúbica c. cuerpo", "8 (68 %)", "Fe, Na, W"], ["Cúbica c. caras", "12 (74 %)", "Cu, Al, Au"], ["Hexagonal comp.", "12 (74 %)", "Mg, Zn, Ti"]], "#b45309") }),
    bloque({ h: "3.4 Aleaciones y materiales metálicos", p: [
      "Una <mark>aleación</mark> es una mezcla homogénea de un metal con otros elementos, metálicos o no, que mantiene el carácter metálico. Como el enlace metálico no es direccional, los átomos de otro elemento pueden colocarse en la red sustituyendo átomos del metal (<b>aleaciones de sustitución</b>, como el latón, cobre y cinc, o el bronce, cobre y estaño) o en los huecos entre ellos si son pequeños (<b>aleaciones intersticiales</b>, como el acero, hierro con menos del 2 % de carbono).",
      "Los átomos extraños dificultan que los planos se deslicen, por eso las aleaciones suelen ser <b>más duras y resistentes</b> que el metal puro, aunque conducen peor. El oro de 18 quilates (75 % de oro, con plata y cobre) es más resistente que el de 24; el acero inoxidable lleva cromo y níquel, que forman una capa protectora de óxido; el duraluminio (aluminio con cobre y magnesio) es ligero y resistente para aviones. Hoy se investigan aleaciones con memoria de forma (níquel-titanio, para ortodoncias y stents) y aleaciones de alta entropía, con cinco o más metales en proporciones parecidas, para turbinas y reactores. Elegir y reciclar bien los metales es clave para una industria sostenible: reciclar aluminio ahorra el 95 % de la energía de producirlo.",
    ], svg: rejilla("Algunas aleaciones y su composición", ["Aleación", "Composición", "Uso"], [["Acero", "Fe + C", "estructuras"], ["Inoxidable", "Fe + Cr + Ni", "cocina"], ["Latón", "Cu + Zn", "grifería"], ["Bronce", "Cu + Sn", "estatuas"], ["Oro 18 k", "Au 75 % + Ag, Cu", "joyería"]], "var(--leaf)") }),
  ],
  figura: figura("Dos formas de enlace sin moléculas", "Comparación entre el enlace iónico y el metálico", [["Iónico", "metal + no metal", "red de iones; U = Born-Haber"], ["Metálico", "metal + metal", "cationes + mar de electrones"], ["Propiedades", "frágil y aislante / dúctil", "y conductor"]]),
  video: V("ion-a", "Tipos de enlace: iónico, covalente y metálico", "tipos de enlace químico"),
  ejemplos: [
    { enunciado: "Calcula la energía de red del NaCl con estos datos (kJ/mol): ΔH°f(NaCl) = −411; sublimación del Na = +107; EI(Na) = +496; energía de enlace Cl−Cl = +244; AE(Cl) = −349.", pasos: ["Ciclo: ΔH°f = ΔHsub + EI + ½ D + AE + U.", "½ D = 244 / 2 = 122 kJ.", "U = −411 − 107 − 496 − 122 + 349.", "U = −787 kJ/mol."], resultado: "U = −787 kJ/mol." },
    { enunciado: "Calcula la energía de red del KBr (kJ/mol): ΔH°f = −394; sublimación K = +89; EI(K) = +419; vaporización Br₂(l) = +31; enlace Br−Br = +193; AE(Br) = −325.", pasos: ["El bromo es líquido: hay que vaporizar ½ Br₂(l) (+15,5) y disociar ½ Br₂(g) (+96,5).", "−394 = 89 + 419 + 15,5 + 96,5 − 325 + U.", "−394 = 295 + U."], resultado: "U = −689 kJ/mol." },
    { enunciado: "Ordena de mayor a menor energía de red (en valor absoluto): NaCl, MgO, KCl, NaF. Justifica.", pasos: ["|U| ∝ z₊ z₋ / r₀.", "MgO tiene cargas +2 y −2: es con diferencia el mayor.", "Entre los de carga 1: NaF (iones más pequeños) > NaCl > KCl (K⁺ mayor que Na⁺)."], resultado: "MgO > NaF > NaCl > KCl." },
    { enunciado: "Estima la relación entre las energías de red del MgO y del NaCl sabiendo que r(Mg²⁺) = 72 pm, r(O²⁻) = 140 pm, r(Na⁺) = 102 pm y r(Cl⁻) = 181 pm, con la misma red.", pasos: ["U(MgO) / U(NaCl) ≈ (2 · 2 / 212) / (1 · 1 / 283).", "= (4 / 212) · 283 = 5,3.", "Valor experimental: 3791 / 787 = 4,8."], resultado: "La energía de red del MgO es unas 5 veces mayor; por eso funde a 2852 °C frente a 801 °C." },
    { enunciado: "Explica por qué el NaCl no conduce la corriente en estado sólido y sí cuando está fundido o en disolución.", pasos: ["La conducción requiere cargas que se muevan.", "En el sólido, los iones están fijos en la red y no hay electrones libres.", "Al fundir o disolver, los iones quedan libres y se desplazan hacia los electrodos."], resultado: "Es un electrolito: conduce solo con los iones móviles." },
    { enunciado: "El silicio puro conduce muy poco, pero con 1 átomo de fósforo por cada millón de átomos de silicio su conductividad se multiplica enormemente. Explícalo con la teoría de bandas.", pasos: ["El Si es un semiconductor con un gap de 1,1 eV: pocos electrones llegan a la banda de conducción.", "El P tiene 5 electrones de valencia y el Si 4: cada P aporta un electrón extra.", "Ese electrón está muy cerca de la banda de conducción y salta a ella con muy poca energía."], resultado: "Es un semiconductor tipo n: el dopado aporta portadores de carga y dispara la conductividad." },
  ],
  errores: [
    "Pensar que existen moléculas de NaCl: el compuesto iónico es una red y la fórmula solo da la proporción.",
    "Creer que la transferencia del electrón ya hace estable el compuesto: lo estabiliza la energía de red.",
    "En el ciclo de Born-Haber, usar la energía de enlace entera del Cl₂ en lugar de la mitad.",
    "Olvidar la vaporización del Br₂ líquido o la sublimación del I₂ sólido en el ciclo.",
    "Ordenar energías de red solo por el tamaño, sin mirar primero la carga de los iones.",
    "Decir que los compuestos iónicos conducen siempre: en estado sólido no conducen.",
  ],
  ejercicios: [
    B("Explica con la curva de energía potencial por qué dos átomos forman un enlace.", "Al acercarse, la energía baja hasta un mínimo: el sistema enlazado es más estable. La distancia del mínimo es la de enlace."),
    B("Predice el tipo de enlace en: KBr, Cl₂, Fe, H₂O, CaO.", "KBr iónico; Cl₂ covalente apolar; Fe metálico; H₂O covalente polar; CaO iónico."),
    B("Escribe cómo se forman los iones en el CaCl₂ e indica su configuración electrónica.", "Ca → Ca²⁺ + 2 e⁻ ([Ar]); cada Cl + e⁻ → Cl⁻ ([Ar]). Un Ca²⁺ por cada dos Cl⁻."),
    B("¿Qué es la energía de red? ¿Qué signo tiene con el criterio habitual?", "La energía desprendida al formar un mol de cristal iónico a partir de sus iones gaseosos. Es negativa."),
    B("¿Qué es el índice de coordinación? Indica el del NaCl.", "El número de iones de signo contrario que rodean a cada ion. En el NaCl es 6:6."),
    B("Nombra las cinco etapas del ciclo de Born-Haber para el NaCl.", "Sublimación del Na, ionización del Na, disociación de ½ Cl₂, afinidad electrónica del Cl y formación de la red (energía de red)."),
    B("¿Por qué los compuestos iónicos tienen puntos de fusión altos?", "Porque hay que vencer las fuertes atracciones electrostáticas entre todos los iones de la red."),
    B("¿Por qué los compuestos iónicos son frágiles?", "Un golpe desplaza un plano de iones y enfrenta iones de igual carga, que se repelen y rompen el cristal."),
    B("¿Se disuelve la sal en agua? ¿Y en gasolina? ¿Por qué?", "En agua sí, porque las moléculas polares de agua hidratan y separan los iones; en gasolina (apolar) no."),
    B("Describe el modelo del mar de electrones.", "Los átomos metálicos ceden sus electrones de valencia, que se mueven libremente por todo el metal; quedan cationes ordenados unidos por la nube de electrones."),
    B("Explica por qué los metales conducen la electricidad.", "Porque tienen electrones deslocalizados que se mueven al aplicar una diferencia de potencial."),
    B("¿Qué es una aleación? Pon dos ejemplos.", "Mezcla homogénea de un metal con otros elementos que conserva el carácter metálico: acero (Fe + C), latón (Cu + Zn)."),
    M("Ordena por energía de red creciente (valor absoluto): LiF, NaF, KF, CsF.", "CsF < KF < NaF < LiF: misma carga, y el radio del catión disminuye del Cs al Li, así que r₀ disminuye y |U| aumenta."),
    M("Ordena por punto de fusión: NaCl, MgO, KBr, CaO.", "KBr < NaCl < CaO < MgO. Los de carga 2 son mucho mayores; dentro de cada pareja, los iones más pequeños dan más |U|."),
    M("Calcula la energía de red del LiF (kJ/mol): ΔH°f = −617; sublimación Li = +161; EI(Li) = +520; enlace F−F = +158; AE(F) = −328.", "U = −617 − 161 − 520 − 79 + 328 = −1049 kJ/mol."),
    M("Calcula la entalpía de formación del NaF (kJ/mol) con: sublimación Na = +107; EI = +496; enlace F−F = +158; AE(F) = −328; U = −923.", "ΔH°f = 107 + 496 + 79 − 328 − 923 = −569 kJ/mol."),
    M("Calcula la energía de red del KI (kJ/mol): ΔH°f = −328; sublimación K = +89; EI(K) = +419; sublimación I₂(s) = +62; enlace I−I = +151; AE(I) = −295.", "½ sublimación = 31; ½ D = 75,5. U = −328 − 89 − 419 − 31 − 75,5 + 295 = −647,5 kJ/mol."),
    M("¿Por qué el CsCl tiene índice de coordinación 8:8 y el NaCl 6:6?", "Porque el Cs⁺ es mucho mayor que el Na⁺: la relación de radios catión/anión es mayor y caben 8 aniones alrededor de cada catión."),
    M("En la fluorita (CaF₂) el índice de coordinación del Ca²⁺ es 8. ¿Cuál es el del F⁻? Justifícalo.", "4: como hay el doble de F⁻ que de Ca²⁺, cada F⁻ está rodeado de la mitad de cationes (8 : 4 = 2 : 1)."),
    M("Explica qué diferencias hay entre la conductividad de un metal y la de una disolución de sal.", "En el metal conducen los electrones y no hay cambio químico; en la disolución conducen los iones, que se mueven hacia los electrodos, donde se producen reacciones (electrólisis)."),
    M("¿Por qué el sodio es blando y funde a 98 °C y el hierro es duro y funde a 1538 °C?", "El Na aporta 1 electrón al mar y su catión es grande: enlace metálico débil. El Fe aporta electrones 4s y 3d, con cationes más pequeños y cargados: enlace mucho más fuerte."),
    M("Explica con la teoría de bandas qué diferencia hay entre un conductor, un semiconductor y un aislante.", "Conductor: bandas solapadas o semillenas (sin gap). Semiconductor: gap pequeño (≈1 eV), algunos electrones saltan con la temperatura. Aislante: gap grande (> 3-5 eV), no hay saltos."),
    M("¿Por qué la conductividad de un metal disminuye al calentarlo y la de un semiconductor aumenta?", "En el metal, la vibración de los cationes estorba a los electrones. En el semiconductor, más temperatura hace saltar más electrones a la banda de conducción, y eso pesa más."),
    M("¿Por qué el acero es más duro que el hierro puro?", "Los átomos de carbono ocupan huecos de la red del hierro (aleación intersticial) y dificultan que los planos de átomos se deslicen."),
    M("Razona cuál tiene mayor energía de red: el CaO o el CaS (r(O²⁻) = 140 pm, r(S²⁻) = 184 pm).", "CaO: misma carga y el O²⁻ es más pequeño, así que r₀ es menor y |U| mayor."),
    A("(Tipo PAU) Calcula la energía de red del MgO (kJ/mol): ΔH°f(MgO) = −602; sublimación Mg = +148; EI₁ = +738; EI₂ = +1451; enlace O=O = +498; AE₁(O) = −141; AE₂(O) = +798. ¿Por qué la segunda afinidad es positiva?", "U = −602 − 148 − 738 − 1451 − 249 + 141 − 798 = −3845 kJ/mol. AE₂ es positiva porque hay que meter un electrón en un ion O⁻, que ya es negativo y lo repele."),
    A("(Tipo PAU) Para los compuestos NaF, NaCl y MgF₂: a) ordénalos por energía de red; b) ordénalos por punto de fusión; c) ¿cuál será menos soluble en agua?", "a) |U|: NaCl < NaF < MgF₂ (el Mg²⁺ es más pequeño y con más carga). b) Mismo orden: NaCl (801) < NaF (993) < MgF₂ (1263 °C). c) El MgF₂, por su mayor energía de red."),
    A("Con la ecuación de Born-Landé, estima la energía de red del NaCl: M = 1,748; r₀ = 2,81 · 10⁻¹⁰ m; n = 9; e = 1,60 · 10⁻¹⁹ C; 1/(4πε₀) = 9,0 · 10⁹ N·m²/C².", "U = −6,022 · 10²³ · 1,748 · 9 · 10⁹ · (1,6 · 10⁻¹⁹)² / 2,81 · 10⁻¹⁰ · (1 − 1/9) = −8,63 · 10⁵ · 0,889 J ≈ −7,7 · 10⁵ J/mol = −767 kJ/mol, muy cerca del valor de Born-Haber (−787)."),
    A("La energía de red del AgCl según Born-Landé es −769 kJ/mol y según Born-Haber −915 kJ/mol. ¿Qué indica esa diferencia?", "Que el enlace no es puramente iónico: tiene un carácter covalente apreciable, que el modelo de iones esféricos no recoge. El Ag⁺ deforma (polariza) la nube del Cl⁻. Por eso el AgCl es muy poco soluble en agua."),
    A("¿Por qué no existe el compuesto NaCl₂? Razónalo con el ciclo de Born-Haber.", "Habría que arrancar un segundo electrón al Na, de la capa 2 (EI₂ = 4562 kJ/mol). La ganancia de energía de red por la carga +2 no compensa ese coste enorme: ΔH°f sería muy positiva."),
    A("(Tipo PAU) Razona si son verdaderas o falsas: a) el KCl conduce la corriente en estado sólido; b) el MgO tiene mayor punto de fusión que el NaCl; c) los metales son frágiles; d) el enlace metálico es direccional.", "a) Falsa: solo fundido o disuelto. b) Verdadera: mayor carga, mayor |U|. c) Falsa: son dúctiles y maleables por el mar de electrones. d) Falsa: es no direccional."),
    A("Calcula la entalpía de formación del hipotético CaCl (con Ca⁺) suponiendo U = −717 kJ/mol, y compárala con la del CaCl₂ (−796 kJ/mol). Datos: sublimación Ca = +178; EI₁ = +590; ½ D(Cl₂) = +122; AE(Cl) = −349.", "ΔH°f(CaCl) = 178 + 590 + 122 − 349 − 717 = −176 kJ/mol. Es negativa, pero el CaCl₂ (−796) es mucho más estable: el CaCl se transformaría en CaCl₂ y Ca. Por eso el calcio forma Ca²⁺."),
    A("Un sólido blanco funde a 993 °C, es duro y frágil, no conduce en estado sólido pero sí fundido y es soluble en agua. Otro sólido gris funde a 660 °C, es maleable y conduce en estado sólido. ¿Qué tipo de enlace tiene cada uno? Propón una sustancia para cada caso.", "El primero tiene enlace iónico (alto punto de fusión, fragilidad, conductividad solo con iones móviles, solubilidad en agua): podría ser el NaF. El segundo tiene enlace metálico (maleable y conductor en estado sólido): podría ser el aluminio."),
    A("Explica por qué el aluminio, que es más ligero que el cobre, se usa en las líneas eléctricas de alta tensión aunque conduzca peor.", "El Al conduce aproximadamente el 60 % que el Cu, pero su densidad es tres veces menor: por cada kilo conduce el doble. Además es más barato. En largas líneas, el peso y el coste importan más."),
    A("Explica qué ocurre en una placa solar de silicio con la teoría de bandas.", "Un fotón con energía mayor que el gap (1,1 eV, es decir, λ < 1100 nm) pasa un electrón de la banda de valencia a la de conducción, dejando un hueco. La unión de silicio tipo n y tipo p separa electrones y huecos y crea una corriente."),
  ],
  quiz: [
    q4("Los átomos se enlazan porque…", ["ganan masa", "disminuye la energía del sistema", "aumenta la entropía", "se cargan"], 1, "El sistema enlazado es más estable."),
    q4("La regla del octeto la propusieron…", ["Bohr y Rutherford", "Lewis y Kossel", "Born y Haber", "Pauling y Mulliken"], 1, "En 1916."),
    q4("Un enlace iónico se forma entre…", ["dos no metales", "un metal y un no metal", "dos metales", "gases nobles"], 1, "Gran diferencia de electronegatividad."),
    q4("La fórmula NaCl indica…", ["una molécula", "la proporción de iones en la red", "un átomo", "un gas"], 1, "No hay moléculas."),
    q4("El índice de coordinación del NaCl es…", ["4:4", "6:6", "8:8", "8:4"], 1, "Cada ion tiene 6 vecinos de signo contrario."),
    q4("El CsCl tiene índice 8:8 porque…", ["el Cs⁺ es muy grande", "el Cl⁻ es pequeño", "tiene más carga", "es covalente"], 0, "Relación de radios mayor."),
    q4("La energía de red es mayor (en valor absoluto) cuando…", ["los iones son grandes", "las cargas son altas y los iones pequeños", "el compuesto es líquido", "hay pocos iones"], 1, "|U| ∝ z₊z₋/r₀."),
    q4("¿Cuál tiene mayor energía de red?", ["NaCl", "KCl", "MgO", "NaI"], 2, "Cargas 2 y 2."),
    q4("En el ciclo de Born-Haber del NaCl, la disociación del cloro aporta…", ["la energía de enlace entera", "la mitad de la energía de enlace", "la afinidad", "nada"], 1, "Solo ½ Cl₂."),
    q4("El ciclo de Born-Haber se basa en…", ["la ley de Coulomb", "la ley de Hess", "el principio de Pauli", "la regla de Hund"], 1, "La entalpía es función de estado."),
    q4("Los compuestos iónicos sólidos…", ["conducen", "no conducen", "son blandos", "son gases"], 1, "Iones fijos."),
    q4("La fragilidad de los compuestos iónicos se debe a…", ["los electrones libres", "la repulsión entre iones de igual carga al desplazarse un plano", "su bajo punto de fusión", "su color"], 1, "Se rompe por planos."),
    q4("En el modelo del mar de electrones, los electrones de valencia…", ["están en orbitales atómicos", "están deslocalizados", "forman pares", "se pierden"], 1, "Se mueven por todo el metal."),
    q4("El enlace metálico es…", ["direccional", "no direccional", "entre iones de distinta carga", "entre moléculas"], 1, "Atracción en todas las direcciones."),
    q4("Los metales son dúctiles porque…", ["son iónicos", "los planos se deslizan sin romperse gracias al mar de electrones", "tienen moléculas", "son blandos siempre"], 1, "No aparecen repulsiones."),
    q4("En un aislante, el gap entre bandas es…", ["nulo", "pequeño", "grande", "negativo"], 2, "Más de 3-5 eV."),
    q4("El silicio es un…", ["conductor", "semiconductor", "aislante", "superconductor"], 1, "Gap de 1,1 eV."),
    q4("Dopar silicio con fósforo produce un semiconductor…", ["tipo p", "tipo n", "aislante", "metálico"], 1, "El P aporta un electrón extra."),
    q4("El acero es una aleación de…", ["Cu y Zn", "Fe y C", "Cu y Sn", "Al y Mg"], 1, "Intersticial."),
    q4("La red cúbica centrada en las caras tiene índice de coordinación…", ["6", "8", "12", "4"], 2, "Cu, Al, Au."),
  ],
  examen: [
    q4("ΔH°f = −400, ΔHsub = +100, EI = +500, ½D = +100, AE = −350: U =", ["−750", "−1050", "−350", "+750"], 0, "−400 − 100 − 500 − 100 + 350."),
    q4("Orden de |U| creciente:", ["NaF < NaCl < NaBr", "NaBr < NaCl < NaF", "NaCl < NaF < NaBr", "iguales"], 1, "Anión más pequeño, mayor |U|."),
    q4("Mayor punto de fusión:", ["KCl", "NaCl", "CaO", "NaBr"], 2, "Cargas 2 y 2."),
    q4("Un sólido conduce en estado sólido y es maleable:", ["iónico", "metálico", "covalente molecular", "gas noble"], 1, "Mar de electrones."),
    q4("Δ EN = 2,1: el enlace es…", ["covalente apolar", "covalente polar", "iónico", "metálico"], 2, "Mayor que 1,7."),
    q4("Fórmula del compuesto entre Al y O:", ["AlO", "Al₂O₃", "Al₃O₂", "AlO₂"], 1, "Al³⁺ y O²⁻."),
    q4("Relación aproximada U(CaO) / U(NaCl) si r₀ es parecido:", ["1", "2", "4", "0,5"], 2, "z₊z₋ = 4 frente a 1."),
    q4("Un semiconductor al calentarlo…", ["conduce menos", "conduce más", "deja de conducir", "no cambia"], 1, "Más electrones superan el gap."),
  ],
  feynman: ["Por qué la transferencia de electrones no basta para estabilizar el NaCl", "Qué representa cada etapa del ciclo de Born-Haber", "Por qué el MgO funde a mucha más temperatura que el NaCl", "Por qué la sal se rompe y el metal se dobla", "Qué es un semiconductor dopado", "Por qué las aleaciones son más duras que los metales puros"],
  mapa: mapaB("ENLACE IÓNICO Y METÁLICO", [["Por qué se enlazan", "mínimo de energía, octeto", "var(--muted)"], ["Enlace iónico", "transferencia, red, coordinación", "var(--pen)"], ["Energía de red", "Born-Haber, Born-Landé", "var(--red)"], ["Enlace metálico", "mar de electrones, bandas", "#b45309"]]),
  tarjetas: [
    ["Regla del octeto", "Los átomos tienden a tener 8 electrones en su capa de valencia."],
    ["Enlace iónico", "Atracción electrostática entre iones tras transferir electrones."],
    ["Índice de coordinación", "Iones de signo contrario que rodean a cada ion."],
    ["Energía de red", "Energía desprendida al formar un mol de cristal desde iones gaseosos."],
    ["|U| ∝ z₊ z₋ / r₀", "Más carga y menor tamaño, mayor energía de red."],
    ["Ciclo de Born-Haber", "ΔH°f = ΔHsub + EI + ½D + AE + U."],
    ["Compuestos iónicos", "Altos puntos de fusión, duros, frágiles, conducen fundidos o disueltos."],
    ["Mar de electrones", "Cationes ordenados en una nube de electrones deslocalizados."],
    ["Teoría de bandas", "Banda de valencia, banda de conducción y gap."],
    ["Semiconductor", "Gap pequeño; conduce más al calentar o al dopar."],
    ["Propiedades de los metales", "Conductores, brillo, dúctiles y maleables."],
    ["Aleación", "Mezcla homogénea con carácter metálico: de sustitución o intersticial."],
  ],
  glosario: [
    ["Enlace químico", "Fuerza que mantiene unidos a los átomos."],
    ["Distancia de enlace", "Distancia entre núcleos en el mínimo de energía."],
    ["Electrovalencia", "Electrones que gana o pierde un átomo al formar iones."],
    ["Red cristalina", "Ordenación tridimensional y periódica de partículas."],
    ["Celda unidad", "Unidad mínima que, repetida, genera la red."],
    ["Constante de Madelung", "Número que depende de la geometría de la red iónica."],
    ["Exponente de Born", "Parámetro de la repulsión entre nubes electrónicas."],
    ["Sublimación", "Paso de sólido a gas."],
    ["Electrolito", "Sustancia que conduce la corriente al disolverse o fundirse."],
    ["Hidratación", "Rodeo de un ion por moléculas de agua."],
    ["Electrones deslocalizados", "Electrones que no pertenecen a un átomo concreto."],
    ["Banda de conducción", "Banda vacía donde los electrones pueden moverse."],
    ["Gap", "Intervalo de energías prohibidas entre bandas."],
    ["Dopado", "Adición de impurezas para controlar la conductividad de un semiconductor."],
    ["Ductilidad", "Capacidad de estirarse en hilos."],
    ["Maleabilidad", "Capacidad de extenderse en láminas."],
  ],
  situacion: {
    titulo: "¿Iónico o metálico? El laboratorio de los sólidos misteriosos",
    reto: "El laboratorio ha recibido seis sólidos blancos o grises sin etiqueta (sal común, azúcar, sulfato de cobre, papel de aluminio, una moneda de cobre y arena). Vuestro equipo debe diseñar un protocolo para clasificarlos por su tipo de enlace.",
    pasos: [
      "Haced una tabla con las propiedades que vais a medir: aspecto, dureza (rayado), solubilidad en agua y en aceite, y conductividad en sólido y en disolución.",
      "Construid un conductímetro sencillo con una pila, un LED y dos cables.",
      "Realizad las pruebas con seguridad (gafas, guantes con el sulfato de cobre) y anotad los resultados.",
      "Clasificad cada sólido como iónico, metálico, covalente molecular o covalente de red, justificándolo.",
      "Explicad cada propiedad observada con el modelo de enlace correspondiente.",
    ],
    producto: "Un informe de laboratorio con el protocolo, la tabla de resultados y una clave dicotómica para identificar el tipo de enlace.",
    evaluacion: ["El protocolo es seguro, ordenado y reproducible.", "La clasificación es correcta y se justifica con evidencias.", "Las propiedades se explican con los modelos de enlace.", "La clave dicotómica es clara y la puede usar otro grupo."],
  },
  familias: [
    "Mirad la sal gorda con una lupa: veréis cubos perfectos, reflejo de la red cristalina.",
    "Comprobad que el papel de aluminio se dobla y la sal se rompe al golpearla con una cuchara.",
    "Buscad en casa objetos de aleaciones: grifos de latón, cubiertos de acero inoxidable, joyas de oro de 18 quilates.",
    "Preguntad si en casa reciclan las latas de aluminio y por qué ahorra tanta energía.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Enlace químico y estructura de la materia»: el enlace iónico, redes cristalinas, energía de red, ciclo de Born-Haber y ecuación de Born-Landé, propiedades de las sustancias iónicas; el enlace metálico, modelo del gas electrónico y teoría de bandas, propiedades de los metales y aplicaciones (semiconductores, aleaciones).`,
    ideas: [
      "Construir modelos de redes iónicas (NaCl, CsCl) con bolas de poliestireno de dos tamaños y palillos.",
      "Medida de la conductividad de sólidos, fundidos (demostración) y disoluciones con un conductímetro casero.",
      "Hoja de cálculo para resolver ciclos de Born-Haber de varios haluros y compararlos con Born-Landé.",
      "Crecimiento de cristales de sal y de alumbre en clase durante una semana.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Ciclo de Born-Haber, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_de_Born-Haber" },
    { t: "Teoría de bandas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teor%C3%ADa_de_bandas" },
    { t: "NIST Chemistry WebBook: datos termoquímicos", url: "https://webbook.nist.gov/chemistry/" },
  ],
  revisado: "2026-11-21",
};
