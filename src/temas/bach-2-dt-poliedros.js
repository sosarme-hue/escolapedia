// Dibujo Técnico II 2º Bachillerato · Tema 8. Nivel libro. Poliedros calculados en 3D y proyectados con visibilidad.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, mid, dist, unit, add, sub, mul, tx, dash, LT, planoD, v3, giro3, giroZ, envolvente, polVista, polDiedrico, vistaAxo, POL, colocar } = G;

const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const L = (P, s, dx, dy, c = "var(--ink)", a = "start", sz = 11) => tx(P[0] + dx, P[1] + dy, s, { s: sz, b: 1, a, c });
const fino = (A, B) => seg(A, B, "var(--muted)", 0.8, 'stroke-dasharray="2 2"');
const cen3 = (V) => v3.mul(V.reduce((s, p) => v3.add(s, p), [0, 0, 0]), 1 / V.length);
const centrar = (V) => { const c = cen3(V); return V.map((p) => v3.sub(p, c)); };
// Líneas de referencia entre planta y alzado de los vértices indicados.
const refs = (V, yt, ids) => ids.map((i) => fino([V[i][0], yt + V[i][1]], [V[i][0], yt - V[i][2]])).join("");

// 8.1 Los cinco poliedros regulares.
const s1 = (() => {
  const nombres = [["tetra", "tetraedro", 34, 40], ["cubo", "hexaedro", 26, 86], ["octa", "octaedro", 30, 132], ["dodeca", "dodecaedro", 15, 182], ["ico", "icosaedro", 20, 230]];
  const col = ["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)", "var(--red)"];
  return dib("Los cinco poliedros regulares convexos o sólidos platónicos: tetraedro, hexaedro (cubo), octaedro, dodecaedro e icosaedro", nombres.map(([k, n, a, x], i) => { const V = centrar(POL[k](a)), A = vistaAxo([x, 86], 1, 28, 22); return polVista(envolvente(V), A.P, A.w, col[i], 0.14, 1.8) + tx(x, i % 2 ? 150 : 136, n, { s: 9.5, b: 1, a: "middle", c: col[i] }); }).join("") + tx(130, 168, "caras · vértices · aristas: C + V = A + 2", { s: 10.5, b: 1, a: "middle", c: "var(--ink)" }));
})();

// 8.2 Sección principal del tetraedro.
const s2 = (() => {
  const a = 96, C0 = [64, 120], T = [0, 1, 2].map((i) => G.polar(C0, a / Math.sqrt(3), 90 + 120 * i)), O = C0;
  const r = a / Math.sqrt(3), h = a * Math.sqrt(2 / 3), B = [160, 150], Rr = [B[0] + r, B[1]], V = [B[0], B[1] - h];
  return dib("Sección principal del tetraedro: el triángulo rectángulo formado por la altura h, el radio r de la base y la arista a da h = a·√(2/3)", `${poli(T, "var(--pen)", 2.2, "var(--pen)", 0.1)}${seg(O, T[0], "var(--red)", 2)}${pt(O, "O", 4, 12)}${L(mid(O, T[0]), "r", 6, 4, "var(--red)")}${L(mid(T[1], T[2]), "a", 0, 14, "var(--pen)", "middle")}
  ${poli([B, Rr, V], "var(--leaf)", 2.2, "var(--leaf)", 0.1)}${G.recto(B, Rr, V, 7)}${seg(B, V, "var(--red)", 2.4)}${L(mid(B, V), "h", -6, 4, "var(--red)", "end")}${L(mid(B, Rr), "r", 0, 14, "var(--leaf)", "middle")}${L(mid(Rr, V), "a", 6, 0, "var(--leaf)")}${pt(V, "V", 6, 0)}${tx(250, 22, "h = √(a² − r²) = a√(2/3)", { s: 10.5, b: 1, a: "end", c: "var(--red)" })}`);
})();

