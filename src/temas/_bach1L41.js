// Ayudas para los temas de Dibujo Artístico I (1º de Bachillerato) a nivel libro, con dibujos propios en SVG.
// Cada tema se escribe entero con tema({...}) y aquí se monta, se numera (1.1, 1.2, 2.1…) y se comprueba.
// Los dibujos de bloque (260 × 180) usan las ayudas de _eso4L11, que ajustan la letra para que no se salga.
const L = require("./_eso4L11");
const { F, D, mapa } = require("./_util");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };

// Figura resumen: 4 tarjetas [nombre, símbolo o fórmula, línea 1, línea 2].
function figura(aria, items) {
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}">
  <rect width="640" height="220" rx="16" fill="var(--paper)"/>
  ${items.map(([n, s, a, b], i) => { const x = 16 + i * 154, cx = x + 73, c = COL[i];
    return `<rect x="${x}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
    ${L.tx(cx, 60, n, { fs: 16, maxW: 132, bold: true, color: c, font: D })}
    ${L.tx(cx, 106, s, { fs: 22, maxW: 132, bold: true, color: "var(--ink)" })}
    ${L.tx(cx, 146, a, { fs: 13, maxW: 134 })}${L.tx(cx, 166, b, { fs: 13, maxW: 134 })}`; }).join("")}
</svg>`;
}

const PRE = "overflow-x:auto;font-size:.9em;line-height:1.4;background:var(--paper);border:1px solid var(--line);padding:.6em .8em;border-radius:8px";
// Un texto con saltos de línea es código: se muestra en <pre> conservando la sangría.
const codigo = (s) => (typeof s === "string" && s.includes("\n") ? `<pre style="${PRE}">${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>` : s);
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = {
    materia: "Dibujo Artístico I",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.html}`, svg: b.svg, ...(b.video ? { video: { megusta: 0, ...b.video } } : {}) })),
    figura: { titulo: o.figura.titulo, svg: figura(o.figura.titulo, o.figura.items) },
    video: { megusta: 0, ...o.video },
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([t, d], i) => [t, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado: codigo(resultado) })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol: codigo(sol), nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [{ t: "Real Decreto 243/2022, enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" }, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-14",
  };
  // Numeración 1.1, 1.2, 2.1…
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T.bloques.length} en «${T.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  // Comprobaciones del formato «nivel libro».
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3000) av.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 12 || T.glosario.length > 20) av.push(`glosario ${T.glosario.length}`);
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  return T;
}


