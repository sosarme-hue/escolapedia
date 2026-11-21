// Dibujo Técnico II 2º Bachillerato · Tema 7. Nivel libro. Construcciones diédricas calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, pt, recto, arco, poli, caba, ang, corteRR, mid, dist, unit, add, sub, mul, pie, tx, dash, LT, dP, planoD } = G;

const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const perp = (u) => [u[1], -u[0]];
const fino = (A, B) => seg(A, B, "var(--muted)", 0.9, 'stroke-dasharray="2 2"');
const L = (P, s, dx, dy, c = "var(--ink)", a = "start") => tx(P[0] + dx, P[1] + dy, s, { s: 11, b: 1, a, c });
const lt1 = (A, B, lab = "LT₁", dx = 4, dy = -4, k = 0.85) => `${seg(A, B, "var(--leaf)", 1.6)}${tx(A[0] + (B[0] - A[0]) * k + dx, A[1] + (B[1] - A[1]) * k + dy, lab, { s: 10, b: 1, a: "start", c: "var(--leaf)" })}`;
const arcoC = (C, P, Q, r = null, c = "var(--red)", w = 1.4) => { const R = r || dist(C, P); let a0 = ang(C, P), a1 = ang(C, Q), d = a1 - a0; while (d < 0) d += 360; return d <= 180 ? arco(C, R, a0, a1, c, w) : arco(C, R, a1, a0, c, w); };
// Nueva proyección en un cambio de plano: se conserva la distancia de la otra proyección a la LT anterior.
const nueva = (keep, drop, Lo0, Lo1, Ln0, Ln1) => { const F = pie(keep, Ln0, Ln1), d = dist(drop, pie(drop, Lo0, Lo1)); return add(F, mul(unit(keep, F), d)); };
// Plano por sus coeficientes: n = (a, b, g) en (x, alejamiento, cota), pasando por el punto A.
const planoPor = (n, A, yt) => planoD(A[0] + (n[1] * A[1] + n[2] * A[2]) / n[0], n[0], n[1], n[2], yt);
const tr = (Q, xh, xv, c = "var(--pen)") => `${seg(Q.N, Q.hTr(xh), c, 2.2)}${seg(Q.N, Q.vTr(xv), c, 2.2)}`;
const R3 = (P, a, b, s = 7) => { const u = unit(P, a), v = unit(P, b); return `<path d="M${add(P, mul(u, s)).join(" ")} L${add(add(P, mul(u, s)), mul(v, s)).join(" ")} L${add(P, mul(v, s)).join(" ")}" fill="none" stroke="var(--ink)" stroke-width="1.1"/>`; };

