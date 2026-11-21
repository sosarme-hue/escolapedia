// Matemáticas II 2º Bachillerato · Tema 12. Nivel libro. Dibujos propios en SVG.
const { reparte, mapa, lienzo, t, tarjeta, fig, rejilla, graf, arbol, RD } = require("./_bach2-m2");

const G = (aria, o, fn) => graf(aria, { w: 260, h: 180, ...o }, fn);
// Diagrama de Venn de dos sucesos; zona: "u" unión, "i" intersección, "a" solo A, "c" complementario de la unión.
function venn(aria, zona, rotulo) {
  const A = `<circle cx="104" cy="88" r="52"/>`, B = `<circle cx="160" cy="88" r="52"/>`;
  const id = `v${(venn.k = (venn.k || 0) + 1)}`;
  let fill = "";
  if (zona === "u") fill = `<g fill="var(--leaf)" fill-opacity=".35">${A}${B}</g>`;
  if (zona === "i") fill = `<clipPath id="${id}">${A}</clipPath><g clip-path="url(#${id})"><circle cx="160" cy="88" r="52" fill="var(--leaf)" fill-opacity=".45"/></g>`;
  if (zona === "a") fill = `<mask id="${id}"><rect width="260" height="180" fill="#fff"/><circle cx="160" cy="88" r="52" fill="#000"/></mask><circle cx="104" cy="88" r="52" fill="var(--leaf)" fill-opacity=".4" mask="url(#${id})"/>`;
  if (zona === "c") fill = `<mask id="${id}"><rect width="260" height="180" fill="#fff"/>${A.replace("/>", ' fill="#000"/>')}${B.replace("/>", ' fill="#000"/>')}</mask><rect x="14" y="20" width="232" height="140" fill="var(--leaf)" fill-opacity=".3" mask="url(#${id})"/>`;
  return lienzo(aria, `<rect x="14" y="20" width="232" height="140" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.6"/>${fill}<g fill="none" stroke-width="2.2"><circle cx="104" cy="88" r="52" stroke="var(--pen)"/><circle cx="160" cy="88" r="52" stroke="var(--red)"/></g>${t(70, 56, "A", { s: 15, b: 1, c: "var(--pen)" })}${t(194, 56, "B", { s: 15, b: 1, c: "var(--red)" })}${t(232, 36, "E", { s: 13, b: 1, c: "var(--muted)", a: "end" })}${t(130, 174, rotulo, { s: 12, b: 1, c: "var(--ink)" })}`, 260, 180);
}

