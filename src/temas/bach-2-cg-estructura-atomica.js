// Ciencias Generales 2º Bachillerato · Los sistemas materiales y la estructura atómica (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Modelo de partículas de los tres estados.
const estadosSVG = marco("Modelo cinético: en el sólido las partículas vibran en posiciones fijas, en el líquido se deslizan y en el gas se mueven libres y separadas", `
  ${[[48, "Sólido", "var(--pen)"], [130, "Líquido", "var(--water)"], [212, "Gas", "var(--red)"]].map(([x, t, c], k) => {
    const pts = k === 0 ? Array.from({ length: 16 }, (_, i) => [x - 24 + (i % 4) * 16, 58 + Math.floor(i / 4) * 16])
      : k === 1 ? [[-22, 90], [-6, 94], [10, 88], [24, 96], [-16, 106], [2, 110], [18, 112], [-26, 120], [-8, 124], [12, 126], [26, 120], [-18, 74]].map(([a, b]) => [x + a, b])
      : [[-20, 54], [16, 66], [-8, 92], [22, 104], [-24, 120], [6, 128], [24, 52]].map(([a, b]) => [x + a, b]);
    return `<rect x="${x - 38}" y="40" width="76" height="100" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${pts.map(([a, b]) => `<circle cx="${a}" cy="${b}" r="6.5" fill="${c}" fill-opacity=".75"/>`).join("")}${T(x, 28, t, { fs: 12, b: true, c })}`;
  }).join("")}
  ${T(130, 162, "más energía → más movimiento y separación", { fs: 10.5, b: true, c: "var(--muted)" })}`);

// Experimento de Rutherford.
const rutherfordSVG = marco("Experimento de Rutherford: casi todas las partículas alfa atraviesan la lámina de oro, algunas se desvían y muy pocas rebotan", `
  <rect x="14" y="74" width="34" height="32" rx="4" fill="var(--muted)" fill-opacity=".4" stroke="var(--muted)"/>${T(31, 124, "fuente α", { fs: 10, b: true })}
  <rect x="122" y="30" width="8" height="120" fill="var(--sun)"/>${T(126, 22, "lámina de oro", { fs: 10, b: true, c: "#b45309" })}
  <path d="M48 90 H 240" stroke="var(--pen)" stroke-width="2"/><path d="M48 84 H 240 M48 96 H 240" stroke="var(--pen)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <path d="M48 80 H 126 L 236 46" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M48 100 H 126 L 230 140" fill="none" stroke="var(--leaf)" stroke-width="2"/>
  <path d="M48 88 H 120 L 60 52" fill="none" stroke="var(--red)" stroke-width="2.4"/>
  ${T(246, 110, "la mayoría pasa", { fs: 9.5, a: "end", c: "var(--pen)", b: true })}${T(200, 36, "algunas se desvían", { fs: 10, c: "var(--leaf)", b: true })}${T(70, 44, "pocas rebotan", { fs: 10, c: "var(--red)", b: true })}
  ${T(130, 172, "el átomo es casi vacío con un núcleo pequeño y denso", { fs: 10, c: "var(--muted)" })}`);

// Esquema de un átomo con sus partículas.
const atomoSVG = L5.capas("Átomo de carbono-12: núcleo con 6 protones y 6 neutrones y 6 electrones en dos capas (2 y 4)", "6p 6n", [2, 4], "var(--pen)", "Carbono: Z = 6, A = 12");

// Bloques de la tabla periódica.
const bloquesSVG = marco("Bloques de la tabla periódica: s a la izquierda, d en el centro, p a la derecha y f abajo", `
  ${T(96, 18, "Bloques de la tabla periódica", { fs: 12, b: true })}
  <rect x="14" y="30" width="28" height="98" rx="3" fill="var(--red)" fill-opacity=".55"/>${T(28, 84, "s", { fs: 14, b: true, c: "#fff" })}
  <rect x="44" y="58" width="122" height="70" rx="3" fill="var(--sun)" fill-opacity=".6"/>${T(105, 90, "d", { fs: 14, b: true })}${T(105, 108, "metales de transición", { fs: 9.5, b: true })}
  <rect x="168" y="30" width="80" height="98" rx="3" fill="var(--leaf)" fill-opacity=".55"/>${T(208, 84, "p", { fs: 14, b: true, c: "#fff" })}
  <rect x="236" y="30" width="12" height="98" rx="2" fill="var(--pen)" fill-opacity=".6"/>
  <rect x="44" y="138" width="170" height="28" rx="3" fill="var(--inf)" fill-opacity=".5"/>${T(129, 156, "f (lantánidos y actínidos)", { fs: 10.5, b: true })}
  ${T(250, 26, "gases nobles", { fs: 8.5, b: true, a: "end", c: "var(--pen)" })}`);

// Tendencias periódicas.
const tendSVG = marco("Tendencias periódicas: el radio atómico crece hacia abajo y hacia la izquierda; la energía de ionización y la electronegatividad crecen hacia arriba y hacia la derecha", `
  <rect x="40" y="40" width="180" height="110" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  ${Array.from({ length: 5 }, (_, i) => `<path d="M40 ${62 + i * 22} H 220" stroke="var(--line)"/>`).join("")}${Array.from({ length: 8 }, (_, i) => `<path d="M${62 + i * 22} 40 V 150" stroke="var(--line)"/>`).join("")}
  <path d="M214 70 L 74 144" stroke="var(--red)" stroke-width="4" marker-end="url(#tpA)"/>
  <path d="M46 122 L 186 46" stroke="var(--leaf)" stroke-width="4" marker-end="url(#tpB)"/>
  ${T(130, 26, "→ energía de ionización y electronegatividad ↑", { fs: 10.5, b: true, c: "var(--leaf)" })}
  ${T(130, 170, "radio atómico ↑ hacia abajo e izquierda", { fs: 10.5, b: true, c: "var(--red)" })}`, `<marker id="tpA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="tpB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker>`);

