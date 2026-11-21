// Ayudas de dibujo para Matemáticas II (2º de Bachillerato) a nivel libro.
// Todo son dibujos propios en SVG; los colores salen de las variables del tema (claro y oscuro).
const base = require("./_bach1L1");
const { lienzo, t, n2, flecha } = base;

// Matriz con corchetes. m = [[...], ...]; o: { x, y (centro), cw, ch, c (color), s (tamaño), resalta: [[i, j, color]] , fila: i, col: j }
function matriz(m, o = {}) {
  const { x = 130, y = 90, cw = 30, ch = 24, c = "var(--pen)", s = 13, resalta = [], fila = -1, col = -1, barra = -1 } = o;
  const nf = m.length, nc = m[0].length, W = nc * cw, H = nf * ch, x0 = x - W / 2, y0 = y - H / 2;
  let g = "";
  if (fila >= 0) g += `<rect x="${n2(x0 - 2)}" y="${n2(y0 + fila * ch + 1)}" width="${n2(W + 4)}" height="${n2(ch - 2)}" rx="6" fill="var(--red)" fill-opacity=".14"/>`;
  if (col >= 0) g += `<rect x="${n2(x0 + col * cw + 1)}" y="${n2(y0 - 2)}" width="${n2(cw - 2)}" height="${n2(H + 4)}" rx="6" fill="var(--leaf)" fill-opacity=".16"/>`;
  resalta.forEach(([i, j, cc]) => { g += `<rect x="${n2(x0 + j * cw + 2)}" y="${n2(y0 + i * ch + 2)}" width="${n2(cw - 4)}" height="${n2(ch - 4)}" rx="5" fill="${cc}" fill-opacity=".22"/>`; });
  m.forEach((f, i) => f.forEach((v, j) => { g += t(x0 + j * cw + cw / 2, y0 + i * ch + ch / 2 + s * 0.36, String(v), { s, b: 1 }); }));
  if (barra > 0) g += `<path d="M${n2(x0 + barra * cw)} ${n2(y0 + 2)} V ${n2(y0 + H - 2)}" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="3 2"/>`;
  const br = (xx, d) => `<path d="M${n2(xx + d * 6)} ${n2(y0 - 2)} H ${n2(xx)} V ${n2(y0 + H + 2)} H ${n2(xx + d * 6)}" stroke="${c}" stroke-width="2.2" fill="none"/>`;
  return g + br(x0 - 3, 1) + br(x0 + W + 3, -1);
}

// Determinante (barras verticales).
function deter(m, o = {}) {
  const { x = 130, y = 90, cw = 30, ch = 24, c = "var(--pen)", s = 13, resalta = [] } = o;
  const nf = m.length, nc = m[0].length, W = nc * cw, H = nf * ch, x0 = x - W / 2, y0 = y - H / 2;
  let g = "";
  resalta.forEach(([i, j, cc]) => { g += `<rect x="${n2(x0 + j * cw + 2)}" y="${n2(y0 + i * ch + 2)}" width="${n2(cw - 4)}" height="${n2(ch - 4)}" rx="5" fill="${cc}" fill-opacity=".22"/>`; });
  m.forEach((f, i) => f.forEach((v, j) => { g += t(x0 + j * cw + cw / 2, y0 + i * ch + ch / 2 + s * 0.36, String(v), { s, b: 1 }); }));
  return g + `<path d="M${n2(x0 - 3)} ${n2(y0 - 2)} V ${n2(y0 + H + 2)} M${n2(x0 + W + 3)} ${n2(y0 - 2)} V ${n2(y0 + H + 2)}" stroke="${c}" stroke-width="2.2"/>`;
}

// Fila de piezas: [{m, tipo:"mat"|"det", ...opciones} | "texto"] repartidas a lo ancho del lienzo.
function fila(aria, piezas, o = {}) {
  const { w = 260, h = 180, y = 90, pie = "", cab = "", cw = 26, ch = 22, s = 12 } = o;
  const anchos = piezas.map((p) => (typeof p === "string" ? Math.max(14, p.length * 7.2) : p.m[0].length * (p.cw || cw) + 14));
  const total = anchos.reduce((a, b) => a + b, 0) + (piezas.length - 1) * 6;
  let x = w / 2 - total / 2, g = "";
  piezas.forEach((p, i) => {
    const cx = x + anchos[i] / 2;
    if (typeof p === "string") g += t(cx, y + 5, p, { s: 14, b: 1, c: "var(--ink)" });
    else g += (p.tipo === "det" ? deter : matriz)(p.m, { cw, ch, s, ...p, x: cx, y });
    x += anchos[i] + 6;
  });
  if (cab) g += t(w / 2, 22, cab, { s: 12, b: 1, c: "var(--pen)" });
  if (pie) g += t(w / 2, h - 14, pie, { s: 11.5, b: 1, c: "var(--red)" });
  return lienzo(aria, g, w, h);
}

