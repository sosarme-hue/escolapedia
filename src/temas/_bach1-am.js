// Ayudas para los temas de Análisis Musical I (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Cultura Audiovisual: lo fundamental, claro y ordenado, con dibujos propios en SVG.
const B = require("./_bach1-ca");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const tema = (o) => ({ ...B.tema(o), materia: "Análisis Musical I" });

// ---------- Dibujos propios del lenguaje musical (260 × 180) ----------

// Pentagrama: 5 líneas; paso 0 = Mi4 (1.ª línea), cada paso sube una nota. y del paso s.
const PY = (top, s) => top + 40 - s * 5;
function pauta(x0, x1, top) {
  return [0, 1, 2, 3, 4].map((i) => ln(x0, top + i * 10, x1, top + i * 10, "var(--ink)", 1.1)).join("") +
    t(x0 + 9, top + 34, "𝄞", { fs: 40, maxW: 30, font: 'font-family="serif"' });
}
// Una cabeza de nota con plica; adicionales si hace falta.
function nota(x, top, s, c = "var(--ink)", { plica = true, hueca = false } = {}) {
  const y = PY(top, s);
  let ad = "";
  for (let k = -2; k >= s; k -= 2) ad += ln(x - 9, PY(top, k), x + 9, PY(top, k), "var(--ink)", 1.1);
  for (let k = 10; k <= s; k += 2) ad += ln(x - 9, PY(top, k), x + 9, PY(top, k), "var(--ink)", 1.1);
  const arriba = s < 4;
  const st = plica ? ln(arriba ? x + 5.4 : x - 5.4, y, arriba ? x + 5.4 : x - 5.4, arriba ? y - 28 : y + 28, c, 1.4) : "";
  return `${ad}<ellipse cx="${x}" cy="${y}" rx="6" ry="4.3" transform="rotate(-20 ${x} ${y})" fill="${hueca ? "var(--paper)" : c}" stroke="${c}" stroke-width="1.6"/>${st}`;
}

// Melodía en un pentagrama con su perfil (línea discontinua) y nombres opcionales.
function melodia(aria, pasos, { nombres = [], titulo = "", perfil = true, color = "var(--pen)" } = {}) {
  const top = titulo ? 62 : nombres.length ? 52 : 66, n = pasos.length, x0 = 48, dx = Math.min(30, 196 / Math.max(1, n - 1));
  const xs = pasos.map((_, i) => x0 + 8 + i * dx);
  const linea = perfil ? pa("M" + pasos.map((s, i) => `${xs[i]} ${PY(top, s) - 12}`).join(" L"), trazo("var(--red)", 1.6) + ' stroke-dasharray="4 3"') : "";
  return marco(aria, (titulo ? t(130, 20, titulo, { fs: 12, bold: 1, maxW: 236 }) : "") + pauta(10, 250, top) + linea +
    pasos.map((s, i) => nota(xs[i], top, s, color, { plica: false })).join("") +
    nombres.map((nm, i) => t(xs[i], top + 78, nm, { fs: 9.5, maxW: dx + 2, color: "var(--muted)" })).join(""));
}

// Acordes tríada sobre el pentagrama: [nombre, paso fundamental, etiqueta].
function acordes(aria, lista, titulo = "") {
  const top = titulo ? 44 : 36, n = lista.length, dx = 196 / n;
  return marco(aria, (titulo ? t(130, 20, titulo, { fs: 12, bold: 1, maxW: 236 }) : "") + pauta(10, 250, top) +
    lista.map(([g, s, e], i) => { const x = 62 + dx / 2 + i * dx - 14, c = COL[i % 4];
      return [0, 2, 4].map((k) => nota(x, top, s + k, c, { plica: false })).join("") +
        t(x, top + 84, g, { fs: 13, bold: 1, color: c, maxW: dx - 4 }) + t(x, top + 100, e, { fs: 9.5, maxW: dx - 2, color: "var(--muted)" }); }).join(""));
}

// Intervalos armónicos: [nombre, paso grave, paso agudo, etiqueta].
function intervalos(aria, lista, titulo = "") {
  const top = titulo ? 44 : 36, n = lista.length, dx = 196 / n;
  return marco(aria, (titulo ? t(130, 20, titulo, { fs: 12, bold: 1, maxW: 236 }) : "") + pauta(10, 250, top) +
    lista.map(([g, a, b, e], i) => { const x = 62 + dx / 2 + i * dx - 14, c = COL[i % 4];
      return nota(x, top, a, c, { plica: false }) + nota(b - a === 1 ? x + 12 : x, top, b, c, { plica: false }) +
        t(x, top + 84, g, { fs: 13, bold: 1, color: c, maxW: dx - 4 }) + t(x, top + 100, e, { fs: 9.5, maxW: dx - 2, color: "var(--muted)" }); }).join(""));
}

