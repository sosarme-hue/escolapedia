// Dibujo Técnico II 2º Bachillerato · Tema 14. Nivel libro. Documentación gráfica de proyectos, normas de presentación y CAD.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, add, sub, mul, unit, tx, P2, circ, ejeL, oculta, envolvente, polVista, vistaAxo, dash } = G;

const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));
const T = (x, y, s, c = "var(--ink)", a = "middle", sz = 10.5, b = 1) => tx(x, y, s, { s: sz, b, a, c });
const V = (A, B, w = 2.2) => seg(A, B, "var(--ink)", w);
const E = (A, B) => seg(A, B, "var(--red)", 0.9, ejeL);
const fino = (A, B, c = "var(--ink)", w = 0.9) => seg(A, B, c, w);
const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
const caja = (x, y, w, h, c = "var(--pen)", op = 0.1, sw = 1.8) => poli(rect(x, y, w, h), c, sw, c, op);
const flecha = (P, dir, l = 13, c = "var(--ink)", w = 1.4) => { const u = unit([0, 0], dir), Q = add(P, mul(u, l)), nn = [-u[1], u[0]], a = add(Q, mul(u, -6)); return `${seg(P, Q, c, w)}<path d="M${P2(Q)} L ${P2(add(a, mul(nn, 3)))} L ${P2(add(a, mul(nn, -3)))} Z" fill="${c}"/>`; };
const punta = (P, dir, c = "var(--ink)") => { const u = unit([0, 0], dir), nn = [-u[1], u[0]], a = add(P, mul(u, -6)); return `<path d="M${P2(P)} L ${P2(add(a, mul(nn, 2.4)))} L ${P2(add(a, mul(nn, -2.4)))} Z" fill="${c}"/>`; };
// Cota horizontal y vertical normalizadas: líneas auxiliares, línea de cota con flechas y cifra encima.
const cotaH = (x1, x2, y, y0, txt, c = "var(--ink)") => `${fino([x1, y0], [x1, y + (y > y0 ? 3 : -3)], c)}${fino([x2, y0], [x2, y + (y > y0 ? 3 : -3)], c)}${fino([x1, y], [x2, y], c)}${punta([x1, y], [-1, 0], c)}${punta([x2, y], [1, 0], c)}${T((x1 + x2) / 2, y - 3, txt, c, "middle", 9.5)}`;
const cotaV = (y1, y2, x, x0, txt, c = "var(--ink)") => `${fino([x0, y1], [x + (x > x0 ? 3 : -3), y1], c)}${fino([x0, y2], [x + (x > x0 ? 3 : -3), y2], c)}${fino([x, y1], [x, y2], c)}${punta([x, y1], [0, -1], c)}${punta([x, y2], [0, 1], c)}<text x="${x - 3}" y="${(y1 + y2) / 2}" font-size="9.5" font-weight="700" fill="${c}" text-anchor="middle" transform="rotate(-90 ${x - 3} ${(y1 + y2) / 2})" font-family="Atkinson Hyperlegible, sans-serif">${txt}</text>`;
let nh = 0;
const rayar = (polys, ang = 45, gap = 5, c = "var(--pen)", w = 0.9) => {
  const id = `r14_${nh++}`, all = polys.flat(), xs = all.map((p) => p[0]), ys = all.map((p) => p[1]), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2, R = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) / 2 + 2;
  const a = (ang * Math.PI) / 180, d = [Math.cos(a), -Math.sin(a)], n = [Math.sin(a), Math.cos(a)], k = Math.ceil(R / gap);
  const lineas = rango(2 * k + 1, (i) => { const t = (i - k) * gap, P = [cx + n[0] * t, cy + n[1] * t]; return `M${P2(sub(P, mul(d, R)))} L ${P2(add(P, mul(d, R)))}`; }).join(" ");
  return `<defs><clipPath id="${id}"><path clip-rule="evenodd" d="${polys.map((p) => `M${p.map(P2).join(" L ")} Z`).join(" ")}"/></clipPath></defs><path d="${lineas}" stroke="${c}" stroke-width="${w}" clip-path="url(#${id})"/>`;
};

// 14.1 Documentos de un proyecto.
const s1 = (() => {
  const cx = 130, cy = 96, b = (x, y, t1, t2, c) => `${poli(rect(x - 52, y - 17, 104, 34), c, 0.1, "var(--card)", 1)}${caja(x - 52, y - 17, 104, 34, c, 0.12)}${T(x, y - 2, t1, c, "middle", 11)}${T(x, y + 11, t2, "var(--ink)", "middle", 8.5, 0)}`;
  const items = [[70, 44, "Memoria", "qué y por qué", "var(--pen)"], [190, 44, "Planos", "cómo es y dónde va", "var(--red)"], [70, 148, "Pliego", "condiciones técnicas", "var(--leaf)"], [190, 148, "Presupuesto", "mediciones y precios", "var(--inf)"]];
  return dib("Documentos de un proyecto técnico: la memoria explica y justifica la solución, los planos la definen gráficamente, el pliego de condiciones fija calidades y ejecución y el presupuesto valora el coste; los planos son el documento que manda en lo geométrico", `${items.map(([x, y]) => fino([cx, cy], [x, y], "var(--muted)", 1.2)).join("")}${poli(rect(cx - 36, cy - 14, 72, 28), "var(--ink)", 2, "var(--card)", 1)}${T(cx, cy + 4, "PROYECTO", "var(--ink)", "middle", 11)}${items.map((i) => b(...i)).join("")}`);
})();

// 14.2 Tipos de planos.
const s2 = (() => {
  const top = [130, 34], tipos = [["situación", "emplazamiento"], ["conjunto", "montaje"], ["despiece", "fabricación"], ["instalaciones", "esquemas"]], xs = [34, 98, 162, 226], cols = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)"];
  const esc = ["1:2000 – 1:500", "1:1 – 1:10", "1:1 – 5:1", "1:50 – 1:100"];
  return dib("Tipos de planos de un proyecto, de lo general a lo particular: planos de situación y emplazamiento, de conjunto o montaje, de despiece o fabricación y de instalaciones, cada uno con escalas habituales distintas", `${caja(top[0] - 62, top[1] - 14, 124, 26, "var(--ink)", 0.06)}${T(top[0], top[1] + 4, "planos del proyecto", "var(--ink)", "middle", 10.5)}${xs.map((x, i) => `${fino([top[0], top[1] + 12], [x, 76], "var(--muted)", 1.2)}${caja(x - 31, 76, 62, 40, cols[i], 0.12)}${T(x, 93, tipos[i][0], cols[i], "middle", 8.5)}${T(x, 107, tipos[i][1], "var(--ink)", "middle", 7.5, 0)}${T(x, 134, esc[i], "var(--ink)", "middle", 8.5, 0)}`).join("")}` + T(130, 164, "escalas orientativas", "var(--muted)", "middle", 9.5) + fino([20, 122], [240, 122], "var(--muted)", 0.6));
})();

// 14.3 Formatos de la serie A.
const s3 = (() => {
  const k = 0.14, x0 = 16, y0 = 30, W = 1189 * k, H = 841 * k, A1 = rect(x0, y0, W / 2, H), A2 = rect(x0 + W / 2, y0, W / 2, H / 2), A3 = rect(x0 + W / 2, y0 + H / 2, W / 4, H / 2), A4 = rect(x0 + (3 * W) / 4, y0 + H / 2, W / 4, H / 4), A5 = rect(x0 + (3 * W) / 4, y0 + (3 * H) / 4, W / 4, H / 4);
  const lab = (r, t, c) => T((r[0][0] + r[2][0]) / 2, (r[0][1] + r[2][1]) / 2 + 4, t, c, "middle", 11);
  return dib("Formatos de la serie A (UNE-EN ISO 5457 e ISO 216): el A0 mide un metro cuadrado y cada formato se obtiene dividiendo el anterior por la mitad del lado mayor; todos son semejantes, con lados en la razón √2", `${poli(A1, "var(--pen)", 1.8, "var(--pen)", 0.08)}${poli(A2, "var(--leaf)", 1.8, "var(--leaf)", 0.1)}${poli(A3, "var(--red)", 1.8, "var(--red)", 0.12)}${poli(A4, "var(--inf)", 1.8, "var(--inf)", 0.16)}${poli(A5, "var(--muted)", 1.4, "var(--muted)", 0.1)}${lab(A1, "A1", "var(--pen)")}${lab(A2, "A2", "var(--leaf)")}${lab(A3, "A3", "var(--red)")}${lab(A4, "A4", "var(--inf)")}${T(x0 + W / 2, y0 - 6, "A0 = 841 × 1189 mm = 1 m²", "var(--ink)", "middle", 10)}` + [["A1  594 × 841", 60], ["A2  420 × 594", 80], ["A3  297 × 420", 100], ["A4  210 × 297", 120], ["lados: 1 : √2", 150]].map(([t, y]) => T(250, y, t, "var(--ink)", "end", 9.5)).join(""));
})();

