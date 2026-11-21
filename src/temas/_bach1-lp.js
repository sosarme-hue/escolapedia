// Ayudas para los temas de Lenguaje y Práctica Musical (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Análisis Musical I y Cultura Audiovisual: lo fundamental, claro y ordenado, con dibujos propios en SVG.
// Reutiliza los dibujos musicales de _bach1-am (pentagrama, notas, compases, figuras, acordes…) y añade el teclado.
const B = require("./_bach1-am");
const { marco, t, ln, rc, ci } = B;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const tema = (o) => ({ ...B.tema(o), materia: "Lenguaje y Práctica Musical" });

// ---------- Teclado (260 × 180) ----------
// Teclado de piano de Do a Do (una octava, 8 teclas blancas). marcadas: semitonos desde Do (0-12) que se señalan.
// pasos: true para escribir T (tono) o S (semitono) entre notas marcadas consecutivas. nombres: rótulos bajo las teclas blancas.
const BL = { 0: 0, 2: 1, 4: 2, 5: 3, 7: 4, 9: 5, 11: 6, 12: 7 };
const NOM = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do"];
function teclado(aria, marcadas = [], { titulo = "", pasos = false, nombres = NOM, color = "var(--pen)" } = {}) {
  const x0 = 10, w = 30, top = titulo ? 32 : 18, hB = 96, hN = 58;
  const cx = (s) => (s in BL ? x0 + BL[s] * w + w / 2 : x0 + (BL[s - 1] + 1) * w);
  let s = titulo ? t(130, 20, titulo, { fs: 12, bold: 1, maxW: 236 }) : "";
  for (let i = 0; i < 8; i++) s += rc(x0 + i * w, top, w, hB, 'fill="#fff" stroke="var(--ink)" stroke-width="1.4" rx="3"');
  for (const k of [1, 3, 6, 8, 10]) s += rc(cx(k) - 9, top, 18, hN, 'fill="var(--ink)" rx="2"');
  marcadas.forEach((k, i) => { s += ci(cx(k), k in BL ? top + hB - 14 : top + hN - 12, 7, `fill="${Array.isArray(color) ? color[i % color.length] : color}" stroke="#fff" stroke-width="1.5"`); });
  nombres.forEach((n, i) => { s += t(x0 + i * w + w / 2, top + hB + 15, n, { fs: 10, maxW: w - 2, color: "var(--muted)" }); });
  if (pasos) for (let i = 1; i < marcadas.length; i++) {
    const d = marcadas[i] - marcadas[i - 1], x = (cx(marcadas[i]) + cx(marcadas[i - 1])) / 2;
    s += t(x, top + hB + 34, d === 1 ? "S" : d === 2 ? "T" : d === 3 ? "T½" : String(d), { fs: 12, bold: 1, maxW: 24, color: d === 1 ? "var(--red)" : "var(--leaf)" });
  }
  return marco(aria, s);
}

module.exports = { ...B, tema, teclado, COL };
