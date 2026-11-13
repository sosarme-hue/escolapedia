// Física y Química 4º ESO · Las fuerzas y las leyes de Newton (nivel libro). Dibujos propios en SVG.
const { flecha, BASE, marco, T, ficha, pasos, compara, graf, fuerzas, bloque, formula, B, M, A, q4, PROFE, FUENTE_RD } = require("./_eso4L5");
const S = BASE["leyes-de-newton"];

const plano = marco("Plano inclinado: el peso se descompone en una componente paralela al plano, P·sen α, y otra perpendicular, P·cos α, que equilibra la normal", `
  <path d="M20 160 L 240 160 L 240 50 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <path d="M60 160 A 40 40 0 0 0 55.8 142.1" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${T(70, 154, "α", { fs: 13, b: true, c: "var(--muted)" })}
  <g transform="rotate(-26.6 130 116)"><rect x="108" y="92" width="44" height="30" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/></g>
  <path d="M130 108 V 168" stroke="var(--red)" stroke-width="3" marker-end="url(#pl1)"/>${T(140, 172, "P", { fs: 13, b: true, c: "var(--red)", a: "start" })}
  <path d="M130 108 L 106 60" stroke="var(--leaf)" stroke-width="3" marker-end="url(#pl2)"/>${T(98, 52, "N", { fs: 13, b: true, c: "var(--leaf)" })}
  <path d="M130 108 L 100 123" stroke="var(--pen)" stroke-width="3" stroke-dasharray="5 3" marker-end="url(#pl3)"/>${T(60, 120, "P·sen α", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M130 108 L 152 152" stroke="var(--pen)" stroke-width="3" stroke-dasharray="5 3" marker-end="url(#pl3)"/>${T(184, 146, "P·cos α", { fs: 12, b: true, c: "var(--pen)" })}`,
  `${flecha("pl1", "var(--red)")}${flecha("pl2", "var(--leaf)")}${flecha("pl3", "var(--pen)")}`);

