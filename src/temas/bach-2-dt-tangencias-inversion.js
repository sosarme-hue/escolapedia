// Dibujo Técnico II 2º Bachillerato · Tema 2. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, pt, paso, recto, polar, corteCC, corteRC, corteRR, tangPC, tangExt, mid, dist, unit, add, sub, mul, pie, simR, tx, dash, inv, invCirc } = G;

const larga = (A, B, c = "var(--red)", w = 2.2, extra = "") => recta(A, B, 400, c, w, extra);
const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const dot = (A, B) => A[0] * B[0] + A[1] * B[1];
const perp = (u) => [u[1], -u[0]];

// Circunferencias tangentes a tres circunferencias: |X − Oᵢ| = R + sᵢ·rᵢ (s = +1 exterior, −1 interior).
function apolonio(O, r, s) {
  const e = (i) => s[i] * r[i];
  // Ecuaciones lineales en X: 2X·(Oᵢ − O₀) = |Oᵢ|² − |O₀|² − (eᵢ² − e₀²) − 2R(eᵢ − e₀)
  const fila = (i) => [2 * (O[i][0] - O[0][0]), 2 * (O[i][1] - O[0][1]), dot(O[i], O[i]) - dot(O[0], O[0]) - (e(i) ** 2 - e(0) ** 2), -2 * (e(i) - e(0))];
  const [a1, b1, c1, d1] = fila(1), [a2, b2, c2, d2] = fila(2), D = a1 * b2 - a2 * b1;
  const X0 = [(c1 * b2 - c2 * b1) / D, (a1 * c2 - a2 * c1) / D], X1 = [(d1 * b2 - d2 * b1) / D, (a1 * d2 - a2 * d1) / D];
  const w = sub(X0, O[0]), A = dot(X1, X1) - 1, B = 2 * (dot(w, X1) - e(0)), C = dot(w, w) - e(0) ** 2, disc = B * B - 4 * A * C;
  return [(-B + Math.sqrt(disc)) / (2 * A), (-B - Math.sqrt(disc)) / (2 * A)].filter((R) => R > 0).map((R) => [add(X0, mul(X1, R)), R]);
}

// 2.1 Problema RRR: circunferencias inscrita y exinscrita.
const s1 = (() => {
  const A = [40, 140], B = [176, 140], C = [96, 56], a = dist(B, C), b = dist(A, C), c = dist(A, B), sp = (a + b + c) / 2;
  const area = Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])) / 2;
  const I = mul(add(add(mul(A, a), mul(B, b)), mul(C, c)), 1 / (a + b + c)), Ea = mul(add(add(mul(A, -a), mul(B, b)), mul(C, c)), 1 / (-a + b + c));
  return dib("Circunferencias tangentes a tres rectas: la inscrita y una exinscrita del triángulo que forman, con centros en las bisectrices", clip(`${larga(A, B, "var(--ink)", 1.8)}${larga(B, C, "var(--ink)", 1.8)}${larga(A, C, "var(--ink)", 1.8)}${circ(I, area / sp, "var(--red)", 2.4)}${circ(Ea, area / (sp - a), "var(--pen)", 2.2)}${seg(A, Ea, "var(--muted)", 1.1, dash)}${pt(I, "I", -4, -8, "var(--red)")}${pt(Ea, "Eₐ", 6, -6, "var(--pen)")}${pt(A, "", 0, 0)}`, "cl21") + tx(10, 22, "RRR: 4 soluciones", { s: 10.5, b: 1, a: "start" }));
})();

// 2.2 Método de dilatación.
const s2 = (() => {
  const yr = 140, X = [96, 92], R = yr - X[1], rc = 22, O = polar(X, R + rc, -8);
  return dib("Dilatación: si a la solución se le suma el radio de la circunferencia dada, pasa por su centro O y es tangente a una paralela a r trasladada esa misma distancia hacia fuera", `${seg([10, yr], [250, yr], "var(--ink)", 2)}${seg([10, yr + rc], [250, yr + rc], "var(--leaf)", 1.4, dash)}${circ(X, R, "var(--red)", 2.4)}${circ(X, R + rc, "var(--muted)", 1.3, dash)}${circ(O, rc)}${seg(X, O, "var(--pen)", 1.3)}
  ${pt(X, "X", -4, -8, "var(--red)")}${pt(O, "O", 6, -6)}${tx(250, yr - 6, "r", { s: 11, b: 1, a: "end" })}${tx(250, yr + rc - 6, "r′", { s: 11, b: 1, a: "end", c: "var(--leaf)" })}${tx(10, 16, "solución + r(c) ⇒ pasa por O", { s: 10.5, b: 1, a: "start", c: "var(--muted)" })}`);
})();

