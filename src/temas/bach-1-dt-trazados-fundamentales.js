// Dibujo Técnico I 1º Bachillerato · Tema 1. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, t, dib, seg, recta, aux, fina, circ, arco, marca, pt, paso, poli, linea, recto, polar, corteCC, corteRR, mid, dist, ang, unit, add, mul, circun3, tx } = G;

// 1.1 Escuadra y cartabón.
const s1 = (() => {
  const E = [[22, 150], [122, 150], [22, 50]], C = [[148, 150], [240, 150], [148, 96.9]];
  return dib("La escuadra tiene ángulos de 45, 45 y 90 grados y el cartabón de 30, 60 y 90 grados", `${poli(E, "var(--pen)", 2.4, "var(--pen)", 0.12)}${poli(C, "var(--leaf)", 2.4, "var(--leaf)", 0.12)}${recto([22, 150], [122, 150], [22, 50], 10)}${recto([148, 150], [240, 150], [148, 96.9], 10)}
  ${tx(98, 144, "45°", { c: "var(--pen)", b: 1 })}${tx(30, 86, "45°", { c: "var(--pen)", b: 1, a: "start" })}${tx(200, 147, "30°", { c: "var(--leaf)", b: 1, s: 9.5 })}${tx(153, 124, "60°", { c: "var(--leaf)", b: 1, a: "start" })}
  ${tx(72, 170, "escuadra", { c: "var(--pen)", b: 1 })}${tx(194, 170, "cartabón", { c: "var(--leaf)", b: 1 })}${tx(130, 24, "Hipotenusa de la escuadra = cateto mayor del cartabón", { s: 9.5 })}${tx(195, 60, "combinando:", { s: 9.5, c: "var(--muted)" })}${tx(195, 72, "15°, 75°, 105°…", { s: 9.5, c: "var(--muted)" })}`);
})();

// 1.2 Elementos y posiciones relativas.
const s2 = dib("Recta, semirrecta y segmento, y dos rectas secantes y dos paralelas", `${seg([16, 28], [244, 28], "var(--ink)", 2)}${tx(130, 20, "recta r: ilimitada en los dos sentidos")}
  ${seg([40, 58], [244, 58], "var(--ink)", 2)}${pt([40, 58], "O", -6, 4)}${tx(150, 50, "semirrecta: tiene origen O")}
  ${seg([50, 88], [200, 88], "var(--red)", 2.6)}${pt([50, 88], "A", -6, 4, "var(--red)")}${pt([200, 88], "B", 6, 4, "var(--red)")}${tx(125, 80, "segmento AB: limitado", { c: "var(--red)" })}
  ${seg([20, 160], [110, 110], "var(--pen)", 2)}${seg([20, 112], [110, 162], "var(--pen)", 2)}${tx(65, 175, "secantes", { c: "var(--pen)", b: 1 })}
  ${seg([150, 118], [244, 118], "var(--leaf)", 2)}${seg([150, 150], [244, 150], "var(--leaf)", 2)}${tx(197, 175, "paralelas", { c: "var(--leaf)", b: 1 })}${tx(197, 138, "d constante", { s: 9.5, c: "var(--muted)" })}`);

// 1.3 Perpendicular por un punto de la recta.
const s3 = (() => {
  const P = [130, 130], A = [80, 130], B = [180, 130], Q = corteCC(A, 75, B, 75).find((p) => p[1] < 130);
  return dib("Perpendicular a una recta por uno de sus puntos con compás en tres pasos", `${recta([20, 130], [240, 130], 0, "var(--ink)", 2)}${arco(P, 50, 0, 180, "var(--muted)", 1.2)}${marca(A, Q, 22)}${marca(B, Q, 22)}${recta(P, Q, 14, "var(--red)", 2.6)}${recto(P, B, Q, 9)}
  ${pt(P, "P", 4, 14)}${pt(A, "A", -4, 14)}${pt(B, "B", 4, 14)}${pt(Q, "Q", 8, 2)}${paso([60, 112], 1)}${paso([200, 84], 2)}${paso([142, 36], 3, "var(--red)")}${tx(236, 150, "r", { b: 1 })}
  ${tx(130, 162, "1 arco de centro P · 2 arcos iguales desde A y B", { s: 9.5, c: "var(--muted)" })}${tx(130, 174, "3 unir P con Q", { s: 9.5, c: "var(--muted)" })}`);
})();

// 1.4 Mediatriz.
const s4 = (() => {
  const A = [60, 100], B = [200, 100], [P, Q] = corteCC(A, 90, B, 90).sort((u, v) => u[1] - v[1]), M = mid(A, B);
  return dib("Mediatriz de un segmento: dos pares de arcos de igual radio y la recta que une sus cortes", `${seg(A, B, "var(--ink)", 2.6)}${marca(A, P, 30)}${marca(A, Q, 30)}${marca(B, P, 30)}${marca(B, Q, 30)}${recta(P, Q, 10, "var(--red)", 2.6)}${recto(M, B, P, 8)}
  ${pt(A, "A", -6, 4)}${pt(B, "B", 6, 4)}${pt(P, "P", 8, 4)}${pt(Q, "Q", 8, 4)}${pt(M, "M", -14, 16, "var(--red)")}${paso([88, 40], 1)}${paso([172, 40], 2)}${paso([142, 172], 3, "var(--red)")}
  ${tx(14, 160, "radio > AB/2", { s: 9.5, c: "var(--muted)", a: "start" })}${tx(246, 160, "PA = PB", { s: 9.5, c: "var(--red)", a: "end", b: 1 })}`);
})();

// 1.5 Transporte de un ángulo.
const s5 = (() => {
  const V = [22, 138], A = polar(V, 55, 0), B = polar(V, 55, 42), V2 = [142, 138], A2 = polar(V2, 55, 0);
  const B2 = corteCC(V2, 55, A2, dist(A, B)).find((p) => p[1] < 138);
  return dib("Copia de un ángulo con compás: mismo radio en los dos vértices y la cuerda AB llevada desde A′", `${seg(V, polar(V, 100, 0))}${seg(V, polar(V, 100, 42))}${arco(V, 55, -6, 50, "var(--muted)", 1.2)}${seg(V2, polar(V2, 102, 0))}${arco(V2, 55, -6, 56, "var(--muted)", 1.2)}${marca(A2, B2, 30)}${recta(V2, B2, 50, "var(--red)", 2.6)}
  ${fina(A, B, "var(--pen)")}${pt(V, "V", -2, 16)}${pt(A, "A", 2, 14)}${pt(B, "B", -4, -6)}${pt(V2, "V′", -2, 16)}${pt(A2, "A′", 2, 14)}${pt(B2, "B′", -8, -4, "var(--red)")}
  ${paso([50, 160], 1)}${paso([170, 160], 2)}${paso([214, 92], 3)}${tx(56, 112, "α", { s: 13, b: 1, c: "var(--pen)" })}${tx(172, 120, "α", { s: 13, b: 1, c: "var(--red)" })}${tx(130, 22, "radio V′A′ = VA; cuerda A′B′ = AB", { s: 9.5, c: "var(--muted)" })}`);
})();

// 1.6 Bisectriz de un ángulo.
const s6 = (() => {
  const V = [30, 150], A = polar(V, 70, 0), B = polar(V, 70, 60), P = corteCC(A, 60, B, 60).sort((u, v) => dist(V, v) - dist(V, u))[0];
  return dib("Bisectriz de un ángulo: arco desde el vértice y dos arcos iguales desde los cortes", `${seg(V, [240, 150])}${seg(V, polar(V, 150, 60))}${arco(V, 70, -4, 64, "var(--muted)", 1.2)}${marca(A, P, 30)}${marca(B, P, 30)}${seg(V, polar(V, 196, 30), "var(--red)", 2.6)}
  ${pt(V, "V", -4, 14)}${pt(A, "A", 2, 14)}${pt(B, "B", -8, -2)}${pt(P, "P", 8, 8)}${paso([112, 130], 1)}${paso([156, 102], 2)}${paso([222, 72], 3, "var(--red)")}
  ${tx(polar(V, 52, 13)[0], polar(V, 52, 13)[1] + 4, "α/2", { s: 10, c: "var(--red)", b: 1 })}${tx(polar(V, 50, 47)[0], polar(V, 50, 47)[1] + 4, "α/2", { s: 10, c: "var(--red)", b: 1 })}${tx(246, 24, "puntos que equidistan", { s: 9.5, a: "end", c: "var(--muted)" })}${tx(246, 36, "de los dos lados", { s: 9.5, a: "end", c: "var(--muted)" })}`);
})();

