// Ayudas de dibujo para los temas de 4º ESO a nivel libro (lote 3: Matemáticas B).
// Todo son dibujos propios en SVG; los colores salen de las variables del tema (claro y oscuro).
const { F, D, mapa, flecha } = require("./_util");

const n2 = (v) => +(+v).toFixed(2);
const num = (v) => String(n2(v)).replace("-", "−").replace(".", ",");
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Lienzo estándar de bloque (260 × 180) u otro tamaño.
const lienzo = (aria, inner, w = 260, h = 180) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${aria}"><rect width="${w}" height="${h}" rx="14" fill="var(--paper)"/>${inner}</svg>`;

// Texto: t(x, y, "texto", { c, s, b, a, f })
function t(x, y, s, o = {}) {
  const { c = "var(--ink)", s: fs = 12, b = 0, a = "middle", f = F } = o;
  return `<text x="${n2(x)}" y="${n2(y)}" text-anchor="${a}" font-size="${fs}"${b ? ' font-weight="700"' : ""} fill="${c}" ${f}>${esc(s)}</text>`;
}

// Varias líneas centradas (tarjeta de fórmulas): lineas([["texto", color, tamaño, negrita]], yInicial, salto)
function lineas(ls, y0 = 40, dy = 26, x = 130) {
  return ls.map(([s, c = "var(--ink)", fs = 14, b = 1], i) => t(x, y0 + i * dy, s, { c, s: fs, b })).join("");
}

// Tarjeta de fórmulas: un título y varias líneas dentro de un marco.
function tarjeta(aria, titulo, ls, color = "var(--pen)", w = 260, h = 180) {
  const dy = Math.min(28, (h - 62) / Math.max(1, ls.length));
  return lienzo(aria, `<rect x="10" y="10" width="${w - 20}" height="${h - 20}" rx="12" fill="var(--card)" stroke="${color}" stroke-width="2.5"/>
    <rect x="10" y="10" width="${w - 20}" height="30" rx="12" fill="${color}"/><rect x="10" y="28" width="${w - 20}" height="12" fill="${color}"/>
    ${t(w / 2, 30, titulo, { c: "#fff", s: 14, b: 1, f: D })}${lineas(ls, 62 + dy / 4, dy, w / 2)}`, w, h);
}

