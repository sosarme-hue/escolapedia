// Ayudas del lote D de 6º de Primaria (Inglés, Educación Plástica y Música). No es un tema: empieza por «_».
// Reutiliza los dibujos de _lenguas.js, _eso3.js y _eso2c.js (sin modificarlos), añade dibujos propios
// de plástica y música y un constructor de temas con formas cortas.
const { F, D, mapa } = require("./_util");
const L0 = require("./_lenguas");
const { svg, t, caja } = require("./_eso3");
const { penta, persona } = require("./_eso2c");
const VID = require("./_pri6d-videos");

// Con 4 turnos o más, el nombre del hablante va delante, en la misma línea.
const L = { ...L0, dialogo: (label, turnos) => L0.dialogo(label, turnos.length >= 4 ? turnos.map(([q, x, c]) => ["", q ? `${q}: ${x}` : x, c]) : turnos) };

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const AZ = "var(--pen)", RO = "var(--red)", VE = "var(--leaf)", NA = "var(--inf)", AM = "var(--sun)", AG = "var(--water)", MO = "var(--bac)";

// Tabla HTML con el estilo de la web (desplazable en el móvil).
const tb = (cab, filas) => `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

// La respuesta correcta se escribe la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo por clave de _pri6d-videos.js.
const vid = (k) => {
  if (!k) return undefined;
  const v = VID[k]; if (!v) throw new Error(`_pri6d: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) };
};