// ---------- Dibujos propios de dibujo artístico (260 × 180) ----------
const W = 260, H = 180;
const marco = (aria, cuerpo) => `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${aria}"><rect width="${W}" height="${H}" rx="14" fill="var(--paper)"/>${cuerpo}</svg>`;
const gris = (v) => { const g = Math.round(255 * v); return `rgb(${g},${g},${g})`; };
const t = (x, y, s, o = {}) => L.tx(x, y, s, { fs: 10.5, maxW: 110, ...o });
const ln = (x1, y1, x2, y2, c = "var(--ink)", w = 2, extra = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
const rc = (x, y, w, h, o = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${o}/>`;
const ci = (x, y, r, o = "") => `<circle cx="${x}" cy="${y}" r="${r}" ${o}/>`;
const el = (x, y, rx, ry, o = "") => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" ${o}/>`;
const pa = (d, o = "") => `<path d="${d}" ${o}/>`;
const nada = 'fill="none"';
const trazo = (c = "var(--ink)", w = 2) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

// Escala de valores: n tonos de blanco a negro con sus números.
function escala(aria, n, titulo = "") {
  const w = (W - 28) / n, out = [];
  for (let i = 0; i < n; i++) { out.push(rc(14 + i * w, 56, w, 70, `fill="${gris(1 - i / (n - 1) * 0.94)}" stroke="var(--line)"`)); out.push(t(14 + i * w + w / 2, 142, i + 1, { fs: 10, maxW: w })); }
  return marco(aria, (titulo ? t(130, 24, titulo, { fs: 13, bold: true, maxW: 236 }) : "") + out.join("") + t(40, 44, "claro", { color: "var(--muted)" }) + t(220, 44, "oscuro", { color: "var(--muted)" }) + t(130, 166, "cada paso, un valor distinto", { color: "var(--muted)", maxW: 200 }));
}

// Esfera iluminada con sus zonas de luz y sombra.
function esfera(aria) {
  return marco(aria, `<defs><radialGradient id="esf41" cx="35%" cy="32%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#bbb"/><stop offset=".85" stop-color="#444"/><stop offset="1" stop-color="#777"/></radialGradient></defs>
  ${el(112, 142, 62, 9, 'fill="#000" fill-opacity=".28"')}${ci(100, 86, 54, 'fill="url(#esf41)" stroke="var(--ink)" stroke-width="1.5"')}
  ${ln(20, 20, 62, 52, "var(--sun)", 2.5, 'stroke-dasharray="5 3"')}${t(30, 16, "luz", { color: "var(--sun)", bold: 1, maxW: 40 })}
  ${t(214, 40, "1 luz", { anchor: "end", bold: 1 })}${t(214, 62, "2 penumbra", { anchor: "end" })}${t(214, 84, "3 sombra propia", { anchor: "end" })}${t(214, 106, "4 reflejo", { anchor: "end", color: "var(--pen)" })}${t(214, 128, "5 sombra proyectada", { anchor: "end", color: "var(--red)", maxW: 100 })}
  ${t(214, 150, "6 núcleo de sombra", { anchor: "end", maxW: 100 })}`);
}

// Círculo cromático de 12 colores.
function circulo(aria) {
  const col = ["#e8d31c", "#f0b021", "#ee7d1f", "#e0402a", "#c2185b", "#8e3b9a", "#4d4aa6", "#2a6bb8", "#1ea0c8", "#1ea58a", "#4cae4f", "#a3c93a"];
  const nom = ["amarillo", "", "naranja", "", "rojo", "", "violeta", "", "azul", "", "verde", ""];
  const cx = 105, cy = 92, R = 70, r = 28, o = [];
  col.forEach((c, i) => { const a0 = (i * 30 - 105) * Math.PI / 180, a1 = a0 + Math.PI / 6;
    const p = (rr, a) => `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
    o.push(pa(`M${p(r, a0)} L${p(R, a0)} A${R} ${R} 0 0 1 ${p(R, a1)} L${p(r, a1)} A${r} ${r} 0 0 0 ${p(r, a0)}Z`, `fill="${c}" stroke="var(--paper)" stroke-width="1.5"`)); });
  return marco(aria, o.join("") + t(cx, cy + 4, "12 tonos", { fs: 9.5, maxW: 44, bold: 1 }) +
    t(218, 30, "primarios", { anchor: "end", bold: 1 }) + t(218, 44, "amarillo · rojo · azul", { anchor: "end", maxW: 76, fs: 9.5 }) +
    t(218, 70, "secundarios", { anchor: "end", bold: 1 }) + t(218, 84, "naranja · violeta · verde", { anchor: "end", maxW: 76, fs: 9.5 }) +
    t(218, 110, "terciarios", { anchor: "end", bold: 1 }) + t(218, 124, "mezcla de vecinos", { anchor: "end", maxW: 76, fs: 9.5 }) +
    t(218, 156, "opuestos = complementarios", { anchor: "end", maxW: 76, fs: 9.5, color: "var(--red)" }));
}

// Figura humana en ocho cabezas.
function canon(aria, n = 8) {
  const h = 150 / n, top = 16, o = [];
  for (let i = 0; i <= n; i++) o.push(ln(30, top + i * h, 120, top + i * h, "var(--line)", 1));
  o.push(el(75, top + h / 2, h * 0.33, h * 0.42, trazo("var(--ink)", 2)));
  o.push(pa(`M${75 - 22} ${top + h * 1.05} H${75 + 22} L${75 + 18} ${top + h * 3.3} L${75 + 10} ${top + h * 4.1} L${75 + 12} ${top + h * 7.8} H${75 + 2} L${75} ${top + h * 4.2} L${75 - 2} ${top + h * 7.8} H${75 - 12} L${75 - 10} ${top + h * 4.1} L${75 - 18} ${top + h * 3.3}Z`, trazo("var(--pen)", 2)));
  const nom = n === 8 ? ["cabeza", "pezones", "ombligo", "pubis", "mitad muslo", "rodillas", "pantorrillas", "pies"] : [];
  nom.forEach((s, i) => o.push(t(128, top + i * h + h / 2 + 3, `${i + 1} ${s}`, { anchor: "start", maxW: 100 })));
  return marco(aria, o.join(""));
}

// Rostro frontal con tercios.
function rostro(aria) {
  return marco(aria, `${el(90, 92, 48, 66, trazo("var(--ink)", 2))}${ln(30, 52, 150, 52, "var(--red)", 1.2)}${ln(30, 92, 150, 92, "var(--red)", 1.2)}${ln(30, 126, 150, 126, "var(--red)", 1.2)}${ln(90, 20, 90, 168, "var(--muted)", 1, 'stroke-dasharray="4 3"')}
  ${el(72, 80, 9, 4, trazo("var(--pen)", 1.8))}${el(108, 80, 9, 4, trazo("var(--pen)", 1.8))}${pa("M90 82 V108 L84 112 M90 108 L96 112", trazo("var(--ink)", 1.6))}${pa("M74 136 Q90 142 106 136", trazo("var(--red)", 1.8))}
  ${t(214, 46, "frente", { anchor: "end" })}${t(214, 88, "nariz", { anchor: "end" })}${t(214, 122, "boca-barbilla", { anchor: "end" })}${t(214, 146, "3 tercios iguales", { anchor: "end", bold: 1, maxW: 92 })}${t(214, 100, "ojos: 1/2 de la cabeza", { anchor: "end", maxW: 92, fs: 9.5 })}`);
}

// Marco con regla de los tercios y puntos fuertes.
function tercios(aria) {
  const pts = [[80, 60], [160, 60], [80, 112], [160, 112]];
  return marco(aria, `${rc(20, 24, 180, 128, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2" rx="4"')}${ln(80, 24, 80, 152, "var(--muted)", 1.2, 'stroke-dasharray="4 3"')}${ln(140, 24, 140, 152, "var(--muted)", 1.2, 'stroke-dasharray="4 3"')}${ln(20, 66.7, 200, 66.7, "var(--muted)", 1.2, 'stroke-dasharray="4 3"')}${ln(20, 109.3, 200, 109.3, "var(--muted)", 1.2, 'stroke-dasharray="4 3"')}
  ${[[80, 66.7], [140, 66.7], [80, 109.3], [140, 109.3]].map(([x, y]) => ci(x, y, 5, 'fill="var(--red)"')).join("")}${ci(140, 66.7, 14, 'fill="var(--sun)" fill-opacity=".5" stroke="var(--ink)"')}${pa("M20 124 Q70 98 110 118 T200 108", trazo("var(--leaf)", 2.5))}
  ${t(228, 50, "puntos", { fs: 10, maxW: 50, bold: 1, color: "var(--red)" })}${t(228, 64, "fuertes", { fs: 10, maxW: 50, bold: 1, color: "var(--red)" })}${t(110, 168, "el motivo, en un punto fuerte", { maxW: 200, color: "var(--muted)" })}`);
}

// Tipos de línea con muestra.
function lineasMuestra(aria) {
  const f = [["recta", "M20 0 H110"], ["curva", "M20 8 Q45 -10 65 6 T110 0"], ["quebrada", "M20 6 L40 -6 L60 6 L80 -6 L110 4"], ["mixta", "M20 6 L45 6 Q65 -10 85 6 L110 6"], ["espiral", "M65 0 m0 0 a4 4 0 1 1 8 0 a8 8 0 1 1 -16 0 a12 12 0 1 1 24 0"]];
  return marco(aria, f.map(([n, d], i) => `<g transform="translate(${i < 3 ? 12 : 128} ${i < 3 ? 40 + i * 44 : 62 + (i - 3) * 60})">${pa(d, trazo(i % 2 ? "var(--red)" : "var(--pen)", 2.6))}${t(i < 3 ? 56 : 56, 24, n, { color: "var(--muted)", fs: 10 })}</g>`).join(""));
}

// Encaje: objeto dentro de una caja con ejes y puntos.
function encaje(aria) {
  return marco(aria, `${rc(30, 20, 120, 140, 'fill="none" stroke="var(--pen)" stroke-width="1.6" stroke-dasharray="6 4"')}${ln(90, 20, 90, 160, "var(--muted)", 1, 'stroke-dasharray="3 3"')}${ln(30, 90, 150, 90, "var(--muted)", 1, 'stroke-dasharray="3 3"')}
  ${rc(72, 30, 36, 24, 'fill="none" stroke="var(--ink)" stroke-width="1.8" rx="3"')}${pa("M72 54 Q40 70 40 110 Q40 150 90 150 Q140 150 140 110 Q140 70 108 54", trazo("var(--ink)", 2.2))}
  ${t(205, 36, "1 caja total", { anchor: "end", bold: 1, color: "var(--pen)" })}${t(205, 58, "2 ejes y mitades", { anchor: "end", maxW: 90 })}${t(205, 80, "3 formas básicas", { anchor: "end", maxW: 90 })}${t(205, 102, "4 puntos de paso", { anchor: "end", maxW: 90 })}${t(205, 124, "5 contorno", { anchor: "end", maxW: 90, color: "var(--red)" })}`);
}

module.exports = { tema, figura, PRE, ...L, F, D, W, H, marco, gris, ln, rc, ci, el, pa, trazo, escala, esfera, circulo, canon, rostro, tercios, lineasMuestra, encaje, t };

