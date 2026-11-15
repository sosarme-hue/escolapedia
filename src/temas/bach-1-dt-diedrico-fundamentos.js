// Dibujo Técnico I 1º Bachillerato · Tema 6. Nivel libro. Sistema diédrico: dibujos calculados en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, pt, poli, linea, arco, LT, die, corteRR, add, mul, lerp, tx } = G;
const dash = 'stroke-dasharray="5 3"';
const YT = 90;
const ref = (A, B) => seg(A, B, "var(--muted)", 0.9, 'stroke-dasharray="2 2"');
// Recta por dos puntos (x, alejamiento, cota) en px; devuelve funciones de proyección.
const R3 = (P, Q, yt = YT) => { const at = (t) => P.map((v, i) => v + (Q[i] - v) * t); const h = (t) => { const [x, o] = at(t); return [x, yt + o]; }, v = (t) => { const [x, , c] = at(t); return [x, yt - c]; }; return { at, h, v }; };
// Mini línea de tierra para paneles.
const miniLT = (x0, x1, y) => `${seg([x0, y], [x1, y], "var(--ink)", 1.3)}${seg([x0 + 2, y + 4], [x0 + 12, y + 4], "var(--ink)", 1.3)}${seg([x1 - 12, y + 4], [x1 - 2, y + 4], "var(--ink)", 1.3)}`;

// 6.1 Sistemas de representación.
const s1 = (() => {
  const fila = (y, a, b, c, col) => `${tx(14, y, a, { s: 9.5, a: "start", b: 1, c: col })}${tx(118, y, b, { s: 9, a: "start" })}${tx(196, y, c, { s: 9, a: "start", c: "var(--muted)" })}`;
  return dib("Sistemas de representación clasificados por el tipo de proyección", `<rect x="10" y="14" width="240" height="20" rx="6" fill="var(--pen)"/>${tx(14, 28, "sistema", { s: 9.5, a: "start", b: 1, c: "#fff" })}${tx(118, 28, "proyección", { s: 9.5, a: "start", b: 1, c: "#fff" })}${tx(196, 28, "medida", { s: 9.5, a: "start", b: 1, c: "#fff" })}
  ${fila(54, "Diédrico", "cilíndrica ortog.", "directa", "var(--pen)")}${fila(78, "Planos acotados", "cilíndrica ortog.", "directa", "var(--pen)")}${fila(102, "Axonométrico", "cilíndrica ortog.", "coeficientes", "var(--leaf)")}${fila(126, "Caballera", "cilíndrica oblicua", "coeficiente", "var(--leaf)")}${fila(150, "Cónico", "central (cónica)", "indirecta", "var(--red)")}
  ${[42, 66, 90, 114, 138, 162].map((y) => seg([10, y], [250, y], "var(--line)", 1)).join("")}${tx(130, 176, "medibles · perspectivas · imagen realista", { s: 8.5, c: "var(--muted)" })}`);
})();

