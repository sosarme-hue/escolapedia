// Dibujo Técnico I 1º Bachillerato · Tema 4. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, arco, marca, pt, paso, linea, recto, polar, corteCC, corteRR, mid, dist, ang, unit, add, mul, elipse, curva, tx } = G;
const dash = 'stroke-dasharray="5 3"';

// Óvalo dado el eje mayor AB (horizontal): devuelve trazado y elementos.
function ovaloMayor(A, B, c = "var(--red)", w = 2.6) {
  const r = (B[0] - A[0]) / 3, O1 = [A[0] + r, A[1]], O2 = [A[0] + 2 * r, A[1]], [O3, O4] = corteCC(O1, r, O2, r).sort((p, q) => p[1] - q[1]);
  const T1 = add(O1, mul(unit(O4, O1), r)), T2 = add(O2, mul(unit(O4, O2), r)), T3 = add(O1, mul(unit(O3, O1), r)), T4 = add(O2, mul(unit(O3, O2), r)), R = 2 * r;
  const svg = `${arco(O1, r, ang(O1, T1), ang(O1, T3), c, w)}${arco(O2, r, ang(O2, T4), ang(O2, T2), c, w)}${arco(O4, R, ang(O4, T2), ang(O4, T1), c, w)}${arco(O3, R, ang(O3, T3), ang(O3, T4), c, w)}`;
  return { svg, r, O1, O2, O3, O4, T: [T1, T2, T3, T4] };
}
// Espiral de dos centros: A a la izquierda, B a distancia d a la derecha, n semicircunferencias.
function espiral2(A, d, n, c = "var(--red)", w = 2.4) {
  const B = [A[0] + d, A[1]]; let s = "";
  for (let i = 1; i <= n; i++) s += i % 2 ? arco(A, i * d, 0, 180, c, w) : arco(B, i * d, 180, 360, c, w);
  return { svg: s, B };
}

// 4.1 Curvas técnicas.
const s1 = (() => {
  const ov = ovaloMayor([18, 48], [110, 48], "var(--red)", 2.2), es = espiral2([190, 50], 5, 7, "var(--pen)", 2);
  const r = 9, cic = Array.from({ length: 61 }, (_, i) => { const tt = (2 * Math.PI * i) / 60; return [30 + r * (tt - Math.sin(tt)), 158 - r * (1 - Math.cos(tt))]; });
  const par = Array.from({ length: 41 }, (_, i) => { const y = -30 + (60 * i) / 40; return [205 + (y * y) / 40 - 20, 128 + y]; });
  return dib("Curvas técnicas y cónicas: óvalo, espiral, cicloide, elipse y parábola", `${ov.svg}${tx(64, 92, "óvalo (4 centros)", { s: 9.5, b: 1, c: "var(--red)" })}${es.svg}${tx(195, 92, "espiral de 2 centros", { s: 9.5, b: 1, c: "var(--pen)" })}
  ${seg([24, 158], [100, 158], "var(--muted)", 1)}${curva(cic, "var(--leaf)", 2.2)}${tx(64, 174, "cicloide", { s: 9.5, b: 1, c: "var(--leaf)" })}${elipse([130, 136], 22, 14, 0, "var(--inf)", 2.2)}${tx(130, 166, "elipse", { s: 9.5, b: 1, c: "var(--inf)" })}${curva(par, "var(--red)", 2.2)}${tx(212, 174, "parábola", { s: 9.5, b: 1, c: "var(--red)" })}${seg([10, 104], [250, 104], "var(--line)", 1)}`);
})();

// 4.2 Óvalo dado el eje mayor.
const s2 = (() => {
  const A = [30, 92], B = [230, 92], ov = ovaloMayor(A, B), { r, O1, O2, O3, O4, T } = ov;
  return dib("Óvalo dado el eje mayor: el eje se divide en tres partes y se obtienen cuatro centros", `${seg(A, B, "var(--muted)", 1.2)}${circ(O1, r, "var(--muted)", 1.1, dash)}${circ(O2, r, "var(--muted)", 1.1, dash)}${[[O4, T[0]], [O4, T[1]], [O3, T[2]], [O3, T[3]]].map(([P, Q]) => seg(P, Q, "var(--pen)", 1.1)).join("")}${ov.svg}
  ${pt(A, "A", -4, -6)}${pt(B, "B", 4, -6)}${pt(O1, "O₁", -6, 14, "var(--pen)")}${pt(O2, "O₂", 2, 14, "var(--pen)")}${pt(O3, "O₃", 6, -2, "var(--pen)")}${pt(O4, "O₄", 6, 4, "var(--pen)")}${T.map((P) => pt(P, "", 0, 0, "var(--red)")).join("")}
  ${paso([64, 106], 1)}${paso([196, 106], 2)}${paso([130, 72], 3, "var(--pen)")}${tx(246, 172, "T: puntos de tangencia", { s: 9, a: "end", c: "var(--red)" })}`);
})();

// 4.3 Óvalo dado el eje menor.
const s3 = (() => {
  const C = [130, 40], D = [130, 144], O = [130, 92], E = [78, 92], F = [182, 92], R = 104, T = (P, Q) => add(P, mul(unit(P, Q), R)), T1 = T(D, E), T2 = T(D, F), T3 = T(C, E), T4 = T(C, F), r = R - dist(D, E);
  return dib("Óvalo dado el eje menor: la circunferencia de diámetro CD da los centros de los arcos pequeños", `${seg([30, 92], [230, 92], "var(--muted)", 1.2)}${seg(C, D, "var(--ink)", 2)}${circ(O, 52, "var(--muted)", 1.1, dash)}${[[D, T1], [D, T2], [C, T3], [C, T4]].map(([P, Q]) => seg(P, Q, "var(--pen)", 1.1)).join("")}
  ${arco(D, R, ang(D, T2), ang(D, T1), "var(--red)", 2.6)}${arco(C, R, ang(C, T3), ang(C, T4), "var(--red)", 2.6)}${arco(E, r, ang(E, T1), ang(E, T3), "var(--red)", 2.6)}${arco(F, r, ang(F, T4), ang(F, T2), "var(--red)", 2.6)}
  ${pt(C, "C", 6, 14)}${pt(D, "D", 6, -6)}${pt(E, "E", 4, 14, "var(--pen)")}${pt(F, "F", -12, 14, "var(--pen)")}${[T1, T2, T3, T4].map((P) => pt(P, "", 0, 0, "var(--red)")).join("")}${paso([100, 70], 1)}${paso([160, 120], 2, "var(--pen)")}${paso([200, 30], 3, "var(--red)")}
  ${tx(14, 24, "1 circunferencia de diámetro CD", { s: 9, a: "start" })}${tx(14, 172, "arcos grandes: centros C y D", { s: 9, a: "start", c: "var(--red)" })}`);
})();

// 4.4 Ovoide dado el eje menor.
const s4 = (() => {
  const C = [80, 66], D = [180, 66], O = [130, 66], E = [130, 116], R = 100, T1 = add(C, mul(unit(C, E), R)), T2 = add(D, mul(unit(D, E), R)), r = R - dist(C, E);
  return dib("Ovoide dado el eje menor: semicircunferencia, dos arcos de radio CD y un arco pequeño", `${seg(C, D, "var(--ink)", 2)}${seg([130, 12], [130, 170], "var(--muted)", 1.1, dash)}${circ(O, 50, "var(--muted)", 1.1, dash)}${seg(C, T1, "var(--pen)", 1.1)}${seg(D, T2, "var(--pen)", 1.1)}
  ${arco(O, 50, 0, 180, "var(--red)", 2.6)}${arco(C, R, ang(C, T1), 0, "var(--red)", 2.6)}${arco(D, R, 180, ang(D, T2), "var(--red)", 2.6)}${arco(E, r, ang(E, T2), ang(E, T1), "var(--red)", 2.6)}
  ${pt(C, "C", -14, 4)}${pt(D, "D", 6, 4)}${pt(O, "O", 4, -6)}${pt(E, "E", 6, -2, "var(--pen)")}${pt(T1, "", 0, 0, "var(--red)")}${pt(T2, "", 0, 0, "var(--red)")}${paso([130, 26], 1)}${paso([214, 110], 2, "var(--pen)")}${paso([150, 158], 3, "var(--red)")}
  ${tx(250, 144, "1 semicircunferencia", { s: 9, a: "end" })}${tx(250, 156, "2 arcos de radio CD", { s: 9, a: "end" })}${tx(250, 168, "3 arco de centro E", { s: 9, a: "end" })}`);
})();

