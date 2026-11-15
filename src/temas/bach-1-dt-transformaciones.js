// Dibujo Técnico I 1º Bachillerato · Tema 5. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, arco, marca, pt, poli, linea, polar, corteRR, mid, dist, ang, unit, add, sub, mul, giro, homo, simR, flecha, tx } = G;
const dash = 'stroke-dasharray="5 3"';
const ejeL = 'stroke-dasharray="10 3 2 3"';
let kf = 0;
const fl = (A, B, c = "var(--pen)", w = 2) => { const id = `dtf${++kf}`; return `<defs>${flecha(id, c)}</defs><path d="M${A[0]} ${A[1]} L ${B[0]} ${B[1]}" stroke="${c}" stroke-width="${w}" fill="none" marker-end="url(#${id})"/>`; };
const nom = (P, l, dx, dy, c) => pt(P, l, dx, dy, c);
const tri = (T, c, op = 0.12) => poli(T, c, 2.4, c, op);

// 5.1 Clasificación.
const s1 = (() => {
  const caja = (x, y, w, tit, ls, c) => `<rect x="${x}" y="${y}" width="${w}" height="${22 + ls.length * 13}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x + w / 2, y + 13, tit, { s: 9.5, b: 1, c })}${ls.map((l, i) => tx(x + w / 2, y + 28 + i * 13, l, { s: 9 })).join("")}`;
  return dib("Clasificación de las transformaciones geométricas en isométricas, isomórficas y anamórficas", `${seg([130, 34], [46, 64], "var(--line)", 2)}${seg([130, 34], [130, 64], "var(--line)", 2)}${seg([130, 34], [214, 64], "var(--line)", 2)}<rect x="66" y="12" width="128" height="24" rx="12" fill="var(--bac)"/>${tx(130, 28, "TRANSFORMACIONES", { s: 10, b: 1, c: "#fff" })}
  ${caja(8, 64, 78, "Isométricas", ["(movimientos)", "traslación", "giro", "simetrías"], "var(--pen)")}${caja(91, 64, 78, "Isomórficas", ["(misma forma)", "homotecia", "semejanza"], "var(--leaf)")}${caja(174, 64, 78, "Anamórficas", ["(cambian forma)", "afinidad", "homología", "inversión"], "var(--red)")}
  ${tx(130, 170, "conservan: medidas · ángulos · solo incidencia", { s: 9, c: "var(--muted)" })}`);
})();

