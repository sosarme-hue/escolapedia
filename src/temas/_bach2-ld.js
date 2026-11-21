// Ayudas para Literatura Dramática (2º de Bachillerato, modalidad de Artes) a nivel libro.
// Reutiliza la plantilla de Lengua de 1º de Bachillerato (_bach1-len): mismo formato, numeración y comprobaciones.
// Aquí se cambian la materia, el curso, la referencia curricular y la fecha, y se añaden dibujos propios del teatro.
const B = require("./_bach1-len");
const { C, L } = B;

const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const CDAEM = { t: "Centro de Documentación de las Artes Escénicas y de la Música (INAEM)", url: "https://www.teatro.es/" };
const saberes = (s) => `${s} (RD 243/2022, Literatura Dramática, materia de la modalidad de Artes, vía de Música y Artes Escénicas, saberes básicos de 2º de Bachillerato; las comunidades autónomas lo concretan en sus decretos de currículo).`;

function tema(o) {
  const T = B.tema(o);
  T.materia = "Literatura Dramática";
  T.curso = "2-bachillerato";
  T.profesores.saberes = saberes(o.saberes);
  T.fuentes = [RD, CDAEM, ...(o.fuentes || [])];
  T.revisado = "2026-11-21";
  return T;
}

// Dibujos propios (260 × 180).
const t = (x, y, s, fs = 12, c = "var(--ink)", b = false, a = "middle") => `<text x="${x}" y="${y}" text-anchor="${a}" font-size="${L.fz(s, fs, 120, b)}"${b ? ' font-weight="700"' : ""} fill="${c}">${s}</text>`;

// Planta de un teatro griego: theatron, orchestra, skené.
function teatroGriego(label, nota = "Planta de un teatro griego") {
  return L.marco(label, `
    <path d="M30 150 A100 100 0 0 1 230 150" fill="none" stroke="${C.pen}" stroke-width="22" opacity=".25"/>
    <path d="M30 150 A100 100 0 0 1 230 150" fill="none" stroke="${C.pen}" stroke-width="2"/>
    <path d="M58 150 A72 72 0 0 1 202 150" fill="none" stroke="${C.pen}" stroke-width="2"/>
    <circle cx="130" cy="128" r="30" fill="var(--card)" stroke="${C.red}" stroke-width="2.5"/>
    <rect x="80" y="152" width="100" height="18" rx="4" fill="${C.leaf}"/>
    ${t(130, 132, "orchestra", 11, C.red, true)}${t(130, 165, "skené", 11, "#fff", true)}
    ${t(130, 40, "theatron (gradas)", 12, C.pen, true)}
    <path d="M60 150 h-30 M200 150 h30" stroke="${C.inf}" stroke-width="3"/>${t(24, 172, "párodos", 10, C.inf, true, "start")}${t(236, 172, "párodos", 10, C.inf, true, "end")}
    ${t(130, 18, nota, 11, "var(--muted)")}`);
}

// Escenario a la italiana visto desde arriba: zonas, embocadura, proscenio y público.
function escenario(label, zonas = ["foro", "centro", "proscenio"]) {
  return L.marco(label, `
    <rect x="30" y="16" width="200" height="104" rx="6" fill="var(--card)" stroke="${C.pen}" stroke-width="2"/>
    ${t(130, 34, zonas[0], 12, C.pen, true)}${t(130, 74, zonas[1], 12, C.red, true)}
    <path d="M30 98 H230" stroke="${C.leaf}" stroke-width="2" stroke-dasharray="5 4"/>${t(130, 114, zonas[2], 12, C.leaf, true)}
    ${t(46, 74, "izq.", 10, "var(--muted)")}${t(214, 74, "der.", 10, "var(--muted)")}
    <path d="M20 120 H240" stroke="${C.inf}" stroke-width="4"/>${t(130, 136, "embocadura / telón", 11, C.inf, true)}
    ${[0, 1, 2].map((k) => `<path d="M${40 + k * 4} ${150 + k * 10} H${220 - k * 4}" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>`).join("")}
    ${t(130, 178, "patio de butacas (público)", 10, "var(--muted)")}`);
}

// Arco de la acción dramática (pirámide de Freytag): 5 puntos con etiquetas.
function arco(label, etiquetas = ["planteamiento", "acción ascendente", "clímax", "acción descendente", "desenlace"]) {
  const P = [[22, 150], [76, 112], [130, 40], [184, 112], [238, 150]];
  const col = [C.pen, C.red, C.sun, C.leaf, C.inf];
  return L.marco(label, `
    <path d="M${P.map((p) => p.join(" ")).join(" L")}" fill="none" stroke="var(--line)" stroke-width="4" stroke-linejoin="round"/>
    ${P.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="7" fill="${col[i]}"/>`).join("")}
    ${t(130, 26, etiquetas[2], 13, col[2], true)}
    ${t(60, 96, etiquetas[1], 11, col[1], true)}${t(200, 96, etiquetas[3], 11, col[3], true)}
    ${t(26, 172, etiquetas[0], 11, col[0], true, "start")}${t(234, 172, etiquetas[4], 11, col[4], true, "end")}`);
}

// Triángulo de relaciones entre tres elementos (por ejemplo autor, actor, público).
function triangulo(label, [a, b, c], centro = "") {
  return L.marco(label, `
    <path d="M130 30 L40 150 L220 150 Z" fill="none" stroke="var(--line)" stroke-width="3"/>
    <circle cx="130" cy="30" r="9" fill="${C.pen}"/><circle cx="40" cy="150" r="9" fill="${C.red}"/><circle cx="220" cy="150" r="9" fill="${C.leaf}"/>
    ${t(130, 16, a, 13, C.pen, true)}${t(40, 174, b, 13, C.red, true)}${t(220, 174, c, 13, C.leaf, true)}
    ${centro ? t(130, 116, centro, 12, C.inf, true) : ""}`);
}

module.exports = { ...B, tema, teatroGriego, escenario, arco, triangulo, CDAEM };
