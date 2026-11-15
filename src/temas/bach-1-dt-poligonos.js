// Dibujo Técnico I 1º Bachillerato · Tema 2. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, aux, fina, circ, arco, marca, pt, paso, poli, linea, recto, polar, corteCC, corteRC, mid, dist, ang, regular, tx } = G;

// 2.1 Elementos de un polígono.
const s1 = (() => {
  const O = [70, 100], V = regular(O, 58, 5, 90), Mb = mid(V[2], V[3]);
  return dib("Elementos de un polígono regular: lado, vértice, diagonal, centro, radio, apotema y ángulo central", `${poli(V, "var(--ink)", 2.6, "var(--pen)", 0.06)}${seg(V[0], V[2], "var(--muted)", 1.3, 'stroke-dasharray="5 3"')}${seg(O, V[3], "var(--leaf)", 1.8)}${seg(O, Mb, "var(--red)", 2)}${seg(O, V[4], "var(--leaf)", 1.8)}${arco(O, 18, ang(O, V[3]), ang(O, V[4]), "var(--pen)", 1.6)}${recto(Mb, V[3], O, 6)}
  ${pt(O, "O", -14, 4)}${pt(V[0], "vértice", -8, 0)}${tx(70, 174, "lado", { s: 10, b: 1 })}
  ${tx(250, 24, "radio r: O → vértice", { s: 9.5, a: "end", c: "var(--leaf)", b: 1 })}${tx(250, 38, "apotema: O → mitad del lado", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}${tx(250, 52, "ángulo central: 360°/n", { s: 9.5, a: "end", c: "var(--pen)", b: 1 })}${tx(250, 66, "- - - diagonal", { s: 9.5, a: "end", c: "var(--muted)", b: 1 })}${tx(250, 150, "n = 5 lados", { s: 9.5, a: "end" })}${tx(250, 164, "diagonales: n(n − 3)/2 = 5", { s: 9.5, a: "end" })}`);
})();

// 2.2 Triángulo dados los tres lados.
const s2 = (() => {
  const A = [50, 150], B = [210, 150], C = corteCC(A, 100, B, 120).find((p) => p[1] < 150);
  return dib("Construcción de un triángulo dados sus tres lados con dos arcos", `${seg(A, B, "var(--ink)", 2.8)}${arco(A, 100, 40, 80, "var(--muted)", 1.2)}${arco(B, 120, 115, 150, "var(--muted)", 1.2)}${seg(A, C, "var(--red)", 2.6)}${seg(B, C, "var(--red)", 2.6)}
  ${pt(A, "A", -4, 15)}${pt(B, "B", 4, 15)}${pt(C, "C", 0, -10, "var(--red)")}${tx(130, 166, "c = AB", { b: 1 })}${tx(78, 98, "b", { b: 1, c: "var(--red)" })}${tx(176, 98, "a", { b: 1, c: "var(--red)" })}
  ${paso([130, 138], 1)}${paso([42, 70], 2)}${paso([218, 70], 3)}${paso([40, 112], 4, "var(--red)")}${tx(14, 24, "cada lado < suma de los otros dos", { s: 9.5, a: "start", c: "var(--muted)" })}`);
})();

// 2.3 Dos lados y el ángulo comprendido.
const s3 = (() => {
  const A = [40, 150], B = [200, 150], C = polar(A, 120, 50);
  return dib("Triángulo dados dos lados y el ángulo comprendido entre ellos", `${seg(A, B, "var(--ink)", 2.8)}${seg(A, polar(A, 150, 50), "var(--muted)", 1.3)}${arco(A, 30, 0, 50, "var(--pen)", 1.8)}${marca(A, C, 18, "var(--pen)")}${seg(A, C, "var(--ink)", 2.6)}${seg(B, C, "var(--red)", 2.8)}
  ${pt(A, "A", -4, 15)}${pt(B, "B", 4, 15)}${pt(C, "C", -10, -2, "var(--red)")}${tx(76, 140, "50°", { s: 10, c: "var(--pen)", b: 1 })}${tx(120, 166, "c", { b: 1 })}${tx(70, 98, "b", { b: 1 })}${tx(170, 96, "a", { b: 1, c: "var(--red)" })}
  ${paso([150, 136], 1)}${paso([92, 120], 2, "var(--pen)")}${paso([152, 52], 3)}${paso([210, 98], 4, "var(--red)")}${tx(250, 24, "1 lado c · 2 ángulo A", { s: 9.5, a: "end", c: "var(--muted)" })}${tx(250, 36, "3 lado b · 4 cerrar con a", { s: 9.5, a: "end", c: "var(--muted)" })}`);
})();

// 2.4 Clasificación de cuadriláteros.
const s4 = (() => {
  const cel = (x, y, pts, lab, c) => `${poli(pts.map(([a, b]) => [x + a, y + b]), c, 2.2, c, 0.12)}${tx(x + 40, y + 74, lab, { s: 9.5, b: 1, c })}`;
  return dib("Clasificación de los cuadriláteros: paralelogramos, trapecios y trapezoides", `${cel(6, 10, [[18, 10], [62, 10], [62, 54], [18, 54]], "cuadrado", "var(--pen)")}${cel(90, 10, [[6, 16], [74, 16], [74, 52], [6, 52]], "rectángulo", "var(--pen)")}${cel(174, 10, [[40, 4], [66, 32], [40, 60], [14, 32]], "rombo", "var(--pen)")}
  ${cel(6, 96, [[18, 10], [72, 10], [60, 54], [6, 54]], "romboide", "var(--pen)")}${cel(90, 96, [[22, 12], [58, 12], [76, 54], [4, 54]], "trapecio", "var(--leaf)")}${cel(174, 96, [[10, 20], [56, 6], [74, 52], [24, 46]], "trapezoide", "var(--red)")}`);
})();

// 2.5 Cuadrado dado el lado.
const s5 = (() => {
  const A = [70, 150], B = [160, 150], C = [160, 60], D = [70, 60];
  return dib("Cuadrado dado el lado: perpendicular en un extremo y arcos de radio igual al lado", `${seg([40, 150], [200, 150], "var(--muted)", 1.2)}${seg([160, 168], [160, 40], "var(--muted)", 1.2, 'stroke-dasharray="5 3"')}${recto(B, A, C, 9)}${arco(B, 90, 84, 100, "var(--muted)", 1.2)}${marca(A, D, 22)}${marca(C, D, 22)}
  ${seg(A, B, "var(--ink)", 3)}${linea([B, C, D, A], "var(--red)", 2.6)}${pt(A, "A", -4, 15)}${pt(B, "B", 4, 15)}${pt(C, "C", 6, -4)}${pt(D, "D", -6, -6, "var(--red)")}
  ${paso([115, 166], 1)}${paso([178, 112], 2)}${paso([192, 60], 3)}${paso([48, 60], 4, "var(--red)")}${tx(250, 100, "diagonal = l·√2", { s: 9.5, a: "end", c: "var(--muted)" })}`);
})();

// 2.6 Ángulos del polígono regular.
const s6 = (() => {
  const O = [80, 92], V = regular(O, 64, 6, 0), Mb = mid(V[4], V[5]);
  return dib("Hexágono regular: ángulo central de 60 grados, ángulo interior de 120 grados, radio igual al lado", `${poli(V, "var(--ink)", 2.6, "var(--pen)", 0.06)}${seg(O, V[0], "var(--leaf)", 1.8)}${seg(O, V[5], "var(--leaf)", 1.8)}${seg(O, Mb, "var(--red)", 2)}${arco(O, 16, -60, 0, "var(--pen)", 1.8)}${arco(V[1], 14, 180, 300, "var(--inf)", 1.8)}${recto(Mb, V[5], O, 6)}
  ${pt(O, "O", -14, 4)}${tx(104, 86, "60°", { s: 9.5, c: "var(--pen)", b: 1 })}${tx(V[1][0] - 2, V[1][1] + 28, "120°", { s: 9.5, c: "var(--inf)", b: 1 })}${tx(74, 132, "a", { s: 11, c: "var(--red)", b: 1, a: "end" })}
  ${tx(154, 40, "ángulo central", { s: 9.5, a: "start", b: 1, c: "var(--pen)" })}${tx(154, 52, "360° / n", { s: 10, a: "start" })}${tx(154, 76, "ángulo interior", { s: 9.5, a: "start", b: 1, c: "var(--inf)" })}${tx(154, 88, "180°(n − 2) / n", { s: 10, a: "start" })}${tx(154, 112, "suma de interiores", { s: 9.5, a: "start", b: 1 })}${tx(154, 124, "180°(n − 2)", { s: 10, a: "start" })}${tx(154, 148, "hexágono: l = r", { s: 9.5, a: "start", b: 1, c: "var(--leaf)" })}`);
})();

