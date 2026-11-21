// Dibujo Técnico II 2º Bachillerato · Tema 4. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, pt, paso, recto, marca, curva, polar, corteCC, corteRR, corteRC, mid, dist, unit, add, sub, mul, pie, simR, tx, dash, elipsePts, hiperPts, paraPts } = G;

const larga = (A, B, c = "var(--red)", w = 2.2, extra = "") => recta(A, B, 400, c, w, extra);
const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const perp = (u) => [u[1], -u[0]];
const ejeL = 'stroke-dasharray="10 3 2 3"';

// Elipse base de los dibujos.
const EL = (() => { const C = [118, 92], a = 74, b = 46, c = Math.sqrt(a * a - b * b); return { C, a, b, c, F: [C[0] + c, C[1]], F1: [C[0] - c, C[1]], P: (t) => [C[0] + a * Math.cos(t), C[1] - b * Math.sin(t)] }; })();
const elipse = (E = EL, col = "var(--red)") => curva(elipsePts(E.C, E.a, E.b), col, 2.6, true);
const ejes = (E = EL) => `${seg([E.C[0] - E.a - 10, E.C[1]], [E.C[0] + E.a + 10, E.C[1]], "var(--muted)", 1.1, ejeL)}${seg([E.C[0], E.C[1] - E.b - 10], [E.C[0], E.C[1] + E.b + 10], "var(--muted)", 1.1, ejeL)}`;
const focos = (E = EL) => `${pt(E.F, "F", -2, 14, "var(--pen)")}${pt(E.F1, "F′", -6, 14, "var(--pen)")}`;

// 4.1 Secciones del cono.
const s1 = (() => {
  const V = [130, 16], A = [40, 168], B = [220, 168];
  const cortes = [[[60, 116], [200, 82], "var(--red)", "elipse"], [[150, 168], add([150, 168], mul(sub(V, B), 0.75)), "var(--pen)", "parábola"], [[96, 168], [96, 60], "var(--leaf)", "hipérbola"]];
  return dib("Secciones planas de un cono: según el ángulo del plano secante se obtiene una elipse, una parábola o una hipérbola", `<path d="M${A[0]} ${A[1]} L ${V[0]} ${V[1]} L ${B[0]} ${B[1]}" fill="var(--muted)" fill-opacity=".08" stroke="var(--ink)" stroke-width="2"/>${seg(A, B, "var(--ink)", 1.4, dash)}${seg(V, [130, 168], "var(--muted)", 1.1, ejeL)}
  ${cortes.map(([P, Q, c]) => seg(P, Q, c, 2.6)).join("")}${tx(214, 76, "elipse", { s: 10, b: 1, a: "end", c: "var(--red)" })}${tx(184, 140, "parábola", { s: 10, b: 1, a: "start", c: "var(--pen)" })}${tx(92, 56, "hipérbola", { s: 10, b: 1, a: "end", c: "var(--leaf)" })}${pt(V, "V", 6, 4)}`);
})();

// 4.2 Elipse: definición.
const s2 = (() => {
  const E = EL, P = E.P(1.1);
  return dib("Elipse: la suma de distancias de cualquier punto P a los focos F y F′ es constante e igual al eje mayor 2a", `${ejes()}${elipse()}${circ(E.C, E.a, "var(--muted)", 1, dash)}${seg(P, E.F, "var(--pen)", 1.8)}${seg(P, E.F1, "var(--leaf)", 1.8)}${focos()}${pt(P, "P", 4, -6)}${pt([E.C[0] - E.a, E.C[1]], "A", -14, -4)}${pt([E.C[0] + E.a, E.C[1]], "B", 4, -4)}${pt([E.C[0], E.C[1] - E.b], "C", 4, -6)}${pt([E.C[0], E.C[1] + E.b], "D", 4, 14)}
  ${tx(250, 172, "PF + PF′ = 2a", { s: 11, b: 1, a: "end", c: "var(--red)" })}${tx(10, 172, "c² = a² − b²", { s: 11, b: 1, a: "start", c: "var(--pen)" })}`);
})();

// 4.3 Trazado por radios vectores.
const s3 = (() => {
  const E = EL, A = [E.C[0] - E.a, E.C[1]], B = [E.C[0] + E.a, E.C[1]], Ns = [E.C[0] - 22, E.C[0] + 34];
  let g = "";
  Ns.forEach((x, i) => {
    const N = [x, E.C[1]], r1 = dist(A, N), r2 = dist(N, B);
    [[E.F1, r1, E.F, r2], [E.F1, r2, E.F, r1]].forEach(([P1, ra, P2, rb]) => corteCC(P1, ra, P2, rb).forEach((X) => { g += marca(P1, X, 16, "var(--leaf)") + marca(P2, X, 16, "var(--pen)") + pt(X, "", 0, 0, "var(--red)"); }));
    g += pt(N, `${i + 1}`, -3, 14, "var(--muted)");
  });
  return dib("Trazado de la elipse por radios vectores: con un punto N entre los focos, arcos de radios AN y NB desde F′ y F se cortan en cuatro puntos de la curva", `${ejes()}${curva(elipsePts(EL.C, EL.a, EL.b), "var(--red)", 1.2, true)}${g}${focos()}${pt(A, "A", -14, -4)}${pt(B, "B", 4, -4)}${tx(130, 172, "radios AN y NB desde F′ y F", { s: 10, b: 1, c: "var(--muted)" })}`);
})();

// 4.4 Tangente y normal en un punto.
const s4 = (() => {
  const E = EL, P = E.P(1.0), u1 = unit(P, E.F), u2 = unit(P, E.F1), n = unit([0, 0], add(u1, u2)), t = perp(n), F1s = add(P, mul(unit(P, E.F1), -dist(P, E.F)));
  return dib("La tangente a la elipse en P es la bisectriz exterior del ángulo de los radios vectores y la normal es la bisectriz interior", clip(`${ejes()}${elipse()}${seg(E.F, P, "var(--pen)", 1.5)}${seg(E.F1, add(P, mul(unit(E.F1, P), 30)), "var(--leaf)", 1.5)}${larga(P, add(P, t), "var(--red)", 2.4)}${seg(P, add(P, mul(n, 60)), "var(--pen)", 1.4, dash)}${focos()}${pt(P, "P", 6, -8)}`, "cl44") + tx(250, 172, "t: bisectriz exterior", { s: 10.5, b: 1, a: "end", c: "var(--red)" }) + tx(10, 22, "n: bisectriz interior", { s: 10.5, b: 1, a: "start", c: "var(--pen)" }));
})();