const curva = marco("Coche tomando una curva: la fuerza de rozamiento de las ruedas apunta al centro y hace de fuerza centrípeta", `
  <path d="M30 170 A 140 140 0 0 1 170 30" fill="none" stroke="var(--line)" stroke-width="26"/>
  <path d="M30 170 A 140 140 0 0 1 170 30" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="8 6"/>
  <circle cx="170" cy="170" r="4" fill="var(--ink)"/>${T(186, 176, "centro", { fs: 11, c: "var(--muted)", a: "start" })}
  <rect x="58" y="62" width="34" height="20" rx="5" fill="var(--red)" transform="rotate(-45 75 72)"/>
  <path d="M84 82 L 124 122" stroke="var(--pen)" stroke-width="3.5" marker-end="url(#cv1)"/>${T(118, 102, "F centrípeta", { fs: 12, b: true, c: "var(--pen)", a: "start" })}
  <path d="M75 72 L 110 37" stroke="var(--leaf)" stroke-width="3.5" marker-end="url(#cv2)"/>${T(116, 34, "v", { fs: 14, b: true, c: "var(--leaf)", a: "start" })}
  ${T(196, 76, "F = m·v²/R", { fs: 13, b: true, c: "var(--pen)" })}`,
  `${flecha("cv1", "var(--pen)")}${flecha("cv2", "var(--leaf)")}`);

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Las fuerzas y las leyes de Newton",
  minutos: 115,
  objetivos: [
    "Reconocer las fuerzas como interacciones y representarlas con vectores",
    "Calcular la resultante de varias fuerzas y descomponer una fuerza en componentes",
    "Enunciar y aplicar las tres leyes de Newton a situaciones cotidianas",
    "Dibujar el diagrama de cuerpo libre y resolver problemas con peso, normal, rozamiento y tensión",
    "Aplicar la dinámica al plano inclinado, a los ascensores y al movimiento circular",
  ],
  claves: ["fuerza", "resultante", "inercia", "F = m·a", "acción y reacción", "peso", "normal", "rozamiento", "tensión", "fuerza centrípeta"],
  pregunta: {
    texto: "Si empujas una pared, la pared no se mueve. ¿Significa eso que la pared no te empuja a ti?",
    respuesta: "Al contrario: la pared te empuja con una fuerza <mark>igual y opuesta</mark> a la tuya (tercera ley de Newton). Si estuvieras en patines, saldrías hacia atrás. La pared no se mueve porque está unida al suelo y a todo el edificio: las fuerzas de acción y reacción actúan sobre cuerpos distintos y no se anulan entre sí.",
  },
  lectura: {
    titulo: "Un cinturón contra la inercia",
    html: `<p>En 1959, el ingeniero sueco Nils Bohlin diseñó para Volvo el cinturón de seguridad de tres puntos que llevan hoy todos los coches. La empresa liberó la patente para que cualquier fabricante pudiera usarlo gratis, porque sabía que iba a salvar muchísimas vidas. ¿Por qué es tan importante una simple cinta?</p><p>Imagina un coche que circula a 50 km/h y choca contra un muro. El coche se detiene en una décima de segundo, pero los pasajeros no: por <b>inercia</b> siguen moviéndose a 50 km/h hasta que algo los para. Si no es el cinturón, será el volante, el parabrisas o el asiento de delante. El cinturón aplica una fuerza grande pero repartida sobre el pecho y la cadera, y el airbag alarga el tiempo de frenado del cuerpo para que la fuerza sea menor. Detrás de todo ello hay tres frases que Isaac Newton publicó en 1687 en sus <i>Principia</i> y que siguen explicando desde el vuelo de un avión hasta por qué te cuesta empujar un carro lleno en el supermercado. En este tema aprenderás a usarlas para predecir cómo se moverá cualquier cuerpo a partir de las fuerzas que actúan sobre él.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Qué es una fuerza", p: [
      "Una <mark>fuerza</mark> es una interacción entre dos cuerpos capaz de cambiar su estado de movimiento o de deformarlos. Siempre hay dos cuerpos implicados: el que la ejerce y el que la recibe. Las fuerzas pueden actuar <b>por contacto</b> (empujar un carro, el rozamiento, la tensión de una cuerda) o <b>a distancia</b> (la gravedad, la fuerza eléctrica o la magnética).",
      "Una fuerza produce dos tipos de efectos. Los <b>efectos dinámicos</b> cambian la velocidad del cuerpo: lo ponen en marcha, lo frenan o cambian su dirección. Los <b>efectos estáticos</b> lo deforman: estiran un muelle, abollan una lata o aplastan una pelota. La fuerza es una magnitud vectorial: no basta con decir «empujo con 50 N», hay que decir en qué dirección, en qué sentido y en qué punto se aplica. Su unidad en el SI es el <b>newton (N)</b>: la fuerza que, aplicada a 1 kg, le produce una aceleración de 1 m/s². Para hacerte una idea, sostener una manzana mediana exige aproximadamente 1 N. Las fuerzas se miden con <b>dinamómetros</b>, que contienen un muelle calibrado.",
    ], svg: ficha("Efectos y tipos de fuerzas", "¿Qué hace una fuerza?", ["Pone en marcha o frena", "Cambia la dirección", "Deforma (efecto estático)", "Por contacto o a distancia", "Unidad: newton (N)"], "var(--pen)") }),
    bloque({ h: "1.2 Sumar fuerzas: la resultante", p: [
      "Cuando sobre un cuerpo actúan varias fuerzas, su efecto conjunto es el de una sola fuerza llamada <mark>resultante</mark> (ΣF), que es la suma vectorial de todas. Hay tres casos que conviene dominar. Si las fuerzas tienen la <b>misma dirección y sentido</b>, se suman sus módulos: 30 N + 20 N = 50 N. Si tienen la <b>misma dirección y sentido contrario</b>, se restan y la resultante va en el sentido de la mayor: 50 N − 10 N = 40 N hacia la mayor.",
      "Si son <b>perpendiculares</b>, la resultante es la diagonal del rectángulo que forman y su módulo se calcula con el teorema de Pitágoras: dos fuerzas de 30 N y 40 N perpendiculares dan una resultante de √(30² + 40²) = 50 N. Si la resultante es cero, las fuerzas están en <b>equilibrio</b>: el cuerpo sigue como estaba, en reposo o con velocidad constante. Fíjate en que la resultante de dos fuerzas de 30 N y 40 N puede valer cualquier cosa entre 10 N y 70 N según el ángulo que formen.",
    ], svg: S.svg[0], video: S.bvideos[0] }),
    bloque({ h: "1.3 Descomponer una fuerza", p: [
      "A veces conviene hacer lo contrario que en la suma: sustituir una fuerza por dos fuerzas perpendiculares, sus <b>componentes</b>, que juntas producen el mismo efecto. Si una fuerza F forma un ángulo α con la horizontal, sus componentes son:",
      "Por ejemplo, si arrastras una maleta tirando del asa con 60 N formando 30° con el suelo, la componente horizontal, 60 · cos 30° ≈ 52 N, es la que hace avanzar la maleta, y la vertical, 60 · sen 30° = 30 N, la levanta un poco y reduce lo que la maleta aprieta contra el suelo. Descomponer fuerzas es la herramienta clave para estudiar planos inclinados, cuerdas inclinadas y cualquier fuerza que no vaya en la dirección del movimiento. El truco es elegir unos ejes cómodos: uno en la dirección del movimiento y otro perpendicular a él.",
    ], extra: formula("F<sub>x</sub> = F · cos α &nbsp;&nbsp; F<sub>y</sub> = F · sen α"), svg: fuerzas("Fuerza inclinada F descompuesta en una componente horizontal Fx y otra vertical Fy", "maleta", [[35, 72, "F", "var(--red)"], [0, 60, "Fx", "var(--pen)"], [90, 40, "Fy", "var(--leaf)"]]) }),
    bloque({ h: "1.4 Fuerzas elásticas: la ley de Hooke", p: [
      "Los cuerpos <b>elásticos</b>, como un muelle o una goma, recuperan su forma cuando deja de actuar la fuerza que los deformaba; los <b>plásticos</b>, como la plastilina, se quedan deformados. Robert Hooke descubrió en 1660 que, dentro de ciertos límites, el alargamiento de un muelle es proporcional a la fuerza aplicada:",
      "donde k es la <b>constante elástica</b> del muelle (en N/m) y Δl, el alargamiento (en m). Un muelle con k = 200 N/m se estira 5 cm con una fuerza de 10 N y 10 cm con 20 N. Cuanto mayor es k, más duro es el muelle. En una gráfica F-Δl, la ley de Hooke es una recta que pasa por el origen y cuya pendiente es k. Si se tira demasiado, se supera el <mark>límite de elasticidad</mark>: el muelle queda deformado para siempre y la ley deja de cumplirse. Los dinamómetros, las básculas de muelle, los amortiguadores de los coches o los colchones funcionan gracias a esta ley.",
    ], extra: formula("F = k · Δl"), svg: graf("Gráfica fuerza-alargamiento de un muelle: recta por el origen hasta el límite de elasticidad", "Δl (m)", "F (N)", [
      { p: [[0, 0], [0.62, 0.74]], c: "var(--pen)" }, { p: [[0.62, 0.74], [0.8, 0.86], [0.98, 0.9]], c: "var(--red)", dash: true },
    ], `${T(166, 116, "pendiente = k", { fs: 12, b: true, c: "var(--pen)" })}${T(188, 40, "límite elástico", { fs: 11, b: true, c: "var(--red)" })}`) }),
    bloque({ h: "2.1 Primera ley de Newton: la inercia", p: [
      "Durante siglos se pensó, siguiendo a Aristóteles, que para mantener un cuerpo en movimiento hacía falta una fuerza. Galileo y Newton demostraron que no es así: si no hubiera rozamiento, una bola lanzada por un suelo horizontal seguiría rodando para siempre. La <mark>primera ley de Newton</mark>, o principio de inercia, dice: <i>si la fuerza resultante sobre un cuerpo es cero, el cuerpo permanece en reposo o se mueve con movimiento rectilíneo uniforme</i>.",
      "La <b>inercia</b> es la tendencia de los cuerpos a mantener su estado de movimiento, y es mayor cuanto mayor es la masa. Por inercia te vas hacia delante cuando el autobús frena de golpe, te vas hacia atrás cuando arranca y te pegas a la puerta cuando toma una curva. También por inercia puedes quitar un mantel de un tirón sin que caigan los platos. Ojo con el error más frecuente: un cuerpo que se mueve a velocidad constante <b>no necesita</b> ninguna fuerza neta; si un coche va a 100 km/h constantes por una recta, la fuerza del motor está equilibrada por el rozamiento y la resistencia del aire.",
    ], svg: S.svg[1] }),
    bloque({ h: "2.2 Segunda ley de Newton: fuerza, masa y aceleración", p: [
      "La <mark>segunda ley</mark>, o principio fundamental de la dinámica, explica qué ocurre cuando la resultante no es cero: el cuerpo acelera en la dirección y el sentido de la fuerza resultante, y la aceleración es proporcional a la fuerza e inversamente proporcional a la masa:",
      "Con la misma fuerza, un carro de la compra vacío acelera mucho más que uno lleno; y para dar a un camión la misma aceleración que a un coche hace falta una fuerza mucho mayor. De esta ley sale la definición de newton: 1 N = 1 kg · 1 m/s². La segunda ley es el puente entre las fuerzas y el movimiento: si conoces las fuerzas, calculas la aceleración y, con las ecuaciones de la cinemática, la velocidad y la posición en cada instante. Por ejemplo, si empujas un carro de 20 kg con una resultante de 30 N, acelera a 1,5 m/s² y a los 4 s irá a 6 m/s. Observa que la primera ley es un caso particular de la segunda: si ΣF = 0, entonces a = 0.",
    ], extra: formula("ΣF = m · a"), svg: S.svg[2] }),
    bloque({ h: "2.3 Tercera ley de Newton: acción y reacción", p: [
      "La <mark>tercera ley</mark> dice que <i>cuando un cuerpo A ejerce una fuerza sobre un cuerpo B, B ejerce sobre A una fuerza igual en módulo y dirección, pero de sentido contrario</i>. Las fuerzas siempre aparecen <b>por parejas</b>: no existe una fuerza aislada.",
      "Al caminar, empujas el suelo hacia atrás y el suelo te empuja hacia delante. Un cohete expulsa gases hacia abajo y los gases empujan al cohete hacia arriba, incluso en el vacío, donde no hay aire en el que «apoyarse». Un nadador empuja el agua hacia atrás y avanza; un fusil retrocede al disparar. La clave para no confundirse es que la acción y la reacción <b>actúan sobre cuerpos distintos</b>, por eso nunca se anulan entre sí. Cuando la Tierra te atrae con tu peso, tú atraes a la Tierra con una fuerza igual hacia ti; pero, como su masa es enorme, su aceleración es imperceptible. Igual fuerza no significa igual efecto: el efecto depende de la masa de cada cuerpo.",
    ], svg: S.svg[3] }),
    bloque({ h: "3.1 El peso y la fuerza normal", p: [
      "El <mark>peso</mark> es la fuerza con la que la Tierra (o el planeta donde estés) atrae a un cuerpo. Se dirige hacia el centro del planeta y vale P = m · g, con g = 9,8 m/s² en la superficie terrestre. No es lo mismo que la masa: la <b>masa</b> mide la cantidad de materia y la inercia, se mide en kg y no cambia de un lugar a otro; el <b>peso</b> es una fuerza, se mide en N y depende de g. Una persona de 50 kg pesa 490 N en la Tierra y solo 81 N en la Luna, donde g = 1,62 m/s².",
      "Cuando un cuerpo está apoyado en una superficie, esta lo empuja perpendicularmente hacia fuera con la <b>fuerza normal</b> (N). En un suelo horizontal y sin otras fuerzas verticales, la normal equilibra al peso: N = P. Pero no siempre es así: si te apoyas en una mesa empujándola hacia abajo, la normal aumenta; en un ascensor que acelera hacia arriba, la normal (lo que marca una báscula) es mayor que tu peso; y en un plano inclinado, la normal es menor que el peso. Atención: el peso y la normal no son pareja de acción y reacción, porque actúan sobre el mismo cuerpo.",
    ], extra: formula("P = m · g"), svg: S.svg[4] }),
    bloque({ h: "3.2 La fuerza de rozamiento", p: [
      "El <mark>rozamiento</mark> es la fuerza que aparece entre dos superficies en contacto y que se opone a que una deslice sobre la otra. Se debe a las pequeñas irregularidades de las superficies, que se enganchan entre sí. Su valor depende de la naturaleza de las superficies, a través del <b>coeficiente de rozamiento</b> μ (sin unidades), y de lo que se aprietan, a través de la normal:",
      "El rozamiento siempre se opone al movimiento (o a su inicio) y apenas depende del área de contacto. El coeficiente para goma sobre asfalto seco es de unos 0,7; sobre asfalto mojado, 0,4; y sobre hielo, menos de 0,1. Aunque a menudo se ve como un problema, porque desgasta piezas y gasta energía, sin rozamiento no podríamos andar, escribir, frenar ni sujetar nada con la mano. Por eso los neumáticos tienen dibujo, las zapatillas de deporte llevan suelas de goma y en invierno se echa sal o arena en las carreteras heladas. En cambio, en las máquinas se reduce con lubricantes y rodamientos.",
    ], extra: formula("F<sub>r</sub> = μ · N"), svg: fuerzas("Diagrama de fuerzas de una caja arrastrada: fuerza aplicada, rozamiento, peso y normal", "caja", [[0, 62, "F", "var(--red)"], [180, 40, "Fr", "var(--pen)"], [270, 26, "P", "var(--ink)"], [90, 46, "N", "var(--leaf)"]]), video: S.bvideos[1] }),
    bloque({ h: "3.3 El diagrama de cuerpo libre y el método de resolución", p: [
      "Para resolver un problema de dinámica se dibuja el <mark>diagrama de cuerpo libre</mark>: el cuerpo aislado, como un punto o una caja, con todas las fuerzas que actúan <b>sobre él</b> (no las que él hace sobre otros). Las fuerzas habituales son el peso (siempre hacia abajo), la normal (perpendicular a la superficie de apoyo), el rozamiento (opuesto al movimiento), la tensión (a lo largo de la cuerda, tirando del cuerpo) y las fuerzas aplicadas.",
      "Después se eligen unos ejes: uno en la dirección del movimiento (o de la aceleración) y otro perpendicular. En el eje perpendicular normalmente no hay movimiento, así que la suma de fuerzas es cero, y de ahí sale la normal. En el eje del movimiento se aplica la segunda ley, ΣF = m · a, con las fuerzas a favor del movimiento positivas y las que se oponen negativas. Por último se despeja la incógnita y se comprueba que el resultado sea razonable. Por ejemplo, una caja de 10 kg arrastrada con 50 N sobre un suelo con μ = 0,3: N = 98 N, F<sub>r</sub> = 29,4 N y a = (50 − 29,4) / 10 ≈ 2,1 m/s².",
    ], svg: pasos("Método para resolver un problema de dinámica", ["Aísla el cuerpo y dibuja sus fuerzas", "Elige ejes: movimiento y perpendicular", "Eje perpendicular: ΣF = 0 → N", "Eje del movimiento: ΣF = m·a", "Despeja, calcula y comprueba"], "var(--pen)") }),
    bloque({ h: "3.4 El plano inclinado", p: [
      "Un cuerpo sobre una rampa de ángulo α está sometido a su peso, a la normal y, si lo hay, al rozamiento. Para estudiarlo se toman los ejes paralelo y perpendicular al plano, y el peso se descompone en dos componentes:",
      "La componente paralela tira del cuerpo rampa abajo; la perpendicular aprieta el cuerpo contra el plano y la equilibra la normal, así que <b>N = m·g·cos α</b>, menor que el peso. Sin rozamiento, el cuerpo baja con a = g · sen α, independientemente de su masa: en una rampa de 30°, a = 4,9 m/s². Con rozamiento, a = g · (sen α − μ · cos α). Si μ es grande o la rampa poco inclinada, el rozamiento puede bastar para que el cuerpo no deslice. Las rampas de acceso para sillas de ruedas, por ejemplo, tienen poca pendiente (menos del 10 %) para que la fuerza necesaria para subirlas sea pequeña.",
    ], extra: formula("P<sub>x</sub> = m·g·sen α &nbsp;&nbsp; P<sub>y</sub> = m·g·cos α"), svg: plano, video: { id: "ufoZ1Xva2ns", titulo: "Plano inclinado con rozamiento (dinámica)", canal: "unicoos", vistas: 1112612 } }),
    bloque({ h: "3.5 Tensiones, cuerpos enlazados y ascensores", p: [
      "La <b>tensión</b> (T) es la fuerza que ejerce una cuerda tensa sobre los cuerpos atados a ella; siempre tira, nunca empuja, y en una cuerda ideal (sin masa) vale lo mismo en los dos extremos. Cuando dos cuerpos van unidos por una cuerda, se mueven con la misma aceleración. Se puede aplicar la segunda ley a cada cuerpo por separado o al conjunto, en el que la tensión es una fuerza interna y no aparece.",
      "Un caso muy cotidiano es el <mark>ascensor</mark>. Una báscula dentro de un ascensor no marca tu peso, sino la normal. Si el ascensor sube acelerando con aceleración a, N − m·g = m·a, así que N = m·(g + a) y te sientes más pesado. Si baja acelerando, N = m·(g − a) y te sientes más ligero. A velocidad constante, N = m·g. Si se rompiera el cable y cayera libremente, a = g y la báscula marcaría cero: es la <b>ingravidez</b> que sienten los astronautas en órbita, que no es ausencia de gravedad sino caída libre continua.",
    ], svg: compara("Lo que marca una báscula en un ascensor que sube o baja acelerando", ["Sube acelerando", ["N = m(g + a)", "N > P", "más pesado"]], ["Baja acelerando", ["N = m(g − a)", "N < P", "más ligero"]], "var(--leaf)", "var(--pen)") }),
    bloque({ h: "3.6 Dinámica del movimiento circular", p: [
      "Un cuerpo que describe una curva cambia continuamente la dirección de su velocidad, así que tiene aceleración centrípeta, a<sub>c</sub> = v² / R, dirigida hacia el centro. Según la segunda ley, eso exige una fuerza resultante también dirigida hacia el centro, la <mark>fuerza centrípeta</mark>:",
      "La fuerza centrípeta no es una fuerza nueva, sino el papel que hace alguna de las fuerzas conocidas. En un coche que toma una curva, es el rozamiento entre las ruedas y el asfalto; en una piedra que gira atada a una cuerda, la tensión; en la Luna alrededor de la Tierra, la gravedad. Si esa fuerza desaparece (hielo en la curva, la cuerda que se rompe), el cuerpo sale por la tangente, en línea recta, por inercia. Como F = m·v²/R, al duplicar la velocidad se necesita cuatro veces más fuerza: por eso las curvas cerradas tienen límites de velocidad bajos y en las carreteras se peraltan.",
    ], extra: formula("F<sub>c</sub> = m · v² / R"), svg: curva }),
  ],
  figura: S.figura,
  video: S.video,
  ejemplos: [
    { enunciado: "Sobre una caja actúan 30 N y 20 N hacia la derecha y 10 N hacia la izquierda. Si la caja tiene 8 kg y no hay rozamiento, ¿qué aceleración adquiere?", pasos: ["Resultante: 30 + 20 − 10 = 40 N hacia la derecha.", "Segunda ley: a = ΣF / m = 40 / 8.", "a = 5 m/s² hacia la derecha."], resultado: "a = 5 m/s² hacia la derecha." },
    { enunciado: "Un coche de 1.200 kg pasa de 0 a 20 m/s en 8 s. ¿Qué fuerza resultante actúa sobre él?", pasos: ["a = (20 − 0) / 8 = 2,5 m/s².", "ΣF = m · a = 1.200 · 2,5.", "ΣF = 3.000 N."], resultado: "3.000 N en el sentido del movimiento." },
    { enunciado: "Se arrastra una caja de 20 kg con una fuerza horizontal de 100 N sobre un suelo con μ = 0,25. Calcula la aceleración.", pasos: ["Eje vertical: N = P = 20 · 9,8 = 196 N.", "Rozamiento: F<sub>r</sub> = 0,25 · 196 = 49 N.", "Eje horizontal: 100 − 49 = 20 · a.", "a = 51 / 20 = 2,55 m/s²."], resultado: "a ≈ 2,6 m/s²." },
    { enunciado: "Un bloque de 5 kg baja por una rampa de 30° con μ = 0,2. Calcula su aceleración.", pasos: ["P<sub>x</sub> = 5 · 9,8 · sen 30° = 24,5 N; P<sub>y</sub> = 5 · 9,8 · cos 30° ≈ 42,4 N.", "N = P<sub>y</sub> = 42,4 N; F<sub>r</sub> = 0,2 · 42,4 ≈ 8,5 N.", "ΣF = 24,5 − 8,5 = 16,0 N rampa abajo.", "a = 16,0 / 5 = 3,2 m/s²."], resultado: "a ≈ 3,2 m/s² rampa abajo." },
    { enunciado: "Una persona de 60 kg está sobre una báscula en un ascensor que sube con a = 2 m/s². ¿Qué marca la báscula?", pasos: ["Fuerzas: normal N hacia arriba y peso hacia abajo.", "Segunda ley (positivo hacia arriba): N − m·g = m·a.", "N = 60 · (9,8 + 2) = 708 N.", "La báscula marca 708 N, como si la persona tuviera 72 kg."], resultado: "708 N (en reposo marcaría 588 N)." },
    { enunciado: "Un coche de 1.000 kg toma una curva de 40 m de radio. Si μ = 0,7, ¿cuál es la velocidad máxima sin derrapar?", pasos: ["El rozamiento hace de fuerza centrípeta: μ·m·g = m·v²/R.", "La masa se simplifica: v² = μ·g·R = 0,7 · 9,8 · 40 = 274,4.", "v ≈ 16,6 m/s.", "En km/h: 16,6 · 3,6 ≈ 60 km/h."], resultado: "Unos 60 km/h; con asfalto mojado (μ = 0,4), solo 45 km/h." },
  ],
  errores: [
    "Creer que para mantener un movimiento a velocidad constante hace falta una fuerza neta: si ΣF = 0, la velocidad no cambia.",
    "Confundir masa y peso: la masa se mide en kg y no cambia; el peso es una fuerza, se mide en N y depende de g.",
    "Pensar que la acción y la reacción se anulan: actúan sobre cuerpos distintos.",
    "Suponer siempre N = m·g: en planos inclinados, ascensores o con fuerzas inclinadas la normal es distinta.",
    "Dibujar en el diagrama de cuerpo libre fuerzas que el cuerpo hace sobre otros, o una «fuerza del movimiento» que no existe.",
    "Tratar la fuerza centrípeta como una fuerza más que se añade al diagrama: es el papel que hace el rozamiento, la tensión o la gravedad.",
  ],
  ejercicios: [
    B("Indica si son fuerzas de contacto o a distancia: el peso, el rozamiento, la atracción de un imán, la tensión de una cuerda y el empuje de la mano.", "A distancia: el peso y la atracción del imán. De contacto: el rozamiento, la tensión y el empuje de la mano."),
    B("Calcula la resultante de dos fuerzas de 12 N y 8 N si: a) van en el mismo sentido; b) en sentidos opuestos; c) son perpendiculares.", "a) 12 + 8 = 20 N. b) 12 − 8 = 4 N en el sentido de la de 12 N. c) √(144 + 64) = √208 ≈ 14,4 N."),
    B("Un muelle con k = 300 N/m se estira 4 cm. ¿Qué fuerza se le aplica?", "Δl = 0,04 m. F = k · Δl = 300 · 0,04 = 12 N."),
    B("¿Qué fuerza resultante hace falta para que una moto de 150 kg acelere a 3 m/s²?", "ΣF = m · a = 150 · 3 = 450 N."),
    B("Calcula el peso de una mochila de 6 kg en la Tierra (g = 9,8 m/s²) y en Marte (g = 3,7 m/s²).", "Tierra: 6 · 9,8 = 58,8 N. Marte: 6 · 3,7 = 22,2 N. La masa sigue siendo 6 kg en los dos."),
    B("Explica con la primera ley por qué los pasajeros de un autobús se van hacia delante cuando frena.", "Por inercia, el cuerpo de los pasajeros tiende a seguir moviéndose con la velocidad que tenía; el autobús frena, pero ellos no, hasta que los pies, el asiento o una barra les aplican una fuerza."),
    B("Identifica la pareja de acción y reacción: a) un nadador empuja el agua; b) la Tierra atrae a la Luna; c) un martillo golpea un clavo.", "a) El agua empuja al nadador hacia delante. b) La Luna atrae a la Tierra. c) El clavo empuja al martillo (por eso el martillo se frena)."),
    B("Una fuerza de 50 N forma 60° con la horizontal. Calcula sus componentes.", "F<sub>x</sub> = 50 · cos 60° = 25 N. F<sub>y</sub> = 50 · sen 60° ≈ 43,3 N."),
    B("Un libro de 2 kg está en reposo sobre una mesa. Dibuja sus fuerzas y calcula la normal.", "Actúan el peso (19,6 N, hacia abajo) y la normal (hacia arriba). Como está en reposo, ΣF = 0 → N = 19,6 N."),
    B("Una caja de 40 kg está sobre un suelo con μ = 0,3. ¿Qué fuerza de rozamiento aparece si se arrastra?", "N = 40 · 9,8 = 392 N. F<sub>r</sub> = 0,3 · 392 = 117,6 N."),
    B("¿Por qué un astronauta puede mover con facilidad un satélite de 1.000 kg «sin peso» pero le cuesta mucho pararlo cuando ya se mueve?", "Porque el satélite tiene la misma masa que en la Tierra y, por tanto, la misma inercia: para cambiar su velocidad hace falta una fuerza proporcional a su masa (F = m·a), aunque no pese."),
    B("Un coche va a 90 km/h constantes por una recta. El motor hace una fuerza de 2.000 N. ¿Cuánto vale la suma del rozamiento y la resistencia del aire?", "Velocidad constante → ΣF = 0. Las fuerzas que se oponen valen también 2.000 N."),
    M("Un carro de 25 kg se empuja con 80 N y el rozamiento vale 30 N. ¿Qué velocidad tendrá a los 5 s si parte del reposo?", "ΣF = 80 − 30 = 50 N. a = 50 / 25 = 2 m/s². v = 0 + 2 · 5 = 10 m/s."),
    M("Un coche de 900 kg que va a 25 m/s frena hasta pararse en 50 m. ¿Qué fuerza de frenado actúa?", "a = (0 − 625) / (2 · 50) = −6,25 m/s². F = 900 · 6,25 ≈ 5.625 N, opuesta al movimiento."),
    M("Un muelle mide 20 cm sin carga y 26 cm cuando cuelga una masa de 300 g. Calcula k y la longitud con 500 g.", "F = 0,3 · 9,8 = 2,94 N; Δl = 0,06 m → k = 49 N/m. Con 500 g: F = 4,9 N; Δl = 4,9 / 49 = 0,10 m → mide 30 cm."),
    M("Se arrastra una caja de 30 kg con una cuerda horizontal a velocidad constante. Si μ = 0,4, ¿qué tensión tiene la cuerda?", "Velocidad constante → T = F<sub>r</sub> = μ·m·g = 0,4 · 30 · 9,8 = 117,6 N."),
    M("Sobre un cuerpo de 4 kg actúan dos fuerzas perpendiculares de 9 N y 12 N. Calcula la aceleración.", "ΣF = √(81 + 144) = 15 N. a = 15 / 4 = 3,75 m/s², en la dirección de la resultante."),
    M("Un bloque de 10 kg baja por una rampa de 37° sin rozamiento (sen 37° = 0,6; cos 37° = 0,8). Calcula la normal y la aceleración.", "N = 10 · 9,8 · 0,8 = 78,4 N. a = g · sen 37° = 9,8 · 0,6 = 5,88 m/s²."),
    M("Una persona de 70 kg está en un ascensor que baja frenando con a = 1,5 m/s². ¿Qué marca la báscula?", "Si baja frenando, la aceleración apunta hacia arriba: N − m·g = m·a → N = 70 · (9,8 + 1,5) = 791 N. Se siente más pesada."),
    M("¿Con qué fuerza mínima hay que tirar horizontalmente de un baúl de 50 kg para moverlo si el coeficiente de rozamiento estático es 0,5?", "F<sub>mín</sub> = μ·m·g = 0,5 · 50 · 9,8 = 245 N."),
    M("Una piedra de 0,2 kg gira atada a una cuerda de 0,8 m en un plano horizontal a 4 m/s. ¿Qué tensión soporta la cuerda?", "T = m · v² / R = 0,2 · 16 / 0,8 = 4 N."),
    M("Un patinador de 60 kg empuja a otro de 40 kg con 120 N. Calcula la aceleración de cada uno.", "Por la tercera ley, cada uno recibe 120 N en sentidos opuestos. a₁ = 120 / 60 = 2 m/s²; a₂ = 120 / 40 = 3 m/s². El más ligero acelera más."),
    M("Un coche de 1.500 kg arranca y alcanza 108 km/h en 12 s. Si el rozamiento total es 750 N, ¿qué fuerza hace el motor?", "v = 30 m/s; a = 30 / 12 = 2,5 m/s². F − 750 = 1.500 · 2,5 → F = 3.750 + 750 = 4.500 N."),
    M("Se tira de una maleta de 15 kg con 60 N formando 30° con el suelo. Sin rozamiento, calcula la aceleración y la normal.", "F<sub>x</sub> = 60 · cos 30° ≈ 52 N → a = 52 / 15 ≈ 3,5 m/s². Eje vertical: N + 60 · sen 30° = 147 → N = 147 − 30 = 117 N."),
    M("Un ascensor de 600 kg sube a velocidad constante. ¿Qué tensión tiene el cable? ¿Y si sube acelerando a 1 m/s²?", "Velocidad constante: T = m·g = 5.880 N. Acelerando: T = 600 · (9,8 + 1) = 6.480 N."),
    M("¿Qué aceleración tiene un cuerpo que baja por una rampa de 20° con μ = 0,1? (sen 20° = 0,34; cos 20° = 0,94)", "a = g · (sen α − μ · cos α) = 9,8 · (0,34 − 0,094) ≈ 2,4 m/s²."),
    A("Dos bloques de 3 kg y 5 kg, unidos por una cuerda, se arrastran por un suelo sin rozamiento tirando del de 5 kg con 40 N. Calcula la aceleración y la tensión de la cuerda.", "Conjunto: a = 40 / (3 + 5) = 5 m/s². Bloque de 3 kg (solo le tira la cuerda): T = 3 · 5 = 15 N."),
    A("Máquina de Atwood: dos masas de 3 kg y 2 kg cuelgan de una polea ideal. Calcula la aceleración y la tensión.", "Conjunto: (3 − 2) · 9,8 = (3 + 2) · a → a = 1,96 m/s². Masa de 2 kg (sube): T − 19,6 = 2 · 1,96 → T = 23,52 N. Comprobación con la de 3 kg: 29,4 − T = 3 · 1,96 → T = 23,52 N."),
    A("Un bloque de 4 kg sobre una mesa (μ = 0,2) está unido por una cuerda que pasa por una polea a otro de 2 kg que cuelga. Calcula la aceleración.", "Fuerza que tira: peso del colgante, 19,6 N. Rozamiento: 0,2 · 4 · 9,8 = 7,84 N. a = (19,6 − 7,84) / (4 + 2) = 1,96 m/s²."),
    A("¿Qué ángulo mínimo debe tener una rampa para que un cuerpo empiece a deslizar si μ = 0,577?", "Deslizar empieza cuando m·g·sen α = μ·m·g·cos α → tg α = μ = 0,577 → α = 30°. Este método sirve para medir μ en el laboratorio."),
    A("Una caja de 10 kg sube por una rampa de 30° empujada con una fuerza paralela de 80 N; μ = 0,2. Calcula la aceleración.", "P<sub>x</sub> = 49 N; N = 98 · cos 30° ≈ 84,9 N; F<sub>r</sub> ≈ 17,0 N (hacia abajo, porque sube). ΣF = 80 − 49 − 17,0 = 14,0 N → a = 1,4 m/s² rampa arriba."),
    A("Un coche de 1.200 kg entra a 72 km/h en una curva de 50 m de radio con asfalto mojado (μ = 0,4). ¿Derrapa?", "Fuerza necesaria: m·v²/R = 1.200 · 400 / 50 = 9.600 N. Rozamiento máximo: 0,4 · 1.200 · 9,8 = 4.704 N. No basta: derrapa. Velocidad máxima: v = √(0,4 · 9,8 · 50) ≈ 14 m/s ≈ 50 km/h."),
    A("Un paracaidista de 80 kg cae a velocidad constante de 5 m/s con el paracaídas abierto. ¿Cuánto vale la fuerza del aire? ¿Y su aceleración un instante después de abrirlo, si iba a 50 m/s y el aire le hace 3.200 N?", "Velocidad constante: F<sub>aire</sub> = P = 784 N. Al abrirlo: ΣF = 3.200 − 784 = 2.416 N hacia arriba → a = 2.416 / 80 ≈ 30,2 m/s² hacia arriba: frena bruscamente."),
    A("Un cuadro de 4 kg cuelga de dos cuerdas que forman cada una 45° con la horizontal. Calcula la tensión de cada cuerda.", "Equilibrio vertical: 2 · T · sen 45° = 39,2 N → T = 39,2 / (2 · 0,707) ≈ 27,7 N. Las componentes horizontales se anulan entre sí."),
    A("Un trineo de 30 kg baja por una ladera de 30° partiendo del reposo; μ = 0,1. ¿Qué velocidad tiene tras recorrer 40 m?", "a = 9,8 · (sen 30° − 0,1 · cos 30°) = 9,8 · (0,5 − 0,087) ≈ 4,05 m/s². v² = 2 · 4,05 · 40 = 324 → v ≈ 18 m/s (unos 65 km/h)."),
    A("Un ascensor de 500 kg con una persona de 70 kg arranca hacia arriba y en 2 s alcanza 3 m/s. Calcula la tensión del cable y lo que marca una báscula bajo la persona.", "a = 1,5 m/s². Cable: T = 570 · (9,8 + 1,5) = 6.441 N. Báscula: N = 70 · 11,3 = 791 N."),
  ],
  quiz: [
    q4("¿Cuál es la unidad de fuerza en el SI?", ["El kilogramo", "El newton", "El julio", "El pascal"], 1, "1 N = 1 kg · m/s²."),
    q4("Dos fuerzas de 6 N y 8 N perpendiculares tienen una resultante de…", ["14 N", "2 N", "10 N", "48 N"], 2, "√(36 + 64) = 10 N."),
    q4("Si la resultante sobre un cuerpo es cero, el cuerpo…", ["está siempre parado", "frena hasta pararse", "está en reposo o en MRU", "acelera"], 2, "Primera ley de Newton."),
    q4("Con la misma fuerza, si la masa se duplica, la aceleración…", ["se duplica", "se reduce a la mitad", "no cambia", "se cuadruplica"], 1, "a = F / m."),
    q4("¿Qué pareja es de acción y reacción?", ["El peso de un libro y la normal de la mesa", "La Tierra atrae a la Luna y la Luna atrae a la Tierra", "El empuje del motor y el rozamiento", "El peso y la tensión"], 1, "Actúan sobre cuerpos distintos, son iguales y opuestas."),
    q4("Una persona de 50 kg en la Luna (g = 1,6 m/s²) tiene una masa de…", ["80 N", "50 kg", "8 kg", "31 kg"], 1, "La masa no cambia; el peso sí."),
    q4("Un muelle de k = 100 N/m estirado 0,2 m ejerce…", ["20 N", "500 N", "0,002 N", "200 N"], 0, "F = 100 · 0,2 = 20 N."),
    q4("La fuerza de rozamiento depende sobre todo de…", ["el área de contacto", "la velocidad", "el coeficiente μ y la normal", "el color de la superficie"], 2, "F<sub>r</sub> = μ · N."),
    q4("Sobre una rampa sin rozamiento de 30°, un cuerpo baja con a = …", ["9,8 m/s²", "4,9 m/s²", "0 m/s²", "8,5 m/s²"], 1, "a = g · sen 30° = 4,9 m/s²."),
    q4("En un plano inclinado, la normal vale…", ["m·g", "m·g·sen α", "m·g·cos α", "0"], 2, "Equilibra la componente perpendicular del peso."),
    q4("En un ascensor que sube acelerando, una báscula marca…", ["menos que tu peso", "tu peso", "más que tu peso", "cero"], 2, "N = m(g + a)."),
    q4("Si se rompe el cable y el ascensor cae libremente, la báscula marca…", ["el doble", "tu peso", "cero", "la mitad"], 2, "Todo cae con g: ingravidez aparente."),
    q4("Un coche toma una curva. ¿Qué fuerza hace de centrípeta?", ["El peso", "La normal", "El rozamiento de las ruedas", "La fuerza del motor"], 2, "El rozamiento lateral apunta al centro de la curva."),
    q4("Si se duplica la velocidad en una curva, la fuerza centrípeta necesaria…", ["se duplica", "se cuadruplica", "no cambia", "se reduce a la mitad"], 1, "F = m·v²/R."),
    q4("Una fuerza de 20 N a 60° sobre la horizontal tiene componente horizontal…", ["10 N", "17,3 N", "20 N", "0 N"], 0, "20 · cos 60° = 10 N."),
    q4("¿Por qué un cohete puede acelerar en el vacío?", ["Porque empuja el aire", "Porque los gases expulsados lo empujan a él", "Porque no hay gravedad", "No puede"], 1, "Tercera ley: el cohete empuja los gases y los gases empujan al cohete."),
    q4("Un coche a 100 km/h constantes en una recta. La fuerza neta es…", ["la del motor", "cero", "el rozamiento", "el peso"], 1, "Velocidad constante → ΣF = 0."),
    q4("La inercia de un cuerpo depende de…", ["su velocidad", "su masa", "su peso en ese planeta", "su volumen"], 1, "A más masa, más inercia."),
    q4("Un cuerpo de 2 kg sometido a una resultante de 10 N acelera a…", ["20 m/s²", "5 m/s²", "0,2 m/s²", "12 m/s²"], 1, "a = 10 / 2 = 5 m/s²."),
    q4("La tensión de una cuerda…", ["siempre empuja", "siempre tira del cuerpo", "es siempre igual al peso", "solo existe en reposo"], 1, "Una cuerda solo puede tirar."),
  ],
  examen: [
    q4("Sobre una caja de 10 kg actúan 50 N a la derecha y 20 N a la izquierda. Su aceleración es…", ["7 m/s²", "3 m/s²", "5 m/s²", "2 m/s²"], 1, "ΣF = 30 N; a = 3 m/s²."),
    q4("El peso de una masa de 70 kg en la Tierra es…", ["70 N", "686 N", "7,1 N", "700 kg"], 1, "70 · 9,8 = 686 N."),
    q4("Una caja de 20 kg con μ = 0,5 sobre el suelo sufre un rozamiento de…", ["98 N", "10 N", "196 N", "40 N"], 0, "0,5 · 20 · 9,8 = 98 N."),
    q4("¿Qué ley explica que al disparar un fusil retroceda?", ["Primera", "Segunda", "Tercera", "Ley de Hooke"], 2, "Acción y reacción."),
    q4("Un bloque baja a velocidad constante por una rampa. Eso significa que…", ["no hay fuerzas", "la resultante es cero", "no hay rozamiento", "el peso es cero"], 1, "La componente del peso está equilibrada por el rozamiento."),
    q4("Una piedra de 0,5 kg gira a 2 m/s en una circunferencia de 1 m. La tensión es…", ["1 N", "2 N", "4 N", "0,5 N"], 1, "0,5 · 4 / 1 = 2 N."),
    q4("En un ascensor que baja acelerando con a = 2 m/s², una persona de 50 kg marca…", ["590 N", "390 N", "490 N", "100 N"], 1, "50 · (9,8 − 2) = 390 N."),
    q4("Un muelle se alarga 3 cm con 6 N. ¿Cuánto se alarga con 10 N?", ["5 cm", "4 cm", "6 cm", "2 cm"], 0, "k = 200 N/m; Δl = 10 / 200 = 0,05 m."),
  ],
  feynman: ["Qué es una fuerza y qué efectos produce", "Por qué un cuerpo puede moverse sin fuerza neta", "Qué dice F = m·a con un ejemplo", "Por qué la acción y la reacción no se anulan", "La diferencia entre masa y peso", "Por qué un coche puede derrapar en una curva"],
  mapa: S.mapa,
  tarjetas: [
    ["Primera ley de Newton", "Si ΣF = 0, el cuerpo sigue en reposo o en MRU (inercia)."],
    ["Segunda ley de Newton", "ΣF = m · a."],
    ["Tercera ley de Newton", "Toda acción tiene una reacción igual y opuesta sobre el otro cuerpo."],
    ["Ley de Hooke", "F = k · Δl."],
    ["Peso", "P = m · g, en newtons."],
    ["Fuerza de rozamiento", "F<sub>r</sub> = μ · N, opuesta al deslizamiento."],
    ["Componentes de una fuerza", "F<sub>x</sub> = F · cos α; F<sub>y</sub> = F · sen α."],
    ["Componentes del peso en un plano inclinado", "m·g·sen α (paralela) y m·g·cos α (perpendicular)."],
    ["Báscula en un ascensor que acelera hacia arriba", "N = m · (g + a)."],
    ["Fuerza centrípeta", "F = m · v² / R, hacia el centro."],
    ["1 newton", "La fuerza que da a 1 kg una aceleración de 1 m/s²."],
    ["Resultante de dos fuerzas perpendiculares", "√(F₁² + F₂²)."],
  ],
  glosario: [
    ["Fuerza", "Interacción entre dos cuerpos que puede cambiar su movimiento o deformarlos."],
    ["Newton (N)", "Unidad de fuerza del SI: 1 N = 1 kg · m/s²."],
    ["Resultante", "Fuerza única que equivale a la suma vectorial de todas las que actúan."],
    ["Equilibrio", "Situación en la que la resultante es cero."],
    ["Componentes", "Dos fuerzas perpendiculares que equivalen a una fuerza dada."],
    ["Constante elástica", "Fuerza necesaria para estirar un muelle un metro; mide su dureza."],
    ["Límite de elasticidad", "Fuerza a partir de la cual un cuerpo queda deformado para siempre."],
    ["Inercia", "Tendencia de un cuerpo a conservar su estado de reposo o de movimiento."],
    ["Peso", "Fuerza con la que un planeta atrae a un cuerpo; P = m·g."],
    ["Fuerza normal", "Fuerza perpendicular que ejerce una superficie sobre el cuerpo apoyado."],
    ["Rozamiento", "Fuerza que se opone al deslizamiento entre superficies en contacto."],
    ["Coeficiente de rozamiento", "Número sin unidades que depende de las superficies en contacto."],
    ["Tensión", "Fuerza que ejerce una cuerda tensa sobre los cuerpos atados a ella."],
    ["Diagrama de cuerpo libre", "Dibujo del cuerpo aislado con todas las fuerzas que actúan sobre él."],
    ["Fuerza centrípeta", "Resultante dirigida al centro que mantiene un movimiento circular."],
    ["Ingravidez", "Sensación de no pesar que aparece cuando todo cae con la misma aceleración."],
  ],
  situacion: {
    titulo: "¿Qué zapatilla agarra más?",
    reto: "Una tienda de deportes os pide comparar el agarre de varias zapatillas sobre el suelo del pabellón para recomendar las mejores para fútbol sala. Debéis medir su coeficiente de rozamiento con material sencillo.",
    pasos: [
      "Reunid al menos cuatro zapatillas distintas y anotad su masa con una báscula de cocina.",
      "Método 1: tirad de cada zapatilla con un dinamómetro a velocidad constante y medid la fuerza; calculad μ = F / (m·g).",
      "Método 2: ponedlas sobre una tabla que vais inclinando y medid el ángulo en que empiezan a deslizar; μ = tg α.",
      "Repetid cada medida tres veces, calculad la media y estimad el error.",
      "Comparad los dos métodos y explicad las diferencias con el diagrama de cuerpo libre.",
    ],
    producto: "Un informe de laboratorio de dos páginas con tablas, diagramas de fuerzas y una recomendación razonada.",
    evaluacion: ["Los diagramas de cuerpo libre son correctos.", "Las medidas se repiten y se tratan con medias y errores.", "Se aplican bien la segunda ley y la condición de equilibrio.", "La conclusión es coherente con los datos y se comunica con claridad."],
  },
  familias: [
    "En el coche o el autobús, comentad por qué el cuerpo se va hacia delante al frenar y qué hace el cinturón.",
    "Empujad un carro de la compra vacío y uno lleno con la misma fuerza: ¿cuál acelera más?",
    "Con una goma elástica y unas monedas, comprobad si el alargamiento crece de forma proporcional al número de monedas.",
    "Repasad las tarjetas del tema y pedid que os expliquen un diagrama de fuerzas.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «La interacción»: fuerzas y sus efectos, composición y descomposición, leyes de Newton, fuerzas habituales (peso, normal, rozamiento, tensión, elástica) y dinámica del movimiento circular.`,
    ideas: [
      "Medir constantes elásticas con muelles y pesas y representar F-Δl en una hoja de cálculo.",
      "Determinar coeficientes de rozamiento con plano inclinado y transportador, o con phyphox y el móvil.",
      "Usar la simulación «Fuerzas y movimiento» de PhET para comprobar la segunda ley.",
      "Báscula de baño en el ascensor del centro para registrar la normal al arrancar y frenar.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Leyes de Newton, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Leyes_de_Newton" },
    { t: "Simulaciones PhET de la Universidad de Colorado", url: "https://phet.colorado.edu/es/" },
  ],
  revisado: "2026-11-13",
};
