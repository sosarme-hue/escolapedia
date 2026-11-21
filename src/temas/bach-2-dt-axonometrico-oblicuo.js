// Dibujo Técnico II 2º Bachillerato · Tema 11. Nivel libro. Perspectivas caballera y militar calculadas en 3D.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, mid, dist, unit, add, sub, mul, tx, dash, v3, envolvente, polVista, vistaCaba, vistaMilitar, vistaAxo, POL, P2 } = G;

const L = (P, s, dx, dy, c = "var(--ink)", a = "start", sz = 11) => tx(P[0] + dx, P[1] + dy, s, { s: sz, b: 1, a, c });
const curva = (pts, c = "var(--red)", w = 2.2, cerrada = false, fill = 0, extra = "") => `<path d="M${pts.map(P2).join(" L ")}${cerrada ? " Z" : ""}" fill="${fill ? c : "none"}" fill-opacity="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;
const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));
const caja = (x0, y0, z0, a, b, c) => envolvente([0, 1].flatMap((i) => [0, 1].flatMap((j) => [0, 1].map((k) => [x0 + i * a, y0 + j * b, z0 + k * c]))));
// Dibujo de varios sólidos convexos con oclusión por el algoritmo del pintor (del más lejano al más cercano).
const pintor = (pols, V, cols) => pols.map((p, i) => ({ p, i, d: v3.dot(p.V.reduce((s, q) => v3.add(s, q), [0, 0, 0]).map((v) => v / p.V.length), V.w) })).sort((a, b) => a.d - b.d).map(({ p, i }) => { const vis = p.caras.filter((f) => v3.dot(f.n, V.w) > 1e-6); return vis.map((f) => `<path d="M${f.idx.map((k) => P2(V.P(p.V[k]))).join(" L ")} Z" fill="var(--card)" stroke="none"/>`).join("") + polVista(p, V.P, V.w, cols[i % cols.length], 0.14, 1.8).replace(/stroke-dasharray="4 3"/g, 'stroke-opacity="0"'); }).join("");
// Centra un conjunto de puntos 3D en (cx, cy): mk(O) devuelve la vista con origen O.
const centra = (mk, pts, cx, cy) => { const Q = pts.map(mk([0, 0]).P), xs = Q.map((q) => q[0]), ys = Q.map((q) => q[1]); return mk([cx - (Math.min(...xs) + Math.max(...xs)) / 2, cy - (Math.min(...ys) + Math.max(...ys)) / 2]); };
const circ3 = (V, C, r, plano, n = 72) => rango(n, (i) => { const t = (2 * Math.PI * i) / n, a = r * Math.cos(t), b = r * Math.sin(t); return V.P(plano === "xy" ? [C[0] + a, C[1] + b, C[2]] : plano === "yz" ? [C[0], C[1] + a, C[2] + b] : [C[0] + a, C[1], C[2] + b]); });
const pieza = (() => { const A = 60, B = 40, C = 34, ch = 18; return envolvente([[0, 0, 0], [B, 0, 0], [B, A, 0], [0, A, 0], [0, 0, C], [0, A - ch, C], [B, A - ch, C], [B, 0, C], [0, A, C - ch], [B, A, C - ch]]); })();

// 11.1 Fundamento: ejes de la caballera.
const s1 = (() => {
  const O = [110, 110], V = vistaCaba(O, 0.5, 225, 1), X = V.P([120, 0, 0]), Y = V.P([0, 110, 0]), Z = V.P([0, 0, 90]);
  return dib("Perspectiva caballera: el plano del cuadro es paralelo al plano coordenado frontal YOZ; los ejes y y z se ven en verdadera magnitud formando 90° y el eje x, de fugas, forma un ángulo φ con la horizontal y se reduce con un coeficiente c", `${seg(O, X, "var(--red)", 2.4)}${seg(O, Y, "var(--pen)", 2.4)}${seg(O, Z, "var(--pen)", 2.4)}${seg(O, [O[0] - 60, O[1]], "var(--muted)", 1, dash)}${G.arco(O, 26, 180, 225, "var(--red)", 1.4)}${G.recto(O, Y, Z, 8)}${pt(O, "O", 6, 14)}${L(X, "x", -10, 4, "var(--red)")}${L(Y, "y", 4, 14, "var(--pen)")}${L(Z, "z", 6, 4, "var(--pen)")}${L(O, "φ", -40, 16, "var(--red)")}` + tx(250, 154, "y, z en VM · x con coeficiente c", { s: 10, b: 1, a: "end", c: "var(--ink)" }) + tx(250, 172, "plano del cuadro ∥ YOZ", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }));
})();

// 11.2 Influencia del ángulo φ.
const s2 = (() => {
  const a = 46, cubo = (cx, ang) => { const V = centra((O) => vistaCaba(O, 0.5, ang, 1), caja(0, 0, 0, a, a, a).V, cx, 84); return polVista(caja(0, 0, 0, a, a, a), V.P, V.w, "var(--pen)", 0.12, 2); };
  return dib("El ángulo φ del eje de fugas decide qué caras se ven: con φ = 225° se ven la cara superior y la lateral derecha; con φ = 135°, la inferior; con φ = 315°, la lateral izquierda", `${cubo(46, 225)}${cubo(130, 135)}${cubo(214, 315)}${tx(46, 160, "φ = 225°", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(130, 160, "φ = 135°", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(214, 160, "φ = 315°", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}`);
})();

// 11.3 Escala reducida por Tales.
const s3 = (() => {
  const O = [24, 140], A = [214, 140], B = [190, 60], n = 6, c = 2 / 3, Ar = add(O, mul(sub(A, O), c));
  return dib("Escala reducida para el eje de fugas con el teorema de Tales: se divide una recta auxiliar en partes iguales y se proyectan paralelamente para obtener el coeficiente c = 2/3", `${seg(O, A, "var(--leaf)", 2.2)}${seg(O, B, "var(--muted)", 1.4)}${rango(n + 1, (i) => { const P = add(O, mul(sub(B, O), i / n)); return pt(P, "", 0, 0, "var(--muted)"); }).join("")}${seg(add(O, mul(sub(B, O), 4 / n)), Ar, "var(--red)", 1.2, dash)}${seg(B, A, "var(--muted)", 1.2, dash)}${pt(Ar, "", 0, 0, "var(--red)")}${seg(O, Ar, "var(--red)", 3)}${L(A, "real", -4, 16, "var(--leaf)", "end")}${L(Ar, "× 2/3", 0, 16, "var(--red)", "middle")}` + tx(10, 22, "coeficientes habituales: 1/2, 2/3, 3/4", { s: 10.5, b: 1, a: "start", c: "var(--ink)" }));
})();

// 11.4 Circunferencias en las caras de un cubo en caballera.
const s4 = (() => {
  const a = 76, cu = caja(0, 0, 0, a, a, a), V = centra((O) => vistaCaba(O, 0.5, 225, 1), cu.V, 130, 96), r = a / 2 - 5;
  return dib("Circunferencias en las caras de un cubo en caballera: en la cara frontal (paralela al cuadro) se ve en verdadera magnitud; en la superior y la lateral se ve como elipse", `${polVista(cu, V.P, V.w, "var(--pen)", 0.06, 2)}${curva(circ3(V, [a, a / 2, a / 2], r, "yz"), "var(--red)", 2.4, true, 0.12)}${curva(circ3(V, [a / 2, a / 2, a], r, "xy"), "var(--leaf)", 2.2, true, 0.12)}${curva(circ3(V, [a / 2, a, a / 2], r, "xz"), "var(--inf)", 2.2, true, 0.12)}` + tx(10, 22, "frontal: circunferencia en VM", { s: 10.5, b: 1, a: "start", c: "var(--red)" }) + tx(250, 172, "superior y lateral: elipses", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 11.5 Circunferencia en un plano horizontal: método de los ocho puntos.
const s5 = (() => {
  const r = 50, V = centra((O) => vistaCaba(O, 0.6, 225, 1), [[0, 0, 0], [2 * r, 2 * r, 0], [2 * r, 0, 0], [0, 2 * r, 0]], 124, 96), C = [r, r, 0], sq = [[0, 0, 0], [2 * r, 0, 0], [2 * r, 2 * r, 0], [0, 2 * r, 0]].map(V.P);
  const k = r / Math.SQRT2, ocho = [0, 45, 90, 135, 180, 225, 270, 315].map((g) => V.P([C[0] + r * Math.cos(G.rad(g)), C[1] + r * Math.sin(G.rad(g)), 0]));
  return dib("Circunferencia en un plano horizontal en caballera por el método de los ocho puntos: se dibuja el cuadrado circunscrito deformado, sus medianas dan cuatro puntos de tangencia y sus diagonales, cortadas a r·√2/2 del centro, los otros cuatro", `${poli(sq, "var(--pen)", 1.6, "var(--pen)", 0.06)}${seg(sq[0], sq[2], "var(--muted)", 1, dash)}${seg(sq[1], sq[3], "var(--muted)", 1, dash)}${seg(V.P([r, 0, 0]), V.P([r, 2 * r, 0]), "var(--muted)", 1, dash)}${seg(V.P([0, r, 0]), V.P([2 * r, r, 0]), "var(--muted)", 1, dash)}${curva(circ3(V, C, r, "xy"), "var(--red)", 2.4, true, 0.1)}${ocho.map((P, i) => pt(P, "", 0, 0, i % 2 ? "var(--leaf)" : "var(--red)")).join("")}` + tx(250, 22, "4 tangencias + 4 en diagonales", { s: 10.5, b: 1, a: "end", c: "var(--ink)" }) + tx(250, 172, "distancia en diagonal: r·√2/2", { s: 10, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 11.6 Pieza a partir de sus vistas en caballera.
const s6 = (() => {
  const yt = 70, al = (p) => [16 + p[1], yt - p[2]], pl = (p) => [16 + p[1], yt + 12 + p[0]], V = vistaCaba([150, 130], 0.5, 225, 1.25);
  return dib("Perspectiva caballera de una pieza dada por su alzado y su planta: se coloca la cara más compleja paralela al cuadro, donde se ve en verdadera magnitud, y las profundidades se llevan reducidas sobre el eje de fugas", `${seg([8, yt], [94, yt], "var(--ink)", 1.2)}${polVista(pieza, al, [1, 0, 0], "var(--pen)", 0.08, 1.8)}${polVista(pieza, pl, [0, 0, 1], "var(--pen)", 0.08, 1.8)}${polVista(pieza, V.P, V.w, "var(--red)", 0.12, 2.2)}${tx(46, 22, "alzado", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}${tx(46, 152, "planta", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}` + tx(196, 172, "caballera, c = 1/2", { s: 10.5, b: 1, a: "middle", c: "var(--red)" }));
})();

// 11.7 Cilindros en caballera.
const s7 = (() => {
  const V = vistaCaba([0, 0], 0.5, 225, 1), r = 24, H = 70, n = 72;
  const cilX = (O) => { const P = (p) => add(O, V.P(p)), a = rango(n, (i) => P([0, r * Math.cos((2 * Math.PI * i) / n), r * Math.sin((2 * Math.PI * i) / n)])), b = a.map((q) => add(q, sub(P([H, 0, 0]), P([0, 0, 0])))), u = unit(P([0, 0, 0]), P([H, 0, 0])), nn = [-u[1], u[0]], d = a.map((q) => q[0] * nn[0] + q[1] * nn[1]), i1 = d.indexOf(Math.max(...d)), i2 = d.indexOf(Math.min(...d)); return `${curva(a, "var(--pen)", 1.1, true, 0, 'stroke-dasharray="4 3"')}${seg(a[i1], b[i1], "var(--pen)", 2.2)}${seg(a[i2], b[i2], "var(--pen)", 2.2)}${curva(b, "var(--pen)", 2.2, true, 0.14)}`; };
  const cilZ = (O) => { const P = (p) => add(O, V.P(p)), a = rango(n, (i) => P([r * Math.cos((2 * Math.PI * i) / n), r * Math.sin((2 * Math.PI * i) / n), 0])), b = a.map((q) => [q[0], q[1] - H]), xs = a.map((q) => q[0]), i1 = xs.indexOf(Math.min(...xs)), i2 = xs.indexOf(Math.max(...xs)); return `${curva(a, "var(--leaf)", 2.2, true, 0)}${seg(a[i1], b[i1], "var(--leaf)", 2.2)}${seg(a[i2], b[i2], "var(--leaf)", 2.2)}${curva(b, "var(--leaf)", 2.2, true, 0.14)}`; };
  return dib("Cilindros en caballera: con el eje perpendicular al cuadro (eje de fugas) las bases son circunferencias en verdadera magnitud y es la posición más cómoda; con el eje vertical, las bases son elipses", `${cilX([80, 70])}${cilZ([180, 140])}` + tx(70, 172, "eje x: bases circulares", { s: 10.5, b: 1, a: "middle", c: "var(--pen)" }) + tx(196, 22, "eje z: bases elípticas", { s: 10.5, b: 1, a: "middle", c: "var(--leaf)" }));
})();

// 11.8 Perspectiva militar: ejes.
const s8 = (() => {
  const O = [130, 104], V = vistaMilitar(O, 30, 1, 1), X = V.P([90, 0, 0]), Y = V.P([0, 70, 0]), Z = V.P([0, 0, 64]);
  return dib("Perspectiva militar: el cuadro es paralelo al plano horizontal XOY, que se ve en verdadera magnitud con los ejes x e y formando 90° (normalmente a 30° y 60°, o a 45°); el eje z es vertical y puede reducirse", `${seg(O, X, "var(--red)", 2.4)}${seg(O, Y, "var(--red)", 2.4)}${seg(O, Z, "var(--pen)", 2.4)}${G.recto(O, X, Y, 9)}${seg(O, [O[0] + 90, O[1]], "var(--muted)", 1, dash)}${G.arco(O, 30, -30, 0, "var(--red)", 1.4)}${pt(O, "O", -14, -4)}${L(X, "x", 4, 4, "var(--red)")}${L(Y, "y", -10, 4, "var(--red)")}${L(Z, "z", 6, 4, "var(--pen)")}${L(O, "30°", 34, 10, "var(--red)", "start", 10)}` + tx(10, 22, "planta en verdadera magnitud", { s: 10.5, b: 1, a: "start", c: "var(--red)" }) + tx(250, 172, "alturas con coeficiente c", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }));
})();

// 11.9 Conjunto urbano en militar.
const s9 = (() => {
  const bloques = [caja(0, 0, 0, 40, 30, 60), caja(56, 0, 0, 50, 30, 30), caja(0, 46, 0, 30, 40, 40), caja(52, 50, 0, 54, 36, 24)], V = centra((O) => vistaMilitar(O, 30, 0.8, 0.85), bloques.flatMap((b) => b.V), 124, 86);
  return dib("Perspectiva militar de un conjunto de edificios: se dibuja la planta girada en verdadera magnitud y se levantan las alturas en vertical; es la perspectiva habitual en urbanismo y paisajismo", `${pintor(bloques, V, ["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)"])}` + tx(250, 172, "militar 30°/60°, c = 0,8", { s: 10.5, b: 1, a: "end", c: "var(--ink)" }));
})();

// 11.10 Circunferencias en militar.
const s10 = (() => {
  const V = centra((O) => vistaMilitar(O, 45, 1, 0.9), [[4, 4, 0], [64, 64, 0], [4, 4, 60], [64, 64, 60], [60, -40, 0], [100, -40, 40], [100, 0, 0], [60, 0, 40]], 130, 100), r = 30, H = 60, C = [r + 4, r + 4], n = 72, a = rango(n, (i) => V.P([C[0] + r * Math.cos((2 * Math.PI * i) / n), C[1] + r * Math.sin((2 * Math.PI * i) / n), 0])), b = a.map((q) => [q[0], q[1] - H]), xs = a.map((q) => q[0]), i1 = xs.indexOf(Math.min(...xs)), i2 = xs.indexOf(Math.max(...xs));
  const Cs = V.P([C[0], C[1], 0]), delante = a.map((q, i) => (q[1] >= Cs[1] && a[(i + 1) % n][1] >= Cs[1] ? seg(q, a[(i + 1) % n], "var(--pen)", 2.2) : "")).join(""), cu = caja(60, -40, 0, 40, 40, 40), fr = rango(n, (i) => V.P([100, -20 + 16 * Math.cos((2 * Math.PI * i) / n), 20 + 16 * Math.sin((2 * Math.PI * i) / n)]));
  return dib("Circunferencias en militar: las horizontales se ven en verdadera magnitud (un cilindro vertical tiene bases circulares) y las verticales se deforman en elipses", `${curva(a, "var(--pen)", 1.1, true, 0, 'stroke-dasharray="4 3"')}${delante}${seg(a[i1], b[i1], "var(--pen)", 2.2)}${seg(a[i2], b[i2], "var(--pen)", 2.2)}${curva(b, "var(--pen)", 2.2, true, 0.14)}${polVista(cu, V.P, V.w, "var(--leaf)", 0.08, 2)}${curva(fr, "var(--red)", 2.2, true, 0.14)}` + tx(10, 22, "horizontal: circunferencia", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }) + tx(250, 22, "vertical: elipse", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 11.11 La misma pieza en isométrica, caballera y militar.
const s11 = (() => {
  const I = centra((O) => vistaAxo(O, 0.85, 225, 35.264), pieza.V, 46, 92), C = centra((O) => vistaCaba(O, 0.5, 225, 0.85), pieza.V, 130, 92), M = centra((O) => vistaMilitar(O, 30, 1, 0.8), pieza.V, 214, 92);
  return dib("La misma pieza en isométrica, caballera y militar: la caballera deja una cara en verdadera magnitud, la militar la planta y la isométrica reparte la deformación entre las tres caras", `${polVista(pieza, I.P, I.w, "var(--leaf)", 0.12, 2)}${polVista(pieza, C.P, C.w, "var(--red)", 0.12, 2)}${polVista(pieza, M.P, M.w, "var(--pen)", 0.12, 2)}${tx(46, 168, "isométrica", { s: 10.5, b: 1, a: "middle", c: "var(--leaf)" })}${tx(130, 168, "caballera", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(214, 168, "militar", { s: 10.5, b: 1, a: "middle", c: "var(--pen)" })}`);
})();

// 11.12 Efecto del coeficiente de reducción.
const s12 = (() => {
  const d = (cx, c, col) => { const V = centra((O) => vistaCaba(O, c, 225, 0.85), caja(0, 0, 0, 50, 50, 50).V, cx, 86); return polVista(caja(0, 0, 0, 50, 50, 50), V.P, V.w, col, 0.12, 2); };
  return dib("Efecto del coeficiente de reducción en caballera: el mismo cubo con c = 1 parece alargado; con c = 1/2 o 2/3 se percibe como un cubo", `${d(46, 1, "var(--red)")}${d(130, 2 / 3, "var(--leaf)")}${d(214, 0.5, "var(--pen)")}${tx(46, 160, "c = 1", { s: 10.5, b: 1, a: "middle", c: "var(--red)" })}${tx(130, 160, "c = 2/3", { s: 10.5, b: 1, a: "middle", c: "var(--leaf)" })}${tx(214, 160, "c = 1/2", { s: 10.5, b: 1, a: "middle", c: "var(--pen)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema axonométrico oblicuo: caballera y militar",
  minutos: 100,
  objetivos: [
    "Comprender el fundamento de las axonometrías oblicuas",
    "Elegir el ángulo y el coeficiente de reducción en la perspectiva caballera",
    "Dibujar circunferencias en caballera y en militar",
    "Representar piezas en caballera a partir de sus vistas",
    "Usar la perspectiva militar en planos de urbanismo y arquitectura",
    "Comparar las perspectivas isométrica, caballera y militar",
  ],
  claves: ["proyección cilíndrica oblicua", "perspectiva caballera", "perspectiva militar", "plano del cuadro", "eje de fugas", "ángulo φ", "coeficiente de reducción", "escala reducida", "óvalo", "método de los ocho puntos"],
  lectura: {
    titulo: "La perspectiva de los ingenieros militares",
    html: `<p>El nombre de la perspectiva <b>caballera</b> viene de las «caballeras» de las fortificaciones, plataformas elevadas desde las que se dominaba el terreno. La <b>militar</b> tiene un origen parecido: los ingenieros militares de los siglos XVII y XVIII necesitaban representar fortalezas con su planta exacta y sus alturas, para que los mandos pudieran leer distancias directamente en el plano.</p>
    <p>Las dos son <b>axonometrías oblicuas</b>: los rayos de proyección son paralelos pero no perpendiculares al cuadro. A cambio de esa «trampa», una cara del objeto se ve sin ninguna deformación. En la caballera es la cara frontal; en la militar, la planta.</p>
    <p>Por eso la caballera es ideal para piezas con una cara complicada (engranajes, bridas, molduras), y la militar se usa en arquitectura, urbanismo y paisajismo, porque permite dibujar el plano de una ciudad y levantar los edificios sin rehacer la planta.</p>`,
  },
  pregunta: {
    texto: "Si dibujas un cubo en caballera con las tres aristas en verdadera magnitud (c = 1), ¿parecerá un cubo?",
    respuesta: "No: parecerá un prisma <mark>alargado</mark> en profundidad. Las proyecciones oblicuas alargan las aristas perpendiculares al cuadro; por eso se reducen con un coeficiente de 1/2 a 3/4 para que la imagen resulte natural.",
  },
  bloques: [
    {
      html: `<h3>11.1 Fundamento de las axonometrías oblicuas</h3><p>En las axonometrías oblicuas se proyecta con rayos <b>paralelos y oblicuos</b> al plano del cuadro, que se coloca <b>paralelo a uno de los planos coordenados</b>:</p><ul><li>En la <b>perspectiva caballera</b>, el cuadro es paralelo al plano frontal YOZ. Los ejes y y z se proyectan en verdadera magnitud y perpendiculares entre sí; todas las figuras paralelas a ese plano se ven sin deformación.</li><li>En la <b>perspectiva militar</b> (o planimétrica), el cuadro es paralelo al plano horizontal XOY. La planta se ve en verdadera magnitud y el eje z, vertical.</li></ul><p>El tercer eje, el perpendicular al cuadro, se proyecta según una dirección y una reducción que dependen de la dirección de los rayos, y que se pueden <b>elegir libremente</b>. Esa libertad es la gran ventaja de estos sistemas, y también el origen de su principal defecto: imágenes deformadas si se eligen mal.</p><p>Como toda proyección cilíndrica, se conservan el paralelismo y las razones entre segmentos paralelos.</p>`,
      svg: s1,
      video: { id: "C3G8tLvVc28", titulo: "Proyección cilíndrica oblicua: caballera y militar", canal: "Silvia Bruzzone", vistas: 194658, busqueda: "proyección cilíndrica oblicua caballera militar" },
    },
    {
      html: `<h3>11.2 Elementos de la perspectiva caballera</h3><p>La caballera queda definida por dos parámetros:</p><ul><li>El <b>ángulo φ</b> que forma el eje de fugas (x) con la horizontal. Los valores habituales son 135° o 225° (es decir, 45° hacia arriba o hacia abajo a la izquierda), y también 30° o 60°.</li><li>El <b>coeficiente de reducción c</b> de ese eje: 1/2, 2/3 o 3/4 son los más usados.</li></ul><p>El ángulo decide qué caras se ven:</p><ul><li>Con el eje de fugas hacia abajo a la izquierda (225°) se ven la cara frontal, la superior y la lateral derecha: es la posición «vista desde arriba».</li><li>Con el eje hacia arriba (135°) se ve la cara inferior: útil para piezas con detalles por debajo.</li><li>Con el eje hacia la derecha se ve la lateral izquierda.</li></ul><p>Se elige la combinación que muestre mejor los detalles de la pieza, y siempre se indica en el dibujo (por ejemplo, «caballera φ = 225°, c = 1/2»).</p>`,
      svg: s2,
    },
    {
      html: `<h3>11.3 Coeficiente de reducción y escalas</h3><p>El coeficiente c es la razón entre la longitud dibujada en el eje de fugas y la longitud real. No depende de ninguna fórmula: se elige para que el dibujo parezca natural. Un valor de c = 1 (caballera «sin reducción») hace que los objetos parezcan alargados en profundidad.</p><p>Para llevar medidas con un coeficiente cualquiera se construye una <b>escala reducida</b> por el <b>teorema de Tales</b>:</p><ol><li>Sobre una recta se lleva la escala real.</li><li>Desde su origen se traza una recta auxiliar y sobre ella se marcan n partes iguales (por ejemplo, 3 para c = 2/3).</li><li>Se une la última división con el extremo de la escala real y se trazan paralelas por las demás divisiones.</li></ol><p>También se puede trabajar con una regla: multiplicar cada medida de profundidad por c. Lo importante es aplicar el coeficiente <b>solo</b> a las medidas paralelas al eje de fugas: las medidas en los ejes y y z se llevan siempre en verdadera magnitud.</p>`,
      svg: s3,
      video: { id: "RH1UBJel7Hc", titulo: "Coeficiente de reducción en perspectiva caballera", canal: "Arturo Geometría", vistas: 131006, busqueda: "coeficiente de reducción caballera" },
    },
    {
      html: `<h3>11.4 Figuras planas en caballera</h3><p>Las figuras contenidas en planos <b>paralelos al cuadro</b> (frontales) se dibujan en verdadera magnitud: una circunferencia frontal es una circunferencia, un hexágono frontal es un hexágono regular.</p><p>Las figuras en planos <b>horizontales</b> o <b>de perfil</b> se deforman:</p><ul><li>Un cuadrado se ve como un paralelogramo (rombo si c = 1 y φ = 45°).</li><li>Una circunferencia se ve como una <b>elipse</b> inscrita en ese paralelogramo, tangente a sus lados en los puntos medios. Sus ejes no coinciden con las diagonales del paralelogramo salvo casos particulares.</li></ul><p>Para dibujar estas elipses con exactitud se usan el método de los ocho puntos o la construcción de los ejes a partir de dos diámetros conjugados (método de Rytz, tema 3). Un óvalo es una aproximación aceptable en croquis.</p><p>Consejo práctico: si una pieza tiene circunferencias, se orienta de modo que queden en planos frontales; así se dibujan con el compás.</p>`,
      svg: s4,
      video: { id: "sqa3VJSval4", titulo: "Círculos en perspectiva caballera reducida", canal: "Anderwsont", vistas: 188586, busqueda: "circunferencia caballera" },
    },
    {
      html: `<h3>11.5 Método de los ocho puntos</h3><p>Para dibujar una circunferencia contenida en un plano horizontal (o de perfil) en caballera:</p><ol><li>Se dibuja el <b>cuadrado circunscrito</b> en perspectiva (un paralelogramo).</li><li>Las dos <b>medianas</b> del paralelogramo (rectas que unen los puntos medios de lados opuestos) dan los cuatro <b>puntos de tangencia</b> de la elipse con los lados.</li><li>Sobre las <b>diagonales</b> se marcan otros cuatro puntos, a una distancia del centro igual a r·√2/2 en verdadera magnitud. Gráficamente se obtienen trazando, en el cuadrado real, la circunferencia y sus cortes con las diagonales, y llevándolos a la perspectiva paralelamente a los lados.</li><li>Se unen los ocho puntos con una curva suave, tangente a los lados en los cuatro primeros.</li></ol><p>El mismo método vale para cualquier axonometría, también la isométrica. Si se necesita más precisión se añaden puntos con más rectas auxiliares paralelas a los lados.</p>`,
      svg: s5,
    },
    {
      html: `<h3>11.6 Perspectiva caballera de piezas</h3><p>Procedimiento para dibujar una pieza dada por sus vistas:</p><ol><li><b>Orientación</b>: la cara más compleja (con curvas, agujeros o contornos irregulares) se coloca paralela al cuadro, para dibujarla en verdadera magnitud. Suele ser el alzado.</li><li>Se elige φ y c según las caras que haya que mostrar.</li><li>Se dibuja la cara frontal tal como es.</li><li>Desde sus vértices se trazan paralelas al eje de fugas y se lleva sobre ellas la profundidad multiplicada por c.</li><li>Se completan las caras posteriores y los detalles a distintas profundidades.</li><li>Se repasan las aristas visibles y se borran las auxiliares.</li></ol><p>La caballera es la perspectiva más rápida de dibujar a mano y es muy útil en croquis de taller: se parte de la vista principal y «se le da profundidad».</p><p>Error frecuente: dibujar la cara frontal con medidas reducidas o aplicar el coeficiente a los ejes y o z.</p>`,
      svg: s6,
      video: { id: "RW2aTGC_0ms", titulo: "Figura en caballera paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 130865, busqueda: "perspectiva caballera" },
    },
    {
      html: `<h3>11.7 Cuerpos de revolución en caballera</h3><p>La posición del eje decide la dificultad:</p><ul><li><b>Eje perpendicular al cuadro</b> (paralelo al eje de fugas): las bases son <b>circunferencias</b> en verdadera magnitud, desplazadas una respecto de otra la longitud del cilindro multiplicada por c. Los contornos aparentes son las tangentes comunes a ambas circunferencias, paralelas al eje de fugas.</li><li><b>Eje vertical u horizontal paralelo al cuadro</b>: las bases son <b>elipses</b> inscritas en paralelogramos; los contornos son las tangentes comunes a ambas elipses.</li></ul><p>En el cono se trazan las tangentes desde el vértice a la base. En la esfera, el contorno aparente en caballera <b>no es una circunferencia</b> sino una elipse, porque la proyección es oblicua; por eso las esferas se evitan en esta perspectiva o se dibujan solo con su circunferencia frontal como aproximación.</p><p>En piezas de revolución (ejes, poleas, bridas) se coloca casi siempre el eje según el eje de fugas.</p>`,
      svg: s7,
    },
    {
      html: `<h3>11.8 Perspectiva militar</h3><p>En la militar el cuadro es <b>horizontal</b>. Por eso:</p><ul><li>Los ejes x e y forman <b>90°</b> y se ven en verdadera magnitud: la <b>planta</b> del objeto se dibuja tal cual, girada.</li><li>El eje z es <b>vertical</b> y lleva un coeficiente de reducción elegido libremente (1, 3/4, 2/3…).</li><li>Los giros habituales de la planta son 30°/60° y 45°/45° respecto de la horizontal.</li></ul><p>Procedimiento:</p><ol><li>Se dibuja la planta girada el ángulo elegido.</li><li>Desde cada vértice se levantan verticales con la altura multiplicada por c.</li><li>Se unen los extremos y se estudia la visibilidad.</li></ol><p>Con c = 1 los objetos parecen más altos de lo que son; por eso a menudo se reduce el eje vertical. Con 45°/45° la imagen es simétrica pero muchas aristas se alinean; con 30°/60° se ve mejor una de las fachadas.</p>`,
      svg: s8,
      video: { id: "fnia03eHcuo", titulo: "Perspectiva militar 30/60", canal: "OttoDibuja", vistas: 89260, busqueda: "perspectiva militar" },
    },
    {
      html: `<h3>11.9 Militar en arquitectura y urbanismo</h3><p>La perspectiva militar es la preferida para representar <b>conjuntos de edificios, plazas, jardines o interiores vistos desde arriba</b>, porque:</p><ul><li>Se puede partir del plano de planta existente sin redibujarlo.</li><li>Las distancias y ángulos en planta se pueden medir directamente.</li><li>Se aprecian a la vez la distribución y los volúmenes.</li></ul><p>Para dibujar un conjunto se trabaja de atrás hacia delante: primero los volúmenes más alejados y después los cercanos, que los tapan parcialmente. En interiores se suele «cortar» el edificio con un plano horizontal (sección en militar) para mostrar la distribución de las habitaciones con los muros levantados.</p><p>Arquitectos como Auguste Choisy o los miembros de la Bauhaus y De Stijl la usaron para explicar sus proyectos; hoy es habitual en presentaciones de urbanismo y en planos de evacuación.</p>`,
      svg: s9,
      video: { id: "aWzHUME0CBY", titulo: "Perspectiva militar", canal: "Espacio Técnico", vistas: 78408, busqueda: "perspectiva militar" },
    },
    {
      html: `<h3>11.10 Circunferencias en militar</h3><p>En la militar las circunferencias <b>horizontales</b> se ven en verdadera magnitud: un cilindro de eje vertical tiene sus dos bases circulares, desplazadas verticalmente la altura por el coeficiente, y los contornos son tangentes verticales.</p><p>Las circunferencias en planos <b>verticales</b> se deforman en elipses inscritas en paralelogramos, que se dibujan con el método de los ocho puntos.</p><p>Esto hace la militar ideal para representar mesas redondas, rotondas, fuentes, depósitos o columnas, y poco adecuada para piezas con agujeros en caras verticales.</p><p>La esfera tiene en militar un contorno elíptico, igual que en caballera: es una consecuencia de la proyección oblicua.</p>`,
      svg: s10,
    },
    {
      html: `<h3>11.11 Elegir la perspectiva adecuada</h3><table class="tb"><thead><tr><th>Perspectiva</th><th>Cara en VM</th><th>Ventajas</th><th>Inconvenientes</th></tr></thead><tbody><tr><td>Isométrica</td><td>Ninguna</td><td>Trata igual las tres caras; imagen equilibrada</td><td>Todas las circunferencias son elipses</td></tr><tr><td>Caballera</td><td>Frontal</td><td>Muy rápida; frente en VM</td><td>Profundidad deformada</td></tr><tr><td>Militar</td><td>Planta</td><td>Parte del plano de planta</td><td>Alturas exageradas si c = 1</td></tr></tbody></table><p>Criterios:</p><ul><li>Pieza con una cara frontal compleja (engranaje, brida): <b>caballera</b>.</li><li>Conjunto urbano, interior o jardín visto desde arriba: <b>militar</b>.</li><li>Pieza mecánica general, instrucciones de montaje: <b>isométrica</b>.</li><li>Imagen realista para presentación: <b>cónica</b> (tema 12).</li></ul>`,
      svg: s11,
      video: { id: "2s5udc5Q8O8", titulo: "Perspectivas axonométricas: isométrica, caballera y militar (2)", canal: "MelganniaTV", vistas: 56917, busqueda: "perspectiva militar" },
    },
    {
      html: `<h3>11.12 Deformaciones y buenas prácticas</h3><p>Las axonometrías oblicuas producen imágenes que el ojo percibe como deformadas cuando el coeficiente o el ángulo no son adecuados. Algunas reglas prácticas:</p><ul><li>Usar <b>c entre 1/2 y 3/4</b> en caballera; c = 1 solo cuando se necesite medir profundidades directamente.</li><li>Colocar la <b>dimensión mayor</b> del objeto paralela al cuadro, no según el eje de fugas, para reducir la sensación de alargamiento.</li><li>En militar, reducir el eje vertical si los objetos son altos.</li><li>Indicar siempre en el dibujo el tipo de perspectiva, el ángulo y el coeficiente.</li></ul><p>En CAD, estas perspectivas se obtienen como proyecciones oblicuas o, más habitualmente, se aproximan con vistas axonométricas ortogonales. La norma <b>UNE-EN ISO 5456-3</b> incluye la «axonometría oblicua» (caballera con φ = 45° y c = 1/2) entre las representaciones recomendadas.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Una caja de 80 × 50 × 40 mm se dibuja en caballera con la cara de 80 × 40 en el frente y c = 1/2. ¿Cuánto mide la profundidad dibujada?", pasos: ["La profundidad real es 50 mm.", "50 · 1/2 = 25 mm."], resultado: "25 mm." },
    { enunciado: "Un cilindro de 40 mm de diámetro y 60 mm de largo se dibuja con el eje según el eje de fugas (c = 2/3). ¿Qué separación hay entre los centros de las bases?", pasos: ["60 · 2/3 = 40 mm."], resultado: "40 mm, en la dirección del eje de fugas." },
    { enunciado: "Una torre de 30 m se dibuja en militar a escala 1:500 con c = 3/4. ¿Qué altura tiene en el papel?", pasos: ["30 m a 1:500 = 60 mm.", "60 · 3/4 = 45 mm."], resultado: "45 mm." },
    { enunciado: "En el método de los ocho puntos, para r = 30 mm, ¿a qué distancia del centro están los puntos de las diagonales (en VM)?", pasos: ["r·√2/2 = 30 · 0,707 ≈ 21,2 mm."], resultado: "≈ 21,2 mm (después se reduce según la perspectiva)." },
    { enunciado: "¿Qué caras de un cubo se ven en caballera con φ = 135°?", pasos: ["El eje de fugas va hacia arriba a la izquierda.", "Se ven la frontal, la inferior y la lateral derecha."], resultado: "Frontal, inferior y derecha." },
    { enunciado: "Construye la escala de c = 3/4 por Tales: ¿en cuántas partes divides la recta auxiliar?", pasos: ["En 4 partes iguales.", "Se proyecta la tercera división."], resultado: "4 partes; se toma la tercera." },
  ],
  errores: [
    "Aplicar el coeficiente de reducción a las medidas frontales en caballera.",
    "Dibujar como circunferencias las circunferencias horizontales en caballera.",
    "Usar c = 1 sin necesidad, lo que deforma la imagen.",
    "Colocar la cara compleja de la pieza en un plano de fugas.",
    "En militar, olvidar que la planta debe girarse como un todo y no deformarse.",
    "No indicar el ángulo y el coeficiente usados.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué plano coordenado es paralelo al cuadro en la caballera? ¿Y en la militar?", sol: "Frontal (YOZ) en caballera; horizontal (XOY) en militar." },
    { nivel: "básico", q: "Dibuja un cubo de 40 mm en caballera con φ = 225° y c = 1/2.", sol: "Cuadrado frontal de 40; aristas de fuga de 20 mm a 225°." },
    { nivel: "básico", q: "Dibuja el mismo cubo con c = 1 y compara.", sol: "Aristas de fuga de 40 mm: el cubo parece alargado." },
    { nivel: "básico", q: "Construye por Tales una escala con c = 2/3.", sol: "Recta auxiliar dividida en 3; se proyecta la segunda división paralelamente." },
    { nivel: "básico", q: "¿Cómo se ve en caballera una circunferencia frontal?", sol: "Como una circunferencia en VM." },
    { nivel: "básico", q: "¿Cómo se ve en militar una circunferencia horizontal?", sol: "Como una circunferencia en VM." },
    { nivel: "básico", q: "Dibuja en militar 30°/60° un prisma de base 40 × 30 mm y altura 50 mm con c = 1.", sol: "Rectángulo girado 30°; verticales de 50 mm." },
    { nivel: "básico", q: "¿Qué caras de un cubo se ven en caballera con φ = 225°?", sol: "Frontal, superior y lateral derecha." },
    { nivel: "básico", q: "Nombra dos usos típicos de la perspectiva militar.", sol: "Urbanismo y arquitectura de interiores o jardines." },
    { nivel: "básico", q: "Dibuja un hexágono regular de 20 mm de lado en la cara frontal de un prisma en caballera.", sol: "Hexágono en VM; aristas de fuga con c." },
    { nivel: "básico", q: "¿Por qué se reduce el eje de fugas?", sol: "Para que la imagen no parezca alargada." },
    { nivel: "básico", q: "¿Cuántos puntos se obtienen en el método de los ocho puntos y cuáles son de tangencia?", sol: "Ocho; los cuatro de las medianas son de tangencia con los lados." },
    { nivel: "medio", q: "Dibuja en caballera una pieza dada por alzado y planta.", sol: "Alzado en VM; profundidades por c sobre el eje de fugas; caras posteriores." },
    { nivel: "medio", q: "Dibuja una circunferencia de 50 mm de diámetro en la cara superior de un cubo en caballera por el método de los ocho puntos.", sol: "Paralelogramo, medianas (4 tangencias), diagonales a 17,7 mm del centro en VM llevadas con paralelas." },
    { nivel: "medio", q: "Dibuja un cilindro de 30 mm de diámetro y 60 mm de longitud con el eje según el eje de fugas (c = 1/2).", sol: "Dos circunferencias de 30 mm separadas 30 mm a 225°; tangentes comunes." },
    { nivel: "medio", q: "Dibuja el mismo cilindro con el eje vertical.", sol: "Dos elipses inscritas en paralelogramos de 30 × 15 mm; tangentes verticales." },
    { nivel: "medio", q: "Dibuja en militar 45°/45° una mesa redonda de 1 m de diámetro y 75 cm de altura a escala 1:20.", sol: "Circunferencia de 50 mm; patas verticales de 37,5 mm (c = 1)." },
    { nivel: "medio", q: "Dibuja en militar la planta de tu aula con mesas y paredes de 3 m (escala 1:50, c = 3/4).", sol: "Planta girada; paredes de 45 mm de altura." },
    { nivel: "medio", q: "Compara una pieza en isométrica y en caballera: ¿cuál se dibuja antes?", sol: "La caballera, porque la cara frontal se dibuja directamente." },
    { nivel: "medio", q: "Explica por qué en caballera la esfera no se ve como una circunferencia.", sol: "Porque los rayos son oblicuos al cuadro: el cilindro tangente a la esfera corta al cuadro según una elipse." },
    { nivel: "medio", q: "Dibuja en caballera una escalera de 4 peldaños de 25 × 15 cm y 80 cm de ancho a escala 1:20.", sol: "Perfil escalonado en VM en el frente; ancho de 40 mm × c en fuga." },
    { nivel: "medio", q: "Dibuja una circunferencia en el plano de perfil de un cubo en caballera.", sol: "Elipse inscrita en el paralelogramo lateral, por el método de los ocho puntos." },
    { nivel: "avanzado", q: "Obtén los ejes de la elipse de una circunferencia horizontal en caballera por el método de Rytz.", sol: "Los diámetros paralelos a los lados del paralelogramo son conjugados; con Rytz se obtienen los ejes." },
    { nivel: "avanzado", q: "Dibuja en caballera una brida circular con seis agujeros, con su cara principal frontal.", sol: "Circunferencias en VM para el contorno y los agujeros; la cara trasera desplazada según el eje de fugas por c; tangentes." },
    { nivel: "avanzado", q: "Dibuja un conjunto de tres edificios en militar con oclusiones correctas.", sol: "De atrás hacia delante; los volúmenes cercanos tapan a los lejanos." },
    { nivel: "avanzado", q: "Dibuja una sección horizontal de una vivienda en militar con los muros a 1,2 m.", sol: "Planta girada; muros levantados 1,2 m × c; huecos de puertas." },
    { nivel: "avanzado", q: "Halla la dirección de los rayos de proyección de una caballera con φ = 225° y c = 1/2.", sol: "Forman con el cuadro un ángulo cuya tangente es 1/c = 2: unos 63,4°; su proyección sobre el cuadro forma 225° con la horizontal." },
    { nivel: "avanzado", q: "Dibuja en caballera un cono de eje horizontal según el eje de fugas.", sol: "Base circular en VM; vértice desplazado h·c; tangentes desde el vértice." },
    { nivel: "avanzado", q: "Explica cómo pasar una perspectiva militar a una vista en planta y alzado.", sol: "La planta se obtiene girando hacia atrás; las alturas se leen dividiendo las verticales por c." },
    { nivel: "avanzado", q: "Diseña una pieza que se vea mejor en caballera que en isométrica y justifícalo.", sol: "Por ejemplo, un engranaje con su cara dentada frontal: en caballera los dientes se dibujan en VM con compás." },
  ],
  quiz: reparte([
    { q: "Las axonometrías oblicuas usan proyección…", o: ["cónica", "cilíndrica oblicua", "ortogonal", "central"], a: 1, e: "Rayos paralelos oblicuos al cuadro." },
    { q: "En caballera el cuadro es paralelo al plano…", o: ["horizontal", "frontal", "de perfil", "bisector"], a: 1, e: "YOZ." },
    { q: "En militar el cuadro es paralelo al plano…", o: ["frontal", "horizontal", "de perfil", "oblicuo"], a: 1, e: "XOY." },
    { q: "En caballera se ve en VM la cara…", o: ["superior", "frontal", "lateral", "ninguna"], a: 1, e: "Paralela al cuadro." },
    { q: "En militar se ve en VM…", o: ["el alzado", "la planta", "el perfil", "nada"], a: 1, e: "Plano horizontal." },
    { q: "El coeficiente de reducción se aplica en caballera a…", o: ["los tres ejes", "el eje de fugas", "el eje z", "ninguno"], a: 1, e: "Solo profundidades." },
    { q: "Coeficientes habituales en caballera:", o: ["0,816", "1/2, 2/3, 3/4", "2", "π"], a: 1, e: "Elección libre." },
    { q: "Con c = 1 el cubo en caballera parece…", o: ["un cubo", "alargado", "aplastado", "una esfera"], a: 1, e: "Deformación." },
    { q: "Con φ = 225° se ve la cara…", o: ["inferior", "superior", "posterior", "ninguna"], a: 1, e: "Vista desde arriba." },
    { q: "Una circunferencia horizontal en caballera es…", o: ["circunferencia", "elipse", "recta", "óvalo exacto"], a: 1, e: "Plano de fugas." },
    { q: "Una circunferencia horizontal en militar es…", o: ["elipse", "circunferencia", "recta", "parábola"], a: 1, e: "Plano en VM." },
    { q: "En el método de los ocho puntos, las medianas dan…", o: ["los focos", "los puntos de tangencia", "el centro", "los ejes"], a: 1, e: "Puntos medios de los lados." },
    { q: "Los puntos de las diagonales están a … del centro (en VM).", o: ["r", "r·√2/2", "r/2", "2r"], a: 1, e: "≈ 0,707 r." },
    { q: "La escala reducida se construye con…", o: ["Pitágoras", "Tales", "Euler", "Rytz"], a: 1, e: "Paralelas." },
    { q: "En militar la planta se dibuja…", o: ["deformada", "girada en VM", "reducida", "abatida"], a: 1, e: "Ejes a 90°." },
    { q: "Giros habituales de la planta en militar:", o: ["30°/60° y 45°/45°", "7°/42°", "120°", "90°/0°"], a: 0, e: "Escuadra y cartabón." },
    { q: "La caballera es ideal para piezas con…", o: ["planta compleja", "cara frontal compleja", "muchas esferas", "nada"], a: 1, e: "Se dibuja en VM." },
    { q: "La militar es habitual en…", o: ["mecánica", "urbanismo", "electrónica", "topografía"], a: 1, e: "Conjuntos vistos desde arriba." },
    { q: "La esfera en caballera tiene contorno…", o: ["circular", "elíptico", "recto", "poligonal"], a: 1, e: "Proyección oblicua." },
    { q: "En un cilindro con eje según el eje de fugas, las bases son…", o: ["elipses", "circunferencias", "rectas", "óvalos"], a: 1, e: "Frontales." },
  ]),
  examen: reparte([
    { q: "Profundidad real 60 mm, c = 2/3: dibujada", o: ["40 mm", "60 mm", "30 mm", "90 mm"], a: 0, e: "60 · 2/3." },
    { q: "Altura real 40 mm en militar con c = 3/4:", o: ["30 mm", "40 mm", "53 mm", "20 mm"], a: 0, e: "40 · 3/4." },
    { q: "Cara en VM en caballera:", o: ["frontal", "superior", "lateral", "trasera"], a: 0, e: "Paralela al cuadro." },
    { q: "Ejes x e y en militar forman…", o: ["90°", "120°", "135°", "60°"], a: 0, e: "Planta en VM." },
    { q: "Para c = 3/4 por Tales se divide la auxiliar en…", o: ["4 partes", "3 partes", "7 partes", "2 partes"], a: 0, e: "Se toman tres." },
    { q: "Circunferencia vertical frontal en militar:", o: ["elipse", "circunferencia", "recta", "punto"], a: 0, e: "Plano vertical." },
    { q: "La perspectiva más adecuada para una brida circular:", o: ["caballera", "militar", "isométrica", "cónica"], a: 0, e: "Cara frontal en VM." },
    { q: "Con φ = 135° se ve la cara…", o: ["inferior", "superior", "trasera", "ninguna"], a: 0, e: "Vista desde abajo." },
  ]),
  feynman: ["En qué se diferencian las axonometrías oblicuas de la ortogonal", "Por qué una cara se ve en verdadera magnitud en caballera", "Para qué sirve el coeficiente de reducción", "Cómo se dibuja una circunferencia horizontal en caballera", "Cuándo conviene usar la perspectiva militar"],
  glosario: [
    ["Axonometría oblicua", "Proyección cilíndrica oblicua sobre un plano paralelo a un plano coordenado."],
    ["Perspectiva caballera", "Axonometría oblicua con el cuadro paralelo al plano frontal."],
    ["Perspectiva militar", "Axonometría oblicua con el cuadro paralelo al plano horizontal."],
    ["Eje de fugas", "Eje perpendicular al cuadro, que se dibuja inclinado y reducido."],
    ["Ángulo φ", "Ángulo del eje de fugas con la horizontal."],
    ["Coeficiente de reducción", "Razón entre la longitud dibujada y la real en el eje de fugas."],
    ["Escala reducida", "Escala gráfica afectada por el coeficiente."],
    ["Método de los ocho puntos", "Construcción de una elipse en perspectiva con tangencias y diagonales."],
    ["Diámetros conjugados", "Pares de diámetros de una elipse que se corresponden con diámetros perpendiculares de la circunferencia."],
    ["Planimetría", "Otro nombre de la perspectiva militar."],
    ["Óvalo", "Curva de arcos de circunferencia que aproxima la elipse."],
    ["Contorno aparente", "Línea que limita la imagen de un cuerpo."],
  ],
  situacion: {
    titulo: "Maqueta del barrio",
    reto: "El ayuntamiento quiere explicar a los vecinos la reforma de una plaza. Vuestro grupo debe preparar una perspectiva militar de la plaza y los edificios que la rodean, y una perspectiva caballera del banco que se va a instalar.",
    pasos: [
      "Obtened la planta de la plaza (catastro o visor cartográfico) y simplificadla a escala 1:500.",
      "Medid o estimad las alturas de los edificios y elegid el coeficiente vertical.",
      "Dibujad la militar 30°/60° de atrás hacia delante, con árboles y fuente circular.",
      "Diseñad el banco y dibujadlo en caballera con su perfil en verdadera magnitud.",
      "Presentad ambas láminas con rotulación y escala.",
    ],
    producto: "Dos láminas A3: militar de la plaza y caballera del banco.",
    evaluacion: [
      "Planta girada correctamente y alturas proporcionadas.",
      "Oclusiones y visibilidad correctas.",
      "Banco en caballera con coeficiente adecuado.",
      "Presentación clara.",
    ],
  },
  figura: fig("Caballera y militar", "Resumen del tema", [
    ["Caballera", ["cuadro ∥ frontal", "frente en VM", "eje de fugas φ", "c = 1/2 … 3/4"], "var(--red)"],
    ["Militar", ["cuadro ∥ horizontal", "planta en VM", "30°/60° o 45°", "z con coeficiente"], "var(--pen)"],
    ["Circunferencias", ["en VM si ∥ cuadro", "elipses en el resto", "ocho puntos", "Rytz"], "var(--leaf)"],
    ["Uso", ["piezas con frente complejo", "urbanismo e interiores", "croquis rápidos", "indicar φ y c"], "var(--inf)"],
  ]),
  video: { id: "-6ZEanBDUWk", titulo: "Perspectivas axonométricas: isométrica, caballera y militar", canal: "MelganniaTV", vistas: 476198, busqueda: "perspectiva caballera militar" },
  mapa: mapa("CABALLERA Y MILITAR", "var(--bac)", [
    ["Fundamento", "proyección cilíndrica oblicua", "var(--pen)"],
    ["Caballera", "frente en VM · φ · c", "var(--red)"],
    ["Militar", "planta en VM · alturas", "var(--leaf)"],
    ["Circunferencias", "VM o elipse · ocho puntos", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Caballera", "Cuadro ∥ plano frontal."],
    ["Militar", "Cuadro ∥ plano horizontal."],
    ["Eje de fugas", "Inclinado φ y reducido c."],
    ["c habitual", "1/2, 2/3, 3/4."],
    ["φ = 225°", "Se ve la cara superior."],
    ["Escala reducida", "Teorema de Tales."],
    ["Circunferencia frontal (caballera)", "En VM."],
    ["Circunferencia horizontal (militar)", "En VM."],
    ["Ocho puntos", "4 tangencias + 4 en diagonales."],
    ["Diagonales", "A r·√2/2 del centro."],
    ["Militar", "Planta girada 30°/60° o 45°."],
    ["Esfera oblicua", "Contorno elíptico."],
  ],
  familias: ["Buscad planos de evacuación o folletos de urbanismo en perspectiva militar.", "Dibujad juntos vuestra habitación en militar a partir de su planta.", "Comparad una caja dibujada con c = 1 y con c = 1/2: ¿cuál parece más real?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema axonométrico oblicuo; perspectiva caballera y militar; coeficientes de reducción; representación de figuras planas, circunferencias y cuerpos; elección del sistema de representación (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Croquis rápidos en caballera de piezas del taller de Tecnología.", "Militar de la planta del centro educativo a partir del plano de evacuación.", "Comparar una misma pieza en las tres perspectivas en una sola lámina.", "Relación con Historia del Arte: dibujos axonométricos de Choisy y de la Bauhaus."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Perspectiva caballera, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_caballera" },
    { t: "Perspectiva militar, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_militar" },
  ],
  revisado: "2026-11-21",
};
