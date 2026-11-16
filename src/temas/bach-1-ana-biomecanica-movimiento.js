// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");

// Palanca genérica: barra, fulcro (triángulo), resistencia y potencia en posiciones dadas.
const palanca = (aria, t, pf, pr, pp) => B.lienzo(aria, `
  <path d="M24 96 H 236" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>
  <path d="M${pf} 99 l-12 22 h24 z" fill="var(--leaf)"/>${B.tx(pf, 140, "F (eje)", { fs: 10.5, maxW: 56, bold: true, color: "var(--leaf)" })}
  <path d="M${pr} 66 V 92" stroke="var(--red)" stroke-width="3"/><path d="M${pr - 6} 84 l6 10 l6 -10 z" fill="var(--red)"/>
  ${B.tx(pr, 58, "R", { fs: 13, maxW: 30, bold: true, color: "var(--red)" })}
  <path d="M${pp} 66 V 92" stroke="var(--pen)" stroke-width="3"/><path d="M${pp - 6} 84 l6 10 l6 -10 z" fill="var(--pen)"/>
  ${B.tx(pp, 58, "P", { fs: 13, maxW: 30, bold: true, color: "var(--pen)" })}`, t);

// Antebrazo como palanca de tercer grado.
const codo = B.lienzo("El antebrazo es una palanca de tercer grado: el eje en el codo, la potencia del bíceps cerca del codo y la resistencia en la mano", `
  <circle cx="40" cy="120" r="9" fill="var(--leaf)"/>
  <path d="M40 120 L 220 120" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>
  <path d="M40 120 L 40 30" stroke="var(--line)" stroke-width="10" stroke-linecap="round"/>
  <path d="M74 118 L 52 40" stroke="var(--pen)" stroke-width="4"/>
  <rect x="206" y="128" width="28" height="22" rx="4" fill="var(--red)"/>
  ${B.tx(40, 148, "codo (F)", { fs: 10.5, maxW: 60, bold: true, color: "var(--leaf)" })}
  ${B.tx(96, 66, "bíceps (P)", { fs: 10.5, maxW: 70, bold: true, color: "var(--pen)" })}
  ${B.tx(220, 166, "peso (R)", { fs: 10.5, maxW: 60, bold: true, color: "var(--red)" })}
  ${B.tx(120, 104, "brazo de R ≈ 35 cm", { fs: 10, maxW: 120, color: "var(--muted)" })}
  ${B.tx(56, 172, "brazo de P ≈ 4 cm", { fs: 10, maxW: 100, color: "var(--muted)" })}`, "El antebrazo: palanca de 3.er grado");

// Base de sustentación y centro de gravedad.
const equilibrio = B.lienzo("Equilibrio estable cuando la vertical del centro de gravedad cae dentro de la base de sustentación e inestable cuando cae fuera", `
  ${[[70, "estable", 70, "var(--leaf)"], [190, "inestable", 214, "var(--red)"]].map(([x, t, xg, c]) => `
    <rect x="${x - 40}" y="134" width="80" height="12" rx="4" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>
    <circle cx="${xg}" cy="64" r="8" fill="${c}"/><path d="M${xg} 72 V 132" stroke="${c}" stroke-width="2.5" stroke-dasharray="5 4"/>
    ${B.tx(x, 166, t, { fs: 11.5, maxW: 90, bold: true, color: c })}`).join("")}
  ${B.tx(130, 40, "centro de gravedad", { fs: 10.5, maxW: 120, color: "var(--muted)" })}
  ${B.tx(130, 128, "base", { fs: 10, maxW: 40, color: "var(--muted)" })}`, "Centro de gravedad y base");

