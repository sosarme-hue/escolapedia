// Ayudas de dibujo para Dibujo Técnico II (2º de Bachillerato, nivel libro).
// Reutiliza la geometría calculada de Dibujo Técnico I y añade inversión, homología, afinidad,
// cónicas, curvas cíclicas, axonometrías generales y perspectiva cónica. Coordenadas de pantalla (y hacia abajo).
const G = require("./_bach1-dt");
const { add, sub, mul, dist, unit, corteRR, rad, n2, pie } = G;
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

module.exports = { ...G, P2, inv, invCirc, homologia, afinidad, elipsePts, hiperPts, paraPts, paraV, cicloide, epici, evolvente, axo, militar, conica, dP, planoD, dash, ejeL, oculta, rayado };
