// Dibujo Técnico II 2º Bachillerato · Tema 3. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, pt, paso, poli, linea, curva, polar, corteRR, mid, dist, unit, add, sub, mul, pie, tx, dash, homologia, afinidad, elipsePts, caba, regular, conica } = G;

const dentro = (P, m = 8) => P[0] > m && P[0] < 260 - m && P[1] > m && P[1] < 180 - m;
const larga = (A, B, c = "var(--red)", w = 2.2, extra = "") => recta(A, B, 400, c, w, extra);
const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
const eje = (y, x0 = 6, x1 = 254, lab = "e") => `${seg([x0, y], [x1, y], "var(--ink)", 2.2)}${tx(x1 - 2, y - 5, lab, { s: 11, b: 1, a: "end" })}`;
const ejeV = (x, y0 = 6, y1 = 174, lab = "e") => `${seg([x, y0], [x, y1], "var(--ink)", 2.2)}${tx(x + 5, y0 + 10, lab, { s: 11, b: 1, a: "start" })}`;
// Recta límite de una homología: la imagen de un punto muy lejano y la paralela al eje por él.
const rl = (h, A, w, E1, E2) => { const Q = h(add(A, mul(w, 1e5))), u = unit(E1, E2); return [Q, add(Q, u)]; };

// 3.1 Proyección central de una figura plana sobre otro plano.
const s1 = (() => {
  const P = caba([70, 150], 0.5, 215, 1), V = [70, 130, 160];
  const tri = [[0, 40, 40], [0, 100, 30], [0, 70, 90]], sombra = tri.map((q) => { const t = V[2] / (V[2] - q[2]); return [V[0] + t * (q[0] - V[0]), V[1] + t * (q[1] - V[1]), 0]; });
  const pl1 = [[0, -10, 0], [0, 150, 0], [0, 150, 110], [0, -10, 110]].map(P), pl2 = [[0, -10, 0], [0, 150, 0], [-170, 150, 0], [-170, -10, 0]].map(P);
  return dib("Proyección central: la sombra que una fuente de luz puntual proyecta de un triángulo sobre el suelo; la figura y su sombra se corresponden en una homología cuyo eje es la recta común a los dos planos", `${poli(pl2, "var(--muted)", 1, "var(--muted)", 0.06)}${poli(pl1, "var(--pen)", 1, "var(--pen)", 0.06)}${tri.map((q, i) => seg(P(V), P(sombra[i]), "var(--muted)", 1, dash)).join("")}${poli(tri.map(P), "var(--pen)", 2.4, "var(--pen)", 0.18)}${poli(sombra.map(P), "var(--red)", 2.4, "var(--red)", 0.15)}${seg(P([0, -10, 0]), P([0, 150, 0]), "var(--ink)", 2.4)}
  ${pt(P(V), "V", -14, 6, "var(--leaf)")}${tx(250, 22, "centro: foco de luz", { s: 10, b: 1, a: "end", c: "var(--leaf)" })}${tx(10, 172, "eje: corte de los planos", { s: 10, b: 1, a: "start" })}`);
})();

// 3.2 Homología: triángulos homólogos.
const s2 = (() => {
  const O = [40, 30], E1 = [0, 160], E2 = [260, 160], A = [96, 70], A1 = add(O, mul(sub(A, O), 1.55)), h = homologia(O, E1, E2, A, A1);
  const T = [A, [150, 60], [122, 104]], T1 = T.map(h), M = corteRR(T[0], T[1], E1, E2);
  return dib("Homología: los puntos homólogos están alineados con el centro O y las rectas homólogas se cortan en el eje", clip(`${eje(160)}${T.map((P, i) => seg(O, T1[i], "var(--muted)", 1, dash)).join("")}${seg(T1[1], M, "var(--muted)", 1, dash)}${poli(T, "var(--pen)", 2.4, "var(--pen)", 0.15)}${poli(T1, "var(--red)", 2.4, "var(--red)", 0.12)}
  ${pt(O, "O", -14, 4, "var(--leaf)")}${pt(T[0], "A", -12, -4)}${pt(T[1], "B", 4, -6)}${pt(T[2], "C", -14, 6)}${pt(T1[0], "A′", -20, -4, "var(--red)")}${pt(T1[1], "B′", 6, -4, "var(--red)")}${pt(T1[2], "C′", -6, 16, "var(--red)")}${dentro(M) ? pt(M, "M", 0, 14) : ""}`, "cl32"));
})();

// 3.3 Construcción del homólogo de un punto.
const s3 = (() => {
  const O = [40, 20], E1 = [0, 110], E2 = [260, 110], A = [60, 70], A1 = [92, 150], h = homologia(O, E1, E2, A, A1), B = [120, 90], M = corteRR(A, B, E1, E2), B1 = h(B);
  return dib("Construcción del homólogo B′ de B: la recta AB corta al eje en M; la recta MA′ corta al rayo OB en B′", clip(`${eje(110)}${seg(O, A1, "var(--muted)", 1.1, dash)}${seg(O, add(B1, mul(unit(O, B1), 20)), "var(--muted)", 1.1, dash)}${larga(A, M, "var(--pen)", 1.6)}${larga(A1, M, "var(--red)", 1.6)}
  ${pt(O, "O", -14, 4, "var(--leaf)")}${pt(A, "A", -14, -2)}${pt(A1, "A′", -18, 8, "var(--red)")}${pt(B, "B", -4, -8)}${pt(B1, "B′", -6, 16, "var(--red)")}${pt(M, "M", 4, -6)}${paso(add(M, [16, 14]), 1)}${paso(add(B1, [16, 14]), 2, "var(--red)")}`, "cl33") + tx(10, 172, "1 AB ∩ e = M · 2 MA′ ∩ OB = B′", { s: 9.5, a: "start", c: "var(--muted)" }));
})();

// 3.4 Rectas límite.
const s4 = (() => {
  const O = [130, 44], E1 = [0, 136], E2 = [260, 136], A = [100, 100], A1 = add(O, mul(sub(A, O), 1.5)), h = homologia(O, E1, E2, A, A1);
  const hi = homologia(O, E1, E2, A1, A), [L1] = rl(hi, A1, [0.3, 1], E1, E2), [L2] = rl(h, A, [0.3, -1], E1, E2);
  return dib("Rectas límite: RL contiene los puntos cuyos homólogos están en el infinito y RL′ los homólogos de los puntos del infinito; la distancia de O a una es igual a la del eje a la otra", clip(`${eje(136)}${seg([6, L1[1]], [254, L1[1]], "var(--leaf)", 1.8, dash)}${seg([6, L2[1]], [254, L2[1]], "var(--red)", 1.8, dash)}${seg(O, A1, "var(--muted)", 1.1, dash)}
  ${pt(O, "O", 6, 4, "var(--leaf)")}${pt(A, "A", -14, 0)}${pt(A1, "A′", 6, -4, "var(--red)")}${tx(10, L1[1] - 4, "RL", { s: 11, b: 1, a: "start", c: "var(--leaf)" })}${tx(10, L2[1] - 4, "RL′", { s: 11, b: 1, a: "start", c: "var(--red)" })}
  ${seg([226, O[1]], [226, L1[1]], "var(--pen)", 1.3)}${seg([238, L2[1]], [238, 136], "var(--pen)", 1.3)}${tx(222, (O[1] + L1[1]) / 2 + 4, "d", { s: 11, b: 1, a: "end", c: "var(--pen)" })}${tx(242, (L2[1] + 136) / 2 + 4, "d", { s: 11, b: 1, a: "start", c: "var(--pen)" })}`, "cl34"));
})();

