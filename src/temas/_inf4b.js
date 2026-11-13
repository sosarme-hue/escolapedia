// Ayudas para los temas de Infantil 4 años, lote B (Comunicación, Inglés, Catalán y Religión).
// No es un tema: empieza por "_". Reúne los dibujos de _peque y _pri1-dib y añade unos pocos más.
// Todo en tarjetas de 260×180 con los colores de la web (se ven bien en modo claro y oscuro).
const P = require("./_peque");
const Dib = require("./_pri1-dib");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", W = "var(--water)", G = "var(--muted)", K = "var(--ink)";
const MARRON = "#8a5a2b", LILA = "#8a5cc7", ROSA = "#f08fb0";

// Formas básicas centradas en (x, y), de lado o diámetro «t».
function forma(tipo, x, y, t = 40, c = A, relleno = true) {
  const f = relleno ? c : "var(--card)", h = t / 2;
  const st = `stroke="${c}" stroke-width="3" stroke-linejoin="round"`;
  if (tipo === "circulo") return `<circle cx="${x}" cy="${y}" r="${h}" fill="${f}" ${st}/>`;
  if (tipo === "cuadrado") return `<rect x="${x - h}" y="${y - h}" width="${t}" height="${t}" rx="3" fill="${f}" ${st}/>`;
  if (tipo === "triangulo") return `<path d="M${x} ${y - h} L${x + h + 3} ${y + h} L${x - h - 3} ${y + h}z" fill="${f}" ${st}/>`;
  if (tipo === "rectangulo") return `<rect x="${x - t * 0.75}" y="${y - h * 0.65}" width="${t * 1.5}" height="${t * 0.65}" rx="3" fill="${f}" ${st}/>`;
  throw new Error(`[inf4b] forma desconocida «${tipo}»`);
}

// Cara de un dado con «n» puntos (1 a 6), centrada en (x, y).
function dado(x, y, n, t = 40, c = A) {
  const h = t / 2, q = t * 0.27, r = t * 0.09;
  const P6 = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] }[n];
  return `<g><rect x="${x - h}" y="${y - h}" width="${t}" height="${t}" rx="${t * 0.18}" fill="var(--card)" stroke="${c}" stroke-width="3"/>${P6.map(([i, j]) => `<circle cx="${(x + i * q).toFixed(1)}" cy="${(y + j * q).toFixed(1)}" r="${r.toFixed(1)}" fill="${c}"/>`).join("")}</g>`;
}

// Trazos para repasar: recto, ondas, zigzag, bucles y espiral. (x, y) = inicio a la izquierda; w = ancho.
function trazo(tipo, x, y, w = 200, c = A, punteado = false) {
  const st = `stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"${punteado ? ' stroke-dasharray="2 9"' : ""}`;
  if (tipo === "recto") return `<path d="M${x} ${y} H${x + w}" ${st}/>`;
  if (tipo === "vertical") return `<path d="M${x} ${y} V${y + w}" ${st}/>`;
  if (tipo === "ondas") { const n = 4, p = w / n; return `<path d="M${x} ${y} ${[...Array(n)].map((_, i) => `q${p / 4} ${i % 2 ? 18 : -18} ${p / 2} 0 q${p / 4} ${i % 2 ? -18 : 18} ${p / 2} 0`).join(" ")}" ${st}/>`; }
  if (tipo === "zigzag") { const n = 8, p = w / n; return `<path d="M${x} ${y} ${[...Array(n)].map((_, i) => `l${p} ${i % 2 ? 22 : -22}`).join(" ")}" ${st}/>`; }
  if (tipo === "bucles") { const n = 5, p = w / n; return `<path d="M${x} ${y} ${[...Array(n)].map(() => `c${p * 0.9} 0 ${p * 0.9} -26 ${p * 0.45} -26 c${-p * 0.45} 0 ${-p * 0.45} 26 ${p * 0.55} 26`).join(" ")}" ${st}/>`; }
  if (tipo === "espiral") {
    const pts = [];
    for (let a = 0; a <= Math.PI * 6; a += 0.2) { const r = 2 + a * (w / 2 - 2) / (Math.PI * 6); pts.push(`${(x + Math.cos(a) * r).toFixed(1)} ${(y + Math.sin(a) * r).toFixed(1)}`); }
    return `<path d="M${pts.join(" L")}" ${st}/>`;
  }
  throw new Error(`[inf4b] trazo desconocido «${tipo}»`);
}

