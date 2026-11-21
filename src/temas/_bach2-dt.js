// Ayudas de dibujo para Dibujo Técnico II (2º de Bachillerato, nivel libro).
// Reutiliza la geometría calculada de Dibujo Técnico I y añade inversión, homología, afinidad,
// cónicas, curvas cíclicas, axonometrías generales y perspectiva cónica. Coordenadas de pantalla (y hacia abajo).
const G = require("./_bach1-dt");
const { add, sub, mul, dist, unit, corteRR, rad, n2, pie, seg } = G;
const P2 = (A) => `${n2(A[0])} ${n2(A[1])}`;

// ---------- Inversión ----------
// Inverso de P respecto del centro O con potencia k (k > 0 positiva, k < 0 negativa): OP · OP' = |k|.
const inv = (P, O, k) => { const d = dist(O, P), u = unit(O, P), r = Math.abs(k) / d; return add(O, mul(u, k > 0 ? r : -r)); };
// Inversa de una circunferencia (C, r) que no pasa por O: devuelve [centro, radio].
function invCirc(C, r, O, k) {
  const u = unit(O, C), d = dist(O, C), A = add(O, mul(u, d - r)), B = add(O, mul(u, d + r));
  const A1 = inv(A, O, k), B1 = inv(B, O, k);
  return [mul(add(A1, B1), 0.5), dist(A1, B1) / 2];
}

// ---------- Homología y afinidad ----------
// Homología de centro O, eje por E1-E2 y pareja A → A1 (alineados con O). Devuelve la función P → P′.
// Se calcula con la razón doble (O, M; P, P′), constante en toda la homología (M = corte del rayo OP con el eje).
function homologia(O, E1, E2, A, A1) {
  const tpos = (P) => { const M = corteRR(O, P, E1, E2), u = sub(M, O), L = u[0] * u[0] + u[1] * u[1]; return [M, ((P[0] - O[0]) * u[0] + (P[1] - O[1]) * u[1]) / L]; };
  const rz = (t) => t / (t - 1);
  const [, ta] = tpos(A), [, ta1] = tpos(A1), c = rz(ta) / rz(ta1);
  return (P) => {
    const [M, t] = tpos(P);
    if (Math.abs(t - 1) < 1e-9) return P;
    const r = rz(t) / c, t1 = r / (r - 1);
    return add(O, mul(sub(M, O), t1));
  };
}
// Afinidad de eje E1-E2 y pareja A → A1 (la dirección es AA1 y la razón, HA1 / HA con H en el eje).
function afinidad(E1, E2, A, A1) {
  const d = sub(A1, A), HA = corteRR(A, A1, E1, E2), k = dot2(sub(A1, HA), sub(A, HA)) / dot2(sub(A, HA), sub(A, HA));
  return (P) => { const H = corteRR(P, add(P, d), E1, E2); return add(H, mul(sub(P, H), k)); };
}
const dot2 = (u, v) => u[0] * v[0] + u[1] * v[1];

// ---------- Cónicas ----------
// Puntos de una elipse de centro C, semiejes a y b, girada g grados.
const elipsePts = (C, a, b, g = 0, n = 72) => Array.from({ length: n + 1 }, (_, i) => { const t = (2 * Math.PI * i) / n, x = a * Math.cos(t), y = b * Math.sin(t), c = Math.cos(rad(g)), s = Math.sin(rad(g)); return [C[0] + x * c - y * s, C[1] - (x * s + y * c)]; });
// Rama de hipérbola horizontal de centro C, semiejes a y b, signo sg (+1 derecha, −1 izquierda), parámetro hasta tMax.
const hiperPts = (C, a, b, sg = 1, tMax = 1.6, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const t = -tMax + (2 * tMax * i) / n; return [C[0] + sg * a * Math.cosh(t), C[1] - b * Math.sinh(t)]; });
// Parábola de vértice V, eje horizontal hacia la derecha (dir = 1) o izquierda, parámetro p (y² = 2px), hasta |y| = ym.
const paraPts = (V, p, ym = 70, dir = 1, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const y = -ym + (2 * ym * i) / n; return [V[0] + dir * (y * y) / (2 * p), V[1] + y]; });
// Parábola de eje vertical que abre hacia abajo en pantalla (sentido +y): y = V + x²/(2p).
const paraV = (V, p, xm = 70, sg = 1, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const x = -xm + (2 * xm * i) / n; return [V[0] + x, V[1] - sg * (x * x) / (2 * p)]; });