// 3.5 Homología de una circunferencia: elipse.
const s5 = (() => {
  const O = [40, 24], E1 = [0, 162], E2 = [260, 162], C = [92, 70], r = 26, A = [92, 44], A1 = add(O, mul(sub(A, O), 1.9)), h = homologia(O, E1, E2, A, A1);
  const pts = Array.from({ length: 73 }, (_, i) => polar(C, r, i * 5)).map(h), hi = homologia(O, E1, E2, A1, A), [L1] = rl(hi, A1, [0.3, 1], E1, E2);
  return dib("Homología de una circunferencia que no corta a la recta límite: su homóloga es una elipse", clip(`${eje(162)}${seg([6, L1[1]], [254, L1[1]], "var(--leaf)", 1.6, dash)}${circ(C, r, "var(--pen)", 2.4)}${curva(pts, "var(--red)", 2.6, true)}${[0, 90, 180, 270].map((a) => seg(O, h(polar(C, r, a)), "var(--muted)", 0.9, dash)).join("")}
  ${pt(O, "O", -14, 4, "var(--leaf)")}${dentro(L1) ? tx(10, L1[1] - 4, "RL", { s: 11, b: 1, a: "start", c: "var(--leaf)" }) : ""}`, "cl35") + tx(250, 22, "circunferencia → elipse", { s: 10.5, b: 1, a: "end", c: "var(--red)" }));
})();

// 3.6 Casos particulares: homotecia y afinidad.
const s6 = (() => {
  const O = [30, 92], T = [[70, 70], [96, 80], [78, 108]], T1 = T.map((P) => add(O, mul(sub(P, O), 1.9)));
  const E1 = [190, 10], E2 = [190, 170], f = afinidad(E1, E2, [222, 60], [236, 60]), Q = [[204, 40], [222, 72], [206, 112]], Q1 = Q.map(f);
  return dib("Casos límite de la homología: con el eje en el infinito es una homotecia; con el centro en el infinito es una afinidad", `${T.map((P, i) => seg(O, T1[i], "var(--muted)", 1, dash)).join("")}${poli(T, "var(--pen)", 2.2, "var(--pen)", 0.15)}${poli(T1, "var(--red)", 2.2, "var(--red)", 0.12)}${pt(O, "O", -6, 16, "var(--leaf)")}
  ${seg(E1, E2, "var(--ink)", 2.2)}${Q.map((P, i) => seg(P, Q1[i], "var(--muted)", 1, dash)).join("")}${poli(Q, "var(--pen)", 2.2, "var(--pen)", 0.15)}${poli(Q1, "var(--red)", 2.2, "var(--red)", 0.12)}
  ${tx(80, 172, "homotecia (eje impropio)", { s: 9.5, b: 1 })}${tx(214, 172, "afinidad", { s: 9.5, b: 1 })}${tx(196, 20, "e", { s: 11, b: 1, a: "start" })}`);
})();

// 3.7 Afinidad: figuras afines.
const s7 = (() => {
  const E1 = [6, 150], E2 = [254, 150], A = [80, 104], A1 = [96, 76], f = afinidad(E1, E2, A, A1), Pg = regular([80, 110], 26, 5, 90), Pg1 = Pg.map(f), M = corteRR(Pg[0], Pg[1], E1, E2);
  return dib("Afinidad oblicua: un pentágono y su figura afín; los segmentos que unen puntos afines son paralelos a la dirección de afinidad y las rectas afines se cortan en el eje", clip(`${eje(150)}${Pg.map((P, i) => seg(P, Pg1[i], "var(--muted)", 1, dash)).join("")}${seg(Pg1[0], M, "var(--muted)", 1, dash)}${seg(Pg[0], M, "var(--muted)", 1, dash)}${poli(Pg, "var(--pen)", 2.4, "var(--pen)", 0.15)}${poli(Pg1, "var(--red)", 2.4, "var(--red)", 0.12)}
  ${dentro(M) ? pt(M, "M", 0, 14) : ""}${tx(10, 22, "dirección de afinidad ↗", { s: 10.5, b: 1, a: "start", c: "var(--muted)" })}`, "cl37"));
})();

// 3.8 Razón de afinidad y afinidad ortogonal.
const s8 = (() => {
  const E1 = [6, 120], E2 = [254, 120], A = [70, 80], A1 = [70, 40], f = afinidad(E1, E2, A, A1), B = [170, 96], M = corteRR(A, B, E1, E2), B1 = f(B), H = [70, 120];
  return dib("Afinidad ortogonal de razón 2: cada punto se aleja del eje al doble de distancia en la perpendicular; el homólogo de B se halla con la recta AB y su corte M con el eje", clip(`${eje(120)}${seg(H, A1, "var(--muted)", 1.2, dash)}${seg([B[0], 120], B1, "var(--muted)", 1.2, dash)}${larga(A, M, "var(--pen)", 1.5)}${larga(A1, M, "var(--red)", 1.5)}
  ${pt(A, "A", -14, 4)}${pt(A1, "A′", -18, 4, "var(--red)")}${pt(B, "B", 6, 6)}${pt(B1, "B′", 6, -2, "var(--red)")}${dentro(M) ? pt(M, "M", 0, 14) : ""}${pt(H, "H", -14, 14)}`, "cl38") + tx(10, 172, "k = HA′ / HA = 2", { s: 11, b: 1, a: "start", c: "var(--red)" }));
})();

// 3.9 Afinidad entre circunferencia y elipse.
const s9 = (() => {
  const C = [130, 86], a = 74, b = 42, pts = elipsePts(C, a, b), P = polar(C, a, 50), P1 = [P[0], C[1] - (C[1] - P[1]) * (b / a)];
  return dib("La elipse es afín de su circunferencia principal en una afinidad ortogonal de eje el eje mayor y razón b/a", `${circ(C, a, "var(--pen)", 1.6, dash)}${curva(pts, "var(--red)", 2.6, true)}${seg([C[0] - a - 8, C[1]], [C[0] + a + 8, C[1]], "var(--ink)", 1.6)}${seg(P, [P[0], C[1]], "var(--muted)", 1.2, dash)}
  ${pt(P, "P", 4, -6, "var(--pen)")}${pt(P1, "P′", 6, 4, "var(--red)")}${pt(C, "", 0, 0)}${tx(130, 175, "eje de afinidad: eje mayor · k = b / a", { s: 10, b: 1, c: "var(--muted)" })}`);
})();

// 3.10 Ejes de la elipse a partir de diámetros conjugados (Rytz).
const s10 = (() => {
  const C = [120, 92], a = 74, b = 40, g = 18, E = (t) => { const x = a * Math.cos(t), y = b * Math.sin(t), c = Math.cos((g * Math.PI) / 180), s = Math.sin((g * Math.PI) / 180); return [C[0] + x * c - y * s, C[1] - (x * s + y * c)]; };
  const t0 = 0.75, P = E(t0), Q = E(t0 + Math.PI / 2), Pr = G.giro(P, C, 90), D = mid(Pr, Q), rD = dist(D, C);
  const [U, W] = G.corteRC(Pr, Q, D, rD);
  return dib("Construcción de Rytz: con dos semidiámetros conjugados CP y CQ se gira P 90° y la circunferencia de centro D, punto medio de P*Q, que pasa por C da las direcciones de los ejes", clip(`${curva(elipsePts(C, a, b, g), "var(--red)", 2.2, true)}${seg(C, P, "var(--pen)", 2.2)}${seg(C, Q, "var(--pen)", 2.2)}${seg(C, Pr, "var(--muted)", 1.2, dash)}${larga(U, W, "var(--muted)", 1.1)}${circ(D, rD, "var(--leaf)", 1.3, dash)}${larga(C, U, "var(--ink)", 1.4, 'stroke-dasharray="10 3 2 3"')}${larga(C, W, "var(--ink)", 1.4, 'stroke-dasharray="10 3 2 3"')}
  ${pt(C, "C", -14, 12)}${pt(P, "P", 6, 2, "var(--pen)")}${pt(Q, "Q", -14, -4, "var(--pen)")}${pt(Pr, "P*", -18, 4)}${pt(D, "D", 6, 4, "var(--leaf)")}${pt(U, "", 0, 0, "var(--leaf)")}${pt(W, "", 0, 0, "var(--leaf)")}`, "cl310"));
})();

