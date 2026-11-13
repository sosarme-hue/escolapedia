// Matemáticas B 4º ESO · Tema 9. Nivel libro. Dibujos propios en SVG.
const { reparte, mapa, lienzo, t, tarjeta, triangulo, barras } = require("./_eso4L3");

// Punto a una fracción s del segmento PQ.
const en = (P, Q, s) => [+(P[0] + (Q[0] - P[0]) * s).toFixed(1), +(P[1] + (Q[1] - P[1]) * s).toFixed(1)];
const linea = (P, Q, c = "var(--ink)", w = 2.4, extra = "") => `<path d="M${P[0]} ${P[1]} L ${Q[0]} ${Q[1]}" stroke="${c}" stroke-width="${w}" fill="none" ${extra}/>`;
const pto = (P, c = "var(--red)", r = 3.6) => `<circle cx="${P[0]}" cy="${P[1]}" r="${r}" fill="${c}"/>`;

// Dibujo de Tales: dos rectas desde O cortadas por tres paralelas.
const O = [20, 160], R1 = [244, 120], R2 = [200, 20];
const tales = (() => {
  const s = [0.35, 0.65, 0.95];
  const p1 = s.map((v) => en(O, R1, v)), p2 = s.map((v) => en(O, R2, v));
  return `${linea(O, R1)}${linea(O, R2)}${s.map((_, i) => linea(en(p1[i], p2[i], -0.12), en(p1[i], p2[i], 1.12), "var(--red)", 2.2)).join("")}${t((p1[0][0] + p1[1][0]) / 2 + 2, (p1[0][1] + p1[1][1]) / 2 + 18, "a", { c: "var(--pen)", s: 14, b: 1 })}${t((p1[1][0] + p1[2][0]) / 2 + 2, (p1[1][1] + p1[2][1]) / 2 + 18, "b", { c: "var(--pen)", s: 14, b: 1 })}${t((p2[0][0] + p2[1][0]) / 2 - 12, (p2[0][1] + p2[1][1]) / 2, "a′", { c: "var(--leaf)", s: 14, b: 1 })}${t((p2[1][0] + p2[2][0]) / 2 - 12, (p2[1][1] + p2[2][1]) / 2, "b′", { c: "var(--leaf)", s: 14, b: 1 })}${t(250, 170, "a/b = a′/b′", { c: "var(--red)", s: 13, b: 1, a: "end" })}`;
})();

