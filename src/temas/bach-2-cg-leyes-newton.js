// Ciencias Generales 2º Bachillerato · Las fuerzas y las leyes de Newton (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Plano inclinado con descomposición del peso.
const planoSVG = marco("Bloque en un plano inclinado: el peso se descompone en una componente paralela al plano, m·g·sen α, y otra perpendicular, m·g·cos α, que equilibra la normal", `
  <path d="M20 160 L 240 160 L 240 50 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <path d="M60 160 A 40 40 0 0 0 57 146" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${T(70, 152, "α", { fs: 12, b: true })}
  <g transform="translate(150 105) rotate(-26.6)"><rect x="-20" y="-28" width="40" height="28" rx="3" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/></g>
  <path d="M146 92 V 150" stroke="var(--red)" stroke-width="3" marker-end="url(#plA)"/>${T(156, 150, "P", { fs: 12, b: true, c: "var(--red)", a: "start" })}
  <path d="M146 92 L 106 112" stroke="var(--sun)" stroke-width="3" marker-end="url(#plB)"/>${T(98, 106, "m·g·sen α", { fs: 10, b: true, c: "#b45309", a: "end" })}
  <path d="M146 92 L 125 50" stroke="var(--leaf)" stroke-width="3" marker-end="url(#plC)"/>${T(122, 44, "N", { fs: 12, b: true, c: "var(--leaf)" })}
  ${T(130, 22, "Plano inclinado", { fs: 12, b: true })}`, `<marker id="plA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="plB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--sun)"/></marker><marker id="plC" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker>`);

// Acción y reacción: cohete.
const coheteSVG = marco("Tercera ley de Newton en un cohete: el cohete empuja los gases hacia abajo y los gases empujan al cohete hacia arriba con la misma fuerza", `
  <path d="M130 18 C 146 34 150 54 150 74 V 118 H 110 V 74 C 110 54 114 34 130 18 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
  <circle cx="130" cy="64" r="8" fill="var(--water)" stroke="var(--pen)"/><path d="M110 100 L 94 122 H 110 Z M150 100 L 166 122 H 150 Z" fill="var(--red)" fill-opacity=".7"/>
  <path d="M116 120 Q 130 170 144 120 Z" fill="var(--sun)" fill-opacity=".85"/>
  <path d="M190 110 V 40" stroke="var(--leaf)" stroke-width="4" marker-end="url(#ccA)"/>${T(194, 76, "F (gases", { fs: 10, b: true, c: "var(--leaf)", a: "start" })}${T(194, 90, "sobre el", { fs: 10, b: true, c: "var(--leaf)", a: "start" })}${T(194, 104, "cohete)", { fs: 10, b: true, c: "var(--leaf)", a: "start" })}
  <path d="M70 110 V 168" stroke="var(--red)" stroke-width="4" marker-end="url(#ccB)"/>${T(64, 140, "−F (cohete", { fs: 10, b: true, c: "var(--red)", a: "end" })}${T(64, 154, "sobre gases)", { fs: 10, b: true, c: "var(--red)", a: "end" })}`, `<marker id="ccA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker><marker id="ccB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker>`);

// Gráficas MRU y MRUA.
const mruaSVG = L5.graf("Gráficas posición-tiempo: recta en el MRU y parábola en el MRUA que parte del reposo", "tiempo", "posición", [{ p: [[0, 0], [1, 0.6]], c: "var(--pen)", t: "MRU" }, { p: [[0, 0], [0.25, 0.06], [0.5, 0.25], [0.75, 0.56], [1, 1]], c: "var(--red)", t: "MRUA" }]);

