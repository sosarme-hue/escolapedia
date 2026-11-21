// Ayudas para Tecnología e Ingeniería II (2º de Bachillerato, nivel libro). Reutiliza los dibujos de 260 × 180
// de Física (ficha, pasos, compara, graf, barras, ciclo, escala, rejilla…) y añade dibujos técnicos propios.
const H = require("./_bach1L2");
const { marco, T, fit, flecha } = H;

// Vídeos elegidos con la búsqueda de YouTube (los más vistos en español, sin repetir ids de otros temas). El título lo pone cada tema.
const VID = {
  "pc-iso": { id: "yUSJ_ovqfPc", canal: "Procem Consultores", vistas: 710656 },
  "pc-pareto": { id: "vd7QVKpW27Q", canal: "Ingenio Empresa", vistas: 1181528 },
  "pc-ishikawa": { id: "7fYLFzl1njM", canal: "lepatru007", vistas: 621986 },
  "pc-cpm": { id: "NGQzWqFE-RY", canal: "Daniel Pichardo", vistas: 232265 },
  "mat-cristal": { id: "zABTI4Pkvk4", canal: "Universitat Politècnica de València - UPV", vistas: 321006 },
  "mat-defectos": { id: "n-HkS2mgjDo", canal: "Universitat Politècnica de València - UPV", vistas: 239500 },
  "mat-plasticos": { id: "rre5NaMCKjg", canal: "A Cierta Ciencia", vistas: 34498 },
  "mat-compuestos": { id: "kQ75hoKCIf8", canal: "Universitat Politècnica de València - UPV", vistas: 80201 },
  "ens-traccion": { id: "-5CStao_C2U", canal: "Universitat Politècnica de València - UPV", vistas: 234483 },
  "ens-dureza": { id: "1e1F5j3ACKA", canal: "Universitat Politècnica de València - UPV", vistas: 105620 },
  "ens-impacto": { id: "8685HYXNrxE", canal: "Universitat Politècnica de València - UPV", vistas: 97377 },
  "ens-fatiga": { id: "dZLExvQ_7Rg", canal: "Universitat Politècnica de València - UPV", vistas: 85248 },
  "ens-end": { id: "WwcdwdvzGmc", canal: "CH&M NDT", vistas: 59319 },
  "al-fec": { id: "tkYYc4CnY1c", canal: "Salvador FI Facultad de Ingeniería", vistas: 371138 },
  "al-palanca": { id: "c39Wgn2kGg4", canal: "Ingeniosos", vistas: 90872 },
  "al-tratamientos": { id: "aJKfyJCRQSM", canal: "El yeti", vistas: 271285 },
  "al-superficial": { id: "F6tY6y0r-Sw", canal: "Ingeniosos", vistas: 35650 },
  "al-corrosion": { id: "xow45w9YhM4", canal: "Universitat Politècnica de València - UPV", vistas: 110842 },
  "es-reacciones": { id: "yv4ii6SzTn0", canal: "marcelo pardo", vistas: 407997 },
  "es-diagramas": { id: "KmHw7pEpRtQ", canal: "Salvador FI Facultad de Ingeniería", vistas: 967258 },
  "es-nudos": { id: "bo7CCkMh_tY", canal: "Salvador FI Facultad de Ingeniería", vistas: 570070 },
  "mt-leyes": { id: "ZLAoKBVglU8", canal: "CuriosaMente", vistas: 1571236 },
  "mt-otto": { id: "6-udN4cZ6HU", canal: "Motorgiga TV", vistas: 1369002 },
  "mt-diesel": { id: "AEfgWoPCfRA", canal: "carwow.es", vistas: 93815 },
  "mt-par": { id: "YgI6lG6FshQ", canal: "AUTOTECNICATV", vistas: 1956739 },
  "mt-carnot": { id: "6mlL4wTYelM", canal: "unicoos", vistas: 165085 },
  "mf-ciclo": { id: "cdUge74ZlOU", canal: "Friolandia Service", vistas: 1602730 },
  "mf-peltier": { id: "h5SlFsf5ksg", canal: "HRom", vistas: 940546 },
  "mf-aerotermia": { id: "tjujGM-gWqg", canal: "Construyendo Casas", vistas: 449558 },
  "mf-mollier": { id: "oIz4kiE2Bnw", canal: "MAESTRO CIFU", vistas: 296474 },
  "nh-lab": { id: "KCtFWu773o0", canal: "Smart Inventor", vistas: 535088 },
  "nh-valvulas": { id: "_Rd0xgw9V3g", canal: "Neheyler Mecatrónico", vistas: 409586 },
  "nh-leer": { id: "hAFB8zKUyQM", canal: "Les Ingenieurs", vistas: 328620 },
  "nh-oleo": { id: "AEjlK3q7r6E", canal: "Neheyler Mecatrónico", vistas: 367215 },
  "ca-intro": { id: "A3MFVSSyXQA", canal: "Charly Labs", vistas: 1061502 },
  "ca-rlc": { id: "sho9Qqr4-Gs", canal: "El Traductor de Ingeniería", vistas: 262082 },
  "ca-fp": { id: "nHcqTR3rryw", canal: "Pon un ingeniero en tu vida", vistas: 865194 },
  "ca-resonancia": { id: "WNOINqPEo0g", canal: "Electrónica FP", vistas: 165578 },
  "ca-trifasica": { id: "UXW_I_d5O5w", canal: "Mentalidad De Ingeniería", vistas: 1400168 },
};
const V = (k, titulo, busqueda) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  return { ...VID[k], titulo, megusta: 0, ...(busqueda ? { busqueda } : {}) };
};

