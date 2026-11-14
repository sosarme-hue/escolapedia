// Matemáticas 2º ESO · El teorema de Pitágoras. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, trirect, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const elementos = trirect("Triángulo rectángulo: catetos a y b forman el ángulo recto y la hipotenusa c es el lado opuesto", { ta: "cateto a", tb: "cateto b", tc: "hipotenusa c", a: 150, b: 100, x: 70, y: 140, h: 176, extra: tx(130, 168, "c es el lado mayor · ángulo recto de 90°", { fs: 11.5, c: "var(--muted)" }) });

const demostracion = lienzo("Demostración visual: dos cuadrados iguales de lado a más b; al quitar cuatro triángulos queda c al cuadrado o a al cuadrado más b al cuadrado", `
  <rect x="14" y="30" width="110" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
  <polygon points="14,30 80,30 14,74" fill="var(--sun)" fill-opacity=".45"/><polygon points="80,30 124,30 124,96" fill="var(--sun)" fill-opacity=".45"/><polygon points="124,96 124,140 58,140" fill="var(--sun)" fill-opacity=".45"/><polygon points="58,140 14,140 14,74" fill="var(--sun)" fill-opacity=".45"/>
  <polygon points="80,30 124,96 58,140 14,74" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="1.6"/>${tx(69, 91, "c²", { fs: 16, fam: D, c: "var(--red)" })}
  <rect x="136" y="30" width="110" height="110" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
  <rect x="136" y="30" width="66" height="66" fill="var(--pen)" fill-opacity=".3"/><rect x="202" y="96" width="44" height="44" fill="var(--leaf)" fill-opacity=".35"/>
  <polygon points="202,30 246,30 246,96" fill="var(--sun)" fill-opacity=".45"/><polygon points="202,30 202,96 246,96" fill="var(--sun)" fill-opacity=".45"/><polygon points="136,96 202,96 136,140" fill="var(--sun)" fill-opacity=".45"/><polygon points="202,96 202,140 136,140" fill="var(--sun)" fill-opacity=".45"/>
  ${tx(169, 68, "a²", { fs: 15, fam: D, c: "var(--pen)" })}${tx(224, 124, "b²", { fs: 13, fam: D, c: "var(--leaf)" })}
  ${tx(130, 18, "Los mismos 4 triángulos en dos cuadrados iguales", { fs: 11, c: "var(--muted)" })}${tx(130, 162, "c² = a² + b²", { fs: 15, fam: D })}`, 176);

const ternas = cajas("Ternas pitagóricas: números naturales que cumplen el teorema", [
  ["3, 4, 5", ["9 + 16 = 25"], "var(--pen)"],
  ["5, 12, 13", ["25 + 144 = 169"], "var(--leaf)"],
  ["6, 8, 10", ["36 + 64 = 100"], "var(--sun)"],
  ["8, 15, 17", ["64 + 225 = 289"], "var(--red)"],
], "Ternas pitagóricas");

const hipotenusa = trirect("Calcular la hipotenusa con catetos 6 y 8: la raíz de 36 más 64 es 10", { ta: "a = 8", tb: "b = 6", tc: "c = ?", a: 160, b: 120, y: 150, extra: tx(180, 40, "c = √(8² + 6²) = 10", { fs: 12, c: "var(--red)", max: 130 }) });

const cateto = trirect("Calcular un cateto: con hipotenusa 13 y cateto 5, el otro cateto mide 12", { ta: "a = ?", tb: "b = 5", tc: "c = 13", a: 160, b: 80, y: 120, c: "var(--leaf)", h: 172, extra: tx(130, 160, "a = √(13² − 5²) = √144 = 12", { fs: 13, c: "var(--leaf)" }) });

const clasificar = comparar("Clasificar un triángulo por sus ángulos comparando el cuadrado del lado mayor con la suma de los otros dos", [
  ["c² = a² + b²", ["rectángulo", "3, 4, 5"], "var(--leaf)"],
  ["c² < a² + b²", ["acutángulo", "4, 5, 6"], "var(--pen)"],
  ["c² > a² + b²", ["obtusángulo", "3, 4, 6"], "var(--red)"],
], "¿Qué tipo de triángulo?");

const diagonal = lienzo("Diagonal de un rectángulo de 12 por 5: mide 13", `
  <rect x="30" y="40" width="170" height="75" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.4"/>
  <path d="M30 115 L200 40" stroke="var(--red)" stroke-width="2.6"/>
  ${tx(115, 132, "12 cm", { fs: 12.5, c: "var(--pen)" })}${tx(208, 82, "5 cm", { fs: 12.5, c: "var(--pen)", a: "start", max: 40 })}${tx(108, 70, "d", { fs: 15, c: "var(--red)", fam: D })}
  ${tx(130, 160, "d = √(12² + 5²) = √169 = 13 cm", { fs: 13 })}`, 172);

const isosceles = lienzo("Altura de un triángulo isósceles: divide la base en dos mitades y forma dos triángulos rectángulos", `
  <polygon points="130,24 50,140 210,140" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2.4"/>
  <path d="M130 24 V140" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/><path d="M130 128 H142 V140" fill="none" stroke="var(--ink)" stroke-width="1.4"/>
  ${tx(80, 78, "10", { fs: 13, c: "var(--leaf)" })}${tx(182, 78, "10", { fs: 13, c: "var(--leaf)" })}${tx(90, 156, "6", { fs: 12.5, c: "var(--muted)" })}${tx(170, 156, "6", { fs: 12.5, c: "var(--muted)" })}${tx(140, 90, "h", { fs: 15, fam: D, c: "var(--red)", a: "start" })}
  ${tx(130, 174, "h = √(10² − 6²) = √64 = 8", { fs: 12.5 })}`, 184);

