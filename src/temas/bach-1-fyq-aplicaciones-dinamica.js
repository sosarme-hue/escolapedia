// Física y Química 1º Bachillerato · Aplicaciones de la dinámica (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, escala, barras, graf, fuerzas, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach1L2");

const plano = marco("Bloque en un plano inclinado: el peso se descompone en una componente paralela al plano, P·sen α, y otra perpendicular, P·cos α", `
  <defs><marker id="pi1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="pi2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker><marker id="pi3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker></defs>
  <path d="M20 160 L 240 160 L 20 50 Z" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
  <g transform="rotate(26.6 110 95)"><rect x="90" y="75" width="40" height="26" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/></g>
  <path d="M112 92 L 112 150" stroke="var(--red)" stroke-width="3" marker-end="url(#pi1)"/>${T(122, 150, "P", { fs: 13, b: true, c: "var(--red)" })}
  <path d="M112 92 L 87 41" stroke="var(--leaf)" stroke-width="3" marker-end="url(#pi3)"/>${T(80, 38, "N", { fs: 13, b: true, c: "var(--leaf)" })}
  <path d="M112 92 L 150 111" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#pi2)"/>${T(176, 112, "P·sen α", { fs: 12, b: true, c: "var(--pen)" })}
  ${T(210, 152, "α", { fs: 15, b: true })}`);

const enlazados = marco("Máquina de Atwood: dos masas colgadas de una polea unidas por una cuerda", `
  <circle cx="130" cy="34" r="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="130" cy="34" r="4" fill="var(--ink)"/><path d="M130 14 V 6 M100 6 H 160" stroke="var(--muted)" stroke-width="3"/>
  <path d="M110 34 V 96 M150 34 V 126" stroke="var(--ink)" stroke-width="2"/>
  <rect x="94" y="96" width="32" height="32" rx="4" fill="var(--pen)"/>${T(110, 117, "m₁", { fs: 13, b: true, c: "#fff" })}
  <rect x="132" y="126" width="36" height="40" rx="4" fill="var(--red)"/>${T(150, 151, "m₂", { fs: 13, b: true, c: "#fff" })}
  ${T(60, 70, "T", { fs: 14, b: true, c: "var(--leaf)" })}${T(196, 100, "T", { fs: 14, b: true, c: "var(--leaf)" })}
  ${T(60, 130, "sube", { fs: 12, c: "var(--pen)" })}${T(206, 156, "baja", { fs: 12, c: "var(--red)" })}
  ${T(130, 178, "a = (m₂ − m₁) g / (m₁ + m₂)", { fs: 11, b: true })}`);

