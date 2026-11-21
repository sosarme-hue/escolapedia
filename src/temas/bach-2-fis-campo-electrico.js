// Física 2º Bachillerato · El campo eléctrico (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;
const rad = (cx, cy, r1, r2, n, c, id, sale) => Array.from({ length: n }, (_, i) => { const a = (i * 2 * Math.PI) / n, co = Math.cos(a), s = Math.sin(a); const [a1, a2] = sale ? [r1, r2] : [r2, r1]; return `<path d="M${(cx + a1 * co).toFixed(1)} ${(cy + a1 * s).toFixed(1)} L ${(cx + a2 * co).toFixed(1)} ${(cy + a2 * s).toFixed(1)}" stroke="${c}" stroke-width="2" marker-end="url(#${id})"/>`; }).join("");

// Líneas de campo de una carga positiva y una negativa.
const lineasSVG = marco("Líneas de campo eléctrico: salen de las cargas positivas (fuentes) y entran en las negativas (sumideros)", `
  ${flechaDef("cel1", "var(--red)")}${flechaDef("cel2", "var(--pen)")}
  ${rad(65, 84, 18, 56, 10, "var(--red)", "cel1", true)}
  <circle cx="65" cy="84" r="15" fill="var(--red)"/>${T(65, 90, "+", { fs: 18, b: true, c: "#fff" })}
  ${rad(195, 84, 20, 56, 10, "var(--pen)", "cel2", false)}
  <circle cx="195" cy="84" r="15" fill="var(--pen)"/>${T(195, 90, "−", { fs: 18, b: true, c: "#fff" })}
  ${T(65, 166, "fuente", { fs: 12, b: true, c: "var(--red)" })}${T(195, 166, "sumidero", { fs: 12, b: true, c: "var(--pen)" })}`);

// Dipolo eléctrico.
const dipoloSVG = marco("Líneas de campo de un dipolo: salen de la carga positiva, se curvan y entran en la negativa", `
  ${flechaDef("cdp", "var(--ink)")}
  ${[-60, -36, -16, 16, 36, 60].map((d) => `<path d="M76 90 Q 130 ${90 + d * 1.6} 184 90" fill="none" stroke="var(--muted)" stroke-width="1.8"/>`).join("")}
  <path d="M76 90 H 184" stroke="var(--muted)" stroke-width="1.8"/>
  <path d="M126 90 L 140 90" stroke="var(--ink)" stroke-width="2.4" marker-end="url(#cdp)"/>
  <path d="M126 ${90 - 36 * 1.6 / 2 + 2} l 14 0" stroke="var(--ink)" stroke-width="2.4" marker-end="url(#cdp)"/>
  <path d="M126 ${90 + 36 * 1.6 / 2 - 2} l 14 0" stroke="var(--ink)" stroke-width="2.4" marker-end="url(#cdp)"/>
  <circle cx="70" cy="90" r="14" fill="var(--red)"/>${T(70, 96, "+q", { fs: 12, b: true, c: "#fff" })}
  <circle cx="190" cy="90" r="14" fill="var(--pen)"/>${T(190, 96, "−q", { fs: 12, b: true, c: "#fff" })}
  ${T(130, 172, "dipolo eléctrico", { fs: 12, b: true })}`);

// Campo uniforme entre placas.
const placasSVG = marco("Campo eléctrico uniforme entre dos placas paralelas con cargas opuestas: líneas paralelas de la placa positiva a la negativa", `
  ${flechaDef("cpl", "var(--red)")}
  <rect x="30" y="20" width="200" height="12" rx="3" fill="var(--red)"/>${T(130, 30, "+ + + + + + + + +", { fs: 11, b: true, c: "#fff" })}
  <rect x="30" y="140" width="200" height="12" rx="3" fill="var(--pen)"/>${T(130, 150, "− − − − − − − − −", { fs: 11, b: true, c: "#fff" })}
  ${[50, 80, 110, 140, 170, 200].map((x) => `<path d="M${x} 36 V 134" stroke="var(--red)" stroke-width="2" marker-end="url(#cpl)"/>`).join("")}
  ${T(130, 172, "E uniforme = σ/ε₀ = ΔV/d", { fs: 12, b: true })}`);

