// Física y Química 1º Bachillerato · Movimiento circular y movimientos compuestos (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, escala, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach1L2");

const intrinsecas = marco("Componentes intrínsecas de la aceleración: la tangencial cambia el módulo de la velocidad y la normal cambia su dirección", `
  <defs><marker id="mc1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="mc2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker><marker id="mc3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker></defs>
  <path d="M20 150 Q 120 20 240 120" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="120" cy="85" r="6" fill="var(--ink)"/>
  <path d="M120 85 L 190 85" stroke="var(--red)" stroke-width="3" marker-end="url(#mc1)"/>${T(200, 80, "aₜ", { fs: 14, b: true, c: "var(--red)" })}
  <path d="M120 85 L 120 150" stroke="var(--pen)" stroke-width="3" marker-end="url(#mc2)"/>${T(134, 160, "aₙ", { fs: 14, b: true, c: "var(--pen)" })}
  <path d="M120 85 L 182 146" stroke="var(--leaf)" stroke-width="3.5" marker-end="url(#mc3)"/>${T(198, 154, "a", { fs: 15, b: true, c: "var(--leaf)" })}
  ${T(60, 40, "aₙ = v²/R", { fs: 13, b: true, c: "var(--pen)" })}${T(196, 34, "aₜ = d|v|/dt", { fs: 12, b: true, c: "var(--red)" })}`);

const parabola = marco("Tiro parabólico: la componente horizontal de la velocidad es constante y la vertical cambia por la gravedad", `
  <path d="M20 160 H 245" stroke="var(--muted)" stroke-width="2"/>
  <path d="M24 158 Q 130 -30 236 158" fill="none" stroke="var(--pen)" stroke-width="3"/>
  ${[[24, 158, 22, -30], [77, 76, 22, -15], [130, 48, 22, 0], [183, 76, 22, 15], [236, 158, 22, 30]].map(([x, y, dx, dy]) => `<path d="M${x} ${y} l ${dx} 0" stroke="var(--red)" stroke-width="2.5"/>${dy ? `<path d="M${x} ${y} l 0 ${dy}" stroke="var(--leaf)" stroke-width="2.5"/>` : ""}`).join("")}
  ${T(60, 30, "vₓ constante", { fs: 12, b: true, c: "var(--red)" })}${T(204, 30, "v_y cambia", { fs: 12, b: true, c: "var(--leaf)" })}${T(130, 40, "v_y = 0", { fs: 11, c: "var(--muted)" })}${T(130, 176, "alcance", { fs: 12, b: true })}`);

