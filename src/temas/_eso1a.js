// Ayudas del lote A de 1º de ESO: Biología y Geología, Tecnología y Digitalización, Programación y robótica.
// Reutiliza las de 2º y 3º de ESO (ciencias y tecnología) y añade piezas que ajustan solas el tamaño de letra.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki, bl, SC, pila, bombilla, resis } = require("./_eso2a");

const C = "1-eso";
const REV = "2026-11-12";

// Tamaño de letra que cabe en un ancho w para un texto s (aprox. 0,58 em por carácter en negrita).
const cabe = (s, w, max = 12, k = 0.58) => Math.min(max, +(w / (String(s).replace(/<[^>]+>/g, "").length * k)).toFixed(1));

// Caja con texto centrado que nunca se sale: reduce la letra si hace falta.
const cj = (x, y, w, h, s, c = "var(--pen)", o = {}) => {
  const size = cabe(s, w - 10, o.size || 12);
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 8}" fill="${o.fill || c}" fill-opacity="${o.op ?? 0.14}" stroke="${c}" stroke-width="2"/>${t(x + w / 2, y + h / 2 + size * 0.36, s, { size, color: o.color || "var(--ink)" })}`;
};

// Caja con título y subtítulo (dos líneas), ajustadas al ancho.
const cj2 = (x, y, w, h, a, b, c = "var(--pen)", o = {}) => {
  const s1 = cabe(a, w - 10, o.size || 12), s2 = cabe(b, w - 10, (o.size || 12) - 2, 0.52);
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 8}" fill="${c}" fill-opacity="${o.op ?? 0.14}" stroke="${c}" stroke-width="2"/>${t(x + w / 2, y + h / 2 - 3, a, { size: s1, color: o.color || c })}${t(x + w / 2, y + h / 2 + s2 + 3, b, { size: s2, weight: 400 })}`;
};

// Figura de resumen: rejilla de fichas [título, texto, color] en un dibujo de 640 de ancho.
function rejilla(items, cols = 4, alto = 86, label = "Resumen del tema") {
  const gap = 12, m = 20, cw = (640 - 2 * m - gap * (cols - 1)) / cols;
  const filas = Math.ceil(items.length / cols), H = m * 2 + filas * alto + (filas - 1) * gap;
  const cajas = items.map(([a, b, col], i) => {
    const x = m + (i % cols) * (cw + gap), y = m + Math.floor(i / cols) * (alto + gap);
    const s1 = cabe(a, cw - 20, 15);
    let s2 = cabe(b, cw - 14, 11.5, 0.52), sub;
    if (s2 >= 10) sub = t(x + cw / 2, y + alto * 0.72, b, { size: s2, weight: 400 });
    else {
      // Texto largo: se parte en dos líneas por el espacio más cercano a la mitad.
      const sp = [...b].map((ch, i) => (ch === " " ? i : -1)).filter((i) => i > 0);
      const k = sp.reduce((m, i) => (Math.abs(i - b.length / 2) < Math.abs(m - b.length / 2) ? i : m), sp[0] || b.length);
      const l1 = b.slice(0, k), l2 = b.slice(k + 1);
      s2 = Math.min(cabe(l1, cw - 14, 11.5, 0.52), cabe(l2, cw - 14, 11.5, 0.52));
      sub = t(x + cw / 2, y + alto * 0.64, l1, { size: s2, weight: 400 }) + t(x + cw / 2, y + alto * 0.64 + s2 + 3, l2, { size: s2, weight: 400 });
    }
    return `<rect x="${x.toFixed(1)}" y="${y}" width="${cw.toFixed(1)}" height="${alto}" rx="12" fill="${col}" fill-opacity=".13" stroke="${col}" stroke-width="2.5"/>${t(x + cw / 2, y + alto * 0.36, a, { size: s1, color: col })}${sub}`;
  }).join("");
  return `<svg viewBox="0 0 640 ${H}" role="img" aria-label="${label}"><rect width="640" height="${H}" rx="16" fill="var(--paper)"/>${cajas}</svg>`;
}

// Etiqueta de texto suelta que cabe en un ancho máximo w.
const et = (x, y, s, w, o = {}) => t(x, y, s, { ...o, size: cabe(s, w, o.size || 11, o.weight === 400 ? 0.5 : 0.58) });

const COL = { verde: "var(--leaf)", azul: "var(--pen)", rojo: "var(--red)", sol: "#c98a00", agua: "var(--water)", gris: "var(--muted)", morado: "#8b5cf6", marron: "#a16207", naranja: "#e8892c" };

module.exports = { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki, bl, SC, pila, bombilla, resis, C, REV, cabe, cj, cj2, rejilla, et, COL };
