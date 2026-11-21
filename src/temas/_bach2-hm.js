// Ayudas de Historia de la Música y de la Danza (2º de Bachillerato, Modalidad de Artes, nivel libro).
// Mismo montaje que Historia de España de 2º (_bach2-he.js: B, QS, EJ, EX, V, cuadro, mapa, crono…)
// más dos dibujos propios de música: pentagrama() (notas y neumas) y forma() (esquemas formales A B A, sonata…).
// tema() fija materia y curso, añade las fuentes comunes y comprueba el formato del tema de libro.
const H = require("./_bach2-he");
const { txt, marco, partir } = require("./_eso4L4");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--soc, #c2410c)"];
const alto = (t, sin = 10) => (t ? 14 + 14 * partir(t, 42).length : sin);
const tit = (t) => (t ? txt(t, 130, alto(t) / 2 + 1, 236, 12, 'font-weight="700"') : "");

// ---------- Pentagrama ----------
// notas: [paso, tipo, etiqueta?] o "|" (barra de compás). paso 0 = primera línea (abajo), 1 = primer espacio…
// tipo: "r" redonda, "b" blanca, "n" negra, "c" corchea, "q" nota cuadrada (neuma). o: { lineas: 5 | 4, compas: "3/4", nota, clave }
function pentagrama(t, notas, o = {}) {
  const nl = o.lineas || 5, top = alto(t), sp = 9, h = sp * (nl - 1);
  const bot = o.nota ? 150 : 170, yb = Math.round((top + bot) / 2 + h / 2 - 4), x0 = 14, x1 = 246;
  let s = tit(t);
  for (let i = 0; i < nl; i++) s += `<path d="M${x0} ${yb - i * sp} H ${x1}" stroke="var(--ink)" stroke-width="1.1"/>`;
  s += `<path d="M${x0} ${yb} V ${yb - h} M${x1} ${yb} V ${yb - h}" stroke="var(--ink)" stroke-width="1.4"/>`;
  let xs = x0 + 10;
  if (o.clave) { s += `<text x="${xs + 2}" y="${yb - h / 2 + 4}" font-size="11" font-weight="700" fill="var(--pen)">${o.clave}</text>`; xs += 22; }
  if (o.compas) { const [a, b] = o.compas.split("/"); s += `<text x="${xs + 4}" y="${yb - h / 2 - 1}" font-size="13" font-weight="700" text-anchor="middle">${a}</text><text x="${xs + 4}" y="${yb - h / 2 + 12}" font-size="13" font-weight="700" text-anchor="middle">${b}</text>`; xs += 16; }
  const n = notas.length, paso = (x1 - 10 - xs) / Math.max(n, 1);
  notas.forEach((nt, i) => {
    const x = xs + paso * (i + 0.5);
    if (nt === "|") { s += `<path d="M${x.toFixed(1)} ${yb} V ${yb - h}" stroke="var(--ink)" stroke-width="1.2"/>`; return; }
    const [p, tipo = "n", et] = nt, y = yb - p * (sp / 2), c = COL[i % COL.length];
    // líneas adicionales
    for (let k = -2; k >= p; k -= 2) s += `<path d="M${(x - 8).toFixed(1)} ${yb - k * (sp / 2)} h 16" stroke="var(--ink)" stroke-width="1.1"/>`;
    for (let k = (nl - 1) * 2 + 2; k <= p; k += 2) s += `<path d="M${(x - 8).toFixed(1)} ${yb - k * (sp / 2)} h 16" stroke="var(--ink)" stroke-width="1.1"/>`;
    if (tipo === "q") s += `<rect x="${(x - 4).toFixed(1)}" y="${(y - 4).toFixed(1)}" width="8" height="8" fill="var(--red)"/>`;
    else {
      const llena = tipo === "n" || tipo === "c";
      s += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="5" ry="3.6" transform="rotate(-20 ${x.toFixed(1)} ${y.toFixed(1)})" fill="${llena ? "var(--ink)" : "var(--paper)"}" stroke="var(--ink)" stroke-width="1.6"/>`;
      if (tipo !== "r") {
        const up = p < nl - 1, sx = up ? x + 4.6 : x - 4.6, sy = up ? y - 27 : y + 27;
        s += `<path d="M${sx.toFixed(1)} ${y.toFixed(1)} V ${sy.toFixed(1)}" stroke="var(--ink)" stroke-width="1.4"/>`;
        if (tipo === "c") s += `<path d="M${sx.toFixed(1)} ${sy.toFixed(1)} q 7 ${up ? 6 : -6} 6 ${up ? 15 : -15}" stroke="var(--ink)" stroke-width="1.6" fill="none"/>`;
      }
    }
    if (et) s += txt(et, x, yb + 18, Math.max(24, paso + 6), 8.5, `font-weight="700" fill="${c}"`);
  });
  if (o.nota) s += txt(o.nota, 130, 166, 236, 8.5, 'fill="var(--muted)"');
  return marco(`Pentagrama: ${t || ""}. ${notas.filter((x) => x !== "|" && x[2]).map((x) => x[2]).join(", ")}${o.nota ? ". " + o.nota : ""}`, s);
}

// ---------- Esquema formal ----------
// secciones: [letra, texto, peso?]. La misma letra lleva el mismo color (A B A, rondó, sonata, blues…).
function forma(t, secciones, nota = "") {
  const hb = 34, ht = 40, bot = nota ? 150 : 170, top = Math.round((alto(t) + bot) / 2 - (hb + 8 + ht) / 2), tot = secciones.reduce((a, x) => a + (x[2] || 1), 0), W = 236;
  const letras = [...new Set(secciones.map((x) => x[0]))];
  let s = tit(t), x = 12;
  const ytxt = top + hb + 6;
  secciones.forEach(([l, d, p = 1]) => {
    const w = (W * p) / tot, c = COL[letras.indexOf(l) % COL.length];
    s += `<rect x="${(x + 1).toFixed(1)}" y="${top}" width="${(w - 2).toFixed(1)}" height="${hb}" rx="6" fill="${c}" fill-opacity=".85"/>`;
    s += txt(l, x + w / 2, top + hb / 2, w - 4, l.length > 3 ? 9.5 : 15, 'font-weight="700" fill="#fff"');
    if (d) {
      let fs = 9;
      for (; fs > 6.5; fs -= 0.5) { const ls = partir(d, Math.max(3, Math.floor((w - 4) / (fs * 0.56)))); if (ls.length * fs * 1.15 <= ht && Math.max(...ls.map((q) => q.length)) * fs * 0.56 <= w - 2) break; }
      s += txt(d, x + w / 2, ytxt + ht / 2, w - 4, fs, 'fill="var(--ink)"');
    }
    x += w;
  });
  if (nota) s += txt(nota, 130, 164, 236, 8.5, 'fill="var(--muted)"');
  return marco(`Esquema formal: ${t}. ${secciones.map((x) => `${x[0]} (${x[1]})`).join(", ")}`, s);
}

// ---------- Montaje y comprobación del tema ----------
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const DC = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const GROVE = { t: "Real Conservatorio Superior de Música de Madrid y Museo Nacional del Teatro: recursos de historia de la música y la danza", url: "https://rcsmm.eu/" };
const SAB = (s) => `${s} (RD 243/2022, Historia de la Música y de la Danza, 2º de Bachillerato, Modalidad de Artes: saberes básicos «Análisis de obras musicales y coreográficas» y «Contextualización de las obras: la música y la danza en la historia»; en Cataluña, Decret 171/2022, Història de la Música i de la Dansa).`;

function tema(o) {
  const T_ = { materia: "Historia de la Música y de la Danza", curso: "2-bachillerato", minutos: 120, revisado: "2026-11-21", ...o, fuentes: [H.RD, DC, ...(o.fuentes || [])] };
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

module.exports = { ...H, pentagrama, forma, tema, SAB, GROVE };