// Triángulo rectángulo con la altura sobre la hipotenusa.
const A = [20, 150], B = [240, 150], C = [90, 47.5], H = [90, 150];

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Semejanza",
  minutos: 110,
  objetivos: [
    "Reconocer figuras semejantes y calcular la razón de semejanza",
    "Aplicar el teorema de Tales y los criterios de semejanza de triángulos",
    "Usar los teoremas del cateto y de la altura en triángulos rectángulos",
    "Calcular alturas y distancias inaccesibles mediante semejanza",
    "Relacionar la razón de semejanza con perímetros, áreas y volúmenes",
    "Trabajar con escalas, maquetas y homotecias",
  ],
  claves: ["semejanza", "razón de semejanza", "teorema de Tales", "posición de Tales", "criterios de semejanza", "teorema del cateto", "teorema de la altura", "escala", "homotecia", "número de oro"],
  lectura: {
    titulo: "Tales y la sombra de la pirámide",
    html: `<p>Hace unos 2.600 años, Tales de Mileto viajó a Egipto. Los sacerdotes, orgullosos de sus pirámides, le retaron a calcular la altura de la Gran Pirámide de Keops sin subir a ella. Tales clavó un bastón en la arena y esperó. Cuando la sombra del bastón midió lo mismo que el bastón, midió la sombra de la pirámide (sumando la mitad del lado de su base): esa era su altura.</p>
    <p>La idea de Tales es sencilla y poderosa: los rayos del Sol llegan paralelos, así que el bastón con su sombra y la pirámide con la suya forman <b>triángulos con la misma forma</b>. Lo que ocurre en el pequeño se repite, a otra escala, en el grande.</p>
    <p>Esa misma idea, la <b>semejanza</b>, está detrás de muchísimas actividades humanas. Los arquitectos dibujan planos a escala y construyen maquetas; los cartógrafos reducen países enteros a una hoja de papel; los fotógrafos amplían imágenes sin deformarlas; los ingenieros prueban aviones en túneles de viento con modelos reducidos. Incluso nuestro ojo funciona por semejanza: la imagen que se forma en la retina es una copia diminuta e invertida del mundo. En este tema aprenderás a usar la semejanza para medir lo que no se puede alcanzar con una cinta métrica.</p>`,
  },
  pregunta: {
    texto: "Un palo de 1 m da una sombra de 1,5 m. A la misma hora, la sombra de un edificio mide 30 m. ¿Qué altura tiene el edificio?",
    respuesta: "Los rayos de sol son paralelos, así que el palo con su sombra y el edificio con la suya forman <mark>triángulos semejantes</mark>: h / 30 = 1 / 1,5 → <b>h = 20 m</b>. Así midió Tales la pirámide de Keops hace 2.600 años.",
  },
  bloques: [
    {
      html: `<h3>9.1 Figuras semejantes y razón de semejanza</h3><p>Dos figuras son <b>semejantes</b> si tienen <mark>la misma forma</mark>, aunque su tamaño sea distinto. Matemáticamente, esto significa dos cosas a la vez:</p><ul><li>Sus <b>ángulos correspondientes son iguales</b>.</li><li>Sus <b>lados correspondientes son proporcionales</b>.</li></ul><p>El cociente entre un lado de la segunda figura y el lado correspondiente de la primera es la <b>razón de semejanza</b>, k:</p><div class="formula"><span>k = a′ / a = b′ / b = c′ / c</span></div><p>Si k &gt; 1, la segunda figura es una <b>ampliación</b>; si k &lt; 1, una <b>reducción</b>; si k = 1, las figuras son <b>iguales</b> (congruentes). Por ejemplo, un triángulo de lados 3, 4 y 5 cm y otro de lados 6, 8 y 10 cm son semejantes con razón k = 2.</p><p>Las dos condiciones son necesarias. Un cuadrado y un rectángulo de 2 × 1 tienen los mismos ángulos (todos rectos), pero no son semejantes porque sus lados no son proporcionales. Un cuadrado y un rombo pueden tener los lados proporcionales, pero no son semejantes si los ángulos no coinciden. Todos los cuadrados, en cambio, son semejantes entre sí, igual que todas las circunferencias y todos los triángulos equiláteros.</p>`,
      svg: lienzo("Dos triángulos rectángulos semejantes de lados 3, 4, 5 y 6, 8, 10: razón de semejanza 2", `${triangulo([[20, 150], [80, 150], [20, 105]], { c: "var(--pen)", lados: ["4", "5", "3"], recto: 0 })}${triangulo([[118, 158], [238, 158], [118, 68]], { c: "var(--leaf)", lados: ["8", "10", "6"], recto: 0 })}${t(130, 30, "k = 6/3 = 8/4 = 10/5 = 2", { c: "var(--red)", s: 14, b: 1 })}`),
    },
    {
      html: `<h3>9.2 El teorema de Tales</h3><p>El <b>teorema de Tales</b> dice: <mark>si varias rectas paralelas cortan a dos rectas secantes, los segmentos que determinan en una de ellas son proporcionales a los segmentos correspondientes de la otra</mark>.</p><div class="formula"><span>a / b = a′ / b′</span></div><p>También son proporcionales los segmentos medidos desde el punto de corte de las secantes: OA / OB = OA′ / OB′.</p><p>Ejemplo: tres calles paralelas cortan a dos avenidas. En la primera avenida, las manzanas entre las calles miden 120 m y 180 m; en la segunda, la primera manzana mide 150 m. ¿Cuánto mide la segunda? Por Tales, 120/180 = 150/x, así que x = 180 · 150 / 120 = <b>225 m</b>.</p><p>El teorema permite también el camino inverso: si los segmentos son proporcionales, las rectas que unen los puntos correspondientes son paralelas. Esto se usa para comprobar el paralelismo con solo medir longitudes. Una aplicación práctica muy antigua es la <b>división de un segmento en partes iguales</b> con regla y compás, que verás más adelante, y que los carpinteros y delineantes usan desde hace siglos.</p>`,
      svg: lienzo("Teorema de Tales: dos rectas que salen de un punto cortadas por tres paralelas rojas; los segmentos a y b son proporcionales a a prima y b prima", tales),
    },
    {
      html: `<h3>9.3 Triángulos en posición de Tales</h3><p>Una consecuencia inmediata del teorema: si en un triángulo ABC se traza una recta <b>paralela a uno de sus lados</b>, se obtiene un triángulo más pequeño, ADE, <mark>semejante al original</mark>. Se dice que los dos triángulos están <b>en posición de Tales</b>: comparten un ángulo (el del vértice A) y tienen los lados opuestos paralelos.</p><p>En esa situación se cumplen las proporciones:</p><div class="formula"><span>AD / AB = AE / AC = DE / BC</span></div><p>Ejemplo: en un triángulo, AB = 12 cm, AC = 15 cm y BC = 10 cm. Se traza una paralela a BC por el punto D de AB tal que AD = 4 cm. La razón de semejanza es 4/12 = 1/3, así que AE = 15/3 = 5 cm y DE = 10/3 ≈ 3,33 cm.</p><p>Esta configuración aparece en la vida diaria más de lo que parece: la sección de un tejado a dos aguas con una viga horizontal, una escalera apoyada en una pared con un travesaño horizontal o los triángulos que forman los rayos de luz al pasar por la lente de una cámara. Cuando se reconoce una posición de Tales, el problema se resuelve con una sola proporción.</p>`,
      svg: lienzo("Triángulo ABC con un segmento DE paralelo a BC: el triángulo ADE es semejante a ABC", `${triangulo([[130, 22], [30, 160], [230, 160]], { c: "var(--pen)", vert: ["A", "B", "C"], fill: "var(--card)" })}${linea(en([130, 22], [30, 160], 0.45), en([130, 22], [230, 160], 0.45), "var(--red)", 2.6)}${pto(en([130, 22], [30, 160], 0.45))}${pto(en([130, 22], [230, 160], 0.45))}${t(en([130, 22], [30, 160], 0.45)[0] - 10, en([130, 22], [30, 160], 0.45)[1] + 4, "D", { s: 13, b: 1, a: "end" })}${t(en([130, 22], [230, 160], 0.45)[0] + 10, en([130, 22], [230, 160], 0.45)[1] + 4, "E", { s: 13, b: 1, a: "start" })}${t(130, 128, "DE ∥ BC", { c: "var(--red)", s: 12, b: 1 })}`),
    },
    {
      html: `<h3>9.4 Criterios de semejanza de triángulos</h3><p>Para asegurar que dos triángulos son semejantes no hace falta comprobar los tres ángulos y los tres lados. Basta con que se cumpla <b>uno</b> de estos tres criterios:</p><ol><li><b>Criterio AA</b>: tienen <mark>dos ángulos iguales</mark>. Como los ángulos de un triángulo suman 180°, el tercero también será igual.</li><li><b>Criterio LLL</b>: tienen los <mark>tres lados proporcionales</mark>.</li><li><b>Criterio LAL</b>: tienen <mark>dos lados proporcionales y el ángulo comprendido entre ellos igual</mark>.</li></ol><p>El criterio AA es el más útil en la práctica, porque los ángulos iguales aparecen a menudo sin necesidad de medir: ángulos rectos, ángulos opuestos por el vértice, ángulos formados por rectas paralelas o el ángulo de elevación del Sol, que es el mismo para todos los objetos a la misma hora.</p><p>Ejemplo de LLL: ¿son semejantes los triángulos de lados 4, 6, 8 y 6, 9, 12? Los cocientes son 6/4 = 1,5, 9/6 = 1,5 y 12/8 = 1,5: sí, con k = 1,5. Ojo: los lados deben emparejarse <b>ordenados</b>, el menor con el menor y el mayor con el mayor. Si al ordenar los cocientes no coinciden, los triángulos no son semejantes.</p>`,
      svg: tarjeta("Los tres criterios de semejanza de triángulos: dos ángulos iguales; tres lados proporcionales; dos lados proporcionales y el ángulo comprendido igual", "Basta uno de estos criterios", [["AA: dos ángulos iguales", "var(--pen)", 14, 1], ["LLL: tres lados proporcionales", "var(--leaf)", 14, 1], ["LAL: dos lados proporcionales", "var(--red)", 14, 1], ["y el ángulo que forman, igual", "var(--red)", 12]]),
      video: { id: "d_y9649_Gig", titulo: "Criterios de semejanza de triángulos", canal: "Matemáticas con Grajeda", vistas: 468112, busqueda: "criterios de semejanza de triángulos" },
    },
    {
      html: `<h3>9.5 Teoremas del cateto y de la altura</h3><p>En un triángulo rectángulo, si se traza la <b>altura h sobre la hipotenusa a</b>, esta queda dividida en dos segmentos, m y n, llamados <b>proyecciones</b> de los catetos. Aparecen así tres triángulos rectángulos: el grande y los dos pequeños. Los tres son <mark>semejantes</mark> por el criterio AA (todos tienen un ángulo recto y comparten otro ángulo).</p><p>De esas semejanzas se deducen dos teoremas, atribuidos a Euclides:</p><ul><li><b>Teorema de la altura</b>: la altura al cuadrado es igual al producto de las proyecciones: <mark>h² = m · n</mark>.</li><li><b>Teorema del cateto</b>: cada cateto al cuadrado es igual a la hipotenusa por su proyección: <mark>b² = a · m</mark> y <mark>c² = a · n</mark>.</li></ul><p>Ejemplo: las proyecciones de los catetos sobre la hipotenusa miden 4 cm y 9 cm. Entonces h² = 4 · 9 = 36, h = 6 cm; la hipotenusa mide 13 cm, y los catetos, b = √(13 · 4) = √52 ≈ 7,21 cm y c = √(13 · 9) = √117 ≈ 10,82 cm.</p><p>Estos teoremas permiten calcular longitudes en un triángulo rectángulo conociendo pocos datos y son la base de una construcción clásica: dibujar con regla y compás un segmento de longitud √n.</p>`,
      svg: lienzo("Triángulo rectángulo con la altura h sobre la hipotenusa, que la divide en las proyecciones m y n", `${triangulo([A, B, C], { c: "var(--pen)", recto: 2, vert: ["", "", ""] })}${linea(C, H, "var(--red)", 2.4, 'stroke-dasharray="5 4"')}<path d="M${H[0]} ${H[1] - 10} h 10 v 10" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${t(H[0] + 6, 104, "h", { c: "var(--red)", s: 14, b: 1, a: "start" })}${t(55, 168, "m", { c: "var(--leaf)", s: 14, b: 1 })}${t(165, 168, "n", { c: "var(--leaf)", s: 14, b: 1 })}${t(42, 92, "b", { c: "var(--pen)", s: 14, b: 1 })}${t(176, 92, "c", { c: "var(--pen)", s: 14, b: 1 })}${t(130, 22, "h² = m · n ;  b² = a · m", { c: "var(--ink)", s: 12, b: 1 })}`),
      video: { id: "4d3L9GrLGJ4", titulo: "Teorema de Euclides del cateto y la altura", canal: "Susi Profe", vistas: 537833, busqueda: "teorema del cateto y de la altura" },
    },
    {
      html: `<h3>9.6 Semejanza y teorema de Pitágoras</h3><p>El teorema de Pitágoras, que ya conoces, se puede <b>demostrar con semejanza</b>. Basta sumar las dos igualdades del teorema del cateto:</p><div class="formula"><span>b² + c² = a · m + a · n = a · (m + n) = a · a = a²</span></div><p>porque las dos proyecciones juntas forman la hipotenusa: m + n = a. Así se obtiene <mark>a² = b² + c²</mark>. Es una de las más de trescientas demostraciones conocidas de este teorema.</p><p>Pitágoras y semejanza trabajan juntos en muchos problemas. Si conocemos dos datos de un triángulo rectángulo (por ejemplo, un cateto y su proyección), con el teorema del cateto obtenemos la hipotenusa, con la diferencia obtenemos la otra proyección, y con Pitágoras o el teorema de la altura, el resto.</p><p>También sirve el recíproco: si los lados de un triángulo cumplen a² = b² + c², el triángulo es rectángulo. Los antiguos egipcios lo usaban para trazar ángulos rectos con una cuerda de 12 nudos, formando un triángulo de lados 3, 4 y 5. Y cualquier triángulo semejante a este, como 6-8-10 o 9-12-15, también es rectángulo, porque la semejanza conserva los ángulos.</p>`,
      svg: tarjeta("Pitágoras a partir del teorema del cateto: b cuadrado más c cuadrado es a por m más a por n, que es a cuadrado", "Pitágoras con semejanza", [["b² = a · m", "var(--pen)", 15, 1], ["c² = a · n", "var(--pen)", 15, 1], ["b² + c² = a(m + n)", "var(--leaf)", 15, 1], ["a² = b² + c²", "var(--red)", 17, 1]]),
    },
    {
      html: `<h3>9.7 Medir alturas y distancias inaccesibles</h3><p>La semejanza permite medir objetos a los que no podemos llegar. Hay tres métodos clásicos:</p><ul><li><b>Método de la sombra</b>: a la misma hora, los rayos del Sol forman el mismo ángulo con el suelo. Si un palo de altura p proyecta una sombra s y un árbol proyecta una sombra S, su altura es <mark>H = p · S / s</mark>.</li><li><b>Método del espejo</b>: se coloca un espejo en el suelo y nos alejamos hasta ver en él la parte más alta del objeto. Por la ley de la reflexión, los ángulos son iguales, y los triángulos, semejantes: altura de los ojos / distancia nuestra al espejo = altura del objeto / distancia del objeto al espejo.</li><li><b>Método del lápiz o de la vara</b>: con el brazo estirado, se alinea una vara vertical con el objeto; la vara y el objeto forman triángulos en posición de Tales con nuestro ojo.</li></ul><p>Ejemplo: una persona cuyos ojos están a 1,60 m del suelo coloca un espejo a 2 m de sus pies y ve reflejada la punta de una farola que está a 6 m del espejo. Entonces h / 6 = 1,60 / 2, y h = <b>4,8 m</b>.</p><p>Estas técnicas se usaban en la Antigüedad para medir torres, anchuras de ríos y hasta el radio de la Tierra, como hizo Eratóstenes.</p>`,
      svg: lienzo("Método de la sombra: un palo y un árbol con sus sombras forman triángulos semejantes porque los rayos del Sol son paralelos", `<path d="M10 150 H 250" stroke="var(--muted)" stroke-width="2"/><circle cx="24" cy="30" r="12" fill="var(--inf)"/>${linea([40, 150], [40, 120], "var(--ink)", 3)}${linea([40, 120], [85, 150], "var(--inf)", 1.8, 'stroke-dasharray="5 4"')}${linea([40, 150], [85, 150], "var(--leaf)", 5)}${linea([120, 150], [120, 70], "var(--pen)", 5)}${linea([120, 70], [240, 150], "var(--inf)", 1.8, 'stroke-dasharray="5 4"')}${linea([120, 150], [240, 150], "var(--leaf)", 5)}${t(34, 140, "1 m", { s: 11, b: 1, a: "end" })}${t(62, 168, "1,5 m", { c: "var(--leaf)", s: 11, b: 1 })}${t(112, 114, "H", { c: "var(--pen)", s: 14, b: 1, a: "end" })}${t(180, 168, "sombra 30 m", { c: "var(--leaf)", s: 11, b: 1 })}${t(190, 40, "H/30 = 1/1,5", { c: "var(--red)", s: 13, b: 1 })}${t(190, 58, "H = 20 m", { c: "var(--red)", s: 13, b: 1 })}`),
    },
    {
      html: `<h3>9.8 Perímetros y áreas de figuras semejantes</h3><p>Si dos figuras son semejantes con razón k, ¿qué ocurre con sus perímetros y sus áreas?</p><ul><li>Los <b>perímetros</b> están en razón <mark>k</mark>, igual que cualquier longitud: si los lados se duplican, el perímetro se duplica.</li><li>Las <b>áreas</b> están en razón <mark>k²</mark>: si los lados se duplican, el área se multiplica por 4; si se triplican, por 9.</li></ul><p>La razón es que el área es «longitud por longitud»: en un rectángulo de lados a y b, al ampliar con razón k, el área pasa a ser (ka)(kb) = k² · ab. Basta mirar una cuadrícula: un cuadrado de lado 2 contiene 4 cuadrados de lado 1; uno de lado 3 contiene 9.</p><p>Ejemplo: una pizza mediana tiene 26 cm de diámetro y la familiar, 39 cm. La razón es k = 39/26 = 1,5, así que la familiar tiene 1,5² = <b>2,25 veces más superficie</b>. Si la mediana cuesta 8 € y la familiar 15 €, compensa la familiar: por 1,875 veces el precio, recibimos 2,25 veces la pizza.</p><p>Esto explica muchos errores de intuición. Si un cartel publicitario se amplía al doble de ancho y de alto, necesitará el cuádruple de pintura, no el doble. Y en los gráficos de periódicos, dibujar un círculo «el doble de grande» para representar el doble de una cantidad exagera visualmente la diferencia.</p>`,
      svg: lienzo("Cuadrados de lado 1, 2 y 3 que contienen 1, 4 y 9 cuadraditos: el área se multiplica por k al cuadrado", `${[1, 2, 3].map((k, i) => { const u = 24, x0 = [16, 64, 140][i], y0 = 140 - k * u; let g = ""; for (let a = 0; a < k; a++) for (let b = 0; b < k; b++) g += `<rect x="${x0 + a * u}" y="${y0 + b * u}" width="${u}" height="${u}" fill="${["var(--pen)", "var(--leaf)", "var(--red)"][i]}" fill-opacity=".18" stroke="${["var(--pen)", "var(--leaf)", "var(--red)"][i]}" stroke-width="1.6"/>`; return `${g}${t(x0 + (k * u) / 2, 160, `k = ${k}`, { s: 12, b: 1, c: ["var(--pen)", "var(--leaf)", "var(--red)"][i] })}${t(x0 + (k * u) / 2, 176, `área ×${k * k}`, { s: 11, c: "var(--muted)" })}`; }).join("")}${t(250, 30, "área → k²", { c: "var(--ink)", s: 14, b: 1, a: "end" })}`),
    },
    {
      html: `<h3>9.9 Volúmenes de cuerpos semejantes</h3><p>Dos cuerpos geométricos son semejantes si todas sus longitudes son proporcionales con la misma razón k. Entonces:</p><ul><li>Las longitudes (aristas, alturas, diagonales) están en razón <b>k</b>.</li><li>Las áreas (superficie lateral, superficie total) están en razón <b>k²</b>.</li><li>Los volúmenes están en razón <mark>k³</mark>.</li></ul><p>Un cubo de arista 2 cm contiene 2 · 2 · 2 = 8 cubos de arista 1 cm. Si se triplica la arista, el volumen se multiplica por 27.</p><p>Ejemplo: una lata de refresco y una versión gigante semejante, el doble de alta y de ancha, ¿cuánto contiene? k = 2, así que su volumen es 2³ = <b>8 veces mayor</b>, aunque solo necesite 4 veces más chapa (k² = 4).</p><p>Esta diferencia entre k² y k³ tiene consecuencias sorprendentes en la naturaleza. Si un animal fuera el doble de grande en todas sus dimensiones, pesaría 8 veces más, pero sus huesos solo serían 4 veces más gruesos (la resistencia depende de la sección, un área). Por eso los animales grandes, como los elefantes, tienen patas proporcionalmente mucho más gruesas, y por eso los gigantes de las películas no podrían existir. Galileo ya lo explicó en 1638.</p>`,
      svg: barras("Al ampliar con razón 2, la longitud se multiplica por 2, el área por 4 y el volumen por 8", [["longitud ×k", 2, "var(--pen)"], ["área ×k²", 4, "var(--leaf)"], ["volumen ×k³", 8, "var(--red)"]], 8, { unidad: "" }),
    },
    {
      html: `<h3>9.10 Escalas: planos y mapas</h3><p>Un plano o un mapa es una figura <b>semejante</b> a la realidad, pero reducida. La <b>escala</b> indica la razón entre las medidas del dibujo y las reales:</p><div class="formula"><span>escala = medida en el plano / medida real</span></div><p>Se escribe como <b>1 : n</b>, lo que significa que 1 unidad en el plano equivale a n unidades en la realidad (las mismas unidades). Por ejemplo, en un mapa a escala <mark>1 : 50.000</mark>, 1 cm del mapa son 50.000 cm = 500 m reales. Dos pueblos que en el mapa están a 7 cm se encuentran a 7 · 500 = 3.500 m = 3,5 km.</p><p>Muchos mapas incluyen también una <b>escala gráfica</b>: una barra dividida en segmentos con la distancia real que representa cada uno. Tiene una gran ventaja: si se amplía o reduce el mapa (por ejemplo, al hacer zoom en una pantalla), la barra cambia de tamaño con él y sigue siendo válida, mientras que la escala numérica dejaría de serlo.</p><p>Las escalas pequeñas (1 : 1.000.000) representan grandes territorios con poco detalle; las escalas grandes (1 : 50) se usan para planos de viviendas o piezas, con mucho detalle. Para calcular superficies en un mapa hay que recordar que las áreas van con el cuadrado de la escala.</p>`,
      svg: lienzo("Mapa a escala 1 : 50 000 con una barra gráfica de 0 a 1,5 kilómetros y dos pueblos separados 7 centímetros, es decir, 3,5 kilómetros", `<rect x="10" y="10" width="240" height="120" rx="10" fill="var(--card)" stroke="var(--line)"/><path d="M30 100 C 70 60, 120 110, 170 60 S 220 40, 236 30" fill="none" stroke="var(--inf)" stroke-width="3"/><circle cx="50" cy="96" r="6" fill="var(--red)"/><circle cx="214" cy="40" r="6" fill="var(--red)"/>${linea([50, 96], [214, 40], "var(--red)", 1.6, 'stroke-dasharray="4 3"')}${t(150, 122, "7 cm en el mapa", { c: "var(--red)", s: 11, b: 1 })}${t(132, 30, "1 : 50 000", { s: 14, b: 1 })}${[0, 1, 2].map((i) => `<rect x="${30 + i * 50}" y="148" width="50" height="8" fill="${i % 2 ? "var(--card)" : "var(--ink)"}" stroke="var(--ink)"/>`).join("")}${["0", "0,5", "1", "1,5 km"].map((s, i) => t(30 + i * 50, 172, s, { s: 10, c: "var(--muted)" })).join("")}${t(250, 156, "= 3,5 km", { c: "var(--red)", s: 12, b: 1, a: "end" })}`),
    },
    {
      html: `<h3>9.11 Maquetas y modelos a escala</h3><p>Una <b>maqueta</b> es un modelo tridimensional semejante a un objeto real. Su escala funciona igual que en los planos, pero ahora intervienen también volúmenes. Si la escala es 1 : n:</p><ul><li>Las <b>longitudes</b> reales son n veces las de la maqueta.</li><li>Las <b>superficies</b> reales son <mark>n²</mark> veces las de la maqueta.</li><li>Los <b>volúmenes</b> reales son <mark>n³</mark> veces los de la maqueta.</li></ul><p>Ejemplo: la maqueta de un edificio está hecha a escala 1 : 200. Si en la maqueta el edificio mide 15 cm de alto, en realidad mide 15 · 200 = 3.000 cm = 30 m. Si la fachada de la maqueta tiene 90 cm², la real tiene 90 · 200² = 3.600.000 cm² = 360 m². Y si el volumen de la maqueta es 1.500 cm³, el del edificio es 1.500 · 200³ = 12.000.000.000 cm³ = 12.000 m³.</p><p>Las maquetas se usan en arquitectura, en el diseño de barcos y aviones (se prueban en canales y túneles de viento), en el cine para efectos especiales y en el modelismo. Las miniaturas de trenes, por ejemplo, siguen escalas normalizadas, como la H0 (1 : 87) o la N (1 : 160). Los <b>cambios de unidades</b> son la principal fuente de errores en estos problemas: conviene pasar todo a la misma unidad antes de operar.</p>`,
      svg: tarjeta("Maqueta a escala 1 a 200: longitudes por 200, áreas por 40 000 y volúmenes por 8 millones", "Maqueta a escala 1 : 200", [["longitud × 200", "var(--pen)", 15, 1], ["área × 200² = × 40 000", "var(--leaf)", 14, 1], ["volumen × 200³ = × 8 000 000", "var(--red)", 13, 1], ["15 cm en la maqueta → 30 m", "var(--muted)", 12]]),
    },
    {
      html: `<h3>9.12 Homotecias</h3><p>Una <b>homotecia</b> de centro O y razón k es una transformación que lleva cada punto P a otro punto P′ alineado con O y P de modo que <mark>OP′ = k · OP</mark>. Es la forma más directa de construir una figura semejante a otra.</p><p>Para aplicarla a un polígono: se trazan semirrectas desde O hasta cada vértice y, sobre cada una, se lleva una distancia k veces la original. Al unir los nuevos vértices se obtiene la figura transformada, que es semejante a la original con razón |k| y tiene sus lados <b>paralelos</b> a los de partida.</p><ul><li>Si k &gt; 1, la figura se amplía y se aleja de O.</li><li>Si 0 &lt; k &lt; 1, se reduce y se acerca a O.</li><li>Si k es negativo, la imagen queda al otro lado de O, «dada la vuelta», como en una cámara oscura.</li></ul><p>Los proyectores son homotecias: la bombilla es el centro y la imagen de la pantalla es una ampliación de la diapositiva. Si se aleja el proyector al doble de distancia, la imagen se hace el doble de ancha y alta (k = 2) y, por tanto, cuatro veces más grande en área, por lo que se ve más tenue: la misma luz se reparte sobre una superficie cuatro veces mayor.</p>`,
      svg: lienzo("Homotecia de centro O y razón 2: el triángulo pequeño se transforma en otro el doble de grande con los lados paralelos", (() => { const O2 = [24, 150], P = [[70, 120], [110, 130], [80, 80]], Q = P.map((p) => [O2[0] + 2 * (p[0] - O2[0]), O2[1] + 2 * (p[1] - O2[1])]); return `${Q.map((q) => linea(O2, q, "var(--muted)", 1.3, 'stroke-dasharray="4 3"')).join("")}${triangulo(P, { c: "var(--pen)", fill: "var(--card)" })}${triangulo(Q, { c: "var(--red)", fill: "none" })}${pto(O2, "var(--ink)")}${t(O2[0] - 4, O2[1] + 18, "O", { s: 13, b: 1 })}${t(250, 172, "k = 2: OP′ = 2·OP", { c: "var(--red)", s: 12, b: 1, a: "end" })}`; })()),
    },
    {
      html: `<h3>9.13 Dividir un segmento en partes iguales</h3><p>El teorema de Tales proporciona un método para dividir un segmento AB en cualquier número de partes iguales, <b>sin medir</b> y sin hacer cuentas, solo con regla y compás:</p><ol><li>Desde A se traza una semirrecta auxiliar con cualquier inclinación.</li><li>Con el compás, se marcan sobre ella tantos segmentos iguales como partes queramos (por ejemplo, 5), de cualquier tamaño.</li><li>Se une la última marca con B.</li><li>Por cada una de las otras marcas se trazan <mark>paralelas</mark> a ese segmento. Donde cortan a AB quedan las divisiones.</li></ol><p>¿Por qué funciona? Las paralelas cortan a dos rectas secantes (AB y la auxiliar): por Tales, los segmentos de AB son proporcionales a los de la semirrecta, y como estos son iguales, aquellos también lo son.</p><p>El mismo método sirve para dividir un segmento en partes <b>proporcionales</b> a unos números dados: si queremos repartir una tabla de 1,20 m en tres trozos proporcionales a 2, 3 y 5, se marcan 2 + 3 + 5 = 10 divisiones iguales en la semirrecta auxiliar y se agrupan. Analíticamente, los trozos miden 120 · 2/10 = 24 cm, 36 cm y 60 cm. Delineantes, carpinteros y diseñadores gráficos han usado esta construcción durante siglos.</p>`,
      svg: lienzo("División de un segmento AB en 5 partes iguales con una semirrecta auxiliar y paralelas", (() => { const a = [20, 140], b = [240, 140], r = [200, 30]; const m = [1, 2, 3, 4, 5].map((i) => en(a, r, i / 5.4)); const last = m[4]; return `${linea(a, b, "var(--pen)", 3)}${linea(a, r, "var(--muted)", 1.6)}${m.map((p, i) => { const d = en(a, b, (i + 1) / 5); return `${linea(p, d, i === 4 ? "var(--red)" : "var(--leaf)", 1.8, i === 4 ? "" : 'stroke-dasharray="4 3"')}${pto(p, "var(--muted)", 3)}${pto(d, "var(--pen)", 3)}`; }).join("")}${t(a[0], a[1] + 20, "A", { s: 13, b: 1 })}${t(b[0], b[1] + 20, "B", { s: 13, b: 1 })}${t(last[0] + 10, last[1], "5", { c: "var(--muted)", s: 11, b: 1, a: "start" })}`; })()),
    },
    {
      html: `<h3>9.14 Semejanza en el papel, el arte y la naturaleza</h3><p>¿Por qué al doblar una hoja DIN A4 por la mitad se obtiene una A5 con exactamente la misma forma? Porque los formatos DIN están diseñados para que las dos mitades sean <b>semejantes</b> a la hoja entera. Si los lados son 1 y x, la mitad tiene lados x/2 y 1, y la semejanza exige x / 1 = 1 / (x/2), es decir, x² = 2: la razón entre los lados es <mark>√2 ≈ 1,414</mark>. Una A4 mide 297 × 210 mm, y 297/210 ≈ 1,414. Así, una fotocopiadora puede reducir una A3 a una A4 sin deformarla: razón 1/√2 ≈ 71 %.</p><p>Otra proporción famosa es el <b>número de oro</b>, φ = (1 + √5)/2 ≈ 1,618. Un rectángulo áureo tiene la propiedad de que, si se le quita un cuadrado, el rectángulo que queda es semejante al original. Se ha buscado (a veces con exageración) en el Partenón, en cuadros del Renacimiento y en logotipos actuales.</p><p>En la naturaleza, muchas formas crecen de manera semejante a sí mismas: la concha del nautilo, las piñas o los brócolis romanescos. Cada parte es una copia reducida del todo. Esta <b>autosemejanza</b> es la idea que está detrás de los <b>fractales</b>, figuras que conservan su aspecto a cualquier escala de ampliación.</p>`,
      svg: lienzo("Hoja DIN A3 dividida en dos A4, una de ellas dividida en dos A5: todas semejantes con razón raíz de 2", `<rect x="40" y="16" width="180" height="127" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${linea([130, 16], [130, 143], "var(--pen)", 2)}${linea([130, 79.5], [220, 79.5], "var(--leaf)", 2)}${t(85, 84, "A4", { c: "var(--pen)", s: 16, b: 1 })}${t(175, 52, "A5", { c: "var(--leaf)", s: 14, b: 1 })}${t(175, 116, "A5", { c: "var(--leaf)", s: 14, b: 1 })}${t(130, 168, "lado largo / lado corto = √2 ≈ 1,414", { c: "var(--red)", s: 12, b: 1 })}`),
      video: { id: "eoSvj4BbC7U", titulo: "Teorema de Tales: triángulos semejantes", canal: "Susi Profe", vistas: 1785746, busqueda: "triángulos semejantes teorema de tales" },
    },
  ],
  ejemplos: [
    { enunciado: "Los lados de un triángulo miden 5, 7 y 9 cm. Otro semejante tiene el lado menor de 12,5 cm. Halla sus otros lados y la razón de semejanza.", pasos: ["k = 12,5/5 = 2,5.", "7 · 2,5 = 17,5 cm; 9 · 2,5 = 22,5 cm."], resultado: "Lados 12,5, 17,5 y 22,5 cm; k = 2,5." },
    { enunciado: "En un triángulo ABC, AB = 18 cm, BC = 12 cm. Una paralela a BC corta AB en D con AD = 6 cm. ¿Cuánto mide DE?", pasos: ["Posición de Tales: DE/BC = AD/AB.", "DE = 12 · 6/18 = 4 cm."], resultado: "DE = 4 cm." },
    { enunciado: "Las proyecciones de los catetos sobre la hipotenusa miden 3,6 cm y 6,4 cm. Halla la altura y los catetos.", pasos: ["a = 3,6 + 6,4 = 10 cm.", "h² = 3,6 · 6,4 = 23,04 → h = 4,8 cm.", "b² = 10 · 3,6 = 36 → b = 6 cm; c² = 10 · 6,4 = 64 → c = 8 cm."], resultado: "h = 4,8 cm; catetos 6 y 8 cm (triángulo 6-8-10)." },
    { enunciado: "Un árbol proyecta una sombra de 12 m cuando una persona de 1,75 m proyecta una sombra de 2,5 m. ¿Cuánto mide el árbol?", pasos: ["H/12 = 1,75/2,5.", "H = 12 · 0,7 = 8,4 m."], resultado: "El árbol mide 8,4 m." },
    { enunciado: "Un terreno tiene en un plano a escala 1 : 2.000 una superficie de 30 cm². ¿Cuál es su superficie real en m²?", pasos: ["Las áreas se multiplican por 2.000² = 4.000.000.", "30 · 4.000.000 = 120.000.000 cm².", "1 m² = 10.000 cm² → 12.000 m²."], resultado: "12.000 m² (1,2 hectáreas)." },
    { enunciado: "Una botella tiene capacidad de 1,5 L. Otra semejante tiene una altura 0,8 veces la de la primera. ¿Qué capacidad tiene?", pasos: ["k = 0,8.", "Volumen × k³ = 0,8³ = 0,512.", "1,5 · 0,512 = 0,768 L."], resultado: "768 mL: casi la mitad, aunque sea solo un 20 % más baja." },
  ],
  errores: [
    "Emparejar lados que no se corresponden al calcular la razón de semejanza: hay que ordenar de menor a mayor.",
    "Pensar que, si las longitudes se duplican, el área también se duplica: se multiplica por 4.",
    "Usar la razón k en lugar de k³ para comparar volúmenes de cuerpos semejantes.",
    "Olvidar pasar a la misma unidad las medidas del plano y las reales al trabajar con escalas.",
    "Creer que dos figuras con los mismos ángulos son siempre semejantes: en polígonos de más de tres lados también hacen falta lados proporcionales.",
    "Confundir el teorema de la altura (h² = m · n) con el del cateto (b² = a · m).",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Son semejantes los triángulos de lados 2, 3, 4 y 5, 7,5, 10? En caso afirmativo, halla la razón.", sol: "5/2 = 7,5/3 = 10/4 = 2,5. Sí, con k = 2,5." },
    { nivel: "básico", q: "Un rectángulo mide 6 × 4 cm. Otro semejante tiene el lado mayor de 15 cm. ¿Cuánto mide el otro lado?", sol: "k = 15/6 = 2,5. Lado menor = 4 · 2,5 = 10 cm." },
    { nivel: "básico", q: "¿Son semejantes todos los rectángulos? ¿Y todos los cuadrados? Razónalo.", sol: "No todos los rectángulos: tienen los ángulos iguales, pero no siempre los lados proporcionales (6 × 4 y 6 × 2). Los cuadrados sí: ángulos rectos y la razón entre lados siempre es la misma." },
    { nivel: "básico", q: "Tres paralelas cortan a dos rectas. En la primera, los segmentos miden 4 cm y 6 cm; en la segunda, el primero mide 5 cm. Halla el segundo.", sol: "Por el teorema de Tales, los segmentos son proporcionales: 4/6 = 5/x. Despejando, x = 6 · 5/4 = 7,5 cm." },
    { nivel: "básico", q: "Un triángulo tiene ángulos de 50° y 70°. Otro tiene ángulos de 70° y 60°. ¿Son semejantes?", sol: "En el primero el tercer ángulo es 60°: 50°, 60°, 70°. En el segundo, el tercero es 50°. Tienen los mismos ángulos: son semejantes (criterio AA)." },
    { nivel: "básico", q: "Un poste de 2 m da una sombra de 3 m. A la misma hora, una torre da una sombra de 27 m. ¿Qué altura tiene?", sol: "Los rayos son paralelos: los triángulos poste-sombra y torre-sombra son semejantes. H/27 = 2/3 → H = 27 · 2/3 = 18 m." },
    { nivel: "básico", q: "Dos cuadrados tienen lados de 3 cm y 9 cm. ¿Cuál es la razón entre sus perímetros? ¿Y entre sus áreas?", sol: "k = 3: perímetros en razón 3 (12 y 36 cm); áreas en razón 9 (9 y 81 cm²)." },
    { nivel: "básico", q: "En un mapa a escala 1 : 200.000, dos ciudades están a 8,5 cm. ¿Cuál es la distancia real?", sol: "8,5 · 200.000 = 1.700.000 cm = 17 km." },
    { nivel: "básico", q: "La distancia real entre dos puntos es 3 km y en el mapa es 6 cm. ¿Cuál es la escala?", sol: "3 km = 300.000 cm. 6/300.000 = 1/50.000: escala 1 : 50.000." },
    { nivel: "básico", q: "En un triángulo rectángulo, las proyecciones de los catetos miden 2 y 8 cm. Halla la altura sobre la hipotenusa.", sol: "h² = 2 · 8 = 16 → h = 4 cm." },
    { nivel: "básico", q: "Dos cubos tienen aristas de 2 cm y 5 cm. ¿Cuántas veces mayor es el volumen del segundo?", sol: "k = 2,5; k³ = 15,625. Volúmenes 8 y 125 cm³: 125/8 = 15,625 veces." },
    { nivel: "básico", q: "Una fotografía de 10 × 15 cm se amplía a 20 × 30 cm. ¿Es una ampliación semejante? ¿Cuánto papel más necesita?", sol: "Sí: k = 2 en ambos lados. El área se multiplica por 4: 150 cm² → 600 cm²." },
    { nivel: "medio", q: "En el triángulo ABC, DE es paralelo a BC con D en AB y E en AC. Si AD = 4, DB = 6 y AE = 5, halla EC.", sol: "AD/DB = AE/EC → 4/6 = 5/EC → EC = 7,5." },
    { nivel: "medio", q: "Comprueba si son semejantes los triángulos de lados 6, 8, 11 y 9, 12, 16,5, y los de lados 4, 5, 6 y 8, 10, 13.", sol: "Primero: 9/6 = 12/8 = 16,5/11 = 1,5: semejantes. Segundo: 8/4 = 10/5 = 2, pero 13/6 ≈ 2,17: no son semejantes." },
    { nivel: "medio", q: "En un triángulo rectángulo, la hipotenusa mide 25 cm y la proyección de un cateto mide 9 cm. Halla los catetos y la altura.", sol: "m = 9, n = 16. b² = 25 · 9 = 225 → b = 15. c² = 25 · 16 = 400 → c = 20. h² = 9 · 16 = 144 → h = 12 cm." },
    { nivel: "medio", q: "Un cateto mide 12 cm y su proyección sobre la hipotenusa, 7,2 cm. Halla la hipotenusa y el otro cateto.", sol: "144 = a · 7,2 → a = 20 cm. Otro cateto: √(400 − 144) = 16 cm." },
    { nivel: "medio", q: "Una persona con los ojos a 1,5 m del suelo ve la parte más alta de un edificio reflejada en un charco que está a 2 m de ella y a 24 m del edificio. ¿Qué altura tiene el edificio?", sol: "Los ángulos de incidencia y reflexión son iguales, así que los triángulos persona-charco y edificio-charco son semejantes: h/24 = 1,5/2 → h = 24 · 0,75 = 18 m." },
    { nivel: "medio", q: "Para medir la anchura de un río, se forman dos triángulos en posición de Tales con vértice común A: en la orilla, AB = 6 m y BC = 4 m; al otro lado, el lado paralelo a BC mide DE = 9 m, con D en la prolongación de AB. Halla AD y la anchura BD del río.", sol: "Razón k = DE/BC = 9/4 = 2,25. AD = 6 · 2,25 = 13,5 m. Anchura BD = 13,5 − 6 = 7,5 m." },
    { nivel: "medio", q: "Dos triángulos semejantes tienen áreas de 18 cm² y 50 cm². Si un lado del primero mide 6 cm, ¿cuánto mide el correspondiente del segundo?", sol: "k² = 50/18 = 25/9 → k = 5/3. Lado = 6 · 5/3 = 10 cm." },
    { nivel: "medio", q: "Una pizza de 30 cm de diámetro cuesta 9 €. ¿Qué precio sería justo para una de 40 cm, a igual precio por superficie?", sol: "k = 4/3; k² = 16/9. 9 · 16/9 = 16 €." },
    { nivel: "medio", q: "Una maqueta de un barco a escala 1 : 150 mide 42 cm de largo. ¿Cuánto mide el barco real? Si la vela de la maqueta tiene 60 cm², ¿cuánto tiene la real?", sol: "42 · 150 = 6.300 cm = 63 m. Área: 60 · 150² = 1.350.000 cm² = 135 m²." },
    { nivel: "medio", q: "Una piscina mide 25 × 12,5 m. ¿Qué dimensiones tendrá en un plano a escala 1 : 250?", sol: "2.500 cm/250 = 10 cm y 1.250 cm/250 = 5 cm: 10 × 5 cm." },
    { nivel: "medio", q: "Divide un segmento de 14 cm en partes proporcionales a 2, 5 y 7. ¿Cuánto mide cada una?", sol: "2 + 5 + 7 = 14 partes de 1 cm: 2 cm, 5 cm y 7 cm." },
    { nivel: "medio", q: "Aplica una homotecia de centro O(0, 0) y razón 3 al triángulo A(1, 2), B(3, 1), C(2, 4). ¿Qué relación hay entre sus áreas?", sol: "A′(3, 6), B′(9, 3), C′(6, 12). Las áreas están en razón 3² = 9." },
    { nivel: "avanzado", q: "Las bases de un trapecio miden 6 cm y 15 cm. Sus lados no paralelos se prolongan hasta cortarse en un punto P. Si la altura del trapecio es 6 cm, ¿a qué distancia de la base mayor está P?", sol: "P forma con cada base dos triángulos en posición de Tales, con razón 6/15 = 0,4. Si x es la distancia de P a la base mayor, la distancia a la menor es x − 6: (x − 6)/x = 0,4 → x − 6 = 0,4x → 0,6x = 6 → x = 10 cm." },
    { nivel: "avanzado", q: "Un triángulo tiene lados de 8, 10 y 12 cm. Se quiere construir otro semejante cuya área sea 4 veces menor. ¿Cuánto medirán sus lados? ¿Y si el área tuviera que ser el doble?", sol: "Área 4 veces menor: k² = 1/4 → k = 1/2: lados 4, 5 y 6 cm. Área doble: k² = 2 → k = √2 ≈ 1,414: lados ≈ 11,31, 14,14 y 16,97 cm." },
    { nivel: "avanzado", q: "Una hoja A4 mide 297 × 210 mm. Calcula las medidas de una A3 y de una A5 y comprueba que son semejantes a la A4.", sol: "A3 = 420 × 297 mm (doble de área); A5 = 210 × 148,5 mm (mitad). Razones: 420/297 ≈ 1,414; 297/210 ≈ 1,414; 210/148,5 ≈ 1,414. Todas tienen la proporción √2." },
    { nivel: "avanzado", q: "Demuestra que la altura sobre la hipotenusa cumple h = b · c / a.", sol: "El área del triángulo se puede calcular de dos formas: con los catetos, b · c / 2, o con la hipotenusa como base, a · h / 2. Igualando: a · h = b · c → h = b · c / a." },
    { nivel: "avanzado", q: "Un cono de 12 cm de altura se corta con un plano paralelo a la base a 4 cm del vértice. ¿Qué fracción del volumen del cono queda en el cono pequeño? ¿Y en el tronco?", sol: "El cono pequeño es semejante con k = 4/12 = 1/3. Su volumen es (1/3)³ = 1/27 del total. El tronco es 26/27." },
    { nivel: "avanzado", q: "Una estatua de bronce de 2 m de altura pesa 1.200 kg. ¿Cuánto pesaría una réplica semejante de 50 cm del mismo material? ¿Y cuánta pintura necesitaría en comparación?", sol: "k = 0,5/2 = 1/4. Peso: 1.200 · (1/4)³ = 18,75 kg. Pintura (área): (1/4)² = 1/16 de la original." },
    { nivel: "avanzado", q: "En un triángulo rectángulo los catetos miden 5 y 12 cm. Calcula la hipotenusa, la altura sobre ella y las proyecciones de los catetos.", sol: "a = 13. h = 5 · 12/13 ≈ 4,62 cm. m = 25/13 ≈ 1,92 cm; n = 144/13 ≈ 11,08 cm. Comprobación: m + n = 13." },
    { nivel: "avanzado", q: "Un rectángulo tiene la propiedad de que, al quitarle un cuadrado de lado igual a su lado menor, el rectángulo restante es semejante al original. Si el lado menor mide 1, halla el mayor.", sol: "Lados 1 y x; el resto tiene lados x − 1 y 1. Semejanza: x/1 = 1/(x − 1) → x² − x − 1 = 0 → x = (1 + √5)/2 ≈ 1,618, el número de oro." },
    { nivel: "avanzado", q: "Eratóstenes observó que en Siena el Sol caía vertical, mientras que en Alejandría, 800 km al norte, una vara formaba con su sombra un ángulo de unos 7,2°. Si ese ángulo es la fracción del círculo que separa ambas ciudades, estima la circunferencia de la Tierra.", sol: "7,2° es 7,2/360 = 1/50 de la circunferencia. Circunferencia ≈ 50 · 800 = 40.000 km, muy cercana al valor real (unos 40.075 km)." },
    { nivel: "avanzado", q: "Un proyector a 3 m de la pantalla da una imagen de 1,2 m de ancho. ¿A qué distancia hay que colocarlo para que la imagen tenga 2 m de ancho? ¿Cuántas veces menos luminosa se verá?", sol: "Homotecia: anchura proporcional a la distancia. d = 3 · 2/1,2 = 5 m. k = 5/3; el área se multiplica por 25/9 ≈ 2,78, así que la luminosidad por unidad de superficie es unas 2,78 veces menor." },
  ],
  quiz: reparte([
    { q: "Dos figuras semejantes tienen…", o: ["el mismo tamaño", "la misma forma", "el mismo perímetro", "la misma área"], a: 1, e: "Ángulos iguales y lados proporcionales." },
    { q: "La razón de semejanza entre triángulos de lados 4, 6, 8 y 6, 9, 12 es…", o: ["1,5", "2", "0,5", "3"], a: 0, e: "6/4 = 1,5." },
    { q: "Si k < 1, la figura obtenida es…", o: ["una ampliación", "una reducción", "igual", "no semejante"], a: 1, e: "Los lados se hacen más pequeños." },
    { q: "El teorema de Tales trata de…", o: ["rectas paralelas que cortan a dos secantes", "ángulos de un triángulo", "áreas de círculos", "triángulos rectángulos"], a: 0, e: "Los segmentos son proporcionales." },
    { q: "Dos triángulos son semejantes si tienen…", o: ["un ángulo igual", "dos ángulos iguales", "un lado igual", "el mismo perímetro"], a: 1, e: "Criterio AA." },
    { q: "Si una paralela a BC corta a AB y AC, el triángulo pequeño es…", o: ["igual al grande", "semejante al grande", "rectángulo", "isósceles"], a: 1, e: "Posición de Tales." },
    { q: "En un triángulo rectángulo, h² =", o: ["m + n", "m · n", "a · m", "b · c"], a: 1, e: "Teorema de la altura." },
    { q: "El teorema del cateto dice que b² =", o: ["a · m", "m · n", "a + m", "h · m"], a: 0, e: "Hipotenusa por la proyección del cateto." },
    { q: "Si las proyecciones miden 4 y 9, la altura mide…", o: ["6", "13", "36", "5"], a: 0, e: "√36." },
    { q: "Si los lados se multiplican por 3, el área se multiplica por…", o: ["3", "6", "9", "27"], a: 2, e: "k²." },
    { q: "Si las aristas se duplican, el volumen se multiplica por…", o: ["2", "4", "6", "8"], a: 3, e: "k³." },
    { q: "En una escala 1 : 25.000, 4 cm representan…", o: ["1 km", "100 m", "10 km", "250 m"], a: 0, e: "100.000 cm." },
    { q: "Una escala 1 : 50 es propia de…", o: ["un mapa de España", "un plano de una casa", "un mapa del mundo", "un callejero de una ciudad"], a: 1, e: "Escala grande: mucho detalle." },
    { q: "La ventaja de la escala gráfica es que…", o: ["es más exacta", "sigue valiendo al ampliar el mapa", "no necesita unidades", "mide áreas"], a: 1, e: "Se amplía con el mapa." },
    { q: "En una homotecia de razón 2, OP′ =", o: ["OP/2", "OP + 2", "2 · OP", "OP²"], a: 2, e: "Definición de homotecia." },
    { q: "En una homotecia, los lados de la figura imagen son…", o: ["perpendiculares a los originales", "paralelos a los originales", "iguales", "de longitud aleatoria"], a: 1, e: "Por el teorema de Tales." },
    { q: "La razón entre los lados de un DIN A4 es aproximadamente…", o: ["1,5", "1,414", "1,618", "2"], a: 1, e: "√2." },
    { q: "El número de oro vale aproximadamente…", o: ["1,414", "3,14", "1,618", "2,718"], a: 2, e: "(1 + √5)/2." },
    { q: "Una persona de 1,8 m da una sombra de 1,2 m; un árbol da 8 m de sombra. El árbol mide…", o: ["12 m", "5,3 m", "14,4 m", "9,6 m"], a: 0, e: "8 · 1,8/1,2." },
    { q: "Para dividir un segmento en partes iguales con regla y compás se usa…", o: ["Pitágoras", "Tales", "el teorema de la altura", "la escala"], a: 1, e: "Paralelas que cortan a dos rectas." },
  ]),
  examen: reparte([
    { q: "Un triángulo de lados 3, 5, 7 se amplía con razón 4. Su perímetro es…", o: ["60", "15", "240", "30"], a: 0, e: "15 · 4." },
    { q: "Dos triángulos semejantes tienen áreas 12 y 75. La razón de semejanza es…", o: ["2,5", "6,25", "5", "1,25"], a: 0, e: "√(75/12) = √6,25." },
    { q: "La hipotenusa mide 20 y una proyección 5. El cateto correspondiente mide…", o: ["10", "100", "15", "√75"], a: 0, e: "b² = 20 · 5 = 100." },
    { q: "Con AD = 3, AB = 9 y BC = 12 en posición de Tales, DE =", o: ["4", "36", "6", "3"], a: 0, e: "12 · 3/9." },
    { q: "Un mapa a escala 1 : 100.000 muestra 2 cm². La superficie real es…", o: ["2 km²", "20 km²", "200 km²", "0,2 km²"], a: 0, e: "1 cm = 1 km → 1 cm² = 1 km²." },
    { q: "Una maqueta 1 : 50 tiene un volumen de 2 dm³. El objeto real tiene…", o: ["250 m³", "100 dm³", "5.000 dm³", "25 m³"], a: 0, e: "2 · 125.000 = 250.000 dm³ = 250 m³." },
    { q: "Los triángulos de lados 5, 6, 8 y 10, 12, 15…", o: ["son semejantes", "no son semejantes", "son iguales", "son rectángulos"], a: 1, e: "15/8 ≠ 2." },
    { q: "Al cortar un cono por la mitad de su altura con un plano paralelo a la base, el cono pequeño tiene…", o: ["1/2 del volumen", "1/4 del volumen", "1/8 del volumen", "1/6 del volumen"], a: 2, e: "(1/2)³." },
  ], 2),
  feynman: ["Qué condiciones deben cumplir dos figuras para ser semejantes", "Qué dice el teorema de Tales y cómo se usa para medir alturas", "Por qué basta con dos ángulos iguales para que dos triángulos sean semejantes", "Por qué las áreas van con k² y los volúmenes con k³", "Cómo se interpreta la escala 1 : 50.000 de un mapa"],
  glosario: [
    ["Figuras semejantes", "Las que tienen la misma forma: ángulos iguales y lados proporcionales."],
    ["Razón de semejanza", "Cociente k entre lados correspondientes de dos figuras semejantes."],
    ["Teorema de Tales", "Paralelas que cortan a dos secantes determinan segmentos proporcionales."],
    ["Posición de Tales", "Dos triángulos que comparten un ángulo y tienen los lados opuestos paralelos."],
    ["Criterio AA", "Dos triángulos con dos ángulos iguales son semejantes."],
    ["Criterio LLL", "Dos triángulos con los tres lados proporcionales son semejantes."],
    ["Criterio LAL", "Dos lados proporcionales y el ángulo comprendido igual."],
    ["Proyección de un cateto", "Segmento de la hipotenusa entre un vértice y el pie de la altura."],
    ["Teorema de la altura", "h² = m · n."],
    ["Teorema del cateto", "b² = a · m."],
    ["Escala", "Razón entre una medida del plano y la medida real correspondiente."],
    ["Escala gráfica", "Barra que indica la distancia real que representa cada segmento."],
    ["Maqueta", "Modelo tridimensional semejante a un objeto real."],
    ["Homotecia", "Transformación de centro O y razón k que lleva P a P′ con OP′ = k · OP."],
    ["Número de oro", "φ = (1 + √5)/2 ≈ 1,618."],
    ["Autosemejanza", "Propiedad de las figuras cuyas partes son copias reducidas del todo."],
  ],
  situacion: {
    titulo: "Midiendo el instituto sin escaleras",
    reto: "El equipo directivo quiere conocer la altura de varios elementos del centro (el edificio principal, un árbol del patio, una farola, la canasta) para un proyecto de mejora, pero no se puede subir a ellos. Vuestro grupo deberá medirlos usando solo la semejanza y comparar la precisión de distintos métodos.",
    pasos: [
      "Elegid tres elementos altos del centro y medid con cinta métrica todo lo que sí sea accesible.",
      "Aplicad el método de la sombra: medid a la misma hora la sombra de un palo conocido y la del objeto.",
      "Aplicad el método del espejo y el de la vara, haciendo un esquema con los triángulos semejantes.",
      "Calculad las alturas con cada método y comparad los resultados entre sí.",
      "Dibujad un plano a escala del patio con los elementos medidos y su escala gráfica.",
    ],
    producto: "Un informe con los esquemas, los cálculos, una tabla comparativa de métodos y un plano a escala del patio.",
    evaluacion: [
      "Identifica correctamente los triángulos semejantes en cada método y plantea las proporciones.",
      "Realiza las mediciones y los cálculos con precisión y unidades adecuadas.",
      "Compara los métodos y explica las causas de las diferencias (errores de medida, terreno irregular…).",
      "Elabora un plano a escala correcto y legible, con escala numérica y gráfica.",
    ],
  },
  figura: require("./_matb-base-semejanza").figura,
  video: { id: "staL7w-eT58", titulo: "Teorema de Tales, súper fácil", canal: "Daniel Carreón", vistas: 4840130, megusta: 131468, busqueda: "teorema de tales semejanza" },
  mapa: mapa("SEMEJANZA", "var(--bac)", [
    ["Tales", "paralelas · segmentos proporcionales", "var(--pen)"],
    ["Criterios", "AA · LLL · LAL", "var(--leaf)"],
    ["Rectángulos", "h² = m·n · b² = a·m", "var(--red)"],
    ["Escalas", "k · k² · k³ · homotecia", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Figuras semejantes", "Ángulos iguales y lados proporcionales."],
    ["Razón de semejanza", "k = lado de la copia / lado original."],
    ["Teorema de Tales", "Paralelas que cortan a dos secantes: a/b = a′/b′."],
    ["Criterio AA", "Dos ángulos iguales bastan para que dos triángulos sean semejantes."],
    ["Criterio LLL", "Tres lados proporcionales."],
    ["Teorema de la altura", "h² = m · n"],
    ["Teorema del cateto", "b² = a · m; c² = a · n"],
    ["Perímetros, áreas y volúmenes", "Razones k, k² y k³."],
    ["Escala 1 : n", "1 unidad del plano = n unidades reales."],
    ["Método de la sombra", "H = p · S / s"],
    ["Homotecia de razón k", "OP′ = k · OP; lados paralelos."],
    ["Formato DIN A", "Lados en razón √2: al doblarse, la mitad es semejante."],
  ],
  familias: ["Medid juntos la altura de un árbol o un edificio con el método de la sombra en un día soleado.", "Buscad un mapa o una app con escala y calculad distancias reales entre lugares conocidos.", "Comparad el precio por superficie de dos tamaños de pizza.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido de la medida y sentido espacial: semejanza de figuras, teorema de Tales, criterios de semejanza de triángulos, teoremas del cateto y de la altura, razón entre longitudes, áreas y volúmenes de figuras semejantes, escalas y homotecias (RD 217/2022, Matemáticas B de 4º, saberes básicos B. Sentido de la medida y C. Sentido espacial).",
    ideas: ["Salida al patio para medir alturas con sombras, espejos y varas, comparando resultados.", "Construcción con GeoGebra de homotecias con deslizador de razón.", "Análisis de precios de productos en distintos tamaños (pizzas, botellas) para trabajar k² y k³.", "Taller de planos a escala del aula y maquetas sencillas en colaboración con Tecnología o Plástica."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Teorema de Tales, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teorema_de_Tales" },
    { t: "Formato de papel ISO 216 (DIN A), Wikipedia en español", url: "https://es.wikipedia.org/wiki/ISO_216" },
  ],
  revisado: "2026-11-13",
};
