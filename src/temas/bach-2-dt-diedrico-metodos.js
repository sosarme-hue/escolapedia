// Dibujo Técnico II 2º Bachillerato · Tema 6. Nivel libro. Construcciones diédricas calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, circ, pt, recto, arco, poli, caba, ang, dist, unit, add, sub, mul, pie, mid, tx, dash, LT, dP, planoD } = G;

const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const ref = (p, c = "var(--muted)") => seg(p.h, p.v, c, 0.9, 'stroke-dasharray="2 2"');
const perp = (u) => [u[1], -u[0]];
const fino = (A, B) => seg(A, B, "var(--muted)", 0.9, 'stroke-dasharray="2 2"');
// Arco corto entre P y Q con centro C.
const arcoC = (C, P, Q, c = "var(--muted)", w = 1.1) => { let a0 = ang(C, P), a1 = ang(C, Q), d = a1 - a0; while (d < 0) d += 360; return d <= 180 ? arco(C, dist(C, P), a0, a1, c, w, dash) : arco(C, dist(C, P), a1, a0, c, w, dash); };
const polarS = (C, r, deg) => [C[0] + r * Math.cos(G.rad(deg)), C[1] - r * Math.sin(G.rad(deg))];
const lt1 = (A, B, lab = "LT₁", dx = 4, dy = -4) => `${seg(A, B, "var(--leaf)", 1.6)}${tx(B[0] + dx, B[1] + dy, lab, { s: 10, b: 1, a: "start", c: "var(--leaf)" })}`;
const L = (P, s, dx, dy, c = "var(--ink)", a = "start") => tx(P[0] + dx, P[1] + dy, s, { s: 11, b: 1, a, c });

// Plano oblicuo común: N en la LT, traza h poco inclinada (hacia abajo a la izquierda) y v hacia arriba a la izquierda.
const yt = 70, PL = planoD(214, 0.45, 1, 0.7, yt);
const trazas = (xh = 10, xv = 120, labs = true) => `${seg(PL.N, PL.hTr(xh), "var(--pen)", 2.2)}${seg(PL.N, PL.vTr(xv), "var(--pen)", 2.2)}${labs ? L(PL.hTr(xh + 24), "h", 0, -8, "var(--pen)") + L(PL.vTr(xv + 14), "v", 9, 4, "var(--pen)") : ""}${pt(PL.N, "", 0, 0)}${L(PL.N, "N", 4, -6)}`;
const PT = (x, o) => dP(yt)([x, o, PL.cota(x, o)]);

// 6.1 Repaso: punto y plano.
const s1 = (() => {
  const A = dP(86)([60, 46, 50]), Q = planoD(214, 0.6, 1, 0.8, 86);
  return dib("Repaso del sistema diédrico: las proyecciones de un punto están en la misma perpendicular a la línea de tierra; un plano oblicuo se da por sus trazas h y v, que se cortan en la LT", clip(`${LT(86, 8, 252)}${ref(A)}${seg([48, 86], [48, A.v[1]], "var(--leaf)", 1.6)}${seg([54, 86], [54, A.h[1]], "var(--red)", 1.6)}${seg(Q.N, Q.hTr(110), "var(--pen)", 2.2)}${seg(Q.N, Q.vTr(140), "var(--pen)", 2.2)}
  ${pt(A.h, "a", 6, 4)}${pt(A.v, "a′", 6, -2)}${tx(44, 64, "cota", { s: 9.5, b: 1, a: "end", c: "var(--leaf)" })}${tx(50, 116, "alej.", { s: 9.5, b: 1, a: "end", c: "var(--red)" })}${pt(Q.N, "N", 2, -8)}${L(Q.hTr(120), "h", 4, 6, "var(--pen)")}${L(Q.vTr(148), "v", 4, 0, "var(--pen)")}`, "cl61"));
})();

