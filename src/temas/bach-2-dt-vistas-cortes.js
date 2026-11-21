// Dibujo Técnico II 2º Bachillerato · Tema 13. Nivel libro. Vistas, cortes, secciones y roturas según UNE-EN ISO 128.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, add, sub, mul, unit, tx, P2, circ, ejeL, oculta } = G;

const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));
const T = (x, y, s, c = "var(--ink)", a = "middle", sz = 10.5) => tx(x, y, s, { s: sz, b: 1, a, c });
const V = (A, B, w = 2.2) => seg(A, B, "var(--ink)", w);
const H = (A, B) => seg(A, B, "var(--ink)", 1.1, oculta);
const E = (A, B) => seg(A, B, "var(--red)", 0.9, ejeL);
const fino = (A, B, c = "var(--ink)") => seg(A, B, c, 0.9);
const cont = (pts, w = 2.2) => poli(pts, "var(--ink)", w, "none");
const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
const cir = (C, r, w = 2.2, c = "var(--ink)", extra = "") => circ(C, r, c, w, extra);
const curvaP = (pts, c = "var(--ink)", w = 1, extra = "") => `<path d="M${pts.map(P2).join(" L ")}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;
const polyC = (C, r, a0, a1, n = 40) => rango(n + 1, (i) => { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [C[0] + r * Math.cos(a), C[1] - r * Math.sin(a)]; });
// Rayado normalizado a 45° recortado por uno o varios contornos (regla par-impar para los huecos).
let nh = 0;
const rayar = (polys, ang = 45, gap = 5, c = "var(--pen)", w = 0.9) => {
  const id = `r13_${nh++}`, all = polys.flat(), xs = all.map((p) => p[0]), ys = all.map((p) => p[1]), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2, R = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) / 2 + 2;
  const a = (ang * Math.PI) / 180, d = [Math.cos(a), -Math.sin(a)], n = [Math.sin(a), Math.cos(a)], k = Math.ceil(R / gap);
  const lineas = rango(2 * k + 1, (i) => { const t = (i - k) * gap, P = [cx + n[0] * t, cy + n[1] * t]; return `M${P2(sub(P, mul(d, R)))} L ${P2(add(P, mul(d, R)))}`; }).join(" ");
  return `<defs><clipPath id="${id}"><path clip-rule="evenodd" d="${polys.map((p) => `M${p.map(P2).join(" L ")} Z`).join(" ")}"/></clipPath></defs><path d="${lineas}" stroke="${c}" stroke-width="${w}" clip-path="url(#${id})"/>`;
};
const flecha = (P, dir, l = 13, c = "var(--ink)") => { const u = unit([0, 0], dir), Q = add(P, mul(u, l)), nn = [-u[1], u[0]], a = add(Q, mul(u, -6)); return `${seg(P, Q, c, 1.4)}<path d="M${P2(Q)} L ${P2(add(a, mul(nn, 3)))} L ${P2(add(a, mul(nn, -3)))} Z" fill="${c}"/>`; };
// Plano de corte: trazo fino de cadena, trazos gruesos en extremos y cambios de dirección, flechas con la dirección de observación.
const planoCorte = (pts, dir, letra) => {
  const g = (A, B) => seg(A, add(A, mul(unit(A, B), 9)), "var(--ink)", 3);
  const gruesos = pts.flatMap((P, i) => [i > 0 ? g(P, pts[i - 1]) : "", i < pts.length - 1 ? g(P, pts[i + 1]) : ""]).join("");
  const ends = [pts[0], pts[pts.length - 1]].map((P) => { const Q = add(P, mul(unit([0, 0], dir), 13)); return `${flecha(P, dir)}${T(Q[0] + (dir[0] ? dir[0] * 7 : 8), Q[1] + (dir[1] ? dir[1] * 9 : 4), letra, "var(--red)")}`; }).join("");
  return `${curvaP(pts, "var(--ink)", 0.9, ejeL)}${gruesos}${ends}`;
};
const onda = (A, B, amp = 2.4, n = 6) => rango(n * 6 + 1, (i) => { const t = i / (n * 6), P = add(A, mul(sub(B, A), t)), u = unit(A, B), nn = [-u[1], u[0]]; return add(P, mul(nn, amp * Math.sin(t * n * Math.PI) * (0.6 + 0.4 * Math.sin(t * 7)))); });

// 13.1 Disposición de las vistas en el sistema europeo.
const s1 = (() => {
  const w = 38, h = 26, caja = (cx, cy, l, nom, c = "var(--pen)") => `${poli(rect(cx - w / 2, cy - h / 2, w, h), c, 1.8, c, 0.1)}${T(cx, cy + 1, l, c, "middle", 13)}${T(cx, cy + h / 2 + 11, nom, "var(--ink)", "middle", 8.5)}`;
  const sim = `${poli([[24, 150], [44, 146], [44, 166], [24, 162]], "var(--ink)", 1.4, "none")}${E([18, 156], [50, 156])}${cir([70, 156], 10, 1.4)}${cir([70, 156], 4, 1.4)}`;
  return dib("Disposición de las seis vistas en el sistema europeo (método de proyección del primer diedro): la planta va debajo del alzado, el perfil izquierdo a la derecha, el perfil derecho a la izquierda, la planta inferior encima y la vista posterior a la derecha del todo", `${caja(130, 84, "A", "alzado", "var(--red)")}${caja(130, 128, "B", "planta")}${caja(130, 40, "E", "inferior")}${caja(180, 84, "C", "perfil izq.")}${caja(80, 84, "D", "perfil der.")}${caja(230, 84, "F", "posterior")}${sim}` + T(10, 22, "sistema europeo", "var(--red)", "start") + T(250, 170, "símbolo ISO del método E", "var(--ink)", "end", 10));
})();

// 13.2 Elección de vistas: pieza en L con agujero.
const s2 = (() => {
  const x0 = 26, zb = 90, al = (x, z) => [x0 + x, zb - z], yp = 104, pl = (x, y) => [x0 + x, yp + (50 - y)], xp = 128, pf = (y, z) => [xp + (50 - y), zb - z];
  const alz = `${cont([al(0, 0), al(80, 0), al(80, 50), al(0, 50)])}${V(al(0, 15), al(80, 15))}${cir(al(40, 35), 8)}${E(al(28, 35), al(52, 35))}${E(al(40, 22), al(40, 48))}`;
  const pla = `${cont([pl(0, 0), pl(80, 0), pl(80, 50), pl(0, 50)])}${V(pl(0, 38), pl(80, 38))}${H(pl(32, 38), pl(32, 50))}${H(pl(48, 38), pl(48, 50))}${E(pl(40, 32), pl(40, 54))}`;
  const per = `${cont([pf(0, 0), pf(50, 0), pf(50, 50), pf(38, 50), pf(38, 15), pf(0, 15)])}${H(pf(38, 27), pf(50, 27))}${H(pf(38, 43), pf(50, 43))}${E(pf(34, 35), pf(54, 35))}`;
  return dib("Vistas necesarias de una pieza en L con un agujero pasante: alzado (la vista más representativa), planta debajo y perfil izquierdo a la derecha; las aristas ocultas se dibujan con trazo discontinuo fino y los ejes con trazo y punto fino", `${alz}${pla}${per}${T(66, 34, "alzado", "var(--red)")}${T(66, 166, "planta", "var(--pen)")}${T(153, 104, "perfil izquierdo", "var(--pen)")}` + T(250, 140, "oculta: discontinua", "var(--ink)", "end", 9.5) + T(250, 154, "eje: trazo y punto", "var(--red)", "end", 9.5));
})();

// 13.3 Vista auxiliar de una cara inclinada.
const s3 = (() => {
  const A = [120, 110], B = [80, 70], n = [Math.SQRT1_2, -Math.SQRT1_2], u = [Math.SQRT1_2, Math.SQRT1_2], A1 = add(A, mul(n, 30)), B1 = add(B, mul(n, 30)), A2 = add(A1, mul(n, 50)), B2 = add(B1, mul(n, 50)), M = mul(add(A, B), 0.5), M2 = mul(add(A1, B2), 0.5), P1 = add(M, mul(u, 10)), P2b = add(M, mul(u, -10));
  return dib("Vista auxiliar: la cara inclinada se proyecta sobre un plano paralelo a ella, en la dirección indicada por la flecha A, y así aparece en verdadera magnitud con su agujero circular; en el alzado esa cara se ve de canto", `${cont([[20, 150], [120, 150], A, B, [20, 70]])}${H(P1, add(P1, mul(n, -22)))}${H(P2b, add(P2b, mul(n, -22)))}${E(add(M, mul(n, -28)), add(M, mul(n, 6)))}${fino(A, A1, "var(--muted)")}${fino(B, B1, "var(--muted)")}${poli([A1, B1, B2, A2], "var(--red)", 2.2, "var(--red)", 0.1)}${cir(M2, 10, 2.2, "var(--red)")}${E(add(M2, mul(u, -16)), add(M2, mul(u, 16)))}${E(add(M2, mul(n, -16)), add(M2, mul(n, 16)))}${flecha(add(M, mul(n, 27)), mul(n, -1), 20, "var(--red)")}${T(...add(add(M, mul(n, 22)), mul(u, 9)), "A", "var(--red)")}` + T(10, 166, "alzado", "var(--ink)", "start") + T(250, 170, "vista A: verdadera magnitud", "var(--red)", "end"));
})();

// 13.4 Corte total.
const s4 = (() => {
  const izq = [[30, 34], [70, 34], [70, 46], [78, 46], [78, 74], [30, 74]], der = izq.map(([x, y]) => [170 - x, y]);
  const alz = `${rayar([izq])}${rayar([der])}${cont(izq)}${cont(der)}${V([78, 46], [92, 46])}${E([85, 30], [85, 80])}`;
  const pla = `${cont(rect(30, 102, 110, 56))}${cir([85, 130], 15)}${cir([85, 130], 7)}${E([62, 130], [108, 130])}${E([85, 110], [85, 150])}${planoCorte([[18, 130], [152, 130]], [0, -1], "A")}`;
  return dib("Corte total por el plano A-A: se supone eliminada la parte de la pieza situada delante del plano; en el alzado se rayan las superficies cortadas y se dibujan las aristas que quedan detrás; en la planta se indica el plano de corte con trazo y punto, extremos gruesos y flechas", `${alz}${pla}${T(85, 21, "A-A", "var(--red)")}` + T(250, 60, "alzado en corte", "var(--red)", "end") + T(250, 172, "planta: plano de corte", "var(--ink)", "end"));
})();

// 13.5 Medio corte de una pieza simétrica.
const s5 = (() => {
  const ax = 130, b = 160, rf = 52, rb = 32, ri = 18, hf = 16, hb = 52, yt = b - hf - hb, yf = b - hf;
  const ext = [[ax, yt], [ax - rb, yt], [ax - rb, yf], [ax - rf, yf], [ax - rf, b], [ax, b]];
  const sec = [[ax + ri, yt], [ax + rb, yt], [ax + rb, yf], [ax + rf, yf], [ax + rf, b], [ax + ri, b]];
  return dib("Medio corte de un casquillo con valona: en las piezas simétricas se representa media vista exterior y medio corte, separados por el eje de simetría; en la mitad exterior no se dibujan aristas ocultas", `${rayar([sec])}${curvaP(ext, "var(--ink)", 2.2)}${cont(sec)}${V([ax, yt], [ax + ri, yt])}${V([ax, b], [ax + ri, b])}${E([ax, yt - 12], [ax, b + 8])}${T(ax - 46, yt - 12, "vista", "var(--ink)")}${T(ax + 46, yt - 12, "corte", "var(--red)")}` + T(10, 22, "medio corte", "var(--red)", "start") + T(250, 22, "eje de simetría: separa", "var(--ink)", "end", 10));
})();

// 13.6 Corte parcial.
const s6 = (() => {
  const ys = 70, yi = 120, hx = 130, r = 7, d = 30, tip = 7 * Math.tan((31 * Math.PI) / 180);
  const borde = [...onda([160, ys], [160, 112], 2.2, 3), ...onda([160, 112], [100, 112], 2.2, 5), ...onda([100, 112], [100, ys], 2.2, 3)];
  const agujero = [[hx - r, ys], [hx + r, ys], [hx + r, ys + d], [hx, ys + d + tip], [hx - r, ys + d]];
  return dib("Corte parcial de un eje para mostrar un agujero ciego: solo se corta la zona de interés, limitada por una línea fina a mano alzada; el resto de la pieza se representa en vista", `${rayar([borde, agujero])}${cont(rect(20, ys, 220, yi - ys))}${curvaP(borde, "var(--ink)", 1)}${cont(agujero)}${V([hx - r, ys + d], [hx + r, ys + d], 1.6)}${E([12, 95], [248, 95])}${E([hx, 60], [hx, 116])}` + T(10, 22, "corte parcial", "var(--red)", "start") + T(250, 150, "límite: línea fina a mano alzada", "var(--ink)", "end", 10));
})();

// 13.7 Corte por planos paralelos (quebrado).
const s7 = (() => {
  const yt = 34, yb = 70, h1 = rect(60, yt, 20, yb - yt), h3 = rect(180, yt, 20, yb - yt), h2 = [[117, yt], [143, yt], [143, 46], [137, 46], [137, yb], [123, yb], [123, 46], [117, 46]], pl = rect(30, yt, 200, yb - yt);
  const alz = `${rayar([pl, h1, h2, h3])}${cont(pl)}${cont(h1, 1.8)}${cont(h3, 1.8)}${cont(h2, 1.8)}${V([123, 46], [137, 46], 1.6)}${[70, 130, 190].map((x) => E([x, yt - 6], [x, yb + 6])).join("")}`;
  const pla = `${cont(rect(30, 104, 200, 56))}${cir([70, 122], 10)}${cir([130, 142], 13)}${cir([130, 142], 7)}${cir([190, 122], 10)}${planoCorte([[18, 122], [100, 122], [100, 142], [160, 142], [160, 122], [242, 122]], [0, -1], "B")}`;
  return dib("Corte por planos paralelos B-B: un plano de corte quebrado pasa por los tres agujeros aunque no estén alineados; en la vista cortada se representa como si fuera un solo plano y los cambios de dirección no se dibujan", `${alz}${pla}${T(130, 24, "B-B", "var(--red)")}`);
})();

// 13.8 Corte por planos concurrentes (girado).
const s8 = (() => {
  const C = [70, 96], R = 50, rp = 34, hol = [90, 210, 330].map((a) => add(C, [rp * Math.cos((a * Math.PI) / 180), -rp * Math.sin((a * Math.PI) / 180)])), x0 = 150, y = (r) => C[1] + r;
  const fuera = [[x0, y(-R)], [x0 + 14, y(-R)], [x0 + 14, y(-20)], [x0 + 34, y(-20)], [x0 + 34, y(20)], [x0 + 14, y(20)], [x0 + 14, y(R)], [x0, y(R)]], a1 = rect(x0, y(-rp - 7), 14, 14), a2 = rect(x0, y(rp - 7), 14, 14), bore = rect(x0, y(-12), 34, 24);
  const fin = add(C, [60 * Math.cos((210 * Math.PI) / 180), -60 * Math.sin((210 * Math.PI) / 180)]);
  return dib("Corte por planos concurrentes C-C: el plano quebrado pasa por el centro y por dos agujeros que forman 120°; la parte oblicua se gira hasta el plano principal antes de proyectarla, de modo que ambos agujeros aparecen en verdadera magnitud", `${cir(C, R)}${cir(C, 20)}${cir(C, 12)}${hol.map((P) => cir(P, 7)).join("")}${cir(C, rp, 0.9, "var(--red)", 'stroke-dasharray="10 3 2 3"')}${curvaP(polyC(C, rp, 210, 270, 20), "var(--red)", 1, 'stroke-dasharray="3 3"')}${planoCorte([[70, 34], C, fin], [1, 0], "C")}${rayar([fuera, a1, a2, bore])}${cont(fuera)}${cont(a1, 1.8)}${cont(a2, 1.8)}${cont(bore, 1.8)}${E([x0 - 8, C[1]], [x0 + 44, C[1]])}${T(x0 + 17, 34, "C-C", "var(--red)")}` + T(250, 172, "la rama oblicua se gira", "var(--red)", "end", 10));
})();

// 13.9 Secciones abatida y desplazada.
const s9 = (() => {
  const y1 = 60, y2 = 100, cy = 80, r = 20, kx = 80, Cd = [214, 82];
  const ch = 6, an = 6, ang = (Math.asin(an / r) * 180) / Math.PI, circP = polyC(Cd, r, 90 + ang, 450 - ang, 60), ranura = [add(Cd, [an, -r + ch]), add(Cd, [-an, -r + ch])];
  const secD = [...circP, ranura[1], ranura[0]].reverse(), insitu = polyC([40, cy], r * 0.98, 0, 360, 60);
  return dib("Secciones de un eje: la sección abatida se dibuja sobre la propia vista con línea fina; la sección desplazada D-D se lleva fuera de la vista y se identifica con letras; en una sección solo se dibuja lo que está en el plano de corte", `${cont(rect(20, y1, 150, y2 - y1))}${V([60, y1 + ch], [100, y1 + ch], 1.6)}${V([60, y1], [60, y1 + ch], 1.6)}${V([100, y1], [100, y1 + ch], 1.6)}${E([12, cy], [178, cy])}${rayar([insitu], 45, 4.5)}${curvaP([...insitu, insitu[0]], "var(--ink)", 1)}${planoCorte([[kx, y1 - 14], [kx, y2 + 14]], [1, 0], "D")}${rayar([secD])}${cont(secD)}${E([Cd[0] - r - 6, Cd[1]], [Cd[0] + r + 6, Cd[1]])}${E([Cd[0], Cd[1] - r - 6], [Cd[0], Cd[1] + r + 6])}${T(Cd[0], 44, "D-D", "var(--red)")}` + T(40, 130, "abatida", "var(--ink)") + T(214, 130, "desplazada", "var(--red)"));
})();

// 13.10 Elementos que no se cortan longitudinalmente.
const s10 = (() => {
  const x1 = 30, x2 = 230, g1 = 121, g2 = 139, p1 = [rect(x1, 64, g1 - x1, 28), rect(g2, 64, x2 - g2, 28)], p2 = [rect(x1, 92, g1 - x1, 28), rect(g2, 92, x2 - g2, 28)];
  const tornillo = `${cont(rect(110, 48, 40, 16))}${V([123, 48], [123, 64], 1)}${V([137, 48], [137, 64], 1)}${cont(rect(122, 64, 16, 76))}${fino([124, 100], [124, 140])}${fino([136, 100], [136, 140])}${cont(rect(108, 120, 44, 4))}${cont(rect(110, 124, 40, 16))}${V([123, 124], [123, 140], 1)}${V([137, 124], [137, 140], 1)}`;
  return dib("Ensamblaje cortado longitudinalmente: las chapas se rayan con inclinaciones opuestas para distinguirlas, pero el tornillo, la arandela y la tuerca no se cortan; tampoco se cortan ejes, pasadores, chavetas, remaches, nervios ni radios", `${p1.map((p) => rayar([p], 45, 5)).join("")}${p2.map((p) => rayar([p], 135, 5, "var(--red)")).join("")}${[...p1, ...p2].map((p) => cont(p)).join("")}${tornillo}${E([130, 40], [130, 150])}` + T(10, 22, "chapas: rayado opuesto", "var(--ink)", "start") + T(250, 170, "tornillo y tuerca: sin rayar", "var(--red)", "end"));
})();

// 13.11 Rayado normalizado.
const s11 = (() => {
  const a = rect(18, 34, 100, 50), b1 = rect(142, 34, 50, 50), b2 = rect(192, 34, 50, 50), c1 = [[18, 110], [118, 110], [118, 116], [24, 116], [24, 150], [18, 150]], d = rect(142, 104, 100, 50), dIn = rect(152, 114, 80, 30);
  return dib("Rayado normalizado: líneas finas a 45°, paralelas y equidistantes; piezas contiguas con distinta inclinación o separación; espesores muy finos ennegrecidos; superficies grandes rayadas solo junto al contorno", `${rayar([a])}${cont(a)}${rayar([b1])}${rayar([b2], 135, 3.5, "var(--red)")}${cont(b1)}${cont(b2)}${poli(c1, "var(--ink)", 1.2, "var(--ink)", 1)}${rayar([d, dIn])}${cont(d)}` + T(68, 98, "45°, separación uniforme", "var(--ink)", "middle", 9.5) + T(192, 98, "piezas contiguas", "var(--ink)", "middle", 9.5) + T(68, 168, "espesor fino: negro", "var(--ink)", "middle", 9.5) + T(192, 168, "área grande: contorno", "var(--ink)", "middle", 9.5));
})();

// 13.12 Roturas.
const s12 = (() => {
  const plana = `${cont([[20, 40], [96, 40]], 2.2)}${V([20, 40], [96, 40])}${V([20, 66], [96, 66])}${V([20, 40], [20, 66])}${V([116, 40], [166, 40])}${V([116, 66], [166, 66])}${V([166, 40], [166, 66])}${curvaP(onda([96, 40], [96, 66], 2, 2))}${curvaP(onda([116, 40], [116, 66], 2, 2))}`;
  const S = (x, y0, y1, s) => `<path d="M${x} ${y0} C ${x + 10 * s} ${y0 + 8}, ${x - 10 * s} ${y1 - 8}, ${x} ${y1}" fill="none" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x} ${y0} C ${x + 4 * s} ${(y0 + y1) / 2 - 4}, ${x + 4 * s} ${(y0 + y1) / 2}, ${x} ${(y0 + y1) / 2}" fill="var(--ink)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1"/>`;
  const eje = `${V([20, 92], [96, 92])}${V([20, 122], [96, 122])}${V([20, 92], [20, 122])}${V([116, 92], [166, 92])}${V([116, 122], [166, 122])}${V([166, 92], [166, 122])}${S(96, 92, 122, 1)}${S(116, 92, 122, -1)}${E([12, 107], [168, 107])}`;
  const zig = `${V([20, 146], [166, 146])}${V([20, 160], [166, 160])}${V([20, 146], [20, 160])}${V([166, 146], [166, 160])}${curvaP([[106, 138], [106, 150], [100, 153], [112, 157], [106, 160], [106, 168]], "var(--ink)", 1)}`;
  const cota = `${fino([20, 26], [166, 26])}${flecha([60, 26], [-1, 0], 40)}${flecha([126, 26], [1, 0], 40)}${fino([20, 22], [20, 38])}${fino([166, 22], [166, 38])}${T(93, 22, "1200", "var(--ink)", "middle", 10)}`;
  return dib("Roturas convencionales para acortar piezas largas: línea fina a mano alzada en barras planas, rotura en S en ejes y tubos, y línea en zigzag en chapas finas; la cota indica siempre la longitud real", `${cota}${plana}${eje}${zig}` + T(250, 56, "a mano alzada", "var(--ink)", "end", 10) + T(250, 112, "en S (redondos)", "var(--ink)", "end", 10) + T(250, 156, "en zigzag", "var(--ink)", "end", 10));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Vistas, cortes, secciones y roturas",
  minutos: 100,
  objetivos: [
    "Elegir y disponer las vistas de una pieza en el sistema europeo según la norma",
    "Representar vistas particulares y auxiliares de caras inclinadas",
    "Aplicar cortes totales, medios cortes, parciales, quebrados y girados",
    "Distinguir cortes de secciones y dibujar secciones abatidas y desplazadas",
    "Rayar correctamente las superficies cortadas y saber qué elementos no se cortan",
    "Usar roturas convencionales en piezas largas",
  ],
  claves: ["vistas normalizadas", "sistema europeo", "vista auxiliar", "vista particular", "corte", "sección", "plano de corte", "medio corte", "corte parcial", "corte quebrado", "corte girado", "rayado", "rotura", "UNE-EN ISO 128"],
  lectura: {
    titulo: "Ver por dentro sin romper nada",
    html: `<p>Una válvula, un motor o un grifo tienen la mayor parte de su complejidad <b>por dentro</b>. Si se dibujaran solo sus vistas exteriores, el plano se llenaría de líneas discontinuas superpuestas imposibles de leer.</p>
    <p>La solución que la ingeniería adoptó en el siglo XIX, y que hoy recoge la norma <b>UNE-EN ISO 128</b>, es imaginar que la pieza se corta con un plano, retirar mentalmente la parte que estorba y dibujar lo que queda. Las superficies que ha tocado el plano se rayan para que el ojo las reconozca al instante.</p>
    <p>Es lo mismo que hace un escáner médico, que muestra el cuerpo en «cortes», o una maqueta de arquitectura seccionada. Saber leer y dibujar cortes es lo que permite entender cómo funciona una máquina sin desmontarla.</p>`,
  },
  pregunta: {
    texto: "Si cortas un tornillo por la mitad a lo largo en un dibujo de conjunto, ¿lo rayas?",
    respuesta: "No. Los elementos macizos como tornillos, ejes, pasadores o chavetas <mark>no se cortan longitudinalmente</mark>, porque su corte no aporta información y complicaría el dibujo. Se dibujan en vista aunque el plano de corte pase por ellos.",
  },
  bloques: [
    {
      html: `<h3>13.1 Las vistas normalizadas</h3><p>La norma <b>UNE-EN ISO 5456-2</b> y la <b>UNE-EN ISO 128-30</b> regulan la representación de piezas por vistas ortogonales. Una pieza puede tener hasta <b>seis vistas</b>, que se obtienen proyectándola sobre las caras de un cubo que la envuelve:</p><ul><li><b>A</b> alzado o vista principal (de frente).</li><li><b>B</b> planta (desde arriba).</li><li><b>C</b> perfil izquierdo (desde la izquierda).</li><li><b>D</b> perfil derecho.</li><li><b>E</b> planta inferior (desde abajo).</li><li><b>F</b> vista posterior.</li></ul><p>En el <b>sistema europeo</b> (método del primer diedro, «E»), usado en España, el objeto está entre el observador y el plano de proyección. Por eso cada vista se coloca en el lado <b>opuesto</b> al que se mira: la planta debajo del alzado y el perfil izquierdo a la derecha. En el <b>sistema americano</b> (tercer diedro, «A») ocurre lo contrario. El método empleado se indica en el cajetín con su símbolo, un cono truncado visto de frente y de lado.</p>`,
      svg: s1,
      video: { id: "HnKSI654rWQ", titulo: "Sistema europeo", canal: "AGritos z", vistas: 263399, busqueda: "sistema europeo vistas" },
    },
    {
      html: `<h3>13.2 Elección de las vistas</h3><p>Se dibujan <b>las vistas mínimas necesarias</b> para definir la pieza sin ambigüedad, normalmente tres o menos. Criterios:</p><ol><li>El <b>alzado</b> debe ser la vista más representativa: la que muestra más forma y menos aristas ocultas, con la pieza en su posición de trabajo o de fabricación.</li><li>Se añaden las vistas que aporten información nueva; si dos vistas son iguales o simétricas, se dibuja solo una.</li><li>Se prefieren vistas con <b>pocas líneas ocultas</b>.</li><li>Las piezas de revolución suelen quedar definidas con una sola vista acotada (con el símbolo Ø).</li></ol><p>Tipos de línea (UNE-EN ISO 128-20): contornos y aristas visibles con línea <b>continua gruesa</b>; aristas ocultas con <b>discontinua fina</b>; ejes y planos de simetría con <b>trazo y punto fino</b>; cotas, rayados y líneas auxiliares con <b>continua fina</b>.</p><p>Si dos líneas coinciden, se dibuja la de mayor prioridad: visible, oculta, plano de corte, eje.</p>`,
      svg: s2,
      video: { id: "pbpwpi5NSZI", titulo: "Vistas o proyecciones ortogonales: sistemas ASA y DIN", canal: "Ingeniería Industrial Easy", vistas: 116464, busqueda: "vistas proyecciones ortogonales europeo americano" },
    },
    {
      html: `<h3>13.3 Vistas particulares, auxiliares y de detalle</h3><p>Cuando una pieza tiene caras inclinadas respecto de los planos de proyección, en las vistas principales se ven deformadas. Para mostrarlas en verdadera magnitud se usan:</p><ul><li><b>Vistas auxiliares</b>: se proyecta la cara sobre un plano paralelo a ella. Se indica la dirección de observación con una <b>flecha y una letra</b> mayúscula, y la vista se rotula con esa letra. Es la aplicación directa del cambio de plano del sistema diédrico.</li><li><b>Vistas particulares o parciales</b>: solo se dibuja la parte de la pieza que interesa, limitada por una línea fina a mano alzada o por el eje de simetría.</li><li><b>Vistas de detalle</b>: un elemento pequeño se rodea con una circunferencia fina, se identifica con una letra y se dibuja aparte a mayor escala, por ejemplo «Z (5:1)».</li><li><b>Vistas locales</b> de elementos simétricos, como un chavetero, dibujadas junto a la vista principal.</li></ul><p>Estas vistas evitan dibujar elipses o contornos deformados que no aportan información y que son difíciles de acotar.</p>`,
      svg: s3,
      video: { id: "7dF-NoUlrbo", titulo: "Vistas auxiliares en dibujo técnico", canal: "Profe Juan Hernani", vistas: 179243, busqueda: "vistas auxiliares dibujo técnico" },
    },
    {
      html: `<h3>13.4 Cortes: concepto y corte total</h3><p>Un <b>corte</b> es la representación de una pieza imaginando que se ha cortado con un plano y que se ha retirado la parte situada entre el observador y el plano. Se dibujan las superficies cortadas, que se rayan, y <b>las aristas visibles que quedan detrás</b> del plano.</p><p>El <b>plano de corte</b> se indica en una vista adyacente con:</p><ul><li>Una línea de <b>trazo y punto fina</b>, con <b>trazos gruesos</b> en los extremos y en los cambios de dirección.</li><li><b>Flechas</b> en los extremos que indican la dirección de observación.</li><li><b>Letras mayúsculas</b> junto a las flechas; la vista cortada se rotula «A-A».</li></ul><p>Si el plano coincide con un plano de simetría y la posición del corte es evidente, se puede omitir la indicación.</p><p>En el <b>corte total</b> el plano atraviesa toda la pieza. En la vista cortada, por norma general, <b>no se dibujan aristas ocultas</b>: si hacen falta, es señal de que falta otro corte o vista.</p>`,
      svg: s4,
      video: { id: "2tSWF4VFprQ", titulo: "Dibujo técnico: cortes y secciones", canal: "Matías G. Ottini", vistas: 60055, busqueda: "cortes y secciones dibujo técnico" },
    },
    {
      html: `<h3>13.5 Medio corte</h3><p>En las piezas <b>simétricas</b> se puede dibujar a la vez media vista exterior y medio corte, separados por el <b>eje de simetría</b>, que se dibuja con trazo y punto fino (no con línea gruesa):</p><ul><li>Equivale a cortar la pieza con dos planos perpendiculares que retiran un cuarto de ella.</li><li>En la mitad exterior <b>no se dibujan aristas ocultas</b>: la mitad cortada ya muestra el interior.</li><li>En piezas de eje vertical, el corte se coloca preferentemente a la <b>derecha</b> del eje; en piezas de eje horizontal, <b>debajo</b>.</li><li>Las aristas del interior que coinciden con el eje en la mitad cortada no se dibujan.</li></ul><p>El medio corte es muy útil en casquillos, poleas, bridas y tapas: con una sola vista se muestran el contorno exterior y el interior de la pieza, y se pueden acotar diámetros interiores y exteriores desde el eje.</p>`,
      svg: s5,
      video: { id: "bkgt3AVQw5g", titulo: "Media sección: cortes y secciones", canal: "Profe Juan Hernani", vistas: 24457, busqueda: "medio corte dibujo técnico" },
    },
    {
      html: `<h3>13.6 Corte parcial o local</h3><p>Cuando solo interesa mostrar un detalle interior pequeño (un agujero ciego, un chavetero, un taladro roscado), no merece la pena cortar toda la pieza. Se hace un <b>corte parcial</b>:</p><ul><li>Se corta solo la zona necesaria.</li><li>El límite entre la zona cortada y la vista se dibuja con una <b>línea continua fina a mano alzada</b> (o en zigzag en CAD).</li><li>Esa línea no debe coincidir con aristas ni con ejes.</li><li>No se indica el plano de corte si su posición es evidente.</li></ul><p>En un agujero ciego taladrado se dibuja el fondo cónico con un ángulo de 120° (en la práctica, el ángulo de la broca es de 118°), y la profundidad útil se acota hasta el final de la parte cilíndrica.</p><p>El corte parcial es el más usado en ejes y árboles, que por norma no se cortan longitudinalmente pero pueden tener detalles interiores.</p>`,
      svg: s6,
      video: { id: "yIimU3HIkh4", titulo: "Cortes: cómo cortar una pieza con agujeros pasantes", canal: "ED Dibujo Técnico", vistas: 31175, busqueda: "cortes pieza agujeros dibujo técnico" },
    },
    {
      html: `<h3>13.7 Corte por planos paralelos</h3><p>Si los detalles interiores que interesan no están en un mismo plano, se usa un <b>corte quebrado por planos paralelos</b> (o escalonado):</p><ul><li>El plano de corte se desplaza paralelamente a sí mismo para pasar por cada detalle.</li><li>En la vista indicadora, los cambios de dirección se marcan con <b>trazos gruesos</b> en ángulo.</li><li>En la vista cortada se representa todo como si fuera <b>un único plano</b>: las aristas de los escalones no se dibujan.</li><li>El rayado es continuo, con la misma inclinación y separación en todas las partes.</li></ul><p>Así, con una sola vista cortada, se muestran los tres agujeros de la placa de la figura, aunque estén a distintas distancias del borde.</p>`,
      svg: s7,
    },
    {
      html: `<h3>13.8 Corte por planos concurrentes (corte girado)</h3><p>En piezas con <b>simetría de revolución</b> y elementos repartidos en ángulo (bridas con agujeros a 120°, poleas con nervios), el corte se hace con <b>dos planos que se cortan en el eje</b>:</p><ol><li>Un plano principal paralelo al plano de proyección.</li><li>Un plano oblicuo que pasa por el otro elemento.</li><li>La parte cortada por el plano oblicuo se <b>gira</b> alrededor del eje hasta coincidir con el plano principal, y después se proyecta.</li></ol><p>El resultado muestra los elementos en verdadera magnitud y a su distancia real del eje. En la vista indicadora se dibujan los dos tramos del plano con trazos gruesos en los extremos y en el vértice, y se puede añadir una flecha curva que indique el giro.</p><p>Es un ejemplo claro de que los dibujos normalizados no son siempre «proyecciones estrictas»: priman la claridad y la facilidad de lectura.</p>`,
      svg: s8,
    },
    {
      html: `<h3>13.9 Secciones</h3><p>Una <b>sección</b> representa <b>solo la superficie contenida en el plano de corte</b>, sin lo que hay detrás. Es útil para mostrar el perfil de nervios, brazos, ejes con chaveteros o perfiles laminados. Tipos:</p><ul><li><b>Sección abatida</b> (o en el sitio): se gira 90° sobre la propia vista y se dibuja con <b>línea continua fina</b>, sin indicación. Solo si no dificulta la lectura.</li><li><b>Sección desplazada</b>: se dibuja fuera de la vista, cerca de ella, con contorno grueso. Se indica el plano con letras («D-D») o se coloca sobre la prolongación de la traza del plano.</li><li><b>Secciones sucesivas</b>: varias secciones desplazadas a lo largo de una pieza de forma variable, como un gancho o la biela de un motor.</li></ul><p>Diferencia clave: el <b>corte</b> incluye las aristas que quedan detrás del plano; la <b>sección</b>, no.</p>`,
      svg: s9,
      video: { id: "GchTKKHukKk", titulo: "Secciones y cortes", canal: "Dario Mendoza", vistas: 58443, busqueda: "secciones y cortes" },
    },
    {
      html: `<h3>13.10 Elementos que no se cortan</h3><p>Por convenio, cuando el plano de corte es <b>longitudinal</b> (contiene su eje), <b>no se cortan</b> ni se rayan:</p><ul><li>Elementos macizos de unión y transmisión: <b>tornillos, tuercas, arandelas, pasadores, chavetas, remaches</b> y <b>ejes</b>.</li><li><b>Nervios</b>, brazos y radios de ruedas y poleas: si se rayaran, la pieza parecería maciza.</li><li>Bolas y rodillos de rodamientos, dientes de ruedas dentadas.</li></ul><p>Sí se cortan cuando el plano es <b>transversal</b> a ellos (por ejemplo, una sección de un eje para mostrar su chavetero).</p><p>En los conjuntos, las piezas contiguas cortadas se rayan con <b>inclinaciones opuestas</b> o con distinta separación; una misma pieza conserva el mismo rayado en todas las vistas y zonas.</p><p>Las roscas se representan de forma convencional: en un tornillo, la cresta con línea gruesa y el fondo con línea fina; en un agujero roscado cortado, el rayado llega hasta la cresta.</p>`,
      svg: s10,
      video: { id: "AVFcjaDFyTQ", titulo: "Representación de tornillo y tuerca", canal: "Jorge Centeno", vistas: 65612, busqueda: "representación tornillo y tuerca" },
    },
    {
      html: `<h3>13.11 El rayado normalizado</h3><p>La norma <b>UNE-EN ISO 128-50</b> establece cómo se rayan las superficies cortadas:</p><ul><li>Líneas <b>continuas finas</b>, paralelas y equidistantes, inclinadas preferentemente a <b>45°</b> respecto del contorno principal o de los ejes de simetría.</li><li>La separación depende del tamaño de la superficie, nunca menor de 0,7 mm.</li><li>Piezas contiguas: distinta inclinación (45° y 135°) o distinta separación.</li><li>Una misma pieza: el mismo rayado en todo el dibujo.</li><li>Superficies muy grandes: se puede rayar solo una franja junto al contorno.</li><li>Espesores muy finos (juntas, chapas): se <b>ennegrecen</b>, dejando un pequeño espacio en blanco entre piezas contiguas.</li><li>Las cotas y textos que caen dentro de una zona rayada interrumpen el rayado.</li></ul><p>En arquitectura y construcción se usan rayados distintos para cada material (hormigón, ladrillo, aislante, madera) según la norma UNE-EN ISO 128-50 y las normas sectoriales; en mecánica se usa el rayado general.</p>`,
      svg: s11,
      video: { id: "sTY6p3hC8Ck", titulo: "Una clase rápida sobre corte y sección", canal: "ED Dibujo Técnico", vistas: 82516, busqueda: "corte y sección dibujo técnico" },
    },
    {
      html: `<h3>13.12 Roturas</h3><p>Las piezas largas de sección constante o uniformemente variable (ejes, barras, perfiles, tubos) se pueden <b>acortar</b> suprimiendo una parte central para que quepan en el formato a una escala adecuada. Se representan con <b>roturas</b>:</p><ul><li>Línea continua <b>fina a mano alzada</b> en piezas planas o de cualquier sección.</li><li>Línea fina en <b>zigzag</b> recta, muy usada en CAD y en chapas o madera.</li><li>Rotura en forma de <b>S</b> (o «lazo») en ejes macizos y tubos, con la parte interior sombreada.</li></ul><p>Reglas:</p><ul><li>Los dos tramos se dibujan alineados y próximos.</li><li>La <b>cota</b> indica siempre la <b>longitud real</b>, no la dibujada; la línea de cota no se interrumpe.</li><li>Se pueden combinar con cortes y secciones abatidas en la zona de rotura.</li></ul>`,
      svg: s12,
      video: { id: "A_7o2qlVCwA", titulo: "Cortes, secciones y roturas", canal: "Luis Gamboa", vistas: 15454, busqueda: "cortes secciones roturas" },
    },
  ],
  ejemplos: [
    { enunciado: "Una pieza tiene el alzado y el perfil izquierdo iguales. ¿Cuántas vistas dibujas?", pasos: ["Dos vistas iguales no aportan información nueva.", "Se dibujan alzado y planta, o alzado y perfil si la planta no añade nada."], resultado: "Normalmente dos: alzado y la vista que aporte información." },
    { enunciado: "En el sistema europeo, ¿dónde se coloca la vista desde la derecha (perfil derecho)?", pasos: ["En el primer diedro cada vista va al lado opuesto.", "Se mira desde la derecha y se dibuja a la izquierda del alzado."], resultado: "A la izquierda del alzado." },
    { enunciado: "Una polea tiene cuatro radios. ¿Se rayan en un corte longitudinal por el eje?", pasos: ["Los radios y nervios no se cortan longitudinalmente.", "Se dibujan en vista para no dar la impresión de pieza maciza."], resultado: "No se rayan." },
    { enunciado: "Un eje de 1200 mm se dibuja a escala 1:5 con una rotura que suprime 150 mm del dibujo. ¿Qué cota se pone?", pasos: ["La cota indica la medida real.", "Se escribe 1200 aunque el dibujo mida 90 mm."], resultado: "1200." },
    { enunciado: "Una brida tiene seis agujeros a 60°. ¿Qué corte muestra dos agujeros en verdadera magnitud?", pasos: ["Un plano diametral pasa por dos agujeros opuestos (a 180°).", "Basta un corte total por ese plano; si los agujeros estuvieran a 120°, haría falta un corte girado."], resultado: "Un corte total por dos agujeros opuestos." },
    { enunciado: "Dos chapas y una junta fina de 1 mm aparecen cortadas a escala 1:1. ¿Cómo se representan?", pasos: ["Las chapas con rayados opuestos.", "La junta, por su poco espesor, ennegrecida."], resultado: "Rayados a 45° y 135°; junta en negro." },
  ],
  errores: [
    "Colocar la planta encima del alzado (eso es el sistema americano).",
    "Rayar tornillos, ejes, nervios o chavetas en cortes longitudinales.",
    "Dibujar aristas ocultas en la vista cortada o en la mitad exterior de un medio corte.",
    "Dibujar las aristas de los escalones en un corte por planos paralelos.",
    "Confundir corte y sección: en la sección no se dibuja lo que hay detrás.",
    "Acotar la longitud dibujada en lugar de la real en una pieza con rotura.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Nombra las seis vistas normalizadas y su letra.", sol: "A alzado, B planta, C perfil izquierdo, D perfil derecho, E planta inferior, F posterior." },
    { nivel: "básico", q: "Dibuja el símbolo del sistema europeo.", sol: "Cono truncado: a la izquierda su vista lateral (trapecio) y a la derecha las dos circunferencias." },
    { nivel: "básico", q: "¿Qué tipo de línea se usa para las aristas ocultas? ¿Y para los ejes?", sol: "Discontinua fina; trazo y punto fino." },
    { nivel: "básico", q: "Dibuja las tres vistas de un prisma de 60 × 40 × 30 mm con un agujero pasante vertical de Ø16.", sol: "Alzado y perfil con ocultas del agujero; planta con circunferencia y ejes." },
    { nivel: "básico", q: "Define corte y sección.", sol: "Corte: superficie cortada más lo que hay detrás. Sección: solo la superficie cortada." },
    { nivel: "básico", q: "¿Cómo se indica un plano de corte?", sol: "Trazo y punto fino, trazos gruesos en extremos, flechas y letras." },
    { nivel: "básico", q: "¿A qué inclinación se raya preferentemente?", sol: "A 45°." },
    { nivel: "básico", q: "¿Qué elementos no se cortan longitudinalmente?", sol: "Tornillos, tuercas, arandelas, ejes, pasadores, chavetas, remaches, nervios, radios." },
    { nivel: "básico", q: "Dibuja un medio corte de un cilindro hueco de Ø40/Ø20 y 50 mm de altura.", sol: "Mitad izquierda en vista; mitad derecha rayada entre radios 10 y 20." },
    { nivel: "básico", q: "¿Qué línea limita un corte parcial?", sol: "Continua fina a mano alzada (o en zigzag)." },
    { nivel: "básico", q: "¿Qué cota se pone en una pieza acortada con rotura?", sol: "La longitud real." },
    { nivel: "básico", q: "Dibuja una sección abatida del perfil en T de una viga.", sol: "Contorno en T fino sobre la vista, rayado." },
    { nivel: "medio", q: "Dibuja las vistas mínimas de una escuadra en L con dos agujeros y un nervio.", sol: "Alzado y perfil; el nervio no se raya en cortes longitudinales." },
    { nivel: "medio", q: "Dibuja una vista auxiliar de una cara inclinada a 30° con un agujero circular.", sol: "Proyección perpendicular a la cara; circunferencia en VM; flecha y letra." },
    { nivel: "medio", q: "Haz un corte total de una pieza con un agujero avellanado.", sol: "Rayado del material; avellanado a 90°; aristas posteriores visibles." },
    { nivel: "medio", q: "Haz un corte por planos paralelos de una placa con tres agujeros desalineados.", sol: "Línea quebrada en planta; un solo plano en la vista cortada." },
    { nivel: "medio", q: "Representa una brida con cuatro agujeros a 90° y un corte que muestre dos de ellos.", sol: "Corte total por dos agujeros opuestos." },
    { nivel: "medio", q: "Dibuja un eje con chavetero y una sección desplazada por el chavetero.", sol: "Circunferencia rayada con entalla rectangular; letras de identificación." },
    { nivel: "medio", q: "Dibuja un conjunto de dos chapas unidas con un remache cortado longitudinalmente.", sol: "Chapas con rayados opuestos; remache sin rayar." },
    { nivel: "medio", q: "Dibuja un agujero ciego roscado M10 en corte.", sol: "Diámetro de taladro 8,5 con fondo a 120°; rosca con línea fina; rayado hasta la cresta." },
    { nivel: "medio", q: "Dibuja una vista de detalle de una ranura a escala 5:1.", sol: "Circunferencia fina con letra; detalle aparte rotulado «Z (5:1)»." },
    { nivel: "medio", q: "Representa un tubo de 2 m con una rotura en S a escala 1:10.", sol: "Dos tramos con rotura en S; cota 2000." },
    { nivel: "avanzado", q: "Dibuja una polea de cuatro radios con medio corte.", sol: "Radios sin rayar; llanta y cubo rayados; eje de simetría." },
    { nivel: "avanzado", q: "Haz un corte girado de una brida con tres agujeros a 120° y un nervio.", sol: "Plano por el eje y dos agujeros; rama oblicua girada; nervio sin rayar." },
    { nivel: "avanzado", q: "Dibuja secciones sucesivas de un gancho de grúa.", sol: "Secciones desplazadas a lo largo del eje del gancho, con letras." },
    { nivel: "avanzado", q: "Dibuja una válvula sencilla en corte con cuerpo, vástago, tuerca y junta.", sol: "Cuerpo rayado; vástago y tuerca sin cortar; junta ennegrecida." },
    { nivel: "avanzado", q: "Explica por qué el corte girado no es una proyección estricta.", sol: "La rama oblicua se gira antes de proyectar; prima la claridad sobre la proyección exacta." },
    { nivel: "avanzado", q: "A partir de una pieza real del taller, decide el número de vistas, los cortes y las secciones necesarias.", sol: "Respuesta abierta justificada con los criterios del tema." },
    { nivel: "avanzado", q: "Dibuja en sistema americano las mismas vistas de la pieza en L y compara.", sol: "Planta encima y perfil izquierdo a la izquierda; símbolo A." },
    { nivel: "avanzado", q: "Dibuja un conjunto de rodamiento sobre eje con su alojamiento en corte.", sol: "Alojamiento y aros rayados con distintas inclinaciones; bolas y eje sin rayar." },
  ],
  quiz: reparte([
    { q: "En el sistema europeo la planta se coloca…", o: ["encima del alzado", "debajo del alzado", "a la derecha", "a la izquierda"], a: 1, e: "Primer diedro." },
    { q: "El perfil izquierdo se coloca, en el europeo,…", o: ["a la izquierda", "a la derecha del alzado", "encima", "debajo"], a: 1, e: "Lado opuesto." },
    { q: "La vista principal es…", o: ["la planta", "el alzado", "el perfil", "la posterior"], a: 1, e: "La más representativa." },
    { q: "Aristas ocultas:", o: ["continua gruesa", "discontinua fina", "trazo y punto", "continua fina"], a: 1, e: "ISO 128." },
    { q: "Ejes de simetría:", o: ["discontinua", "trazo y punto fino", "continua gruesa", "zigzag"], a: 1, e: "Convención." },
    { q: "Una vista auxiliar sirve para…", o: ["acotar", "ver una cara inclinada en VM", "cortar", "rayar"], a: 1, e: "Plano paralelo a la cara." },
    { q: "En un corte se dibuja…", o: ["solo la superficie cortada", "la superficie cortada y lo que hay detrás", "solo lo oculto", "la parte retirada"], a: 1, e: "Diferencia con la sección." },
    { q: "La sección muestra…", o: ["todo lo que hay detrás", "solo la superficie del plano", "las ocultas", "el exterior"], a: 1, e: "Definición." },
    { q: "Los extremos del plano de corte se dibujan con…", o: ["trazo fino", "trazo grueso y flechas", "nada", "círculos"], a: 1, e: "Indicación normalizada." },
    { q: "En el medio corte, el límite entre vista y corte es…", o: ["una línea gruesa", "el eje de simetría", "una línea a mano alzada", "una rotura"], a: 1, e: "Trazo y punto." },
    { q: "El corte parcial se limita con…", o: ["eje", "línea fina a mano alzada", "línea gruesa", "flechas"], a: 1, e: "Convención." },
    { q: "En el corte por planos paralelos, los escalones…", o: ["se dibujan gruesos", "no se dibujan", "se rayan", "se acotan"], a: 1, e: "Como un único plano." },
    { q: "El corte girado se usa en piezas…", o: ["prismáticas", "de revolución con elementos en ángulo", "planas", "transparentes"], a: 1, e: "Bridas, poleas." },
    { q: "La sección abatida se dibuja con…", o: ["línea gruesa", "línea fina sobre la vista", "trazo y punto", "discontinua"], a: 1, e: "En el sitio." },
    { q: "¿Se raya un tornillo en un corte longitudinal?", o: ["sí", "no", "solo la cabeza", "solo la rosca"], a: 1, e: "Elemento macizo." },
    { q: "Los nervios en un corte longitudinal…", o: ["se rayan", "no se rayan", "se ennegrecen", "se omiten"], a: 1, e: "Evita aspecto macizo." },
    { q: "Piezas contiguas se rayan…", o: ["igual", "con distinta inclinación o separación", "en negro", "sin rayar"], a: 1, e: "Para distinguirlas." },
    { q: "Espesores muy finos se representan…", o: ["rayados", "ennegrecidos", "discontinuos", "omitidos"], a: 1, e: "Juntas, chapas." },
    { q: "En una pieza con rotura, la cota indica…", o: ["la longitud dibujada", "la longitud real", "la escala", "nada"], a: 1, e: "Siempre real." },
    { q: "Norma de representación de líneas y cortes:", o: ["UNE 1027", "UNE-EN ISO 128", "ISO 9001", "UNE 157001"], a: 1, e: "Principios generales." },
  ]),
  examen: reparte([
    { q: "Vista E en el sistema europeo:", o: ["planta inferior, encima del alzado", "planta, debajo", "perfil, a la derecha", "posterior"], a: 0, e: "Lado opuesto." },
    { q: "Vista posterior F en el europeo se coloca…", o: ["a la derecha del perfil izquierdo", "debajo de la planta", "encima del alzado", "no se dibuja"], a: 0, e: "Convención." },
    { q: "Agujero ciego taladrado: el fondo se dibuja a…", o: ["120°", "90°", "60°", "180°"], a: 0, e: "Ángulo de la broca." },
    { q: "Brida con agujeros a 120°: corte adecuado", o: ["por planos concurrentes", "parcial", "total por un agujero", "ninguno"], a: 0, e: "Corte girado." },
    { q: "Eje con chavetero: para mostrar la profundidad del chavetero", o: ["sección transversal", "corte longitudinal rayado", "vista auxiliar", "rotura"], a: 0, e: "Los ejes no se cortan longitudinalmente." },
    { q: "La separación mínima entre líneas de rayado es…", o: ["0,7 mm", "5 mm", "0,1 mm", "2 mm"], a: 0, e: "ISO 128-50." },
    { q: "Línea que limita una vista particular:", o: ["fina a mano alzada o eje", "gruesa", "discontinua gruesa", "cadena gruesa"], a: 0, e: "Convención." },
    { q: "Prioridad de líneas coincidentes:", o: ["visible > oculta > corte > eje", "eje > visible", "oculta > visible", "cota > visible"], a: 0, e: "Orden normalizado." },
  ]),
  feynman: ["Por qué en el sistema europeo la planta va debajo", "Qué diferencia hay entre corte y sección", "Por qué no se rayan los tornillos ni los nervios", "Cuándo conviene un medio corte", "Cómo se indica un plano de corte"],
  glosario: [
    ["Alzado", "Vista principal de una pieza, de frente."],
    ["Sistema europeo", "Método del primer diedro: cada vista se dibuja en el lado opuesto al de observación."],
    ["Sistema americano", "Método del tercer diedro: cada vista se dibuja en el mismo lado."],
    ["Vista auxiliar", "Proyección sobre un plano paralelo a una cara inclinada."],
    ["Vista de detalle", "Parte de una pieza dibujada aparte a mayor escala."],
    ["Corte", "Representación de la pieza cortada con la superficie de corte y lo que queda detrás."],
    ["Sección", "Representación solo de la superficie contenida en el plano de corte."],
    ["Medio corte", "Media vista y medio corte separados por el eje de simetría."],
    ["Corte parcial", "Corte limitado a una zona, bordeado por línea a mano alzada."],
    ["Corte quebrado", "Corte por varios planos paralelos representado como uno solo."],
    ["Corte girado", "Corte por planos concurrentes con giro de la parte oblicua."],
    ["Sección abatida", "Sección girada sobre la propia vista y dibujada con línea fina."],
    ["Rayado", "Líneas finas paralelas que identifican superficies cortadas."],
    ["Rotura", "Interrupción convencional de una pieza larga para acortarla."],
  ],
  situacion: {
    titulo: "El plano de la pieza rota",
    reto: "En el taller del instituto se ha roto el soporte de un torno de banco y hay que encargar uno nuevo. Debéis preparar el plano de fabricación con las vistas, cortes y secciones necesarias para que un taller externo pueda fabricarlo sin preguntar nada.",
    pasos: [
      "Medid la pieza (o una similar) con calibre y haced un croquis a mano alzada.",
      "Elegid el alzado y el número mínimo de vistas.",
      "Decidid qué cortes, secciones y detalles hacen falta para mostrar el interior.",
      "Dibujad el plano a escala en un formato A3 con línea y rayado normalizados.",
      "Intercambiad los planos con otro grupo: ¿pueden entender la pieza sin verla?",
    ],
    producto: "Un plano A3 de fabricación con vistas, cortes y secciones.",
    evaluacion: [
      "Vistas mínimas y bien colocadas en el sistema europeo.",
      "Cortes y secciones adecuados e indicados.",
      "Tipos de línea y rayados normalizados.",
      "El otro grupo entiende la pieza sin explicaciones.",
    ],
  },
  figura: fig("Vistas, cortes y secciones", "Resumen del tema", [
    ["Vistas", ["sistema europeo", "vistas mínimas", "auxiliares y de detalle", "tipos de línea"], "var(--pen)"],
    ["Cortes", ["total", "medio corte", "parcial", "quebrado y girado"], "var(--red)"],
    ["Secciones", ["abatida", "desplazada", "sucesivas", "solo el plano"], "var(--leaf)"],
    ["Convenios", ["rayado a 45°", "no se cortan tornillos ni nervios", "ennegrecidos", "roturas"], "var(--inf)"],
  ]),
  video: { id: "stMyfUd_S6A", titulo: "Cortes: cómo hacer un corte paso a paso", canal: "ED Dibujo Técnico", vistas: 50197, busqueda: "cómo hacer un corte dibujo técnico" },
  mapa: mapa("VISTAS Y CORTES", "var(--bac)", [
    ["Vistas", "europeo · mínimas · auxiliares", "var(--pen)"],
    ["Cortes", "total · medio · parcial · quebrado", "var(--red)"],
    ["Secciones", "abatida · desplazada", "var(--leaf)"],
    ["Convenios", "rayado · no se cortan · roturas", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Sistema europeo", "Planta debajo, perfil izquierdo a la derecha."],
    ["Alzado", "La vista más representativa."],
    ["Ocultas", "Discontinua fina."],
    ["Ejes", "Trazo y punto fino."],
    ["Vista auxiliar", "Cara inclinada en VM: flecha y letra."],
    ["Corte", "Superficie cortada + lo de detrás."],
    ["Sección", "Solo la superficie cortada."],
    ["Medio corte", "Separado por el eje."],
    ["Corte quebrado", "Escalones sin dibujar."],
    ["Corte girado", "Rama oblicua girada al plano."],
    ["No se cortan", "Tornillos, ejes, nervios, chavetas."],
    ["Rotura", "Cota con la longitud real."],
  ],
  familias: ["Cortad por la mitad una fruta o una verdura y dibujad su sección.", "Buscad en casa un objeto con interior (un grifo, un bolígrafo) y pensad qué corte lo explicaría mejor.", "Mirad un manual de montaje y buscad vistas en corte o despieces.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Normalización y documentación gráfica de proyectos: vistas normalizadas, vistas particulares y auxiliares, cortes, secciones y roturas; convencionalismos de representación (RD 243/2022, Dibujo Técnico II, saberes básicos C. Normalización y documentación gráfica de proyectos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Cortar con una sierra piezas de poliestireno o jabón para comprobar los cortes.", "Llevar al aula piezas mecánicas reales y decidir en grupo las vistas y cortes.", "Relación con Tecnología e Ingeniería: planos de fabricación de proyectos del taller.", "Comparar un corte dibujado a mano con la vista de sección de un programa de CAD."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "UNE-EN ISO 128 (principios generales de representación), Asociación Española de Normalización", url: "https://www.une.org" },
    { t: "Corte (dibujo), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Corte_(dibujo)" },
  ],
  revisado: "2026-11-21",
};
