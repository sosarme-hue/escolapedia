// Dibujo Técnico II 2º Bachillerato · Tema 9. Nivel libro. Superficies, secciones y desarrollos calculados en 3D.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, pt, poli, circ, mid, dist, unit, add, sub, mul, tx, dash, LT, planoD, v3, envolvente, polVista, vistaAxo, corteRR, P2 } = G;

const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const L = (P, s, dx, dy, c = "var(--ink)", a = "start", sz = 11) => tx(P[0] + dx, P[1] + dy, s, { s: sz, b: 1, a, c });
const fino = (A, B) => seg(A, B, "var(--muted)", 0.8, 'stroke-dasharray="2 2"');
const curva = (pts, c = "var(--red)", w = 2.2, cerrada = false, fill = 0) => `<path d="M${pts.map(P2).join(" L ")}${cerrada ? " Z" : ""}" fill="${fill ? c : "none"}" fill-opacity="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const rad = G.rad;
const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i, n));

// Dibujo de superficies facetadas: solo contornos aparentes y aristas de caras grandes (bases).
function polSil(pol, P, w, c = "var(--pen)", fill = 0.1, wv = 2.2) {
  const vis = pol.caras.map((f) => v3.dot(f.n, w) > 1e-6), Q = pol.V.map(P), base = (f) => pol.caras[f].idx.length > 4;
  const caras = pol.caras.filter((f, i) => vis[i]).map((f) => `<path d="M${f.idx.map((i) => P2(Q[i])).join(" L ")} Z" fill="${c}" fill-opacity="${fill}" stroke="${c}" stroke-opacity="0" stroke-width="0.6"/>`).join("");
  const dibu = pol.aristas.filter((e) => e.caras.some(base) || vis[e.caras[0]] !== vis[e.caras[1]]);
  const oc = dibu.filter((e) => !e.caras.some((f) => vis[f])), vi = dibu.filter((e) => e.caras.some((f) => vis[f]));
  return caras + oc.map((e) => seg(Q[e.a], Q[e.b], c, 1.1, 'stroke-dasharray="4 3"')).join("") + vi.map((e) => seg(Q[e.a], Q[e.b], c, wv)).join("");
}
const cono = (C, R, H, n = 36) => envolvente(rango(n, (i) => [C[0] + R * Math.cos((2 * Math.PI * i) / n), C[1] + R * Math.sin((2 * Math.PI * i) / n), C[2]]).concat([[C[0], C[1], C[2] + H]]));
const cilindro = (C, R, H, n = 32) => envolvente(rango(n, (i) => [C[0] + R * Math.cos((2 * Math.PI * i) / n), C[1] + R * Math.sin((2 * Math.PI * i) / n), C[2]]).flatMap((p) => [p, [p[0], p[1], p[2] + H]]));
const piramide = (C, R, H, n, g0 = 0) => envolvente(rango(n, (i) => [C[0] + R * Math.cos(rad(g0 + (360 * i) / n)), C[1] + R * Math.sin(rad(g0 + (360 * i) / n)), C[2]]).concat([[C[0], C[1], C[2] + H]]));
const prisma = (C, R, H, n, g0 = 0) => envolvente(rango(n, (i) => [C[0] + R * Math.cos(rad(g0 + (360 * i) / n)), C[1] + R * Math.sin(rad(g0 + (360 * i) / n)), C[2]]).flatMap((p) => [p, [p[0], p[1], p[2] + H]]));
const planta = (yt) => (p) => [p[0], yt + p[1]], alzado = (yt) => (p) => [p[0], yt - p[2]];
const diedrico = (pol, yt, c = "var(--pen)", sil = false) => (sil ? polSil : polVista)(pol, planta(yt), [0, 0, 1], c) + (sil ? polSil : polVista)(pol, alzado(yt), [0, 1, 0], c);
// Corte de un segmento 3D con el plano f(P) = 0.
const corte = (A, B, f) => { const fa = f(A), fb = f(B); if (fa * fb > 0 || fa === fb) return null; const t = fa / (fa - fb); return v3.add(A, v3.mul(v3.sub(B, A), t)); };

// 9.1 Clasificación de superficies.
const s1 = (() => {
  const A = (x) => vistaAxo([x, 100], 1, 25, 22);
  const cuerpos = [
    [piramide([0, 0, -26], 20, 52, 4, 20), "pirámide", 30, "var(--red)", false],
    [prisma([0, 0, -26], 18, 52, 6), "prisma", 80, "var(--pen)", false],
    [cono([0, 0, -26], 20, 52), "cono", 130, "var(--leaf)", true],
    [cilindro([0, 0, -26], 18, 52), "cilindro", 180, "var(--inf)", true],
  ];
  return dib("Superficies y cuerpos más usados: radiadas (pirámide y cono), prismáticas (prisma y cilindro) y de revolución (esfera)", cuerpos.map(([pol, n, x, c, sil]) => { const V = A(x); return (sil ? polSil : polVista)(pol, V.P, V.w, c, 0.12, 1.8) + tx(x, 150, n, { s: 10, b: 1, a: "middle", c }); }).join("") + `<circle cx="230" cy="100" r="20" fill="var(--red)" fill-opacity="0.12" stroke="var(--red)" stroke-width="1.8"/><ellipse cx="230" cy="100" rx="20" ry="6" fill="none" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 2"/>${tx(230, 150, "esfera", { s: 10, b: 1, a: "middle", c: "var(--red)" })}${tx(130, 26, "radiadas · prismáticas · de revolución", { s: 10.5, b: 1, a: "middle", c: "var(--ink)" })}`);
})();

// 9.2 Pirámide y punto sobre una cara.
const s2 = (() => {
  const yt = 90, C = [130, 44, 0], H = 74, pol = piramide(C, 34, H, 4, 25), Vv = [C[0], C[1], H];
  const B = pol.V.slice(0, 4), Mb = v3.add(B[0], v3.mul(v3.sub(B[1], B[0]), 0.55)), P3 = v3.add(Vv, v3.mul(v3.sub(Mb, Vv), 0.62)), pp = planta(yt), pa = alzado(yt);
  return dib("Pirámide recta de base cuadrada y punto P sobre una cara: se traza por p la recta que une el vértice con un punto M de la base, se lleva M al alzado y sobre v′m′ se obtiene p′", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt)}${seg(pp(Vv), pp(Mb), "var(--leaf)", 1.6)}${seg(pa(Vv), pa(Mb), "var(--leaf)", 1.6)}${fino(pp(Mb), pa(Mb))}${fino(pp(P3), pa(P3))}${pt(pp(P3), "p", 6, 4, "var(--red)")}${pt(pa(P3), "p′", 6, 0, "var(--red)")}${pt(pp(Mb), "m", 6, 8, "var(--leaf)")}${pt(pa(Mb), "m′", 2, 12, "var(--leaf)")}${L(pa(Vv), "v′", 6, 4)}`, "cl92") + tx(10, 172, "recta auxiliar por v y m", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.3 Cono y punto sobre su superficie.
const s3 = (() => {
  const yt = 92, C = [120, 46, 0], R = 36, H = 76, pol = cono(C, R, H, 48), Vv = [C[0], C[1], H], th = rad(55), Gb = [C[0] + R * Math.cos(th), C[1] + R * Math.sin(th), 0], P3 = v3.add(Vv, v3.mul(v3.sub(Gb, Vv), 0.6)), pp = planta(yt), pa = alzado(yt);
  return dib("Cono recto y punto sobre su superficie: la generatriz que pasa por el punto une el vértice con un punto G de la circunferencia de la base; en el alzado se dibuja v′g′ y sobre ella p′. Los contornos aparentes del alzado son las generatrices extremas", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt, "var(--pen)", true)}${seg(pp(Vv), pp(Gb), "var(--leaf)", 1.6)}${seg(pa(Vv), pa(Gb), "var(--leaf)", 1.6)}${fino(pp(Gb), pa(Gb))}${fino(pp(P3), pa(P3))}${pt(pp(P3), "p", 6, -2, "var(--red)")}${pt(pa(P3), "p′", 6, 0, "var(--red)")}${pt(pp(Gb), "g", 6, 6, "var(--leaf)")}${pt(pp(Vv), "v", -12, -2)}${L(pa(Vv), "v′", 6, 4)}`, "cl93") + tx(250, 172, "generatriz VG", { s: 10.5, b: 1, a: "end", c: "var(--leaf)" }));
})();

