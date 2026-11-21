// Dibujo Técnico II 2º Bachillerato · Tema 1. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, aux, fina, circ, pt, paso, recto, polar, corteCC, corteRC, corteRR, tangPC, mid, dist, unit, add, sub, mul, pie, tx, dash } = G;

// Recta por dos puntos prolongada hasta salir del lienzo (aprox.).
const larga = (A, B, c = "var(--red)", w = 2.2, extra = "") => recta(A, B, 400, c, w, extra);
const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;

// 1.2 Potencia de un punto exterior.
const s2 = (() => {
  const O = [92, 100], r = 52, P = [236, 52];
  const [A, B] = corteRC(P, polar(O, 20, 200), O, r), [T] = tangPC(P, O, r).sort((p, q) => p[1] - q[1]);
  return dib("Potencia de un punto exterior P: el producto PA por PB es igual al cuadrado del segmento de tangente PT", `${circ(O, r)}${seg(P, add(B, mul(unit(P, B), 16)), "var(--pen)", 2)}${seg(P, add(T, mul(unit(P, T), 26)), "var(--red)", 2.4)}${fina(O, T, "var(--muted)")}${recto(T, O, P, 6)}
  ${pt(O, "O", -14, 4)}${pt(P, "P", 6, -4)}${pt(A, "A", 2, 14, "var(--pen)")}${pt(B, "B", -14, 12, "var(--pen)")}${pt(T, "T", -4, -9, "var(--red)")}
  ${tx(130, 172, "p = PA · PB = PT² = d² − r²", { s: 11, b: 1, c: "var(--red)" })}`);
})();

// 1.3 Signo de la potencia.
const s3 = (() => {
  const O = [130, 92], r = 58, P1 = [236, 64], P2 = polar(O, r, -30), P3 = [116, 104];
  const u = unit(O, P3), n = [u[1], -u[0]], h = Math.sqrt(r * r - dist(O, P3) ** 2), M = add(P3, mul(n, h)), N = add(P3, mul(n, -h));
  return dib("Signo de la potencia: positiva fuera de la circunferencia, nula sobre ella y negativa dentro, donde vale menos el cuadrado de la semicuerda mínima", `${circ(O, r)}${seg(M, N, "var(--leaf)", 2.4)}${fina(O, P3, "var(--muted)")}${recto(P3, O, M, 6)}
  ${pt(O, "O", -14, 4)}${pt(P1, "P₁", -18, 4)}${pt(P2, "P₂", 6, 10, "var(--pen)")}${pt(P3, "P₃", -6, 16, "var(--leaf)")}${pt(M, "", 0, 0, "var(--leaf)")}${pt(N, "", 0, 0, "var(--leaf)")}
  ${tx(250, 22, "P₁ fuera: p > 0", { s: 10, b: 1, a: "end" })}${tx(250, 172, "P₂ sobre: p = 0", { s: 10, b: 1, a: "end", c: "var(--pen)" })}${tx(10, 172, "P₃ dentro: p = −(MN/2)²", { s: 10, b: 1, a: "start", c: "var(--leaf)" })}`);
})();

// 1.4 Circunferencia ortogonal.
const s4 = (() => {
  const O = [84, 96], r = 50, P = [200, 80], [T1, T2] = tangPC(P, O, r), k = dist(P, T1);
  return dib("La circunferencia de centro P y radio igual a la tangente PT corta a la dada en ángulo recto: son circunferencias ortogonales", `${circ(O, r)}${circ(P, k, "var(--red)", 2.2)}${fina(O, T1, "var(--pen)")}${fina(P, T1, "var(--red)")}${fina(O, T2, "var(--pen)")}${fina(P, T2, "var(--red)")}${recto(T1, O, P, 6)}${recto(T2, O, P, 6)}
  ${pt(O, "O", -14, 4)}${pt(P, "P", 6, 4, "var(--red)")}${pt(T1, "T₁", -16, -4)}${pt(T2, "T₂", -16, 14)}
  ${tx(130, 172, "radio de la ortogonal = √p", { s: 11, b: 1, c: "var(--red)" })}`);
})();

// 1.5 Eje radical de dos circunferencias secantes.
const s5 = (() => {
  const C1 = [90, 92], r1 = 52, C2 = [168, 92], r2 = 40, [M, N] = corteCC(C1, r1, C2, r2), R = [M[0], 18];
  const [T1] = tangPC(R, C1, r1).sort((p, q) => p[0] - q[0]), [T2] = tangPC(R, C2, r2).sort((p, q) => q[0] - p[0]);
  return dib("Eje radical de dos circunferencias secantes: la recta que pasa por los dos puntos de corte; desde cualquier punto suyo las tangentes miden lo mismo", `${circ(C1, r1)}${circ(C2, r2)}${seg(C1, C2, "var(--muted)", 1.2, dash)}${seg([M[0], 8], [M[0], 172], "var(--red)", 2.4)}${seg(R, T1, "var(--pen)", 1.6)}${seg(R, T2, "var(--pen)", 1.6)}${recto(pie(C1, M, N), C2, N, 6)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(M, "M", 6, -4)}${pt(N, "N", 6, 14)}${pt(R, "R", 7, 4, "var(--red)")}${pt(T1, "", 0, 0, "var(--pen)")}${pt(T2, "", 0, 0, "var(--pen)")}
  ${tx(M[0] + 6, 172, "eje radical", { s: 10, b: 1, a: "start", c: "var(--red)" })}${tx(10, 22, "RT₁ = RT₂", { s: 10, b: 1, a: "start", c: "var(--pen)" })}`);
})();

// 1.6 Eje radical de dos circunferencias tangentes (exterior e interior).
const s6 = (() => {
  const C1 = [56, 66], r1 = 32, C2 = [56 + 32 + 20, 66], r2 = 20, T = [88, 66];
  const D1 = [182, 104], R1 = 56, D2 = [182 + 26, 104], R2 = 30, T2 = [238, 104];
  return dib("Eje radical de dos circunferencias tangentes: la tangente común en el punto de contacto, tanto si son tangentes exteriores como interiores", `${circ(C1, r1)}${circ(C2, r2)}${seg(C1, C2, "var(--muted)", 1.2, dash)}${seg([88, 14], [88, 150], "var(--red)", 2.4)}${pt(C1, "", 0, 0)}${pt(C2, "", 0, 0)}${pt(T, "T", -14, -6, "var(--red)")}
  ${circ(D1, R1)}${circ(D2, R2)}${seg(D1, T2, "var(--muted)", 1.2, dash)}${seg([238, 40], [238, 168], "var(--red)", 2.4)}${pt(D1, "", 0, 0)}${pt(D2, "", 0, 0)}${pt(T2, "", 0, 0, "var(--red)")}
  ${tx(60, 172, "exteriores", { s: 10, b: 1 })}${tx(170, 28, "interiores", { s: 10, b: 1 })}`);
})();

// 1.7 Eje radical de dos circunferencias exteriores con una auxiliar.
const s7 = (() => {
  const C1 = [60, 110], r1 = 34, C2 = [196, 116], r2 = 24, Q = [128, 60], rq = 70;
  const [A1, B1] = corteCC(C1, r1, Q, rq), [A2, B2] = corteCC(Q, rq, C2, r2), R = corteRR(A1, B1, A2, B2), H = pie(R, C1, C2);
  return dib("Eje radical de dos circunferencias exteriores: una circunferencia auxiliar que corta a las dos da dos ejes radicales que se cortan en un punto del eje buscado", clip(`${circ(C1, r1)}${circ(C2, r2)}${circ(Q, rq, "var(--muted)", 1.2, dash)}${larga(A1, B1, "var(--pen)", 1.3)}${larga(A2, B2, "var(--pen)", 1.3)}${seg(C1, C2, "var(--muted)", 1.2, dash)}${larga(R, H, "var(--red)", 2.4)}${recto(H, C2, R, 6)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(Q, "", 0, 0, "var(--muted)")}${pt(R, "R", 8, -2, "var(--red)")}${paso([30, 30], 1)}${paso([226, 30], 2)}`, "cl17"));
})();