// 3.11 Sección de un prisma: afinidad entre proyección y abatimiento.
const s11 = (() => {
  const E1 = [6, 150], E2 = [254, 150], hex = regular([70, 126], 20, 6, 0), f = afinidad(E1, E2, hex[1], [hex[1][0], 150 - (150 - hex[1][1]) * 2.1]), hex1 = hex.map(f);
  return dib("La proyección de una sección plana y su verdadera magnitud abatida son figuras afines: el eje es la charnela del abatimiento", clip(`${eje(150, 6, 254, "charnela")}${hex.map((P, i) => seg(P, hex1[i], "var(--muted)", 1, dash)).join("")}${poli(hex, "var(--pen)", 2.2, "var(--pen)", 0.15)}${poli(hex1, "var(--red)", 2.4, "var(--red)", 0.12)}`, "cl311") + tx(250, 22, "proyección → verdadera magnitud", { s: 10, b: 1, a: "end", c: "var(--red)" }) + tx(100, 132, "proyección", { s: 10, b: 1, a: "start", c: "var(--pen)" }));
})();

// 3.12 Homología en la perspectiva cónica.
const s12 = (() => {
  const LT = 120, H = 60, P = conica([130, LT], 160, H, 1), sq = [[-50, 10, 0], [50, 10, 0], [50, 110, 0], [-50, 110, 0]], pers = sq.map(P);
  return dib("En perspectiva cónica, la planta de una figura del suelo y su perspectiva son homólogas: el eje es la línea de tierra y la recta límite, la línea del horizonte", clip(`${seg([6, LT], [254, LT], "var(--ink)", 2.2)}${seg([6, LT - H], [254, LT - H], "var(--leaf)", 1.6, dash)}${poli(pers, "var(--red)", 2.4, "var(--red)", 0.14)}${[0, 1].map((i) => seg(pers[i], [130, LT - H], "var(--muted)", 1, dash)).join("")}
  ${tx(10, LT - 4, "LT (eje)", { s: 10, b: 1, a: "start" })}${tx(10, LT - H - 4, "LH (recta límite)", { s: 10, b: 1, a: "start", c: "var(--leaf)" })}${pt([130, LT - H], "P", 0, -8, "var(--leaf)")}`, "cl312") + tx(250, 172, "cuadrado del suelo en perspectiva", { s: 10, b: 1, a: "end", c: "var(--red)" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Homología y afinidad",
  minutos: 120,
  objetivos: [
    "Entender la homología como una proyección central entre dos planos",
    "Identificar los elementos de una homología: centro, eje y rectas límite",
    "Construir figuras homólogas a partir del centro, el eje y una pareja de puntos",
    "Trazar las rectas límite y relacionar la homología de la circunferencia con las cónicas",
    "Construir figuras afines y aplicar la afinidad a la elipse",
    "Hallar los ejes de una elipse a partir de dos diámetros conjugados",
  ],
  claves: ["homología", "centro de homología", "eje de homología", "rectas límite", "afinidad", "dirección de afinidad", "razón de afinidad", "diámetros conjugados", "construcción de Rytz", "transformación proyectiva"],
  lectura: {
    titulo: "Sombras que siguen reglas",
    html: `<p>Pon una lámpara cerca de una ventana con forma de cuadrado. En el suelo aparece una sombra que ya no es un cuadrado: es un trapecio o un cuadrilátero torcido. Sin embargo, la sombra no es caprichosa. Las líneas rectas siguen siendo rectas, la sombra de cada esquina está en la línea que va de la bombilla a esa esquina y los bordes de la ventana y los de su sombra se encuentran justo en la línea donde la pared toca el suelo.</p>
    <p>Esas reglas definen una transformación que los arquitectos y pintores del Renacimiento usaban de forma intuitiva para dibujar en perspectiva, y que en el siglo XIX el francés Jean-Victor Poncelet estudió de forma rigurosa mientras era prisionero de guerra en Rusia: la <b>homología</b>. Si la luz viene de muy lejos, como la del Sol, los rayos son paralelos y la transformación se simplifica: es una <b>afinidad</b>.</p>
    <p>Homología y afinidad son las herramientas que relacionan lo que ves con lo que mides. Sirven para obtener la verdadera magnitud de una sección, para pasar de un círculo a una elipse o para entender por qué una rueda vista de lado parece un óvalo. En este tema aprenderás a construirlas paso a paso.</p>`,
  },
  pregunta: {
    texto: "Si proyectas con una linterna la sombra de un triángulo recortado sobre el suelo, ¿dónde se cortan cada lado del triángulo y el lado correspondiente de su sombra?",
    respuesta: "En la recta donde se cortan el plano del triángulo y el suelo, que es el <mark>eje de homología</mark>. Los puntos del eje son los únicos que coinciden con su sombra, así que cada lado y su sombra tienen que encontrarse allí.",
  },
  bloques: [
    {
      html: `<h3>3.1 De la proyección central a la homología</h3><p>Imagina dos planos que se cortan en una recta e y un punto V exterior a ambos, como una bombilla. Cada punto P del primer plano se proyecta desde V sobre el segundo en un punto P′. A esta operación se le llama <b>proyección central</b> o perspectiva. Tiene tres propiedades evidentes:</p><ul><li>Un punto, su proyección y V están <b>alineados</b>.</li><li>Una recta se proyecta en otra recta.</li><li>Los puntos de la recta común e se proyectan en sí mismos, así que una recta y su proyección se cortan <b>sobre e</b>.</li></ul><p>Si ahora se abate uno de los planos sobre el otro girando alrededor de e, como cuando se cierra un libro, las dos figuras quedan en el mismo plano. Se demuestra que las propiedades anteriores se conservan: los puntos correspondientes siguen alineados con un punto fijo O (que ya no es V, sino su posición tras el giro) y las rectas correspondientes siguen cortándose en e. Esa relación entre dos figuras de un mismo plano es la <b>homología</b>.</p><p>Por eso la homología aparece siempre que se proyecta una figura plana: en las sombras de luz artificial, en la perspectiva cónica y en las secciones de pirámides y conos.</p>`,
      svg: s1,
    },
    {
      html: `<h3>3.2 Homología: definición y elementos</h3><p>Una <b>homología</b> es una transformación del plano que hace corresponder a cada punto A otro punto A′ (su <b>homólogo</b>) cumpliendo:</p><ol><li>Dos puntos homólogos están alineados con un punto fijo O, el <b>centro de homología</b>.</li><li>Dos rectas homólogas se cortan en un punto de una recta fija e, el <b>eje de homología</b>.</li></ol><p>Los <b>elementos dobles</b> (que se transforman en sí mismos) son el centro O, todos los puntos del eje y todas las rectas que pasan por O (cada una es doble, aunque sus puntos no lo sean).</p><p>La homología <b>conserva</b> la alineación (rectas en rectas), la incidencia (si un punto está en una recta, su homólogo está en la recta homóloga) y la tangencia. <b>No conserva</b> las distancias, los ángulos, el paralelismo ni las proporciones: un cuadrado puede transformarse en un trapecio cualquiera y una circunferencia en una elipse, una parábola o una hipérbola.</p><p>Se llama <b>razón de la homología</b> a la razón doble (O, M, A, A′), que es la misma para todos los puntos. Si vale −1 la homología es <b>involutiva</b> (o armónica): aplicarla dos veces devuelve la figura original.</p>`,
      svg: s2,
    },
    {
      html: `<h3>3.3 Determinación y construcción de figuras homólogas</h3><p>Una homología queda determinada por su <b>centro O</b>, su <b>eje e</b> y <b>una pareja de puntos homólogos</b> A y A′ (alineados con O). También puede darse por el centro, el eje y una recta límite, o por el eje y dos parejas de puntos.</p><p>Para hallar el homólogo B′ de un punto B:</p><ol><li>Se une A con B y se prolonga hasta cortar el eje en un punto M (doble).</li><li>La recta homóloga de AB pasa por M y por A′: se traza MA′.</li><li>B′ está en la recta OB (rayo por el centro). Su corte con MA′ es B′.</li></ol><p>Si AB es paralela al eje, su homóloga es paralela al eje por A′. Si B está alineado con O y A, se usa un punto auxiliar C cuyo homólogo se halla primero. Para transformar un polígono se repite el proceso vértice a vértice, aprovechando los puntos ya obtenidos: así se acumulan menos errores.</p><p>Comprobación útil: cada lado de la figura y su homólogo deben cortarse <b>exactamente sobre el eje</b>. Si no ocurre, hay un error de trazado.</p>`,
      svg: s3,
      video: { id: "VTud03UVo9o", titulo: "Cómo hacer puntos homólogos paso a paso (homología)", canal: "Dibujo Técnico paso a paso", vistas: 34011, busqueda: "homología dibujo técnico" },
    },
    {
      html: `<h3>3.4 Rectas límite</h3><p>En la proyección central, los puntos del primer plano que están a la altura de V (en el plano paralelo al segundo plano por V) se proyectan en el infinito. Al pasar a la homología aparecen dos rectas especiales, ambas <b>paralelas al eje</b>:</p><ul><li><b>Recta límite RL</b> (de la figura original): sus puntos tienen el homólogo en el infinito.</li><li><b>Recta límite RL′</b> (de la figura transformada): es la homóloga de la recta del infinito de la figura original.</li></ul><p>Propiedad fundamental: <b>la distancia del centro O a una recta límite es igual a la distancia del eje a la otra recta límite</b>. Además, las dos rectas límite quedan a lados opuestos del eje o del centro, de forma simétrica respecto del punto medio entre O y el eje.</p><p>Para trazar RL′: se toma una recta r cualquiera que pase por A; su homóloga r′ pasa por A′ y por el punto M de corte con el eje; la paralela a r por O corta a r′ en un punto de RL′. Para RL se hace lo mismo con el papel de A y A′ intercambiado.</p><p>Las rectas límite permiten predecir la forma de la figura homóloga: <b>dos rectas que se cortan en RL tienen homólogas paralelas</b>. Así, si un cuadrilátero tiene dos lados que se cortan en la recta límite, su homólogo es un trapecio.</p>`,
      svg: s4,
      video: { id: "ZTHQcskIpzY", titulo: "Recta límite en homología: trazado y definición", canal: "Dibujo Técnico paso a paso", vistas: 47084, busqueda: "homología recta límite" },
    },
    {
      html: `<h3>3.5 Homología de la circunferencia: las cónicas</h3><p>La homóloga de una circunferencia es siempre una <b>cónica</b>, y cuál sea depende de la posición de la circunferencia respecto de la recta límite RL:</p><ul><li>Si la circunferencia <b>no corta</b> a RL, ningún punto va al infinito: la homóloga es una <b>elipse</b>.</li><li>Si es <b>tangente</b> a RL, un punto va al infinito: la homóloga es una <b>parábola</b>, con el eje paralelo al rayo que une O con el punto de tangencia.</li><li>Si la <b>corta</b> en dos puntos, dos puntos van al infinito: la homóloga es una <b>hipérbola</b>, con asíntotas paralelas a los rayos de O a esos dos puntos.</li></ul><p>Esto explica por qué las cónicas se llaman así: son las secciones de un cono, que es la proyección central de una circunferencia desde su vértice.</p><p>Para construir la cónica homóloga no basta con transformar unos pocos puntos: conviene transformar también las <b>tangentes</b> en ellos (se conserva la tangencia) y aprovechar la polaridad. Un truco práctico es transformar un cuadrado circunscrito a la circunferencia: su homólogo es un cuadrilátero circunscrito a la cónica, tangente en los homólogos de los puntos de contacto.</p>`,
      svg: s5,
    },
    {
      html: `<h3>3.6 Casos particulares de la homología</h3><p>Según la posición del centro y del eje, la homología se convierte en transformaciones que ya conoces:</p><table class="tb"><thead><tr><th>Centro</th><th>Eje</th><th>Transformación</th></tr></thead><tbody><tr><td>Propio</td><td>Propio</td><td>Homología general</td></tr><tr><td>Impropio (en el infinito)</td><td>Propio</td><td><b>Afinidad</b>: los rayos son paralelos</td></tr><tr><td>Propio</td><td>Impropio</td><td><b>Homotecia</b>: rectas homólogas paralelas</td></tr><tr><td>Impropio</td><td>Impropio</td><td><b>Traslación</b></td></tr></tbody></table><p>Además, una afinidad ortogonal de razón −1 es una <b>simetría axial</b>, y una homotecia de razón −1 es una <b>simetría central</b>.</p><p>En la homotecia las rectas límite también desaparecen (están en el infinito), por eso se conservan el paralelismo y los ángulos: la figura homotética es <b>semejante</b>. En la afinidad, en cambio, se conserva el paralelismo pero no los ángulos: un cuadrado se transforma en un paralelogramo y una circunferencia en una elipse.</p><p>Ver todas estas transformaciones como casos de una sola, la homología, simplifica mucho el estudio: las construcciones son las mismas cambiando «rayos por O» por «rectas paralelas a una dirección».</p>`,
      svg: s6,
    },
    {
      html: `<h3>3.7 Afinidad: definición y elementos</h3><p>La <b>afinidad</b> es la homología de centro impropio. Es la relación entre una figura plana y su proyección paralela, como la sombra producida por el Sol. Dos puntos afines A y A′ cumplen:</p><ol><li>La recta AA′ es paralela a una dirección fija, la <b>dirección de afinidad</b>.</li><li>Dos rectas afines se cortan en el <b>eje de afinidad</b> e (o son paralelas a él).</li></ol><p>Se llama <b>razón de afinidad</b> a k = MA′ / MA, siendo M el punto en que la recta AA′ corta al eje. Es la misma para todos los puntos. Según la dirección:</p><ul><li><b>Afinidad ortogonal</b>: la dirección es perpendicular al eje.</li><li><b>Afinidad oblicua</b>: la dirección forma otro ángulo con el eje.</li></ul><p>La afinidad <b>conserva</b> el paralelismo, la razón entre segmentos paralelos (en particular, los puntos medios) y la razón entre áreas: todas las áreas quedan multiplicadas por |k| en una afinidad ortogonal. No conserva los ángulos ni las longitudes. Un paralelogramo se transforma en otro paralelogramo y una circunferencia en una elipse.</p>`,
      svg: s7,
      video: { id: "2Ha-YFagGmI", titulo: "Afinidad: definición y propiedades", canal: "Arturo Geometría", vistas: 68108, busqueda: "afinidad dibujo técnico" },
    },
    {
      html: `<h3>3.8 Construcción de figuras afines</h3><p>Una afinidad queda determinada por el <b>eje</b> y una <b>pareja de puntos afines</b> A y A′ (que fijan la dirección y la razón), o por el eje, la dirección y la razón.</p><p>El homólogo de un punto B se construye igual que en la homología, cambiando el rayo por O por la paralela a AA′:</p><ol><li>Se une A con B hasta cortar el eje en M.</li><li>Se une M con A′.</li><li>Por B se traza la paralela a AA′; su corte con MA′ es B′.</li></ol><p>En una <b>afinidad ortogonal de razón k</b> hay un atajo: B′ está en la perpendicular al eje por B, a una distancia del eje igual a k veces la de B. Si k es negativa, B′ queda al otro lado del eje.</p><p>Si AB es paralela al eje, A′B′ también lo es y, además, mide lo mismo: en la afinidad <b>los segmentos paralelos al eje conservan su longitud</b>. Este detalle sirve para comprobar el trazado.</p><p>La afinidad aparece en el sistema diédrico cada vez que se abate un plano: la proyección de una figura y su abatimiento son afines, con el eje en la charnela y la dirección perpendicular a ella.</p>`,
      svg: s8,
    },
    {
      html: `<h3>3.9 La elipse como figura afín de la circunferencia</h3><p>Una <b>elipse</b> de semiejes a y b es la figura afín de su <b>circunferencia principal</b> (de radio a) en la afinidad ortogonal de eje el eje mayor y razón k = b / a. Cada punto P de la circunferencia se transforma en el punto P′ de la elipse que está en la misma perpendicular al eje mayor, a una distancia b / a veces menor.</p><p>De esta propiedad salen muchas construcciones:</p><ul><li><b>Trazado por puntos</b> con dos circunferencias concéntricas de radios a y b: cada radio corta a ambas; la vertical desde el corte con la grande y la horizontal desde el corte con la pequeña se cortan en un punto de la elipse.</li><li><b>Tangente en un punto P′</b>: se traza la tangente a la circunferencia en P, que corta al eje en M; la tangente a la elipse es MP′ (M es doble).</li><li><b>Diámetros conjugados</b>: dos diámetros perpendiculares de la circunferencia se transforman en dos diámetros de la elipse que se llaman <b>conjugados</b>: cada uno es paralelo a las tangentes en los extremos del otro.</li></ul><p>También se puede ver la elipse como figura afín oblicua de una circunferencia, lo que explica que la proyección de una circunferencia en perspectiva caballera o isométrica sea siempre una elipse.</p>`,
      svg: s9,
      video: { id: "nT4IhESUdv0", titulo: "Elipse dados sus ejes (método de las circunferencias afines)", canal: "Arturo Geometría", vistas: 99059, busqueda: "afinidad circunferencia elipse" },
    },
    {
      html: `<h3>3.10 Ejes de una elipse dados dos diámetros conjugados</h3><p>En perspectiva, una circunferencia se convierte en una elipse de la que conocemos con facilidad dos <b>diámetros conjugados</b> (por ejemplo, los transformados de dos diámetros perpendiculares), pero no sus ejes. Para hallarlos se usa la <b>construcción de Rytz</b>, que se basa en la afinidad:</p><ol><li>Sean CP y CQ los semidiámetros conjugados. Se gira P 90° alrededor de C: se obtiene P*.</li><li>Se halla el punto medio D del segmento P*Q.</li><li>Con centro D y radio DC se traza una circunferencia que corta a la recta P*Q en U y W.</li><li>Las rectas CU y CW son las <b>direcciones de los ejes</b>.</li><li>Los semiejes miden QU y QW: el mayor es la distancia de Q al punto más lejano.</li></ol><p>Otra opción es el método de la circunferencia auxiliar: se traza la circunferencia de diámetro uno de los diámetros conjugados y se busca la afinidad que la transforma en la elipse. Ambos procedimientos permiten dibujar la elipse con un compás de elipses o con un programa de CAD, que siempre piden los ejes.</p>`,
      svg: s10,
    },
    {
      html: `<h3>3.11 Aplicación: secciones y verdaderas magnitudes</h3><p>Cuando un plano corta a un prisma, la <b>sección</b> se ve deformada en las proyecciones. Para conocer su <b>verdadera magnitud</b> se abate el plano sobre el plano horizontal girándolo alrededor de su traza horizontal, la <b>charnela</b>. La proyección horizontal de la sección y la sección abatida son <b>figuras afines</b>:</p><ul><li>El <b>eje de afinidad</b> es la charnela (sus puntos no se mueven al abatir).</li><li>La <b>dirección de afinidad</b> es perpendicular a la charnela (cada punto se abate en un plano perpendicular a ella).</li><li>Basta abatir un vértice con el método del triángulo de abatimiento; los demás se obtienen por afinidad, prolongando lados hasta la charnela.</li></ul><p>En una <b>pirámide</b> o un <b>cono</b> ocurre algo parecido, pero la relación entre la base y la sección es una <b>homología</b>: el centro es el vértice de la pirámide (o su proyección) y el eje es la recta en que el plano de la sección corta al plano de la base. Por eso, la sección plana de un cono de base circular es una cónica, y su tipo depende de si el plano corta, toca o no corta a la recta límite.</p><p>Estas ideas se desarrollan en los temas de sistema diédrico; aquí basta con reconocer la relación.</p>`,
      svg: s11,
      video: { id: "8raW-y6rFYk", titulo: "Sección de una pirámide con un plano oblicuo (parte 2): abatimiento de la sección", canal: "PDD Profesor de Dibujo", vistas: 77323, busqueda: "sección pirámide abatimiento afinidad" },
    },
    {
      html: `<h3>3.12 Aplicación: la perspectiva cónica</h3><p>En la perspectiva cónica, el <b>plano geometral</b> (el suelo) y el <b>plano del cuadro</b> (donde se dibuja) se cortan en la <b>línea de tierra</b> LT. Si se abate el geometral sobre el cuadro, la planta de una figura del suelo y su perspectiva se corresponden en una <b>homología</b>:</p><ul><li>El <b>eje</b> es la línea de tierra: los puntos apoyados en el cuadro se ven en verdadera magnitud.</li><li>El <b>centro</b> es el punto de vista abatido.</li><li>La <b>recta límite</b> de la perspectiva es la <b>línea del horizonte</b> LH, porque los puntos del infinito del suelo se ven sobre ella.</li></ul><p>Así, dos rectas paralelas del suelo se ven en perspectiva cortándose en un punto de la línea del horizonte, su <b>punto de fuga</b>. Las perpendiculares al cuadro fugan en el <b>punto principal</b> P.</p><p>Por eso un cuadrado del suelo se ve como un trapecio con los lados de profundidad convergentes. Esta relación permite construir la perspectiva de cualquier planta sin calcular cada punto, solo trazando homólogos. La estudiarás con detalle en el tema de perspectiva cónica.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "En una homología de centro O y eje e, A está a 3 cm de O y su homólogo A′ a 6 cm, en la misma semirrecta. El rayo OA corta al eje a 9 cm de O. ¿Dónde está el homólogo de un punto B de ese rayo situado a 4,5 cm de O?", pasos: ["Razón doble constante: (O, M; A, A′) = (OA / MA) : (OA′ / MA′) = (3/6) : (6/3) = 1/4.", "Para B′ a distancia x: (4,5 / 4,5) : (x / (9 − x)) = 1/4 → (9 − x)/x = 1/4.", "9 − x = x/4 → x = 7,2."], resultado: "B′ está a 7,2 cm de O." },
    { enunciado: "En una homología, la distancia del centro al eje es 10 cm y la recta límite RL está a 4 cm del centro. ¿Dónde está RL′?", pasos: ["La distancia de O a RL es igual a la del eje a RL′.", "RL′ está a 4 cm del eje, entre el centro y el eje."], resultado: "RL′ a 4 cm del eje (6 cm del centro)." },
    { enunciado: "Una circunferencia de radio 2 cm tiene el centro a 5 cm de la recta límite RL. ¿Qué cónica es su homóloga? ¿Y si el centro está a 2 cm? ¿Y a 1 cm?", pasos: ["5 > 2: no corta a RL → elipse.", "2 = 2: tangente a RL → parábola.", "1 < 2: la corta → hipérbola."], resultado: "Elipse, parábola e hipérbola." },
    { enunciado: "Afinidad ortogonal de eje el eje x y razón k = 1,5. Halla los afines de A(2, 4) y B(−1, −2).", pasos: ["En la ortogonal, el punto conserva la abscisa y la distancia al eje se multiplica por k.", "A′ = (2, 6); B′ = (−1, −3)."], resultado: "A′(2, 6) y B′(−1, −3)." },
    { enunciado: "Una elipse tiene semiejes a = 5 cm y b = 3 cm. Un punto P de la circunferencia principal está a 4 cm del eje mayor. ¿A qué distancia del eje está su afín P′ en la elipse?", pasos: ["Razón de afinidad k = b / a = 0,6.", "Distancia de P′ = 4 · 0,6."], resultado: "2,4 cm." },
    { enunciado: "Un cuadrado de 4 cm de lado se transforma por afinidad ortogonal de razón 0,5 con el eje en uno de sus lados. ¿Qué figura resulta y qué área tiene?", pasos: ["El lado sobre el eje es doble y mide 4 cm.", "La altura se reduce a 2 cm; los lados paralelos al eje se conservan.", "Área = 16 · 0,5."], resultado: "Un rectángulo de 4 × 2 cm, de 8 cm²." },
  ],
  errores: [
    "Unir el homólogo de un punto con el centro en lugar de usar el rayo por O del punto original.",
    "Olvidar comprobar que cada lado y su homólogo se cortan en el eje.",
    "Dibujar las rectas límite sin hacerlas paralelas al eje.",
    "Pensar que la homología conserva el paralelismo: solo lo hace la afinidad (y la homotecia).",
    "En la afinidad oblicua, trazar perpendiculares al eje en lugar de paralelas a la dirección de afinidad.",
    "Confundir diámetros conjugados con ejes: los ejes son los únicos conjugados perpendiculares.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define homología e indica sus elementos dobles.", sol: "Transformación del plano en la que los puntos homólogos están alineados con un centro O y las rectas homólogas se cortan en un eje e. Son dobles O, los puntos del eje y las rectas que pasan por O." },
    { nivel: "básico", q: "¿Qué propiedades geométricas conserva la homología y cuáles no?", sol: "Conserva alineación, incidencia y tangencia. No conserva distancias, ángulos, paralelismo ni proporciones." },
    { nivel: "básico", q: "Dados O, el eje y la pareja A, A′, construye el homólogo de un punto B cualquiera.", sol: "AB ∩ e = M; recta MA′; su corte con OB es B′." },
    { nivel: "básico", q: "Dibuja el homólogo de un triángulo ABC con O a 6 cm del eje y A′ en la recta OA al otro lado del eje.", sol: "Se hallan B′ y C′ con el procedimiento del punto M; se comprueba que AB y A′B′, BC y B′C′ y AC y A′C′ se cortan en el eje." },
    { nivel: "básico", q: "¿Qué es una recta límite? ¿Cuántas hay en una homología?", sol: "Una recta cuyos puntos tienen el homólogo en el infinito (RL), o la homóloga de la recta del infinito (RL′). Hay dos, paralelas al eje." },
    { nivel: "básico", q: "La distancia del centro al eje es 8 cm y RL′ está a 3 cm del eje. ¿Dónde está RL?", sol: "A 3 cm del centro, porque la distancia de O a RL es igual a la del eje a RL′." },
    { nivel: "básico", q: "¿Qué transformación es una homología con el centro en el infinito? ¿Y con el eje en el infinito?", sol: "Afinidad y homotecia, respectivamente." },
    { nivel: "básico", q: "Construye la figura afín de un cuadrado en una afinidad ortogonal de razón 2 con el eje paralelo a un lado y exterior al cuadrado.", sol: "Cada vértice se lleva a la perpendicular al eje, al doble de distancia. Resulta un rectángulo con los lados paralelos al eje iguales y los perpendiculares el doble." },
    { nivel: "básico", q: "En una afinidad, ¿se conserva el punto medio de un segmento? Razónalo.", sol: "Sí: la afinidad conserva la razón entre segmentos de una misma recta, así que el punto medio se transforma en el punto medio." },
    { nivel: "básico", q: "Indica la razón de afinidad que transforma una circunferencia de radio 5 en la elipse de semiejes 5 y 2.", sol: "k = b / a = 2 / 5 = 0,4, con eje en el eje mayor y dirección perpendicular." },
    { nivel: "básico", q: "¿Qué cónica es la homóloga de una circunferencia tangente a la recta límite?", sol: "Una parábola." },
    { nivel: "básico", q: "¿Qué relación hay entre la proyección horizontal de una sección plana y su abatimiento?", sol: "Son afines: eje la charnela y dirección perpendicular a ella." },
    { nivel: "medio", q: "Determina el homólogo de B cuando B está alineado con O y A.", sol: "Se halla primero el homólogo C′ de un punto auxiliar C no alineado. Luego se usa la pareja C, C′: CB ∩ e = N; NC′ ∩ OB = B′." },
    { nivel: "medio", q: "Traza las dos rectas límite de una homología dada por O, e, A y A′.", sol: "RL′: por O, paralela a una recta r por A; r ∩ e = M; MA′ corta a la paralela en un punto de RL′; por él, paralela al eje. RL: igual intercambiando A y A′." },
    { nivel: "medio", q: "Un trapecio ABCD tiene AB y CD paralelos al eje y sus lados no paralelos AD y BC se cortan en un punto de la recta límite RL. ¿Qué figura es su homólogo?", sol: "A′B′ y C′D′ siguen siendo paralelos al eje. A′D′ y B′C′ son paralelos entre sí, porque AD y BC se cortan en RL y su punto común va al infinito. El homólogo es un paralelogramo." },
    { nivel: "medio", q: "Transforma una circunferencia en una elipse por homología. Explica cómo usar un cuadrado circunscrito.", sol: "Se transforma el cuadrado circunscrito en un cuadrilátero circunscrito a la elipse; los homólogos de los puntos de contacto son puntos de tangencia de la elipse, y se completan con algunos puntos más por diámetros." },
    { nivel: "medio", q: "Construye por afinidad oblicua el afín de un hexágono regular con el eje a 1 cm de un lado y la dirección a 60°.", sol: "Se da una pareja A, A′ con la dirección 60°. Para cada vértice B: AB ∩ e = M; MA′ corta a la paralela por B a AA′ en B′. Resulta un hexágono no regular con lados opuestos paralelos." },
    { nivel: "medio", q: "Traza la tangente a una elipse en un punto P′ usando la afinidad con su circunferencia principal.", sol: "Se halla P en la circunferencia (misma perpendicular al eje mayor). La tangente a la circunferencia en P corta al eje mayor en M. La recta MP′ es la tangente a la elipse." },
    { nivel: "medio", q: "Dibuja la elipse de semiejes 5 y 3 cm por el método de las circunferencias afines con 12 puntos.", sol: "Circunferencias de radios 5 y 3; 12 radios cada 30°; desde el corte con la grande se baja la perpendicular al eje mayor y desde el de la pequeña la paralela; se cortan en los puntos de la elipse." },
    { nivel: "medio", q: "En una homología, el eje está a 10 cm del centro y la razón (O, M; A, A′) vale 2. Si A está a 4 cm de O en un rayo perpendicular al eje, ¿dónde está A′?", sol: "(OA / MA) : (OA′ / MA′) = 2 → (4/6) : (x / (10 − x)) = 2 → (10 − x)/x = 3 → x = 2,5 cm de O." },
    { nivel: "medio", q: "¿Qué cónica resulta al transformar una circunferencia que corta a RL en dos puntos? ¿Cómo son sus asíntotas?", sol: "Una hipérbola. Sus asíntotas son las homólogas de las tangentes en esos dos puntos y son paralelas a los rayos que unen O con ellos." },
    { nivel: "medio", q: "Un rectángulo de 6 × 4 cm se transforma por afinidad ortogonal de razón −1 con el eje en un lado. ¿Qué transformación es?", sol: "Una simetría axial respecto de ese lado: el rectángulo se refleja al otro lado del eje, igual." },
    { nivel: "medio", q: "Aplica la construcción de Rytz a dos semidiámetros conjugados de 5 y 3 cm que forman 60°.", sol: "Se gira el de 5 cm 90°; punto medio D de P*Q; circunferencia de centro D por C; cortes U y W en la recta P*Q; ejes CU y CW; semiejes QU y QW, de unos 5,3 y 2,5 cm. Se comprueba con a² + b² = 5² + 3² = 34 y a · b = 5 · 3 · sen 60° ≈ 13." },
    { nivel: "medio", q: "Explica por qué una circunferencia en perspectiva caballera se ve como una elipse.", sol: "La caballera es una proyección paralela (afinidad entre el plano de la circunferencia y el cuadro), y la figura afín de una circunferencia es una elipse." },
    { nivel: "avanzado", q: "Demuestra que la distancia de O a RL es igual a la distancia del eje a RL′.", sol: "Sea un rayo por O que corta al eje en M, a distancia d de O. Si L está en RL, su homólogo está en el infinito; si K′ está en RL′, su original está en el infinito. Igualando la razón doble constante para las dos parejas: OL / ML = MK′ / OK′. Con OL = x, ML = d − x, MK′ = y, OK′ = d − y: x / (d − x) = y / (d − y), de donde x = y. Como RL y RL′ son paralelas al eje, la igualdad vale para las distancias." },
    { nivel: "avanzado", q: "Se da una homología por su eje, su centro y la recta límite RL. Construye el homólogo de un punto A.", sol: "Por A se traza una recta r que corta al eje en M y a RL en L. La homóloga r′ pasa por M y es paralela a OL (L va al infinito en la dirección OL). A′ = r′ ∩ OA." },
    { nivel: "avanzado", q: "Transforma un cuadrado en otro cuadrado de distinto tamaño mediante una homología. ¿Qué tipo de homología necesitas?", sol: "Una homotecia (eje impropio) con centro en cualquier punto y razón igual al cociente de lados; una homología general no conserva los ángulos rectos ni el paralelismo." },
    { nivel: "avanzado", q: "Halla los ejes de la elipse homóloga de una circunferencia sin trazar la elipse completa.", sol: "Se transforman dos diámetros perpendiculares de la circunferencia cuyas homólogas sean conjugadas (los que pasan por el polo de RL). Con los dos semidiámetros conjugados se aplica Rytz." },
    { nivel: "avanzado", q: "La base de una pirámide es un cuadrado y se corta por un plano. Explica qué homología relaciona la base y la sección en proyección horizontal.", sol: "Centro: la proyección del vértice. Eje: la proyección de la recta común al plano de la base y al plano secante. Cada arista lateral es un rayo por el centro, y cada lado de la base y su homólogo en la sección se cortan en el eje." },
    { nivel: "avanzado", q: "¿Por qué la razón doble se conserva en la homología pero la razón simple no?", sol: "La proyección central conserva la razón doble de cuatro puntos alineados (es invariante proyectivo). La razón simple involucra el punto del infinito de la recta, que no se transforma en el del infinito de la homóloga (va a RL′)." },
    { nivel: "avanzado", q: "Construye la parábola homóloga de una circunferencia tangente a RL en T y di la dirección de su eje.", sol: "Se transforman varios puntos y sus tangentes. El punto T va al infinito en la dirección OT: el eje de la parábola es paralelo a OT. La tangente en T (que es RL) va a la recta del infinito." },
    { nivel: "avanzado", q: "Explica cómo comprobarías con una afinidad que el área de una elipse es πab.", sol: "La elipse es la afín de su circunferencia principal con razón b / a en una afinidad ortogonal, que multiplica todas las áreas por b / a: πa² · (b / a) = πab." },
  ],
  quiz: reparte([
    { q: "En una homología, A, A′ y el centro O están…", o: ["alineados", "formando triángulo rectángulo", "en una circunferencia", "en el eje"], a: 0, e: "Primera propiedad." },
    { q: "Dos rectas homólogas se cortan…", o: ["en el centro", "en el eje", "en la recta límite", "nunca"], a: 1, e: "O son paralelas al eje." },
    { q: "Son dobles en una homología…", o: ["solo el centro", "el centro y los puntos del eje", "las rectas límite", "nada"], a: 1, e: "Y las rectas por O." },
    { q: "Las rectas límite son…", o: ["perpendiculares al eje", "paralelas al eje", "rayos por O", "tangentes"], a: 1, e: "Siempre paralelas al eje." },
    { q: "La distancia de O a RL es igual a…", o: ["la de O al eje", "la del eje a RL′", "la de RL a RL′", "cero"], a: 1, e: "Propiedad fundamental." },
    { q: "Dos rectas que se cortan en RL tienen homólogas…", o: ["perpendiculares", "paralelas", "secantes en el eje", "coincidentes"], a: 1, e: "Su punto común va al infinito." },
    { q: "La homóloga de una circunferencia que no corta a RL es…", o: ["una parábola", "una elipse", "una hipérbola", "una recta"], a: 1, e: "Ningún punto va al infinito." },
    { q: "Si la circunferencia es tangente a RL, su homóloga es…", o: ["elipse", "parábola", "hipérbola", "circunferencia"], a: 1, e: "Un punto al infinito." },
    { q: "Si corta a RL, su homóloga es…", o: ["elipse", "parábola", "hipérbola", "un punto"], a: 2, e: "Dos puntos al infinito." },
    { q: "Una homología de centro impropio es…", o: ["una homotecia", "una afinidad", "un giro", "una inversión"], a: 1, e: "Rayos paralelos." },
    { q: "Una homología de eje impropio es…", o: ["una afinidad", "una homotecia", "una simetría", "una traslación"], a: 1, e: "Rectas homólogas paralelas." },
    { q: "La afinidad conserva…", o: ["los ángulos", "el paralelismo", "las longitudes", "las circunferencias"], a: 1, e: "Y la razón de segmentos paralelos." },
    { q: "En una afinidad ortogonal, la dirección es…", o: ["paralela al eje", "perpendicular al eje", "a 45°", "cualquiera"], a: 1, e: "Por definición." },
    { q: "La razón de afinidad es…", o: ["MA′ / MA", "OA′ / OA", "AA′", "MA · MA′"], a: 0, e: "M en el eje." },
    { q: "Una afinidad ortogonal de razón −1 es…", o: ["una homotecia", "una simetría axial", "un giro", "una traslación"], a: 1, e: "El punto pasa al otro lado a igual distancia." },
    { q: "La elipse es afín de su circunferencia principal con razón…", o: ["a / b", "b / a", "a · b", "1"], a: 1, e: "Eje: el eje mayor." },
    { q: "Dos diámetros conjugados de una elipse…", o: ["siempre son perpendiculares", "cada uno es paralelo a las tangentes en los extremos del otro", "son los ejes", "son iguales"], a: 1, e: "Los ejes son el único par perpendicular." },
    { q: "La construcción de Rytz sirve para…", o: ["trazar una parábola", "hallar los ejes de una elipse a partir de diámetros conjugados", "hallar rectas límite", "dibujar una hipérbola"], a: 1, e: "Gira un semidiámetro 90°." },
    { q: "En el abatimiento de una sección, el eje de afinidad es…", o: ["la línea de tierra", "la charnela", "la traza vertical", "el eje del prisma"], a: 1, e: "Sus puntos no se mueven." },
    { q: "En perspectiva cónica, la recta límite de la perspectiva es…", o: ["la línea de tierra", "la línea del horizonte", "la vertical principal", "el eje"], a: 1, e: "Allí fugan las rectas del suelo." },
  ]),
  examen: reparte([
    { q: "Para hallar B′ conocidos O, e, A y A′, la recta AB se prolonga hasta…", o: ["O", "el eje", "RL", "A′"], a: 1, e: "Su corte M es doble." },
    { q: "Si AB es paralela al eje, A′B′ es…", o: ["perpendicular al eje", "paralela al eje", "un rayo por O", "imposible"], a: 1, e: "Se cortarían en el infinito del eje." },
    { q: "Centro a 12 cm del eje y RL a 5 cm del centro: RL′ está a … del eje.", o: ["5 cm", "7 cm", "12 cm", "17 cm"], a: 0, e: "Igualdad de distancias." },
    { q: "Una homología transforma un cuadrado en…", o: ["siempre un cuadrado", "un cuadrilátero cualquiera", "una circunferencia", "un triángulo"], a: 1, e: "No conserva ni ángulos ni paralelismo." },
    { q: "En una afinidad, los segmentos paralelos al eje…", o: ["conservan su longitud", "se duplican", "se anulan", "giran"], a: 0, e: "El eje es doble." },
    { q: "Afinidad ortogonal de eje Ox y k = 3: el afín de (1, 2) es…", o: ["(3, 6)", "(1, 6)", "(3, 2)", "(1, 2/3)"], a: 1, e: "La ordenada por 3." },
    { q: "Elipse de semiejes 6 y 4: razón de la afinidad con su circunferencia principal…", o: ["1,5", "2/3", "2", "24"], a: 1, e: "4/6." },
    { q: "La sombra de una figura plana producida por el Sol sobre otro plano es…", o: ["homóloga", "afín", "inversa", "simétrica"], a: 1, e: "Rayos paralelos." },
  ]),
  feynman: ["Por qué en una homología las rectas homólogas se cortan en el eje", "Cómo se construye el homólogo de un punto paso a paso", "Qué son las rectas límite y cómo deciden el tipo de cónica", "En qué se diferencia una afinidad de una homología", "Por qué la elipse es afín de una circunferencia"],
  glosario: [
    ["Homología", "Transformación con puntos homólogos alineados con un centro y rectas homólogas cortándose en un eje."],
    ["Centro de homología", "Punto O por el que pasan todas las rectas que unen puntos homólogos."],
    ["Eje de homología", "Recta de puntos dobles donde se cortan las rectas homólogas."],
    ["Recta límite", "Recta paralela al eje cuyos puntos tienen el homólogo en el infinito (o son homólogos de puntos del infinito)."],
    ["Elemento doble", "Elemento que se transforma en sí mismo."],
    ["Afinidad", "Homología de centro impropio: los puntos afines se unen por rectas paralelas."],
    ["Dirección de afinidad", "Dirección común de las rectas que unen puntos afines."],
    ["Razón de afinidad", "Cociente MA′ / MA, constante para todos los puntos."],
    ["Afinidad ortogonal", "La que tiene la dirección perpendicular al eje."],
    ["Homotecia", "Homología de eje impropio; produce figuras semejantes."],
    ["Razón doble", "Invariante proyectivo de cuatro puntos alineados."],
    ["Diámetros conjugados", "Diámetros de una cónica en que cada uno es paralelo a las tangentes en los extremos del otro."],
    ["Construcción de Rytz", "Método para hallar los ejes de una elipse a partir de dos diámetros conjugados."],
    ["Charnela", "Recta alrededor de la que se gira un plano para abatirlo."],
    ["Cónica", "Curva homóloga de una circunferencia: elipse, parábola o hipérbola."],
  ],
  situacion: {
    titulo: "La sombra del cartel",
    reto: "Una tienda quiere pintar en la acera la sombra exacta que produciría su cartel cuadrado con una farola a cierta altura, como reclamo visual. Vuestro grupo calculará la forma de esa sombra con una homología.",
    pasos: [
      "Medid (o inventad con datos realistas) el cartel, su altura sobre el suelo, la posición de la farola y la línea donde la fachada toca la acera.",
      "Representad en un plano la fachada abatida sobre el suelo y localizad el centro de homología y el eje.",
      "Construid la homóloga del cartel y trazad las rectas límite para comprobar su forma.",
      "Repetid el estudio suponiendo luz solar (afinidad) y comparad las dos sombras.",
      "Preparad una plantilla a escala 1:10 para pintar la sombra.",
    ],
    producto: "Lámina A3 con las dos construcciones y una plantilla recortable de la sombra con su memoria explicativa.",
    evaluacion: [
      "Identifica correctamente el centro, el eje y la pareja de puntos homólogos.",
      "Construye la figura homóloga con precisión y la comprueba sobre el eje.",
      "Explica las diferencias entre la sombra por homología y por afinidad.",
      "Presenta el trabajo con calidad gráfica y rotulación normalizada.",
    ],
  },
  figura: fig("Homología y afinidad de un vistazo", "Resumen: elementos, construcción, rectas límite y afinidad", [
    ["Homología", ["A, A′, O alineados", "rectas homólogas: eje", "dobles: O y el eje", "no conserva ∥"], "var(--red)"],
    ["Construcción", ["AB ∩ e = M", "MA′ ∩ OB = B′", "comprobar en el eje", "rayos por O"], "var(--pen)"],
    ["Rectas límite", ["paralelas al eje", "d(O, RL) = d(e, RL′)", "circ. → elipse/parábola", "/hipérbola"], "var(--leaf)"],
    ["Afinidad", ["centro impropio", "k = MA′ / MA", "conserva ∥", "elipse: k = b / a"], "var(--inf)"],
  ]),
  video: { id: "i8LBZlf4ae0", titulo: "Homología. Fundamentos teóricos", canal: "Curso de Dibujo Técnico", vistas: 96338, busqueda: "homología dibujo técnico" },
  mapa: mapa("HOMOLOGÍA", "var(--bac)", [
    ["Elementos", "centro · eje · pareja A A′", "var(--red)"],
    ["Rectas límite", "paralelas al eje · cónicas", "var(--leaf)"],
    ["Casos", "afinidad · homotecia · traslación", "var(--pen)"],
    ["Aplicaciones", "elipse · secciones · cónica", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Homología", "A, A′ y O alineados; rectas homólogas se cortan en el eje."],
    ["Homólogo de B", "AB ∩ e = M; MA′ ∩ OB = B′"],
    ["Elementos dobles", "Centro, puntos del eje y rectas por O."],
    ["Rectas límite", "Paralelas al eje; d(O, RL) = d(e, RL′)."],
    ["Circunferencia que no corta a RL", "Elipse"],
    ["Tangente a RL", "Parábola"],
    ["Secante a RL", "Hipérbola"],
    ["Centro impropio", "Afinidad"],
    ["Eje impropio", "Homotecia"],
    ["Razón de afinidad", "k = MA′ / MA"],
    ["Elipse y circunferencia", "Afinidad ortogonal, k = b / a."],
    ["Rytz", "Girar P 90°, punto medio D, circunferencia de centro D por C."],
  ],
  familias: ["Con una linterna y un cartón recortado, proyectad sombras sobre la mesa y observad qué se conserva y qué no.", "Mirad una rueda o un plato inclinados: siempre parecen elipses. Preguntad por qué.", "Pedid que os explique la diferencia entre la sombra de una lámpara y la del Sol.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: transformaciones proyectivas; homología y afinidad: elementos, determinación, rectas límite, construcción de figuras homólogas y afines; homología de la circunferencia y cónicas; ejes de la elipse a partir de diámetros conjugados; aplicaciones a secciones, sombras y perspectiva (RD 243/2022, Dibujo Técnico II, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Práctica con linterna y Sol: comparar sombras de la misma figura (homología frente a afinidad).", "GeoGebra: construir una homología con deslizadores para el centro y el eje y observar las rectas límite.", "Relación con Matemáticas II: la afinidad como aplicación lineal; matrices de transformación.", "Fotografía: rectificar en el ordenador la perspectiva de una fachada (homología inversa)."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Homología (geometría proyectiva), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Homolog%C3%ADa_(geometr%C3%ADa)" },
    { t: "Transformación afín, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Transformaci%C3%B3n_af%C3%ADn" },
    { t: "Construcción de Rytz, Wikipedia (en inglés)", url: "https://en.wikipedia.org/wiki/Rytz%27s_construction" },
  ],
  revisado: "2026-11-21",
};
