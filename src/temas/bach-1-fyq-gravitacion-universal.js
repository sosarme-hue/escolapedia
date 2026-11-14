// Física y Química 1º Bachillerato · La gravitación universal (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach1L2");

const keplerSVG = marco("Segunda ley de Kepler: el radio vector barre áreas iguales en tiempos iguales, así que el planeta va más rápido cerca del Sol", `
  <ellipse cx="130" cy="92" rx="110" ry="66" fill="none" stroke="var(--muted)" stroke-width="2"/>
  <circle cx="72" cy="92" r="11" fill="#f59e0b"/>${T(72, 120, "Sol", { fs: 11, b: true })}
  <path d="M72 92 L 36 57 A 110 66 0 0 0 36 127 Z" fill="var(--pen)" opacity=".25" stroke="var(--pen)" stroke-width="1.5"/>
  <path d="M72 92 L 238 80 A 110 66 0 0 1 238 104 Z" fill="var(--leaf)" opacity=".25" stroke="var(--leaf)" stroke-width="1.5"/>
  ${T(14, 172, "perihelio: rápido", { fs: 11, b: true, c: "var(--pen)", a: "start" })}
  ${T(200, 24, "afelio: lento", { fs: 11, b: true, c: "var(--leaf)" })}
  ${T(200, 172, "áreas iguales", { fs: 11, b: true })}`);

const newtonSVG = marco("Ley de gravitación universal: dos masas se atraen con fuerzas iguales y opuestas, proporcionales a las masas e inversamente proporcionales al cuadrado de la distancia", `
  <defs><marker id="gu1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>
  <circle cx="54" cy="84" r="26" fill="var(--pen)" opacity=".85"/>${T(54, 89, "m₁", { fs: 14, b: true, c: "#fff" })}
  <circle cx="206" cy="84" r="16" fill="var(--leaf)" opacity=".9"/>${T(206, 89, "m₂", { fs: 12, b: true, c: "#fff" })}
  <path d="M82 84 H 126" stroke="var(--red)" stroke-width="3.5" marker-end="url(#gu1)"/>
  <path d="M188 84 H 144" stroke="var(--red)" stroke-width="3.5" marker-end="url(#gu1)"/>
  ${T(102, 72, "F₂₁", { fs: 12, b: true, c: "var(--red)" })}${T(166, 72, "F₁₂", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M54 128 H 206" stroke="var(--ink)" stroke-width="1.5"/><path d="M54 122 V 134 M206 122 V 134" stroke="var(--ink)" stroke-width="1.5"/>${T(130, 146, "r", { fs: 13, b: true })}
  ${T(130, 30, "F = G · m₁ · m₂ / r²", { fs: 14, b: true })}`);

