// Ayudas para los temas de Proyectos Artísticos (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Cultura Audiovisual: lo fundamental, claro y ordenado, con dibujos propios en SVG.
const B = require("./_bach1-ca");
const { marco, t, ln, rc, ci, pa, trazo } = B;

const tema = (o) => ({ ...B.tema(o), materia: "Proyectos Artísticos" });

// Doble diamante: abrir (divergir) y cerrar (converger) dos veces.
function diamante(aria, et = ["Descubrir", "Definir", "Idear", "Producir"]) {
  const c = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
  const rombo = (x0, x1, col) => pa(`M${x0} 92 L${(x0 + x1) / 2} 36 L${x1} 92 L${(x0 + x1) / 2} 148Z`, `fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2.2"`);
  return marco(aria, `${rombo(14, 128, c[0])}${rombo(132, 246, c[2])}
    ${ln(71, 36, 71, 148, "var(--line)", 1.2, 'stroke-dasharray="3 3"')}${ln(189, 36, 189, 148, "var(--line)", 1.2, 'stroke-dasharray="3 3"')}
    ${t(44, 96, "abrir", { fs: 9.5, color: "var(--muted)" })}${t(100, 96, "cerrar", { fs: 9.5, color: "var(--muted)" })}${t(160, 96, "abrir", { fs: 9.5, color: "var(--muted)" })}${t(216, 96, "cerrar", { fs: 9.5, color: "var(--muted)" })}
    ${t(71, 22, "problema", { fs: 10, color: "var(--muted)" })}${t(189, 22, "solución", { fs: 10, color: "var(--muted)" })}
    ${t(42, 168, et[0], { fs: 10, bold: 1, color: c[0], maxW: 60 })}${t(100, 168, et[1], { fs: 10, bold: 1, color: c[1], maxW: 56 })}${t(160, 168, et[2], { fs: 10, bold: 1, color: c[2], maxW: 56 })}${t(218, 168, et[3], { fs: 10, bold: 1, color: c[3], maxW: 60 })}`);
}

// Embudo: muchas ideas arriba, pocas (una) abajo.
function embudo(aria, niveles) {
  const n = niveles.length, c = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
  return marco(aria, niveles.map(([a, b], i) => {
    const y = 14 + i * (156 / n), h = 156 / n - 6, w0 = 236 - i * (180 / n), w1 = 236 - (i + 1) * (180 / n), x0 = 130 - w0 / 2, x1 = 130 - w1 / 2;
    return `${pa(`M${x0} ${y} H${x0 + w0} L${x1 + w1} ${y + h} H${x1}Z`, `fill="${c[i % 4]}" fill-opacity=".18" stroke="${c[i % 4]}" stroke-width="2"`)}${t(130, y + h / 2 - 1, a, { fs: 11, bold: 1, color: c[i % 4], maxW: w1 + 10 })}${t(130, y + h / 2 + 12, b, { fs: 9, maxW: w1 + 20, color: "var(--muted)" })}`;
  }).join(""));
}

// Triángulo de restricciones: tiempo, dinero y alcance alrededor de la calidad.
function triangulo(aria, v = ["Alcance", "Tiempo", "Dinero"], centro = "calidad") {
  return marco(aria, `${pa("M130 26 L232 156 H28Z", 'fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"')}${t(130, 112, centro, { bold: 1, fs: 12 })}
    ${t(130, 18, v[0], { bold: 1, color: "var(--red)", maxW: 140 })}${t(36, 172, v[1], { bold: 1, color: "var(--leaf)", maxW: 90 })}${t(224, 172, v[2], { bold: 1, color: "var(--sun)", maxW: 90 })}
    ${t(130, 140, "si cambia un lado, cambian los otros", { fs: 9, color: "var(--muted)", maxW: 170 })}`);
}

// Muro de referencias (moodboard): retazos de color, imagen, texto y textura.
function muro(aria) {
  const p = [[14, 14, 76, 56, "var(--red)", "color"], [96, 14, 70, 80, "var(--pen)", "imagen"], [172, 14, 74, 48, "var(--sun)", "palabra"], [14, 76, 76, 90, "var(--leaf)", "textura"], [96, 100, 70, 66, "var(--sun)", "obra"], [172, 68, 74, 98, "var(--red)", "boceto"]];
  return marco(aria, p.map(([x, y, w, h, c, s], i) => `<g transform="rotate(${[-3, 2, -2, 3, -1, 2][i]} ${x + w / 2} ${y + h / 2})">${rc(x, y, w, h, `fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2" rx="3"`)}${ci(x + w / 2, y + 7, 3, 'fill="var(--ink)"')}${t(x + w / 2, y + h / 2 + 4, s, { fs: 10.5, bold: 1, color: c, maxW: w - 6 })}</g>`).join(""));
}

module.exports = { ...B, tema, diamante, embudo, triangulo, muro };
