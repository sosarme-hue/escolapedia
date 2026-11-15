// Dibujo Técnico I 1º Bachillerato · Tema 3. Nivel libro. Construcciones calculadas en SVG.
const G = require("./_bach1-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, arco, marca, pt, paso, linea, recto, polar, corteCC, corteRR, tangPC, tangExt, tangInt, mid, dist, ang, unit, add, sub, mul, pie, cota, tx } = G;
const dash = 'stroke-dasharray="5 3"';
const ejeL = 'stroke-dasharray="10 3 2 3"';

// 3.1 Propiedades fundamentales.
const s1 = (() => {
  const O = [62, 92], T = polar(O, 42, 45), u = unit(O, T), d = [u[1], -u[0]];
  const C1 = [150, 60], C2 = polar(C1, 44, -20), Te = polar(C1, 26, -20), C3 = [200, 132], C4 = polar(C3, 16, 200), Ti = polar(C3, 30, 200);
  return dib("Propiedades de la tangencia: la tangente es perpendicular al radio y los centros de dos circunferencias tangentes están alineados con el punto de tangencia", `${circ(O, 42)}${seg(add(T, mul(d, -50)), add(T, mul(d, 50)), "var(--red)", 2.4)}${seg(O, T, "var(--pen)", 1.8)}${recto(T, O, add(T, d), 7)}${pt(O, "O", -14, 4)}${pt(T, "T", 6, 6, "var(--red)")}
  ${circ(C1, 26)}${circ(C2, 18)}${seg(C1, C2, "var(--pen)", 1.3, dash)}${pt(C1, "", 0, 0)}${pt(C2, "", 0, 0)}${pt(Te, "", 0, 0, "var(--red)")}
  ${circ(C3, 30)}${circ(C4, 14)}${seg(Ti, C3, "var(--pen)", 1.3, dash)}${pt(C3, "", 0, 0)}${pt(C4, "", 0, 0)}${pt(Ti, "", 0, 0, "var(--red)")}
  ${tx(62, 168, "tangente ⊥ radio", { s: 10, b: 1, c: "var(--red)" })}${tx(246, 24, "exteriores: d = R + r", { s: 9.5, a: "end", b: 1 })}${tx(150, 172, "interiores: d = R − r", { s: 9.5, a: "start", b: 1 })}`);
})();

// 3.2 Tangentes desde un punto exterior.
const s2 = (() => {
  const O = [80, 95], r = 45, P = [215, 95], M = mid(O, P), [T1, T2] = tangPC(P, O, r);
  return dib("Rectas tangentes a una circunferencia desde un punto exterior con la circunferencia de diámetro OP", `${circ(O, r)}${seg(O, P, "var(--muted)", 1.2)}${circ(M, dist(M, O), "var(--muted)", 1.2, dash)}${seg(P, add(T1, mul(unit(P, T1), 28)), "var(--red)", 2.4)}${seg(P, add(T2, mul(unit(P, T2), 28)), "var(--red)", 2.4)}${fina(O, T1, "var(--pen)")}${fina(O, T2, "var(--pen)")}${recto(T1, O, P, 6)}
  ${pt(O, "O", -14, 4)}${pt(P, "P", 6, 4)}${pt(M, "M", 0, 15)}${pt(T1, "T₁", -4, -8, "var(--red)")}${pt(T2, "T₂", -4, 16, "var(--red)")}${paso([160, 108], 1)}${paso([200, 40], 2)}${paso([236, 150], 3, "var(--red)")}
  ${tx(14, 176, "1 M medio de OP · 2 circunf. de diámetro OP · 3 PT₁, PT₂", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 3.3 Tangentes exteriores a dos circunferencias.
const s3 = (() => {
  const C1 = [75, 92], r1 = 45, C2 = [200, 92], r2 = 22, [Ta, Tb] = tangExt(C1, r1, C2, r2), [A] = tangPC(C2, C1, r1 - r2).sort((p, q) => p[1] - q[1]);
  const ln = ([P, Q]) => seg(add(P, mul(unit(Q, P), 14)), add(Q, mul(unit(P, Q), 22)), "var(--red)", 2.4);
  return dib("Tangentes exteriores a dos circunferencias por reducción de radios", `${circ(C1, r1)}${circ(C2, r2)}${circ(C1, r1 - r2, "var(--muted)", 1.2, dash)}${seg(C2, A, "var(--muted)", 1.2)}${seg(C1, Ta[0], "var(--pen)", 1.4)}${seg(C2, Ta[1], "var(--pen)", 1.4)}${ln(Ta)}${ln(Tb)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(A, "A", -14, -2, "var(--muted)")}${pt(Ta[0], "T₁", -6, -8, "var(--red)")}${pt(Ta[1], "T₂", 2, -8, "var(--red)")}${paso([40, 52], 1)}${paso([150, 70], 2)}${paso([150, 20], 3, "var(--red)")}
  ${tx(14, 176, "1 auxiliar r₁ − r₂ · 2 tangente desde O₂ · 3 paralela", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 3.4 Tangentes interiores.
const s4 = (() => {
  const C1 = [70, 92], r1 = 38, C2 = [195, 92], r2 = 26, [Ta, Tb] = tangInt(C1, r1, C2, r2), A = tangPC(C2, C1, r1 + r2).sort((p, q) => p[1] - q[1])[0];
  const ln = ([P, Q]) => seg(add(P, mul(unit(Q, P), 18)), add(Q, mul(unit(P, Q), 18)), "var(--red)", 2.4);
  return dib("Tangentes interiores a dos circunferencias por ampliación de radios", `${circ(C1, r1)}${circ(C2, r2)}${circ(C1, r1 + r2, "var(--muted)", 1.2, dash)}${seg(C2, A, "var(--muted)", 1.2)}${seg(C1, A, "var(--pen)", 1.2, dash)}${ln(Ta)}${ln(Tb)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(A, "A", -4, -8, "var(--muted)")}${pt(Ta[0], "T₁", -16, 0, "var(--red)")}${pt(Ta[1], "T₂", 6, 12, "var(--red)")}${paso([40, 40], 1)}${paso([170, 40], 2)}
  ${tx(14, 176, "1 auxiliar r₁ + r₂ · 2 tangente desde O₂ · 3 paralela", { s: 9, a: "start", c: "var(--muted)" })}`);
})();

// 3.5 Circunferencia tangente a una recta en un punto y que pasa por otro.
const s5 = (() => {
  const T = [110, 150], P = [170, 80], M = mid(T, P), v = unit(T, P), O = corteRR(T, [110, 0], M, add(M, [-v[1], v[0]])), r = dist(O, T);
  return dib("Circunferencia tangente a una recta en un punto T y que pasa por un punto P", `${seg([14, 150], [246, 150])}${seg([110, 166], [110, 18], "var(--muted)", 1.2, dash)}${seg(T, P, "var(--muted)", 1.2)}${recta(M, add(M, [-v[1], v[0]]), 40, "var(--muted)", 1.2, dash)}${recto(T, [200, 150], [110, 100], 7)}${circ(O, r, "var(--red)", 2.6)}${seg(O, P, "var(--pen)", 1.3)}
  ${pt(T, "T", 4, 14)}${pt(P, "P", 6, -4)}${pt(O, "O", -14, 4, "var(--red)")}${pt(M, "M", 6, 10)}${tx(244, 144, "r", { b: 1 })}${paso([96, 30], 1)}${paso([214, 128], 2)}${paso([30, 90], 3, "var(--red)")}
  ${tx(246, 20, "1 perpendicular en T", { s: 9, a: "end" })}${tx(246, 32, "2 mediatriz de TP", { s: 9, a: "end" })}`);
})();

// 3.6 Circunferencia de radio dado tangente a dos rectas.
const s6 = (() => {
  const V = [24, 158], r = 30, O = polar(V, r / Math.sin((25 * Math.PI) / 180), 25), T1 = [O[0], 158], T2 = pie(O, V, polar(V, 10, 50));
  return dib("Circunferencia de radio dado tangente a dos rectas que se cortan: el centro está en la bisectriz", `${seg(V, [246, 158])}${seg(V, polar(V, 190, 50))}${seg(V, polar(V, 230, 25), "var(--muted)", 1.3, dash)}${seg([20, 128], [246, 128], "var(--pen)", 1.2, dash)}${circ(O, r, "var(--red)", 2.6)}${fina(O, T1, "var(--pen)")}${fina(O, T2, "var(--pen)")}${recto(T1, [200, 158], O, 6)}
  ${pt(O, "O", 4, -8, "var(--red)")}${pt(T1, "T₁", 4, 14, "var(--red)")}${pt(T2, "T₂", -16, 0, "var(--red)")}${tx(O[0] + 8, 146, "r", { s: 10, c: "var(--pen)", b: 1, a: "start" })}${paso([224, 66], 1)}${paso([224, 114], 2, "var(--pen)")}
  ${tx(246, 24, "1 bisectriz del ángulo", { s: 9.5, a: "end" })}${tx(246, 38, "2 paralela a distancia r", { s: 9.5, a: "end" })}${tx(246, 52, "O = corte; T: perpendiculares", { s: 9.5, a: "end", c: "var(--red)" })}`);
})();

// 3.7 Circunferencias de radio dado tangentes a una recta y a una circunferencia.
const s7 = (() => {
  const C = [170, 90], R = 30, r = 22, y = 150 - r, dx = Math.sqrt((R + r) ** 2 - (y - C[1]) ** 2), O1 = [C[0] - dx, y], O2 = [C[0] + dx, y];
  return dib("Circunferencias de radio dado tangentes a una recta y a una circunferencia: dos lugares geométricos", `${seg([14, 150], [246, 150])}${circ(C, R)}${seg([90, y], [246, y], "var(--pen)", 1.2, dash)}${arco(C, R + r, 200, 340, "var(--pen)", 1.2, dash)}${circ(O1, r, "var(--red)", 2.4)}${circ(O2, r, "var(--red)", 2.4)}
  ${seg(C, O1, "var(--muted)", 1)}${seg(C, O2, "var(--muted)", 1)}${pt(C, "C", 4, -6)}${pt(O1, "O₁", -6, -6, "var(--red)")}${pt(O2, "O₂", 6, -6, "var(--red)")}${pt(add(C, mul(unit(C, O1), R)), "", 0, 0, "var(--red)")}${pt(add(C, mul(unit(C, O2), R)), "", 0, 0, "var(--red)")}${pt([O1[0], 150], "", 0, 0, "var(--red)")}${pt([O2[0], 150], "", 0, 0, "var(--red)")}
  ${tx(14, 30, "radio r dado", { s: 9.5, a: "start", b: 1 })}${tx(14, 46, "1 paralela a la recta a r", { s: 9, a: "start", c: "var(--pen)" })}${tx(14, 58, "2 circunferencia R + r", { s: 9, a: "start", c: "var(--pen)" })}${tx(14, 70, "→ 2 soluciones", { s: 9, a: "start", c: "var(--red)", b: 1 })}${paso([60, y - 10], 1)}${paso([134, 48], 2)}`);
})();

// 3.8 Enlace de dos rectas con un arco.
const s8 = (() => {
  const V = [200, 150], r = 35, O = polar(V, r / Math.sin((30 * Math.PI) / 180), 150), E = polar(V, 125, 120), T1 = [O[0], 150], T2 = pie(O, V, E);
  return dib("Enlace de dos rectas que forman un ángulo mediante un arco de radio dado", `${seg(T1, V, "var(--muted)", 1.2, dash)}${seg(T2, V, "var(--muted)", 1.2, dash)}${seg(V, polar(V, 110, 150), "var(--muted)", 1, dash)}${seg([30, 120 - 5], [200, 120 - 5], "var(--pen)", 1, dash)}
  ${seg([20, 150], T1, "var(--red)", 2.8)}${arco(O, r, -90, 30, "var(--red)", 2.8)}${seg(T2, E, "var(--red)", 2.8)}${fina(O, T1, "var(--pen)")}${fina(O, T2, "var(--pen)")}
  ${pt(O, "O", -14, 4)}${pt(T1, "T₁", -6, 14)}${pt(T2, "T₂", 6, 4)}${pt(V, "V", 4, 14, "var(--muted)")}${paso([226, 120], 1)}${paso([60, 104], 2, "var(--pen)")}${paso([108, 72], 3, "var(--red)")}
  ${tx(14, 24, "1 bisectriz", { s: 9, a: "start" })}${tx(14, 36, "2 paralela a distancia r", { s: 9, a: "start" })}${tx(14, 48, "3 perpendiculares → T₁, T₂", { s: 9, a: "start", c: "var(--red)" })}`);
})();

// 3.9 Enlace de dos circunferencias con un arco de radio dado.
const s9 = (() => {
  const C1 = [56, 128], r1 = 30, C2 = [196, 128], r2 = 24, R = 90, O = corteCC(C1, r1 + R, C2, r2 + R).sort((p, q) => p[1] - q[1])[0], T1 = add(C1, mul(unit(C1, O), r1)), T2 = add(C2, mul(unit(C2, O), r2));
  return dib("Enlace exterior de dos circunferencias mediante un arco de radio dado", `${circ(C1, r1)}${circ(C2, r2)}${seg(C1, O, "var(--muted)", 1.1, dash)}${seg(C2, O, "var(--muted)", 1.1, dash)}${marca(C1, O, 14, "var(--pen)")}${marca(C2, O, 14, "var(--pen)")}${arco(O, R, ang(O, T1), ang(O, T2), "var(--red)", 2.8)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(O, "O", 8, 4, "var(--red)")}${pt(T1, "T₁", -14, -4, "var(--red)")}${pt(T2, "T₂", 8, 12, "var(--red)")}${paso([100, 30], 1, "var(--pen)")}${paso([126, 112], 2, "var(--red)")}
  ${tx(246, 24, "O₁O = r₁ + R", { s: 9.5, a: "end", c: "var(--pen)", b: 1 })}${tx(246, 38, "O₂O = r₂ + R", { s: 9.5, a: "end", c: "var(--pen)", b: 1 })}`);
})();

// 3.10 Enlace de dos rectas paralelas con dos arcos (curva en S).
const s10 = (() => {
  const A = [100, 50], B = [160, 140], r = 32.5, O1 = [100, 82.5], O2 = [160, 107.5], M = mid(A, B);
  return dib("Enlace de dos rectas paralelas por los puntos A y B con dos arcos de igual radio", `${seg([14, 50], A, "var(--red)", 2.8)}${seg(B, [246, 140], "var(--red)", 2.8)}${seg(A, [100, 160], "var(--muted)", 1.1, dash)}${seg(B, [160, 26], "var(--muted)", 1.1, dash)}${seg(A, B, "var(--muted)", 1.1)}${seg(O1, O2, "var(--pen)", 1.2)}
  ${arco(O1, r, ang(O1, M), 90, "var(--red)", 2.8)}${arco(O2, r, ang(O2, M), 270, "var(--red)", 2.8)}${pt(A, "A", -4, -8)}${pt(B, "B", 4, 15)}${pt(M, "M", 8, 2, "var(--red)")}${pt(O1, "O₁", -18, 4, "var(--pen)")}${pt(O2, "O₂", 6, 4, "var(--pen)")}
  ${paso([84, 30], 1)}${paso([176, 30], 2)}${paso([200, 70], 3, "var(--pen)")}${tx(246, 164, "1, 2 perpendiculares en A y B", { s: 9, a: "end", c: "var(--muted)" })}${tx(246, 176, "3 mediatrices de AM y MB", { s: 9, a: "end", c: "var(--muted)" })}`);
})();

// 3.11 Eje radical.
const s11 = (() => {
  const C1 = [70, 100], r1 = 45, C2 = [185, 100], r2 = 30, x = 132.4, P = [x, 30], T1 = tangPC(P, C1, r1).sort((p, q) => q[0] - p[0])[0], T2 = tangPC(P, C2, r2).sort((p, q) => p[0] - q[0])[0];
  return dib("Eje radical de dos circunferencias: desde sus puntos las tangentes a ambas miden lo mismo", `${circ(C1, r1)}${circ(C2, r2)}${seg(C1, C2, "var(--muted)", 1.1, dash)}${seg([x, 16], [x, 168], "var(--red)", 2.4)}${seg(P, T1, "var(--pen)", 2)}${seg(P, T2, "var(--pen)", 2)}${recto([x, 100], C2, [x, 60], 6)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", 2, 16)}${pt(P, "P", 6, -2)}${pt(T1, "T₁", -16, 0, "var(--pen)")}${pt(T2, "T₂", 6, 2, "var(--pen)")}${tx(246, 160, "eje radical ⊥ O₁O₂", { s: 9.5, a: "end", c: "var(--red)", b: 1 })}${tx(246, 24, "PT₁ = PT₂", { s: 10, a: "end", c: "var(--pen)", b: 1 })}${tx(246, 38, "misma potencia", { s: 9.5, a: "end", c: "var(--muted)" })}`);
})();

// 3.12 Figura técnica: biela.
const s12 = (() => {
  const C1 = [70, 88], R1 = 42, C2 = [196, 88], R2 = 26, [Ta, Tb] = tangExt(C1, R1, C2, R2), sup = Ta[0][1] < Tb[0][1] ? Ta : Tb, inf = sup === Ta ? Tb : Ta;
  return dib("Perfil de una biela: dos circunferencias enlazadas por sus tangentes exteriores", `${seg([20, 88], [236, 88], "var(--muted)", 1, ejeL)}${seg([70, 38], [70, 138], "var(--muted)", 1, ejeL)}${seg([196, 54], [196, 122], "var(--muted)", 1, ejeL)}
  ${arco(C1, R1, ang(C1, sup[0]), ang(C1, inf[0]), "var(--ink)", 2.8)}${arco(C2, R2, ang(C2, inf[1]), ang(C2, sup[1]), "var(--ink)", 2.8)}${seg(sup[0], sup[1], "var(--ink)", 2.8)}${seg(inf[0], inf[1], "var(--ink)", 2.8)}${circ(C1, 20, "var(--ink)", 2.4)}${circ(C2, 12, "var(--ink)", 2.4)}
  ${pt(sup[0], "", 0, 0, "var(--red)")}${pt(sup[1], "", 0, 0, "var(--red)")}${pt(inf[0], "", 0, 0, "var(--red)")}${pt(inf[1], "", 0, 0, "var(--red)")}${cota(C1, C2, -66, "126")}${tx(130, 24, "puntos de tangencia en rojo: allí cambia el trazado", { s: 9, c: "var(--red)" })}`);
})();

module.exports = {
  materia: "Dibujo Técnico I",
  curso: "1-bachillerato",
  titulo: "Tangencias y enlaces",
  minutos: 120,
  objetivos: [
    "Conocer las propiedades fundamentales de la tangencia entre rectas y circunferencias",
    "Trazar rectas tangentes a una circunferencia desde un punto y tangentes comunes a dos circunferencias",
    "Construir circunferencias tangentes a rectas y circunferencias aplicando lugares geométricos",
    "Resolver enlaces de rectas y circunferencias con arcos de radio dado, determinando centros y puntos de tangencia",
    "Comprender los conceptos de potencia y eje radical como base de los problemas de Apolonio",
    "Analizar y dibujar figuras técnicas formadas por tangencias y enlaces",
  ],
  claves: ["tangente", "punto de tangencia", "radio", "enlace", "arco de acuerdo", "reducción de radios", "eje radical", "potencia", "bisectriz", "figura técnica"],
  lectura: {
    titulo: "Curvas que no dan tirones",
    html: `<p>Si alguna vez has viajado en tren, quizá hayas notado que al entrar en una curva no se nota ningún golpe. Los ingenieros que diseñan vías, carreteras y montañas rusas se preocupan mucho de cómo se une una recta con una curva: si la unión no es suave, aparece un tirón brusco que incomoda a los viajeros y desgasta las ruedas. En geometría, una unión suave entre dos líneas se llama <b>enlace</b>, y se basa en la <b>tangencia</b>.</p>
    <p>Las tangencias están en casi todos los objetos que nos rodean: el perfil de una llave inglesa, la silueta de un cuchillo, el contorno de una biela de motor, las letras de una tipografía, el logotipo de una marca o la planta de una rotonda. Cada una de esas formas se dibuja con rectas y arcos que se tocan sin cortarse, y el dibujante tiene que saber exactamente dónde está el centro de cada arco y en qué punto empieza y termina.</p>
    <p>En este tema aprenderás las propiedades que hacen posible esas uniones, a trazar rectas y circunferencias tangentes con precisión y a resolver los enlaces que aparecen en las piezas técnicas. Verás que, una vez más, todo se reduce a encontrar <b>lugares geométricos</b>.</p>`,
  },
  pregunta: {
    texto: "Si una recta toca a una circunferencia en un solo punto, ¿qué ángulo forma con el radio que llega a ese punto?",
    respuesta: "Un <mark>ángulo recto</mark>: la tangente es siempre perpendicular al radio en el punto de tangencia. Es la propiedad que permite localizar puntos de tangencia y centros en todas las construcciones del tema.",
  },
  bloques: [
    {
      html: `<h3>3.1 Tangencia: concepto y propiedades</h3><p>Dos figuras son <b>tangentes</b> cuando tienen un único punto en común, el <b>punto de tangencia</b>, y en él no se cortan. Las tangencias en el plano se dan entre rectas y circunferencias o entre circunferencias. Todas las construcciones del tema se apoyan en tres propiedades:</p><ol><li>Una recta tangente a una circunferencia es <b>perpendicular al radio</b> en el punto de tangencia. Por tanto, el centro de toda circunferencia tangente a una recta en un punto T está en la perpendicular a la recta por T.</li><li>Si dos circunferencias son tangentes, el punto de tangencia y los dos <b>centros están alineados</b>. Si son tangentes exteriores, la distancia entre centros es la <b>suma</b> de los radios; si son tangentes interiores, es la <b>diferencia</b>.</li><li>El centro de una circunferencia tangente a dos rectas está en una de sus <b>bisectrices</b>, porque equidista de ambas.</li></ol><p>Además, el centro de una circunferencia que pasa por dos puntos está en la mediatriz del segmento que los une.</p><p>Resolver un problema de tangencias consiste, en esencia, en encontrar el <b>centro</b> de la circunferencia buscada (o la dirección de la recta) cortando lugares geométricos, y después determinar con exactitud los <b>puntos de tangencia</b>. Estos puntos deben marcarse siempre en el dibujo, porque indican dónde termina una línea y empieza la siguiente.</p>`,
      svg: s1,
    },
    {
      html: `<h3>3.2 Rectas tangentes a una circunferencia</h3><p><b>Por un punto T de la circunferencia</b>: basta trazar el radio OT y la perpendicular a él por T. Es la única tangente posible por ese punto.</p><p><b>Desde un punto exterior P</b> se pueden trazar dos tangentes. Como el ángulo OTP debe ser recto, T está en el <b>arco capaz de 90°</b> sobre el segmento OP, es decir, en la circunferencia de diámetro OP:</p><ol><li>Se une O con P y se halla el punto medio M de OP con su mediatriz.</li><li>Con centro en M y radio MO se traza una circunferencia que corta a la dada en T₁ y T₂.</li><li>Las rectas PT₁ y PT₂ son las tangentes. Los segmentos PT₁ y PT₂ son iguales.</li></ol><p>Si el punto P está sobre la circunferencia solo hay una tangente, y si está dentro no hay ninguna.</p><p><b>Tangentes paralelas a una dirección dada</b>: se traza por O la perpendicular a esa dirección; corta a la circunferencia en dos puntos, que son los de tangencia de las dos rectas paralelas a la dirección.</p><p>Estas construcciones aparecen, por ejemplo, al dibujar una polea con una correa que sale hacia otro punto o al representar el contorno de un cono visto desde un punto. Al dibujarlas, conviene que la tangente se trace justo hasta el punto de tangencia, sin pasarse, y que este punto se marque con un pequeño trazo.</p>`,
      svg: s2,
    },
    {
      html: `<h3>3.3 Tangentes exteriores a dos circunferencias</h3><p>Las <b>tangentes comunes exteriores</b> a dos circunferencias de centros O₁ y O₂ y radios r₁ &gt; r₂ dejan las dos circunferencias del mismo lado. Son las que dibuja una correa abierta que une dos poleas. Se obtienen por el método de <b>reducción de radios</b>:</p><ol><li>Con centro en O₁ se traza una circunferencia auxiliar de radio r₁ − r₂.</li><li>Desde O₂ se trazan las tangentes a esa circunferencia auxiliar (con la circunferencia de diámetro O₁O₂). Se obtiene el punto de tangencia A.</li><li>Se prolonga O₁A hasta cortar la circunferencia mayor en T₁. Por O₂ se traza el radio paralelo a O₁T₁, que da T₂.</li><li>La recta T₁T₂ es tangente a las dos circunferencias. La otra tangente exterior se obtiene igual con el otro punto.</li></ol><p>¿Por qué funciona? Al reducir los dos radios en r₂, la circunferencia pequeña se convierte en un punto (O₂) y la grande en la auxiliar. La tangente desde O₂ a la auxiliar es paralela a la tangente buscada y está desplazada exactamente r₂ hacia el interior.</p><p>Si las circunferencias tienen el mismo radio, las tangentes exteriores son simplemente paralelas a la recta de los centros, a distancia r. Si una circunferencia está dentro de la otra, no hay tangentes exteriores.</p>`,
      svg: s3,
      video: { id: "efFeQ5ypsTA", titulo: "Trazar las rectas tangentes exteriores a dos circunferencias", canal: "PDD Profesor de Dibujo", vistas: 613258, busqueda: "tangentes comunes a dos circunferencias" },
    },
    {
      html: `<h3>3.4 Tangentes interiores a dos circunferencias</h3><p>Las <b>tangentes comunes interiores</b> pasan entre las dos circunferencias y las dejan a lados opuestos. Son las de una correa cruzada, que invierte el sentido de giro de la segunda polea. Se obtienen por <b>ampliación de radios</b>:</p><ol><li>Con centro en O₁ se traza una circunferencia auxiliar de radio r₁ + r₂.</li><li>Desde O₂ se trazan las tangentes a la auxiliar, obteniendo el punto A.</li><li>El radio O₁A corta a la circunferencia de centro O₁ en T₁. Por O₂ se traza el radio paralelo a O₁A, pero <b>en sentido contrario</b>, y se obtiene T₂.</li><li>La recta T₁T₂ es la tangente interior.</li></ol><p>Ahora se ha ampliado una circunferencia en r₂ y reducido la otra a un punto, por lo que la paralela está desplazada r₂ en sentido opuesto.</p><p>El número de tangentes comunes depende de la posición relativa de las circunferencias:</p><ul><li><b>Exteriores</b> (d &gt; r₁ + r₂): cuatro tangentes, dos exteriores y dos interiores.</li><li><b>Tangentes exteriores</b> (d = r₁ + r₂): tres; las dos interiores se confunden en la tangente común.</li><li><b>Secantes</b>: dos, solo exteriores.</li><li><b>Tangentes interiores</b>: una. <b>Interiores</b>: ninguna.</li></ul><p>Discutir estas posiciones antes de dibujar evita buscar soluciones que no existen.</p>`,
      svg: s4,
    },
    {
      html: `<h3>3.5 Circunferencias tangentes a una recta</h3><p>El centro de una circunferencia tangente a una recta r está a una distancia de r igual al radio. De ahí salen varios casos:</p><ul><li><b>Tangente a r en un punto T y que pasa por P</b>: el centro está en la perpendicular a r por T y en la mediatriz de TP. Su corte O es el centro y OT el radio. Hay una sola solución.</li><li><b>Tangente a r en T y de radio dado</b>: el centro está en la perpendicular por T, a distancia r a uno u otro lado: dos soluciones.</li><li><b>De radio dado, tangente a r y que pasa por P</b>: el centro está en una paralela a r a distancia r y en la circunferencia de centro P y radio r. Puede haber dos, una o ninguna solución.</li><li><b>Que pasa por dos puntos A y B y es tangente a r</b>: es un problema de Apolonio (caso PPR) que se resuelve con la <b>potencia</b>: si la recta AB corta a r en Q, los puntos de tangencia están a una distancia de Q igual a la media proporcional de QA y QB.</li></ul><p>Fíjate en el método: cada condición se traduce en un lugar geométrico para el centro (perpendicular, paralela, mediatriz, circunferencia) y la solución está en sus cortes. Al final siempre hay que localizar el punto de tangencia, que en el caso de una recta es el pie de la perpendicular desde el centro.</p>`,
      svg: s5,
    },
    {
      html: `<h3>3.6 Circunferencias tangentes a dos rectas</h3><p>Una circunferencia tangente a dos rectas que se cortan tiene su centro en una de las <b>bisectrices</b> de los ángulos que forman. Casos frecuentes:</p><ul><li><b>De radio r dado</b>: se traza la bisectriz y una paralela a uno de los lados a distancia r. Su corte es el centro O. Los puntos de tangencia T₁ y T₂ son los pies de las perpendiculares desde O a cada recta. Considerando los cuatro ángulos, hay cuatro soluciones.</li><li><b>Conocido el punto de tangencia T en una de ellas</b>: el centro está en la bisectriz y en la perpendicular por T. El otro punto de tangencia está a la misma distancia del vértice que T.</li><li><b>Inscrita en un triángulo</b>: es tangente a tres rectas; su centro es el incentro, corte de las bisectrices.</li></ul><p>Si las dos rectas son <b>paralelas</b>, el centro está en la paralela media y el radio es necesariamente la mitad de la distancia entre ellas.</p><p>La circunferencia tangente a dos rectas es el núcleo del <b>acuerdo</b> o redondeo de esquinas: en una pieza mecánica, una esquina viva concentra tensiones y se rompe con facilidad, por lo que se redondea con un arco de radio pequeño tangente a los dos lados. En los planos aparece acotada como R5, R10, etc. Los programas de CAD tienen una orden específica (empalme o <i>fillet</i>) que aplica exactamente esta construcción.</p>`,
      svg: s6,
    },
    {
      html: `<h3>3.7 Circunferencias tangentes a otras circunferencias</h3><p>Si una circunferencia de radio r es tangente a otra de centro C y radio R, su centro está en una circunferencia concéntrica con la dada:</p><ul><li>de radio <b>R + r</b> si la tangencia es exterior;</li><li>de radio <b>R − r</b> (o r − R) si es interior.</li></ul><p>El punto de tangencia está siempre en la recta que une los dos centros. Con esta idea se resuelven muchos casos:</p><ul><li><b>Radio dado, tangente a una recta y a una circunferencia</b>: el centro está en una paralela a la recta a distancia r y en la circunferencia concéntrica de radio R + r (o R − r). En el dibujo aparecen dos soluciones exteriores.</li><li><b>Radio dado, tangente a dos circunferencias</b>: el centro está en el corte de dos circunferencias concéntricas con las dadas, de radios R₁ ± r y R₂ ± r. Combinando sumas y restas aparecen soluciones con tangencias exteriores, interiores o mixtas.</li><li><b>Tangente a una circunferencia en un punto T y que pasa por P</b>: el centro está en la recta CT y en la mediatriz de TP.</li></ul><p>Los problemas más generales, en los que la circunferencia buscada debe ser tangente a tres elementos (puntos, rectas o circunferencias) sin conocer el radio, son los <b>problemas de Apolonio</b>. Algunos se resuelven con la potencia y el eje radical y otros necesitan la inversión, que se estudia en segundo curso.</p>`,
      svg: s7,
    },
    {
      html: `<h3>3.8 Enlaces: concepto y enlace de rectas</h3><p>Un <b>enlace</b> es la unión de dos o más líneas (rectas o curvas) mediante arcos de circunferencia, de modo que el paso de una a otra sea continuo y <b>sin cambios bruscos de dirección</b>. Para que un enlace sea correcto, en cada punto de unión las dos líneas deben ser tangentes: es decir, deben tener la misma recta tangente.</p><p>Al dibujar un enlace hay que seguir siempre el mismo orden:</p><ol><li>Localizar el <b>centro</b> del arco de enlace con lugares geométricos.</li><li>Determinar los <b>puntos de tangencia</b>, que son los puntos de enlace.</li><li>Trazar primero los arcos y después las rectas, que se dibujan justo hasta los puntos de tangencia. Así se consigue una línea continua de grosor uniforme.</li></ol><p><b>Enlace de dos rectas que se cortan con un arco de radio r</b>: el centro O está en la bisectriz del ángulo y en una paralela a cualquiera de las rectas a distancia r. Las perpendiculares desde O a las rectas dan T₁ y T₂, y el arco de centro O entre T₁ y T₂ redondea la esquina.</p><p>Si las rectas son <b>perpendiculares</b>, el centro se obtiene aún más fácil: con centro en el vértice y radio r se marcan T₁ y T₂ sobre las rectas, y desde ellos, con el mismo radio, se obtiene O. Es la construcción de una esquina redondeada en una placa rectangular.</p>`,
      svg: s8,
    },
    {
      html: `<h3>3.9 Enlace de circunferencias y de rectas con circunferencias</h3><p>Para enlazar <b>dos circunferencias</b> (O₁, r₁) y (O₂, r₂) con un arco de radio R:</p><ul><li><b>Enlace exterior</b> (el arco toca las dos por fuera): el centro O está a distancia r₁ + R de O₁ y r₂ + R de O₂. Se trazan esos dos arcos y su corte es O. Los puntos de tangencia están en las rectas OO₁ y OO₂.</li><li><b>Enlace interior</b> (el arco envuelve a las dos): el centro está a distancia R − r₁ de O₁ y R − r₂ de O₂. Exige que R sea mayor que los dos radios.</li><li><b>Enlace mixto</b>: una distancia es suma y la otra diferencia.</li></ul><p>Para enlazar <b>una recta y una circunferencia</b> con un arco de radio R, el centro está en una paralela a la recta a distancia R y en una circunferencia concéntrica con la dada de radio r ± R. El punto de tangencia con la recta es el pie de la perpendicular y el de la circunferencia está en la recta de los centros.</p><p>Estos enlaces dibujan el contorno de ganchos, levas, bielas y muchas herramientas. En todas ellas el error más frecuente es colocar a ojo los puntos de tangencia: el arco parece correcto, pero aparece un pequeño escalón o un pico en la unión. Por eso deben construirse siempre con la recta que une los centros.</p>`,
      svg: s9,
    },
    {
      html: `<h3>3.10 Curvas de enlace: arcos consecutivos</h3><p>Una sucesión de arcos tangentes entre sí forma una <b>curva de enlace</b> o curva técnica de varios centros. La condición para que dos arcos consecutivos enlacen sin pico es que <b>sus centros y el punto de unión estén alineados</b>. Así se dibujan óvalos, ovoides, espirales y volutas, que verás en el tema siguiente.</p><p><b>Enlace de dos rectas paralelas por los puntos A y B con dos arcos de igual radio</b> (curva en S, como la de una carretera que cambia de carril o la de un tubo acodado):</p><ol><li>Se levantan las perpendiculares a las rectas en A y en B: los centros están en ellas.</li><li>Se une A con B; el punto de unión de los arcos es el punto medio M de AB, porque la figura es simétrica.</li><li>Las mediatrices de AM y de MB cortan a las perpendiculares en los centros O₁ y O₂.</li><li>Se trazan los arcos AM (centro O₁) y MB (centro O₂). O₁, M y O₂ quedan alineados.</li></ol><p><b>Enlace de una serie de puntos</b> (A, B, C, D…) con arcos: se elige el primer centro en la mediatriz de AB; el segundo está en la mediatriz de BC y en la recta que une el primer centro con B; y así sucesivamente. Es como dibujar una curva libre con el compás, garantizando que cada tramo enlace con el anterior.</p>`,
      svg: s10,
      video: { id: "spCPmdP04F0", titulo: "Enlazar dos rectas paralelas con arcos de igual radio", canal: "PDD Profesor de Dibujo", vistas: 152957, busqueda: "enlaces de rectas y arcos dibujo" },
    },
    {
      html: `<h3>3.11 Potencia y eje radical</h3><p>La <b>potencia</b> de un punto P respecto de una circunferencia de centro O y radio r es el número p = d² − r², donde d = PO. Si P es exterior, la potencia es positiva y coincide con el cuadrado de la longitud de la tangente desde P (por Pitágoras: PT² = d² − r²). Además, para cualquier secante que pase por P y corte a la circunferencia en A y B se cumple <b>PA · PB = p</b>: el producto no depende de la secante elegida.</p><p>El <b>eje radical</b> de dos circunferencias es el lugar geométrico de los puntos que tienen la misma potencia respecto de ambas. Es una recta <b>perpendicular a la línea de los centros</b>. Desde cualquiera de sus puntos exteriores, las tangentes a las dos circunferencias miden lo mismo.</p><ul><li>Si las circunferencias son secantes, el eje radical es la recta que pasa por sus dos puntos de corte.</li><li>Si son tangentes, es la tangente común en el punto de tangencia.</li><li>Si no se cortan, se traza una circunferencia auxiliar que corte a las dos; los ejes radicales de esta con cada una se cortan en un punto del eje buscado.</li></ul><p>Tres circunferencias tienen un <b>centro radical</b>, punto común de sus tres ejes radicales. Estas herramientas permiten resolver los problemas de Apolonio, como hallar las circunferencias que pasan por dos puntos y son tangentes a una recta o a una circunferencia.</p>`,
      svg: s11,
    },
    {
      html: `<h3>3.12 Figuras técnicas con tangencias</h3><p>Muchas piezas industriales tienen un contorno formado por rectas y arcos enlazados: bielas, llaves, ganchos, palancas, levas o soportes. Para dibujarlas a partir de un plano acotado se sigue un método ordenado:</p><ol><li><b>Analizar la figura</b> y separar los elementos conocidos (centros y radios acotados, rectas con posición fija) de los elementos de enlace, cuyo centro hay que hallar.</li><li>Dibujar los <b>ejes</b> y las circunferencias principales con trazo fino.</li><li>Resolver cada enlace con la construcción correspondiente: tangentes comunes, arcos tangentes a rectas o a circunferencias.</li><li>Marcar todos los <b>puntos de tangencia</b> con un pequeño trazo perpendicular.</li><li>Repasar el contorno con trazo grueso, empezando por los arcos y terminando con las rectas, sin pasarse de los puntos de tangencia.</li></ol><p>La biela del dibujo está formada por dos circunferencias de radios distintos (los «ojos», con sus taladros) unidas por sus dos tangentes exteriores. El contorno cambia de tipo de línea justo en los cuatro puntos de tangencia. En el plano se acotan la distancia entre ejes, los radios y los diámetros de los taladros; los puntos de tangencia no se acotan porque se deducen de la construcción.</p><p>En CAD, las mismas operaciones se hacen con órdenes de tangencia y empalme, pero entender la geometría permite detectar errores y dibujar a mano con precisión.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Desde un punto P a 10 cm del centro de una circunferencia de radio 6 cm se trazan las tangentes. ¿Cuánto miden los segmentos de tangente?", pasos: ["El triángulo OTP es rectángulo en T.", "PT² = OP² − OT² = 100 − 36 = 64."], resultado: "PT = 8 cm (las dos tangentes miden lo mismo)." },
    { enunciado: "Dos poleas de radios 30 y 12 mm tienen sus centros a 90 mm. ¿Qué radio tiene la circunferencia auxiliar para las tangentes exteriores? ¿Y para las interiores?", pasos: ["Exteriores: reducción de radios, r₁ − r₂ = 18 mm.", "Interiores: ampliación, r₁ + r₂ = 42 mm.", "Como 90 > 42, existen las cuatro tangentes."], resultado: "18 mm y 42 mm; cuatro tangentes comunes." },
    { enunciado: "Redondea con R = 10 mm la esquina de un ángulo recto.", pasos: ["Con centro en el vértice y radio 10 mm se marcan T₁ y T₂ sobre los lados.", "Con centro en T₁ y T₂ y radio 10 mm se obtiene el centro O (forma un cuadrado con el vértice).", "Arco de centro O de T₁ a T₂; los lados se repasan hasta T₁ y T₂."], resultado: "Esquina redondeada con centro a 10 mm de cada lado." },
    { enunciado: "Halla el centro del arco de radio 40 mm que enlaza exteriormente dos circunferencias de radios 15 y 10 mm cuyos centros distan 60 mm.", pasos: ["O está a 15 + 40 = 55 mm de O₁ y a 10 + 40 = 50 mm de O₂.", "Se trazan arcos de esos radios desde O₁ y O₂; se cortan porque 55 + 50 > 60 > 55 − 50.", "Los puntos de tangencia están en los segmentos OO₁ y OO₂, a 15 y 10 mm de O₁ y O₂."], resultado: "Dos posibles centros, simétricos respecto de O₁O₂." },
    { enunciado: "Calcula la potencia de un punto P situado a 13 cm del centro de una circunferencia de radio 5 cm. ¿Puede una secante desde P cortarla a 9 cm y a 16 cm de P?", pasos: ["p = 13² − 5² = 144 cm².", "Para una secante, PA · PB = 144.", "Si PA = 9, PB = 16: 9 · 16 = 144. Es posible."], resultado: "p = 144 cm²; tangente = 12 cm; la secante 9-16 es compatible." },
    { enunciado: "Enlaza dos rectas paralelas separadas 60 mm por los puntos A y B con dos arcos iguales, si la distancia horizontal entre A y B es 80 mm.", pasos: ["Por simetría el punto de unión es el punto medio de AB.", "Los centros están en las perpendiculares por A y B, a distancia r: 80² + (60 − 2r)² = (2r)².", "6400 + 3600 − 240r = 0 → r = 41,7 mm."], resultado: "Dos arcos de r ≈ 41,7 mm con centros alineados con el punto medio de AB." },
  ],
  errores: [
    "Situar a ojo los puntos de tangencia: siempre se obtienen con la perpendicular desde el centro o con la recta de los centros.",
    "Confundir reducción y ampliación de radios: las exteriores usan r₁ − r₂ y las interiores r₁ + r₂.",
    "En las tangentes interiores, trazar el radio de O₂ en el mismo sentido que el de O₁: va en sentido contrario.",
    "Trazar primero las rectas y después los arcos: es más fácil ajustar las rectas a los arcos que al revés.",
    "En un enlace interior, sumar los radios en lugar de restarlos.",
    "Olvidar discutir el número de soluciones: según la posición relativa puede haber varias o ninguna.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Enuncia las tres propiedades fundamentales de la tangencia.", sol: "1) La tangente es perpendicular al radio en el punto de tangencia. 2) En circunferencias tangentes, los centros y el punto de tangencia están alineados (d = R + r o R − r). 3) El centro de una circunferencia tangente a dos rectas está en una bisectriz." },
    { nivel: "básico", q: "Traza la tangente a una circunferencia de radio 30 mm en un punto T de ella.", sol: "Se dibuja el radio OT y la perpendicular a OT por T (con compás o escuadra y cartabón)." },
    { nivel: "básico", q: "Traza las tangentes desde un punto P a 70 mm del centro de una circunferencia de radio 25 mm. ¿Cuánto miden?", sol: "Punto medio M de OP; circunferencia de centro M y radio 35 mm; corta en T₁ y T₂. PT = √(70² − 25²) ≈ 65,4 mm." },
    { nivel: "básico", q: "Dos circunferencias de radios 20 y 12 mm son tangentes exteriores. ¿A qué distancia están sus centros? ¿Y si fueran tangentes interiores?", sol: "Exteriores: 20 + 12 = 32 mm. Interiores: 20 − 12 = 8 mm." },
    { nivel: "básico", q: "Dibuja una circunferencia de radio 15 mm tangente a dos rectas perpendiculares.", sol: "El centro está en la bisectriz (45°) a 15 mm de cada recta: se trazan paralelas a 15 mm y su corte es el centro. Los puntos de tangencia son los pies de las perpendiculares." },
    { nivel: "básico", q: "¿Cuántas tangentes comunes tienen dos circunferencias secantes? ¿Y dos exteriores?", sol: "Secantes: 2 (exteriores). Exteriores: 4 (dos exteriores y dos interiores)." },
    { nivel: "básico", q: "Explica qué es un enlace y qué condición deben cumplir las líneas en el punto de unión.", sol: "Es la unión de líneas mediante arcos de forma continua. En el punto de unión ambas líneas deben ser tangentes (tener la misma tangente), sin picos ni escalones." },
    { nivel: "básico", q: "Dibuja una circunferencia tangente a una recta en un punto T y de radio 20 mm. ¿Cuántas soluciones hay?", sol: "El centro está en la perpendicular por T a 20 mm, a un lado o al otro: 2 soluciones." },
    { nivel: "básico", q: "¿Dónde está el centro de una circunferencia que pasa por dos puntos A y B?", sol: "En la mediatriz de AB." },
    { nivel: "básico", q: "Redondea con R = 8 mm las cuatro esquinas de un rectángulo de 60 × 40 mm.", sol: "En cada esquina, el centro está a 8 mm de los dos lados (dentro del rectángulo). Los puntos de tangencia están a 8 mm del vértice sobre cada lado. Se trazan los arcos y se repasan los lados entre puntos de tangencia." },
    { nivel: "medio", q: "Traza las tangentes exteriores a dos circunferencias de radios 30 y 15 mm con centros a 80 mm.", sol: "Circunferencia auxiliar de centro O₁ y radio 15 mm; tangentes desde O₂ (circunferencia de diámetro O₁O₂); se prolongan los radios O₁A hasta T₁ y se trazan los radios paralelos desde O₂ hasta T₂. Recta T₁T₂ y su simétrica." },
    { nivel: "medio", q: "Traza las tangentes interiores a las circunferencias del ejercicio anterior.", sol: "Auxiliar de radio 45 mm con centro O₁; tangentes desde O₂; el radio O₁A corta en T₁; por O₂ el radio paralelo en sentido contrario da T₂. Existen porque 80 > 45." },
    { nivel: "medio", q: "Dibuja una circunferencia que pase por P y sea tangente a una recta r en T, con P a 40 mm de r y a 30 mm de la perpendicular por T.", sol: "Centro en la perpendicular por T y en la mediatriz de TP. Con T en el origen y P(30, 40): (x, y) = (0, k) con 30² + (40 − k)² = k² → 900 + 1600 − 80k = 0 → k = 31,25 mm. Radio 31,25 mm." },
    { nivel: "medio", q: "Halla las circunferencias de radio 10 mm tangentes a una recta r y a una circunferencia de radio 25 mm cuyo centro está a 30 mm de r.", sol: "Centro en la paralela a r a 10 mm (del lado de la circunferencia) y en la circunferencia concéntrica de radio 35 (tangencia exterior): la paralela está a 20 mm del centro, corta en 2 puntos (dx = √(35² − 20²) ≈ 28,7 mm). Con R − r = 15: la paralela a 20 mm no la corta. Dos soluciones exteriores." },
    { nivel: "medio", q: "Enlaza dos rectas que forman 60° con un arco de radio 20 mm. ¿A qué distancia del vértice están los puntos de tangencia?", sol: "Centro en la bisectriz (30°) a 20/sen 30° = 40 mm del vértice. Distancia del vértice a T: 20/tan 30° ≈ 34,6 mm sobre cada recta." },
    { nivel: "medio", q: "Enlaza una recta y una circunferencia de radio 20 mm, cuyo centro dista 50 mm de la recta, con un arco de radio 15 mm exterior a ambas.", sol: "Centro a 15 mm de la recta (paralela) y a 35 mm del centro de la circunferencia: la paralela está a 35 mm del centro, así que es tangente a la auxiliar: una sola solución, justo en la perpendicular desde el centro." },
    { nivel: "medio", q: "Dibuja el eje radical de dos circunferencias secantes y de dos tangentes.", sol: "Secantes: la recta que une sus puntos de corte. Tangentes: la tangente común en el punto de tangencia. En ambos casos es perpendicular a la línea de centros." },
    { nivel: "medio", q: "Halla el centro de un arco que enlace interiormente dos circunferencias de radios 10 y 15 mm, con centros a 50 mm, siendo R = 60 mm.", sol: "O a 60 − 10 = 50 mm de O₁ y a 60 − 15 = 45 mm de O₂. Se cortan dos arcos de esos radios. Los puntos de tangencia están en las prolongaciones de OO₁ y OO₂ más allá de O₁ y O₂." },
    { nivel: "medio", q: "Dibuja un óvalo formado por dos arcos de radio 30 mm y dos de radio 12 mm enlazados. ¿Qué condición deben cumplir los centros?", sol: "Cada centro grande, el centro pequeño contiguo y el punto de enlace deben estar alineados. Se eligen los centros pequeños sobre el eje mayor y los grandes sobre el menor, y los puntos de enlace en las rectas que los unen." },
    { nivel: "medio", q: "Desde un punto P exterior se traza una secante que corta a una circunferencia en A y B con PA = 4 cm y AB = 5 cm. ¿Cuánto mide la tangente desde P?", sol: "PB = 4 + 5 = 9 cm. PT² = PA · PB = 36 → PT = 6 cm." },
    { nivel: "medio", q: "Dibuja la figura de una arandela con lengüeta: circunferencia de radio 25 mm y una recta tangente horizontal enlazada a ella por un arco de 10 mm.", sol: "La lengüeta es una recta; el arco de enlace de 10 mm tiene su centro a 10 mm de la recta y a 25 + 10 = 35 mm del centro. Puntos de tangencia: pie de la perpendicular a la recta y punto de la recta de centros a 25 mm del centro." },
    { nivel: "medio", q: "Una correa abierta une dos poleas de radios 50 y 20 mm separadas 150 mm. Calcula la longitud del tramo recto de la correa.", sol: "En la tangente exterior, la longitud es √(d² − (r₁ − r₂)²) = √(150² − 30²) = √21600 ≈ 147 mm." },
    { nivel: "avanzado", q: "Halla las circunferencias que pasan por A y B y son tangentes a una recta r (caso PPR).", sol: "Se prolonga AB hasta cortar r en Q. La potencia de Q es QA · QB, y los puntos de tangencia T están en r a distancia QT = √(QA · QB) (media proporcional). Se construye con la semicircunferencia y se llevan a ambos lados de Q: dos puntos T₁ y T₂. El centro de cada solución está en la mediatriz de AB y en la perpendicular a r por T." },
    { nivel: "avanzado", q: "Para una correa cruzada entre poleas de radios 50 y 20 mm a 150 mm, calcula la longitud del tramo recto y compárala con la correa abierta.", sol: "Tangente interior: √(d² − (r₁ + r₂)²) = √(22500 − 4900) ≈ 132,7 mm, menor que los 147 mm de la abierta, aunque la correa abraza más arco de cada polea." },
    { nivel: "avanzado", q: "Dibuja las cuatro circunferencias de radio 12 mm tangentes a dos rectas que se cortan formando 70°.", sol: "Dos bisectrices perpendiculares. En cada uno de los cuatro ángulos, el centro está en la bisectriz correspondiente a 12 mm de las rectas: a 12/sen 35° ≈ 20,9 mm del vértice en los ángulos de 70° y a 12/sen 55° ≈ 14,6 mm en los de 110°." },
    { nivel: "avanzado", q: "Halla el eje radical de dos circunferencias exteriores y el punto desde el que las tangentes a ambas miden lo mismo sobre la línea de centros.", sol: "Se traza una circunferencia auxiliar que corte a las dos; las cuerdas comunes de la auxiliar con cada una se cortan en un punto R del eje radical. Por R se traza la perpendicular a O₁O₂. El punto pedido es el pie de esa perpendicular en la línea de centros. Numéricamente: x tal que x² − r₁² = (d − x)² − r₂²." },
    { nivel: "avanzado", q: "Dibuja una llave fija simplificada: cabeza circular de R = 25 mm con boca hexagonal de 17 mm entre caras, unida a un mango recto de 12 mm de ancho mediante arcos de enlace de R = 10 mm.", sol: "Se dibujan el eje del mango y la circunferencia de la cabeza. Las rectas del mango están a 6 mm del eje. Cada arco de enlace tiene el centro a 6 + 10 = 16 mm del eje (paralela) y a 25 + 10 = 35 mm del centro de la cabeza (circunferencia). Se hallan los puntos de tangencia y se repasa el contorno. La boca es un hexágono con apotema 8,5 mm." },
    { nivel: "avanzado", q: "Halla las circunferencias tangentes a una circunferencia (C, 20 mm) en el punto T y tangentes a una recta r que dista 50 mm de C, siendo T el punto más próximo a r.", sol: "El centro O está en la recta CT, que es perpendicular a r. Si la tangencia es exterior, O está entre T y r: el radio es la mitad de la distancia de T a r (50 − 20 = 30 mm) → r = 15 mm. Si es interior (la buscada envuelve a la dada), su diámetro va desde r hasta el punto opuesto de la dada, a 50 + 20 = 70 mm de r: radio 35 mm, con centro en la recta CT a 35 mm de r. Hay, por tanto, dos soluciones: 15 mm y 35 mm." },
    { nivel: "avanzado", q: "¿Por qué una curva formada por arcos de distinto radio enlazados correctamente puede producir sensación de tirón en una carretera, y cómo se resuelve en ingeniería?", sol: "En el punto de enlace la tangente es continua, pero la curvatura (1/R) cambia de golpe, y con ella la aceleración centrípeta. Por eso las carreteras y vías usan curvas de transición (clotoides), cuya curvatura varía de forma gradual entre la recta y el arco." },
    { nivel: "avanzado", q: "Dibuja las circunferencias de radio 10 mm tangentes exteriores a dos circunferencias de radios 20 y 15 mm cuyos centros distan 60 mm. ¿Cuántas hay?", sol: "El centro está a 20 + 10 = 30 mm de O₁ y a 15 + 10 = 25 mm de O₂. Como 30 + 25 = 55 < 60, los arcos auxiliares no se cortan: no hay ninguna solución con tangencia exterior a las dos. Para que existan, el radio debe cumplir 20 + 15 + 2r ≥ 60, es decir, r ≥ 12,5 mm." },
  ],
  quiz: reparte([
    { q: "La tangente a una circunferencia en T es…", o: ["paralela al radio OT", "perpendicular al radio OT", "la mediatriz de OT", "la bisectriz"], a: 1, e: "Propiedad fundamental." },
    { q: "Si dos circunferencias son tangentes exteriores, la distancia entre centros es…", o: ["R − r", "R · r", "R + r", "2R"], a: 2, e: "Suma de radios." },
    { q: "Desde un punto exterior se pueden trazar… tangentes a una circunferencia", o: ["2", "1", "0", "infinitas"], a: 0, e: "Simétricas respecto de OP." },
    { q: "Los puntos de tangencia desde P están en la circunferencia de diámetro…", o: ["el radio", "OP", "PT", "AB"], a: 1, e: "Arco capaz de 90°." },
    { q: "Las tangentes exteriores se trazan con una circunferencia auxiliar de radio…", o: ["r₁ + r₂", "r₁ · r₂", "r₁ − r₂", "2r₁"], a: 2, e: "Reducción de radios." },
    { q: "Las tangentes interiores usan una auxiliar de radio…", o: ["r₁ + r₂", "r₁ − r₂", "r₂", "(r₁ + r₂)/2"], a: 0, e: "Ampliación." },
    { q: "Dos circunferencias secantes tienen… tangentes comunes", o: ["4", "3", "2", "0"], a: 2, e: "Solo exteriores." },
    { q: "El centro de una circunferencia tangente a dos rectas secantes está en…", o: ["una bisectriz", "una mediatriz", "una perpendicular", "una paralela media"], a: 0, e: "Equidista de las rectas." },
    { q: "En un enlace correcto, en el punto de unión las líneas…", o: ["se cortan", "son perpendiculares", "tienen la misma tangente", "tienen igual radio"], a: 2, e: "Sin picos." },
    { q: "Dos arcos consecutivos enlazan si…", o: ["tienen igual radio", "sus centros y el punto de unión están alineados", "sus centros coinciden", "son concéntricos"], a: 1, e: "Condición de enlace." },
    { q: "Para un enlace exterior de radio R con una circunferencia de radio r, el centro está a…", o: ["R − r", "r", "R + r", "R"], a: 2, e: "Tangencia exterior." },
    { q: "La potencia de un punto exterior es igual a…", o: ["la distancia al centro", "el radio al cuadrado", "el cuadrado de la tangente", "el diámetro"], a: 2, e: "PT² = d² − r²." },
    { q: "El eje radical de dos circunferencias es…", o: ["paralelo a la línea de centros", "perpendicular a la línea de centros", "una circunferencia", "la bisectriz"], a: 1, e: "Siempre perpendicular." },
    { q: "Si dos circunferencias son secantes, su eje radical…", o: ["pasa por sus puntos de corte", "es la línea de centros", "no existe", "es tangente a ambas"], a: 0, e: "Cuerda común." },
    { q: "Al repasar una figura con enlaces se trazan primero…", o: ["las rectas", "las cotas", "los arcos", "los ejes gruesos"], a: 2, e: "Después las rectas hasta los puntos de tangencia." },
    { q: "Circunferencias de radio dado tangentes a una recta: su centro está en…", o: ["una perpendicular", "una paralela a distancia r", "la bisectriz", "la mediatriz"], a: 1, e: "Lugar geométrico." },
    { q: "Si P está dentro de la circunferencia, las tangentes desde P son…", o: ["2", "1", "4", "0"], a: 3, e: "No existen." },
    { q: "Una correa cruzada entre dos poleas sigue las tangentes…", o: ["exteriores", "interiores", "paralelas", "radiales"], a: 1, e: "Invierte el giro." },
    { q: "El redondeo de esquinas en CAD se llama…", o: ["chaflán", "empalme", "simetría", "escala"], a: 1, e: "Fillet." },
    { q: "Los problemas de circunferencias tangentes a tres elementos se llaman de…", o: ["Euler", "Tales", "Apolonio", "Pitágoras"], a: 2, e: "Apolonio de Perga." },
  ], 1),
  examen: reparte([
    { q: "Tangente desde un punto a 13 cm del centro de una circunferencia de radio 5 cm:", o: ["12 cm", "8 cm", "18 cm", "√194 cm"], a: 0, e: "√(169 − 25)." },
    { q: "Centros de dos circunferencias de radios 7 y 3 cm tangentes interiores:", o: ["10 cm", "4 cm", "21 cm", "3 cm"], a: 1, e: "7 − 3." },
    { q: "Arco de radio 10 que enlaza dos rectas perpendiculares: distancia del vértice al centro", o: ["10", "20", "14,1", "7,1"], a: 2, e: "10√2." },
    { q: "Tramo recto de una correa abierta entre poleas de radios 40 y 10 a 100 de distancia:", o: ["100", "≈ 95,4", "≈ 75,5", "≈ 104,4"], a: 1, e: "√(10000 − 900)." },
    { q: "Dos circunferencias tangentes exteriores tienen… tangentes comunes", o: ["2", "4", "3", "1"], a: 2, e: "Las interiores coinciden." },
    { q: "Potencia de P si una secante corta en A y B con PA = 3 y PB = 12:", o: ["15", "36", "9", "4"], a: 1, e: "PA · PB." },
    { q: "Centro del arco de radio 20 que enlaza exteriormente circunferencias de radios 5 y 8: distancias a O₁ y O₂", o: ["25 y 28", "15 y 12", "20 y 20", "5 y 8"], a: 0, e: "R + r." },
    { q: "Con dos rectas que forman 90° y R = 15, los puntos de tangencia distan del vértice:", o: ["7,5", "21,2", "30", "15"], a: 3, e: "R/tan 45°." },
  ], 2),
  feynman: ["Por qué la tangente es perpendicular al radio", "Cómo funciona el método de reducción de radios", "Qué condición deben cumplir dos arcos para enlazar sin pico", "Cómo se encuentran los puntos de tangencia en un enlace", "Qué es el eje radical y para qué sirve"],
  glosario: [
    ["Tangencia", "Relación entre dos líneas que tienen un único punto común sin cortarse."],
    ["Punto de tangencia", "Punto donde se tocan dos líneas tangentes."],
    ["Recta tangente", "Recta que toca a una circunferencia en un punto, perpendicular al radio."],
    ["Tangentes exteriores", "Tangentes comunes que dejan las dos circunferencias del mismo lado."],
    ["Tangentes interiores", "Tangentes comunes que pasan entre las dos circunferencias."],
    ["Reducción de radios", "Método que transforma una circunferencia en un punto restando su radio a ambas."],
    ["Enlace", "Unión continua de líneas mediante arcos tangentes."],
    ["Acuerdo", "Arco que redondea la esquina entre dos líneas."],
    ["Empalme", "Nombre en CAD del redondeo tangente entre dos elementos."],
    ["Curva de enlace", "Sucesión de arcos tangentes entre sí con centros alineados en cada unión."],
    ["Potencia", "Valor d² − r² de un punto respecto de una circunferencia."],
    ["Eje radical", "Lugar de los puntos con igual potencia respecto de dos circunferencias."],
    ["Centro radical", "Punto común de los ejes radicales de tres circunferencias."],
    ["Problemas de Apolonio", "Construcción de circunferencias tangentes a tres elementos dados."],
    ["Figura técnica", "Contorno de una pieza formado por rectas y arcos enlazados."],
  ],
  situacion: {
    titulo: "Diseño de un abrebotellas",
    reto: "Una empresa de regalos encarga al grupo el diseño de un abrebotellas plano de acero cortado por láser. El contorno debe estar formado solo por rectas y arcos enlazados correctamente, para que la máquina lo corte sin picos.",
    pasos: [
      "Analizad abrebotellas reales y haced bocetos de vuestro diseño, identificando rectas, arcos y enlaces.",
      "Fijad las medidas principales (longitud, anchura del mango, radio de la cabeza y de la boca).",
      "Dibujad el contorno a escala 1:1 resolviendo cada enlace con su construcción y marcando los puntos de tangencia.",
      "Acotad el dibujo (radios, centros y distancias entre ejes).",
      "Redibujad la pieza en un programa de CAD con órdenes de tangencia y empalme y comparad con el dibujo a mano.",
    ],
    producto: "Lámina A4 con el abrebotellas construido y acotado, y el archivo vectorial listo para el corte.",
    evaluacion: [
      "Todos los enlaces son tangentes y los puntos de tangencia están construidos, no situados a ojo.",
      "El diseño es funcional y está bien proporcionado.",
      "La acotación es suficiente para fabricar la pieza.",
      "El trabajo es limpio y diferencia trazos auxiliares y contorno.",
    ],
  },
  figura: fig("Tangencias y enlaces de un vistazo", "Resumen de propiedades, tangentes comunes, enlaces y eje radical", [
    ["Propiedades", ["tangente ⊥ radio", "centros alineados", "d = R ± r", "centro en bisectriz"], "var(--red)"],
    ["Tangentes comunes", ["exteriores: r₁ − r₂", "interiores: r₁ + r₂", "desde P: diámetro OP", "PT² = d² − r²"], "var(--pen)"],
    ["Enlaces", ["1 centro", "2 puntos de tangencia", "3 arcos, luego rectas", "R + r / R − r"], "var(--leaf)"],
    ["Potencia", ["p = d² − r²", "PA · PB = p", "eje radical ⊥", "Apolonio"], "var(--inf)"],
  ]),
  video: { id: "aLDXU6xdFrc", titulo: "Geometría. Tangencias. Conceptos básicos", canal: "AG Dibujo y Mates", vistas: 25273, busqueda: "tangencias dibujo técnico" },
  mapa: mapa("TANGENCIAS Y ENLACES", "var(--bac)", [
    ["Propiedades", "tangente ⊥ radio · centros alineados", "var(--red)"],
    ["Rectas tangentes", "desde P · exteriores · interiores", "var(--pen)"],
    ["Circunferencias tangentes", "a rectas · a circunferencias", "var(--leaf)"],
    ["Enlaces", "acuerdos · curvas · figuras técnicas", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Tangente y radio", "Perpendiculares en el punto de tangencia."],
    ["Circunferencias tangentes", "Centros y T alineados; d = R + r o R − r."],
    ["Tangentes desde P", "Circunferencia de diámetro OP."],
    ["Longitud de la tangente", "PT = √(d² − r²)"],
    ["Tangentes exteriores", "Auxiliar r₁ − r₂ (reducción)."],
    ["Tangentes interiores", "Auxiliar r₁ + r₂ (ampliación)."],
    ["Tangente a dos rectas", "Centro en la bisectriz."],
    ["Enlace de dos rectas", "Bisectriz ∩ paralela a distancia R."],
    ["Enlace exterior de circunferencias", "Centro a r₁ + R y r₂ + R."],
    ["Arcos consecutivos", "Centros y punto de unión alineados."],
    ["Potencia", "p = d² − r² = PA · PB"],
    ["Eje radical", "Igual potencia; perpendicular a la línea de centros."],
  ],
  familias: ["Buscad en la cocina o el taller objetos con contornos de arcos y rectas enlazados (tijeras, llaves, utensilios).", "Observad una bicicleta: la cadena sigue las tangentes exteriores de los platos.", "Dibujad juntos el contorno de una llave sobre papel y señalad dónde cambia de recta a arco.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: tangencias entre rectas y circunferencias y sus propiedades; rectas tangentes a circunferencias; circunferencias tangentes; enlaces y curvas de enlace; introducción a la potencia y al eje radical; aplicación al dibujo de figuras técnicas y al diseño (RD 243/2022, Dibujo Técnico I, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic I).",
    ideas: ["Medir con una cuerda la correa abierta y cruzada entre dos tapas de bote.", "Calcar el contorno de herramientas reales y reconstruir sus centros.", "Práctica en CAD con órdenes de empalme y tangencia.", "Relación con Física: curvatura y aceleración en las curvas de enlace."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Tangencia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tangencia" },
    { t: "Eje radical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Eje_radical" },
  ],
  revisado: "2026-11-14",
};
