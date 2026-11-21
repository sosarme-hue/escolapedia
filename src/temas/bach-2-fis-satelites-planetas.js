// Física 2º Bachillerato · Movimiento de satélites y planetas (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;

// Momento angular: r, p y L perpendicular al plano.
const momentoSVG = marco("Momento angular de un planeta: L = r × m·v es perpendicular al plano de la órbita y se conserva porque la fuerza es central", `
  ${flechaDef("ml1", "var(--pen)")}${flechaDef("ml2", "var(--red)")}${flechaDef("ml3", "var(--leaf)")}
  <ellipse cx="130" cy="112" rx="104" ry="44" fill="none" stroke="var(--muted)" stroke-width="2"/>
  <circle cx="100" cy="112" r="11" fill="#f59e0b"/>${T(100, 140, "Sol", { fs: 11, b: true })}
  <path d="M100 112 L 206 88" stroke="var(--pen)" stroke-width="3" marker-end="url(#ml1)"/>${T(156, 90, "r", { fs: 13, b: true, c: "var(--pen)" })}
  <circle cx="212" cy="86" r="7" fill="var(--pen)"/>
  <path d="M212 86 L 244 120" stroke="var(--red)" stroke-width="3" marker-end="url(#ml2)"/>${T(246, 140, "m·v", { fs: 12, b: true, c: "var(--red)", a: "end" })}
  <path d="M100 112 L 100 30" stroke="var(--leaf)" stroke-width="3.5" marker-end="url(#ml3)"/>${T(110, 34, "L = r × mv", { fs: 13, b: true, c: "var(--leaf)", a: "start" })}`);

// Energías de un satélite frente al radio.
const energiaSVG = graf("Energías de un satélite en órbita circular: Ec = GMm/2r, Ep = −GMm/r y Em = −GMm/2r", "r", "E", [
  { p: [[0.15, 0.95], [0.25, 0.82], [0.4, 0.73], [0.6, 0.68], [1, 0.64]], c: "var(--leaf)", t: "Ec" },
  { p: [[0.15, 0.05], [0.25, 0.3], [0.4, 0.42], [0.6, 0.5], [1, 0.56]], c: "var(--red)", t: "Ep" },
  { p: [[0.15, 0.33], [0.25, 0.45], [0.4, 0.51], [0.6, 0.55], [1, 0.58]], c: "var(--pen)", t: "" },
  { p: [[0, 0.6], [1, 0.6]], c: "var(--muted)", t: "", dash: true },
], `<text x="70" y="98" font-size="11" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">Em</text><text x="244" y="72" text-anchor="end" font-size="10" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">E = 0</text>`);