// 6.2 Verdadera magnitud de un segmento por triángulo de desnivel.
const s2 = (() => {
  const P = dP(80), A = P([40, 40, 20]), B = P([170, 64, 64]), u = unit(A.h, B.h), B0 = add(B.h, mul(perp(u), 44));
  return dib("Verdadera magnitud de un segmento oblicuo: se construye un triángulo rectángulo con la proyección horizontal y la diferencia de cotas; la hipotenusa es la verdadera magnitud", clip(`${LT(80, 8, 252)}${ref(A)}${ref(B)}${seg(A.h, B.h, "var(--pen)", 2.4)}${seg(A.v, B.v, "var(--pen)", 2.4)}${seg(A.v, [B.v[0], A.v[1]], "var(--muted)", 1, dash)}${seg(B.h, B0, "var(--leaf)", 1.8)}${seg(A.h, B0, "var(--red)", 2.6)}${recto(B.h, A.h, B0, 6)}
  ${pt(A.h, "a", -10, 12)}${pt(B.h, "b", 6, 10)}${pt(A.v, "a′", -14, -2)}${pt(B.v, "b′", 6, -2)}${pt(B0, "B₀", 6, -2, "var(--red)")}${tx(B.v[0] + 6, (A.v[1] + B.v[1]) / 2 + 4, "Δc", { s: 10, b: 1, a: "start", c: "var(--leaf)" })}${tx(B.h[0] + 8, (B.h[1] + B0[1]) / 2 + 4, "Δc", { s: 10, b: 1, a: "start", c: "var(--leaf)" })}`, "cl62") + tx(10, 172, "aB₀ = verdadera magnitud", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 6.3 Idea del abatimiento (vista en perspectiva).
const s3 = (() => {
  const P = caba([150, 120], 0.55, 215, 1), ph = 58, s = 70, y = 30;
  const plano = [[0, -40, 0], [0, 80, 0], [-s * Math.cos(G.rad(ph)), 80, s * Math.sin(G.rad(ph))], [-s * Math.cos(G.rad(ph)), -40, s * Math.sin(G.rad(ph))]];
  const Aesp = [-48 * Math.cos(G.rad(ph)), y, 48 * Math.sin(G.rad(ph))], a = [Aesp[0], y, 0], Aab = [48, y, 0];
  const suelo = [[-80, -60, 0], [-80, 100, 0], [100, 100, 0], [100, -60, 0]];
  return dib("Abatir un plano es girarlo alrededor de su traza horizontal, la charnela, hasta que coincide con el plano horizontal; así sus figuras se ven en verdadera magnitud", clip(`${poli(suelo.map(P), "var(--muted)", 1, "var(--muted)", 0.06)}${poli(plano.map(P), "var(--pen)", 1.4, "var(--pen)", 0.12)}${seg(P([0, -40, 0]), P([0, 80, 0]), "var(--red)", 2.6)}${seg(P(Aesp), P(a), "var(--muted)", 1, dash)}${seg(P([0, y, 0]), P(Aesp), "var(--pen)", 1.4)}${seg(P([0, y, 0]), P(Aab), "var(--leaf)", 1.4)}
  ${pt(P(Aesp), "A", 6, -4)}${pt(P(a), "a", -12, 4)}${pt(P(Aab), "(A)", -26, 12, "var(--leaf)")}`, "cl63") + tx(150, 172, "charnela h (eje de giro)", { s: 10, b: 1, a: "middle", c: "var(--red)" }));
})();

// 6.4 Abatimiento de un punto: triángulo de abatimiento.
const s4 = (() => {
  const x = 84, o = 40, p = PT(x, o), c = PL.cota(x, o), H = pie(p.h, PL.N, PL.hTr(0)), u = unit(p.h, H), A0 = add(p.h, mul(perp(u), c)), Ab = PL.abate(x, o);
  return dib("Abatimiento de un punto A del plano: por su proyección se traza la perpendicular a la charnela h; con la cota se forma el triángulo de abatimiento y su hipotenusa se lleva con el compás sobre la perpendicular", clip(`${LT(yt, 8, 252)}${trazas()}${ref(p)}${recta(p.h, Ab, 12, "var(--muted)", 1, dash)}${seg(p.h, A0, "var(--leaf)", 1.8)}${seg(H, A0, "var(--red)", 1.6)}${recto(p.h, H, A0, 5)}${arcoC(H, A0, Ab)}
  ${pt(p.h, "a", -12, -2)}${pt(p.v, "a′", 6, -2)}${pt(H, "H", 6, 10)}${pt(A0, "A₀", 4, -6, "var(--leaf)")}${pt(Ab, "(A)", 6, 4, "var(--red)")}`, "cl64") + tx(10, 172, "aA₀ = cota de A", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 6.5 Abatimiento de la traza vertical.
const s5 = (() => {
  const xv = 130, V = PT(xv, 0), Vab = PL.abate(xv, 0), vab = add(PL.N, mul(unit(PL.N, Vab), 200));
  return dib("Abatimiento de la traza vertical: un punto V de v se abate con un arco de centro N y radio NV′ hasta la perpendicular a h por su proyección horizontal", clip(`${LT(yt, 8, 252)}${trazas()}${fino(V.h, V.v)}${recta(V.h, Vab, 14, "var(--muted)", 1, dash)}${arcoC(PL.N, V.v, Vab)}${seg(PL.N, vab, "var(--red)", 2.4)}
  ${pt(V.v, "v′", -14, -2)}${pt(V.h, "v", -12, -4)}${pt(Vab, "(V)", -26, 6, "var(--red)")}${L(add(PL.N, mul(unit(PL.N, Vab), 70)), "(v)", 8, 0, "var(--red)")}`, "cl65") + tx(250, 172, "N(V) = Nv′", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 6.6 Figura dada en verdadera magnitud: desabatimiento por afinidad.
const s6 = (() => {
  const C0 = PL.abate(110, 20), sq = [0, 1, 2, 3].map((i) => G.polar(C0, 15, 20 + 90 * i));
  const plan = sq.map(PL.desabate), alz = plan.map(PL.vDe);
  return dib("Desabatimiento: un cuadrado dibujado en verdadera magnitud sobre el plano abatido se lleva a la proyección horizontal por afinidad (eje h, dirección perpendicular) y, con las cotas, a la vertical", clip(`${LT(yt, 8, 252)}${trazas(10, 120, false)}${sq.map((q, i) => seg(q, plan[i], "var(--muted)", 0.9, dash)).join("")}${plan.map((q, i) => fino(q, alz[i])).join("")}${poli(sq, "var(--red)", 2.4, "var(--red)", 0.14)}${poli(plan, "var(--pen)", 2.2, "var(--pen)", 0.14)}${poli(alz, "var(--leaf)", 2.2, "var(--leaf)", 0.14)}`, "cl66") + tx(250, 22, "alzado", { s: 10, b: 1, a: "end", c: "var(--leaf)" }) + tx(10, 172, "(VM) abatida → planta por afinidad", { s: 10, b: 1, a: "start", c: "var(--red)" }));
})();

// 6.7 Giro de un punto alrededor de un eje vertical.
const s7 = (() => {
  const y0 = 60, e = [90, 140], A = dP(y0)([160, 44, 36]), r = dist(e, A.h), t0 = ang(e, A.h), a1 = polarS(e, r, -(t0 + 34) * 1), A1v = [a1[0], A.v[1]];
  const a1b = G.polar(e, r, t0 + 34);
  return dib("Giro de un punto alrededor de un eje vertical: la proyección horizontal describe un arco con centro en el eje y la vertical se mueve paralela a la LT, porque la cota no cambia", clip(`${LT(y0, 8, 252)}${seg([e[0], 10], [e[0], y0], "var(--red)", 1.6, 'stroke-dasharray="10 3 2 3"')}${ref(A)}${fino(a1b, [a1b[0], A.v[1]])}${arcoC(e, A.h, a1b)}${seg(e, A.h, "var(--muted)", 1)}${seg(e, a1b, "var(--muted)", 1)}${seg(A.v, [a1b[0], A.v[1]], "var(--pen)", 1.3, dash)}
  ${pt(e, "e", -12, 4, "var(--red)")}${pt(A.h, "a", 6, 4)}${pt(A.v, "a′", 6, -2)}${pt(a1b, "a₁", -16, -2, "var(--pen)")}${pt([a1b[0], A.v[1]], "a′₁", -8, -8, "var(--pen)")}${L([e[0], 18], "e′", -4, 0, "var(--red)", "end")}`, "cl67") + tx(250, 172, "la cota no cambia", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }));
})();

// 6.8 Giro de una recta hasta hacerla frontal.
const s8 = (() => {
  const y0 = 92, A = dP(y0)([60, 50, 14]), B = dP(y0)([170, 16, 70]), r = dist(A.h, B.h), b1 = [A.h[0] + r, A.h[1]], B1v = [b1[0], B.v[1]];
  return dib("Giro de una recta oblicua alrededor de un eje vertical que pasa por A hasta que su proyección horizontal es paralela a la LT: la nueva proyección vertical es la verdadera magnitud", clip(`${LT(y0, 8, 252)}${ref(A)}${ref(B)}${seg(A.h, B.h, "var(--pen)", 2)}${seg(A.v, B.v, "var(--pen)", 2)}${arcoC(A.h, B.h, b1)}${seg(A.h, b1, "var(--leaf)", 2)}${fino(b1, B1v)}${seg(B.v, B1v, "var(--muted)", 1, dash)}${seg(A.v, B1v, "var(--red)", 2.6)}
  ${pt(A.h, "a = e", -14, 14)}${pt(B.h, "b", -14, 2)}${pt(A.v, "a′", -14, -2)}${pt(B.v, "b′", -16, 10)}${pt(b1, "b₁", 4, 12, "var(--leaf)")}${pt(B1v, "b′₁", 6, 4, "var(--red)")}`, "cl68") + tx(10, 22, "a′b′₁ = verdadera magnitud", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 6.9 Giro de un plano hasta hacerlo proyectante vertical.
const s9 = (() => {
  const e = [80, yt + 30], oe = e[1] - yt, ce = PL.cota(e[0], oe), H = pie(e, PL.N, PL.hTr(0)), d = dist(e, H), H1 = [e[0] + d, e[1]], M1 = [H1[0], yt], E1v = [e[0], yt - ce];
  return dib("Giro de un plano oblicuo con eje vertical hasta que su traza horizontal es perpendicular a la LT: el plano pasa a ser proyectante vertical y su traza vertical da el ángulo con el plano horizontal", clip(`${LT(yt, 8, 252)}${trazas(10, 120, false)}${seg([e[0], 6], [e[0], yt], "var(--red)", 1.4, 'stroke-dasharray="10 3 2 3"')}${seg(e, H, "var(--muted)", 1)}${seg(e, H1, "var(--muted)", 1)}${recto(H, e, PL.N, 5)}${arcoC(e, H, H1)}${seg([H1[0], 178], M1, "var(--leaf)", 2.4)}${seg(M1, add(M1, mul(unit(M1, E1v), 90)), "var(--leaf)", 2.4)}${pt(E1v, "", 0, 0, "var(--red)")}
  ${pt(e, "e", -12, 4, "var(--red)")}${pt(H, "H", -14, -2)}${pt(H1, "H₁", 6, 4, "var(--leaf)")}${pt(M1, "", 0, 0)}${L([H1[0], 170], "h₁", 4, 0, "var(--leaf)")}${L(E1v, "i′ (fijo)", -6, -4, "var(--red)", "end")}${L(add(M1, mul(unit(M1, E1v), 30)), "v₁", 6, 0, "var(--leaf)")}`, "cl69"));
})();

// 6.10 Cambio de plano vertical de un punto.
const s10 = (() => {
  const y0 = 70, A = dP(y0)([80, 40, 36]), L0 = [96, 176], L1 = [176, 40], F = pie(A.h, L0, L1), a1 = add(F, mul(unit(A.h, F), 36));
  return dib("Cambio de plano vertical: se dibuja una nueva línea de tierra; la nueva proyección vertical de A está en la perpendicular a ella por a, a una distancia igual a la cota de A", clip(`${LT(y0, 8, 252)}${ref(A)}${lt1(L0, L1)}${fino(A.h, a1)}${seg(F, a1, "var(--red)", 2.4)}${seg([A.v[0] - 6, y0], [A.v[0] - 6, A.v[1]], "var(--red)", 2.4)}
  ${pt(A.h, "a", -12, 6)}${pt(A.v, "a′", 6, -2)}${pt(a1, "a′₁", 6, 4, "var(--red)")}${tx(A.v[0] - 10, (y0 + A.v[1]) / 2 + 4, "c", { s: 11, b: 1, a: "end", c: "var(--red)" })}${L(mid(F, a1), "c", 4, -4, "var(--red)")}`, "cl610") + tx(250, 172, "la cota se conserva", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 6.11 Cambio de plano para ver una recta en verdadera magnitud.
const s11 = (() => {
  const y0 = 40, A = dP(y0)([40, 20, 12]), B = dP(y0)([150, 50, 30]), u = unit(A.h, B.h), n = perp(u), L0 = add(A.h, add(mul(n, -14), mul(u, -20))), L1 = add(L0, mul(u, 190));
  const nv = (P, c) => { const F = pie(P.h, L0, L1); return add(F, mul(unit(P.h, F), c)); };
  const a1 = nv(A, 12), b1 = nv(B, 30);
  return dib("Cambio de plano para ver un segmento en verdadera magnitud: la nueva línea de tierra se toma paralela a la proyección horizontal ab", clip(`${LT(y0, 8, 252)}${ref(A)}${ref(B)}${seg(A.h, B.h, "var(--pen)", 2)}${seg(A.v, B.v, "var(--pen)", 2)}${lt1(L0, L1, "LT₁", -10, 16)}${fino(A.h, a1)}${fino(B.h, b1)}${seg(a1, b1, "var(--red)", 2.6)}
  ${pt(A.h, "a", -6, -6)}${pt(B.h, "b", 6, -4)}${pt(A.v, "a′", -14, -2)}${pt(B.v, "b′", 6, 8)}${pt(a1, "a′₁", -18, 8, "var(--red)")}${pt(b1, "b′₁", 6, 4, "var(--red)")}`, "cl611") + tx(10, 172, "LT₁ ∥ ab · a′₁b′₁ = VM", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 6.12 Cambio de plano para hacer proyectante un plano oblicuo.
const s12 = (() => {
  const u = unit(PL.N, PL.hTr(0)), M = PL.hTr(110), L0 = add(M, mul(perp(u), 30)), L1 = add(M, mul(perp(u), -100));
  const xv = 150, V = PT(xv, 0), F = pie(V.h, L0, L1), v1 = add(F, mul(unit(V.h, F), PL.cota(xv, 0)));
  return dib("Cambio de plano vertical para convertir un plano oblicuo en proyectante: la nueva línea de tierra es perpendicular a la traza h; la nueva traza vertical pasa por el corte de h con LT₁ y da el ángulo del plano con el PH", clip(`${LT(yt, 8, 252)}${trazas()}${lt1(L1, L0, "LT₁", 4, 10)}${fino(V.h, V.v)}${fino(V.h, v1)}${seg(add(M, mul(unit(v1, M), 16)), add(v1, mul(unit(M, v1), 50)), "var(--red)", 2.4)}${recto(M, PL.N, L0, 6)}
  ${pt(V.v, "v′", 6, -4)}${pt(V.h, "", 0, 0)}${pt(v1, "v′₁", 6, 6, "var(--red)")}${pt(M, "M", -16, 10)}`, "cl612") + tx(250, 172, "v₁: plano visto de canto", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema diédrico: abatimientos, giros y cambios de plano",
  minutos: 120,
  objetivos: [
    "Entender por qué hacen falta métodos para obtener verdaderas magnitudes en el sistema diédrico",
    "Abatir un punto, una recta y una figura plana sobre un plano de proyección y desabatirla",
    "Girar puntos, rectas y planos alrededor de ejes perpendiculares a los planos de proyección",
    "Realizar cambios de plano para dejar rectas y planos en posiciones particulares",
    "Elegir el método más adecuado para cada problema",
    "Relacionar el abatimiento con la afinidad estudiada en el tema 3",
  ],
  claves: ["abatimiento", "charnela", "triángulo de abatimiento", "desabatimiento", "giro", "eje de giro", "cambio de plano", "nueva línea de tierra", "verdadera magnitud", "plano proyectante"],
  lectura: {
    titulo: "Ver las cosas de frente",
    html: `<p>Cuando un carpintero quiere saber cuánto mide de verdad la tabla inclinada de un tejado, no le sirve medirla en el plano de planta: allí aparece más corta, porque está en pendiente. Necesita «ponerla de frente». Gaspard Monge, el ingeniero francés que inventó el sistema diédrico a finales del siglo XVIII, lo resolvió con tres operaciones que todavía se enseñan igual: <b>abatir</b>, <b>girar</b> y <b>cambiar de plano</b>.</p>
    <p>Monge trabajaba para el ejército y su método se consideró secreto militar durante años: permitía diseñar fortificaciones sin cálculos interminables. Hoy está detrás de los planos de cualquier pieza, edificio o mueble, y los programas de CAD hacen lo mismo cuando giran la vista o crean un plano de trabajo sobre una cara inclinada.</p>
    <p>Las tres operaciones persiguen el mismo objetivo: llevar un elemento a una <b>posición particular</b> respecto de los planos de proyección (paralelo o perpendicular a ellos) para medir distancias, ángulos y figuras en <b>verdadera magnitud</b>. En este tema aprenderás a hacerlo y a elegir en cada caso el camino más corto.</p>`,
  },
  pregunta: {
    texto: "Una rampa recta sube 1 m mientras avanza 2,4 m en planta. ¿Cuánto mide la rampa de verdad? ¿Qué tienes que «dibujar» para saberlo?",
    respuesta: "Mide √(2,4² + 1²) = 2,6 m. Para obtenerlo gráficamente se construye un <mark>triángulo rectángulo</mark> con la proyección horizontal y el desnivel: es la idea del abatimiento y del giro, que llevan el segmento a una posición en la que se ve en verdadera magnitud.",
  },
  bloques: [
    {
      html: `<h3>6.1 Repaso del sistema diédrico</h3><p>En el sistema diédrico, un punto A del espacio se representa por sus proyecciones ortogonales sobre el <b>plano horizontal</b> (PH), a, y sobre el <b>plano vertical</b> (PV), a′. Al abatir el PV sobre el PH, ambas proyecciones quedan en una misma perpendicular a la <b>línea de tierra</b> (LT). La distancia de a′ a la LT es la <b>cota</b> (altura sobre el PH) y la de a a la LT es el <b>alejamiento</b> (distancia al PV).</p><p>Una recta se da por las proyecciones de dos de sus puntos, y sus <b>trazas</b> son los puntos en que corta a los planos de proyección. Un plano se da por sus <b>trazas</b> h (horizontal) y v (vertical), las rectas en que corta al PH y al PV; si el plano es oblicuo, ambas trazas se cortan en un punto N de la LT.</p><p>En primero aprendiste las relaciones de pertenencia, paralelismo e intersección. Pero en las proyecciones casi nada se ve en su tamaño real: un segmento oblicuo aparece acortado en ambas proyecciones, un ángulo se deforma y un cuadrado contenido en un plano oblicuo se ve como un paralelogramo cualquiera. Este tema trata de cómo recuperar la <b>verdadera magnitud</b> (VM).</p>`,
      svg: s1,
    },
    {
      html: `<h3>6.2 La verdadera magnitud y las posiciones particulares</h3><p>Un elemento se ve en verdadera magnitud cuando es <b>paralelo</b> a un plano de proyección:</p><ul><li>Una <b>recta horizontal</b> (paralela al PH) se ve en VM en planta; una <b>frontal</b> (paralela al PV), en alzado.</li><li>Una figura contenida en un <b>plano horizontal o frontal</b> se ve en VM en la proyección correspondiente.</li><li>Un plano <b>proyectante</b> (perpendicular a un plano de proyección) se ve «de canto» como una recta, y en esa vista se mide su ángulo con el otro plano.</li></ul><p>El caso más sencillo, la VM de un segmento oblicuo AB, se resuelve con el <b>triángulo de desnivel</b>: se construye un triángulo rectángulo cuyos catetos son la proyección horizontal ab y la diferencia de cotas Δc entre A y B (medida en el alzado). La hipotenusa es la VM, y el ángulo que forma con ab es el ángulo de la recta con el PH. Con la proyección vertical y la diferencia de alejamientos se obtiene igualmente la VM y el ángulo con el PV.</p><p>Para figuras más complejas se usan tres métodos generales: <b>abatimientos</b>, <b>giros</b> y <b>cambios de plano</b>. Los tres son equivalentes y el resultado no depende del método, pero cada uno es más cómodo en ciertas situaciones.</p>`,
      svg: s2,
    },
    {
      html: `<h3>6.3 El abatimiento: idea general</h3><p><b>Abatir</b> un plano es girarlo alrededor de una de sus rectas, la <b>charnela</b>, hasta hacerlo coincidir con un plano de proyección (o con un plano paralelo a él). Lo más habitual es abatir sobre el PH tomando como charnela la traza horizontal h, o sobre el PV con la traza v.</p><p>Durante el giro, cada punto A del plano describe un arco de circunferencia contenido en un plano <b>perpendicular a la charnela</b>. Por eso, en la proyección horizontal:</p><ul><li>El punto abatido (A) está en la <b>perpendicular a la charnela</b> trazada por la proyección a.</li><li>La distancia de (A) a la charnela es la <b>verdadera distancia</b> de A a la charnela en el espacio (el radio del giro).</li></ul><p>Una vez abatido, el plano coincide con el PH y todo lo que contiene se ve en verdadera magnitud: longitudes, ángulos, áreas y formas. Se puede medir, construir una figura y luego <b>desabatir</b> para volver a las proyecciones.</p><p>Por convenio, los puntos abatidos se nombran entre paréntesis: (A), (B), (r)… y la charnela se marca a veces con un pequeño símbolo de bisagra. El abatimiento se puede hacer hacia uno u otro lado de la charnela; conviene elegir el que deja la figura en una zona libre de la lámina.</p>`,
      svg: s3,
    },
    {
      html: `<h3>6.4 Abatimiento de un punto: el triángulo de abatimiento</h3><p>Para abatir un punto A de un plano oblicuo sobre el PH, con charnela h:</p><ol><li>Por la proyección horizontal a se traza la <b>perpendicular a h</b>; su pie es H. El segmento aH es la proyección del radio de giro.</li><li>Por a se traza una perpendicular a aH y se lleva sobre ella la <b>cota</b> de A (tomada del alzado). Se obtiene el punto A₀.</li><li>La hipotenusa HA₀ del <b>triángulo de abatimiento</b> aHA₀ es la verdadera distancia de A a la charnela.</li><li>Con centro en H y radio HA₀ se traza un arco que corta a la perpendicular aH: ese punto es <b>(A)</b>.</li></ol><p>El ángulo en H del triángulo de abatimiento es el <b>ángulo que forma el plano con el PH</b>. Por eso basta abatir un punto para conocer esa inclinación.</p><p>Si el punto está en la charnela, coincide con su abatido. Si el plano es proyectante horizontal (vertical), el abatimiento es aún más sencillo: la cota se lleva directamente en perpendicular a la traza h desde cada proyección.</p><p>El mismo procedimiento sirve para abatir sobre el PV con charnela v, cambiando cota por alejamiento.</p>`,
      svg: s4,
      video: { id: "zVAgK4zLGvM", titulo: "Abatir un plano oblicuo sobre el plano horizontal", canal: "PDD Profesor de Dibujo", vistas: 145607, busqueda: "abatimiento de un plano diédrico" },
    },
    {
      html: `<h3>6.5 Abatimiento de rectas y de la traza vertical</h3><p>Para abatir una recta del plano basta abatir dos de sus puntos. Hay atajos muy útiles:</p><ul><li>La <b>traza horizontal</b> de una recta está en la charnela y no se mueve: solo hay que abatir otro punto.</li><li>Las <b>horizontales del plano</b> son paralelas a h y se abaten como paralelas a h.</li></ul><p>La <b>traza vertical v</b> se abate con un procedimiento especial, porque su verdadera magnitud ya se ve en el alzado:</p><ol><li>Se elige un punto V de v (proyecciones v′ en la traza y v en la LT).</li><li>Por v se traza la perpendicular a h.</li><li>Con centro en N (punto de corte de las trazas) y radio Nv′ se traza un arco que corta a esa perpendicular en (V).</li><li>La recta N(V) es la traza vertical abatida (v).</li></ol><p>El ángulo que forman h y (v) es el <b>verdadero ángulo</b> entre las dos trazas. Con h y (v) abatidas, cualquier punto del plano se abate por <b>afinidad</b>, como se explica a continuación, sin necesidad de triángulos.</p>`,
      svg: s5,
    },
    {
      html: `<h3>6.6 Desabatimiento y afinidad</h3><p>Muchas veces el problema es el inverso: se conoce una figura en <b>verdadera magnitud</b> (por ejemplo, un cuadrado de lado dado apoyado en un plano) y se quieren sus proyecciones. Se dibuja la figura en el plano abatido y se <b>desabate</b>.</p><p>La clave es que la proyección horizontal de una figura y su abatimiento son <b>figuras afines</b> (tema 3):</p><ul><li><b>Eje de afinidad</b>: la charnela h.</li><li><b>Dirección de afinidad</b>: perpendicular a h.</li><li>Una recta y su abatida se cortan en la charnela.</li></ul><p>Procedimiento:</p><ol><li>Se desabate un punto (A) con el triángulo de abatimiento al revés, o se usa la traza (v) abatida.</li><li>Para otro punto (B): se prolonga (A)(B) hasta cortar a h en M; la recta Ma contiene a b; b está en la perpendicular a h por (B).</li><li>Se repite con todos los vértices.</li><li>La proyección vertical se obtiene con las horizontales del plano o con las cotas (cada punto debe pertenecer al plano).</li></ol><p>Comprobación: lados paralelos en VM siguen siendo paralelos en la proyección (la afinidad conserva el paralelismo), pero los ángulos y las longitudes cambian.</p>`,
      svg: s6,
    },
    {
      html: `<h3>6.7 Giros: giro de un punto</h3><p><b>Girar</b> un elemento es moverlo alrededor de un <b>eje</b> sin cambiar su forma. En diédrico se usan ejes <b>perpendiculares a un plano de proyección</b>, porque así el movimiento es muy sencillo de dibujar:</p><ul><li><b>Eje vertical</b> (perpendicular al PH): la proyección horizontal del punto describe un <b>arco de circunferencia</b> con centro en la proyección del eje, e; la cota no cambia, así que la proyección vertical se desplaza en una <b>paralela a la LT</b>.</li><li><b>Eje de punta</b> (perpendicular al PV): la proyección vertical describe un arco con centro en e′ y el alejamiento no cambia; la proyección horizontal se desplaza paralela a la LT.</li></ul><p>El ángulo de giro se mide en la proyección en que el eje se ve como un punto. Todos los puntos de una figura giran el <b>mismo ángulo</b> y en el mismo sentido. Los puntos del eje no se mueven.</p><p>Notación: el punto girado se nombra con subíndice, A₁ (a₁, a′₁). A diferencia del abatimiento, en el giro el elemento sigue «en el espacio»: no se superpone a un plano de proyección, solo cambia de posición respecto de ellos.</p>`,
      svg: s7,
      video: { id: "OogtBFPiCU4", titulo: "Giro en sistema diédrico", canal: "PDD Profesor de Dibujo", vistas: 72706, busqueda: "giros sistema diédrico" },
    },
    {
      html: `<h3>6.8 Giro de una recta</h3><p>El uso más frecuente del giro es convertir una recta oblicua en <b>frontal</b> (para ver su VM en el alzado y su ángulo con el PH) o en <b>horizontal</b> (VM en planta y ángulo con el PV).</p><p>Para hacerla frontal con un eje vertical:</p><ol><li>Se elige el eje pasando por un punto A de la recta: así A no se mueve (a = e).</li><li>Se gira la proyección b alrededor de a hasta que el segmento a b₁ sea <b>paralelo a la LT</b>.</li><li>b′ se desplaza paralela a la LT hasta la vertical de b₁: se obtiene b′₁.</li><li>a′b′₁ es la <b>verdadera magnitud</b> y el ángulo que forma con la LT es el <b>ángulo de la recta con el PH</b>.</li></ol><p>Para convertir una frontal en <b>recta de punta</b> (perpendicular al PV), se gira después con un eje de punta hasta que su proyección vertical sea perpendicular a la LT. Así, dos giros sucesivos llevan cualquier recta a una posición en la que se ve como un punto, lo que sirve para medir distancias entre rectas que se cruzan y ángulos entre planos.</p>`,
      svg: s8,
      video: { id: "G25Yhy2_TBI", titulo: "Girar una recta oblicua hasta convertirla en frontal", canal: "PDD Profesor de Dibujo", vistas: 105727, busqueda: "giros sistema diédrico" },
    },
    {
      html: `<h3>6.9 Giro de un plano</h3><p>Un plano oblicuo se puede girar para convertirlo en <b>proyectante</b>. Con un eje vertical e:</p><ol><li>Se traza desde e la perpendicular a la traza h; su pie es H.</li><li>Se gira H alrededor de e hasta H₁, de modo que eH₁ sea <b>paralelo a la LT</b>.</li><li>La traza horizontal girada h₁ es la perpendicular a eH₁ por H₁: queda <b>perpendicular a la LT</b>.</li><li>El punto en que el eje corta al plano no se mueve (está en el eje). Su proyección vertical, junto con el corte de h₁ con la LT, define la nueva traza vertical v₁.</li></ol><p>Ahora el plano es <b>proyectante vertical</b>: todo lo que contiene se proyecta en alzado sobre v₁, y el ángulo de v₁ con la LT es el <b>ángulo del plano con el PH</b>. Con un segundo giro (eje de punta) se puede convertir en horizontal y ver sus figuras en VM.</p><p>Al girar un plano es útil girar a la vez un punto o una recta que se quiera estudiar, siempre con el mismo eje y el mismo ángulo.</p>`,
      svg: s9,
    },
    {
      html: `<h3>6.10 Cambios de plano: idea y cambio de un punto</h3><p>En lugar de mover el objeto, el <b>cambio de plano</b> mueve un plano de proyección: se sustituye el PV por otro plano vertical PV₁ (o el PH por otro perpendicular al PV) colocado en la posición más conveniente. Se dibuja una <b>nueva línea de tierra</b> LT₁ y se obtienen las nuevas proyecciones.</p><p>En un <b>cambio de plano vertical</b>:</p><ul><li>La proyección horizontal no cambia (a sigue siendo a).</li><li>La nueva proyección vertical a′₁ está en la <b>perpendicular a LT₁</b> trazada por a.</li><li>La <b>cota se conserva</b>: a′₁ está a la misma distancia de LT₁ que a′ de la LT.</li></ul><p>En un <b>cambio de plano horizontal</b> se mantiene la proyección vertical y se conserva el alejamiento.</p><p>La ventaja de los cambios de plano es que no deforman ni desplazan el objeto: se ve desde otro sitio. Son el equivalente diédrico a las <b>vistas auxiliares</b> del dibujo industrial, y es lo que hacen los programas CAD al crear una vista proyectada sobre una cara inclinada.</p>`,
      svg: s10,
      video: { id: "J_cU7R69Ulw", titulo: "Cambio de plano en sistema diédrico (introducción)", canal: "PDD Profesor de Dibujo", vistas: 179200, busqueda: "cambio de plano sistema diédrico" },
    },
    {
      html: `<h3>6.11 Cambio de plano de una recta</h3><p>Para ver un segmento oblicuo AB en verdadera magnitud con un cambio de plano vertical:</p><ol><li>Se traza LT₁ <b>paralela a la proyección horizontal ab</b>, a cualquier distancia.</li><li>Por a y b se trazan perpendiculares a LT₁.</li><li>Sobre ellas, al otro lado de LT₁, se llevan las cotas de A y B: se obtienen a′₁ y b′₁.</li><li>a′₁b′₁ es la <b>verdadera magnitud</b> y su ángulo con LT₁ es el ángulo de la recta con el PH, porque en el nuevo sistema la recta es frontal.</li></ol><p>Si a continuación se hace un cambio de plano horizontal con LT₂ <b>perpendicular a a′₁b′₁</b>, la recta se proyecta como un punto (se convierte en recta de punta). Este doble cambio es la herramienta estándar para hallar la <b>mínima distancia entre dos rectas que se cruzan</b>: al ver una de ellas como un punto, la distancia a la otra se mide directamente.</p><p>Elegir la nueva LT cerca del objeto ahorra espacio, pero conviene que no se superponga con las proyecciones existentes.</p>`,
      svg: s11,
    },
    {
      html: `<h3>6.12 Cambio de plano de un plano y elección del método</h3><p>Para convertir un plano oblicuo en <b>proyectante vertical</b> con un cambio de plano, se toma LT₁ <b>perpendicular a la traza h</b>. La traza horizontal no cambia; h corta a LT₁ en M, y la nueva traza vertical v₁ pasa por M y por la nueva proyección de cualquier punto del plano (por ejemplo, un punto de v, cuya cota se conoce). El ángulo de v₁ con LT₁ es el ángulo del plano con el PH.</p><p>Un segundo cambio de plano con LT₂ <b>paralela a v₁</b> convierte el plano en horizontal (respecto del nuevo sistema) y muestra sus figuras en VM: es lo que se hace para obtener la verdadera forma de una sección.</p><table class="tb"><thead><tr><th>Método</th><th>Qué se mueve</th><th>Ventaja</th></tr></thead><tbody><tr><td>Abatimiento</td><td>El plano gira sobre una traza</td><td>Directo para figuras planas y ángulos en un plano</td></tr><tr><td>Giro</td><td>El objeto gira sobre un eje</td><td>Pocos trazos con rectas; no necesita nueva LT</td></tr><tr><td>Cambio de plano</td><td>El plano de proyección</td><td>No deforma; ideal para cuerpos y vistas auxiliares</td></tr></tbody></table><p>En la PAU puedes usar el que prefieras salvo que se indique uno, pero debes dejar todos los trazos auxiliares a la vista.</p>`,
      svg: s12,
      video: { id: "anW1olWeGsI", titulo: "Convertir un plano oblicuo en proyectante mediante cambio de plano", canal: "PDD Profesor de Dibujo", vistas: 83052, busqueda: "cambio de plano sistema diédrico" },
    },
  ],
  ejemplos: [
    { enunciado: "Un segmento AB tiene proyección horizontal de 48 mm y la diferencia de cotas entre sus extremos es 20 mm. Halla su verdadera magnitud y su ángulo con el PH.", pasos: ["Triángulo de desnivel: catetos 48 y 20.", "VM = √(48² + 20²) = √2 704 = 52 mm.", "tg α = 20 / 48 → α ≈ 22,6°."], resultado: "52 mm; 22,6° con el PH." },
    { enunciado: "Un punto A de un plano tiene cota 30 mm y su proyección horizontal está a 40 mm de la charnela h. ¿A qué distancia de h queda (A)? ¿Qué ángulo forma el plano con el PH?", pasos: ["Hipotenusa del triángulo de abatimiento: √(40² + 30²) = 50 mm.", "tg φ = 30 / 40 → φ ≈ 36,9°."], resultado: "(A) a 50 mm de h; el plano forma 36,9° con el PH." },
    { enunciado: "Un plano forma 60° con el PH. Un cuadrado de 40 mm de lado está en el plano con un lado sobre h. ¿Qué figura es su proyección horizontal y qué dimensiones tiene?", pasos: ["El lado sobre h no cambia: 40 mm.", "El lado perpendicular a h se proyecta multiplicado por cos 60° = 0,5: 20 mm."], resultado: "Un rectángulo de 40 × 20 mm." },
    { enunciado: "Se gira un punto A con eje vertical. Su proyección a está a 30 mm de e y su cota es 25 mm. Tras un giro de 90°, ¿qué ha cambiado?", pasos: ["a₁ sigue a 30 mm de e, girada 90°.", "La cota no cambia: a′₁ está a 25 mm de la LT en la vertical de a₁."], resultado: "Cambian el alejamiento y la abscisa; la cota se mantiene." },
    { enunciado: "En un cambio de plano vertical, un punto A tiene cota 18 mm y alejamiento 25 mm, y su proyección a está a 32 mm de LT₁. ¿Dónde está a′₁?", pasos: ["En la perpendicular a LT₁ por a.", "Al otro lado de LT₁, a la distancia de la cota (18 mm)."], resultado: "A 18 mm de LT₁; el alejamiento antiguo no interviene." },
    { enunciado: "Un plano oblicuo tiene trazas que forman 50° con la LT (h) y 40° con la LT (v). Al abatir v, ¿qué ángulo se ve entre h y (v)?", pasos: ["Se abate un punto de v con centro en N y radio Nv′.", "El ángulo entre h y (v) es el verdadero ángulo entre las trazas, mayor que el que se ve en proyección y menor que 180°."], resultado: "Se mide en el dibujo; es el ángulo real entre las trazas en el espacio." },
  ],
  errores: [
    "Llevar el alejamiento en lugar de la cota en el triángulo de abatimiento sobre el PH.",
    "Abatir el punto sobre una paralela a la charnela en lugar de sobre la perpendicular por su proyección.",
    "Olvidar que en un giro con eje vertical la cota se conserva y desplazar la proyección vertical en vertical.",
    "Girar los puntos de una misma figura ángulos distintos o en sentidos distintos.",
    "En un cambio de plano vertical, llevar el alejamiento en lugar de la cota a partir de la nueva LT.",
    "No dibujar las líneas de referencia, lo que impide comprobar la pertenencia de los puntos al plano.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Halla la VM de un segmento cuya proyección horizontal mide 60 mm y cuyos extremos tienen cotas 10 y 35 mm.", sol: "Δc = 25. VM = √(3 600 + 625) ≈ 65 mm." },
    { nivel: "básico", q: "¿Cuándo se ve un segmento en VM en la proyección vertical?", sol: "Cuando es frontal (paralelo al PV): su proyección horizontal es paralela a la LT." },
    { nivel: "básico", q: "Define charnela.", sol: "Recta alrededor de la que gira un plano al abatirlo; normalmente una de sus trazas." },
    { nivel: "básico", q: "Abate sobre el PH un punto de un plano oblicuo con cota 25 mm cuya proyección dista 20 mm de h.", sol: "Triángulo con catetos 20 y 25; hipotenusa ≈ 32 mm. (A) a 32 mm de h en la perpendicular por a, al otro lado de h." },
    { nivel: "básico", q: "¿Qué indica el ángulo en H del triángulo de abatimiento?", sol: "El ángulo que forma el plano con el PH." },
    { nivel: "básico", q: "Gira un punto A(cota 30, alejamiento 20) 90° alrededor de un eje vertical que pasa a 40 mm de a.", sol: "a₁ en el arco de centro e y radio 40 tras 90°; a′₁ en su vertical a 30 mm de la LT." },
    { nivel: "básico", q: "¿Qué se conserva en un giro con eje de punta?", sol: "El alejamiento de cada punto; la proyección vertical gira alrededor de e′." },
    { nivel: "básico", q: "Haz un cambio de plano vertical de un punto con cota 20 mm usando una LT₁ inclinada 30°.", sol: "Perpendicular a LT₁ por a; a′₁ a 20 mm de LT₁ al otro lado." },
    { nivel: "básico", q: "¿Qué se conserva en un cambio de plano horizontal?", sol: "La proyección vertical y el alejamiento." },
    { nivel: "básico", q: "Abate la traza vertical de un plano oblicuo.", sol: "Un punto V de v: perpendicular a h por v (en la LT); arco de centro N y radio Nv′; (v) = N(V)." },
    { nivel: "básico", q: "¿Qué relación geométrica hay entre la proyección horizontal de una figura plana y su abatimiento sobre el PH?", sol: "Son afines: eje la charnela h y dirección perpendicular a h." },
    { nivel: "básico", q: "Nombra los tres métodos para obtener verdaderas magnitudes en diédrico.", sol: "Abatimientos, giros y cambios de plano." },
    { nivel: "medio", q: "Halla la VM de un triángulo contenido en un plano oblicuo por abatimiento.", sol: "Se abate un vértice con el triángulo de abatimiento; los otros por afinidad (lados prolongados hasta h). El triángulo abatido está en VM." },
    { nivel: "medio", q: "Dibuja las proyecciones de un hexágono regular de 25 mm de lado contenido en un plano oblicuo, con un lado sobre h.", sol: "Hexágono en VM en el abatimiento con un lado en h; desabatimiento por afinidad; alzado con horizontales del plano." },
    { nivel: "medio", q: "Halla el ángulo de un plano oblicuo con el PH por giro.", sol: "Eje vertical; se gira h hasta que sea perpendicular a la LT; la nueva v₁ forma con la LT el ángulo pedido." },
    { nivel: "medio", q: "Convierte una recta oblicua en frontal por giro y mide su ángulo con el PH.", sol: "Eje vertical por A; b gira hasta ab₁ ∥ LT; b′₁ a la altura de b′. El ángulo de a′b′₁ con la LT es el pedido." },
    { nivel: "medio", q: "Convierte una recta oblicua en horizontal por giro y mide su ángulo con el PV.", sol: "Eje de punta por A; b′ gira hasta a′b′₁ ∥ LT; b₁ con el mismo alejamiento que b. ab₁ es la VM y su ángulo con la LT es el ángulo con el PV." },
    { nivel: "medio", q: "Halla la VM de un segmento por cambio de plano.", sol: "LT₁ paralela a ab; nuevas proyecciones con las cotas; a′₁b′₁ es la VM." },
    { nivel: "medio", q: "Convierte un plano oblicuo en proyectante vertical por cambio de plano.", sol: "LT₁ ⊥ h; se cambia un punto de v (cota conocida); v₁ pasa por M = h ∩ LT₁ y por la nueva proyección." },
    { nivel: "medio", q: "Un plano forma 45° con el PH. ¿Cuánto mide la proyección horizontal de un segmento de 50 mm del plano perpendicular a h?", sol: "50 · cos 45° ≈ 35,4 mm." },
    { nivel: "medio", q: "Desabate un punto (A) situado a 50 mm de h en un plano que forma 60° con el PH. ¿A qué distancia de h está a y qué cota tiene A?", sol: "a a 50 · cos 60° = 25 mm de h; cota 50 · sen 60° ≈ 43,3 mm." },
    { nivel: "medio", q: "¿Por qué en un giro conviene que el eje pase por un punto del objeto?", sol: "Ese punto no se mueve y la construcción tiene menos trazos: basta girar los demás alrededor de él." },
    { nivel: "medio", q: "Compara cambio de plano y giro para hallar la VM de una recta. ¿En qué se parecen?", sol: "Ambos construyen el mismo triángulo de desnivel: en el giro se mueve la recta hasta ser frontal; en el cambio de plano se coloca el plano paralelo a ella." },
    { nivel: "avanzado", q: "Halla la distancia entre dos rectas que se cruzan mediante dos cambios de plano.", sol: "1.º LT₁ ∥ a la proyección horizontal de r: r se ve en VM. 2.º LT₂ ⊥ a r₁′: r se proyecta como un punto. La distancia de ese punto a la nueva proyección de s es la mínima distancia." },
    { nivel: "avanzado", q: "Construye en un plano oblicuo un triángulo equilátero de lado 40 mm con un vértice en un punto dado A del plano y otro en h.", sol: "Se abate A; con centro (A) y radio 40 se corta h en (B) = b; se completa el triángulo en VM y se desabate por afinidad." },
    { nivel: "avanzado", q: "Halla el ángulo que forman dos rectas que se cortan, abatiendo el plano que determinan.", sol: "Se hallan las trazas del plano de las dos rectas (o una horizontal como charnela); se abaten el punto de corte y un punto de cada recta; el ángulo entre (r) y (s) es el verdadero." },
    { nivel: "avanzado", q: "Explica por qué el abatimiento de la traza vertical se hace con centro en N y radio Nv′.", sol: "N está en la charnela y no se mueve; el segmento NV está en el PV, así que su VM es Nv′. Al abatir, la distancia de N a (V) se conserva." },
    { nivel: "avanzado", q: "Gira un plano oblicuo dos veces para convertirlo en horizontal y obtener la VM de una figura que contiene.", sol: "1.º giro (eje vertical): h perpendicular a la LT, plano proyectante vertical. 2.º giro (eje de punta): v₁ paralela a la LT, plano horizontal. La figura se ve en VM en planta." },
    { nivel: "avanzado", q: "Determina la sección de un prisma recto de base cuadrada por un plano oblicuo y su VM por cambio de plano.", sol: "Cambio de plano con LT₁ ⊥ h: el plano se ve de canto y corta a las aristas en puntos inmediatos. Las proyecciones horizontales coinciden con la base; la VM se obtiene con un segundo cambio (LT₂ ∥ v₁) o por abatimiento." },
    { nivel: "avanzado", q: "¿Qué relación hay entre el ángulo φ de un plano con el PH y la razón de la afinidad entre proyección y abatimiento?", sol: "Las distancias a h en proyección son las del abatimiento multiplicadas por cos φ: la razón de la afinidad es cos φ (con signo según el lado del abatimiento)." },
    { nivel: "avanzado", q: "Explica cómo hallar el ángulo de una recta con un plano oblicuo usando los métodos del tema.", sol: "Se halla el ángulo complementario: por un punto de la recta se traza la perpendicular al plano; el ángulo entre la recta y esa perpendicular (abatiendo el plano que forman) es 90° menos el pedido." },
  ],
  quiz: reparte([
    { q: "Un segmento se ve en VM en planta si es…", o: ["frontal", "horizontal", "de punta", "oblicuo"], a: 1, e: "Paralelo al PH." },
    { q: "En el triángulo de desnivel, los catetos son…", o: ["las dos proyecciones", "la proyección horizontal y la diferencia de cotas", "las cotas", "el alejamiento y la cota"], a: 1, e: "La hipotenusa es la VM." },
    { q: "Abatir un plano es…", o: ["proyectarlo", "girarlo alrededor de una recta hasta un plano de proyección", "trasladarlo", "cortarlo"], a: 1, e: "Charnela." },
    { q: "Al abatir sobre el PH, el punto abatido está en…", o: ["una paralela a h", "la perpendicular a h por la proyección", "la LT", "la traza v"], a: 1, e: "El giro es perpendicular a la charnela." },
    { q: "En el triángulo de abatimiento sobre el PH se lleva…", o: ["el alejamiento", "la cota", "la abscisa", "la VM"], a: 1, e: "Altura sobre el PH." },
    { q: "El ángulo en H del triángulo de abatimiento es…", o: ["el del plano con el PV", "el del plano con el PH", "90°", "el de las trazas"], a: 1, e: "Inclinación del plano." },
    { q: "La traza vertical se abate con centro en…", o: ["la LT", "N", "H", "el origen"], a: 1, e: "Radio Nv′." },
    { q: "Proyección y abatimiento son figuras…", o: ["homólogas", "afines", "inversas", "iguales"], a: 1, e: "Eje h, dirección perpendicular." },
    { q: "En un giro con eje vertical se conserva…", o: ["el alejamiento", "la cota", "la proyección horizontal", "la abscisa"], a: 1, e: "La proyección vertical se mueve paralela a la LT." },
    { q: "En un giro con eje de punta se conserva…", o: ["la cota", "el alejamiento", "la proyección vertical", "nada"], a: 1, e: "Por simetría con el anterior." },
    { q: "Para hacer frontal una recta por giro, ab₁ debe quedar…", o: ["perpendicular a la LT", "paralela a la LT", "a 45°", "sobre h"], a: 1, e: "Frontal: horizontal en planta paralela a la LT." },
    { q: "Un plano girado hasta que h ⊥ LT pasa a ser…", o: ["horizontal", "proyectante vertical", "frontal", "paralelo a la LT"], a: 1, e: "Se ve de canto en alzado." },
    { q: "En un cambio de plano vertical se conserva…", o: ["el alejamiento", "la cota", "la proyección vertical", "la LT"], a: 1, e: "La proyección horizontal no cambia." },
    { q: "Para ver la VM de AB con un cambio de plano vertical, LT₁ se traza…", o: ["perpendicular a ab", "paralela a ab", "por a′", "paralela a a′b′"], a: 1, e: "La recta queda frontal." },
    { q: "Para convertir un plano oblicuo en proyectante por cambio de plano, LT₁ se traza…", o: ["paralela a h", "perpendicular a h", "paralela a v", "por N"], a: 1, e: "El plano se ve de canto." },
    { q: "Dos cambios de plano pueden convertir una recta oblicua en…", o: ["de punta (un punto)", "una curva", "un plano", "nada"], a: 0, e: "Primero frontal, después de punta." },
    { q: "Los puntos del eje de giro…", o: ["giran 90°", "no se mueven", "se abaten", "se trasladan"], a: 1, e: "Son fijos." },
    { q: "Los puntos de la charnela, al abatir…", o: ["se mueven", "coinciden con sus abatidos", "desaparecen", "giran 180°"], a: 1, e: "Están en el eje del giro." },
    { q: "Si un plano forma 60° con el PH, la razón proyección/VM de las distancias a h es…", o: ["0,5", "0,87", "1", "2"], a: 0, e: "cos 60°." },
    { q: "El método que no mueve el objeto es…", o: ["abatimiento", "giro", "cambio de plano", "ninguno"], a: 2, e: "Se mueve el plano de proyección." },
  ]),
  examen: reparte([
    { q: "Proyección horizontal 40 mm y Δc = 30 mm: VM =", o: ["50 mm", "70 mm", "10 mm", "35 mm"], a: 0, e: "3-4-5." },
    { q: "Punto con cota 24 a 18 mm de h en planta: distancia de (A) a h…", o: ["30 mm", "42 mm", "6 mm", "24 mm"], a: 0, e: "√(18² + 24²)." },
    { q: "Ángulo del plano anterior con el PH (tg = 24/18):", o: ["≈ 53°", "≈ 37°", "45°", "60°"], a: 0, e: "arctg 1,33." },
    { q: "Cuadrado de 30 mm con un lado en h, plano a 60°: la proyección es un rectángulo de…", o: ["30 × 15", "30 × 26", "15 × 15", "30 × 30"], a: 0, e: "30 · cos 60°." },
    { q: "Giro con eje vertical: la proyección vertical de un punto se mueve…", o: ["en vertical", "paralela a la LT", "en arco", "no se mueve"], a: 1, e: "Cota constante." },
    { q: "Cambio de plano horizontal: la nueva proyección horizontal está a … de LT₁.", o: ["la cota", "el alejamiento", "la VM", "cero"], a: 1, e: "Se conserva el alejamiento." },
    { q: "Para ver una recta como un punto se necesitan al menos…", o: ["1 cambio", "2 cambios", "3 cambios", "0"], a: 1, e: "Si es oblicua." },
    { q: "La recta abatida (r) y su proyección r se cortan…", o: ["en la LT", "en la charnela", "en N", "nunca"], a: 1, e: "Afinidad: eje h." },
  ]),
  feynman: ["Por qué en las proyecciones casi nada se ve en verdadera magnitud", "Cómo funciona el triángulo de abatimiento y qué mide cada lado", "Por qué la proyección y el abatimiento de una figura son afines", "Qué se conserva en un giro con eje vertical", "En qué se diferencia un cambio de plano de un giro"],
  glosario: [
    ["Verdadera magnitud (VM)", "Tamaño real de un segmento, ángulo o figura."],
    ["Triángulo de desnivel", "Triángulo rectángulo con la proyección y la diferencia de cotas; su hipotenusa es la VM."],
    ["Abatimiento", "Giro de un plano alrededor de una recta hasta un plano de proyección."],
    ["Charnela", "Recta alrededor de la que se abate un plano."],
    ["Triángulo de abatimiento", "Triángulo con la distancia a la charnela en proyección y la cota; da el radio de giro."],
    ["Desabatimiento", "Operación inversa al abatimiento."],
    ["Giro", "Movimiento de un elemento alrededor de un eje perpendicular a un plano de proyección."],
    ["Eje vertical", "Eje perpendicular al PH; en planta se ve como un punto."],
    ["Eje de punta", "Eje perpendicular al PV; en alzado se ve como un punto."],
    ["Cambio de plano", "Sustitución de un plano de proyección por otro con nueva línea de tierra."],
    ["Recta frontal", "Recta paralela al PV."],
    ["Recta horizontal", "Recta paralela al PH."],
    ["Recta de punta", "Recta perpendicular al PV; su proyección vertical es un punto."],
    ["Plano proyectante", "Plano perpendicular a un plano de proyección; se ve como una recta."],
  ],
  situacion: {
    titulo: "La placa solar del tejado",
    reto: "Una familia quiere instalar una placa solar rectangular de 1,7 × 1,0 m en un faldón de tejado inclinado 30°. Vuestro grupo debe dibujar las proyecciones de la placa y calcular cuánto espacio ocupa en planta y su posición en alzado.",
    pasos: [
      "Representad el faldón del tejado como un plano oblicuo con sus trazas a escala 1:50.",
      "Abatid el plano y dibujad la placa en verdadera magnitud, separada 30 cm de la cumbrera.",
      "Desabatid la placa por afinidad para obtener la planta y, con las horizontales del plano, el alzado.",
      "Comprobad el resultado con un cambio de plano que muestre el tejado de canto.",
      "Calculad el área que ocupa en planta y comparadla con la real.",
    ],
    producto: "Lámina A3 con las tres construcciones y una ficha técnica con las medidas de la placa en planta y alzado.",
    evaluacion: [
      "Abate y desabate correctamente usando la afinidad.",
      "Comprueba el resultado con un segundo método.",
      "Relaciona el área en planta con el coseno de la inclinación.",
      "Presenta la lámina con claridad y rotulación normalizada.",
    ],
  },
  figura: fig("Métodos del diédrico de un vistazo", "Resumen: abatimientos, giros y cambios de plano", [
    ["Abatimiento", ["charnela h o v", "triángulo: cota", "(A) ⊥ a h", "afinidad"], "var(--red)"],
    ["Giros", ["eje vertical: cota fija", "eje de punta: alej. fijo", "recta → frontal", "plano → proyectante"], "var(--pen)"],
    ["Cambios de plano", ["nueva LT", "PV₁: cota fija", "LT₁ ∥ ab: VM", "LT₁ ⊥ h: canto"], "var(--leaf)"],
    ["Objetivo", ["posiciones particulares", "verdadera magnitud", "ángulos", "distancias"], "var(--inf)"],
  ]),
  video: { id: "AQRHwUZS0GM", titulo: "Girar un plano oblicuo para convertirlo en proyectante", canal: "PDD Profesor de Dibujo", vistas: 85681, busqueda: "giros sistema diédrico" },
  mapa: mapa("MÉTODOS DEL DIÉDRICO", "var(--bac)", [
    ["Abatimiento", "charnela · triángulo · afinidad", "var(--red)"],
    ["Giros", "eje vertical · eje de punta", "var(--pen)"],
    ["Cambios de plano", "nueva LT · cota o alejamiento", "var(--leaf)"],
    ["Verdadera magnitud", "rectas · planos · figuras", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["VM de un segmento", "Hipotenusa del triángulo (ab, Δc)."],
    ["Charnela", "Recta fija del abatimiento (h o v)."],
    ["Abatido (A)", "En la perpendicular a h por a."],
    ["Triángulo de abatimiento", "Catetos: aH y la cota."],
    ["Abatir la traza v", "Arco de centro N y radio Nv′."],
    ["Proyección y abatimiento", "Afines: eje h."],
    ["Giro eje vertical", "Se conserva la cota."],
    ["Giro eje de punta", "Se conserva el alejamiento."],
    ["Recta → frontal", "ab₁ ∥ LT; VM en alzado."],
    ["Cambio de plano vertical", "Se conserva la cota."],
    ["LT₁ ∥ ab", "VM del segmento."],
    ["LT₁ ⊥ h", "Plano proyectante (de canto)."],
  ],
  familias: ["Con una carpeta abierta como un libro, explicad juntos qué es abatir un plano sobre la mesa.", "Medid una rampa o una escalera en planta y en realidad y comparad las medidas.", "Pedid que os explique por qué un tejado inclinado se ve más pequeño en un plano de planta.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema diédrico; métodos: abatimientos, giros y cambios de plano; verdaderas magnitudes de segmentos y figuras planas; ángulos de rectas y planos con los planos de proyección; relación entre abatimiento y afinidad (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Maqueta de cartón con PH y PV y un plano articulado para abatir físicamente.", "GeoGebra 3D: comparar el abatimiento con el giro de la vista.", "CAD: crear vistas auxiliares sobre caras inclinadas y relacionarlas con el cambio de plano.", "Relación con Tecnología: verdadera forma de chapas inclinadas para su corte."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sistema diédrico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_di%C3%A9drico" },
    { t: "Gaspard Monge, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gaspard_Monge" },
  ],
  revisado: "2026-11-21",
};
