// Dibujo Técnico I 1º Bachillerato · Tema 7. Nivel libro. Diédrico: intersecciones, abatimientos, giros y cambios de plano.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, arco, paso, LT, corteRR, pie, polar, ang, add, sub, mul, lerp, unit, dist, regular, tx } = G;
const dash = 'stroke-dasharray="5 3"';
const YT = 90;
const ref = (A, B) => seg(A, B, "var(--muted)", 0.9, 'stroke-dasharray="2 2"');
const L = (A, B, c, w = 2) => seg(A, B, c, w);
const alarga = (A, B, k0, k1) => [lerp(A, B, k0), lerp(A, B, k1)];

// 7.1 Intersección de dos planos oblicuos.
const s1 = (() => {
  const Xa = [215, YT], a2 = [40, 20], a1 = [40, 140], Xb = [30, YT], b2 = [240, 10], b1 = [150, 170];
  const V2 = corteRR(Xa, a2, Xb, b2), H1 = corteRR(Xa, a1, Xb, b1), V1 = [V2[0], YT], H2 = [H1[0], YT];
  const [i2a, i2b] = alarga(V2, H2, -0.7, 1.5), [i1a, i1b] = alarga(V1, H1, -0.6, 1.5);
  return dib("Intersección de dos planos: se unen los puntos de corte de las trazas homónimas", `${LT(YT)}${L(Xa, a2, "var(--pen)")}${L(Xa, a1, "var(--pen)")}${L(Xb, b2, "var(--leaf)")}${L(Xb, b1, "var(--leaf)")}
  ${ref(V2, V1)}${ref(H1, H2)}${L(i2a, i2b, "var(--red)", 2.6)}${L(i1a, i1b, "var(--red)", 2.6)}${pt(V2, "V₂", 8, 2, "var(--red)")}${pt(V1, "V₁", 6, 14, "var(--red)")}${pt(H1, "H₁", 8, 6, "var(--red)")}${pt(H2, "H₂", -8, -6, "var(--red)")}
  ${tx(36, 24, "α₂", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(36, 144, "α₁", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(244, 24, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}${tx(158, 172, "β₁", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(i2a[0] + 6, i2a[1] + 2, "i₂", { s: 11, b: 1, c: "var(--red)", a: "start" })}${tx(i1b[0] - 6, i1b[1] + 6, "i₁", { s: 11, b: 1, c: "var(--red)", a: "end" })}
  ${paso([V2[0] + 2, V2[1] - 24], 1)}${paso([H1[0] - 14, H1[1] + 22], 2)}${paso([182, 150], 3, "var(--red)")}${tx(193, 154, "i = α ∩ β", { s: 9.5, b: 1, c: "var(--red)", a: "start" })}`);
})();

// 7.2 Intersección de un plano oblicuo con uno de canto.
const s2 = (() => {
  const Xa = [205, YT], a2 = [45, 15], a1 = [45, 165], Xb = [100, YT], b2 = [210, 13], b1 = [100, 172];
  const V2 = corteRR(Xa, a2, Xb, b2), H1 = corteRR(Xa, a1, Xb, b1), V1 = [V2[0], YT], H2 = [H1[0], YT];
  return dib("Intersección de un plano oblicuo con un plano proyectante vertical: la proyección vertical de la intersección está sobre su traza vertical", `${LT(YT)}${L(Xa, a2, "var(--pen)")}${L(Xa, a1, "var(--pen)")}${L(Xb, b2, "var(--leaf)", 2.2)}${L(Xb, b1, "var(--leaf)", 2.2)}
  ${L(V2, H2, "var(--red)", 3.2)}${L(V1, H1, "var(--red)", 2.6)}${ref(V2, V1)}${pt(V2, "V₂", 8, 2, "var(--red)")}${pt(V1, "V₁", 6, 14, "var(--red)")}${pt(H1, "H₁", -20, 6, "var(--red)")}${pt(H2, "H₂", -20, -4, "var(--red)")}
  ${tx(52, 24, "α₂", { s: 11, b: 1, c: "var(--pen)" })}${tx(52, 172, "α₁", { s: 11, b: 1, c: "var(--pen)" })}${tx(214, 22, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(108, 172, "β₁ ⊥ LT", { s: 10, b: 1, c: "var(--leaf)", a: "start" })}
  ${tx(246, 128, "i₂ ≡ tramo de β₂", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}${tx(246, 142, "i₁ = V₁H₁", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}`);
})();

// 7.3 Plano auxiliar horizontal.
const s3 = (() => {
  const Xa = [230, YT], a2 = [100, 14], a1 = [40, 170], Xb = [150, YT], b2 = [14, 14], b1 = [246, 160], yg = 50;
  const Va2 = corteRR(Xa, a2, [0, yg], [260, yg]), Vb2 = corteRR(Xb, b2, [0, yg], [260, yg]), Va1 = [Va2[0], YT], Vb1 = [Vb2[0], YT];
  const P1 = corteRR(Va1, add(Va1, sub(a1, Xa)), Vb1, add(Vb1, sub(b1, Xb))), P2 = [P1[0], yg];
  const H1 = corteRR(Xa, a1, Xb, b1), H2 = [H1[0], YT];
  return dib("Intersección de dos planos usando un plano auxiliar horizontal cuando las trazas verticales no se cortan en el dibujo", `${LT(YT)}${L(Xa, a2, "var(--pen)")}${L(Xa, a1, "var(--pen)")}${L(Xb, b2, "var(--leaf)")}${L(Xb, b1, "var(--leaf)")}${seg([14, yg], [246, yg], "var(--inf)", 1.6, dash)}
  ${ref(Va2, Va1)}${ref(Vb2, Vb1)}${seg(Va1, P1, "var(--pen)", 1.2)}${seg(Vb1, P1, "var(--leaf)", 1.2)}${ref(P1, P2)}${ref(H1, H2)}
  ${L(P2, H2, "var(--red)", 2.6)}${L(P1, H1, "var(--red)", 2.6)}${pt(P2, "P₂", -4, -6, "var(--red)")}${pt(P1, "P₁", -4, 16, "var(--red)")}${pt(H1, "H₁", 4, 16, "var(--red)")}${pt(H2, "H₂", 6, -6, "var(--red)")}
  ${tx(246, 46, "γ₂", { s: 11, a: "end", b: 1, c: "var(--inf)" })}${tx(106, 18, "α₂", { s: 11, b: 1, c: "var(--pen)", a: "start" })}${tx(24, 32, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(46, 174, "α₁", { s: 11, b: 1, c: "var(--pen)", a: "start" })}${tx(196, 160, "β₁", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}
  ${tx(14, 70, "α₂ y β₂ casi paralelas", { s: 9, a: "start", c: "var(--muted)" })}${tx(246, 176, "hα ∩ hβ = P", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}`);
})();

// 7.4 Intersección de recta y plano.
const s4 = (() => {
  const Xa = [220, YT], a2 = [30, 20], a1 = [30, 170], r2a = [30, 100], r2b = [200, 30], r1a = [30, 120], r1b = [200, 140];
  const Hb2 = corteRR(r2a, r2b, [0, YT], [260, YT]), V2 = corteRR(Xa, a2, r2a, r2b), V1 = [V2[0], YT], H1 = corteRR(Xa, a1, Hb2, [Hb2[0], 200]);
  const I1 = corteRR(V1, H1, r1a, r1b), I2 = corteRR(r2a, r2b, [I1[0], 0], [I1[0], 200]);
  return dib("Intersección de una recta con un plano mediante un plano proyectante auxiliar que contiene a la recta", `${LT(YT)}${L(Xa, a2, "var(--pen)")}${L(Xa, a1, "var(--pen)")}${L(r2a, r2b, "var(--ink)", 2.4)}${L(r1a, r1b, "var(--ink)", 2.4)}${seg(Hb2, [Hb2[0], 176], "var(--leaf)", 1.6, dash)}
  ${ref(V2, V1)}${L(V1, H1, "var(--red)", 1.8)}${ref(I2, I1)}${pt(V2, "", 0, 0, "var(--red)")}${pt(V1, "", 0, 0, "var(--red)")}${pt(H1, "", 0, 0, "var(--red)")}${pt(I1, "I₁", 4, 16, "var(--red)", 12)}${pt(I2, "I₂", 6, -6, "var(--red)", 12)}
  ${tx(204, 28, "r₂ ≡ β₂", { s: 10, b: 1, a: "start" })}${tx(204, 152, "r₁", { s: 11, b: 1, a: "start" })}${tx(40, 30, "α₂", { s: 11, b: 1, c: "var(--pen)" })}${tx(40, 168, "α₁", { s: 11, b: 1, c: "var(--pen)" })}${tx(Hb2[0] + 4, 176, "β₁", { s: 10, b: 1, c: "var(--leaf)", a: "start" })}
  ${paso([V2[0] + 2, V2[1] - 16], 1)}${paso([H1[0] + 32, H1[1] + 4], 2)}${paso([I1[0] + 24, I1[1] - 12], 3, "var(--red)")}`);
})();