// Trayectorias según la energía mecánica.
const trayectoriasSVG = marco("Tipo de trayectoria según la energía mecánica: elipse o circunferencia si es negativa, parábola si es cero e hipérbola si es positiva", `
  <circle cx="70" cy="90" r="12" fill="var(--pen)"/>${T(70, 94, "M", { fs: 11, b: true, c: "#fff" })}
  <circle cx="70" cy="90" r="34" fill="none" stroke="var(--leaf)" stroke-width="2.2"/>
  <ellipse cx="100" cy="90" rx="64" ry="44" fill="none" stroke="var(--pen)" stroke-width="2.2"/>
  <path d="M70 46 Q 210 46 250 10" fill="none" stroke="#b45309" stroke-width="2.2"/>
  <path d="M70 134 Q 210 134 250 170" fill="none" stroke="#b45309" stroke-width="2.2"/>
  <path d="M70 40 L 250 22" fill="none" stroke="var(--red)" stroke-width="2.2" stroke-dasharray="6 4"/>
  ${T(178, 84, "Em < 0: elipse", { fs: 11, b: true, c: "var(--pen)", a: "start" })}
  ${T(178, 100, "circunferencia", { fs: 11, b: true, c: "var(--leaf)", a: "start" })}
  ${T(150, 160, "Em = 0: parábola", { fs: 11, b: true, c: "#b45309", a: "start" })}
  ${T(150, 40, "Em > 0: hipérbola", { fs: 11, b: true, c: "var(--red)", a: "start" })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Movimiento de satélites y planetas",
  minutos: 115,
  objetivos: [
    "Deducir las leyes de Kepler a partir de la ley de gravitación y de la conservación del momento angular",
    "Calcular la velocidad, el periodo y la energía de satélites en órbita circular",
    "Aplicar la conservación de la energía al lanzamiento de proyectiles y satélites, y calcular la velocidad de escape",
    "Calcular la energía necesaria para poner un satélite en órbita o cambiarlo de órbita",
    "Relacionar el signo de la energía mecánica con el tipo de trayectoria",
    "Resolver problemas tipo PAU sobre satélites, planetas y exoplanetas",
  ],
  claves: ["momento angular", "fuerza central", "segunda ley de Kepler", "velocidad areolar", "tercera ley de Kepler", "velocidad orbital", "periodo", "energía cinética orbital", "energía mecánica", "energía de satelización", "velocidad de escape", "órbita geoestacionaria", "perigeo", "apogeo", "órbita de transferencia"],
  pregunta: {
    texto: "Si un astronauta quiere alcanzar a otra nave que va delante en la misma órbita, ¿debe acelerar?",
    respuesta: "Paradójicamente, <mark>no</mark>. Si acelera, gana energía y sube a una órbita más alta, donde la velocidad orbital es menor, y se quedaría atrás. Para alcanzar a la nave de delante tiene que frenar un poco: baja a una órbita más interna, más rápida, y después vuelve a subir. La mecánica orbital, que vas a estudiar aquí, desafía la intuición.",
  },
  lectura: {
    titulo: "Un planeta descubierto con lápiz y papel",
    html: `<p>En 1781 William Herschel descubrió Urano con su telescopio. Durante las décadas siguientes, los astrónomos calcularon su órbita con las leyes de Newton, pero el planeta se empeñaba en no estar exactamente donde debía: a veces se adelantaba y otras se retrasaba. ¿Fallaba la ley de gravitación? En 1846, el francés Urbain Le Verrier propuso otra explicación: un planeta desconocido, más allá de Urano, lo atraía y perturbaba su movimiento. Con meses de cálculos a mano, predijo dónde debía estar.</p><p>El 23 de septiembre de 1846, Johann Galle apuntó su telescopio en Berlín a la posición indicada y encontró Neptuno a menos de un grado del lugar previsto. Fue un triunfo de la física: un planeta descubierto antes de verlo. Hoy la misma idea sirve para detectar exoplanetas por el bamboleo de su estrella, para guiar sondas como la Voyager con asistencias gravitatorias y para calcular la órbita de los satélites que te dan la posición en el móvil. Todo se basa en las ecuaciones de este tema.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 El momento angular", p: [
      "El <mark>momento angular</mark> de una partícula de masa m respecto a un punto O es el producto vectorial de su vector de posición por su cantidad de movimiento: <b>L = r × p = r × m·v</b>. Es un vector perpendicular al plano formado por r y v, con sentido dado por la regla de la mano derecha, y su módulo es <b>L = r · m · v · sen α</b>, donde α es el ángulo entre r y v. En una órbita circular, r y v son perpendiculares y L = m·v·r. Se mide en kg·m²/s.",
      "La ecuación fundamental de la rotación dice que la variación del momento angular es igual al momento de la fuerza: dL/dt = r × F. Si la fuerza es <b>central</b>, como la gravitatoria, r y F son paralelos y su producto vectorial es nulo: el <mark>momento angular se conserva</mark>. Esta conservación tiene dos consecuencias. Como L es constante en dirección, la órbita está contenida en un <b>plano fijo</b>. Y como es constante en módulo, en los puntos extremos de una órbita elíptica se cumple r<sub>p</sub> · v<sub>p</sub> = r<sub>a</sub> · v<sub>a</sub>: el planeta va más rápido en el perihelio que en el afelio.",
    ], extra: formula("L = r × m·v ; fuerza central → L = constante"), svg: momentoSVG, video: V("sat-c", "El momento angular", "momento angular física bachillerato") }),
    bloque({ h: "1.2 Las leyes de Kepler desde la física de Newton", p: [
      "Kepler obtuvo sus tres leyes de forma empírica, a partir de los datos de Tycho Brahe. Con la física de Newton se pueden deducir. La <b>primera ley</b> (órbitas elípticas con el Sol en un foco) se demuestra resolviendo la ecuación del movimiento con una fuerza que decrece como 1/r²: las trayectorias posibles son cónicas, y las cerradas son elipses. Esa demostración requiere matemáticas universitarias, pero en este curso basta saber que es consecuencia de la ley de la inversa del cuadrado.",
      "La <b>segunda ley</b> es consecuencia directa de la conservación del momento angular. El área que barre el radio vector en un tiempo dt es dA = ½ · |r × v · dt|, de modo que la <mark>velocidad areolar</mark> vale <b>dA/dt = L / (2m)</b>, constante. Por tanto, el radio vector barre áreas iguales en tiempos iguales. La segunda ley no depende de que la fuerza sea 1/r²: se cumple para cualquier fuerza central. La <b>tercera ley</b> la deducirás en el apartado siguiente igualando la fuerza gravitatoria a la centrípeta.",
    ], extra: formula("dA/dt = L / 2m = constante ; r<sub>p</sub> · v<sub>p</sub> = r<sub>a</sub> · v<sub>a</sub>"), svg: rejilla("Las leyes de Kepler y su origen", ["Ley", "Enunciado", "Origen físico"], [["1.ª", "órbitas elípticas", "F ∝ 1/r²"], ["2.ª", "áreas iguales", "L constante"], ["3.ª", "T² ∝ r³", "F grav = F cent"]]), video: V("sat-b", "La segunda ley de Kepler", "segunda ley de Kepler") }),
    bloque({ h: "1.3 Velocidad orbital y tercera ley de Kepler", p: [
      "Un satélite de masa m en órbita circular de radio r alrededor de un astro de masa M solo está sometido a la fuerza gravitatoria, que hace de fuerza centrípeta: G·M·m / r² = m · v² / r. Despejando, la <mark>velocidad orbital</mark> es <b>v = √(G·M / r)</b>. Depende de la masa del astro central y del radio de la órbita, pero <b>no de la masa del satélite</b>. Cuanto mayor es el radio, menor es la velocidad. Si conocemos g₀ y R del planeta, es cómodo escribir G·M = g₀·R².",
      "El <b>periodo</b> es el tiempo de una vuelta completa: T = 2π·r / v. Sustituyendo la velocidad y elevando al cuadrado se obtiene la <b>tercera ley de Kepler</b>: <mark>T² = (4π² / G·M) · r³</mark>. La constante solo depende de la masa del astro central, así que es la misma para todos los planetas del Sistema Solar y otra distinta para todos los satélites de Júpiter. Para órbitas elípticas, r se sustituye por el semieje mayor. Midiendo T y r de cualquier satélite natural o artificial, se calcula la masa del astro central: así se conocen las masas de los planetas, del Sol y del agujero negro del centro de nuestra galaxia.",
    ], extra: formula("v = √(G·M / r) ; T² = (4π² / G·M) · r³"), svg: pasos("Problema de satélite en órbita circular", ["r = R + h (desde el centro)", "GMm/r² = mv²/r", "v = √(GM/r)", "T = 2πr / v", "M = 4π²r³ / GT²"], "var(--pen)"), video: V("sat-d", "Fórmula de la velocidad orbital", "velocidad orbital fórmula") }),
    bloque({ h: "1.4 Órbitas útiles: baja, geoestacionaria y polar", p: [
      "Las órbitas se eligen según la misión. Las <b>órbitas bajas</b> (LEO, entre 200 y 2000 km) tienen periodos de 90 a 120 minutos; allí están la Estación Espacial Internacional, los satélites de observación terrestre y las constelaciones de internet. Las <b>órbitas medias</b> (MEO, unos 20.000 km) son las de los sistemas de navegación GPS y Galileo, con periodos de unas 12 horas. Las <b>órbitas polares</b> pasan sobre los polos; como la Tierra gira debajo, el satélite acaba sobrevolando todo el planeta, lo que es ideal para cartografía y meteorología.",
      "La <mark>órbita geoestacionaria</mark> es circular, ecuatorial y con un periodo igual al de rotación de la Tierra (un día sidéreo, 86.164 s), en el mismo sentido. Con la tercera ley, su radio es r = ∛(G·M·T² / 4π²) = 42.200 km, es decir, unos 35.800 km de altura. Un satélite allí parece inmóvil en el cielo, por lo que las antenas pueden apuntarle de forma fija: es la órbita de la televisión por satélite y de los satélites meteorológicos como Meteosat. Solo hay una órbita geoestacionaria, y sus posiciones se reparten entre países por acuerdos internacionales.",
    ], svg: barras("Periodo de algunas órbitas", "T", [["EEI 400 km", 1.5, "var(--leaf)", "92 min"], ["Polar 800 km", 1.68, "var(--muted)", "101 min"], ["GPS", 12, "var(--pen)", "12 h"], ["GEO", 24, "var(--red)", "24 h"]]) }),
    bloque({ h: "2.1 La energía de un satélite en órbita", p: [
      "En órbita circular, la <b>energía cinética</b> se obtiene de v² = G·M/r: <b>E<sub>c</sub> = ½ m v² = G·M·m / (2r)</b>. La <b>energía potencial</b> es E<sub>p</sub> = −G·M·m / r. Sumando, la <mark>energía mecánica</mark> del satélite es <b>E<sub>m</sub> = −G·M·m / (2r)</b>. Observa una relación curiosa: E<sub>m</sub> = −E<sub>c</sub> = E<sub>p</sub> / 2. Es un caso del llamado teorema del virial.",
      "La energía mecánica es <b>negativa</b>, lo que indica que el satélite está <b>ligado</b> al planeta: no tiene energía suficiente para escapar. Cuanto mayor es el radio de la órbita, menor es la velocidad y la energía cinética, pero mayor (menos negativa) es la energía mecánica. Por eso, para subir un satélite a una órbita más alta hay que <b>darle energía</b>, aunque después vaya más despacio. Y al revés: el rozamiento con la atmósfera residual quita energía a los satélites bajos, que caen a órbitas más internas y, paradójicamente, se mueven cada vez más rápido hasta que reentran y se desintegran.",
    ], extra: formula("E<sub>c</sub> = GMm/2r ; E<sub>p</sub> = −GMm/r ; E<sub>m</sub> = −GMm/2r"), svg: energiaSVG }),
    bloque({ h: "2.2 La energía para poner un satélite en órbita", p: [
      "Para colocar un satélite en órbita hay que llevarlo desde la superficie (donde, si despreciamos la rotación terrestre, está en reposo con energía E<sub>p</sub> = −G·M·m/R) hasta la órbita (energía mecánica −G·M·m/2r). La energía mínima que hay que comunicarle, llamada a veces <mark>energía de satelización</mark>, es la diferencia: <b>ΔE = G·M·m · (1/R − 1/2r)</b>. Una parte se emplea en subirlo (aumentar la energía potencial) y otra en darle la velocidad orbital.",
      "Para <b>cambiar de órbita</b>, de r₁ a r₂, la energía necesaria es la diferencia de energías mecánicas: <b>ΔE = (G·M·m/2) · (1/r₁ − 1/r₂)</b>. En la práctica se hace con una <b>órbita de transferencia de Hohmann</b>: un primer encendido del motor convierte la órbita circular baja en una elipse cuyo apogeo toca la órbita alta, y un segundo encendido en el apogeo la circulariza. Los cohetes se lanzan hacia el este y, si es posible, desde cerca del ecuador (Kourou, en la Guayana Francesa) para aprovechar la velocidad de rotación terrestre, que allí es de 465 m/s.",
    ], extra: formula("Lanzamiento: ΔE = GMm (1/R − 1/2r) ; Cambio de órbita: ΔE = (GMm/2)(1/r₁ − 1/r₂)"), svg: pasos("Maniobra de Hohmann", ["Órbita circular baja", "1.er encendido: elipse", "Viaje hasta el apogeo", "2.º encendido: circular alta"], "var(--leaf)") }),
    bloque({ h: "2.3 La velocidad de escape", p: [
      "La <mark>velocidad de escape</mark> es la velocidad mínima con la que hay que lanzar un cuerpo desde la superficie de un astro para que llegue al infinito, donde se anula la energía potencial, con velocidad nula. Aplicando la conservación de la energía: ½ m v<sub>e</sub>² − G·M·m/R = 0, de donde <b>v<sub>e</sub> = √(2·G·M / R) = √(2·g₀·R)</b>. Para la Tierra vale 11,2 km/s. No depende de la masa del cuerpo ni de la dirección del lanzamiento (si no hay atmósfera).",
      "Si el cuerpo ya está en una órbita de radio r, la velocidad de escape desde allí es √(2GM/r) = √2 · v<sub>orbital</sub>, y la energía adicional que hay que darle es justo la que le falta para que su energía mecánica sea cero: <b>ΔE = G·M·m / 2r</b>. La velocidad de escape explica por qué la Luna y Mercurio no tienen atmósfera, por qué Júpiter retiene incluso hidrógeno y helio, y qué es un <b>agujero negro</b>: un objeto tan compacto que su velocidad de escape supera la de la luz. El radio por debajo del cual ocurre, R = 2GM/c², se llama radio de Schwarzschild: para el Sol es de 3 km.",
    ], extra: formula("v<sub>e</sub> = √(2·G·M / R) = √2 · v<sub>orbital rasante</sub>"), svg: barras("Velocidad de escape de algunos astros", "v escape (km/s)", [["Sol", 618, "#b45309", "618"], ["Júpiter", 60, "var(--red)", "60"], ["Tierra", 11.2, "var(--pen)", "11,2"], ["Marte", 5, "var(--leaf)", "5,0"], ["Luna", 2.4, "var(--muted)", "2,4"]]), video: V("sat-a", "Gravedad y velocidad de escape", "velocidad de escape bachillerato") }),
    bloque({ h: "2.4 Energía y tipo de trayectoria", p: [
      "El signo de la energía mecánica determina qué tipo de trayectoria sigue un cuerpo sometido a la gravedad de un astro. Si <b>E<sub>m</sub> &lt; 0</b>, el cuerpo está ligado y describe una <b>órbita cerrada</b>: una elipse o, como caso particular, una circunferencia. Si <b>E<sub>m</sub> = 0</b>, describe una <b>parábola</b>: llega al infinito con velocidad nula; es el caso límite de la velocidad de escape. Si <mark>E<sub>m</sub> &gt; 0</mark>, describe una <b>hipérbola</b>: escapa y llega al infinito con velocidad.",
      "Este resultado explica el movimiento de los cometas. Los periódicos, como el Halley (76 años), tienen órbitas elípticas muy alargadas. Algunos cometas no periódicos llegan con trayectorias casi parabólicas desde la lejana nube de Oort. Y en 2017 se detectó ʻOumuamua, el primer objeto interestelar, con una trayectoria claramente hiperbólica: venía de fuera del Sistema Solar y se marchó para siempre. Las sondas que van a otros planetas también salen de la Tierra en trayectoria hiperbólica respecto a ella, aunque sigan ligadas al Sol.",
    ], svg: trayectoriasSVG }),
    bloque({ h: "2.5 Problemas de lanzamiento: hasta dónde sube un proyectil", p: [
      "Cuando un proyectil se lanza verticalmente con una velocidad grande, ya no sirve la fórmula h = v²/2g, porque g disminuye con la altura. Hay que aplicar la conservación de la energía con la expresión general: <b>½ m v₀² − G·M·m/R = −G·M·m/r<sub>máx</sub></b>. De aquí se despeja la distancia máxima al centro, y restando R, la altura máxima. El mismo método sirve para calcular con qué velocidad llega al suelo un meteorito o un satélite que cae.",
      "Un método práctico para los problemas tipo PAU: identificar los dos estados (inicial y final), escribir la energía mecánica en cada uno con <mark>E<sub>c</sub> = ½ m v²</mark> y <mark>E<sub>p</sub> = −G·M·m/r</mark>, e igualar. Si en algún estado el cuerpo está en órbita circular, su energía es −GMm/2r. Si interviene el trabajo de un motor o del rozamiento, se usa W<sub>no conservativas</sub> = ΔE<sub>m</sub>. Comprueba siempre que tomas las distancias desde el centro del astro y que tu energía final es coherente con el tipo de trayectoria.",
    ], extra: formula("½ m v₁² − GMm/r₁ = ½ m v₂² − GMm/r₂"), svg: ficha("Conservación de la energía", "Em₁ = Em₂", ["Ec = ½ m v²", "Ep = −GMm/r", "órbita: Em = −GMm/2r", "escape: Em = 0"]) }),
    bloque({ h: "3.1 Exoplanetas, sondas y basura espacial", p: [
      "La mecánica orbital tiene hoy aplicaciones espectaculares. Desde 1995 se han descubierto más de 5000 <mark>exoplanetas</mark>. Uno de los métodos, el de la velocidad radial, mide el pequeño vaivén de la estrella causado por el planeta que la orbita; con la tercera ley de Kepler y el periodo se calcula la distancia del planeta a su estrella y una estimación de su masa. Las <b>asistencias gravitatorias</b> permiten a las sondas ganar velocidad al pasar cerca de un planeta, como hicieron las Voyager para alcanzar los planetas exteriores o la sonda Juice camino de Júpiter.",
      "Pero el espacio cercano también tiene problemas. Hay más de 10.000 satélites activos y decenas de millones de fragmentos de <b>basura espacial</b> que viajan a unos 8 km/s: un tornillo a esa velocidad tiene la energía de una granada. En 2009 chocaron dos satélites y generaron miles de fragmentos. Para evitar el síndrome de Kessler (una reacción en cadena de choques que haría inutilizables algunas órbitas), las agencias exigen que los satélites bajos reentren en la atmósfera al final de su vida y los geoestacionarios suban a una «órbita cementerio».",
    ], svg: rejilla("Aplicaciones de la mecánica orbital", ["Aplicación", "Física", "Ejemplo"], [["Exoplanetas", "3.ª ley Kepler", "velocidad radial"], ["Sondas", "asistencia grav.", "Voyager, Juice"], ["Navegación", "órbitas MEO", "GPS, Galileo"], ["Basura", "Em y rozamiento", "reentrada"]], "var(--leaf)") }),
  ],
  figura: figura("Satélites y planetas", "Momento angular, órbitas, energía y escape", [["Kepler", "L = r × mv", "áreas iguales"], ["Órbita", "v = √(GM/r)", "T² = 4π²r³/GM"], ["Energía", "Em = −GMm/2r", "ligado si Em < 0"], ["Escape", "ve = √(2GM/R)", "Tierra: 11,2 km/s"]]),
  video: V("sat-a", "Gravedad y velocidad de escape", "velocidad de escape bachillerato"),
  ejemplos: [
    { enunciado: "La Tierra está a 1,47 · 10¹¹ m del Sol en el perihelio, donde va a 30,3 km/s. ¿Qué velocidad tiene en el afelio (1,52 · 10¹¹ m)?", pasos: ["Se conserva el momento angular: r<sub>p</sub> · v<sub>p</sub> = r<sub>a</sub> · v<sub>a</sub>.", "v<sub>a</sub> = 1,47·10¹¹ · 30,3 / 1,52·10¹¹."], resultado: "v<sub>a</sub> ≈ 29,3 km/s." },
    { enunciado: "Un satélite orbita a 600 km de altura. Calcula su velocidad y su periodo (g₀ = 9,8 m/s²; R = 6370 km).", pasos: ["G·M = g₀ · R² = 9,8 · (6,37·10⁶)² = 3,98·10¹⁴ m³/s².", "r = 6,97·10⁶ m; v = √(3,98·10¹⁴ / 6,97·10⁶) = 7556 m/s.", "T = 2π · 6,97·10⁶ / 7556 = 5796 s."], resultado: "v ≈ 7,56 km/s; T ≈ 96,6 min." },
    { enunciado: "Fobos gira alrededor de Marte en 7,65 h con un radio orbital de 9,38 · 10⁶ m. Calcula la masa de Marte.", pasos: ["T = 7,65 · 3600 = 2,75·10⁴ s.", "M = 4π² r³ / (G·T²) = 39,5 · 8,25·10²⁰ / (6,67·10⁻¹¹ · 7,58·10⁸).", "M = 3,26·10²² / 5,06·10⁻²."], resultado: "M ≈ 6,4 · 10²³ kg." },
    { enunciado: "Calcula la energía mínima para poner en órbita geoestacionaria (r = 4,22 · 10⁷ m) un satélite de 2000 kg lanzado desde la superficie (G·M = 3,98 · 10¹⁴ m³/s²; R = 6,37 · 10⁶ m).", pasos: ["E<sub>superficie</sub> = −GMm/R = −3,98·10¹⁴ · 2000 / 6,37·10⁶ = −1,25·10¹¹ J.", "E<sub>órbita</sub> = −GMm/2r = −3,98·10¹⁴ · 2000 / 8,44·10⁷ = −9,43·10⁹ J.", "ΔE = −9,43·10⁹ + 1,25·10¹¹."], resultado: "ΔE ≈ 1,16 · 10¹¹ J." },
    { enunciado: "Se lanza verticalmente un proyectil desde la superficie terrestre a 5 km/s. ¿Qué altura máxima alcanza (sin rozamiento)?", pasos: ["½ v₀² − GM/R = −GM/r: 1,25·10⁷ − 6,25·10⁷ = −3,98·10¹⁴ / r.", "r = 3,98·10¹⁴ / 5,0·10⁷ = 7,96·10⁶ m.", "h = r − R = 7,96·10⁶ − 6,37·10⁶."], resultado: "h ≈ 1590 km (con h = v²/2g saldrían 1276 km, un 20 % menos)." },
    { enunciado: "Un satélite de 500 kg está en órbita circular a 1000 km de altura. ¿Qué energía hay que darle para que escape de la Tierra?", pasos: ["r = 7,37·10⁶ m.", "E<sub>m</sub> = −GMm/2r = −3,98·10¹⁴ · 500 / 1,474·10⁷ = −1,35·10¹⁰ J.", "Para escapar, E<sub>m</sub> final = 0."], resultado: "ΔE = 1,35 · 10¹⁰ J." },
  ],
  errores: [
    "Usar la altura h en lugar del radio orbital r = R + h.",
    "Creer que un satélite más alejado va más rápido: es al revés, v = √(GM/r).",
    "Pensar que la velocidad orbital depende de la masa del satélite.",
    "Olvidar que la energía mecánica de un satélite en órbita es −GMm/2r, no −GMm/r.",
    "Usar m·g·h o h = v²/2g para alturas comparables al radio terrestre.",
    "Confundir velocidad de escape (desde la superficie) con velocidad orbital.",
  ],
  ejercicios: [
    B("Define momento angular y explica por qué se conserva en el movimiento de un planeta.", "L = r × m·v. Se conserva porque la fuerza gravitatoria es central: r × F = 0."),
    B("¿Qué consecuencias tiene la conservación del momento angular para la órbita de un planeta?", "La órbita es plana y se cumple la segunda ley de Kepler (velocidad areolar constante)."),
    B("Calcula el momento angular de la Tierra en su órbita (m = 5,97 · 10²⁴ kg; r = 1,5 · 10¹¹ m; v = 29,8 km/s).", "L = m·v·r = 5,97·10²⁴ · 2,98·10⁴ · 1,5·10¹¹ = 2,67·10⁴⁰ kg·m²/s."),
    B("Deduce la expresión de la velocidad orbital de un satélite en órbita circular.", "GMm/r² = mv²/r → v = √(GM/r)."),
    B("Calcula la velocidad orbital de la Luna (r = 3,84 · 10⁸ m; G·M<sub>T</sub> = 3,98 · 10¹⁴ m³/s²).", "v = √(3,98·10¹⁴ / 3,84·10⁸) = 1018 m/s."),
    B("¿Qué características tiene la órbita geoestacionaria?", "Circular, ecuatorial, periodo de un día sidéreo en el sentido de rotación terrestre; h ≈ 35.800 km."),
    B("Escribe las expresiones de la energía cinética, potencial y mecánica de un satélite en órbita circular.", "E<sub>c</sub> = GMm/2r; E<sub>p</sub> = −GMm/r; E<sub>m</sub> = −GMm/2r."),
    B("¿Por qué es negativa la energía mecánica de un satélite en órbita?", "Porque está ligado al planeta: no tiene energía para llegar al infinito."),
    B("Calcula la velocidad de escape de la Tierra usando g₀ = 9,8 m/s² y R = 6370 km.", "v<sub>e</sub> = √(2 · 9,8 · 6,37·10⁶) = 11.170 m/s."),
    B("¿Qué tipo de trayectoria sigue un cuerpo con energía mecánica positiva respecto a un planeta?", "Una hipérbola: escapa y llega al infinito con velocidad."),
    B("Un satélite pasa a una órbita más alta. ¿Aumenta o disminuye su velocidad? ¿Y su energía mecánica?", "La velocidad disminuye; la energía mecánica aumenta (es menos negativa)."),
    B("¿Por qué los cohetes se lanzan preferentemente hacia el este y cerca del ecuador?", "Para aprovechar la velocidad de rotación terrestre, máxima en el ecuador (465 m/s)."),
    M("Un cometa tiene una distancia al Sol de 8,8 · 10¹⁰ m en el perihelio, donde va a 54,6 km/s. En el afelio está a 5,3 · 10¹² m. ¿Qué velocidad tiene allí?", "v<sub>a</sub> = 8,8·10¹⁰ · 54,6 / 5,3·10¹² = 0,91 km/s."),
    M("Calcula el radio de la órbita de un satélite cuyo periodo es de 12 h y su altura.", "r = ∛(3,98·10¹⁴ · (43.200)² / 39,5) = ∛(1,88·10²²) = 2,66·10⁷ m; h ≈ 20.200 km (órbita GPS)."),
    M("Júpiter tarda 11,86 años en dar la vuelta al Sol. Calcula su distancia al Sol en unidades astronómicas.", "r³ = T² (en años y UA) → r = 11,86^(2/3) = 5,20 UA."),
    M("Un satélite de 800 kg está en órbita a 2000 km de altura. Calcula sus energías cinética, potencial y mecánica.", "r = 8,37·10⁶ m. E<sub>p</sub> = −3,98·10¹⁴ · 800 / 8,37·10⁶ = −3,80·10¹⁰ J; E<sub>c</sub> = 1,90·10¹⁰ J; E<sub>m</sub> = −1,90·10¹⁰ J."),
    M("¿Qué energía hay que dar al satélite anterior para pasarlo a una órbita a 4000 km de altura?", "r₂ = 1,037·10⁷ m. E<sub>m2</sub> = −3,98·10¹⁴ · 800 / 2,074·10⁷ = −1,54·10¹⁰ J. ΔE = 3,6·10⁹ J."),
    M("Calcula la velocidad de escape de un satélite situado en una órbita de radio 2R terrestre.", "v<sub>e</sub> = √(2GM/2R) = √(GM/R) = 7,9 km/s."),
    M("Un planeta tiene la misma densidad que la Tierra y la mitad de radio. ¿Cuál es su velocidad de escape?", "v<sub>e</sub> = √(2GM/R) ∝ R (con densidad constante) → 5,6 km/s."),
    M("Se lanza un proyectil desde la superficie de la Luna a 2 km/s (M<sub>L</sub> = 7,35 · 10²² kg; R<sub>L</sub> = 1,74 · 10⁶ m). ¿Qué altura alcanza?", "GM = 4,90·10¹². ½ · 4·10⁶ − 4,90·10¹² / 1,74·10⁶ = −GM/r → 2·10⁶ − 2,82·10⁶ = −8,2·10⁵ → r = 6,0·10⁶ m; h ≈ 4260 km."),
    M("Demuestra que la velocidad de escape desde la superficie es √2 veces la velocidad orbital rasante.", "v<sub>e</sub> = √(2GM/R) y v<sub>orb</sub> = √(GM/R); el cociente es √2."),
    M("Un exoplaneta tarda 4,23 días en orbitar su estrella a 7,7 · 10⁹ m (51 Pegasi b). Calcula la masa de la estrella.", "T = 3,65·10⁵ s. M = 39,5 · 4,57·10²⁹ / (6,67·10⁻¹¹ · 1,33·10¹¹) = 2,0·10³⁰ kg (una masa solar)."),
    M("Calcula el radio de Schwarzschild de una estrella de 10 masas solares (M<sub>☉</sub> = 2 · 10³⁰ kg).", "R = 2GM/c² = 2 · 6,67·10⁻¹¹ · 2·10³¹ / 9·10¹⁶ = 29,6 km."),
    A("(Tipo PAU) Un satélite de 1500 kg describe una órbita circular con un periodo de 2 h. Calcula: a) el radio de la órbita; b) su energía mecánica; c) la energía para llevarlo a una órbita con el doble de radio.", "a) r = ∛(3,98·10¹⁴ · 7200² / 39,5) = 8,06·10⁶ m. b) E<sub>m</sub> = −3,98·10¹⁴ · 1500 / 1,61·10⁷ = −3,70·10¹⁰ J. c) Con r doble, E<sub>m</sub> = −1,85·10¹⁰ J: ΔE = 1,85·10¹⁰ J."),
    A("Un satélite en órbita elíptica tiene el perigeo a 7000 km del centro de la Tierra y el apogeo a 14 000 km. Calcula su velocidad en el perigeo y en el apogeo.", "r<sub>p</sub>v<sub>p</sub> = r<sub>a</sub>v<sub>a</sub> → v<sub>a</sub> = v<sub>p</sub>/2. Energía: ½v<sub>p</sub>² − GM/r<sub>p</sub> = ½v<sub>p</sub>²/4 − GM/r<sub>a</sub> → (3/8)v<sub>p</sub>² = GM(1/7·10⁶ − 1/1,4·10⁷) = 2,84·10⁷ → v<sub>p</sub> = 8,71 km/s; v<sub>a</sub> = 4,35 km/s."),
    A("Con los datos anteriores, calcula la energía mecánica por unidad de masa y comprueba que vale −GM/(r<sub>p</sub> + r<sub>a</sub>).", "½ · 8710² − 3,98·10¹⁴/7·10⁶ = 3,79·10⁷ − 5,69·10⁷ = −1,90·10⁷ J/kg. −GM/(2,1·10⁷) = −1,90·10⁷ J/kg. Coincide: E<sub>m</sub> = −GMm/2a."),
    A("¿Con qué velocidad hay que lanzar un cuerpo desde la superficie terrestre para que alcance una altura igual al radio terrestre?", "½v² − GM/R = −GM/2R → v = √(GM/R) = 7,9 km/s."),
    A("¿Con qué velocidad llega a la superficie terrestre un meteorito que tiene una velocidad de 3 km/s a una distancia de 10R? (sin atmósfera)", "½v² = ½ · 9·10⁶ + GM(1/R − 1/10R) = 4,5·10⁶ + 0,9 · 6,25·10⁷ = 6,08·10⁷ → v = 11,0 km/s."),
    A("Explica por qué un astronauta que quiere alcanzar a otra nave que va delante en la misma órbita debe frenar en lugar de acelerar.", "Al frenar, su energía disminuye y baja a una órbita más interna, con menor periodo y mayor velocidad angular; gana ventaja y después vuelve a subir."),
    A("Calcula el porcentaje de energía de satelización que se dedica a aumentar la energía potencial para una órbita a 400 km de altura.", "ΔE<sub>p</sub> = GMm(1/R − 1/r); ΔE<sub>c</sub> = GMm/2r. Por unidad de masa: ΔE<sub>p</sub> = 3,98·10¹⁴(1,570 − 1,477)·10⁻⁷ = 3,70·10⁶; E<sub>c</sub> = 2,94·10⁷. Solo el 11 %: la mayor parte de la energía es cinética."),
  ],
  quiz: [
    q4("El momento angular de un planeta se conserva porque la fuerza gravitatoria es…", ["constante", "central", "no conservativa", "débil"], 1, "r × F = 0."),
    q4("La segunda ley de Kepler es consecuencia de…", ["la conservación de la energía", "la conservación del momento angular", "la tercera ley de Newton", "la relatividad"], 1, "dA/dt = L/2m."),
    q4("En el perihelio, la velocidad del planeta es…", ["mínima", "máxima", "nula", "igual que en el afelio"], 1, "r·v constante."),
    q4("La velocidad orbital depende de…", ["la masa del satélite", "la masa del planeta y el radio de la órbita", "solo del radio", "del periodo de rotación del planeta"], 1, "√(GM/r)."),
    q4("Si el radio de la órbita se multiplica por 4, la velocidad orbital…", ["se multiplica por 4", "se divide entre 2", "se multiplica por 2", "no cambia"], 1, "√(1/4)."),
    q4("Si el radio se multiplica por 4, el periodo…", ["se multiplica por 8", "se multiplica por 4", "se multiplica por 16", "se divide entre 2"], 0, "T ∝ r^(3/2)."),
    q4("La órbita geoestacionaria tiene una altura aproximada de…", ["400 km", "20.200 km", "35.800 km", "384.000 km"], 2, "r ≈ 42.200 km."),
    q4("La energía mecánica de un satélite en órbita circular es…", ["GMm/2r", "−GMm/r", "−GMm/2r", "0"], 2, "E<sub>c</sub> + E<sub>p</sub>."),
    q4("En órbita circular, E<sub>m</sub> es igual a…", ["E<sub>c</sub>", "−E<sub>c</sub>", "2E<sub>p</sub>", "−E<sub>p</sub>"], 1, "Teorema del virial."),
    q4("Al subir a una órbita más alta, la energía cinética…", ["aumenta", "disminuye", "no cambia", "se hace negativa"], 1, "La velocidad es menor."),
    q4("El rozamiento atmosférico hace que un satélite bajo…", ["suba y vaya más lento", "baje y vaya más rápido", "se detenga", "no cambie"], 1, "Pierde energía y cae a órbitas internas."),
    q4("La velocidad de escape de la Tierra es…", ["7,9 km/s", "11,2 km/s", "30 km/s", "3 km/s"], 1, "√(2GM/R)."),
    q4("La velocidad de escape depende de…", ["la masa del proyectil", "la dirección del lanzamiento", "la masa y el radio del astro", "la forma del proyectil"], 2, "No depende de m."),
    q4("Un cuerpo con E<sub>m</sub> = 0 describe…", ["una elipse", "una parábola", "una hipérbola", "una circunferencia"], 1, "Caso límite."),
    q4("Un cuerpo con E<sub>m</sub> &lt; 0 respecto a un planeta…", ["escapa", "está ligado", "choca siempre", "se para"], 1, "Órbita cerrada."),
    q4("La tercera ley de Kepler permite calcular…", ["la masa del satélite", "la masa del astro central", "la temperatura", "la densidad del satélite"], 1, "M = 4π²r³/GT²."),
    q4("La maniobra de Hohmann sirve para…", ["frenar en la atmósfera", "cambiar de órbita con dos encendidos", "escapar del Sol", "aterrizar"], 1, "Órbita de transferencia elíptica."),
    q4("El radio de Schwarzschild es…", ["GM/c²", "2GM/c²", "GM/2c²", "√(2GM)/c"], 1, "v<sub>e</sub> = c."),
    q4("ʻOumuamua siguió una trayectoria…", ["elíptica", "circular", "hiperbólica", "parabólica exacta"], 2, "Objeto interestelar."),
    q4("Las órbitas polares se usan sobre todo para…", ["televisión", "cartografiar todo el planeta", "GPS", "comunicaciones fijas"], 1, "La Tierra gira debajo."),
  ],
  examen: [
    q4("Planeta: r<sub>p</sub> = 1 UA, v<sub>p</sub> = 40 km/s, r<sub>a</sub> = 2 UA. v<sub>a</sub> =", ["20 km/s", "80 km/s", "28 km/s", "10 km/s"], 0, "r·v constante."),
    q4("Satélite con r = 4R terrestre: v =", ["3,95 km/s", "7,9 km/s", "2 km/s", "15,8 km/s"], 0, "7,9/√4."),
    q4("Un satélite con T = 8 h; otro con r cuatro veces mayor tiene T =", ["64 h", "32 h", "16 h", "128 h"], 0, "4^(3/2) = 8."),
    q4("Satélite de 1000 kg con E<sub>c</sub> = 2·10¹⁰ J. Su E<sub>m</sub> es", ["−2·10¹⁰ J", "−4·10¹⁰ J", "2·10¹⁰ J", "0"], 0, "E<sub>m</sub> = −E<sub>c</sub>."),
    q4("Planeta con doble masa y doble radio que la Tierra: v<sub>e</sub> =", ["11,2 km/s", "22,4 km/s", "5,6 km/s", "15,8 km/s"], 0, "√(2/2)."),
    q4("Para escapar desde una órbita circular hay que multiplicar v por…", ["√2", "2", "1/√2", "4"], 0, "v<sub>e</sub>(r) = √2 · v<sub>orb</sub>."),
    q4("Energía para pasar 100 kg de r a 2r (GM/r = 4·10⁷ J/kg):", ["10⁹ J", "2·10⁹ J", "4·10⁹ J", "5·10⁸ J"], 0, "(GMm/2)(1/r − 1/2r) = GMm/4r."),
    q4("Un cuerpo lanzado a 11,2 km/s desde la superficie terrestre sigue una trayectoria…", ["parabólica", "elíptica", "hiperbólica", "circular"], 0, "E<sub>m</sub> = 0."),
  ],
  feynman: ["Por qué un planeta va más rápido cerca del Sol", "Por qué los satélites más altos van más despacio", "Por qué la energía de un satélite es negativa", "Por qué para alcanzar a una nave hay que frenar", "Qué es la velocidad de escape y por qué no depende de la masa", "Cómo se calcula la masa de un planeta con sus lunas"],
  mapa: mapaB("SATÉLITES Y PLANETAS", [["Momento angular", "L = r × mv constante", "var(--leaf)"], ["Órbita circular", "v = √(GM/r) ; T² ∝ r³", "var(--pen)"], ["Energía", "Em = −GMm/2r", "var(--red)"], ["Escape", "ve = √(2GM/R)", "var(--muted)"]]),
  tarjetas: [
    ["Momento angular", "L = r × m·v; se conserva con fuerzas centrales."],
    ["Velocidad areolar", "dA/dt = L/2m, constante (2.ª ley de Kepler)."],
    ["Perihelio y afelio", "r<sub>p</sub> · v<sub>p</sub> = r<sub>a</sub> · v<sub>a</sub>."],
    ["Velocidad orbital", "v = √(G·M / r)."],
    ["Tercera ley de Kepler", "T² = (4π² / G·M) · r³."],
    ["Órbita geoestacionaria", "T = 1 día sidéreo; r ≈ 42.200 km."],
    ["Energía en órbita", "E<sub>m</sub> = −G·M·m / 2r = −E<sub>c</sub>."],
    ["Satelización", "ΔE = GMm (1/R − 1/2r)."],
    ["Cambio de órbita", "ΔE = (GMm/2)(1/r₁ − 1/r₂)."],
    ["Velocidad de escape", "v<sub>e</sub> = √(2·G·M / R); Tierra: 11,2 km/s."],
    ["Trayectorias", "E<sub>m</sub> &lt; 0 elipse; = 0 parábola; &gt; 0 hipérbola."],
    ["Radio de Schwarzschild", "R = 2GM/c²."],
  ],
  glosario: [
    ["Momento angular", "Producto vectorial del vector de posición por la cantidad de movimiento."],
    ["Fuerza central", "Fuerza dirigida siempre hacia un punto fijo."],
    ["Velocidad areolar", "Área barrida por el radio vector por unidad de tiempo."],
    ["Perigeo", "Punto de la órbita más cercano a la Tierra."],
    ["Apogeo", "Punto de la órbita más alejado de la Tierra."],
    ["Semieje mayor", "Mitad del eje más largo de una elipse."],
    ["Órbita geoestacionaria", "Órbita ecuatorial con el periodo de rotación terrestre."],
    ["Órbita polar", "Órbita que pasa sobre los polos."],
    ["Energía de satelización", "Energía mínima para poner un satélite en órbita."],
    ["Órbita de transferencia", "Elipse que une dos órbitas circulares (Hohmann)."],
    ["Velocidad de escape", "Velocidad mínima para escapar de la atracción de un astro."],
    ["Asistencia gravitatoria", "Ganancia de velocidad de una sonda al pasar cerca de un planeta."],
    ["Exoplaneta", "Planeta que orbita una estrella distinta del Sol."],
    ["Radio de Schwarzschild", "Radio por debajo del cual una masa forma un agujero negro."],
    ["Síndrome de Kessler", "Reacción en cadena de choques de basura espacial."],
  ],
  situacion: {
    titulo: "Plan de vuelo para un satélite español",
    reto: "Una empresa española quiere lanzar un pequeño satélite de 150 kg para vigilar incendios forestales y otro geoestacionario de 3000 kg de comunicaciones. Vuestro equipo de dinámica orbital debe proponer las órbitas y calcular la energía de cada misión.",
    pasos: [
      "Elegid la órbita del satélite de incendios (baja y polar o heliosíncrona) y calculad su periodo y cuántas veces al día pasa sobre España.",
      "Calculad la velocidad, el periodo y la energía mecánica de ambos satélites.",
      "Calculad la energía de satelización y comparadla con la energía de un litro de gasolina (34 MJ).",
      "Diseñad la maniobra de Hohmann para llevar el satélite de comunicaciones desde una órbita baja a la geoestacionaria.",
      "Proponed qué haréis con cada satélite al final de su vida para no generar basura espacial.",
    ],
    producto: "Un dosier de misión con los cálculos y un esquema de las órbitas a escala.",
    evaluacion: ["Las órbitas elegidas están justificadas para cada misión.", "Los cálculos de velocidad, periodo y energía son correctos.", "Se explica la maniobra de transferencia con el balance energético.", "Se tiene en cuenta la sostenibilidad del espacio."],
  },
  familias: [
    "Buscad en una app cuándo pasa la Estación Espacial Internacional y observadla juntos.",
    "Mirad la dirección en la que apuntan las antenas parabólicas: todas al sur, hacia el mismo punto.",
    "Comentad la noticia de alguna reentrada de satélites o de basura espacial.",
    "Ved juntos imágenes del descubrimiento de exoplanetas en la web de la NASA.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Campo gravitatorio»: momento angular de un objeto en un campo gravitatorio, conservación y relación con las leyes de Kepler; energía mecánica de un objeto sometido a un campo gravitatorio y deducción del tipo de movimiento; velocidad orbital, velocidad de escape, satélites artificiales y exploración espacial.`,
    ideas: [
      "Simulación PhET «Mi sistema solar» para comprobar las leyes de Kepler.",
      "Cálculo de la masa de Júpiter con observaciones de sus lunas galileanas.",
      "Seguimiento de la EEI en tiempo real y cálculo de su velocidad.",
      "Análisis de datos reales de exoplanetas del archivo de la NASA.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Mi sistema solar» (PhET)", url: "https://phet.colorado.edu/es/simulations/my-solar-system" },
    { t: "Agencia Espacial Europea (ESA): tipos de órbitas", url: "https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits" },
  ],
  revisado: "2026-11-21",
};
