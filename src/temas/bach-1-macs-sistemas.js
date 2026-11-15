// Matemáticas Aplicadas a las Ciencias Sociales I · Tema 5. Nivel libro. Dibujos propios en SVG.
const { tema, ficha, tabla, G, cadena, compara, flujo, lienzo, t, ft, wiki } = require("./_bach1-macs");

// Matriz ampliada de un sistema 3 × 3 (filas de 4 números) con título y nota.
function matriz(aria, titulo, filas, nota = "", marca = []) {
  let s = ft(130, 20, titulo, 236, { s: 12, b: 1 });
  s += `<path d="M44 36 h-8 v ${filas.length * 30 + 4} h8 M216 36 h8 v ${filas.length * 30 + 4} h-8" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M168 38 V ${38 + filas.length * 30}" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="3 3"/>`;
  filas.forEach((f, i) => f.forEach((v, j) => {
    const x = 62 + j * 40 + (j === 3 ? 12 : 0), y = 58 + i * 30, m = marca.some(([a, b]) => a === i && b === j);
    if (m) s += `<circle cx="${x}" cy="${y - 4}" r="12" fill="var(--sun)" fill-opacity=".35"/>`;
    s += t(x, y, String(v).replace("-", "−"), { s: 13, b: 1, c: m ? "var(--red)" : "var(--ink)" });
  }));
  if (nota) s += ft(130, 166, nota, 236, { s: 11.5, b: 1, c: "var(--pen)" });
  return lienzo(aria, s);
}