// 1.7 Ángulos con compás.
const s7 = (() => {
  const O = [130, 152], A = polar(O, 90, 0), B = corteCC(O, 90, A, 90).find((p) => p[1] < 152), C = corteCC(O, 90, B, 90).find((p) => p[0] < B[0] - 1);
  return dib("Con el radio llevado sobre la semicircunferencia se obtienen 60 y 120 grados; con bisectrices, 30 y 90 grados", `${seg([26, 152], [244, 152])}${arco(O, 90, 0, 180, "var(--muted)", 1.2)}${marca(A, B, 26, "var(--pen)")}${marca(B, C, 26, "var(--pen)")}
  ${seg(O, polar(O, 104, 60), "var(--red)", 2.4)}${seg(O, polar(O, 104, 120), "var(--red)", 2.4)}${seg(O, polar(O, 104, 90), "var(--leaf)", 2.2)}${seg(O, polar(O, 104, 30), "var(--leaf)", 2, 'stroke-dasharray="5 3"')}
  ${pt(O, "O", 0, 16)}${pt(A, "A", 4, 14)}${pt(B, "B", 6, -2)}${pt(C, "C", -6, -2)}${tx(polar(O, 114, 60)[0], polar(O, 114, 60)[1], "60°", { c: "var(--red)", b: 1 })}${tx(polar(O, 114, 120)[0], polar(O, 114, 120)[1], "120°", { c: "var(--red)", b: 1 })}${tx(130, 34, "90°", { c: "var(--leaf)", b: 1 })}${tx(polar(O, 116, 30)[0], polar(O, 116, 30)[1], "30°", { c: "var(--leaf)", b: 1 })}
  ${paso([60, 100], 1)}${paso([200, 84], 2)}${paso([96, 48], 3)}${paso([160, 52], 4, "var(--leaf)")}`);
})();