module.exports = {
  materia: "Física y Química",
  curso: "1-bachillerato",
  titulo: "Movimiento circular y movimientos compuestos",
  minutos: 110,
  objetivos: [
    "Descomponer la aceleración en sus componentes tangencial y normal e interpretarlas",
    "Describir el movimiento circular con magnitudes angulares y relacionarlas con las lineales",
    "Resolver problemas de MCU y MCUA",
    "Aplicar el principio de superposición de Galileo a movimientos compuestos",
    "Resolver problemas de tiro horizontal y tiro oblicuo (alcance, altura máxima, tiempo de vuelo)",
  ],
  claves: ["componentes intrínsecas", "aceleración tangencial", "aceleración normal", "radián", "velocidad angular", "periodo", "frecuencia", "MCU", "MCUA", "aceleración angular", "superposición", "tiro horizontal", "tiro oblicuo", "alcance"],
  pregunta: {
    texto: "¿Con qué ángulo hay que lanzar un balón para que llegue lo más lejos posible?",
    respuesta: "Sin rozamiento del aire y si se lanza y cae a la misma altura, con <mark>45°</mark>. Con menos ángulo el balón va rápido en horizontal pero cae pronto; con más, está mucho tiempo en el aire pero avanza poco. En la realidad, por el aire y porque los lanzamientos suelen hacerse desde cierta altura, los atletas de peso lanzan con unos 37-42°.",
  },
  lectura: {
    titulo: "Galileo y la bala de cañón",
    html: `<p>En el siglo XVI los artilleros sabían por experiencia que los proyectiles describían curvas, pero no sabían calcularlas. Se creía que la bala salía en línea recta hasta «agotar su ímpetu» y entonces caía de golpe. Galileo Galilei hizo rodar bolas por planos inclinados que terminaban en una mesa y observó dónde caían. Así descubrió una idea genial: el movimiento de un proyectil es la suma de dos movimientos independientes, uno horizontal uniforme y otro vertical de caída libre, que no se estorban entre sí. La combinación de ambos da una parábola.</p><p>Ese principio de independencia o superposición permite analizar movimientos complicados descomponiéndolos en otros simples. Con él se diseñan las trayectorias de los balones en un lanzamiento de falta, los saltos de esquí, los chorros de las fuentes o los paquetes que se lanzan desde aviones de ayuda humanitaria. En este tema estudiarás también el otro gran movimiento curvo, el circular, que describen las ruedas, las centrifugadoras, los discos duros y, aproximadamente, los satélites. Verás que en toda curva hay una aceleración que apunta hacia dentro, aunque el móvil no cambie de rapidez.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Componentes intrínsecas de la aceleración", p: [
      "En un movimiento curvilíneo el vector velocidad cambia de dirección en cada instante, así que siempre hay aceleración. Para entender qué hace esa aceleración, conviene descomponerla según dos direcciones ligadas a la trayectoria: la tangente y la perpendicular a ella (la normal), dirigida hacia el centro de la curva. Son las <mark>componentes intrínsecas</mark>.",
      "La <b>aceleración tangencial</b>, a<sub>t</sub> = d|v|/dt, tiene la dirección de la velocidad y mide cómo cambia el <b>módulo</b> de la velocidad: si el móvil acelera, apunta en el sentido del movimiento; si frena, en sentido contrario; si la rapidez es constante, es cero. La <b>aceleración normal</b> o centrípeta, a<sub>n</sub> = v² / R, donde R es el radio de curvatura, apunta hacia el centro de la curva y mide cómo cambia la <b>dirección</b> de la velocidad. Cuanto más cerrada es la curva o mayor la velocidad, mayor es a<sub>n</sub>. El módulo de la aceleración total es a = √(a<sub>t</sub>² + a<sub>n</sub>²).",
    ], extra: formula("a<sub>t</sub> = d|v|/dt ; a<sub>n</sub> = v² / R ; a = √(a<sub>t</sub>² + a<sub>n</sub>²)"), svg: intrinsecas, video: V("circ-c", "Aceleración tangencial y normal", "componentes intrínsecas de la aceleración") }),
    bloque({ h: "1.2 Clasificación de los movimientos", p: [
      "Con las componentes intrínsecas se puede clasificar cualquier movimiento. Si a<sub>t</sub> = 0 y a<sub>n</sub> = 0, la velocidad no cambia: es un <b>MRU</b>. Si a<sub>t</sub> ≠ 0 y a<sub>n</sub> = 0, solo cambia el módulo: es un movimiento <b>rectilíneo acelerado</b> (si a<sub>t</sub> es constante, MRUA).",
      "Si a<sub>t</sub> = 0 y a<sub>n</sub> ≠ 0, cambia la dirección pero no la rapidez: es un movimiento <b>curvilíneo uniforme</b>; si además a<sub>n</sub> es constante, el radio es constante y se trata de un <mark>movimiento circular uniforme</mark> (MCU). Por último, si a<sub>t</sub> ≠ 0 y a<sub>n</sub> ≠ 0, cambian módulo y dirección: es un movimiento <b>curvilíneo variado</b>, como el de un coche que acelera en una curva o el de un proyectil. Este cuadro permite identificar el tipo de movimiento a partir de las ecuaciones, sin necesidad de dibujarlo.",
    ], svg: rejilla("Clasificación de los movimientos según las componentes intrínsecas", ["aₜ", "aₙ", "Movimiento"], [["0", "0", "MRU"], ["≠ 0", "0", "rectilíneo variado"], ["0", "constante", "MCU"], ["≠ 0", "≠ 0", "curvilíneo variado"]], "var(--pen)") }),
    bloque({ h: "2.1 Magnitudes angulares", p: [
      "En un movimiento circular es más cómodo describir la posición con el <b>ángulo</b> φ que forma el radio que pasa por el móvil con una referencia. Los ángulos se miden en <mark>radianes</mark>: un radián es el ángulo cuyo arco mide lo mismo que el radio. Una vuelta completa son 2π rad (360°). La relación entre el arco recorrido s y el ángulo es s = φ · R.",
      "La <b>velocidad angular</b> ω es el ángulo barrido por unidad de tiempo, ω = dφ/dt, y se mide en rad/s. En la vida cotidiana se usan las revoluciones por minuto (rpm): 1 rpm = 2π/60 rad/s. Dividiendo s = φR entre el tiempo se obtiene la relación entre velocidad lineal y angular: <b>v = ω · R</b>. En un disco que gira, todos los puntos tienen la misma ω, pero los más alejados del centro tienen mayor velocidad lineal: por eso en un tiovivo los caballitos exteriores van más rápido. Análogamente, la <b>aceleración angular</b> α = dω/dt (rad/s²) se relaciona con la tangencial: a<sub>t</sub> = α · R.",
    ], extra: formula("s = φ · R ; v = ω · R ; a<sub>t</sub> = α · R"), svg: rejilla("Magnitudes lineales y angulares", ["Lineal", "Angular", "Relación"], [["s (m)", "φ (rad)", "s = φR"], ["v (m/s)", "ω (rad/s)", "v = ωR"], ["aₜ (m/s²)", "α (rad/s²)", "aₜ = αR"]], "var(--leaf)") }),
    bloque({ h: "2.2 Movimiento circular uniforme (MCU)", p: [
      "En el <mark>MCU</mark> el móvil describe una circunferencia con velocidad angular constante: recorre ángulos iguales en tiempos iguales. Su ecuación es φ = φ₀ + ω · t. Es un movimiento <b>periódico</b>: se repite cada cierto tiempo. El <b>periodo</b> T es el tiempo de una vuelta completa (s) y la <b>frecuencia</b> f es el número de vueltas por segundo (hercios, Hz = s<sup>−1</sup>). Están relacionados: f = 1/T y ω = 2π/T = 2πf.",
      "Aunque la rapidez es constante, el MCU es un movimiento <b>acelerado</b>: la velocidad cambia de dirección continuamente. Su aceleración es solo normal (centrípeta), de módulo constante y dirigida siempre hacia el centro: <b>a<sub>n</sub> = v²/R = ω² · R</b>. Ejemplos: las agujas de un reloj (el minutero tiene T = 3600 s), un disco de vinilo a 33 rpm, el tambor de una lavadora al centrifugar a 1200 rpm o, aproximadamente, la Luna alrededor de la Tierra (T = 27,3 días).",
    ], extra: formula("φ = φ₀ + ω·t ; ω = 2π/T = 2πf ; a<sub>n</sub> = ω²·R"), svg: ficha("Fórmulas del movimiento circular uniforme", "MCU", ["φ = φ₀ + ω · t", "ω = 2π / T = 2π f", "v = ω · R", "aₙ = v² / R = ω² R"]), video: V("circ-a", "Movimiento circular uniforme: problema resuelto", "movimiento circular uniforme") }),
    bloque({ h: "2.3 Movimiento circular uniformemente acelerado (MCUA)", p: [
      "Si la velocidad angular cambia de forma constante, el movimiento es <mark>circular uniformemente acelerado</mark>, con aceleración angular α constante. Sus ecuaciones son idénticas a las del MRUA, cambiando las magnitudes lineales por las angulares: ω = ω₀ + α · t; φ = φ₀ + ω₀ · t + ½ · α · t²; y ω² − ω₀² = 2 · α · Δφ. Es lo que ocurre cuando una rueda arranca, una batidora frena o un ventilador se pone en marcha.",
      "En el MCUA la aceleración tiene las dos componentes: la <b>tangencial</b>, a<sub>t</sub> = α · R, constante, y la <b>normal</b>, a<sub>n</sub> = ω² · R, que cambia porque ω cambia. Por tanto, la aceleración total no apunta al centro. Para saber cuántas vueltas da un objeto, se calcula el ángulo en radianes y se divide entre 2π. Por ejemplo, una rueda que pasa de 0 a 20 rad/s en 4 s tiene α = 5 rad/s² y gira Δφ = ½ · 5 · 16 = 40 rad, es decir, 40 / 2π ≈ 6,4 vueltas.",
    ], extra: formula("ω = ω₀ + α·t ; φ = φ₀ + ω₀·t + ½·α·t²"), svg: compara("Analogía entre el MRUA y el MCUA", ["MRUA", ["v = v₀ + a t", "x = v₀t + ½at²", "v² − v₀² = 2aΔx"]], ["MCUA", ["ω = ω₀ + α t", "φ = ω₀t + ½αt²", "ω² − ω₀² = 2αΔφ"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "2.4 Transmisión del movimiento circular", p: [
      "En las máquinas, el movimiento de giro se transmite de una rueda a otra con engranajes, correas o cadenas. Si dos ruedas están unidas por una <b>correa o cadena</b>, o engranadas entre sí, los puntos de sus bordes tienen la <mark>misma velocidad lineal</mark>: ω₁ · R₁ = ω₂ · R₂. La rueda pequeña gira más deprisa que la grande. Si dos ruedas están montadas en el <b>mismo eje</b>, tienen la misma velocidad angular.",
      "La bicicleta es un buen ejemplo: los pedales mueven el plato, que mediante la cadena mueve el piñón, que está en el mismo eje que la rueda trasera. Con un plato de 44 dientes y un piñón de 11, el piñón gira 4 veces más rápido que el plato; si se pedalea a 1 vuelta por segundo y la rueda tiene 35 cm de radio, la bicicleta avanza a ω · R = 4 · 2π · 0,35 ≈ 8,8 m/s (32 km/h). Al cambiar de marcha se modifica la relación de transmisión: en las cuestas se usa un piñón grande para hacer menos fuerza aunque se avance menos en cada pedalada.",
    ], svg: pasos("Transmisión del movimiento en una bicicleta", ["Pedales → plato (mismo eje)", "Cadena: misma v en plato y piñón", "Piñón → rueda (mismo eje)", "v bici = ω rueda · R"], "#b45309") }),
    bloque({ h: "2.5 El movimiento circular en la naturaleza y la tecnología", p: [
      "El movimiento circular está en todas partes. La Tierra gira sobre sí misma con un periodo de un día, y por eso un punto del ecuador se mueve a unos 1.670 km/h sin que lo notemos: la aceleración centrípeta correspondiente es solo de 0,034 m/s², pequeña comparada con g, aunque suficiente para que la Tierra esté algo achatada por los polos. La Luna, los satélites artificiales y, con buena aproximación, los planetas describen órbitas casi circulares, como verás en el tema de gravitación.",
      "En la tecnología, las <mark>centrifugadoras</mark> aprovechan aceleraciones normales enormes para separar mezclas según su densidad: las de laboratorio separan las células de la sangre del plasma a miles de g, y las de uranio enriquecen el combustible nuclear. Los discos duros giran a 7.200 rpm, las turbinas de un avión a más de 10.000 rpm y las ruedas de un coche a unas 1.000 rpm en autopista. En todos los casos, el diseño debe resistir la fuerza que hace falta para mantener cada parte en su trayectoria circular, un problema de dinámica que estudiarás más adelante.",
    ], svg: barras("Velocidades de giro de algunos objetos en revoluciones por minuto", "Velocidad de giro (rpm)", [["Disco de vinilo", 33, "var(--muted)", "33"], ["Rueda de coche", 1000, "var(--leaf)", "1.000"], ["Lavadora", 1400, "var(--pen)", "1.400"], ["Disco duro", 7200, "#b45309", "7.200"], ["Centrifugadora", 15000, "var(--red)", "15.000"]]) }),
    bloque({ h: "3.1 Principio de superposición de Galileo", p: [
      "Muchos movimientos reales se pueden considerar como la combinación de dos o más movimientos simples. El <mark>principio de superposición</mark> o de independencia, enunciado por Galileo, dice que cuando un cuerpo está sometido a varios movimientos simultáneos, cada uno se produce como si los demás no existieran, y el movimiento resultante es la suma vectorial de todos ellos.",
      "Un ejemplo sencillo es una barca que cruza un río: si rema perpendicularmente a la orilla a 3 m/s y la corriente la arrastra a 4 m/s, su velocidad respecto a la orilla es la suma vectorial, de módulo 5 m/s. El tiempo que tarda en cruzar solo depende de la velocidad perpendicular (si el río tiene 60 m, 20 s), y en ese tiempo la corriente la desplaza 80 m río abajo. Si quiere llegar justo enfrente, debe remar inclinada contra la corriente, de modo que la componente de su velocidad paralela a la orilla anule la del río. Los aviones hacen el mismo cálculo con el viento.",
    ], extra: formula("v = v₁ + v₂ (suma vectorial)"), svg: compara("La barca que cruza el río: dos movimientos independientes", ["Eje X (río)", ["corriente", "4 m/s", "MRU", "deriva 80 m"]], ["Eje Y (orilla)", ["remo", "3 m/s", "MRU", "cruza en 20 s"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "3.2 Tiro horizontal", p: [
      "Cuando se lanza un objeto horizontalmente desde una altura h con velocidad v₀, su movimiento es la composición de un <b>MRU horizontal</b> con velocidad v₀ y una <b>caída libre vertical</b>. Con el origen en el suelo bajo el punto de lanzamiento: x = v₀ · t; y = h − ½ · g · t²; v<sub>x</sub> = v₀ (constante); v<sub>y</sub> = −g · t.",
      "El <mark>tiempo de vuelo</mark> se obtiene con y = 0: t = √(2h/g). Es el mismo que tardaría en caer si se dejara caer verticalmente: la velocidad horizontal no influye en el tiempo de caída. Una bala disparada horizontalmente y otra soltada a la vez desde la misma altura llegan al suelo a la vez (sin aire). El <b>alcance</b> es x = v₀ · t. La velocidad al llegar al suelo es la suma de sus dos componentes: v = √(v<sub>x</sub>² + v<sub>y</sub>²), y el ángulo de impacto, tg θ = v<sub>y</sub>/v<sub>x</sub>. Eliminando t, la ecuación de la trayectoria es y = h − g·x²/(2v₀²): una parábola.",
    ], extra: formula("x = v₀·t ; y = h − ½·g·t² ; t<sub>vuelo</sub> = √(2h/g)"), svg: graf("Trayectoria de un tiro horizontal con dos velocidades distintas: llegan al suelo a la vez", "x", "y", [{ p: [[0, 0.9], [0.1, 0.87], [0.2, 0.78], [0.3, 0.63], [0.4, 0.42], [0.5, 0.15], [0.55, 0]], c: "var(--pen)", t: "v₀" }, { p: [[0, 0.9], [0.2, 0.87], [0.4, 0.78], [0.6, 0.63], [0.8, 0.42], [1, 0.15], [1.1, 0]], c: "var(--red)", t: "2v₀" }]) }),
    bloque({ h: "3.3 Tiro oblicuo o parabólico", p: [
      "Si el objeto se lanza con velocidad v₀ formando un ángulo α con la horizontal, se descompone la velocidad inicial: v<sub>0x</sub> = v₀ · cos α y v<sub>0y</sub> = v₀ · sen α. El movimiento horizontal es un MRU y el vertical, un lanzamiento hacia arriba: x = v₀ cos α · t; y = y₀ + v₀ sen α · t − ½ g t²; v<sub>x</sub> = v₀ cos α; v<sub>y</sub> = v₀ sen α − g t. La trayectoria es una <mark>parábola</mark>.",
      "En el punto más alto, v<sub>y</sub> = 0 (pero v<sub>x</sub> no): el tiempo de subida es t<sub>s</sub> = v₀ sen α / g y la <b>altura máxima</b> sobre el punto de lanzamiento, h = v₀² sen² α / (2g). Si el proyectil cae a la misma altura de la que salió, el tiempo de vuelo es el doble del de subida y el <b>alcance</b> es x<sub>max</sub> = v₀² · sen(2α) / g. Como sen(2α) es máximo para 2α = 90°, el alcance máximo se logra con <b>α = 45°</b>, y dos ángulos complementarios (por ejemplo, 30° y 60°) dan el mismo alcance, aunque con distinta altura y tiempo de vuelo.",
    ], extra: formula("x<sub>max</sub> = v₀² · sen 2α / g ; h<sub>max</sub> = v₀² · sen² α / (2g)"), svg: parabola }),
    bloque({ h: "3.4 Proyectiles en la realidad: el efecto del aire", p: [
      "Las fórmulas del tiro parabólico suponen que no hay rozamiento con el aire. Es una buena aproximación para objetos densos, lentos y que recorren poca distancia, como una piedra lanzada con la mano o el chorro de una fuente. Pero en muchos casos el aire cambia mucho la trayectoria: una pelota de golf golpeada a 70 m/s alcanzaría unos 500 m en el vacío y en realidad llega a unos 250 m.",
      "El rozamiento con el aire frena el proyectil en las dos direcciones, hace que la trayectoria deje de ser simétrica (baja más empinada de lo que sube) y reduce el ángulo óptimo por debajo de 45°. Además, si el balón gira, aparecen fuerzas laterales (efecto Magnus) que curvan su trayectoria, como en los lanzamientos de falta «con rosca». Los programas de simulación resuelven estas trayectorias paso a paso con ordenador. Aun así, el modelo sin aire es el punto de partida imprescindible y da una muy buena idea de cómo dependen el alcance y la altura del ángulo y la velocidad.",
    ], svg: compara("Tiro parabólico ideal y real", ["Sin aire", ["parábola simétrica", "ángulo óptimo 45°", "vₓ constante"]], ["Con aire", ["asimétrica", "ángulo óptimo < 45°", "vₓ disminuye"]], "var(--pen)", "var(--red)") }),
  ],
  figura: figura("Movimientos curvos", "Circular uniforme, circular acelerado y parabólico", [["MCU", "ω constante", "aₙ = ω²R hacia el centro"], ["MCUA", "α constante", "aₜ = αR y aₙ"], ["Parabólico", "MRU en x", "+ caída libre en y"]]),
  video: V("circ-b", "Movimiento parabólico paso a paso", "movimiento circular y parabólico"),
  ejemplos: [
    { enunciado: "Un coche toma una curva de 50 m de radio a 72 km/h mientras frena con 2 m/s². Calcula las componentes intrínsecas y el módulo de la aceleración.", pasos: ["v = 20 m/s.", "a<sub>n</sub> = 400 / 50 = 8 m/s².", "a<sub>t</sub> = −2 m/s² (frena).", "a = √(64 + 4) = 8,2 m/s²."], resultado: "a<sub>n</sub> = 8 m/s²; a<sub>t</sub> = −2 m/s²; a ≈ 8,2 m/s²." },
    { enunciado: "El tambor de una lavadora de 25 cm de radio centrifuga a 1200 rpm. Calcula ω, T, la velocidad de un punto del borde y su aceleración.", pasos: ["ω = 1200 · 2π / 60 = 125,7 rad/s.", "T = 60 / 1200 = 0,05 s.", "v = 125,7 · 0,25 = 31,4 m/s.", "a<sub>n</sub> = ω²R = 125,7² · 0,25 = 3948 m/s² (unas 400 g)."], resultado: "ω ≈ 126 rad/s; T = 0,05 s; v ≈ 31 m/s; a ≈ 3950 m/s²." },
    { enunciado: "Un ventilador pasa de 0 a 300 rpm en 5 s con aceleración angular constante. Calcula α y el número de vueltas.", pasos: ["ω = 300 · 2π / 60 = 31,4 rad/s.", "α = 31,4 / 5 = 6,28 rad/s².", "Δφ = ½ · 6,28 · 25 = 78,5 rad.", "Vueltas: 78,5 / 2π = 12,5."], resultado: "α = 6,28 rad/s²; 12,5 vueltas." },
    { enunciado: "Desde un acantilado de 45 m se lanza horizontalmente una piedra a 12 m/s. Calcula el tiempo de vuelo, el alcance y la velocidad al llegar al agua (g = 10).", pasos: ["t = √(2 · 45 / 10) = 3 s.", "x = 12 · 3 = 36 m.", "v<sub>y</sub> = −30 m/s; v<sub>x</sub> = 12 m/s.", "v = √(144 + 900) = 32,3 m/s; tg θ = 30/12 → θ = 68° bajo la horizontal."], resultado: "3 s; 36 m; 32,3 m/s a 68° bajo la horizontal." },
    { enunciado: "Un futbolista chuta a 20 m/s con 30°. Calcula la altura máxima, el tiempo de vuelo y el alcance (g = 9,8).", pasos: ["v<sub>0x</sub> = 17,3 m/s; v<sub>0y</sub> = 10 m/s.", "h = 100 / 19,6 = 5,1 m.", "t = 2 · 10 / 9,8 = 2,04 s.", "x = 17,3 · 2,04 = 35,3 m."], resultado: "5,1 m; 2,04 s; 35,3 m." },
    { enunciado: "Una barca rema a 2 m/s perpendicular a la orilla en un río de 80 m de ancho cuya corriente va a 1,5 m/s. ¿Cuánto tarda en cruzar, cuánto deriva y qué velocidad tiene respecto a la orilla?", pasos: ["t = 80 / 2 = 40 s.", "Deriva: 1,5 · 40 = 60 m.", "v = √(4 + 2,25) = 2,5 m/s."], resultado: "40 s; 60 m río abajo; 2,5 m/s." },
  ],
  errores: [
    "Pensar que en un MCU no hay aceleración porque la rapidez es constante.",
    "Usar grados en lugar de radianes en s = φR o v = ωR.",
    "Creer que la velocidad horizontal influye en el tiempo de caída de un tiro horizontal.",
    "Decir que en el punto más alto de un tiro oblicuo la velocidad es cero: solo se anula v<sub>y</sub>.",
    "Aplicar la fórmula del alcance v₀² sen 2α / g cuando el proyectil no cae a la misma altura.",
    "Confundir periodo (s) y frecuencia (Hz) o las rpm con rad/s.",
  ],
  ejercicios: [
    B("Explica por qué un coche que toma una curva a velocidad constante está acelerando.", "Cambia la dirección de la velocidad; hay aceleración normal (centrípeta) hacia el centro de la curva."),
    B("Pasa a radianes: 90°, 180°, 270° y 1 vuelta.", "π/2, π, 3π/2 y 2π rad."),
    B("Pasa 45 rpm a rad/s.", "45 · 2π / 60 = 4,71 rad/s."),
    B("Una rueda gira con T = 0,5 s. Calcula f y ω.", "f = 2 Hz; ω = 4π = 12,6 rad/s."),
    B("Calcula la velocidad lineal de un punto a 30 cm del eje de una rueda que gira a 10 rad/s.", "v = 10 · 0,3 = 3 m/s."),
    B("Calcula la aceleración normal de un coche a 20 m/s en una curva de 100 m de radio.", "a<sub>n</sub> = 400 / 100 = 4 m/s²."),
    B("¿Cuál es la velocidad angular del minutero de un reloj?", "ω = 2π / 3600 = 1,75 · 10<sup>−3</sup> rad/s."),
    B("Si una rueda pasa de 0 a 10 rad/s en 2 s, ¿cuál es su aceleración angular?", "α = 5 rad/s²."),
    B("Se deja caer una bola y, a la vez, se lanza otra horizontalmente desde la misma altura. ¿Cuál llega antes?", "Llegan a la vez: el movimiento vertical es el mismo (caída libre) en ambas."),
    B("Una pelota rueda por una mesa de 1,25 m a 2 m/s y cae. ¿Cuánto tarda en llegar al suelo y a qué distancia cae? (g = 10)", "t = √(2 · 1,25 / 10) = 0,5 s. x = 2 · 0,5 = 1 m."),
    B("¿Con qué ángulo se consigue el máximo alcance en un tiro oblicuo sin rozamiento?", "45°."),
    B("Descompón una velocidad de 30 m/s a 60° en sus componentes.", "v<sub>x</sub> = 15 m/s; v<sub>y</sub> = 26 m/s."),
    M("La Tierra gira alrededor del Sol en una órbita de 1,5 · 10<sup>11</sup> m en 365 días. Calcula su velocidad orbital y su aceleración centrípeta.", "T = 3,15 · 10<sup>7</sup> s. v = 2πR/T = 2,99 · 10<sup>4</sup> m/s (30 km/s). a<sub>n</sub> = v²/R = 5,96 · 10<sup>−3</sup> m/s²."),
    M("Calcula la velocidad de un punto del ecuador debida a la rotación terrestre (R = 6370 km).", "ω = 2π / 86.400 = 7,27 · 10<sup>−5</sup> rad/s; v = 463 m/s (1667 km/h)."),
    M("Un disco que gira a 33 rpm se para en 10 s. Calcula α y las vueltas que da hasta pararse.", "ω₀ = 3,46 rad/s; α = −0,346 rad/s². Δφ = ω₀²/(2|α|) = 17,3 rad = 2,75 vueltas."),
    M("Una rueda de 40 cm de radio gira con α = 2 rad/s² desde el reposo. En t = 3 s, calcula a<sub>t</sub>, a<sub>n</sub> y a.", "ω = 6 rad/s. a<sub>t</sub> = 0,8 m/s². a<sub>n</sub> = 36 · 0,4 = 14,4 m/s². a = 14,4 m/s² aprox. (14,42)."),
    M("Dos poleas unidas por una correa tienen radios de 10 y 30 cm. La pequeña gira a 600 rpm. ¿A qué velocidad gira la grande?", "ω₁R₁ = ω₂R₂ → ω₂ = 600 · 10/30 = 200 rpm."),
    M("Un avión de ayuda vuela a 500 m de altura a 60 m/s. ¿A qué distancia horizontal del objetivo debe soltar el paquete?", "t = √(1000/9,8) = 10,1 s. x = 60 · 10,1 = 606 m antes del objetivo."),
    M("Una pelota se lanza a 15 m/s con 53°. Calcula la altura máxima y el alcance (sen 53° = 0,8; cos 53° = 0,6; g = 10).", "v<sub>0y</sub> = 12; v<sub>0x</sub> = 9. h = 144/20 = 7,2 m. t = 2,4 s; x = 21,6 m."),
    M("Comprueba que 30° y 60° dan el mismo alcance con v₀ = 20 m/s y compara los tiempos de vuelo (g = 10).", "Alcance: 400 · sen 60° / 10 = 34,6 m en ambos. Tiempo: 2 · 10 / 10 = 2 s (30°) y 2 · 17,3 / 10 = 3,46 s (60°)."),
    M("Un nadador quiere cruzar un río de 100 m llegando justo enfrente. Nada a 2 m/s y la corriente va a 1 m/s. ¿Con qué ángulo debe nadar y cuánto tarda?", "sen θ = 1/2 → θ = 30° contra la corriente respecto a la perpendicular. v útil = 2 cos 30° = 1,73 m/s; t = 57,7 s."),
    M("Un satélite en órbita baja da una vuelta en 90 min a 6.700 km del centro de la Tierra. Calcula su velocidad y su aceleración.", "v = 2π · 6,7 · 10<sup>6</sup> / 5400 = 7.796 m/s. a<sub>n</sub> = v²/R = 9,07 m/s²: casi g, porque la gravedad es la que lo hace girar."),
    A("La posición de una partícula es r = (2 cos 3t) i + (2 sen 3t) j (m). Demuestra que es un MCU y calcula R, ω, v y a.", "|r| = 2 m constante → circunferencia de R = 2 m. φ = 3t → ω = 3 rad/s. v = ωR = 6 m/s. a = ω²R = 18 m/s² hacia el centro."),
    A("Un jugador de baloncesto lanza desde 2 m de altura a 10 m/s con 50°. ¿Entra en la canasta, situada a 3,05 m de altura y 6 m de distancia horizontal? (g = 9,8)", "v<sub>0x</sub> = 6,43; v<sub>0y</sub> = 7,66. t para x = 6 m: 0,933 s. y = 2 + 7,66 · 0,933 − 4,9 · 0,871 = 2 + 7,15 − 4,27 = 4,88 m. Pasa 1,8 m por encima del aro: no entra."),
    A("Desde lo alto de una torre de 30 m se lanza una piedra a 20 m/s con 30° por encima de la horizontal. Calcula el tiempo de vuelo y el alcance (g = 10).", "y = 30 + 10t − 5t² = 0 → t² − 2t − 6 = 0 → t = 1 + √7 = 3,65 s. x = 17,3 · 3,65 = 63,2 m."),
    A("¿Con qué velocidad mínima debe saltar horizontalmente un motorista desde una rampa de 5 m de altura para salvar un foso de 20 m de ancho? (g = 10)", "t = √(2 · 5 / 10) = 1 s. v₀ = 20 / 1 = 20 m/s (72 km/h)."),
    A("Una rueda de 0,5 m gira según φ = 2t + t² (rad). Calcula ω, α, a<sub>t</sub>, a<sub>n</sub> y a en t = 2 s.", "ω = 2 + 2t = 6 rad/s; α = 2 rad/s². a<sub>t</sub> = 1 m/s²; a<sub>n</sub> = 36 · 0,5 = 18 m/s²; a = 18,03 m/s²."),
    A("Demuestra que la altura máxima de un tiro oblicuo es la cuarta parte del alcance multiplicada por tg α.", "h = v₀² sen²α / 2g; x = 2v₀² sen α cos α / g. h/x = sen α / (4 cos α) = tg α / 4 → h = (x · tg α) / 4."),
    A("Un proyectil se lanza desde el suelo y alcanza una altura máxima de 20 m y un alcance de 80 m. Calcula el ángulo y la velocidad de lanzamiento (g = 10).", "h = x · tg α / 4 → tg α = 4 · 20 / 80 = 1 → α = 45°. x = v₀²/g → v₀ = √800 = 28,3 m/s."),
    A("Una centrifugadora de laboratorio tiene tubos a 10 cm del eje. ¿A qué rpm debe girar para que la aceleración sea 1000 g?", "a = ω²R → ω = √(9800 / 0,1) = 313 rad/s = 2990 rpm."),
    A("Una bicicleta tiene un plato de 48 dientes, un piñón de 16 y ruedas de 34 cm de radio. Si se pedalea a 80 rpm, ¿a qué velocidad va?", "Piñón: 80 · 48/16 = 240 rpm = 25,1 rad/s. v = 25,1 · 0,34 = 8,5 m/s ≈ 31 km/h."),
  ],
  quiz: [
    q4("La aceleración tangencial mide el cambio de…", ["dirección de la velocidad", "módulo de la velocidad", "posición", "radio"], 1, "a<sub>t</sub> = d|v|/dt."),
    q4("La aceleración normal apunta…", ["en el sentido de v", "hacia el centro de la curva", "hacia fuera", "hacia arriba"], 1, "Es centrípeta."),
    q4("En un MRU…", ["a<sub>t</sub> = 0 y a<sub>n</sub> = 0", "a<sub>n</sub> ≠ 0", "a<sub>t</sub> ≠ 0", "ambas constantes no nulas"], 0, "La velocidad no cambia."),
    q4("Una vuelta completa son…", ["π rad", "2π rad", "360 rad", "1 rad"], 1, "360° = 2π rad."),
    q4("La relación entre v y ω es…", ["v = ω/R", "v = ω · R", "v = ω²R", "v = R/ω"], 1, "Arco = ángulo · radio."),
    q4("En un MCU la aceleración es…", ["cero", "solo normal", "solo tangencial", "variable en módulo"], 1, "a<sub>n</sub> = ω²R constante."),
    q4("Si T = 0,1 s, la frecuencia es…", ["0,1 Hz", "10 Hz", "1 Hz", "100 Hz"], 1, "f = 1/T."),
    q4("60 rpm equivalen a…", ["1 rad/s", "2π rad/s", "60 rad/s", "π rad/s"], 1, "1 vuelta por segundo."),
    q4("En un tiovivo, los caballitos exteriores tienen respecto a los interiores…", ["más ω", "más v", "menos v", "menos ω"], 1, "Misma ω, mayor R."),
    q4("En el MCUA, a<sub>t</sub> =", ["ω²R", "αR", "v²/R", "0"], 1, "Relación angular-lineal."),
    q4("Dos ruedas unidas por una correa tienen igual…", ["ω", "velocidad lineal en el borde", "periodo", "radio"], 1, "La correa no desliza."),
    q4("El principio de superposición es de…", ["Newton", "Galileo", "Kepler", "Einstein"], 1, "Independencia de los movimientos."),
    q4("En el tiro horizontal, el movimiento en el eje X es…", ["MRUA", "MRU", "reposo", "circular"], 1, "No hay aceleración horizontal."),
    q4("El tiempo de vuelo de un tiro horizontal depende de…", ["v₀", "la altura", "la masa", "el ángulo"], 1, "t = √(2h/g)."),
    q4("En el punto más alto de un tiro oblicuo…", ["v = 0", "v<sub>y</sub> = 0", "v<sub>x</sub> = 0", "a = 0"], 1, "Solo se anula la componente vertical."),
    q4("El alcance máximo sin rozamiento se logra con…", ["30°", "45°", "60°", "90°"], 1, "sen 2α máximo."),
    q4("30° y 60° con la misma v₀ dan…", ["igual altura", "igual alcance", "igual tiempo", "nada igual"], 1, "Ángulos complementarios."),
    q4("La trayectoria de un proyectil sin aire es…", ["recta", "circunferencia", "parábola", "hipérbola"], 2, "x lineal, y cuadrática en t."),
    q4("El rozamiento del aire hace que el ángulo óptimo sea…", ["mayor de 45°", "menor de 45°", "exactamente 45°", "90°"], 1, "El aire penaliza los vuelos largos."),
    q4("La aceleración centrípeta de un MCU con ω = 2 rad/s y R = 3 m es…", ["6 m/s²", "12 m/s²", "1,5 m/s²", "4 m/s²"], 1, "ω²R = 4 · 3."),
  ],
  examen: [
    q4("Curva de 25 m a 10 m/s: a<sub>n</sub> =", ["0,4 m/s²", "4 m/s²", "2,5 m/s²", "250 m/s²"], 1, "100/25."),
    q4("ω de 120 rpm:", ["2π rad/s", "4π rad/s", "120 rad/s", "12 rad/s"], 1, "2 vueltas por segundo."),
    q4("v de un punto a 0,2 m con ω = 50 rad/s:", ["10 m/s", "250 m/s", "0,4 m/s", "5 m/s"], 0, "50 · 0,2."),
    q4("Tiempo de caída desde 20 m en tiro horizontal (g = 10):", ["1 s", "2 s", "4 s", "depende de v₀"], 1, "√4."),
    q4("Alcance de un tiro horizontal desde 5 m a 8 m/s (g = 10):", ["4 m", "8 m", "16 m", "40 m"], 1, "t = 1 s."),
    q4("Alcance a 45° con v₀ = 10 m/s (g = 10):", ["5 m", "10 m", "20 m", "100 m"], 1, "100 · 1 / 10."),
    q4("Altura máxima con v₀ = 20 m/s a 30° (g = 10):", ["5 m", "10 m", "20 m", "2,5 m"], 0, "v<sub>0y</sub> = 10 → 100/20."),
    q4("Vueltas en 10π rad:", ["5", "10", "π", "31,4"], 0, "10π / 2π."),
  ],
  feynman: ["Por qué hay aceleración en toda curva", "Qué miden la aceleración tangencial y la normal", "Por qué todos los puntos de un disco tienen la misma ω pero distinta v", "Qué dice el principio de superposición", "Por qué la velocidad horizontal no cambia el tiempo de caída", "Por qué 45° da el máximo alcance"],
  mapa: mapaB("CIRCULAR Y COMPUESTOS", [["Intrínsecas", "aₜ = d|v|/dt ; aₙ = v²/R", "var(--pen)"], ["MCU y MCUA", "ω, T, f ; v = ωR", "var(--leaf)"], ["Superposición", "suma de movimientos", "var(--red)"], ["Tiros", "horizontal y oblicuo", "#b45309"]]),
  tarjetas: [
    ["Aceleración tangencial", "a<sub>t</sub> = d|v|/dt; cambia el módulo de v."],
    ["Aceleración normal", "a<sub>n</sub> = v²/R; cambia la dirección de v."],
    ["Radián", "Ángulo cuyo arco mide lo mismo que el radio; 2π rad = 360°."],
    ["Velocidad angular", "ω = dφ/dt (rad/s)."],
    ["Lineal y angular", "s = φR; v = ωR; a<sub>t</sub> = αR."],
    ["MCU", "φ = φ₀ + ωt; ω = 2π/T = 2πf."],
    ["Aceleración del MCU", "a<sub>n</sub> = ω²R hacia el centro."],
    ["MCUA", "ω = ω₀ + αt; φ = φ₀ + ω₀t + ½αt²."],
    ["Superposición", "Los movimientos simultáneos son independientes y se suman vectorialmente."],
    ["Tiro horizontal", "x = v₀t; y = h − ½gt²; t = √(2h/g)."],
    ["Tiro oblicuo", "v<sub>0x</sub> = v₀ cos α; v<sub>0y</sub> = v₀ sen α."],
    ["Alcance y altura", "x = v₀² sen 2α / g; h = v₀² sen² α / 2g."],
  ],
  glosario: [
    ["Componentes intrínsecas", "Componentes tangencial y normal de la aceleración."],
    ["Radio de curvatura", "Radio de la circunferencia que mejor se ajusta a la trayectoria en un punto."],
    ["Periodo", "Tiempo que tarda un movimiento periódico en repetirse."],
    ["Frecuencia", "Número de vueltas o ciclos por segundo (Hz)."],
    ["Revolución por minuto", "Unidad de velocidad angular: 1 rpm = 2π/60 rad/s."],
    ["Aceleración angular", "Variación de la velocidad angular por unidad de tiempo."],
    ["Aceleración centrípeta", "Aceleración dirigida hacia el centro de la curva."],
    ["Movimiento compuesto", "El que resulta de la combinación de varios movimientos simples."],
    ["Alcance", "Distancia horizontal que recorre un proyectil."],
    ["Tiempo de vuelo", "Tiempo que permanece un proyectil en el aire."],
    ["Relación de transmisión", "Cociente entre las velocidades angulares de dos ruedas conectadas."],
    ["Efecto Magnus", "Fuerza lateral sobre un objeto que gira mientras se mueve en un fluido."],
  ],
  situacion: {
    titulo: "Diseña una fuente para la plaza",
    reto: "El ayuntamiento quiere una fuente con chorros que formen arcos que caigan exactamente dentro de un estanque circular de 3 m de radio, sin mojar a los paseantes. Vuestro equipo calculará los parámetros de los chorros.",
    pasos: [
      "Modelizad cada chorro como un tiro oblicuo sin rozamiento desde el centro del estanque, a 0,5 m de altura.",
      "Calculad la velocidad de salida necesaria para que un chorro a 45° caiga a 2,5 m del centro.",
      "Calculad la altura máxima de chorros a 30°, 45°, 60° y 75° con esa velocidad y comprobad cuáles caen dentro.",
      "Grabad con el móvil un chorro real (manguera) y analizad su trayectoria con Tracker para comparar con el modelo.",
      "Proponed un diseño final y discutid el efecto del viento y del rozamiento.",
    ],
    producto: "Un plano de la fuente con los ángulos y velocidades de cada chorro, y un informe con los cálculos y la comparación experimental.",
    evaluacion: ["Las ecuaciones del tiro oblicuo se aplican correctamente.", "Los cálculos de alcance y altura son correctos.", "El análisis experimental se hace con rigor.", "El diseño final es coherente con los cálculos y con las limitaciones reales."],
  },
  familias: [
    "Contad las vueltas de la rueda de una bici en un minuto y calculad su velocidad.",
    "Medid el alcance de un chorro de manguera con distintos ángulos y buscad el máximo.",
    "Observad en un partido de baloncesto o fútbol las trayectorias parabólicas.",
    "Calculad la velocidad del tambor de vuestra lavadora al centrifugar.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Cinemática»: componentes intrínsecas de la aceleración, movimiento circular uniforme y uniformemente acelerado, relación entre magnitudes lineales y angulares, composición de movimientos y tiro horizontal y oblicuo.`,
    ideas: [
      "Análisis con Tracker de un lanzamiento parabólico grabado con el móvil.",
      "Medida de la aceleración centrípeta con el acelerómetro del móvil en una silla giratoria (phyphox).",
      "Simulación PhET «Movimiento de proyectiles» para estudiar alcance y ángulo.",
      "Estudio de las relaciones de transmisión de una bicicleta real.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Simulación «Movimiento de proyectiles» (PhET)", url: "https://phet.colorado.edu/es/simulations/projectile-motion" },
    { t: "Movimiento parabólico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Movimiento_parab%C3%B3lico" },
  ],
  revisado: "2026-11-14",
};