module.exports = {
  materia: "Física y Química",
  curso: "1-bachillerato",
  titulo: "Aplicaciones de la dinámica",
  minutos: 115,
  objetivos: [
    "Aplicar las leyes del rozamiento estático y dinámico",
    "Resolver problemas de cuerpos en planos horizontales e inclinados, con y sin rozamiento",
    "Analizar sistemas de cuerpos enlazados con cuerdas y poleas",
    "Aplicar la ley de Hooke y describir el movimiento de un muelle",
    "Explicar la dinámica del movimiento circular: fuerza centrípeta en curvas, péndulos y órbitas",
    "Estudiar el equilibrio de un punto material y la fuerza en fluidos de forma introductoria",
  ],
  claves: ["rozamiento estático", "rozamiento dinámico", "coeficiente de rozamiento", "plano inclinado", "cuerpos enlazados", "polea", "tensión", "ley de Hooke", "constante elástica", "fuerza centrípeta", "peralte", "péndulo cónico", "equilibrio"],
  pregunta: {
    texto: "¿Por qué los coches derrapan en las curvas cuando el suelo está mojado?",
    respuesta: "Para girar, un coche necesita una <mark>fuerza hacia el centro</mark> de la curva, y en una carretera plana esa fuerza la da el rozamiento entre neumáticos y asfalto. Con agua, el coeficiente de rozamiento baja a la mitad o menos, y la fuerza máxima disponible no basta: el coche sigue recto por inercia y «se sale» de la curva. Por eso hay que reducir la velocidad: la fuerza necesaria crece con v².",
  },
  lectura: {
    titulo: "Las curvas de un velódromo",
    html: `<p>Si alguna vez has visto una carrera de ciclismo en pista, te habrán llamado la atención las curvas: están tan inclinadas, hasta 45°, que parece que los ciclistas van a caerse hacia dentro. Sin embargo, a gran velocidad ruedan por ellas sin problema, y si van demasiado despacio, se deslizan hacia abajo. La explicación está en la dinámica del movimiento circular. Para tomar una curva, hace falta una fuerza neta dirigida al centro. En una pista plana solo la puede dar el rozamiento de las ruedas, pero en una curva peraltada la propia fuerza normal de la pista se inclina y apunta en parte hacia el centro.</p><p>El mismo principio se usa en las autovías, en las vías del tren de alta velocidad y en las montañas rusas. Los ingenieros calculan el peralte necesario para la velocidad de diseño de cada curva. En este tema aplicarás las leyes de Newton a situaciones reales como esta: el rozamiento, los planos inclinados, las poleas y cuerdas, los muelles y el movimiento circular. Son los problemas que resuelven a diario ingenieros de caminos, mecánicos, diseñadores de atracciones o fisioterapeutas.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La fuerza de rozamiento", p: [
      "Cuando dos superficies están en contacto y una tiende a deslizar sobre la otra, aparece una fuerza paralela a ellas que se opone al deslizamiento: la <mark>fuerza de rozamiento</mark>. Se debe a las irregularidades microscópicas de las superficies y a las fuerzas de adhesión entre sus átomos. Sin rozamiento no podríamos caminar, frenar un coche ni sujetar un lápiz.",
      "Hay dos tipos. El <b>rozamiento estático</b> actúa cuando el cuerpo está en reposo: se ajusta a la fuerza aplicada, impidiendo el movimiento, hasta un valor máximo F<sub>r,máx</sub> = μ<sub>e</sub> · N. Si empujas un armario con 50 N y no se mueve, el rozamiento vale 50 N; si empujas con 100 N y sigue quieto, vale 100 N. El <b>rozamiento dinámico</b> o cinético actúa cuando el cuerpo ya desliza y vale F<sub>r</sub> = μ<sub>d</sub> · N, constante. El <b>coeficiente de rozamiento</b> μ no tiene unidades y depende de los materiales y del estado de las superficies, no del área de contacto. Normalmente μ<sub>d</sub> < μ<sub>e</sub>: cuesta más poner en marcha un mueble que mantenerlo en movimiento.",
    ], extra: formula("F<sub>r,e</sub> ≤ μ<sub>e</sub> · N ; F<sub>r,d</sub> = μ<sub>d</sub> · N"), svg: graf("Fuerza de rozamiento frente a fuerza aplicada: crece hasta el máximo estático y luego baja al valor dinámico", "F aplicada", "Fr", [{ p: [[0, 0], [0.5, 0.8], [0.55, 0.6], [1, 0.6]], c: "var(--red)", t: "" }], `<text x="80" y="58" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">estático</text><text x="200" y="64" font-size="11" fill="var(--pen)" font-weight="700" text-anchor="middle" font-family="Atkinson Hyperlegible, sans-serif">dinámico</text>`) }),
    bloque({ h: "1.2 Coeficientes de rozamiento y aplicaciones", p: [
      "Los coeficientes de rozamiento se miden experimentalmente. Valores típicos: neumático sobre asfalto seco, μ ≈ 0,7-0,9; sobre asfalto mojado, 0,4-0,5; sobre hielo, 0,1; madera sobre madera, 0,3-0,5; acero sobre hielo (patines), 0,02; teflón sobre teflón, 0,04. Las articulaciones del cuerpo humano, lubricadas con líquido sinovial, tienen μ ≈ 0,01, mejor que casi cualquier máquina.",
      "En la técnica a veces se busca aumentar el rozamiento (dibujo de los neumáticos, suelas de las zapatillas, arena en las vías del tren con hielo) y otras reducirlo (lubricantes, rodamientos de bolas, superficies pulidas) para ahorrar energía y evitar el desgaste. El <mark>sistema ABS</mark> de los frenos aprovecha que μ<sub>e</sub> > μ<sub>d</sub>: impide que las ruedas se bloqueen y deslicen, de modo que la rueda sigue girando y trabaja con rozamiento estático, que es mayor y además permite seguir dirigiendo el coche. Un método sencillo para medir μ<sub>e</sub> es inclinar un plano hasta que el cuerpo empieza a deslizar: μ<sub>e</sub> = tg α.",
    ], svg: barras("Coeficientes de rozamiento aproximados", "Coeficiente de rozamiento μ", [["Neumático seco", 0.8, "var(--ink)", "0,8"], ["Neumático mojado", 0.45, "var(--pen)", "0,45"], ["Madera-madera", 0.4, "#b45309", "0,4"], ["Neumático hielo", 0.1, "var(--leaf)", "0,1"], ["Patín-hielo", 0.02, "var(--muted)", "0,02"]]) }),
    bloque({ h: "1.3 Cuerpos en planos horizontales", p: [
      "El problema más sencillo es un bloque arrastrado por una superficie horizontal. Con ejes X horizontal (sentido del movimiento) e Y vertical: en Y no hay aceleración, así que N = m · g si no hay otras fuerzas verticales; en X, F − F<sub>r</sub> = m · a, con F<sub>r</sub> = μ · m · g. Si la fuerza tira <b>inclinada</b> un ángulo θ hacia arriba, su componente vertical F · sen θ «levanta» algo el cuerpo y la normal disminuye: N = m·g − F·sen θ. Con menos normal hay menos rozamiento: por eso es más fácil arrastrar una maleta tirando hacia arriba que empujándola hacia abajo.",
      "Un caso frecuente es un cuerpo lanzado que se frena solo por rozamiento: −μ · m · g = m · a, de donde <mark>a = −μ · g</mark>, independiente de la masa. Así se calcula, por ejemplo, la velocidad de un coche a partir de la longitud de sus huellas de frenada: v₀ = √(2 · μ · g · d). Unas huellas de 40 m en asfalto seco (μ = 0,8) indican que el coche iba al menos a 25 m/s (90 km/h).",
    ], extra: formula("a = −μ · g (frenado solo por rozamiento)"), svg: fuerzas("Diagrama de fuerzas de una maleta arrastrada con una fuerza inclinada", "m", [[90, 36, "N", "var(--leaf)"], [270, 46, "P", "var(--red)"], [35, 62, "F", "var(--pen)"], [180, 38, "Fr", "#b45309"]]) }),
    bloque({ h: "1.4 El plano inclinado", p: [
      "En un <mark>plano inclinado</mark> un ángulo α conviene tomar el eje X paralelo al plano y el eje Y perpendicular. Así la normal y el rozamiento quedan sobre los ejes, y solo hay que descomponer el peso: componente paralela al plano, P<sub>x</sub> = m·g·sen α, que tiende a hacer bajar el cuerpo; y componente perpendicular, P<sub>y</sub> = m·g·cos α, que lo aprieta contra el plano. Como en Y no hay aceleración, <b>N = m·g·cos α</b>, menor que el peso.",
      "Sin rozamiento, el cuerpo baja con a = g · sen α, independiente de la masa. Con rozamiento hay que pensar primero <b>hacia dónde</b> se mueve (o tiende a moverse), porque el rozamiento siempre se opone al deslizamiento. Si baja: m·g·sen α − μ·m·g·cos α = m·a. Si se lanza hacia arriba, el rozamiento también apunta hacia abajo mientras sube: a = −g·(sen α + μ cos α). Un cuerpo en reposo en el plano no desliza si m·g·sen α ≤ μ<sub>e</sub>·m·g·cos α, es decir, si <b>tg α ≤ μ<sub>e</sub></b>.",
    ], extra: formula("N = m·g·cos α ; a (baja) = g·(sen α − μ·cos α)"), svg: plano }),
    bloque({ h: "2.1 Cuerpos enlazados", p: [
      "Muchos sistemas están formados por varios cuerpos unidos por <b>cuerdas</b> que pasan por <b>poleas</b>: grúas, ascensores con contrapeso, máquinas de gimnasio. Con cuerdas y poleas ideales (sin masa ni rozamiento, e inextensibles), todos los cuerpos se mueven con la <mark>misma aceleración</mark> en módulo, y la tensión es la misma a ambos lados de la polea.",
      "El método es: (1) decidir el sentido del movimiento (si no está claro, suponerlo; si sale a negativa, era el contrario y hay que revisar el rozamiento); (2) dibujar el diagrama de fuerzas de <b>cada</b> cuerpo por separado; (3) aplicar ΣF = m·a a cada uno en la dirección de su movimiento, tomando como positivo el sentido en que se mueve ese cuerpo; (4) resolver el sistema de ecuaciones (incógnitas: a y las tensiones). Un atajo útil: sumando todas las ecuaciones, las tensiones se cancelan y queda (fuerzas que mueven − fuerzas que frenan) = (masa total) · a.",
    ], svg: pasos("Método para resolver problemas de cuerpos enlazados", ["Elegir el sentido del movimiento", "Diagrama de cada cuerpo", "ΣF = m·a en cada uno", "Sumar: se cancelan las T"], "var(--leaf)"), video: V("apl-d", "Cómo calcular la tensión de las cuerdas", "tensión cuerdas") }),
    bloque({ h: "2.2 La máquina de Atwood y un bloque con otro colgando", p: [
      "La <mark>máquina de Atwood</mark> son dos masas m₁ < m₂ colgadas a ambos lados de una polea. La más pesada baja y la otra sube. Ecuaciones: para m₂ (baja): m₂·g − T = m₂·a; para m₁ (sube): T − m₁·g = m₁·a. Sumando: a = (m₂ − m₁)·g/(m₁ + m₂). Si las masas son parecidas, la aceleración es pequeña y fácil de medir: Atwood la diseñó en 1784 precisamente para estudiar la caída «a cámara lenta» y medir g.",
      "Otro sistema clásico es un bloque m₁ sobre una mesa unido por una cuerda que pasa por una polea en el borde a otro bloque m₂ que cuelga. El que cuelga tira del sistema con su peso, y el rozamiento de la mesa frena al primero: m₂·g − μ·m₁·g = (m₁ + m₂)·a. La tensión se obtiene después de cualquiera de las dos ecuaciones: por ejemplo, T = m₂·(g − a). Observa que la tensión es <b>menor</b> que el peso del bloque que cuelga mientras este acelera hacia abajo: si fuera igual, no bajaría acelerando.",
    ], extra: formula("Atwood: a = (m₂ − m₁)·g / (m₁ + m₂)"), svg: enlazados }),
    bloque({ h: "2.3 Fuerzas elásticas: la ley de Hooke", p: [
      "Los cuerpos <b>elásticos</b> recuperan su forma cuando deja de actuar la fuerza que los deforma. Robert Hooke descubrió en 1678 que, para deformaciones no demasiado grandes, el alargamiento de un muelle es proporcional a la fuerza aplicada. La <mark>ley de Hooke</mark> se escribe F = −k · Δx: el muelle ejerce una fuerza proporcional a su deformación y de sentido contrario (fuerza recuperadora). La constante elástica k (N/m) mide la rigidez del muelle: cuanto mayor, más duro.",
      "La ley solo se cumple hasta el <b>límite de elasticidad</b>; si se estira más, el muelle queda deformado permanentemente (deformación plástica) y, con más fuerza, se rompe. Los <b>dinamómetros</b> miden fuerzas aprovechando la ley de Hooke: el alargamiento del muelle indica la fuerza en una escala graduada. Un cuerpo colgado de un muelle en reposo cumple k·Δx = m·g, lo que permite medir k. Si se aparta de esa posición y se suelta, oscila con un <b>movimiento armónico simple</b>, de periodo T = 2π·√(m/k), que estudiarás con detalle en 2º de Bachillerato.",
    ], extra: formula("F = −k · Δx ; T = 2π · √(m / k)"), svg: graf("Ley de Hooke: la fuerza es proporcional al alargamiento hasta el límite de elasticidad", "Δx", "F", [{ p: [[0, 0], [0.6, 0.72], [0.75, 0.82], [0.9, 0.86], [1, 0.87]], c: "var(--pen)", t: "" }], `<text x="150" y="114" font-size="11" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">F = k Δx</text><text x="200" y="40" font-size="11" fill="var(--red)" font-weight="700" text-anchor="middle" font-family="Atkinson Hyperlegible, sans-serif">límite</text>`), video: V("apl-c", "Ley de Hooke: fuerza elástica", "ley de Hooke") }),
    bloque({ h: "3.1 Dinámica del movimiento circular", p: [
      "En el tema de cinemática vimos que todo movimiento circular tiene una aceleración normal a<sub>n</sub> = v²/R hacia el centro. Según la segunda ley de Newton, para producirla hace falta una fuerza resultante dirigida hacia el centro: la <mark>fuerza centrípeta</mark>, F<sub>c</sub> = m · v²/R = m · ω² · R. No es un tipo nuevo de fuerza: es el nombre que recibe la resultante de las fuerzas reales en la dirección del radio.",
      "Según el caso, la fuerza centrípeta la proporciona una fuerza distinta: la <b>tensión</b> de la cuerda en una piedra que gira atada; la <b>gravedad</b> en un satélite o la Luna; el <b>rozamiento</b> lateral de los neumáticos en un coche que toma una curva plana; la <b>normal</b> de las paredes en el tambor de una lavadora o en una curva peraltada; la <b>fuerza eléctrica</b> en el modelo de Bohr del átomo. Si la fuerza centrípeta desaparece de golpe (se rompe la cuerda), el cuerpo sale en línea recta, tangente a la circunferencia: no hay ninguna fuerza que lo lance «hacia fuera».",
    ], extra: formula("F<sub>c</sub> = m · v² / R = m · ω² · R"), svg: rejilla("Qué fuerza real hace de fuerza centrípeta en cada caso", ["Situación", "Fuerza centrípeta"], [["Piedra en una honda", "tensión"], ["Satélite, Luna", "gravedad"], ["Coche en curva plana", "rozamiento"], ["Curva peraltada", "componente de la normal"], ["Lavadora", "normal del tambor"]], "var(--red)"), video: V("apl-b", "Fuerza centrípeta explicada", "fuerza centrípeta") }),
    bloque({ h: "3.2 Curvas planas y curvas peraltadas", p: [
      "En una curva <b>plana</b>, la única fuerza horizontal sobre el coche es el rozamiento lateral (estático, porque la rueda no desliza de lado). La condición para no derrapar es que el rozamiento máximo sea suficiente: m·v²/R ≤ μ·m·g, de donde la <mark>velocidad máxima</mark> es v<sub>máx</sub> = √(μ·g·R), independiente de la masa del coche. En una curva de 50 m de radio con asfalto seco (μ = 0,8), v<sub>máx</sub> = 19,8 m/s (71 km/h); mojado (μ = 0,4), solo 14 m/s (50 km/h).",
      "En una curva <b>peraltada</b> un ángulo θ, la normal está inclinada y su componente horizontal N·sen θ apunta al centro. Sin rozamiento, la componente vertical equilibra el peso (N·cos θ = m·g) y la horizontal da la fuerza centrípeta (N·sen θ = m·v²/R). Dividiendo: <b>tg θ = v²/(R·g)</b>. Esa es la velocidad ideal para la que se diseña el peralte: a esa velocidad el coche toma la curva sin necesitar rozamiento lateral, incluso con hielo. A más velocidad, el rozamiento ayuda hacia dentro; a menos, hacia fuera.",
    ], extra: formula("Curva plana: v<sub>máx</sub> = √(μ·g·R) ; peralte: tg θ = v² / (R·g)"), svg: compara("Curva plana y curva peraltada", ["Plana", ["Fc = rozamiento", "vmáx = √(μgR)", "depende del", "estado del suelo"]], ["Peraltada", ["Fc = N·sen θ", "tg θ = v²/Rg", "funciona incluso", "sin rozamiento"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "3.3 Otros movimientos circulares: péndulo cónico, lazo y planos verticales", p: [
      "En un <b>péndulo cónico</b>, una masa atada a una cuerda de longitud L gira en un círculo horizontal y la cuerda describe un cono de semiángulo θ. Las fuerzas son el peso y la tensión: la componente vertical de la tensión equilibra el peso (T·cos θ = m·g) y la horizontal es la centrípeta (T·sen θ = m·v²/R, con R = L·sen θ). Se obtiene tg θ = v²/(R·g), la misma relación que en la curva peraltada. Así funcionan las sillas voladoras de las ferias: cuanto más rápido giran, más se inclinan.",
      "En un <b>movimiento circular vertical</b>, como una piedra atada que gira en vertical, un cubo de agua o un <mark>lazo de montaña rusa</mark>, la fuerza centrípeta cambia en cada punto. En el punto más alto, el peso y la tensión (o la normal) apuntan hacia el centro: T + m·g = m·v²/R. La velocidad mínima para completar la vuelta es la que hace T = 0: v<sub>mín</sub> = √(g·R). Por debajo, la cuerda se destensa o el vagón se separa de la vía. Por eso el agua no cae del cubo si se gira lo bastante deprisa. En el punto más bajo, T − m·g = m·v²/R: la tensión es máxima y la cuerda se rompe allí con más facilidad.",
    ], extra: formula("Punto más alto: v<sub>mín</sub> = √(g · R)"), svg: compara("Fuerzas en los puntos alto y bajo de un movimiento circular vertical", ["Arriba", ["T + mg = mv²/R", "T mínima", "vmín = √(gR)"]], ["Abajo", ["T − mg = mv²/R", "T máxima", "se rompe aquí"]], "var(--leaf)", "var(--red)") }),
    bloque({ h: "3.4 Equilibrio de un punto material", p: [
      "Un cuerpo que se puede tratar como un punto está en <mark>equilibrio</mark> cuando la resultante de las fuerzas que actúan sobre él es nula: ΣF<sub>x</sub> = 0 y ΣF<sub>y</sub> = 0. Puede estar en reposo (equilibrio estático) o en MRU. Estas dos ecuaciones permiten calcular fuerzas desconocidas en estructuras sencillas: lámparas colgadas de dos cables, cuadros, tendederos o puentes colgantes.",
      "Por ejemplo, si una lámpara de 50 N cuelga en el centro de un cable cuyos dos tramos forman 30° con la horizontal, cada tramo tiene una tensión T tal que 2·T·sen 30° = 50 N, es decir, T = 50 N. Si el cable estuviera casi horizontal (ángulo pequeño), la tensión sería enorme: con 5°, T = 287 N. Por eso es imposible tensar del todo una cuerda con un peso colgado en el centro, y los cables de la luz siempre cuelgan algo. En el caso de cuerpos extensos, además de la suma de fuerzas debe anularse la suma de <b>momentos</b> para que no giren, como en las palancas.",
    ], extra: formula("Equilibrio: ΣF<sub>x</sub> = 0 ; ΣF<sub>y</sub> = 0"), svg: barras("Tensión de cada tramo de cable para sostener 50 N según el ángulo con la horizontal", "Tensión (N) según el ángulo", [["90°", 25, "var(--leaf)", "25 N"], ["60°", 28.9, "var(--leaf)", "29 N"], ["30°", 50, "var(--pen)", "50 N"], ["10°", 144, "#b45309", "144 N"], ["5°", 287, "var(--red)", "287 N"]]) }),
  ],
  figura: figura("Las fuerzas de los problemas reales", "Rozamiento, plano inclinado, cuerdas y poleas, muelles y fuerza centrípeta", [["Rozamiento", "Fr = μ · N", "estático ≥ dinámico"], ["Plano", "N = mg cos α", "Px = mg sen α"], ["Muelles", "F = −k Δx", "Hooke"], ["Circular", "Fc = m v²/R", "hacia el centro"]]),
  video: V("apl-a", "Plano inclinado, fuerza y movimiento", "aplicaciones de la dinámica"),
  ejemplos: [
    { enunciado: "Un bloque de 10 kg se arrastra por el suelo con 60 N horizontales. μ<sub>d</sub> = 0,3. Calcula la aceleración (g = 9,8).", pasos: ["N = 98 N; F<sub>r</sub> = 0,3 · 98 = 29,4 N.", "60 − 29,4 = 10 · a.", "a = 3,06 m/s²."], resultado: "a ≈ 3,1 m/s²." },
    { enunciado: "Un cuerpo baja por un plano inclinado de 30° con μ = 0,2. Calcula su aceleración.", pasos: ["a = g · (sen 30° − μ cos 30°).", "a = 9,8 · (0,5 − 0,2 · 0,866).", "a = 9,8 · 0,327 = 3,2 m/s²."], resultado: "a ≈ 3,2 m/s² hacia abajo." },
    { enunciado: "Un bloque de 4 kg sobre una mesa (μ = 0,25) está unido por una cuerda a otro de 2 kg que cuelga. Calcula a y T (g = 10).", pasos: ["Sistema: 2 · 10 − 0,25 · 4 · 10 = 6 · a.", "20 − 10 = 6a → a = 1,67 m/s².", "Bloque colgado: 20 − T = 2 · 1,67 → T = 16,7 N."], resultado: "a ≈ 1,67 m/s²; T ≈ 16,7 N." },
    { enunciado: "Un muelle se alarga 5 cm al colgarle 2 kg. Calcula k y cuánto se alarga con 3 kg (g = 9,8).", pasos: ["k = m·g / Δx = 19,6 / 0,05 = 392 N/m.", "Δx = 29,4 / 392 = 0,075 m."], resultado: "k = 392 N/m; se alarga 7,5 cm." },
    { enunciado: "¿A qué velocidad máxima puede tomar un coche una curva plana de 80 m con μ = 0,6? ¿Qué peralte haría falta para tomarla a esa velocidad sin rozamiento?", pasos: ["v<sub>máx</sub> = √(0,6 · 9,8 · 80) = 21,7 m/s (78 km/h).", "tg θ = v² / (Rg) = 470 / 784 = 0,6.", "θ = 31°."], resultado: "21,7 m/s; peralte de 31°." },
    { enunciado: "Una piedra de 0,5 kg gira en un círculo vertical de 1 m de radio. Calcula la velocidad mínima en el punto más alto y la tensión en el más bajo si allí va a 6 m/s.", pasos: ["v<sub>mín</sub> = √(9,8 · 1) = 3,13 m/s.", "Abajo: T − mg = mv²/R.", "T = 0,5 · 9,8 + 0,5 · 36 / 1 = 4,9 + 18 = 22,9 N."], resultado: "3,1 m/s; T = 22,9 N." },
  ],
  errores: [
    "Calcular siempre el rozamiento estático como μ·N: ese es su valor máximo; si el cuerpo no se mueve, vale lo justo.",
    "Tomar N = m·g en un plano inclinado o con fuerzas inclinadas.",
    "Poner el rozamiento a favor del movimiento o en el sentido equivocado al subir por un plano.",
    "Suponer que la tensión de la cuerda es igual al peso del cuerpo que cuelga cuando el sistema acelera.",
    "Añadir la «fuerza centrípeta» como una fuerza más en el diagrama: es la resultante de las fuerzas reales.",
    "Hablar de fuerza centrífuga en un sistema inercial.",
  ],
  ejercicios: [
    B("¿Qué diferencia hay entre rozamiento estático y dinámico?", "El estático actúa con el cuerpo en reposo y se ajusta hasta un máximo μ<sub>e</sub>N; el dinámico actúa cuando desliza y vale μ<sub>d</sub>N, normalmente menor."),
    B("Un armario de 80 kg tiene μ<sub>e</sub> = 0,5. ¿Qué fuerza mínima hay que hacer para moverlo? (g = 10)", "F = 0,5 · 800 = 400 N."),
    B("Si empujas el armario anterior con 200 N y no se mueve, ¿cuánto vale el rozamiento?", "200 N: el estático se iguala a la fuerza aplicada."),
    B("Un disco de hockey se lanza a 10 m/s y se para tras 50 m. Calcula μ (g = 10).", "a = −100/100 = −1 m/s² → μ = 0,1."),
    B("Calcula la normal de un bloque de 5 kg en un plano inclinado de 37° (cos 37° = 0,8; g = 10).", "N = 50 · 0,8 = 40 N."),
    B("¿Con qué aceleración baja un cuerpo por un plano de 30° sin rozamiento?", "a = g sen 30° = 4,9 m/s²."),
    B("Un cuerpo empieza a deslizar en un plano cuando la inclinación es de 25°. ¿Cuánto vale μ<sub>e</sub>?", "μ<sub>e</sub> = tg 25° = 0,47."),
    B("Un muelle de k = 200 N/m se estira 10 cm. ¿Qué fuerza ejerce?", "F = 200 · 0,1 = 20 N."),
    B("¿Qué fuerza centrípeta necesita un coche de 1000 kg a 20 m/s en una curva de 100 m?", "F = 1000 · 400 / 100 = 4000 N."),
    B("¿Qué fuerza hace de centrípeta en un satélite? ¿Y en un coche en una curva plana?", "La gravedad; el rozamiento lateral de los neumáticos."),
    B("Si se rompe la cuerda de una honda que gira, ¿qué trayectoria sigue la piedra?", "Sale en línea recta tangente a la circunferencia (luego cae como un proyectil)."),
    B("Calcula la aceleración de una máquina de Atwood con masas de 3 y 5 kg (g = 10).", "a = 2 · 10 / 8 = 2,5 m/s²."),
    M("Se tira de una caja de 20 kg con 100 N a 30° sobre la horizontal. μ = 0,3. Calcula N y a (g = 9,8).", "N = 196 − 50 = 146 N; F<sub>r</sub> = 43,8 N. a = (86,6 − 43,8) / 20 = 2,14 m/s²."),
    M("Se lanza un bloque hacia arriba por un plano de 30° a 10 m/s con μ = 0,2. ¿Qué distancia recorre hasta pararse?", "a = −9,8(0,5 + 0,173) = −6,6 m/s². d = 100 / 13,2 = 7,6 m."),
    M("En el ejercicio anterior, ¿volverá a bajar el bloque? Justifícalo.", "Sí, porque tg 30° = 0,58 > μ = 0,2 (suponiendo μ<sub>e</sub> ≈ 0,2): la componente del peso supera el rozamiento máximo."),
    M("¿Qué fuerza paralela al plano hay que hacer para subir a velocidad constante un cuerpo de 50 kg por una rampa de 20° con μ = 0,1? (g = 9,8)", "F = mg(sen 20° + μ cos 20°) = 490 · (0,342 + 0,094) = 214 N."),
    M("Dos bloques de 3 y 2 kg unidos por una cuerda se arrastran por el suelo (μ = 0,2) tirando del primero con 30 N. Calcula a y la tensión (g = 10).", "30 − 0,2 · 50 = 5a → a = 4 m/s². Bloque de 2 kg: T − 4 = 2 · 4 → T = 12 N."),
    M("En una máquina de Atwood con 2 y 3 kg, calcula la tensión de la cuerda (g = 9,8).", "a = 9,8 / 5 = 1,96 m/s². T = 2 · (9,8 + 1,96) = 23,5 N."),
    M("Un cuerpo de 0,5 kg colgado de un muelle lo alarga 10 cm. ¿Cuál será el periodo de sus oscilaciones?", "k = 4,9 / 0,1 = 49 N/m. T = 2π √(0,5/49) = 0,63 s."),
    M("Calcula la velocidad máxima en una rotonda plana de 20 m de radio con suelo mojado (μ = 0,4).", "v = √(0,4 · 9,8 · 20) = 8,9 m/s = 32 km/h."),
    M("Una curva de 200 m está peraltada para 90 km/h. Calcula el peralte.", "tg θ = 625 / 1960 = 0,319 → θ = 17,7°."),
    M("Un cubo de agua gira en un círculo vertical de 1,2 m. ¿Qué velocidad mínima debe llevar arriba para que no caiga el agua?", "v = √(9,8 · 1,2) = 3,4 m/s."),
    A("Un bloque de 2 kg sobre un plano de 30° (μ = 0,1) está unido por una cuerda que pasa por una polea en lo alto del plano a otro de 3 kg que cuelga. Calcula a y T (g = 9,8).", "Baja el colgado. 3·9,8 − 2·9,8·(0,5 + 0,1·0,866) = 5a → 29,4 − 11,5 = 5a → a = 3,58 m/s². T = 3 · (9,8 − 3,58) = 18,7 N."),
    A("Un coche de 1200 kg toma una curva de 100 m peraltada 15° a 90 km/h. ¿Qué fuerza de rozamiento lateral necesita y en qué sentido? (g = 9,8)", "Eje radial: N sen θ + F<sub>r</sub> cos θ = mv²/R; vertical: N cos θ − F<sub>r</sub> sen θ = mg. mv²/R = 7500 N; mg = 11.760 N. Resolviendo: F<sub>r</sub> = 7500 cos 15° − 11.760 sen 15° = 7244 − 3044 = 4200 N hacia el centro."),
    A("Un péndulo cónico de 1 m de cuerda gira formando 30° con la vertical. Calcula la velocidad y el periodo (g = 9,8).", "R = 0,5 m. tg 30° = v²/(Rg) → v² = 0,577 · 4,9 = 2,83 → v = 1,68 m/s. T = 2πR/v = 1,87 s."),
    A("Una lámpara de 40 N cuelga de dos cables que forman 37° y 53° con la horizontal. Calcula la tensión de cada uno (sen 37° = 0,6; cos 37° = 0,8).", "Horizontal: T₁ cos 37° = T₂ cos 53° → 0,8T₁ = 0,6T₂. Vertical: 0,6T₁ + 0,8T₂ = 40. Resolviendo: T₂ = 32 N, T₁ = 24 N."),
    A("Un niño de 30 kg baja por un tobogán de 3 m de altura y 45° con μ = 0,2. ¿Con qué velocidad llega abajo? (g = 9,8)", "a = 9,8 · (0,707 − 0,141) = 5,55 m/s². Longitud = 3/sen 45° = 4,24 m. v = √(2 · 5,55 · 4,24) = 6,9 m/s."),
    A("Demuestra que la velocidad máxima en una curva peraltada θ con rozamiento μ es v² = R·g·(sen θ + μ cos θ)/(cos θ − μ sen θ).", "Con el rozamiento hacia dentro: N sen θ + μN cos θ = mv²/R y N cos θ − μN sen θ = mg. Dividiendo ambas ecuaciones se obtiene la expresión."),
    A("En un lazo de montaña rusa de 10 m de radio, el vagón pasa por arriba a 15 m/s. ¿Qué fuerza hace la vía sobre un pasajero de 60 kg? ¿Cuántas veces su peso siente?", "N + mg = mv²/R → N = 60 · 22,5 − 588 = 762 N hacia abajo. Siente 762/588 = 1,3 veces su peso (presionado contra el asiento)."),
    A("Un bloque de 5 kg se coloca sobre otro de 10 kg que está sobre una mesa sin rozamiento. Entre los bloques μ<sub>e</sub> = 0,4. ¿Qué fuerza máxima se puede aplicar al de abajo sin que el de arriba deslice? (g = 10)", "El de arriba solo se acelera por rozamiento: a<sub>máx</sub> = μg = 4 m/s². F<sub>máx</sub> = 15 · 4 = 60 N."),
  ],
  quiz: [
    q4("El rozamiento dinámico vale…", ["μ<sub>d</sub> · P", "μ<sub>d</sub> · N", "μ · m", "N / μ"], 1, "Proporcional a la normal."),
    q4("El coeficiente de rozamiento…", ["tiene unidades de N", "no tiene unidades", "depende del área", "es siempre mayor que 1"], 1, "Es un cociente de fuerzas."),
    q4("Normalmente…", ["μ<sub>d</sub> > μ<sub>e</sub>", "μ<sub>e</sub> > μ<sub>d</sub>", "son iguales", "μ<sub>e</sub> = 0"], 1, "Cuesta más arrancar."),
    q4("Si un mueble no se mueve al empujarlo con 30 N, el rozamiento es…", ["0", "30 N", "μ<sub>e</sub>N siempre", "mayor de 30 N"], 1, "El estático se iguala a la fuerza."),
    q4("Un cuerpo que desliza frenado solo por rozamiento tiene a =", ["−g", "−μg", "−μ/g", "−mg"], 1, "No depende de la masa."),
    q4("En un plano inclinado α, N =", ["mg", "mg sen α", "mg cos α", "mg tg α"], 2, "Componente perpendicular del peso."),
    q4("Sin rozamiento, un cuerpo baja un plano con a =", ["g", "g sen α", "g cos α", "g tg α"], 1, "Componente paralela."),
    q4("Un cuerpo en reposo en un plano no desliza si…", ["tg α ≤ μ<sub>e</sub>", "sen α ≤ μ", "α > 45°", "N = 0"], 0, "Condición de equilibrio."),
    q4("Al tirar hacia arriba con una fuerza inclinada, la normal…", ["aumenta", "disminuye", "no cambia", "se anula siempre"], 1, "Parte de la fuerza sostiene el cuerpo."),
    q4("En cuerpos enlazados con cuerda ideal, todos tienen…", ["la misma masa", "la misma aceleración en módulo", "la misma fuerza", "la misma tensión siempre que paren"], 1, "La cuerda no se estira."),
    q4("En una máquina de Atwood con masas iguales…", ["a = g", "a = 0", "a = g/2", "se rompe"], 1, "Se equilibran."),
    q4("La tensión de la cuerda de un cuerpo que cuelga y baja acelerando es…", ["mayor que su peso", "menor que su peso", "igual a su peso", "cero"], 1, "mg − T = ma."),
    q4("La ley de Hooke dice que…", ["F ∝ Δx", "F ∝ Δx²", "F ∝ 1/Δx", "F constante"], 0, "F = −kΔx."),
    q4("La constante k de un muelle se mide en…", ["N", "N/m", "N·m", "m/N"], 1, "Fuerza por alargamiento."),
    q4("La fuerza centrípeta es…", ["una fuerza nueva", "la resultante de las fuerzas hacia el centro", "la reacción de la centrífuga", "el peso"], 1, "No se añade al diagrama."),
    q4("La fuerza centrípeta necesaria al duplicar la velocidad…", ["se duplica", "se cuadruplica", "se reduce a la mitad", "no cambia"], 1, "∝ v²."),
    q4("En una curva plana, v<sub>máx</sub> =", ["μgR", "√(μgR)", "√(gR)/μ", "gR/μ"], 1, "Rozamiento como fuerza centrípeta."),
    q4("El peralte ideal cumple…", ["tg θ = v²/(Rg)", "sen θ = μ", "θ = 45°", "cos θ = v/R"], 0, "Sin necesidad de rozamiento."),
    q4("Velocidad mínima en lo alto de un lazo de radio R:", ["√(2gR)", "√(gR)", "gR", "0"], 1, "Cuando la normal se anula."),
    q4("Un cable con una lámpara en el centro, cuanto más horizontal está…", ["menos tensión tiene", "más tensión tiene", "igual", "se rompe la lámpara"], 1, "2T sen θ = P."),
  ],
  examen: [
    q4("Bloque de 10 kg (g = 10), F = 50 N, μ = 0,2: a =", ["3 m/s²", "5 m/s²", "2 m/s²", "1 m/s²"], 0, "(50 − 20) / 10."),
    q4("a sin rozamiento en un plano de 30° (g = 10):", ["10", "5", "8,7", "2,5"], 1, "10 · 0,5."),
    q4("Atwood 1 kg y 4 kg (g = 10): a =", ["6 m/s²", "2,5 m/s²", "5 m/s²", "3 m/s²"], 0, "3·10/5."),
    q4("Muelle de k = 500 N/m con 25 N: Δx =", ["5 cm", "20 cm", "50 cm", "2 cm"], 0, "25/500 = 0,05 m."),
    q4("Fc de 2 kg a 3 m/s con R = 1 m:", ["6 N", "18 N", "9 N", "12 N"], 1, "2 · 9 / 1."),
    q4("vmáx en una curva plana de 40 m con μ = 0,4 (g = 10):", ["6,3 m/s", "12,6 m/s", "16 m/s", "160 m/s"], 1, "√(0,4 · 10 · 40) = √160 ≈ 12,6 m/s."),
    q4("Peralte para v = 10 m/s y R = 10 m (g = 10):", ["30°", "45°", "60°", "10°"], 1, "tg θ = 1."),
    q4("μ<sub>e</sub> si un cuerpo empieza a deslizar a 45°:", ["0,5", "1", "0,7", "0"], 1, "tg 45°."),
  ],
  feynman: ["Por qué cuesta más arrancar un mueble que moverlo", "Por qué la normal no siempre es igual al peso", "Por qué la tensión es menor que el peso del cuerpo que baja", "Qué fuerza hace girar a un coche en una curva", "Para qué sirven los peraltes", "Por qué no cae el agua de un cubo que gira"],
  mapa: mapaB("APLICACIONES DE LA DINÁMICA", [["Rozamiento", "Fr = μN ; estático y dinámico", "var(--red)"], ["Planos y cuerdas", "plano inclinado, poleas", "var(--pen)"], ["Muelles", "F = −kΔx", "var(--leaf)"], ["Circular", "Fc = mv²/R ; peralte", "#b45309"]]),
  tarjetas: [
    ["Rozamiento estático", "F<sub>r</sub> ≤ μ<sub>e</sub> · N (se ajusta a la fuerza aplicada)."],
    ["Rozamiento dinámico", "F<sub>r</sub> = μ<sub>d</sub> · N."],
    ["Frenado por rozamiento", "a = −μg."],
    ["Plano inclinado", "P<sub>x</sub> = mg sen α; N = mg cos α."],
    ["Bajada con rozamiento", "a = g(sen α − μ cos α)."],
    ["Medir μ<sub>e</sub>", "Inclinar hasta que deslice: μ<sub>e</sub> = tg α."],
    ["Atwood", "a = (m₂ − m₁)g / (m₁ + m₂)."],
    ["Ley de Hooke", "F = −k · Δx."],
    ["Fuerza centrípeta", "F<sub>c</sub> = m v²/R = m ω² R."],
    ["Curva plana", "v<sub>máx</sub> = √(μgR)."],
    ["Peralte", "tg θ = v² / (Rg)."],
    ["Lazo vertical", "v<sub>mín</sub> arriba = √(gR)."],
  ],
  glosario: [
    ["Rozamiento", "Fuerza que se opone al deslizamiento entre superficies en contacto."],
    ["Coeficiente de rozamiento", "Número sin unidades que caracteriza el rozamiento entre dos materiales."],
    ["Plano inclinado", "Superficie plana que forma un ángulo con la horizontal."],
    ["Polea ideal", "Polea sin masa ni rozamiento que solo cambia la dirección de la cuerda."],
    ["Máquina de Atwood", "Dos masas colgadas de una polea, usada para estudiar la aceleración."],
    ["Constante elástica", "Constante de proporcionalidad de la ley de Hooke (N/m)."],
    ["Límite de elasticidad", "Deformación máxima a partir de la cual un cuerpo no recupera su forma."],
    ["Dinamómetro", "Instrumento que mide fuerzas con un muelle."],
    ["Fuerza centrípeta", "Resultante de las fuerzas dirigida hacia el centro de la curva."],
    ["Peralte", "Inclinación transversal de una curva."],
    ["Péndulo cónico", "Masa que gira en un círculo horizontal colgada de una cuerda."],
    ["Equilibrio", "Situación en la que la resultante de las fuerzas es nula."],
    ["ABS", "Sistema de frenos que evita el bloqueo de las ruedas."],
  ],
  situacion: {
    titulo: "Ingeniería de una curva peligrosa",
    reto: "En la carretera que lleva a vuestro pueblo hay una curva con muchos accidentes en días de lluvia. La Diputación os pide un estudio físico para proponer el límite de velocidad y, si procede, un peralte.",
    pasos: [
      "Estimad el radio de la curva con un mapa digital (midiendo la flecha y la cuerda de un arco).",
      "Calculad la velocidad máxima en seco y en mojado con coeficientes de rozamiento reales.",
      "Calculad el peralte necesario para que la curva sea segura a 60 km/h incluso con hielo.",
      "Medid en el laboratorio el coeficiente de rozamiento de un trozo de neumático sobre distintas superficies con un plano inclinado.",
      "Redactad una propuesta con el límite recomendado y otras medidas (señalización, firme drenante).",
    ],
    producto: "Un informe técnico para la Diputación con cálculos, medidas experimentales y propuestas.",
    evaluacion: ["Los cálculos de dinámica circular son correctos.", "El coeficiente de rozamiento se mide con un método bien diseñado.", "Las propuestas están justificadas físicamente.", "La comunicación es clara y adecuada a un organismo público."],
  },
  familias: [
    "Inclinad una tabla con distintos objetos encima y medid el ángulo al que empiezan a deslizar.",
    "Colgad objetos de una goma y medid cuánto se estira: ¿es proporcional?",
    "En una curva, como pasajeros, fijaos hacia dónde os «empuja» y explicad por qué en realidad es inercia.",
    "Haced girar un cubo con algo de agua en vertical (en el jardín) y comprobad que no cae.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Estática y dinámica»: fuerzas de rozamiento, dinámica en planos horizontales e inclinados, sistemas de cuerpos enlazados, fuerzas elásticas y ley de Hooke, dinámica del movimiento circular y equilibrio de una partícula.`,
    ideas: [
      "Medida de μ<sub>e</sub> y μ<sub>d</sub> con un plano inclinado y un dinamómetro.",
      "Ley de Hooke con muelles y pesas, y ajuste lineal en hoja de cálculo.",
      "Máquina de Atwood con sensor de movimiento o fotopuertas.",
      "Medida de la aceleración centrípeta con el móvil en una centrifugadora de ensalada (phyphox).",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Simulación «Fuerzas y movimiento» (PhET)", url: "https://phet.colorado.edu/es/simulations/forces-and-motion-basics" },
    { t: "Simulación «Masas y resortes» (PhET)", url: "https://phet.colorado.edu/es/simulations/masses-and-springs" },
  ],
  revisado: "2026-11-14",
};