// Ejes cartesianos con cuadrícula. Devuelve { svg, X, Y, curva, punto, seg, area }.
function ejes(o = {}) {
  const { x0 = -5, x1 = 5, y0 = -4, y1 = 4, w = 260, h = 180, m = 14, paso = 1, etiquetas = true, pasoEt = null, pasoY = null } = o;
  const py = pasoY || paso;
  const X = (v) => n2(m + ((v - x0) / (x1 - x0)) * (w - 2 * m));
  const Y = (v) => n2(h - m - ((v - y0) / (y1 - y0)) * (h - 2 * m));
  let g = "";
  for (let v = Math.ceil(x0 / paso) * paso; v <= x1 + 1e-9; v += paso) g += `<path d="M${X(v)} ${Y(y0)} V ${Y(y1)}" stroke="var(--grid)" stroke-width="1"/>`;
  for (let v = Math.ceil(y0 / py) * py; v <= y1 + 1e-9; v += py) g += `<path d="M${X(x0)} ${Y(v)} H ${X(x1)}" stroke="var(--grid)" stroke-width="1"/>`;
  const ax = y0 <= 0 && y1 >= 0 ? `<path d="M${X(x0)} ${Y(0)} H ${X(x1)}" stroke="var(--muted)" stroke-width="1.6"/>` : "";
  const ay = x0 <= 0 && x1 >= 0 ? `<path d="M${X(0)} ${Y(y0)} V ${Y(y1)}" stroke="var(--muted)" stroke-width="1.6"/>` : "";
  let et = "";
  if (etiquetas) {
    const pe = pasoEt || (x1 - x0 > 12 ? 2 : 1) * paso;
    const yb = y0 <= 0 && y1 >= 0 ? Y(0) : Y(y0);
    const xb = x0 <= 0 && x1 >= 0 ? X(0) : X(x0);
    for (let v = Math.ceil((x0 + 0.01) / pe) * pe; v < x1; v += pe) if (Math.abs(v) > 1e-9) et += t(X(v), Math.min(yb + 11, h - 3), num(v), { c: "var(--muted)", s: 9 });
    for (let v = Math.ceil((y0 + 0.01) / pe) * pe; v < y1; v += pe) if (Math.abs(v) > 1e-9) et += t(xb - 3, Y(v) + 3, num(v), { c: "var(--muted)", s: 9, a: "end" });
  }
  // Curva y = f(x) en [a, b]; se corta donde f se sale mucho o no existe.
  const curva = (f, c = "var(--pen)", a = x0, b = x1, ancho = 2.6, extra = "") => {
    const N = 160, out = [];
    let tramo = [];
    for (let i = 0; i <= N; i++) {
      const x = a + ((b - a) * i) / N, y = f(x);
      if (!isFinite(y) || y > y1 + (y1 - y0) || y < y0 - (y1 - y0)) { if (tramo.length > 1) out.push(tramo); tramo = []; continue; }
      tramo.push(`${X(x)} ${Y(Math.max(y0 - 0.5, Math.min(y1 + 0.5, y)))}`);
    }
    if (tramo.length > 1) out.push(tramo);
    return `<clipPath id="c${(ejes.k = (ejes.k || 0) + 1)}"><rect x="${m}" y="${m}" width="${w - 2 * m}" height="${h - 2 * m}"/></clipPath><g clip-path="url(#c${ejes.k})">${out.map((p) => `<path d="M${p.join(" L ")}" fill="none" stroke="${c}" stroke-width="${ancho}" stroke-linejoin="round" ${extra}/>`).join("")}</g>`;
  };
  const punto = (x, y, c = "var(--red)", lab = "", dx = 6, dy = -6, hueco = false) => `<circle cx="${X(x)}" cy="${Y(y)}" r="4" fill="${hueco ? "var(--paper)" : c}" stroke="${c}" stroke-width="2"/>${lab ? t(X(x) + dx, Y(y) + dy, lab, { c, s: 11, b: 1, a: dx < 0 ? "end" : dx === 0 ? "middle" : "start" }) : ""}`;
  const seg = (xa, ya, xb, yb, c = "var(--pen)", ancho = 2.4, extra = "") => `<path d="M${X(xa)} ${Y(ya)} L ${X(xb)} ${Y(yb)}" stroke="${c}" stroke-width="${ancho}" fill="none" ${extra}/>`;
  const area = (pts, c = "var(--pen)", op = 0.18) => `<path d="M${pts.map(([a, b]) => `${X(a)} ${Y(b)}`).join(" L ")} Z" fill="${c}" fill-opacity="${op}" stroke="none"/>`;
  return { svg: g + ax + ay + et, X, Y, curva, punto, seg, area, w, h };
}
// Gráfica completa: graf(aria, opcionesEjes, (E) => contenido)
const graf = (aria, o, fn) => { const E = ejes(o); return lienzo(aria, E.svg + fn(E), E.w, E.h); };

