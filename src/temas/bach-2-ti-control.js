// Tecnología e Ingeniería II 2º Bachillerato · Tema 12. Nivel libro. Dibujos propios en SVG.
const { marco, T, flecha, ficha, pasos, compara, rejilla, graf, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

const caja = (x, y, w, h, t, c = "var(--pen)", fs = 9.5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="var(--card)" stroke="${c}" stroke-width="2"/>${T(x + w / 2, y + h / 2 + 3.5, t, { fs, b: true, c })}`;
const sumador = (x, y) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 7} ${y - 7} L ${x + 7} ${y + 7} M${x + 7} ${y - 7} L ${x - 7} ${y + 7}" stroke="var(--ink)" stroke-width="1.2"/>`;

// Diagrama de bloques de un sistema en lazo cerrado.
const lazoSVG = (() => {
  const id = uid("lz");
  const fl = (d) => `<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#${id})"/>`;
  return marco("Diagrama de bloques de un sistema de control en lazo cerrado: la consigna entra en el comparador, que resta la señal del sensor; el error pasa al regulador, al actuador y a la planta, y la salida se mide y se realimenta", `
  ${fl("M4 70 H 20")}${sumador(30, 70)}${T(10, 60, "r", { fs: 11, b: true, c: "var(--leaf)" })}${T(20, 92, "−", { fs: 13, b: true, c: "var(--red)" })}${T(22, 58, "+", { fs: 11, b: true })}
  ${fl("M40 70 H 52")}${T(46, 60, "e", { fs: 10, b: true, c: "var(--red)" })}${caja(52, 56, 56, 28, "Regulador")}${fl("M108 70 H 120")}${caja(120, 56, 54, 28, "Actuador")}${fl("M174 70 H 186")}${caja(186, 56, 46, 28, "Planta", "var(--red)")}
  ${fl("M232 70 H 256")}${T(246, 60, "y", { fs: 11, b: true, c: "var(--leaf)" })}
  <path d="M244 70 V 130 H 166" fill="none" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#${id})"/>${caja(110, 116, 56, 28, "Sensor", "var(--leaf)")}<path d="M110 130 H 30 V 80" fill="none" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#${id})"/>
  <path d="M209 30 V 56" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#${id})"/>${T(209, 24, "perturbación", { fs: 9.5, c: "var(--muted)" })}
  ${T(130, 168, "e = r − y (realimentación negativa)", { fs: 11, b: true })}`, flecha(id, "var(--ink)"));
})();

// Reglas del álgebra de bloques.
const reglasSVG = (() => {
  const id = uid("rb");
  const fl = (d) => `<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#${id})"/>`;
  return marco("Reglas del álgebra de bloques: dos bloques en serie se multiplican, dos en paralelo se suman y un lazo de realimentación negativa equivale a G entre uno más G por H", `
  ${T(12, 24, "Serie", { fs: 10.5, b: true, c: "var(--pen)", a: "start" })}${fl("M12 42 H 24")}${caja(24, 31, 30, 22, "G₁")}${fl("M54 42 H 66")}${caja(66, 31, 30, 22, "G₂")}${fl("M96 42 H 110")}${T(118, 46, "= G₁·G₂", { fs: 11, b: true, a: "start" })}
  ${T(12, 78, "Paralelo", { fs: 10.5, b: true, c: "var(--pen)", a: "start" })}<path d="M12 104 H 30 M30 92 V 116" stroke="var(--ink)" stroke-width="1.6"/>${fl("M30 92 H 42")}${fl("M30 116 H 42")}${caja(42, 82, 30, 20, "G₁")}${caja(42, 106, 30, 20, "G₂")}<path d="M72 92 H 92 V 98 M72 116 H 92 V 110" stroke="var(--ink)" stroke-width="1.6"/>${sumador(92, 104)}${fl("M102 104 H 110")}${T(118, 108, "= G₁ + G₂", { fs: 11, b: true, a: "start" })}
  ${T(12, 140, "Lazo", { fs: 10.5, b: true, c: "var(--pen)", a: "start" })}${fl("M30 146 H 42")}${sumador(52, 146)}${fl("M62 146 H 74")}${caja(74, 136, 28, 20, "G")}${fl("M102 146 H 120")}<path d="M112 146 V 164 H 96" stroke="var(--ink)" stroke-width="1.4"/>${caja(70, 157, 26, 14, "H", "var(--leaf)", 8.5)}<path d="M70 164 H 52 V 156" stroke="var(--ink)" stroke-width="1.4"/>${T(130, 150, "= G / (1 + G·H)", { fs: 11, b: true, c: "var(--red)", a: "start" })}`, flecha(id, "var(--ink)"));
})();

// Respuestas temporales a un escalón.
const respuestaSVG = graf("Respuesta a un escalón: un sistema de primer orden crece de forma exponencial sin sobrepasar el valor final; uno de segundo orden subamortiguado sobrepasa el valor final y oscila hasta estabilizarse", "t", "y(t)", [
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, 0.75 * (1 - Math.exp(-x / 0.18))]; }), c: "var(--pen)", t: "" },
  { p: Array.from({ length: 81 }, (_, i) => { const x = i / 80, z = 0.3, wn = 22, wd = wn * Math.sqrt(1 - z * z); return [x, 0.75 * (1 - Math.exp(-z * wn * x) * (Math.cos(wd * x) + (z / Math.sqrt(1 - z * z)) * Math.sin(wd * x)))]; }), c: "var(--red)", t: "" },
  { p: [[0, 0.75], [1, 0.75]], c: "var(--muted)", dash: true, t: "" },
], `${T(236, 52, "valor final", { fs: 9.5, c: "var(--muted)", a: "end" })}${T(92, 34, "sobreoscilación", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(130, 116, "1.er orden (τ)", { fs: 10, b: true, c: "var(--pen)", a: "start" })}<path d="M76 145 V ${(145 - 0.75 * 0.632 * 115).toFixed(1)}" stroke="var(--pen)" stroke-dasharray="3 3"/>${T(76, 160, "τ: 63 %", { fs: 9.5, b: true, c: "var(--pen)" })}`);