// 14.4 Recuadro, márgenes y bloque de títulos.
const s4 = (() => {
  const x0 = 14, y0 = 18, W = 210, H = 148.5, f = rect(x0 + 10, y0 + 5, W - 15, H - 10), cx = x0 + W - 5 - 90, cy = y0 + H - 5 - 28;
  const marcas = [[x0 + W / 2, y0, 0, 1], [x0 + W / 2, y0 + H, 0, -1], [x0, y0 + H / 2, 1, 0], [x0 + W, y0 + H / 2, -1, 0]].map(([x, y, dx, dy]) => V([x, y], [x + dx * 9, y + dy * 9], 2.4)).join("");
  const celdas = `${poli(rect(cx, cy, 90, 28), "var(--red)", 1.8, "var(--red)", 0.08)}${fino([cx, cy + 10], [cx + 90, cy + 10])}${fino([cx, cy + 19], [cx + 90, cy + 19])}${fino([cx + 50, cy + 10], [cx + 50, cy + 28])}${fino([cx + 70, cy + 19], [cx + 70, cy + 28])}${T(cx + 45, cy + 7.5, "título del plano", "var(--red)", "middle", 7.5)}${T(cx + 25, cy + 16.5, "autor, fecha", "var(--ink)", "middle", 6.5, 0)}${T(cx + 70, cy + 16.5, "nº plano", "var(--ink)", "middle", 6.5, 0)}${T(cx + 25, cy + 25.5, "centro", "var(--ink)", "middle", 6.5, 0)}${T(cx + 60, cy + 25.5, "1:2", "var(--ink)", "middle", 7, 0)}${T(cx + 80, cy + 25.5, "E", "var(--ink)", "middle", 7, 0)}`;
  return dib("Lámina A3 normalizada: borde del papel, recuadro con margen mayor a la izquierda para archivar, marcas de centrado en el centro de cada lado y bloque de títulos (cajetín) en la esquina inferior derecha", `${poli(rect(x0, y0, W, H), "var(--muted)", 1, "var(--card)", 1)}${poli(f, "var(--ink)", 2, "none")}${marcas}${celdas}${fino([x0, y0 + 40], [x0 + 10, y0 + 40], "var(--pen)")}${punta([x0, y0 + 40], [-1, 0], "var(--pen)")}${punta([x0 + 10, y0 + 40], [1, 0], "var(--pen)")}` + T(x0 + 14, y0 + 30, "20 mm", "var(--pen)", "start", 9) + T(x0 + 70, y0 + 64, "recuadro: 10 mm", "var(--ink)", "middle", 9.5, 0) + T(x0 + 70, y0 + 80, "marcas de centrado", "var(--ink)", "middle", 9.5, 0) + T(250, 176, "cajetín ISO 7200", "var(--red)", "end", 10));
})();

// 14.5 Plegado de planos.
const s5 = (() => {
  const k = 0.36, x0 = 12, y0 = 40, W = 420 * k, H = 297 * k, f1 = x0 + W - 210 * k, f2 = x0 + (W - 210 * k) / 2 + 10 * k;
  const a4 = rect(196, 52, 210 * k * 0.72, 297 * k * 0.72);
  return dib("Plegado de un plano A3 a formato A4: primero se pliega en vertical dejando a la derecha un panel de 210 mm con el cajetín, y después la parte izquierda se dobla hacia atrás; el cajetín queda siempre visible en la cara delantera", `${poli(rect(x0, y0, W, H), "var(--ink)", 1.8, "var(--card)", 1)}${seg([f1, y0 - 6], [f1, y0 + H + 6], "var(--red)", 1.6, 'stroke-dasharray="6 3"')}${seg([f2, y0 - 6], [f2, y0 + H + 6], "var(--pen)", 1.6, 'stroke-dasharray="6 3"')}${poli(rect(x0 + W - 62, y0 + H - 18, 58, 14), "var(--red)", 1.4, "var(--red)", 0.15)}${T(f1, y0 - 10, "1.º", "var(--red)", "middle", 10)}${T(f2, y0 - 10, "2.º", "var(--pen)", "middle", 10)}${flecha([170, 92], [1, 0], 18, "var(--ink)")}${poli(a4, "var(--ink)", 1.8, "var(--card)", 1)}${poli(rect(a4[2][0] - 40, a4[2][1] - 12, 38, 10), "var(--red)", 1.2, "var(--red)", 0.15)}` + T(85, 160, "A3 · 420 × 297", "var(--ink)", "middle", 10) + T(219, 152, "A4 con cajetín", "var(--red)", "middle", 10));
})();

// 14.6 Escalas normalizadas y escala gráfica.
const s6 = (() => {
  const x0 = 52, y = 58, u = 32, talon = rango(5, (i) => (i % 2 ? poli(rect(x0 - u + (i * u) / 5, y, u / 5, 7), "var(--ink)", 0.8, "var(--ink)", 1) : poli(rect(x0 - u + (i * u) / 5, y, u / 5, 7), "var(--ink)", 0.8, "none"))).join("");
  const tramos = rango(5, (i) => poli(rect(x0 + i * u, y, u, 7), "var(--ink)", 0.8, i % 2 ? "none" : "var(--ink)", 1)).join("");
  const nums = [-1, 0, 1, 2, 3, 4, 5].map((n, i) => T(x0 + n * u, y - 5, n < 0 ? "1" : String(n), "var(--ink)", "middle", 9.5, 0)).join("");
  const tabla = [["reducción", "1:2 · 1:5 · 1:10 · 1:20 · 1:50 · 1:100…", "var(--pen)"], ["natural", "1:1", "var(--leaf)"], ["ampliación", "2:1 · 5:1 · 10:1 · 20:1 · 50:1", "var(--red)"]].map(([a, b, c], i) => `${T(14, 110 + i * 22, a, c, "start", 10.5)}${T(92, 110 + i * 22, b, "var(--ink)", "start", 9.5, 0)}`).join("");
  return dib("Escalas normalizadas (UNE-EN ISO 5455): de reducción, natural y de ampliación, con los valores 1, 2 y 5 multiplicados por potencias de 10; la escala gráfica, con su talón subdividido, sigue siendo válida aunque el plano se amplíe o se reduzca al imprimir", `${talon}${tramos}${nums}${T(x0 + 5.5 * u, y + 6, "m", "var(--ink)", "start", 9.5)}${T(130, 86, "escala gráfica 1:100 (talón a la izquierda)", "var(--ink)", "middle", 9.5, 0)}${tabla}` + T(130, 22, "E = dibujo : realidad", "var(--red)", "middle", 11));
})();