// 2.7 Hexágono y triángulo inscritos.
const s7 = (() => {
  const O = [86, 92], R = 70, A = polar(O, R, 90), B = polar(O, R, -90), H = regular(O, R, 6, 90), T = [H[0], H[2], H[4]];
  return dib("Hexágono y triángulo equilátero inscritos con arcos de radio igual al de la circunferencia", `${circ(O, R, "var(--ink)", 1.8)}${seg(A, B, "var(--muted)", 1.2, 'stroke-dasharray="5 3"')}${arco(A, R, 205, 335, "var(--muted)", 1.2)}${arco(B, R, 25, 155, "var(--muted)", 1.2)}${poli(H, "var(--pen)", 2.4)}${poli(T, "var(--red)", 2.4)}
  ${H.map((P, i) => pt(P, "", 0, 0, "var(--pen)")).join("")}${pt(O, "O", 6, 4)}${pt(A, "A", 6, -4)}${pt(B, "B", 6, 12)}
  ${paso([150, 30], 1)}${paso([150, 154], 2)}${tx(170, 70, "arcos de radio r", { s: 9.5, a: "start", c: "var(--muted)" })}${tx(170, 82, "desde A y B", { s: 9.5, a: "start", c: "var(--muted)" })}${tx(170, 104, "hexágono", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(170, 116, "triángulo: alternos", { s: 9.5, a: "start", c: "var(--red)", b: 1 })}`);
})();

// 2.8 Cuadrado y octógono inscritos.
const s8 = (() => {
  const O = [96, 92], R = 70, Q = regular(O, R, 4, 0), Oc = regular(O, R, 8, 0);
  return dib("Cuadrado y octógono inscritos con dos diámetros perpendiculares y sus bisectrices", `${circ(O, R, "var(--ink)", 1.8)}${seg(Q[0], Q[2], "var(--muted)", 1.2)}${seg(Q[1], Q[3], "var(--muted)", 1.2)}${seg(Oc[1], Oc[5], "var(--muted)", 1.1, 'stroke-dasharray="5 3"')}${seg(Oc[3], Oc[7], "var(--muted)", 1.1, 'stroke-dasharray="5 3"')}${poli(Oc, "var(--pen)", 2.2)}${poli(Q, "var(--red)", 2.6)}${pt(O, "O", 6, 12)}
  ${paso([30, 28], 1)}${paso([150, 28], 2)}${tx(176, 60, "1 diámetros ⊥", { s: 9.5, a: "start" })}${tx(176, 74, "→ cuadrado", { s: 9.5, a: "start", c: "var(--red)", b: 1 })}${tx(176, 98, "2 bisectrices", { s: 9.5, a: "start" })}${tx(176, 112, "→ octógono", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(176, 140, "l₄ = r·√2", { s: 9.5, a: "start", c: "var(--muted)" })}`);
})();

// 2.9 Pentágono y decágono inscritos.
const s9 = (() => {
  const O = [86, 92], R = 72, A = [O[0] - R, 92], B = [O[0] + R, 92], C = [O[0], 92 - R], D = [O[0], 92 + R], M = mid(O, B), N = [M[0] - dist(M, C), 92], P = regular(O, R, 5, 90);
  return dib("Pentágono y decágono inscritos: el segmento CN es el lado del pentágono y ON el del decágono", `${circ(O, R, "var(--ink)", 1.8)}${seg(A, B, "var(--muted)", 1.2)}${seg(C, D, "var(--muted)", 1.2)}${marca(O, M, 0)}${arco(M, dist(M, C), ang(M, C), 180, "var(--muted)", 1.3, 'stroke-dasharray="5 3"')}${poli(P, "var(--pen)", 2.2)}${seg(C, N, "var(--red)", 2.8)}${seg(O, N, "var(--leaf)", 3)}
  ${pt(O, "O", 4, 14)}${pt(M, "M", 2, 14)}${pt(N, "N", -2, 15, "var(--red)")}${pt(C, "C", 6, -4)}${pt(A, "A", 0, -8)}${pt(B, "B", 4, 14)}
  ${paso([142, 74], 1)}${paso([34, 48], 2)}${tx(166, 34, "1 M: medio de OB", { s: 9.5, a: "start" })}${tx(166, 48, "2 arco centro M,", { s: 9.5, a: "start" })}${tx(166, 60, "radio MC → N", { s: 9.5, a: "start" })}${tx(166, 140, "CN = l₅", { s: 10.5, a: "start", c: "var(--red)", b: 1 })}${tx(166, 156, "ON = l₁₀", { s: 10.5, a: "start", c: "var(--leaf)", b: 1 })}`);
})();

// 2.10 Método general (heptágono aproximado).
const s10 = (() => {
  const O = [150, 92], R = 66, A = [150, 26], B = [150, 158], P = [150 - Math.sqrt(132 * 132 - 66 * 66), 92], D2 = [150, 26 + (132 * 2) / 7], Q = corteRC(P, D2, O, R)[1], L = dist(A, Q), da = (2 * Math.asin(L / (2 * R)) * 180) / Math.PI;
  const V = Array.from({ length: 7 }, (_, i) => polar(O, R, 90 - i * da));
  let marcas = ""; for (let i = 1; i < 7; i++) marcas += seg([146, 26 + (132 * i) / 7], [154, 26 + (132 * i) / 7], "var(--pen)", 1.4);
  return dib("Método general aproximado para inscribir un polígono de siete lados", `${circ(O, R, "var(--ink)", 1.8)}${seg(A, B, "var(--pen)", 1.4)}${marcas}${arco(A, 132, 205, 222, "var(--muted)", 1.2)}${arco(B, 132, 138, 155, "var(--muted)", 1.2)}${seg(P, Q, "var(--red)", 1.6, 'stroke-dasharray="5 3"')}${poli(V, "var(--red)", 2.4)}
  ${pt(P, "P", 0, -8)}${pt(A, "A", 6, -4)}${pt(B, "B", 6, 12)}${pt(D2, "2", -10, 4, "var(--pen)")}${pt(Q, "Q", 6, -2, "var(--red)")}${paso([30, 50], 1)}${paso([170, 120], 2)}${paso([228, 52], 3, "var(--red)")}
  ${tx(10, 140, "1 AB en n = 7 partes", { s: 9, a: "start" })}${tx(10, 152, "2 arcos de radio AB → P", { s: 9, a: "start" })}${tx(10, 164, "3 P por el punto 2 → Q", { s: 9, a: "start" })}${tx(10, 176, "AQ ≈ lado", { s: 9, a: "start", c: "var(--red)", b: 1 })}`);
})();

