// Ayudas del lote B de 3º de Primaria: Ciencias de la Naturaleza, Ciencias Sociales y Educación Física.
// Mismo formato que 4º (README, «Tema ampliado»): dibujos propios en SVG de 260×180 que ajustan solos el tamaño de letra.
const B = require("./_pri4b");
const { et, COL, fl } = B;

const C = "3-primaria";
const REV = "2026-11-13";

// Termómetro con la marca de temperatura (0 a 1).
const termo = (x, y, nivel = 0.6, c = "var(--red)") => `<g transform="translate(${x} ${y})"><rect x="-6" y="-70" width="12" height="70" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="-3" y="${(-70 * nivel).toFixed(1)}" width="6" height="${(70 * nivel).toFixed(1)}" fill="${c}"/><circle cy="6" r="10" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/></g>`;
// Bombilla sencilla.
const bombi = (x, y, s = 1, on = true) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cy="-14" r="14" fill="${on ? "var(--sun)" : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-7" y="-2" width="14" height="10" fill="${COL.gris}"/></g>`;
// Rosa de los vientos con N, S, E y O.
const rosa = (x, y, r = 30) => `<g transform="translate(${x} ${y})"><path d="M0 ${-r} L6 -6 L${r} 0 L6 6 L0 ${r} L-6 6 L${-r} 0 L-6 -6z" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="1.5"/><path d="M0 ${-r} L6 -6 L0 0z M0 ${r} L-6 6 L0 0z M${r} 0 L6 6 L0 0z M${-r} 0 L-6 -6 L0 0z" fill="var(--pen)"/>${et(0, -r - 6, "N", 14, { size: 12, color: COL.rojo })}${et(0, r + 15, "S", 14, { size: 12 })}${et(r + 10, 4, "E", 14, { size: 12 })}${et(-r - 10, 4, "O", 14, { size: 12 })}</g>`;
// Columna clásica.
const columnaG = (x, y, h = 70, c = "#d6c7a1") => `<g fill="${c}" stroke="var(--ink)" stroke-width="1.2"><rect x="${x - 12}" y="${y - h}" width="24" height="8"/><rect x="${x - 8}" y="${y - h + 8}" width="16" height="${h - 16}"/><rect x="${x - 12}" y="${y - 8}" width="24" height="8"/></g>`;
// Insecto: cabeza, tórax, abdomen, seis patas y antenas.
const insecto = (x, y, s = 1, c = COL.marron) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="1.4"><path d="M-6 -2 l-10 -8 M-6 2 l-12 4 M0 2 l-6 12 M0 -2 l-4 -12 M6 -2 l8 -10 M6 2 l10 8" fill="none"/><circle cx="-16" r="6" fill="${c}"/><ellipse rx="8" ry="6" fill="${c}"/><ellipse cx="18" rx="12" ry="7" fill="${c}"/><path d="M-20 -4 q-6 -10 -12 -10 M-19 -5 q-2 -10 -8 -14" fill="none"/></g>`;

const VIDEOS = require("./_pri3b-videos");
const vid = (id) => { const v = VIDEOS[id]; if (!v) throw new Error(`Vídeo sin datos: ${id}`); return { id, titulo: v[0], canal: v[1], vistas: v[2] }; };
const vgen = (id, busqueda) => ({ ...vid(id), megusta: 0, busqueda });

module.exports = { ...B, C, REV, vid, vgen, termo, bombi, rosa, columnaG, insecto };
