// Tecnología e Ingeniería II 2º Bachillerato · Tema 6. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, flecha, ficha, pasos, compara, rejilla, barras, graf, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

const G = 1.4;
const px = (x) => 40 + x * 200, py = (y) => 145 - y * 115;
// Curva p·V^k = cte entre x0 y x1 que pasa por (xa, ya).
const politropa = (xa, ya, x0, x1, k = G, n = 14) => Array.from({ length: n + 1 }, (_, i) => { const x = x0 + ((x1 - x0) * i) / n; return [x, ya * Math.pow(xa / x, k)]; });
const punto = (x, y, t, dx = 8, dy = -6) => `<circle cx="${px(x).toFixed(1)}" cy="${py(y).toFixed(1)}" r="4" fill="var(--ink)"/>${T((px(x) + dx).toFixed(1), (py(y) + dy).toFixed(1), t, { fs: 11.5, b: true })}`;

// Transformaciones del gas ideal en el diagrama p-V.
const transfSVG = graf("Diagrama presión-volumen con las cuatro transformaciones desde un mismo punto: isocórica vertical, isobárica horizontal, isotérmica y adiabática, más inclinada que la isotérmica", "V", "p", [
  { p: [[0.25, 0.15], [0.25, 0.95]], c: "var(--red)", t: "" },
  { p: [[0.25, 0.75], [0.95, 0.75]], c: "var(--pen)", t: "" },
  { p: politropa(0.25, 0.75, 0.25, 0.95, 1), c: "var(--leaf)", t: "" },
  { p: politropa(0.25, 0.75, 0.25, 0.95, G), c: "var(--inf)", t: "" },
], `${T(52, 30, "isocórica", { fs: 10.5, b: true, c: "var(--red)", a: "start" })}${T(236, 50, "isobárica", { fs: 10.5, b: true, c: "var(--pen)", a: "end" })}${T(150, 88, "isotérmica", { fs: 10.5, b: true, c: "var(--leaf)", a: "start" })}${T(112, 140, "adiabática", { fs: 10.5, b: true, c: "var(--inf)", a: "start" })}<circle cx="${px(0.25)}" cy="${py(0.75).toFixed(1)}" r="4" fill="var(--ink)"/>`);

// Máquina térmica entre dos focos.
const maquinaSVG = (() => {
  const id = uid("mq");
  return marco("Esquema de una máquina térmica: toma un calor Q1 del foco caliente, produce un trabajo W y cede un calor Q2 al foco frío", `
  <rect x="60" y="10" width="140" height="30" rx="8" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2"/>${T(130, 30, "Foco caliente T₁", { fs: 11.5, b: true, c: "var(--red)" })}
  <circle cx="130" cy="92" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>${T(130, 96, "motor", { fs: 11, b: true })}
  <rect x="60" y="144" width="140" height="30" rx="8" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/>${T(130, 164, "Foco frío T₂", { fs: 11.5, b: true, c: "var(--pen)" })}
  <path d="M130 40 V 62" stroke="var(--red)" stroke-width="3" marker-end="url(#${id})"/>${T(140, 56, "Q₁", { fs: 12, b: true, c: "var(--red)", a: "start" })}
  <path d="M130 118 V 140" stroke="var(--pen)" stroke-width="3" marker-end="url(#${id})"/>${T(140, 134, "Q₂", { fs: 12, b: true, c: "var(--pen)", a: "start" })}
  <path d="M156 92 H 214" stroke="var(--leaf)" stroke-width="3" marker-end="url(#${id})"/>${T(232, 96, "W", { fs: 13, b: true, c: "var(--leaf)" })}
  ${T(40, 96, "W = Q₁ − Q₂", { fs: 10.5, b: true, c: "var(--muted)" })}`, flecha(id, "var(--ink)"));
})();

// Ciclo de Carnot en el diagrama T-S.
const carnotSVG = marco("Ciclo de Carnot en el diagrama temperatura-entropía: un rectángulo entre la temperatura T1 y la T2; el área encerrada es el trabajo", `
  <path d="M40 30 V 150 H 244" fill="none" stroke="var(--muted)" stroke-width="2"/>${T(30, 26, "T", { fs: 12, b: true, c: "var(--muted)" })}${T(244, 166, "S", { fs: 12, b: true, c: "var(--muted)" })}
  <rect x="80" y="44" width="130" height="70" fill="var(--leaf)" fill-opacity=".18"/><rect x="80" y="114" width="130" height="36" fill="var(--pen)" fill-opacity=".12"/>
  <path d="M80 44 H 210 V 114 H 80 Z" fill="none" stroke="var(--red)" stroke-width="3"/>
  ${T(145, 38, "isoterma T₁ (absorbe Q₁)", { fs: 10, b: true, c: "var(--red)" })}${T(145, 128, "isoterma T₂ (cede Q₂)", { fs: 10, b: true, c: "var(--pen)" })}
  ${T(145, 84, "W = Q₁ − Q₂", { fs: 12, b: true, c: "var(--leaf)" })}${T(145, 144, "Q₂", { fs: 10, c: "var(--pen)" })}
  ${T(72, 84, "adiab.", { fs: 9.5, a: "end", c: "var(--muted)" })}${T(218, 84, "adiab.", { fs: 9.5, a: "start", c: "var(--muted)" })}
  ${T(145, 174, "η = 1 − T₂ / T₁ (en kelvin)", { fs: 11.5, b: true })}`);

// Ciclo Otto teórico.
const otto = (() => {
  const x1 = 0.9, x2 = 0.2, p1 = 0.05, p2 = p1 * Math.pow(x1 / x2, G), p3 = 0.98, p4 = p3 * Math.pow(x2 / x1, G);
  return graf("Ciclo Otto teórico en el diagrama presión-volumen: compresión adiabática de 1 a 2, combustión a volumen constante de 2 a 3, expansión adiabática de 3 a 4 y escape a volumen constante de 4 a 1", "V", "p", [
    { p: politropa(x1, p1, x1, x2), c: "var(--pen)", t: "" },
    { p: [[x2, p2], [x2, p3]], c: "var(--red)", t: "" },
    { p: politropa(x2, p3, x2, x1), c: "var(--leaf)", t: "" },
    { p: [[x1, p4], [x1, p1]], c: "var(--inf)", t: "" },
  ], `${punto(x1, p1, "1", 6, 16)}${punto(x2, p2, "2", -14, 4)}${punto(x2, p3, "3", -14, 4)}${punto(x1, p4, "4", -14, -14)}${T(90, 30, "Q₁ (V = cte)", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(228, 126, "Q₂", { fs: 10, b: true, c: "var(--inf)", a: "start" })}<path d="M${px(x2)} 160 H ${px(x1)}" stroke="var(--muted)" stroke-width="1.2"/>${T(px(0.5), 172, "carrera: V₁ − V₂", { fs: 9.5, c: "var(--muted)" })}`);
})();

// Ciclo Diésel teórico.
const diesel = (() => {
  const x1 = 0.9, x2 = 0.1, p1 = 0.04, p2 = p1 * Math.pow(x1 / x2, G), x3 = 0.25, p4 = p2 * Math.pow(x3 / x1, G);
  return graf("Ciclo Diésel teórico en el diagrama presión-volumen: compresión adiabática, combustión a presión constante, expansión adiabática y escape a volumen constante", "V", "p", [
    { p: politropa(x1, p1, x1, x2), c: "var(--pen)", t: "" },
    { p: [[x2, p2], [x3, p2]], c: "var(--red)", t: "" },
    { p: politropa(x3, p2, x3, x1), c: "var(--leaf)", t: "" },
    { p: [[x1, p4], [x1, p1]], c: "var(--inf)", t: "" },
  ], `${punto(x1, p1, "1", 6, 16)}${punto(x2, p2, "2", -14, 0)}${punto(x3, p2, "3", 6, -6)}${punto(x1, p4, "4", -14, -14)}${T(84, 22, "Q₁ (p = cte)", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(228, 126, "Q₂", { fs: 10, b: true, c: "var(--inf)", a: "start" })}`);
})();

