// Matemáticas A 4º ESO · Ecuaciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, balanza } = require("./_eso4L2-mata");

const bal = balanza("Una ecuación es como una balanza en equilibrio: 2x más 3 a un lado y 11 al otro", "2x + 3", "11", "lo que hagas a un lado, hazlo al otro");

const equiv = pasos("Transformaciones que dan ecuaciones equivalentes: sumar o restar lo mismo y multiplicar o dividir por lo mismo distinto de cero", ["2x + 3 = 11", "restar 3: 2x = 8", "dividir entre 2: x = 4", "comprobar: 2·4 + 3 = 11 ✓"], "Despejar sin romper el equilibrio");

const primer = pasos("Pasos para resolver una ecuación de primer grado: quitar paréntesis, quitar denominadores, agrupar, reducir y despejar", ["Quitar paréntesis", "Quitar denominadores (m.c.m.)", "x a un lado, números al otro", "Reducir términos semejantes", "Despejar x y comprobar"], "Primer grado en 5 pasos");

const denom = lienzo("Ecuación con denominadores: x medios más x tercios igual a 10; multiplicando por 6 queda 3x más 2x igual a 60 y x igual a 12", `
  ${tx(130, 34, "x/2 + x/3 = 10", { fs: 20, c: "var(--pen)", fam: D })}
  <path d="M130 46 V62" stroke="var(--muted)" stroke-width="2"/><path d="M130 66 l-5 -8 h10 z" fill="var(--muted)"/>
  ${tx(130, 82, "× 6 (m.c.m. de 2 y 3)", { fs: 12, c: "var(--red)" })}
  ${tx(130, 110, "3x + 2x = 60", { fs: 18, c: "var(--ink)", fam: D })}${tx(130, 140, "5x = 60", { fs: 16, w: 400 })}${tx(130, 166, "x = 12", { fs: 18, c: "var(--leaf)", fam: D })}`);

const especiales = comparar("Casos especiales de ecuaciones de primer grado: sin solución cuando queda 0 igual a 5 e infinitas soluciones cuando queda 0 igual a 0", [
  ["Una solución", ["3x = 12", "x = 4"], "var(--leaf)"],
  ["Sin solución", ["x + 2 = x + 7", "0 = 5 ✗"], "var(--red)"],
  ["Infinitas", ["2(x+1) = 2x+2", "0 = 0 ✓"], "var(--pen)"],
], "¿Cuántas soluciones?");

const parabola = ejes("Las soluciones de x al cuadrado menos x menos 6 igual a 0 son los cortes de la parábola con el eje x: menos 2 y 3", { x: [-4, 5], y: [-7, 7], paso: 1, pasoY: 1, marcasX: [], marcasY: [-6], curvas: [{ f: (x) => x * x - x - 6, c: "var(--pen)", t: "y = x² − x − 6", tx: 1.2, ty: 5.4 }], puntos: [[-2, 0, "x = −2", "var(--red)", "so"], [3, 0, "x = 3", "var(--red)", "se"]] });

const incompletas = comparar("Ecuaciones de segundo grado incompletas: sin término en x se despeja, sin término independiente se saca factor común", [
  ["b = 0", ["x² − 9 = 0", "x² = 9", "x = ±3"], "var(--pen)"],
  ["c = 0", ["x² − 5x = 0", "x(x − 5) = 0", "x = 0 · x = 5"], "var(--red)"],
], "Incompletas: sin fórmula");

const formulaG = formula("Fórmula general de la ecuación de segundo grado", "x = (−b ± √(b² − 4ac)) / 2a", ["para ax² + bx + c = 0", "Δ = b² − 4ac es el discriminante", "el ± da las dos soluciones"], "var(--red)");

const discr = lienzo("El discriminante decide el número de soluciones: positivo dos cortes, cero uno y negativo ninguno", `
  ${[["Δ > 0", "2 soluciones", (x) => x * x - 2.2, "var(--leaf)"], ["Δ = 0", "1 doble", (x) => x * x, "var(--pen)"], ["Δ < 0", "ninguna", (x) => x * x + 1.4, "var(--red)"]].map(([t, d, f, c], i) => {
    const ox = 46 + i * 84, oy = 96;
    const pts = [...Array(31)].map((_, k) => { const x = -2 + k * (4 / 30); return `${(ox + x * 16).toFixed(1)} ${(oy - f(x) * 11).toFixed(1)}`; }).filter((p) => +p.split(" ")[1] > 30);
    return `<path d="M${ox - 36} ${oy} H${ox + 36}" stroke="var(--muted)" stroke-width="1.6"/><path d="M${pts.join(" L")}" fill="none" stroke="${c}" stroke-width="2.6"/>${tx(ox, 136, t, { fs: 13, c, max: 76 })}${tx(ox, 156, d, { fs: 11, w: 400, max: 78 })}`;
  }).join("")}${tx(130, 22, "Δ = b² − 4ac", { fs: 14, c: "var(--muted)" })}`);

const sumaProd = cajas("Suma y producto de las soluciones de una ecuación de segundo grado y cómo escribir una ecuación a partir de sus soluciones", [
  ["Suma", ["x₁ + x₂ = −b/a", "x² − 5x + 6: 2+3 = 5"]], ["Producto", ["x₁ · x₂ = c/a", "2 · 3 = 6"]],
  ["Al revés", ["soluciones 2 y 3", "x² − 5x + 6 = 0"]], ["Factorizar", ["a(x − x₁)(x − x₂)", "(x − 2)(x − 3)"]],
], "Propiedades de las soluciones");

const bicuad = pasos("Ecuación bicuadrada: cambio de variable z igual a x al cuadrado, resolver en z y deshacer el cambio", ["x⁴ − 13x² + 36 = 0", "z = x² → z² − 13z + 36 = 0", "z = 9 o z = 4", "x² = 9 → x = ±3", "x² = 4 → x = ±2"], "Bicuadradas: cambio de variable");

const factores = pasos("Ecuaciones factorizadas: un producto es cero si algún factor es cero", ["(x − 1)(x + 4)(2x − 6) = 0", "x − 1 = 0 → x = 1", "x + 4 = 0 → x = −4", "2x − 6 = 0 → x = 3"], "Producto igual a cero");

