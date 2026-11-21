// Ayudas para Química de 2º de Bachillerato (nivel libro). Reutiliza los dibujos de 260 × 180,
// la figura y el mapa de 1º de Bachillerato, y añade los vídeos y el currículo de 2º.
const L = require("./_bach1L2");
const { T, marco, fit } = L;

// Vídeos elegidos con tools/videos.py (los más vistos en castellano, sin repetir ids de otros temas). El título lo pone cada tema.
const VID = {
  "at-a": { id: "8lX8FjjLKhc", canal: "Es Ciencia", vistas: 2528582 },
  "at-b": { id: "1uPyq63aRvg", canal: "Bozeman Science", vistas: 1057916 },
  "at-c": { id: "zwisiN5XWh8", canal: "Amigos de la Química", vistas: 3060290 },
  "at-d": { id: "LBEq1rhRbC4", canal: "QuantumFracture", vistas: 1633692 },
  "per-a": { id: "4MMvumKmqs4", canal: "Amigos de la Química", vistas: 6062208 },
  "per-b": { id: "F1u-_vnGo8o", canal: "Amigos de la Química", vistas: 947936 },
  "per-c": { id: "SksNXasRax8", canal: "Amigos de la Química", vistas: 1143733 },
  "ion-a": { id: "WnVFcnGvJ-Y", canal: "Amigos de la Química", vistas: 5423787 },
  "ion-b": { id: "UR66eHziB-c", canal: "Amigos de la Química", vistas: 342207 },
  "ion-c": { id: "BcdyqMYled0", canal: "Breaking Vlad", vistas: 211888 },
  "cov-a": { id: "dWh4wf5VgMs", canal: "Amigos de la Química", vistas: 5398202 },
  "cov-b": { id: "yyETY2ARd3g", canal: "Amigos de la Química", vistas: 1460361 },
  "cov-c": { id: "vR-C_IXBTOw", canal: "Amigos de la Química", vistas: 1411077 },
  "cov-d": { id: "DS0v0RWUwCI", canal: "Amigos de la Química", vistas: 2357087 },
  "td-a": { id: "eqkVJ3YbdEI", canal: "Amigos de la Química", vistas: 1058552 },
  "td-b": { id: "eS0wlgyHAwI", canal: "Amigos de la Química", vistas: 349675 },
  "td-c": { id: "g0fvXJutbGY", canal: "Breaking Vlad", vistas: 252370 },
  "cin-a": { id: "DE3_F5TVX8o", canal: "Amigos de la Química", vistas: 1440135 },
  "cin-b": { id: "hNKOs6snniY", canal: "Amigos de la Química", vistas: 937597 },
  "cin-c": { id: "-6Vs2Nx6E84", canal: "unicoos", vistas: 250087 },
  "eq-a": { id: "VQjIP087SSY", canal: "Amigos de la Química", vistas: 1927824 },
  "eq-b": { id: "H8jnOxZNe8o", canal: "Amigos de la Química", vistas: 802112 },
  "eq-c": { id: "rceBhFfKuw0", canal: "Quimiayudas", vistas: 711191 },
  "eq-d": { id: "vmZ5x0V_ecQ", canal: "Amigos de la Química", vistas: 432431 },
  "sol-a": { id: "3jLQwrtDhqY", canal: "Amigos de la Química", vistas: 783320 },
  "sol-b": { id: "UfaWCckmY78", canal: "Breaking Vlad", vistas: 227198 },
  "sol-c": { id: "cZx5jOdB3C8", canal: "Quimitube Tu libro de Química", vistas: 113224 },
  "ab-a": { id: "Igb21Z5_KKI", canal: "Amigos de la Química", vistas: 1102762 },
  "ab-b": { id: "GW4qEfnFkkw", canal: "Amigos de la Química", vistas: 448353 },
  "ab-c": { id: "tHv-InFjfa4", canal: "Amigos de la Química", vistas: 398226 },
  "ab-d": { id: "sGkK5D6BBr4", canal: "Amigos de la Química", vistas: 476415 },
  "ab-e": { id: "jeidMhgSrZc", canal: "Amigos de la Química", vistas: 350196 },
};
const V = (k, titulo, busqueda) => ({ ...VID[k], titulo, megusta: 0, ...(busqueda ? { busqueda } : {}) });

const PROFE = "Saberes básicos de Química de 2º de Bachillerato (RD 243/2022, BOE-A-2022-5521)";

// Niveles de energía: [[etiqueta, altura 0-1, color], ...] con flechas opcionales [[desde, hasta, color, texto]].
function niveles(aria, items, saltos = [], pie = "") {
  const y = (v) => 150 - v * 120;
  const lin = items.map(([t, v, c]) => `<path d="M40 ${y(v).toFixed(1)} H 136" stroke="${c || "var(--ink)"}" stroke-width="3"/>${T(142, y(v) + 4.5, t, { fs: fit(t, 112, 12, true), a: "start", b: true, c: c || "var(--ink)" })}`).join("");
  const fl = saltos.map(([a, b, c, t], i) => { const x = 48 + i * 24, y1 = y(items[a][1]), y2 = y(items[b][1]), d = y2 > y1 ? -7 : 7;
    return `<path d="M${x} ${y1.toFixed(1)} V ${(y2 + d).toFixed(1)}" stroke="${c}" stroke-width="2.6"/><path d="M${x - 5} ${(y2 + d).toFixed(1)} L ${x} ${y2.toFixed(1)} L ${x + 5} ${(y2 + d).toFixed(1)}" fill="${c}"/>${t ? T(x + 5, (y1 + y2) / 2 + 4, t, { fs: 10, c, b: true, a: "start" }) : ""}`; }).join("");
  return marco(aria, `${T(22, 26, "E", { fs: 13, b: true, c: "var(--muted)" })}<path d="M28 160 V 30" stroke="var(--muted)" stroke-width="2"/>${lin}${fl}${pie ? T(130, 172, pie, { fs: 11.5, c: "var(--muted)" }) : ""}`);
}

// Diagrama de orbitales en cajas: [[subnivel, [electrones por caja: 0, 1 o 2]], ...].
function cajas(aria, filas, pie = "") {
  const out = filas.map(([sub, cs], i) => { const y = 24 + i * 34, x0 = 70;
    return `${T(58, y + 18, sub, { fs: 13, a: "end", b: true })}${cs.map((n, k) => { const x = x0 + k * 34;
      const fl = (dx, up) => `<path d="M${x + dx} ${up ? y + 22 : y + 6} V ${up ? y + 6 : y + 22}" stroke="var(--pen)" stroke-width="2.4"/><path d="M${x + dx - 4} ${up ? y + 11 : y + 17} L ${x + dx} ${up ? y + 5 : y + 23} L ${x + dx + 4} ${up ? y + 11 : y + 17}" fill="var(--pen)"/>`;
      return `<rect x="${x}" y="${y}" width="30" height="28" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>${n >= 1 ? fl(10, true) : ""}${n === 2 ? fl(20, false) : ""}`; }).join("")}`; }).join("");
  return marco(aria, `${out}${pie ? T(130, 172, pie, { fs: 12, b: true }) : ""}`);
}

module.exports = { ...L, V, PROFE, niveles, cajas };