// Recta numérica de v0 a v1 en la altura y. Devuelve { svg, X, intervalo }.
function recta(v0, v1, y = 100, o = {}) {
  const { xa = 22, xb = 238, paso = 1, et = true } = o;
  const X = (v) => n2(xa + ((v - v0) / (v1 - v0)) * (xb - xa));
  let s = `<path d="M${xa - 10} ${y} H ${xb + 10}" stroke="var(--ink)" stroke-width="2"/>`;
  for (let v = v0; v <= v1 + 1e-9; v += paso) s += `<path d="M${X(v)} ${y - 5} V ${y + 5}" stroke="var(--ink)" stroke-width="1.6"/>${et ? t(X(v), y + 18, num(v), { c: "var(--muted)", s: 10 }) : ""}`;
  // Intervalo: a o b pueden ser ±Infinity; ca, cb: extremo incluido.
  const intervalo = (a, b, ca, cb, c = "var(--pen)", dy = 0) => {
    const A = a === -Infinity ? xa - 10 : X(a), B = b === Infinity ? xb + 10 : X(b);
    return `<path d="M${A} ${y + dy} H ${B}" stroke="${c}" stroke-width="6" stroke-linecap="round" opacity=".85"/>${a === -Infinity ? "" : `<circle cx="${A}" cy="${y + dy}" r="5.5" fill="${ca ? c : "var(--paper)"}" stroke="${c}" stroke-width="2.5"/>`}${b === Infinity ? "" : `<circle cx="${B}" cy="${y + dy}" r="5.5" fill="${cb ? c : "var(--paper)"}" stroke="${c}" stroke-width="2.5"/>`}`;
  };
  return { svg: s, X, intervalo };
}

// Triángulo con vértices [[x,y]...], etiquetas de vértice y de lado opcionales.
function triangulo(p, o = {}) {
  const { c = "var(--pen)", fill = "var(--card)", vert = [], lados = [], recto = -1 } = o;
  let s = `<path d="M${p.map((q) => q.join(" ")).join(" L ")} Z" fill="${fill}" stroke="${c}" stroke-width="2.5" stroke-linejoin="round"/>`;
  if (recto >= 0) {
    const [P, A, B] = [p[recto], p[(recto + 1) % 3], p[(recto + 2) % 3]];
    const u = (Q) => { const dx = Q[0] - P[0], dy = Q[1] - P[1], L = Math.hypot(dx, dy); return [(dx / L) * 12, (dy / L) * 12]; };
    const [a, b] = [u(A), u(B)];
    s += `<path d="M${n2(P[0] + a[0])} ${n2(P[1] + a[1])} L ${n2(P[0] + a[0] + b[0])} ${n2(P[1] + a[1] + b[1])} L ${n2(P[0] + b[0])} ${n2(P[1] + b[1])}" fill="none" stroke="var(--muted)" stroke-width="1.6"/>`;
  }
  const cx = (p[0][0] + p[1][0] + p[2][0]) / 3, cy = (p[0][1] + p[1][1] + p[2][1]) / 3;
  vert.forEach((v, i) => { if (!v) return; const [x, y] = p[i], dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy) || 1; s += t(x + (dx / L) * 13, y + (dy / L) * 13 + 4, v, { c: "var(--ink)", s: 13, b: 1 }); });
  lados.forEach((v, i) => { if (!v) return; const A = p[i], B = p[(i + 1) % 3], mx = (A[0] + B[0]) / 2, my = (A[1] + B[1]) / 2, dx = mx - cx, dy = my - cy, L = Math.hypot(dx, dy) || 1; s += t(mx + (dx / L) * 13, my + (dy / L) * 13 + 4, v, { c, s: 12, b: 1 }); });
  return s;
}

// Diagrama de árbol de dos niveles. r = [[rama, prob, [[rama, prob, final], ...]], ...]
function arbol(aria, r, w = 260, h = 180) {
  const n1 = r.length, hojas = r.reduce((a, x) => a + x[2].length, 0);
  let s = `<circle cx="18" cy="${h / 2}" r="5" fill="var(--ink)"/>`, k = 0;
  r.forEach(([a, pa, hs], i) => {
    const y1 = 20 + ((i + 0.5) * (h - 40)) / n1;
    s += `<path d="M18 ${h / 2} L 92 ${n2(y1)}" stroke="var(--pen)" stroke-width="2"/>${t(55, (h / 2 + y1) / 2 - 5, pa, { c: "var(--pen)", s: 10, b: 1 })}${t(102, y1 + 4, a, { s: 12, b: 1, a: "start" })}`;
    hs.forEach(([b, pb, fin]) => {
      const y2 = 12 + ((k + 0.5) * (h - 24)) / hojas; k++;
      s += `<path d="M${a.length > 3 ? 132 : 122} ${n2(y1)} L 178 ${n2(y2)}" stroke="var(--leaf)" stroke-width="1.8"/>${t(150, (y1 + y2) / 2 - 4, pb, { c: "var(--leaf)", s: 9, b: 1 })}${t(184, y2 + 4, b, { s: 11, b: 1, a: "start" })}${fin ? t(w - 6, y2 + 4, fin, { c: "var(--red)", s: 9, b: 1, a: "end" }) : ""}`;
    });
  });
  return lienzo(aria, s, w, h);
}

