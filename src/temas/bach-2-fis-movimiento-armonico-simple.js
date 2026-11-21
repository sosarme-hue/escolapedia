// Física 2º Bachillerato · El movimiento armónico simple (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const sen = (fase = 0, amp = 0.4, ciclos = 2, y0 = 0.5) => Array.from({ length: 49 }, (_, i) => [i / 48, y0 + amp * Math.sin((i / 48) * ciclos * 2 * Math.PI + fase)]);

// Masa unida a un muelle.
const muelleSVG = marco("Oscilador de muelle: una masa unida a un muelle oscila entre −A y +A alrededor de la posición de equilibrio", `
  <rect x="14" y="40" width="10" height="90" fill="var(--muted)"/>
  <path d="M24 85 ${Array.from({ length: 10 }, (_, i) => `L ${34 + i * 10} ${i % 2 ? 75 : 95}`).join(" ")} L 140 85" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="140" y="65" width="44" height="40" rx="5" fill="var(--pen)"/>${T(162, 90, "m", { fs: 15, b: true, c: "#fff" })}
  <path d="M10 130 H 250" stroke="var(--muted)" stroke-width="2"/>
  <path d="M120 140 V 150 M162 140 V 150 M204 140 V 150" stroke="var(--ink)" stroke-width="1.6"/>
  ${T(120, 166, "−A", { fs: 12, b: true, c: "var(--red)" })}${T(162, 166, "0", { fs: 12, b: true })}${T(204, 166, "+A", { fs: 12, b: true, c: "var(--red)" })}
  ${T(130, 30, "F = −k · x (fuerza recuperadora)", { fs: 12, b: true })}`);

// x, v, a frente a t.
const xvaSVG = graf("Elongación, velocidad y aceleración en el MAS: la velocidad está adelantada un cuarto de periodo y la aceleración está en oposición a la elongación", "t", "x, v, a", [
  { p: sen(0, 0.35), c: "var(--pen)", t: "x" },
  { p: sen(Math.PI / 2, 0.25), c: "var(--leaf)", t: "" },
  { p: sen(Math.PI, 0.15), c: "var(--red)", t: "" },
], `<text x="58" y="44" font-size="11" fill="var(--leaf)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">v</text><text x="58" y="98" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">a</text>`);

// Energías frente a x.
const energiaSVG = graf("Energías en el MAS frente a la posición: la potencial es una parábola, la cinética una parábola invertida y la total es constante", "x", "E", [
  { p: Array.from({ length: 21 }, (_, i) => { const x = -1 + i / 10; return [i / 20, 0.08 + 0.8 * x * x]; }), c: "var(--red)", t: "" },
  { p: Array.from({ length: 21 }, (_, i) => { const x = -1 + i / 10; return [i / 20, 0.08 + 0.8 * (1 - x * x)]; }), c: "var(--leaf)", t: "" },
  { p: [[0, 0.88], [1, 0.88]], c: "var(--pen)", t: "Em", dash: true },
], `<text x="140" y="56" text-anchor="middle" font-size="11" fill="var(--leaf)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">Ec</text><text x="40" y="160" font-size="10" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">−A</text><text x="222" y="160" font-size="10" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">+A</text><text x="60" y="56" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">Ep</text>`);

// Amortiguado.
const amortSVG = graf("Oscilación amortiguada: la amplitud disminuye exponencialmente con el tiempo por el rozamiento", "t", "x", [
  { p: Array.from({ length: 61 }, (_, i) => { const t = i / 60; return [t, 0.5 + 0.42 * Math.exp(-2.5 * t) * Math.cos(t * 6 * 2 * Math.PI)]; }), c: "var(--pen)", t: "" },
  { p: Array.from({ length: 21 }, (_, i) => { const t = i / 20; return [t, 0.5 + 0.42 * Math.exp(-2.5 * t)]; }), c: "var(--red)", t: "", dash: true },
]);

