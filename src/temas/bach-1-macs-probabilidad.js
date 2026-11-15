// Matemáticas Aplicadas a las Ciencias Sociales I · Tema 11. Nivel libro. Dibujos propios en SVG.
const { tema, ficha, tabla, G, columnas, compara, arbol, lienzo, t, n2, wiki } = require("./_bach1-macs");

// Frecuencia relativa de «cara» en 200 lanzamientos simulados (generador fijo, siempre la misma serie).
function frecuencias() {
  let s = 12345, c = 0;
  const pts = [];
  for (let n = 1; n <= 200; n++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    if (s / 2147483648 < 0.5) c++;
    pts.push([n, c / n]);
  }
  return pts;
}

// Diagrama de Venn de dos sucesos dentro del espacio muestral.
const venn = (aria) => lienzo(aria, `<rect x="14" y="14" width="232" height="152" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
  <circle cx="104" cy="92" r="54" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/>
  <circle cx="160" cy="92" r="54" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2"/>
  ${t(28, 34, "E", { s: 14, b: 1, a: "start" })}${t(78, 96, "A", { s: 15, b: 1, c: "var(--pen)" })}${t(188, 96, "B", { s: 15, b: 1, c: "var(--red)" })}
  ${t(132, 88, "A ∩ B", { s: 11, b: 1 })}${t(132, 102, "0,06", { s: 10, c: "var(--muted)" })}${t(78, 112, "0,24", { s: 10, c: "var(--muted)" })}${t(188, 112, "0,04", { s: 10, c: "var(--muted)" })}${t(222, 158, "0,66", { s: 10, c: "var(--muted)", a: "end" })}`);