// 14.7 Plano de conjunto y lista de piezas.
const s7 = (() => {
  const base = rect(20, 112, 120, 16), sop = [[60, 112], [60, 52], [100, 52], [100, 112]], ag = rect(74, 64, 12, 30), pas = rect(40, 74, 80, 10);
  const globo = (P, Q, n) => `${fino(P, Q, "var(--ink)", 0.9)}<circle cx="${P[0]}" cy="${P[1]}" r="1.8" fill="var(--ink)"/><circle cx="${Q[0]}" cy="${Q[1]}" r="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/>${T(Q[0], Q[1] + 3.5, String(n), "var(--red)", "middle", 9.5)}`;
  const tx0 = 136, filas = [["4", "Pasador Ø10", "1", "Acero"], ["3", "Arandela", "2", "Acero"], ["2", "Soporte", "1", "Fund."], ["1", "Base", "1", "Acero"]], hd = ["Marca", "Denominación", "Cant.", "Material"], cw = [22, 48, 14, 30], cx = cw.map((_, i) => tx0 + cw.slice(0, i).reduce((a, b) => a + b, 0));
  const fila = (r, y, b) => r.map((t, i) => T(cx[i] + cw[i] / 2, y, t, b ? "var(--red)" : "var(--ink)", "middle", b ? 6.5 : 7, b)).join("");
  const tabla = `${poli(rect(tx0, 60, 114, 84), "var(--ink)", 1.4, "none")}${rango(4, (i) => fino([tx0, 60 + (i + 1) * 16.8], [tx0 + 114, 60 + (i + 1) * 16.8])).join("")}${cx.slice(1).map((x) => fino([x, 60], [x, 144])).join("")}${filas.map((r, i) => fila(r, 72 + i * 16.8, 0)).join("")}${fila(hd, 72 + 4 * 16.8, 1)}`;
  return dib("Plano de conjunto con marcas de referencia (UNE-EN ISO 6433): cada pieza se señala con un número dentro de un círculo unido a ella por una línea de referencia; la lista de piezas, encima del cajetín, recoge marca, denominación, cantidad y material", `${rayar([base])}${poli(base, "var(--ink)", 2, "none")}${rayar([sop, ag], 135, 5, "var(--red)")}${poli(sop, "var(--ink)", 2, "none")}${poli(pas, "var(--ink)", 2, "var(--card)", 1)}${poli(rect(46, 70, 6, 18), "var(--ink)", 1.4, "var(--card)", 1)}${poli(rect(108, 70, 6, 18), "var(--ink)", 1.4, "var(--card)", 1)}${E([34, 79], [126, 79])}${globo([30, 120], [16, 98], 1)}${globo([94, 104], [122, 96], 2)}${globo([49, 72], [30, 44], 3)}${globo([80, 79], [80, 32], 4)}${tabla}` + T(193, 160, "lista de piezas", "var(--ink)", "middle", 10));
})();

// 14.8 Plano de fabricación: cotas, tolerancias y acabados.
const s8 = (() => {
  const k = 1.5, cy = 84, x0 = 40, L1 = 25 * k, L2 = 60 * k, r1 = 20 * k, r2 = 10 * k, ch = 1.5 * k;
  const perfil = [[x0, cy - r1], [x0 + L1, cy - r1], [x0 + L1, cy - r2], [x0 + L1 + L2 - ch, cy - r2], [x0 + L1 + L2, cy - r2 + ch], [x0 + L1 + L2, cy + r2 - ch], [x0 + L1 + L2 - ch, cy + r2], [x0 + L1, cy + r2], [x0 + L1, cy + r1], [x0, cy + r1]];
  const rug = (P) => `<path d="M${P[0] - 5} ${P[1] - 5} L ${P[0]} ${P[1]} L ${P[0] + 10} ${P[1] - 16} L ${P[0] + 26} ${P[1] - 16}" fill="none" stroke="var(--red)" stroke-width="1.2"/>${T(P[0] + 17, P[1] - 19, "Ra 0,8", "var(--red)", "middle", 8.5)}`;
  return dib("Plano de fabricación de un eje escalonado: cotas funcionales, diámetro con tolerancia ISO (Ø20 h6), indicación de rugosidad en la superficie de ajuste y chaflán; con esto el taller puede fabricar y verificar la pieza", `${poli(perfil, "var(--ink)", 2.2, "none")}${V([x0 + L1 + L2 - ch, cy - r2], [x0 + L1 + L2 - ch, cy + r2], 1)}${E([x0 - 8, cy], [x0 + L1 + L2 + 10, cy])}${cotaH(x0, x0 + L1, 146, cy + r1, "25")}${cotaH(x0, x0 + L1 + L2, 162, cy + r1, "85")}${cotaV(cy - r1, cy + r1, 22, x0, "Ø40")}${cotaV(cy - r2, cy + r2, 196, x0 + L1 + L2, "Ø20 h6", "var(--red)")}${rug([x0 + L1 + 34, cy - r2])}${fino([x0 + L1 + L2 - 1, cy - r2 + 1], [x0 + L1 + L2 + 14, cy - r2 - 18])}${T(x0 + L1 + L2 + 16, cy - r2 - 21, "1 × 45°", "var(--ink)", "start", 9)}` + T(250, 172, "cotas funcionales", "var(--ink)", "end", 9.5, 0));
})();

// 14.9 Tolerancias y ajustes.
const s9 = (() => {
  const y0 = 100, col = (x, ag, ej, nom) => `${rayar([rect(x - 26, y0 - ag[1], 24, ag[1] - ag[0])], 45, 4, "var(--red)")}${poli(rect(x - 26, y0 - ag[1], 24, ag[1] - ag[0]), "var(--red)", 1.6, "none")}${rayar([rect(x + 2, y0 - ej[1], 24, ej[1] - ej[0])], 135, 4, "var(--pen)")}${poli(rect(x + 2, y0 - ej[1], 24, ej[1] - ej[0]), "var(--pen)", 1.6, "none")}${T(x, 150, nom, "var(--ink)", "middle", 10)}`;
  return dib("Posición de las zonas de tolerancia del agujero (rojo) y del eje (azul) respecto de la línea cero, que corresponde a la medida nominal: ajuste con juego, ajuste indeterminado y ajuste con apriete", `${seg([10, y0], [250, y0], "var(--ink)", 1.6)}${col(48, [0, 30], [-36, -8], "con juego")}${col(130, [0, 30], [-10, 22], "indeterminado")}${col(212, [0, 30], [38, 60], "con apriete")}${T(14, y0 - 4, "0", "var(--ink)", "start", 9.5)}` + T(10, 22, "agujero H", "var(--red)", "start") + T(250, 22, "eje", "var(--pen)", "end") + T(130, 170, "línea cero = medida nominal", "var(--ink)", "middle", 9.5, 0));
})();

// 14.10 Plano de arquitectura.
const s10 = (() => {
  const x0 = 30, y0 = 34, W = 170, H = 110, e = 5, ext = rect(x0, y0, W, H), int = rect(x0 + e, y0 + e, W - 2 * e, H - 2 * e);
  const tabX = x0 + 100, tabY = y0 + 60;
  const puerta = (P, r, a0, a1) => { const a = (Math.PI * a0) / 180, b = (Math.PI * a1) / 180; return `${seg(P, [P[0] + r * Math.cos(b), P[1] - r * Math.sin(b)], "var(--ink)", 1.4)}<path d="M${P[0] + r * Math.cos(a)} ${P[1] - r * Math.sin(a)} A ${r} ${r} 0 0 0 ${P[0] + r * Math.cos(b)} ${P[1] - r * Math.sin(b)}" fill="none" stroke="var(--ink)" stroke-width="0.8"/>`; };
  const muros = `<path d="M${ext.map(P2).join(" L ")} Z M${int.map(P2).join(" L ")} Z" fill="var(--ink)" fill-rule="evenodd"/>${poli(rect(tabX, y0 + e, 3, 40), "var(--ink)", 0.6, "var(--ink)", 1)}${poli(rect(tabX, y0 + 62, 3, H - 62 - e), "var(--ink)", 0.6, "var(--ink)", 1)}${poli(rect(tabX + 3, tabY - 2, W - 100 - 3 - e, 3), "var(--ink)", 0.6, "var(--ink)", 1)}`;
  const ventana = (x1, x2, y) => `${poli([[x1, y], [x2, y], [x2, y + e], [x1, y + e]], "var(--ink)", 0.8, "var(--card)", 1)}${fino([x1, y + e / 2], [x2, y + e / 2])}`;
  return dib("Plano de planta de una vivienda a escala 1:100: los muros cortados se dibujan con trazo grueso o rellenos, las puertas con su arco de giro, las ventanas con líneas finas en el hueco del muro, y se acotan las medidas generales y se rotulan las estancias", `${muros}${ventana(x0 + 25, x0 + 70, y0)}${ventana(x0 + 125, x0 + 155, y0)}${ventana(x0 + 40, x0 + 80, y0 + H - e)}${poli(rect(x0 + 140, y0 + H - e, 22, e), "var(--card)", 0.1, "var(--card)", 1)}${puerta([x0 + 140, y0 + H - e / 2], 22, 0, 90)}${poli(rect(tabX, y0 + 45, 3, 17), "var(--card)", 0.1, "var(--card)", 1)}${puerta([tabX + 1.5, y0 + 45], 17, 0, -90)}${T(x0 + 50, y0 + 62, "salón-cocina", "var(--ink)", "middle", 10)}${T(x0 + 135, y0 + 32, "dormitorio", "var(--ink)", "middle", 9.5)}${T(x0 + 135, y0 + 92, "baño", "var(--ink)", "middle", 9.5)}${cotaH(x0, x0 + W, 162, y0 + H, "8,50")}${cotaV(y0, y0 + H, 222, x0 + W, "5,50")}${flecha([238, 52], [0, -1], 22, "var(--red)", 1.6)}${T(238, 24, "N", "var(--red)", "middle", 11)}` + T(10, 22, "E 1:100 · cotas en m", "var(--ink)", "start", 9.5));
})();