// 2.3 Caso PPC por potencia.
const s3 = (() => {
  // Datos elegidos para que el dibujo quepa: se parte de R y del punto de tangencia y se obtienen A y B.
  const O = [180, 74], rc = 26, R0 = [40, 30], [Ta, Tb] = tangPC(R0, O, rc), Tq = Ta[1] > Tb[1] ? Ta : Tb, X0 = add(Tq, mul(unit(O, Tq), 30));
  const [A, B] = corteRC(R0, polar(R0, 10, G.ang(R0, X0) + 8), X0, 30), M = mid(A, B), n = perp(unit(A, B)), med = [M, add(M, n)];
  const Q = add(pie(O, ...med), mul(n, -14)), rq = dist(Q, A), [M1, N1] = corteCC(Q, rq, O, rc), R = corteRR(A, B, M1, N1), [T1, T2] = tangPC(R, O, rc);
  const X1 = corteRR(...med, O, T1), X2 = corteRR(...med, O, T2);
  return dib("Circunferencias que pasan por A y B y son tangentes a la circunferencia c: el centro radical R da los puntos de tangencia con las tangentes trazadas desde él", clip(`${circ(O, rc)}${circ(Q, rq, "var(--muted)", 1.2, dash)}${larga(A, B, "var(--muted)", 1.1)}${larga(M1, N1, "var(--muted)", 1.1)}${circ(X1, dist(X1, A), "var(--red)", 2.2)}${circ(X2, dist(X2, A), "var(--pen)", 2.2)}${seg(R, T1, "var(--leaf)", 1.6)}${seg(R, T2, "var(--leaf)", 1.6)}
  ${pt(A, "A", -14, 2)}${pt(B, "B", 6, 12)}${pt(O, "O", 6, 4)}${pt(R, "R", -4, -8, "var(--leaf)")}${pt(T1, "", 0, 0, "var(--red)")}${pt(T2, "", 0, 0, "var(--pen)")}`, "cl23") + tx(10, 172, "RT² = RA · RB", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 2.4 Caso PRR: simétrico respecto de la bisectriz y potencia.
const s4 = (() => {
  const V = [20, 160], rA = [250, 160], sB = polar(V, 300, 40), bis = polar(V, 100, 20), P = [110, 140], P1 = simR(P, V, bis), R = corteRR(P, P1, V, rA);
  const t = Math.sqrt(dist(R, P) * dist(R, P1)), sgn = R[0] > P[0] ? -1 : 1;
  const Ts = [[R[0] - t, 160], [R[0] + t, 160]], Xs = Ts.map((T) => corteRR(V, bis, T, [T[0], 0]));
  return dib("Circunferencias que pasan por P y son tangentes a dos rectas: el simétrico P′ respecto de la bisectriz convierte el problema en el de dos puntos y una recta", clip(`${seg(V, rA, "var(--ink)", 2)}${larga(V, sB, "var(--ink)", 2)}${larga(V, bis, "var(--muted)", 1.2, 'stroke-dasharray="10 3 2 3"')}${larga(P, P1, "var(--muted)", 1.1, dash)}${Xs.map((X, i) => circ(X, 160 - X[1], i ? "var(--pen)" : "var(--red)", 2.2)).join("")}
  ${pt(P, "P", 7, 2)}${pt(P1, "P′", -16, -4)}${pt(R, "R", 2, 14, "var(--leaf)")}${Ts.map((T, i) => pt(T, "", 0, 0, i ? "var(--pen)" : "var(--red)")).join("")}`, "cl24") + tx(250, 22, "PRR → PPR", { s: 11, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 2.5 Recta y circunferencia con el punto de tangencia en la recta.
const s5 = (() => {
  const yr = 130, T = [120, yr], O = [200, 70], rc = 24, dx = O[0] - T[0], dy = yr - O[1];
  const sE = (dx * dx + dy * dy - rc * rc) / (2 * (dy + rc)), XE = [T[0], yr - sE], T1 = [T[0], yr + rc];
  const Mm = mid(O, T1), u = unit(O, T1);
  return dib("Circunferencia tangente a la recta r en T y tangente exterior a c: se lleva el radio de c bajo T y la mediatriz con O da el centro", clip(`${seg([10, yr], [250, yr], "var(--ink)", 2)}${seg([T[0], 6], [T[0], 176], "var(--muted)", 1.2, dash)}${circ(O, rc)}${seg(O, T1, "var(--muted)", 1.1)}${larga(Mm, add(Mm, perp(u)), "var(--leaf)", 1.3)}${circ(XE, sE, "var(--red)", 2.4)}${seg(XE, O, "var(--pen)", 1.2)}
  ${pt(T, "T", 6, -6, "var(--red)")}${pt(T1, "T′", 6, 10)}${pt(O, "O", 6, -6)}${pt(XE, "X", -14, 4, "var(--red)")}${tx(250, yr - 6, "r", { s: 11, b: 1, a: "end" })}`, "cl25") + tx(10, 22, "TT′ = radio de c", { s: 10.5, b: 1, a: "start", c: "var(--muted)" }));
})();

// 2.6 Dos circunferencias con el punto de tangencia en una de ellas.
const s6 = (() => {
  const O1 = [70, 100], r1 = 40, T = polar(O1, r1, 30), u = unit(O1, T), O2 = [200, 128], r2 = 26, w = sub(T, O2);
  const s = (r2 * r2 - dot(w, w)) / (2 * (dot(u, w) - r2)), X = add(T, mul(u, s)), T1 = add(T, mul(u, -r2)), Mm = mid(T1, O2);
  return dib("Circunferencia tangente a c₁ en T y tangente exterior a c₂: se lleva el radio de c₂ hacia dentro desde T y la mediatriz con O₂ corta a la recta O₁T en el centro", clip(`${circ(O1, r1)}${circ(O2, r2)}${larga(O1, T, "var(--muted)", 1.2, dash)}${seg(T1, O2, "var(--muted)", 1.1)}${larga(Mm, add(Mm, perp(unit(T1, O2))), "var(--leaf)", 1.3)}${circ(X, s, "var(--red)", 2.4)}${seg(X, O2, "var(--pen)", 1.2)}
  ${pt(O1, "O₁", -18, 4)}${pt(O2, "O₂", 4, 16)}${pt(T, "T", -14, -2, "var(--red)")}${pt(T1, "T′", 4, 14)}${pt(X, "X", 6, -6, "var(--red)")}`, "cl26") + tx(250, 172, "TT′ = r₂", { s: 10.5, b: 1, a: "end", c: "var(--muted)" }));
})();

// 2.7 Inversión: definición.
const s7 = (() => {
  const O = [70, 92], rho = 56, k = rho * rho, P = polar(O, 34, 12), P1 = inv(P, O, k), Q = polar(O, 44, 230), Q1 = inv(Q, O, -k);
  return dib("Inversión de centro O y potencia k: P y P′ están alineados con O y OP por OP′ vale k; con potencia negativa quedan a lados opuestos de O", `${circ(O, rho, "var(--leaf)", 1.6, dash)}${seg(O, P1, "var(--pen)", 1.4)}${seg(Q1, Q, "var(--muted)", 1.2, dash)}${pt(O, "O", -4, 16)}${pt(P, "P", -2, -9)}${pt(P1, "P′", 4, -8, "var(--red)")}${pt(Q, "Q", -14, 4)}${pt(Q1, "Q′", 0, -8, "var(--red)")}
  ${tx(250, 22, "OP · OP′ = k", { s: 11, b: 1, a: "end", c: "var(--red)" })}${tx(250, 172, "circunferencia de puntos dobles: √k", { s: 9.5, b: 1, a: "end", c: "var(--leaf)" })}`);
})();

// 2.8 Construcción del inverso.
const s8 = (() => {
  const O = [84, 96], rho = 50, P = [222, 96], [T1, T2] = tangPC(P, O, rho), P1 = corteRR(T1, T2, O, P);
  return dib("Inverso de un punto exterior P: la cuerda de contacto de las tangentes desde P corta a OP en el inverso P′", `${circ(O, rho, "var(--leaf)", 2)}${seg(P, T1, "var(--pen)", 1.6)}${seg(P, T2, "var(--pen)", 1.6)}${seg(T1, T2, "var(--red)", 1.8)}${seg(O, P, "var(--muted)", 1.2)}${fina(O, T1)}${recto(T1, O, P, 6)}
  ${pt(O, "O", -14, 4)}${pt(P, "P", 4, -6)}${pt(T1, "T₁", -6, -8)}${pt(T2, "T₂", -6, 16)}${pt(P1, "P′", 4, -6, "var(--red)")}${tx(130, 172, "OP · OP′ = OT² = k", { s: 11, b: 1, c: "var(--red)" })}`);
})();

// 2.9 Inversa de una recta.
const s9 = (() => {
  const O = [60, 96], rho = 70, k = rho * rho, H = [190, 96], H1 = inv(H, O, k), C = mid(O, H1), P = [190, 40], P1 = inv(P, O, k);
  return dib("La inversa de una recta que no pasa por el centro es una circunferencia que pasa por el centro de inversión", `${seg([190, 8], [190, 174], "var(--ink)", 2.2)}${circ(O, rho, "var(--leaf)", 1.3, dash)}${circ(C, dist(C, O), "var(--red)", 2.4)}${seg(O, H, "var(--muted)", 1.2)}${seg(O, P, "var(--muted)", 1.2, dash)}
  ${pt(O, "O", -14, 4)}${pt(H, "H", 6, 14)}${pt(H1, "H′", 4, 14, "var(--red)")}${pt(P, "P", 6, -2)}${pt(P1, "P′", 2, -8, "var(--red)")}${tx(198, 172, "r", { s: 11, b: 1, a: "start" })}${tx(10, 16, "r ↔ r′ (por O)", { s: 10.5, b: 1, a: "start", c: "var(--red)" })}`);
})();

// 2.10 Inversa de una circunferencia que no pasa por O.
const s10 = (() => {
  const O = [44, 96], rho = 84, k = rho * rho, C = [190, 96], rc = 32, [C1, r1] = invCirc(C, rc, O, k), A = [C[0] - rc, 96], B = [C[0] + rc, 96];
  return dib("La inversa de una circunferencia que no pasa por O es otra circunferencia; los puntos más cercano y más lejano se intercambian", `${circ(O, rho, "var(--leaf)", 1.3, dash)}${circ(C, rc)}${circ(C1, r1, "var(--red)", 2.4)}${seg(O, B, "var(--muted)", 1.2)}
  ${pt(O, "O", -4, 16)}${pt(A, "A", -14, -6)}${pt(B, "B", 4, -6)}${pt(inv(A, O, k), "A′", 4, -6, "var(--red)")}${pt(inv(B, O, k), "B′", -18, -6, "var(--red)")}${pt(C, "C", 0, 16)}${tx(250, 22, "c ↔ c′", { s: 11, b: 1, a: "end", c: "var(--red)" })}${tx(250, 172, "el centro C no va a C′", { s: 9.5, b: 1, a: "end", c: "var(--muted)" })}`);
})();

// 2.11 Circunferencias dobles (ortogonales a la de inversión).
const s11 = (() => {
  const O = [66, 96], rho = 46, Q = [150, 96], rq = Math.sqrt(dist(O, Q) ** 2 - rho * rho), dir = polar(O, 100, 22), [P, P1] = corteRC(O, dir, Q, rq), [T] = tangPC(O, Q, rq).sort((a, b) => a[1] - b[1]);
  return dib("Una circunferencia ortogonal a la de inversión es doble: cada punto suyo P se transforma en el otro punto P′ de la misma circunferencia alineado con O", `${circ(O, rho, "var(--leaf)", 2)}${circ(Q, rq, "var(--red)", 2.4)}${seg(O, P1, "var(--muted)", 1.2)}${fina(O, T, "var(--leaf)")}${fina(Q, T, "var(--pen)")}${recto(T, O, Q, 6)}
  ${pt(O, "O", -14, 4)}${pt(Q, "", 0, 0, "var(--red)")}${pt(P, "P", -4, 16)}${pt(P1, "P′", 4, -8, "var(--red)")}${pt(T, "T", -4, -8)}${tx(10, 172, "c ⊥ inversión ⇒ c doble", { s: 10.5, b: 1, a: "start", c: "var(--red)" })}`);
})();

// 2.12 Caso PCC por inversión.
const s12 = (() => {
  const P = [130, 40], O1 = [64, 120], r1 = 26, O2 = [200, 128], r2 = 30, k = dist(P, O1) ** 2 - r1 * r1;
  const [C2, R2] = invCirc(O2, r2, P, k), tg = [...tangExt(O1, r1, C2, R2), ...G.tangInt(O1, r1, C2, R2)];
  const sols = tg.map(([T1, T2]) => { const H = pie(P, T1, T2), H1 = inv(H, P, k); return [mid(P, H1), dist(P, H1) / 2, [T1, T2]]; }).filter(([, R]) => R < 80);
  return dib("Circunferencias que pasan por P y son tangentes a dos circunferencias, por inversión de centro P: las circunferencias dadas pasan a ser c₁ (doble) y c₂′, y las soluciones son sus tangentes comunes", clip(`${circ(O1, r1)}${circ(O2, r2)}${circ(C2, R2, "var(--leaf)", 1.4, dash)}${sols.map(([, , [T1, T2]]) => larga(T1, T2, "var(--muted)", 1.1, dash)).join("")}${sols.map(([X, R], i) => circ(X, R, ["var(--red)", "var(--pen)", "var(--inf)"][i % 3], 2.2)).join("")}
  ${pt(P, "P", 4, -6)}${pt(O1, "O₁", -18, 4)}${pt(O2, "O₂", 4, 14)}${pt(C2, "", 0, 0, "var(--leaf)")}`, "cl212") + tx(10, 172, "c₂′ inversa de c₂ · c₁ doble", { s: 9.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 2.13 Problema de Apolonio CCC.
const s13 = (() => {
  const O = [[64, 66], [192, 70], [126, 146]], r = [30, 24, 18];
  const [ext] = apolonio(O, r, [1, 1, 1]).sort((a, b) => a[1] - b[1]), [env] = apolonio(O, r, [-1, -1, -1]).sort((a, b) => a[1] - b[1]);
  return dib("Problema de Apolonio: circunferencia tangente exterior a tres circunferencias dadas y otra que las envuelve a las tres", clip(`${O.map((c, i) => circ(c, r[i])).join("")}${circ(ext[0], ext[1], "var(--red)", 2.4)}${circ(env[0], env[1], "var(--pen)", 1.8, dash)}${O.map((c) => pt(c, "", 0, 0)).join("")}${pt(ext[0], "", 0, 0, "var(--red)")}`, "cl213") + tx(10, 22, "CCC: hasta 8 soluciones", { s: 10.5, b: 1, a: "start" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Tangencias por potencia e inversión",
  minutos: 120,
  objetivos: [
    "Clasificar los diez problemas de Apolonio y elegir el método adecuado para cada uno",
    "Resolver por potencia los casos de dos puntos y una recta o una circunferencia y de un punto y dos rectas",
    "Aplicar la dilatación (traslación de radios) para reducir casos con circunferencias a casos más sencillos",
    "Resolver tangencias con el punto de tangencia conocido en una recta o una circunferencia",
    "Definir la inversión, construir inversos y transformar rectas y circunferencias",
    "Usar la inversión para resolver tangencias complejas",
  ],
  claves: ["problema de Apolonio", "potencia", "centro radical", "dilatación", "inversión", "centro de inversión", "potencia de inversión", "puntos dobles", "figura inversa", "tangencia"],
  lectura: {
    titulo: "Un problema de hace 2 200 años",
    html: `<p>Hacia el año 200 antes de Cristo, Apolonio de Perge, el mismo que dio nombre a la elipse, la parábola y la hipérbola, escribió un libro titulado <i>Tangencias</i>. En él planteaba un problema que parece de juguete: dadas tres cosas, que pueden ser puntos, rectas o circunferencias, dibujar todas las circunferencias que pasan por los puntos y tocan a las rectas y circunferencias. El libro se perdió, y durante siglos los mejores matemáticos de Europa, de Viète a Newton, compitieron por reconstruir sus soluciones.</p>
    <p>El caso más difícil, tres circunferencias, puede tener hasta ocho soluciones. Hoy se resuelve con dos herramientas muy elegantes: la <b>potencia</b>, que ya conoces, y la <b>inversión</b>, una transformación descubierta en el siglo XIX que convierte circunferencias en rectas y viceversa.</p>
    <p>No es solo un juego de geómetras. Los mismos trazados aparecen al diseñar una rueda que debe tocar a otras tres, al calcular la posición de un receptor GPS a partir de distancias a satélites o al dibujar los arcos de enlace de una pieza mecánica. En este tema aprenderás a resolver los casos que aparecen en la PAU y entenderás por qué funcionan.</p>`,
  },
  pregunta: {
    texto: "Si tienes que dibujar una circunferencia que pase por dos puntos A y B y toque a otra circunferencia, ¿qué punto te dice dónde está el punto de contacto?",
    respuesta: "El <mark>centro radical</mark> R de la circunferencia dada y de cualquier circunferencia que pase por A y B. Las tangentes trazadas desde R a la circunferencia dada tocan en los puntos de tangencia, porque RT² = RA · RB.",
  },
  bloques: [
    {
      html: `<h3>2.1 Los diez problemas de Apolonio</h3><p>Se llama <b>problema de Apolonio</b> a trazar las circunferencias que cumplen tres condiciones elegidas entre: pasar por un punto (P), ser tangentes a una recta (R) o ser tangentes a una circunferencia (C). Combinando tres letras salen <b>diez casos</b>:</p><table class="tb"><thead><tr><th>Caso</th><th>Soluciones (máx.)</th><th>Método habitual</th></tr></thead><tbody><tr><td>PPP</td><td>1</td><td>Mediatrices (circuncentro)</td></tr><tr><td>PPR</td><td>2</td><td>Potencia</td></tr><tr><td>PPC</td><td>2</td><td>Potencia (centro radical)</td></tr><tr><td>PRR</td><td>2</td><td>Simetría + potencia</td></tr><tr><td>PRC</td><td>4</td><td>Inversión o dilatación</td></tr><tr><td>PCC</td><td>4</td><td>Inversión</td></tr><tr><td>RRR</td><td>4</td><td>Bisectrices</td></tr><tr><td>RRC</td><td>8</td><td>Dilatación → PRR</td></tr><tr><td>RCC</td><td>8</td><td>Dilatación → PRC</td></tr><tr><td>CCC</td><td>8</td><td>Dilatación → PCC</td></tr></tbody></table><p>El caso RRR es el más conocido: las tres rectas forman un triángulo y las soluciones son la circunferencia <b>inscrita</b> y las tres <b>exinscritas</b>, con centros en el corte de las bisectrices.</p>`,
      svg: s1,
    },
    {
      html: `<h3>2.2 Los métodos: lugares geométricos, potencia, dilatación e inversión</h3><p>Para resolver un problema de tangencias hay que encontrar el <b>centro</b> y el <b>radio</b> de la solución, o bien un <b>punto de tangencia</b> y el centro. Hay cuatro herramientas:</p><ul><li><b>Lugares geométricos</b>: mediatrices, bisectrices y paralelas. Bastan para PPP y RRR.</li><li><b>Potencia</b>: da los puntos de tangencia a partir de un eje o centro radical. Sirve para PPR, PPC y PRR.</li><li><b>Dilatación</b> (o traslación de radios): si se aumenta o disminuye el radio de la solución en la misma cantidad que el de una circunferencia dada, la tangencia se conserva. Si se resta el radio r de la circunferencia dada, esta se convierte en su centro O (un punto) y las rectas se trasladan una distancia r. Así, un caso con C pasa a ser un caso con P.</li><li><b>Inversión</b>: transforma circunferencias en rectas y conserva la tangencia. Sirve para los casos con dos o más circunferencias.</li></ul><p>En la dilatación hay que tener cuidado con el sentido: si la tangencia es <b>exterior</b>, la recta paralela se traslada hacia el lado opuesto a la solución y el radio de la solución aumenta; si es <b>interior</b>, al revés.</p>`,
      svg: s2,
    },
    {
      html: `<h3>2.3 Caso PPC: por dos puntos y tangente a una circunferencia</h3><p>Se buscan las circunferencias que pasan por A y B y son tangentes a la circunferencia c, de centro O. Todas las circunferencias por A y B forman un haz de eje radical AB. Si la solución toca a c en T, el eje radical de la solución y c es la tangente común en T. Por tanto:</p><ol><li>Se traza una <b>circunferencia auxiliar</b> que pase por A y B y corte a c.</li><li>El eje radical de la auxiliar y c (la cuerda común) corta a la recta AB en el <b>centro radical R</b>.</li><li>Desde R se trazan las <b>tangentes a c</b>: sus puntos de contacto T₁ y T₂ son los puntos de tangencia, porque RT² = RA · RB.</li><li>Los centros están en la <b>mediatriz de AB</b> y en las rectas OT₁ y OT₂.</li></ol><p>Hay dos soluciones, una tangente exterior y otra interior a c (o las dos exteriores, según la posición). Si A y B están a distinto lado de c, no hay solución; si la mediatriz de AB pasa por O, AB es paralela al eje radical y el caso se resuelve por simetría.</p>`,
      svg: s3,
    },
    {
      html: `<h3>2.4 Caso PRR: por un punto y tangente a dos rectas</h3><p>Se buscan las circunferencias que pasan por P y son tangentes a las rectas r y s, que se cortan. El centro de toda circunferencia tangente a r y s está en una de sus <b>bisectrices</b> (la del ángulo en que está P). Esa bisectriz es un eje de simetría de la solución, así que la solución también pasa por el <b>simétrico P′</b> de P respecto de ella.</p><p>Con dos puntos, P y P′, y una recta, r, el problema es un caso <b>PPR</b>, que se resuelve por potencia:</p><ol><li>Se halla P′, simétrico de P respecto de la bisectriz.</li><li>La recta PP′ corta a r en R.</li><li>Se calcula RT = √(RP · RP′) con la tangente a una circunferencia auxiliar por P y P′.</li><li>Se lleva RT sobre r a ambos lados de R: T₁ y T₂.</li><li>Las perpendiculares a r por T₁ y T₂ cortan a la bisectriz en los centros.</li></ol><p>Si r y s son <b>paralelas</b>, el centro está en la paralela media y el radio es la mitad de la distancia entre ellas; los centros se obtienen con una circunferencia de ese radio centrada en P.</p>`,
      svg: s4,
      video: { id: "i461SAc3Ucc", titulo: "Circunferencias tangentes a dos rectas que se cortan pasando por un punto (potencia)", canal: "PDD Profesor de Dibujo", vistas: 243565, busqueda: "circunferencia tangente a dos rectas por un punto potencia" },
    },
    {
      html: `<h3>2.5 Recta y circunferencia con el punto de tangencia en la recta</h3><p>Se busca la circunferencia tangente a la recta r en un punto T dado y tangente a la circunferencia c de centro O y radio r<sub>c</sub>. El centro X está en la perpendicular a r por T y además debe cumplir XO = XT + r<sub>c</sub> (tangencia exterior). Es un caso típico de <b>dilatación</b>:</p><ol><li>Por T se traza la perpendicular a r.</li><li>Sobre ella, en el lado <b>opuesto</b> a la solución, se lleva TT′ = r<sub>c</sub>.</li><li>La mediatriz de OT′ corta a la perpendicular en el centro X: equidista de O y T′, así que XO = XT′ = XT + r<sub>c</sub>.</li><li>El punto de tangencia con c está en la recta XO.</li></ol><p>Para la solución <b>interior</b> (c dentro de la solución) se lleva TT′ hacia el mismo lado de la solución, de modo que XO = XT − r<sub>c</sub>. Con las dos opciones y los dos lados de r salen hasta cuatro soluciones.</p><p>La misma idea, con potencia, resuelve el caso en que el dato es el punto de tangencia sobre la circunferencia.</p>`,
      svg: s5,
      video: { id: "xMmeeKWpmj0", titulo: "Tangente a una recta y a una circunferencia dado el punto de tangencia en la recta", canal: "PDD Profesor de Dibujo", vistas: 200232, busqueda: "tangente a recta y circunferencia punto de tangencia" },
    },
    {
      html: `<h3>2.6 Dos circunferencias con el punto de tangencia en una de ellas</h3><p>Se busca la circunferencia tangente a c₁ en el punto T y tangente a c₂. Como la solución y c₁ son tangentes en T, sus centros y T están <b>alineados</b>: el centro X está en la recta O₁T. Falta un segundo lugar geométrico.</p><p>Se aplica la dilatación respecto de c₂: si la tangencia con c₂ es exterior, XO₂ = XT + r₂. Por eso:</p><ol><li>Se prolonga O₁T.</li><li>Desde T, hacia el interior de la solución, se lleva TT′ = r₂ sobre esa recta.</li><li>La mediatriz de T′O₂ corta a la recta O₁T en X.</li><li>El punto de tangencia con c₂ está en el segmento XO₂.</li></ol><p>Para la solución con tangencia interior a c₂ se lleva r₂ hacia fuera. También se puede resolver por potencia: la tangente a c₁ en T es eje radical de c₁ y la solución; su corte con el eje radical de c₁ y c₂ es el centro radical, desde el que se traza la tangente a c₂.</p><p>Este caso aparece constantemente en piezas con <b>arcos de enlace</b> entre dos agujeros o perfiles curvos.</p>`,
      svg: s6,
      video: { id: "kMCi2cIjnfE", titulo: "Circunferencias tangentes a dos circunferencias conociendo un punto de tangencia (potencia)", canal: "PDD Profesor de Dibujo", vistas: 184979, busqueda: "tangente a dos circunferencias punto de tangencia" },
    },
    {
      html: `<h3>2.7 La inversión: definición y elementos</h3><p>La <b>inversión</b> es una transformación del plano definida por un punto O, el <b>centro de inversión</b>, y un número k ≠ 0, la <b>potencia de inversión</b>. A cada punto P (distinto de O) le corresponde el punto P′ de la recta OP que cumple:</p><div class="formula"><span>OP · OP′ = k</span></div><ul><li>Si k &gt; 0 (<b>inversión positiva</b>), P y P′ están al mismo lado de O. Los puntos que cumplen OP² = k son <b>dobles</b> (se transforman en sí mismos) y forman la <b>circunferencia de inversión</b>, de radio √k. Los puntos interiores pasan a ser exteriores y viceversa.</li><li>Si k &lt; 0 (<b>inversión negativa</b>), P y P′ están a lados opuestos de O. Equivale a una inversión positiva seguida de una simetría central de centro O. No hay puntos dobles.</li></ul><p>La inversión es <b>involutiva</b>: el inverso de P′ es P. El centro O no tiene inverso (se dice que se transforma en el punto del infinito). Una inversión queda definida por el centro y una pareja de puntos inversos A y A′, porque k = OA · OA′.</p><p>Dos parejas de puntos inversos A, A′ y B, B′ no alineados con O son siempre <b>concíclicas</b>: están en una misma circunferencia, porque OA · OA′ = OB · OB′ es la potencia de O respecto de ella.</p>`,
      svg: s7,
      video: { id: "vU0-QDq33-w", titulo: "Inversión: definición, elementos y normas", canal: "Arturo Geometría", vistas: 77338, busqueda: "inversión geométrica dibujo técnico" },
    },
    {
      html: `<h3>2.8 Construcción del inverso de un punto</h3><p>En una inversión positiva con circunferencia de inversión de centro O y radio ρ = √k, el inverso de un punto se obtiene con tangentes:</p><ul><li><b>P exterior</b>: se trazan desde P las tangentes a la circunferencia de inversión; la <b>cuerda de contacto</b> T₁T₂ corta a OP en P′. En el triángulo rectángulo OT₁P, la altura sobre la hipotenusa cumple OP · OP′ = OT₁² = k (teorema del cateto).</li><li><b>P interior</b>: se hace al revés. Por P se traza la perpendicular a OP, que corta a la circunferencia en T; la tangente en T corta a OP en P′.</li></ul><p>Si la inversión viene dada por una pareja A, A′ y se busca el inverso de B: se traza la circunferencia que pasa por A, A′ y B; la recta OB la corta en B′. Este método no necesita conocer k y es el más usado en los ejercicios.</p><p>Si la inversión es negativa, se construye el inverso con potencia |k| y después se toma el simétrico respecto de O.</p>`,
      svg: s8,
    },
    {
      html: `<h3>2.9 Inversa de una recta</h3><p>Una recta <b>que pasa por el centro O</b> es <b>doble</b>: se transforma en sí misma (cada punto va a otro punto de la misma recta).</p><p>Una recta r <b>que no pasa por O</b> se transforma en una <b>circunferencia que pasa por O</b>. Para dibujarla:</p><ol><li>Se traza desde O la perpendicular a r; su pie es H.</li><li>Se halla el inverso H′ de H.</li><li>La circunferencia de diámetro OH′ es la inversa de r.</li></ol><p>La razón es que, para cualquier punto P de r, el triángulo OHP es rectángulo en H; como OP · OP′ = OH · OH′, los triángulos OHP y OP′H′ son semejantes y el ángulo en P′ es recto, de modo que P′ está en la circunferencia de diámetro OH′.</p><p>Recíprocamente, una circunferencia que pasa por O se transforma en una recta perpendicular al diámetro que pasa por O. Si r es exterior a la circunferencia de inversión, su inversa queda dentro; si es secante, la inversa pasa por los dos puntos de corte (son dobles).</p>`,
      svg: s9,
    },
    {
      html: `<h3>2.10 Inversa de una circunferencia</h3><p>Una circunferencia c que <b>no pasa por O</b> se transforma en otra <b>circunferencia</b> c′. Además, c y c′ son <b>homotéticas</b> con centro O, con razón k / p, donde p es la potencia de O respecto de c. Pero cuidado: el <b>centro de c no se transforma en el centro de c′</b>.</p><p>Para dibujarla basta con transformar dos puntos diametralmente opuestos alineados con O: el más cercano A y el más lejano B. Sus inversos A′ y B′ son también diametralmente opuestos en c′, pero cambiados de orden: el punto más cercano a O pasa a ser el más lejano. El centro de c′ es el punto medio de A′B′.</p><p>Casos especiales:</p><ul><li>Si c es <b>concéntrica</b> con la de inversión, su inversa también es concéntrica, de radio k / r.</li><li>Si c <b>pasa por O</b>, se transforma en una recta (apartado anterior).</li><li>Si c es <b>ortogonal</b> a la circunferencia de inversión, es doble (apartado siguiente).</li></ul><p>Si se elige k igual a la potencia de O respecto de c, entonces c′ = c: la circunferencia es doble aunque sus puntos no lo sean.</p>`,
      svg: s10,
    },
    {
      html: `<h3>2.11 Propiedades de la inversión</h3><p>Las propiedades que hacen de la inversión una herramienta tan útil son:</p><ul><li><b>Conserva los ángulos</b> (es una transformación <b>conforme</b>): si dos curvas se cortan formando un ángulo, sus inversas se cortan formando el mismo ángulo.</li><li>Como consecuencia, <b>conserva las tangencias</b>: si dos figuras son tangentes, sus inversas también lo son (o son paralelas, si el punto de tangencia era O).</li><li>Las circunferencias <b>ortogonales a la circunferencia de inversión</b> son dobles: cada recta por O corta a una de ellas en dos puntos P y P′ con OP · OP′ = OT² = k.</li><li>No conserva las distancias ni los centros, ni las rectas en general.</li></ul><p>La estrategia para resolver tangencias es: elegir el centro de inversión en un punto dado (o en un punto de tangencia) para que alguna circunferencia pase a ser recta; resolver el problema transformado, que es más sencillo; y deshacer la inversión, que devuelve las soluciones. A veces conviene elegir k de modo que una de las circunferencias dadas sea doble y no haya que transformarla.</p>`,
      svg: s11,
    },
    {
      html: `<h3>2.12 Caso PCC por inversión</h3><p>Se buscan las circunferencias que pasan por P y son tangentes a c₁ y c₂. Se toma una inversión de <b>centro P</b>. Como las soluciones pasan por P, sus inversas son <b>rectas</b>. Y como la inversión conserva las tangencias, esas rectas son tangentes a las inversas de c₁ y c₂. El procedimiento:</p><ol><li>Se elige la potencia k igual a la potencia de P respecto de c₁: así c₁ es <b>doble</b> (c₁′ = c₁).</li><li>Se halla la inversa c₂′ de c₂ (dos puntos alineados con P y su punto medio).</li><li>Se trazan las <b>tangentes comunes</b> a c₁ y c₂′: hasta cuatro.</li><li>Cada tangente se invierte en una circunferencia que pasa por P: pie H de la perpendicular desde P, inverso H′ y circunferencia de diámetro PH′.</li></ol><p>Así, un problema difícil se convierte en trazar tangentes comunes a dos circunferencias, que ya sabes resolver desde primero. Por el mismo camino se resuelve PRC (la recta se transforma en circunferencia por P).</p>`,
      svg: s12,
    },
    {
      html: `<h3>2.13 El problema general CCC</h3><p>El caso más complejo es el de tres circunferencias c₁, c₂ y c₃. Puede tener hasta <b>ocho soluciones</b>, según que cada circunferencia dada quede fuera o dentro de la solución (2³ = 8 combinaciones). La estrategia es encadenar los métodos:</p><ol><li><b>Dilatación</b>: se resta el radio de la circunferencia menor, c₃, a las tres (o se suma, según el tipo de tangencia). c₃ se reduce a su centro O₃ y las otras dos cambian de radio. El problema pasa a ser <b>PCC</b>.</li><li><b>Inversión</b> de centro O₃: las circunferencias pasan a ser c₁′ y c₂′, y las soluciones, sus tangentes comunes.</li><li>Se deshace la inversión y luego la dilatación: el radio de cada solución aumenta (o disminuye) en r₃.</li></ol><p>En la PAU no se suele pedir el caso completo, pero sí uno o dos de sus pasos, o casos con datos especiales (radios iguales, centros alineados). También se puede resolver con <b>centros de homotecia</b> y ejes radicales (método de Gergonne). Saber identificar qué método aplicar en cada caso es la competencia que más se valora.</p>`,
      svg: s13,
    },
  ],
  ejemplos: [
    { enunciado: "Se buscan las circunferencias por A y B tangentes a c. Una auxiliar por A y B corta a c, y su cuerda común corta a AB en R, con RA = 2 cm y RB = 8 cm. ¿Cuánto mide la tangente desde R a c?", pasos: ["R es centro radical: su potencia respecto de c es la misma que respecto de cualquier circunferencia por A y B.", "RT² = RA · RB = 16 cm²."], resultado: "RT = 4 cm: los puntos de tangencia están en c a 4 cm de R." },
    { enunciado: "Dos rectas forman 60° y P está en la bisectriz a 6 cm del vértice V. ¿Qué radios tienen las circunferencias por P tangentes a las dos rectas?", pasos: ["Un centro X en la bisectriz a distancia x de V tiene radio x · sen 30° = x/2.", "Debe pasar por P: |x − 6| = x/2.", "x − 6 = x/2 → x = 12; 6 − x = x/2 → x = 4."], resultado: "Dos soluciones de radios 6 cm y 2 cm." },
    { enunciado: "Una inversión positiva tiene centro O y potencia k = 36 cm². ¿Dónde está el inverso de un punto a 9 cm de O? ¿Y el de un punto a 6 cm?", pasos: ["OP′ = k / OP = 36 / 9 = 4 cm, en la semirrecta OP.", "OP = 6 = √36: el punto está en la circunferencia de inversión."], resultado: "A 4 cm de O; el segundo es doble." },
    { enunciado: "Con O y k = 100, invierte la recta situada a 20 cm de O.", pasos: ["H a 20 cm: OH′ = 100 / 20 = 5 cm.", "La inversa es la circunferencia de diámetro OH′."], resultado: "Circunferencia de radio 2,5 cm que pasa por O, con el centro en OH a 2,5 cm." },
    { enunciado: "Con O y k = 64, halla la inversa de una circunferencia de radio 2 cuyo centro está a 6 de O.", pasos: ["Puntos alineados: A a 4 y B a 8 de O.", "A′ a 64/4 = 16 y B′ a 64/8 = 8.", "c′ tiene diámetro A′B′ = 8: radio 4, centro a 12 de O."], resultado: "Circunferencia de radio 4 con centro a 12 cm de O (el inverso de C, a 64/6 ≈ 10,7, no es el centro)." },
    { enunciado: "Recta r horizontal, T sobre r y c de radio 2 cm con centro O a 6 cm a la derecha de T y 4 cm por encima de r. Halla el radio de la circunferencia tangente a r en T y tangente exterior a c.", pasos: ["Centro X = T + (0, s); XO = s + 2.", "6² + (4 − s)² = (s + 2)² → 36 + 16 − 8s = 4s + 4.", "48 = 12s."], resultado: "s = 4 cm." },
  ],
  errores: [
    "Aplicar la potencia sin comprobar que R tiene potencia positiva: si está dentro de la circunferencia no hay tangente.",
    "En PRR, usar la bisectriz equivocada (la del ángulo que no contiene a P).",
    "En la dilatación, trasladar la recta hacia el lado de la solución cuando la tangencia es exterior.",
    "Creer que el centro de una circunferencia se transforma en el centro de su inversa.",
    "Olvidar que las rectas por el centro de inversión son dobles y las que no pasan por él son circunferencias por O.",
    "Contar mal las soluciones: dar solo una cuando el caso admite dos o más.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Enumera los diez casos del problema de Apolonio y el número máximo de soluciones de cada uno.", sol: "PPP 1, PPR 2, PPC 2, PRR 2, PRC 4, PCC 4, RRR 4, RRC 8, RCC 8, CCC 8." },
    { nivel: "básico", q: "Dibuja un triángulo de lados 6, 7 y 8 cm y traza su circunferencia inscrita.", sol: "Se cortan dos bisectrices interiores en el incentro I; el radio es la distancia de I a un lado (≈ 1,9 cm). Es tangente a los tres lados." },
    { nivel: "básico", q: "Traza las circunferencias que pasan por A y B (AB = 3 cm) y son tangentes a una recta r que forma 45° con AB y la corta a 2 cm de A.", sol: "R = AB ∩ r con RA = 2, RB = 5: RT = √10 ≈ 3,16 cm a cada lado de R. Centros en la mediatriz de AB y las perpendiculares a r por T₁ y T₂." },
    { nivel: "básico", q: "Explica por qué el centro de una circunferencia tangente a dos rectas está en una bisectriz.", sol: "Equidista de las dos rectas (el radio es la distancia a cada una), y el lugar de los puntos que equidistan de dos rectas son sus bisectrices." },
    { nivel: "básico", q: "En la dilatación, ¿qué le ocurre a una circunferencia dada de radio 15 mm si se resta 15 mm a todos los radios?", sol: "Se reduce a su centro, un punto. La solución, con el radio aumentado (tangencia exterior) o disminuido (interior), debe pasar por él." },
    { nivel: "básico", q: "Con centro O y k = 49, halla el inverso de un punto a 14 cm de O.", sol: "OP′ = 49 / 14 = 3,5 cm, en la semirrecta OP." },
    { nivel: "básico", q: "En una inversión negativa de potencia −25, ¿dónde está el inverso de un punto a 5 cm de O?", sol: "A 5 cm de O pero en el lado opuesto: es el simétrico respecto de O." },
    { nivel: "básico", q: "Construye gráficamente el inverso de un punto P exterior a la circunferencia de inversión (radio 3 cm, OP = 5 cm) y comprueba la medida.", sol: "Tangentes desde P, cuerda de contacto, corte con OP. OP′ = 9/5 = 1,8 cm." },
    { nivel: "básico", q: "¿Qué figura es la inversa de una recta que pasa por el centro de inversión? ¿Y de una que no pasa?", sol: "La primera, ella misma (doble). La segunda, una circunferencia que pasa por O." },
    { nivel: "básico", q: "¿Qué puntos son dobles en una inversión positiva? ¿Y en una negativa?", sol: "Positiva: los de la circunferencia de inversión, de radio √k. Negativa: ninguno." },
    { nivel: "básico", q: "Una inversión transforma A en A′ con OA = 3 y OA′ = 12. ¿Cuál es la potencia y el radio de la circunferencia de inversión?", sol: "k = 36; radio 6 (si A y A′ están al mismo lado de O)." },
    { nivel: "básico", q: "¿Por qué la inversión conserva las tangencias?", sol: "Porque conserva los ángulos (es conforme): dos curvas tangentes forman ángulo 0 y sus inversas también." },
    { nivel: "medio", q: "Resuelve el caso PPC: A y B a 2 cm uno del otro, circunferencia de radio 2 cm cuyo centro está a 5 cm de la recta AB. Describe la construcción completa.", sol: "Auxiliar por A y B que corte a c; cuerda común; corte con AB en R; tangentes desde R a c (T₁, T₂); centros en la mediatriz de AB y en OT₁, OT₂." },
    { nivel: "medio", q: "Resuelve PRR: rectas que forman 90° en V y P en la bisectriz a 5 cm de V. Calcula los radios.", sol: "Centro a distancia x de V en la bisectriz: radio x · sen 45° = x/√2. |x − 5| = x/√2 → x ≈ 17,07 (r ≈ 12,07) y x ≈ 2,93 (r ≈ 2,07)." },
    { nivel: "medio", q: "Traza la circunferencia tangente a r en T y tangente interior a c (c dentro de la solución). Explica en qué cambia respecto del caso exterior.", sol: "Se lleva TT′ = r_c hacia el mismo lado de la solución, de modo que XO = XT − r_c. La mediatriz de OT′ corta a la perpendicular por T en el centro." },
    { nivel: "medio", q: "Calcula el radio de la circunferencia tangente a r en T y exterior a c si O está a 8 cm de T en horizontal, a 6 cm por encima de r, y r_c = 3 cm.", sol: "64 + (6 − s)² = (s + 3)² → 64 + 36 − 12s = 6s + 9 → 18s = 91 → s ≈ 5,06 cm." },
    { nivel: "medio", q: "Traza la circunferencia tangente a c₁ (r₁ = 2 cm) en T y tangente exterior a c₂ (r₂ = 1,5 cm). Indica los pasos.", sol: "Recta O₁T; TT′ = 1,5 cm hacia dentro de la solución; mediatriz de T′O₂; su corte con O₁T es X; radio XT." },
    { nivel: "medio", q: "Con O y k = 36, invierte la circunferencia de centro a 10 de O y radio 2.", sol: "Puntos a 8 y 12: inversos a 4,5 y 3. c′ con diámetro 1,5, radio 0,75, centro a 3,75 de O." },
    { nivel: "medio", q: "Halla la potencia de inversión para que una circunferencia de radio 3 con centro a 5 de O sea doble.", sol: "k = potencia de O respecto de ella = 25 − 9 = 16. La circunferencia de inversión, de radio 4, es ortogonal a la dada." },
    { nivel: "medio", q: "Una inversión está definida por O, A y A′. Explica cómo se halla el inverso de B sin conocer k.", sol: "Se traza la circunferencia por A, A′ y B; la recta OB la corta en B′, porque OB · OB′ = OA · OA′ es la potencia de O respecto de ella." },
    { nivel: "medio", q: "Invierte un cuadrado de lado 4 cm cuyo centro es el centro de inversión (k = 16).", sol: "Cada lado está a 2 cm de O y no pasa por él: se transforma en un arco de circunferencia por O de diámetro 16/2 = 8 cm. La figura inversa es una «flor» de cuatro arcos que se cortan en ángulo recto (se conservan los ángulos del cuadrado)." },
    { nivel: "medio", q: "Resuelve RRC por dilatación: dos rectas paralelas a 6 cm y una circunferencia de radio 1 cm entre ellas. ¿Qué radio tienen las soluciones?", sol: "Tangentes a las dos paralelas: radio 3 cm, centros en la paralela media. Con dilatación (+1 cm) el centro está a 4 cm de O (tangencia exterior) o a 2 cm (interior)." },
    { nivel: "medio", q: "¿Por qué dos parejas de puntos inversos A, A′ y B, B′ no alineados con O están en una circunferencia?", sol: "Porque OA · OA′ = OB · OB′ = k: por el recíproco de la potencia, los cuatro puntos son concíclicos." },
    { nivel: "medio", q: "Explica cómo se usa la inversión para resolver PRC (punto, recta y circunferencia).", sol: "Centro de inversión en P: las soluciones se transforman en rectas; la recta dada, en una circunferencia por P; c, en c′ (o doble si k es su potencia). Se trazan las tangentes comunes a las dos circunferencias transformadas y se invierten." },
    { nivel: "avanzado", q: "Demuestra que la inversa de una recta que no pasa por O es una circunferencia por O.", sol: "Sea H el pie de la perpendicular desde O y P cualquier punto de r. OP · OP′ = OH · OH′ implica que los triángulos OHP y OP′H′ son semejantes (ángulo común en O y lados proporcionales). Como OHP es recto en H, OP′H′ es recto en P′: P′ está en la circunferencia de diámetro OH′." },
    { nivel: "avanzado", q: "Resuelve PCC con P, c₁ y c₂ por inversión de centro P y explica cuántas soluciones puede haber.", sol: "k = potencia de P respecto de c₁ (c₁ doble). Se invierte c₂ en c₂′. Hay hasta cuatro tangentes comunes a c₁ y c₂′ (dos exteriores y dos interiores), luego hasta cuatro soluciones, que son sus inversas." },
    { nivel: "avanzado", q: "Calcula las circunferencias tangentes exteriores a tres circunferencias de radio 1 con centros en (0, 0), (6, 0) y (3, 4).", sol: "Como los tres radios son iguales, el centro equidista de los tres centros: es su circuncentro. Con X = (3, y): 9 + y² = (4 − y)² → y = 7/8, y la distancia a cada centro es √(9 + 49/64) = 25/8 = 3,125. Tangente exterior: R = 3,125 − 1 = 2,125, centro (3; 0,875). La que envuelve a las tres tiene R = 4,125." },
    { nivel: "avanzado", q: "En el CCC, ¿por qué se resta el radio de la circunferencia menor y no el de otra?", sol: "Para que ningún radio resultante sea negativo: al restar el menor, la menor queda reducida a su centro y las otras siguen siendo circunferencias reales." },
    { nivel: "avanzado", q: "Razona qué figura es la inversa de dos circunferencias tangentes en el centro de inversión.", sol: "Ambas pasan por O, así que se transforman en rectas. Como eran tangentes en O (ángulo 0), las rectas son paralelas." },
    { nivel: "avanzado", q: "Elige un centro de inversión que transforme dos circunferencias que no se cortan en dos concéntricas.", sol: "Uno de los puntos límite del haz que determinan: todas las circunferencias por los dos puntos límite (ortogonales a ambas) pasan a ser rectas por el inverso del otro punto límite, que es entonces el centro común." },
    { nivel: "avanzado", q: "Traza las circunferencias tangentes a dos rectas paralelas y que pasan por un punto P situado entre ellas.", sol: "Radio = mitad de la distancia entre las rectas; centro en la paralela media a distancia igual al radio de P: corte de la paralela media con la circunferencia de centro P y ese radio. Dos soluciones." },
    { nivel: "avanzado", q: "Justifica el número máximo de soluciones del caso RRC.", sol: "Por dilatación se convierte en PRR (o PRR con rectas trasladadas a uno u otro lado) para la tangencia exterior y para la interior: 2 traslaciones posibles por recta (4 combinaciones) por 2 soluciones de PRR = 8." },
  ],
  quiz: reparte([
    { q: "¿Cuántos casos tiene el problema de Apolonio?", o: ["3", "6", "10", "8"], a: 2, e: "Combinaciones de P, R y C de tres en tres con repetición." },
    { q: "El caso RRR se resuelve con…", o: ["mediatrices", "bisectrices", "inversión", "potencia"], a: 1, e: "Inscrita y exinscritas." },
    { q: "En PPC, los puntos de tangencia se obtienen desde…", o: ["el punto medio de AB", "el centro radical R", "el centro de c", "A"], a: 1, e: "Tangentes desde R a c." },
    { q: "En PRR, el problema se convierte en…", o: ["PPR", "PPP", "RRR", "CCC"], a: 0, e: "Con el simétrico P′ respecto de la bisectriz." },
    { q: "La dilatación consiste en…", o: ["girar la figura", "sumar o restar el mismo radio a la solución y a las circunferencias dadas", "invertir", "proyectar"], a: 1, e: "Conserva la tangencia." },
    { q: "Al restar a todo el radio r de una circunferencia dada, esta se convierte en…", o: ["una recta", "su centro", "otra igual", "nada"], a: 1, e: "Radio cero." },
    { q: "En una inversión, OP · OP′ es…", o: ["0", "constante (k)", "OP²", "variable"], a: 1, e: "La potencia de inversión." },
    { q: "Los puntos dobles de una inversión positiva forman…", o: ["una recta", "la circunferencia de radio √k", "un punto", "nada"], a: 1, e: "OP² = k." },
    { q: "Una inversión negativa equivale a una positiva seguida de…", o: ["un giro de 90°", "una simetría central de centro O", "una traslación", "una homotecia de razón 2"], a: 1, e: "P′ al otro lado de O." },
    { q: "La inversa de una recta que no pasa por O es…", o: ["otra recta", "una circunferencia por O", "una circunferencia que no pasa por O", "un punto"], a: 1, e: "De diámetro OH′." },
    { q: "La inversa de una recta que pasa por O es…", o: ["ella misma", "una circunferencia", "un punto", "una parábola"], a: 0, e: "Es doble." },
    { q: "La inversa de una circunferencia que no pasa por O es…", o: ["una recta", "otra circunferencia", "un punto", "una elipse"], a: 1, e: "Homotética de centro O." },
    { q: "El centro de una circunferencia se transforma en…", o: ["el centro de la inversa", "otro punto que no es el centro", "O", "el infinito"], a: 1, e: "Error típico." },
    { q: "La inversión conserva…", o: ["las distancias", "los ángulos", "las rectas", "las áreas"], a: 1, e: "Es conforme." },
    { q: "Una circunferencia ortogonal a la de inversión es…", o: ["doble", "una recta", "un punto", "imposible"], a: 0, e: "Se transforma en sí misma." },
    { q: "Para que c sea doble, la potencia de inversión debe ser…", o: ["el radio de c", "la potencia de O respecto de c", "1", "el diámetro"], a: 1, e: "k = p(O, c)." },
    { q: "Con k = 100 y OP = 25, OP′ =", o: ["4", "75", "5", "2 500"], a: 0, e: "100/25." },
    { q: "En PCC por inversión, el centro de inversión se pone en…", o: ["el centro de c₁", "P", "un punto cualquiera", "el centro radical"], a: 1, e: "Las soluciones pasan a ser rectas." },
    { q: "El caso CCC admite hasta…", o: ["2 soluciones", "4", "8", "infinitas"], a: 2, e: "2³ combinaciones de tangencias." },
    { q: "Inverso de un punto exterior P: se usa…", o: ["la cuerda de contacto de las tangentes desde P", "la mediatriz de OP", "la bisectriz", "un giro"], a: 0, e: "Su corte con OP es P′." },
  ]),
  examen: reparte([
    { q: "En PPC, RA = 3 y RB = 12. RT =", o: ["15", "6", "9", "36"], a: 1, e: "√36." },
    { q: "Rectas a 60° y P en la bisectriz a 9 del vértice. Radio de la solución pequeña:", o: ["3", "4,5", "6", "9"], a: 0, e: "9 − x = x/2 → x = 6; radio 3." },
    { q: "Con k = 81, el inverso de un punto a 27 de O está a…", o: ["3", "9", "54", "1/3"], a: 0, e: "81/27." },
    { q: "Invertir una recta a 5 de O con k = 25 da una circunferencia de diámetro…", o: ["5", "10", "2,5", "25"], a: 0, e: "OH′ = 25/5 = 5." },
    { q: "Dos circunferencias tangentes en O se invierten en…", o: ["dos rectas paralelas", "dos rectas secantes", "dos circunferencias", "un punto"], a: 0, e: "Ángulo 0 → paralelas." },
    { q: "El método que reduce CCC a PCC es…", o: ["la inversión", "la dilatación", "la potencia", "la simetría"], a: 1, e: "Se resta el radio menor." },
    { q: "Si P está entre A y B en PPC con c…", o: ["siempre hay 2 soluciones", "puede no haber solución", "hay 4", "hay 1"], a: 1, e: "Depende de la posición respecto de c." },
    { q: "Con k = 16, una circunferencia concéntrica a O de radio 8 se invierte en otra de radio…", o: ["2", "4", "8", "16"], a: 0, e: "16/8." },
  ]),
  feynman: ["Por qué en el caso PPC el centro radical da los puntos de tangencia", "Cómo convierte la simetría el caso PRR en un caso PPR", "Qué hace la dilatación y cuándo se suma o se resta el radio", "Por qué la inversión transforma rectas en circunferencias por el centro", "Cómo se resuelve el caso PCC con una inversión"],
  glosario: [
    ["Problema de Apolonio", "Trazar las circunferencias que cumplen tres condiciones de paso o tangencia."],
    ["Centro radical", "Punto con igual potencia respecto de tres circunferencias."],
    ["Dilatación", "Sumar o restar el mismo valor a los radios conservando las tangencias."],
    ["Inversión", "Transformación que asocia a P el punto P′ de OP con OP · OP′ = k."],
    ["Centro de inversión", "Punto O a partir del que se miden las distancias en la inversión."],
    ["Potencia de inversión", "Constante k = OP · OP′."],
    ["Circunferencia de inversión", "Circunferencia de centro O y radio √k, formada por los puntos dobles."],
    ["Inversión negativa", "Inversión con k < 0: P y P′ a distinto lado de O."],
    ["Puntos inversos", "Pareja de puntos P, P′ que se corresponden en una inversión."],
    ["Figura doble", "Figura que se transforma en sí misma."],
    ["Transformación conforme", "La que conserva los ángulos."],
    ["Circunferencia inscrita", "La tangente a los tres lados de un triángulo desde dentro."],
    ["Circunferencia exinscrita", "La tangente a un lado y a las prolongaciones de los otros dos."],
    ["Punto de tangencia", "Punto común de dos figuras tangentes."],
  ],
  situacion: {
    titulo: "El rodillo que toca a los otros tres",
    reto: "Una imprenta necesita colocar un rodillo de entintado que toque a la vez a tres rodillos fijos de distintos diámetros. Vuestro grupo debe calcular dónde va su eje y qué diámetro debe tener, por métodos gráficos.",
    pasos: [
      "Tomad las medidas de los tres rodillos (podéis usar tres botes o tapas de distinto tamaño) y dibujadlos a escala 1:1.",
      "Identificad el caso de Apolonio (CCC) y elegid el tipo de tangencia: exterior a los tres.",
      "Aplicad la dilatación para reducir el rodillo menor a su centro.",
      "Resolved el caso PCC por inversión de centro en ese punto y deshaced las transformaciones.",
      "Medid el radio del nuevo rodillo y comprobadlo con un objeto real o en CAD.",
    ],
    producto: "Lámina A3 con la construcción completa, paso a paso, y una ficha técnica con la posición del eje y el diámetro del rodillo.",
    evaluacion: [
      "Identifica el caso y elige los métodos adecuados.",
      "Aplica la dilatación y la inversión con rigor.",
      "Obtiene una solución precisa y la comprueba.",
      "Presenta la lámina con claridad y explica cada paso.",
    ],
  },
  figura: fig("Tangencias de un vistazo", "Resumen: casos de Apolonio, potencia, dilatación e inversión", [
    ["Apolonio", ["10 casos: P, R, C", "RRR: bisectrices", "PPP: mediatrices", "CCC: hasta 8"], "var(--red)"],
    ["Potencia", ["PPR: RT² = RA · RB", "PPC: centro radical", "PRR: simétrico P′", "tangentes desde R"], "var(--pen)"],
    ["Dilatación", ["± radio a todo", "C → punto", "recta → paralela", "exterior / interior"], "var(--leaf)"],
    ["Inversión", ["OP · OP′ = k", "recta ↔ circ. por O", "conserva ángulos", "ortogonal: doble"], "var(--inf)"],
  ]),
  video: { id: "xDOwKuR5gWg", titulo: "Circunferencias tangentes a otra pasando por dos puntos (potencia). Apolonio CPP", canal: "Arturo Geometría", vistas: 89443, busqueda: "problemas de Apolonio tangencias" },
  mapa: mapa("TANGENCIAS", "var(--bac)", [
    ["Apolonio", "10 casos · P R C", "var(--red)"],
    ["Potencia", "PPR · PPC · PRR", "var(--pen)"],
    ["Dilatación", "reducir C a punto", "var(--leaf)"],
    ["Inversión", "rectas ↔ circunferencias", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Casos de Apolonio", "10 (PPP … CCC)"],
    ["RRR", "Inscrita y 3 exinscritas."],
    ["PPR", "RT² = RA · RB"],
    ["PPC", "Centro radical + tangentes desde R."],
    ["PRR", "Simétrico respecto de la bisectriz → PPR."],
    ["Dilatación", "Restar el radio de c: c → su centro."],
    ["Inversión", "OP · OP′ = k"],
    ["Puntos dobles", "Circunferencia de radio √k."],
    ["Recta sin O", "→ circunferencia por O."],
    ["Circunferencia sin O", "→ circunferencia (centro no se conserva)."],
    ["Ortogonal a la de inversión", "Doble."],
    ["PCC", "Inversión de centro P → tangentes comunes."],
  ],
  familias: ["Buscad tres vasos o tapas de distinto tamaño y pedid que dibuje una circunferencia que toque a las tres.", "Mirad juntos los engranajes de una bicicleta o un reloj: cada rueda es tangente a otras.", "Pedid que os explique qué es una inversión con el ejemplo de un punto dentro y fuera de un círculo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: resolución de problemas de tangencias mediante potencia, centro radical y dilatación; transformación de inversión: elementos, construcción de figuras inversas y propiedades; aplicación de la inversión a los problemas de Apolonio (RD 243/2022, Dibujo Técnico II, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["GeoGebra: herramienta «Refleja objeto en circunferencia» para explorar la inversión de rectas y circunferencias.", "Concurso por equipos: resolver los diez casos de Apolonio con regla y compás en el menor tiempo.", "Relación con Matemáticas II: posición de un receptor por trilateración (intersección de esferas).", "CAD: comparar la orden «circunferencia tangente, tangente, tangente» con la construcción manual."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Problema de Apolonio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Problema_de_Apolonio" },
    { t: "Inversión (geometría), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Inversi%C3%B3n_(geometr%C3%ADa)" },
  ],
  revisado: "2026-11-21",
};