// Espacio 3D en perspectiva caballera. Devuelve { svg, P, punto, seg, vec, poli, lab, w, h }.
// o: { w, h, esc (px por unidad), ox, oy (origen en pantalla), k (reducción del eje X), ang (grados del eje X), L (largo de ejes) }
let k3 = 0;
function espacio(o = {}) {
  const { w = 260, h = 180, esc = 22, ox = 110, oy = 120, k = 0.55, ang = 215, L = [4, 5, 3.6], ejesVis = true } = o;
  const a = (ang * Math.PI) / 180;
  const P = (x, y, z) => [n2(ox + esc * (y + k * x * Math.cos(a))), n2(oy - esc * (z + k * x * Math.sin(a)))];
  const id = `e3${++k3}`;
  let svg = `<defs>${flecha(id + "m", "var(--muted)")}</defs>`;
  if (ejesVis) {
    const ejes = [[[L[0], 0, 0], "X"], [[0, L[1], 0], "Y"], [[0, 0, L[2]], "Z"]];
    ejes.forEach(([q, n]) => {
      const [x1, y1] = P(...q), [x0, y0] = P(0, 0, 0);
      svg += `<path d="M${x0} ${y0} L ${x1} ${y1}" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#${id}m)"/>${t(x1 + (n === "X" ? -8 : n === "Y" ? 6 : 8), y1 + (n === "Z" ? 4 : 12), n, { c: "var(--muted)", s: 11, b: 1 })}`;
    });
  }
  const punto = (q, c = "var(--red)", lab = "", dx = 6, dy = -6) => { const [x, y] = P(...q); return `<circle cx="${x}" cy="${y}" r="3.8" fill="${c}"/>${lab ? t(x + dx, y + dy, lab, { c, s: 11, b: 1, a: dx < 0 ? "end" : "start" }) : ""}`; };
  const seg = (q1, q2, c = "var(--pen)", wd = 2.2, extra = "") => { const [x1, y1] = P(...q1), [x2, y2] = P(...q2); return `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="${wd}" fill="none" ${extra}/>`; };
  let kv = 0;
  const vec = (q1, q2, c = "var(--pen)", lab = "", dx = 6, dy = -6) => {
    const mid = `${id}v${++kv}`; const [x1, y1] = P(...q1), [x2, y2] = P(...q2);
    return `<defs>${flecha(mid, c)}</defs><path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="2.6" fill="none" marker-end="url(#${mid})"/>${lab ? t(x2 + dx, y2 + dy, lab, { c, s: 12, b: 1, a: dx < 0 ? "end" : "start" }) : ""}`;
  };
  const poli = (qs, c = "var(--pen)", op = 0.16, borde = true) => `<path d="M${qs.map((q) => P(...q).join(" ")).join(" L ")} Z" fill="${c}" fill-opacity="${op}" stroke="${borde ? c : "none"}" stroke-width="1.6" stroke-linejoin="round"/>`;
  const lab = (q, s, c = "var(--ink)", dx = 0, dy = 0, a = "middle") => { const [x, y] = P(...q); return t(x + dx, y + dy, s, { c, s: 11, b: 1, a }); };
  return { svg, P, punto, seg, vec, poli, lab, w, h };
}
const esp = (aria, o, fn) => { const E = espacio(o); return lienzo(aria, E.svg + fn(E), E.w, E.h); };

// Curva normal estándar con área sombreada entre a y b (en unidades z).
const fi = (z) => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
function campana(aria, a, b, o = {}) {
  const { w = 260, h = 180, c = "var(--pen)", rot = [], mu = "0", sig = null } = o;
  const X = (z) => n2(20 + ((z + 3.6) / 7.2) * (w - 40)), Y = (y) => n2(h - 30 - y * ((h - 50) / 0.42));
  let curva = "", area = "";
  for (let i = 0; i <= 140; i++) { const z = -3.6 + (7.2 * i) / 140; curva += `${i ? "L" : "M"}${X(z)} ${Y(fi(z))} `; }
  const A = Math.max(-3.6, a), B = Math.min(3.6, b);
  if (B > A) { area = `M${X(A)} ${Y(0)} `; for (let i = 0; i <= 80; i++) { const z = A + ((B - A) * i) / 80; area += `L${X(z)} ${Y(fi(z))} `; } area += `L${X(B)} ${Y(0)} Z`; }
  let s = `${area ? `<path d="${area}" fill="${c}" fill-opacity=".28"/>` : ""}<path d="M14 ${Y(0)} H ${w - 14}" stroke="var(--muted)" stroke-width="1.6"/><path d="${curva}" fill="none" stroke="${c}" stroke-width="2.6"/>`;
  s += `<path d="M${X(0)} ${Y(0)} V ${Y(fi(0))}" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"/>${t(X(0), Y(0) + 14, mu, { c: "var(--muted)", s: 10 })}`;
  rot.forEach(([z, txt, cc = "var(--red)"]) => { s += `<path d="M${X(z)} ${Y(0) - 4} V ${Y(0) + 4}" stroke="${cc}" stroke-width="2"/>${t(X(z), Y(0) + 14, txt, { c: cc, s: 10, b: 1 })}`; });
  if (sig) s += t(w / 2, 18, sig, { s: 12, b: 1, c: "var(--red)" });
  return lienzo(aria, s, w, h);
}

module.exports = { ...base, matriz, deter, fila, espacio, esp, campana, fi };