// 4.5 Tangentes desde un punto exterior (circunferencia focal).
const s5 = (() => {
  const E = { ...EL }, Q = [222, 32], rQ = dist(Q, E.F), [M1, M2] = corteCC(E.F1, 2 * E.a, Q, rQ);
  const tang = [M1, M2].map((M) => { const H = mid(E.F, M), T = corteRR(E.F1, M, Q, H); return [M, T]; });
  return dib("Tangentes a la elipse desde un punto exterior Q: la circunferencia de centro Q que pasa por F corta a la focal de F′ en M; la mediatriz de FM es la tangente", clip(`${ejes()}${elipse()}${circ(E.F1, 2 * E.a, "var(--leaf)", 1.2, dash)}${circ(Q, rQ, "var(--muted)", 1.2, dash)}${tang.map(([M, T]) => `${seg(E.F, M, "var(--muted)", 1)}${seg(E.F1, M, "var(--leaf)", 1)}${larga(Q, T, "var(--red)", 2.2)}${pt(M, "", 0, 0, "var(--leaf)")}${pt(T, "", 0, 0, "var(--red)")}`).join("")}${focos()}${pt(Q, "Q", 6, 4)}`, "cl45") + tx(10, 172, "focal de F′: radio 2a", { s: 10, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 4.6 Hipérbola: definición y asíntotas.
const H = (() => { const C = [130, 92], a = 30, b = 28, c = Math.sqrt(a * a + b * b); return { C, a, b, c, F: [C[0] + c, C[1]], F1: [C[0] - c, C[1]] }; })();
const hiper = (col = "var(--red)") => curva(hiperPts(H.C, H.a, H.b, 1, 1.9), col, 2.6) + curva(hiperPts(H.C, H.a, H.b, -1, 1.9), col, 2.6);
const s6 = (() => {
  const P = [H.C[0] + H.a * Math.cosh(0.9), H.C[1] - H.b * Math.sinh(0.9)], k = 120;
  return dib("Hipérbola: la diferencia de distancias de cualquier punto a los focos es constante e igual a 2a; las asíntotas son las diagonales del rectángulo de lados 2a y 2b", clip(`${seg([6, H.C[1]], [254, H.C[1]], "var(--muted)", 1.1, ejeL)}${G.poli([[H.C[0] - H.a, H.C[1] - H.b], [H.C[0] + H.a, H.C[1] - H.b], [H.C[0] + H.a, H.C[1] + H.b], [H.C[0] - H.a, H.C[1] + H.b]], "var(--muted)", 1, "none")}${larga(H.C, add(H.C, [H.a, -H.b]), "var(--leaf)", 1.3, dash)}${larga(H.C, add(H.C, [H.a, H.b]), "var(--leaf)", 1.3, dash)}${hiper()}${seg(P, H.F, "var(--pen)", 1.6)}${seg(P, H.F1, "var(--pen)", 1.6)}
  ${pt(H.F, "F", -2, 16, "var(--pen)")}${pt(H.F1, "F′", -6, 16, "var(--pen)")}${pt(P, "P", 6, 0)}`, "cl46") + tx(250, 172, "|PF′ − PF| = 2a", { s: 11, b: 1, a: "end", c: "var(--red)" }) + tx(10, 172, "c² = a² + b²", { s: 11, b: 1, a: "start", c: "var(--pen)" }));
})();

// 4.7 Tangente a la hipérbola en un punto.
const s7 = (() => {
  const P = [H.C[0] + H.a * Math.cosh(0.7), H.C[1] - H.b * Math.sinh(0.7)], u1 = unit(P, H.F), u2 = unit(P, H.F1), t = add(u1, u2);
  return dib("La tangente a la hipérbola en P es la bisectriz interior del ángulo que forman los radios vectores", clip(`${seg([6, H.C[1]], [254, H.C[1]], "var(--muted)", 1.1, ejeL)}${hiper()}${seg(P, H.F, "var(--pen)", 1.6)}${seg(P, H.F1, "var(--pen)", 1.6)}${larga(P, add(P, t), "var(--red)", 2.4)}${pt(H.F, "F", -2, 16, "var(--pen)")}${pt(H.F1, "F′", -6, 16, "var(--pen)")}${pt(P, "P", 6, -6)}`, "cl47") + tx(250, 22, "t: bisectriz interior", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 4.8 Parábola: definición.
const PA = (() => { const V = [92, 92], p = 32; return { V, p, F: [V[0] + p / 2, V[1]], d: V[0] - p / 2 }; })();
const parab = (col = "var(--red)") => curva(paraPts(PA.V, PA.p, 84), col, 2.6);
const s8 = (() => {
  const y = -48, P = [PA.V[0] + (y * y) / (2 * PA.p), PA.V[1] + y], D = [PA.d, P[1]];
  return dib("Parábola: cada punto P equidista del foco F y de la directriz d", clip(`${seg([PA.d, 6], [PA.d, 174], "var(--ink)", 2)}${seg([PA.d, PA.V[1]], [254, PA.V[1]], "var(--muted)", 1.1, ejeL)}${parab()}${seg(P, PA.F, "var(--pen)", 1.8)}${seg(P, D, "var(--pen)", 1.8)}${recto(D, P, [PA.d, 0], 6)}
  ${pt(PA.F, "F", 0, 16, "var(--pen)")}${pt(PA.V, "V", -12, 16)}${pt(P, "P", 6, -4)}${pt(D, "D", -14, 4)}${tx(PA.d - 6, 172, "d", { s: 11, b: 1, a: "end" })}`, "cl48") + tx(250, 172, "PF = PD · VF = p/2", { s: 11, b: 1, a: "end", c: "var(--red)" }));
})();

// 4.9 Tangentes a la parábola desde un punto exterior.
const s9 = (() => {
  const Q = [70, 30], rQ = dist(Q, PA.F), [M1, M2] = corteRC([PA.d, 0], [PA.d, 180], Q, rQ);
  const tang = [M1, M2].map((M) => { const T = corteRR(M, add(M, [1, 0]), Q, mid(PA.F, M)); return [M, T]; });
  return dib("Tangentes a la parábola desde Q: la circunferencia de centro Q que pasa por F corta a la directriz en M₁ y M₂; las mediatrices de FM son las tangentes", clip(`${seg([PA.d, 6], [PA.d, 174], "var(--ink)", 2)}${seg([PA.d, PA.V[1]], [254, PA.V[1]], "var(--muted)", 1.1, ejeL)}${parab()}${circ(Q, rQ, "var(--muted)", 1.2, dash)}${tang.map(([M, T]) => `${seg(PA.F, M, "var(--muted)", 1)}${seg(M, T, "var(--leaf)", 1.1, dash)}${larga(Q, T, "var(--pen)", 2)}${pt(M, "", 0, 0, "var(--leaf)")}${pt(T, "", 0, 0, "var(--red)")}`).join("")}
  ${pt(PA.F, "F", 0, 16, "var(--pen)")}${pt(Q, "Q", 6, -2)}`, "cl49") + tx(250, 172, "tangente = mediatriz de FM", { s: 10, b: 1, a: "end", c: "var(--pen)" }));
})();

// 4.10 Circunferencia principal como podaria.
const s10 = (() => {
  const E = EL, P = E.P(0.8), u1 = unit(P, E.F), u2 = unit(P, E.F1), t = perp(unit([0, 0], add(u1, u2))), Hf = pie(E.F, P, add(P, t)), Hf1 = pie(E.F1, P, add(P, t));
  return dib("El pie de la perpendicular trazada desde un foco a cualquier tangente está en la circunferencia principal", clip(`${ejes()}${circ(E.C, E.a, "var(--leaf)", 1.6, dash)}${elipse()}${larga(P, add(P, t), "var(--pen)", 2)}${seg(E.F, Hf, "var(--muted)", 1.2)}${seg(E.F1, Hf1, "var(--muted)", 1.2)}${G.recto(Hf, E.F, P, 6)}${focos()}${pt(P, "P", 4, 12)}${pt(Hf, "H", 8, 12, "var(--leaf)")}${pt(Hf1, "H′", -6, -8, "var(--leaf)")}`, "cl410") + tx(10, 172, "H y H′ en la circunferencia principal", { s: 10, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 4.11 Intersección de recta y elipse.
const s11 = (() => {
  const E = EL, P0 = [20, 40], d = unit(P0, [240, 150]);
  // (x − C)²/a² + (y − C)²/b² = 1 con x = P0 + s d.
  const px = P0[0] - E.C[0], py = P0[1] - E.C[1], qa = (d[0] ** 2) / E.a ** 2 + (d[1] ** 2) / E.b ** 2, qb = 2 * ((px * d[0]) / E.a ** 2 + (py * d[1]) / E.b ** 2), qc = px * px / E.a ** 2 + py * py / E.b ** 2 - 1, D = Math.sqrt(qb * qb - 4 * qa * qc);
  const X = [(-qb - D) / (2 * qa), (-qb + D) / (2 * qa)].map((s) => add(P0, mul(d, s))), F2 = simR(E.F, P0, add(P0, d));
  return dib("Intersección de una recta con la elipse: los puntos buscados son centros de circunferencias que pasan por F y por su simétrico F₁ respecto de la recta y son tangentes a la circunferencia focal de F′", clip(`${elipse()}${larga(P0, add(P0, d), "var(--ink)", 2)}${circ(E.F1, 2 * E.a, "var(--leaf)", 1.2, dash)}${seg(E.F, F2, "var(--muted)", 1.1, dash)}${X.map((x) => circ(x, dist(x, E.F), "var(--pen)", 1.3)).join("")}${X.map((x) => pt(x, "", 0, 0, "var(--red)")).join("")}${focos()}${pt(F2, "F₁", 4, 14, "var(--muted)")}`, "cl411") + tx(250, 22, "problema PPC (Apolonio)", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }));
})();

// 4.12 Propiedad focal de la parábola.
const s12 = (() => {
  const ys = [-60, -34, 26, 52];
  const rayos = ys.map((y) => { const P = [PA.V[0] + (y * y) / (2 * PA.p), PA.V[1] + y]; return `${seg([254, P[1]], P, "var(--leaf)", 1.5)}${seg(P, PA.F, "var(--red)", 1.5)}${pt(P, "", 0, 0)}`; }).join("");
  return dib("Propiedad focal de la parábola: los rayos paralelos al eje se reflejan en la curva y pasan por el foco; por eso las antenas parabólicas y los faros tienen esa forma", clip(`${seg([PA.d, PA.V[1]], [254, PA.V[1]], "var(--muted)", 1.1, ejeL)}${parab("var(--ink)")}${rayos}${pt(PA.F, "F", -4, 16, "var(--red)")}`, "cl412") + tx(250, 172, "rayos ∥ eje → foco", { s: 11, b: 1, a: "end", c: "var(--red)" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Curvas cónicas: tangentes e intersecciones",
  minutos: 120,
  objetivos: [
    "Definir la elipse, la hipérbola y la parábola como lugares geométricos y como secciones del cono",
    "Reconocer sus elementos: ejes, focos, vértices, directrices, circunferencias principal y focales",
    "Trazar cónicas por puntos a partir de su definición",
    "Construir la tangente y la normal en un punto de la curva",
    "Trazar las tangentes desde un punto exterior con las circunferencias focales",
    "Hallar la intersección de una recta con una cónica reduciéndola a un problema de tangencias",
  ],
  claves: ["elipse", "hipérbola", "parábola", "foco", "directriz", "radio vector", "circunferencia principal", "circunferencia focal", "asíntota", "excentricidad"],
  lectura: {
    titulo: "Las curvas del universo",
    html: `<p>En 1609 Johannes Kepler llegó a una conclusión que le costó años de cálculos: Marte no gira alrededor del Sol en una circunferencia, sino en una <b>elipse</b>, y el Sol no está en el centro, sino en uno de sus focos. Medio siglo después, Newton demostró que cualquier cuerpo que se mueva atraído por la gravedad describe una cónica: una elipse si queda atrapado, una <b>parábola</b> o una <b>hipérbola</b> si escapa.</p>
    <p>Pero estas curvas no son solo cosa de astrónomos. Las antenas de televisión por satélite y los faros de los coches son parabólicos porque reflejan todos los rayos hacia un mismo punto. En las salas de susurros elípticas, lo que se dice en un foco se oye en el otro. Y las torres de refrigeración de las centrales tienen forma de hiperboloide porque se pueden construir con vigas rectas.</p>
    <p>Las tres curvas se obtienen cortando un cono con un plano, y las tres tienen definiciones sencillas basadas en distancias. En este tema aprenderás a dibujarlas con precisión, a trazar sus tangentes y a encontrar dónde las corta una recta, con métodos que vuelven a usar la potencia y las tangencias de los temas anteriores.</p>`,
  },
  pregunta: {
    texto: "Si atas los extremos de una cuerda a dos chinchetas clavadas en un tablero y mueves un lápiz manteniendo la cuerda tensa, ¿qué curva dibujas y por qué?",
    respuesta: "Una <mark>elipse</mark>. La suma de las distancias del lápiz a las dos chinchetas es siempre la longitud de la cuerda, que es constante; las chinchetas son los focos y la longitud de la cuerda es el eje mayor 2a. Es el «método del jardinero».",
  },
  bloques: [
    {
      html: `<h3>4.1 Las cónicas como secciones del cono</h3><p>Una <b>superficie cónica de revolución</b> se genera al girar una recta (generatriz) alrededor de otra (eje) que la corta en el vértice V. Si se corta con un plano que no pasa por V, la curva obtenida depende del ángulo β que forma el plano con el eje, comparado con el ángulo α que forma la generatriz con el eje:</p><ul><li>β &gt; α: el plano corta a todas las generatrices y la sección es una <b>elipse</b> (si β = 90°, una circunferencia).</li><li>β = α: el plano es paralelo a una generatriz y la sección es una <b>parábola</b>.</li><li>β &lt; α: el plano corta a las dos hojas del cono y la sección es una <b>hipérbola</b>.</li></ul><p>En 1822, el belga Germinal Dandelin dio una demostración preciosa de que estas secciones coinciden con las definiciones métricas: las esferas inscritas en el cono y tangentes al plano lo tocan precisamente en los <b>focos</b>. Por eso las cónicas pueden estudiarse en el plano, sin el cono, a partir de sus focos y de sus distancias. Ese es el enfoque que se sigue en Dibujo Técnico.</p><p>Se define la <b>excentricidad</b> e = c / a: vale 0 en la circunferencia, está entre 0 y 1 en la elipse, es 1 en la parábola y mayor que 1 en la hipérbola.</p>`,
      svg: s1,
    },
    {
      html: `<h3>4.2 La elipse: definición y elementos</h3><p>La <b>elipse</b> es el lugar geométrico de los puntos del plano cuya <b>suma de distancias</b> a dos puntos fijos, los <b>focos</b> F y F′, es constante e igual a 2a:</p><div class="formula"><span>PF + PF′ = 2a</span></div><p>Sus elementos son:</p><ul><li><b>Eje mayor</b> AB = 2a (contiene a los focos) y <b>eje menor</b> CD = 2b, perpendiculares en el centro O.</li><li><b>Distancia focal</b> FF′ = 2c. Como CF + CF′ = 2a y CF = CF′, cada extremo del eje menor está a distancia a de los focos: <b>a² = b² + c²</b>.</li><li><b>Radios vectores</b>: los segmentos PF y PF′.</li><li><b>Circunferencia principal</b>: centro O y radio a.</li><li><b>Circunferencias focales</b>: centro en un foco y radio 2a.</li></ul><p>Un truco práctico para hallar los focos conocidos los ejes: con centro en un extremo C del eje menor y radio a se corta el eje mayor: los puntos de corte son F y F′. Recíprocamente, conocidos el eje mayor y los focos, el eje menor se obtiene con la misma construcción.</p>`,
      svg: s2,
      video: { id: "JPGeQbln2Fo", titulo: "Elipse: definición, circunferencia focal y tangente", canal: "Arturo Geometría", vistas: 100793, busqueda: "elipse dibujo técnico circunferencia focal" },
    },
    {
      html: `<h3>4.3 Trazado de la elipse por puntos</h3><p>El método más directo sale de la definición. Se conocen el eje mayor AB y los focos:</p><ol><li>Se marcan varios puntos N₁, N₂… entre los focos (no fuera de ellos: entonces los arcos no se cortarían).</li><li>Para cada punto N, con centro en F′ y radio AN, y con centro en F y radio NB, se trazan arcos que se cortan en dos puntos (arriba y abajo). Como AN + NB = AB = 2a, esos puntos son de la elipse.</li><li>Intercambiando los radios (AN desde F y NB desde F′) se obtienen otros dos puntos simétricos.</li><li>Se unen los puntos con plantilla de curvas o a mano alzada cuidando la simetría.</li></ol><p>Otros métodos que ya conoces de primero: por <b>afinidad</b> con las circunferencias de radios a y b (tema 3), por <b>haces proyectivos</b> en el rectángulo circunscrito, o con el método del jardinero. En CAD basta indicar el centro y los semiejes, pero la construcción por puntos sigue siendo útil para entender la curva y para comprobar resultados.</p><p>Conviene tomar más puntos cerca de los vértices A y B, donde la curvatura es mayor.</p>`,
      svg: s3,
    },
    {
      html: `<h3>4.4 Tangente y normal a la elipse en un punto</h3><p>Una propiedad fundamental de la elipse: <b>la tangente en un punto P es la bisectriz exterior del ángulo que forman los radios vectores</b> PF y PF′, y la <b>normal</b> (perpendicular a la tangente en P) es la bisectriz interior.</p><p>Consecuencia física: un rayo que sale de un foco y se refleja en la elipse pasa por el otro foco, porque el ángulo de incidencia es igual al de reflexión respecto de la normal. Es la propiedad de las salas de susurros y de la litotricia, la técnica médica que rompe cálculos renales con ondas enfocadas.</p><p>Construcción práctica de la tangente en P:</p><ol><li>Se trazan los radios vectores PF y PF′.</li><li>Se prolonga F′P más allá de P y se lleva sobre esa prolongación la distancia PF: se obtiene un punto M (que está en la circunferencia focal de F′, porque F′M = PF′ + PF = 2a).</li><li>La tangente es la <b>mediatriz de FM</b>, que pasa por P y es la bisectriz exterior.</li></ol><p>Este último punto es la clave del apartado siguiente: <b>el simétrico de un foco respecto de cualquier tangente está en la circunferencia focal del otro foco</b>.</p>`,
      svg: s4,
    },
    {
      html: `<h3>4.5 Tangentes desde un punto exterior</h3><p>Se quieren trazar las tangentes a una elipse desde un punto exterior Q. Si t es una tangente que pasa por Q, el simétrico M de F respecto de t cumple dos condiciones:</p><ul><li>Está en la <b>circunferencia focal de F′</b> (centro F′, radio 2a).</li><li>Está a la misma distancia de Q que F, porque Q está en el eje de simetría t: M está en la <b>circunferencia de centro Q y radio QF</b>.</li></ul><p>Por tanto:</p><ol><li>Se traza la circunferencia focal de F′.</li><li>Se traza la circunferencia de centro Q que pasa por F. Ambas se cortan en M₁ y M₂.</li><li>Las <b>mediatrices de FM₁ y FM₂</b> (que pasan por Q) son las tangentes.</li><li>Los puntos de tangencia son los cortes de F′M₁ y F′M₂ con las tangentes.</li></ol><p>Si Q está sobre la elipse, las dos circunferencias son tangentes y hay una sola tangente; si está dentro, no se cortan y no hay tangentes. Las <b>tangentes paralelas a una dirección</b> se trazan igual, cambiando la circunferencia de centro Q por la perpendicular a la dirección que pasa por F.</p>`,
      svg: s5,
      video: { id: "hjZgTWAuIeU", titulo: "Tangentes a una elipse pasando por un punto exterior: circunferencia focal", canal: "PDD Profesor de Dibujo", vistas: 131702, busqueda: "elipse tangentes desde un punto exterior" },
    },
    {
      html: `<h3>4.6 La hipérbola: definición y elementos</h3><p>La <b>hipérbola</b> es el lugar geométrico de los puntos cuya <b>diferencia de distancias</b> a los dos focos es constante e igual a 2a:</p><div class="formula"><span>|PF′ − PF| = 2a</span></div><p>Tiene dos <b>ramas</b> separadas. Sus elementos:</p><ul><li><b>Eje real</b> AB = 2a (los vértices A y B están entre los focos) y <b>eje imaginario</b> 2b, perpendicular en el centro.</li><li><b>Distancia focal</b> 2c, con c &gt; a y <b>c² = a² + b²</b>.</li><li><b>Asíntotas</b>: las diagonales del rectángulo de lados 2a y 2b centrado en O. La curva se acerca indefinidamente a ellas sin tocarlas. Si a = b, son perpendiculares y la hipérbola se llama <b>equilátera</b> (como la gráfica de y = k / x).</li><li><b>Circunferencia principal</b> (radio a) y <b>focales</b> (centro en un foco y radio 2a).</li></ul><p>Para trazarla por puntos se toman puntos N en el eje real <b>fuera</b> de los focos y se trazan arcos de radios AN y BN desde F y F′: su diferencia es AB = 2a. Cuanto más lejos se tome N, más se abre la rama.</p>`,
      svg: s6,
      video: { id: "nOwMHcSOrSk", titulo: "Hipérbola dados sus ejes (por radios vectores)", canal: "Arturo Geometría", vistas: 432616, busqueda: "hipérbola dibujo técnico" },
    },
    {
      html: `<h3>4.7 Tangentes a la hipérbola</h3><p>En la hipérbola los papeles se invierten respecto de la elipse: <b>la tangente en un punto P es la bisectriz interior del ángulo que forman los radios vectores</b> y la normal es la bisectriz exterior.</p><p>Como en la elipse, el simétrico de un foco respecto de una tangente está en la circunferencia focal del otro foco. Por eso las construcciones son las mismas:</p><ul><li><b>Tangente en P</b>: sobre el radio PF′ se lleva desde P la distancia PF; el punto M obtenido está en la focal de F′ y la tangente es la mediatriz de FM.</li><li><b>Tangentes desde Q exterior</b>: la circunferencia de centro Q que pasa por F corta a la focal de F′ en M₁ y M₂; las mediatrices de FM₁ y FM₂ son las tangentes. Los puntos de tangencia están en las rectas F′M (prolongadas si hace falta).</li><li><b>Asíntotas</b>: son las tangentes en los puntos del infinito. Se obtienen como tangentes «desde el centro».</li></ul><p>Un rayo dirigido hacia un foco y reflejado en la hipérbola sale como si viniera del otro foco: es el principio de los telescopios Cassegrain, que combinan un espejo parabólico y uno hiperbólico.</p>`,
      svg: s7,
    },
    {
      html: `<h3>4.8 La parábola: definición y elementos</h3><p>La <b>parábola</b> es el lugar geométrico de los puntos que <b>equidistan</b> de un punto fijo, el <b>foco</b> F, y de una recta fija, la <b>directriz</b> d:</p><div class="formula"><span>PF = d(P, d)</span></div><p>Elementos:</p><ul><li><b>Eje</b>: la perpendicular a la directriz por el foco. Es eje de simetría.</li><li><b>Vértice</b> V: punto medio entre el foco y la directriz.</li><li><b>Parámetro</b> p: distancia del foco a la directriz (VF = p / 2). En la ecuación y² = 2px es el mismo p.</li><li>La parábola tiene <b>un solo foco propio</b>: el otro está en el infinito, en la dirección del eje. Por eso la directriz hace aquí el papel de la circunferencia focal (una circunferencia de radio infinito).</li></ul><p><b>Trazado por puntos</b>: se trazan paralelas a la directriz a distancias d₁, d₂… y, con centro en F y esos mismos radios, arcos que las cortan. Cada corte equidista de F y de d.</p><p>La parábola es la única cónica sin asíntotas ni centro. Su forma es siempre la misma: todas las parábolas son semejantes, solo cambia la escala.</p>`,
      svg: s8,
      video: { id: "sH-U-rsm91A", titulo: "Parábola: definición, circunferencia focal y tangente", canal: "Arturo Geometría", vistas: 52828, busqueda: "parábola dibujo técnico tangentes" },
    },
    {
      html: `<h3>4.9 Tangentes a la parábola</h3><p><b>Tangente en un punto P</b>: es la <b>bisectriz del ángulo</b> que forman el radio vector PF y la perpendicular PD a la directriz. Como PF = PD, la tangente es también la <b>mediatriz de FD</b>. La normal es la perpendicular en P.</p><p><b>Tangentes desde un punto exterior Q</b>: el simétrico de F respecto de una tangente está en la directriz (que hace de circunferencia focal). Si la tangente pasa por Q, ese simétrico M también está a distancia QF de Q. Así:</p><ol><li>Con centro en Q y radio QF se traza una circunferencia que corta a la directriz en M₁ y M₂.</li><li>Las <b>mediatrices de FM₁ y FM₂</b> son las tangentes.</li><li>Los puntos de tangencia están en las perpendiculares a la directriz por M₁ y M₂.</li></ol><p><b>Tangente paralela a una dirección</b>: por F se traza la perpendicular a la dirección, que corta a la directriz en M; la mediatriz de FM es la tangente pedida.</p><p>Propiedad útil: la <b>tangente en el vértice</b> es el lugar de los pies de las perpendiculares trazadas desde el foco a todas las tangentes (es la «podaria» de la parábola).</p>`,
      svg: s9,
    },
    {
      html: `<h3>4.10 Circunferencia principal y propiedades de las tangentes</h3><p>Las tres cónicas comparten una propiedad que simplifica muchas construcciones: <b>el pie de la perpendicular trazada desde un foco a cualquier tangente está en la circunferencia principal</b> (en la parábola, en la tangente en el vértice).</p><p>La razón es sencilla: si M es el simétrico de F respecto de la tangente, el pie H es el punto medio de FM. Como F′M = 2a (circunferencia focal) y O es el punto medio de FF′, en el triángulo FF′M el segmento OH une los puntos medios de dos lados y mide la mitad del tercero: OH = a.</p><p>Aplicaciones:</p><ul><li><b>Tangentes desde un punto exterior</b>, alternativa: la circunferencia de diámetro QF corta a la circunferencia principal en los pies H₁ y H₂; las rectas QH₁ y QH₂ son las tangentes.</li><li><b>Tangentes paralelas a una dirección</b>: la perpendicular desde F a la dirección corta a la circunferencia principal en los pies de las dos tangentes.</li><li>El producto de las distancias de los dos focos a una tangente es constante e igual a b² (elipse e hipérbola).</li></ul><p>Elegir entre circunferencia focal y principal es cuestión de espacio en la lámina: la principal es más pequeña y se usa más.</p>`,
      svg: s10,
    },
    {
      html: `<h3>4.11 Intersección de una recta con una cónica</h3><p>Sin dibujar la cónica completa se pueden hallar sus puntos de corte con una recta r. Para la elipse (y la hipérbola): si X es un punto de corte, la circunferencia de centro X y radio XF:</p><ul><li>Pasa por F y por el <b>simétrico F₁ de F respecto de r</b> (porque X está en r).</li><li>Es <b>tangente interior a la circunferencia focal de F′</b>, porque XF′ + XF = 2a.</li></ul><p>Así, el problema se convierte en un caso <b>PPC de Apolonio</b>: circunferencias que pasan por F y F₁ y son tangentes a la focal de F′. Se resuelve por potencia, como en el tema 2: una circunferencia auxiliar por F y F₁ que corte a la focal; su eje radical con la focal corta a la recta FF₁ en el centro radical R; las tangentes desde R a la focal dan los puntos de tangencia T₁ y T₂, y las rectas F′T₁ y F′T₂ cortan a r en los puntos buscados.</p><p>Para la <b>parábola</b> es aún más sencillo: la circunferencia pasa por F y F₁ y es tangente a la directriz: un caso <b>PPR</b>, que se resuelve con RT² = RF · RF₁. Si la recta es paralela al eje, solo hay un punto de corte.</p>`,
      svg: s11,
    },
    {
      html: `<h3>4.12 Aplicaciones de las cónicas</h3><p>Las propiedades de las tangentes explican muchos usos técnicos:</p><table class="tb"><thead><tr><th>Cónica</th><th>Propiedad</th><th>Aplicación</th></tr></thead><tbody><tr><td>Parábola</td><td>Los rayos paralelos al eje se reflejan hacia el foco</td><td>Antenas parabólicas, hornos solares, faros, micrófonos de estadio</td></tr><tr><td>Elipse</td><td>Lo que sale de un foco llega al otro</td><td>Salas de susurros, litotricia, reflectores de lámparas</td></tr><tr><td>Hipérbola</td><td>Diferencia de distancias constante</td><td>Navegación LORAN y localización de terremotos, telescopios Cassegrain, torres de refrigeración</td></tr><tr><td>Todas</td><td>Trayectorias bajo la gravedad</td><td>Órbitas de planetas, cometas y satélites</td></tr></tbody></table><p>En arquitectura e ingeniería aparecen como arcos elípticos y parabólicos (el arco parabólico reparte las cargas uniformes sin flexión), en bóvedas y en perfiles de carreteras (los acuerdos verticales son parabólicos). En diseño, la elipse es la forma que adopta cualquier circunferencia vista en perspectiva.</p><p>En la PAU se pide sobre todo: trazar una cónica conocidos algunos elementos, hallar sus focos o ejes, y trazar tangentes desde un punto o paralelas a una dirección, justificando la construcción con la propiedad usada.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Una elipse tiene eje mayor 10 cm y eje menor 6 cm. Halla la distancia focal y la excentricidad.", pasos: ["a = 5, b = 3.", "c² = a² − b² = 16 → c = 4; distancia focal 2c = 8 cm.", "e = c / a = 0,8."], resultado: "FF′ = 8 cm; e = 0,8." },
    { enunciado: "Un punto P de una elipse de eje mayor 12 cm está a 4 cm de un foco. ¿A qué distancia está del otro?", pasos: ["PF + PF′ = 2a = 12.", "PF′ = 12 − 4."], resultado: "8 cm." },
    { enunciado: "Una hipérbola tiene eje real 6 cm y distancia focal 10 cm. Halla b y la pendiente de las asíntotas.", pasos: ["a = 3, c = 5.", "b² = c² − a² = 16 → b = 4.", "Asíntotas: y = ± (b / a) x."], resultado: "b = 4 cm; pendientes ± 4/3." },
    { enunciado: "Una parábola tiene el foco a 3 cm de la directriz. ¿Dónde está el vértice? ¿Qué distancia hay del foco al punto de la curva situado en la perpendicular al eje por el foco?", pasos: ["p = 3; VF = 1,5 cm.", "Ese punto L está a p = 3 cm de la directriz (la misma distancia que el foco), luego LF = 3 cm."], resultado: "Vértice a 1,5 cm de F; LF = 3 cm (el lado recto mide 2p = 6 cm)." },
    { enunciado: "Se trazan las tangentes a una elipse (a = 5 cm) desde Q, con QF = 6 cm y QF′ = 9 cm. ¿Qué radios tienen las dos circunferencias de la construcción y se cortan?", pasos: ["Focal de F′: radio 2a = 10 cm. Circunferencia de Q: radio QF = 6 cm.", "Distancia entre centros QF′ = 9: |10 − 6| = 4 < 9 < 16."], resultado: "Se cortan en dos puntos: hay dos tangentes." },
    { enunciado: "Elipse con a = 5 y b = 3. ¿Qué vale el producto de las distancias de los focos a una tangente cualquiera?", pasos: ["Propiedad de la podaria: d(F, t) · d(F′, t) = b²."], resultado: "9 cm²." },
  ],
  errores: [
    "Confundir los ejes con la distancia focal: en la elipse a > c, en la hipérbola c > a.",
    "Usar a² = b² + c² en la hipérbola (allí es c² = a² + b²).",
    "Trazar la tangente a la elipse como bisectriz interior de los radios vectores (esa es la normal).",
    "En las tangentes desde un punto, usar la circunferencia focal del mismo foco que pasa por la circunferencia de centro Q.",
    "Elegir puntos N fuera de los focos al trazar la elipse por radios vectores (o dentro, en la hipérbola).",
    "Dibujar las ramas de la hipérbola cortando las asíntotas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define la elipse, la hipérbola y la parábola como lugares geométricos.", sol: "Elipse: suma de distancias a dos focos constante (2a). Hipérbola: diferencia de distancias constante (2a). Parábola: puntos que equidistan del foco y de la directriz." },
    { nivel: "básico", q: "Dibuja una elipse de ejes 100 y 60 mm y sitúa sus focos.", sol: "Con centro en un extremo del eje menor y radio 50 mm se corta el eje mayor: F y F′ a 40 mm del centro." },
    { nivel: "básico", q: "Traza por radios vectores 12 puntos de una elipse de eje mayor 90 mm y distancia focal 60 mm.", sol: "Puntos N entre los focos (tres, por ejemplo); para cada uno, arcos AN desde F′ y NB desde F y viceversa: 4 puntos por N." },
    { nivel: "básico", q: "Calcula b en una elipse con a = 13 y c = 12.", sol: "b = √(169 − 144) = 5." },
    { nivel: "básico", q: "Calcula c en una hipérbola con a = 8 y b = 6.", sol: "c = √(64 + 36) = 10." },
    { nivel: "básico", q: "Dibuja una hipérbola de eje real 40 mm y focal 60 mm y sus asíntotas.", sol: "b = √(900 − 400) ≈ 22,4 mm. Rectángulo 40 × 44,7 mm; sus diagonales son las asíntotas; ramas por radios vectores con N fuera de los focos." },
    { nivel: "básico", q: "Dibuja la parábola de parámetro 20 mm por puntos.", sol: "Directriz y foco a 20 mm; vértice a 10 mm de cada uno. Paralelas a la directriz a 15, 20, 30, 40 mm y arcos desde F con los mismos radios." },
    { nivel: "básico", q: "¿Cuál es la excentricidad de una circunferencia, una parábola y una hipérbola equilátera?", sol: "0, 1 y √2 (en la equilátera a = b, c = a√2)." },
    { nivel: "básico", q: "Traza la tangente a una elipse en un punto P dado.", sol: "Bisectriz exterior del ángulo FPF′, o mediatriz de FM con M en la prolongación de F′P a distancia PF de P." },
    { nivel: "básico", q: "Traza la tangente a una parábola en un punto P.", sol: "Bisectriz del ángulo entre PF y la perpendicular PD a la directriz (mediatriz de FD)." },
    { nivel: "básico", q: "¿Qué sección se obtiene al cortar un cono con un plano paralelo a una generatriz?", sol: "Una parábola." },
    { nivel: "básico", q: "Un punto de una hipérbola (2a = 8 cm) está a 3 cm de F. ¿A qué distancia está de F′?", sol: "|PF′ − 3| = 8 → PF′ = 11 cm (la otra solución, −5, no vale)." },
    { nivel: "medio", q: "Traza las tangentes a una elipse (2a = 100 mm, 2c = 80 mm) desde un punto Q situado a 70 mm del centro en la dirección del eje menor.", sol: "Focal de F′ (radio 100) y circunferencia de centro Q por F; cortes M₁ y M₂; mediatrices de FM₁ y FM₂ y puntos de tangencia sobre F′M." },
    { nivel: "medio", q: "Repite el ejercicio anterior con la circunferencia principal.", sol: "Circunferencia de diámetro QF; corta a la principal (radio 50) en H₁ y H₂; tangentes QH₁ y QH₂." },
    { nivel: "medio", q: "Traza las tangentes a una elipse paralelas a una dirección que forma 30° con el eje mayor.", sol: "Por F la perpendicular a la dirección; corta a la principal en H₁ y H₂; por ellos, paralelas a la dirección." },
    { nivel: "medio", q: "Halla los focos de una elipse conocidos su eje mayor (80 mm) y un punto P de la curva a 30 mm del eje mayor y 20 mm del menor.", sol: "Por afinidad: P está en la elipse si 20²/40² + 30²/b² = 1 → b² = 900/0,75 = 1 200, b ≈ 34,6 mm; c = √(1 600 − 1 200) = 20 mm. Gráficamente: el eje menor se halla con la afinidad entre la circunferencia principal y la elipse." },
    { nivel: "medio", q: "Traza las tangentes a una parábola desde un punto Q exterior.", sol: "Circunferencia de centro Q y radio QF; corta a la directriz en M₁ y M₂; mediatrices de FM; puntos de tangencia en las perpendiculares a d por M." },
    { nivel: "medio", q: "Traza la tangente a una parábola paralela a una dirección dada.", sol: "Perpendicular desde F a la dirección; corta a d en M; mediatriz de FM. El punto de tangencia está en la perpendicular a d por M." },
    { nivel: "medio", q: "Traza la tangente a una hipérbola en un punto P y comprueba que es la bisectriz interior.", sol: "Sobre PF′ se lleva PF desde P hasta M; la mediatriz de FM pasa por P y divide al ángulo FPF′ en dos iguales." },
    { nivel: "medio", q: "Demuestra que el simétrico de F respecto de una tangente a la elipse está en la focal de F′.", sol: "M simétrico de F: PM = PF. Por ser la tangente bisectriz exterior, F′, P y M están alineados con P entre ambos: F′M = F′P + PM = F′P + PF = 2a." },
    { nivel: "medio", q: "Una elipse tiene a = 5 cm y e = 0,6. Calcula b y el área.", sol: "c = 3; b = 4; área πab ≈ 62,8 cm²." },
    { nivel: "medio", q: "Un reflector elíptico tiene eje mayor 30 cm y la lámpara en un foco a 3 cm del vértice. ¿Dónde se concentra la luz?", sol: "a = 15, c = 12. La luz se concentra en el otro foco, a 24 cm de la lámpara (3 cm del otro vértice)." },
    { nivel: "medio", q: "Halla los puntos de corte de una recta con una parábola sin dibujar la curva.", sol: "F₁ simétrico de F respecto de la recta; R = FF₁ ∩ d; RT = √(RF · RF₁) sobre d; las perpendiculares a d por T₁ y T₂ cortan a la recta en los puntos buscados." },
    { nivel: "medio", q: "Describe cómo se obtienen las asíntotas de una hipérbola conocidos el eje real y los focos.", sol: "b = √(c² − a²): se traza el rectángulo de lados 2a y 2b centrado en O (con centro en A y radio c se corta la perpendicular por A al eje); sus diagonales son las asíntotas." },
    { nivel: "avanzado", q: "Halla los puntos de intersección de una recta con una elipse dada por sus focos y 2a.", sol: "F₁ simétrico de F respecto de r; circunferencias por F y F₁ tangentes a la focal de F′ (PPC): auxiliar por F y F₁, centro radical R, tangentes desde R a la focal en T₁ y T₂; F′T₁ y F′T₂ cortan a r en los puntos." },
    { nivel: "avanzado", q: "Demuestra que el pie de la perpendicular desde F a una tangente está en la circunferencia principal.", sol: "H es el punto medio de FM (M simétrico). En el triángulo FF′M, O y H son puntos medios de FF′ y FM: OH = F′M / 2 = 2a / 2 = a." },
    { nivel: "avanzado", q: "Determina una elipse conocidos un foco F, una tangente t y el eje mayor 2a sobre una recta dada.", sol: "El otro foco F′ está en la recta del eje. El simétrico M de F respecto de t cumple F′M = 2a: F′ es el corte de la recta del eje con la circunferencia de centro M y radio 2a." },
    { nivel: "avanzado", q: "Construye una parábola conocidos el foco, la directriz y comprueba que la tangente en el vértice es la podaria.", sol: "Para cualquier tangente (mediatriz de FD), el pie de la perpendicular desde F es el punto medio de FD, que está a p/2 de d: en la paralela a d por V, la tangente en el vértice." },
    { nivel: "avanzado", q: "Una antena parabólica tiene 60 cm de diámetro y 8 cm de profundidad. ¿Dónde se coloca el receptor?", sol: "y² = 2px con y = 30 y x = 8: 900 = 16p → p = 56,25. Foco a p/2 ≈ 28,1 cm del vértice." },
    { nivel: "avanzado", q: "Explica por qué la proyección de una circunferencia en perspectiva cónica puede ser una hipérbola.", sol: "La perspectiva cónica es una homología; si la circunferencia corta a la recta límite (está parcialmente detrás del observador), su homóloga es una hipérbola." },
    { nivel: "avanzado", q: "Calcula b² como producto de las distancias de los focos a una tangente para la elipse a = 10, c = 6, y comprueba con la tangente en el vértice del eje menor.", sol: "b² = 100 − 36 = 64. La tangente en C es paralela al eje mayor a distancia b = 8 de él: las distancias de F y F′ son 8 y 8, producto 64." },
  ],
  quiz: reparte([
    { q: "En la elipse, PF + PF′ es igual a…", o: ["2c", "2a", "2b", "a + b"], a: 1, e: "El eje mayor." },
    { q: "En la elipse se cumple…", o: ["c² = a² + b²", "a² = b² + c²", "b² = a² + c²", "a = b + c"], a: 1, e: "El extremo del eje menor dista a de los focos." },
    { q: "En la hipérbola se cumple…", o: ["a² = b² + c²", "c² = a² + b²", "b = a + c", "a = c"], a: 1, e: "c > a." },
    { q: "La parábola es el lugar de los puntos que…", o: ["suman 2a a dos focos", "equidistan de un foco y una recta", "restan 2a", "equidistan de dos rectas"], a: 1, e: "Foco y directriz." },
    { q: "La excentricidad de la parábola vale…", o: ["0", "entre 0 y 1", "1", "más de 1"], a: 2, e: "e = 1." },
    { q: "La tangente a la elipse en P es…", o: ["la bisectriz interior de FPF′", "la bisectriz exterior de FPF′", "perpendicular a PF", "paralela al eje"], a: 1, e: "La interior es la normal." },
    { q: "La tangente a la hipérbola en P es…", o: ["la bisectriz interior de FPF′", "la bisectriz exterior", "la asíntota", "perpendicular a PF′"], a: 0, e: "Al revés que en la elipse." },
    { q: "La circunferencia focal tiene centro en un foco y radio…", o: ["a", "2a", "c", "2c"], a: 1, e: "2a." },
    { q: "La circunferencia principal tiene radio…", o: ["a", "b", "c", "2a"], a: 0, e: "Centro O." },
    { q: "El simétrico de un foco respecto de una tangente está en…", o: ["la principal", "la focal del otro foco", "el eje menor", "la directriz siempre"], a: 1, e: "Base de las construcciones." },
    { q: "El pie de la perpendicular de un foco a una tangente está en…", o: ["la focal", "la circunferencia principal", "el eje", "la asíntota"], a: 1, e: "Podaria." },
    { q: "En la parábola, la podaria es…", o: ["la directriz", "la tangente en el vértice", "el eje", "una circunferencia"], a: 1, e: "La principal de radio infinito." },
    { q: "La directriz de la parábola hace el papel de…", o: ["circunferencia principal", "circunferencia focal", "asíntota", "eje"], a: 1, e: "Focal de radio infinito." },
    { q: "Para trazar la hipérbola por radios vectores, los puntos N se toman…", o: ["entre los focos", "fuera de los focos", "en el eje imaginario", "en las asíntotas"], a: 1, e: "Para que AN − BN = 2a." },
    { q: "Las asíntotas de la hipérbola son las diagonales del rectángulo de lados…", o: ["2a y 2c", "2a y 2b", "a y c", "2b y 2c"], a: 1, e: "Centrado en O." },
    { q: "Un plano que corta todas las generatrices del cono produce…", o: ["una parábola", "una elipse", "una hipérbola", "dos rectas"], a: 1, e: "β > α." },
    { q: "Los rayos paralelos al eje de una parábola se reflejan…", o: ["paralelos", "hacia el foco", "hacia el vértice", "hacia la directriz"], a: 1, e: "Antenas y faros." },
    { q: "La intersección recta-elipse se reduce al caso de Apolonio…", o: ["PPR", "PPC", "RRR", "CCC"], a: 1, e: "Por F y F₁, tangente a la focal." },
    { q: "La intersección recta-parábola se reduce al caso…", o: ["PPR", "PPC", "PRR", "RRC"], a: 0, e: "Tangente a la directriz." },
    { q: "Desde un punto interior a la elipse se pueden trazar…", o: ["2 tangentes", "1", "0", "4"], a: 2, e: "Las circunferencias no se cortan." },
  ]),
  examen: reparte([
    { q: "Elipse con 2a = 26 y 2b = 10: la distancia focal es…", o: ["24", "12", "16", "28"], a: 0, e: "c = √(169 − 25) = 12." },
    { q: "Hipérbola con a = 5 y c = 13: b =", o: ["8", "12", "18", "√194"], a: 1, e: "√(169 − 25)." },
    { q: "Parábola con p = 8: distancia del vértice al foco…", o: ["8", "4", "16", "2"], a: 1, e: "p/2." },
    { q: "P en una elipse (2a = 20) con PF = 7: PF′ =", o: ["13", "27", "7", "3"], a: 0, e: "20 − 7." },
    { q: "Tangentes a la parábola desde Q: la circunferencia de centro Q pasa por…", o: ["V", "F", "el eje", "la directriz"], a: 1, e: "Radio QF." },
    { q: "Excentricidad de una elipse con a = 10 y c = 8:", o: ["0,8", "1,25", "0,6", "8"], a: 0, e: "c/a." },
    { q: "La sección paralela a la base de un cono recto es…", o: ["elipse", "circunferencia", "parábola", "hipérbola"], a: 1, e: "β = 90°." },
    { q: "Hipérbola equilátera: las asíntotas forman…", o: ["45°", "60°", "90°", "30°"], a: 2, e: "a = b." },
  ]),
  feynman: ["Por qué la tangente a la elipse es la bisectriz exterior de los radios vectores", "Cómo se trazan las tangentes desde un punto con la circunferencia focal", "Qué papel hace la directriz en la parábola", "Por qué la intersección de una recta con una cónica es un problema de Apolonio", "Por qué una antena parabólica concentra la señal en el foco"],
  glosario: [
    ["Elipse", "Lugar de los puntos cuya suma de distancias a dos focos es 2a."],
    ["Hipérbola", "Lugar de los puntos cuya diferencia de distancias a dos focos es 2a."],
    ["Parábola", "Lugar de los puntos que equidistan de un foco y una directriz."],
    ["Foco", "Punto fijo de la definición métrica de una cónica."],
    ["Directriz", "Recta fija de la definición de la parábola."],
    ["Radios vectores", "Segmentos que unen un punto de la cónica con los focos."],
    ["Eje mayor / real", "Segmento 2a que contiene a los focos."],
    ["Distancia focal", "Distancia 2c entre los focos."],
    ["Circunferencia principal", "Centro O y radio a; contiene los pies de las perpendiculares desde los focos a las tangentes."],
    ["Circunferencia focal", "Centro en un foco y radio 2a; contiene los simétricos del otro foco respecto de las tangentes."],
    ["Asíntota", "Recta a la que se aproxima la hipérbola sin llegar a tocarla."],
    ["Excentricidad", "Cociente e = c / a, que mide lo «achatada» que es la cónica."],
    ["Parámetro", "Distancia p del foco a la directriz en la parábola."],
    ["Vértice", "Punto de la cónica sobre su eje."],
  ],
  situacion: {
    titulo: "Un horno solar para el patio",
    reto: "El departamento de Tecnología quiere construir un horno solar con un reflector parabólico de cartón y papel de aluminio. Vuestro grupo debe diseñar el perfil de la parábola y situar el foco donde irá la olla.",
    pasos: [
      "Fijad el diámetro del reflector (60 a 80 cm) y la profundidad, y calculad el parámetro p y la posición del foco.",
      "Dibujad la parábola a escala 1:5 por puntos, con su foco y directriz.",
      "Trazad las tangentes y normales en cinco puntos y comprobad que los rayos paralelos al eje se reflejan hacia el foco.",
      "Preparad la plantilla a escala 1:1 de las costillas del reflector.",
      "Construid el horno, medid la temperatura en el foco y comparad con la de otro punto.",
    ],
    producto: "Lámina con el perfil, las tangentes y la marcha de rayos, plantillas a escala real y un informe con las medidas.",
    evaluacion: [
      "Calcula correctamente el parámetro y la posición del foco.",
      "Traza la parábola y sus tangentes con precisión.",
      "Justifica la propiedad focal con la construcción de tangentes.",
      "Comunica los resultados de la prueba con datos.",
    ],
  },
  figura: fig("Cónicas de un vistazo", "Resumen: definiciones, elementos, tangentes e intersecciones", [
    ["Elipse", ["PF + PF′ = 2a", "a² = b² + c²", "t: bisectriz exterior", "e < 1"], "var(--red)"],
    ["Hipérbola", ["|PF − PF′| = 2a", "c² = a² + b²", "t: bisectriz interior", "asíntotas"], "var(--pen)"],
    ["Parábola", ["PF = d(P, d)", "VF = p / 2", "t: mediatriz de FD", "e = 1"], "var(--leaf)"],
    ["Construcciones", ["focal: simétricos", "principal: pies", "tangentes desde Q", "recta ∩ cónica: PPC"], "var(--inf)"],
  ]),
  video: { id: "wl3t0D16FzU", titulo: "Trazar la tangente a una elipse por un punto de la curva (circunferencia focal)", canal: "PDD Profesor de Dibujo", vistas: 107227, busqueda: "elipse dibujo técnico circunferencia focal" },
  mapa: mapa("CÓNICAS", "var(--bac)", [
    ["Elipse", "suma 2a · focos · ejes", "var(--red)"],
    ["Hipérbola", "diferencia 2a · asíntotas", "var(--pen)"],
    ["Parábola", "foco · directriz · vértice", "var(--leaf)"],
    ["Tangentes", "focal · principal · intersecciones", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Elipse", "PF + PF′ = 2a"],
    ["Relación en la elipse", "a² = b² + c²"],
    ["Hipérbola", "|PF − PF′| = 2a; c² = a² + b²"],
    ["Parábola", "PF = distancia a la directriz"],
    ["Excentricidad", "e = c / a"],
    ["Tangente en la elipse", "Bisectriz exterior de los radios vectores."],
    ["Tangente en la hipérbola", "Bisectriz interior."],
    ["Tangente en la parábola", "Mediatriz de FD."],
    ["Circunferencia focal", "Centro F′, radio 2a: simétricos de F."],
    ["Circunferencia principal", "Radio a: pies de las perpendiculares desde F."],
    ["Tangentes desde Q", "Circunferencia QF ∩ focal → M; mediatriz de FM."],
    ["Recta ∩ elipse", "Caso PPC con F, F₁ y la focal."],
  ],
  familias: ["Dibujad juntos una elipse con dos chinchetas y una cuerda (método del jardinero).", "Buscad cónicas en casa: la sombra de una lámpara en la pared, una linterna inclinada, el chorro de una fuente.", "Pedid que os explique por qué las antenas de satélite tienen forma de parábola.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: curvas cónicas como lugares geométricos y como secciones de la superficie cónica; elementos; trazado por puntos; circunferencias principal y focales; rectas tangentes en un punto, desde un punto exterior y paralelas a una dirección; intersección de recta y cónica; aplicaciones técnicas y artísticas (RD 243/2022, Dibujo Técnico II, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Linterna sobre la pared: obtener las tres cónicas cambiando el ángulo del haz.", "GeoGebra: lugar geométrico con deslizador para comprobar la definición de cada cónica.", "Relación con Física: órbitas y leyes de Kepler; con Matemáticas: ecuaciones reducidas.", "Visita virtual a una sala de susurros (Galería de los Susurros o monumentos elípticos)."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sección cónica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Secci%C3%B3n_c%C3%B3nica" },
    { t: "Elipse, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Elipse" },
    { t: "Esferas de Dandelin, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Esferas_de_Dandelin" },
  ],
  revisado: "2026-11-21",
};