// 2.11 Pentágono dado el lado.
const s11 = (() => {
  const A = [95, 160], B = [165, 160], L = 70, C = [165, 90], M = mid(A, B), D = [M[0] + dist(M, C), 160], Rp = L / (2 * Math.sin(Math.PI / 5)), O = [130, 160 - L / (2 * Math.tan(Math.PI / 5))], V = regular(O, Rp, 5, -126), E = V[3];
  return dib("Pentágono regular dado el lado: la diagonal se obtiene con la sección áurea del lado", `${seg([60, 160], [240, 160], "var(--muted)", 1.2)}${seg(B, C, "var(--muted)", 1.3, 'stroke-dasharray="5 3"')}${recto(B, A, C, 7)}${arco(M, dist(M, C), 0, ang(M, C), "var(--muted)", 1.3)}${marca(A, E, 20)}${marca(B, E, 20)}
  ${poli(V, "var(--red)", 2.6, "var(--red)", 0.08)}${seg(A, B, "var(--ink)", 3)}${seg(A, E, "var(--pen)", 1.4, 'stroke-dasharray="5 3"')}${pt(A, "A", -4, 15)}${pt(B, "B", -2, 15)}${pt(C, "C", -14, 0)}${pt(M, "M", 0, 15)}${pt(D, "D", 4, 15)}${pt(E, "E", 0, -9, "var(--red)")}
  ${paso([184, 104], 1)}${paso([214, 128], 2)}${paso([150, 36], 3)}${tx(10, 22, "AD = diagonal = l · φ", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(10, 36, "1 BC ⊥ AB, BC = AB", { s: 9, a: "start" })}${tx(10, 48, "2 arco M, radio MC → D", { s: 9, a: "start" })}${tx(10, 60, "3 arcos de radio AD → E", { s: 9, a: "start" })}`);
})();