module.exports = tema({
  n: 11,
  titulo: "Probabilidad",
  minutos: 115,
  objetivos: [
    "Describir experimentos aleatorios, su espacio muestral y las operaciones con sucesos",
    "Relacionar la frecuencia relativa con la probabilidad mediante la ley de los grandes números",
    "Calcular probabilidades con la regla de Laplace, las propiedades de la probabilidad y tablas de contingencia",
    "Calcular probabilidades condicionadas y decidir si dos sucesos son independientes",
    "Resolver experimentos compuestos con diagramas de árbol y el teorema de la probabilidad total",
    "Aplicar el teorema de Bayes a decisiones en seguros, banca, salud y control del fraude",
  ],
  claves: ["experimento aleatorio", "espacio muestral", "suceso", "regla de Laplace", "frecuencia relativa", "probabilidad condicionada", "sucesos independientes", "diagrama de árbol", "probabilidad total", "teorema de Bayes"],
  lectura: {
    titulo: "El negocio de la incertidumbre",
    html: `<p>En 1688, en la cafetería de Edward Lloyd, en Londres, se reunían comerciantes y armadores para asegurar barcos. Cada inversor aceptaba cubrir una parte del riesgo de un viaje a cambio de una prima. Nadie sabía qué barco se hundiría, pero, con muchos barcos, la proporción de naufragios era bastante estable. De esas reuniones nació Lloyd's, el mercado de seguros más famoso del mundo.</p>
    <p>Las compañías de seguros, los bancos y los gobiernos trabajan con sucesos <b>aleatorios</b>: no se puede predecir si un conductor concreto tendrá un accidente, si un cliente devolverá su préstamo o si una declaración de la renta es fraudulenta. Pero la <b>probabilidad</b> permite cuantificar esa incertidumbre y tomar decisiones razonables: fijar primas, conceder créditos, decidir qué declaraciones inspeccionar.</p>
    <p>En este tema aprenderás el lenguaje de los sucesos, la regla de Laplace, las probabilidades condicionadas y dos herramientas potentes: el teorema de la probabilidad total y el teorema de Bayes, que permite actualizar una probabilidad cuando se obtiene nueva información. Verás también por qué una alarma de fraude o un test médico positivo no significan tanto como parece.</p>`,
  },
  pregunta: {
    texto: "Un sistema detecta el 90 % de las declaraciones fraudulentas y solo marca por error el 5 % de las correctas. Si una declaración queda marcada, ¿es probable que sea fraudulenta?",
    respuesta: "Depende de cuántas sean fraudulentas. Si lo son el 2 %, de 10.000 declaraciones habrá 180 fraudes marcados y 490 correctas marcadas: solo <mark>180/670 ≈ 27 %</mark> de las marcadas son fraude. Es el teorema de Bayes.",
  },
  bloques: [
    {
      h: "Experimentos aleatorios y sucesos",
      html: `<p>Un <b>experimento aleatorio</b> es aquel cuyo resultado no se puede predecir, aunque se repita en las mismas condiciones: lanzar un dado, elegir al azar a una persona para una encuesta, observar si un cliente devuelve un préstamo. En cambio, un experimento <b>determinista</b> da siempre el mismo resultado, como calcular el interés de un depósito a tipo fijo.</p><p>El <b>espacio muestral</b> E es el conjunto de todos los resultados posibles. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}; al preguntar a un votante por su intención de voto, E está formado por los partidos más «abstención» y «no sabe».</p><p>Un <b>suceso</b> es cualquier subconjunto del espacio muestral. Se dice que ocurre si el resultado del experimento pertenece a él. Hay varios tipos:</p><ul><li><b>Suceso elemental</b>: formado por un solo resultado, como «sale 4».</li><li><b>Suceso compuesto</b>: formado por varios, como «sale par» = {2, 4, 6}.</li><li><b>Suceso seguro</b>: el propio E, que siempre ocurre.</li><li><b>Suceso imposible</b>: ∅, que nunca ocurre, como «sale 7».</li></ul><p>Elegir bien el espacio muestral es el primer paso para resolver cualquier problema. Al lanzar dos monedas, E = {CC, CX, XC, XX}, con cuatro resultados; si solo se anota el número de caras, E = {0, 1, 2}, pero esos tres resultados no son igual de probables, como comprobarás más adelante.</p>`,
      svg: lienzo("Espacio muestral del lanzamiento de un dado con el suceso sale par destacado", `<rect x="14" y="30" width="232" height="96" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>${t(24, 22, "E = espacio muestral", { s: 12, b: 1, a: "start" })}${[1, 2, 3, 4, 5, 6].map((k, i) => `<rect x="${24 + i * 37}" y="58" width="30" height="30" rx="6" fill="${k % 2 ? "var(--card)" : "var(--leaf)"}" fill-opacity="${k % 2 ? 1 : 0.3}" stroke="${k % 2 ? "var(--line)" : "var(--leaf)"}" stroke-width="2"/>${t(39 + i * 37, 78, String(k), { s: 14, b: 1 })}`).join("")}${t(130, 114, "A = «sale par» = {2, 4, 6}", { s: 11, b: 1, c: "var(--leaf)" })}${t(130, 152, "suceso seguro: E · imposible: ∅", { s: 11, c: "var(--muted)" })}`),
    },
    {
      h: "Operaciones con sucesos",
      html: `<p>A partir de dos sucesos A y B se construyen otros:</p><ul><li><b>Unión</b> A ∪ B: ocurre A <b>o</b> B (o ambos).</li><li><b>Intersección</b> A ∩ B: ocurren A <b>y</b> B a la vez.</li><li><b>Contrario</b> Ā: ocurre cuando no ocurre A. Por ejemplo, el contrario de «sale par» es «sale impar».</li><li><b>Diferencia</b> A − B = A ∩ B̄: ocurre A pero no B.</li></ul><p>Dos sucesos son <b>incompatibles</b> si no pueden ocurrir a la vez: A ∩ B = ∅. «Sale 1» y «sale par» son incompatibles; «sale par» y «sale mayor que 3» no lo son, porque comparten el 4 y el 6.</p><p>Las operaciones se visualizan con <b>diagramas de Venn</b>, en los que el rectángulo es el espacio muestral y cada suceso, una región.</p><p>Las <b>leyes de De Morgan</b> son muy útiles para traducir enunciados:</p><div class="formula"><span>(A ∪ B)‾ = Ā ∩ B̄       (A ∩ B)‾ = Ā ∪ B̄</span></div><p>Por ejemplo, si A es «el cliente tiene contrato temporal» y B, «el cliente es moroso», el suceso «ni temporal ni moroso» es Ā ∩ B̄, el contrario de A ∪ B. Expresiones como «al menos uno», «ninguno», «solo uno» o «ambos» aparecen constantemente en los problemas; conviene traducirlas siempre al lenguaje de sucesos antes de calcular.</p>`,
      svg: venn("Diagrama de Venn de dos sucesos A y B con su intersección y las probabilidades de cada región: 0,24 solo A, 0,06 ambos, 0,04 solo B y 0,66 ninguno"),
    },
    {
      h: "Frecuencia relativa y ley de los grandes números",
      html: `<p>Si un experimento se repite N veces y el suceso A ocurre n<sub>A</sub> veces, su <b>frecuencia relativa</b> es f(A) = n<sub>A</sub>/N. Con pocas repeticiones, la frecuencia oscila mucho; al aumentar N, se estabiliza alrededor de un valor fijo.</p><p>Esta regularidad empírica es la <b>ley de los grandes números</b>: cuando el número de repeticiones crece, la frecuencia relativa de un suceso tiende a acercarse a un número, que es su <b>probabilidad</b>. La gráfica muestra 200 lanzamientos simulados de una moneda: al principio la proporción de caras salta de un lado a otro, pero termina cerca de 0,5.</p><p>Esta ley justifica la <b>probabilidad frecuencial</b> o empírica, la que se usa cuando no hay simetría que permita calcularla de antemano:</p><ul><li>Una aseguradora estima la probabilidad de que un conductor de 18 a 25 años tenga un accidente en un año a partir de los datos de millones de pólizas.</li><li>El INE calcula las probabilidades de fallecer a cada edad, base de las tablas de mortalidad que usan los planes de pensiones.</li><li>Un banco estima la probabilidad de impago de cada tipo de cliente con su historial de préstamos.</li></ul><p>La ley no dice que los resultados «se compensen» a corto plazo. Si en una ruleta han salido diez rojos seguidos, la probabilidad de rojo en la siguiente tirada es la misma de siempre: creer lo contrario es la <b>falacia del jugador</b>.</p>`,
      svg: G("Frecuencia relativa de cara en 200 lanzamientos simulados de una moneda: oscila al principio y se estabiliza cerca de 0,5", { x0: -12, x1: 205, y0: -0.06, y1: 1.05, paso: 50, pasoY: 0.25, etiquetas: true, pasoEt: 50, pasoEtY: 0.5 }, (E) => `${E.curva(() => 0.5, "var(--red)", 0, 205, 1.6, 'stroke-dasharray="5 4"')}<path d="M${frecuencias().map(([n, f]) => `${n2(E.X(n))} ${n2(E.Y(f))}`).join(" L ")}" fill="none" stroke="var(--pen)" stroke-width="2"/>${t(E.X(200), E.Y(0.62), "p = 0,5", { s: 11, b: 1, c: "var(--red)", a: "end" })}${t(E.X(200), E.Y(0.92), "f(cara) = n/N", { s: 10, b: 1, c: "var(--pen)", a: "end" })}`),
    },
    {
      h: "Definición de probabilidad y propiedades",
      html: `<p>En 1933, el matemático ruso Andréi Kolmogórov definió la probabilidad mediante tres <b>axiomas</b>, que recogen las propiedades de las frecuencias relativas. Una probabilidad es una función que asigna a cada suceso A un número P(A) tal que:</p><ul><li>0 ≤ P(A) ≤ 1.</li><li>P(E) = 1.</li><li>Si A y B son incompatibles, P(A ∪ B) = P(A) + P(B).</li></ul><p>De los axiomas se deducen las propiedades que más se usan:</p><ul><li><b>Suceso contrario</b>: P(Ā) = 1 − P(A). Muy útil con «al menos uno»: P(al menos un impago) = 1 − P(ningún impago).</li><li>P(∅) = 0.</li><li><b>Unión de dos sucesos cualesquiera</b>: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Se resta la intersección porque, al sumar, se ha contado dos veces.</li><li>Si A ⊂ B, entonces P(A) ≤ P(B).</li></ul><p>Ejemplo: en un banco, el 30 % de los clientes tiene contrato temporal (A), el 10 % es moroso (B) y el 6 % cumple las dos cosas. Entonces P(A ∪ B) = 0,30 + 0,10 − 0,06 = 0,34: el 34 % es temporal o moroso, y P(Ā ∩ B̄) = 1 − 0,34 = 0,66 no cumple ninguna de las dos. Son las cifras del diagrama de Venn anterior.</p>`,
      svg: ficha("Propiedades de la probabilidad: valores entre 0 y 1, suceso contrario, unión de dos sucesos e incompatibles", "Propiedades", ["0 ≤ P(A) ≤ 1", "P(Ā) = 1 − P(A)", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "Incompatibles: P(A ∩ B) = 0", ["0,30 + 0,10 − 0,06 = 0,34", "var(--red)"]]),
    },
    {
      h: "La regla de Laplace",
      html: `<p>Si un experimento tiene un número finito de resultados y todos son <b>equiprobables</b> (igual de probables), la probabilidad de un suceso es:</p><div class="formula"><span>P(A) = casos favorables / casos posibles</span></div><p>Pierre-Simon Laplace la formuló en 1812. Se aplica a dados, monedas y barajas, pero también a cualquier <b>selección al azar</b>: si en un instituto de 800 alumnos hay 320 que usan bicicleta y se elige uno por sorteo, P(usa bicicleta) = 320/800 = 0,4. Es la base de los <b>muestreos aleatorios</b> de las encuestas.</p><p>Con dos dados, el espacio muestral tiene 6 · 6 = 36 resultados equiprobables. La suma 7 aparece en 6 de ellos, así que P(suma 7) = 6/36 = 1/6, mientras que la suma 2 solo aparece en uno: P(suma 2) = 1/36. Las sumas no son equiprobables, aunque los resultados de cada dado sí lo sean.</p><p>Para contar casos se usa a menudo la combinatoria. En la Lotería Primitiva hay que acertar 6 números de 49. El número de combinaciones posibles es C(49, 6) = 13.983.816, así que la probabilidad de acertar con una apuesta es 1/13.983.816 ≈ 0,00000007.</p><p>La regla de Laplace solo vale si los resultados son equiprobables. Decir que la probabilidad de aprobar un examen es 1/2 «porque se aprueba o se suspende» es un error clásico.</p>`,
      svg: tabla("Tabla de las 36 sumas posibles al lanzar dos dados, con las seis sumas iguales a 7 destacadas", [["+", "1", "2", "3", "4", "5", "6"], ["1", "2", "3", "4", "5", "6", "7"], ["2", "3", "4", "5", "6", "7", "8"], ["3", "4", "5", "6", "7", "8", "9"], ["4", "5", "6", "7", "8", "9", "10"], ["5", "6", "7", "8", "9", "10", "11"], ["6", "7", "8", "9", "10", "11", "12"]], { titulo: "Suma de dos dados: P(7) = 6/36", marca: [[1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1]] }),
    },
    {
      h: "Probabilidad con tablas de contingencia",
      html: `<p>En ciencias sociales es muy frecuente que los datos lleguen en una <b>tabla de contingencia</b>, como las del tema anterior. Si se elige un individuo al azar, las probabilidades se obtienen dividiendo entre el total.</p><p>Un banco clasifica a sus 1.000 clientes con préstamo según el tipo de contrato y si han dejado de pagar (morosos):</p><ul><li>Temporales: 60 morosos y 240 no morosos (300).</li><li>Indefinidos: 40 morosos y 660 no morosos (700).</li></ul><p>Elegido un cliente al azar, con T = «temporal» y M = «moroso»:</p><ul><li>P(M) = 100/1.000 = 0,10 (total marginal).</li><li>P(T) = 300/1.000 = 0,30.</li><li>P(T ∩ M) = 60/1.000 = 0,06 (casilla interior).</li><li>P(T ∪ M) = (300 + 100 − 60)/1.000 = 0,34.</li></ul><p>Las casillas interiores dan probabilidades de intersecciones; los totales de los márgenes, probabilidades de un solo suceso. Una tabla de probabilidades se construye igual pero con números que suman 1 en lugar de 1.000.</p><p>Cuando un enunciado da porcentajes mezclados («el 30 % son temporales; de ellos, el 20 % son morosos»), suele ser útil construir la tabla con un total cómodo, como 1.000 o 10.000 individuos, rellenar las casillas y calcular después. Las tablas permiten comprobar que todo cuadra: las filas y las columnas deben sumar los totales.</p>`,
      svg: tabla("Tabla de contingencia de 1.000 clientes de un banco según el contrato, temporal o indefinido, y si son morosos", [["", "Moroso", "No moroso", "Total"], ["Temporal", "60", "240", "300"], ["Indefinido", "40", "660", "700"], ["Total", "100", "900", "1.000"]], { titulo: "Clientes con préstamo", marca: [[1, 1]] }),
    },
    {
      h: "Probabilidad condicionada",
      html: `<p>A menudo interesa la probabilidad de un suceso <b>sabiendo</b> que ha ocurrido otro. Es la <b>probabilidad condicionada</b>:</p><div class="formula"><span>P(A | B) = P(A ∩ B) / P(B),  con P(B) &gt; 0</span></div><p>Saber que ha ocurrido B reduce el espacio muestral a B, y dentro de él se mira qué parte corresponde también a A. En una tabla, basta con dividir la casilla entre el total de la fila o columna de la condición.</p><p>En el banco:</p><ul><li>P(M | T) = 60/300 = 0,20: el 20 % de los temporales son morosos.</li><li>P(M | T̄) = 40/700 ≈ 0,057: entre los indefinidos, menos del 6 %.</li><li>P(T | M) = 60/100 = 0,60: el 60 % de los morosos son temporales.</li></ul><p>Fíjate en que P(M | T) y P(T | M) son <b>distintas</b>. Confundirlas es un error muy común, la llamada <b>falacia del fiscal</b>: no es lo mismo «la mayoría de los morosos son temporales» que «la mayoría de los temporales son morosos», que es falso (solo lo es el 20 %).</p><p>De la definición se obtiene la <b>regla del producto</b>, que sirve para calcular intersecciones:</p><div class="formula"><span>P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)</span></div><p>Por ejemplo, P(T ∩ M) = P(T) · P(M | T) = 0,3 · 0,2 = 0,06.</p>`,
      svg: columnas("Probabilidad de ser moroso según el contrato: 20 por ciento de los temporales, 5,7 por ciento de los indefinidos y 10 por ciento en total", [["P(M | T)", 20, "var(--red)"], ["P(M | T̄)", 5.7, "var(--pen)"], ["P(M)", 10, "var(--muted)"]], { titulo: "Morosidad condicionada (%)", unidad: " %", max: 24 }),
    },
    {
      h: "Experimentos compuestos y diagramas de árbol",
      html: `<p>Un <b>experimento compuesto</b> está formado por varias etapas: extraer dos personas de un grupo, lanzar una moneda y luego un dado, observar el comportamiento de un cliente durante dos años. Se representa con un <b>diagrama de árbol</b>, en el que cada rama lleva su probabilidad.</p><p>Las reglas para usar el árbol son:</p><ul><li>Las ramas que salen de un mismo nudo suman 1.</li><li>La probabilidad de un camino es el <b>producto</b> de las probabilidades de sus ramas (regla del producto).</li><li>La probabilidad de un suceso formado por varios caminos es la <b>suma</b> de las probabilidades de esos caminos.</li></ul><p>Ejemplo: de un grupo de 5 mujeres y 3 hombres se eligen al azar dos personas para una comisión. La primera elección es mujer con probabilidad 5/8; si lo ha sido, quedan 4 mujeres de 7, así que la segunda es mujer con probabilidad 4/7. Es una extracción <b>sin reemplazamiento</b>: las probabilidades de la segunda etapa dependen de la primera.</p><ul><li>P(dos mujeres) = 5/8 · 4/7 = 20/56 ≈ 0,357.</li><li>P(dos hombres) = 3/8 · 2/7 = 6/56 ≈ 0,107.</li><li>P(una de cada) = 5/8 · 3/7 + 3/8 · 5/7 = 30/56 ≈ 0,536.</li></ul><p>Las tres probabilidades suman 1, como debe ser. Si la extracción fuera con reemplazamiento, las ramas de la segunda etapa serían iguales a las de la primera.</p>`,
      svg: arbol("Diagrama de árbol de la elección de dos personas de un grupo de 5 mujeres y 3 hombres sin reemplazamiento", [["M", "5/8", [["M", "4/7", "20/56"], ["H", "3/7", "15/56"]]], ["H", "3/8", [["M", "5/7", "15/56"], ["H", "2/7", "6/56"]]]]),
    },
    {
      h: "Sucesos independientes",
      html: `<p>Dos sucesos son <b>independientes</b> si saber que ha ocurrido uno no cambia la probabilidad del otro: P(A | B) = P(A). De forma equivalente:</p><div class="formula"><span>A y B independientes ⟺ P(A ∩ B) = P(A) · P(B)</span></div><p>En el banco, P(M | T) = 0,20 ≠ P(M) = 0,10, así que ser temporal y ser moroso son sucesos <b>dependientes</b>. Saber el tipo de contrato aporta información sobre el riesgo, y por eso los bancos lo preguntan.</p><p>En cambio, los resultados de dos lanzamientos de un dado, o las respuestas de dos personas elegidas al azar en una población muy grande, son independientes. Para varios sucesos independientes, la probabilidad de que ocurran todos es el producto. Si cada cliente que entra en una tienda compra con probabilidad 0,2, independientemente de los demás, la probabilidad de que al menos uno de tres clientes compre es 1 − 0,8³ = 1 − 0,512 = 0,488.</p><p>No hay que confundir independientes con <b>incompatibles</b>. Si A y B son incompatibles y tienen probabilidad positiva, P(A ∩ B) = 0 ≠ P(A) · P(B): son dependientes, porque si ocurre uno, el otro seguro que no ocurre.</p><p>Suponer independencia cuando no la hay puede ser muy grave. En la crisis financiera de 2008, muchos modelos trataban los impagos de hipotecas como independientes; pero, cuando cayó el precio de la vivienda, los impagos llegaron todos a la vez.</p>`,
      svg: compara("Diferencia entre sucesos independientes, en los que la probabilidad de la intersección es el producto, y sucesos incompatibles, que no pueden ocurrir a la vez", ["Independientes", "var(--leaf)", ["P(A | B) = P(A)", "P(A∩B) = P(A)·P(B)", "uno no informa", "del otro"]], ["Incompatibles", "var(--red)", ["A ∩ B = ∅", "P(A ∩ B) = 0", "si ocurre uno,", "el otro no"]], "No es lo mismo"),
    },
    {
      h: "Teorema de la probabilidad total",
      html: `<p>A veces un suceso puede ocurrir por varias vías. Si los sucesos A₁, A₂, …, Aₙ forman un <b>sistema completo</b> (son incompatibles dos a dos y su unión es E), la probabilidad de cualquier suceso B es la suma de las probabilidades de llegar a él por cada vía:</p><div class="formula"><span>P(B) = P(A₁) · P(B | A₁) + P(A₂) · P(B | A₂) + … + P(Aₙ) · P(B | Aₙ)</span></div><p>En el árbol, equivale a sumar todos los caminos que terminan en B. (En el dibujo, R₁, R₂ y R₃ son los grupos de riesgo bajo, medio y alto, y S, el siniestro.)</p><p>Ejemplo: una aseguradora clasifica a sus clientes en tres grupos de riesgo: bajo (50 %), medio (30 %) y alto (20 %). La probabilidad de tener un siniestro en un año es 0,05, 0,15 y 0,30, respectivamente. La probabilidad de que un cliente elegido al azar tenga un siniestro es:</p><div class="formula"><span>P(S) = 0,5 · 0,05 + 0,3 · 0,15 + 0,2 · 0,30 = 0,025 + 0,045 + 0,06 = 0,13</span></div><p>Es decir, el 13 % de los clientes tendrá un siniestro. Con ese dato, y el coste medio de cada siniestro, la compañía calcula la prima mínima que debe cobrar para no perder dinero.</p><p>El teorema es una media ponderada de las probabilidades condicionadas, con pesos P(Aᵢ). Por eso el resultado siempre queda entre la menor y la mayor de ellas: aquí, entre 0,05 y 0,30.</p>`,
      svg: arbol("Diagrama de árbol de una aseguradora con clientes de riesgo bajo (R₁), medio (R₂) y alto (R₃) y la probabilidad de siniestro en cada grupo", [["R₁", "0,5", [["S", "0,05", "0,025"], ["S̄", "", ""]]], ["R₂", "0,3", [["S", "0,15", "0,045"], ["S̄", "", ""]]], ["R₃", "0,2", [["S", "0,30", "0,060"], ["S̄", "", ""]]]]),
      video: { id: "cK-aPU-vRM8", titulo: "Probabilidad total con diagrama de árbol", canal: "unicoos", vistas: 727337, busqueda: "probabilidad total diagrama de árbol" },
    },
    {
      h: "Teorema de Bayes",
      html: `<p>El teorema de la probabilidad total va «hacia delante»: de las causas a los efectos. El <b>teorema de Bayes</b> va «hacia atrás»: sabiendo que ha ocurrido un efecto B, calcula la probabilidad de cada causa:</p><div class="formula"><span>P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ) / P(B)</span></div><p>El numerador es la probabilidad del camino que pasa por Aᵢ y llega a B; el denominador, la suma de todos los caminos que llegan a B (la probabilidad total).</p><p>En la aseguradora, si un cliente ha tenido un siniestro, ¿qué probabilidad hay de que sea de riesgo alto?</p><div class="formula"><span>P(Alto | S) = 0,06 / 0,13 ≈ 0,46</span></div><p>Análogamente, P(Medio | S) = 0,045/0,13 ≈ 0,35 y P(Bajo | S) = 0,025/0,13 ≈ 0,19. Las tres suman 1.</p><p>El teorema permite <b>actualizar</b> una probabilidad con nueva información. Antes de saber nada, la probabilidad de que el cliente fuera de riesgo alto era 0,20 (probabilidad <b>a priori</b>); después de saber que ha tenido un siniestro, sube a 0,46 (probabilidad <b>a posteriori</b>). Las aseguradoras hacen exactamente esto cuando suben la prima a quien ha tenido un accidente.</p><p>Thomas Bayes, un clérigo inglés, lo planteó hacia 1760, y su trabajo se publicó tras su muerte. Hoy el razonamiento bayesiano está en los filtros de correo basura, en los sistemas de recomendación y en la inteligencia artificial.</p>`,
      svg: columnas("Probabilidades a priori y a posteriori del grupo de riesgo alto antes y después de saber que el cliente tuvo un siniestro: de 20 a 46 por ciento", [["Bajo", 19, "var(--leaf)"], ["Medio", 35, "var(--sun)"], ["Alto", 46, "var(--red)"], ["Alto (antes)", 20, "var(--muted)"]], { titulo: "P(grupo | siniestro) (%)", unidad: " %", max: 52 }),
      video: { id: "Fi6G48j0IZ4", titulo: "Cómo entender el teorema de Bayes en minutos", canal: "Academia Internet", vistas: 1005310, busqueda: "teorema de Bayes explicación" },
    },
    {
      h: "Falsos positivos y decisiones",
      html: `<p>El teorema de Bayes explica un fenómeno que sorprende a casi todo el mundo. Hacienda usa un sistema para detectar declaraciones fraudulentas. El sistema marca el 90 % de las fraudulentas (su <b>sensibilidad</b>) y solo el 5 % de las correctas (<b>falsos positivos</b>). Si el 2 % de las declaraciones son fraudulentas, ¿qué parte de las marcadas son realmente fraude?</p><p>La forma más clara de resolverlo es con <b>frecuencias naturales</b>: imaginar 10.000 declaraciones.</p><ul><li>200 son fraudulentas; el sistema marca 180.</li><li>9.800 son correctas; el sistema marca el 5 %: 490.</li><li>Se marcan 180 + 490 = 670 declaraciones, de las que solo 180 son fraude.</li></ul><div class="formula"><span>P(Fraude | marcada) = 180 / 670 ≈ 0,27</span></div><p>Solo el 27 % de las marcadas son fraudulentas, aunque el sistema «acierte» el 90 %. La razón es que hay muchísimas más declaraciones correctas, y un 5 % de un número grande supera al 90 % de uno pequeño. Cuanto más raro es el suceso que se busca, más falsos positivos hay en proporción.</p><p>Lo mismo ocurre con las pruebas médicas de cribado, los detectores de fraude con tarjeta o los sistemas de reconocimiento facial. Por eso un resultado positivo no se toma como definitivo: se confirma con una segunda prueba más precisa. Entender esto evita decisiones injustas y alarmas innecesarias.</p>`,
      svg: tabla("Frecuencias naturales de 10.000 declaraciones: 180 fraudulentas y 490 correctas quedan marcadas, de modo que solo el 27 por ciento de las marcadas son fraude", [["10.000", "Marcada", "No marcada", "Total"], ["Fraude", "180", "20", "200"], ["Correcta", "490", "9.310", "9.800"], ["Total", "670", "9.330", "10.000"]], { titulo: "P(fraude | marcada) = 180/670 ≈ 27 %", cab: "var(--red)", marca: [[1, 1], [3, 1]] }),
    },
  ],
  ejemplos: [
    ["En una ciudad, el 40 % de los hogares tiene coche eléctrico o híbrido (A), el 25 % tiene placas solares (B) y el 10 % tiene ambas cosas. Halla P(A ∪ B) y la probabilidad de no tener ninguna.", ["P(A ∪ B) = 0,40 + 0,25 − 0,10 = 0,55.", "Ninguna: P(Ā ∩ B̄) = 1 − P(A ∪ B)."], "P(A ∪ B) = 0,55; ninguna: 0,45."],
    ["En la tabla del banco (1.000 clientes), calcula la probabilidad de que un cliente indefinido sea moroso y la de que un moroso sea indefinido.", ["P(M | T̄) = 40/700.", "P(T̄ | M) = 40/100."], "≈ 0,057 y 0,40."],
    ["600 personas: de 240 jóvenes, 120 votarán; de 360 mayores, 270. ¿Son independientes «ser joven» y «votar»?", ["P(V) = 390/600 = 0,65.", "P(V | J) = 120/240 = 0,5 ≠ 0,65."], "Son dependientes: los jóvenes votan menos."],
    ["En una urna hay 4 papeletas rojas y 6 azules. Se sacan dos sin reemplazamiento. Halla la probabilidad de que sean del mismo color.", ["Rojas: 4/10 · 3/9 = 12/90.", "Azules: 6/10 · 5/9 = 30/90.", "Suma de caminos: 42/90."], "P = 7/15 ≈ 0,467."],
    ["Un banco concede préstamos en tres sucursales: el 40 %, el 35 % y el 25 % del total. La morosidad es del 3 %, el 5 % y el 8 %. Halla la morosidad global y la probabilidad de que un préstamo impagado sea de la tercera sucursal.", ["P(M) = 0,4 · 0,03 + 0,35 · 0,05 + 0,25 · 0,08 = 0,012 + 0,0175 + 0,02 = 0,0495.", "Bayes: P(S₃ | M) = 0,02/0,0495."], "P(M) ≈ 4,95 %; P(S₃ | M) ≈ 0,404."],
    ["Una prueba detecta una enfermedad con sensibilidad 0,95 y da un 10 % de falsos positivos. Si la padece el 1 % de la población, ¿qué probabilidad hay de estar enfermo con un positivo?", ["P(+) = 0,01 · 0,95 + 0,99 · 0,10 = 0,0095 + 0,099 = 0,1085.", "P(E | +) = 0,0095/0,1085."], "≈ 0,088: menos del 9 %; hay que confirmar con otra prueba."],
  ],
  errores: [
    "Aplicar la regla de Laplace a resultados que no son equiprobables.",
    "Sumar P(A) + P(B) para la unión sin restar la intersección cuando los sucesos son compatibles.",
    "Confundir P(A | B) con P(B | A) (falacia del fiscal).",
    "Confundir sucesos independientes con sucesos incompatibles.",
    "Olvidar que en las extracciones sin reemplazamiento cambian las probabilidades de la segunda etapa.",
    "Creer que, tras una racha, el resultado contrario es más probable (falacia del jugador).",
  ],
  ejercicios: {
    b: [
      ["Escribe el espacio muestral de lanzar dos monedas y la probabilidad de obtener exactamente una cara.", "E = {CC, CX, XC, XX}. Una cara: {CX, XC} → 2/4 = 0,5."],
      ["Si la probabilidad de que un cliente renueve su seguro es 0,85, ¿cuál es la de que no lo renueve?", "1 − 0,85 = 0,15."],
      ["Si P(A) = 0,4, P(B) = 0,5 y P(A ∩ B) = 0,2, calcula P(A ∪ B).", "0,4 + 0,5 − 0,2 = 0,7."],
      ["En un sorteo hay 40 papeletas y 12 tienen premio. ¿Qué probabilidad hay de ganar con una papeleta?", "12/40 = 0,3."],
      ["En la tabla del banco, ¿qué probabilidad hay de que un cliente elegido al azar tenga contrato temporal?", "300/1.000 = 0,3."],
      ["En la misma tabla, calcula P(M | T).", "60/300 = 0,2."],
      ["A y B son independientes con P(A) = 0,5 y P(B) = 0,4. Calcula P(A ∩ B).", "0,5 · 0,4 = 0,2."],
      ["A y B son incompatibles con P(A) = 0,25 y P(B) = 0,35. Calcula P(A ∪ B).", "0,25 + 0,35 = 0,6."],
      ["Se lanzan dos dados. Calcula la probabilidad de que la suma sea mayor o igual que 10.", "Casos: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) → 6/36 = 1/6."],
      ["Si P(A ∩ B) = 0,12 y P(B) = 0,4, calcula P(A | B).", "0,12/0,4 = 0,3."],
    ],
    m: [
      ["Se elige al azar una comisión de dos personas entre 5 mujeres y 3 hombres. Calcula la probabilidad de que haya al menos un hombre.", "1 − P(dos mujeres) = 1 − 20/56 = 36/56 = 9/14 ≈ 0,643."],
      ["En la encuesta de 600 personas (240 jóvenes, 120 de ellos votan; 360 mayores, 270 votan), calcula P(joven | vota).", "120/390 ≈ 0,308."],
      ["Si P(A) = 0,6, P(B) = 0,5 y P(A ∪ B) = 0,8, ¿son A y B independientes?", "P(A ∩ B) = 0,6 + 0,5 − 0,8 = 0,3 = 0,6 · 0,5. Sí, son independientes."],
      ["Cada cliente que entra en una tienda compra con probabilidad 0,2, de forma independiente. ¿Qué probabilidad hay de que, de 3 clientes, al menos uno compre? ¿Y de que compren los tres?", "Al menos uno: 1 − 0,8³ = 0,488. Los tres: 0,2³ = 0,008."],
      ["Calcula la probabilidad de acertar la Primitiva (6 de 49) con una apuesta.", "1/C(49, 6) = 1/13.983.816 ≈ 7,2 · 10⁻⁸."],
      ["A y B son independientes con P(A) = 0,3 y P(B) = 0,4. Calcula la probabilidad de que no ocurra ninguno.", "P(Ā ∩ B̄) = 0,7 · 0,6 = 0,42."],
      ["Una tienda vende el 60 % en línea y el 40 % en local. El 90 % de los clientes en línea y el 75 % de los de local quedan satisfechos. Halla la probabilidad de que un cliente quede satisfecho.", "0,6 · 0,9 + 0,4 · 0,75 = 0,54 + 0,30 = 0,84."],
      ["En la tienda anterior, si un cliente no ha quedado satisfecho, ¿qué probabilidad hay de que comprara en línea?", "P(no S) = 0,16. P(línea ∩ no S) = 0,6 · 0,1 = 0,06. Bayes: 0,06/0,16 = 0,375."],
      ["Con P(A) = 0,2, P(B) = 0,5 y P(A ∩ B) = 0,1, calcula P(A | B) y P(B | A). ¿Son independientes?", "P(A | B) = 0,2; P(B | A) = 0,5. Sí: P(A | B) = P(A)."],
      ["En la aseguradora (bajo 50 %, medio 30 %, alto 20 %; siniestro 0,05, 0,15, 0,30), ¿qué probabilidad hay de que un cliente sin siniestro sea de riesgo bajo?", "P(S̄) = 0,87; P(Bajo ∩ S̄) = 0,5 · 0,95 = 0,475. P = 0,475/0,87 ≈ 0,546."],
      ["Construye la tabla de contingencia con 1.000 personas: el 30 % fuma; el 40 % de los fumadores y el 10 % de los no fumadores tienen problemas respiratorios. Calcula P(fuma | problemas).", "Fuman 300 (120 con problemas); no fuman 700 (70 con problemas). P = 120/190 ≈ 0,632."],
      ["Una prueba de cribado tiene sensibilidad 0,95 y un 10 % de falsos positivos. Con una prevalencia del 1 %, ¿qué probabilidad hay de no estar enfermo si la prueba da negativo?", "P(−) = 0,01 · 0,05 + 0,99 · 0,9 = 0,0005 + 0,891 = 0,8915. P(sano | −) = 0,891/0,8915 ≈ 0,9994."],
    ],
    a: [
      ["Repite el problema del fraude (sensibilidad 90 %, falsos positivos 5 %) si el 5 % de las declaraciones son fraudulentas. ¿Qué observas?", "P(marcada) = 0,05 · 0,9 + 0,95 · 0,05 = 0,045 + 0,0475 = 0,0925. P(F | marcada) = 0,045/0,0925 ≈ 0,486. Al aumentar la proporción de fraude, sube mucho la fiabilidad de una alarma."],
      ["Para preguntar algo delicado en una encuesta, cada persona lanza una moneda: si sale cara, responde la verdad; si sale cruz, lanza otra y responde «sí» si sale cara y «no» si sale cruz. Si el 35 % responde «sí», estima la proporción p de la población que realmente diría «sí».", "P(sí) = 0,5p + 0,5 · 0,5 = 0,5p + 0,25 = 0,35 → p = 0,2. Nadie sabe qué ha respondido cada uno, pero se estima el 20 %."],
      ["Demuestra que si A y B son independientes, también lo son Ā y B.", "P(Ā ∩ B) = P(B) − P(A ∩ B) = P(B) − P(A)P(B) = P(B)(1 − P(A)) = P(Ā)P(B)."],
      ["Calcula la probabilidad de que en un grupo de 23 personas al menos dos cumplan años el mismo día (365 días equiprobables).", "1 − (365 · 364 · … · 343)/365²³ ≈ 1 − 0,493 = 0,507. Más del 50 %, aunque parezca sorprendente."],
      ["Una aseguradora tiene un 20 % de conductores jóvenes, con probabilidad de accidente anual 0,25; el resto, 0,10. Halla P(accidente), P(joven | accidente) y P(joven | sin accidente).", "P(A) = 0,05 + 0,08 = 0,13. P(J | A) = 0,05/0,13 ≈ 0,385. P(J | Ā) = 0,15/0,87 ≈ 0,172."],
      ["Cada inspección detecta un defecto con probabilidad 0,8, de forma independiente. ¿Cuántas inspecciones hacen falta para detectarlo con probabilidad al menos 0,999?", "1 − 0,2ⁿ ≥ 0,999 → 0,2ⁿ ≤ 0,001 → n ≥ log 0,001/log 0,2 ≈ 4,29. Hacen falta 5."],
      ["Si P(A) = 0,5, P(B | A) = 0,4 y P(B | Ā) = 0,2, calcula P(B) y P(A | B).", "P(B) = 0,5 · 0,4 + 0,5 · 0,2 = 0,3. P(A | B) = 0,2/0,3 = 2/3."],
      ["Razona por qué dos sucesos incompatibles con probabilidad positiva no pueden ser independientes, y pon un ejemplo social.", "P(A ∩ B) = 0, pero P(A) · P(B) > 0. Ejemplo: «votar al partido X» y «votar al partido Y» en la misma elección: saber que alguien votó X asegura que no votó Y."],
    ],
  },
  quiz: [
    ["Un experimento aleatorio es aquel cuyo resultado…", ["no se puede predecir", "es siempre el mismo", "se calcula con una fórmula", "es imposible"], "Depende del azar."],
    ["El espacio muestral es…", ["el conjunto de resultados posibles", "un suceso imposible", "la probabilidad total", "la frecuencia relativa"], "E."],
    ["A ∩ B ocurre cuando…", ["ocurren A y B a la vez", "ocurre A o B", "no ocurre A", "ocurre A pero no B"], "Intersección."],
    ["Dos sucesos son incompatibles si…", ["A ∩ B = ∅", "P(A ∩ B) = P(A)P(B)", "A ∪ B = E", "P(A) = P(B)"], "No pueden ocurrir a la vez."],
    ["(A ∪ B)‾ es igual a…", ["Ā ∩ B̄", "Ā ∪ B̄", "A ∩ B", "E"], "De Morgan."],
    ["La ley de los grandes números dice que…", ["la frecuencia relativa se estabiliza en la probabilidad", "los resultados se compensan a corto plazo", "todo suceso acaba ocurriendo", "P = 0,5"], "Con muchas repeticiones."],
    ["P(Ā) =", ["1 − P(A)", "P(A)", "1 + P(A)", "P(A)/2"], "Suceso contrario."],
    ["P(A ∪ B) =", ["P(A) + P(B) − P(A ∩ B)", "P(A) + P(B)", "P(A) · P(B)", "P(A) − P(B)"], "Se resta la intersección."],
    ["La regla de Laplace exige que los resultados sean…", ["equiprobables", "incompatibles", "independientes", "infinitos"], "Igual de probables."],
    ["P(suma 7) con dos dados es…", ["1/6", "1/12", "7/36", "1/36"], "6 de 36."],
    ["P(A | B) =", ["P(A ∩ B)/P(B)", "P(A ∩ B)/P(A)", "P(A)P(B)", "P(A) + P(B)"], "Definición."],
    ["En la tabla del banco, P(M | T) = 0,2 y P(T | M) = 0,6. Esto muestra que…", ["P(A | B) y P(B | A) pueden ser distintas", "hay un error", "son independientes", "son incompatibles"], "Falacia del fiscal."],
    ["A y B son independientes si…", ["P(A ∩ B) = P(A) · P(B)", "A ∩ B = ∅", "P(A) + P(B) = 1", "P(A | B) = P(B)"], "Definición."],
    ["En un árbol, la probabilidad de un camino es…", ["el producto de sus ramas", "la suma de sus ramas", "la última rama", "1"], "Regla del producto."],
    ["Las ramas que salen de un mismo nudo…", ["suman 1", "multiplican 1", "son iguales", "suman 0"], "Sistema completo."],
    ["En una extracción sin reemplazamiento, la segunda etapa…", ["depende de la primera", "es independiente", "es imposible", "tiene probabilidad 1"], "Cambia la composición."],
    ["El teorema de la probabilidad total calcula…", ["P(B) sumando todos los caminos que llegan a B", "P(Aᵢ | B)", "P(A ∪ B)", "P(Ā)"], "Hacia delante."],
    ["El teorema de Bayes calcula…", ["la probabilidad de una causa sabiendo el efecto", "la probabilidad total", "el espacio muestral", "la frecuencia"], "Hacia atrás."],
    ["Tras diez rojos seguidos en una ruleta sin trucar, la probabilidad de rojo…", ["es la misma de siempre", "es mayor", "es menor", "es 0"], "Falacia del jugador."],
    ["Si un suceso es muy raro, una prueba con pocos falsos positivos…", ["puede dar muchos positivos falsos en proporción", "nunca se equivoca", "tiene P(E | +) ≈ 1", "no sirve"], "Bayes."],
  ],
  examen: [
    ["Si P(A) = 0,5, P(B) = 0,3 y P(A ∪ B) = 0,7, entonces P(A ∩ B) =", ["0,1", "0,15", "0,2", "0,8"], "0,5 + 0,3 − 0,7."],
    ["Con P(A ∩ B) = 0,1 y P(A) = 0,4, P(B | A) =", ["0,25", "0,04", "0,4", "0,5"], "0,1/0,4."],
    ["Si A y B son independientes con P(A) = 0,6 y P(B) = 0,5, P(A ∪ B) =", ["0,8", "1,1", "0,3", "0,9"], "0,6 + 0,5 − 0,3."],
    ["Se sacan dos bolas sin reemplazamiento de una urna con 3 blancas y 2 negras. P(dos blancas) =", ["0,3", "0,36", "0,6", "0,4"], "3/5 · 2/4."],
    ["El 70 % de una plantilla trabaja presencialmente y el 30 % en remoto; el 10 % y el 20 % se van en un año. P(irse) =", ["0,13", "0,15", "0,3", "0,07"], "0,07 + 0,06."],
    ["En la plantilla anterior, si alguien se ha ido, P(remoto | se va) ≈", ["0,46", "0,30", "0,20", "0,06"], "0,06/0,13."],
    ["Tres clientes compran, cada uno, con probabilidad 0,1 de forma independiente. P(ninguno compra) =", ["0,729", "0,3", "0,001", "0,9"], "0,9³."],
    ["Con prevalencia 2 %, sensibilidad 90 % y falsos positivos 5 %, P(fraude | marcada) ≈", ["0,27", "0,90", "0,05", "0,02"], "180/670."],
  ],
  feynman: ["Por qué la frecuencia relativa se acerca a la probabilidad cuando se repite mucho un experimento", "Por qué en la probabilidad de la unión hay que restar la intersección", "Qué diferencia hay entre P(A | B) y P(B | A) con un ejemplo de la vida real", "Por qué independientes e incompatibles no significan lo mismo", "Por qué una alarma de un sistema muy preciso puede ser falsa la mayoría de las veces"],
  glosario: [
    ["Experimento aleatorio", "Experimento cuyo resultado no se puede predecir con certeza."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles de un experimento."],
    ["Suceso", "Subconjunto del espacio muestral."],
    ["Suceso contrario", "Ā: ocurre cuando no ocurre A."],
    ["Sucesos incompatibles", "Sucesos que no pueden ocurrir a la vez: A ∩ B = ∅."],
    ["Frecuencia relativa", "Cociente entre las veces que ocurre un suceso y el número de repeticiones."],
    ["Ley de los grandes números", "Al aumentar las repeticiones, la frecuencia relativa se acerca a la probabilidad."],
    ["Regla de Laplace", "P(A) = favorables/posibles, si los resultados son equiprobables."],
    ["Probabilidad condicionada", "P(A | B) = P(A ∩ B)/P(B): probabilidad de A sabiendo que ha ocurrido B."],
    ["Regla del producto", "P(A ∩ B) = P(A) · P(B | A)."],
    ["Sucesos independientes", "Sucesos tales que P(A ∩ B) = P(A) · P(B)."],
    ["Diagrama de árbol", "Esquema de ramas con probabilidades para experimentos compuestos."],
    ["Sistema completo de sucesos", "Sucesos incompatibles dos a dos cuya unión es el espacio muestral."],
    ["Probabilidad total", "P(B) = Σ P(Aᵢ) · P(B | Aᵢ)."],
    ["Teorema de Bayes", "P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ)/P(B): probabilidad de una causa sabiendo el efecto."],
    ["Falso positivo", "Resultado positivo de una prueba en un caso que en realidad es negativo."],
  ],
  situacion: {
    titulo: "Diseñamos una póliza de seguro",
    reto: "Una aseguradora os encarga calcular la prima de un seguro de móvil para estudiantes. Debéis estimar las probabilidades de rotura y de robo, segmentar a los clientes por perfiles y proponer una prima justa y rentable.",
    pasos: [
      "Haced una encuesta en el centro: ¿se te ha roto o te han robado el móvil en el último año?, junto con variables como el curso o el uso de funda.",
      "Organizad los datos en tablas de contingencia y estimad probabilidades con frecuencias relativas.",
      "Calculad probabilidades condicionadas por perfil y decidid si las variables son independientes.",
      "Con un árbol y la probabilidad total, obtened la probabilidad de siniestro de un cliente cualquiera y, con Bayes, el perfil más probable de quien da un parte.",
      "Proponed una prima por perfil a partir del coste medio de una reparación y de un margen para la empresa.",
    ],
    producto: "Un folleto comercial de la póliza con las primas por perfil y un anexo técnico con las tablas, árboles y cálculos de probabilidad.",
    evaluacion: [
      "Recoge y organiza los datos con rigor en tablas de contingencia.",
      "Calcula correctamente probabilidades simples, condicionadas, totales y de Bayes.",
      "Justifica la segmentación por perfiles con argumentos probabilísticos.",
      "Comunica la propuesta con claridad y valora su equidad.",
    ],
  },
  figura: ["Probabilidad de un vistazo", "Resumen de sucesos, reglas de cálculo, probabilidad condicionada y teoremas", [
    ["Sucesos", ["E, ∅, Ā", "A ∪ B, A ∩ B", "incompatibles", "De Morgan"]],
    ["Calcular", ["Laplace f/p", "P(Ā) = 1 − P(A)", "unión: − P(A ∩ B)", "tablas: ÷ total"]],
    ["Condicionada", ["P(A∩B)/P(B)", "producto", "independientes", "árboles"]],
    ["Teoremas", ["total: Σ caminos", "Bayes: camino/total", "a priori → posteriori", "falsos positivos"]],
  ]],
  video: { id: "iRvdGXnMqeQ", titulo: "Probabilidad condicional: ejemplo 1", canal: "Estadística útil", vistas: 576701, busqueda: "probabilidad condicionada ejemplo" },
  mapa: ["PROBABILIDAD", [
    ["Sucesos", "espacio muestral · operaciones"],
    ["Cálculo", "Laplace · propiedades · tablas"],
    ["Condicionada", "producto · independencia · árboles"],
    ["Teoremas", "probabilidad total · Bayes"],
  ]],
  tarjetas: [
    ["Espacio muestral", "Conjunto de todos los resultados posibles."],
    ["Leyes de De Morgan", "(A ∪ B)‾ = Ā ∩ B̄; (A ∩ B)‾ = Ā ∪ B̄"],
    ["Regla de Laplace", "favorables/posibles (resultados equiprobables)"],
    ["Suceso contrario", "P(Ā) = 1 − P(A)"],
    ["Unión", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
    ["Probabilidad condicionada", "P(A | B) = P(A ∩ B)/P(B)"],
    ["Regla del producto", "P(A ∩ B) = P(A) · P(B | A)"],
    ["Independencia", "P(A ∩ B) = P(A) · P(B)"],
    ["Árbol", "Producto a lo largo del camino; suma entre caminos."],
    ["Probabilidad total", "P(B) = Σ P(Aᵢ) · P(B | Aᵢ)"],
    ["Teorema de Bayes", "P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ)/P(B)"],
    ["Falacia del jugador", "Las rachas no cambian la probabilidad de sucesos independientes."],
  ],
  familias: ["Comentad cómo calcula una aseguradora el precio del seguro del coche y por qué cambia con la edad del conductor.", "Buscad en las noticias un resultado de un test (médico, de alcoholemia, de fraude) y discutid qué significa un positivo.", "Jugad a lanzar una moneda 50 veces y anotad la frecuencia relativa de caras cada 10 lanzamientos.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  saberes: "Sentido estocástico: experimentos aleatorios, espacio muestral y sucesos; frecuencia relativa y ley de los grandes números; regla de Laplace y propiedades de la probabilidad; probabilidad con tablas de contingencia; probabilidad condicionada, regla del producto e independencia; experimentos compuestos y diagramas de árbol; teoremas de la probabilidad total y de Bayes; toma de decisiones en contextos de incertidumbre (RD 243/2022, Matemáticas Aplicadas a las Ciencias Sociales I, saberes básicos E. Sentido estocástico; Decret 171/2022, Matemàtiques aplicades a les ciències socials I, sentit estocàstic).",
  ideas: ["Simulación de lanzamientos con hoja de cálculo para observar la ley de los grandes números.", "Análisis de tablas de contingencia de encuestas del CIS.", "Frecuencias naturales para entender falsos positivos.", "Debate sobre el uso de perfiles de riesgo en seguros y créditos."],
  fuentes: [wiki("Probabilidad", "Probabilidad"), wiki("Probabilidad condicionada", "Probabilidad condicionada"), wiki("Teorema de Bayes", "Teorema de Bayes"), { t: "Instituto Nacional de Estadística, Tablas de mortalidad", url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177004&menu=ultiDatos&idp=1254735573002" }],
});
