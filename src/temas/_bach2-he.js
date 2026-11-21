// Ayudas de Historia de España (2º de Bachillerato, nivel libro). Mismo montaje que Historia del Mundo Contemporáneo
// de 1º (_bach1-hmc.js: B, QS, EJ, EX, V, cuadro, mapa, crono…) más un mapa esquemático de la Península
// y tema(), que fija materia y curso, añade las fuentes comunes y comprueba el formato del tema de libro.
const H = require("./_bach1-hmc");
const { txt, marco, partir } = require("./_eso4L4");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--soc, #c2410c)"];

// ---------- Mapa esquemático de la Península Ibérica (proyección sencilla lon/lat) ----------
// Contorno aproximado en grados (lon, lat), de Galicia en sentido horario.
const COSTA = [[-8.4, 43.4], [-7.0, 43.55], [-5.8, 43.65], [-3.8, 43.45], [-1.8, 43.4], [-0.5, 42.8], [1.7, 42.5], [3.2, 42.3],
  [3.2, 41.9], [2.2, 41.4], [0.9, 40.7], [-0.3, 39.5], [0.2, 38.8], [-0.5, 38.3], [-0.9, 37.6], [-2.2, 36.75], [-4.4, 36.7],
  [-5.6, 36.0], [-6.3, 36.5], [-7.4, 37.2], [-8.95, 37.0], [-8.8, 38.5], [-9.5, 38.75], [-8.9, 40.2], [-8.7, 41.2], [-8.9, 42.0],
  [-9.3, 42.9], [-9.0, 43.25]];
const RAYA = [[-8.9, 42.0], [-8.1, 41.95], [-6.2, 41.6], [-6.9, 40.25], [-7.0, 39.0], [-7.3, 38.2], [-7.4, 37.2]];
const BALEARES = [[3.0, 39.62, 0.55, 0.3], [4.1, 39.95, 0.25, 0.13], [1.4, 38.98, 0.2, 0.15]];

// Proyección dentro del dibujo de 260 × 180 (top deja sitio al título).
function proy(top, bot = 170) {
  const s = Math.min((bot - top) / 7.9, 236 / (13.3 * 0.766));
  const w = 13.3 * 0.766 * s, x0 = 130 - w / 2;
  return ([lon, lat]) => [x0 + (lon + 9.7) * 0.766 * s, top + (43.9 - lat) * s];
}

// peninsula(título, puntos [[lon, lat, nombre, color?]], zonas [[lon, lat, rx°, ry°, nombre]], flechas [[lon1, lat1, lon2, lat2, color?]], nota)
let kp = 0;
function peninsula(t, puntos = [], zonas = [], flechas = [], nota = "") {
  const id = `pe${++kp}`;
  const top = t ? 16 + 14 * partir(t, 42).length : 10;
  const P = proy(top + 2, nota ? 158 : 170);
  const xy = (p) => P(p).map((v) => v.toFixed(1));
  const s = P([1, 0])[0] - P([0, 0])[0];
  let o = `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>`;
  o += `<rect x="6" y="${top - 4}" width="248" height="${176 - top}" rx="10" fill="var(--inf)" fill-opacity=".10"/>`;
  o += t ? txt(t, 130, top / 2 + 1, 236, 12, 'font-weight="700"') : "";
  o += `<path d="M${COSTA.map((p) => xy(p).join(" ")).join(" L ")} Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>`;
  o += `<path d="M${RAYA.map((p) => xy(p).join(" ")).join(" L ")}" fill="none" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>`;
  o += BALEARES.map(([lo, la, rx, ry]) => { const [x, y] = xy([lo, la]); return `<ellipse cx="${x}" cy="${y}" rx="${(rx * s).toFixed(1)}" ry="${(ry * s * 1.3).toFixed(1)}" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/>`; }).join("");
  zonas.forEach(([lo, la, rx, ry, n], i) => {
    const c = COL[i % COL.length], [x, y] = xy([lo, la]);
    const rpx = rx * s, rpy = (ry * s) / 0.766; // rx en grados de longitud y ry en grados de latitud
    o += `<ellipse cx="${x}" cy="${y}" rx="${rpx.toFixed(1)}" ry="${rpy.toFixed(1)}" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="1.6"/>`;
    o += txt(n, +x, +y, Math.max(44, rpx * 1.8), 8.5, `font-weight="700" fill="var(--ink)" paint-order="stroke" stroke="var(--paper)" stroke-width="2.5"`);
  });
  flechas.forEach(([a, b, c2, d, c = "var(--red)"]) => {
    const [x1, y1] = xy([a, b]), [x2, y2] = xy([c2, d]);
    o += `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="2.2" fill="none" marker-end="url(#${id})"/>`;
  });
  puntos.forEach(([lo, la, n, c = "var(--red)", lado]) => {
    const [x, y] = P([lo, la]), izq = lado ? lado === "i" : x > 175;
    o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="${c}" stroke="var(--paper)" stroke-width="1"/>`;
    o += `<text x="${(izq ? x - 5 : x + 5).toFixed(1)}" y="${(y + 3).toFixed(1)}" font-size="8.5" font-weight="700" text-anchor="${izq ? "end" : "start"}" fill="var(--ink)" paint-order="stroke" stroke="var(--paper)" stroke-width="2.5">${n}</text>`;
  });
  if (nota) o += txt(nota, 130, 172, 236, 8, 'fill="var(--muted)"');
  return marco(`Mapa esquemático de la Península Ibérica: ${t}. ${[...zonas.map((z) => z[4]), ...puntos.map((p) => p[2])].join(", ")}`, o);
}

// ---------- Montaje y comprobación del tema ----------
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const RD = H.RD, DC = H.DC;
const PAU = { t: "Modelos y exámenes de Historia de España de la PAU (CRUE y universidades)", url: "https://www.crue.org/" };
const SAB = (s) => `${s} (RD 243/2022, Historia de España, 2º de Bachillerato: saberes básicos «Sociedades en el tiempo», «Retos del mundo actual» y «Compromiso cívico»; en Cataluña, Decret 171/2022, Història).`;

function tema(o) {
  const T_ = { materia: "Historia de España", curso: "2-bachillerato", minutos: 120, revisado: "2026-11-21", ...o, fuentes: [RD, DC, PAU, ...(o.fuentes || [])] };
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3300) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T_.bloques.filter((b) => b.video).length < 2) av.push("menos de 2 vídeos de bloque");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 6 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 150 || lw > 260) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { ...H, peninsula, tema, PAU, SAB };