// 1.8 Centro radical.
const s8 = (() => {
  const C = [[88, 70], [166, 72], [128, 136]], r = [46, 40, 38];
  const ejes = [[0, 1], [1, 2], [0, 2]].map(([i, j]) => corteCC(C[i], r[i], C[j], r[j]));
  const CR = corteRR(...ejes[0], ...ejes[1]);
  return dib("Centro radical: los tres ejes radicales de tres circunferencias tomadas dos a dos se cortan en un mismo punto", clip(`${C.map((c, i) => circ(c, r[i])).join("")}${ejes.map(([M, N]) => larga(M, N, "var(--red)", 1.8)).join("")}${C.map((c, i) => pt(c, `O${"₁₂₃"[i]}`, -6, 15)).join("")}${pt(CR, "CR", -26, 18, "var(--red)")}`, "cl18") + tx(250, 172, "e₁₂ ∩ e₂₃ ∩ e₁₃", { s: 10, b: 1, a: "end", c: "var(--red)" }));
})();

// 1.9 Eje radical de un punto y una circunferencia.
const s9 = (() => {
  const O = [80, 100], r = 46, A = [196, 92], Q = [150, 56], rq = dist(Q, A);
  const [M, N] = corteCC(O, r, Q, rq), u = unit(Q, A), tg = [A, add(A, [u[1], -u[0]])], R = corteRR(M, N, ...tg), H = pie(R, O, A);
  return dib("Eje radical de un punto A y una circunferencia: la tangente en A a una circunferencia auxiliar que pasa por A se corta con su eje radical con la dada", clip(`${circ(O, r)}${circ(Q, rq, "var(--muted)", 1.2, dash)}${larga(M, N, "var(--pen)", 1.3)}${larga(...tg, "var(--pen)", 1.3)}${seg(O, A, "var(--muted)", 1.2, dash)}${larga(R, H, "var(--red)", 2.4)}
  ${pt(O, "O", -14, 4)}${pt(A, "A", 6, 12)}${pt(R, "R", 8, 0, "var(--red)")}${pt(Q, "", 0, 0, "var(--muted)")}`, "cl19") + tx(10, 172, "A es una circunferencia de radio 0", { s: 10, b: 1, a: "start", c: "var(--muted)" }));
})();

// 1.10 Haz de circunferencias secantes (elíptico) y sus ortogonales.
const s10 = (() => {
  const M = [130, 46], N = [130, 134], m = mid(M, N);
  const centros = [-40, -14, 14, 40].map((d) => [130 + d, m[1]]);
  return dib("Haz de circunferencias que pasan por dos puntos M y N: todas tienen el mismo eje radical MN y sus centros están en la mediatriz", `${centros.map((c, i) => circ(c, dist(c, M), ["var(--pen)", "var(--leaf)", "var(--inf)", "var(--pen)"][i], 1.8)).join("")}${seg([130, 6], [130, 174], "var(--red)", 2.2)}${seg([6, m[1]], [254, m[1]], "var(--muted)", 1.2, dash)}${centros.map((c) => pt(c, "", 0, 0, "var(--muted)")).join("")}${pt(M, "M", 6, -4, "var(--red)")}${pt(N, "N", 6, 14, "var(--red)")}`);
})();

// 1.11 Haz no secante: puntos límite.
const s11 = (() => {
  const y = 96, H = [130, y], e = [130, 10], k = 36; // potencia de H = k²
  const L1 = [130 - k, y], L2 = [130 + k, y];
  const cs = [80, 90, 170, 186].map((x) => [[x, y], Math.sqrt((130 - x) ** 2 - k * k)]);
  return dib("Haz de circunferencias no secantes: los puntos límite L₁ y L₂ están en la línea de centros a una distancia del eje igual a la raíz de la potencia", `${cs.map(([c, rr]) => circ(c, rr)).join("")}${circ(H, k, "var(--muted)", 1.2, dash)}${seg([130, 10], [130, 172], "var(--red)", 2.4)}${seg([6, y], [254, y], "var(--muted)", 1.2, dash)}
  ${cs.map(([c]) => pt(c, "", 0, 0)).join("")}${pt(H, "H", 6, -6)}${pt(L1, "L₁", -10, -10, "var(--leaf)")}${pt(L2, "L₂", 2, -10, "var(--leaf)")}${tx(136, 172, "eje radical", { s: 10, b: 1, a: "start", c: "var(--red)" })}`);
})();

// 1.12 Aplicación: circunferencias por A y B tangentes a una recta.
const s12 = (() => {
  const r1 = [10, 160], r2 = [250, 160], A = [150, 52], B = [174, 116], R = corteRR(A, B, r1, r2), t = Math.sqrt(dist(R, A) * dist(R, B));
  const T = [R[0] - t, 160], Mab = mid(A, B), u = unit(A, B), med = [Mab, add(Mab, [u[1], -u[0]])], O = corteRR(...med, T, [T[0], 0]);
  const Mx = mid(R, A);
  return dib("Circunferencia que pasa por A y B y es tangente a la recta r: el eje radical AB corta a r en R y el punto de tangencia está a la distancia RT igual a la raíz de RA por RB", clip(`${seg(r1, r2, "var(--ink)", 2)}${larga(A, B, "var(--muted)", 1.2, dash)}${circ(O, dist(O, T), "var(--red)", 2.4)}${fina(O, T, "var(--pen)")}${recto(T, O, r2, 6)}
  ${pt(A, "A", 6, -4)}${pt(B, "B", 8, 6)}${pt(R, "R", 2, -8)}${pt(T, "T", -4, -8, "var(--red)")}${pt(O, "O", -14, 4, "var(--red)")}${tx(14, 154, "r", { s: 11, b: 1, a: "start" })}`, "cl112") + tx(250, 22, "RT² = RA · RB", { s: 11, b: 1, a: "end", c: "var(--red)" }));
})();

// 1.13 Media proporcional por potencia.
const s13 = (() => {
  const P = [24, 140], A = [100, 140], B = [214, 140], Q = [157, 96], rq = dist(Q, A), [T] = tangPC(P, Q, rq).sort((p, q) => p[1] - q[1]), T2 = [P[0] + dist(P, T), 140];
  return dib("Media proporcional de dos segmentos a y b por potencia: la tangente desde P a una circunferencia que pasa por A y B mide la raíz de a por b", `${seg([12, 140], [248, 140], "var(--ink)", 1.6)}${circ(Q, rq, "var(--muted)", 1.6)}${seg(P, T, "var(--red)", 2.6)}${fina(Q, T, "var(--muted)")}${recto(T, Q, P, 6)}${G.arco(P, dist(P, T), 0, G.ang(P, T), "var(--red)", 1.2, dash)}
  ${pt(P, "P", -2, 16)}${pt(A, "A", -4, 16)}${pt(B, "B", 0, 16)}${pt(T, "T", -4, -8, "var(--red)")}${pt(T2, "", 0, 0, "var(--red)")}${tx(10, 22, "PA = a · PB = b", { s: 10.5, b: 1, a: "start" })}${tx(250, 22, "PT = √(a · b)", { s: 11, b: 1, a: "end", c: "var(--red)" })}`);
})();

