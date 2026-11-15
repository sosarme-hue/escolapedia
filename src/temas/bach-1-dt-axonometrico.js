// Dibujo Técnico I 1º Bachillerato · Tema 8. Nivel libro. Sistema axonométrico: dibujos calculados en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, arco, arcoPQ, paso, polar, add, sub, mul, lerp, dist, corteRR, iso, cara, curva, linea, tx } = G;
const dash = 'stroke-dasharray="4 3"';
const C30 = Math.cos(Math.PI / 6);
// Cubo genérico con una proyección f([x,y,z]); las aristas que tocan el vértice trasero (0,0,0) son ocultas.
const cubo = (f, s, c = "var(--ink)", w = 2.2, ocultas = true) => {
  const V = [];
  for (let i = 0; i < 8; i++) V.push(f([(i & 1) * s, ((i >> 1) & 1) * s, ((i >> 2) & 1) * s]));
  let out = "";
  for (let i = 0; i < 8; i++) for (const b of [1, 2, 4]) { const j = i | b; if (j === i) continue; if (i === 0) { if (ocultas) out += seg(V[i], V[j], c, 1.1, dash); } else out += seg(V[i], V[j], c, w); }
  return { V, out };
};
// Prisma de perfil escalonado en el plano YZ extruido de x=0 a x=X.
const prisma = (f, prof, X, c = "var(--ink)", w = 2.2, fill = "var(--pen)") => {
  const F = prof.map(([y, z]) => f([X, y, z])), B = prof.map(([y, z]) => f([0, y, z]));
  let out = cara(F, fill, 0.12) + poli(F, c, w, "none");
  prof.forEach(([y, z], i) => { if (y || z) out += seg(F[i], B[i], c, w); });
  for (let i = 0; i < prof.length; i++) { const j = (i + 1) % prof.length, [y1, z1] = prof[i], [y2, z2] = prof[j]; if ((z1 === 0 && z2 === 0) || (y1 === 0 && y2 === 0)) continue; out += seg(B[i], B[j], c, w); }
  return out;
};
const circ3 = (f, cen, r, plano, n = 72) => Array.from({ length: n }, (_, i) => { const a = (2 * Math.PI * i) / n, u = r * Math.cos(a), v = r * Math.sin(a); const [x, y, z] = cen; return f(plano === "xy" ? [x + u, y + v, z] : plano === "yz" ? [x, y + u, z + v] : [x + u, y, z + v]); });

// 8.1 Fundamentos: triángulo de trazas.
const s1 = (() => {
  const O = [130, 92], R = 56, Z = polar(O, R, 90), X = polar(O, R, 210), Y = polar(O, R, 330), M = lerp(X, Y, 0.5), Ob = [130, M[1] + dist(X, Y) / 2];
  return dib("Triángulo de trazas del sistema axonométrico ortogonal: los ejes son sus alturas y el origen su ortocentro", `${poli([X, Y, Z], "var(--pen)", 2, "var(--pen)", 0.08)}${seg(O, X, "var(--ink)", 2.4)}${seg(O, Y, "var(--ink)", 2.4)}${seg(O, Z, "var(--ink)", 2.4)}${seg(O, M, "var(--muted)", 1, dash)}
  ${arco(M, dist(X, Y) / 2, 180, 360, "var(--red)", 1.2, dash)}${seg(X, Ob, "var(--red)", 1.8)}${seg(Y, Ob, "var(--red)", 1.8)}${seg(O, Ob, "var(--red)", 1, dash)}${pt(O, "O", 8, -2)}${pt(Ob, "(O)", 8, 2, "var(--red)")}
  ${tx(Z[0] + 6, Z[1] + 2, "Z", { s: 11, b: 1, a: "start" })}${tx(X[0] - 6, X[1] + 4, "X", { s: 11, b: 1, a: "end" })}${tx(Y[0] + 6, Y[1] + 4, "Y", { s: 11, b: 1, a: "start" })}
  ${tx(14, 18, "ejes = alturas del triángulo", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(14, 30, "O = ortocentro", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(246, 18, "abatimiento de XOY:", { s: 9, a: "end", c: "var(--red)" })}${tx(246, 30, "ángulo recto en (O)", { s: 9, a: "end", c: "var(--red)" })}`);
})();

// 8.2 Tipos de axonometría.
const s2 = (() => {
  const panel = (cx, angs, lab, sub) => {
    const O = [cx, 92], L = 32;
    const ejes = angs.map((a, i) => { const P = polar(O, L, a); return `${seg(O, P, "var(--ink)", 2.2)}${tx(polar(O, L + 9, a)[0], polar(O, L + 9, a)[1] + 4, "XYZ"[i], { s: 10, b: 1 })}`; }).join("");
    return `${ejes}${pt(O, "", 0, 0)}${tx(cx, 158, lab, { s: 10, b: 1, c: "var(--pen)" })}${tx(cx, 172, sub, { s: 9, c: "var(--muted)" })}`;
  };
  return dib("Tipos de axonometría ortogonal según los ángulos entre ejes: isométrica, dimétrica y trimétrica", `${panel(46, [210, 330, 90], "isométrica", "3 ángulos de 120°")}${panel(130, [187.17, 318.58, 90], "dimétrica", "2 ángulos iguales")}${panel(214, [200, 345, 90], "trimétrica", "3 ángulos distintos")}
  ${tx(46, 34, "120°", { s: 9, c: "var(--red)" })}${tx(130, 34, "131°25′", { s: 9, c: "var(--red)" })}${tx(214, 34, "105°·110°·145°", { s: 9, c: "var(--red)" })}`);
})();

// 8.3 Escala isométrica.
const s3 = (() => {
  const O = [24, 158], E45 = polar(O, 190, 45), E30 = polar(O, 200, 30);
  const marcas = Array.from({ length: 9 }, (_, i) => { const d = 20 * (i + 1), P = polar(O, d, 45), Q = [P[0], O[1] - (P[0] - O[0]) * Math.tan(Math.PI / 6)]; return `${seg(P, Q, "var(--muted)", 0.9, dash)}${pt(P, "", 0, 0, "var(--ink)")}${pt(Q, "", 0, 0, "var(--red)")}`; }).join("");
  return dib("Construcción de la escala isométrica: las medidas reales en una recta a 45° se proyectan sobre otra a 30°", `${seg(O, [246, O[1]], "var(--ink)", 1.4)}${seg(O, E45, "var(--ink)", 2)}${seg(O, E30, "var(--red)", 2.4)}${marcas}
  ${tx(20, 70, "escala real (45°)", { s: 9.5, a: "start", b: 1 })}${tx(246, 122, "escala isométrica (30°)", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}
  ${tx(246, 20, "cos 45° / cos 30°", { s: 9.5, a: "end", c: "var(--muted)" })}${tx(246, 34, "= √(2/3) ≈ 0,816", { s: 11, a: "end", b: 1, c: "var(--red)" })}${arco(O, 30, 0, 30, "var(--red)", 1)}${arco(O, 42, 30, 45, "var(--ink)", 1)}${tx(60, 154, "30°", { s: 9, a: "start", c: "var(--red)" })}${tx(64, 128, "45°", { s: 9, a: "start" })}`);
})();

// 8.4 Perspectiva isométrica y dibujo isométrico.
const s4 = (() => {
  const a = cubo(iso([70, 92], 0.816), 60, "var(--pen)"), b = cubo(iso([190, 90], 1), 60, "var(--red)");
  return dib("Un mismo cubo de 60 mm en perspectiva isométrica reducida y en dibujo isométrico a escala real", `${a.out}${b.out}${tx(70, 160, "perspectiva isométrica", { s: 9.5, b: 1, c: "var(--pen)" })}${tx(70, 172, "aristas × 0,816", { s: 9, c: "var(--muted)" })}${tx(190, 166, "dibujo isométrico", { s: 9.5, b: 1, c: "var(--red)" })}${tx(190, 178, "aristas × 1 (22 % mayor)", { s: 9, c: "var(--muted)" })}`);
})();