const hexagono = lienzo("Apotema de un hexágono regular de lado 6: la raíz de 36 menos 9, unos 5,2", `
  <polygon points="${[0, 1, 2, 3, 4, 5].map((i) => `${(100 + 60 * Math.cos((Math.PI / 3) * i)).toFixed(1)},${(90 + 60 * Math.sin((Math.PI / 3) * i)).toFixed(1)}`).join(" ")}" fill="var(--inf)" fill-opacity=".12" stroke="var(--inf)" stroke-width="2.4"/>
  <path d="M100 90 L130 38" stroke="var(--pen)" stroke-width="2"/><path d="M100 90 L100 38" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
  ${tx(124, 70, "6", { fs: 12, c: "var(--pen)", a: "start" })}${tx(94, 66, "ap", { fs: 12, c: "var(--red)", a: "end", max: 30 })}${tx(115, 26, "3", { fs: 11, c: "var(--muted)" })}
  ${tx(208, 76, "ap = √(6² − 3²)", { fs: 12, max: 100 })}${tx(208, 98, "= √27 ≈ 5,2", { fs: 12, c: "var(--red)", max: 100 })}`, 170);

const circulo = lienzo("Pitágoras en la circunferencia: distancia del centro a una cuerda", `
  <circle cx="100" cy="88" r="62" fill="var(--sun)" fill-opacity=".1" stroke="var(--sun)" stroke-width="2.4"/>
  <path d="M52 49 H148" stroke="var(--pen)" stroke-width="2.4"/><path d="M100 88 V49" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/><path d="M100 88 L148 49" stroke="var(--leaf)" stroke-width="2"/>
  <circle cx="100" cy="88" r="3" fill="var(--ink)"/>${tx(124, 44, "cuerda 16", { fs: 10.5, c: "var(--pen)", max: 70 })}${tx(132, 76, "r = 10", { fs: 10.5, c: "var(--leaf)", a: "start", max: 50 })}${tx(96, 74, "d", { fs: 12, c: "var(--red)", a: "end" })}
  ${tx(210, 100, "d = √(10² − 8²)", { fs: 11.5, max: 96 })}${tx(210, 120, "= 6", { fs: 13, c: "var(--red)", max: 96 })}`, 170);

const coord = lienzo("Distancia entre dos puntos del plano usando Pitágoras: de A(1,1) a B(5,4) hay 5 unidades", `
  ${[...Array(7)].map((_, i) => `<path d="M${30 + i * 28} 20 V156 M30 ${156 - i * 22.6} H198" stroke="var(--line)" stroke-width="0.8"/>`).join("")}
  <path d="M58 133 L170 65" stroke="var(--red)" stroke-width="2.6"/><path d="M58 133 H170 V65" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="58" cy="133" r="4" fill="var(--ink)"/><circle cx="170" cy="65" r="4" fill="var(--ink)"/>${tx(52, 128, "A", { fs: 11, a: "end" })}${tx(176, 60, "B", { fs: 11, a: "start" })}
  ${tx(114, 148, "4", { fs: 11, c: "var(--pen)" })}${tx(180, 104, "3", { fs: 11, c: "var(--pen)", a: "start" })}
  ${tx(230, 92, "d = 5", { fs: 14, fam: D, c: "var(--red)", max: 56 })}${tx(230, 112, "√(4² + 3²)", { fs: 10, c: "var(--muted)", max: 56 })}`, 170);

