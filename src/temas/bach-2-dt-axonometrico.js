// Dibujo Técnico II 2º Bachillerato · Tema 10. Nivel libro. Axonometría ortogonal calculada en 3D.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, mid, dist, unit, add, sub, mul, tx, dash, pie, corteRR, v3, envolvente, polVista, vistaAxo, POL, truncar, P2 } = G;

const L = (P, s, dx, dy, c = "var(--ink)", a = "start", sz = 11) => tx(P[0] + dx, P[1] + dy, s, { s: sz, b: 1, a, c });
const curva = (pts, c = "var(--red)", w = 2.2, cerrada = false, fill = 0, extra = "") => `<path d="M${pts.map(P2).join(" L ")}${cerrada ? " Z" : ""}" fill="${fill ? c : "none"}" fill-opacity="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;
const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));
const ISO = (O, k = 1) => vistaAxo(O, k, 225, 35.264);
// Ejes proyectados de una axonometría y su triángulo de trazas.
function axoData(O, az, el, d = 70) {
  const V = vistaAxo(O, 1, az, el), ux = unit(O, V.P([1, 0, 0])), uy = unit(O, V.P([0, 1, 0])), uz = unit(O, V.P([0, 0, 1]));
  const dd = (a, b) => a[0] * b[0] + a[1] * b[1], Z = add(O, mul(uz, d)), X = add(O, mul(ux, (d * dd(uz, uy)) / dd(ux, uy))), Y = add(O, mul(uy, (d * dd(uz, ux)) / dd(uy, ux)));
  const c = [1, 0, 0].map((_, i) => dist(O, V.P([i === 0, i === 1, i === 2].map(Number))));
  return { V, ux, uy, uz, X, Y, Z, c };
}
const angulo = (u, v) => (Math.acos(Math.max(-1, Math.min(1, u[0] * v[0] + u[1] * v[1]))) * 180) / Math.PI;

const OT = [130, 82], T = axoData(OT, 215, 32, 62);

// 10.1 Fundamentos: triedro, ejes y triángulo de trazas.
const s1 = (() => {
  const { X, Y, Z } = T, O = OT;
  return dib("Sistema axonométrico ortogonal: el triedro de referencia se proyecta ortogonalmente sobre el plano del cuadro; los ejes cortan al cuadro en los vértices del triángulo de trazas XYZ", `${poli([X, Y, Z], "var(--pen)", 1.6, "var(--pen)", 0.08)}${[X, Y, Z].map((P) => seg(O, P, "var(--red)", 2.4)).join("")}${[X, Y, Z].map((P) => seg(P, add(P, mul(unit(O, P), 14)), "var(--red)", 1, dash)).join("")}${pt(O, "O", 6, 12)}${L(X, "X", -14, 4)}${L(Y, "Y", 6, 4)}${L(Z, "Z", 6, -2)}${L(mid(O, X), "x", -4, -6, "var(--red)", "end")}${L(mid(O, Y), "y", 4, -6, "var(--red)")}${L(mid(O, Z), "z", 6, 0, "var(--red)")}` + tx(10, 172, "plano del cuadro ∩ triedro = triángulo de trazas", { s: 10, b: 1, a: "start", c: "var(--pen)" }));
})();

// 10.2 Propiedades del triángulo de trazas.
const s2 = (() => {
  const { X, Y, Z } = T, O = OT, H = [pie(Z, X, Y), pie(X, Y, Z), pie(Y, Z, X)];
  return dib("Triángulo de trazas: es siempre acutángulo y el origen O es su ortocentro; cada eje es la prolongación de una altura, perpendicular al lado opuesto", `${poli([X, Y, Z], "var(--pen)", 2, "var(--pen)", 0.06)}${seg(Z, H[0], "var(--leaf)", 1.6)}${seg(X, H[1], "var(--leaf)", 1.6)}${seg(Y, H[2], "var(--leaf)", 1.6)}${G.recto(H[0], X, Z, 6)}${G.recto(H[1], Y, X, 6)}${G.recto(H[2], Z, Y, 6)}${pt(O, "O", 6, -6, "var(--red)")}${L(X, "X", -14, 4)}${L(Y, "Y", 6, 4)}${L(Z, "Z", 6, -2)}` + tx(250, 22, "O = ortocentro", { s: 10.5, b: 1, a: "end", c: "var(--red)" }) + tx(10, 172, "triángulo acutángulo", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }));
})();

// 10.3 Coeficientes de reducción por abatimiento del plano XOY.
const abXY = (() => { const { X, Y } = T, O = OT, M = pie(O, X, Y), Ob = add(M, mul(unit(O, M), Math.sqrt(dist(M, X) * dist(M, Y)))); return { M, Ob, cx: dist(O, X) / dist(Ob, X), cy: dist(O, Y) / dist(Ob, Y) }; })();
const s3 = (() => {
  const { X, Y, Z } = T, O = OT, { M, Ob, cx } = abXY, C = mid(X, Y), r = dist(X, Y) / 2;
  return dib("Coeficientes de reducción: se abate el plano XOY alrededor de XY; el origen abatido (O) está en la semicircunferencia de diámetro XY y en la perpendicular a XY por O. (O)X es la verdadera magnitud de OX", `${poli([X, Y, Z], "var(--pen)", 1.4, "var(--pen)", 0.05)}${seg(O, X, "var(--red)", 2.4)}${seg(O, Y, "var(--red)", 2.4)}${seg(O, Z, "var(--red)", 1.4)}${G.arco(C, r, G.ang(C, Y), G.ang(C, X), "var(--muted)", 1, dash)}${seg(O, Ob, "var(--muted)", 1, dash)}${seg(Ob, X, "var(--leaf)", 2.4)}${seg(Ob, Y, "var(--leaf)", 2.4)}${G.recto(Ob, X, Y, 6)}${pt(O, "O", 6, -4)}${pt(Ob, "(O)", 6, 8, "var(--leaf)")}${L(X, "X", -14, 4)}${L(Y, "Y", 6, 4)}${L(Z, "Z", 6, -2)}` + tx(10, 22, `cₓ = OX/(O)X ≈ ${cx.toFixed(2).replace(".", ",")}`, { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 10.4 Isométrica, dimétrica y trimétrica.
const s4 = (() => {
  const tipos = [["isométrica", 225, 35.264, 44], ["dimétrica", 200.7, 19.47, 130], ["trimétrica", 240, 25, 216]];
  return dib("Tipos de axonometría ortogonal según los ángulos entre ejes: isométrica (tres ángulos iguales de 120°), dimétrica (dos iguales) y trimétrica (los tres distintos)", tipos.map(([n, az, el, x]) => {
    const O = [x, 92], V = vistaAxo(O, 1, az, el), ej = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map((e) => V.P(e.map((v) => v * 44)));
    const u = ej.map((P) => unit(O, P)), angs = [angulo(u[0], u[1]), angulo(u[1], u[2]), angulo(u[2], u[0])].map((a) => Math.round(a));
    return ej.map((P, i) => seg(O, P, ["var(--red)", "var(--leaf)", "var(--pen)"][i], 2.4)).join("") + pt(O, "", 0, 0) + tx(x, 150, n, { s: 10.5, b: 1, a: "middle", c: "var(--ink)" }) + tx(x, 164, angs.join("° · ") + "°", { s: 9.5, b: 1, a: "middle", c: "var(--muted)" });
  }).join("") + tx(130, 22, "x · y · z", { s: 10.5, b: 1, a: "middle", c: "var(--ink)" }));
})();

// 10.5 Escala isométrica.
const s5 = (() => {
  const O = [24, 150], a45 = G.rad(45), a30 = G.rad(30), n = 6, s = 30, P45 = (i) => [O[0] + i * s * Math.cos(a45), O[1] - i * s * Math.sin(a45)], P30 = (i) => corteRR(P45(i), add(P45(i), [0, 10]), O, [O[0] + Math.cos(a30), O[1] - Math.sin(a30)]);
  return dib("Escala isométrica: sobre una recta a 45° se lleva la escala real y sobre otra a 30° se proyectan sus divisiones con verticales; la razón entre ambas es cos 45° / cos 30° ≈ 0,816", `${seg(O, [250, O[1]], "var(--muted)", 1)}${seg(O, P45(n), "var(--leaf)", 2.2)}${seg(O, P30(n), "var(--red)", 2.2)}${rango(n + 1, (i) => fino(P45(i), P30(i)) + pt(P45(i), "", 0, 0, "var(--leaf)") + pt(P30(i), "", 0, 0, "var(--red)")).join("")}${L(P45(n), "escala real (45°)", -6, -4, "var(--leaf)", "end", 10)}${L(P30(4), "escala isométrica (30°)", 4, 20, "var(--red)", "start", 10)}` + tx(250, 172, "c = 0,816", { s: 11, b: 1, a: "end", c: "var(--red)" }));
  function fino(A, B) { return seg(A, B, "var(--muted)", 0.8, 'stroke-dasharray="2 2"'); }
})();

// 10.6 Representación de un punto.
const s6 = (() => {
  const V = ISO([136, 104], 1.5), O = V.P([0, 0, 0]), p = [60, 20, 30], P = V.P(p), p1 = V.P([p[0], p[1], 0]), p2 = V.P([p[0], 0, p[2]]), p3 = V.P([0, p[1], p[2]]), px = V.P([p[0], 0, 0]), py = V.P([0, p[1], 0]), pz = V.P([0, 0, p[2]]);
  const ejes = [[84, 0, 0], [0, 64, 0], [0, 0, 62]].map(V.P), f = (A, B) => seg(A, B, "var(--muted)", 0.9, dash);
  return dib("Un punto P en axonometría se sitúa con sus tres coordenadas medidas sobre los ejes con su coeficiente de reducción; sus proyecciones sobre los planos coordenados, p₁, p₂ y p₃, completan una caja", `${ejes.map((E, i) => seg(O, E, "var(--ink)", 1.6)).join("")}${f(px, p1)}${f(py, p1)}${f(px, p2)}${f(pz, p2)}${f(py, p3)}${f(pz, p3)}${f(p1, P)}${f(p2, P)}${f(p3, P)}${pt(P, "P", 6, -4, "var(--red)")}${pt(p1, "p₁", 6, 8, "var(--pen)")}${pt(p2, "p₂", -16, 0, "var(--pen)")}${pt(p3, "p₃", 6, -2, "var(--pen)")}${L(ejes[0], "x", -10, 4)}${L(ejes[1], "y", 6, 4)}${L(ejes[2], "z", 6, 4)}${pt(O, "O", 6, -2)}` + tx(10, 22, "P(60, 20, 30)", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 10.7 Circunferencias en las caras de un cubo isométrico.
const s7 = (() => {
  const a = 70, V = ISO([130, 96], 1), cubo = envolvente(POL.cubo(a).map((p) => [p[0] + a / 2, p[1] + a / 2, p[2]])), r = a / 2 - 4, n = 72;
  const circ = (f) => rango(n, (i) => V.P(f((2 * Math.PI * i) / n)));
  const top = circ((t) => [a / 2 + r * Math.cos(t), a / 2 + r * Math.sin(t), a]), fx = circ((t) => [a, a / 2 + r * Math.cos(t), a / 2 + r * Math.sin(t)]), fy = circ((t) => [a / 2 + r * Math.cos(t), a, a / 2 + r * Math.sin(t)]);
  return dib("Circunferencias inscritas en las caras de un cubo en isométrica: se proyectan como elipses iguales cuyo eje mayor es perpendicular al eje que no está en su plano", `${polVista(cubo, V.P, V.w, "var(--pen)", 0.06, 2)}${curva(top, "var(--red)", 2.2, true, 0.12)}${curva(fx, "var(--leaf)", 2.2, true, 0.12)}${curva(fy, "var(--inf)", 2.2, true, 0.12)}` + tx(10, 172, "eje mayor = diámetro real", { s: 10, b: 1, a: "start", c: "var(--red)" }));
})();

// 10.8 Figura plana en un plano coordenado por abatimiento (afinidad).
const s8 = (() => {
  const { X, Y, Z } = T, O = OT, { Ob, cx, cy } = abXY, e1 = unit(Ob, X), e2 = unit(Ob, Y), ux = unit(O, X), uy = unit(O, Y), Cc = [24, 22], R = 16;
  const hexA = rango(6, (i) => { const t = G.rad(60 * i); return [Cc[0] + R * Math.cos(t), Cc[1] + R * Math.sin(t)]; }), ab = hexA.map(([u, v]) => add(Ob, add(mul(e1, u), mul(e2, v)))), pr = hexA.map(([u, v]) => add(O, add(mul(ux, u * cx), mul(uy, v * cy))));
  return dib("Figura plana en el plano XOY: se dibuja en verdadera magnitud sobre el plano abatido y se lleva a la axonometría por afinidad, con eje XY y dirección la del eje z", `${poli([X, Y, Z], "var(--pen)", 1.2, "var(--pen)", 0.04)}${seg(O, X, "var(--red)", 1.8)}${seg(O, Y, "var(--red)", 1.8)}${seg(Ob, X, "var(--leaf)", 1.6)}${seg(Ob, Y, "var(--leaf)", 1.6)}${ab.map((P, i) => seg(P, pr[i], "var(--muted)", 0.8, 'stroke-dasharray="2 2"')).join("")}${poli(ab, "var(--leaf)", 2, "var(--leaf)", 0.16)}${poli(pr, "var(--red)", 2.2, "var(--red)", 0.18)}${pt(O, "O", -14, -2)}${pt(Ob, "(O)", 6, 8, "var(--leaf)")}${L(X, "X", -14, 4)}${L(Y, "Y", 6, 4)}` + tx(10, 22, "hexágono en VM → axonometría", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// Pieza de ejemplo: bloque con un chaflán (poliedro convexo).
const pieza = (() => { const A = 60, B = 40, C = 34, ch = 18; return envolvente([[0, 0, 0], [A, 0, 0], [A, B, 0], [0, B, 0], [0, 0, C], [A - ch, 0, C], [A - ch, B, C], [0, B, C], [A, 0, C - ch], [A, B, C - ch]]); })();

// 10.9 Perspectiva isométrica de una pieza a partir de sus vistas.
const s9 = (() => {
  const yt = 70, pl = (p) => [16 + p[0], yt + 12 + p[1]], al = (p) => [16 + p[0], yt - p[2]], V = ISO([190, 100], 1);
  return dib("Perspectiva isométrica de una pieza a partir de su alzado y su planta: las medidas paralelas a los ejes se llevan directamente sobre los ejes isométricos", `${seg([8, yt], [92, yt], "var(--ink)", 1.2)}${polVista(pieza, al, [0, 1, 0], "var(--pen)", 0.08, 1.8)}${polVista(pieza, pl, [0, 0, 1], "var(--pen)", 0.08, 1.8)}${polVista(pieza, V.P, V.w, "var(--red)", 0.12, 2.2)}${tx(48, 22, "alzado", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}${tx(48, 150, "planta", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}` + tx(190, 172, "dibujo isométrico", { s: 10.5, b: 1, a: "middle", c: "var(--red)" }));
})();

// 10.10 Sección de un cubo en isométrica.
const s10 = (() => {
  const a = 66, V = ISO([130, 100], 1), cubo = envolvente(POL.cubo(a).map((p) => [p[0] + a / 2, p[1] + a / 2, p[2]])), t = truncar(cubo, (p) => p[0] + p[1] + p[2] - 1.5 * a);
  return dib("Sección de un cubo por el plano perpendicular a una diagonal que pasa por su centro: en isométrica se ve el hexágono regular de la sección y el sólido truncado", `${polVista(cubo, V.P, V.w, "var(--muted)", 0, 1)}${polVista(t.pol, V.P, V.w, "var(--pen)", 0.08, 2.2)}${poli(t.seccion.map(V.P), "var(--red)", 2.4, "var(--red)", 0.3)}` + tx(10, 172, "sección hexagonal", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 10.11 Cilindro en isométrica.
const s11 = (() => {
  const V = ISO([130, 104], 1), r = 30, H = 70, C0 = [40, 40], n = 90, el = (z) => rango(n, (i) => V.P([C0[0] + r * Math.cos((2 * Math.PI * i) / n), C0[1] + r * Math.sin((2 * Math.PI * i) / n), z]));
  const top = el(H), bot = el(0), xs = bot.map((p) => p[0]), iL = xs.indexOf(Math.min(...xs)), iR = xs.indexOf(Math.max(...xs));
  const frente = bot.filter((p, i) => p[1] >= (bot[iL][1] + bot[iR][1]) / 2 - 0.5), atras = bot.filter((p, i) => p[1] < (bot[iL][1] + bot[iR][1]) / 2 - 0.5);
  return dib("Cilindro de eje vertical en isométrica: las bases son elipses con el eje mayor horizontal y los contornos aparentes son las generatrices tangentes a ellas; la mitad trasera de la base inferior queda oculta", `${curva(top, "var(--pen)", 2.2, true, 0.12)}${seg(bot[iL], top[iL], "var(--pen)", 2.2)}${seg(bot[iR], top[iR], "var(--pen)", 2.2)}${curva(frente.sort((p, q) => p[0] - q[0]), "var(--pen)", 2.2)}${curva(atras.sort((p, q) => p[0] - q[0]), "var(--pen)", 1.1, false, 0, 'stroke-dasharray="4 3"')}${seg(V.P([C0[0], C0[1], 0]), V.P([C0[0], C0[1], H]), "var(--red)", 1, 'stroke-dasharray="10 3 2 3"')}` + tx(250, 22, "elipses: eje mayor ⊥ al eje z", { s: 10, b: 1, a: "end", c: "var(--pen)" }));
})();

// 10.12 Del diédrico a la axonometría: tres vistas y perspectiva de la misma pieza truncada.
const s12 = (() => {
  const t = truncar(pieza, (p) => p[1] - p[0] - 20).pol, yt = 76, pl = (p) => [14 + p[0], yt + 10 + p[1]], al = (p) => [14 + p[0], yt - p[2]], pf = (p) => [94 + (40 - p[1]), yt - p[2]], V = ISO([196, 104], 1);
  return dib("La misma pieza en sistema diédrico (alzado, planta y perfil) y en isométrica: las vistas dan las medidas exactas y la axonometría permite entender la forma de un vistazo", `${seg([8, yt], [140, yt], "var(--ink)", 1.2)}${polVista(t, al, [0, 1, 0], "var(--pen)", 0.08, 1.6)}${polVista(t, pl, [0, 0, 1], "var(--pen)", 0.08, 1.6)}${polVista(t, pf, [-1, 0, 0], "var(--pen)", 0.08, 1.6)}${polVista(t, V.P, V.w, "var(--red)", 0.12, 2.2)}` + tx(196, 172, "isométrica", { s: 10.5, b: 1, a: "middle", c: "var(--red)" }) + tx(70, 172, "vistas", { s: 10.5, b: 1, a: "middle", c: "var(--pen)" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema axonométrico ortogonal",
  minutos: 120,
  objetivos: [
    "Comprender el fundamento del sistema axonométrico ortogonal y el triángulo de trazas",
    "Calcular y construir los coeficientes de reducción",
    "Distinguir axonometrías isométricas, dimétricas y trimétricas",
    "Representar puntos, figuras planas y circunferencias en los planos coordenados",
    "Dibujar la perspectiva de piezas a partir de sus vistas diédricas",
    "Obtener secciones planas de cuerpos en axonometría",
  ],
  claves: ["axonometría ortogonal", "plano del cuadro", "triángulo de trazas", "ortocentro", "coeficiente de reducción", "isométrica", "dimétrica", "trimétrica", "escala axonométrica", "abatimiento", "afinidad", "dibujo isométrico"],
  lectura: {
    titulo: "Ver tres caras a la vez",
    html: `<p>Las vistas diédricas son precisas, pero exigen imaginar el objeto a partir de varias proyecciones separadas. La <b>axonometría</b> resuelve ese problema: proyecta el objeto sobre un único plano de forma que se ven a la vez tres de sus caras, y además conserva el paralelismo y permite medir sobre los ejes.</p>
    <p>La perspectiva isométrica nació como herramienta de ingenieros: en 1822 el británico William Farish la formalizó para dibujar máquinas. Hoy está en los manuales de montaje de muebles, en los planos de instalaciones, en los videojuegos de estrategia y en la mayoría de programas de CAD, que ofrecen la «vista isométrica» con un solo clic.</p>
    <p>En este tema estudiarás el sistema con rigor: por qué los ejes forman los ángulos que forman, cómo se calculan las reducciones y cómo se dibujan figuras y cuerpos con exactitud.</p>`,
  },
  pregunta: {
    texto: "Si en una perspectiva isométrica mides la arista de un cubo de 10 cm, ¿qué longitud obtienes?",
    respuesta: "En una <mark>perspectiva isométrica</mark> exacta, ≈ 8,16 cm, porque cada eje se reduce por el coeficiente √(2/3) ≈ 0,816. En el <mark>dibujo isométrico</mark> normalizado se ignora la reducción y se dibuja a 10 cm: la figura es la misma, solo que un 22 % mayor.",
  },
  bloques: [
    {
      html: `<h3>10.1 Fundamento del sistema</h3><p>El sistema axonométrico ortogonal usa un <b>triedro trirrectángulo</b> de referencia (tres planos perpendiculares que se cortan en los ejes x, y, z) y un único <b>plano del cuadro</b> oblicuo a los tres ejes. El objeto y el triedro se proyectan sobre el cuadro con rayos <b>paralelos y perpendiculares</b> a él (proyección cilíndrica ortogonal).</p><p>El plano del cuadro corta a los ejes en tres puntos X, Y, Z: los vértices del <b>triángulo de trazas</b>. Las proyecciones de los ejes son las rectas que unen la proyección del origen O con esos vértices.</p><p>Como la proyección es cilíndrica:</p><ul><li>Las rectas paralelas se proyectan paralelas.</li><li>Se conserva la razón entre segmentos de una misma recta o de rectas paralelas.</li><li>Los segmentos paralelos a un eje se reducen siempre en la misma proporción: el <b>coeficiente de reducción</b> de ese eje.</li></ul><p>Estas propiedades hacen la axonometría muy cómoda: basta conocer los ejes y los coeficientes para dibujar cualquier punto por sus coordenadas.</p>`,
      svg: s1,
    },
    {
      html: `<h3>10.2 El triángulo de trazas</h3><p>El triángulo de trazas XYZ tiene propiedades que permiten construir el sistema:</p><ul><li>Cada eje es perpendicular al plano coordenado opuesto. Por ejemplo, el eje z es perpendicular al plano XOY, y por tanto a la recta XY. Al proyectar (teorema del ángulo recto), la proyección del eje z es <b>perpendicular al lado XY</b>.</li><li>Así, las proyecciones de los tres ejes son las <b>alturas</b> del triángulo y el origen O es su <b>ortocentro</b>.</li><li>El triángulo de trazas es siempre <b>acutángulo</b>: si tuviera un ángulo recto u obtuso, el ortocentro estaría en un vértice o fuera y los ejes no podrían formar un triedro trirrectángulo.</li><li>Los ángulos entre las proyecciones de los ejes son siempre <b>mayores de 90°</b> y suman 360°.</li></ul><p>Recíprocamente, cualquier triángulo acutángulo define un sistema axonométrico ortogonal: sus alturas son los ejes y su ortocentro, el origen. Elegir el triángulo equivale a elegir el punto de vista.</p>`,
      svg: s2,
      video: { id: "RF4LdPFLvKw", titulo: "Coeficiente de reducción y triángulo de trazas", canal: "PDD Profesor de Dibujo", vistas: 133155, busqueda: "triángulo de trazas axonometría" },
    },
    {
      html: `<h3>10.3 Coeficientes de reducción</h3><p>Un segmento de longitud real ℓ sobre el eje x se proyecta con longitud cₓ·ℓ, siendo cₓ = cos αₓ el coseno del ángulo que forma el eje con el cuadro. Igual para y y z.</p><p><b>Obtención gráfica</b>: se abate un plano coordenado sobre el cuadro. Para el plano XOY, alrededor de la charnela XY:</p><ol><li>El origen O se mueve sobre la perpendicular a XY trazada por O (la proyección del eje z).</li><li>Como el ángulo XOY es recto en el espacio, (O) está en la <b>semicircunferencia de diámetro XY</b> (arco capaz de 90°).</li><li>(O)X y (O)Y son las verdaderas magnitudes de OX y OY.</li><li>cₓ = OX / (O)X y c_y = OY / (O)Y. Haciendo lo mismo con otro plano se obtiene c_z.</li></ol><p><b>Relación fundamental</b>: cₓ² + c_y² + c_z² = 2. Por ello, en la isométrica, con los tres iguales, c = √(2/3) ≈ 0,816.</p><p>Con los coeficientes se construyen <b>escalas axonométricas</b>: una para cada eje, que permiten llevar medidas reales directamente.</p>`,
      svg: s3,
    },
    {
      html: `<h3>10.4 Isométrica, dimétrica y trimétrica</h3><p>Según la forma del triángulo de trazas:</p><table class="tb"><thead><tr><th>Tipo</th><th>Triángulo</th><th>Ángulos entre ejes</th><th>Coeficientes</th></tr></thead><tbody><tr><td>Isométrica</td><td>Equilátero</td><td>120°, 120°, 120°</td><td>Los tres iguales: 0,816</td></tr><tr><td>Dimétrica</td><td>Isósceles</td><td>Dos iguales</td><td>Dos iguales</td></tr><tr><td>Trimétrica</td><td>Escaleno</td><td>Tres distintos</td><td>Tres distintos</td></tr></tbody></table><p>La <b>isométrica</b> es la más usada: los ejes x e y forman 30° con la horizontal y el z es vertical, lo que permite dibujarla con escuadra y cartabón. Su inconveniente es que algunas aristas se superponen (por ejemplo, en un cubo visto exactamente por la diagonal).</p><p>La <b>dimétrica normalizada</b> (UNE-EN ISO 5456-3) usa ejes a 7° y 42° de la horizontal, con coeficientes 1, 1 y 0,5 aproximadamente: da una imagen más natural porque una cara se ve más de frente.</p><p>La <b>trimétrica</b> es la más realista y la menos usada a mano, pero es la vista por defecto de muchos programas de modelado 3D.</p>`,
      svg: s4,
      video: { id: "N0HNN9TwK0I", titulo: "Perspectiva axonométrica: isométrica, dimétrica y trimétrica", canal: "Amor al Arte", vistas: 230687, busqueda: "axonometría isométrica dimétrica trimétrica" },
    },
    {
      html: `<h3>10.5 Escalas, perspectiva isométrica y dibujo isométrico</h3><p>Para la isométrica, la <b>escala isométrica</b> se construye gráficamente: se traza una recta a 45° con la escala real y otra a 30° desde el mismo origen; las verticales trazadas por las divisiones de la primera cortan a la segunda en las divisiones reducidas. La razón es cos 45° / cos 30° = √(2/3) ≈ 0,816.</p><p>En la práctica se distinguen:</p><ul><li><b>Perspectiva isométrica</b>: con reducción (c = 0,816). Es la proyección exacta.</li><li><b>Dibujo isométrico</b>: sin reducción (c = 1). Es la misma figura ampliada un 22,5 %. Es lo que se usa habitualmente en croquis y planos, porque las medidas se llevan directamente.</li></ul><p>En los ejercicios hay que leer bien el enunciado: «perspectiva isométrica» suele pedir la reducción; «dibujo isométrico» o «isométrica sin coeficiente», no.</p><p>Las líneas que no son paralelas a los ejes <b>no</b> se pueden medir directamente: se dibujan por sus extremos, situados por coordenadas.</p>`,
      svg: s5,
      video: { id: "sPO07kT8WpE", titulo: "Coeficiente de reducción en perspectiva isométrica", canal: "Arturo Geometría", vistas: 98658, busqueda: "coeficiente de reducción isométrica" },
    },
    {
      html: `<h3>10.6 Punto y recta</h3><p>Un punto P(x, y, z) se representa llevando sus coordenadas, reducidas, sobre los ejes o paralelas a ellos. Se obtienen además sus <b>proyecciones secundarias</b>:</p><ul><li>p₁ en el plano XOY (proyección horizontal): coordenadas (x, y, 0).</li><li>p₂ en el plano XOZ: (x, 0, z).</li><li>p₃ en el plano YOZ: (0, y, z).</li></ul><p>P y sus proyecciones forman una <b>caja</b> de aristas paralelas a los ejes. Un punto queda determinado por su proyección directa P y una secundaria, por ejemplo p₁: la recta Pp₁ es paralela al eje z.</p><p>Una <b>recta</b> se da por dos puntos o por un punto y su dirección. Sus <b>trazas</b> con los planos coordenados se hallan como en diédrico: por ejemplo, la traza con XOY es el punto en que la recta corta a su proyección secundaria r₁.</p><p>Un <b>plano</b> se da por sus trazas con los planos coordenados, que forman un triángulo con vértices en los ejes. Las trazas de planos paralelos son paralelas.</p>`,
      svg: s6,
      video: { id: "K8befQo2maM", titulo: "Posiciones del punto en sistema axonométrico", canal: "PDD Profesor de Dibujo", vistas: 115903, busqueda: "punto sistema axonométrico" },
    },
    {
      html: `<h3>10.7 Circunferencias en axonometría</h3><p>Una circunferencia contenida en un plano coordenado se proyecta como una <b>elipse</b>:</p><ul><li>El <b>eje mayor</b> es perpendicular a la proyección del eje que no está en ese plano (por ejemplo, para una circunferencia en XOY, perpendicular al eje z) y mide el diámetro real (multiplicado por la escala del dibujo, no por el coeficiente).</li><li>El <b>eje menor</b> está sobre la dirección de ese eje y es menor cuanto más inclinado está el plano respecto del cuadro.</li><li>La elipse es tangente a los lados del cuadrado circunscrito (un rombo en isométrica) en sus puntos medios.</li></ul><p>En isométrica, las tres elipses de las caras de un cubo son iguales. En el dibujo isométrico (sin reducción), el eje mayor mide 1,22 veces el diámetro y el menor 0,71 veces.</p><p>A mano se sustituye a menudo la elipse por el <b>óvalo isométrico</b> de cuatro centros, trazado en el rombo circunscrito: dos centros en los vértices obtusos y dos en las intersecciones de las rectas que los unen con los puntos medios de los lados opuestos. Es una aproximación aceptable en croquis.</p>`,
      svg: s7,
    },
    {
      html: `<h3>10.8 Figuras planas por abatimiento</h3><p>Para dibujar una figura plana en un plano coordenado con exactitud (un hexágono, un polígono irregular, una curva), se usa el <b>abatimiento</b> del plano:</p><ol><li>Se abate el plano coordenado sobre el cuadro, como en el cálculo de coeficientes: (O), (X) = X, (Y) = Y.</li><li>Se dibuja la figura en <b>verdadera magnitud</b> en el plano abatido, referida a los ejes (O)X y (O)Y.</li><li>Se desabate por <b>afinidad</b>: eje de afinidad, la charnela XY; dirección, la de la proyección del eje z (perpendicular a XY); un par de puntos afines, (O) y O.</li></ol><p>Es el mismo procedimiento que en el sistema diédrico, y el resultado es idéntico a situar cada vértice por sus coordenadas reducidas. La ventaja del abatimiento es que permite construir figuras con condiciones geométricas (tangencias, ángulos) directamente en verdadera magnitud.</p><p>Para figuras en planos no coordenados se abate el plano alrededor de una de sus trazas, con su propio triángulo de abatimiento.</p>`,
      svg: s8,
    },
    {
      html: `<h3>10.9 Perspectiva de una pieza a partir de sus vistas</h3><p>Es el ejercicio más frecuente. Procedimiento:</p><ol><li>Se interpreta la pieza a partir de alzado, planta y perfil, y se elige la orientación que muestre más detalles (normalmente el alzado a la izquierda o al frente).</li><li>Se dibuja el <b>prisma envolvente</b> (la caja que contiene la pieza) con sus tres dimensiones sobre los ejes.</li><li>Se van «restando» volúmenes: chaflanes, ranuras, escalones, llevando cada medida paralela a los ejes.</li><li>Las aristas inclinadas se dibujan uniendo sus extremos, situados por coordenadas.</li><li>Los agujeros y redondeos se dibujan con elipses (u óvalos) en las caras correspondientes.</li><li>Se repasan las aristas visibles con trazo grueso; en perspectiva normalmente no se dibujan las ocultas.</li></ol><p>Conviene trabajar con líneas finas de construcción y comprobar al final que cada vista de la pieza dibujada coincide con la dada.</p>`,
      svg: s9,
      video: { id: "7n53T63Koe8", titulo: "Dibujar perspectiva isométrica conocidos el alzado, planta y perfil", canal: "Curso de dibujo", vistas: 400648, busqueda: "isométrica a partir de vistas" },
    },
    {
      html: `<h3>10.10 Secciones en axonometría</h3><p>La sección de un cuerpo por un plano se obtiene en axonometría igual que en diédrico, pero con una sola proyección y apoyándose en las <b>trazas del plano</b> con las caras del cuerpo:</p><ul><li>Si el plano viene dado por tres puntos situados en aristas, se unen los que están en la misma cara.</li><li>Para los demás puntos se prolongan los lados de la sección hasta las aristas o hasta las trazas del plano con los planos de las caras: dos rectas de un mismo plano se cortan siempre.</li><li>Caras paralelas se cortan según rectas paralelas, lo que permite completar la sección rápidamente.</li></ul><p>En el ejemplo, el plano perpendicular a una diagonal del cubo por su centro corta a seis aristas por sus puntos medios: la sección es un <b>hexágono regular</b>.</p><p>La verdadera magnitud de la sección se obtiene abatiendo el plano secante o pasando a diédrico.</p>`,
      svg: s10,
    },
    {
      html: `<h3>10.11 Cilindros, conos y esferas</h3><p>Los cuerpos de revolución se dibujan a partir de las elipses de sus bases y de sus <b>contornos aparentes</b>:</p><ul><li><b>Cilindro</b> de eje paralelo a un eje coordenado: dos elipses iguales y las dos generatrices tangentes a ambas. La mitad posterior de la base oculta no se dibuja (o se dibuja a trazos).</li><li><b>Cono</b>: la elipse de la base y las dos tangentes desde el vértice.</li><li><b>Esfera</b>: en la axonometría ortogonal su contorno es siempre una <b>circunferencia</b> de radio igual al real (multiplicado por la escala). Con reducción, la esfera parece mayor que el cubo que la contiene; por eso en el dibujo isométrico se toma el radio real por 1,22.</li></ul><p>Para ejes no paralelos a los coordenados se sitúan puntos de las bases por coordenadas o con abatimientos.</p>`,
      svg: s11,
    },
    {
      html: `<h3>10.12 Axonometría, diédrico y CAD</h3><p>El sistema diédrico y el axonométrico se complementan:</p><table class="tb"><thead><tr><th></th><th>Diédrico (vistas)</th><th>Axonométrico</th></tr></thead><tbody><tr><td>Proyecciones</td><td>Varias, ortogonales a planos paralelos a las caras</td><td>Una, ortogonal a un plano oblicuo</td></tr><tr><td>Medidas</td><td>Exactas en VM</td><td>Reducidas por los coeficientes</td></tr><tr><td>Lectura</td><td>Exige interpretar</td><td>Intuitiva</td></tr><tr><td>Uso</td><td>Fabricación, acotación</td><td>Montaje, catálogos, explicación</td></tr></tbody></table><p>En los programas de CAD 3D el modelo es único y las vistas diédricas y axonométricas son solo cámaras distintas. La isométrica se obtiene orientando la cámara según la diagonal de un cubo; las vistas explosionadas de montaje suelen ser isométricas.</p><p>La norma <b>UNE-EN ISO 5456-3</b> regula las representaciones axonométricas en el dibujo técnico.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Calcula el coeficiente de reducción de la isométrica.", pasos: ["cₓ = c_y = c_z = c.", "3c² = 2 → c = √(2/3) ≈ 0,816."], resultado: "≈ 0,816." },
    { enunciado: "En una dimétrica, cₓ = c_y = 0,94. ¿Cuánto vale c_z?", pasos: ["c_z² = 2 − 2 · 0,94² = 2 − 1,767 = 0,233.", "c_z ≈ 0,48."], resultado: "≈ 0,48." },
    { enunciado: "Una arista de 50 mm en perspectiva isométrica, ¿cuánto mide en el papel?", pasos: ["50 · 0,816 ≈ 40,8 mm."], resultado: "≈ 40,8 mm." },
    { enunciado: "Una circunferencia de 40 mm de diámetro en el plano XOY, en dibujo isométrico (sin reducción). ¿Cuánto miden los ejes de la elipse?", pasos: ["Eje mayor: 40 · 1,22 ≈ 49 mm.", "Eje menor: 40 · 0,71 ≈ 28 mm."], resultado: "≈ 49 mm y 28 mm." },
    { enunciado: "Un triángulo de trazas tiene ángulos de 50°, 60° y 70°. ¿Qué tipo de axonometría define?", pasos: ["Es acutángulo y escaleno."], resultado: "Trimétrica." },
    { enunciado: "¿Puede un triángulo de trazas tener un ángulo de 95°?", pasos: ["Debe ser acutángulo para que el ortocentro quede dentro."], resultado: "No." },
  ],
  errores: [
    "Aplicar el coeficiente de reducción a líneas que no son paralelas a los ejes.",
    "Confundir perspectiva isométrica (con reducción) y dibujo isométrico (sin reducción).",
    "Dibujar las elipses con el eje mayor paralelo a un eje coordenado en lugar de perpendicular al eje que falta.",
    "Usar un triángulo de trazas obtusángulo.",
    "Olvidar que la esfera se ve siempre como una circunferencia.",
    "Medir ángulos reales sobre la axonometría: los ángulos se deforman.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define triángulo de trazas.", sol: "El que forman los puntos de corte de los ejes con el plano del cuadro." },
    { nivel: "básico", q: "¿Qué punto notable del triángulo de trazas es el origen O?", sol: "El ortocentro." },
    { nivel: "básico", q: "¿Qué tipo de triángulo de trazas tiene la isométrica?", sol: "Equilátero." },
    { nivel: "básico", q: "Calcula la reducción de un segmento de 70 mm paralelo a un eje en perspectiva isométrica.", sol: "70 · 0,816 ≈ 57,2 mm." },
    { nivel: "básico", q: "Escribe la relación entre los coeficientes de reducción.", sol: "cₓ² + c_y² + c_z² = 2." },
    { nivel: "básico", q: "Construye una escala isométrica de 0 a 60 mm.", sol: "Recta a 45° con la escala real; otra a 30°; verticales por las divisiones." },
    { nivel: "básico", q: "Dibuja en isométrica un cubo de 40 mm sin coeficiente de reducción.", sol: "Ejes a 30°, 30° y vertical; aristas de 40 mm." },
    { nivel: "básico", q: "Sitúa el punto P(30, 20, 40) en dibujo isométrico.", sol: "30 sobre x, paralela a y de 20, paralela a z de 40." },
    { nivel: "básico", q: "¿Qué ángulo forman entre sí las proyecciones de los ejes en isométrica?", sol: "120°." },
    { nivel: "básico", q: "¿Cómo se proyecta una esfera en axonometría ortogonal?", sol: "Como una circunferencia." },
    { nivel: "básico", q: "Diferencia dimétrica y trimétrica.", sol: "Dimétrica: dos ejes con igual coeficiente; trimétrica: los tres distintos." },
    { nivel: "básico", q: "Dibuja una circunferencia de 30 mm de diámetro en la cara superior de un cubo isométrico.", sol: "Elipse inscrita en el rombo; eje mayor horizontal." },
    { nivel: "medio", q: "Dado un triángulo de trazas, dibuja los ejes.", sol: "Alturas del triángulo; su intersección es O." },
    { nivel: "medio", q: "Obtén gráficamente cₓ y c_y abatiendo el plano XOY.", sol: "(O) en la perpendicular a XY por O y en la semicircunferencia de diámetro XY; cₓ = OX/(O)X." },
    { nivel: "medio", q: "Calcula c_z en una dimétrica con cₓ = c_y = 0,9.", sol: "c_z² = 2 − 1,62 = 0,38 → c_z ≈ 0,62." },
    { nivel: "medio", q: "Dibuja un hexágono regular de 20 mm de lado en el plano XOY de una trimétrica dada.", sol: "Abatir XOY; hexágono en VM; desabatir por afinidad (eje XY, dirección z)." },
    { nivel: "medio", q: "Dibuja en isométrica una pieza dada por alzado y planta.", sol: "Prisma envolvente; restar volúmenes; aristas inclinadas por coordenadas." },
    { nivel: "medio", q: "Dibuja un cilindro de 30 mm de diámetro y 50 mm de altura con eje vertical en dibujo isométrico.", sol: "Dos elipses (49 × 28 mm aprox.) separadas 50 mm y tangentes verticales." },
    { nivel: "medio", q: "Halla las trazas de una recta con los planos coordenados en axonometría.", sol: "Con sus proyecciones secundarias: la traza con XOY es el corte de r con r₁." },
    { nivel: "medio", q: "Halla la sección de un cubo por el plano que pasa por los puntos medios de tres aristas concurrentes.", sol: "Triángulo equilátero que une esos puntos." },
    { nivel: "medio", q: "Dibuja la escala dimétrica para c = 0,5 sobre el eje y.", sol: "Recta auxiliar; segmento real y su mitad por Tales." },
    { nivel: "medio", q: "Explica por qué el triángulo de trazas debe ser acutángulo.", sol: "Su ortocentro O debe ser interior para que los ejes formen ángulos mayores de 90° y el triedro sea trirrectángulo." },
    { nivel: "avanzado", q: "Demuestra que cₓ² + c_y² + c_z² = 2.", sol: "cᵢ = sen θᵢ, con θᵢ el ángulo del eje con la normal al cuadro. Como cos²θₓ + cos²θ_y + cos²θ_z = 1, la suma de senos al cuadrado es 3 − 1 = 2." },
    { nivel: "avanzado", q: "Halla la sección de un prisma hexagonal por un plano dado por sus trazas en axonometría.", sol: "Intersecar el plano con cada arista mediante planos auxiliares o con las trazas en los planos de las caras; unir en orden." },
    { nivel: "avanzado", q: "Dibuja la perspectiva isométrica de una pieza con un agujero cilíndrico pasante.", sol: "Elipses en ambas caras; tangentes visibles en el interior; parte del fondo visible según la profundidad." },
    { nivel: "avanzado", q: "Obtén la verdadera magnitud de una sección en axonometría por abatimiento.", sol: "Abatir el plano secante alrededor de una traza: afinidad entre la sección y su abatimiento." },
    { nivel: "avanzado", q: "Dibuja una dimétrica normalizada (7°/42°) de un cubo y compara con la isométrica.", sol: "Ejes a 7° y 42°; coeficientes 1 en x y z y 0,5 en el eje a 42°; una cara se ve casi de frente." },
    { nivel: "avanzado", q: "Determina el ángulo que forma cada eje con el cuadro en la isométrica.", sol: "cos α = 0,816 → α ≈ 35,26°." },
    { nivel: "avanzado", q: "Dibuja un cono de revolución de eje vertical en isométrica.", sol: "Elipse de la base; vértice sobre el eje z; tangentes desde el vértice a la elipse." },
    { nivel: "avanzado", q: "¿Por qué una esfera dibujada en dibujo isométrico debe tener radio 1,22 R?", sol: "Porque el dibujo isométrico amplía todas las medidas por 1/0,816 ≈ 1,22 respecto de la proyección exacta, en la que el contorno de la esfera mide R." },
  ],
  quiz: reparte([
    { q: "La axonometría ortogonal usa proyección…", o: ["cónica", "cilíndrica ortogonal", "cilíndrica oblicua", "central"], a: 1, e: "Rayos perpendiculares al cuadro." },
    { q: "El origen O es del triángulo de trazas el…", o: ["baricentro", "ortocentro", "circuncentro", "incentro"], a: 1, e: "Los ejes son alturas." },
    { q: "El triángulo de trazas es siempre…", o: ["rectángulo", "acutángulo", "obtusángulo", "equilátero"], a: 1, e: "O interior." },
    { q: "cₓ² + c_y² + c_z² =", o: ["1", "2", "3", "√2"], a: 1, e: "Relación fundamental." },
    { q: "El coeficiente isométrico es…", o: ["0,5", "0,816", "0,707", "1"], a: 1, e: "√(2/3)." },
    { q: "En isométrica, los ejes forman entre sí…", o: ["90°", "120°", "135°", "60°"], a: 1, e: "Iguales." },
    { q: "Dimétrica: dos coeficientes…", o: ["distintos", "iguales", "nulos", "mayores que 1"], a: 1, e: "Triángulo isósceles." },
    { q: "El dibujo isométrico se hace…", o: ["con reducción 0,816", "sin reducción", "con reducción 0,5", "en VM de ángulos"], a: 1, e: "Escala 1 en los ejes." },
    { q: "Al abatir el plano XOY, (O) está en la semicircunferencia de diámetro…", o: ["XZ", "XY", "YZ", "OZ"], a: 1, e: "Ángulo recto en (O)." },
    { q: "Una circunferencia en XOY se ve como elipse con eje mayor…", o: ["paralelo a x", "perpendicular a z", "paralelo a z", "paralelo a y"], a: 1, e: "Perpendicular al eje que falta." },
    { q: "Una esfera en axonometría ortogonal se ve como…", o: ["elipse", "circunferencia", "óvalo", "rombo"], a: 1, e: "Contorno circular." },
    { q: "Las rectas paralelas en el espacio, en axonometría son…", o: ["concurrentes", "paralelas", "perpendiculares", "curvas"], a: 1, e: "Proyección cilíndrica." },
    { q: "La escala isométrica se construye con rectas a…", o: ["30° y 60°", "45° y 30°", "45° y 60°", "90° y 30°"], a: 1, e: "cos 45/cos 30." },
    { q: "Las líneas no paralelas a los ejes se dibujan…", o: ["con el coeficiente", "uniendo sus extremos situados por coordenadas", "en VM", "no se dibujan"], a: 1, e: "No se reducen igual." },
    { q: "Para dibujar un hexágono en un plano coordenado con exactitud se usa…", o: ["un giro", "el abatimiento y la afinidad", "la homología", "la inversión"], a: 1, e: "Eje XY, dirección z." },
    { q: "La sección de un cubo por el plano perpendicular a una diagonal por el centro es un…", o: ["triángulo", "hexágono regular", "cuadrado", "pentágono"], a: 1, e: "Puntos medios de seis aristas." },
    { q: "El óvalo isométrico se traza con…", o: ["2 centros", "4 centros", "6 centros", "ninguno"], a: 1, e: "Aproximación de la elipse." },
    { q: "En dibujo isométrico, el eje mayor de la elipse mide … el diámetro.", o: ["1", "1,22 veces", "0,816 veces", "0,5 veces"], a: 1, e: "Ampliación 1/0,816." },
    { q: "La norma de la representación axonométrica es…", o: ["UNE 1032", "UNE-EN ISO 5456-3", "ISO 128", "UNE 1039"], a: 1, e: "Proyecciones axonométricas." },
    { q: "En axonometría, los ángulos reales…", o: ["se conservan", "se deforman", "se duplican", "son siempre 90°"], a: 1, e: "Salvo casos particulares." },
  ]),
  examen: reparte([
    { q: "Arista de 60 mm en perspectiva isométrica:", o: ["≈ 49 mm", "60 mm", "30 mm", "≈ 73 mm"], a: 0, e: "60 · 0,816." },
    { q: "Dimétrica con cₓ = c_z = 0,94: c_y ≈", o: ["0,48", "0,94", "0,82", "0,5"], a: 0, e: "√(2 − 1,767)." },
    { q: "Triángulo de trazas equilátero:", o: ["isométrica", "dimétrica", "trimétrica", "caballera"], a: 0, e: "Ejes iguales." },
    { q: "Los ejes en la isométrica forman con la horizontal…", o: ["30°, 30° y 90°", "45°", "15° y 75°", "60°"], a: 0, e: "Escuadra y cartabón." },
    { q: "Para hallar cₓ gráficamente se abate…", o: ["un plano coordenado que contenga a x", "el cuadro", "la esfera", "el eje z"], a: 0, e: "XOY o XOZ." },
    { q: "En dibujo isométrico, una esfera de R = 20 mm se dibuja con radio…", o: ["≈ 24,5 mm", "20 mm", "≈ 16,3 mm", "40 mm"], a: 0, e: "20 · 1,22." },
    { q: "El ángulo de cada eje con el cuadro en isométrica:", o: ["≈ 35,26°", "45°", "30°", "60°"], a: 0, e: "arccos 0,816." },
    { q: "Elipse de una circunferencia en el plano XOZ: eje mayor…", o: ["perpendicular a y", "paralelo a y", "paralelo a z", "paralelo a x"], a: 0, e: "Perpendicular al eje que falta." },
  ]),
  feynman: ["Por qué el origen es el ortocentro del triángulo de trazas", "Qué significa un coeficiente de reducción y cómo se obtiene", "En qué se diferencian la perspectiva isométrica y el dibujo isométrico", "Cómo se dibuja una circunferencia en una cara de un cubo isométrico", "Cómo se usa el abatimiento para dibujar figuras planas"],
  glosario: [
    ["Axonometría ortogonal", "Proyección cilíndrica ortogonal sobre un plano oblicuo a los tres ejes."],
    ["Plano del cuadro", "Plano sobre el que se proyecta."],
    ["Triedro de referencia", "Tres planos perpendiculares que definen los ejes x, y, z."],
    ["Triángulo de trazas", "Triángulo formado por los cortes de los ejes con el cuadro."],
    ["Coeficiente de reducción", "Razón entre la longitud proyectada y la real de un segmento paralelo a un eje."],
    ["Isométrica", "Axonometría con los tres coeficientes iguales."],
    ["Dimétrica", "Axonometría con dos coeficientes iguales."],
    ["Trimétrica", "Axonometría con los tres coeficientes distintos."],
    ["Escala axonométrica", "Escala gráfica reducida por el coeficiente de un eje."],
    ["Dibujo isométrico", "Isométrica sin coeficiente de reducción."],
    ["Proyección secundaria", "Proyección de un punto sobre un plano coordenado."],
    ["Óvalo isométrico", "Curva de cuatro centros que aproxima la elipse isométrica."],
    ["Abatimiento", "Giro de un plano hasta el cuadro para ver figuras en VM."],
    ["Contorno aparente", "Línea que limita la imagen de un cuerpo."],
  ],
  situacion: {
    titulo: "Instrucciones de montaje",
    reto: "Una empresa de muebles os encarga las instrucciones de montaje de una estantería sencilla. Deben entenderse sin palabras, con dibujos isométricos de las piezas y de los pasos de montaje.",
    pasos: [
      "Dibujad las vistas diédricas acotadas de las piezas (laterales, baldas, trasera).",
      "Pasad cada pieza a dibujo isométrico, con los taladros como elipses.",
      "Preparad una vista explosionada isométrica con flechas de montaje.",
      "Comparad una de las piezas en isométrica y en dimétrica normalizada.",
      "Maquetad las instrucciones en un A3 con numeración de pasos.",
    ],
    producto: "Hoja de instrucciones de montaje en formato A3.",
    evaluacion: [
      "Las isométricas son correctas y proporcionadas.",
      "Las elipses de los taladros están bien orientadas.",
      "La vista explosionada se entiende sin texto.",
      "Presentación clara y normalizada.",
    ],
  },
  figura: fig("Axonometría ortogonal", "Resumen del tema", [
    ["Fundamento", ["proyección ortogonal", "plano del cuadro", "triángulo de trazas", "O ortocentro"], "var(--pen)"],
    ["Reducción", ["c = cos α", "Σc² = 2", "iso: 0,816", "escalas gráficas"], "var(--red)"],
    ["Tipos", ["isométrica 120°", "dimétrica", "trimétrica", "dibujo isométrico"], "var(--leaf)"],
    ["Dibujo", ["puntos por coordenadas", "elipses ⊥ eje que falta", "abatimiento y afinidad", "secciones"], "var(--inf)"],
  ]),
  video: { id: "ZQ1Rz84igu4", titulo: "Coeficiente de reducción en perspectiva axonométrica trimétrica", canal: "Arturo Geometría", vistas: 71076, busqueda: "coeficientes de reducción axonometría" },
  mapa: mapa("AXONOMETRÍA ORTOGONAL", "var(--bac)", [
    ["Triángulo de trazas", "alturas = ejes · O ortocentro", "var(--pen)"],
    ["Coeficientes", "abatimiento · Σc² = 2", "var(--red)"],
    ["Tipos", "iso · dimé · trimé", "var(--leaf)"],
    ["Aplicaciones", "piezas · elipses · secciones", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Triángulo de trazas", "Acutángulo; O ortocentro."],
    ["Ejes", "Alturas del triángulo de trazas."],
    ["Coeficiente", "c = cos del ángulo del eje con el cuadro."],
    ["Relación", "cₓ² + c_y² + c_z² = 2."],
    ["Isométrica", "c = 0,816; 120°."],
    ["Dibujo isométrico", "Sin reducción (×1,22)."],
    ["(O) abatido", "Semicircunferencia de diámetro XY."],
    ["Escala isométrica", "45° → 30°."],
    ["Elipse en XOY", "Eje mayor ⊥ eje z."],
    ["Esfera", "Circunferencia."],
    ["Figura plana", "Abatimiento + afinidad."],
    ["Norma", "UNE-EN ISO 5456-3."],
  ],
  familias: ["Buscad en casa instrucciones de montaje y comprobad si son isométricas.", "Dibujad juntos un dado en isométrica sobre papel de puntos.", "Mirad un cubo por la diagonal: ¿qué figura forman las aristas?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema axonométrico ortogonal; triángulo de trazas; coeficientes de reducción; axonometrías isométrica, dimétrica y trimétrica; representación de figuras planas, circunferencias y cuerpos; perspectiva de piezas a partir de vistas; secciones (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Papel isométrico de puntos para croquis rápidos.", "Comparar vistas isométrica y trimétrica en un programa CAD.", "Construir el triedro con cartón y un plano transparente como cuadro.", "Relación con Tecnología: instrucciones de montaje y vistas explosionadas."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Proyección axonométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Proyecci%C3%B3n_axonom%C3%A9trica" },
    { t: "Perspectiva isométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Perspectiva_isom%C3%A9trica" },
  ],
  revisado: "2026-11-21",
};