// 8.5 Un punto por coordenadas.
const s5 = (() => {
  const f = iso([130, 80]), O = f([0, 0, 0]), A = f([40, 0, 0]), B = f([40, 90, 0]), P = f([40, 90, 50]);
  return dib("Representación de un punto por sus coordenadas en isométrico: se recorren x, y y z paralelamente a los ejes", `${seg(O, f([100, 0, 0]), "var(--ink)", 1.6)}${seg(O, f([0, 110, 0]), "var(--ink)", 1.6)}${seg(O, f([0, 0, 70]), "var(--ink)", 1.6)}
  ${seg(O, A, "var(--pen)", 2.8)}${seg(A, B, "var(--leaf)", 2.8)}${seg(B, P, "var(--red)", 2.8)}${seg(f([0, 90, 0]), B, "var(--muted)", 1, dash)}${seg(f([0, 0, 50]), f([0, 90, 50]), "var(--muted)", 1, dash)}${seg(f([0, 90, 50]), P, "var(--muted)", 1, dash)}${seg(f([0, 90, 0]), f([0, 90, 50]), "var(--muted)", 1, dash)}
  ${pt(O, "O", 6, -6)}${pt(P, "P", 8, -2, "var(--red)", 12)}${pt(B, "P₁", 6, 12, "var(--leaf)")}${tx(f([100, 0, 0])[0] - 4, f([100, 0, 0])[1] + 4, "X", { s: 11, b: 1, a: "end" })}${tx(f([0, 110, 0])[0] + 4, f([0, 110, 0])[1] + 4, "Y", { s: 11, b: 1, a: "start" })}${tx(136, 16, "Z", { s: 11, b: 1, a: "start" })}
  ${paso(add(lerp(O, A, 0.5), [-12, -10]), 1)}${paso(add(lerp(A, B, 0.5), [-4, 16]), 2, "var(--leaf)")}${paso(add(lerp(B, P, 0.5), [14, 0]), 3, "var(--red)")}${tx(14, 176, "P(40, 90, 50): 1 x = 40 · 2 y = 90 · 3 z = 50", { s: 9.5, a: "start", c: "var(--muted)" })}`);
})();

// 8.6 De las vistas a la isométrica.
const s6 = (() => {
  const f = iso([160, 92]), prof = [[0, 0], [80, 0], [80, 20], [25, 20], [25, 60], [0, 60]];
  const env = cubo((p) => f([p[0] * 40 / 60, p[1] * 80 / 60, p[2]]), 60, "var(--muted)", 1, false).out.replace(/stroke-width="1"/g, 'stroke-width="1" stroke-dasharray="3 3"');
  const k = 0.5, al = prof.map(([y, z]) => [14 + y * k, 58 - z * k]), pl = [[14, 74], [54, 74], [54, 94], [14, 94]];
  return dib("Paso de las vistas diédricas a la perspectiva isométrica: prisma envolvente y vaciado", `${poli(al, "var(--ink)", 1.6, "none")}${poli(pl, "var(--ink)", 1.6, "none")}${seg([26.5, 74], [26.5, 94], "var(--ink)", 1.2)}${tx(34, 18, "alzado", { s: 9, c: "var(--muted)" })}${tx(34, 108, "planta", { s: 9, c: "var(--muted)" })}
  ${env}${prisma(f, prof, 40)}${paso([224, 28], 1, "var(--muted)")}${paso([216, 120], 2)}${tx(14, 150, "1 prisma envolvente", { s: 9.5, a: "start" })}${tx(14, 162, "   80 × 40 × 60", { s: 9.5, a: "start", c: "var(--muted)" })}${tx(14, 176, "2 se quita el volumen", { s: 9.5, a: "start" })}`);
})();