// Desviación de un electrón entre placas.
const desvioSVG = marco("Un electrón que entra horizontalmente entre dos placas describe una parábola desviándose hacia la placa positiva", `
  ${flechaDef("cdv", "var(--leaf)")}
  <rect x="60" y="22" width="130" height="8" rx="2" fill="var(--red)"/>${T(125, 18, "+", { fs: 13, b: true, c: "var(--red)" })}
  <rect x="60" y="140" width="130" height="8" rx="2" fill="var(--pen)"/>${T(125, 166, "−", { fs: 15, b: true, c: "var(--pen)" })}
  <path d="M14 100 H 60" stroke="var(--leaf)" stroke-width="2.5"/>
  <path d="M60 100 Q 140 100 190 62" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
  <path d="M190 62 L 244 30" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#cdv)"/>
  <circle cx="20" cy="100" r="5" fill="var(--leaf)"/>${T(22, 120, "e⁻, v₀", { fs: 11, b: true, a: "start", c: "var(--leaf)" })}
  ${T(125, 90, "parábola", { fs: 11, b: true, c: "var(--leaf)" })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "El campo eléctrico",
  minutos: 115,
  objetivos: [
    "Describir las propiedades de la carga eléctrica: dos tipos, conservación y cuantización",
    "Aplicar la ley de Coulomb en forma vectorial a sistemas de varias cargas",
    "Calcular el campo eléctrico creado por cargas puntuales mediante el principio de superposición",
    "Representar campos eléctricos con líneas de campo, incluido el dipolo y el campo uniforme",
    "Estudiar el movimiento de partículas cargadas en un campo eléctrico uniforme",
    "Comparar los campos gravitatorio y eléctrico y conocer aplicaciones tecnológicas",
  ],
  claves: ["carga eléctrica", "conservación de la carga", "cuantización", "carga elemental", "ley de Coulomb", "constante de Coulomb", "permitividad", "intensidad del campo eléctrico", "líneas de campo", "fuente y sumidero", "dipolo", "superposición", "campo uniforme", "condensador plano", "jaula de Faraday"],
  pregunta: {
    texto: "Si la fuerza eléctrica es 10³⁶ veces más intensa que la gravitatoria, ¿por qué los planetas se mueven por la gravedad y no por la electricidad?",
    respuesta: "Porque la materia es <mark>eléctricamente neutra</mark> a gran escala: hay casi exactamente las mismas cargas positivas que negativas, y sus fuerzas se anulan. La gravedad, en cambio, siempre atrae y se acumula. En la escala de los átomos y las moléculas, sin embargo, manda la fuerza eléctrica: es la que mantiene unidos tus átomos, la que hace que no atravieses el suelo y la responsable de toda la química.",
  },
  lectura: {
    titulo: "La gota de aceite que pesó el electrón",
    html: `<p>En 1909, Robert Millikan y su estudiante Harvey Fletcher pulverizaron diminutas gotas de aceite entre dos placas metálicas horizontales. Algunas gotas se cargaban al rozar con la boquilla. Mirando por un microscopio, ajustaban el voltaje entre las placas hasta que una gota quedaba suspendida en el aire: en ese momento la fuerza eléctrica hacia arriba compensaba exactamente su peso. Conociendo la masa de la gota y el campo eléctrico, podían calcular su carga.</p><p>Tras medir cientos de gotas, encontraron algo sorprendente: todas las cargas eran múltiplos enteros de un valor mínimo, 1,6 · 10⁻¹⁹ C. La carga no es continua, sino que viene en «paquetes»: está <b>cuantizada</b>, y el paquete más pequeño libre es la carga del electrón. Millikan recibió el premio Nobel en 1923. Su experimento usa exactamente lo que estudiarás en este tema: la fuerza que un campo eléctrico uniforme ejerce sobre una carga y el equilibrio de fuerzas.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La carga eléctrica", p: [
      "La <mark>carga eléctrica</mark> es una propiedad de la materia responsable de la interacción electromagnética. Existen dos tipos, que por convenio (desde Benjamin Franklin) llamamos <b>positiva</b> y <b>negativa</b>: las cargas del mismo signo se repelen y las de signo contrario se atraen. En los átomos, los protones del núcleo tienen carga positiva y los electrones de la corteza, negativa, de igual valor absoluto. Un cuerpo está cargado cuando tiene un exceso o un defecto de electrones.",
      "La carga tiene dos propiedades fundamentales. Se <b>conserva</b>: en un sistema aislado, la carga total permanece constante; cuando frotas un globo, los electrones pasan del pelo al globo, pero la carga no se crea ni se destruye. Y está <b>cuantizada</b>: cualquier carga es un múltiplo entero de la <mark>carga elemental</mark> e = 1,602 · 10⁻¹⁹ C, la del protón. La unidad SI es el <b>culombio</b> (C), una cantidad enorme: un culombio equivale a 6,24 · 10¹⁸ electrones. Por eso en los problemas aparecen microculombios (μC = 10⁻⁶ C) y nanoculombios (nC = 10⁻⁹ C).",
    ], extra: formula("q = n · e ; e = 1,602 · 10⁻¹⁹ C"), svg: ficha("La carga eléctrica", "q = n · e", ["dos tipos: + y −", "se conserva", "está cuantizada", "1 C = 6,24·10¹⁸ e"], "var(--red)") }),
    bloque({ h: "1.2 La ley de Coulomb", p: [
      "En 1785, Charles-Augustin de Coulomb midió con una balanza de torsión la fuerza entre esferas cargadas y enunció su ley: la fuerza entre dos cargas puntuales es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa. En forma vectorial: <b>F = k · q₁ · q₂ / r² · u<sub>r</sub></b>, donde u<sub>r</sub> es el vector unitario que va de la carga que ejerce la fuerza a la que la sufre.",
      "Aquí <b>las cargas se escriben con su signo</b>. Si q₁·q₂ &gt; 0 (mismo signo), la fuerza tiene el sentido de u<sub>r</sub>: es <b>repulsiva</b>. Si q₁·q₂ &lt; 0, la fuerza es <b>atractiva</b>. En el vacío, la <mark>constante de Coulomb</mark> vale <b>k = 9 · 10⁹ N·m²/C²</b>. Fíjate en el parecido con la ley de gravitación: ambas son centrales, de alcance infinito, conservativas y dependen de 1/r². Las diferencias son que la eléctrica puede ser atractiva o repulsiva, depende del medio y es muchísimo más intensa.",
    ], extra: formula("F = k · q₁ · q₂ / r² · u<sub>r</sub> ; k = 9 · 10⁹ N·m²/C²"), svg: pasos("Aplicar la ley de Coulomb", ["Cargas con su signo", "Módulo: k|q₁q₂|/r²", "Sentido: repulsión o atracción", "Componentes x e y", "Sumar vectores"], "var(--red)"), video: V("ce-b", "Ley de Coulomb con tres cargas", "ley de Coulomb tres cargas") }),
    bloque({ h: "1.3 La influencia del medio: la permitividad", p: [
      "A diferencia de la gravedad, la fuerza eléctrica depende del medio en que están las cargas. Por eso la constante se escribe <b>k = 1 / (4π·ε)</b>, donde <mark>ε</mark> es la <b>permitividad</b> del medio. En el vacío, <b>ε₀ = 8,85 · 10⁻¹² C²/(N·m²)</b>, y se obtiene k = 9 · 10⁹ N·m²/C². En otros medios se define la <b>permitividad relativa</b> o constante dieléctrica: ε<sub>r</sub> = ε / ε₀, siempre mayor o igual que 1.",
      "En un medio de permitividad relativa ε<sub>r</sub>, la fuerza entre dos cargas es ε<sub>r</sub> veces menor que en el vacío. El aire tiene ε<sub>r</sub> ≈ 1,0006 (prácticamente como el vacío), el vidrio entre 5 y 10, y el agua ¡81! Esto explica por qué el agua disuelve tan bien la sal: dentro del agua, la atracción entre los iones Na⁺ y Cl⁻ se reduce 81 veces y el cristal se deshace. Las moléculas del medio se orientan (se polarizan) y apantallan parcialmente las cargas. Los materiales con ε<sub>r</sub> alto se usan en los condensadores de los circuitos electrónicos.",
    ], extra: formula("k = 1 / (4π·ε₀) ; ε₀ = 8,85 · 10⁻¹² C²/(N·m²)"), svg: barras("Permitividad relativa de algunos medios", "εr", [["Agua", 81, "var(--pen)", "81"], ["Etanol", 24, "var(--leaf)", "24"], ["Vidrio", 7, "var(--muted)", "≈ 7"], ["Papel", 3.7, "#b45309", "3,7"], ["Aire", 1, "var(--red)", "1,0006"]]) }),
    bloque({ h: "1.4 Gravedad y electricidad: una comparación", p: [
      "Compara la fuerza eléctrica y la gravitatoria entre un protón y un electrón en el átomo de hidrógeno: el cociente F<sub>e</sub>/F<sub>g</sub> = k·e² / (G·m<sub>p</sub>·m<sub>e</sub>) ≈ 2,3 · 10³⁹, independiente de la distancia. La fuerza eléctrica es abrumadoramente más intensa. Sin embargo, a gran escala la materia es neutra y las fuerzas eléctricas se compensan, mientras que la gravedad, siempre atractiva, se acumula con la masa. Por eso la gravedad gobierna los planetas y las galaxias, y la electricidad, los átomos, las moléculas y los seres vivos.",
      "La tabla resume las analogías y diferencias, que conviene dominar para la PAU. Ambos campos son <b>centrales y conservativos</b>, decrecen con 1/r², tienen potencial y cumplen el principio de superposición y el teorema de Gauss. Pero el gravitatorio es solo atractivo, sus líneas de campo solo tienen sumideros, su constante G es universal y su potencial es siempre negativo; el eléctrico puede ser atractivo o repulsivo, tiene fuentes y sumideros, su constante depende del medio y su potencial puede ser positivo o negativo. Además, las cargas en movimiento generan campos magnéticos, como veremos.",
    ], svg: compara("Campo gravitatorio y campo eléctrico", ["Gravitatorio", ["solo atrae", "G universal", "sumideros", "V siempre < 0"]], ["Eléctrico", ["atrae o repele", "k depende del medio", "fuentes y sumideros", "V con signo"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "2.1 La intensidad del campo eléctrico", p: [
      "Una carga Q crea a su alrededor un <mark>campo eléctrico</mark>. Su intensidad E en un punto es la fuerza que actuaría sobre la unidad de carga positiva colocada en él: <b>E = F / q</b>. Para una carga puntual: <b>E = k · Q / r² · u<sub>r</sub></b>, con Q escrita con su signo. La unidad SI es el <b>N/C</b>, que equivale a V/m. Si Q es positiva, el campo apunta hacia fuera (alejándose de la carga); si es negativa, apunta hacia la carga.",
      "Conocido el campo, la fuerza sobre cualquier carga q es <b>F = q · E</b>. Si q es positiva, la fuerza tiene el sentido del campo; si es negativa, sentido contrario. Este detalle es clave en los problemas: un electrón en un campo eléctrico se mueve en sentido opuesto a las líneas de campo. Algunos valores orientativos: el campo bajo una nube de tormenta es de unos 10⁴ N/C; el aire se vuelve conductor y salta la chispa (rigidez dieléctrica) a unos 3 · 10⁶ N/C; y el campo que siente el electrón del átomo de hidrógeno es de 5 · 10¹¹ N/C.",
    ], extra: formula("E = F / q = k · Q / r² · u<sub>r</sub> ; F = q · E"), svg: rejilla("Campo eléctrico de una carga", ["Q", "Sentido de E", "F sobre q > 0"], [["Q > 0", "hacia fuera", "repulsiva"], ["Q < 0", "hacia Q", "atractiva"], ["q < 0", "—", "contraria a E"]], "var(--red)") }),
    bloque({ h: "2.2 Las líneas del campo eléctrico", p: [
      "Las <mark>líneas de campo</mark> eléctrico son tangentes en cada punto al vector E y tienen su sentido. <b>Salen de las cargas positivas</b>, que son <b>fuentes</b>, y <b>entran en las negativas</b>, que son <b>sumideros</b>. El número de líneas que salen o entran es proporcional al valor de la carga, y su densidad indica la intensidad del campo. Como en el campo gravitatorio, las líneas nunca se cortan.",
      "Un sistema muy importante es el <b>dipolo eléctrico</b>: dos cargas iguales y opuestas separadas una pequeña distancia. Sus líneas salen de la positiva, se curvan y entran en la negativa. Muchas moléculas, como la del agua, se comportan como dipolos, y eso explica sus propiedades disolventes. Si las dos cargas son iguales y del mismo signo, las líneas se repelen y aparece un punto entre ellas donde el campo se anula. Puedes visualizar líneas de campo reales espolvoreando semillas de césped en aceite entre electrodos cargados: se orientan siguiendo el campo.",
    ], svg: lineasSVG }),
    bloque({ h: "2.3 El dipolo y el principio de superposición", p: [
      "El campo creado por varias cargas puntuales es la <mark>suma vectorial</mark> de los campos que crea cada una: <b>E = E₁ + E₂ + … + Eₙ</b>. El procedimiento es el mismo que en el campo gravitatorio, con una diferencia: ahora cada vector puede apuntar hacia la carga o en sentido contrario, según su signo. Para no equivocarte, dibuja siempre primero los vectores en el esquema y después calcula sus componentes.",
      "Dos casos típicos de la PAU. Primero, <b>dos cargas iguales</b>: en el punto medio el campo es nulo, y en la mediatriz solo queda la componente perpendicular al segmento que las une. Segundo, el <b>dipolo</b>: en el punto medio los dos campos se suman (ambos apuntan de la positiva a la negativa), y en la mediatriz el campo resultante es paralelo al eje del dipolo. El campo nulo entre dos cargas de distinto valor del mismo signo está más cerca de la menor; si tienen signos opuestos, está fuera del segmento, del lado de la carga menor.",
    ], extra: formula("E<sub>total</sub> = Σ k · Q<sub>i</sub> / r<sub>i</sub>² · u<sub>ri</sub>"), svg: dipoloSVG, video: V("ce-c", "Campo eléctrico en el centro de un cuadrado", "campo eléctrico cuadrado cargas") }),
    bloque({ h: "2.4 El campo eléctrico uniforme", p: [
      "Un <mark>campo uniforme</mark> tiene el mismo módulo, dirección y sentido en todos los puntos: sus líneas son paralelas y equidistantes. Se consigue entre dos placas metálicas planas y paralelas con cargas iguales y opuestas: es un <b>condensador plano</b>. El campo va de la placa positiva a la negativa y, lejos de los bordes, vale <b>E = σ / ε₀</b>, donde σ = Q/S es la carga por unidad de superficie de las placas. Fuera de las placas el campo es prácticamente nulo.",
      "También se puede calcular a partir de la diferencia de potencial ΔV entre las placas y su separación d: <b>E = ΔV / d</b>. Por ejemplo, dos placas a 1 cm conectadas a una pila de 9 V crean un campo de 900 V/m (900 N/C). En un campo uniforme, una carga sufre una fuerza constante F = q·E, de modo que su movimiento es como el de un proyectil en el campo gravitatorio terrestre: uniformemente acelerado si entra paralela al campo y parabólico si entra perpendicular. Lo verás con detalle en los apartados siguientes.",
    ], extra: formula("E = σ / ε₀ = ΔV / d"), svg: placasSVG }),
    bloque({ h: "3.1 Cargas aceleradas por un campo eléctrico", p: [
      "Una partícula de carga q y masa m en un campo uniforme sufre una aceleración constante <b>a = q · E / m</b>. Como para las partículas subatómicas el peso es despreciable frente a la fuerza eléctrica (para un electrón en un campo de 1000 N/C, la fuerza eléctrica es 10¹³ veces mayor), basta con considerar la fuerza eléctrica. Si la partícula parte del reposo o se mueve en la dirección del campo, sigue un <b>movimiento rectilíneo uniformemente acelerado</b>.",
      "La energía cinética que gana al atravesar una diferencia de potencial ΔV es <mark>ΔE<sub>c</sub> = |q| · ΔV</mark>. Así funcionan los <b>aceleradores de partículas</b> y los antiguos televisores de tubo. De aquí surge una unidad de energía muy usada en física atómica: el <b>electronvoltio</b> (eV), la energía que gana un electrón al atravesar una diferencia de potencial de 1 V: 1 eV = 1,6 · 10⁻¹⁹ J. Un electrón acelerado con 1000 V alcanza unos 1,9 · 10⁷ m/s, el 6 % de la velocidad de la luz; con varios millones de voltios hay que usar la relatividad.",
    ], extra: formula("a = q · E / m ; ½ m v² = |q| · ΔV ; 1 eV = 1,6 · 10⁻¹⁹ J"), svg: ficha("Carga en campo uniforme", "a = qE / m", ["MRUA si v ∥ E", "½mv² = |q|ΔV", "1 eV = 1,6·10⁻¹⁹ J", "peso despreciable"], "var(--leaf)") }),
    bloque({ h: "3.2 Desviación de cargas: el tubo de rayos catódicos", p: [
      "Si una partícula cargada entra con velocidad v₀ <b>perpendicular</b> a un campo uniforme, su movimiento se descompone como el de un tiro horizontal: en la dirección de v₀, movimiento uniforme (x = v₀·t); en la dirección del campo, uniformemente acelerado (y = ½ a t², con a = qE/m). La trayectoria es una <mark>parábola</mark>. Al salir de las placas de longitud L, tras un tiempo t = L/v₀, la desviación es y = qEL² / (2mv₀²).",
      "En 1897, J. J. Thomson usó esta idea en un tubo de rayos catódicos para demostrar que los «rayos» eran partículas con carga negativa, mucho más ligeras que los átomos: había descubierto el electrón y midió su relación carga/masa, e/m = 1,76 · 10¹¹ C/kg. El mismo principio se usó durante décadas en los osciloscopios y en los televisores de tubo, y hoy se usa en las <b>impresoras de chorro de tinta continuo</b>, que desvían gotitas cargadas para escribir, y en los <b>espectrómetros</b>, que separan iones según su carga y su masa.",
    ], extra: formula("x = v₀ · t ; y = ½ · (qE/m) · t²"), svg: desvioSVG }),
    bloque({ h: "3.3 Equilibrio de cargas: el experimento de Millikan", p: [
      "Cuando sobre una partícula cargada actúan a la vez el peso y una fuerza eléctrica, hay que tenerlos en cuenta los dos. En el experimento de Millikan, una gota de aceite de masa m y carga q queda en <mark>equilibrio</mark> entre dos placas horizontales cuando la fuerza eléctrica equilibra su peso: <b>|q| · E = m · g</b>. Si la gota tiene carga negativa, la placa superior debe ser la positiva para que la fuerza vaya hacia arriba.",
      "Otro problema clásico es el del <b>péndulo eléctrico</b>: una bolita cargada colgada de un hilo en un campo horizontal se desvía un ángulo α. En equilibrio, la tensión T compensa el peso y la fuerza eléctrica: T·cos α = m·g y T·sen α = q·E, de donde <b>tg α = q·E / (m·g)</b>. Midiendo el ángulo se puede calcular la carga o el campo. Este tipo de problemas exige dibujar el diagrama de fuerzas, descomponer y aplicar ΣF = 0, igual que en dinámica.",
    ], extra: formula("Millikan: |q| · E = m · g ; péndulo: tg α = q · E / (m · g)"), svg: pasos("Problema de equilibrio con cargas", ["Dibujar peso, tensión y qE", "Descomponer en x e y", "Aplicar ΣF = 0", "Despejar q, E o α"], "var(--pen)"), video: V("ce-a", "Campo eléctrico: ejercicios resueltos", "campo eléctrico ejercicios") }),
    bloque({ h: "3.4 Conductores, jaula de Faraday y aplicaciones", p: [
      "En un <b>conductor</b> en equilibrio electrostático, las cargas libres se mueven hasta que el campo en su interior es nulo. Por eso la carga se reparte por la superficie exterior y se acumula en las puntas, donde el campo es más intenso (<b>efecto puntas</b>): así funcionan los pararrayos. Un recinto conductor cerrado apantalla su interior de los campos externos: es la <mark>jaula de Faraday</mark>. Por eso un coche o un avión protegen a sus ocupantes de los rayos y el móvil pierde cobertura dentro de un ascensor metálico.",
      "El campo eléctrico tiene muchas aplicaciones. Los <b>precipitadores electrostáticos</b> cargan las partículas de humo de las chimeneas industriales y las atraen hacia placas colectoras, retirando más del 99 % del polvo. Las <b>fotocopiadoras e impresoras láser</b> usan un tambor que se carga con la imagen y atrae el tóner. La <b>pintura electrostática</b> de coches y electrodomésticos carga las gotas para que se adhieran uniformemente sin desperdicio. Y en medicina, el electrocardiograma registra los campos eléctricos que genera el corazón en cada latido.",
    ], svg: rejilla("Aplicaciones del campo eléctrico", ["Aplicación", "Fundamento"], [["Pararrayos", "efecto puntas"], ["Jaula de Faraday", "E = 0 dentro"], ["Precipitador", "partículas cargadas"], ["Impresora láser", "tambor cargado"], ["Pintura", "gotas cargadas"]], "var(--red)") }),
  ],
  figura: figura("El campo eléctrico", "Carga, ley de Coulomb, campo y movimiento de cargas", [["Carga", "q = n · e", "se conserva"], ["Coulomb", "F = kq₁q₂/r²", "k = 9·10⁹"], ["Campo", "E = kQ/r²", "F = q · E"], ["Movimiento", "a = qE/m", "½mv² = qΔV"]], "var(--red)"),
  video: V("ce-a", "Campo eléctrico: ejercicios resueltos", "campo eléctrico ejercicios"),
  ejemplos: [
    { enunciado: "Dos cargas de +3 μC y −5 μC están separadas 30 cm en el vacío. Calcula la fuerza entre ellas.", pasos: ["F = k · |q₁ · q₂| / r² = 9·10⁹ · 3·10⁻⁶ · 5·10⁻⁶ / 0,09.", "F = 0,135 / 0,09 = 1,5 N.", "Como los signos son opuestos, es atractiva."], resultado: "F = 1,5 N, atractiva." },
    { enunciado: "Una carga q₁ = +2 μC está en (0, 0) m y q₂ = −2 μC en (4, 0) m. Calcula el campo en P (0, 3) m.", pasos: ["E₁ = 9·10⁹ · 2·10⁻⁶ / 9 = 2000 N/C, hacia +y (se aleja de q₁): E₁ = (0, 2000).", "r₂ = √(16 + 9) = 5 m; E₂ = 9·10⁹ · 2·10⁻⁶ / 25 = 720 N/C, apuntando hacia q₂: dirección (4, −3)/5.", "E₂ = (576, −432) N/C.", "E = (576, 1568) N/C; |E| = 1670 N/C."], resultado: "E = 576 i + 1568 j N/C (≈ 1,67 · 10³ N/C)." },
    { enunciado: "Dos cargas de +4 μC y +9 μC están separadas 1 m. ¿Dónde se anula el campo?", pasos: ["Entre las cargas (mismo signo), a x de la de 4 μC: 4/x² = 9/(1 − x)².", "2(1 − x) = 3x → x = 0,4 m."], resultado: "A 0,4 m de la carga de 4 μC (más cerca de la menor)." },
    { enunciado: "Un electrón parte del reposo en un campo uniforme de 2000 N/C. ¿Qué velocidad tiene tras recorrer 5 cm? (e = 1,6 · 10⁻¹⁹ C; m<sub>e</sub> = 9,1 · 10⁻³¹ kg)", pasos: ["a = eE/m = 1,6·10⁻¹⁹ · 2000 / 9,1·10⁻³¹ = 3,52·10¹⁴ m/s².", "v² = 2·a·d = 2 · 3,52·10¹⁴ · 0,05 = 3,52·10¹³.", "Sentido del movimiento: contrario al campo."], resultado: "v ≈ 5,9 · 10⁶ m/s, en sentido opuesto al campo." },
    { enunciado: "Un protón entra a 10⁶ m/s perpendicularmente a un campo de 10⁴ N/C entre placas de 5 cm de longitud. ¿Cuánto se desvía? (m<sub>p</sub> = 1,67 · 10⁻²⁷ kg)", pasos: ["t = L/v₀ = 0,05 / 10⁶ = 5·10⁻⁸ s.", "a = eE/m = 1,6·10⁻¹⁹ · 10⁴ / 1,67·10⁻²⁷ = 9,58·10¹¹ m/s².", "y = ½ · 9,58·10¹¹ · (5·10⁻⁸)²."], resultado: "y ≈ 1,2 · 10⁻³ m = 1,2 mm, en el sentido del campo." },
    { enunciado: "Una bolita de 2 g con carga 5 μC cuelga de un hilo en un campo horizontal de 2000 N/C. ¿Qué ángulo forma el hilo con la vertical?", pasos: ["F<sub>e</sub> = q·E = 5·10⁻⁶ · 2000 = 0,01 N.", "P = m·g = 0,002 · 9,8 = 0,0196 N.", "tg α = 0,01 / 0,0196 = 0,51."], resultado: "α ≈ 27°." },
  ],
  errores: [
    "Olvidar el signo de las cargas al decidir el sentido de la fuerza o del campo.",
    "Pensar que una carga negativa se mueve en el sentido del campo: lo hace en sentido contrario.",
    "Sumar módulos de campos en lugar de vectores.",
    "Usar k = 9 · 10⁹ en un medio distinto del vacío sin dividir por ε<sub>r</sub>.",
    "No pasar los μC y nC a culombios.",
    "Incluir el peso en problemas con electrones o protones donde es despreciable, o despreciarlo en gotas y bolitas donde no lo es.",
  ],
  ejercicios: [
    B("Enuncia las propiedades de la carga eléctrica: conservación y cuantización.", "En un sistema aislado la carga total es constante; cualquier carga es un múltiplo entero de e = 1,6·10⁻¹⁹ C."),
    B("¿Cuántos electrones hay que quitar a un cuerpo para que adquiera una carga de +1 μC?", "n = 10⁻⁶ / 1,6·10⁻¹⁹ = 6,25·10¹² electrones."),
    B("Calcula la fuerza entre dos cargas de 1 μC separadas 1 m en el vacío y en agua (ε<sub>r</sub> = 81).", "En el vacío: 9·10⁹ · 10⁻¹² = 9·10⁻³ N. En agua: 1,1·10⁻⁴ N."),
    B("Si la distancia entre dos cargas se reduce a la mitad, ¿cómo cambia la fuerza?", "Se multiplica por 4."),
    B("Calcula el campo que crea una carga de −8 nC a 20 cm. Indica su sentido.", "E = 9·10⁹ · 8·10⁻⁹ / 0,04 = 1800 N/C, dirigido hacia la carga."),
    B("¿Qué fuerza sufre un electrón en un campo de 500 N/C? ¿En qué sentido?", "F = 1,6·10⁻¹⁹ · 500 = 8·10⁻¹⁷ N, en sentido contrario al campo."),
    B("Dibuja las líneas de campo de dos cargas iguales positivas y de un dipolo.", "Iguales positivas: salen de ambas y se repelen, con un punto de campo nulo en el centro. Dipolo: salen de + y entran en −."),
    B("Escribe tres analogías y tres diferencias entre el campo gravitatorio y el eléctrico.", "Analogías: centrales, conservativos, ∝ 1/r². Diferencias: el eléctrico atrae o repele, depende del medio y es mucho más intenso."),
    B("¿Qué es una jaula de Faraday? Pon un ejemplo.", "Un recinto conductor que anula el campo en su interior; un coche alcanzado por un rayo."),
    B("Expresa 1 keV en julios.", "1000 · 1,6·10⁻¹⁹ = 1,6·10⁻¹⁶ J."),
    B("Calcula el campo entre dos placas separadas 2 mm con una diferencia de potencial de 12 V.", "E = 12 / 0,002 = 6000 V/m."),
    B("¿Por qué la sal se disuelve bien en agua?", "Porque la permitividad del agua (ε<sub>r</sub> = 81) reduce mucho la atracción entre los iones."),
    M("Calcula el cociente entre la fuerza eléctrica y la gravitatoria entre dos protones (m = 1,67 · 10⁻²⁷ kg).", "F<sub>e</sub>/F<sub>g</sub> = k·e²/(G·m²) = 9·10⁹ · 2,56·10⁻³⁸ / (6,67·10⁻¹¹ · 2,79·10⁻⁵⁴) = 1,24·10³⁶."),
    M("Tres cargas de +1 μC están en (0, 0), (1, 0) y (0, 1) m. Calcula la fuerza sobre la del origen.", "F de (1,0): 9·10⁻³ N hacia −x. F de (0,1): 9·10⁻³ N hacia −y. F = (−9, −9)·10⁻³ N; |F| = 1,27·10⁻² N."),
    M("Una carga de +6 μC está en (−3, 0) m y otra de +6 μC en (3, 0) m. Calcula el campo en (0, 4) m.", "r = 5 m; E de cada una = 9·10⁹ · 6·10⁻⁶ / 25 = 2160 N/C. Las componentes x se anulan; y: 2 · 2160 · 4/5 = 3456 N/C. E = 3456 j N/C."),
    M("Repite el ejercicio anterior si la carga de (3, 0) es −6 μC.", "Ahora se anulan las componentes y y se suman las x: 2 · 2160 · 3/5 = 2592 N/C. E = 2592 i N/C."),
    M("Una carga de +1 μC está en x = 0 y otra de −4 μC en x = 3 m. ¿Dónde se anula el campo?", "Fuera del segmento, del lado de la menor (x < 0): 1/x² = 4/(3 + x)² con x distancia a la primera → 3 + x = 2x → x = 3 m. Punto x = −3 m."),
    M("Calcula la velocidad que alcanza un protón acelerado desde el reposo por una diferencia de potencial de 5000 V.", "½mv² = eΔV → v = √(2 · 1,6·10⁻¹⁹ · 5000 / 1,67·10⁻²⁷) = 9,8·10⁵ m/s."),
    M("Una gota de aceite de 3,2 · 10⁻¹⁵ kg queda en equilibrio entre placas separadas 1 cm a 980 V. Calcula su carga y cuántos electrones tiene en exceso.", "E = 98.000 V/m. q = mg/E = 3,14·10⁻¹⁴ / 98.000 = 3,2·10⁻¹⁹ C: 2 electrones."),
    M("Un electrón entra a 2 · 10⁷ m/s paralelo a un campo de 4000 N/C y en su mismo sentido. ¿Qué distancia recorre hasta pararse?", "La fuerza es opuesta al movimiento. a = 7,03·10¹⁴ m/s². d = v²/2a = 4·10¹⁴ / 1,41·10¹⁵ = 0,28 m."),
    M("Calcula el campo eléctrico en el centro de un cuadrado de 2 m de lado con cargas de +2 μC en todos sus vértices.", "Cero, por simetría."),
    M("Con el mismo cuadrado, si dos vértices consecutivos tienen +2 μC y los otros dos −2 μC, calcula el campo en el centro.", "r = √2 m; cada E = 9·10⁹ · 2·10⁻⁶ / 2 = 9000 N/C. Los cuatro aportan componentes en la misma dirección (perpendicular al lado positivo): 4 · 9000 · cos 45° = 2,55·10⁴ N/C, de los positivos a los negativos."),
    M("Calcula la densidad superficial de carga de las placas de un condensador plano con E = 10⁵ N/C.", "σ = ε₀ · E = 8,85·10⁻¹² · 10⁵ = 8,85·10⁻⁷ C/m²."),
    A("(Tipo PAU) Tres cargas q₁ = +2 μC en (0, 0), q₂ = −3 μC en (4, 0) y q₃ = +1 μC en (0, 3) m. Calcula la fuerza sobre q₃.", "F₁₃ = 9·10⁹ · 2·10⁻¹² / 9 = 2·10⁻³ N, hacia +y. F₂₃ = 9·10⁹ · 3·10⁻¹² / 25 = 1,08·10⁻³ N, hacia q₂: (4, −3)/5 → (8,64; −6,48)·10⁻⁴. F = (8,6·10⁻⁴; 1,35·10⁻³) N; |F| = 1,6·10⁻³ N."),
    A("Un electrón entra con v₀ = 3 · 10⁷ m/s entre dos placas de 6 cm de longitud y separadas 2 cm, perpendicular al campo. ¿Qué diferencia de potencial máxima puede haber para que no choque con las placas si entra por el centro?", "y máx = 0,01 m. t = 2·10⁻⁹ s. a = 2y/t² = 5·10¹⁵ m/s². E = ma/e = 9,1·10⁻³¹ · 5·10¹⁵ / 1,6·10⁻¹⁹ = 2,84·10⁴ V/m. ΔV = E·d = 569 V."),
    A("Dos bolitas iguales de 1 g cuelgan de un mismo punto con hilos de 50 cm. Al cargarlas con la misma carga se separan formando cada hilo 10° con la vertical. Calcula la carga.", "r = 2 · 0,5 · sen 10° = 0,174 m. tg 10° = F<sub>e</sub>/mg → F<sub>e</sub> = 0,176 · 9,8·10⁻³ = 1,73·10⁻³ N. q = r√(F/k) = 0,174 · √(1,92·10⁻¹³) = 7,6·10⁻⁸ C."),
    A("Un protón y una partícula alfa se aceleran desde el reposo con la misma diferencia de potencial. Compara sus energías cinéticas y sus velocidades.", "E<sub>c</sub> = qΔV: la alfa (2e) tiene doble energía. v = √(2qΔV/m): v<sub>α</sub>/v<sub>p</sub> = √(2/4) = 0,71."),
    A("Calcula el campo eléctrico en un punto de la mediatriz de un dipolo (±q separadas d) a una distancia y del centro, y su expresión para y ≫ d.", "Cada carga a r = √(y² + d²/4). Las componentes y se anulan; x: E = 2kq/r² · (d/2)/r = kqd/r³. Para y ≫ d, E ≈ kqd/y³: disminuye con el cubo de la distancia."),
    A("¿Puede haber un punto en el que se anule el campo creado por dos cargas de signos opuestos y mismo valor? Justifícalo.", "No: entre ellas los campos se suman y fuera del segmento el de la carga más cercana siempre es mayor."),
    A("Calcula la desviación vertical total sobre una pantalla situada a 20 cm del final de las placas del ejemplo 5 (protón).", "Al salir: v<sub>y</sub> = a·t = 9,58·10¹¹ · 5·10⁻⁸ = 4,79·10⁴ m/s. Tiempo hasta la pantalla: 2·10⁻⁷ s → Δy = 9,6 mm. Total: 1,2 + 9,6 = 10,8 mm."),
  ],
  quiz: [
    q4("Dos cargas del mismo signo…", ["se atraen", "se repelen", "no interaccionan", "depende de la distancia"], 1, "Mismo signo, repulsión."),
    q4("La carga elemental vale…", ["1,6·10⁻¹⁹ C", "9·10⁹ C", "6,24·10¹⁸ C", "8,85·10⁻¹² C"], 0, "La del protón."),
    q4("Que la carga está cuantizada significa que…", ["se conserva", "es múltiplo entero de e", "es siempre positiva", "depende del medio"], 1, "Millikan."),
    q4("La constante de Coulomb en el vacío vale…", ["6,67·10⁻¹¹", "9·10⁹ N·m²/C²", "8,85·10⁻¹²", "1,6·10⁻¹⁹"], 1, "k = 1/4πε₀."),
    q4("Si la distancia entre dos cargas se triplica, la fuerza…", ["se triplica", "se divide entre 3", "se divide entre 9", "no cambia"], 2, "1/r²."),
    q4("En agua (ε<sub>r</sub> = 81), la fuerza entre dos cargas es…", ["81 veces mayor", "81 veces menor", "igual", "9 veces menor"], 1, "Se divide por ε<sub>r</sub>."),
    q4("El campo eléctrico se mide en…", ["N/kg", "N/C", "J/C", "C/m"], 1, "Equivale a V/m."),
    q4("El campo de una carga negativa apunta…", ["hacia fuera", "hacia la carga", "en círculos", "no tiene dirección"], 1, "Sumidero."),
    q4("Un electrón en un campo eléctrico se mueve…", ["en el sentido del campo", "en sentido contrario", "perpendicular", "no se mueve"], 1, "Carga negativa."),
    q4("Las líneas de campo eléctrico salen de…", ["las cargas negativas", "las cargas positivas", "los conductores", "ninguna parte"], 1, "Fuentes."),
    q4("En el punto medio de un dipolo, el campo es…", ["nulo", "la suma de los dos", "la resta", "infinito"], 1, "Ambos apuntan igual."),
    q4("En el punto medio de dos cargas iguales del mismo signo, el campo es…", ["nulo", "máximo", "el doble", "infinito"], 0, "Se anulan."),
    q4("El campo entre placas de un condensador es…", ["radial", "uniforme", "nulo", "circular"], 1, "E = σ/ε₀."),
    q4("1 eV equivale a…", ["1 J", "1,6·10⁻¹⁹ J", "9·10⁹ J", "1,6·10¹⁹ J"], 1, "Energía de e en 1 V."),
    q4("Una carga que entra perpendicular a un campo uniforme describe…", ["una recta", "una parábola", "una circunferencia", "una hélice"], 1, "Como un tiro horizontal."),
    q4("Thomson usó la desviación de los rayos catódicos para…", ["medir G", "descubrir el electrón", "medir la velocidad de la luz", "descubrir el protón"], 1, "1897, e/m."),
    q4("En el experimento de Millikan, la gota está en equilibrio cuando…", ["qE = mg", "qE = 0", "mg = 0", "qE = mv²"], 0, "Fuerza eléctrica = peso."),
    q4("El campo en el interior de un conductor en equilibrio es…", ["máximo", "nulo", "uniforme", "igual que fuera"], 1, "Jaula de Faraday."),
    q4("Los pararrayos se basan en…", ["la jaula de Faraday", "el efecto puntas", "la permitividad", "la cuantización"], 1, "Campo intenso en las puntas."),
    q4("La fuerza eléctrica entre protón y electrón respecto a la gravitatoria es…", ["10 veces mayor", "10³⁹ veces mayor", "igual", "menor"], 1, "Abrumadoramente mayor."),
  ],
  examen: [
    q4("Fuerza entre 2 μC y 2 μC a 10 cm:", ["3,6 N", "0,36 N", "36 N", "0,036 N"], 0, "9·10⁹ · 4·10⁻¹² / 0,01."),
    q4("Campo de 4 nC a 30 cm:", ["400 N/C", "120 N/C", "4000 N/C", "40 N/C"], 0, "36/0,09."),
    q4("+1 μC y +9 μC a 4 m: el campo se anula a…", ["1 m de la de 1 μC", "3 m de la de 1 μC", "2 m", "no se anula"], 0, "1/x = 3/(4 − x)."),
    q4("Fuerza sobre −3 μC en un campo de 2000 N/C:", ["6·10⁻³ N, contraria a E", "6·10⁻³ N, como E", "6 N", "1,5·10⁻⁹ N"], 0, "q·E con signo."),
    q4("Energía de un electrón acelerado por 200 V:", ["200 eV", "3,2·10⁻¹⁷ J", "ambas", "ninguna"], 2, "200 · 1,6·10⁻¹⁹ J."),
    q4("Campo entre placas separadas 5 mm a 100 V:", ["2·10⁴ V/m", "500 V/m", "20 V/m", "2000 V/m"], 0, "100/0,005."),
    q4("Una gota de masa m está en equilibrio en E. Si su carga se duplica, para mantenerla hace falta un campo…", ["doble", "mitad", "igual", "cuádruple"], 1, "E = mg/q."),
    q4("Dos cargas iguales +q a distancia d; si se duplican ambas cargas y la distancia, la fuerza…", ["no cambia", "se duplica", "se cuadruplica", "se reduce a la mitad"], 0, "4/4."),
  ],
  feynman: ["Por qué decimos que la carga está cuantizada", "Por qué la gravedad gobierna los planetas si la fuerza eléctrica es más intensa", "Por qué un electrón se mueve en contra del campo", "Qué es una jaula de Faraday y por qué protege del rayo", "Cómo se desvía un electrón entre dos placas", "Cómo midió Millikan la carga del electrón"],
  mapa: mapaB("CAMPO ELÉCTRICO", [["Carga", "q = n·e ; se conserva", "var(--red)"], ["Coulomb", "F = kq₁q₂/r² uᵣ", "var(--pen)"], ["Campo", "E = kQ/r² uᵣ ; F = qE", "var(--leaf)"], ["Movimiento", "a = qE/m ; ½mv² = qΔV", "var(--muted)"]]),
  tarjetas: [
    ["Carga elemental", "e = 1,602 · 10⁻¹⁹ C."],
    ["Conservación de la carga", "En un sistema aislado, la carga total es constante."],
    ["Ley de Coulomb", "F = k · q₁ · q₂ / r² · u<sub>r</sub>."],
    ["Constante de Coulomb", "k = 1/4πε₀ = 9 · 10⁹ N·m²/C²."],
    ["Permitividad del vacío", "ε₀ = 8,85 · 10⁻¹² C²/(N·m²)."],
    ["Campo eléctrico", "E = F/q = k·Q/r² · u<sub>r</sub> (N/C)."],
    ["Fuerza en un campo", "F = q · E (con el signo de q)."],
    ["Líneas de campo", "Salen de + (fuentes) y entran en − (sumideros)."],
    ["Campo uniforme", "E = σ/ε₀ = ΔV/d."],
    ["Electronvoltio", "1 eV = 1,6 · 10⁻¹⁹ J."],
    ["Carga acelerada", "½ m v² = |q| · ΔV."],
    ["Jaula de Faraday", "Dentro de un conductor en equilibrio, E = 0."],
  ],
  glosario: [
    ["Carga eléctrica", "Propiedad de la materia responsable de la interacción electromagnética."],
    ["Culombio", "Unidad SI de carga eléctrica."],
    ["Cuantización", "Propiedad de una magnitud que solo toma múltiplos de un valor mínimo."],
    ["Carga puntual", "Carga cuyas dimensiones son despreciables frente a las distancias."],
    ["Permitividad", "Propiedad de un medio que determina la intensidad de la fuerza eléctrica en él."],
    ["Constante dieléctrica", "Permitividad relativa de un medio respecto al vacío."],
    ["Fuente", "Punto del que salen líneas de campo: carga positiva."],
    ["Sumidero", "Punto al que llegan líneas de campo: carga negativa."],
    ["Dipolo eléctrico", "Par de cargas iguales y opuestas separadas una pequeña distancia."],
    ["Condensador plano", "Dos placas paralelas con cargas opuestas que crean un campo uniforme."],
    ["Densidad superficial de carga", "Carga por unidad de superficie (C/m²)."],
    ["Electronvoltio", "Energía que gana un electrón al atravesar 1 V."],
    ["Rigidez dieléctrica", "Campo máximo que soporta un aislante antes de conducir."],
    ["Efecto puntas", "Acumulación de carga y campo intenso en las puntas de un conductor."],
    ["Jaula de Faraday", "Recinto conductor que anula el campo eléctrico en su interior."],
  ],
  situacion: {
    titulo: "Diseñamos una impresora de chorro de tinta",
    reto: "Una empresa de impresión industrial quiere marcar fechas de caducidad en botellas con gotitas de tinta cargadas que se desvían con un campo eléctrico. Vuestro equipo debe calcular el diseño de las placas deflectoras.",
    pasos: [
      "Investigad cómo funcionan las impresoras de chorro continuo y qué carga y masa tienen las gotas.",
      "Para una gota de 10⁻¹⁰ kg con carga 10⁻¹² C a 20 m/s, calculad el campo necesario para desviarla 1 mm en placas de 1 cm.",
      "Calculad la diferencia de potencial necesaria si las placas están separadas 2 mm y comprobad que no supera la rigidez dieléctrica del aire.",
      "Comprobad si el peso de la gota es despreciable comparado con la fuerza eléctrica.",
      "Construid una tabla que relacione la carga de cada gota con la altura a la que llega en la botella.",
    ],
    producto: "Un informe técnico con el esquema acotado del sistema y los cálculos.",
    evaluacion: ["Se aplica correctamente el movimiento parabólico en un campo uniforme.", "Se comparan fuerzas y se justifica qué se puede despreciar.", "Se comprueban los límites físicos (rigidez dieléctrica).", "El informe está bien organizado y es claro."],
  },
  familias: [
    "Frotad un globo con el pelo y acercadlo a trocitos de papel o a un chorro fino de agua: explicad lo que pasa.",
    "Meted un móvil en una caja metálica cerrada o envuelto en papel de aluminio y llamadlo: comprobad la jaula de Faraday.",
    "Buscad dónde están los pararrayos de vuestro barrio y por qué tienen punta.",
    "Hablad de por qué es seguro quedarse dentro del coche durante una tormenta eléctrica.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Campo eléctrico»: campo eléctrico producido por distribuciones de cargas puntuales, determinación mediante el cálculo vectorial y el principio de superposición; líneas de campo; movimiento de partículas cargadas en campos eléctricos uniformes; analogías y diferencias con el campo gravitatorio; aplicaciones tecnológicas.`,
    ideas: [
      "Simulación PhET «Cargas y campos» para dibujar líneas de campo y equipotenciales.",
      "Electroscopio casero con un tarro y papel de aluminio.",
      "Hoja de cálculo para obtener el campo de varias cargas en una rejilla de puntos.",
      "Análisis histórico del experimento de Millikan y del debate sobre sus datos.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Cargas y campos» (PhET)", url: "https://phet.colorado.edu/es/simulations/charges-and-fields" },
    { t: "Simulación «Ley de Coulomb» (PhET)", url: "https://phet.colorado.edu/es/simulations/coulombs-law" },
  ],
  revisado: "2026-11-21",
};
