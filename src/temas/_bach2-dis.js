// Ayudas para Diseño (2º de Bachillerato, modalidad de Artes, vía de Artes Plásticas, Imagen y Diseño).
// Formato «esencial», igual que Cultura Audiovisual y Proyectos Artísticos: lo fundamental, claro y ordenado,
// sin llegar al nivel de libro. Dibujos propios en SVG (260 × 180).
const B = require("./_bach1-ca");
const { marco, t, ln, rc, ci, pa, trazo } = B;

const RD = { t: "Real Decreto 243/2022, Diseño: saberes básicos de 2º de Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const saberes = (s) => `${s} (RD 243/2022, Diseño, materia de modalidad de 2º de Bachillerato, vía de Artes Plásticas, Imagen y Diseño; las comunidades autónomas lo concretan en sus decretos de currículo).`;

function tema(o) {
  const T = B.tema({ ...o, saberes: saberes(o.saberes) });
  T.materia = "Diseño";
  T.curso = "2-bachillerato";
  T.fuentes = [RD, ...T.fuentes.slice(1)];
  T.revisado = "2026-11-21";
  return T;
}

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];

// Página con retícula de columnas y módulos ocupados por titular, imagen y texto.
function reticula(aria, cols = 4) {
  const x0 = 70, y0 = 14, w = 120, h = 152, m = 8, g = 4, cw = (w - 2 * m - (cols - 1) * g) / cols;
  const col = (i) => x0 + m + i * (cw + g);
  const guias = Array.from({ length: cols }, (_, i) => rc(col(i), y0 + m, cw, h - 2 * m, 'fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-opacity=".35" stroke-dasharray="3 2"')).join("");
  const span = (a, b) => col(b) + cw - col(a);
  return marco(aria, `${rc(x0, y0, w, h, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2" rx="3"')}${guias}
    ${rc(col(0), y0 + 14, span(0, cols - 1), 14, 'fill="var(--ink)"')}
    ${rc(col(0), y0 + 34, span(0, 1), 56, 'fill="var(--red)" fill-opacity=".75"')}
    ${[0, 1, 2, 3, 4, 5].map((k) => rc(col(2), y0 + 36 + k * 9, span(2, cols - 1), 4, 'fill="var(--muted)"')).join("")}
    ${[0, 1, 2, 3, 4, 5].map((k) => rc(col(0), y0 + 98 + k * 8, span(0, 1), 4, 'fill="var(--muted)"')).join("")}
    ${rc(col(2), y0 + 98, span(2, cols - 1), 40, 'fill="var(--leaf)" fill-opacity=".7"')}
    ${t(36, 40, "margen", { fs: 10, bold: 1, color: "var(--ink)", maxW: 60 })}${ln(58, 36, x0 + 4, 36, "var(--ink)", 1.2)}
    ${t(36, 90, "columna", { fs: 10, bold: 1, color: "var(--pen)", maxW: 60 })}${ln(60, 86, col(0) + 4, 86, "var(--pen)", 1.2)}
    ${t(226, 34, "titular", { fs: 10, bold: 1, maxW: 60 })}${t(226, 70, "texto", { fs: 10, bold: 1, color: "var(--muted)", maxW: 60 })}
    ${t(226, 108, "imagen", { fs: 10, bold: 1, color: "var(--red)", maxW: 60 })}${t(226, 150, "medianil", { fs: 10, bold: 1, color: "var(--leaf)", maxW: 60 })}`);
}

// Anatomía de la letra: línea base, altura de x, ascendentes, descendentes y serifa.
function anatomia(aria) {
  const lb = 124, lx = 79, la = 53, ld = 146;
  const linea = (y, s, c) => `${ln(14, y, 200, y, c, 1.2, 'stroke-dasharray="4 3"')}${t(206, y + 4, s, { fs: 10, bold: 1, color: c, anchor: "start", maxW: 54 })}`;
  return marco(aria, `${linea(la, "ascendente", "var(--leaf)")}${linea(lx, "altura x", "var(--pen)")}${linea(lb, "línea base", "var(--red)")}${linea(ld, "descendente", "var(--sun)")}
    <text x="24" y="${lb}" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="var(--ink)">hxp</text>
    ${ci(38, lb - 2, 9, 'fill="none" stroke="var(--red)" stroke-width="2"')}${t(38, 172, "serifa", { fs: 10, bold: 1, color: "var(--red)", maxW: 50 })}
    ${t(110, 18, "Anatomía de la letra", { fs: 12, bold: 1, maxW: 200 })}`);
}

