// Física 2º Bachillerato · El campo gravitatorio (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;

// Líneas de campo radiales hacia una masa puntual.
const lineasSVG = marco("Líneas del campo gravitatorio de una masa: son radiales y apuntan hacia la masa; están más juntas donde el campo es más intenso", `
  ${flechaDef("cgl", "var(--pen)")}
  ${Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6, c = Math.cos(a), s = Math.sin(a); return `<path d="M${(130 + 78 * c).toFixed(1)} ${(88 + 70 * s).toFixed(1)} L ${(130 + 30 * c).toFixed(1)} ${(88 + 28 * s).toFixed(1)}" stroke="var(--pen)" stroke-width="2" marker-end="url(#cgl)"/>`; }).join("")}
  <circle cx="130" cy="88" r="20" fill="var(--leaf)"/>${T(130, 93, "M", { fs: 15, b: true, c: "#fff" })}
  ${T(130, 174, "g apunta siempre hacia la masa", { fs: 12, b: true })}`);

// Superposición de dos masas iguales.
const superSVG = marco("Principio de superposición: el campo en un punto es la suma vectorial de los campos que crea cada masa", `
  ${flechaDef("cgs", "var(--red)")}${flechaDef("cgs2", "var(--pen)")}
  <circle cx="40" cy="140" r="16" fill="var(--leaf)"/>${T(40, 145, "m₁", { fs: 12, b: true, c: "#fff" })}
  <circle cx="220" cy="140" r="16" fill="var(--leaf)"/>${T(220, 145, "m₂", { fs: 12, b: true, c: "#fff" })}
  <circle cx="130" cy="50" r="4" fill="var(--ink)"/>${T(140, 40, "P", { fs: 13, b: true, a: "start" })}
  <path d="M130 50 L 88 96" stroke="var(--pen)" stroke-width="3" marker-end="url(#cgs2)"/>${T(90, 70, "g₁", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M130 50 L 172 96" stroke="var(--pen)" stroke-width="3" marker-end="url(#cgs2)"/>${T(172, 70, "g₂", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M130 50 L 130 128" stroke="var(--red)" stroke-width="3.5" marker-end="url(#cgs)"/>${T(146, 120, "g total", { fs: 12, b: true, c: "var(--red)", a: "start" })}
  <path d="M40 140 L130 50 L220 140" fill="none" stroke="var(--line)" stroke-dasharray="4 4"/>`);

// Superficies equipotenciales: circunferencias concéntricas perpendiculares a las líneas de campo.
const equiSVG = marco("Superficies equipotenciales de una masa: esferas concéntricas, perpendiculares en cada punto a las líneas de campo", `
  ${[30, 50, 72].map((r, i) => `<circle cx="100" cy="90" r="${r}" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="${i ? "5 4" : "0"}"/>`).join("")}
  ${Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return `<path d="M${(100 + 80 * Math.cos(a)).toFixed(1)} ${(90 + 80 * Math.sin(a)).toFixed(1)} L ${(100 + 18 * Math.cos(a)).toFixed(1)} ${(90 + 18 * Math.sin(a)).toFixed(1)}" stroke="var(--pen)" stroke-width="1.5" opacity=".7"/>`; }).join("")}
  <circle cx="100" cy="90" r="14" fill="var(--pen)"/>${T(100, 95, "M", { fs: 12, b: true, c: "#fff" })}
  ${T(184, 50, "V₁<V₂<V₃", { fs: 11, b: true, a: "start", c: "var(--leaf)" })}
  ${T(184, 80, "V = −GM/r", { fs: 12, b: true, a: "start" })}
  ${T(184, 110, "verde: V cte.", { fs: 11, a: "start", c: "var(--leaf)" })}
  ${T(184, 130, "azul: líneas", { fs: 11, a: "start", c: "var(--pen)" })}`);

