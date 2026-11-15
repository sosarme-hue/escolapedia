// Dibujo Técnico I 1º Bachillerato · Tema 9. Nivel libro. Perspectiva caballera: dibujos calculados en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, arco, paso, polar, add, sub, mul, lerp, dist, iso, cara, curva, linea, regular, circ, tx } = G;
const dash = 'stroke-dasharray="4 3"';
const R = Math.PI / 180;
// Proyección caballera: X horizontal, Z vertical (plano frontal en verdadera magnitud), Y fugado a «a» grados con coeficiente c.
const cab = (O, c = 0.5, a = 45, k = 1) => ([x, y, z]) => [O[0] + (x + y * c * Math.cos(a * R)) * k, O[1] - (z + y * c * Math.sin(a * R)) * k];
// Ortoedro con el vértice oculto en hid (coordenadas 0/1).
const caja = (f, [sx, sy, sz], c = "var(--ink)", w = 2.2, hid = [0, 1, 0], ocultas = true) => {
  const V = [];
  for (let i = 0; i < 8; i++) V.push(f([(i & 1) * sx, ((i >> 1) & 1) * sy, ((i >> 2) & 1) * sz]));
  const h = hid[0] + 2 * hid[1] + 4 * hid[2];
  let out = "";
  for (let i = 0; i < 8; i++) for (const b of [1, 2, 4]) { if (i & b) continue; const j = i | b; if (i === h || j === h) { if (ocultas) out += seg(V[i], V[j], c, 1.1, dash); } else out += seg(V[i], V[j], c, w); }
  return out;
};
// Prisma de perfil frontal (x, z) escalonado y extruido en profundidad D.
const prismaF = (f, prof, D, c = "var(--ink)", w = 2.2, fill = "var(--pen)") => {
  const F = prof.map(([x, z]) => f([x, 0, z])), B = prof.map(([x, z]) => f([x, D, z]));
  let out = cara(F, fill, 0.12) + poli(F, c, w, "none");
  prof.forEach(([x, z], i) => { if (x || z) out += seg(F[i], B[i], c, w); });
  for (let i = 0; i < prof.length; i++) { const j = (i + 1) % prof.length, [x1, z1] = prof[i], [x2, z2] = prof[j]; if ((z1 === 0 && z2 === 0) || (x1 === 0 && x2 === 0)) continue; out += seg(B[i], B[j], c, w); }
  return out;
};
const circ3 = (f, cen, r, plano, n = 72) => Array.from({ length: n }, (_, i) => { const t = (2 * Math.PI * i) / n, u = r * Math.cos(t), v = r * Math.sin(t), [x, y, z] = cen; return f(plano === "xz" ? [x + u, y, z + v] : plano === "xy" ? [x + u, y + v, z] : [x, y + u, z + v]); });

// 9.1 Fundamento: proyección cilíndrica oblicua (vista lateral).
const s1 = (() => {
  const Xc = 200, d = [1, -0.35], pr = (P) => [Xc, P[1] + d[1] * (Xc - P[0])];
  const A = [70, 130], B = [130, 130], C = [130, 70], D = [70, 70], ph = Math.atan(1 / 0.35) / R;
  return dib("Fundamento de la perspectiva caballera: proyección cilíndrica oblicua sobre un plano del cuadro frontal, vista de perfil", `${seg([Xc, 12], [Xc, 160], "var(--pen)", 3)}${poli([A, B, C, D], "var(--ink)", 2, "var(--leaf)", 0.12)}
  ${[A, B, C, D].map((P) => `${seg(P, pr(P), "var(--red)", 1.1, dash)}${pt(pr(P), "", 0, 0, "var(--red)")}`).join("")}${seg(pr(D), pr(B), "var(--red)", 3)}
  ${arco(pr(B), 26, 270 - ph, 270, "var(--ink)", 1.2)}${tx(polar(pr(B), 36, 270 - ph / 2)[0], polar(pr(B), 36, 270 - ph / 2)[1] + 4, "φ", { s: 11, b: 1 })}
  ${tx(Xc + 6, 24, "cuadro", { s: 10, b: 1, c: "var(--pen)", a: "start" })}${tx(Xc + 6, 36, "(frontal)", { s: 9, c: "var(--pen)", a: "start" })}${tx(100, 104, "objeto", { s: 9.5, c: "var(--leaf)", b: 1 })}${tx(100, 116, "(perfil)", { s: 9, c: "var(--leaf)" })}
  ${tx(14, 156, "rayos paralelos, oblicuos al cuadro", { s: 9.5, a: "start", c: "var(--red)", b: 1 })}${tx(14, 172, "profundidad × c, con c = cotg φ", { s: 9.5, a: "start", b: 1 })}`);
})();