const PROFE = "Saberes básicos de Tecnología e Ingeniería II (RD 243/2022, BOE-A-2022-5521)";
const PAU = { t: "Modelos y exámenes de Tecnología e Ingeniería II de la PAU (universidades públicas)", url: "https://www.crue.org/" };

let k = 0;
const uid = (p) => `${p}ti${++k}`;
const n1 = (v) => (+v).toFixed(1);

// Diagrama de Gantt: tareas = [[nombre, inicio, duración, color, crítica?]], n = semanas totales.
function gantt(aria, tareas, n, titulo = "") {
  const x0 = 86, x1 = 248, y0 = titulo ? 38 : 22, alto = 180 - y0 - 24, paso = alto / tareas.length, sw = (x1 - x0) / n;
  let s = titulo ? T(130, 22, titulo, { fs: fit(titulo, 240, 13, true), b: true }) : "";
  for (let i = 0; i <= n; i++) s += `<path d="M${n1(x0 + i * sw)} ${y0 - 4} V ${n1(y0 + alto)}" stroke="var(--grid)" stroke-width="1"/>${i < n ? T(n1(x0 + i * sw + sw / 2), n1(y0 + alto + 14), i + 1, { fs: 9, c: "var(--muted)" }) : ""}`;
  tareas.forEach(([nom, ini, dur, c = "var(--pen)", cri], i) => {
    const y = y0 + i * paso, h = Math.min(18, paso - 5);
    s += T(x0 - 6, n1(y + h / 2 + 4), nom, { fs: fit(nom, 78, 11), a: "end" });
    s += `<rect x="${n1(x0 + ini * sw + 1)}" y="${n1(y)}" width="${n1(dur * sw - 2)}" height="${n1(h)}" rx="4" fill="${c}"${cri ? ' stroke="var(--red)" stroke-width="2.4"' : ""}/>`;
  });
  return marco(aria, s);
}

// Diagrama de Pareto: datos = [[causa, frecuencia]] ya ordenados de mayor a menor.
function pareto(aria, datos, titulo = "") {
  const tot = datos.reduce((a, d) => a + d[1], 0), max = datos[0][1];
  const x0 = 34, x1 = 226, yb = 146, h = 110, bw = (x1 - x0) / datos.length;
  let s = `<path d="M${x0} ${yb - h - 4} V ${yb} H ${x1}" stroke="var(--muted)" stroke-width="1.6" fill="none"/><path d="M${x1} ${yb} V ${yb - h - 4}" stroke="var(--muted)" stroke-width="1.2" fill="none"/>`;
  s += T(x1 + 4, yb - h + 4, "100 %", { fs: 9, a: "start", c: "var(--red)" }) + T(x1 + 4, yb - 0.8 * h + 4, "80 %", { fs: 9, a: "start", c: "var(--red)" });
  s += `<path d="M${x0} ${n1(yb - 0.8 * h)} H ${x1}" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3" opacity=".7"/>`;
  let acc = 0; const pts = [];
  datos.forEach(([c, f], i) => {
    const x = x0 + i * bw, bh = (f / max) * h * 0.8;
    s += `<rect x="${n1(x + 3)}" y="${n1(yb - bh)}" width="${n1(bw - 6)}" height="${n1(bh)}" rx="3" fill="var(--pen)" opacity=".85"/>${T(n1(x + bw / 2), yb + 13, c, { fs: fit(c, bw + 4, 10) })}`;
    acc += f; pts.push(`${n1(x + bw / 2)},${n1(yb - (acc / tot) * h)}`);
  });
  s += `<polyline points="${pts.join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.4"/>${pts.map((p) => `<circle cx="${p.split(",")[0]}" cy="${p.split(",")[1]}" r="3" fill="var(--red)"/>`).join("")}`;
  if (titulo) s += T(130, 20, titulo, { fs: fit(titulo, 240, 13, true), b: true });
  return marco(aria, s);
}