// Curvas características de un motor.
const curvasSVG = graf("Curvas características de un motor de gasolina: el par máximo se alcanza a régimen medio y la potencia máxima a un régimen más alto; el consumo específico es mínimo cerca del par máximo", "n (rpm)", "par · potencia · consumo", [
  { p: [[0.05, 0.55], [0.25, 0.72], [0.45, 0.8], [0.65, 0.76], [0.85, 0.62], [0.95, 0.52]], c: "var(--red)", t: "" },
  { p: [[0.05, 0.08], [0.25, 0.32], [0.45, 0.55], [0.65, 0.73], [0.82, 0.8], [0.95, 0.76]], c: "var(--pen)", t: "" },
  { p: [[0.05, 0.38], [0.25, 0.26], [0.45, 0.22], [0.65, 0.24], [0.85, 0.31], [0.95, 0.37]], c: "var(--leaf)", dash: true, t: "" },
], `${T(118, 40, "par", { fs: 11, b: true, c: "var(--red)" })}${T(222, 46, "potencia", { fs: 11, b: true, c: "var(--pen)", a: "end" })}${T(130, 132, "consumo específico", { fs: 10, b: true, c: "var(--leaf)" })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Termodinámica y motores térmicos",
  minutos: 120,
  objetivos: [
    "Aplicar el primer principio de la termodinámica a las transformaciones de un gas ideal",
    "Calcular el trabajo, el calor y la variación de energía interna en transformaciones isocóricas, isobáricas, isotérmicas y adiabáticas",
    "Explicar el segundo principio y calcular el rendimiento de una máquina térmica y del ciclo de Carnot",
    "Describir el funcionamiento de los motores de cuatro y dos tiempos, de gasolina y diésel",
    "Calcular el rendimiento de los ciclos Otto y Diésel teóricos",
    "Calcular cilindrada, relación de compresión, par, potencia y consumo específico de un motor",
  ],
  claves: ["sistema termodinámico", "energía interna", "primer principio", "gas ideal", "isocórica", "isobárica", "isotérmica", "adiabática", "segundo principio", "máquina térmica", "ciclo de Carnot", "ciclo Otto", "ciclo Diésel", "cilindrada", "relación de compresión", "par motor", "potencia", "consumo específico"],
  pregunta: {
    texto: "En un coche de gasolina, de cada 100 litros que se queman, solo unos 30 sirven para moverlo. ¿Es solo porque el motor es mejorable o hay un límite que ningún motor puede superar?",
    respuesta: "Las dos cosas. Una parte de las pérdidas se debe a rozamientos, refrigeración y combustión imperfecta, que la ingeniería reduce cada año. Pero el <mark>segundo principio de la termodinámica</mark> pone un límite: ninguna máquina que convierta calor en trabajo puede tener un rendimiento mayor que el de Carnot, 1 − T<sub>2</sub>/T<sub>1</sub>, y siempre tiene que ceder parte del calor a un foco frío. Por eso un motor térmico nunca llegará al 100 %, mientras que un motor eléctrico supera el 90 %.",
  },
  lectura: {
    titulo: "Rudolf Diesel y el motor que no necesitaba chispa",
    html: `<p>En 1893, el ingeniero alemán Rudolf Diesel publicó un libro titulado <i>Teoría y construcción de un motor térmico racional</i>. Le obsesionaba que las máquinas de vapor de su época aprovecharan menos del 10 % de la energía del carbón. Su idea era comprimir tanto el aire dentro del cilindro que se calentara por encima de la temperatura de inflamación del combustible: así, al inyectarlo, ardería solo, sin necesidad de chispa.</p><p>El primer prototipo explotó y casi le cuesta la vida, pero en 1897 su motor alcanzó un rendimiento del 26 %, el más alto de cualquier máquina térmica de su tiempo. Diesel soñaba con que agricultores y pequeños talleres usaran motores alimentados con aceites vegetales; en la Exposición de París de 1900 hizo funcionar uno con aceite de cacahuete.</p><p>Diesel desapareció en 1913 durante una travesía en barco, en circunstancias nunca aclaradas. Hoy sus motores mueven camiones, barcos, tractores y generadores de todo el mundo, y los grandes diésel marinos superan el 50 % de rendimiento. Entender los ciclos termodinámicos te permitirá saber por qué.</p>`,
  },
  bloques: [
    bloque({ h: "6.1 Sistemas termodinámicos, calor y trabajo", p: [
      "La <b>termodinámica</b> estudia las transformaciones de la energía en las que intervienen el calor y el trabajo. Se llama <b>sistema</b> a la porción de materia que se estudia (por ejemplo, el gas encerrado en un cilindro) y <b>entorno</b> a todo lo demás. El sistema puede ser cerrado (no intercambia materia, como el gas con las válvulas cerradas) o abierto (sí intercambia materia, como una turbina).",
      "El estado de un gas se describe con sus <b>variables de estado</b>: presión p (Pa; 1 bar = 10<sup>5</sup> Pa; 1 atm = 101 325 Pa), volumen V (m³; 1 L = 10<sup>−3</sup> m³), temperatura T (siempre en <b>kelvin</b> en las fórmulas: T = t + 273) y cantidad de sustancia n (mol). En un <mark>gas ideal</mark> están relacionadas por la ecuación de estado:",
      formula("p · V = n · R · T &nbsp;&nbsp; R = 8,314 J/(mol·K) &nbsp;&nbsp; y entre dos estados: p₁V₁/T₁ = p₂V₂/T₂"),
      "La <b>energía interna</b> U es la suma de las energías de las moléculas; en un gas ideal solo depende de la temperatura. El sistema puede intercambiar energía con el entorno de dos maneras: como <b>calor</b> Q, debido a una diferencia de temperatura, y como <b>trabajo</b> W, por ejemplo cuando el gas empuja un pistón. Ni el calor ni el trabajo son propiedades del sistema: son energía en tránsito.",
    ], svg: ficha("Variables de estado de un gas y ecuación de los gases ideales", "Gas ideal", ["p (Pa) · V (m³)", "T (K) = t (°C) + 273", "p·V = n·R·T", "R = 8,314 J/(mol·K)"], "var(--pen)") }),
    bloque({ h: "6.2 El primer principio de la termodinámica", p: [
      "El <mark>primer principio</mark> es el principio de conservación de la energía aplicado al calor y al trabajo: la variación de la energía interna de un sistema es igual al calor que recibe menos el trabajo que realiza.",
      formula("ΔU = Q − W"),
      "Con el convenio de signos que se usa en ingeniería, Q es positivo si el sistema <b>recibe</b> calor y W es positivo si el sistema <b>realiza</b> trabajo (el gas se expande y empuja). Por ejemplo, si un gas recibe 500 J de calor y realiza un trabajo de 200 J, su energía interna aumenta 300 J. Algunos libros de química usan el convenio contrario, ΔU = Q + W, con el trabajo positivo cuando se hace sobre el sistema; lo importante es ser coherente.",
      "Cuando un gas cambia de volumen a presión p, el trabajo es W = ∫ p · dV. Gráficamente es el <b>área bajo la curva</b> en el diagrama p-V. En un ciclo, el sistema vuelve al estado inicial (ΔU = 0) y el trabajo neto es el área encerrada por el ciclo: positiva si se recorre en sentido horario (motor) y negativa si se recorre en sentido antihorario (máquina frigorífica). Por eso el diagrama p-V es la herramienta básica para estudiar los motores.",
    ], svg: compara("Convenio de signos del primer principio: el calor recibido y el trabajo realizado por el gas son positivos; el calor cedido y el trabajo recibido son negativos", ["Positivo (+)", ["Q: recibe calor", "W: se expande", "ΔU > 0: se calienta", "ciclo horario: motor"]], ["Negativo (−)", ["Q: cede calor", "W: se comprime", "ΔU < 0: se enfría", "ciclo antihorario"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "6.3 Transformaciones del gas ideal", p: [
      "Los ciclos de los motores se componen de cuatro transformaciones básicas. En todas ellas, para un gas ideal, ΔU = n · c<sub>v</sub> · ΔT, donde c<sub>v</sub> es el calor específico molar a volumen constante (20,8 J/(mol·K) para el aire). La relación γ = c<sub>p</sub>/c<sub>v</sub> vale 1,4 para el aire.",
      "<b>Isocórica</b> (V constante): no hay trabajo (W = 0) y todo el calor se invierte en energía interna: Q = ΔU = n · c<sub>v</sub> · ΔT. <b>Isobárica</b> (p constante): W = p · (V<sub>2</sub> − V<sub>1</sub>) y Q = n · c<sub>p</sub> · ΔT.",
      "<b>Isotérmica</b> (T constante): ΔU = 0, de modo que Q = W = n · R · T · ln(V<sub>2</sub>/V<sub>1</sub>); en el diagrama p-V es una hipérbola, p · V = constante. <b>Adiabática</b> (sin intercambio de calor, Q = 0): el trabajo se hace a costa de la energía interna, W = −ΔU. Si el gas se comprime, se calienta, y si se expande, se enfría. Se cumple:",
      formula("p · V<sup>γ</sup> = cte &nbsp;&nbsp; T · V<sup>γ−1</sup> = cte &nbsp;&nbsp; W = (p₁V₁ − p₂V₂)/(γ − 1)"),
      "En el diagrama p-V, la adiabática es más inclinada que la isotérmica porque, al comprimir, además de reducirse el volumen aumenta la temperatura. Una compresión adiabática rápida es la que calienta el aire de una bomba de bicicleta o la del cilindro de un motor diésel.",
    ], svg: transfSVG, video: V("mt-leyes", "Las leyes de la termodinámica", "leyes de la termodinámica explicadas") }),
    bloque({ h: "6.4 El segundo principio y las máquinas térmicas", p: [
      "Una <mark>máquina térmica</mark> es un dispositivo que funciona cíclicamente y transforma calor en trabajo. Toma un calor Q<sub>1</sub> de un <b>foco caliente</b> (la combustión), realiza un trabajo W y cede el calor sobrante Q<sub>2</sub> a un <b>foco frío</b> (la atmósfera, a través del escape y del radiador). Como en un ciclo ΔU = 0, W = Q<sub>1</sub> − Q<sub>2</sub>, y su <b>rendimiento</b> es:",
      formula("η = W / Q₁ = (Q₁ − Q₂) / Q₁ = 1 − Q₂ / Q₁"),
      "El <b>segundo principio</b> de la termodinámica afirma, en el enunciado de Kelvin-Planck, que es imposible construir una máquina térmica que, funcionando cíclicamente, transforme íntegramente en trabajo el calor de un solo foco. Siempre hay que ceder algo de calor a un foco frío: Q<sub>2</sub> nunca es cero y η siempre es menor que 1. En el enunciado de Clausius, el calor no pasa espontáneamente de un cuerpo frío a uno caliente: para hacerlo hace falta trabajo, que es lo que hacen las máquinas frigoríficas del tema siguiente.",
      "Este principio introduce la <b>entropía</b> S, una magnitud que mide la dispersión de la energía: en cualquier proceso real, la entropía total del universo aumenta. Los procesos reales, con rozamientos y diferencias finitas de temperatura, son <b>irreversibles</b>, y por eso los motores reales rinden menos que los ideales.",
    ], svg: maquinaSVG }),
    bloque({ h: "6.5 El ciclo de Carnot", p: [
      "En 1824, Sadi Carnot se preguntó cuál era el máximo rendimiento posible de una máquina térmica. Imaginó un ciclo reversible formado por dos <b>isotermas</b> (en las que el gas absorbe Q<sub>1</sub> a T<sub>1</sub> y cede Q<sub>2</sub> a T<sub>2</sub>) y dos <b>adiabáticas</b> que lo llevan de una temperatura a la otra. Su rendimiento solo depende de las temperaturas de los focos, en kelvin:",
      formula("η<sub>Carnot</sub> = 1 − T₂ / T₁"),
      "El <mark>teorema de Carnot</mark> establece que ninguna máquina que funcione entre dos focos puede tener un rendimiento mayor que el de Carnot. Por ejemplo, entre una combustión a 800 K y el ambiente a 300 K, el límite es 1 − 300/800 = 62,5 %. Para aumentar el rendimiento hay que aumentar T<sub>1</sub> (lo que limitan los materiales) o reducir T<sub>2</sub>.",
      "El ciclo de Carnot no se puede construir en la práctica: las isotermas exigirían procesos infinitamente lentos y la máquina no daría potencia. Pero sirve de referencia: los ciclos reales se parecen más o menos a él, y la comparación indica cuánto se puede mejorar. En el diagrama temperatura-entropía, el ciclo de Carnot es un rectángulo cuya área es el trabajo.",
    ], svg: carnotSVG, video: V("mt-carnot", "Ciclo de Carnot y rendimiento de una máquina térmica", "ciclo de carnot rendimiento ejercicio") }),
    bloque({ h: "6.6 Motores de combustión: clasificación y partes", p: [
      "Los motores térmicos se clasifican según dónde se produce la combustión. En los de <b>combustión externa</b>, el combustible arde fuera y calienta un fluido de trabajo (máquina de vapor, turbina de vapor, motor Stirling). En los de <b>combustión interna</b>, el combustible arde dentro del propio motor y los gases de la combustión son el fluido de trabajo: son los motores <b>alternativos</b> de émbolo (de gasolina y diésel, de cuatro o dos tiempos), el motor rotativo Wankel y las turbinas de gas y los motores de reacción.",
      "Un motor alternativo tiene un <b>bloque</b> con los <b>cilindros</b>, dentro de los cuales se mueven los <b>pistones</b>. Cada pistón está unido por una <b>biela</b> al <b>cigüeñal</b>, que transforma el movimiento rectilíneo alternativo en giro: es un mecanismo biela-manivela. En la <b>culata</b>, que cierra los cilindros por arriba, están las <b>válvulas</b> de admisión y escape, accionadas por el <b>árbol de levas</b>, y la bujía (gasolina) o el inyector (diésel). El <b>cárter</b> contiene el aceite de lubricación.",
      "El pistón se mueve entre dos posiciones extremas: el <b>punto muerto superior</b> (PMS), en el que el volumen es mínimo, y el <b>punto muerto inferior</b> (PMI), en el que es máximo. La distancia entre ambos es la <b>carrera</b> L. Los sistemas auxiliares (alimentación, encendido, refrigeración, lubricación y escape) completan el motor.",
    ], svg: figura("Partes del motor", "Mecanismo biela-manivela y distribución", [["Cilindro y pistón", "PMS · PMI", "carrera"], ["Biela y cigüeñal", "alternativo → giro", "volante de inercia"], ["Culata", "válvulas · levas", "bujía o inyector"], ["Auxiliares", "refrigeración", "lubricación · escape"]], "var(--pen)") }),
    bloque({ h: "6.7 El motor de cuatro tiempos", p: [
      "El motor de <mark>cuatro tiempos</mark>, ideado por Nikolaus Otto en 1876, completa su ciclo en cuatro carreras del pistón, es decir, en <b>dos vueltas</b> del cigüeñal:",
      "1) <b>Admisión</b>: el pistón baja del PMS al PMI con la válvula de admisión abierta y aspira la mezcla de aire y gasolina (o solo aire en el diésel y en la inyección directa). 2) <b>Compresión</b>: con las válvulas cerradas, el pistón sube y comprime la mezcla. 3) <b>Explosión o expansión</b>: cerca del PMS, la chispa de la bujía inflama la mezcla (o se inyecta el gasóleo, que se autoinflama); los gases a alta presión empujan el pistón hacia abajo. Es el único tiempo que produce trabajo. 4) <b>Escape</b>: se abre la válvula de escape y el pistón, al subir, expulsa los gases quemados.",
      "Como solo uno de cada cuatro tiempos es motor, el cigüeñal lleva un <b>volante de inercia</b> que almacena energía y mantiene el giro, y los motores tienen varios cilindros desfasados para que el par sea más uniforme. En los motores reales, las válvulas se abren antes y se cierran después de los puntos muertos (<b>adelanto y retraso</b> de la distribución) y el encendido se adelanta respecto al PMS, para aprovechar la inercia de los gases y el tiempo que tarda la combustión.",
    ], svg: pasos("Los cuatro tiempos del motor en dos vueltas del cigüeñal: admisión, compresión, explosión y escape", ["Admisión: baja, entra mezcla", "Compresión: sube, comprime", "Explosión: baja, da trabajo", "Escape: sube, expulsa gases"], "var(--red)"), video: V("mt-otto", "Cómo funciona un motor de cuatro tiempos", "funcionamiento motor cuatro tiempos") }),
    bloque({ h: "6.8 El ciclo Otto teórico", p: [
      "Para estudiar el motor de gasolina se usa un ciclo ideal, el <b>ciclo Otto</b>, con aire como gas ideal y cuatro transformaciones: <b>1→2</b> compresión adiabática; <b>2→3</b> aporte de calor Q<sub>1</sub> a volumen constante (la combustión, tan rápida que el pistón casi no se mueve); <b>3→4</b> expansión adiabática, que produce el trabajo; y <b>4→1</b> cesión de calor Q<sub>2</sub> a volumen constante (el escape). La admisión y el escape propiamente dichos se anulan entre sí en el diagrama.",
      "Su rendimiento depende solo de la <mark>relación de compresión</mark> r = V<sub>1</sub>/V<sub>2</sub>:",
      formula("η<sub>Otto</sub> = 1 − 1 / r<sup>γ−1</sup>"),
      "Con r = 9 y γ = 1,4: η = 1 − 1/9<sup>0,4</sup> = 1 − 1/2,41 = 58,5 %. Cuanto mayor es la relación de compresión, mayor es el rendimiento; pero en los motores de gasolina no se puede pasar de r ≈ 10 a 13 porque la mezcla se autoinflamaría antes de tiempo (<b>picado</b> o detonación), lo que daña el motor. El índice de octano de la gasolina mide su resistencia a la detonación.",
      "Los rendimientos reales son mucho menores (un 25 a 38 %) porque la combustión no es instantánea, hay pérdidas de calor por las paredes, rozamientos, trabajo de bombeo en la admisión y el escape, y el fluido no es aire ideal.",
    ], svg: otto }),
    bloque({ h: "6.9 El motor y el ciclo Diésel", p: [
      "En el <b>motor diésel</b>, en la admisión solo entra aire, que se comprime con una relación de compresión muy alta (r = 14 a 22) y alcanza más de 500 °C. Al final de la compresión se inyecta el gasóleo a muy alta presión (más de 2 000 bar en los sistemas de conducto común o <i>common rail</i>) y se <b>autoinflama</b> sin bujía. Por eso se le llama motor de encendido por compresión.",
      "El <b>ciclo Diésel</b> teórico se diferencia del Otto en que el calor se aporta a <b>presión constante</b> (2→3), porque el combustible se va quemando mientras se inyecta y el pistón ya baja. Su rendimiento depende de r y de la relación de combustión r<sub>c</sub> = V<sub>3</sub>/V<sub>2</sub>:",
      formula("η<sub>Diésel</sub> = 1 − (1 / r<sup>γ−1</sup>) · (r<sub>c</sub><sup>γ</sup> − 1) / [γ · (r<sub>c</sub> − 1)]"),
      "A igual relación de compresión, el ciclo Otto rinde más, pero como el diésel trabaja con relaciones de compresión mucho mayores, su rendimiento real es superior (hasta un 40-45 % en camiones y más del 50 % en grandes motores marinos lentos). A cambio, es más pesado y caro, y emite más óxidos de nitrógeno y partículas, que se tratan con filtros de partículas y sistemas de reducción catalítica con urea (AdBlue).",
    ], svg: diesel, video: V("mt-diesel", "Motor diésel: cómo funciona", "cómo funciona un motor diésel") }),
    bloque({ h: "6.10 Motores de dos tiempos y rotativos", p: [
      "El <b>motor de dos tiempos</b> completa el ciclo en una sola vuelta del cigüeñal. Mientras el pistón sube, comprime la mezcla en el cilindro y a la vez aspira mezcla nueva hacia el cárter; al bajar, tras la explosión, descubre las <b>lumbreras</b> de escape y de transferencia, y la mezcla del cárter entra en el cilindro y barre los gases quemados.",
      "Al tener una carrera motriz por vuelta, a igual cilindrada da más potencia y es más sencillo y ligero (no tiene válvulas). Pero el barrido es imperfecto: parte de la mezcla fresca sale por el escape, consume más y contamina más, y el aceite se mezcla con la gasolina. Por eso hoy se usa en motosierras, desbrozadoras y pequeñas motos, y en versión diésel en los enormes motores lentos de los barcos, que sí son muy eficientes.",
      "El <b>motor rotativo Wankel</b> sustituye el pistón por un rotor triangular que gira dentro de una carcasa de forma especial (epitrocoide). Las tres cámaras que se forman entre el rotor y la carcasa realizan los cuatro tiempos de forma continua. Es compacto, suave y sin biela ni válvulas, pero el sellado de los vértices del rotor es difícil y su consumo es alto. Hoy se usa sobre todo como generador en algunos vehículos híbridos.",
    ], svg: compara("Comparación de los motores de cuatro tiempos y de dos tiempos", ["Cuatro tiempos", ["2 vueltas por ciclo", "con válvulas", "menor consumo", "coches, camiones"]], ["Dos tiempos", ["1 vuelta por ciclo", "lumbreras", "más potencia/peso", "motosierras, barcos"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "6.11 Cilindrada, par y potencia", p: [
      "La <b>cilindrada unitaria</b> es el volumen que barre el pistón en su carrera, V<sub>u</sub> = (π · D²/4) · L, siendo D el diámetro del cilindro (calibre) y L la carrera. La <b>cilindrada total</b> es V<sub>T</sub> = z · V<sub>u</sub>, con z cilindros. Si V<sub>c</sub> es el volumen de la cámara de combustión, la <b>relación de compresión</b> es r = (V<sub>u</sub> + V<sub>c</sub>)/V<sub>c</sub>.",
      "El <mark>par motor</mark> M (N·m) es el momento que el cigüeñal transmite; da idea de la fuerza de empuje o de recuperación. La <b>potencia</b> es el trabajo por unidad de tiempo, P = M · ω, con ω = 2π · n/60. Si se conoce la <b>presión media efectiva</b> p<sub>me</sub> (presión constante que, actuando durante la carrera de expansión, daría el mismo trabajo), la potencia de un motor de cuatro tiempos es:",
      formula("P = p<sub>me</sub> · V<sub>T</sub> · n / (60 · 2) &nbsp;&nbsp; (en dos tiempos, sin el 2)"),
      "Las <b>curvas características</b> que dan los fabricantes muestran el par, la potencia y el consumo específico en función del régimen n. El par máximo aparece a un régimen intermedio, donde el llenado de los cilindros es mejor; la potencia sigue creciendo un poco más porque aumenta n, y luego cae. Entre el régimen de par máximo y el de potencia máxima está la <b>zona de utilización</b> del motor, la más elástica. Los motores turboalimentados consiguen un par casi plano en un amplio intervalo de regímenes.",
    ], svg: curvasSVG, video: V("mt-par", "Par motor y potencia: diferencias", "par motor y potencia diferencia") }),
    bloque({ h: "6.12 Rendimiento, consumo específico y balance energético", p: [
      "La energía que aporta el combustible es Q = m · P<sub>c</sub>, donde P<sub>c</sub> es su <b>poder calorífico</b> (unos 44 000 kJ/kg la gasolina y 43 000 kJ/kg el gasóleo; densidades de 0,75 y 0,84 kg/L). El <b>rendimiento efectivo</b> o total del motor es la potencia útil entre la potencia aportada por el combustible:",
      formula("η = P<sub>útil</sub> / (ṁ · P<sub>c</sub>) &nbsp;&nbsp; c<sub>e</sub> = ṁ / P<sub>útil</sub> (g/kWh)"),
      "El <b>consumo específico</b> c<sub>e</sub> indica cuántos gramos de combustible necesita el motor para producir 1 kWh. Cuanto menor, mejor: un buen diésel de camión ronda 190 g/kWh y uno de gasolina unos 250 g/kWh. Ambas magnitudes están relacionadas: η = 3,6 · 10<sup>6</sup> / (c<sub>e</sub> · P<sub>c</sub>), con c<sub>e</sub> en g/kWh y P<sub>c</sub> en J/g.",
      "El rendimiento total se puede descomponer en un <b>rendimiento indicado</b> (el trabajo que hacen los gases sobre el pistón frente al calor del combustible) y un <b>rendimiento mecánico</b> (la potencia en el cigüeñal frente a la indicada, que pierde por rozamientos y por mover bombas y alternador). El <b>balance energético</b> típico de un motor de gasolina a plena carga muestra a dónde va la energía: alrededor de un 30 % es trabajo útil, un 30-35 % se va con los gases de escape, un 25-30 % con la refrigeración y el resto en rozamientos y radiación.",
    ], svg: barras("Balance energético típico de un motor de gasolina: un 30 por ciento de trabajo útil, un 33 por ciento en el escape, un 28 por ciento en la refrigeración y un 9 por ciento en rozamientos y radiación", "¿A dónde va la energía del combustible?", [["Trabajo útil", 30, "var(--leaf)", "30 %"], ["Escape", 33, "var(--red)", "33 %"], ["Refrigeración", 28, "var(--pen)", "28 %"], ["Rozamientos", 9, "var(--muted)", "9 %"]]) }),
    bloque({ h: "6.13 Turbinas y máquinas de combustión externa", p: [
      "La <b>turbina de gas</b> funciona según el <b>ciclo Brayton</b>: un compresor aspira y comprime aire, en la cámara de combustión se quema el combustible a presión constante y los gases se expanden en la turbina, que mueve el compresor y entrega el trabajo sobrante. Su rendimiento teórico depende de la relación de presiones r<sub>p</sub>: η = 1 − 1/r<sub>p</sub><sup>(γ−1)/γ</sup>. Son ligeras y potentes, por lo que se usan en aviación (turborreactores y turbofanes, que producen empuje) y en centrales eléctricas.",
      "La <b>turbina de vapor</b> trabaja según el <b>ciclo Rankine</b>: una caldera evapora agua a alta presión, el vapor se expande en la turbina, se condensa en el condensador y una bomba lo devuelve a la caldera. Es la base de las centrales térmicas, nucleares, termosolares y de biomasa. En las <b>centrales de ciclo combinado</b>, los gases calientes que salen de una turbina de gas producen vapor para una turbina de vapor, y el rendimiento total supera el 60 %.",
      "El <b>motor Stirling</b> es un motor de combustión externa con un gas encerrado (aire, helio o hidrógeno) que se calienta y enfría alternativamente. Su ciclo teórico tiene el rendimiento de Carnot, es silencioso y admite cualquier fuente de calor (solar, biomasa, calor residual), pero es caro y responde lentamente, por lo que se usa en aplicaciones especiales como submarinos, plantas solares de disco o generación en el espacio.",
    ], svg: rejilla("Comparación de ciclos termodinámicos: Otto, Diésel, Brayton y Rankine, con el aporte de calor y sus usos", ["Ciclo", "Aporte de calor", "Uso"], [["Otto", "V = cte", "gasolina"], ["Diésel", "p = cte", "gasóleo"], ["Brayton", "p = cte", "turbina de gas"], ["Rankine", "caldera", "vapor"]], "var(--red)") }),
    bloque({ h: "6.14 Emisiones y futuro de los motores térmicos", p: [
      "La combustión ideal de un hidrocarburo produce dióxido de carbono y agua, pero la real genera además <b>contaminantes</b>: monóxido de carbono (CO) e hidrocarburos sin quemar (HC) por combustión incompleta, <b>óxidos de nitrógeno</b> (NO<sub>x</sub>) por las altas temperaturas, y <b>partículas</b> (sobre todo en diésel e inyección directa). El CO<sub>2</sub>, aunque no es tóxico, es el principal gas de efecto invernadero.",
      "Las normas europeas <b>Euro</b> limitan las emisiones de los vehículos nuevos y obligan a usar sistemas de postratamiento: el <b>catalizador de tres vías</b> en gasolina (oxida CO y HC y reduce NO<sub>x</sub>, con una sonda lambda que mantiene la mezcla estequiométrica), el <b>filtro de partículas</b> y la <b>reducción catalítica selectiva</b> (SCR) con urea en diésel, y la recirculación de gases de escape (EGR).",
      "Para reducir el consumo se han desarrollado la reducción de tamaño con turbocompresor (<i>downsizing</i>), la inyección directa, la distribución variable, la desconexión de cilindros, el sistema de parada y arranque y, sobre todo, la <b>hibridación</b>: el motor eléctrico recupera energía en las frenadas y permite al térmico trabajar en su zona de menor consumo específico. La Unión Europea ha previsto que desde 2035 los turismos nuevos no emitan CO<sub>2</sub> por el escape, lo que impulsa el coche eléctrico; los motores térmicos seguirán en aviación, barcos y maquinaria, cada vez más con biocombustibles, hidrógeno o combustibles sintéticos.",
    ], svg: pasos("Medidas para reducir el impacto de los motores térmicos: postratamiento de gases, mejora de la eficiencia, hibridación y combustibles renovables", ["Catalizador y filtros", "Downsizing y turbo", "Hibridación", "Biocombustibles, H₂, e-fuels"], "var(--leaf)") }),
  ],
  figura: figura("Motores térmicos", "Del calor al trabajo: principios, ciclos y motores", [["1.er principio", "ΔU = Q − W", "pV = nRT"], ["2.º principio", "η = 1 − Q₂/Q₁", "Carnot: 1 − T₂/T₁"], ["Ciclos", "Otto · Diésel", "Brayton · Rankine"], ["Motor", "P = M·ω", "cilindrada · c_e"]], "var(--red)"),
  video: V("mt-otto", "Cómo funciona un motor de cuatro tiempos", "funcionamiento motor cuatro tiempos"),
  ejemplos: [
    { enunciado: "Un gas ideal recibe 800 J de calor y su energía interna aumenta 350 J. ¿Qué trabajo realiza? Si después se comprime adiabáticamente con un trabajo de 200 J, ¿cuánto varía su energía interna?", pasos: ["Primer proceso: W = Q − ΔU = 800 − 350 = 450 J (lo realiza el gas).", "Adiabática: Q = 0 y W = −200 J (se hace sobre el gas).", "ΔU = Q − W = 0 − (−200) = +200 J."], resultado: "W = 450 J; en la compresión adiabática la energía interna aumenta 200 J y el gas se calienta." },
    { enunciado: "Un mol de aire a 300 K duplica su volumen de forma isotérmica. Calcula el trabajo y el calor.", pasos: ["ΔU = 0 (T constante).", "W = n · R · T · ln(V₂/V₁) = 1 · 8,314 · 300 · ln 2.", "W = 1 729 J = Q."], resultado: "El gas realiza 1 729 J y absorbe el mismo calor." },
    { enunciado: "Una máquina térmica funciona entre 800 K y 300 K. Si recibe 5 000 J por ciclo y produce 1 800 J, calcula su rendimiento y compáralo con el de Carnot.", pasos: ["η = W/Q₁ = 1 800/5 000 = 0,36 → 36 %.", "η<sub>Carnot</sub> = 1 − 300/800 = 0,625 → 62,5 %.", "Q₂ = 5 000 − 1 800 = 3 200 J cedidos al foco frío."], resultado: "36 % frente a un máximo teórico del 62,5 %." },
    { enunciado: "Un motor de 4 cilindros tiene un diámetro de 80 mm, una carrera de 90 mm y una cámara de combustión de 50 cm³. Calcula la cilindrada, la relación de compresión y el rendimiento del ciclo Otto teórico.", pasos: ["V<sub>u</sub> = π · 8²/4 · 9 = 452,4 cm³; V<sub>T</sub> = 4 · 452,4 = 1 809,6 cm³.", "r = (452,4 + 50)/50 = 10,05.", "η = 1 − 1/10,05<sup>0,4</sup> = 1 − 1/2,52 = 0,603."], resultado: "1,8 L de cilindrada, r ≈ 10 y η<sub>Otto</sub> ≈ 60 %." },
    { enunciado: "Un motor da 110 kW a 5 500 rpm y su par máximo es de 250 N·m a 3 000 rpm. Calcula el par a potencia máxima y la potencia a par máximo.", pasos: ["ω (5 500 rpm) = 2π · 5 500/60 = 576 rad/s; M = 110 000/576 = 191 N·m.", "ω (3 000 rpm) = 314,2 rad/s; P = 250 · 314,2 = 78 540 W.", "El par máximo y la potencia máxima no coinciden en el mismo régimen."], resultado: "191 N·m a potencia máxima y 78,5 kW a par máximo." },
    { enunciado: "Un motor de 60 kW consume 15 kg/h de gasolina (P<sub>c</sub> = 44 000 kJ/kg). Calcula su rendimiento y su consumo específico.", pasos: ["Potencia del combustible: 15 · 44 000/3 600 = 183,3 kW.", "η = 60/183,3 = 0,327 → 32,7 %.", "c<sub>e</sub> = 15 000 g/h / 60 kW = 250 g/kWh."], resultado: "η = 32,7 % y c<sub>e</sub> = 250 g/kWh." },
  ],
  errores: [
    "Usar grados Celsius en pV = nRT o en el rendimiento de Carnot: las temperaturas siempre van en kelvin.",
    "Confundir el convenio de signos: en ΔU = Q − W, W es positivo cuando el gas se expande y realiza trabajo.",
    "Pensar que en una adiabática no cambia la temperatura: no hay calor, pero el gas se calienta al comprimirlo y se enfría al expandirlo.",
    "Creer que un motor ideal podría alcanzar el 100 %: el segundo principio exige ceder calor a un foco frío.",
    "Calcular la potencia con n en rpm sin pasarla a rad/s: P = M · ω, con ω = 2π · n/60.",
    "Olvidar que en el cuatro tiempos hay un ciclo cada dos vueltas: en la fórmula de la presión media efectiva se divide entre 2.",
  ],
  ejercicios: [
    B("Pasa a unidades del SI: 3 bar, 2,5 L, 27 °C y 1 500 cm³.", "3 · 10<sup>5</sup> Pa; 2,5 · 10<sup>−3</sup> m³; 300 K; 1,5 · 10<sup>−3</sup> m³."),
    B("¿Cuántos moles de aire hay en un cilindro de 0,5 L a 1 bar y 27 °C?", "n = pV/(RT) = 10<sup>5</sup> · 0,5 · 10<sup>−3</sup>/(8,314 · 300) = 0,020 mol."),
    B("Un gas recibe 1 200 J de calor y realiza 500 J de trabajo. ¿Cuánto varía su energía interna?", "ΔU = 1 200 − 500 = 700 J."),
    B("Un gas a 2 bar se expande a presión constante de 3 L a 7 L. Calcula el trabajo.", "W = 2 · 10<sup>5</sup> · 4 · 10<sup>−3</sup> = 800 J."),
    B("¿Cuánto trabajo realiza un gas en una transformación isocórica? ¿Y cuánto varía su energía interna en una isotérmica?", "Isocórica: W = 0. Isotérmica: ΔU = 0 (en un gas ideal U solo depende de T)."),
    B("Una máquina térmica recibe 2 000 J y cede 1 400 J al foco frío. Calcula el trabajo y el rendimiento.", "W = 600 J; η = 600/2 000 = 30 %."),
    B("Calcula el rendimiento de Carnot entre 527 °C y 27 °C.", "T₁ = 800 K, T₂ = 300 K: η = 1 − 300/800 = 62,5 %."),
    B("Ordena los cuatro tiempos de un motor y di en cuál se produce trabajo.", "Admisión, compresión, explosión o expansión (produce trabajo) y escape."),
    B("¿Qué diferencias hay en la admisión y el encendido entre un motor de gasolina y uno diésel?", "Gasolina: admite mezcla (o aire con inyección directa) y la inflama una chispa. Diésel: admite solo aire, lo comprime mucho y el gasóleo inyectado se autoinflama."),
    B("Calcula la cilindrada unitaria de un cilindro de 75 mm de diámetro y 85 mm de carrera.", "V<sub>u</sub> = π · 7,5²/4 · 8,5 = 375,5 cm³."),
    B("Calcula la potencia de un motor que da un par de 200 N·m a 3 000 rpm.", "ω = 314,2 rad/s; P = 62 830 W ≈ 62,8 kW."),
    B("Calcula el rendimiento del ciclo Otto teórico con r = 8.", "8<sup>0,4</sup> = 2,30; η = 1 − 1/2,30 = 56,5 %."),
    M("Un mol de aire a 300 K y 1 bar se comprime adiabáticamente hasta 1/9 de su volumen. Calcula la temperatura y la presión finales.", "T₂ = 300 · 9<sup>0,4</sup> = 300 · 2,408 = 722 K. p₂ = 1 · 9<sup>1,4</sup> = 21,7 bar."),
    M("Calcula el calor necesario para calentar 0,1 mol de aire de 300 K a 900 K a volumen constante (c<sub>v</sub> = 20,8 J/(mol·K)). ¿Cuánto trabajo se realiza?", "Q = 0,1 · 20,8 · 600 = 1 248 J; W = 0 y ΔU = 1 248 J."),
    M("Dos moles de un gas se expanden isotérmicamente a 400 K desde 10 L hasta 30 L. Calcula Q, W y ΔU.", "W = 2 · 8,314 · 400 · ln 3 = 7 307 J; Q = 7 307 J; ΔU = 0."),
    M("Un gas a 10 bar y 0,1 L se expande adiabáticamente hasta 0,8 L (γ = 1,4). Calcula la presión final y el trabajo.", "p₂ = 10 · (0,1/0,8)<sup>1,4</sup> = 10 · 0,0544 = 0,544 bar. W = (p₁V₁ − p₂V₂)/(γ − 1) = (10<sup>6</sup> · 10<sup>−4</sup> − 0,544 · 10<sup>5</sup> · 8 · 10<sup>−4</sup>)/0,4 = (100 − 43,5)/0,4 = 141 J."),
    M("Una central térmica funciona entre 550 °C y 30 °C con un rendimiento real del 38 %. ¿Qué porcentaje del máximo teórico alcanza?", "η<sub>Carnot</sub> = 1 − 303/823 = 63,2 %. 38/63,2 = 0,60: alcanza el 60 % del máximo."),
    M("Una máquina térmica tiene un rendimiento del 25 % y produce 15 kW. ¿Cuánto calor recibe y cuánto cede por segundo?", "Q₁ = 15/0,25 = 60 kW; Q₂ = 60 − 15 = 45 kW."),
    M("Un motor de 6 cilindros de 2,4 L tiene una relación de compresión de 10,5. Calcula el volumen de cada cámara de combustión.", "V<sub>u</sub> = 400 cm³. r = (V<sub>u</sub> + V<sub>c</sub>)/V<sub>c</sub> → V<sub>c</sub> = V<sub>u</sub>/(r − 1) = 400/9,5 = 42,1 cm³."),
    M("Calcula el rendimiento del ciclo Diésel teórico con r = 18 y r<sub>c</sub> = 2.", "18<sup>0,4</sup> = 3,178; 2<sup>1,4</sup> = 2,639; (2,639 − 1)/(1,4 · 1) = 1,171. η = 1 − 1,171/3,178 = 63,2 %."),
    M("Un motor de 4T de 1,8 L tiene una presión media efectiva de 10 bar a 5 000 rpm. Calcula la potencia y el par.", "P = 10<sup>6</sup> · 1,8 · 10<sup>−3</sup> · 5 000/120 = 75 000 W. ω = 523,6 rad/s; M = 143 N·m."),
    M("Un coche consume 6 L/100 km de gasolina (0,75 kg/L) a 100 km/h y su motor da 20 kW. Calcula el consumo específico y el rendimiento (P<sub>c</sub> = 44 000 kJ/kg).", "En una hora: 6 L = 4,5 kg. c<sub>e</sub> = 4 500/20 = 225 g/kWh. Potencia del combustible: 4,5 · 44 000/3 600 = 55 kW; η = 20/55 = 36,4 %."),
    M("Compara la potencia de un motor de 2T y otro de 4T con la misma cilindrada (125 cm³), p<sub>me</sub> = 6 bar y 8 000 rpm.", "4T: 6 · 10<sup>5</sup> · 125 · 10<sup>−6</sup> · 8 000/120 = 5 000 W. 2T: 10 000 W (doble, en teoría; en la práctica algo menos por el barrido)."),
    M("Una turbina de gas trabaja con una relación de presiones de 10. Calcula su rendimiento teórico según el ciclo Brayton.", "10<sup>0,2857</sup> = 1,931; η = 1 − 1/1,931 = 48,2 %."),
    A("En un ciclo Otto teórico con r = 9, el aire entra a 1 bar y 300 K y la temperatura máxima es 2 000 K. Calcula las temperaturas de los cuatro puntos y el rendimiento.", "T₁ = 300 K; T₂ = 300 · 9<sup>0,4</sup> = 722 K; T₃ = 2 000 K; T₄ = 2 000/2,408 = 831 K. η = 1 − (T₄ − T₁)/(T₃ − T₂) = 1 − 531/1 278 = 58,5 % (igual que 1 − 1/r<sup>0,4</sup>)."),
    A("En el ciclo anterior con 0,02 mol de aire (c<sub>v</sub> = 20,8 J/(mol·K)), calcula Q₁, Q₂ y el trabajo por ciclo. ¿Qué potencia teórica daría un cilindro a 3 000 rpm en 4T?", "Q₁ = 0,02 · 20,8 · 1 278 = 531,6 J; Q₂ = 0,02 · 20,8 · 531 = 220,9 J; W = 310,7 J. Ciclos por segundo: 3 000/120 = 25; P = 7,8 kW."),
    A("Un motor de 4 cilindros, D = 82 mm y L = 85 mm, da un par de 180 N·m a 4 000 rpm. Calcula la cilindrada, la potencia y la presión media efectiva.", "V<sub>u</sub> = π · 8,2²/4 · 8,5 = 448,9 cm³; V<sub>T</sub> = 1 795,6 cm³. P = 180 · 418,9 = 75 400 W. p<sub>me</sub> = P · 120/(V<sub>T</sub> · n) = 75 400 · 120/(1,7956 · 10<sup>−3</sup> · 4 000) = 1,26 · 10<sup>6</sup> Pa = 12,6 bar."),
    A("¿Qué relación de compresión necesitaría un ciclo Otto para igualar el rendimiento del ciclo Diésel del ejercicio anterior (63,2 %)? ¿Por qué no se construye así?", "1/r<sup>0,4</sup> = 0,368 → r<sup>0,4</sup> = 2,717 → r = 2,717<sup>2,5</sup> = 12,2. Con gasolina, a esa relación aparecería detonación con combustibles comerciales sin técnicas especiales."),
    A("Un motor diésel de camión de 300 kW tiene un consumo específico de 195 g/kWh (P<sub>c</sub> = 43 000 kJ/kg; 0,84 kg/L). Calcula su rendimiento y los litros que consume en 8 h a plena carga.", "η = 3,6 · 10<sup>6</sup>/(195 · 43 000) = 42,9 %. Masa: 195 · 300 · 8 = 468 kg → 557 L."),
    A("El rendimiento indicado de un motor es del 40 % y el mecánico del 85 %. Si consume 12 kg/h de gasóleo (P<sub>c</sub> = 43 000 kJ/kg), calcula la potencia indicada, la efectiva y la perdida por rozamientos.", "Potencia del combustible: 12 · 43 000/3 600 = 143,3 kW. P<sub>i</sub> = 57,3 kW; P<sub>e</sub> = 0,85 · 57,3 = 48,7 kW; pérdidas mecánicas: 8,6 kW. η total = 34 %."),
    A("Una central de ciclo combinado tiene una turbina de gas con η = 38 % y aprovecha el calor de sus gases en un ciclo de vapor con η = 35 %. Calcula el rendimiento global.", "De 100 unidades: la turbina de gas da 38 y cede 62; el ciclo de vapor aprovecha 0,35 · 62 = 21,7. η = 38 + 21,7 = 59,7 %."),
    A("Una grúa con motor diésel de 80 kW trabaja 6 h/día al 60 % de carga (c<sub>e</sub> = 230 g/kWh). Si cada kg de gasóleo emite 3,17 kg de CO<sub>2</sub>, calcula las emisiones diarias y propone dos medidas para reducirlas.", "Energía: 80 · 0,6 · 6 = 288 kWh; gasóleo: 66,2 kg; CO<sub>2</sub> = 210 kg/día. Medidas: hibridación con baterías que recuperen la energía al bajar la carga y uso de HVO (biocombustible renovable) o sustitución por una grúa eléctrica conectada a red."),
  ],
  quiz: [
    q4("En las fórmulas termodinámicas, la temperatura se expresa en…", ["°C", "K", "°F", "da igual"], 1, "Escala absoluta."),
    q4("El primer principio se expresa como…", ["ΔU = Q + W siempre", "ΔU = Q − W (W realizado por el gas)", "Q = W", "ΔU = 0"], 1, "Conservación de la energía."),
    q4("En una transformación isocórica…", ["W = 0", "Q = 0", "ΔU = 0", "p = cte"], 0, "Volumen constante."),
    q4("En una isotérmica de un gas ideal…", ["W = 0", "Q = 0", "ΔU = 0", "V = cte"], 2, "U solo depende de T."),
    q4("En una adiabática…", ["Q = 0", "W = 0", "T = cte", "p = cte"], 0, "Sin intercambio de calor."),
    q4("En el diagrama p-V, el trabajo de un ciclo es…", ["la altura", "el área encerrada", "la pendiente", "la presión máxima"], 1, "Área del ciclo."),
    q4("El rendimiento de una máquina térmica es…", ["Q₂/Q₁", "W/Q₁", "Q₁/W", "W/Q₂"], 1, "η = W/Q₁."),
    q4("El segundo principio dice que…", ["la energía se conserva", "no se puede convertir todo el calor en trabajo en un ciclo", "el calor fluye de frío a caliente", "η puede ser 1"], 1, "Kelvin-Planck."),
    q4("El rendimiento de Carnot entre 600 K y 300 K es…", ["25 %", "50 %", "75 %", "100 %"], 1, "1 − 300/600."),
    q4("El ciclo de Carnot se compone de…", ["2 isocóricas y 2 adiabáticas", "2 isotermas y 2 adiabáticas", "2 isobáricas y 2 isotermas", "4 adiabáticas"], 1, "Reversible."),
    q4("En un motor de 4T, el ciclo completo se hace en…", ["media vuelta", "una vuelta", "dos vueltas", "cuatro vueltas"], 2, "Cuatro carreras."),
    q4("El único tiempo que produce trabajo es…", ["admisión", "compresión", "explosión", "escape"], 2, "Expansión."),
    q4("En el ciclo Otto, el calor se aporta…", ["a p = cte", "a V = cte", "a T = cte", "adiabáticamente"], 1, "Combustión instantánea."),
    q4("El rendimiento del ciclo Otto aumenta con…", ["la cilindrada", "la relación de compresión", "el número de cilindros", "la carrera"], 1, "η = 1 − 1/r<sup>γ−1</sup>."),
    q4("El motor diésel se enciende por…", ["chispa", "compresión", "calentador", "turbo"], 1, "Autoinflamación."),
    q4("En el ciclo Diésel, el calor se aporta…", ["a V = cte", "a p = cte", "a T = cte", "sin calor"], 1, "Mientras se inyecta."),
    q4("La cilindrada unitaria es…", ["π·D²/4 · L", "π·D·L", "D·L", "π·D²·L"], 0, "Volumen barrido."),
    q4("La potencia de un motor es…", ["M/ω", "M·ω", "M·n", "M + ω"], 1, "Con ω en rad/s."),
    q4("Un consumo específico bajo indica…", ["más potencia", "mayor rendimiento", "más par", "más cilindrada"], 1, "Menos gramos por kWh."),
    q4("Las centrales de ciclo combinado unen…", ["Otto y Diésel", "Brayton y Rankine", "Carnot y Stirling", "dos turbinas de vapor"], 1, "Turbina de gas + de vapor."),
  ],
  examen: [
    q4("Un gas recibe 600 J y su U aumenta 250 J. W =", ["850 J", "350 J", "250 J", "−350 J"], 1, "600 − 250."),
    q4("Un gas a 3 bar se expande de 1 L a 5 L a p = cte. W =", ["1 200 J", "120 J", "12 J", "15 J"], 0, "3 · 10<sup>5</sup> · 4 · 10<sup>−3</sup>."),
    q4("Carnot entre 900 K y 300 K:", ["33 %", "50 %", "67 %", "75 %"], 2, "1 − 1/3."),
    q4("Máquina con Q₁ = 4 000 J y Q₂ = 2 800 J. η =", ["30 %", "70 %", "43 %", "12 %"], 0, "1 200/4 000."),
    q4("Ciclo Otto con r = 10 (10<sup>0,4</sup> = 2,51). η =", ["40 %", "60 %", "75 %", "90 %"], 1, "1 − 1/2,51."),
    q4("V<sub>u</sub> = 500 cm³ y V<sub>c</sub> = 50 cm³. r =", ["10", "11", "9", "12"], 1, "550/50."),
    q4("M = 150 N·m a 4 000 rpm. P ≈", ["600 kW", "62,8 kW", "37,5 kW", "15 kW"], 1, "150 · 418,9."),
    q4("Motor de 50 kW con c<sub>e</sub> = 240 g/kWh. Consumo en 2 h:", ["24 kg", "12 kg", "48 kg", "4,8 kg"], 0, "240 · 50 · 2 = 24 000 g."),
  ],
  feynman: ["Qué dice el primer principio y cómo se aplica a la compresión de un gas", "Por qué ningún motor térmico puede tener un rendimiento del 100 %", "Cómo funcionan los cuatro tiempos de un motor", "En qué se diferencian el ciclo Otto y el ciclo Diésel", "Qué diferencia hay entre par y potencia"],
  glosario: [
    ["Sistema termodinámico", "Porción de materia que se estudia, separada de su entorno."],
    ["Energía interna", "Suma de las energías de las moléculas; en un gas ideal depende solo de la temperatura."],
    ["Primer principio", "ΔU = Q − W: conservación de la energía con calor y trabajo."],
    ["Transformación adiabática", "La que se produce sin intercambio de calor con el entorno."],
    ["Transformación isotérmica", "La que se produce a temperatura constante."],
    ["Segundo principio", "Es imposible transformar íntegramente en trabajo el calor de un solo foco en un ciclo."],
    ["Entropía", "Magnitud que mide la dispersión de la energía; aumenta en los procesos reales."],
    ["Máquina térmica", "Dispositivo cíclico que transforma calor en trabajo entre dos focos."],
    ["Ciclo de Carnot", "Ciclo reversible ideal de dos isotermas y dos adiabáticas, de máximo rendimiento."],
    ["PMS y PMI", "Puntos muertos superior e inferior: posiciones extremas del pistón."],
    ["Cilindrada", "Volumen barrido por los pistones en su carrera."],
    ["Relación de compresión", "Cociente entre el volumen máximo y el mínimo del cilindro."],
    ["Detonación", "Autoinflamación indeseada de la mezcla en un motor de gasolina."],
    ["Par motor", "Momento que transmite el cigüeñal, en N·m."],
    ["Presión media efectiva", "Presión constante equivalente que daría el mismo trabajo por ciclo."],
    ["Consumo específico", "Masa de combustible por unidad de energía útil, en g/kWh."],
    ["Poder calorífico", "Energía liberada en la combustión completa de 1 kg de combustible."],
  ],
  situacion: {
    titulo: "¿Cuánto rinde de verdad nuestro coche?",
    reto: "Vuestro equipo calculará el rendimiento real de un vehículo familiar a partir de su ficha técnica y de datos de consumo, lo comparará con los ciclos teóricos y con un vehículo eléctrico equivalente, y presentará un informe con recomendaciones de conducción eficiente.",
    pasos: [
      "Recoged la ficha técnica de un coche (cilindrada, diámetro, carrera, relación de compresión, par y potencia máximos) y su consumo homologado y real.",
      "Calculad la cilindrada, el rendimiento del ciclo teórico (Otto o Diésel) y el límite de Carnot con temperaturas razonables.",
      "Estimad la potencia necesaria a 100 km/h y, con el consumo, calculad el rendimiento real y el consumo específico.",
      "Compáralo con el consumo en kWh/100 km de un coche eléctrico similar, teniendo en cuenta el rendimiento de la generación eléctrica.",
      "Redactad un decálogo de conducción eficiente basado en las curvas de par, potencia y consumo específico.",
    ],
    producto: "Un informe técnico con los cálculos, los gráficos de las curvas características y el decálogo de conducción eficiente.",
    evaluacion: [
      "Aplica correctamente las fórmulas de cilindrada, par, potencia y rendimiento.",
      "Distingue el rendimiento teórico, el límite de Carnot y el real, y explica las diferencias.",
      "Compara tecnologías con datos y con criterios energéticos y ambientales.",
      "Comunica las conclusiones con claridad y rigor.",
    ],
  },
  mapa: mapaB("MOTORES TÉRMICOS", [
    ["Primer principio", "ΔU = Q − W · transformaciones", "var(--pen)"],
    ["Segundo principio", "η = 1 − Q₂/Q₁ · Carnot", "var(--red)"],
    ["Ciclos", "Otto · Diésel · Brayton · Rankine", "var(--leaf)"],
    ["Motor real", "4T y 2T · par · potencia · c_e", "var(--inf)"],
  ]),
  tarjetas: [
    ["Gas ideal", "p·V = n·R·T (T en K)"],
    ["Primer principio", "ΔU = Q − W"],
    ["Isobárica", "W = p·ΔV"],
    ["Isotérmica", "W = Q = nRT·ln(V₂/V₁)"],
    ["Adiabática", "Q = 0 ; p·V^γ = cte"],
    ["Rendimiento", "η = W/Q₁ = 1 − Q₂/Q₁"],
    ["Carnot", "η = 1 − T₂/T₁"],
    ["Ciclo Otto", "η = 1 − 1/r^(γ−1)"],
    ["Cilindrada", "V_T = z · π·D²/4 · L"],
    ["Relación de compresión", "r = (V_u + V_c)/V_c"],
    ["Potencia", "P = M·ω ; P = p_me·V_T·n/120 (4T)"],
    ["Consumo específico", "c_e = ṁ / P (g/kWh)"],
  ],
  familias: [
    "Mirad la ficha técnica de vuestro coche o moto y buscad la cilindrada, la potencia y el par: ¿a qué régimen se dan?",
    "Tapad la salida de una bomba de bicicleta y comprimid el aire rápidamente: notad cómo se calienta el cilindro.",
    "Calculad el consumo real del coche familiar en un viaje (litros y kilómetros) y comparadlo con el oficial.",
    "Hablad sobre qué vehículos usa la familia y cuáles podrían sustituirse por transporte público, bicicleta o eléctricos.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas mecánicos» y «Sistemas energéticos»: principios de termodinámica; transformaciones del gas ideal; segundo principio y rendimiento de máquinas térmicas; ciclo de Carnot; motores de combustión interna de dos y cuatro tiempos, ciclos Otto y Diésel; parámetros de los motores (cilindrada, par, potencia, consumo específico) e impacto ambiental.`,
    ideas: [
      "Simulaciones PhET de gases y de máquinas térmicas para visualizar las transformaciones en el diagrama p-V.",
      "Desmontar un motor de cortacésped o de ciclomotor en el taller e identificar sus piezas.",
      "Análisis de las curvas de par y potencia de fichas técnicas reales en hoja de cálculo.",
      "Debate sobre la prohibición de los motores de combustión en turismos nuevos a partir de 2035.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Ciclo Otto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_Otto" },
    { t: "Ciclo diésel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_di%C3%A9sel" },
    { t: "Máquinas térmicas y ciclo de Carnot, Física de la Universidad de Sevilla (laplace.us.es)", url: "http://laplace.us.es/wiki/index.php/Ciclo_de_Carnot" },
  ],
  revisado: "2026-11-21",
};