// Ondas: arriba grave/agudo (frecuencia), abajo suave/fuerte (amplitud).
function ondas(aria) {
  const onda = (x, y, w, amp, ciclos, c) => {
    let d = `M${x} ${y}`; const N = 80;
    for (let i = 1; i <= N; i++) { const xx = x + (w * i) / N; d += ` L${xx.toFixed(1)} ${(y - amp * Math.sin((i / N) * ciclos * 2 * Math.PI)).toFixed(1)}`; }
    return pa(d, trazo(c, 2));
  };
  return marco(aria, `${t(130, 18, "Altura: frecuencia", { fs: 11, bold: 1, maxW: 230 })}
    ${onda(14, 52, 110, 18, 2, "var(--pen)")}${t(69, 84, "grave: ondas lentas", { fs: 9.5, maxW: 110, color: "var(--pen)" })}
    ${onda(136, 52, 110, 18, 7, "var(--red)")}${t(191, 84, "agudo: ondas rápidas", { fs: 9.5, maxW: 110, color: "var(--red)" })}
    ${ln(10, 96, 250, 96, "var(--line)", 1)}${t(130, 112, "Intensidad: amplitud", { fs: 11, bold: 1, maxW: 230 })}
    ${onda(14, 142, 110, 7, 4, "var(--leaf)")}${t(69, 172, "piano (suave)", { fs: 9.5, maxW: 110, color: "var(--leaf)" })}
    ${onda(136, 142, 110, 22, 4, "var(--sun)")}${t(191, 172, "forte (fuerte)", { fs: 9.5, maxW: 110, color: "var(--sun)" })}`);
}

// Compases: filas [nombre, pulsos, subdivisión] con el pulso fuerte grande.
function compases(aria, filas) {
  const n = filas.length, h = 168 / n;
  return marco(aria, filas.map(([nom, p, sub], i) => {
    const y = 10 + i * h + h / 2, dx = Math.min(36, 168 / p);
    return t(34, y + 4, nom, { fs: 13, bold: 1, color: COL[i % 4], maxW: 52 }) +
      Array.from({ length: p }, (_, k) => ci(80 + k * dx, y, k === 0 ? 10 : 6, `fill="${k === 0 ? COL[i % 4] : "var(--card)"}" stroke="${COL[i % 4]}" stroke-width="2"`)).join("") +
      (sub ? t(80 + p * dx + 4, y + 4, sub, { fs: 9, maxW: 250 - (80 + p * dx), color: "var(--muted)", anchor: "start" }) : "");
  }).join("") + ln(64, 172, 64, 8, "var(--line)", 1));
}

// Figuras rítmicas y su duración en pulsos (negra = 1).
function figuras(aria) {
  const F = [["redonda", 4, 0], ["blanca", 2, 1], ["negra", 1, 2], ["corchea", 0.5, 3], ["semicorchea", 0.25, 4]];
  return marco(aria, F.map(([n, v, k], i) => {
    const y = 22 + i * 32, x = 34, cab = `<ellipse cx="${x}" cy="${y + 6}" rx="7" ry="5" transform="rotate(-20 ${x} ${y + 6})" fill="${k < 2 ? "var(--paper)" : "var(--ink)"}" stroke="var(--ink)" stroke-width="1.8"/>`;
    const pl = k > 0 ? ln(x + 6, y + 5, x + 6, y - 18, "var(--ink)", 1.6) : "";
    const ban = k >= 3 ? pa(`M${x + 6} ${y - 18} q10 6 6 16`, trazo("var(--ink)", 1.6)) + (k === 4 ? pa(`M${x + 6} ${y - 11} q10 6 6 16`, trazo("var(--ink)", 1.6)) : "") : "";
    return cab + pl + ban + t(62, y + 10, n, { fs: 11, bold: 1, maxW: 80, anchor: "start" }) +
      rc(150, y - 2, 96 * (v / 4), 14, `rx="3" fill="${COL[i % 4]}"`) + t(150 + 96 * (v / 4) + 4, y + 9, String(v).replace(".", ","), { fs: 9.5, maxW: 40, anchor: "start", color: "var(--muted)" });
  }).join("") + t(198, 14, "pulsos", { fs: 9, color: "var(--muted)" }));
}