// 6.2 Planos de proyección en el espacio.
const s2 = (() => {
  const L0 = [40, 100], L1 = [220, 100], d = [-0.5, 1], base = [130, 100], o = 40, c = 50, A1 = add(base, mul(d, o)), A2 = [130, 100 - c], A = [A1[0], A1[1] - c];
  return dib("Planos de proyección del sistema diédrico en el espacio: un punto y sus proyecciones horizontal y vertical", `${poli([L0, L1, [220, 18], [40, 18]], "var(--pen)", 1.6, "var(--pen)", 0.08)}${poli([L0, L1, add(L1, mul(d, 60)), add(L0, mul(d, 60))], "var(--leaf)", 1.6, "var(--leaf)", 0.1)}${seg(L0, L1, "var(--ink)", 2.4)}
  ${seg(A, A1, "var(--red)", 1.3, dash)}${seg(A, A2, "var(--red)", 1.3, dash)}${seg(A1, base, "var(--muted)", 1)}${seg(A2, base, "var(--muted)", 1)}${pt(A, "A", -12, -2, "var(--red)")}${pt(A1, "A₁", -16, 8, "var(--ink)")}${pt(A2, "A₂", 6, -2, "var(--ink)")}
  ${tx(214, 32, "PV", { s: 11, a: "end", b: 1, c: "var(--pen)" })}${tx(170, 152, "PH", { s: 11, b: 1, c: "var(--leaf)" })}${tx(228, 104, "LT", { s: 10, a: "start", b: 1 })}${tx(150, 76, "cota", { s: 9, a: "start", c: "var(--muted)" })}${tx(104, 124, "alejamiento", { s: 9, a: "end", c: "var(--muted)" })}
  ${tx(14, 176, "el PV gira 90° hasta coincidir con el PH", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 6.3 Puntos en los cuatro cuadrantes.
const s3 = (() => {
  const P = [[40, 32, 44, "A", "I"], [90, -26, 40, "B", "II"], [140, -36, -22, "C", "III"], [190, 34, -26, "D", "IV"], [232, 30, 0, "E", "PH"]];
  return dib("Proyecciones de puntos situados en los cuatro cuadrantes y sobre el plano horizontal", `${LT(YT)}${P.map(([x, o, c, n, q]) => { const p = die(x, o, c, YT); return `${ref(p.h, p.v)}${pt(p.v, n + "₂", 4, -4, "var(--pen)", 10)}${pt(p.h, n + "₁", 4, 12, "var(--leaf)", 10)}${tx(x, 176, q, { s: 9.5, b: 1, c: "var(--muted)" })}`; }).join("")}
  ${tx(14, 16, "subíndice 2: proyección vertical (cota)", { s: 9, a: "start", c: "var(--pen)", b: 1 })}${tx(14, 160, "subíndice 1: proyección horizontal (alejamiento)", { s: 9, a: "start", c: "var(--leaf)", b: 1 })}`);
})();

// 6.4 Tercera proyección (perfil).
const s4 = (() => {
  const x = 90, o = 40, c = 40, X = 170, A1 = [x, YT + o], A2 = [x, YT - c], A3 = [X + o, YT - c];
  return dib("Tercera proyección de un punto sobre el plano de perfil girando el alejamiento con un arco", `${seg([14, YT], [246, YT], "var(--ink)", 1.6)}${seg([X, 16], [X, 168], "var(--ink)", 1.6)}${ref(A1, A2)}${seg(A1, [X, YT + o], "var(--muted)", 1, dash)}${arco([X, YT], o, 270, 360, "var(--muted)", 1.2, dash)}${seg([X + o, YT], A3, "var(--muted)", 1, dash)}${seg(A2, A3, "var(--muted)", 1, dash)}
  ${pt(A1, "A₁", -18, 4, "var(--leaf)")}${pt(A2, "A₂", -18, -4, "var(--pen)")}${pt(A3, "A₃", 6, -4, "var(--red)")}${tx(30, 84, "LT", { s: 9.5, b: 1 })}${tx(X + 4, 26, "PP", { s: 9.5, a: "start", b: 1, c: "var(--red)" })}${tx(X + 60, 140, "giro de 90°", { s: 9, c: "var(--muted)" })}
  ${tx(14, 176, "alzado · planta · perfil izquierdo (vista lateral)", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 6.5 Recta oblicua con trazas.
const s5 = (() => {
  const r = R3([40, -15, 60], [220, 60, -10]), tV = 0.2, tH = 60 / 70;
  const parte = (f, a, b, vis) => seg(f(a), f(b), vis ? "var(--ink)" : "var(--ink)", vis ? 2.4 : 1.3, vis ? "" : dash);
  return dib("Recta oblicua en diédrico: proyecciones, traza vertical V y traza horizontal H; la parte vista está entre las trazas", `${LT(YT)}${parte(r.v, 0, tV, 0)}${parte(r.v, tV, tH, 1)}${parte(r.v, tH, 1, 0)}${parte(r.h, 0, tV, 0)}${parte(r.h, tV, tH, 1)}${parte(r.h, tH, 1, 0)}
  ${ref(r.v(tV), r.h(tV))}${ref(r.v(tH), r.h(tH))}${pt(r.v(tV), "V₂", -6, -8, "var(--red)")}${pt(r.h(tV), "V₁", -16, 14, "var(--red)")}${pt(r.h(tH), "H₁", -20, 12, "var(--red)")}${pt(r.v(tH), "H₂", 4, -6, "var(--red)")}
  ${tx(40, 24, "r₂", { s: 11, b: 1, c: "var(--pen)" })}${tx(36, 66, "r₁", { s: 11, b: 1, c: "var(--leaf)" })}${tx(246, 172, "vista: entre V y H (I cuadrante)", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 6.6 Tipos de rectas.
const s6 = (() => {
  const panel = (cx, cy, tipo, lab) => {
    const y = cy, a = cx - 34, b = cx + 34;
    let s = miniLT(a, b, y);
    const V = (p, q) => seg(p, q, "var(--pen)", 2), H = (p, q) => seg(p, q, "var(--leaf)", 2);
    if (tipo === 0) s += V([a + 6, y - 22], [b - 6, y - 22]) + H([a + 6, y + 10], [b - 6, y + 26]);
    if (tipo === 1) s += V([a + 6, y - 10], [b - 6, y - 26]) + H([a + 6, y + 20], [b - 6, y + 20]);
    if (tipo === 2) s += pt([cx, y - 22], "", 0, 0, "var(--pen)") + H([cx, y + 6], [cx, y + 26]);
    if (tipo === 3) s += V([cx, y - 6], [cx, y - 26]) + pt([cx, y + 22], "", 0, 0, "var(--leaf)");
    if (tipo === 4) s += V([a + 6, y - 20], [b - 6, y - 20]) + H([a + 6, y + 22], [b - 6, y + 22]);
    if (tipo === 5) s += V([cx, y - 6], [cx, y - 26]) + H([cx, y + 6], [cx, y + 26]) + tx(cx + 6, y - 24, "A₂", { s: 8, a: "start" }) + tx(cx + 6, y + 24, "A₁", { s: 8, a: "start" });
    return s + tx(cx, y + 40, lab, { s: 9, b: 1 });
  };
  return dib("Tipos de rectas en diédrico: horizontal, frontal, de punta, vertical, paralela a la línea de tierra y de perfil", `${panel(46, 40, 0, "horizontal")}${panel(130, 40, 1, "frontal")}${panel(214, 40, 2, "de punta")}${panel(46, 130, 3, "vertical")}${panel(130, 130, 4, "paralela a LT")}${panel(214, 130, 5, "de perfil")}`, 260, 180);
})();

// 6.7 Pertenencia de punto a recta.
const s7 = (() => {
  const r = R3([30, 10, 20], [230, 60, 64]), A = 0.35, B = 0.7, B2 = [r.v(B)[0], r.v(B)[1] + 24];
  return dib("Un punto pertenece a una recta si sus proyecciones están sobre las proyecciones homónimas de la recta", `${LT(YT)}${seg(r.v(0), r.v(1), "var(--pen)", 2.2)}${seg(r.h(0), r.h(1), "var(--leaf)", 2.2)}${ref(r.v(A), r.h(A))}${ref(B2, r.h(B))}
  ${pt(r.v(A), "A₂", -6, -8, "var(--red)")}${pt(r.h(A), "A₁", -6, 16, "var(--red)")}${pt(B2, "B₂", 6, 12, "var(--ink)")}${pt(r.h(B), "B₁", -6, 16, "var(--ink)")}${tx(236, 24, "r₂", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(236, 146, "r₁", { s: 11, b: 1, c: "var(--leaf)", a: "end" })}
  ${tx(14, 156, "A ∈ r", { s: 11, a: "start", b: 1, c: "var(--red)" })}${tx(14, 172, "B ∉ r (B₂ fuera de r₂)", { s: 9.5, a: "start", b: 1 })}`);
})();

// 6.8 Plano oblicuo.
const s8 = (() => {
  const X = [200, YT];
  return dib("Plano oblicuo representado por sus trazas, que se cortan en un punto de la línea de tierra", `${LT(YT)}${seg(X, [50, 15], "var(--pen)", 2.4)}${seg(X, [40, 165], "var(--leaf)", 2.4)}${pt(X, "", 0, 0)}
  ${tx(60, 30, "α₂", { s: 12, b: 1, c: "var(--pen)" })}${tx(56, 168, "α₁", { s: 12, b: 1, c: "var(--leaf)" })}${tx(208, 104, "X", { s: 10, b: 1, a: "start" })}
  ${tx(246, 24, "α₂: traza vertical (∩ PV)", { s: 9, a: "end", c: "var(--pen)", b: 1 })}${tx(246, 150, "α₁: traza horizontal (∩ PH)", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}${tx(246, 166, "se cortan en la LT", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 6.9 Tipos de planos.
const s9 = (() => {
  const panel = (cx, y, tipo, lab) => {
    const a = cx - 34, b = cx + 34;
    let s = miniLT(a, b, y);
    const V = (p, q) => seg(p, q, "var(--pen)", 2), H = (p, q) => seg(p, q, "var(--leaf)", 2);
    if (tipo === 0) s += V([a, y - 22], [b, y - 22]);
    if (tipo === 1) s += H([a, y + 22], [b, y + 22]);
    if (tipo === 2) s += V([cx + 10, y], [cx + 10, y - 26]) + H([cx + 10, y], [a + 4, y + 24]);
    if (tipo === 3) s += V([cx + 10, y], [a + 4, y - 24]) + H([cx + 10, y], [cx + 10, y + 26]);
    if (tipo === 4) s += V([a, y - 24], [b, y - 24]) + H([a, y + 18], [b, y + 18]);
    if (tipo === 5) s += V([cx, y], [cx, y - 26]) + H([cx, y], [cx, y + 26]);
    return s + tx(cx, y + 40, lab, { s: 9, b: 1 });
  };
  return dib("Tipos de planos en diédrico: horizontal, frontal, proyectante vertical, proyectante horizontal o de canto, paralelo a la línea de tierra y de perfil", `${panel(46, 40, 0, "horizontal")}${panel(130, 40, 1, "frontal")}${panel(214, 40, 2, "proyect. horiz.")}${panel(46, 130, 3, "de canto")}${panel(130, 130, 4, "paralelo a LT")}${panel(214, 130, 5, "de perfil")}`);
})();

// 6.10 Rectas horizontal y frontal de un plano.
const s10 = (() => {
  const X = [200, YT], a2 = (x) => YT - (200 - x) * 0.5, a1 = (x) => YT + (200 - x) * (70 / 160);
  const V2 = [120, a2(120)], V1 = [120, YT], H1 = [200 - 30 * (160 / 70), YT + 30], H2 = [H1[0], YT];
  return dib("Recta horizontal y recta frontal de un plano: sus proyecciones son paralelas a las trazas del plano", `${LT(YT)}${seg(X, [40, a2(40)], "var(--pen)", 2)}${seg(X, [40, a1(40)], "var(--leaf)", 2)}
  ${seg([20, V2[1]], [220, V2[1]], "var(--red)", 2)}${seg(V1, add(V1, mul([-160, 70], 0.62)), "var(--red)", 2)}${ref(V2, V1)}${pt(V2, "V₂", 4, -6, "var(--red)")}${pt(V1, "V₁", 4, -4, "var(--red)")}
  ${seg([14, H1[1]], [240, H1[1]], "var(--inf)", 2)}${seg(H2, add(H2, mul([-140, -70], 0.6)), "var(--inf)", 2)}${ref(H1, H2)}${pt(H1, "H₁", 6, 12, "var(--inf)")}${pt(H2, "", 0, 0, "var(--inf)")}
  ${tx(50, 20, "α₂", { s: 11, b: 1, c: "var(--pen)", a: "end" })}${tx(36, 166, "α₁", { s: 11, b: 1, c: "var(--leaf)" })}${tx(226, V2[1] - 4, "h₂ ∥ LT", { s: 9, a: "end", c: "var(--red)", b: 1 })}${tx(52, 142, "h₁ ∥ α₁", { s: 9, a: "end", c: "var(--red)", b: 1 })}${tx(246, H1[1] + 14, "f₁ ∥ LT", { s: 9, a: "end", c: "var(--inf)", b: 1 })}${tx(36, 34, "f₂ ∥ α₂", { s: 9, a: "start", c: "var(--inf)", b: 1 })}`);
})();

// 6.11 Punto de un plano.
const s11 = (() => {
  const X = [200, YT], a2 = (x) => YT - (200 - x) * 0.5, A1 = [90, 110], V1 = [90 + 20 * (160 / 70), YT], V2 = [V1[0], a2(V1[0])], A2 = [90, V2[1]];
  return dib("Proyección vertical de un punto de un plano a partir de la horizontal: recta horizontal del plano que pasa por el punto", `${LT(YT)}${seg(X, [40, a2(40)], "var(--pen)", 2)}${seg(X, [40, YT + 160 * (70 / 160)], "var(--leaf)", 2)}${seg(add(A1, mul([-160, 70], 0.25)), V1, "var(--red)", 1.8)}${ref(V1, V2)}${seg([30, V2[1]], [V1[0], V2[1]], "var(--red)", 1.8)}${ref(A1, A2)}
  ${pt(A1, "A₁", -8, 16, "var(--ink)")}${pt(A2, "A₂", -8, -8, "var(--red)")}${pt(V1, "V₁", 4, 14, "var(--red)")}${pt(V2, "V₂", 4, -6, "var(--red)")}${tx(56, 30, "α₂", { s: 11, b: 1, c: "var(--pen)" })}${tx(50, 172, "α₁", { s: 11, b: 1, c: "var(--leaf)" })}
  ${tx(246, 132, "1 h₁ ∥ α₁ por A₁", { s: 9, a: "end" })}${tx(246, 144, "2 V₁ → V₂ en α₂", { s: 9, a: "end" })}${tx(246, 156, "3 h₂ ∥ LT por V₂", { s: 9, a: "end" })}${tx(246, 168, "4 A₂ en h₂", { s: 9, a: "end", c: "var(--red)", b: 1 })}`);
})();

// 6.12 Paralelismo.
const s12 = (() => {
  const r = R3([20, 14, 30], [110, 50, 66]), s = R3([40, 2, 16], [130, 38, 52]);
  return dib("Rectas paralelas tienen proyecciones homónimas paralelas; planos paralelos tienen trazas homónimas paralelas", `${LT(YT)}${seg([130, 14], [130, 170], "var(--line)", 1)}${seg(r.v(0), r.v(1), "var(--pen)", 2)}${seg(s.v(0), s.v(1), "var(--red)", 2)}${seg(r.h(0), r.h(1), "var(--pen)", 2)}${seg(s.h(0), s.h(1), "var(--red)", 2)}
  ${tx(18, 20, "r₂ ∥ s₂", { s: 9.5, a: "start", b: 1 })}${tx(18, 172, "r₁ ∥ s₁", { s: 9.5, a: "start", b: 1 })}
  ${seg([210, YT], [150, 30], "var(--pen)", 2)}${seg([210, YT], [150, 150], "var(--pen)", 2)}${seg([240, YT], [180, 30], "var(--red)", 2)}${seg([240, YT], [180, 150], "var(--red)", 2)}${tx(140, 26, "α₂ ∥ β₂", { s: 9.5, a: "start", b: 1 })}${tx(140, 172, "α₁ ∥ β₁", { s: 9.5, a: "start", b: 1 })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Sistema diédrico: fundamentos",
  minutos: 120,
  objetivos: [
    "Distinguir los sistemas de representación según el tipo de proyección",
    "Comprender los fundamentos del sistema diédrico: planos de proyección, línea de tierra y cuadrantes",
    "Representar puntos por sus proyecciones, cota y alejamiento, incluida la tercera proyección",
    "Representar rectas, hallar sus trazas y reconocer los tipos de rectas",
    "Representar planos por sus trazas y reconocer los tipos de planos",
    "Resolver problemas de pertenencia y paralelismo entre puntos, rectas y planos",
  ],
  claves: ["proyección", "plano horizontal", "plano vertical", "línea de tierra", "cota", "alejamiento", "traza", "recta horizontal", "recta frontal", "plano proyectante", "pertenencia", "paralelismo"],
  lectura: {
    titulo: "El secreto militar de Gaspard Monge",
    html: `<p>A finales del siglo XVIII, un joven profesor de la escuela militar de Mézières, en Francia, recibió un encargo complicado: calcular cómo debía construirse una fortificación para que ningún punto quedara expuesto al fuego enemigo. Los cálculos habituales eran larguísimos. Gaspard Monge lo resolvió en muy poco tiempo con un método gráfico propio: representar el terreno y la muralla <b>proyectándolos sobre dos planos perpendiculares</b>, uno horizontal y otro vertical, y después girar uno de ellos hasta dejarlos en la misma hoja.</p>
    <p>El método era tan eficaz que el ejército francés lo declaró secreto militar durante años. Cuando por fin se publicó, en 1799, con el nombre de <b>geometría descriptiva</b>, cambió la forma de diseñar máquinas, edificios y puentes. Hoy se llama <b>sistema diédrico</b> y sigue siendo el lenguaje de los planos de taller, de las vistas de una pieza y de la base geométrica de los programas de CAD.</p>
    <p>En este tema aprenderás sus fundamentos: cómo se representan un punto, una recta y un plano con dos proyecciones, cómo se leen la altura y la distancia de cada elemento, y cómo saber si un punto está en una recta o una recta en un plano, sin necesidad de ver el objeto en tres dimensiones.</p>`,
  },
  pregunta: {
    texto: "Si solo tienes la planta de una casa (vista desde arriba), ¿puedes saber la altura del tejado? ¿Qué te falta?",
    respuesta: "No. La planta da la posición en el suelo (anchura y profundidad) pero no la altura. Hace falta una <mark>segunda proyección</mark>, el alzado, sobre un plano vertical. Con las dos proyecciones cada punto queda definido sin ambigüedad: esa es la idea del sistema diédrico.",
  },
  bloques: [
    {
      html: `<h3>6.1 Los sistemas de representación</h3><p>Un <b>sistema de representación</b> es un conjunto de reglas para dibujar en un plano (el papel o la pantalla) los objetos del espacio, de modo que a partir del dibujo se pueda reconstruir el objeto sin ambigüedad. Todos se basan en la <b>proyección</b>: desde un centro de proyección se trazan rayos proyectantes que pasan por cada punto del objeto y cortan al plano del cuadro.</p><ul><li><b>Proyección cónica o central</b>: los rayos parten de un punto propio (el ojo). Produce imágenes realistas, como las de una fotografía, pero las medidas no se conservan. Es el <b>sistema cónico</b>.</li><li><b>Proyección cilíndrica</b>: el centro está en el infinito y los rayos son paralelos. Si son perpendiculares al plano es <b>ortogonal</b>; si no, <b>oblicua</b>.</li></ul><p>Con la proyección cilíndrica ortogonal se construyen el <b>sistema diédrico</b> (dos o más proyecciones sobre planos perpendiculares), el sistema de <b>planos acotados</b> (una proyección y la altura de cada punto escrita como número, usado en topografía) y el sistema <b>axonométrico</b> (una sola proyección sobre un plano inclinado respecto a los ejes del objeto). La cilíndrica oblicua da la <b>perspectiva caballera</b> y la militar.</p><p>Los sistemas <b>diédrico</b> y de <b>planos acotados</b> son <b>medibles</b>: sobre ellos se toman medidas directamente. Los axonométricos y la caballera dan una imagen tridimensional fácil de interpretar, con medidas afectadas por coeficientes de reducción.</p>`,
      svg: s1,
    },
    {
      html: `<h3>6.2 Fundamentos del sistema diédrico</h3><p>El sistema diédrico utiliza dos planos de proyección perpendiculares entre sí:</p><ul><li>El <b>plano horizontal</b> (PH), sobre el que se obtiene la proyección horizontal o <b>planta</b>.</li><li>El <b>plano vertical</b> (PV), sobre el que se obtiene la proyección vertical o <b>alzado</b>.</li></ul><p>Su recta de intersección es la <b>línea de tierra</b> (LT), que se dibuja con dos pequeños trazos debajo de sus extremos. Los dos planos dividen el espacio en cuatro <b>diedros</b> o <b>cuadrantes</b>, numerados del I al IV; el primero es el que está delante del PV y encima del PH, donde normalmente se sitúan los objetos.</p><p>Cada punto A del espacio se proyecta ortogonalmente sobre ambos planos: A₁ es su proyección horizontal y A₂ su proyección vertical (en algunos libros se escriben A′ y A″). Para dibujar las dos proyecciones en la misma hoja, el PV se gira 90° alrededor de la LT hasta coincidir con el PH (o al revés). Así, el dibujo queda dividido por la LT: encima, lo que está en el PV; debajo, lo que está en el PH.</p><p>Las dos proyecciones de un punto quedan siempre en una misma perpendicular a la LT, llamada <b>línea de referencia</b>. Por eso el diédrico es tan potente: con dos dibujos planos se reconstruye exactamente la posición de cada punto en el espacio.</p>`,
      svg: s2,
    },
    {
      html: `<h3>6.3 Representación del punto: cota y alejamiento</h3><p>Un punto A queda definido por dos distancias:</p><ul><li>La <b>cota</b>: distancia del punto al PH. Se lee en la proyección vertical, como la distancia de A₂ a la LT.</li><li>El <b>alejamiento</b>: distancia del punto al PV. Se lee en la proyección horizontal, como la distancia de A₁ a la LT.</li></ul><p>A veces se añade una tercera coordenada, la distancia a un plano de perfil de referencia, para escribir el punto como A(x, y, z) = A(abscisa, alejamiento, cota).</p><p>Según el cuadrante en que esté el punto:</p><ul><li><b>I cuadrante</b> (cota y alejamiento positivos): A₂ por encima de la LT y A₁ por debajo.</li><li><b>II cuadrante</b> (alejamiento negativo): ambas proyecciones por encima.</li><li><b>III cuadrante</b> (cota y alejamiento negativos): A₂ por debajo y A₁ por encima.</li><li><b>IV cuadrante</b> (cota negativa): ambas por debajo.</li></ul><p>Casos particulares: si el punto está en el <b>PH</b>, su cota es 0 y A₂ está en la LT; si está en el <b>PV</b>, A₁ está en la LT; si está en la <b>LT</b>, ambas proyecciones coinciden en ella. Los puntos de los <b>planos bisectores</b> tienen cota y alejamiento iguales (primer bisector) u opuestos (segundo bisector, en el que A₁ y A₂ coinciden).</p><p>En los dibujos técnicos de piezas se trabaja casi siempre en el primer cuadrante.</p>`,
      svg: s3,
    },
    {
      html: `<h3>6.4 La tercera proyección: el plano de perfil</h3><p>A veces dos proyecciones no bastan para ver con claridad un objeto, o hay elementos (como las rectas de perfil) cuya posición no queda clara. Entonces se usa un tercer plano de proyección, el <b>plano de perfil</b> (PP), perpendicular a los otros dos. La proyección sobre él es la <b>tercera proyección</b> o <b>perfil</b>, A₃.</p><p>Para dibujarla, el plano de perfil se gira 90° alrededor de su intersección con el PV hasta llevarlo al plano del dibujo. En la práctica:</p><ol><li>Se dibuja la traza del plano de perfil, perpendicular a la LT.</li><li>La <b>cota</b> se conserva: A₃ está a la misma altura que A₂ (se traza una horizontal desde A₂).</li><li>El <b>alejamiento</b> se lleva desde la traza del perfil, horizontalmente: con un arco de 90° de centro en el corte de las dos líneas, o con una recta auxiliar a 45°.</li></ol><p>En el dibujo de piezas, las tres proyecciones se llaman <b>alzado</b> (vista frontal), <b>planta</b> (vista superior) y <b>perfil</b> (vista lateral), y su colocación está normalizada. En el <b>sistema europeo</b>, que se usa en España, la planta va debajo del alzado y la vista lateral izquierda se coloca a la derecha del alzado, como en el dibujo. Lo verás con detalle en el tema de normalización.</p><p>Comprobar que las tres proyecciones de cada punto son coherentes es una buena forma de detectar errores.</p>`,
      svg: s4,
    },
    {
      html: `<h3>6.5 Representación de la recta: trazas</h3><p>Una recta r se representa por sus dos proyecciones, r₁ y r₂, que se obtienen proyectando dos de sus puntos. Si se conocen A y B, r₁ pasa por A₁ y B₁, y r₂ por A₂ y B₂.</p><p>Las <b>trazas</b> de una recta son los puntos en que corta a los planos de proyección:</p><ul><li><b>Traza horizontal H</b>: punto de corte con el PH. Su cota es 0, así que H₂ está en la LT. Para hallarla se prolonga r₂ hasta la LT y, por la línea de referencia, se lleva a r₁ para obtener H₁.</li><li><b>Traza vertical V</b>: punto de corte con el PV. Su alejamiento es 0, así que V₁ está en la LT. Se prolonga r₁ hasta la LT y se sube a r₂ para obtener V₂.</li></ul><p>Las trazas dividen a la recta en tramos que pertenecen a distintos cuadrantes. El tramo comprendido entre las trazas que está en el <b>primer cuadrante</b> se dibuja con línea continua (es la parte <b>vista</b>); los tramos de los otros cuadrantes se dibujan con línea discontinua (partes <b>ocultas</b>), porque quedan tapadas por los planos de proyección.</p><p>Una recta queda determinada por sus dos trazas. Además, las trazas sirven para saber si una recta pertenece a un plano y para hallar intersecciones, como verás en el tema siguiente. Una recta paralela a un plano de proyección no tiene traza en él (o la tiene en el infinito).</p>`,
      svg: s5,
      video: { id: "GN5kgyC5HG0", titulo: "Representación de rectas en sistema diédrico", canal: "PDD Profesor de Dibujo", vistas: 315809, busqueda: "sistema diédrico trazas de una recta" },
    },
    {
      html: `<h3>6.6 Posiciones particulares de la recta</h3><p>Según su posición respecto a los planos de proyección, las rectas reciben nombres especiales. Conocerlas es esencial, porque simplifican muchos problemas:</p><ul><li><b>Horizontal</b> (paralela al PH): todos sus puntos tienen la misma cota; r₂ es paralela a la LT y r₁ muestra su verdadera magnitud y su dirección. Solo tiene traza vertical.</li><li><b>Frontal</b> (paralela al PV): mismo alejamiento; r₁ es paralela a la LT y r₂ está en verdadera magnitud. Solo tiene traza horizontal.</li><li><b>De punta</b> (perpendicular al PV): r₂ es un punto y r₁ es perpendicular a la LT.</li><li><b>Vertical</b> (perpendicular al PH): r₁ es un punto y r₂ es perpendicular a la LT.</li><li><b>Paralela a la LT</b>: ambas proyecciones paralelas a la LT; no tiene trazas.</li><li><b>De perfil</b> (contenida en un plano de perfil): ambas proyecciones están en la misma línea de referencia; para definirla hacen falta dos puntos o la tercera proyección.</li><li><b>Oblicua</b> o cualquiera: no es paralela ni perpendicular a ningún plano de proyección.</li></ul><p>Una idea clave: un segmento se ve en <b>verdadera magnitud</b> (con su longitud real) en la proyección sobre el plano al que es paralelo. Por eso una arista horizontal se mide en la planta y una frontal, en el alzado. Cuando una recta es oblicua, su longitud real hay que obtenerla con abatimientos, giros o cambios de plano.</p>`,
      svg: s6,
      video: { id: "1JTMey3NzDA", titulo: "Tipos de rectas en sistema diédrico", canal: "PDD Profesor de Dibujo", vistas: 281202, busqueda: "sistema diédrico trazas de una recta" },
    },
    {
      html: `<h3>6.7 Pertenencia de un punto a una recta. Rectas que se cortan y que se cruzan</h3><p>Un punto A <b>pertenece</b> a una recta r si sus proyecciones están sobre las proyecciones homónimas de la recta: A₁ en r₁ y A₂ en r₂ (y, por supuesto, en una misma línea de referencia). Si solo una de las proyecciones está sobre la recta, el punto no pertenece a ella.</p><p>Hay una excepción: si la recta es de perfil, sus dos proyecciones están en la misma línea de referencia y cualquier punto de esa línea parecería pertenecer a ella. En ese caso hay que comprobarlo con la tercera proyección o con la proporción de Tales entre los segmentos.</p><p>A partir de la pertenencia se estudian las posiciones relativas de dos rectas:</p><ul><li><b>Se cortan</b> si tienen un punto común: los puntos de corte de r₁ con s₁ y de r₂ con s₂ están en la misma línea de referencia.</li><li><b>Son paralelas</b> si sus proyecciones homónimas son paralelas (r₁ ∥ s₁ y r₂ ∥ s₂).</li><li><b>Se cruzan</b> si no se cortan ni son paralelas: los cortes de las proyecciones no están en la misma línea de referencia. No tienen ningún punto común aunque en el dibujo parezca que se tocan.</li></ul><p>Distinguir rectas que se cortan de rectas que se cruzan es fundamental para estudiar la <b>visibilidad</b>: en el punto aparente de cruce, la que tiene más cota tapa a la otra en la planta, y la que tiene más alejamiento la tapa en el alzado.</p>`,
      svg: s7,
    },
    {
      html: `<h3>6.8 Representación del plano</h3><p>Un plano es ilimitado, así que no se puede proyectar «entero». En diédrico se representa por sus <b>trazas</b>, las rectas en que corta a los planos de proyección:</p><ul><li><b>Traza horizontal</b> α₁: intersección del plano α con el PH.</li><li><b>Traza vertical</b> α₂: intersección con el PV.</li></ul><p>Las dos trazas de un plano oblicuo se cortan en un punto de la <b>línea de tierra</b>, porque ese punto pertenece a la vez al PH, al PV y al plano. Si el plano es paralelo a la LT, sus trazas también lo son.</p><p>Un plano también puede venir dado por otros elementos que lo determinan:</p><ul><li>Tres puntos no alineados.</li><li>Una recta y un punto exterior a ella.</li><li>Dos rectas que se cortan.</li><li>Dos rectas paralelas.</li></ul><p>En todos los casos se pueden obtener sus trazas: basta con hallar las trazas de dos rectas del plano. Las trazas horizontales de las rectas están en α₁ y las verticales en α₂. Por ejemplo, si un plano está definido por dos rectas que se cortan, r y s, la traza α₁ es la recta que une H<sub>r</sub> y H<sub>s</sub>, y α₂ la que une V<sub>r</sub> y V<sub>s</sub>; comprobar que ambas trazas se cortan en la LT es una buena verificación.</p><p>En los dibujos, las trazas del plano se dibujan con trazo continuo fino en el primer cuadrante y discontinuo en los demás, y se nombran con letras griegas.</p>`,
      svg: s8,
    },
    {
      html: `<h3>6.9 Posiciones particulares del plano</h3><p>Los planos también reciben nombres según su posición:</p><ul><li><b>Horizontal</b> (paralelo al PH): solo tiene traza vertical α₂, paralela a la LT. Todos sus puntos tienen la misma cota.</li><li><b>Frontal</b> (paralelo al PV): solo traza horizontal α₁, paralela a la LT.</li><li><b>Proyectante horizontal</b> o <b>vertical</b> (perpendicular al PH): α₂ es perpendicular a la LT y α₁ es oblicua. Todo lo que contiene se proyecta horizontalmente sobre α₁.</li><li><b>Proyectante vertical</b> o <b>de canto</b> (perpendicular al PV): α₁ es perpendicular a la LT y todo lo que contiene se proyecta verticalmente sobre α₂.</li><li><b>Paralelo a la LT</b>: ambas trazas paralelas a la LT.</li><li><b>De perfil</b> (perpendicular a la LT): ambas trazas en la misma línea de referencia.</li><li><b>Que pasa por la LT</b>: sus trazas coinciden con la LT, por lo que necesita un punto o la tercera proyección para quedar definido.</li><li><b>Oblicuo</b> o cualquiera.</li></ul><p>Los <b>planos proyectantes</b> son especialmente útiles: como una de sus trazas «recoge» todas las proyecciones de sus elementos, simplifican las intersecciones. Por eso, en el tema siguiente, para hallar la intersección de una recta y un plano se hace pasar por la recta un plano proyectante auxiliar.</p><p>Las figuras contenidas en planos horizontales o frontales se ven en verdadera magnitud en planta o en alzado.</p>`,
      svg: s9,
    },
    {
      html: `<h3>6.10 Rectas contenidas en un plano</h3><p>Una recta <b>pertenece a un plano</b> si sus trazas están sobre las trazas homónimas del plano: H en α₁ y V en α₂. Es la condición más útil, porque permite dibujar rectas en un plano sin ver el espacio.</p><p>Dentro de un plano hay dos familias de rectas especialmente importantes:</p><ul><li>Las <b>horizontales del plano</b>: rectas horizontales contenidas en él. Su proyección vertical h₂ es <b>paralela a la LT</b> y su proyección horizontal h₁ es <b>paralela a α₁</b>. Para dibujarla, se traza h₂ a la cota deseada, se halla su traza vertical V₂ sobre α₂, se baja V₁ a la LT y por V₁ se traza h₁ paralela a α₁.</li><li>Las <b>frontales del plano</b>: rectas frontales contenidas en él. Su proyección horizontal f₁ es <b>paralela a la LT</b> y su proyección vertical f₂ es <b>paralela a α₂</b>. Se construyen igual, empezando por f₁ y su traza horizontal H.</li></ul><p>Las horizontales de un plano son también sus <b>curvas de nivel</b>: si se dibujan a cotas 1, 2, 3… m se obtiene un plano acotado del terreno.</p><p>Otra recta notable es la <b>línea de máxima pendiente</b>, perpendicular a las horizontales del plano: su proyección horizontal es perpendicular a α₁. Es el camino que seguiría una gota de agua al caer por el plano, y el ángulo que forma con el PH es el ángulo del plano con el PH. Del mismo modo se define la línea de máxima inclinación respecto al PV.</p>`,
      svg: s10,
      video: { id: "iAbEqUmUwec", titulo: "Pertenencia en sistema diédrico (punto, recta y plano)", canal: "PDD Profesor de Dibujo", vistas: 249851, busqueda: "sistema diédrico punto recta plano" },
    },
    {
      html: `<h3>6.11 Puntos contenidos en un plano</h3><p>Un punto pertenece a un plano si está en una recta del plano. Por eso, para situar un punto en un plano se usa una recta auxiliar contenida en él, normalmente una <b>horizontal</b> o una <b>frontal</b>.</p><p><b>Problema típico</b>: conocida la proyección horizontal A₁ de un punto de un plano α, hallar A₂.</p><ol><li>Por A₁ se traza h₁ paralela a α₁ (la proyección horizontal de una horizontal del plano que pasa por A).</li><li>h₁ corta a la LT en V₁; se sube por la línea de referencia hasta α₂ y se obtiene V₂.</li><li>Por V₂ se traza h₂ paralela a la LT.</li><li>A₂ está en h₂, en la línea de referencia de A₁.</li></ol><p>Si se conoce A₂ y se busca A₁, se procede igual usando una horizontal o una frontal, empezando por la proyección vertical.</p><p>Con esta técnica se dibujan en un plano oblicuo figuras completas: un triángulo, un cuadrado o una circunferencia dados por su planta se llevan al alzado punto a punto. También permite resolver el problema inverso: comprobar si tres o cuatro puntos son coplanarios.</p><p>Si el plano es <b>proyectante</b>, el problema es inmediato: por ejemplo, en un plano de canto, A₂ está directamente sobre α₂, en la línea de referencia de A₁, sin necesidad de rectas auxiliares.</p>`,
      svg: s11,
    },
    {
      html: `<h3>6.12 Paralelismo</h3><p>El paralelismo en diédrico se reconoce directamente en las proyecciones, porque la proyección cilíndrica conserva el paralelismo:</p><ul><li><b>Rectas paralelas</b>: si dos rectas son paralelas en el espacio, sus proyecciones homónimas son paralelas: r₁ ∥ s₁ y r₂ ∥ s₂. Para trazar por un punto P la paralela a una recta r, basta trazar por P₁ y P₂ paralelas a r₁ y r₂.</li><li><b>Planos paralelos</b>: dos planos paralelos tienen sus trazas homónimas paralelas: α₁ ∥ β₁ y α₂ ∥ β₂. Si los planos son paralelos a la LT, hace falta comprobarlo con la tercera proyección.</li><li><b>Recta paralela a un plano</b>: una recta es paralela a un plano si es paralela a alguna recta contenida en él. Para trazar por un punto una recta paralela a un plano, se dibuja cualquier recta del plano y por el punto se traza su paralela; hay infinitas soluciones.</li><li><b>Plano paralelo a una recta</b> por un punto: se traza por el punto una paralela a la recta y cualquier otra recta que pase por él; ambas definen el plano.</li></ul><p>Para trazar el <b>plano paralelo a otro por un punto</b> P se dibuja por P una horizontal paralela a las horizontales del plano dado (h₁ ∥ α₁, h₂ ∥ LT); su traza vertical V da un punto de β₂, que se traza paralela a α₂. Las trazas de β se cortan en la LT y β₁ se traza paralela a α₁.</p><p>La perpendicularidad, en cambio, no siempre se conserva en proyección: se estudiará en Dibujo Técnico II.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Dibuja el punto A de cota 30 mm y alejamiento 20 mm. ¿En qué cuadrante está?", pasos: ["Se dibuja la LT y una línea de referencia perpendicular.", "A₂ a 30 mm por encima de la LT (cota).", "A₁ a 20 mm por debajo de la LT (alejamiento)."], resultado: "Primer cuadrante: A₂ arriba y A₁ abajo." },
    { enunciado: "Un punto B tiene B₁ y B₂ por encima de la LT, con B₂ a 40 mm y B₁ a 15 mm. Indica su cota, alejamiento y cuadrante.", pasos: ["Cota: distancia de B₂ a la LT, positiva hacia arriba: 40 mm.", "Alejamiento: B₁ por encima de la LT significa alejamiento negativo: −15 mm.", "Cota positiva y alejamiento negativo: detrás del PV y encima del PH."], resultado: "Segundo cuadrante; c = 40 mm, a = −15 mm." },
    { enunciado: "Halla las trazas de la recta que pasa por A(c = 10, a = 30) y B(c = 40, a = 10), con 60 mm entre sus líneas de referencia.", pasos: ["Traza H (cota 0): la cota disminuye 30 mm en 60 mm, así que se anula 20 mm antes de A: se prolonga r₂ hasta la LT, a 20 mm de A hacia fuera.", "En esa línea de referencia, el alejamiento es 30 + 20 · (20/60) ≈ 36,7 mm: H₁.", "Traza V (alejamiento 0): el alejamiento disminuye 20 mm cada 60 mm; se anula 30 mm después de B. La cota allí es 40 + 15 = 55 mm: V₂."], resultado: "H a 20 mm de A (a ≈ 36,7 mm); V a 30 mm de B (c = 55 mm)." },
    { enunciado: "¿Pertenece a la recta r el punto P si P₁ está en r₁ pero P₂ no está en r₂?", pasos: ["La condición exige que ambas proyecciones estén en las homónimas de la recta.", "P₂ fuera de r₂ indica que P está en el plano proyectante de r₁ pero no en r."], resultado: "No pertenece." },
    { enunciado: "Dibuja una recta horizontal del plano α de cota 25 mm.", pasos: ["h₂ paralela a la LT a 25 mm.", "h₂ corta a α₂ en V₂; se baja a la LT: V₁.", "Por V₁ se traza h₁ paralela a α₁."], resultado: "h(h₁ ∥ α₁, h₂ ∥ LT a 25 mm)." },
    { enunciado: "Conocida A₂ de un punto de un plano de canto β, halla A₁.", pasos: ["En un plano de canto todos los puntos se proyectan verticalmente sobre β₂: A₂ debe estar en β₂.", "A₁ puede estar en cualquier lugar de la línea de referencia… salvo que se dé otro dato.", "Por eso, en un plano de canto el dato útil es A₁: con él, A₂ está en β₂ y en la línea de referencia."], resultado: "Con A₂ no basta; con A₁ se obtiene A₂ directamente sobre β₂." },
  ],
  errores: [
    "No dibujar las dos proyecciones de un punto en la misma perpendicular a la LT.",
    "Confundir cota (se lee en la proyección vertical) con alejamiento (se lee en la horizontal).",
    "Dibujar con línea continua las partes de una recta que están fuera del primer cuadrante.",
    "Pensar que dos rectas se cortan porque sus proyecciones se cruzan, sin comprobar que los cortes están en la misma línea de referencia.",
    "Trazar h₁ paralela a la LT: en una horizontal del plano la paralela a la LT es h₂, y h₁ es paralela a α₁.",
    "Olvidar que las trazas de un plano oblicuo se cortan en la LT.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Nombra los cinco sistemas de representación y el tipo de proyección de cada uno.", sol: "Diédrico, planos acotados y axonométrico: cilíndrica ortogonal. Caballera: cilíndrica oblicua. Cónico: central o cónica." },
    { nivel: "básico", q: "Dibuja los puntos A(c = 20, a = 30), B(c = 0, a = 25) y C(c = 35, a = 0).", sol: "A: A₂ 20 mm arriba, A₁ 30 mm abajo (I cuadrante). B: en el PH, B₂ en la LT y B₁ 25 mm abajo. C: en el PV, C₁ en la LT y C₂ 35 mm arriba." },
    { nivel: "básico", q: "¿Qué significa que las dos proyecciones de un punto estén debajo de la LT?", sol: "Cota negativa y alejamiento positivo: el punto está en el IV cuadrante (debajo del PH y delante del PV)." },
    { nivel: "básico", q: "¿Cómo son las proyecciones de una recta horizontal? ¿Cuál está en verdadera magnitud?", sol: "r₂ paralela a la LT y r₁ oblicua; r₁ está en verdadera magnitud." },
    { nivel: "básico", q: "Dibuja una recta vertical y una de punta.", sol: "Vertical: r₁ es un punto y r₂ perpendicular a la LT. De punta: r₂ es un punto y r₁ perpendicular a la LT." },
    { nivel: "básico", q: "¿Qué son las trazas de una recta? ¿Dónde está H₂?", sol: "Los puntos de corte de la recta con el PH (H) y con el PV (V). H₂ está en la LT, porque H tiene cota 0." },
    { nivel: "básico", q: "Dibuja un plano horizontal de cota 30 mm y un plano frontal de alejamiento 20 mm.", sol: "Horizontal: solo α₂, paralela a la LT y 30 mm por encima. Frontal: solo β₁, paralela a la LT y 20 mm por debajo." },
    { nivel: "básico", q: "¿Qué condición cumplen las trazas de un plano oblicuo?", sol: "Se cortan en un punto de la línea de tierra." },
    { nivel: "básico", q: "¿Cómo se reconoce en diédrico que dos rectas son paralelas?", sol: "Sus proyecciones homónimas son paralelas: r₁ ∥ s₁ y r₂ ∥ s₂ (salvo rectas de perfil, que hay que comprobar con la tercera proyección)." },
    { nivel: "básico", q: "Dibuja el alzado, la planta y el perfil de un punto de cota 30 y alejamiento 20 mm.", sol: "A₂ a 30 mm sobre la LT, A₁ a 20 mm debajo. A₃ a la altura de A₂ y a 20 mm a la derecha de la traza del plano de perfil (alejamiento llevado con un arco de 90°)." },
    { nivel: "medio", q: "Halla las trazas de la recta definida por A(x = 0, a = 10, c = 40) y B(x = 50, a = 40, c = 10) (mm).", sol: "Entre A y B la cota baja 30 mm y el alejamiento sube 30 mm en 50 mm de abscisa: c = 40 − 0,6x y a = 10 + 0,6x. Cota 0: x = 66,7 mm, a = 10 + 0,6 · 66,7 = 50 mm: H(66,7; 50; 0). Alejamiento 0: a = 10 + 0,6x = 0 → x = −16,7 mm, c = 40 + 10 = 50 mm: V(−16,7; 0; 50)." },
    { nivel: "medio", q: "Indica qué partes de la recta del ejercicio anterior son vistas.", sol: "Entre V (x = −16,7) y H (x = 66,7) la recta tiene cota y alejamiento positivos: I cuadrante, vista. Fuera de ese tramo pasa al II (más allá de V) o al IV (más allá de H): partes ocultas, discontinuas." },
    { nivel: "medio", q: "Dos rectas r y s tienen r₁ y s₁ que se cortan en X₁ y r₂ y s₂ que se cortan en Y₂. ¿Cuándo se cortan en el espacio?", sol: "Si X₁ e Y₂ están en la misma línea de referencia: entonces son las proyecciones de un punto común. Si no, las rectas se cruzan." },
    { nivel: "medio", q: "Dibuja las trazas del plano que contiene a dos rectas que se cortan, conocidas sus trazas.", sol: "α₁ es la recta que une las trazas horizontales H de ambas rectas y α₂ la que une sus trazas verticales V. Comprobación: α₁ y α₂ se cortan en la LT." },
    { nivel: "medio", q: "Dibuja una frontal del plano α de alejamiento 20 mm.", sol: "f₁ paralela a la LT a 20 mm por debajo; corta a α₁ en H₁; se sube H₂ a la LT y por H₂ se traza f₂ paralela a α₂." },
    { nivel: "medio", q: "Conocida A₁ de un punto de un plano oblicuo, halla A₂ con una frontal.", sol: "Por A₁ se traza f₁ paralela a la LT; corta a α₁ en H₁; H₂ en la LT; por H₂, f₂ paralela a α₂; A₂ está en f₂ en la línea de referencia de A₁." },
    { nivel: "medio", q: "Comprueba si la recta r, cuyas trazas son H₁ sobre α₁ y V₂ fuera de α₂, pertenece al plano α.", sol: "No pertenece: para pertenecer, las dos trazas deben estar sobre las trazas homónimas del plano. La recta corta al plano en un solo punto." },
    { nivel: "medio", q: "Dibuja un plano proyectante horizontal y un punto de él.", sol: "α₂ perpendicular a la LT y α₁ oblicua, cortándose en la LT. Un punto A del plano tiene A₁ sobre α₁, y A₂ en cualquier altura de su línea de referencia." },
    { nivel: "medio", q: "Por un punto P traza el plano paralelo a otro plano α.", sol: "Por P se traza una horizontal h paralela a α₁ (h₁ ∥ α₁ por P₁, h₂ ∥ LT por P₂). Su traza V₂ es un punto de β₂; por V₂ se traza β₂ ∥ α₂ hasta la LT y desde allí β₁ ∥ α₁." },
    { nivel: "medio", q: "¿Qué tipo de plano tiene sus dos trazas en la misma línea de referencia? ¿Y uno que contiene a la LT?", sol: "Trazas en la misma referencia: plano de perfil. Plano que contiene a la LT: sus trazas coinciden con la LT y necesita un punto adicional." },
    { nivel: "medio", q: "Dibuja las proyecciones de un segmento de 50 mm paralelo al PV que forma 30° con el PH.", sol: "Es frontal: su proyección horizontal es paralela a la LT y mide 50 · cos 30° ≈ 43,3 mm; la vertical, en verdadera magnitud, mide 50 mm y forma 30° con la LT." },
    { nivel: "medio", q: "Explica por qué los puntos del segundo bisector tienen sus dos proyecciones coincidentes.", sol: "El segundo bisector pasa por los cuadrantes II y IV, donde cota y alejamiento tienen signo contrario e igual valor absoluto. Al girar el PV, la proyección vertical cae justo sobre la horizontal." },
    { nivel: "avanzado", q: "Halla las trazas de una recta de perfil definida por A(c = 10, a = 40) y B(c = 40, a = 10), usando la tercera proyección.", sol: "Ambas proyecciones están en la misma referencia. En el perfil, A₃ y B₃ definen r₃; su corte con la traza del PH (cota 0) da H₃ y con la del PV (alejamiento 0) da V₃. Por semejanza: la cota se anula a 10 mm de A en proporción → H con alejamiento 50 mm; V con cota 50 mm. Se devuelven a las proyecciones por las líneas auxiliares." },
    { nivel: "avanzado", q: "Halla las trazas del plano definido por tres puntos A, B y C.", sol: "Se trazan dos rectas, AB y AC; se hallan sus trazas H y V. α₁ une las dos H y α₂ une las dos V; deben cortarse en la LT. Si alguna traza cae fuera del papel, se usa una horizontal o frontal del plano." },
    { nivel: "avanzado", q: "Determina si cuatro puntos A, B, C y D son coplanarios.", sol: "Se trazan AB y CD (o AC y BD). Si las rectas se cortan o son paralelas, los puntos son coplanarios; si se cruzan (los cortes de sus proyecciones no están en la misma línea de referencia), no lo son." },
    { nivel: "avanzado", q: "Dibuja la línea de máxima pendiente de un plano oblicuo y explica su significado.", sol: "Su proyección horizontal es perpendicular a α₁. Se toma un punto de α₂ (V₂), su V₁ en la LT, por V₁ la perpendicular a α₁ hasta H₁; H₂ en la LT; se unen V₂ y H₂. Es la recta del plano de mayor inclinación respecto al PH: su ángulo con el PH es el del plano." },
    { nivel: "avanzado", q: "Por un punto P traza una recta paralela a un plano α y a otro plano β. ¿Cuántas soluciones hay?", sol: "La recta debe ser paralela a la intersección de α y β. Se halla la intersección i (tema siguiente) y por P se traza la paralela a i. Solución única (si los planos no son paralelos)." },
    { nivel: "avanzado", q: "Representa un triángulo equilátero de 40 mm de lado apoyado en el PH y otro contenido en un plano frontal de alejamiento 30 mm. ¿En qué proyección se ve en verdadera magnitud cada uno?", sol: "El del PH tiene la proyección vertical sobre la LT (segmento) y la horizontal en verdadera magnitud. El del plano frontal tiene la horizontal sobre una paralela a la LT a 30 mm y la vertical en verdadera magnitud." },
    { nivel: "avanzado", q: "En un plano proyectante horizontal α, que forma 45° con el PV, se apoya un cuadrado de 30 mm de lado con un lado en el PH. Dibuja sus proyecciones.", sol: "El cuadrado tiene su planta sobre α₁: un segmento de 30 mm a 45°. En el alzado, el lado horizontal se ve con 30 · cos 45° ≈ 21,2 mm de longitud y la altura en verdadera magnitud (30 mm): un rectángulo de 21,2 × 30 mm." },
    { nivel: "avanzado", q: "¿Por qué el sistema diédrico es reversible y una sola proyección no lo es?", sol: "Con una proyección cada punto del dibujo corresponde a toda una recta proyectante del espacio: se pierde una coordenada. Con dos proyecciones perpendiculares, la intersección de las dos rectas proyectantes es un único punto, de modo que se recupera la posición exacta." },
  ],
  quiz: reparte([
    { q: "El sistema diédrico usa una proyección…", o: ["cónica", "cilíndrica ortogonal", "cilíndrica oblicua", "central"], a: 1, e: "Rayos perpendiculares." },
    { q: "La intersección del PH y el PV es…", o: ["el eje Z", "la línea de tierra", "la traza", "el bisector"], a: 1, e: "LT." },
    { q: "La cota de un punto se lee en…", o: ["la proyección vertical", "la horizontal", "el perfil", "la LT"], a: 0, e: "Distancia de A₂ a la LT." },
    { q: "Un punto con A₁ y A₂ por encima de la LT está en el cuadrante…", o: ["I", "II", "III", "IV"], a: 1, e: "Alejamiento negativo." },
    { q: "Si un punto está en el PH…", o: ["A₁ está en la LT", "A₂ está en la LT", "ambas coinciden", "no tiene proyecciones"], a: 1, e: "Cota 0." },
    { q: "La traza horizontal de una recta tiene…", o: ["alejamiento 0", "cota 0", "x = 0", "cota igual a alejamiento"], a: 1, e: "Está en el PH." },
    { q: "La parte vista de una recta es la del cuadrante…", o: ["I", "II", "III", "IV"], a: 0, e: "Entre trazas." },
    { q: "Una recta horizontal tiene…", o: ["r₁ ∥ LT", "r₂ ∥ LT", "r₁ punto", "r₂ punto"], a: 1, e: "Misma cota." },
    { q: "Una recta de punta tiene como proyección vertical…", o: ["un punto", "una paralela a LT", "una perpendicular a LT", "una oblicua"], a: 0, e: "Perpendicular al PV." },
    { q: "Un segmento frontal se ve en verdadera magnitud en…", o: ["la planta", "el alzado", "el perfil", "ninguna"], a: 1, e: "Paralelo al PV." },
    { q: "Dos rectas se cruzan si…", o: ["sus proyecciones son paralelas", "los cortes de sus proyecciones no están en la misma referencia", "tienen un punto común", "están en el mismo plano"], a: 1, e: "No coplanarias." },
    { q: "Las trazas de un plano oblicuo se cortan…", o: ["en la LT", "en el infinito", "en el centro", "nunca"], a: 0, e: "Punto común a PH, PV y α." },
    { q: "Un plano horizontal tiene…", o: ["solo traza vertical paralela a LT", "solo traza horizontal", "trazas perpendiculares", "trazas en la LT"], a: 0, e: "Cota constante." },
    { q: "Un plano de canto es perpendicular al…", o: ["PH", "PV", "PP", "bisector"], a: 1, e: "α₁ ⊥ LT." },
    { q: "Una recta pertenece a un plano si…", o: ["sus trazas están en las trazas homónimas del plano", "es paralela a LT", "es horizontal", "su traza H está en α₂"], a: 0, e: "Condición de pertenencia." },
    { q: "En una horizontal de un plano, h₁ es paralela a…", o: ["la LT", "α₂", "α₁", "la línea de máxima pendiente"], a: 2, e: "h₂ ∥ LT." },
    { q: "En una frontal de un plano, f₂ es paralela a…", o: ["α₂", "α₁", "LT", "f₁"], a: 0, e: "f₁ ∥ LT." },
    { q: "La línea de máxima pendiente tiene su proyección horizontal…", o: ["paralela a α₁", "perpendicular a α₁", "paralela a la LT", "en α₂"], a: 1, e: "Perpendicular a las horizontales." },
    { q: "Dos planos paralelos tienen…", o: ["trazas perpendiculares", "trazas homónimas paralelas", "trazas coincidentes", "la misma LT"], a: 1, e: "α₁ ∥ β₁, α₂ ∥ β₂." },
    { q: "La tercera proyección conserva de la vertical…", o: ["el alejamiento", "la cota", "la abscisa", "nada"], a: 1, e: "Misma altura." },
  ], 0),
  examen: reparte([
    { q: "Punto con A₂ 25 mm bajo la LT y A₁ 10 mm sobre ella: cuadrante", o: ["I", "II", "III", "IV"], a: 2, e: "c < 0, a < 0." },
    { q: "Recta con r₁ perpendicular a la LT y r₂ un punto:", o: ["vertical", "de punta", "de perfil", "frontal"], a: 1, e: "⊥ PV." },
    { q: "Traza que no tiene una recta frontal:", o: ["H", "V", "ninguna", "las dos"], a: 1, e: "Es paralela al PV." },
    { q: "Plano con α₂ ⊥ LT y α₁ oblicua:", o: ["de canto", "proyectante horizontal", "frontal", "de perfil"], a: 1, e: "⊥ PH." },
    { q: "Para hallar A₂ de un punto de un plano conocida A₁ se usa…", o: ["una horizontal del plano", "la LT", "un abatimiento", "la tercera proyección siempre"], a: 0, e: "O una frontal." },
    { q: "Segmento horizontal de 60 mm que forma 30° con el PV: longitud de su proyección vertical", o: ["60 mm", "52 mm", "30 mm", "34,6 mm"], a: 1, e: "60 · cos 30°." },
    { q: "Las trazas de un plano paralelo a la LT son…", o: ["perpendiculares a la LT", "paralelas a la LT", "coincidentes", "concurrentes en la LT"], a: 1, e: "No cortan la LT." },
    { q: "Si r₁ ∥ s₁ y r₂ ∥ s₂ (rectas no de perfil), r y s son…", o: ["secantes", "paralelas", "se cruzan", "perpendiculares"], a: 1, e: "Paralelismo." },
  ], 2),
  feynman: ["Por qué hacen falta dos proyecciones para definir un punto", "Qué representan la cota y el alejamiento y dónde se leen", "Cómo se hallan las trazas de una recta", "Qué condición debe cumplir una recta para estar en un plano", "Cómo se sitúa un punto en un plano oblicuo con una horizontal"],
  glosario: [
    ["Sistema diédrico", "Sistema de representación por proyecciones ortogonales sobre dos planos perpendiculares."],
    ["Plano horizontal (PH)", "Plano de proyección sobre el que se obtiene la planta."],
    ["Plano vertical (PV)", "Plano de proyección sobre el que se obtiene el alzado."],
    ["Línea de tierra", "Intersección del PH y el PV."],
    ["Cuadrante", "Cada una de las cuatro regiones del espacio separadas por el PH y el PV."],
    ["Cota", "Distancia de un punto al plano horizontal."],
    ["Alejamiento", "Distancia de un punto al plano vertical."],
    ["Línea de referencia", "Perpendicular a la LT que une las proyecciones de un punto."],
    ["Traza de una recta", "Punto de corte de la recta con un plano de proyección."],
    ["Traza de un plano", "Recta de intersección del plano con un plano de proyección."],
    ["Recta horizontal", "Recta paralela al PH; su proyección vertical es paralela a la LT."],
    ["Recta frontal", "Recta paralela al PV; su proyección horizontal es paralela a la LT."],
    ["Plano proyectante", "Plano perpendicular a un plano de proyección."],
    ["Verdadera magnitud", "Medida real de un elemento, visible cuando es paralelo al plano de proyección."],
    ["Rectas que se cruzan", "Rectas no coplanarias: ni se cortan ni son paralelas."],
    ["Línea de máxima pendiente", "Recta de un plano perpendicular a sus horizontales."],
  ],
  situacion: {
    titulo: "La rampa de acceso",
    reto: "El ayuntamiento quiere construir una rampa accesible desde la calle hasta la puerta del instituto, que está 60 cm más alta. Vuestro grupo debe representar en diédrico la rampa (un plano inclinado), la barandilla (rectas) y algunos puntos de anclaje, y comprobar que la pendiente cumple la normativa.",
    pasos: [
      "Medid el desnivel real y el espacio disponible delante de la puerta.",
      "Dibujad en diédrico, a escala 1:20, el plano de la rampa por sus trazas y el suelo como PH.",
      "Trazad las horizontales del plano cada 10 cm de altura y la línea de máxima pendiente.",
      "Situad en el plano los puntos de anclaje de la barandilla a partir de su planta y dibujad la barandilla como recta paralela a la línea de máxima pendiente.",
      "Calculad la pendiente y comparadla con el máximo permitido para rampas accesibles (en torno al 6-10 % según la longitud).",
    ],
    producto: "Lámina con la rampa en diédrico (planta, alzado y perfil) y un informe breve con la comprobación de la pendiente.",
    evaluacion: [
      "Las proyecciones son coherentes y respetan las líneas de referencia.",
      "Las rectas y puntos del plano cumplen las condiciones de pertenencia.",
      "La pendiente está bien calculada y se justifica si cumple la norma.",
      "La lámina es limpia, con trazos vistos y ocultos diferenciados.",
    ],
  },
  figura: fig("Diédrico de un vistazo", "Resumen de punto, recta, plano y pertenencia en el sistema diédrico", [
    ["Punto", ["A₁ planta · A₂ alzado", "cota en A₂", "alejamiento en A₁", "4 cuadrantes"], "var(--pen)"],
    ["Recta", ["r₁ y r₂", "trazas H y V", "vista entre trazas", "horiz., frontal…"], "var(--leaf)"],
    ["Plano", ["trazas α₁ y α₂", "se cortan en LT", "proyectantes", "horiz., frontal…"], "var(--red)"],
    ["Pertenencia", ["A ∈ r: A₁∈r₁, A₂∈r₂", "r ⊂ α: H∈α₁, V∈α₂", "horizontales", "paralelismo"], "var(--inf)"],
  ]),
  video: { id: "CaGK0Yt7nkw", titulo: "Plano definido por una recta y un punto (sistema diédrico)", canal: "PDD Profesor de Dibujo", vistas: 340562, busqueda: "sistema diédrico punto recta plano" },
  mapa: mapa("SISTEMA DIÉDRICO", "var(--bac)", [
    ["Fundamentos", "PH · PV · LT · cuadrantes", "var(--pen)"],
    ["Punto y recta", "cota · alejamiento · trazas", "var(--leaf)"],
    ["Plano", "trazas · tipos · proyectantes", "var(--red)"],
    ["Relaciones", "pertenencia · paralelismo", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["PH y PV", "Planos de proyección perpendiculares; su corte es la LT."],
    ["Cota", "Distancia al PH; se lee en A₂."],
    ["Alejamiento", "Distancia al PV; se lee en A₁."],
    ["Cuadrante I", "A₂ encima y A₁ debajo de la LT."],
    ["Traza H de una recta", "Cota 0: H₂ en la LT."],
    ["Traza V de una recta", "Alejamiento 0: V₁ en la LT."],
    ["Recta horizontal", "r₂ ∥ LT; r₁ en verdadera magnitud."],
    ["Recta frontal", "r₁ ∥ LT; r₂ en verdadera magnitud."],
    ["Trazas de un plano", "α₁ y α₂, se cortan en la LT."],
    ["Recta en un plano", "H en α₁ y V en α₂."],
    ["Horizontal de un plano", "h₂ ∥ LT, h₁ ∥ α₁."],
    ["Paralelismo", "Proyecciones o trazas homónimas paralelas."],
  ],
  familias: ["Abrid un libro a 90° sobre la mesa: las dos tapas son el PV y el PH, y el lomo es la línea de tierra.", "Con una linterna desde arriba y otra de frente, observad las dos sombras de un lápiz: son sus proyecciones.", "Buscad en casa planos de muebles de montaje y localizad la planta, el alzado y el perfil.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: fundamentos de los sistemas de representación; sistema diédrico: representación del punto, la recta y el plano, trazas, tipos de rectas y planos, tercera proyección, pertenencia y paralelismo (RD 243/2022, Dibujo Técnico I, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic I, sistemes de representació).",
    ideas: ["Maqueta del diedro con dos cartulinas y palillos para los puntos y rectas.", "Ejercicios de cota y alejamiento con coordenadas tipo batalla naval.", "GeoGebra 3D: ver a la vez el punto en el espacio y sus proyecciones.", "Comparar el diédrico con las vistas de una pieza de Tecnología."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sistema diédrico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_di%C3%A9drico" },
    { t: "Gaspard Monge, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gaspard_Monge" },
  ],
  revisado: "2026-11-14",
};