// 14.11 CAD 2D: sistemas de coordenadas y capas.
const s11 = (() => {
  const O = [24, 152], k = 1.5, S = (p) => [O[0] + p[0] * k, O[1] - p[1] * k], A = [20, 20], B = [80, 20], C = [80 + 40 * Math.cos(Math.PI / 3), 20 + 40 * Math.sin(Math.PI / 3)];
  const rej = rango(6, (i) => `${fino(S([i * 20, 0]), S([i * 20, 84]), "var(--muted)", 0.4)}`).join("") + rango(5, (j) => fino(S([0, j * 20]), S([100, j * 20]), "var(--muted)", 0.4)).join("");
  const capas = [["Contornos", "var(--ink)", 2.2, ""], ["Ejes", "var(--red)", 1, ejeL], ["Cotas", "var(--pen)", 1, ""], ["Ocultas", "var(--ink)", 1, oculta]].map(([n, c, w, ex], i) => `${seg([184, 102 + i * 18], [204, 102 + i * 18], c, w, ex)}${T(208, 106 + i * 18, n, c, "start", 9.5)}`).join("");
  return dib("Introducción de puntos en un programa de CAD 2D: coordenadas absolutas (20,20), relativas cartesianas @60,0 y relativas polares @40<60; las capas agrupan las entidades por tipo de línea, color y grosor", `${rej}${flecha(O, [1, 0], 160, "var(--muted)", 1)}${flecha(O, [0, -1], 136, "var(--muted)", 1)}${seg(S(A), S(B), "var(--red)", 2.4)}${seg(S(B), S(C), "var(--pen)", 2.4)}${pt(S(A), "20,20", -4, 14, "var(--ink)", 9.5)}${pt(S(B), "@60,0", 4, 14, "var(--red)", 9.5)}${pt(S(C), "@40<60", 6, -4, "var(--pen)", 9.5)}${capas}` + T(184, 88, "capas", "var(--ink)", "start", 10.5));
})();

