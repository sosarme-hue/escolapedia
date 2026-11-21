// Física 2º Bachillerato · La luz y las ondas electromagnéticas (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

// Onda electromagnética: E vertical y B horizontal (en perspectiva).
const oemSVG = marco("Onda electromagnética: el campo eléctrico y el magnético oscilan en fase, perpendiculares entre sí y a la dirección de propagación", `
  <defs><marker id="oem" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
  <path d="M16 96 H 246" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#oem)"/>${T(240, 116, "c", { fs: 13, b: true })}
  <polyline points="${Array.from({ length: 61 }, (_, i) => `${(16 + i * 3.6).toFixed(1)},${(96 - 50 * Math.sin((i / 60) * 4 * Math.PI)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.6"/>
  <polyline points="${Array.from({ length: 61 }, (_, i) => { const s = Math.sin((i / 60) * 4 * Math.PI); return `${(16 + i * 3.6 + 18 * s).toFixed(1)},${(96 + 18 * s).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.6"/>
  ${T(50, 34, "E", { fs: 14, b: true, c: "var(--red)" })}${T(70, 136, "B", { fs: 14, b: true, c: "var(--pen)" })}
  ${T(130, 168, "E ⊥ B ⊥ c ; E = c · B", { fs: 12, b: true })}`);

// Refracción.
const snellSVG = marco("Refracción de la luz al pasar del aire al agua: el rayo se acerca a la normal porque la luz va más despacio en el agua", `
  <rect x="10" y="90" width="240" height="80" fill="var(--pen)" opacity=".12"/>
  <path d="M10 90 H 250" stroke="var(--pen)" stroke-width="2"/>
  <path d="M130 14 V 170" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M60 20 L 130 90" stroke="#f59e0b" stroke-width="3"/>
  <path d="M130 90 L 175 166" stroke="#f59e0b" stroke-width="3"/>
  <path d="M130 90 L 200 20" stroke="#f59e0b" stroke-width="1.6" opacity=".55"/>
  ${T(104, 50, "i", { fs: 13, b: true, c: "var(--red)" })}${T(146, 136, "r", { fs: 13, b: true, c: "var(--red)" })}
  ${T(30, 80, "aire n₁ = 1", { fs: 11, b: true, a: "start" })}${T(30, 110, "agua n₂ = 1,33", { fs: 11, b: true, a: "start", c: "var(--pen)" })}
  ${T(210, 140, "n₁ sen i =", { fs: 11, b: true })}${T(210, 156, "n₂ sen r", { fs: 11, b: true })}`);

// Reflexión total en una fibra.
const fibraSVG = marco("Fibra óptica: la luz avanza por el núcleo rebotando por reflexión total en la frontera con el revestimiento", `
  <rect x="10" y="50" width="240" height="80" rx="8" fill="var(--muted)" opacity=".18"/>
  <rect x="10" y="66" width="240" height="48" fill="var(--pen)" opacity=".18"/>
  <polyline points="10,90 40,66 88,114 136,66 184,114 232,66 250,80" fill="none" stroke="#f59e0b" stroke-width="3"/>
  ${T(130, 42, "revestimiento (n menor)", { fs: 11, b: true, c: "var(--muted)" })}
  ${T(130, 94, "núcleo (n mayor)", { fs: 11, b: true, c: "var(--pen)" })}
  ${T(130, 158, "ángulo > límite → reflexión total", { fs: 12, b: true })}`);

// Doble rendija.
const youngSVG = marco("Experimento de Young: la luz que pasa por dos rendijas forma en la pantalla franjas brillantes y oscuras por interferencia", `
  <path d="M60 20 V 78 M60 86 V 94 M60 102 V 160" stroke="var(--ink)" stroke-width="5"/>
  ${[24, 48, 72, 96].map((r) => `<path d="M${60 + r * 0.7} ${82 - r * 0.7} A ${r} ${r} 0 0 1 ${60 + r * 0.7} ${82 + r * 0.7}" fill="none" stroke="#f59e0b" stroke-width="1.4" opacity=".7"/><path d="M${60 + r * 0.7} ${98 - r * 0.7} A ${r} ${r} 0 0 1 ${60 + r * 0.7} ${98 + r * 0.7}" fill="none" stroke="var(--red)" stroke-width="1.4" opacity=".6"/>`).join("")}
  <rect x="214" y="16" width="10" height="150" fill="var(--card)" stroke="var(--line)"/>
  ${[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => `<rect x="214" y="${86 + n * 16}" width="10" height="7" fill="${n % 2 === 0 ? "#f59e0b" : "var(--ink)"}"/>`).join("")}
  ${T(190, 174, "franjas", { fs: 10, b: true })}${T(40, 174, "2 rendijas", { fs: 10, b: true })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "La luz y las ondas electromagnéticas",
  minutos: 115,
  objetivos: [
    "Conocer la evolución histórica de las ideas sobre la naturaleza de la luz",
    "Describir las ondas electromagnéticas y el espectro electromagnético",
    "Aplicar las leyes de la reflexión y la refracción y calcular el ángulo límite",
    "Explicar la dispersión, la interferencia, la difracción y la polarización de la luz",
    "Resolver problemas tipo PAU sobre índice de refracción, láminas, prismas e interferencia",
    "Valorar las aplicaciones y los riesgos de las radiaciones electromagnéticas",
  ],
  claves: ["teoría corpuscular", "teoría ondulatoria", "onda electromagnética", "espectro electromagnético", "velocidad de la luz", "índice de refracción", "ley de Snell", "ángulo límite", "reflexión total", "fibra óptica", "dispersión", "interferencia", "experimento de Young", "difracción", "polarización"],
  pregunta: {
    texto: "¿Por qué el cielo es azul y los atardeceres son rojos?",
    respuesta: "Porque las moléculas del aire <mark>dispersan mucho más la luz azul que la roja</mark> (la dispersión de Rayleigh es proporcional a 1/λ⁴). De día, la luz azul dispersada nos llega desde todas las direcciones del cielo. Al atardecer, la luz del Sol atraviesa mucha más atmósfera: casi todo el azul se ha dispersado por el camino y solo nos llegan directamente los tonos rojos y anaranjados.",
  },
  lectura: {
    titulo: "Dos rendijas que cambiaron la física",
    html: `<p>Durante todo el siglo XVIII, la autoridad de Newton había impuesto su idea de que la luz estaba formada por pequeñísimas partículas. En 1801, el médico inglés Thomas Young hizo pasar la luz del Sol por dos rendijas muy finas y muy juntas y la proyectó sobre una pantalla. Si la luz fueran partículas, deberían verse dos franjas brillantes. Lo que apareció fue una serie de franjas claras y oscuras alternadas: un patrón de interferencia, como el que forman las ondas en un estanque al tirar dos piedras.</p><p>Luz más luz podía dar oscuridad. Solo una onda podía hacer eso. Medio siglo después, Maxwell demostró que esa onda era electromagnética. Pero la historia no terminó ahí: en 1905, Einstein explicó el efecto fotoeléctrico suponiendo que la luz llega en paquetes, los fotones. Y en el siglo XX se repitió el experimento de Young enviando los fotones de uno en uno: cada uno llega a un punto, como una partícula, pero el patrón de franjas aparece igualmente. La luz es onda y partícula a la vez: la dualidad que estudiarás en el tema de física cuántica.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La naturaleza de la luz: una larga discusión", p: [
      "En el siglo XVII se enfrentaron dos modelos. Isaac Newton defendía la <b>teoría corpuscular</b>: la luz está formada por partículas que salen de los focos a gran velocidad; explicaba bien la propagación rectilínea y la reflexión. Christiaan Huygens defendía la <b>teoría ondulatoria</b>: la luz es una onda que se propaga en un medio sutil, el éter; explicaba la reflexión, la refracción y la doble refracción de algunos cristales. Para explicar la refracción, Newton necesitaba que la luz fuera <b>más rápida</b> en el agua que en el aire, y Huygens, <b>más lenta</b>.",
      "El prestigio de Newton mantuvo la teoría corpuscular durante un siglo, hasta que Young (1801) observó la <b>interferencia</b> de la luz y Fresnel explicó la difracción. En 1850, Foucault midió que la luz es más lenta en el agua, como predecía Huygens. Maxwell (1865) demostró que la luz es una <mark>onda electromagnética</mark> y el experimento de Michelson y Morley (1887) descartó el éter. Pero en 1905 Einstein explicó el efecto fotoeléctrico con partículas de luz, los <b>fotones</b>. Hoy sabemos que la luz tiene una <b>naturaleza dual</b>: se propaga como una onda e interacciona con la materia como una partícula.",
    ], svg: compara("Dos teorías sobre la luz", ["Corpuscular", ["Newton", "partículas", "v mayor en agua", "fotones (Einstein)"]], ["Ondulatoria", ["Huygens", "ondas", "v menor en agua", "Young, Maxwell"]], "#b45309", "var(--pen)"), video: V("luz-b", "¿La luz es una partícula o una onda?", "luz onda o partícula") }),
    bloque({ h: "1.2 Las ondas electromagnéticas", p: [
      "Una <mark>onda electromagnética</mark> consiste en un campo eléctrico y un campo magnético que oscilan en fase, perpendiculares entre sí y perpendiculares a la dirección de propagación: es una onda <b>transversal</b>. Se generan cuando una carga eléctrica se acelera, por ejemplo, los electrones que oscilan en una antena o los que cambian de nivel en un átomo. No necesitan medio material: se propagan en el vacío, y por eso nos llega la luz de las estrellas.",
      "Maxwell dedujo de sus ecuaciones que la velocidad de estas ondas en el vacío es <b>c = 1/√(ε₀·μ₀) = 2,998 · 10⁸ m/s</b>, idéntica a la velocidad medida de la luz. Los módulos de los campos están relacionados: <b>E = c·B</b>. Una onda que avanza en el eje x con el campo eléctrico en el eje y se describe con E<sub>y</sub> = E₀·sen(ω·t − k·x) y B<sub>z</sub> = B₀·sen(ω·t − k·x). Como cualquier onda, cumple c = λ·f. Las ondas electromagnéticas transportan energía (la luz del Sol calienta) y cantidad de movimiento (ejercen una pequeña presión de radiación, que se aprovecha en las velas solares).",
    ], extra: formula("c = 1/√(ε₀·μ₀) = 3 · 10⁸ m/s ; E = c · B ; c = λ · f"), svg: oemSVG, video: V("luz-d", "El origen de las ondas electromagnéticas", "origen ondas electromagnéticas") }),
    bloque({ h: "1.3 El espectro electromagnético", p: [
      "Las ondas electromagnéticas se ordenan según su frecuencia o su longitud de onda en el <mark>espectro electromagnético</mark>. De menor a mayor frecuencia: <b>ondas de radio</b> (λ de metros a kilómetros: radio, televisión, móviles), <b>microondas</b> (milímetros a centímetros: wifi, hornos, radares), <b>infrarrojo</b> (calor, mandos a distancia, cámaras térmicas), <b>luz visible</b>, <b>ultravioleta</b> (bronceado, esterilización), <b>rayos X</b> (radiografías) y <b>rayos gamma</b> (núcleos radiactivos, radioterapia). Todas son la misma clase de onda y se propagan a la misma velocidad en el vacío.",
      "La <b>luz visible</b> es una franja estrechísima, entre unos <b>400 nm</b> (violeta) y <b>700 nm</b> (rojo): el ojo humano evolucionó para ver las longitudes de onda que más emite el Sol y que mejor atraviesan la atmósfera y el agua. La energía de cada fotón es proporcional a la frecuencia (E = h·f): por eso el ultravioleta, los rayos X y los gamma son <b>radiaciones ionizantes</b>, capaces de arrancar electrones y dañar el ADN, mientras que las ondas de radio, las microondas y la luz visible no lo son. El riesgo de una radiación depende de su frecuencia, no solo de su intensidad.",
    ], svg: rejilla("El espectro electromagnético", ["Radiación", "λ típica", "Uso"], [["Radio", "> 1 m", "radio, TV, móvil"], ["Microondas", "1 mm-1 m", "wifi, horno"], ["Infrarrojo", "0,7 μm-1 mm", "calor, mandos"], ["Visible", "400-700 nm", "visión"], ["UV, X, γ", "< 400 nm", "medicina"]], "var(--red)"), video: V("luz-a", "Todo el espectro electromagnético", "espectro electromagnético") }),
    bloque({ h: "1.4 La velocidad de la luz y el índice de refracción", p: [
      "La velocidad de la luz es tan grande que durante siglos se creyó infinita. Rømer la estimó por primera vez en 1676 observando los eclipses de las lunas de Júpiter, y Fizeau y Foucault la midieron en la Tierra en el siglo XIX. Hoy su valor en el vacío está fijado por definición: <b>c = 299.792.458 m/s</b>, y el metro se define a partir de ella. En cualquier medio material, la luz va más despacio, a una velocidad v.",
      "El <mark>índice de refracción</mark> de un medio es el cociente <b>n = c / v</b>. Es adimensional y siempre mayor o igual que 1: el aire tiene n ≈ 1,0003, el agua 1,33, el vidrio entre 1,5 y 1,9 y el diamante 2,42. Cuando la luz pasa de un medio a otro, su <b>frecuencia no cambia</b> (la impone el foco), pero su velocidad y su longitud de onda sí: <b>λ = λ₀ / n</b>, donde λ₀ es la longitud de onda en el vacío. El color que vemos depende de la frecuencia, así que una luz roja sigue siendo roja dentro del agua aunque allí su longitud de onda sea menor.",
    ], extra: formula("n = c / v ; λ = λ₀ / n ; f constante"), svg: barras("Índice de refracción", "n", [["Diamante", 2.42, "var(--pen)", "2,42"], ["Vidrio", 1.52, "var(--leaf)", "1,52"], ["Agua", 1.33, "var(--red)", "1,33"], ["Aire", 1.0003, "var(--muted)", "1,0003"]]) }),
    bloque({ h: "1.5 Reflexión y refracción de la luz", p: [
      "Cuando la luz llega a la superficie de separación entre dos medios, una parte se refleja y otra se refracta. Se llama <b>normal</b> a la recta perpendicular a la superficie en el punto de incidencia, y los ángulos se miden respecto a ella. Las <b>leyes de la reflexión</b> dicen que el rayo incidente, el reflejado y la normal están en el mismo plano, y que el ángulo de incidencia es igual al de reflexión: <b>i = r</b>.",
      "En la <b>refracción</b>, el rayo cambia de dirección porque cambia su velocidad. La <mark>ley de Snell</mark> establece que <b>n₁ · sen i = n₂ · sen r</b>. Si la luz pasa a un medio más refringente (n mayor, más lento), se <b>acerca a la normal</b>; si pasa a uno menos refringente, se <b>aleja</b>. Por eso una cuchara parece quebrada en un vaso de agua y una piscina parece menos profunda de lo que es: la profundidad aparente es aproximadamente la real dividida por n. Al atravesar una <b>lámina de caras paralelas</b>, como el cristal de una ventana, el rayo sale paralelo al incidente, solo desplazado lateralmente.",
    ], extra: formula("Reflexión: i = r ; Refracción: n₁ · sen i = n₂ · sen r"), svg: snellSVG, video: V("luz-c", "Refracción de la luz y ley de Snell", "refracción ley de Snell") }),
    bloque({ h: "1.6 Reflexión total y fibra óptica", p: [
      "Cuando la luz pasa de un medio más refringente a otro menos refringente (por ejemplo, del agua al aire), el rayo refractado se aleja de la normal. Al aumentar el ángulo de incidencia, llega un momento en que el ángulo de refracción es de 90°: ese ángulo de incidencia es el <mark>ángulo límite</mark>, que cumple <b>sen L = n₂ / n₁</b>. Para incidencias mayores, no hay refracción: toda la luz se refleja. Es la <b>reflexión total</b>, que solo ocurre al pasar a un medio de menor índice.",
      "Para el agua, L = 48,8°; para el vidrio, unos 42°; para el diamante, solo 24,4°: por eso los diamantes tallados brillan tanto, porque la luz que entra se refleja totalmente varias veces antes de salir. La reflexión total es la base de la <b>fibra óptica</b>: un núcleo de vidrio muy puro rodeado de un revestimiento de menor índice guía la luz a lo largo de kilómetros con pérdidas mínimas. Por ella viaja la mayor parte de internet, a través de cables submarinos que cruzan los océanos, y se usa en medicina en los endoscopios. Los espejismos del desierto y los «charcos» que se ven en el asfalto caliente también se deben a la reflexión total en capas de aire de distinto índice.",
    ], extra: formula("sen L = n₂ / n₁  (n₁ > n₂)"), svg: fibraSVG }),
    bloque({ h: "2.1 La dispersión de la luz", p: [
      "El índice de refracción de un material depende ligeramente de la longitud de onda: en el vidrio, es mayor para el violeta que para el rojo. Por eso, al refractarse, cada color se desvía un ángulo distinto y la luz blanca se separa en sus colores: es la <mark>dispersión</mark>. Newton lo demostró en 1666 con un <b>prisma</b>: la luz blanca del Sol producía un espectro de colores, y un segundo prisma invertido los volvía a juntar en luz blanca. Así demostró que la luz blanca es una mezcla de todos los colores.",
      "El <b>arcoíris</b> es dispersión en las gotas de lluvia: la luz del Sol se refracta al entrar en cada gota, se refleja en su interior y se refracta otra vez al salir, separando los colores. Por eso solo se ve con el Sol a la espalda y a unos 42° del punto opuesto al Sol. En los <b>prismas</b> de los problemas de la PAU se aplica la ley de Snell dos veces, en la cara de entrada y en la de salida, teniendo en cuenta que el ángulo del prisma es la suma de los ángulos de refracción interior y de incidencia en la segunda cara. La dispersión es también la causa de la aberración cromática de las lentes simples, que forman bordes de colores.",
    ], svg: pasos("Problema de prisma", ["1.ª cara: n₁ sen i = n sen r", "Ángulo del prisma: A = r + i'", "2.ª cara: n sen i' = sen e", "Desviación δ = i + e − A"], "#b45309") }),
    bloque({ h: "2.2 Interferencia de la luz: el experimento de Young", p: [
      "Para observar la interferencia de la luz se necesitan focos <b>coherentes</b>: misma frecuencia y diferencia de fase constante. Young lo consiguió haciendo pasar la luz de una sola fuente por dos rendijas muy próximas, separadas una distancia d. Las dos rendijas actúan como focos en fase y, sobre una pantalla a distancia D, aparecen <b>franjas brillantes</b> donde la diferencia de caminos es un múltiplo entero de λ y <b>oscuras</b> donde es un múltiplo impar de λ/2.",
      "Para ángulos pequeños, la diferencia de caminos es d·sen θ ≈ d·y/D, y las franjas brillantes aparecen en <mark>y = n · λ · D / d</mark>. La separación entre dos franjas brillantes consecutivas es <b>Δy = λ·D/d</b>. Midiendo esta separación, Young pudo calcular por primera vez la longitud de onda de la luz: unos 0,5 μm. La interferencia explica también los colores de las <b>pompas de jabón</b> y de las manchas de aceite en el asfalto mojado: la luz reflejada en las dos caras de una película delgada interfiere, y según el espesor se refuerzan unos colores u otros. Los tratamientos antirreflejo de las gafas usan capas finas que provocan interferencia destructiva de la luz reflejada.",
    ], extra: formula("Máximos: d · sen θ = n · λ ; y = n·λ·D/d ; Δy = λ·D/d"), svg: youngSVG }),
    bloque({ h: "2.3 La difracción de la luz", p: [
      "Si la luz pasa por una rendija muy estrecha, no forma una franja nítida del tamaño de la rendija, sino una franja central ancha rodeada de franjas más débiles: es la <mark>difracción</mark>. Solo es apreciable cuando la abertura es comparable a la longitud de onda (micrómetros), por eso en la vida diaria la luz parece propagarse en línea recta. El primer mínimo de una rendija de anchura a aparece donde <b>a · sen θ = λ</b>: cuanto más estrecha es la rendija, más se abre el haz.",
      "La difracción limita la <b>resolución</b> de los instrumentos ópticos: dos puntos muy próximos producen manchas de difracción que se solapan. Por eso los telescopios tienen espejos cada vez más grandes y los microscopios ópticos no pueden ver detalles menores de unos 0,2 μm; para ir más allá se usan microscopios electrónicos, con longitudes de onda mucho menores. Una <b>red de difracción</b>, con miles de rendijas por milímetro, separa los colores con gran precisión (d·sen θ = n·λ) y se usa en los espectroscopios. Los colores irisados de un CD o de las alas de algunas mariposas se deben a estructuras que actúan como redes de difracción.",
    ], extra: formula("Rendija: a · sen θ = λ (1.er mínimo) ; Red: d · sen θ = n · λ"), svg: ficha("Difracción de la luz", "a · sen θ = λ", ["apreciable si a ≈ λ", "rendija estrecha: haz ancho", "limita la resolución", "redes: espectroscopia"], "var(--leaf)") }),
    bloque({ h: "2.4 La polarización", p: [
      "La luz natural (del Sol o de una bombilla) está formada por ondas cuyo campo eléctrico vibra en todas las direcciones perpendiculares a la propagación. Un <b>polarizador</b> solo deja pasar la componente del campo en una dirección: la luz que sale está <mark>polarizada</mark> linealmente. Si se coloca un segundo polarizador (analizador) girado un ángulo θ, la intensidad transmitida cumple la <b>ley de Malus</b>: <b>I = I₀ · cos² θ</b>; si están cruzados (90°), no pasa nada de luz.",
      "La polarización solo es posible en las ondas <b>transversales</b>: el sonido, que es longitudinal, no se puede polarizar. Por eso este fenómeno demostró que la luz es una onda transversal. La luz también se polariza parcialmente al reflejarse en el agua, el asfalto o la nieve; las <b>gafas de sol polarizadas</b> eliminan esos reflejos. La polarización se usa en las pantallas de cristal líquido (LCD) de móviles y ordenadores, en el cine 3D, en fotografía y en el análisis de tensiones en piezas transparentes (fotoelasticidad). Las abejas y otros insectos se orientan con la luz polarizada del cielo.",
    ], extra: formula("Ley de Malus: I = I₀ · cos² θ"), svg: rejilla("Polarización", ["Situación", "Intensidad"], [["Luz natural → polarizador", "I₀/2"], ["Analizador a θ", "I₀ cos² θ"], ["Cruzados (90°)", "0"], ["Paralelos (0°)", "I₀"]], "var(--pen)") }),
    bloque({ h: "2.5 Absorción, color y dispersión atmosférica", p: [
      "El <b>color</b> de un objeto depende de qué longitudes de onda absorbe y cuáles refleja o transmite. Una hoja es verde porque la clorofila absorbe el rojo y el azul y refleja el verde. Un objeto blanco refleja todas, uno negro las absorbe todas (y se calienta más al sol). Un filtro rojo deja pasar el rojo y absorbe el resto. Por eso, bajo luz roja, un objeto azul se ve negro: no hay luz azul que reflejar. Los colores de las pantallas se forman sumando luz roja, verde y azul (síntesis aditiva), mientras que las tintas restan colores (síntesis sustractiva).",
      "Cuando la luz atraviesa un medio con partículas pequeñas, parte de ella se desvía en todas direcciones: es la <mark>dispersión por difusión</mark>. Las moléculas del aire, mucho menores que λ, dispersan mucho más las longitudes de onda cortas (proporcionalmente a 1/λ⁴): por eso el cielo es azul y los atardeceres, rojos. Las gotitas de las nubes, mayores que λ, dispersan todos los colores por igual, y por eso las nubes son blancas. La atmósfera también absorbe: el ozono retiene casi todo el ultravioleta más peligroso, y el vapor de agua y el CO₂ absorben infrarrojo, lo que produce el efecto invernadero.",
    ], svg: compara("Absorción y dispersión", ["Absorción", ["la luz se convierte", "en calor", "explica los colores", "ozono: UV"]], ["Difusión", ["la luz se desvía", "∝ 1/λ⁴ (Rayleigh)", "cielo azul", "atardecer rojo"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "3.1 Aplicaciones y riesgos de las radiaciones", p: [
      "Las ondas electromagnéticas sostienen la sociedad actual. Las <b>telecomunicaciones</b> usan ondas de radio y microondas (radio, televisión, 4G y 5G, wifi, GPS) y luz infrarroja en las fibras ópticas. El <b>láser</b> produce luz coherente, monocromática y muy direccional, y se usa en lectores, cirugía ocular, corte industrial, medida de distancias y espectáculos. En <b>medicina</b>, los rayos X permiten las radiografías y la tomografía computarizada; los rayos gamma, la radioterapia; y el infrarrojo, la termografía. En astronomía, cada zona del espectro revela un universo distinto: el telescopio James Webb observa en infrarrojo las primeras galaxias.",
      "Respecto a los <b>riesgos</b>, hay que distinguir. Las radiaciones <mark>ionizantes</mark> (UV de alta energía, rayos X y gamma) pueden dañar el ADN y deben limitarse: protección solar, dosis mínimas en radiografías, blindajes en instalaciones. Las <b>no ionizantes</b> (radio, microondas, visible) no rompen enlaces químicos; su único efecto comprobado a altas intensidades es el calentamiento, y los límites legales de exposición (como los de antenas de telefonía y wifi) están muy por debajo de ese umbral. Las agencias sanitarias revisan continuamente la evidencia científica, y la mejor herramienta frente a los bulos es entender la física del espectro.",
    ], svg: rejilla("Radiación y riesgo", ["Radiación", "Tipo", "Precaución"], [["Radio, wifi", "no ionizante", "límites legales"], ["Visible, IR", "no ionizante", "láseres: ojos"], ["UV", "ionizante (parte)", "crema solar"], ["Rayos X, γ", "ionizante", "dosis mínimas"]], "var(--red)") }),
  ],
  figura: figura("La luz y las ondas electromagnéticas", "Ondas electromagnéticas, espectro, refracción e interferencia", [["Onda EM", "c = 1/√(ε₀μ₀)", "E = cB"], ["Refracción", "n₁ sen i = n₂ sen r", "n = c/v"], ["Reflexión total", "sen L = n₂/n₁", "fibra óptica"], ["Young", "Δy = λD/d", "luz = onda"]], "#b45309"),
  video: V("luz-a", "Todo el espectro electromagnético", "espectro electromagnético"),
  ejemplos: [
    { enunciado: "Una emisora de FM emite a 100 MHz. Calcula la longitud de onda y el periodo de sus ondas.", pasos: ["λ = c/f = 3·10⁸ / 10⁸ = 3 m.", "T = 1/f = 10⁻⁸ s."], resultado: "λ = 3 m; T = 10 ns." },
    { enunciado: "Una luz de 600 nm en el vacío entra en un vidrio de n = 1,5. Calcula su velocidad, su frecuencia y su longitud de onda en el vidrio.", pasos: ["v = c/n = 2·10⁸ m/s.", "f = c/λ₀ = 3·10⁸ / 6·10⁻⁷ = 5·10¹⁴ Hz (no cambia).", "λ = λ₀/n = 600/1,5 = 400 nm."], resultado: "v = 2 · 10⁸ m/s; f = 5 · 10¹⁴ Hz; λ = 400 nm (sigue viéndose naranja)." },
    { enunciado: "Un rayo pasa del aire al agua (n = 1,33) con un ángulo de incidencia de 45°. Calcula el ángulo de refracción.", pasos: ["1 · sen 45° = 1,33 · sen r.", "sen r = 0,707 / 1,33 = 0,532."], resultado: "r ≈ 32,1° (se acerca a la normal)." },
    { enunciado: "Calcula el ángulo límite para la luz que pasa del vidrio (n = 1,5) al aire y al agua (1,33).", pasos: ["Vidrio-aire: sen L = 1/1,5 = 0,667 → L = 41,8°.", "Vidrio-agua: sen L = 1,33/1,5 = 0,887 → L = 62,5°."], resultado: "41,8° hacia el aire; 62,5° hacia el agua." },
    { enunciado: "En un experimento de Young, d = 0,2 mm, D = 1,5 m y las franjas brillantes están separadas 4,5 mm. Calcula λ.", pasos: ["Δy = λ·D/d → λ = Δy·d/D.", "λ = 4,5·10⁻³ · 2·10⁻⁴ / 1,5."], resultado: "λ = 6 · 10⁻⁷ m = 600 nm (naranja)." },
    { enunciado: "Una luz no polarizada de 80 W/m² atraviesa un polarizador y después un analizador girado 60°. ¿Qué intensidad sale?", pasos: ["Tras el polarizador: I₁ = 80/2 = 40 W/m².", "Tras el analizador: I = 40 · cos² 60° = 40 · 0,25."], resultado: "I = 10 W/m²." },
  ],
  errores: [
    "Medir los ángulos respecto a la superficie en lugar de respecto a la normal.",
    "Creer que la frecuencia cambia al cambiar de medio: cambian v y λ.",
    "Aplicar la reflexión total al pasar a un medio más refringente: solo ocurre al pasar a uno de menor índice.",
    "Usar la calculadora en radianes con ángulos en grados.",
    "Pensar que todas las radiaciones electromagnéticas son peligrosas por igual: depende de su frecuencia.",
    "Confundir interferencia (dos o más focos coherentes) con difracción (una abertura u obstáculo).",
  ],
  ejercicios: [
    B("Explica las teorías corpuscular y ondulatoria de la luz y qué experimento apoyó a cada una.", "Corpuscular (Newton): partículas; efecto fotoeléctrico. Ondulatoria (Huygens): ondas; interferencia de Young, medida de v en agua."),
    B("¿Qué es una onda electromagnética? ¿Necesita un medio para propagarse?", "Campos E y B perpendiculares que oscilan en fase y se propagan; no necesita medio."),
    B("Ordena de menor a mayor frecuencia: rayos X, microondas, luz visible, ondas de radio, ultravioleta.", "Radio, microondas, visible, ultravioleta, rayos X."),
    B("Calcula la frecuencia de una luz verde de 530 nm.", "f = 3·10⁸ / 5,3·10⁻⁷ = 5,66·10¹⁴ Hz."),
    B("Calcula la velocidad de la luz en el diamante (n = 2,42).", "v = 3·10⁸ / 2,42 = 1,24·10⁸ m/s."),
    B("Enuncia las leyes de la reflexión y la ley de Snell.", "i = r, en el mismo plano; n₁ sen i = n₂ sen r."),
    B("¿Cuándo se acerca un rayo a la normal al refractarse?", "Al pasar a un medio de mayor índice (más lento)."),
    B("¿Qué condiciones deben darse para que haya reflexión total?", "Pasar a un medio de menor índice y que el ángulo de incidencia supere el límite."),
    B("¿Por qué la luz blanca se descompone en colores en un prisma?", "Porque el índice de refracción depende de λ: cada color se desvía distinto (dispersión)."),
    B("¿Qué demuestra la polarización de la luz?", "Que es una onda transversal."),
    B("¿Por qué el cielo es azul?", "Porque el aire dispersa más la luz de λ corta (∝ 1/λ⁴)."),
    B("Distingue radiaciones ionizantes y no ionizantes con ejemplos.", "Ionizantes: UV, X, γ (arrancan electrones). No ionizantes: radio, microondas, visible."),
    M("Una onda electromagnética tiene E = 300 sen(4π·10¹⁴ t − kx) V/m. Calcula f, λ, k y la amplitud del campo magnético.", "f = 2·10¹⁴ Hz; λ = 1,5 μm (infrarrojo); k = 4,19·10⁶ rad/m; B₀ = 300/3·10⁸ = 10⁻⁶ T."),
    M("Un rayo pasa del agua (1,33) al aire con 30°. Calcula el ángulo de refracción.", "1,33 · 0,5 = sen r → r = 41,7°."),
    M("Un rayo incide con 60° sobre una lámina de vidrio (n = 1,5) de 2 cm de espesor. Calcula el ángulo de refracción y el ángulo de salida.", "sen r = 0,866/1,5 → r = 35,3°. Sale a 60°, paralelo al incidente."),
    M("Un buceador mira hacia arriba. ¿Dentro de qué cono ve el exterior? (n = 1,33)", "L = arcsen(1/1,33) = 48,8°: cono de 97,6° de abertura (ventana de Snell)."),
    M("Calcula la profundidad aparente de una piscina de 2 m de profundidad mirada desde arriba en vertical.", "h' ≈ h/n = 2/1,33 = 1,5 m."),
    M("Una luz roja de 650 nm atraviesa una rendija doble con d = 0,1 mm. ¿A qué distancia del centro está la tercera franja brillante en una pantalla a 2 m?", "y = 3 · 6,5·10⁻⁷ · 2 / 10⁻⁴ = 3,9·10⁻² m."),
    M("Una red de 600 líneas/mm se ilumina con luz de 500 nm. ¿Con qué ángulo aparece el primer máximo?", "d = 1,67·10⁻⁶ m. sen θ = 0,5·10⁻⁶/1,67·10⁻⁶ = 0,3 → θ = 17,5°."),
    M("¿Qué ángulo deben formar dos polarizadores para que pase el 25 % de la luz que sale del primero?", "cos² θ = 0,25 → θ = 60°."),
    M("La fibra óptica tiene un núcleo de n = 1,48 y un revestimiento de n = 1,46. Calcula el ángulo límite.", "sen L = 1,46/1,48 = 0,986 → L = 80,6°."),
    M("¿Cuánto tarda la luz en llegar del Sol a la Tierra (1,5 · 10¹¹ m)? ¿Y en recorrer un cable de fibra de 6000 km (n = 1,47)?", "500 s ≈ 8,3 min. v = 2,04·10⁸ m/s: t = 0,029 s."),
    A("(Tipo PAU) Un rayo de luz incide con 50° sobre una cara de un prisma de vidrio (n = 1,5) de ángulo 60°. Calcula el ángulo de salida y la desviación.", "sen r = sen 50°/1,5 = 0,511 → r = 30,7°. i' = 60 − 30,7 = 29,3°. sen e = 1,5 · sen 29,3° = 0,734 → e = 47,2°. δ = 50 + 47,2 − 60 = 37,2°."),
    A("En el prisma anterior, ¿qué ángulo mínimo de incidencia hace falta para que la luz salga por la segunda cara y no se produzca reflexión total?", "L = 41,8° → i' ≤ 41,8° → r ≥ 18,2° → sen i ≥ 1,5 · sen 18,2° = 0,469 → i ≥ 27,9°."),
    A("Un rayo atraviesa una lámina de 3 cm de espesor (n = 1,6) con 45° de incidencia. Calcula el desplazamiento lateral.", "sen r = 0,707/1,6 → r = 26,2°. Recorrido = 3/cos r = 3,34 cm. d = 3,34 · sen(45 − 26,2) = 1,08 cm."),
    A("Calcula el espesor mínimo de una capa antirreflejo de n = 1,38 para anular el reflejo de luz de 550 nm (con incidencia normal y considerando que ambas reflexiones invierten la fase).", "Diferencia de caminos 2e = λ/(2n) → e = λ/(4n) = 550/5,52 = 99,6 nm."),
    A("Una onda electromagnética plana tiene E₀ = 50 V/m. Calcula B₀ y la intensidad media (I = c·ε₀·E₀²/2).", "B₀ = 1,67·10⁻⁷ T. I = 3·10⁸ · 8,85·10⁻¹² · 2500 / 2 = 3,3 W/m²."),
    A("Explica por qué el experimento de Foucault de 1850 fue decisivo en la polémica sobre la naturaleza de la luz.", "Midió que la luz es más lenta en el agua, lo que predecía la teoría ondulatoria (Huygens) y contradecía la corpuscular de Newton."),
    A("Con luz blanca, en un experimento de Young, ¿qué color tiene la franja central y cuál aparece más alejado en cada franja lateral?", "La central es blanca (todas las λ en fase). En cada franja lateral, el rojo (λ mayor) aparece más lejos del centro: y ∝ λ."),
  ],
  quiz: [
    q4("Defendía la teoría corpuscular de la luz…", ["Huygens", "Newton", "Young", "Maxwell"], 1, "Partículas."),
    q4("La interferencia de la luz la observó…", ["Newton", "Young", "Einstein", "Hertz"], 1, "1801, doble rendija."),
    q4("Las ondas electromagnéticas son…", ["longitudinales", "transversales", "mecánicas", "estacionarias"], 1, "E ⊥ B ⊥ c."),
    q4("En una onda electromagnética, E/B =", ["1", "c", "1/c", "ε₀"], 1, "E = cB."),
    q4("La velocidad de la luz en el vacío es…", ["3·10⁵ m/s", "3·10⁸ m/s", "340 m/s", "infinita"], 1, "1/√(ε₀μ₀)."),
    q4("La luz visible está entre…", ["400 y 700 nm", "1 y 10 m", "1 y 100 nm", "1 y 10 μm"], 0, "Violeta-rojo."),
    q4("Tienen mayor frecuencia…", ["las microondas", "los rayos gamma", "las ondas de radio", "el infrarrojo"], 1, "Extremo del espectro."),
    q4("El índice de refracción es…", ["v/c", "c/v", "c·v", "λ/f"], 1, "≥ 1."),
    q4("Al pasar a otro medio, la luz conserva…", ["la velocidad", "la frecuencia", "la longitud de onda", "la dirección"], 1, "La impone el foco."),
    q4("Al pasar del aire al agua, el rayo…", ["se aleja de la normal", "se acerca a la normal", "no cambia", "se refleja siempre"], 1, "n mayor."),
    q4("La ley de Snell es…", ["n₁ sen i = n₂ sen r", "n₁ cos i = n₂ cos r", "i = r", "n₁ n₂ = 1"], 0, "Refracción."),
    q4("El ángulo límite existe al pasar…", ["a un medio más refringente", "a un medio menos refringente", "siempre", "nunca"], 1, "n₁ > n₂."),
    q4("La fibra óptica funciona por…", ["difracción", "reflexión total", "polarización", "absorción"], 1, "Ángulo mayor que el límite."),
    q4("La dispersión de la luz en un prisma se debe a que…", ["n depende de λ", "la luz se polariza", "hay interferencia", "el vidrio absorbe"], 0, "Cada color, un ángulo."),
    q4("En Young, la separación entre franjas es…", ["λd/D", "λD/d", "dD/λ", "λ/dD"], 1, "Δy = λD/d."),
    q4("La difracción es apreciable si la rendija es…", ["mucho mayor que λ", "comparable a λ", "de 1 m", "opaca"], 1, "a ≈ λ."),
    q4("Solo pueden polarizarse las ondas…", ["longitudinales", "transversales", "sonoras", "estacionarias"], 1, "Por eso la luz es transversal."),
    q4("Ley de Malus:", ["I = I₀ cos θ", "I = I₀ cos² θ", "I = I₀ sen θ", "I = I₀/2"], 1, "Analizador."),
    q4("Un objeto azul iluminado con luz roja se ve…", ["azul", "negro", "rojo", "blanco"], 1, "No refleja rojo."),
    q4("Son radiaciones ionizantes…", ["ondas de radio", "rayos X", "microondas", "infrarrojo"], 1, "Arrancan electrones."),
  ],
  examen: [
    q4("Onda EM de 3 GHz: λ =", ["10 cm", "1 m", "1 cm", "10 m"], 0, "3·10⁸/3·10⁹."),
    q4("Luz en un medio con v = 2,25·10⁸ m/s: n =", ["1,33", "1,5", "0,75", "2,25"], 0, "c/v."),
    q4("Luz de 600 nm en agua (n = 1,33): λ ≈", ["451 nm", "600 nm", "798 nm", "300 nm"], 0, "λ₀/n."),
    q4("Aire → vidrio (1,5) con i = 30°: sen r =", ["0,333", "0,75", "0,5", "0,667"], 0, "0,5/1,5."),
    q4("Ángulo límite agua-aire (1,33):", ["48,8°", "41,8°", "90°", "24,4°"], 0, "arcsen(1/1,33)."),
    q4("Young con λ = 500 nm, D = 1 m, d = 0,5 mm: Δy =", ["1 mm", "0,1 mm", "1 cm", "0,5 mm"], 0, "λD/d."),
    q4("Polarizadores cruzados: pasa…", ["nada", "la mitad", "todo", "un cuarto"], 0, "cos² 90° = 0."),
    q4("Si E₀ = 600 V/m, B₀ =", ["2·10⁻⁶ T", "600 T", "1,8·10¹¹ T", "2·10⁻³ T"], 0, "E₀/c."),
  ],
  feynman: ["Por qué la luz puede ser a la vez onda y partícula", "Qué es exactamente una onda electromagnética", "Por qué una cuchara parece rota en un vaso de agua", "Cómo viaja la luz por una fibra óptica", "Por qué el cielo es azul y el atardecer rojo", "Por qué las gafas polarizadas quitan los reflejos"],
  mapa: mapaB("LA LUZ", [["Naturaleza", "onda EM y fotón", "#b45309"], ["Espectro", "radio … gamma ; c = λf", "var(--red)"], ["Geometría", "n₁ sen i = n₂ sen r", "var(--pen)"], ["Ondulatoria", "Young, difracción, polarización", "var(--leaf)"]]),
  tarjetas: [
    ["Onda electromagnética", "E y B perpendiculares, en fase y ⊥ a la propagación."],
    ["Velocidad de la luz", "c = 1/√(ε₀μ₀) = 3·10⁸ m/s; E = cB."],
    ["Espectro", "Radio, microondas, IR, visible, UV, X, γ."],
    ["Luz visible", "400 nm (violeta) a 700 nm (rojo)."],
    ["Índice de refracción", "n = c/v; λ = λ₀/n; f no cambia."],
    ["Ley de Snell", "n₁·sen i = n₂·sen r."],
    ["Ángulo límite", "sen L = n₂/n₁ (n₁ > n₂)."],
    ["Dispersión", "n depende de λ: el prisma separa colores."],
    ["Young", "Máximos y = nλD/d; Δy = λD/d."],
    ["Difracción", "a·sen θ = λ (1.er mínimo)."],
    ["Ley de Malus", "I = I₀·cos² θ."],
    ["Rayleigh", "Difusión ∝ 1/λ⁴: cielo azul."],
  ],
  glosario: [
    ["Teoría corpuscular", "Modelo de la luz como chorro de partículas (Newton)."],
    ["Teoría ondulatoria", "Modelo de la luz como onda (Huygens, Young)."],
    ["Fotón", "Partícula o cuanto de luz, de energía h·f."],
    ["Espectro electromagnético", "Conjunto de las ondas electromagnéticas ordenadas por frecuencia."],
    ["Índice de refracción", "Cociente entre c y la velocidad de la luz en un medio."],
    ["Normal", "Recta perpendicular a la superficie en el punto de incidencia."],
    ["Refracción", "Cambio de dirección de la luz al cambiar de medio."],
    ["Ángulo límite", "Ángulo de incidencia con refracción a 90°."],
    ["Reflexión total", "Reflexión de toda la luz al superar el ángulo límite."],
    ["Dispersión cromática", "Separación de la luz en colores por depender n de λ."],
    ["Focos coherentes", "Focos de igual frecuencia y desfase constante."],
    ["Red de difracción", "Superficie con muchas rendijas paralelas muy juntas."],
    ["Polarización", "Restricción de la vibración del campo E a una dirección."],
    ["Radiación ionizante", "Radiación capaz de arrancar electrones de los átomos."],
    ["Láser", "Fuente de luz coherente, monocromática y direccional."],
  ],
  situacion: {
    titulo: "Medimos la longitud de onda de un láser",
    reto: "Con un puntero láser, un CD o DVD y una regla, vuestro equipo debe medir la longitud de onda del láser y la separación entre las pistas del disco, comprobando así la naturaleza ondulatoria de la luz.",
    pasos: [
      "Con precaución (nunca apuntar a los ojos), haced incidir el láser sobre una rendija doble o un pelo y medid la separación de las franjas en una pared lejana.",
      "Calculad λ con Δy = λ·D/d (o con la difracción de un pelo de grosor conocido).",
      "Usad un CD como red de difracción por reflexión: medid el ángulo del primer máximo y calculad la separación entre pistas.",
      "Repetid con un DVD y comparad sus pistas; relacionadlo con la capacidad de almacenamiento.",
      "Comparad el valor de λ obtenido con el que indica el láser y estimad la incertidumbre.",
    ],
    producto: "Un informe de laboratorio con fotografías de los patrones y los cálculos.",
    evaluacion: ["Se respetan las normas de seguridad con el láser.", "Las medidas están bien tomadas y repetidas.", "Se aplican correctamente las ecuaciones de interferencia y difracción.", "Se analizan los errores y se interpretan los resultados."],
  },
  familias: [
    "Meted una cuchara en un vaso de agua y observad desde varios ángulos cómo parece romperse.",
    "Mirad un CD a la luz y explicad de dónde salen los colores.",
    "Girad unas gafas de sol polarizadas delante de una pantalla o de un reflejo y observad qué pasa.",
    "Observad un atardecer y comentad por qué el Sol se ve rojo.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Vibraciones y ondas»: naturaleza de la luz y evolución de los modelos; ondas electromagnéticas y espectro; propagación de la luz, índice de refracción, leyes de la reflexión y la refracción, reflexión total; fenómenos ondulatorios de la luz (dispersión, interferencia, difracción, polarización); aplicaciones tecnológicas y riesgos de las radiaciones.`,
    ideas: [
      "Simulación PhET «Doblando la luz» para la ley de Snell y la reflexión total.",
      "Medida de λ de un láser con un CD o una red de difracción.",
      "Fibra óptica casera con un chorro de agua iluminado por un láser.",
      "Debate informado sobre antenas, 5G y radiaciones con datos de organismos oficiales.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Doblando la luz» (PhET)", url: "https://phet.colorado.edu/es/simulations/bending-light" },
    { t: "Simulación «Interferencia de ondas» (PhET)", url: "https://phet.colorado.edu/es/simulations/wave-interference" },
  ],
  revisado: "2026-11-21",
};
