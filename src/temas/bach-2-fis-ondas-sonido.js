// Física 2º Bachillerato · Ondas mecánicas y sonido (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const sen = (fase = 0, amp = 0.38, ciclos = 2, y0 = 0.5) => Array.from({ length: 61 }, (_, i) => [i / 60, y0 + amp * Math.sin((i / 60) * ciclos * 2 * Math.PI + fase)]);

// Onda con longitud de onda y amplitud.
const ondaSVG = marco("Onda armónica transversal: la longitud de onda es la distancia entre dos crestas y la amplitud, el desplazamiento máximo", `
  <path d="M14 90 H 248" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="4 3"/>
  <polyline points="${Array.from({ length: 81 }, (_, i) => `${(14 + i * 2.9).toFixed(1)},${(90 - 44 * Math.sin((i / 80) * 4 * Math.PI)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M43 34 H 159" stroke="var(--red)" stroke-width="2"/><path d="M43 28 V 40 M159 28 V 40" stroke="var(--red)" stroke-width="2"/>${T(101, 26, "λ", { fs: 15, b: true, c: "var(--red)" })}
  <path d="M188 90 V 46" stroke="var(--leaf)" stroke-width="2"/>${T(196, 72, "A", { fs: 14, b: true, c: "var(--leaf)", a: "start" })}
  ${T(130, 168, "v = λ · f = λ / T", { fs: 13, b: true })}`);

// Transversal vs longitudinal.
const tiposSVG = compara("Ondas transversales y longitudinales", ["Transversal", ["vibra ⊥ a la", "propagación", "cuerda, luz", "crestas y valles"]], ["Longitudinal", ["vibra ∥ a la", "propagación", "sonido, muelle", "compresiones"]], "var(--pen)", "var(--leaf)");

// Interferencia: dos ondas que se suman.
const interfSVG = graf("Interferencia: dos ondas en fase se suman (constructiva) y en oposición de fase se anulan (destructiva)", "x", "y", [
  { p: sen(0, 0.12, 2, 0.78), c: "var(--pen)", t: "" },
  { p: sen(0, 0.12, 2, 0.78), c: "var(--leaf)", t: "", dash: true },
  { p: sen(0, 0.2, 2, 0.32), c: "var(--red)", t: "suma" },
], `<text x="44" y="22" font-size="10" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">en fase: se suman</text>`);

// Estacionaria con nodos.
const estacSVG = marco("Onda estacionaria en una cuerda fija por los dos extremos: nodos que no vibran y vientres de amplitud máxima", `
  ${[1, -1, 0.5, -0.5].map((s, j) => `<polyline points="${Array.from({ length: 61 }, (_, i) => `${(20 + i * 3.67).toFixed(1)},${(84 - s * 40 * Math.sin((i / 60) * 3 * Math.PI)).toFixed(1)}`).join(" ")}" fill="none" stroke="${j < 2 ? "var(--pen)" : "var(--muted)"}" stroke-width="${j < 2 ? 2.6 : 1.4}"/>`).join("")}
  ${[20, 93.3, 166.7, 240].map((x) => `<circle cx="${x}" cy="84" r="5" fill="var(--red)"/>`).join("")}
  ${T(93, 108, "N", { fs: 12, b: true, c: "var(--red)" })}${T(167, 108, "N", { fs: 12, b: true, c: "var(--red)" })}
  ${T(57, 34, "V", { fs: 12, b: true, c: "var(--pen)" })}${T(130, 34, "V", { fs: 12, b: true, c: "var(--pen)" })}${T(203, 34, "V", { fs: 12, b: true, c: "var(--pen)" })}
  ${T(130, 162, "3.er armónico: L = 3λ/2", { fs: 12, b: true })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Ondas mecánicas y sonido",
  minutos: 120,
  objetivos: [
    "Describir qué es una onda, sus tipos y sus magnitudes características",
    "Escribir e interpretar la ecuación de una onda armónica y su doble periodicidad",
    "Relacionar energía, amplitud e intensidad de una onda y su atenuación con la distancia",
    "Explicar con el principio de Huygens la reflexión, la refracción, la difracción y la interferencia",
    "Estudiar las ondas estacionarias en cuerdas y tubos",
    "Describir las cualidades del sonido, calcular niveles de intensidad en decibelios y aplicar el efecto Doppler",
  ],
  claves: ["onda", "onda mecánica", "transversal", "longitudinal", "longitud de onda", "número de onda", "velocidad de propagación", "ecuación de onda", "intensidad", "principio de Huygens", "difracción", "interferencia", "onda estacionaria", "decibelio", "efecto Doppler"],
  pregunta: {
    texto: "Cuando ves una ola en el mar, ¿el agua viaja hacia la playa?",
    respuesta: "<mark>No: lo que viaja es la energía</mark>, no el agua. Si observas un corcho flotando, sube y baja (y da pequeñas vueltas), pero no avanza con la ola. Una onda es la propagación de una perturbación que transporta energía y cantidad de movimiento sin transportar materia. Por eso un tsunami puede cruzar el océano sin que el agua de mar adentro se desplace con él.",
  },
  lectura: {
    titulo: "Escuchar un terremoto al otro lado del planeta",
    html: `<p>El 22 de mayo de 1960, un terremoto de magnitud 9,5 sacudió Valdivia, en Chile: el más intenso jamás registrado. Pocos minutos después, los sismógrafos de todo el mundo comenzaron a moverse. Primero llegaron las ondas P, longitudinales y más rápidas, que comprimen y estiran las rocas; después, las ondas S, transversales, más lentas; y por último, las ondas superficiales, las más destructivas. Unas quince horas después, un tsunami alcanzó Hawái, a 10.000 km, y al día siguiente llegó a Japón.</p><p>Comparando los tiempos de llegada de las ondas P y S a cientos de estaciones, los sismólogos han reconstruido el interior de la Tierra sin haber podido excavar más de 12 km. Así descubrieron que las ondas S no atraviesan el núcleo externo, lo que demuestra que es líquido. Las ondas, sean sísmicas, sonoras o las de una cuerda de guitarra, siguen las mismas leyes: las que vas a estudiar en este tema.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 ¿Qué es una onda? Tipos de ondas", p: [
      "Una <mark>onda</mark> es la propagación de una perturbación (una vibración) de un punto a otro del espacio, que transporta energía y cantidad de movimiento <b>sin transporte neto de materia</b>. Cada punto del medio oscila alrededor de su posición de equilibrio y transmite la vibración a los puntos vecinos. Según el medio, las ondas son <b>mecánicas</b>, si necesitan un medio material para propagarse (el sonido, las olas, las ondas sísmicas, las de una cuerda), o <b>electromagnéticas</b>, que pueden propagarse en el vacío (la luz, las ondas de radio).",
      "Según la dirección de vibración, las ondas son <b>transversales</b>, si las partículas vibran perpendicularmente a la dirección de propagación (una cuerda, la luz, las ondas sísmicas S), o <b>longitudinales</b>, si vibran en la misma dirección (el sonido, un muelle que se comprime, las ondas sísmicas P). Las transversales forman crestas y valles; las longitudinales, compresiones y enrarecimientos. Las mecánicas transversales no se propagan en los fluidos (que no resisten la cizalla); por eso las ondas S no atraviesan el núcleo externo líquido. También se clasifican en unidimensionales, bidimensionales y tridimensionales según el número de dimensiones en que se propagan.",
    ], svg: tiposSVG, video: V("ond-a", "La ecuación de una onda", "ecuación de una onda") }),
    bloque({ h: "1.2 Magnitudes características de una onda", p: [
      "Una onda <b>armónica</b> es la que produce un foco que vibra con un MAS. Sus magnitudes son: la <b>amplitud</b> A, la elongación máxima de los puntos del medio; el <b>periodo</b> T y la <b>frecuencia</b> f, los del MAS del foco, que son los mismos en todos los puntos; y la <mark>longitud de onda</mark> λ, la distancia entre dos puntos consecutivos que vibran en fase (por ejemplo, dos crestas), que es lo que avanza la onda en un periodo.",
      "De aquí se deduce la relación fundamental: <b>v = λ / T = λ · f</b>, donde v es la velocidad de propagación. Se definen también la <b>pulsación</b> ω = 2π/T y el <b>número de onda</b> <b>k = 2π / λ</b>, que se mide en rad/m e indica cuántas longitudes de onda caben en 2π metros. Con ellas, v = ω/k. Un dato importante: cuando una onda pasa de un medio a otro, su <b>frecuencia no cambia</b> (la impone el foco), pero sí cambian su velocidad y su longitud de onda.",
    ], extra: formula("v = λ · f = λ / T ; k = 2π / λ ; v = ω / k"), svg: ondaSVG }),
    bloque({ h: "1.3 La velocidad de propagación", p: [
      "La velocidad de una onda mecánica depende de las propiedades del <b>medio</b>, no del foco: de su elasticidad (lo que tiende a recuperar la forma) y de su inercia (la masa que hay que mover). En una cuerda tensa, <mark>v = √(T / μ)</mark>, donde T es la tensión y μ la densidad lineal (masa por unidad de longitud). Por eso, al tensar una cuerda de guitarra el sonido es más agudo: la onda va más rápida y, para la misma longitud, la frecuencia aumenta.",
      "El <b>sonido</b> se propaga a unos <b>340 m/s</b> en el aire a 20 °C (y aumenta unos 0,6 m/s por cada grado), a unos 1500 m/s en el agua y a unos 5000 m/s en el acero. En los gases, v = √(γ·R·T/M): depende de la temperatura y de la masa molar, pero no de la presión. Por eso con helio, mucho más ligero que el aire, la voz suena aguda. Es importante distinguir la velocidad de <b>propagación</b> de la onda, constante en un medio, de la velocidad de <b>vibración</b> de cada punto, que cambia continuamente como en un MAS.",
    ], extra: formula("Cuerda: v = √(T / μ) ; sonido en el aire ≈ 340 m/s"), svg: barras("Velocidad del sonido en distintos medios", "v (m/s)", [["Acero", 5000, "var(--muted)", "5000"], ["Vidrio", 4500, "var(--leaf)", "4500"], ["Agua", 1500, "var(--pen)", "1500"], ["Aire", 340, "var(--red)", "340"]]) }),
    bloque({ h: "1.4 La ecuación de una onda armónica", p: [
      "Si el foco, en x = 0, vibra con y(0, t) = A·sen(ω·t), un punto situado a una distancia x repite ese movimiento con un retraso x/v. Su elongación es y(x, t) = A·sen[ω·(t − x/v)], que se escribe <mark>y(x, t) = A · sen(ω·t − k·x)</mark>. Es la <b>ecuación de una onda armónica</b> que avanza en el sentido positivo del eje x. Si avanza en sentido negativo, el signo es +: y = A·sen(ω·t + k·x). Puede llevar además una fase inicial φ₀.",
      "Para resolver problemas de la PAU, identifica los coeficientes: la amplitud A es lo que multiplica al seno, ω es el coeficiente de t y k el de x. De ahí salen T = 2π/ω, f = ω/2π, λ = 2π/k y v = ω/k. El sentido de propagación lo da el signo relativo entre los términos en t y en x. Si te dan la ecuación con otra forma, por ejemplo y = 0,02 sen 2π(5t − 0,5x), conviene reescribirla: ω = 10π rad/s y k = π rad/m, así que f = 5 Hz, λ = 2 m y v = 10 m/s.",
    ], extra: formula("y(x, t) = A · sen(ω·t ∓ k·x + φ₀) ; − : sentido +x ; + : sentido −x"), svg: pasos("Leer la ecuación de una onda", ["A: lo que multiplica al seno", "ω: coeficiente de t → T, f", "k: coeficiente de x → λ", "v = ω/k ; signo → sentido"], "var(--pen)") }),
    bloque({ h: "1.5 Doble periodicidad, desfase y velocidad de vibración", p: [
      "La función de onda es <b>doblemente periódica</b>. En un punto fijo (x constante), y varía con el tiempo como un MAS de periodo T: es periódica en el tiempo. En un instante fijo (t constante), y varía con la posición como una sinusoide de periodo λ: es periódica en el espacio; es como una fotografía de la onda. Por eso hay dos tipos de gráficas: y-t (cómo vibra un punto) e y-x (la forma de la onda en un instante).",
      "El <mark>desfase</mark> entre dos puntos separados una distancia Δx es <b>Δφ = k · Δx = 2π·Δx/λ</b>. Si Δx es un número entero de longitudes de onda, los puntos vibran <b>en fase</b>; si es un número impar de semilongitudes, en <b>oposición de fase</b>. Del mismo modo, el desfase de un punto entre dos instantes es Δφ = ω·Δt. La <b>velocidad de vibración</b> de un punto se obtiene derivando respecto al tiempo: v<sub>y</sub> = A·ω·cos(ω·t − k·x), con valor máximo A·ω; y la aceleración, a<sub>y</sub> = −ω²·y. No confundas A·ω con la velocidad de propagación v = λ·f.",
    ], extra: formula("Δφ = k·Δx = 2π·Δx/λ ; v<sub>vibración</sub> = A·ω·cos(ωt − kx)"), svg: rejilla("Desfase entre dos puntos", ["Δx", "Δφ", "Vibran"], [["λ, 2λ, 3λ…", "2π, 4π…", "en fase"], ["λ/2, 3λ/2…", "π, 3π…", "en oposición"], ["λ/4", "π/2", "en cuadratura"]], "var(--leaf)") }),
    bloque({ h: "1.6 Energía e intensidad de una onda", p: [
      "Cada punto del medio oscila con un MAS de energía ½·k·A² = ½·m·ω²·A², así que la energía que transporta una onda es <b>proporcional al cuadrado de la amplitud y al cuadrado de la frecuencia</b>. La <mark>intensidad</mark> I de una onda es la energía que atraviesa por unidad de tiempo la unidad de superficie perpendicular a la propagación: <b>I = P / S</b>, en W/m², donde P es la potencia del foco.",
      "Para un foco puntual que emite en todas direcciones (onda esférica), la energía se reparte sobre esferas cada vez mayores, de área 4πr². Por tanto <b>I = P / (4π·r²)</b>: la intensidad disminuye con el cuadrado de la distancia, y la amplitud, con la distancia: <b>I₁/I₂ = r₂²/r₁²</b> y A₁/A₂ = r₂/r₁. Es la <b>atenuación</b> por la geometría. Además existe la <b>absorción</b>: el medio convierte parte de la energía en calor y la intensidad disminuye exponencialmente con la distancia. Los sonidos agudos se absorben más que los graves; por eso de un concierto lejano solo oyes los bajos.",
    ], extra: formula("I = P / S = P / (4π·r²) ; I₁ / I₂ = r₂² / r₁²"), svg: ficha("Intensidad de una onda", "I = P / 4πr²", ["E ∝ A² · f²", "W/m²", "I ∝ 1/r² ; A ∝ 1/r", "absorción del medio"], "var(--red)") }),
    bloque({ h: "2.1 El principio de Huygens: reflexión, refracción y difracción", p: [
      "En 1678, Christiaan Huygens propuso un método para saber cómo avanza un frente de ondas (la superficie que une los puntos que vibran en fase): <mark>cada punto de un frente de ondas se comporta como un foco de ondas secundarias</mark>, y el nuevo frente es la envolvente de todas ellas. Con este principio se explican los tres fenómenos que ocurren cuando una onda encuentra un obstáculo o cambia de medio.",
      "La <b>reflexión</b> es el cambio de dirección de una onda al chocar con una superficie y volver al mismo medio: el ángulo de incidencia es igual al de reflexión; así se producen el eco y la reverberación. La <b>refracción</b> es el cambio de dirección al pasar a otro medio con distinta velocidad: sen i / sen r = v₁ / v₂ (ley de Snell). La <b>difracción</b> es la capacidad de una onda de rodear obstáculos y abrirse al pasar por una rendija; es apreciable cuando el tamaño del obstáculo o la rendija es comparable a la longitud de onda. Por eso oyes a alguien que habla detrás de una esquina (λ del sonido ≈ 1 m) pero no lo ves (λ de la luz ≈ 0,5 μm).",
    ], extra: formula("Reflexión: i = r ; Refracción: sen i / sen r = v₁ / v₂"), svg: rejilla("Fenómenos ondulatorios", ["Fenómeno", "Qué ocurre", "Ejemplo"], [["Reflexión", "rebota, i = r", "eco"], ["Refracción", "cambia v y dirección", "olas en la costa"], ["Difracción", "rodea obstáculos", "oír tras una esquina"], ["Interferencia", "dos ondas se suman", "zonas sin sonido"]], "var(--pen)") }),
    bloque({ h: "2.2 La interferencia", p: [
      "Cuando dos ondas coinciden en un punto, la perturbación resultante es la <b>suma</b> de las perturbaciones de cada una (principio de superposición), y después cada onda sigue su camino como si no se hubieran encontrado. Este fenómeno se llama <mark>interferencia</mark>. Si dos focos coherentes (misma frecuencia y desfase constante) emiten en fase, en un punto situado a distancias x₁ y x₂ de ellos la amplitud resultante depende de la <b>diferencia de caminos</b> Δx = |x₁ − x₂|.",
      "Si Δx = n·λ (un número entero de longitudes de onda), las ondas llegan en fase y se refuerzan: <b>interferencia constructiva</b>, con amplitud 2A. Si Δx = (2n + 1)·λ/2 (un número impar de semilongitudes de onda), llegan en oposición y se anulan: <b>interferencia destructiva</b>. La interferencia es una prueba de la naturaleza ondulatoria: dos sonidos pueden producir silencio. Así funcionan los <b>auriculares con cancelación de ruido</b>, que emiten una onda en oposición de fase con el ruido exterior, y así se producen los patrones de colores en las pompas de jabón, como verás en óptica.",
    ], extra: formula("Constructiva: Δx = n·λ ; Destructiva: Δx = (2n + 1)·λ/2"), svg: interfSVG }),
    bloque({ h: "2.3 Ondas estacionarias", p: [
      "Cuando una onda se refleja en un extremo fijo, la onda incidente y la reflejada interfieren. El resultado es una <mark>onda estacionaria</mark>: no parece avanzar, sino que hay puntos que no vibran nunca, los <b>nodos</b>, y otros que vibran con amplitud máxima, los <b>vientres</b>. Su ecuación es y = 2A·sen(k·x)·cos(ω·t): cada punto vibra con una amplitud que depende de su posición. La distancia entre dos nodos consecutivos es λ/2. Una onda estacionaria no transporta energía.",
      "En una <b>cuerda fija por los dos extremos</b> (guitarra, violín, piano), los extremos deben ser nodos, así que solo son posibles ciertas longitudes de onda: L = n·λ/2, es decir, <b>λₙ = 2L/n</b> y <b>fₙ = n·v/(2L)</b>. La frecuencia más baja (n = 1) es el <b>modo fundamental</b> y las demás, múltiplos suyos, son los <b>armónicos</b>. En un <b>tubo abierto</b> por los dos extremos (flauta) ocurre lo mismo; en un <b>tubo cerrado</b> por un extremo (clarinete), solo aparecen los armónicos impares: fₙ = n·v/(4L), con n = 1, 3, 5… Así se explica por qué los instrumentos suenan a notas concretas y qué hacen tus dedos al pisar una cuerda: acortar L.",
    ], extra: formula("Cuerda o tubo abierto: fₙ = n·v / 2L ; Tubo cerrado: fₙ = n·v / 4L (n impar)"), svg: estacSVG, video: V("ond-d", "Ondas estacionarias en una cuerda", "ondas estacionarias cuerda") }),
    bloque({ h: "2.4 El sonido y sus cualidades", p: [
      "El <b>sonido</b> es una onda mecánica longitudinal que se propaga en un medio material como variaciones de presión. El oído humano percibe frecuencias entre unos <b>20 Hz y 20.000 Hz</b>; por debajo están los <b>infrasonidos</b> (los usan los elefantes y los producen los terremotos) y por encima los <b>ultrasonidos</b> (murciélagos, delfines, ecografías). El sonido tiene tres cualidades: la <b>intensidad</b> (fuerte o débil), relacionada con la amplitud; el <b>tono</b> (agudo o grave), relacionado con la frecuencia; y el <b>timbre</b>, que distingue la misma nota en un piano y en una flauta y depende de los armónicos que acompañan al fundamental.",
      "El oído percibe intensidades entre el <b>umbral de audición</b>, I₀ = 10⁻¹² W/m², y el <b>umbral del dolor</b>, unos 1 W/m²: ¡un factor de un billón! Por eso se usa una escala logarítmica, el <mark>nivel de intensidad sonora</mark> en decibelios: <b>β = 10 · log(I / I₀)</b>. El umbral de audición son 0 dB; una conversación, unos 60 dB; el tráfico intenso, 80 dB; y el umbral del dolor, 120 dB. Cada 10 dB más supone una intensidad diez veces mayor, y duplicar la intensidad (por ejemplo, con dos fuentes iguales) solo añade 3 dB.",
    ], extra: formula("β = 10 · log(I / I₀) ; I₀ = 10⁻¹² W/m²"), svg: barras("Niveles sonoros típicos", "β (dB)", [["Avión cerca", 130, "var(--red)", "130"], ["Concierto", 110, "#b45309", "110"], ["Tráfico", 80, "var(--pen)", "80"], ["Conversación", 60, "var(--leaf)", "60"], ["Susurro", 20, "var(--muted)", "20"]]), video: V("ond-b", "Intensidad del sonido y decibelios", "intensidad sonora decibelios") }),
    bloque({ h: "2.5 El efecto Doppler", p: [
      "Cuando una ambulancia se acerca, su sirena suena más aguda, y cuando se aleja, más grave. Es el <mark>efecto Doppler</mark>, descrito por Christian Doppler en 1842: la frecuencia percibida cambia cuando el foco o el observador se mueven. Si el foco se acerca, los frentes de onda se «amontonan» delante de él, la longitud de onda que llega es menor y la frecuencia percibida mayor; si se aleja, ocurre lo contrario.",
      "La expresión general para el sonido es <b>f' = f · (v ± v<sub>o</sub>) / (v ∓ v<sub>f</sub>)</b>, donde v es la velocidad del sonido, v<sub>o</sub> la del observador y v<sub>f</sub> la del foco. Se usan los signos de arriba cuando se acercan y los de abajo cuando se alejan. Si el foco va más rápido que el sonido, los frentes se acumulan en un cono y se produce una <b>onda de choque</b>: el estampido sónico de los aviones supersónicos. El efecto Doppler se usa en los radares de tráfico, en las ecografías Doppler que miden la velocidad de la sangre, en meteorología y, con la luz, para saber que las galaxias se alejan y que el universo se expande.",
    ], extra: formula("f' = f · (v ± v<sub>o</sub>) / (v ∓ v<sub>f</sub>)  (arriba: se acercan)"), svg: pasos("Problema de efecto Doppler", ["Identificar foco y observador", "¿Se acercan o se alejan?", "Acercan: f' mayor", "Aplicar f' = f(v ± vo)/(v ∓ vf)"], "var(--red)"), video: V("ond-c", "El efecto Doppler", "efecto Doppler") }),
    bloque({ h: "3.1 Aplicaciones y contaminación acústica", p: [
      "Las ondas mecánicas tienen muchas aplicaciones. El <b>sónar</b> de barcos y submarinos y la <b>ecolocalización</b> de murciélagos y delfines miden distancias con el tiempo que tarda un eco: d = v·t/2. Las <b>ecografías</b> usan ultrasonidos de 2 a 15 MHz que se reflejan en las fronteras entre tejidos. La <b>sismología</b> estudia el interior de la Tierra y localiza terremotos con las ondas P y S. Y la <b>acústica arquitectónica</b> diseña auditorios con materiales que controlan la reflexión y la absorción del sonido.",
      "El ruido es también un problema ambiental y de salud. La OMS recomienda no superar los 53 dB de ruido de tráfico de día y 45 dB de noche: por encima, aumentan los trastornos del sueño, el estrés y las enfermedades cardiovasculares. La exposición prolongada a más de 85 dB (auriculares a todo volumen, discotecas) puede causar una <mark>pérdida auditiva irreversible</mark>, porque destruye las células ciliadas del oído interno, que no se regeneran. Para reducir el ruido se usan pantallas acústicas, asfaltos fonoabsorbentes, aislamientos y, sobre todo, se limita el volumen en el origen.",
    ], svg: rejilla("Ondas mecánicas en acción", ["Aplicación", "Principio"], [["Sónar, ecolocación", "eco: d = vt/2"], ["Ecografía", "ultrasonidos"], ["Sismología", "ondas P y S"], ["Auriculares ANC", "interferencia"], ["Radar Doppler", "cambio de f"]], "var(--leaf)") }),
  ],
  figura: figura("Ondas mecánicas y sonido", "Ecuación de onda, intensidad, fenómenos ondulatorios y sonido", [["Onda", "y = A sen(ωt − kx)", "v = λf"], ["Intensidad", "I = P/4πr²", "β = 10 log(I/I₀)"], ["Fenómenos", "reflexión, difracción", "interferencia"], ["Doppler", "f' = f(v ± vo)/(v ∓ vf)", "se acerca: agudo"]]),
  video: V("ond-a", "La ecuación de una onda", "ecuación de una onda"),
  ejemplos: [
    { enunciado: "Una onda tiene la ecuación y = 0,03 · sen(20π·t − 4π·x) (SI). Calcula A, f, λ, v y el sentido de propagación.", pasos: ["A = 0,03 m; ω = 20π rad/s → f = 10 Hz, T = 0,1 s.", "k = 4π rad/m → λ = 2π/k = 0,5 m.", "v = λ·f = 5 m/s.", "Signo − entre t y x: avanza hacia +x."], resultado: "A = 3 cm; f = 10 Hz; λ = 0,5 m; v = 5 m/s, hacia x positivas." },
    { enunciado: "Con la onda anterior, calcula la velocidad máxima de vibración y el desfase entre dos puntos separados 20 cm.", pasos: ["v<sub>máx</sub> = A·ω = 0,03 · 20π = 1,88 m/s.", "Δφ = k·Δx = 4π · 0,2 = 0,8π rad."], resultado: "v<sub>vib, máx</sub> ≈ 1,9 m/s (distinta de v = 5 m/s); Δφ = 0,8π rad." },
    { enunciado: "Una cuerda de 0,65 m y 3 g de masa está tensada con 80 N. Calcula la velocidad de las ondas y la frecuencia fundamental.", pasos: ["μ = 0,003/0,65 = 4,62·10⁻³ kg/m.", "v = √(T/μ) = √(80 / 4,62·10⁻³) = 132 m/s.", "f₁ = v/(2L) = 132 / 1,3."], resultado: "v ≈ 132 m/s; f₁ ≈ 101 Hz." },
    { enunciado: "Un altavoz emite 0,5 W en todas direcciones. Calcula la intensidad y el nivel sonoro a 10 m.", pasos: ["I = P/(4πr²) = 0,5 / (4π · 100) = 3,98·10⁻⁴ W/m².", "β = 10 · log(3,98·10⁻⁴ / 10⁻¹²) = 10 · log(3,98·10⁸)."], resultado: "I ≈ 4 · 10⁻⁴ W/m²; β ≈ 86 dB." },
    { enunciado: "Un perro ladra con un nivel de 60 dB. ¿Qué nivel producen 10 perros iguales ladrando a la vez?", pasos: ["La intensidad se multiplica por 10.", "β' = 10·log(10·I/I₀) = 10 + 10·log(I/I₀).", "β' = 10 + 60."], resultado: "β' = 70 dB (no 600 dB)." },
    { enunciado: "Una ambulancia con una sirena de 800 Hz se acerca a 30 m/s a un peatón quieto. ¿Qué frecuencia oye? ¿Y cuando se aleja? (v = 340 m/s)", pasos: ["Acercándose: f' = 800 · 340 / (340 − 30) = 800 · 1,097.", "Alejándose: f' = 800 · 340 / (340 + 30) = 800 · 0,919."], resultado: "877 Hz al acercarse; 735 Hz al alejarse." },
  ],
  errores: [
    "Pensar que una onda transporta materia: transporta energía.",
    "Confundir la velocidad de propagación (λ·f) con la velocidad de vibración de los puntos (máximo A·ω).",
    "Creer que la frecuencia cambia al cambiar de medio: cambian v y λ, no f.",
    "Sumar decibelios como si fueran intensidades (dos fuentes de 60 dB dan 63 dB, no 120 dB).",
    "Equivocar el sentido de propagación: ωt − kx avanza hacia +x.",
    "Usar mal los signos del efecto Doppler: si se acercan, la frecuencia percibida debe aumentar.",
  ],
  ejercicios: [
    B("Define onda y explica la diferencia entre ondas mecánicas y electromagnéticas.", "Propagación de una perturbación que transporta energía sin materia. Las mecánicas necesitan un medio; las electromagnéticas, no."),
    B("Clasifica como transversales o longitudinales: sonido, luz, cuerda de guitarra, ondas sísmicas P y S.", "Longitudinales: sonido, P. Transversales: luz, cuerda, S."),
    B("Una onda tiene f = 50 Hz y λ = 4 m. Calcula su velocidad y su periodo.", "v = 200 m/s; T = 0,02 s."),
    B("Calcula la longitud de onda de un sonido de 440 Hz en el aire y en el agua.", "Aire: 340/440 = 0,77 m. Agua: 1500/440 = 3,4 m."),
    B("En y = 0,1 sen(4πt + 2πx), ¿hacia dónde se propaga la onda? Calcula su velocidad.", "Hacia −x. v = ω/k = 4π/2π = 2 m/s."),
    B("¿Qué es un frente de ondas? Enuncia el principio de Huygens.", "Superficie de puntos en fase. Cada punto del frente es foco de ondas secundarias; el nuevo frente es su envolvente."),
    B("¿Por qué oímos a alguien detrás de una esquina pero no lo vemos?", "Por difracción: λ del sonido (≈ 1 m) es comparable al obstáculo; la de la luz, mucho menor."),
    B("Calcula el nivel sonoro de un sonido de 10⁻⁶ W/m².", "β = 10 log(10⁶) = 60 dB."),
    B("¿En qué cualidad del sonido se diferencian un piano y una guitarra tocando la misma nota?", "En el timbre (armónicos)."),
    B("¿Qué rango de frecuencias oye el ser humano? ¿Qué son los ultrasonidos?", "20 Hz-20 kHz. Sonidos de más de 20 kHz."),
    B("¿Por qué la sirena de una ambulancia suena más aguda al acercarse?", "Por el efecto Doppler: los frentes se acumulan y la frecuencia percibida aumenta."),
    B("Un barco envía un pulso de sónar y recibe el eco a los 0,8 s. ¿Qué profundidad hay? (v = 1500 m/s)", "d = 1500 · 0,8/2 = 600 m."),
    M("Una onda transversal de A = 2 cm, f = 25 Hz y v = 10 m/s avanza hacia −x. En t = 0 y x = 0, y = 0. Escribe su ecuación.", "ω = 50π; k = ω/v = 5π. y = 0,02 sen(50πt + 5πx) m."),
    M("Para y = 0,05 sen(10πt − πx/2) (SI), calcula la elongación y la velocidad de vibración de x = 1 m en t = 0,1 s.", "Fase = π − π/2 = π/2: y = 0,05 m; v = 0,5π cos(π/2) = 0."),
    M("Dos puntos de una onda de 100 Hz que se propaga a 340 m/s están separados 85 cm. ¿Qué desfase tienen?", "λ = 3,4 m. Δφ = 2π · 0,85/3,4 = π/2."),
    M("¿Qué tensión hay que dar a una cuerda de 1 m y 5 g para que su fundamental sea de 200 Hz?", "v = 2Lf = 400 m/s; T = μv² = 0,005 · 1,6·10⁵ = 800 N."),
    M("A 2 m de un foco el nivel sonoro es de 80 dB. ¿Cuál es a 20 m?", "La intensidad se divide por 100: −20 dB. β = 60 dB."),
    M("Calcula la potencia de un foco puntual si a 5 m el nivel sonoro es de 70 dB.", "I = 10⁻⁵ W/m². P = I·4πr² = 10⁻⁵ · 314 = 3,1·10⁻³ W."),
    M("Dos altavoces en fase emiten a 340 Hz. Un oyente está a 4 m de uno y a 5,5 m del otro. ¿Qué tipo de interferencia percibe?", "λ = 1 m. Δx = 1,5 m = 3·λ/2: destructiva."),
    M("Calcula los tres primeros armónicos de un tubo de 0,85 m abierto por los dos extremos y si estuviera cerrado por uno.", "Abierto: f = n·340/1,7 → 200, 400, 600 Hz. Cerrado: f = n·340/3,4 con n impar → 100, 300, 500 Hz."),
    M("Un coche se acerca a 25 m/s a una persona quieta y toca el claxon a 400 Hz. Si la persona se mueve hacia el coche a 5 m/s, ¿qué frecuencia oye?", "f' = 400 · (340 + 5)/(340 − 25) = 438 Hz."),
    M("La intensidad de una onda a 10 m de un foco es 0,4 W/m². ¿Cuál es a 40 m y cómo cambia su amplitud?", "I = 0,4/16 = 0,025 W/m²; la amplitud se divide por 4."),
    A("(Tipo PAU) Una onda en una cuerda tiene la ecuación y = 0,02 cos(100πt − 2πx) (SI). a) Velocidad de propagación. b) Velocidad y aceleración máximas de un punto. c) Distancia entre dos puntos con desfase de π/3. d) Ecuación de la onda reflejada que formaría con ella una estacionaria.", "a) v = 100π/2π = 50 m/s. b) v<sub>máx</sub> = 0,02 · 100π = 6,28 m/s; a<sub>máx</sub> = 0,02 · (100π)² = 1974 m/s². c) Δx = (π/3)/2π = 1/6 m. d) y = 0,02 cos(100πt + 2πx)."),
    A("Una onda estacionaria tiene la ecuación y = 0,04 sen(πx/3) cos(40πt) (SI). Calcula la amplitud, λ y v de las ondas que la forman y la posición de los nodos.", "A = 0,02 m; k = π/3 → λ = 6 m; ω = 40π → f = 20 Hz; v = 120 m/s. Nodos donde sen(πx/3) = 0: x = 0, 3, 6, 9… m."),
    A("Un murciélago vuela a 8 m/s hacia una pared emitiendo ultrasonidos de 40 kHz. ¿Qué frecuencia tiene el eco que percibe?", "La pared recibe f₁ = 40000 · 340/332 = 40.964 Hz. El murciélago la oye acercándose: f₂ = 40.964 · 348/340 = 41.928 Hz ≈ 41,9 kHz."),
    A("Un trabajador está expuesto a 95 dB. ¿Cuántas veces más intensidad recibe que con el límite recomendado de 85 dB? ¿Y cuántas máquinas iguales a una de 85 dB generan 95 dB?", "10¹ = 10 veces; 10 máquinas."),
    A("Una piedra cae a un pozo y el sonido del choque se oye 3 s después de soltarla. ¿Qué profundidad tiene el pozo?", "h = ½·9,8·t₁² y h = 340·t₂, con t₁ + t₂ = 3. 4,9t₁² + 340t₁ − 1020 = 0 → t₁ = 2,88 s; h ≈ 40,6 m."),
    A("Demuestra que la superposición de y₁ = A sen(ωt − kx) e y₂ = A sen(ωt + kx) es una onda estacionaria e indica la distancia entre nodos.", "sen a + sen b = 2 sen((a + b)/2) cos((a − b)/2) → y = 2A cos(kx) sen(ωt). Nodos donde cos(kx) = 0, separados π/k = λ/2."),
    A("Explica con la física de las ondas por qué las ondas S no atraviesan el núcleo externo terrestre y qué se dedujo de ello.", "Las ondas transversales necesitan un medio que resista la cizalla; los líquidos no lo hacen. La sombra de ondas S demostró que el núcleo externo es líquido."),
  ],
  quiz: [
    q4("Una onda transporta…", ["materia", "energía sin materia", "solo masa", "carga"], 1, "Perturbación."),
    q4("El sonido es una onda…", ["transversal electromagnética", "longitudinal mecánica", "transversal mecánica", "estacionaria siempre"], 1, "Compresiones."),
    q4("La luz es una onda…", ["mecánica", "electromagnética", "longitudinal", "sonora"], 1, "Se propaga en el vacío."),
    q4("La longitud de onda es…", ["la amplitud", "la distancia entre dos puntos en fase consecutivos", "el tiempo de una oscilación", "la velocidad"], 1, "λ."),
    q4("v = …", ["λ/f", "λ·f", "f/λ", "λ·T"], 1, "Relación fundamental."),
    q4("El número de onda es…", ["2π/T", "2π/λ", "λ/2π", "1/λ"], 1, "rad/m."),
    q4("Al pasar a otro medio, no cambia…", ["la velocidad", "la longitud de onda", "la frecuencia", "nada"], 2, "La impone el foco."),
    q4("La velocidad en una cuerda es…", ["√(T/μ)", "T/μ", "√(μ/T)", "Tμ"], 0, "Tensión y densidad lineal."),
    q4("y = A sen(ωt + kx) se propaga hacia…", ["+x", "−x", "+y", "no se propaga"], 1, "Signo +."),
    q4("Dos puntos separados λ/2 vibran…", ["en fase", "en oposición de fase", "en cuadratura", "sin relación"], 1, "Δφ = π."),
    q4("La intensidad de una onda esférica disminuye con…", ["r", "r²", "√r", "r³"], 1, "Área 4πr²."),
    q4("La energía de una onda es proporcional a…", ["A", "A²", "1/A", "λ"], 1, "Y a f²."),
    q4("La difracción es apreciable si el obstáculo es…", ["mucho mayor que λ", "comparable a λ", "nulo", "infinito"], 1, "Tamaño ≈ λ."),
    q4("Interferencia destructiva si Δx =", ["nλ", "(2n + 1)λ/2", "2nλ", "0"], 1, "Oposición de fase."),
    q4("En una onda estacionaria, los puntos que no vibran son…", ["vientres", "nodos", "crestas", "focos"], 1, "Separados λ/2."),
    q4("Fundamental de una cuerda de longitud L:", ["v/L", "v/2L", "v/4L", "2v/L"], 1, "λ = 2L."),
    q4("Un tubo cerrado por un extremo solo tiene armónicos…", ["pares", "impares", "todos", "ninguno"], 1, "fₙ = nv/4L."),
    q4("El umbral de audición corresponde a…", ["0 dB", "10 dB", "120 dB", "60 dB"], 0, "I₀ = 10⁻¹² W/m²."),
    q4("Si la intensidad se multiplica por 100, el nivel sonoro…", ["×100", "+20 dB", "+100 dB", "×2"], 1, "10 log 100."),
    q4("El tono de un sonido depende de…", ["la amplitud", "la frecuencia", "los armónicos", "la distancia"], 1, "Agudo o grave."),
  ],
  examen: [
    q4("y = 0,1 sen(6πt − 2πx): v =", ["3 m/s", "6 m/s", "1 m/s", "12 m/s"], 0, "ω/k."),
    q4("y = 0,1 sen(6πt − 2πx): λ =", ["1 m", "2 m", "π m", "0,5 m"], 0, "2π/k."),
    q4("Un sonido de 1000 Hz en el aire: λ =", ["0,34 m", "3,4 m", "340 m", "0,034 m"], 0, "340/1000."),
    q4("Nivel de 10⁻⁴ W/m²:", ["80 dB", "40 dB", "120 dB", "8 dB"], 0, "10 log 10⁸."),
    q4("Al alejarse al triple de distancia, el nivel sonoro baja…", ["9,5 dB", "3 dB", "30 dB", "6 dB"], 0, "10 log 9."),
    q4("Cuerda de 0,5 m con v = 200 m/s: f₁ =", ["200 Hz", "400 Hz", "100 Hz", "800 Hz"], 0, "v/2L."),
    q4("Foco de 500 Hz que se aleja a 40 m/s de un observador quieto:", ["447 Hz", "567 Hz", "500 Hz", "460 Hz"], 0, "500·340/380."),
    q4("Distancia entre un nodo y el vientre siguiente:", ["λ/4", "λ/2", "λ", "2λ"], 0, "Mitad de λ/2."),
  ],
  feynman: ["Por qué una ola no se lleva el agua", "Qué diferencia hay entre la velocidad de una onda y la de sus puntos", "Por qué al tensar una cuerda suena más aguda", "Por qué dos sonidos pueden dar silencio", "Por qué la sirena cambia de tono al pasar", "Por qué los decibelios no se suman"],
  mapa: mapaB("ONDAS Y SONIDO", [["Ecuación", "y = A sen(ωt − kx)", "var(--pen)"], ["Energía", "I = P/4πr²", "var(--red)"], ["Fenómenos", "Huygens, interferencia", "var(--leaf)"], ["Sonido", "β = 10 log(I/I₀) ; Doppler", "var(--muted)"]]),
  tarjetas: [
    ["Onda", "Propagación de energía sin transporte de materia."],
    ["Transversal y longitudinal", "Vibración perpendicular o paralela a la propagación."],
    ["Relación fundamental", "v = λ·f = ω/k."],
    ["Número de onda", "k = 2π/λ (rad/m)."],
    ["Ecuación de onda", "y = A·sen(ωt − kx): avanza hacia +x."],
    ["Desfase", "Δφ = k·Δx = 2πΔx/λ."],
    ["Velocidad en una cuerda", "v = √(T/μ)."],
    ["Intensidad", "I = P/(4πr²); E ∝ A²."],
    ["Interferencia", "Constructiva Δx = nλ; destructiva Δx = (2n + 1)λ/2."],
    ["Onda estacionaria", "Nodos cada λ/2; cuerda: fₙ = nv/2L."],
    ["Nivel sonoro", "β = 10·log(I/I₀), I₀ = 10⁻¹² W/m²."],
    ["Efecto Doppler", "f' = f(v ± v<sub>o</sub>)/(v ∓ v<sub>f</sub>)."],
  ],
  glosario: [
    ["Onda mecánica", "Onda que necesita un medio material para propagarse."],
    ["Onda transversal", "Las partículas vibran perpendicularmente a la propagación."],
    ["Onda longitudinal", "Las partículas vibran en la dirección de propagación."],
    ["Longitud de onda", "Distancia entre dos puntos consecutivos en fase."],
    ["Frente de ondas", "Superficie formada por puntos que vibran en fase."],
    ["Intensidad", "Potencia por unidad de superficie perpendicular (W/m²)."],
    ["Atenuación", "Disminución de la intensidad con la distancia."],
    ["Absorción", "Pérdida de energía de la onda en el medio."],
    ["Difracción", "Capacidad de una onda de rodear obstáculos."],
    ["Interferencia", "Superposición de ondas que se refuerzan o se anulan."],
    ["Nodo", "Punto de una onda estacionaria que no vibra."],
    ["Armónico", "Frecuencia múltiplo de la fundamental."],
    ["Timbre", "Cualidad que distingue sonidos de igual tono e intensidad."],
    ["Decibelio", "Unidad del nivel de intensidad sonora."],
    ["Onda de choque", "Acumulación de frentes cuando el foco supera la velocidad de la onda."],
  ],
  situacion: {
    titulo: "Mapa de ruido de nuestro barrio",
    reto: "El ayuntamiento quiere saber si el entorno del instituto cumple las recomendaciones de la OMS sobre ruido. Vuestro equipo elaborará un mapa sonoro con medidas reales y propondrá medidas para reducir el ruido.",
    pasos: [
      "Medid con una app de sonómetro el nivel sonoro en 10 puntos del entorno a distintas horas.",
      "Comprobad experimentalmente cómo disminuye el nivel con la distancia a una fuente (por ejemplo, un altavoz) y comparadlo con I ∝ 1/r².",
      "Elaborad un mapa de colores con los niveles medidos y comparadlos con los límites de la OMS.",
      "Calculad cuántas veces se reduciría la intensidad con una pantalla acústica que restara 10 dB.",
      "Proponed medidas concretas y presentadlas al consejo escolar o al ayuntamiento.",
    ],
    producto: "Un mapa sonoro del barrio con un informe de propuestas.",
    evaluacion: ["Las medidas se toman con método y se representan bien.", "Se aplican correctamente la escala de decibelios y la ley 1/r².", "Se interpretan los resultados con criterios de salud.", "Las propuestas son realistas y están justificadas."],
  },
  familias: [
    "Instalad una app de sonómetro y medid el ruido de casa, la calle y un concierto o partido.",
    "Pulsad una goma elástica tensada más o menos y escuchad cómo cambia el tono.",
    "Escuchad una ambulancia o una moto pasar y comentad el efecto Doppler.",
    "Revisad el volumen al que se usan los auriculares y la regla de 60 % del volumen durante 60 minutos.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Vibraciones y ondas»: ondas mecánicas, ecuación de una onda armónica y magnitudes; energía e intensidad; fenómenos ondulatorios (reflexión, refracción, difracción, interferencia) y principio de Huygens; ondas estacionarias; el sonido, sus cualidades, nivel de intensidad sonora y efecto Doppler; contaminación acústica.`,
    ideas: [
      "Simulación PhET «Onda en una cuerda» e «Interferencia de ondas».",
      "Medida de la velocidad del sonido con un tubo de resonancia y un diapasón o con dos móviles (phyphox).",
      "Ondas estacionarias con un vibrador, una cuerda y una polea con pesas.",
      "Proyecto de mapa de ruido con sonómetros de móvil.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Onda en una cuerda» (PhET)", url: "https://phet.colorado.edu/es/simulations/wave-on-a-string" },
    { t: "OMS: directrices sobre el ruido ambiental para Europa", url: "https://www.who.int/europe/publications/i/item/9789289053563" },
  ],
  revisado: "2026-11-21",
};