module.exports = tema({
  titulo: "Los sistemas materiales y la estructura atómica",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar los estados de agregación y los cambios de estado con la teoría cinético-molecular",
    "Clasificar los sistemas materiales en sustancias puras y mezclas y elegir métodos de separación",
    "Calcular la concentración de una disolución en g/L, porcentaje en masa y molaridad",
    "Describir la evolución de los modelos atómicos y las partículas subatómicas",
    "Determinar el número de protones, neutrones y electrones de átomos, iones e isótopos y escribir configuraciones electrónicas",
    "Relacionar la configuración electrónica con la posición en la tabla periódica y las propiedades periódicas",
  ],
  claves: ["materia", "teoría cinético-molecular", "cambio de estado", "sustancia pura", "mezcla", "disolución", "concentración", "molaridad", "modelo atómico", "protón", "neutrón", "electrón", "número atómico", "isótopo", "configuración electrónica", "tabla periódica"],
  pregunta: {
    texto: "Si los átomos son casi espacio vacío, ¿por qué no atravesamos la mesa al apoyar la mano?",
    respuesta: "Porque lo que «choca» no son núcleos, sino las <mark>nubes de electrones</mark> de los átomos de la mano y de la mesa. Los electrones tienen carga negativa y se repelen con una fuerza eléctrica enorme a distancias tan pequeñas. Además, el <b>principio de exclusión de Pauli</b> impide que dos electrones ocupen el mismo estado. Por eso, aunque el núcleo ocupa una parte minúscula del átomo, la materia es sólida al tacto.",
  },
  lectura: {
    titulo: "Polvo de estrellas",
    html: `<p>El calcio de tus huesos, el hierro de tu sangre y el oxígeno que respiras no se formaron en la Tierra. Se fabricaron en el interior de estrellas que vivieron y murieron hace miles de millones de años. En los primeros minutos tras el Big Bang solo se formaron los núcleos más ligeros: hidrógeno, helio y una pizca de litio. Todo lo demás se cocinó después en los hornos estelares, donde la fusión nuclear une núcleos pequeños para formar otros mayores.</p><p>Las estrellas como el Sol convierten hidrógeno en helio; las más masivas siguen hasta el carbono, el oxígeno, el silicio y, por fin, el hierro. Los elementos más pesados, como el oro o el uranio, nacen en explosiones de supernova y en choques de estrellas de neutrones. Esas explosiones esparcieron la materia por el espacio y, de una nube enriquecida, se formó nuestro sistema solar. Por eso el astrónomo Carl Sagan decía que «estamos hechos de polvo de estrellas». En este tema descubrirás cómo es la materia por dentro: de qué partículas están hechos los átomos, cómo se ordenan sus electrones y por qué los 118 elementos conocidos caben en una sola tabla.</p>`,
  },
  bloques: [
    { h: "La materia y la teoría cinético-molecular", p: [
      "<b>Materia</b> es todo lo que tiene masa y ocupa un volumen. Se presenta en tres estados de agregación habituales: <b>sólido</b> (forma y volumen fijos), <b>líquido</b> (volumen fijo pero adopta la forma del recipiente) y <b>gas</b> (sin forma ni volumen propios, se expande y se comprime). Existe un cuarto estado, el <b>plasma</b>, un gas a tan alta temperatura que sus átomos han perdido electrones: es el estado del Sol, los rayos y las auroras.",
      "La <mark>teoría cinético-molecular</mark> explica estas propiedades: la materia está formada por partículas (átomos, moléculas o iones) en continuo movimiento, entre las que existen fuerzas de atracción. En los sólidos, las fuerzas son grandes y las partículas solo vibran en posiciones fijas; en los líquidos, son menores y las partículas se deslizan unas sobre otras; en los gases, son casi nulas y las partículas se mueven libres a gran velocidad, chocando entre sí y contra las paredes (eso es la <b>presión</b>). La <b>temperatura</b> es una medida de la energía cinética media de las partículas: a más temperatura, más rápido se mueven. Por eso existe un cero absoluto (0 K = −273,15 °C), en el que el movimiento sería mínimo.",
    ], svg: estadosSVG },
    { h: "Cambios de estado y leyes de los gases", p: [
      "Al calentar una sustancia, sus partículas ganan energía hasta vencer las fuerzas que las unen: se produce un <b>cambio de estado</b>. Son progresivos (absorben energía) la fusión, la vaporización y la sublimación; son regresivos (desprenden energía) la solidificación, la condensación y la sublimación inversa. Durante un cambio de estado de una sustancia pura, la temperatura se mantiene constante: toda la energía se usa en separar partículas. Por eso la gráfica de calentamiento del agua tiene tramos horizontales a 0 °C y a 100 °C. La vaporización puede ser <b>evaporación</b> (en la superficie y a cualquier temperatura) o <b>ebullición</b> (en toda la masa y a una temperatura fija que depende de la presión).",
      "Los gases cumplen leyes sencillas. A temperatura constante, la presión y el volumen son inversamente proporcionales (<b>ley de Boyle</b>: p₁V₁ = p₂V₂). A presión constante, el volumen es proporcional a la temperatura absoluta (<b>ley de Charles</b>: V/T = constante). Todas se resumen en la <mark>ecuación de los gases ideales</mark>: p·V = n·R·T, donde n es el número de moles y R = 0,082 atm·L/(mol·K). Explica por qué un globo se encoge en el congelador o por qué una bombona no debe calentarse.",
    ], svg: L5.graf("Curva de calentamiento del agua: la temperatura sube, se mantiene en 0 °C durante la fusión, sube y se mantiene en 100 °C en la ebullición", "tiempo", "T (°C)", [{ p: [[0, 0.05], [0.12, 0.25], [0.32, 0.25], [0.5, 0.75], [0.82, 0.75], [1, 0.95]], c: "var(--red)", t: "vapor" }], `${T(104, 134, "fusión 0 °C", { fs: 10, b: true, c: "var(--pen)" })}${T(172, 76, "ebullición 100 °C", { fs: 10, b: true, c: "var(--pen)" })}`), v: ["mat-a", "Diez cosas que seguro no sabías sobre el átomo"] },
    { h: "Sustancias puras y mezclas", p: [
      "Los <b>sistemas materiales</b> se clasifican según su composición. Una <mark>sustancia pura</mark> tiene composición fija y propiedades características constantes (densidad, punto de fusión y de ebullición). Puede ser un <b>elemento</b>, formado por un solo tipo de átomo (oxígeno O₂, hierro Fe, carbono C), o un <b>compuesto</b>, formado por varios elementos combinados en proporción fija (agua H₂O, sal NaCl, dióxido de carbono CO₂), que solo se puede descomponer mediante reacciones químicas.",
      "Una <mark>mezcla</mark> está formada por varias sustancias que conservan sus propiedades y se pueden separar por métodos físicos. Es <b>heterogénea</b> si se distinguen sus componentes (granito, arena con agua, ensalada) y <b>homogénea</b> o <b>disolución</b> si tiene el mismo aspecto en todos sus puntos (agua del mar, aire, bronce). Hay casos intermedios: los <b>coloides</b>, como la leche, la niebla o la mayonesa, tienen partículas tan pequeñas que no se ven, pero que dispersan la luz (efecto Tyndall). Para separar mezclas se usan métodos como la <b>filtración</b> (sólido de líquido), la <b>decantación</b> (líquidos inmiscibles), la <b>separación magnética</b>, la <b>cristalización</b> (sólido disuelto), la <b>destilación</b> (líquidos con distinto punto de ebullición) y la <b>cromatografía</b> (sustancias que avanzan a distinta velocidad sobre un soporte).",
    ], svg: arbol("Clasificación de los sistemas materiales", "Materia", [["Elemento", "un tipo de átomo: Fe, O₂"], ["Compuesto", "varios elementos fijos: H₂O"], ["Homogénea", "disolución: agua de mar"], ["Heterogénea", "se ven partes: granito"]]) },
    { h: "Las disoluciones y su concentración", p: [
      "Una <mark>disolución</mark> es una mezcla homogénea de un <b>disolvente</b> (el componente mayoritario, a menudo el agua) y uno o varios <b>solutos</b>. La <b>solubilidad</b> es la máxima cantidad de soluto que se disuelve en una cantidad de disolvente a una temperatura dada; una disolución que la alcanza está <b>saturada</b>. La solubilidad de casi todos los sólidos aumenta con la temperatura, pero la de los gases disminuye: por eso los peces sufren en aguas cálidas, que tienen menos oxígeno, y un refresco caliente pierde el gas antes.",
      "La <mark>concentración</mark> indica cuánto soluto hay en una cantidad de disolución. Se expresa en <b>gramos por litro</b> (g/L = masa de soluto / volumen de disolución), en <b>porcentaje en masa</b> (masa de soluto / masa de disolución · 100), en <b>porcentaje en volumen</b> (los grados de una bebida alcohólica) o en <b>molaridad</b> (M = moles de soluto / litros de disolución). Para calcular moles se usa la masa molar: n = m / M. Por ejemplo, 58,5 g de NaCl son 1 mol; disueltos hasta 1 L dan una disolución 1 M. El suero fisiológico tiene 9 g/L de NaCl (0,9 %), la misma concentración que las células, y para concentraciones muy pequeñas se usan las partes por millón (ppm), como en la contaminación del agua.",
    ], svg: L6.tabla("Formas de expresar la concentración", ["Unidad", "Fórmula", "Ejemplo"], [["g/L", "m soluto / V dis.", "suero 9 g/L"], ["% masa", "m sol. / m dis. ·100", "agua de mar 3,5 %"], ["% volumen", "V sol. / V dis. ·100", "vino 13 %"], ["Molaridad", "n / V (L)", "HCl 0,1 M"]]) },
    { h: "Los primeros modelos atómicos", p: [
      "La idea de que la materia está formada por partículas indivisibles, los átomos, fue propuesta por Demócrito en el siglo V a. C., pero no se convirtió en ciencia hasta 1808, cuando <b>John Dalton</b> la usó para explicar las leyes de las reacciones químicas. Según su <b>teoría atómica</b>, los elementos están formados por átomos indivisibles; los átomos de un mismo elemento son iguales en masa y propiedades; los compuestos se forman al unirse átomos en proporciones sencillas, y en las reacciones los átomos se reorganizan sin crearse ni destruirse.",
      "En 1897, <b>J. J. Thomson</b> descubrió el <mark>electrón</mark>, una partícula con carga negativa mucho más ligera que el átomo, al estudiar los rayos catódicos. El átomo, por tanto, no era indivisible. Thomson propuso un modelo en el que los electrones estaban incrustados en una esfera de carga positiva, como las pasas en un pudin. En 1911, <b>Ernest Rutherford</b> bombardeó una finísima lámina de oro con partículas alfa (positivas). Casi todas la atravesaban sin desviarse, pero unas pocas rebotaban. Concluyó que el átomo es casi todo espacio vacío, con un <mark>núcleo</mark> diminuto, positivo y que concentra casi toda la masa, alrededor del cual giran los electrones. Si el átomo fuera un estadio de fútbol, el núcleo sería un garbanzo en el centro.",
    ], svg: rutherfordSVG },
    { h: "El modelo de Bohr y el modelo actual", p: [
      "El modelo de Rutherford tenía un problema: según la física clásica, un electrón girando debería perder energía y caer al núcleo. En 1913, <b>Niels Bohr</b> propuso que los electrones solo pueden moverse en ciertas <b>órbitas</b> con energía fija (niveles de energía, n = 1, 2, 3…) sin perder energía. Cuando un electrón salta de un nivel a otro inferior, emite un fotón de luz con una energía exacta; por eso cada elemento produce un <b>espectro</b> de líneas característico, su «huella dactilar». Así se identifican los elementos de las estrellas o los de los fuegos artificiales (el sodio da amarillo; el estroncio, rojo; el cobre, verde-azulado).",
      "El <b>modelo mecanocuántico</b> actual, desarrollado por Schrödinger, Heisenberg y otros en los años veinte, abandona las órbitas: no podemos conocer a la vez la posición y la velocidad exactas de un electrón (principio de incertidumbre), solo la probabilidad de encontrarlo en una región. Esas regiones se llaman <mark>orbitales</mark> y se organizan en niveles (n = 1, 2, 3…) y subniveles <b>s, p, d y f</b>, que admiten como máximo 2, 6, 10 y 14 electrones. En 1932, Chadwick descubrió el <b>neutrón</b>, la partícula sin carga del núcleo, completando la imagen del átomo.",
    ], svg: L6.linea("Evolución de los modelos atómicos", [["1808", "Dalton: esfera"], ["1897", "Thomson: pudin"], ["1911", "Rutherford: núcleo"], ["1913", "Bohr: órbitas"], ["1926", "Schrödinger: orbitales"], ["1932", "Chadwick: neutrón"]], "Modelos atómicos") },
    { h: "Partículas subatómicas, número atómico y número másico", p: [
      "El átomo está formado por tres partículas. En el núcleo están los <mark>protones</mark> (carga +1, masa ≈ 1 u) y los <mark>neutrones</mark> (sin carga, masa ≈ 1 u); en la corteza, los <mark>electrones</mark> (carga −1, masa unas 1836 veces menor). Hoy sabemos que protones y neutrones están formados por partículas aún menores, los quarks, mientras que el electrón es fundamental.",
      "El <b>número atómico (Z)</b> es el número de protones y define el elemento: todos los átomos con 6 protones son de carbono. En un átomo neutro, el número de electrones es igual a Z. El <b>número másico (A)</b> es la suma de protones y neutrones, de modo que el número de neutrones es N = A − Z. Se escribe con el símbolo del elemento, el número másico arriba a la izquierda y el número atómico abajo: ¹²₆C tiene 6 protones, 6 neutrones y 6 electrones. Cuando un átomo gana o pierde electrones se convierte en un <b>ion</b>: un <b>catión</b> (positivo) si los pierde, como Na⁺ (11 protones y 10 electrones), y un <b>anión</b> (negativo) si los gana, como Cl⁻ (17 protones y 18 electrones). Los iones son esenciales en la vida: el Na⁺ y el K⁺ transmiten los impulsos nerviosos.",
    ], svg: atomoSVG, v: ["mat-d", "Protones, neutrones y electrones"] },
    { h: "Isótopos, masa atómica y radiactividad", p: [
      "Los <mark>isótopos</mark> son átomos de un mismo elemento (igual Z) con distinto número de neutrones (distinto A). El hidrógeno tiene tres: protio (¹H, sin neutrones), deuterio (²H) y tritio (³H). El carbono natural es un 98,9 % de carbono-12, un 1,1 % de carbono-13 y trazas de carbono-14. Los isótopos de un elemento tienen las mismas propiedades químicas, porque estas dependen de los electrones, pero distinta masa.",
      "Por eso la <b>masa atómica</b> que aparece en la tabla periódica es una <b>media ponderada</b> de las masas de sus isótopos según su abundancia: el cloro (75,8 % de cloro-35 y 24,2 % de cloro-37) tiene una masa de 35,45 u. Algunos isótopos tienen núcleos inestables y se desintegran emitiendo radiación: son <b>radiactivos</b>. Cada uno tarda un tiempo fijo, su <b>periodo de semidesintegración</b>, en reducirse a la mitad: 5730 años el carbono-14, lo que permite datar restos orgánicos de hasta unos 50 000 años. Los isótopos radiactivos se usan en medicina (el yodo-131 para tratar la tiroides; el flúor-18 en la tomografía PET), en la industria y en la generación de electricidad.",
    ], svg: L6.tabla("Isótopos del hidrógeno y del carbono", ["Isótopo", "p · n", "Uso"], [["¹H protio", "1 · 0", "99,98 %"], ["²H deuterio", "1 · 1", "agua pesada"], ["³H tritio", "1 · 2", "radiactivo"], ["¹²C", "6 · 6", "patrón de masa"], ["¹⁴C", "6 · 8", "datación"]]) },
    { h: "La configuración electrónica", p: [
      "La <mark>configuración electrónica</mark> indica cómo se distribuyen los electrones de un átomo en sus orbitales. Los electrones ocupan primero los orbitales de menor energía, siguiendo el orden del <b>diagrama de Moeller</b> (regla de las diagonales): 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s… Cada subnivel admite un máximo de electrones: s², p⁶, d¹⁰ y f¹⁴. Así, el sodio (Z = 11) es 1s² 2s² 2p⁶ 3s¹ y el cloro (Z = 17), 1s² 2s² 2p⁶ 3s² 3p⁵.",
      "Lo más importante es la <b>capa de valencia</b>, la más externa, porque sus electrones (los <b>electrones de valencia</b>) son los que participan en las reacciones químicas. El sodio tiene 1 electrón de valencia y tiende a perderlo; el cloro tiene 7 y tiende a ganar uno. Ambos buscan la configuración de un gas noble, con 8 electrones en la última capa (<b>regla del octeto</b>), que es especialmente estable. Para abreviar, se usa el gas noble anterior entre corchetes: el sodio es [Ne] 3s¹ y el hierro (Z = 26), [Ar] 4s² 3d⁶. Los iones también tienen configuración: Na⁺ y Ne son <b>isoelectrónicos</b> (1s² 2s² 2p⁶).",
    ], svg: L5.pasos("Orden de llenado de los orbitales según el diagrama de Moeller", ["1s → 2s → 2p", "3s → 3p → 4s", "3d → 4p → 5s", "4d → 5p → 6s", "4f → 5d → 6p"], "var(--pen)"), v: ["mat-b", "Configuración electrónica fácil y rápida"] },
    { h: "La tabla periódica", p: [
      "En 1869, el químico ruso <b>Dmitri Mendeléiev</b> ordenó los 63 elementos conocidos por su masa atómica y agrupó los de propiedades parecidas. Su genialidad fue dejar huecos para elementos aún no descubiertos y predecir sus propiedades; cuando se descubrieron el galio y el germanio, encajaron casi exactamente. Hoy la <mark>tabla periódica</mark> ordena los 118 elementos por <b>número atómico</b> creciente, en 7 <b>periodos</b> (filas) y 18 <b>grupos</b> (columnas).",
      "La tabla es un reflejo de la configuración electrónica. El número del <b>periodo</b> coincide con el de la capa de valencia, y los elementos de un mismo <b>grupo</b> tienen el mismo número de electrones de valencia, por lo que se comportan de forma parecida. Según el último subnivel que llenan, se divide en bloques: <b>s</b> (grupos 1 y 2: alcalinos y alcalinotérreos), <b>p</b> (grupos 13 a 18: térreos, carbonoideos, nitrogenoideos, anfígenos, halógenos y gases nobles), <b>d</b> (metales de transición) y <b>f</b> (lantánidos y actínidos). Unos 90 elementos son <b>metales</b> (brillantes, conductores, dúctiles), situados a la izquierda; los <b>no metales</b>, a la derecha, y entre ambos hay una franja de <b>semimetales</b> como el silicio, base de los chips.",
    ], svg: bloquesSVG, v: ["mat-c", "La tabla periódica: organización y clasificación de los elementos"] },
    { h: "Las propiedades periódicas", p: [
      "Algunas propiedades varían de forma regular a lo largo de la tabla. El <mark>radio atómico</mark> aumenta al bajar en un grupo, porque se añaden capas, y disminuye al avanzar en un periodo, porque el núcleo tiene más protones y atrae con más fuerza a los electrones de la misma capa. La <b>energía de ionización</b>, la energía necesaria para arrancar un electrón a un átomo en estado gaseoso, sigue la tendencia contraria: es mayor arriba y a la derecha (los gases nobles la tienen altísima) y menor abajo y a la izquierda (el cesio pierde su electrón con facilidad).",
      "La <mark>electronegatividad</mark> es la tendencia de un átomo a atraer los electrones de un enlace. El flúor es el elemento más electronegativo (4,0 en la escala de Pauling), seguido del oxígeno, el nitrógeno y el cloro; los metales alcalinos son los menos electronegativos. El <b>carácter metálico</b>, la facilidad para perder electrones y formar cationes, aumenta hacia abajo y a la izquierda. Estas tendencias permiten predecir cómo reaccionará un elemento: un metal alcalino (poco electronegativo) y un halógeno (muy electronegativo) reaccionan con violencia y forman un compuesto iónico, como el NaCl, que estudiarás en el tema siguiente.",
    ], svg: tendSVG },
    { h: "Los elementos en la vida y en la tecnología", p: [
      "Cada elemento tiene un papel. Solo seis, <b>carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre</b>, forman el 99 % de los seres vivos, y otros como el calcio (huesos), el hierro (hemoglobina) o el yodo (tiroides) son imprescindibles en pequeñas cantidades. En la corteza terrestre dominan el oxígeno y el silicio, que forman los silicatos de casi todas las rocas, seguidos del aluminio y el hierro.",
      "La tecnología actual depende de elementos escasos. Un teléfono móvil contiene más de 60 elementos: litio y cobalto en la batería, indio en la pantalla táctil, tántalo en los condensadores y <b>tierras raras</b> como el neodimio en los imanes del altavoz y del vibrador. Los aerogeneradores y los coches eléctricos necesitan grandes cantidades de neodimio, litio y cobre. Muchos de estos <b>materiales críticos</b> se extraen en pocos países, a veces con graves costes ambientales y sociales, como el cobalto del Congo. Por eso la Unión Europea impulsa su reciclaje: una tonelada de móviles usados contiene más oro que una tonelada de mineral de una mina. Conocer la tabla periódica es también conocer los recursos de los que depende nuestra forma de vida.",
    ], svg: L5.barras("Elementos más abundantes en la corteza terrestre (% en masa)", "Corteza terrestre (% masa)", [["O", 46.6, "var(--red)", "46,6 %"], ["Si", 27.7, "var(--pen)", "27,7 %"], ["Al", 8.1, "var(--leaf)", "8,1 %"], ["Fe", 5, "var(--sun)", "5,0 %"], ["Ca", 3.6, "var(--inf)", "3,6 %"]]) },
  ],
  figura: { titulo: "Los sistemas materiales y el átomo", items: [["Estados", "sólido · líquido", "gas · plasma", "pV = nRT"], ["Mezclas", "homogéneas", "heterogéneas", "M = n/V"], ["Átomo", "p⁺ n⁰ e⁻", "Z y A", "isótopos"], ["Tabla", "periodos · grupos", "s p d f", "tendencias"]] },
  video: ["mat-c", "La tabla periódica: organización y clasificación de los elementos"],
  ejemplos: [
    ["Un gas ocupa 4,0 L a 1,0 atm. ¿Qué volumen ocupará a 2,5 atm si la temperatura no cambia?", ["Temperatura constante: ley de Boyle, p₁V₁ = p₂V₂.", "V₂ = p₁V₁ / p₂ = 1,0 · 4,0 / 2,5.", "V₂ = 1,6 L."], "1,6 L: al aumentar la presión, el volumen disminuye."],
    ["Se disuelven 20 g de NaOH (M = 40 g/mol) en agua hasta 500 mL. Calcula la concentración en g/L y la molaridad.", ["g/L = 20 g / 0,500 L = 40 g/L.", "n = m / M = 20 / 40 = 0,50 mol.", "M = n / V = 0,50 / 0,500 = 1,0 mol/L."], "40 g/L y 1,0 M."],
    ["Indica protones, neutrones y electrones de ⁵⁶₂₆Fe³⁺ y de ³²₁₆S²⁻.", ["Fe³⁺: Z = 26 → 26 p; N = 56 − 26 = 30 n; ha perdido 3 e⁻ → 23 e⁻.", "S²⁻: Z = 16 → 16 p; N = 32 − 16 = 16 n; ha ganado 2 e⁻ → 18 e⁻."], "Fe³⁺: 26 p, 30 n, 23 e⁻. S²⁻: 16 p, 16 n, 18 e⁻."],
    ["El cobre tiene dos isótopos: ⁶³Cu (69,2 %, 62,93 u) y ⁶⁵Cu (30,8 %, 64,93 u). Calcula su masa atómica.", ["Media ponderada: (62,93 · 69,2 + 64,93 · 30,8) / 100.", "= (4354,8 + 1999,8) / 100.", "= 63,55 u."], "Masa atómica del cobre ≈ 63,55 u."],
    ["Escribe la configuración electrónica del potasio (Z = 19) y del bromo (Z = 35) y deduce su periodo, grupo y electrones de valencia.", ["K: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ → periodo 4, grupo 1 (alcalino), 1 e⁻ de valencia.", "Br: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ → periodo 4, grupo 17 (halógeno), 7 e⁻ de valencia (4s² 4p⁵)."], "K: [Ar] 4s¹ (periodo 4, grupo 1). Br: [Ar] 4s² 3d¹⁰ 4p⁵ (periodo 4, grupo 17)."],
    ["Ordena Na, Mg, Cl y K por radio atómico creciente y por electronegatividad creciente.", ["Radio: disminuye a la derecha en el periodo 3 (Na > Mg > Cl) y el K, en el periodo 4, es el mayor.", "Radio creciente: Cl &lt; Mg &lt; Na &lt; K.", "Electronegatividad: aumenta a la derecha y hacia arriba: K &lt; Na &lt; Mg &lt; Cl."], "Radio: Cl &lt; Mg &lt; Na &lt; K. Electronegatividad: K &lt; Na &lt; Mg &lt; Cl."],
  ],
  errores: [
    "Pensar que durante un cambio de estado la temperatura sigue subiendo: en una sustancia pura se mantiene constante.",
    "Confundir compuesto con mezcla: el compuesto tiene proporción fija y solo se separa con reacciones químicas.",
    "Calcular la molaridad dividiendo entre mililitros o entre el volumen de disolvente: es moles entre litros de disolución.",
    "Creer que el número másico es la masa atómica de la tabla: A es un número entero; la masa atómica es una media de isótopos.",
    "Al formar un ion, cambiar los protones: un ion gana o pierde electrones; Z no cambia nunca.",
    "Llenar el 3d antes que el 4s o confundir el número de electrones de valencia con el número de la última capa.",
  ],
  ejercicios: {
    b: [
      ["Explica con la teoría cinético-molecular por qué los gases se pueden comprimir y los sólidos no.", "En los gases las partículas están muy separadas y las fuerzas entre ellas son casi nulas, por lo que hay espacio para acercarlas. En los sólidos están muy juntas y unidas por fuerzas intensas."],
      ["Nombra los cambios de estado progresivos y regresivos.", "Progresivos (absorben energía): fusión, vaporización y sublimación. Regresivos (desprenden energía): solidificación, condensación y sublimación inversa (o deposición)."],
      ["Diferencia evaporación y ebullición.", "La evaporación ocurre solo en la superficie y a cualquier temperatura; la ebullición ocurre en toda la masa del líquido y a una temperatura fija (punto de ebullición) que depende de la presión."],
      ["Clasifica como elemento, compuesto, mezcla homogénea o heterogénea: aire, oro, agua destilada, granito, sal común, leche con cacao.", "Aire: mezcla homogénea. Oro: elemento. Agua destilada: compuesto. Granito: mezcla heterogénea. Sal común (NaCl): compuesto. Leche con cacao: mezcla (coloide/heterogénea)."],
      ["¿Qué método usarías para separar: a) arena y agua; b) sal disuelta en agua; c) agua y aceite; d) limaduras de hierro y azufre?", "a) Filtración (o decantación). b) Cristalización (evaporación). c) Decantación con embudo de decantación. d) Separación magnética."],
      ["Se disuelven 15 g de azúcar en agua hasta 250 mL. Calcula la concentración en g/L.", "c = 15 g / 0,250 L = 60 g/L."],
      ["Describe el modelo atómico de Thomson y el de Rutherford.", "Thomson: esfera de carga positiva con electrones incrustados (pudin de pasas). Rutherford: núcleo pequeño, denso y positivo con casi toda la masa, y electrones girando alrededor en un gran espacio vacío."],
      ["Completa: el número atómico es el número de ___; el número másico es la suma de ___ y ___.", "Protones; protones y neutrones."],
      ["Indica protones, neutrones y electrones de ²³₁₁Na, ¹⁶₈O y ⁴⁰₂₀Ca.", "Na: 11 p, 12 n, 11 e⁻. O: 8 p, 8 n, 8 e⁻. Ca: 20 p, 20 n, 20 e⁻."],
      ["¿Qué son los isótopos? Pon un ejemplo.", "Átomos del mismo elemento (igual Z) con distinto número de neutrones (distinto A). Ejemplo: carbono-12 y carbono-14."],
      ["Escribe la configuración electrónica del oxígeno (Z = 8) y del magnesio (Z = 12).", "O: 1s² 2s² 2p⁴. Mg: 1s² 2s² 2p⁶ 3s²."],
      ["¿Qué tienen en común los elementos de un mismo grupo? ¿Y los de un mismo periodo?", "Grupo: el mismo número de electrones de valencia y propiedades químicas parecidas. Periodo: el mismo número de capas (la capa de valencia es la del número de periodo)."],
    ],
    m: [
      ["Un gas ocupa 3,0 L a 27 °C. ¿Qué volumen ocupará a 127 °C si la presión no cambia?", "Ley de Charles con temperaturas absolutas: T₁ = 300 K, T₂ = 400 K. V₂ = V₁·T₂/T₁ = 3,0 · 400 / 300 = 4,0 L."],
      ["¿Cuántos moles de gas hay en un recipiente de 10 L a 2 atm y 300 K? (R = 0,082 atm·L/mol·K)", "n = pV / RT = 2 · 10 / (0,082 · 300) = 20 / 24,6 = 0,81 mol."],
      ["Calcula la molaridad de una disolución con 11,7 g de NaCl (M = 58,5 g/mol) en 400 mL.", "n = 11,7 / 58,5 = 0,20 mol. M = 0,20 / 0,400 = 0,50 M."],
      ["¿Qué masa de glucosa (C₆H₁₂O₆, M = 180 g/mol) hace falta para preparar 250 mL de disolución 0,2 M?", "n = M·V = 0,2 · 0,250 = 0,05 mol. m = 0,05 · 180 = 9,0 g."],
      ["Una disolución tiene 30 g de soluto en 170 g de agua. Calcula el porcentaje en masa.", "Masa de disolución = 30 + 170 = 200 g. % = 30 / 200 · 100 = 15 %."],
      ["Explica qué observó Rutherford y qué conclusión sacó de cada observación.", "La mayoría de partículas alfa atravesaban la lámina: el átomo es casi vacío. Algunas se desviaban: hay una zona con carga positiva que las repele. Muy pocas rebotaban: esa zona es muy pequeña y concentra casi toda la masa (el núcleo)."],
      ["¿Por qué cada elemento tiene un espectro de líneas distinto? ¿Qué aplicación tiene?", "Porque sus niveles de energía son distintos y los electrones, al bajar de nivel, emiten fotones de energías concretas. Sirve para identificar elementos a distancia, como la composición de las estrellas, o en análisis químico."],
      ["Indica protones, neutrones y electrones de ²⁷₁₃Al³⁺, ¹⁹₉F⁻ y ²⁰⁷₈₂Pb²⁺.", "Al³⁺: 13 p, 14 n, 10 e⁻. F⁻: 9 p, 10 n, 10 e⁻. Pb²⁺: 82 p, 125 n, 80 e⁻."],
      ["El boro tiene dos isótopos: ¹⁰B (19,9 %, 10,01 u) y ¹¹B (80,1 %, 11,01 u). Calcula su masa atómica.", "(10,01·19,9 + 11,01·80,1)/100 = (199,2 + 881,9)/100 = 10,81 u."],
      ["Escribe la configuración electrónica del calcio (Z = 20), del Ca²⁺ y del argón. ¿Qué observas?", "Ca: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Ca²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶. Ar: 1s² 2s² 2p⁶ 3s² 3p⁶. El Ca²⁺ y el Ar son isoelectrónicos: el calcio pierde 2 electrones y adquiere la configuración del gas noble."],
      ["Un elemento tiene configuración 1s² 2s² 2p⁶ 3s² 3p³. ¿Cuál es su Z, periodo, grupo y nombre?", "Z = 15; periodo 3; grupo 15 (nitrogenoideos), 5 e⁻ de valencia; es el fósforo."],
      ["Ordena por energía de ionización creciente: Li, F, Na, N.", "Aumenta hacia arriba y a la derecha: Na &lt; Li &lt; N &lt; F."],
    ],
    a: [
      ["Una bombona de 20 L contiene gas a 5 atm y 20 °C. Se calienta al sol hasta 60 °C. ¿Qué presión alcanza? ¿Por qué es peligroso?", "Volumen constante: p₂ = p₁·T₂/T₁ = 5 · 333/293 = 5,7 atm. Al subir la temperatura, las partículas chocan con más fuerza y frecuencia contra las paredes; si la presión supera la resistencia del recipiente, puede explotar."],
      ["Se mezclan 200 mL de HCl 0,5 M con 300 mL de HCl 0,2 M. ¿Cuál es la molaridad final?", "n₁ = 0,5·0,200 = 0,10 mol; n₂ = 0,2·0,300 = 0,06 mol. Total 0,16 mol en 0,500 L. M = 0,32 M."],
      ["Un ácido sulfúrico comercial es del 98 % en masa y tiene densidad 1,84 g/mL. Calcula su molaridad (M H₂SO₄ = 98 g/mol).", "1 L de disolución = 1840 g; de ellos, 98 % es ácido: 1803 g. n = 1803 / 98 = 18,4 mol. Molaridad = 18,4 M."],
      ["El carbono-14 tiene un periodo de semidesintegración de 5730 años. Un hueso conserva el 25 % del carbono-14 que tenía un ser vivo. ¿Qué antigüedad tiene?", "25 % = (1/2)² → han pasado dos periodos: 2 · 5730 = 11 460 años."],
      ["El galio tiene dos isótopos, ⁶⁹Ga (68,93 u) y ⁷¹Ga (70,92 u), y una masa atómica de 69,72 u. Calcula la abundancia de cada uno.", "Si x es la fracción de ⁶⁹Ga: 68,93x + 70,92(1 − x) = 69,72 → 70,92 − 1,99x = 69,72 → x = 0,603. Abundancias: 60,3 % de ⁶⁹Ga y 39,7 % de ⁷¹Ga."],
      ["Escribe la configuración electrónica del hierro (Z = 26) y del Fe³⁺, sabiendo que al ionizarse pierde primero los electrones 4s.", "Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ = [Ar] 4s² 3d⁶. Fe³⁺: pierde los 2 electrones 4s y uno 3d → [Ar] 3d⁵."],
      ["Mendeléiev predijo el «eka-silicio» (germanio): masa ≈ 72 y densidad ≈ 5,5 g/cm³. El germanio real tiene masa 72,6 y densidad 5,32. Explica qué demuestra este hecho sobre el valor de un modelo científico.", "Un buen modelo no solo ordena lo conocido, sino que hace predicciones comprobables. Que las propiedades predichas coincidieran casi exactamente con las del elemento descubierto después fue una prueba muy sólida de que la ley periódica reflejaba una regularidad real (que luego se explicó con la configuración electrónica)."],
      ["Un elemento X está en el periodo 3 y forma el ion X²⁻, isoelectrónico con el argón. Identifícalo, escribe su configuración y explica su electronegatividad comparada con la del sodio.", "X²⁻ tiene 18 e⁻, así que X tiene 16: es el azufre, 1s² 2s² 2p⁶ 3s² 3p⁴ (grupo 16). Está a la derecha del periodo 3, con más protones y menor radio que el sodio, por lo que atrae mucho más los electrones: es mucho más electronegativo (2,6 frente a 0,9)."],
    ],
  },
  quiz: [
    ["La temperatura de un cuerpo mide…", ["su masa", "la energía cinética media de sus partículas", "el calor que contiene", "su volumen"], 1, "Más temperatura, partículas más rápidas."],
    ["Durante la fusión del hielo, la temperatura…", ["sube", "baja", "se mantiene constante", "oscila"], 2, "La energía se usa en separar partículas."],
    ["A temperatura constante, si se duplica la presión de un gas, su volumen…", ["se duplica", "se reduce a la mitad", "no cambia", "se cuadruplica"], 1, "Ley de Boyle: pV = constante."],
    ["El agua destilada es…", ["un elemento", "un compuesto", "una mezcla homogénea", "una mezcla heterogénea"], 1, "H₂O: dos elementos en proporción fija."],
    ["Para separar dos líquidos con distinto punto de ebullición se usa…", ["filtración", "destilación", "imantación", "tamizado"], 1, "Se evapora primero el más volátil."],
    ["La molaridad se expresa en…", ["g/L", "mol/L", "%", "g/mol"], 1, "Moles de soluto por litro de disolución."],
    ["La solubilidad de los gases en agua al aumentar la temperatura…", ["aumenta", "disminuye", "no cambia", "se anula"], 1, "Por eso el agua cálida tiene menos oxígeno."],
    ["Thomson descubrió…", ["el núcleo", "el electrón", "el neutrón", "los orbitales"], 1, "Con los rayos catódicos (1897)."],
    ["El experimento de la lámina de oro demostró que…", ["el átomo es macizo", "el átomo tiene un núcleo pequeño y denso", "los electrones están en órbitas", "existen los neutrones"], 1, "Rutherford, 1911."],
    ["El número atómico Z es el número de…", ["neutrones", "protones", "nucleones", "electrones ganados"], 1, "Define el elemento."],
    ["¹⁴₆C tiene…", ["6 neutrones", "8 neutrones", "14 protones", "8 electrones"], 1, "N = 14 − 6."],
    ["Un catión es un átomo que…", ["ha ganado electrones", "ha perdido electrones", "ha ganado protones", "ha perdido neutrones"], 1, "Queda con carga positiva."],
    ["Los isótopos de un elemento se diferencian en el número de…", ["protones", "electrones", "neutrones", "orbitales"], 2, "Igual Z, distinto A."],
    ["Un subnivel p admite como máximo…", ["2 electrones", "6 electrones", "10 electrones", "14 electrones"], 1, "s², p⁶, d¹⁰, f¹⁴."],
    ["La configuración 1s² 2s² 2p⁶ 3s¹ corresponde al…", ["neón", "sodio", "magnesio", "litio"], 1, "Z = 11."],
    ["En la tabla periódica actual los elementos se ordenan por…", ["masa atómica", "número atómico", "densidad", "fecha de descubrimiento"], 1, "Mendeléiev usó la masa; hoy se usa Z."],
    ["Los halógenos son el grupo…", ["1", "2", "17", "18"], 2, "F, Cl, Br, I…"],
    ["El elemento más electronegativo es el…", ["oxígeno", "flúor", "cesio", "helio"], 1, "4,0 en la escala de Pauling."],
    ["En un periodo, de izquierda a derecha, el radio atómico…", ["aumenta", "disminuye", "no cambia", "se duplica"], 1, "El núcleo atrae más a la misma capa."],
    ["Los dos elementos más abundantes en la corteza son…", ["Fe y Al", "O y Si", "C y H", "N y O"], 1, "Forman los silicatos."],
  ],
  examen: [
    ["0,5 mol de NaCl en 250 mL dan una disolución…", ["0,125 M", "2 M", "0,5 M", "1 M"], 1, "0,5 / 0,250."],
    ["⁵⁶₂₆Fe²⁺ tiene…", ["26 e⁻", "24 e⁻", "28 e⁻", "30 e⁻"], 1, "Pierde 2 de sus 26."],
    ["La configuración [Ne] 3s² 3p⁵ es la del…", ["azufre", "cloro", "argón", "fósforo"], 1, "Z = 17."],
    ["Bohr explicó…", ["los espectros de líneas", "la radiactividad", "el neutrón", "los isótopos"], 0, "Saltos entre niveles de energía."],
    ["Un coloide se distingue porque…", ["se separa al filtrar", "dispersa la luz (efecto Tyndall)", "es un compuesto", "es transparente siempre"], 1, "Partículas intermedias."],
    ["A volumen constante, al calentar un gas su presión…", ["baja", "sube", "no cambia", "se anula"], 1, "p/T = constante."],
    ["Na⁺ y Ne son…", ["isótopos", "isoelectrónicos", "isóbaros", "del mismo grupo"], 1, "Ambos tienen 10 electrones."],
    ["¿Cuál tiene mayor radio?", ["Li", "Na", "K", "Cs"], 3, "Crece al bajar en el grupo."],
  ],
  feynman: ["Por qué el hielo no sube de 0 °C mientras se funde", "Qué diferencia un compuesto de una mezcla", "Qué demostró el experimento de Rutherford", "Por qué los isótopos tienen las mismas propiedades químicas", "Qué relación hay entre configuración electrónica y tabla periódica", "Por qué el flúor es tan electronegativo"],
  mapa: ["LA MATERIA", [["Estados", "TCM, cambios, gases"], ["Sistemas", "puras, mezclas, molaridad"], ["Átomo", "modelos, Z, A, isótopos"], ["Tabla", "configuración, tendencias"]]],
  tarjetas: [
    ["Teoría cinético-molecular", "Partículas en movimiento; T = energía cinética media."],
    ["Gases ideales", "p·V = n·R·T (R = 0,082 atm·L/mol·K)."],
    ["Sustancia pura", "Composición fija: elemento o compuesto."],
    ["Disolución", "Mezcla homogénea de soluto y disolvente."],
    ["Molaridad", "M = moles de soluto / litros de disolución."],
    ["Rutherford", "Núcleo pequeño, denso y positivo; átomo casi vacío."],
    ["Bohr", "Electrones en niveles de energía; espectros de líneas."],
    ["Z y A", "Z = protones; A = protones + neutrones."],
    ["Isótopos", "Mismo Z, distinto número de neutrones."],
    ["Configuración electrónica", "1s 2s 2p 3s 3p 4s 3d 4p…"],
    ["Grupo y periodo", "Grupo: e⁻ de valencia; periodo: capa de valencia."],
    ["Electronegatividad", "Atracción de los e⁻ de enlace; máxima en el flúor."],
  ],
  glosario: [
    ["Materia", "Todo lo que tiene masa y ocupa un volumen."],
    ["Plasma", "Gas ionizado a muy alta temperatura."],
    ["Elemento", "Sustancia pura formada por un solo tipo de átomo."],
    ["Compuesto", "Sustancia pura formada por varios elementos en proporción fija."],
    ["Disolución", "Mezcla homogénea de un disolvente y uno o más solutos."],
    ["Solubilidad", "Máxima cantidad de soluto que se disuelve a una temperatura."],
    ["Mol", "Cantidad de sustancia con 6,022·10²³ partículas."],
    ["Molaridad", "Moles de soluto por litro de disolución."],
    ["Núcleo atómico", "Zona central del átomo con protones y neutrones."],
    ["Orbital", "Región donde es más probable encontrar un electrón."],
    ["Número atómico", "Número de protones del núcleo (Z)."],
    ["Número másico", "Suma de protones y neutrones (A)."],
    ["Ion", "Átomo con carga por haber ganado o perdido electrones."],
    ["Isótopo", "Átomo del mismo elemento con distinto número de neutrones."],
    ["Electrones de valencia", "Electrones de la última capa, que intervienen en los enlaces."],
    ["Electronegatividad", "Tendencia de un átomo a atraer los electrones de un enlace."],
  ],
  situacion: {
    titulo: "La huella de los elementos",
    reto: "Un museo os encarga una exposición sobre los elementos de nuestra vida diaria. Debéis identificar elementos por el color de su llama, explicar por qué ocurre con el modelo de Bohr y relacionar cada elemento con su posición en la tabla periódica y sus usos.",
    pasos: [
      "Con el profesor, realizad el ensayo a la llama con cloruros de sodio, potasio, litio, calcio, estroncio y cobre, y anotad los colores.",
      "Explicad el fenómeno con los saltos de electrones entre niveles y relacionadlo con los fuegos artificiales y las farolas de sodio.",
      "Escribid la configuración electrónica de cada metal y situadlo en la tabla periódica.",
      "Investigad un uso tecnológico o biológico de cada elemento y si es un material crítico.",
      "Diseñad un panel o una tabla periódica interactiva con la información.",
    ],
    producto: "Un panel expositivo o una tabla periódica digital con fotos de las llamas, explicaciones y usos.",
    evaluacion: ["Las observaciones se registran con rigor y seguridad.", "La explicación con el modelo de Bohr es correcta.", "Las configuraciones y posiciones en la tabla son correctas.", "La información sobre usos está documentada con fuentes fiables."],
  },
  familias: [
    "Buscad en casa ejemplos de mezclas homogéneas, heterogéneas y coloides (vinagre, ensalada, mayonesa).",
    "Mirad las etiquetas del agua mineral o de un medicamento y calculad concentraciones en g/L.",
    "Contad cuántos elementos distintos aparecen en las etiquetas de los alimentos o de los cosméticos.",
    "Hablad de por qué conviene reciclar los móviles viejos y qué elementos valiosos contienen.",
  ],
  saberes: "bloque «B. Un universo de materia y energía»: los sistemas materiales, sus estados de agregación y la teoría cinético-molecular; sustancias puras y mezclas, disoluciones y su concentración; la estructura del átomo, la evolución de los modelos atómicos, las partículas subatómicas e isótopos; la configuración electrónica y la clasificación periódica de los elementos y sus propiedades.",
  ideas: [
    "Ensayo a la llama con distintas sales metálicas y espectroscopio casero con un CD.",
    "Preparación de disoluciones de concentración conocida y cálculo de la molaridad.",
    "Simulación del experimento de Rutherford con canicas y un objeto oculto.",
    "Juego de cartas de la tabla periódica para descubrir las tendencias.",
  ],
  fuentes: [
    { t: "IUPAC: tabla periódica de los elementos", url: "https://iupac.org/what-we-do/periodic-table-of-elements/" },
    { t: "Real Sociedad Española de Química", url: "https://rseq.org/" },
  ],
});