// 8.7 Caras inclinadas.
const s7 = (() => {
  const f = iso([150, 70]), prof = [[0, 0], [80, 0], [80, 15], [0, 50]];
  const P1 = f([40, 0, 50]), P2 = f([40, 80, 15]);
  return dib("Cara inclinada en isométrico: los extremos de la arista oblicua se sitúan por coordenadas sobre aristas paralelas a los ejes", `${cubo((p) => f([p[0] * 40 / 50, p[1] * 80 / 50, p[2]]), 50, "var(--muted)", 1, false).out.replace(/stroke-width="1"/g, 'stroke-width="1" stroke-dasharray="3 3"')}${prisma(f, prof, 40, "var(--ink)", 2.2, "var(--leaf)")}
  ${cara([f([40, 0, 50]), f([40, 80, 15]), f([0, 80, 15]), f([0, 0, 50])], "var(--red)", 0.18)}${seg(P1, P2, "var(--red)", 3)}${pt(P1, "z = 50", -8, -4, "var(--red)", 10)}${pt(P2, "z = 15", 10, 16, "var(--red)", 10)}
  ${tx(14, 160, "la arista inclinada no se mide:", { s: 9.5, a: "start" })}${tx(14, 174, "se unen sus extremos", { s: 9.5, a: "start" })}${tx(246, 20, "coordenadas sobre", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 32, "aristas verticales", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 8.8 Óvalo isométrico.
const s8 = (() => {
  const f = iso([130, 30]), s = 110, T = f([0, 0, 0]), Lf = f([s, 0, 0]), B = f([s, s, 0]), Rt = f([0, s, 0]);
  const mTL = lerp(T, Lf, 0.5), mTR = lerp(T, Rt, 0.5), mBL = lerp(B, Lf, 0.5), mBR = lerp(B, Rt, 0.5), C1 = corteRR(T, mBL, B, mTL), C2 = corteRR(T, mBR, B, mTR);
  const real = curva(circ3(f, [s / 2, s / 2, 0], s / 2, "xy"), "var(--muted)", 1, true).replace("<path", `<path ${dash}`);
  return dib("Óvalo isométrico de cuatro centros inscrito en el rombo que representa un cuadrado", `${poli([T, Lf, B, Rt], "var(--ink)", 1.6, "none")}${seg(T, mBL, "var(--muted)", 1)}${seg(T, mBR, "var(--muted)", 1)}${seg(B, mTL, "var(--muted)", 1)}${seg(B, mTR, "var(--muted)", 1)}${seg(Lf, Rt, "var(--muted)", 0.8, dash)}${real}
  ${arcoPQ(T, mBL, mBR, "var(--red)", 2.6)}${arcoPQ(B, mTR, mTL, "var(--red)", 2.6)}${arcoPQ(C1, mTL, mBL, "var(--pen)", 2.6)}${arcoPQ(C2, mBR, mTR, "var(--pen)", 2.6)}
  ${pt(T, "1", 8, 2, "var(--red)")}${pt(B, "2", 8, 8, "var(--red)")}${pt(C1, "3", -4, 14, "var(--pen)")}${pt(C2, "4", 4, 14, "var(--pen)")}${[mTL, mTR, mBL, mBR].map((m) => pt(m, "", 0, 0, "var(--leaf)")).join("")}
  ${tx(14, 160, "centros 1 y 2: vértices obtusos", { s: 9.5, a: "start", c: "var(--red)", b: 1 })}${tx(14, 174, "centros 3 y 4: en la diagonal mayor", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(246, 20, "discontinua:", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 32, "elipse exacta", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 8.9 Circunferencias en las tres caras del cubo.
const s9 = (() => {
  const f = iso([130, 94]), s = 80, r = 32, c = cubo(f, s, "var(--ink)", 2, false);
  return dib("Circunferencias inscritas en las tres caras visibles de un cubo en isométrico: tres elipses iguales con distinta orientación", `${c.out}${curva(circ3(f, [40, 40, 80], r, "xy"), "var(--red)", 2.4, true)}${curva(circ3(f, [80, 40, 40], r, "yz"), "var(--pen)", 2.4, true)}${curva(circ3(f, [40, 80, 40], r, "xz"), "var(--leaf)", 2.4, true)}
  ${tx(14, 18, "eje mayor ⊥ eje normal", { s: 9, a: "start", b: 1 })}${tx(14, 150, "cara XZ", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(246, 150, "cara YZ", { s: 9.5, a: "end", c: "var(--leaf)", b: 1 })}${tx(246, 18, "cara XY", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 8.10 Cilindro en isométrico.
const s10 = (() => {
  const f = iso([110, 128]), r = 36, h = 72, top = circ3(f, [0, 0, h], r, "xy"), bot = circ3(f, [0, 0, 0], r, "xy"), Cb = f([0, 0, 0]), Ct = f([0, 0, h]), a = r * Math.sqrt(1.5);
  const vis = bot.filter((p) => p[1] >= Cb[1] - 0.01).sort((p, q) => p[0] - q[0]), ocu = bot.filter((p) => p[1] < Cb[1]).sort((p, q) => p[0] - q[0]);
    return dib("Cilindro de eje vertical en isométrico: dos elipses iguales y las generatrices tangentes de contorno", `${cara([[Cb[0] - a, Cb[1]], [Ct[0] - a, Ct[1]], [Ct[0] + a, Ct[1]], [Cb[0] + a, Cb[1]]], "var(--pen)", 0.1)}${curva(top, "var(--ink)", 2.4, true)}${linea(vis, "var(--ink)", 2.4)}${linea(ocu, "var(--ink)", 1.1, dash)}
  ${seg([Cb[0] - a, Cb[1]], [Ct[0] - a, Ct[1]], "var(--red)", 2.6)}${seg([Cb[0] + a, Cb[1]], [Ct[0] + a, Ct[1]], "var(--red)", 2.6)}${seg(Cb, Ct, "var(--muted)", 1, 'stroke-dasharray="8 3 2 3"')}${pt(Ct, "", 0, 0)}${pt(Cb, "", 0, 0)}
  ${paso([Ct[0] + a + 16, Ct[1] - 6], 1)}${paso([Cb[0] + a + 16, Cb[1] + 8], 2)}${paso([Cb[0] - a - 14, (Cb[1] + Ct[1]) / 2], 3, "var(--red)")}
  ${tx(246, 40, "1 óvalo superior", { s: 9.5, a: "end" })}${tx(246, 54, "2 se traslada h", { s: 9.5, a: "end" })}${tx(246, 68, "3 generatrices", { s: 9.5, a: "end", c: "var(--red)" })}${tx(246, 80, "tangentes", { s: 9.5, a: "end", c: "var(--red)" })}`);
})();

// 8.11 Dimétrica normalizada.
const s11 = (() => {
  const ex = [-Math.cos((7.17 * Math.PI) / 180), Math.sin((7.17 * Math.PI) / 180)], ey = mul([Math.cos((41.42 * Math.PI) / 180), Math.sin((41.42 * Math.PI) / 180)], 0.5);
  const O = [170, 118], f = ([x, y, z]) => [O[0] + x * ex[0] + y * ey[0], O[1] + x * ex[1] + y * ey[1] - z], c = cubo(f, 70, "var(--pen)");
  return dib("Cubo en perspectiva dimétrica normalizada: ejes a 7° y 41° con coeficientes 1, 1/2 y 1", `${c.out}${seg(O, f([100, 0, 0]), "var(--muted)", 1)}${seg(O, f([0, 130, 0]), "var(--muted)", 1)}${tx(f([100, 0, 0])[0] - 4, f([100, 0, 0])[1] + 4, "X", { s: 10, b: 1, a: "end" })}${tx(f([0, 130, 0])[0] + 4, f([0, 130, 0])[1] + 4, "Y", { s: 10, b: 1, a: "start" })}
  ${tx(14, 18, "X: 7°10′ · coef. 1", { s: 9.5, a: "start", b: 1 })}${tx(14, 32, "Y: 41°25′ · coef. ½", { s: 9.5, a: "start", b: 1, c: "var(--red)" })}${tx(14, 46, "Z: vertical · coef. 1", { s: 9.5, a: "start", b: 1 })}${tx(14, 176, "la profundidad se dibuja a la mitad", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 8.12 Croquis en papel isométrico.
const s12 = (() => {
  const u = 13, O = [130, 22], f = iso(O, 1), lin = [];
  for (let i = -14; i <= 14; i++) { lin.push(seg(f([i * u, -16 * u, 0]), f([i * u, 16 * u, 0]), "var(--line)", 0.8)); lin.push(seg(f([-16 * u, i * u, 0]), f([16 * u, i * u, 0]), "var(--line)", 0.8)); }
  for (let j = -12; j <= 12; j++) lin.push(seg([O[0] + j * u * C30, 0], [O[0] + j * u * C30, 180], "var(--line)", 0.8));
  const g = iso([O[0], O[1] + 6 * u], 1), q = ([x, y, z]) => g([x * u, y * u, z * u]);
  return dib("Croquis de una escalera de dos peldaños sobre papel isométrico: cada arista sigue una línea de la trama", `<defs><clipPath id="trama-dt8"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#trama-dt8)">${lin.join("")}</g>${prisma(q, [[0, 0], [6, 0], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [0, 6]], 3, "var(--ink)", 2.4, "var(--leaf)")}
  <rect x="10" y="152" width="122" height="24" rx="6" fill="var(--card)"/>${tx(16, 167, "cada cuadrícula = 10 mm", { s: 9.5, a: "start", b: 1 })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Sistema axonométrico",
  minutos: 115,
  objetivos: [
    "Comprender los fundamentos del sistema axonométrico ortogonal: triedro, plano del cuadro y triángulo de trazas",
    "Distinguir las axonometrías isométrica, dimétrica y trimétrica y sus coeficientes de reducción",
    "Diferenciar perspectiva isométrica y dibujo isométrico y construir la escala isométrica",
    "Dibujar piezas en isométrico a partir de sus vistas, incluidas caras inclinadas",
    "Representar circunferencias y cilindros mediante elipses y óvalos isométricos",
    "Croquizar piezas sencillas en papel isométrico con proporción y limpieza",
  ],
  claves: ["axonometría", "triedro", "plano del cuadro", "triángulo de trazas", "isometría", "dimetría", "trimetría", "coeficiente de reducción", "escala isométrica", "dibujo isométrico", "óvalo isométrico", "papel isométrico"],
  lectura: {
    titulo: "Instrucciones sin palabras",
    html: `<p>Abre las instrucciones de montaje de un mueble sueco, de un juguete de construcción o de una impresora: casi no hay texto. Todo se explica con dibujos en los que las piezas aparecen en tres dimensiones, con sus tornillos y agujeros, de forma que cualquiera, hable el idioma que hable, entienda qué va dónde.</p>
    <p>Casi siempre esos dibujos están hechos en <b>perspectiva isométrica</b>. Tiene una ventaja enorme sobre una fotografía: las aristas paralelas siguen siendo paralelas y las medidas en la dirección de los tres ejes se pueden tomar con una regla. Por eso se usa también en los catálogos de piezas industriales, en los esquemas de instalaciones de fontanería, en los videojuegos de estrategia con vista «tres cuartos» y en muchas infografías.</p>
    <p>La perspectiva isométrica es un caso particular del <b>sistema axonométrico</b>, que representa un objeto con una sola proyección sobre un plano inclinado respecto a sus tres dimensiones principales. En este tema estudiarás sus fundamentos, cómo se calculan sus coeficientes de reducción y cómo dibujar en ella piezas, circunferencias y cilindros.</p>`,
  },
  pregunta: {
    texto: "Si miras un cubo de frente ves un cuadrado; si lo giras 45° ves un rectángulo. ¿Cómo debe colocarse para que se vean tres caras iguales?",
    respuesta: "Hay que mirarlo según la <mark>diagonal del cubo</mark>, de modo que las tres aristas que salen de un vértice formen el mismo ángulo con la dirección de la vista. Así las tres caras visibles se ven iguales (rombos) y los ejes forman 120° entre sí: es la posición isométrica.",
  },
  bloques: [
    {
      html: `<h3>8.1 Fundamentos del sistema axonométrico</h3><p>El <b>sistema axonométrico</b> representa un objeto mediante <b>una sola proyección</b> sobre un plano llamado <b>plano del cuadro</b> o de proyección. El objeto se refiere a un <b>triedro trirrectángulo</b>: tres planos perpendiculares entre sí que se cortan en tres ejes, X, Y y Z, con origen en O. Las medidas del objeto se toman paralelas a esos ejes.</p><p>En la <b>axonometría ortogonal</b> los rayos proyectantes son perpendiculares al plano del cuadro, que corta a los tres ejes. La intersección del plano del cuadro con los tres planos del triedro es un triángulo, el <b>triángulo de trazas</b>. Sus propiedades son fundamentales:</p><ul><li>Es siempre <b>acutángulo</b>.</li><li>Las proyecciones de los ejes son las <b>alturas</b> del triángulo, y la proyección del origen es su <b>ortocentro</b>.</li><li>Los ángulos entre las proyecciones de los ejes son siempre mayores de 90°.</li></ul><p>Si se abate una de las caras del triedro sobre el plano del cuadro, por ejemplo XOY alrededor del lado XY, el vértice abatido (O) forma un ángulo recto: está en la semicircunferencia de diámetro XY. En ese abatimiento las medidas se ven en verdadera magnitud, y se pueden llevar al dibujo para construir figuras exactas.</p><p>Existe también la <b>axonometría oblicua</b>, en la que los rayos no son perpendiculares al cuadro. La más importante es la <b>perspectiva caballera</b>, que estudiarás en el tema siguiente.</p>`,
      svg: s1,
    },
    {
      html: `<h3>8.2 Tipos de axonometría ortogonal</h3><p>Según la posición del plano del cuadro respecto a los ejes, cambian los ángulos con que se ven los ejes y las reducciones de las medidas. Se distinguen tres tipos:</p><ul><li><b>Isométrica</b>: el plano del cuadro forma el mismo ángulo con los tres ejes. Los ejes proyectados forman tres ángulos de <b>120°</b>, el triángulo de trazas es <b>equilátero</b> y las tres direcciones se reducen igual.</li><li><b>Dimétrica</b>: el plano forma ángulos iguales con dos de los ejes. Hay dos ángulos iguales entre ejes, el triángulo de trazas es <b>isósceles</b> y dos direcciones tienen la misma reducción.</li><li><b>Trimétrica</b>: los tres ángulos son distintos, el triángulo de trazas es <b>escaleno</b> y cada eje tiene su propio coeficiente.</li></ul><p>La isométrica es la más usada porque todas las medidas se tratan igual y es muy rápida de dibujar. Su defecto es que algunas formas aparecen demasiado simétricas: por ejemplo, las diagonales de un cubo pueden coincidir y el dibujo pierde claridad.</p><p>La dimétrica y la trimétrica ofrecen vistas más naturales, en las que se puede destacar una cara del objeto, a costa de trabajar con coeficientes distintos. La norma <b>UNE-EN ISO 5456-3</b> recoge las axonometrías recomendadas para el dibujo técnico.</p><p>En el dibujo se suele colocar el eje Z vertical, y los ejes X e Y hacia abajo a izquierda y derecha. El eje Z siempre conserva su verticalidad para que el objeto parezca apoyado en el suelo.</p>`,
      svg: s2,
    },
    {
      html: `<h3>8.3 Coeficientes de reducción y escala isométrica</h3><p>Al proyectar ortogonalmente sobre un plano inclinado, los segmentos paralelos a los ejes se ven <b>más cortos</b>. El cociente entre la longitud proyectada y la real es el <b>coeficiente de reducción</b> de cada eje (c<sub>x</sub>, c<sub>y</sub>, c<sub>z</sub>). Es el coseno del ángulo que forma cada eje con el plano del cuadro.</p><p>Una propiedad de la axonometría ortogonal relaciona los tres coeficientes:</p><p style="text-align:center"><b>c<sub>x</sub>² + c<sub>y</sub>² + c<sub>z</sub>² = 2</b></p><p>En la isometría los tres son iguales: 3c² = 2, de modo que <b>c = √(2/3) ≈ 0,816</b>. Un segmento de 100 mm paralelo a un eje se dibuja con 81,6 mm.</p><p>Para no calcular cada medida se construye la <b>escala isométrica</b>:</p><ol><li>Se traza una recta horizontal y, desde un punto O, dos rectas a 45° y a 30°.</li><li>Sobre la de 45° se llevan las medidas reales (por ejemplo, cada 10 mm).</li><li>Desde cada marca se trazan perpendiculares a la horizontal hasta cortar la recta de 30°.</li><li>Las marcas obtenidas en la recta de 30° forman la escala reducida.</li></ol><p>Funciona porque los puntos tienen la misma abscisa: d · cos 45° = d′ · cos 30°, luego d′/d = cos 45° / cos 30° = 0,816.</p><p>En la dimetría normalizada (ejes a 7°10′ y 41°25′) los coeficientes son 0,943, 0,943 y 0,471, que se redondean a 1, 1 y ½.</p>`,
      svg: s3,
    },
    {
      html: `<h3>8.4 Perspectiva isométrica y dibujo isométrico</h3><p>Aplicar el coeficiente 0,816 a cada medida es correcto pero lento. Por eso en la práctica se distinguen dos formas de trabajar:</p><ul><li><b>Perspectiva isométrica</b>: se aplica el coeficiente de reducción. El dibujo tiene el tamaño exacto que daría la proyección ortogonal del objeto.</li><li><b>Dibujo isométrico</b>: se toman las medidas <b>sin reducir</b> (coeficiente 1) sobre las direcciones de los ejes. El resultado es exactamente igual en forma, pero un 22,5 % mayor (1/0,816 ≈ 1,225).</li></ul><p>Como los dos dibujos son <b>semejantes</b>, el dibujo isométrico es suficiente para comunicar la forma de una pieza, y es el que se usa casi siempre en croquis, láminas y exámenes, salvo que el enunciado pida expresamente la reducción. Lo importante es indicar con claridad cuál de los dos se ha hecho.</p><p>Hay que recordar una regla esencial: <b>solo se miden las aristas paralelas a los ejes</b>. Una arista inclinada, una diagonal o un radio en dirección cualquiera no conservan la escala del eje, y sus extremos deben situarse por coordenadas.</p><p>Cuando se compara un dibujo isométrico con la escala del enunciado, hay que tenerlo en cuenta: si se pide la perspectiva a escala 1:1 con reducción, las aristas de 50 mm se dibujan de 40,8 mm; si se pide dibujo isométrico 1:1, se dibujan de 50 mm.</p><p>En ambos casos las aristas paralelas en el objeto son paralelas en el dibujo: es una proyección cilíndrica.</p>`,
      svg: s4,
    },
    {
      html: `<h3>8.5 Situar puntos por coordenadas</h3><p>La forma más segura de dibujar cualquier punto en axonometría es por sus <b>coordenadas</b> (x, y, z), recorriéndolas paralelamente a los ejes:</p><ol><li>Desde el origen O se lleva la coordenada x sobre el eje X.</li><li>Desde ese punto se traza una paralela al eje Y y se lleva la coordenada y. Se obtiene P₁, la proyección del punto sobre el plano XOY (su «planta»).</li><li>Desde P₁ se traza una vertical (paralela a Z) y se lleva la coordenada z: el punto P.</li></ol><p>El orden puede cambiar, pero siempre se avanza paralelamente a los ejes, con la escala que corresponda (reducida o no).</p><p>Este método resuelve todos los casos difíciles: vértices de caras inclinadas, puntos de curvas, centros de agujeros, extremos de aristas oblicuas. Por ejemplo, para dibujar una pirámide se sitúan por coordenadas los vértices de la base y el vértice superior, y luego se unen.</p><p>Es útil dibujar también las proyecciones del punto sobre los tres planos coordenados (las líneas discontinuas del dibujo), porque forman un pequeño prisma que ayuda a leer la posición en el espacio. Sin ellas, un punto aislado en axonometría es ambiguo: muchos puntos distintos del espacio tienen la misma proyección.</p><p>En el ordenador, los programas de CAD hacen exactamente esto: guardan las coordenadas de cada vértice y calculan su proyección multiplicándolas por los vectores de los ejes.</p>`,
      svg: s5,
    },
    {
      html: `<h3>8.6 De las vistas a la isométrica</h3><p>El ejercicio más habitual consiste en dibujar en isométrico una pieza dada por sus vistas diédricas (alzado, planta y perfil). Un método ordenado evita errores:</p><ol><li><b>Analizar las vistas</b> e imaginar la pieza. Identificar su anchura, profundidad y altura máximas, y qué partes se han quitado a un bloque.</li><li><b>Elegir la orientación</b>: normalmente se coloca el alzado en la cara de la izquierda o la derecha, de modo que se vean las caras más informativas.</li><li><b>Dibujar el prisma envolvente</b> con trazo fino: un paralelepípedo con las medidas máximas.</li><li><b>Vaciar</b>: se van marcando sobre las aristas del envolvente las medidas de los escalones, ranuras y cortes, y se quitan los volúmenes sobrantes.</li><li><b>Repasar</b> con trazo grueso las aristas visibles y borrar o dejar muy finas las auxiliares.</li></ol><p>En perspectiva isométrica las aristas ocultas normalmente <b>no se dibujan</b>, salvo que sean imprescindibles para entender la pieza.</p><p>La estrategia del envolvente es tan útil porque todas las medidas de las vistas son paralelas a los ejes: se pueden llevar directamente con el compás o la regla sobre las direcciones de la perspectiva.</p><p>Al terminar conviene hacer la comprobación inversa: mirar la perspectiva «desde delante» y «desde arriba» mentalmente y verificar que coincide con el alzado y la planta dados.</p>`,
      svg: s6,
      video: { id: "G7qyjsQQaV0", titulo: "Cómo dibujar en perspectiva isométrica a partir de las vistas", canal: "Curso de dibujo. Demetrio Susin.", vistas: 416706, busqueda: "isométrica a partir de las vistas" },
    },
    {
      html: `<h3>8.7 Caras inclinadas y aristas oblicuas</h3><p>Muchas piezas tienen caras <b>inclinadas</b>: chaflanes, cuñas, tejados, rampas. Sus aristas no son paralelas a ningún eje, por lo que <b>no pueden medirse directamente</b> en la perspectiva: su longitud aparente no guarda relación sencilla con la real.</p><p>El procedimiento correcto es situar sus <b>extremos</b>, que sí están sobre aristas o líneas paralelas a los ejes:</p><ol><li>Se dibuja el prisma envolvente.</li><li>En las aristas verticales se marcan las alturas de los extremos de la cara inclinada (en el ejemplo, 50 y 15 mm).</li><li>Se unen los puntos obtenidos. La cara inclinada queda determinada por esos vértices.</li></ol><p>El mismo principio sirve para pirámides, para cuñas cortadas por planos oblicuos y para los tejados a varias aguas: se sitúan primero los puntos «fáciles» por coordenadas y luego se unen.</p><p>Una comprobación útil es el <b>paralelismo</b>: si dos aristas son paralelas en la pieza, también lo son en la perspectiva. En el dibujo, la arista inclinada del frente y la de la cara trasera deben ser paralelas; si no lo son, algún punto está mal situado.</p><p>Los <b>ángulos</b> tampoco se conservan: un ángulo de 30° de un chaflán puede aparecer con cualquier otra amplitud. Nunca se debe usar el transportador sobre una perspectiva; los ángulos se convierten primero en medidas (catetos) sobre los ejes.</p>`,
      svg: s7,
    },
    {
      html: `<h3>8.8 La circunferencia en isométrico: el óvalo</h3><p>Una circunferencia situada en un plano paralelo a una cara del triedro se proyecta como una <b>elipse</b>. Su construcción exacta es laboriosa, así que en el dibujo isométrico se sustituye por un <b>óvalo isométrico</b> de cuatro centros, muy parecido a la elipse real.</p><p>La circunferencia está inscrita en un cuadrado, que en isométrico se ve como un <b>rombo</b> de ángulos de 60° y 120°. El óvalo es tangente a los cuatro lados del rombo en sus puntos medios:</p><ol><li>Se dibuja el rombo con el lado igual al diámetro, paralelo a los ejes de la cara.</li><li>Los vértices de los <b>ángulos obtusos</b> (120°) son los centros 1 y 2 de los arcos grandes.</li><li>Desde cada vértice obtuso se trazan rectas a los puntos medios de los lados opuestos. Se cortan sobre la <b>diagonal mayor</b> en los centros 3 y 4 de los arcos pequeños.</li><li>Se trazan los arcos grandes desde 1 y 2, y los pequeños desde 3 y 4, entre los puntos medios de los lados.</li></ol><p>Los arcos empalman sin salto porque los centros están alineados con los puntos de tangencia, como en cualquier enlace de arcos (lo viste en el tema de tangencias).</p><p>En el dibujo puedes comparar el óvalo con la elipse exacta (discontinua): la diferencia es pequeña y queda dentro de la precisión de un croquis o una lámina. Para piezas de precisión se dibuja la elipse con sus ejes: el <b>mayor</b> mide 1,22 veces el diámetro en dibujo isométrico y el <b>menor</b> 0,71 veces.</p>`,
      svg: s8,
      video: { id: "3vSs0eCziwo", titulo: "Circunferencias en perspectiva isométrica", canal: "DibuJose. Dibujando con Jose", vistas: 278384, busqueda: "circunferencia en isométrica óvalo" },
    },
    {
      html: `<h3>8.9 Circunferencias en las tres caras</h3><p>Las circunferencias pueden estar en cualquiera de los tres planos principales: horizontal (XY) o los dos verticales (XZ, YZ). En isométrico las tres elipses son <b>iguales</b> en tamaño; solo cambia su orientación.</p><p>La regla para orientarlas es sencilla: <b>el eje mayor de la elipse es perpendicular al eje que no está contenido en la cara</b> (el eje perpendicular a ella).</p><ul><li>En una cara horizontal (XY), el eje perpendicular es Z (vertical), así que el eje mayor es <b>horizontal</b>.</li><li>En una cara XZ, el eje perpendicular es Y, y el eje mayor es perpendicular a la dirección de Y en el dibujo.</li><li>En una cara YZ, el eje mayor es perpendicular a la dirección de X.</li></ul><p>Esta regla tiene una consecuencia práctica muy útil para los <b>cilindros</b> y los <b>agujeros</b>: el eje del cilindro coincide con la dirección del eje menor de sus elipses. Si un agujero atraviesa una cara vertical, su eje es horizontal y el eje menor de la elipse lo señala.</p><p>Para dibujar las tres elipses con óvalos se usa en cada cara el rombo correspondiente, construido con los dos ejes que contiene. Conviene empezar siempre por el rombo, con trazo fino, y marcar los puntos medios de sus lados, que son los puntos de tangencia.</p><p>Un error frecuente es dibujar círculos en lugar de elipses o girar mal la elipse: el resultado parece «pegado» a la pieza, sin profundidad.</p>`,
      svg: s9,
    },
    {
      html: `<h3>8.10 Cilindros, agujeros y redondeos</h3><p>Un <b>cilindro</b> de eje vertical en isométrico se dibuja con:</p><ol><li>El óvalo de la base superior, en un plano horizontal.</li><li>El mismo óvalo trasladado una distancia igual a la altura, paralelamente al eje Z. Basta con trasladar los centros de los arcos.</li><li>Las <b>generatrices de contorno</b>: dos verticales tangentes a ambos óvalos en los extremos del eje mayor.</li></ol><p>La mitad trasera de la base inferior queda oculta y no se dibuja (o se dibuja discontinua si se quiere mostrar).</p><p>Los <b>agujeros</b> se tratan igual que cilindros «en negativo»: se dibuja el óvalo de la boca y, si el agujero es pasante y poco profundo, se ve una parte del óvalo del otro extremo dentro del agujero.</p><p>Los <b>redondeos</b> de las esquinas (cuartos de circunferencia) se dibujan con un solo arco del óvalo: se marca en las aristas la distancia del radio desde la esquina, se trazan perpendiculares a las aristas desde esos puntos y su corte es el centro del arco. El arco inferior paralelo se obtiene trasladando el centro según el espesor de la pieza.</p><p>Con estas técnicas se pueden dibujar casi todas las piezas mecánicas sencillas: casquillos, bridas, soportes con taladros, ejes escalonados. Si el eje del cilindro es horizontal, se procede igual con los óvalos en caras verticales y generatrices paralelas al eje correspondiente.</p>`,
      svg: s10,
    },
    {
      html: `<h3>8.11 Dimetría y trimetría</h3><p>Aunque la isometría es la más común, a veces conviene otra axonometría para que una cara importante se vea mejor o para evitar coincidencias de aristas.</p><p>La <b>dimetría normalizada</b> (ISO 5456-3) coloca el eje Z vertical, el eje X a <b>7°10′</b> de la horizontal y el eje Y a <b>41°25′</b>. Los coeficientes son 1 en X y Z, y <b>½</b> en Y (valores redondeados de 0,943 y 0,471). La cara frontal se ve casi sin deformar y la profundidad, acortada, da una imagen muy natural. Es útil para piezas con mucha información en el alzado.</p><p>En una <b>trimetría</b> los tres ángulos y los tres coeficientes son distintos. Se puede construir a partir del triángulo de trazas: se dibuja un triángulo acutángulo, sus alturas dan los ejes y los abatimientos de las caras del triedro dan las escalas de cada eje.</p><p>Para cualquier axonometría ortogonal se cumple que los ejes no pueden formar ángulos de 90° o menos entre sí, y que la suma de los cuadrados de los coeficientes es 2. Por eso no vale cualquier terna de ángulos «a ojo».</p><p>Las axonometrías dimétricas y trimétricas exigen escalas distintas para cada eje: lo más cómodo es construirlas una vez (con el método de la escala isométrica adaptado) o usar los coeficientes redondeados de la norma.</p><p>Los programas de CAD permiten elegir cualquiera de ellas con un clic, pero entender su geometría ayuda a escoger la mejor vista.</p>`,
      svg: s11,
    },
    {
      html: `<h3>8.12 Croquis isométrico y papel isométrico</h3><p>El <b>croquis</b> es un dibujo a mano alzada, sin instrumentos, pero proporcionado y claro. Es la herramienta más rápida para pensar y comunicar una idea en un taller o en una reunión de diseño.</p><p>El <b>papel isométrico</b> tiene impresa una trama de líneas a 30°, 90° y 150° (o solo puntos en esas posiciones) que facilita el croquis: todas las aristas paralelas a los ejes siguen líneas de la trama, y las medidas se cuentan en cuadrículas. Es ideal para practicar el paso de vistas a perspectiva.</p><p>Consejos para un buen croquis:</p><ul><li>Empezar por el <b>envolvente</b> con trazo muy suave y comprobar las proporciones antes de detallar.</li><li>Dibujar primero las líneas largas y después las cortas.</li><li>Para los óvalos, marcar primero el rombo y los puntos de tangencia.</li><li>Repasar al final con un trazo más firme las aristas visibles; no dejar líneas dobles.</li><li>Sombrear ligeramente una o dos caras para reforzar el volumen, siempre con la misma orientación de la luz.</li></ul><p>En el dibujo, la escalera de dos peldaños se ha construido contando cuadrículas: 6 de ancho, 6 de alto y 3 de profundidad, sin necesidad de regla.</p><p>Dominar el croquis isométrico permite resolver mentalmente problemas de vistas, y es una destreza muy valorada en ingeniería, arquitectura y diseño de producto.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Calcula la longitud con que se dibuja en perspectiva isométrica una arista de 75 mm paralela al eje X.", pasos: ["Coeficiente isométrico: c = √(2/3) ≈ 0,816.", "75 · 0,816 = 61,2 mm."], resultado: "61,2 mm (en dibujo isométrico se dibujaría de 75 mm)." },
    { enunciado: "Comprueba que los coeficientes de la dimetría normalizada (0,943; 0,943; 0,471) cumplen la relación fundamental.", pasos: ["0,943² = 0,889; dos veces: 1,778.", "0,471² = 0,222.", "Suma: 1,778 + 0,222 = 2,000."], resultado: "Sí: c<sub>x</sub>² + c<sub>y</sub>² + c<sub>z</sub>² = 2." },
    { enunciado: "Dibuja en isométrico el punto P(40, 20, 30).", pasos: ["Desde O, 40 sobre el eje X.", "Paralela a Y: 20; se obtiene P₁.", "Vertical desde P₁: 30."], resultado: "P queda situado sin ambigüedad; conviene dibujar su prisma de coordenadas." },
    { enunciado: "Una pieza en L tiene 80 mm de ancho, 40 de fondo y 60 de alto; la base mide 20 mm de alto y el brazo vertical 25 mm de grueso. Describe su dibujo isométrico.", pasos: ["Prisma envolvente de 80 × 40 × 60.", "En la cara frontal se marca el perfil en L: altura de la base 20, grueso del brazo 25.", "Se extruye el perfil 40 mm en profundidad y se quitan las aristas del bloque sobrante."], resultado: "Pieza en L con todas las aristas paralelas a los ejes." },
    { enunciado: "¿Cuánto miden los ejes de la elipse de una circunferencia de 40 mm de diámetro en dibujo isométrico?", pasos: ["Eje mayor: 1,22 · 40 ≈ 49 mm.", "Eje menor: 0,71 · 40 ≈ 28 mm.", "En perspectiva isométrica (con reducción): eje mayor 40 mm (coincide con el diámetro) y menor 0,58 · 40 ≈ 23 mm."], resultado: "Dibujo isométrico: 49 × 28 mm." },
    { enunciado: "Construye el óvalo isométrico inscrito en un rombo de 50 mm de lado.", pasos: ["Centros 1 y 2 en los vértices obtusos.", "Rectas desde cada vértice obtuso a los puntos medios de los lados opuestos; se cortan en la diagonal mayor en 3 y 4.", "Arcos grandes desde 1 y 2, pequeños desde 3 y 4, entre los puntos medios."], resultado: "Óvalo tangente a los cuatro lados en sus puntos medios." },
  ],
  errores: [
    "Medir con la escala del eje una arista inclinada o una diagonal.",
    "Mezclar medidas reducidas (×0,816) y sin reducir en el mismo dibujo.",
    "Dibujar círculos en lugar de elipses en las caras de una pieza.",
    "Orientar mal la elipse: el eje mayor debe ser perpendicular al eje normal a la cara.",
    "Usar el transportador sobre la perspectiva: los ángulos no se conservan.",
    "Dibujar las aristas ocultas con el mismo trazo que las vistas, o dejar líneas auxiliares gruesas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Cuántas proyecciones utiliza el sistema axonométrico? ¿Sobre qué plano?", sol: "Una sola, sobre el plano del cuadro, inclinado respecto a los tres ejes del triedro." },
    { nivel: "básico", q: "¿Qué ángulos forman los ejes en la isometría?", sol: "Tres ángulos de 120°. El eje Z vertical y X e Y a 30° de la horizontal." },
    { nivel: "básico", q: "¿Cuál es el coeficiente de reducción isométrico?", sol: "√(2/3) ≈ 0,816." },
    { nivel: "básico", q: "Diferencia perspectiva isométrica y dibujo isométrico.", sol: "La perspectiva aplica el coeficiente 0,816; el dibujo isométrico toma las medidas reales. Son semejantes y el dibujo es un 22,5 % mayor." },
    { nivel: "básico", q: "Dibuja en dibujo isométrico un cubo de 40 mm de arista.", sol: "Ejes a 120°; desde el vértice inferior delantero, aristas de 40 mm en vertical y a 30° a cada lado; se completan las caras con paralelas. Se ven tres rombos iguales." },
    { nivel: "básico", q: "Dibuja un prisma de 60 × 30 × 20 mm en isométrico.", sol: "60 mm sobre un eje horizontal, 30 sobre el otro y 20 en vertical, con todas las aristas paralelas a los ejes." },
    { nivel: "básico", q: "¿Qué forma tiene un cuadrado de una cara del cubo en isométrico?", sol: "Un rombo con ángulos de 60° y 120°." },
    { nivel: "básico", q: "¿Qué tipo de triángulo de trazas corresponde a la isometría, la dimetría y la trimetría?", sol: "Equilátero, isósceles y escaleno, respectivamente; siempre acutángulo." },
    { nivel: "básico", q: "Sitúa en isométrico el punto A(30, 50, 20).", sol: "30 sobre X, 50 paralelo a Y, 20 en vertical, partiendo del origen O." },
    { nivel: "básico", q: "¿Se dibujan las aristas ocultas en isométrico?", sol: "Normalmente no, salvo que sean necesarias para entender la pieza; si se dibujan, con línea discontinua fina." },
    { nivel: "medio", q: "Construye la escala isométrica para medidas de 0 a 80 mm.", sol: "Horizontal; rectas a 45° y 30° desde O; medidas reales cada 10 mm en la de 45°; perpendiculares a la horizontal hasta la de 30°. La marca de 80 queda a 65,3 mm de O." },
    { nivel: "medio", q: "Demuestra que el coeficiente isométrico es 0,816 con la relación de los coeficientes.", sol: "c<sub>x</sub>² + c<sub>y</sub>² + c<sub>z</sub>² = 2 y los tres iguales: 3c² = 2 → c = √(2/3) = 0,8165." },
    { nivel: "medio", q: "Dibuja en isométrico una pieza en L de 60 × 40 × 50 con la base de 15 mm de alto y el brazo de 20 mm de grueso.", sol: "Envolvente de 60 × 40 × 50. Perfil en L en la cara frontal (base 15, brazo 20) y extrusión de 40 mm. Se repasan las aristas visibles: 6 del perfil delantero, 5 de profundidad y las traseras visibles." },
    { nivel: "medio", q: "Dibuja una cuña de 80 × 40 con alturas de 50 y 15 mm en sus extremos.", sol: "Envolvente 80 × 40 × 50; en las aristas verticales de los extremos se marcan 50 y 15; se unen; la cara inclinada es un paralelogramo." },
    { nivel: "medio", q: "Construye el óvalo isométrico de una circunferencia de 40 mm de diámetro en la cara superior.", sol: "Rombo de 40 mm de lado con lados paralelos a X e Y; centros en los vértices obtusos y en los cortes con la diagonal mayor de las rectas desde los vértices obtusos a los puntos medios opuestos; cuatro arcos." },
    { nivel: "medio", q: "Indica la orientación del eje mayor de la elipse de una circunferencia situada en la cara YZ.", sol: "Perpendicular a la dirección del eje X en el dibujo (que es el eje normal a la cara YZ)." },
    { nivel: "medio", q: "Dibuja un cilindro de 30 mm de diámetro y 50 mm de altura con eje vertical.", sol: "Óvalo superior en un rombo de 30 mm; se traslada 50 mm hacia abajo; generatrices verticales tangentes en los extremos del eje mayor; la mitad trasera de la base inferior no se dibuja." },
    { nivel: "medio", q: "¿Cuánto miden los ejes de la elipse de una circunferencia de 60 mm en perspectiva isométrica (con reducción)?", sol: "Eje mayor 60 mm (la recta perpendicular al eje normal es paralela al cuadro); eje menor 60 · 0,577 ≈ 34,6 mm." },
    { nivel: "medio", q: "Dibuja un cubo de 50 mm en dimetría normalizada.", sol: "Z vertical (50 mm), X a 7°10′ con 50 mm, Y a 41°25′ con 25 mm. Se completan las caras con paralelas." },
    { nivel: "medio", q: "Dibuja en isométrico una pirámide cuadrangular de base 40 mm y altura 60 mm.", sol: "Base: rombo de 40 mm. Centro de la base por las diagonales. Desde el centro, vertical de 60 mm: vértice. Se une con los cuatro vértices de la base; una arista queda oculta." },
    { nivel: "medio", q: "Dibuja en papel isométrico una escalera de tres peldaños de 1 × 1 cuadrícula, con 3 cuadrículas de fondo.", sol: "Perfil escalonado en la cara frontal (3 de ancho, 3 de alto, escalones de 1 × 1), extruido 3 cuadrículas siguiendo la trama." },
    { nivel: "medio", q: "Dibuja un bloque de 60 × 40 × 30 con un agujero pasante vertical de 20 mm de diámetro centrado.", sol: "Prisma; en la cara superior, rombo de 20 mm centrado y su óvalo; se ve solo la boca superior (el interior en sombra), y si es poco profundo un arco del óvalo inferior desplazado 30 mm." },
    { nivel: "avanzado", q: "Dibuja un triángulo de trazas isósceles y halla los ejes y los ángulos de la dimetría correspondiente.", sol: "Las alturas del triángulo son los ejes; su punto de corte (ortocentro) es O. Los dos ángulos entre ejes adyacentes a la base son iguales. Se miden con transportador sobre el dibujo de los ejes (es un plano real, no una perspectiva)." },
    { nivel: "avanzado", q: "Obtén la escala del eje X en una axonometría ortogonal a partir del triángulo de trazas.", sol: "Se abate la cara XOY alrededor del lado XY: (O) está en la semicircunferencia de diámetro XY y en la prolongación del eje Z. Sobre (O)X se llevan las medidas reales y se proyectan perpendicularmente a XY sobre el eje X proyectado." },
    { nivel: "avanzado", q: "Dibuja en isométrico una pieza con un redondeo de 15 mm en una esquina vertical.", sol: "Se marca 15 mm desde la esquina en las dos aristas de la cara superior; perpendiculares a esas aristas por los puntos marcados; su corte es el centro del arco; se traza el arco y se repite trasladado al nivel inferior; tangente vertical de contorno." },
    { nivel: "avanzado", q: "Una pieza tiene un chaflán a 45° de 10 mm en una arista horizontal. ¿Cómo se representa en isométrico?", sol: "No se usa el ángulo: se convierten los 45° en catetos de 10 mm. Se marcan 10 mm desde la arista sobre las dos caras adyacentes, paralelamente a los ejes, y se unen: la cara del chaflán es un rectángulo que en perspectiva aparece como paralelogramo." },
    { nivel: "avanzado", q: "Dibuja un cilindro de eje horizontal paralelo a X de 40 mm de diámetro y 70 mm de longitud.", sol: "Óvalos en caras YZ (eje mayor perpendicular a X); el segundo óvalo trasladado 70 mm según X; generatrices tangentes paralelas a X en los extremos del eje mayor." },
    { nivel: "avanzado", q: "Explica por qué en isometría pueden coincidir las proyecciones de dos aristas distintas y cómo evitarlo.", sol: "La dirección de proyección es la diagonal del cubo: los puntos alineados con ella coinciden. Por ejemplo, el vértice trasero y el delantero de un cubo se proyectan en el mismo punto. Se evita cambiando la orientación de la pieza o usando una dimetría o trimetría." },
    { nivel: "avanzado", q: "Una pieza tiene una superficie inclinada con un agujero perpendicular a ella. ¿Por qué no sirve el óvalo isométrico?", sol: "La circunferencia no está en un plano paralelo a una cara del triedro: su proyección es una elipse de otra orientación y proporción. Hay que situar puntos de la circunferencia por coordenadas (o abatir el plano) y unirlos con plantilla de curvas." },
    { nivel: "avanzado", q: "Calcula el porcentaje de error si en un examen se pide perspectiva isométrica y se entrega dibujo isométrico de una pieza de 100 mm.", sol: "El dibujo mide 100 mm en lugar de 81,6 mm: (100 − 81,6)/81,6 ≈ 22,5 % mayor. La forma es correcta; la escala no." },
  ],
  quiz: reparte([
    { q: "El sistema axonométrico usa…", o: ["dos proyecciones", "una proyección", "tres proyecciones", "una proyección cónica"], a: 1, e: "Sobre el plano del cuadro." },
    { q: "En la axonometría ortogonal los rayos son…", o: ["oblicuos al cuadro", "perpendiculares al cuadro", "concurrentes", "paralelos a Z"], a: 1, e: "Ortogonal." },
    { q: "Los ejes proyectados son del triángulo de trazas sus…", o: ["medianas", "alturas", "bisectrices", "mediatrices"], a: 1, e: "O es el ortocentro." },
    { q: "El triángulo de trazas es siempre…", o: ["rectángulo", "obtusángulo", "acutángulo", "equilátero"], a: 2, e: "Ángulos entre ejes > 90°." },
    { q: "En la isometría los ejes forman…", o: ["90°", "120°", "135°", "60°"], a: 1, e: "Tres iguales." },
    { q: "Coeficiente isométrico:", o: ["0,5", "0,707", "0,816", "1"], a: 2, e: "√(2/3)." },
    { q: "c<sub>x</sub>² + c<sub>y</sub>² + c<sub>z</sub>² =", o: ["1", "2", "3", "√2"], a: 1, e: "Relación fundamental." },
    { q: "El dibujo isométrico es respecto a la perspectiva…", o: ["igual", "22,5 % mayor", "18 % menor", "el doble"], a: 1, e: "1/0,816." },
    { q: "En la escala isométrica las rectas forman…", o: ["30° y 60°", "45° y 30°", "45° y 60°", "15° y 30°"], a: 1, e: "cos 45/cos 30." },
    { q: "Dimetría: triángulo de trazas…", o: ["equilátero", "isósceles", "escaleno", "rectángulo"], a: 1, e: "Dos ejes iguales." },
    { q: "Dimetría normalizada: ángulos de X e Y con la horizontal", o: ["30° y 30°", "7°10′ y 41°25′", "15° y 45°", "0° y 45°"], a: 1, e: "ISO 5456-3." },
    { q: "En la dimetría normalizada la profundidad se reduce a…", o: ["la mitad", "0,816", "un tercio", "no se reduce"], a: 0, e: "Coeficiente ½." },
    { q: "Una arista inclinada en isométrico…", o: ["se mide con la escala", "se dibuja uniendo sus extremos", "se mide con transportador", "no se dibuja"], a: 1, e: "Por coordenadas." },
    { q: "Un cuadrado de la cara superior se ve como…", o: ["un cuadrado", "un rombo de 60°/120°", "un rectángulo", "un trapecio"], a: 1, e: "Isométrico." },
    { q: "Los centros de los arcos grandes del óvalo isométrico están en…", o: ["los vértices agudos", "los vértices obtusos", "los puntos medios", "el centro"], a: 1, e: "Ángulos de 120°." },
    { q: "Los centros de los arcos pequeños están en…", o: ["la diagonal mayor", "la diagonal menor", "los lados", "fuera del rombo"], a: 0, e: "Cortes de las rectas auxiliares." },
    { q: "El eje mayor de la elipse de una cara horizontal es…", o: ["vertical", "horizontal", "a 30°", "a 60°"], a: 1, e: "Perpendicular a Z." },
    { q: "Las generatrices de contorno de un cilindro vertical son tangentes a los óvalos en…", o: ["los extremos del eje menor", "los extremos del eje mayor", "los centros", "cualquier punto"], a: 1, e: "Contorno aparente." },
    { q: "El papel isométrico tiene líneas a…", o: ["0° y 90°", "30°, 90° y 150°", "45° y 135°", "60° y 120° solo"], a: 1, e: "Direcciones de los ejes." },
    { q: "En el método del envolvente se empieza por…", o: ["los detalles", "el prisma de medidas máximas", "las circunferencias", "las aristas ocultas"], a: 1, e: "Luego se vacía." },
  ], 2),
  examen: reparte([
    { q: "Arista de 120 mm en perspectiva isométrica:", o: ["120 mm", "98 mm", "85 mm", "60 mm"], a: 1, e: "120 · 0,816 ≈ 98." },
    { q: "Si c<sub>x</sub> = c<sub>y</sub> = 0,9, c<sub>z</sub> vale…", o: ["0,9", "0,62", "0,2", "1,1"], a: 1, e: "√(2 − 1,62) = √0,38 ≈ 0,62." },
    { q: "Elipse en dibujo isométrico de Ø 50: eje mayor", o: ["50 mm", "61 mm", "41 mm", "35 mm"], a: 1, e: "1,22 · 50." },
    { q: "El eje del cilindro tiene la dirección del…", o: ["eje mayor de sus elipses", "eje menor de sus elipses", "lado del rombo", "eje Z siempre"], a: 1, e: "Regla de orientación." },
    { q: "La proyección de O en el triángulo de trazas es su…", o: ["baricentro", "circuncentro", "ortocentro", "incentro"], a: 2, e: "Intersección de alturas." },
    { q: "Al abatir XOY, (O) está en…", o: ["el lado XY", "la semicircunferencia de diámetro XY", "el baricentro", "el infinito"], a: 1, e: "Ángulo recto en (O)." },
    { q: "Un ángulo de 90° de una cara en isométrico se ve con…", o: ["90°", "60° o 120°", "45°", "30°"], a: 1, e: "Rombo." },
    { q: "Para un chaflán a 45° en isométrico se usan…", o: ["el transportador", "los catetos sobre los ejes", "la escala isométrica en la arista inclinada", "un óvalo"], a: 1, e: "Ángulos no se conservan." },
  ], 0),
  feynman: ["Qué es el triángulo de trazas y qué relación tiene con los ejes", "Por qué el coeficiente isométrico es 0,816", "Qué diferencia hay entre perspectiva isométrica y dibujo isométrico", "Cómo se construye el óvalo isométrico", "Por qué las aristas inclinadas no se pueden medir"],
  glosario: [
    ["Sistema axonométrico", "Sistema de representación con una sola proyección cilíndrica sobre un plano inclinado respecto a los ejes."],
    ["Triedro trirrectángulo", "Tres planos perpendiculares entre sí que definen los ejes X, Y, Z."],
    ["Plano del cuadro", "Plano sobre el que se proyecta el objeto."],
    ["Triángulo de trazas", "Triángulo que forman las intersecciones del plano del cuadro con el triedro."],
    ["Isometría", "Axonometría con los tres ejes igualmente inclinados respecto al cuadro (ejes a 120°)."],
    ["Dimetría", "Axonometría con dos ejes igualmente inclinados."],
    ["Trimetría", "Axonometría con los tres ejes distintamente inclinados."],
    ["Coeficiente de reducción", "Cociente entre la longitud proyectada de un segmento paralelo a un eje y su longitud real."],
    ["Escala isométrica", "Escala gráfica que aplica el coeficiente 0,816."],
    ["Perspectiva isométrica", "Representación isométrica con las medidas reducidas."],
    ["Dibujo isométrico", "Representación isométrica con las medidas sin reducir."],
    ["Óvalo isométrico", "Curva de cuatro arcos que sustituye a la elipse de una circunferencia en isométrico."],
    ["Prisma envolvente", "Paralelepípedo de medidas máximas del que se parte para dibujar una pieza."],
    ["Generatriz de contorno", "Recta tangente que limita la imagen de un cilindro o un cono."],
    ["Papel isométrico", "Papel con trama de líneas o puntos según las direcciones isométricas."],
    ["Croquis", "Dibujo a mano alzada, proporcionado y claro."],
  ],
  situacion: {
    titulo: "Instrucciones de montaje universales",
    reto: "Una cooperativa de carpintería del barrio fabrica una estantería modular de tres piezas y necesita unas instrucciones de montaje sin texto, comprensibles para cualquier persona. Vuestro grupo las diseñará en perspectiva isométrica.",
    pasos: [
      "Tomad las medidas de las piezas (o de un prototipo de cartón) y dibujad sus vistas acotadas.",
      "Croquizad cada pieza en papel isométrico para decidir la orientación más clara.",
      "Pasad a limpio en dibujo isométrico, con los agujeros y tacos representados por óvalos.",
      "Dibujad las viñetas del montaje paso a paso, con flechas que indiquen el movimiento de cada pieza.",
      "Probad las instrucciones con compañeros de otro grupo y corregid lo que no se entienda.",
    ],
    producto: "Folleto de instrucciones con 4-6 viñetas isométricas y una lista visual de piezas y tornillería.",
    evaluacion: [
      "Las piezas están correctamente dibujadas en isométrico, con aristas paralelas a los ejes y óvalos bien orientados.",
      "Las proporciones coinciden con las medidas reales.",
      "La secuencia de montaje se entiende sin texto.",
      "El trazado es limpio, con jerarquía de líneas.",
    ],
  },
  figura: fig("Axonometría de un vistazo", "Resumen de los tipos de axonometría, sus coeficientes y la representación de circunferencias", [
    ["Fundamentos", ["1 proyección", "triedro X, Y, Z", "triángulo de trazas", "ejes = alturas"], "var(--pen)"],
    ["Tipos", ["isométrica 120°", "dimétrica 7°/41°", "trimétrica", "c² suman 2"], "var(--leaf)"],
    ["Medidas", ["c iso = 0,816", "escala 45°/30°", "dibujo iso × 1", "solo ∥ a ejes"], "var(--red)"],
    ["Curvas", ["rombo + óvalo", "4 centros", "eje mayor ⊥ normal", "cilindros"], "var(--inf)"],
  ]),
  video: { id: "g--3EP5wf9c", titulo: "Perspectiva isométrica", canal: "Juan Carlos Martín San José", vistas: 661833, busqueda: "perspectiva isométrica" },
  mapa: mapa("SISTEMA AXONOMÉTRICO", "var(--bac)", [
    ["Fundamentos", "triedro · trazas · cuadro", "var(--pen)"],
    ["Tipos", "iso · dimétrica · trimétrica", "var(--leaf)"],
    ["Escalas", "0,816 · dibujo isométrico", "var(--red)"],
    ["Curvas y croquis", "óvalo · cilindro · trama", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Axonometría", "Una sola proyección sobre el plano del cuadro."],
    ["Triángulo de trazas", "Ejes = alturas; O = ortocentro; siempre acutángulo."],
    ["Isometría", "Ejes a 120°, triángulo equilátero, c = 0,816."],
    ["Dimetría normalizada", "Ejes a 7°10′ y 41°25′; coeficientes 1, ½, 1."],
    ["Relación de coeficientes", "c<sub>x</sub>² + c<sub>y</sub>² + c<sub>z</sub>² = 2."],
    ["Escala isométrica", "Rectas a 45° (real) y 30° (reducida), unidas por perpendiculares a la horizontal."],
    ["Dibujo isométrico", "Sin reducción; 22,5 % mayor que la perspectiva."],
    ["Aristas inclinadas", "No se miden: se sitúan sus extremos por coordenadas."],
    ["Óvalo isométrico", "Centros en los vértices obtusos y en la diagonal mayor."],
    ["Orientación de la elipse", "Eje mayor ⊥ al eje normal a la cara."],
    ["Cilindro", "Dos óvalos + generatrices tangentes en el eje mayor."],
    ["Croquis", "Envolvente suave, líneas largas primero, repaso final."],
  ],
  familias: ["Buscad en casa instrucciones de montaje de muebles o juguetes e identificad las perspectivas isométricas.", "Imprimid papel isométrico y dibujad juntos piezas de construcción.", "Observad un cubo de Rubik mirándolo por un vértice: veréis los tres rombos de la isometría.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sistemas de representación: fundamentos del sistema axonométrico ortogonal, triángulo de trazas, coeficientes de reducción, perspectivas isométrica, dimétrica y trimétrica, representación de sólidos, circunferencias y croquis (RD 243/2022, Dibujo Técnico I, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic I, sistemes de representació).",
    ideas: ["Trabajo con piezas de madera o impresas en 3D para pasar de vistas a isométrica.", "Papel isométrico para croquis rápidos al inicio de cada sesión.", "Comparar con software (FreeCAD, SketchUp) la isométrica y la dimétrica de una misma pieza.", "Reto de instrucciones de montaje sin texto."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Perspectiva axonométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_axonom%C3%A9trica" },
    { t: "Perspectiva isométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_isom%C3%A9trica" },
  ],
  revisado: "2026-11-14",
};