// 9.4 Esfera y punto sobre ella mediante un paralelo.
const s4 = (() => {
  const yt = 88, O = [120, 46, 42], R = 40, p = [O[0] + 22, O[1] + 18], rho = Math.hypot(p[0] - O[0], p[1] - O[1]), cP = O[2] + Math.sqrt(R * R - rho * rho);
  return dib("Esfera: en planta su contorno es el ecuador y en alzado el meridiano principal; un punto de la superficie se sitúa con el paralelo que pasa por él, que en planta es una circunferencia y en alzado un segmento horizontal", clip(`${LT(yt, 8, 252)}${circ([O[0], yt + O[1]], R, "var(--pen)", 2.2, 'fill="var(--pen)" fill-opacity="0.08"')}${circ([O[0], yt - O[2]], R, "var(--pen)", 2.2, 'fill="var(--pen)" fill-opacity="0.08"')}${seg([O[0] - R, yt - O[2]], [O[0] + R, yt - O[2]], "var(--muted)", 0.9, dash)}${circ([O[0], yt + O[1]], rho, "var(--leaf)", 1.6)}${seg([O[0] - rho, yt - cP], [O[0] + rho, yt - cP], "var(--leaf)", 1.8)}${fino([p[0], yt + p[1]], [p[0], yt - cP])}${pt([p[0], yt + p[1]], "p", 6, 4, "var(--red)")}${pt([p[0], yt - cP], "p′", 6, -2, "var(--red)")}${pt([O[0], yt + O[1]], "o", -12, -2)}${pt([O[0], yt - O[2]], "o′", -14, -2)}`, "cl94") + tx(10, 172, "paralelo por P", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.5 Sección de una pirámide por un plano proyectante vertical.
const s5 = (() => {
  const yt = 70, C = [168, 40, 0], H = 66, pol = piramide(C, 30, H, 5, 90), x0 = 120, m = Math.tan(rad(28)), f = (p) => p[2] - m * (p[0] - x0);
  const pts = pol.aristas.map((e) => corte(pol.V[e.a], pol.V[e.b], f)).filter(Boolean), c3 = pts.reduce((s, p) => v3.add(s, p), [0, 0, 0]).map((v) => v / pts.length), sec = pts.sort((p, q) => Math.atan2(p[1] - c3[1], p[0] - c3[0]) - Math.atan2(q[1] - c3[1], q[0] - c3[0]));
  const pp = planta(yt), pa = alzado(yt), ab = sec.map((p) => [x0 - Math.hypot(p[0] - x0, p[2]), yt + p[1]]);
  return dib("Sección de una pirámide por un plano proyectante vertical: los puntos de corte de las aristas se leen en el alzado sobre la traza v, se llevan a la planta por referencias y la verdadera magnitud se obtiene abatiendo el plano sobre el PH", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt)}${seg([x0, yt], [x0 + 140, yt - 140 * m], "var(--red)", 2)}${seg([x0, yt], [x0, 178], "var(--red)", 1.4)}${sec.map((p) => fino(pp(p), pa(p))).join("")}${poli(sec.map(pp), "var(--red)", 2.2, "var(--red)", 0.22)}${poli(ab, "var(--leaf)", 2.2, "var(--leaf)", 0.16)}${sec.map((p, i) => seg(pp(p), ab[i], "var(--muted)", 0.7, 'stroke-dasharray="2 2"')).join("")}`, "cl95") + L([x0 + 120, yt - 120 * m], "v", -4, 14, "var(--red)") + L([x0, 172], "h", 4, 0, "var(--red)") + tx(10, 22, "sección en VM", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.6 Sección de un prisma recto por un plano oblicuo.
const s6 = (() => {
  const yt = 86, PL = planoD(262, 0.5, 0.45, 1, yt), C = [130, 40, 0], R = 26, H = 70, pol = prisma(C, R, H, 6, 0), base = pol.V.filter((p) => p[2] === 0);
  const sec = rango(6, (i) => { const x = C[0] + R * Math.cos(rad(60 * i)), o = C[1] + R * Math.sin(rad(60 * i)); return [x, o, PL.cota(x, o)]; }), pp = planta(yt), pa = alzado(yt);
  return dib("Sección de un prisma recto por un plano oblicuo: las aristas son verticales, así que la planta de la sección coincide con la base y la cota de cada punto se obtiene con una horizontal del plano o con un plano proyectante auxiliar", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt)}${seg(PL.N, PL.hTr(150), "var(--muted)", 1.8)}${seg(PL.N, PL.vTr(90), "var(--muted)", 1.8)}${poli(sec.map(pa), "var(--red)", 2.2, "var(--red)", 0.2)}${poli(sec.map(pp), "var(--red)", 2.2, "var(--red)", 0.12)}`, "cl96") + L(PL.vTr(100), "v", 6, 8, "var(--muted)") + L(PL.hTr(200), "h", -8, 0, "var(--muted)", "end") + tx(10, 172, "planta de la sección = base", { s: 10.5, b: 1, a: "start", c: "var(--red)" }));
})();

// 9.7 Sección del cilindro: elipse.
const s7 = (() => {
  const yt = 76, C = [176, 42, 0], R = 26, H = 66, pol = cilindro(C, R, H, 40), x0 = 130, m = Math.tan(rad(35)), pp = planta(yt), pa = alzado(yt);
  const sec = rango(48, (i) => { const t = (2 * Math.PI * i) / 48, x = C[0] + R * Math.cos(t), o = C[1] + R * Math.sin(t); return [x, o, m * (x - x0)]; }), ab = sec.map((p) => [x0 - Math.hypot(p[0] - x0, p[2]), yt + p[1]]);
  return dib("Sección de un cilindro recto por un plano proyectante: el alzado de la sección es un segmento sobre la traza v, la planta coincide con la base y la verdadera magnitud, obtenida por abatimiento, es una elipse", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt, "var(--pen)", true)}${seg([x0, yt], [x0 + 120, yt - 120 * m], "var(--red)", 2)}${seg([x0, yt], [x0, 178], "var(--red)", 1.4)}${curva(ab, "var(--leaf)", 2.2, true, 0.14)}${[0, 6, 12, 18, 24, 30, 36, 42].map((i) => seg(pp(sec[i]), ab[i], "var(--muted)", 0.7, 'stroke-dasharray="2 2"')).join("")}${seg(pa(sec[24]), pa(sec[0]), "var(--red)", 3)}`, "cl97") + L([x0 + 96, yt - 96 * m], "v", 6, 4, "var(--red)") + tx(10, 22, "sección en VM: elipse", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.8 Sección de un cono: elipse por generatrices.
const s8 = (() => {
  const yt = 80, C = [170, 44, 0], R = 32, H = 72, pol = cono(C, R, H, 48), Vv = [C[0], C[1], H], x0 = 118, m = Math.tan(rad(26)), f = (p) => p[2] - m * (p[0] - x0), pp = planta(yt), pa = alzado(yt);
  const sec = rango(48, (i) => { const t = (2 * Math.PI * i) / 48; return corte(Vv, [C[0] + R * Math.cos(t), C[1] + R * Math.sin(t), 0], f); }).filter(Boolean), ab = sec.map((p) => [x0 - Math.hypot(p[0] - x0, p[2]), yt + p[1]]);
  return dib("Sección de un cono por un plano proyectante que corta a todas las generatrices: se obtiene una elipse; cada punto se halla sobre una generatriz, su planta es una curva cerrada y su verdadera magnitud se ve al abatir el plano", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt, "var(--pen)", true)}${seg([x0, yt], [x0 + 140, yt - 140 * m], "var(--red)", 2)}${seg([x0, yt], [x0, 178], "var(--red)", 1.4)}${[0, 8, 16, 24, 32, 40].map((i) => seg(pp(Vv), pp([C[0] + R * Math.cos((2 * Math.PI * i) / 48), C[1] + R * Math.sin((2 * Math.PI * i) / 48), 0]), "var(--muted)", 0.7)).join("")}${curva(sec.map(pp), "var(--red)", 2.2, true, 0.18)}${curva(ab, "var(--leaf)", 2.2, true, 0.14)}`, "cl98") + L([x0 + 120, yt - 120 * m], "v", -2, 14, "var(--red)") + tx(10, 22, "elipse en VM", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.9 Sección de una esfera por un plano proyectante.
const s9 = (() => {
  const yt = 84, O = [150, 46, 42], R = 38, al = rad(35), x0 = 116, u = [Math.cos(al), 0, Math.sin(al)], nrm = [-Math.sin(al), 0, Math.cos(al)], d = v3.dot(v3.sub(O, [x0, 0, 0]), nrm), Cs = v3.sub(O, v3.mul(nrm, d)), rho = Math.sqrt(R * R - d * d);
  const sec = rango(60, (i) => { const t = (2 * Math.PI * i) / 60; return v3.add(Cs, v3.add(v3.mul(u, rho * Math.cos(t)), [0, rho * Math.sin(t), 0])); }), pp = planta(yt), pa = alzado(yt), ab = sec.map((p) => [x0 - Math.hypot(p[0] - x0, p[2]), yt + p[1]]);
  return dib("Sección de una esfera por un plano proyectante: siempre es una circunferencia; en el alzado se ve como un segmento, en la planta como una elipse y en el abatimiento en verdadera magnitud", clip(`${LT(yt, 8, 252)}${circ(pp(O), R, "var(--pen)", 2.2, 'fill="var(--pen)" fill-opacity="0.07"')}${circ(pa(O), R, "var(--pen)", 2.2, 'fill="var(--pen)" fill-opacity="0.07"')}${seg([x0, yt], [x0 + 120, yt - 120 * Math.tan(al)], "var(--red)", 2)}${seg([x0, yt], [x0, 178], "var(--red)", 1.4)}${curva(sec.map(pp), "var(--red)", 2.2, true, 0.16)}${curva(ab, "var(--leaf)", 2.2, true, 0.14)}${seg(pa(sec[0]), pa(sec[30]), "var(--red)", 3)}`, "cl99") + tx(10, 22, "circunferencia en VM", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.10 Intersección de una recta con un cono: plano auxiliar por el vértice.
const s10 = (() => {
  const yt = 84, C = [130, 46, 0], R = 36, H = 70, pol = cono(C, R, H, 48), Vv = [C[0], C[1], H], R1 = [30, 82, 14], R2 = [236, 34, 46], pp = planta(yt), pa = alzado(yt);
  const lin = (A, B, t) => v3.add(A, v3.mul(v3.sub(B, A), t)), tz = (A, B) => -A[2] / (B[2] - A[2]);
  const Hr = lin(R1, R2, tz(R1, R2)), Hs = lin(Vv, R1, tz(Vv, R1));
  // Corte de la recta HrHs con la circunferencia de la base.
  const d = v3.sub(Hs, Hr), f0 = v3.sub(Hr, C), A2 = d[0] ** 2 + d[1] ** 2, B2 = 2 * (f0[0] * d[0] + f0[1] * d[1]), C2 = f0[0] ** 2 + f0[1] ** 2 - R * R, disc = Math.sqrt(B2 * B2 - 4 * A2 * C2);
  const Gs = [(-B2 - disc) / (2 * A2), (-B2 + disc) / (2 * A2)].map((t) => lin(Hr, Hs, t));
  const I = Gs.map((Gp) => { const a = pp(Vv), b = pp(Gp), c = pp(R1), e = pp(R2), X = corteRR(a, b, c, e); const t = (X[0] - R1[0]) / (R2[0] - R1[0]); return lin(R1, R2, t); });
  return dib("Intersección de una recta con un cono: el plano auxiliar que contiene a la recta y al vértice corta al cono según dos generatrices; su traza en el plano de la base es la recta que une las trazas de r y de VR₁; donde esas generatrices cortan a r están los puntos de entrada y salida", clip(`${LT(yt, 8, 252)}${diedrico(pol, yt, "var(--pen)", true)}${seg(pp(R1), pp(R2), "var(--red)", 2)}${seg(pa(R1), pa(R2), "var(--red)", 2)}${seg(pp(Hr), pp(Gs[1]), "var(--leaf)", 1.4)}${G.recta(pp(Gs[0]), pp(Gs[1]), 24, "var(--leaf)", 1.4)}${Gs.map((Gp) => seg(pp(Vv), pp(Gp), "var(--leaf)", 1.6) + seg(pa(Vv), pa(Gp), "var(--leaf)", 1.6)).join("")}${I.map((P) => fino(pp(P), pa(P)) + pt(pp(P), "", 0, 0, "var(--red)") + pt(pa(P), "", 0, 0, "var(--red)")).join("")}`, "cl910") + L(pp(R2), "r", -2, 14, "var(--red)") + L(pa(R2), "r′", -4, -6, "var(--red)", "end") + tx(10, 22, "plano auxiliar por V", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

// 9.11 Desarrollo de un cilindro cortado (transformada de la sección).
const s11 = (() => {
  const r = 20, cx = 40, yb = 150, H = 90, c0 = 52, m = Math.tan(rad(30)), cyl = [[cx - r, yb], [cx + r, yb], [cx + r, yb - H], [cx - r, yb - H]], x1 = 80;
  const curvaD = rango(61, (i) => { const th = (2 * Math.PI * i) / 60; return [x1 + r * th, yb - (c0 + m * r * Math.cos(th))]; });
  return dib("Desarrollo de un cilindro cortado por un plano: la superficie lateral se extiende en un rectángulo de base 2πr y la sección se transforma en una curva sinusoidal (transformada de la sección)", `${poli(cyl, "var(--pen)", 1.6, "var(--pen)", 0.06)}${seg([cx - r, yb - (c0 - m * r)], [cx + r, yb - (c0 + m * r)], "var(--red)", 2.4)}${poli([[x1, yb], [x1 + 2 * Math.PI * r, yb], [x1 + 2 * Math.PI * r, yb - H], [x1, yb - H]], "var(--pen)", 1.6, "var(--pen)", 0.06)}${curva(curvaD, "var(--red)", 2.4)}${curva([[x1, yb], ...curvaD, [x1 + 2 * Math.PI * r, yb]], "var(--red)", 0, true, 0.14)}${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((k) => seg([x1 + (2 * Math.PI * r * k) / 12, yb], [x1 + (2 * Math.PI * r * k) / 12, yb - H], "var(--muted)", 0.6, 'stroke-dasharray="2 3"')).join("")}${tx(x1 + Math.PI * r, yb + 16, "2πr", { s: 11, b: 1, a: "middle", c: "var(--pen)" })}${tx(cx, yb + 16, "alzado", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}${tx(250, 30, "transformada", { s: 10.5, b: 1, a: "end", c: "var(--red)" })}`);
})();

// 9.12 Desarrollo de un cono cortado.
const s12 = (() => {
  const R = 22, H = 64, g = Math.hypot(R, H), k = 1.15, ang = (360 * R) / g, Vd = [178, 30], cx = 46, yb = 150, x0 = 10, m = Math.tan(rad(24)), c0 = 18;
  const Vv = [0, 0, H], f = (p) => p[2] - (c0 + m * p[0]);
  const sec = rango(49, (i) => { const t = (2 * Math.PI * i) / 48, Gb = [R * Math.cos(t), R * Math.sin(t), 0], P = corte(Vv, Gb, f); const s = v3.norm(v3.sub(P, Vv)), a = rad(-90 - ang / 2) + (t * R) / g; return add(Vd, mul([Math.cos(a), -Math.sin(a)], s * k)); });
  const arcoPts = rango(41, (i) => { const a = rad(-90 - ang / 2 + (ang * i) / 40); return add(Vd, mul([Math.cos(a), -Math.sin(a)], g * k)); });
  const cA = [[cx - R, yb], [cx + R, yb], [cx, yb - H]];
  return dib("Desarrollo de un cono recto cortado: la superficie lateral es un sector circular de radio igual a la generatriz y ángulo 360°·r/g; cada punto de la sección se lleva sobre su generatriz con su distancia al vértice en verdadera magnitud", `${poli(cA, "var(--pen)", 1.6, "var(--pen)", 0.06)}${seg([cx - R, yb - (c0 - m * R)], [cx + R, yb - (c0 + m * R)], "var(--red)", 2.4)}${poli([Vd, ...arcoPts], "var(--pen)", 1.6, "var(--pen)", 0.06)}${curva(sec, "var(--red)", 2.4)}${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => seg(Vd, arcoPts[i * 5], "var(--muted)", 0.6, 'stroke-dasharray="2 3"')).join("")}${pt(Vd, "V", 6, -4)}${tx(cx, yb + 16, "alzado", { s: 10, b: 1, a: "middle", c: "var(--pen)" })}${tx(250, 172, "sector de ángulo 360°·r/g", { s: 10.5, b: 1, a: "end", c: "var(--pen)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Sistema diédrico: superficies, secciones y desarrollos",
  minutos: 120,
  objetivos: [
    "Clasificar las superficies más usadas y representarlas en diédrico",
    "Situar puntos sobre pirámides, conos, prismas, cilindros y esferas",
    "Obtener secciones planas de cuerpos y su verdadera magnitud",
    "Relacionar las secciones del cono con las curvas cónicas",
    "Hallar la intersección de una recta con superficies mediante planos auxiliares",
    "Dibujar desarrollos de cuerpos cortados y sus transformadas",
  ],
  claves: ["superficie radiada", "superficie prismática", "superficie de revolución", "generatriz", "directriz", "contorno aparente", "sección plana", "verdadera magnitud", "plano auxiliar", "desarrollo", "transformada", "paralelo", "meridiano"],
  lectura: {
    titulo: "De la chapa al tubo",
    html: `<p>Un calderero recibe el encargo de unir dos tuberías con un codo cortado a 45°. Antes de usar la cizalla necesita una plantilla: la forma exacta que hay que recortar en la chapa plana para que, al enrollarla, dé un tubo cortado en bisel. Esa plantilla es el <b>desarrollo</b> del cilindro, y la curva del corte, su <b>transformada</b>.</p>
    <p>Lo mismo ocurre con las tolvas de una fábrica, las campanas extractoras, los conductos de ventilación o las piezas de una maqueta de arquitectura. Detrás de cada una hay tres operaciones que vas a aprender en este tema: representar el cuerpo en diédrico, cortarlo con un plano (<b>sección</b>) y extender su superficie sobre el plano (<b>desarrollo</b>).</p>
    <p>Las herramientas son las del sistema diédrico que ya conoces: pertenencia, intersección y verdadera magnitud. Lo nuevo es que ahora las superficies pueden ser curvas, y para trabajar con ellas usaremos sus <b>generatrices</b>.</p>`,
  },
  pregunta: {
    texto: "Si cortas un rollo de papel de cocina con un cuchillo inclinado y luego desenrollas el papel, ¿qué forma tiene el borde del corte?",
    respuesta: "Una curva ondulada, una <mark>sinusoide</mark>. La sección del cilindro es una elipse, pero al desarrollar la superficie lateral cada punto se separa según su posición en la circunferencia y su altura varía como un coseno.",
  },
  bloques: [
    {
      html: `<h3>9.1 Superficies y cuerpos</h3><p>Una <b>superficie</b> se puede generar moviendo una línea, la <b>generatriz</b>, apoyada en otra, la <b>directriz</b>. Según cómo se mueve se distinguen:</p><ul><li><b>Superficies radiadas</b>: todas las generatrices pasan por un punto, el <b>vértice</b>. Si la directriz es un polígono, se obtiene una <b>superficie piramidal</b>; si es una curva, una <b>superficie cónica</b>.</li><li><b>Superficies prismáticas</b> o cilíndricas: las generatrices son paralelas a una dirección. Con directriz poligonal, <b>prismática</b>; con directriz curva, <b>cilíndrica</b>.</li><li><b>Superficies de revolución</b>: una curva gira alrededor de un eje. La <b>esfera</b> (una circunferencia que gira alrededor de un diámetro), el cono y el cilindro rectos de revolución y el <b>toro</b> son ejemplos.</li></ul><p>Al cerrar una superficie con una o dos bases se obtienen los <b>cuerpos</b>: pirámide, prisma, cono, cilindro y esfera. Son <b>rectos</b> si el eje es perpendicular a la base y <b>oblicuos</b> en caso contrario; son <b>regulares</b> si la base es un polígono regular y el cuerpo es recto.</p><p>Las superficies piramidales, prismáticas, cónicas y cilíndricas son <b>desarrollables</b>: se pueden extender sobre un plano sin deformarse. La esfera no lo es: por eso ningún mapa del mundo es exacto.</p>`,
      svg: s1,
    },
    {
      html: `<h3>9.2 Pirámides y prismas en diédrico</h3><p>Una pirámide se representa por las proyecciones de su base y su vértice; un prisma, por las de sus dos bases. Las aristas se unen y se estudia la visibilidad como en los poliedros regulares.</p><p><b>Punto sobre una cara</b>: un punto P pertenece a una cara si está en una recta de esa cara. Para la pirámide se usa la recta que une el <b>vértice</b> con un punto M de la base:</p><ol><li>Por p se traza la recta vp hasta cortar al lado de la base en m.</li><li>Se lleva m al alzado (en la base, sobre la LT si la base está en el PH).</li><li>Se dibuja v′m′ y sobre ella, por referencia, p′.</li></ol><p>En un prisma recto de aristas verticales es aún más fácil: la proyección horizontal de un punto de una cara lateral está sobre el lado correspondiente de la base, y su cota se da libremente.</p><p>Un punto cuya proyección es visible puede estar en dos caras (la de delante o la de detrás): hay que indicar en qué cara está o tener en cuenta la visibilidad.</p>`,
      svg: s2,
    },
    {
      html: `<h3>9.3 Conos y cilindros</h3><p>Un <b>cono recto</b> de base circular en el PH se proyecta en planta como una circunferencia con el vértice en el centro, y en alzado como un triángulo isósceles. Los lados del triángulo son las <b>generatrices de contorno aparente</b> del alzado: separan la mitad visible de la oculta.</p><p>Un <b>cilindro recto</b> de eje vertical se proyecta como una circunferencia en planta y un rectángulo en alzado.</p><p><b>Punto sobre la superficie</b>: se usa la generatriz que pasa por él.</p><ul><li><b>Cono</b>: por p se traza vp hasta la circunferencia en g; se lleva g′ a la LT y sobre v′g′ se sitúa p′. También puede usarse el <b>paralelo</b> (circunferencia horizontal) que pasa por P.</li><li><b>Cilindro</b>: la proyección horizontal de un punto de la superficie lateral está en la circunferencia de la base (la superficie es proyectante); su cota se elige libremente.</li></ul><p>Un punto de la planta del cono corresponde a dos puntos de la superficie solo si el cono es doble; en un cono simple con la base en el PH hay uno solo. En el alzado, cada punto de la parte visible del triángulo corresponde a dos puntos: uno delante (visible) y otro detrás (oculto).</p>`,
      svg: s3,
    },
    {
      html: `<h3>9.4 La esfera</h3><p>La esfera se proyecta en ambos planos como una <b>circunferencia</b> del mismo radio. Sus contornos aparentes son:</p><ul><li>En planta, el <b>ecuador</b> (circunferencia máxima horizontal), que en alzado se ve como un diámetro horizontal.</li><li>En alzado, el <b>meridiano principal</b> (circunferencia máxima frontal), que en planta se ve como un diámetro paralelo a la LT.</li></ul><p><b>Punto sobre la esfera</b>: se usa el <b>paralelo</b> que pasa por él, una circunferencia horizontal.</p><ol><li>Con centro en o y radio op se traza el paralelo en planta.</li><li>En alzado el paralelo es un segmento horizontal de la misma longitud (su diámetro), a la altura en que corta al contorno.</li><li>p′ está en ese segmento, en la referencia de p.</li></ol><p>Hay dos paralelos de igual radio (encima y debajo del ecuador): el punto puede estar en la mitad superior o inferior, y conviene indicarlo.</p><p>Toda sección plana de una esfera es una <b>circunferencia</b>, cuyo centro es el pie de la perpendicular desde el centro de la esfera al plano y cuyo radio es √(R² − d²), siendo d la distancia del centro al plano.</p>`,
      svg: s4,
      video: { id: "aDlfUP_WJgU", titulo: "Sección de esfera por plano proyectante en sistema diédrico", canal: "Arturo Geometría", vistas: 32906, busqueda: "sección esfera diédrico" },
    },
    {
      html: `<h3>9.5 Sección de una pirámide</h3><p>La sección plana de una pirámide es un polígono con tantos lados como caras cortadas. Sus vértices son los puntos de corte del plano con las aristas.</p><p><b>Plano proyectante</b>: en la proyección en que el plano se ve de canto (la traza v si es proyectante vertical), los puntos de corte de las aristas se leen directamente. Después:</p><ol><li>Se llevan a la otra proyección con líneas de referencia, sobre las proyecciones de las aristas.</li><li>Si una arista es de perfil (perpendicular a la LT en ambas proyecciones), se usa una recta auxiliar de la cara o un giro.</li><li>Se unen los puntos en orden, cara a cara.</li><li>La <b>verdadera magnitud</b> se obtiene abatiendo el plano sobre el PH alrededor de su traza h: cada punto conserva su alejamiento y se coloca a una distancia de h igual a la medida sobre la traza v.</li></ol><p><b>Plano oblicuo</b>: se hace un cambio de plano para convertirlo en proyectante y se procede igual; o se halla la intersección de cada arista con el plano usando planos proyectantes auxiliares que contengan la arista.</p><p>Relación útil: la sección de una pirámide y su base son figuras <b>homólogas</b> (centro, el vértice; eje, la intersección del plano secante con el de la base).</p>`,
      svg: s5,
      video: { id: "0S_G9dz9JXw", titulo: "Sección de una pirámide con un plano oblicuo (parte 1)", canal: "PDD Profesor de Dibujo", vistas: 213415, busqueda: "sección pirámide plano oblicuo diédrico" },
    },
    {
      html: `<h3>9.6 Sección de un prisma</h3><p>La sección de un prisma por un plano es un polígono cuyos vértices son los cortes del plano con las aristas laterales (y, si el plano corta a las bases, con sus lados).</p><p><b>Prisma recto de aristas verticales</b> cortado por un plano oblicuo:</p><ul><li>Las aristas son rectas verticales, así que la <b>planta de la sección coincide con la base</b>.</li><li>La cota de cada vértice de la sección se obtiene con una <b>horizontal del plano</b> que pase por la proyección de la arista: su proyección horizontal es paralela a h y su vertical, paralela a la LT, da la altura.</li><li>En el alzado, los puntos se unen en orden y se estudia la visibilidad.</li></ul><p>La <b>verdadera magnitud</b> se obtiene abatiendo el plano o con un cambio de plano que lo deje de canto y otro que lo deje paralelo.</p><p>La sección de un prisma y su base son figuras <b>afines</b>: el eje es la recta de intersección del plano secante con el de la base y la dirección, la de las aristas. Esto permite comprobar el trazado: lados correspondientes se cortan en el eje.</p>`,
      svg: s6,
      video: { id: "aosDSRcEnMU", titulo: "Sección de un plano oblicuo a un prisma oblicuo", canal: "PDD Profesor de Dibujo", vistas: 30902, busqueda: "sección prisma plano oblicuo diédrico" },
    },
    {
      html: `<h3>9.7 Sección del cilindro</h3><p>Un plano que corta a todas las generatrices de un cilindro de revolución produce una <b>elipse</b> (o una circunferencia, si es perpendicular al eje). Si el plano es paralelo a las generatrices, la sección son dos generatrices (un rectángulo, si se incluyen las bases).</p><p>Para el cilindro recto de eje vertical y plano proyectante vertical:</p><ul><li>En alzado, la sección es el segmento de la traza v comprendido entre los contornos.</li><li>En planta, la sección <b>coincide con la circunferencia de la base</b>, porque la superficie lateral es proyectante.</li><li>La <b>verdadera magnitud</b>, por abatimiento, es una elipse cuyo eje menor es el diámetro del cilindro y cuyo eje mayor es la longitud del segmento del alzado.</li></ul><p>Se trabaja con un número suficiente de <b>generatrices</b> (8 o 12 repartidas por igual) y sus puntos de corte. Los puntos de los contornos aparentes y los extremos de los ejes de la elipse deben estar siempre entre ellos.</p><p>Si el plano es oblicuo, se usan planos auxiliares que contengan generatrices o un cambio de plano previo.</p>`,
      svg: s7,
      video: { id: "Fo8g0fQ5XnY", titulo: "Desarrollo de una virola cilíndrica cortada por un plano oblicuo", canal: "Antonio Castilla", vistas: 263588, busqueda: "sección cilindro plano oblicuo desarrollo" },
    },
    {
      html: `<h3>9.8 Secciones del cono: las cónicas</h3><p>Según el ángulo que forma el plano secante con el eje del cono, comparado con el semiángulo del vértice, la sección es:</p><ul><li><b>Elipse</b>: el plano corta a todas las generatrices.</li><li><b>Parábola</b>: el plano es paralelo a una sola generatriz.</li><li><b>Hipérbola</b>: el plano es paralelo a dos generatrices (corta a las dos hojas del cono doble).</li><li>Si el plano pasa por el vértice, la sección degenera en un punto, una generatriz o dos generatrices.</li></ul><p><b>Construcción</b> (plano proyectante): se dibujan varias generatrices; en el alzado se leen sus cortes con la traza v; se llevan a la planta sobre las proyecciones de las generatrices. También se usan <b>paralelos</b>: cada plano horizontal corta al cono en una circunferencia y al plano secante en una recta; sus intersecciones son puntos de la sección. Este segundo método es necesario para las generatrices de perfil.</p><p>La verdadera magnitud se obtiene por abatimiento. Para comprobar el resultado se pueden usar las <b>esferas de Dandelin</b>, que tocan al plano en los focos de la cónica.</p>`,
      svg: s8,
    },
    {
      html: `<h3>9.9 Sección de la esfera</h3><p>Toda sección plana de una esfera es una <b>circunferencia</b>. Si el plano es proyectante vertical:</p><ul><li>En alzado se ve como un segmento de la traza v, entre los puntos de corte con el meridiano principal.</li><li>En planta es una <b>elipse</b>: su eje mayor, perpendicular a la LT, es el diámetro de la circunferencia en VM; su eje menor es la proyección del segmento del alzado.</li><li>El centro de la sección es el pie de la perpendicular desde el centro de la esfera a la traza v.</li></ul><p>Puntos notables: los de corte con el ecuador (en planta, sobre el contorno de la esfera, donde la elipse es tangente a él) y los de corte con el meridiano principal. Los puntos intermedios se obtienen con <b>paralelos</b>: cada paralelo corta a la traza v en un punto cuya referencia da dos puntos en la planta.</p><p>La verdadera magnitud, por abatimiento o por un cambio de plano, es una circunferencia de radio √(R² − d²).</p><p>Si el plano es oblicuo, se hace primero un cambio de plano para dejarlo proyectante.</p>`,
      svg: s9,
    },
    {
      html: `<h3>9.10 Intersección de una recta con una superficie</h3><p>Se resuelve siempre con un <b>plano auxiliar</b> que contenga a la recta y corte a la superficie según líneas sencillas:</p><ul><li><b>Prisma o cilindro</b>: plano que contenga a la recta y sea paralelo a las aristas o generatrices; corta según generatrices. Si el cuerpo es recto y vertical, basta un plano proyectante.</li><li><b>Pirámide o cono</b>: plano que contenga a la recta y al <b>vértice</b>; corta según generatrices.</li><li><b>Esfera</b>: plano proyectante que contenga a la recta; corta según una circunferencia, que se abate junto con la recta.</li></ul><p>Procedimiento para el cono con la base en el PH:</p><ol><li>Se elige un punto R₁ de la recta y se traza la recta VR₁.</li><li>Se hallan las trazas horizontales de r y de VR₁; la recta que las une es la traza del plano auxiliar en el plano de la base.</li><li>Esa traza corta a la circunferencia de la base en dos puntos G₁ y G₂: las generatrices VG₁ y VG₂ son la sección.</li><li>Donde esas generatrices cortan a r están los puntos de <b>entrada</b> y <b>salida</b>.</li></ol><p>La parte de la recta dentro del cuerpo se dibuja a trazos o no se dibuja.</p>`,
      svg: s10,
      video: { id: "urr5xLVXovs", titulo: "Intersección de cono con recta en sistema diédrico", canal: "Arturo Geometría", vistas: 26372, busqueda: "intersección recta cono diédrico" },
    },
    {
      html: `<h3>9.11 Desarrollo de prismas y cilindros</h3><p>El <b>desarrollo</b> de una superficie es la figura plana que se obtiene al extenderla sin estirarla ni romperla. Las longitudes y los ángulos sobre la superficie se conservan.</p><p><b>Prisma recto</b>: la superficie lateral es un rectángulo de base igual al perímetro y altura igual a la del prisma, dividido por las aristas. A él se unen las bases.</p><p><b>Cilindro recto</b>: un rectángulo de base 2πr y altura h. Para llevar una sección al desarrollo:</p><ol><li>Se divide la base en n partes iguales (12 es lo habitual) y se trazan sus generatrices.</li><li>Se rectifica la circunferencia y se divide la base del rectángulo en las mismas n partes.</li><li>Sobre cada generatriz del desarrollo se lleva la altura del punto de la sección en esa generatriz (leída en el alzado, en VM).</li><li>Se unen los puntos con una curva suave: es la <b>transformada</b> de la sección, una sinusoide cuando la sección es plana.</li></ol><p>Si el prisma o el cilindro es oblicuo, el desarrollo se hace con una <b>sección recta</b> (perpendicular a las generatrices), que se desarrolla como un segmento.</p>`,
      svg: s11,
    },
    {
      html: `<h3>9.12 Desarrollo de pirámides y conos</h3><p><b>Pirámide recta</b>: las caras laterales son triángulos isósceles iguales; se dibujan uno tras otro con el vértice común, usando la arista lateral en VM (obtenida por giro o triángulo de desnivel) y el lado de la base.</p><p><b>Cono recto</b>: la superficie lateral es un <b>sector circular</b> de radio igual a la generatriz g y ángulo:</p><p style="text-align:center"><b>α = 360° · r / g</b></p><p>Para llevar una sección al desarrollo:</p><ol><li>Se dividen la base y el arco del sector en n partes iguales y se trazan las generatrices en ambos.</li><li>Sobre cada generatriz se lleva la distancia del vértice al punto de la sección en <b>verdadera magnitud</b>. En el cono recto, la VM de esas distancias se obtiene llevando cada punto horizontalmente hasta la generatriz de contorno del alzado.</li><li>Se unen los puntos con una curva: la transformada de la sección.</li></ol><p>Para un <b>tronco de cono</b> el desarrollo es una corona circular; para una <b>pirámide o cono oblicuos</b> se obtienen las VM de todas las aristas o generatrices y se triangula.</p>`,
      svg: s12,
      video: { id: "-Mij6lc5VkM", titulo: "Cono truncado paso a paso", canal: "Mundo Geométrico", vistas: 85501, busqueda: "desarrollo cono truncado" },
    },
  ],
  ejemplos: [
    { enunciado: "Un cono recto tiene radio 30 mm y altura 40 mm. Halla la generatriz y el ángulo de su desarrollo.", pasos: ["g = √(30² + 40²) = 50 mm.", "α = 360° · 30 / 50 = 216°."], resultado: "g = 50 mm; sector de 216°." },
    { enunciado: "Un cilindro de radio 20 mm se desarrolla. ¿Cuánto mide la base del rectángulo?", pasos: ["2πr = 2π · 20 ≈ 125,7 mm."], resultado: "≈ 125,7 mm." },
    { enunciado: "Una esfera de radio 40 mm se corta con un plano a 24 mm del centro. ¿Qué radio tiene la sección?", pasos: ["ρ = √(R² − d²).", "√(1 600 − 576) = 32 mm."], resultado: "32 mm." },
    { enunciado: "Un cilindro de radio 25 mm se corta con un plano que forma 30° con la base. ¿Cuánto miden los ejes de la elipse?", pasos: ["Eje menor = diámetro = 50 mm.", "Eje mayor = 50 / cos 30° ≈ 57,7 mm."], resultado: "50 mm y ≈ 57,7 mm." },
    { enunciado: "Un cono tiene semiángulo de 30° en el vértice. Un plano forma 60° con el eje. ¿Qué cónica produce?", pasos: ["Comparar el ángulo con el eje (60°) con el semiángulo (30°).", "60° > 30°: el plano corta a todas las generatrices."], resultado: "Una elipse." },
    { enunciado: "¿Cuántos lados tiene la sección de una pirámide pentagonal por un plano que corta a las cinco aristas laterales?", pasos: ["Un lado por cada cara lateral cortada."], resultado: "Un pentágono." },
  ],
  errores: [
    "Unir puntos de la sección que no están en la misma cara del cuerpo.",
    "Tomar la proyección de una arista oblicua como su verdadera magnitud al hacer el desarrollo.",
    "Dibujar el desarrollo del cono con un ángulo calculado con la altura en lugar de con la generatriz.",
    "Olvidar los puntos de los contornos aparentes al dibujar secciones curvas.",
    "Considerar desarrollable la esfera.",
    "Elegir un plano auxiliar que no pase por el vértice al intersecar una recta con un cono.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica: pirámide, cilindro, esfera, prisma, cono.", sol: "Radiadas: pirámide y cono. Prismáticas: prisma y cilindro. De revolución: esfera (y cono y cilindro rectos)." },
    { nivel: "básico", q: "Dibuja una pirámide recta de base hexagonal de 25 mm de lado y 60 mm de altura con la base en el PH.", sol: "Planta: hexágono con el vértice en el centro y las aristas; alzado: triángulo con las aristas visibles." },
    { nivel: "básico", q: "Sitúa un punto en una cara de la pirámide anterior conociendo su proyección horizontal.", sol: "Recta vp hasta la base en m; m′ en la LT; p′ sobre v′m′." },
    { nivel: "básico", q: "Calcula la generatriz de un cono de radio 24 mm y altura 32 mm.", sol: "√(24² + 32²) = 40 mm." },
    { nivel: "básico", q: "Calcula el ángulo del desarrollo del cono anterior.", sol: "360 · 24 / 40 = 216°." },
    { nivel: "básico", q: "¿Qué figura es la sección de una esfera por cualquier plano?", sol: "Una circunferencia." },
    { nivel: "básico", q: "¿Qué cónica se obtiene al cortar un cono con un plano paralelo a una generatriz?", sol: "Una parábola." },
    { nivel: "básico", q: "¿Qué es la transformada de una sección?", sol: "La línea en que se convierte la sección al desarrollar la superficie." },
    { nivel: "básico", q: "Dibuja el desarrollo de un prisma recto cuadrado de 20 mm de lado y 50 mm de altura.", sol: "Rectángulo de 80 × 50 mm dividido en cuatro, más dos cuadrados de 20 mm." },
    { nivel: "básico", q: "¿Por qué la planta de una sección de un cilindro recto vertical coincide con la base?", sol: "Porque la superficie lateral es proyectante horizontal: todos sus puntos se proyectan en la circunferencia." },
    { nivel: "básico", q: "Sitúa un punto sobre una esfera conociendo su proyección horizontal.", sol: "Paralelo por p (circunferencia de centro o); en alzado, segmento horizontal; p′ en la referencia." },
    { nivel: "básico", q: "¿Qué plano auxiliar se usa para cortar una recta con una pirámide?", sol: "El que contiene a la recta y al vértice." },
    { nivel: "medio", q: "Halla la sección de una pirámide cuadrada recta por un plano proyectante vertical a 30° y su VM.", sol: "Cortes de aristas sobre v; planta por referencias; VM abatiendo sobre el PH alrededor de h." },
    { nivel: "medio", q: "Halla la sección de un prisma hexagonal recto por un plano oblicuo.", sol: "Planta = base; cotas con horizontales del plano por cada arista; alzado uniendo en orden." },
    { nivel: "medio", q: "Halla la sección de un cilindro de 30 mm de radio por un plano proyectante a 45° y los ejes de la elipse.", sol: "Eje menor 60 mm; eje mayor 60/cos 45° ≈ 84,9 mm." },
    { nivel: "medio", q: "Halla la sección de una esfera de 35 mm de radio por un plano proyectante que dista 21 mm del centro.", sol: "Circunferencia de radio 28 mm; en planta, elipse con eje mayor 56 mm perpendicular a la LT." },
    { nivel: "medio", q: "Dibuja el desarrollo de un cilindro cortado por un plano a 30° con la base.", sol: "Rectángulo 2πr × h; 12 generatrices; alturas del corte; sinusoide." },
    { nivel: "medio", q: "Dibuja el desarrollo de una pirámide cuadrada recta de 30 mm de lado y 50 mm de altura.", sol: "Arista lateral VM = √(50² + 21,2²) ≈ 54,3 mm; cuatro triángulos isósceles 54,3–54,3–30." },
    { nivel: "medio", q: "Halla los puntos de intersección de una recta con un cilindro recto vertical.", sol: "En planta, la recta corta a la circunferencia en los dos puntos; se llevan al alzado por referencia." },
    { nivel: "medio", q: "Halla los puntos de intersección de una recta con un cono recto.", sol: "Plano por la recta y el vértice: traza en la base; generatrices de corte; intersecciones con la recta." },
    { nivel: "medio", q: "Explica por qué la sección de una pirámide y su base son homólogas.", sol: "Las rectas que unen puntos correspondientes pasan por el vértice (centro) y los lados correspondientes se cortan en la intersección de los dos planos (eje)." },
    { nivel: "medio", q: "Halla un punto de la sección de un cono usando un paralelo.", sol: "Plano horizontal: corta al cono en una circunferencia y al plano secante en una recta; sus intersecciones son puntos de la sección." },
    { nivel: "avanzado", q: "Halla la sección de un cono por un plano paralelo a una generatriz y dibuja su VM.", sol: "Parábola: cortes de generatrices y paralelos; vértice en la generatriz de contorno; VM por abatimiento." },
    { nivel: "avanzado", q: "Halla la sección de una pirámide por un plano oblicuo con un cambio de plano.", sol: "LT₁ ⊥ h: el plano se ve de canto; cortes de aristas; de vuelta a las proyecciones; VM con segundo cambio o abatimiento." },
    { nivel: "avanzado", q: "Dibuja el desarrollo de un cono cortado por un plano oblicuo con la transformada.", sol: "Sector de ángulo 360r/g; 12 generatrices; distancias del vértice a cada punto en VM (llevadas al contorno); curva." },
    { nivel: "avanzado", q: "Halla la intersección de una recta con una esfera.", sol: "Plano proyectante por la recta; su sección es una circunferencia; se abaten circunferencia y recta; sus cortes se desabaten." },
    { nivel: "avanzado", q: "Explica cómo desarrollar un cilindro oblicuo.", sol: "Sección recta (perpendicular a las generatrices); se rectifica como segmento; sobre perpendiculares se llevan las longitudes de las generatrices en VM a ambos lados." },
    { nivel: "avanzado", q: "Determina el tipo de sección de un cono de semiángulo 25° por un plano que forma 20° con el eje.", sol: "20° < 25°: el plano es más «empinado» que las generatrices y corta a las dos hojas: hipérbola." },
    { nivel: "avanzado", q: "Halla la verdadera forma de la sección de un prisma oblicuo por un plano perpendicular a sus aristas.", sol: "Es la sección recta: se obtiene con un cambio de plano que deje las aristas frontales y otro que las deje de punta." },
    { nivel: "avanzado", q: "¿Qué relación hay entre la transformada de una sección plana de un cilindro y la función coseno?", sol: "La altura del corte en la generatriz de ángulo θ es c₀ + r·tg α·cos θ; al desarrollar, θ pasa a ser la abscisa rθ: una sinusoide." },
  ],
  quiz: reparte([
    { q: "Una superficie cuyas generatrices pasan por un punto es…", o: ["prismática", "radiada", "de revolución", "reglada alabeada"], a: 1, e: "Pirámide o cono." },
    { q: "La esfera es una superficie…", o: ["desarrollable", "no desarrollable", "radiada", "prismática"], a: 1, e: "No se puede extender sin deformar." },
    { q: "Los lados del triángulo del alzado de un cono recto son…", o: ["aristas", "generatrices de contorno aparente", "paralelos", "ejes"], a: 1, e: "Separan lo visible de lo oculto." },
    { q: "Para situar un punto en la superficie de un cono se usa…", o: ["un meridiano", "una generatriz o un paralelo", "la LT", "un giro"], a: 1, e: "Pertenencia." },
    { q: "Toda sección plana de una esfera es…", o: ["una elipse", "una circunferencia", "una parábola", "un punto"], a: 1, e: "Radio √(R² − d²)." },
    { q: "En planta, la sección de una esfera por un plano proyectante vertical es…", o: ["una circunferencia", "una elipse", "un segmento", "una parábola"], a: 1, e: "Proyección de una circunferencia inclinada." },
    { q: "Plano paralelo a una generatriz del cono:", o: ["elipse", "parábola", "hipérbola", "circunferencia"], a: 1, e: "Una sola generatriz." },
    { q: "Plano paralelo a dos generatrices del cono:", o: ["elipse", "parábola", "hipérbola", "recta"], a: 2, e: "Corta a las dos hojas." },
    { q: "La sección de una pirámide y su base son…", o: ["afines", "homólogas", "iguales", "inversas"], a: 1, e: "Centro: el vértice." },
    { q: "La sección de un prisma y su base son…", o: ["homólogas", "afines", "semejantes", "inversas"], a: 1, e: "Dirección: las aristas." },
    { q: "El ángulo del desarrollo de un cono recto es…", o: ["360° · g / r", "360° · r / g", "180° · r / h", "360° · h / g"], a: 1, e: "Sector de radio g." },
    { q: "El desarrollo de un cilindro recto es…", o: ["un sector", "un rectángulo de base 2πr", "un círculo", "una corona"], a: 1, e: "Superficie lateral." },
    { q: "La transformada de una sección plana de un cilindro es…", o: ["una recta", "una sinusoide", "una elipse", "una circunferencia"], a: 1, e: "Al desarrollar." },
    { q: "Para cortar una recta con un cono se usa un plano que pasa por…", o: ["el centro de la base", "el vértice", "la LT", "el eje"], a: 1, e: "Corta según generatrices." },
    { q: "Para cortar una recta con un prisma, el plano auxiliar es…", o: ["por el vértice", "paralelo a las aristas", "perpendicular a las aristas", "horizontal"], a: 1, e: "Corta según generatrices." },
    { q: "La sección de un cilindro por un plano perpendicular al eje es…", o: ["elipse", "circunferencia", "rectángulo", "parábola"], a: 1, e: "Sección recta." },
    { q: "El contorno aparente de la esfera en alzado es…", o: ["el ecuador", "el meridiano principal", "un paralelo", "un punto"], a: 1, e: "Circunferencia máxima frontal." },
    { q: "Para obtener la VM de una sección por un plano proyectante se…", o: ["mide en planta", "abate el plano", "gira la LT", "desarrolla"], a: 1, e: "O cambio de plano." },
    { q: "La sección de una pirámide tiene tantos lados como…", o: ["vértices de la base", "caras cortadas", "aristas", "planos de proyección"], a: 1, e: "Un lado por cara." },
    { q: "Un cilindro oblicuo se desarrolla usando…", o: ["su base", "una sección recta", "su altura", "su vértice"], a: 1, e: "Se rectifica como segmento." },
  ]),
  examen: reparte([
    { q: "Cono r = 18, h = 24: generatriz", o: ["30 mm", "42 mm", "21 mm", "36 mm"], a: 0, e: "3-4-5." },
    { q: "Ángulo del desarrollo del cono anterior:", o: ["216°", "270°", "180°", "120°"], a: 0, e: "360 · 18/30." },
    { q: "Esfera R = 25, plano a 15 del centro: radio de la sección", o: ["20 mm", "10 mm", "25 mm", "30 mm"], a: 0, e: "√(625 − 225)." },
    { q: "Cilindro r = 20 cortado a 45° con la base: eje mayor de la elipse", o: ["≈ 56,6 mm", "40 mm", "20 mm", "80 mm"], a: 0, e: "40/cos 45°." },
    { q: "La planta de la sección de un prisma recto vertical es…", o: ["la base", "una elipse", "un punto", "la VM"], a: 0, e: "Aristas proyectantes." },
    { q: "Plano que corta a todas las generatrices de un cono:", o: ["elipse", "parábola", "hipérbola", "dos rectas"], a: 0, e: "Curva cerrada." },
    { q: "Desarrollo del cilindro de r = 15: base del rectángulo", o: ["≈ 94,2 mm", "30 mm", "≈ 47,1 mm", "60 mm"], a: 0, e: "2π · 15." },
    { q: "Un punto de una cara de pirámide se sitúa con una recta que pasa por…", o: ["el vértice", "la LT", "el centro de la base", "N"], a: 0, e: "Generatriz auxiliar." },
  ]),
  feynman: ["Qué diferencia hay entre superficies radiadas, prismáticas y de revolución", "Cómo se sitúa un punto sobre un cono y sobre una esfera", "Por qué la sección de una pirámide es homóloga de su base", "Cómo se elige el plano auxiliar para cortar una recta con un cuerpo", "Por qué la transformada de la sección de un cilindro es una sinusoide"],
  glosario: [
    ["Generatriz", "Línea que, al moverse, genera una superficie."],
    ["Directriz", "Línea sobre la que se apoya la generatriz."],
    ["Superficie radiada", "Aquella cuyas generatrices pasan por un punto (vértice)."],
    ["Superficie prismática", "Aquella cuyas generatrices son paralelas."],
    ["Superficie de revolución", "La generada por una curva que gira alrededor de un eje."],
    ["Contorno aparente", "Línea de la superficie que separa en una proyección la parte vista de la oculta."],
    ["Paralelo", "Circunferencia de una superficie de revolución perpendicular al eje."],
    ["Meridiano", "Sección de una superficie de revolución por un plano que contiene al eje."],
    ["Sección plana", "Intersección de un cuerpo con un plano."],
    ["Plano auxiliar", "Plano elegido para que corte a la superficie según líneas sencillas."],
    ["Desarrollo", "Extensión de una superficie sobre un plano sin deformarla."],
    ["Transformada", "Línea en que se convierte una sección al desarrollar la superficie."],
    ["Sección recta", "Sección perpendicular a las generatrices de un prisma o cilindro."],
    ["Superficie desarrollable", "La que puede extenderse sobre un plano sin estirarse ni romperse."],
  ],
  situacion: {
    titulo: "Una campana extractora a medida",
    reto: "Un restaurante necesita una campana extractora formada por un tronco de pirámide cuadrada que se une a un conducto cilíndrico cortado a 30°. Vuestro grupo debe preparar los planos y las plantillas de chapa.",
    pasos: [
      "Dibujad en diédrico el tronco de pirámide y el cilindro con sus dimensiones a escala 1:10.",
      "Hallad la sección del cilindro por el plano de corte y su verdadera magnitud.",
      "Obtened las verdaderas magnitudes de las aristas del tronco de pirámide.",
      "Dibujad los desarrollos de ambas piezas con la transformada del corte.",
      "Construid una maqueta en cartulina y comprobad que las piezas encajan.",
    ],
    producto: "Lámina A3 con la representación, la sección y los desarrollos, y la maqueta.",
    evaluacion: [
      "Representa correctamente los cuerpos y su visibilidad.",
      "Obtiene la sección y su VM con precisión.",
      "Dibuja desarrollos con las verdaderas magnitudes.",
      "La maqueta encaja y corresponde a los planos.",
    ],
  },
  figura: fig("Superficies, secciones y desarrollos", "Resumen del tema", [
    ["Superficies", ["radiadas: vértice", "prismáticas: ∥", "revolución: eje", "generatriz y directriz"], "var(--pen)"],
    ["Puntos y rectas", ["generatriz auxiliar", "paralelo", "plano por el vértice", "plano ∥ a aristas"], "var(--leaf)"],
    ["Secciones", ["pirámide: homología", "prisma: afinidad", "cono: cónicas", "esfera: circunferencia"], "var(--red)"],
    ["Desarrollos", ["cilindro: 2πr × h", "cono: 360°·r/g", "VM de aristas", "transformada"], "var(--inf)"],
  ]),
  video: { id: "T8PdZ_nqGO4", titulo: "Hallar la sección de una pirámide usando cambio de plano", canal: "PDD Profesor de Dibujo", vistas: 159272, busqueda: "sección pirámide cambio de plano diédrico" },
  mapa: mapa("SUPERFICIES Y SECCIONES", "var(--bac)", [
    ["Superficies", "radiadas · prismáticas · revolución", "var(--pen)"],
    ["Pertenencia", "generatrices · paralelos", "var(--leaf)"],
    ["Secciones", "proyectante · VM · cónicas", "var(--red)"],
    ["Desarrollos", "rectángulo · sector · transformada", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Radiada", "Generatrices por un vértice."],
    ["Prismática", "Generatrices paralelas."],
    ["Punto en cono", "Generatriz VG o paralelo."],
    ["Punto en esfera", "Paralelo por el punto."],
    ["Sección esfera", "Circunferencia, ρ = √(R² − d²)."],
    ["Sección pirámide", "Homóloga de la base."],
    ["Sección prisma", "Afín a la base."],
    ["Cónicas", "Elipse, parábola, hipérbola."],
    ["Recta ∩ cono", "Plano auxiliar por el vértice."],
    ["Desarrollo cilindro", "Rectángulo 2πr × h."],
    ["Desarrollo cono", "Sector 360°·r/g."],
    ["Transformada", "La sección desarrollada."],
  ],
  familias: ["Cortad un rollo de papel en bisel, desenrolladlo y observad la curva.", "Construid juntos un cono de cartulina a partir de un sector circular.", "Cortad una naranja por distintos planos: ¿qué secciones salen?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geometría proyectiva: sistema diédrico; representación de superficies radiadas, prismáticas y de revolución; pertenencia; secciones planas y verdadera magnitud; intersección de recta y superficie; desarrollos y transformadas (RD 243/2022, Dibujo Técnico II, saberes básicos B. Geometría proyectiva; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Maquetas en cartulina de cuerpos cortados a partir de sus desarrollos.", "Cortes reales de verduras o plastilina para visualizar secciones.", "Relación con Tecnología: calderería y plantillas de chapa.", "CAD: secciones y desarrollos de chapa con un programa de modelado."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Sección cónica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Secci%C3%B3n_c%C3%B3nica" },
    { t: "Superficie desarrollable, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Superficie_desarrollable" },
  ],
  revisado: "2026-11-21",
};