// Diagrama de Ishikawa (espina de pescado): efecto y 4 o 6 causas principales.
function ishikawa(aria, efecto, causas) {
  const yc = 92, xs = [60, 120, 180];
  let s = `<path d="M16 ${yc} H 196" stroke="var(--ink)" stroke-width="3"/><path d="M196 ${yc - 7} L 206 ${yc} L 196 ${yc + 7} Z" fill="var(--ink)"/>`;
  s += `<rect x="206" y="${yc - 22}" width="48" height="44" rx="8" fill="var(--red)"/>`;
  efecto.split("|").forEach((l, i, a) => { s += T(230, yc + 4 - (a.length - 1) * 6 + i * 12, l, { fs: fit(l, 44, 11, true), b: true, c: "#fff" }); });
  causas.forEach((c, i) => {
    const arriba = i % 2 === 0, x = xs[Math.floor(i / 2)], y = arriba ? 30 : 154;
    s += `<path d="M${x - 26} ${y} L ${x + 4} ${yc}" stroke="var(--pen)" stroke-width="2.2"/>`;
    s += `<rect x="${x - 54}" y="${arriba ? y - 18 : y}" width="60" height="18" rx="5" fill="var(--card)" stroke="var(--pen)" stroke-width="1.4"/>${T(x - 24, arriba ? y - 5 : y + 13, c, { fs: fit(c, 56, 11, true), b: true, c: "var(--pen)" })}`;
  });
  return marco(aria, s);
}

// Gráfico de control: valores en la escala [lo, hi], con límites LCI, LC y LCS.
function control(aria, valores, lo, hi, lci, lc, lcs, titulo = "") {
  const x0 = 30, x1 = 236, y0 = 32, y1 = 150;
  const X = (i) => x0 + 8 + (i * (x1 - x0 - 16)) / (valores.length - 1), Y = (v) => y1 - ((v - lo) / (hi - lo)) * (y1 - y0);
  let s = `<path d="M${x0} ${y0 - 6} V ${y1} H ${x1}" stroke="var(--muted)" stroke-width="1.6" fill="none"/>`;
  [[lcs, "LCS", "var(--red)"], [lc, "LC", "var(--leaf)"], [lci, "LCI", "var(--red)"]].forEach(([v, n, c]) => { s += `<path d="M${x0} ${n1(Y(v))} H ${x1}" stroke="${c}" stroke-width="1.6" stroke-dasharray="${n === "LC" ? "0" : "5 3"}"/>${T(x1 + 2, n1(Y(v) + 4), n, { fs: 9, a: "start", c, b: true })}`; });
  s += `<polyline points="${valores.map((v, i) => `${n1(X(i))},${n1(Y(v))}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2"/>`;
  s += valores.map((v, i) => `<circle cx="${n1(X(i))}" cy="${n1(Y(v))}" r="3.4" fill="${v > lcs || v < lci ? "var(--red)" : "var(--pen)"}"/>`).join("");
  if (titulo) s += T(130, 18, titulo, { fs: fit(titulo, 240, 12, true), b: true });
  s += T(133, 170, "muestras en el tiempo", { fs: 10, c: "var(--muted)" });
  return marco(aria, s);
}

// Celda unidad cúbica en perspectiva: tipo "cs" (simple), "bcc" o "fcc". Átomos en las posiciones de la red.
function celda(aria, tipo, pie = "") {
  const L = 84, ox = 76, oy = 136, dx = 34, dy = -26;
  const P = (x, y, z) => [ox + x * L + y * dx, oy - z * L + y * dy];
  const v = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]];
  const ar = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  let s = ar.map(([a, b]) => { const [x1, y1] = P(...v[a]), [x2, y2] = P(...v[b]); const oculto = [a, b].includes(3); return `<path d="M${n1(x1)} ${n1(y1)} L ${n1(x2)} ${n1(y2)}" stroke="var(--muted)" stroke-width="1.6"${oculto ? ' stroke-dasharray="4 3"' : ""}/>`; }).join("");
  let at = v.map((q) => [q, "var(--pen)", 11]);
  if (tipo === "bcc") at.push([[0.5, 0.5, 0.5], "var(--red)", 13]);
  if (tipo === "fcc") at = at.concat([[0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5], [0.5, 0.5, 0], [0.5, 0.5, 1]].map((q) => [q, "var(--leaf)", 11]));
  at.sort((a, b) => b[0][1] - a[0][1]);
  s += at.map(([q, c, r]) => { const [x, y] = P(...q); return `<circle cx="${n1(x)}" cy="${n1(y)}" r="${r}" fill="${c}" fill-opacity=".88" stroke="var(--paper)" stroke-width="1.2"/>`; }).join("");
  if (pie) s += T(130, 172, pie, { fs: fit(pie, 240, 12, true), b: true });
  return marco(aria, s);
}

module.exports = { ...H, V, VID, PROFE, PAU, uid, n1, gantt, pareto, ishikawa, control, celda };