// Cuatro texturas en miniatura.
function texturas(aria) {
  const P = [["Monodia", 0], ["Melodía acompañada", 1], ["Homofonía", 2], ["Polifonía", 3]];
  return marco(aria, P.map(([n, k], i) => {
    const x = 8 + (i % 2) * 126, y = 8 + Math.floor(i / 2) * 86, w = 118, h = 78;
    let c = "";
    const lin = (d, col, w2 = 2.4) => pa(d, trazo(col, w2));
    if (k === 0) c = lin(`M${x + 10} ${y + 40} q15 -18 30 0 t30 -6 t30 8 t16 -4`, "var(--pen)");
    if (k === 1) c = lin(`M${x + 10} ${y + 30} q15 -14 30 0 t30 -6 t30 8 t16 -4`, "var(--pen)") + [0, 1, 2, 3].map((j) => rc(x + 14 + j * 26, y + 48, 18, 14, `rx="3" fill="var(--leaf)" fill-opacity=".55"`)).join("");
    if (k === 2) c = [0, 1, 2].map((j) => lin(`M${x + 10} ${y + 26 + j * 12} q15 -10 30 0 t30 -4 t30 6 t16 -3`, COL[j])).join("");
    if (k === 3) c = lin(`M${x + 10} ${y + 26} q15 -12 30 0 t30 -6 t30 8 t16 -4`, "var(--pen)") + lin(`M${x + 30} ${y + 42} q10 8 22 0 t24 6 t24 -8 t14 4`, "var(--red)") + lin(`M${x + 50} ${y + 56} q12 -6 22 0 t22 6 t20 -4`, "var(--leaf)");
    return rc(x, y, w, h, 'rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"') + c + t(x + w / 2, y + h - 6, n, { fs: 10, bold: 1, maxW: w - 8 });
  }).join(""));
}

// Formas en bloques de colores: filas [nombre, "A B A"].
function formas(aria, filas, titulo = "") {
  const top = titulo ? 32 : 12, n = filas.length, h = Math.min(30, (180 - top - 8) / n - 6);
  const color = { A: "var(--pen)", B: "var(--red)", C: "var(--leaf)", D: "var(--sun)", E: "var(--pen)", Es: "var(--red)", Pe: "var(--sun)", P: "var(--leaf)", In: "var(--muted)", Intro: "var(--muted)", Coda: "var(--leaf)" };
  const y0 = top + Math.max(0, (180 - top - 8 - n * (h + 6)) / 2);
  return marco(aria, (titulo ? t(130, 20, titulo, { fs: 12, bold: 1, maxW: 236 }) : "") + filas.map(([nom, sec], i) => {
    const y = y0 + i * (h + 6), ps = sec.split(" "), w = 176 / ps.length;
    return t(38, y + h / 2 + 4, nom, { fs: 10.5, bold: 1, maxW: 64 }) + ps.map((p, j) => { const c = color[p.replace(/'+/g, "")] || color[p[0]] || "var(--muted)";
      return rc(76 + j * w, y, w - 3, h, `rx="5" fill="${c}" fill-opacity="${p.includes("'") ? ".35" : ".8"}" stroke="${c}"`) + t(76 + j * w + (w - 3) / 2, y + h / 2 + 4, p, { fs: 11, bold: 1, color: p.includes("'") ? "var(--ink)" : "#fff", maxW: w - 6 });
    }).join("");
  }).join(""));
}

// Plano de la orquesta sinfónica visto desde arriba.
function orquesta(aria) {
  const arco = (r1, r2, c, et, y) => pa(`M${130 - r2} 168 A${r2} ${r2 * 0.78} 0 0 1 ${130 + r2} 168 L${130 + r1} 168 A${r1} ${r1 * 0.78} 0 0 0 ${130 - r1} 168Z`, `fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"`) + t(130, y, et, { fs: 10.5, bold: 1, color: c, maxW: 120 });
  return marco(aria, arco(30, 72, "var(--pen)", "cuerda", 138) + arco(72, 104, "var(--leaf)", "viento madera", 104) + arco(104, 126, "var(--sun)", "viento metal", 82) +
    t(26, 36, "percusión", { fs: 10.5, bold: 1, color: "var(--red)", maxW: 60 }) + ci(26, 52, 9, 'fill="var(--red)" fill-opacity=".5"') + ci(44, 50, 7, 'fill="var(--red)" fill-opacity=".5"') +
    ci(130, 172, 5, 'fill="var(--ink)"') + t(130, 162, "director", { fs: 9, maxW: 50, color: "var(--muted)" }));
}

// Cadencias: flechas entre grados con su efecto.
function cadencias(aria) {
  const F = [["V → I", "auténtica", "punto final"], ["IV → I", "plagal", "«amén», suave"], ["… → V", "semicadencia", "coma, pregunta"], ["V → vi", "rota", "sorpresa"]];
  return marco(aria, F.map(([g, n, e], i) => { const y = 14 + i * 41, c = COL[i];
    return rc(10, y, 240, 34, `rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"`) + t(52, y + 22, g, { fs: 13, bold: 1, color: c, maxW: 76 }) +
      t(134, y + 22, n, { fs: 11, bold: 1, maxW: 80 }) + t(212, y + 22, e, { fs: 9.5, maxW: 70, color: "var(--muted)" }); }).join(""));
}

module.exports = { ...B, tema, pauta, nota, melodia, acordes, intervalos, ondas, compases, figuras, texturas, formas, orquesta, cadencias };