// Control todo o nada con histéresis.
const histeresisSVG = graf("Control todo o nada de un horno con histéresis: la temperatura oscila entre 19 y 21 grados; la calefacción se conecta al bajar de 19 y se desconecta al superar 21", "t", "temperatura", [
  { p: [[0, 0.1], [0.18, 0.7], [0.26, 0.62], [0.34, 0.48], [0.4, 0.7], [0.48, 0.62], [0.56, 0.48], [0.62, 0.7], [0.7, 0.62], [0.78, 0.48], [0.84, 0.7], [0.92, 0.62], [1, 0.5]], c: "var(--red)", t: "" },
  { p: [[0, 0.68], [1, 0.68]], c: "var(--muted)", dash: true, t: "" },
  { p: [[0, 0.5], [1, 0.5]], c: "var(--muted)", dash: true, t: "" },
], `${T(238, 60, "21 °C: desconecta", { fs: 9.5, b: true, c: "var(--pen)", a: "end" })}${T(238, 104, "19 °C: conecta", { fs: 9.5, b: true, c: "var(--pen)", a: "end" })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Sistemas automáticos de control",
  minutos: 120,
  objetivos: [
    "Distinguir los sistemas de control en lazo abierto y en lazo cerrado e identificar sus elementos",
    "Describir los principales transductores y captadores usados en control",
    "Obtener funciones de transferencia sencillas con la transformada de Laplace",
    "Reducir diagramas de bloques con las reglas del álgebra de bloques",
    "Analizar la respuesta temporal, el error en régimen permanente y la estabilidad de un sistema",
    "Explicar el funcionamiento de los controladores todo o nada, P, PI, PD y PID",
  ],
  claves: ["sistema de control", "consigna", "perturbación", "lazo abierto", "lazo cerrado", "realimentación", "comparador", "regulador", "actuador", "captador", "transformada de Laplace", "función de transferencia", "diagrama de bloques", "constante de tiempo", "error estacionario", "estabilidad", "criterio de Routh", "controlador PID"],
  pregunta: {
    texto: "Cuando conduces y el coche empieza a desviarse, corriges el volante sin pensarlo. Si cerraras los ojos, no podrías mantenerte en el carril. ¿Qué tiene que ver esto con un termostato o con el piloto automático de un avión?",
    respuesta: "Todos son sistemas de <mark>control en lazo cerrado</mark>: miden continuamente la salida (tus ojos ven la posición del coche, el termostato mide la temperatura), la comparan con la consigna (el centro del carril, 21 °C) y actúan para corregir la diferencia o <b>error</b>. Sin esa <b>realimentación</b>, el sistema funcionaría «a ciegas», en lazo abierto, y no podría corregir las perturbaciones.",
  },
  lectura: {
    titulo: "El regulador que dejó de bailar",
    html: `<p>En 1788, James Watt incorporó a sus máquinas de vapor el <b>regulador centrífugo</b>: dos bolas que giraban con el eje y, al acelerarse la máquina, se separaban por la fuerza centrífuga y cerraban la válvula del vapor. Si la máquina se frenaba, las bolas bajaban y abrían la válvula. Era un sistema de control automático en lazo cerrado.</p><p>A medida que las máquinas se hicieron más potentes y precisas, los reguladores empezaron a <b>oscilar</b>: la velocidad subía y bajaba sin estabilizarse, un fenómeno que los ingenieros llamaban «cazar». En 1868, el físico James Clerk Maxwell, el mismo de las ecuaciones del electromagnetismo, publicó el artículo <i>Sobre los reguladores</i>, en el que analizó matemáticamente su estabilidad. Pocos años después, Edward Routh dio un criterio sencillo para saber si un sistema es estable sin resolver sus ecuaciones.</p><p>Así nació la <b>teoría de control</b>, que hoy permite que los aviones vuelen solos, que los robots se muevan con precisión y que los cohetes aterricen de pie. En este tema conocerás sus herramientas básicas.</p>`,
  },
  bloques: [
    bloque({ h: "12.1 Sistemas de control", p: [
      "Un <b>sistema de control</b> es un conjunto de elementos que actúan para que una magnitud (la <b>variable controlada</b> o salida) alcance y mantenga un valor deseado (la <b>consigna</b> o referencia), a pesar de las <b>perturbaciones</b>. Por ejemplo, en la calefacción de una casa, la variable controlada es la temperatura, la consigna son 21 °C y las perturbaciones son el frío exterior, las ventanas abiertas o el sol que entra.",
      "El <b>proceso</b> o <b>planta</b> es el sistema físico que se quiere controlar (la vivienda, un motor, un depósito). La <b>señal de control</b> es la acción que se aplica sobre él (abrir más o menos una válvula, aumentar la tensión de un motor). Un sistema de control es <b>automático</b> cuando funciona sin intervención humana.",
      "Los sistemas de control están en todas partes: en los electrodomésticos (lavadora, frigorífico, horno), en los vehículos (control de crucero, ABS, climatizador), en los edificios (iluminación, ascensores), en la industria (temperatura de hornos, nivel de depósitos, posición de robots), en la medicina (bombas de insulina, respiradores) e incluso en el cuerpo humano, que regula su temperatura, su glucosa y su presión arterial mediante mecanismos de realimentación.",
    ], svg: ficha("Conceptos básicos de un sistema de control: consigna, variable controlada, planta y perturbaciones, con el ejemplo de la calefacción", "Calefacción de una casa", ["Consigna: 21 °C", "Variable controlada: T interior", "Planta: la vivienda", "Perturbación: frío, ventanas"], "var(--pen)") }),
    bloque({ h: "12.2 Lazo abierto y lazo cerrado", p: [
      "En un sistema de control en <b>lazo abierto</b>, la acción de control no depende de la salida: el sistema actúa según un programa o un tiempo fijo, sin comprobar el resultado. Por ejemplo, una tostadora con temporizador, un semáforo de tiempos fijos o una lavadora que sigue su programa. Son sencillos y baratos, pero no pueden corregir las perturbaciones: si el pan está congelado, saldrá poco tostado.",
      "En un sistema en <mark>lazo cerrado</mark>, un <b>sensor</b> mide la salida y la compara continuamente con la consigna; la diferencia, llamada <b>error</b>, es la que determina la acción de control. Es la <b>realimentación negativa</b>: si la salida es mayor que la consigna, la acción disminuye, y si es menor, aumenta. Por ejemplo, un horno con termostato, el control de crucero de un coche o una cisterna con boya.",
      "El lazo cerrado tiene grandes ventajas: corrige las perturbaciones, es poco sensible a las variaciones de los componentes y puede hacer que la salida siga a la consigna con gran precisión. A cambio, es más complejo, más caro y, si está mal diseñado, puede volverse <b>inestable</b>: oscilar o descontrolarse, como un micrófono que se acopla con su altavoz (un ejemplo de realimentación positiva).",
    ], svg: compara("Comparación de los sistemas en lazo abierto y en lazo cerrado", ["Lazo abierto", ["no mide la salida", "sencillo y barato", "no corrige perturb.", "tostadora, riego por tiempo"]], ["Lazo cerrado", ["mide y compara", "error = r − y", "corrige perturb.", "termostato, crucero"]], "var(--muted)", "var(--leaf)"), video: V("ct-lazo", "Sistemas de control en lazo abierto y cerrado", "sistemas de control lazo abierto y lazo cerrado") }),
    bloque({ h: "12.3 Elementos de un sistema en lazo cerrado", p: [
      "Un sistema en lazo cerrado se representa con un <mark>diagrama de bloques</mark>, en el que cada bloque es un elemento y las flechas son las señales. Sus elementos típicos son:",
      "El <b>comparador</b> (o detector de error), representado por un círculo, resta a la consigna r la señal medida y obtiene el error e = r − y. El <b>regulador</b> o <b>controlador</b> procesa el error y decide la acción de control (puede ser un termostato, un circuito electrónico, un autómata o un microcontrolador). El <b>actuador</b> convierte esa señal en una acción con energía suficiente sobre la planta (un motor, una resistencia calefactora, una electroválvula, un cilindro). La <b>planta</b> o proceso es el sistema controlado. El <b>captador</b> o <b>sensor</b> mide la variable controlada y la convierte en una señal comparable con la consigna (normalmente eléctrica).",
      "A veces aparecen también un <b>transductor de entrada</b>, que convierte la consigna (por ejemplo, la posición de un mando) en una señal eléctrica, y un <b>amplificador</b> entre el regulador y el actuador. Identificar los elementos en sistemas reales es el primer paso para analizarlos: en un control de crucero, la consigna es la velocidad elegida, el sensor es el captador de velocidad de las ruedas, el regulador es la unidad de control electrónica, el actuador es la mariposa del acelerador (o el motor eléctrico) y la planta es el coche, con perturbaciones como las cuestas o el viento.",
    ], svg: lazoSVG }),
    bloque({ h: "12.4 Transductores y captadores", p: [
      "Un <b>transductor</b> convierte una magnitud física en otra, normalmente eléctrica; cuando se usa para medir, se llama <b>captador</b> o sensor. Se clasifican según la magnitud que miden y según su señal de salida: <b>todo o nada</b> (como un final de carrera), <b>analógica</b> (una tensión o corriente proporcional, por ejemplo de 0 a 10 V o de 4 a 20 mA) o <b>digital</b> (pulsos o un código).",
      "Para <b>posición y desplazamiento</b> se usan potenciómetros (la tensión varía con la posición del cursor), finales de carrera, sensores inductivos (detectan metales sin contacto), capacitivos, ópticos (barreras e infrarrojos), ultrasonidos (miden distancias por el tiempo del eco) y <b>encoders</b> (discos ranurados que dan pulsos al girar). Para <b>velocidad</b>, dinamos tacométricas (dan una tensión proporcional a la velocidad) y encoders.",
      "Para <b>temperatura</b>: termistores <b>NTC</b> (su resistencia baja al calentarse) y <b>PTC</b> (sube), sondas de platino <b>Pt100</b> (100 Ω a 0 °C, muy precisas), <b>termopares</b> (dos metales distintos unidos generan una pequeña tensión, útiles a altas temperaturas) y bimetales. Para <b>luz</b>: fotorresistencias (LDR), fotodiodos y fototransistores. Para <b>fuerza y presión</b>: galgas extensométricas (su resistencia cambia al deformarse; son la base de las básculas) y sensores piezoeléctricos. Otros miden humedad, nivel, caudal, gases o aceleración (los acelerómetros de los móviles).",
      "Al elegir un sensor se tienen en cuenta su <b>rango</b>, su <b>sensibilidad</b> (cuánto cambia la salida por unidad de entrada), su <b>precisión</b>, su <b>resolución</b> y su <b>tiempo de respuesta</b>.",
    ], svg: rejilla("Captadores habituales según la magnitud medida: posición, velocidad, temperatura, luz y fuerza", ["Magnitud", "Captador", "Salida"], [["Posición", "potenciómetro, encoder", "V, pulsos"], ["Velocidad", "dinamo tacométrica", "V ∝ ω"], ["Temperatura", "NTC, Pt100, termopar", "R, mV"], ["Luz", "LDR, fotodiodo", "R, I"], ["Fuerza", "galga extensométrica", "ΔR"]], "var(--leaf)") }),
    bloque({ h: "12.5 La transformada de Laplace", p: [
      "El comportamiento de los sistemas físicos se describe con <b>ecuaciones diferenciales</b>. Por ejemplo, la tensión en el condensador de un circuito RC alimentado con una tensión v<sub>e</sub>(t) cumple R·C · dv<sub>c</sub>/dt + v<sub>c</sub> = v<sub>e</sub>. Resolver estas ecuaciones es laborioso. La <mark>transformada de Laplace</mark> convierte las funciones del tiempo f(t) en funciones de una variable compleja s, F(s), de forma que las derivadas se convierten en productos y las ecuaciones diferenciales, en ecuaciones algebraicas.",
      "Sus propiedades más útiles (con condiciones iniciales nulas) son la <b>linealidad</b> (la transformada de una suma es la suma de las transformadas), la <b>derivada</b> (la transformada de df/dt es s·F(s)) y la <b>integral</b> (la transformada de ∫f dt es F(s)/s). Y las transformadas de las señales de prueba habituales se toman de una tabla:",
      formula("escalón unitario → 1/s &nbsp;&nbsp; rampa t → 1/s² &nbsp;&nbsp; impulso δ(t) → 1 &nbsp;&nbsp; e<sup>−a·t</sup> → 1/(s + a)"),
      "Así, la ecuación del circuito RC se transforma en R·C·s·V<sub>c</sub>(s) + V<sub>c</sub>(s) = V<sub>e</sub>(s). Para volver al dominio del tiempo se usa la <b>transformada inversa</b>, descomponiendo en fracciones simples y usando la tabla. Dos teoremas permiten obtener información sin calcular la inversa: el del <b>valor final</b>, lím<sub>t→∞</sub> f(t) = lím<sub>s→0</sub> s·F(s), y el del valor inicial, lím<sub>t→0</sub> f(t) = lím<sub>s→∞</sub> s·F(s).",
    ], svg: rejilla("Tabla de transformadas de Laplace: escalón, rampa, impulso, exponencial, derivada e integral", ["f(t)", "F(s)", "Uso"], [["escalón 1", "1/s", "consigna fija"], ["rampa t", "1/s²", "seguimiento"], ["e^(−at)", "1/(s + a)", "1.er orden"], ["df/dt", "s·F(s)", "derivada"], ["∫f dt", "F(s)/s", "integral"]], "var(--pen)") }),
    bloque({ h: "12.6 La función de transferencia", p: [
      "La <mark>función de transferencia</mark> G(s) de un sistema lineal es el cociente entre la transformada de Laplace de la salida y la de la entrada, con condiciones iniciales nulas:",
      formula("G(s) = Y(s) / X(s) &nbsp;&nbsp; → &nbsp;&nbsp; Y(s) = G(s) · X(s)"),
      "Describe completamente el comportamiento dinámico del sistema e independiza su modelo de la señal de entrada. En el circuito RC: G(s) = V<sub>c</sub>(s)/V<sub>e</sub>(s) = 1/(R·C·s + 1). En un sistema mecánico de masa, muelle y amortiguador, G(s) = 1/(m·s² + c·s + k). Un motor de corriente continua, de la tensión a la velocidad, se aproxima por G(s) = K/(τ·s + 1).",
      "La función de transferencia suele ser un cociente de polinomios en s. Las raíces del numerador son los <b>ceros</b> y las del denominador, los <b>polos</b>. El grado del denominador es el <b>orden</b> del sistema. Los polos determinan la forma de la respuesta: un polo real negativo −a da una exponencial decreciente e<sup>−a·t</sup>; un par de polos complejos −σ ± jω da una oscilación amortiguada; y un polo con parte real positiva da una respuesta que crece sin límite (sistema inestable). El valor G(0) es la <b>ganancia estática</b>: la relación entre la salida y la entrada en régimen permanente ante un escalón.",
    ], svg: ficha("Funciones de transferencia de sistemas sencillos: circuito RC, motor de continua y sistema masa-muelle-amortiguador", "Funciones de transferencia", ["G(s) = Y(s) / X(s)", "Circuito RC: 1 / (RC·s + 1)", "Motor: K / (τ·s + 1)", "Masa-muelle: 1 / (ms² + cs + k)"], "var(--red)") }),
    bloque({ h: "12.7 El álgebra de bloques", p: [
      "Un diagrama de bloques se puede simplificar hasta obtener un solo bloque con la función de transferencia total del sistema, mediante unas reglas sencillas. Dos bloques en <b>serie</b> (la salida de uno es la entrada del otro) equivalen a un bloque con el <b>producto</b> de sus funciones: G = G<sub>1</sub> · G<sub>2</sub>. Dos bloques en <b>paralelo</b> (con la misma entrada y salidas sumadas) equivalen a la <b>suma</b>: G = G<sub>1</sub> ± G<sub>2</sub>.",
      "La regla más importante es la del <mark>lazo de realimentación</mark>. Si G(s) es la función del camino directo y H(s) la del camino de realimentación, la función de transferencia en lazo cerrado es:",
      formula("M(s) = Y(s) / R(s) = G(s) / (1 + G(s)·H(s)) &nbsp;&nbsp; (realimentación negativa)"),
      "Si la realimentación es positiva, el signo del denominador es menos. Cuando H = 1, se dice que la realimentación es <b>unitaria</b>. El producto G·H es la <b>función de transferencia en lazo abierto</b>, y 1 + G·H = 0 es la <b>ecuación característica</b>, cuyas raíces son los polos del sistema en lazo cerrado.",
      "Esta fórmula explica una propiedad clave: si la ganancia G es muy grande, M ≈ 1/H, y el comportamiento del sistema solo depende del sensor, no de la planta. Con G = 10 y H = 1, M = 10/11 = 0,909; con G = 100, M = 0,990. Aunque la ganancia de la planta cambie mucho (por desgaste o temperatura), la salida apenas varía.",
    ], svg: reglasSVG, video: V("ct-bloques", "Función de transferencia en diagrama de bloques", "reducción diagrama de bloques función de transferencia") }),
    bloque({ h: "12.8 Reducción de diagramas de bloques", p: [
      "Para reducir un diagrama complejo se aplican las reglas de forma ordenada, empezando por los lazos más internos. A veces hay que <b>trasladar</b> un punto de bifurcación (donde una señal se divide) o un punto de suma (comparador) por delante o por detrás de un bloque, compensando con un bloque adicional para que las señales no cambien. Por ejemplo, para mover un punto de suma desde la salida de un bloque G a su entrada, hay que dividir la señal que se suma entre G.",
      "Ejemplo 1: un regulador de ganancia G<sub>1</sub> = 2 en serie con una planta G<sub>2</sub> = 1/(s + 1), con realimentación unitaria. Serie: G = 2/(s + 1). Lazo: M = [2/(s + 1)]/[1 + 2/(s + 1)] = 2/(s + 3). Ante un escalón unitario, el valor final es M(0) = 2/3: la salida no llega a la consigna (queda un error de 1/3).",
      "Ejemplo 2: un lazo interno con G<sub>2</sub> y realimentación H<sub>2</sub>, dentro de otro lazo con G<sub>1</sub> y realimentación unitaria. Primero se reduce el interno: G<sub>i</sub> = G<sub>2</sub>/(1 + G<sub>2</sub>·H<sub>2</sub>). Después, el externo: M = G<sub>1</sub>·G<sub>i</sub>/(1 + G<sub>1</sub>·G<sub>i</sub>). Simplificando: M = G<sub>1</sub>·G<sub>2</sub>/(1 + G<sub>2</sub>·H<sub>2</sub> + G<sub>1</sub>·G<sub>2</sub>). Este tipo de ejercicios es muy habitual en las pruebas de acceso a la universidad.",
    ], svg: pasos("Método para reducir un diagrama de bloques: bloques en serie y en paralelo, lazos internos, traslado de puntos de suma o bifurcación y lazo externo", ["Agrupar serie y paralelo", "Reducir lazos internos", "Trasladar puntos si hace falta", "Lazo externo: G/(1+GH)"], "var(--pen)") }),
    bloque({ h: "12.9 Respuesta temporal", p: [
      "Para estudiar cómo responde un sistema se le aplica una señal de prueba, normalmente un <b>escalón</b> (un cambio brusco de la consigna). La respuesta tiene un <b>régimen transitorio</b>, mientras la salida evoluciona, y un <b>régimen permanente</b>, cuando se estabiliza.",
      "Un <b>sistema de primer orden</b>, G(s) = K/(τ·s + 1), responde a un escalón de amplitud A con una exponencial: y(t) = K·A·(1 − e<sup>−t/τ</sup>). La <mark>constante de tiempo</mark> τ indica la rapidez: en t = τ la salida alcanza el 63,2 % del valor final; en 3τ, el 95 %, y en 4τ, el 98 %. No sobrepasa nunca el valor final. Ejemplo: con K = 2, τ = 0,5 s y un escalón de 3, el valor final es 6; en 0,5 s vale 3,79, y el tiempo de establecimiento (al 2 %) es 4τ = 2 s. Un circuito RC con R = 10 kΩ y C = 100 µF tiene τ = R·C = 1 s.",
      "Un <b>sistema de segundo orden</b>, G(s) = K·ω<sub>n</sub>²/(s² + 2ζω<sub>n</sub>·s + ω<sub>n</sub>²), depende del <b>coeficiente de amortiguamiento</b> ζ. Si ζ > 1 (sobreamortiguado), la respuesta es lenta y sin oscilaciones; si ζ = 1 (amortiguamiento crítico), es la más rápida sin sobrepasar; y si 0 < ζ < 1 (subamortiguado), sobrepasa el valor final y oscila antes de estabilizarse. Se caracteriza con la <b>sobreoscilación</b> máxima (en %), el tiempo de pico, el tiempo de subida y el tiempo de establecimiento. Una suspensión de coche es un sistema de segundo orden: si los amortiguadores están gastados (ζ pequeño), el coche rebota.",
    ], svg: respuestaSVG }),
    bloque({ h: "12.10 Error en régimen permanente", p: [
      "La <b>precisión</b> de un sistema de control se mide por el <mark>error en régimen permanente</mark> (o estacionario): la diferencia entre la consigna y la salida cuando ha pasado el transitorio. Con realimentación unitaria, la transformada del error es E(s) = R(s)/(1 + G(s)), y aplicando el teorema del valor final se calcula su valor límite.",
      "Para una entrada en escalón unitario, si G(s) no tiene polos en el origen (sistema de <b>tipo 0</b>), el error es e<sub>ss</sub> = 1/(1 + K<sub>p</sub>), con K<sub>p</sub> = G(0) la ganancia estática. Por ejemplo, con G(s) = 10/(s + 2), K<sub>p</sub> = 5 y e<sub>ss</sub> = 1/6 = 0,167: la salida se queda en el 83,3 % de la consigna. Aumentando la ganancia se reduce el error, pero nunca se anula, y una ganancia demasiado alta puede producir oscilaciones o inestabilidad.",
      "Si G(s) tiene un polo en el origen (un <b>integrador</b>, factor 1/s; sistema de <b>tipo 1</b>), el error ante un escalón es <b>nulo</b>. Por eso los controladores incluyen una acción integral cuando se necesita precisión: el integrador sigue actuando mientras exista el más pequeño error. Ante una rampa, un sistema de tipo 1 tiene un error constante y uno de tipo 2 lo anula.",
    ], svg: rejilla("Error en régimen permanente ante un escalón según el tipo de sistema: en tipo 0 el error es uno entre uno más la ganancia estática; en tipo 1 o superior es nulo", ["Tipo de G(s)", "Error ante escalón", "Error ante rampa"], [["Tipo 0", "1/(1 + Kp)", "∞"], ["Tipo 1 (1/s)", "0", "1/Kv"], ["Tipo 2 (1/s²)", "0", "0"]], "var(--red)") }),
    bloque({ h: "12.11 Estabilidad", p: [
      "Un sistema es <mark>estable</mark> si, ante una entrada acotada (por ejemplo, un escalón), su salida también permanece acotada y tiende a un valor fijo. Si la salida crece sin límite u oscila con amplitud creciente, es <b>inestable</b>, lo que en la práctica puede romper la máquina. La condición es sencilla: un sistema lineal es estable si y solo si <b>todos los polos</b> de su función de transferencia en lazo cerrado tienen <b>parte real negativa</b> (están en el semiplano izquierdo del plano complejo).",
      "Calcular las raíces de un polinomio de orden alto es difícil. El <b>criterio de Routh</b> (o de Routh-Hurwitz) permite saber cuántas raíces tienen parte real positiva sin calcularlas. Se construye una tabla con los coeficientes de la ecuación característica: en las dos primeras filas se colocan alternadamente los coeficientes, y cada fila siguiente se calcula con las dos anteriores mediante determinantes. El sistema es estable si <b>todos los elementos de la primera columna</b> tienen el mismo signo; el número de cambios de signo es el número de polos inestables.",
      "Ejemplo: un sistema con G(s) = K/(s·(s + 1)·(s + 2)) y realimentación unitaria tiene la ecuación característica s³ + 3s² + 2s + K = 0. Tabla de Routh: fila s³: 1, 2; fila s²: 3, K; fila s¹: (3·2 − K)/3; fila s⁰: K. Para que todos sean positivos: K > 0 y 6 − K > 0. El sistema es estable si <b>0 < K < 6</b>. Con K = 6 oscila de forma mantenida (límite de estabilidad), y con K > 6 es inestable. Es el compromiso habitual: más ganancia da más precisión y rapidez, pero menos estabilidad.",
    ], svg: rejilla("Tabla de Routh de la ecuación s al cubo más 3 s al cuadrado más 2 s más K: el sistema es estable si K está entre 0 y 6", ["Fila", "Columna 1", "Columna 2"], [["s³", "1", "2"], ["s²", "3", "K"], ["s¹", "(6 − K)/3", "0"], ["s⁰", "K", ""]], "var(--leaf)"), video: V("ct-routh", "Criterio de estabilidad de Routh", "criterio de estabilidad de Routh") }),
    bloque({ h: "12.12 Tipos de controladores", p: [
      "El <b>controlador todo o nada</b> (o de dos posiciones) conecta el actuador al máximo cuando el error es positivo y lo desconecta cuando es negativo, como un termostato con un relé. Para evitar que conmute continuamente alrededor de la consigna, se le añade una <b>histéresis</b>: conecta la calefacción al bajar de 19 °C y la desconecta al superar 21 °C. Es sencillo y barato, pero la variable oscila continuamente.",
      "Los controladores continuos aplican una acción proporcional a distintas funciones del error. El <b>proporcional (P)</b>: u = K<sub>p</sub>·e. Es rápido, pero deja un error estacionario en los sistemas de tipo 0. El <b>proporcional-integral (PI)</b> añade un término proporcional a la integral del error, que lo anula en régimen permanente, aunque puede hacer el sistema más lento y oscilante. El <b>proporcional-derivativo (PD)</b> añade un término proporcional a la derivada del error, que «anticipa» su evolución y reduce la sobreoscilación, pero amplifica el ruido.",
      "El <mark>controlador PID</mark> combina las tres acciones y es, con diferencia, el más usado en la industria:",
      formula("u(t) = K<sub>p</sub>·e(t) + K<sub>i</sub>·∫e(t) dt + K<sub>d</sub>·de(t)/dt &nbsp;&nbsp; G<sub>c</sub>(s) = K<sub>p</sub> + K<sub>i</sub>/s + K<sub>d</sub>·s"),
      "Una forma intuitiva de verlo: la acción P responde al error <b>presente</b>, la I al error <b>pasado</b> (acumulado) y la D al error <b>futuro</b> (tendencia).",
    ], svg: histeresisSVG, video: V("ct-pid", "Control PID: una breve introducción", "controlador PID explicación") }),
    bloque({ h: "12.13 Ajuste del PID y control digital", p: [
      "<b>Sintonizar</b> un PID es elegir K<sub>p</sub>, K<sub>i</sub> y K<sub>d</sub> para obtener una respuesta rápida, precisa, con poca sobreoscilación y estable. Un procedimiento práctico es: empezar solo con P y subir K<sub>p</sub> hasta obtener una respuesta rápida con alguna oscilación; añadir la acción I hasta eliminar el error estacionario; y añadir D para amortiguar las oscilaciones. El método de <b>Ziegler-Nichols</b> da valores iniciales a partir de la ganancia crítica (la que hace oscilar al sistema con solo P) y del periodo de esa oscilación.",
      "Hoy, casi todos los controladores son <b>digitales</b>: un microcontrolador o un autómata lee el sensor con un conversor A/D a intervalos regulares (el <b>periodo de muestreo</b>), calcula la acción de control con un programa y la aplica con un conversor D/A o una salida <b>PWM</b> (modulación por ancho de pulso). La integral se aproxima por una suma y la derivada por una diferencia: u<sub>k</sub> = K<sub>p</sub>·e<sub>k</sub> + K<sub>i</sub>·T·Σe + K<sub>d</sub>·(e<sub>k</sub> − e<sub>k−1</sub>)/T.",
      "El periodo de muestreo debe ser mucho menor que las constantes de tiempo del sistema (como regla, al menos 10 veces menor). Hay que tener cuidado con la <b>saturación</b> del actuador: si el integrador sigue acumulando error mientras el actuador está al máximo, al alcanzar la consigna se produce una gran sobreoscilación (efecto <i>windup</i>), que se evita limitando la integral.",
    ], svg: pasos("Ajuste práctico de un controlador PID: empezar solo con la acción proporcional, añadir la integral para anular el error, añadir la derivada para amortiguar y comprobar con perturbaciones", ["Solo P: subir Kp", "Añadir I: anula el error", "Añadir D: amortigua", "Probar con perturbaciones"], "var(--red)") }),
    bloque({ h: "12.14 Aplicaciones del control automático", p: [
      "El <b>control de temperatura</b> de un horno, una incubadora o una impresora 3D usa un sensor (termopar o NTC), un controlador PID y un actuador (una resistencia gobernada por un relé de estado sólido con PWM). El <b>control de velocidad</b> de un motor usa un encoder o una dinamo tacométrica y un variador que ajusta la tensión o la frecuencia. El <b>control de posición</b> de un servomotor, un brazo robótico o una máquina CNC compara la posición medida por un encoder con la deseada.",
      "En los vehículos, el control de crucero adaptativo mantiene la velocidad y la distancia con el coche de delante (con un radar), el ABS regula el frenado para que las ruedas no se bloqueen y el control de estabilidad corrige los derrapes. En aviación, el piloto automático controla la altitud, el rumbo y la velocidad, y los drones se mantienen estables gracias a controladores PID que corrigen cientos de veces por segundo la velocidad de cada hélice a partir de sus giróscopos y acelerómetros.",
      "En la industria, el control de procesos regula niveles, caudales, presiones y composiciones, y en los edificios inteligentes se controlan la climatización, la iluminación y la ventilación para ahorrar energía. Un buen control no solo mejora la calidad, sino que también reduce el consumo energético y aumenta la seguridad, aunque exige prever qué pasa si un sensor falla (diseño a prueba de fallos y redundancia).",
    ], svg: figura("Aplicaciones del control", "Del horno al dron", [["Temperatura", "horno, impresora 3D", "termopar + PID + PWM"], ["Velocidad", "motores, crucero", "encoder + variador"], ["Posición", "robots, CNC", "servomotor"], ["Vehículos", "ABS, dron", "giróscopos + PID"]], "var(--leaf)") }),
  ],
  figura: figura("Control automático", "Medir, comparar y actuar", [["Lazo cerrado", "e = r − y", "realimentación"], ["Modelo", "Laplace", "G(s) = Y/X"], ["Análisis", "G/(1 + GH)", "τ · error · Routh"], ["Control", "todo o nada", "P · PI · PID"]], "var(--pen)"),
  video: V("ct-pid", "Control PID: una breve introducción", "controlador PID explicación"),
  ejemplos: [
    { enunciado: "Identifica los elementos del control de temperatura de un horno eléctrico con termostato.", pasos: ["Consigna: la temperatura elegida en el mando (transductor de entrada).", "Sensor: termopar o bimetal; comparador y regulador: el termostato.", "Actuador: el relé y la resistencia; planta: el horno; perturbaciones: abrir la puerta, meter comida fría."], resultado: "Sistema de control en lazo cerrado todo o nada." },
    { enunciado: "Calcula la función de transferencia en lazo cerrado de un sistema con G(s) = 10/(s + 2) y realimentación unitaria, y su valor final ante un escalón unitario.", pasos: ["M(s) = G/(1 + G) = [10/(s + 2)]/[(s + 12)/(s + 2)] = 10/(s + 12).", "Valor final: M(0) = 10/12 = 0,833.", "Error: 1 − 0,833 = 0,167 = 1/(1 + K<sub>p</sub>), con K<sub>p</sub> = G(0) = 5."], resultado: "M(s) = 10/(s + 12); salida final 0,833 y error 0,167." },
    { enunciado: "Reduce el diagrama: G₁ = 2 en serie con G₂ = 1/(s + 1), con realimentación unitaria.", pasos: ["Serie: G = 2/(s + 1).", "Lazo: M = G/(1 + G) = 2/(s + 1 + 2).", "M(s) = 2/(s + 3)."], resultado: "M(s) = 2/(s + 3), con ganancia estática 2/3." },
    { enunciado: "Un sistema de primer orden con K = 2 y τ = 0,5 s recibe un escalón de amplitud 3. Calcula el valor final, la salida en t = τ y el tiempo de establecimiento al 2 %.", pasos: ["Valor final: K·A = 6.", "En t = τ: 6 · 0,632 = 3,79.", "t<sub>s</sub> (2 %) ≈ 4τ = 2 s."], resultado: "6; 3,79; 2 s." },
    { enunciado: "Determina para qué valores de K es estable el sistema G(s) = K/(s(s + 1)(s + 2)) con realimentación unitaria.", pasos: ["Ecuación característica: s³ + 3s² + 2s + K = 0.", "Routh: 1, 2 | 3, K | (6 − K)/3 | K.", "Primera columna positiva: K > 0 y K < 6."], resultado: "Estable para 0 < K < 6." },
    { enunciado: "Un termostato todo o nada con consigna 20 °C tiene una histéresis de ±1 °C. Describe su funcionamiento.", pasos: ["Conecta la calefacción cuando T baja de 19 °C.", "La desconecta cuando T supera 21 °C.", "Entre 19 y 21 °C mantiene el estado anterior (memoria)."], resultado: "La temperatura oscila entre 19 y 21 °C, sin conmutaciones continuas." },
  ],
  errores: [
    "Confundir lazo abierto con «sistema manual»: un sistema automático puede ser de lazo abierto si no mide la salida.",
    "Escribir M = G/(1 − G·H) con realimentación negativa: el signo del denominador es más.",
    "Multiplicar bloques en paralelo o sumar bloques en serie: es al revés.",
    "Pensar que aumentando la ganancia proporcional se elimina el error estacionario: solo se reduce; para anularlo hace falta acción integral.",
    "Considerar estable un sistema porque un polo tiene parte real nula: queda en el límite de estabilidad (oscila).",
    "Aplicar el criterio de Routh a la función de lazo abierto en lugar de a la ecuación característica 1 + G·H = 0.",
  ],
  ejercicios: [
    B("Clasifica en lazo abierto o cerrado: tostadora con temporizador, cisterna con boya, alumbrado con reloj, alumbrado con sensor de luz, control de crucero.", "Abierto: tostadora, alumbrado con reloj. Cerrado: cisterna, alumbrado con sensor de luz (si mide la luz que resulta), control de crucero."),
    B("Identifica consigna, sensor, actuador y planta en el control de nivel de una cisterna.", "Consigna: altura de la boya ajustada. Sensor: la boya. Actuador: la válvula de entrada. Planta: el depósito."),
    B("¿Qué es la realimentación negativa y por qué es útil?", "Restar la salida medida a la consigna para obtener el error; permite corregir perturbaciones y variaciones de la planta."),
    B("Nombra un sensor para medir: temperatura de un horno de 800 °C, distancia a un obstáculo, luz ambiente y velocidad de un eje.", "Termopar; ultrasonidos o infrarrojos; LDR; encoder o dinamo tacométrica."),
    B("¿Qué transformada de Laplace tiene un escalón de amplitud 5? ¿Y la función e<sup>−3t</sup>?", "5/s; 1/(s + 3)."),
    B("Calcula la constante de tiempo de un circuito RC con R = 4,7 kΩ y C = 220 µF.", "τ = 1,03 s."),
    B("Reduce: tres bloques en serie G₁ = 2, G₂ = 3/(s + 1), G₃ = 1/s.", "G = 6/(s(s + 1))."),
    B("Reduce: G₁ = 1/(s + 1) en paralelo con G₂ = 2 (salidas sumadas).", "G = 1/(s + 1) + 2 = (2s + 3)/(s + 1)."),
    B("Calcula M para G = 50 y H = 0,1.", "M = 50/(1 + 5) = 8,33 (≈ 1/H = 10 si G fuera muy grande)."),
    B("¿Es estable un sistema con polos en −2, −3 y −1 ± 2j? ¿Y con polos en −1 y +0,5?", "El primero sí (todos con parte real negativa). El segundo no (polo en +0,5)."),
    B("¿Qué ventaja tiene añadir histéresis a un termostato?", "Evita que el relé conmute continuamente alrededor de la consigna (desgaste y ruido)."),
    B("Indica qué acción del PID elimina el error estacionario y cuál reduce la sobreoscilación.", "La integral elimina el error; la derivativa reduce la sobreoscilación."),
    M("Obtén la función de transferencia de un circuito RC (salida en el condensador) a partir de su ecuación diferencial.", "RC·dv<sub>c</sub>/dt + v<sub>c</sub> = v<sub>e</sub> → RC·s·V<sub>c</sub> + V<sub>c</sub> = V<sub>e</sub> → G(s) = 1/(RC·s + 1)."),
    M("Calcula la función de transferencia en lazo cerrado de G(s) = 4/(s(s + 2)) con realimentación unitaria. ¿Cuáles son sus polos?", "M = 4/(s² + 2s + 4). Polos: −1 ± j1,73 (subamortiguado, estable)."),
    M("Reduce un diagrama con G₁ = K en serie con un lazo interno formado por G₂ = 1/(s + 1) y H₂ = 2, todo con realimentación unitaria.", "Lazo interno: 1/(s + 3). Serie: K/(s + 3). Lazo externo: M = K/(s + 3 + K)."),
    M("En el sistema anterior, ¿qué K hace que el error estacionario ante un escalón sea del 10 %?", "e = 1/(1 + K/3) = 0,1 → K/3 = 9 → K = 27."),
    M("Un sistema tiene G(s) = 20/(s + 4) con realimentación unitaria. Calcula el valor final de la salida ante un escalón de 2 y el error.", "M = 20/(s + 24); y(∞) = 2 · 20/24 = 1,67. Error = 0,33 (16,7 %)."),
    M("Un sistema de primer orden alcanza el 63,2 % de su valor final en 3 s. ¿Cuánto tarda en llegar al 98 %?", "τ = 3 s; 4τ = 12 s."),
    M("Aplica el teorema del valor final a Y(s) = 5/(s(s + 2)).", "lím s·Y(s) cuando s → 0 = 5/2 = 2,5."),
    M("Estudia con Routh la estabilidad de s³ + 2s² + 3s + 10 = 0.", "Filas: 1, 3 | 2, 10 | (6 − 10)/2 = −2 | 10. Dos cambios de signo: dos polos inestables. Inestable."),
    M("Estudia con Routh la estabilidad de s³ + 4s² + 5s + 2 = 0.", "Filas: 1, 5 | 4, 2 | (20 − 2)/4 = 4,5 | 2. Sin cambios de signo: estable (polos en −1, −1, −2)."),
    M("Un controlador P con K<sub>p</sub> = 4 controla una planta G(s) = 3/(2s + 1) con realimentación unitaria. Calcula M(s), la constante de tiempo en lazo cerrado y el error estacionario.", "M = 12/(2s + 13) = 0,923/(0,154s + 1). τ = 0,154 s (la planta tenía 2 s: el lazo cerrado es mucho más rápido). Error = 1/13 = 7,7 %."),
    M("¿Qué ocurre con el error estacionario del sistema anterior si se usa un controlador PI?", "La acción integral añade un polo en el origen (tipo 1): el error ante un escalón se anula."),
    A("Reduce el diagrama: G₁ y G₂ en serie en el camino directo, un lazo interno con H₁ que va de la salida de G₂ a la entrada de G₂, y una realimentación unitaria exterior.", "Lazo interno: G₂/(1 + G₂H₁). Serie: G₁G₂/(1 + G₂H₁). Exterior: M = G₁G₂/(1 + G₂H₁ + G₁G₂)."),
    A("Calcula el rango de K para el que es estable G(s) = K/((s + 1)(s + 2)(s + 3)) con realimentación unitaria.", "Ecuación: s³ + 6s² + 11s + 6 + K = 0. Routh: 1, 11 | 6, 6 + K | (66 − 6 − K)/6 | 6 + K. Estable si −6 < K < 60 (con K > 0 en la práctica: 0 < K < 60)."),
    A("Para el sistema anterior con K = 60, ¿qué ocurre? Calcula la frecuencia de la oscilación.", "Límite de estabilidad: fila auxiliar 6s² + 66 = 0 → s = ±j√11 = ±j3,32 rad/s. Oscila de forma mantenida a ω = 3,32 rad/s (0,53 Hz)."),
    A("Un sistema de segundo orden tiene M(s) = 25/(s² + 4s + 25). Calcula ω<sub>n</sub>, ζ y di si sobreoscila.", "ω<sub>n</sub> = 5 rad/s; 2ζω<sub>n</sub> = 4 → ζ = 0,4. Subamortiguado: sobreoscila (Mp = e^(−πζ/√(1−ζ²)) = 25 %)."),
    A("Un motor de continua tiene G(s) = 50/(0,2s + 1) (rpm por voltio). Con realimentación de un tacómetro de H = 0,02 V/rpm y un controlador P de K<sub>p</sub> = 5, calcula la velocidad final para una consigna de 6 V y la constante de tiempo en lazo cerrado.", "G·H(0) = 5 · 50 · 0,02 = 5. M(0) = 5 · 50/(1 + 5) = 41,7 rpm/V → 250 rpm. M(s) = 250/(0,2s + 6) → τ = 0,2/6 = 0,033 s."),
    A("Un PID digital se ejecuta cada 10 ms. Con K<sub>p</sub> = 2, K<sub>i</sub> = 5 s<sup>−1</sup> y K<sub>d</sub> = 0,1 s, calcula la acción de control si e<sub>k</sub> = 0,5, e<sub>k−1</sub> = 0,6 y la suma acumulada de errores (incluido e<sub>k</sub>) es 20.", "P = 1; I = 5 · 0,01 · 20 = 1; D = 0,1 · (0,5 − 0,6)/0,01 = −1. u = 1 + 1 − 1 = 1."),
    A("Diseña el control de temperatura de una incubadora de huevos (37,5 ± 0,2 °C): elige sensor, controlador y actuador, dibuja el diagrama de bloques y justifica si usarías todo o nada o PID.", "Sensor: NTC o sonda digital calibrada. Controlador: microcontrolador con PID (la tolerancia de ±0,2 °C es demasiado estrecha para un todo o nada con histéresis). Actuador: resistencia con relé de estado sólido y PWM, y ventilador. Perturbaciones: apertura de la puerta, temperatura exterior. Seguridad: termostato de corte independiente."),
  ],
  quiz: [
    q4("La consigna es…", ["la salida", "el valor deseado de la salida", "una perturbación", "el error"], 1, "Referencia."),
    q4("Un sistema de lazo cerrado se caracteriza por…", ["no tener sensor", "medir la salida y compararla", "ser manual", "no tener actuador"], 1, "Realimentación."),
    q4("El error es…", ["r + y", "r − y", "y − r siempre", "r · y"], 1, "Consigna menos medida."),
    q4("El elemento que actúa con energía sobre la planta es…", ["el sensor", "el comparador", "el actuador", "la consigna"], 2, "Motor, válvula, resistencia."),
    q4("Una NTC…", ["aumenta su resistencia con la temperatura", "disminuye su resistencia con la temperatura", "mide luz", "mide distancia"], 1, "Coeficiente negativo."),
    q4("La transformada de un escalón unitario es…", ["1", "1/s", "s", "1/s²"], 1, "Tabla."),
    q4("La transformada de la derivada de f(t) es…", ["F(s)/s", "s·F(s)", "F(s)", "s²"], 1, "Condiciones iniciales nulas."),
    q4("La función de transferencia es…", ["X/Y", "Y(s)/X(s)", "Y·X", "Y − X"], 1, "Salida entre entrada."),
    q4("Dos bloques en serie equivalen a…", ["la suma", "el producto", "el cociente", "la diferencia"], 1, "G₁·G₂."),
    q4("Un lazo con realimentación negativa equivale a…", ["G/(1 − GH)", "G/(1 + GH)", "G·H", "1 + GH"], 1, "Fórmula fundamental."),
    q4("Si G es muy grande, M ≈", ["G", "H", "1/H", "0"], 2, "Insensible a la planta."),
    q4("En un sistema de primer orden, en t = τ la salida alcanza el…", ["50 %", "63,2 %", "95 %", "100 %"], 1, "1 − e⁻¹."),
    q4("Un sistema de segundo orden subamortiguado…", ["no sobrepasa nunca", "sobreoscila", "es inestable", "es de primer orden"], 1, "0 < ζ < 1."),
    q4("El error ante escalón de un sistema de tipo 0 es…", ["0", "1/(1 + Kp)", "∞", "Kp"], 1, "Se reduce al aumentar Kp."),
    q4("Un sistema es estable si sus polos…", ["son positivos", "tienen parte real negativa", "son imaginarios", "son nulos"], 1, "Semiplano izquierdo."),
    q4("En el criterio de Routh se observa…", ["la última fila", "la primera columna", "la diagonal", "la suma"], 1, "Cambios de signo."),
    q4("El control todo o nada con histéresis…", ["no oscila", "oscila entre dos límites", "anula el error", "es de tipo PID"], 1, "Termostato."),
    q4("La acción integral…", ["anula el error estacionario", "reduce el ruido", "hace el sistema más rápido siempre", "es la derivada"], 0, "Acumula el error."),
    q4("La acción derivativa responde…", ["al error pasado", "al error presente", "a la tendencia del error", "a la consigna"], 2, "Anticipa."),
    q4("Una salida PWM regula…", ["la frecuencia del reloj", "la potencia media variando el ancho de pulso", "la resistencia", "la temperatura directamente"], 1, "Modulación por ancho de pulso."),
  ],
  examen: [
    q4("G = 9, H = 1. M =", ["0,9", "9", "0,1", "10"], 0, "9/10."),
    q4("G(s) = 4/(s + 1), H = 1. M(s) =", ["4/(s + 5)", "4/(s + 1)", "4/(s + 4)", "1/(s + 5)"], 0, "4/(s + 1 + 4)."),
    q4("En el sistema anterior, error ante escalón unitario:", ["0,2", "0,8", "0", "0,25"], 0, "1/(1 + 4)."),
    q4("Primer orden con τ = 2 s. Tiempo al 98 %:", ["2 s", "4 s", "6 s", "8 s"], 3, "4τ."),
    q4("Valor final de Y(s) = 6/(s(s + 3)):", ["6", "2", "3", "0"], 1, "6/3."),
    q4("s² + 5s + 6 = 0 tiene polos en…", ["2 y 3", "−2 y −3", "−1 y −6", "1 y 6"], 1, "Estable."),
    q4("s³ + s² + 2s + 8: primera columna de Routh:", ["1, 1, −6, 8", "1, 1, 6, 8", "1, 2, 8, 0", "todo positivo"], 0, "(2 − 8)/1 = −6: inestable."),
    q4("G(s) = K/(s(s+1)(s+2)) es estable si…", ["K > 6", "0 < K < 6", "K < 0", "siempre"], 1, "Routh."),
  ],
  feynman: ["Qué diferencia hay entre un sistema en lazo abierto y uno en lazo cerrado", "Qué hace cada bloque de un sistema de control", "Por qué la realimentación hace que el sistema dependa poco de la planta", "Qué significa que un sistema sea estable y cómo se comprueba", "Qué hace cada acción de un controlador PID"],
  glosario: [
    ["Consigna", "Valor deseado de la variable controlada."],
    ["Perturbación", "Señal no deseada que altera la salida del sistema."],
    ["Lazo abierto", "Sistema en el que la acción de control no depende de la salida."],
    ["Lazo cerrado", "Sistema que mide la salida y la compara con la consigna."],
    ["Realimentación negativa", "Resta de la salida medida a la consigna para obtener el error."],
    ["Comparador", "Elemento que calcula el error restando la señal medida a la consigna."],
    ["Regulador", "Elemento que decide la acción de control a partir del error."],
    ["Actuador", "Elemento que actúa sobre la planta con la energía necesaria."],
    ["Captador", "Sensor que mide la variable controlada."],
    ["Transformada de Laplace", "Herramienta que convierte ecuaciones diferenciales en algebraicas."],
    ["Función de transferencia", "Cociente entre las transformadas de la salida y la entrada."],
    ["Polo", "Raíz del denominador de la función de transferencia."],
    ["Constante de tiempo", "Tiempo en que un sistema de primer orden alcanza el 63,2 % de su valor final."],
    ["Error estacionario", "Diferencia entre consigna y salida en régimen permanente."],
    ["Estabilidad", "Propiedad de un sistema cuya salida permanece acotada ante entradas acotadas."],
    ["Criterio de Routh", "Método para saber si un sistema es estable sin calcular sus polos."],
    ["Controlador PID", "Controlador con acciones proporcional, integral y derivativa."],
    ["Histéresis", "Diferencia entre los umbrales de conexión y desconexión."],
  ],
  situacion: {
    titulo: "El ventilador que mantiene la temperatura",
    reto: "Vuestro equipo construirá un pequeño sistema de control de temperatura con un microcontrolador, un sensor, una resistencia calefactora y un ventilador, y comparará el control todo o nada con un control PID ajustado por vosotros.",
    pasos: [
      "Dibujad el diagrama de bloques e identificad consigna, sensor, regulador, actuadores, planta y perturbaciones.",
      "Montad el sistema y registrad la respuesta en lazo abierto a un escalón de potencia para estimar la constante de tiempo.",
      "Programad un control todo o nada con histéresis y registrad la oscilación de la temperatura.",
      "Programad un PID, ajustadlo por pasos (P, después I, después D) y comparad sobreoscilación, error y tiempo de establecimiento.",
      "Aplicad una perturbación (abrir una tapa, soplar) y analizad cómo responde cada controlador.",
    ],
    producto: "El prototipo, las gráficas de las respuestas y un informe que compare los dos controladores con datos.",
    evaluacion: [
      "Identifica correctamente los elementos del sistema de control.",
      "Obtiene la constante de tiempo y la relaciona con un modelo de primer orden.",
      "Ajusta el PID de forma justificada.",
      "Compara los controladores con datos medidos.",
    ],
  },
  mapa: mapaB("CONTROL AUTOMÁTICO", [
    ["Sistemas", "lazo abierto · lazo cerrado · elementos", "var(--pen)"],
    ["Modelado", "Laplace · G(s) · bloques", "var(--red)"],
    ["Análisis", "respuesta · error · estabilidad", "var(--leaf)"],
    ["Controladores", "todo o nada · P · PI · PID", "var(--inf)"],
  ]),
  tarjetas: [
    ["Error", "e = r − y"],
    ["Lazo cerrado", "M = G / (1 + G·H)"],
    ["Serie y paralelo", "G₁·G₂ ; G₁ ± G₂"],
    ["Escalón y rampa", "1/s ; 1/s²"],
    ["Derivada e integral", "s·F(s) ; F(s)/s"],
    ["Valor final", "lím s·F(s) cuando s → 0"],
    ["Primer orden", "K/(τs + 1) ; 63,2 % en τ"],
    ["Error tipo 0", "1/(1 + Kp)"],
    ["Estabilidad", "polos con parte real negativa"],
    ["Routh", "sin cambios de signo en la 1.ª columna"],
    ["PID", "Kp·e + Ki·∫e + Kd·de/dt"],
    ["Histéresis", "conecta y desconecta en umbrales distintos"],
  ],
  familias: [
    "Buscad en casa tres sistemas de control (termostato, cisterna, frigorífico) e identificad su sensor y su actuador.",
    "Observad cuánto oscila la temperatura de casa con la calefacción encendida y relacionadlo con la histéresis.",
    "Intentad mantener un palo vertical en la palma de la mano: sois un controlador en lazo cerrado.",
    "Comentad qué ocurre en la ducha cuando alguien abre otro grifo: ¿cómo corregís la perturbación?",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas automáticos»: sistemas de control en lazo abierto y cerrado; elementos y diagramas de bloques; transductores y captadores; función de transferencia y transformada de Laplace; álgebra de bloques; respuesta temporal, error y estabilidad; tipos de controladores.`,
    ideas: [
      "Modelado y simulación de lazos de control con hojas de cálculo o simuladores en línea.",
      "Control de temperatura o de luz con Arduino comparando todo o nada y PID.",
      "Análisis de la estabilidad con Routh y comprobación por simulación al variar la ganancia.",
      "Robot seguidor de línea con control proporcional y ajuste experimental de la ganancia.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Sistema de control, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_de_control" },
    { t: "Controlador PID, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Controlador_PID" },
    { t: "Criterio de estabilidad de Routh-Hurwitz, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Criterio_de_Routh-Hurwitz" },
  ],
  revisado: "2026-11-21",
};