// 8.3 Tetraedro apoyado en una cara.
const s3 = (() => {
  const yt = 92, V = colocar(POL.tetra(70).map((p) => [p[0], -p[1], p[2]]), 130, 42), pol = envolvente(V), lab = ["A", "B", "C", "D"];
  return dib("Tetraedro apoyado por una cara en el plano horizontal: la planta es un triángulo equilátero con su centro, y el alzado un triángulo cuya altura es la del tetraedro", clip(`${LT(yt, 8, 252)}${refs(V, yt, [0, 1, 2, 3])}${polDiedrico(pol, yt)}${V.map((p, i) => L([p[0], yt + p[1]], lab[i].toLowerCase(), i === 3 ? 6 : -4, i === 3 ? 12 : (i === 0 ? 14 : -6), "var(--ink)", i === 3 ? "start" : "end", 10)).join("")}${L([V[3][0], yt - V[3][2]], "d′", 6, 0, "var(--ink)", "start", 10)}`, "cl83") + tx(10, 22, "h = 0,816 a", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 8.4 Tetraedro con dos aristas opuestas horizontales.
const s4 = (() => {
  const yt = 76, t = 52, V0 = [[0, 0, 0], [t, t, 0], [t, 0, t], [0, t, t]], V = colocar(V0.map((p) => giroZ(20)(v3.sub(p, [t / 2, t / 2, 0]))), 120, 48);
  return dib("Tetraedro con dos aristas opuestas horizontales: la planta es un cuadrado cuyas diagonales son esas dos aristas; el tetraedro se inscribe en un cubo", clip(`${LT(yt, 8, 252)}${refs(V, yt, [0, 1, 2, 3])}${polDiedrico(envolvente(V), yt)}`, "cl84") + tx(10, 172, "planta: cuadrado de lado a/√2", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }));
})();

// 8.5 Hexaedro apoyado en una cara.
const s5 = (() => {
  const yt = 70, V = colocar(POL.cubo(52).map(giroZ(30)), 130, 46), pol = envolvente(V);
  return dib("Hexaedro (cubo) apoyado en una cara y girado 30°: la planta es un cuadrado en verdadera magnitud y el alzado muestra dos caras laterales; las aristas ocultas se dibujan a trazos", clip(`${LT(yt, 8, 252)}${refs(V, yt, [0, 2, 4, 6])}${polDiedrico(pol, yt)}`, "cl85") + tx(10, 172, "sección principal: a × a√2", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 8.6 Hexaedro con una diagonal vertical.
const s6 = (() => {
  const yt = 82, R = giro3([1, 1, 1], [0, 0, 1]), V = colocar(centrar(POL.cubo(42)).map(R).map(giroZ(15)), 120, 44), pol = envolvente(V);
  const H = Math.max(...V.map((p) => p[2]));
  return dib("Hexaedro con una diagonal vertical: la planta es un hexágono regular y en el alzado los vértices quedan a tres alturas, a 1/3 y 2/3 de la diagonal a√3", clip(`${LT(yt, 8, 252)}${polDiedrico(pol, yt)}${[1, 2].map((k) => seg([30, yt - (H * k) / 3], [220, yt - (H * k) / 3], "var(--muted)", 0.8, 'stroke-dasharray="2 3"')).join("")}${L([222, yt - H / 3], "d/3", 2, 4, "var(--muted)", "start", 9.5)}${L([222, yt - (2 * H) / 3], "2d/3", 2, 4, "var(--muted)", "start", 9.5)}`, "cl86") + tx(10, 172, "planta: hexágono regular", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }));
})();

// 8.7 Octaedro con una diagonal vertical.
const s7 = (() => {
  const yt = 84, V = colocar(POL.octa(52).map(giroZ(25)), 120, 44), pol = envolvente(V);
  return dib("Octaedro apoyado en un vértice con una diagonal vertical: la planta es un cuadrado con sus diagonales y el alzado un rombo", clip(`${LT(yt, 8, 252)}${refs(V, yt, [0, 1, 2, 3])}${polDiedrico(pol, yt)}`, "cl87") + tx(10, 172, "diagonal = a√2", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 8.8 Octaedro apoyado en una cara.
const s8 = (() => {
  const yt = 70, R = giro3([1, 1, 1], [0, 0, 1]), Vc = centrar([[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((p) => v3.mul(p, 58 / Math.SQRT2))), V = colocar(Vc.map(R).map(giroZ(0)), 130, 52), pol = envolvente(V);
  return dib("Octaedro apoyado en una cara: la planta es un hexágono regular formado por las caras superior e inferior, dos triángulos equiláteros girados 180°", clip(`${LT(yt, 8, 252)}${polDiedrico(pol, yt)}`, "cl88") + tx(10, 172, "altura = a√(2/3)", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 8.9 Poliedros conjugados: cubo y octaedro.
const s9 = (() => {
  const a = 70, Vc = centrar(POL.cubo(a)), Vo = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((p) => v3.mul(p, a / 2)), A = vistaAxo([80, 92], 1, 28, 22);
  const B = vistaAxo([196, 92], 1, 18, 20), Vi = centrar(POL.ico(40));
  return dib("Poliedros conjugados: los centros de las caras de un cubo son los vértices de un octaedro; el icosaedro y el dodecaedro son también conjugados", `${polVista(envolvente(Vc), A.P, A.w, "var(--pen)", 0.05, 1.6)}${polVista(envolvente(Vo), A.P, A.w, "var(--red)", 0.16, 2)}${polVista(envolvente(Vi), B.P, B.w, "var(--leaf)", 0.14, 1.8)}${tx(80, 168, "cubo ↔ octaedro", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(196, 168, "icosaedro ↔ dodecaedro", { s: 10.5, b: 1, a: "middle", c: "var(--leaf)" })}`);
})();

// 8.10 Tetraedro apoyado en un plano oblicuo.
const s10 = (() => {
  const yt = 64, PL = planoD(226, 0.45, 1, 0.7, yt), a = 44, Cab = PL.abate(120, 30), T = [0, 1, 2].map((i) => G.polar(Cab, a / Math.sqrt(3), 100 + 120 * i));
  const plan = T.map(PL.desabate), base = plan.map((p) => { const o = p[1] - yt; return [p[0], o, PL.cota(p[0], o)]; }), C = cen3(base), n = v3.unit([0.45, 1, 0.7]), D = v3.add(C, v3.mul(n, a * Math.sqrt(2 / 3)));
  const pol = envolvente([...base, D]);
  return dib("Tetraedro apoyado en un plano oblicuo: se dibuja la base en verdadera magnitud en el plano abatido, se desabate y el vértice se sitúa sobre la perpendicular al plano por el centro de la base, a la altura del tetraedro", clip(`${LT(yt, 8, 252)}${seg(PL.N, PL.hTr(0), "var(--muted)", 1.8)}${seg(PL.N, PL.vTr(130), "var(--muted)", 1.8)}${poli(T, "var(--red)", 1.6, "var(--red)", 0.08)}${T.map((q, i) => seg(q, plan[i], "var(--muted)", 0.8, dash)).join("")}${polDiedrico(pol, yt)}${fino([D[0], yt + D[1]], [D[0], yt - D[2]])}`, "cl810") + tx(10, 172, "base (VM) abatida", { s: 10.5, b: 1, a: "start", c: "var(--red)" }) + tx(250, 22, "vértice sobre la perpendicular", { s: 10, b: 1, a: "end", c: "var(--pen)" }));
})();

// 8.11 Sección de un cubo por un plano proyectante vertical y su verdadera magnitud.
const s11 = (() => {
  const yt = 66, x0 = 110, m = Math.tan(G.rad(40)), V = colocar(POL.cubo(50).map(giroZ(20)), 156, 46), pol = envolvente(V);
  const f = (p) => p[2] - m * (p[0] - x0), cortes = [];
  pol.aristas.forEach((e) => { const A = V[e.a], B = V[e.b], fa = f(A), fb = f(B); if (fa * fb < 0) { const t = fa / (fa - fb); cortes.push(v3.add(A, v3.mul(v3.sub(B, A), t))); } });
  const c = cen3(cortes), sec = cortes.sort((p, q) => Math.atan2(p[1] - c[1], p[0] - c[0]) - Math.atan2(q[1] - c[1], q[0] - c[0]));
  const planta = sec.map((p) => [p[0], yt + p[1]]), ab = sec.map((p) => [x0 - Math.hypot(p[0] - x0, p[2]), yt + p[1]]);
  return dib("Sección de un cubo por un plano proyectante vertical: en el alzado los puntos de corte se leen sobre la traza v; la planta de la sección se obtiene sobre las aristas y su verdadera magnitud abatiendo el plano sobre el PH", clip(`${LT(yt, 8, 252)}${polDiedrico(pol, yt)}${seg([x0, yt], [x0 + 80, yt - 80 * m], "var(--red)", 2.2)}${seg([x0, yt], [x0, 178], "var(--red)", 1.6)}${poli(planta, "var(--red)", 2.2, "var(--red)", 0.2)}${poli(ab, "var(--leaf)", 2.2, "var(--leaf)", 0.16)}${planta.map((p, i) => seg(p, ab[i], "var(--muted)", 0.7, 'stroke-dasharray="2 2"')).join("")}`, "cl811") + L([x0 + 52, yt - 52 * m], "v", 6, 4, "var(--red)") + L([x0, 172], "h", 4, 0, "var(--red)") + tx(10, 22, "sección en VM", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 8.12 Desarrollos del tetraedro y del cubo.
const s12 = (() => {
  const a = 40, P0 = [14, 150], T = [P0, [P0[0] + 2 * a, P0[1]], [P0[0] + a, P0[1] - 2 * a * Math.sin(G.rad(60))]], M = [mid(T[0], T[1]), mid(T[1], T[2]), mid(T[2], T[0])];
  const s = 30, X = 132, Y = 30, cuad = (i, j) => [[X + i * s, Y + j * s], [X + (i + 1) * s, Y + j * s], [X + (i + 1) * s, Y + (j + 1) * s], [X + i * s, Y + (j + 1) * s]];
  const celdas = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]];
  return dib("Desarrollos: el del tetraedro es un triángulo equilátero dividido en cuatro, y el del cubo una cruz de seis cuadrados; sirven para construir maquetas y para llevar sobre ellos secciones y líneas", `${poli(T, "var(--red)", 2.2, "var(--red)", 0.1)}${poli(M, "var(--red)", 1.4)}${celdas.map(([i, j]) => poli(cuad(i, j), "var(--pen)", 1.8, "var(--pen)", 0.1)).join("")}${tx(54, 168, "tetraedro", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(192, 136, "cubo", { s: 10.5, b: 1, a: "middle", c: "var(--pen)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema diédrico: poliedros regulares",
  minutos: 120,
  objetivos: [
    "Conocer los cinco poliedros regulares y sus relaciones métricas",
    "Determinar la sección principal de tetraedro, hexaedro y octaedro",
    "Representar en diédrico poliedros regulares apoyados en una cara, una arista o un vértice",
    "Aplicar correctamente la visibilidad de aristas",
    "Situar un poliedro apoyado en un plano oblicuo mediante abatimientos",
    "Obtener secciones planas y desarrollos de poliedros",
  ],
  claves: ["poliedro regular", "sólido platónico", "tetraedro", "hexaedro", "octaedro", "dodecaedro", "icosaedro", "sección principal", "visibilidad", "conjugados", "desarrollo", "relación de Euler"],
  lectura: {
    titulo: "Los sólidos de Platón",
    html: `<p>Solo hay cinco poliedros cuyas caras son polígonos regulares iguales y en los que concurre el mismo número de caras en cada vértice. Los griegos ya lo sabían: Teeteto demostró que no puede haber más, y Platón, en el <i>Timeo</i>, los asoció a los elementos (el fuego al tetraedro, la tierra al cubo, el aire al octaedro, el agua al icosaedro y el universo al dodecaedro). Euclides cerró sus <i>Elementos</i> construyéndolos.</p>
    <p>Siglos después, Kepler intentó explicar las órbitas de los planetas encajando unos sólidos platónicos dentro de otros. Se equivocaba, pero esos poliedros siguen apareciendo por todas partes: en cristales de sal y de pirita, en virus como el del herpes, en dados de rol, en cúpulas geodésicas y en la estructura de algunas moléculas.</p>
    <p>Dibujarlos en diédrico es un ejercicio clásico de Bachillerato y de la PAU porque obliga a combinar todo lo aprendido: verdaderas magnitudes, perpendicularidad, abatimientos y visibilidad. La clave está en conocer bien su <b>sección principal</b>, que da las alturas sin cálculos.</p>`,
  },
  pregunta: {
    texto: "¿Por qué no existe un poliedro regular con caras hexagonales?",
    respuesta: "En cada vértice deben concurrir al menos tres caras y la suma de sus ángulos debe ser <mark>menor que 360°</mark>. Tres hexágonos suman 3 · 120° = 360°: llenan el plano en lugar de cerrar un vértice. Por eso solo hay cinco poliedros regulares.",
  },
  bloques: [
    {
      html: `<h3>8.1 Los cinco poliedros regulares</h3><p>Un <b>poliedro regular</b> (convexo) tiene todas sus caras iguales y regulares y en cada vértice concurre el mismo número de caras. Solo existen cinco:</p><table class="tb"><thead><tr><th>Poliedro</th><th>Caras</th><th>Vértices</th><th>Aristas</th><th>Caras por vértice</th></tr></thead><tbody><tr><td>Tetraedro</td><td>4 triángulos</td><td>4</td><td>6</td><td>3</td></tr><tr><td>Hexaedro (cubo)</td><td>6 cuadrados</td><td>8</td><td>12</td><td>3</td></tr><tr><td>Octaedro</td><td>8 triángulos</td><td>6</td><td>12</td><td>4</td></tr><tr><td>Dodecaedro</td><td>12 pentágonos</td><td>20</td><td>30</td><td>3</td></tr><tr><td>Icosaedro</td><td>20 triángulos</td><td>12</td><td>30</td><td>5</td></tr></tbody></table><p>Todos cumplen la <b>relación de Euler</b>: C + V = A + 2.</p><p>La razón de que solo haya cinco es la suma de ángulos en un vértice, que debe ser menor de 360°: con triángulos caben 3, 4 o 5 por vértice; con cuadrados, 3; con pentágonos, 3; con hexágonos ya no cabe ninguno.</p><p>Todo poliedro regular tiene una <b>esfera circunscrita</b> (pasa por los vértices), una <b>inscrita</b> (tangente a las caras) y una <b>tangente a las aristas</b>, las tres con el mismo centro.</p>`,
      svg: s1,
    },
    {
      html: `<h3>8.2 Sección principal y medidas del tetraedro</h3><p>La <b>sección principal</b> de un poliedro es la sección por un plano de simetría que contiene el mayor número posible de elementos (vértices, aristas, alturas). En ella aparecen en verdadera magnitud las distancias necesarias para dibujar el poliedro.</p><p>En el <b>tetraedro</b> de arista a, la sección principal es el triángulo formado por una arista y el punto medio de la arista opuesta. Sus lados miden a, a√3/2 y a√3/2 (alturas de dos caras) y su altura es la del tetraedro.</p><p>Medidas fundamentales:</p><ul><li>Radio de la circunferencia circunscrita a una cara: r = a/√3.</li><li><b>Altura del tetraedro</b>: h = √(a² − r²) = a·√(2/3) ≈ 0,816 a.</li><li>Distancia entre aristas opuestas: a/√2 ≈ 0,707 a.</li><li>El centro está a h/4 de cada cara y a 3h/4 de cada vértice.</li></ul><p>Gráficamente, h se obtiene con un triángulo rectángulo de hipotenusa a y cateto r, sin necesidad de calcular raíces. Es la construcción que se hace en los exámenes.</p>`,
      svg: s2,
      video: { id: "52YTudHtfyk", titulo: "El tetraedro en sistema diédrico: teoría y sección principal", canal: "Arturo Geometría", vistas: 26807, busqueda: "tetraedro sección principal diédrico" },
    },
    {
      html: `<h3>8.3 Tetraedro apoyado en una cara</h3><p>Es la posición más sencilla. Con la cara ABC en el PH:</p><ol><li>Se dibuja en planta el <b>triángulo equilátero</b> abc en verdadera magnitud.</li><li>El vértice D se proyecta en el <b>centro</b> d del triángulo (intersección de alturas).</li><li>En el alzado, a′, b′ y c′ están en la LT y d′ a la altura h = a√(2/3), obtenida con la sección principal.</li><li>Se unen los vértices y se estudia la <b>visibilidad</b>: en planta las tres caras laterales son visibles; en alzado, la cara posterior queda oculta si el tetraedro tiene una arista paralela a la LT por detrás.</li></ol><p>Si una arista de la base es paralela a la LT, el alzado es un triángulo isósceles y la arista lateral opuesta se ve de perfil. Si la base está girada, el alzado cambia, pero la altura siempre es la misma.</p><p>Variante: tetraedro con una cara en el PV. Se intercambian los papeles: el triángulo en VM está en el alzado y la profundidad h se lleva en planta.</p>`,
      svg: s3,
      video: { id: "0LhHOw4aahc", titulo: "Tetraedro apoyado en el PH con una arista paralela al PV", canal: "PDD Profesor de Dibujo", vistas: 131059, busqueda: "tetraedro diédrico" },
    },
    {
      html: `<h3>8.4 Tetraedro en otras posiciones</h3><p>Un tetraedro regular se puede <b>inscribir en un cubo</b>: sus vértices son cuatro vértices alternos del cubo y sus aristas, diagonales de las caras. Esta relación permite resolver posiciones que de otro modo serían complicadas.</p><p><b>Tetraedro con dos aristas opuestas horizontales</b> (apoyado en una arista): la planta es un <b>cuadrado de lado a/√2</b> cuyas dos diagonales son las aristas horizontales, una a cota 0 y otra a cota a/√2. Las otras cuatro aristas se proyectan como los lados del cuadrado.</p><p><b>Tetraedro con una arista perpendicular al PV</b>: esa arista se proyecta en el alzado como un punto, y el alzado completo es la sección principal (triángulo de lados a, a√3/2 y a√3/2) vista en verdadera magnitud. La planta se obtiene con las referencias.</p><p><b>Tetraedro apoyado en un vértice con una altura vertical</b>: es el de la cara en el PH invertido; la planta es igual y el alzado un triángulo con el vértice abajo.</p><p>En todos los casos, comprobar que las seis aristas miden lo mismo en verdadera magnitud es la mejor forma de detectar errores.</p>`,
      svg: s4,
    },
    {
      html: `<h3>8.5 Hexaedro (cubo)</h3><p>El cubo de arista a tiene:</p><ul><li>Diagonal de cara: a√2.</li><li>Diagonal del cubo: <b>d = a√3</b>.</li><li><b>Sección principal</b>: el rectángulo formado por dos aristas opuestas y dos diagonales de cara, de lados a y a√2. Contiene dos diagonales del cubo.</li></ul><p><b>Cubo apoyado en una cara</b>: la planta es un cuadrado en VM; el alzado, uno o dos rectángulos de altura a según el giro de la planta. Si las caras son paralelas a los planos de proyección, cada vista es un simple cuadrado.</p><p><b>Visibilidad</b>: en planta se ven las aristas de la cara superior; las de la inferior coinciden con ellas. En alzado se ven las caras con normal hacia el observador (las dos delanteras si el cubo está girado); la arista vertical trasera queda oculta y se dibuja a trazos.</p><p><b>Cubo apoyado en una arista</b> con dos caras a 45°: la planta es un rectángulo de lados a y a√2 y el alzado un cuadrado girado o un rectángulo, según la posición de la arista respecto de la LT.</p>`,
      svg: s5,
    },
    {
      html: `<h3>8.6 Hexaedro con una diagonal vertical</h3><p>Es la posición más vistosa del cubo y una de las más preguntadas. Apoyado en un vértice con la diagonal vertical:</p><ul><li>La <b>planta</b> es un <b>hexágono regular</b> de radio a√(2/3) ≈ 0,816 a, con el vértice superior y el inferior proyectados en el centro.</li><li>Los otros seis vértices están a dos alturas: tres a <b>d/3</b> y tres a <b>2d/3</b>, siendo d = a√3 la diagonal. Los de cada nivel forman un triángulo equilátero, y ambos triángulos están girados 60° entre sí.</li></ul><p>Construcción con la sección principal: se dibuja el rectángulo a × a√2 con una de sus diagonales vertical; los vértices del rectángulo dan las alturas d/3 y 2d/3 y el radio del hexágono de la planta.</p><p>En el alzado se ven tres aristas desde el vértice superior y tres desde el inferior. La visibilidad depende de la orientación de la planta: las aristas que salen de los vértices de la mitad trasera quedan ocultas.</p><p>Esta posición permite comprobar que el cubo tiene simetría de orden 3 alrededor de su diagonal.</p>`,
      svg: s6,
      video: { id: "wt_QEmxp2gM", titulo: "Hexaedro con una diagonal vertical", canal: "PDD Profesor de Dibujo", vistas: 87857, busqueda: "hexaedro diagonal vertical diédrico" },
    },
    {
      html: `<h3>8.7 Octaedro apoyado en un vértice</h3><p>El octaedro de arista a se puede ver como dos pirámides cuadradas unidas por la base. Medidas:</p><ul><li><b>Diagonal</b> (entre vértices opuestos): a√2.</li><li><b>Sección principal</b>: el rombo formado por dos vértices opuestos y los puntos medios de dos aristas opuestas, con lados a√3/2 (alturas de cara) y diagonales a√2 y a.</li><li>Distancia entre caras opuestas: a√(2/3).</li></ul><p><b>Con una diagonal vertical</b> (apoyado en un vértice):</p><ol><li>La planta es un <b>cuadrado de lado a</b> (las cuatro aristas del «ecuador») con sus diagonales, que son las proyecciones de las aristas que van a los vértices superior e inferior.</li><li>El ecuador está a cota a√2/2 y el vértice superior a cota a√2.</li><li>El alzado es un rombo (o un cuadrado girado, si una diagonal del ecuador es paralela a la LT).</li></ol><p>En planta las aristas inferiores coinciden con las superiores, que son visibles. En alzado se ocultan las aristas que van a los vértices traseros del ecuador.</p>`,
      svg: s7,
      video: { id: "ZnPJ6A_CMWw", titulo: "Octaedro apoyado en un vértice", canal: "Dibujo Técnico paso a paso", vistas: 21257, busqueda: "octaedro diédrico" },
    },
    {
      html: `<h3>8.8 Octaedro apoyado en una cara</h3><p>Si el octaedro descansa sobre una cara, la cara opuesta es paralela y está a la altura <b>a√(2/3)</b>. En la planta:</p><ul><li>La cara inferior y la superior se ven como dos <b>triángulos equiláteros</b> iguales, girados 180° y con el mismo centro.</li><li>Juntos forman un <b>hexágono regular</b> de radio a/√3, que es el contorno de la planta.</li><li>Las seis caras laterales se proyectan como triángulos entre ambos.</li></ul><p>En el alzado se colocan los tres vértices de la cara inferior en la LT y los tres de la superior a la altura a√(2/3). Las aristas laterales unen cada vértice inferior con los dos superiores más próximos.</p><p>Visibilidad en planta: la cara superior y las tres laterales que miran hacia arriba son visibles; la cara inferior queda oculta, pero sus lados coinciden con aristas visibles salvo los tres interiores, que se dibujan a trazos si no los tapa nada.</p><p>Observa que esta posición tiene el mismo contorno que el cubo con diagonal vertical: es otra manifestación de que cubo y octaedro son <b>conjugados</b>.</p>`,
      svg: s8,
      video: { id: "pyT9fIs9qG8", titulo: "Diédrico: poliedros. Octaedro", canal: "AG Dibujo y Mates", vistas: 20060, busqueda: "octaedro diédrico" },
    },
    {
      html: `<h3>8.9 Poliedros conjugados, dodecaedro e icosaedro</h3><p>Dos poliedros son <b>conjugados</b> (o duales) cuando los centros de las caras de uno son los vértices del otro. El número de caras de uno coincide con el de vértices del otro, y ambos tienen el mismo número de aristas:</p><ul><li><b>Cubo ↔ octaedro</b>: 6 caras ↔ 6 vértices; 8 vértices ↔ 8 caras; 12 aristas.</li><li><b>Dodecaedro ↔ icosaedro</b>: 12 ↔ 12, 20 ↔ 20, 30 aristas.</li><li>El <b>tetraedro</b> es conjugado de sí mismo.</li></ul><p>Esta relación sirve para dibujar un poliedro a partir de otro: el octaedro inscrito en un cubo tiene sus vértices en los centros de las caras del cubo, con arista a√2/2 si el cubo tiene arista a.</p><p>El <b>dodecaedro</b> (12 pentágonos) y el <b>icosaedro</b> (20 triángulos) se dibujan en diédrico apoyados en una cara o con una diagonal vertical. Su construcción exige conocer la sección principal, en la que intervienen el pentágono regular y el número de oro φ = (1 + √5)/2: por ejemplo, los vértices del icosaedro de arista 2 son los puntos (0, ±1, ±φ) y sus permutaciones cíclicas, que forman tres rectángulos áureos perpendiculares.</p>`,
      svg: s9,
    },
    {
      html: `<h3>8.10 Poliedros apoyados en un plano oblicuo</h3><p>Cuando la base de un poliedro está en un plano oblicuo, se combinan los métodos del tema 6:</p><ol><li>Se <b>abate</b> el plano y se dibuja la base en <b>verdadera magnitud</b> (triángulo, cuadrado…) con las condiciones del enunciado (un lado sobre h, un vértice en un punto dado…).</li><li>Se <b>desabate</b> la base por afinidad para obtener su proyección horizontal, y con las horizontales del plano se obtiene la vertical.</li><li>Por el centro de la base se traza la <b>perpendicular al plano</b> (proyecciones perpendiculares a h y a v).</li><li>Sobre ella se lleva la <b>altura</b> del poliedro en verdadera magnitud. Como la perpendicular es oblicua, la altura se lleva mediante un giro, un cambio de plano o tomando un punto auxiliar de la perpendicular y su triángulo de desnivel.</li><li>Se completan las aristas y se estudia la visibilidad.</li></ol><p>Para el cubo, se repite el proceso con las cuatro aristas perpendiculares a la base. Para el octaedro apoyado en una cara se dibuja la cara opuesta en un plano paralelo a la distancia a√(2/3), girada 180°.</p>`,
      svg: s10,
    },
    {
      html: `<h3>8.11 Secciones planas de poliedros</h3><p>La <b>sección</b> de un poliedro por un plano es un polígono cuyos vértices son los puntos en que el plano corta a las aristas. Procedimiento:</p><ul><li>Si el plano es <b>proyectante</b>, los puntos de corte se ven directamente en la proyección en que el plano aparece de canto (la traza v en el dibujo) y se llevan a la otra proyección con líneas de referencia.</li><li>Si el plano es <b>oblicuo</b>, se hace un cambio de plano para verlo de canto, o se halla la intersección de cada arista con el plano mediante planos auxiliares.</li></ul><p>La <b>verdadera magnitud</b> de la sección se obtiene abatiendo el plano secante. Con un plano proyectante vertical, el abatimiento sobre el PH conserva los alejamientos y lleva cada punto a la distancia de la charnela que se mide sobre la traza v.</p><p>Comprobaciones útiles: el número de lados de la sección es igual al número de caras cortadas; dos lados de la sección que están en caras paralelas son paralelos. Un cubo puede dar secciones triangulares, cuadrangulares, pentagonales o hexagonales (el hexágono regular aparece al cortar perpendicularmente por el centro a una diagonal).</p>`,
      svg: s11,
      video: { id: "SscK9NgEwMA", titulo: "Sección de un tetraedro por un plano oblicuo", canal: "Dibujo Técnico por un pelo", vistas: 10529, busqueda: "sección tetraedro plano oblicuo diédrico" },
    },
    {
      html: `<h3>8.12 Visibilidad y desarrollos</h3><p><b>Reglas de visibilidad</b> en un poliedro convexo:</p><ul><li>El <b>contorno</b> aparente siempre es visible.</li><li>Una arista es visible si pertenece al menos a una cara visible; es oculta si sus dos caras son ocultas.</li><li>En planta son visibles las caras que «miran hacia arriba»; en alzado, las que miran hacia el observador (hacia delante).</li><li>Si dos aristas se cruzan en proyección, la visible es la que está más alta (en planta) o más adelante (en alzado).</li></ul><p>El <b>desarrollo</b> de un poliedro es la figura plana que se obtiene al extender todas sus caras sobre un plano sin solaparse. Sirve para construir maquetas y para fabricar piezas de chapa. Para llevar una sección al desarrollo se miden sobre cada arista, en VM, las distancias de los puntos de corte a los vértices.</p><p>Desarrollos típicos: tetraedro, un triángulo equilátero de lado 2a dividido en cuatro; cubo, una cruz de seis cuadrados (hay 11 desarrollos distintos del cubo); octaedro, una tira de ocho triángulos.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Calcula la altura de un tetraedro de 60 mm de arista.", pasos: ["h = a·√(2/3).", "h = 60 · 0,8165 ≈ 49 mm."], resultado: "≈ 49 mm." },
    { enunciado: "Un cubo de 40 mm de arista se apoya en un vértice con la diagonal vertical. ¿A qué alturas están los demás vértices?", pasos: ["d = 40√3 ≈ 69,3 mm.", "Niveles: d/3 ≈ 23,1 mm y 2d/3 ≈ 46,2 mm; el vértice superior a 69,3 mm."], resultado: "23,1; 46,2 y 69,3 mm." },
    { enunciado: "¿Qué radio tiene el hexágono de la planta del cubo anterior?", pasos: ["r = a√(2/3).", "r = 40 · 0,8165 ≈ 32,7 mm."], resultado: "≈ 32,7 mm." },
    { enunciado: "Un octaedro de 50 mm de arista se apoya en un vértice. ¿A qué cota está el vértice superior?", pasos: ["Diagonal = a√2.", "50 · 1,414 ≈ 70,7 mm."], resultado: "≈ 70,7 mm." },
    { enunciado: "Un octaedro de 30 mm de arista se apoya en una cara. ¿Qué altura tiene?", pasos: ["Distancia entre caras opuestas: a√(2/3).", "30 · 0,8165 ≈ 24,5 mm."], resultado: "≈ 24,5 mm." },
    { enunciado: "Comprueba la relación de Euler en el icosaedro.", pasos: ["C = 20, V = 12, A = 30.", "C + V = 32 = A + 2."], resultado: "Se cumple." },
  ],
  errores: [
    "Dibujar la altura del tetraedro igual a la altura de una cara (a√3/2) en lugar de a√(2/3).",
    "Situar los vértices intermedios del cubo con diagonal vertical a la mitad de la altura.",
    "Dibujar como visibles las aristas traseras o como ocultas las del contorno.",
    "En el octaedro apoyado en una cara, no girar 180° la cara superior respecto de la inferior.",
    "Llevar la altura de un poliedro sobre una perpendicular oblicua sin obtener antes su verdadera magnitud.",
    "Unir en la sección puntos de corte que no están en la misma cara.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Enumera los cinco poliedros regulares con su número de caras.", sol: "Tetraedro 4, hexaedro 6, octaedro 8, dodecaedro 12, icosaedro 20." },
    { nivel: "básico", q: "Comprueba la relación de Euler en el cubo y en el octaedro.", sol: "6 + 8 = 12 + 2; 8 + 6 = 12 + 2." },
    { nivel: "básico", q: "Calcula la diagonal de un cubo de 50 mm de arista.", sol: "50√3 ≈ 86,6 mm." },
    { nivel: "básico", q: "Calcula la altura de un tetraedro de 45 mm de arista.", sol: "45 · 0,8165 ≈ 36,7 mm." },
    { nivel: "básico", q: "¿Qué figura es la sección principal del cubo y qué medidas tiene?", sol: "Un rectángulo de lados a y a√2." },
    { nivel: "básico", q: "Dibuja un tetraedro de 50 mm de arista apoyado en una cara con una arista paralela a la LT.", sol: "Planta: triángulo equilátero con su centro; alzado: triángulo isósceles de altura ≈ 40,8 mm." },
    { nivel: "básico", q: "Dibuja un cubo de 40 mm apoyado en una cara girado 30° respecto de la LT.", sol: "Planta: cuadrado de 40 mm girado; alzado: dos rectángulos de 40 mm de altura, arista trasera oculta." },
    { nivel: "básico", q: "¿Qué poliedros son conjugados del cubo y del dodecaedro?", sol: "El octaedro y el icosaedro." },
    { nivel: "básico", q: "¿Por qué no hay poliedros regulares de caras heptagonales?", sol: "Tres ángulos de heptágono (128,6° cada uno) suman más de 360°." },
    { nivel: "básico", q: "¿Qué figura es la planta de un octaedro apoyado en un vértice?", sol: "Un cuadrado de lado a con sus diagonales." },
    { nivel: "básico", q: "Enuncia la regla de visibilidad de una arista.", sol: "Es visible si pertenece al menos a una cara visible; oculta si sus dos caras lo son." },
    { nivel: "básico", q: "Dibuja el desarrollo de un tetraedro de 30 mm de arista.", sol: "Triángulo equilátero de 60 mm dividido por sus paralelas medias en cuatro triángulos." },
    { nivel: "medio", q: "Construye gráficamente la altura de un tetraedro de arista 55 mm con su sección principal.", sol: "Triángulo rectángulo de hipotenusa 55 y cateto 55/√3 ≈ 31,8; el otro cateto ≈ 44,9 mm." },
    { nivel: "medio", q: "Dibuja un cubo de 35 mm con una diagonal vertical.", sol: "Planta: hexágono regular de radio ≈ 28,6 mm; alzado: niveles a ≈ 20,2 y 40,4 mm; vértice superior a 60,6 mm." },
    { nivel: "medio", q: "Dibuja un octaedro de 40 mm apoyado en un vértice con una diagonal del ecuador paralela a la LT.", sol: "Planta: cuadrado de 40 mm girado 45° con diagonales; alzado: rombo de diagonales 56,6 (vertical) y 56,6 (horizontal), es decir, un cuadrado girado." },
    { nivel: "medio", q: "Dibuja un octaedro de 45 mm apoyado en una cara.", sol: "Planta: hexágono de radio 26 mm formado por dos triángulos; alzado: altura ≈ 36,7 mm." },
    { nivel: "medio", q: "Dibuja un tetraedro de 50 mm con dos aristas opuestas horizontales.", sol: "Planta: cuadrado de lado ≈ 35,4 mm con diagonales; aristas horizontales a cotas 0 y 35,4 mm." },
    { nivel: "medio", q: "Halla la sección de un cubo apoyado en el PH por un plano proyectante vertical que forma 30° con el PH.", sol: "Puntos de corte sobre la traza v en el alzado; planta por referencias; VM abatiendo sobre el PH." },
    { nivel: "medio", q: "¿Cuál es la arista del octaedro inscrito en un cubo de 60 mm uniendo los centros de las caras?", sol: "60 · √2/2 ≈ 42,4 mm." },
    { nivel: "medio", q: "Calcula la distancia entre dos aristas opuestas de un tetraedro de 70 mm.", sol: "70/√2 ≈ 49,5 mm." },
    { nivel: "medio", q: "Dibuja el desarrollo de un cubo y señala sobre él una sección hexagonal regular.", sol: "Cruz de seis cuadrados; el hexágono une los puntos medios de seis aristas que no concurren con la diagonal elegida." },
    { nivel: "medio", q: "Explica por qué la planta del octaedro apoyado en una cara es un hexágono regular.", sol: "Las caras superior e inferior son triángulos iguales girados 180° con el mismo centro: sus seis vértices forman un hexágono regular." },
    { nivel: "avanzado", q: "Dibuja un tetraedro de 40 mm con una cara en un plano oblicuo dado y un lado sobre h.", sol: "Abatir el plano; triángulo en VM con un lado en h; desabatir; perpendicular por el centro; altura 32,7 mm en VM con un cambio de plano o giro." },
    { nivel: "avanzado", q: "Dibuja un cubo de 30 mm con una cara en un plano oblicuo.", sol: "Cuadrado en VM en el abatimiento; desabatir; perpendiculares por los cuatro vértices; altura 30 mm en VM sobre cada una." },
    { nivel: "avanzado", q: "Halla la sección de un octaedro apoyado en un vértice por un plano horizontal a 1/4 de su altura.", sol: "Un cuadrado de lado a/2, paralelo al ecuador, en VM en planta." },
    { nivel: "avanzado", q: "Demuestra que el cubo cortado por el plano perpendicular a su diagonal por su centro da un hexágono regular.", sol: "Por simetría de orden 3 alrededor de la diagonal y simetría central, los seis puntos medios de aristas cortados equidistan del centro y forman ángulos de 60°." },
    { nivel: "avanzado", q: "Determina el radio de la esfera circunscrita a un tetraedro de arista a.", sol: "R = 3h/4 = a√6/4 ≈ 0,612 a." },
    { nivel: "avanzado", q: "Dibuja la sección principal del octaedro y obtén de ella la distancia entre caras opuestas.", sol: "Rombo de lado a√3/2 y diagonales a√2 y a; la altura del rombo sobre un lado es la distancia pedida, a√(2/3)." },
    { nivel: "avanzado", q: "Explica cómo situar en diédrico un cubo con una diagonal perpendicular al PV.", sol: "Es el caso de la diagonal vertical con los papeles cambiados: el alzado es un hexágono regular y la planta muestra los niveles de alejamiento d/3 y 2d/3." },
    { nivel: "avanzado", q: "Los vértices del icosaedro de arista 2 son (0, ±1, ±φ) y permutaciones cíclicas. Comprueba que la distancia entre (0, 1, φ) y (1, φ, 0) es 2.", sol: "√(1 + (φ − 1)² + φ²) = √(1 + 1/φ² + φ²) = √(1 + 3) = 2, porque φ² + 1/φ² = 3." },
  ],
  quiz: reparte([
    { q: "¿Cuántos poliedros regulares convexos existen?", o: ["4", "5", "6", "infinitos"], a: 1, e: "Sólidos platónicos." },
    { q: "La relación de Euler es…", o: ["C + A = V + 2", "C + V = A + 2", "C − V = A", "V = A + C"], a: 1, e: "Para poliedros convexos." },
    { q: "La altura del tetraedro de arista a es…", o: ["a√3/2", "a√(2/3)", "a√2", "a/2"], a: 1, e: "≈ 0,816 a." },
    { q: "La diagonal del cubo de arista a mide…", o: ["a√2", "a√3", "2a", "a"], a: 1, e: "Pitágoras en el espacio." },
    { q: "La sección principal del cubo es un…", o: ["cuadrado", "rectángulo a × a√2", "rombo", "hexágono"], a: 1, e: "Contiene dos diagonales." },
    { q: "La planta del cubo con diagonal vertical es un…", o: ["cuadrado", "hexágono regular", "triángulo", "rombo"], a: 1, e: "Simetría de orden 3." },
    { q: "En esa posición, los vértices intermedios están a…", o: ["d/2", "d/3 y 2d/3", "d/4 y 3d/4", "a y 2a"], a: 1, e: "Tres niveles." },
    { q: "La planta del octaedro apoyado en un vértice es un…", o: ["hexágono", "cuadrado con diagonales", "triángulo", "rombo"], a: 1, e: "El ecuador." },
    { q: "La diagonal del octaedro de arista a mide…", o: ["a√3", "a√2", "2a", "a"], a: 1, e: "Diagonal del cuadrado ecuatorial." },
    { q: "La planta del octaedro apoyado en una cara es un…", o: ["cuadrado", "hexágono regular", "pentágono", "triángulo"], a: 1, e: "Dos triángulos girados 180°." },
    { q: "El conjugado del cubo es el…", o: ["tetraedro", "octaedro", "icosaedro", "dodecaedro"], a: 1, e: "Centros de caras." },
    { q: "El tetraedro es conjugado…", o: ["del cubo", "de sí mismo", "del octaedro", "del icosaedro"], a: 1, e: "4 caras, 4 vértices." },
    { q: "El dodecaedro tiene caras…", o: ["triangulares", "pentagonales", "cuadradas", "hexagonales"], a: 1, e: "12 pentágonos." },
    { q: "El icosaedro tiene … vértices.", o: ["20", "12", "30", "8"], a: 1, e: "Y 20 caras." },
    { q: "Una arista es oculta si…", o: ["es del contorno", "sus dos caras son ocultas", "es horizontal", "es la más alta"], a: 1, e: "Regla de visibilidad." },
    { q: "El contorno aparente de un poliedro convexo es…", o: ["oculto", "siempre visible", "a veces visible", "no se dibuja"], a: 1, e: "Regla básica." },
    { q: "La sección de un poliedro tiene tantos lados como…", o: ["vértices", "caras cortadas", "aristas", "planos de proyección"], a: 1, e: "Un lado por cara." },
    { q: "Un tetraedro se puede inscribir en un…", o: ["octaedro", "cubo", "icosaedro", "prisma triangular"], a: 1, e: "Vértices alternos." },
    { q: "La planta del tetraedro con dos aristas opuestas horizontales es un…", o: ["triángulo", "cuadrado", "rombo", "hexágono"], a: 1, e: "Lado a/√2." },
    { q: "Para dibujar un poliedro en un plano oblicuo primero se…", o: ["gira la LT", "abate el plano y se dibuja la base en VM", "dibuja el alzado", "calcula el volumen"], a: 1, e: "Después se desabate." },
  ]),
  examen: reparte([
    { q: "Altura del tetraedro de 30 mm:", o: ["≈ 24,5 mm", "26 mm", "30 mm", "21,2 mm"], a: 0, e: "30 · 0,816." },
    { q: "Diagonal del cubo de 20 mm:", o: ["≈ 34,6 mm", "28,3 mm", "40 mm", "20 mm"], a: 0, e: "20√3." },
    { q: "Cubo de 30 mm con diagonal vertical: primer nivel de vértices a…", o: ["≈ 17,3 mm", "15 mm", "≈ 26 mm", "10 mm"], a: 0, e: "30√3/3." },
    { q: "Octaedro de 40 mm apoyado en un vértice: cota del ecuador", o: ["≈ 28,3 mm", "20 mm", "40 mm", "≈ 56,6 mm"], a: 0, e: "a√2/2." },
    { q: "Una cara de icosaedro es un…", o: ["triángulo equilátero", "pentágono", "cuadrado", "hexágono"], a: 0, e: "20 triángulos." },
    { q: "Aristas del dodecaedro:", o: ["30", "20", "12", "60"], a: 0, e: "Igual que el icosaedro." },
    { q: "El hexágono regular aparece al cortar un cubo…", o: ["por un plano perpendicular a una diagonal por el centro", "por una cara", "por un plano paralelo a una cara", "nunca"], a: 0, e: "Puntos medios de seis aristas." },
    { q: "Radio de la planta del cubo con diagonal vertical de arista 30 mm:", o: ["≈ 24,5 mm", "15 mm", "≈ 21,2 mm", "30 mm"], a: 0, e: "a√(2/3)." },
  ]),
  feynman: ["Por qué solo existen cinco poliedros regulares", "Qué es la sección principal y para qué sirve", "Cómo se obtiene la altura de un tetraedro sin calcular raíces", "Por qué el cubo con diagonal vertical se ve como un hexágono", "Qué significa que dos poliedros sean conjugados"],
  glosario: [
    ["Poliedro regular", "Poliedro de caras regulares iguales con el mismo número de caras en cada vértice."],
    ["Sólidos platónicos", "Los cinco poliedros regulares convexos."],
    ["Relación de Euler", "C + V = A + 2 en todo poliedro convexo."],
    ["Sección principal", "Sección por un plano de simetría que muestra en VM las medidas clave."],
    ["Tetraedro", "Poliedro regular de 4 caras triangulares."],
    ["Hexaedro", "Cubo: 6 caras cuadradas."],
    ["Octaedro", "Poliedro regular de 8 caras triangulares."],
    ["Dodecaedro", "Poliedro regular de 12 caras pentagonales."],
    ["Icosaedro", "Poliedro regular de 20 caras triangulares."],
    ["Poliedros conjugados", "Aquellos en que los centros de las caras de uno son los vértices del otro."],
    ["Contorno aparente", "Línea que separa la parte visible de la oculta en una proyección."],
    ["Desarrollo", "Figura plana formada por todas las caras extendidas."],
    ["Diagonal del cubo", "Segmento entre vértices opuestos: a√3."],
    ["Número de oro", "φ = (1 + √5)/2, presente en el dodecaedro y el icosaedro."],
  ],
  situacion: {
    titulo: "Diseño de una lámpara poliédrica",
    reto: "Una tienda de diseño quiere una lámpara de techo con forma de octaedro de 30 cm de arista, colgada de un vértice. Vuestro grupo debe preparar los planos y la plantilla para fabricarla en cartón pluma.",
    pasos: [
      "Dibujad la sección principal del octaedro y obtened sus medidas clave.",
      "Representad la lámpara en diédrico a escala 1:5, colgada de un vértice, con la visibilidad correcta.",
      "Hallad la sección por un plano horizontal a 10 cm del vértice inferior, donde irá la bombilla.",
      "Dibujad el desarrollo a escala 1:2 con pestañas de pegado.",
      "Construid una maqueta y comprobad las medidas.",
    ],
    producto: "Lámina A3 con planta, alzado y sección, plantilla de desarrollo y maqueta.",
    evaluacion: [
      "Obtiene correctamente las medidas de la sección principal.",
      "Representa el poliedro con visibilidad correcta.",
      "Construye la sección y el desarrollo con precisión.",
      "La maqueta corresponde al diseño.",
    ],
  },
  figura: fig("Poliedros regulares", "Resumen: medidas clave y posiciones", [
    ["Tetraedro", ["4 caras triangulares", "h = a√(2/3)", "aristas opuestas: a/√2", "inscrito en cubo"], "var(--red)"],
    ["Hexaedro", ["d = a√3", "sección a × a√2", "diagonal vertical", "planta hexágono"], "var(--pen)"],
    ["Octaedro", ["diagonal a√2", "caras ∥: a√(2/3)", "vértice: cuadrado", "cara: hexágono"], "var(--leaf)"],
    ["Método", ["sección principal", "visibilidad", "plano oblicuo: abatir", "secciones y desarrollos"], "var(--inf)"],
  ]),
  video: { id: "guNWvTqsNQs", titulo: "El octaedro en sistema diédrico: teoría y sección principal", canal: "Arturo Geometría", vistas: 19002, busqueda: "octaedro sección principal diédrico" },
  mapa: mapa("POLIEDROS REGULARES", "var(--bac)", [
    ["Cinco sólidos", "Euler · conjugados", "var(--red)"],
    ["Sección principal", "alturas · diagonales", "var(--pen)"],
    ["Posiciones", "cara · arista · vértice", "var(--leaf)"],
    ["Aplicaciones", "secciones · desarrollos", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Euler", "C + V = A + 2."],
    ["Altura tetraedro", "a√(2/3) ≈ 0,816 a."],
    ["Diagonal cubo", "a√3."],
    ["Sección principal cubo", "Rectángulo a × a√2."],
    ["Cubo diagonal vertical", "Planta hexágono; niveles d/3 y 2d/3."],
    ["Diagonal octaedro", "a√2."],
    ["Octaedro en cara", "Planta hexágono; altura a√(2/3)."],
    ["Conjugados", "Cubo ↔ octaedro; dodecaedro ↔ icosaedro."],
    ["Tetraedro en cubo", "Vértices alternos."],
    ["Visibilidad", "Arista oculta si sus dos caras lo son."],
    ["Sección", "Un lado por cara cortada."],
    ["Desarrollo cubo", "Cruz de seis cuadrados (11 posibles)."],
  ],
  familias: ["Construid juntos un tetraedro y un cubo de cartulina a partir de sus desarrollos.", "Buscad poliedros en casa: dados, cajas, lámparas, cristales de sal.", "Mirad un cubo desde un vértice: ¿qué figura se ve?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema diédrico; representación de poliedros regulares (tetraedro, hexaedro, octaedro) en distintas posiciones; sección principal; visibilidad; secciones planas y desarrollos (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Maquetas de poliedros con cartulina o varillas para comprobar posiciones.", "GeoGebra 3D: girar poliedros y comparar con su planta y alzado.", "Relación con Química y Geología: estructuras cristalinas cúbicas y octaédricas.", "Impresión 3D de poliedros diseñados en CAD."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sólidos platónicos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/S%C3%B3lido_plat%C3%B3nico" },
    { t: "Característica de Euler, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Caracter%C3%ADstica_de_Euler" },
  ],
  revisado: "2026-11-21",
};