// 1.1 Lugares geométricos (portada del tema).
const s1 = (() => {
  const O = [86, 92], r = 48, P = [200, 92], [T1, T2] = tangPC(P, O, r);
  return dib("Desde un punto exterior se ven dos segmentos de tangente iguales: la potencia mide cuánto está un punto fuera o dentro de una circunferencia", `${circ(O, r)}${seg(P, T1, "var(--red)", 2.4)}${seg(P, T2, "var(--red)", 2.4)}${seg(O, P, "var(--muted)", 1.2, dash)}${fina(O, T1, "var(--pen)")}${recto(T1, O, P, 6)}${pt(O, "O", -14, 4)}${pt(P, "P", 6, 4)}${pt(T1, "T₁", -6, -8)}${pt(T2, "T₂", -6, 16)}${tx(143, 82, "d", { s: 11, b: 1, c: "var(--muted)" })}${tx(76, 70, "r", { s: 11, b: 1, c: "var(--pen)" })}
  ${tx(130, 172, "PT² = d² − r²  (Pitágoras)", { s: 11, b: 1, c: "var(--red)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Potencia, eje radical y centro radical",
  minutos: 110,
  objetivos: [
    "Definir la potencia de un punto respecto de una circunferencia y calcularla con la fórmula d² − r²",
    "Obtener gráficamente la potencia como cuadrado del segmento de tangente o de la semicuerda mínima",
    "Trazar el eje radical de dos circunferencias en todas sus posiciones relativas",
    "Hallar el centro radical de tres circunferencias y la circunferencia ortogonal a ellas",
    "Reconocer los haces de circunferencias coaxiales y sus puntos límite",
    "Aplicar la potencia a problemas de tangencias y a la media proporcional",
  ],
  claves: ["potencia", "eje radical", "centro radical", "circunferencia ortogonal", "haz coaxial", "puntos límite", "media proporcional", "lugar geométrico", "cuerda", "tangente"],
  lectura: {
    titulo: "Un número que dice dónde estás",
    html: `<p>Imagina que estás en una plaza circular y quieres saber, sin medir el radio, si estás dentro o fuera de ella y «cuánto». En 1813 el geómetra suizo Jakob Steiner dio con una herramienta para hacerlo: la <b>potencia</b> de un punto respecto de una circunferencia. Es un solo número, positivo si el punto está fuera, cero si está sobre la circunferencia y negativo si está dentro.</p>
    <p>Lo sorprendente es que ese número se obtiene de muchas maneras distintas y siempre da lo mismo: multiplicando las dos distancias a los puntos de corte de cualquier recta que pase por el punto, elevando al cuadrado la tangente o restando el radio al cuadrado a la distancia al centro al cuadrado. Esa coincidencia convierte la potencia en una llave maestra del dibujo técnico.</p>
    <p>Con ella se trazan circunferencias que pasan por dos puntos y tocan una recta, se encuentra el punto desde el que tres rotondas «se ven igual» y se resuelven los famosos problemas de Apolonio, que llevan más de dos mil años en los libros. En este tema construirás las herramientas básicas: la potencia, el <b>eje radical</b> y el <b>centro radical</b>. En el siguiente, las usarás para resolver tangencias.</p>`,
  },
  pregunta: {
    texto: "Desde un punto P salen dos rectas que cortan a una circunferencia: la primera en A y B, y la segunda en C y D. Si PA = 4, PB = 9 y PC = 3, ¿cuánto mide PD sin medirlo?",
    respuesta: "PD = 12. Como la <mark>potencia</mark> de P es la misma para todas las rectas que pasan por él, PA · PB = PC · PD, es decir, 4 · 9 = 3 · PD, y PD = 36 / 3 = 12.",
  },
  bloques: [
    {
      html: `<h3>1.1 De los lugares geométricos a la potencia</h3><p>En Dibujo Técnico I resolviste los problemas de tangencias con <b>lugares geométricos</b>: la mediatriz (puntos que equidistan de dos puntos), la bisectriz (puntos que equidistan de dos rectas) y las circunferencias concéntricas (puntos a una distancia dada de otra circunferencia). Con ellos se resuelven muchos casos, pero no todos. ¿Cómo se traza, por ejemplo, una circunferencia que pase por dos puntos y sea tangente a una recta? Su centro está en la mediatriz de los dos puntos, pero falta un segundo lugar geométrico que lo fije.</p><p>Ese segundo dato lo da la <b>potencia</b>. Parte de una observación sencilla: si desde un punto P exterior a una circunferencia de centro O y radio r se traza la tangente PT, el triángulo OTP es rectángulo en T, porque la tangente es perpendicular al radio. Por Pitágoras:</p><div class="formula"><span>PT² = OP² − r² = d² − r²</span></div><p>Ese valor, que solo depende de la posición de P y de la circunferencia, es la potencia. Fíjate en que no hace falta trazar la tangente para conocerlo: basta saber la distancia d al centro y el radio. En este tema verás que también se obtiene con cualquier secante y que permite definir rectas y puntos muy útiles.</p>`,
      svg: s1,
    },
    {
      html: `<h3>1.2 Potencia de un punto respecto de una circunferencia</h3><p>Sea una circunferencia de centro O y radio r, y un punto P a distancia d de O. Se traza por P una recta cualquiera que corte a la circunferencia en A y B. Se llama <b>potencia</b> de P respecto de la circunferencia al producto:</p><div class="formula"><span>p = PA · PB = d² − r²</span></div><p>Lo importante es que el producto <b>no depende de la recta elegida</b>. Si se traza otra secante que corte en C y D, los triángulos PAD y PCB son semejantes (tienen el ángulo en P común y los ángulos inscritos en D y en B abarcan el mismo arco AC), así que PA / PC = PD / PB, es decir, PA · PB = PC · PD. Cuando la secante gira hasta ser tangente, A y B se juntan en el punto T y el producto se convierte en PT².</p><p>Por tanto, la potencia de un punto exterior se puede obtener de tres formas equivalentes: con una secante (PA · PB), con la tangente (PT²) o con la fórmula (d² − r²). En la práctica del dibujo se usa sobre todo la segunda, porque se construye con el arco capaz de 90° sobre OP. Las unidades de la potencia son de <b>superficie</b> (cm², mm²): es el área del cuadrado de lado PT.</p>`,
      svg: s2,
      video: { id: "CgXQqS7eRpg", titulo: "¿Qué es y para qué sirve la potencia? Dibujo técnico paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 19448, busqueda: "potencia dibujo técnico" },
    },
    {
      html: `<h3>1.3 Signo de la potencia y punto interior</h3><p>Para que la potencia tenga un solo valor con signo se toman los segmentos con sentido: PA y PB son del mismo signo si A y B están al mismo lado de P y de signo contrario si P queda entre ellos. Así:</p><ul><li><b>P exterior</b> (d &gt; r): A y B están al mismo lado y la potencia es <b>positiva</b>, igual a PT².</li><li><b>P sobre la circunferencia</b> (d = r): uno de los puntos de corte es el propio P y la potencia es <b>nula</b>.</li><li><b>P interior</b> (d &lt; r): P está entre A y B y la potencia es <b>negativa</b>. Su valor absoluto es r² − d².</li></ul><p>Para un punto interior no hay tangente, pero sí una construcción equivalente: se traza por P la cuerda <b>perpendicular a OP</b>. Esa cuerda MN es la más corta de todas las que pasan por P y P es su punto medio. En el triángulo rectángulo OPM, PM² = r² − d², de modo que:</p><div class="formula"><span>p = −PM² = −(MN / 2)²</span></div><p>El centro O es el punto de potencia mínima: −r². Cuanto más lejos está un punto exterior, mayor es su potencia, que crece con el cuadrado de la distancia.</p>`,
      svg: s3,
    },
    {
      html: `<h3>1.4 Circunferencias ortogonales</h3><p>Dos circunferencias son <b>ortogonales</b> cuando se cortan formando ángulo recto, es decir, cuando sus tangentes en los puntos de corte son perpendiculares. Como la tangente es perpendicular al radio, eso equivale a que <b>el radio de cada una sea tangente a la otra</b> en el punto de corte.</p><p>De aquí sale una interpretación geométrica muy útil de la potencia: si P es exterior a una circunferencia c, la circunferencia de <b>centro P y radio PT</b> (la tangente) corta a c en T₁ y T₂ formando ángulo recto. Su radio al cuadrado es la potencia:</p><div class="formula"><span>c' ⊥ c  ⟺  OP² = r² + r'²  ⟺  r'² = p(P, c)</span></div><p>Dicho de otro modo, la potencia de un punto exterior es el cuadrado del radio de la circunferencia ortogonal a c centrada en ese punto. Una consecuencia: <b>un punto puede ser centro de una circunferencia ortogonal a varias circunferencias a la vez solo si tiene la misma potencia respecto de todas</b>. Esta idea conduce directamente al eje radical y al centro radical, y es la base de la inversión que estudiarás en el tema 2, donde las circunferencias ortogonales a la de inversión son dobles (se transforman en sí mismas).</p>`,
      svg: s4,
    },
    {
      html: `<h3>1.5 Eje radical de dos circunferencias</h3><p>Se llama <b>eje radical</b> de dos circunferencias al lugar geométrico de los puntos del plano que tienen la <b>misma potencia</b> respecto de ambas. Se demuestra que es siempre una <b>recta perpendicular a la línea de centros</b>. Analíticamente: si los centros son O₁ = (0, 0) y O₂ = (c, 0), la condición x² + y² − r₁² = (x − c)² + y² − r₂² se reduce a x = (c² + r₁² − r₂²) / 2c, que es una recta vertical, perpendicular al eje O₁O₂.</p><p>Si las circunferencias tienen el mismo centro (concéntricas) no hay eje radical; si son iguales y no concéntricas, el eje es la mediatriz de O₁O₂.</p><p><b>Circunferencias secantes.</b> Los dos puntos de corte M y N tienen potencia nula respecto de ambas (están sobre las dos), así que el eje radical es <b>la recta MN</b>, la cuerda común. Desde cualquier punto R de esa recta exterior a ellas, las tangentes trazadas a una y otra miden lo mismo (RT₁ = RT₂), porque RT₁² y RT₂² son las dos potencias. Por eso, si tiras de dos hilos tangentes desde un punto del eje radical, tendrán la misma longitud.</p>`,
      svg: s5,
      video: { id: "JN2udn2HVwU", titulo: "Eje radical de dos circunferencias (distintos casos)", canal: "PDD Profesor de Dibujo", vistas: 76234, busqueda: "potencia eje radical dibujo técnico" },
    },
    {
      html: `<h3>1.6 Circunferencias tangentes</h3><p>Si las dos circunferencias son <b>tangentes</b> en un punto T, ese punto es común a las dos y tiene potencia cero respecto de ambas. Como el eje radical es perpendicular a la línea de centros y los centros están alineados con T, el eje radical es la <b>recta tangente común</b> en T.</p><p>Esto sirve tanto para tangentes <b>exteriores</b> (d = r₁ + r₂) como <b>interiores</b> (d = r₁ − r₂). En el segundo caso el eje radical queda fuera de la circunferencia pequeña y toca a la grande en T.</p><p>Esta propiedad tiene una lectura inversa muy útil en las tangencias: <b>si una circunferencia buscada es tangente a otra dada, el eje radical de las dos es la tangente común</b>. Por eso, cuando se busca una circunferencia tangente a otra y que pase por dos puntos, la tangente común en el punto de contacto pasa por el centro radical del problema. Lo usarás en el tema siguiente.</p><p>En una pieza mecánica, el eje radical de dos arcos tangentes coincide con la recta que se ve en la junta de dos piezas que se tocan, por ejemplo dos engranajes o dos rodillos en contacto.</p>`,
      svg: s6,
    },
    {
      html: `<h3>1.7 Eje radical de circunferencias exteriores o interiores</h3><p>Cuando las circunferencias no se cortan (exteriores o una dentro de otra) no hay puntos comunes que unir y hay que buscar <b>un punto</b> del eje radical; después se traza por él la perpendicular a la línea de centros. El procedimiento es:</p><ol><li>Se traza una <b>circunferencia auxiliar</b> cualquiera que corte a las dos dadas.</li><li>Se dibujan los ejes radicales de la auxiliar con cada una de las dadas: son las rectas que unen sus puntos de corte (las cuerdas comunes).</li><li>Esas dos rectas se cortan en un punto R que tiene la misma potencia respecto de las tres circunferencias, así que pertenece al eje radical buscado.</li><li>Por R se traza la <b>perpendicular a la línea de centros</b> O₁O₂: es el eje radical.</li></ol><p>Si se quiere comprobar, se repite con otra auxiliar y se obtiene un segundo punto R′ alineado. En circunferencias exteriores el eje queda entre las dos, más cerca de la pequeña; en circunferencias interiores (una dentro de otra) el eje queda <b>fuera de ambas</b>, en el lado de la circunferencia interior más próximo a la exterior.</p>`,
      svg: s7,
    },
    {
      html: `<h3>1.8 Centro radical de tres circunferencias</h3><p>Dadas tres circunferencias con centros no alineados, se pueden trazar tres ejes radicales, uno por cada pareja: e₁₂, e₂₃ y e₁₃. Un punto que esté en e₁₂ y en e₂₃ tiene igual potencia respecto de c₁ y c₂ y respecto de c₂ y c₃; por tanto también respecto de c₁ y c₃, y está en e₁₃. Así, <b>los tres ejes radicales se cortan en un mismo punto</b>, el <b>centro radical</b> CR.</p><p>Basta con trazar dos ejes; el tercero sirve de comprobación. Casos particulares:</p><ul><li>Si los tres centros están <b>alineados</b>, los ejes son paralelos (perpendiculares a la misma recta) y no hay centro radical, salvo que coincidan.</li><li>Si el centro radical es <b>exterior</b> a las tres circunferencias, la circunferencia de centro CR y radio igual a la tangente común es <b>ortogonal a las tres</b>.</li><li>Si es <b>interior</b> a las tres, su potencia es negativa y no hay circunferencia ortogonal real.</li></ul><p>El centro radical es la pieza clave del <b>problema de Apolonio</b> resuelto por potencia: el centro radical de las circunferencias dadas y de las soluciones permite encontrar los puntos de tangencia.</p>`,
      svg: s8,
      video: { id: "zDWZwIQYBeE", titulo: "Centro radical de tres circunferencias", canal: "Arturo Geometría", vistas: 46142, busqueda: "centro radical de tres circunferencias" },
    },
    {
      html: `<h3>1.9 Puntos como circunferencias de radio nulo</h3><p>Un punto A puede considerarse una <b>circunferencia de radio cero</b>. Su potencia respecto de un punto P es simplemente PA². Con esta idea se amplía el eje radical a nuevos casos:</p><ul><li><b>Eje radical de dos puntos A y B</b>: puntos con PA² = PB², es decir, la <b>mediatriz</b> de AB.</li><li><b>Eje radical de un punto A y una circunferencia c</b>: se traza una circunferencia auxiliar que pase por A y corte a c en M y N. El eje radical de la auxiliar con el punto A es la <b>tangente a la auxiliar en A</b>; el de la auxiliar con c es la recta MN. Ambas se cortan en un punto R del eje buscado, y por R se traza la perpendicular a la recta OA.</li></ul><p>La segunda construcción tiene una aplicación inmediata: si A está fuera de c, el eje radical pasa entre ambos y todos sus puntos R cumplen RA = RT, siendo RT la tangente a c. Por eso, la circunferencia de centro R y radio RA pasa por A y es ortogonal a c.</p><p>Este truco de tratar los puntos como circunferencias nulas simplifica muchos problemas de la PAU: un problema «punto-punto-circunferencia» se convierte en un problema de tres circunferencias.</p>`,
      svg: s9,
    },
    {
      html: `<h3>1.10 Haces de circunferencias coaxiales</h3><p>Se llama <b>haz de circunferencias coaxiales</b> al conjunto de circunferencias que tienen, dos a dos, el <b>mismo eje radical</b>. Sus centros están todos en una recta, perpendicular al eje. Hay tres tipos:</p><ul><li><b>Haz secante (elíptico)</b>: todas pasan por dos puntos fijos M y N. El eje radical es la recta MN y los centros están en la mediatriz de MN.</li><li><b>Haz tangente (parabólico)</b>: todas son tangentes entre sí en un mismo punto T y a la misma recta, que es el eje radical.</li><li><b>Haz no secante (hiperbólico)</b>: no tienen puntos comunes; contiene dos circunferencias de radio nulo, los <b>puntos límite</b>.</li></ul><p>Cada haz tiene un <b>haz ortogonal</b>: todas las circunferencias de uno cortan en ángulo recto a todas las del otro. El ortogonal de un haz secante es un haz no secante cuyos puntos límite son M y N. Esta pareja de haces es la que dibujan las líneas de campo y las equipotenciales de dos cargas eléctricas iguales y opuestas, que estudias en Física.</p>`,
      svg: s10,
    },
    {
      html: `<h3>1.11 Puntos límite de un haz no secante</h3><p>En un haz no secante, cada punto H del eje radical tiene la misma potencia respecto de todas las circunferencias. Si H es el pie del eje sobre la línea de centros, la circunferencia de centro H y radio √p(H) es ortogonal a todas las del haz y corta a la línea de centros en dos puntos L₁ y L₂: los <b>puntos límite</b>.</p><div class="formula"><span>HL₁ = HL₂ = √(HO₁² − r₁²) = √(HO₂² − r₂²)</span></div><p>Los puntos límite son las circunferencias de radio nulo del haz: a medida que una circunferencia del haz se hace más pequeña, su centro se acerca a L₁ o a L₂. Tienen dos propiedades notables:</p><ul><li>Cada punto límite es el <b>inverso</b> del otro respecto de cualquier circunferencia del haz.</li><li>Cualquier circunferencia que pase por L₁ y L₂ es ortogonal a todas las del haz.</li></ul><p>En la práctica sirven para transformar un problema con dos circunferencias que no se cortan en otro más sencillo: con una inversión de centro en un punto límite, las dos circunferencias pasan a ser concéntricas.</p>`,
      svg: s11,
    },
    {
      html: `<h3>1.12 Aplicación: circunferencias por dos puntos tangentes a una recta</h3><p>Ya se puede resolver el problema que abría el tema: trazar las circunferencias que pasan por A y B y son tangentes a una recta r. Todas las circunferencias que pasan por A y B forman un haz secante de eje radical AB. Sea R el punto donde la recta AB corta a r. Su potencia respecto de cualquier circunferencia del haz es RA · RB. Si la buscada toca a r en T, su potencia también es RT², así que:</p><div class="formula"><span>RT² = RA · RB  ⟹  RT = √(RA · RB)</span></div><p>Procedimiento: (1) prolongar AB hasta cortar r en R; (2) trazar una circunferencia auxiliar cualquiera por A y B y la tangente desde R, de longitud RT; (3) llevar RT sobre r a ambos lados de R: se obtienen T₁ y T₂; (4) los centros están en la mediatriz de AB y en las perpendiculares a r por T₁ y T₂. Hay <b>dos soluciones</b>. Si AB es paralela a r, R no existe y el punto de tangencia está en la mediatriz de AB: solución única.</p>`,
      svg: s12,
      video: { id: "mkOKyqktJwU", titulo: "Circunferencias tangentes a una recta pasando por dos puntos (potencia)", canal: "PDD Profesor de Dibujo", vistas: 184839, busqueda: "circunferencia por dos puntos tangente a una recta potencia" },
    },
    {
      html: `<h3>1.13 Aplicación: la media proporcional</h3><p>La <b>media proporcional</b> (o media geométrica) de dos segmentos a y b es el segmento x tal que a / x = x / b, es decir, x = √(a · b). En Dibujo Técnico I la obtuviste con el teorema de la altura o del cateto. La potencia da un tercer método muy cómodo cuando los segmentos están sobre una misma recta y a partir del mismo extremo:</p><ol><li>Sobre una recta se llevan desde P los segmentos PA = a y PB = b, al mismo lado.</li><li>Se traza cualquier circunferencia que pase por A y B (su centro, en la mediatriz de AB).</li><li>Desde P se traza la tangente PT. Por potencia, PT² = PA · PB = a · b.</li></ol><p>PT es la media proporcional. Con ella se construyen rectángulos y cuadrados equivalentes (un cuadrado de lado √(ab) tiene la misma área que el rectángulo a × b), se dividen segmentos en media y extrema razón (número áureo) y se resuelven problemas de proporciones en arquitectura y diseño.</p><p>En el examen, recuerda indicar siempre qué potencia usas y desde qué punto: es la justificación que se pide.</p>`,
      svg: s13,
    },
  ],
  ejemplos: [
    { enunciado: "Un punto P está a 13 cm del centro de una circunferencia de radio 5 cm. Calcula su potencia y la longitud de la tangente.", pasos: ["p = d² − r² = 169 − 25 = 144 cm².", "PT = √p = 12 cm."], resultado: "p = 144 cm²; PT = 12 cm." },
    { enunciado: "Por un punto P se traza una secante que corta a la circunferencia en A y B, con PA = 4 cm y AB = 5 cm. ¿Cuánto mide la tangente desde P?", pasos: ["PB = PA + AB = 9 cm (A y B al mismo lado de P).", "PT² = PA · PB = 36 cm²."], resultado: "PT = 6 cm." },
    { enunciado: "Un punto P interior está a 3 cm del centro de una circunferencia de radio 5 cm. Halla su potencia y la longitud de la cuerda más corta que pasa por P.", pasos: ["p = d² − r² = 9 − 25 = −16 cm².", "La cuerda mínima es perpendicular a OP; su mitad mide √16 = 4 cm."], resultado: "p = −16 cm²; cuerda mínima de 8 cm." },
    { enunciado: "Dos circunferencias de radios 4 y 2 cm tienen sus centros a 10 cm. ¿A qué distancia del primer centro está el eje radical?", pasos: ["Con O₁ en x = 0 y O₂ en x = 10: x² − 16 = (x − 10)² − 4.", "x² − 16 = x² − 20x + 100 − 4 → 20x = 112."], resultado: "x = 5,6 cm desde O₁ (4,4 cm desde O₂), perpendicular a O₁O₂." },
    { enunciado: "Halla el centro radical de tres circunferencias de centros (0, 0), (8, 0), (0, 6) y radios 2, 4 y 3, y di si hay circunferencia ortogonal a las tres.", pasos: ["e₁₂: x² + y² − 4 = (x − 8)² + y² − 16 → 16x = 52 → x = 3,25.", "e₁₃: x² + y² − 4 = x² + (y − 6)² − 9 → 12y = 31 → y ≈ 2,58.", "Potencia de CR respecto de c₁: 3,25² + 2,58² − 4 ≈ 13,23 > 0."], resultado: "CR ≈ (3,25; 2,58); es exterior y la circunferencia ortogonal tiene radio √13,23 ≈ 3,64." },
    { enunciado: "Se quiere una circunferencia que pase por A y B y sea tangente a la recta r. AB corta a r en R, con RA = 3 cm y RB = 12 cm. ¿Dónde están los puntos de tangencia?", pasos: ["RT² = RA · RB = 36 cm².", "RT = 6 cm, a uno y otro lado de R sobre r."], resultado: "Dos soluciones: T₁ y T₂ a 6 cm de R." },
  ],
  errores: [
    "Olvidar el signo: la potencia de un punto interior es negativa y no tiene tangente.",
    "Confundir PA · PB con PA · AB: los dos segmentos se miden desde P.",
    "Trazar el eje radical por el punto medio de los centros: solo coincide con la mediatriz si los radios son iguales.",
    "No trazar la perpendicular a la línea de centros después de hallar un punto R del eje radical con la auxiliar.",
    "Tomar como eje radical de dos circunferencias tangentes la línea de centros en lugar de la tangente común.",
    "Buscar centro radical con tres centros alineados: los ejes son paralelos y no se cortan.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula la potencia de un punto situado a 10 cm del centro de una circunferencia de radio 6 cm.", sol: "p = 10² − 6² = 100 − 36 = 64 cm². Es positiva: el punto es exterior y la tangente mide 8 cm." },
    { nivel: "básico", q: "Un punto está a 2 cm del centro de una circunferencia de radio 7 cm. ¿Cuál es su potencia? ¿Qué significa el signo?", sol: "p = 4 − 49 = −45 cm². El signo negativo indica que el punto es interior." },
    { nivel: "básico", q: "Desde P se traza una secante con PA = 2 cm y PB = 8 cm. Calcula la tangente PT.", sol: "PT² = 2 · 8 = 16 → PT = 4 cm." },
    { nivel: "básico", q: "Desde P, una secante corta en A y B con PA = 5 y PB = 12. Otra secante corta en C con PC = 6. ¿Cuánto mide PD?", sol: "PA · PB = PC · PD → 60 = 6 · PD → PD = 10." },
    { nivel: "básico", q: "Dibuja dos circunferencias secantes de radios 30 y 25 mm con centros a 40 mm y traza su eje radical.", sol: "Se unen los dos puntos de corte. La recta obtenida es perpendicular a la línea de centros y es el eje radical." },
    { nivel: "básico", q: "¿Cuál es el eje radical de dos circunferencias tangentes exteriores? Dibújalo con radios 20 y 15 mm.", sol: "Distancia entre centros 35 mm. El eje radical es la tangente común en el punto de contacto, perpendicular a la línea de centros." },
    { nivel: "básico", q: "¿Cuál es el eje radical de dos puntos A y B separados 50 mm?", sol: "La mediatriz de AB: los puntos con PA² = PB² son los que equidistan de A y B." },
    { nivel: "básico", q: "¿Qué potencia tiene el centro de una circunferencia de radio 4 cm respecto de ella?", sol: "d = 0, así que p = 0 − 16 = −16 cm², el valor mínimo posible." },
    { nivel: "básico", q: "¿Por qué dos circunferencias concéntricas no tienen eje radical?", sol: "La igualdad d² − r₁² = d² − r₂² exige r₁ = r₂; si son distintas, ningún punto tiene igual potencia respecto de ambas." },
    { nivel: "básico", q: "Construye la media proporcional de dos segmentos de 2 y 4,5 cm por potencia y comprueba el resultado midiendo.", sol: "Desde P se llevan PA = 2 y PB = 4,5 sobre una recta; con una circunferencia por A y B se traza la tangente desde P. Debe medir √9 = 3 cm." },
    { nivel: "básico", q: "Indica el signo de la potencia de P si: a) P está sobre la circunferencia; b) P está entre A y B en una secante.", sol: "a) Nula. b) Negativa, porque los segmentos PA y PB tienen sentido contrario: P es interior." },
    { nivel: "básico", q: "Explica por qué el eje radical es siempre perpendicular a la línea de centros.", sol: "La condición de igual potencia se reduce a una ecuación de primer grado en la coordenada medida sobre la línea de centros, que es una recta perpendicular a ella. Además, por simetría respecto de la línea de centros, el lugar es simétrico y solo puede ser perpendicular." },
    { nivel: "medio", q: "Dos circunferencias de radios 3 y 5 cm tienen los centros a 12 cm. Calcula la posición del eje radical.", sol: "x² − 9 = (x − 12)² − 25 → 24x = 144 − 25 + 9 = 128 → x ≈ 5,33 cm desde el centro de la de radio 3 cm (6,67 cm desde el otro)." },
    { nivel: "medio", q: "Traza el eje radical de dos circunferencias exteriores de radios 25 y 15 mm con centros a 80 mm, usando una circunferencia auxiliar.", sol: "Auxiliar que corte a ambas; se trazan sus cuerdas comunes con cada una; se cortan en R; por R se traza la perpendicular a O₁O₂. Comprobación numérica: x = (80² + 25² − 15²) / 160 = 42,5 mm desde O₁." },
    { nivel: "medio", q: "Traza el eje radical de dos circunferencias interiores (radios 40 y 15 mm, centros a 12 mm). ¿Dónde queda?", sol: "Mismo procedimiento con una auxiliar que corte a las dos. x = (144 + 1600 − 225) / 24 ≈ 63,3 mm desde el centro de la grande, hacia el lado de la pequeña: fuera de ambas circunferencias." },
    { nivel: "medio", q: "Halla gráficamente el centro radical de tres circunferencias secantes dos a dos y comprueba que los tres ejes concurren.", sol: "Se unen los puntos de corte de cada pareja; las tres cuerdas comunes se cortan en un mismo punto CR (si hay error de trazado, forman un pequeño triángulo que debe ser mínimo)." },
    { nivel: "medio", q: "Halla analíticamente el centro radical de c₁: centro (0, 0), r = 1; c₂: (6, 0), r = 2; c₃: (0, 4), r = 3.", sol: "e₁₂: 12x = 36 − 4 + 1 = 33 → x = 2,75. e₁₃: 8y = 16 − 9 + 1 = 8 → y = 1. CR = (2,75; 1)." },
    { nivel: "medio", q: "Con el centro radical del ejercicio anterior, ¿existe circunferencia ortogonal a las tres? Calcula su radio.", sol: "Potencia respecto de c₁: 2,75² + 1 − 1 = 7,5625 > 0. Sí existe; radio √7,5625 = 2,75." },
    { nivel: "medio", q: "Traza el eje radical de un punto A y una circunferencia de radio 20 mm cuyo centro está a 60 mm de A.", sol: "Circunferencia auxiliar por A que corte a la dada; tangente a la auxiliar en A y cuerda común; se cortan en R; perpendicular por R a OA. Cálculo: x² − 400 = (60 − x)² → x = 3 200/120 ≈ 26,7 mm desde O." },
    { nivel: "medio", q: "Dibuja tres circunferencias de un haz secante que pasen por M y N (MN = 40 mm). ¿Dónde están sus centros?", sol: "Todos en la mediatriz de MN; cada radio es la distancia del centro a M. El eje radical común es la recta MN." },
    { nivel: "medio", q: "Traza las circunferencias que pasan por A y B y son tangentes a r si AB corta a r en R con RA = 20 mm y RB = 45 mm.", sol: "RT = √(20 · 45) = 30 mm. T₁ y T₂ a 30 mm de R sobre r. Centros en la mediatriz de AB y en las perpendiculares a r por T₁ y T₂." },
    { nivel: "medio", q: "Construye un cuadrado de igual área que un rectángulo de 3 × 7,5 cm usando la potencia.", sol: "Lado = √(3 · 7,5) = √22,5 ≈ 4,74 cm. Desde P: PA = 3, PB = 7,5; circunferencia por A y B; tangente PT = lado del cuadrado." },
    { nivel: "medio", q: "Desde un punto R del eje radical de dos circunferencias se traza la tangente a la primera, que mide 35 mm. ¿Cuánto mide la tangente a la segunda? Razónalo.", sol: "35 mm: las dos tangentes al cuadrado son las potencias de R, que son iguales por estar R en el eje radical." },
    { nivel: "medio", q: "¿Puede el centro radical de tres circunferencias ser interior a las tres? ¿Qué ocurre entonces con la circunferencia ortogonal?", sol: "Sí, si las tres se solapan en una zona común que contiene a CR. La potencia es negativa y no hay circunferencia ortogonal real." },
    { nivel: "avanzado", q: "Demuestra que PA · PB = PC · PD para dos secantes desde un punto exterior P.", sol: "Los triángulos PAD y PCB tienen el ángulo P común y los ángulos PDA y PBC iguales, porque son inscritos y abarcan el mismo arco AC. Son semejantes: PA / PC = PD / PB, de donde PA · PB = PC · PD." },
    { nivel: "avanzado", q: "Halla los puntos límite del haz no secante determinado por c₁: centro (0, 0), r = 3 y c₂: (10, 0), r = 2.", sol: "Eje: x² − 9 = (x − 10)² − 4 → 20x = 105 → x = 5,25. Potencia de H = (5,25; 0): 27,56 − 9 = 18,56 → √ ≈ 4,31. Puntos límite: x ≈ 0,94 y x ≈ 9,56 sobre la línea de centros." },
    { nivel: "avanzado", q: "Traza la circunferencia que pasa por A y es ortogonal a dos circunferencias dadas no concéntricas. Explica la construcción.", sol: "Su centro debe tener igual potencia respecto de las dos (estar en su eje radical) y la potencia respecto de cada una debe ser el cuadrado de la distancia a A (eje radical del punto A con una de ellas). El centro es el centro radical del punto A y las dos circunferencias; el radio es la distancia a A." },
    { nivel: "avanzado", q: "Dados A, B y una recta r paralela a AB, traza la circunferencia que pasa por A y B y es tangente a r. ¿Por qué hay una sola solución?", sol: "AB no corta a r (R en el infinito). Por simetría el punto de tangencia es el pie de la mediatriz de AB sobre r; el centro está en la mediatriz y equidista de A y de T. Solo hay una solución." },
    { nivel: "avanzado", q: "Dos circunferencias de radios 30 y 20 mm son exteriores con centros a 70 mm. Encuentra el lugar de los centros de las circunferencias ortogonales a ambas.", sol: "Un centro P es válido si tiene potencia positiva e igual respecto de las dos: el eje radical, excepto los puntos interiores a alguna de ellas (aquí todos son exteriores). x = (4 900 + 900 − 400) / 140 ≈ 38,6 mm desde el primer centro." },
    { nivel: "avanzado", q: "Explica por qué, en un haz no secante, una circunferencia que pase por los dos puntos límite es ortogonal a todas las del haz.", sol: "Las circunferencias por L₁ y L₂ forman un haz secante cuyo eje es la línea de centros del primero. Cada punto del eje radical del primer haz tiene igual potencia respecto de todas las de ese haz y la circunferencia de centro en él y radio √p pasa por L₁ y L₂ y es ortogonal a todas; lo mismo sucede con cualquier centro de la mediatriz de L₁L₂, que es precisamente el eje radical." },
    { nivel: "avanzado", q: "Resuelve el problema clásico: trazar las circunferencias que pasan por A y son tangentes a dos rectas r y s que se cortan.", sol: "El centro está en la bisectriz de r y s. El simétrico A′ de A respecto de la bisectriz también está en la solución. El problema pasa a ser «por A y A′ tangente a r»: R = AA′ ∩ r, RT = √(RA · RA′). Dos soluciones." },
    { nivel: "avanzado", q: "Calcula la potencia del punto (2, 3) respecto de la circunferencia x² + y² − 4x + 2y − 4 = 0 sustituyendo en la ecuación. Justifica el método.", sol: "p = 4 + 9 − 8 + 6 − 4 = 7. En la forma (x − a)² + (y − b)² − r² = 0, el primer miembro evaluado en P es d² − r², que es la potencia." },
  ],
  quiz: reparte([
    { q: "La potencia de P respecto de una circunferencia vale…", o: ["d + r", "d² − r²", "r² − d", "d · r"], a: 1, e: "d es la distancia de P al centro." },
    { q: "Si P es exterior, la potencia es igual a…", o: ["PT", "PT²", "2PT", "PT / 2"], a: 1, e: "El cuadrado del segmento de tangente." },
    { q: "La potencia de un punto interior es…", o: ["positiva", "nula", "negativa", "infinita"], a: 2, e: "d < r → d² − r² < 0." },
    { q: "Con PA = 3 y PB = 12, la tangente PT mide…", o: ["15", "6", "36", "9"], a: 1, e: "PT² = 36." },
    { q: "Las unidades de la potencia son…", o: ["de longitud", "de superficie", "de ángulo", "sin unidades"], a: 1, e: "Es el área del cuadrado de lado PT." },
    { q: "El eje radical de dos circunferencias es…", o: ["la línea de centros", "una recta perpendicular a la línea de centros", "una circunferencia", "la bisectriz"], a: 1, e: "Puntos de igual potencia." },
    { q: "Si dos circunferencias son secantes, su eje radical…", o: ["pasa por los puntos de corte", "pasa por los centros", "es tangente a ambas", "no existe"], a: 0, e: "Los puntos de corte tienen potencia 0 respecto de ambas." },
    { q: "Si son tangentes, el eje radical es…", o: ["la línea de centros", "la tangente común en el punto de contacto", "la mediatriz de los centros", "no existe"], a: 1, e: "T tiene potencia nula respecto de ambas." },
    { q: "Dos circunferencias concéntricas de radios distintos…", o: ["tienen eje radical en el centro", "no tienen eje radical", "tienen infinitos", "su eje es un diámetro"], a: 1, e: "Ningún punto cumple la igualdad." },
    { q: "Para el eje radical de dos circunferencias exteriores se usa…", o: ["la bisectriz", "una circunferencia auxiliar que corte a ambas", "una homotecia", "la mediatriz de los radios"], a: 1, e: "Da un punto del eje; luego se traza la perpendicular." },
    { q: "Los tres ejes radicales de tres circunferencias…", o: ["forman un triángulo", "son paralelos siempre", "se cortan en un punto, el centro radical", "coinciden"], a: 2, e: "Salvo centros alineados." },
    { q: "Si los tres centros están alineados, los ejes radicales…", o: ["concurren", "son paralelos", "son perpendiculares", "son los radios"], a: 1, e: "Todos perpendiculares a la misma recta." },
    { q: "Si el centro radical es exterior a las tres circunferencias…", o: ["no hay solución", "existe una circunferencia ortogonal a las tres", "es el baricentro", "las tres son iguales"], a: 1, e: "De radio igual a la tangente común." },
    { q: "El eje radical de dos puntos A y B es…", o: ["la recta AB", "la mediatriz de AB", "una circunferencia", "el punto medio"], a: 1, e: "PA² = PB²." },
    { q: "Dos circunferencias son ortogonales si…", o: ["sus centros coinciden", "el radio de cada una es tangente a la otra en el corte", "tienen el mismo radio", "son tangentes"], a: 1, e: "Se cortan en ángulo recto." },
    { q: "En un haz secante, los centros están…", o: ["en la recta MN", "en la mediatriz de MN", "en una circunferencia", "en cualquier lugar"], a: 1, e: "Todas pasan por M y N." },
    { q: "Los puntos límite pertenecen a un haz…", o: ["secante", "tangente", "no secante", "concéntrico"], a: 2, e: "Son sus circunferencias de radio nulo." },
    { q: "Si RA = 4 y RB = 9, la distancia RT al punto de tangencia sobre r es…", o: ["13", "6", "36", "5"], a: 1, e: "RT = √36." },
    { q: "La media proporcional de 2 y 8 es…", o: ["5", "4", "10", "16"], a: 1, e: "√16 = 4." },
    { q: "La cuerda mínima que pasa por un punto interior P es…", o: ["el diámetro", "perpendicular a OP", "paralela a OP", "cualquiera"], a: 1, e: "P es su punto medio." },
  ]),
  examen: reparte([
    { q: "P está a 17 cm del centro de una circunferencia de radio 8 cm. La tangente mide…", o: ["9 cm", "15 cm", "25 cm", "12 cm"], a: 1, e: "289 − 64 = 225." },
    { q: "Una secante desde P corta en A y B con PA = 6 y AB = 10. PT =", o: ["√60", "√96", "16", "8"], a: 1, e: "PB = 16; PT² = 96." },
    { q: "Radios 5 y 3, centros a 8 (tangentes exteriores). El eje radical pasa a … del primer centro.", o: ["4", "5", "3", "6,5"], a: 1, e: "Por el punto de tangencia: x = (64 + 25 − 9)/16 = 5." },
    { q: "Para comprobar el centro radical se traza…", o: ["el tercer eje radical", "la línea de centros", "una bisectriz", "un diámetro"], a: 0, e: "Debe pasar por el mismo punto." },
    { q: "La potencia del centro de una circunferencia de radio 6 es…", o: ["0", "36", "−36", "−6"], a: 2, e: "0 − 36." },
    { q: "En un haz no secante, los puntos límite están…", o: ["en el eje radical", "en la línea de centros", "en el infinito", "sobre las circunferencias"], a: 1, e: "A √p del pie H." },
    { q: "Circunferencias por A y B tangentes a r con AB ∥ r: hay…", o: ["0 soluciones", "1 solución", "2 soluciones", "infinitas"], a: 1, e: "Por simetría, el punto de tangencia está en la mediatriz." },
    { q: "La potencia de (1, 1) respecto de x² + y² = 10 es…", o: ["−8", "8", "2", "−10"], a: 0, e: "1 + 1 − 10." },
  ]),
  feynman: ["Por qué PA · PB no depende de la secante que se elija", "Cómo se obtiene la potencia de un punto interior con la cuerda mínima", "Por qué el eje radical es perpendicular a la línea de centros", "Cómo se traza el eje radical de dos circunferencias que no se cortan", "Qué es el centro radical y para qué sirve en las tangencias"],
  glosario: [
    ["Potencia", "Producto PA · PB de las distancias de un punto a los cortes de cualquier secante; vale d² − r²."],
    ["Segmento de tangente", "Distancia del punto exterior al punto de tangencia; su cuadrado es la potencia."],
    ["Cuerda mínima", "Cuerda perpendicular a OP por un punto interior; su semicuerda al cuadrado es −p."],
    ["Eje radical", "Recta de puntos con igual potencia respecto de dos circunferencias; perpendicular a la línea de centros."],
    ["Centro radical", "Punto común a los tres ejes radicales de tres circunferencias."],
    ["Circunferencias ortogonales", "Las que se cortan en ángulo recto; el radio de una es tangente a la otra."],
    ["Haz coaxial", "Conjunto de circunferencias con el mismo eje radical dos a dos."],
    ["Haz secante", "Haz de circunferencias que pasan por dos puntos fijos."],
    ["Haz tangente", "Haz de circunferencias tangentes entre sí en un mismo punto."],
    ["Haz no secante", "Haz de circunferencias sin puntos comunes, con dos puntos límite."],
    ["Puntos límite", "Circunferencias de radio nulo de un haz no secante."],
    ["Media proporcional", "Segmento x con a / x = x / b, es decir, x = √(ab)."],
    ["Circunferencia nula", "Un punto considerado circunferencia de radio cero."],
    ["Línea de centros", "Recta que une los centros de dos circunferencias."],
  ],
  situacion: {
    titulo: "Tres rotondas y una antena",
    reto: "El ayuntamiento quiere instalar una antena en un punto desde el que las tangentes a tres rotondas circulares de distinto tamaño midan lo mismo, para tender cables iguales a su perímetro. Vuestro grupo localizará ese punto en un plano a escala.",
    pasos: [
      "Elegid tres rotondas reales en un mapa (por ejemplo, de un visor cartográfico) y dibujadlas a escala 1:1 000 con su radio.",
      "Trazad los ejes radicales de las tres parejas con circunferencias auxiliares.",
      "Localizad el centro radical y comprobad que los tres ejes concurren.",
      "Medid la tangente común y dibujad la circunferencia ortogonal a las tres.",
      "Calculad la posición analíticamente y comparad el error con el trazado.",
    ],
    producto: "Lámina A3 con el trazado, la memoria justificativa de los pasos y la tabla de errores entre el método gráfico y el analítico.",
    evaluacion: [
      "Traza los ejes radicales con el procedimiento correcto en cada caso.",
      "Localiza el centro radical con precisión y lo comprueba con el tercer eje.",
      "Justifica la igualdad de tangentes con la definición de potencia.",
      "Presenta la lámina con limpieza, escala y rotulación normalizadas.",
    ],
  },
  figura: fig("Potencia de un vistazo", "Resumen: potencia, eje radical, centro radical y haces", [
    ["Potencia", ["p = PA · PB", "= PT² = d² − r²", "fuera +, dentro −", "sobre c: 0"], "var(--red)"],
    ["Eje radical", ["igual potencia", "⊥ línea de centros", "secantes: cuerda común", "tangentes: tangente"], "var(--pen)"],
    ["Centro radical", ["3 ejes concurren", "basta con 2", "exterior: ortogonal", "centros alineados: no"], "var(--leaf)"],
    ["Aplicaciones", ["haces coaxiales", "puntos límite", "RT² = RA · RB", "media proporcional"], "var(--inf)"],
  ]),
  video: { id: "R_c5xQO0FA4", titulo: "Eje radical de dos circunferencias (varios casos)", canal: "Arturo Geometría", vistas: 57742, busqueda: "eje radical de dos circunferencias" },
  mapa: mapa("POTENCIA", "var(--bac)", [
    ["Potencia", "PA · PB · PT² · d² − r²", "var(--red)"],
    ["Eje radical", "secantes · tangentes · exteriores", "var(--pen)"],
    ["Centro radical", "tres ejes · ortogonal", "var(--leaf)"],
    ["Haces", "secante · tangente · puntos límite", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Potencia", "p = d² − r² = PA · PB"],
    ["P exterior", "p > 0 = PT²"],
    ["P interior", "p < 0 = −(semicuerda mínima)²"],
    ["Ortogonal centrada en P", "Radio √p"],
    ["Eje radical", "Igual potencia; ⊥ a la línea de centros."],
    ["Secantes", "Eje = cuerda común."],
    ["Tangentes", "Eje = tangente común."],
    ["Exteriores", "Auxiliar que corte a ambas."],
    ["Centro radical", "Corte de los tres ejes."],
    ["Dos puntos", "Eje radical = mediatriz."],
    ["Por A y B tangente a r", "RT² = RA · RB"],
    ["Media proporcional", "PT = √(PA · PB)"],
  ],
  familias: ["Con un vaso y una regla, medid la tangente desde un punto de la mesa y comprobad que su cuadrado es d² − r².", "Buscad en un mapa tres rotondas y preguntad dónde pondría una antena con cables iguales.", "Pedid que os explique por qué dos hilos tensos desde un punto a una circunferencia miden lo mismo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: potencia de un punto respecto de una circunferencia; eje radical y centro radical; circunferencias ortogonales; haces de circunferencias; aplicación a la resolución de tangencias y a la media proporcional (RD 243/2022, Dibujo Técnico II, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["GeoGebra: arrastrar P y ver cómo cambia PA · PB mientras se mantiene constante.", "Relación con Matemáticas II: ecuación del eje radical como resta de las ecuaciones de las circunferencias.", "Relación con Física: líneas de campo y equipotenciales de un dipolo como haces ortogonales.", "Práctica CAD: trazar el centro radical con referencias a objetos y medir el error."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Potencia de un punto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Potencia_de_un_punto" },
    { t: "Eje radical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Eje_radical" },
  ],
  revisado: "2026-11-21",
};