// Nube de puntos con recta opcional.
function nube(aria, pts, o = {}) {
  const { x0 = 0, x1 = 10, y0 = 0, y1 = 10, recta: r = null, ex = "", ey = "", paso = 2 } = o;
  return graf(aria, { x0, x1, y0, y1, paso, m: 20 }, (E) => `${pts.map(([x, y]) => `<circle cx="${E.X(x)}" cy="${E.Y(y)}" r="3.6" fill="var(--pen)" opacity=".85"/>`).join("")}${r ? E.curva(r, "var(--red)", x0, x1, 2.2) : ""}${ex ? t(E.w - 8, E.h - 6, ex, { c: "var(--muted)", s: 9, a: "end" }) : ""}${ey ? t(24, 12, ey, { c: "var(--muted)", s: 9, a: "start" }) : ""}`);
}

// Barras horizontales sencillas: [[etiqueta, valor, color]]
function barras(aria, datos, max, o = {}) {
  const { w = 260, h = 180, unidad = "" } = o;
  const bh = Math.min(26, (h - 30) / datos.length - 6);
  return lienzo(aria, datos.map(([e, v, c = "var(--pen)"], i) => { const y = 18 + i * (bh + 6); const L = ((w - 110) * v) / max; return `${t(70, y + bh / 2 + 4, e, { s: 11, b: 1, a: "end" })}<rect x="78" y="${y}" width="${n2(Math.max(2, L))}" height="${bh}" rx="5" fill="${c}"/>${t(84 + L, y + bh / 2 + 4, `${typeof v === "number" ? num(v) : v}${unidad}`, { s: 10, a: "start", c: "var(--muted)" })}`; }).join(""), w, h);
}

// Rejilla de casillas (para combinatoria): casillas(["5","4","3"], ["1.º","2.º","3.º"])
function casillas(aria, valores, rotulos = [], pie = "", color = "var(--pen)") {
  const n = valores.length, cw = Math.min(46, 200 / n), x0 = 130 - (n * (cw + 8) - 8) / 2;
  return lienzo(aria, valores.map((v, i) => `<rect x="${n2(x0 + i * (cw + 8))}" y="56" width="${n2(cw)}" height="46" rx="8" fill="var(--card)" stroke="${color}" stroke-width="2.5"/>${t(x0 + i * (cw + 8) + cw / 2, 86, v, { s: 18, b: 1, c: color, f: D })}${rotulos[i] ? t(x0 + i * (cw + 8) + cw / 2, 120, rotulos[i], { s: 10, c: "var(--muted)" }) : ""}${i < n - 1 ? t(x0 + i * (cw + 8) + cw + 4, 84, "·", { s: 16, b: 1 }) : ""}`).join("") + (pie ? t(130, 154, pie, { s: 13, b: 1 }) : ""));
}

// Reparte la respuesta correcta entre las posiciones A-D (intercambia opciones) para que no se repita siempre la misma letra.
function reparte(qs, k = 0) {
  return qs.map((q, i) => {
    const d = [1, 3, 0, 2][(i + k) % 4];
    if (q.a === d || d >= q.o.length) return q;
    const o = q.o.slice();
    [o[q.a], o[d]] = [o[d], o[q.a]];
    return { ...q, o, a: d };
  });
}

module.exports = { reparte, F, D, mapa, flecha, lienzo, t, lineas, tarjeta, ejes, graf, recta, triangulo, arbol, nube, barras, casillas, num, n2, esc };