module.exports = {
  materia: "Física y Química",
  curso: "1-bachillerato",
  titulo: "La gravitación universal",
  minutos: 105,
  objetivos: [
    "Conocer la evolución de los modelos del universo y las leyes de Kepler",
    "Aplicar la ley de gravitación universal de Newton para calcular fuerzas entre masas",
    "Relacionar el peso con la gravitación y calcular la gravedad en la superficie y en altura",
    "Calcular la velocidad y el periodo de satélites en órbita circular y deducir la tercera ley de Kepler",
    "Usar la energía potencial gravitatoria general y calcular la velocidad de escape",
    "Valorar la importancia de los satélites artificiales y la exploración espacial",
  ],
  claves: ["modelo geocéntrico", "modelo heliocéntrico", "leyes de Kepler", "órbita elíptica", "gravitación universal", "constante G", "experimento de Cavendish", "intensidad del campo gravitatorio", "peso", "satélite", "velocidad orbital", "periodo", "ingravidez", "energía potencial gravitatoria", "velocidad de escape"],
  pregunta: {
    texto: "Si la Luna es atraída por la Tierra, ¿por qué no cae sobre nosotros?",
    respuesta: "<mark>Sí cae, pero nunca llega</mark>. La Luna se mueve a unos 1 km/s en dirección casi perpendicular a la línea que la une a la Tierra. La gravedad curva continuamente su trayectoria hacia nosotros, pero a la vez avanza lo suficiente para que la superficie terrestre «se aleje» lo mismo que ella cae. Estar en órbita es caer sin parar alrededor de un planeta.",
  },
  lectura: {
    titulo: "La manzana y la Luna",
    html: `<p>Cuenta la tradición que en 1666, refugiado en el campo de una epidemia de peste, el joven Isaac Newton vio caer una manzana y se hizo una pregunta revolucionaria: ¿la fuerza que tira de la manzana llegará hasta la Luna? Hasta entonces se pensaba que el cielo y la Tierra obedecían leyes distintas: los cuerpos terrestres caían, mientras que los astros giraban eternamente en esferas perfectas.</p><p>Newton hizo un cálculo genial. La Luna está unas 60 veces más lejos del centro de la Tierra que la manzana. Si la gravedad se debilita con el cuadrado de la distancia, la aceleración de la Luna debería ser 3600 veces menor que 9,8 m/s², es decir, unos 2,7 milímetros por segundo al cuadrado. Y eso es exactamente lo que se obtiene a partir del periodo y del radio de la órbita lunar. La misma fuerza explicaba la caída de la manzana, el movimiento de la Luna, las órbitas de los planetas que Kepler había descrito y las mareas. Fue la primera gran unificación de la física. Tres siglos después, la ley de Newton sigue guiando las sondas que viajan a otros planetas y los satélites que nos dan la posición GPS en el móvil.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Del geocentrismo al heliocentrismo", p: [
      "Durante casi dos mil años dominó el <b>modelo geocéntrico</b> de Aristóteles y Ptolomeo: la Tierra estaba inmóvil en el centro del universo y el Sol, la Luna, los planetas y las estrellas giraban a su alrededor en esferas. Para explicar el movimiento aparente de los planetas, que a veces parecen retroceder en el cielo (movimiento retrógrado), Ptolomeo tuvo que añadir epiciclos: pequeños círculos sobre los círculos principales.",
      "En 1543, Nicolás Copérnico propuso el <mark>modelo heliocéntrico</mark>: el Sol en el centro y la Tierra como un planeta más, que gira sobre sí misma y alrededor del Sol. El movimiento retrógrado se explicaba de forma sencilla porque la Tierra adelanta a los planetas exteriores. Galileo, a partir de 1610, aportó pruebas con el telescopio: las fases de Venus y los satélites de Júpiter, que mostraban que no todo gira alrededor de la Tierra. Su defensa del heliocentrismo le costó un juicio de la Inquisición en 1633. La historia de este cambio es un buen ejemplo de cómo la ciencia avanza contrastando modelos con observaciones.",
    ], svg: compara("Dos modelos del universo", ["Geocéntrico", ["Ptolomeo", "Tierra inmóvil", "en el centro", "epiciclos"]], ["Heliocéntrico", ["Copérnico", "Sol en el centro", "la Tierra gira", "Galileo: pruebas"]], "var(--muted)", "var(--pen)") }),
    bloque({ h: "1.2 Las leyes de Kepler", p: [
      "Johannes Kepler, con las precisas observaciones de Tycho Brahe, descubrió entre 1609 y 1619 tres leyes empíricas del movimiento planetario. <b>Primera ley</b> (de las órbitas): los planetas describen <mark>órbitas elípticas</mark> con el Sol en uno de sus focos. Las elipses de los planetas son casi circulares, pero no del todo: la distancia Tierra-Sol varía entre 147 y 152 millones de km.",
      "<b>Segunda ley</b> (de las áreas): el radio vector que une el Sol con el planeta barre <b>áreas iguales en tiempos iguales</b>. Por tanto, el planeta se mueve más rápido cuando está cerca del Sol (perihelio) y más despacio cuando está lejos (afelio). <b>Tercera ley</b> (de los periodos): el cuadrado del periodo es proporcional al cubo del semieje mayor de la órbita: <b>T² = k · r³</b>, con la misma constante k para todos los planetas del Sistema Solar. Así, conociendo el periodo de un planeta se puede calcular su distancia al Sol. Kepler describió <i>cómo</i> se mueven los planetas; Newton explicaría <i>por qué</i>.",
    ], extra: formula("T² / r³ = constante"), svg: keplerSVG, video: V("grav-a", "Leyes de Kepler", "leyes de Kepler") }),
    bloque({ h: "1.3 La ley de gravitación universal", p: [
      "En 1687, en sus <i>Principia</i>, Newton enunció la <mark>ley de gravitación universal</mark>: dos cuerpos cualesquiera se atraen con una fuerza directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que separa sus centros: <b>F = G · m₁ · m₂ / r²</b>. La fuerza tiene la dirección de la recta que une los cuerpos, es siempre atractiva y, por la tercera ley, cada cuerpo ejerce sobre el otro una fuerza igual y opuesta.",
      "La ley es <b>universal</b>: se aplica a manzanas, personas, planetas y galaxias. Para cuerpos esféricos, como los planetas, la distancia se mide entre los centros, como si toda la masa estuviera concentrada en ellos. La fuerza decrece rápido con la distancia: al duplicar r, la fuerza se reduce a la cuarta parte; al triplicarla, a la novena parte. Con esta ley, Newton dedujo matemáticamente las tres leyes de Kepler, explicó las mareas y predijo el regreso de cometas como el de Halley. Siglos después, las perturbaciones en la órbita de Urano llevaron a predecir y descubrir Neptuno en 1846: un triunfo espectacular de la teoría.",
    ], extra: formula("F = G · m₁ · m₂ / r²"), svg: newtonSVG }),
    bloque({ h: "1.4 La constante G y la balanza de Cavendish", p: [
      "La constante de gravitación universal vale <b>G = 6,67 · 10⁻¹¹ N · m² / kg²</b>. Su valor tan pequeño explica por qué no notamos la atracción entre objetos cotidianos: dos personas de 70 kg a 1 m se atraen con unos 3 · 10⁻⁷ N, el peso de un grano de polvo. La gravedad solo es apreciable cuando al menos una de las masas es enorme, como un planeta. Es la más débil de las interacciones fundamentales, pero domina a gran escala porque es siempre atractiva y no se anula.",
      "Newton no conoció el valor de G. Lo midió por primera vez Henry Cavendish en 1798 con una <mark>balanza de torsión</mark>: dos pequeñas esferas de plomo en los extremos de una varilla colgada de un hilo fino eran atraídas por dos esferas grandes, y el pequeño giro del hilo permitía medir la fuerza. Conociendo G, Cavendish pudo calcular por primera vez la masa de la Tierra (6 · 10²⁴ kg) a partir de g y del radio terrestre; por eso se dice que «pesó la Tierra».",
    ], svg: ficha("La constante de gravitación", "G = 6,67 · 10⁻¹¹ N·m²/kg²", ["Medida por Cavendish (1798)", "balanza de torsión", "permitió «pesar la Tierra»", "gravedad: interacción débil"]) }),
    bloque({ h: "2.1 El peso y la intensidad de la gravedad", p: [
      "El <b>peso</b> de un cuerpo es la fuerza gravitatoria con que lo atrae un planeta. En la superficie de la Tierra, de masa M y radio R: P = G · M · m / R². Como también P = m · g, se deduce que la <mark>intensidad del campo gravitatorio</mark> o aceleración de la gravedad en la superficie es <b>g₀ = G · M / R²</b>. Con M = 5,97 · 10²⁴ kg y R = 6,37 · 10⁶ m se obtiene g₀ = 9,8 m/s². No depende de la masa del cuerpo que cae: por eso todos los cuerpos caen igual en el vacío.",
      "Cada planeta tiene su propia gravedad según su masa y radio: en la Luna, g = 1,6 m/s² (un sexto de la terrestre); en Marte, 3,7 m/s²; en Júpiter, 24,8 m/s². Tu <b>masa</b> es la misma en todos ellos, pero tu peso cambia. Además, g varía ligeramente sobre la Tierra: es mayor en los polos (9,83 m/s²) que en el ecuador (9,78 m/s²), porque la Tierra está achatada y gira, y disminuye en lo alto de las montañas.",
    ], extra: formula("g₀ = G · M / R²"), svg: barras("Gravedad en la superficie de algunos astros", "g (m/s²)", [["Júpiter", 24.8, "#b45309", "24,8"], ["Tierra", 9.8, "var(--pen)", "9,8"], ["Venus", 8.9, "var(--leaf)", "8,9"], ["Marte", 3.7, "var(--red)", "3,7"], ["Luna", 1.6, "var(--muted)", "1,6"]]) }),
    bloque({ h: "2.2 Variación de g con la altura", p: [
      "A una altura h sobre la superficie, la distancia al centro de la Tierra es r = R + h y la gravedad vale <b>g = G · M / (R + h)²</b>. Dividiendo entre g₀ se obtiene una expresión práctica: <mark>g = g₀ · R² / (R + h)²</mark>. Para alturas pequeñas comparadas con el radio terrestre (6370 km), la variación es mínima: en la cima del Everest (8,8 km), g solo disminuye un 0,3 %. Por eso en los problemas de la superficie se toma g constante.",
      "A la altura de la Estación Espacial Internacional (unos 400 km), g todavía vale 8,7 m/s², casi el 90 % del valor en la superficie. Los astronautas no flotan porque allí no haya gravedad, sino porque están en <b>caída libre</b> continua junto con la estación: es la <b>ingravidez aparente</b>. A una distancia igual a dos radios terrestres desde el centro (h = R), g es la cuarta parte: 2,45 m/s². A la distancia de la Luna (60 R), 2,7 · 10⁻³ m/s², el valor que calculó Newton.",
    ], extra: formula("g = g₀ · R² / (R + h)²"), svg: graf("La gravedad disminuye con el cuadrado de la distancia al centro de la Tierra", "r", "g", [{ p: [[0.1, 0.95], [0.2, 0.42], [0.3, 0.24], [0.4, 0.15], [0.55, 0.08], [0.7, 0.05], [1, 0.02]], c: "var(--pen)", t: "g = GM/r²" }], `<text x="80" y="40" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">superficie: g₀</text>`) }),
    bloque({ h: "2.3 Satélites en órbita circular", p: [
      "Un satélite en órbita circular de radio r alrededor de un planeta de masa M está sometido solo a la fuerza gravitatoria, que actúa como <b>fuerza centrípeta</b>: G · M · m / r² = m · v² / r. Despejando, la <mark>velocidad orbital</mark> es <b>v = √(G · M / r)</b>. No depende de la masa del satélite: una herramienta que se le escapa a un astronauta sigue en la misma órbita. Cuanto más lejos está el satélite, más despacio se mueve: la EEI va a 7,7 km/s y la Luna, a 1 km/s.",
      "El <b>periodo</b> es el tiempo de una vuelta: T = 2π · r / v. Sustituyendo v y elevando al cuadrado se obtiene T² = (4π² / G·M) · r³, que es justamente la <b>tercera ley de Kepler</b> deducida a partir de la ley de Newton. La constante depende solo de la masa del astro central, lo que permite calcular la masa de un planeta midiendo el periodo y el radio de la órbita de uno de sus satélites. Así se ha medido la masa de Júpiter, de Marte e incluso la de agujeros negros en el centro de la galaxia.",
    ], extra: formula("v = √(G·M / r) ; T² = (4π² / G·M) · r³"), svg: pasos("Cómo calcular la órbita de un satélite", ["F gravitatoria = F centrípeta", "GMm/r² = mv²/r", "v = √(GM/r)", "T = 2πr/v"], "var(--pen)") }),
    bloque({ h: "2.4 Tipos de órbitas y satélites artificiales", p: [
      "Desde el lanzamiento del Sputnik en 1957, miles de satélites artificiales orbitan la Tierra. Según su altura, se distinguen las órbitas <b>bajas</b> (LEO, de 200 a 2000 km), donde están la EEI, los satélites de observación y las constelaciones de internet, con periodos de unos 90 minutos; las órbitas <b>medias</b> (MEO, unos 20.000 km), donde están los sistemas de navegación como GPS y Galileo, con periodos de unas 12 horas; y la órbita <mark>geoestacionaria</mark> (GEO), a 35.786 km de altura sobre el ecuador.",
      "Un satélite geoestacionario tiene un periodo de 24 horas (exactamente un día sidéreo, 23 h 56 min) y gira en el mismo sentido que la Tierra, de modo que permanece siempre sobre el mismo punto del ecuador. Por eso las antenas de televisión por satélite pueden quedarse fijas apuntando hacia él. También se usan para meteorología (Meteosat). Los satélites han transformado la vida diaria: comunicaciones, navegación, predicción del tiempo, vigilancia del clima y de incendios. Pero generan un problema creciente: la <b>basura espacial</b>, decenas de miles de fragmentos que amenazan a los satélites activos.",
    ], svg: rejilla("Tipos de órbitas terrestres", ["Órbita", "Altura", "Periodo"], [["Baja (EEI)", "400 km", "92 min"], ["Media (GPS)", "20.200 km", "12 h"], ["Geoestacionaria", "35.786 km", "24 h"]], "var(--pen)") }),
    bloque({ h: "3.1 Energía potencial gravitatoria general", p: [
      "La expresión Ep = m·g·h solo sirve cerca de la superficie, donde g es constante. Para grandes distancias hay que usar la expresión general de la <mark>energía potencial gravitatoria</mark>: <b>Ep = −G · M · m / r</b>, donde r es la distancia al centro del planeta. El cero de energía potencial se toma en el infinito, donde los cuerpos ya no interaccionan. Por eso la energía potencial gravitatoria es siempre <b>negativa</b>: hay que aportar energía para separar dos masas hasta el infinito.",
      "Al alejarse del planeta (r aumenta), Ep se hace menos negativa, es decir, aumenta, igual que al subir en la superficie. De hecho, para una altura h pequeña, la diferencia de energía potencial entre r = R + h y r = R coincide con m·g·h. La fuerza gravitatoria es conservativa, así que la energía mecánica de un satélite o de un cohete sin motor se conserva: Em = ½ m v² − G·M·m / r = constante. Para un satélite en órbita circular, sustituyendo v² = GM/r, se obtiene Em = −G·M·m / (2r): negativa, lo que indica que el satélite está ligado al planeta.",
    ], extra: formula("E<sub>p</sub> = −G · M · m / r"), svg: graf("La energía potencial gravitatoria es negativa y tiende a cero en el infinito", "r", "Ep", [{ p: [[0.1, 0.05], [0.2, 0.5], [0.3, 0.65], [0.45, 0.76], [0.6, 0.82], [0.8, 0.86], [1, 0.89]], c: "var(--pen)", t: "" }, { p: [[0, 0.95], [1, 0.95]], c: "var(--muted)", t: "", dash: true }], `<text x="140" y="22" font-size="11" fill="var(--muted)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">Ep = 0 (infinito)</text><text x="150" y="110" font-size="12" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">Ep = −GMm/r</text>`) }),
    bloque({ h: "3.2 La velocidad de escape", p: [
      "Si lanzas una piedra hacia arriba, vuelve a caer. ¿Con qué velocidad habría que lanzarla para que no volviera nunca? La <mark>velocidad de escape</mark> es la velocidad mínima que debe tener un cuerpo en la superficie de un planeta para escapar de su atracción y llegar al infinito con velocidad nula. Aplicando la conservación de la energía: ½ m v² − G·M·m / R = 0, de donde <b>v<sub>e</sub> = √(2 · G · M / R)</b>.",
      "Para la Tierra, v<sub>e</sub> = 11,2 km/s (unos 40.000 km/h); para la Luna, solo 2,4 km/s, y por eso la Luna no tiene atmósfera: las moléculas de gas se mueven lo bastante rápido como para escapar. En Júpiter es de 60 km/s. Si un astro fuera tan denso que su velocidad de escape superara la de la luz (300.000 km/s), ni la luz podría escapar: sería un <b>agujero negro</b>. La velocidad de escape es √2 veces la velocidad orbital rasante. En la práctica, los cohetes no salen disparados a esa velocidad: aceleran gradualmente con sus motores durante varios minutos.",
    ], extra: formula("v<sub>e</sub> = √(2 · G · M / R)"), svg: barras("Velocidad de escape de algunos astros", "v escape (km/s)", [["Júpiter", 60, "#b45309", "60"], ["Tierra", 11.2, "var(--pen)", "11,2"], ["Marte", 5, "var(--red)", "5,0"], ["Luna", 2.4, "var(--muted)", "2,4"]]), video: V("grav-c", "Velocidad de escape", "velocidad de escape") }),
    bloque({ h: "3.3 Las mareas y la exploración espacial", p: [
      "Las <b>mareas</b> se deben a que la atracción de la Luna (y, en menor medida, la del Sol) no es igual en todos los puntos de la Tierra: es mayor en la cara que mira a la Luna y menor en la opuesta. Esta diferencia estira los océanos y forma dos abultamientos, uno a cada lado, de modo que en la mayoría de las costas hay dos pleamares y dos bajamares al día. Cuando el Sol y la Luna están alineados (luna nueva y llena), las mareas son mayores: son las <mark>mareas vivas</mark>.",
      "La gravitación es también la herramienta de la <b>exploración espacial</b>. Las sondas aprovechan la «asistencia gravitatoria»: al pasar cerca de un planeta ganan velocidad sin gastar combustible, como hicieron las Voyager para llegar a los planetas exteriores. La gravedad permitió descubrir Neptuno, y hoy permite detectar planetas en otras estrellas por el bamboleo que producen. A escalas muy grandes o con campos muy intensos, la teoría de Newton se completa con la <b>relatividad general</b> de Einstein (1915), necesaria por ejemplo para que el GPS no acumule errores de varios kilómetros al día.",
    ], svg: pasos("Hitos de la gravitación", ["1543 Copérnico", "1609-1619 Kepler", "1687 Newton", "1798 Cavendish mide G", "1915 Einstein"], "var(--leaf)") }),
  ],
  figura: figura("La gravitación universal", "De las leyes de Kepler a los satélites y la velocidad de escape", [["Kepler", "órbitas elípticas", "T² ∝ r³"], ["Newton", "F = GMm/r²", "G = 6,67·10⁻¹¹"], ["Satélites", "v = √(GM/r)", "GEO: 24 h"], ["Escape", "ve = √(2GM/R)", "Tierra: 11,2 km/s"]]),
  video: V("grav-b", "Satélites y órbitas", "gravitación universal Newton"),
  ejemplos: [
    { enunciado: "Calcula la fuerza de atracción entre la Tierra (5,97 · 10²⁴ kg) y la Luna (7,35 · 10²² kg) separadas 3,84 · 10⁸ m.", pasos: ["F = G·M·m / r².", "F = 6,67·10⁻¹¹ · 5,97·10²⁴ · 7,35·10²² / (3,84·10⁸)².", "F = 2,93·10³⁷ / 1,47·10¹⁷."], resultado: "F ≈ 1,98 · 10²⁰ N." },
    { enunciado: "Calcula la gravedad en la superficie de Marte (M = 6,42 · 10²³ kg; R = 3,39 · 10⁶ m) y el peso allí de una persona de 70 kg.", pasos: ["g = G·M / R² = 6,67·10⁻¹¹ · 6,42·10²³ / (3,39·10⁶)².", "g = 4,28·10¹³ / 1,15·10¹³ = 3,73 m/s².", "P = 70 · 3,73 = 261 N."], resultado: "g ≈ 3,7 m/s²; P ≈ 261 N (frente a 686 N en la Tierra)." },
    { enunciado: "¿A qué altura sobre la superficie terrestre g vale la mitad que en la superficie? (R = 6370 km)", pasos: ["g₀/2 = g₀ · R² / (R + h)².", "(R + h)² = 2R² → R + h = √2 · R.", "h = 0,414 · 6370 = 2640 km."], resultado: "h ≈ 2640 km." },
    { enunciado: "Calcula la velocidad y el periodo de la EEI, que orbita a 400 km de altura. (G·M = 3,99 · 10¹⁴ m³/s²; R = 6370 km)", pasos: ["r = 6,77 · 10⁶ m.", "v = √(3,99·10¹⁴ / 6,77·10⁶) = 7680 m/s.", "T = 2π · 6,77·10⁶ / 7680 = 5540 s."], resultado: "v ≈ 7,7 km/s; T ≈ 92 min." },
    { enunciado: "Calcula el radio de la órbita geoestacionaria (T = 86.164 s; G·M = 3,99 · 10¹⁴ m³/s²).", pasos: ["r³ = G·M·T² / 4π².", "r³ = 3,99·10¹⁴ · 7,42·10⁹ / 39,5 = 7,50·10²².", "r = 4,22 · 10⁷ m → h = 42.200 − 6370 km."], resultado: "r ≈ 42.200 km; h ≈ 35.800 km." },
    { enunciado: "Calcula la velocidad de escape de la Luna (M = 7,35 · 10²² kg; R = 1,74 · 10⁶ m).", pasos: ["v<sub>e</sub> = √(2·G·M / R).", "v<sub>e</sub> = √(2 · 6,67·10⁻¹¹ · 7,35·10²² / 1,74·10⁶).", "v<sub>e</sub> = √(5,63·10⁶)."], resultado: "v<sub>e</sub> ≈ 2,4 km/s." },
  ],
  errores: [
    "Medir la distancia desde la superficie en vez de desde el centro del planeta.",
    "Olvidar elevar la distancia al cuadrado en la ley de gravitación.",
    "Creer que en la EEI no hay gravedad: hay casi el 90 %; los astronautas están en caída libre.",
    "Pensar que la velocidad orbital depende de la masa del satélite.",
    "Usar m·g·h para alturas comparables al radio terrestre.",
    "Confundir masa (constante) y peso (depende del astro y de la altura).",
  ],
  ejercicios: [
    B("Enuncia las tres leyes de Kepler.", "Órbitas elípticas con el Sol en un foco; áreas iguales en tiempos iguales; T² proporcional a r³."),
    B("¿Dónde se mueve más rápido un planeta: en el perihelio o en el afelio? ¿Por qué?", "En el perihelio, por la segunda ley de Kepler (áreas iguales en tiempos iguales)."),
    B("¿Qué pruebas aportó Galileo a favor del heliocentrismo?", "Las fases de Venus y los satélites de Júpiter."),
    B("Calcula la fuerza entre dos masas de 100 kg separadas 2 m.", "F = 6,67·10⁻¹¹ · 10⁴ / 4 = 1,67 · 10⁻⁷ N."),
    B("Si se duplica la distancia entre dos masas, ¿cómo cambia la fuerza? ¿Y si se triplica?", "Se reduce a la cuarta parte; a la novena parte."),
    B("Si se duplica una de las masas, ¿cómo cambia la fuerza?", "Se duplica."),
    B("¿Por qué no notamos la atracción gravitatoria entre dos personas?", "Porque G es muy pequeña y las masas también: la fuerza es del orden de 10⁻⁷ N."),
    B("Una persona de 60 kg, ¿cuánto pesa en la Tierra y en la Luna (g = 1,6 m/s²)? ¿Cambia su masa?", "588 N y 96 N. La masa sigue siendo 60 kg."),
    B("¿Qué es un satélite geoestacionario y para qué sirve?", "El que tiene un periodo de 24 h sobre el ecuador y está siempre sobre el mismo punto; telecomunicaciones y meteorología."),
    B("¿Por qué los astronautas de la EEI flotan?", "Porque la estación y ellos están en caída libre continua alrededor de la Tierra (ingravidez aparente)."),
    B("¿Por qué la Luna no tiene atmósfera?", "Porque su velocidad de escape (2,4 km/s) es pequeña y los gases escapan."),
    B("¿Qué midió Cavendish y por qué se dice que «pesó la Tierra»?", "Midió G; con ella calculó la masa de la Tierra a partir de g y R."),
    M("Calcula la masa de la Tierra sabiendo que g₀ = 9,8 m/s² y R = 6370 km.", "M = g₀R²/G = 9,8 · 4,06·10¹³ / 6,67·10⁻¹¹ = 5,96 · 10²⁴ kg."),
    M("Calcula la gravedad a 1000 km de altura sobre la Tierra.", "g = 9,8 · 6370² / 7370² = 7,32 m/s²."),
    M("Un planeta tiene el doble de masa y el doble de radio que la Tierra. ¿Cuánto vale su gravedad?", "g = G·2M / (2R)² = g₀/2 = 4,9 m/s²."),
    M("¿Dónde, entre la Tierra y la Luna, se anula la fuerza gravitatoria total sobre una nave? (M<sub>T</sub> = 81 M<sub>L</sub>; d = 384.000 km)", "81/x² = 1/(d − x)² → 9(d − x) = x → x = 0,9d = 345.600 km de la Tierra."),
    M("Calcula la velocidad orbital de un satélite a 2000 km de altura.", "r = 8,37·10⁶ m. v = √(3,99·10¹⁴ / 8,37·10⁶) = 6900 m/s."),
    M("Calcula el periodo de la Luna (r = 3,84 · 10⁸ m) a partir de G·M de la Tierra.", "T = 2π√(r³/GM) = 2π√(5,66·10²⁵ / 3,99·10¹⁴) = 2,37·10⁶ s ≈ 27,4 días."),
    M("Marte tarda 1,88 años en dar una vuelta al Sol. Usa la tercera ley de Kepler para calcular su distancia al Sol en unidades astronómicas.", "r³ = T² → r = 1,88^(2/3) = 1,52 UA."),
    M("Ío gira alrededor de Júpiter en 1,77 días con r = 4,22 · 10⁸ m. Calcula la masa de Júpiter.", "M = 4π²r³/(GT²) = 39,5 · 7,52·10²⁵ / (6,67·10⁻¹¹ · 2,34·10¹⁰) = 1,9 · 10²⁷ kg."),
    M("Un satélite meteorológico da 14 vueltas a la Tierra al día. Calcula el radio de su órbita y su altura.", "T = 6171 s. r = ∛(GM·T²/4π²) = ∛(3,99·10¹⁴ · 3,81·10⁷ / 39,5) = 7,27·10⁶ m; h ≈ 900 km."),
    M("Calcula la velocidad de escape de la Tierra.", "v<sub>e</sub> = √(2 · 3,99·10¹⁴ / 6,37·10⁶) = 11.200 m/s."),
    M("Calcula la energía potencial gravitatoria de un satélite de 1000 kg en la superficie y a 400 km de altura. ¿Cuánto aumenta?", "Ep₀ = −6,26·10¹⁰ J; Ep = −5,89·10¹⁰ J; aumenta 3,7·10⁹ J."),
    A("¿Qué energía hay que darle a un satélite de 500 kg en la superficie para ponerlo en órbita circular a 600 km de altura? (desprecia la rotación terrestre)", "Em en órbita = −GMm/2r = −3,99·10¹⁴ · 500 / (2 · 6,97·10⁶) = −1,43·10¹⁰ J. Ep superficie = −3,13·10¹⁰ J. Energía: 1,70·10¹⁰ J."),
    A("Demuestra la tercera ley de Kepler para órbitas circulares a partir de la ley de Newton.", "GMm/r² = m(2π/T)²r → T² = (4π²/GM) · r³; la constante solo depende de M."),
    A("¿Qué densidad media tiene la Tierra? Compárala con la de las rocas de la superficie (2700 kg/m³) y saca conclusiones.", "ρ = 5,97·10²⁴ / (4/3 π 6,37·10⁶³) = 5500 kg/m³. El interior es mucho más denso: núcleo metálico."),
    A("Una estrella de neutrones tiene 1,4 masas solares (2,8 · 10³⁰ kg) y un radio de 12 km. Calcula su gravedad superficial y su velocidad de escape en fracción de c.", "g = 6,67·10⁻¹¹ · 2,8·10³⁰ / 1,44·10⁸ = 1,3·10¹² m/s². v<sub>e</sub> = √(2 · 1,87·10²⁰ / 1,2·10⁴) = 1,76·10⁸ m/s ≈ 0,59 c."),
    A("Calcula el radio que tendría que tener la Tierra, sin cambiar su masa, para ser un agujero negro (v<sub>e</sub> = c).", "R = 2GM/c² = 2 · 3,99·10¹⁴ / 9·10¹⁶ = 8,9 · 10⁻³ m ≈ 9 mm."),
    A("Comprueba el cálculo de Newton: compara la aceleración centrípeta de la Luna (r = 3,84 · 10⁸ m, T = 27,3 días) con g₀/60².", "a = 4π²r/T² = 39,5 · 3,84·10⁸ / (2,36·10⁶)² = 2,72·10⁻³ m/s². g₀/3600 = 2,72·10⁻³ m/s². Coinciden."),
    A("Un satélite pasa de una órbita de radio r a otra de radio 2r. ¿Cómo cambian su velocidad, su periodo y su energía mecánica?", "v se divide por √2; T se multiplica por 2√2 ≈ 2,83; Em = −GMm/2r se reduce a la mitad en valor absoluto (aumenta)."),
  ],
  quiz: [
    q4("El modelo geocéntrico sitúa en el centro…", ["el Sol", "la Tierra", "la Luna", "Júpiter"], 1, "Aristóteles y Ptolomeo."),
    q4("Propuso el modelo heliocéntrico en 1543:", ["Kepler", "Copérnico", "Newton", "Ptolomeo"], 1, "De revolutionibus."),
    q4("Según Kepler, las órbitas planetarias son…", ["círculos perfectos", "elipses con el Sol en un foco", "espirales", "rectas"], 1, "Primera ley."),
    q4("Un planeta va más rápido en…", ["el afelio", "el perihelio", "siempre igual", "depende"], 1, "Segunda ley."),
    q4("La tercera ley de Kepler relaciona…", ["T y r³", "T² y r³", "T y r", "v y r"], 1, "T²/r³ constante."),
    q4("En F = Gm₁m₂/r², r es…", ["la distancia entre superficies", "la distancia entre centros", "el radio del planeta", "la altura"], 1, "Entre centros."),
    q4("Si r se triplica, F…", ["se triplica", "se divide entre 3", "se divide entre 9", "no cambia"], 2, "Inversa del cuadrado."),
    q4("G vale…", ["9,8 N/kg", "6,67·10⁻¹¹ N·m²/kg²", "3·10⁸ m/s", "1,6·10⁻¹⁹ C"], 1, "Constante universal."),
    q4("Midió G por primera vez:", ["Newton", "Cavendish", "Galileo", "Einstein"], 1, "Balanza de torsión, 1798."),
    q4("g₀ en la superficie terrestre es…", ["GM/R", "GM/R²", "GMm/R²", "GM²/R"], 1, "Intensidad del campo."),
    q4("En la Luna, tu masa…", ["es 1/6", "es la misma", "es 6 veces mayor", "es cero"], 1, "Cambia el peso."),
    q4("A una altura h = R, g vale…", ["g₀/2", "g₀/4", "g₀", "0"], 1, "Distancia doble."),
    q4("En la EEI, los astronautas flotan porque…", ["no hay gravedad", "están en caída libre", "hay aire", "el Sol les atrae"], 1, "Ingravidez aparente."),
    q4("La velocidad orbital depende de…", ["la masa del satélite", "la masa del planeta y el radio", "la forma del satélite", "nada"], 1, "√(GM/r)."),
    q4("Cuanto más lejos está un satélite, su velocidad…", ["aumenta", "disminuye", "no cambia", "es infinita"], 1, "v = √(GM/r)."),
    q4("El periodo de un satélite geoestacionario es…", ["12 h", "24 h", "90 min", "27 días"], 1, "Igual a la rotación terrestre."),
    q4("La energía potencial gravitatoria general es…", ["mgh", "−GMm/r", "GMm/r²", "½mv²"], 1, "Cero en el infinito."),
    q4("La velocidad de escape de la Tierra es unos…", ["7,9 km/s", "11,2 km/s", "300.000 km/s", "1 km/s"], 1, "√(2GM/R)."),
    q4("La velocidad de escape depende de…", ["la masa del objeto lanzado", "la masa y el radio del planeta", "la dirección de lanzamiento", "el color"], 1, "No depende de m."),
    q4("Las mareas vivas se producen cuando…", ["la Luna está en cuarto", "Sol y Luna están alineados", "es invierno", "hay viento"], 1, "Luna nueva y llena."),
  ],
  examen: [
    q4("F entre 1000 kg y 1000 kg a 1 m:", ["6,67·10⁻⁵ N", "6,67·10⁻¹¹ N", "6,67 N", "10⁶ N"], 0, "G·10⁶."),
    q4("Planeta de igual radio y doble masa que la Tierra: g =", ["4,9", "9,8", "19,6", "39,2 m/s²"], 2, "Proporcional a M."),
    q4("Planeta de igual masa y doble radio: g =", ["2,45", "4,9", "9,8", "19,6 m/s²"], 0, "Inversa de R²."),
    q4("Si r de la órbita se cuadruplica, la velocidad orbital…", ["se cuadruplica", "se duplica", "se reduce a la mitad", "no cambia"], 2, "√(1/4)."),
    q4("Si r se cuadruplica, el periodo…", ["×4", "×8", "×16", "×2"], 1, "T ∝ r^(3/2)."),
    q4("Un astronauta de 80 kg en un planeta con g = 5 m/s² pesa:", ["80 N", "400 N", "784 N", "16 N"], 1, "m·g."),
    q4("La velocidad de escape es, respecto a la orbital rasante,", ["igual", "√2 veces", "el doble", "la mitad"], 1, "√(2GM/R) / √(GM/R)."),
    q4("La energía mecánica de un satélite en órbita circular es…", ["positiva", "negativa", "cero", "infinita"], 1, "−GMm/2r: está ligado."),
  ],
  feynman: ["Por qué la Luna cae sin llegar a caer", "Qué dice cada ley de Kepler", "Por qué la gravedad entre personas no se nota", "Por qué flotan los astronautas", "Por qué un satélite geoestacionario no se mueve en el cielo", "Qué es la velocidad de escape"],
  mapa: mapaB("GRAVITACIÓN UNIVERSAL", [["Modelos y Kepler", "elipses ; T² ∝ r³", "var(--muted)"], ["Ley de Newton", "F = GMm/r²", "var(--pen)"], ["Gravedad y satélites", "g = GM/r² ; v = √(GM/r)", "var(--leaf)"], ["Energía", "Ep = −GMm/r ; ve", "var(--red)"]]),
  tarjetas: [
    ["Primera ley de Kepler", "Órbitas elípticas con el Sol en un foco."],
    ["Segunda ley de Kepler", "El radio vector barre áreas iguales en tiempos iguales."],
    ["Tercera ley de Kepler", "T² / r³ = constante."],
    ["Ley de gravitación", "F = G · m₁ · m₂ / r²."],
    ["G", "6,67 · 10⁻¹¹ N·m²/kg² (Cavendish, 1798)."],
    ["Gravedad en la superficie", "g₀ = G·M / R²."],
    ["Gravedad en altura", "g = g₀ · R² / (R + h)²."],
    ["Velocidad orbital", "v = √(G·M / r)."],
    ["Periodo orbital", "T = 2πr / v ; T² = 4π²r³ / GM."],
    ["Órbita geoestacionaria", "T = 24 h, h ≈ 35.800 km sobre el ecuador."],
    ["Ep gravitatoria", "−G·M·m / r (cero en el infinito)."],
    ["Velocidad de escape", "v<sub>e</sub> = √(2·G·M / R); Tierra: 11,2 km/s."],
  ],
  glosario: [
    ["Geocentrismo", "Modelo que sitúa la Tierra inmóvil en el centro del universo."],
    ["Heliocentrismo", "Modelo que sitúa el Sol en el centro y la Tierra girando a su alrededor."],
    ["Epiciclo", "Círculo menor añadido por Ptolomeo para explicar el movimiento retrógrado."],
    ["Perihelio", "Punto de la órbita más cercano al Sol."],
    ["Afelio", "Punto de la órbita más lejano al Sol."],
    ["Unidad astronómica", "Distancia media Tierra-Sol: unos 150 millones de km."],
    ["Balanza de torsión", "Instrumento que mide fuerzas muy pequeñas por el giro de un hilo."],
    ["Intensidad del campo gravitatorio", "Fuerza gravitatoria por unidad de masa; coincide con g."],
    ["Ingravidez aparente", "Sensación de flotar en caída libre."],
    ["Satélite geoestacionario", "Satélite que permanece sobre el mismo punto del ecuador."],
    ["Velocidad de escape", "Velocidad mínima para escapar de la atracción de un astro."],
    ["Asistencia gravitatoria", "Aceleración de una sonda al pasar cerca de un planeta."],
    ["Basura espacial", "Restos artificiales en órbita sin utilidad."],
    ["Agujero negro", "Astro cuya velocidad de escape supera la de la luz."],
  ],
  situacion: {
    titulo: "Diseñamos una misión espacial",
    reto: "Una agencia espacial convoca un concurso escolar para proponer una misión: un satélite de observación de incendios forestales o una sonda que aterrice en Marte. Vuestro equipo debe justificar con cálculos la órbita y la energía necesarias.",
    pasos: [
      "Elegid la misión y la órbita adecuada (baja, media, geoestacionaria o viaje interplanetario) justificando por qué.",
      "Calculad la velocidad orbital, el periodo y cuántas vueltas al día dará el satélite.",
      "Calculad la energía necesaria para poner en órbita un satélite de 1000 kg y comparadla con la de la gasolina (46 MJ/kg).",
      "Si vais a Marte, calculad la gravedad y la velocidad de escape allí y el peso del róver.",
      "Investigad cómo se evita la basura espacial al final de la misión.",
    ],
    producto: "Una presentación de la misión con un póster técnico que incluya todos los cálculos.",
    evaluacion: ["La elección de órbita está justificada físicamente.", "Los cálculos de velocidad, periodo y energía son correctos.", "Se usan correctamente la gravedad y la velocidad de escape de otro astro.", "Se consideran el impacto y la sostenibilidad del espacio."],
  },
  familias: [
    "Observad la Luna durante varias noches y anotad su fase y la hora a la que sale.",
    "Buscad en una app de satélites cuándo pasa la Estación Espacial Internacional y observadla.",
    "Mirad hacia dónde apuntan las antenas parabólicas del barrio: todas al mismo punto del cielo.",
    "Consultad la tabla de mareas de una playa y relacionadla con las fases de la Luna.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Interacción»: evolución de los modelos del universo, leyes de Kepler, ley de gravitación universal, peso y variación de g, movimiento de satélites y planetas, energía potencial gravitatoria general y velocidad de escape, aplicaciones de los satélites artificiales.`,
    ideas: [
      "Simulación PhET «Gravedad y órbitas» para estudiar cómo cambia la órbita con la velocidad.",
      "Cálculo de la masa de Júpiter con los periodos de sus lunas observadas con prismáticos o telescopio.",
      "Debate histórico sobre el juicio a Galileo y la relación entre ciencia y sociedad.",
      "Seguimiento en tiempo real de la EEI y cálculo de su velocidad.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Simulación «Gravedad y órbitas» (PhET)", url: "https://phet.colorado.edu/es/simulations/gravity-and-orbits" },
    { t: "Agencia Espacial Europea (ESA): satélites y órbitas", url: "https://www.esa.int/Space_in_Member_States/Spain" },
  ],
  revisado: "2026-11-14",
};
