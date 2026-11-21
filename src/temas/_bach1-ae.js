// Ayudas para los temas de Artes Escénicas I (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Cultura Audiovisual y Proyectos Artísticos: lo fundamental, claro y ordenado, con dibujos propios en SVG.
const B = require("./_bach1-ca");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const tema = (o) => ({ ...B.tema(o), materia: "Artes Escénicas I" });

// ---------- Dibujos propios del espacio escénico (260 × 180) ----------

// Tres tipos de escenario vistos desde arriba: a la italiana, de tres lados y circular.
function escenarios(aria) {
  const pub = (x, y, w = 10, h = 6) => rc(x, y, w, h, 'rx="2" fill="var(--muted)" fill-opacity=".45"');
  const filas = (x0, y0, n, m, dx = 13, dy = 9) => { let s = ""; for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) s += pub(x0 + j * dx, y0 + i * dy); return s; };
  // A la italiana: escenario arriba, público enfrente.
  const ita = `${rc(14, 34, 66, 38, 'rx="4" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"')}${ln(14, 72, 80, 72, "var(--red)", 3)}${filas(16, 84, 5, 5)}`;
  // De tres lados (thrust): escenario que entra en el público.
  const thr = `${rc(108, 34, 44, 52, 'rx="4" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"')}${filas(96, 92, 4, 5, 13, 9)}${filas(92, 40, 5, 1, 0, 9)}${filas(158, 40, 5, 1, 0, 9)}`;
  // Circular (arena): público alrededor.
  let arena = ci(218, 82, 20, 'fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"');
  for (let k = 0; k < 14; k++) { const a = (k * 2 * Math.PI) / 14, r = 34; arena += `<rect x="${(218 + r * Math.cos(a) - 4).toFixed(1)}" y="${(82 + r * Math.sin(a) - 3).toFixed(1)}" width="8" height="6" rx="2" fill="var(--muted)" fill-opacity=".45" transform="rotate(${((a * 180) / Math.PI + 90).toFixed(0)} ${(218 + r * Math.cos(a)).toFixed(1)} ${(82 + r * Math.sin(a)).toFixed(1)})"/>`; }
  return marco(aria, `${ita}${thr}${arena}
    ${t(47, 22, "A la italiana", { fs: 10.5, bold: 1, color: "var(--pen)", maxW: 80 })}${t(130, 22, "De tres lados", { fs: 10.5, bold: 1, color: "var(--leaf)", maxW: 80 })}${t(218, 22, "Circular", { fs: 10.5, bold: 1, color: "var(--sun)", maxW: 76 })}
    ${t(47, 56, "escena", { fs: 9.5, color: "var(--pen)" })}${t(130, 62, "escena", { fs: 9.5, color: "var(--leaf)" })}${t(218, 85, "escena", { fs: 9, color: "var(--ink)" })}
    ${t(47, 150, "público enfrente", { fs: 9, color: "var(--muted)", maxW: 80 })}${t(130, 150, "público en 3 lados", { fs: 9, color: "var(--muted)", maxW: 80 })}${t(218, 150, "público alrededor", { fs: 9, color: "var(--muted)", maxW: 80 })}
    ${t(47, 168, "telón y boca", { fs: 8.5, color: "var(--red)", maxW: 80 })}${t(130, 168, "más cercanía", { fs: 8.5, color: "var(--muted)", maxW: 80 })}${t(218, 168, "máxima cercanía", { fs: 8.5, color: "var(--muted)", maxW: 80 })}`);
}

// Las nueve zonas del escenario visto desde arriba, con el público abajo.
function zonas(aria) {
  const fil = ["Fondo", "Centro", "Proscenio"], col = ["Derecha", "Centro", "Izquierda"];
  let s = "";
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    const x = 40 + j * 62, y = 18 + i * 38, fuerte = i === 2 && j === 1;
    s += rc(x, y, 60, 36, `rx="4" fill="${fuerte ? "var(--red)" : COL[(i + j) % 4]}" fill-opacity="${fuerte ? ".3" : ".12"}" stroke="var(--line)" stroke-width="1.5"`);
    s += t(x + 30, y + 16, `${col[j].slice(0, 3).toUpperCase()}·${fil[i].slice(0, 3).toLowerCase()}`, { fs: 9.5, bold: 1, maxW: 56 });
  }
  return marco(aria, `${s}
    ${fil.map((f, i) => t(20, 40 + i * 38, f, { fs: 8.5, color: "var(--muted)", maxW: 34 })).join("")}
    ${t(71, 144, "derecha", { fs: 9, color: "var(--muted)" })}${t(133, 144, "centro", { fs: 9, color: "var(--muted)" })}${t(195, 144, "izquierda", { fs: 9, color: "var(--muted)" })}
    ${ln(40, 150, 226, 150, "var(--red)", 3)}${t(133, 166, "público (derecha e izquierda, vistas desde el actor)", { fs: 9, color: "var(--muted)", maxW: 236 })}`);
}

// Silueta en escena con las tres fuentes básicas de luz (frontal, lateral, contraluz).
function luces(aria) {
  const foco = (x, y, rot, c, nom) => `<g transform="rotate(${rot} ${x} ${y})">${rc(x - 9, y - 6, 18, 12, `rx="3" fill="${c}"`)}</g>${t(x, y + (y > 100 ? 18 : -10), nom, { fs: 9.5, bold: 1, color: c, maxW: 70 })}`;
  const haz = (x1, y1, c) => pa(`M${x1} ${y1} L118 70 L142 150 Z`, `fill="${c}" fill-opacity=".12"`);
  return marco(aria, `${haz(40, 150, "var(--sun)")}${haz(222, 70, "var(--pen)")}${haz(130, 22, "var(--red)")}
    ${ln(20, 160, 240, 160, "var(--line)", 3)}
    ${ci(130, 74, 10, 'fill="var(--ink)"')}${pa("M130 84 L130 124 M130 94 L114 112 M130 94 L146 112 M130 124 L118 156 M130 124 L142 156", trazo("var(--ink)", 4))}
    ${foco(40, 150, -40, "var(--sun)", "frontal")}${foco(222, 70, 0, "var(--pen)", "lateral")}${foco(130, 22, 0, "var(--red)", "contraluz")}
    ${t(214, 150, "cada luz dice algo distinto", { fs: 9, color: "var(--muted)", maxW: 80 })}`);
}

// Línea de tiempo horizontal sencilla: hitos [año, texto].
function epocas(aria, hitos) {
  const n = hitos.length, x0 = 36, dx = 188 / (n - 1);
  return marco(aria, `${ln(12, 92, 248, 92, "var(--line)", 3)}` + hitos.map(([a, s], i) => {
    const x = x0 + i * dx, c = COL[i % 4], arriba = i % 2 === 0;
    return `${ci(x, 92, 6, `fill="${c}"`)}${t(x, arriba ? 70 : 118, a, { fs: 10, bold: 1, color: c, maxW: 66 })}${t(x, arriba ? 54 : 134, s, { fs: 9, maxW: 66, color: "var(--muted)" })}`;
  }).join(""));
}

module.exports = { ...B, tema, escenarios, zonas, luces, epocas };
