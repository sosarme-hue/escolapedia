// Dibujo Técnico I 1º Bachillerato · Tema 10. Nivel libro. Normalización y acotación: dibujos calculados en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, arco, paso, polar, add, mul, lerp, circ, cota, linea, tx } = G;
const dash = 'stroke-dasharray="4 3"';
const eje = 'stroke-dasharray="10 3 2 3"';
const rect = (x, y, w, h, c = "var(--ink)", sw = 2, fill = "none", op = 0.12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" stroke="${c}" stroke-width="${sw}" fill="${fill}" fill-opacity="${op}"/>`;
const caja = (x, y, w, h, t1, t2, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="${c}" fill-opacity="0.12" stroke="${c}" stroke-width="1.6"/>${tx(x + w / 2, y + 16, t1, { s: 10.5, b: 1, c })}${t2 ? tx(x + w / 2, y + 30, t2, { s: 9, c: "var(--muted)" }) : ""}`;
const flechita = (A, B, c = "var(--muted)") => { const u = [B[0] - A[0], B[1] - A[1]], d = Math.hypot(...u), e = [u[0] / d, u[1] / d], n = [-e[1], e[0]]; return `${seg(A, B, c, 1)}<path d="M${B[0]} ${B[1]} L ${B[0] - 6 * e[0] + 2.5 * n[0]} ${B[1] - 6 * e[1] + 2.5 * n[1]} L ${B[0] - 6 * e[0] - 2.5 * n[0]} ${B[1] - 6 * e[1] - 2.5 * n[1]} Z" fill="${c}"/>`; };

// 10.1 Organismos de normalización.
const s1 = (() => dib("Organismos de normalización internacional, europeo y español y significado del código de una norma", `${caja(60, 10, 140, 36, "ISO", "Organización Internacional", "var(--pen)")}${caja(60, 62, 140, 36, "CEN → normas EN", "Comité Europeo", "var(--leaf)")}${caja(60, 114, 140, 36, "UNE", "Asociación Española", "var(--red)")}
  ${flechita([130, 46], [130, 61])}${flechita([130, 98], [130, 113])}${tx(130, 172, "UNE-EN ISO 5457: norma ISO adoptada como EN y UNE", { s: 8.5, b: 1 })}${tx(212, 30, "mundial", { s: 9, a: "start", c: "var(--muted)" })}${tx(212, 82, "europeo", { s: 9, a: "start", c: "var(--muted)" })}${tx(212, 134, "nacional", { s: 9, a: "start", c: "var(--muted)" })}`))();

// 10.2 Formatos de la serie A.
const s2 = (() => {
  const x0 = 20, y0 = 6, W = 220, H = 220 / Math.SQRT2;
  const r = [[x0, y0, W / 2, H, "A1"], [x0 + W / 2, y0, W / 2, H / 2, "A2"], [x0 + W / 2, y0 + H / 2, W / 4, H / 2, "A3"], [x0 + (3 * W) / 4, y0 + H / 2, W / 4, H / 4, "A4"], [x0 + (3 * W) / 4, y0 + (3 * H) / 4, W / 8, H / 4, "A5"]];
  return dib("Formatos de la serie A: cada formato es la mitad del anterior y todos tienen la proporción 1 : √2", `${rect(x0, y0, W, H, "var(--ink)", 2.4, "var(--pen)", 0.05)}${r.map(([x, y, w, h, l], i) => `${rect(x, y, w, h, "var(--pen)", 1.4)}${tx(x + w / 2, y + h / 2 + 4, l, { s: Math.max(9, 18 - 2.5 * i), b: 1, c: "var(--pen)" })}`).join("")}
  ${tx(130, 178, "A0 = 1 m² · 841 × 1189 mm · A4 = 210 × 297 mm", { s: 9.5, b: 1 })}`);
})();

// 10.3 Lámina con recuadro y cuadro de rotulación.
const s3 = (() => {
  const X = 14, Y = 8, W = 232, H = 232 / Math.SQRT2, m = 6, bx = X + W - m - 92, by = Y + H - m - 30;
  const filas = [["Nombre y apellidos", "Curso"], ["Título del dibujo", "Escala 1:2"], ["Centro", "Nº 07"]];
  return dib("Lámina A3 apaisada con margen, recuadro, señales de centrado y cuadro de rotulación en la esquina inferior derecha", `${rect(X, Y, W, H, "var(--muted)", 1)}${rect(X + m + 6, Y + m, W - 2 * m - 6, H - 2 * m, "var(--ink)", 2.2)}
  ${seg([X + W / 2, Y], [X + W / 2, Y + m + 4], "var(--ink)", 1.6)}${seg([X + W / 2, Y + H], [X + W / 2, Y + H - m - 4], "var(--ink)", 1.6)}${seg([X, Y + H / 2], [X + m + 10, Y + H / 2], "var(--ink)", 1.6)}${seg([X + W, Y + H / 2], [X + W - m - 4, Y + H / 2], "var(--ink)", 1.6)}
  ${rect(bx, by, 92, 30, "var(--red)", 1.6, "var(--red)", 0.08)}${filas.map(([a, b], i) => `${seg([bx, by + 10 * i], [bx + 92, by + 10 * i], "var(--red)", 0.8)}${tx(bx + 3, by + 10 * i + 7.5, a, { s: 6.5, a: "start" })}${tx(bx + 89, by + 10 * i + 7.5, b, { s: 6.5, a: "end" })}`).join("")}${seg([bx + 62, by], [bx + 62, by + 30], "var(--red)", 0.8)}
  ${tx(110, 70, "zona de dibujo", { s: 11, b: 1, c: "var(--muted)" })}${tx(bx - 4, by + 18, "cuadro de rotulación →", { s: 9, a: "end", c: "var(--red)", b: 1 })}${tx(110, 90, "A3 420 × 297 mm", { s: 9, c: "var(--muted)" })}${tx(110, 104, "margen izq. 20 mm, resto 10 mm", { s: 9, c: "var(--muted)" })}`);
})();

// 10.4 Escalas.
const s4 = (() => {
  const p = (x, k, lab, sub) => { const w = 40 * k, h = 24 * k, y = 104 - h; return `${rect(x, y, w, h, "var(--pen)", 2, "var(--pen)", 0.1)}${circ([x + w / 2, y + h / 2], 6 * k, "var(--pen)", 1.6)}${cota([x, y], [x + w, y], 9, "40", "var(--red)", 9)}${tx(x + w / 2, 124, lab, { s: 11, b: 1 })}${tx(x + w / 2, 138, sub, { s: 9, c: "var(--muted)" })}`; };
  return dib("Una misma pieza a escalas de reducción, natural y ampliación: la cota indica siempre la medida real", `${p(14, 0.5, "1:2", "reducción")}${p(66, 1, "1:1", "natural")}${p(140, 2, "2:1", "ampliación")}
  ${tx(130, 160, "E = dibujo : realidad", { s: 11, b: 1, c: "var(--red)" })}${tx(130, 175, "normalizadas: 1:2 · 1:5 · 1:10 · 1:20 · 1:50 · 2:1 · 5:1", { s: 9, c: "var(--muted)" })}`);
})();

// 10.5 Tipos de línea.
const s5 = (() => {
  const L = [["continua gruesa", "contornos y aristas vistos", "", 2.8], ["continua fina", "cotas, auxiliares, rayados", "", 1], ["discontinua fina", "contornos y aristas ocultos", 'stroke-dasharray="6 3"', 1.2], ["trazo y punto fina", "ejes y planos de simetría", 'stroke-dasharray="14 3 2 3"', 1], ["trazo y doble punto", "piezas contiguas, posiciones", 'stroke-dasharray="14 3 2 3 2 3"', 1], ["mano alzada fina", "límites de vistas parciales", "", 1]];
  return dib("Tipos de línea normalizados y su aplicación principal en el dibujo técnico", `${L.map(([n, u, d, w], i) => { const y = 20 + 27 * i; return `${i === 5 ? `<path d="M14 ${y} q 8 -6 16 0 t 16 0 t 16 0 t 16 0" stroke="var(--ink)" stroke-width="1" fill="none"/>` : seg([14, y], [78, y], "var(--ink)", w, d)}${tx(88, y - 2, n, { s: 9.5, a: "start", b: 1 })}${tx(88, y + 9, u, { s: 8.5, a: "start", c: "var(--muted)" })}`; }).join("")}
  ${tx(246, 176, "grosores: gruesa ≈ 2 × fina (0,5 / 0,25 mm)", { s: 8.5, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 10.6 Rotulación normalizada.
const s6 = (() => {
  const h = 40, y0 = 90, x0 = 66;
  return dib("Rotulación normalizada: altura nominal h de las mayúsculas y proporciones de minúsculas, separaciones y grosor del trazo", `${seg([14, y0], [246, y0], "var(--muted)", 0.8)}${seg([14, y0 - h], [246, y0 - h], "var(--muted)", 0.8)}${seg([14, y0 - 0.7 * h], [246, y0 - 0.7 * h], "var(--muted)", 0.8, dash)}${seg([14, y0 + 0.3 * h], [246, y0 + 0.3 * h], "var(--muted)", 0.8, dash)}
  <text x="${x0}" y="${y0}" font-family="Arial, Helvetica, sans-serif" font-size="${h * 1.4}" font-weight="400" fill="var(--ink)" textLength="150" lengthAdjust="spacingAndGlyphs">ABC abg 12</text>
  ${cota([246 - 8, y0], [246 - 8, y0 - h], 0, "h", "var(--red)", 9)}${tx(14, y0 - h + 4, "h", { s: 9, a: "start", c: "var(--red)", b: 1 })}${tx(14, y0 - 0.7 * h + 4, "c = 0,7 h", { s: 8.5, a: "start", c: "var(--red)" })}${tx(14, y0 - 2, "base", { s: 8.5, a: "start", c: "var(--muted)" })}
  ${tx(14, 146, "alturas h: 2,5 · 3,5 · 5 · 7 · 10 · 14 · 20 mm (razón √2)", { s: 9, a: "start", b: 1 })}${tx(14, 160, "tipo B: grosor d = h/10 · espacio entre letras 0,2 h", { s: 9, a: "start" })}${tx(14, 174, "vertical o inclinada 15° a la derecha", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 10.7 Disposición de vistas en el sistema europeo.
const s7 = (() => {
  const w = 36, h = 26, cx = 104, cy = 62, V = [[cx, cy, "A", "alzado"], [cx, cy + 40, "B", "planta"], [cx + 52, cy, "C", "lat. izq."], [cx - 52, cy, "D", "lat. dcha."], [cx, cy - 40, "E", "inferior"], [cx + 104, cy, "F", "posterior"]];
  return dib("Disposición de las seis vistas en el sistema europeo (primer diedro): la planta debajo del alzado y la vista lateral izquierda a su derecha", `${V.map(([x, y, l, n], i) => `${rect(x - w / 2, y - h / 2, w, h, i ? "var(--pen)" : "var(--red)", i ? 1.6 : 2.4, i ? "var(--pen)" : "var(--red)", 0.08)}${tx(x, y - 1, l, { s: 12, b: 1, c: i ? "var(--pen)" : "var(--red)" })}${tx(x, y + 10, n, { s: 7.5, c: "var(--muted)" })}`).join("")}
  ${tx(14, 160, "sistema europeo (ISO método E)", { s: 9.5, a: "start", b: 1 })}${tx(14, 174, "símbolo:", { s: 9, a: "start", c: "var(--muted)" })}
  ${poli([[60, 166], [60, 178], [80, 175], [80, 169]], "var(--ink)", 1.2, "none")}${circ([100, 172], 6, "var(--ink)", 1.2)}${circ([100, 172], 3, "var(--ink)", 1.2)}${seg([56, 172], [110, 172], "var(--ink)", 0.6, eje)}${tx(246, 174, "americano: planta encima", { s: 8.5, a: "end", c: "var(--muted)" })}`);
})();

// 10.8 Vistas de una pieza.
const s8 = (() => {
  const k = 0.8, X0 = 30, Z0 = 72, Y0 = 92, P0 = 128, sx = (x) => X0 + x * k, sz = (z) => Z0 - z * k, sy = (y) => Y0 + y * k, sp = (y) => P0 + y * k;
  const alz = [[0, 0], [80, 0], [80, 20], [25, 20], [25, 60], [0, 60]].map(([x, z]) => [sx(x), sz(z)]);
  return dib("Alzado, planta y perfil izquierdo de una pieza en L con un taladro pasante, dispuestos según el sistema europeo", `${poli(alz, "var(--ink)", 2.4, "var(--pen)", 0.08)}${seg([sx(48), sz(0)], [sx(48), sz(20)], "var(--ink)", 1.1, dash)}${seg([sx(62), sz(0)], [sx(62), sz(20)], "var(--ink)", 1.1, dash)}${seg([sx(55), sz(-4)], [sx(55), sz(24)], "var(--red)", 0.9, eje)}
  ${rect(sx(0), sy(0), 80 * k, 40 * k, "var(--ink)", 2.4, "var(--pen)", 0.08)}${seg([sx(25), sy(0)], [sx(25), sy(40)], "var(--ink)", 2.4)}${circ([sx(55), sy(20)], 7 * k, "var(--ink)", 2.2)}${seg([sx(55) - 10, sy(20)], [sx(55) + 10, sy(20)], "var(--red)", 0.9, eje)}${seg([sx(55), sy(20) - 10], [sx(55), sy(20) + 10], "var(--red)", 0.9, eje)}
  ${rect(sp(0), sz(60), 40 * k, 60 * k, "var(--ink)", 2.4, "var(--pen)", 0.08)}${seg([sp(13), sz(0)], [sp(13), sz(20)], "var(--ink)", 1.1, dash)}${seg([sp(27), sz(0)], [sp(27), sz(20)], "var(--ink)", 1.1, dash)}${seg([sp(20), sz(-4)], [sp(20), sz(24)], "var(--red)", 0.9, eje)}${seg([sp(0), sz(20)], [sp(40), sz(20)], "var(--ink)", 1.1, dash)}
  ${tx(sx(40), sz(60) - 6, "alzado", { s: 9.5, b: 1, c: "var(--pen)" })}${tx(sx(40), sy(40) + 14, "planta", { s: 9.5, b: 1, c: "var(--pen)" })}${tx(sp(20), sz(60) - 6, "perfil izq.", { s: 9.5, b: 1, c: "var(--pen)" })}
  ${tx(246, 110, "vistas alineadas:", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 122, "alzado-planta: anchura", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 134, "alzado-perfil: altura", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 158, "ocultas: discontinua", { s: 9, a: "end" })}${tx(246, 170, "ejes: trazo y punto", { s: 9, a: "end", c: "var(--red)" })}`);
})();

// 10.9 Elementos de la acotación.
const s9 = (() => {
  const A = [50, 120], B = [190, 120];
  return dib("Elementos de una cota: líneas auxiliares, línea de cota, extremos con flecha y cifra de cota", `${rect(50, 120, 140, 40, "var(--ink)", 2.4, "var(--pen)", 0.08)}${cota(A, B, 40, "70", "var(--pen)", 12)}
  ${flechita([24, 50], [49, 92])}${tx(14, 44, "línea auxiliar", { s: 9.5, a: "start", b: 1 })}${flechita([120, 34], [100, 79])}${tx(120, 28, "línea de cota", { s: 9.5, b: 1 })}
  ${flechita([226, 50], [191, 79])}${tx(246, 44, "extremo (flecha)", { s: 9.5, a: "end", b: 1 })}${flechita([164, 104], [128, 76])}${tx(170, 108, "cifra de cota", { s: 9.5, a: "start", b: 1 })}
  ${tx(130, 176, "la auxiliar sobresale ≈ 2 mm de la línea de cota", { s: 9, c: "var(--muted)" })}`);
})();

// 10.10 Acotación en serie y en paralelo.
const s10 = (() => {
  const perfil = (y) => [[30, y], [230, y], [230, y - 22], [170, y - 22], [170, y - 34], [100, y - 34], [100, y - 22], [30, y - 22]];
  const yA = 62, yB = 166;
  return dib("Sistemas de acotación: en serie (cadena), con cotas consecutivas, y en paralelo, todas desde un mismo elemento de referencia", `${poli(perfil(yA), "var(--ink)", 2.2, "var(--pen)", 0.08)}${cota([30, yA], [100, yA], -10, "35", "var(--pen)", 9)}${cota([100, yA], [170, yA], -10, "35", "var(--pen)", 9)}${cota([170, yA], [230, yA], -10, "30", "var(--pen)", 9)}
  ${tx(14, 14, "en serie", { s: 10, a: "start", b: 1, c: "var(--pen)" })}${tx(246, 14, "los errores se acumulan", { s: 8.5, a: "end", c: "var(--muted)" })}
  ${poli(perfil(yB - 40), "var(--ink)", 2.2, "var(--leaf)", 0.08)}${cota([30, yB - 40], [100, yB - 40], -8, "35", "var(--leaf)", 9)}${cota([30, yB - 40], [170, yB - 40], -20, "70", "var(--leaf)", 9)}${cota([30, yB - 40], [230, yB - 40], -32, "100", "var(--leaf)", 9)}
  ${tx(14, 96, "en paralelo", { s: 10, a: "start", b: 1, c: "var(--leaf)" })}`);
})();

// 10.11 Diámetros, radios, ángulos y chaflanes.
const s11 = (() => {
  const P = [[40, 150], [200, 150], [200, 70], [190, 60], [60, 60], [40, 80]];
  return dib("Acotación de diámetros, radios, chaflanes y ángulos con sus símbolos normalizados", `${poli(P, "var(--ink)", 2.4, "var(--pen)", 0.08)}${circ([120, 105], 18, "var(--ink)", 2.2)}${seg([96, 105], [144, 105], "var(--red)", 0.9, eje)}${seg([120, 81], [120, 129], "var(--red)", 0.9, eje)}
  ${cota(polar([120, 105], 18, 225), polar([120, 105], 18, 45), 0, "", "var(--pen)")}${seg(polar([120, 105], 18, 45), [176, 34], "var(--pen)", 1)}${seg([176, 34], [210, 34], "var(--pen)", 1)}${tx(193, 30, "⌀36", { s: 11, b: 1, c: "var(--pen)" })}
  ${seg([40, 80], [60, 60], "var(--red)", 2.6)}${seg([50, 70], [24, 44], "var(--red)", 1)}${seg([24, 44], [14, 44], "var(--red)", 1)}${tx(16, 38, "20 × 45°", { s: 9.5, b: 1, c: "var(--red)", a: "start" })}
  ${cota([40, 150], [200, 150], -12, "160", "var(--pen)", 9)}${cota([200, 150], [200, 70], -12, "80", "var(--pen)", 9)}
  ${seg([190, 60], [214, 46], "var(--leaf)", 1)}${tx(214, 50, "10×45°", { s: 8.5, a: "start", c: "var(--leaf)", b: 1 })}
  ${tx(14, 14, "⌀ diámetro · R radio · □ cuadrado · S esfera", { s: 8.5, a: "start", c: "var(--muted)" })}`);
})();

// 10.12 Correcto e incorrecto.
const s12 = (() => {
  const pieza = (x) => [[x, 150], [x + 90, 150], [x + 90, 110], [x + 60, 110], [x + 60, 80], [x, 80]];
  return dib("Comparación entre una acotación incorrecta y otra correcta de la misma pieza", `${poli(pieza(14), "var(--ink)", 2.2, "var(--red)", 0.06)}${cota([14, 150], [104, 150], -12, "90", "var(--red)", 9)}${cota([14, 80], [74, 80], -40, "60", "var(--red)", 9)}${cota([74, 110], [104, 110], 30, "30", "var(--red)", 9)}${cota([14, 80], [14, 150], 14, "70", "var(--red)", 9)}
  ${tx(59, 26, "✗ incorrecta", { s: 11, b: 1, c: "var(--red)" })}${tx(59, 176, "dentro, cruzadas, sobrante", { s: 8, c: "var(--red)" })}
  ${poli(pieza(150), "var(--ink)", 2.2, "var(--leaf)", 0.06)}${cota([150, 150], [240, 150], -12, "90", "var(--leaf)", 9)}${cota([150, 80], [210, 80], 10, "60", "var(--leaf)", 9)}${cota([150, 80], [150, 150], 12, "70", "var(--leaf)", 9)}${cota([240, 150], [240, 110], 10, "40", "var(--leaf)", 9)}
  ${tx(195, 26, "✓ correcta", { s: 11, b: 1, c: "var(--leaf)" })}${tx(195, 176, "fuera y sin repetir", { s: 8, c: "var(--leaf)" })}${seg([130, 20], [130, 170], "var(--line)", 1)}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Normalización y acotación",
  minutos: 110,
  objetivos: [
    "Comprender la función de la normalización y conocer los organismos y normas principales",
    "Utilizar correctamente los formatos, el recuadro, el cuadro de rotulación y las escalas normalizadas",
    "Aplicar los tipos y grosores de línea y la rotulación normalizada",
    "Representar piezas mediante sus vistas en el sistema europeo, eligiendo las vistas necesarias",
    "Conocer los elementos de la acotación y los sistemas de acotación",
    "Acotar piezas sencillas aplicando las normas: diámetros, radios, chaflanes y criterios generales",
  ],
  claves: ["normalización", "norma UNE", "ISO", "formato", "cuadro de rotulación", "escala", "tipos de línea", "rotulación", "vistas", "sistema europeo", "acotación", "línea de cota"],
  lectura: {
    titulo: "Un tornillo que encaja en todo el mundo",
    html: `<p>Si compras un tornillo de métrica 6 en una ferretería de Valencia, encajará en una tuerca fabricada en Alemania, Japón o Brasil. Parece normal, pero no siempre fue así. A principios del siglo XX cada fabricante hacía sus propias roscas, sus formatos de papel y sus símbolos, y entenderse entre empresas era complicadísimo. Durante la Primera Guerra Mundial, la industria alemana descubrió que piezas de distintas fábricas no eran intercambiables, y en 1917 creó un comité para unificarlas: el origen de las normas <b>DIN</b>.</p>
    <p>Hoy la <b>normalización</b> está en todas partes: en el tamaño A4 de tus hojas, en los enchufes, en las tarjetas bancarias y, por supuesto, en el dibujo técnico. Un plano normalizado lo puede leer sin ambigüedades cualquier técnico del mundo, porque las líneas, las vistas, las cotas y los símbolos significan lo mismo en todas partes.</p>
    <p>En este tema aprenderás las normas básicas del dibujo técnico: formatos, escalas, líneas, rotulación, disposición de vistas y, sobre todo, cómo <b>acotar</b> una pieza para que pueda fabricarse.</p>`,
  },
  pregunta: {
    texto: "Si doblas una hoja A4 por la mitad obtienes una A5 con la misma forma. ¿Qué proporción deben tener los lados para que eso ocurra?",
    respuesta: "Si los lados son a y b (a > b), al doblar queda b y a/2. Para que la forma se conserve: a/b = b/(a/2), luego a² = 2b² y <mark>a/b = √2</mark>. Es la proporción de toda la serie A.",
  },
  bloques: [
    {
      html: `<h3>10.1 La normalización</h3><p>La <b>normalización</b> es la actividad que establece reglas comunes, llamadas <b>normas</b>, para resolver problemas repetitivos de la técnica, la industria y el comercio. Sus objetivos son la <b>simplificación</b> (reducir variedad innecesaria), la <b>unificación</b> (permitir la intercambiabilidad de piezas) y la <b>especificación</b> (definir con precisión, sin ambigüedad).</p><p>Las normas son documentos técnicos aprobados por un organismo reconocido, elaborados por consenso entre fabricantes, usuarios y administraciones. Los principales organismos son:</p><ul><li><b>ISO</b> (Organización Internacional de Normalización), con sede en Ginebra, que publica normas internacionales.</li><li><b>CEN</b> (Comité Europeo de Normalización), que publica las normas europeas <b>EN</b>, de obligada adopción por los países miembros.</li><li><b>UNE</b> (Asociación Española de Normalización), que publica las normas españolas <b>UNE</b>.</li></ul><p>El código de una norma indica su origen. Por ejemplo, <b>UNE-EN ISO 5457</b> es una norma internacional ISO adoptada como europea y como española. Otras siglas históricas son DIN (Alemania), ANSI (Estados Unidos) o BS (Reino Unido).</p><p>En dibujo técnico, las normas regulan los formatos, las escalas, las líneas, la rotulación, las vistas, los cortes, la acotación, las tolerancias y los símbolos. Gracias a ellas, el dibujo técnico es un <b>lenguaje universal</b>: un plano bien normalizado se entiende sin necesidad de traducción.</p>`,
      svg: s1,
    },
    {
      html: `<h3>10.2 Formatos de papel</h3><p>Los formatos de papel están definidos en la norma <b>UNE-EN ISO 216</b> y se basan en tres principios:</p><ul><li><b>Semejanza</b>: todos los formatos tienen la misma proporción entre sus lados, <b>1 : √2</b>. Así, al doblar o cortar una hoja por la mitad, se obtiene otra semejante.</li><li><b>Doblado</b>: cada formato se obtiene dividiendo el anterior por la mitad del lado mayor.</li><li><b>Referencia al metro cuadrado</b>: el formato de partida, <b>A0</b>, tiene una superficie de 1 m² (841 × 1189 mm).</li></ul><p>A partir de A0 se obtienen A1 (594 × 841), A2 (420 × 594), <b>A3 (297 × 420)</b>, <b>A4 (210 × 297)</b>, A5 (148 × 210) y así sucesivamente. Las medidas se redondean al milímetro.</p><p>Además de la <b>serie A</b>, la principal, existen la <b>serie B</b> (formatos intermedios, como sobres o carteles) y la <b>serie C</b> (sobres en los que caben los formatos A).</p><p>La proporción √2 tiene ventajas prácticas: se puede ampliar o reducir un documento de un formato a otro con una fotocopiadora sin dejar márgenes vacíos (de A4 a A3 la ampliación es del 141 %, es decir, √2), y se aprovecha mejor el papel en la fabricación.</p><p>Los formatos se pueden usar en posición horizontal (apaisada) o vertical. En dibujo técnico de bachillerato son habituales el A4 vertical y el A3 apaisado.</p>`,
      svg: s2,
      video: { id: "G1Zkiytd8vE", titulo: "¿Por qué una hoja de papel es de tamaño DIN A4?", canal: "Derivando", vistas: 668855, busqueda: "por qué el papel A4 proporción raíz de 2" },
    },
    {
      html: `<h3>10.3 La lámina: márgenes, recuadro y cuadro de rotulación</h3><p>Un plano normalizado (<b>UNE-EN ISO 5457</b>) contiene, además del dibujo, varios elementos fijos:</p><ul><li><b>Margen y recuadro</b>: el dibujo se encierra en un recuadro trazado con línea gruesa. El margen es de 20 mm en el lado izquierdo (para archivar o encuadernar) y de 10 mm en los demás.</li><li><b>Señales de centrado</b>: pequeños trazos en el centro de cada lado que facilitan la reproducción y el microfilmado.</li><li><b>Cuadro de rotulación</b> (<b>UNE-EN ISO 7200</b>): situado en la esquina inferior derecha, contiene los datos de identificación del plano: título, número de plano, escala, autor, fecha, centro o empresa, sistema de representación y, en su caso, material. Debe leerse en la misma dirección que el dibujo.</li></ul><p>Otros elementos opcionales son la lista de piezas (encima del cuadro de rotulación), el sistema de coordenadas de la hoja y las marcas de corte.</p><p>Cuando un plano de gran formato debe archivarse en carpetas A4, se <b>pliega</b> según la norma UNE 1027, en acordeón, de modo que el cuadro de rotulación quede siempre visible en la parte delantera.</p><p>En las láminas escolares conviene diseñar un cuadro de rotulación sencillo y usar siempre el mismo: nombre, curso, título de la lámina, número, escala y fecha. La limpieza y la coherencia de estos elementos dicen mucho de la calidad del trabajo.</p>`,
      svg: s3,
    },
    {
      html: `<h3>10.4 Escalas</h3><p>La <b>escala</b> es la relación entre las dimensiones del dibujo y las dimensiones reales del objeto:</p><p style="text-align:center"><b>E = medida en el dibujo : medida real</b></p><p>Se distinguen tres tipos (<b>UNE-EN ISO 5455</b>):</p><ul><li><b>Escala natural</b> 1:1: el dibujo tiene el mismo tamaño que el objeto.</li><li><b>Escalas de reducción</b>: 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200… Se usan para objetos grandes: muebles, edificios, terrenos.</li><li><b>Escalas de ampliación</b>: 2:1, 5:1, 10:1, 20:1, 50:1… Para objetos pequeños: piezas de relojería, componentes electrónicos.</li></ul><p>Las escalas recomendadas siguen la serie 1, 2, 5 y sus múltiplos de 10, para facilitar los cálculos.</p><p>Una regla fundamental: <b>las cotas indican siempre la medida real del objeto</b>, sea cual sea la escala del dibujo. En el ejemplo, la pieza se dibuja a tres escalas diferentes y todas llevan la cota 40.</p><p>La escala principal se indica en el cuadro de rotulación. Si un detalle se dibuja a otra escala, se indica junto a él, por ejemplo «Detalle A (5:1)».</p><p>Para dibujar a escala se puede multiplicar cada medida por el factor de escala, usar un <b>escalímetro</b> (regla triangular con seis escalas) o construir una <b>escala gráfica</b> mediante el teorema de Tales, como viste en el tema de trazados fundamentales. Las escalas gráficas tienen la ventaja de que siguen siendo válidas si el plano se amplía o reduce al fotocopiarlo.</p>`,
      svg: s4,
    },
    {
      html: `<h3>10.5 Líneas normalizadas</h3><p>En un plano, cada tipo de línea tiene un significado preciso (<b>UNE-EN ISO 128-2</b>). Las más usadas son:</p><ul><li><b>Continua gruesa</b>: contornos y aristas visibles.</li><li><b>Continua fina</b>: líneas de cota y auxiliares, rayados de cortes, contornos de secciones abatidas, aristas ficticias, ejes cortos.</li><li><b>Discontinua fina</b> (trazos cortos): contornos y aristas ocultos.</li><li><b>Trazo y punto fina</b>: ejes de simetría, ejes de revolución, trayectorias, circunferencias primitivas de engranajes.</li><li><b>Trazo y punto gruesa</b>: indicación de superficies con tratamientos especiales.</li><li><b>Trazo y doble punto fina</b>: contornos de piezas contiguas, posiciones extremas de piezas móviles.</li><li><b>Fina a mano alzada</b> o en zigzag: límites de vistas parciales o roturas.</li></ul><p>Los grosores se eligen de la serie 0,13 – 0,18 – 0,25 – 0,35 – 0,5 – 0,7 – 1 – 1,4 – 2 mm (razón √2). En cada dibujo se usan dos grosores, con la relación <b>gruesa = 2 × fina</b>, por ejemplo 0,5 y 0,25 mm.</p><p>Reglas de uso: si coinciden dos líneas, prevalece por este orden la continua gruesa, la discontinua, la de corte, el eje y la de cota. Los ejes deben sobresalir ligeramente del contorno. Las líneas de trazos deben cortarse en un trazo, no en un hueco, cuando se cruzan.</p><p>Una buena jerarquía de líneas hace el dibujo legible de un vistazo: el contorno grueso destaca y la información auxiliar queda en segundo plano.</p>`,
      svg: s5,
    },
    {
      html: `<h3>10.6 Rotulación normalizada</h3><p>Los textos de un plano (cotas, títulos, notas, cuadro de rotulación) se escriben con <b>escritura normalizada</b> (<b>UNE-EN ISO 3098</b>), cuyo objetivo es la <b>legibilidad</b>, la <b>uniformidad</b> y la aptitud para la reproducción.</p><p>Sus parámetros principales son:</p><ul><li><b>Altura nominal h</b>: la altura de las mayúsculas. Se elige de la serie 2,5 – 3,5 – 5 – 7 – 10 – 14 – 20 mm (razón √2, como los formatos y los grosores de línea), de modo que al ampliar o reducir un plano los textos sigan siendo normalizados.</li><li><b>Altura de las minúsculas c</b>: 0,7 h en la escritura de tipo B.</li><li><b>Espacio entre caracteres</b>: 0,2 h; entre palabras, 0,6 h; entre líneas, 1,4 h.</li><li><b>Grosor del trazo d</b>: h/10 en el tipo B (h/14 en el tipo A, más estrecho).</li></ul><p>La escritura puede ser <b>vertical</b> o <b>inclinada 15°</b> hacia la derecha. En un mismo plano debe mantenerse un solo estilo.</p><p>Para rotular a mano se trazan primero líneas guía muy finas (la de la base, la de las minúsculas y la de las mayúsculas) y se escribe con letras sencillas, sin adornos. Hoy se usa mucho la rotulación con programas de CAD, que incorporan fuentes normalizadas.</p><p>En las láminas escolares conviene usar h = 3,5 mm para las cotas y 5 o 7 mm para los títulos. Una rotulación cuidada da un aspecto profesional y evita errores de lectura en las cifras.</p>`,
      svg: s6,
    },
    {
      html: `<h3>10.7 Las vistas: el sistema europeo</h3><p>Una pieza se representa mediante sus <b>vistas</b>: proyecciones ortogonales sobre las caras de un cubo imaginario que la envuelve (<b>UNE-EN ISO 5456-2</b> y <b>ISO 128-30</b>). Hay seis vistas posibles: alzado (A), planta superior (B), vista lateral izquierda (C), vista lateral derecha (D), planta inferior (E) y vista posterior (F).</p><p>La disposición de las vistas depende del sistema:</p><ul><li><b>Sistema europeo</b> (método E, primer diedro), usado en España y en la mayor parte de Europa: el objeto está entre el observador y el plano de proyección. La <b>planta va debajo del alzado</b>, la <b>vista lateral izquierda a la derecha</b> del alzado, la lateral derecha a su izquierda, la inferior encima y la posterior a la derecha de todo.</li><li><b>Sistema americano</b> (método A, tercer diedro): el plano está entre el observador y el objeto, y las posiciones se invierten: la planta va encima del alzado.</li></ul><p>El sistema utilizado se indica en el cuadro de rotulación con un <b>símbolo</b>: un tronco de cono visto de frente y de perfil, en la posición correspondiente a cada sistema.</p><p>Las vistas guardan una <b>correspondencia</b> estricta, que conviene recordar: el alzado y la planta tienen la misma <b>anchura</b>; el alzado y el perfil, la misma <b>altura</b>; la planta y el perfil, la misma <b>profundidad</b>. Esta relación es la que estudiaste en el sistema diédrico: el alzado es la proyección vertical y la planta la horizontal.</p>`,
      svg: s7,
      video: { id: "0FyPtyVsFJk", titulo: "Proyección ortogonal", canal: "TuBoceto", vistas: 1208102, busqueda: "vistas de una pieza alzado planta perfil" },
    },
    {
      html: `<h3>10.8 Elección y representación de vistas</h3><p>No hace falta dibujar las seis vistas: se dibujan las <b>mínimas necesarias</b> para definir la pieza sin ambigüedad. Muchas piezas quedan definidas con tres vistas (alzado, planta y perfil), algunas con dos e incluso con una si se usan símbolos como ⌀.</p><p>Criterios para elegir las vistas:</p><ul><li>El <b>alzado</b> debe ser la vista más representativa: la que muestra más detalles y la forma más característica, con la pieza en su posición de trabajo o de fabricación.</li><li>Se eligen las demás vistas de modo que tengan el <b>menor número de aristas ocultas</b>.</li><li>Se evitan vistas repetidas o que no aporten información.</li></ul><p>En las vistas:</p><ul><li>Las aristas y contornos visibles se dibujan con <b>línea continua gruesa</b>.</li><li>Las aristas ocultas, con <b>línea discontinua fina</b>, solo si son necesarias para entender la pieza.</li><li>Los <b>ejes de simetría</b> y de los taladros, con <b>trazo y punto fina</b>, sobresaliendo unos 3 mm del contorno.</li></ul><p>En el ejemplo, la pieza en L con un taladro pasante vertical queda definida por el alzado y la planta, pero el perfil ayuda a leerla. El taladro aparece como circunferencia en la planta y como líneas ocultas en las otras dos vistas, siempre con su eje.</p><p>Una buena práctica es dibujar las tres vistas a la vez, trasladando las medidas con líneas de referencia tenues: así se garantiza la correspondencia entre ellas.</p>`,
      svg: s8,
    },
    {
      html: `<h3>10.9 La acotación: elementos</h3><p><b>Acotar</b> es indicar sobre el dibujo las dimensiones del objeto, para que pueda fabricarse o construirse. La norma de referencia es la <b>UNE-EN ISO 129-1</b>. Los elementos de una cota son:</p><ul><li><b>Líneas auxiliares de cota</b> (o de referencia): líneas finas que prolongan el contorno, perpendiculares al elemento que se acota. Sobresalen unos 2 mm de la línea de cota.</li><li><b>Línea de cota</b>: línea fina paralela al elemento acotado, situada a una distancia de unos 8-10 mm del contorno (y la siguiente, a 6-8 mm de la anterior).</li><li><b>Extremos de cota</b>: normalmente <b>flechas</b> cerradas y rellenas, con un ángulo de unos 15° a 20°; también se usan trazos oblicuos a 45° (en arquitectura) o puntos.</li><li><b>Cifra de cota</b>: el número que indica la medida real, en milímetros por defecto (no se escribe la unidad). Se sitúa centrada, encima de la línea de cota y paralela a ella, de modo que se lea desde abajo o desde la derecha del plano.</li></ul><p>Algunos elementos no tienen cotas propias, sino <b>símbolos</b>: ⌀ (diámetro), R (radio), □ (cuadrado), S⌀ o SR (esfera).</p><p>Las cifras deben tener una altura uniforme (3,5 mm es lo habitual en láminas A4 y A3) y nunca deben cortarse por ninguna línea del dibujo. Si no hay espacio entre las líneas auxiliares, las flechas se colocan por fuera y la cifra se puede desplazar.</p>`,
      svg: s9,
    },
    {
      html: `<h3>10.10 Sistemas de acotación</h3><p>Según cómo se encadenan las cotas, se distinguen varios sistemas:</p><ul><li><b>En serie</b> (o en cadena): cada cota va a continuación de la anterior. Es sencillo, pero los <b>errores de fabricación se acumulan</b>: si cada medida tiene una pequeña desviación, la posición del último elemento puede alejarse mucho de la prevista. Se usa cuando lo que importa es la distancia entre elementos consecutivos.</li><li><b>En paralelo</b>: todas las cotas parten de un mismo <b>elemento de referencia</b> (una cara, un eje). Cada medida es independiente y los errores no se acumulan, pero ocupa más espacio.</li><li><b>Progresiva</b> o con cotas superpuestas: variante del paralelo con una sola línea de cota, un origen marcado con un pequeño círculo y las cifras escritas en las líneas auxiliares.</li><li><b>Combinada</b>: mezcla de los anteriores, la más frecuente en la práctica.</li><li><b>Por coordenadas</b>: los elementos se sitúan con dos cotas (x, y) desde un origen, a menudo mediante una tabla. Muy útil en piezas con muchos taladros y en el control numérico.</li></ul><p>La elección del sistema depende de la <b>función</b> de la pieza y del <b>proceso de fabricación</b>: las cotas deben partir de las superficies de referencia que se usarán al mecanizar o al comprobar la pieza. Este criterio, llamado acotación funcional, se estudia con más detalle en Dibujo Técnico II.</p>`,
      svg: s10,
    },
    {
      html: `<h3>10.11 Acotación de elementos particulares</h3><p>Muchos elementos se acotan con convenciones y símbolos específicos:</p><ul><li><b>Diámetros</b>: se usa el símbolo <b>⌀</b> delante de la cifra. Se pueden acotar sobre la circunferencia, con una línea de cota que pasa por el centro, o desde fuera con una línea de referencia. Si la pieza es cilíndrica, el símbolo ⌀ permite acotar el diámetro en una vista lateral, sin necesidad de dibujar la circunferencia.</li><li><b>Radios</b>: se usa la letra <b>R</b> delante de la cifra. La línea de cota parte del centro (o de su dirección) y lleva una sola flecha que toca el arco.</li><li><b>Ángulos</b>: la línea de cota es un arco con centro en el vértice del ángulo y la cifra lleva el símbolo de grado.</li><li><b>Chaflanes</b>: los de 45° se acotan de forma abreviada, «longitud × 45°» (por ejemplo, 10 × 45°); los demás, con una longitud y un ángulo o con dos longitudes.</li><li><b>Elementos repetidos</b>: se acota uno y se indica el número, por ejemplo «4 × ⌀8».</li><li><b>Cuadrados</b>: el símbolo □ delante de la medida del lado; <b>esferas</b>: S⌀ o SR.</li></ul><p>Las piezas simétricas se acotan respecto a su eje de simetría. Los taladros se sitúan por la posición de sus ejes, no por sus bordes.</p><p>Estos símbolos ahorran vistas y cotas: un eje escalonado puede quedar totalmente definido con una sola vista acotada con diámetros.</p>`,
      svg: s11,
    },
    {
      html: `<h3>10.12 Normas generales de acotación</h3><p>Para que un plano esté bien acotado debe ser <b>completo</b>, <b>claro</b> y <b>sin redundancias</b>. Las reglas básicas son:</p><ol><li>Cada elemento se acota <b>una sola vez</b>: no se repiten cotas en distintas vistas.</li><li>Deben figurar <b>todas las cotas necesarias</b> para fabricar la pieza sin tener que medir sobre el dibujo ni hacer cálculos.</li><li>No se acota a <b>aristas ocultas</b>: se elige la vista en la que el elemento se ve.</li><li>Las cotas se colocan preferentemente <b>fuera de la pieza</b> y en la vista que mejor muestra la forma del elemento.</li><li>Las líneas de cota <b>no deben cortarse</b> entre sí ni con las auxiliares, siempre que sea posible: las cotas pequeñas se colocan más cerca de la pieza y las grandes más lejos.</li><li>No se usan como líneas de cota los <b>ejes</b> ni las aristas de la pieza.</li><li>Las cotas relacionadas (por ejemplo, la posición y el diámetro de un taladro) se agrupan en la misma vista.</li><li>Se evitan las <b>cadenas cerradas</b>: si se acota la longitud total, se deja una de las parciales sin acotar (o se indica entre paréntesis como cota auxiliar).</li></ol><p>En el ejemplo, la acotación de la izquierda tiene cotas dentro de la pieza, líneas que se cruzan y una cota sobrante, mientras que la de la derecha cumple las normas y define la pieza con cuatro cotas.</p><p>Acotar bien requiere práctica y, sobre todo, pensar en quien va a fabricar la pieza.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Calcula las medidas del formato A3 a partir de A0 (841 × 1189 mm).", pasos: ["A1: se divide el lado mayor por 2: 594 × 841.", "A2: 420 × 594.", "A3: 297 × 420."], resultado: "A3 = 297 × 420 mm." },
    { enunciado: "Una pieza de 240 mm de longitud se dibuja con 48 mm. ¿Qué escala se ha usado?", pasos: ["E = dibujo : realidad = 48 : 240.", "Simplificando: 1 : 5."], resultado: "Escala 1:5 (de reducción)." },
    { enunciado: "Dibuja a escala 2:1 un taladro de ⌀ 6 mm. ¿Qué diámetro tiene en el dibujo y qué cota se escribe?", pasos: ["En el dibujo: 6 · 2 = 12 mm.", "La cota indica la medida real."], resultado: "Se dibuja con 12 mm y se acota ⌀6." },
    { enunciado: "¿Qué altura de minúsculas y qué grosor de trazo corresponden a una rotulación tipo B de h = 5 mm?", pasos: ["c = 0,7 h = 3,5 mm.", "d = h/10 = 0,5 mm."], resultado: "Minúsculas de 3,5 mm y trazo de 0,5 mm." },
    { enunciado: "En el sistema europeo, ¿dónde se coloca la vista lateral izquierda?", pasos: ["En el primer diedro el objeto está entre el observador y el plano.", "Lo que se ve desde la izquierda se proyecta en el plano situado a la derecha."], resultado: "A la derecha del alzado." },
    { enunciado: "Una placa tiene tres taladros alineados a 20, 50 y 90 mm de la cara izquierda. Acótalos en serie y en paralelo.", pasos: ["En serie: 20, 30, 40 (diferencias sucesivas).", "En paralelo: 20, 50 y 90, todas desde la cara izquierda.", "En paralelo los errores no se acumulan."], resultado: "Serie: 20-30-40. Paralelo: 20, 50, 90." },
  ],
  errores: [
    "Escribir en las cotas la medida del dibujo en lugar de la medida real.",
    "Acotar a aristas ocultas o repetir la misma cota en dos vistas.",
    "Colocar la planta encima del alzado (sistema americano) sin indicarlo.",
    "Usar los ejes o las aristas de la pieza como líneas de cota.",
    "Dibujar todas las líneas con el mismo grosor, sin jerarquía.",
    "Cerrar cadenas de cotas (parciales más total), lo que crea contradicciones de fabricación.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define normalización y nombra sus tres objetivos.", sol: "Actividad que establece normas comunes para problemas repetitivos. Objetivos: simplificar, unificar (intercambiabilidad) y especificar sin ambigüedad." },
    { nivel: "básico", q: "¿Qué significa el código UNE-EN ISO 7200?", sol: "Norma internacional ISO 7200 adoptada como europea (EN) y española (UNE). Regula el cuadro de rotulación." },
    { nivel: "básico", q: "¿Cuáles son las medidas de los formatos A4 y A3?", sol: "A4: 210 × 297 mm. A3: 297 × 420 mm." },
    { nivel: "básico", q: "¿Qué proporción tienen los formatos de la serie A?", sol: "1 : √2 (1 : 1,414)." },
    { nivel: "básico", q: "¿Dónde se sitúa el cuadro de rotulación y qué datos contiene?", sol: "En la esquina inferior derecha. Título, número, escala, autor, fecha, centro, sistema de representación y, si procede, material." },
    { nivel: "básico", q: "Clasifica las escalas 1:50, 1:1 y 5:1.", sol: "1:50 de reducción, 1:1 natural, 5:1 de ampliación." },
    { nivel: "básico", q: "¿Qué tipo de línea se usa para las aristas ocultas? ¿Y para los ejes?", sol: "Discontinua fina para las ocultas; trazo y punto fina para los ejes." },
    { nivel: "básico", q: "Nombra los cuatro elementos de una cota.", sol: "Líneas auxiliares, línea de cota, extremos (flechas) y cifra de cota." },
    { nivel: "básico", q: "¿Qué significan los símbolos ⌀, R y □?", sol: "Diámetro, radio y cuadrado." },
    { nivel: "básico", q: "En el sistema europeo, ¿dónde va la planta?", sol: "Debajo del alzado." },
    { nivel: "medio", q: "Demuestra que la superficie de A4 es 1/16 m².", sol: "Cada formato es la mitad del anterior: A4 = A0/2⁴ = 1/16 m² = 0,0625 m². Comprobación: 0,210 · 0,297 = 0,0624 m²." },
    { nivel: "medio", q: "¿Qué porcentaje de ampliación de fotocopiadora pasa de A4 a A3? ¿Y de A4 a A5?", sol: "A3: × √2 ≈ 141 %. A5: × 1/√2 ≈ 71 %." },
    { nivel: "medio", q: "Un edificio de 36 m de fachada se dibuja en un A3 apaisado dejando 60 mm a cada lado. ¿Qué escala normalizada conviene?", sol: "Espacio útil ≈ 420 − 120 = 300 mm. 36 000/300 = 120 → se necesita al menos 1:120; la normalizada inmediata es 1:200 (180 mm de dibujo)." },
    { nivel: "medio", q: "Una pieza de reloj de 3 mm se quiere dibujar con unos 30 mm. ¿Qué escala usarías?", sol: "10:1 (ampliación)." },
    { nivel: "medio", q: "Elige los grosores de línea si la línea gruesa es de 0,7 mm.", sol: "Fina: 0,35 mm (la mitad, de la serie normalizada)." },
    { nivel: "medio", q: "Calcula los parámetros de una rotulación tipo B con h = 7 mm.", sol: "Minúsculas 4,9 mm; grosor 0,7 mm; espacio entre letras 1,4 mm; entre palabras 4,2 mm; entre líneas 9,8 mm." },
    { nivel: "medio", q: "Dibuja las tres vistas (sistema europeo) de un prisma de 60 × 40 × 30 con un taladro pasante vertical de ⌀ 16 centrado.", sol: "Alzado: rectángulo 60 × 30 con dos líneas ocultas a 8 mm del eje y el eje. Planta: rectángulo 60 × 40 con circunferencia de ⌀16 y dos ejes. Perfil: rectángulo 40 × 30 con ocultas y eje." },
    { nivel: "medio", q: "Explica la correspondencia de medidas entre alzado, planta y perfil.", sol: "Alzado y planta comparten la anchura; alzado y perfil la altura; planta y perfil la profundidad." },
    { nivel: "medio", q: "Acota en paralelo cuatro taladros situados a 15, 40, 65 y 90 mm del borde izquierdo de una placa de 105 mm.", sol: "Cuatro cotas desde el borde izquierdo: 15, 40, 65 y 90, más la total 105, escalonadas de menor a mayor alejándose de la pieza. Los diámetros, con 4 × ⌀ si son iguales." },
    { nivel: "medio", q: "Acota un chaflán de 45° de 3 mm y un redondeo de radio 5.", sol: "Chaflán: «3 × 45°» con línea de referencia. Redondeo: «R5» con una línea de cota desde el centro y una flecha en el arco." },
    { nivel: "medio", q: "¿Por qué no se debe acotar a aristas ocultas?", sol: "Porque son difíciles de leer y producen ambigüedad; el elemento se acota en la vista en que se ve con línea continua." },
    { nivel: "medio", q: "Indica qué falla en una acotación con las cotas parciales 20, 30, 40 y la total 90.", sol: "Es una cadena cerrada: la total coincide con la suma de parciales y, si hay desviaciones, la pieza no puede cumplir todas. Se suprime una parcial o se indica entre paréntesis como auxiliar." },
    { nivel: "avanzado", q: "Deduce que la proporción de la serie A debe ser √2.", sol: "Formato a × b (a > b). Al dividir: b × a/2. Semejanza: a/b = b/(a/2) → a² = 2b² → a/b = √2." },
    { nivel: "avanzado", q: "Calcula las medidas exactas de A0 sabiendo que su área es 1 m² y la proporción √2.", sol: "b · b√2 = 1 m² → b = 1/2^(1/4) ≈ 0,8409 m y a = 2^(1/4) ≈ 1,1892 m: 841 × 1189 mm." },
    { nivel: "avanzado", q: "Construye una escala gráfica 1:25 para medir hasta 2 m y explica su ventaja.", sol: "2 m a 1:25 son 80 mm; se divide en 4 partes de 20 mm (0,5 m) y la primera en 5 partes de 4 mm (0,1 m) a la izquierda del cero (talón). Sigue siendo válida si el plano se amplía o reduce." },
    { nivel: "avanzado", q: "Dibuja las vistas en el sistema americano de la pieza en L del bloque 10.8 y compáralas con las del europeo.", sol: "Alzado igual; la planta va encima del alzado y la vista lateral izquierda a la izquierda. El símbolo del tronco de cono cambia de lado. Las vistas son idénticas; solo cambia su posición." },
    { nivel: "avanzado", q: "Acota completamente la pieza en L con taladro del bloque 10.8 (80 × 40 × 60, base 20, brazo 25, ⌀14 a 55 mm del borde izquierdo).", sol: "Alzado: 80 (total), 60 (altura), 20 (base), 25 (brazo). Planta: 40 (profundidad), posición del taladro 55 (o 30 desde la derecha) y 20 (centrado), y ⌀14. Sin repetir ninguna medida y sin acotar a ocultas." },
    { nivel: "avanzado", q: "¿Cuándo es preferible la acotación en serie a la acotación en paralelo?", sol: "Cuando lo funcional es la distancia entre elementos consecutivos, por ejemplo el paso entre taladros que deben coincidir con los de otra pieza, o en construcción, donde se replantea elemento a elemento." },
    { nivel: "avanzado", q: "Una pieza cilíndrica escalonada tiene tres tramos de ⌀ 20, 30 y 16 y longitudes 25, 40 y 15. ¿Cuántas vistas hacen falta? Acótala.", sol: "Una sola vista con el eje horizontal. Diámetros ⌀20, ⌀30, ⌀16 (con símbolo); longitudes en paralelo desde una cara de referencia (25, 65, 80) o combinadas, sin cerrar la cadena." },
    { nivel: "avanzado", q: "Explica por qué los grosores de línea, las alturas de letra y los formatos siguen la razón √2.", sol: "Al ampliar o reducir un plano de un formato A a otro (factor √2 o 1/√2), las líneas y los textos pasan a tener otro valor de la misma serie normalizada, de modo que el plano sigue cumpliendo la norma." },
  ],
  quiz: reparte([
    { q: "La norma internacional la publica…", o: ["UNE", "ISO", "CEN", "DIN"], a: 1, e: "Organización Internacional." },
    { q: "Las normas europeas llevan la sigla…", o: ["UNE", "EN", "ISO", "ANSI"], a: 1, e: "CEN." },
    { q: "La proporción de los formatos A es…", o: ["1:2", "1:√2", "2:3", "3:4"], a: 1, e: "Semejanza al doblar." },
    { q: "El formato A0 tiene una superficie de…", o: ["0,5 m²", "1 m²", "2 m²", "0,25 m²"], a: 1, e: "841 × 1189." },
    { q: "El formato A4 mide…", o: ["210 × 297", "297 × 420", "148 × 210", "200 × 300"], a: 0, e: "mm." },
    { q: "El margen izquierdo de la lámina es de…", o: ["5 mm", "10 mm", "20 mm", "30 mm"], a: 2, e: "Para archivar." },
    { q: "El cuadro de rotulación va en…", o: ["la esquina superior izquierda", "la esquina inferior derecha", "el centro", "el reverso"], a: 1, e: "ISO 7200." },
    { q: "Escala 1:5 es de…", o: ["ampliación", "reducción", "natural", "ninguna"], a: 1, e: "El dibujo es menor." },
    { q: "Las cotas indican…", o: ["la medida del dibujo", "la medida real", "la medida a escala", "nada"], a: 1, e: "Siempre la real." },
    { q: "Los contornos visibles se dibujan con línea…", o: ["continua fina", "continua gruesa", "discontinua", "de trazo y punto"], a: 1, e: "Jerarquía." },
    { q: "Los ejes de simetría se dibujan con…", o: ["continua gruesa", "trazo y punto fina", "discontinua", "zigzag"], a: 1, e: "ISO 128." },
    { q: "Relación de grosores gruesa/fina:", o: ["1", "2", "3", "√2"], a: 1, e: "0,5 / 0,25." },
    { q: "En la rotulación tipo B, la altura de las minúsculas es…", o: ["0,5 h", "0,7 h", "h", "1,4 h"], a: 1, e: "c = 0,7 h." },
    { q: "En el sistema europeo la planta va…", o: ["encima del alzado", "debajo del alzado", "a la derecha", "a la izquierda"], a: 1, e: "Primer diedro." },
    { q: "La vista lateral izquierda, en el europeo, se coloca…", o: ["a la izquierda del alzado", "a la derecha del alzado", "debajo", "encima"], a: 1, e: "Se proyecta al lado opuesto." },
    { q: "Alzado y perfil tienen en común…", o: ["la anchura", "la altura", "la profundidad", "nada"], a: 1, e: "Correspondencia." },
    { q: "La cifra de cota se coloca…", o: ["debajo de la línea de cota", "encima de la línea de cota, centrada", "dentro de la flecha", "en el cuadro de rotulación"], a: 1, e: "Paralela y centrada." },
    { q: "En la acotación en serie…", o: ["los errores no se acumulan", "los errores se acumulan", "todas parten de un origen", "no se usan flechas"], a: 1, e: "Cadena." },
    { q: "Un chaflán de 45° de 2 mm se acota…", o: ["R2", "2 × 45°", "⌀2", "□2"], a: 1, e: "Forma abreviada." },
    { q: "Se debe evitar acotar…", o: ["fuera de la pieza", "a aristas ocultas", "en paralelo", "con flechas"], a: 1, e: "Norma general." },
  ], 2),
  examen: reparte([
    { q: "Pieza de 150 mm dibujada con 300 mm: escala", o: ["1:2", "2:1", "1:1", "5:1"], a: 1, e: "300 : 150." },
    { q: "De A3 a A4 la fotocopiadora reduce al…", o: ["50 %", "71 %", "141 %", "81 %"], a: 1, e: "1/√2." },
    { q: "Rotulación h = 10 mm, tipo B: grosor del trazo", o: ["0,5 mm", "1 mm", "0,7 mm", "1,4 mm"], a: 1, e: "h/10." },
    { q: "Si coinciden una arista oculta y una vista, se dibuja…", o: ["la oculta", "la vista (continua gruesa)", "las dos", "ninguna"], a: 1, e: "Prioridad." },
    { q: "Sistema que sitúa todos los elementos desde una referencia común:", o: ["serie", "paralelo", "cadena cerrada", "libre"], a: 1, e: "Paralelo." },
    { q: "Cuatro taladros iguales de 8 mm se acotan…", o: ["⌀8 en cada uno", "4 × ⌀8", "R4 × 4", "8 × 4"], a: 1, e: "Repetidos." },
    { q: "Medida de A2:", o: ["420 × 594", "297 × 420", "594 × 841", "210 × 297"], a: 0, e: "Mitad de A1." },
    { q: "Vista que conviene elegir como alzado:", o: ["la más sencilla", "la más representativa", "la inferior", "la posterior"], a: 1, e: "Más información." },
  ], 3),
  feynman: ["Para qué sirve la normalización en el dibujo técnico", "Por qué los formatos A tienen la proporción √2", "Qué indica una escala y por qué las cotas son siempre reales", "Cómo se disponen las vistas en el sistema europeo", "Qué diferencias hay entre acotar en serie y en paralelo"],
  glosario: [
    ["Normalización", "Actividad que establece normas comunes para simplificar, unificar y especificar."],
    ["Norma", "Documento técnico aprobado por consenso por un organismo reconocido."],
    ["ISO", "Organización Internacional de Normalización."],
    ["UNE", "Asociación Española de Normalización y sigla de sus normas."],
    ["Formato", "Tamaño normalizado de papel."],
    ["Cuadro de rotulación", "Recuadro con los datos de identificación del plano."],
    ["Escala", "Relación entre la medida del dibujo y la real."],
    ["Escalímetro", "Regla triangular con varias escalas."],
    ["Altura nominal h", "Altura de las mayúsculas en la rotulación normalizada."],
    ["Vistas", "Proyecciones ortogonales de una pieza sobre las caras de un cubo envolvente."],
    ["Sistema europeo", "Disposición de vistas del primer diedro: planta debajo del alzado."],
    ["Acotación", "Indicación de las dimensiones del objeto en el dibujo."],
    ["Línea de cota", "Línea fina, paralela al elemento acotado, que lleva la cifra."],
    ["Línea auxiliar de cota", "Línea fina que prolonga el contorno hasta la línea de cota."],
    ["Cifra de cota", "Número que indica la medida real."],
    ["Acotación en paralelo", "Sistema en el que todas las cotas parten de una referencia común."],
  ],
  situacion: {
    titulo: "El plano de fabricación del soporte",
    reto: "El taller de tecnología va a fabricar con una fresadora de control numérico un soporte en L para sujetar un tubo. Vuestro grupo debe elaborar el plano de fabricación normalizado completo para que el técnico del taller pueda producirlo sin preguntar nada.",
    pasos: [
      "Diseñad el soporte (pieza en L con dos taladros) y decidid sus medidas en función del tubo.",
      "Elegid el formato, la escala normalizada y la orientación de la lámina; preparad el recuadro y el cuadro de rotulación.",
      "Dibujad las vistas necesarias en el sistema europeo con los tipos de línea correctos.",
      "Acotad la pieza eligiendo una referencia de fabricación y aplicando las normas.",
      "Intercambiad los planos con otro grupo: cada grupo debe poder modelar la pieza sin hacer preguntas; corregid lo que falle.",
    ],
    producto: "Plano de fabricación A4 o A3 normalizado con vistas, acotación y cuadro de rotulación.",
    evaluacion: [
      "Formato, escala, líneas y rotulación cumplen las normas.",
      "Las vistas son las necesarias, están bien dispuestas y se corresponden.",
      "La acotación es completa, sin redundancias y con una referencia clara.",
      "Otro grupo puede interpretar el plano sin ambigüedades.",
    ],
  },
  figura: fig("Normalización de un vistazo", "Resumen de formatos, escalas, líneas, vistas y acotación", [
    ["Lámina", ["UNE-EN ISO", "A4 210 × 297", "proporción √2", "cuadro de rotulación"], "var(--pen)"],
    ["Escalas y líneas", ["E = dibujo : real", "1:2 · 1:5 · 2:1", "gruesa = 2 × fina", "ocultas, ejes"], "var(--leaf)"],
    ["Vistas", ["sistema europeo", "planta debajo", "perfil izq. derecha", "vistas mínimas"], "var(--red)"],
    ["Acotación", ["línea y cifra", "serie / paralelo", "⌀ · R · × 45°", "sin repetir"], "var(--inf)"],
  ]),
  video: { id: "YCssCLAe-80", titulo: "Normas de acotación básicas", canal: "Jesús Alejandro Escandón", vistas: 235611, busqueda: "normas de acotación básicas" },
  mapa: mapa("NORMALIZACIÓN", "var(--bac)", [
    ["Normas", "ISO · EN · UNE", "var(--pen)"],
    ["Lámina", "formatos · escalas · líneas", "var(--leaf)"],
    ["Vistas", "sistema europeo · elección", "var(--red)"],
    ["Acotación", "elementos · sistemas · reglas", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Normalización", "Simplificar, unificar y especificar."],
    ["UNE-EN ISO", "Norma ISO adoptada en Europa y España."],
    ["Serie A", "Proporción 1:√2; A0 = 1 m²."],
    ["A4 y A3", "210 × 297 y 297 × 420 mm."],
    ["Cuadro de rotulación", "Esquina inferior derecha (ISO 7200)."],
    ["Escala", "E = dibujo : real; cota = medida real."],
    ["Líneas", "Gruesa: visto. Discontinua: oculto. Trazo y punto: ejes."],
    ["Rotulación tipo B", "c = 0,7 h; d = h/10."],
    ["Sistema europeo", "Planta debajo; lateral izquierda a la derecha."],
    ["Elementos de la cota", "Auxiliares, línea de cota, flechas, cifra."],
    ["Serie y paralelo", "Serie acumula errores; paralelo desde una referencia."],
    ["Normas de acotación", "Completa, sin repetir, fuera de la pieza, no a ocultas."],
  ],
  familias: ["Doblad una hoja A4 por la mitad varias veces y comprobad que la forma se mantiene.", "Buscad en casa planos de muebles o electrodomésticos y localizad el cuadro de rotulación y la escala.", "Medid un objeto de la cocina y dibujad juntos su alzado y su planta acotados.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Normalización: normas, formatos, escalas, líneas, rotulación, vistas normalizadas (sistema europeo) y acotación (RD 243/2022, Dibujo Técnico I, saberes básicos C. Normalización y documentación gráfica de proyectos; Decret 171/2022, Dibuix Tècnic I, normalització i documentació gràfica).",
    ideas: ["Medición de piezas reales con calibre y elaboración de su plano acotado.", "Juego de intercambio de planos: un grupo dibuja, otro fabrica con plastilina o en CAD.", "Comparar un plano de mueble comercial con las normas y detectar incumplimientos.", "Uso de un programa de CAD 2D para acotar con estilos normalizados."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "UNE, Asociación Española de Normalización", url: "https://www.une.org/" },
    { t: "ISO 216, Wikipedia en español", url: "https://es.wikipedia.org/wiki/ISO_216" },
  ],
  revisado: "2026-11-14",
};
