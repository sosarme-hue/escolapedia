// Matemáticas 3º ESO: probabilidad. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Probabilidad",
  minutos: 60,
  objetivos: ["Distinguir experimentos aleatorios y deterministas y describir su espacio muestral", "Operar con sucesos: unión, intersección y contrario", "Calcular probabilidades con la regla de Laplace y con frecuencias", "Resolver experimentos compuestos con diagramas de árbol y tablas"],
  claves: ["experimento aleatorio", "espacio muestral", "suceso", "regla de Laplace", "frecuencia relativa", "diagrama de árbol"],
  pregunta: {
    texto: "Lanzas una moneda cinco veces y sale cara las cinco. ¿Es más probable que la sexta sea cruz?",
    respuesta: "No. La moneda <mark>no tiene memoria</mark>: la probabilidad de cruz sigue siendo 1/2. Creer lo contrario se llama la «falacia del jugador» y hace perder mucho dinero en los casinos. La probabilidad nos ayuda a medir la incertidumbre sin dejarnos engañar por la intuición.",
  },
  bloques: [
    {
      html: `<h3>Experimentos aleatorios</h3><p>Un experimento es <b>aleatorio</b> si, aunque se repita en las mismas condiciones, no se puede predecir el resultado: lanzar un dado, sacar una carta, el sexo de un bebé. Es <b>determinista</b> si el resultado se conoce de antemano: soltar una piedra (cae) o calentar agua a 100 °C a nivel del mar (hierve).</p><p>El <b>espacio muestral</b> E es el conjunto de todos los resultados posibles. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}; al lanzar una moneda, E = {C, X}. Cada resultado es un <b>suceso elemental</b>.</p>`,
    },
    {
      html: `<h3>Sucesos</h3><p>Un <b>suceso</b> es cualquier subconjunto del espacio muestral. En un dado, «sacar par» es A = {2, 4, 6}. Tipos especiales:</p><ul><li><b>Suceso seguro</b>: siempre ocurre (E). «Sacar menos de 7».</li><li><b>Suceso imposible</b>: nunca ocurre (∅). «Sacar un 8».</li><li><b>Suceso contrario</b> de A, Ā: ocurre cuando no ocurre A. Si A = par, Ā = {1, 3, 5}.</li></ul><p>Con sucesos se opera: la <b>unión</b> A ∪ B ocurre si ocurre A <mark>o</mark> B (o ambos); la <b>intersección</b> A ∩ B, si ocurren A <mark>y</mark> B a la vez. Si A ∩ B = ∅, los sucesos son <b>incompatibles</b>.</p>`,
      svg: svg("Diagrama de Venn con los resultados de un dado: A son los pares y B los mayores que 3; la intersección contiene el 4 y el 6", `<rect x="14" y="14" width="232" height="140" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <circle cx="100" cy="84" r="52" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/><circle cx="160" cy="84" r="52" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="2.5"/>
        ${t(76, 90, "2", { s: 15 })}${t(130, 74, "4", { s: 15 })}${t(130, 102, "6", { s: 15 })}${t(186, 90, "5", { s: 15 })}${t(32, 140, "1", { s: 15 })}${t(228, 140, "3", { s: 15 })}
        ${t(22, 34, "A: par", { c: "var(--pen)", s: 11, a: "start" })}${t(238, 34, "B: > 3", { c: "var(--red)", s: 11, a: "end" })}${t(130, 172, "A ∩ B = {4, 6}", { c: "var(--ink)", s: 12 })}`),
    },
    {
      html: `<h3>Frecuencia y probabilidad</h3><p>Si repetimos un experimento muchas veces, la <b>frecuencia relativa</b> de un suceso (veces que ocurre / veces que se repite) se va estabilizando alrededor de un número. Ese número es su <b>probabilidad</b>. Es la <mark>ley de los grandes números</mark>.</p><p>Con 10 lanzamientos de moneda pueden salir 7 caras (0,7), pero con 10.000 saldrán muy cerca de 5.000 (0,5). Este método, llamado <b>probabilidad experimental</b>, es el único posible cuando los resultados no son igual de probables: una chincheta que cae de punta o de lado, o un penalti.</p>`,
      svg: svg("Gráfica de la frecuencia relativa de caras: oscila mucho al principio y se estabiliza en 0,5 al aumentar los lanzamientos", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/><path d="M30 85 H 240" stroke="var(--red)" stroke-width="1.8" stroke-dasharray="5 4"/>
        <path d="M32 40 L 40 120 L 48 50 L 58 105 L 70 70 L 84 96 L 100 78 L 120 92 L 145 81 L 175 88 L 205 84 L 238 86" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        ${t(26, 89, "0,5", { c: "var(--red)", s: 11, a: "end" })}${t(135, 170, "número de lanzamientos", { c: "var(--muted)", s: 10 })}${t(150, 40, "fr. relativa de cara", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>La regla de Laplace</h3><p>Si todos los resultados de un experimento son <b>equiprobables</b> (igual de probables), la probabilidad de un suceso A es:</p><p><mark>P(A) = casos favorables / casos posibles</mark></p><p>Ejemplos: P(sacar par en un dado) = 3/6 = 1/2. P(sacar un as de una baraja española de 40 cartas) = 4/40 = 1/10. La probabilidad siempre está entre <b>0</b> (imposible) y <b>1</b> (seguro), y puede expresarse como fracción, decimal o porcentaje.</p>`,
      video: { id: "qFQToHdNN9k", titulo: "Regla de Laplace | 4 ejemplos", canal: "Matemáticas profe Alex", vistas: 705123, megusta: 0 },
    },
    {
      html: `<h3>Propiedades de la probabilidad</h3><ul><li>0 ≤ P(A) ≤ 1.</li><li>P(E) = 1 y P(∅) = 0.</li><li><b>Contrario</b>: <mark>P(Ā) = 1 − P(A)</mark>. Muy útil cuando es más fácil calcular lo contrario.</li><li><b>Unión de incompatibles</b>: P(A ∪ B) = P(A) + P(B).</li><li><b>Unión en general</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B), para no contar dos veces lo común.</li></ul><p>En el dado, con A = par y B = mayor que 3: P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3. Compruébalo: A ∪ B = {2, 4, 5, 6}.</p>`,
    },
    {
      html: `<h3>Experimentos compuestos: diagrama de árbol</h3><p>Un experimento <b>compuesto</b> está formado por varios experimentos simples: lanzar dos monedas, sacar dos bolas de una urna. Para organizarlo se usa un <b>diagrama de árbol</b>: cada rama es un resultado posible y sobre ella se escribe su probabilidad.</p><p>Reglas del árbol:</p><ul><li>La probabilidad de un camino es el <mark>producto</mark> de las probabilidades de sus ramas.</li><li>Si un suceso se consigue por varios caminos, se <mark>suman</mark> sus probabilidades.</li></ul><p>P(dos caras) = 1/2 · 1/2 = 1/4. P(una cara y una cruz) = 1/4 + 1/4 = 1/2.</p>`,
      svg: svg("Diagrama de árbol de lanzar dos monedas: cuatro caminos CC, CX, XC y XX, cada uno con probabilidad un cuarto", `<circle cx="24" cy="90" r="4" fill="var(--ink)"/>
        <path d="M24 90 L 90 50 M24 90 L 90 130 M100 50 L 166 30 M100 50 L 166 70 M100 130 L 166 110 M100 130 L 166 150" stroke="var(--ink)" stroke-width="2"/>
        ${t(96, 54, "C", { c: "var(--pen)", s: 14 })}${t(96, 134, "X", { c: "var(--red)", s: 14 })}${t(52, 60, "1/2", { s: 10, c: "var(--muted)" })}${t(52, 126, "1/2", { s: 10, c: "var(--muted)" })}
        ${[["C", 30, "var(--pen)"], ["X", 70, "var(--red)"], ["C", 110, "var(--pen)"], ["X", 150, "var(--red)"]].map(([l, y, c], i) => `${t(172, y + 5, l, { c, s: 14 })}${t(218, y + 5, ["CC", "CX", "XC", "XX"][i] + " · 1/4", { s: 11 })}`).join("")}`),
      video: { id: "AjDK3NQZdPc", titulo: "Diagrama de árbol: árbol de probabilidad para principiantes", canal: "Daniel Carreón", vistas: 1770154, megusta: 0 },
    },
    {
      html: `<h3>Con y sin reemplazamiento</h3><p>Al sacar dos bolas de una urna importa si se devuelve la primera:</p><ul><li><b>Con reemplazamiento</b>: la urna queda igual y las extracciones son <b>independientes</b>. Con 3 rojas y 2 azules, P(dos rojas) = 3/5 · 3/5 = 9/25.</li><li><b>Sin reemplazamiento</b>: la segunda extracción depende de la primera. P(dos rojas) = 3/5 · <mark>2/4</mark> = 6/20 = 3/10.</li></ul><p>En el árbol sin reemplazamiento, las probabilidades de la segunda rama cambian según lo que salió en la primera.</p>`,
    },
    {
      html: `<h3>Tablas de doble entrada</h3><p>Cuando se lanzan dos dados, el espacio muestral tiene 6 · 6 = <b>36</b> resultados equiprobables. Una tabla de doble entrada los muestra todos:</p>${tabla(["+", "1", "2", "3", "4", "5", "6"], [1, 2, 3, 4, 5, 6].map((a) => [`<b>${a}</b>`, ...[1, 2, 3, 4, 5, 6].map((b) => String(a + b))]))}<p>La suma 7 aparece 6 veces: P(suma 7) = 6/36 = <mark>1/6</mark>, la más probable. La suma 2 o la 12 solo aparecen una vez: 1/36. Por eso en muchos juegos de mesa el 7 tiene un papel especial.</p>`,
    },
    {
      html: `<h3>La probabilidad en la vida real</h3><p>La probabilidad no es solo cosa de dados y monedas:</p><ul><li><b>Meteorología</b>: «70 % de probabilidad de lluvia» significa que, en días con condiciones parecidas, llovió en 7 de cada 10.</li><li><b>Medicina</b>: los ensayos clínicos comparan la frecuencia de curación con y sin un tratamiento.</li><li><b>Seguros</b>: las compañías calculan cuánto cobrar a partir de la probabilidad de accidentes.</li><li><b>Juegos de azar</b>: la probabilidad de acertar los seis números de la lotería primitiva es de <mark>1 entre casi 14 millones</mark>. Los juegos siempre están diseñados para que, a la larga, gane la banca.</li></ul><p>Entender la probabilidad ayuda a tomar decisiones con información y a no dejarse llevar por la suerte o el miedo.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo calcular una probabilidad",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Laplace si son equiprobables; frecuencia relativa si no; contrario uno menos P de A; árbol: multiplica en cada camino y suma caminos; unión: suma y resta la intersección">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["Laplace", "favorables / posibles (si son equiprobables)", "var(--pen)"], ["Experimental", "frecuencia relativa con muchas repeticiones", "var(--leaf)"], ["Contrario", "P(Ā) = 1 − P(A)", "var(--red)"], ["Unión", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "var(--inf)"], ["Árbol", "× a lo largo de un camino · + entre caminos", "var(--hl-ink)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "WeeEE8o1aqM", titulo: "Probabilidad súper fácil", canal: "Daniel Carreón", vistas: 6898155, megusta: 0, busqueda: "probabilidad regla de Laplace" },
  quiz: mezcla([
    { q: "¿Cuál es un experimento aleatorio?", o: ["Hervir agua a 100 °C", "Lanzar un dado", "Soltar una piedra"], a: 1, e: "No se puede predecir el resultado." },
    { q: "P(sacar un número menor que 3 con un dado) =", o: ["1/2", "1/3", "1/6"], a: 1, e: "2 favorables de 6." },
    { q: "Si P(A) = 0,35, P(Ā) =", o: ["0,65", "0,35", "−0,35"], a: 0, e: "1 − 0,35." },
    { q: "La probabilidad de un suceso imposible es…", o: ["1", "0", "−1"], a: 1, e: "Nunca ocurre." },
    { q: "En una baraja española de 40 cartas, P(oros) =", o: ["1/4", "1/10", "1/40"], a: 0, e: "10 / 40." },
    { q: "Al lanzar dos monedas, P(dos cruces) =", o: ["1/2", "1/4", "1/3"], a: 1, e: "1/2 · 1/2." },
    { q: "La suma más probable al lanzar dos dados es…", o: ["6", "7", "12"], a: 1, e: "6 casos de 36." },
    { q: "Si tras 5 caras seguidas lanzas otra vez, P(cruz) =", o: ["mayor que 1/2", "1/2", "menor que 1/2"], a: 1, e: "La moneda no tiene memoria." },
    { q: "Dos sucesos son incompatibles si…", o: ["su intersección es vacía", "su unión es E", "tienen la misma probabilidad"], a: 0, e: "No pueden ocurrir a la vez." },
    { q: "En un árbol, la probabilidad de un camino se obtiene…", o: ["sumando las ramas", "multiplicando las ramas", "restando"], a: 1, e: "Regla del producto." },
  ]),
  examen: mezcla([
    { q: "Urna con 4 rojas y 6 azules. Sin reemplazamiento, P(dos rojas) =", o: ["2/15", "4/25", "1/5"], a: 0, e: "4/10 · 3/9 = 12/90." },
    { q: "P(suma 10 con dos dados) =", o: ["1/12", "1/6", "1/36"], a: 0, e: "(4, 6), (5, 5), (6, 4): 3/36." },
    { q: "P(al menos una cara al lanzar 3 monedas) =", o: ["7/8", "3/8", "1/2"], a: 0, e: "1 − P(ninguna) = 1 − 1/8." },
  ]),
  feynman: ["Qué diferencia hay entre frecuencia relativa y probabilidad", "Cuándo se puede usar la regla de Laplace y cuándo no", "Por qué a veces es más fácil calcular el suceso contrario", "Cómo cambia un árbol con o sin reemplazamiento"],
  mapa: mapa("PROBABILIDAD", "var(--eso)", [
    ["Experimentos", "aleatorio · espacio muestral", "var(--ink)"],
    ["Sucesos", "unión · intersección · contrario", "var(--pen)"],
    ["Laplace", "favorables / posibles", "var(--leaf)"],
    ["Compuestos", "árbol · tablas", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Experimento aleatorio", "Aquel cuyo resultado no se puede predecir."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles."],
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles (resultados equiprobables)."],
    ["Suceso contrario", "P(Ā) = 1 − P(A)."],
    ["Sucesos incompatibles", "No pueden ocurrir a la vez: A ∩ B = ∅."],
    ["Ley de los grandes números", "Al repetir mucho, la frecuencia relativa se acerca a la probabilidad."],
    ["Probabilidad de un camino en un árbol", "Producto de las probabilidades de sus ramas."],
    ["Sin reemplazamiento", "La segunda extracción depende de la primera."],
  ],
  familias: ["Lanzad una chincheta 50 veces y estimad la probabilidad de que caiga de punta.", "Jugad a lanzar dos dados y anotad qué suma sale más: comparadlo con la tabla del tema.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: experimentos aleatorios, sucesos, frecuencia relativa y probabilidad, regla de Laplace, experimentos compuestos (RD 217/2022, Matemáticas 3º).",
    ideas: ["Experimento colectivo con monedas para ver la ley de los grandes números.", "Simulación de lanzamientos con hoja de cálculo o Scratch.", "Debate sobre juegos de azar y la falacia del jugador."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): azar y probabilidad", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "En una bolsa hay 5 bolas rojas, 3 verdes y 2 blancas. Se saca una. Halla P(roja), P(no verde) y P(roja o blanca).",
      pasos: ["Casos posibles: 10.", "P(roja) = 5/10 = 1/2.", "P(no verde) = 1 − 3/10 = 7/10.", "Roja y blanca son incompatibles: P = 5/10 + 2/10 = 7/10."],
      resultado: "1/2; 7/10; 7/10." },
    { enunciado: "Se sacan dos cartas de una baraja española de 40 sin devolver la primera. ¿Cuál es la probabilidad de que las dos sean de copas?",
      pasos: ["Primera de copas: 10/40.", "Si fue copas, quedan 9 copas de 39: 9/39.", "P = 10/40 · 9/39 = 90/1.560 = 3/52."],
      resultado: "3/52 ≈ 0,058." },
    { enunciado: "Se lanzan dos dados. Halla la probabilidad de que la suma sea mayor que 9.",
      pasos: ["Casos posibles: 36.", "Suma 10: (4,6), (5,5), (6,4). Suma 11: (5,6), (6,5). Suma 12: (6,6). Total: 6.", "P = 6/36 = 1/6."],
      resultado: "1/6." },
  ],
  errores: [
    "Aplicar Laplace cuando los resultados no son equiprobables.",
    "Creer que un resultado «toca» porque lleva tiempo sin salir.",
    "Sumar probabilidades de sucesos compatibles sin restar la intersección.",
    "En un árbol sin reemplazamiento, no cambiar las probabilidades de la segunda extracción.",
    "Contar (2, 5) y (5, 2) como un solo resultado al lanzar dos dados.",
    "Dar probabilidades mayores que 1 o negativas.",
  ],
  ejercicios: [
    { q: "Escribe el espacio muestral de lanzar una moneda y un dado.", sol: "E = {C1, C2, C3, C4, C5, C6, X1, X2, X3, X4, X5, X6}: 12 resultados." },
    { q: "En un dado, A = {1, 2, 3} y B = {2, 4, 6}. Halla A ∪ B, A ∩ B y Ā.", sol: "A ∪ B = {1, 2, 3, 4, 6}; A ∩ B = {2}; Ā = {4, 5, 6}." },
    { q: "Calcula P(sacar múltiplo de 3) al lanzar un dado.", sol: "{3, 6}: 2/6 = 1/3." },
    { q: "Una chincheta se lanza 200 veces y cae de punta 76. Estima P(de punta) y P(de lado).", sol: "76/200 = 0,38. P(de lado) ≈ 1 − 0,38 = 0,62." },
    { q: "En una clase hay 14 chicas y 16 chicos. Se elige a una persona al azar. P(chica)?", sol: "14/30 = 7/15 ≈ 0,47." },
    { q: "Se lanzan tres monedas. Dibuja el árbol y calcula P(exactamente dos caras).", sol: "8 caminos equiprobables (1/8 cada uno). Dos caras: CCX, CXC, XCC → 3/8." },
    { q: "Una urna tiene 3 bolas rojas y 2 negras. Se sacan dos con reemplazamiento. P(una de cada color)?", sol: "RN: 3/5 · 2/5 = 6/25; NR: 2/5 · 3/5 = 6/25. Total 12/25." },
    { q: "Repite el ejercicio anterior sin reemplazamiento.", sol: "RN: 3/5 · 2/4 = 6/20; NR: 2/5 · 3/4 = 6/20. Total 12/20 = 3/5." },
    { q: "Al lanzar dos dados, ¿qué es más probable, sumar 6 o sumar 8?", sol: "Suma 6: 5 casos; suma 8: 5 casos. Son igual de probables (5/36)." },
    { q: "Un examen tipo test tiene 3 preguntas de 4 opciones. Si contestas al azar, ¿qué probabilidad hay de acertar las tres? ¿Y de fallar todas?", sol: "Acertar las tres: (1/4)³ = 1/64. Fallar todas: (3/4)³ = 27/64." },
  ],
};
