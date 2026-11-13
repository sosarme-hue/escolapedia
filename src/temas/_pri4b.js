// Ayudas del lote B de 4º de Primaria: Ciencias de la Naturaleza, Ciencias Sociales y Educación Física.
// Mismo formato que 6º (README, «Tema ampliado»): dibujos propios en SVG de 260×180 que ajustan solos el tamaño de letra.
const B = require("./_pri6b");
const { et, COL } = B;

const C = "4-primaria";

// Montaña con nieve en la cima.
const monte = (x, y, w = 60, h = 50, c = "#a16207") => `<path d="M${x - w / 2} ${y} L${x} ${y - h} L${x + w / 2} ${y}z" fill="${c}" fill-opacity=".55"/><path d="M${x - w * 0.12} ${y - h * 0.76} L${x} ${y - h} L${x + w * 0.12} ${y - h * 0.76} L${x + w * 0.05} ${y - h * 0.7} L${x - w * 0.04} ${y - h * 0.78}z" fill="#fff"/>`;
// Castillo sencillo con almenas.
const castillo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#d6c7a1" stroke="var(--ink)" stroke-width="1.5"><rect x="-40" y="-50" width="80" height="50"/><rect x="-52" y="-74" width="24" height="74"/><rect x="28" y="-74" width="24" height="74"/>${[-52, -40, 28, 40].map((a) => `<rect x="${a}" y="-82" width="8" height="8"/>`).join("")}${[-28, -16, -4, 8, 20].map((a) => `<rect x="${a}" y="-58" width="7" height="8"/>`).join("")}<path d="M-10 0 V-20 a10 10 0 0 1 20 0 V0z" fill="#8a5a2b"/></g>`;
// Planeta: círculo con color y nombre debajo.
const planeta = (x, y, r, c, nombre, anillo = false) => `${anillo ? `<ellipse cx="${x}" cy="${y}" rx="${r * 1.8}" ry="${r * 0.45}" fill="none" stroke="${c}" stroke-width="2"/>` : ""}<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>${nombre ? et(x, y + r + 12, nombre, 44, { size: 9.5, weight: 400 }) : ""}`;
// Gota de agua.
const gota = (x, y, s = 1, c = "var(--water)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -14 C6 -5 9 0 9 4 a9 9 0 0 1 -18 0 C-9 0 -6 -5 0 -14z" fill="${c}"/>`;
// Hoja de planta.
const hoja = (x, y, s = 1, giro = 0) => `<g transform="translate(${x} ${y}) rotate(${giro}) scale(${s})"><path d="M0 0 C10 -10 26 -10 34 0 C26 10 10 10 0 0z" fill="var(--leaf)"/><path d="M2 0 H32" stroke="#fff" stroke-width="1.2"/></g>`;

// Vídeos elegidos con tools/videos.py (ids reales, sin repetir con otros cursos ni lotes).
const VIDEOS = require("./_pri4b-videos");
const vid = (id) => { const v = VIDEOS[id]; if (!v) throw new Error(`Vídeo sin datos: ${id}`); return { id, titulo: v[0], canal: v[1], vistas: v[2] }; };
const vgen = (id, busqueda) => ({ ...vid(id), megusta: 0, busqueda });
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, segundo ciclo).`, ideas });

module.exports = { ...B, C, vid, vgen, PROF, monte, castillo, planeta, gota, hoja };
