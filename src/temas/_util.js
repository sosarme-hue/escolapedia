// Utilidades de dibujo compartidas por los temas.
const F = 'font-family="Atkinson Hyperlegible, sans-serif"';
const D = 'font-family="Baloo 2, sans-serif"';

// Mapa mental: centro + 4 ramas [titulo, texto, color].
function mapa(centro, color, ramas, ancho = 220) {
  const pos = [[140, 60], [560, 60], [140, 240], [560, 240]];
  const cajas = ramas.map(([t, d, c], i) => {
    const [x, y] = pos[i];
    return `<rect x="${x - ancho / 2}" y="${y - 26}" width="${ancho}" height="56" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
      <text x="${x}" y="${y - 4}" text-anchor="middle" font-weight="700" fill="${c}">${t}</text>
      <text x="${x}" y="${y + 16}" text-anchor="middle" fill="var(--ink)" font-size="13">${d}</text>`;
  }).join("");
  return `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: ${centro}">
    <g ${F} font-size="15">
      <g stroke="var(--line)" stroke-width="3">${pos.map(([x, y]) => `<path d="M350 150 L ${x} ${y}"/>`).join("")}</g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="${color}"/>
      <text x="350" y="157" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" ${D}>${centro}</text>
      ${cajas}
    </g></svg>`;
}

const flecha = (id, color) => `<marker id="${id}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${color}"/></marker>`;

module.exports = { F, D, mapa, flecha };