module.exports = tema({
  n: 5,
  titulo: "Sistemas de ecuaciones",
  minutos: 115,
  objetivos: [
    "Plantear sistemas de ecuaciones lineales a partir de problemas económicos y sociales",
    "Resolver sistemas de dos ecuaciones e interpretar el equilibrio de un mercado",
    "Clasificar sistemas en compatibles determinados, indeterminados e incompatibles",
    "Resolver y discutir sistemas de tres ecuaciones con el método de Gauss",
    "Resolver sistemas no lineales sencillos comprobando las soluciones",
    "Representar sistemas de inecuaciones con dos incógnitas y resolver problemas de programación lineal",
  ],
  claves: ["sistema lineal", "solución", "equilibrio de mercado", "sistema compatible", "sistema incompatible", "método de Gauss", "matriz ampliada", "semiplano", "región factible", "programación lineal"],
  lectura: {
    titulo: "Donde se cruzan la oferta y la demanda",
    html: `<p>¿Por qué un café cuesta 1,40 € y no 5 € ni 30 céntimos? La explicación clásica de la economía es que el precio surge del encuentro entre dos grupos: los consumidores, que compran más cuanto más barato es el producto, y los productores, que ofrecen más cuanto más caro pueden venderlo. Cada grupo tiene su propia relación entre precio y cantidad, y el precio de <b>equilibrio</b> es aquel en el que la cantidad que se quiere comprar coincide con la que se quiere vender.</p>
    <p>Matemáticamente, el equilibrio es la solución de un <b>sistema de ecuaciones</b>: la ecuación de la demanda y la de la oferta. Si la demanda de un producto es Q = 120 − 2p y la oferta Q = 3p − 30, el equilibrio se alcanza con p = 30 € y Q = 60 unidades. Si el Estado pone un impuesto, cambia una de las ecuaciones y el punto de equilibrio se desplaza.</p>
    <p>Los sistemas de ecuaciones aparecen en muchos otros problemas: repartir una producción entre varias fábricas, mezclar ingredientes con distintos precios, calcular cuántas entradas de cada tipo se vendieron en un concierto o decidir cuántas unidades de cada producto fabricar para obtener el máximo beneficio. En este tema aprenderás a plantearlos, resolverlos y discutirlos.</p>`,
  },
  pregunta: {
    texto: "Si dos ecuaciones lineales con dos incógnitas representan dos rectas paralelas, ¿cuántas soluciones tiene el sistema?",
    respuesta: "<mark>Ninguna</mark>. Las rectas paralelas no se cortan, así que no hay ningún punto que cumpla a la vez las dos ecuaciones: el sistema es <b>incompatible</b>. Si las rectas coinciden, hay infinitas soluciones, y si se cortan, una sola.",
  },
  bloques: [
    {
      h: "Sistemas de ecuaciones lineales",
      html: `<p>Un <b>sistema de ecuaciones</b> es un conjunto de ecuaciones que deben cumplirse a la vez. Es <b>lineal</b> si todas las incógnitas aparecen con exponente 1 y sin multiplicarse entre sí. Una <b>solución</b> es un conjunto de valores de las incógnitas que verifica todas las ecuaciones.</p><div class="formula"><span>a₁x + b₁y = c₁  ·  a₂x + b₂y = c₂</span></div><p>Cada ecuación lineal con dos incógnitas representa una <b>recta</b> en el plano, y la solución del sistema es el punto donde se cortan. Por eso la resolución gráfica, aunque poco precisa, ayuda a entender qué ocurre.</p><p>Ejemplo: una empresa de catering prepara menús de dos tipos. El menú A necesita 2 horas de cocina y el B, 1; en total dispone de 80 horas. Además, el A lleva 1 kg de verdura y el B, 2 kg, y hay 100 kg. Si se quiere agotar ambos recursos, el número de menús de cada tipo cumple</p><div class="formula"><span>2x + y = 80  ·  x + 2y = 100</span></div><p>La solución es x = 20, y = 40: veinte menús A y cuarenta B. Se comprueba sustituyendo: 40 + 40 = 80 y 20 + 80 = 100.</p>`,
      svg: G("Las rectas 2x más y igual a 80 y x más 2y igual a 100 se cortan en el punto 20, 40", { x0: -5, x1: 65, y0: -5, y1: 85, paso: 10, pasoY: 10, etiquetas: true, pasoEt: 20, pasoEtY: 20 }, (E) => `${E.curva((x) => 80 - 2 * x, "var(--pen)", 0, 42)}${E.curva((x) => (100 - x) / 2, "var(--red)", 0, 65)}${E.punto(20, 40, "var(--leaf)", "(20, 40)", 8, -6)}${t(E.X(30), E.Y(14), "2x + y = 80", { c: "var(--pen)", s: 10, b: 1, a: "start" })}${t(E.X(64), E.Y(33), "x + 2y = 100", { c: "var(--red)", s: 10, b: 1, a: "end" })}`),
    },
    {
      h: "Clasificación de los sistemas",
      html: `<p>Según el número de soluciones, un sistema puede ser:</p><ul><li><b>Compatible determinado</b> (SCD): una única solución. En dos incógnitas, las rectas se cortan en un punto.</li><li><b>Compatible indeterminado</b> (SCI): infinitas soluciones. Las rectas coinciden: una ecuación es múltiplo de la otra.</li><li><b>Incompatible</b> (SI): ninguna solución. Las rectas son paralelas.</li></ul><p>En un sistema de dos ecuaciones con dos incógnitas basta comparar los coeficientes. Si a₁/a₂ ≠ b₁/b₂, es SCD. Si a₁/a₂ = b₁/b₂ = c₁/c₂, es SCI. Si a₁/a₂ = b₁/b₂ ≠ c₁/c₂, es SI.</p><p>Ejemplos: el sistema x + 2y = 5, 2x + 4y = 10 es SCI (la segunda ecuación es el doble de la primera) y sus soluciones se escriben con un parámetro: y = λ, x = 5 − 2λ. En cambio, x + 2y = 5, 2x + 4y = 7 es incompatible: el primer miembro de la segunda es el doble que el de la primera, pero el segundo miembro no.</p>`,
      svg: compara("Interpretación gráfica de los tipos de sistemas: rectas que se cortan, coincidentes o paralelas", ["Compatibles", "var(--leaf)", ["SCD: se cortan", "→ 1 solución", "SCI: coinciden", "→ infinitas"]], ["Incompatible", "var(--red)", ["SI: paralelas", "→ ninguna", "a₁/a₂ = b₁/b₂", "≠ c₁/c₂"]], "Comparar coeficientes"),
    },
    {
      h: "Métodos de sustitución, igualación y reducción",
      html: `<p>Para sistemas de dos ecuaciones hay tres métodos algebraicos, que conviene elegir según la forma del sistema:</p><ul><li><b>Sustitución</b>: se despeja una incógnita en una ecuación y se sustituye en la otra. Es cómodo si alguna incógnita tiene coeficiente 1.</li><li><b>Igualación</b>: se despeja la misma incógnita en las dos ecuaciones y se igualan las expresiones. Es natural cuando las dos ecuaciones ya vienen despejadas.</li><li><b>Reducción</b>: se multiplican las ecuaciones por números adecuados para que, al sumarlas, desaparezca una incógnita. Es el más general y la base del método de Gauss.</li></ul><p>Ejemplo por reducción: 3x + 2y = 18, 5x − 4y = 8. Multiplicando la primera por 2 y sumando, 6x + 4y + 5x − 4y = 36 + 8, es decir, 11x = 44 y x = 4. Sustituyendo, 12 + 2y = 18 e y = 3.</p><p>Ejemplo por igualación con una mezcla: un tostadero quiere 30 kg de café a 14 €/kg mezclando un café de 12 €/kg y otro de 18 €/kg. Con x e y kilos: x + y = 30 y 12x + 18y = 420. Despejando y en ambas, 30 − x = (420 − 12x)/18, de donde 540 − 18x = 420 − 12x y x = 20. Hay que mezclar 20 kg del barato y 10 kg del caro.</p><p>Sea cual sea el método, se termina siempre comprobando la solución en las dos ecuaciones originales.</p>`,
      svg: cadena("Método de reducción aplicado al sistema 3x más 2y igual a 18 y 5x menos 4y igual a 8", [["3x + 2y = 18", "· 2"], ["6x + 4y = 36", "+ (5x − 4y = 8)"], ["11x = 44", "x = 4"], ["y = 3", "sustituir"]], "comprobar: 12 + 6 = 18 · 20 − 12 = 8", "Reducción"),
      video: { id: "OE8e70VO_CE", titulo: "Método de Gauss muy fácil para un sistema 2 × 2", canal: "Miguemáticas", vistas: 846400, busqueda: "método de Gauss sistemas de ecuaciones" },
    },
    {
      h: "Aplicación: el equilibrio de mercado",
      html: `<p>La <b>función de demanda</b> indica la cantidad que los consumidores desean comprar a cada precio; suele ser decreciente. La <b>función de oferta</b> indica la cantidad que los productores desean vender; suele ser creciente. El <b>equilibrio</b> es el par (precio, cantidad) que cumple las dos a la vez:</p><div class="formula"><span>Q = 120 − 2p (demanda)  ·  Q = 3p − 30 (oferta)  →  120 − 2p = 3p − 30 → p* = 30 €, Q* = 60</span></div><p>Si el precio fuera mayor, por ejemplo 40 €, se demandarían 40 unidades y se ofrecerían 90: habría un <b>exceso de oferta</b> de 50 unidades que haría bajar el precio. Con un precio de 20 €, se demandarían 80 y se ofrecerían 30: <b>exceso de demanda</b>, que empuja el precio hacia arriba.</p><p>El modelo permite estudiar la intervención pública. Si el Estado cobra a los productores un impuesto de 5 € por unidad, estos reciben p − 5 euros, y la oferta pasa a ser Q = 3(p − 5) − 30 = 3p − 45. El nuevo equilibrio es 120 − 2p = 3p − 45, es decir, p = 33 € y Q = 54. El precio para el consumidor sube 3 €, los productores reciben 28 € (2 € menos) y se venden 6 unidades menos: el impuesto se reparte entre ambos grupos.</p>`,
      svg: G("Curvas de demanda y oferta que se cortan en el precio 30 y la cantidad 60, y oferta desplazada por un impuesto con equilibrio en 33 y 54", { x0: -8, x1: 125, y0: -4, y1: 64, paso: 20, pasoY: 10, etiquetas: true, pasoEt: 40, pasoEtY: 20 }, (E) => `${E.curva((q) => (120 - q) / 2, "var(--pen)", 0, 120)}${E.curva((q) => (q + 30) / 3, "var(--red)", 0, 120)}${E.curva((q) => (q + 45) / 3, "var(--sun)", 0, 120, 2, 'stroke-dasharray="6 4"')}${E.punto(60, 30, "var(--leaf)", "(60, 30)", 6, 16)}${E.punto(54, 33, "var(--sun)", "(54, 33)", -6, -8)}${t(E.X(4), E.Y(56), "demanda", { c: "var(--pen)", s: 10, b: 1, a: "start" })}${t(E.X(122), E.Y(43), "oferta", { c: "var(--red)", s: 10, b: 1, a: "end" })}${t(E.X(122), E.Y(57), "con impuesto", { c: "var(--sun)", s: 10, b: 1, a: "end" })}${t(E.X(122), E.Y(2), "Q", { c: "var(--muted)", s: 10, a: "end" })}${t(E.X(-5), E.Y(62), "p", { c: "var(--muted)", s: 10, a: "start" })}`),
    },
    {
      h: "Sistemas de tres ecuaciones: el método de Gauss",
      html: `<p>Cuando hay tres incógnitas, cada ecuación lineal representa un plano en el espacio, y la resolución gráfica deja de ser práctica. El método más eficaz es el de <b>Gauss</b>, una generalización de la reducción. Consiste en transformar el sistema en otro equivalente <b>escalonado</b>, en el que cada ecuación tiene una incógnita menos que la anterior:</p><div class="formula"><span>x + y + z = 6  ·  −3y − z = −9  ·  −7z = −21</span></div><p>Un sistema escalonado se resuelve de abajo arriba: de la última, z = 3; sustituyendo en la segunda, y = 2; y en la primera, x = 1.</p><p>Para escalonar se usan las <b>transformaciones elementales</b>, que no cambian las soluciones:</p><ul><li>Intercambiar dos ecuaciones.</li><li>Multiplicar una ecuación por un número distinto de cero.</li><li>Sumar a una ecuación otra multiplicada por un número.</li></ul><p>Por comodidad se trabaja con la <b>matriz ampliada</b>, la tabla de coeficientes con una última columna para los términos independientes, sin escribir las letras. Se toma como «pivote» una ecuación con coeficiente de x sencillo (mejor si es 1) y se anula la x de las demás; después se repite con la y en las ecuaciones restantes.</p>`,
      svg: matriz("Matriz ampliada escalonada de un sistema de tres ecuaciones con los ceros resaltados", "Matriz escalonada", [[1, 1, 1, 6], [0, -3, -1, -9], [0, 0, -7, -21]], "z = 3 → y = 2 → x = 1", [[1, 0], [2, 0], [2, 1]]),
    },
    {
      h: "Gauss paso a paso",
      html: `<p>Resolvamos el sistema x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2 con la matriz ampliada.</p><ul><li><b>Paso 1</b>: la primera fila, con coeficiente 1 en x, es el pivote. Hacemos F₂ − 2F₁ y F₃ − F₁: las nuevas filas son (0, −3, −1 | −9) y (0, 1, −2 | −4).</li><li><b>Paso 2</b>: anulamos la y de la tercera fila con la segunda: 3F₃ + F₂ da (0, 0, −7 | −21).</li><li><b>Paso 3</b>: resolvemos de abajo arriba: −7z = −21 → z = 3; −3y − 3 = −9 → y = 2; x + 2 + 3 = 6 → x = 1.</li></ul><p>Comprobación en las tres ecuaciones: 1 + 2 + 3 = 6; 2 − 2 + 3 = 3; 1 + 4 − 3 = 2.</p><p>Un problema económico: un cine vendió 300 entradas de tres tipos, de adulto (8 €), joven (6 €) e infantil (4 €), y recaudó 1.900 €. El número de entradas de joven fue igual a la suma de las otras dos. Con x, y, z:</p><div class="formula"><span>x + y + z = 300  ·  8x + 6y + 4z = 1.900  ·  x − y + z = 0</span></div><p>Restando la tercera a la primera, 2y = 300, y = 150. Con eso, x + z = 150 y 8x + 4z = 1.000; restando cuatro veces la primera, 4x = 400, x = 100 y z = 50. Se vendieron 100 entradas de adulto, 150 de joven y 50 infantiles.</p>`,
      svg: flujo("Pasos del método de Gauss: anular x en las filas 2 y 3, anular y en la fila 3 y resolver de abajo arriba", ["F₂ − 2F₁ y F₃ − F₁ → anular x", "3F₃ + F₂ → anular y en la fila 3", "−7z = −21 → z = 3", "Subir: y = 2, x = 1"], "Gauss en tres pasos"),
    },
    {
      h: "Discusión de sistemas con Gauss",
      html: `<p>El método de Gauss no solo resuelve: también <b>clasifica</b> el sistema. Al escalonar puede aparecer una fila de ceros, lo que indica que una ecuación dependía de las otras:</p><ul><li>Si aparece una fila (0, 0, 0 | 0), esa ecuación sobra. Si quedan menos ecuaciones útiles que incógnitas, el sistema es <b>compatible indeterminado</b>.</li><li>Si aparece una fila (0, 0, 0 | k) con k ≠ 0, se ha llegado a 0 = k, un absurdo: el sistema es <b>incompatible</b>.</li><li>Si quedan tantas ecuaciones útiles como incógnitas, es <b>compatible determinado</b>.</li></ul><p>Ejemplo SCI: x + y + z = 4, 2x + y − z = 1, 3x + 2y = 5. La tercera es la suma de las dos primeras. Escalonando, F₂ − 2F₁ da −y − 3z = −7, y F₃ − F₁ − F₂ da la fila nula. Tomamos z = λ como <b>parámetro</b>: y = 7 − 3λ, x = 4 − y − z = −3 + 2λ. Las soluciones son (−3 + 2λ, 7 − 3λ, λ) para cualquier λ real.</p><p>Si la tercera ecuación fuera 3x + 2y = 6, al escalonar aparecería 0 = 1: el sistema sería incompatible.</p><p>En un problema real, la indeterminación significa que hay muchas soluciones posibles y hay que añadir condiciones: por ejemplo, que las incógnitas sean números naturales. En el SCI anterior, si x, y, z representan cantidades de producto, debe ser −3 + 2λ ≥ 0 y 7 − 3λ ≥ 0, es decir, 1,5 ≤ λ ≤ 7/3: con valores enteros solo vale λ = 2, que da la solución (1, 1, 2).</p>`,
      svg: tabla("Criterios de clasificación de un sistema con el método de Gauss según la última fila de la matriz escalonada", [["Última fila", "Significa", "Sistema"], ["(0 0 a | b), a ≠ 0", "z = b/a", "SCD"], ["(0 0 0 | 0)", "ecuación sobrante", "SCI"], ["(0 0 0 | k), k ≠ 0", "0 = k absurdo", "SI"]], { titulo: "Discusión por Gauss (3 incógnitas)", marca: [[3, 2]] }),
    },
    {
      h: "Sistemas no lineales",
      html: `<p>Un sistema es <b>no lineal</b> si alguna incógnita aparece elevada a un exponente distinto de 1, multiplicada por otra, dentro de una raíz o en un denominador. No hay un método general, pero casi siempre funciona la <b>sustitución</b>: se despeja una incógnita en la ecuación más sencilla y se sustituye en la otra, obteniendo una ecuación con una sola incógnita.</p><p>Ejemplo: x + y = 7, x² + y² = 25. De la primera, y = 7 − x; sustituyendo, x² + 49 − 14x + x² = 25, es decir, 2x² − 14x + 24 = 0, o x² − 7x + 12 = 0. Las soluciones son x = 3 (y = 4) y x = 4 (y = 3). Gráficamente, la recta corta a la circunferencia en dos puntos.</p><p>Un problema de reparto: un grupo de amigos alquila un local por 600 €. Si fueran 5 más, cada uno pagaría 10 € menos. Si son x y cada uno paga y:</p><div class="formula"><span>x · y = 600  ·  (x + 5)(y − 10) = 600</span></div><p>Desarrollando la segunda y usando la primera, −10x + 5y − 50 = 0, es decir, y = 2x + 10. Sustituyendo, x(2x + 10) = 600 → x² + 5x − 300 = 0 → x = 15 (la solución −20 no tiene sentido). Son 15 amigos y pagan 40 € cada uno.</p><p>Como en las ecuaciones irracionales o racionales, hay que comprobar las soluciones y descartar las que no tienen sentido en el contexto. Los sistemas no lineales pueden tener ninguna, una, dos o más soluciones: una recta y una parábola, por ejemplo, se cortan como mucho en dos puntos.</p>`,
      svg: G("La recta x más y igual a 7 corta a la circunferencia x cuadrado más y cuadrado igual a 25 en los puntos 3, 4 y 4, 3", { x0: -6.5, x1: 8, y0: -6.2, y1: 8, paso: 2, pasoY: 2, etiquetas: true }, (E) => `${E.curva((x) => Math.sqrt(Math.max(0, 25 - x * x)), "var(--pen)", -5, 5)}${E.curva((x) => -Math.sqrt(Math.max(0, 25 - x * x)), "var(--pen)", -5, 5)}${E.curva((x) => 7 - x, "var(--red)", -1, 8)}${E.punto(3, 4, "var(--leaf)", "(3, 4)", -10, 10)}${E.punto(4, 3, "var(--leaf)", "(4, 3)", 8, 4)}${t(E.X(-6), E.Y(7.2), "x² + y² = 25", { c: "var(--pen)", s: 10, b: 1, a: "start" })}`),
      video: { id: "qUoCNovQLqQ", titulo: "Sistema de ecuaciones no lineal", canal: "Matemáticas con Juan", vistas: 51122, busqueda: "sistemas de ecuaciones no lineales" },
    },
    {
      h: "Inecuaciones lineales con dos incógnitas",
      html: `<p>Una inecuación lineal con dos incógnitas, como 2x + 3y ≤ 12, tiene infinitas soluciones: todos los puntos de un <b>semiplano</b>. Para representarla:</p><ul><li>Se dibuja la recta asociada 2x + 3y = 12, que es la frontera. Se traza continua si la desigualdad incluye la igualdad (≤, ≥) y discontinua si es estricta (&lt;, &gt;).</li><li>Se toma un <b>punto de prueba</b> que no esté en la recta, normalmente el origen (0, 0), y se sustituye: 0 ≤ 12 es cierto.</li><li>Se sombrea el semiplano que contiene el punto de prueba si se cumple la desigualdad, y el otro si no.</li></ul><p>En economía las inecuaciones lineales representan <b>restricciones</b>. Si un estudiante dispone de 12 € semanales para ocio y gasta 2 € en cada bebida (x) y 3 € en cada entrada a un videojuego en línea (y), sus combinaciones posibles cumplen 2x + 3y ≤ 12, con x ≥ 0 e y ≥ 0. Esta región se llama <b>conjunto presupuestario</b> y su frontera, la <b>recta de balance</b>. Los puntos sobre la recta agotan el presupuesto; los interiores dejan dinero sin gastar.</p><p>Si cambian los precios o la renta, la recta se desplaza o gira: un aumento del presupuesto a 18 € la desplaza paralelamente hacia fuera, y una subida del precio de las bebidas la hace girar alrededor de su corte con el eje y.</p>`,
      svg: G("Semiplano 2x más 3y menor o igual que 12 en el primer cuadrante: conjunto presupuestario", { x0: -1, x1: 8, y0: -1, y1: 5.5, paso: 1, pasoY: 1, etiquetas: true, pasoEt: 2, pasoEtY: 2 }, (E) => `${E.area([[0, 0], [6, 0], [0, 4]], "var(--leaf)", 0.25)}${E.curva((x) => (12 - 2 * x) / 3, "var(--pen)", -0.5, 7.5)}${E.punto(0, 0, "var(--ink)", "(0, 0): 0 ≤ 12 ✓", 6, 14)}${t(E.X(4.2), E.Y(3.2), "2x + 3y = 12", { c: "var(--pen)", s: 11, b: 1, a: "start" })}${t(E.X(1.6), E.Y(1.1), "posibles", { c: "var(--leaf)", s: 11, b: 1 })}`),
    },
    {
      h: "Sistemas de inecuaciones y región factible",
      html: `<p>Un <b>sistema de inecuaciones</b> con dos incógnitas se resuelve representando cada inecuación y quedándose con la <b>intersección</b> de todos los semiplanos. Esa zona común se llama <b>región factible</b> y sus puntos son las soluciones del sistema. Puede ser un polígono cerrado (acotada), una zona abierta (no acotada) o el conjunto vacío.</p><p>Los puntos donde se cortan las rectas frontera son los <b>vértices</b> de la región. Se calculan resolviendo, de dos en dos, los sistemas formados por las ecuaciones de las rectas, y comprobando que el punto obtenido cumple las demás inecuaciones.</p><p>Ejemplo: una pequeña empresa fabrica mochilas de dos modelos, x del modelo A e y del B. Cada mochila A necesita 1 hora de corte y 3 de costura; cada B, 2 horas de corte y 2 de costura. Se disponen de 80 horas de corte y 120 de costura a la semana:</p><div class="formula"><span>x + 2y ≤ 80  ·  3x + 2y ≤ 120  ·  x ≥ 0  ·  y ≥ 0</span></div><p>La región factible es un cuadrilátero con vértices (0, 0), (40, 0), (0, 40) y el punto de corte de las dos rectas: restando las ecuaciones, 2x = 40, x = 20, y = 30. Cualquier punto de la región es un plan de producción posible; fuera de ella falta tiempo de corte o de costura.</p><p>Las condiciones x ≥ 0 e y ≥ 0 se llaman de <b>no negatividad</b> y aparecen en casi todos los problemas, porque las cantidades no pueden ser negativas.</p>`,
      svg: G("Región factible definida por x más 2y menor o igual que 80, 3x más 2y menor o igual que 120 y no negatividad, con sus cuatro vértices", { x0: -5, x1: 70, y0: -5, y1: 65, paso: 10, pasoY: 10, etiquetas: true, pasoEt: 20, pasoEtY: 20 }, (E) => `${E.area([[0, 0], [40, 0], [20, 30], [0, 40]], "var(--leaf)", 0.28)}${E.curva((x) => (80 - x) / 2, "var(--pen)", 0, 70)}${E.curva((x) => (120 - 3 * x) / 2, "var(--red)", 0, 42)}${E.punto(0, 0, "var(--ink)")}${E.punto(40, 0, "var(--ink)", "(40, 0)", 6, -6)}${E.punto(0, 40, "var(--ink)", "(0, 40)", 6, -8)}${E.punto(20, 30, "var(--leaf)", "(20, 30)", 8, -4)}${t(E.X(68), E.Y(27), "x + 2y = 80", { c: "var(--pen)", s: 10, b: 1, a: "end" })}${t(E.X(32), E.Y(58), "3x + 2y = 120", { c: "var(--red)", s: 10, b: 1, a: "start" })}`),
      video: { id: "FT6rKVYWDCs", titulo: "Sistemas de inecuaciones con dos incógnitas: método gráfico", canal: "Susi Profe", vistas: 610722, busqueda: "sistemas de inecuaciones con dos incógnitas" },
    },
    {
      h: "Introducción a la programación lineal",
      html: `<p>La <b>programación lineal</b> busca el máximo o el mínimo de una <b>función objetivo</b> lineal, F(x, y) = ax + by, sobre una región factible definida por inecuaciones lineales. Nació en los años cuarenta para planificar la logística militar y hoy se usa para organizar la producción, el transporte, las dietas de los hospitales o los turnos de trabajo.</p><p>Su resultado fundamental es que, si la región factible es un polígono acotado, <b>el óptimo se alcanza en un vértice</b> (o en todo un lado, si dos vértices dan el mismo valor). Por eso basta evaluar la función en los vértices.</p><p>Continuando con las mochilas, si cada mochila A deja 20 € de beneficio y cada B, 30 €, la función objetivo es B(x, y) = 20x + 30y. En los vértices:</p><ul><li>(0, 0): 0 €.</li><li>(40, 0): 800 €.</li><li>(0, 40): 1.200 €.</li><li>(20, 30): 400 + 900 = 1.300 €.</li></ul><p>El máximo, <b>1.300 €</b>, se obtiene fabricando 20 mochilas A y 30 B por semana. En ese punto se agotan las horas de corte y de costura.</p><p>Otra forma de verlo es con las <b>rectas de nivel</b> 20x + 30y = k, todas paralelas: al aumentar k, la recta se desplaza hacia fuera, y el último punto de la región que toca es el óptimo. Este problema se estudiará a fondo en segundo curso; aquí lo importante es entender que un sistema de inecuaciones describe las decisiones posibles y la función objetivo permite elegir la mejor.</p>`,
      svg: tabla("Valor del beneficio 20x más 30y en los cuatro vértices de la región factible: el máximo es 1.300 euros en el punto 20, 30", [["Vértice", "20x + 30y", "Beneficio"], ["(0, 0)", "0 + 0", "0 €"], ["(40, 0)", "800 + 0", "800 €"], ["(0, 40)", "0 + 1.200", "1.200 €"], ["(20, 30)", "400 + 900", "1.300 €"]], { titulo: "Función objetivo en los vértices", marca: [[4, 2]], cab: "var(--leaf)" }),
    },
    {
      h: "Modelizar con sistemas",
      html: `<p>La parte más difícil de un problema con sistemas suele ser el planteamiento. Estas pautas ayudan:</p><ul><li><b>Identificar las incógnitas</b> y escribir qué representa cada una, con unidades. Suele haber tantas incógnitas como cantidades desconocidas se piden.</li><li><b>Buscar tantas relaciones independientes como incógnitas</b>: totales (de unidades, de dinero, de horas), proporciones («el doble que»), diferencias y porcentajes.</li><li>Organizar los datos en una <b>tabla</b> con una fila por tipo y una columna por recurso; cada columna suele dar una ecuación.</li><li>Resolver, <b>comprobar</b> e interpretar: las soluciones deben ser coherentes (no negativas, enteras si se cuentan personas u objetos).</li></ul><p>Ejemplo: una cooperativa agrícola obtiene aceite de tres fincas. La producción total es de 18.000 litros; la segunda finca produce el doble que la primera y la tercera, 2.000 litros más que la primera. Con x, y, z: x + y + z = 18.000, y = 2x, z = x + 2.000. Sustituyendo, 4x + 2.000 = 18.000, x = 4.000; y = 8.000; z = 6.000 litros.</p>`,
      svg: tabla("Tabla de datos para plantear el problema de las mochilas: horas de corte y costura de cada modelo y disponibles", [["", "Modelo A", "Modelo B", "Disponible"], ["Corte (h)", "1", "2", "80"], ["Costura (h)", "3", "2", "120"], ["Beneficio (€)", "20", "30", "máx."]], { titulo: "Una fila por recurso → una inecuación", cab: "var(--red)" }),
    },
  ],
  ejemplos: [
    ["Resuelve por sustitución: x − 2y = 1; 3x + y = 17.", ["De la primera, x = 1 + 2y.", "3(1 + 2y) + y = 17 → 7y = 14 → y = 2.", "x = 1 + 4 = 5."], "x = 5, y = 2."],
    ["La demanda de un producto es Q = 200 − 5p y la oferta Q = 15p − 40. Halla el equilibrio y el exceso de demanda a 10 €.", ["200 − 5p = 15p − 40 → 20p = 240 → p = 12 €.", "Q = 200 − 60 = 140.", "A 10 €: demanda 150, oferta 110."], "Equilibrio p = 12 €, Q = 140; a 10 € hay un exceso de demanda de 40 unidades."],
    ["Clasifica: 3x − 6y = 9; −x + 2y = −3.", ["La primera es −3 veces la segunda: coeficientes y términos proporcionales.", "Soluciones: y = λ, x = 3 + 2λ."], "Compatible indeterminado: (3 + 2λ, λ)."],
    ["Resuelve por Gauss: x + y − z = 1; 2x − y + z = 5; x + 2y + 2z = 9.", ["F₂ − 2F₁: −3y + 3z = 3 → −y + z = 1. F₃ − F₁: y + 3z = 8.", "Sumando: 4z = 9 → z = 9/4; y = z − 1 = 5/4.", "x = 1 − y + z = 1 − 5/4 + 9/4 = 2."], "x = 2, y = 5/4, z = 9/4."],
    ["Resuelve x · y = 12; x − y = 1.", ["x = y + 1 → (y + 1)y = 12 → y² + y − 12 = 0.", "y = 3 (x = 4) o y = −4 (x = −3)."], "(4, 3) y (−3, −4)."],
    ["Maximiza F = 3x + 2y en la región x + y ≤ 10, x ≤ 6, x ≥ 0, y ≥ 0.", ["Vértices: (0, 0), (6, 0), (6, 4), (0, 10).", "F: 0, 18, 26, 20."], "Máximo F = 26 en (6, 4)."],
  ],
  errores: [
    "No comprobar la solución en todas las ecuaciones del sistema original.",
    "Al aplicar Gauss, operar solo con los coeficientes y olvidar transformar también los términos independientes.",
    "Pensar que una fila (0 0 0 | 0) hace incompatible el sistema: indica una ecuación sobrante.",
    "En un sistema no lineal, quedarse con soluciones negativas o sin sentido en el contexto.",
    "Sombrear el semiplano equivocado por no usar un punto de prueba.",
    "Buscar el óptimo de programación lineal en puntos interiores en lugar de en los vértices.",
  ],
  ejercicios: {
    b: [
      ["Comprueba si (2, −1) es solución de 3x + 2y = 4; x − y = 3.", "6 − 2 = 4 ✓; 2 + 1 = 3 ✓. Sí es solución."],
      ["Resuelve por reducción: 2x + 3y = 12; 2x − y = 4.", "Restando: 4y = 8 → y = 2; 2x = 6 → x = 3."],
      ["Resuelve por igualación: y = 3x − 2; y = −x + 6.", "3x − 2 = −x + 6 → 4x = 8 → x = 2, y = 4."],
      ["Clasifica sin resolver: a) x + y = 3, 2x + 2y = 7; b) x − y = 1, x + y = 5.", "a) 1/2 = 1/2 ≠ 3/7: incompatible (rectas paralelas). b) 1/1 ≠ −1/1: compatible determinado."],
      ["En una papelería, 3 cuadernos y 2 bolígrafos cuestan 7,60 € y 2 cuadernos y 5 bolígrafos, 8 €. ¿Cuánto cuesta cada artículo?", "3c + 2b = 7,6; 2c + 5b = 8. Por reducción (la primera por 2 y la segunda por 3): 6c + 4b = 15,2; 6c + 15b = 24 → 11b = 8,8 → b = 0,80 €. Entonces 3c = 7,6 − 1,6 = 6 → c = 2 €."],
      ["Resuelve el sistema escalonado: x + y + z = 7; y − z = 1; 2z = 4.", "z = 2; y = 3; x = 2."],
      ["Representa la región x + y ≤ 5, x ≥ 0, y ≥ 0 e indica sus vértices.", "Triángulo con vértices (0, 0), (5, 0) y (0, 5)."],
      ["Un cine vende entradas a 7 € y a 5 € (reducidas). Un día vende 220 entradas y recauda 1.380 €. ¿Cuántas de cada tipo?", "x + y = 220; 7x + 5y = 1.380 → 7x + 5(220 − x) = 1.380 → 2x = 280 → x = 140 normales, y = 80 reducidas."],
      ["La demanda es Q = 90 − 3p y la oferta Q = 2p + 10. Halla el equilibrio.", "90 − 3p = 2p + 10 → p = 16 €; Q = 42."],
      ["¿Pertenece el punto (3, 2) a la región 2x + y ≤ 9; x − y ≥ 0?", "6 + 2 = 8 ≤ 9 ✓; 3 − 2 = 1 ≥ 0 ✓. Sí pertenece."],
    ],
    m: [
      ["Se quieren obtener 50 kg de pienso a 0,46 €/kg mezclando uno de 0,40 €/kg y otro de 0,55 €/kg. ¿Cuánto de cada uno?", "x + y = 50; 0,40x + 0,55y = 23 → 0,40x + 0,55(50 − x) = 23 → 27,5 − 0,15x = 23 → x = 30 kg del barato, y = 20 kg del caro."],
      ["Resuelve por Gauss: x + 2y + z = 8; 2x − y + 3z = 9; x + y − z = 0.", "F₂ − 2F₁: −5y + z = −7. F₃ − F₁: −y − 2z = −8. 5F₃' − F₂': −10z − z = −40 + 7 → −11z = −33 → z = 3; y = 8 − 2z = 2 (de −y − 6 = −8); x = 8 − 4 − 3 = 1."],
      ["Discute y resuelve: x + y + z = 3; x − y + 2z = 2; 2x + 3z = 5.", "F₃ = F₁ + F₂: fila nula. SCI. De F₂ − F₁: −2y + z = −1 → y = (1 + z)/2. Con z = λ: y = (1 + λ)/2, x = 3 − y − z = (5 − 3λ)/2."],
      ["Discute: x + y + z = 1; 2x + 2y + 2z = 3; x − y = 0.", "F₂ − 2F₁ = (0 0 0 | 1): 0 = 1, sistema incompatible."],
      ["Con la demanda Q = 120 − 2p y la oferta Q = 3p − 30, el Estado fija un precio máximo de 24 €. ¿Qué ocurre?", "A 24 €: demanda 72, oferta 42. Exceso de demanda (escasez) de 30 unidades."],
      ["Si en el mercado anterior (Q = 120 − 2p, Q = 3p − 30) se concede una subvención de 5 € por unidad a los productores, ¿cuál es el nuevo equilibrio?", "Los productores reciben p + 5: oferta Q = 3(p + 5) − 30 = 3p − 15. 120 − 2p = 3p − 15 → p = 27 €; Q = 66."],
      ["Resuelve x² + y² = 13; x · y = 6.", "Sumando y restando 2xy: (x + y)² = 25 y (x − y)² = 1. Soluciones: (3, 2), (2, 3), (−3, −2), (−2, −3)."],
      ["Resuelve y = x² − 4x + 5; y = x + 1 e interpreta gráficamente.", "x² − 4x + 5 = x + 1 → x² − 5x + 4 = 0 → x = 1 (y = 2) o x = 4 (y = 5). La recta corta a la parábola en dos puntos."],
      ["Halla los vértices de la región x + y ≤ 8; x − y ≤ 2; x ≥ 0; y ≥ 0.", "Rectas: x + y = 8 y x − y = 2 se cortan en (5, 3). Vértices: (0, 0), (2, 0), (5, 3), (0, 8)."],
      ["Un artesano hace x cuencos e y jarras. Dispone de 60 kg de arcilla (1 kg por cuenco, 2 por jarra) y 40 horas (1 hora por pieza). Escribe las restricciones y halla los vértices.", "x + 2y ≤ 60; x + y ≤ 40; x, y ≥ 0. Corte: y = 20, x = 20. Vértices (0, 0), (40, 0), (20, 20), (0, 30)."],
      ["Un examen tiene 40 preguntas. Cada acierto suma 0,5 y cada fallo resta 0,25; las no contestadas no cuentan. Ana contestó 34 y sacó 11. ¿Cuántas acertó?", "a + f = 34; 0,5a − 0,25f = 11 → 0,5a − 0,25(34 − a) = 11 → 0,75a = 19,5 → a = 26 aciertos, 8 fallos."],
      ["Tres socios aportan capital: el segundo aporta 5.000 € más que el primero y el tercero tanto como los otros dos juntos. En total aportan 50.000 €. ¿Cuánto aporta cada uno?", "x + y + z = 50.000; y = x + 5.000; z = x + y. Entonces 2(x + y) = 50.000 → x + y = 25.000 → 2x + 5.000 = 25.000 → x = 10.000, y = 15.000, z = 25.000 €."],
    ],
    a: [
      ["Discute según el valor de a: x + y = 2; 2x + ay = 4.", "Si a ≠ 2, los coeficientes no son proporcionales: SCD (x = 2, y = 0). Si a = 2, la segunda es el doble de la primera: SCI."],
      ["Discute según k: x + y + z = 2; x + 2y + 3z = 5; 2x + 3y + 4z = k.", "F₂ − F₁: y + 2z = 3. F₃ − 2F₁: y + 2z = k − 4. Restando: 0 = k − 7. Si k = 7, SCI; si k ≠ 7, incompatible."],
      ["En un mercado, la demanda es Q = 300 − 4p y la oferta Q = 6p − 100. Halla el equilibrio y el efecto de un impuesto de 10 € por unidad a los productores. ¿Qué parte del impuesto soportan los consumidores?", "Sin impuesto: 300 − 4p = 6p − 100 → p = 40, Q = 140. Con impuesto: oferta 6(p − 10) − 100 = 6p − 160 → 300 − 4p = 6p − 160 → p = 46, Q = 116. Los consumidores pagan 6 € más (60 % del impuesto) y los productores reciben 36 € (4 € menos, 40 %)."],
      ["Una empresa fabrica tres productos, A, B y C, que pasan por tres secciones. A necesita 1, 2 y 1 horas en cada sección; B, 2, 1 y 1; C, 1, 1 y 2. Las secciones disponen de 70, 60 y 70 horas. ¿Cuánto de cada producto debe fabricar para usarlas al completo?", "x + 2y + z = 70; 2x + y + z = 60; x + y + 2z = 70. F₂ − 2F₁: −3y − z = −80. F₃ − F₁: −y + z = 0 → z = y. Entonces −4y = −80 → y = 20, z = 20, x = 70 − 40 − 20 = 10."],
      ["Maximiza el beneficio B = 40x + 30y con las restricciones 2x + y ≤ 100; x + y ≤ 80; x ≥ 0; y ≥ 0. Interpreta.", "Vértices: (0, 0), (50, 0), (0, 80) y el corte de 2x + y = 100 con x + y = 80: x = 20, y = 60. B: 0; 2.000; 2.400; 800 + 1.800 = 2.600. Máximo 2.600 € con 20 unidades de x y 60 de y."],
      ["Un nutricionista combina dos alimentos: el primero aporta 2 unidades de proteína y 1 de fibra por ración, y el segundo 1 y 3. Se necesitan al menos 8 de proteína y 9 de fibra. Cada ración cuesta 1,5 € y 1 €. Minimiza el coste.", "2x + y ≥ 8; x + 3y ≥ 9; x, y ≥ 0. Región no acotada con vértices (0, 8), (9, 0) y el corte: de y = 8 − 2x, x + 24 − 6x = 9 → x = 3, y = 2. Coste 1,5x + y: (0, 8) → 8; (3, 2) → 6,5; (9, 0) → 13,5. Mínimo 6,5 € con 3 raciones del primero y 2 del segundo."],
      ["Resuelve √x + √y = 5; x − y = 5.", "x − y = (√x − √y)(√x + √y) = 5 → √x − √y = 1. Con √x + √y = 5: √x = 3, √y = 2 → x = 9, y = 4. Comprobación correcta."],
      ["Un grupo de turistas paga 1.800 € por un viaje. Si el grupo tuviera 6 personas menos, cada una pagaría 25 € más. ¿Cuántas personas hay?", "x · y = 1.800; (x − 6)(y + 25) = 1.800 → 25x − 6y − 150 = 0 → y = (25x − 150)/6. x(25x − 150)/6 = 1.800 → 25x² − 150x − 10.800 = 0 → x² − 6x − 432 = 0 → x = 24. Son 24 personas, que pagan 75 € cada una."],
    ],
  },
  quiz: [
    ["La solución de un sistema de dos ecuaciones lineales es gráficamente…", ["el punto de corte de las rectas", "la pendiente", "el origen", "la distancia entre rectas"], "Cumple las dos ecuaciones."],
    ["Si las rectas son paralelas, el sistema es…", ["incompatible", "compatible determinado", "compatible indeterminado", "lineal homogéneo"], "No hay corte."],
    ["x + y = 4 y 3x + 3y = 12 forman un sistema…", ["compatible indeterminado", "incompatible", "compatible determinado", "no lineal"], "Una es el triple de la otra."],
    ["El método más cómodo si una incógnita tiene coeficiente 1 es…", ["sustitución", "Gauss", "reducción", "gráfico"], "Se despeja fácilmente."],
    ["En el equilibrio de mercado…", ["la cantidad ofrecida es igual a la demandada", "el precio es cero", "hay exceso de oferta", "la demanda es creciente"], "Ambas funciones coinciden."],
    ["Con un precio por encima del equilibrio hay…", ["exceso de oferta", "exceso de demanda", "escasez", "equilibrio"], "Se ofrece más de lo que se compra."],
    ["Un impuesto a los productores…", ["sube el precio y baja la cantidad", "baja el precio", "sube la cantidad", "no cambia nada"], "Desplaza la oferta."],
    ["Un sistema escalonado se resuelve…", ["de abajo arriba", "de arriba abajo", "por igualación", "gráficamente"], "La última ecuación tiene una incógnita."],
    ["No es una transformación válida en Gauss…", ["sumar un número a una sola incógnita", "intercambiar ecuaciones", "multiplicar una ecuación por 3", "sumar a una ecuación otra multiplicada"], "Cambiaría las soluciones."],
    ["Si al escalonar aparece (0 0 0 | 5), el sistema es…", ["incompatible", "SCI", "SCD", "homogéneo"], "0 = 5 es absurdo."],
    ["Si aparece (0 0 0 | 0) en un sistema de 3 incógnitas, puede ser…", ["compatible indeterminado", "incompatible siempre", "SCD siempre", "sin solución"], "Ecuación sobrante."],
    ["Las soluciones de un SCI se expresan con…", ["parámetros", "intervalos", "logaritmos", "una sola terna"], "Por ejemplo, z = λ."],
    ["En un sistema no lineal conviene…", ["sustituir y comprobar", "usar Gauss", "dividir entre x", "sumar ecuaciones siempre"], "Puede haber soluciones sin sentido."],
    ["x + y = 5, xy = 6 tiene soluciones…", ["(2, 3) y (3, 2)", "(1, 6)", "(5, 1)", "ninguna"], "Suma 5, producto 6."],
    ["La solución de 2x + y ≤ 6 es…", ["un semiplano", "una recta", "un punto", "un segmento"], "Toda una zona del plano."],
    ["Para saber qué semiplano sombrear se usa…", ["un punto de prueba", "la pendiente", "el discriminante", "Gauss"], "Normalmente (0, 0)."],
    ["La región factible es…", ["la intersección de los semiplanos", "la unión", "la recta frontera", "el vértice"], "Cumple todas las restricciones."],
    ["En programación lineal, el óptimo de una región acotada está…", ["en un vértice", "en el centro", "en el origen siempre", "fuera de la región"], "Teorema fundamental."],
    ["El vértice de x + y = 10 y x − y = 2 es…", ["(6, 4)", "(4, 6)", "(5, 5)", "(8, 2)"], "Sumando: 2x = 12."],
    ["La condición x ≥ 0 se llama de…", ["no negatividad", "igualdad", "equilibrio", "indeterminación"], "Las cantidades no son negativas."],
  ],
  examen: [
    ["La solución de 2x − y = 7; x + 3y = 7 es…", ["(4, 1)", "(3, −1)", "(1, 2)", "(5, 3)"], "y = 2x − 7."],
    ["El equilibrio de Q = 100 − 2p y Q = 3p − 50 es…", ["p = 30, Q = 40", "p = 20, Q = 60", "p = 50, Q = 0", "p = 25, Q = 50"], "150 = 5p."],
    ["El sistema x + 2y = 3; 2x + 4y = 5 es…", ["incompatible", "SCD", "SCI", "homogéneo"], "Proporcionales salvo el término independiente."],
    ["Por Gauss, x + y + z = 3; y + z = 2; z = 1 da…", ["(1, 1, 1)", "(0, 1, 2)", "(1, 2, 0)", "(3, 2, 1)"], "De abajo arriba."],
    ["El sistema x + y + z = 1; x − y + z = 1; 2x + 2z = 2 es…", ["SCI", "SCD", "SI", "no lineal"], "F₃ = F₁ + F₂."],
    ["Las soluciones de x² + y² = 10; x = 3y son…", ["(3, 1) y (−3, −1)", "(1, 3)", "(3, 1)", "(9, 1)"], "10y² = 10."],
    ["El máximo de F = x + 2y en la región de vértices (0, 0), (4, 0), (3, 2), (0, 3) es…", ["7 en (3, 2)", "6 en (0, 3)", "4 en (4, 0)", "0"], "3 + 4 = 7."],
    ["Mezclando café de 10 €/kg y de 16 €/kg para 12 kg a 12 €/kg se necesitan…", ["8 kg y 4 kg", "6 kg y 6 kg", "4 kg y 8 kg", "9 kg y 3 kg"], "10x + 16(12 − x) = 144."],
  ],
  feynman: ["Qué significa gráficamente que un sistema sea incompatible", "Por qué el precio de equilibrio es la solución de un sistema", "Cómo se escalona un sistema con el método de Gauss", "Qué indica una fila de ceros al aplicar Gauss", "Por qué el óptimo de un problema de programación lineal está en un vértice"],
  glosario: [
    ["Sistema de ecuaciones", "Conjunto de ecuaciones que deben cumplirse simultáneamente."],
    ["Sistema lineal", "Sistema en el que las incógnitas aparecen con exponente 1 y sin multiplicarse entre sí."],
    ["Sistema compatible determinado", "El que tiene una única solución."],
    ["Sistema compatible indeterminado", "El que tiene infinitas soluciones, expresadas con parámetros."],
    ["Sistema incompatible", "El que no tiene solución."],
    ["Sistemas equivalentes", "Los que tienen las mismas soluciones."],
    ["Función de demanda", "Relación entre el precio y la cantidad que los consumidores desean comprar."],
    ["Función de oferta", "Relación entre el precio y la cantidad que los productores desean vender."],
    ["Equilibrio de mercado", "Precio y cantidad para los que la oferta y la demanda coinciden."],
    ["Método de Gauss", "Método que transforma un sistema en otro escalonado equivalente mediante transformaciones elementales."],
    ["Matriz ampliada", "Tabla con los coeficientes y los términos independientes de un sistema."],
    ["Parámetro", "Letra que toma cualquier valor real y describe las soluciones de un sistema indeterminado."],
    ["Semiplano", "Cada una de las dos partes en que una recta divide el plano."],
    ["Región factible", "Conjunto de puntos que cumplen todas las inecuaciones de un sistema."],
    ["Función objetivo", "Función lineal que se quiere maximizar o minimizar en programación lineal."],
    ["Programación lineal", "Técnica para optimizar una función lineal sujeta a restricciones lineales."],
  ],
  situacion: {
    titulo: "El mercado de la feria solidaria",
    reto: "El centro organiza una feria solidaria y vuestro grupo gestiona un puesto que vende dos productos artesanales. Debéis decidir cuántas unidades de cada uno preparar con los recursos disponibles y estudiar a qué precio se vendería todo.",
    pasos: [
      "Elegid dos productos y estimad los recursos que necesita cada uno (horas de trabajo, material, dinero) y los recursos disponibles.",
      "Escribid las restricciones como un sistema de inecuaciones y representad la región factible.",
      "Calculad los vértices y el beneficio en cada uno para encontrar el plan óptimo.",
      "Con una encuesta a los compañeros, estimad una función de demanda lineal para uno de los productos y, con vuestro coste, una oferta; calculad el precio de equilibrio.",
      "Presentad el plan de producción y el precio recomendado, explicando las limitaciones del modelo.",
    ],
    producto: "Un informe breve con el sistema de restricciones, la gráfica de la región factible, el plan óptimo y el estudio del precio, presentado al resto de la clase.",
    evaluacion: [
      "Traduce las condiciones del problema a inecuaciones correctas.",
      "Representa la región factible y calcula sus vértices con exactitud.",
      "Resuelve el equilibrio y lo interpreta en el contexto.",
      "Argumenta las decisiones y reconoce las limitaciones del modelo.",
    ],
  },
  figura: ["Sistemas de un vistazo", "Resumen de sistemas lineales, Gauss, sistemas no lineales e inecuaciones", [
    ["2 × 2", ["sustitución", "igualación · reducción", "rectas que se cortan", "equilibrio: Qd = Qs"]],
    ["Tipos", ["SCD: 1 solución", "SCI: infinitas (λ)", "SI: ninguna", "paralelas → SI"]],
    ["Gauss", ["matriz ampliada", "escalonar", "(0 0 0 | 0): sobra", "(0 0 0 | k): SI"]],
    ["Inecuaciones", ["semiplanos", "región factible", "vértices", "óptimo en vértice"]],
  ]],
  video: { id: "kgtFQTflh_I", titulo: "Sistemas de inecuaciones con dos incógnitas", canal: "T de tortuga", vistas: 737304, busqueda: "sistemas de inecuaciones con dos incógnitas" },
  mapa: ["SISTEMAS", [
    ["Sistemas lineales", "sustitución · igualación · reducción"],
    ["Gauss", "escalonar · discutir · parámetros"],
    ["Aplicaciones", "equilibrio · mezclas · repartos"],
    ["Inecuaciones", "región factible · programación lineal"],
  ]],
  tarjetas: [
    ["SCD", "Una solución: rectas que se cortan."],
    ["SCI", "Infinitas soluciones: rectas coincidentes."],
    ["SI", "Ninguna solución: rectas paralelas."],
    ["Equilibrio de mercado", "Qdemanda(p) = Qoferta(p)"],
    ["Exceso de oferta", "Precio por encima del de equilibrio."],
    ["Transformaciones de Gauss", "Intercambiar, multiplicar por k ≠ 0, sumar múltiplos de otra."],
    ["Fila (0 0 0 | 0)", "Ecuación sobrante: puede ser SCI."],
    ["Fila (0 0 0 | k), k ≠ 0", "Sistema incompatible."],
    ["Sistema no lineal", "Sustituir y comprobar las soluciones."],
    ["Inecuación ax + by ≤ c", "Semiplano; punto de prueba (0, 0)."],
    ["Región factible", "Intersección de todos los semiplanos."],
    ["Programación lineal", "El óptimo está en un vértice de la región."],
  ],
  familias: ["Buscad en el supermercado dos productos cuyo precio haya cambiado y comentad si fue por oferta o por demanda.", "Planteadle a un familiar un problema de «edades» o de «monedas» con dos incógnitas y resolvedlo juntos.", "Con el presupuesto semanal de ocio, dibujad la recta de balance entre dos actividades que os gusten.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  saberes: "Sentido algebraico: sistemas de ecuaciones lineales con dos y tres incógnitas, método de Gauss y discusión; sistemas no lineales sencillos; inecuaciones y sistemas de inecuaciones con dos incógnitas e introducción a la programación lineal; modelización de problemas económicos como el equilibrio de mercado (RD 243/2022, Matemáticas Aplicadas a las Ciencias Sociales I, saberes básicos D. Sentido algebraico: modelo matemático y sistemas; Decret 171/2022, Matemàtiques aplicades a les ciències socials I, sentit algebraic).",
  ideas: ["Simulación de un mercado en clase con compradores y vendedores para encontrar el equilibrio.", "GeoGebra para dibujar regiones factibles y rectas de nivel.", "Hoja de cálculo para resolver sistemas 3 × 3 (Solver).", "Problemas de mezclas y repartos con datos de cooperativas locales."],
  fuentes: [wiki("Eliminación de Gauss-Jordan", "Eliminación de Gauss-Jordan"), wiki("Equilibrio de mercado", "Equilibrio económico"), wiki("Programación lineal", "Programación lineal")],
});