module.exports = {
  materia: "Matemáticas II",
  curso: "2-bachillerato",
  titulo: "Probabilidad",
  minutos: 120,
  objetivos: [
    "Describir experimentos aleatorios, espacios muestrales y operaciones con sucesos",
    "Calcular probabilidades con la regla de Laplace y técnicas de recuento",
    "Aplicar los axiomas de Kolmogorov y sus propiedades",
    "Calcular probabilidades condicionadas y estudiar la independencia de sucesos",
    "Resolver problemas con tablas de contingencia y diagramas de árbol",
    "Aplicar el teorema de la probabilidad total y el teorema de Bayes",
  ],
  claves: ["experimento aleatorio", "espacio muestral", "suceso", "regla de Laplace", "axiomas de Kolmogorov", "probabilidad condicionada", "sucesos independientes", "tabla de contingencia", "probabilidad total", "teorema de Bayes"],
  lectura: {
    titulo: "El falso positivo",
    html: `<p>Una prueba médica detecta una enfermedad con una fiabilidad del 99 %. Te la haces y sale positiva. ¿Cuál es la probabilidad de que tengas la enfermedad? Casi todo el mundo responde «99 %», incluidos muchos médicos en los estudios que se han hecho. La respuesta correcta puede ser sorprendentemente baja: si la enfermedad es rara, la mayoría de los positivos son <b>falsos positivos</b>.</p>
    <p>Este razonamiento lo formalizó el reverendo inglés <b>Thomas Bayes</b> en un ensayo publicado en 1763, dos años después de su muerte. Su teorema explica cómo actualizar lo que creemos cuando recibimos nueva información. Hoy es la base de los filtros de correo basura, de los diagnósticos médicos asistidos por ordenador, de la búsqueda de aviones perdidos y de buena parte de la inteligencia artificial.</p>
    <p>La probabilidad nació en el siglo XVII, en las cartas entre Pascal y Fermat sobre juegos de azar, y Kolmogorov le dio su forma axiomática en 1933. En este tema vas a aprender a razonar con incertidumbre: a calcular probabilidades condicionadas, a distinguir sucesos independientes y a «darle la vuelta» a una probabilidad con Bayes.</p>`,
  },
  pregunta: {
    texto: "Una enfermedad afecta al 1 % de la población. Un test da positivo en el 99 % de los enfermos y en el 5 % de los sanos. Si das positivo, ¿qué probabilidad hay de que estés enfermo?",
    respuesta: "Solo un <mark>16,7 %</mark> aproximadamente. De cada 10 000 personas, 100 están enfermas y 99 dan positivo; de las 9 900 sanas, 495 dan positivo (falsos positivos). De los 594 positivos, solo 99 están enfermos: 99/594 ≈ 0,167. Es el <b>teorema de Bayes</b>.",
  },
  bloques: [
    {
      html: `<h3>12.1 Experimentos aleatorios y sucesos</h3><p>Un <b>experimento aleatorio</b> es aquel cuyo resultado no se puede predecir aunque se repita en las mismas condiciones: lanzar un dado, extraer una carta, medir el tiempo de espera de un autobús. Los experimentos cuyo resultado se conoce de antemano se llaman <b>deterministas</b>.</p><p>El <b>espacio muestral</b> E es el conjunto de todos los resultados posibles. Al lanzar dos monedas, E = {CC, CX, XC, XX}. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}.</p><p>Un <b>suceso</b> es cualquier subconjunto de E. Tipos:</p><ul><li><b>Elemental</b>: un solo resultado, {3}.</li><li><b>Compuesto</b>: varios resultados, «sacar par» = {2, 4, 6}.</li><li><b>Seguro</b>: E, ocurre siempre.</li><li><b>Imposible</b>: ∅, no ocurre nunca («sacar un 7»).</li></ul><p>Se dice que un suceso A <b>ocurre</b> si el resultado del experimento pertenece a A.</p><p>Para describir el espacio muestral de experimentos compuestos son muy útiles los <b>diagramas de árbol</b> y las <b>tablas de doble entrada</b>. Al lanzar dos dados hay 6 × 6 = 36 resultados, que se organizan en una tabla de 6 filas y 6 columnas.</p><p>Los sucesos se representan con <b>diagramas de Venn</b>: un rectángulo para E y regiones dentro para cada suceso.</p>`,
      svg: venn("Diagrama de Venn de dos sucesos A y B dentro del espacio muestral E", "", "Espacio muestral E con sucesos A y B"),
    },
    {
      html: `<h3>12.2 Operaciones con sucesos</h3><ul><li><b>Unión</b> A ∪ B: ocurre A <b>o</b> B (o los dos). Contiene los resultados que están en alguno.</li><li><b>Intersección</b> A ∩ B: ocurren A <b>y</b> B a la vez.</li><li><b>Contrario</b> Ā (o A<sup>c</sup>): ocurre cuando <b>no</b> ocurre A. Ā = E − A.</li><li><b>Diferencia</b> A − B = A ∩ B̄: ocurre A pero no B.</li></ul><p>Dos sucesos son <b>incompatibles</b> (o mutuamente excluyentes) si no pueden ocurrir a la vez: A ∩ B = ∅. Por ejemplo, «sacar par» y «sacar 3».</p><p>Propiedades útiles: conmutativa, asociativa, distributiva, y las <b>leyes de De Morgan</b>:</p><div class="formula"><span>(A ∪ B)<sup>c</sup> = Ā ∩ B̄    (A ∩ B)<sup>c</sup> = Ā ∪ B̄</span></div><p>Es decir: «no ocurre ni A ni B» es lo mismo que «no ocurre A y no ocurre B»; y «no ocurren los dos» equivale a «falla al menos uno».</p><p>Ejemplo con un dado: A = «par» = {2, 4, 6}, B = «mayor que 3» = {4, 5, 6}.</p><ul><li>A ∪ B = {2, 4, 5, 6}; A ∩ B = {4, 6}.</li><li>Ā = {1, 3, 5}; A − B = {2}.</li><li>(A ∪ B)<sup>c</sup> = {1, 3} = Ā ∩ B̄ = {1, 3, 5} ∩ {1, 2, 3}. ✓</li></ul><p>Traducir bien el enunciado es clave: «al menos uno» es una unión, «ambos» una intersección, «ninguno» el contrario de la unión y «solo A» la diferencia.</p>`,
      svg: venn("Diagrama de Venn con la intersección de A y B sombreada", "i", "A ∩ B: ocurren los dos"),
      video: { id: "Bayi1fV3SEo", titulo: "Probabilidad de la unión y la intersección de sucesos", canal: "shurprofe y lasmatematicas.es", vistas: 409805, busqueda: "probabilidad unión e intersección de sucesos" },
    },
    {
      html: `<h3>12.3 Frecuencia relativa y regla de Laplace</h3><p>Si repetimos un experimento n veces y el suceso A ocurre n<sub>A</sub> veces, su <b>frecuencia relativa</b> es f(A) = n<sub>A</sub>/n.</p><p><b>Ley de los grandes números</b>: al aumentar n, la frecuencia relativa se estabiliza alrededor de un valor: la <b>probabilidad</b> de A. Es la definición «frecuentista», útil cuando no hay simetría (probabilidad de que una chincheta caiga de punta, de que un recién nacido sea niña, de lluvia en un día de abril).</p><p>Cuando todos los resultados elementales son <b>equiprobables</b> (dado no trucado, baraja bien mezclada), se usa la <b>regla de Laplace</b>:</p><div class="formula"><span>P(A) = casos favorables / casos posibles</span></div><p>Ejemplos:</p><ul><li>Sacar suma 7 con dos dados: los casos favorables son (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). P = 6/36 = 1/6.</li><li>Sacar una figura (sota, caballo o rey) en la baraja española de 40 cartas: 12/40 = 3/10.</li></ul><p>Cuidado: Laplace solo vale con resultados equiprobables. Al lanzar dos monedas, «dos caras», «dos cruces» y «una de cada» <b>no</b> son equiprobables: la última tiene probabilidad 2/4 = 1/2, porque puede darse como CX o como XC. Este error lo cometió el propio d'Alembert en el siglo XVIII.</p>`,
      svg: G("La frecuencia relativa de caras se estabiliza alrededor de 0,5 cuando aumenta el número de lanzamientos", { x0: -40, x1: 400, y0: 0, y1: 1, paso: 100, pasoY: 0.25, etiquetas: true }, (E) => { let s = 1, c = 0; const pts = []; for (let n = 1; n <= 400; n++) { s = (s * 16807) % 2147483647; if (s / 2147483647 < 0.5) c++; pts.push([n, c / n]); } return `${E.curva(() => 0.5, "var(--red)", 0, 400, 1.6, 'stroke-dasharray="5 4"')}<path d="M${pts.map(([n, f]) => `${E.X(n)} ${E.Y(f)}`).join(" L ")}" fill="none" stroke="var(--pen)" stroke-width="2"/>${t(E.X(390), E.Y(0.5) - 6, "P = 0,5", { s: 11, b: 1, c: "var(--red)", a: "end" })}${t(E.X(390), E.Y(0.12), "n.º de lanzamientos", { s: 10, c: "var(--muted)", a: "end" })}`; }),
    },
    {
      html: `<h3>12.4 Técnicas de recuento</h3><p>Para aplicar Laplace hay que contar casos, y a menudo son muchos. La <b>combinatoria</b> da fórmulas para contar sin enumerar. La pregunta clave es: ¿<b>importa el orden</b>? ¿Se pueden <b>repetir</b> elementos?</p><ul><li><b>Variaciones con repetición</b> (importa el orden, se repite): VR<sub>n,k</sub> = n<sup>k</sup>. Contraseñas de 4 cifras: 10⁴ = 10 000.</li><li><b>Variaciones sin repetición</b> (importa el orden, no se repite): V<sub>n,k</sub> = n!/(n − k)!. Podio de 3 entre 8 corredores: 8 · 7 · 6 = 336.</li><li><b>Permutaciones</b> (ordenar todos): P<sub>n</sub> = n!. Formas de sentar a 5 personas en fila: 120.</li><li><b>Combinaciones</b> (no importa el orden): C<sub>n,k</sub> = (n sobre k) = n!/(k!(n − k)!). Comités de 3 entre 10: 120.</li></ul><p>Ejemplos con Laplace:</p><ul><li>Acertar la Lotería Primitiva (6 números de 49): hay C<sub>49,6</sub> = 13 983 816 combinaciones. P = 1/13 983 816 ≈ 7 · 10⁻⁸.</li><li>En un comité de 3 elegido al azar entre 10 personas, P(Ana está) = C<sub>9,2</sub>/C<sub>10,3</sub> = 36/120 = 3/10.</li><li>Una contraseña de 4 cifras distintas: V<sub>10,4</sub> = 5040 posibles, frente a 10 000 si se permite repetir.</li></ul><p>En la PAU de Matemáticas II la combinatoria aparece sobre todo como herramienta para contar casos, y en la distribución binomial del tema siguiente.</p>`,
      svg: rejilla("Tabla de técnicas de recuento según importe el orden y se puedan repetir elementos", [["", "Con orden", "Sin orden"], ["Con repetición", "VR = nᵏ", "(no se usa aquí)"], ["Sin repetición", "V = n!/(n−k)!", "C = n!/(k!(n−k)!)"], ["Todos (k = n)", "P = n!", "1"]], { w: 290, h: 140 }),
    },
    {
      html: `<h3>12.5 Axiomas de Kolmogorov y propiedades</h3><p>En 1933, Andréi Kolmogorov definió la probabilidad como una función P que asigna a cada suceso un número y cumple tres axiomas:</p><ol><li>P(A) ≥ 0 para todo suceso A.</li><li>P(E) = 1.</li><li>Si A y B son incompatibles, P(A ∪ B) = P(A) + P(B).</li></ol><p>De ellos se deducen todas las propiedades:</p><ul><li>P(Ā) = 1 − P(A).  P(∅) = 0.  0 ≤ P(A) ≤ 1.</li><li>Si A ⊂ B, P(A) ≤ P(B).</li><li><b>Unión</b> (general): <b>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b>. Se resta la intersección porque se ha contado dos veces.</li><li>P(A − B) = P(A ∩ B̄) = P(A) − P(A ∩ B).</li><li>De Morgan: P(Ā ∩ B̄) = 1 − P(A ∪ B);  P(Ā ∪ B̄) = 1 − P(A ∩ B).</li></ul><p>Ejemplo: P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2.</p><ul><li>P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7.</li><li>P(ninguno) = P(Ā ∩ B̄) = 1 − 0,7 = 0,3.</li><li>P(solo A) = 0,5 − 0,2 = 0,3.  P(solo uno) = 0,3 + 0,2 = 0,5.</li></ul><p>Para tres sucesos: P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A ∩ B) − P(A ∩ C) − P(B ∩ C) + P(A ∩ B ∩ C).</p><p>Truco: rellenar un diagrama de Venn con las probabilidades de cada zona, empezando por la intersección, resuelve casi todos estos problemas.</p>`,
      svg: lienzo("Diagrama de Venn con probabilidades: solo A 0,3, intersección 0,2, solo B 0,2 y ninguno 0,3", `<rect x="14" y="20" width="232" height="140" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.6"/><g fill="none" stroke-width="2.2"><circle cx="104" cy="88" r="52" stroke="var(--pen)"/><circle cx="160" cy="88" r="52" stroke="var(--red)"/></g>${t(80, 93, "0,3", { s: 15, b: 1, c: "var(--pen)" })}${t(132, 93, "0,2", { s: 15, b: 1, c: "var(--leaf)" })}${t(184, 93, "0,2", { s: 15, b: 1, c: "var(--red)" })}${t(36, 150, "0,3", { s: 13, b: 1, c: "var(--muted)" })}${t(70, 52, "A", { s: 14, b: 1, c: "var(--pen)" })}${t(194, 52, "B", { s: 14, b: 1, c: "var(--red)" })}${t(130, 174, "P(A ∪ B) = 0,7", { s: 12, b: 1 })}`, 260, 180),
    },
    {
      html: `<h3>12.6 Probabilidad condicionada</h3><p>A veces sabemos que ha ocurrido un suceso B, y eso cambia la probabilidad de A. La <b>probabilidad de A condicionada a B</b> (o «de A sabiendo B») es:</p><div class="formula"><span>P(A | B) = P(A ∩ B) / P(B),  con P(B) &gt; 0</span></div><p>Al saber que ocurre B, el espacio muestral se «reduce» a B, y solo cuenta la parte de A que está dentro de B.</p><p>Ejemplo con un dado: A = «sacar 6», B = «sacar par». P(A) = 1/6, pero si sabemos que ha salido par, P(A | B) = (1/6)/(3/6) = 1/3.</p><p>Despejando se obtiene la <b>regla del producto</b>:</p><div class="formula"><span>P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)</span></div><p>Atención: P(A | B) y P(B | A) son, en general, <b>muy distintas</b>. La probabilidad de que una persona sea española sabiendo que vive en Madrid es alta; la de que viva en Madrid sabiendo que es española es baja. Confundirlas es la «falacia del fiscal», que ha provocado condenas injustas en juicios reales.</p><p>Las probabilidades condicionadas cumplen todas las propiedades de una probabilidad: por ejemplo, P(Ā | B) = 1 − P(A | B).</p>`,
      svg: venn("Probabilidad condicionada: al saber que ocurre B, solo cuenta la parte de A dentro de B", "i", "P(A | B) = P(A ∩ B)/P(B)"),
    },
    {
      html: `<h3>12.7 Tablas de contingencia</h3><p>Cuando se clasifican los individuos de una población según dos características, los datos se organizan en una <b>tabla de contingencia</b> (de doble entrada) con totales por filas y columnas.</p><p>Ejemplo: en un instituto de 200 alumnos de Bachillerato, 120 son chicas y 80 chicos; usan gafas 36 chicas y 14 chicos.</p><ul><li>P(gafas) = 50/200 = 0,25.</li><li>P(chica ∩ gafas) = 36/200 = 0,18.</li><li>P(gafas | chica) = 36/120 = 0,30 (se lee en la fila de chicas).</li><li>P(chica | gafas) = 36/50 = 0,72 (se lee en la columna de gafas).</li></ul><p>La tabla permite calcular directamente las condicionadas: el denominador es el <b>total de la fila o columna</b> de la condición.</p><p>Si el enunciado da porcentajes, se puede construir la tabla con un total cómodo (100, 1000 o 10 000 individuos) y trabajar con frecuencias. Es la técnica de las <b>frecuencias naturales</b>, que reduce mucho los errores.</p><p>Una tabla también sirve para estudiar la <b>independencia</b>: aquí P(gafas | chica) = 0,30 ≠ P(gafas) = 0,25, así que llevar gafas y ser chica no son independientes en este instituto.</p>`,
      svg: rejilla("Tabla de contingencia de 200 alumnos según sexo y uso de gafas", [["", "Gafas", "Sin gafas", "Total"], ["Chicas", "36", "84", "120"], ["Chicos", "14", "66", "80"], ["Total", "50", "150", "200"]], { w: 290, h: 140 }),
      video: { id: "9JoLybvV4D8", titulo: "Probabilidad con tablas de contingencia: ejercicios resueltos", canal: "profesor10demates", vistas: 53012, busqueda: "probabilidad tablas de contingencia" },
    },
    {
      html: `<h3>12.8 Sucesos independientes</h3><p>Dos sucesos son <b>independientes</b> si saber que ocurre uno no cambia la probabilidad del otro: P(A | B) = P(A). Equivalentemente:</p><div class="formula"><span>A y B independientes  ⇔  P(A ∩ B) = P(A) · P(B)</span></div><p>Ejemplos:</p><ul><li>Lanzar una moneda y un dado: «cara» y «sacar 6» son independientes. P = 1/2 · 1/6 = 1/12.</li><li>Con P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2: como 0,5 · 0,4 = 0,2, <b>son independientes</b>. Y en efecto P(A | B) = 0,2/0,4 = 0,5 = P(A).</li></ul><p>Si A y B son independientes, también lo son Ā y B, A y B̄, y Ā y B̄. Así, la probabilidad de que no ocurra ninguno es P(Ā) · P(B̄).</p><p><b>Independientes no es lo mismo que incompatibles</b>. Si A y B son incompatibles (y tienen probabilidad positiva), P(A ∩ B) = 0 ≠ P(A)P(B): saber que ocurre A garantiza que no ocurre B, así que son muy dependientes.</p><p>Aplicación: «probabilidad de al menos uno» con sucesos independientes. Si un tirador acierta con probabilidad 0,7 en cada disparo, la probabilidad de acertar al menos una vez en tres disparos es 1 − 0,3³ = 0,973. Es mucho más fácil calcular el contrario («ninguno») que sumar todos los casos.</p>`,
      svg: tarjeta("Diferencia entre sucesos independientes e incompatibles", "Independientes ≠ incompatibles", [["Independientes:", "var(--pen)", 13], ["P(A ∩ B) = P(A)·P(B)", "var(--pen)", 12.5], ["Incompatibles:", "var(--red)", 13], ["P(A ∩ B) = 0", "var(--red)", 12.5], ["al menos uno = 1 − P(ninguno)", "var(--leaf)", 12]], "var(--pen)"),
    },
    {
      html: `<h3>12.9 Experimentos compuestos y diagramas de árbol</h3><p>Un <b>experimento compuesto</b> consta de varias etapas: extraer dos bolas, lanzar un dado y después una moneda… Se representa con un <b>diagrama de árbol</b>:</p><ul><li>Cada rama lleva la probabilidad de esa etapa, <b>condicionada</b> a lo ocurrido antes.</li><li>Las ramas que salen de un mismo nudo suman 1.</li><li>La probabilidad de un camino es el <b>producto</b> de las probabilidades de sus ramas (regla del producto).</li><li>La probabilidad de un suceso es la <b>suma</b> de las probabilidades de los caminos que lo forman.</li></ul><p>Ejemplo: una urna con 3 bolas rojas y 2 blancas. Se extraen dos bolas <b>sin reemplazamiento</b>.</p><ul><li>P(R₁ ∩ R₂) = 3/5 · 2/4 = 3/10.</li><li>P(una de cada color) = P(R B) + P(B R) = 3/5 · 2/4 + 2/5 · 3/4 = 6/20 + 6/20 = 3/5.</li><li>P(B₁ ∩ B₂) = 2/5 · 1/4 = 1/10. Comprobación: 3/10 + 3/5 + 1/10 = 1. ✓</li></ul><p>Con <b>reemplazamiento</b> (se devuelve la bola), las extracciones son independientes y la composición no cambia: P(R R) = 3/5 · 3/5 = 9/25.</p><p>En la segunda etapa sin reemplazamiento, la probabilidad depende de lo que salió en la primera: por eso las ramas de segundo nivel son probabilidades condicionadas.</p>`,
      svg: arbol("Diagrama de árbol de dos extracciones sin reemplazamiento de una urna con 3 rojas y 2 blancas", [["R", "3/5", [["R", "2/4", "6/20"], ["B", "2/4", "6/20"]]], ["B", "2/5", [["R", "3/4", "6/20"], ["B", "1/4", "2/20"]]]]),
    },
    {
      html: `<h3>12.10 Teorema de la probabilidad total</h3><p>Un <b>sistema completo de sucesos</b> es una colección A₁, A₂, …, A<sub>n</sub> de sucesos incompatibles dos a dos cuya unión es E: en cada realización ocurre exactamente uno. Por ejemplo, los proveedores de una pieza, las urnas entre las que se elige o «estar enfermo / estar sano».</p><p>Si B es otro suceso:</p><div class="formula"><span>P(B) = P(A₁) P(B | A₁) + P(A₂) P(B | A₂) + … + P(A<sub>n</sub>) P(B | A<sub>n</sub>)</span></div><p>En el árbol: se suman todos los caminos que terminan en B.</p><p>Ejemplo (test médico): P(E) = 0,01 (enfermo), P(+ | E) = 0,99 (sensibilidad), P(+ | Ē) = 0,05 (falsos positivos).</p><div class="formula"><span>P(+) = 0,01 · 0,99 + 0,99 · 0,05 = 0,0099 + 0,0495 = 0,0594</span></div><p>Aproximadamente el 5,94 % de la población da positivo, y la mayor parte de esos positivos proceden de personas sanas, porque son muchísimas más.</p><p>Otro ejemplo: se elige al azar una de dos urnas (I: 2 rojas y 3 blancas; II: 4 rojas y 1 blanca) y se saca una bola. P(R) = 1/2 · 2/5 + 1/2 · 4/5 = 0,2 + 0,4 = <b>0,6</b>.</p>`,
      svg: arbol("Diagrama de árbol del test médico: enfermo o sano y resultado positivo o negativo", [["E", "0,01", [["+", "0,99", "0,0099"], ["−", "0,01", ""]]], ["Ē", "0,99", [["+", "0,05", "0,0495"], ["−", "0,95", ""]]]]),
    },
    {
      html: `<h3>12.11 Teorema de Bayes</h3><p>La probabilidad total calcula P(B) «hacia delante». El <b>teorema de Bayes</b> responde a la pregunta inversa: sabiendo que ha ocurrido B, ¿cuál es la probabilidad de que viniera de A<sub>i</sub>?</p><div class="formula"><span>P(A<sub>i</sub> | B) = P(A<sub>i</sub>) P(B | A<sub>i</sub>) / P(B)</span></div><p>El numerador es la probabilidad del camino que pasa por A<sub>i</sub> y llega a B; el denominador, la suma de todos los caminos que llegan a B (probabilidad total).</p><ul><li>P(A<sub>i</sub>) son las probabilidades <b>a priori</b> (antes de saber nada).</li><li>P(A<sub>i</sub> | B) son las probabilidades <b>a posteriori</b> (actualizadas con la información B).</li><li>P(B | A<sub>i</sub>) son las <b>verosimilitudes</b>.</li></ul><p>Test médico: P(E | +) = 0,0099/0,0594 ≈ <b>0,167</b>. Aunque el test es muy fiable, un positivo solo da un 16,7 % de probabilidad de estar enfermo, porque la enfermedad es rara. Por eso se repiten las pruebas: con un segundo positivo, la probabilidad a priori ya es 0,167 y la nueva a posteriori sube a casi el 80 %.</p><p>Urnas: si la bola fue roja, P(I | R) = 0,2/0,6 = 1/3 y P(II | R) = 2/3. La urna II era más probable, porque tiene más rojas.</p>`,
      svg: rejilla("Frecuencias naturales del test médico sobre 10000 personas: de 594 positivos, solo 99 están enfermos", [["10 000 personas", "Positivo", "Negativo"], ["100 enfermos", "99", "1"], ["9900 sanos", "495", "9405"], ["Total", "594", "9406"]], { w: 290, h: 140 }),
      video: { id: "cqTwHnNbc8g", titulo: "Teorema de Bayes explicado con ejemplos", canal: "Ace Tutors", vistas: 794293, busqueda: "teorema de Bayes ejemplos" },
    },
    {
      html: `<h3>12.12 Probabilidad en la PAU</h3><p>El ejercicio de probabilidad de la PAU suele ser de uno de estos tipos:</p><ul><li><b>Sucesos y propiedades</b>: se dan P(A), P(B) y algún dato más (P(A ∪ B), P(A | B)…) y se piden otras probabilidades o si son independientes. Se resuelve con las fórmulas o con un Venn.</li><li><b>Tabla de contingencia</b> con porcentajes de una población.</li><li><b>Árbol, probabilidad total y Bayes</b>: proveedores, urnas, pruebas diagnósticas, turnos de una fábrica…</li><li><b>Extracciones</b> con o sin reemplazamiento.</li></ul><p>Consejos:</p><ol><li><b>Define los sucesos</b> con letras y escribe qué datos son probabilidades condicionadas («el 3 % de las piezas del proveedor A» es P(D | A)).</li><li>Dibuja el árbol o la tabla antes de calcular.</li><li>Comprueba que las ramas de cada nudo suman 1.</li><li>Identifica si te preguntan P(B) (total) o P(A | B) (Bayes): las palabras «sabiendo que», «si se sabe que», «resultó ser» indican una condicionada.</li><li>Da los resultados como fracción o decimal con 4 cifras, y si es posible interprétalos.</li></ol><p>Errores típicos: confundir P(A | B) con P(B | A), sumar probabilidades de sucesos que no son incompatibles y multiplicar probabilidades de sucesos que no son independientes.</p>`,
      svg: tarjeta("Pasos para resolver un problema de probabilidad total y Bayes", "Árbol + Bayes", [["1. Define los sucesos", "var(--pen)", 13], ["2. Árbol con P y P( | )", "var(--leaf)", 13], ["3. Total: suma de caminos", "var(--red)", 13], ["4. Bayes: camino / total", "var(--inf)", 13], ["«sabiendo que» → condicionada", "var(--muted)", 11, 0]], "var(--pen)"),
      video: { id: "vV9zmiGzDT0", titulo: "Ejercicio de probabilidad EVAU: diagrama en árbol, probabilidad total y Bayes", canal: "Susi Profe", vistas: 64513, busqueda: "probabilidad EVAU diagrama de árbol Bayes" },
    },
  ],
  ejemplos: [
    { enunciado: "Con P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2, calcula P(A ∪ B) y P(Ā ∩ B̄).", pasos: ["P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7.", "De Morgan: P(Ā ∩ B̄) = 1 − P(A ∪ B)."], resultado: "0,7 y 0,3." },
    { enunciado: "¿Son independientes los sucesos anteriores? Calcula P(A | B).", pasos: ["P(A) · P(B) = 0,2 = P(A ∩ B).", "P(A | B) = 0,2/0,4."], resultado: "Sí; P(A | B) = 0,5 = P(A)." },
    { enunciado: "Se extraen dos bolas sin reemplazamiento de una urna con 3 rojas y 2 blancas. Halla P(dos rojas) y P(una de cada color).", pasos: ["P(RR) = 3/5 · 2/4.", "P(RB) + P(BR) = 6/20 + 6/20."], resultado: "3/10 y 3/5." },
    { enunciado: "En la tabla de 200 alumnos (36 chicas y 14 chicos con gafas; 120 chicas), halla P(chica | gafas).", pasos: ["Condición: gafas, total de la columna 50.", "Chicas con gafas: 36."], resultado: "36/50 = 0,72." },
    { enunciado: "P(E) = 0,01, P(+ | E) = 0,99, P(+ | Ē) = 0,05. Halla P(+).", pasos: ["Probabilidad total.", "0,01 · 0,99 + 0,99 · 0,05."], resultado: "0,0594." },
    { enunciado: "Con los datos anteriores, halla P(E | +).", pasos: ["Bayes: camino E→+ entre P(+).", "0,0099/0,0594."], resultado: "≈ 0,167." },
  ],
  errores: [
    "Aplicar la regla de Laplace cuando los resultados no son equiprobables.",
    "Sumar P(A) + P(B) sin restar P(A ∩ B) cuando A y B no son incompatibles.",
    "Confundir sucesos independientes con sucesos incompatibles.",
    "Confundir P(A | B) con P(B | A).",
    "En extracciones sin reemplazamiento, no actualizar la composición de la urna.",
    "En un árbol, olvidar que las ramas de segundo nivel son probabilidades condicionadas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Se lanzan tres monedas. Escribe el espacio muestral y calcula P(al menos dos caras).", sol: "8 resultados; A = {CCC, CCX, CXC, XCC}: P = 4/8 = 1/2." },
    { nivel: "básico", q: "Se lanzan dos dados. Calcula P(suma 7) y P(suma ≥ 10).", sol: "6/36 = 1/6 en los dos casos." },
    { nivel: "básico", q: "P(A) = 0,6, P(B) = 0,5 y P(A ∩ B) = 0,3. Calcula P(A ∪ B), P(Ā) y P(Ā ∩ B̄).", sol: "0,8; 0,4; 0,2." },
    { nivel: "básico", q: "Con los datos anteriores, calcula P(Ā ∪ B̄) y P(A − B).", sol: "1 − 0,3 = 0,7; 0,6 − 0,3 = 0,3." },
    { nivel: "básico", q: "A y B son incompatibles con P(A) = 0,3 y P(B) = 0,45. Calcula P(A ∪ B) y P(A ∩ B).", sol: "0,75 y 0." },
    { nivel: "básico", q: "Se extrae una carta de la baraja española (40 cartas). Halla P(oros o figura).", sol: "10/40 + 12/40 − 3/40 = 19/40." },
    { nivel: "básico", q: "Si P(A ∩ B) = 0,3 y P(B) = 0,5, calcula P(A | B).", sol: "0,6." },
    { nivel: "básico", q: "¿Son independientes A y B si P(A) = 0,6, P(B) = 0,5 y P(A ∩ B) = 0,3?", sol: "Sí: 0,6 · 0,5 = 0,3." },
    { nivel: "básico", q: "Urna con 3 rojas y 2 blancas. Se sacan dos bolas sin reemplazamiento. P(dos rojas)?", sol: "3/5 · 2/4 = 3/10." },
    { nivel: "básico", q: "Repite el ejercicio anterior con reemplazamiento.", sol: "3/5 · 3/5 = 9/25." },
    { nivel: "básico", q: "¿Cuál es la probabilidad de acertar la Lotería Primitiva (6 de 49) con una apuesta?", sol: "1/C(49, 6) = 1/13 983 816." },
    { nivel: "básico", q: "Se elige al azar un comité de 3 personas entre 10. ¿Qué probabilidad hay de que Ana esté en él?", sol: "C(9, 2)/C(10, 3) = 36/120 = 3/10." },
    { nivel: "medio", q: "En un instituto de 200 alumnos, 120 son chicas; usan gafas 36 chicas y 14 chicos. Halla P(gafas), P(gafas | chica) y P(chica | gafas). ¿Son independientes?", sol: "0,25; 0,30; 0,72. No, porque 0,30 ≠ 0,25." },
    { nivel: "medio", q: "P(A) = 0,4, P(B) = 0,3 y P(A ∪ B) = 0,58. ¿Son independientes? Halla P(A | B).", sol: "P(A ∩ B) = 0,12 = 0,4 · 0,3 → sí. P(A | B) = 0,4." },
    { nivel: "medio", q: "Un tirador acierta con probabilidad 0,7. Dispara tres veces de forma independiente. Halla P(al menos un acierto) y P(exactamente dos aciertos).", sol: "1 − 0,3³ = 0,973. 3 · 0,7² · 0,3 = 0,441." },
    { nivel: "medio", q: "Urna I: 2 rojas y 3 blancas; urna II: 4 rojas y 1 blanca. Se lanza una moneda para elegir urna y se saca una bola. Halla P(roja) y P(urna I | roja).", sol: "P(R) = 0,5 · 0,4 + 0,5 · 0,8 = 0,6. P(I | R) = 0,2/0,6 = 1/3." },
    { nivel: "medio", q: "Una enfermedad afecta al 1 %. El test da positivo en el 99 % de enfermos y en el 5 % de sanos. Halla P(+) y P(E | +).", sol: "P(+) = 0,0594; P(E | +) = 0,0099/0,0594 ≈ 0,167." },
    { nivel: "medio", q: "Se extraen dos cartas sin reemplazamiento de la baraja española. Halla P(dos oros).", sol: "10/40 · 9/39 = 3/52 ≈ 0,058." },
    { nivel: "medio", q: "A y B son independientes con P(A) = 0,5 y P(B) = 0,4. Halla P(ninguno) y P(solo uno).", sol: "P(Ā)P(B̄) = 0,5 · 0,6 = 0,3. Solo uno: 0,5 · 0,6 + 0,5 · 0,4 = 0,5." },
    { nivel: "medio", q: "P(A) = 0,5, P(B | A) = 0,4 y P(B | Ā) = 0,2. Halla P(B) y P(A | B).", sol: "P(B) = 0,2 + 0,1 = 0,3. P(A | B) = 0,2/0,3 = 2/3." },
    { nivel: "medio", q: "En una clase hay 23 alumnos. ¿Qué probabilidad hay de que al menos dos cumplan años el mismo día (año de 365 días)?", sol: "1 − (365 · 364 · … · 343)/365²³ ≈ 0,507: más de la mitad." },
    { nivel: "medio", q: "Demuestra que si A y B son independientes, también lo son Ā y B.", sol: "P(Ā ∩ B) = P(B) − P(A ∩ B) = P(B) − P(A)P(B) = P(B)(1 − P(A)) = P(Ā)P(B)." },
    { nivel: "medio", q: "Una familia tiene tres hijos. Halla P(exactamente dos chicas) y P(al menos una chica | al menos un chico).", sol: "3/8. Con al menos un chico hay 7 casos, de los que 6 tienen alguna chica: 6/7." },
    { nivel: "avanzado", q: "(PAU) Una fábrica tiene tres turnos que producen el 40 %, 35 % y 25 % de las piezas, con un 1 %, 2 % y 4 % de defectuosas. Halla P(defectuosa) y, si una pieza es defectuosa, la probabilidad de que sea del tercer turno.", sol: "P(D) = 0,004 + 0,007 + 0,010 = 0,021. P(T₃ | D) = 0,010/0,021 ≈ 0,476." },
    { nivel: "avanzado", q: "(PAU) P(A) = 0,5, P(B) = 0,4 y P(A ∪ B) = 0,7. Halla P(A | B), P(B | Ā) y estudia la independencia.", sol: "P(A ∩ B) = 0,2. P(A | B) = 0,5. P(B ∩ Ā) = 0,2 → P(B | Ā) = 0,2/0,5 = 0,4. Independientes (0,5 · 0,4 = 0,2)." },
    { nivel: "avanzado", q: "(PAU) Una urna tiene 4 bolas blancas y 6 negras. Se saca una, se devuelve junto con 2 más del mismo color y se saca otra. Halla P(segunda blanca) y P(primera blanca | segunda blanca).", sol: "0,4 · 6/12 + 0,6 · 4/12 = 0,4. P(B₁ | B₂) = 0,2/0,4 = 0,5." },
    { nivel: "avanzado", q: "(PAU) El 60 % de los alumnos aprueba Matemáticas, el 50 % Física y el 40 % ambas. Halla P(aprobar alguna), P(Física | Matemáticas), P(ninguna) y P(solo una).", sol: "0,7; 0,4/0,6 = 2/3; 0,3; 0,7 − 0,4 = 0,3." },
    { nivel: "avanzado", q: "Problema de Monty Hall: hay tres puertas y un coche detrás de una. Eliges una, el presentador (que sabe dónde está) abre otra sin premio y te ofrece cambiar. ¿Te conviene?", sol: "Sí: si cambias ganas con probabilidad 2/3 (ganas siempre que tu primera elección fuera errónea, que pasa 2 de cada 3 veces)." },
    { nivel: "avanzado", q: "Demuestra que dos sucesos incompatibles con probabilidad positiva no pueden ser independientes.", sol: "P(A ∩ B) = 0, pero P(A)P(B) > 0. Luego P(A ∩ B) ≠ P(A)P(B)." },
    { nivel: "avanzado", q: "Dos jugadores lanzan un dado por turnos; gana el primero que saque un 6. ¿Qué probabilidad tiene de ganar el que empieza?", sol: "P = 1/6 + (5/6)²(1/6) + … = (1/6)/(1 − 25/36) = 6/11 ≈ 0,545." },
  ],
  quiz: reparte([
    { q: "Un experimento aleatorio es aquel en el que…", o: ["el resultado se conoce", "no se puede predecir el resultado", "solo hay dos resultados", "todos los resultados son iguales"], a: 1, e: "Definición." },
    { q: "El espacio muestral de lanzar dos monedas tiene…", o: ["2 elementos", "3 elementos", "4 elementos", "8 elementos"], a: 2, e: "CC, CX, XC, XX." },
    { q: "A ∩ B significa…", o: ["A o B", "A y B", "ni A ni B", "A pero no B"], a: 1, e: "Ocurren los dos." },
    { q: "(A ∪ B)ᶜ =", o: ["Ā ∪ B̄", "Ā ∩ B̄", "A ∩ B", "E"], a: 1, e: "De Morgan." },
    { q: "Dos sucesos son incompatibles si…", o: ["A ∩ B = ∅", "P(A ∩ B) = P(A)P(B)", "A ∪ B = E", "P(A) = P(B)"], a: 0, e: "No pueden ocurrir a la vez." },
    { q: "La regla de Laplace exige…", o: ["sucesos independientes", "resultados equiprobables", "experimentos compuestos", "reemplazamiento"], a: 1, e: "Casos igual de probables." },
    { q: "P(Ā) =", o: ["P(A)", "1 − P(A)", "1/P(A)", "0"], a: 1, e: "Contrario." },
    { q: "P(A ∪ B) =", o: ["P(A) + P(B)", "P(A) + P(B) − P(A ∩ B)", "P(A)P(B)", "1 − P(A ∩ B)"], a: 1, e: "Fórmula general." },
    { q: "P(A | B) =", o: ["P(A ∩ B)/P(A)", "P(A ∩ B)/P(B)", "P(A)/P(B)", "P(A)P(B)"], a: 1, e: "Se divide por la condición." },
    { q: "A y B son independientes si…", o: ["P(A ∩ B) = 0", "P(A ∩ B) = P(A)P(B)", "P(A) + P(B) = 1", "A ⊂ B"], a: 1, e: "Definición." },
    { q: "Si A y B son independientes, P(A | B) =", o: ["P(B)", "P(A)", "0", "1"], a: 1, e: "B no aporta información." },
    { q: "Dos sucesos incompatibles con probabilidad positiva son…", o: ["independientes", "dependientes", "seguros", "imposibles"], a: 1, e: "P(A ∩ B) = 0 ≠ P(A)P(B)." },
    { q: "C(10, 3) =", o: ["30", "120", "720", "1000"], a: 1, e: "10 · 9 · 8/6." },
    { q: "En un árbol, la probabilidad de un camino es…", o: ["la suma de sus ramas", "el producto de sus ramas", "la última rama", "1"], a: 1, e: "Regla del producto." },
    { q: "Las ramas que salen de un nudo suman…", o: ["0", "1", "la del nudo anterior", "depende"], a: 1, e: "Cubren todos los casos." },
    { q: "La probabilidad total P(B) es…", o: ["Σ P(Aᵢ)P(B | Aᵢ)", "Σ P(Aᵢ | B)", "P(B | A₁)", "Π P(Aᵢ)"], a: 0, e: "Suma de caminos que llegan a B." },
    { q: "El teorema de Bayes calcula…", o: ["P(B)", "P(Aᵢ | B)", "P(B | Aᵢ)", "P(Aᵢ)"], a: 1, e: "Probabilidad a posteriori." },
    { q: "Sin reemplazamiento, las extracciones son…", o: ["independientes", "dependientes", "incompatibles", "equiprobables siempre"], a: 1, e: "Cambia la composición." },
    { q: "P(al menos uno) se calcula mejor como…", o: ["1 − P(ninguno)", "P(uno)", "la suma de todos", "P(todos)"], a: 0, e: "Suceso contrario." },
    { q: "«Sabiendo que ha salido par» indica…", o: ["una unión", "una probabilidad condicionada", "independencia", "una combinación"], a: 1, e: "Condición conocida." },
  ]),
  examen: reparte([
    { q: "P(sacar un número primo con un dado) =", o: ["1/2", "1/3", "2/3", "1/6"], a: 0, e: "{2, 3, 5}." },
    { q: "P(A) = 0,7, P(B) = 0,4, P(A ∩ B) = 0,3. P(A ∪ B) =", o: ["0,8", "1,1", "0,28", "0,4"], a: 0, e: "0,7 + 0,4 − 0,3." },
    { q: "Con esos datos, P(B | A) =", o: ["3/7", "3/4", "0,28", "0,7"], a: 0, e: "0,3/0,7." },
    { q: "¿Son independientes?", o: ["No", "Sí", "Solo si son incompatibles", "No se puede saber"], a: 0, e: "0,28 ≠ 0,3." },
    { q: "P(dos caras al lanzar dos monedas) =", o: ["1/4", "1/2", "1/3", "3/4"], a: 0, e: "1/2 · 1/2." },
    { q: "P(sacar dos ases de la baraja española sin reemplazamiento) =", o: ["1/130", "1/100", "1/40", "1/160"], a: 0, e: "4/40 · 3/39." },
    { q: "Urnas: P(I) = P(II) = 1/2, P(R | I) = 0,2, P(R | II) = 0,6. P(R) =", o: ["0,4", "0,8", "0,12", "0,5"], a: 0, e: "0,1 + 0,3." },
    { q: "Con esos datos, P(II | R) =", o: ["3/4", "1/4", "0,6", "0,3"], a: 0, e: "0,3/0,4." },
  ], 1),
  feynman: ["Qué diferencia hay entre sucesos incompatibles e independientes", "Por qué la regla de Laplace solo vale con resultados equiprobables", "Qué significa P(A | B) y por qué no es lo mismo que P(B | A)", "Cómo se construye y se usa un diagrama de árbol", "Por qué un test muy fiable puede dar muchos falsos positivos (teorema de Bayes)"],
  glosario: [
    ["Experimento aleatorio", "Experimento cuyo resultado no se puede predecir."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles, E."],
    ["Suceso", "Subconjunto del espacio muestral."],
    ["Suceso contrario", "Ā: ocurre cuando no ocurre A."],
    ["Sucesos incompatibles", "No pueden ocurrir a la vez: A ∩ B = ∅."],
    ["Leyes de De Morgan", "(A ∪ B)ᶜ = Ā ∩ B̄; (A ∩ B)ᶜ = Ā ∪ B̄."],
    ["Frecuencia relativa", "Proporción de veces que ocurre un suceso."],
    ["Regla de Laplace", "Casos favorables entre casos posibles, si son equiprobables."],
    ["Combinaciones", "Agrupaciones sin importar el orden: C(n, k)."],
    ["Axiomas de Kolmogorov", "P ≥ 0, P(E) = 1 y aditividad para incompatibles."],
    ["Probabilidad condicionada", "P(A | B) = P(A ∩ B)/P(B)."],
    ["Sucesos independientes", "P(A ∩ B) = P(A)P(B)."],
    ["Tabla de contingencia", "Tabla de doble entrada con dos características."],
    ["Sistema completo de sucesos", "Sucesos incompatibles cuya unión es E."],
    ["Probabilidad total", "P(B) = Σ P(Aᵢ)P(B | Aᵢ)."],
    ["Teorema de Bayes", "P(Aᵢ | B) = P(Aᵢ)P(B | Aᵢ)/P(B)."],
    ["Falso positivo", "Resultado positivo en un individuo que no tiene la condición."],
  ],
  situacion: {
    titulo: "¿Me fío del test?",
    reto: "Ante una prueba diagnóstica real (por ejemplo, un test rápido de antígenos o una mamografía de cribado), vuestro grupo calculará qué significa realmente un resultado positivo y elaborará una infografía para explicarlo a la población.",
    pasos: [
      "Buscad en fuentes fiables la prevalencia de la enfermedad y la sensibilidad y especificidad de la prueba.",
      "Construid el diagrama de árbol y la tabla de frecuencias naturales para 10 000 personas.",
      "Calculad P(enfermo | positivo) y P(sano | negativo) con el teorema de Bayes.",
      "Estudiad cómo cambian los resultados si la prevalencia es del 0,1 %, del 1 % o del 20 %, y si se repite la prueba.",
      "Diseñad una infografía clara que explique por qué un positivo no siempre significa estar enfermo.",
    ],
    producto: "Una infografía para la población y una hoja con los cálculos justificados.",
    evaluacion: [
      "Define los sucesos y traduce correctamente los datos.",
      "Aplica la probabilidad total y el teorema de Bayes.",
      "Analiza el efecto de la prevalencia.",
      "Comunica el resultado de forma comprensible y rigurosa.",
    ],
  },
  figura: fig("Probabilidad de un vistazo", "Resumen: sucesos, propiedades, condicionada y Bayes", [
    ["Sucesos", ["E, ∪, ∩, Ā", "De Morgan", "incompatibles", "Laplace"], "var(--pen)"],
    ["Propiedades", ["Kolmogorov", "P(Ā) = 1 − P(A)", "P(A ∪ B)", "combinatoria"], "var(--leaf)"],
    ["Condicionada", ["P(A ∩ B)/P(B)", "independencia", "tablas", "árboles"], "var(--red)"],
    ["Total y Bayes", ["Σ P(Aᵢ)P(B|Aᵢ)", "a priori", "a posteriori", "falsos positivos"], "var(--inf)"],
  ]),
  video: { id: "rN6IWbanhy0", titulo: "Probabilidad condicional: ejercicios resueltos", canal: "Academia Internet", vistas: 818100, busqueda: "probabilidad condicionada ejercicios" },
  mapa: mapa("PROBABILIDAD", "var(--bac)", [
    ["Sucesos", "operaciones · Venn · De Morgan", "var(--pen)"],
    ["Cálculo", "Laplace · recuento · Kolmogorov", "var(--leaf)"],
    ["Condicionada", "independencia · tablas · árboles", "var(--red)"],
    ["Teoremas", "probabilidad total · Bayes", "var(--inf)"],
  ], 280),
  tarjetas: [
    ["(A ∪ B)ᶜ", "Ā ∩ B̄"],
    ["Laplace", "Favorables / posibles (equiprobables)."],
    ["C(n, k)", "n!/(k!(n − k)!)"],
    ["P(Ā)", "1 − P(A)"],
    ["P(A ∪ B)", "P(A) + P(B) − P(A ∩ B)"],
    ["P(A | B)", "P(A ∩ B)/P(B)"],
    ["Independientes", "P(A ∩ B) = P(A)P(B)"],
    ["Incompatibles", "P(A ∩ B) = 0"],
    ["Al menos uno", "1 − P(ninguno)"],
    ["Árbol", "Camino: producto; suceso: suma de caminos."],
    ["Probabilidad total", "P(B) = Σ P(Aᵢ)P(B | Aᵢ)"],
    ["Bayes", "P(Aᵢ | B) = P(Aᵢ)P(B | Aᵢ)/P(B)"],
  ],
  familias: ["Jugad al problema de Monty Hall con tres tazas y una moneda, y contad cuántas veces se gana cambiando.", "Comprobad en una reunión familiar o de clase si dos personas cumplen años el mismo día.", "Comentad una noticia sobre un test médico y preguntad qué significa un falso positivo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: incertidumbre; cálculo de probabilidades en experimentos simples y compuestos; probabilidad condicionada e independencia de sucesos; teoremas de la probabilidad total y de Bayes; diagramas de árbol y tablas de contingencia (RD 243/2022, Matemáticas II, saberes básicos E. Sentido estocástico).",
    ideas: ["Simulación de lanzamientos en hoja de cálculo para ver la ley de los grandes números.", "Experimento en clase del problema de Monty Hall.", "Análisis de pruebas diagnósticas reales con frecuencias naturales.", "Debate sobre la falacia del fiscal a partir de casos judiciales reales."],
  },
  fuentes: [
    RD,
    { t: "Probabilidad condicionada, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Probabilidad_condicionada" },
    { t: "Teorema de Bayes, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teorema_de_Bayes" },
  ],
  revisado: "2026-11-21",
};