// Resonancia.
const resonSVG = graf("Curva de resonancia: la amplitud de una oscilación forzada es máxima cuando la frecuencia externa coincide con la natural", "f externa", "amplitud", [
  { p: Array.from({ length: 41 }, (_, i) => { const f = i / 40; return [f, 0.05 + 0.85 / (1 + Math.pow((f - 0.5) / 0.07, 2))]; }), c: "var(--red)", t: "" },
], `<path d="M140 145 V 30" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="140" y="24" text-anchor="middle" font-size="11" fill="var(--muted)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">f₀ natural</text>`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "El movimiento armónico simple",
  minutos: 110,
  objetivos: [
    "Reconocer los movimientos periódicos y oscilatorios y sus magnitudes características",
    "Escribir e interpretar la ecuación del movimiento armónico simple y obtener la velocidad y la aceleración",
    "Relacionar el MAS con la ley de Hooke y calcular el periodo de un oscilador de muelle",
    "Aplicar la conservación de la energía al MAS",
    "Estudiar el péndulo simple y sus condiciones de validez",
    "Explicar el amortiguamiento, las oscilaciones forzadas y la resonancia, y sus aplicaciones",
  ],
  claves: ["movimiento periódico", "oscilación", "elongación", "amplitud", "periodo", "frecuencia", "pulsación", "fase inicial", "ley de Hooke", "fuerza recuperadora", "energía del oscilador", "péndulo simple", "isocronismo", "amortiguamiento", "resonancia"],
  pregunta: {
    texto: "¿Por qué un soldado no debe cruzar un puente marcando el paso?",
    respuesta: "Porque si el ritmo de los pasos coincide con la <mark>frecuencia natural de oscilación</mark> del puente, cada paso empuja en el momento justo y la amplitud crece sin parar: es la resonancia. En 1831, el puente de Broughton, en Inglaterra, se derrumbó al cruzarlo una columna de soldados marcando el paso. Desde entonces, los ejércitos rompen el paso al cruzar los puentes.",
  },
  lectura: {
    titulo: "Una lámpara en la catedral de Pisa",
    html: `<p>Cuenta la historia que en 1583 un joven estudiante de medicina de 19 años, Galileo Galilei, se aburría durante una misa en la catedral de Pisa. Su mirada se fijó en una gran lámpara que colgaba del techo y se balanceaba con las corrientes de aire. A veces la oscilación era amplia y otras, pequeña. Galileo midió el tiempo de cada vaivén con lo único que tenía: su propio pulso. Y descubrió algo sorprendente: tanto si la lámpara oscilaba mucho como si oscilaba poco, cada vaivén duraba lo mismo.</p><p>Era el <b>isocronismo del péndulo</b>. Galileo pensó en usarlo para medir el pulso de los enfermos, y décadas después propuso construir relojes con péndulos. Fue Christiaan Huygens quien, en 1656, fabricó el primer reloj de péndulo, que pasó de atrasar un cuarto de hora al día a solo unos segundos. Durante casi tres siglos, los relojes más precisos del mundo fueron péndulos. Hoy los cristales de cuarzo de tu reloj oscilan 32.768 veces por segundo, pero siguen la misma física: la del movimiento armónico simple.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Movimientos periódicos y oscilatorios", p: [
      "Un movimiento es <b>periódico</b> cuando se repite a intervalos iguales de tiempo, como el giro de la Tierra o el movimiento de la aguja de un reloj. Es <b>oscilatorio</b> o vibratorio cuando, además, el cuerpo se mueve a un lado y a otro de una posición de equilibrio: un columpio, la cuerda de una guitarra, las moléculas de un sólido o el aire cuando pasa un sonido. Las oscilaciones están en todas partes porque cualquier sistema apartado ligeramente de un equilibrio estable tiende a volver a él.",
      "El oscilador más sencillo e importante es el <mark>movimiento armónico simple</mark> (MAS): un movimiento oscilatorio rectilíneo en el que la aceleración es proporcional a la distancia a la posición de equilibrio y de sentido contrario. Su importancia es enorme: casi cualquier oscilación pequeña se comporta como un MAS, y las ondas, que estudiarás en el siguiente tema, son la propagación de un MAS por un medio. Además, cualquier oscilación periódica, por complicada que sea, puede descomponerse en una suma de MAS (teorema de Fourier), y en eso se basa la compresión del sonido en MP3.",
    ], svg: compara("Periódico y oscilatorio", ["Periódico", ["se repite", "a intervalos iguales", "giro de la Tierra", "reloj"]], ["Oscilatorio", ["va y vuelve", "en torno al equilibrio", "columpio, muelle", "cuerda de guitarra"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "1.2 La ecuación del MAS y sus magnitudes", p: [
      "La posición de un cuerpo que describe un MAS viene dada por <mark>x(t) = A · sen(ω·t + φ₀)</mark>. La <b>elongación</b> x es la distancia a la posición de equilibrio en cada instante. La <b>amplitud</b> A es la elongación máxima. La <b>pulsación</b> o frecuencia angular ω se mide en rad/s. El argumento (ω·t + φ₀) es la <b>fase</b>, y φ₀ es la <b>fase inicial</b>, que depende de dónde estaba el cuerpo en t = 0. También puede escribirse con coseno, cambiando la fase inicial en π/2.",
      "El <b>periodo</b> T es el tiempo de una oscilación completa, y la <b>frecuencia</b> f, el número de oscilaciones por segundo, medida en hercios (Hz): f = 1/T. Se relacionan con la pulsación así: <b>ω = 2π/T = 2π·f</b>. Para hallar φ₀, se sustituye t = 0: si el cuerpo parte del equilibrio hacia valores positivos, φ₀ = 0; si parte del extremo positivo, φ₀ = π/2 (con seno). Un truco útil: conviene comprobar siempre la fase inicial con la velocidad, porque sen φ₀ tiene dos soluciones en cada vuelta y solo una da el sentido correcto del movimiento.",
    ], extra: formula("x = A · sen(ω·t + φ₀) ; ω = 2π/T = 2π·f"), svg: rejilla("Magnitudes del MAS", ["Magnitud", "Símbolo", "Unidad"], [["Elongación", "x", "m"], ["Amplitud", "A", "m"], ["Pulsación", "ω", "rad/s"], ["Periodo", "T", "s"], ["Frecuencia", "f", "Hz"]], "var(--pen)"), video: V("mas-a", "Domina el movimiento armónico simple", "movimiento armónico simple") }),
    bloque({ h: "1.3 El MAS como proyección de un movimiento circular", p: [
      "Imagina un punto que gira con movimiento circular uniforme de radio A y velocidad angular ω. Si lo iluminas de lado y miras su sombra en una pared, la sombra sube y baja describiendo exactamente un MAS de amplitud A y pulsación ω. Por eso el MAS se puede ver como la <mark>proyección de un movimiento circular uniforme</mark> sobre un diámetro. Esta imagen explica por qué aparecen senos y cosenos, por qué ω se mide en radianes por segundo y qué significa la fase: es el ángulo girado por el punto auxiliar.",
      "Esta relación permite deducir con facilidad la velocidad y la aceleración: la velocidad del MAS es la proyección de la velocidad tangencial del MCU (A·ω) y la aceleración del MAS es la proyección de la aceleración centrípeta (A·ω²). También sirve para resolver problemas de tiempos: el tiempo que tarda un oscilador en ir de x = 0 a x = A/2 es el que tarda el punto auxiliar en girar 30° (π/6 rad), es decir, T/12. Galileo observó en 1610 las lunas de Júpiter y vio que, de perfil, su ir y venir respecto al planeta era precisamente un MAS.",
    ], svg: ficha("MAS y movimiento circular", "sombra de un MCU", ["radio = amplitud A", "ω del giro = pulsación", "fase = ángulo girado", "v = Aω·cos ; a = Aω²·sen"], "var(--leaf)") }),
    bloque({ h: "1.4 Velocidad y aceleración", p: [
      "Derivando la posición respecto al tiempo se obtiene la <b>velocidad</b>: <b>v = A·ω·cos(ω·t + φ₀)</b>. Usando sen² + cos² = 1, se puede escribir en función de la posición: <mark>v = ±ω·√(A² − x²)</mark>. La velocidad es <b>máxima</b> en el centro (x = 0), donde vale v<sub>máx</sub> = A·ω, y <b>nula</b> en los extremos (x = ±A), donde el cuerpo se detiene para cambiar de sentido.",
      "Derivando otra vez se obtiene la <b>aceleración</b>: a = −A·ω²·sen(ω·t + φ₀), es decir, <mark>a = −ω²·x</mark>. Esta es la ecuación que <b>define</b> un MAS: la aceleración es proporcional a la elongación y de sentido contrario; siempre apunta hacia el centro. Es máxima en los extremos (a<sub>máx</sub> = A·ω²) y nula en el centro. Observa el desfase: la velocidad está adelantada π/2 respecto a la posición y la aceleración, π respecto a la posición (en oposición de fase). Si en un problema te dan a = −C·x, sabes que es un MAS con ω = √C.",
    ], extra: formula("v = A·ω·cos(ωt + φ₀) = ±ω√(A² − x²) ; a = −ω²·x"), svg: xvaSVG }),
    bloque({ h: "1.5 Dinámica del MAS: el oscilador de muelle", p: [
      "¿Qué fuerza produce un MAS? Por la segunda ley de Newton, F = m·a = −m·ω²·x: una fuerza proporcional a la elongación y de sentido contrario, llamada <b>fuerza recuperadora</b>. Es exactamente la que ejerce un muelle según la <mark>ley de Hooke</mark>: F = −k·x, donde k es la <b>constante elástica</b> del muelle (N/m). Igualando, k = m·ω², de donde <b>ω = √(k/m)</b> y el periodo es <b>T = 2π·√(m/k)</b>.",
      "El periodo depende de la masa y de la rigidez del muelle, pero <b>no de la amplitud</b>: un muelle oscila igual de rápido tanto si lo estiras poco como si lo estiras mucho (siempre que no se deforme permanentemente). Una masa mayor oscila más despacio; un muelle más rígido, más deprisa. Si el muelle está colgado verticalmente, el peso solo desplaza la posición de equilibrio hasta Δl = m·g/k, pero la oscilación alrededor de esa nueva posición tiene el mismo periodo. Este resultado permite medir masas sin gravedad: en la Estación Espacial, los astronautas se «pesan» sentados en un asiento con muelles y midiendo su periodo de oscilación.",
    ], extra: formula("F = −k · x ; ω = √(k/m) ; T = 2π · √(m/k)"), svg: muelleSVG, video: V("mas-c", "MAS de un muelle: ejercicios resueltos", "movimiento armónico simple muelle") }),
    bloque({ h: "1.6 La energía en el MAS", p: [
      "La fuerza elástica es conservativa, así que el oscilador tiene una <b>energía potencial elástica</b> <b>E<sub>p</sub> = ½·k·x²</b>, máxima en los extremos y nula en el centro. Su <b>energía cinética</b> es E<sub>c</sub> = ½·m·v² = ½·k·(A² − x²), máxima en el centro y nula en los extremos. Si no hay rozamiento, la <mark>energía mecánica se conserva</mark>: <b>E = ½·k·A² = ½·m·v<sub>máx</sub>²</b>.",
      "La energía total es proporcional al <b>cuadrado de la amplitud</b>: si duplicas la amplitud, el oscilador tiene cuatro veces más energía. Durante la oscilación, la energía pasa continuamente de potencial a cinética y al revés. En el punto x = A/√2 ≈ 0,71·A, las dos energías son iguales. Fíjate en que, aunque la energía depende de la amplitud, el periodo no. Esta relación E ∝ A² se repetirá en las ondas: la energía que transporta una onda es proporcional al cuadrado de su amplitud, y por eso los terremotos de mayor amplitud son tan devastadores.",
    ], extra: formula("E<sub>p</sub> = ½·k·x² ; E<sub>c</sub> = ½·k·(A² − x²) ; E = ½·k·A²"), svg: energiaSVG }),
    bloque({ h: "2.1 El péndulo simple", p: [
      "Un <mark>péndulo simple</mark> es una masa puntual colgada de un hilo inextensible y sin masa de longitud L. Al apartarlo un ángulo θ, la componente del peso tangente a la trayectoria, −m·g·sen θ, lo devuelve hacia el equilibrio. Para <b>ángulos pequeños</b> (menos de unos 10°), sen θ ≈ θ (en radianes) y θ ≈ x/L, de modo que F ≈ −(m·g/L)·x: es una fuerza recuperadora proporcional a x, y el movimiento es un MAS.",
      "Comparando con F = −k·x, la «constante elástica» del péndulo es m·g/L, y su periodo es <b>T = 2π·√(L/g)</b>. Sorprendentemente, <b>no depende de la masa</b> ni de la amplitud (para ángulos pequeños): es el isocronismo de Galileo. Depende solo de la longitud y de la gravedad. Un péndulo de 1 m tiene un periodo de unos 2 s; para que el periodo se duplique hay que cuadruplicar la longitud. Midiendo L y T se puede calcular g con mucha precisión; así se descubrió que g varía con la latitud, y Foucault demostró en 1851 la rotación de la Tierra con un péndulo de 67 m en el Panteón de París.",
    ], extra: formula("T = 2π · √(L / g)  (ángulos pequeños)"), svg: pasos("Problema de péndulo simple", ["Ángulo pequeño (< 10°)", "T = 2π√(L/g)", "No depende de m ni de A", "g = 4π²L / T²"], "var(--pen)"), video: V("mas-b", "El péndulo simple", "péndulo simple bachillerato") }),
    bloque({ h: "2.2 Cómo leer las gráficas del MAS", p: [
      "En la PAU es frecuente que te den la gráfica x-t, v-t o a-t y tengas que escribir la ecuación. El procedimiento es: leer la <b>amplitud</b> en el eje vertical (el valor máximo); leer el <b>periodo</b> en el eje horizontal (el tiempo entre dos máximos consecutivos o entre tres cortes con el eje); calcular ω = 2π/T; y obtener la <b>fase inicial</b> mirando el valor y la tendencia en t = 0. Si la gráfica empieza en x = 0 y sube, φ₀ = 0 (con seno); si empieza en el máximo, φ₀ = π/2; si empieza en 0 y baja, φ₀ = π.",
      "Al revés, conocida la ecuación se pueden dibujar las tres gráficas. Recuerda sus relaciones: la <mark>velocidad es la pendiente</mark> de la gráfica x-t (máxima donde x cruza el cero, nula en los máximos) y la aceleración es la pendiente de la gráfica v-t. La gráfica a-t es la x-t invertida y multiplicada por ω². Si en un problema te dan la velocidad máxima y la aceleración máxima, puedes obtener todo: ω = a<sub>máx</sub>/v<sub>máx</sub> y A = v<sub>máx</sub>/ω.",
    ], svg: rejilla("Leer la gráfica x-t", ["En t = 0", "φ₀ (con seno)"], [["x = 0 y sube", "0"], ["x = +A", "π/2"], ["x = 0 y baja", "π"], ["x = −A", "3π/2 o −π/2"]], "var(--leaf)") }),
    bloque({ h: "2.3 Oscilaciones amortiguadas", p: [
      "En la realidad siempre hay rozamiento, y la energía del oscilador se va disipando: la amplitud disminuye con el tiempo hasta que el movimiento se detiene. Es una <mark>oscilación amortiguada</mark>. Si el rozamiento es proporcional a la velocidad, la amplitud decrece de forma exponencial, A(t) = A₀·e<sup>−γt</sup>, mientras el cuerpo sigue oscilando con un periodo casi igual al natural. Un columpio que se deja de empujar o la cuerda de una guitarra después de tocarla son ejemplos cotidianos.",
      "Según la intensidad del rozamiento, se distinguen tres casos. Con amortiguamiento <b>débil</b>, el sistema oscila muchas veces antes de pararse. Con amortiguamiento <b>crítico</b>, vuelve al equilibrio lo más rápido posible sin oscilar: es lo que buscan los <b>amortiguadores</b> de los coches, para que el vehículo no rebote tras un bache, y los mecanismos de las puertas que se cierran solas. Con amortiguamiento <b>fuerte</b>, vuelve al equilibrio muy lentamente, sin oscilar, como un muelle sumergido en miel.",
    ], svg: amortSVG }),
    bloque({ h: "2.4 Oscilaciones forzadas y resonancia", p: [
      "Si a un oscilador se le aplica una fuerza externa periódica, acaba oscilando con la frecuencia de esa fuerza: es una <b>oscilación forzada</b>. Su amplitud depende de lo cerca que esté la frecuencia externa de la <b>frecuencia natural</b> del sistema, f₀ = (1/2π)·√(k/m). Cuando ambas coinciden, la amplitud se hace máxima: es la <mark>resonancia</mark>. Lo sabes por experiencia: para columpiar a alguien muy alto, hay que empujar justo al ritmo del columpio.",
      "La resonancia puede ser útil o peligrosa. Es útil en los instrumentos musicales, cuyas cajas de resonancia amplifican el sonido de las cuerdas; en los receptores de radio, que se sintonizan ajustando su frecuencia natural a la de la emisora; en los hornos de microondas, cuya frecuencia hace vibrar las moléculas de agua; y en la resonancia magnética. Pero puede ser destructiva: en 1940 el viento hizo oscilar con amplitud creciente el puente de Tacoma Narrows (EE. UU.) hasta derrumbarlo, y los terremotos destruyen sobre todo los edificios cuya frecuencia natural coincide con la de las ondas sísmicas. Por eso los rascacielos modernos llevan amortiguadores de masa sintonizada.",
    ], svg: resonSVG }),
    bloque({ h: "3.1 El MAS en la ciencia y la tecnología", p: [
      "El movimiento armónico simple es uno de los modelos más útiles de la física. Los <b>relojes</b> se basan en osciladores: de los péndulos se pasó a los cristales de cuarzo (32.768 Hz) y a los relojes atómicos, cuya oscilación de referencia es la de los átomos de cesio, con una precisión de un segundo en millones de años. Los <b>sismógrafos</b> registran los terremotos con masas que oscilan unidas a muelles. Los <b>acelerómetros</b> de tu móvil, que detectan cuándo lo giras, son diminutos osciladores de silicio.",
      "En química, las moléculas vibran como masas unidas por muelles, y la espectroscopia infrarroja identifica sustancias por sus frecuencias de vibración. En la construcción se estudian las frecuencias propias de los edificios y los puentes para evitar resonancias. Y en medicina, la ecografía usa cristales piezoeléctricos que oscilan a millones de hercios. El MAS es, además, la puerta de entrada a las ondas: una onda armónica no es más que un MAS que se propaga de un punto a otro del espacio, como verás en el tema siguiente.",
    ], svg: barras("Frecuencias de algunos osciladores", "f (Hz)", [["Cesio (reloj)", 9.19e9, "var(--red)", "9,2·10⁹"], ["Ecografía", 5e6, "#b45309", "5·10⁶"], ["Cuarzo", 32768, "var(--pen)", "32.768"], ["La musical", 440, "var(--leaf)", "440"], ["Péndulo 1 m", 0.5, "var(--muted)", "0,5"]]), video: V("mas-d", "El péndulo simple no es como te explicaron", "péndulo simple") }),
  ],
  figura: figura("El movimiento armónico simple", "Ecuación, dinámica, energía y péndulo", [["Ecuación", "x = A sen(ωt + φ₀)", "ω = 2π/T"], ["Aceleración", "a = −ω² x", "v máx = Aω"], ["Muelle", "T = 2π√(m/k)", "E = ½kA²"], ["Péndulo", "T = 2π√(L/g)", "no depende de m"]], "var(--leaf)"),
  video: V("mas-a", "Domina el movimiento armónico simple", "movimiento armónico simple"),
  ejemplos: [
    { enunciado: "Un MAS tiene la ecuación x = 0,05 · sen(4π·t + π/2) (SI). Calcula la amplitud, el periodo, la frecuencia, la posición inicial y la velocidad máxima.", pasos: ["A = 0,05 m; ω = 4π rad/s.", "T = 2π/ω = 0,5 s; f = 2 Hz.", "x(0) = 0,05 · sen(π/2) = 0,05 m (parte del extremo).", "v<sub>máx</sub> = A·ω = 0,05 · 4π = 0,628 m/s."], resultado: "A = 5 cm; T = 0,5 s; f = 2 Hz; x₀ = 5 cm; v<sub>máx</sub> ≈ 0,63 m/s." },
    { enunciado: "Una partícula oscila con A = 10 cm y T = 2 s. En t = 0 está en x = 5 cm moviéndose hacia valores positivos. Escribe su ecuación.", pasos: ["ω = 2π/2 = π rad/s.", "0,05 = 0,1 · sen φ₀ → sen φ₀ = 0,5 → φ₀ = π/6 o 5π/6.", "v(0) = A·ω·cos φ₀ > 0 exige cos φ₀ > 0 → φ₀ = π/6."], resultado: "x = 0,1 · sen(π·t + π/6) m." },
    { enunciado: "Una masa de 200 g unida a un muelle de k = 80 N/m se separa 4 cm del equilibrio y se suelta. Calcula el periodo, la velocidad máxima y la energía.", pasos: ["ω = √(k/m) = √(80/0,2) = 20 rad/s; T = 2π/20 = 0,314 s.", "v<sub>máx</sub> = A·ω = 0,04 · 20 = 0,8 m/s.", "E = ½·k·A² = ½ · 80 · 0,0016 = 0,064 J."], resultado: "T ≈ 0,31 s; v<sub>máx</sub> = 0,8 m/s; E = 0,064 J." },
    { enunciado: "Con los datos anteriores, calcula la velocidad, la aceleración y las energías cuando x = 2 cm.", pasos: ["v = ω√(A² − x²) = 20 · √(0,0016 − 0,0004) = 20 · 0,0346 = 0,69 m/s.", "a = −ω²·x = −400 · 0,02 = −8 m/s².", "E<sub>p</sub> = ½ · 80 · 0,0004 = 0,016 J; E<sub>c</sub> = 0,064 − 0,016 = 0,048 J."], resultado: "v ≈ 0,69 m/s; a = −8 m/s²; E<sub>p</sub> = 0,016 J; E<sub>c</sub> = 0,048 J." },
    { enunciado: "Calcula la longitud de un péndulo que «bate segundos» (cada oscilación completa dura 2 s) en un lugar donde g = 9,81 m/s².", pasos: ["T = 2π√(L/g) → L = g·T² / 4π².", "L = 9,81 · 4 / 39,48."], resultado: "L ≈ 0,994 m." },
    { enunciado: "Un péndulo de 1,5 m tarda 24,6 s en dar 10 oscilaciones. Calcula g.", pasos: ["T = 24,6/10 = 2,46 s.", "g = 4π²·L / T² = 39,48 · 1,5 / 6,05."], resultado: "g ≈ 9,79 m/s²." },
  ],
  errores: [
    "Confundir frecuencia (Hz) y pulsación (rad/s): ω = 2π·f.",
    "Elegir mal la fase inicial sin comprobar el sentido de la velocidad.",
    "Usar la calculadora en grados con funciones trigonométricas de fases en radianes.",
    "Pensar que el periodo depende de la amplitud (en el muelle y en el péndulo de ángulo pequeño no).",
    "Creer que la masa influye en el periodo de un péndulo simple.",
    "Olvidar que la aceleración es máxima en los extremos y nula en el centro (al contrario que la velocidad).",
  ],
  ejercicios: [
    B("Define elongación, amplitud, periodo y frecuencia.", "Distancia al equilibrio; elongación máxima; tiempo de una oscilación; oscilaciones por segundo."),
    B("Un oscilador realiza 120 oscilaciones en un minuto. Calcula f, T y ω.", "f = 2 Hz; T = 0,5 s; ω = 4π rad/s."),
    B("¿Qué condición debe cumplir la aceleración para que un movimiento sea armónico simple?", "Ser proporcional a la elongación y de sentido contrario: a = −ω²x."),
    B("¿Dónde es máxima la velocidad de un MAS? ¿Y la aceleración?", "Velocidad en el centro; aceleración en los extremos."),
    B("Dada x = 0,2 sen(10t), calcula v<sub>máx</sub> y a<sub>máx</sub>.", "v<sub>máx</sub> = 2 m/s; a<sub>máx</sub> = 20 m/s²."),
    B("Calcula el periodo de una masa de 1 kg unida a un muelle de 100 N/m.", "T = 2π√(1/100) = 0,628 s."),
    B("¿Qué ocurre con el periodo de un muelle si la masa se cuadruplica?", "Se duplica."),
    B("Calcula el periodo de un péndulo de 2 m en la Tierra y en la Luna (g = 1,62 m/s²).", "Tierra: 2,84 s. Luna: 6,98 s."),
    B("¿Cómo cambia la energía de un oscilador si se triplica la amplitud?", "Se multiplica por 9."),
    B("¿Qué es la resonancia? Pon un ejemplo útil y otro perjudicial.", "Amplitud máxima cuando la frecuencia externa coincide con la natural. Útil: caja de una guitarra. Perjudicial: puente de Tacoma."),
    B("¿Para qué sirven los amortiguadores de un coche?", "Para que la oscilación tras un bache se detenga rápidamente sin rebotes (amortiguamiento crítico)."),
    B("Enuncia la ley de Hooke.", "La fuerza de un muelle es proporcional a su deformación y de sentido contrario: F = −kx."),
    M("Escribe la ecuación de un MAS de A = 3 cm y f = 5 Hz si en t = 0 está en el extremo negativo.", "ω = 10π rad/s. x(0) = −A → φ₀ = 3π/2 (o −π/2). x = 0,03 sen(10πt − π/2) m."),
    M("Una partícula describe x = 0,1 cos(2πt). Calcula x, v y a en t = 1/8 s.", "Fase π/4: x = 0,0707 m; v = −0,2π sen(π/4) = −0,444 m/s; a = −4π² · 0,0707 = −2,79 m/s²."),
    M("En un MAS, v<sub>máx</sub> = 2 m/s y a<sub>máx</sub> = 8 m/s². Calcula ω, A y T.", "ω = 8/2 = 4 rad/s; A = 2/4 = 0,5 m; T = π/2 = 1,57 s."),
    M("Al colgar una masa de 0,5 kg de un muelle, este se alarga 10 cm. Calcula k y el periodo de oscilación.", "k = mg/Δl = 49 N/m. T = 2π√(0,5/49) = 0,635 s."),
    M("Una masa de 2 kg oscila con un muelle de 200 N/m y A = 0,1 m. ¿En qué posición la energía cinética es igual a la potencial?", "½kx² = ½·(½kA²) → x = A/√2 = ±0,0707 m."),
    M("¿Qué velocidad tiene la masa anterior cuando x = 0,06 m?", "ω = 10 rad/s; v = 10√(0,01 − 0,0036) = 0,8 m/s."),
    M("¿Cuánto tarda un oscilador en ir desde el centro hasta la mitad de la amplitud? Exprésalo en función de T.", "sen(ωt) = 1/2 → ωt = π/6 → t = T/12."),
    M("Un péndulo de un reloj atrasa en verano. ¿Por qué? ¿Cómo se corrige?", "Con el calor la varilla se dilata, L aumenta y T también: el reloj va lento. Se acorta el péndulo."),
    M("Un péndulo tiene un periodo de 2 s en la Tierra. ¿Cuál sería en un planeta con g = 4,9 m/s²?", "T' = 2√2 = 2,83 s."),
    M("La gráfica x-t de un MAS muestra un máximo de 4 cm, y la curva corta el eje en t = 0 (subiendo), 0,25 s y 0,5 s. Escribe la ecuación.", "T = 0,5 s; ω = 4π rad/s; φ₀ = 0. x = 0,04 sen(4πt) m."),
    A("(Tipo PAU) Una masa de 0,5 kg unida a un muelle oscila con x = 0,08 sen(5t + π/3) (SI). Calcula: a) k; b) la energía mecánica; c) la velocidad y la aceleración en t = 0; d) el primer instante en que pasa por el equilibrio.", "a) k = m·ω² = 12,5 N/m. b) E = ½ · 12,5 · 0,0064 = 0,04 J. c) v = 0,4 cos(π/3) = 0,2 m/s; a = −2 sen(π/3) = −1,73 m/s². d) 5t + π/3 = π → t = 2π/15 = 0,419 s."),
    A("Un bloque de 1 kg sobre una mesa sin rozamiento, unido a un muelle de 400 N/m, recibe un golpe en el equilibrio que le da 2 m/s. Calcula la amplitud, la ecuación y la fuerza máxima del muelle.", "ω = 20 rad/s; A = v/ω = 0,1 m; x = 0,1 sen(20t); F<sub>máx</sub> = kA = 40 N."),
    A("Dos muelles de constantes k₁ y k₂ se unen en paralelo y en serie a la misma masa. Deduce el periodo en cada caso.", "Paralelo: k = k₁ + k₂, T = 2π√(m/(k₁ + k₂)). Serie: 1/k = 1/k₁ + 1/k₂, T = 2π√(m(k₁ + k₂)/(k₁k₂))."),
    A("Demuestra que una partícula que cae por un túnel recto que atraviesa la Tierra (homogénea, sin rozamiento) describe un MAS y calcula su periodo.", "Dentro, g = g₀·r/R → a = −(g₀/R)·x: MAS con ω = √(g₀/R). T = 2π√(6,37·10⁶/9,8) = 5065 s ≈ 84 min."),
    A("Un péndulo de 1 m se suelta desde 60°. ¿Sirve la fórmula T = 2π√(L/g)? Calcula la velocidad en el punto más bajo.", "No: el ángulo es grande y el periodo real es un 7 % mayor. Por energía: v = √(2gL(1 − cos 60°)) = √9,8 = 3,13 m/s."),
    A("Una masa colgada de un muelle vertical oscila con un periodo de 0,6 s. ¿Cuánto se alargó el muelle al colgarla?", "T = 2π√(m/k) = 2π√(Δl/g) → Δl = gT²/4π² = 9,8 · 0,36 / 39,5 = 0,089 m."),
    A("La amplitud de un oscilador amortiguado se reduce a la mitad en 10 s. ¿Qué fracción de la energía inicial queda a los 20 s?", "A los 20 s la amplitud es A₀/4; la energía, ∝ A², es 1/16 de la inicial."),
  ],
  quiz: [
    q4("En un MAS, la aceleración es…", ["constante", "proporcional a x y de sentido contrario", "proporcional a v", "nula"], 1, "a = −ω²x."),
    q4("La amplitud es…", ["el tiempo de una oscilación", "la elongación máxima", "la fase", "la frecuencia"], 1, "A."),
    q4("La pulsación se relaciona con el periodo por…", ["ω = 2πT", "ω = 2π/T", "ω = T/2π", "ω = 1/T"], 1, "rad/s."),
    q4("La frecuencia se mide en…", ["s", "Hz", "rad", "m"], 1, "Oscilaciones por segundo."),
    q4("La velocidad es máxima…", ["en los extremos", "en el centro", "en A/2", "siempre igual"], 1, "v<sub>máx</sub> = Aω."),
    q4("La aceleración es nula…", ["en los extremos", "en el centro", "nunca", "siempre"], 1, "x = 0."),
    q4("La velocidad en función de x es…", ["ω(A − x)", "±ω√(A² − x²)", "ωx", "Aω²"], 1, "Por sen² + cos² = 1."),
    q4("El MAS es la proyección de…", ["un MRUA", "un MCU", "una caída libre", "un tiro parabólico"], 1, "Sobre un diámetro."),
    q4("El periodo de un muelle es…", ["2π√(k/m)", "2π√(m/k)", "2πmk", "√(m/k)"], 1, "T = 2π√(m/k)."),
    q4("Si se duplica la amplitud de un muelle, el periodo…", ["se duplica", "no cambia", "se reduce a la mitad", "se cuadruplica"], 1, "Independiente de A."),
    q4("La energía de un oscilador es proporcional a…", ["A", "A²", "1/A", "√A"], 1, "E = ½kA²."),
    q4("Las energías cinética y potencial son iguales en x =", ["A/2", "A/√2", "A", "0"], 1, "½kx² = ¼kA²."),
    q4("El periodo de un péndulo simple depende de…", ["la masa", "la longitud y g", "la amplitud grande", "el color"], 1, "T = 2π√(L/g)."),
    q4("La aproximación del péndulo es válida para ángulos…", ["grandes", "pequeños", "de 90°", "cualquiera"], 1, "sen θ ≈ θ."),
    q4("Si la longitud de un péndulo se cuadruplica, el periodo…", ["se cuadruplica", "se duplica", "no cambia", "se reduce"], 1, "√4."),
    q4("Un péndulo en la Luna oscila…", ["más rápido", "más lento", "igual", "no oscila"], 1, "g menor, T mayor."),
    q4("En un movimiento amortiguado disminuye…", ["el periodo", "la amplitud", "la masa", "la frecuencia natural"], 1, "Se disipa energía."),
    q4("Los amortiguadores de un coche buscan un amortiguamiento…", ["nulo", "crítico", "débil", "negativo"], 1, "Sin rebotes."),
    q4("La resonancia ocurre cuando la frecuencia externa…", ["es cero", "coincide con la natural", "es muy alta", "es el doble"], 1, "Amplitud máxima."),
    q4("El isocronismo del péndulo lo descubrió…", ["Newton", "Galileo", "Hooke", "Foucault"], 1, "En la catedral de Pisa."),
  ],
  examen: [
    q4("x = 0,1 sen(πt): el periodo es…", ["2 s", "π s", "1 s", "0,5 s"], 0, "2π/π."),
    q4("x = 0,1 sen(πt): v<sub>máx</sub> =", ["0,314 m/s", "0,1 m/s", "π m/s", "0,987 m/s"], 0, "Aω."),
    q4("Masa 0,5 kg, k = 50 N/m: ω =", ["10 rad/s", "100 rad/s", "5 rad/s", "25 rad/s"], 0, "√(k/m)."),
    q4("k = 100 N/m, A = 0,2 m: E =", ["2 J", "20 J", "10 J", "4 J"], 0, "½kA²."),
    q4("Péndulo de 0,25 m (g ≈ π²): T =", ["1 s", "0,5 s", "2 s", "0,25 s"], 0, "2π√(0,25/π²)."),
    q4("En x = A/2, E<sub>c</sub>/E =", ["3/4", "1/4", "1/2", "1"], 0, "1 − 1/4."),
    q4("Si la masa de un muelle se reduce a la cuarta parte, la frecuencia…", ["se duplica", "se reduce a la mitad", "se cuadruplica", "no cambia"], 0, "f ∝ 1/√m."),
    q4("a = −25x (SI) corresponde a un MAS con T =", ["0,4π s", "5 s", "25 s", "2π/25 s"], 0, "ω = 5 → T = 2π/5."),
  ],
  feynman: ["Qué tiene de especial un movimiento armónico simple", "Por qué el periodo de un muelle no depende de cuánto lo estires", "Por qué un péndulo no depende de la masa", "Cómo pasa la energía de potencial a cinética", "Qué es la resonancia y por qué derriba puentes", "Por qué los relojes usan osciladores"],
  mapa: mapaB("MAS", [["Ecuación", "x = A sen(ωt + φ₀)", "var(--pen)"], ["Cinemática", "v = Aω cos ; a = −ω²x", "var(--leaf)"], ["Dinámica", "F = −kx ; T = 2π√(m/k)", "var(--red)"], ["Energía", "E = ½kA²", "var(--muted)"]]),
  tarjetas: [
    ["Ecuación del MAS", "x = A · sen(ω·t + φ₀)."],
    ["Pulsación", "ω = 2π/T = 2π·f (rad/s)."],
    ["Velocidad", "v = Aω·cos(ωt + φ₀) = ±ω√(A² − x²)."],
    ["Aceleración", "a = −ω²·x."],
    ["Valores máximos", "v<sub>máx</sub> = Aω; a<sub>máx</sub> = Aω²."],
    ["Ley de Hooke", "F = −k·x."],
    ["Periodo de un muelle", "T = 2π·√(m/k)."],
    ["Energía", "E = ½kA²; E<sub>p</sub> = ½kx²."],
    ["Péndulo simple", "T = 2π·√(L/g), ángulos pequeños."],
    ["Isocronismo", "El periodo no depende de la amplitud."],
    ["Amortiguamiento", "La amplitud decrece por rozamiento."],
    ["Resonancia", "Amplitud máxima si f externa = f natural."],
  ],
  glosario: [
    ["Movimiento periódico", "Movimiento que se repite a intervalos iguales de tiempo."],
    ["Oscilación", "Movimiento de ida y vuelta en torno a una posición de equilibrio."],
    ["Elongación", "Distancia a la posición de equilibrio en cada instante."],
    ["Amplitud", "Elongación máxima."],
    ["Fase", "Argumento de la función seno; indica el estado de oscilación."],
    ["Fase inicial", "Fase en el instante t = 0."],
    ["Pulsación", "Frecuencia angular, 2π veces la frecuencia."],
    ["Fuerza recuperadora", "Fuerza que tiende a devolver el cuerpo al equilibrio."],
    ["Constante elástica", "Fuerza por unidad de deformación de un muelle (N/m)."],
    ["Oposición de fase", "Desfase de π entre dos oscilaciones."],
    ["Isocronismo", "Independencia del periodo respecto a la amplitud."],
    ["Amortiguamiento", "Disminución de la amplitud por pérdida de energía."],
    ["Oscilación forzada", "Oscilación mantenida por una fuerza externa periódica."],
    ["Frecuencia natural", "Frecuencia con la que oscila libremente un sistema."],
    ["Resonancia", "Aumento de la amplitud cuando se fuerza a la frecuencia natural."],
  ],
  situacion: {
    titulo: "Medimos la gravedad con un péndulo",
    reto: "Un centro de investigación quiere comparar el valor de g en distintos institutos de España. Vuestro equipo debe medir g en el vuestro con un péndulo casero, con la mayor precisión posible, y enviar los resultados con su incertidumbre.",
    pasos: [
      "Construid un péndulo con un hilo y una masa pequeña y densa; medid su longitud hasta el centro de la masa.",
      "Medid el tiempo de 20 oscilaciones pequeñas para cinco longitudes distintas, repitiendo cada medida tres veces.",
      "Representad T² frente a L y obtened g a partir de la pendiente (4π²/g).",
      "Comprobad que el periodo no depende de la masa ni de la amplitud (si es pequeña) y qué pasa con ángulos grandes.",
      "Calculad la incertidumbre y comparad con el valor teórico de vuestra latitud.",
    ],
    producto: "Un informe de laboratorio con la gráfica, el valor de g y su incertidumbre.",
    evaluacion: ["El montaje y la toma de datos son cuidadosos y repetidos.", "La gráfica T²-L está bien hecha y se obtiene g de la pendiente.", "Se analizan las fuentes de error y la incertidumbre.", "Las conclusiones se comparan con el valor esperado."],
  },
  familias: [
    "Medid el periodo de un columpio con poco y con mucho balanceo y comprobad si cambia.",
    "Colgad un objeto de una goma elástica y contad sus oscilaciones por minuto con distintas masas.",
    "Observad cuánto tarda en pararse un columpio y comentad el amortiguamiento.",
    "Ved juntos el vídeo del puente de Tacoma Narrows y explicad qué es la resonancia.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Vibraciones y ondas»: movimiento oscilatorio, variables cinemáticas de un cuerpo oscilante y conservación de la energía en estos sistemas; movimiento armónico simple, oscilador de muelle y péndulo simple; oscilaciones amortiguadas y forzadas, resonancia y sus aplicaciones.`,
    ideas: [
      "Simulación PhET «Masas y resortes» y «Laboratorio de péndulo».",
      "Medida de g con un péndulo y la app phyphox (acelerómetro del móvil).",
      "Análisis del vídeo del puente de Tacoma y de los amortiguadores de rascacielos.",
      "Registro del MAS de un muelle con el acelerómetro del móvil colgado.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Laboratorio de péndulo» (PhET)", url: "https://phet.colorado.edu/es/simulations/pendulum-lab" },
    { t: "Simulación «Masas y resortes» (PhET)", url: "https://phet.colorado.edu/es/simulations/masses-and-springs" },
  ],
  revisado: "2026-11-21",
};
