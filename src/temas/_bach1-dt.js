// Ayudas de dibujo para Dibujo Técnico I (1º de Bachillerato, nivel libro).
// Construcciones geométricas calculadas: las coordenadas se obtienen con las funciones de geometría
// de este fichero (intersecciones, giros, tangentes), de modo que los trazados son exactos.
// Coordenadas de pantalla (y hacia abajo); los ángulos se dan en grados y en sentido antihorario visual.
const base = require("./_bach1L1");
const { lienzo, t, n2 } = base;

// ---------- Geometría ----------
const rad = (a) => (a * Math.PI) / 180;
const add = (A, B) => [A[0] + B[0], A[1] + B[1]];
const sub = (A, B) => [A[0] - B[0], A[1] - B[1]];
const mul = (A, k) => [A[0] * k, A[1] * k];
const dist = (A, B) => Math.hypot(B[0] - A[0], B[1] - A[1]);
const mid = (A, B) => [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
const lerp = (A, B, k) => [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k];
const unit = (A, B) => { const d = dist(A, B); return [(B[0] - A[0]) / d, (B[1] - A[1]) / d]; };
// Punto a distancia r y ángulo a (antihorario visual) de C.
const polar = (C, r, a) => [C[0] + r * Math.cos(rad(a)), C[1] - r * Math.sin(rad(a))];
// Ángulo visual del vector C→P.
const ang = (C, P) => (Math.atan2(-(P[1] - C[1]), P[0] - C[0]) * 180) / Math.PI;
// Giro de P alrededor de C un ángulo a (antihorario visual).
const giro = (P, C, a) => { const c = Math.cos(rad(a)), s = Math.sin(rad(a)), dx = P[0] - C[0], dy = -(P[1] - C[1]); return [C[0] + dx * c - dy * s, C[1] - (dx * s + dy * c)]; };
const homo = (P, O, k) => [O[0] + (P[0] - O[0]) * k, O[1] + (P[1] - O[1]) * k];
// Simétrico de P respecto de la recta AB.
const simR = (P, A, B) => { const H = pie(P, A, B); return [2 * H[0] - P[0], 2 * H[1] - P[1]]; };
// Pie de la perpendicular desde P a la recta AB.
function pie(P, A, B) { const u = unit(A, B), k = (P[0] - A[0]) * u[0] + (P[1] - A[1]) * u[1]; return [A[0] + u[0] * k, A[1] + u[1] * k]; }
// Intersección de las rectas AB y CD.
function corteRR(A, B, C, D) {
  const d = (A[0] - B[0]) * (C[1] - D[1]) - (A[1] - B[1]) * (C[0] - D[0]);
  const a = A[0] * B[1] - A[1] * B[0], b = C[0] * D[1] - C[1] * D[0];
  return [(a * (C[0] - D[0]) - (A[0] - B[0]) * b) / d, (a * (C[1] - D[1]) - (A[1] - B[1]) * b) / d];
}
// Intersecciones de dos circunferencias (C1, r1) y (C2, r2): [P, Q] (P a la izquierda de C1→C2 en pantalla).
function corteCC(C1, r1, C2, r2) {
  const d = dist(C1, C2), a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const u = unit(C1, C2), M = add(C1, mul(u, a));
  return [[M[0] + u[1] * h, M[1] - u[0] * h], [M[0] - u[1] * h, M[1] + u[0] * h]];
}
// Intersecciones de la recta AB con la circunferencia (C, r): [P, Q] en el sentido A→B.
function corteRC(A, B, C, r) {
  const H = pie(C, A, B), d = dist(C, H), h = Math.sqrt(Math.max(0, r * r - d * d)), u = unit(A, B);
  return [add(H, mul(u, -h)), add(H, mul(u, h))];
}
// Puntos de tangencia desde P exterior a (C, r).
const tangPC = (P, C, r) => corteCC(C, r, mid(P, C), dist(P, C) / 2);
// Tangentes comunes a (C1, r1) y (C2, r2): exteriores e interiores. Cada una es [T1, T2] (punto en cada circunferencia).
const rotv = (v, a) => giro(v, [0, 0], a);
function tangExt(C1, r1, C2, r2) {
  const u = unit(C1, C2), al = (Math.acos((r1 - r2) / dist(C1, C2)) * 180) / Math.PI;
  return [al, -al].map((b) => { const v = rotv(u, b); return [add(C1, mul(v, r1)), add(C2, mul(v, r2))]; });
}
function tangInt(C1, r1, C2, r2) {
  const u = unit(C1, C2), al = (Math.acos((r1 + r2) / dist(C1, C2)) * 180) / Math.PI;
  return [al, -al].map((b) => { const v = rotv(u, b); return [add(C1, mul(v, r1)), add(C2, mul(v, -r2))]; });
}
// Centro de la circunferencia por tres puntos.
function circun3(A, B, C) {
  const M1 = mid(A, B), M2 = mid(B, C);
  return corteRR(M1, add(M1, [-(B[1] - A[1]), B[0] - A[0]]), M2, add(M2, [-(C[1] - B[1]), C[0] - B[0]]));
}
// Vértices de un polígono regular de n lados (centro, radio, ángulo del primer vértice).
const regular = (C, r, n, a0 = 90) => Array.from({ length: n }, (_, i) => polar(C, r, a0 + (360 * i) / n));

// ---------- Trazos ----------
const P2 = (A) => `${n2(A[0])} ${n2(A[1])}`;
const TIN = "var(--muted)"; // trazos auxiliares
const seg = (A, B, c = "var(--ink)", w = 2.4, extra = "") => `<path d="M${P2(A)} L ${P2(B)}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" ${extra}/>`;
// Recta que pasa por A y B prolongada e px por cada lado.
const recta = (A, B, e = 30, c = "var(--ink)", w = 2, extra = "") => { const u = unit(A, B); return seg(add(A, mul(u, -e)), add(B, mul(u, e)), c, w, extra); };
const aux = (A, B, e = 0) => recta(A, B, e, TIN, 1.1, 'stroke-dasharray="4 3"');
const fina = (A, B, c = TIN) => seg(A, B, c, 1.1);
const circ = (C, r, c = "var(--ink)", w = 2.2, extra = "") => `<circle cx="${n2(C[0])}" cy="${n2(C[1])}" r="${n2(r)}" fill="none" stroke="${c}" stroke-width="${w}" ${extra}/>`;
// Arco de centro C y radio r entre los ángulos a0 y a1 (antihorario visual de a0 a a1).
function arco(C, r, a0, a1, c = "var(--ink)", w = 2.2, extra = "") {
  let d = a1 - a0; while (d < 0) d += 360; while (d > 360) d -= 360;
  const A = polar(C, r, a0), B = polar(C, r, a0 + d);
  return `<path d="M${P2(A)} A ${n2(r)} ${n2(r)} 0 ${d > 180 ? 1 : 0} 0 ${P2(B)}" fill="none" stroke="${c}" stroke-width="${w}" ${extra}/>`;
}
// Arco entre dos puntos P y Q de una circunferencia de centro C, en sentido antihorario de P a Q.
const arcoPQ = (C, P, Q, c = "var(--red)", w = 2.6, extra = "") => arco(C, dist(C, P), ang(C, P), ang(C, Q), c, w, extra);
// Marca de compás: arco corto de centro C que pasa por el punto P (abertura en grados).
const marca = (C, P, ab = 26, c = TIN) => { const a = ang(C, P); return arco(C, dist(C, P), a - ab / 2, a + ab / 2, c, 1.2); };
// Punto con nombre.
const pt = (A, lab = "", dx = 6, dy = -6, c = "var(--ink)", s = 11) => `<circle cx="${n2(A[0])}" cy="${n2(A[1])}" r="2.8" fill="${c}"/>${lab ? t(A[0] + dx, A[1] + dy, lab, { c, s, b: 1, a: dx < 0 ? "end" : dx === 0 ? "middle" : "start" }) : ""}`;
// Número de paso en un círculo.
const paso = (A, n, c = "var(--pen)") => `<circle cx="${n2(A[0])}" cy="${n2(A[1])}" r="7.5" fill="${c}"/>${t(A[0], A[1] + 3.8, String(n), { c: "#fff", s: 10, b: 1 })}`;
const poli = (pts, c = "var(--red)", w = 2.6, fill = "none", op = 0.15) => `<path d="M${pts.map(P2).join(" L ")} Z" stroke="${c}" stroke-width="${w}" fill="${fill}" fill-opacity="${op}" stroke-linejoin="round"/>`;
const linea = (pts, c = "var(--ink)", w = 2.2, extra = "") => `<path d="M${pts.map(P2).join(" L ")}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linejoin="round" ${extra}/>`;
// Marca de ángulo recto en V entre las direcciones V→A y V→B.
const recto = (V, A, B, s = 8, c = "var(--ink)") => { const u = unit(V, A), v = unit(V, B); return linea([add(V, mul(u, s)), add(add(V, mul(u, s)), mul(v, s)), add(V, mul(v, s))], c, 1.2); };
// Cota: línea de cota paralela a AB separada «off» px, con flechas y texto.
let kc = 0;
function cota(A, B, off, txt, c = "var(--pen)", s = 10) {
  const u = unit(A, B), nrm = [u[1], -u[0]], A1 = add(A, mul(nrm, off)), B1 = add(B, mul(nrm, off)), id = `dtc${++kc}`;
  const M = add(mid(A1, B1), mul(nrm, 5 * Math.sign(off || 1)));
  let a = (Math.atan2(B[1] - A[1], B[0] - A[0]) * 180) / Math.PI; if (a > 90 || a < -90) a += 180;
  return `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1 L10 5 L0 9 z" fill="${c}"/></marker></defs>${seg(A, add(A1, mul(nrm, 3 * Math.sign(off || 1))), c, 0.9)}${seg(B, add(B1, mul(nrm, 3 * Math.sign(off || 1))), c, 0.9)}<path d="M${P2(A1)} L ${P2(B1)}" stroke="${c}" stroke-width="1" marker-start="url(#${id})" marker-end="url(#${id})"/><g transform="rotate(${n2(a)} ${P2(M).replace(" ", " ")})">${t(M[0], M[1] + 3, txt, { c, s, b: 1 })}</g>`;
}
// Texto corto (alias).
const tx = (x, y, s, o = {}) => t(x, y, s, { s: 10.5, ...o });
// Leyenda de pasos al pie: líneas de texto pequeño alineadas a la izquierda.
const pie2 = (ls, y = 170, x = 10, s = 9.5) => ls.map((l, i) => t(x, y - (ls.length - 1 - i) * 11, l, { s, a: "start", c: "var(--muted)" })).join("");

// ---------- Sistemas de representación ----------
// Diédrico: línea de tierra en y = yt entre x0 y x1, con sus trazos de identificación.
const LT = (yt = 90, x0 = 14, x1 = 246) => `${seg([x0, yt], [x1, yt], "var(--ink)", 1.6)}${seg([x0 + 4, yt + 5], [x0 + 22, yt + 5], "var(--ink)", 1.6)}${seg([x1 - 22, yt + 5], [x1 - 4, yt + 5], "var(--ink)", 1.6)}`;
// Proyecciones de un punto en diédrico: x en pantalla, alejamiento o y cota c (px). Devuelve {h, v}.
const die = (x, o, c, yt = 90) => ({ h: [x, yt + o], v: [x, yt - c] });
// Isométrica: (x, y, z) → pantalla. Eje X hacia abajo-izquierda, Y hacia abajo-derecha, Z vertical.
const iso = (O, k = 1) => ([x, y, z]) => [O[0] + (y - x) * Math.cos(rad(30)) * k, O[1] + (x + y) * Math.sin(rad(30)) * k - z * k];
// Caballera: Y horizontal, Z vertical y X (profundidad) a «a» grados con coeficiente c.
const caba = (O, c = 0.5, a = 225, k = 1) => ([x, y, z]) => [O[0] + y * k + x * c * k * Math.cos(rad(a)), O[1] - z * k - x * c * k * Math.sin(rad(a))];
// Dibuja aristas [[i, j]] de vértices proyectados; ocultas con trazo discontinuo.
const aristas = (V, E, c = "var(--ink)", w = 2.2, ocultas = []) => E.map(([i, j]) => seg(V[i], V[j], c, w)).join("") + ocultas.map(([i, j]) => seg(V[i], V[j], c, 1.2, 'stroke-dasharray="4 3"')).join("");
const cara = (pts, c = "var(--pen)", op = 0.18) => `<path d="M${pts.map(P2).join(" L ")} Z" fill="${c}" fill-opacity="${op}" stroke="none"/>`;
// Elipse por puntos (centro, semiejes, giro en grados).
const elipse = (C, a, b, g = 0, c = "var(--red)", w = 2.4, extra = "") => `<ellipse cx="${n2(C[0])}" cy="${n2(C[1])}" rx="${n2(a)}" ry="${n2(b)}" transform="rotate(${n2(-g)} ${n2(C[0])} ${n2(C[1])})" fill="none" stroke="${c}" stroke-width="${w}" ${extra}/>`;
// Curva por puntos.
const curva = (pts, c = "var(--red)", w = 2.6, cerrada = false) => `<path d="M${pts.map(P2).join(" L ")}${cerrada ? " Z" : ""}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dib = (aria, inner, w = 260, h = 180) => lienzo(aria, inner, w, h);
const DEC = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };

module.exports = {
  ...base, rad, add, sub, mul, dist, mid, lerp, unit, polar, ang, giro, homo, simR, pie, corteRR, corteCC, corteRC, tangPC, tangExt, tangInt, rotv, circun3, regular,
  seg, recta, aux, fina, circ, arco, arcoPQ, marca, pt, paso, poli, linea, recto, cota, tx, pie2, LT, die, iso, caba, aristas, cara, elipse, curva, dib, TIN, DEC,
};
