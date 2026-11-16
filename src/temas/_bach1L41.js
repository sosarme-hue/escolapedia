// Ayudas de los temas de Anatomía Aplicada (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza el montaje y las comprobaciones de _bach1L3 (tema, figura, cajas, flujo, ciclo, barras, comparar, capas, estrella, rejilla, tx)
// y cambia la materia, la fecha y las referencias curriculares.
const L = require("./_bach1L3");

const MATERIA = "Anatomía Aplicada";

function tema(o) {
  const T = L.tema({ revisado: "2026-11-16", ...o });
  T.materia = MATERIA;
  return T;
}

// Saberes: Anatomía Aplicada es una optativa de 1º que regulan las comunidades autónomas en el marco del RD 243/2022.
const SAB = (s) => `${s} (Anatomía Aplicada, materia optativa de 1º de Bachillerato ofertada por las comunidades autónomas en el marco del RD 243/2022, que fija la estructura y las competencias del Bachillerato).`;

// Dibujo libre de 260 × 180 con fondo y título opcional.
const lienzo = (aria, cuerpo, t = "") => `<svg viewBox="0 0 260 180" role="img" aria-label="${aria}">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>${t ? L.tx(130, 20, t, { fs: 13, maxW: 236, bold: true, font: L.D }) : ""}${cuerpo}</svg>`;

// Silueta humana sencilla de frente (cabeza en cx, cy; escala s).
const silueta = (cx, cy, s = 1, c = "var(--line)") => {
  const p = (x, y) => `${(cx + x * s).toFixed(1)} ${(cy + y * s).toFixed(1)}`;
  return `<circle cx="${cx}" cy="${cy}" r="${(11 * s).toFixed(1)}" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M${p(0, 11)} L${p(0, 70)} M${p(-26, 22)} L${p(26, 22)} M${p(-26, 22)} L${p(-32, 62)} M${p(26, 22)} L${p(32, 62)} M${p(0, 70)} L${p(-16, 128)} M${p(0, 70)} L${p(16, 128)}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
};

const FUENTES = {
  OMS: { t: "Directrices de la OMS sobre actividad física y hábitos sedentarios", url: "https://www.who.int/es/publications/i/item/9789240014886" },
  AESAN: { t: "Agencia Española de Seguridad Alimentaria y Nutrición (AESAN)", url: "https://www.aesan.gob.es/" },
  WIKI: (p, t) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${p}` }),
};

module.exports = { ...L, tema, SAB, lienzo, silueta, FUENTES };