// 7.5 Recta y plano proyectante: visibilidad.
const s5 = (() => {
  const X = [80, YT], b2 = [220, 20], r2a = [30, 30], r2b = [230, 72], r1a = [30, 160], r1b = [230, 112];
  const I2 = corteRR(X, b2, r2a, r2b), I1 = corteRR(r1a, r1b, [I2[0], 0], [I2[0], 200]);
  return dib("Intersección inmediata de una recta con un plano de canto y visibilidad de la recta en planta", `${LT(YT)}${L(X, b2, "var(--leaf)", 2.4)}${L(X, [80, 176], "var(--leaf)", 2.4)}
  ${L(r2a, r2b, "var(--ink)", 2.2)}${L(r1a, I1, "var(--ink)", 2.6)}${seg(I1, r1b, "var(--ink)", 1.4, dash)}${ref(I2, I1)}${pt(I2, "I₂", -4, -10, "var(--red)", 12)}${pt(I1, "I₁", -4, 18, "var(--red)", 12)}
  ${tx(214, 32, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}${tx(86, 166, "β₁", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(30, 24, "r₂", { s: 11, b: 1, a: "start" })}${tx(30, 154, "r₁", { s: 11, b: 1, a: "start" })}
  ${tx(246, 104, "oculta: bajo β", { s: 9, a: "end", c: "var(--muted)" })}${tx(110, 176, "vista: por encima de β", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 7.6 Intersección de recta y triángulo.
const s6 = (() => {
  const A2 = [40, 60], B2 = [130, 20], C2 = [200, 70], A1 = [40, 110], B1 = [130, 165], C1 = [200, 125], r2a = [20, 25], r2b = [230, 60], r1a = [20, 170], r1b = [230, 112];
  const p2 = corteRR(A2, B2, r2a, r2b), q2 = corteRR(B2, C2, r2a, r2b), p1 = lerp(A1, B1, (p2[0] - 40) / 90), q1 = lerp(B1, C1, (q2[0] - 130) / 70);
  const I1 = corteRR(p1, q1, r1a, r1b), I2 = corteRR(r2a, r2b, [I1[0], 0], [I1[0], 200]);
  return dib("Intersección de una recta con un triángulo: el plano proyectante de la recta corta al triángulo en un segmento", `${LT(YT)}${poli([A2, B2, C2], "var(--pen)", 1.8, "var(--pen)", 0.1)}${poli([A1, B1, C1], "var(--pen)", 1.8, "var(--pen)", 0.1)}
  ${L(r2a, r2b, "var(--ink)", 2.2)}${L(r1a, r1b, "var(--ink)", 2.2)}${ref(p2, p1)}${ref(q2, q1)}${seg(p1, q1, "var(--leaf)", 1.8)}${ref(I2, I1)}
  ${pt(p2, "1₂", -14, 2, "var(--leaf)", 10)}${pt(q2, "2₂", 6, -4, "var(--leaf)", 10)}${pt(p1, "1₁", -16, 4, "var(--leaf)", 10)}${pt(q1, "2₁", 6, 12, "var(--leaf)", 10)}${pt(I1, "I₁", -4, 16, "var(--red)", 12)}${pt(I2, "I₂", 0, 16, "var(--red)", 12)}
  ${tx(A2[0] - 4, A2[1] + 4, "A₂", { s: 10, a: "end" })}${tx(B2[0], B2[1] - 5, "B₂", { s: 10 })}${tx(C2[0] + 4, C2[1] + 4, "C₂", { s: 10, a: "start" })}${tx(A1[0] - 4, A1[1] + 4, "A₁", { s: 10, a: "end" })}${tx(B1[0], B1[1] + 12, "B₁", { s: 10 })}${tx(C1[0] + 4, C1[1] + 4, "C₁", { s: 10, a: "start" })}${tx(234, 58, "r₂", { s: 11, b: 1, a: "start" })}${tx(234, 108, "r₁", { s: 11, b: 1, a: "start" })}`);
})();

// 7.7 Abatimiento de un punto de un plano de canto.
const s7 = (() => {
  const X = [60, YT], b2 = polar(X, 150, 30), A2 = polar(X, 110, 30), o = 40, A1 = [A2[0], YT + o], T = [X[0] + 110, YT], Ab = [T[0], YT + o];
  return dib("Abatimiento de un punto de un plano de canto sobre el plano horizontal girando alrededor de la traza horizontal", `${LT(YT)}${L(X, b2, "var(--leaf)", 2.4)}${L(X, [60, 176], "var(--leaf)", 2.4)}${ref(A2, A1)}
  ${arco(X, 110, 0, 30, "var(--red)", 1.4, dash)}${seg(T, Ab, "var(--red)", 1.4, dash)}${seg(A1, Ab, "var(--red)", 1.4, dash)}${pt(A2, "A₂", -6, -8, "var(--ink)")}${pt(A1, "A₁", -8, 16, "var(--ink)")}${pt(Ab, "(A)", 6, 14, "var(--red)", 12)}${pt(T, "", 0, 0, "var(--red)")}
  ${tx(b2[0] + 2, b2[1] + 16, "β₂", { s: 11, b: 1, c: "var(--leaf)" })}${tx(66, 172, "β₁ = charnela", { s: 9.5, b: 1, c: "var(--leaf)", a: "start" })}${tx(246, 84, "(β₂) ≡ LT", { s: 9, a: "end", c: "var(--red)", b: 1 })}
  ${paso([A2[0] + 30, A2[1] + 6], 1)}${paso([T[0] + 14, YT + 20], 2)}${paso([Ab[0] + 24, Ab[1] - 2], 3, "var(--red)")}${tx(14, 18, "radio: X A₂ medido sobre β₂", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 7.8 Abatimiento de un punto de un plano oblicuo (método del triángulo).
const s8 = (() => {
  const X = [220, YT], a2e = [30, 10], a1e = [20, 125], m2 = 80 / 190, d1 = unit(X, a1e);
  const A1 = [60, 104], tV = (YT - A1[1]) / (-d1[1]), VA = add(A1, mul(d1, -tV)), c = (X[0] - VA[0]) * m2, A2 = [A1[0], YT - c];
  const F = pie(A1, X, a1e), A0 = add(A1, mul(d1, -c)), R = dist(F, A0), Ab = add(F, mul(unit(A1, F), R));
  const V2 = [170, YT - (X[0] - 170) * m2], V1 = [170, YT], Fv = pie(V1, X, a1e), Vb = add(Fv, mul(unit(V1, Fv), dist(X, V2))), Vf = add(X, mul(unit(X, Vb), 1.25 * dist(X, Vb)));
  return dib("Abatimiento de un punto de un plano oblicuo con el método del triángulo rectángulo: cateto la cota del punto", `${LT(YT)}${L(X, a2e, "var(--pen)")}${L(X, a1e, "var(--pen)", 2.4)}${ref(A2, A1)}${seg(A1, VA, "var(--muted)", 1)}${ref(V2, V1)}${seg(V1, Vb, "var(--muted)", 0.9, dash)}
  ${seg(A1, Ab, "var(--leaf)", 1.2)}${seg(A1, A0, "var(--leaf)", 2.2)}${seg(F, A0, "var(--leaf)", 1.4, dash)}${arco(F, R, ang(F, Ab), ang(F, A0), "var(--red)", 1.4, dash)}
  ${seg(X, Vf, "var(--red)", 1.6, dash)}${pt(A2, "A₂", -8, -4)}${pt(A1, "A₁", -8, -2)}${pt(A0, "A₀", -4, -8, "var(--leaf)", 10)}${pt(F, "F", -10, 12, "var(--leaf)", 10)}${pt(Ab, "(A)", -8, 6, "var(--red)", 12)}${pt(V2, "V₂", 4, -6, "var(--pen)", 10)}${pt(Vb, "(V)", 6, 6, "var(--red)", 10)}
  ${tx(28, 22, "α₂", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(18, 140, "α₁", { s: 11, b: 1, c: "var(--pen)", a: "start" })}${tx(Vf[0] + 4, Vf[1], "(α₂)", { s: 10, b: 1, c: "var(--red)", a: "start" })}
  ${paso([A0[0] + 26, A0[1] - 12], 1, "var(--leaf)")}${paso([F[0] + 40, F[1] + 8], 2, "var(--leaf)")}${paso([Ab[0] + 16, Ab[1] + 4], 3, "var(--red)")}${tx(246, 18, "cateto A₁A₀ = cota de A", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 30, "charnela: α₁", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 7.9 Verdadera magnitud de un triángulo en plano de canto.
const s9 = (() => {
  const X = [40, YT], th = 55, P = [["A", 30, 28], ["B", 90, 48], ["C", 65, 78]];
  const q = P.map(([n, u, o]) => { const p2 = polar(X, u, th); return { n, u, p2, p1: [p2[0], YT + o], ab: [X[0] + u, YT + o] }; });
  return dib("Verdadera magnitud de un triángulo contenido en un plano de canto mediante su abatimiento sobre el plano horizontal", `${LT(YT)}${L(X, polar(X, 105, th), "var(--leaf)", 2.2)}${L(X, [40, 176], "var(--leaf)", 2.2)}
  ${poli(q.map((e) => e.p1), "var(--pen)", 1.6, "var(--pen)", 0.1)}${poli(q.map((e) => e.ab), "var(--red)", 2.2, "var(--red)", 0.12)}
  ${q.map((e) => `${ref(e.p2, e.p1)}${arco(X, e.u, 0, th, "var(--muted)", 1, dash)}${seg([X[0] + e.u, YT], e.ab, "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}${seg(e.p1, e.ab, "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}${pt(e.p2, e.n + "₂", -6, -4, "var(--pen)", 10)}${pt(e.p1, "", 0, 0, "var(--pen)")}${pt(e.ab, "(" + e.n + ")", 6, 4, "var(--red)", 10)}`).join("")}
  ${q.map((e) => tx(e.p1[0] - 5, e.p1[1] + 4, e.n + "₁", { s: 10, a: "end", c: "var(--pen)", b: 1 })).join("")}
  ${tx(108, 18, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(46, 176, "β₁", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}${tx(246, 18, "(A)(B)(C): verdadera", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}${tx(246, 30, "magnitud del triángulo", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 7.10 Desabatimiento de un cuadrado.
const s10 = (() => {
  const X = [60, YT], th = 50, Q = regular([150, 138], 22, 4, 45);
  const q = Q.map((p) => { const u = p[0] - X[0], p2 = polar(X, u, th); return { ab: p, p2, p1: [X[0] + u * Math.cos(th * Math.PI / 180), p[1]] }; });
  return dib("Desabatimiento: un cuadrado dibujado en verdadera magnitud se lleva a las proyecciones de un plano de canto", `${LT(YT)}${L(X, polar(X, 110, th), "var(--leaf)", 2.2)}${L(X, [60, 176], "var(--leaf)", 2.2)}
  ${poli(Q, "var(--red)", 2.2, "var(--red)", 0.12)}${poli(q.map((e) => e.p1), "var(--pen)", 2.2, "var(--pen)", 0.12)}${L(polar(X, Math.min(...q.map((e) => e.ab[0] - X[0])), th), polar(X, Math.max(...q.map((e) => e.ab[0] - X[0])), th), "var(--pen)", 3)}
  ${q.map((e) => `${seg(e.ab, e.p1, "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}${seg([e.ab[0], YT], e.ab, "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}${arco(X, e.ab[0] - X[0], 0, th, "var(--muted)", 0.9, dash)}${ref(e.p2, e.p1)}`).join("")}
  ${tx(150, 142, "(Q)", { s: 11, b: 1, c: "var(--red)" })}${tx(q[1].p1[0] - 4, 142, "Q₁", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(polar(X, 92, th)[0] - 10, polar(X, 92, th)[1] + 2, "Q₂", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(54, 40, "β₂", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}${tx(66, 176, "β₁", { s: 11, b: 1, c: "var(--leaf)", a: "start" })}
  ${tx(246, 176, "afinidad: eje β₁, dirección ∥ LT", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 7.11 Giro de un segmento alrededor de un eje vertical.
const s11 = (() => {
  const A1 = [50, 120], A2 = [50, 70], B1 = [140, 160], B2 = [140, 20], r = dist(A1, B1), Bg1 = [A1[0] + r, A1[1]], Bg2 = [Bg1[0], B2[1]];
  return dib("Giro de un segmento alrededor de un eje vertical hasta ponerlo frontal: su proyección vertical da la verdadera magnitud", `${LT(YT)}${seg([50, 14], [50, YT], "var(--inf)", 1.4, dash)}${L(A1, B1, "var(--ink)")}${L(A2, B2, "var(--ink)")}${arco(A1, r, ang(A1, B1), 0, "var(--red)", 1.4, dash)}
  ${L(A1, Bg1, "var(--red)", 2)}${seg(B2, Bg2, "var(--red)", 1.2, dash)}${L(A2, Bg2, "var(--red)", 3)}${ref(Bg1, Bg2)}${pt(A1, "A₁ ≡ e₁", -8, 16)}${pt(A2, "A₂", -8, 4)}${pt(B1, "B₁", -6, 16)}${pt(B2, "B₂", -6, -6)}${pt(Bg1, "B′₁", 6, 14, "var(--red)")}${pt(Bg2, "B′₂", 6, -4, "var(--red)")}
  ${tx(56, 22, "e₂", { s: 10, b: 1, c: "var(--inf)", a: "start" })}${tx(246, 62, "A₂B′₂ = VM", { s: 11, b: 1, c: "var(--red)", a: "end" })}${paso([174, 148], 1)}${paso([110, 12], 2)}${paso([118, 58], 3, "var(--red)")}`);
})();

// 7.12 Cambio de plano vertical.
const s12 = (() => {
  const Y = 70, A1 = [110, 100], B1 = [140, 140], A2 = [110, 55], B2 = [140, 35], cA = 15, cB = 35, u = unit(A1, B1), n = [-u[1], u[0]];
  const O = add(A1, mul(n, 16)), Ap = add(A1, mul(n, 16 + cA)), Bp = add(B1, mul(n, 16 + cB)), Lp0 = add(O, mul(u, -36)), Lp1 = add(O, mul(u, 80));
  return dib("Cambio de plano vertical: la nueva línea de tierra paralela a la proyección horizontal da la verdadera magnitud del segmento", `${LT(Y)}${seg(Lp0, Lp1, "var(--inf)", 1.8)}${L(A1, B1, "var(--ink)")}${L(A2, B2, "var(--ink)")}${seg(A2, [110, 100], "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}${seg(B2, [140, 140], "var(--muted)", 0.9, 'stroke-dasharray="2 2"')}
  ${seg(A1, Ap, "var(--muted)", 0.9, dash)}${seg(B1, Bp, "var(--muted)", 0.9, dash)}${L(Ap, Bp, "var(--red)", 3)}${pt(A1, "A₁", 8, 2)}${pt(B1, "B₁", 8, 4)}${pt(A2, "A₂", -8, -6)}${pt(B2, "B₂", 6, -6)}${pt(Ap, "A′₂", -10, -6, "var(--red)")}${pt(Bp, "B′₂", -10, 4, "var(--red)")}
  ${tx(Lp1[0] + 6, Lp1[1], "LT′ ∥ A₁B₁", { s: 9.5, b: 1, c: "var(--inf)", a: "start" })}${tx(16, 64, "LT", { s: 9.5, b: 1, a: "start" })}${tx(246, 120, "las cotas se conservan:", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 132, "A′₂ a 15 de LT′, B′₂ a 35", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 150, "A′₂B′₂ = VM", { s: 11, b: 1, c: "var(--red)", a: "end" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Sistema diédrico: intersecciones y abatimientos",
  minutos: 120,
  objetivos: [
    "Hallar la intersección de dos planos en casos generales y particulares",
    "Usar planos auxiliares cuando las trazas no se cortan en el dibujo",
    "Hallar la intersección de una recta con un plano y con una figura plana, y estudiar la visibilidad",
    "Abatir puntos y figuras de planos proyectantes y oblicuos para obtener su verdadera magnitud",
    "Desabatir figuras dibujadas en verdadera magnitud para obtener sus proyecciones",
    "Aplicar giros y cambios de plano para hallar la verdadera magnitud de segmentos",
  ],
  claves: ["intersección", "plano auxiliar", "plano proyectante", "visibilidad", "abatimiento", "charnela", "desabatimiento", "afinidad", "verdadera magnitud", "giro", "eje de giro", "cambio de plano"],
  lectura: {
    titulo: "Cortar un tejado sin subir al tejado",
    html: `<p>Imagina un tejado a cuatro aguas: cuatro planos inclinados que se encuentran en limas y cumbreras. El carpintero que prepara las vigas en el taller necesita saber, antes de subir, dónde se cortan esos planos y cuánto miden de verdad las vigas inclinadas. Sobre el plano de la casa, una lima parece más corta de lo que es, y el ángulo de un faldón no se ve en ninguna de las vistas.</p>
    <p>Durante siglos, canteros y carpinteros resolvieron estos problemas con trazados a tamaño real dibujados en el suelo del taller, las <b>monteas</b>. En ellos «tumbaban» los planos inclinados sobre el suelo para medirlos, exactamente lo que hoy llamamos <b>abatir</b>. Los tratados de estereotomía del Renacimiento español, como los de Alonso de Vandelvira, están llenos de estas construcciones.</p>
    <p>En este tema aprenderás las herramientas que convierten el sistema diédrico en un instrumento de cálculo: hallar <b>intersecciones</b> entre planos y rectas, <b>abatir</b> un plano para ver sus figuras en verdadera magnitud, y <b>girar</b> o <b>cambiar de plano</b> un elemento hasta colocarlo en una posición en la que sus medidas se lean directamente.</p>`,
  },
  pregunta: {
    texto: "Una viga inclinada mide 3 m en la planta de un tejado y su extremo superior está 2 m más alto que el inferior. ¿Cuánto mide la viga de verdad?",
    respuesta: "Planta y desnivel son los catetos de un triángulo rectángulo y la viga es la hipotenusa: √(3² + 2²) = √13 ≈ <mark>3,61 m</mark>. Es exactamente la idea del abatimiento por el método del triángulo: un cateto en proyección y otro igual a la diferencia de cotas.",
  },
  bloques: [
    {
      html: `<h3>7.1 Intersección de dos planos</h3><p>Dos planos no paralelos se cortan en una <b>recta</b>. Para dibujarla basta con encontrar dos de sus puntos, y los más cómodos son sus trazas:</p><ol><li>Las trazas verticales α₂ y β₂ están en el PV, así que su punto de corte pertenece a los dos planos y al PV: es la <b>traza vertical V</b> de la recta intersección. Ese punto es V₂; V₁ está en la LT, en su línea de referencia.</li><li>Del mismo modo, el corte de α₁ y β₁ es la <b>traza horizontal H</b>: H₁ es el punto de corte y H₂ está en la LT.</li><li>La intersección i tiene por proyecciones i₂ = V₂H₂ e i₁ = V₁H₁.</li></ol><p>Este razonamiento se apoya en una propiedad que ya conoces del tema anterior: una recta pertenece a un plano si sus trazas están en las trazas homónimas del plano. La recta i está en los dos planos, así que sus trazas deben estar a la vez en α y en β.</p><p>Conviene comprobar el resultado: si se toma un punto cualquiera de i y se verifica, con una horizontal, que está en ambos planos, la construcción es correcta. También es útil revisar la <b>visibilidad</b>: la intersección se dibuja con línea continua en el primer cuadrante, entre sus trazas.</p><p>Casos especiales: si dos trazas homónimas son paralelas, la intersección es paralela a ellas (por ejemplo, dos planos con α₁ ∥ β₁ se cortan en una recta horizontal).</p>`,
      svg: s1,
    },
    {
      html: `<h3>7.2 Intersección con planos proyectantes y particulares</h3><p>Cuando uno de los planos es <b>proyectante</b>, la intersección se simplifica mucho, porque una de sus proyecciones se conoce de antemano.</p><ul><li>Si β es <b>de canto</b> (proyectante vertical), todo lo que contiene se proyecta verticalmente sobre β₂. Por tanto, <b>i₂ está sobre β₂</b>: solo hay que buscar i₁. Se toman los cortes de las trazas, V (α₂ ∩ β₂) y H (α₁ ∩ β₁), y se unen V₁ y H₁.</li><li>Si β es <b>proyectante horizontal</b>, i₁ está sobre β₁ y solo hay que hallar i₂.</li><li>Si β es <b>horizontal</b> (solo tiene traza β₂ ∥ LT), la intersección es una <b>horizontal del plano α</b> de esa cota: i₂ coincide con β₂ e i₁ es paralela a α₁.</li><li>Si β es <b>frontal</b>, la intersección es una <b>frontal</b> de α: i₁ coincide con β₁ e i₂ es paralela a α₂.</li><li>Si los dos planos son <b>paralelos a la LT</b>, la intersección es también paralela a la LT y se resuelve con la tercera proyección (perfil).</li></ul><p>Esta lista no es para memorizar sin más: todos los casos salen del mismo principio. La intersección pertenece a los dos planos, de modo que hereda las propiedades de ambos. Si un plano obliga a que la intersección sea horizontal, frontal o esté sobre una traza, el problema se reduce a buscar un único punto.</p><p>Los planos horizontales y frontales cortan a un plano oblicuo según sus horizontales y frontales. Por eso son las herramientas auxiliares favoritas en el diédrico.</p>`,
      svg: s2,
    },
    {
      html: `<h3>7.3 Planos auxiliares: cuando las trazas no se cortan</h3><p>A menudo las trazas homónimas de dos planos se cortan fuera del papel, o son casi paralelas y su corte es impreciso. Entonces se recurre a un <b>plano auxiliar</b> γ, normalmente horizontal o frontal, que corte a ambos planos de forma sencilla.</p><p><b>Procedimiento con un plano horizontal</b>:</p><ol><li>Se dibuja γ₂ paralela a la LT a una cota cómoda.</li><li>γ corta a α en una horizontal h<sub>α</sub>: su traza vertical está en α₂ ∩ γ₂; desde ella se baja a la LT y se traza h<sub>α1</sub> paralela a α₁.</li><li>Igualmente γ corta a β en una horizontal h<sub>β</sub>, con h<sub>β1</sub> paralela a β₁.</li><li>Las dos horizontales están en el plano γ, así que se cortan: su punto común P pertenece a α, a β y a γ. P₁ es el corte de h<sub>α1</sub> y h<sub>β1</sub>; P₂ está en γ₂.</li><li>Con otro punto (otra traza que sí se corte en el papel o un segundo plano auxiliar) se completa la intersección.</li></ol><p>La idea general es muy potente y se usa en toda la geometría descriptiva: <b>se corta con un tercer plano sencillo, se obtienen dos rectas fáciles y su punto común es un punto de la solución</b>. Repitiendo el proceso con dos planos auxiliares se obtiene la intersección completa incluso si ninguna traza se corta en el papel.</p><p>Si los planos vienen dados por figuras (dos triángulos, por ejemplo), se aplica la misma estrategia con planos proyectantes que contengan los lados de las figuras.</p>`,
      svg: s3,
    },
    {
      html: `<h3>7.4 Intersección de una recta y un plano</h3><p>Una recta no paralela a un plano lo corta en un <b>punto</b> I. Para hallarlo se usa el método del <b>plano auxiliar</b>, en tres pasos que conviene memorizar:</p><ol><li>Por la recta r se hace pasar un plano auxiliar β, preferiblemente <b>proyectante</b>. Si se elige de canto, su traza vertical β₂ coincide con r₂, y β₁ es perpendicular a la LT por el punto donde r₂ corta a la LT.</li><li>Se halla la intersección i de β con el plano dado α. Como β es de canto, i₂ coincide con r₂ y solo hay que buscar i₁, uniendo V₁ (de α₂ ∩ β₂) con H₁ (de α₁ ∩ β₁).</li><li>Las rectas r e i están en el mismo plano β, así que se cortan: el punto I₁ = r₁ ∩ i₁ es la proyección horizontal de la intersección, e I₂ está sobre r₂ en su línea de referencia.</li></ol><p>Se puede elegir igualmente el plano proyectante horizontal (con β₁ ≡ r₁): entonces i₁ coincide con r₁ y el punto se obtiene en el alzado como I₂ = r₂ ∩ i₂. Conviene escoger el que dé cortes más claros en el papel.</p><p>Este procedimiento es la base de muchos problemas: intersección de rectas con figuras planas, de aristas de poliedros con planos de sección, o el punto donde un rayo de luz incide sobre una superficie al construir sombras.</p>`,
      svg: s4,
      video: { id: "tGaP3HYV_iA", titulo: "Intersección entre recta y plano en diédrico: ejercicios resueltos", canal: "Dibujo Técnico paso a paso", vistas: 119763, busqueda: "intersección recta plano diédrico" },
    },
    {
      html: `<h3>7.5 Casos inmediatos y visibilidad</h3><p>Si el plano dado ya es <b>proyectante</b>, no hace falta ningún plano auxiliar. Por ejemplo, con un plano de canto β, todo lo que contiene se proyecta sobre β₂; el punto de corte de la recta con el plano tiene su proyección vertical en β₂ y en r₂, de modo que <b>I₂ = r₂ ∩ β₂</b>, y I₁ se obtiene bajando a r₁. Con un plano proyectante horizontal ocurre lo mismo en la planta: I₁ = r₁ ∩ β₁.</p><p>Una vez hallado el punto, hay que estudiar la <b>visibilidad</b>: se considera que el plano es opaco y que el observador mira desde arriba (para la planta) y desde delante (para el alzado).</p><ul><li>En la <b>planta</b>, el tramo de recta situado por encima del plano se ve, y el tramo que queda debajo se dibuja discontinuo en la zona en que el plano lo tapa.</li><li>En el <b>alzado</b>, se ve el tramo situado delante del plano y queda oculto el que está detrás.</li></ul><p>Para decidir qué tramo está encima se compara la cota de un punto de la recta con la del plano en la misma vertical: si r₂ queda por encima de β₂ en una línea de referencia, ese tramo de la recta está por encima del plano. El punto de intersección siempre separa un tramo visto de uno oculto.</p><p>Con figuras limitadas (un triángulo, un rectángulo), la recta solo se oculta dentro del contorno de la figura; fuera de él se ve completa.</p>`,
      svg: s5,
    },
    {
      html: `<h3>7.6 Intersección de una recta con una figura plana</h3><p>Muchas veces el plano no viene dado por sus trazas sino por una figura: un triángulo ABC, un rectángulo o un polígono. No hace falta hallar las trazas del plano: se aplica directamente el método del plano auxiliar.</p><ol><li>Por la recta r se toma el plano proyectante vertical β, con β₂ ≡ r₂.</li><li>β₂ corta a los lados del triángulo en el alzado en dos puntos, 1₂ (en A₂B₂) y 2₂ (en B₂C₂). Son las proyecciones verticales de los puntos donde β corta a esos lados.</li><li>Se bajan por las líneas de referencia a los lados correspondientes de la planta: 1₁ en A₁B₁ y 2₁ en B₁C₁. El segmento 1–2 es la intersección del plano β con el triángulo.</li><li>Donde 1₁2₁ corta a r₁ está I₁; I₂ se sube a r₂.</li></ol><p>Si I₁ cae fuera del segmento 1₁2₁, la recta corta al plano del triángulo pero fuera de la figura, y no la atraviesa.</p><p>La visibilidad se estudia en los puntos aparentes de cruce de la recta con los lados de la figura: en la planta se comparan las cotas de los dos puntos que se proyectan juntos (el más alto tapa al otro), y en el alzado se comparan los alejamientos. A partir de I la visibilidad cambia.</p><p>Este mismo procedimiento, aplicado a cada arista, sirve para hallar la intersección de dos triángulos (cada lado de uno se corta con el otro) o la sección de un poliedro por un plano.</p>`,
      svg: s6,
    },
    {
      html: `<h3>7.7 Abatimiento: idea y abatimiento de un plano de canto</h3><p>En proyección, las figuras contenidas en planos oblicuos o proyectantes aparecen deformadas: los ángulos y longitudes no son los reales. El <b>abatimiento</b> consiste en girar el plano alrededor de una de sus trazas, llamada <b>charnela</b>, hasta hacerlo coincidir con un plano de proyección. Una vez abatida, la figura se ve en <b>verdadera magnitud</b>.</p><p>Cada punto del plano describe en el giro un arco de circunferencia contenido en un plano perpendicular a la charnela. Por eso:</p><ul><li>El punto abatido (A) está en la <b>perpendicular a la charnela</b> trazada por la proyección del punto.</li><li>La distancia de (A) a la charnela es la <b>distancia real</b> del punto A a la charnela en el espacio (el radio del giro).</li></ul><p>En un <b>plano de canto</b> β, que abatimos sobre el PH alrededor de β₁, el radio se ve directamente en el alzado: es la distancia desde A₂ hasta el vértice X de las trazas, medida sobre β₂. Con centro en X se lleva A₂ a la LT con un arco, y desde allí se baja una perpendicular hasta cortar la paralela a la LT trazada por A₁: ese corte es (A). La traza abatida (β₂) coincide con la LT.</p><p>Los puntos de la charnela no se mueven al abatir: son <b>dobles</b>. Esta observación permite comprobar las construcciones y es la base de la afinidad que verás en el bloque 7.10.</p>`,
      svg: s7,
    },
    {
      html: `<h3>7.8 Abatimiento de un plano oblicuo: método del triángulo</h3><p>Si el plano α es oblicuo, el radio de giro no se ve directamente y hay que construirlo. Para abatir un punto A de α sobre el PH, alrededor de α₁:</p><ol><li>Desde A₁ se traza la <b>perpendicular a α₁</b>, que corta a la charnela en F. Por esta recta se moverá el punto al abatir.</li><li>Se construye un <b>triángulo rectángulo</b> con un cateto A₁F (distancia en proyección) y el otro igual a la <b>cota de A</b>, llevado desde A₁ paralelamente a α₁ (punto A₀). La hipotenusa FA₀ es la distancia real de A a la charnela: el radio.</li><li>Con centro en F y radio FA₀ se traza un arco hasta cortar la perpendicular: ese punto es (A).</li></ol><p>La cota de A se lee en A₂; si no se conoce A₂, se halla primero con una horizontal del plano.</p><p>Para abatir la traza vertical α₂, se toma un punto V de ella: su distancia real a X es la que se ve en el alzado (porque α₂ está en el PV), así que (V) está en la perpendicular a α₁ por V₁ a la distancia XV₂ de X. La recta X(V) es (α₂).</p><p>Hay otros procedimientos equivalentes: abatir con ayuda de una horizontal del plano (que se abate paralela a α₁) o mediante un cambio de plano que convierta α en proyectante. Lo importante es entender que todos buscan lo mismo: la distancia real de cada punto a la charnela.</p>`,
      svg: s8,
      video: { id: "6IIw4eEXV_Y", titulo: "Abatimiento de un punto contenido en un plano (diédrico)", canal: "PDD Profesor de Dibujo", vistas: 213649, busqueda: "abatimiento de un punto diédrico" },
    },
    {
      html: `<h3>7.9 Verdadera magnitud de figuras planas</h3><p>La aplicación más importante del abatimiento es obtener la <b>verdadera magnitud</b> (VM) de una figura contenida en un plano: un triángulo, un polígono, una circunferencia, la cara de una pieza. El procedimiento es abatir cada vértice y unir los puntos abatidos.</p><p>En un <b>plano de canto</b> el trabajo es especialmente sencillo:</p><ol><li>Cada vértice tiene su proyección vertical sobre β₂. Con centro en X se lleva cada uno a la LT mediante un arco.</li><li>Desde esos puntos se bajan perpendiculares a la LT.</li><li>Por cada proyección horizontal se traza una paralela a la LT; su corte con la perpendicular correspondiente da el vértice abatido.</li><li>Se unen los vértices abatidos: (A)(B)(C) es la figura en verdadera magnitud.</li></ol><p>Observa que en la planta la figura aparece <b>comprimida</b> en la dirección perpendicular a la charnela, y que la compresión es la misma para todos los puntos: el factor es el coseno del ángulo del plano con el PH.</p><p>Con la figura en verdadera magnitud se pueden medir sus lados, sus ángulos y su área, hallar su centro, su circunferencia circunscrita o la bisectriz de un ángulo. Si después hay que volver a las proyecciones, se hace el camino inverso: el <b>desabatimiento</b>.</p><p>En un plano oblicuo se procede igual, abatiendo un vértice con el método del triángulo y los demás, más rápido, con la afinidad.</p>`,
      svg: s9,
    },
    {
      html: `<h3>7.10 Desabatimiento y afinidad</h3><p>El problema inverso es muy frecuente: dibujar en un plano dado una figura de forma y tamaño conocidos (un cuadrado de 40 mm, un hexágono regular, una circunferencia). Se dibuja la figura en el plano <b>abatido</b>, donde se ve en verdadera magnitud, y luego se <b>desabate</b>, es decir, se lleva cada punto a sus proyecciones.</p><p>En un plano de canto, desabatir un punto (P) es deshacer el camino: se sube perpendicularmente a la LT, se lleva con un arco de centro X hasta β₂ (eso da P₂) y se baja por la línea de referencia hasta la paralela a la LT trazada por (P): eso da P₁.</p><p>Entre la figura abatida y su proyección horizontal existe una <b>afinidad ortogonal</b> (la estudiaste en el tema de transformaciones):</p><ul><li>El <b>eje de afinidad</b> es la charnela: sus puntos son dobles.</li><li>La <b>dirección de afinidad</b> es perpendicular a la charnela: cada punto y su abatido están en una perpendicular a ella.</li><li>Una recta y su abatida se cortan sobre la charnela.</li></ul><p>Gracias a la afinidad, en un plano oblicuo basta con abatir <b>un solo punto</b> con el método del triángulo; los demás se obtienen prolongando rectas hasta la charnela y volviendo a trazar. Esto ahorra tiempo y aumenta la precisión.</p><p>Una circunferencia abatida se desabate en una <b>elipse</b> en la planta: los puntos se llevan uno a uno o, mejor, se desabaten dos diámetros conjugados y se construye la elipse.</p>`,
      svg: s10,
    },
    {
      html: `<h3>7.11 Giros</h3><p>El <b>giro</b> es otra forma de colocar un elemento en una posición más favorable. En lugar de mover el plano de proyección, se mueve el objeto alrededor de un eje perpendicular a uno de los planos de proyección.</p><p><b>Giro alrededor de un eje vertical</b> (perpendicular al PH):</p><ul><li>La proyección horizontal de cada punto describe un <b>arco de circunferencia</b> con centro en e₁ (la proyección del eje, que es un punto).</li><li>La proyección vertical de cada punto se mueve en una <b>paralela a la LT</b>, porque la cota no cambia.</li></ul><p><b>Aplicación: verdadera magnitud de un segmento AB.</b> Se hace pasar el eje por A (así A no se mueve). Se gira B₁ alrededor de A₁ hasta que A₁B′₁ sea paralela a la LT. El segmento queda <b>frontal</b>, de modo que su proyección vertical A₂B′₂ está en verdadera magnitud y muestra además el ángulo real que forma con el PH.</p><p>Con un eje <b>de punta</b> (perpendicular al PV) todo es análogo: las proyecciones verticales giran en arcos y las horizontales se mueven paralelas a la LT; si se lleva el segmento a posición horizontal, se obtiene su VM en la planta y su ángulo con el PV.</p><p>Los giros también sirven para convertir un plano oblicuo en proyectante: basta girar una de sus horizontales hasta dejarla de punta. Así, combinando un giro con un abatimiento sencillo, se resuelven problemas complejos.</p>`,
      svg: s11,
    },
    {
      html: `<h3>7.12 Cambios de plano</h3><p>En un <b>cambio de plano</b> el objeto permanece quieto y se sustituye uno de los planos de proyección por otro nuevo, perpendicular al que se conserva. Se obtiene así una nueva línea de tierra LT′ y una nueva proyección.</p><p><b>Cambio de plano vertical</b>: se conserva el PH y se toma un nuevo PV′.</p><ul><li>Las proyecciones horizontales no cambian.</li><li>Las <b>cotas se conservan</b>: la nueva proyección vertical A′₂ se obtiene trazando por A₁ la perpendicular a LT′ y llevando sobre ella, desde LT′, la cota de A.</li></ul><p><b>Aplicación</b>: si se elige LT′ paralela a A₁B₁, el segmento AB pasa a ser frontal respecto al nuevo sistema y A′₂B′₂ está en <b>verdadera magnitud</b>, igual que con el giro pero sin mover el objeto.</p><p>En un <b>cambio de plano horizontal</b> se conserva el PV y se toma un nuevo PH′; ahora lo que se conserva son los <b>alejamientos</b>.</p><p>Con dos cambios de plano sucesivos se puede colocar cualquier recta de punta o cualquier plano paralelo a un plano de proyección. Por ejemplo, para obtener la VM de una figura de un plano oblicuo: primer cambio para que el plano sea proyectante (LT′ perpendicular a sus horizontales) y segundo cambio con LT″ paralela a la nueva traza.</p><p>Abatimientos, giros y cambios de plano son, por tanto, tres caminos para un mismo objetivo: ver el elemento en una posición en la que sus medidas reales se lean directamente.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Halla la intersección de dos planos α y β cuyas trazas verticales se cortan en un punto a 30 mm sobre la LT y las horizontales en un punto a 40 mm bajo la LT, separados 20 mm en abscisa.", pasos: ["V₂ es el corte de α₂ y β₂ (cota 30 mm); V₁ en la LT.", "H₁ es el corte de α₁ y β₁ (alejamiento 40 mm); H₂ en la LT.", "i₂ une V₂ y H₂; i₁ une V₁ y H₁."], resultado: "i(i₁ = V₁H₁, i₂ = V₂H₂), con trazas V(cota 30) y H(alejamiento 40)." },
    { enunciado: "Halla la intersección del plano α con el plano horizontal de cota 25 mm.", pasos: ["La intersección con un plano horizontal es una horizontal de α.", "i₂ coincide con la traza del plano horizontal (paralela a la LT a 25 mm).", "Su traza vertical está en α₂; desde ella se baja a la LT y se traza i₁ ∥ α₁."], resultado: "Horizontal de α de cota 25 mm." },
    { enunciado: "Halla el punto en que la recta r corta a un plano de canto β.", pasos: ["En un plano de canto todo se proyecta verticalmente sobre β₂.", "I₂ = r₂ ∩ β₂.", "I₁ en r₁, en la línea de referencia de I₂."], resultado: "Intersección inmediata, sin plano auxiliar." },
    { enunciado: "Abate sobre el PH un punto A de un plano de canto que forma 45° con el PH, si A₂ está a 40 mm de X sobre β₂ y A tiene 25 mm de alejamiento.", pasos: ["Charnela β₁ ⊥ LT. Radio XA₂ = 40 mm.", "Arco de centro X hasta la LT: punto a 40 mm de X.", "Perpendicular a la LT desde ese punto hasta la paralela a la LT por A₁ (a 25 mm)."], resultado: "(A) está a 40 mm de la charnela y a 25 mm de la LT; en planta A₁ está a 40·cos 45° ≈ 28,3 mm de la charnela." },
    { enunciado: "Halla la verdadera magnitud de un segmento AB con A₁B₁ = 50 mm y diferencia de cotas de 30 mm.", pasos: ["Girando alrededor de un eje vertical por A, B₁ se lleva a una paralela a la LT (A₁B′₁ = 50 mm).", "B₂ se desplaza horizontalmente: la diferencia de cotas se mantiene (30 mm).", "VM = A₂B′₂ = √(50² + 30²)."], resultado: "VM ≈ 58,3 mm; forma un ángulo de arctan(30/50) ≈ 31° con el PH." },
    { enunciado: "Dibuja en un plano de canto de 60° un cuadrado de 30 mm con un lado en la charnela.", pasos: ["Se dibuja el cuadrado abatido junto a la charnela, con un lado sobre β₁.", "Los vértices del lado opuesto están a 30 mm de la charnela: se suben a la LT y con arco de centro X se llevan a β₂.", "Se bajan a la planta en las paralelas a la LT por sus abatidos."], resultado: "Q₂ es un segmento de 30 mm sobre β₂; Q₁ es un rectángulo de 30 × 30·cos 60° = 30 × 15 mm." },
  ],
  errores: [
    "Unir V₂ con H₁ en lugar de V₂ con H₂ (cada proyección de la intersección se forma con proyecciones homónimas).",
    "Elegir un plano auxiliar que no contenga a la recta al buscar la intersección recta-plano.",
    "Olvidar estudiar la visibilidad y dibujar continua toda la recta que atraviesa un plano o una figura.",
    "En el abatimiento, llevar el punto abatido sobre una paralela a la charnela en lugar de sobre la perpendicular.",
    "Usar como radio de abatimiento la distancia en proyección A₁F, que es solo un cateto, en vez de la hipotenusa.",
    "En un cambio de plano vertical, conservar los alejamientos en lugar de las cotas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué son las trazas de la recta intersección de dos planos?", sol: "V es el corte de las trazas verticales α₂ ∩ β₂ y H el de las horizontales α₁ ∩ β₁. Con ellas: i₂ = V₂H₂ e i₁ = V₁H₁." },
    { nivel: "básico", q: "Dibuja la intersección de un plano oblicuo con un plano horizontal de cota 20 mm.", sol: "Es una horizontal del plano: i₂ coincide con la traza del plano horizontal, a 20 mm sobre la LT; su V₂ está en α₂; V₁ en la LT; i₁ ∥ α₁ por V₁." },
    { nivel: "básico", q: "Dibuja la intersección de un plano oblicuo con un plano frontal de alejamiento 30 mm.", sol: "Es una frontal: i₁ coincide con la traza del plano frontal (30 mm bajo la LT); H₁ en α₁; H₂ en la LT; i₂ ∥ α₂ por H₂." },
    { nivel: "básico", q: "¿Qué propiedad tiene la proyección vertical de la intersección de un plano oblicuo con un plano de canto?", sol: "Está sobre la traza vertical del plano de canto, porque todo lo que contiene ese plano se proyecta sobre su traza vertical." },
    { nivel: "básico", q: "Enumera los tres pasos del método para hallar la intersección de una recta y un plano.", sol: "1) Plano auxiliar (proyectante) que contenga la recta. 2) Intersección de ese plano con el dado. 3) Corte de esa intersección con la recta." },
    { nivel: "básico", q: "Halla la intersección de una recta con un plano proyectante horizontal.", sol: "I₁ = r₁ ∩ β₁ (todo el plano se proyecta horizontalmente sobre β₁) e I₂ sobre r₂ en su línea de referencia." },
    { nivel: "básico", q: "¿Qué es la charnela en un abatimiento?", sol: "La recta alrededor de la cual se gira el plano hasta llevarlo sobre un plano de proyección; normalmente una traza del plano. Sus puntos no se mueven." },
    { nivel: "básico", q: "¿Por qué se abate un plano?", sol: "Para ver en verdadera magnitud las figuras que contiene: longitudes, ángulos y áreas reales." },
    { nivel: "básico", q: "En un giro alrededor de un eje vertical, ¿qué se conserva de cada punto?", sol: "La cota: la proyección vertical se mueve paralela a la LT y la horizontal describe un arco con centro en la proyección del eje." },
    { nivel: "básico", q: "En un cambio de plano vertical, ¿qué se conserva?", sol: "Las proyecciones horizontales y las cotas de los puntos." },
    { nivel: "medio", q: "Halla la intersección de dos planos cuyas trazas verticales son paralelas.", sol: "Si α₂ ∥ β₂, la intersección es una recta frontal paralela a ellas: se halla H = α₁ ∩ β₁, H₂ en la LT, e i₂ ∥ α₂ por H₂; i₁ es paralela a la LT por H₁." },
    { nivel: "medio", q: "Explica cómo hallar la intersección de dos planos cuyas trazas horizontales no se cortan en el papel.", sol: "Se usa un plano auxiliar horizontal o frontal: corta a cada plano en una horizontal (o frontal); el corte de esas dos rectas es un punto de la intersección, que se une con V = α₂ ∩ β₂." },
    { nivel: "medio", q: "Halla la intersección de la recta r con el plano α usando un plano proyectante horizontal.", sol: "β₁ ≡ r₁ y β₂ ⊥ LT. Intersección α ∩ β: H₁ = α₁ ∩ r₁ y V₂ en α₂ sobre la referencia de β₂; i₁ ≡ r₁; i₂ = V₂H₂. I₂ = i₂ ∩ r₂; I₁ en r₁." },
    { nivel: "medio", q: "Halla el punto donde una recta corta a un triángulo ABC dado por sus proyecciones.", sol: "Plano de canto con β₂ ≡ r₂; corta a A₂B₂ y B₂C₂ en 1₂ y 2₂; se bajan a 1₁ y 2₁ en los lados homónimos de la planta; I₁ = 1₁2₁ ∩ r₁; I₂ en r₂." },
    { nivel: "medio", q: "Cómo se decide qué tramo de una recta es visible en planta al atravesar un plano?", sol: "Se compara la cota de un punto de la recta con la del plano en la misma vertical: el tramo por encima del plano se ve; el que está por debajo queda oculto donde el plano lo tapa. El cambio ocurre en I." },
    { nivel: "medio", q: "Abate sobre el PH un punto A de un plano de canto de 30° con A₂ a 50 mm de X.", sol: "Arco de centro X y radio 50 mm hasta la LT; perpendicular a la LT por ese punto; (A) en el corte con la paralela a la LT por A₁. A₁ está a 50·cos 30° ≈ 43,3 mm de la charnela y (A) a 50 mm." },
    { nivel: "medio", q: "Halla la verdadera magnitud de un triángulo contenido en un plano de canto.", sol: "Se abaten los tres vértices sobre el PH alrededor de β₁ (arcos con centro X desde B₂ a la LT y perpendiculares hasta las paralelas a la LT por las proyecciones horizontales) y se unen." },
    { nivel: "medio", q: "Un punto A de un plano oblicuo está a 30 mm de la charnela en planta y tiene 40 mm de cota. ¿A qué distancia de la charnela queda (A)?", sol: "Radio = hipotenusa del triángulo de catetos 30 y 40: √(30² + 40²) = 50 mm." },
    { nivel: "medio", q: "Con un giro de eje vertical, halla la verdadera magnitud de un segmento de proyección horizontal 60 mm y diferencia de cotas 25 mm.", sol: "Se gira hasta dejarlo frontal; A₂B′₂ = √(60² + 25²) = 65 mm y su ángulo con el PH es arctan(25/60) ≈ 22,6°." },
    { nivel: "medio", q: "Resuelve el ejercicio anterior con un cambio de plano.", sol: "LT′ paralela a A₁B₁; por A₁ y B₁ perpendiculares a LT′; sobre ellas, desde LT′, las cotas de A y B. A′₂B′₂ = 65 mm, la misma VM." },
    { nivel: "medio", q: "Propiedades de la afinidad entre la proyección horizontal y el abatimiento de una figura de un plano.", sol: "Eje: la charnela. Dirección: perpendicular a la charnela. Una recta y su abatida se cortan en la charnela. Basta un par de puntos afines para definirla." },
    { nivel: "medio", q: "Dibuja un hexágono regular de 20 mm de lado en un plano de canto de 45°, con su centro a 40 mm de la charnela y 40 mm de alejamiento.", sol: "Hexágono dibujado en el abatimiento con centro (O) a 40 mm de β₁ y 40 mm de la LT; desabatimiento de cada vértice: arco de centro X a β₂ y bajada a la paralela a la LT. La planta es un hexágono comprimido en la dirección perpendicular a la charnela por cos 45° ≈ 0,71." },
    { nivel: "avanzado", q: "Halla la intersección de dos planos paralelos a la LT.", sol: "Su intersección es paralela a la LT. Se dibuja una tercera proyección (perfil): las trazas de perfil de los planos se cortan en un punto P₃; se devuelve a las otras proyecciones: i₂ e i₁ son paralelas a la LT a la cota y el alejamiento de P." },
    { nivel: "avanzado", q: "Halla la intersección de dos triángulos ABC y DEF.", sol: "Se halla el punto de intersección de dos lados de un triángulo con el plano del otro (o de un lado de cada uno con el plano del otro) con el método del plano auxiliar; se unen los dos puntos válidos que caen dentro de ambas figuras y se estudia la visibilidad." },
    { nivel: "avanzado", q: "Halla la VM de un triángulo ABC contenido en un plano oblicuo dado por sus trazas.", sol: "Se abate un vértice con el método del triángulo; los demás por afinidad (eje α₁, dirección perpendicular): cada lado prolongado corta a la charnela en un punto doble, desde el que se traza su abatido. Se unen (A)(B)(C)." },
    { nivel: "avanzado", q: "Dibuja la circunferencia de 25 mm de radio inscrita en un plano de canto de 60°, con centro a 40 mm de la charnela.", sol: "Se dibuja la circunferencia en el abatimiento. Al desabatir, su alzado es un segmento de 50 mm sobre β₂ y su planta, una elipse de ejes 50 mm (paralelo a la charnela) y 50·cos 60° = 25 mm (perpendicular)." },
    { nivel: "avanzado", q: "Halla el ángulo que forma un plano oblicuo con el PH.", sol: "Se traza su línea de máxima pendiente (proyección horizontal perpendicular a α₁) y se halla su VM con un giro o un cambio de plano; el ángulo que forma con el PH en esa VM es el ángulo del plano." },
    { nivel: "avanzado", q: "Mediante dos cambios de plano, obtén la VM de un triángulo de un plano oblicuo.", sol: "Primer cambio: LT′ perpendicular a α₁ (o a h₁): el plano queda de canto y sus puntos se alinean en α′₂. Segundo cambio: LT″ paralela a α′₂, conservando los alejamientos respecto a LT′. La nueva proyección es la VM." },
    { nivel: "avanzado", q: "Por qué el método del triángulo da la distancia real de un punto a la charnela?", sol: "El punto A, su proyección A₁ y el pie F en la charnela forman un triángulo rectángulo en A₁: un cateto vertical (la cota) y otro horizontal (A₁F). La hipotenusa AF es la distancia real, perpendicular a la charnela por el teorema de las tres perpendiculares." },
    { nivel: "avanzado", q: "Una lima de tejado une un punto de la cornisa (cota 6 m) con otro de la cumbrera (cota 9 m), separados 4 m en planta. Calcula su longitud y su inclinación.", sol: "VM = √(4² + 3²) = 5 m. Inclinación respecto a la horizontal: arctan(3/4) ≈ 36,9°. En diédrico, con un giro o un cambio de plano se obtiene la misma VM gráficamente." },
  ],
  quiz: reparte([
    { q: "Dos planos no paralelos se cortan en…", o: ["un punto", "una recta", "un plano", "nada"], a: 1, e: "La intersección." },
    { q: "La traza V de la intersección de α y β está en…", o: ["α₁ ∩ β₁", "α₂ ∩ β₂", "la LT", "α₁ ∩ β₂"], a: 1, e: "Trazas verticales." },
    { q: "i₂ se obtiene uniendo…", o: ["V₂ y H₂", "V₂ y H₁", "V₁ y H₁", "V₁ y H₂"], a: 0, e: "Proyecciones homónimas." },
    { q: "Si β es de canto, la proyección vertical de α ∩ β está en…", o: ["β₁", "β₂", "α₁", "la LT"], a: 1, e: "Proyectante vertical." },
    { q: "La intersección de un plano oblicuo con un plano horizontal es…", o: ["una frontal", "una horizontal del plano", "una recta de punta", "una vertical"], a: 1, e: "Cota constante." },
    { q: "Cuando las trazas no se cortan en el papel se usa…", o: ["un abatimiento", "un plano auxiliar", "una homotecia", "la tercera proyección siempre"], a: 1, e: "Horizontal o frontal." },
    { q: "Para hallar la intersección recta-plano se toma un plano auxiliar que…", o: ["sea paralelo a la recta", "contenga a la recta", "sea perpendicular a la recta", "pase por la LT"], a: 1, e: "Proyectante." },
    { q: "Con un plano de canto, la intersección con una recta se halla en…", o: ["la planta", "el alzado: r₂ ∩ β₂", "el perfil", "ninguna"], a: 1, e: "Inmediata." },
    { q: "En planta se ve el tramo de recta que está…", o: ["debajo del plano", "encima del plano", "detrás del plano", "en la LT"], a: 1, e: "Observador arriba." },
    { q: "En alzado se ve el tramo que está…", o: ["delante del plano", "detrás", "debajo", "fuera del papel"], a: 0, e: "Observador delante." },
    { q: "La charnela es…", o: ["el eje de giro del abatimiento", "la LT siempre", "el centro de homotecia", "una frontal"], a: 0, e: "Normalmente una traza." },
    { q: "Al abatir, un punto se mueve en la…", o: ["paralela a la charnela", "perpendicular a la charnela", "dirección de la LT", "línea de referencia"], a: 1, e: "Plano del giro." },
    { q: "En el método del triángulo el radio es…", o: ["el cateto A₁F", "la hipotenusa", "la cota", "el alejamiento"], a: 1, e: "Distancia real a la charnela." },
    { q: "El cateto que se añade a A₁F en el método del triángulo es…", o: ["el alejamiento", "la cota del punto", "la distancia a X", "la distancia a la LT en planta"], a: 1, e: "Abatimiento sobre PH." },
    { q: "Entre la planta y el abatimiento de una figura hay una…", o: ["homotecia", "afinidad", "simetría central", "traslación"], a: 1, e: "Eje = charnela." },
    { q: "Los puntos de la charnela al abatir…", o: ["giran 90°", "no se mueven", "se duplican", "van a la LT"], a: 1, e: "Dobles." },
    { q: "En un giro de eje vertical la proyección vertical se mueve…", o: ["en arco", "paralela a la LT", "perpendicular a la LT", "no se mueve"], a: 1, e: "Cota constante." },
    { q: "Para obtener la VM de un segmento por giro se lleva a posición…", o: ["de punta", "frontal (o horizontal)", "vertical", "de perfil"], a: 1, e: "Paralelo a un plano de proyección." },
    { q: "En un cambio de plano vertical se conservan…", o: ["los alejamientos", "las cotas", "las proyecciones verticales", "nada"], a: 1, e: "Se conserva el PH." },
    { q: "Para la VM de AB por cambio de plano, LT′ se traza…", o: ["perpendicular a A₁B₁", "paralela a A₁B₁", "por A₂", "a 45°"], a: 1, e: "AB queda frontal." },
  ], 1),
  examen: reparte([
    { q: "Planos con α₁ ∥ β₁ se cortan en una recta…", o: ["frontal", "horizontal", "de punta", "vertical"], a: 1, e: "Paralela a las trazas horizontales." },
    { q: "Punto con A₁F = 24 mm y cota 32 mm: distancia de (A) a la charnela", o: ["24 mm", "32 mm", "40 mm", "56 mm"], a: 2, e: "√(24² + 32²)." },
    { q: "Segmento con proyección horizontal 80 mm y diferencia de cotas 60 mm: VM", o: ["80 mm", "100 mm", "140 mm", "60 mm"], a: 1, e: "√(80² + 60²)." },
    { q: "Circunferencia de 40 mm de diámetro en plano de canto de 60°: eje menor de su planta", o: ["40 mm", "20 mm", "34,6 mm", "0 mm"], a: 1, e: "40 · cos 60°." },
    { q: "Si 1₁2₁ no corta a r₁ dentro del segmento, la recta…", o: ["atraviesa el triángulo", "corta al plano fuera del triángulo", "es paralela", "está en el plano"], a: 1, e: "Punto exterior a la figura." },
    { q: "Al abatir un plano de canto sobre el PH, (β₂) coincide con…", o: ["β₁", "la LT", "una perpendicular a la LT", "β₂"], a: 1, e: "La traza vertical cae sobre el PH." },
    { q: "Con dos cambios de plano un plano oblicuo puede quedar…", o: ["paralelo a un plano de proyección", "de perfil siempre", "en la LT", "sin trazas"], a: 0, e: "Primero proyectante, luego paralelo." },
    { q: "Eje de la afinidad entre planta y abatimiento:", o: ["la LT", "la charnela", "la línea de máxima pendiente", "α₂"], a: 1, e: "Puntos dobles." },
  ], 3),
  feynman: ["Por qué la intersección de dos planos se halla uniendo los cortes de sus trazas", "Para qué sirve un plano auxiliar y cómo se elige", "Cómo se halla el punto donde una recta corta a un plano", "Qué es abatir y por qué el punto se mueve perpendicular a la charnela", "En qué se parecen y en qué se diferencian un giro y un cambio de plano"],
  glosario: [
    ["Intersección", "Conjunto de puntos comunes a dos elementos: una recta entre dos planos, un punto entre recta y plano."],
    ["Plano auxiliar", "Plano sencillo que se introduce para resolver una intersección."],
    ["Plano proyectante", "Plano perpendicular a un plano de proyección; una de sus trazas recoge las proyecciones de sus elementos."],
    ["Visibilidad", "Estudio de qué partes de un elemento se ven y cuáles quedan ocultas por otro."],
    ["Abatimiento", "Giro de un plano alrededor de una de sus rectas hasta hacerlo coincidir con un plano de proyección."],
    ["Charnela", "Recta alrededor de la cual se abate un plano."],
    ["Punto abatido", "Posición (A) de un punto tras el abatimiento."],
    ["Desabatimiento", "Operación inversa: llevar un punto abatido a sus proyecciones."],
    ["Método del triángulo", "Construcción del radio de abatimiento como hipotenusa de un triángulo con la cota como cateto."],
    ["Afinidad ortogonal", "Transformación que relaciona la proyección de una figura con su abatimiento."],
    ["Verdadera magnitud", "Forma y medidas reales de un elemento."],
    ["Giro", "Movimiento de un elemento alrededor de un eje perpendicular a un plano de proyección."],
    ["Eje de giro", "Recta vertical o de punta alrededor de la cual se gira."],
    ["Cambio de plano", "Sustitución de un plano de proyección por otro, con una nueva línea de tierra."],
    ["Línea de tierra nueva (LT′)", "Intersección del plano conservado con el nuevo plano de proyección."],
    ["Montea", "Dibujo a tamaño real usado por canteros y carpinteros para trazar piezas."],
  ],
  situacion: {
    titulo: "La montea de la cubierta",
    reto: "Un taller de carpintería va a construir la estructura de madera de una pérgola con cubierta a dos aguas sobre una planta rectangular. Vuestro grupo debe obtener, mediante diédrico, la longitud real de los pares (vigas inclinadas), la intersección de los faldones y la forma real de cada faldón para encargar los tableros.",
    pasos: [
      "Dibujad a escala 1:50 la planta rectangular de la pérgola y la altura de la cumbrera.",
      "Representad los dos faldones como planos por sus trazas y hallad su intersección (la cumbrera).",
      "Hallad la verdadera magnitud de un par mediante un giro y comprobadla con un cambio de plano.",
      "Abatid un faldón para obtener su forma real y medid su superficie.",
      "Calculad cuántos tableros de 2,5 × 1,25 m harán falta y comparad el resultado con el cálculo numérico.",
    ],
    producto: "Lámina A3 con la pérgola en diédrico, las construcciones de verdadera magnitud y una tabla de despiece con medidas.",
    evaluacion: [
      "La intersección de los faldones está bien hallada y coincide con la cumbrera.",
      "Las verdaderas magnitudes obtenidas por métodos distintos coinciden.",
      "El abatimiento del faldón es correcto y la superficie está bien calculada.",
      "La lámina es precisa, limpia y diferencia vistas, auxiliares y resultados.",
    ],
  },
  figura: fig("Intersecciones y abatimientos", "Resumen de las operaciones del diédrico para hallar intersecciones y verdaderas magnitudes", [
    ["Plano ∩ plano", ["V = α₂ ∩ β₂", "H = α₁ ∩ β₁", "i₂ = V₂H₂", "plano auxiliar"], "var(--pen)"],
    ["Recta ∩ plano", ["plano proyectante", "por la recta", "i ∩ r = I", "visibilidad"], "var(--leaf)"],
    ["Abatimiento", ["charnela = traza", "⊥ a la charnela", "radio = hipotenusa", "afinidad"], "var(--red)"],
    ["Giro y cambio", ["eje vertical", "cota constante", "LT′ ∥ A₁B₁", "VM del segmento"], "var(--inf)"],
  ]),
  video: { id: "UK4rLmkK0KE", titulo: "Intersección entre dos planos en sistema diédrico", canal: "PDD Profesor de Dibujo", vistas: 240547, busqueda: "intersección de planos diédrico" },
  mapa: mapa("INTERSECCIONES Y VM", "var(--bac)", [
    ["Intersecciones", "plano-plano · recta-plano", "var(--pen)"],
    ["Visibilidad", "vista · oculta", "var(--leaf)"],
    ["Abatimientos", "charnela · triángulo · afinidad", "var(--red)"],
    ["Giros y cambios", "eje · LT′ · VM", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Intersección de planos", "V = α₂ ∩ β₂, H = α₁ ∩ β₁; i₂ = V₂H₂, i₁ = V₁H₁."],
    ["Plano de canto ∩ α", "i₂ está sobre β₂."],
    ["Plano horizontal ∩ α", "Una horizontal de α."],
    ["Plano auxiliar", "Corta a ambos planos en rectas sencillas que se cortan en un punto de la solución."],
    ["Recta ∩ plano", "Plano proyectante por r; i = α ∩ β; I = i ∩ r."],
    ["Visibilidad en planta", "Se ve lo que está más alto."],
    ["Charnela", "Eje del abatimiento; sus puntos son dobles."],
    ["Punto abatido", "Sobre la perpendicular a la charnela por la proyección."],
    ["Método del triángulo", "Catetos: A₁F y la cota; hipotenusa = radio."],
    ["Afinidad", "Eje: charnela. Dirección: perpendicular a ella."],
    ["Giro de eje vertical", "Arco en planta; paralela a la LT en alzado."],
    ["Cambio de plano vertical", "Se conservan las cotas; LT′ ∥ A₁B₁ da la VM."],
  ],
  familias: ["Doblad una hoja como un tejado a dos aguas y marcad la cumbrera: es la intersección de dos planos.", "Abrid y cerrad una puerta: gira alrededor de las bisagras como un plano alrededor de su charnela.", "Medid una escalera de mano apoyada en la pared y comprobad el teorema de Pitágoras con su altura y su separación.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema diédrico, intersecciones de planos y de recta con plano, visibilidad, abatimientos, giros y cambios de plano, verdadera magnitud (RD 243/2022, Dibujo Técnico I, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic I, sistemes de representació).",
    ideas: ["Maquetas de cartulina con planos que se cortan, atravesadas por un palillo (recta).", "Comparar abatimiento, giro y cambio de plano resolviendo el mismo problema por los tres métodos.", "GeoGebra 3D para visualizar el giro de un plano alrededor de su charnela.", "Proyecto de cubiertas: aplicación real a tejados y pérgolas."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Geometría descriptiva, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Geometr%C3%ADa_descriptiva" },
    { t: "Estereotomía (construcción), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Estereotom%C3%ADa_(construcci%C3%B3n)" },
  ],
  revisado: "2026-11-14",
};