module.exports = B.tema({
  titulo: "Biomecánica del movimiento",
  minutos: 120,
  objetivos: [
    "Definir la biomecánica y describir el movimiento humano con magnitudes cinemáticas (posición, velocidad, aceleración)",
    "Aplicar las leyes de Newton, el impulso y la cantidad de movimiento a gestos deportivos y artísticos",
    "Analizar las palancas del cuerpo humano y calcular momentos de fuerza",
    "Relacionar el centro de gravedad y la base de sustentación con el equilibrio y la estabilidad",
    "Aplicar principios biomecánicos a la mejora de la técnica, la prevención de lesiones y la ergonomía",
  ],
  claves: ["biomecánica", "cinemática", "dinámica", "velocidad", "aceleración", "fuerza", "impulso", "momento de fuerza", "palanca", "centro de gravedad", "base de sustentación", "cadena cinética"],
  pregunta: {
    texto: "¿Por qué los saltadores de altura pasan la barra de espaldas y arqueados, si así parece más difícil?",
    respuesta: "Por una cuestión de <mark>centro de gravedad</mark>. Con la técnica de Fosbury, el cuerpo se arquea alrededor de la barra de forma que cada segmento la pasa por turnos, mientras el centro de gravedad del conjunto puede pasar <b>por debajo</b> de ella. Así se supera una altura mayor con el mismo impulso. La biomecánica explica por qué esa técnica, que parecía extraña en 1968, hoy la usan todos.",
  },
  lectura: {
    titulo: "Física dentro del cuerpo",
    html: `<p>En 1968, en los Juegos Olímpicos de México, un saltador estadounidense llamado Dick Fosbury sorprendió al mundo pasando el listón de espaldas. Los entrenadores se reían de él; él ganó la medalla de oro. Lo que había descubierto, casi por intuición, era una aplicación brillante de la física al cuerpo humano.</p>
    <p>La biomecánica estudia exactamente eso: cómo actúan las fuerzas sobre el cuerpo y cómo el cuerpo las produce. Explica por qué un bailarín gira más deprisa cuando recoge los brazos, por qué los velocistas salen agachados, por qué levantar una caja con la espalda doblada daña los discos de la columna o por qué una zapatilla de correr tiene la forma que tiene.</p>
    <p>No hace falta ser físico para usarla. Basta con mirar el movimiento con ojos nuevos: identificar las palancas de los huesos, las fuerzas que empujan y frenan, el equilibrio que se gana y se pierde. En este tema aprenderás a analizar cualquier gesto, desde un saque de tenis hasta un plié, y a mejorarlo con criterios científicos.</p>`,
  },
  secciones: [3, 5, 5],
  bloques: [
    {
      h: "Qué es la biomecánica",
      html: `<p>La <b>biomecánica</b> es la ciencia que aplica los principios de la mecánica (la parte de la física que estudia el movimiento y las fuerzas) a los seres vivos. En el ser humano estudia los movimientos del cuerpo, las fuerzas que los producen y los efectos de esas fuerzas sobre los tejidos.</p>
      <p>Se divide en dos grandes ramas:</p>
      <ul><li><b>Cinemática</b>: describe el movimiento sin preocuparse de sus causas: trayectorias, distancias, velocidades, aceleraciones y ángulos articulares.</li>
      <li><b>Cinética</b> o dinámica: estudia las <b>fuerzas</b> que producen o modifican el movimiento: la fuerza muscular, la gravedad, el rozamiento, la resistencia del aire o del agua, la reacción del suelo.</li></ul>
      <p>Sus aplicaciones son muy variadas:</p>
      <ul><li><b>Rendimiento deportivo y artístico</b>: mejorar la técnica de un gesto para que sea más eficaz y económico.</li>
      <li><b>Prevención y recuperación de lesiones</b>: identificar movimientos que sobrecargan una articulación.</li>
      <li><b>Ergonomía</b>: adaptar el puesto de trabajo, el mobiliario o las herramientas al cuerpo.</li>
      <li><b>Diseño</b> de calzado, prótesis, sillas de ruedas o material deportivo.</li></ul>
      <p>Hoy se trabaja con vídeo a alta velocidad, sensores inerciales, plataformas de fuerza que miden cómo empujamos el suelo y electromiografía, que registra la actividad eléctrica de los músculos.</p>`,
      svg: B.estrella("Aplicaciones de la biomecánica", "Biomecánica", ["Técnica", "Lesiones", "Ergonomía", "Calzado", "Prótesis", "Danza"]),
      video: { id: "2-V43HpVfvg", titulo: "Introducción a la Biomecánica", canal: "Jose Luis Sarmiento", vistas: 126635 },
    },
    {
      h: "Tipos de movimiento",
      html: `<p>El movimiento de un cuerpo puede ser de dos tipos básicos:</p>
      <ul><li><b>Lineal</b> o de traslación: todas las partes del cuerpo recorren la misma distancia en la misma dirección. Puede ser <b>rectilíneo</b> (un patinador deslizándose en línea recta) o <b>curvilíneo</b> (la trayectoria parabólica de un saltador de longitud o de un balón lanzado).</li>
      <li><b>Angular</b> o de rotación: el cuerpo o un segmento gira alrededor de un eje. Todos los movimientos articulares son angulares: el antebrazo gira alrededor del codo; el cuerpo entero gira en una pirueta o en un salto mortal.</li></ul>
      <p>La mayoría de los movimientos humanos son <b>mixtos</b>: al correr, el cuerpo se traslada gracias a la rotación coordinada de muslos, piernas y pies. Las rotaciones de varios segmentos encadenados producen la traslación del conjunto.</p>
      <p>Para analizar un gesto se suele dividir en <b>fases</b>:</p>
      <ol><li><b>Preparatoria</b>: se sitúa el cuerpo y se toma impulso (armado del brazo, flexión de piernas antes del salto).</li>
      <li><b>Principal</b> o de ejecución: se aplica la fuerza y se produce el objetivo (golpeo, despegue, lanzamiento).</li>
      <li><b>Final</b> o de recuperación: se frena el movimiento de forma controlada y se vuelve a una posición estable. Muchas lesiones ocurren en esta fase, por eso es importante entrenar el frenado (contracciones excéntricas).</li></ol>`,
      svg: B.flujo("Fases de un gesto técnico", ["Preparatoria: armar y tomar impulso", "Principal: aplicar la fuerza", "Final: frenar y estabilizar"], { t: "Fases del movimiento" }),
    },
    {
      h: "Cinemática: velocidad y aceleración",
      html: `<p>Para describir un movimiento lineal se usan estas magnitudes:</p>
      <ul><li><b>Posición</b> y <b>desplazamiento</b> (en metros).</li>
      <li><b>Velocidad</b>: rapidez con que cambia la posición. La velocidad media es <b>v = Δx / Δt</b> (m/s). Para pasar de km/h a m/s se divide entre 3,6.</li>
      <li><b>Aceleración</b>: rapidez con que cambia la velocidad: <b>a = Δv / Δt</b> (m/s²).</li></ul>
      <p>En una carrera de 100 m, el atleta acelera mucho en los primeros 30-40 m, alcanza su <b>velocidad máxima</b> hacia los 60 m y la mantiene o pierde un poco al final por la fatiga.</p>
      <p>La velocidad de carrera es el producto de dos variables: <b>v = longitud de zancada · frecuencia de zancada</b>. Mejorar la técnica, la fuerza y la flexibilidad aumenta la longitud; la coordinación y la velocidad de contracción, la frecuencia.</p>
      <p>En los movimientos angulares se usan magnitudes equivalentes: el <b>ángulo</b> (en grados o radianes), la <b>velocidad angular</b> (ω, en rad/s o vueltas por segundo) y la aceleración angular. La velocidad lineal de un punto que gira es <mark>v = ω · r</mark>: cuanto más lejos del eje, mayor velocidad. Por eso un brazo estirado o una raqueta larga golpean más rápido, y por eso el extremo del pie de un bailarín se mueve mucho más deprisa que su rodilla en una patada.</p>`,
      svg: B.barras("Velocidad aproximada de distintos movimientos en kilómetros por hora", [["Andar", 5], ["Correr suave", 10], ["Esprint élite", 44], ["Saque tenis", 220], ["Remate bádminton", 400]], { t: "Velocidades (km/h)" }),
    },
    {
      h: "Las fuerzas y las leyes de Newton",
      html: `<p>Una <b>fuerza</b> es toda acción capaz de cambiar el estado de movimiento de un cuerpo o de deformarlo. Es una magnitud vectorial (tiene módulo, dirección, sentido y punto de aplicación) y se mide en <b>newtons</b> (N). Las tres <b>leyes de Newton</b> explican cualquier movimiento:</p>
      <ul><li><b>1.ª ley, de la inercia</b>: un cuerpo permanece en reposo o en movimiento rectilíneo uniforme si no actúa sobre él una fuerza neta. Por eso cuesta arrancar desde parado y también frenar; por eso, en un frenazo, el cuerpo sigue hacia delante.</li>
      <li><b>2.ª ley, fundamental de la dinámica</b>: la aceleración es proporcional a la fuerza neta e inversamente proporcional a la masa: <b>F = m · a</b>. Un jugador más pesado necesita más fuerza para acelerar igual que uno ligero.</li>
      <li><b>3.ª ley, de acción y reacción</b>: si un cuerpo ejerce una fuerza sobre otro, este ejerce sobre el primero una fuerza igual y de sentido contrario. Para avanzar al correr empujamos el suelo hacia atrás y el suelo nos empuja hacia delante (<b>fuerza de reacción del suelo</b>); el nadador empuja el agua hacia atrás.</li></ul>
      <p>Las principales fuerzas externas que actúan sobre el cuerpo son el <b>peso</b> (P = m · g, con g = 9,8 m/s²), la <b>reacción del suelo</b>, el <b>rozamiento</b> (imprescindible para no resbalar: por eso existen tacos, resina en la danza o magnesio en la gimnasia) y la <b>resistencia del aire o del agua</b>, que crece mucho con la velocidad. Las fuerzas internas las producen los músculos y las soportan huesos, tendones y ligamentos.</p>`,
      svg: B.cajas("Las tres leyes de Newton aplicadas al movimiento humano", [["1.ª Inercia", "cuesta arrancar|y cuesta frenar"], ["2.ª F = m · a", "más fuerza,|más aceleración"], ["3.ª Reacción", "empujo el suelo|y me empuja"], ["Rozamiento", "agarre: tacos,|resina, magnesio"]], { t: "Leyes de Newton" }),
      video: { id: "wHSxYEf53eA", titulo: "Explicación de LAS LEYES DE NEWTON usando FÚTBOL como ejemplo", canal: "Working Lab", vistas: 8116 },
    },
    {
      h: "Impulso y cantidad de movimiento",
      html: `<p>La <b>cantidad de movimiento</b> (o momento lineal) de un cuerpo es el producto de su masa por su velocidad: <b>p = m · v</b> (kg·m/s). Un pilier de rugby de 110 kg a 6 m/s tiene más cantidad de movimiento que un ala de 80 kg a 8 m/s, y es más difícil de parar.</p>
      <p>Para cambiar la cantidad de movimiento hay que aplicar un <b>impulso</b>, que es la fuerza por el tiempo que actúa:</p>
      <div class="formula"><span>I = F · Δt = Δp = m · Δv</span></div>
      <p>Esta relación tiene dos consecuencias prácticas muy importantes:</p>
      <ul><li>Para <b>ganar velocidad</b> (saltar, lanzar), interesa aplicar mucha fuerza durante el mayor tiempo posible. Por eso el lanzador de peso gira o se desplaza antes de soltar el artefacto, el saltador flexiona las piernas antes del despegue y el bailarín hace un plié antes de un salto: alargan el recorrido y el tiempo de aplicación de la fuerza.</li>
      <li>Para <b>frenar</b> sin lesionarse (recepciones, caídas, parar un balón), interesa alargar el tiempo de frenado: así la fuerza máxima es menor. Por eso se amortiguan los saltos flexionando tobillos, rodillas y caderas, se recogen los balones acompañando con los brazos, se usan colchonetas y los suelos de danza son flotantes.</li></ul>
      <p>En una recepción con las piernas rígidas, el frenado dura unas centésimas de segundo y la fuerza puede superar <mark>diez veces el peso corporal</mark>; con una buena amortiguación se reduce a la mitad o menos. Aprender a caer es una forma de prevención.</p>`,
      svg: B.comparar("Recepción rígida frente a amortiguada", ["Rígida", ["tiempo muy corto", "fuerza muy alta", "más riesgo", "rodillas estiradas"]], ["Amortiguada", ["tiempo más largo", "fuerza menor", "menos riesgo", "flexión de tres art."]]),
    },
    {
      h: "El momento de fuerza",
      html: `<p>Para que un segmento gire alrededor de una articulación no basta con aplicar una fuerza: importa <b>dónde</b> y <b>cómo</b> se aplica. El efecto de giro de una fuerza es el <b>momento de fuerza</b> o torque:</p>
      <div class="formula"><span>M = F · d</span></div>
      <p>donde <b>d</b> es el <b>brazo de momento</b>: la distancia perpendicular desde el eje de giro hasta la línea de acción de la fuerza. Se mide en N·m. Es lo que ocurre al abrir una puerta: cuesta menos empujando lejos de las bisagras.</p>
      <p>En el cuerpo, los músculos producen momentos alrededor de las articulaciones, y los pesos (el del propio segmento y el de las cargas) producen momentos que se oponen. Consecuencias:</p>
      <ul><li>Sostener una mancuerna con el brazo estirado en horizontal cuesta mucho más que con el codo pegado al cuerpo, porque el brazo de momento del peso es mucho mayor.</li>
      <li>Al levantar una caja lejos del cuerpo, el momento sobre la zona lumbar se multiplica; los músculos de la espalda deben compensarlo con fuerzas enormes que comprimen los discos. Por eso hay que <b>acercar la carga</b> al cuerpo.</li>
      <li>El brazo de momento de un músculo cambia con el ángulo de la articulación: por eso hay ángulos en los que somos más fuertes.</li></ul>
      <p>Un cuerpo está en <b>equilibrio de rotación</b> cuando la suma de los momentos que tienden a girarlo en un sentido es igual a la de los que tienden a girarlo en el contrario.</p>`,
      svg: B.rejilla("El momento de un peso de 50 N según su distancia al eje", ["Distancia", "Peso", "Momento"], [["0,10 m", "50 N", "5 N·m"], ["0,30 m", "50 N", "15 N·m"], ["0,60 m", "50 N", "30 N·m"]], { t: "M = F · d" }),
      video: { id: "gKDwCsNJ85s", titulo: "BRAZO DE MOMENTO o BRAZO de PALANCA - BIOMECÁNICA FÁCIL", canal: "Profesor Matias Rodriguez", vistas: 112163 },
    },
    {
      h: "Las palancas del cuerpo humano",
      html: `<p>Los huesos actúan como <b>palancas</b>: barras rígidas que giran alrededor de un punto de apoyo o <b>fulcro</b> (la articulación) cuando se aplica una <b>potencia</b> (la fuerza del músculo, en su inserción) para vencer una <b>resistencia</b> (el peso del segmento y de la carga). La ley de la palanca dice que en equilibrio:</p>
      <div class="formula"><span>P · bP = R · bR</span></div>
      <p>donde bP y bR son los brazos de potencia y de resistencia. Según la posición del fulcro hay tres tipos:</p>
      <ul><li><b>Primer grado</b> (interapoyo): el fulcro está entre la potencia y la resistencia, como un balancín. Ejemplo: la cabeza sobre la primera vértebra al asentir; el tríceps extendiendo el codo.</li>
      <li><b>Segundo grado</b> (interresistente): la resistencia está entre el fulcro y la potencia, como una carretilla. Favorecen la fuerza. Ejemplo clásico: ponerse de puntillas (fulcro en los dedos, resistencia en el tobillo, potencia de los gemelos en el talón).</li>
      <li><b>Tercer grado</b> (interpotente): la potencia está entre el fulcro y la resistencia, como unas pinzas. Son las más abundantes del cuerpo: la flexión del codo por el bíceps, la extensión de rodilla por el cuádriceps.</li></ul>
      <p>Las palancas de tercer grado tienen el brazo de potencia más corto que el de resistencia, por lo que el músculo tiene que hacer mucha más fuerza que la carga. Su ventaja es la <mark>velocidad y la amplitud</mark>: un pequeño acortamiento del músculo produce un gran desplazamiento rápido de la mano o del pie.</p>`,
      svg: palanca("Palanca de primer grado con el fulcro entre la potencia y la resistencia", "1.er grado: F en medio", 130, 60, 200),
      video: { id: "vHWsey8oFYc", titulo: "PALANCAS, Clasificación y Ejemplos Corporales en Anatomía", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 397386 },
    },
    {
      h: "Cálculos con palancas",
      html: `<p>La ley de la palanca permite calcular la fuerza que debe hacer un músculo. En la flexión del codo con una mancuerna:</p>
      <ul><li>El bíceps se inserta a unos 4 cm del codo (brazo de potencia).</li>
      <li>La mano con la mancuerna está a unos 35 cm (brazo de resistencia).</li>
      <li>Si la mancuerna pesa 50 N (unos 5 kg), la fuerza del bíceps en equilibrio es: P = R · bR / bP = 50 · 35 / 4 ≈ <b>440 N</b>, casi nueve veces la carga (sin contar el peso del antebrazo).</li></ul>
      <p>La <b>ventaja mecánica</b> de una palanca es el cociente bP / bR. Si es mayor que 1 (segundo grado), la palanca favorece la fuerza; si es menor que 1 (tercer grado), favorece la velocidad y la amplitud a costa de exigir más fuerza al músculo.</p>
      <p>Estas cifras explican por qué los tendones y sus inserciones soportan cargas enormes: el tendón de Aquiles puede soportar entre 6 y 12 veces el peso corporal al correr o al saltar.</p>`,
      svg: codo,
    },
    {
      h: "Centro de gravedad y equilibrio",
      html: `<p>El <b>centro de gravedad</b> (CG) es el punto donde puede considerarse aplicado el peso de todo el cuerpo. En posición anatómica está aproximadamente a la altura de la segunda vértebra sacra, un poco por delante, a un 55 % de la estatura en las mujeres y algo más alto en los hombres. Pero <mark>cambia de lugar</mark> con cada postura: al levantar los brazos sube; al flexionarse hacia delante se desplaza; en un puente o en el salto Fosbury puede quedar fuera del cuerpo.</p>
      <p>La <b>base de sustentación</b> es la superficie delimitada por los puntos de apoyo con el suelo: los pies, más el espacio entre ellos, o las manos y los pies en una plancha. Un cuerpo está en <b>equilibrio estático</b> cuando la vertical que pasa por su CG cae dentro de la base de sustentación. La <b>estabilidad</b> (la resistencia a perder el equilibrio) aumenta cuando:</p>
      <ul><li>la base de sustentación es <b>más amplia</b>, sobre todo en la dirección de la fuerza que puede desequilibrar (un portero separa los pies; un luchador amplía su base);</li>
      <li>el CG está <b>más bajo</b> (flexionar las rodillas);</li>
      <li>la vertical del CG cae <b>más cerca del centro</b> de la base;</li>
      <li>la <b>masa</b> es mayor y el <b>rozamiento</b> con el suelo, más alto.</li></ul>
      <p>A veces interesa lo contrario: el velocista en los tacos coloca su CG adelantado, casi fuera de su base, para caer hacia delante y arrancar más rápido. El <b>equilibrio dinámico</b> (andar, correr, bailar) es una sucesión de pérdidas y recuperaciones controladas del equilibrio.</p>`,
      svg: equilibrio,
      video: { id: "QICruPuoAHY", titulo: "CENTRO DE GRAVEDAD | Qué es, dónde se encuentra y cuál es su importancia para el ser humano", canal: "FisioOnline", vistas: 67481 },
    },
    {
      h: "Los movimientos de rotación y el momento angular",
      html: `<p>En los giros, las piruetas, los saltos mortales o los lanzamientos con rotación aparece una magnitud clave: el <b>momento de inercia</b> (I), que mide la resistencia de un cuerpo a girar. Depende de la masa y, sobre todo, de lo <b>lejos del eje</b> que esté distribuida: un cuerpo extendido tiene un momento de inercia mucho mayor que uno agrupado.</p>
      <p>El <b>momento angular</b> es el producto del momento de inercia por la velocidad angular: <b>L = I · ω</b>. Una vez en el aire, o girando sobre un punto con poco rozamiento, el momento angular se <mark>conserva</mark>. Por tanto:</p>
      <ul><li>Si se <b>recogen</b> brazos y piernas (I menor), el cuerpo gira <b>más deprisa</b>: la patinadora acelera su giro al pegar los brazos al cuerpo; el gimnasta se agrupa para dar dos vueltas en un mortal.</li>
      <li>Si se <b>extienden</b> (I mayor), el giro se frena: al final de un mortal el gimnasta se abre para «parar» la rotación antes de la recepción; el bailarín abre los brazos para terminar una pirueta.</li></ul>
      <p>El momento angular se genera en el suelo, antes del despegue, empujando de forma asimétrica o girando los brazos. En el aire ya no se puede crear, solo redistribuir entre los segmentos.</p>`,
      svg: B.comparar("Cuerpo extendido frente a agrupado en un giro", ["Extendido", ["masa lejos del eje", "I grande", "gira despacio", "frena el giro"]], ["Agrupado", ["masa cerca del eje", "I pequeño", "gira deprisa", "acelera el giro"]]),
    },
    {
      h: "La cadena cinética y la técnica",
      html: `<p>En la mayoría de los gestos explosivos (lanzar, golpear, chutar, saltar), la velocidad final no la produce un solo músculo, sino la <b>suma coordinada</b> de los movimientos de muchos segmentos. Es la <b>cadena cinética</b>: la fuerza se transmite desde el suelo hacia los segmentos más alejados, como un látigo.</p>
      <p>Por ejemplo, en un saque de tenis o un lanzamiento de jabalina, el movimiento empieza con el empuje de las <b>piernas</b>, sigue con la rotación de la <b>cadera</b> y el <b>tronco</b>, continúa con el <b>hombro</b> y el <b>codo</b> y termina con la <b>muñeca</b>. Cada segmento empieza a moverse cuando el anterior alcanza su máxima velocidad. Así se aprovecha la velocidad acumulada y los segmentos distales, más ligeros, alcanzan velocidades altísimas.</p>
      <p>Otros principios biomecánicos útiles para mejorar la técnica son:</p>
      <ul><li><b>Pre-estiramiento</b>: un músculo que se estira justo antes de contraerse (ciclo estiramiento-acortamiento) produce más fuerza, gracias a la energía elástica de los tendones y al reflejo miotático. Es lo que ocurre en el contramovimiento antes de un salto.</li>
      <li><b>Óptimo recorrido</b> de aceleración: aplicar la fuerza a lo largo de la mayor distancia útil.</li>
      <li><b>Dirección</b> de la fuerza: aplicarla en la dirección del movimiento deseado.</li>
      <li><b>Estabilidad del tronco</b> (core): un tronco firme transmite la fuerza de las piernas a los brazos; uno inestable la pierde.</li></ul>
      <p>Si un eslabón de la cadena falla (por ejemplo, poca rotación de cadera), los siguientes deben compensar y se sobrecargan: es el origen de muchas lesiones de hombro y codo.</p>`,
      svg: B.flujo("Cadena cinética de un lanzamiento", ["Piernas: empujan el suelo", "Cadera y tronco: rotan", "Hombro: rota y avanza", "Codo: se extiende", "Muñeca: golpe final"], { t: "Cadena cinética" }),
    },
    {
      h: "Biomecánica de la marcha y la carrera",
      html: `<p>La <b>marcha</b> es el movimiento más habitual del ser humano. Cada pierna alterna una <b>fase de apoyo</b> (60 % del ciclo), desde que el talón toca el suelo hasta que despegan los dedos, y una <b>fase de oscilación</b> (40 %), en la que avanza por el aire. Siempre hay al menos un pie en el suelo, y hay momentos de <b>doble apoyo</b>. Los brazos se balancean en oposición a las piernas para contrarrestar la rotación del tronco.</p>
      <p>En la <b>carrera</b> desaparece el doble apoyo y aparece una <b>fase de vuelo</b> en la que ningún pie toca el suelo. Por eso las fuerzas de reacción del suelo son mucho mayores: unas 1,2 veces el peso al andar y de <b>2 a 3 veces</b> al correr, con cada paso. Un corredor da unos 1000 pasos por kilómetro con cada pie.</p>
      <p>La forma de apoyar el pie varía: de talón, de mediopié o de antepié. No hay una forma «correcta» para todos; importa más evitar <b>zancadas exageradas</b> que adelanten mucho el pie respecto al cuerpo (frenan y sobrecargan la rodilla), mantener una <b>cadencia</b> alrededor de 170-180 pasos por minuto y aumentar los kilómetros de forma progresiva.</p>
      <p>El <b>calzado</b> modifica la biomecánica: la amortiguación reduce los picos de fuerza, la sujeción controla la pronación y la suela determina el agarre.</p>`,
      svg: B.barras("Fuerza de reacción del suelo en veces el peso corporal", [["De pie", 1], ["Andar", 1.2], ["Correr", 2.5], ["Salto con caída", 5], ["Caída rígida", 10]], { t: "Fuerza del suelo (× peso)" }),
    },
    {
      h: "Biomecánica aplicada a la salud y la ergonomía",
      html: `<p>La biomecánica es una herramienta de <b>prevención</b>. Las lesiones aparecen cuando la carga que soporta un tejido supera su capacidad, ya sea de golpe (un esguince en una mala caída) o por acumulación de cargas pequeñas repetidas (tendinopatías, fracturas por estrés). Para prevenirlas:</p>
      <ul><li>Aumentar las cargas de forma <b>progresiva</b>, para que los tejidos se adapten.</li>
      <li>Aprender la <b>técnica</b> correcta de los gestos y de las recepciones.</li>
      <li>Fortalecer los músculos que <b>estabilizan</b> las articulaciones y el tronco.</li>
      <li>Usar <b>material adecuado</b>: calzado, suelos, protecciones.</li></ul>
      <p>La <b>ergonomía</b> aplica estos principios a la vida diaria y al trabajo:</p>
      <ul><li><b>Levantar cargas</b>: acercarse a la carga, separar los pies para ampliar la base, flexionar caderas y rodillas manteniendo la espalda en su posición neutra, sujetar la carga pegada al cuerpo y levantarla con las piernas, sin girar el tronco. Según la normativa española de seguridad laboral, en general no conviene manipular más de 25 kg.</li>
      <li><b>Estar sentado</b>: pies apoyados, rodillas a unos 90°, zona lumbar apoyada, pantalla a la altura de los ojos y a un brazo de distancia, y levantarse cada 30-45 minutos.</li>
      <li><b>Mochila</b>: usar las dos asas, ajustada a la espalda y con un peso que no supere el <mark>10-15 % del peso corporal</mark>.</li>
      <li><b>Móvil</b>: subirlo a la altura de los ojos; inclinar la cabeza 60° multiplica por cinco la carga sobre las cervicales.</li></ul>`,
      svg: B.flujo("Pasos para levantar una carga del suelo de forma segura", ["Acércate y separa los pies", "Flexiona caderas y rodillas", "Espalda neutra, carga pegada", "Levanta con las piernas", "No gires el tronco: gira los pies"], { t: "Levantar una carga" }),
    },
  ],
  figura: {
    titulo: "Biomecánica en cuatro fórmulas",
    items: [["Newton", "F = m · a", "más fuerza,", "más aceleración"], ["Impulso", "F · Δt = m · Δv", "alarga el tiempo", "para frenar"], ["Palanca", "P · bP = R · bR", "1.º, 2.º y 3.er", "grado"], ["Giro", "L = I · ω", "agrúpate para", "girar más rápido"]],
  },
  video: { id: "teZWN5NBVUc", titulo: "PALANCAS en el CUERPO HUMANO | BIOMECÁNICA (Ejemplos) FÁCIL", canal: "Profesor Matias Rodriguez", vistas: 282940 },
  quiz: [
    ["La rama de la biomecánica que describe el movimiento sin estudiar sus causas es la…", ["cinética", "cinemática", "ergonomía", "estática"], 1, "La cinética estudia las fuerzas."],
    ["Un movimiento en el que el cuerpo gira alrededor de un eje es…", ["lineal", "angular", "rectilíneo", "parabólico"], 1, "Todos los movimientos articulares son angulares."],
    ["36 km/h equivalen a…", ["3,6 m/s", "10 m/s", "36 m/s", "100 m/s"], 1, "36 / 3,6 = 10 m/s."],
    ["La velocidad de carrera es el producto de…", ["masa y aceleración", "longitud y frecuencia de zancada", "fuerza y tiempo", "peso y altura"], 1, "Se puede mejorar cada factor."],
    ["Empujar el suelo hacia atrás para avanzar es un ejemplo de la ley…", ["de la inercia", "fundamental", "de acción y reacción", "de la palanca"], 2, "El suelo nos empuja hacia delante."],
    ["Según la 2.ª ley de Newton, a igual fuerza, un cuerpo con más masa…", ["acelera más", "acelera menos", "no acelera", "acelera igual"], 1, "a = F / m."],
    ["El impulso es igual a…", ["m · a", "F · Δt", "F · d", "I · ω"], 1, "Y equivale al cambio de cantidad de movimiento."],
    ["Para reducir la fuerza en una recepción hay que…", ["acortar el tiempo de frenado", "alargar el tiempo de frenado", "estirar las rodillas", "aumentar la velocidad"], 1, "Mismo impulso con menos fuerza."],
    ["El momento de fuerza se calcula como…", ["F + d", "F · d", "F / d", "m · v"], 1, "d es el brazo de momento."],
    ["Una palanca con el fulcro entre la potencia y la resistencia es de…", ["primer grado", "segundo grado", "tercer grado", "cuarto grado"], 0, "Como un balancín."],
    ["Ponerse de puntillas es una palanca de…", ["primer grado", "segundo grado", "tercer grado", "ninguna"], 1, "La resistencia está entre el fulcro y la potencia."],
    ["La palanca más abundante en el cuerpo humano es la de…", ["primer grado", "segundo grado", "tercer grado", "todas igual"], 2, "Favorece velocidad y amplitud."],
    ["En una palanca de tercer grado, el músculo debe hacer…", ["menos fuerza que la carga", "más fuerza que la carga", "la misma fuerza", "ninguna fuerza"], 1, "Su brazo de potencia es más corto."],
    ["El centro de gravedad de una persona…", ["siempre está en el ombligo", "cambia de lugar con la postura", "está fuera del cuerpo siempre", "no existe"], 1, "Puede incluso quedar fuera del cuerpo."],
    ["Para ser más estable, conviene…", ["juntar los pies", "subir el centro de gravedad", "ampliar la base y bajar el CG", "ponerse de puntillas"], 2, "Y mantener la vertical del CG centrada."],
    ["Una patinadora pega los brazos al cuerpo en un giro y…", ["gira más despacio", "gira más deprisa", "se para", "no cambia"], 1, "Disminuye su momento de inercia y se conserva el momento angular."],
    ["La transmisión de velocidad de las piernas a la muñeca en un lanzamiento es la…", ["cadena cinética", "inercia", "base de sustentación", "ergonomía"], 0, "Como un látigo."],
    ["La fase que tiene la carrera y no la marcha es la de…", ["apoyo", "vuelo", "doble apoyo", "oscilación"], 1, "La marcha tiene doble apoyo."],
    ["Al correr, la fuerza de reacción del suelo es de unas…", ["0,5 veces el peso", "1 vez el peso", "2-3 veces el peso", "20 veces el peso"], 2, "Por eso importa la progresión y el calzado."],
    ["Para levantar una caja del suelo hay que…", ["doblar la espalda con las piernas rectas", "acercarla y levantarla con las piernas", "girar el tronco", "alejarla del cuerpo"], 1, "Así se reduce el momento sobre la zona lumbar."],
  ],
  examen: [
    ["Un corredor recorre 400 m en 50 s. Su velocidad media es…", ["8 m/s", "20 m/s", "0,125 m/s", "80 m/s"], 0, "400 / 50 = 8 m/s."],
    ["Un velocista pasa de 0 a 10 m/s en 4 s. Su aceleración media es…", ["40 m/s²", "2,5 m/s²", "0,4 m/s²", "14 m/s²"], 1, "a = 10 / 4 = 2,5 m/s²."],
    ["¿Qué fuerza neta necesita un jugador de 80 kg para acelerar a 3 m/s²?", ["26,7 N", "240 N", "83 N", "800 N"], 1, "F = 80 · 3 = 240 N."],
    ["Un balón de 0,4 kg pasa de 0 a 25 m/s en un chut. El impulso recibido es…", ["10 N·s", "62,5 N·s", "100 N·s", "1 N·s"], 0, "I = m · Δv = 0,4 · 25 = 10 N·s."],
    ["Si el contacto del pie con el balón anterior dura 0,01 s, la fuerza media es…", ["10 N", "100 N", "1000 N", "0,1 N"], 2, "F = 10 / 0,01 = 1000 N."],
    ["Un peso de 40 N a 0,5 m del codo produce un momento de…", ["80 N·m", "20 N·m", "40,5 N·m", "0,0125 N·m"], 1, "M = 40 · 0,5 = 20 N·m."],
    ["Bíceps a 4 cm del codo, carga de 30 N a 32 cm. La fuerza del bíceps es…", ["30 N", "120 N", "240 N", "3,75 N"], 2, "P = 30 · 32 / 4 = 240 N."],
    ["En un salto mortal, para frenar la rotación antes de caer, el gimnasta…", ["se agrupa más", "se extiende", "mueve los brazos más rápido", "no puede hacer nada"], 1, "Aumenta el momento de inercia y baja la velocidad angular."],
  ],
  feynman: ["Qué estudian la cinemática y la cinética", "Cómo explican las leyes de Newton una salida de velocidad", "Por qué flexionar las piernas al caer reduce la fuerza", "Qué tipos de palancas hay en el cuerpo y para qué sirve cada una", "Qué hace que una postura sea estable", "Por qué un patinador gira más rápido al recoger los brazos"],
  mapa: ["BIOMECÁNICA", [["Cinemática", "v = Δx/Δt · a = Δv/Δt"], ["Dinámica", "Newton · impulso · reacción"], ["Palancas", "M = F · d · 1.º, 2.º, 3.er grado"], ["Equilibrio y giro", "CG · base · L = I · ω"]]],
  tarjetas: [
    ["Biomecánica", "Mecánica aplicada a los seres vivos: movimientos y fuerzas."],
    ["Cinemática y cinética", "Describir el movimiento / estudiar sus fuerzas."],
    ["Velocidad y aceleración", "v = Δx / Δt; a = Δv / Δt."],
    ["Leyes de Newton", "Inercia, F = m · a, acción y reacción."],
    ["Impulso", "F · Δt = m · Δv: alargar el tiempo reduce la fuerza al frenar."],
    ["Momento de fuerza", "M = F · d, con d perpendicular al eje."],
    ["Palancas", "1.º: F en medio. 2.º: R en medio. 3.º: P en medio."],
    ["Ley de la palanca", "P · bP = R · bR."],
    ["Centro de gravedad", "Punto de aplicación del peso; cambia con la postura."],
    ["Estabilidad", "Base amplia, CG bajo y vertical centrada."],
    ["Momento angular", "L = I · ω se conserva: agruparse acelera el giro."],
    ["Cadena cinética", "Suma coordinada de segmentos del suelo a la muñeca."],
  ],
  ejemplos: [
    ["Un atleta corre los 100 m en 10,5 s con una longitud media de zancada de 2,1 m. Calcula su velocidad media y su frecuencia media de zancada.", ["v = 100 / 10,5 = 9,52 m/s.", "v = longitud · frecuencia → f = v / L.", "f = 9,52 / 2,1 = 4,5 zancadas por segundo."], "9,5 m/s con 4,5 zancadas/s (unas 48 zancadas en total)."],
    ["Una bailarina de 50 kg cae de un salto a 3 m/s. Calcula la fuerza media de frenado si amortigua en 0,05 s y si amortigua en 0,25 s.", ["Δp = m · Δv = 50 · 3 = 150 kg·m/s.", "Rígida: F = 150 / 0,05 = 3000 N (≈ 6 veces su peso de 490 N).", "Amortiguada: F = 150 / 0,25 = 600 N (≈ 1,2 veces su peso).", "A esto hay que sumar su propio peso para la fuerza total del suelo."], "Amortiguar 5 veces más tiempo divide la fuerza de frenado entre 5."],
    ["Una persona sostiene una botella de 1,5 kg con el brazo extendido en horizontal a 0,6 m del hombro y después con el codo flexionado a 0,25 m. Compara los momentos en el hombro (g = 9,8 m/s²).", ["Peso: 1,5 · 9,8 = 14,7 N.", "Extendido: M = 14,7 · 0,6 = 8,8 N·m.", "Flexionado: M = 14,7 · 0,25 = 3,7 N·m.", "El deltoides debe producir 2,4 veces más momento con el brazo extendido."], "Acercar la carga al eje reduce el momento a menos de la mitad."],
    ["Al ponerse de puntillas, el fulcro está en los dedos, el peso de 600 N actúa a 12 cm de ellos y los gemelos tiran del talón a 16 cm. ¿Qué fuerza hacen los gemelos? ¿Qué tipo de palanca es?", ["P · bP = R · bR.", "P = 600 · 12 / 16 = 450 N.", "La resistencia está entre el fulcro y la potencia: segundo grado.", "La ventaja mecánica es 16 / 12 = 1,33 > 1: favorece la fuerza."], "Los gemelos hacen 450 N; es una palanca de segundo grado."],
    ["Un bailarín gira a 2 vueltas por segundo con los brazos abiertos (I = 3 kg·m²). Si recoge los brazos y su momento de inercia baja a 1,2 kg·m², ¿a qué velocidad girará?", ["Se conserva L = I · ω.", "L = 3 · 2 = 6 (unidades en vueltas).", "ω₂ = L / I₂ = 6 / 1,2 = 5 vueltas por segundo."], "Gira a 5 vueltas/s: 2,5 veces más rápido."],
    ["Analiza biomecánicamente un salto vertical con contramovimiento.", ["Preparatoria: flexión rápida de caderas, rodillas y tobillos; baja el CG y se estiran los extensores (pre-estiramiento).", "Principal: extensión coordinada de cadera, rodilla y tobillo (cadena cinética de abajo arriba) y balanceo de brazos; se aplica fuerza contra el suelo durante el mayor tiempo útil (impulso); el suelo empuja hacia arriba (3.ª ley).", "Vuelo: el CG describe una trayectoria vertical que depende de la velocidad de despegue.", "Final: recepción amortiguada flexionando las tres articulaciones."], "El contramovimiento y los brazos aumentan el impulso y la altura; la recepción amortiguada protege."],
  ],
  errores: [
    "Confundir masa (kg) y peso (N): el peso es la fuerza P = m · g.",
    "Medir el brazo de momento como la distancia hasta el punto de aplicación y no la distancia perpendicular a la línea de la fuerza.",
    "Pensar que las palancas de tercer grado son «malas»: sacrifican fuerza a cambio de velocidad y amplitud.",
    "Creer que el centro de gravedad está siempre en el mismo punto del cuerpo.",
    "Pensar que en el aire se puede empezar a girar sin haber generado el giro en el suelo.",
    "Creer que levantar una carga «con la espalda» es seguro si la carga es ligera: lo que importa también es la distancia al cuerpo y la repetición.",
  ],
  ejercicios: {
    b: [
      ["Define biomecánica e indica tres aplicaciones.", "Ciencia que aplica la mecánica a los seres vivos. Aplicaciones: mejorar la técnica, prevenir lesiones y ergonomía (también diseño de calzado y prótesis)."],
      ["Diferencia movimiento lineal y angular con un ejemplo de cada uno.", "Lineal: todo el cuerpo se traslada igual (deslizarse en patines). Angular: gira alrededor de un eje (flexionar el codo, una pirueta)."],
      ["Nombra las tres fases de un gesto técnico.", "Preparatoria, principal o de ejecución y final o de recuperación."],
      ["Pasa a m/s: 18 km/h, 54 km/h y 72 km/h.", "5 m/s, 15 m/s y 20 m/s."],
      ["Enuncia las tres leyes de Newton.", "Inercia: sin fuerza neta no cambia el movimiento. Fundamental: F = m · a. Acción y reacción: a toda fuerza le corresponde otra igual y opuesta."],
      ["Calcula el peso de una persona de 60 kg.", "P = 60 · 9,8 = 588 N."],
      ["¿Qué es el impulso y en qué unidades se mide?", "El producto de la fuerza por el tiempo que actúa; se mide en N·s y equivale al cambio de cantidad de movimiento."],
      ["Calcula el momento de una fuerza de 100 N con un brazo de 0,3 m.", "M = 100 · 0,3 = 30 N·m."],
      ["Indica qué elemento está en el medio en cada tipo de palanca.", "Primer grado: el fulcro. Segundo grado: la resistencia. Tercer grado: la potencia."],
      ["Pon un ejemplo corporal de palanca de primer, segundo y tercer grado.", "Primer grado: cabeza sobre el atlas. Segundo: ponerse de puntillas. Tercero: flexión de codo por el bíceps."],
      ["Define centro de gravedad y base de sustentación.", "CG: punto donde se considera aplicado el peso. Base: superficie delimitada por los apoyos con el suelo."],
      ["Cita tres factores que aumentan la estabilidad.", "Base de sustentación amplia, CG bajo y vertical del CG centrada en la base (también más masa y rozamiento)."],
    ],
    m: [
      ["Una nadadora recorre 100 m en 1 min 5 s. Calcula su velocidad media en m/s y en km/h.", "v = 100 / 65 = 1,54 m/s = 5,5 km/h."],
      ["Un ciclista de 70 kg (con bici) acelera de 5 a 11 m/s en 3 s. Calcula la aceleración y la fuerza neta.", "a = 6 / 3 = 2 m/s²; F = 70 · 2 = 140 N."],
      ["Explica con la 3.ª ley de Newton por qué es difícil correr sobre arena seca.", "Al empujar la arena hacia atrás, esta se desplaza y no devuelve toda la reacción; se pierde energía y avanzamos menos con cada paso."],
      ["Explica con la 1.ª ley por qué en un cambio de dirección hay que frenar antes.", "Por inercia el cuerpo tiende a seguir en línea recta; hay que aplicar fuerzas contra el suelo para reducir la velocidad y cambiar la dirección."],
      ["Un portero atrapa un balón de 0,45 kg que llega a 20 m/s. Calcula la fuerza media si lo frena en 0,02 s y en 0,1 s.", "Δp = 9 kg·m/s. F = 450 N o 90 N. Acompañar el balón reduce la fuerza a la quinta parte."],
      ["Calcula la fuerza del bíceps para sostener 60 N en la mano a 30 cm del codo si se inserta a 5 cm.", "P = 60 · 30 / 5 = 360 N."],
      ["Explica por qué se dice que las palancas de tercer grado favorecen la velocidad.", "Como la potencia está cerca del eje, un acortamiento pequeño y rápido del músculo produce un gran desplazamiento rápido en el extremo (v = ω · r)."],
      ["Explica cómo cambia el centro de gravedad al levantar los brazos y al ponerse en cuclillas.", "Al levantar los brazos sube; en cuclillas baja mucho, lo que aumenta la estabilidad."],
      ["¿Por qué un luchador separa los pies y flexiona las rodillas frente al rival?", "Amplía la base en la dirección de los empujones y baja el CG: aumenta su estabilidad."],
      ["Explica por qué el velocista sale de los tacos con el centro de gravedad muy adelantado.", "Así su vertical cae casi fuera de la base y el cuerpo «cae» hacia delante, lo que facilita la aceleración inicial en la dirección de la carrera."],
      ["Explica con el momento angular cómo controla un saltador de trampolín el número de giros.", "Genera el momento angular en el despegue; en el aire se agrupa para girar más deprisa y dar más vueltas, y se extiende para frenar antes de entrar en el agua."],
      ["Describe la cadena cinética de un chut de fútbol.", "Apoyo de la pierna contraria, rotación de cadera y tronco, flexión de cadera de la pierna que golpea, extensión de rodilla y golpe con el pie bloqueado."],
      ["Compara la marcha y la carrera en fases y fuerzas.", "Marcha: apoyo, oscilación y doble apoyo, fuerzas de ~1,2 veces el peso. Carrera: apoyo y vuelo sin doble apoyo, fuerzas de 2-3 veces el peso."],
      ["Calcula el peso máximo recomendado de la mochila para un estudiante de 55 kg.", "Entre 5,5 y 8,25 kg (10-15 % de la masa corporal)."],
    ],
    a: [
      ["Un jugador de baloncesto de 85 kg salta y despega a 3 m/s. Si el empuje contra el suelo dura 0,3 s, calcula la fuerza media que ejerce el suelo (incluye el peso).", "Impulso neto = 85 · 3 = 255 N·s; F neta = 850 N. Fuerza del suelo = F neta + peso = 850 + 833 = 1683 N, unas 2 veces su peso."],
      ["Con la velocidad de despegue anterior, calcula cuánto sube su centro de gravedad (h = v² / 2g).", "h = 9 / 19,6 = 0,46 m."],
      ["Un trabajador levanta una caja de 20 kg con la carga a 50 cm de la zona lumbar. Los músculos erectores actúan a 5 cm del eje. Calcula su fuerza solo por la caja y explica el riesgo.", "Peso: 196 N. M = 196 · 0,5 = 98 N·m. F = 98 / 0,05 = 1960 N, a lo que se suma el peso del tronco. Los discos lumbares se comprimen con más de 2000 N; pegando la caja al cuerpo (20 cm) la fuerza baja a 784 N."],
      ["Una bailarina hace un développé (pierna extendida al frente a 90°). Si su pierna pesa 120 N y su CG está a 40 cm de la cadera, calcula el momento que deben vencer los flexores de cadera. ¿Cómo cambia si flexiona la rodilla y el CG queda a 25 cm?", "Extendida: 120 · 0,4 = 48 N·m. Flexionada: 120 · 0,25 = 30 N·m. Doblar la rodilla reduce el momento un 37,5 %: es una progresión útil."],
      ["Calcula la ventaja mecánica de un músculo con bP = 3 cm y bR = 30 cm, y la velocidad del extremo si el músculo acorta a 0,2 m/s.", "VM = 0,1. Como la relación de distancias es 10, el extremo se mueve 10 veces más rápido: 2 m/s."],
      ["Un patinador gira a 1,5 vueltas/s con I = 4 kg·m². ¿Qué momento de inercia necesita para girar a 6 vueltas/s? ¿Es realista?", "I₂ = 4 · 1,5 / 6 = 1 kg·m². Es realista: con brazos y pierna libre pegados al eje el momento de inercia puede bajar a la cuarta parte."],
      ["Analiza un saque de voleibol con los principios de cadena cinética, impulso y momento de fuerza, y propón dos correcciones para un saque débil.", "La fuerza nace en las piernas, sigue con la rotación del tronco, el hombro y el codo, y termina en la mano. Correcciones: activar la rotación del tronco antes del brazo (secuenciación) y alargar el recorrido del brazo (armado más atrás) para aumentar el impulso."],
      ["Una persona mira el móvil con la cabeza inclinada 45°. La cabeza pesa 50 N y su CG se adelanta 6 cm respecto al eje cervical. Si los extensores del cuello actúan a 2 cm, calcula su fuerza y compárala con la cabeza recta (CG adelantado 1 cm).", "Inclinada: M = 50 · 0,06 = 3 N·m; F = 150 N. Recta: M = 0,5 N·m; F = 25 N. La carga muscular se multiplica por 6: explica la sobrecarga cervical."],
      ["Explica por qué los aterrizajes con rodillas hacia dentro (valgo) aumentan el riesgo de lesión del ligamento cruzado.", "La rodilla en valgo desplaza la línea de la fuerza de reacción del suelo y crea momentos de giro en el plano frontal y transversal que el ligamento cruzado anterior debe frenar; fortaleciendo glúteo medio y entrenando la técnica de caída se reduce el riesgo."],
      ["Diseña un análisis biomecánico con el móvil de un gesto de tu deporte o danza: qué grabarías, desde dónde, qué medirías y qué criterios usarías para valorar la técnica.", "Grabar a cámara lenta desde el plano perpendicular al movimiento principal, con referencias de longitud. Medir ángulos articulares en las fases clave, tiempos de cada fase, velocidad del segmento final y alineación del CG con la base. Criterios: secuencia de la cadena cinética, recorrido de aceleración, estabilidad del tronco y recepción amortiguada."],
    ],
  },
  glosario: [
    ["Biomecánica", "Ciencia que aplica la mecánica al estudio de los seres vivos."],
    ["Cinemática", "Rama que describe el movimiento sin estudiar sus causas."],
    ["Cinética", "Rama que estudia las fuerzas que producen el movimiento."],
    ["Velocidad", "Rapidez con la que cambia la posición."],
    ["Aceleración", "Rapidez con la que cambia la velocidad."],
    ["Fuerza", "Acción capaz de cambiar el movimiento o deformar un cuerpo."],
    ["Fuerza de reacción del suelo", "Fuerza que el suelo ejerce sobre el cuerpo cuando este lo empuja."],
    ["Cantidad de movimiento", "Producto de la masa por la velocidad."],
    ["Impulso", "Producto de la fuerza por el tiempo que actúa."],
    ["Momento de fuerza", "Efecto de giro de una fuerza: fuerza por brazo de momento."],
    ["Palanca", "Barra rígida que gira alrededor de un punto de apoyo."],
    ["Ventaja mecánica", "Cociente entre el brazo de potencia y el de resistencia."],
    ["Centro de gravedad", "Punto donde se considera aplicado el peso del cuerpo."],
    ["Base de sustentación", "Superficie delimitada por los puntos de apoyo."],
    ["Momento de inercia", "Resistencia de un cuerpo a girar, según cómo se reparte su masa."],
    ["Momento angular", "Producto del momento de inercia por la velocidad angular."],
    ["Cadena cinética", "Transmisión coordinada del movimiento entre segmentos."],
    ["Ergonomía", "Adaptación del entorno y las tareas al cuerpo humano."],
  ],
  situacion: {
    titulo: "Laboratorio de vídeo biomecánico",
    reto: "Vuestro grupo debe analizar con vídeo a cámara lenta un gesto deportivo o artístico (salto, lanzamiento, chut, pirueta, recepción) y proponer mejoras de técnica y de prevención basadas en principios biomecánicos.",
    pasos: [
      "Elegid el gesto y grabad a varios compañeros desde un plano perpendicular, con una referencia de longitud conocida.",
      "Dividid el gesto en fases y medid en el vídeo ángulos articulares, tiempos y desplazamientos con una aplicación de análisis.",
      "Calculad velocidades y, si es posible, altura del salto o fuerza de recepción con las fórmulas del tema.",
      "Identificad palancas, cadena cinética, equilibrio y momento angular en el gesto.",
      "Comparad ejecuciones y proponed dos correcciones de técnica y una de prevención; volved a grabar para comprobar el efecto.",
    ],
    producto: "Un informe audiovisual (vídeo comentado o presentación) con las capturas analizadas, los cálculos, las propuestas de mejora y la comparación antes-después.",
    evaluacion: [
      "El gesto está bien dividido en fases y las mediciones son correctas.",
      "Se aplican con rigor los principios biomecánicos y las fórmulas.",
      "Las correcciones propuestas están justificadas y son seguras.",
      "La comunicación es clara y el producto es útil para el grupo.",
    ],
  },
  familias: [
    "Comprobad juntos cómo cuesta más sostener una bolsa de la compra con el brazo extendido que pegado al cuerpo.",
    "Revisad el peso de la mochila escolar y cómo se lleva.",
    "Ajustad la silla y la pantalla del lugar de estudio siguiendo las pautas ergonómicas.",
    "Probad a girar en una silla giratoria con los brazos abiertos y cerrados y explicad lo que ocurre.",
  ],
  saberes: B.SAB("Biomecánica del movimiento humano: cinemática y cinética, leyes de Newton, impulso y cantidad de movimiento, momento de fuerza y palancas del cuerpo, centro de gravedad, equilibrio y estabilidad, rotaciones y momento angular, cadena cinética, marcha y carrera, prevención de lesiones y ergonomía"),
  ideas: [
    "Usar una aplicación gratuita de análisis de vídeo para medir ángulos y velocidades en un gesto deportivo.",
    "Medir la altura de salto con el tiempo de vuelo grabado con el móvil (h = g · t² / 8).",
    "Construir palancas de los tres grados con una regla, un lápiz y monedas para comprobar la ley de la palanca.",
    "Comprobar la conservación del momento angular en una silla giratoria con pesas en las manos.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Biomecánica", "Biomecánica"),
    { t: "Instituto Nacional de Seguridad y Salud en el Trabajo: manipulación manual de cargas", url: "https://www.insst.es/" },
  ],
});