const problemas = flujo("Pasos para resolver un problema con el teorema de Pitágoras", [
  ["Dibujar la situación", "ini"], ["Buscar el triángulo rectángulo", "proc"], ["¿Falta la hipotenusa?", "dec", "sí: sumar", "no: restar"], ["Aplicar c² = a² + b²", "proc"], ["Comprobar y dar unidades", "es"],
], "Resolver problemas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "El teorema de Pitágoras",
  minutos: 100,
  objetivos: [
    "Reconocer los elementos de un triángulo rectángulo",
    "Enunciar, comprender y justificar el teorema de Pitágoras",
    "Calcular la hipotenusa o un cateto conocidos los otros dos lados",
    "Usar el recíproco para saber si un triángulo es rectángulo, acutángulo u obtusángulo",
    "Aplicar el teorema en figuras planas, en el espacio y en problemas reales",
  ],
  claves: ["triángulo rectángulo", "hipotenusa", "cateto", "teorema de Pitágoras", "terna pitagórica", "apotema", "diagonal"],
  pregunta: {
    texto: "Una escalera de 5 m se apoya en una pared con el pie a 3 m de ella. ¿A qué altura llega?",
    respuesta: "La escalera es la hipotenusa: h = √(5² − 3²) = √(25 − 9) = √16 = <mark>4 m</mark>. Pared, suelo y escalera forman un triángulo rectángulo.",
  },
  lectura: {
    titulo: "La cuerda de los doce nudos",
    html: `<p>En el antiguo Egipto, cada año las crecidas del Nilo borraban las lindes de los campos. Para volver a marcarlas, unos especialistas llamados <b>harpedonaptas</b>, «tensadores de cuerdas», usaban una herramienta muy sencilla: una cuerda con 12 nudos a la misma distancia. Si la tensaban formando un triángulo de lados 3, 4 y 5 espacios, obtenían un <b>ángulo recto</b> perfecto en la esquina entre los lados 3 y 4.</p><p>Muchos siglos después, en el siglo VI a. C., la escuela de <b>Pitágoras de Samos</b> dio el paso decisivo: demostró que esa relación no es casualidad, sino que se cumple en <b>todos</b> los triángulos rectángulos. El cuadrado del lado mayor es igual a la suma de los cuadrados de los otros dos. Las tablillas babilónicas y textos chinos muestran que otras culturas también conocían la relación, pero la demostración general se atribuye a los pitagóricos.</p><p>Hoy el teorema de Pitágoras es probablemente el más famoso de las matemáticas, con cientos de demostraciones distintas. Lo usan albañiles para comprobar esquinas, carpinteros, arquitectos, navegadores GPS y diseñadores de videojuegos para calcular distancias. En este tema aprenderás a usarlo tú.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 El triángulo rectángulo</h3><p>Un <b>triángulo rectángulo</b> es el que tiene un <b>ángulo recto</b> (de 90°). Sus lados reciben nombres especiales:</p><ul><li>Los dos lados que forman el ángulo recto se llaman <b>catetos</b> (a y b).</li><li>El lado opuesto al ángulo recto se llama <b>hipotenusa</b> (c). Es siempre el lado <b>más largo</b>.</li></ul><p>Como los ángulos de un triángulo suman 180°, los otros dos ángulos de un triángulo rectángulo suman 90°: son <b>agudos</b> y <b>complementarios</b>.</p><p>Los triángulos rectángulos aparecen por todas partes: una escalera apoyada en una pared, la diagonal de una pantalla, una rampa, la sombra de un edificio… Cada vez que hay una línea vertical y otra horizontal, hay un ángulo recto y es fácil encontrar un triángulo rectángulo escondido.</p>`, svg: elementos },
    { html: `<h3>1.2 El teorema de Pitágoras</h3><p>El <b>teorema de Pitágoras</b> dice que en todo triángulo rectángulo, <mark>el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos</mark>:</p><p style="text-align:center"><b>c² = a² + b²</b></p><p>Geométricamente: si sobre cada lado construimos un cuadrado, el área del cuadrado de la hipotenusa es igual a la suma de las áreas de los cuadrados de los catetos. Con lados 3, 4 y 5: 9 + 16 = 25.</p><p>Es importante recordar que el teorema solo se cumple en triángulos <b>rectángulos</b>, y que la letra que va sola en un lado de la igualdad debe ser siempre la <b>hipotenusa</b>. Si los lados se llaman de otra forma (x, y, z), busca primero cuál es el lado opuesto al ángulo recto.</p>`, svg: psvg("pitagoras", 1), video: pvid("pitagoras", 1) },
    { html: `<h3>1.3 ¿Por qué es cierto? Una demostración</h3><p>Hay cientos de demostraciones del teorema. Una de las más visuales usa dos cuadrados iguales de lado a + b:</p><ul><li>En el primero colocamos 4 triángulos rectángulos iguales (de catetos a y b) en las esquinas. El hueco central es un cuadrado de lado c: su área es <b>c²</b>.</li><li>En el segundo colocamos los mismos 4 triángulos formando dos rectángulos. Los huecos son dos cuadrados, de lados a y b: sus áreas suman <b>a² + b²</b>.</li></ul><p>Como los dos cuadrados grandes son iguales y en los dos hemos quitado los mismos 4 triángulos, lo que queda tiene la misma área: <mark>c² = a² + b²</mark>.</p><p>Esta demostración no usa medidas concretas, así que vale para cualquier triángulo rectángulo. Así es como trabajan los matemáticos: no basta con comprobar unos casos, hay que demostrar que se cumple siempre.</p>`, svg: demostracion },
    { html: `<h3>1.4 Ternas pitagóricas</h3><p>Una <b>terna pitagórica</b> es un grupo de tres números naturales que cumplen el teorema: a² + b² = c². La más famosa es 3, 4, 5, la de la cuerda egipcia. Otras son 5, 12, 13; 8, 15, 17 y 7, 24, 25.</p><p>Si se multiplican los tres números de una terna por el mismo natural, se obtiene otra terna: de 3, 4, 5 salen 6, 8, 10; 9, 12, 15; 30, 40, 50… Son triángulos semejantes, con la misma forma y distinto tamaño.</p><p>Las ternas son muy útiles en la práctica: un albañil que quiere comprobar si una esquina es recta mide 60 cm en una pared, 80 cm en la otra y comprueba que la distancia entre las marcas sea 100 cm. Si es así, el ángulo es recto.</p><p>Hay infinitas ternas pitagóricas. Euclides ya conocía una fórmula para generarlas todas.</p>`, svg: ternas },
    { html: `<h3>2.1 Calcular la hipotenusa</h3><p>Si conocemos los dos catetos, la hipotenusa se calcula sumando sus cuadrados y haciendo la raíz cuadrada: <mark>c = √(a² + b²)</mark>.</p><p>Ejemplo: catetos 6 cm y 8 cm. c² = 36 + 64 = 100, así que c = √100 = 10 cm.</p><p>Muchas veces la raíz no es exacta. Con catetos 2 y 3: c = √(4 + 9) = √13 ≈ 3,61. Se puede dejar como √13 (valor exacto) o dar una aproximación con la calculadora.</p><p>Comprobación de sentido común: la hipotenusa debe ser <b>mayor</b> que cada cateto, pero <b>menor</b> que su suma. Si con catetos 6 y 8 te sale 14 o 5, hay un error. Un fallo típico es sumar los catetos sin elevarlos al cuadrado, o hacer √36 + √64 = 14, que es incorrecto porque la raíz de una suma no es la suma de las raíces.</p>`, svg: hipotenusa, video: pvid("pitagoras", 2) },
    { html: `<h3>2.2 Calcular un cateto</h3><p>Si conocemos la hipotenusa y un cateto, despejamos el otro cateto: como c² = a² + b², entonces a² = c² − b² y <mark>a = √(c² − b²)</mark>.</p><p>Ejemplo: hipotenusa 13 cm y un cateto 5 cm. a² = 169 − 25 = 144, así que a = 12 cm.</p><p>La diferencia clave con el apartado anterior es la operación: para la hipotenusa se <b>suma</b>; para un cateto se <b>resta</b> (el cuadrado de la hipotenusa menos el del cateto conocido, siempre en ese orden).</p><p>Si al restar te sale un número negativo, has colocado mal los datos: el número más grande debe ser la hipotenusa. Ejemplo de problema: una escalera de 5 m apoyada en una pared con el pie a 3 m. La escalera es la hipotenusa: altura = √(25 − 9) = 4 m.</p>`, svg: cateto },
    { html: `<h3>2.3 ¿Es rectángulo? El recíproco del teorema</h3><p>El teorema también funciona al revés: <b>si en un triángulo se cumple c² = a² + b²</b> (siendo c el lado mayor), <b>el triángulo es rectángulo</b>. Es el <b>recíproco</b> del teorema de Pitágoras.</p><p>Ejemplo: ¿es rectángulo un triángulo de lados 7, 24 y 25? 25² = 625 y 7² + 24² = 49 + 576 = 625. Sí, lo es.</p><p>¿Y uno de lados 6, 7 y 9? 9² = 81, pero 36 + 49 = 85. No se cumple: no es rectángulo.</p><p>Esta propiedad es la que usaban los egipcios con la cuerda de 12 nudos y la que siguen usando los albañiles para trazar ángulos rectos. Para aplicarla bien, identifica primero el lado <b>mayor</b>, porque solo él puede ser la hipotenusa.</p>`, svg: psvg("pitagoras", 4) },
    { html: `<h3>2.4 Clasificar triángulos por sus ángulos</h3><p>Comparando el cuadrado del lado mayor (c) con la suma de los cuadrados de los otros dos, podemos saber cómo es el ángulo mayor del triángulo:</p><ul><li>Si <b>c² = a² + b²</b>, el triángulo es <b>rectángulo</b>.</li><li>Si <b>c² &lt; a² + b²</b>, es <b>acutángulo</b> (los tres ángulos son agudos). Ejemplo: 4, 5, 6 → 36 &lt; 41.</li><li>Si <b>c² &gt; a² + b²</b>, es <b>obtusángulo</b> (tiene un ángulo obtuso). Ejemplo: 3, 4, 6 → 36 &gt; 25.</li></ul><p>La idea es intuitiva: si «abrimos» el ángulo entre a y b más allá de 90°, el lado opuesto se alarga y su cuadrado supera a² + b²; si lo «cerramos», se acorta.</p><p>Recuerda también que para que tres segmentos formen un triángulo, el mayor debe ser menor que la suma de los otros dos (desigualdad triangular). Con 2, 3 y 6 no hay triángulo.</p>`, svg: clasificar },
    { html: `<h3>3.1 Pitágoras en rectángulos, cuadrados y rombos</h3><p>Muchas figuras planas esconden triángulos rectángulos:</p><ul><li>La <b>diagonal de un rectángulo</b> lo divide en dos triángulos rectángulos: d = √(b² + h²). Rectángulo de 12 × 5: d = 13.</li><li>La <b>diagonal de un cuadrado</b> de lado l: d = √(l² + l²) = l√2 ≈ 1,41 · l.</li><li>En un <b>rombo</b>, las diagonales se cortan perpendicularmente en su punto medio, formando 4 triángulos rectángulos de catetos D/2 y d/2 e hipotenusa el lado. Rombo de diagonales 16 y 12: lado = √(8² + 6²) = 10.</li></ul><p>Las pantallas de televisores y móviles se miden por su diagonal en pulgadas. Una pantalla de 16:9 de 55 pulgadas mide unos 48 × 27 pulgadas: √(48² + 27²) ≈ 55. ✔</p>`, svg: diagonal },
    { html: `<h3>3.2 Triángulos isósceles y equiláteros, trapecios</h3><p>En un <b>triángulo isósceles</b>, la altura sobre el lado desigual lo divide en dos triángulos rectángulos iguales, porque cae justo en el punto medio de la base. Isósceles de lados iguales 10 y base 12: h = √(10² − 6²) = 8. Su área es 12 · 8 / 2 = 48.</p><p>En un <b>triángulo equilátero</b> de lado l, la altura cae también en el punto medio: h = √(l² − (l/2)²). Con l = 6: h = √(36 − 9) = √27 ≈ 5,2.</p><p>En un <b>trapecio isósceles</b>, al trazar las alturas desde los vértices de la base menor se forman dos triángulos rectángulos en los extremos. Si las bases miden 14 y 8 y los lados oblicuos 5, cada triángulo tiene un cateto de (14 − 8)/2 = 3, y la altura es √(25 − 9) = 4.</p><p>Con la altura calculada ya se puede obtener el área de la figura.</p>`, svg: isosceles },
    { html: `<h3>3.3 Polígonos regulares y circunferencia</h3><p>En un <b>polígono regular</b>, la <b>apotema</b> (segmento desde el centro al punto medio de un lado) forma un triángulo rectángulo con el radio (hipotenusa) y la mitad del lado.</p><p>En un <b>hexágono regular</b> el radio es igual al lado. Con lado 6: ap = √(6² − 3²) = √27 ≈ 5,2. El área es perímetro · apotema / 2 = 36 · 5,2 / 2 ≈ 93,5.</p><p>En la <b>circunferencia</b>, el radio perpendicular a una cuerda la corta en su punto medio. Así podemos calcular la distancia del centro a una cuerda: en una circunferencia de radio 10 con una cuerda de 16, d = √(10² − 8²) = 6.</p><p>También se usa al revés: para hallar la longitud de una cuerda o el lado de un polígono inscrito.</p>`, svg: hexagono },
    { html: `<h3>3.4 Distancia entre dos puntos</h3><p>En unos ejes de coordenadas, la distancia entre dos puntos A(x₁, y₁) y B(x₂, y₂) se calcula con Pitágoras: el segmento AB es la hipotenusa de un triángulo rectángulo cuyos catetos son la diferencia horizontal y la diferencia vertical.</p><p><mark>d(A, B) = √((x₂ − x₁)² + (y₂ − y₁)²)</mark></p><p>Ejemplo: A(1, 1) y B(5, 4). Catetos: 5 − 1 = 4 y 4 − 1 = 3. d = √(16 + 9) = 5.</p><p>Así es como un GPS o un videojuego calcula la distancia en línea recta entre dos posiciones. Fíjate en que da igual el orden de la resta, porque al elevar al cuadrado el signo desaparece.</p><p>También sirve para la circunferencia: los puntos que están a distancia r del centro forman una circunferencia de radio r, como en el dibujo del apartado anterior, donde la cuerda está a 6 unidades del centro.</p>`, svg: coord },
    { html: `<h3>3.5 Pitágoras en el espacio</h3><p>El teorema también se aplica en tres dimensiones, buscando triángulos rectángulos en el interior de los cuerpos:</p><ul><li><b>Diagonal de un ortoedro</b> de aristas a, b y c: primero la diagonal de la base, d₁ = √(a² + b²); después la diagonal del ortoedro, D = √(d₁² + c²) = <mark>√(a² + b² + c²)</mark>. Caja de 3 × 4 × 12: D = √(9 + 16 + 144) = 13.</li><li><b>Diagonal de un cubo</b> de arista a: D = a√3.</li><li><b>Altura de una pirámide</b>: con la apotema de la pirámide y la apotema de la base.</li><li><b>Generatriz de un cono</b>: g = √(h² + r²).</li></ul><p>¿Cabe un palo de 1,3 m en una caja de 1 × 0,6 × 0,6 m? D = √(1 + 0,36 + 0,36) ≈ 1,31 m: sí, en diagonal, justo.</p>`, svg: psvg("pitagoras", 6) },
    { html: `<h3>3.6 Estrategia para resolver problemas</h3><p>Los problemas de Pitágoras se resuelven con un método ordenado:</p><ol><li><b>Dibuja</b> la situación y marca los datos.</li><li><b>Busca un triángulo rectángulo</b> (donde haya una vertical y una horizontal, una altura, un radio perpendicular…).</li><li><b>Identifica la hipotenusa</b>: el lado opuesto al ángulo recto.</li><li>Si buscas la hipotenusa, <b>suma</b> cuadrados; si buscas un cateto, <b>resta</b>.</li><li><b>Comprueba</b> que el resultado es razonable y escribe las unidades.</li></ol><p>Ejemplo: una cometa está sujeta con un hilo de 50 m. Su sombra en el suelo está a 30 m de la persona. ¿A qué altura vuela? Altura = √(50² − 30²) = √1600 = 40 m.</p><p>A veces hay que aplicar el teorema dos veces seguidas, como en la diagonal del ortoedro.</p>`, svg: problemas },
  ],
  ejemplos: [
    { enunciado: "Calcula la hipotenusa de un triángulo rectángulo de catetos 9 cm y 12 cm.", pasos: ["c² = 9² + 12² = 81 + 144 = 225.", "c = √225 = 15."], resultado: "15 cm." },
    { enunciado: "La hipotenusa mide 17 m y un cateto 8 m. Calcula el otro cateto.", pasos: ["a² = 17² − 8² = 289 − 64 = 225.", "a = 15."], resultado: "15 m." },
    { enunciado: "¿Es rectángulo el triángulo de lados 10, 24 y 26?", pasos: ["Lado mayor: 26 → 26² = 676.", "10² + 24² = 100 + 576 = 676."], resultado: "Sí, es rectángulo." },
    { enunciado: "Calcula la altura y el área de un triángulo equilátero de lado 10 cm.", pasos: ["h = √(10² − 5²) = √75 ≈ 8,66 cm.", "Área = 10 · 8,66 / 2 ≈ 43,3 cm²."], resultado: "h ≈ 8,66 cm; A ≈ 43,3 cm²." },
    { enunciado: "Calcula el lado de un rombo de diagonales 24 cm y 10 cm.", pasos: ["Semidiagonales: 12 y 5.", "l = √(12² + 5²) = √169 = 13."], resultado: "13 cm." },
    { enunciado: "Calcula la diagonal de una caja de 30 × 40 × 120 cm.", pasos: ["Diagonal de la base: √(900 + 1600) = 50.", "D = √(50² + 120²) = √(2500 + 14 400) = √16 900 = 130."], resultado: "130 cm." },
  ],
  errores: [
    "Aplicar el teorema en triángulos que no son rectángulos.",
    "Tomar como hipotenusa un cateto: la hipotenusa es el lado mayor, opuesto al ángulo recto.",
    "Sumar cuadrados cuando se busca un cateto (hay que restar).",
    "Hacer √(a² + b²) = a + b: la raíz de una suma no es la suma de las raíces.",
    "Olvidar hacer la raíz cuadrada al final y dar c² como resultado.",
    "En el isósceles, usar la base entera en vez de su mitad.",
  ],
  ejercicios: [
    { nivel: "básico", q: "En un triángulo rectángulo de lados 5, 12 y 13, ¿cuál es la hipotenusa? ¿Cuáles son los catetos?", sol: "Hipotenusa 13 (el mayor). Catetos 5 y 12." },
    { nivel: "básico", q: "Calcula la hipotenusa: catetos 15 y 20.", sol: "√(225 + 400) = √625 = 25." },
    { nivel: "básico", q: "Calcula la hipotenusa: catetos 1 y 1. Da el valor exacto y aproximado.", sol: "√2 ≈ 1,41." },
    { nivel: "básico", q: "Calcula el cateto: hipotenusa 10, cateto 6.", sol: "√(100 − 36) = √64 = 8." },
    { nivel: "básico", q: "Calcula el cateto: hipotenusa 25, cateto 7.", sol: "√(625 − 49) = √576 = 24." },
    { nivel: "básico", q: "¿Son ternas pitagóricas 9, 12, 15 y 4, 6, 8?", sol: "81 + 144 = 225 = 15²: sí. 16 + 36 = 52 ≠ 64: no." },
    { nivel: "básico", q: "Escribe tres ternas pitagóricas a partir de 5, 12, 13.", sol: "10, 24, 26; 15, 36, 39; 50, 120, 130." },
    { nivel: "básico", q: "Calcula la diagonal de un cuadrado de 5 cm de lado.", sol: "√(25 + 25) = √50 ≈ 7,07 cm." },
    { nivel: "básico", q: "Una escalera de 10 m se apoya en una pared con el pie a 6 m. ¿A qué altura llega?", sol: "√(100 − 36) = 8 m." },
    { nivel: "básico", q: "Calcula la diagonal de un rectángulo de 8 × 15 cm.", sol: "√(64 + 225) = √289 = 17 cm." },
    { nivel: "medio", q: "Clasifica por sus ángulos los triángulos de lados: a) 6, 8, 10; b) 5, 6, 7; c) 4, 5, 8.", sol: "a) 100 = 100: rectángulo. b) 49 < 61: acutángulo. c) 64 > 41: obtusángulo." },
    { nivel: "medio", q: "Calcula la altura de un triángulo isósceles de lados iguales 13 cm y base 10 cm, y su área.", sol: "h = √(169 − 25) = 12 cm. Área = 10 · 12 / 2 = 60 cm²." },
    { nivel: "medio", q: "Calcula la altura y el área de un triángulo equilátero de 8 cm de lado.", sol: "h = √(64 − 16) = √48 ≈ 6,93 cm. Área ≈ 8 · 6,93 / 2 ≈ 27,7 cm²." },
    { nivel: "medio", q: "Las diagonales de un rombo miden 30 y 16 cm. Calcula su lado y su perímetro.", sol: "l = √(15² + 8²) = √289 = 17 cm. Perímetro = 68 cm." },
    { nivel: "medio", q: "Un trapecio isósceles tiene bases de 20 y 12 cm y lados oblicuos de 5 cm. Calcula su altura y su área.", sol: "Cateto = (20 − 12)/2 = 4. h = √(25 − 16) = 3 cm. Área = (20 + 12) · 3 / 2 = 48 cm²." },
    { nivel: "medio", q: "Calcula la apotema y el área de un hexágono regular de 10 cm de lado.", sol: "ap = √(100 − 25) = √75 ≈ 8,66 cm. Área = 60 · 8,66 / 2 ≈ 259,8 cm²." },
    { nivel: "medio", q: "Calcula la distancia entre A(−2, 1) y B(4, 9).", sol: "√(6² + 8²) = √100 = 10." },
    { nivel: "medio", q: "En una circunferencia de radio 13 cm hay una cuerda de 24 cm. ¿A qué distancia está del centro?", sol: "d = √(13² − 12²) = √25 = 5 cm." },
    { nivel: "medio", q: "Un televisor de 16:9 mide 80 cm de ancho y 45 cm de alto. ¿Cuántas pulgadas tiene? (1 pulgada = 2,54 cm)", sol: "d = √(6400 + 2025) = √8425 ≈ 91,8 cm ≈ 36 pulgadas." },
    { nivel: "medio", q: "Un barco navega 9 km hacia el norte y luego 12 km hacia el este. ¿A qué distancia está del punto de partida?", sol: "√(81 + 144) = √225 = 15 km." },
    { nivel: "medio", q: "Calcula la diagonal de un cubo de 6 cm de arista.", sol: "D = √(36 + 36 + 36) = √108 ≈ 10,39 cm (= 6√3)." },
    { nivel: "medio", q: "Un cono tiene 8 cm de altura y 6 cm de radio. ¿Cuánto mide su generatriz?", sol: "g = √(64 + 36) = 10 cm." },
    { nivel: "avanzado", q: "¿Cabe una varilla de 70 cm en una caja de 50 × 30 × 40 cm?", sol: "D = √(2500 + 900 + 1600) = √5000 ≈ 70,7 cm. Sí cabe, en diagonal." },
    { nivel: "avanzado", q: "Una pirámide cuadrangular regular tiene base de 10 cm de lado y aristas laterales de 13 cm. Calcula la apotema de la pirámide y su altura.", sol: "Apotema lateral: √(13² − 5²) = 12 cm. Altura: √(12² − 5²) = √119 ≈ 10,9 cm." },
    { nivel: "avanzado", q: "Un poste de 12 m se sujeta con dos cables desde su extremo superior a puntos del suelo situados a 5 m y 9 m de la base, a cada lado. ¿Cuántos metros de cable hacen falta?", sol: "√(144 + 25) = 13 m y √(144 + 81) = 15 m. Total 28 m." },
    { nivel: "avanzado", q: "Calcula el perímetro del triángulo de vértices A(0, 0), B(6, 0) y C(6, 8). ¿Es rectángulo?", sol: "AB = 6, BC = 8, AC = √(36 + 64) = 10. Perímetro 24. Sí, rectángulo en B (36 + 64 = 100)." },
    { nivel: "avanzado", q: "Una antena de 30 m se rompe y su extremo toca el suelo a 10 m de la base. ¿A qué altura se rompió?", sol: "Si se rompe a altura x, el trozo caído mide 30 − x: x² + 10² = (30 − x)² → x² + 100 = 900 − 60x + x² → 60x = 800 → x ≈ 13,33 m." },
    { nivel: "avanzado", q: "Halla x para que el triángulo de lados x, x + 1 y 5 (siendo 5 la hipotenusa) sea rectángulo.", sol: "x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0 → x = 3 (se descarta −4). Lados 3, 4, 5." },
    { nivel: "avanzado", q: "Comprueba con la cuerda de 12 nudos que el triángulo 3-4-5 es el único rectángulo posible con lados enteros y perímetro 12.", sol: "Con perímetro 12 y lados enteros: 2-5-5, 3-4-5, 4-4-4, 2-4-6 (no es triángulo)… Solo 3-4-5 cumple c² = a² + b² (25 = 9 + 16)." },
    { nivel: "avanzado", q: "Explica con tus palabras la demostración visual del teorema con dos cuadrados de lado a + b.", sol: "Los dos cuadrados grandes tienen la misma área. Al quitar los mismos cuatro triángulos, en uno queda un cuadrado de área c² y en el otro dos cuadrados de áreas a² y b². Por tanto, c² = a² + b²." },
  ],
  quiz: baraja([
    { q: "La hipotenusa es…", o: ["el lado opuesto al ángulo recto", "el lado más corto", "cualquier cateto", "la altura"], a: 0, e: "Y el mayor." },
    { q: "El teorema de Pitágoras se cumple en triángulos…", o: ["rectángulos", "equiláteros", "obtusángulos", "todos"], a: 0, e: "Solo rectángulos." },
    { q: "c² = …", o: ["a² + b²", "a² − b²", "a + b", "2ab"], a: 0, e: "Enunciado." },
    { q: "Catetos 3 y 4. Hipotenusa:", o: ["5", "7", "25", "12"], a: 0, e: "√25." },
    { q: "Hipotenusa 10, cateto 8. El otro cateto:", o: ["6", "2", "√164", "18"], a: 0, e: "√(100 − 64)." },
    { q: "Catetos 5 y 12. Hipotenusa:", o: ["13", "17", "169", "7"], a: 0, e: "√169." },
    { q: "¿Cuál es terna pitagórica?", o: ["8, 15, 17", "4, 5, 6", "2, 3, 4", "5, 6, 7"], a: 0, e: "64 + 225 = 289." },
    { q: "Para calcular un cateto se…", o: ["restan los cuadrados", "suman los cuadrados", "suman los lados", "multiplican los lados"], a: 0, e: "a² = c² − b²." },
    { q: "Lados 6, 7, 9: el triángulo es…", o: ["acutángulo", "rectángulo", "obtusángulo", "no existe"], a: 0, e: "81 < 85." },
    { q: "Lados 2, 3, 4: el triángulo es…", o: ["obtusángulo", "rectángulo", "acutángulo", "equilátero"], a: 0, e: "16 > 13." },
    { q: "La diagonal de un cuadrado de lado 1 es…", o: ["√2", "2", "1", "√3"], a: 0, e: "√(1 + 1)." },
    { q: "Diagonal de un rectángulo de 6 × 8:", o: ["10", "14", "48", "100"], a: 0, e: "√100." },
    { q: "Rombo de diagonales 6 y 8. Lado:", o: ["5", "10", "7", "14"], a: 0, e: "√(3² + 4²)." },
    { q: "En un isósceles, la altura sobre la base la divide…", o: ["en dos mitades", "en tercios", "no la divide", "en la proporción de los lados"], a: 0, e: "Cae en el punto medio." },
    { q: "Altura de un equilátero de lado 2:", o: ["√3", "1", "2", "√5"], a: 0, e: "√(4 − 1)." },
    { q: "Distancia entre (0, 0) y (3, 4):", o: ["5", "7", "1", "25"], a: 0, e: "√(9 + 16)." },
    { q: "Diagonal de un cubo de arista a:", o: ["a√3", "a√2", "3a", "a²"], a: 0, e: "√(3a²)." },
    { q: "√(9 + 16) =", o: ["5", "7", "25", "12"], a: 0, e: "√25, no 3 + 4." },
    { q: "Generatriz de un cono de h = 4 y r = 3:", o: ["5", "7", "1", "12"], a: 0, e: "√(16 + 9)." },
    { q: "La cuerda egipcia tenía…", o: ["12 nudos", "10 nudos", "3 nudos", "25 nudos"], a: 0, e: "3 + 4 + 5 = 12." },
  ]),
  examen: baraja([
    { q: "Catetos 8 y 15. Hipotenusa:", o: ["17", "23", "13", "289"], a: 0, e: "√289." },
    { q: "Hipotenusa 26, cateto 10. Otro cateto:", o: ["24", "16", "28", "36"], a: 0, e: "√(676 − 100)." },
    { q: "¿Es rectángulo el triángulo 9, 40, 41?", o: ["Sí", "No", "Es obtusángulo", "No existe"], a: 0, e: "81 + 1600 = 1681." },
    { q: "Lados 5, 5, 8: es…", o: ["obtusángulo", "rectángulo", "acutángulo", "equilátero"], a: 0, e: "64 > 50." },
    { q: "Diagonal de un rectángulo de 9 × 12:", o: ["15", "21", "108", "13"], a: 0, e: "√225." },
    { q: "Altura de un isósceles de lados 5, 5 y base 6:", o: ["4", "3", "5", "√34"], a: 0, e: "√(25 − 9)." },
    { q: "Distancia entre (1, 2) y (7, 10):", o: ["10", "14", "8", "6"], a: 0, e: "√(36 + 64)." },
    { q: "Diagonal de una caja 2 × 3 × 6:", o: ["7", "11", "√13", "49"], a: 0, e: "√(4 + 9 + 36)." },
  ], 1),
  feynman: ["Qué dice el teorema de Pitágoras con áreas de cuadrados", "Por qué para hallar un cateto se resta y para la hipotenusa se suma", "Cómo comprobar con una cinta métrica que una esquina es recta", "Cómo se calcula la diagonal de una caja aplicando dos veces el teorema"],
  figura: {
    titulo: "El teorema de Pitágoras en un vistazo",
    svg: resumen("Resumen del tema del teorema de Pitágoras", [
      ["c² = a² + b²", "c: hipotenusa (opuesta al ángulo recto)", "var(--pen)"],
      ["Hipotenusa", "c = √(a² + b²)", "var(--leaf)"],
      ["Cateto", "a = √(c² − b²)", "var(--sun)"],
      ["Recíproco", "c² = a² + b² → rectángulo · < acut. · > obtus.", "var(--inf)"],
      ["Aplicaciones", "diagonales · alturas · apotemas · espacio", "var(--red)"],
    ]),
  },
  video: pvg("pitagoras"),
  mapa: mapa("PITÁGORAS", "var(--pen)", [
    ["Triángulo rectángulo", "catetos · hipotenusa", "var(--pen)"],
    ["Teorema", "c² = a² + b² · ternas", "var(--leaf)"],
    ["Cálculos", "hipotenusa · cateto · recíproco", "var(--sun)"],
    ["Aplicaciones", "figuras planas · espacio · coordenadas", "var(--red)"],
  ], 250),
  glosario: [
    ["Triángulo rectángulo", "Triángulo con un ángulo recto (90°)."],
    ["Cateto", "Cada uno de los lados que forman el ángulo recto."],
    ["Hipotenusa", "Lado opuesto al ángulo recto; es el mayor."],
    ["Teorema de Pitágoras", "En un triángulo rectángulo, c² = a² + b²."],
    ["Recíproco", "Si c² = a² + b², el triángulo es rectángulo."],
    ["Terna pitagórica", "Tres naturales que cumplen a² + b² = c²."],
    ["Triángulo acutángulo", "El que tiene los tres ángulos agudos."],
    ["Triángulo obtusángulo", "El que tiene un ángulo obtuso."],
    ["Diagonal", "Segmento que une dos vértices no consecutivos."],
    ["Apotema", "Segmento del centro de un polígono regular al punto medio de un lado."],
    ["Altura", "Segmento perpendicular desde un vértice al lado opuesto."],
    ["Generatriz", "Segmento que une el vértice de un cono con un punto de la circunferencia de la base."],
    ["Demostración", "Razonamiento que prueba que una afirmación es cierta siempre."],
  ],
  situacion: {
    titulo: "Inspectores de ángulos rectos",
    reto: "Vais a comprobar si las esquinas de varios espacios del instituto (aulas, pistas, mesas, puertas) forman ángulos rectos de verdad, usando solo una cinta métrica y el recíproco del teorema de Pitágoras, como los antiguos tensadores de cuerdas.",
    pasos: [
      "Construid una cuerda de 12 nudos y comprobad con ella un ángulo recto conocido.",
      "Elegid al menos cinco esquinas y medid en cada una 60 cm y 80 cm sobre los dos lados.",
      "Medid la distancia entre las marcas y comparad con 100 cm; clasificad el ángulo (recto, agudo u obtuso).",
      "Medid además las diagonales de una puerta y de la pista y comprobad con Pitágoras si son rectángulos perfectos.",
      "Elaborad un informe con fotos, medidas, cálculos y la precisión obtenida.",
    ],
    producto: "Un informe de inspección con fotos, medidas, cálculos y conclusiones sobre la precisión de las construcciones.",
    evaluacion: ["Aplica correctamente el teorema y su recíproco.", "Mide con cuidado y estima el error de medida.", "Clasifica los ángulos a partir de los cálculos.", "Presenta el informe con orden y rigor."],
  },
  tarjetas: [
    ["Hipotenusa", "Lado opuesto al ángulo recto (el mayor)"], ["Catetos", "Lados del ángulo recto"], ["Teorema", "c² = a² + b²"],
    ["Hallar la hipotenusa", "√(a² + b²)"], ["Hallar un cateto", "√(c² − b²)"], ["Terna 3-4-5", "9 + 16 = 25"],
    ["c² < a² + b²", "Acutángulo"], ["c² > a² + b²", "Obtusángulo"], ["Diagonal del cuadrado", "l√2"],
    ["Altura del equilátero", "√(l² − (l/2)²)"], ["Distancia entre puntos", "√(Δx² + Δy²)"], ["Diagonal del ortoedro", "√(a² + b² + c²)"],
  ],
  familias: ["Comprobad con una cinta métrica si una esquina de casa es recta (60-80-100 cm).", "Calculad la diagonal de la pantalla de la tele a partir del ancho y el alto.", "Buscad en un mapa dos lugares y calculad la distancia en línea recta con una cuadrícula.", "Construid con una cuerda y 12 nudos un triángulo 3-4-5."],
  profesores: {
    saberes: "Sentido espacial y de la medida: teorema de Pitágoras, justificación geométrica, recíproco y aplicaciones al cálculo de longitudes, áreas y volúmenes en contextos reales (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Puzles de la demostración con piezas recortadas.", "Cuerda de 12 nudos en el patio para trazar ángulos rectos.", "GeoGebra para comprobar el teorema y su recíproco al mover vértices.", "Problema de la varilla en la caja con cajas reales."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Teorema de Pitágoras", url: "https://es.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras" }, { t: "Wikipedia: Terna pitagórica", url: "https://es.wikipedia.org/wiki/Terna_pitag%C3%B3rica" }],
  revisado: REV,
};