// 14.12 Del modelo 3D al plano: CAD 3D y BIM.
const s12 = (() => {
  const Vw = vistaAxo([46, 70], 0.8, 225, 35.264), pz = envolvente([[0, 0, 0], [40, 0, 0], [40, 50, 0], [0, 50, 0], [0, 0, 30], [40, 0, 30], [40, 26, 30], [0, 26, 30], [0, 50, 12], [40, 50, 12]]);
  const hoja = `${poli(rect(178, 40, 66, 50), "var(--ink)", 1.6, "var(--card)", 1)}${poli(rect(186, 48, 22, 16), "var(--ink)", 1.4, "none")}${poli(rect(186, 68, 22, 14), "var(--ink)", 1.4, "none")}${poli(rect(214, 48, 14, 16), "var(--ink)", 1.4, "none")}${poli(rect(222, 80, 20, 8), "var(--red)", 1, "var(--red)", 0.2)}`;
  const bim = [["3D: forma", "var(--pen)"], ["4D: tiempo", "var(--red)"], ["5D: coste", "var(--inf)"], ["6D-7D: uso", "var(--leaf)"]].map(([t, c], i) => `${caja(14 + i * 60, 128, 54, 24, c, 0.14)}${T(41 + i * 60, 144, t, c, "middle", 9)}`).join("");
  return dib("Del modelo 3D al plano: en CAD 3D la pieza se modela como sólido paramétrico y las vistas, cortes y cotas se generan automáticamente; en la metodología BIM el modelo además lleva información de materiales, plazos y costes compartida por todo el equipo", `${polVista(pz, Vw.P, Vw.w, "var(--pen)", 0.14, 2)}${flecha([96, 66], [1, 0], 26, "var(--ink)")}${T(110, 58, "vistas", "var(--ink)", "middle", 9)}${caja(126, 50, 44, 30, "var(--leaf)", 0.1)}${T(148, 69, "cortes", "var(--leaf)", "middle", 9)}${flecha([170, 66], [1, 0], 8, "var(--ink)")}${hoja}${T(46, 118, "modelo 3D", "var(--pen)", "middle", 10)}${T(211, 104, "plano", "var(--red)", "middle", 10)}${bim}` + T(130, 22, "un solo modelo, todos los planos coherentes", "var(--ink)", "middle", 10) + T(130, 172, "BIM: el modelo es una base de datos", "var(--ink)", "middle", 9.5, 0));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Documentación gráfica de proyectos y CAD",
  minutos: 100,
  objetivos: [
    "Conocer los documentos de un proyecto técnico y el papel de los planos",
    "Distinguir los tipos de planos de un proyecto de ingeniería y de arquitectura",
    "Aplicar las normas de formatos, cajetín, plegado y escalas",
    "Elaborar planos de conjunto con lista de piezas y planos de fabricación",
    "Interpretar tolerancias, ajustes y acabados superficiales",
    "Utilizar herramientas de CAD 2D, modelado 3D y conocer la metodología BIM",
  ],
  claves: ["proyecto", "memoria", "plano de conjunto", "despiece", "lista de piezas", "formato", "cajetín", "plegado", "escala", "tolerancia", "ajuste", "rugosidad", "CAD", "capa", "modelado paramétrico", "BIM"],
  lectura: {
    titulo: "Del tablero a la nube",
    html: `<p>Hasta los años ochenta, los planos se dibujaban a mano en grandes tableros con paralex, escuadras y rotuladores de tinta. Una modificación obligaba a raspar el papel vegetal o a redibujar la lámina entera, y las copias se hacían con amoníaco.</p>
    <p>En 1982 apareció AutoCAD, uno de los primeros programas de dibujo para ordenadores personales, y en pocos años los tableros desaparecieron de las oficinas técnicas. Después llegó el <b>modelado 3D paramétrico</b>: el diseñador ya no dibuja vistas, sino que construye la pieza virtual y el programa genera los planos.</p>
    <p>Hoy, con la metodología <b>BIM</b>, un edificio se proyecta como una base de datos compartida en la nube por arquitectos, ingenieros y constructores. La licitación pública en España ya contempla el uso de BIM en obras del Estado. Pero las reglas de representación (vistas, cortes, cotas, escalas) siguen siendo las mismas que se usaban en el tablero: el plano sigue siendo el idioma común.</p>`,
  },
  pregunta: {
    texto: "Si imprimes un plano a escala 1:50 en un folio más pequeño que el original, ¿puedes seguir midiendo con la regla?",
    respuesta: "Con la regla y la escala numérica, no: el dibujo ha cambiado de tamaño. Pero si el plano lleva una <mark>escala gráfica</mark>, se reduce junto con el dibujo y sigue sirviendo para medir.",
  },
  bloques: [
    {
      html: `<h3>14.1 El proyecto técnico</h3><p>Un <b>proyecto</b> es el conjunto de documentos que definen una obra, una máquina o un producto con el detalle suficiente para que otras personas puedan fabricarlo o construirlo, valorarlo y comprobar que cumple las normas. Consta habitualmente de:</p><ul><li><b>Memoria</b>: describe el objeto, justifica las soluciones adoptadas y contiene los cálculos (en anejos).</li><li><b>Planos</b>: definen gráficamente la forma, las dimensiones, los materiales y la posición de todos los elementos.</li><li><b>Pliego de condiciones</b>: fija las calidades de los materiales, la forma de ejecución, los ensayos y las condiciones administrativas.</li><li><b>Presupuesto</b>: mediciones, precios unitarios y presupuesto total.</li></ul><p>En edificación, el contenido del proyecto lo regulan la <b>Ley 38/1999 de Ordenación de la Edificación</b> y el <b>Código Técnico de la Edificación</b>. En caso de contradicción, la geometría la definen los planos, y las calidades, el pliego.</p>`,
      svg: s1,
    },
    {
      html: `<h3>14.2 Tipos de planos</h3><p>Los planos se organizan de lo general a lo particular:</p><ul><li><b>Situación y emplazamiento</b>: localizan la obra en el municipio y en la parcela, a escalas pequeñas (1:2000 a 1:500).</li><li><b>Conjunto o montaje</b>: muestran el producto completo, con todas sus piezas en posición de funcionamiento, marcadas con números de referencia. Sirven para montar y para entender el funcionamiento.</li><li><b>Despiece o fabricación</b>: un plano por pieza no normalizada, con todas las vistas, cortes, cotas, tolerancias y acabados necesarios para fabricarla.</li><li><b>Instalaciones y esquemas</b>: electricidad, fontanería, climatización, neumática, con símbolos normalizados.</li></ul><p>En arquitectura se añaden plantas de distribución, alzados, secciones, cubiertas, estructura y detalles constructivos. Cada plano tiene un número, un título y una escala, y se relaciona con los demás mediante un <b>índice de planos</b>.</p>`,
      svg: s2,
      video: { id: "WZRdSYR3rs8", titulo: "Conceptos generales de planos: formatos, rótulo, escalas, lista de materiales", canal: "Matías G. Ottini", vistas: 34975, busqueda: "conceptos generales de planos formatos rótulo" },
    },
    {
      html: `<h3>14.3 Formatos</h3><p>Los planos se dibujan en formatos normalizados de la <b>serie A</b> (UNE-EN ISO 5457, basada en ISO 216):</p><ul><li>El <b>A0</b> tiene una superficie de <b>1 m²</b> (841 × 1189 mm).</li><li>Cada formato se obtiene <b>partiendo por la mitad</b> el lado mayor del anterior: A1 594 × 841, A2 420 × 594, A3 297 × 420, A4 210 × 297.</li><li>Todos son <b>semejantes</b>: la razón entre sus lados es <b>√2</b>. Por eso una reducción de A3 a A4 (71 %) conserva las proporciones.</li></ul><p>Existen también <b>formatos alargados</b> (por ejemplo, A3 × 3) para piezas muy largas o planos de trazado. Los formatos A0 a A3 se usan normalmente apaisados; el A4 puede usarse vertical.</p><p>El tamaño se elige en función de la escala necesaria para que los detalles sean legibles, no al revés.</p>`,
      svg: s3,
    },
    {
      html: `<h3>14.4 Recuadro, márgenes y bloque de títulos</h3><p>Según la norma <b>UNE-EN ISO 5457</b>, toda lámina tiene:</p><ul><li>Un <b>recuadro</b> de línea gruesa que limita la zona de dibujo, a <b>20 mm</b> del borde izquierdo (margen de archivo) y a <b>10 mm</b> de los demás bordes.</li><li><b>Marcas de centrado</b> en el centro de cada lado, para reproducir y microfilmar.</li><li>Opcionalmente, un <b>sistema de coordenadas</b> en el margen (letras y números) para localizar zonas del plano.</li></ul><p>El <b>bloque de títulos</b> o cajetín (<b>UNE-EN ISO 7200</b>) se coloca en la esquina inferior derecha y tiene como máximo 180 mm de ancho. Contiene, como mínimo: propietario o centro, título del plano, número de plano, fecha, autor, escala principal, símbolo del método de proyección y unidad de medida si no es el milímetro, además de revisiones.</p><p>Encima del cajetín se coloca la <b>lista de piezas</b> en los planos de conjunto.</p>`,
      svg: s4,
    },
    {
      html: `<h3>14.5 Plegado de planos</h3><p>Los planos mayores que el A4 se pliegan al tamaño <b>A4</b> para archivarlos en carpetas, según la norma <b>UNE 1027</b>. Reglas:</p><ul><li>El <b>cajetín</b> debe quedar siempre <b>visible</b> en la cara delantera, en la parte inferior derecha.</li><li>Primero se hacen los <b>pliegues verticales</b> (en acordeón) y después los horizontales.</li><li>Debe quedar libre la <b>franja de archivo</b> de la izquierda para poder taladrarla o grapar, sin que haya que desplegar el plano para leerlo.</li><li>En el A3, se pliega dejando a la derecha un panel de 210 mm con el cajetín y doblando hacia atrás la parte sobrante.</li></ul><p>Los formatos mayores siguen el mismo principio, con más pliegues en acordeón. Si los planos se archivan sin taladrar, existe una variante de plegado más sencilla.</p>`,
      svg: s5,
      video: { id: "3R5v9hV3u2c", titulo: "Plegado para encuadernar, norma ISO", canal: "Dibujo Mecánico", vistas: 195669, busqueda: "plegado de planos norma" },
    },
    {
      html: `<h3>14.6 Escalas</h3><p>La <b>escala</b> es la razón entre la medida en el dibujo y la medida real: <b>E = dibujo : realidad</b>. La norma <b>UNE-EN ISO 5455</b> recomienda:</p><ul><li><b>Reducción</b>: 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000…</li><li><b>Natural</b>: 1:1.</li><li><b>Ampliación</b>: 2:1, 5:1, 10:1, 20:1, 50:1.</li></ul><p>La escala principal se indica en el cajetín; las escalas de los detalles, junto a cada uno, por ejemplo «Z (5:1)».</p><p>La <b>escala gráfica</b> es una regla dibujada en el propio plano, con un <b>talón</b> subdividido a la izquierda del cero. Se usa sobre todo en planos de arquitectura, urbanismo y topografía, porque <b>sigue siendo válida</b> cuando el plano se reproduce ampliado o reducido, algo cada vez más habitual con los planos digitales.</p><p>Las <b>cotas</b> indican siempre medidas reales, independientemente de la escala.</p>`,
      svg: s6,
    },
    {
      html: `<h3>14.7 Plano de conjunto y lista de piezas</h3><p>El <b>plano de conjunto</b> representa el producto montado, normalmente con un corte que muestra cómo encajan las piezas. Sus elementos característicos son:</p><ul><li><b>Marcas de referencia</b> (UNE-EN ISO 6433): números dentro de un círculo unidos a cada pieza por una línea de referencia que termina en un punto (o en una flecha si toca un contorno). Se alinean en filas o columnas y se numeran en orden.</li><li><b>Lista de piezas</b> (UNE-EN ISO 7573): tabla encima del cajetín con la marca, la denominación, la cantidad, el material, la norma de los elementos comerciales y la referencia del plano de despiece. Se rellena de abajo arriba.</li><li>Solo las <b>cotas de conjunto</b>: dimensiones generales, de montaje y de funcionamiento.</li></ul><p>Los <b>elementos normalizados</b> (tornillos, tuercas, rodamientos) no tienen plano de despiece: se compran y se designan por su norma, por ejemplo «Tornillo ISO 4017 M10 × 40».</p>`,
      svg: s7,
      video: { id: "H5oMJhPG05w", titulo: "Representación normalizada de conjuntos según normas ISO", canal: "Universitat Politècnica de València", vistas: 51713, busqueda: "representación normalizada de conjuntos" },
    },
    {
      html: `<h3>14.8 Planos de despiece y fabricación</h3><p>El plano de despiece define una pieza para que pueda <b>fabricarse y verificarse</b> sin ambigüedad. Además de las vistas y cortes, incluye:</p><ul><li><b>Acotación funcional</b> (UNE-EN ISO 129-1): se acotan directamente las medidas que intervienen en el funcionamiento, desde superficies de referencia; se evitan las cadenas de cotas cerradas.</li><li><b>Tolerancias dimensionales</b>: márgenes de error admisibles en las medidas críticas, por ejemplo Ø20 h6.</li><li><b>Tolerancias geométricas</b> (UNE-EN ISO 1101): de forma, orientación y posición (planitud, perpendicularidad, coaxialidad…).</li><li><b>Estados superficiales</b>: rugosidad admisible (Ra en µm) indicada con el símbolo de acabado.</li><li><b>Material, tratamientos</b> y tolerancias generales en el cajetín.</li></ul><p>Cada plano de despiece corresponde a una marca de la lista de piezas del conjunto.</p>`,
      svg: s8,
      video: { id: "ouYLgA1sKgg", titulo: "Planos de despiece", canal: "Recursos Dibujo Técnico", vistas: 9779, busqueda: "planos de despiece" },
    },
    {
      html: `<h3>14.9 Tolerancias y ajustes</h3><p>Ninguna pieza se fabrica con una medida exacta. La <b>tolerancia</b> es la diferencia entre la medida máxima y la mínima admisibles. El sistema <b>ISO de tolerancias</b> (UNE-EN ISO 286) designa cada tolerancia con:</p><ul><li>Una <b>letra</b> que indica la posición de la zona respecto de la medida nominal: mayúscula para agujeros (H, F, P…) y minúscula para ejes (h, f, p…).</li><li>Un <b>número</b> que indica la calidad o amplitud (IT6, IT7…): cuanto menor, más precisa y cara.</li></ul><p>Un <b>ajuste</b> es el acoplamiento de un agujero y un eje de la misma medida nominal:</p><ul><li><b>Con juego</b>: el eje siempre es menor que el agujero (piezas que giran o deslizan), por ejemplo H7/f7.</li><li><b>Indeterminado</b>: puede haber juego o apriete (piezas que se montan con mazo), por ejemplo H7/k6.</li><li><b>Con apriete</b>: el eje siempre es mayor (piezas que no deben separarse), por ejemplo H7/p6.</li></ul><p>En el sistema de <b>agujero base</b>, el más usado, todos los agujeros son H y se varía el eje.</p>`,
      svg: s9,
      video: { id: "MHDDQhqMlXo", titulo: "Metrología dimensional: tolerancias", canal: "Carlos Finch Domenech", vistas: 109067, busqueda: "tolerancias dimensionales" },
    },
    {
      html: `<h3>14.10 Planos de arquitectura y construcción</h3><p>Los planos de edificación siguen los mismos principios con algunas convenciones propias:</p><ul><li><b>Plantas</b>: secciones horizontales a 1–1,5 m del suelo. Los elementos cortados (muros, pilares) se dibujan con trazo grueso o rellenos; lo que se ve por debajo, con trazo fino.</li><li><b>Alzados</b> exteriores y <b>secciones</b> verticales que muestran alturas, forjados y cubiertas.</li><li><b>Símbolos</b> de puertas (hoja y arco de giro), ventanas, escaleras (con flecha de subida), aparatos sanitarios y mobiliario.</li><li><b>Cotas</b> en metros o centímetros, en cadena, con cotas parciales y totales; niveles de altura con el símbolo de cota de nivel.</li><li>Orientación con la <b>flecha del norte</b> y escalas típicas de 1:50 o 1:100, y 1:20 a 1:5 en detalles constructivos.</li></ul><p>La interpretación de estos planos es imprescindible en oficios de la construcción, en instalaciones y en la tramitación de licencias.</p>`,
      svg: s10,
      video: { id: "yX1TAKjebOI", titulo: "Aprende a interpretar o leer planos arquitectónicos", canal: "Planos ARCOS Arquitectura", vistas: 1120889, busqueda: "leer planos arquitectónicos" },
    },
    {
      html: `<h3>14.11 Dibujo asistido por ordenador (CAD 2D)</h3><p>Los programas de <b>CAD</b> (AutoCAD, LibreCAD, QCAD, DraftSight…) dibujan con <b>entidades</b> geométricas exactas (líneas, círculos, arcos, polilíneas, textos, cotas) en un espacio a tamaño real, en unidades reales. La escala solo se aplica al imprimir.</p><p>Conceptos básicos:</p><ul><li><b>Coordenadas</b>: absolutas (x, y), relativas (@dx, dy) y polares relativas (@distancia&lt;ángulo).</li><li><b>Referencias a objetos</b>: punto final, medio, centro, intersección, tangente, perpendicular… garantizan la precisión.</li><li><b>Órdenes de edición</b>: desplazar, copiar, girar, simetría, equidistancia, recortar, alargar, empalme, chaflán, matriz.</li><li><b>Capas</b>: agrupan entidades con el mismo tipo de línea, color y grosor (contornos, ejes, cotas, ocultas, rayados), y se pueden ocultar o bloquear.</li><li><b>Bloques</b> reutilizables (tornillos, puertas, símbolos) y <b>estilos</b> de cota y de texto normalizados.</li><li><b>Espacio modelo</b> (dibujo a tamaño real) y <b>espacio papel</b> o presentación (lámina con cajetín y ventanas a escala).</li></ul>`,
      svg: s11,
      video: { id: "Pgn4DfRB-OU", titulo: "AutoCAD en 5 minutos: los comandos básicos para empezar", canal: "reparq", vistas: 1172941, busqueda: "autocad comandos básicos" },
    },
    {
      html: `<h3>14.12 Modelado 3D y metodología BIM</h3><p>En el <b>modelado 3D paramétrico</b> (FreeCAD, Onshape, SolidWorks, Fusion, Inventor…) la pieza se construye a partir de <b>bocetos 2D restringidos</b> (con cotas y relaciones geométricas) y <b>operaciones</b> como extrusión, revolución, barrido, vaciado o redondeo. Ventajas:</p><ul><li>Las <b>vistas, cortes y cotas</b> del plano se generan desde el modelo y se actualizan solos al cambiar una medida.</li><li>Los conjuntos se ensamblan con restricciones y se comprueban interferencias y movimientos.</li><li>El modelo sirve para simulación, fabricación por control numérico e impresión 3D.</li></ul><p>En construcción, la metodología <b>BIM</b> (Building Information Modeling, UNE-EN ISO 19650) va más allá: el modelo del edificio es una <b>base de datos</b> en la que cada elemento (muro, ventana, conducto) tiene geometría e información (materiales, fabricante, coste, plazo, mantenimiento). Se habla de dimensiones: 3D geometría, 4D tiempo, 5D coste, 6D sostenibilidad, 7D mantenimiento. Todos los agentes trabajan sobre el mismo modelo y los planos son coherentes entre sí.</p>`,
      svg: s12,
      video: { id: "9y2X2PpcQoc", titulo: "¿Qué es la metodología BIM?", canal: "Planbim", vistas: 213064, busqueda: "qué es la metodología BIM" },
    },
  ],
  ejemplos: [
    { enunciado: "¿Qué superficie tiene un A3?", pasos: ["El A0 tiene 1 m²; cada formato es la mitad del anterior.", "A3 = 1/8 m² = 0,125 m²."], resultado: "0,125 m² (297 × 420 mm)." },
    { enunciado: "Un salón de 6,20 m se dibuja a 1:50. ¿Cuánto mide en el plano?", pasos: ["6200 mm / 50 = 124 mm."], resultado: "124 mm." },
    { enunciado: "Un detalle de 4 mm se dibuja a 5:1. ¿Cuánto mide en el dibujo y qué cota se escribe?", pasos: ["4 · 5 = 20 mm dibujados.", "La cota indica la medida real."], resultado: "20 mm; cota 4." },
    { enunciado: "Un eje Ø20 h6 tiene diferencias 0 y −0,013 mm. ¿Entre qué medidas es válido?", pasos: ["Máxima 20,000 mm.", "Mínima 19,987 mm."], resultado: "Entre 19,987 y 20,000 mm; tolerancia 13 µm." },
    { enunciado: "Agujero Ø30 H7 (0/+0,021) y eje Ø30 p6 (+0,022/+0,035). ¿Qué ajuste es?", pasos: ["El eje mínimo (30,022) es mayor que el agujero máximo (30,021).", "Siempre hay apriete."], resultado: "Ajuste con apriete (entre 0,001 y 0,035 mm)." },
    { enunciado: "Desde el punto (10,10) dibujas @50<30. ¿Dónde termina la línea?", pasos: ["dx = 50 cos 30° ≈ 43,3; dy = 50 sen 30° = 25.", "Punto final (53,3; 35)."], resultado: "≈ (53,3; 35)." },
  ],
  errores: [
    "Escribir en las cotas la medida dibujada en lugar de la real.",
    "Colocar el cajetín fuera de la esquina inferior derecha o taparlo al plegar.",
    "Poner cotas de fabricación en el plano de conjunto o faltar cotas en el despiece.",
    "Hacer planos de despiece de tornillos y elementos normalizados.",
    "En CAD, dibujar a escala en el espacio modelo en lugar de a tamaño real.",
    "Confundir la letra de tolerancia del agujero (mayúscula) con la del eje (minúscula).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Nombra los cuatro documentos básicos de un proyecto.", sol: "Memoria, planos, pliego de condiciones y presupuesto." },
    { nivel: "básico", q: "¿Cuánto mide un A2? ¿Y un A4?", sol: "420 × 594 mm; 210 × 297 mm." },
    { nivel: "básico", q: "¿Cuál es la razón entre los lados de los formatos A? ¿Por qué?", sol: "√2: al partir por la mitad se obtiene un rectángulo semejante." },
    { nivel: "básico", q: "¿Qué márgenes tiene el recuadro de una lámina?", sol: "20 mm a la izquierda y 10 mm en los demás bordes." },
    { nivel: "básico", q: "Enumera cinco datos del cajetín.", sol: "Título, número de plano, autor, fecha, escala, método de proyección, propietario." },
    { nivel: "básico", q: "Dibuja una escala gráfica 1:50 de 0 a 5 m con talón de 1 m.", sol: "1 m = 20 mm; talón dividido en decímetros." },
    { nivel: "básico", q: "Una pieza de 15 mm se dibuja a 2:1. ¿Cuánto mide en el dibujo?", sol: "30 mm." },
    { nivel: "básico", q: "¿Para qué sirve la lista de piezas?", sol: "Identifica cada marca con su denominación, cantidad y material." },
    { nivel: "básico", q: "Explica la diferencia entre coordenadas absolutas, relativas y polares en CAD.", sol: "Desde el origen; desde el último punto; desde el último punto con distancia y ángulo." },
    { nivel: "básico", q: "¿Qué es una capa en CAD?", sol: "Grupo de entidades con propiedades comunes que se pueden gestionar juntas." },
    { nivel: "básico", q: "¿Qué significa la letra H en Ø20 H7?", sol: "Posición de la tolerancia de un agujero con diferencia inferior nula." },
    { nivel: "básico", q: "¿Qué significa BIM?", sol: "Building Information Modeling: modelado de la información de la construcción." },
    { nivel: "medio", q: "Dibuja una lámina A4 vertical con recuadro, marcas de centrado y cajetín.", sol: "Recuadro a 20/10 mm; cajetín abajo a la derecha." },
    { nivel: "medio", q: "Pliega un A3 a A4 según UNE 1027 y comprueba que el cajetín queda visible.", sol: "Panel de 210 mm con cajetín; resto doblado hacia atrás." },
    { nivel: "medio", q: "Elige formato y escala para dibujar una pieza de 600 × 300 mm con detalles de 2 mm.", sol: "A3 a 1:2 con detalles ampliados a 5:1, por ejemplo." },
    { nivel: "medio", q: "Haz el plano de conjunto de un sacapuntas con marcas y lista de piezas.", sol: "Cuerpo, cuchilla, tornillo: marcas y tabla." },
    { nivel: "medio", q: "Haz el plano de despiece de una de sus piezas.", sol: "Vistas, cotas, material y tolerancias generales." },
    { nivel: "medio", q: "Calcula juego máximo y mínimo de Ø25 H7 (0/+0,021) con f7 (−0,020/−0,041).", sol: "Juego mínimo 0,020; máximo 0,062 mm." },
    { nivel: "medio", q: "Dibuja la planta de tu habitación a 1:50 con puerta, ventana y cotas.", sol: "Muros gruesos, símbolos, cotas en metros." },
    { nivel: "medio", q: "En CAD, dibuja un hexágono de 30 mm de lado con coordenadas polares relativas.", sol: "@30<0, @30<60, @30<120, @30<180, @30<240, @30<300." },
    { nivel: "medio", q: "Organiza en capas un dibujo de pieza con contornos, ejes, cotas, ocultas y rayado.", sol: "Una capa por tipo con su línea y grosor." },
    { nivel: "medio", q: "Indica en un plano una rugosidad de Ra 1,6 en una superficie de ajuste.", sol: "Símbolo de acabado con mecanizado y valor Ra 1,6." },
    { nivel: "avanzado", q: "Modela en un programa paramétrico gratuito una pieza del tema 13 y genera su plano.", sol: "Boceto restringido, extrusión, vistas y cortes automáticos, cotas." },
    { nivel: "avanzado", q: "Cambia una cota del modelo y comprueba que el plano se actualiza.", sol: "Asociatividad modelo-plano." },
    { nivel: "avanzado", q: "Elige el ajuste adecuado para un rodamiento sobre eje y justifícalo.", sol: "Indeterminado o ligero apriete (k6, m6) en el aro que gira con el eje." },
    { nivel: "avanzado", q: "Prepara el índice de planos de un pequeño proyecto de mobiliario.", sol: "Situación, conjunto, despieces, detalles, con número y escala." },
    { nivel: "avanzado", q: "Compara un flujo de trabajo CAD 2D y uno BIM para una vivienda.", sol: "2D: planos independientes; BIM: modelo único con información y planos coherentes." },
    { nivel: "avanzado", q: "Explica por qué la escala gráfica es preferible en planos digitales.", sol: "Se escala con el dibujo al imprimir a cualquier tamaño." },
    { nivel: "avanzado", q: "Redacta la memoria descriptiva de un objeto diseñado por tu grupo.", sol: "Objeto, necesidad, solución, materiales, funcionamiento." },
    { nivel: "avanzado", q: "Prepara un plano de conjunto en CAD con bloques, lista de piezas automática y cajetín.", sol: "Bloques con atributos; tabla vinculada; presentación con cajetín." },
  ],
  quiz: reparte([
    { q: "El documento que define gráficamente un proyecto es…", o: ["la memoria", "los planos", "el pliego", "el presupuesto"], a: 1, e: "Geometría." },
    { q: "Superficie del A0:", o: ["0,5 m²", "1 m²", "2 m²", "0,25 m²"], a: 1, e: "841 × 1189 mm." },
    { q: "Razón entre lados en la serie A:", o: ["1,5", "√2", "2", "φ"], a: 1, e: "Semejanza al partir." },
    { q: "Medidas del A3:", o: ["210 × 297", "297 × 420", "420 × 594", "594 × 841"], a: 1, e: "Serie A." },
    { q: "Margen izquierdo del recuadro:", o: ["10 mm", "20 mm", "5 mm", "30 mm"], a: 1, e: "Margen de archivo." },
    { q: "El cajetín se sitúa…", o: ["arriba a la izquierda", "abajo a la derecha", "en el centro", "donde quepa"], a: 1, e: "ISO 7200." },
    { q: "Los planos se pliegan a formato…", o: ["A3", "A4", "A5", "carta"], a: 1, e: "UNE 1027." },
    { q: "Escala 1:50 es de…", o: ["ampliación", "reducción", "natural", "ninguna"], a: 1, e: "Dibujo menor." },
    { q: "Las cotas indican…", o: ["la medida dibujada", "la medida real", "la escala", "el formato"], a: 1, e: "Siempre reales." },
    { q: "La escala gráfica…", o: ["se pierde al reducir", "sigue valiendo al reducir", "solo vale en papel", "no existe"], a: 1, e: "Cambia con el dibujo." },
    { q: "La lista de piezas va…", o: ["en la memoria", "encima del cajetín", "en el pliego", "al dorso"], a: 1, e: "Plano de conjunto." },
    { q: "Los tornillos normalizados…", o: ["tienen plano de despiece", "se designan por su norma", "se dibujan cortados", "no aparecen"], a: 1, e: "Elementos comerciales." },
    { q: "En Ø20 h6, «h» se refiere a…", o: ["un agujero", "un eje", "la rugosidad", "el material"], a: 1, e: "Minúscula: eje." },
    { q: "Ajuste en que el eje siempre es menor:", o: ["con apriete", "con juego", "indeterminado", "nulo"], a: 1, e: "Piezas que giran." },
    { q: "Sistema de agujero base: todos los agujeros son…", o: ["h", "H", "P", "k"], a: 1, e: "Diferencia inferior cero." },
    { q: "En CAD, @40<60 es…", o: ["absoluta", "polar relativa", "cartesiana relativa", "esférica"], a: 1, e: "Distancia y ángulo." },
    { q: "En CAD se dibuja en espacio modelo a…", o: ["escala del plano", "tamaño real", "1:100", "pulgadas"], a: 1, e: "La escala se aplica al imprimir." },
    { q: "Las capas agrupan entidades por…", o: ["fecha", "tipo de línea, color y grosor", "tamaño", "autor"], a: 1, e: "Organización." },
    { q: "En modelado paramétrico, el plano…", o: ["se redibuja a mano", "se actualiza con el modelo", "no existe", "es solo 3D"], a: 1, e: "Asociatividad." },
    { q: "BIM añade al modelo 3D…", o: ["color", "información (tiempo, coste…)", "sombras", "nada"], a: 1, e: "Base de datos." },
  ]),
  examen: reparte([
    { q: "Superficie de un A4:", o: ["1/16 m²", "1/8 m²", "1/4 m²", "1/32 m²"], a: 0, e: "0,0625 m²." },
    { q: "8 m a 1:100 en el plano:", o: ["80 mm", "8 mm", "800 mm", "0,8 mm"], a: 0, e: "8000/100." },
    { q: "Pieza de 3 mm a 10:1 en el dibujo:", o: ["30 mm", "0,3 mm", "3 mm", "300 mm"], a: 0, e: "Ampliación." },
    { q: "Ø40 H7 = 40,000/40,025 y eje 39,975/39,950: ajuste", o: ["con juego", "con apriete", "indeterminado", "imposible"], a: 0, e: "Eje siempre menor." },
    { q: "Juego máximo del ejemplo anterior:", o: ["0,075 mm", "0,025 mm", "0,050 mm", "0,100 mm"], a: 0, e: "40,025 − 39,950." },
    { q: "Norma de formatos y presentación:", o: ["UNE-EN ISO 5457", "UNE 1027", "ISO 286", "ISO 19650"], a: 0, e: "Formatos." },
    { q: "Norma de plegado:", o: ["UNE 1027", "ISO 7200", "ISO 5455", "ISO 1101"], a: 0, e: "Plegado a A4." },
    { q: "Norma de BIM:", o: ["UNE-EN ISO 19650", "UNE-EN ISO 128", "UNE 1027", "ISO 216"], a: 0, e: "Gestión de la información." },
  ]),
  feynman: ["Qué documentos forman un proyecto y para qué sirve cada uno", "Por qué todos los formatos A tienen la misma forma", "Qué diferencia hay entre un plano de conjunto y uno de despiece", "Qué es un ajuste con juego y uno con apriete", "Qué ventaja tiene el modelado paramétrico frente al dibujo 2D"],
  glosario: [
    ["Proyecto", "Conjunto de documentos que definen una obra o producto."],
    ["Memoria", "Documento que describe y justifica el proyecto."],
    ["Pliego de condiciones", "Documento que fija calidades y condiciones de ejecución."],
    ["Plano de conjunto", "Plano del producto montado con marcas y lista de piezas."],
    ["Plano de despiece", "Plano de fabricación de una pieza."],
    ["Formato", "Tamaño normalizado del papel."],
    ["Cajetín", "Bloque de títulos con los datos del plano."],
    ["Escala gráfica", "Regla dibujada en el plano que se escala con él."],
    ["Tolerancia", "Diferencia entre la medida máxima y la mínima admisibles."],
    ["Ajuste", "Acoplamiento entre agujero y eje de igual medida nominal."],
    ["Rugosidad", "Irregularidades finas de una superficie, medidas con Ra."],
    ["CAD", "Diseño asistido por ordenador."],
    ["Modelado paramétrico", "Modelado 3D controlado por cotas y restricciones editables."],
    ["BIM", "Metodología de trabajo con un modelo de información del edificio."],
  ],
  situacion: {
    titulo: "Proyecto de un objeto útil para el centro",
    reto: "Vuestro grupo va a diseñar un objeto sencillo para el centro (un soporte para tabletas, un perchero, una caja de herramientas) y entregar su proyecto completo como lo haría una oficina técnica.",
    pasos: [
      "Redactad una memoria breve: necesidad, alternativas, solución elegida y materiales.",
      "Modelad el objeto en un programa de CAD 3D gratuito.",
      "Generad el plano de conjunto con marcas y lista de piezas.",
      "Generad un plano de despiece por cada pieza no normalizada, con cotas y tolerancias.",
      "Imprimid en A3, plegad a A4 y montad la carpeta del proyecto con un presupuesto simple.",
    ],
    producto: "Carpeta de proyecto con memoria, planos y presupuesto.",
    evaluacion: [
      "Planos normalizados (formato, cajetín, escalas, plegado).",
      "Conjunto y despieces coherentes entre sí.",
      "Cotas suficientes para fabricar.",
      "Memoria clara y presupuesto realista.",
    ],
  },
  figura: fig("Documentación y CAD", "Resumen del tema", [
    ["Proyecto", ["memoria", "planos", "pliego", "presupuesto"], "var(--pen)"],
    ["Presentación", ["formatos A (√2)", "recuadro y cajetín", "plegado a A4", "escalas"], "var(--red)"],
    ["Planos", ["conjunto y lista", "despiece", "tolerancias y acabados", "arquitectura"], "var(--leaf)"],
    ["Digital", ["CAD 2D y capas", "modelo paramétrico", "planos automáticos", "BIM"], "var(--inf)"],
  ]),
  video: { id: "teSI4Sj5OxY", titulo: "Principios generales de la acotación: cómo acotar planos", canal: "Matías G. Ottini", vistas: 194747, busqueda: "principios generales de la acotación" },
  mapa: mapa("DOCUMENTACIÓN Y CAD", "var(--bac)", [
    ["Proyecto", "memoria · planos · pliego · presupuesto", "var(--pen)"],
    ["Presentación", "formatos · cajetín · plegado · escalas", "var(--red)"],
    ["Planos", "conjunto · despiece · tolerancias", "var(--leaf)"],
    ["Digital", "CAD · paramétrico · BIM", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Proyecto", "Memoria, planos, pliego, presupuesto."],
    ["A0", "1 m², 841 × 1189 mm."],
    ["Serie A", "Lados en razón √2."],
    ["Recuadro", "20 mm izquierda, 10 mm resto."],
    ["Cajetín", "Abajo a la derecha (ISO 7200)."],
    ["Plegado", "A4 con cajetín visible (UNE 1027)."],
    ["Escala", "Dibujo : realidad."],
    ["Conjunto", "Marcas + lista de piezas."],
    ["Despiece", "Todo para fabricar una pieza."],
    ["H7/f7", "Ajuste con juego."],
    ["CAD", "Espacio modelo a tamaño real."],
    ["BIM", "Modelo + información compartida."],
  ],
  familias: ["Buscad los planos de vuestra vivienda (escrituras, catastro) y localizad la escala y el norte.", "Desmontad un objeto sencillo y haced juntos su lista de piezas.", "Probad un programa de modelado 3D gratuito desde el navegador.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Normalización y documentación gráfica de proyectos: el proyecto y sus documentos; tipos de planos; formatos, cajetín, plegado y escalas; planos de conjunto y de despiece; tolerancias y acabados; aplicaciones informáticas de CAD 2D, modelado 3D y BIM (RD 243/2022, Dibujo Técnico II, saberes básicos C. Normalización y documentación gráfica de proyectos y D. Sistemas CAD; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Proyecto interdisciplinar con Tecnología e Ingeniería: el objeto se fabrica en el taller.", "Visita virtual a un modelo BIM público de un edificio.", "Comparar un plano dibujado a mano con el mismo generado en CAD.", "Uso de programas libres (FreeCAD, LibreCAD) o en línea para el modelado."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Ley 38/1999, de Ordenación de la Edificación, BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1999-21567" },
    { t: "Código Técnico de la Edificación, Ministerio de Vivienda", url: "https://www.codigotecnico.org" },
    { t: "Formato de papel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Formato_de_papel" },
  ],
  revisado: "2026-11-21",
};