module.exports = tema({
  titulo: "Las fuerzas y las leyes de Newton",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Describir el movimiento con posición, velocidad y aceleración y resolver problemas de MRU, MRUA y caída libre",
    "Representar las fuerzas como vectores, sumarlas y descomponerlas",
    "Enunciar y aplicar las tres leyes de Newton a situaciones cotidianas",
    "Identificar y calcular el peso, la normal, el rozamiento, la tensión y la fuerza elástica",
    "Aplicar la conservación de la cantidad de movimiento a choques y propulsión",
    "Relacionar la dinámica con la seguridad vial y el movimiento circular",
  ],
  claves: ["sistema de referencia", "velocidad", "aceleración", "MRU", "MRUA", "caída libre", "fuerza", "newton", "vector", "inercia", "ley fundamental de la dinámica", "acción y reacción", "peso", "fuerza normal", "rozamiento", "cantidad de movimiento"],
  pregunta: {
    texto: "¿Por qué en un frenazo brusco los pasajeros se van hacia delante si nadie los empuja?",
    respuesta: "Por la <mark>inercia</mark>. Según la primera ley de Newton, un cuerpo en movimiento tiende a seguir moviéndose con la misma velocidad si ninguna fuerza lo impide. Cuando el coche frena, los frenos actúan sobre el coche, pero no sobre los pasajeros: su cuerpo <b>sigue avanzando</b> a la velocidad que llevaba. Lo que los detiene es el <b>cinturón de seguridad</b>, que ejerce la fuerza necesaria. Sin él, siguen hasta chocar con el salpicadero o el parabrisas.",
  },
  lectura: {
    titulo: "Un ingeniero que salvó millones de vidas",
    html: `<p>En 1959, el ingeniero sueco Nils Bohlin, que había diseñado asientos eyectables para aviones de combate, presentó un invento sencillo: el cinturón de seguridad de tres puntos, que sujeta la pelvis y el tórax en forma de «V». Su empresa, Volvo, lo patentó y decidió liberar la patente para que cualquier fabricante pudiera usarlo gratis, porque consideró que salvar vidas era más importante que el negocio. Se calcula que desde entonces ha evitado más de un millón de muertes.</p><p>El cinturón funciona gracias a las leyes que Isaac Newton publicó en 1687. En un choque a 50 km/h, el coche se detiene en una fracción de segundo; el cuerpo de una persona sin cinturón continúa moviéndose por inercia y golpea el interior con una fuerza equivalente a varias veces su peso. El cinturón, junto al airbag y la carrocería deformable, aumenta el tiempo de frenado del cuerpo y reparte la fuerza en zonas resistentes. En este tema aprenderás a describir los movimientos, a entender qué son las fuerzas y a usar las tres leyes de Newton para explicar desde un frenazo hasta el despegue de un cohete.</p>`,
  },
  bloques: [
    { h: "Describir el movimiento", p: [
      "Un cuerpo está en movimiento cuando cambia su posición respecto a un <mark>sistema de referencia</mark>, un punto y unos ejes que consideramos fijos. El movimiento es <b>relativo</b>: un pasajero sentado en un tren está quieto respecto al vagón, pero se mueve a 300 km/h respecto a las vías. La línea que describe el móvil es la <b>trayectoria</b> (rectilínea, circular, parabólica…), y la distancia medida sobre ella es el <b>espacio recorrido</b>. El <b>desplazamiento</b> es el vector que une la posición inicial y la final: si das una vuelta completa a una pista de 400 m, recorres 400 m pero tu desplazamiento es cero.",
      "La <mark>velocidad</mark> indica lo rápido que cambia la posición y en qué dirección: v = Δx / Δt, en m/s. La <b>velocidad media</b> es el desplazamiento entre el tiempo total; la <b>instantánea</b>, la que marca el velocímetro en cada momento. La <mark>aceleración</mark> indica lo rápido que cambia la velocidad: a = Δv / Δt, en m/s². Un coche que pasa de 0 a 100 km/h (27,8 m/s) en 8 s tiene una aceleración media de 3,5 m/s². Hay aceleración siempre que cambia la velocidad, ya sea en su valor (acelerar o frenar) o en su dirección (tomar una curva aunque el velocímetro no cambie). Velocidad, desplazamiento y aceleración son <b>magnitudes vectoriales</b>: tienen módulo, dirección y sentido.",
    ], svg: L5.compara("Espacio recorrido frente a desplazamiento", ["Espacio", ["escalar", "sobre la trayectoria", "siempre positivo", "vuelta: 400 m", "lo mide el cuentakm"]], ["Desplazamiento", ["vector", "posición final − inicial", "puede ser 0", "vuelta: 0 m", "línea recta"]], "var(--pen)", "var(--red)") },
    { h: "Movimiento rectilíneo uniforme y uniformemente acelerado", p: [
      "En el <mark>movimiento rectilíneo uniforme</mark> (MRU), la trayectoria es una recta y la velocidad es constante, sin aceleración. La posición cambia de forma lineal: <b>x = x₀ + v·t</b>. Su gráfica posición-tiempo es una recta cuya pendiente es la velocidad. Es una buena aproximación de un tren en un tramo recto a velocidad de crucero o de la luz en el vacío. Dos móviles que se encuentran están en la misma posición en el mismo instante: igualando sus ecuaciones se calcula dónde y cuándo.",
      "En el <mark>movimiento rectilíneo uniformemente acelerado</mark> (MRUA), la aceleración es constante. Sus ecuaciones son: <b>v = v₀ + a·t</b> y <b>x = x₀ + v₀·t + ½·a·t²</b>, y combinándolas, <b>v² = v₀² + 2·a·Δx</b>, muy útil cuando no se conoce el tiempo. La gráfica velocidad-tiempo es una recta, y la de posición-tiempo, una parábola. Si el cuerpo frena, la aceleración tiene signo contrario a la velocidad. Por ejemplo, un coche que circula a 20 m/s y frena con a = −5 m/s² se detiene en t = 20/5 = 4 s, tras recorrer Δx = 20²/(2·5) = 40 m. La distancia de frenado crece con el cuadrado de la velocidad: a 40 m/s serían 160 m.",
    ], svg: mruaSVG, v: ["fue2-b", "MRUA: explicación, fórmulas y ejercicios"] },
    { h: "La caída libre", p: [
      "Aristóteles creía que los cuerpos pesados caen más rápido que los ligeros. Galileo, a principios del siglo XVII, demostró con experimentos en planos inclinados que, si se elimina la resistencia del aire, <b>todos los cuerpos caen con la misma aceleración</b>, independientemente de su masa. En 1971, el astronauta David Scott lo comprobó en la Luna, sin aire: soltó un martillo y una pluma y ambos llegaron al suelo a la vez.",
      "La <mark>caída libre</mark> es un MRUA con aceleración g = 9,8 m/s², dirigida hacia abajo. Si soltamos un objeto desde el reposo: v = g·t y h = ½·g·t². En 1 s cae 4,9 m y alcanza 9,8 m/s; en 3 s, 44 m y 29,4 m/s. Si lanzamos un objeto hacia arriba con velocidad v₀, sube frenando hasta detenerse en la altura máxima (h = v₀²/2g) y luego cae: tarda lo mismo en subir que en bajar. En la realidad, el aire frena a los cuerpos, más cuanto mayor es su superficie y su velocidad, hasta que alcanzan una <b>velocidad límite</b> constante: unos 200 km/h para un paracaidista en caída libre y solo unos 20 km/h con el paracaídas abierto. Por eso una hoja cae más despacio que una piedra en la Tierra.",
    ], svg: L6.tabla("Caída libre desde el reposo (g = 9,8 m/s²)", ["Tiempo", "Velocidad", "Distancia"], [["1 s", "9,8 m/s", "4,9 m"], ["2 s", "19,6 m/s", "19,6 m"], ["3 s", "29,4 m/s", "44,1 m"], ["4 s", "39,2 m/s", "78,4 m"]]) },
    { h: "Las fuerzas y su carácter vectorial", p: [
      "Una <mark>fuerza</mark> es toda causa capaz de cambiar el estado de movimiento de un cuerpo (ponerlo en marcha, frenarlo, desviarlo) o de deformarlo. Las fuerzas son siempre <b>interacciones</b> entre dos cuerpos: no hay fuerza sin un cuerpo que la ejerza. Pueden actuar por <b>contacto</b> (empujar, tirar, rozar) o <b>a distancia</b> (la gravedad, la fuerza eléctrica, la magnética). Se miden con un <b>dinamómetro</b>, un muelle calibrado, y su unidad en el SI es el <b>newton (N)</b>: la fuerza que da a 1 kg una aceleración de 1 m/s². Una manzana pesa aproximadamente 1 N.",
      "Las fuerzas son <b>vectores</b>: para describirlas hay que indicar su módulo (intensidad), su dirección, su sentido y su punto de aplicación. Cuando sobre un cuerpo actúan varias fuerzas, se pueden sustituir por una sola, la <b>resultante</b>, que es su suma vectorial. Si tienen la misma dirección y sentido, se suman sus módulos; si tienen sentidos opuestos, se restan; si son perpendiculares, la resultante se calcula con el teorema de Pitágoras. A menudo conviene hacer lo contrario: <b>descomponer</b> una fuerza en dos componentes perpendiculares, Fx = F·cos α y Fy = F·sen α. Si la resultante de todas las fuerzas es cero, el cuerpo está en <b>equilibrio</b>.",
    ], svg: L5.fuerzas("Suma de fuerzas sobre un cuerpo: dos fuerzas perpendiculares de 3 N y 4 N dan una resultante de 5 N", "m", [[0, 46, "4 N", "var(--pen)"], [90, 34, "3 N", "var(--leaf)"], [37, 62, "R = 5 N", "var(--red)"]], false) },
    { h: "Primera ley de Newton: la inercia", p: [
      "Durante siglos se pensó, como Aristóteles, que para mantener un cuerpo en movimiento hacía falta una fuerza constante. Galileo comprendió que, si no hubiera rozamiento, una bola lanzada por un plano horizontal seguiría moviéndose para siempre. Newton lo convirtió en su <mark>primera ley o ley de la inercia</mark>: <b>todo cuerpo permanece en reposo o en movimiento rectilíneo uniforme mientras la fuerza resultante sobre él sea cero</b>. Las cosas se paran porque actúan fuerzas como el rozamiento, no porque «se les acabe la fuerza».",
      "La <b>inercia</b> es la tendencia de los cuerpos a mantener su estado de movimiento, y es mayor cuanto mayor es su <b>masa</b>: cuesta más poner en marcha o frenar un camión que una bicicleta. La primera ley explica muchas experiencias: al arrancar el autobús nos vamos hacia atrás, al frenar hacia delante y en una curva hacia fuera; se puede retirar de un tirón un mantel sin que caigan los platos; los objetos sueltos en un coche se convierten en proyectiles en un choque. Por eso son obligatorios el cinturón, los sistemas de retención infantil y los reposacabezas, que protegen el cuello en un golpe por detrás.",
    ], svg: L6.radial("Ejemplos de la ley de la inercia", "Inercia", ["Frenazo: hacia delante", "Arranque: hacia atrás", "Curva: hacia fuera", "Mantel y platos"]) },
    { h: "Segunda ley de Newton: la ley fundamental de la dinámica", p: [
      "La <mark>segunda ley</mark> responde a la pregunta: ¿qué hace una fuerza neta? Produce una aceleración en su misma dirección y sentido, proporcional a la fuerza e inversamente proporcional a la masa: <b>ΣF = m · a</b>. Con la misma fuerza, un cuerpo de doble masa adquiere la mitad de aceleración; con doble fuerza, la misma masa adquiere doble aceleración. Esta ley define el newton (1 N = 1 kg·m/s²) y permite calcular el movimiento de cualquier cuerpo si se conocen las fuerzas.",
      "Para aplicarla se sigue un método: dibujar el <b>diagrama de cuerpo libre</b> con todas las fuerzas que actúan sobre el cuerpo; elegir unos ejes (uno en la dirección del movimiento); descomponer las fuerzas; plantear ΣF = m·a en cada eje y resolver. Por ejemplo, si empujamos un carro de 20 kg con 60 N y el rozamiento es de 20 N, la fuerza neta es 40 N y la aceleración, a = 40/20 = 2 m/s². La segunda ley también explica el <b>peso</b>: la fuerza con que la Tierra atrae a un cuerpo de masa m le da la aceleración g, así que P = m·g. Masa y peso no son lo mismo: la masa (kg) es la cantidad de materia y no cambia; el peso (N) es una fuerza que depende del lugar. En la Luna, donde g = 1,6 m/s², pesaríamos unas seis veces menos.",
    ], svg: L5.ficha("Segunda ley de Newton", "ΣF = m · a", ["1 N = 1 kg · m/s²", "más fuerza → más aceleración", "más masa → menos aceleración", "peso: P = m · g"], "var(--red)"), v: ["fue2-a", "Las tres leyes de Newton"] },
    { h: "Tercera ley de Newton: acción y reacción", p: [
      "La <mark>tercera ley</mark> dice que las fuerzas siempre aparecen <b>por parejas</b>: si un cuerpo A ejerce una fuerza sobre otro B, B ejerce sobre A una fuerza de igual módulo y dirección pero de sentido contrario. Son las fuerzas de <b>acción y reacción</b>. Al caminar, empujamos el suelo hacia atrás y el suelo nos empuja hacia delante; un nadador empuja el agua hacia atrás; un cohete expulsa gases hacia abajo a gran velocidad y los gases empujan el cohete hacia arriba, incluso en el vacío del espacio, donde no hay aire en el que «apoyarse».",
      "Es importante entender que acción y reacción actúan sobre <b>cuerpos distintos</b>, por lo que nunca se anulan entre sí. Si un camión choca con un coche, las fuerzas que se ejercen mutuamente son iguales, pero el coche, con mucha menos masa, sufre una aceleración (y unos daños) mucho mayores. Tampoco hay que confundir la reacción del peso con la fuerza normal: el peso de un libro es la fuerza con que la Tierra lo atrae, y su reacción es la fuerza con que el libro atrae a la Tierra; la normal es la fuerza con que la mesa sostiene el libro, y su reacción es la que el libro ejerce sobre la mesa. Peso y normal se equilibran en el libro porque actúan sobre el mismo cuerpo, pero no son pareja de acción y reacción.",
    ], svg: coheteSVG },
    { h: "Fuerzas de la vida cotidiana: peso, normal y tensión", p: [
      "El <b>peso</b> (P = m·g) actúa siempre vertical y hacia abajo, hacia el centro de la Tierra. La <mark>fuerza normal</mark> (N) es la que ejerce una superficie sobre un cuerpo apoyado en ella; es siempre <b>perpendicular</b> a la superficie y la superficie la ajusta para que el cuerpo no la atraviese. En un suelo horizontal, sin otras fuerzas verticales, N = m·g. En un ascensor que acelera hacia arriba, el suelo empuja más (N &gt; m·g) y nos sentimos más pesados; si acelera hacia abajo, nos sentimos más ligeros. Las básculas miden la normal, no el peso.",
      "La <b>tensión</b> (T) es la fuerza que transmite una cuerda, un cable o una cadena tensos, siempre dirigida a lo largo de la cuerda. En una grúa que sube una carga a velocidad constante, la tensión del cable es igual al peso; si la acelera hacia arriba, T = m·(g + a). Las <b>poleas</b> cambian la dirección de la tensión, y las poleas móviles permiten levantar cargas con menos fuerza. La <b>fuerza elástica</b> es la que ejerce un muelle deformado; según la <b>ley de Hooke</b>, es proporcional a la deformación, F = −k·Δx, y se opone a ella. En ella se basan los dinamómetros, los colchones o la suspensión de los vehículos.",
    ], svg: L5.fuerzas("Diagrama de cuerpo libre de una caja apoyada sobre el suelo y empujada horizontalmente: peso, normal, fuerza aplicada y rozamiento", "caja", [[270, 40, "P", "var(--red)"], [90, 40, "N", "var(--leaf)"], [0, 50, "F", "var(--pen)"], [180, 30, "Fr", "var(--sun)"]]) },
    { h: "La fuerza de rozamiento y el plano inclinado", p: [
      "La <mark>fuerza de rozamiento</mark> aparece cuando dos superficies en contacto se deslizan o tienden a deslizarse; se opone siempre al movimiento. Se debe a las pequeñas irregularidades de las superficies y a las atracciones entre sus partículas. Su valor máximo es proporcional a la normal: <b>Fr = μ · N</b>, donde μ es el <b>coeficiente de rozamiento</b>, que depende de los materiales (goma sobre asfalto seco, unos 0,8; sobre asfalto mojado, 0,5; sobre hielo, 0,1). Hay un rozamiento <b>estático</b>, que impide que un cuerpo empiece a moverse, y otro <b>dinámico</b>, algo menor, cuando ya se mueve.",
      "El rozamiento es a la vez un problema y una necesidad. Desgasta piezas y consume energía (se combate con lubricantes y rodamientos), pero sin él no podríamos andar, frenar ni sujetar un lápiz: las ruedas de un coche avanzan gracias al rozamiento con el suelo. En un <b>plano inclinado</b> de ángulo α, el peso se descompone en una componente paralela al plano, m·g·sen α, que tira del cuerpo hacia abajo, y otra perpendicular, m·g·cos α, que es igual a la normal. El cuerpo desliza si m·g·sen α supera el rozamiento máximo μ·m·g·cos α, es decir, si tan α &gt; μ. Por eso un coche derrapa más fácilmente en una cuesta helada.",
    ], svg: planoSVG, v: ["fue2-c", "Plano inclinado con fricción"] },
    { h: "La cantidad de movimiento y su conservación", p: [
      "La <mark>cantidad de movimiento</mark> o momento lineal de un cuerpo es el producto de su masa por su velocidad: <b>p = m · v</b>, en kg·m/s. Es un vector con la dirección de la velocidad. Un camión lento y una bala rápida pueden tener la misma cantidad de movimiento. Newton formuló su segunda ley de forma más general: la fuerza neta es igual a la variación de la cantidad de movimiento por unidad de tiempo, F = Δp / Δt. El producto F·Δt se llama <b>impulso</b> y es igual a Δp.",
      "Esta relación explica muchos sistemas de seguridad. Para detener un cuerpo (cambiar su p hasta cero), cuanto más largo es el tiempo de frenado, menor es la fuerza. Los airbags, los cascos, las zonas de deformación de los coches, las colchonetas de salto o doblar las rodillas al caer alargan el tiempo del choque y reducen la fuerza. Además, en un sistema aislado (sin fuerzas exteriores), la cantidad de movimiento total <b>se conserva</b>: p<sub>antes</sub> = p<sub>después</sub>. Así se explica el retroceso de una escopeta, el impulso de un cohete o los choques entre bolas de billar o vehículos, que los peritos de tráfico usan para reconstruir accidentes.",
    ], svg: cadena("Conservación de la cantidad de movimiento en un retroceso: el sistema parte del reposo y la suma de momentos sigue siendo cero", [["Antes: p total = 0", "var(--muted)"], ["Bala: m·v →", "var(--red)"], ["← Arma: M·V", "var(--pen)"]], ["disparo", "m·v = M·V"], "Retroceso de un arma"), v: ["fue2-d", "Conservación de la cantidad de movimiento"] },
    { h: "El movimiento circular", p: [
      "En el <b>movimiento circular uniforme</b> (MCU), un cuerpo recorre una circunferencia con rapidez constante: las aspas de un aerogenerador, un satélite en órbita, una noria. Aunque el valor de la velocidad no cambie, su <b>dirección</b> cambia continuamente, así que existe una aceleración dirigida hacia el centro, la <mark>aceleración centrípeta</mark>: a<sub>c</sub> = v² / r. Se describe también con el <b>periodo</b> (T, tiempo de una vuelta), la <b>frecuencia</b> (f = 1/T, vueltas por segundo) y la <b>velocidad angular</b> (ω = 2π/T, en rad/s), relacionada con la lineal por v = ω·r.",
      "Según la segunda ley, para que exista esa aceleración tiene que haber una fuerza neta hacia el centro, la <b>fuerza centrípeta</b>: F<sub>c</sub> = m·v²/r. No es una fuerza nueva, sino el papel que hace alguna de las conocidas: la tensión de la cuerda en una honda, el rozamiento de los neumáticos en una curva o la gravedad en un satélite. Si esa fuerza desaparece, el cuerpo sale por la <b>tangente</b>, por inercia, como el agua que sale de la ropa en el centrifugado. Por eso en una curva con hielo (sin rozamiento) el coche se sale, y por eso las curvas de las autopistas y los velódromos tienen peralte.",
    ], svg: L5.ficha("Movimiento circular uniforme", "MCU", ["v = 2πr / T", "ω = 2π / T ;  v = ω·r", "ac = v² / r", "Fc = m·v² / r"], "var(--pen)") },
    { h: "Dinámica y seguridad vial", p: [
      "Las leyes de Newton tienen una aplicación directa en la <b>seguridad vial</b>. La <mark>distancia de detención</mark> de un vehículo es la suma de la distancia de reacción (lo que recorre el coche durante el tiempo que tarda el conductor en reaccionar, alrededor de 1 s, a velocidad constante) y la distancia de frenado (MRUA con la deceleración que permite el rozamiento). A 50 km/h (13,9 m/s), con 1 s de reacción y a = −7 m/s², la distancia total es unos 14 + 14 = 28 m; a 100 km/h, unos 28 + 55 = 83 m. El alcohol, las drogas, el cansancio y el móvil alargan mucho el tiempo de reacción.",
      "La energía y la cantidad de movimiento en un choque crecen muy deprisa con la velocidad, y la probabilidad de muerte de un peatón atropellado pasa de alrededor del 10 % a 30 km/h a casi el 80 % a 50 km/h. Por eso muchas ciudades españolas limitan la velocidad a 30 km/h en calles de un carril por sentido desde 2021. Los sistemas de seguridad aplican la física: el <b>cinturón</b> y el <b>airbag</b> alargan el tiempo de frenado del cuerpo; el <b>ABS</b> evita que las ruedas se bloqueen para mantener el rozamiento estático, mayor que el dinámico; el <b>reposacabezas</b> frena el latigazo del cuello. Conocer la física ayuda a entender que las normas de tráfico no son caprichosas.",
    ], svg: L5.barras("Distancia de detención en seco según la velocidad (reacción de 1 s)", "Distancia de detención (m)", [["30 km/h", 13, "var(--leaf)", "13 m"], ["50 km/h", 28, "var(--sun)", "28 m"], ["90 km/h", 70, "var(--red)", "70 m"], ["120 km/h", 113, "var(--pen)", "113 m"]]) },
  ],
  figura: { titulo: "Las fuerzas y el movimiento", items: [["Cinemática", "v = Δx/Δt", "a = Δv/Δt", "MRU · MRUA"], ["Leyes de Newton", "inercia", "ΣF = m·a", "acción-reacción"], ["Fuerzas", "P = mg · N", "Fr = μN", "Hooke"], ["Momento", "p = m·v", "se conserva", "F·Δt = Δp"]] },
  video: ["fue2-a", "Las tres leyes de Newton"],
  ejemplos: [
    ["Un tren sale de una estación a 72 km/h y otro, desde otra estación a 30 km, va a su encuentro a 108 km/h. ¿Cuándo y dónde se cruzan?", ["v₁ = 20 m/s; v₂ = 30 m/s; distancia 30 000 m.", "x₁ = 20t; x₂ = 30 000 − 30t.", "Igualando: 50t = 30 000 → t = 600 s = 10 min.", "x = 20 · 600 = 12 000 m."], "A los 10 minutos, a 12 km de la primera estación."],
    ["Un coche a 30 m/s frena con a = −6 m/s². ¿Cuánto tarda en pararse y qué distancia recorre?", ["t = (0 − 30) / (−6) = 5 s.", "Δx = (0² − 30²) / (2 · (−6)) = 900/12.", "Δx = 75 m."], "5 s y 75 m."],
    ["Se deja caer una piedra a un pozo y se oye el golpe a los 2 s (despreciando el tiempo del sonido). ¿Qué profundidad tiene? ¿Con qué velocidad llega?", ["h = ½ g t² = ½ · 9,8 · 4.", "h = 19,6 m.", "v = g·t = 9,8 · 2 = 19,6 m/s."], "19,6 m; 19,6 m/s."],
    ["Se empuja un armario de 50 kg con 300 N horizontalmente. El coeficiente de rozamiento es 0,4. ¿Qué aceleración adquiere?", ["N = m·g = 50 · 9,8 = 490 N.", "Fr = μN = 0,4 · 490 = 196 N.", "ΣF = 300 − 196 = 104 N → a = 104/50 = 2,08 m/s²."], "a ≈ 2,1 m/s²."],
    ["Un bloque de 10 kg está en un plano inclinado de 30° sin rozamiento. ¿Qué aceleración tiene y cuánto vale la normal?", ["Componente paralela: m·g·sen 30° = 10 · 9,8 · 0,5 = 49 N.", "a = 49/10 = 4,9 m/s².", "N = m·g·cos 30° = 10 · 9,8 · 0,866 = 84,9 N."], "a = 4,9 m/s²; N ≈ 85 N."],
    ["Un patinador de 60 kg, en reposo, lanza hacia delante una mochila de 4 kg a 6 m/s. ¿Con qué velocidad retrocede?", ["Sistema aislado: p antes = 0.", "0 = 4 · 6 + 60 · v.", "v = −24/60 = −0,4 m/s."], "Retrocede a 0,4 m/s."],
  ],
  errores: [
    "Pensar que hace falta una fuerza para mantener un movimiento: sin rozamiento seguiría solo, por inercia.",
    "Creer que los cuerpos pesados caen antes sin aire: todos caen con la misma aceleración g.",
    "Confundir masa (kg, no cambia) y peso (N, depende de g).",
    "Pensar que acción y reacción se anulan: actúan sobre cuerpos distintos.",
    "Decir que en una curva a velocidad constante no hay aceleración: cambia la dirección, hay aceleración centrípeta.",
    "Considerar la «fuerza centrífuga» como una fuerza real que empuja hacia fuera: lo que ocurre es que el cuerpo tiende a seguir recto.",
  ],
  ejercicios: {
    b: [
      ["Explica por qué el movimiento es relativo con un ejemplo.", "Depende del sistema de referencia: un pasajero de un tren está en reposo respecto al vagón y en movimiento respecto al andén."],
      ["Un ciclista recorre 18 km en 45 minutos. ¿Cuál es su velocidad media en km/h y en m/s?", "v = 18 km / 0,75 h = 24 km/h = 6,7 m/s."],
      ["Una moto pasa de 0 a 90 km/h en 5 s. ¿Qué aceleración media tiene?", "90 km/h = 25 m/s. a = 25/5 = 5 m/s²."],
      ["Un coche circula a 25 m/s constantes. ¿Qué distancia recorre en 2 minutos?", "x = v·t = 25 · 120 = 3000 m = 3 km."],
      ["Desde el reposo, un objeto cae 3 s. ¿Qué velocidad tiene y qué altura ha caído? (g = 9,8 m/s²)", "v = 9,8 · 3 = 29,4 m/s. h = ½ · 9,8 · 9 = 44,1 m."],
      ["Define fuerza y di su unidad en el SI.", "Causa capaz de cambiar el estado de movimiento de un cuerpo o de deformarlo. Se mide en newtons (N)."],
      ["Calcula la resultante de dos fuerzas de 8 N y 6 N si: a) tienen el mismo sentido; b) sentidos opuestos; c) son perpendiculares.", "a) 14 N. b) 2 N, en el sentido de la de 8 N. c) √(64 + 36) = 10 N."],
      ["Enuncia las tres leyes de Newton.", "1.ª: un cuerpo sigue en reposo o MRU si la fuerza neta es cero (inercia). 2.ª: ΣF = m·a. 3.ª: a toda acción corresponde una reacción igual y opuesta sobre el otro cuerpo."],
      ["¿Qué fuerza neta hace falta para acelerar un coche de 1200 kg a 2,5 m/s²?", "F = m·a = 1200 · 2,5 = 3000 N."],
      ["Calcula el peso de una persona de 65 kg en la Tierra (9,8 m/s²) y en la Luna (1,6 m/s²). ¿Cambia su masa?", "Tierra: 637 N. Luna: 104 N. Su masa sigue siendo 65 kg."],
      ["Explica con la tercera ley cómo avanza un nadador.", "Empuja el agua hacia atrás con brazos y piernas; el agua le empuja hacia delante con una fuerza igual y opuesta."],
      ["Calcula la cantidad de movimiento de un balón de 0,4 kg a 25 m/s y de un camión de 10 t a 2 m/s.", "Balón: 10 kg·m/s. Camión: 20 000 kg·m/s."],
    ],
    m: [
      ["Un coche a 108 km/h ve un obstáculo y el conductor tarda 0,8 s en reaccionar. Después frena con a = −7,5 m/s². ¿Qué distancia total necesita?", "v = 30 m/s. Reacción: 30 · 0,8 = 24 m. Frenado: 30²/(2·7,5) = 60 m. Total: 84 m."],
      ["Se lanza una pelota hacia arriba a 19,6 m/s. ¿Cuánto tarda en llegar al punto más alto y qué altura alcanza?", "t = 19,6/9,8 = 2 s. h = 19,6²/(2·9,8) = 19,6 m."],
      ["Un ascensor de 600 kg sube con aceleración de 1,2 m/s². ¿Qué tensión soporta el cable?", "T − m·g = m·a → T = 600 · (9,8 + 1,2) = 6600 N."],
      ["Una persona de 70 kg está sobre una báscula en un ascensor que baja acelerando a 2 m/s². ¿Qué marca la báscula (en N y en «kg»)?", "N = m·(g − a) = 70 · 7,8 = 546 N, equivalente a 546/9,8 ≈ 55,7 kg."],
      ["Un bloque de 5 kg desliza por el suelo a 4 m/s y se para tras 4 m. ¿Cuánto vale el coeficiente de rozamiento?", "a = −v₀²/(2d) = −16/8 = −2 m/s². Fr = m·|a| = 10 N = μ·m·g → μ = 10/49 = 0,20."],
      ["¿Por qué un mismo empujón hace que un patinador ligero retroceda más que uno pesado? Usa la segunda y la tercera ley.", "Las fuerzas que se ejercen mutuamente son iguales (3.ª ley), pero la aceleración es a = F/m (2.ª ley): el de menos masa adquiere más aceleración."],
      ["Un muelle de constante 200 N/m se estira 5 cm. ¿Qué fuerza ejerce? ¿Qué masa colgada produce ese estiramiento?", "F = k·Δx = 200 · 0,05 = 10 N. m = 10/9,8 = 1,02 kg."],
      ["Un coche de 1000 kg toma una curva de 50 m de radio a 15 m/s. ¿Qué fuerza centrípeta necesita? ¿Qué coeficiente de rozamiento mínimo hace falta?", "Fc = 1000 · 225/50 = 4500 N. μ ≥ Fc/(m·g) = 4500/9800 = 0,46."],
      ["Una noria de 20 m de radio da una vuelta en 40 s. Calcula la velocidad lineal de una cabina y su aceleración centrípeta.", "v = 2π·20/40 = 3,14 m/s. ac = 3,14²/20 = 0,49 m/s²."],
      ["Una pelota de 0,5 kg llega a una pared a 10 m/s y rebota a 8 m/s. Si el choque dura 0,02 s, ¿qué fuerza media ejerce la pared?", "Δp = 0,5 · (8 − (−10)) = 9 kg·m/s. F = 9/0,02 = 450 N."],
      ["Explica por qué un airbag reduce las lesiones si la variación de la cantidad de movimiento del cuerpo es la misma.", "F = Δp/Δt: el airbag alarga el tiempo en que se frena el cuerpo y reparte la fuerza en una superficie mayor, así que la fuerza (y la presión) sobre la cabeza y el tórax son mucho menores."],
      ["Un vagón de 2000 kg a 3 m/s choca con otro de 1000 kg en reposo y quedan enganchados. ¿A qué velocidad se mueven juntos?", "2000 · 3 = 3000 · v → v = 2 m/s."],
    ],
    a: [
      ["Un bloque de 4 kg sobre una mesa (μ = 0,25) está unido por una cuerda que pasa por una polea a otro bloque de 2 kg que cuelga. Calcula la aceleración y la tensión.", "Sistema: m₂·g − μ·m₁·g = (m₁ + m₂)·a → 19,6 − 9,8 = 6·a → a = 1,63 m/s². En el bloque colgado: T = m₂·(g − a) = 2 · 8,17 = 16,3 N."],
      ["Un esquiador de 70 kg baja una pista de 20° con μ = 0,1. Calcula su aceleración y la velocidad tras 100 m partiendo del reposo.", "a = g·(sen 20° − μ·cos 20°) = 9,8·(0,342 − 0,094) = 2,43 m/s². v = √(2 · 2,43 · 100) = 22 m/s (≈ 79 km/h)."],
      ["¿Con qué ángulo mínimo empieza a deslizar una caja en una rampa si el coeficiente de rozamiento estático es 0,6?", "Desliza cuando tan α > μ → α > arctan 0,6 = 31°."],
      ["Un coche de 1500 kg a 72 km/h choca contra un muro y se detiene en 0,1 s. Calcula la fuerza media. ¿Y la que sufre un pasajero de 70 kg sin cinturón que se detiene contra el volante en 0,01 s? Compárala con su peso.", "Coche: Δp = 1500·20 = 30 000 → F = 3·10⁵ N. Pasajero: Δp = 70·20 = 1400 → F = 1,4·10⁵ N, unas 200 veces su peso (686 N). Con cinturón (≈ 0,1 s) serían 14 000 N, unas 20 veces menos."],
      ["Un cohete de 2000 kg expulsa 10 kg de gases por segundo a 3000 m/s. ¿Qué fuerza de empuje produce? ¿Puede despegar?", "Empuje = (Δm/Δt)·v = 10 · 3000 = 30 000 N. Peso = 2000 · 9,8 = 19 600 N. Como el empuje es mayor, despega con a = (30 000 − 19 600)/2000 = 5,2 m/s²."],
      ["Calcula el peralte (ángulo) que necesita una curva de 200 m de radio para que un coche la tome a 90 km/h sin depender del rozamiento.", "tan θ = v²/(r·g) = 25²/(200 · 9,8) = 0,319 → θ = 17,7°."],
      ["Un perito mide que dos coches quedaron enganchados tras chocar y se movieron juntos a 10 m/s. Uno de 1200 kg estaba parado. El otro, de 1000 kg, circulaba en una calle limitada a 50 km/h. ¿Iba demasiado deprisa?", "1000·v = 2200 · 10 → v = 22 m/s = 79 km/h. Iba muy por encima del límite."],
      ["Diseña un experimento para comprobar la segunda ley de Newton con un carrito, una polea y pesas, indicando qué medirías y qué gráfica esperas.", "Carrito sobre carril con poco rozamiento, tirado por pesas colgadas de una polea. Variar la fuerza (pesas) con masa total constante y medir la aceleración (sensores, vídeo o x = ½at²). Se espera una recta a–F que pasa por el origen con pendiente 1/m; repitiendo con masa variable y fuerza constante, a frente a 1/m también es una recta."],
    ],
  },
  quiz: [
    ["El desplazamiento al dar una vuelta completa a una pista es…", ["400 m", "cero", "800 m", "depende de la velocidad"], 1, "Posición final = inicial."],
    ["La aceleración mide el cambio de…", ["la posición", "la velocidad", "la masa", "la fuerza"], 1, "a = Δv / Δt."],
    ["En el MRU la gráfica x–t es…", ["una parábola", "una recta", "una hipérbola", "horizontal siempre"], 1, "Pendiente = velocidad."],
    ["En caída libre sin aire, una pluma y un martillo…", ["el martillo cae antes", "caen a la vez", "la pluma cae antes", "no caen"], 1, "Misma aceleración g."],
    ["En 2 s de caída libre desde el reposo un cuerpo recorre…", ["9,8 m", "19,6 m", "4,9 m", "39,2 m"], 1, "½·9,8·4."],
    ["La unidad de fuerza del SI es…", ["el kilogramo", "el newton", "el julio", "el vatio"], 1, "kg·m/s²."],
    ["Dos fuerzas perpendiculares de 6 N y 8 N dan una resultante de…", ["14 N", "2 N", "10 N", "48 N"], 2, "Pitágoras."],
    ["La primera ley de Newton se llama ley de…", ["la gravitación", "la inercia", "acción y reacción", "Hooke"], 1, "Mantener el estado de movimiento."],
    ["Si la fuerza neta sobre un cuerpo es cero, el cuerpo…", ["está siempre parado", "está en reposo o en MRU", "acelera", "cae"], 1, "Primera ley."],
    ["Con la misma fuerza, si la masa se duplica, la aceleración…", ["se duplica", "se reduce a la mitad", "no cambia", "se anula"], 1, "a = F/m."],
    ["El peso de un cuerpo de 10 kg en la Tierra es…", ["10 N", "98 N", "9,8 N", "980 N"], 1, "P = m·g."],
    ["Las fuerzas de acción y reacción…", ["se anulan", "actúan sobre cuerpos distintos", "tienen distinto módulo", "solo existen en contacto"], 1, "Por eso no se anulan."],
    ["Un cohete avanza en el espacio porque…", ["empuja el aire", "los gases que expulsa lo empujan", "no tiene peso", "lo atrae la Luna"], 1, "Tercera ley."],
    ["La fuerza normal es…", ["siempre igual al peso", "perpendicular a la superficie de apoyo", "paralela al suelo", "una reacción del peso"], 1, "Su valor depende de la situación."],
    ["La fuerza de rozamiento máxima vale…", ["m·a", "μ·N", "m·g·h", "k·x"], 1, "Proporcional a la normal."],
    ["En un plano inclinado sin rozamiento la aceleración es…", ["g", "g·sen α", "g·cos α", "0"], 1, "Componente paralela del peso."],
    ["La cantidad de movimiento es…", ["m·a", "m·v", "½mv²", "F·d"], 1, "Momento lineal."],
    ["El airbag reduce la fuerza porque…", ["reduce la masa", "alarga el tiempo del choque", "aumenta la velocidad", "elimina la inercia"], 1, "F = Δp/Δt."],
    ["En un MCU la aceleración…", ["es cero", "apunta al centro", "es tangente", "apunta hacia fuera"], 1, "Centrípeta: v²/r."],
    ["Si un coche pasa de 50 a 100 km/h, su distancia de frenado…", ["se duplica", "se cuadruplica", "no cambia", "se reduce"], 1, "Depende de v²."],
  ],
  examen: [
    ["Un coche a 20 m/s se para en 5 s. Su aceleración es…", ["4 m/s²", "−4 m/s²", "100 m/s²", "−100 m/s²"], 1, "(0 − 20)/5."],
    ["Para dar 3 m/s² a 50 kg hace falta una fuerza neta de…", ["150 N", "16,7 N", "53 N", "490 N"], 0, "F = m·a."],
    ["Con μ = 0,5 y N = 200 N, el rozamiento máximo es…", ["400 N", "100 N", "0,5 N", "200 N"], 1, "0,5 · 200."],
    ["En un ascensor que acelera hacia arriba, la báscula marca…", ["más que el peso", "menos que el peso", "lo mismo", "cero"], 0, "N = m(g + a)."],
    ["Un patinador lanza una pelota hacia delante y…", ["se queda quieto", "retrocede", "avanza", "cae"], 1, "Conservación de p."],
    ["La fuerza centrípeta en una curva de coche la aporta…", ["la fuerza centrífuga", "el rozamiento de los neumáticos", "el peso", "el motor"], 1, "Hacia el centro de la curva."],
    ["Una pelota lanzada hacia arriba a 9,8 m/s tarda en llegar arriba…", ["1 s", "2 s", "9,8 s", "0,5 s"], 0, "t = v₀/g."],
    ["Al frenar bruscamente el autobús, los pasajeros se van hacia delante por…", ["la gravedad", "la inercia", "la reacción", "el rozamiento"], 1, "Primera ley."],
  ],
  feynman: ["Por qué nos vamos hacia delante en un frenazo", "Por qué todos los cuerpos caen igual sin aire", "Diferencia entre masa y peso", "Por qué acción y reacción no se anulan", "Por qué un airbag reduce la fuerza de un choque", "Qué fuerza hace girar a un coche en una curva"],
  mapa: ["FUERZAS Y MOVIMIENTO", [["Cinemática", "MRU, MRUA, caída libre"], ["Leyes de Newton", "inercia, ΣF = ma, acción-reacción"], ["Fuerzas", "peso, normal, rozamiento, Hooke"], ["Momento y giro", "p = mv, MCU, seguridad"]]],
  tarjetas: [
    ["Velocidad", "v = Δx / Δt (m/s), magnitud vectorial."],
    ["Aceleración", "a = Δv / Δt (m/s²)."],
    ["MRUA", "v = v₀ + at ; x = x₀ + v₀t + ½at²."],
    ["Caída libre", "MRUA con g = 9,8 m/s² hacia abajo."],
    ["1.ª ley", "Sin fuerza neta: reposo o MRU (inercia)."],
    ["2.ª ley", "ΣF = m · a."],
    ["3.ª ley", "Acción y reacción iguales y opuestas, en cuerpos distintos."],
    ["Peso", "P = m · g; la masa no cambia, el peso sí."],
    ["Rozamiento", "Fr = μ · N; se opone al movimiento."],
    ["Ley de Hooke", "F = −k · Δx."],
    ["Cantidad de movimiento", "p = m · v; se conserva en sistemas aislados."],
    ["Fuerza centrípeta", "Fc = m · v² / r, hacia el centro."],
  ],
  glosario: [
    ["Sistema de referencia", "Punto y ejes respecto a los que se describe un movimiento."],
    ["Trayectoria", "Línea que describe un móvil."],
    ["Desplazamiento", "Vector entre la posición inicial y la final."],
    ["Velocidad", "Rapidez con que cambia la posición, con dirección y sentido."],
    ["Aceleración", "Rapidez con que cambia la velocidad."],
    ["Caída libre", "Movimiento de un cuerpo solo bajo la acción de la gravedad."],
    ["Fuerza", "Interacción que cambia el movimiento o deforma un cuerpo."],
    ["Resultante", "Fuerza única equivalente a la suma de varias."],
    ["Inercia", "Tendencia de un cuerpo a mantener su estado de movimiento."],
    ["Peso", "Fuerza con que la Tierra atrae a un cuerpo."],
    ["Fuerza normal", "Fuerza perpendicular que ejerce una superficie de apoyo."],
    ["Tensión", "Fuerza que transmite una cuerda o un cable tensos."],
    ["Coeficiente de rozamiento", "Número que depende de los materiales y relaciona el rozamiento con la normal."],
    ["Cantidad de movimiento", "Producto de la masa por la velocidad."],
    ["Impulso", "Producto de una fuerza por el tiempo que actúa."],
    ["Aceleración centrípeta", "Aceleración dirigida al centro en un movimiento circular."],
  ],
  situacion: {
    titulo: "Campaña de seguridad vial con física",
    reto: "La Jefatura de Tráfico os pide una campaña dirigida a jóvenes que explique con física, y no solo con normas, por qué hay que respetar los límites de velocidad, usar el cinturón y no mirar el móvil al volante.",
    pasos: [
      "Calculad la distancia de detención a 30, 50, 90 y 120 km/h con un tiempo de reacción de 1 s y con 2,5 s (mirando el móvil).",
      "Calculad la fuerza que sufre un pasajero de 60 kg en un choque a 50 km/h con y sin cinturón, suponiendo tiempos de frenado razonables.",
      "Medid vuestro tiempo de reacción con la prueba de la regla que cae y relacionadlo con la caída libre.",
      "Diseñad gráficos claros y mensajes breves basados en los resultados.",
      "Presentad la campaña en clase o en las redes del centro y recoged opiniones.",
    ],
    producto: "Una campaña (cartel, infografía y vídeo corto) con datos calculados por el equipo.",
    evaluacion: ["Los cálculos cinemáticos y dinámicos son correctos y con unidades.", "Las leyes de Newton se aplican y se explican bien.", "Los mensajes son claros, rigurosos y adecuados al público joven.", "Se citan fuentes oficiales (DGT) para los datos de siniestralidad."],
  },
  familias: [
    "Medid vuestro tiempo de reacción con una regla que se deja caer entre los dedos.",
    "En el coche, comentad cómo cambia la distancia de seguridad con la velocidad.",
    "Probad a tirar de un mantel lentamente y de golpe con un vaso de plástico encima.",
    "Observad juntos un ascensor: ¿cuándo os sentís más pesados o más ligeros?",
  ],
  saberes: "bloque «E. Las fuerzas que nos mueven»: descripción del movimiento (MRU, MRUA, caída libre y circular); las fuerzas como vectores y sus efectos; las leyes de Newton y su aplicación a situaciones cotidianas; peso, normal, tensión, fuerza elástica y rozamiento; cantidad de movimiento e impulso; aplicaciones a la seguridad vial y a la tecnología.",
  ideas: [
    "Medida de g con un objeto en caída grabado a cámara lenta y análisis con Tracker.",
    "Carrito con sensores o móvil (app phyphox) para comprobar ΣF = m·a.",
    "Estudio del rozamiento con un dinamómetro arrastrando bloques de distintos materiales.",
    "Choques de carritos en un carril para comprobar la conservación de la cantidad de movimiento.",
  ],
  fuentes: [
    { t: "Dirección General de Tráfico: distancia de detención y velocidad", url: "https://www.dgt.es/" },
    { t: "Isaac Newton, Philosophiae Naturalis Principia Mathematica (1687), Biblioteca Digital Hispánica", url: "https://bdh.bne.es/" },
  ],
});