// 4.5 Espiral de dos centros.
const s5 = (() => {
  const A = [124, 92], d = 10, es = espiral2(A, d, 6);
  return dib("Espiral de dos centros: semicircunferencias alternas con centro en A y en B y radios crecientes", `${seg([40, 92], [220, 92], "var(--muted)", 1.1, dash)}${es.svg}${pt(A, "A", -6, 14, "var(--pen)")}${pt(es.B, "B", 4, 14, "var(--pen)")}
  ${tx(14, 24, "radios: d, 2d, 3d…", { s: 9.5, a: "start", b: 1 })}${tx(14, 38, "paso = 2d", { s: 9.5, a: "start", c: "var(--muted)" })}${tx(246, 24, "arcos superiores: centro A", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 172, "arcos inferiores: centro B", { s: 9, a: "end", c: "var(--muted)" })}${paso([150, 70], 1)}${paso([100, 120], 2)}${paso([176, 54], 3)}`);
})();

// 4.6 Cicloide.
const s6 = (() => {
  const r = 24, x0 = 40, yb = 140, P = (tt) => [x0 + r * (tt - Math.sin(tt)), yb - r * (1 - Math.cos(tt))], pts = Array.from({ length: 81 }, (_, i) => P((2 * Math.PI * i) / 80)), t1 = (2 * Math.PI) / 3, Cc = [x0 + r * t1, yb - r];
  return dib("Cicloide: curva que describe un punto de una circunferencia que rueda sin deslizar sobre una recta", `${seg([20, yb], [240, yb])}${circ([x0, yb - r], r, "var(--muted)", 1.1, dash)}${circ(Cc, r, "var(--pen)", 1.8)}${seg(Cc, P(t1), "var(--pen)", 1.4)}${curva(pts, "var(--red)", 2.6)}
  ${Array.from({ length: 9 }, (_, i) => pt(P((2 * Math.PI * i) / 8), "", 0, 0, "var(--red)")).join("")}${pt(P(t1), "P", 6, -4, "var(--red)")}${pt(Cc, "", 0, 0, "var(--pen)")}${tx(130, 160, "base = 2πr (longitud de la circunferencia)", { s: 9.5 })}${seg([x0, 150], [x0 + 2 * Math.PI * r, 150], "var(--muted)", 1)}
  ${tx(14, 24, "se divide la circunferencia y la base 2πr", { s: 9, a: "start", c: "var(--muted)" })}${tx(14, 36, "en partes iguales y se lleva cada arco", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 4.7 Secciones de un cono.
const s7 = (() => {
  const panel = (cx, tipo, lab) => {
    const V = [cx, 90], Lu = polar(V, 70, 115), Ru = polar(V, 70, 65), Ld = polar(V, 70, 245), Rd = polar(V, 70, 295);
    let pl = "";
    if (tipo === 0) pl = seg(corteRR([0, 52], [1, 52], V, Lu), corteRR([0, 52], [1, 52], V, Ru), "var(--red)", 2.6);
    if (tipo === 1) { const P0 = [cx, 56], P1 = polar(P0, 10, -22); pl = seg(corteRR(P0, P1, V, Lu), corteRR(P0, P1, V, Ru), "var(--red)", 2.6); }
    if (tipo === 2) { const P0 = [cx, 62], P1 = polar(P0, 10, 65); pl = seg(corteRR(P0, P1, V, Lu), corteRR(P0, P1, [0, 27], [1, 27]), "var(--red)", 2.6); }
    if (tipo === 3) { const x = cx + 12, h = 12 / Math.tan((25 * Math.PI) / 180); pl = `${seg([x, 27], [x, 90 - h], "var(--red)", 2.6)}${seg([x, 90 + h], [x, 153], "var(--red)", 2.6)}${seg([x, 90 - h], [x, 90 + h], "var(--red)", 1, dash)}`; }
    return `${seg(Lu, Rd, "var(--ink)", 1.6)}${seg(Ru, Ld, "var(--ink)", 1.6)}${seg([cx, 18], [cx, 162], "var(--muted)", 1, 'stroke-dasharray="8 3 2 3"')}${pl}${tx(cx, 174, lab, { s: 9, b: 1, c: "var(--red)" })}`;
  };
  return dib("Secciones de un cono: circunferencia, elipse, parábola e hipérbola según la inclinación del plano", `${panel(34, 0, "circunferencia")}${panel(98, 1, "elipse")}${panel(162, 2, "parábola")}${panel(226, 3, "hipérbola")}${tx(130, 14, "plano: ⊥ eje · inclinado · ∥ generatriz · corta las dos hojas", { s: 8.5, c: "var(--muted)" })}`);
})();

// 4.8 Elipse: elementos.
const s8 = (() => {
  const O = [130, 92], a = 100, b = 60, F = [50, 92], F2 = [210, 92], P = [130 + a * Math.cos(1), 92 - b * Math.sin(1)], B = [130, 32];
  return dib("Elementos de la elipse: ejes, focos, radios vectores y relación a² = b² + c²", `${seg([24, 92], [236, 92], "var(--muted)", 1.1)}${seg([130, 26], [130, 158], "var(--muted)", 1.1)}${elipse(O, a, b, 0, "var(--red)", 2.6)}${seg(F, P, "var(--pen)", 1.8)}${seg(F2, P, "var(--pen)", 1.8)}${seg(B, F2, "var(--leaf)", 1.6, dash)}
  ${pt(O, "O", -12, 14)}${pt(F, "F", -2, 14)}${pt(F2, "F′", 2, 14)}${pt(P, "P", 6, -4, "var(--pen)")}${pt([30, 92], "A", -12, 4)}${pt([230, 92], "A′", 4, -6)}${pt(B, "B", -12, -2)}${pt([130, 152], "B′", 6, 12)}
  ${tx(176, 58, "a", { s: 11, b: 1, c: "var(--leaf)" })}${tx(136, 62, "b", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(170, 104, "c", { s: 11, b: 1, c: "var(--leaf)" })}${tx(14, 24, "PF + PF′ = 2a", { s: 10.5, a: "start", b: 1, c: "var(--pen)" })}${tx(246, 172, "a² = b² + c²", { s: 10.5, a: "end", b: 1, c: "var(--leaf)" })}`);
})();

// 4.9 Elipse por afinidad (circunferencias concéntricas).
const s9 = (() => {
  const O = [130, 92], a = 72, b = 42, angs = [30, 60, 120, 150, 210, 240, 300, 330];
  const cons = angs.map((g) => { const P = polar(O, a, g), Q = polar(O, b, g), X = [P[0], Q[1]]; return `${seg(O, P, "var(--muted)", 0.9)}${seg(P, X, "var(--pen)", 1, dash)}${seg(Q, X, "var(--leaf)", 1, dash)}${pt(X, "", 0, 0, "var(--red)")}`; }).join("");
  return dib("Elipse por afinidad: cada radio corta a las circunferencias de radios a y b; la vertical y la horizontal se cortan en un punto", `${circ(O, a, "var(--muted)", 1.2)}${circ(O, b, "var(--muted)", 1.2)}${seg([44, 92], [216, 92], "var(--muted)", 1)}${seg([130, 10], [130, 174], "var(--muted)", 1)}${cons}${elipse(O, a, b, 0, "var(--red)", 2.4)}
  ${pt(O, "O", -12, 14)}${tx(10, 22, "1 radio", { s: 9, a: "start" })}${tx(10, 34, "2 vertical (a)", { s: 9, a: "start", c: "var(--pen)" })}${tx(10, 46, "3 horizontal (b)", { s: 9, a: "start", c: "var(--leaf)" })}${tx(250, 174, "x = a cos t, y = b sen t", { s: 8.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 4.10 Tangente a la elipse.
const s10 = (() => {
  const O = [130, 90], a = 100, b = 60, F = [50, 90], F2 = [210, 90], tt = 2.2, P = [130 + a * Math.cos(tt), 90 - b * Math.sin(tt)], Q = add(F2, mul(unit(F2, P), 2 * a)), u = unit(F, Q), d = [u[1], -u[0]];
  return dib("Tangente a la elipse en un punto: es la bisectriz exterior del ángulo que forman los radios vectores", `${elipse(O, a, b, 0, "var(--ink)", 2.2)}${seg(F, P, "var(--pen)", 1.6)}${seg(F2, P, "var(--pen)", 1.6)}${seg(P, Q, "var(--pen)", 1.2, dash)}${seg(F, Q, "var(--muted)", 1.1, dash)}
  ${seg(add(P, mul(d, -60)), add(P, mul(d, 70)), "var(--red)", 2.6)}${seg(P, add(P, mul(u, -46)), "var(--leaf)", 1.8)}${pt(F, "F", 2, 14)}${pt(F2, "F′", 2, 14)}${pt(P, "P", 8, 10)}${pt(Q, "Q", 6, 2, "var(--muted)")}${pt(mid(F, Q), "", 0, 0, "var(--muted)")}
  ${tx(246, 164, "PQ = PF; tangente = mediatriz de FQ", { s: 9, a: "end", c: "var(--red)", b: 1 })}${tx(246, 176, "normal: bisectriz interior", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}${paso([24, 60], 1, "var(--pen)")}${paso([150, 30], 2, "var(--red)")}`);
})();

// 4.11 Hipérbola.
const s11 = (() => {
  const O = [130, 92], a = 40, b = 30, F = [80, 92], F2 = [180, 92], br = (sg) => Array.from({ length: 61 }, (_, i) => { const s = -1.4 + (2.8 * i) / 60; return [130 + sg * a * Math.cosh(s), 92 - b * Math.sinh(s)]; }), P = [130 + a * Math.cosh(0.9), 92 - b * Math.sinh(0.9)];
  return dib("Hipérbola: dos ramas, focos, vértices, asíntotas y diferencia de radios vectores igual a 2a", `${seg([14, 92], [246, 92], "var(--muted)", 1)}${seg([130, 10], [130, 174], "var(--muted)", 1)}${seg([130 - 108, 92 + 81], [130 + 108, 92 - 81], "var(--leaf)", 1.4, dash)}${seg([130 - 108, 92 - 81], [130 + 108, 92 + 81], "var(--leaf)", 1.4, dash)}${linea([[90, 62], [170, 62], [170, 122], [90, 122], [90, 62]], "var(--muted)", 1, dash)}
  ${curva(br(1), "var(--red)", 2.6)}${curva(br(-1), "var(--red)", 2.6)}${seg(F, P, "var(--pen)", 1.6)}${seg(F2, P, "var(--pen)", 1.6)}${pt(F, "F", -4, 14)}${pt(F2, "F′", 2, 14)}${pt([90, 92], "A", -12, -4)}${pt([170, 92], "A′", 4, -4)}${pt(P, "P", 6, -2, "var(--pen)")}${pt(O, "", 0, 0)}
  ${tx(14, 24, "|PF − PF′| = 2a", { s: 10.5, a: "start", b: 1, c: "var(--pen)" })}${tx(14, 168, "c² = a² + b²", { s: 10, a: "start", b: 1 })}${tx(246, 168, "asíntotas y = ±(b/a)x", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}`);
})();

// 4.12 Parábola.
const s12 = (() => {
  const xd = 40, F = [80, 92], f = 20, pts = Array.from({ length: 61 }, (_, i) => { const y = -76 + (152 * i) / 60; return [60 + (y * y) / (4 * f), 92 + y]; }), y0 = -50, P = [60 + (y0 * y0) / (4 * f), 92 + y0], D = [xd, P[1]], u = unit(F, D), d = [u[1], -u[0]], M = mid(F, D);
  return dib("Parábola: cada punto equidista del foco y de la directriz; la tangente es la mediatriz de FD", `${seg([xd, 10], [xd, 172], "var(--ink)", 2)}${seg([20, 92], [246, 92], "var(--muted)", 1)}${curva(pts, "var(--red)", 2.6)}${seg(P, D, "var(--pen)", 1.6)}${seg(P, F, "var(--pen)", 1.6)}${seg(F, D, "var(--muted)", 1.1, dash)}${seg(add(P, mul(d, -50)), add(P, mul(d, 60)), "var(--leaf)", 2.2)}${recto(D, P, [xd, 10], 6)}
  ${pt(F, "F", 2, 14)}${pt([60, 92], "V", -4, 14)}${pt(P, "P", 6, -4)}${pt(D, "D", -12, -4)}${pt(M, "", 0, 0, "var(--muted)")}${tx(xd - 4, 168, "d", { s: 11, b: 1, a: "end" })}
  ${tx(246, 108, "PF = PD", { s: 11, a: "end", b: 1, c: "var(--pen)" })}${tx(246, 124, "e = 1", { s: 10, a: "end" })}${tx(246, 140, "tangente: mediatriz de FD", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}${tx(246, 154, "rayos paralelos al eje → F", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Curvas técnicas y cónicas",
  minutos: 120,
  objetivos: [
    "Distinguir las curvas técnicas (óvalos, ovoides, espirales, volutas) de las curvas cíclicas y cónicas",
    "Construir óvalos y ovoides como curvas de enlace de varios centros",
    "Dibujar espirales de varios centros y reconocer la cicloide y la evolvente",
    "Comprender las cónicas como secciones de un cono y como lugares geométricos",
    "Trazar la elipse, la hipérbola y la parábola por puntos a partir de sus elementos",
    "Construir la recta tangente a una cónica en uno de sus puntos",
  ],
  claves: ["curva técnica", "óvalo", "ovoide", "espiral", "voluta", "cicloide", "cónica", "elipse", "hipérbola", "parábola", "foco", "directriz", "excentricidad"],
  lectura: {
    titulo: "Del puente romano al estadio",
    html: `<p>Muchos puentes, ventanas y arcos que vemos a diario no son semicírculos: son <b>óvalos</b> o «arcos carpaneles», curvas formadas por varios arcos de circunferencia enlazados. Los constructores los preferían porque permiten salvar una luz grande con poca altura y se pueden replantear en la obra con una simple cuerda y unas estacas. La plaza Mayor de Madrid tiene arcos así, y la planta del Coliseo de Roma es un óvalo de varios centros.</p>
    <p>Junto a estas <b>curvas técnicas</b>, el dibujo técnico estudia las <b>cónicas</b>: la elipse, la hipérbola y la parábola. Son curvas «perfectas», definidas por una propiedad matemática, y aparecen en las órbitas de los planetas, en las antenas parabólicas, en los faros de los coches, en las torres de refrigeración de las centrales o en las cubiertas de algunos estadios.</p>
    <p>También hay curvas que nacen del movimiento: la <b>cicloide</b>, que dibuja una piedra pegada a una rueda en marcha, o la <b>evolvente</b>, que da forma a los dientes de casi todos los engranajes del mundo. En este tema aprenderás a construir todas estas curvas con regla y compás, entendiendo de dónde sale cada centro y cada punto.</p>`,
  },
  pregunta: {
    texto: "¿Es lo mismo un óvalo que una elipse? ¿Cómo podrías distinguirlos?",
    respuesta: "No. El <mark>óvalo</mark> es una curva técnica formada por cuatro arcos de circunferencia enlazados, con cuatro centros fijos. La <mark>elipse</mark> es una curva cónica cuya curvatura cambia en cada punto: cumple que la suma de distancias a dos focos es constante. Se parecen, pero no coinciden: el óvalo tiene «tramos de circunferencia» y la elipse no.",
  },
  bloques: [
    {
      html: `<h3>4.1 Curvas técnicas, cíclicas y cónicas</h3><p>En dibujo técnico se llaman <b>curvas técnicas</b> las curvas planas formadas por <b>arcos de circunferencia enlazados</b>, que se trazan con compás a partir de varios centros. Son, por tanto, curvas de enlace: en cada punto de unión los dos arcos son tangentes y sus centros están alineados con ese punto. Las principales son:</p><ul><li><b>Óvalo</b>: curva cerrada y convexa con dos ejes de simetría perpendiculares, formada por cuatro arcos.</li><li><b>Ovoide</b>: curva cerrada con un solo eje de simetría, con forma de huevo.</li><li><b>Espirales</b> y <b>volutas</b>: curvas abiertas que dan vueltas alrededor de un núcleo alejándose de él.</li></ul><p>Las <b>curvas cíclicas</b>, como la cicloide, la epicicloide o la evolvente, se generan por el movimiento de un punto unido a una línea que rueda sobre otra sin deslizar.</p><p>Las <b>cónicas</b> (elipse, hipérbola y parábola) son curvas definidas por una propiedad métrica y se obtienen al cortar un cono con un plano. A diferencia de las curvas técnicas, no se pueden dibujar con un número finito de arcos: se construyen <b>por puntos</b> y se repasan con plantillas de curvas o con un programa de CAD.</p><p>Las curvas técnicas se usan cuando hay que fabricar o replantear una forma con medios sencillos (arcos de puentes, piezas de chapa, molduras), y las cónicas cuando importa una propiedad física, como la reflexión.</p>`,
      svg: s1,
    },
    {
      html: `<h3>4.2 Óvalo dado el eje mayor</h3><p>Un óvalo tiene dos arcos grandes, de radio R, y dos pequeños, de radio r, con centros situados sobre los ejes. Hay muchos óvalos con el mismo eje mayor; el método más usado lo divide en tres partes iguales:</p><ol><li>Se divide el eje mayor AB en tres partes iguales con el teorema de Tales. Los puntos de división O₁ y O₂ son los centros de los arcos pequeños.</li><li>Con centro en O₁ y en O₂ y radio O₁A (un tercio de AB) se trazan dos circunferencias, que se cortan en O₃ y O₄. Estos son los centros de los arcos grandes.</li><li>Se unen O₃ y O₄ con O₁ y O₂ y se prolongan: las rectas cortan a las circunferencias en los cuatro <b>puntos de tangencia</b> T.</li><li>Con centro en O₃ y O₄ y radio hasta los puntos de tangencia (dos tercios de AB) se trazan los arcos grandes, y se repasan los arcos pequeños entre puntos de tangencia.</li></ol><p>Como el triángulo O₁O₂O₄ es equilátero, las rectas de enlace forman 60° con el eje, y el eje menor resulta fijo: mide (2 − √3/2) · AB/1,5, es decir, unos 0,76 del mayor. Si se necesita un óvalo con unos ejes mayor y menor concretos, se usa el método del óvalo dados los dos ejes, que coloca los centros con la mediatriz del segmento que une un extremo de cada eje.</p>`,
      svg: s2,
      video: { id: "Fb5kC0w9XcU", titulo: "Cómo trazar un óvalo según su eje mayor", canal: "PDD Profesor de Dibujo", vistas: 737919, busqueda: "óvalo y ovoide dibujo técnico" },
    },
    {
      html: `<h3>4.3 Óvalo dado el eje menor y óvalo dados los ejes</h3><p><b>Óvalo dado el eje menor CD</b>:</p><ol><li>Se traza la circunferencia de diámetro CD. Corta al eje mayor (la mediatriz de CD) en E y F, centros de los arcos pequeños.</li><li>Los extremos C y D son los centros de los arcos grandes, de radio CD.</li><li>Las rectas DE, DF, CE y CF, prolongadas, determinan los cuatro puntos de tangencia sobre los arcos grandes.</li><li>Se trazan los arcos grandes con centro en C y D y los pequeños con centro en E y F.</li></ol><p><b>Óvalo dados los dos ejes AB y CD</b> (el caso más útil en la práctica):</p><ol><li>Se dibujan los ejes, perpendiculares por su punto medio O, y se une un extremo del mayor, A, con uno del menor, C.</li><li>Con centro en O y radio OA se lleva A sobre el eje menor (punto E); con centro en C y radio CE se corta AC en F, de modo que AF = OA − OC.</li><li>La mediatriz de AF corta a los ejes en dos centros: uno del arco pequeño (sobre AB) y otro del grande (sobre la prolongación de CD). Los otros dos centros son simétricos.</li></ol><p>Este último método se usa, por ejemplo, para dibujar con compás la circunferencia en perspectiva isométrica, que se aproxima con un óvalo, como verás en el tema 8.</p>`,
      svg: s3,
    },
    {
      html: `<h3>4.4 El ovoide</h3><p>El <b>ovoide</b> es una curva cerrada formada por cuatro arcos, pero con <b>un solo eje de simetría</b>: tiene una parte ancha semicircular y otra más estrecha, como la silueta de un huevo. Se usa en piezas mecánicas como levas, en tuberías de saneamiento (la sección ovoide conduce bien el agua con caudales pequeños) y en diseño de objetos.</p><p><b>Ovoide dado el eje menor CD</b>:</p><ol><li>Se traza la circunferencia de diámetro CD y su diámetro perpendicular. La semicircunferencia superior es la parte ancha del ovoide.</li><li>El extremo inferior E de ese diámetro perpendicular será el centro del arco pequeño. Se unen C y D con E y se prolongan.</li><li>Con centro en C y radio CD se traza un arco desde D hasta la recta CE; con centro en D y el mismo radio, desde C hasta la recta DE.</li><li>Con centro en E se cierra la curva con un arco pequeño entre los dos puntos de tangencia.</li></ol><p><b>Ovoide dado el eje mayor AB</b>: se divide AB en seis partes; la circunferencia grande tiene como diámetro cuatro de ellas y la pequeña, de centro en la quinta división, tiene radio una parte. Se enlazan después con arcos tangentes a ambas, cuyos centros se obtienen con rectas que pasan por los centros conocidos.</p><p>En todos los casos se comprueba la regla de oro de las curvas técnicas: centro, centro y punto de tangencia alineados.</p>`,
      svg: s4,
    },
    {
      html: `<h3>4.5 Espirales y volutas</h3><p>Una <b>espiral</b> es una curva plana abierta que da vueltas alrededor de un punto o núcleo, alejándose de él. La distancia radial entre dos vueltas consecutivas se llama <b>paso</b>.</p><p>La <b>espiral de Arquímedes</b> es la que describe un punto que se aleja con velocidad constante del centro mientras gira con velocidad angular constante. Su paso es constante y se dibuja por puntos: se divide el paso en n partes y la circunferencia en n sectores, y en cada radio se lleva una parte más que en el anterior. Es la forma de los surcos de un disco de vinilo o de un muelle de reloj.</p><p>Las <b>espirales de centros</b> son curvas técnicas que imitan a la de Arquímedes con arcos de circunferencia:</p><ul><li><b>De dos centros</b>: semicircunferencias alternas con centro en A y B, de radios d, 2d, 3d… El paso es 2d.</li><li><b>De tres, cuatro o más centros</b>: el núcleo es un triángulo, cuadrado o polígono regular; se prolongan sus lados y se trazan arcos con centro en cada vértice, cuyo radio crece en un lado cada vez. El paso es el perímetro del núcleo.</li></ul><p>Las <b>volutas</b> son espirales decorativas que terminan en un núcleo circular; su ejemplo clásico es el capitel jónico. La <b>espiral áurea</b>, construida con arcos de un cuarto de circunferencia sobre rectángulos áureos, aproxima la espiral logarítmica de las conchas de nautilo.</p>`,
      svg: s5,
      video: { id: "pgag3ppI_-w", titulo: "Espiral de dos centros (volutas y curvas técnicas)", canal: "PDD Profesor de Dibujo", vistas: 729590, busqueda: "espiral dibujo técnico" },
    },
    {
      html: `<h3>4.6 Curvas cíclicas</h3><p>Las <b>curvas cíclicas</b> son las trayectorias de un punto ligado a una circunferencia (la <b>ruleta</b>) que rueda sin deslizar sobre una recta o sobre otra circunferencia (la <b>base</b>):</p><ul><li><b>Cicloide</b>: la ruleta rueda sobre una recta. Un arco completo mide de base 2πr, la longitud de la circunferencia, y su altura es 2r.</li><li><b>Epicicloide</b>: la ruleta rueda por el exterior de una circunferencia base. Si ambas son iguales se obtiene la <b>cardioide</b>.</li><li><b>Hipocicloide</b>: la ruleta rueda por el interior de la base.</li><li><b>Evolvente de circunferencia</b>: trayectoria del extremo de un hilo tenso que se desenrolla de una circunferencia.</li></ul><p>Para dibujar la cicloide por puntos se divide la circunferencia en 12 partes y la base 2πr también en 12. Para cada posición del centro se lleva, en la horizontal del punto de división correspondiente de la circunferencia, una distancia igual al radio: así se obtiene cada posición del punto generador.</p><p>Estas curvas tienen propiedades sorprendentes. La cicloide invertida es la <b>braquistócrona</b>: el camino por el que una bola desciende más rápido entre dos puntos, más rápido que por la recta. Y la evolvente da forma al perfil de los dientes de los engranajes: dos dientes con perfil de evolvente transmiten el giro con relación de velocidades constante, sin tirones.</p>`,
      svg: s6,
    },
    {
      html: `<h3>4.7 Las cónicas como secciones de un cono</h3><p>Una <b>superficie cónica de revolución</b> es la que engendra una recta, la <b>generatriz</b>, al girar alrededor de otra recta a la que corta, el <b>eje</b>. Tiene dos hojas unidas por el vértice. Al cortarla con un plano que no pasa por el vértice se obtiene una <b>cónica</b>, cuya forma depende del ángulo entre el plano y el eje:</p><ul><li>Plano <b>perpendicular al eje</b>: <b>circunferencia</b>.</li><li>Plano inclinado que corta a <b>todas las generatrices</b> de una hoja: <b>elipse</b>, curva cerrada.</li><li>Plano <b>paralelo a una generatriz</b>: <b>parábola</b>, curva abierta de una rama.</li><li>Plano que corta a <b>las dos hojas</b> (paralelo a dos generatrices): <b>hipérbola</b>, de dos ramas.</li></ul><p>Las cónicas también son <b>lugares geométricos</b> en el plano, definidos con focos y directrices. La relación entre ambos puntos de vista la dan las <b>esferas de Dandelin</b> (1822): las esferas inscritas en el cono y tangentes al plano lo tocan precisamente en los focos.</p><p>Toda cónica cumple que el cociente entre la distancia de un punto al foco y su distancia a la directriz es constante: la <b>excentricidad</b> e. Si e &lt; 1 es una elipse (e = 0, circunferencia), si e = 1 una parábola y si e &gt; 1 una hipérbola.</p>`,
      svg: s7,
    },
    {
      html: `<h3>4.8 La elipse: definición y elementos</h3><p>La <b>elipse</b> es el lugar geométrico de los puntos del plano cuya <b>suma de distancias a dos puntos fijos</b>, los <b>focos</b> F y F′, es constante e igual a 2a.</p><p>Sus elementos son:</p><ul><li><b>Eje mayor</b> AA′ = 2a, que contiene a los focos, y <b>eje menor</b> BB′ = 2b, su mediatriz. Se cortan en el <b>centro</b> O.</li><li><b>Distancia focal</b> FF′ = 2c.</li><li><b>Radios vectores</b>: segmentos PF y PF′ que unen un punto de la curva con los focos. Siempre suman 2a.</li><li><b>Circunferencia principal</b>: de centro O y radio a. <b>Circunferencias focales</b>: de centro en un foco y radio 2a.</li></ul><p>Como el punto B equidista de los focos, BF = BF′ = a. El triángulo OBF es rectángulo y se cumple la relación fundamental:</p><div class="formula"><span>a² = b² + c²</span></div><p>Esto permite hallar los focos conocidos los ejes: con centro en B y radio a se corta el eje mayor en F y F′. La <b>excentricidad</b> e = c/a mide lo «aplastada» que está: cerca de 0 es casi una circunferencia y cerca de 1 es muy alargada.</p><p>El método del jardinero dibuja una elipse real: se clavan dos estacas en los focos, se ata a ellas una cuerda de longitud 2a y se recorre la cuerda tensa con un palo.</p>`,
      svg: s8,
    },
    {
      html: `<h3>4.9 Trazado de la elipse por puntos</h3><p>La elipse no se puede dibujar con un número finito de arcos, así que se obtiene <b>por puntos</b> y se unen con una plantilla de curvas. Los métodos más usados son:</p><p><b>Por radios vectores</b> (a partir de la definición): se toma un punto cualquiera N entre los focos sobre el eje mayor. Con centro en F y radio AN y con centro en F′ y radio NA′ se trazan arcos que se cortan en cuatro puntos de la elipse, porque AN + NA′ = 2a. Repitiendo con varios puntos N se obtienen tantos puntos como se quiera.</p><p><b>Por afinidad o circunferencias concéntricas</b> (dados los ejes): se trazan dos circunferencias concéntricas de radios a y b. Cada radio corta a la mayor en un punto P y a la menor en Q. Por P se traza una paralela al eje menor y por Q una paralela al eje mayor: se cortan en un punto de la elipse. Es la versión gráfica de las ecuaciones x = a cos t, y = b sen t.</p><p><b>Por haces proyectivos</b>: se construye el rectángulo circunscrito, se dividen sus semilados en partes iguales y se cortan los haces de rectas que salen de los extremos de un eje.</p><p>Conviene obtener más puntos donde la curvatura es mayor, cerca de los vértices del eje mayor. En los vértices se puede usar el <b>arco de curvatura</b> para repasar con compás.</p>`,
      svg: s9,
    },
    {
      html: `<h3>4.10 Tangente a la elipse</h3><p>La <b>tangente</b> a la elipse en un punto P es la <b>bisectriz del ángulo exterior</b> que forman los radios vectores PF y PF′. La <b>normal</b>, perpendicular a la tangente, es la bisectriz del ángulo interior.</p><p>Construcción con la circunferencia focal:</p><ol><li>Se prolonga el radio vector F′P más allá de P y se lleva sobre la prolongación PQ = PF. El punto Q está en la circunferencia focal de F′, de radio 2a.</li><li>La tangente es la mediatriz del segmento FQ, que pasa por P.</li></ol><p>De esta propiedad nace la <b>propiedad reflectora</b> de la elipse: un rayo que sale de un foco y se refleja en la curva pasa por el otro foco, porque forma ángulos iguales con la tangente. Así funcionan las galerías de los susurros y la litotricia, que destruye cálculos renales con ondas de choque generadas en un foco de un reflector elíptico.</p><p>También se resuelven otros problemas de tangencia: las <b>tangentes desde un punto exterior</b> P se obtienen cortando la circunferencia focal de F′ con la circunferencia de centro P y radio PF; las mediatrices de F con esos cortes son las tangentes. Y el pie de la perpendicular desde un foco a cualquier tangente está siempre en la <b>circunferencia principal</b>.</p>`,
      svg: s10,
    },
    {
      html: `<h3>4.11 La hipérbola</h3><p>La <b>hipérbola</b> es el lugar geométrico de los puntos cuya <b>diferencia de distancias a dos focos</b> F y F′ es constante, en valor absoluto, e igual a 2a. Tiene dos ramas abiertas y simétricas.</p><p>Sus elementos son el <b>eje real</b> AA′ = 2a, que contiene a los vértices; el <b>eje imaginario</b> BB′ = 2b, perpendicular al anterior por el centro; la distancia focal 2c; y las <b>asíntotas</b>, rectas a las que se acercan las ramas sin llegar a tocarlas. Ahora el foco está más lejos del centro que el vértice y la relación es:</p><div class="formula"><span>c² = a² + b²</span></div><p>Las asíntotas son las diagonales del rectángulo de lados 2a y 2b centrado en O. Si a = b la hipérbola es <b>equilátera</b> y sus asíntotas son perpendiculares.</p><p><b>Trazado por radios vectores</b>: se toma un punto N en el eje real, fuera del segmento FF′. Con centro en F y radio AN y con centro en F′ y radio A′N se trazan arcos que se cortan en puntos de la curva, porque A′N − AN = 2a.</p><p>La tangente en un punto es la <b>bisectriz interior</b> del ángulo de los radios vectores (al revés que en la elipse). Las hipérbolas aparecen en las torres de refrigeración, en la sombra de una lámpara cilíndrica sobre la pared y en los sistemas de navegación que localizan un barco por diferencias de tiempo entre señales.</p>`,
      svg: s11,
    },
    {
      html: `<h3>4.12 La parábola</h3><p>La <b>parábola</b> es el lugar geométrico de los puntos que <b>equidistan de un punto fijo</b>, el <b>foco</b> F, y de una <b>recta fija</b>, la <b>directriz</b> d. Es una curva abierta con un solo eje de simetría, perpendicular a la directriz por el foco. El <b>vértice</b> V es el punto medio entre el foco y la directriz, y la distancia p del foco a la directriz es el <b>parámetro</b>.</p><p><b>Trazado por puntos</b>: se trazan rectas paralelas a la directriz. Para cada una, situada a distancia k de la directriz, se traza con centro en F un arco de radio k: corta a la paralela en dos puntos de la parábola. También se puede dibujar por <b>haces proyectivos</b> dentro de un rectángulo, como se hace en la práctica para los arcos parabólicos.</p><p><b>Tangente en un punto P</b>: es la <b>bisectriz del ángulo</b> que forman PF y la perpendicular PD a la directriz, o lo que es lo mismo, la mediatriz del segmento FD.</p><p>Su propiedad más útil es la <b>reflectora</b>: todo rayo paralelo al eje se refleja en la parábola y pasa por el foco, y al revés. Por eso las antenas parabólicas, los hornos solares y los faros de los coches tienen forma de paraboloide. La trayectoria de un proyectil sin rozamiento y la forma del cable de un puente colgante con tablero uniforme son también parábolas.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Dibuja un óvalo de eje mayor 120 mm y calcula sus radios.", pasos: ["Se divide AB en tres partes de 40 mm: O₁ y O₂.", "Circunferencias de radio 40 mm con centro en O₁ y O₂ → O₃ y O₄, a 40 · √3/2 ≈ 34,6 mm del eje.", "Radio de los arcos pequeños: 40 mm; de los grandes: 80 mm.", "Eje menor: 2 · (80 − 34,6) ≈ 90,7 mm."], resultado: "r = 40 mm, R = 80 mm, eje menor ≈ 90,7 mm." },
    { enunciado: "Una elipse tiene ejes de 100 y 60 mm. Halla sus focos y su excentricidad.", pasos: ["a = 50 mm, b = 30 mm.", "c = √(50² − 30²) = 40 mm.", "Gráficamente: con centro en B y radio 50 mm se corta el eje mayor.", "e = c/a = 40/50."], resultado: "Focos a 40 mm del centro; e = 0,8." },
    { enunciado: "Obtén cuatro puntos de una elipse de 2a = 100 mm y 2c = 80 mm por radios vectores, tomando N a 30 mm de A.", pasos: ["AN = 30 mm y NA′ = 70 mm.", "Arcos de radio 30 mm con centro en F y de 70 mm con centro en F′ se cortan en dos puntos.", "Intercambiando focos (30 mm desde F′ y 70 mm desde F) se obtienen otros dos.", "Comprobación: 30 + 70 = 100 = 2a."], resultado: "Cuatro puntos simétricos de la elipse." },
    { enunciado: "Una hipérbola tiene eje real 2a = 60 mm y distancia focal 2c = 100 mm. Halla b y la pendiente de las asíntotas.", pasos: ["a = 30, c = 50.", "b = √(c² − a²) = √(2500 − 900) = 40 mm.", "Asíntotas: pendiente ± b/a."], resultado: "b = 40 mm; asíntotas y = ±(4/3) x." },
    { enunciado: "Una antena parabólica tiene el foco a 25 cm del vértice. ¿A qué distancia del foco está un punto de la antena situado a 60 cm del eje?", pasos: ["Con el vértice en el origen y el eje horizontal: y² = 4fx con f = 25 → y² = 100x.", "Para y = 60: x = 3600/100 = 36 cm.", "Distancia al foco = distancia a la directriz = x + f."], resultado: "36 + 25 = 61 cm." },
    { enunciado: "Construye una espiral de cuatro centros con núcleo un cuadrado de 5 mm de lado. ¿Qué radio tiene el octavo arco y cuál es el paso?", pasos: ["Se prolongan los lados del cuadrado en el mismo sentido de giro.", "Cada arco tiene centro en un vértice y su radio aumenta 5 mm respecto del anterior: 5, 10, 15…", "El octavo arco tiene radio 8 · 5 mm.", "Paso = perímetro del núcleo = 4 · 5 mm."], resultado: "Radio del octavo arco 40 mm; paso 20 mm." },
  ],
  errores: [
    "Confundir el óvalo (cuatro arcos de circunferencia) con la elipse (curva cónica).",
    "No alinear los centros con el punto de tangencia y producir un pico en la unión de dos arcos.",
    "Usar en la hipérbola la relación de la elipse: en la elipse a² = b² + c² y en la hipérbola c² = a² + b².",
    "Tomar como tangente a la elipse la bisectriz interior de los radios vectores: esa es la normal.",
    "Unir los puntos de una cónica con segmentos rectos en lugar de con una curva suave.",
    "Situar el vértice de la parábola en el foco: está en el punto medio entre foco y directriz.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica: óvalo, parábola, cicloide, espiral de tres centros, hipérbola, ovoide.", sol: "Curvas técnicas: óvalo, espiral de tres centros y ovoide. Curva cíclica: cicloide. Cónicas: parábola e hipérbola." },
    { nivel: "básico", q: "¿Qué diferencia hay entre un óvalo y un ovoide?", sol: "El óvalo tiene dos ejes de simetría y el ovoide solo uno (forma de huevo)." },
    { nivel: "básico", q: "Dibuja un óvalo de eje mayor 90 mm. ¿Qué radio tienen los arcos pequeños?", sol: "Se divide el eje en tres partes de 30 mm; los arcos pequeños tienen radio 30 mm y los grandes 60 mm." },
    { nivel: "básico", q: "Escribe la definición de elipse, hipérbola y parábola como lugares geométricos.", sol: "Elipse: suma de distancias a dos focos constante (2a). Hipérbola: diferencia de distancias a dos focos constante (2a). Parábola: puntos que equidistan de un foco y una directriz." },
    { nivel: "básico", q: "¿Qué cónica se obtiene si el plano es paralelo a una generatriz del cono?", sol: "Una parábola." },
    { nivel: "básico", q: "Una elipse tiene a = 13 cm y b = 5 cm. ¿A qué distancia del centro están los focos?", sol: "c = √(169 − 25) = 12 cm." },
    { nivel: "básico", q: "Dibuja una espiral de dos centros separados 6 mm con 6 semicircunferencias. ¿Qué radio tiene la última?", sol: "Radios 6, 12, 18, 24, 30 y 36 mm, alternando centros. La última mide 36 mm." },
    { nivel: "básico", q: "¿Cuánto mide la base de un arco de cicloide generado por una rueda de 20 cm de radio?", sol: "2πr = 2π · 20 ≈ 125,7 cm. Su altura es 2r = 40 cm." },
    { nivel: "básico", q: "Indica el valor de la excentricidad de cada cónica.", sol: "Circunferencia e = 0; elipse 0 < e < 1; parábola e = 1; hipérbola e > 1." },
    { nivel: "básico", q: "¿Dónde está el vértice de una parábola cuyo foco dista 30 mm de la directriz?", sol: "En el eje, a 15 mm del foco y de la directriz (punto medio)." },
    { nivel: "medio", q: "Dibuja un óvalo de eje menor 60 mm. Calcula los radios.", sol: "Circunferencia de diámetro 60 mm → E y F a 30 mm del centro. Arcos grandes de radio 60 mm con centro en C y D. Distancia DE = 30√2 ≈ 42,4 mm; arcos pequeños: 60 − 42,4 ≈ 17,6 mm. Eje mayor = 2 · (30 + 17,6) ≈ 95,2 mm." },
    { nivel: "medio", q: "Dibuja un ovoide de eje menor 50 mm. ¿Qué radio tiene el arco pequeño?", sol: "Semicircunferencia de radio 25 mm. E está a 25 mm del centro: CE = 25√2 ≈ 35,4 mm. Arcos de radio CD = 50 mm; arco pequeño: 50 − 35,4 ≈ 14,6 mm. Longitud del eje: 25 + 25 + 14,6 ≈ 64,6 mm." },
    { nivel: "medio", q: "Traza una elipse de ejes 120 y 80 mm por afinidad con 12 puntos.", sol: "Circunferencias de radios 60 y 40 mm; 12 radios cada 30°; por los cortes con la mayor se trazan verticales y por los de la menor horizontales; los 12 cortes se unen con plantilla." },
    { nivel: "medio", q: "Halla los focos de la elipse del ejercicio anterior y comprueba que un punto obtenido cumple la definición.", sol: "c = √(60² − 40²) ≈ 44,7 mm. Para el punto de t = 60°: (30; 34,6). Distancias a (±44,7; 0): √(74,7² + 34,6²) ≈ 82,3 y √(14,7² + 34,6²) ≈ 37,6. Suma ≈ 119,9 ≈ 120 = 2a." },
    { nivel: "medio", q: "Traza la tangente a una elipse en un punto P conocidos los focos.", sol: "Se prolonga F′P y se lleva PQ = PF; la mediatriz de FQ es la tangente (bisectriz exterior de los radios vectores). La normal es la perpendicular por P." },
    { nivel: "medio", q: "Dibuja una hipérbola con a = 20 mm y c = 30 mm por radios vectores y traza sus asíntotas.", sol: "b = √(900 − 400) ≈ 22,4 mm. Se toman puntos N en el eje fuera de FF′; arcos de radios AN y A′N desde F y F′. Las asíntotas son las diagonales del rectángulo 40 × 44,8 mm centrado en O." },
    { nivel: "medio", q: "Dibuja una parábola de parámetro p = 20 mm por puntos y traza la tangente en un punto.", sol: "Directriz y foco a 20 mm; vértice a 10 mm. Paralelas a la directriz a distancias k = 15, 20, 30, 40…; arcos de radio k desde F. Tangente en P: mediatriz de FD, siendo D la proyección de P en la directriz." },
    { nivel: "medio", q: "¿Por qué la cardioide es una epicicloide especial?", sol: "Es la epicicloide en la que la ruleta y la circunferencia base tienen el mismo radio: el punto describe una sola «hoja» con forma de corazón." },
    { nivel: "medio", q: "Explica la propiedad reflectora de la parábola y una aplicación.", sol: "Los rayos paralelos al eje se reflejan pasando por el foco (y al revés), porque la tangente forma ángulos iguales con PF y con la paralela al eje. Aplicaciones: antenas, hornos solares, faros." },
    { nivel: "medio", q: "Calcula la excentricidad de la órbita de la Tierra si su distancia mínima al Sol es 147,1 y la máxima 152,1 millones de km.", sol: "a = (147,1 + 152,1)/2 = 149,6; c = 152,1 − 149,6 = 2,5. e = 2,5/149,6 ≈ 0,017: casi una circunferencia." },
    { nivel: "medio", q: "Dibuja la espiral de Arquímedes de paso 24 mm dividiendo la circunferencia en 8 partes.", sol: "Se trazan 8 radios a 45° y se divide el paso en 8 partes de 3 mm. Sobre cada radio sucesivo se lleva 3, 6, 9… mm desde el centro y se unen los puntos con una curva suave." },
    { nivel: "medio", q: "¿Qué es una hipérbola equilátera y cómo son sus asíntotas?", sol: "La que tiene a = b; sus asíntotas forman 45° con los ejes y son perpendiculares entre sí. Su excentricidad es √2." },
    { nivel: "avanzado", q: "Dibuja un óvalo dados los ejes 2a = 100 mm y 2b = 60 mm. Localiza los cuatro centros.", sol: "Ejes por O; se une A(50, 0) con C(0, 30); AC ≈ 58,3 mm. Se lleva OA sobre el eje menor: E a 50 mm; CE = 20 mm; con centro C y radio 20 se corta AC en F (AF ≈ 38,3 mm). La mediatriz de AF corta al eje mayor en el centro del arco pequeño y a la prolongación del menor en el del grande; los otros dos son simétricos." },
    { nivel: "avanzado", q: "Halla las tangentes a una elipse desde un punto exterior P conocidos sus focos y 2a.", sol: "Se traza la circunferencia focal de F′ (radio 2a) y la circunferencia de centro P y radio PF. Se cortan en Q₁ y Q₂. Las mediatrices de FQ₁ y FQ₂ son las tangentes, y los puntos de tangencia están en las rectas F′Q₁ y F′Q₂." },
    { nivel: "avanzado", q: "Demuestra que el pie de la perpendicular desde un foco a una tangente de la elipse está en la circunferencia principal.", sol: "Con Q tal que PQ = PF en la prolongación de F′P, la tangente es la mediatriz de FQ: el pie H es el punto medio de FQ. O es el punto medio de FF′. En el triángulo FF′Q, OH es la paralela media: OH = F′Q/2 = 2a/2 = a. H está a distancia a del centro." },
    { nivel: "avanzado", q: "Un arco parabólico de puente tiene 40 m de luz y 10 m de flecha. Halla su foco y la altura del arco a 5 m de un apoyo.", sol: "Con el vértice arriba en (0, 0) y el eje vertical: x² = −4fy. Para x = 20, y = −10: 400 = 40f → f = 10 m (foco a 10 m bajo el vértice). A 5 m del apoyo, x = 15: y = −225/40 = −5,625 → altura sobre los apoyos 10 − 5,625 = 4,375 m." },
    { nivel: "avanzado", q: "Una sala elíptica mide 30 m de largo y 18 m de ancho. ¿A qué distancia del centro hay que colocarse para oír los susurros de la otra persona?", sol: "a = 15, b = 9 → c = √(225 − 81) = 12 m. Las dos personas deben estar en los focos, a 12 m del centro sobre el eje mayor (24 m entre ellas)." },
    { nivel: "avanzado", q: "Comprueba numéricamente que el óvalo de eje mayor 120 mm no es una elipse comparando la anchura a 30 mm del centro.", sol: "Óvalo: eje menor ≈ 90,7 mm (b ≈ 45,4). En x = 30 mm estamos en el arco grande de centro (0; −34,6) y radio 80: y = −34,6 + √(6400 − 900) ≈ 39,6 mm. Elipse de semiejes 60 y 45,4: y = 45,4 · √(1 − 0,25) ≈ 39,3 mm. Difieren ligeramente: no coinciden." },
    { nivel: "avanzado", q: "Una rueda de 30 cm de radio gira sobre el suelo. ¿Qué altura tiene una piedra pegada al neumático cuando la rueda ha avanzado un cuarto de vuelta desde que la piedra tocaba el suelo?", sol: "Cicloide: y = r(1 − cos t) con t = π/2 → y = 30 · (1 − 0) = 30 cm. Su avance horizontal es r(t − sen t) = 30 · (1,571 − 1) ≈ 17,1 cm." },
    { nivel: "avanzado", q: "Construye una voluta jónica simplificada con una espiral de cuatro centros de núcleo 4 mm y explica cómo se ajusta para que termine en un ojo circular.", sol: "Espiral de cuatro centros con arcos de radios 4, 8, 12… mm. Para terminar en el ojo, el núcleo se sitúa dentro de una pequeña circunferencia (el ojo) y los radios se reducen progresivamente hacia dentro; la última vuelta se enlaza tangente al ojo con los centros alineados con el punto de unión." },
  ],
  quiz: reparte([
    { q: "Una curva técnica está formada por…", o: ["arcos de circunferencia enlazados", "rectas paralelas", "puntos de una cónica", "segmentos"], a: 0, e: "Se traza con compás." },
    { q: "El ovoide tiene… ejes de simetría", o: ["dos", "ninguno", "uno", "cuatro"], a: 2, e: "Forma de huevo." },
    { q: "En el óvalo dado el eje mayor, el eje se divide en…", o: ["2 partes", "3 partes", "4 partes", "6 partes"], a: 1, e: "O₁ y O₂ en los tercios." },
    { q: "Dos arcos enlazados correctamente tienen…", o: ["igual radio", "el mismo centro", "centros alineados con el punto de unión", "radios perpendiculares"], a: 2, e: "Condición de tangencia." },
    { q: "El paso de la espiral de dos centros separados d es…", o: ["d", "2d", "d/2", "4d"], a: 1, e: "Una vuelta: dos semicircunferencias." },
    { q: "La cicloide la describe un punto de una circunferencia que rueda sobre…", o: ["una recta", "otra circunferencia por fuera", "otra por dentro", "una elipse"], a: 0, e: "Base recta." },
    { q: "La evolvente de circunferencia se usa en…", o: ["puentes", "dientes de engranajes", "antenas", "órbitas"], a: 1, e: "Transmisión uniforme." },
    { q: "Un plano que corta las dos hojas del cono da…", o: ["elipse", "parábola", "circunferencia", "hipérbola"], a: 3, e: "Dos ramas." },
    { q: "En la elipse se cumple…", o: ["c² = a² + b²", "a² = b² + c²", "a = b + c", "b² = a² + c²"], a: 1, e: "a es la hipotenusa." },
    { q: "Los radios vectores de un punto de la elipse suman…", o: ["2a", "2b", "2c", "a + b"], a: 0, e: "Definición." },
    { q: "La tangente a la elipse es la bisectriz… de los radios vectores", o: ["interior", "exterior", "de ninguno", "perpendicular"], a: 1, e: "La interior es la normal." },
    { q: "La circunferencia focal de la elipse tiene radio…", o: ["a", "c", "2a", "b"], a: 2, e: "Centro en un foco." },
    { q: "En la hipérbola se cumple…", o: ["a² = b² + c²", "c² = a² + b²", "c = a − b", "b = a"], a: 1, e: "c es el mayor." },
    { q: "Las asíntotas de la hipérbola son las diagonales del rectángulo…", o: ["2a × 2b", "2a × 2c", "a × c", "2b × 2c"], a: 0, e: "Centrado en O." },
    { q: "La parábola es el lugar de puntos que equidistan de…", o: ["dos focos", "un foco y una directriz", "dos rectas", "el centro"], a: 1, e: "e = 1." },
    { q: "El vértice de la parábola está…", o: ["en el foco", "en la directriz", "en el punto medio entre foco y directriz", "en el infinito"], a: 2, e: "Equidista." },
    { q: "Una excentricidad e = 0,5 corresponde a…", o: ["una parábola", "una hipérbola", "una circunferencia", "una elipse"], a: 3, e: "0 < e < 1." },
    { q: "Las antenas parabólicas tienen el receptor en…", o: ["el vértice", "el foco", "la directriz", "el eje menor"], a: 1, e: "Propiedad reflectora." },
    { q: "El método del jardinero dibuja…", o: ["una parábola", "una elipse", "una espiral", "un óvalo"], a: 1, e: "Cuerda de longitud 2a." },
    { q: "Las esferas de Dandelin tocan al plano de la sección en…", o: ["los vértices", "los focos", "el centro", "las directrices"], a: 1, e: "Relacionan sección y lugar." },
  ], 3),
  examen: reparte([
    { q: "Óvalo de eje mayor 150 mm: radio de los arcos grandes", o: ["50 mm", "75 mm", "100 mm", "150 mm"], a: 2, e: "2/3 de 150." },
    { q: "Elipse con 2a = 26 y 2b = 24: distancia focal 2c", o: ["10", "5", "2", "50"], a: 0, e: "c = √(169 − 144) = 5." },
    { q: "Excentricidad de la elipse anterior", o: ["0,92", "0,38", "0,5", "1,08"], a: 1, e: "5/13." },
    { q: "Hipérbola con a = 6 y b = 8: distancia del centro al foco", o: ["14", "2", "10", "√28"], a: 2, e: "√(36 + 64)." },
    { q: "Asíntotas de la hipérbola anterior", o: ["y = ±(3/4)x", "y = ±(4/3)x", "y = ±x", "y = ±(5/3)x"], a: 1, e: "b/a." },
    { q: "Parábola y² = 12x: distancia del foco al vértice", o: ["12", "6", "3", "4"], a: 2, e: "4f = 12." },
    { q: "Base de una cicloide generada por una circunferencia de 10 cm de diámetro", o: ["31,4 cm", "62,8 cm", "20 cm", "10 cm"], a: 0, e: "π · d." },
    { q: "Tangente a la parábola en P: mediatriz de…", o: ["PF", "FD", "PD", "FV"], a: 1, e: "D proyección de P en la directriz." },
  ], 0),
  feynman: ["Qué diferencia un óvalo de una elipse", "Por qué los centros de dos arcos enlazados deben estar alineados con el punto de unión", "Cómo se obtiene cada cónica al cortar un cono", "Por qué la tangente a la elipse es la bisectriz exterior de los radios vectores", "Para qué sirve la propiedad reflectora de la parábola"],
  glosario: [
    ["Curva técnica", "Curva formada por arcos de circunferencia enlazados."],
    ["Óvalo", "Curva cerrada de cuatro arcos con dos ejes de simetría."],
    ["Ovoide", "Curva cerrada de cuatro arcos con un solo eje de simetría."],
    ["Espiral", "Curva abierta que gira alrededor de un núcleo alejándose de él."],
    ["Paso", "Distancia radial entre dos vueltas consecutivas de una espiral."],
    ["Voluta", "Espiral decorativa que termina en un núcleo circular."],
    ["Cicloide", "Curva que describe un punto de una circunferencia que rueda sobre una recta."],
    ["Evolvente", "Curva que describe el extremo de un hilo que se desenrolla de una circunferencia."],
    ["Cónica", "Curva obtenida al cortar una superficie cónica con un plano."],
    ["Foco", "Punto fijo que interviene en la definición de una cónica."],
    ["Directriz", "Recta fija que, con el foco, define la parábola y las demás cónicas."],
    ["Radio vector", "Segmento que une un punto de una cónica con un foco."],
    ["Excentricidad", "Cociente c/a que indica el tipo y la forma de una cónica."],
    ["Asíntota", "Recta a la que se aproxima una rama de la hipérbola sin tocarla."],
    ["Circunferencia principal", "Circunferencia de centro O y radio a de una elipse o hipérbola."],
    ["Circunferencia focal", "Circunferencia de centro un foco y radio 2a."],
  ],
  situacion: {
    titulo: "Un logotipo con curvas técnicas",
    reto: "Una asociación cultural del barrio necesita un logotipo que pueda cortarse en vinilo y bordarse. El encargo exige que esté formado solo por curvas construibles (óvalos, espirales, arcos enlazados y alguna cónica), para que cualquier taller pueda reproducirlo con exactitud.",
    pasos: [
      "Analizad logotipos conocidos y detectad qué curvas técnicas y cónicas los componen.",
      "Haced bocetos a mano alzada de tres propuestas y elegid una con el grupo.",
      "Construid el logotipo definitivo con regla y compás, marcando centros y puntos de tangencia.",
      "Dibujad una cónica (por ejemplo, una elipse de fondo) por puntos y su tangente en un punto.",
      "Vectorizad el diseño en un programa de CAD o de diseño gráfico y preparad una ficha con sus medidas.",
    ],
    producto: "Lámina con la construcción del logotipo, ficha técnica de medidas y archivo vectorial.",
    evaluacion: [
      "Las curvas están construidas correctamente y sin picos en los enlaces.",
      "La cónica se ha trazado por puntos con un método adecuado.",
      "El diseño es original, legible y adecuado al encargo.",
      "La ficha técnica permite reproducir el logotipo.",
    ],
  },
  figura: fig("Curvas de un vistazo", "Resumen de curvas técnicas, elipse, hipérbola y parábola", [
    ["Técnicas", ["óvalo: 4 centros", "ovoide: 1 eje", "espirales: paso", "centros alineados"], "var(--red)"],
    ["Elipse", ["PF + PF′ = 2a", "a² = b² + c²", "0 < e < 1", "tangente: bis. ext."], "var(--pen)"],
    ["Hipérbola", ["|PF − PF′| = 2a", "c² = a² + b²", "e > 1", "asíntotas ±b/a"], "var(--leaf)"],
    ["Parábola", ["PF = PD", "vértice: medio F-d", "e = 1", "reflexión al foco"], "var(--inf)"],
  ]),
  video: { id: "3UFNwZ8ZtNY", titulo: "Trazar una elipse conocidos sus ejes, método de afinidad", canal: "PDD Profesor de Dibujo", vistas: 455292, busqueda: "elipse por haces proyectivos" },
  mapa: mapa("CURVAS Y CÓNICAS", "var(--bac)", [
    ["Curvas técnicas", "óvalo · ovoide · espirales", "var(--red)"],
    ["Curvas cíclicas", "cicloide · evolvente", "var(--leaf)"],
    ["Elipse e hipérbola", "focos · ejes · tangentes", "var(--pen)"],
    ["Parábola", "foco · directriz · reflexión", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["Óvalo dado el eje mayor", "AB en 3 partes; r = AB/3, R = 2AB/3"],
    ["Óvalo dado el eje menor", "Circunferencia de diámetro CD; arcos grandes de radio CD"],
    ["Ovoide", "Semicircunferencia + 2 arcos de radio CD + arco pequeño"],
    ["Espiral de dos centros", "Radios d, 2d, 3d…; paso 2d"],
    ["Cicloide", "Base 2πr, altura 2r"],
    ["Elipse", "PF + PF′ = 2a; a² = b² + c²"],
    ["Focos de la elipse", "Desde B con radio a sobre el eje mayor"],
    ["Tangente a la elipse", "Bisectriz exterior de los radios vectores"],
    ["Hipérbola", "|PF − PF′| = 2a; c² = a² + b²"],
    ["Asíntotas", "Diagonales del rectángulo 2a × 2b"],
    ["Parábola", "PF = PD; vértice en el punto medio"],
    ["Excentricidad", "Elipse < 1, parábola = 1, hipérbola > 1"],
  ],
  familias: ["Dibujad juntos una elipse con dos chinchetas y una cuerda (método del jardinero).", "Pegad un trozo de cinta en una rueda de bicicleta y observad la cicloide que describe al avanzar.", "Iluminad una pared con una linterna e id inclinándola: veréis la circunferencia, la elipse y la parábola.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: curvas técnicas (óvalos, ovoides, espirales y volutas) como aplicación de las tangencias; curvas cíclicas; curvas cónicas como secciones y como lugares geométricos, con sus elementos, trazado por puntos y rectas tangentes; aplicaciones en arquitectura, ingeniería y diseño (RD 243/2022, Dibujo Técnico I, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic I).",
    ideas: ["Replantear en el patio un óvalo y una elipse del mismo tamaño y comparar.", "GeoGebra: animar la cicloide y la evolvente.", "Analizar fotografías de arcos carpaneles y puentes.", "Colaboración con Matemáticas I en las ecuaciones de las cónicas."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Óvalo (geometría), Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%93valo_(geometr%C3%ADa)" },
    { t: "Sección cónica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Secci%C3%B3n_c%C3%B3nica" },
  ],
  revisado: "2026-11-14",
};