// 5.2 Traslación.
const s2 = (() => {
  const T = [[30, 130], [80, 142], [55, 92]], v = [120, -56], T2 = T.map((P) => add(P, v));
  return dib("Traslación de un triángulo según un vector: todos los puntos se desplazan igual", `${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${T.map((P, i) => seg(P, T2[i], "var(--muted)", 1, dash)).join("")}${fl([16, 74], add([16, 64], v), "var(--pen)", 2.4)}
  ${nom(T[0], "A", -10, 4)}${nom(T[1], "B", 4, 12)}${nom(T[2], "C", -10, -4)}${nom(T2[0], "A′", -14, 4, "var(--red)")}${nom(T2[1], "B′", 4, 12, "var(--red)")}${nom(T2[2], "C′", -12, -4, "var(--red)")}${tx(70, 40, "v", { s: 13, b: 1, c: "var(--pen)" })}
  ${tx(246, 160, "AA′ = BB′ = CC′ = v", { s: 9.5, a: "end", b: 1, c: "var(--pen)" })}${tx(246, 172, "lados homólogos paralelos", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 5.3 Giro.
const s3 = (() => {
  const O = [130, 128], T = [[170, 118], [220, 138], [190, 78]], T2 = T.map((P) => giro(P, O, 90));
  return dib("Giro de 90 grados de un triángulo alrededor de un centro O con arcos de compás", `${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${T.map((P, i) => `${seg(O, P, "var(--muted)", 1)}${seg(O, T2[i], "var(--muted)", 1)}${arco(O, dist(O, P), ang(O, P), ang(O, T2[i]), "var(--pen)", 1.2, dash)}`).join("")}${arco(O, 16, ang(O, T[1]), ang(O, T2[1]), "var(--red)", 1.8)}
  ${pt(O, "O", -4, 15)}${nom(T[0], "A", 2, 14)}${nom(T[1], "B", 4, 4)}${nom(T[2], "C", 6, -2)}${nom(T2[0], "A′", 6, 4, "var(--red)")}${nom(T2[1], "B′", -14, -2, "var(--red)")}${nom(T2[2], "C′", -14, 4, "var(--red)")}
  ${tx(14, 160, "centro O · ángulo α = 90°", { s: 9.5, a: "start", b: 1 })}${tx(14, 172, "OA = OA′ y ángulo AOA′ = α", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 5.4 Simetría axial.
const s4 = (() => {
  const T = [[50, 50], [104, 80], [70, 140]], T2 = T.map(([x, y]) => [260 - x, y]);
  return dib("Simetría axial: cada punto y su simétrico están en una perpendicular al eje y a igual distancia", `${seg([130, 14], [130, 168], "var(--pen)", 1.6, ejeL)}${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${T.map((P, i) => `${seg(P, T2[i], "var(--muted)", 1, dash)}${pt([130, P[1]], "", 0, 0, "var(--pen)")}`).join("")}
  ${nom(T[0], "A", -12, 0)}${nom(T[1], "B", -12, -6)}${nom(T[2], "C", -12, 4)}${nom(T2[0], "A′", 6, 0, "var(--red)")}${nom(T2[1], "B′", 6, -6, "var(--red)")}${nom(T2[2], "C′", 6, 4, "var(--red)")}${tx(136, 24, "eje e", { s: 10, b: 1, c: "var(--pen)", a: "start" })}
  ${tx(130, 176, "la figura simétrica queda «dada la vuelta»", { s: 9, c: "var(--muted)" })}`);
})();

// 5.5 Composición de dos simetrías de ejes paralelos.
const s5 = (() => {
  const T = [[20, 60], [50, 72], [32, 112]], T1 = T.map(([x, y]) => [160 - x, y]), T2 = T1.map(([x, y]) => [300 - x, y]);
  return dib("Dos simetrías de ejes paralelos equivalen a una traslación de vector doble de la distancia entre ejes", `${seg([80, 22], [80, 140], "var(--pen)", 1.6, ejeL)}${seg([150, 22], [150, 140], "var(--leaf)", 1.6, ejeL)}${tri(T, "var(--ink)")}${tri(T1, "var(--muted)", 0.06)}${tri(T2, "var(--red)")}
  ${tx(80, 16, "e₁", { s: 10, b: 1, c: "var(--pen)" })}${tx(150, 16, "e₂", { s: 10, b: 1, c: "var(--leaf)" })}${tx(37, 130, "F", { s: 11, b: 1 })}${tx(125, 130, "F′", { s: 11, b: 1, c: "var(--muted)" })}${tx(175, 130, "F″", { s: 11, b: 1, c: "var(--red)" })}
  ${fl([20, 156], [156, 156], "var(--red)", 2)}${tx(88, 170, "traslación de 2d", { s: 9.5, b: 1, c: "var(--red)" })}${seg([80, 146], [150, 146], "var(--muted)", 1)}${tx(115, 142, "d", { s: 9.5, c: "var(--muted)" })}${tx(250, 152, "con ejes que se", { s: 9, a: "end", c: "var(--muted)" })}${tx(250, 164, "cortan: giro de 2α", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 5.6 Homotecia.
const s6 = (() => {
  const O = [110, 110], T = [[140, 100], [160, 122], [146, 80]], Tk = T.map((P) => homo(P, O, 2)), Ti = T.map((P) => homo(P, O, -1));
  return dib("Homotecia de centro O: razón 2 (directa, ampliación) y razón menos 1 (inversa)", `${T.map((P, i) => seg(Ti[i], Tk[i], "var(--muted)", 1, dash)).join("")}${tri(T, "var(--ink)")}${tri(Tk, "var(--red)")}${tri(Ti, "var(--pen)")}
  ${pt(O, "O", -2, 16)}${nom(T[0], "A", 4, 12)}${nom(Tk[0], "A′", 6, 4, "var(--red)")}${nom(Ti[0], "A″", -16, 4, "var(--pen)")}${tx(246, 24, "k = 2: OA′ = 2 · OA", { s: 9.5, a: "end", b: 1, c: "var(--red)" })}${tx(14, 168, "k = −1: al otro lado de O", { s: 9.5, a: "start", b: 1, c: "var(--pen)" })}${tx(246, 172, "lados homólogos paralelos", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 5.7 Semejanza.
const s7 = (() => {
  const T = [[22, 140], [92, 140], [44, 92]], O = [22, 140], k = 1.55, T2 = T.map((P) => giro(homo(P, O, k), O, 0)).map((P) => add(giro(P, O, 25), [118, -6]));
  const marcaA = (V, A, B, c) => arco(V, 12, ang(V, A), ang(V, B), c, 1.6);
  return dib("Dos triángulos semejantes: ángulos iguales y lados proporcionales, aunque estén girados y desplazados", `${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${marcaA(T[0], T[1], T[2], "var(--pen)")}${marcaA(T2[0], T2[1], T2[2], "var(--pen)")}${arco(T[1], 12, ang(T[1], T[2]), ang(T[1], T[0]), "var(--leaf)", 1.6)}${arco(T2[1], 12, ang(T2[1], T2[2]), ang(T2[1], T2[0]), "var(--leaf)", 1.6)}
  ${nom(T[0], "A", -4, 14)}${nom(T[1], "B", 2, 14)}${nom(T[2], "C", -4, -6)}${nom(T2[0], "A′", -14, 10, "var(--red)")}${nom(T2[1], "B′", 4, 6, "var(--red)")}${nom(T2[2], "C′", -6, -6, "var(--red)")}
  ${tx(14, 24, "A′B′/AB = B′C′/BC = C′A′/CA = k", { s: 9.5, a: "start", b: 1 })}${tx(14, 38, "ángulos homólogos iguales", { s: 9, a: "start", c: "var(--pen)" })}${tx(130, 172, "semejanza = homotecia + movimiento", { s: 9.5, b: 1, c: "var(--red)" })}`);
})();

// 5.8 Escala gráfica con contraescala.
const s8 = (() => {
  const y = 120, u = 34, x0 = 54, n = 5;
  let s = `${seg([x0 - u, y], [x0 + n * u, y], "var(--ink)", 1.2)}${seg([x0 - u, y + 8], [x0 + n * u, y + 8], "var(--ink)", 1.2)}`;
  for (let i = 0; i <= n; i++) s += `${seg([x0 + i * u, y], [x0 + i * u, y + 8], "var(--ink)", 1.2)}${tx(x0 + i * u, y + 22, String(i), { s: 10, b: 1 })}`;
  for (let i = 0; i < n; i += 2) s += `<rect x="${x0 + i * u}" y="${y}" width="${u}" height="8" fill="var(--ink)"/>`;
  for (let i = 0; i <= 10; i++) s += seg([x0 - u + (i * u) / 10, y], [x0 - u + (i * u) / 10, y + (i % 5 ? 4 : 8)], "var(--ink)", 1);
  const R = (i) => polar([x0 - u, y], 7 * i, 62);
  s += seg([x0 - u, y], R(10), "var(--muted)", 1.1) + seg(R(10), [x0, y], "var(--red)", 1.4);
  for (let i = 1; i < 10; i++) s += seg(R(i), [x0 - u + (i * u) / 10, y], "var(--red)", 0.8, dash);
  return dib("Escala gráfica 1:50 en metros con contraescala dividida en decímetros mediante el teorema de Tales", `${s}${tx(x0 - u, y + 22, "1", { s: 10, b: 1 })}${tx(x0 + n * u + 6, y + 8, "m", { s: 10, a: "start", b: 1 })}${tx(x0 - u / 2, y + 36, "contraescala", { s: 9, c: "var(--red)" })}${tx(x0 + 85, y + 40, "E 1:50 → 1 m real = 2 cm", { s: 10, b: 1, c: "var(--pen)" })}
  ${tx(250, 24, "escala = dibujo : realidad", { s: 10, a: "end", b: 1 })}${tx(250, 40, "reducción 1:2, 1:5, 1:10…", { s: 9, a: "end", c: "var(--muted)" })}${tx(250, 54, "ampliación 2:1, 5:1, 10:1…", { s: 9, a: "end", c: "var(--muted)" })}${tx(250, 68, "natural 1:1", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 5.9 Equivalencia: cuadrilátero → triángulo.
const s9 = (() => {
  const A = [30, 150], B = [150, 150], C = [180, 80], D = [70, 58], E = corteRR(C, add(C, sub(D, B)), A, B);
  return dib("Triángulo equivalente a un cuadrilátero: la paralela a la diagonal BD por C da el vértice E", `${poli([A, B, C, D], "var(--ink)", 2.2, "var(--pen)", 0.12)}${seg(B, D, "var(--muted)", 1.2, dash)}${seg(C, E, "var(--pen)", 1.4, dash)}${seg(B, E, "var(--muted)", 1.2)}${poli([A, E, D], "var(--red)", 2.4, "none")}
  ${nom(A, "A", -4, 14)}${nom(B, "B", -4, 14)}${nom(C, "C", 6, -2)}${nom(D, "D", -4, -8)}${nom(E, "E", -2, 14, "var(--red)")}${tx(14, 24, "CE ∥ BD → área BCD = área BED", { s: 9.5, a: "start", b: 1, c: "var(--pen)" })}${tx(14, 38, "área ABCD = área AED", { s: 9.5, a: "start", b: 1, c: "var(--red)" })}`);
})();

// 5.10 Afinidad oblicua.
const s10 = (() => {
  const ye = 150, k = 1.6, d = unit([0, 0], [0.45, -1]), af = (P) => { const h = ye - P[1], t = (ye - k * h - P[1]) / d[1]; return add(P, mul(d, t)); };
  const T = [[40, 118], [104, 132], [72, 92]], T2 = T.map(af), X = corteRR(T[0], T[1], [0, ye], [1, ye]);
  return dib("Afinidad oblicua de eje e: los puntos homólogos están en rectas paralelas a la dirección y las rectas homólogas se cortan en el eje", `${seg([14, ye], [246, ye], "var(--pen)", 1.8)}${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${T.map((P, i) => recta(P, T2[i], 14, "var(--muted)", 1, dash)).join("")}${seg(X, T2[0], "var(--leaf)", 1, dash)}${seg(X, T[0], "var(--leaf)", 1, dash)}${pt(X, "X", 0, 14, "var(--leaf)")}
  ${nom(T[0], "A", -12, 8)}${nom(T[1], "B", 2, 14)}${nom(T2[0], "A′", -14, -4, "var(--red)")}${nom(T2[1], "B′", 6, -2, "var(--red)")}${tx(242, ye - 6, "eje e", { s: 10, a: "end", b: 1, c: "var(--pen)" })}
  ${tx(250, 24, "dirección de afinidad: AA′ ∥ BB′", { s: 9, a: "end", c: "var(--muted)" })}${tx(250, 38, "AB y A′B′ se cortan en el eje", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}${tx(250, 52, "razón k = 1,6", { s: 9, a: "end" })}`);
})();

// 5.11 Homología.
const s11 = (() => {
  const ye = 160, O = [40, 30], A = [90, 90], A2 = homo(A, O, 1.4), hom = (P) => { const X = corteRR(A, P, [0, ye], [1, ye]); return corteRR(O, P, A2, X); };
  const T = [A, [140, 100], [110, 62]], T2 = T.map((P, i) => (i ? hom(P) : A2)), X = corteRR(T[0], T[2], [0, ye], [1, ye]);
  return dib("Homología de centro O y eje e: puntos homólogos alineados con O y rectas homólogas que se cortan en el eje", `${seg([14, ye], [246, ye], "var(--pen)", 1.8)}${T.map((P, i) => seg(O, add(T2[i], mul(unit(O, T2[i]), 12)), "var(--muted)", 1, dash)).join("")}${tri(T, "var(--ink)")}${tri(T2, "var(--red)")}${seg(T[2], X, "var(--leaf)", 1, dash)}${seg(T2[2], X, "var(--leaf)", 1, dash)}
  ${pt(O, "O", -4, -6)}${pt(X, "X", 0, 14, "var(--leaf)")}${nom(T[0], "A", -12, 2)}${nom(T[2], "C", 4, -6)}${nom(T2[0], "A′", -16, 4, "var(--red)")}${nom(T2[2], "C′", 6, -2, "var(--red)")}${tx(242, ye - 6, "eje e", { s: 10, a: "end", b: 1, c: "var(--pen)" })}
  ${tx(250, 24, "O, A, A′ alineados", { s: 9.5, a: "end", b: 1 })}${tx(250, 38, "AC y A′C′ se cortan en el eje", { s: 9, a: "end", c: "var(--leaf)", b: 1 })}${tx(250, 52, "base de la perspectiva cónica", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 5.12 Frisos.
const s12 = (() => {
  const m = (x, y, sx = 1, c = "var(--pen)") => poli([[x, y], [x + 18 * sx, y], [x + 18 * sx, y - 10], [x + 8 * sx, y - 10], [x + 8 * sx, y - 26], [x, y - 26]], c, 2, c, 0.22);
  let a = "", b = "", c = "";
  for (let i = 0; i < 6; i++) a += m(18 + i * 38, 54);
  for (let i = 0; i < 6; i++) b += m(18 + i * 38 + (i % 2 ? 18 : 0), 108, i % 2 ? -1 : 1, i % 2 ? "var(--red)" : "var(--pen)");
  for (let i = 0; i < 6; i++) c += i % 2 ? poli([[18 + i * 38, 140], [36 + i * 38, 140], [36 + i * 38, 150], [26 + i * 38, 150], [26 + i * 38, 166], [18 + i * 38, 166]], "var(--leaf)", 2, "var(--leaf)", 0.22) : m(18 + i * 38, 166, 1, "var(--leaf)");
  return dib("Frisos generados por traslación, por simetría axial y por simetría con deslizamiento de un mismo motivo", `${a}${tx(250, 20, "traslación", { s: 9, a: "end", b: 1, c: "var(--pen)" })}${b}${tx(250, 72, "simetría + traslación", { s: 9, a: "end", b: 1, c: "var(--red)" })}${c}${tx(250, 128, "simetría con deslizamiento", { s: 9, a: "end", b: 1, c: "var(--leaf)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Transformaciones geométricas",
  minutos: 110,
  objetivos: [
    "Clasificar las transformaciones geométricas según lo que conservan",
    "Aplicar traslaciones, giros y simetrías y componer movimientos",
    "Construir figuras homotéticas y semejantes y comprender su relación",
    "Utilizar escalas normalizadas y construir escalas gráficas con contraescala",
    "Transformar polígonos en otros equivalentes",
    "Conocer la afinidad y la homología como base de los sistemas de representación",
  ],
  claves: ["transformación", "movimiento", "traslación", "giro", "simetría", "homotecia", "semejanza", "escala", "equivalencia", "afinidad", "homología"],
  lectura: {
    titulo: "Escher y el arte de mover figuras",
    html: `<p>El artista neerlandés Maurits Cornelis Escher visitó la Alhambra de Granada en 1922 y en 1936. Pasó días copiando sus alicatados, fascinado por cómo un mismo motivo se repetía una y otra vez, girado, reflejado o desplazado, hasta cubrir toda una pared sin dejar huecos. A partir de aquellos apuntes creó sus famosos mosaicos de peces, pájaros y lagartos que encajan como piezas de un puzle.</p>
    <p>Lo que Escher descubrió de forma intuitiva tiene un nombre preciso: <b>transformaciones geométricas</b>. Una traslación desplaza la figura, un giro la hace rotar, una simetría la refleja como un espejo y una homotecia la amplía o la reduce sin deformarla. Los matemáticos han demostrado que solo hay 17 formas distintas de combinar estos movimientos para cubrir el plano con un motivo repetido, y en la Alhambra se encuentran muchas de ellas.</p>
    <p>Las transformaciones no son solo arte. Cada vez que usas una escala para leer un plano, cuando un programa de CAD copia, gira o refleja una pieza, o cuando se proyecta una sombra o una perspectiva, se está aplicando una transformación. En este tema aprenderás a construirlas con exactitud.</p>`,
  },
  pregunta: {
    texto: "Si te miras en un espejo y levantas la mano derecha, tu imagen levanta la izquierda. ¿Qué transformación hace el espejo?",
    respuesta: "Una <mark>simetría</mark> (axial en el plano, especular en el espacio). Conserva las distancias y los ángulos, pero <b>invierte el sentido</b> de la figura: por eso cambia la derecha por la izquierda. Una traslación o un giro, en cambio, conservan el sentido.",
  },
  bloques: [
    {
      html: `<h3>5.1 Transformaciones geométricas: clasificación</h3><p>Una <b>transformación geométrica</b> es una regla que asocia a cada punto P del plano otro punto P′, su <b>homólogo</b> o imagen. La figura original y la transformada se llaman figuras homólogas. Los puntos que coinciden con su imagen se llaman <b>dobles</b> o fijos.</p><p>Según las propiedades que conservan, se clasifican en:</p><ul><li><b>Isométricas</b> o <b>movimientos</b>: conservan la forma y el tamaño (distancias y ángulos). Son la traslación, el giro y las simetrías. Producen figuras <b>iguales</b> o congruentes.</li><li><b>Isomórficas</b>: conservan la forma (los ángulos) pero cambian el tamaño en una proporción constante. Son la homotecia y la semejanza.</li><li><b>Anamórficas</b>: cambian la forma, aunque conservan algunas propiedades, como la alineación de puntos o la incidencia. Son la afinidad, la homología y la inversión.</li></ul><p>Los movimientos se dividen a su vez en <b>directos</b>, que conservan el sentido de giro de la figura (traslación y giro), e <b>inversos</b>, que lo invierten (simetría axial). Se puede comprobar recorriendo los vértices A, B, C: si en la imagen el orden A′, B′, C′ sigue el mismo sentido, el movimiento es directo.</p><p>Las transformaciones anamórficas son el fundamento de los sistemas de representación: la afinidad relaciona una figura con su abatimiento y la homología, con su perspectiva cónica.</p>`,
      svg: s1,
    },
    {
      html: `<h3>5.2 La traslación</h3><p>Una <b>traslación</b> de vector <b>v</b> es el movimiento que desplaza cada punto P a otro P′ de modo que el vector PP′ es igual a v: mismo módulo, misma dirección y mismo sentido. Todos los puntos se mueven lo mismo y en la misma dirección.</p><p>Propiedades:</p><ul><li>Es un movimiento <b>directo</b>: conserva distancias, ángulos y sentido.</li><li>Los segmentos homólogos son <b>paralelos e iguales</b>: AB ∥ A′B′.</li><li>No tiene puntos dobles (salvo la traslación nula). Las rectas paralelas al vector son <b>dobles</b>: se transforman en sí mismas.</li></ul><p>Construcción: por cada vértice de la figura se traza una paralela al vector y sobre ella se lleva, con el compás, la longitud del vector en su sentido. Basta con trasladar un vértice y trazar los lados paralelos a los originales.</p><p>Dos traslaciones seguidas equivalen a una sola traslación cuyo vector es la suma de los vectores. Por eso el conjunto de traslaciones tiene una estructura muy sencilla.</p><p>La traslación es la base de los <b>frisos</b> y <b>mosaicos</b>, de la repetición de piezas en una cadena de montaje y de la orden «mover» o «copiar» de cualquier programa de diseño. En el espacio, una traslación describe el movimiento de un objeto que se desplaza sin girar, como un ascensor o un cajón.</p>`,
      svg: s2,
    },
    {
      html: `<h3>5.3 El giro</h3><p>Un <b>giro</b> de centro O y ángulo α transforma cada punto P en otro P′ de modo que OP = OP′ y el ángulo POP′ mide α. Por convenio, el ángulo es positivo en sentido <b>antihorario</b>.</p><p>Propiedades:</p><ul><li>Es un movimiento <b>directo</b>. El único punto doble es el centro O.</li><li>Cada recta forma con su homóloga un ángulo igual a α.</li><li>Un giro de 180° es la <b>simetría central</b>: P′ es el simétrico de P respecto de O, y los segmentos homólogos son paralelos y de sentido contrario.</li></ul><p>Construcción del giro de una figura:</p><ol><li>Se une el centro O con un vértice A.</li><li>Se construye el ángulo α a partir de OA (copiándolo con el compás o con escuadra y cartabón si es de 30°, 45°, 60° o 90°).</li><li>Con centro en O y radio OA se traza un arco que corta al nuevo lado en A′.</li><li>Se repite con los demás vértices, o se usan las distancias entre vértices para construir el resto de la figura.</li></ol><p><b>Hallar el centro de giro</b> conocidos dos pares de puntos homólogos A-A′ y B-B′: el centro equidista de A y A′ y de B y B′, así que está en el corte de las mediatrices de AA′ y BB′. Los giros aparecen en las piezas con simetría radial (ruedas, hélices, engranajes) y en las órdenes «rotar» y «matriz polar» del CAD.</p>`,
      svg: s3,
      video: { id: "NummIe4XG2U", titulo: "Giro de una figura (transformaciones geométricas)", canal: "Arturo Geometría", vistas: 157322, busqueda: "giros simetrías traslaciones dibujo técnico" },
    },
    {
      html: `<h3>5.4 Las simetrías</h3><p>La <b>simetría axial</b> de eje e transforma cada punto P en otro P′ tal que el eje es la <b>mediatriz</b> del segmento PP′: P′ está en la perpendicular al eje por P, a la misma distancia y al otro lado.</p><p>Propiedades:</p><ul><li>Es un movimiento <b>inverso</b>: conserva distancias y ángulos, pero invierte el sentido de la figura.</li><li>Todos los puntos del eje son <b>dobles</b>.</li><li>Una recta y su simétrica se cortan sobre el eje (o son paralelas a él).</li></ul><p>Construcción: desde cada vértice se traza la perpendicular al eje y se lleva con el compás la misma distancia al otro lado.</p><p>La <b>simetría central</b> de centro O lleva cada punto P a P′, de modo que O es el punto medio de PP′. Como ya se vio, equivale a un giro de 180° y, por tanto, es un movimiento directo.</p><p>Una figura tiene <b>simetría propia</b> si se transforma en sí misma: un rectángulo tiene dos ejes de simetría; un hexágono regular, seis ejes y un centro de simetría. Los ejes de simetría de una pieza se dibujan siempre en los planos con línea fina de trazo y punto, porque permiten acotar y dibujar solo la mitad.</p><p>En la naturaleza y en el diseño la simetría transmite equilibrio: casi todos los animales tienen simetría bilateral, y fachadas, coches o logotipos se diseñan con uno o varios ejes de simetría.</p>`,
      svg: s4,
    },
    {
      html: `<h3>5.5 Composición de movimientos</h3><p>Aplicar dos transformaciones seguidas se llama <b>componerlas</b>. Las composiciones de movimientos son siempre movimientos, y algunas tienen resultados sorprendentes:</p><ul><li><b>Dos traslaciones</b> equivalen a una traslación de vector suma.</li><li><b>Dos giros del mismo centro</b> equivalen a un giro de ángulo suma.</li><li><b>Dos simetrías de ejes paralelos</b> separados una distancia d equivalen a una <b>traslación</b> de vector perpendicular a los ejes y de módulo <b>2d</b>.</li><li><b>Dos simetrías de ejes que se cortan</b> en O formando un ángulo α equivalen a un <b>giro</b> de centro O y ángulo <b>2α</b>.</li><li>Una simetría seguida de una traslación paralela al eje da la <b>simetría con deslizamiento</b>, que es la de las huellas que deja una persona al caminar.</li></ul><p>Estas relaciones explican por qué con espejos se pueden producir giros (el caleidoscopio usa espejos que forman 60° y genera giros de 120°) y por qué cualquier movimiento del plano se puede obtener componiendo como mucho tres simetrías axiales.</p><p>El orden importa: en general, componer A y después B no da lo mismo que B y después A. Por ejemplo, un giro seguido de una traslación no coincide con la traslación seguida del giro, aunque ambos resultados sean giros del mismo ángulo con distinto centro.</p>`,
      svg: s5,
    },
    {
      html: `<h3>5.6 La homotecia</h3><p>Una <b>homotecia</b> de centro O y razón k (un número distinto de 0) transforma cada punto P en otro P′ alineado con O y P, de modo que:</p><div class="formula"><span>OP′ = k · OP</span></div><ul><li>Si k &gt; 0 la homotecia es <b>directa</b>: P y P′ están al mismo lado de O. Si |k| &gt; 1 la figura se amplía y si |k| &lt; 1 se reduce.</li><li>Si k &lt; 0 es <b>inversa</b>: P′ está al otro lado de O y la figura queda «dada la vuelta». Con k = −1 es la simetría central.</li></ul><p>Propiedades: los segmentos homólogos son <b>paralelos</b> y su razón es |k|; los ángulos se conservan; las áreas se multiplican por k². El único punto doble es el centro, y las rectas que pasan por él son dobles.</p><p>Construcción: se unen O con cada vértice y, sobre esas rectas, se lleva OP′ = k · OP (con el teorema de Tales si k es fraccionario). Basta con obtener un vértice y trazar paralelas a los lados.</p><p><b>Hallar el centro</b> de dos figuras homotéticas: se unen dos pares de vértices homólogos y las rectas se cortan en O. Dos circunferencias cualesquiera son siempre homotéticas, con dos centros de homotecia (directo e inverso) que se usan, por ejemplo, para trazar tangentes comunes. Los proyectores de diapositivas y las sombras de una lámpara puntual sobre una pared paralela a la figura producen homotecias.</p>`,
      svg: s6,
    },
    {
      html: `<h3>5.7 La semejanza</h3><p>Dos figuras son <b>semejantes</b> si tienen la misma forma: sus <b>ángulos homólogos son iguales</b> y sus <b>lados homólogos son proporcionales</b>. La constante de proporcionalidad es la <b>razón de semejanza</b> k:</p><div class="formula"><span>A′B′/AB = B′C′/BC = C′A′/CA = k</span></div><p>La razón de las áreas es k² y la de los volúmenes, en el espacio, k³. Por eso una maqueta a escala 1:10 tiene un área cien veces menor y un volumen mil veces menor que el original.</p><p>Toda semejanza es la composición de una <b>homotecia</b> y un <b>movimiento</b>: dos figuras semejantes se pueden colocar en posición homotética desplazándolas o girándolas.</p><p>Para triángulos existen criterios que aseguran la semejanza sin comprobar todo:</p><ul><li>Dos ángulos iguales.</li><li>Los tres lados proporcionales.</li><li>Dos lados proporcionales y el ángulo comprendido igual.</li></ul><p><b>Construcción de un polígono semejante</b> a otro con razón k: se elige un vértice como centro de homotecia, se trazan las diagonales desde él y se lleva sobre un lado la longitud k · l; por el punto obtenido se trazan paralelas a los lados sucesivos. También se puede triangular la figura y construir cada triángulo semejante. La semejanza es la base de las escalas y de la reproducción de planos.</p>`,
      svg: s7,
    },
    {
      html: `<h3>5.8 Las escalas</h3><p>La <b>escala</b> es la razón entre las dimensiones del dibujo y las dimensiones reales del objeto:</p><div class="formula"><span>E = dibujo : realidad</span></div><p>Se expresa como una razón con el 1 en uno de sus términos. Según la norma <b>UNE-EN ISO 5455</b>, las escalas recomendadas son:</p><ul><li><b>Natural</b>: 1:1.</li><li><b>De reducción</b>: 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200… (para edificios, mapas o piezas grandes).</li><li><b>De ampliación</b>: 2:1, 5:1, 10:1, 20:1, 50:1 (para piezas pequeñas, como las de un reloj).</li></ul><p>Por ejemplo, a escala 1:50, una pared de 4 m (4000 mm) se dibuja con 4000/50 = 80 mm. Al revés, una medida de 35 mm en el dibujo representa 35 · 50 = 1750 mm.</p><p>La <b>escala gráfica</b> es una regla dibujada en el propio plano que permite medir directamente en unidades reales, y que sigue siendo válida si el plano se amplía o reduce al imprimirlo. Se construye llevando la unidad a escala varias veces a la derecha del cero y, a su izquierda, una <b>contraescala</b>: una unidad dividida en diez partes con el teorema de Tales para medir los decimales.</p><p>Los programas de CAD dibujan siempre a escala 1:1 y la escala se aplica al imprimir. Aun así, conviene elegir la escala antes de empezar, para que el dibujo quepa en el formato y sea legible.</p>`,
      svg: s8,
      video: { id: "frNhrmKpLwA", titulo: "Trazar una escala gráfica (reducción o ampliación)", canal: "PDD Profesor de Dibujo", vistas: 316198, busqueda: "semejanza escalas dibujo técnico" },
    },
    {
      html: `<h3>5.9 Equivalencia</h3><p>Dos figuras son <b>equivalentes</b> si tienen la misma <b>área</b>, aunque su forma sea distinta. La equivalencia no es una transformación punto a punto, pero se construye con trazados muy sencillos basados en una propiedad: <b>dos triángulos con la misma base y la misma altura tienen la misma área</b>. Por tanto, si se desplaza el vértice de un triángulo por una paralela a la base, el área no cambia.</p><p>Construcciones habituales:</p><ul><li><b>Triángulo equivalente a un cuadrilátero</b> ABCD: se traza la diagonal BD y, por C, la paralela a BD hasta cortar la prolongación de AB en E. El triángulo AED tiene la misma área que ABCD, porque el triángulo BCD se ha sustituido por BED, de igual base y altura.</li><li>Repitiendo el proceso, cualquier <b>polígono de n lados</b> se reduce a un triángulo, eliminando un vértice en cada paso.</li><li><b>Rectángulo equivalente a un triángulo</b>: de la misma base y mitad de altura.</li><li><b>Cuadrado equivalente a un rectángulo</b> de lados a y b: su lado es la media proporcional √(a · b).</li></ul><p>Con estas construcciones se puede cuadrar cualquier polígono: transformarlo en un cuadrado de igual área. Lo que no se puede hacer con regla y compás es cuadrar el círculo, porque π es un número trascendente (Lindemann, 1882). Las equivalencias se usan en topografía para calcular superficies de parcelas o para dividir un terreno en partes de igual área.</p>`,
      svg: s9,
    },
    {
      html: `<h3>5.10 La afinidad</h3><p>Una <b>afinidad</b> (homología afín) es una transformación definida por una recta, el <b>eje de afinidad</b> e, una <b>dirección de afinidad</b> d y una razón. Cumple:</p><ul><li>Los puntos homólogos P y P′ están en rectas <b>paralelas a la dirección</b> d.</li><li>Dos rectas homólogas se cortan en un punto del <b>eje</b>, que es una recta de puntos dobles.</li><li>La razón entre las distancias de P′ y de P al eje, medidas en la dirección d, es constante.</li></ul><p>Si la dirección es perpendicular al eje, la afinidad es <b>ortogonal</b>; si no, es <b>oblicua</b>. La afinidad conserva el paralelismo y la razón entre segmentos de una misma recta, pero no las distancias ni los ángulos: un cuadrado se convierte en un paralelogramo y una circunferencia en una elipse.</p><p>Construcción de la figura afín de un polígono conocido el eje y un par de puntos A-A′: para otro vértice C se prolonga AC hasta cortar el eje en X; se une X con A′; la paralela a la dirección por C corta a XA′ en C′.</p><p>La afinidad es fundamental en dos campos. En el <b>trazado de la elipse</b>, que es la figura afín de su circunferencia principal (método de afinidad del tema anterior). Y en el <b>sistema diédrico</b>: la proyección de una figura plana y su <b>abatimiento</b> son figuras afines, con el eje en la charnela.</p>`,
      svg: s10,
    },
    {
      html: `<h3>5.11 La homología</h3><p>La <b>homología</b> generaliza la afinidad. Está definida por un <b>centro</b> O, un <b>eje</b> e y un par de puntos homólogos, y cumple:</p><ul><li>Dos puntos homólogos P y P′ están <b>alineados con el centro</b> O.</li><li>Dos rectas homólogas se cortan en un punto del <b>eje</b>.</li></ul><p>Si el centro se aleja al infinito, las rectas que unen puntos homólogos se vuelven paralelas y la homología se convierte en una afinidad; si el eje se aleja al infinito, se convierte en una homotecia.</p><p>Construcción de la figura homóloga: para un punto B, se une con A y se prolonga hasta el eje (punto X); la recta XA′ corta a la recta OB en B′.</p><p>Las homologías tienen dos <b>rectas límite</b>, paralelas al eje, que contienen los puntos cuyos homólogos están en el infinito. Por eso transforman rectas paralelas en rectas que se cortan: exactamente lo que ocurre en la <b>perspectiva cónica</b>, donde las vías del tren, que son paralelas, parecen juntarse en el horizonte. La homología relaciona la planta de un objeto con su perspectiva, y es la herramienta geométrica que hay detrás de la perspectiva renacentista y de la corrección de perspectiva en fotografía.</p><p>Las cónicas son figuras homólogas de la circunferencia: según cómo corte la circunferencia a la recta límite, su homóloga es una elipse, una parábola o una hipérbola.</p>`,
      svg: s11,
    },
    {
      html: `<h3>5.12 Transformaciones en el diseño: frisos y mosaicos</h3><p>Un <b>friso</b> es una decoración que repite un motivo a lo largo de una franja. Se genera con una traslación en una dirección y, opcionalmente, con giros de 180°, simetrías y simetrías con deslizamiento. Matemáticamente solo existen <b>7 tipos de frisos</b> distintos.</p><p>Un <b>mosaico</b> (o teselado periódico) cubre todo el plano repitiendo un motivo con traslaciones en dos direcciones, combinadas con giros y simetrías. Hay exactamente <b>17 grupos</b> de simetría del plano, y en la Alhambra de Granada se han identificado muchos de ellos.</p><p>Para diseñar un mosaico propio al estilo de Escher se parte de un polígono que tesela (cuadrado, triángulo o hexágono) y se modifica un lado; la misma modificación se aplica al lado opuesto con una traslación, o al lado contiguo con un giro. Así se obtienen piezas con formas orgánicas que siguen encajando.</p><p>En el diseño industrial y en CAD, las transformaciones son órdenes básicas: mover, copiar, rotar, simetría, escala y matrices rectangulares o polares. Saber qué transformación conserva qué propiedad permite, por ejemplo, dibujar solo un cuarto de una pieza simétrica y completar el resto, o generar los dientes de un engranaje con un único diente y un giro repetido. También en la tipografía, la arquitectura y la moda se juega constantemente con traslaciones, giros y simetrías.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Halla el centro y el ángulo del giro que lleva A(0, 0) a A′(4, 0) y B(0, 2) a B′(4, −2) (medidas en cm).", pasos: ["El centro equidista de A y A′: está en la mediatriz de AA′ (x = 2).", "También equidista de B y B′: mediatriz de BB′, que pasa por (2, 0) y es perpendicular a (4, −4): recta y = x − 2.", "Se cortan en (2, 0).", "Ángulo: de OA = (−2, 0) a OA′ = (2, 0): 180°."], resultado: "Centro O(2, 0); es un giro de 180° (simetría central)." },
    { enunciado: "Dos espejos forman 45°. ¿Qué movimiento produce reflejarse en uno y después en el otro?", pasos: ["Dos simetrías de ejes que se cortan equivalen a un giro.", "El centro es el punto de corte y el ángulo es el doble del que forman los ejes."], resultado: "Un giro de 90° alrededor de la arista común." },
    { enunciado: "Aplica una homotecia de centro O y razón −1/2 a un segmento AB de 6 cm. ¿Cómo es el resultado?", pasos: ["Al ser k < 0, A′B′ está al otro lado de O.", "Su longitud es |k| · AB = 3 cm.", "A′B′ es paralelo a AB pero de sentido contrario."], resultado: "Segmento de 3 cm, paralelo e invertido." },
    { enunciado: "En un plano a escala 1:200, una habitación mide 22 × 17,5 mm. ¿Cuáles son sus medidas reales y su área?", pasos: ["Real = dibujo · 200.", "22 · 200 = 4400 mm = 4,4 m; 17,5 · 200 = 3500 mm = 3,5 m.", "Área = 4,4 · 3,5."], resultado: "4,4 × 3,5 m; 15,4 m²." },
    { enunciado: "Transforma el pentágono ABCDE en un triángulo equivalente.", pasos: ["Se elimina el vértice B: se traza la diagonal AC y, por B, la paralela a AC hasta cortar la prolongación de DC en B₁. El triángulo ABC se sustituye por AB₁C, de igual base y altura.", "Queda el cuadrilátero AB₁DE.", "Se elimina el vértice E: diagonal AD y paralela por E hasta cortar la prolongación de B₁D en E₁.", "El triángulo AB₁E₁ tiene la misma área que el pentágono."], resultado: "Un triángulo equivalente, obtenido con dos paralelas." },
    { enunciado: "Una maqueta de un edificio está a escala 1:100 y tiene 2,4 dm² de fachada y 3,1 dm³ de volumen. Calcula los valores reales.", pasos: ["Razón lineal k = 100.", "Área real = 2,4 · 100² dm² = 24000 dm² = 240 m².", "Volumen real = 3,1 · 100³ dm³ = 3 100 000 dm³ = 3100 m³."], resultado: "240 m² de fachada y 3100 m³ de volumen." },
  ],
  errores: [
    "Pensar que la simetría axial conserva el sentido: lo invierte, mientras que la central (giro de 180°) lo conserva.",
    "Medir el ángulo de giro en sentido horario cuando se pide positivo: el sentido positivo es el antihorario.",
    "Confundir homotecia y semejanza: la homotecia exige lados paralelos y un centro; la semejanza solo pide misma forma.",
    "Multiplicar las áreas por k en lugar de por k²: una figura a doble tamaño tiene cuatro veces más área.",
    "Escribir la escala al revés: 1:50 significa que 1 mm del dibujo son 50 mm reales.",
    "En la afinidad, unir puntos homólogos con rectas que no son paralelas a la dirección dada.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica: homotecia, giro, afinidad, simetría central, semejanza, homología.", sol: "Isométricas: giro y simetría central. Isomórficas: homotecia y semejanza. Anamórficas: afinidad y homología." },
    { nivel: "básico", q: "Traslada un cuadrado de 3 cm de lado según un vector de 5 cm a 30°.", sol: "Se trazan por los vértices paralelas a 30° (con el cartabón) y se llevan 5 cm en el sentido del vector; los lados del cuadrado trasladado son paralelos a los originales." },
    { nivel: "básico", q: "Gira un segmento AB de 4 cm 60° alrededor de su extremo A.", sol: "A es doble. Con centro A y radio 4 cm se traza un arco desde B; el radio de 60° (triángulo equilátero) da B′. AB′ = 4 cm y forma 60° con AB." },
    { nivel: "básico", q: "Dibuja el simétrico de un triángulo respecto de un eje que pasa por uno de sus vértices.", sol: "El vértice del eje es doble. Por los otros dos se trazan perpendiculares al eje y se llevan las mismas distancias al otro lado." },
    { nivel: "básico", q: "¿Qué movimientos son directos y cuáles inversos?", sol: "Directos (conservan el sentido): traslación y giro (incluida la simetría central). Inverso: simetría axial." },
    { nivel: "básico", q: "Una figura se transforma con una homotecia de razón 3. ¿Cómo cambian sus lados, sus ángulos y su área?", sol: "Los lados se multiplican por 3, los ángulos no cambian y el área se multiplica por 9." },
    { nivel: "básico", q: "Un tornillo de 8 mm se dibuja a escala 5:1. ¿Cuánto mide en el dibujo?", sol: "8 · 5 = 40 mm." },
    { nivel: "básico", q: "Una calle de 120 m se dibuja con 24 mm. ¿A qué escala?", sol: "24/120000 = 1/5000 → E 1:5000." },
    { nivel: "básico", q: "¿Cuántos ejes de simetría tiene un hexágono regular? ¿Y un rectángulo?", sol: "Hexágono: 6 (3 por vértices opuestos y 3 por puntos medios de lados opuestos). Rectángulo: 2." },
    { nivel: "básico", q: "¿Qué tienen en común la afinidad y la homología?", sol: "Ambas tienen un eje de puntos dobles y en ambas las rectas homólogas se cortan sobre el eje. En la afinidad los puntos homólogos están en rectas paralelas; en la homología, en rectas que pasan por el centro." },
    { nivel: "medio", q: "Halla el centro y el ángulo de giro que lleva el segmento AB a A′B′ (de igual longitud).", sol: "El centro O es el corte de las mediatrices de AA′ y BB′. El ángulo es AOA′ (igual a BOB′). Si las mediatrices son paralelas, no hay giro: es una traslación." },
    { nivel: "medio", q: "Compón dos simetrías de ejes paralelos separados 2,5 cm. ¿Qué se obtiene?", sol: "Una traslación perpendicular a los ejes, de módulo 5 cm, en el sentido del primer eje al segundo." },
    { nivel: "medio", q: "Construye una figura homotética de un pentágono con centro en uno de sus vértices y razón 3/2.", sol: "Desde el vértice-centro se trazan las diagonales y los lados que parten de él; sobre un lado se lleva 1,5 veces su longitud (con Tales o midiendo), y por el punto obtenido se trazan paralelas a los lados sucesivos, cortando las diagonales." },
    { nivel: "medio", q: "Halla el centro de homotecia de dos triángulos de lados paralelos.", sol: "Se unen dos pares de vértices homólogos (AA′ y BB′); las rectas se cortan en O. La razón es OA′/OA, con signo negativo si A y A′ están a distinto lado de O." },
    { nivel: "medio", q: "Construye una escala gráfica 1:20 en metros, con contraescala en decímetros.", sol: "A 1:20, 1 m = 50 mm. Se llevan varios segmentos de 50 mm a la derecha del 0 y uno a la izquierda, que se divide en 10 partes (5 mm cada una) con Tales. Se rotulan 0, 1, 2… y la contraescala de 0 a 10 dm." },
    { nivel: "medio", q: "Un mapa a 1:25 000 muestra dos pueblos a 7,2 cm. ¿Qué distancia real hay? ¿Y a qué escala habría que dibujarlos para que estén a 18 cm?", sol: "7,2 · 25000 = 180000 cm = 1,8 km. Para 18 cm: 18/180000 = 1/10000 → E 1:10 000." },
    { nivel: "medio", q: "Transforma un trapecio en un triángulo equivalente.", sol: "Diagonal BD; paralela a BD por C hasta cortar la prolongación de AB en E. El triángulo AED es equivalente al trapecio ABCD. Comprobación: el área del trapecio es (B + b) · h/2 y la del triángulo (B + b) · h/2, pues AE = B + b." },
    { nivel: "medio", q: "Dibuja un cuadrado equivalente a un rectángulo de 9 × 4 cm.", sol: "Lado = media proporcional √36 = 6 cm. Se construye con la semicircunferencia de diámetro 13 cm y la perpendicular en el punto que separa 9 y 4 cm." },
    { nivel: "medio", q: "Dibuja la figura afín de un cuadrado con eje en la prolongación de un lado, afinidad ortogonal y razón 1/2.", sol: "El lado sobre el eje es doble. Los otros dos vértices se acercan al eje en perpendicular, a la mitad de su distancia. Se obtiene un rectángulo de base l y altura l/2." },
    { nivel: "medio", q: "¿Por qué las sombras de una ventana al sol son figuras afines a la ventana?", sol: "Los rayos de sol son prácticamente paralelos (dirección de afinidad), y la recta de corte del plano de la ventana con el suelo es el eje: cada recta y su sombra se cortan en él." },
    { nivel: "medio", q: "¿Cuántas veces más pintura necesita una estatua que es copia de otra a escala 3:1? ¿Y cuánto más pesa?", sol: "La superficie es 3² = 9 veces mayor (9 veces más pintura) y el volumen, y por tanto el peso, 3³ = 27 veces mayor." },
    { nivel: "medio", q: "Dibuja la simétrica de una circunferencia respecto de una recta tangente a ella.", sol: "Basta hallar el simétrico del centro (perpendicular a la recta y misma distancia al otro lado) y trazar una circunferencia del mismo radio. Ambas son tangentes en el mismo punto." },
    { nivel: "avanzado", q: "Demuestra que la composición de dos simetrías de ejes que forman 30° es un giro de 60°.", sol: "Sea O el corte de los ejes. Ambas simetrías conservan O, luego la composición deja O fijo y conserva distancias y sentido (dos inversiones dan un directo): es un giro de centro O. Para un punto P del primer eje, la primera simetría lo deja fijo y la segunda lo lleva al otro lado del segundo eje: el ángulo POP′ es 2 · 30° = 60°." },
    { nivel: "avanzado", q: "Halla los dos centros de homotecia de dos circunferencias de radios 30 y 15 mm cuyos centros distan 90 mm, y explica para qué sirven.", sol: "Directo: en la recta de centros, exterior, con OC₂/OC₁ = 15/30 → está a 90 mm de C₂ y 180 mm de C₁. Inverso: entre ambos, dividiendo C₁C₂ en razón 30:15 → a 60 mm de C₁. Las tangentes exteriores pasan por el centro directo y las interiores por el inverso." },
    { nivel: "avanzado", q: "Construye la figura homóloga de un cuadrado ABCD dados el centro O, el eje e y el homólogo A′ de A.", sol: "Para B: se prolonga AB hasta el eje (X₁), se une X₁ con A′ y se corta con OB → B′. Igual para D con AD. Para C, con B′ ya hallado: BC corta al eje en X₂, X₂B′ corta a OC en C′. El cuadrado se transforma en un cuadrilátero cuyos lados opuestos, en general, ya no son paralelos." },
    { nivel: "avanzado", q: "Un plano está a escala 1:75 (no normalizada). Construye su escala gráfica a partir de una escala 1:1 por el triángulo de escalas.", sol: "1 m real a 1:75 mide 1000/75 ≈ 13,33 mm. Se dibuja un segmento de 100 mm (1:1 para 100 mm reales a otra escala) y, por Tales, se divide un segmento de 133,3 mm en 10 partes iguales: cada una representa 1 m. Se añade la contraescala dividiendo la primera parte en 10." },
    { nivel: "avanzado", q: "Divide un triángulo en tres partes de igual área con rectas que pasen por un vértice. ¿Y con rectas paralelas a la base?", sol: "Por el vértice: se divide el lado opuesto en tres partes iguales y se unen los puntos con el vértice (misma altura y bases iguales). Paralelas a la base: las áreas desde el vértice son 1/3 y 2/3 del total, por lo que las razones de semejanza son √(1/3) y √(2/3); los puntos de corte se construyen con medias proporcionales sobre el lado." },
    { nivel: "avanzado", q: "Explica por qué una circunferencia se transforma en una elipse por afinidad, y halla sus semiejes si la afinidad es ortogonal de razón 0,6 y el radio es 50 mm, con eje por el centro.", sol: "La afinidad ortogonal multiplica las distancias al eje por 0,6 y deja fijas las paralelas al eje: los puntos (x, y) pasan a (x, 0,6y), que es la ecuación de una elipse. Semiejes: 50 mm sobre el eje y 30 mm en perpendicular." },
    { nivel: "avanzado", q: "Diseña una tesela al estilo de Escher a partir de un cuadrado modificando dos lados con traslación.", sol: "Se dibuja un cuadrado, se recorta una forma en el lado izquierdo y se traslada al derecho (vector igual al lado); igual con los lados superior e inferior. La pieza resultante tesela el plano solo con traslaciones. Se comprueba dibujando una retícula 3 × 3 de piezas." },
    { nivel: "avanzado", q: "Halla el eje de simetría que transforma el segmento AB en A′B′ (de igual longitud y sentido inverso).", sol: "Si existe, el eje es la mediatriz de AA′, que debe coincidir con la de BB′. Si no coinciden, no basta una simetría: se trata de una simetría con deslizamiento, cuyo eje pasa por los puntos medios de AA′ y BB′." },
  ],
  quiz: reparte([
    { q: "Las transformaciones que conservan forma y tamaño se llaman…", o: ["isométricas", "isomórficas", "anamórficas", "proyectivas"], a: 0, e: "Movimientos." },
    { q: "La homotecia es una transformación…", o: ["isométrica", "isomórfica", "anamórfica", "inversa siempre"], a: 1, e: "Conserva la forma." },
    { q: "En una traslación los segmentos homólogos son…", o: ["perpendiculares", "paralelos e iguales", "proporcionales", "concurrentes"], a: 1, e: "Vector fijo." },
    { q: "El único punto doble de un giro es…", o: ["ninguno", "el centro", "todos", "los de un eje"], a: 1, e: "OP = OP′." },
    { q: "La simetría central equivale a un giro de…", o: ["90°", "360°", "180°", "45°"], a: 2, e: "Media vuelta." },
    { q: "La simetría axial es un movimiento…", o: ["directo", "inverso", "isomórfico", "proyectivo"], a: 1, e: "Invierte el sentido." },
    { q: "Dos simetrías de ejes paralelos separados d equivalen a…", o: ["un giro de 2d", "una traslación de 2d", "una simetría", "una homotecia"], a: 1, e: "Perpendicular a los ejes." },
    { q: "Dos simetrías de ejes que forman α equivalen a un giro de…", o: ["α", "α/2", "2α", "180° − α"], a: 2, e: "Centro en el corte." },
    { q: "Una homotecia de razón −1 es…", o: ["la identidad", "una simetría axial", "una simetría central", "una traslación"], a: 2, e: "OP′ = −OP." },
    { q: "Si una figura se amplía con razón 4, su área se multiplica por…", o: ["4", "8", "16", "64"], a: 2, e: "k²." },
    { q: "Toda semejanza es la composición de…", o: ["dos giros", "una homotecia y un movimiento", "dos homotecias", "una afinidad y un giro"], a: 1, e: "Se lleva a posición homotética." },
    { q: "La escala 1:50 es de…", o: ["ampliación", "reducción", "natural", "no normalizada"], a: 1, e: "El dibujo es menor." },
    { q: "A escala 2:1, una pieza de 15 mm mide en el dibujo…", o: ["7,5 mm", "30 mm", "17 mm", "15 mm"], a: 1, e: "15 · 2." },
    { q: "La contraescala se divide en partes iguales con…", o: ["la mediatriz", "el teorema de Tales", "el arco capaz", "la bisectriz"], a: 1, e: "Divisiones exactas." },
    { q: "Dos figuras equivalentes tienen igual…", o: ["forma", "perímetro", "área", "ángulos"], a: 2, e: "Equivalencia." },
    { q: "Al mover el vértice de un triángulo por una paralela a la base, el área…", o: ["aumenta", "disminuye", "no cambia", "se duplica"], a: 2, e: "Misma base y altura." },
    { q: "En la afinidad, los puntos homólogos están en rectas…", o: ["paralelas a la dirección", "que pasan por un centro", "perpendiculares al eje siempre", "tangentes"], a: 0, e: "Dirección de afinidad." },
    { q: "En la homología, los puntos homólogos están alineados con…", o: ["el eje", "el centro", "la dirección", "el origen"], a: 1, e: "Centro de homología." },
    { q: "La elipse es afín a…", o: ["su circunferencia principal", "una parábola", "una recta", "un óvalo"], a: 0, e: "Método de afinidad." },
    { q: "La perspectiva cónica se relaciona con…", o: ["la traslación", "la homología", "la simetría", "la escala"], a: 1, e: "Paralelas que convergen." },
  ], 2),
  examen: reparte([
    { q: "Escala de un plano en el que 3 m reales miden 6 cm", o: ["1:20", "1:50", "1:5", "2:1"], a: 1, e: "60 mm : 3000 mm." },
    { q: "Medida real de 42 mm a escala 1:200", o: ["8,4 m", "4,2 m", "84 cm", "0,21 m"], a: 0, e: "42 · 200 = 8400 mm." },
    { q: "Una maqueta 1:20 tiene 3 dm³; el volumen real es", o: ["60 dm³", "1200 dm³", "24 m³", "2,4 m³"], a: 2, e: "3 · 8000 dm³ = 24 000 dm³." },
    { q: "Dos espejos a 60° producen un giro de", o: ["60°", "30°", "120°", "180°"], a: 2, e: "2α." },
    { q: "Homotecia de razón 1/3 aplicada a un área de 27 cm²", o: ["9 cm²", "3 cm²", "1 cm²", "81 cm²"], a: 1, e: "27/9." },
    { q: "Para hallar el centro de giro de A→A′ y B→B′ se usan…", o: ["las bisectrices", "las mediatrices de AA′ y BB′", "las paralelas", "el arco capaz"], a: 1, e: "Equidista." },
    { q: "Lado del cuadrado equivalente a un rectángulo de 2 × 8 cm", o: ["5 cm", "4 cm", "16 cm", "10 cm"], a: 1, e: "√16." },
    { q: "En una homología, si el centro se va al infinito se obtiene", o: ["una homotecia", "una afinidad", "un giro", "una inversión"], a: 1, e: "Rectas paralelas." },
  ], 1),
  feynman: ["Qué diferencia hay entre un movimiento directo y uno inverso", "Por qué dos simetrías seguidas producen una traslación o un giro", "Qué relación hay entre homotecia, semejanza y escala", "Cómo se transforma un polígono en un triángulo de la misma área", "Por qué la afinidad y la homología son la base de los sistemas de representación"],
  glosario: [
    ["Transformación geométrica", "Regla que asocia a cada punto del plano otro punto, su homólogo."],
    ["Punto doble", "Punto que coincide con su homólogo."],
    ["Movimiento", "Transformación que conserva distancias y ángulos."],
    ["Traslación", "Movimiento que desplaza todos los puntos según un mismo vector."],
    ["Giro", "Movimiento alrededor de un centro con un ángulo dado."],
    ["Simetría axial", "Transformación en la que el eje es la mediatriz de cada par de puntos homólogos."],
    ["Simetría central", "Transformación en la que el centro es el punto medio de cada par de homólogos."],
    ["Homotecia", "Transformación de centro O y razón k con OP′ = k · OP."],
    ["Semejanza", "Relación entre figuras con ángulos iguales y lados proporcionales."],
    ["Escala", "Razón entre la medida del dibujo y la medida real."],
    ["Escala gráfica", "Regla dibujada en el plano para medir en unidades reales."],
    ["Contraescala", "Unidad de la escala gráfica dividida en partes para medir fracciones."],
    ["Equivalencia", "Relación entre figuras de igual área."],
    ["Afinidad", "Transformación con eje y dirección: homólogos en paralelas, rectas homólogas cortadas en el eje."],
    ["Homología", "Transformación con centro y eje: homólogos alineados con el centro."],
    ["Friso", "Franja decorativa que repite un motivo por traslación."],
  ],
  situacion: {
    titulo: "Un mosaico para el patio",
    reto: "El instituto quiere pintar en una pared del patio un mosaico al estilo de Escher. Vuestro grupo debe diseñar una tesela a partir de un polígono, documentar las transformaciones que la generan y preparar el plano a escala para que el equipo de pintura lo traslade a la pared de 6 × 3 m.",
    pasos: [
      "Estudiad mosaicos de la Alhambra y de Escher e identificad traslaciones, giros y simetrías.",
      "Diseñad la tesela modificando los lados de un cuadrado o hexágono con traslaciones o giros.",
      "Dibujad una composición de varias teselas indicando los vectores, centros y ejes utilizados.",
      "Elegid una escala normalizada para que la pared quepa en un A3 y dibujad su escala gráfica.",
      "Calculad el número de teselas y el área de cada color para presupuestar la pintura.",
    ],
    producto: "Lámina A3 con el mosaico a escala, la escala gráfica y una ficha de transformaciones y cálculos.",
    evaluacion: [
      "La tesela encaja sin huecos y las transformaciones están bien identificadas.",
      "La escala elegida es normalizada y la escala gráfica es correcta.",
      "Los cálculos de áreas y cantidades son coherentes.",
      "El diseño es original y la presentación es cuidada.",
    ],
  },
  figura: fig("Transformaciones de un vistazo", "Resumen de movimientos, homotecia y semejanza, escalas y transformaciones anamórficas", [
    ["Movimientos", ["traslación: vector", "giro: centro y α", "simetría: eje", "conservan medidas"], "var(--pen)"],
    ["Homotecia", ["OP′ = k · OP", "k < 0: inversa", "lados paralelos", "áreas · k²"], "var(--leaf)"],
    ["Escalas", ["dibujo : realidad", "1:2, 1:5, 1:10…", "2:1, 5:1…", "contraescala: Tales"], "var(--red)"],
    ["Anamórficas", ["eje de puntos dobles", "afinidad: paralelas", "homología: centro", "→ diédrico y cónica"], "var(--inf)"],
  ]),
  video: { id: "0jTpaebmGIc", titulo: "Cómo hacer una homotecia en dibujo técnico: directa, inversa, negativa", canal: "Dibujo Técnico paso a paso", vistas: 68486, busqueda: "homotecia dibujo técnico" },
  mapa: mapa("TRANSFORMACIONES", "var(--bac)", [
    ["Movimientos", "traslación · giro · simetrías", "var(--pen)"],
    ["Homotecia y semejanza", "centro · razón k · k²", "var(--leaf)"],
    ["Escalas y equivalencia", "UNE-EN ISO 5455 · igual área", "var(--red)"],
    ["Afinidad y homología", "eje · dirección · centro", "var(--inf)"],
  ], 260),
  tarjetas: [
    ["Isométricas", "Traslación, giro, simetrías (conservan medidas)."],
    ["Isomórficas", "Homotecia y semejanza (conservan la forma)."],
    ["Traslación", "PP′ = v; homólogos paralelos e iguales."],
    ["Giro", "OP = OP′; ángulo POP′ = α (antihorario +)."],
    ["Simetría axial", "Eje = mediatriz de PP′; invierte el sentido."],
    ["Dos simetrías", "Ejes ∥: traslación 2d; ejes secantes: giro 2α."],
    ["Homotecia", "OP′ = k · OP; áreas por k²."],
    ["Semejanza", "Homotecia + movimiento."],
    ["Escala", "E = dibujo : realidad"],
    ["Equivalencia", "Paralela a la diagonal por un vértice."],
    ["Afinidad", "Homólogos en paralelas; rectas homólogas se cortan en el eje."],
    ["Homología", "Homólogos alineados con el centro; rectas en el eje."],
  ],
  familias: ["Buscad en casa objetos con simetría axial, con simetría de giro y con motivos trasladados (cenefas, telas, azulejos).", "Mirad un mapa y calculad con su escala la distancia real entre dos lugares conocidos.", "Jugad con dos espejos formando distintos ángulos y contad cuántas imágenes aparecen.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: transformaciones geométricas en el plano (traslación, giro, simetrías, homotecia, semejanza), equivalencia, escalas normalizadas y escala gráfica; introducción a la afinidad y la homología como relación con los sistemas de representación; aplicaciones al diseño (RD 243/2022, Dibujo Técnico I, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic I).",
    ideas: ["Diseño de teselas de Escher con papel y tijeras antes de pasarlas a CAD.", "Salida o visita virtual a la Alhambra para identificar grupos de simetría.", "Medir objetos del aula y dibujarlos a distintas escalas normalizadas.", "Sombras al sol (afinidad) y con una linterna (homología)."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Transformación geométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Transformaci%C3%B3n_geom%C3%A9trica" },
    { t: "Homotecia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Homotecia" },
  ],
  revisado: "2026-11-14",
};