const irracional = pasos("Ecuación irracional: aislar la raíz, elevar al cuadrado, resolver y comprobar porque pueden aparecer soluciones falsas", ["√(x + 7) = x + 1", "elevar: x + 7 = x² + 2x + 1", "x² + x − 6 = 0 → x = 2, x = −3", "x = 2: √9 = 3 ✓", "x = −3: √4 = 2 ≠ −2 ✗"], "Con raíces: ¡comprobar!");

const racional = pasos("Ecuación racional con x en el denominador: multiplicar por el mínimo común múltiplo, resolver y descartar valores que anulan denominadores", ["6/x + 1 = 5/2   (× 2x)", "12 + 2x = 5x", "12 = 3x → x = 4", "x = 4 no anula: válida ✓"], "Con x en el denominador");

const problema = pasos("Método para resolver problemas con ecuaciones en cinco pasos: leer, elegir la incógnita, plantear, resolver y comprobar", ["Leer y entender", "Elegir la incógnita: x = …", "Plantear la ecuación", "Resolver", "Comprobar y responder con unidades"], "Problemas: 5 pasos");

const rect = lienzo("Problema geométrico: un rectángulo de largo x más 3 y ancho x tiene área 40; x al cuadrado más 3x igual a 40 da x igual a 5", `
  <rect x="40" y="40" width="160" height="90" rx="4" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
  ${tx(120, 32, "x + 3", { fs: 14, c: "var(--pen)" })}${tx(24, 90, "x", { fs: 14, c: "var(--pen)" })}${tx(120, 92, "A = 40 m²", { fs: 16, c: "var(--ink)" })}
  ${tx(130, 156, "x(x + 3) = 40 → x = 5", { fs: 13, c: "var(--leaf)" })}${tx(130, 174, "(la solución −8 no vale)", { fs: 11, w: 400, c: "var(--muted)" })}`, 182);

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Ecuaciones",
  minutos: 115,
  objetivos: [
    "Reconocer ecuaciones equivalentes y transformarlas correctamente",
    "Resolver ecuaciones de primer grado con paréntesis y denominadores",
    "Resolver ecuaciones de segundo grado completas e incompletas e interpretar el discriminante",
    "Resolver ecuaciones bicuadradas, factorizadas, sencillas con radicales y con x en el denominador",
    "Plantear y resolver problemas de la vida real con ecuaciones, comprobando las soluciones",
  ],
  claves: ["ecuación", "incógnita", "solución", "ecuaciones equivalentes", "segundo grado", "discriminante", "bicuadrada", "comprobación"],
  pregunta: {
    texto: "Un terreno rectangular mide 3 m más de largo que de ancho y tiene 40 m² de área. ¿Cuánto mide? ¿Se puede averiguar sin probar números al azar?",
    respuesta: "Sí, con una <b>ecuación</b>. Si el ancho es x, el largo es x + 3 y x(x + 3) = 40, es decir, x² + 3x − 40 = 0. Con la fórmula de segundo grado salen x = 5 y x = −8; como una longitud no puede ser negativa, el terreno mide <mark>5 m × 8 m</mark>.",
  },
  lectura: {
    titulo: "Las ecuaciones que mueven el mundo",
    html: `<p>¿Cuánto tiempo tarda en frenar un coche a 90 km/h? ¿Cuántas entradas debe vender un grupo de música para cubrir los gastos de una gira? ¿A qué precio hay que vender un producto para ganar lo máximo? ¿Cuánta dosis de un medicamento necesita un niño según su peso? Todas estas preguntas tienen algo en común: se responden planteando y resolviendo una <b>ecuación</b>.</p><p>Hace casi 4.000 años, los escribas babilonios ya resolvían problemas que hoy escribiríamos como ecuaciones de segundo grado, para repartir campos y calcular cosechas. Lo hacían con recetas de pasos, sin letras. Siglos después, matemáticos indios como Brahmagupta aceptaron soluciones negativas, y en el Renacimiento se encontró la forma general de resolver ecuaciones de tercer y cuarto grado, en una famosa disputa entre Tartaglia y Cardano.</p><p>Hoy las ecuaciones están dentro de los GPS, de las hojas de cálculo y de los videojuegos. Pero la idea básica es la misma de siempre: traducir el problema a lenguaje matemático, mantener el equilibrio al transformar y, sobre todo, <b>comprobar</b> que la solución tiene sentido. En este tema aprenderás a hacerlo con ecuaciones de primer y segundo grado y algunas más.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una ecuación</h3><p>Una <b>ecuación</b> es una igualdad entre dos expresiones algebraicas que solo se cumple para ciertos valores de la letra, llamada <b>incógnita</b>. La parte de la izquierda del signo igual es el <b>primer miembro</b> y la de la derecha, el <b>segundo miembro</b>. Los valores que hacen cierta la igualdad son las <b>soluciones</b>: x = 4 es solución de 2x + 3 = 11 porque 2 · 4 + 3 = 11.</p><p>No hay que confundir una ecuación con una <b>identidad</b>, que es cierta para cualquier valor (como 2(x + 1) = 2x + 2). El <b>grado</b> de una ecuación es el mayor exponente de la incógnita una vez simplificada: 3x − 5 = 7 es de primer grado y x² − 4x = 5 es de segundo grado. Una buena imagen de una ecuación es una <b>balanza en equilibrio</b>.</p>`, svg: bal },
    { html: `<h3>1.2 Ecuaciones equivalentes</h3><p>Dos ecuaciones son <b>equivalentes</b> si tienen las mismas soluciones. Resolver una ecuación consiste en transformarla en otras equivalentes cada vez más sencillas, hasta llegar a «x = número». Para mantener el equilibrio solo se permiten dos tipos de transformaciones: <b>sumar o restar</b> el mismo número o expresión a los dos miembros, y <b>multiplicar o dividir</b> los dos miembros por el mismo número distinto de cero.</p><p>Las conocidas reglas de «pasar» son consecuencias de esto: lo que está sumando pasa restando, y lo que está multiplicando pasa dividiendo. Pero entender por qué funcionan evita errores como «pasar» un número que divide solo a un término o dividir entre una expresión que podría valer cero. Al final, <mark>comprueba siempre</mark> sustituyendo en la ecuación original.</p>`, svg: equiv },
    { html: `<h3>1.3 Ecuaciones de primer grado</h3><p>Una ecuación de primer grado se puede reducir a la forma ax = b con a ≠ 0, cuya solución es x = b/a. Cuando la ecuación es más complicada, conviene seguir siempre el mismo orden: 1) <b>quitar paréntesis</b> aplicando la propiedad distributiva y cuidando los signos; 2) <b>quitar denominadores</b>; 3) <b>trasponer</b>: términos con x a un lado y números al otro; 4) <b>reducir</b> términos semejantes; 5) <b>despejar</b> x.</p><p>Ejemplo: 3(x − 2) − (x + 4) = 2x − 10 + x. Paréntesis: 3x − 6 − x − 4 = 3x − 10. Agrupando: 2x − 10 = 3x − 10, de donde −x = 0 y x = 0. Comprobación: 3(−2) − 4 = −10 y 0 − 10 + 0 = −10 ✓. Fíjate en el <b>signo menos delante del paréntesis</b>, que cambia los signos de todo lo que hay dentro.</p>`, svg: primer },
    { html: `<h3>1.4 Ecuaciones con denominadores</h3><p>Las fracciones se eliminan en un solo paso: se multiplican <b>todos los términos</b> de la ecuación, también los que no tienen denominador, por el <b>mínimo común múltiplo</b> de los denominadores. En x/2 + x/3 = 10, el m.c.m. es 6: 3x + 2x = 60, luego x = 12.</p><p>Si un numerador tiene varios términos, hay que ponerlo <b>entre paréntesis</b> al quitar el denominador, porque el signo de la fracción afecta a todo el numerador: (x − 1)/4 − (x − 3)/6 = 1 → 3(x − 1) − 2(x − 3) = 12 → 3x − 3 − 2x + 6 = 12 → x = 9. Olvidar este paréntesis es, con diferencia, el error más habitual en estas ecuaciones.</p>`, svg: denom },
    { html: `<h3>1.5 Ecuaciones sin solución o con infinitas soluciones</h3><p>Casi todas las ecuaciones de primer grado tienen una única solución, pero al simplificar pueden aparecer dos situaciones especiales. Si las x desaparecen y queda una igualdad falsa, como 0 = 5, la ecuación <b>no tiene solución</b>: por ejemplo, x + 2 = x + 7 (ningún número más 2 da lo mismo que ese número más 7).</p><p>Si las x desaparecen y queda una igualdad siempre cierta, como 0 = 0, la ecuación tiene <b>infinitas soluciones</b>: es una identidad, como 2(x + 1) = 2x + 2. En los problemas, estas situaciones tienen significado: «no hay solución» puede indicar que los datos son imposibles, y «infinitas soluciones», que falta información para decidir.</p>`, svg: especiales },
    { html: `<h3>2.1 Ecuaciones de segundo grado</h3><p>Una ecuación de <b>segundo grado</b> es la que se puede escribir como <mark>ax² + bx + c = 0</mark>, con a ≠ 0. Por ejemplo, x² − x − 6 = 0 (a = 1, b = −1, c = −6). Antes de resolverla, hay que pasar todo a un miembro, simplificar y ordenar. Puede tener <b>dos soluciones, una o ninguna</b>.</p><p>Hay una forma visual de entenderlas: las soluciones de ax² + bx + c = 0 son los puntos en los que la parábola y = ax² + bx + c <b>corta al eje X</b>. La parábola de x² − x − 6 corta en x = −2 y x = 3, que son sus soluciones. Esta relación se usa mucho en física y en economía: por ejemplo, para saber cuándo un balón lanzado al aire vuelve al suelo.</p>`, svg: parabola },
    { html: `<h3>2.2 Ecuaciones incompletas</h3><p>Si falta algún término, la ecuación es <b>incompleta</b> y se resuelve sin fórmula. Si <b>b = 0</b> (no hay término en x), como en x² − 9 = 0, se despeja x²: x² = 9 y x = ±3. Si el número que queda es negativo (x² = −4) no hay solución real.</p><p>Si <b>c = 0</b> (no hay término independiente), como en x² − 5x = 0, se saca factor común: x(x − 5) = 0. Un producto vale cero cuando alguno de sus factores es cero, así que x = 0 o x = 5. ¡Cuidado! Nunca se debe dividir entre x para «simplificar», porque se pierde la solución x = 0. Este tipo de ecuaciones aparece, por ejemplo, al calcular cuándo un objeto lanzado desde el suelo vuelve a caer.</p>`, svg: incompletas, video: { id: "qBEigKQhmXI", titulo: "Ecuaciones cuadráticas incompletas", canal: "Daniel Carreón", vistas: 2110287, megusta: 0 } },
    { html: `<h3>2.3 La fórmula general</h3><p>Las ecuaciones completas ax² + bx + c = 0 se resuelven con la <b>fórmula general</b>:</p><div class="formula"><span>x = (−b ± √(b² − 4ac)) / 2a</span></div><p>Ejemplo: 2x² − 3x − 2 = 0, con a = 2, b = −3 y c = −2. b² − 4ac = 9 + 16 = 25, y √25 = 5. Entonces x = (3 ± 5)/4, que da x₁ = 2 y x₂ = −1/2. Para no equivocarse, conviene <b>escribir a, b y c con su signo</b> antes de sustituir y poner paréntesis a los números negativos: −b con b = −3 es +3, y (−3)² = 9.</p><p>Si a es negativo, se puede multiplicar toda la ecuación por −1 para trabajar más cómodo; y si todos los coeficientes tienen un factor común, conviene simplificar primero: 4x² − 8x − 12 = 0 es lo mismo que x² − 2x − 3 = 0.</p>`, svg: formulaG },
    { html: `<h3>2.4 El discriminante</h3><p>La expresión que va dentro de la raíz, <b>Δ = b² − 4ac</b>, se llama <b>discriminante</b> porque «discrimina» cuántas soluciones hay sin necesidad de terminar la fórmula. Si <b>Δ &gt; 0</b>, hay <b>dos soluciones</b> distintas (la parábola corta dos veces al eje). Si <b>Δ = 0</b>, hay <b>una solución doble</b> (la parábola toca el eje en su vértice). Si <b>Δ &lt; 0</b>, <b>no hay solución real</b>, porque no existe la raíz cuadrada de un número negativo.</p><p>Ejemplos: x² − 6x + 9 = 0 tiene Δ = 36 − 36 = 0 y una solución doble, x = 3. x² + x + 5 = 0 tiene Δ = 1 − 20 = −19 y no tiene soluciones. En los problemas, un discriminante negativo suele indicar que la situación planteada es imposible: por ejemplo, que un balón nunca alcanza cierta altura.</p>${tabla(["Discriminante", "Soluciones", "Parábola"], [["Δ &gt; 0", "dos distintas", "corta al eje X en dos puntos"], ["Δ = 0", "una doble", "toca el eje X en el vértice"], ["Δ &lt; 0", "ninguna real", "no toca el eje X"]])}`, svg: discr, video: { id: "gV8Iu5M1sac", titulo: "Ecuación cuadrática por fórmula general, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 569085, megusta: 0 } },
    { html: `<h3>2.5 Suma y producto de las soluciones</h3><p>Las soluciones de ax² + bx + c = 0 cumplen dos relaciones muy útiles: su <b>suma</b> es −b/a y su <b>producto</b> es c/a. En x² − 5x + 6 = 0, las soluciones 2 y 3 suman 5 y multiplican 6. Esto permite comprobar resultados rápidamente o resolver de cabeza ecuaciones sencillas con a = 1: buscamos dos números que sumen −b y multipliquen c.</p><p>También sirve para el camino inverso: <b>construir una ecuación</b> conociendo sus soluciones. Si queremos soluciones 4 y −1, la suma es 3 y el producto −4: x² − 3x − 4 = 0. Y en general, conociendo las soluciones x₁ y x₂, el polinomio se factoriza como a(x − x₁)(x − x₂), lo que conecta este tema con el de polinomios.</p>`, svg: sumaProd },
    { html: `<h3>3.1 Ecuaciones bicuadradas</h3><p>Una ecuación <b>bicuadrada</b> tiene la forma ax⁴ + bx² + c = 0: solo aparecen potencias pares. Se resuelve con un <b>cambio de variable</b>: llamamos z = x², de modo que x⁴ = z², y la ecuación se convierte en una de segundo grado en z.</p><p>Ejemplo: x⁴ − 13x² + 36 = 0 → z² − 13z + 36 = 0 → z = 9 o z = 4. Después se <b>deshace el cambio</b>: x² = 9 da x = ±3 y x² = 4 da x = ±2. Hay cuatro soluciones: −3, −2, 2 y 3. Si alguna z es negativa, no da soluciones reales, porque x² no puede ser negativo. Una bicuadrada puede tener 4, 3, 2, 1 o ninguna solución real.</p>`, svg: bicuad },
    { html: `<h3>3.2 Ecuaciones factorizadas y de grado mayor</h3><p>Si una ecuación está escrita como un <b>producto igual a cero</b>, se resuelve igualando cada factor a cero: (x − 1)(x + 4)(2x − 6) = 0 da x = 1, x = −4 y x = 3. Es la propiedad más potente para ecuaciones de grado mayor que 2.</p><p>Por eso, ante una ecuación como x³ − 7x + 6 = 0, la estrategia es <b>factorizar</b> el polinomio (con Ruffini y los divisores del término independiente): (x − 1)(x − 2)(x + 3) = 0, y las soluciones son 1, 2 y −3. Importante: el producto debe ser igual a <b>cero</b>. Si fuera (x − 1)(x + 2) = 4, primero hay que desarrollar, pasar el 4 y volver a factorizar.</p>`, svg: factores },
    { html: `<h3>3.3 Ecuaciones con radicales</h3><p>En una ecuación <b>irracional</b> la incógnita está dentro de una raíz, como √(x + 7) = x + 1. Se resuelve <b>aislando la raíz</b> en un miembro y <b>elevando al cuadrado</b> los dos miembros: x + 7 = x² + 2x + 1, que da x² + x − 6 = 0, con soluciones 2 y −3.</p><p>Elevar al cuadrado puede introducir <b>soluciones falsas</b>, porque 2² = (−2)² aunque 2 ≠ −2. Por eso es <mark>obligatorio comprobar</mark> en la ecuación original: x = 2 da √9 = 3 = 2 + 1 ✓; x = −3 da √4 = 2, pero −3 + 1 = −2 ✗. La única solución es x = 2. Estas ecuaciones aparecen al despejar en fórmulas con raíces, como la del periodo de un péndulo o la velocidad de caída.</p>`, svg: irracional, video: { id: "F79EhYncQng", titulo: "Cómo resolver ecuaciones irracionales: 2 ejercicios resueltos", canal: "Matemáticas con Juan", vistas: 218194, megusta: 0 } },
    { html: `<h3>3.4 Ecuaciones con la x en el denominador</h3><p>Cuando la incógnita aparece en algún denominador, la ecuación es <b>racional</b>. Se resuelve multiplicando todos los términos por el m.c.m. de los denominadores (que ahora contiene x), con lo que se obtiene una ecuación polinómica. En 6/x + 1 = 5/2 se multiplica por 2x: 12 + 2x = 5x, luego x = 4.</p><p>Al final hay que <b>descartar</b> los valores que anulan algún denominador, porque no se puede dividir entre cero. Si en otro ejemplo saliera x = 0 o un valor que hace cero (x − 2), no sería válido. Estas ecuaciones aparecen en problemas de trabajo conjunto («un grifo tarda 3 h y otro 6 h; ¿cuánto tardan juntos?») y de velocidades medias.</p>`, svg: racional },
    { html: `<h3>4.1 Resolver problemas con ecuaciones</h3><p>Resolver problemas es como traducir de un idioma a otro. Un método fiable tiene cinco pasos: 1) <b>Leer</b> el enunciado dos veces y localizar lo que se pregunta; 2) <b>elegir la incógnita</b> y escribir qué representa («x = edad de Marta hoy»); 3) <b>plantear</b> la ecuación traduciendo cada frase; 4) <b>resolver</b>; 5) <b>comprobar</b> en el enunciado (no solo en la ecuación) y responder con una frase y unidades.</p><p>Ejemplo de edades: «Una madre tiene 40 años y su hijo 10. ¿Dentro de cuántos años la madre tendrá el doble de edad que el hijo?». Si x son los años: 40 + x = 2(10 + x) → 40 + x = 20 + 2x → x = 20. Dentro de 20 años: 60 y 30 ✓. Otros tipos frecuentes son los de dinero, mezclas, móviles y números consecutivos.</p>`, svg: problema },
    { html: `<h3>4.2 Problemas de segundo grado y validez de las soluciones</h3><p>Muchos problemas de geometría, de física o de economía llevan a ecuaciones de segundo grado. Un rectángulo de área 40 m² cuyo largo mide 3 m más que el ancho: x(x + 3) = 40 → x² + 3x − 40 = 0 → x = 5 o x = −8. Una medida no puede ser negativa, así que solo vale <mark>x = 5</mark>: el rectángulo mide 5 m × 8 m.</p><p>Siempre hay que preguntarse si cada solución matemática tiene <b>sentido en el contexto</b>: no hay longitudes ni tiempos negativos, el número de personas debe ser entero y positivo, y un precio no puede superar cierto valor. A veces las dos soluciones son válidas: un balón lanzado hacia arriba pasa dos veces por la misma altura, una al subir y otra al bajar.</p>`, svg: rect },
  ],
  ejemplos: [
    { enunciado: "Resuelve 2(x − 3) − (x − 5)/3 = 4 − x.", pasos: ["Paréntesis: 2x − 6 − (x − 5)/3 = 4 − x.", "Multiplicamos todo por 3: 6x − 18 − (x − 5) = 12 − 3x.", "Quitamos el paréntesis: 6x − 18 − x + 5 = 12 − 3x.", "Agrupamos: 6x − x + 3x = 12 + 18 − 5 → 8x = 25.", "x = 25/8 = 3,125. Comprobación: ambos miembros dan 0,875."], resultado: "x = 25/8." },
    { enunciado: "Resuelve 3x² − 12 = 0 y 4x² + 6x = 0.", pasos: ["3x² = 12 → x² = 4 → x = ±2.", "2x(2x + 3) = 0 → x = 0 o 2x + 3 = 0 → x = −3/2."], resultado: "Primera: x = 2, x = −2. Segunda: x = 0, x = −3/2." },
    { enunciado: "Resuelve x² − 4x − 5 = 0 con la fórmula y comprueba con suma y producto.", pasos: ["a = 1, b = −4, c = −5. Δ = 16 + 20 = 36.", "x = (4 ± 6)/2 → x₁ = 5, x₂ = −1.", "Suma: 5 + (−1) = 4 = −b/a ✓. Producto: −5 = c/a ✓."], resultado: "x = 5 y x = −1." },
    { enunciado: "Resuelve x⁴ − 5x² − 36 = 0.", pasos: ["z = x²: z² − 5z − 36 = 0.", "Δ = 25 + 144 = 169 → z = (5 ± 13)/2 → z = 9 o z = −4.", "x² = 9 → x = ±3.", "x² = −4 no tiene solución real."], resultado: "x = 3 y x = −3." },
    { enunciado: "Resuelve x − √(2x − 3) = 3.", pasos: ["Aislamos la raíz: x − 3 = √(2x − 3).", "Elevamos al cuadrado: x² − 6x + 9 = 2x − 3 → x² − 8x + 12 = 0.", "x = 6 o x = 2.", "Comprobamos: x = 6 → 6 − √9 = 3 ✓. x = 2 → 2 − √1 = 1 ≠ 3 ✗."], resultado: "Solo x = 6." },
    { enunciado: "La suma de los cuadrados de dos números consecutivos es 85. ¿Qué números son?", pasos: ["Números: x y x + 1.", "x² + (x + 1)² = 85 → 2x² + 2x + 1 = 85 → x² + x − 42 = 0.", "Δ = 1 + 168 = 169 → x = (−1 ± 13)/2 → x = 6 o x = −7.", "Comprobación: 36 + 49 = 85 ✓ y 49 + 36 = 85 ✓."], resultado: "6 y 7, o bien −7 y −6." },
  ],
  errores: [
    "Olvidar cambiar los signos al quitar un paréntesis precedido de un menos.",
    "Al quitar denominadores, no multiplicar los términos sin denominador o no poner paréntesis en el numerador.",
    "Dividir entre x en x² − 5x = 0 y perder la solución x = 0.",
    "En x² = 9, dar solo x = 3 y olvidar x = −3.",
    "Equivocarse con los signos en la fórmula: con b = −4, −b es +4 y b² es 16.",
    "No comprobar las ecuaciones con radicales o con x en el denominador, aceptando soluciones falsas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Comprueba si x = −2 es solución de 3x + 8 = x + 4 y de x² + 2x = 0.", sol: "3(−2) + 8 = 2 y −2 + 4 = 2: sí. (−2)² + 2(−2) = 4 − 4 = 0: sí." },
    { nivel: "básico", q: "Resuelve: a) 5x − 7 = 3x + 9 b) 4 − 2x = 10 c) 7x = 3x.", sol: "a) 2x = 16, x = 8. b) −2x = 6, x = −3. c) 4x = 0, x = 0." },
    { nivel: "básico", q: "Resuelve: 3(x + 2) − 2(x − 1) = 12.", sol: "3x + 6 − 2x + 2 = 12 → x + 8 = 12 → x = 4." },
    { nivel: "básico", q: "Resuelve: x/4 + x/6 = 5.", sol: "m.c.m. 12: 3x + 2x = 60 → 5x = 60 → x = 12." },
    { nivel: "básico", q: "¿Cuántas soluciones tienen? a) 3x + 1 = 3x − 4 b) 2(x − 3) = 2x − 6.", sol: "a) 1 = −4, falso: ninguna solución. b) 0 = 0: infinitas soluciones (identidad)." },
    { nivel: "básico", q: "Resuelve: x² − 49 = 0 y 2x² − 18 = 0.", sol: "x² = 49 → x = ±7. 2x² = 18 → x² = 9 → x = ±3." },
    { nivel: "básico", q: "Resuelve: x² − 6x = 0 y 3x² + 12x = 0.", sol: "x(x − 6) = 0 → x = 0, x = 6. 3x(x + 4) = 0 → x = 0, x = −4." },
    { nivel: "básico", q: "Resuelve con la fórmula: x² − 5x + 6 = 0.", sol: "Δ = 25 − 24 = 1. x = (5 ± 1)/2 → x = 3, x = 2." },
    { nivel: "básico", q: "Resuelve: x² + 2x − 15 = 0.", sol: "Δ = 4 + 60 = 64. x = (−2 ± 8)/2 → x = 3, x = −5." },
    { nivel: "básico", q: "Sin resolver, di cuántas soluciones tiene: a) x² + 4x + 4 = 0 b) x² − 3x + 5 = 0 c) 2x² − x − 1 = 0.", sol: "a) Δ = 16 − 16 = 0: una doble. b) Δ = 9 − 20 = −11: ninguna. c) Δ = 1 + 8 = 9: dos." },
    { nivel: "básico", q: "Resuelve: (x − 4)(x + 7) = 0.", sol: "x − 4 = 0 → x = 4; x + 7 = 0 → x = −7." },
    { nivel: "básico", q: "El triple de un número menos 8 es 22. ¿Cuál es el número?", sol: "3x − 8 = 22 → 3x = 30 → x = 10." },
    { nivel: "medio", q: "Resuelve: (x + 1)/3 − (x − 2)/4 = 2.", sol: "×12: 4(x + 1) − 3(x − 2) = 24 → 4x + 4 − 3x + 6 = 24 → x = 14." },
    { nivel: "medio", q: "Resuelve: 2(x − 1)/5 − x/2 = (x − 3)/10.", sol: "×10: 4(x − 1) − 5x = x − 3 → 4x − 4 − 5x = x − 3 → −2x = 1 → x = −1/2." },
    { nivel: "medio", q: "Resuelve: 3x² − 5x − 2 = 0.", sol: "Δ = 25 + 24 = 49. x = (5 ± 7)/6 → x = 2, x = −1/3." },
    { nivel: "medio", q: "Resuelve: (x − 2)² = 2x − 1.", sol: "x² − 4x + 4 = 2x − 1 → x² − 6x + 5 = 0 → x = 5, x = 1." },
    { nivel: "medio", q: "Resuelve: x(x + 3) − 2(x + 6) = 0.", sol: "x² + 3x − 2x − 12 = 0 → x² + x − 12 = 0 → x = 3, x = −4." },
    { nivel: "medio", q: "Escribe una ecuación de segundo grado cuyas soluciones sean 5 y −2.", sol: "Suma 3, producto −10: x² − 3x − 10 = 0. Equivale a (x − 5)(x + 2) = 0." },
    { nivel: "medio", q: "Halla k para que x² − 6x + k = 0 tenga una solución doble.", sol: "Δ = 36 − 4k = 0 → k = 9. La solución es x = 3." },
    { nivel: "medio", q: "Resuelve la bicuadrada x⁴ − 10x² + 9 = 0.", sol: "z = x²: z² − 10z + 9 = 0 → z = 9, z = 1. x = ±3 y x = ±1." },
    { nivel: "medio", q: "Resuelve: √(x + 5) = 3 y √(2x + 1) = x − 1.", sol: "x + 5 = 9 → x = 4 (comprobada). 2x + 1 = x² − 2x + 1 → x² − 4x = 0 → x = 0 o x = 4. x = 0: √1 = 1 ≠ −1 ✗. x = 4: √9 = 3 ✓. Solución x = 4." },
    { nivel: "medio", q: "Resuelve: 2/x + 3 = 5/x + 2.", sol: "×x: 2 + 3x = 5 + 2x → x = 3 (no anula el denominador)." },
    { nivel: "medio", q: "Dentro de 8 años, la edad de Lucía será el triple de la que tenía hace 4 años. ¿Qué edad tiene?", sol: "x + 8 = 3(x − 4) → x + 8 = 3x − 12 → 20 = 2x → x = 10 años. Comprobación: 18 = 3 · 6 ✓." },
    { nivel: "medio", q: "Un número natural más su cuadrado es 132. ¿Cuál es?", sol: "x² + x − 132 = 0 → Δ = 1 + 528 = 529 → x = (−1 ± 23)/2 → x = 11 o x = −12. Natural: 11." },
    { nivel: "medio", q: "En una tienda, unos vaqueros cuestan 15 € más que una camiseta. Por 2 vaqueros y 3 camisetas se pagan 130 €. ¿Cuánto cuesta cada prenda?", sol: "Camiseta x, vaqueros x + 15. 2(x + 15) + 3x = 130 → 5x + 30 = 130 → x = 20. Camiseta 20 €, vaqueros 35 €." },
    { nivel: "medio", q: "Un rectángulo tiene 34 m de perímetro y 60 m² de área. Halla sus lados.", sol: "Lados x y 17 − x. x(17 − x) = 60 → x² − 17x + 60 = 0 → x = 12 o x = 5. Los lados miden 12 m y 5 m." },
    { nivel: "avanzado", q: "Resuelve: (x + 2)/(x − 1) = (x + 8)/(x + 2).", sol: "(x + 2)² = (x + 8)(x − 1) → x² + 4x + 4 = x² + 7x − 8 → −3x = −12 → x = 4. No anula denominadores: válida." },
    { nivel: "avanzado", q: "Resuelve: x³ − 2x² − 15x = 0.", sol: "x(x² − 2x − 15) = 0 → x = 0, o x² − 2x − 15 = 0 → x = 5, x = −3." },
    { nivel: "avanzado", q: "Resuelve: x⁴ − 3x² − 4 = 0 y explica cuántas soluciones reales tiene.", sol: "z² − 3z − 4 = 0 → z = 4 o z = −1. x² = 4 → x = ±2; x² = −1 no da soluciones. Tiene 2 soluciones reales." },
    { nivel: "avanzado", q: "Resuelve: √(x + 4) + 2 = x.", sol: "√(x + 4) = x − 2 → x + 4 = x² − 4x + 4 → x² − 5x = 0 → x = 0 o x = 5. x = 0: √4 + 2 = 4 ≠ 0 ✗. x = 5: √9 + 2 = 5 ✓. Solución x = 5." },
    { nivel: "avanzado", q: "Un grifo llena un depósito en 3 h y otro en 6 h. ¿Cuánto tardan juntos? Plantea una ecuación con x en el denominador.", sol: "En 1 h llenan 1/3 + 1/6 del depósito. Juntos, 1/x: 1/3 + 1/6 = 1/x → ×6x: 2x + x = 6 → x = 2 h." },
    { nivel: "avanzado", q: "Se lanza una pelota hacia arriba y su altura es h(t) = −5t² + 20t + 1 (m). ¿Cuándo está a 16 m? ¿Por qué hay dos respuestas?", sol: "−5t² + 20t + 1 = 16 → 5t² − 20t + 15 = 0 → t² − 4t + 3 = 0 → t = 1 s o t = 3 s. Pasa por 16 m al subir (1 s) y al bajar (3 s)." },
    { nivel: "avanzado", q: "Un grupo de amigos alquila una casa por 600 €. Si fueran 2 amigos más, cada uno pagaría 25 € menos. ¿Cuántos son?", sol: "600/x − 600/(x + 2) = 25 → 600(x + 2) − 600x = 25x(x + 2) → 1.200 = 25x² + 50x → x² + 2x − 48 = 0 → x = 6 o x = −8. Son 6 amigos (100 € cada uno; con 8, 75 €)." },
    { nivel: "avanzado", q: "Un jardín rectangular de 12 m × 8 m se rodea de un camino de ancho constante. Si el área del camino es 64 m², ¿qué ancho tiene?", sol: "(12 + 2x)(8 + 2x) − 96 = 64 → 4x² + 40x + 96 − 96 = 64 → x² + 10x − 16 = 0 → x = (−10 ± √164)/2 ≈ 1,40 m (la negativa no vale)." },
  ],
  quiz: [
    { q: "¿Cuál es solución de 4x − 3 = 9?", o: ["x = 2", "x = 3", "x = 1,5", "x = 12"], a: 1, e: "4 · 3 − 3 = 9." },
    { q: "Dos ecuaciones son equivalentes si…", o: ["tienen el mismo grado", "tienen las mismas soluciones", "tienen los mismos números", "son iguales"], a: 1, e: "Esa es la definición." },
    { q: "−(x − 4) es igual a…", o: ["−x − 4", "x + 4", "−x + 4", "x − 4"], a: 2, e: "Cambian los signos de todo el paréntesis." },
    { q: "En x/3 + x/2 = 5, se multiplica todo por…", o: ["5", "6", "3", "2"], a: 1, e: "m.c.m.(3, 2) = 6." },
    { q: "x + 5 = x + 2 tiene…", o: ["una solución", "dos soluciones", "infinitas", "ninguna solución"], a: 3, e: "Queda 5 = 2, falso." },
    { q: "x² = 25 tiene por soluciones…", o: ["5", "−5", "5 y −5", "ninguna"], a: 2, e: "(±5)² = 25." },
    { q: "x² + 16 = 0 tiene…", o: ["x = ±4", "x = −4", "ninguna solución real", "x = 16"], a: 2, e: "x² = −16 no tiene solución real." },
    { q: "Las soluciones de x² − 7x = 0 son…", o: ["7", "0 y 7", "0 y −7", "±√7"], a: 1, e: "x(x − 7) = 0." },
    { q: "En 2x² − x − 3 = 0, el valor de b es…", o: ["2", "1", "−1", "−3"], a: 2, e: "El coeficiente de x es −1." },
    { q: "El discriminante de x² − 4x + 4 = 0 es…", o: ["0", "8", "32", "−8"], a: 0, e: "16 − 16 = 0." },
    { q: "Si Δ < 0, la ecuación de segundo grado…", o: ["tiene dos soluciones", "tiene una solución doble", "no tiene solución real", "tiene infinitas"], a: 2, e: "No existe la raíz de un negativo." },
    { q: "Las soluciones de x² − x − 6 = 0 suman…", o: ["−1", "1", "−6", "6"], a: 1, e: "−b/a = 1 (son 3 y −2)." },
    { q: "Una ecuación con soluciones 1 y 4 es…", o: ["x² + 5x + 4 = 0", "x² − 5x + 4 = 0", "x² − 4x + 1 = 0", "x² + 3x − 4 = 0"], a: 1, e: "Suma 5, producto 4." },
    { q: "Para resolver x⁴ − 5x² + 4 = 0 se hace el cambio…", o: ["z = x⁴", "z = x²", "z = 2x", "z = √x"], a: 1, e: "Es bicuadrada." },
    { q: "(x + 3)(x − 8) = 0 tiene soluciones…", o: ["3 y −8", "−3 y 8", "3 y 8", "−3 y −8"], a: 1, e: "Cada factor igual a cero." },
    { q: "En una ecuación con radicales, después de resolver hay que…", o: ["simplificar", "comprobar las soluciones", "elevar otra vez", "multiplicar por 2"], a: 1, e: "Elevar al cuadrado puede crear soluciones falsas." },
    { q: "La solución de √x = 5 es…", o: ["√5", "25", "10", "±25"], a: 1, e: "x = 5² = 25." },
    { q: "En 3/x = 1/2, x vale…", o: ["6", "3/2", "1/6", "2/3"], a: 0, e: "x = 3 · 2 = 6." },
    { q: "Si un problema de longitudes da x = 6 y x = −4, la respuesta es…", o: ["6 y −4", "solo −4", "solo 6", "no tiene solución"], a: 2, e: "Una longitud no puede ser negativa." },
    { q: "Dos números consecutivos suman 41. El menor es…", o: ["20", "21", "19", "20,5"], a: 0, e: "x + x + 1 = 41 → x = 20." },
  ],
  examen: [
    { q: "Solución de 2(x − 1) = x + 4:", o: ["x = 6", "x = 5", "x = 3", "x = 2"], a: 0, e: "2x − 2 = x + 4." },
    { q: "Soluciones de x² − 3x − 10 = 0:", o: ["5 y −2", "−5 y 2", "5 y 2", "10 y −1"], a: 0, e: "Δ = 49; (3 ± 7)/2." },
    { q: "¿Cuántas soluciones tiene x² + 2x + 3 = 0?", o: ["2", "1", "0", "infinitas"], a: 2, e: "Δ = 4 − 12 < 0." },
    { q: "Soluciones de 5x² − 20 = 0:", o: ["±4", "±2", "2", "4"], a: 1, e: "x² = 4." },
    { q: "La bicuadrada x⁴ − 16 = 0 tiene soluciones reales…", o: ["±2", "±4", "±2 y ±4", "ninguna"], a: 0, e: "x² = 4 (x² = −4 no vale)." },
    { q: "√(x − 1) = 3 →", o: ["x = 4", "x = 10", "x = 8", "x = 2"], a: 1, e: "x − 1 = 9." },
    { q: "Producto de las soluciones de 2x² − 6x + 4 = 0:", o: ["3", "2", "−3", "4"], a: 1, e: "c/a = 4/2." },
    { q: "La edad de Ana más su doble es 36. Ana tiene…", o: ["12", "18", "9", "24"], a: 0, e: "3x = 36." },
  ],
  feynman: ["Qué significa resolver una ecuación y por qué hay que mantener el equilibrio", "Cómo se resuelve una ecuación de segundo grado completa e incompleta", "Qué dice el discriminante sobre las soluciones", "Por qué hay que comprobar las soluciones en ecuaciones con radicales y en los problemas"],
  figura: {
    titulo: "¿Qué ecuación tengo? Elige el método",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Esquema de métodos: primer grado, segundo grado incompleta y completa, bicuadrada, factorizada, con radicales y racional">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Primer grado", "paréntesis → denominadores → agrupar → despejar", "var(--pen)"], ["2.º grado incompleta", "b = 0: despejar x² · c = 0: factor común", "var(--leaf)"], ["2.º grado completa", "x = (−b ± √(b² − 4ac)) / 2a", "var(--red)"], ["Bicuadrada / factorizada", "z = x² · cada factor = 0", "var(--inf)"], ["Radicales / x abajo", "aislar y elevar · m.c.m. → ¡comprobar!", "var(--sun)"]].map(([n, f, c], i) => `<rect x="16" y="${12 + i * 43}" width="608" height="36" rx="9" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="30" y="${36 + i * 43}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${36 + i * 43}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "aYkOsFHCqPM", titulo: "Ecuaciones cuadráticas de segundo grado: introducción", canal: "Matemáticas profe Alex", vistas: 1085382, megusta: 0, busqueda: "ecuaciones de segundo grado introducción" },
  mapa: mapa("ECUACIONES", "var(--red)", [
    ["Primer grado", "ax = b · denominadores", "var(--pen)"],
    ["Segundo grado", "fórmula · Δ = b² − 4ac", "var(--red)"],
    ["Otras", "bicuadradas · radicales", "var(--leaf)"],
    ["Problemas", "plantear · comprobar", "var(--inf)"],
  ], 230),
  glosario: [
    ["Ecuación", "Igualdad algebraica que se cumple solo para ciertos valores de la incógnita."],
    ["Incógnita", "Letra que representa el valor desconocido."],
    ["Miembros", "Las expresiones a cada lado del signo igual."],
    ["Solución", "Valor de la incógnita que hace cierta la igualdad."],
    ["Identidad", "Igualdad que se cumple para cualquier valor."],
    ["Ecuaciones equivalentes", "Ecuaciones que tienen las mismas soluciones."],
    ["Grado de una ecuación", "Mayor exponente de la incógnita tras simplificar."],
    ["Ecuación de segundo grado", "La que se escribe ax² + bx + c = 0 con a ≠ 0."],
    ["Ecuación incompleta", "Ecuación de segundo grado en la que b = 0 o c = 0."],
    ["Discriminante", "Δ = b² − 4ac; indica cuántas soluciones reales hay."],
    ["Solución doble", "Solución única que aparece cuando Δ = 0."],
    ["Ecuación bicuadrada", "ax⁴ + bx² + c = 0; se resuelve con z = x²."],
    ["Ecuación irracional", "La que tiene la incógnita dentro de una raíz."],
    ["Ecuación racional", "La que tiene la incógnita en algún denominador."],
    ["Solución falsa", "Valor que aparece al elevar al cuadrado pero no cumple la ecuación original."],
    ["Cambio de variable", "Sustituir una expresión por una letra nueva para simplificar."],
  ],
  situacion: {
    titulo: "Organizamos el viaje de fin de curso",
    reto: "Vuestra clase prepara un viaje de fin de curso. Hay que decidir el autobús, el alojamiento y una actividad, y repartir los costes. Cada decisión se traduce en una ecuación: vuestro equipo debe plantearlas, resolverlas y presentar un plan económico realista.",
    pasos: [
      "Pedid (o simulad) dos presupuestos de autobús con precio fijo más precio por kilómetro y plantead la ecuación para saber a partir de cuántos kilómetros conviene cada uno.",
      "Plantead una ecuación con x en el denominador: si el alojamiento cuesta una cantidad fija y van x alumnos, ¿cuántos deben ir para que cada uno pague como máximo una cantidad?",
      "Diseñad una actividad de recaudación (rifa, venta de pasteles) y plantead cuántas unidades hay que vender para cubrir un objetivo.",
      "Usad una ecuación de segundo grado en un problema de reparto (si fueran 2 personas más, cada uno pagaría tanto menos).",
      "Comprobad todas las soluciones y descartad las que no tengan sentido (números negativos o no enteros).",
    ],
    producto: "Un dosier del viaje con cada ecuación planteada, resuelta y comprobada, y una propuesta final de precio por alumno.",
    evaluacion: ["Traduce correctamente situaciones reales a ecuaciones.", "Resuelve ecuaciones de primer y segundo grado sin errores.", "Comprueba e interpreta las soluciones en el contexto.", "Presenta el plan con claridad y lo defiende ante la clase."],
  },
  tarjetas: [
    ["Ecuaciones equivalentes", "Tienen las mismas soluciones."],
    ["Orden para el primer grado", "Paréntesis, denominadores, agrupar, reducir, despejar."],
    ["Quitar denominadores", "Multiplicar TODO por el m.c.m.; paréntesis en los numeradores."],
    ["0 = 5", "Sin solución."],
    ["0 = 0", "Infinitas soluciones (identidad)."],
    ["ax² + c = 0", "Despejar x² → x = ±√(−c/a)."],
    ["ax² + bx = 0", "x(ax + b) = 0 → x = 0, x = −b/a."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac)) / 2a"],
    ["Discriminante", "Δ > 0: dos; Δ = 0: una doble; Δ < 0: ninguna."],
    ["Suma y producto de soluciones", "−b/a y c/a."],
    ["Bicuadrada", "z = x², resolver y deshacer el cambio."],
    ["Radicales o x abajo", "Resolver y COMPROBAR siempre."],
  ],
  familias: ["Planteadle problemas cotidianos (edades, compras, repartos) y pedidle que los traduzca a una ecuación.", "Usad la idea de la balanza: lo que se hace a un lado, se hace al otro.", "Revisad juntos que las soluciones tengan sentido (sin edades negativas ni medio autobús).", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de primer y segundo grado, bicuadradas, factorizadas, sencillas con radicales y racionales; resolución de problemas con interpretación de soluciones (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Balanzas virtuales o físicas para trabajar ecuaciones equivalentes.", "GeoGebra: relacionar soluciones con cortes de la parábola y el discriminante.", "Concurso de problemas por equipos con comprobación cruzada.", "Viaje de fin de curso como situación de aprendizaje con presupuestos reales."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: ecuaciones y gráficas", url: "https://www.geogebra.org/" },
    { t: "Proyecto Descartes: ecuaciones (INTEF)", url: "https://proyectodescartes.org/" },
  ],
  revisado: "2026-11-13",
};