// Máscara de teatro (contenta o triste), centrada en (x, y).
const mascara = (x, y, feliz = true, c = M, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-24 -24 Q0 -32 24 -24 Q26 6 0 26 Q-26 6 -24 -24z" fill="${c}" stroke="var(--ink)" stroke-width="2"/>
  <path d="M-14 -10 q5 ${feliz ? -6 : 4} 10 0 M4 -10 q5 ${feliz ? -6 : 4} 10 0" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M-10 ${feliz ? 6 : 12} q10 ${feliz ? 10 : -10} 20 0" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;

// Títere de guante sobre un teatrillo. (x, y) = centro de la ventana del teatrillo.
const teatrillo = (x, y, w = 150, h = 90) => `<g><rect x="${x - w / 2 - 14}" y="${y - h / 2 - 22}" width="${w + 28}" height="${h + 70}" rx="6" fill="${R}"/>
  <rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="var(--card)"/>
  <path d="M${x - w / 2} ${y - h / 2} q${w / 4} ${h * 0.5} 0 ${h} M${x + w / 2} ${y - h / 2} q${-w / 4} ${h * 0.5} 0 ${h}" fill="${M}" opacity=".9"/>
  <rect x="${x - w / 2 - 14}" y="${y + h / 2}" width="${w + 28}" height="10" fill="${MARRON}"/></g>`;
const titere = (x, y, c = V, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 30 V4 Q-16 -6 0 -6 Q16 -6 16 4 V30z" fill="${c}"/>
  <circle cy="-18" r="14" fill="#f3c9a1"/><circle cx="-5" cy="-20" r="2" fill="var(--ink)"/><circle cx="5" cy="-20" r="2" fill="var(--ink)"/>
  <path d="M-5 -13 q5 5 10 0" stroke="var(--ink)" stroke-width="2" fill="none"/><path d="M-14 -24 q14 -18 28 0 q-14 -8 -28 0z" fill="${R}"/></g>`;

// Libro abierto, centrado en (x, y).
const libro = (x, y, s = 1, c = A) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -20 Q-22 -30 -46 -24 V24 Q-22 18 0 28 Q22 18 46 24 V-24 Q22 -30 0 -20z" fill="var(--card)" stroke="${c}" stroke-width="3"/><path d="M0 -20 V28" stroke="${c}" stroke-width="2.5"/>${[0, 1, 2].map((i) => `<path d="M-38 ${-10 + i * 10} H-8 M8 ${-10 + i * 10} H38" stroke="var(--line)" stroke-width="2.5"/>`).join("")}</g>`;

// Huevo de Pascua decorado.
const huevo = (x, y, c = N, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="16" ry="21" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M-15 -4 l6 -5 l6 5 l6 -5 l6 5 l6 -5" stroke="var(--card)" stroke-width="2.5" fill="none"/><circle cx="-6" cy="8" r="3" fill="var(--card)"/><circle cx="6" cy="8" r="3" fill="var(--card)"/></g>`;

// Sepulcro con la piedra corrida (la tumba vacía).
const tumba = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-60 0 Q-60 -64 0 -64 Q60 -64 60 0z" fill="${G}" opacity=".55" stroke="var(--ink)" stroke-width="2"/><path d="M-22 0 Q-22 -34 0 -34 Q22 -34 22 0z" fill="#1c2550"/><circle cx="52" cy="-22" r="24" fill="${G}" stroke="var(--ink)" stroke-width="2"/></g>`;

// Pesebre con el niño Jesús (cuna de paja), centrado en (x, y).
const pesebre = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 -10 L30 -10 L22 12 L-22 12z" fill="${MARRON}"/><path d="M-28 12 L-34 26 M28 12 L34 26" stroke="${MARRON}" stroke-width="4"/>
  <path d="M-26 -10 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0" stroke="${M}" stroke-width="3" fill="none"/><ellipse cy="-14" rx="16" ry="7" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/><circle cx="-14" cy="-18" r="7" fill="#f3c9a1"/></g>`;

// Jesús: una figura con túnica (pie o brazos abiertos), con el pelo y la barba marrones.
function jesus(x, y, { s = 1, brazos = false } = {}) {
  return `<g transform="translate(${x} ${y}) scale(${s})" stroke-linecap="round"><path d="M-14 0 L-9 -50 Q0 -56 9 -50 L14 0z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/>
    <path d="M-4 -50 L4 0" stroke="${R}" stroke-width="5" opacity=".75"/>
    <path d="${brazos ? "M-8 -46 L-26 -58 M8 -46 L26 -58" : "M-8 -46 L-16 -24 M8 -46 L16 -24"}" stroke="#f3c9a1" stroke-width="4.5"/>
    <circle cy="-62" r="10" fill="#f3c9a1"/><path d="M-11 -60 q0 -14 11 -14 q11 0 11 14 l-3 -6 q-8 -4 -16 0z" fill="#5a3a1b"/>
    <path d="M-8 -58 q8 14 16 0" stroke="#5a3a1b" stroke-width="3" fill="none"/>
    <circle cx="-3.5" cy="-63" r="1.3" fill="var(--ink)"/><circle cx="3.5" cy="-63" r="1.3" fill="var(--ink)"/></g>`;
}

// Secuencia de viñetas numeradas (3 o 4): [dibujo de _peque o "", palabra, color, extra SVG opcional centrado en 0,0].
function secuencia(label, items, { titulo: t, nota: n } = {}) {
  const k = items.length, gap = 8, w = (244 - gap * (k - 1)) / k, top = t ? 32 : 12, h = (n ? 140 : 160) - top;
  let out = t ? Dib.rot(130, 22, t, { size: 14, color: G }) : "";
  items.forEach(([d, p, c, extra], i) => {
    const x = 8 + i * (w + gap), cx = x + w / 2;
    out += `<rect x="${x.toFixed(1)}" y="${top}" width="${w.toFixed(1)}" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <circle cx="${(x + 13).toFixed(1)}" cy="${top + 13}" r="10" fill="${c}"/>${Dib.rot(x + 13, top + 18, i + 1, { size: 13, color: "#fff", w: 800 })}
      ${d ? P.ic(d, cx, top + h * 0.45, k > 3 ? 0.95 : 1.15) : ""}${extra ? `<g transform="translate(${cx.toFixed(1)} ${(top + h * 0.45).toFixed(1)})">${extra}</g>` : ""}
      ${Dib.rot(cx, top + h - 12, p, { size: k > 3 ? 12 : 14, color: c })}`;
    if (i < k - 1) out += Dib.rot(x + w + gap / 2, top + h / 2 + 5, "›", { size: 18, color: G, w: 800 });
  });
  if (n) out += Dib.rot(130, 166, n, { size: 13 });
  return Dib.svg(label, out);
}

// Infantil: RD 95/2022 (segundo ciclo).
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022, segundo ciclo de Educación Infantil, 4 años).`, ideas });
const FUENTES = [{ t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" }];

module.exports = {
  ...P, ...Dib, R, A, V, N, M, W, G, K, MARRON, LILA, ROSA,
  forma, dado, trazo, secuencia, mascara, teatrillo, titere, libro, huevo, tumba, pesebre, jesus, PROF, FUENTES,
};