// 2.12 Polígonos estrellados.
const s12 = (() => {
  const estrella = (Cx, n, p, lab) => { const C = [Cx, 76], V = regular(C, 27, n, 90), orden = Array.from({ length: n }, (_, i) => V[(i * p) % n]); return `${circ(C, 27, "var(--line)", 1)}${poli(orden, "var(--red)", 2, "var(--red)", 0.1)}${tx(Cx, 122, lab, { s: 11, b: 1 })}`; };
  return dib("Polígonos estrellados 5/2, 7/2, 7/3 y 8/3 obtenidos uniendo vértices de p en p", `${estrella(36, 5, 2, "5/2")}${estrella(98, 7, 2, "7/2")}${estrella(162, 7, 3, "7/3")}${estrella(224, 8, 3, "8/3")}${tx(130, 26, "n/p: se unen los n puntos de p en p", { s: 9.5, c: "var(--muted)" })}${tx(130, 148, "existe si mcd(n, p) = 1 y 1 < p < n/2", { s: 10, b: 1 })}${tx(130, 166, "6/2 no es estrellado: son dos triángulos", { s: 9.5, c: "var(--muted)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Polígonos",
  minutos: 115,
  objetivos: [
    "Identificar los elementos de un polígono y clasificar triángulos y cuadriláteros",
    "Construir triángulos y cuadriláteros a partir de sus lados, ángulos, alturas o diagonales",
    "Calcular los ángulos central e interior y el número de diagonales de un polígono regular",
    "Inscribir en una circunferencia polígonos regulares de 3, 4, 5, 6, 8 y 10 lados con métodos exactos",
    "Construir polígonos regulares dado el lado y aplicar el método general aproximado",
    "Dibujar polígonos estrellados y relacionarlos con el diseño y el arte",
  ],
  claves: ["polígono", "triángulo", "cuadrilátero", "polígono regular", "apotema", "ángulo central", "inscrito", "pentágono", "sección áurea", "método general", "estrellado"],
  lectura: {
    titulo: "Un hexágono en cada panal",
    html: `<p>Las abejas construyen sus celdillas con forma de <b>hexágono regular</b>. No lo hacen por estética: de los tres polígonos regulares que cubren el plano sin dejar huecos (triángulo, cuadrado y hexágono), el hexágono es el que encierra más superficie con el mismo perímetro. Así gastan la menor cantidad posible de cera. El matemático Thomas Hales demostró en 1999 que esta «conjetura del panal» es cierta.</p>
    <p>Los polígonos están por todas partes en la técnica: las tuercas son hexagonales para que una llave fija pueda girarlas desde seis posiciones; las señales de STOP son octógonos para reconocerlas incluso por detrás; el Pentágono de Washington, los rosetones góticos o los alicatados de la Alhambra, con sus estrellas de ocho y doce puntas, son lecciones de geometría en piedra y cerámica.</p>
    <p>En este tema aprenderás a construir triángulos y cuadriláteros a partir de sus datos y a dibujar con regla y compás los polígonos regulares, inscritos en una circunferencia o a partir de su lado. Descubrirás que algunos, como el pentágono, esconden el número de oro, y que otros, como el heptágono, solo admiten construcciones aproximadas.</p>`,
  },
  pregunta: {
    texto: "¿Por qué con el mismo radio del compás se puede dar exactamente la vuelta a una circunferencia en seis pasos?",
    respuesta: "Porque el <mark>lado del hexágono regular inscrito es igual al radio</mark>: el hexágono está formado por seis triángulos equiláteros con un vértice común en el centro, y cada uno abarca un ángulo central de 60°.",
  },
  bloques: [
    {
      html: `<h3>2.1 Polígonos: elementos y clasificación</h3><p>Un <b>polígono</b> es la porción de plano limitada por una línea poligonal cerrada. Sus elementos son los <b>lados</b>, los <b>vértices</b> (puntos donde se unen dos lados), los <b>ángulos interiores</b> y <b>exteriores</b> y las <b>diagonales</b>, segmentos que unen dos vértices no consecutivos. Un polígono de n lados tiene n(n − 3)/2 diagonales: el pentágono, 5; el hexágono, 9.</p><p>Según sus ángulos, un polígono es <b>convexo</b> si todos sus ángulos interiores miden menos de 180° (cualquier segmento entre dos puntos interiores queda dentro) y <b>cóncavo</b> si alguno es mayor. Según sus lados y ángulos, es <b>regular</b> si tiene todos los lados y todos los ángulos iguales, e <b>irregular</b> en caso contrario.</p><p>Los polígonos regulares tienen además:</p><ul><li><b>Centro</b> O, que equidista de todos los vértices y de todos los lados.</li><li><b>Radio</b>, distancia del centro a un vértice: es el radio de la circunferencia circunscrita.</li><li><b>Apotema</b>, distancia del centro al punto medio de un lado: es el radio de la circunferencia inscrita.</li><li><b>Ángulo central</b>, el que forman dos radios consecutivos: 360°/n.</li></ul><p>Un polígono está <b>inscrito</b> en una circunferencia si sus vértices están sobre ella, y <b>circunscrito</b> si sus lados son tangentes a ella.</p>`,
      svg: s1,
    },
    {
      html: `<h3>2.2 Triángulos: clasificación y construcción por sus lados</h3><p>El <b>triángulo</b> es el polígono más sencillo y el único <b>indeformable</b>: si se fijan sus tres lados, su forma queda determinada. Por eso las estructuras de grúas, puentes y torres eléctricas se triangulan. Se clasifica:</p><ul><li>Por sus lados: <b>equilátero</b> (tres iguales), <b>isósceles</b> (dos iguales) y <b>escaleno</b> (todos distintos).</li><li>Por sus ángulos: <b>acutángulo</b>, <b>rectángulo</b> (un ángulo de 90°) y <b>obtusángulo</b>.</li></ul><p>La suma de sus ángulos interiores es 180° y cada lado es menor que la suma de los otros dos (<b>desigualdad triangular</b>). Por convenio, los vértices se nombran A, B y C y los lados opuestos a, b y c.</p><p>Construcción conocidos los tres lados (caso LLL):</p><ol><li>Se dibuja uno de los lados, por ejemplo c = AB.</li><li>Con centro en A y radio b se traza un arco.</li><li>Con centro en B y radio a se traza otro arco que corta al anterior en C.</li><li>Se une C con A y con B.</li></ol><p>Los arcos se cortan en dos puntos simétricos respecto de AB, que dan dos triángulos iguales. Si los arcos no se cortan, los datos no cumplen la desigualdad triangular y el problema no tiene solución: es importante discutirlo antes de dibujar.</p>`,
      svg: s2,
      video: { id: "STMFrMjXHMU", titulo: "Triángulo escaleno dados sus lados", canal: "Arturo Geometría", vistas: 366403, busqueda: "triángulos construcción dibujo técnico" },
    },
    {
      html: `<h3>2.3 Otros casos de construcción de triángulos</h3><p>Un triángulo queda determinado por tres datos independientes, siempre que al menos uno sea una longitud. Los casos clásicos, que coinciden con los <b>criterios de igualdad</b>, son:</p><ul><li><b>LAL</b>: dos lados y el ángulo comprendido. Se dibuja un lado, se copia el ángulo en su extremo, se lleva el otro lado sobre el nuevo lado y se cierra el triángulo.</li><li><b>ALA</b>: un lado y los dos ángulos adyacentes. Se construyen los ángulos en los extremos del lado y sus lados se cortan en el tercer vértice.</li><li><b>LLA</b>: dos lados y el ángulo opuesto a uno de ellos. Puede tener dos, una o ninguna solución (caso ambiguo).</li></ul><p>Cuando los datos son alturas, medianas o ángulos opuestos a un lado, se recurre a los <b>lugares geométricos</b>:</p><ul><li>Si se conoce el lado a y el ángulo opuesto A, el vértice A está en el <b>arco capaz</b> de ese ángulo sobre BC.</li><li>Si se conoce la altura h<sub>a</sub>, A está en una <b>paralela</b> a BC a esa distancia.</li><li>Si se conoce la mediana m<sub>a</sub>, A está en la <b>circunferencia</b> de centro el punto medio de BC y radio m<sub>a</sub>.</li></ul><p>En los triángulos rectángulos el arco capaz de 90° es la semicircunferencia de diámetro la hipotenusa, lo que simplifica mucho las construcciones.</p>`,
      svg: s3,
    },
    {
      html: `<h3>2.4 Cuadriláteros</h3><p>Los <b>cuadriláteros</b> son polígonos de cuatro lados; sus ángulos interiores suman 360°. Se clasifican según el paralelismo de sus lados:</p><ul><li><b>Paralelogramos</b>: dos pares de lados paralelos. Sus lados y ángulos opuestos son iguales y sus diagonales se cortan en su punto medio. Son el <b>cuadrado</b> (lados iguales y ángulos rectos), el <b>rectángulo</b> (ángulos rectos), el <b>rombo</b> (lados iguales, diagonales perpendiculares) y el <b>romboide</b> (sin ninguna de esas propiedades).</li><li><b>Trapecios</b>: un solo par de lados paralelos, las <b>bases</b>. Pueden ser rectángulos, isósceles o escalenos.</li><li><b>Trapezoides</b>: ningún par de lados paralelos.</li></ul><p>Las propiedades de las diagonales son muy útiles para construir: en el rectángulo son iguales; en el rombo son perpendiculares y bisectrices de los ángulos; en el cuadrado son iguales, perpendiculares y miden l·√2.</p><p>Un cuadrilátero necesita <b>cinco datos</b> para quedar determinado, porque con solo los cuatro lados es deformable: un marco de cuatro listones articulados se convierte en un romboide al empujarlo, como los antiguos portones con refuerzo en diagonal, que añaden el triángulo que falta. Un cuadrilátero es <b>inscriptible</b> en una circunferencia si sus ángulos opuestos suman 180°.</p>`,
      svg: s4,
    },
    {
      html: `<h3>2.5 Construcción de cuadriláteros</h3><p>La estrategia para construir un cuadrilátero es dividirlo con una diagonal en <b>dos triángulos</b> y construir cada uno con los casos ya vistos. Algunos casos frecuentes:</p><ul><li><b>Cuadrado dado el lado</b>: se dibuja el lado AB, se levanta la perpendicular en B y se lleva sobre ella BC = AB; con centro en A y en C y radio AB se trazan arcos que se cortan en D.</li><li><b>Cuadrado dada la diagonal</b>: se traza la mediatriz de la diagonal AC y sobre ella, con centro en el punto medio, se llevan las semidiagonales; así se obtienen B y D.</li><li><b>Rectángulo dados los lados</b>: igual que el cuadrado, con dos longitudes distintas.</li><li><b>Rombo dadas las diagonales</b>: se dibuja una diagonal, su mediatriz, y sobre esta se lleva la mitad de la otra a cada lado del punto medio.</li><li><b>Romboide dados dos lados y un ángulo</b>: se construye el ángulo con sus dos lados y se cierra con paralelas.</li><li><b>Trapecio dadas las bases y los lados no paralelos</b>: se resta la base menor a la mayor y se construye primero el triángulo formado por esa diferencia y los dos lados; después se completa con paralelas.</li></ul><p>En todos los casos conviene comprobar al final alguna propiedad (diagonales iguales, ángulos rectos con la escuadra) para detectar errores de construcción.</p>`,
      svg: s5,
    },
    {
      html: `<h3>2.6 Polígonos regulares: propiedades</h3><p>En un polígono regular de n lados todos los <b>ángulos centrales</b> son iguales y miden 360°/n. Uniendo el centro con los vértices, el polígono queda dividido en n triángulos isósceles iguales, cuyo ángulo desigual es el central. De ahí se deducen las fórmulas principales:</p><div class="formula"><span>ángulo central = 360°/n   ·   ángulo interior = 180°(n − 2)/n   ·   suma = 180°(n − 2)</span></div><p>El ángulo interior y el central son <b>suplementarios</b>: en el hexágono, 60° + 120° = 180°. El ángulo exterior coincide con el central.</p><p>Tabla de referencia: triángulo (central 120°, interior 60°), cuadrado (90°, 90°), pentágono (72°, 108°), hexágono (60°, 120°), octógono (45°, 135°), decágono (36°, 144°), dodecágono (30°, 150°).</p><p>El <b>perímetro</b> es n · l y el <b>área</b> es perímetro · apotema / 2. Solo tres polígonos regulares <b>teselan</b> el plano (lo cubren sin huecos ni superposiciones): el triángulo, el cuadrado y el hexágono, porque son los únicos cuyo ángulo interior es divisor de 360°.</p><p>No todos los polígonos regulares son construibles exactamente con regla y compás. Gauss demostró en 1796 que el de 17 lados sí lo es, y que el de 7 o el de 9 no: para ellos se usan métodos aproximados.</p>`,
      svg: s6,
    },
    {
      html: `<h3>2.7 Triángulo, hexágono y dodecágono inscritos</h3><p>Dada una circunferencia de centro O y radio r, los polígonos regulares de 3, 6 y 12 lados se inscriben a partir de una misma idea: <b>el radio cabe seis veces sobre la circunferencia</b>.</p><ul><li><b>Hexágono</b>: se traza un diámetro AB. Con centro en A y radio r se traza un arco que corta a la circunferencia en dos puntos; se repite desde B. Los dos extremos del diámetro y los cuatro puntos obtenidos son los seis vértices. El lado del hexágono es igual al radio.</li><li><b>Triángulo equilátero</b>: se unen los vértices del hexágono de dos en dos. Su lado mide r·√3.</li><li><b>Dodecágono</b>: se trazan además dos diámetros perpendiculares y se repiten los arcos desde sus cuatro extremos; se obtienen doce puntos. También se puede obtener con las mediatrices de los lados del hexágono.</li></ul><p>Esta construcción, que no necesita cambiar la abertura del compás, es la más precisa de todas. En la práctica, conviene trazar los arcos completos que pasan por el centro: si la circunferencia está bien dibujada, cada arco debe pasar exactamente por O, lo que sirve de comprobación.</p><p>Se usan, por ejemplo, para dibujar tuercas hexagonales, rosetones y engranajes con un número de dientes múltiplo de 6.</p>`,
      svg: s7,
    },
    {
      html: `<h3>2.8 Cuadrado y octógono inscritos</h3><p>El <b>cuadrado</b> inscrito se obtiene trazando dos <b>diámetros perpendiculares</b>: el segundo es la mediatriz del primero. Sus cuatro extremos son los vértices. El lado mide r·√2, porque cada lado es la hipotenusa de un triángulo rectángulo isósceles de catetos r.</p><p>El <b>octógono</b> se obtiene trazando además las <b>bisectrices</b> de los ángulos rectos que forman los diámetros: cortan a la circunferencia en otros cuatro puntos. Repitiendo las bisectrices se obtienen el polígono de 16 lados y el de 32.</p><p>Hay un método práctico para el octógono a partir de un cuadrado dado (por ejemplo, para cortar las esquinas de un tablero cuadrado): con centro en cada vértice del cuadrado y radio la mitad de la diagonal, se trazan arcos que cortan a los lados en ocho puntos, que son los vértices del octógono regular.</p><p>En general, una vez inscrito un polígono de n lados, las mediatrices de sus lados (o las bisectrices de sus ángulos centrales) permiten obtener el de 2n lados. Así, del cuadrado se pasa al octógono, del pentágono al decágono y del hexágono al dodecágono. Las señales de STOP, las baldosas de muchos suelos o las columnas de algunas torres son octogonales.</p>`,
      svg: s8,
    },
    {
      html: `<h3>2.9 Pentágono y decágono inscritos</h3><p>El pentágono regular no se puede construir solo llevando el radio, pero tiene una construcción exacta basada en la <b>sección áurea</b>:</p><ol><li>Se trazan dos diámetros perpendiculares AB y CD.</li><li>Se halla el punto medio M del radio OB (mediatriz de OB).</li><li>Con centro en M y radio MC se traza un arco que corta al radio OA en N.</li><li>El segmento <b>CN es el lado del pentágono</b> y el segmento <b>ON es el lado del decágono</b>.</li><li>Con centro en C y radio CN se cortan sobre la circunferencia los vértices sucesivos.</li></ol><p>¿Por qué funciona? Si r = 1, MC = √(1 + 1/4) = √5/2 y ON = √5/2 − 1/2 = (√5 − 1)/2 ≈ 0,618, que es la parte mayor del radio dividido en media y extrema razón: ese es exactamente el lado del decágono inscrito. Por Pitágoras, CN² = 1 + ON², lo que da el lado del pentágono, ≈ 1,176 · r.</p><p>El pentágono está lleno de proporciones áureas: la razón entre su diagonal y su lado es φ ≈ 1,618, y las diagonales se cortan entre sí en sección áurea formando un pentagrama. Por eso fue el símbolo de los pitagóricos. Para dibujar con precisión, conviene comprobar al final que el quinto lado mide lo mismo que los demás: si no, se reparte el error.</p>`,
      svg: s9,
    },
    {
      html: `<h3>2.10 Método general para inscribir polígonos</h3><p>Para polígonos que no tienen construcción exacta, como el heptágono o el eneágono, se usa un <b>método general aproximado</b>, válido para cualquier número de lados n:</p><ol><li>Se traza un diámetro AB y se divide en n partes iguales con el teorema de Tales.</li><li>Con centro en A y en B y radio AB se trazan dos arcos que se cortan en P (fuera de la circunferencia, sobre la perpendicular al diámetro por O).</li><li>Se une P con la segunda división del diámetro y se prolonga hasta cortar la circunferencia en Q.</li><li>El segmento AQ es, aproximadamente, el lado del polígono de n lados; se lleva con el compás n veces.</li></ol><p>El error es pequeño para n entre 5 y 9 (menor del 1 %), pero crece para valores mayores; en esos casos conviene dividir la circunferencia en partes con el transportador o construir un polígono con la mitad de lados y bisecar. Para el heptágono existe otra aproximación muy usada: su lado es casi igual a la mitad del lado del triángulo equilátero inscrito (la apotema del hexágono), con un error del 0,2 %.</p><p>Los métodos aproximados no son «trampa»: en dibujo técnico lo importante es que el error sea menor que el grosor de la línea. Al llevar el lado n veces, el error se acumula en el último lado, por eso se aconseja llevarlo desde A en los dos sentidos.</p>`,
      svg: s10,
    },
    {
      html: `<h3>2.11 Polígonos regulares dado el lado</h3><p>Cuando el dato es el lado, la circunferencia circunscrita no se conoce y hay que obtenerla.</p><ul><li><b>Triángulo equilátero</b>: arcos de radio l desde los extremos del lado.</li><li><b>Hexágono</b>: como el radio es igual al lado, con centro en los extremos A y B y radio AB se halla el centro O; la circunferencia de centro O y radio AB contiene los seis vértices.</li><li><b>Octógono</b>: el centro O es el punto de la mediatriz de AB desde el que el lado se ve con el ángulo central de 45°. Se construye el cuadrado sobre AB; con centro en el centro de ese cuadrado y radio hasta A se corta la mediatriz: ese punto ve AB con 45° (ángulo inscrito, mitad del central de 90°) y es O.</li><li><b>Pentágono</b>: se levanta en B la perpendicular BC = AB; con centro en el punto medio M de AB y radio MC se obtiene D sobre la prolongación de AB. <b>AD es la diagonal</b> del pentágono (l · φ). Con radio AD desde A y desde B se obtiene el vértice opuesto E, y con radio l se completan los otros dos.</li></ul><p>También hay un <b>método general dado el lado</b>: se construyen el hexágono y el cuadrado sobre AB, con centros O₆ y O₄ en la mediatriz; la distancia O₄O₆ se divide en seis partes y se llevan hacia arriba para obtener los centros de los polígonos de 7, 8, 9… lados, de forma aproximada.</p>`,
      svg: s11,
      video: { id: "RFMFMVbfAYA", titulo: "Cómo dibujar un hexágono a partir del lado con compás", canal: "PDD Profesor de Dibujo", vistas: 1793961, busqueda: "polígonos regulares dibujo técnico" },
    },
    {
      html: `<h3>2.12 Polígonos estrellados</h3><p>Un <b>polígono estrellado</b> se obtiene dividiendo la circunferencia en n partes iguales y uniendo los puntos de p en p, hasta volver al punto de partida. Se representa como <b>n/p</b>, donde p es el <b>paso</b>. Por ejemplo, el pentagrama es el 5/2.</p><p>Para que se forme un único polígono estrellado deben cumplirse dos condiciones:</p><ul><li>p debe ser <b>primo con n</b> (su máximo común divisor es 1). Si no lo es, se obtienen polígonos separados: con 6/2 aparecen dos triángulos superpuestos (la estrella de seis puntas, que es un falso estrellado).</li><li>p debe ser mayor que 1 y <b>menor que n/2</b>, porque n/p y n/(n − p) son la misma figura.</li></ul><p>Así, el pentágono tiene un estrellado (5/2); el heptágono, dos (7/2 y 7/3); el octógono, uno (8/3); el eneágono, dos (9/2 y 9/4); el decágono, uno (10/3); y el dodecágono, uno (12/5). Para contarlos se cuentan los números menores que n/2 y primos con n, sin incluir el 1.</p><p>Los estrellados son la base de la decoración geométrica islámica: en la Alhambra de Granada o en el Alcázar de Sevilla aparecen estrellas de 8, 12 y 16 puntas enlazadas. También se usan en logotipos, emblemas y en el diseño de piezas como ruedas dentadas o llaves de seguridad.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Calcula el ángulo central, el interior y el número de diagonales de un octógono regular.", pasos: ["Central: 360°/8 = 45°.", "Interior: 180° · (8 − 2)/8 = 135° (suplementario del central).", "Diagonales: 8 · (8 − 3)/2 = 20."], resultado: "45°, 135° y 20 diagonales." },
    { enunciado: "Construye un triángulo de lados 6, 5 y 4 cm y comprueba si es acutángulo.", pasos: ["Se dibuja AB = 6 cm.", "Arco de centro A y radio 5 cm; arco de centro B y radio 4 cm; se cortan en C.", "Se compara el cuadrado del lado mayor con la suma de los otros: 36 < 25 + 16 = 41."], resultado: "El triángulo existe (6 < 9) y es acutángulo." },
    { enunciado: "Inscribe un pentágono en una circunferencia de radio 40 mm y calcula su lado.", pasos: ["Diámetros perpendiculares AB y CD; M punto medio de OB.", "Arco de centro M y radio MC = √(20² + 40²) ≈ 44,7 mm; corta OA en N.", "ON ≈ 44,7 − 20 = 24,7 mm (lado del decágono).", "CN = √(40² + 24,7²) ≈ 47,0 mm."], resultado: "Lado del pentágono ≈ 47 mm (2 · 40 · sen 36° = 47,02 mm)." },
    { enunciado: "Construye un pentágono regular de lado 30 mm.", pasos: ["AB = 30 mm; perpendicular en B con BC = 30 mm.", "M punto medio de AB; MC = √(15² + 30²) ≈ 33,5 mm; arco de centro M hasta D en la prolongación: AD = 15 + 33,5 = 48,5 mm.", "Arcos de radio AD desde A y B → vértice E.", "Arcos de radio 30 mm desde A y E, y desde B y E → los otros dos vértices."], resultado: "Pentágono con diagonal 48,5 mm = 30 · φ." },
    { enunciado: "¿Cuántos polígonos estrellados tiene el dodecágono? ¿Y el polígono de 11 lados?", pasos: ["Dodecágono: números entre 2 y 5 (menores que 6) primos con 12: solo el 5. Estrellado 12/5.", "11 lados: entre 2 y 5 todos son primos con 11: 11/2, 11/3, 11/4 y 11/5."], resultado: "Uno para n = 12 y cuatro para n = 11." },
    { enunciado: "Construye un rombo de diagonales 80 y 50 mm y calcula su lado.", pasos: ["Se dibuja la diagonal AC = 80 mm y su mediatriz.", "Desde el punto medio se llevan 25 mm a cada lado sobre la mediatriz: B y D.", "Se unen los cuatro puntos.", "Lado = √(40² + 25²)."], resultado: "Lado ≈ 47,2 mm." },
  ],
  errores: [
    "Pensar que todo polígono con los lados iguales es regular: el rombo tiene los lados iguales pero no los ángulos.",
    "Confundir radio y apotema: el radio va al vértice y la apotema al punto medio del lado.",
    "Llevar el lado del pentágono siempre en el mismo sentido y acumular el error en el último lado.",
    "Tomar ON como lado del pentágono: ON es el lado del decágono; el del pentágono es CN.",
    "Unir los puntos de 2 en 2 en el hexágono y pensar que 6/2 es un estrellado: son dos triángulos.",
    "Presentar el método general como exacto: siempre es aproximado.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula el ángulo central e interior de un decágono regular.", sol: "Central: 360°/10 = 36°. Interior: 180° · 8/10 = 144°. Suman 180°." },
    { nivel: "básico", q: "¿Cuántas diagonales tiene un hexágono? ¿Y un dodecágono?", sol: "n(n − 3)/2: hexágono 6 · 3/2 = 9; dodecágono 12 · 9/2 = 54." },
    { nivel: "básico", q: "¿Existe un triángulo de lados 3, 4 y 8 cm? Razónalo con la construcción.", sol: "No: 8 > 3 + 4. Los arcos de radio 3 y 4 cm trazados desde los extremos del lado de 8 cm no se cortan." },
    { nivel: "básico", q: "Clasifica un cuadrilátero con un solo par de lados paralelos y los otros dos iguales.", sol: "Es un trapecio isósceles." },
    { nivel: "básico", q: "Inscribe un hexágono regular en una circunferencia de radio 35 mm. ¿Cuánto mide su lado?", sol: "Se traza un diámetro y arcos de radio 35 mm desde sus extremos; lado = radio = 35 mm." },
    { nivel: "básico", q: "Construye un cuadrado de 50 mm de lado y calcula su diagonal.", sol: "Lado AB, perpendicular en B con BC = 50 mm y arcos de 50 mm desde A y C. Diagonal = 50√2 ≈ 70,7 mm." },
    { nivel: "básico", q: "¿Qué diferencia hay entre un polígono inscrito y uno circunscrito?", sol: "Inscrito: sus vértices están en la circunferencia. Circunscrito: sus lados son tangentes a ella (la circunferencia está inscrita en el polígono)." },
    { nivel: "básico", q: "¿Por qué el triángulo es indeformable y el cuadrilátero no?", sol: "Tres lados determinan un único triángulo (criterio LLL); con cuatro lados se pueden formar infinitos cuadriláteros cambiando los ángulos. Por eso se triangulan las estructuras." },
    { nivel: "básico", q: "¿Qué polígonos regulares teselan el plano? Justifícalo.", sol: "Triángulo (60°), cuadrado (90°) y hexágono (120°): sus ángulos interiores dividen a 360° (6, 4 y 3 piezas en cada vértice). El pentágono (108°) no." },
    { nivel: "básico", q: "Inscribe un cuadrado y un octógono en una circunferencia de 40 mm de radio.", sol: "Dos diámetros perpendiculares dan el cuadrado (lado 40√2 ≈ 56,6 mm); sus bisectrices dan los otros cuatro vértices del octógono (lado 2 · 40 · sen 22,5° ≈ 30,6 mm)." },
    { nivel: "medio", q: "Construye un triángulo con a = 60 mm, B = 45° y C = 60°. ¿Cuánto mide A?", sol: "Caso ALA: se dibuja BC = 60 mm y se construyen 45° en B y 60° en C (bisectriz de 90° y 60° con compás). Los lados se cortan en A. A = 180° − 105° = 75°." },
    { nivel: "medio", q: "Construye un triángulo dados a = 70 mm, el ángulo A = 60° y la altura ha = 50 mm.", sol: "Sobre BC = 70 mm se traza el arco capaz de 60° y una paralela a BC a 50 mm. Su radio es 70/(2 sen 60°) ≈ 40,4 mm y el punto más alto del arco está a 40,4 + 20,2 = 60,6 mm de BC, así que la paralela lo corta en dos puntos: dos soluciones simétricas." },
    { nivel: "medio", q: "Construye un trapecio isósceles de bases 80 y 40 mm y lados no paralelos de 30 mm.", sol: "Diferencia de bases: 40 mm, 20 mm a cada lado. Se dibuja la base mayor, se marcan 20 mm desde cada extremo y se levantan perpendiculares; desde los extremos se corta con arcos de 30 mm. Altura = √(30² − 20²) ≈ 22,4 mm." },
    { nivel: "medio", q: "Explica por qué en el pentágono inscrito ON es el lado del decágono.", sol: "Con r = 1, OM = 1/2 y MC = √5/2, luego ON = (√5 − 1)/2 ≈ 0,618, que es la sección áurea del radio. El lado del decágono inscrito vale 2 sen 18° = 0,618, que coincide." },
    { nivel: "medio", q: "Construye un hexágono regular de lado 25 mm y calcula su apotema.", sol: "Con centro en A y B y radio 25 mm se obtiene el centro O; circunferencia de radio 25 mm y se lleva el lado seis veces. Apotema = 25 · √3/2 ≈ 21,7 mm." },
    { nivel: "medio", q: "Inscribe un heptágono con el método general en una circunferencia de radio 40 mm y compara su lado con el exacto.", sol: "Diámetro de 80 mm dividido en 7 partes; arcos de radio 80 desde los extremos → P; P por la división 2 → Q; AQ ≈ lado. El exacto es 2 · 40 · sen(180°/7) ≈ 34,7 mm; el método da un valor muy próximo (error inferior al 1 %)." },
    { nivel: "medio", q: "Dibuja los polígonos estrellados del eneágono.", sol: "Pasos primos con 9 entre 2 y 4: 2 y 4. Estrellados 9/2 y 9/4. El 9/3 daría tres triángulos." },
    { nivel: "medio", q: "Calcula el área de un hexágono regular de 30 mm de lado.", sol: "Perímetro 180 mm; apotema 30 · √3/2 ≈ 25,98 mm; área = 180 · 25,98/2 ≈ 2338 mm²." },
    { nivel: "medio", q: "Construye un rectángulo dada su diagonal de 70 mm y un lado de 40 mm.", sol: "Se traza la diagonal AC y la semicircunferencia de diámetro AC (arco capaz de 90°). Con centro en A y radio 40 mm se corta en B. Se completa D por simetría o con paralelas. El otro lado mide √(70² − 40²) ≈ 57,4 mm." },
    { nivel: "medio", q: "Halla el octógono regular que resulta al cortar las esquinas de un cuadrado de 60 mm de lado.", sol: "Con centro en cada vértice y radio la semidiagonal (30√2 ≈ 42,4 mm) se cortan los lados. Cada esquina se corta a 60 − 42,4 = 17,6 mm del vértice; lado del octógono = 60 − 2 · 17,6 ≈ 24,9 mm." },
    { nivel: "medio", q: "¿Qué ángulo forman dos diagonales consecutivas trazadas desde un mismo vértice de un pentágono regular?", sol: "Desde un vértice, las diagonales dividen el ángulo interior de 108° en tres ángulos iguales de 36° (son ángulos inscritos que abarcan un lado, 72°/2). El ángulo entre las dos diagonales es 36°." },
    { nivel: "medio", q: "Construye un rombo de lado 50 mm con un ángulo de 60°. ¿Qué miden sus diagonales?", sol: "Ángulo de 60° con dos lados de 50 mm y se cierra con paralelas. La diagonal menor forma un triángulo equilátero: 50 mm; la mayor: 2 · 50 · cos 30° ≈ 86,6 mm." },
    { nivel: "avanzado", q: "Demuestra que en el pentágono regular la diagonal mide l · φ.", sol: "Dos diagonales que se cortan forman triángulos isósceles semejantes de ángulos 36°-72°-72°. Si d es la diagonal y l el lado, la semejanza da d/l = l/(d − l), es decir, d² − dl − l² = 0 → d/l = (1 + √5)/2 = φ." },
    { nivel: "avanzado", q: "Construye un triángulo dados el perímetro (150 mm) y los ángulos B = 50° y C = 70°.", sol: "Se dibuja un segmento PQ = 150 mm. En P se construye B/2 = 25° y en Q, C/2 = 35°; los lados se cortan en A. Las mediatrices de AP y AQ cortan a PQ en B y C. El triángulo ABC tiene perímetro PQ, porque AB = PB y AC = QC." },
    { nivel: "avanzado", q: "Construye un octógono regular dado el lado AB = 30 mm.", sol: "El centro O está en la mediatriz de AB y ve AB bajo 45°. Se construye el cuadrado sobre AB y su centro Q; la circunferencia de centro Q y radio QA corta la mediatriz en O (ángulo inscrito de 45°). Con centro O y radio OA se traza la circunferencia y se lleva el lado ocho veces. Comprobación: R = 30/(2 sen 22,5°) ≈ 39,2 mm." },
    { nivel: "avanzado", q: "Inscribe un dodecágono en una circunferencia de radio 50 mm y calcula su lado y su área.", sol: "Dos diámetros perpendiculares y arcos de radio 50 desde sus cuatro extremos dan 12 puntos. Lado = 2 · 50 · sen 15° ≈ 25,9 mm. Área = 3r² = 7500 mm² (fórmula exacta para el dodecágono)." },
    { nivel: "avanzado", q: "Diseña una baldosa decorativa con un estrellado 8/3 inscrito en un cuadrado de 80 mm.", sol: "Circunferencia inscrita de radio 40 mm; diámetros perpendiculares y sus bisectrices (8 puntos); se unen de 3 en 3: 1-4-7-2-5-8-3-6-1. La estrella resultante es la de muchos alicatados andalusíes." },
    { nivel: "avanzado", q: "Construye un cuadrilátero inscriptible ABCD con AB = 60, BC = 40, el ángulo B = 100° y la diagonal AC conocida por construcción. ¿Cuánto mide D?", sol: "Se construye el triángulo ABC (LAL) y su circunferencia circunscrita (mediatrices). D está en el arco que no contiene a B; como es inscriptible, D = 180° − 100° = 80°. Hacen falta más datos (por ejemplo, CD) para fijar D sobre el arco." },
    { nivel: "avanzado", q: "Un perno tiene cabeza hexagonal de 17 mm entre caras (la medida de la llave). Calcula el diámetro de la circunferencia circunscrita y dibújala.", sol: "17 mm es el doble de la apotema: a = 8,5 mm. r = a/cos 30° ≈ 9,81 mm; diámetro entre vértices ≈ 19,6 mm. Se dibuja la circunferencia de radio 9,81 mm y el hexágono inscrito; se comprueba que la distancia entre lados opuestos es 17 mm." },
    { nivel: "avanzado", q: "Dibuja un pentágono estrellado de 60 mm de lado exterior (punta a punta) y razona qué proporción hay entre sus segmentos.", sol: "Cada diagonal del pentágono queda dividida por las otras en tres segmentos; el mayor es al mediano como el mediano al menor y como el total al mayor: φ. Se construye primero el pentágono convexo cuya diagonal es 60 mm (lado 60/φ ≈ 37,1 mm) y se trazan sus diagonales." },
  ],
  quiz: reparte([
    { q: "El ángulo central de un pentágono regular mide…", o: ["108°", "60°", "72°", "36°"], a: 2, e: "360°/5." },
    { q: "El ángulo interior de un hexágono regular mide…", o: ["120°", "60°", "135°", "108°"], a: 0, e: "180° · 4/6." },
    { q: "La apotema es la distancia del centro…", o: ["a un vértice", "al punto medio de un lado", "a una diagonal", "al perímetro"], a: 1, e: "Radio de la inscrita." },
    { q: "Un polígono de 7 lados tiene… diagonales", o: ["7", "21", "28", "14"], a: 3, e: "7 · 4/2." },
    { q: "El lado del hexágono inscrito es…", o: ["igual al radio", "r√3", "r√2", "la apotema"], a: 0, e: "Triángulos equiláteros." },
    { q: "El lado del cuadrado inscrito es…", o: ["r", "r√3", "r√2", "2r"], a: 2, e: "Hipotenusa de catetos r." },
    { q: "En la construcción del pentágono inscrito, ON es el lado del…", o: ["pentágono", "decágono", "hexágono", "octógono"], a: 1, e: "CN es el del pentágono." },
    { q: "La razón diagonal/lado del pentágono es…", o: ["√2", "√3", "2", "φ ≈ 1,618"], a: 3, e: "Número de oro." },
    { q: "El método general para inscribir polígonos es…", o: ["exacto", "aproximado", "solo para pares", "solo para el heptágono"], a: 1, e: "Error pequeño." },
    { q: "¿Cuál NO es un estrellado verdadero?", o: ["5/2", "7/3", "6/2", "8/3"], a: 2, e: "mcd(6, 2) ≠ 1." },
    { q: "Un paralelogramo con lados iguales y ángulos no rectos es un…", o: ["rombo", "rectángulo", "romboide", "trapecio"], a: 0, e: "Diagonales perpendiculares." },
    { q: "Los ángulos de un cuadrilátero suman…", o: ["180°", "540°", "360°", "720°"], a: 2, e: "Dos triángulos." },
    { q: "Un cuadrilátero es inscriptible si sus ángulos opuestos…", o: ["son iguales", "suman 180°", "suman 90°", "son rectos"], a: 1, e: "Suplementarios." },
    { q: "El triángulo equilátero inscrito se obtiene…", o: ["con el método general", "uniendo vértices alternos del hexágono", "con diámetros perpendiculares", "con la sección áurea"], a: 1, e: "De dos en dos." },
    { q: "Cuántos estrellados tiene el heptágono", o: ["1", "3", "0", "2"], a: 3, e: "7/2 y 7/3." },
    { q: "Las diagonales de un rombo son…", o: ["iguales", "paralelas", "perpendiculares", "iguales a los lados"], a: 2, e: "Y bisectrices." },
    { q: "Un triángulo con lados 5, 12 y 13 es…", o: ["rectángulo", "acutángulo", "obtusángulo", "equilátero"], a: 0, e: "25 + 144 = 169." },
    { q: "La suma de ángulos interiores de un octógono es…", o: ["1080°", "1440°", "720°", "900°"], a: 0, e: "180° · 6." },
    { q: "El polígono regular de 17 lados…", o: ["no se puede construir", "es construible con regla y compás", "solo es aproximado", "no existe"], a: 1, e: "Lo demostró Gauss." },
    { q: "Un trapezoide tiene…", o: ["dos pares de lados paralelos", "un par", "ningún par", "lados iguales"], a: 2, e: "Ninguno paralelo." },
  ], 2),
  examen: reparte([
    { q: "Lado del pentágono inscrito en r = 50 mm (≈)…", o: ["58,8 mm", "50 mm", "30,9 mm", "70,7 mm"], a: 0, e: "2 · 50 · sen 36°." },
    { q: "Apotema del hexágono de lado 40 mm (≈)…", o: ["20 mm", "34,6 mm", "40 mm", "46,2 mm"], a: 1, e: "40 · √3/2." },
    { q: "El ángulo interior de un polígono regular mide 140°. ¿Cuántos lados tiene?", o: ["8", "10", "9", "12"], a: 2, e: "Central 40° → 360/40." },
    { q: "Diagonal de un pentágono de lado 30 mm (≈)…", o: ["42,4 mm", "48,5 mm", "51,9 mm", "60 mm"], a: 1, e: "30 · 1,618." },
    { q: "Con a = 50 mm y A = 90°, el vértice A está en…", o: ["una paralela a BC", "la mediatriz de BC", "la semicircunferencia de diámetro BC", "la bisectriz de B"], a: 2, e: "Arco capaz de 90°." },
    { q: "Número de estrellados del polígono de 10 lados", o: ["1", "2", "3", "4"], a: 0, e: "Solo 10/3." },
    { q: "Lado del triángulo equilátero inscrito en r = 30 mm (≈)…", o: ["30 mm", "42,4 mm", "51,96 mm", "60 mm"], a: 2, e: "r√3." },
    { q: "En el método general, el punto P se obtiene con arcos de radio…", o: ["el radio", "el diámetro", "el lado", "la apotema"], a: 1, e: "Radio AB." },
  ], 3),
  feynman: ["Por qué el radio cabe seis veces en la circunferencia", "Cómo se pasa de un polígono inscrito al de doble número de lados", "Dónde aparece la sección áurea en el pentágono", "Por qué el método general es aproximado y cuándo conviene usarlo", "Cuándo un polígono estrellado es verdadero"],
  glosario: [
    ["Polígono", "Porción de plano limitada por una línea poligonal cerrada."],
    ["Diagonal", "Segmento que une dos vértices no consecutivos."],
    ["Polígono convexo", "Polígono con todos sus ángulos interiores menores de 180°."],
    ["Polígono regular", "Polígono con todos sus lados y ángulos iguales."],
    ["Apotema", "Distancia del centro de un polígono regular al punto medio de un lado."],
    ["Ángulo central", "Ángulo entre dos radios consecutivos: 360°/n."],
    ["Polígono inscrito", "Polígono cuyos vértices están sobre una circunferencia."],
    ["Polígono circunscrito", "Polígono cuyos lados son tangentes a una circunferencia."],
    ["Desigualdad triangular", "Cada lado de un triángulo es menor que la suma de los otros dos."],
    ["Paralelogramo", "Cuadrilátero con dos pares de lados paralelos."],
    ["Trapecio", "Cuadrilátero con un solo par de lados paralelos."],
    ["Trapezoide", "Cuadrilátero sin lados paralelos."],
    ["Número de oro", "φ = (1 + √5)/2 ≈ 1,618; razón entre la diagonal y el lado del pentágono."],
    ["Método general", "Construcción aproximada para inscribir polígonos de cualquier número de lados."],
    ["Polígono estrellado", "Figura n/p obtenida uniendo n puntos de una circunferencia de p en p."],
    ["Teselación", "Recubrimiento del plano con figuras sin huecos ni superposiciones."],
  ],
  situacion: {
    titulo: "Un alicatado para el vestíbulo",
    reto: "El instituto quiere decorar el vestíbulo con un panel de azulejos geométricos inspirado en la Alhambra. Vuestro equipo debe diseñar el módulo base, con polígonos regulares y estrellados construidos con exactitud, y calcular cuántas piezas de cada color harían falta.",
    pasos: [
      "Investigad los alicatados nazaríes y elegid un motivo con estrellas de 8 o 12 puntas.",
      "Construid el módulo con regla y compás: circunferencia, polígono regular y estrellado, dejando visibles los trazados.",
      "Comprobad que el módulo tesela el plano y dibujad una composición de 3 × 3 módulos.",
      "Calculad el área de cada tipo de pieza y el número de piezas para un panel de 2 × 1 m.",
      "Reproducid el diseño en un programa de CAD o GeoGebra y comparad la precisión.",
    ],
    producto: "Lámina A3 con el módulo construido, la composición coloreada y una tabla de piezas, más la versión digital.",
    evaluacion: [
      "Las construcciones de los polígonos son exactas y se distinguen los trazados auxiliares.",
      "El módulo tesela correctamente y la composición es coherente.",
      "Los cálculos de áreas y piezas son correctos.",
      "La presentación es limpia y explica el referente artístico.",
    ],
  },
  figura: fig("Polígonos de un vistazo", "Resumen de fórmulas y construcciones de polígonos regulares", [
    ["Fórmulas", ["central 360°/n", "interior 180°(n−2)/n", "diagonales n(n−3)/2", "área = P · a/2"], "var(--pen)"],
    ["Con el radio", ["hexágono: l = r", "triángulo: r√3", "dodecágono", "radio 6 veces"], "var(--leaf)"],
    ["Con diámetros", ["cuadrado: r√2", "octógono", "pentágono: CN", "decágono: ON"], "var(--red)"],
    ["Otros", ["método general ≈", "dado el lado", "estrellados n/p", "mcd(n, p) = 1"], "var(--inf)"],
  ]),
  video: { id: "S6XYNLLajmE", titulo: "Pentágono regular dado el lado", canal: "Arturo Geometría", vistas: 1623708, busqueda: "pentágono dado el lado" },
  mapa: mapa("POLÍGONOS", "var(--bac)", [
    ["Triángulos", "LLL · LAL · ALA · arco capaz", "var(--pen)"],
    ["Cuadriláteros", "paralelogramos · trapecios", "var(--leaf)"],
    ["Regulares inscritos", "3, 4, 5, 6, 8, 10, 12 · método general", "var(--red)"],
    ["Dado el lado y estrellados", "pentágono áureo · n/p", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Ángulo central", "360°/n"],
    ["Ángulo interior", "180°(n − 2)/n"],
    ["Diagonales", "n(n − 3)/2"],
    ["Hexágono inscrito", "l = r"],
    ["Triángulo inscrito", "l = r√3 (vértices alternos del hexágono)"],
    ["Cuadrado inscrito", "l = r√2 (diámetros ⊥)"],
    ["Pentágono inscrito", "M medio de OB; arco MC → N; CN = l₅"],
    ["Decágono inscrito", "ON = l₁₀ = 0,618 r"],
    ["Pentágono dado el lado", "Diagonal = l · φ"],
    ["Método general", "Diámetro en n partes; P por el punto 2"],
    ["Estrellado n/p", "mcd(n, p) = 1 y 1 < p < n/2"],
    ["Teselan el plano", "Triángulo, cuadrado y hexágono"],
  ],
  familias: ["Buscad polígonos en la calle: señales de tráfico, tuercas, baldosas, logotipos.", "Doblad una tira de papel con un nudo plano: aparece un pentágono regular.", "Contad en un balón clásico cuántos pentágonos y hexágonos tiene (12 y 20).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: triángulos y cuadriláteros (clasificación, propiedades y construcción a partir de distintos datos); polígonos regulares inscritos en la circunferencia con métodos exactos y aproximados; construcción dado el lado; polígonos estrellados; aplicaciones al diseño y la arquitectura (RD 243/2022, Dibujo Técnico I, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic I).",
    ideas: ["Comparar la precisión del método general con el transportador midiendo el error del último lado.", "Visita virtual a la Alhambra para analizar sus estrellados.", "Construir con GeoGebra una herramienta que dibuje el estrellado n/p.", "Papiroflexia: pentágono con un nudo de papel."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Polígono regular, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pol%C3%ADgono_regular" },
    { t: "Polígono estrellado, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pol%C3%ADgono_estrellado" },
  ],
  revisado: "2026-11-14",
};