// ---------- Curvas cíclicas ----------
// Cicloide: circunferencia de radio r que rueda sobre la recta y = y0 desde x0 (n vueltas).
const cicloide = (x0, y0, r, vueltas = 1, n = 80) => Array.from({ length: n + 1 }, (_, i) => { const t = (2 * Math.PI * vueltas * i) / n; return [x0 + r * (t - Math.sin(t)), y0 - r * (1 - Math.cos(t))]; });
// Epicicloide (k = +1) o hipocicloide (k = −1): ruleta de radio r sobre la base de centro C y radio R.
// El punto generador parte de la base en el ángulo a0 (grados); «giro» es el ángulo que recorre el centro de la ruleta.
const rotm = (x, y, a) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
const epici = (C, R, r, k = 1, giro = 360, a0 = 90, n = 160) => Array.from({ length: n + 1 }, (_, i) => {
  const t = (rad(giro) * i) / n;
  const x = k > 0 ? (R + r) * Math.cos(t) - r * Math.cos(((R + r) / r) * t) : (R - r) * Math.cos(t) + r * Math.cos(((R - r) / r) * t);
  const y = k > 0 ? (R + r) * Math.sin(t) - r * Math.sin(((R + r) / r) * t) : (R - r) * Math.sin(t) - r * Math.sin(((R - r) / r) * t);
  const [u, v] = rotm(x, y, rad(a0));
  return [C[0] + u, C[1] - v];
});
// Evolvente de la circunferencia (C, r) desde el ángulo a0 (grados), desenrollando «giro» grados en sentido antihorario.
const evolvente = (C, r, giro = 360, a0 = 0, n = 120) => Array.from({ length: n + 1 }, (_, i) => {
  const t = (rad(giro) * i) / n, [u, v] = rotm(r * (Math.cos(t) + t * Math.sin(t)), r * (Math.sin(t) - t * Math.cos(t)), rad(a0));
  return [C[0] + u, C[1] - v];
});

// ---------- Axonometría ortogonal general ----------
// Proyección ortogonal de (x, y, z) con giro horizontal az y elevación el (grados). X hacia la izquierda-abajo, Y a la derecha, Z arriba.
const axo = (O, k = 1, az = 45, el = 35.264) => ([x, y, z]) => {
  const a = rad(az), e = rad(el);
  const X = -x * Math.cos(a) + y * Math.sin(a);
  const Yp = x * Math.sin(a) + y * Math.cos(a);
  const Z = z * Math.cos(e) - Yp * Math.sin(e);
  return [O[0] + X * k, O[1] - Z * k];
};
// Militar (planta en verdadera magnitud girada g grados, alturas con coeficiente c).
const militar = (O, g = 30, c = 1, k = 1) => ([x, y, z]) => { const a = rad(g); return [O[0] + (x * Math.cos(a) - y * Math.sin(a)) * k, O[1] - (x * Math.sin(a) + y * Math.cos(a)) * k * -1 - z * c * k]; };

// ---------- Perspectiva cónica ----------
// Plano del cuadro y = 0; observador en (ex, −D, h). Punto (x, y, z) con y ≥ 0 detrás del cuadro.
// Pantalla: origen del cuadro en O (pie de la línea de tierra bajo el punto principal), escala k.
const conica = (O, D, h, k = 1) => ([x, y, z]) => { const f = D / (D + y); return [O[0] + x * f * k, O[1] - (h + (z - h) * f) * k]; };


// ---------- Sistema diédrico ----------
// LT en y = yt. Un punto del espacio [x, o, c] (abscisa, alejamiento, cota) tiene proyecciones { h, v }.
const dP = (yt) => ([x, o, c]) => ({ h: [x, yt + o], v: [x, yt - c] });
// Plano a·(x − xN) + b·o + g·c = 0, que corta a la LT en N = (xN, yt).
function planoD(xN, a, b, g, yt) {
  const N = [xN, yt];
  const cota = (x, o) => -(a * (x - xN) + b * o) / g;
  const hTr = (x) => [x, yt - (a * (x - xN)) / b];
  const vTr = (x) => [x, yt + (a * (x - xN)) / g];
  const phi = Math.atan(Math.hypot(a, b) / Math.abs(g));
  const H2 = hTr(xN - 100);
  // Abatimiento sobre el PH alrededor de la traza h, hacia el lado opuesto a la LT.
  const abate = (x, o) => { const p = [x, yt + o], H = pie(p, N, H2), d = dist(p, H), c = cota(x, o); if (d < 1e-9) return p; return add(H, mul(unit(p, H), Math.hypot(d, c))); };
  // Desabatimiento: del punto abatido a la proyección horizontal.
  const desabate = (A) => { const H = pie(A, N, H2), D = dist(A, H); if (D < 1e-9) return A; return add(H, mul(unit(A, H), D * Math.cos(phi))); };
  const vDe = (p) => [p[0], yt - cota(p[0], p[1] - yt)];
  return { N, cota, hTr, vTr, phi, abate, desabate, vDe };
}
const pieF = (P, A, B) => { const u = unit(A, B), k = (P[0] - A[0]) * u[0] + (P[1] - A[1]) * u[1]; return [A[0] + u[0] * k, A[1] + u[1] * k]; };