// g dentro y fuera de un planeta.
const gRSVG = graf("Intensidad del campo gravitatorio de un planeta homogéneo: crece linealmente dentro y disminuye con 1/r² fuera", "r", "g", [
  { p: [[0, 0], [0.3, 0.9]], c: "var(--red)", t: "" },
  { p: [[0.3, 0.9], [0.4, 0.51], [0.5, 0.33], [0.6, 0.23], [0.75, 0.15], [1, 0.08]], c: "var(--pen)", t: "GM/r²" },
], `<path d="M100 145 V 30" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="100" y="160" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">R</text><text x="66" y="92" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">g₀·r/R</text>`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "El campo gravitatorio",
  minutos: 115,
  objetivos: [
    "Comprender el concepto de campo como propiedad del espacio que rodea a una masa",
    "Calcular la intensidad del campo gravitatorio de masas puntuales y esféricas, aplicando el principio de superposición",
    "Representar el campo con líneas de campo y superficies equipotenciales",
    "Relacionar fuerza conservativa, energía potencial y potencial gravitatorio",
    "Calcular el trabajo realizado por el campo a partir de diferencias de potencial",
    "Resolver problemas tipo PAU de campos creados por varias masas",
  ],
  claves: ["campo", "acción a distancia", "intensidad del campo gravitatorio", "vector unitario", "líneas de campo", "principio de superposición", "fuerza conservativa", "energía potencial gravitatoria", "potencial gravitatorio", "superficie equipotencial", "trabajo", "gradiente", "flujo", "teorema de Gauss", "gravimetría"],
  pregunta: {
    texto: "¿Cómo «sabe» la Luna que la Tierra está ahí para sentirse atraída por ella?",
    respuesta: "Porque <mark>la Tierra modifica el espacio que la rodea</mark>: crea un campo gravitatorio. La Luna no interactúa a distancia con la Tierra, sino con el campo que hay justo donde ella está. Esta idea de campo, que Faraday y Maxwell desarrollaron para la electricidad, es una de las más potentes de la física: permite describir cualquier interacción sin «fantasmas» que actúen a distancia.",
  },
  lectura: {
    titulo: "Pesar montañas desde el espacio",
    html: `<p>En 2002 se lanzaron dos satélites gemelos, llamados GRACE, que volaban uno detrás del otro a unos 220 km de distancia. Su misión parecía extraña: medir con precisión de micras la distancia que los separaba. Cuando el primero pasaba sobre una cordillera, el campo gravitatorio un poco más intenso lo aceleraba antes que al segundo, y la distancia entre ellos cambiaba. Con esas minúsculas variaciones, los científicos dibujaron el mapa más preciso del campo gravitatorio terrestre.</p><p>Ese mapa mostró algo inesperado: el campo cambia de un año a otro. Groenlandia y la Antártida pierden cientos de miles de millones de toneladas de hielo al año, y esa pérdida de masa se nota en la gravedad. También se detectaron acuíferos que se vacían en la India y en California por el riego excesivo. Hoy la misión GRACE-FO continúa vigilando el agua del planeta. Todo se basa en una idea que vas a estudiar en este tema: cada masa crea a su alrededor un campo gravitatorio, y medir ese campo es una forma de «pesar» lo que hay debajo sin tocarlo.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 De la acción a distancia al concepto de campo", p: [
      "La ley de gravitación de Newton explica cómo se atraen dos masas, pero dejaba un problema filosófico que al propio Newton le incomodaba: ¿cómo puede un cuerpo actuar sobre otro a través del vacío, sin tocarlo y de forma instantánea? Es la llamada <b>acción a distancia</b>. En el siglo XIX, Michael Faraday propuso una alternativa para la electricidad y el magnetismo que después se extendió a la gravedad: el concepto de <mark>campo</mark>.",
      "Un <b>campo</b> es una región del espacio en la que cada punto tiene asociada una magnitud física. Si la magnitud es un número, el campo es <b>escalar</b> (por ejemplo, la temperatura de una habitación o el potencial gravitatorio); si es un vector, el campo es <b>vectorial</b> (la velocidad del viento, la intensidad del campo gravitatorio). En la descripción de campo, una masa M modifica las propiedades del espacio que la rodea, y otra masa m situada en ese espacio interacciona con el campo que hay en su posición. Así la interacción se divide en dos partes: la masa crea el campo y el campo actúa sobre otras masas. Este cambio de mirada parece pequeño, pero es la base de toda la física moderna, desde el electromagnetismo hasta la relatividad general.",
    ], svg: compara("Dos formas de describir la gravedad", ["Acción a distancia", ["M atrae a m", "directamente", "a través del vacío", "Newton (1687)"]], ["Campo", ["M crea un campo", "el campo actúa", "sobre m", "Faraday, Maxwell"]], "var(--muted)", "var(--pen)") }),
    bloque({ h: "1.2 La ley de gravitación en forma vectorial", p: [
      "En 1º de Bachillerato escribiste la ley de gravitación en módulo. En 2º la usamos como vector, porque las fuerzas de varias masas se suman vectorialmente. La fuerza que una masa M situada en el origen ejerce sobre una masa m situada a una distancia r es <b>F = −G · M · m / r² · u<sub>r</sub></b>, donde <mark>u<sub>r</sub></mark> es el vector unitario que va desde M hacia m. El signo menos indica que la fuerza es <b>atractiva</b>: apunta hacia M, en sentido contrario a u<sub>r</sub>.",
      "Para calcular u<sub>r</sub> se toma el vector que une M con m y se divide por su módulo: u<sub>r</sub> = r / |r|. Por ejemplo, si M está en (0, 0) y m en (3, 4) m, el vector es (3, 4), su módulo 5 m y u<sub>r</sub> = (0,6; 0,8). Esta forma de trabajar será imprescindible en el campo eléctrico, donde las fuerzas pueden ser atractivas o repulsivas. Recuerda las características de la fuerza gravitatoria: es <b>central</b> (dirigida a lo largo de la recta que une las masas), siempre atractiva, de alcance infinito, la más débil de las interacciones fundamentales y <b>conservativa</b>, como veremos en la segunda parte del tema.",
    ], extra: formula("F = −G · M · m / r² · u<sub>r</sub>"), svg: ficha("La fuerza gravitatoria", "F = −GMm/r² · uᵣ", ["central y atractiva", "alcance infinito", "G = 6,67·10⁻¹¹ N·m²/kg²", "conservativa"]) }),
    bloque({ h: "1.3 La intensidad del campo gravitatorio", p: [
      "Para describir el campo sin depender de la masa que lo «nota», se define la <mark>intensidad del campo gravitatorio</mark> <b>g</b> en un punto como la fuerza que actuaría sobre la unidad de masa colocada en ese punto: <b>g = F / m</b>. Para una masa puntual o esférica M, a una distancia r de su centro: <b>g = −G · M / r² · u<sub>r</sub></b>. Su unidad en el SI es el N/kg, que equivale a m/s²: la intensidad del campo coincide con la aceleración que adquiere cualquier cuerpo en caída libre en ese punto.",
      "Conocido el campo, la fuerza sobre cualquier masa m es inmediata: <b>F = m · g</b>. Esta es la expresión del peso que conoces, pero ahora con su significado completo. La intensidad del campo depende solo de la masa que lo crea y de la distancia, nunca de la masa de prueba. Fíjate en su forma: disminuye con el <b>cuadrado de la distancia</b>, de modo que a doble distancia el campo es cuatro veces menor. En la superficie terrestre g₀ = 9,8 N/kg; en la superficie de la Luna, 1,62 N/kg; y en la del Sol, 274 N/kg.",
    ], extra: formula("g = F / m = −G · M / r² · u<sub>r</sub>"), svg: barras("Intensidad del campo en la superficie", "g (N/kg)", [["Sol", 274, "#b45309", "274"], ["Júpiter", 24.8, "var(--red)", "24,8"], ["Tierra", 9.8, "var(--pen)", "9,8"], ["Marte", 3.7, "var(--leaf)", "3,7"], ["Luna", 1.62, "var(--muted)", "1,62"]]), video: V("cg-c", "La intensidad del campo gravitatorio", "intensidad campo gravitatorio") }),
    bloque({ h: "1.4 Las líneas de campo", p: [
      "Faraday ideó una forma visual de representar un campo vectorial: las <mark>líneas de campo</mark> o líneas de fuerza. Son líneas tangentes en cada punto al vector intensidad de campo y con su mismo sentido. Para una masa puntual son rectas <b>radiales que entran en la masa</b>, porque g apunta siempre hacia ella. Por eso se dice que las masas son <b>sumideros</b> de líneas de campo: el campo gravitatorio no tiene fuentes, ya que no existen masas negativas.",
      "Las líneas de campo cumplen tres reglas. Primera: nunca se cortan, porque en cada punto el campo tiene una única dirección. Segunda: su <b>densidad</b> (número de líneas que atraviesan la unidad de superficie perpendicular) es proporcional a la intensidad del campo; cerca de la masa están juntas y lejos, separadas. Tercera: el número de líneas que llegan a una masa es proporcional a esa masa. Cerca de la superficie terrestre, en una zona pequeña, las líneas son prácticamente paralelas y equidistantes: el campo es <b>uniforme</b>, y por eso en los problemas de tiro parabólico se toma g constante.",
    ], svg: lineasSVG }),
    bloque({ h: "1.5 El principio de superposición", p: [
      "Cuando varias masas crean campo en una región, la intensidad del campo en un punto P es la <mark>suma vectorial</mark> de los campos que crearía cada masa si estuviera sola: <b>g = g₁ + g₂ + … + gₙ</b>. Es el <b>principio de superposición</b>, consecuencia de que la ley de gravitación es lineal en las masas. Lo mismo ocurre con las fuerzas: la fuerza total sobre una masa es la suma vectorial de las fuerzas que ejerce cada una de las demás.",
      "El procedimiento para los problemas tipo PAU es siempre el mismo: dibujar las masas y el punto, calcular el módulo de cada campo con g = GM/r², dibujar cada vector apuntando hacia la masa que lo crea, descomponerlo en componentes x e y con el vector unitario o con senos y cosenos, y sumar componente a componente. Hay que aprovechar la <b>simetría</b>: en el punto medio entre dos masas iguales el campo total es nulo, y en un punto de la mediatriz las componentes horizontales se anulan y solo queda la vertical. Un error muy frecuente es sumar los módulos en lugar de los vectores.",
    ], extra: formula("g<sub>total</sub> = Σ g<sub>i</sub> = −Σ G · M<sub>i</sub> / r<sub>i</sub>² · u<sub>ri</sub>"), svg: superSVG, video: V("cg-b", "Campo gravitatorio y superposición", "campo gravitatorio física 2 bachillerato") }),
    bloque({ h: "1.6 El campo gravitatorio terrestre", p: [
      "Un cuerpo esférico y homogéneo crea en el exterior el mismo campo que si toda su masa estuviera concentrada en su centro. Por eso, a una altura h sobre la superficie terrestre, <b>g = G·M / (R + h)²</b>, o en función de g₀: <mark>g = g₀ · R² / (R + h)²</mark>. A 400 km (la Estación Espacial) g vale 8,7 N/kg; a la altura de un satélite geoestacionario, solo 0,22 N/kg.",
      "¿Y si bajamos a un pozo profundo? En el interior de una esfera homogénea, solo la masa que queda «debajo» del punto (la de la esfera de radio r) contribuye al campo; la capa exterior no produce campo neto. Como esa masa es proporcional a r³, se obtiene <b>g = g₀ · r / R</b>: el campo disminuye <b>linealmente</b> hasta anularse en el centro. En realidad la Tierra no es homogénea: su núcleo de hierro es mucho más denso y g casi no cambia en los primeros 2900 km de profundidad. Además, g varía con la latitud por el achatamiento y la rotación terrestre: 9,78 N/kg en el ecuador y 9,83 N/kg en los polos.",
    ], extra: formula("Fuera: g = g₀ · R² / r² ; Dentro: g = g₀ · r / R"), svg: gRSVG }),
    bloque({ h: "2.1 Fuerzas conservativas y energía potencial", p: [
      "Una fuerza es <mark>conservativa</mark> cuando el trabajo que realiza para llevar un cuerpo de un punto A a otro B no depende del camino seguido, sino solo de las posiciones inicial y final. Equivale a decir que el trabajo en cualquier trayectoria cerrada es nulo. Las fuerzas centrales que dependen solo de la distancia, como la gravitatoria y la eléctrica, son conservativas; el rozamiento no lo es.",
      "Para cada fuerza conservativa se puede definir una <b>energía potencial</b> E<sub>p</sub> tal que el trabajo de la fuerza es igual a menos la variación de energía potencial: <b>W<sub>A→B</sub> = −ΔE<sub>p</sub> = E<sub>pA</sub> − E<sub>pB</sub></b>. Integrando la fuerza gravitatoria desde r hasta el infinito, donde se toma el origen de energía potencial, se obtiene <mark>E<sub>p</sub> = −G · M · m / r</mark>. Es negativa porque la fuerza es atractiva: para separar las masas hasta el infinito hay que aportar energía. Si solo actúan fuerzas conservativas, la energía mecánica E<sub>c</sub> + E<sub>p</sub> se conserva, el principio que usaremos para satélites, cohetes y meteoritos.",
    ], extra: formula("W<sub>A→B</sub> = −ΔE<sub>p</sub> ; E<sub>p</sub> = −G · M · m / r"), svg: pasos("Cómo usar la energía potencial", ["La fuerza es conservativa", "W no depende del camino", "W = −ΔEp", "Ep = −GMm/r (0 en ∞)"], "var(--pen)") }),
    bloque({ h: "2.2 El potencial gravitatorio", p: [
      "Igual que la intensidad del campo es la fuerza por unidad de masa, el <mark>potencial gravitatorio</mark> V en un punto es la energía potencial por unidad de masa colocada en él: <b>V = E<sub>p</sub> / m = −G · M / r</b>. Es una magnitud <b>escalar</b> que se mide en J/kg. Su significado físico: el potencial en un punto es el trabajo, cambiado de signo, que realiza el campo para traer la unidad de masa desde el infinito hasta ese punto.",
      "La gran ventaja del potencial es que, al ser escalar, para varias masas se suman los potenciales como números, sin vectores: <b>V = −G·M₁/r₁ − G·M₂/r₂ − …</b>. El potencial gravitatorio es siempre negativo y aumenta (se hace menos negativo) al alejarnos de la masa, hasta valer cero en el infinito. Conocido el potencial, la energía potencial de cualquier masa m es E<sub>p</sub> = m · V, y el trabajo del campo al moverla entre dos puntos es <b>W<sub>A→B</sub> = m · (V<sub>A</sub> − V<sub>B</sub>)</b>. Si la masa se mueve hacia potenciales menores, el campo realiza trabajo positivo: es lo que ocurre espontáneamente al caer.",
    ], extra: formula("V = −G · M / r ; W<sub>A→B</sub> = m · (V<sub>A</sub> − V<sub>B</sub>)"), svg: rejilla("Campo y potencial gravitatorios", ["Magnitud", "Tipo", "Unidad"], [["g = −GM/r² uᵣ", "vector", "N/kg"], ["V = −GM/r", "escalar", "J/kg"], ["F = m·g", "vector", "N"], ["Ep = m·V", "escalar", "J"]]) }),
    bloque({ h: "2.3 Superficies equipotenciales", p: [
      "Las <mark>superficies equipotenciales</mark> son los lugares geométricos de los puntos que tienen el mismo potencial. Para una masa puntual o esférica, como V = −GM/r solo depende de r, son <b>esferas concéntricas</b> con la masa. Cerca de la superficie terrestre, en una zona pequeña, son planos horizontales paralelos: cada «altura» es una superficie equipotencial.",
      "Tienen dos propiedades importantes. Primera: el trabajo para mover una masa sobre una superficie equipotencial es <b>nulo</b>, porque V<sub>A</sub> = V<sub>B</sub>. Por eso un satélite en órbita circular no recibe trabajo del campo: se mueve siempre a la misma distancia. Segunda: las líneas de campo son siempre <b>perpendiculares</b> a las superficies equipotenciales y apuntan hacia potenciales decrecientes. Los mapas topográficos con curvas de nivel son, en el fondo, mapas de superficies equipotenciales gravitatorias: donde las curvas están juntas, la pendiente (y la componente de la gravedad a lo largo del terreno) es mayor.",
    ], svg: equiSVG }),
    bloque({ h: "2.4 Relación entre campo y potencial", p: [
      "Campo y potencial no son independientes: el campo indica cómo cambia el potencial en el espacio. En una dimensión, <b>g = −dV/dr</b>; en general, el campo es el <mark>gradiente</mark> del potencial cambiado de signo. Comprueba que derivando V = −GM/r se obtiene −GM/r², el módulo con su signo. El signo menos dice que el campo apunta hacia donde el potencial disminuye más rápido.",
      "Para un campo uniforme, como cerca de la superficie, la relación se simplifica: <b>ΔV = −g · Δr</b>, es decir, al subir una altura h el potencial aumenta g·h y la energía potencial m·g·h. Esto demuestra que la fórmula de 4º de ESO es un caso particular de la general: si calculas E<sub>p</sub>(R + h) − E<sub>p</sub>(R) = GMm·h / (R(R + h)) y h es mucho menor que R, se obtiene GMm·h/R² = m·g₀·h. Las dos fórmulas dan lo mismo cerca de la superficie, pero solo la general sirve para satélites y viajes espaciales.",
    ], extra: formula("g = −dV/dr ; cerca de la superficie: ΔE<sub>p</sub> ≈ m · g₀ · h"), svg: ficha("Campo y potencial", "g = −dV/dr", ["g apunta hacia V menor", "g ⊥ equipotenciales", "uniforme: ΔV = g·h", "mgh: caso particular"]) }),
    bloque({ h: "2.5 Flujo y teorema de Gauss gravitatorio", p: [
      "El <mark>flujo</mark> del campo gravitatorio a través de una superficie mide cuántas líneas de campo la atraviesan: Φ = g · S · cos α, donde α es el ángulo entre el campo y la normal a la superficie. Para una superficie cerrada, el <b>teorema de Gauss</b> afirma que el flujo neto solo depende de la masa encerrada en su interior: <b>Φ = −4π · G · M<sub>int</sub></b>. Las masas exteriores no contribuyen, porque todas las líneas que entran en la superficie también salen.",
      "El teorema es especialmente útil cuando hay simetría. Para una esfera de radio r concéntrica con un planeta, g es constante en módulo y perpendicular a la superficie, así que Φ = −g · 4πr². Igualando con −4πG·M<sub>int</sub> se obtiene g = G·M<sub>int</sub>/r², que justifica por qué un planeta esférico actúa como una masa puntual y por qué en su interior solo cuenta la masa más interna. Lo estudiarás con más detalle en el campo eléctrico, donde el teorema de Gauss es una de las cuatro ecuaciones de Maxwell.",
    ], extra: formula("Φ = ∮ g · dS = −4π · G · M<sub>int</sub>"), svg: pasos("Aplicar el teorema de Gauss", ["Elegir superficie con simetría", "Calcular el flujo: g · 4πr²", "Masa encerrada M(r)", "Despejar g"], "var(--leaf)") }),
    bloque({ h: "3.1 Aplicaciones: medir planetas y explorar el subsuelo", p: [
      "El estudio del campo gravitatorio tiene aplicaciones muy concretas. Conocidos g₀ y R, se calcula la <b>masa</b> de un planeta: M = g₀ · R² / G, y con ella su <b>densidad media</b>. Así se supo que la Tierra (5500 kg/m³) es mucho más densa que sus rocas superficiales y que debe tener un núcleo metálico, o que Saturno es menos denso que el agua. Con los satélites de un planeta se calcula también su masa, como verás en el tema siguiente.",
      "La <mark>gravimetría</mark> mide pequeñísimas variaciones de g (de hasta una parte en mil millones) para explorar el subsuelo sin excavar: un yacimiento de minerales densos aumenta ligeramente g, mientras que una cavidad o un domo de sal lo reduce. Se usa en prospección de petróleo y minerales, en arqueología para localizar cámaras ocultas y en vulcanología para detectar el ascenso del magma. A escala planetaria, misiones como GRACE y GOCE han medido el <b>geoide</b>, la superficie equipotencial que coincide con el nivel medio del mar, base de todas las altitudes de los mapas.",
    ], svg: rejilla("Aplicaciones del campo gravitatorio", ["Aplicación", "Qué se mide", "Uso"], [["Masa planetaria", "g₀ y R", "astronomía"], ["Gravimetría", "Δg mínimas", "minas, petróleo"], ["GRACE", "Δg en el tiempo", "hielo, acuíferos"], ["Geoide", "equipotencial", "altitudes"]], "var(--leaf)"), video: V("cg-a", "Campo gravitatorio: resumen para la PAU", "campo gravitatorio resumen PAU") }),
  ],
  figura: figura("El campo gravitatorio", "Intensidad, potencial, líneas de campo y superposición", [["Intensidad", "g = −GM/r² uᵣ", "N/kg"], ["Potencial", "V = −GM/r", "J/kg"], ["Superposición", "g = Σ gᵢ", "V = Σ Vᵢ"], ["Trabajo", "W = m(VA − VB)", "no depende del camino"]]),
  video: V("cg-a", "Campo gravitatorio: resumen para la PAU", "campo gravitatorio resumen PAU"),
  ejemplos: [
    { enunciado: "Calcula el campo gravitatorio (módulo, dirección y sentido) que crea la Tierra (M = 5,97 · 10²⁴ kg) en un punto situado a 2 · 10⁷ m de su centro.", pasos: ["g = G·M / r² = 6,67·10⁻¹¹ · 5,97·10²⁴ / (2·10⁷)².", "g = 3,98·10¹⁴ / 4·10¹⁴ = 0,995 N/kg.", "Dirección radial; sentido hacia el centro de la Tierra."], resultado: "g ≈ 1,0 N/kg dirigido hacia el centro de la Tierra." },
    { enunciado: "Dos masas de 200 kg están en (−3, 0) m y (3, 0) m. Calcula el campo gravitatorio en P (0, 4) m.", pasos: ["Distancia de cada masa a P: r = √(3² + 4²) = 5 m.", "Módulo de cada campo: g₁ = g₂ = 6,67·10⁻¹¹ · 200 / 25 = 5,34·10⁻¹⁰ N/kg.", "Por simetría, las componentes x se anulan. Componente y de cada uno: −5,34·10⁻¹⁰ · 4/5 = −4,27·10⁻¹⁰ N/kg.", "Suma: g = (0, −8,54·10⁻¹⁰) N/kg."], resultado: "g = −8,5 · 10⁻¹⁰ j N/kg (hacia abajo, hacia el segmento que une las masas)." },
    { enunciado: "Con los datos anteriores, calcula el potencial gravitatorio en P y en el origen, y el trabajo del campo para llevar una masa de 2 kg de P al origen.", pasos: ["V<sub>P</sub> = −2 · G · 200 / 5 = −5,34·10⁻⁹ J/kg.", "V<sub>O</sub> = −2 · G · 200 / 3 = −8,89·10⁻⁹ J/kg.", "W = m (V<sub>P</sub> − V<sub>O</sub>) = 2 · (−5,34 + 8,89)·10⁻⁹."], resultado: "W = 7,1 · 10⁻⁹ J, positivo: el campo lleva la masa espontáneamente hacia el origen." },
    { enunciado: "¿A qué altura sobre la superficie terrestre g vale 4,9 N/kg? ¿Y a qué profundidad (Tierra homogénea)? R = 6370 km.", pasos: ["Altura: 4,9 = 9,8 · R²/(R + h)² → (R + h) = √2 · R → h = 0,414 · 6370 = 2640 km.", "Profundidad: 4,9 = 9,8 · r/R → r = R/2 = 3185 km.", "Profundidad = R − r = 3185 km."], resultado: "h ≈ 2640 km de altura; 3185 km de profundidad." },
    { enunciado: "Calcula la masa y la densidad media de Marte sabiendo que g₀ = 3,72 N/kg y R = 3390 km.", pasos: ["M = g₀ · R² / G = 3,72 · (3,39·10⁶)² / 6,67·10⁻¹¹.", "M = 4,27·10¹³ / 6,67·10⁻¹¹ = 6,41·10²³ kg.", "V = 4/3 π R³ = 1,63·10²⁰ m³; ρ = M/V."], resultado: "M ≈ 6,4 · 10²³ kg; ρ ≈ 3900 kg/m³ (menos densa que la Tierra)." },
    { enunciado: "Una masa de 1 kg y otra de 9 kg están separadas 4 m. ¿En qué punto del segmento que las une se anula el campo gravitatorio?", pasos: ["Sea x la distancia a la masa de 1 kg: G·1/x² = G·9/(4 − x)².", "(4 − x)² = 9x² → 4 − x = 3x.", "x = 1 m."], resultado: "A 1 m de la masa de 1 kg (y a 3 m de la de 9 kg)." },
  ],
  errores: [
    "Sumar los módulos de los campos de varias masas en lugar de sumarlos como vectores.",
    "Sumar los potenciales como vectores: el potencial es escalar y se suma con su signo.",
    "Olvidar que el potencial y la energía potencial gravitatorios son siempre negativos.",
    "Medir las distancias desde la superficie del planeta en lugar de desde su centro.",
    "Confundir la intensidad del campo (no depende de m) con la fuerza (F = m·g).",
    "Equivocar el signo del trabajo: W = m(V<sub>A</sub> − V<sub>B</sub>), no al revés.",
  ],
  ejercicios: [
    B("Define campo y explica la diferencia entre campo escalar y vectorial con un ejemplo de cada uno.", "Región del espacio en la que cada punto tiene asociada una magnitud. Escalar: temperatura, potencial. Vectorial: velocidad del viento, intensidad del campo gravitatorio."),
    B("¿Qué unidades tiene la intensidad del campo gravitatorio? Demuestra que N/kg equivale a m/s².", "N/kg = (kg·m/s²)/kg = m/s²."),
    B("Calcula la intensidad del campo gravitatorio que crea una masa de 1000 kg a 2 m de distancia.", "g = 6,67·10⁻¹¹ · 1000 / 4 = 1,67·10⁻⁸ N/kg, dirigido hacia la masa."),
    B("Enuncia el principio de superposición para el campo gravitatorio.", "El campo creado por varias masas en un punto es la suma vectorial de los campos que crearía cada una por separado."),
    B("Dibuja las líneas de campo de una masa puntual y explica por qué nunca se cortan.", "Rectas radiales hacia la masa. No se cortan porque en cada punto el campo tiene una única dirección."),
    B("Calcula el potencial gravitatorio que crea la Tierra en su superficie (G·M = 3,99 · 10¹⁴ m³/s²; R = 6,37 · 10⁶ m).", "V = −3,99·10¹⁴ / 6,37·10⁶ = −6,26·10⁷ J/kg."),
    B("¿Qué forma tienen las superficies equipotenciales de una masa puntual? ¿Qué ángulo forman con las líneas de campo?", "Esferas concéntricas; son perpendiculares a las líneas de campo."),
    B("¿Qué trabajo realiza el campo gravitatorio sobre un satélite en órbita circular? Justifícalo.", "Nulo: se mueve sobre una superficie equipotencial (r constante) y la fuerza es perpendicular a la velocidad."),
    B("Explica qué es una fuerza conservativa y pon un ejemplo de fuerza que no lo sea.", "Aquella cuyo trabajo no depende del camino (es nulo en una trayectoria cerrada). El rozamiento no es conservativo."),
    B("Calcula la energía potencial gravitatoria de una masa de 50 kg en la superficie terrestre.", "E<sub>p</sub> = m · V = 50 · (−6,26·10⁷) = −3,13·10⁹ J."),
    B("¿Cuánto vale g a una distancia del centro terrestre igual a 3R?", "g = g₀/9 = 1,09 N/kg."),
    B("¿Qué mide la gravimetría y para qué se usa?", "Pequeñas variaciones de g; para buscar minerales, petróleo, cavidades o seguir el magma de volcanes."),
    M("Dos masas de 100 kg están en (0, 0) y (4, 0) m. Calcula el campo en (2, 0) m y en (6, 0) m.", "En (2, 0) los campos son iguales y opuestos: g = 0. En (6, 0): g = −G·100/36 − G·100/4 = −(1,85 + 16,7)·10⁻¹⁰ = −1,85·10⁻⁹ i N/kg."),
    M("Una masa de 300 kg está en el origen y otra de 300 kg en (0, 6) m. Calcula el campo y el potencial en (4, 3) m.", "r = 5 m para ambas. g de cada una: 8,0·10⁻¹⁰ N/kg. Componentes y se anulan; x: −2 · 8,0·10⁻¹⁰ · 4/5 = −1,28·10⁻⁹ i N/kg. V = −2 · G · 300/5 = −8,0·10⁻⁹ J/kg."),
    M("Con los datos anteriores, ¿qué trabajo realiza el campo al llevar 5 kg desde (4, 3) hasta (0, 3) m?", "En (0, 3): V = −2 · G · 300/3 = −1,33·10⁻⁸ J/kg. W = 5 · (−8,0 + 13,3)·10⁻⁹ = 2,7·10⁻⁸ J."),
    M("Calcula el campo gravitatorio a una profundidad de 1000 km, suponiendo la Tierra homogénea.", "g = 9,8 · 5370/6370 = 8,26 N/kg."),
    M("Un planeta tiene la misma densidad que la Tierra y doble radio. ¿Cuánto vale g en su superficie?", "g = G·(4/3)πρR³/R² ∝ R → g = 2 · 9,8 = 19,6 N/kg."),
    M("La masa de la Luna es 1/81 de la terrestre. ¿En qué punto entre la Tierra y la Luna (d = 3,84 · 10⁸ m) se anula el campo?", "81/x² = 1/(d − x)² → 9(d − x) = x → x = 0,9d = 3,46·10⁸ m del centro de la Tierra."),
    M("Calcula la variación de energía potencial de un cuerpo de 100 kg que sube desde la superficie hasta 1000 km de altura con la expresión general y con m·g·h. Compara.", "General: GMm(1/R − 1/(R + h)) = 3,99·10¹⁴ · 100 · (1,570 − 1,357)·10⁻⁷ = 8,5·10⁸ J. Con mgh: 9,8·10⁸ J. Error del 15 %: h no es pequeña."),
    M("Calcula el flujo gravitatorio a través de una esfera de 10 000 km de radio centrada en la Tierra. ¿Cambia si el radio es 20 000 km?", "Φ = −4πG·M = −4π · 3,99·10¹⁴ = −5,0·10¹⁵ N·m²/kg. No cambia: solo depende de la masa encerrada."),
    M("Demuestra que la intensidad del campo en la superficie de un planeta es g₀ = (4/3)·π·G·ρ·R.", "g₀ = GM/R² con M = ρ · (4/3)πR³ → g₀ = (4/3)πGρR."),
    M("Tres masas iguales de 10 kg están en los vértices de un triángulo equilátero de 1 m de lado. ¿Cuánto vale el campo en el centro?", "Cero, por simetría: tres vectores iguales a 120° se anulan."),
    M("¿Qué energía mínima hay que comunicar a una masa de 1 kg en la superficie terrestre para llevarla al infinito?", "E = −E<sub>p</sub> = G·M·m/R = 6,26·10⁷ J."),
    A("Cuatro masas de 50 kg están en los vértices de un cuadrado de 2 m de lado. Calcula el campo y el potencial en el centro y el trabajo para llevar 1 kg desde el centro hasta el punto medio de un lado.", "Campo en el centro: 0 por simetría. r = √2 m. V<sub>C</sub> = −4 · G · 50/√2 = −9,43·10⁻⁹ J/kg. Punto medio de un lado: dos masas a 1 m y dos a √5 m: V = −G·50(2/1 + 2/√5) = −9,65·10⁻⁹ J/kg. W = 1 · (−9,43 + 9,65)·10⁻⁹ = 2,2·10⁻¹⁰ J."),
    A("Una masa de 400 kg está en (0, 0) y otra de 100 kg en (6, 0) m. Halla el punto donde se anula el campo y calcula el potencial en él.", "400/x² = 100/(6 − x)² → 2(6 − x) = x → x = 4 m. V = −G(400/4 + 100/2) = −150 G = −1,0·10⁻⁸ J/kg."),
    A("Deduce mediante el teorema de Gauss la expresión del campo en el interior de una esfera homogénea de masa M y radio R.", "Superficie esférica de radio r < R: g·4πr² = 4πG·M(r³/R³) → g = GMr/R³ = g₀·r/R."),
    A("Representa gráficamente g(r) y V(r) para un planeta homogéneo desde el centro hasta 4R y comenta las gráficas.", "g crece linealmente de 0 a g₀ en r = R y luego decrece como 1/r². V es negativo, mínimo en el centro (−1,5 GM/R), y crece hacia 0 como −GM/r fuera."),
    A("Un meteorito parte del reposo a gran distancia de la Tierra. ¿Con qué velocidad llega a la superficie si no hay atmósfera?", "½mv² = GMm/R → v = √(2GM/R) = √(2 · 6,26·10⁷) = 1,12·10⁴ m/s."),
    A("En un planeta esférico, a una altura h = R/2 sobre la superficie, g = 4 N/kg. Calcula g₀ y el potencial en la superficie si R = 4000 km.", "g₀ = 4 · (1,5)² = 9 N/kg. V₀ = −g₀R = −9 · 4·10⁶ = −3,6·10⁷ J/kg."),
    A("Explica por qué un geoide no es una esfera y cómo se relaciona con el nivel del mar y las altitudes de los mapas.", "Es la equipotencial que coincide con el nivel medio del mar; se deforma por el achatamiento, la rotación y la distribución irregular de masas. Las altitudes se miden respecto a él."),
    A("(Tipo PAU) Dos masas puntuales m₁ = 5 kg y m₂ = 10 kg están en (0, 0) y (0, 3) m. a) Campo en (4, 0). b) Trabajo del campo para llevar 2 kg de (4, 0) a (4, 3).", "a) g₁ = G·5/16 = 2,08·10⁻¹¹ (hacia −x). g₂ = G·10/25 = 2,67·10⁻¹¹, con dirección (−4, 3)/5: (−2,13; 1,60)·10⁻¹¹. g = (−4,21; 1,60)·10⁻¹¹ N/kg. b) V(4, 0) = −G(5/4 + 10/5) = −2,17·10⁻¹⁰; V(4, 3) = −G(5/5 + 10/4) = −2,33·10⁻¹⁰. W = 2(−2,17 + 2,33)·10⁻¹⁰ = 3,3·10⁻¹¹ J."),
  ],
  quiz: [
    q4("El concepto de campo lo introdujo para el electromagnetismo…", ["Newton", "Faraday", "Kepler", "Galileo"], 1, "Y lo formalizó Maxwell."),
    q4("La intensidad del campo gravitatorio se mide en…", ["J/kg", "N/kg", "N·m", "kg/m³"], 1, "Equivale a m/s²."),
    q4("El potencial gravitatorio es una magnitud…", ["vectorial", "escalar", "adimensional", "siempre positiva"], 1, "Se mide en J/kg."),
    q4("Si la distancia a una masa se duplica, g…", ["se duplica", "se reduce a la mitad", "se reduce a la cuarta parte", "no cambia"], 2, "Inversa del cuadrado."),
    q4("Si la distancia se duplica, el potencial…", ["se reduce a la mitad en valor absoluto", "a la cuarta parte", "se duplica", "no cambia"], 0, "V ∝ 1/r."),
    q4("Las líneas de campo gravitatorio…", ["salen de las masas", "entran en las masas", "son circulares", "se cortan"], 1, "Las masas son sumideros."),
    q4("En el punto medio entre dos masas iguales, el campo es…", ["el doble", "nulo", "máximo", "igual al de una"], 1, "Se anulan por simetría."),
    q4("En el punto medio entre dos masas iguales, el potencial es…", ["nulo", "el doble del de una", "positivo", "infinito"], 1, "Los escalares se suman."),
    q4("El trabajo del campo sobre una superficie equipotencial es…", ["máximo", "nulo", "negativo", "igual a m·g"], 1, "V<sub>A</sub> = V<sub>B</sub>."),
    q4("Las líneas de campo y las superficies equipotenciales son…", ["paralelas", "perpendiculares", "coincidentes", "independientes"], 1, "Siempre se cortan en ángulo recto."),
    q4("Una fuerza es conservativa si su trabajo…", ["es siempre positivo", "no depende del camino", "es nulo siempre", "depende de la velocidad"], 1, "Solo de los extremos."),
    q4("El origen de energía potencial gravitatoria se toma…", ["en la superficie", "en el infinito", "en el centro", "en cualquier punto"], 1, "Por eso es negativa."),
    q4("La relación entre campo y potencial es…", ["g = dV/dr", "g = −dV/dr", "g = V·r", "g = V/r²"], 1, "El campo apunta hacia V decreciente."),
    q4("Dentro de un planeta homogéneo, g…", ["aumenta hacia el centro", "disminuye linealmente hacia el centro", "es constante", "es infinito en el centro"], 1, "g = g₀·r/R."),
    q4("En el centro de la Tierra, g vale…", ["9,8 N/kg", "0", "infinito", "4,9 N/kg"], 1, "Las masas tiran en todas direcciones."),
    q4("El teorema de Gauss dice que el flujo a través de una superficie cerrada depende…", ["de su forma", "de la masa encerrada", "de las masas exteriores", "del radio"], 1, "Φ = −4πG·M<sub>int</sub>."),
    q4("Un campo gravitatorio uniforme tiene líneas…", ["radiales", "paralelas y equidistantes", "circulares", "que se cortan"], 1, "Cerca de la superficie."),
    q4("Si una masa se mueve a potenciales menores, el trabajo del campo es…", ["positivo", "negativo", "nulo", "infinito"], 0, "Movimiento espontáneo."),
    q4("La gravimetría sirve para…", ["medir la temperatura", "detectar variaciones de densidad del subsuelo", "medir el tiempo", "orientarse"], 1, "Midiendo variaciones de g."),
    q4("El geoide es…", ["un satélite", "una superficie equipotencial", "un tipo de roca", "una órbita"], 1, "Nivel medio del mar."),
  ],
  examen: [
    q4("Campo de 6 · 10²⁴ kg a 6,67 · 10⁶ m:", ["9,0 N/kg", "6,0 N/kg", "1,0 N/kg", "60 N/kg"], 0, "G·M/r² = 4,0·10¹⁴/4,45·10¹³."),
    q4("Potencial de 10 kg a 2 m:", ["−3,3·10⁻¹⁰ J/kg", "−1,7·10⁻¹⁰ J/kg", "3,3·10⁻¹⁰ J/kg", "−6,7·10⁻¹⁰ J/kg"], 0, "−G·10/2."),
    q4("Planeta con doble masa y doble radio que la Tierra: g₀ =", ["4,9 N/kg", "9,8 N/kg", "19,6 N/kg", "2,45 N/kg"], 0, "2/4 = 1/2."),
    q4("A una profundidad R/4 (Tierra homogénea), g =", ["7,35 N/kg", "2,45 N/kg", "9,8 N/kg", "5,5 N/kg"], 0, "r = 3R/4."),
    q4("Trabajo para llevar 2 kg de V = −10 J/kg a V = −4 J/kg (trabajo del campo):", ["−12 J", "12 J", "−28 J", "6 J"], 0, "W = m(V<sub>A</sub> − V<sub>B</sub>) = 2(−10 + 4)."),
    q4("Masas 4 kg y 1 kg separadas 3 m: el campo se anula a…", ["2 m de la de 4 kg", "1 m de la de 4 kg", "1,5 m", "no se anula"], 0, "2/x = 1/(3 − x)."),
    q4("Flujo gravitatorio sobre una superficie cerrada sin masa dentro:", ["cero", "−4πGM", "infinito", "depende del radio"], 0, "No hay masa encerrada."),
    q4("Energía potencial de 1 kg en la superficie terrestre:", ["−6,26·10⁷ J", "−9,8 J", "6,26·10⁷ J", "0"], 0, "m·V₀."),
  ],
  feynman: ["Por qué decimos que una masa crea un campo a su alrededor", "Qué diferencia hay entre intensidad de campo y potencial", "Por qué las líneas de campo no se cortan", "Por qué el potencial gravitatorio es negativo", "Por qué un satélite en órbita circular no recibe trabajo", "Cómo se puede «pesar» un planeta"],
  mapa: mapaB("CAMPO GRAVITATORIO", [["Intensidad", "g = −GM/r² uᵣ", "var(--pen)"], ["Superposición", "g = Σ gᵢ ; V = Σ Vᵢ", "var(--leaf)"], ["Potencial", "V = −GM/r ; g = −dV/dr", "var(--red)"], ["Trabajo y energía", "W = −ΔEp = m(VA − VB)", "var(--muted)"]]),
  tarjetas: [
    ["Campo", "Región del espacio donde cada punto tiene asociada una magnitud física."],
    ["Intensidad del campo", "g = F/m = −G·M/r² · u<sub>r</sub> (N/kg)."],
    ["Líneas de campo", "Tangentes a g; entran en las masas; no se cortan."],
    ["Superposición", "g total = suma vectorial de los campos de cada masa."],
    ["Fuerza conservativa", "Su trabajo no depende del camino; W = −ΔE<sub>p</sub>."],
    ["Energía potencial", "E<sub>p</sub> = −G·M·m / r (cero en el infinito)."],
    ["Potencial", "V = E<sub>p</sub>/m = −G·M/r (J/kg), escalar."],
    ["Trabajo del campo", "W<sub>A→B</sub> = m · (V<sub>A</sub> − V<sub>B</sub>)."],
    ["Equipotenciales", "Puntos de igual V; perpendiculares a las líneas de campo."],
    ["Campo y potencial", "g = −dV/dr."],
    ["g en el interior", "g = g₀ · r / R (esfera homogénea)."],
    ["Teorema de Gauss", "Φ = −4π·G·M<sub>int</sub>."],
  ],
  glosario: [
    ["Acción a distancia", "Idea de que un cuerpo actúa sobre otro sin contacto ni intermediario."],
    ["Campo vectorial", "Campo en el que cada punto tiene asociado un vector."],
    ["Campo escalar", "Campo en el que cada punto tiene asociado un número."],
    ["Vector unitario", "Vector de módulo 1 que indica una dirección y un sentido."],
    ["Masa de prueba", "Masa pequeña que se usa para detectar un campo sin modificarlo."],
    ["Línea de campo", "Línea tangente en cada punto al vector campo."],
    ["Sumidero", "Punto al que llegan las líneas de campo, como una masa."],
    ["Campo uniforme", "Campo con el mismo valor y dirección en todos los puntos."],
    ["Fuerza central", "Fuerza dirigida siempre hacia un mismo punto."],
    ["Potencial gravitatorio", "Energía potencial por unidad de masa en un punto."],
    ["Superficie equipotencial", "Conjunto de puntos con el mismo potencial."],
    ["Gradiente", "Variación de una magnitud escalar con la posición, en la dirección de máximo cambio."],
    ["Flujo", "Medida del número de líneas de campo que atraviesan una superficie."],
    ["Gravimetría", "Técnica que mide pequeñas variaciones de g."],
    ["Geoide", "Superficie equipotencial que coincide con el nivel medio del mar."],
  ],
  situacion: {
    titulo: "El mapa de la gravedad de nuestra comarca",
    reto: "Un ayuntamiento quiere saber si bajo una zona de su término hay una cavidad o un depósito de mineral denso antes de construir. Vuestro equipo de geofísicos debe explicar, con cálculos, cómo la gravimetría puede responder sin excavar.",
    pasos: [
      "Calculad cuánto cambia g sobre una esfera de mineral de densidad 2000 kg/m³ mayor que la roca, de 50 m de radio, enterrada a 100 m.",
      "Comparad esa variación con la que produce subir 1 m de altura y discutid la precisión que necesita el gravímetro.",
      "Representad con superposición el campo sobre una línea de puntos en la superficie (perfil gravimétrico).",
      "Investigad cómo la misión GRACE detecta la pérdida de hielo en Groenlandia.",
      "Redactad un informe técnico con las conclusiones y las limitaciones del método.",
    ],
    producto: "Un informe técnico con el perfil gravimétrico dibujado y una exposición de 5 minutos.",
    evaluacion: ["Los cálculos con la ley de gravitación y la superposición son correctos.", "Se interpreta el perfil gravimétrico y su relación con la masa enterrada.", "Se comparan órdenes de magnitud de forma crítica.", "El informe es claro y cita las fuentes."],
  },
  familias: [
    "Buscad en una app de mapas el relieve de vuestra zona y relacionad las curvas de nivel con las superficies equipotenciales.",
    "Comparad vuestro peso en distintos planetas con una calculadora en línea y explicad de qué depende.",
    "Ved juntos imágenes de la misión GRACE sobre la pérdida de hielo en Groenlandia.",
    "Proponed un viaje imaginario al centro de la Tierra: ¿cómo cambiaría vuestro peso al bajar?",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Campo gravitatorio»: determinación, a través del cálculo vectorial, del campo gravitatorio producido por un sistema de masas; efectos sobre las variables cinemáticas y dinámicas de objetos inmersos en el campo; líneas de campo y superficies equipotenciales; energía potencial, potencial gravitatorio y conservación de la energía.`,
    ideas: [
      "Simulación PhET «Fuerza de gravedad» para estudiar la dependencia con masas y distancia.",
      "Construir con una hoja de cálculo el campo de varias masas y representarlo con flechas.",
      "Comparar mapas topográficos con superficies equipotenciales.",
      "Analizar datos reales de GRACE sobre la pérdida de hielo.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Laboratorio de fuerza de gravedad» (PhET)", url: "https://phet.colorado.edu/es/simulations/gravity-force-lab" },
    { t: "NASA: misión GRACE-FO", url: "https://gracefo.jpl.nasa.gov/" },
  ],
  revisado: "2026-11-21",
};