// 7.1 El ángulo recto en proyección.
const s1 = (() => {
  const P = caba([96, 140], 0.6, 215, 1), B = [0, 0, 70], A = [0, 110, 70], C = [60, 0, 34], b = [0, 0, 0], a = [0, 110, 0], c = [60, 0, 0];
  const suelo = [[-20, -30, 0], [-20, 140, 0], [90, 140, 0], [90, -30, 0]];
  return dib("Teorema del ángulo recto: si un ángulo recto tiene un lado paralelo a un plano de proyección, se proyecta sobre él como otro ángulo recto", clip(`${poli(suelo.map(P), "var(--muted)", 1, "var(--muted)", 0.06)}${[[A, a], [B, b], [C, c]].map(([X, x]) => seg(P(X), P(x), "var(--muted)", 0.9, dash)).join("")}${seg(P(B), P(A), "var(--pen)", 2.4)}${seg(P(B), P(C), "var(--pen)", 2.4)}${seg(P(b), P(a), "var(--red)", 2.2)}${seg(P(b), P(c), "var(--red)", 2.2)}${R3(P(B), P(A), P(C))}${R3(P(b), P(a), P(c))}
  ${pt(P(A), "A", 4, -6)}${pt(P(B), "B", -12, -4)}${pt(P(C), "C", -12, 0)}${pt(P(a), "a", 4, 12, "var(--red)")}${pt(P(b), "b", 6, 12, "var(--red)")}${pt(P(c), "c", -12, 8, "var(--red)")}`, "cl71") + tx(250, 22, "AB ∥ PH ⇒ abc = 90°", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// Plano común de 7.2 y 7.4.
const Y2 = 84, PQ = planoD(214, 0.6, 1, 0.9, Y2), nQ = [0.6, 1, 0.9];
const proyR = (A, n, t0, t1, yt) => { const P = dP(yt), p0 = P(A.map((v, i) => v + n[i] * t0)), p1 = P(A.map((v, i) => v + n[i] * t1)); return { h: [p0.h, p1.h], v: [p0.v, p1.v] }; };

// 7.2 Recta perpendicular a un plano.
const s2 = (() => {
  const A = [80, 40, 40], p = dP(Y2)(A), r = proyR(A, nQ, -36, 40, Y2);
  return dib("Recta perpendicular a un plano: su proyección horizontal es perpendicular a la traza h y su proyección vertical es perpendicular a la traza v", clip(`${LT(Y2, 8, 252)}${tr(PQ, 30, 116)}${fino(p.h, p.v)}${seg(...r.h, "var(--red)", 2.4)}${seg(...r.v, "var(--red)", 2.4)}${R3(corteRR(...r.h, PQ.N, PQ.hTr(0)), r.h[1], PQ.N)}${R3(corteRR(...r.v, PQ.N, PQ.vTr(0)), r.v[0], PQ.N)}
  ${pt(p.h, "a", -12, 4)}${pt(p.v, "a′", -14, -2)}${L(r.h[1], "r", 4, 0, "var(--red)")}${L(r.v[0], "r′", 4, 4, "var(--red)")}${L(PQ.hTr(130), "h", 0, -8, "var(--pen)")}${L(PQ.vTr(120), "v", 6, 2, "var(--pen)")}${pt(PQ.N, "N", 2, -8)}`, "cl72") + tx(250, 172, "r ⊥ h · r′ ⊥ v", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 7.3 Plano perpendicular a una recta por un punto.
const s3 = (() => {
  const yt = 80, P = dP(yt), R1 = [150, 70, 10], R2 = [220, 30, 60], d = R2.map((v, i) => v - R1[i]), A = [70, 36, 40], Q = planoPor(d, A, yt);
  const r1 = P(R1), r2 = P(R2), a = P(A), hd = [d[1], -d[0]], tV = -A[1] / hd[1], V = [A[0] + hd[0] * tV, 0, A[2]], vv = P(V);
  return dib("Plano perpendicular a una recta r por un punto A: se traza por A una horizontal del plano (proyección horizontal perpendicular a r, vertical paralela a la LT); su traza vertical da un punto de v, que es perpendicular a r′, y h es perpendicular a r", clip(`${LT(yt, 8, 252)}${seg(r1.h, r2.h, "var(--red)", 2.4)}${seg(r1.v, r2.v, "var(--red)", 2.4)}${fino(a.h, a.v)}${seg(a.h, vv.h, "var(--leaf)", 1.8)}${seg(a.v, vv.v, "var(--leaf)", 1.8)}${fino(vv.h, vv.v)}${seg(Q.N, Q.vTr(10), "var(--pen)", 2.2)}${seg(Q.N, Q.hTr(130), "var(--pen)", 2.2)}
  ${pt(a.h, "a", 6, 4)}${pt(a.v, "a′", 6, -4)}${pt(vv.v, "", 0, 0)}${pt(vv.h, "", 0, 0)}${L(r2.h, "r", 6, 4, "var(--red)")}${L(r2.v, "r′", 6, 0, "var(--red)")}${pt(Q.N, "N", 6, -6)}${L(Q.hTr(120), "h", 6, 0, "var(--pen)")}${L(Q.vTr(30), "v", 6, 4, "var(--pen)")}`, "cl73") + tx(250, 172, "h ⊥ r · v ⊥ r′", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }) + tx(10, 172, "horizontal por A", { s: 10, b: 1, a: "start", c: "var(--leaf)" }));
})();

// Plano visto de canto con LT₁ perpendicular a h: devuelve M (h ∩ LT₁) y un punto de la nueva traza v₁.
const deCanto = (Q, yt, xv, L0, L1) => { const V = dP(yt)([xv, 0, Q.cota(xv, 0)]); return { M: corteRR(L0, L1, Q.N, Q.hTr(0)), V1: nueva(V.h, V.v, [0, yt], [10, yt], L0, L1), V }; };

// 7.4 Distancia de un punto a un plano (cambio de plano).
const QA = (xN) => planoD(xN, -0.6, 1, 0.7, 60), hd = unit([0, 0], [1, 0.6]), pd = [0.514, -0.857];
const s4 = (() => {
  const yt = 60, Q = QA(40), M = Q.hTr(110), L0 = add(M, mul(pd, 40)), L1 = add(M, mul(pd, -120)), lo = [[0, yt], [10, yt]];
  const X = dP(yt)([200, 60, Q.cota(200, 60)]), X1 = nueva(X.h, X.v, ...lo, L0, L1), A = dP(yt)([210, 24, 14]), a1 = nueva(A.h, A.v, ...lo, L0, L1), F = pie(a1, M, X1);
  return dib("Distancia de un punto A a un plano: con una nueva línea de tierra perpendicular a la traza h, el plano se ve de canto como la recta v₁ y la perpendicular desde a′₁ hasta v₁ es la distancia en verdadera magnitud", clip(`${LT(yt, 8, 252)}${tr(Q, 250, 110)}${lt1(L1, L0, "LT₁", 4, 4)}${fino(X.h, X.v)}${fino(X.h, X1)}${recta(M, X1, 50, "var(--pen)", 2.4)}${fino(A.h, A.v)}${fino(A.h, a1)}${seg(a1, F, "var(--red)", 2.8)}${R3(F, a1, M, 6)}
  ${pt(A.h, "a", 6, 4)}${pt(A.v, "a′", 6, -2)}${pt(a1, "a′₁", 4, -6, "var(--red)")}${pt(X.h, "x", -4, 12)}${pt(X.v, "x′", 6, 10)}${pt(X1, "x′₁", -6, -4, "var(--pen)", 10)}${pt(M, "", 0, 0)}${L(mid(a1, F), "d", 6, 6, "var(--red)")}${L(Q.hTr(236), "h", -4, -8, "var(--pen)", "end")}${L(Q.vTr(96), "v", 8, 4, "var(--pen)")}${L(add(M, mul(unit(M, X1), 100)), "v₁", 6, 0, "var(--pen)")}${pt(Q.N, "N", -4, -8)}`, "cl74") + tx(10, 172, "d en verdadera magnitud", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 7.5 Distancia entre planos paralelos.
const s5 = (() => {
  const yt = 60, Q1 = QA(40), Q2 = QA(-40), M1 = Q1.hTr(100), L0 = add(M1, mul(pd, 40)), L1 = add(M1, mul(pd, -110));
  const c1 = deCanto(Q1, yt, 110, L0, L1), c2 = deCanto(Q2, yt, 50, L0, L1), F = pie(c2.M, c1.M, c1.V1);
  return dib("Distancia entre dos planos paralelos: con un cambio de plano (nueva LT perpendicular a las trazas h) ambos planos se ven de canto como dos rectas paralelas, y su distancia es la que se busca", clip(`${LT(yt, 8, 252)}${tr(Q1, 250, 110)}${tr(Q2, 250, 40, "var(--inf)")}${lt1(L0, L1, "LT₁", 4, 4)}${fino(c1.V.h, c1.V1)}${fino(c2.V.h, c2.V1)}${recta(c1.M, c1.V1, 40, "var(--pen)", 2.4)}${recta(c2.M, c2.V1, 40, "var(--inf)", 2.4)}${seg(c2.M, F, "var(--red)", 2.8)}${R3(F, c2.M, c1.V1, 6)}
  ${pt(c1.M, "", 0, 0)}${pt(c2.M, "", 0, 0)}${pt(c1.V1, "", 0, 0)}${pt(c2.V1, "", 0, 0)}${L(Q1.hTr(236), "h₁", -4, -8, "var(--pen)", "end")}${L(Q2.hTr(170), "h₂", -4, -8, "var(--inf)", "end")}${L(mid(c2.M, F), "d", 6, 6, "var(--red)")}`, "cl75") + tx(250, 22, "de canto: v₁ ∥ v₂", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }));
})();

// Cambio de plano con LT₁ perpendicular a una recta horizontal r (dirección u en planta), situada más allá de X.
const LTperp = (X, u, ext = 10) => { const L0 = add(X, mul(u, ext)); return [add(L0, mul(perp(u), 90)), add(L0, mul(perp(u), -90))]; };
const Lo = [[0, 0], [10, 0]];

// 7.6 Distancia de un punto a una recta horizontal.
const s6 = (() => {
  const yt = 50, P = dP(yt), R1 = P([20, 70, 34]), R2 = P([170, 96, 34]), A = P([90, 26, 12]), u = unit(R1.h, R2.h), [L0, L1] = LTperp(R2.h, u, 14), lo = [[0, yt], [10, yt]];
  const r1 = nueva(R2.h, R2.v, ...lo, L0, L1), a1 = nueva(A.h, A.v, ...lo, L0, L1);
  return dib("Distancia de un punto a una recta horizontal: con una nueva línea de tierra perpendicular a la recta, esta se proyecta como un punto y la distancia se ve en verdadera magnitud", clip(`${LT(yt, 8, 252)}${seg(R1.h, R2.h, "var(--pen)", 2.2)}${seg(R1.v, R2.v, "var(--pen)", 2.2)}${fino(A.h, A.v)}${lt1(L0, L1, "LT₁", 6, 4, 0.12)}${fino(R2.h, r1)}${fino(A.h, a1)}${seg(r1, a1, "var(--red)", 2.8)}
  ${pt(A.h, "a", -12, 4)}${pt(A.v, "a′", -14, -2)}${L(R1.h, "r", -2, -6)}${L(R1.v, "r′", -2, -6)}${pt(r1, "r′₁", 6, 4, "var(--pen)")}${pt(a1, "a′₁", 6, -2, "var(--red)")}${L(mid(r1, a1), "d", 6, 0, "var(--red)")}`, "cl76") + tx(10, 172, "r horizontal → LT₁ ⊥ r", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 7.7 Distancia entre dos rectas paralelas horizontales.
const s7 = (() => {
  const yt = 46, P = dP(yt), R1 = P([20, 24, 32]), R2 = P([160, 50, 32]), S1 = P([20, 66, 10]), S2 = P([160, 92, 10]), u = unit(R1.h, R2.h), [L0, L1] = LTperp(S2.h, u, 14), lo = [[0, yt], [10, yt]];
  const r1 = nueva(R2.h, R2.v, ...lo, L0, L1), s1 = nueva(S2.h, S2.v, ...lo, L0, L1);
  return dib("Distancia entre dos rectas paralelas: con un cambio de plano que las convierta en rectas de punta, ambas se proyectan como puntos y la distancia entre esos puntos es la buscada", clip(`${LT(yt, 8, 252)}${seg(R1.h, R2.h, "var(--pen)", 2.2)}${seg(R1.v, R2.v, "var(--pen)", 2.2)}${seg(S1.h, S2.h, "var(--inf)", 2.2)}${seg(S1.v, S2.v, "var(--inf)", 2.2)}${lt1(L0, L1, "LT₁", 6, 4, 0.12)}${fino(R2.h, r1)}${fino(S2.h, s1)}${seg(r1, s1, "var(--red)", 2.8)}
  ${L(R1.h, "r", -2, -6, "var(--pen)")}${L(S1.h, "s", -2, -6, "var(--inf)")}${L(R2.v, "r′", 6, 4, "var(--pen)")}${L(S2.v, "s′", 6, 4, "var(--inf)")}${pt(r1, "r′₁", 6, -2, "var(--pen)")}${pt(s1, "s′₁", -8, 10, "var(--inf)", 11)}${L(mid(r1, s1), "d", 6, 4, "var(--red)")}`, "cl77") + tx(10, 172, "r ∥ s horizontales", { s: 10.5, b: 1, a: "start", c: "var(--muted)" }));
})();

// 7.8 Distancia entre dos rectas que se cruzan (r horizontal).
const s8 = (() => {
  const yt = 46, P = dP(yt), R1 = P([20, 30, 30]), R2 = P([160, 56, 30]), S1 = P([30, 110, 4]), S2 = P([150, 14, 40]), u = unit(R1.h, R2.h), [L0, L1] = LTperp(R2.h, u, 22), lo = [[0, yt], [10, yt]];
  const r1 = nueva(R2.h, R2.v, ...lo, L0, L1), s1a = nueva(S1.h, S1.v, ...lo, L0, L1), s1b = nueva(S2.h, S2.v, ...lo, L0, L1), F = pie(r1, s1a, s1b);
  return dib("Distancia entre dos rectas que se cruzan: si r se convierte en recta de punta con un cambio de plano, la mínima distancia es la perpendicular desde su proyección puntual a la nueva proyección de s", clip(`${LT(yt, 8, 252)}${seg(R1.h, R2.h, "var(--pen)", 2.2)}${seg(R1.v, R2.v, "var(--pen)", 2.2)}${seg(S1.h, S2.h, "var(--inf)", 2.2)}${seg(S1.v, S2.v, "var(--inf)", 2.2)}${lt1(L0, L1, "LT₁", 6, 4, 0.12)}${fino(R2.h, r1)}${fino(S1.h, s1a)}${fino(S2.h, s1b)}${recta(s1a, s1b, 20, "var(--inf)", 2.2)}${seg(r1, F, "var(--red)", 2.8)}${R3(F, r1, s1b, 6)}
  ${L(R1.h, "r", -2, -6, "var(--pen)")}${L(S1.h, "s", -12, 4, "var(--inf)")}${L(R1.v, "r′", -2, -6, "var(--pen)")}${L(S1.v, "s′", -2, -6, "var(--inf)")}${pt(r1, "r′₁", 6, -2, "var(--pen)")}${L(s1b, "s′₁", -8, 4, "var(--inf)", "end")}${L(mid(r1, F), "d", 6, 0, "var(--red)")}`, "cl78") + tx(10, 172, "mínima distancia en VM", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 7.9 Ángulo de dos rectas que se cortan, por abatimiento.
const s9 = (() => {
  const yt = 26, P = dP(yt), V = P([120, 94, 18]), R = P([20, 58, 0]), S = P([240, 68, 0]), H = pie(V.h, R.h, S.h), Vab = add(H, mul(unit(V.h, H), Math.hypot(dist(V.h, H), 18)));
  return dib("Ángulo de dos rectas r y s que se cortan en V: se abate el plano que forman tomando como charnela la recta que une sus trazas horizontales; el ángulo entre (r) y (s) es el verdadero", clip(`${LT(yt, 8, 252)}${seg(V.h, R.h, "var(--pen)", 2.2)}${seg(V.h, S.h, "var(--inf)", 2.2)}${seg(V.v, R.v, "var(--pen)", 2.2)}${seg(V.v, S.v, "var(--inf)", 2.2)}${fino(V.h, V.v)}${fino(R.h, R.v)}${fino(S.h, S.v)}${recta(R.h, S.h, 16, "var(--leaf)", 1.6)}${seg(V.h, Vab, "var(--muted)", 1, dash)}${seg(R.h, Vab, "var(--red)", 2.4)}${seg(S.h, Vab, "var(--red)", 2.4)}${arcoC(Vab, R.h, S.h, 14)}
  ${pt(V.h, "v", 6, 6)}${pt(V.v, "v′", 6, 8)}${pt(R.h, "", 0, 0)}${pt(S.h, "", 0, 0)}${pt(Vab, "(V)", 6, -6, "var(--red)")}${L(mid(V.h, R.h), "r", -6, 10, "var(--pen)", "end")}${L(mid(V.h, S.h), "s", 6, 10, "var(--inf)")}${L(Vab, "θ", 0, 26, "var(--red)", "middle")}`, "cl79") + tx(10, 172, "charnela: recta de trazas", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 7.10 Recta de máxima pendiente y ángulo del plano con el PH.
const s10 = (() => {
  const yt = 70, Q = planoD(220, 0.45, 1, 0.75, yt), x = 96, o = 12, c = Q.cota(x, o), A = dP(yt)([x, o, c]), Hh = pie(A.h, Q.N, Q.hTr(0)), Hv = [Hh[0], yt], A0 = add(A.h, mul(perp(unit(A.h, Hh)), -c));
  return dib("Recta de máxima pendiente de un plano: su proyección horizontal es perpendicular a la traza h; con el triángulo formado por esa proyección y la cota se obtiene el ángulo φ del plano con el PH", clip(`${LT(yt, 8, 252)}${tr(Q, 10, 120)}${fino(A.h, A.v)}${fino(Hh, Hv)}${seg(A.h, Hh, "var(--red)", 2.4)}${seg(A.v, Hv, "var(--red)", 2.4)}${R3(Hh, A.h, Q.N, 6)}${seg(A.h, A0, "var(--leaf)", 1.6)}${seg(Hh, A0, "var(--leaf)", 1.6)}${arcoC(Hh, A0, A.h, 16)}
  ${pt(A.h, "a", 6, 2)}${pt(A.v, "a′", -14, -2)}${pt(Hh, "", 0, 0)}${pt(Hv, "", 0, 0)}${L(Hh, "φ", -24, -4, "var(--red)")}${pt(A0, "", 0, 0, "var(--leaf)")}${L(Q.hTr(30), "h", 0, -8, "var(--pen)")}${L(Q.vTr(150), "v", 8, 4, "var(--pen)")}${pt(Q.N, "N", 2, -8)}`, "cl710") + tx(250, 172, "máxima pendiente ⊥ h", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 7.11 Ángulo de una recta con un plano (perspectiva).
const s11 = (() => {
  const P = caba([90, 132], 0.6, 210, 1), I = [10, 30, 0], A = [-20, 110, 70], F = [A[0], A[1], 0];
  const pl = [[-60, -20, 0], [-60, 150, 0], [70, 150, 0], [70, -20, 0]];
  return dib("Ángulo de una recta con un plano: es el que forma con su proyección ortogonal sobre el plano; se obtiene como complemento del ángulo que forma la recta con la perpendicular al plano trazada por uno de sus puntos", clip(`${poli(pl.map(P), "var(--pen)", 1.2, "var(--pen)", 0.1)}${seg(P(I), P(A), "var(--red)", 2.6)}${recta(P(I), P(A), 20, "var(--red)", 1, dash)}${seg(P(A), P(F), "var(--leaf)", 2.2)}${seg(P(I), P(F), "var(--muted)", 1.6, dash)}${R3(P(F), P(A), P(I), 7)}${arcoC(P(I), P(F), P(A), 22)}${arcoC(P(A), P(I), P(F), 18, "var(--leaf)")}
  ${pt(P(I), "I", -12, 6)}${pt(P(A), "A", 6, -4)}${pt(P(F), "F", 6, 10)}${L(P(I), "α", 26, -8, "var(--red)")}${L(P(A), "β", -6, 26, "var(--leaf)", "end")}${L(P([60, 140, 0]), "π", 0, 0, "var(--pen)")}`, "cl711") + tx(250, 22, "α = 90° − β", { s: 11, b: 1, a: "end", c: "var(--red)" }));
})();

// 7.12 Ángulo de dos planos (perspectiva): sección perpendicular a la arista.
const s12 = (() => {
  const P = caba([100, 140], 0.55, 210, 1), th = G.rad(58), y0 = 0, y1 = 130, ys = 70, k = 80, ex = [-k * Math.cos(th), 0, k * Math.sin(th)];
  const P1 = [[0, y0, 0], [0, y1, 0], [90, y1, 0], [90, y0, 0]], P2 = [[0, y0, 0], [0, y1, 0], add3(ex, [0, y1, 0]), add3(ex, [0, y0, 0])];
  const O = [0, ys, 0], X1 = [60, ys, 0], X2 = add3(mul3(ex, 0.75), [0, ys, 0]);
  return dib("Ángulo de dos planos: se corta con un plano perpendicular a su recta de intersección; las dos rectas de la sección forman el ángulo rectilíneo del diedro", clip(`${poli(P1.map(P), "var(--pen)", 1.2, "var(--pen)", 0.1)}${poli(P2.map(P), "var(--inf)", 1.2, "var(--inf)", 0.12)}${seg(P([0, y0 - 10, 0]), P([0, y1 + 10, 0]), "var(--ink)", 2.4)}${poli([P(O), P(X1), P(X2)], "var(--red)", 1, "var(--red)", 0.12)}${seg(P(O), P(X1), "var(--red)", 2.6)}${seg(P(O), P(X2), "var(--red)", 2.6)}${arcoC(P(O), P(X1), P(X2), 18)}
  ${L(P(O), "θ", 14, -16, "var(--red)")}${L(P([0, y1 + 10, 0]), "i", 4, 4)}${L(P([80, 110, 0]), "π₁", -6, -4, "var(--pen)", "end")}${L(P(add3(ex, [0, y1 - 14, 0])), "π₂", -10, 14, "var(--inf)", "end")}`, "cl712") + tx(10, 22, "sección ⊥ a la arista i", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
  function add3(a, b) { return a.map((v, i) => v + b[i]); }
  function mul3(a, k) { return a.map((v) => v * k); }
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema diédrico: distancias y ángulos",
  minutos: 120,
  objetivos: [
    "Aplicar el teorema del ángulo recto y las condiciones de perpendicularidad entre recta y plano",
    "Trazar planos perpendiculares a una recta y rectas perpendiculares a un plano",
    "Hallar distancias entre puntos, rectas y planos en verdadera magnitud",
    "Determinar el ángulo de dos rectas, de una recta y un plano y de dos planos",
    "Usar la recta de máxima pendiente para medir la inclinación de un plano",
    "Elegir entre abatimientos, giros y cambios de plano según el problema",
  ],
  claves: ["perpendicularidad", "teorema del ángulo recto", "distancia", "mínima distancia", "rectas que se cruzan", "ángulo de dos planos", "diedro", "recta de máxima pendiente", "complemento", "verdadera magnitud"],
  lectura: {
    titulo: "Medir lo que no se ve de frente",
    html: `<p>¿Qué separación queda entre dos tuberías que se cruzan sin tocarse en el techo de un garaje? ¿Qué ángulo forman dos faldones de un tejado? ¿A qué distancia del suelo inclinado de una rampa pasa una viga? Son preguntas de ingeniería muy reales, y ninguna se puede contestar midiendo directamente en una planta o un alzado: las rectas y los planos implicados casi nunca están en posición paralela a los planos de proyección.</p>
    <p>En el tema anterior aprendiste a «poner de frente» rectas y planos con abatimientos, giros y cambios de plano. Ahora vas a usar esas herramientas para <b>medir</b>. Todos los problemas siguen la misma lógica: convertir la distancia o el ángulo pedido en un segmento o un ángulo que esté contenido en un plano paralelo a uno de proyección, y medirlo allí.</p>
    <p>La clave es la <b>perpendicularidad</b>: la distancia entre dos elementos se mide siempre sobre su perpendicular común, y los ángulos entre planos se miden en un corte perpendicular a su arista. Por eso empezaremos por saber trazar perpendiculares en diédrico.</p>`,
  },
  pregunta: {
    texto: "Dos barras rectas se cruzan en el espacio sin tocarse. ¿Hay un único segmento más corto que las una? ¿Cómo es ese segmento respecto de las barras?",
    respuesta: "Sí: es la <mark>perpendicular común</mark> a ambas rectas, y su longitud es la mínima distancia. En diédrico se obtiene viendo una de las rectas como un punto (recta de punta), porque entonces la perpendicular común aparece en verdadera magnitud.",
  },
  bloques: [
    {
      html: `<h3>7.1 El teorema del ángulo recto</h3><p>En general, un ángulo no se proyecta con su valor real. Pero hay un caso muy útil: <b>si un ángulo recto tiene uno de sus lados paralelo a un plano de proyección (y el otro no es perpendicular a ese plano), se proyecta sobre él como un ángulo recto</b>.</p><p>La razón es sencilla: si AB es paralelo al PH y BC es perpendicular a AB, entonces AB es perpendicular al plano que contiene a BC y a la proyectante de B; ese plano corta al PH en bc, que por tanto es perpendicular a ab.</p><p>Consecuencias que usarás en todo el tema:</p><ul><li>Si una recta es perpendicular a un plano, es perpendicular a todas sus rectas, en particular a sus <b>horizontales</b> (paralelas al PH) y a sus <b>frontales</b> (paralelas al PV).</li><li>Como la traza h es una horizontal del plano, la proyección horizontal de la perpendicular es <b>perpendicular a h</b>. Como la traza v es una frontal, la proyección vertical es <b>perpendicular a v</b>.</li><li>Dos rectas que se cortan formando 90° solo se ven perpendiculares en una proyección si una de ellas es paralela a ese plano de proyección.</li></ul><p>Recíprocamente, que dos proyecciones se vean perpendiculares no garantiza que las rectas lo sean: hay que comprobar la posición de al menos una de ellas.</p>`,
      svg: s1,
      video: { id: "vN9C5Le9jDQ", titulo: "Perpendicularidad en sistema diédrico (primeros conceptos)", canal: "PDD Profesor de Dibujo", vistas: 131814, busqueda: "perpendicularidad sistema diédrico" },
    },
    {
      html: `<h3>7.2 Recta perpendicular a un plano</h3><p>Por el teorema anterior, una recta r es perpendicular a un plano α si y solo si:</p><ul><li>su proyección horizontal r es <b>perpendicular a la traza horizontal</b> h del plano, y</li><li>su proyección vertical r′ es <b>perpendicular a la traza vertical</b> v.</li></ul><p>Para trazar por un punto A la perpendicular a un plano dado por sus trazas basta, por tanto, con dibujar por a la perpendicular a h y por a′ la perpendicular a v.</p><p>Si el plano viene dado por otros elementos (tres puntos, dos rectas), se dibujan una <b>horizontal</b> y una <b>frontal</b> del plano y se trazan las perpendiculares a ellas: la proyección horizontal de r, perpendicular a la proyección horizontal de la horizontal; la vertical de r, perpendicular a la vertical de la frontal.</p><p>Casos particulares: si el plano es paralelo a la LT, sus trazas son paralelas a la LT y las proyecciones de la perpendicular son perpendiculares a la LT; la recta es de perfil y hace falta una tercera proyección (o un cambio de plano) para resolver el problema. Si el plano es proyectante, la perpendicular es paralela a un plano de proyección.</p><p>El punto en que la perpendicular corta al plano es el <b>pie</b> de la perpendicular, y su cálculo es el paso central para medir distancias de un punto a un plano.</p>`,
      svg: s2,
    },
    {
      html: `<h3>7.3 Plano perpendicular a una recta</h3><p>Es el problema inverso: dada una recta r y un punto A, trazar el plano α que pasa por A y es perpendicular a r. Sabemos que las trazas de α tienen que ser <b>h ⊥ r</b> y <b>v ⊥ r′</b>, pero falta situarlas. Se hace con una recta auxiliar del plano que pase por A:</p><ol><li>Por A se traza una <b>horizontal</b> del plano buscado: su proyección horizontal pasa por a y es perpendicular a r; su proyección vertical pasa por a′ y es paralela a la LT.</li><li>Se halla la <b>traza vertical</b> de esa horizontal: el punto donde la proyección horizontal corta a la LT, llevado a la altura de a′.</li><li>Por ese punto se traza <b>v perpendicular a r′</b>. Donde v corta a la LT está N.</li><li>Por N se traza <b>h perpendicular a r</b>.</li></ol><p>También se puede usar una <b>frontal</b> por A (proyección vertical perpendicular a r′, horizontal paralela a la LT) y hallar su traza horizontal, que pertenece a h.</p><p>Este trazado aparece en muchos problemas: lugar geométrico de los puntos que equidistan de dos dados (plano mediador del segmento), distancia de un punto a una recta, o planos de simetría de una pieza.</p>`,
      svg: s3,
      video: { id: "x-B1GsLUoW8", titulo: "Plano perpendicular a una recta conteniendo un punto", canal: "PDD Profesor de Dibujo", vistas: 197043, busqueda: "plano perpendicular a una recta diédrico" },
    },
    {
      html: `<h3>7.4 Distancia de un punto a un plano</h3><p>La distancia de un punto A a un plano α es la longitud del segmento de perpendicular comprendido entre A y el plano. Procedimiento general:</p><ol><li>Por A se traza la <b>recta r perpendicular</b> al plano (r ⊥ h, r′ ⊥ v).</li><li>Se halla el <b>punto de intersección I</b> de r con α. Para ello se usa un plano auxiliar que contenga a r, normalmente <b>proyectante</b> (su traza vertical coincide con r′). La intersección de ese plano auxiliar con α es una recta cuyas proyecciones se obtienen uniendo los puntos de corte de las trazas homónimas. Donde esa recta corta a r está I.</li><li>Se obtiene la <b>verdadera magnitud</b> del segmento AI con un triángulo de desnivel, un giro o un abatimiento.</li></ol><p>Atajo con cambio de plano: si se toma una nueva LT perpendicular a h, el plano se ve de canto y la perpendicular desde la nueva proyección de A hasta la traza v₁ es directamente la distancia en verdadera magnitud.</p><p>Si el plano es proyectante, el problema es inmediato: la distancia se mide en la proyección en la que el plano se ve como una recta. Y si es horizontal o frontal, la distancia es una diferencia de cotas o de alejamientos.</p>`,
      svg: s4,
      video: { id: "pgQVnE9eJUE", titulo: "Distancia entre un punto y un plano (sistema diédrico)", canal: "PDD Profesor de Dibujo", vistas: 278771, busqueda: "distancia de un punto a un plano diédrico" },
    },
    {
      html: `<h3>7.5 Distancia entre dos planos paralelos</h3><p>Dos planos son <b>paralelos</b> si sus trazas homónimas son paralelas (h₁ ∥ h₂ y v₁ ∥ v₂). La distancia entre ellos es la longitud del segmento de una perpendicular común comprendido entre ambos.</p><p>Hay dos procedimientos:</p><ul><li><b>Perpendicular común</b>: por un punto cualquiera se traza la perpendicular a los dos planos (es la misma para ambos), se hallan sus intersecciones I₁ e I₂ con cada plano y se obtiene la VM de I₁I₂.</li><li><b>Cambio de plano</b> (más rápido): se toma una nueva LT perpendicular a las trazas horizontales. En el nuevo sistema ambos planos son proyectantes y se ven de canto como dos rectas paralelas. La distancia entre esas dos rectas es la distancia entre los planos, en verdadera magnitud.</li></ul><p>Para dibujar las nuevas trazas basta con un punto de cada plano: los puntos de corte de h₁ y h₂ con la nueva LT y la nueva proyección de un punto de cada traza vertical (cuya cota se conoce).</p><p>Este problema aparece al calcular el <b>espesor</b> de una losa inclinada o de una capa geológica limitada por dos planos paralelos.</p>`,
      svg: s5,
    },
    {
      html: `<h3>7.6 Distancia de un punto a una recta</h3><p>Es la longitud de la perpendicular trazada desde el punto A hasta la recta r. Tres caminos posibles:</p><ol><li><b>Plano perpendicular</b>: por A se traza el plano perpendicular a r (apartado 7.3), se halla su intersección I con r y se obtiene la VM de AI.</li><li><b>Abatimiento</b>: A y r determinan un plano; al abatirlo, (A) y (r) quedan en VM y la distancia se traza directamente como una perpendicular.</li><li><b>Cambios de plano</b>: se convierte r en <b>recta de punta</b> (perpendicular al nuevo plano vertical). Entonces r se proyecta como un punto, y la distancia de la nueva proyección de A a ese punto es la distancia buscada en VM.</li></ol><p>Si la recta es <b>horizontal</b>, basta un cambio de plano: LT₁ perpendicular a r. Si es oblicua, hacen falta dos: el primero (LT₁ ∥ r) la convierte en frontal y el segundo (LT₂ ⊥ r′₁) en recta de punta.</p><p>El pie de la perpendicular se puede devolver a las proyecciones originales deshaciendo los cambios de plano, si el enunciado pide también dónde está.</p>`,
      svg: s6,
      video: { id: "xqam6c4i5us", titulo: "Distancia entre un punto y una recta (sistema diédrico)", canal: "PDD Profesor de Dibujo", vistas: 282456, busqueda: "distancia punto recta diédrico" },
    },
    {
      html: `<h3>7.7 Distancia entre dos rectas paralelas</h3><p>Dos rectas son <b>paralelas</b> si sus proyecciones homónimas son paralelas (salvo rectas de perfil, que requieren una comprobación adicional). Su distancia es la de un punto cualquiera de una a la otra recta, así que se puede resolver como el apartado anterior.</p><p>El procedimiento más claro es convertir ambas rectas en <b>rectas de punta</b> a la vez (los mismos cambios sirven para las dos, porque son paralelas). En el último sistema, cada recta se ve como un punto y la distancia entre esos dos puntos es la distancia entre las rectas.</p><p>Otra opción es abatir el plano que forman (dos paralelas determinan un plano): en el abatimiento ambas se ven en VM y la distancia es la de dos paralelas en el papel.</p><p>Observa que, en la proyección horizontal, la separación entre r y s <b>no</b> es la distancia real salvo que ambas sean horizontales y estén a la misma cota. Es un error frecuente medirla directamente en planta.</p>`,
      svg: s7,
    },
    {
      html: `<h3>7.8 Mínima distancia entre dos rectas que se cruzan</h3><p>Dos rectas <b>se cruzan</b> cuando no son paralelas ni se cortan. Entre ellas existe una única <b>perpendicular común</b>, y su longitud es la mínima distancia. Procedimientos:</p><ul><li><b>Cambios de plano</b>: se convierte una de las rectas, r, en recta de punta (uno o dos cambios). En el último sistema r es un punto y la otra recta s es una recta cualquiera. La perpendicular desde el punto r hasta s está en VM y es la mínima distancia. Deshaciendo los cambios se obtienen las proyecciones de la perpendicular común.</li><li><b>Plano paralelo</b>: por s se traza un plano paralelo a r; la distancia de cualquier punto de r a ese plano es la mínima distancia (se resuelve como en 7.4).</li></ul><p>Si una de las rectas es horizontal o frontal, basta un único cambio de plano. Si ambas son oblicuas, se hace primero LT₁ ∥ r para verla frontal, y luego LT₂ ⊥ r′₁ para verla de punta.</p><p>Aplicación: separación entre tuberías, cables o barras de una estructura que se cruzan, o comprobación de interferencias en el diseño de piezas.</p>`,
      svg: s8,
      video: { id: "q4ZvEcGEqn4", titulo: "Distancia entre dos rectas que se cruzan sin cortarse", canal: "PDD Profesor de Dibujo", vistas: 164560, busqueda: "distancia entre dos rectas que se cruzan diédrico" },
    },
    {
      html: `<h3>7.9 Ángulo de dos rectas</h3><p>El ángulo de dos rectas que <b>se cortan</b> es el menor de los ángulos que forman en el plano que determinan. Para verlo en VM se <b>abate</b> ese plano:</p><ol><li>Se hallan las trazas horizontales de r y de s. La recta que las une es la traza h del plano de ambas: será la <b>charnela</b>.</li><li>Se abate el punto de corte V con el triángulo de abatimiento (cota de V).</li><li>Las rectas abatidas (r) y (s) unen (V) con las trazas horizontales, que no se mueven por estar en la charnela.</li><li>El ángulo entre (r) y (s) es el ángulo pedido.</li></ol><p>Si las trazas caen fuera del papel, se usa como charnela una <b>horizontal</b> cualquiera del plano y se abate sobre el plano horizontal que la contiene.</p><p>Si las rectas <b>se cruzan</b>, su ángulo es el que forman dos paralelas a ellas trazadas por un mismo punto: se traza por un punto de r una paralela a s y se resuelve como antes.</p><p>Los ángulos de una recta con los planos de proyección se obtienen con los triángulos de desnivel del tema anterior: con la diferencia de cotas, el ángulo con el PH; con la diferencia de alejamientos, el ángulo con el PV.</p>`,
      svg: s9,
      video: { id: "llI1-Z26mlI", titulo: "Ángulos formados por dos rectas oblicuas que se cortan", canal: "PDD Profesor de Dibujo", vistas: 93804, busqueda: "ángulo de dos rectas diédrico" },
    },
    {
      html: `<h3>7.10 Ángulos de un plano con los planos de proyección</h3><p>La <b>recta de máxima pendiente</b> de un plano es la recta del plano perpendicular a su traza h (y a todas sus horizontales). Es la línea por la que caería una gota de agua. Su proyección horizontal es perpendicular a h y el ángulo que forma con el PH es el <b>ángulo φ del plano con el PH</b>.</p><p>Procedimiento:</p><ol><li>Por un punto a del plano se traza la perpendicular a h; su pie H está en la traza (cota cero).</li><li>Se dibuja la proyección vertical (H′ en la LT, A′ con su cota).</li><li>Con el triángulo de desnivel (proyección aH y cota de A) se obtiene φ.</li></ol><p>Análogamente, la <b>recta de máxima inclinación</b> es la perpendicular a la traza v; su proyección vertical es perpendicular a v y su ángulo con el PV es el <b>ángulo ψ del plano con el PV</b>.</p><p>Un plano queda completamente definido por su recta de máxima pendiente: basta trazar h perpendicular a su proyección horizontal por su traza horizontal. Por eso en topografía y geología se da un plano por su <b>dirección</b> (la de h) y su <b>buzamiento</b> (el ángulo φ).</p><p>Se cumple siempre que φ + ψ ≥ 90°, con igualdad cuando el plano es paralelo a la LT.</p>`,
      svg: s10,
    },
    {
      html: `<h3>7.11 Ángulo de una recta con un plano</h3><p>El ángulo α de una recta r con un plano es el que forma r con su <b>proyección ortogonal</b> sobre el plano. Calcular esa proyección es laborioso, así que se usa un camino indirecto:</p><ol><li>Por un punto A de la recta se traza la <b>perpendicular p</b> al plano.</li><li>Se halla el ángulo β entre r y p (dos rectas que se cortan en A), abatiendo el plano que forman.</li><li>El ángulo pedido es el <b>complementario</b>: α = 90° − β.</li></ol><p>El triángulo AIF del dibujo (I, punto de corte de la recta con el plano; F, pie de la perpendicular) es rectángulo en F, y por eso sus ángulos agudos suman 90°.</p><p>Casos particulares: si el plano es el PH, el ángulo es el de la recta con el PH (triángulo de desnivel). Si el plano es proyectante, se ve de canto y el ángulo se mide en el cambio de plano adecuado. Si la recta es perpendicular al plano, α = 90°; si es paralela, α = 0°.</p>`,
      svg: s11,
    },
    {
      html: `<h3>7.12 Ángulo de dos planos</h3><p>El ángulo de dos planos (ángulo <b>diedro</b>) se mide en un plano <b>perpendicular a su recta de intersección i</b>: las rectas en que ese plano corta a los dos dados forman el <b>ángulo rectilíneo</b> del diedro. Procedimientos:</p><ul><li><b>Plano perpendicular a la arista</b>: se halla la intersección i de los dos planos; se traza un plano perpendicular a i, se hallan sus intersecciones con ambos planos y se abate para ver el ángulo.</li><li><b>Perpendiculares por un punto</b> (más rápido): desde un punto cualquiera se trazan las perpendiculares a los dos planos; el ángulo que forman entre sí es el <b>suplementario</b> del diedro (o igual a él, según cuál de los dos ángulos se mida). Se obtiene abatiendo el plano de las dos perpendiculares.</li><li><b>Cambios de plano</b>: si se convierte i en recta de punta, ambos planos se ven de canto y el ángulo se mide directamente.</li></ul><table class="tb"><thead><tr><th>Ángulo</th><th>Método más directo</th></tr></thead><tbody><tr><td>Dos rectas que se cortan</td><td>Abatir su plano</td></tr><tr><td>Recta y plano</td><td>Complemento del ángulo con la perpendicular</td></tr><tr><td>Dos planos</td><td>Suplemento del ángulo de sus perpendiculares</td></tr></tbody></table>`,
      svg: s12,
      video: { id: "iH-Yj4yaJQc", titulo: "Ángulo entre dos planos en sistema diédrico", canal: "Dibujo técnico", vistas: 19418, busqueda: "ángulo entre dos planos diédrico" },
    },
  ],
  ejemplos: [
    { enunciado: "Un plano tiene la traza h a 35° con la LT. ¿Qué ángulo forma con la LT la proyección horizontal de cualquier perpendicular al plano?", pasos: ["La proyección horizontal de la perpendicular es perpendicular a h.", "90° − 35° = 55° con la LT (o 125°, según el sentido)."], resultado: "55° con la LT." },
    { enunciado: "Un punto A está a 40 mm de un plano horizontal de cota 15 mm, por encima. ¿Cuál es su cota?", pasos: ["En un plano horizontal la distancia es la diferencia de cotas.", "Cota de A = 15 + 40 = 55 mm."], resultado: "55 mm." },
    { enunciado: "Dos rectas horizontales paralelas están a cotas 20 y 50 mm y en planta su separación perpendicular es 40 mm. ¿Cuál es su distancia real?", pasos: ["Con LT₁ perpendicular a ellas, se ven como dos puntos.", "Separación horizontal 40 mm, vertical 30 mm.", "d = √(40² + 30²) = 50 mm."], resultado: "50 mm." },
    { enunciado: "Un plano forma φ = 30° con el PH. Un punto del plano tiene cota 24 mm. ¿A qué distancia en planta está su proyección de la traza h?", pasos: ["Recta de máxima pendiente: tg φ = cota / distancia en planta.", "distancia = 24 / tg 30° ≈ 41,6 mm."], resultado: "≈ 41,6 mm." },
    { enunciado: "El ángulo entre una recta y la perpendicular a un plano trazada por uno de sus puntos es 65°. ¿Qué ángulo forma la recta con el plano?", pasos: ["α = 90° − β.", "α = 90° − 65° = 25°."], resultado: "25°." },
    { enunciado: "Las perpendiculares a dos planos trazadas por un punto forman 110°. ¿Qué ángulos forman los planos?", pasos: ["El diedro es suplementario del ángulo de las normales o igual a él.", "Los planos forman 70° y 110° (dos diedros adyacentes)."], resultado: "70° (ángulo agudo) y 110°." },
  ],
  errores: [
    "Creer que dos rectas son perpendiculares porque sus proyecciones horizontales lo son, sin comprobar que una sea horizontal.",
    "Trazar la perpendicular a un plano con r′ perpendicular a h o r perpendicular a v (cruzar las trazas).",
    "Medir la distancia de un punto a un plano en una proyección sin hallar la VM del segmento.",
    "Medir en planta la separación entre dos paralelas como si fuera su distancia real.",
    "Olvidar que el ángulo recta-plano es el complemento del ángulo con la perpendicular.",
    "Dar como ángulo de dos planos el de sus trazas horizontales, que solo coincide en casos muy particulares.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Enuncia el teorema del ángulo recto.", sol: "Un ángulo recto con un lado paralelo a un plano de proyección (y el otro no perpendicular a él) se proyecta sobre ese plano como un ángulo recto." },
    { nivel: "básico", q: "¿Qué condiciones cumplen las proyecciones de una recta perpendicular a un plano?", sol: "r ⊥ h y r′ ⊥ v." },
    { nivel: "básico", q: "Traza por un punto A(30, 20, 25) la perpendicular a un plano cuyas trazas forman 45° y 60° con la LT.", sol: "Por a, perpendicular a h; por a′, perpendicular a v." },
    { nivel: "básico", q: "¿Cuál es la distancia de un punto de cota 42 mm al PH? ¿Y al plano horizontal de cota 10 mm?", sol: "42 mm y 32 mm." },
    { nivel: "básico", q: "Define recta de máxima pendiente de un plano.", sol: "Recta del plano perpendicular a su traza horizontal; da el ángulo del plano con el PH." },
    { nivel: "básico", q: "¿Cómo se reconoce en diédrico que dos planos son paralelos?", sol: "Sus trazas homónimas son paralelas." },
    { nivel: "básico", q: "¿Qué es la mínima distancia entre dos rectas que se cruzan?", sol: "La longitud de su perpendicular común." },
    { nivel: "básico", q: "¿Qué ángulo forma una recta con un plano si es perpendicular a él? ¿Y si es paralela?", sol: "90° y 0°." },
    { nivel: "básico", q: "Un punto dista 0 mm de un plano. ¿Qué significa?", sol: "Que pertenece al plano." },
    { nivel: "básico", q: "¿Cuántos cambios de plano hacen falta para ver como un punto una recta horizontal? ¿Y una oblicua?", sol: "Uno; dos." },
    { nivel: "básico", q: "Halla el ángulo de una recta con el PH si su proyección mide 60 mm y la diferencia de cotas es 35 mm.", sol: "tg α = 35/60 → α ≈ 30,3°." },
    { nivel: "básico", q: "¿Qué es el ángulo rectilíneo de un diedro?", sol: "El que forman las rectas de intersección de los dos planos con un plano perpendicular a su arista." },
    { nivel: "medio", q: "Traza el plano perpendicular a la recta r por el punto A usando una horizontal.", sol: "Horizontal por A (planta ⊥ r, alzado ∥ LT); su traza vertical V; v por V′ ⊥ r′; h por N ⊥ r." },
    { nivel: "medio", q: "Repite el ejercicio anterior usando una frontal del plano.", sol: "Frontal por A (alzado ⊥ r′, planta ∥ LT); su traza horizontal H; h por H ⊥ r; v por N ⊥ r′." },
    { nivel: "medio", q: "Halla la distancia de un punto a un plano oblicuo por el método general.", sol: "Perpendicular por A; intersección I con plano proyectante auxiliar; VM de AI con triángulo de desnivel." },
    { nivel: "medio", q: "Halla la distancia de un punto a un plano oblicuo con un cambio de plano.", sol: "LT₁ ⊥ h; el plano se ve de canto (v₁); la perpendicular desde a′₁ a v₁ es la distancia." },
    { nivel: "medio", q: "Halla la distancia entre dos planos paralelos de trazas dadas.", sol: "LT₁ ⊥ h₁; ambos de canto como paralelas; su distancia es la pedida." },
    { nivel: "medio", q: "Halla la distancia de un punto a una recta horizontal.", sol: "LT₁ ⊥ r: la recta se ve como un punto; distancia entre ese punto y a′₁." },
    { nivel: "medio", q: "Halla el ángulo que forman dos rectas que se cortan, abatiendo su plano.", sol: "Charnela = recta de trazas horizontales; abatir V; ángulo entre (V)H₁ y (V)H₂." },
    { nivel: "medio", q: "Dibuja la recta de máxima pendiente de un plano por un punto A del plano y halla φ.", sol: "Por a, perpendicular a h hasta H; alzado; triángulo (aH, cota) → φ." },
    { nivel: "medio", q: "Un plano tiene φ = 45°. ¿Cuánto mide en planta un segmento de máxima pendiente de 70 mm de VM?", sol: "70 · cos 45° ≈ 49,5 mm." },
    { nivel: "medio", q: "Halla el ángulo de una recta con un plano oblicuo.", sol: "Perpendicular al plano por un punto de la recta; ángulo β entre ambas por abatimiento; α = 90° − β." },
    { nivel: "avanzado", q: "Halla la mínima distancia entre dos rectas oblicuas que se cruzan y dibuja las proyecciones de la perpendicular común.", sol: "LT₁ ∥ r, LT₂ ⊥ r′₁; r es un punto; perpendicular a s₂; se deshacen los cambios para obtener los extremos en las proyecciones originales." },
    { nivel: "avanzado", q: "Halla el ángulo de dos planos oblicuos por el método de las perpendiculares.", sol: "Por un punto, perpendiculares p₁ y p₂ a ambos planos; abatir el plano que forman; el diedro es el suplementario (o igual) del ángulo medido." },
    { nivel: "avanzado", q: "Halla el lugar de los puntos que equidistan de A y B (plano mediador) en diédrico.", sol: "Punto medio M de AB; plano perpendicular a AB por M (horizontal o frontal auxiliar)." },
    { nivel: "avanzado", q: "Determina un punto de una recta r que diste 30 mm de un plano α.", sol: "Plano paralelo a α a 30 mm (en el cambio de plano, paralela a v₁ a 30 mm); su intersección con r es el punto (dos soluciones)." },
    { nivel: "avanzado", q: "Demuestra que el ángulo de los planos es suplementario del de sus perpendiculares por un punto.", sol: "En el plano perpendicular a la arista, las normales son perpendiculares a las rectas de sección; el cuadrilátero formado tiene dos ángulos rectos, así que los otros dos suman 180°." },
    { nivel: "avanzado", q: "Explica cómo hallar el espesor de una capa geológica limitada por dos planos paralelos de buzamiento 40°.", sol: "Cambio de plano con LT₁ perpendicular a la dirección (traza h): ambos planos de canto; la distancia perpendicular entre ellos es el espesor." },
    { nivel: "avanzado", q: "Halla el ángulo que forma un plano oblicuo con el PV.", sol: "Recta de máxima inclinación (proyección vertical ⊥ v); triángulo con la proyección vertical y el alejamiento: ψ." },
    { nivel: "avanzado", q: "¿Por qué φ + ψ ≥ 90° para cualquier plano oblicuo?", sol: "La normal n forma con la vertical el ángulo φ y con la perpendicular al PV el ángulo ψ. Sus cosenos directores cumplen cos²φ + cos²ψ ≤ 1, luego cos φ ≤ sen ψ = cos(90° − ψ) y φ ≥ 90° − ψ. La igualdad se da cuando n es perpendicular a la LT (plano paralelo a la LT)." },
  ],
  quiz: reparte([
    { q: "Un ángulo recto se proyecta como recto si…", o: ["siempre", "un lado es paralelo al plano de proyección", "ambos lados son oblicuos", "nunca"], a: 1, e: "Teorema del ángulo recto." },
    { q: "La proyección horizontal de una recta perpendicular a un plano es…", o: ["paralela a h", "perpendicular a h", "perpendicular a v", "paralela a la LT"], a: 1, e: "h es una horizontal del plano." },
    { q: "La proyección vertical de esa recta es…", o: ["perpendicular a v", "paralela a v", "perpendicular a h", "un punto"], a: 0, e: "v es una frontal del plano." },
    { q: "Para trazar el plano perpendicular a r por A se usa…", o: ["una horizontal o frontal por A", "la LT", "un giro", "el abatimiento de r"], a: 0, e: "Su traza da un punto de v o de h." },
    { q: "La distancia de un punto a un plano se mide…", o: ["en planta", "sobre la perpendicular al plano", "sobre la LT", "en el alzado"], a: 1, e: "En VM." },
    { q: "Con LT₁ ⊥ h, un plano oblicuo se ve…", o: ["en VM", "de canto", "como un punto", "igual"], a: 1, e: "Pasa a ser proyectante." },
    { q: "Dos planos son paralelos si…", o: ["sus trazas se cortan en la LT", "sus trazas homónimas son paralelas", "tienen el mismo N", "son perpendiculares"], a: 1, e: "Condición en diédrico." },
    { q: "Una recta horizontal se ve como un punto con LT₁…", o: ["paralela a ella", "perpendicular a ella", "a 45°", "por N"], a: 1, e: "Se convierte en recta de punta." },
    { q: "La mínima distancia entre dos rectas que se cruzan está en…", o: ["la LT", "su perpendicular común", "su plano", "la traza h"], a: 1, e: "Única." },
    { q: "Para medir el ángulo de dos rectas que se cortan se…", o: ["gira la LT", "abate su plano", "mide en planta", "suman sus ángulos con el PH"], a: 1, e: "En VM." },
    { q: "La charnela natural para abatir el plano de dos rectas es…", o: ["la LT", "la recta que une sus trazas horizontales", "una de las rectas", "la perpendicular"], a: 1, e: "Es la traza h del plano." },
    { q: "La recta de máxima pendiente es perpendicular a…", o: ["v", "h", "la LT", "la línea de máxima inclinación"], a: 1, e: "Da el ángulo con el PH." },
    { q: "El ángulo de un plano con el PV se obtiene con la…", o: ["recta de máxima pendiente", "recta de máxima inclinación", "LT", "horizontal"], a: 1, e: "Perpendicular a v." },
    { q: "Ángulo recta-plano si el ángulo con la perpendicular es 70°:", o: ["70°", "20°", "110°", "90°"], a: 1, e: "Complemento." },
    { q: "El ángulo de dos planos se mide en un plano…", o: ["horizontal", "perpendicular a su arista", "paralelo a la arista", "frontal"], a: 1, e: "Ángulo rectilíneo." },
    { q: "Las normales a dos planos forman 130°. El diedro agudo mide…", o: ["130°", "50°", "40°", "90°"], a: 1, e: "Suplemento." },
    { q: "Dos rectas paralelas horizontales a cotas 10 y 40 separadas 40 en planta distan…", o: ["40", "50", "30", "70"], a: 1, e: "√(40² + 30²)." },
    { q: "Un plano de buzamiento 30° y un punto de cota 15 a … de h en planta:", o: ["≈ 26 mm", "15 mm", "30 mm", "≈ 8,7 mm"], a: 0, e: "15 / tg 30°." },
    { q: "Para ver una recta oblicua como un punto hacen falta…", o: ["1 cambio", "2 cambios", "3 cambios", "0"], a: 1, e: "Frontal y después de punta." },
    { q: "El pie de la perpendicular de A a un plano es…", o: ["A", "la intersección de la perpendicular con el plano", "N", "la traza h"], a: 1, e: "Punto I." },
  ]),
  examen: reparte([
    { q: "r ⊥ α en diédrico exige…", o: ["r ⊥ h y r′ ⊥ v", "r ∥ h", "r′ ⊥ h", "r ⊥ LT"], a: 0, e: "Condición de perpendicularidad." },
    { q: "Con LT₁ ⊥ a dos rectas paralelas horizontales, estas se ven como…", o: ["dos puntos", "dos rectas", "una recta", "nada"], a: 0, e: "Rectas de punta." },
    { q: "La distancia entre planos paralelos se ve directamente…", o: ["en planta", "cuando ambos están de canto", "en el abatimiento", "en la LT"], a: 1, e: "Dos paralelas." },
    { q: "Ángulo recta-plano = 90° − …", o: ["el ángulo con la perpendicular al plano", "φ", "ψ", "el ángulo con h"], a: 0, e: "Triángulo rectángulo AIF." },
    { q: "La recta de máxima pendiente de un plano tiene la proyección horizontal…", o: ["paralela a h", "perpendicular a h", "paralela a v", "perpendicular a v"], a: 1, e: "Por definición." },
    { q: "Un plano con φ = 60° y un punto a 20 mm de h en planta: cota", o: ["≈ 34,6 mm", "10 mm", "20 mm", "≈ 11,5 mm"], a: 0, e: "20 · tg 60°." },
    { q: "Normales a dos planos a 80°: los planos forman…", o: ["80° y 100°", "10°", "170°", "solo 80°"], a: 0, e: "Igual o suplementario." },
    { q: "La intersección de una recta con un plano se halla con…", o: ["un plano auxiliar que contiene a la recta", "un giro", "la LT", "la recta de máxima pendiente"], a: 0, e: "Normalmente proyectante." },
  ]),
  feynman: ["Por qué la perpendicular a un plano tiene r ⊥ h y r′ ⊥ v", "Cómo se halla el pie de la perpendicular de un punto a un plano", "Por qué ver una recta como un punto facilita medir distancias", "Qué es la recta de máxima pendiente y para qué sirve", "Por qué el ángulo de dos planos se mide en un corte perpendicular a la arista"],
  glosario: [
    ["Teorema del ángulo recto", "Un ángulo recto con un lado paralelo a un plano se proyecta en él como recto."],
    ["Perpendicular a un plano", "Recta perpendicular a todas las rectas del plano; en diédrico r ⊥ h y r′ ⊥ v."],
    ["Pie de la perpendicular", "Punto en que la perpendicular corta al plano."],
    ["Horizontal de un plano", "Recta del plano paralela al PH; su proyección horizontal es paralela a h."],
    ["Frontal de un plano", "Recta del plano paralela al PV; su proyección vertical es paralela a v."],
    ["Distancia punto-plano", "Longitud del segmento de perpendicular entre el punto y el plano."],
    ["Rectas que se cruzan", "Rectas no paralelas que no se cortan."],
    ["Perpendicular común", "Única recta que corta perpendicularmente a dos rectas que se cruzan."],
    ["Recta de punta", "Recta perpendicular al PV; su proyección vertical es un punto."],
    ["Recta de máxima pendiente", "Recta del plano perpendicular a h; da el ángulo con el PH."],
    ["Recta de máxima inclinación", "Recta del plano perpendicular a v; da el ángulo con el PV."],
    ["Diedro", "Región del espacio limitada por dos semiplanos con una arista común."],
    ["Ángulo rectilíneo", "Ángulo de las rectas de sección de un diedro con un plano perpendicular a la arista."],
    ["Buzamiento", "Ángulo de un plano geológico con la horizontal."],
  ],
  situacion: {
    titulo: "Instalaciones que no chocan",
    reto: "En el techo de un aparcamiento pasan dos tuberías rectas que se cruzan y un conducto de ventilación inclinado. La normativa exige al menos 10 cm de separación entre ellas. Vuestro grupo debe comprobar gráficamente si se cumple.",
    pasos: [
      "Representad en diédrico, a escala 1:20, las dos tuberías (rectas que se cruzan) y el plano de la losa inclinada.",
      "Hallad la mínima distancia entre las tuberías con dos cambios de plano.",
      "Hallad la distancia de un punto crítico del conducto a la losa con el método del plano auxiliar.",
      "Comprobad uno de los resultados con un segundo método.",
      "Redactad un informe breve: ¿cumple la instalación? ¿qué habría que mover?",
    ],
    producto: "Lámina A3 con las construcciones y un informe técnico de una página.",
    evaluacion: [
      "Traza correctamente perpendiculares y cambios de plano.",
      "Obtiene las distancias en verdadera magnitud.",
      "Comprueba con un segundo método.",
      "Interpreta los resultados con criterio técnico.",
    ],
  },
  figura: fig("Medir en diédrico", "Resumen: perpendicularidad, distancias y ángulos", [
    ["Perpendicular", ["r ⊥ h, r′ ⊥ v", "teorema ángulo recto", "plano ⊥ recta", "horizontal por A"], "var(--pen)"],
    ["Distancias", ["punto-plano: pie I", "planos ∥: de canto", "recta de punta", "perpendicular común"], "var(--red)"],
    ["Ángulos", ["rectas: abatir", "recta-plano: 90° − β", "planos: sección ⊥", "normales: suplemento"], "var(--leaf)"],
    ["Inclinación", ["máx. pendiente ⊥ h", "φ con el PH", "máx. inclinación ⊥ v", "ψ con el PV"], "var(--inf)"],
  ]),
  video: { id: "qYJ6doibFwU", titulo: "Distancia entre dos rectas paralelas (sistema diédrico)", canal: "PDD Profesor de Dibujo", vistas: 185662, busqueda: "distancia entre dos rectas paralelas diédrico" },
  mapa: mapa("DISTANCIAS Y ÁNGULOS", "var(--bac)", [
    ["Perpendicularidad", "r ⊥ h · r′ ⊥ v", "var(--pen)"],
    ["Distancias", "pie de perpendicular · recta de punta", "var(--red)"],
    ["Ángulos", "abatir · complemento · suplemento", "var(--leaf)"],
    ["Pendiente", "máxima pendiente · buzamiento", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Ángulo recto", "Se ve recto si un lado es paralelo al plano."],
    ["r ⊥ plano", "r ⊥ h y r′ ⊥ v."],
    ["Plano ⊥ r por A", "Horizontal por A → punto de v."],
    ["Punto-plano", "Perpendicular, pie I, VM."],
    ["Planos paralelos", "LT₁ ⊥ h: dos paralelas."],
    ["Punto-recta", "Recta de punta → distancia directa."],
    ["Rectas que se cruzan", "Perpendicular común."],
    ["Ángulo de rectas", "Abatir su plano."],
    ["Máxima pendiente", "⊥ h; da φ."],
    ["Máxima inclinación", "⊥ v; da ψ."],
    ["Recta-plano", "α = 90° − β."],
    ["Dos planos", "Sección ⊥ a la arista."],
  ],
  familias: ["Buscad en casa dos tuberías o cables que se crucen y pensad dónde está su perpendicular común.", "Con un libro abierto, observad el ángulo diedro entre las tapas y cómo medirlo.", "Inclinad una tabla y comprobad por dónde rueda una canica: es la recta de máxima pendiente.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema diédrico; perpendicularidad; distancias entre puntos, rectas y planos; ángulos entre rectas, recta y plano y entre planos; recta de máxima pendiente; aplicación de abatimientos, giros y cambios de plano (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Maqueta con varillas y cartón para visualizar la perpendicular común.", "GeoGebra 3D: comprobar distancias calculadas en diédrico.", "Problemas de interferencias en instalaciones (Tecnología e Ingeniería).", "Relación con Geología: dirección y buzamiento de estratos."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sistema diédrico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_di%C3%A9drico" },
    { t: "Ángulo diedro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%81ngulo_diedro" },
  ],
  revisado: "2026-11-21",
};