// ---------- Trazos extra ----------
const dash = 'stroke-dasharray="5 3"';
const ejeL = 'stroke-dasharray="10 3 2 3"';
const oculta = 'stroke-dasharray="4 3"';
const rayado = (pts, c = "var(--pen)", op = 0.22) => `<path d="M${pts.map(P2).join(" L ")} Z" fill="${c}" fill-opacity="${op}" stroke="${c}" stroke-width="1.6"/>`;


// ---- Poliedros: envolvente convexa, giros 3D y dibujo con visibilidad ----
const v3 = { sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], mul: (a, k) => [a[0] * k, a[1] * k, a[2] * k], dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]] };
v3.norm = (a) => Math.hypot(...a);
v3.unit = (a) => v3.mul(a, 1 / v3.norm(a));
// Giro de Rodrigues: lleva el vector u sobre el vector w.
function giro3(u, w) {
  const a = v3.unit(u), b = v3.unit(w), k = v3.cross(a, b), s = v3.norm(k), c = v3.dot(a, b);
  if (s < 1e-12) return (P) => (c > 0 ? P : [P[0], -P[1], -P[2]]);
  const kk = v3.mul(k, 1 / s);
  return (P) => v3.add(v3.add(v3.mul(P, c), v3.mul(v3.cross(kk, P), s)), v3.mul(kk, v3.dot(kk, P) * (1 - c)));
}
const giroZ = (deg) => { const a = rad(deg), c = Math.cos(a), s = Math.sin(a); return (P) => [P[0] * c - P[1] * s, P[0] * s + P[1] * c, P[2]]; };
// Envolvente convexa por fuerza bruta (poliedros pequeños): caras ordenadas con normal exterior.
function envolvente(V) {
  const n = V.length, cen = v3.mul(V.reduce((s, p) => v3.add(s, p), [0, 0, 0]), 1 / n), caras = [], vistas = new Set();
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) for (let k = j + 1; k < n; k++) {
    let N = v3.cross(v3.sub(V[j], V[i]), v3.sub(V[k], V[i])); const L = v3.norm(N); if (L < 1e-9) continue; N = v3.mul(N, 1 / L);
    const d = v3.dot(N, V[i]); let pos = 0, neg = 0; const S = [];
    for (let m = 0; m < n; m++) { const t = v3.dot(N, V[m]) - d; if (Math.abs(t) < 1e-6) S.push(m); else if (t > 0) pos++; else neg++; }
    if (pos && neg) continue;
    const key = S.join(","); if (vistas.has(key)) continue; vistas.add(key);
    if (v3.dot(N, v3.sub(V[i], cen)) < 0) N = v3.mul(N, -1);
    const c = v3.mul(S.reduce((s, m) => v3.add(s, V[m]), [0, 0, 0]), 1 / S.length), e1 = v3.unit(v3.sub(V[S[0]], c)), e2 = v3.cross(N, e1);
    S.sort((p, q) => Math.atan2(v3.dot(v3.sub(V[p], c), e2), v3.dot(v3.sub(V[p], c), e1)) - Math.atan2(v3.dot(v3.sub(V[q], c), e2), v3.dot(v3.sub(V[q], c), e1)));
    caras.push({ idx: S, n: N });
  }
  const aristas = new Map();
  caras.forEach((f, fi) => f.idx.forEach((a, t) => { const b = f.idx[(t + 1) % f.idx.length], key = a < b ? a + "-" + b : b + "-" + a; if (!aristas.has(key)) aristas.set(key, { a: Math.min(a, b), b: Math.max(a, b), caras: [] }); aristas.get(key).caras.push(fi); }));
  return { V, caras, aristas: [...aristas.values()] };
}
// Dibuja un poliedro con una proyección P (punto 3D → pantalla) y un vector hacia el observador w.
function polVista(pol, P, w, c = "var(--pen)", fill = 0.1, wv = 2.2) {
  const vis = pol.caras.map((f) => v3.dot(f.n, w) > 1e-6), Q = pol.V.map(P);
  const ocultas = pol.aristas.filter((e) => !e.caras.some((f) => vis[f])), visibles = pol.aristas.filter((e) => e.caras.some((f) => vis[f]));
  const caras = pol.caras.filter((f, i) => vis[i]).map((f) => `<path d="M${f.idx.map((i) => P2(Q[i])).join(" L ")} Z" fill="${c}" fill-opacity="${fill}" stroke="none"/>`).join("");
  return caras + ocultas.map((e) => seg(Q[e.a], Q[e.b], c, 1.1, 'stroke-dasharray="4 3"')).join("") + visibles.map((e) => seg(Q[e.a], Q[e.b], c, wv)).join("");
}
// Planta y alzado de un poliedro dado en coordenadas (x, alejamiento, cota).
const polDiedrico = (pol, yt, c = "var(--pen)") => polVista(pol, (p) => [p[0], yt + p[1]], [0, 0, 1], c) + polVista(pol, (p) => [p[0], yt - p[2]], [0, 1, 0], c);
// Vista axonométrica ortogonal genérica (az, el en grados) con su vector de visión.
const vistaAxo = (O, k, az, el) => { const a = rad(az), e = rad(el); const R = (p) => { const x1 = p[0] * Math.cos(a) - p[1] * Math.sin(a), y1 = p[0] * Math.sin(a) + p[1] * Math.cos(a); return [x1, y1, p[2]]; }; const w0 = [0, -Math.cos(e), Math.sin(e)]; const w = [w0[0] * Math.cos(a) + w0[1] * Math.sin(a), -w0[0] * Math.sin(a) + w0[1] * Math.cos(a), w0[2]]; return { P: (p) => { const r = R(p); return [O[0] + r[0] * k, O[1] - (r[1] * Math.sin(e) + r[2] * Math.cos(e)) * k]; }, w }; };
const POL = {
  tetra: (a) => { const r = a / Math.sqrt(3), h = a * Math.sqrt(2 / 3); return [0, 1, 2].map((i) => [r * Math.cos(rad(90 + 120 * i)), r * Math.sin(rad(90 + 120 * i)), 0]).concat([[0, 0, h]]); },
  cubo: (a) => [0, 1].flatMap((i) => [0, 1].flatMap((j) => [0, 1].map((k) => [(i - 0.5) * a, (j - 0.5) * a, k * a]))),
  octa: (a) => { const r = a / Math.SQRT2; return [[r, 0, r], [-r, 0, r], [0, r, r], [0, -r, r], [0, 0, 0], [0, 0, 2 * r]]; },
  ico: (a) => { const f = (1 + Math.sqrt(5)) / 2, s = a / 2; const V = []; [-1, 1].forEach((p) => [-1, 1].forEach((q) => { V.push([0, p * s, q * f * s], [p * s, q * f * s, 0], [q * f * s, 0, p * s]); })); return V; },
  dodeca: (a) => { const f = (1 + Math.sqrt(5)) / 2, s = a * f / 2, V = []; [-1, 1].forEach((p) => [-1, 1].forEach((q) => [-1, 1].forEach((r) => V.push([p * s, q * s, r * s])))); [-1, 1].forEach((p) => [-1, 1].forEach((q) => { V.push([0, p * s / f, q * s * f], [p * s / f, q * s * f, 0], [q * s * f, 0, p * s / f]); })); return V; },
};
// Coloca un conjunto de puntos: apoya el mínimo de cota en c0 y centra en (x, o).
const colocar = (V, x, o, c0 = 0) => { const zmin = Math.min(...V.map((p) => p[2])), cx = (Math.min(...V.map((p) => p[0])) + Math.max(...V.map((p) => p[0]))) / 2, cy = (Math.min(...V.map((p) => p[1])) + Math.max(...V.map((p) => p[1]))) / 2; return V.map((p) => [p[0] - cx + x, p[1] - cy + o, p[2] - zmin + c0]); };
module.exports = { ...G, v3, giro3, giroZ, envolvente, polVista, polDiedrico, vistaAxo, POL, colocar, P2, inv, invCirc, homologia, afinidad, elipsePts, hiperPts, paraPts, paraV, cicloide, epici, evolvente, axo, militar, conica, dP, planoD, dash, ejeL, oculta, rayado };