// Bloque: [título, cuerpo html, svg, clave de vídeo?]. En 6º cada bloque lleva siempre su dibujo.
const bloque = ([h, html, dibujo, v], titulo) => {
  if (!dibujo || !String(dibujo).trim().startsWith("<svg")) throw new Error(`_pri6d: el bloque «${h}» de «${titulo}» no tiene dibujo`);
  return { html: `<h3>${h}</h3>${html}`, svg: dibujo, ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas y comprobación de cantidades del formato ampliado.
function tema(o) {
  const n = { bloques: [8, 11], ejemplos: [3, 3], errores: [4, 6], ejercicios: [10, 10], quiz: [10, 10], tarjetas: [8, 8] };
  for (const [k, [a, b]] of Object.entries(n)) if (o[k].length < a || o[k].length > b) throw new Error(`_pri6d: «${o.titulo}» tiene ${o[k].length} ${k}`);
  return {
    materia: o.materia,
    curso: "6-primaria",
    titulo: o.titulo,
    minutos: o.minutos || 50,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map((b) => bloque(b, o.titulo)),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    ...(o.ejemplosTitulo ? { ejemplosTitulo: o.ejemplosTitulo } : {}),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: vid(o.video),
    quiz: preg(o.quiz),
    examen: preg(o.examen || [], 3),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 240),
    tarjetas: o.tarjetas,
    familias: [...o.familias, "Repasad juntos las tarjetas del paso 6 dos minutos al día durante una semana."],
    profesores: { saberes: `${o.saberes} (RD 157/2022, tercer ciclo de Primaria).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([x, url]) => ({ t: x, url }))],
    revisado: "2026-11-12",
  };
}

// ---------- Dibujos propios ----------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const tx = (x, y, s, o = {}) => t(x, y, esc(s), o);

// Círculo cromático de pigmentos (12 colores), con el amarillo arriba.
const C12 = ["#f2d21b", "#f5a81c", "#f07c1c", "#e8501f", "#d7262b", "#b5236e", "#7b2d8e", "#4b3a99", "#1e5bb0", "#1b8fae", "#239a52", "#8cc63f"];
const rueda = (cx, cy, r1, r2, cols = C12) => cols.map((c, i) => {
  const n = cols.length, a0 = ((i * 360) / n - 90 - 180 / n) * Math.PI / 180, a1 = (((i + 1) * 360) / n - 90 - 180 / n) * Math.PI / 180;
  const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  return `<path d="M${p(r1, a0)} L ${p(r2, a0)} A ${r2} ${r2} 0 0 1 ${p(r2, a1)} L ${p(r1, a1)} A ${r1} ${r1} 0 0 0 ${p(r1, a0)} Z" fill="${c}" stroke="var(--paper)" stroke-width="1.5"/>`;
}).join("");
// Posición del color i (0 = amarillo) en el círculo.
const enRueda = (cx, cy, r, i) => { const a = ((i * 30) - 90) * Math.PI / 180; return [+(cx + r * Math.cos(a)).toFixed(1), +(cy + r * Math.sin(a)).toFixed(1)]; };

// Muestras de color: [[color, texto], ...] en una fila.
const muestras = (y, items, w = 46, h = 34) => {
  const gap = 8, total = items.length * w + (items.length - 1) * gap, x0 = 130 - total / 2;
  return items.map(([c, s], i) => `<rect x="${x0 + i * (w + gap)}" y="${y}" width="${w}" height="${h}" rx="8" fill="${c}" stroke="var(--ink)" stroke-opacity=".25"/>${s ? tx(x0 + i * (w + gap) + w / 2, y + h + 14, s, { s: 10 }) : ""}`).join("");
};

// Suma de colores: [c1, n1] + [c2, n2] = [c3, n3].
const suma = (y, a, b, r) => {
  const bola = (x, [c, s]) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}" stroke="var(--ink)" stroke-opacity=".25"/>${tx(x, y + 36, s, { s: 10 })}`;
  return `${bola(48, a)}${tx(92, y + 6, "+", { s: 20, c: "var(--muted)" })}${bola(136, b)}${tx(180, y + 6, "=", { s: 20, c: "var(--muted)" })}${bola(220, r)}`;
};

// Perspectiva con un punto de fuga: horizonte, camino y una caja que se aleja.
const perspectiva1 = (label) => svg(label, `<path d="M10 70 H 250" stroke="${AG}" stroke-width="2"/>${tx(14, 64, "línea de horizonte", { s: 10, a: "start", c: AG })}
  <circle cx="130" cy="70" r="5" fill="${RO}"/>${tx(150, 56, "punto de fuga", { s: 10, c: RO, a: "start" })}
  <path d="M40 176 L 130 70 L 220 176" fill="var(--line)" fill-opacity=".5" stroke="var(--muted)" stroke-width="1.5"/>
  <path d="M130 70 L 30 100 M130 70 L 80 150 M130 70 L 80 100" stroke="${RO}" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M30 100 L 47.5 89.5 L 97.5 89.5 L 80 100 Z" fill="${AZ}" fill-opacity=".15" stroke="${AZ}" stroke-width="2"/>
  <path d="M80 100 L 97.5 89.5 L 97.5 122 L 80 150 Z" fill="${AZ}" fill-opacity=".45" stroke="${AZ}" stroke-width="2"/>
  <rect x="30" y="100" width="50" height="50" fill="${AZ}" fill-opacity=".25" stroke="${AZ}" stroke-width="2"/>
  ${[0, 1, 2, 3].map((i) => { const k = [1, 0.62, 0.4, 0.26][i], x = 130 + 70 * k, y = 70 + 106 * k; return `<path d="M${x} ${y} V ${y - 46 * k}" stroke="${VE}" stroke-width="${3 * k + 1}"/><circle cx="${x}" cy="${y - 52 * k}" r="${11 * k}" fill="${VE}"/>`; }).join("")}`);

// Perspectiva con dos puntos de fuga: la esquina de un edificio.
const perspectiva2 = (label) => svg(label, `<path d="M10 60 H 250" stroke="${AG}" stroke-width="2"/>
  <circle cx="16" cy="60" r="5" fill="${RO}"/><circle cx="244" cy="60" r="5" fill="${RO}"/>${tx(22, 48, "PF 1", { s: 10, c: RO, a: "start" })}${tx(238, 48, "PF 2", { s: 10, c: RO, a: "end" })}
  <path d="M16 60 L 120 26 M16 60 L 120 150 M244 60 L 120 26 M244 60 L 120 150" stroke="${RO}" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M120 26 L 120 150 L 62 99.8 L 62 45 Z" fill="${NA}" fill-opacity=".35" stroke="${NA}" stroke-width="2"/>
  <path d="M120 26 L 120 150 L 188 100.6 L 188 44.6 Z" fill="${NA}" fill-opacity=".6" stroke="${NA}" stroke-width="2"/>
  ${tx(130, 172, "las líneas van a dos puntos del horizonte", { s: 10, c: "var(--muted)" })}`);

// Tira de cómic con tres viñetas: [texto del bocadillo, color, onomatopeya?].
const comic = (label, vinetas) => svg(label, vinetas.map(([s, c, ono], i) => {
  const x = 10 + i * 82;
  return `<rect x="${x}" y="22" width="76" height="136" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
    ${s ? `<rect x="${x + 5}" y="30" width="66" height="34" rx="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x + 26} 64 l 4 12 l 6 -12" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x + 27} 63.5 h 8" stroke="var(--paper)" stroke-width="2"/>${s.split("|").map((l, j, a) => tx(x + 38, 44 + j * 12 + (a.length === 1 ? 6 : 0), l, { s: 9.5 })).join("")}` : ""}
    ${ono ? tx(x + 38, 52, ono, { s: 15, c: RO, d: true }) : ""}
    ${persona(x + 38, 96, c)}`;
}).join("") + tx(130, 15, "viñeta 1 → viñeta 2 → viñeta 3", { s: 10, c: "var(--muted)" }));

// Encuadres o planos: una persona más o menos cerca. items: [[nombre, escala, desplazamiento]].
const planos = (label, items) => svg(label, items.map(([n, k, dy], i) => {
  const x = 10 + i * 61, w = 56;
  return `<rect x="${x}" y="40" width="${w}" height="80" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
    <clipPath id="pl${i}${label.length}"><rect x="${x}" y="40" width="${w}" height="80" rx="4"/></clipPath>
    <g clip-path="url(#pl${i}${label.length})"><g transform="translate(${x + w / 2} ${80 + dy}) scale(${k})">
      <circle cx="0" cy="-22" r="9" fill="${AM}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="-3" cy="-23" r="1.2" fill="var(--ink)"/><circle cx="3" cy="-23" r="1.2" fill="var(--ink)"/>
      <path d="M-10 -10 h 20 l 3 24 h -26 z" fill="${AZ}"/><path d="M-8 14 v 18 M8 14 v 18" stroke="var(--ink)" stroke-width="3"/>
    </g></g>${tx(x + w / 2, 138, n, { s: 9.5 })}`;
}).join("") + tx(130, 26, "Del más lejano al más cercano", { s: 11, c: "var(--muted)" }));

// Cuadrícula de píxeles: filas de texto, cada carácter es una clave de la paleta («.» = vacío).
const pixeles = (label, filas, paleta, o = {}) => {
  const n = filas.length, m = filas[0].length, k = o.k || Math.min(Math.floor(150 / n), Math.floor(150 / m));
  const x0 = o.x ?? Math.round(130 - (m * k) / 2), y0 = o.y ?? Math.round(90 - (n * k) / 2);
  let s = `<rect x="${x0}" y="${y0}" width="${m * k}" height="${n * k}" fill="var(--card)"/>`;
  filas.forEach((f, j) => [...f].forEach((ch, i) => { if (paleta[ch]) s += `<rect x="${x0 + i * k}" y="${y0 + j * k}" width="${k}" height="${k}" fill="${paleta[ch]}"/>`; }));
  for (let i = 0; i <= m; i++) s += `<path d="M${x0 + i * k} ${y0} V ${y0 + n * k}" stroke="var(--line)" stroke-width=".8"/>`;
  for (let j = 0; j <= n; j++) s += `<path d="M${x0} ${y0 + j * k} H ${x0 + m * k}" stroke="var(--line)" stroke-width=".8"/>`;
  return o.solo ? s : svg(label, s + (o.extra || ""));
};

// Polígono regular centrado en (x, y).
const pol = (x, y, r, n, c, rot = -90, o = {}) => {
  const p = [...Array(n)].map((_, i) => { const a = (rot + (i * 360) / n) * Math.PI / 180; return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`; }).join(" ");
  return `<polygon points="${p}" fill="${c}" fill-opacity="${o.op ?? 0.75}" stroke="${o.st || "var(--ink)"}" stroke-width="${o.sw ?? 1.2}"/>`;
};

// Mosaico de hexágonos.
const panal = (x0, y0, cols, rows, r, colores) => {
  let s = ""; const w = Math.sqrt(3) * r;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) s += pol(x0 + i * w + (j % 2 ? w / 2 : 0), y0 + j * r * 1.5, r, 6, colores[(i + j * 2) % colores.length], -90, { op: 0.8, st: "var(--paper)", sw: 2 });
  return s;
};

// Onda dibujada con curvas: altura y (centro), amplitud, número de ondas, color.
const onda = (y, amp, n, c, x0 = 30, x1 = 230) => {
  const paso = (x1 - x0) / (n * 2);
  let d = `M${x0} ${y}`;
  for (let i = 0; i < n * 2; i++) d += ` Q ${(x0 + paso * (i + 0.5)).toFixed(1)} ${i % 2 ? y + amp * 2 : y - amp * 2} ${(x0 + paso * (i + 1)).toFixed(1)} ${y}`;
  return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4"/>`;
};

// Clave de sol sencilla (dibujo propio) sobre un pentagrama que empieza en y0 con separación g.
const claveSol = (x, y0, g = 10) => { const k = g / 10, Y = (v) => (y0 + v * k).toFixed(1), X = (v) => (x + v * k).toFixed(1);
  return `<path d="M${X(1)} ${Y(-14)} C ${X(9)} ${Y(-6)} ${X(8)} ${Y(4)} ${X(-2)} ${Y(14)} C ${X(-10)} ${Y(22)} ${X(-8)} ${Y(36)} ${X(2)} ${Y(37)} C ${X(10)} ${Y(37)} ${X(11)} ${Y(26)} ${X(3)} ${Y(25)} C ${X(-3)} ${Y(25)} ${X(-4)} ${Y(32)} ${X(1)} ${Y(33)} M${X(1)} ${Y(-14)} C ${X(-3)} ${Y(-10)} ${X(-3)} ${Y(-4)} ${X(-1)} ${Y(4)} L ${X(4)} ${Y(46)} C ${X(5)} ${Y(52)} ${X(-3)} ${Y(53)} ${X(-3)} ${Y(48)}" fill="none" stroke="var(--ink)" stroke-width="${(2 * k).toFixed(1)}" stroke-linecap="round"/><circle cx="${X(-3)}" cy="${Y(48)}" r="${(2.6 * k).toFixed(1)}" fill="var(--ink)"/>`; };

// Pentagrama con notas: notas = [[paso, opciones]] repartidas a lo ancho. paso 0 = mi (1.ª línea).
const partitura = (label, notas, o = {}) => {
  const x0 = 16, x1 = 244, y0 = o.y0 || 64, g = o.g || 11;
  const P = penta(x0, x1, y0, g);
  const xi = o.x0 || 62, paso = (x1 - 14 - xi) / Math.max(1, notas.length);
  let s = P.s + (o.clave === false ? "" : claveSol(x0 + 12, y0, g));
  if (o.compas) s += t(x0 + 36, y0 + 1.7 * g, o.compas[0], { s: 15, d: true }) + t(x0 + 36, y0 + 3.7 * g, o.compas[1], { s: 15, d: true });
  notas.forEach(([p, op = {}], i) => {
    const x = xi + paso * (i + 0.5);
    if (op.barra) s += P.barra(x);
    else if (op.silencio) s += silencio(x, y0, g, op.silencio);
    else s += P.nota(x, p, op);
    if (op.txt) s += tx(x, y0 + 4 * g + 26, op.txt, { s: 10, c: op.c || "var(--ink)" });
  });
  if (o.fin) s += `<path d="M${x1 - 6} ${y0} V ${y0 + 4 * g}" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x1 - 2} ${y0} V ${y0 + 4 * g}" stroke="var(--ink)" stroke-width="3"/>`;
  return svg(label, s + (o.extra || ""));
};
// Silencios dibujados de forma simple: "negra", "blanca", "redonda".
const silencio = (x, y0, g, tipo) => tipo === "blanca" ? `<rect x="${x - 6}" y="${y0 + 1.5 * g}" width="12" height="${g / 2}" fill="var(--ink)"/>`
  : tipo === "redonda" ? `<rect x="${x - 6}" y="${y0 + g}" width="12" height="${g / 2}" fill="var(--ink)"/>`
    : `<path d="M${x - 2} ${y0 + 0.6 * g} l 5 6 l -5 6 l 5 6 c -6 -2 -8 4 -2 8" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linejoin="round"/>`;

// Figura musical suelta (para tablas de duraciones), dibujada en (x, y) = centro de la cabeza.
const figuraNota = (x, y, tipo, c = "var(--ink)") => {
  const hueca = tipo === "redonda" || tipo === "blanca";
  let s = `<ellipse cx="${x}" cy="${y}" rx="7" ry="5" transform="rotate(-20 ${x} ${y})" fill="${hueca ? "var(--paper)" : c}" stroke="${c}" stroke-width="2"/>`;
  if (tipo !== "redonda") s += `<path d="M${x + 6.5} ${y - 1} V ${y - 32}" stroke="${c}" stroke-width="1.8"/>`;
  if (tipo === "corchea" || tipo === "semicorchea") s += `<path d="M${x + 6.5} ${y - 32} q 9 8 6 20" fill="none" stroke="${c}" stroke-width="1.8"/>`;
  if (tipo === "semicorchea") s += `<path d="M${x + 6.5} ${y - 24} q 9 8 6 20" fill="none" stroke="${c}" stroke-width="1.8"/>`;
  return s;
};

// Orquesta vista desde arriba: cuerda delante, viento madera y metal detrás, percusión al fondo.
const orquesta = (label) => {
  const cx = 130, cy = 172, kx = 0.82;
  const banda = (r1, r2, c) => {
    const p = (r, a) => `${(cx + r * kx * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(cy - r * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
    return `<path d="M${p(r1, 8)} L ${p(r2, 8)} A ${r2 * kx} ${r2} 0 0 0 ${p(r2, 172)} L ${p(r1, 172)} A ${r1 * kx} ${r1} 0 0 1 ${p(r1, 8)} Z" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.5"/>`;
  };
  return svg(label, `${banda(128, 152, NA)}${banda(98, 124, AM)}${banda(66, 94, VE)}${banda(22, 62, AZ)}
    ${tx(cx, 33, "percusión", { s: 11 })}${tx(cx, 63, "viento metal", { s: 11 })}${tx(cx, 95, "viento madera", { s: 11 })}${tx(cx, 134, "cuerda", { s: 11 })}
    ${tx(cx - 36, 160, "violines", { s: 8.5 })}${tx(cx + 36, 160, "cellos", { s: 8.5 })}
    <circle cx="${cx}" cy="${cy - 6}" r="5" fill="${RO}"/><circle cx="16" cy="16" r="5" fill="${RO}"/>${tx(25, 20, "director", { s: 10, c: RO, a: "start" })}`);
};

module.exports = { F, D, mapa, L, RD, AZ, RO, VE, NA, AM, AG, MO, tb, tema, preg, vid, svg, t, tx, caja, penta, persona, C12, rueda, enRueda, muestras, suma, perspectiva1, perspectiva2, comic, planos, pixeles, pol, panal, onda, claveSol, partitura, silencio, figuraNota, orquesta, esc };