// 9.2 Ejes y coeficiente.
const s2 = (() => {
  const O = [80, 130], f = cab(O, 0.5, 45);
  return dib("Ejes de la perspectiva caballera: X y Z en verdadera magnitud formando 90°, eje Y fugado a 45° con coeficiente de reducción", `${seg(O, [230, 130], "var(--ink)", 2.4)}${seg(O, [80, 20], "var(--ink)", 2.4)}${seg(O, polar(O, 120, 45), "var(--red)", 2.4)}
  ${arco(O, 30, 0, 45, "var(--red)", 1.2)}${arco(O, 18, 0, 90, "var(--ink)", 1)}${tx(116, 118, "α = 45°", { s: 10, b: 1, c: "var(--red)", a: "start" })}
  ${[1, 2, 3, 4, 5].map((i) => `${pt([80 + 25 * i, 130], "", 0, 0)}${pt(f([0, 25 * i, 0]), "", 0, 0, "var(--red)")}`).join("")}
  ${tx(234, 134, "X", { s: 11, b: 1, a: "start" })}${tx(86, 22, "Z", { s: 11, b: 1, a: "start" })}${tx(polar(O, 126, 45)[0], polar(O, 126, 45)[1], "Y", { s: 11, b: 1, c: "var(--red)" })}
  ${tx(160, 150, "X, Z: coeficiente 1", { s: 9.5, b: 1 })}${tx(160, 164, "Y: coeficiente c = 0,5", { s: 9.5, b: 1, c: "var(--red)" })}${tx(246, 18, "marcas cada 10 mm", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 9.3 Influencia de c y α.
const s3 = (() => {
  const p = (cx, c, a, lab) => `${caja(cab([cx - 34, 124], c, a), [40, 40, 40], "var(--pen)", 2)}${tx(cx, 150, lab, { s: 9.5, b: 1 })}`;
  return dib("El mismo cubo con distintos coeficientes y ángulos: c = 1 lo alarga en exceso; c = 0,5 da una imagen natural", `${p(44, 1, 45, "c = 1, α = 45°")}${p(130, 0.5, 45, "c = 0,5, α = 45°")}${p(214, 0.5, 30, "c = 0,5, α = 30°")}
  ${tx(44, 166, "parece alargado", { s: 9, c: "var(--red)" })}${tx(130, 166, "la más usada", { s: 9, c: "var(--leaf)" })}${tx(214, 166, "más cara lateral", { s: 9, c: "var(--muted)" })}`);
})();

// 9.4 Escala reducida por Tales.
const s4 = (() => {
  const O = [40, 150], E = polar(O, 100 * 0.5 * 1.6, 45), T = [O[0] + 160, O[1] - 30], k = (i) => lerp(O, T, i / 5), r = (i) => lerp(O, E, i / 5);
  return dib("Construcción gráfica de la escala reducida del eje fugado mediante el teorema de Tales", `${seg(O, polar(O, 150, 45), "var(--red)", 2.4)}${seg(O, T, "var(--ink)", 1.8)}${seg(T, E, "var(--leaf)", 1.8)}
  ${[1, 2, 3, 4].map((i) => seg(k(i), r(i), "var(--leaf)", 1, dash)).join("")}${[0, 1, 2, 3, 4, 5].map((i) => `${pt(k(i), "", 0, 0)}${tx(k(i)[0] + 2, k(i)[1] + 14, String(20 * i), { s: 8.5 })}${pt(r(i), "", 0, 0, "var(--red)")}`).join("")}
  ${tx(246, 154, "medidas reales", { s: 9.5, a: "end", b: 1 })}${tx(polar(O, 150, 45)[0] + 4, polar(O, 150, 45)[1] + 4, "Y", { s: 11, b: 1, c: "var(--red)", a: "start" })}
  ${tx(14, 18, "1 medidas reales en una recta auxiliar", { s: 9.5, a: "start" })}${tx(14, 32, "2 se une 100 con su valor reducido (50)", { s: 9.5, a: "start", c: "var(--leaf)" })}${tx(14, 46, "3 paralelas por cada marca", { s: 9.5, a: "start", c: "var(--red)" })}`);
})();

// 9.5 Punto por coordenadas.
const s5 = (() => {
  const f = cab([60, 140], 0.5, 45), O = f([0, 0, 0]), A = f([90, 0, 0]), B = f([90, 70, 0]), P = f([90, 70, 60]);
  return dib("Punto por sus coordenadas en caballera: x y z en verdadera magnitud, la coordenada y reducida a la mitad sobre el eje fugado", `${seg(O, f([170, 0, 0]), "var(--ink)", 1.6)}${seg(O, f([0, 0, 120]), "var(--ink)", 1.6)}${seg(O, f([0, 140, 0]), "var(--ink)", 1.6)}
  ${seg(O, A, "var(--pen)", 2.8)}${seg(A, B, "var(--leaf)", 2.8)}${seg(B, P, "var(--red)", 2.8)}${seg(f([0, 70, 0]), B, "var(--muted)", 1, dash)}${seg(f([0, 70, 0]), f([0, 70, 60]), "var(--muted)", 1, dash)}${seg(f([0, 70, 60]), P, "var(--muted)", 1, dash)}${seg(f([0, 0, 60]), f([0, 70, 60]), "var(--muted)", 1, dash)}${seg(f([90, 0, 60]), P, "var(--muted)", 1, dash)}${seg(f([0, 0, 60]), f([90, 0, 60]), "var(--muted)", 1, dash)}${seg(A, f([90, 0, 60]), "var(--muted)", 1, dash)}
  ${pt(O, "O", -8, 12)}${pt(P, "P", 8, -2, "var(--red)", 12)}${pt(B, "P₁", 8, 10, "var(--leaf)")}${tx(f([170, 0, 0])[0] - 2, f([170, 0, 0])[1] + 14, "X", { s: 11, b: 1, a: "end" })}${tx(66, 22, "Z", { s: 11, b: 1, a: "start" })}${tx(f([0, 140, 0])[0] - 6, f([0, 140, 0])[1], "Y", { s: 11, b: 1, a: "end", c: "var(--red)" })}
  ${paso(add(lerp(O, A, 0.5), [0, 14]), 1)}${paso(add(lerp(A, B, 0.5), [14, 6]), 2, "var(--leaf)")}${paso(add(lerp(B, P, 0.5), [14, 0]), 3, "var(--red)")}${tx(246, 176, "P(90, 70, 60) · y dibujada 35", { s: 9.5, a: "end", c: "var(--muted)" })}`);
})();

// 9.6 Pieza con el perfil más complejo en el plano frontal.
const s6 = (() => {
  const f = cab([110, 150], 0.5, 45), prof = [[0, 0], [100, 0], [100, 30], [35, 30], [35, 90], [0, 90]];
  return dib("Pieza en L en caballera: el perfil con más información se coloca en el plano frontal, en verdadera magnitud", `${caja((p) => f([p[0] * 100 / 90, p[1] * 60 / 90, p[2]]), [90, 90, 90], "var(--muted)", 1, [0, 1, 0], false).replace(/stroke-width="1"/g, 'stroke-width="1" stroke-dasharray="3 3"')}${prismaF(f, prof, 60)}
  ${paso([226, 30], 1, "var(--muted)")}${paso([130, 140], 2)}${paso([242, 150], 3, "var(--red)")}${tx(14, 18, "1 envolvente 100 × 60 × 90", { s: 9.5, a: "start", c: "var(--muted)" })}${tx(14, 32, "2 perfil en L en VM", { s: 9.5, a: "start", c: "var(--pen)" })}${tx(14, 46, "3 fondo: 60 · 0,5 = 30", { s: 9.5, a: "start", c: "var(--red)" })}`);
})();

// 9.7 Figuras planas: frontal en verdadera magnitud y horizontal deformada.
const s7 = (() => {
  const H = regular([0, 0], 34, 6, 0), fr = H.map(([x, z]) => [62 + x, 78 - z]);
  const f = cab([124, 136], 0.5, 45), ho = H.map(([x, y]) => f([60 + x * 1.2, 55 - y * 1.2, 0])), base = H.map(([x, y]) => f([60 + x * 1.2, 0, 0]));
  return dib("Hexágono regular en el plano frontal, en verdadera magnitud, y en un plano horizontal, deformado: sus vértices se sitúan por coordenadas", `${poli(fr, "var(--pen)", 2.4, "var(--pen)", 0.12)}${pt([62, 78], "", 0, 0, "var(--pen)")}${tx(62, 134, "plano frontal", { s: 9.5, b: 1, c: "var(--pen)" })}${tx(62, 148, "verdadera magnitud", { s: 9, c: "var(--muted)" })}
  ${seg(f([0, 0, 0]), f([116, 0, 0]), "var(--ink)", 1.4)}${seg(f([0, 0, 0]), f([0, 120, 0]), "var(--ink)", 1.4)}${ho.map((p, i) => seg(base[i], p, "var(--muted)", 0.9, dash)).join("")}${poli(ho, "var(--red)", 2.4, "var(--red)", 0.12)}
  ${tx(190, 156, "plano horizontal", { s: 9.5, b: 1, c: "var(--red)" })}${tx(190, 170, "fondo × 0,5", { s: 9, c: "var(--muted)" })}${tx(f([116, 0, 0])[0] + 4, f([116, 0, 0])[1] + 4, "X", { s: 10, b: 1, a: "start" })}${tx(f([0, 120, 0])[0] - 4, f([0, 120, 0])[1], "Y", { s: 10, b: 1, a: "end" })}`);
})();

// 9.8 Circunferencia en plano horizontal: método de los ocho puntos.
const s8 = (() => {
  const r = 50, f = cab([40, 120], 0.5, 45), Q = [f([0, 0, 0]), f([100, 0, 0]), f([100, 100, 0]), f([0, 100, 0])], C = f([50, 50, 0]);
  const m = [f([50, 0, 0]), f([100, 50, 0]), f([50, 100, 0]), f([0, 50, 0])], k = r / Math.SQRT2;
  const dg = [[50 - k, 50 - k], [50 + k, 50 - k], [50 + k, 50 + k], [50 - k, 50 + k]].map(([x, y]) => f([x, y, 0]));
  const p1 = [40 + 50 - k, 120], p2 = [40 + 50 + k, 120];
  return dib("Circunferencia en un plano horizontal en caballera: método de los ocho puntos, cuatro tangencias y cuatro puntos en las diagonales", `${poli(Q, "var(--ink)", 1.8, "none")}${seg(Q[0], Q[2], "var(--muted)", 1)}${seg(Q[1], Q[3], "var(--muted)", 1)}${seg(m[0], m[2], "var(--muted)", 0.9, dash)}${seg(m[1], m[3], "var(--muted)", 0.9, dash)}
  ${arco([90, 120], r, 180, 360, "var(--leaf)", 1.2, dash)}${seg(p1, polar([90, 120], r, 225), "var(--leaf)", 1)}${seg(p2, polar([90, 120], r, 315), "var(--leaf)", 1)}${seg(p1, f([50 - k, 100, 0]), "var(--leaf)", 1, dash)}${seg(p2, f([50 + k, 100, 0]), "var(--leaf)", 1, dash)}
  ${curva(circ3(f, [50, 50, 0], r, "xy"), "var(--red)", 2.6, true)}${m.map((p) => pt(p, "", 0, 0, "var(--pen)")).join("")}${dg.map((p) => pt(p, "", 0, 0, "var(--red)")).join("")}${pt(C, "", 0, 0)}
  ${paso([90, 170], 1, "var(--leaf)")}${tx(14, 18, "1 semicírculo auxiliar: r·√2/2", { s: 9, a: "start", c: "var(--leaf)", b: 1 })}${tx(246, 150, "4 puntos medios", { s: 9, a: "end", c: "var(--pen)", b: 1 })}${tx(246, 162, "(tangencia)", { s: 9, a: "end", c: "var(--pen)" })}${tx(246, 176, "4 en las diagonales", { s: 9, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 9.9 Circunferencias en las caras de un cubo.
const s9 = (() => {
  const f = cab([50, 162], 0.5, 45), s = 90, r = 36;
  return dib("Circunferencias inscritas en las caras de un cubo en caballera: en la cara frontal se ve una circunferencia; en la superior y la lateral, elipses", `${caja(f, [s, s, s], "var(--ink)", 2, [0, 1, 0], false)}${curva(circ3(f, [45, 0, 45], r, "xz"), "var(--pen)", 2.4, true)}${curva(circ3(f, [45, 45, 90], r, "xy"), "var(--red)", 2.4, true)}${curva(circ3(f, [90, 45, 45], r, "yz"), "var(--leaf)", 2.4, true)}
  ${tx(14, 18, "frontal: circunferencia real", { s: 9.5, a: "start", b: 1, c: "var(--pen)" })}${tx(246, 172, "superior y lateral: elipses", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}`);
})();

// 9.10 Cilindro de eje fugado.
const s10 = (() => {
  const r = 36, L = 120, C1 = [80, 112], sh = mul([Math.cos(45 * R), -Math.sin(45 * R)], 0.5 * L), C2 = add(C1, sh), n = [Math.SQRT1_2, Math.SQRT1_2];
  return dib("Cilindro con el eje según la dirección fugada: dos circunferencias iguales en verdadera magnitud unidas por tangentes paralelas al eje", `${cara([add(C1, mul(n, r)), add(C2, mul(n, r)), add(C2, mul(n, -r)), add(C1, mul(n, -r))], "var(--pen)", 0.1)}${arco(C2, r, -45, 135, "var(--ink)", 2.4)}${arco(C2, r, 135, 315, "var(--ink)", 1.1, dash)}
  ${circ(C1, r, "var(--ink)", 2.4)}${seg(add(C1, mul(n, r)), add(C2, mul(n, r)), "var(--red)", 2.6)}${seg(add(C1, mul(n, -r)), add(C2, mul(n, -r)), "var(--red)", 2.6)}${seg(C1, C2, "var(--muted)", 1, 'stroke-dasharray="8 3 2 3"')}${pt(C1, "", 0, 0)}${pt(C2, "", 0, 0)}
  ${paso([C1[0] - r - 12, C1[1] + 10], 1)}${paso(add(C2, [r + 8, -18]), 2)}${paso(add(lerp(C1, C2, 0.5), mul(n, r + 14)), 3, "var(--red)")}
  ${tx(14, 18, "1 base frontal: circunferencia real", { s: 9.5, a: "start" })}${tx(14, 168, "2 traslación: L·c = 120 · 0,5 = 60", { s: 9.5, a: "start" })}${tx(246, 140, "3 tangentes ∥ Y", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 9.11 Prisma hexagonal de eje fugado.
const s11 = (() => {
  const C1 = [80, 112], L = 110, sh = mul([Math.cos(45 * R), -Math.sin(45 * R)], 0.5 * L), Fh = regular(C1, 40, 6, 0), Bh = Fh.map((p) => add(p, sh));
  const vis = [0, 1, 2, 5], fv = [[5, 0], [0, 1], [1, 2]];
  return dib("Prisma hexagonal con el eje fugado: la base frontal en verdadera magnitud y la trasera trasladada según la dirección fugada", `${cara(Fh, "var(--pen)", 0.14)}${poli(Fh, "var(--ink)", 2.4, "none")}${vis.map((i) => seg(Fh[i], Bh[i], "var(--ink)", 2.4)).join("")}${[3, 4].map((i) => seg(Fh[i], Bh[i], "var(--ink)", 1.1, dash)).join("")}
  ${fv.map(([i, j]) => seg(Bh[i], Bh[j], "var(--ink)", 2.4)).join("")}${[[2, 3], [3, 4], [4, 5]].map(([i, j]) => seg(Bh[i], Bh[j], "var(--ink)", 1.1, dash)).join("")}
  ${tx(14, 18, "aristas laterales ∥ Y, longitud L·c", { s: 9.5, a: "start" })}${tx(14, 172, "base frontal: hexágono en VM", { s: 9.5, a: "start", c: "var(--pen)", b: 1 })}${tx(246, 172, "ocultas: discontinuas", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 9.12 Comparación caballera / isométrica.
const s12 = (() => {
  const prof = [[0, 0], [80, 0], [80, 20], [25, 20], [25, 60], [0, 60]];
  const fc = cab([22, 140], 0.5, 45), a = prismaF(fc, prof, 50, "var(--ink)", 2, "var(--pen)");
  const fi = iso([196, 66], 0.82), pr = (X, Z, Y) => fi([Y, X, Z]);
  const F = prof.map(([x, z]) => pr(x, z, 50)), B = prof.map(([x, z]) => pr(x, z, 0));
  let b = cara(F, "var(--leaf)", 0.12) + poli(F, "var(--ink)", 2, "none");
  prof.forEach(([x, z], i) => { if (x || z) b += seg(F[i], B[i], "var(--ink)", 2); });
  for (let i = 0; i < prof.length; i++) { const j = (i + 1) % prof.length, [x1, z1] = prof[i], [x2, z2] = prof[j]; if ((z1 === 0 && z2 === 0) || (x1 === 0 && x2 === 0)) continue; b += seg(B[i], B[j], "var(--ink)", 2); }
  return dib("Misma pieza en perspectiva caballera y en isométrica: la caballera conserva la cara frontal y es más rápida; la isométrica es más equilibrada", `${a}${b}${tx(66, 166, "caballera", { s: 10, b: 1, c: "var(--pen)" })}${tx(66, 178, "frente en VM", { s: 9, c: "var(--muted)" })}${tx(196, 166, "isométrica", { s: 10, b: 1, c: "var(--leaf)" })}${tx(196, 178, "tres caras equilibradas", { s: 9, c: "var(--muted)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Perspectiva caballera",
  minutos: 105,
  objetivos: [
    "Comprender la perspectiva caballera como axonometría oblicua y su fundamento proyectivo",
    "Elegir el ángulo del eje fugado y el coeficiente de reducción adecuados",
    "Construir gráficamente la escala reducida del eje fugado",
    "Dibujar piezas en caballera a partir de sus vistas, colocando en el plano frontal la cara más significativa",
    "Representar figuras planas y circunferencias en las caras frontal, horizontal y de perfil",
    "Dibujar cilindros y prismas de eje fugado y comparar la caballera con la isométrica",
  ],
  claves: ["axonometría oblicua", "plano del cuadro", "plano frontal", "eje fugado", "ángulo de fuga", "coeficiente de reducción", "caballera", "perspectiva de gabinete", "método de los ocho puntos", "verdadera magnitud", "elipse", "prisma envolvente"],
  lectura: {
    titulo: "La perspectiva de los ingenieros militares",
    html: `<p>El nombre de <b>perspectiva caballera</b> tiene un origen curioso. En las fortificaciones de los siglos XVI y XVII, el «caballero» era una construcción elevada desde la que se dominaba el terreno. Los ingenieros militares necesitaban dibujos de murallas y baluartes que mostraran a la vez su forma real de frente y su profundidad, y que pudieran medirse. La vista «desde el caballero» se convirtió en el nombre de este tipo de dibujo.</p>
    <p>Su gran ventaja es la <b>sencillez</b>: la cara delantera del objeto se dibuja exactamente como es, con sus medidas y ángulos reales, y la profundidad se añade con líneas paralelas inclinadas. Las circunferencias de esa cara siguen siendo circunferencias, lo que hace muy cómodo dibujar ruedas, engranajes o piezas con agujeros.</p>
    <p>Hoy la usan los libros de texto de matemáticas y física para dibujar cubos y prismas, los fabricantes de muebles en sus catálogos y los diseñadores cuando quieren hacer un boceto rápido. En este tema aprenderás sus fundamentos, cómo elegir sus parámetros y cómo representar en ella piezas, circunferencias y sólidos.</p>`,
  },
  pregunta: {
    texto: "Un cubo dibujado con la profundidad a tamaño real parece un ladrillo alargado. ¿Por qué crees que se reduce la profundidad a la mitad?",
    respuesta: "Porque nuestro ojo interpreta las líneas inclinadas como profundidad y, si las dibujamos a tamaño real, el objeto <mark>parece más largo</mark> de lo que es. Con un coeficiente de reducción (normalmente 0,5) la imagen se percibe más proporcionada y natural.",
  },
  bloques: [
    {
      html: `<h3>9.1 Fundamentos: una axonometría oblicua</h3><p>La <b>perspectiva caballera</b> es un sistema de representación basado en la <b>proyección cilíndrica oblicua</b>: los rayos proyectantes son paralelos entre sí, pero <b>no son perpendiculares</b> al plano del cuadro. Por eso se considera una <b>axonometría oblicua</b>.</p><p>El plano del cuadro se coloca <b>paralelo a una de las caras</b> del triedro de referencia, el plano frontal XOZ. Esto tiene dos consecuencias muy importantes:</p><ul><li>Todo lo que está en el plano frontal o es paralelo a él se proyecta en <b>verdadera magnitud</b>: los ejes X y Z forman 90° y no se reducen.</li><li>El tercer eje, Y, perpendicular al cuadro, se proyecta como una recta inclinada, el <b>eje fugado</b> o eje de profundidad.</li></ul><p>La longitud con que se ve la profundidad depende del ángulo φ que forman los rayos con el cuadro. Si los rayos forman 45°, la profundidad se ve en su verdadera magnitud (coeficiente 1); si están más inclinados respecto al cuadro (φ mayor), se ve más corta. En general, el coeficiente de reducción es c = cotg φ.</p><p>Como en cualquier proyección cilíndrica, el paralelismo se conserva: rectas paralelas en el espacio se dibujan paralelas. Lo que no se conserva, salvo en el plano frontal, son las longitudes ni los ángulos.</p><p>La caballera no es una imagen realista como la de una fotografía (eso lo hace la perspectiva cónica), pero es fácil de dibujar y de medir.</p>`,
      svg: s1,
    },
    {
      html: `<h3>9.2 Ejes y coeficiente de reducción</h3><p>En la perspectiva caballera se dibujan:</p><ul><li>El eje <b>X horizontal</b> y el eje <b>Z vertical</b>, formando <b>90°</b>. Sobre ellos las medidas son reales (coeficiente 1).</li><li>El eje <b>Y</b>, que forma con X un ángulo α, llamado <b>ángulo de fuga</b>. Las medidas sobre él se multiplican por el <b>coeficiente de reducción c</b>.</li></ul><p>Tanto α como c se pueden elegir libremente, porque dependen de la dirección de los rayos proyectantes, que es arbitraria. Los valores más habituales son:</p><ul><li>α = 45° (también 30° o 60°, y a veces 135°, fugando hacia la izquierda).</li><li>c = 0,5 (también 2/3 o 3/4). Cuando c = 1, se habla a veces de «caballera verdadera»; cuando c = 0,5, de <b>perspectiva de gabinete</b>.</li></ul><p>La norma UNE-EN ISO 5456-3 recomienda la perspectiva oblicua con el eje fugado a 45° y coeficiente 0,5 para la vista frontal.</p><p>Es imprescindible indicar en el dibujo los valores elegidos, por ejemplo: «caballera, α = 45°, c = 0,5». Así, quien lo lee sabe cómo interpretar las medidas de profundidad. Si no se indica nada en un enunciado, lo habitual es tomar 45° y 0,5.</p><p>Observa que la caballera no tiene ningún «punto de vista» privilegiado: puedes hacer fugar el eje Y hacia arriba a la derecha, a la izquierda o incluso hacia abajo, para mostrar la cara inferior del objeto.</p>`,
      svg: s2,
    },
    {
      html: `<h3>9.3 Cómo elegir el ángulo y el coeficiente</h3><p>Aunque cualquier pareja (α, c) es geométricamente correcta, no todas dan imágenes igual de claras. Comparando el mismo cubo con distintos parámetros se aprecian varias ideas:</p><ul><li>Con <b>c = 1</b> el cubo parece un prisma alargado. Nuestro cerebro está acostumbrado a que la profundidad se vea acortada (por el efecto de la perspectiva cónica de la vista humana) y el dibujo resulta poco natural.</li><li>Con <b>c = 0,5</b> el cubo se percibe proporcionado. Es la elección más frecuente.</li><li>Con <b>α = 45°</b> se ven por igual la cara superior y la lateral.</li><li>Con <b>α = 30°</b> se ve más la cara lateral y menos la superior; con <b>α = 60°</b> ocurre al revés.</li></ul><p>Por tanto, la elección depende de qué cara interese mostrar: si la pieza tiene detalles en la cara superior (taladros, ranuras), conviene un ángulo mayor; si los tiene en el lateral, uno menor.</p><p>Otra decisión importante es <b>qué cara del objeto se coloca en el plano frontal</b>. Como esa cara se dibuja sin deformación, conviene situar en ella:</p><ul><li>La cara con el perfil más complicado.</li><li>Las caras con circunferencias o arcos.</li><li>La dimensión más larga del objeto, para que la profundidad (reducida) sea pequeña.</li></ul><p>Elegir bien la orientación ahorra mucho trabajo y produce dibujos más claros.</p>`,
      svg: s3,
    },
    {
      html: `<h3>9.4 Escala reducida del eje fugado</h3><p>Con c = 0,5 basta con dividir las medidas por dos. Pero con coeficientes como 2/3, 3/4 o 0,7 los cálculos son incómodos. En ese caso se construye una <b>escala gráfica reducida</b> aplicando el <b>teorema de Tales</b>:</p><ol><li>Desde el origen O se traza una recta auxiliar con cualquier inclinación y se marcan sobre ella las medidas reales (por ejemplo, cada 20 mm hasta 100).</li><li>Sobre el eje fugado se lleva el valor reducido de la última marca: 100 · c (en el dibujo, 50 mm con c = 0,5).</li><li>Se une la marca 100 de la auxiliar con ese punto.</li><li>Por las demás marcas se trazan paralelas a esa recta. Los cortes con el eje fugado son las medidas reducidas.</li></ol><p>La escala obtenida se puede usar en todo el dibujo: cualquier profundidad se toma con el compás directamente de ella. Es el mismo procedimiento que se usa para dividir un segmento en partes proporcionales, visto en el tema de trazados fundamentales.</p><p>Una alternativa práctica es trabajar con una <b>regla de escala</b> (escalímetro) cuya escala corresponda al coeficiente: por ejemplo, la escala 1:2 para c = 0,5.</p><p>Recuerda que el coeficiente se aplica <b>solo</b> a las medidas paralelas al eje Y. Las medidas paralelas a X y Z se toman siempre en verdadera magnitud.</p>`,
      svg: s4,
    },
    {
      html: `<h3>9.5 Situar puntos por coordenadas</h3><p>Igual que en isométrico, el método general para situar un punto P(x, y, z) en caballera consiste en recorrer sus coordenadas paralelamente a los ejes:</p><ol><li>Desde O, la coordenada <b>x</b> sobre el eje X, en verdadera magnitud.</li><li>Paralela al eje fugado, la coordenada <b>y multiplicada por c</b>. Se obtiene la proyección P₁ del punto en el plano horizontal.</li><li>Paralela a Z (vertical), la coordenada <b>z</b> en verdadera magnitud.</li></ol><p>En el ejemplo, P(90, 70, 60) con c = 0,5 se dibuja con 90 mm en horizontal, 35 mm en la dirección fugada y 60 mm en vertical.</p><p>Las líneas discontinuas que forman el «prisma de coordenadas» ayudan a leer la posición: sin ellas, el punto aislado sería ambiguo.</p><p>Este método es la herramienta universal para los casos difíciles:</p><ul><li>vértices de pirámides o de caras inclinadas;</li><li>puntos de curvas situadas en planos horizontales o de perfil;</li><li>centros de agujeros en caras no frontales.</li></ul><p>Si el punto está en el plano frontal (y = 0), se dibuja directamente con sus medidas reales; por eso las figuras de ese plano son tan fáciles de representar.</p>`,
      svg: s5,
    },
    {
      html: `<h3>9.6 Dibujo de piezas a partir de sus vistas</h3><p>Para dibujar en caballera una pieza dada por sus vistas se sigue un método parecido al de la isometría, pero aprovechando la ventaja del plano frontal:</p><ol><li><b>Elegir la cara frontal</b>: la vista que tenga el perfil más complejo, con arcos o circunferencias. En la pieza en L del dibujo, el alzado con forma de L.</li><li><b>Dibujar esa cara en verdadera magnitud</b>, copiando directamente la vista.</li><li>Desde cada vértice, trazar <b>paralelas al eje fugado</b> con la longitud de la profundidad multiplicada por c (60 · 0,5 = 30 mm en el ejemplo).</li><li>Unir los extremos para formar la cara trasera, dibujando solo las aristas visibles.</li><li>Si la pieza tiene ranuras o escalones en profundidad, se trabaja con el <b>prisma envolvente</b> y se vacía, como en isométrico.</li></ol><p>Cuando la pieza es un simple <b>prisma de perfil constante</b> (una extrusión), la caballera es especialmente rápida: basta con dibujar el perfil y trasladarlo.</p><p>En perspectiva no se dibujan normalmente las aristas ocultas. Las aristas visibles se repasan con trazo grueso y las auxiliares se dejan finas o se borran.</p><p>Comprueba al final que todas las aristas paralelas en la pieza lo son en el dibujo y que las profundidades se han reducido todas con el mismo coeficiente.</p>`,
      svg: s6,
      video: { id: "fFgROHVrCy4", titulo: "Figura en perspectiva caballera: ejercicios de dibujo técnico paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 326348, busqueda: "perspectiva caballera a partir de vistas" },
    },
    {
      html: `<h3>9.7 Figuras planas en caballera</h3><p>La forma en que se representa una figura plana depende del plano en el que esté:</p><ul><li>En el <b>plano frontal</b> (o paralelos a él): se dibuja en <b>verdadera magnitud</b>. Un hexágono regular es un hexágono regular; un ángulo de 30° mide 30°.</li><li>En un <b>plano horizontal</b> o de <b>perfil</b>: aparece <b>deformada</b>. Las medidas paralelas a X o Z son reales, pero las paralelas a Y se reducen y cambian de dirección. Los ángulos rectos dejan de verse rectos.</li></ul><p>Para dibujar una figura en un plano horizontal se procede así:</p><ol><li>Se dibuja la figura en verdadera magnitud aparte (o se toman las coordenadas de sus vértices).</li><li>Se refiere cada vértice a dos ejes del plano: la coordenada x se lleva sobre X y la coordenada y, reducida, en dirección del eje fugado.</li><li>Se unen los vértices obtenidos.</li></ol><p>Es útil encerrar la figura en un rectángulo (cuya perspectiva es un paralelogramo) y situar los vértices sobre sus lados o mediante paralelas.</p><p>Las propiedades que sí se conservan son el <b>paralelismo</b> y la <b>proporción entre segmentos de una misma recta</b>. Así, el punto medio de un lado sigue siendo el punto medio en perspectiva, y los lados paralelos del hexágono siguen siendo paralelos. Estas propiedades son muy útiles para comprobar el dibujo.</p>`,
      svg: s7,
    },
    {
      html: `<h3>9.8 La circunferencia en planos horizontales: método de los ocho puntos</h3><p>Una circunferencia situada en el plano frontal se dibuja con el compás. Pero en un plano horizontal o de perfil se proyecta como una <b>elipse</b>, y hay que construirla.</p><p>El <b>método de los ocho puntos</b> es el más usado:</p><ol><li>Se dibuja el cuadrado circunscrito a la circunferencia, que en perspectiva es un <b>paralelogramo</b>, con sus diagonales y medianas.</li><li>Los <b>cuatro puntos medios</b> de los lados son puntos de tangencia de la elipse con el paralelogramo.</li><li>Los otros cuatro puntos están en las <b>diagonales</b>, a una distancia del centro igual a r·√2/2 en verdadera magnitud. Para hallarlos se dibuja en el lado frontal (que está en VM) una semicircunferencia de radio r con centro en su punto medio; los puntos de 45° se proyectan perpendicularmente sobre el lado y, desde ahí, paralelas al eje fugado cortan las diagonales.</li><li>Se unen los ocho puntos a mano alzada o con plantilla de curvas, respetando las tangencias en los puntos medios.</li></ol><p>El resultado es una elipse inclinada cuyos ejes no coinciden con las medianas del paralelogramo: los ejes de la elipse son las direcciones de los <b>diámetros conjugados</b> perpendiculares, que en general hay que deducir. Para un croquis basta con los ocho puntos; para mayor precisión se pueden añadir puntos intermedios por coordenadas.</p><p>Las circunferencias en planos de perfil se construyen igual con el cuadrado circunscrito en ese plano.</p>`,
      svg: s8,
      video: { id: "CbO-jXvO_3w", titulo: "Circunferencias en perspectiva caballera", canal: "Dibujo Técnico paso a paso", vistas: 79221, busqueda: "circunferencia en perspectiva caballera" },
    },
    {
      html: `<h3>9.9 Circunferencias en las caras de un cubo</h3><p>Si se inscribe una circunferencia en cada una de las tres caras visibles de un cubo dibujado en caballera, el resultado muestra muy bien las propiedades del sistema:</p><ul><li>En la <b>cara frontal</b>, la circunferencia se ve <b>como tal</b>, con su radio real. Se dibuja con compás.</li><li>En la <b>cara superior</b> (horizontal) y en la <b>cara lateral</b> (de perfil), se ven <b>elipses</b> inscritas en paralelogramos. Estas dos elipses son iguales entre sí cuando α = 45°, aunque giradas.</li></ul><p>Comparado con la isométrica, donde las tres circunferencias se ven como elipses iguales, la caballera tiene una ventaja clara si la pieza tiene circunferencias en un solo plano: se coloca ese plano en posición frontal y todo el trabajo se hace con el compás.</p><p>Por eso la caballera es la perspectiva preferida para piezas con <b>simetría de revolución</b> respecto a un eje perpendicular al cuadro: ruedas, poleas, bridas, engranajes, tapas o tuercas vistas de frente.</p><p>Si en cambio las circunferencias están en caras horizontales (por ejemplo, agujeros verticales en una placa), las elipses de la caballera son más alargadas y menos naturales que en isométrica, y conviene valorar qué sistema elegir.</p><p>En cualquier caso, la elipse siempre debe ser tangente al paralelogramo en los puntos medios de sus lados: si no lo es, la circunferencia no «encaja» en la cara.</p>`,
      svg: s9,
    },
    {
      html: `<h3>9.10 Cilindros, conos y piezas de revolución</h3><p>Un <b>cilindro cuyo eje es perpendicular al cuadro</b> (es decir, paralelo al eje fugado) es uno de los sólidos más fáciles en caballera:</p><ol><li>Se dibuja la base delantera: una <b>circunferencia en verdadera magnitud</b>.</li><li>Su centro se traslada paralelamente al eje fugado una distancia igual a la altura multiplicada por c (120 · 0,5 = 60 mm en el dibujo). Se dibuja la base trasera, igual a la delantera.</li><li>Se trazan las <b>tangentes comunes</b> a ambas circunferencias paralelas al eje: son las generatrices de contorno. Sus puntos de tangencia están en el diámetro perpendicular a la dirección fugada.</li><li>Se dibuja solo la parte visible de la base trasera.</li></ol><p>Un <b>cono</b> de eje perpendicular al cuadro se dibuja con la base circular frontal y el vértice trasladado según el eje fugado; sus generatrices de contorno son las tangentes desde el vértice a la circunferencia (construcción de tangencias de punto exterior).</p><p>Las piezas de revolución formadas por varios cilindros (ejes escalonados, poleas, casquillos) se dibujan colocando sus centros a lo largo del eje fugado, cada uno con su radio real.</p><p>Si el eje del cilindro es vertical u horizontal paralelo a X, sus bases son elipses y la construcción es más laboriosa (método de los ocho puntos en cada base). De nuevo, se ve la importancia de orientar bien la pieza.</p>`,
      svg: s10,
    },
    {
      html: `<h3>9.11 Prismas y pirámides</h3><p>Los <b>prismas</b> son muy sencillos en caballera cuando sus bases están en planos frontales: la base delantera se dibuja en verdadera magnitud y la trasera es una copia trasladada según el eje fugado (longitud del prisma por c). Las <b>aristas laterales</b> son paralelas al eje Y.</p><p>Al dibujar un prisma hay que decidir qué aristas son visibles. Se ven las caras laterales que «miran» hacia el lado al que fuga el eje (en el dibujo, hacia arriba y a la derecha), además de la base frontal. Las aristas de las caras ocultas se dibujan discontinuas si se desea mostrarlas, o se omiten.</p><p>Las <b>pirámides</b> con base frontal se dibujan con la base en VM y el vértice situado a partir del centro de la base, desplazado según el eje fugado. Si la base es horizontal, se dibuja la base deformada (por coordenadas) y el vértice en la vertical de su centro, a la altura real.</p><p>Para los poliedros en posición cualquiera, el método general es situar cada vértice por coordenadas a partir de las vistas y unirlos.</p><p>Una ventaja didáctica de la caballera es que permite representar con claridad secciones de prismas por planos, desarrollos y sólidos compuestos (por ejemplo, una casa con tejado a dos aguas), porque la cara frontal se mantiene reconocible.</p>`,
      svg: s11,
    },
    {
      html: `<h3>9.12 Caballera o isométrica: cuándo usar cada una</h3><p>Ambas son perspectivas cilíndricas que conservan el paralelismo y permiten medir en la dirección de los ejes, pero tienen usos distintos.</p><ul><li><b>Caballera</b>: conserva la forma de la cara frontal; las circunferencias de esa cara se dibujan con compás; es muy rápida para piezas extruidas; pero deforma bastante las caras horizontales y laterales, y su aspecto es menos natural.</li><li><b>Isométrica</b>: trata las tres direcciones por igual; da una imagen equilibrada y más realista; las tres caras se deforman lo mismo; las circunferencias siempre son elipses (óvalos).</li></ul><p>Criterios prácticos:</p><ul><li>Pieza con circunferencias o perfil complejo en un solo plano: <b>caballera</b>, con ese plano frontal.</li><li>Pieza con detalles repartidos en las tres caras: <b>isométrica</b>.</li><li>Croquis rápido para explicar una idea: la que resulte más cómoda; la caballera suele ser la más rápida.</li><li>Ilustraciones técnicas o catálogos: normalmente isométrica o dimétrica.</li></ul><p>En la otra familia de perspectivas oblicuas está la <b>perspectiva militar</b> o planimétrica, en la que el plano del cuadro es horizontal: la planta se dibuja en verdadera magnitud y las alturas se levantan verticalmente. Se usa en arquitectura y urbanismo para mostrar edificios a partir de su planta.</p><p>Saber elegir el sistema es tan importante como saber dibujarlo: un buen dibujante escoge la representación que comunica mejor con menos trabajo.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Dibuja en caballera (α = 45°, c = 0,5) un cubo de 60 mm.", pasos: ["Cara frontal: cuadrado de 60 mm en VM.", "Desde cada vértice, paralelas a 45° de 60 · 0,5 = 30 mm.", "Se cierra la cara trasera; la arista oculta se omite o se dibuja discontinua."], resultado: "Cubo con la cara frontal cuadrada y profundidad aparente de 30 mm." },
    { enunciado: "Construye la escala reducida para c = 2/3 hasta 90 mm.", pasos: ["Recta auxiliar con marcas reales cada 10 mm hasta 90.", "En el eje fugado se lleva 90 · 2/3 = 60 mm.", "Se une 90 con 60 y se trazan paralelas por las demás marcas."], resultado: "Escala gráfica en la que cada 10 mm reales mide 6,7 mm." },
    { enunciado: "Sitúa el punto P(40, 60, 30) con α = 45° y c = 0,5.", pasos: ["40 mm sobre X.", "Paralela a Y: 60 · 0,5 = 30 mm.", "Vertical: 30 mm."], resultado: "P queda situado; su proyección P₁ en el plano horizontal está al final del paso 2." },
    { enunciado: "Dibuja un cilindro de Ø 50 mm y 80 mm de longitud con el eje perpendicular al cuadro.", pasos: ["Circunferencia frontal de radio 25 mm.", "Centro trasero a 80 · 0,5 = 40 mm en la dirección fugada; segunda circunferencia.", "Tangentes paralelas al eje fugado en los extremos del diámetro perpendicular a esa dirección."], resultado: "Cilindro con las dos bases en VM y dos generatrices de contorno." },
    { enunciado: "Dibuja una circunferencia de Ø 60 en la cara superior de un cubo de 60 mm (c = 0,5).", pasos: ["Paralelogramo de 60 × 30 (a 45°) con diagonales y medianas.", "Cuatro puntos medios de los lados.", "Cuatro puntos en las diagonales con la semicircunferencia auxiliar sobre el lado frontal (r·√2/2 ≈ 21,2 mm desde el centro en VM)."], resultado: "Elipse por ocho puntos, tangente al paralelogramo en los puntos medios." },
    { enunciado: "¿Qué cara de una polea (disco con eje) conviene poner en el plano frontal?", pasos: ["La polea tiene circunferencias en planos perpendiculares a su eje.", "Si esas caras son frontales, todas se dibujan con compás.", "El eje queda en dirección fugada."], resultado: "Las caras circulares, con el eje según Y." },
  ],
  errores: [
    "Aplicar el coeficiente de reducción también a las medidas de X o Z.",
    "Olvidar indicar el ángulo y el coeficiente utilizados.",
    "Dibujar como circunferencias las de las caras horizontales o laterales.",
    "No hacer tangente la elipse al paralelogramo en los puntos medios de los lados.",
    "Elegir como cara frontal una cara sencilla y dejar el perfil complejo en una cara deformada.",
    "Medir ángulos o longitudes reales en caras no frontales.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué tipo de proyección usa la perspectiva caballera?", sol: "Cilíndrica oblicua: rayos paralelos entre sí y oblicuos al plano del cuadro." },
    { nivel: "básico", q: "¿Qué elementos se ven en verdadera magnitud en caballera?", sol: "Los contenidos en el plano frontal o en planos paralelos a él; en particular las medidas paralelas a X y Z." },
    { nivel: "básico", q: "¿Qué valores de α y c son los más habituales?", sol: "α = 45° y c = 0,5 (también 30°, 60°, y c = 2/3 o 3/4)." },
    { nivel: "básico", q: "Dibuja en caballera un cubo de 50 mm con α = 45° y c = 0,5.", sol: "Cuadrado frontal de 50 mm; paralelas a 45° de 25 mm desde los vértices; cara trasera." },
    { nivel: "básico", q: "Dibuja un prisma de 80 × 40 × 30 con la cara de 80 × 30 en el plano frontal.", sol: "Rectángulo frontal de 80 × 30; profundidad 40 · 0,5 = 20 mm a 45°." },
    { nivel: "básico", q: "¿Cómo se ve una circunferencia del plano frontal?", sol: "Como una circunferencia en verdadera magnitud; se dibuja con compás." },
    { nivel: "básico", q: "¿Cómo se ve una circunferencia de un plano horizontal?", sol: "Como una elipse inscrita en el paralelogramo que representa al cuadrado circunscrito." },
    { nivel: "básico", q: "¿Se conserva el paralelismo en caballera?", sol: "Sí, porque es una proyección cilíndrica: rectas paralelas se dibujan paralelas." },
    { nivel: "básico", q: "Con c = 0,5, ¿cuánto se dibuja una profundidad de 70 mm?", sol: "35 mm, en la dirección del eje fugado." },
    { nivel: "básico", q: "¿Qué es la perspectiva de gabinete?", sol: "Caballera con coeficiente 0,5 en el eje fugado." },
    { nivel: "medio", q: "Construye con Tales la escala reducida para c = 3/4 hasta 80 mm.", sol: "Auxiliar con marcas reales hasta 80; en el eje fugado 80 · 3/4 = 60 mm; se unen 80 y 60 y se trazan paralelas por las demás marcas." },
    { nivel: "medio", q: "Dibuja una pieza en L de 100 × 90 de perfil (base de 30 de alto, brazo de 35 de grueso) y 60 de fondo.", sol: "Perfil en L en el plano frontal en VM; paralelas a 45° de 30 mm desde los vértices visibles; aristas traseras visibles." },
    { nivel: "medio", q: "Dibuja un hexágono regular de 30 mm de lado en un plano horizontal.", sol: "Se toman las coordenadas de los vértices en VM (por ejemplo, ±30 y ±15 en x; 0 y ±26 en y). Se llevan las x sobre X y las y reducidas (±13) en la dirección fugada." },
    { nivel: "medio", q: "Dibuja una circunferencia de Ø 60 en la cara superior de un prisma por el método de los ocho puntos.", sol: "Paralelogramo 60 × 30, diagonales y medianas; 4 puntos medios; 4 puntos en las diagonales con la semicircunferencia de radio 30 sobre el lado frontal y paralelas al eje fugado; se unen." },
    { nivel: "medio", q: "Dibuja un cilindro de Ø 40 y longitud 100 con el eje perpendicular al cuadro.", sol: "Circunferencias de radio 20 con centros separados 50 mm a 45°; tangentes comunes paralelas a la dirección fugada." },
    { nivel: "medio", q: "Dibuja un prisma hexagonal de lado 25 mm y longitud 80 con las bases frontales.", sol: "Hexágono frontal en VM; trasladado 40 mm a 45°; aristas laterales visibles en las caras que miran hacia la dirección de fuga." },
    { nivel: "medio", q: "Dibuja un cubo de 60 mm con α = 30° y c = 0,5 y compáralo con α = 60°.", sol: "Con 30° la cara lateral se ve más amplia; con 60° se ve más la superior. La profundidad aparente es 30 mm en ambos." },
    { nivel: "medio", q: "Dibuja una pirámide cuadrangular de base 50 mm (horizontal) y altura 70 mm.", sol: "Base: paralelogramo 50 × 25 a 45°; centro por las diagonales; vertical de 70 mm desde el centro; se une con los vértices." },
    { nivel: "medio", q: "¿Por qué con c = 1 los objetos parecen alargados?", sol: "Porque la visión humana acorta las profundidades por la perspectiva cónica; una profundidad dibujada a tamaño real se interpreta como más larga de lo que es." },
    { nivel: "medio", q: "Dibuja un cono de Ø 50 y 70 mm de altura con el eje perpendicular al cuadro.", sol: "Circunferencia frontal de radio 25; vértice a 35 mm a 45° desde el centro; tangentes desde el vértice a la circunferencia." },
    { nivel: "medio", q: "Dibuja una placa de 80 × 50 × 10 (horizontal) con un agujero pasante de Ø 30 centrado.", sol: "Placa: rectángulo frontal 80 × 10 y profundidad 25. Agujero: elipse por ocho puntos en un paralelogramo de 30 × 15 centrado en la cara superior; se ve parte de la elipse inferior desplazada 10 mm hacia abajo." },
    { nivel: "medio", q: "Dibuja un tejado a dos aguas sobre un prisma de 60 × 40 × 40 con la cumbrera a 60 mm de altura.", sol: "Cara frontal: pentágono (rectángulo 60 × 40 más triángulo hasta 60 de altura) en VM. Profundidad 40 · 0,5 = 20 mm a 45° desde cada vértice; cumbrera paralela al eje fugado." },
    { nivel: "avanzado", q: "Halla el coeficiente de reducción si los rayos forman 63,4° con el cuadro.", sol: "c = cotg 63,4° ≈ 0,5." },
    { nivel: "avanzado", q: "Dibuja en caballera una pieza con un semicilindro superior (Ø 60) sobre un bloque de 60 × 40 × 30, con el eje del semicilindro perpendicular al cuadro.", sol: "Perfil frontal: rectángulo 60 × 30 con semicírculo de radio 30 encima, en VM. Traslado de 20 mm a 45°. Tangente al arco paralela al eje fugado en el punto a 45° del centro." },
    { nivel: "avanzado", q: "Dibuja un cilindro vertical de Ø 50 y 60 mm de altura en caballera.", sol: "Bases horizontales: elipses por ocho puntos en paralelogramos 50 × 25. Base superior a 60 mm de la inferior. Generatrices verticales tangentes a las dos elipses en sus extremos horizontales." },
    { nivel: "avanzado", q: "Compara una arista de 50 mm en la dirección fugada en caballera (c = 0,5) y en isométrica (perspectiva y dibujo).", sol: "Caballera: 25 mm. Perspectiva isométrica: 40,8 mm. Dibujo isométrico: 50 mm." },
    { nivel: "avanzado", q: "¿Qué ángulos forman, en la perspectiva, los lados de un cuadrado horizontal con α = 45°?", sol: "Los lados paralelos a X son horizontales y los paralelos a Y forman 45°: el cuadrado se ve como un paralelogramo de ángulos 45° y 135°." },
    { nivel: "avanzado", q: "¿Puede representarse en caballera el triedro con el eje Y fugando hacia abajo? ¿Qué se vería?", sol: "Sí: la dirección de fuga es arbitraria. Se verían la cara frontal, la lateral y la cara inferior del objeto (vista desde abajo)." },
    { nivel: "avanzado", q: "Explica qué es la perspectiva militar y en qué se diferencia de la caballera.", sol: "Es otra axonometría oblicua, con el cuadro horizontal: la planta se ve en VM y las alturas se dibujan verticales (a veces reducidas). En la caballera el cuadro es frontal y se ve en VM el alzado." },
    { nivel: "avanzado", q: "Una rueda dentada tiene 24 dientes en su perímetro. ¿Qué sistema elegirías para dibujarla y cómo la orientarías?", sol: "Caballera, con la cara de la rueda en el plano frontal: el perfil de los dientes se dibuja en VM con compás y divisiones angulares, y la anchura de la rueda se traslada en la dirección fugada." },
  ],
  quiz: reparte([
    { q: "La caballera es una proyección…", o: ["cónica", "cilíndrica ortogonal", "cilíndrica oblicua", "central"], a: 2, e: "Rayos oblicuos al cuadro." },
    { q: "El plano del cuadro en caballera es paralelo al plano…", o: ["horizontal", "frontal XOZ", "de perfil", "bisector"], a: 1, e: "Por eso la cara frontal se ve en VM." },
    { q: "Los ejes X y Z forman…", o: ["120°", "90°", "135°", "45°"], a: 1, e: "Plano frontal en VM." },
    { q: "El coeficiente de reducción se aplica…", o: ["a los tres ejes", "solo al eje fugado", "solo a Z", "a X y Z"], a: 1, e: "Eje Y." },
    { q: "Ángulo de fuga más habitual:", o: ["15°", "45°", "90°", "120°"], a: 1, e: "También 30° y 60°." },
    { q: "Coeficiente más habitual:", o: ["0,816", "0,5", "1,22", "2"], a: 1, e: "Perspectiva de gabinete." },
    { q: "Si c = cotg φ y φ = 45°, c vale…", o: ["0,5", "1", "0,707", "2"], a: 1, e: "cotg 45° = 1." },
    { q: "Una circunferencia en el plano frontal se ve como…", o: ["elipse", "circunferencia", "óvalo", "segmento"], a: 1, e: "VM." },
    { q: "Una circunferencia en un plano horizontal se ve como…", o: ["circunferencia", "elipse", "rombo", "recta"], a: 1, e: "Ocho puntos." },
    { q: "En el método de los ocho puntos, cuatro son…", o: ["los vértices", "los puntos medios de los lados", "los focos", "el centro"], a: 1, e: "Tangencias." },
    { q: "Los otros cuatro puntos están en…", o: ["las medianas", "las diagonales", "los vértices", "fuera"], a: 1, e: "A r·√2/2 del centro." },
    { q: "La escala reducida se construye con…", o: ["Pitágoras", "Tales", "la potencia", "una homotecia de razón −1"], a: 1, e: "Paralelas." },
    { q: "Conviene poner en el plano frontal la cara…", o: ["más sencilla", "con el perfil más complejo o circunferencias", "superior", "trasera"], a: 1, e: "Se dibuja sin deformar." },
    { q: "Las generatrices de contorno de un cilindro de eje fugado son…", o: ["verticales", "horizontales", "paralelas al eje fugado", "radiales"], a: 2, e: "Tangentes comunes." },
    { q: "Con c = 1 el cubo parece…", o: ["más corto", "alargado", "perfecto", "plano"], a: 1, e: "Profundidad exagerada." },
    { q: "Con α = 30° se ve más…", o: ["la cara superior", "la cara lateral", "la cara inferior", "igual"], a: 1, e: "Menos inclinación." },
    { q: "Profundidad real de 60 mm con c = 2/3:", o: ["30 mm", "40 mm", "60 mm", "90 mm"], a: 1, e: "60 · 2/3." },
    { q: "En caballera se conserva siempre…", o: ["el ángulo recto", "el paralelismo", "la longitud", "el área"], a: 1, e: "Proyección cilíndrica." },
    { q: "La perspectiva militar tiene en verdadera magnitud…", o: ["el alzado", "la planta", "el perfil", "nada"], a: 1, e: "Cuadro horizontal." },
    { q: "Una pieza de revolución se dibuja mejor en caballera con su eje…", o: ["vertical", "horizontal según X", "según el eje fugado", "a 30°"], a: 2, e: "Circunferencias frontales." },
  ], 3),
  examen: reparte([
    { q: "Cubo de 80 mm, c = 0,5: longitud dibujada de las aristas fugadas", o: ["80", "40", "56", "65"], a: 1, e: "80 · 0,5." },
    { q: "Ángulo de los rayos con el cuadro para c = 0,5:", o: ["30°", "45°", "≈ 63,4°", "90°"], a: 2, e: "cotg φ = 0,5." },
    { q: "Un hexágono regular en una cara frontal se dibuja…", o: ["deformado", "en VM", "por ocho puntos", "con óvalo"], a: 1, e: "Plano frontal." },
    { q: "Un cuadrado horizontal con α = 45° se ve como…", o: ["cuadrado", "paralelogramo de 45° y 135°", "rombo de 60°", "rectángulo"], a: 1, e: "Lados X horizontales, Y a 45°." },
    { q: "En el cilindro de eje fugado los puntos de tangencia están en el diámetro…", o: ["horizontal", "vertical", "perpendicular a la dirección fugada", "paralelo a la dirección fugada"], a: 2, e: "Tangentes paralelas al eje." },
    { q: "Escala reducida c = 3/4: 100 mm se dibujan…", o: ["75", "50", "133", "100"], a: 0, e: "100 · 3/4." },
    { q: "Ventaja principal de la caballera frente a la isométrica:", o: ["imagen más realista", "cara frontal sin deformar", "tres caras iguales", "no necesita coeficientes"], a: 1, e: "Circunferencias con compás." },
    { q: "Distancia al centro de los puntos en diagonal (VM) para r = 40:", o: ["20", "28,3", "40", "56,6"], a: 1, e: "40 · √2/2." },
  ], 1),
  feynman: ["Por qué la cara frontal se ve en verdadera magnitud", "Qué es el coeficiente de reducción y por qué se usa 0,5", "Cómo se construye la escala reducida con Tales", "Cómo se dibuja una circunferencia en un plano horizontal", "Cuándo conviene la caballera y cuándo la isométrica"],
  glosario: [
    ["Perspectiva caballera", "Axonometría oblicua con el plano del cuadro paralelo a una cara del triedro."],
    ["Axonometría oblicua", "Proyección cilíndrica con rayos oblicuos al plano del cuadro."],
    ["Plano frontal", "Plano XOZ, paralelo al cuadro; se representa en verdadera magnitud."],
    ["Eje fugado", "Proyección del eje perpendicular al cuadro (Y)."],
    ["Ángulo de fuga", "Ángulo α que forma el eje fugado con el eje X."],
    ["Coeficiente de reducción", "Factor c por el que se multiplican las medidas paralelas al eje fugado."],
    ["Perspectiva de gabinete", "Caballera con c = 0,5."],
    ["Escala reducida", "Escala gráfica del eje fugado construida con Tales."],
    ["Método de los ocho puntos", "Construcción de la elipse con cuatro tangencias y cuatro puntos en las diagonales."],
    ["Paralelogramo circunscrito", "Perspectiva del cuadrado circunscrito a una circunferencia."],
    ["Generatriz de contorno", "Recta tangente que limita la imagen de un cilindro o un cono."],
    ["Prisma de perfil constante", "Sólido obtenido al desplazar un perfil plano; muy fácil en caballera."],
    ["Verdadera magnitud", "Medida y forma reales."],
    ["Perspectiva militar", "Axonometría oblicua con el cuadro horizontal; la planta en VM."],
    ["Diámetros conjugados", "Pares de diámetros de una elipse que son proyección de diámetros perpendiculares de la circunferencia."],
    ["Croquis", "Dibujo a mano alzada, proporcionado y claro."],
  ],
  situacion: {
    titulo: "Catálogo de piezas del taller de tecnología",
    reto: "El departamento de Tecnología necesita un catálogo ilustrado de las piezas del almacén (poleas, ejes, soportes, engranajes) para que el alumnado de ESO pueda pedirlas. Vuestro grupo dibujará las fichas en perspectiva caballera.",
    pasos: [
      "Elegid cuatro piezas reales del taller y medidlas con regla o calibre.",
      "Para cada pieza, decidid qué cara se colocará en el plano frontal y justificadlo.",
      "Elegid α y c y construid la escala reducida si no es 0,5.",
      "Dibujad cada pieza en caballera, con las circunferencias de caras no frontales por el método de los ocho puntos.",
      "Componed una ficha por pieza con su dibujo, nombre, medidas principales y uso.",
    ],
    producto: "Catálogo de cuatro fichas A4 con piezas en perspectiva caballera.",
    evaluacion: [
      "La cara frontal elegida es la más adecuada y está en verdadera magnitud.",
      "Las profundidades están reducidas con el coeficiente indicado.",
      "Las circunferencias están correctamente representadas en cada plano.",
      "Las fichas son claras, limpias y útiles para un usuario de ESO.",
    ],
  },
  figura: fig("Caballera de un vistazo", "Resumen de la perspectiva caballera: ejes, coeficiente, circunferencias y usos", [
    ["Fundamento", ["proyección oblicua", "cuadro frontal", "X, Z en VM", "Y fugado"], "var(--pen)"],
    ["Parámetros", ["α = 45° (30°, 60°)", "c = 0,5", "c = cotg φ", "escala por Tales"], "var(--leaf)"],
    ["Circunferencias", ["frontal: compás", "otras: elipses", "ocho puntos", "cilindros fáciles"], "var(--red)"],
    ["Uso", ["cara compleja al frente", "piezas extruidas", "revolución", "croquis rápidos"], "var(--inf)"],
  ]),
  video: { id: "UKXqgnLKtuI", titulo: "Perspectiva caballera paso a paso: cubo con reducción y sin ella", canal: "Dibujo Técnico paso a paso", vistas: 289316, busqueda: "perspectiva caballera cubo coeficiente de reducción" },
  mapa: mapa("PERSPECTIVA CABALLERA", "var(--bac)", [
    ["Fundamento", "oblicua · cuadro frontal", "var(--pen)"],
    ["Parámetros", "α · c · escala de Tales", "var(--leaf)"],
    ["Circunferencias", "compás · ocho puntos", "var(--red)"],
    ["Sólidos y usos", "prismas · cilindros · elección", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Caballera", "Axonometría oblicua con el cuadro paralelo al plano frontal."],
    ["Verdadera magnitud", "Todo lo paralelo al plano frontal."],
    ["Ejes", "X horizontal, Z vertical (90°), Y fugado a α."],
    ["Coeficiente c", "Solo en el eje fugado; habitual 0,5."],
    ["c y φ", "c = cotg φ (φ: ángulo rayos-cuadro)."],
    ["Escala reducida", "Tales: medidas reales en auxiliar, unir y paralelas."],
    ["Punto", "x real, y · c en la fuga, z real."],
    ["Elección de la cara frontal", "La más compleja o con circunferencias."],
    ["Ocho puntos", "4 puntos medios + 4 en diagonales a r·√2/2."],
    ["Cilindro de eje fugado", "Dos circunferencias en VM y tangentes ∥ Y."],
    ["Prisma de bases frontales", "Base en VM y copia trasladada L · c."],
    ["Caballera vs isométrica", "Caballera: frente sin deformar. Iso: equilibrio."],
  ],
  familias: ["Buscad en libros de matemáticas cubos y prismas dibujados en caballera.", "Dibujad juntos un dado o una caja de cereales en caballera y en isométrica y comparad.", "Observad la sombra de una caja al sol de la tarde: se parece a una proyección oblicua.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sistemas de representación: perspectiva caballera como axonometría oblicua, elección de parámetros, coeficientes de reducción, representación de piezas, figuras planas, circunferencias y sólidos (RD 243/2022, Dibujo Técnico I, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic I, sistemes de representació).",
    ideas: ["Linterna con luz paralela (sol) y una pieza sobre una cartulina vertical para ver la proyección oblicua.", "Comparar el mismo cubo con distintos α y c en una hoja de cálculo o GeoGebra.", "Catálogo de piezas reales del taller de tecnología.", "Ejercicio de elección: decidir qué cara va al frente en varias piezas antes de dibujar."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Perspectiva caballera, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_caballera" },
    { t: "Proyección oblicua, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Proyecci%C3%B3n_oblicua" },
  ],
  revisado: "2026-11-14",
};
