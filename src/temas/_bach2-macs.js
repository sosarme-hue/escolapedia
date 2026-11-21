// Ayudas de dibujo para Matemáticas Aplicadas a las Ciencias Sociales II (2º de Bachillerato) a nivel libro.
// Reutiliza las de Matemáticas II (matrices, determinantes, gráficas, campana de Gauss) y añade algunas propias.
// Todo son dibujos propios en SVG; los colores salen de las variables del tema (claro y oscuro).
const base = require("./_bach2-m2");
const { lienzo, t, graf, n2, flecha, fi } = base;

const G = (aria, o, fn) => graf(aria, { w: 260, h: 180, ...o }, fn);

// Región factible de programación lineal: polígono de vértices, rectas de las restricciones y, si se quiere, recta de nivel.
// o: { x0, x1, y0, y1, paso, rectas: [[a, b, c, color, rotulo]] (ax + by = c), vert: [[x, y, rotulo]], nivel: [a, b, k] , opt: [x, y] }
function region(aria, poli, o = {}) {
  const { rectas = [], vert = [], nivel = null, opt = null, ...ej } = o;
  return G(aria, { x0: -0.5, x1: 10, y0: -0.5, y1: 8, ...ej }, (E) => {
    let s = E.area(poli, "var(--leaf)", 0.26);
    const ley = [];
    rectas.forEach(([a, b, c, col = "var(--pen)", rot = ""]) => {
      if (Math.abs(b) > 1e-9) s += E.curva((x) => (c - a * x) / b, col, ej.x0 ?? -0.5, ej.x1 ?? 10, 2);
      else s += E.seg(c / a, ej.y0 ?? -0.5, c / a, ej.y1 ?? 8, col, 2);
      if (rot) ley.push([rot, col]);
    });
    // Leyenda de las rectas en la esquina superior derecha, sobre un fondo claro.
    if (ley.length) {
      const wl = Math.max(...ley.map(([r]) => r.length)) * 6 + 12, xr = E.w - 18;
      s += `<rect x="${xr - wl}" y="18" width="${wl + 4}" height="${ley.length * 13 + 6}" rx="5" fill="var(--paper)" fill-opacity=".92"/>`;
      ley.forEach(([r, col], i) => { s += t(xr, 30 + i * 13, r, { s: 10, b: 1, c: col, a: "end" }); });
    }
    if (nivel) { const [a, b, k] = nivel; s += E.curva((x) => (k - a * x) / b, "var(--red)", ej.x0 ?? -0.5, ej.x1 ?? 10, 2, 'stroke-dasharray="6 4"'); }
    vert.forEach(([x, y, r, dx = 6, dy = -6]) => { s += E.punto(x, y, "var(--ink)", r, dx, dy); });
    if (opt) s += `<circle cx="${E.X(opt[0])}" cy="${E.Y(opt[1])}" r="8" fill="none" stroke="var(--red)" stroke-width="2.4"/>`;
    return s;
  });
}

// Intervalo de confianza dibujado sobre una recta: centro, extremos y margen de error.
function intervalo(aria, a, c, b, o = {}) {
  const { w = 260, h = 180, cab = "", pie = "", ra = "", rc = "", rb = "", color = "var(--pen)" } = o;
  const X = (v) => n2(30 + ((v - a) / (b - a)) * (w - 60));
  let s = `<path d="M14 100 H ${w - 14}" stroke="var(--muted)" stroke-width="1.6"/>`;
  s += `<path d="M${X(a)} 100 H ${X(b)}" stroke="${color}" stroke-width="7" stroke-linecap="round" opacity=".8"/>`;
  s += `<path d="M${X(a)} 86 V 114 M${X(b)} 86 V 114" stroke="${color}" stroke-width="2.4"/><circle cx="${X(c)}" cy="100" r="6" fill="var(--red)"/>`;
  s += `<defs>${flecha("ic1", "var(--leaf)")}</defs><path d="M${X(c)} 70 H ${X(b) - 3}" stroke="var(--leaf)" stroke-width="1.8" marker-end="url(#ic1)"/>${t((+X(c) + +X(b)) / 2, 64, "E", { s: 12, b: 1, c: "var(--leaf)" })}`;
  s += t(X(a), 132, ra, { s: 11, b: 1 }) + t(X(c), 132, rc, { s: 11, b: 1, c: "var(--red)" }) + t(X(b), 132, rb, { s: 11, b: 1 });
  if (cab) s += t(w / 2, 26, cab, { s: 12, b: 1, c: "var(--pen)" });
  if (pie) s += t(w / 2, h - 16, pie, { s: 11.5, b: 1, c: "var(--red)" });
  return lienzo(aria, s, w, h);
}

// Campana de Gauss con varias zonas sombreadas (en unidades z): zonas = [[a, b, color, opacidad]].
// o: { rot: [[z, texto, color]], sig, mu, eti: [[z, y, texto, color]] } (eti: rótulos dentro del dibujo, y en unidades de densidad).
function normal(aria, zonas, o = {}) {
  const { w = 260, h = 180, c = "var(--pen)", rot = [], mu = "0", sig = null, eti = [] } = o;
  const X = (z) => n2(20 + ((z + 3.6) / 7.2) * (w - 40)), Y = (y) => n2(h - 30 - y * ((h - 50) / 0.42));
  let s = "", curva = "";
  zonas.forEach(([a, b, col = c, op = 0.3]) => {
    const A = Math.max(-3.6, a), B = Math.min(3.6, b);
    if (B <= A) return;
    let d = `M${X(A)} ${Y(0)} `;
    for (let i = 0; i <= 80; i++) { const z = A + ((B - A) * i) / 80; d += `L${X(z)} ${Y(fi(z))} `; }
    s += `<path d="${d}L${X(B)} ${Y(0)} Z" fill="${col}" fill-opacity="${op}"/>`;
  });
  for (let i = 0; i <= 140; i++) { const z = -3.6 + (7.2 * i) / 140; curva += `${i ? "L" : "M"}${X(z)} ${Y(fi(z))} `; }
  s += `<path d="M14 ${Y(0)} H ${w - 14}" stroke="var(--muted)" stroke-width="1.6"/><path d="${curva}" fill="none" stroke="${c}" stroke-width="2.6"/>`;
  s += `<path d="M${X(0)} ${Y(0)} V ${Y(fi(0))}" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 3"/>${t(X(0), Y(0) + 14, mu, { c: "var(--muted)", s: 10 })}`;
  rot.forEach(([z, txt, cc = "var(--red)"]) => { s += `<path d="M${X(z)} ${Y(0) - 4} V ${Y(0) + 4}" stroke="${cc}" stroke-width="2"/>${t(X(z), Y(0) + 14, txt, { c: cc, s: 10, b: 1 })}`; });
  eti.forEach(([z, y, txt, cc = "var(--ink)", sz = 11]) => { s += t(X(z), Y(y), txt, { c: cc, s: sz, b: 1 }); });
  if (sig) s += t(w / 2, 18, sig, { s: 12, b: 1, c: "var(--red)" });
  return lienzo(aria, s, w, h);
}

const RD = base.RD;
module.exports = { ...base, G, region, intervalo, normal, RD };
