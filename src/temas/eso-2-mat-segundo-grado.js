// Matemáticas 2º ESO · Ecuaciones de segundo grado y sistemas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, ejes, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const forma = lienzo("Forma general de la ecuación de segundo grado y sus coeficientes", `
  ${tx(130, 54, "ax² + bx + c = 0", { fs: 24, fam: D })}
  ${tx(130, 86, "a ≠ 0", { fs: 13, c: "var(--red)" })}
  ${tx(50, 120, "a: coef. de x²", { fs: 11, c: "var(--pen)", max: 90 })}${tx(130, 120, "b: coef. de x", { fs: 11, c: "var(--leaf)", max: 80 })}${tx(212, 120, "c: independiente", { fs: 11, c: "var(--sun)", max: 90 })}
  ${tx(130, 154, "2x² − 3x + 1 = 0 → a = 2, b = −3, c = 1", { fs: 11.5, c: "var(--muted)" })}`, 170);

const incompletas = comparar("Ecuaciones de segundo grado incompletas: sin término en x o sin término independiente", [
  ["b = 0: ax² + c = 0", ["x² = −c/a", "x = ±√(−c/a)", "2x² − 18 = 0 → x = ±3"], "var(--pen)"],
  ["c = 0: ax² + bx = 0", ["x(ax + b) = 0", "x = 0 o x = −b/a", "x² − 5x = 0 → 0 y 5"], "var(--red)"],
], "Incompletas");

const general = formula("Fórmula general de la ecuación de segundo grado", "x = (−b ± √(b² − 4ac)) / 2a", ["Ejemplo: x² − 5x + 6 = 0", "x = (5 ± √(25 − 24)) / 2 = (5 ± 1)/2", "x₁ = 3 · x₂ = 2"], "var(--leaf)");

const pasosGen = pasos("Pasos para resolver una ecuación de segundo grado completa", ["Pasar todo a un miembro: ax² + bx + c = 0", "Identificar a, b y c con su signo", "Calcular Δ = b² − 4ac", "Aplicar la fórmula", "Comprobar las soluciones"], "Método");

const parabola = ejes("Las soluciones de x² − x − 6 = 0 son los cortes de la parábola con el eje x: −2 y 3", {
  x: [-4, 5], y: [-8, 8], paso: 1, pasoY: 2, marcasX: [], marcasY: [-6, 6],
  curvas: [{ f: (x) => x * x - x - 6, c: "var(--pen)", t: "y = x² − x − 6", tx: 2.4, ty: 6.5 }],
  puntos: [[-2, 0, "−2", "var(--red)", "no"], [3, 0, "3", "var(--red)", "ne"]],
});

const factorizar = pasos("Resolver factorizando: si un producto es cero, uno de los factores es cero", ["x² − 7x + 12 = 0", "Buscar dos números: suma 7, producto 12", "3 y 4 → (x − 3)(x − 4) = 0", "x − 3 = 0 → x = 3", "x − 4 = 0 → x = 4"], "Por factorización");

const sistema = lienzo("Un sistema de dos ecuaciones lineales con dos incógnitas y su solución", `
  <path d="M40 30 Q30 30 30 44 V60 Q30 66 24 66 Q30 66 30 72 V88 Q30 102 40 102" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${tx(140, 56, "x + y = 10", { fs: 20, fam: D, c: "var(--pen)" })}${tx(140, 92, "x − y = 2", { fs: 20, fam: D, c: "var(--red)" })}
  ${tx(130, 134, "solución: x = 6, y = 4", { fs: 15, c: "var(--leaf)" })}${tx(130, 158, "cumple las dos ecuaciones a la vez", { fs: 11.5, c: "var(--muted)" })}`, 172);

const metodos = cajas("Los tres métodos algebraicos para resolver sistemas", [
  ["Sustitución", ["despejar una", "y sustituir"], "var(--pen)"],
  ["Igualación", ["despejar la misma", "en las dos e igualar"], "var(--leaf)"],
  ["Reducción", ["sumar o restar", "para eliminar una"], "var(--red)"],
  ["Gráfico", ["punto de corte", "de dos rectas"], "var(--sun)"],
], "Métodos");

const igualacion = pasos("Método de igualación: despejar la misma incógnita en las dos ecuaciones", ["y = 10 − x ; y = x − 2", "10 − x = x − 2", "12 = 2x → x = 6", "y = 10 − 6 = 4"], "Igualación");

const reduccion = lienzo("Método de reducción: se suman las ecuaciones para eliminar y", `
  ${tx(190, 40, "3x + 2y = 16", { fs: 16, fam: D, a: "end", max: 160 })}${tx(190, 66, "x − 2y = 0", { fs: 16, fam: D, a: "end", max: 160 })}${tx(36, 66, "+", { fs: 18 })}
  <path d="M40 76 H196" stroke="var(--ink)" stroke-width="2"/>${tx(190, 100, "4x       = 16", { fs: 16, fam: D, a: "end", c: "var(--red)", max: 160 })}
  ${tx(130, 132, "x = 4 → 4 − 2y = 0 → y = 2", { fs: 13.5, c: "var(--leaf)" })}${tx(130, 158, "los coeficientes de y son opuestos", { fs: 11.5, c: "var(--muted)" })}`, 170);

const tiposSis = ejes("Interpretación gráfica de un sistema: dos rectas que se cortan en el punto (6, 4)", {
  x: [0, 10], y: [0, 10], paso: 1, marcasX: [2, 6, 10], marcasY: [4, 10],
  curvas: [{ f: (x) => 10 - x, c: "var(--pen)", t: "x + y = 10", tx: 2.6, ty: 8.6 }, { f: (x) => x - 2, c: "var(--red)", t: "x − y = 2", tx: 8.4, ty: 4.8 }],
  puntos: [[6, 4, "(6, 4)", "var(--leaf)", "e"]],
});

const problemaSis = comparar("Problema con sistema: entradas de adulto y de niño", [
  ["Datos", ["7 entradas", "adulto 8 €, niño 5 €", "total 47 €"], "var(--pen)"],
  ["Sistema", ["x + y = 7", "8x + 5y = 47", "x = 4, y = 3"], "var(--leaf)"],
], "Plantear un sistema");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de segundo grado y sistemas",
  minutos: 115,
  objetivos: [
    "Reconocer ecuaciones de segundo grado y sus coeficientes",
    "Resolver ecuaciones incompletas y completas con la fórmula general",
    "Usar el discriminante para saber el número de soluciones",
    "Resolver sistemas de dos ecuaciones lineales por sustitución, igualación, reducción y gráficamente",
    "Plantear y resolver problemas con ecuaciones de segundo grado y sistemas",
  ],
  claves: ["ecuación de segundo grado", "fórmula general", "discriminante", "ecuación incompleta", "sistema de ecuaciones", "sustitución", "igualación", "reducción"],
  pregunta: {
    texto: "Un terreno rectangular tiene 10 m más de largo que de ancho y su área es 200 m². ¿Cuánto mide?",
    respuesta: "x(x + 10) = 200 → x² + 10x − 200 = 0 → x = (−10 ± 30)/2. La solución positiva es <mark>x = 10</mark>: el terreno mide 10 m × 20 m. La otra solución, −20, no tiene sentido como medida.",
  },
  lectura: {
    titulo: "Las tablillas de Babilonia",
    html: `<p>Hace casi 4000 años, los escribas de Babilonia ya resolvían problemas que hoy escribiríamos como <b>ecuaciones de segundo grado</b>. En tablillas de arcilla, con escritura cuneiforme, aparecen enunciados como este: «He sumado el área y el lado de un cuadrado y obtengo 3/4. ¿Cuánto mide el lado?». Es decir, x² + x = 3/4. Los escribas lo resolvían con una receta de pasos, sin letras ni fórmulas, que equivale a completar un cuadrado.</p><p>Siglos más tarde, el matemático indio Brahmagupta y el persa Al-Juarismi describieron métodos generales, y en el Renacimiento europeo se llegó a la fórmula que usamos hoy. Los babilonios también resolvían problemas con dos cantidades desconocidas relacionadas, lo que hoy llamamos <b>sistemas de ecuaciones</b>.</p><p>Las ecuaciones de segundo grado aparecen al calcular áreas, al estudiar la trayectoria de un balón o al diseñar el arco de un puente. Los sistemas sirven cuando hay dos incógnitas: precios, mezclas, edades. En este tema aprenderás a resolver ambas cosas y a elegir el método más cómodo.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Ecuaciones de segundo grado</h3><p>Una <b>ecuación de segundo grado</b> es aquella en la que la incógnita aparece elevada al cuadrado (y no a potencias mayores). Su <b>forma general</b> es <mark>ax² + bx + c = 0</mark>, con a ≠ 0:</p><ul><li><b>a</b> es el coeficiente de x².</li><li><b>b</b> es el coeficiente de x.</li><li><b>c</b> es el término independiente.</li></ul><p>Por ejemplo, en 2x² − 3x + 1 = 0, a = 2, b = −3 y c = 1. Hay que tomar los coeficientes <b>con su signo</b>.</p><p>Si la ecuación no está en forma general, primero hay que pasarla: x(x + 3) = 10 → x² + 3x − 10 = 0.</p><p>A diferencia de las de primer grado, una ecuación de segundo grado puede tener <b>dos, una o ninguna</b> solución real. Por ejemplo, x² = 9 tiene dos soluciones, 3 y −3, porque los dos números al cuadrado dan 9.</p>`, svg: forma },
    { html: `<h3>1.2 Ecuaciones incompletas</h3><p>Si b = 0 o c = 0, la ecuación es <b>incompleta</b> y se resuelve sin fórmula:</p><ul><li><b>Sin término en x</b> (b = 0): ax² + c = 0. Se despeja x² y se hace la raíz: 2x² − 18 = 0 → x² = 9 → <mark>x = ±3</mark>. Si x² queda igual a un número negativo, no hay solución: x² + 4 = 0 → x² = −4.</li><li><b>Sin término independiente</b> (c = 0): ax² + bx = 0. Se saca factor común x: x(ax + b) = 0. Un producto es cero si lo es alguno de sus factores, así que x = 0 o ax + b = 0. Ejemplo: x² − 5x = 0 → x(x − 5) = 0 → x = 0 o x = 5.</li></ul><p>Error frecuente en el segundo caso: dividir entre x y «perder» la solución x = 0. Nunca dividas entre la incógnita, porque podría valer cero.</p>`, svg: incompletas, video: pvid("segundo-grado", 1) },
    { html: `<h3>1.3 La fórmula general</h3><p>Cualquier ecuación de segundo grado completa se resuelve con la <b>fórmula general</b>:</p><p><mark>x = (−b ± √(b² − 4ac)) / 2a</mark></p><p>El signo ± indica que hay dos soluciones: una sumando la raíz y otra restándola.</p><p>Ejemplo: x² − 5x + 6 = 0. Aquí a = 1, b = −5, c = 6. Entonces x = (5 ± √(25 − 24)) / 2 = (5 ± 1) / 2. Las soluciones son x₁ = 6/2 = 3 y x₂ = 4/2 = 2.</p><p>Comprobación: 3² − 5 · 3 + 6 = 9 − 15 + 6 = 0 ✔ y 2² − 10 + 6 = 0 ✔.</p><p>Consejos: escribe primero a, b y c; pon −b entre paréntesis si b es negativo (−(−5) = 5); calcula aparte lo que hay dentro de la raíz; y recuerda que el 2a divide a <b>todo</b> el numerador.</p>`, svg: general, video: pvid("segundo-grado", 2) },
    { html: `<h3>1.4 Resolver paso a paso</h3><p>Antes de aplicar la fórmula a veces hay que preparar la ecuación:</p><ol><li>Quitar paréntesis y denominadores, como en las de primer grado.</li><li>Pasar todos los términos a un miembro e igualar a 0.</li><li>Reducir términos semejantes y ordenar: ax² + bx + c = 0.</li><li>Si todos los coeficientes tienen un divisor común, simplificar (dividir la ecuación entre él).</li><li>Aplicar el método adecuado: incompleta o fórmula.</li></ol><p>Ejemplo: (x + 1)² = 3x + 7. Desarrollamos: x² + 2x + 1 = 3x + 7. Pasamos todo: x² − x − 6 = 0. Fórmula: x = (1 ± √(1 + 24)) / 2 = (1 ± 5)/2. <mark>x₁ = 3, x₂ = −2</mark>.</p><p>Si a es negativo, conviene multiplicar toda la ecuación por −1 para trabajar con a positivo: −x² + 4x − 3 = 0 → x² − 4x + 3 = 0.</p>`, svg: pasosGen },
    { html: `<h3>1.5 El discriminante</h3><p>La expresión de dentro de la raíz, <b>Δ = b² − 4ac</b>, se llama <b>discriminante</b>, porque permite distinguir cuántas soluciones tiene la ecuación sin terminar de resolverla:</p><ul><li>Si <b>Δ &gt; 0</b>, hay <b>dos soluciones</b> distintas.</li><li>Si <b>Δ = 0</b>, hay <b>una solución</b> (doble): x = −b/2a. Por ejemplo, x² − 6x + 9 = 0 → Δ = 36 − 36 = 0 → x = 3.</li><li>Si <b>Δ &lt; 0</b>, <b>no hay solución</b> real, porque no existe la raíz de un negativo. Por ejemplo, x² + x + 1 = 0 → Δ = 1 − 4 = −3.</li></ul><p>Calcular el discriminante primero es una buena costumbre: si sale negativo, ya sabes que has terminado. Y si sale un cuadrado perfecto (1, 4, 9, 16…), las soluciones serán números racionales.</p>`, svg: psvg("segundo-grado", 3) },
    { html: `<h3>1.6 Resolver factorizando e interpretar gráficamente</h3><p>Si una ecuación está escrita como producto de factores igualado a cero, se resuelve igualando cada factor a cero: (x − 3)(x + 2) = 0 → x = 3 o x = −2.</p><p>Con práctica, algunas ecuaciones con a = 1 se pueden factorizar «a ojo»: en x² − 7x + 12 = 0 se buscan dos números que <b>sumen</b> 7 y se <b>multipliquen</b> 12: son 3 y 4. Así, x² − 7x + 12 = (x − 3)(x − 4) y las soluciones son 3 y 4. En general, si x₁ y x₂ son las soluciones de x² + bx + c = 0, se cumple x₁ + x₂ = −b y x₁ · x₂ = c.</p><p>Gráficamente, las soluciones de ax² + bx + c = 0 son los puntos donde la <b>parábola</b> y = ax² + bx + c corta al <b>eje x</b>. Dos cortes, dos soluciones; si solo lo toca, una; si no lo corta, ninguna.</p>`, svg: parabola },
    { html: `<h3>2.1 Sistemas de ecuaciones lineales</h3><p>Una ecuación con dos incógnitas, como x + y = 10, tiene <b>infinitas soluciones</b>: (1, 9), (2, 8), (6, 4), (−3, 13)… Para encontrar una solución concreta hace falta otra condición.</p><p>Un <b>sistema de dos ecuaciones lineales con dos incógnitas</b> es un par de ecuaciones de primer grado que deben cumplirse a la vez. Se escribe con una llave:</p><p>x + y = 10<br>x − y = 2</p><p>La <b>solución</b> del sistema es el par de valores (x, y) que cumple <b>las dos ecuaciones</b>. Aquí, x = 6 e y = 4, porque 6 + 4 = 10 y 6 − 4 = 2. Para comprobar una solución, se sustituye en las dos ecuaciones.</p><p>Hay varios métodos para resolver un sistema. Todos se basan en la misma idea: <b>eliminar una incógnita</b> para obtener una ecuación con una sola, que ya sabemos resolver.</p>`, svg: sistema },
    { html: `<h3>2.2 Método de sustitución</h3><p>El método de <b>sustitución</b> consiste en:</p><ol><li><b>Despejar</b> una incógnita en una de las ecuaciones (la que sea más fácil).</li><li><b>Sustituir</b> esa expresión en la otra ecuación.</li><li>Resolver la ecuación de una incógnita que resulta.</li><li>Calcular la otra incógnita sustituyendo el valor obtenido.</li></ol><p>Ejemplo: x + y = 10 y 2x − y = 5. Despejamos en la primera: y = 10 − x. Sustituimos en la segunda: 2x − (10 − x) = 5 → 3x − 10 = 5 → x = 5. Entonces y = 10 − 5 = 5. Solución: <mark>x = 5, y = 5</mark>.</p><p>Es el método más cómodo cuando alguna incógnita tiene coeficiente 1 o −1. Cuidado con los paréntesis al sustituir: la expresión despejada debe ir entera entre paréntesis.</p>`, svg: metodos, video: pvid("segundo-grado", 5) },
    { html: `<h3>2.3 Método de igualación</h3><p>En el método de <b>igualación</b>:</p><ol><li>Se despeja <b>la misma incógnita</b> en las dos ecuaciones.</li><li>Se <b>igualan</b> las dos expresiones obtenidas.</li><li>Se resuelve la ecuación resultante.</li><li>Se sustituye para hallar la otra incógnita.</li></ol><p>Ejemplo: x + y = 10 y x − y = 2. Despejamos y: y = 10 − x; y = x − 2. Igualamos: 10 − x = x − 2 → 12 = 2x → x = 6. Y entonces y = 10 − 6 = <mark>4</mark>.</p><p>Es práctico cuando una misma incógnita es fácil de despejar en las dos ecuaciones, por ejemplo en problemas del tipo «tarifa A: y = 20 + 0,1x; tarifa B: y = 0,15x», donde ya vienen despejadas. Igualar sirve para saber cuándo las dos tarifas cuestan lo mismo.</p>`, svg: igualacion },
    { html: `<h3>2.4 Método de reducción</h3><p>En el método de <b>reducción</b> se consigue que una incógnita tenga coeficientes <b>opuestos</b> en las dos ecuaciones y luego se suman, de modo que esa incógnita desaparece.</p><p>Ejemplo: 3x + 2y = 16 y x − 2y = 0. Los coeficientes de y ya son opuestos (2 y −2). Sumando: 4x = 16 → x = 4. Sustituyendo en la segunda: 4 − 2y = 0 → <mark>y = 2</mark>.</p><p>Si no son opuestos, se multiplican las ecuaciones por números adecuados. En 2x + 3y = 12 y 3x − 2y = 5, para eliminar y multiplicamos la primera por 2 y la segunda por 3: 4x + 6y = 24 y 9x − 6y = 15. Sumando: 13x = 39 → x = 3, y entonces y = 2.</p><p>Es el método más eficaz cuando ninguna incógnita es fácil de despejar.</p>`, svg: reduccion },
    { html: `<h3>2.5 Interpretación gráfica y tipos de sistemas</h3><p>Cada ecuación lineal con dos incógnitas se representa como una <b>recta</b>: sus infinitas soluciones son los puntos de la recta. La solución del sistema es el <b>punto de corte</b> de las dos rectas. En el ejemplo, x + y = 10 y x − y = 2 se cortan en (6, 4).</p><p>Según la posición de las rectas, el sistema puede ser:</p><ul><li><b>Compatible determinado</b>: las rectas se cortan en un punto. Una única solución.</li><li><b>Incompatible</b>: las rectas son paralelas. No hay solución. Al resolver se llega a algo como 0 = 5.</li><li><b>Compatible indeterminado</b>: las rectas coinciden (son la misma). Infinitas soluciones. Se llega a 0 = 0.</li></ul><p>El método gráfico es menos preciso que los algebraicos, pero ayuda mucho a entender qué significa resolver un sistema.</p>`, svg: tiposSis },
    { html: `<h3>3.1 Problemas con sistemas y de segundo grado</h3><p>Para plantear un problema con un <b>sistema</b>, se eligen dos incógnitas y se buscan <b>dos condiciones</b> independientes en el enunciado. Ejemplo: «se han vendido 7 entradas, de adulto (8 €) y de niño (5 €), por 47 €». Incógnitas: x adultos, y niños. Sistema: x + y = 7 y 8x + 5y = 47. Por sustitución: 8x + 5(7 − x) = 47 → 3x = 12 → x = 4, y = 3.</p><p>En los problemas de <b>segundo grado</b> es fundamental <b>descartar</b> las soluciones que no tienen sentido. Ejemplo: «el producto de dos números consecutivos es 132». x(x + 1) = 132 → x² + x − 132 = 0 → x = (−1 ± 23)/2 → x = 11 o x = −12. Hay dos parejas válidas: 11 y 12, o −12 y −11. Pero si se tratase de páginas de un libro, solo valdría la positiva.</p><p>Comprueba siempre las soluciones en el enunciado, no solo en la ecuación.</p>`, svg: problemaSis },
  ],
  ejemplos: [
    { enunciado: "Resuelve: 3x² − 75 = 0.", pasos: ["3x² = 75 → x² = 25.", "x = ±√25."], resultado: "x = 5, x = −5." },
    { enunciado: "Resuelve: 4x² + 12x = 0.", pasos: ["Factor común: 4x(x + 3) = 0.", "4x = 0 → x = 0; x + 3 = 0 → x = −3."], resultado: "x = 0, x = −3." },
    { enunciado: "Resuelve: 2x² − 7x + 3 = 0.", pasos: ["a = 2, b = −7, c = 3.", "Δ = 49 − 24 = 25.", "x = (7 ± 5)/4."], resultado: "x₁ = 3, x₂ = 1/2." },
    { enunciado: "¿Cuántas soluciones tiene x² − 4x + 5 = 0?", pasos: ["Δ = 16 − 20 = −4.", "Δ < 0."], resultado: "Ninguna solución real." },
    { enunciado: "Resuelve por reducción: 2x + 3y = 13; 4x − 3y = 5.", pasos: ["Sumando: 6x = 18 → x = 3.", "2 · 3 + 3y = 13 → 3y = 7 → y = 7/3."], resultado: "x = 3, y = 7/3." },
    { enunciado: "En una granja hay gallinas y conejos: 20 cabezas y 56 patas. ¿Cuántos hay de cada?", pasos: ["x gallinas, y conejos: x + y = 20; 2x + 4y = 56.", "x = 20 − y → 40 − 2y + 4y = 56 → y = 8.", "x = 12."], resultado: "12 gallinas y 8 conejos." },
  ],
  errores: [
    "Dar solo la raíz positiva en x² = 9: también vale x = −3.",
    "Dividir entre x en ax² + bx = 0 y perder la solución x = 0.",
    "Tomar los coeficientes sin su signo al aplicar la fórmula.",
    "Dividir entre 2a solo la raíz y no todo el numerador.",
    "Al sustituir en un sistema, olvidar el paréntesis de la expresión despejada.",
    "No descartar soluciones sin sentido (longitudes negativas, personas decimales).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe en forma general e indica a, b y c: a) 3x² = 5x − 2; b) x(x − 4) = 1.", sol: "a) 3x² − 5x + 2 = 0: a = 3, b = −5, c = 2. b) x² − 4x − 1 = 0: a = 1, b = −4, c = −1." },
    { nivel: "básico", q: "Resuelve: x² − 49 = 0.", sol: "x² = 49 → x = ±7." },
    { nivel: "básico", q: "Resuelve: 5x² − 20 = 0.", sol: "x² = 4 → x = ±2." },
    { nivel: "básico", q: "Resuelve: x² + 9 = 0.", sol: "x² = −9: sin solución real." },
    { nivel: "básico", q: "Resuelve: x² − 6x = 0.", sol: "x(x − 6) = 0 → x = 0 o x = 6." },
    { nivel: "básico", q: "Resuelve: 3x² + 15x = 0.", sol: "3x(x + 5) = 0 → x = 0 o x = −5." },
    { nivel: "básico", q: "Resuelve con la fórmula: x² − 3x + 2 = 0.", sol: "Δ = 9 − 8 = 1; x = (3 ± 1)/2 → 2 y 1." },
    { nivel: "básico", q: "Comprueba si (3, 1) es solución del sistema x + 2y = 5; 2x − y = 5.", sol: "3 + 2 = 5 ✔; 6 − 1 = 5 ✔. Sí es solución." },
    { nivel: "básico", q: "Resuelve por sustitución: x + y = 8; x − y = 2.", sol: "x = 8 − y → 8 − 2y = 2 → y = 3, x = 5." },
    { nivel: "básico", q: "Resuelve por reducción: x + y = 9; −x + 2y = 3.", sol: "Sumando: 3y = 12 → y = 4; x = 5." },
    { nivel: "medio", q: "Resuelve: x² + 2x − 15 = 0.", sol: "Δ = 4 + 60 = 64; x = (−2 ± 8)/2 → 3 y −5." },
    { nivel: "medio", q: "Resuelve: 2x² + 5x − 3 = 0.", sol: "Δ = 25 + 24 = 49; x = (−5 ± 7)/4 → 1/2 y −3." },
    { nivel: "medio", q: "Resuelve: x² − 10x + 25 = 0.", sol: "Δ = 0; x = 10/2 = 5 (solución doble). Es (x − 5)² = 0." },
    { nivel: "medio", q: "Sin resolver, indica cuántas soluciones tienen: a) x² + 4x + 5 = 0; b) 3x² − x − 2 = 0; c) 4x² − 4x + 1 = 0.", sol: "a) Δ = −4: ninguna. b) Δ = 1 + 24 = 25: dos. c) Δ = 0: una." },
    { nivel: "medio", q: "Resuelve: (x − 2)(x + 5) = 0 y (2x − 1)(x + 4) = 0.", sol: "x = 2, x = −5. x = 1/2, x = −4." },
    { nivel: "medio", q: "Resuelve: x(x + 3) = 2(x + 6).", sol: "x² + 3x = 2x + 12 → x² + x − 12 = 0 → x = (−1 ± 7)/2 → 3 y −4." },
    { nivel: "medio", q: "Resuelve por igualación: y = 2x − 1; y = −x + 8.", sol: "2x − 1 = −x + 8 → 3x = 9 → x = 3, y = 5." },
    { nivel: "medio", q: "Resuelve por reducción: 3x + 2y = 7; 5x − 4y = 41.", sol: "Primera por 2: 6x + 4y = 14. Sumando: 11x = 55 → x = 5. 15 + 2y = 7 → y = −4." },
    { nivel: "medio", q: "Resuelve por el método que prefieras: 2x − y = 1; 4x − 2y = 5. ¿Qué ocurre?", sol: "Segunda − 2 · primera: 0 = 3. Sistema incompatible: rectas paralelas, sin solución." },
    { nivel: "medio", q: "La suma de dos números es 25 y su diferencia, 7. ¿Cuáles son?", sol: "x + y = 25; x − y = 7 → 2x = 32 → x = 16, y = 9." },
    { nivel: "medio", q: "Un número natural multiplicado por su siguiente da 56. ¿Cuál es?", sol: "x(x + 1) = 56 → x² + x − 56 = 0 → x = (−1 ± 15)/2 → 7 (se descarta −8 por no ser natural)." },
    { nivel: "medio", q: "Dos bocadillos y un refresco cuestan 7,50 €; un bocadillo y dos refrescos, 6 €. ¿Cuánto cuesta cada cosa?", sol: "2b + r = 7,5; b + 2r = 6. Reducción: 3b + 3r = 13,5 → b + r = 4,5. Restando a la primera: b = 3; r = 1,5." },
    { nivel: "avanzado", q: "Resuelve: (x + 2)²/3 − x = (x + 4)/3 + 2.", sol: "Por 3: (x + 2)² − 3x = x + 4 + 6 → x² + 4x + 4 − 3x = x + 10 → x² = 6 → x = ±√6 ≈ ±2,45." },
    { nivel: "avanzado", q: "Un rectángulo tiene 34 m de perímetro y 60 m² de área. ¿Cuáles son sus dimensiones?", sol: "x + y = 17; xy = 60 → x(17 − x) = 60 → x² − 17x + 60 = 0 → x = (17 ± 7)/2 → 12 y 5. Mide 12 m × 5 m." },
    { nivel: "avanzado", q: "Halla k para que x² − 6x + k = 0 tenga una única solución.", sol: "Δ = 36 − 4k = 0 → k = 9. La solución es x = 3." },
    { nivel: "avanzado", q: "Escribe una ecuación de segundo grado cuyas soluciones sean 4 y −1.", sol: "(x − 4)(x + 1) = 0 → x² − 3x − 4 = 0." },
    { nivel: "avanzado", q: "Un hotel tiene 50 habitaciones dobles e individuales con 85 camas en total. ¿Cuántas hay de cada tipo?", sol: "d + i = 50; 2d + i = 85 → restando: d = 35, i = 15." },
    { nivel: "avanzado", q: "Hace 4 años, la edad de Luis era el triple que la de su hermana. Dentro de 4 años será el doble. ¿Qué edades tienen?", sol: "L − 4 = 3(H − 4); L + 4 = 2(H + 4). L = 3H − 8 y L = 2H + 4 → 3H − 8 = 2H + 4 → H = 12, L = 28." },
    { nivel: "avanzado", q: "Una compañía de móvil cobra 10 € al mes más 0,05 € por minuto; otra, 0,10 € por minuto sin cuota. ¿A partir de cuántos minutos interesa la primera?", sol: "Igualando: 10 + 0,05x = 0,10x → x = 200 min. A partir de 200 minutos al mes es más barata la primera." },
    { nivel: "avanzado", q: "Resuelve el problema babilónico: el área de un cuadrado más su lado es 3/4.", sol: "x² + x − 3/4 = 0 → por 4: 4x² + 4x − 3 = 0 → Δ = 16 + 48 = 64 → x = (−4 ± 8)/8 → 1/2 (se descarta −3/2). El lado mide 1/2." },
  ],
  quiz: baraja([
    { q: "¿Cuál es de segundo grado?", o: ["x² − 3x = 1", "3x − 1 = 0", "x³ = 8", "2/x = 1"], a: 0, e: "Exponente máximo 2." },
    { q: "En 3x² − x + 5 = 0, b =", o: ["−1", "1", "3", "5"], a: 0, e: "Coeficiente de x con su signo." },
    { q: "Soluciones de x² = 16:", o: ["4 y −4", "4", "8 y −8", "16"], a: 0, e: "Dos raíces." },
    { q: "x² + 25 = 0 tiene…", o: ["ninguna solución real", "x = ±5", "x = 5", "x = −5"], a: 0, e: "x² = −25." },
    { q: "Soluciones de x² − 3x = 0:", o: ["0 y 3", "3", "0 y −3", "±√3"], a: 0, e: "x(x − 3) = 0." },
    { q: "En la fórmula general, dentro de la raíz va…", o: ["b² − 4ac", "b² + 4ac", "4ac − b²", "b − 4ac"], a: 0, e: "El discriminante." },
    { q: "Si Δ > 0, la ecuación tiene…", o: ["dos soluciones", "una", "ninguna", "infinitas"], a: 0, e: "Raíz positiva." },
    { q: "Si Δ = 0, la ecuación tiene…", o: ["una solución doble", "dos", "ninguna", "infinitas"], a: 0, e: "± 0 da lo mismo." },
    { q: "Δ de x² + 2x + 5 = 0:", o: ["−16", "24", "16", "−24"], a: 0, e: "4 − 20." },
    { q: "Soluciones de x² − 5x + 6 = 0:", o: ["2 y 3", "−2 y −3", "1 y 6", "5 y 6"], a: 0, e: "Suman 5 y multiplican 6." },
    { q: "Soluciones de (x + 1)(x − 7) = 0:", o: ["−1 y 7", "1 y −7", "1 y 7", "−1 y −7"], a: 0, e: "Cada factor a 0." },
    { q: "Las soluciones de una ecuación de 2.º grado son los cortes de la parábola con…", o: ["el eje x", "el eje y", "el origen", "la recta y = x"], a: 0, e: "Donde y = 0." },
    { q: "Una ecuación x + y = 5 tiene…", o: ["infinitas soluciones", "una solución", "ninguna", "dos"], a: 0, e: "Infinitos pares." },
    { q: "La solución del sistema x + y = 5; x − y = 1 es…", o: ["(3, 2)", "(2, 3)", "(4, 1)", "(5, 0)"], a: 0, e: "Sumando: 2x = 6." },
    { q: "En el método de sustitución se…", o: ["despeja una incógnita y se sustituye en la otra ecuación", "suman las ecuaciones", "igualan dos despejes", "dibujan las rectas"], a: 0, e: "Definición." },
    { q: "En el método de reducción se busca que una incógnita tenga coeficientes…", o: ["opuestos", "iguales a 1", "nulos", "positivos"], a: 0, e: "Para eliminarla al sumar." },
    { q: "Dos rectas paralelas forman un sistema…", o: ["incompatible", "compatible determinado", "compatible indeterminado", "de segundo grado"], a: 0, e: "No se cortan." },
    { q: "Si al resolver un sistema llegas a 0 = 0, es…", o: ["compatible indeterminado", "incompatible", "determinado", "erróneo"], a: 0, e: "Infinitas soluciones." },
    { q: "Si x + y = 10 y y = 2x, entonces x =", o: ["10/3", "5", "2", "20/3"], a: 0, e: "3x = 10." },
    { q: "La longitud de un lado sale −4 o 6. La respuesta es…", o: ["6", "−4", "las dos", "ninguna"], a: 0, e: "Una longitud no es negativa." },
  ]),
  examen: baraja([
    { q: "Soluciones de 2x² − 32 = 0:", o: ["±4", "±16", "4", "±8"], a: 0, e: "x² = 16." },
    { q: "Soluciones de x² + 4x = 0:", o: ["0 y −4", "0 y 4", "−4", "±2"], a: 0, e: "x(x + 4) = 0." },
    { q: "Soluciones de x² − x − 12 = 0:", o: ["4 y −3", "−4 y 3", "6 y −2", "12 y −1"], a: 0, e: "Δ = 49." },
    { q: "Soluciones de x² − 8x + 16 = 0:", o: ["4 (doble)", "±4", "8 y 2", "ninguna"], a: 0, e: "Δ = 0." },
    { q: "¿Cuál no tiene solución real?", o: ["x² + x + 3 = 0", "x² − 4 = 0", "x² − 2x = 0", "x² − 2x + 1 = 0"], a: 0, e: "Δ = 1 − 12 < 0." },
    { q: "Solución de 2x + y = 7; x − y = 2:", o: ["(3, 1)", "(1, 3)", "(2, 3)", "(4, −1)"], a: 0, e: "Sumando: 3x = 9." },
    { q: "Solución de y = 3x; x + y = 12:", o: ["(3, 9)", "(9, 3)", "(4, 8)", "(2, 6)"], a: 0, e: "4x = 12." },
    { q: "Dos números suman 20 y su diferencia es 4. El mayor es…", o: ["12", "8", "16", "10"], a: 0, e: "2x = 24." },
  ], 1),
  feynman: ["Por qué una ecuación de segundo grado puede tener dos soluciones", "Qué indica el discriminante y por qué", "Por qué no se puede dividir entre x en x² = 3x", "Qué significa geométricamente la solución de un sistema"],
  figura: {
    titulo: "Segundo grado y sistemas en un vistazo",
    svg: resumen("Resumen del tema de ecuaciones de segundo grado y sistemas", [
      ["ax² + bx + c = 0", "incompletas: raíz o factor común", "var(--pen)"],
      ["Fórmula", "x = (−b ± √(b² − 4ac)) / 2a", "var(--leaf)"],
      ["Discriminante", "Δ > 0: dos · Δ = 0: una · Δ < 0: ninguna", "var(--sun)"],
      ["Sistemas", "sustitución · igualación · reducción · gráfico", "var(--inf)"],
      ["Tipos", "se cortan: 1 sol. · paralelas: 0 · coinciden: ∞", "var(--red)"],
    ]),
  },
  video: pvg("segundo-grado"),
  mapa: mapa("2.º GRADO Y SISTEMAS", "var(--leaf)", [
    ["Incompletas", "ax² + c = 0 · ax² + bx = 0", "var(--pen)"],
    ["Completas", "fórmula · discriminante", "var(--leaf)"],
    ["Sistemas", "sustitución · igualación · reducción", "var(--sun)"],
    ["Problemas", "plantear · descartar soluciones", "var(--red)"],
  ], 250),
  glosario: [
    ["Ecuación de segundo grado", "Ecuación en la que la incógnita aparece elevada al cuadrado: ax² + bx + c = 0."],
    ["Coeficientes", "Los números a, b y c de la forma general."],
    ["Ecuación incompleta", "La que tiene b = 0 o c = 0."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac)) / 2a."],
    ["Discriminante", "Δ = b² − 4ac; indica el número de soluciones."],
    ["Solución doble", "Única solución cuando el discriminante es 0."],
    ["Parábola", "Gráfica de y = ax² + bx + c."],
    ["Sistema de ecuaciones", "Conjunto de ecuaciones que deben cumplirse a la vez."],
    ["Solución de un sistema", "Valores de las incógnitas que cumplen todas las ecuaciones."],
    ["Sustitución", "Método que despeja una incógnita y la sustituye en la otra ecuación."],
    ["Igualación", "Método que despeja la misma incógnita en las dos ecuaciones y las iguala."],
    ["Reducción", "Método que elimina una incógnita sumando o restando ecuaciones."],
    ["Sistema compatible determinado", "El que tiene una única solución."],
    ["Sistema incompatible", "El que no tiene solución."],
  ],
  situacion: {
    titulo: "¿Qué tarifa nos conviene?",
    reto: "Vais a comparar tres tarifas reales de un servicio (móvil, gimnasio, alquiler de bicis, plataforma de vídeo…) y decidir cuál conviene según el uso, planteando y resolviendo sistemas de ecuaciones.",
    pasos: [
      "Buscad tres tarifas reales del mismo servicio con una cuota fija y/o un precio por uso.",
      "Escribid la ecuación de cada tarifa (coste = cuota + precio · uso).",
      "Resolved por igualación los sistemas que forman las tarifas dos a dos para hallar los puntos en que cuestan lo mismo.",
      "Representad las tres rectas en una misma gráfica y marcad los puntos de corte.",
      "Redactad una recomendación según el uso mensual y presentadla a la clase.",
    ],
    producto: "Un informe con las ecuaciones, la gráfica y una recomendación razonada de tarifa según el uso.",
    evaluacion: ["Modeliza correctamente cada tarifa con una ecuación.", "Resuelve los sistemas con un método adecuado.", "Interpreta los puntos de corte en el contexto.", "Comunica la recomendación con argumentos matemáticos."],
  },
  tarjetas: [
    ["Forma general", "ax² + bx + c = 0, a ≠ 0"], ["ax² + c = 0", "x = ±√(−c/a)"], ["ax² + bx = 0", "x = 0 o x = −b/a"],
    ["Fórmula general", "(−b ± √(b² − 4ac)) / 2a"], ["Δ > 0", "Dos soluciones"], ["Δ < 0", "Ninguna solución real"],
    ["Producto nulo", "Si A · B = 0, A = 0 o B = 0"], ["Sistema", "Ecuaciones que se cumplen a la vez"], ["Sustitución", "Despejar y sustituir"],
    ["Igualación", "Despejar la misma e igualar"], ["Reducción", "Coeficientes opuestos y sumar"], ["Rectas paralelas", "Sistema incompatible"],
  ],
  familias: ["Comparad dos tarifas de móvil o de luz y calculad cuándo cuestan lo mismo.", "Plantead acertijos de «gallinas y conejos» con cabezas y patas.", "Medid una habitación rectangular y plantead qué dimensiones tendría otra con la misma área y otro perímetro.", "Lanzad una pelota y observad que su trayectoria es una parábola."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de segundo grado, sistemas de ecuaciones lineales con dos incógnitas, métodos de resolución e interpretación gráfica, y modelización de situaciones (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra para ver los cortes de la parábola con el eje x al variar a, b y c.", "Problemas de tarifas reales resueltos por igualación.", "Comparar los tres métodos de sistemas y debatir cuál conviene en cada caso.", "Problemas históricos: tablillas babilónicas y gallinas y conejos chinos."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Ecuación de segundo grado", url: "https://es.wikipedia.org/wiki/Ecuaci%C3%B3n_de_segundo_grado" }, { t: "Wikipedia: Matemáticas babilónicas", url: "https://es.wikipedia.org/wiki/Matem%C3%A1tica_babil%C3%B3nica" }],
  revisado: REV,
};