// Tipos de marca: logotipo, isotipo, imagotipo e isologo.
function marcas(aria, nombre = "NUBE") {
  const nube = (x, y, s = 1, c = "var(--pen)") => pa(`M${x - 16 * s} ${y + 8 * s} a${10 * s} ${10 * s} 0 0 1 ${2 * s} ${-19 * s} a${13 * s} ${13 * s} 0 0 1 ${24 * s} ${-4 * s} a${9 * s} ${9 * s} 0 0 1 ${8 * s} ${23 * s}Z`, `fill="${c}"`);
  const caja = (x, y, lab, cuerpo) => `${rc(x, y, 118, 74, 'fill="var(--card)" stroke="var(--line)" stroke-width="1.5" rx="10"')}${cuerpo}${t(x + 59, y + 68, lab, { fs: 10, bold: 1, color: "var(--muted)", maxW: 110 })}`;
  const txt = (x, y, fs = 18, c = "var(--ink)") => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fs}" font-weight="800" letter-spacing="2" fill="${c}">${nombre}</text>`;
  return marco(aria, caja(8, 10, "logotipo: solo texto", txt(67, 46)) +
    caja(134, 10, "isotipo: solo símbolo", nube(193, 44, 1.2)) +
    caja(8, 96, "imagotipo: separables", nube(36, 128, 0.8) + txt(84, 133, 15)) +
    caja(134, 96, "isologo: fundidos", `${ci(193, 124, 22, 'fill="var(--pen)"')}${txt(193, 129, 11, "#fff")}`));
}

// Leyes de la Gestalt en cuatro miniaturas.
function gestalt(aria) {
  const caja = (x, y, lab, cuerpo) => `${rc(x, y, 118, 78, 'fill="var(--card)" stroke="var(--line)" stroke-width="1.5" rx="10"')}${cuerpo}${t(x + 59, y + 72, lab, { fs: 10, bold: 1, color: "var(--muted)", maxW: 110 })}`;
  const prox = [0, 1, 2].flatMap((f) => [0, 1, 4, 5].map((c) => ci(28 + c * 13, 22 + f * 14, 4, 'fill="var(--pen)"'))).join("");
  const sem = [0, 1, 2].flatMap((f) => [0, 1, 2, 3, 4].map((c) => (c % 2 ? rc(150 + c * 17, 17 + f * 14, 9, 9, 'fill="var(--red)"') : ci(154 + c * 17, 22 + f * 14, 4.5, 'fill="var(--pen)"')))).join("");
  const cierre = [0, 1, 2, 3].map((k) => { const a0 = k * 90 + 12, a1 = a0 + 66, r = 22, cx = 67, cy = 124, p = (a) => `${(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
    return pa(`M${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}`, trazo("var(--leaf)", 4)); }).join("");
  const fondo = `${rc(166, 100, 54, 48, 'fill="var(--ink)"')}${pa("M193 104 C178 110 186 122 176 126 C186 130 178 142 193 146 C208 142 200 130 210 126 C200 122 208 110 193 104Z", 'fill="var(--card)"')}`;
  return marco(aria, caja(8, 6, "proximidad", prox) + caja(134, 6, "semejanza", sem) + caja(8, 92, "cierre", cierre) + caja(134, 92, "figura y fondo", fondo));
}

// Forma y función: un objeto con sus requisitos alrededor.
function requisitos(aria, centro, items) {
  return B.estrella(aria, centro, items);
}

module.exports = { ...B, tema, COL, reticula, anatomia, marcas, gestalt, requisitos };
