// Ayudas del lote A de 2º de ESO: Física y Química, Tecnología y Digitalización, Programación y robótica.
// Reutiliza las de 3º de ESO (ciencias y tecnología) y añade el curso y algunas piezas de dibujo.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const C = "2-eso";
const REV = "2026-11-12";

// Bloque de Scratch con forma de pieza. x, y esquina; w ancho; c color; s texto; h alto.
const bl = (x, y, w, c, s, h = 20) => `<path d="M${x} ${y} h 10 l 4 4 h 10 l 4 -4 h ${w - 28} v ${h} h ${-(w - 28)} l -4 4 h -10 l -4 -4 h -10 Z" fill="${c}" stroke="var(--ink)" stroke-opacity=".25"/>${t(x + 8, y + h / 2 + 4, s, { size: 10, color: "#fff", anchor: "start" })}`;
// Colores de las categorías de Scratch.
const SC = { mov: "#4c7ee8", apa: "#9a66e0", son: "#cf63cf", eve: "#e6a100", con: "#e8892c", sen: "#4cb0d8", ope: "#4caf50", var: "#ff8c1a" };

// Pila (o bombilla, interruptor…) en esquemas eléctricos sencillos.
const pila = (x, y) => `<path d="M${x} ${y - 12} v 24 M${x + 8} ${y - 6} v 12" stroke="var(--ink)" stroke-width="2.5"/>`;
const bombilla = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffe27a" stroke="var(--ink)" stroke-width="2"/><path d="M${x - r * 0.7} ${y - r * 0.7} L ${x + r * 0.7} ${y + r * 0.7} M${x + r * 0.7} ${y - r * 0.7} L ${x - r * 0.7} ${y + r * 0.7}" stroke="var(--ink)" stroke-width="1.5"/>`;
// Resistencia en zigzag horizontal de ancho 30 centrada en (x, y).
const resis = (x, y) => `<path d="M${x - 15} ${y} l 3 -6 l 5 12 l 5 -12 l 5 12 l 5 -12 l 5 12 l 2 -6" stroke="var(--ink)" stroke-width="2" fill="var(--paper)"/>`;

module.exports = { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC, pila, bombilla, resis };