// 1.8 Teorema de Tales.
const s8 = (() => {
  const A = [26, 142], B = [234, 142], n = 5, R = (i) => polar(A, 34 * i, 33), Q = (i) => [A[0] + ((B[0] - A[0]) * i) / n, 142];
  let s = `${seg(A, B, "var(--ink)", 2.6)}${seg(A, polar(A, 196, 33), "var(--muted)", 1.3)}`;
  for (let i = 1; i <= n; i++) s += `${marca(R(i - 1).map((v, k) => (i === 1 ? A[k] : v)), R(i), 22, "var(--pen)")}${pt(R(i), String(i), -4, -7, "var(--pen)", 10)}`;
  s += seg(R(n), B, "var(--red)", 2.2);
  for (let i = 1; i < n; i++) s += `${seg(R(i), Q(i), "var(--red)", 1.4, 'stroke-dasharray="5 3"')}${pt(Q(i), "", 0, 0, "var(--red)")}`;
  return dib("División de un segmento en cinco partes iguales con el teorema de Tales", `${s}${pt(A, "A", -4, 16)}${pt(B, "B", 4, 16)}${paso([60, 76], 1)}${paso([150, 46], 2)}${paso([214, 92], 3, "var(--red)")}${paso([120, 168], 4, "var(--red)")}${tx(246, 24, "paralelas a 5B", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 1.9 Media proporcional.
const s9 = (() => {
  const A = [30, 150], C = [100, 150], B = [210, 150], O = mid(A, B), H = [100, 150 - Math.sqrt(70 * 110)];
  return dib("Media proporcional de dos segmentos con la semicircunferencia: x al cuadrado igual a a por b", `${seg(A, B)}${arco(O, 90, 0, 180, "var(--muted)", 1.4)}${seg(C, H, "var(--red)", 3)}${recto(C, B, H, 8)}${fina(A, H, "var(--pen)")}${fina(B, H, "var(--pen)")}
  ${pt(A, "A", -4, 14)}${pt(C, "C", 2, 14)}${pt(B, "B", 4, 14)}${pt(O, "O", 2, 14)}${pt(H, "H", 4, -6, "var(--red)")}${tx(65, 166, "a = 70", { b: 1 })}${tx(155, 166, "b = 110", { b: 1 })}${tx(88, 108, "x", { s: 13, b: 1, c: "var(--red)" })}
  ${paso([30, 106], 1)}${paso([220, 106], 2)}${tx(246, 24, "x² = a · b", { s: 12, b: 1, a: "end", c: "var(--red)" })}${tx(246, 38, "x ≈ 87,7", { s: 10, a: "end", c: "var(--muted)" })}`);
})();

// 1.10 Lugares geométricos básicos.
const s10 = (() => {
  const c1 = `${circ([65, 48], 28, "var(--red)", 2.2)}${pt([65, 48], "O", -6, 4)}${fina([65, 48], polar([65, 48], 28, 30), "var(--ink)")}${tx(65, 88, "circunferencia: d(X, O) = r", { s: 9 })}`;
  const c2 = `${seg([160, 48], [230, 48])}${pt([160, 48], "A", -4, 14)}${pt([230, 48], "B", 4, 14)}${seg([195, 14], [195, 80], "var(--red)", 2.2)}${tx(195, 92, "mediatriz: d(X, A) = d(X, B)", { s: 9 })}`;
  const V = [26, 160], c3 = `${seg(V, [110, 160])}${seg(V, polar(V, 80, 50))}${seg(V, polar(V, 86, 25), "var(--red)", 2.2)}${tx(68, 176, "bisectriz: d(X, r) = d(X, s)", { s: 9 })}`;
  const c4 = `${seg([150, 134], [240, 134])}${seg([150, 116], [240, 116], "var(--red)", 2)}${seg([150, 152], [240, 152], "var(--red)", 2)}${fina([195, 116], [195, 134], "var(--pen)")}${tx(200, 128, "d", { s: 9, a: "start", c: "var(--pen)" })}${tx(195, 176, "paralelas a distancia d", { s: 9 })}`;
  return dib("Cuatro lugares geométricos básicos: circunferencia, mediatriz, bisectriz y paralelas a distancia dada", `${seg([130, 6], [130, 174], "var(--line)", 1)}${seg([6, 100], [254, 100], "var(--line)", 1)}${c1}${c2}${c3}${c4}`);
})();

// 1.11 Arco capaz.
const s11 = (() => {
  const A = [70, 140], B = [190, 140], al = 60, R = 120 / (2 * Math.sin((al * Math.PI) / 180)), O = [130, 140 - R * Math.cos((al * Math.PI) / 180)], X = polar(O, R, 105);
  return dib("Arco capaz de 60 grados sobre un segmento: desde cualquier punto del arco se ve AB con ese ángulo", `${seg(A, B, "var(--ink)", 2.6)}${seg([130, 30], [130, 168], "var(--muted)", 1.2, 'stroke-dasharray="5 3"')}${seg(polar(A, 34, 120), polar(A, 46, -60), "var(--pen)", 1.8)}${seg(A, O, "var(--pen)", 1.4)}${recto(A, polar(A, 20, -60), O, 7, "var(--pen)")}
  ${arco(O, R, ang(O, B), ang(O, A), "var(--red)", 2.6)}${fina(X, A, "var(--leaf)")}${fina(X, B, "var(--leaf)")}${pt(A, "A", -6, 14)}${pt(B, "B", 4, 14)}${pt(O, "O", 6, 4)}${pt(X, "X", -4, -6, "var(--leaf)")}${tx(X[0] + 6, X[1] + 22, "60°", { s: 10, c: "var(--leaf)", b: 1 })}
  ${tx(100, 168, "60°", { s: 10, c: "var(--pen)", b: 1 })}${paso([140, 24], 1)}${paso([42, 168], 2, "var(--pen)")}${paso([86, 112], 3, "var(--pen)")}${paso([222, 70], 4, "var(--red)")}`);
})();

// 1.12 Recta de Euler.
const s12 = (() => {
  const A = [30, 155], B = [230, 155], C = [160, 35], O = circun3(A, B, C), Gb = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3], H = [A[0] + B[0] + C[0] - 2 * O[0], A[1] + B[1] + C[1] - 2 * O[1]];
  return dib("Baricentro, circuncentro y ortocentro de un triángulo alineados en la recta de Euler", `${poli([A, B, C], "var(--ink)", 2.4, "var(--pen)", 0.06)}${fina(A, mid(B, C))}${fina(B, mid(A, C))}${fina(C, mid(A, B))}${seg(mid(A, B), O, "var(--pen)", 1.1, 'stroke-dasharray="4 3"')}${seg(C, [160, 155], "var(--leaf)", 1.1, 'stroke-dasharray="4 3"')}
  ${recta(O, H, 40, "var(--red)", 2.2)}${pt(A, "A", -4, 14)}${pt(B, "B", 4, 14)}${pt(C, "C", 6, -2)}${pt(O, "O", -14, 4, "var(--pen)")}${pt(Gb, "G", -14, 0, "var(--ink)")}${pt(H, "H", 8, 2, "var(--leaf)")}
  ${tx(14, 22, "O circuncentro (mediatrices)", { s: 9, a: "start", c: "var(--pen)" })}${tx(14, 34, "G baricentro (medianas)", { s: 9, a: "start" })}${tx(14, 46, "H ortocentro (alturas)", { s: 9, a: "start", c: "var(--leaf)" })}${tx(14, 60, "recta de Euler", { s: 9, a: "start", c: "var(--red)", b: 1 })}${tx(14, 72, "OG : GH = 1 : 2", { s: 9, a: "start", c: "var(--red)", b: 1 })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Trazados geométricos fundamentales",
  minutos: 110,
  objetivos: [
    "Utilizar con precisión la escuadra, el cartabón, la regla y el compás",
    "Trazar paralelas, perpendiculares, mediatrices y bisectrices con rigor",
    "Operar con ángulos y construir con compás los ángulos de 15°, 30°, 45°, 60°, 75° y 90°",
    "Aplicar el teorema de Tales para dividir segmentos en partes iguales o proporcionales",
    "Reconocer lugares geométricos y construir el arco capaz",
    "Hallar los puntos notables de un triángulo y la recta de Euler",
  ],
  claves: ["escuadra", "cartabón", "compás", "perpendicular", "mediatriz", "bisectriz", "Tales", "media proporcional", "lugar geométrico", "arco capaz", "circuncentro", "ortocentro"],
  lectura: {
    titulo: "Dibujar sin medir",
    html: `<p>Hace más de 2.300 años, Euclides escribió en Alejandría los <b>Elementos</b>, el libro de geometría más influyente de la historia. En él todas las figuras se construyen solo con dos herramientas: una regla sin marcas, que sirve para unir puntos, y un compás, que sirve para llevar distancias. No hay transportador ni números: una perpendicular, la mitad de un segmento o un ángulo de 60° se obtienen cortando arcos y rectas.</p>
    <p>Puede parecer un juego antiguo, pero esa forma de pensar sigue viva. Un carpintero que marca el centro de un tablero con dos arcos, una arquitecta que replantea los ejes de un edificio con cintas y estacas o un programa de diseño asistido por ordenador (CAD) que calcula intersecciones aplican las mismas ideas. La ventaja es enorme: una construcción geométrica es <b>exacta</b>, mientras que una medida con regla siempre arrastra un error.</p>
    <p>En este primer tema aprenderás el vocabulario y los trazados básicos del dibujo técnico: paralelas, perpendiculares, mediatrices, bisectrices, ángulos, el teorema de Tales y los lugares geométricos. Todo lo que dibujes en el resto del curso, desde un pentágono hasta una pieza en perspectiva, se apoya en estas construcciones.</p>`,
  },
  pregunta: {
    texto: "¿Cómo encontrarías el punto medio exacto de un listón de madera sin usar ninguna regla graduada?",
    respuesta: "Trazando su <mark>mediatriz</mark>: con un compás (o una cuerda) de abertura mayor que la mitad, se hacen arcos desde los dos extremos por encima y por debajo; la recta que une los dos cortes pasa justo por el punto medio y es perpendicular al listón.",
  },
  bloques: [
    {
      html: `<h3>1.1 El dibujo técnico y sus instrumentos</h3><p>El <b>dibujo técnico</b> es un lenguaje gráfico universal que permite describir con exactitud la forma y las dimensiones de un objeto para que otra persona pueda fabricarlo, construirlo o montarlo sin ambigüedad. A diferencia del dibujo artístico, no busca expresar emociones, sino <b>precisión, claridad y normalización</b>.</p><p>Los instrumentos básicos son:</p><ul><li><b>Lápices o portaminas</b> de distintas durezas: los duros (2H, H) para trazos auxiliares finos y los medios (HB, F) para las líneas definitivas. La mina se mantiene afilada para que el trazo tenga un grosor constante.</li><li><b>Escuadra</b>: triángulo rectángulo isósceles, con ángulos de 45°, 45° y 90°.</li><li><b>Cartabón</b>: triángulo rectángulo con ángulos de 30°, 60° y 90°. En un juego bien hecho, la hipotenusa de la escuadra mide lo mismo que el cateto mayor del cartabón.</li><li><b>Regla graduada</b> para medir y <b>compás</b> para trazar arcos y transportar distancias.</li><li>Goma, transportador de ángulos, plantillas y, cada vez más, programas de <b>CAD</b>.</li></ul><p>Combinando escuadra y cartabón se dibujan, sin transportador, ángulos de 15°, 75°, 105°, 120°, 135° o 150°, sumando o restando sus ángulos (por ejemplo, 45° + 30° = 75°).</p>`,
      svg: s1,
    },
    {
      html: `<h3>1.2 Elementos geométricos fundamentales</h3><p>La geometría plana se construye a partir de tres elementos que no se definen, sino que se describen: el <b>punto</b>, que indica una posición y no tiene dimensiones; la <b>recta</b>, una sucesión ilimitada de puntos en una misma dirección; y el <b>plano</b>, una superficie ilimitada en la que caben infinitas rectas. Los puntos se nombran con mayúsculas (A, B, P), las rectas con minúsculas (r, s) y los planos con letras griegas (α, β).</p><p>Un punto divide a una recta en dos <b>semirrectas</b>, cada una con un origen. La parte de recta comprendida entre dos puntos es un <b>segmento</b>, que sí tiene longitud. Una sucesión de segmentos unidos por sus extremos forma una <b>línea poligonal</b>, abierta o cerrada.</p><p>Dos rectas de un plano pueden ser:</p><ul><li><b>Secantes</b>, si se cortan en un punto; si forman cuatro ángulos rectos son <b>perpendiculares</b>.</li><li><b>Paralelas</b>, si no tienen ningún punto común y mantienen constante su distancia.</li><li><b>Coincidentes</b>, si tienen todos sus puntos comunes.</li></ul><p>En el espacio aparece una cuarta posición: dos rectas que ni se cortan ni son paralelas se llaman <b>rectas que se cruzan</b>. Las estudiarás en el sistema diédrico, donde es fundamental distinguirlas.</p>`,
      svg: s2,
    },
    {
      html: `<h3>1.3 Paralelas y perpendiculares</h3><p>Con <b>escuadra y cartabón</b> se trazan paralelas deslizando una plantilla sobre la otra: se apoya la hipotenusa de la escuadra en el cateto mayor del cartabón, se ajusta un cateto de la escuadra a la recta dada y se desliza sin mover el cartabón. Para la perpendicular basta girar la escuadra apoyando su otro cateto.</p><p>Con <b>regla y compás</b>, la perpendicular a una recta r por un punto P de ella se construye en tres pasos:</p><ol><li>Con centro en P y un radio cualquiera se traza un arco que corta a r en A y B, simétricos respecto de P.</li><li>Con centro en A y en B y un mismo radio mayor que PA se trazan dos arcos que se cortan en Q.</li><li>La recta PQ es la perpendicular buscada.</li></ol><p>Si el punto P es <b>exterior</b> a la recta, se traza con centro en P un arco que corte a r en dos puntos A y B, y después la mediatriz de AB, que pasa por P. Para levantar una perpendicular en el <b>extremo</b> de un segmento, cuando no hay espacio para prolongarlo, se usa un arco de centro exterior que pase por el extremo: el diámetro que pasa por el otro corte da, en la circunferencia, un ángulo inscrito recto. Todas estas construcciones son la base de la mediatriz, del cuadrado y de muchas tangencias.</p>`,
      svg: s3,
    },
    {
      html: `<h3>1.4 La mediatriz de un segmento</h3><p>La <b>mediatriz</b> de un segmento AB es la recta perpendicular a AB que pasa por su punto medio M. Como <b>lugar geométrico</b>, es el conjunto de puntos del plano que <b>equidistan</b> de los extremos A y B: cualquier punto P de la mediatriz cumple PA = PB.</p><p>Construcción:</p><ol><li>Con centro en A y radio mayor que la mitad de AB se trazan dos arcos, uno por encima y otro por debajo del segmento.</li><li>Con el mismo radio y centro en B se trazan otros dos arcos que cortan a los anteriores en P y Q.</li><li>La recta PQ es la mediatriz; su intersección con AB es el punto medio M.</li></ol><p>Conviene usar un radio claramente mayor que AB/2: si es casi igual, los arcos se cortan con un ángulo muy agudo y la intersección es imprecisa. Lo ideal es que los arcos se crucen cerca de los 90°.</p><p>La mediatriz tiene muchas aplicaciones: dividir un segmento en 2, 4 u 8 partes iguales; hallar el <b>centro de una circunferencia</b> que pasa por tres puntos (se cortan las mediatrices de dos cuerdas); encontrar el centro de un arco dado; o construir el circuncentro de un triángulo. También es la idea de la simetría axial: B es el simétrico de A respecto de la mediatriz de AB.</p>`,
      svg: s4,
    },
    {
      html: `<h3>1.5 Ángulos: clasificación y operaciones</h3><p>Un <b>ángulo</b> es la región del plano limitada por dos semirrectas, sus <b>lados</b>, que tienen un origen común, el <b>vértice</b>. Se mide en grados sexagesimales (una vuelta completa son 360°) y se clasifica en <b>agudo</b> (menor de 90°), <b>recto</b> (90°), <b>obtuso</b> (entre 90° y 180°), <b>llano</b> (180°) y <b>cóncavo</b> o reflejo (más de 180°).</p><p>Dos ángulos son <b>complementarios</b> si suman 90° y <b>suplementarios</b> si suman 180°. Cuando dos rectas se cortan, los ángulos <b>opuestos por el vértice</b> son iguales. Si una secante corta a dos paralelas, los ángulos <b>alternos internos</b> y los <b>correspondientes</b> son iguales: es la base del teorema de Tales.</p><p>Para <b>transportar</b> (copiar) un ángulo con compás:</p><ol><li>Con centro en el vértice V y un radio cualquiera se traza un arco que corta a los lados en A y B.</li><li>Con el mismo radio y centro en el nuevo vértice V′ se traza un arco que corta al nuevo lado en A′.</li><li>Con centro en A′ y radio AB se corta el arco anterior en B′. La semirrecta V′B′ forma el ángulo copiado.</li></ol><p>Copiando ángulos uno a continuación de otro se <b>suman</b>; copiándolos superpuestos se <b>restan</b>. Así se resuelven sin transportador los problemas de construcción de triángulos y polígonos.</p>`,
      svg: s5,
    },
    {
      html: `<h3>1.6 La bisectriz de un ángulo</h3><p>La <b>bisectriz</b> de un ángulo es la semirrecta que, partiendo del vértice, lo divide en dos ángulos iguales. Como lugar geométrico, es el conjunto de puntos que <b>equidistan de los dos lados</b>: desde cualquier punto de la bisectriz, las perpendiculares a los dos lados miden lo mismo. Por eso el centro de toda circunferencia tangente a dos rectas está sobre una de sus bisectrices, idea clave del tema de tangencias.</p><p>Construcción:</p><ol><li>Con centro en el vértice V y un radio cualquiera se traza un arco que corta a los lados en A y B.</li><li>Con centro en A y en B y un mismo radio se trazan dos arcos que se cortan en P.</li><li>La semirrecta VP es la bisectriz.</li></ol><p>Repitiendo la construcción se divide un ángulo en 4, 8 o 16 partes iguales. En cambio, con regla y compás <b>no es posible dividir un ángulo cualquiera en tres partes iguales</b>: es el famoso problema de la trisección, que no tiene solución general, como se demostró en 1837.</p><p>Si los lados de un ángulo no se cortan dentro del papel (<b>vértice inaccesible</b>), se trazan dos paralelas a los lados a una misma distancia, hacia el interior, hasta que se corten; la bisectriz del nuevo ángulo es la del ángulo dado. Dos rectas secantes tienen dos bisectrices, perpendiculares entre sí.</p>`,
      svg: s6,
      video: { id: "DWh2GSa6GSA", titulo: "Construcción de la bisectriz de un ángulo con regla y compás", canal: "QuidiMat Matematica Guillermo", vistas: 493464, busqueda: "bisectriz de un ángulo con compás" },
    },
    {
      html: `<h3>1.7 Construcción de ángulos con compás</h3><p>Algunos ángulos se construyen exactamente con regla y compás, sin necesidad de transportador. La clave está en una propiedad del hexágono: el radio de una circunferencia cabe <b>exactamente seis veces</b> sobre ella, porque el hexágono regular está formado por seis triángulos equiláteros.</p><ul><li><b>60°</b>: con centro en O y radio r se traza un arco que corta a la recta base en A; con centro en A y el mismo radio se corta el arco en B. El ángulo AOB mide 60°, porque el triángulo OAB es equilátero.</li><li><b>120°</b>: llevando el radio una vez más desde B se obtiene C, y el ángulo AOC mide 120°.</li><li><b>90°</b>: es la bisectriz del ángulo entre 60° y 120°, o la perpendicular a la recta en O.</li><li><b>30°</b> y <b>45°</b>: bisectrices de 60° y de 90°.</li><li><b>15°</b> y <b>75°</b>: bisectriz de 30°, y suma de 45° + 30°, o diferencia 90° − 15°.</li></ul><p>A partir de estos se obtienen por suma o diferencia 105°, 135°, 150° o 165°. Los ángulos de 72° (pentágono) o 36° también son construibles, pero necesitan la sección áurea, que verás en el tema de polígonos. Un ángulo de 40° o de 20°, en cambio, solo puede dibujarse de forma aproximada.</p>`,
      svg: s7,
    },
    {
      html: `<h3>1.8 El teorema de Tales y la división de segmentos</h3><p>El <b>teorema de Tales</b> afirma que, si dos rectas concurrentes se cortan por un haz de rectas paralelas, los segmentos determinados en una de ellas son <b>proporcionales</b> a los segmentos correspondientes de la otra. Es una de las herramientas más usadas en dibujo técnico, porque permite dividir y escalar sin medir.</p><p>Para <b>dividir un segmento AB en n partes iguales</b> (por ejemplo, 5):</p><ol><li>Desde A se traza una semirrecta auxiliar con cualquier inclinación.</li><li>Sobre ella se llevan con el compás n segmentos iguales de cualquier longitud: puntos 1, 2, 3, 4 y 5.</li><li>Se une el último punto, 5, con el extremo B.</li><li>Por los puntos 1, 2, 3 y 4 se trazan paralelas a 5B, que dividen AB en cinco partes iguales.</li></ol><p>El método es exacto aunque AB mida, por ejemplo, 97 mm, cuya quinta parte (19,4 mm) es imposible de medir con precisión con una regla. Si en lugar de partes iguales se llevan sobre la semirrecta segmentos de longitudes 2, 3 y 4, AB queda dividido en <b>partes proporcionales</b> a esos números. Con la misma idea se construye una <b>escala gráfica</b>, como verás en el tema de transformaciones.</p>`,
      svg: s8,
      video: { id: "dqWRtHWI0-c", titulo: "División de un segmento en partes iguales (teorema de Tales)", canal: "Arturo Geometría", vistas: 866127, busqueda: "teorema de Thales dividir segmento" },
    },
    {
      html: `<h3>1.9 Segmentos proporcionales</h3><p>Dados varios segmentos, el teorema de Tales y el de la altura permiten construir otros que cumplen relaciones de proporcionalidad:</p><ul><li><b>Cuarta proporcional</b> de a, b y c: el segmento x tal que a/b = c/x. Sobre los lados de un ángulo se llevan a y b en uno y c en el otro; se une el extremo de a con el de c y por el extremo de b se traza una paralela: corta en x.</li><li><b>Tercera proporcional</b> de a y b: x tal que a/b = b/x. Es una cuarta proporcional con c = b.</li><li><b>Media proporcional</b> de a y b: x tal que a/x = x/b, es decir, <b>x² = a · b</b>. Se llevan a y b seguidos sobre una recta (A, C, B), se traza la semicircunferencia de diámetro AB y se levanta la perpendicular en C. La altura CH es la media proporcional, por el <b>teorema de la altura</b>.</li></ul><p>La media proporcional tiene aplicaciones directas: permite construir un <b>cuadrado de igual área</b> que un rectángulo de lados a y b (cuadratura del rectángulo) y obtener segmentos de longitud √2, √3 o √n a partir de una unidad.</p><p>Un caso especial es la <b>sección áurea</b>: dividir un segmento en dos partes tales que el total es a la mayor como la mayor a la menor. La razón es el número de oro, φ = (1 + √5)/2 ≈ 1,618, presente en el pentágono y en muchas obras de arte y arquitectura.</p>`,
      svg: s9,
    },
    {
      html: `<h3>1.10 Lugares geométricos</h3><p>Un <b>lugar geométrico</b> es el conjunto de todos los puntos del plano que cumplen una misma propiedad. Pensar en lugares geométricos es la forma más potente de resolver problemas de construcción: si un punto debe cumplir dos condiciones, se dibuja el lugar de cada una y el punto buscado está en su <b>intersección</b>.</p><p>Los lugares geométricos básicos son:</p><ul><li><b>Circunferencia</b>: puntos que están a una distancia r de un punto fijo O, el centro.</li><li><b>Mediatriz</b>: puntos que equidistan de dos puntos A y B.</li><li><b>Bisectriz</b>: puntos que equidistan de dos rectas que se cortan.</li><li><b>Rectas paralelas</b>: puntos que están a una distancia d de una recta dada (dos paralelas, una a cada lado).</li><li><b>Paralela media</b>: puntos que equidistan de dos rectas paralelas.</li><li><b>Arco capaz</b>: puntos desde los que se ve un segmento con un ángulo dado.</li></ul><p>Ejemplo: para situar un pozo que esté a 30 m de un árbol y a la misma distancia de dos caminos que se cruzan, se traza la circunferencia de radio 30 m con centro en el árbol y la bisectriz del ángulo de los caminos; sus cortes, si existen, son las soluciones. Puede haber dos, una o ninguna, y discutir el número de soluciones forma parte del problema.</p>`,
      svg: s10,
    },
    {
      html: `<h3>1.11 El arco capaz</h3><p>El <b>arco capaz</b> de un ángulo α sobre un segmento AB es el lugar geométrico de los puntos X del plano desde los que el segmento se ve con ese ángulo, es decir, tales que el ángulo AXB mide α. Está formado por dos arcos de circunferencia simétricos respecto de AB. Se basa en una propiedad de los ángulos inscritos: todos los ángulos inscritos que abarcan la misma cuerda son iguales y miden la mitad del ángulo central.</p><p>Construcción del arco capaz de α sobre AB:</p><ol><li>Se traza la mediatriz de AB, que contendrá al centro O.</li><li>En el extremo A se construye el ángulo α sobre AB, hacia el lado contrario al que se quiere el arco.</li><li>Por A se traza la perpendicular al lado del ángulo; su corte con la mediatriz es el centro O.</li><li>Con centro O y radio OA se traza el arco que queda al otro lado de AB.</li></ol><p>El lado auxiliar trazado en A es la <b>tangente</b> al arco en ese punto. Para α = 90° el arco capaz es la semicircunferencia de diámetro AB (arco de Tales). El arco capaz sirve para construir triángulos dados un lado y el ángulo opuesto, y en topografía, para situar un punto desde el que se ven dos referencias bajo un ángulo medido.</p>`,
      svg: s11,
    },
    {
      html: `<h3>1.12 Rectas y puntos notables del triángulo</h3><p>En todo triángulo hay cuatro familias de rectas notables que se cortan en un punto:</p><ul><li>Las <b>mediatrices</b> de los lados se cortan en el <b>circuncentro</b> O, centro de la circunferencia circunscrita, que pasa por los tres vértices.</li><li>Las <b>bisectrices</b> de los ángulos se cortan en el <b>incentro</b> I, centro de la circunferencia inscrita, tangente a los tres lados. Siempre es interior.</li><li>Las <b>medianas</b>, que unen cada vértice con el punto medio del lado opuesto, se cortan en el <b>baricentro</b> G, centro de gravedad. G está a 2/3 de cada mediana desde el vértice.</li><li>Las <b>alturas</b>, perpendiculares desde cada vértice al lado opuesto, se cortan en el <b>ortocentro</b> H.</li></ul><p>En un triángulo acutángulo, O y H son interiores; en uno rectángulo, O es el punto medio de la hipotenusa y H coincide con el vértice del ángulo recto; en uno obtusángulo, ambos son exteriores.</p><p>Leonhard Euler demostró en 1765 que <b>O, G y H están siempre alineados</b>, en la llamada <b>recta de Euler</b>, y que G divide al segmento OH en la razón 1 : 2. En el triángulo equilátero los cuatro puntos coinciden. Los puntos notables enlazan este tema con los siguientes: el circuncentro con los polígonos inscritos y el incentro con las tangencias.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Halla el centro de la circunferencia que pasa por tres puntos no alineados A, B y C.", pasos: ["El centro equidista de A y de B: está en la mediatriz de AB.", "También equidista de B y de C: está en la mediatriz de BC.", "Se trazan ambas mediatrices; su punto de corte es el centro O.", "El radio es OA (y debe coincidir con OB y OC)."], resultado: "O = intersección de las mediatrices de AB y BC; la circunferencia es el circuncírculo del triángulo ABC." },
    { enunciado: "Construye con compás un ángulo de 75°.", pasos: ["Se construye un ángulo de 90° levantando una perpendicular en O.", "Se construye un ángulo de 60° llevando el radio sobre un arco.", "La bisectriz del ángulo comprendido entre 60° y 90° da 75° (60° + 15°)."], resultado: "75° = 60° + 30°/2, obtenido solo con arcos y bisectrices." },
    { enunciado: "Divide un segmento de 100 mm en tres partes proporcionales a 2, 3 y 5.", pasos: ["Se traza desde A una semirrecta auxiliar.", "Se llevan sobre ella 2 + 3 + 5 = 10 unidades iguales, marcando los puntos 2, 5 y 10.", "Se une el punto 10 con B y se trazan paralelas por los puntos 2 y 5.", "Comprobación numérica: 100 · 2/10 = 20 mm, 100 · 3/10 = 30 mm y 100 · 5/10 = 50 mm."], resultado: "Partes de 20, 30 y 50 mm." },
    { enunciado: "Construye la media proporcional de a = 4 cm y b = 9 cm y comprueba el resultado.", pasos: ["Se llevan seguidos a y b sobre una recta: AC = 4 cm, CB = 9 cm.", "Se traza la semicircunferencia de diámetro AB = 13 cm (centro en su punto medio).", "Se levanta la perpendicular a AB en C hasta cortar la semicircunferencia en H.", "Por el teorema de la altura, CH² = 4 · 9 = 36."], resultado: "CH = 6 cm." },
    { enunciado: "Construye un triángulo ABC conocidos el lado AB = 6 cm, el ángulo C = 60° y la altura sobre AB, h = 4 cm.", pasos: ["C ve el segmento AB bajo 60°: está en el arco capaz de 60° sobre AB.", "C está a 4 cm de la recta AB: está en una paralela a AB a 4 cm.", "Se trazan ambos lugares geométricos; sus cortes son las posibles posiciones de C.", "El radio del arco es 6/(2 · sen 60°) ≈ 3,46 cm y su punto más alto está a 3,46 + 1,73 = 5,2 cm de AB, así que la paralela lo corta en dos puntos simétricos."], resultado: "Dos soluciones simétricas (triángulos iguales) respecto de la mediatriz de AB." },
    { enunciado: "En un triángulo, el circuncentro O y el baricentro G distan 12 mm. ¿A qué distancia de G está el ortocentro?", pasos: ["O, G y H están alineados en la recta de Euler.", "G divide a OH en la razón OG : GH = 1 : 2.", "GH = 2 · OG = 2 · 12 mm."], resultado: "GH = 24 mm; OH = 36 mm." },
  ],
  errores: [
    "Trazar la mediatriz con un radio igual o menor que la mitad del segmento: los arcos no se cortan o se cortan de forma imprecisa.",
    "Cambiar la abertura del compás entre los dos arcos de una mediatriz o una bisectriz: los cortes ya no equidistan.",
    "Medir con la regla para dividir un segmento en partes iguales en vez de aplicar el teorema de Tales, con lo que se acumulan errores.",
    "Confundir el incentro (bisectrices) con el circuncentro (mediatrices) o el baricentro (medianas) con el ortocentro (alturas).",
    "Dibujar el arco capaz en el mismo lado en que se ha construido el ángulo auxiliar en el extremo: va al lado contrario.",
    "Repasar las líneas auxiliares con el mismo grosor que la solución: deben quedar finas para que el resultado se lea con claridad.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué ángulos tienen la escuadra y el cartabón? ¿Cómo se obtiene un ángulo de 105° combinándolos?", sol: "Escuadra: 45°, 45° y 90°. Cartabón: 30°, 60° y 90°. 105° = 60° + 45°: se apoya el ángulo de 60° del cartabón junto al de 45° de la escuadra con un lado común." },
    { nivel: "básico", q: "Explica la diferencia entre recta, semirrecta y segmento.", sol: "La recta es ilimitada en los dos sentidos; la semirrecta tiene un origen y es ilimitada en un sentido; el segmento está limitado por dos extremos y tiene una longitud medible." },
    { nivel: "básico", q: "Traza la mediatriz de un segmento AB de 70 mm y describe los pasos. ¿Qué radio mínimo debes usar?", sol: "Radio mayor que 35 mm (por ejemplo, 50 mm). 1) Arcos con centro en A por encima y por debajo. 2) Mismo radio desde B, cortando en P y Q. 3) La recta PQ es la mediatriz y corta AB en su punto medio (a 35 mm de cada extremo)." },
    { nivel: "básico", q: "Define la bisectriz como lugar geométrico.", sol: "Es el conjunto de puntos que equidistan de los dos lados de un ángulo (o de dos rectas secantes)." },
    { nivel: "básico", q: "Dos ángulos son suplementarios y uno mide 47°. ¿Cuánto mide el otro? ¿Y su complementario?", sol: "Suplementario: 180° − 47° = 133°. Complementario del de 47°: 90° − 47° = 43°." },
    { nivel: "básico", q: "Indica cómo se construye un ángulo de 60° con compás y por qué es exacto.", sol: "Con centro O y radio r se corta la recta base en A; con centro A y radio r se corta el arco en B. El triángulo OAB tiene tres lados iguales a r: es equilátero y sus ángulos miden 60°." },
    { nivel: "básico", q: "Divide un segmento de 85 mm en 7 partes iguales. ¿Por qué no conviene medir con regla?", sol: "Se aplica Tales: semirrecta auxiliar desde A, siete segmentos iguales con el compás, se une el séptimo punto con B y se trazan paralelas. Cada parte mide 85/7 ≈ 12,14 mm, imposible de medir con exactitud." },
    { nivel: "básico", q: "¿Cómo se llaman los puntos de corte de las medianas y de las alturas de un triángulo?", sol: "Medianas: baricentro (G). Alturas: ortocentro (H)." },
    { nivel: "básico", q: "¿Qué ocurre con la bisectriz si repites la construcción sobre cada mitad del ángulo?", sol: "Se divide el ángulo en 4 partes iguales; repitiendo de nuevo, en 8, 16, etc. Con bisectrices sucesivas solo se obtienen divisiones en potencias de 2." },
    { nivel: "básico", q: "Enumera tres lugares geométricos y la propiedad que cumplen sus puntos.", sol: "Circunferencia: distancia r a un centro. Mediatriz: equidistancia de dos puntos. Bisectriz: equidistancia de dos rectas secantes. (También paralelas a distancia d o el arco capaz.)" },
    { nivel: "medio", q: "Construye un ángulo de 15° y otro de 135° solo con regla y compás.", sol: "15°: se construye 60°, su bisectriz da 30° y la bisectriz de 30° da 15°. 135°: se levanta una perpendicular (90°) y se traza la bisectriz del ángulo recto adyacente (45°): 90° + 45° = 135°." },
    { nivel: "medio", q: "Halla el centro de un arco de circunferencia dibujado sin centro marcado.", sol: "Se marcan tres puntos A, B y C sobre el arco, se trazan las mediatrices de las cuerdas AB y BC y su intersección es el centro, porque equidista de los tres puntos." },
    { nivel: "medio", q: "Halla la cuarta proporcional de a = 3 cm, b = 4 cm y c = 6 cm, gráfica y numéricamente.", sol: "a/b = c/x → x = b · c/a = 4 · 6/3 = 8 cm. Gráficamente: se llevan a y b en un lado del ángulo y c en el otro; se une el extremo de a con el de c y por el extremo de b se traza una paralela, que corta el otro lado a 8 cm." },
    { nivel: "medio", q: "Halla la tercera proporcional de a = 4 cm y b = 6 cm.", sol: "a/b = b/x → x = b²/a = 36/4 = 9 cm. Se construye como una cuarta proporcional con c = b." },
    { nivel: "medio", q: "Construye un segmento de longitud √5 cm a partir del centímetro.", sol: "Opción 1: hipotenusa de un triángulo rectángulo de catetos 1 y 2 cm: √(1 + 4) = √5. Opción 2: media proporcional de 1 y 5 cm con la semicircunferencia de diámetro 6 cm." },
    { nivel: "medio", q: "Transporta un ángulo α dado a otra posición y súmale otro ángulo β.", sol: "Se copia α con el método del compás (mismo radio en ambos vértices y cuerda AB llevada desde A′). Después se copia β tomando como lado inicial el lado final de α. El ángulo entre el primer y el último lado es α + β." },
    { nivel: "medio", q: "Construye el arco capaz de 45° sobre un segmento de 6 cm. ¿Cuál es su radio?", sol: "Mediatriz de AB; en A, ángulo de 45° hacia abajo; perpendicular a ese lado por A hasta cortar la mediatriz en O; arco de radio OA hacia arriba. R = AB/(2 sen 45°) = 6/(2 · 0,707) ≈ 4,24 cm." },
    { nivel: "medio", q: "Localiza los puntos que están a 2 cm de una recta r y a 3 cm de un punto P situado a 1 cm de r.", sol: "Lugares: dos paralelas a r a 2 cm y la circunferencia de centro P y radio 3 cm. La paralela del lado de P está a 1 cm de P (corta en 2 puntos) y la otra a 3 cm de P (es tangente: 1 punto). Hay 3 soluciones." },
    { nivel: "medio", q: "Dibuja el incentro de un triángulo de lados 5, 6 y 7 cm y traza su circunferencia inscrita.", sol: "Se construye el triángulo con el compás; se trazan dos bisectrices, cuyo corte es I. El radio es la distancia de I a un lado: se baja la perpendicular desde I a un lado y se toma la distancia al pie. Numéricamente r = Área/s = 14,70/9 ≈ 1,63 cm." },
    { nivel: "medio", q: "Levanta una perpendicular en el extremo A de un segmento AB sin prolongarlo.", sol: "Se elige un punto O exterior y cercano, se traza la circunferencia de centro O que pasa por A; corta a AB en C; se traza el diámetro CO hasta cortar la circunferencia en D. AD es perpendicular a AB porque el ángulo CAD está inscrito en una semicircunferencia." },
    { nivel: "medio", q: "¿Por qué no se puede trisecar un ángulo cualquiera con regla y compás, si sí se puede trisecar uno de 90°?", sol: "Trisecar 90° es construir 30°, que es construible (bisectriz de 60°). En general, la trisección exige resolver una ecuación de tercer grado que no se puede reducir a raíces cuadradas, las únicas operaciones que realizan la regla y el compás (demostrado por Wantzel en 1837)." },
    { nivel: "medio", q: "En un triángulo rectángulo, ¿dónde están el circuncentro y el ortocentro?", sol: "El circuncentro está en el punto medio de la hipotenusa (arco capaz de 90°) y el ortocentro coincide con el vértice del ángulo recto, porque los catetos son alturas." },
    { nivel: "avanzado", q: "Construye un triángulo dados el lado a = 7 cm, el ángulo opuesto A = 50° y la mediana ma = 5 cm.", sol: "Se dibuja BC = 7 cm y su arco capaz de 50°; el vértice A está en él. Además, A está a 5 cm del punto medio M de BC: circunferencia de centro M y radio 5 cm. Sus cortes con el arco capaz dan A (dos soluciones simétricas)." },
    { nivel: "avanzado", q: "Halla la bisectriz del ángulo formado por dos rectas que se cortan fuera del papel.", sol: "Se trazan paralelas a ambas rectas, hacia el interior y a la misma distancia, hasta que se corten dentro del papel; la bisectriz de ese ángulo es la buscada. Alternativa: se traza una secante que corte a las dos rectas y las bisectrices de los cuatro ángulos que forma; se unen los cortes de las bisectrices interiores." },
    { nivel: "avanzado", q: "Construye un cuadrado de área igual a la de un rectángulo de 4 × 9 cm y justifícalo.", sol: "El lado del cuadrado es la media proporcional x de 4 y 9: x² = 36 → x = 6 cm. Se construye con la semicircunferencia de diámetro 13 cm y la perpendicular en el punto que separa 4 y 9 cm. Área del cuadrado 36 cm² = área del rectángulo." },
    { nivel: "avanzado", q: "Desde un barco se ven dos faros A y B, separados 4 km, bajo un ángulo de 30°. ¿Dónde puede estar el barco? Calcula el radio del lugar.", sol: "En el arco capaz de 30° sobre AB (por el lado del mar). R = AB/(2 sen 30°) = 4/(2 · 0,5) = 4 km. Si además se conoce el ángulo con un tercer faro C, se corta con el arco capaz sobre BC y se sitúa el barco en un punto." },
    { nivel: "avanzado", q: "Construye un triángulo conocidos los tres puntos medios de sus lados.", sol: "Los puntos medios M1, M2, M3 forman el triángulo medial, cuyos lados son paralelos a los del original y miden la mitad. Por cada punto medio se traza la paralela al lado opuesto del triángulo medial; las tres rectas forman el triángulo buscado." },
    { nivel: "avanzado", q: "En un triángulo de vértices A(0, 0), B(6, 0) y C(2, 4) (cm), calcula O, G y H y comprueba la recta de Euler.", sol: "G = (8/3, 4/3). O: mediatriz de AB x = 3; |OA| = |OC| → 9 + y² = 1 + (4 − y)² → y = 1: O(3, 1). H = A + B + C − 2O = (8, 4) − (6, 2) = (2, 2). GH = (−2/3, 2/3) y OG = (−1/3, 1/3): GH = 2 · OG. Están alineados y se cumple la razón 1 : 2." },
    { nivel: "avanzado", q: "Divide un segmento AB en media y extrema razón (sección áurea) y comprueba numéricamente para AB = 10 cm.", sol: "En B se levanta una perpendicular BC = AB/2; se une A con C; con centro C y radio CB se corta AC en D; con centro A y radio AD se corta AB en E. AE es el segmento áureo. AC = √(100 + 25) = 11,18; AD = 11,18 − 5 = 6,18 cm; 10/6,18 ≈ 1,618 = φ." },
    { nivel: "avanzado", q: "Sitúa un punto P que vea un segmento AB = 5 cm bajo 90° y que esté a la misma distancia de A que de una recta r paralela a AB a 1 cm por debajo.", sol: "Primer lugar: la semicircunferencia de diámetro AB (arco capaz de 90°). La segunda condición (equidistar de un punto y una recta) define una parábola de foco A y directriz r, que se dibuja por puntos. Las intersecciones de ambos lugares son las soluciones; el problema muestra que los lugares geométricos no siempre son rectas o circunferencias." },
  ],
  quiz: reparte([
    { q: "El cartabón tiene ángulos de…", o: ["45°, 45° y 90°", "30°, 60° y 90°", "30°, 30° y 120°", "60°, 60° y 60°"], a: 1, e: "La escuadra es la de 45°." },
    { q: "La mediatriz de AB es el lugar de los puntos que…", o: ["equidistan de A y B", "están sobre AB", "equidistan de dos rectas", "ven AB bajo 90°"], a: 0, e: "PA = PB." },
    { q: "Para trazar la mediatriz, el radio de los arcos debe ser…", o: ["igual a AB", "menor que AB/2", "mayor que AB/2", "cualquiera"], a: 2, e: "Si no, los arcos no se cortan." },
    { q: "Las bisectrices de un triángulo se cortan en el…", o: ["incentro", "circuncentro", "baricentro", "ortocentro"], a: 0, e: "Centro de la inscrita." },
    { q: "El baricentro está, sobre cada mediana, a…", o: ["la mitad", "1/3 desde el vértice", "2/3 desde el vértice", "un cuarto"], a: 2, e: "GV = 2 · GM." },
    { q: "Llevando el radio sobre la circunferencia desde un punto se obtiene un ángulo central de…", o: ["30°", "45°", "90°", "60°"], a: 3, e: "Triángulo equilátero." },
    { q: "Un ángulo de 75° se obtiene como…", o: ["45° + 30°", "60° + 30°", "90° − 30°", "45° + 45°"], a: 0, e: "También 90° − 15°." },
    { q: "El teorema de Tales relaciona segmentos determinados por…", o: ["rectas perpendiculares", "un haz de paralelas sobre dos rectas", "una circunferencia", "dos bisectrices"], a: 1, e: "Son proporcionales." },
    { q: "La media proporcional de 2 y 8 es…", o: ["5", "16", "4", "10"], a: 2, e: "x² = 16." },
    { q: "La tercera proporcional de 2 y 4 es…", o: ["8", "6", "16", "1"], a: 0, e: "2/4 = 4/x." },
    { q: "El arco capaz de 90° sobre AB es…", o: ["la mediatriz", "una parábola", "una recta paralela", "la semicircunferencia de diámetro AB"], a: 3, e: "Ángulo inscrito en semicircunferencia." },
    { q: "Dos rectas que se cortan tienen…", o: ["una bisectriz", "dos bisectrices perpendiculares", "dos bisectrices paralelas", "ninguna"], a: 1, e: "Una por cada par de ángulos." },
    { q: "La recta de Euler pasa por…", o: ["O, G y H", "I, G y H", "O, I y G", "los tres vértices"], a: 0, e: "El incentro, en general, no." },
    { q: "En un triángulo obtusángulo, el circuncentro es…", o: ["interior", "un vértice", "exterior", "el punto medio de un lado"], a: 2, e: "Y el ortocentro también." },
    { q: "Dos rectas del espacio que no se cortan ni son paralelas…", o: ["son secantes", "se cruzan", "coinciden", "son perpendiculares"], a: 1, e: "No existen en el plano." },
    { q: "Con bisectrices sucesivas un ángulo se divide en…", o: ["3 partes", "5 partes", "potencias de 2", "cualquier número"], a: 2, e: "2, 4, 8, 16…" },
    { q: "Los lápices duros (2H) se usan para…", o: ["líneas definitivas gruesas", "trazos auxiliares finos", "sombrear", "rotular"], a: 1, e: "Marcan poco y fino." },
    { q: "Complementario de 28° es…", o: ["152°", "62°", "72°", "28°"], a: 1, e: "90° − 28°." },
    { q: "El circuncentro de un triángulo rectángulo está en…", o: ["el vértice recto", "el baricentro", "fuera", "el punto medio de la hipotenusa"], a: 3, e: "Arco capaz de 90°." },
    { q: "Para hallar el centro de un arco basta con…", o: ["dos bisectrices", "medir el radio", "dos mediatrices de cuerdas", "una tangente"], a: 2, e: "Equidista de tres puntos." },
  ]),
  examen: reparte([
    { q: "Se quiere dividir un segmento de 110 mm en partes proporcionales a 1, 4 y 6. La parte mayor mide…", o: ["60 mm", "40 mm", "66 mm", "55 mm"], a: 0, e: "110 · 6/11." },
    { q: "El radio del arco capaz de 30° sobre un segmento de 50 mm es…", o: ["25 mm", "50 mm", "100 mm", "43,3 mm"], a: 1, e: "R = 50/(2 · 0,5)." },
    { q: "La media proporcional de 3 cm y 12 cm es…", o: ["7,5 cm", "36 cm", "4 cm", "6 cm"], a: 3, e: "√36." },
    { q: "En la recta de Euler, si GH = 30 mm, OG mide…", o: ["60 mm", "15 mm", "10 mm", "30 mm"], a: 1, e: "OG : GH = 1 : 2." },
    { q: "El punto que equidista de los tres lados de un triángulo es…", o: ["el incentro", "el circuncentro", "el ortocentro", "el baricentro"], a: 0, e: "Bisectrices." },
    { q: "Un ángulo de 105° NO se obtiene como…", o: ["60° + 45°", "90° + 15°", "135° − 30°", "120° − 30°"], a: 3, e: "120° − 30° = 90°." },
    { q: "Los puntos a 2 cm de un punto P y a 1 cm de una recta que pasa por P son…", o: ["2", "4", "1", "0"], a: 1, e: "Dos paralelas cortan a la circunferencia en 2 puntos cada una." },
    { q: "La cuarta proporcional de 2, 5 y 6 cm es…", o: ["15 cm", "2,4 cm", "12 cm", "3 cm"], a: 0, e: "x = 5 · 6/2." },
  ], 1),
  feynman: ["Por qué la mediatriz es el lugar de los puntos que equidistan de dos puntos", "Cómo se divide un segmento en partes iguales sin medir", "Por qué llevar el radio sobre la circunferencia da 60°", "Qué es el arco capaz y cómo se encuentra su centro", "Qué relación hay entre los puntos notables y las circunferencias inscrita y circunscrita"],
  glosario: [
    ["Escuadra", "Plantilla en forma de triángulo rectángulo isósceles (45°, 45°, 90°)."],
    ["Cartabón", "Plantilla en forma de triángulo rectángulo de 30°, 60° y 90°."],
    ["Segmento", "Parte de una recta comprendida entre dos puntos."],
    ["Rectas perpendiculares", "Rectas secantes que forman cuatro ángulos rectos."],
    ["Mediatriz", "Perpendicular por el punto medio de un segmento; puntos que equidistan de sus extremos."],
    ["Bisectriz", "Semirrecta que divide un ángulo en dos iguales; puntos que equidistan de sus lados."],
    ["Ángulos suplementarios", "Dos ángulos que suman 180°."],
    ["Teorema de Tales", "Un haz de paralelas determina segmentos proporcionales sobre dos rectas concurrentes."],
    ["Cuarta proporcional", "Segmento x tal que a/b = c/x."],
    ["Media proporcional", "Segmento x tal que x² = a · b."],
    ["Sección áurea", "División de un segmento en dos partes cuya razón es el número de oro, φ ≈ 1,618."],
    ["Lugar geométrico", "Conjunto de los puntos que cumplen una misma propiedad."],
    ["Arco capaz", "Lugar de los puntos desde los que un segmento se ve bajo un ángulo dado."],
    ["Circuncentro", "Corte de las mediatrices; centro de la circunferencia circunscrita."],
    ["Incentro", "Corte de las bisectrices; centro de la circunferencia inscrita."],
    ["Recta de Euler", "Recta que contiene al circuncentro, al baricentro y al ortocentro."],
  ],
  situacion: {
    titulo: "Replanteo de un huerto escolar",
    reto: "El centro quiere construir un huerto con un pozo de riego, una pérgola y unos bancales en un solar irregular. Vuestro grupo debe replantear (situar sobre el terreno) los elementos usando solo trazados geométricos, como harían en una obra, y justificar cada posición.",
    pasos: [
      "Medid el solar y dibujad un plano a escala con tres árboles existentes y los dos caminos que lo limitan.",
      "Situad el pozo a la misma distancia de los tres árboles (circuncentro) y comprobad si cae dentro del solar.",
      "Situad un banco que equidiste de los dos caminos y esté a 4 m del pozo (bisectriz y circunferencia).",
      "Dividid el lado mayor en bancales iguales con el teorema de Tales y trazad sus límites perpendiculares.",
      "Replantead en el patio, con cuerdas y estacas, la mediatriz y una perpendicular, y comparad con el plano.",
    ],
    producto: "Plano del huerto con las construcciones visibles en trazo fino y una memoria breve que justifica cada lugar geométrico utilizado.",
    evaluacion: [
      "Las construcciones son exactas y se identifican los trazos auxiliares y la solución.",
      "Se elige el lugar geométrico adecuado para cada condición y se discute el número de soluciones.",
      "El plano respeta la escala y es limpio y legible.",
      "La memoria explica el procedimiento con vocabulario técnico correcto.",
    ],
  },
  figura: fig("Trazados fundamentales de un vistazo", "Resumen de mediatriz, bisectriz, teorema de Tales y puntos notables del triángulo", [
    ["Mediatriz", ["PA = PB", "⊥ por el punto medio", "radio > AB/2", "→ circuncentro"], "var(--red)"],
    ["Bisectriz", ["equidista de lados", "arco + 2 arcos", "potencias de 2", "→ incentro"], "var(--pen)"],
    ["Tales", ["paralelas → proporción", "n partes iguales", "4.ª y 3.ª prop.", "media: x² = ab"], "var(--leaf)"],
    ["Lugares", ["circunferencia", "paralelas a d", "arco capaz", "recta de Euler"], "var(--inf)"],
  ]),
  video: { id: "XLlVTTSuuCo", titulo: "Cómo hacer la mediatriz de un segmento paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 446362, busqueda: "trazado mediatriz con compás" },
  mapa: mapa("TRAZADOS FUNDAMENTALES", "var(--bac)", [
    ["Instrumentos", "escuadra · cartabón · compás", "var(--pen)"],
    ["Rectas y ángulos", "paralelas · perpendiculares · bisectriz", "var(--leaf)"],
    ["Proporcionalidad", "Tales · cuarta · media proporcional", "var(--red)"],
    ["Lugares geométricos", "mediatriz · arco capaz · Euler", "var(--inf)"],
  ], 280),
  tarjetas: [
    ["Escuadra", "45° · 45° · 90°"],
    ["Cartabón", "30° · 60° · 90°"],
    ["Mediatriz", "Puntos con PA = PB; perpendicular por el punto medio."],
    ["Bisectriz", "Puntos que equidistan de los lados."],
    ["60° con compás", "Llevar el radio sobre el arco: triángulo equilátero."],
    ["Tales", "Paralelas cortan segmentos proporcionales."],
    ["Cuarta proporcional", "a/b = c/x"],
    ["Media proporcional", "x² = a · b (semicircunferencia y perpendicular)."],
    ["Arco capaz", "Ve AB bajo α; R = AB/(2 sen α)."],
    ["Circuncentro / incentro", "Mediatrices / bisectrices."],
    ["Baricentro / ortocentro", "Medianas (2/3) / alturas."],
    ["Recta de Euler", "O, G, H alineados; OG : GH = 1 : 2."],
  ],
  familias: ["Buscad en casa objetos donde se vean paralelas, perpendiculares y ángulos de 30°, 45° y 60°.", "Encontrad el centro de un plato o de una tapa marcando tres puntos y trazando dos mediatrices con un compás o una cuerda.", "Comprobad con una cinta métrica que la diagonal de un rectángulo de 3 × 4 m mide 5 m: así se replantean ángulos rectos en las obras.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: instrumentos y materiales de dibujo técnico; elementos geométricos y posiciones relativas; trazados fundamentales (paralelas, perpendiculares, mediatriz, bisectriz, operaciones con ángulos); proporcionalidad y teorema de Tales; lugares geométricos (circunferencia, mediatriz, bisectriz, arco capaz); rectas y puntos notables del triángulo (RD 243/2022, Dibujo Técnico I, saberes básicos A. Fundamentos geométricos; Decret 171/2022 de Catalunya, Dibuix Tècnic I, fonaments geomètrics).",
    ideas: ["Concurso de precisión: dividir un segmento de 97 mm en 7 partes con regla y con Tales y medir el error.", "GeoGebra: arrastrar un punto por el arco capaz y ver que el ángulo no cambia.", "Replanteo en el patio con cuerdas y estacas (ángulo recto 3-4-5).", "Lectura de fragmentos de los Elementos de Euclides traducidos."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Arco capaz, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arco_capaz" },
    { t: "Recta de Euler, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Recta_de_Euler" },
  ],
  revisado: "2026-11-14",
};
