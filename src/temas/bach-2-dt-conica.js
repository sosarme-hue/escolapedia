// Dibujo Técnico II 2º Bachillerato · Tema 12. Nivel libro. Perspectiva cónica calculada en 3D (proyección central).
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, dist, unit, add, sub, mul, tx, dash, v3, envolvente, polVista, vistaConica, conica, giroZ, P2, circ, recto } = G;

const L = (P, s, dx, dy, c = "var(--ink)", a = "start", sz = 11) => tx(P[0] + dx, P[1] + dy, s, { s: sz, b: 1, a, c });
const curva = (pts, c = "var(--red)", w = 2.2, cerrada = false, fill = 0, extra = "") => `<path d="M${pts.map(P2).join(" L ")}${cerrada ? " Z" : ""}" fill="${fill ? c : "none"}" fill-opacity="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;
const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));
const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const caja = (x0, y0, z0, a, b, c) => envolvente([0, 1].flatMap((i) => [0, 1].flatMap((j) => [0, 1].map((k) => [x0 + i * a, y0 + j * b, z0 + k * c]))));
const fina = (A, B, c = "var(--muted)") => seg(A, B, c, 1, dash);
// Cámara cónica: O es la traza en pantalla del pie del punto principal sobre la LT; D, distancia principal; h, altura del punto de vista.
const cam = (O, D, h, k = 1) => { const V = vistaConica(O, D, h, k, 0); return { ...V, LH: O[1] - h * k, Pp: [O[0], O[1] - h * k], F: (u) => [O[0] + (D * u[0] * k) / u[1], O[1] - (h + (D * u[2]) / u[1]) * k] }; };
const LHt = (C, x0 = 6, x1 = 254) => `${seg([x0, C.LH], [x1, C.LH], "var(--pen)", 1.2)}${tx(x0 + 2, C.LH - 4, "LH", { s: 10, b: 1, a: "start", c: "var(--pen)" })}`;
const LTt = (y, x0 = 6, x1 = 254) => `${seg([x0, y], [x1, y], "var(--ink)", 1.4)}${tx(x1 - 2, y - 4, "LT", { s: 10, b: 1, a: "end", c: "var(--ink)" })}`;

// 12.1 Fundamento visto de perfil.
const s1 = (() => {
  const g = 150, Vp = [34, 88], cx = 112, A = [214, 104], B = [214, g], cut = (Q) => [cx, Vp[1] + ((Q[1] - Vp[1]) * (cx - Vp[0])) / (Q[0] - Vp[0])], A1 = cut(A), B1 = cut(B);
  return dib("Fundamento de la perspectiva cónica visto de perfil: el ojo V está a una altura h sobre el plano geometral y a una distancia d del cuadro; la perspectiva de cada punto es la intersección del rayo visual con el cuadro", `${seg([8, g], [252, g], "var(--ink)", 1.6)}${seg([cx, g], [cx, 26], "var(--pen)", 2.6)}${fina(Vp, [cx, Vp[1]], "var(--pen)")}${seg([Vp[0], Vp[1]], [Vp[0], g], "var(--muted)", 1, dash)}${poli([[204, g], [224, g], [224, A[1]], [204, A[1]]], "var(--leaf)", 2, "var(--leaf)", 0.15)}${seg(Vp, A, "var(--red)", 1.4)}${seg(Vp, B, "var(--red)", 1.4)}${seg(A1, B1, "var(--red)", 3.4)}${pt(Vp, "V", -12, -4, "var(--red)")}${pt(A1, "A′", 6, -4, "var(--red)")}${pt(B1, "B′", 6, 12, "var(--red)")}${pt(A, "A", 6, -6)}${pt(B, "B", 6, 14)}${L([Vp[0], (Vp[1] + g) / 2], "h", -14, 4, "var(--muted)")}${L([(Vp[0] + cx) / 2, Vp[1]], "d", 0, -6, "var(--pen)", "middle")}${L([cx, 26], "cuadro", 6, 8, "var(--pen)")}` + tx(140, 170, "plano geometral", { s: 10.5, b: 1, a: "end", c: "var(--ink)" }) + tx(8, 22, "rayos visuales desde V", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 12.2 Elementos sobre el cuadro.
const s2 = (() => {
  const Pp = [130, 84], d = 92, D1 = [Pp[0] - d, Pp[1]], D2 = [Pp[0] + d, Pp[1]], r60 = d * Math.tan(Math.PI / 6);
  return dib("Elementos del sistema cónico sobre el cuadro: línea de tierra LT, línea de horizonte LH a la altura h del ojo, punto principal P, círculo de distancia de radio d con los puntos de distancia D1 y D2, y el cono visual de 60°", clip(`${seg([4, Pp[1]], [256, Pp[1]], "var(--pen)", 1.4)}${seg([4, 156], [256, 156], "var(--ink)", 1.6)}${circ(Pp, d, "var(--muted)", 1.2, 'stroke-dasharray="4 3"')}${circ(Pp, r60, "var(--leaf)", 2, 'fill="var(--leaf)" fill-opacity=".08"')}${seg(Pp, [Pp[0], 156], "var(--muted)", 1, dash)}${pt(Pp, "P", 6, -6, "var(--red)")}${pt(D1, "D1", -4, -6, "var(--red)")}${pt(D2, "D2", 4, -6, "var(--red)")}${pt([Pp[0], 156], "P′", 6, -6)}`, "c12s2") + tx(10, 150, "LT", { s: 10.5, b: 1, a: "start", c: "var(--ink)" }) + tx(10, 98, "LH", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }) + L([Pp[0] + 8, 118], "h", 0, 0, "var(--muted)") + tx(250, 172, "cono visual 60°", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }) + tx(250, 22, "círculo de distancia", { s: 10.5, b: 1, a: "end", c: "var(--muted)" }));
})();

// 12.3 Rectas y puntos de fuga.
const s3 = (() => {
  const C = cam([130, 160], 100, 80, 1), F45 = C.F([1, 1, 0]), lejos = 2000;
  const perp = [-90, -45, 45, 90].map((x) => seg(C.P([x, 0, 0]), C.P([x, lejos, 0]), "var(--pen)", 1.8)).join("");
  return dib("Rectas en perspectiva cónica: las perpendiculares al cuadro fugan al punto principal P; las horizontales a 45°, a los puntos de distancia; las paralelas al cuadro conservan su dirección; las rectas paralelas entre sí tienen el mismo punto de fuga", clip(`${LHt(C)}${LTt(160)}${perp}${seg(C.P([-110, 0, 0]), F45, "var(--red)", 2)}${seg(C.P([-40, 0, 0]), F45, "var(--red)", 2)}${seg(C.P([-110, 60, 0]), C.P([110, 60, 0]), "var(--leaf)", 2.2)}${seg(C.P([60, 30, 0]), C.P([60, 30, 50]), "var(--leaf)", 2.2)}${pt(C.Pp, "P", 6, -6, "var(--pen)")}${pt(F45, "D2", -22, -6, "var(--red)")}`, "c12s3") + tx(250, 22, "paralelas → mismo punto de fuga", { s: 10.5, b: 1, a: "end", c: "var(--ink)" }) + tx(250, 176, "frontales y verticales: sin fuga", { s: 10, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 12.4 Perspectiva frontal de prismas.
const s4 = (() => {
  const C = cam([130, 160], 170, 70, 1), cubos = [caja(-120, 10, 0, 50, 50, 50), caja(50, 20, 0, 60, 40, 40), caja(-74, 40, 100, 50, 40, 30)];
  const fug = cubos.map((p) => p.V.filter((q) => q[1] === Math.min(...p.V.map((r) => r[1]))).map((q) => fina(C.P(q), C.Pp, "var(--muted)")).join("")).join("");
  return dib("Perspectiva cónica frontal (un punto de fuga): las caras paralelas al cuadro se ven sin deformar su forma; las aristas perpendiculares fugan a P; un prisma por debajo de la LH muestra su cara superior y uno por encima, la inferior", `${LHt(C)}${LTt(160)}${fug}${cubos.map((p, i) => polVista(p, C.P, C.w, ["var(--red)", "var(--leaf)", "var(--inf)"][i], 0.14, 2)).join("")}${pt(C.Pp, "P", 6, -6, "var(--pen)")}`);
})();

// 12.5 Método de los puntos de distancia: embaldosado.
const s5 = (() => {
  const C = cam([130, 166], 112, 100, 1), D2 = C.F([1, 1, 0]), t = 30, n = 6, x0 = -90;
  const celdas = rango(n * n, (k) => { const i = k % n, j = Math.floor(k / n), q = [[x0 + i * t, j * t, 0], [x0 + (i + 1) * t, j * t, 0], [x0 + (i + 1) * t, (j + 1) * t, 0], [x0 + i * t, (j + 1) * t, 0]].map(C.P); return (i + j) % 2 ? poli(q, "var(--pen)", 0.8, "var(--pen)", 0.22) : poli(q, "var(--pen)", 0.8, "none", 0); }).join("");
  const fugas = rango(n + 1, (i) => fina(C.P([x0 + i * t, 0, 0]), C.Pp, "var(--muted)")).join(""), diag = seg(C.P([x0, 0, 0]), D2, "var(--red)", 1.8);
  const marcas = rango(n, (j) => pt(C.P([x0 + (j + 1) * t, (j + 1) * t, 0]), "", 0, 0, "var(--red)")).join("");
  return dib("Embaldosado por el método de los puntos de distancia: las rectas de profundidad fugan a P y la diagonal a 45° fuga a D2; sus cortes con las rectas de profundidad dan las filas de baldosas, es decir, miden profundidades", `${LHt(C)}${LTt(166)}${fugas}${celdas}${diag}${marcas}${pt(C.Pp, "P", 6, -6, "var(--pen)")}${pt(D2, "D2", -22, -6, "var(--red)")}` + tx(250, 22, "la diagonal mide las profundidades", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 12.6 Perspectiva oblicua: dos puntos de fuga.
const s6 = (() => {
  const C = cam([130, 166], 140, 130, 0.8), g = giroZ(45), cu = envolvente(caja(0, 0, 0, 74, 74, 74).V.map(g).map((p) => [p[0], p[1] + 10, p[2]])), F1 = C.F(g([-1, 0, 0]).map((v) => -v)), F2 = C.F(g([0, 1, 0]));
  const vis = cu.V.filter((p) => p[2] === 0 || p[2] === 56).map((p) => C.P(p));
  const fug = cu.V.filter((p) => p[1] < 80).map((p) => `${fina(C.P(p), F1)}${fina(C.P(p), F2)}`).join("");
  return dib("Perspectiva cónica oblicua (dos puntos de fuga): el cubo tiene sus caras verticales oblicuas al cuadro; las aristas horizontales de cada dirección fugan a F1 o F2, sobre la LH, y las verticales siguen verticales", clip(`${LHt(C)}${LTt(166)}${fug}${polVista(cu, C.P, C.w, "var(--red)", 0.14, 2.2)}${pt(F1, "F1", -4, 14, "var(--pen)")}${pt(F2, "F2", 4, 14, "var(--pen)")}`, "c12s6") + tx(250, 176, "verticales: siguen verticales", { s: 10, b: 1, a: "end", c: "var(--ink)" }) + (vis.length ? "" : ""));
})();

// 12.7 Método de las prolongaciones (del arquitecto): planta y perspectiva.
const s7 = (() => {
  const s = 0.7, tr = 58, D = 92, pl = (p) => [130 + p[0] * s, tr - p[1] * s], Vp = pl([0, -D]), g = giroZ(30), base = [[0, 0], [58, 0], [58, 36], [0, 36]].map((q) => g([q[0], q[1], 0])).map((p) => [p[0] - 24, p[1] + 6, 0]);
  const pr = envolvente([...base, ...base.map((p) => [p[0], p[1], 50])]), C = cam([130, 172], D, 30, s), cortes = base.map((p) => [130 + ((p[0] * D) / (D + p[1])) * s, tr]);
  const u1 = g([1, 0, 0]), u2 = g([0, 1, 0]), F1 = C.F(u1), F2 = C.F(u2), f1 = [F1[0], tr], f2 = [F2[0], tr];
  return dib("Método de las prolongaciones o del arquitecto: en la planta se unen los vértices con el punto de vista V y los cortes con la traza del cuadro se bajan a la perspectiva; las paralelas por V a las aristas dan los puntos de fuga F1 y F2", `${seg([10, tr], [250, tr], "var(--pen)", 1.6)}${poli(base.map(pl), "var(--leaf)", 2, "var(--leaf)", 0.18)}${base.map((p) => seg(pl(p), Vp, "var(--muted)", 0.9)).join("")}${seg(Vp, f1, "var(--pen)", 1, dash)}${seg(Vp, f2, "var(--pen)", 1, dash)}${cortes.map((P) => `${pt(P, "", 0, 0, "var(--red)")}${fina(P, [P[0], 168], "var(--red)")}`).join("")}${fina(f1, F1, "var(--pen)")}${fina(f2, F2, "var(--pen)")}${pt(Vp, "V", -10, 4, "var(--red)")}${seg([10, C.LH], [250, C.LH], "var(--pen)", 1)}${seg([10, 172], [250, 172], "var(--ink)", 1.2)}${polVista(pr, C.P, C.w, "var(--red)", 0.16, 2)}${pt(F1, "F1", 4, -5, "var(--pen)", 10)}${pt(F2, "F2", -4, -5, "var(--pen)", 10)}` + tx(250, tr - 4, "traza del cuadro", { s: 10, b: 1, a: "end", c: "var(--pen)" }) + tx(10, 22, "planta", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }) + tx(10, C.LH - 4, "LH", { s: 10, b: 1, a: "start", c: "var(--pen)" }));
})();

// 12.8 Escala de alturas.
const s8 = (() => {
  const C = cam([130, 164], 120, 70, 1), H = 46, xs = -110, F = [214, C.LH], post = [[-40, 40], [20, 120], [70, 20], [-80, 200]];
  const Fp = (y) => { const b = C.P([xs, y, 0]), t2 = C.P([xs, y, H]); return [b, t2]; };
  const cols = post.map(([x, y]) => { const b = C.P([x, y, 0]), t2 = C.P([x, y, H]), [sb, st] = Fp(y); return `${fina(sb, b, "var(--muted)")}${fina(st, t2, "var(--muted)")}${seg(b, t2, "var(--leaf)", 4)}`; }).join("");
  return dib("Escala de alturas: una altura real se levanta en la línea de tierra (en el cuadro) y se lleva hacia el fondo uniendo sus extremos con un punto de fuga; cualquier objeto de esa altura, a la misma profundidad, tiene la misma altura aparente", `${LHt(C)}${LTt(164)}${seg(C.P([xs, 0, 0]), C.P([xs, 0, H]), "var(--red)", 4)}${seg(C.P([xs, 0, 0]), C.Pp, "var(--red)", 1.4)}${seg(C.P([xs, 0, H]), C.Pp, "var(--red)", 1.4)}${cols}${pt(C.Pp, "P", 6, -6, "var(--pen)")}` + tx(10, 22, "altura real en el cuadro", { s: 10.5, b: 1, a: "start", c: "var(--red)" }) + tx(250, 176, "misma altura a cualquier profundidad", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }) + (F ? "" : ""));
})();

// 12.9 Circunferencias.
const s9 = (() => {
  const C = cam([130, 166], 130, 92, 1), r = 46, n = 90, Cs = [-60, 6, 0], Cf = [74, 40, 46], rf = 30;
  const sq = [[-r, -r], [r, -r], [r, r], [-r, r]].map(([a, b]) => C.P([Cs[0] + a, Cs[1] + r + b, 0]));
  const cs = rango(n, (i) => { const t = (2 * Math.PI * i) / n; return C.P([Cs[0] + r * Math.cos(t), Cs[1] + r + r * Math.sin(t), 0]); });
  const sqf = [[-rf, -rf], [rf, -rf], [rf, rf], [-rf, rf]].map(([a, b]) => C.P([Cf[0] + a, Cf[1], Cf[2] + b])), cf = rango(n, (i) => { const t = (2 * Math.PI * i) / n; return C.P([Cf[0] + rf * Math.cos(t), Cf[1], Cf[2] + rf * Math.sin(t)]); });
  return dib("Circunferencias en cónica: una circunferencia paralela al cuadro se ve como circunferencia (reducida); una horizontal se ve como elipse inscrita en su cuadrado en perspectiva, con su centro aparente desplazado hacia el fondo", `${LHt(C)}${LTt(166)}${poli(sq, "var(--pen)", 1.4, "none")}${seg(sq[0], sq[2], "var(--muted)", 1, dash)}${seg(sq[1], sq[3], "var(--muted)", 1, dash)}${curva(cs, "var(--red)", 2.4, true, 0.12)}${poli(sqf, "var(--pen)", 1.4, "none")}${curva(cf, "var(--leaf)", 2.4, true, 0.12)}${pt(C.Pp, "P", 6, -6, "var(--pen)")}` + tx(10, 22, "horizontal: elipse", { s: 10.5, b: 1, a: "start", c: "var(--red)" }) + tx(250, 22, "frontal: circunferencia", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 12.10 Elección del punto de vista.
const s10 = (() => {
  const panel = (x, D, k, col) => { const C = cam([x, 150], D, 78, k), cu = caja(-25, 4, 0, 50, 50, 50); return `${seg([x - 60, C.LH], [x + 60, C.LH], "var(--pen)", 1)}${polVista(cu, C.P, C.w, col, 0.14, 2)}${pt(C.Pp, "", 0, 0, "var(--pen)")}`; };
  return dib("Elección del punto de vista: con la distancia demasiado corta el objeto sale del cono visual de 60° y se deforma; con una distancia de unas dos veces la dimensión mayor la imagen es natural", `${panel(66, 34, 1.3, "var(--red)")}${panel(194, 160, 1.3, "var(--leaf)")}${seg([130, 30], [130, 160], "var(--muted)", 1, dash)}` + tx(66, 172, "d muy corta: deformación", { s: 10.5, b: 1, a: "middle", c: "var(--red)" }) + tx(194, 172, "d adecuada", { s: 10.5, b: 1, a: "middle", c: "var(--leaf)" }));
})();

// 12.11 Interior en perspectiva frontal.
const s11 = (() => {
  const C = cam([130, 176], 100, 55, 1.2), W = 80, Z = 112, Y = 140, P = C.P;
  const suelo = rango(9, (i) => seg(P([-W + i * 20, 0, 0]), P([-W + i * 20, Y, 0]), "var(--muted)", 0.8)).join("") + rango(7, (j) => seg(P([-W, j * 20 + 20, 0]), P([W, j * 20 + 20, 0]), "var(--muted)", 0.8)).join("");
  const fondo = [[-W, Y, 0], [W, Y, 0], [W, Y, Z], [-W, Y, Z]].map(P), esq = [[-W, 0, 0], [W, 0, 0], [W, 0, Z], [-W, 0, Z]].map(P);
  const ventana = [[-W, 40, 44], [-W, 96, 44], [-W, 96, 92], [-W, 40, 92]].map(P), puerta = [[40, Y, 0], [70, Y, 0], [70, Y, 80], [40, Y, 80]].map(P), cuadro = [[-44, Y, 50], [-10, Y, 50], [-10, Y, 76], [-44, Y, 76]].map(P);
  return dib("Interior en perspectiva cónica frontal: la pared del fondo, paralela al cuadro, se ve en su forma real reducida; el suelo, el techo y las paredes laterales fugan al punto principal, situado a la altura de los ojos", clip(`${suelo}${poli(fondo, "var(--pen)", 2.2, "var(--pen)", 0.08)}${esq.map((Q, i) => seg(Q, fondo[i], "var(--pen)", 2.2)).join("")}${poli(ventana, "var(--inf)", 2, "var(--inf)", 0.2)}${poli(puerta, "var(--red)", 2, "var(--red)", 0.18)}${poli(cuadro, "var(--leaf)", 2, "var(--leaf)", 0.2)}${seg([0, C.LH], [260, C.LH], "var(--pen)", 1, dash)}${pt(C.Pp, "P", 6, -6, "var(--pen)")}`, "c12s11"));
})();

// 12.12 Tres puntos de fuga: cuadro inclinado (contrapicado).
const s12 = (() => {
  const D = 90, h = 8, b = (22 * Math.PI) / 180, E = [0, -D, h];
  const rot = (p) => { const q = v3.sub(p, E), y = q[1] * Math.cos(b) + q[2] * Math.sin(b), z = -q[1] * Math.sin(b) + q[2] * Math.cos(b); return v3.add([q[0], y, z], E); };
  const g = giroZ(40), ed = envolvente(caja(0, 0, 0, 44, 44, 150).V.map(g).map((p) => [p[0] - 8, p[1] + 26, p[2]])), w = (f, pol) => { const c = f.idx.reduce((s, i) => v3.add(s, pol.V[i]), [0, 0, 0]).map((v) => v / f.idx.length); return v3.sub(E, c); };
  const Q0 = ed.V.map((p) => conica([0, 0], D, h, 1)(rot(p))), xs = Q0.map((q) => q[0]), ys = Q0.map((q) => q[1]), k = 136 / (Math.max(...ys) - Math.min(...ys)), O = [130 - ((Math.min(...xs) + Math.max(...xs)) / 2) * k, 88 - ((Math.min(...ys) + Math.max(...ys)) / 2) * k];
  const Pr = (p) => conica(O, D, h, k)(rot(p)), byXY = (x, y, z) => ed.V.find((p) => Math.abs(p[0] - x) < 1e-6 && Math.abs(p[1] - y) < 1e-6 && Math.abs(p[2] - z) < 1e-6);
  const prol = ed.V.filter((p) => p[2] > 1).map((T) => { const B = Pr([T[0], T[1], 0]), Tp = Pr(T), u = unit(B, Tp); return fina(Tp, add(Tp, mul(u, 40))); }).join("");
  return dib("Perspectiva de tres puntos de fuga: si el cuadro se inclina (visión en contrapicado desde abajo), también las verticales convergen hacia un tercer punto de fuga F3, muy por encima del dibujo", clip(`${prol}${polVista(ed, Pr, w, "var(--red)", 0.14, 2.2)}`, "c12s12") + tx(10, 176, "verticales → F3 (fuera del dibujo)", { s: 10, b: 1, a: "start", c: "var(--ink)" }) + tx(10, 22, "cuadro inclinado", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }) + (byXY ? "" : ""));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Perspectiva cónica",
  minutos: 110,
  objetivos: [
    "Comprender el fundamento de la proyección central y sus elementos",
    "Hallar puntos de fuga de rectas y medir profundidades con los puntos de distancia",
    "Dibujar perspectivas cónicas frontales y oblicuas de cuerpos sencillos",
    "Aplicar el método de las prolongaciones (del arquitecto) a partir de la planta",
    "Representar alturas y circunferencias en perspectiva cónica",
    "Elegir un punto de vista adecuado y valorar la perspectiva de tres puntos de fuga",
  ],
  claves: ["proyección central", "cuadro", "punto de vista", "línea de horizonte", "línea de tierra", "punto principal", "punto de fuga", "puntos de distancia", "círculo de distancia", "cono visual", "perspectiva frontal", "perspectiva oblicua", "método del arquitecto"],
  lectura: {
    titulo: "La ventana de Alberti",
    html: `<p>En 1435, el arquitecto Leon Battista Alberti describió la pintura como «una ventana abierta por la que se mira lo que se va a pintar». Si se dibuja sobre el vidrio de esa ventana lo que se ve a través de él, con un ojo fijo, se obtiene una <b>perspectiva cónica</b> exacta. Poco antes, Filippo Brunelleschi había demostrado el método con una tabla pintada del baptisterio de Florencia que se miraba a través de un agujero.</p>
    <p>Durero dibujó máquinas para hacerlo: un hilo tenso desde un punto fijo hasta el objeto, y un marco que registraba dónde cortaba el hilo. Ese hilo es un <b>rayo visual</b>, el punto fijo es el <b>punto de vista</b> y el marco es el <b>cuadro</b>.</p>
    <p>Hoy el mismo modelo matemático (la proyección central) está dentro de cada cámara de fotos y de cada videojuego: la tarjeta gráfica calcula millones de veces por segundo dónde corta el rayo visual a la pantalla.</p>`,
  },
  pregunta: {
    texto: "Las vías del tren son paralelas, pero en una foto parecen juntarse. ¿Dónde se juntan exactamente?",
    respuesta: "En su <mark>punto de fuga</mark>: el punto del cuadro donde lo corta la recta paralela a las vías trazada desde el ojo. Como las vías son horizontales, ese punto está en la línea de horizonte, a la altura de los ojos.",
  },
  bloques: [
    {
      html: `<h3>12.1 Fundamento de la proyección cónica</h3><p>La perspectiva cónica es una <b>proyección central</b>: todos los rayos proyectantes parten de un mismo punto, el <b>punto de vista</b> V (el ojo del observador). La imagen de cada punto A del espacio es el punto A′ donde el rayo VA corta al <b>cuadro</b>, un plano vertical situado entre el observador y el objeto.</p><p>Por eso es el sistema que mejor imita la visión humana y la fotografía: los objetos lejanos se ven más pequeños y las rectas paralelas parecen converger. A cambio, <b>no conserva las medidas ni el paralelismo</b>, y medir sobre el dibujo exige construcciones especiales.</p><p>Los datos que definen una perspectiva son:</p><ul><li>La <b>altura h</b> del punto de vista sobre el plano del suelo (plano geometral).</li><li>La <b>distancia d</b> del punto de vista al cuadro (distancia principal).</li><li>La <b>posición</b> del objeto respecto del cuadro.</li></ul><p>Los objetos detrás del cuadro se reducen; los que estén delante (entre el cuadro y el ojo) se ampliarían, por eso se suele colocar el objeto detrás o apoyado en el cuadro.</p>`,
      svg: s1,
      video: { id: "-a7vS-DR62w", titulo: "Introducción al sistema cónico de representación", canal: "Curso de Dibujo Técnico", vistas: 83139, busqueda: "introducción sistema cónico" },
    },
    {
      html: `<h3>12.2 Elementos del sistema</h3><ul><li><b>Plano geometral</b> (PG): plano horizontal del suelo, donde se apoyan los objetos.</li><li><b>Cuadro</b> (PC): plano vertical de proyección.</li><li><b>Línea de tierra</b> (LT): intersección del cuadro y el geometral.</li><li><b>Plano de horizonte</b> (PH): plano horizontal que pasa por el ojo. Corta al cuadro en la <b>línea de horizonte</b> (LH), a una altura h sobre la LT.</li><li><b>Punto principal</b> P: pie de la perpendicular desde V al cuadro. Está en la LH.</li><li><b>Círculo de distancia</b>: circunferencia de centro P y radio d dibujada en el cuadro.</li><li><b>Puntos de distancia</b> D1 y D2: cortes del círculo de distancia con la LH; son los puntos de fuga de las horizontales a 45° con el cuadro.</li><li><b>Cono visual</b>: cono de vértice V y eje VP dentro del cual la imagen se ve sin deformaciones. Su abertura recomendada es de unos <b>60°</b>, es decir, un círculo de radio d·tan 30° ≈ 0,58·d alrededor de P.</li></ul>`,
      svg: s2,
    },
    {
      html: `<h3>12.3 Perspectiva de rectas: puntos de fuga</h3><p>El <b>punto de fuga</b> de una recta es la perspectiva de su punto del infinito. Se obtiene trazando por V la paralela a la recta y hallando su intersección con el cuadro. Consecuencias:</p><ul><li><b>Rectas paralelas</b> tienen el <b>mismo punto de fuga</b> y en perspectiva concurren en él.</li><li>Las rectas <b>horizontales</b> fugan en la <b>LH</b>, porque su paralela por V está en el plano de horizonte.</li><li>Las <b>perpendiculares al cuadro</b> fugan al punto principal P.</li><li>Las horizontales a <b>45°</b> fugan a los puntos de distancia D1 o D2.</li><li>Las rectas <b>paralelas al cuadro</b> no tienen punto de fuga (la paralela por V no lo corta): se ven paralelas a su dirección real. Por eso las verticales siguen siendo verticales.</li></ul><p>Para dibujar una recta basta conocer su <b>traza</b> (punto donde corta al cuadro, que se ve en verdadera posición) y su punto de fuga: la perspectiva es la recta que los une.</p>`,
      svg: s3,
    },
    {
      html: `<h3>12.4 Perspectiva frontal</h3><p>En la <b>perspectiva frontal</b> (o paralela, de un punto de fuga) el objeto tiene una de sus caras paralela al cuadro. Entonces:</p><ul><li>Las aristas paralelas al cuadro (horizontales frontales y verticales) se dibujan paralelas a sí mismas.</li><li>Las aristas perpendiculares al cuadro fugan al punto principal P.</li><li>Las caras frontales se ven con su forma real, reducida según su profundidad.</li></ul><p>Si el objeto está por debajo de la LH se ve su cara superior; si está por encima, la inferior; si la LH lo atraviesa, no se ven ni la superior ni la inferior. Del mismo modo, a la izquierda de P se ve la cara lateral derecha, y a la derecha la izquierda.</p><p>La frontal es la perspectiva habitual de interiores, calles y pasillos, porque transmite simetría y profundidad.</p>`,
      svg: s4,
    },
    {
      html: `<h3>12.5 Medir profundidades: puntos de distancia</h3><p>En perspectiva no se pueden llevar las profundidades con la regla. Se usa el <b>método de los puntos de distancia</b>:</p><ol><li>Por la traza A de una recta de profundidad (perpendicular al cuadro) se traza la recta que fuga a P.</li><li>Sobre la LT se lleva, a partir de A, la profundidad real d₁ que se quiere medir, obteniendo el punto M.</li><li>Se une M con el punto de distancia D (del lado contrario). Como la recta MD es una horizontal a 45°, forma con AP un triángulo rectángulo isósceles: corta a AP en el punto que está a la profundidad d₁.</li></ol><p>Así se construye el <b>embaldosado</b>: las juntas de profundidad fugan a P y la diagonal del enlosado fuga a D, y sus cortes dan las juntas transversales. El embaldosado sirve después de cuadrícula para colocar cualquier objeto en planta.</p><p>Si D cae fuera del papel se usan <b>puntos de distancia reducidos</b> (D/2, D/3), llevando en la LT la mitad o la tercera parte de la profundidad.</p>`,
      svg: s5,
      video: { id: "txLOO2z-FeA", titulo: "Cómo medir en perspectiva con dos puntos de fuga", canal: "Juan Marcel Francia", vistas: 74603, busqueda: "medir en perspectiva cónica" },
    },
    {
      html: `<h3>12.6 Perspectiva oblicua</h3><p>En la <b>perspectiva oblicua</b> (o angular, de dos puntos de fuga) el objeto tiene sus caras verticales oblicuas al cuadro. Sus aristas horizontales siguen dos direcciones, cada una con su punto de fuga <b>F1</b> y <b>F2</b> sobre la LH; las verticales siguen siendo verticales.</p><p>Si las dos direcciones son perpendiculares en planta, los rayos VF1 y VF2 forman 90° en el plano de horizonte. En el dibujo, F1 y F2 quedan a ambos lados de P, y cuanto más se acerca uno a P más se aleja el otro.</p><p>Es la perspectiva más usada en arquitectura y diseño de producto porque da imágenes dinámicas y muestra dos fachadas a la vez. Su inconveniente práctico es que los puntos de fuga suelen caer fuera del papel; se recurre entonces a puntos de fuga reducidos o a la construcción desde la planta.</p><p>Para que la imagen sea natural se recomienda que la arista más cercana quede dentro del cono visual y que los ángulos con el cuadro sean de 30°/60° o 45°/45°.</p>`,
      svg: s6,
      video: { id: "-ZQfU6V3COA", titulo: "Perspectiva cónica de un cubo con dos puntos de fuga", canal: "Arturo Geometría", vistas: 62702, busqueda: "perspectiva cónica cubo dos puntos de fuga" },
    },
    {
      html: `<h3>12.7 Método de las prolongaciones o del arquitecto</h3><p>Es el método general para dibujar una perspectiva a partir de la <b>planta</b> y el <b>alzado</b>:</p><ol><li>En la planta se dibuja la <b>traza del cuadro</b> (una recta) y el punto de vista V a la distancia d.</li><li>Se colocan el objeto en planta y, si conviene, las paralelas por V a sus direcciones principales, que cortan a la traza del cuadro en los puntos de fuga F1 y F2.</li><li>Se unen los vértices de la planta con V. Los cortes de esos rayos con la traza del cuadro dan la posición horizontal de cada vértice en la perspectiva.</li><li>Por debajo se dibujan la LT y la LH, y se bajan los puntos de corte y los puntos de fuga.</li><li>Las alturas se toman en verdadera magnitud en las aristas que tocan el cuadro (o prolongando las caras hasta él) y se llevan a cada vértice con los puntos de fuga.</li></ol><p>Es el método de los arquitectos porque parte de los planos del proyecto. Con él se puede dibujar cualquier forma, no solo prismas ortogonales.</p>`,
      svg: s7,
      video: { id: "rI-tcbWWGYw", titulo: "Perspectiva cónica oblicua por el método del arquitecto", canal: "Arturo Geometría", vistas: 19933, busqueda: "método del arquitecto perspectiva cónica" },
    },
    {
      html: `<h3>12.8 Alturas en perspectiva</h3><p>Las alturas solo se ven en verdadera magnitud en el <b>cuadro</b>. Para levantar una altura en un punto del fondo se usa una <b>escala de alturas</b>:</p><ol><li>En la LT se levanta un segmento vertical con la altura real.</li><li>Sus extremos se unen con un punto de fuga cualquiera de la LH (P, por ejemplo): las dos rectas forman una «cuña».</li><li>Desde el pie del objeto se traza una horizontal (paralela a la LT si es frontal) hasta la cuña; la altura de la cuña en ese punto es la altura buscada, que se lleva de nuevo al objeto.</li></ol><p>Propiedad útil: <b>la LH corta a todas las personas de igual estatura que el observador a la altura de los ojos</b>. Si el ojo está a 1,60 m, la LH pasa por la cabeza de todas las personas de pie, cerca o lejos; es la forma rápida de poblar una perspectiva sin errores de escala.</p>`,
      svg: s8,
      video: { id: "mEdxUeaOAgU", titulo: "Figura en perspectiva cónica oblicua con dos puntos de fuga", canal: "Dibujo Técnico paso a paso", vistas: 43256, busqueda: "figura perspectiva cónica oblicua" },
    },
    {
      html: `<h3>12.9 Circunferencias en perspectiva cónica</h3><p>La perspectiva cónica de una circunferencia es en general una <b>cónica</b> (la sección del cono visual que la contiene). En las situaciones habituales, con la circunferencia detrás del cuadro y dentro del cono visual, es una <b>elipse</b>.</p><ul><li>Si la circunferencia es <b>paralela al cuadro</b>, se ve como una <b>circunferencia</b>, reducida según su profundidad: se dibuja con el compás.</li><li>Si es <b>horizontal</b> o vertical oblicua, se dibuja el <b>cuadrado circunscrito</b> en perspectiva y la elipse inscrita, por el método de los ocho puntos (tangencias en los puntos medios de los lados y cortes con las diagonales).</li></ul><p>Atención: el centro de la elipse <b>no coincide</b> con la perspectiva del centro de la circunferencia (que es el cruce de las diagonales del cuadrado). La mitad cercana de la circunferencia se ve mayor que la lejana, y la elipse resulta algo desplazada hacia el observador respecto del centro perspectivo.</p>`,
      svg: s9,
      video: { id: "4Ue0LR6bkiI", titulo: "Dibujar circunferencias con un punto de fuga", canal: "TuBoceto", vistas: 246311, busqueda: "circunferencias perspectiva un punto de fuga" },
    },
    {
      html: `<h3>12.10 Elección del punto de vista</h3><p>Una perspectiva puede ser geométricamente correcta y parecer falsa. Para evitarlo:</p><ul><li><b>Distancia</b>: el objeto debe caber en el cono visual de 60°. Regla práctica: d entre 1,5 y 2 veces la dimensión mayor del objeto en el dibujo. Con d corta aparecen ángulos agudos exagerados («efecto gran angular»).</li><li><b>Altura</b>: a la altura de los ojos (1,5–1,7 m) para una vista natural; alta, para mostrar la planta («vista de pájaro»); baja, para dar monumentalidad («vista de rana»).</li><li><b>Posición lateral</b>: el punto principal P conviene que quede hacia el centro de la imagen, algo desplazado para evitar simetrías rígidas.</li><li><b>Ángulo</b> del objeto con el cuadro en la oblicua: con 30°/60° una fachada domina; con 45°/45° ambas se ven igual.</li></ul><p>En fotografía, la distancia d es la focal del objetivo: un gran angular equivale a d corta y un teleobjetivo a d larga.</p>`,
      svg: s10,
    },
    {
      html: `<h3>12.11 Interiores</h3><p>La perspectiva frontal es la más sencilla para dibujar <b>interiores</b>:</p><ol><li>Se dibuja la pared del fondo como un rectángulo a escala (su profundidad decide su tamaño).</li><li>Se elige P dentro de ese rectángulo, a la altura de los ojos.</li><li>Desde P se trazan rectas por las esquinas de la pared del fondo hasta el borde del dibujo: son las aristas de suelo, techo y paredes laterales.</li><li>Se dibuja el embaldosado del suelo con un punto de distancia para medir profundidades.</li><li>Puertas, ventanas y muebles se levantan sobre el embaldosado con la escala de alturas.</li></ol><p>Los diseñadores de interiores suelen usar una variante, la <b>perspectiva frontal con un segundo punto de fuga lejano</b>, que rompe la rigidez de la frontal pura sin perder su sencillez.</p>`,
      svg: s11,
      video: { id: "tnpQgbxw2yQ", titulo: "Cómo dibujar interiores en perspectiva cónica sin medir", canal: "dibujotorreatalaya", vistas: 208808, busqueda: "interiores perspectiva cónica" },
    },
    {
      html: `<h3>12.12 Tres puntos de fuga y cuadro inclinado</h3><p>Cuando el cuadro no es vertical, por ejemplo al mirar hacia arriba un rascacielos o hacia abajo desde una azotea, las aristas verticales dejan de ser paralelas al cuadro y también <b>fugan</b>: aparece un <b>tercer punto de fuga</b> F3, por encima del dibujo en el contrapicado y por debajo en el picado.</p><ul><li>F1 y F2 siguen en la línea de horizonte, que ya no pasa por el centro del dibujo.</li><li>F3 está en la perpendicular a la LH trazada por el punto principal.</li><li>Los tres puntos de fuga forman un triángulo cuyo ortocentro es el punto principal, una propiedad análoga al triángulo de trazas de la axonometría ortogonal.</li></ul><p>La perspectiva de tres puntos de fuga da imágenes muy expresivas y es la que produce una cámara inclinada. En arquitectura se corrige a menudo con objetivos descentrables para mantener verticales las verticales.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Un observador tiene los ojos a 1,60 m y el dibujo está a escala 1:50. ¿A qué distancia de la LT se dibuja la LH?", pasos: ["1,60 m a 1:50 = 32 mm."], resultado: "32 mm por encima de la LT." },
    { enunciado: "La distancia principal es 120 mm. ¿A qué distancia de P están los puntos de distancia? ¿Y el radio del cono visual de 60°?", pasos: ["D1 y D2 están a d = 120 mm de P sobre la LH.", "Radio del cono de 60°: 120 · tan 30° ≈ 69 mm."], resultado: "120 mm; ≈ 69 mm." },
    { enunciado: "Con d = 100 mm, ¿dónde fuga una horizontal que forma 30° con el cuadro?", pasos: ["La paralela por V forma 30° con el cuadro, es decir, 60° con VP.", "Distancia a P: d · tan 60° = 173 mm."], resultado: "Sobre la LH, a 173 mm de P." },
    { enunciado: "Se quiere situar un punto a 60 mm de profundidad sobre una recta perpendicular al cuadro con traza A. El punto de distancia D2 cae fuera del papel. ¿Qué se hace con D2/2?", pasos: ["Se usa el punto a d/2 de P.", "Se lleva en la LT la mitad de la profundidad: 30 mm.", "Se une con D2/2: el corte con AP es el punto buscado."], resultado: "Se lleva 30 mm y se une con D2/2." },
    { enunciado: "En una perspectiva oblicua con d = 80 mm, una dirección forma 45° con el cuadro. ¿Dónde fuga la dirección perpendicular a ella?", pasos: ["También forma 45° con el cuadro, al otro lado.", "Fuga en el otro punto de distancia, a 80 mm de P."], resultado: "En D1 (o D2), a 80 mm de P." },
    { enunciado: "Una persona de 1,80 m está de pie al fondo de una plaza. El observador tiene los ojos a 1,60 m. ¿Dónde corta la LH a la figura?", pasos: ["La LH está a la altura de los ojos del observador.", "Corta a la figura a 1,60/1,80 ≈ 89 % de su altura, a la altura de los ojos aproximadamente."], resultado: "A la altura de sus ojos, cerca de la cabeza." },
  ],
  errores: [
    "Poner los puntos de fuga de rectas horizontales fuera de la línea de horizonte.",
    "Llevar profundidades directamente con la regla sobre las rectas que fugan.",
    "Elegir una distancia principal tan corta que el objeto sale del cono visual.",
    "Dibujar el centro de la elipse en el cruce de las diagonales del cuadrado en perspectiva.",
    "Tomar alturas en verdadera magnitud lejos del cuadro.",
    "Hacer converger las verticales cuando el cuadro es vertical.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define punto de vista, cuadro, LT y LH.", sol: "Ojo del observador; plano de proyección; intersección del cuadro con el suelo; intersección del cuadro con el plano horizontal del ojo." },
    { nivel: "básico", q: "¿Dónde está el punto de fuga de las rectas perpendiculares al cuadro?", sol: "En el punto principal P." },
    { nivel: "básico", q: "¿Dónde fugan las horizontales a 45° con el cuadro?", sol: "En los puntos de distancia D1 y D2." },
    { nivel: "básico", q: "¿Tienen punto de fuga las rectas verticales con cuadro vertical? ¿Por qué?", sol: "No: son paralelas al cuadro y su paralela por V no lo corta." },
    { nivel: "básico", q: "Dibuja un cubo de 40 mm en perspectiva frontal con su cara frontal en el cuadro, a la izquierda de P y por debajo de la LH.", sol: "Cuadrado en VM; aristas hacia P; profundidad con D." },
    { nivel: "básico", q: "Dibuja un embaldosado de 5 × 5 baldosas de 20 mm con d = 100 mm y h = 50 mm.", sol: "Juntas a P; diagonal a D; filas en los cortes." },
    { nivel: "básico", q: "Explica por qué los objetos lejanos se ven más pequeños.", sol: "Porque el factor d/(d + y) disminuye al crecer la profundidad y." },
    { nivel: "básico", q: "¿Qué cara de un cubo se ve si está por encima de la LH?", sol: "La inferior." },
    { nivel: "básico", q: "¿Cuánto mide el radio del cono visual de 60° si d = 150 mm?", sol: "150 · tan 30° ≈ 87 mm." },
    { nivel: "básico", q: "Dibuja una calle recta en perspectiva frontal con aceras y farolas iguales.", sol: "Bordes a P; farolas de igual altura con escala de alturas." },
    { nivel: "básico", q: "¿Por qué la LH pasa por la cabeza de todas las personas de la altura del observador?", sol: "Porque sus ojos están en el plano de horizonte, que se proyecta en la LH." },
    { nivel: "básico", q: "Diferencia la perspectiva frontal y la oblicua.", sol: "Frontal: una cara ∥ cuadro, un punto de fuga. Oblicua: caras verticales oblicuas, dos puntos de fuga." },
    { nivel: "medio", q: "Dibuja un cubo de 50 mm en perspectiva oblicua 45°/45° con una arista vertical en el cuadro (d = 90 mm, h = 70 mm).", sol: "F1 y F2 en D1 y D2; arista en VM; profundidades con puntos métricos." },
    { nivel: "medio", q: "Dibuja una pieza dada por planta y alzado por el método de las prolongaciones.", sol: "Traza del cuadro y V en planta; rayos visuales; puntos bajados; alturas en el cuadro." },
    { nivel: "medio", q: "Dibuja una circunferencia de 60 mm de diámetro apoyada en el suelo en perspectiva frontal.", sol: "Cuadrado circunscrito en perspectiva y elipse por ocho puntos." },
    { nivel: "medio", q: "Dibuja un cilindro vertical en perspectiva frontal.", sol: "Bases elípticas por ocho puntos; generatrices de contorno verticales tangentes." },
    { nivel: "medio", q: "Halla el punto de fuga de una horizontal a 60° con el cuadro (d = 80 mm).", sol: "A 80 · tan 30° ≈ 46 mm de P en la LH." },
    { nivel: "medio", q: "Dibuja el interior de tu habitación en perspectiva frontal con una puerta y una ventana.", sol: "Pared de fondo; P a 1,6 m; aristas a P; huecos con escala de alturas." },
    { nivel: "medio", q: "Compara la perspectiva de un cubo con d = 40 mm y d = 160 mm.", sol: "Con 40 mm se deforma, con 160 mm es natural." },
    { nivel: "medio", q: "Coloca tres personas de 1,7 m a distintas profundidades en una plaza.", sol: "Escala de alturas o regla de la LH a la altura de los ojos." },
    { nivel: "medio", q: "Dibuja una escalera recta en perspectiva frontal.", sol: "Perfil de peldaños en un plano frontal; aristas a P." },
    { nivel: "medio", q: "Explica por qué el centro de la elipse no es la perspectiva del centro de la circunferencia.", sol: "La proyección central no conserva razones; la mitad cercana se ve mayor." },
    { nivel: "avanzado", q: "Dibuja una perspectiva oblicua 30°/60° de un edificio de planta en L por el método del arquitecto.", sol: "Puntos de fuga desde V en planta; rayos; alturas con escala." },
    { nivel: "avanzado", q: "Usa puntos de distancia reducidos D/3 para medir una profundidad de 90 mm.", sol: "Se llevan 30 mm en la LT y se une con D/3." },
    { nivel: "avanzado", q: "Dibuja la perspectiva de un arco de medio punto en una fachada oblicua.", sol: "Semicuadrado circunscrito en perspectiva; ocho puntos; tangencias." },
    { nivel: "avanzado", q: "Demuestra que dos horizontales perpendiculares tienen puntos de fuga F1 y F2 con F1P · PF2 = d².", sol: "En el plano de horizonte, el triángulo VF1F2 es rectángulo en V con altura VP = d: por el teorema de la altura, PF1 · PF2 = d²." },
    { nivel: "avanzado", q: "Dibuja un rascacielos en perspectiva de tres puntos de fuga en contrapicado.", sol: "LH baja; F1, F2 en ella; F3 muy por encima; verticales a F3." },
    { nivel: "avanzado", q: "Restituye la planta de una habitación a partir de una foto frontal en la que conoces el ancho de la pared del fondo.", sol: "Se hallan P y la LH; se estima d con una diagonal conocida; se miden profundidades con D." },
    { nivel: "avanzado", q: "Dibuja una mesa redonda con cuatro sillas en perspectiva oblicua.", sol: "Embaldosado oblicuo; elipses por ocho puntos; alturas con escala." },
    { nivel: "avanzado", q: "Explica la relación entre la distancia principal y la focal de una cámara.", sol: "Son equivalentes: a mayor focal, mayor d y menos deformación; el gran angular equivale a d corta." },
  ],
  quiz: reparte([
    { q: "La perspectiva cónica es una proyección…", o: ["cilíndrica", "central", "ortogonal", "oblicua"], a: 1, e: "Desde un punto." },
    { q: "La LH está a la altura…", o: ["del suelo", "de los ojos", "del objeto", "del cuadro"], a: 1, e: "Plano de horizonte." },
    { q: "Las perpendiculares al cuadro fugan a…", o: ["D1", "P", "F3", "ningún punto"], a: 1, e: "Punto principal." },
    { q: "Las horizontales a 45° fugan a…", o: ["P", "los puntos de distancia", "el infinito", "la LT"], a: 1, e: "D1 y D2." },
    { q: "Las rectas paralelas al cuadro…", o: ["fugan a P", "no tienen punto de fuga", "fugan a D", "desaparecen"], a: 1, e: "Conservan su dirección." },
    { q: "Rectas paralelas entre sí en el espacio…", o: ["son paralelas en el dibujo", "concurren en su punto de fuga", "son perpendiculares", "no se ven"], a: 1, e: "Mismo punto de fuga." },
    { q: "Las horizontales fugan en…", o: ["la LT", "la LH", "P siempre", "el cuadro"], a: 1, e: "Plano de horizonte." },
    { q: "El círculo de distancia tiene radio…", o: ["h", "d", "d/2", "60°"], a: 1, e: "Distancia principal." },
    { q: "El cono visual recomendado es de…", o: ["30°", "60°", "90°", "120°"], a: 1, e: "Unos 60°." },
    { q: "En la perspectiva frontal hay … punto(s) de fuga principal(es).", o: ["0", "1", "2", "3"], a: 1, e: "P." },
    { q: "En la oblicua hay…", o: ["1 punto de fuga", "2 puntos de fuga", "3 siempre", "ninguno"], a: 1, e: "F1 y F2." },
    { q: "Las profundidades se miden con…", o: ["la regla", "los puntos de distancia", "la LH", "un transportador"], a: 1, e: "Triángulo a 45°." },
    { q: "Las alturas están en VM…", o: ["en cualquier lugar", "en el cuadro", "en la LH", "en P"], a: 1, e: "Sobre el cuadro." },
    { q: "Un cubo por debajo de la LH muestra la cara…", o: ["inferior", "superior", "trasera", "ninguna"], a: 1, e: "Se ve desde arriba." },
    { q: "Una circunferencia paralela al cuadro se ve como…", o: ["elipse", "circunferencia", "parábola", "recta"], a: 1, e: "Semejanza." },
    { q: "Una circunferencia horizontal se ve normalmente como…", o: ["circunferencia", "elipse", "hipérbola", "recta"], a: 1, e: "Sección del cono visual." },
    { q: "Con d muy corta la imagen…", o: ["es natural", "se deforma", "desaparece", "es isométrica"], a: 1, e: "Fuera del cono visual." },
    { q: "El método del arquitecto parte de…", o: ["la isometría", "la planta", "una fotografía", "el alzado solo"], a: 1, e: "Rayos en planta." },
    { q: "El tercer punto de fuga aparece si el cuadro…", o: ["es vertical", "está inclinado", "es frontal", "es horizontal siempre"], a: 1, e: "Verticales oblicuas al cuadro." },
    { q: "El inventor del método de la «ventana» fue…", o: ["Monge", "Alberti", "Pohlke", "Euclides"], a: 1, e: "1435." },
  ]),
  examen: reparte([
    { q: "d = 90 mm; D1 está a … de P.", o: ["90 mm", "45 mm", "180 mm", "52 mm"], a: 0, e: "Radio del círculo de distancia." },
    { q: "Ojos a 1,5 m, escala 1:50: la LH está a…", o: ["30 mm", "15 mm", "50 mm", "75 mm"], a: 0, e: "1500/50." },
    { q: "Horizontal a 30° con el cuadro, d = 100: su fuga está a … de P.", o: ["≈ 173 mm", "100 mm", "58 mm", "50 mm"], a: 0, e: "d · tan 60°." },
    { q: "PF1 · PF2 en una oblicua de direcciones perpendiculares es…", o: ["d²", "2d", "h²", "d/2"], a: 0, e: "Teorema de la altura." },
    { q: "Radio del cono de 60° con d = 120:", o: ["≈ 69 mm", "120 mm", "60 mm", "208 mm"], a: 0, e: "120 · tan 30°." },
    { q: "Con D/2 en lugar de D, la profundidad en la LT se lleva…", o: ["a la mitad", "doble", "igual", "al cuadrado"], a: 0, e: "Semejanza." },
    { q: "Las verticales convergen cuando…", o: ["el cuadro está inclinado", "el cuadro es vertical", "el objeto es frontal", "nunca"], a: 0, e: "Tres puntos de fuga." },
    { q: "La pared del fondo de un interior frontal se ve…", o: ["con su forma real, reducida", "deformada en trapecio", "como un punto", "en VM siempre"], a: 0, e: "Paralela al cuadro." },
  ]),
  feynman: ["Por qué las rectas paralelas parecen juntarse", "Qué es el punto de fuga y cómo se halla", "Cómo se miden profundidades en perspectiva", "Por qué la LH está a la altura de los ojos", "Cómo se elige una buena distancia principal"],
  glosario: [
    ["Proyección central", "Proyección desde un punto propio (el punto de vista)."],
    ["Punto de vista", "Posición del ojo del observador, centro de proyección."],
    ["Cuadro", "Plano sobre el que se proyecta la perspectiva."],
    ["Plano geometral", "Plano horizontal del suelo."],
    ["Línea de tierra", "Intersección del cuadro y el geometral."],
    ["Línea de horizonte", "Intersección del cuadro y el plano horizontal del ojo."],
    ["Punto principal", "Pie de la perpendicular desde el ojo al cuadro."],
    ["Distancia principal", "Distancia del ojo al cuadro."],
    ["Punto de fuga", "Perspectiva del punto del infinito de una recta."],
    ["Puntos de distancia", "Puntos de fuga de las horizontales a 45° con el cuadro."],
    ["Cono visual", "Cono de vértice en el ojo dentro del cual la imagen es natural (unos 60°)."],
    ["Traza de una recta", "Punto donde la recta corta al cuadro."],
    ["Escala de alturas", "Construcción para llevar alturas reales al fondo de la perspectiva."],
    ["Método del arquitecto", "Construcción de la perspectiva desde la planta con rayos visuales."],
  ],
  situacion: {
    titulo: "Así será nuestra aula",
    reto: "El centro va a reformar un aula y quiere enseñar la propuesta a la comunidad educativa. Debéis dibujar dos perspectivas cónicas: un interior frontal y una vista exterior oblicua del pabellón.",
    pasos: [
      "Medid el aula (o tomad los planos) y dibujad la planta a escala 1:50.",
      "Elegid altura de los ojos (1,60 m) y distancia principal dentro del cono de 60°.",
      "Dibujad el interior frontal con embaldosado, mobiliario y ventanas.",
      "Dibujad la vista exterior oblicua del pabellón por el método del arquitecto.",
      "Añadid personas con la regla de la LH para dar escala y coloread las láminas.",
    ],
    producto: "Dos láminas A3 con perspectivas cónicas y una breve memoria.",
    evaluacion: [
      "Elementos del sistema (LT, LH, P, D) correctos.",
      "Profundidades medidas con puntos de distancia.",
      "Alturas y figuras humanas a escala.",
      "Imagen natural, sin deformaciones por el punto de vista.",
    ],
  },
  figura: fig("Perspectiva cónica", "Resumen del tema", [
    ["Elementos", ["V, cuadro, LT", "LH a la altura del ojo", "P y círculo de distancia", "cono visual 60°"], "var(--pen)"],
    ["Fugas", ["paralelas → mismo punto", "horizontales → LH", "⊥ cuadro → P", "45° → D1, D2"], "var(--red)"],
    ["Tipos", ["frontal: 1 punto", "oblicua: 2 puntos", "cuadro inclinado: 3", "método del arquitecto"], "var(--leaf)"],
    ["Medidas", ["profundidad con D", "alturas en el cuadro", "circunferencias: 8 puntos", "LH en los ojos"], "var(--inf)"],
  ]),
  video: { id: "2BzjdJR6Pc8", titulo: "Perspectiva cónica frontal: método de los puntos de distancia", canal: "Curso de Dibujo Técnico", vistas: 177340, busqueda: "perspectiva cónica frontal puntos de distancia" },
  mapa: mapa("PERSPECTIVA CÓNICA", "var(--bac)", [
    ["Fundamento", "proyección central · cuadro", "var(--pen)"],
    ["Fugas", "P · D1 · D2 · F1 · F2", "var(--red)"],
    ["Medidas", "profundidades y alturas", "var(--leaf)"],
    ["Aplicación", "interiores · arquitectura", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Proyección cónica", "Rayos desde un punto: el ojo."],
    ["LH", "A la altura de los ojos."],
    ["Punto principal P", "Fuga de las perpendiculares al cuadro."],
    ["D1, D2", "Fuga de las horizontales a 45°."],
    ["Punto de fuga", "Paralela por V ∩ cuadro."],
    ["Paralelas", "Mismo punto de fuga."],
    ["Verticales (cuadro vertical)", "Siguen verticales."],
    ["Cono visual", "60°: radio ≈ 0,58·d."],
    ["Profundidades", "Puntos de distancia."],
    ["Alturas", "En VM solo en el cuadro."],
    ["Oblicua", "F1 · F2 en la LH; PF1·PF2 = d²."],
    ["Tres fugas", "Cuadro inclinado."],
  ],
  familias: ["Haced fotos de una calle recta y marcad sobre ellas la línea de horizonte y el punto de fuga.", "Comparad fotos hechas con el zoom al mínimo y al máximo: ¿cuál deforma más?", "Buscad cuadros del Renacimiento con perspectiva (La Escuela de Atenas, La Última Cena).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema cónico; elementos; perspectiva frontal y oblicua; puntos de fuga y de distancia; métodos de construcción; elección del punto de vista; circunferencias en perspectiva (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Restituir con la clase la planta de una foto frontal del pasillo del centro.", "Relación con Historia del Arte: Brunelleschi, Alberti, Piero della Francesca y Durero.", "Comparar una perspectiva hecha a mano con la de un modelo 3D con la misma cámara.", "Usar una ventana real y un rotulador para dibujar «la ventana de Alberti»."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Perspectiva cónica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_c%C3%B3nica" },
    { t: "Punto de fuga, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Punto_de_fuga" },
  ],
  revisado: "2026-11-21",
};
