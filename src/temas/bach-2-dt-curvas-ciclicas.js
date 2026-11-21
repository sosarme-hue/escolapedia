// Dibujo Técnico II 2º Bachillerato · Tema 5. Nivel libro. Curvas calculadas en SVG.
const G = require("./_bach2-dt");
const { reparte, mapa, fig, RD, DEC, dib, seg, recta, fina, circ, pt, paso, recto, curva, polar, mid, dist, unit, add, sub, mul, tx, dash, cicloide, epici, evolvente, rad, arco } = G;

const clip = (inner, id) => `<defs><clipPath id="${id}"><rect x="0" y="0" width="260" height="180"/></clipPath></defs><g clip-path="url(#${id})">${inner}</g>`;
// Trocoide: ruleta de radio r sobre la recta y = y0; punto a distancia d del centro.
const trocoide = (x0, y0, r, d, vueltas = 1, n = 100) => Array.from({ length: n + 1 }, (_, i) => { const t = (2 * Math.PI * vueltas * i) / n; return [x0 + r * t - d * Math.sin(t), y0 - r + d * Math.cos(t)]; });
const cicP = (x0, y0, r, t) => [x0 + r * (t - Math.sin(t)), y0 - r * (1 - Math.cos(t))];
// Hipotrocoide (espirógrafo): base R, ruleta r interior, punto a distancia d.
const hipotro = (C, R, r, d, vueltas, n = 600) => Array.from({ length: n + 1 }, (_, i) => { const t = (2 * Math.PI * vueltas * i) / n; return [C[0] + (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t), C[1] - ((R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t))]; });

// 5.1 Elementos de una curva cíclica.
const s1 = (() => {
  const y0 = 140, r = 22, x0 = 26, tr = cicloide(x0, y0, r, 1.35), ts = [0.9, 2.4];
  return dib("Curva cíclica: la ruleta (circunferencia) rueda sin deslizar sobre la base y el punto generador P describe la curva", `${seg([10, y0], [250, y0], "var(--ink)", 2.2)}${curva(tr, "var(--red)", 2.4)}${ts.map((t, i) => { const Cc = [x0 + r * t, y0 - r], P = cicP(x0, y0, r, t); return `${circ(Cc, r, i ? "var(--pen)" : "var(--muted)", i ? 2 : 1.2, i ? "" : dash)}${seg(Cc, P, "var(--muted)", 1.1)}${pt(P, i ? "P" : "", 6, -4, "var(--red)")}${pt(Cc, "", 0, 0)}`; }).join("")}
  ${tx(250, y0 + 16, "base", { s: 10.5, b: 1, a: "end" })}${tx(x0 + r * 2.4, y0 - 2 * r - 8, "ruleta", { s: 10.5, b: 1, c: "var(--pen)" })}${pt([x0, y0], "", 0, 0, "var(--red)")}${tx(10, 22, "rueda sin deslizar", { s: 10.5, b: 1, a: "start", c: "var(--muted)" })}`);
})();

// 5.2 Construcción de la cicloide por puntos.
const s2 = (() => {
  const y0 = 150, r = 26, x0 = 40, n = 12, L = 2 * Math.PI * r, C0 = [x0, y0 - r];
  let g = "";
  for (let i = 0; i <= n; i++) {
    const t = (2 * Math.PI * i) / n, P = cicP(x0, y0, r, t), Ci = [x0 + (L * i) / n, y0 - r];
    g += `${seg([Ci[0], y0 - 3], [Ci[0], y0 + 3], "var(--ink)", 1)}${pt(Ci, "", 0, 0, "var(--muted)")}${pt(P, "", 0, 0, "var(--red)")}`;
  }
  const sec = Array.from({ length: n }, (_, i) => polar(C0, r, -90 - (360 * i) / n));
  return dib("Construcción de la cicloide: la circunferencia y su longitud 2πr se dividen en doce partes; cada posición del centro y la altura de cada división dan un punto", `${seg([6, y0], [254, y0], "var(--ink)", 2)}${seg([x0, y0 - r], [x0 + L, y0 - r], "var(--muted)", 1.1, dash)}${circ(C0, r, "var(--pen)", 1.8)}${sec.map((P) => `${pt(P, "", 0, 0, "var(--pen)")}${seg(P, [x0 + L, P[1]], "var(--muted)", 0.6, dash)}`).join("")}${curva(cicloide(x0, y0, r, 1), "var(--red)", 2.4)}${g}
  ${tx(x0 + L / 2, y0 + 18, "2πr dividido en 12", { s: 10, b: 1 })}`);
})();

// 5.3 Cicloides alargada y acortada.
const s3 = (() => {
  const y0 = 140, r = 22, x0 = 22;
  return dib("Trocoides: si el punto generador está dentro de la ruleta se obtiene la cicloide acortada; si está fuera, la alargada, que forma bucles", clip(`${seg([6, y0], [254, y0], "var(--ink)", 2)}${curva(trocoide(x0, y0, r, 12, 1.5), "var(--leaf)", 2.2)}${curva(trocoide(x0, y0, r, r, 1.5), "var(--red)", 2.4)}${curva(trocoide(x0, y0, r, 36, 1.5), "var(--pen)", 2.2)}
  ${tx(250, 22, "alargada (d > r)", { s: 10, b: 1, a: "end", c: "var(--pen)" })}${tx(250, 36, "normal (d = r)", { s: 10, b: 1, a: "end", c: "var(--red)" })}${tx(250, 50, "acortada (d < r)", { s: 10, b: 1, a: "end", c: "var(--leaf)" })}`, "cl53"));
})();

// 5.4 Tangente y normal a la cicloide.
const s4 = (() => {
  const y0 = 150, r = 34, x0 = 16, t = 2.1, P = cicP(x0, y0, r, t), Ct = [x0 + r * t, y0 - r], I = [x0 + r * t, y0], Tp = [x0 + r * t, y0 - 2 * r];
  return dib("La normal a la cicloide en P pasa por el punto de contacto I de la ruleta con la base, y la tangente pasa por el punto opuesto, el más alto de la ruleta", clip(`${seg([6, y0], [254, y0], "var(--ink)", 2)}${curva(cicloide(x0, y0, r, 1), "var(--red)", 2.2)}${circ(Ct, r, "var(--muted)", 1.3, dash)}${seg(I, Tp, "var(--muted)", 1.1, dash)}${recta(P, I, 30, "var(--leaf)", 2)}${recta(P, Tp, 40, "var(--pen)", 2.2)}${recto(P, I, Tp, 6)}
  ${pt(P, "P", -14, -2, "var(--red)")}${pt(I, "I", 6, 14)}${pt(Tp, "T", 6, -4)}${pt(Ct, "", 0, 0)}`, "cl54") + tx(250, 22, "PT tangente · PI normal", { s: 10.5, b: 1, a: "end", c: "var(--pen)" }));
})();

// 5.5 La cicloide invertida: braquistócrona.
const s5 = (() => {
  const r = 34, x0 = 20, y0 = 24, n = 60, pts = Array.from({ length: n + 1 }, (_, i) => { const t = (Math.PI * i) / n; return [x0 + r * (t - Math.sin(t)), y0 + r * (1 - Math.cos(t))]; });
  const B = pts[n];
  return dib("Braquistócrona: una bola que cae por un arco de cicloide invertida llega antes de A a B que por la recta, aunque el camino sea más largo", `${seg([x0, y0], B, "var(--muted)", 1.8, dash)}${curva(pts, "var(--red)", 2.8)}${seg([x0 - 6, y0], [x0 + 140, y0], "var(--ink)", 1.2)}${pt([x0, y0], "A", -4, -8)}${pt(B, "B", 6, 4)}<circle cx="${pts[22][0]}" cy="${pts[22][1] - 5}" r="5" fill="var(--red)"/><circle cx="${G.lerp([x0, y0], B, 0.22)[0]}" cy="${G.lerp([x0, y0], B, 0.22)[1] - 5}" r="5" fill="var(--muted)"/>
  ${tx(250, 110, "más rápida:", { s: 10.5, b: 1, a: "end", c: "var(--red)" })}${tx(250, 124, "cicloide", { s: 10.5, b: 1, a: "end", c: "var(--red)" })}${tx(130, 172, "Bernoulli, 1696", { s: 10, b: 1, c: "var(--muted)" })}`);
})();

// 5.6 Epicicloide.
const s6 = (() => {
  const C = [130, 92], R = 48, r = 16, pts = epici(C, R, r, 1, 360, 90), Rr = polar(C, R + r, 90 + 50), Pg = pts[Math.round((50 / 360) * 160)];
  return dib("Epicicloide: la ruleta rueda por el exterior de la circunferencia base; con R = 3r la curva se cierra en tres arcos", `${circ(C, R, "var(--ink)", 2)}${circ(C, R + r, "var(--muted)", 1, dash)}${curva(pts, "var(--red)", 2.4)}${circ(Rr, r, "var(--pen)", 1.8)}${seg(Rr, Pg, "var(--muted)", 1.1)}${pt(C, "O", 6, 4)}${pt(Pg, "P", -14, -2, "var(--red)")}
  ${tx(10, 22, "R = 3r", { s: 11, b: 1, a: "start" })}${tx(250, 172, "centros en R + r", { s: 10, b: 1, a: "end", c: "var(--muted)" })}`);
})();

// 5.7 Hipocicloides: astroide y deltoide.
const s7 = (() => {
  const A = [66, 92], RA = 54, D = [192, 92], RD = 52;
  return dib("Hipocicloides: la ruleta rueda por dentro de la base; con R = 4r se obtiene la astroide y con R = 3r la deltoide", `${circ(A, RA, "var(--ink)", 1.4)}${curva(epici(A, RA, RA / 4, -1, 360, 90), "var(--red)", 2.4)}${circ(polar(A, RA - RA / 4, 30), RA / 4, "var(--pen)", 1.4)}${circ(D, RD, "var(--ink)", 1.4)}${curva(epici(D, RD, RD / 3, -1, 360, 90), "var(--red)", 2.4)}${circ(polar(D, RD - RD / 3, 210), RD / 3, "var(--pen)", 1.4)}
  ${tx(66, 172, "astroide: R = 4r", { s: 10, b: 1 })}${tx(192, 172, "deltoide: R = 3r", { s: 10, b: 1 })}`);
})();

// 5.8 Cardioide y nefroide.
const s8 = (() => {
  const A = [80, 92], r1 = 20, B = [196, 92], r2 = 14;
  return dib("Epicicloides especiales: con R = r se obtiene la cardioide y con R = 2r, la nefroide", `${circ(A, r1, "var(--ink)", 1.6)}${curva(epici(A, r1, r1, 1, 360, 0), "var(--red)", 2.4)}${circ(polar(A, 2 * r1, 120), r1, "var(--pen)", 1.2, dash)}${circ(B, 2 * r2, "var(--ink)", 1.6)}${curva(epici(B, 2 * r2, r2, 1, 360, 90), "var(--red)", 2.4)}
  ${tx(80, 172, "cardioide: R = r", { s: 10, b: 1 })}${tx(196, 172, "nefroide: R = 2r", { s: 10, b: 1 })}`);
})();

// 5.9 Hipotrocoide (espirógrafo).
const s9 = (() => {
  const C = [130, 92];
  return dib("Hipotrocoide: si el punto generador no está en el borde de la ruleta interior se obtienen las figuras del espirógrafo", `${circ(C, 78, "var(--ink)", 1.4)}${curva(hipotro(C, 78, 31.2, 24, 2), "var(--red)", 1.8)}${circ(polar(C, 78 - 31.2, 0), 31.2, "var(--pen)", 1.4, dash)}${tx(10, 22, "R/r = 5/2", { s: 10.5, b: 1, a: "start" })}`);
})();

// 5.10 Evolvente de la circunferencia.
const s10 = (() => {
  const C = [120, 98], r = 14, pts = evolvente(C, r, 360, 90), ks = [90, 180, 270, 360];
  const tg = ks.map((g) => [polar(C, r, 90 + g), evolvente(C, r, g, 90, 1)[1]]);
  return dib("Evolvente de la circunferencia: la curva que describe el extremo de un hilo tenso que se desenrolla; cada tangente mide el arco desenrollado", clip(`${circ(C, r, "var(--ink)", 2)}${curva(pts, "var(--red)", 2.4)}${tg.map(([T, P]) => `${seg(T, P, "var(--pen)", 1.4)}${pt(T, "", 0, 0, "var(--pen)")}${pt(P, "", 0, 0, "var(--red)")}`).join("")}${pt(polar(C, r, 90), "A", -4, -8)}`, "cl510") + tx(250, 172, "TP = arco AT", { s: 11, b: 1, a: "end", c: "var(--pen)" }));
})();

// 5.11 Evolvente de un cuadrado.
const s11 = (() => {
  const l = 9, C = [124, 92], V = [[C[0] - l / 2, C[1] - l / 2], [C[0] + l / 2, C[1] - l / 2], [C[0] + l / 2, C[1] + l / 2], [C[0] - l / 2, C[1] + l / 2]];
  // Desenrollado en sentido horario visual: centros sucesivos 1, 2, 3, 0… con radios l, 2l, 3l…
  let g = "", ang0 = 180, k = 0;
  const orden = [1, 2, 3, 0, 1, 2, 3, 0, 1];
  orden.forEach((vi, i) => { const Rr = l * (i + 1), a0 = ang0, a1 = ang0 - 90; g += arco(V[vi], Rr, a1, a0, ["var(--red)", "var(--pen)"][i % 2], 2.2); g += seg(V[vi], polar(V[vi], Rr, a1), "var(--muted)", 0.8, dash); ang0 = a1; k++; });
  return dib("Evolvente de un cuadrado: arcos de centros en los vértices sucesivos y radios que crecen un lado cada vez; es una espiral de cuatro centros", clip(`${G.poli(V, "var(--ink)", 2, "var(--ink)", 0.2)}${g}${V.map((P, i) => pt(P, `${i + 1}`, i < 2 ? (i ? 4 : -10) : (i === 2 ? 4 : -10), i < 2 ? -4 : 12, "var(--muted)", 9)).join("")}`, "cl511") + tx(10, 172, "radios: l, 2l, 3l, 4l…", { s: 10.5, b: 1, a: "start", c: "var(--muted)" }));
})();

// 5.12 Engranajes de perfil de evolvente.
const s12 = (() => {
  const C1 = [72, 92], rp1 = 54, C2 = [72 + 54 + 42, 92], rp2 = 42, I = [126, 92], al = 20, rb1 = rp1 * Math.cos(rad(al)), rb2 = rp2 * Math.cos(rad(al));
  const inv = Math.tan(rad(al)) - rad(al), d = [Math.sin(rad(al)), -Math.cos(rad(al))];
  const T1 = G.pie(C1, I, add(I, d)), T2 = G.pie(C2, I, add(I, d));
  const ev1 = evolvente(C1, rb1, 70, -(inv * 180) / Math.PI), ev2 = evolvente(C2, rb2, 70, -(180 + (inv * 180) / Math.PI)).map(([x, y]) => [x, 2 * C2[1] - y]);
  return dib("Engranajes de perfil de evolvente: los flancos de dos dientes en contacto son evolventes de las circunferencias base y se tocan siempre sobre la línea de acción, tangente común a las dos bases", clip(`${circ(C1, rp1, "var(--muted)", 1.2, dash)}${circ(C2, rp2, "var(--muted)", 1.2, dash)}${circ(C1, rb1, "var(--ink)", 1.6)}${circ(C2, rb2, "var(--ink)", 1.6)}${recta(T1, T2, 40, "var(--leaf)", 1.8)}${curva(ev1, "var(--red)", 2.6)}${curva(ev2, "var(--pen)", 2.6)}
  ${pt(C1, "O₁", -6, 16)}${pt(C2, "O₂", -6, 16)}${pt(I, "I", -12, 14, "var(--red)")}${pt(T1, "", 0, 0, "var(--leaf)")}${pt(T2, "", 0, 0, "var(--leaf)")}`, "cl512") + tx(10, 22, "línea de acción a 20°", { s: 10.5, b: 1, a: "start", c: "var(--leaf)" }));
})();

module.exports = {
  materia: "Dibujo Técnico II",
  curso: "2-bachillerato",
  titulo: "Curvas cíclicas y evolvente de la circunferencia",
  minutos: 100,
  objetivos: [
    "Definir las curvas cíclicas e identificar base, ruleta y punto generador",
    "Construir por puntos la cicloide normal, acortada y alargada",
    "Trazar la tangente y la normal en un punto de una curva cíclica",
    "Construir epicicloides e hipocicloides y reconocer sus casos particulares",
    "Trazar la evolvente de la circunferencia y de un polígono",
    "Relacionar estas curvas con los engranajes, los mecanismos y la arquitectura",
  ],
  claves: ["curva cíclica", "ruleta", "base", "punto generador", "cicloide", "trocoide", "epicicloide", "hipocicloide", "evolvente", "engranaje"],
  lectura: {
    titulo: "La curva más rápida",
    html: `<p>En junio de 1696, Johann Bernoulli lanzó un reto a «los matemáticos más agudos del mundo»: ¿qué forma debe tener una rampa para que una bola llegue lo antes posible de un punto a otro más bajo? La intuición dice que una recta, porque es el camino más corto. Pero no: la respuesta, que encontraron Newton, Leibniz y los propios hermanos Bernoulli, es un arco de <b>cicloide</b>, la curva que traza una válvula de la rueda de una bicicleta mientras avanza.</p>
    <p>La cicloide y sus parientes, las <b>curvas cíclicas</b>, aparecen cada vez que una rueda gira sobre algo: sobre una recta, por fuera de otra rueda o por dentro de ella. Están en los juguetes de espirógrafo, en las bombas de los motores rotativos, en las trayectorias de los planetas vistas desde la Tierra y en los dientes de los engranajes antiguos.</p>
    <p>Los engranajes modernos, sin embargo, usan otra curva: la <b>evolvente</b>, la que dibuja el extremo de un hilo que se desenrolla de un carrete. Gracias a ella, dos ruedas dentadas transmiten el giro de forma suave y sin golpes. En este tema aprenderás a trazar todas estas curvas y a entender por qué son tan útiles.</p>`,
  },
  pregunta: {
    texto: "Una bicicleta avanza en línea recta. ¿Qué camino recorre la válvula de la rueda? ¿Llega a pararse en algún momento?",
    respuesta: "Describe una <mark>cicloide</mark>: una sucesión de arcos que tocan el suelo. Cuando la válvula toca el suelo está un instante quieta (velocidad nula), porque la rueda rueda sin deslizar; cuando está arriba, va al doble de la velocidad de la bicicleta.",
  },
  bloques: [
    {
      html: `<h3>5.1 Curvas cíclicas: elementos y clasificación</h3><p>Una <b>curva cíclica</b> es la trayectoria de un punto de una circunferencia, o unido rígidamente a ella, que <b>rueda sin deslizar</b> sobre una línea fija. Sus elementos son:</p><ul><li><b>Ruleta</b>: la circunferencia que rueda, de radio r.</li><li><b>Base</b> o directriz: la línea sobre la que rueda (una recta o una circunferencia de radio R).</li><li><b>Punto generador</b> P: el punto que describe la curva. Si está en la ruleta, la curva es <b>normal</b>; si está dentro, <b>acortada</b>; si está fuera, <b>alargada</b>.</li></ul><p>Rodar sin deslizar significa que <b>la longitud recorrida sobre la base es igual al arco girado en la ruleta</b>. Esta igualdad es la clave de todas las construcciones.</p><table class="tb"><thead><tr><th>Base</th><th>Ruleta</th><th>Curva</th></tr></thead><tbody><tr><td>Recta</td><td>circunferencia</td><td>Cicloide</td></tr><tr><td>Circunferencia, ruleta por fuera</td><td>circunferencia</td><td>Epicicloide</td></tr><tr><td>Circunferencia, ruleta por dentro</td><td>circunferencia</td><td>Hipocicloide</td></tr><tr><td>Circunferencia</td><td>recta (que rueda sobre ella)</td><td>Evolvente</td></tr></tbody></table>`,
      svg: s1,
    },
    {
      html: `<h3>5.2 Construcción de la cicloide</h3><p>La <b>cicloide normal</b> se construye por puntos aprovechando que, cuando la ruleta ha girado un ángulo, su centro ha avanzado el arco correspondiente:</p><ol><li>Se dibuja la ruleta tangente a la base en el punto inicial P₀ y se rectifica su longitud 2πr sobre la base (unos 6,28 radios; también se puede usar la rectificación aproximada de la semicircunferencia).</li><li>Se dividen la circunferencia y el segmento 2πr en el mismo número de partes iguales, por ejemplo 12.</li><li>Por los puntos de división de la circunferencia se trazan paralelas a la base.</li><li>Por las divisiones de la base se levantan perpendiculares hasta la línea de centros: son las posiciones O₁, O₂… del centro.</li><li>Con centro en cada Oᵢ y radio r se corta la paralela correspondiente a la división i: se obtiene el punto Pᵢ.</li></ol><p>Un arco completo de cicloide tiene <b>altura 2r</b> y <b>longitud de base 2πr</b>. Su longitud es exactamente <b>8r</b> (descubrimiento de Christopher Wren en 1658) y el área bajo un arco es <b>3πr²</b>, el triple del círculo que la genera.</p>`,
      svg: s2,
      video: { id: "0TlXCTTU-ro", titulo: "Trazado de la cicloide", canal: "Amor al Arte", vistas: 60936, busqueda: "cicloide dibujo técnico" },
    },
    {
      html: `<h3>5.3 Cicloides acortada y alargada</h3><p>Si el punto generador está unido a la ruleta pero <b>no está en su borde</b>, se obtienen las <b>trocoides</b>:</p><ul><li><b>Cicloide acortada</b> (punto interior, a distancia d &lt; r del centro): una curva ondulada que nunca toca la base. Es la trayectoria de un reflectante en los radios de una rueda de bicicleta.</li><li><b>Cicloide alargada</b> (punto exterior, d &gt; r): forma <b>bucles</b> por debajo de la línea de centros. Es la trayectoria de un punto de la pestaña de una rueda de tren, que sobresale del carril: durante un instante se mueve hacia atrás.</li></ul><p>La construcción es la misma que la de la cicloide normal, pero dibujando una circunferencia auxiliar de radio d concéntrica con la ruleta y dividiendo esa auxiliar (no la ruleta) en las mismas partes. Las posiciones del centro se siguen obteniendo con la longitud 2πr de la ruleta, porque es la ruleta la que rueda sin deslizar.</p><p>Las tres curvas tienen el mismo «periodo» 2πr, y las tres se pueden escribir con las ecuaciones x = rt − d sen t, y = r − d cos t.</p>`,
      svg: s3,
    },
    {
      html: `<h3>5.4 Tangente y normal a una curva cíclica</h3><p>En cada instante, la ruleta gira alrededor del punto en que toca a la base, el <b>centro instantáneo de rotación</b> I. Todos los puntos de la ruleta se mueven perpendicularmente al segmento que los une con I. Por eso:</p><ul><li>La <b>normal</b> a la curva en P es la recta <b>PI</b>.</li><li>La <b>tangente</b> es la perpendicular a PI en P. En la cicloide normal, como PI es una cuerda y el ángulo inscrito en una semicircunferencia es recto, la tangente pasa por el <b>punto T diametralmente opuesto a I</b> (el más alto de la ruleta).</li></ul><p>Procedimiento:</p><ol><li>Con centro en P y radio r se corta la línea de centros: se obtiene la posición O del centro de la ruleta en ese instante.</li><li>Por O se traza la perpendicular a la base: corta a la base en I y a la ruleta, arriba, en T.</li><li>PI es la normal y PT la tangente.</li></ol><p>El mismo razonamiento sirve para epicicloides, hipocicloides y trocoides: la normal pasa siempre por el punto de contacto de la ruleta con la base.</p>`,
      svg: s4,
    },
    {
      html: `<h3>5.5 Propiedades notables de la cicloide</h3><p>La cicloide invertida tiene dos propiedades mecánicas sorprendentes:</p><ul><li><b>Braquistócrona</b> («tiempo más corto»): de todas las curvas que unen dos puntos A y B a distinta altura, la que recorre en menos tiempo una bola que cae sin rozamiento es un arco de cicloide invertida. La bola acelera mucho al principio, gracias a la pendiente fuerte, y esa ventaja compensa el recorrido más largo.</li><li><b>Tautócrona</b> («mismo tiempo»): si se suelta una bola desde cualquier punto de un arco de cicloide invertida, tarda siempre lo mismo en llegar al punto más bajo. Christiaan Huygens la usó en 1673 para diseñar relojes de péndulo más precisos.</li></ul><p>Otras propiedades: la <b>evoluta</b> de una cicloide (el lugar de sus centros de curvatura) es otra cicloide igual desplazada, y su <b>longitud</b> es 8r.</p><p>Estas propiedades explican su uso en toboganes, rampas de skate de alto rendimiento y en el perfil de algunas bóvedas y cubiertas, como las del Kimbell Art Museum de Louis Kahn, con bóvedas de sección cicloidal.</p>`,
      svg: s5,
    },
    {
      html: `<h3>5.6 La epicicloide</h3><p>La <b>epicicloide</b> es la curva que describe un punto de una ruleta de radio r que rueda sin deslizar <b>por el exterior</b> de una circunferencia base de radio R.</p><p>Construcción por puntos:</p><ol><li>Se dibujan la base (centro O, radio R) y la ruleta tangente en el punto inicial P₀.</li><li>El centro de la ruleta se mueve sobre la circunferencia de centro O y radio <b>R + r</b>.</li><li>Se calcula el ángulo central que corresponde a una vuelta completa de la ruleta: φ = 360° · r / R (el arco 2πr medido sobre la base).</li><li>Se dividen ese ángulo φ y la ruleta en el mismo número de partes. Las divisiones de φ dan las posiciones O₁, O₂… del centro.</li><li>Por las divisiones de la ruleta se trazan arcos concéntricos con O; con centro en cada Oᵢ y radio r se cortan los arcos correspondientes: puntos Pᵢ.</li></ol><p>Si R / r es un número entero n, la curva se cierra tras una vuelta a la base y tiene <b>n arcos</b>. Si es una fracción p / q, se cierra tras q vueltas. Si es irracional, no se cierra nunca.</p>`,
      svg: s6,
      video: { id: "ILp3ZtPc0GA", titulo: "Curvas cíclicas: trazado de la epicicloide", canal: "Amor al Arte", vistas: 21352, busqueda: "epicicloide" },
    },
    {
      html: `<h3>5.7 La hipocicloide</h3><p>La <b>hipocicloide</b> se obtiene cuando la ruleta rueda <b>por el interior</b> de la base. La construcción es la misma que la de la epicicloide, con dos cambios: el centro de la ruleta recorre la circunferencia de radio <b>R − r</b> y la ruleta gira en sentido contrario.</p><p>Casos particulares notables:</p><ul><li><b>R = 2r</b> (ruleta de radio mitad): la hipocicloide degenera en un <b>diámetro</b> de la base. Es el principio del «par de Cardano», que convierte un giro en un movimiento rectilíneo alternativo.</li><li><b>R = 3r</b>: <b>deltoide</b>, un triángulo curvilíneo de tres puntas.</li><li><b>R = 4r</b>: <b>astroide</b>, una estrella de cuatro puntas. Tiene una propiedad curiosa: el segmento de cada tangente comprendido entre los ejes mide siempre R. Es la envolvente de una escalera que resbala por una pared.</li></ul><p>Las hipocicloides se usan en <b>trenes epicicloidales</b> (cambios de bicicleta internos, cajas de cambios automáticas, reductores), en los motores Wankel y en las bombas de engranajes interiores (gerotor).</p>`,
      svg: s7,
      video: { id: "BghDfkfi9Hc", titulo: "El trazado de la hipocicloide", canal: "Amor al Arte", vistas: 27823, busqueda: "hipocicloide" },
    },
    {
      html: `<h3>5.8 Cardioide, nefroide y pericicloide</h3><p>Algunas epicicloides tienen nombre propio:</p><ul><li><b>Cardioide</b> (R = r): con forma de corazón y un solo vértice. Es la figura brillante que se ve en el fondo de una taza de café o leche cuando la luz entra por un lado: es la <b>cáustica</b> de reflexión de una circunferencia con la luz en un punto de ella.</li><li><b>Nefroide</b> (R = 2r): con forma de riñón y dos vértices. Es la cáustica cuando la luz llega paralela, como la del Sol.</li></ul><p>Si la ruleta es mayor que la base y la envuelve (la base queda dentro de la ruleta), la curva se llama <b>pericicloide</b>, y se demuestra que coincide con una epicicloide de otros radios.</p><p>La cardioide también aparece en los micrófonos: su diagrama de captación «cardioide» recoge el sonido de delante y rechaza el de detrás. Y en matemáticas, es la forma de la región principal del conjunto de Mandelbrot.</p><p>Para dibujarlas a mano basta aplicar la construcción de la epicicloide con los radios indicados; con 12 o 16 divisiones se obtiene una curva suficientemente precisa.</p>`,
      svg: s8,
    },
    {
      html: `<h3>5.9 Epitrocoides e hipotrocoides</h3><p>Igual que en la cicloide, si el punto generador está dentro o fuera de la ruleta se obtienen <b>epitrocoides</b> (ruleta exterior) e <b>hipotrocoides</b> (ruleta interior). Son las curvas del <b>espirógrafo</b>, el juguete inventado por Denys Fisher en 1965, que usa ruedas dentadas con agujeros a distintas distancias del centro.</p><p>La forma depende de dos números:</p><ul><li>La razón <b>R / r</b>, que decide cuántos lóbulos tiene la figura y tras cuántas vueltas se cierra.</li><li>La distancia <b>d</b> del punto generador al centro de la ruleta, que decide si los lóbulos son puntas, curvas suaves o bucles.</li></ul><p>Con R / r = 5/2, por ejemplo, la curva se cierra tras dos vueltas y forma cinco lóbulos.</p><p>Tienen aplicaciones técnicas importantes: la <b>epitrocoide de dos lóbulos</b> es la forma de la cámara del motor rotativo Wankel, usado en algunos coches deportivos, y las trayectorias aparentes de los planetas vistas desde la Tierra (con sus «bucles» de retrogradación) son aproximadamente epitrocoides, como intentaba explicar el sistema de epiciclos de Ptolomeo.</p>`,
      svg: s9,
    },
    {
      html: `<h3>5.10 La evolvente de la circunferencia</h3><p>La <b>evolvente</b> (o involuta) de una circunferencia es la curva que describe el extremo de un hilo tenso que se desenrolla de ella. Equivale a una recta que rueda sin deslizar sobre la circunferencia: cada punto de la recta describe una evolvente.</p><p>Construcción por puntos:</p><ol><li>Se divide la circunferencia en n partes iguales (por ejemplo, 12) desde el punto inicial A.</li><li>Por cada punto de división Tᵢ se traza la <b>tangente</b> a la circunferencia, siempre en el mismo sentido.</li><li>Sobre la tangente por Tᵢ se lleva una longitud igual al <b>arco ATᵢ</b> rectificado: i / n de 2πr.</li><li>Los extremos Pᵢ son puntos de la evolvente; se unen con plantilla.</li></ol><p>Propiedades: la <b>normal</b> a la evolvente en P es la tangente TP a la circunferencia (la circunferencia es su evoluta), y la tangente es perpendicular a ella. Tras cada vuelta completa, la distancia entre espiras es constante e igual a 2πr: la evolvente se parece mucho, lejos de la circunferencia, a una espiral de Arquímedes.</p>`,
      svg: s10,
      video: { id: "XozQmtEhj7g", titulo: "Evolvente de una circunferencia paso a paso", canal: "Dibujo Técnico paso a paso", vistas: 38039, busqueda: "evolvente de la circunferencia" },
    },
    {
      html: `<h3>5.11 Evolvente de un polígono</h3><p>Si el hilo se desenrolla de un <b>polígono</b> en lugar de una circunferencia, la evolvente está formada por <b>arcos de circunferencia</b> enlazados: mientras el hilo gira alrededor de un vértice, su extremo describe un arco con centro en ese vértice. Al llegar al siguiente vértice, el hilo se apoya en él y el radio aumenta en un lado.</p><p>Para un polígono de lado l:</p><ol><li>Se prolongan los lados en el mismo sentido de giro.</li><li>Con centro en el vértice 1 y radio l se traza un arco desde el vértice anterior hasta la prolongación del lado siguiente.</li><li>Con centro en el vértice 2 y radio 2l, un nuevo arco que enlaza con el anterior.</li><li>Se sigue con radios 3l, 4l… El enlace es correcto porque los centros y el punto de unión están alineados en la prolongación de cada lado.</li></ol><p>El resultado es una <b>espiral de n centros</b>: la evolvente de un segmento es la espiral de dos centros, la de un triángulo es la de tres y la del cuadrado, la de cuatro. Estas espirales se usan en volutas arquitectónicas, rejas y diseño gráfico, porque se trazan con compás y quedan perfectamente enlazadas.</p>`,
      svg: s11,
    },
    {
      html: `<h3>5.12 Aplicación: los engranajes</h3><p>Dos ruedas dentadas transmiten el giro sin vibraciones solo si la relación de velocidades es <b>constante</b> en cada instante. Eso exige que la normal común a los dos dientes en el punto de contacto pase siempre por un punto fijo, el <b>punto primitivo</b> I, donde se tocan las circunferencias primitivas (las «ruedas lisas» equivalentes).</p><p>El perfil que lo consigue de forma más sencilla es la <b>evolvente</b>:</p><ul><li>Cada flanco es una evolvente de la <b>circunferencia base</b> de su rueda.</li><li>Las normales a dos evolventes en contacto coinciden con la tangente común a las dos circunferencias base, la <b>línea de acción</b>, que pasa por I.</li><li>El ángulo de esa línea con la tangente a las primitivas es el <b>ángulo de presión</b>, normalizado en 20°. El radio base es r<sub>b</sub> = r<sub>p</sub> · cos 20°.</li></ul><p>Ventajas: los engranajes de evolvente funcionan bien aunque la distancia entre ejes varíe un poco y se fabrican con herramientas de flancos rectos. Antes del siglo XIX se usaban perfiles <b>cicloidales</b> (epicicloide en la cabeza del diente e hipocicloide en el pie), que hoy solo se conservan en relojería.</p><p>En las normas de dibujo, los engranajes no se dibujan diente a diente: se representan con sus circunferencias primitivas en trazo y punto.</p>`,
      svg: s12,
    },
  ],
  ejemplos: [
    { enunciado: "Una ruleta de radio 3 cm rueda sobre una recta. ¿Qué longitud de base ocupa un arco de cicloide y qué altura tiene?", pasos: ["Base: 2πr = 6π ≈ 18,85 cm.", "Altura: 2r = 6 cm."], resultado: "18,85 cm de base y 6 cm de altura." },
    { enunciado: "Calcula la longitud de un arco de cicloide y el área bajo él si r = 2 cm.", pasos: ["Longitud = 8r = 16 cm.", "Área = 3πr² = 12π ≈ 37,7 cm²."], resultado: "16 cm y 37,7 cm²." },
    { enunciado: "Epicicloide con R = 60 mm y r = 20 mm. ¿Cuántos arcos tiene y qué ángulo central abarca cada uno?", pasos: ["R / r = 3: la curva tiene 3 arcos y se cierra tras una vuelta.", "Cada arco: 360° · r / R = 120°."], resultado: "3 arcos de 120°." },
    { enunciado: "Hipocicloide con R = 80 mm y r = 20 mm. ¿Cómo se llama y cuánto mide el segmento de tangente entre dos ejes?", pasos: ["R = 4r: astroide.", "El segmento de tangente entre los ejes mide R."], resultado: "Astroide; 80 mm." },
    { enunciado: "Evolvente de una circunferencia de radio 15 mm dividida en 12 partes. ¿Cuánto mide la tangente por la cuarta división?", pasos: ["Arco AT₄ = 4/12 · 2π · 15 = 10π mm.", "≈ 31,4 mm."], resultado: "31,4 mm." },
    { enunciado: "Un engranaje tiene diámetro primitivo 80 mm y ángulo de presión 20°. Calcula el diámetro base.", pasos: ["d_b = d_p · cos 20° = 80 · 0,9397."], resultado: "≈ 75,2 mm." },
  ],
  errores: [
    "Dividir la base en partes que no corresponden a la longitud 2πr de la ruleta.",
    "En la cicloide acortada o alargada, usar la circunferencia auxiliar (de radio d) para medir la longitud recorrida.",
    "Trazar la normal a una cicloide hacia el centro de la ruleta en lugar de hacia el punto de contacto.",
    "En la hipocicloide, mover el centro de la ruleta sobre R + r en lugar de R − r.",
    "Llevar en la evolvente la longitud de la cuerda en lugar del arco rectificado.",
    "Desenrollar las tangentes de la evolvente en sentidos distintos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define curva cíclica y nombra sus elementos.", sol: "Trayectoria de un punto unido a una circunferencia que rueda sin deslizar sobre una línea. Elementos: ruleta, base y punto generador." },
    { nivel: "básico", q: "Dibuja una cicloide normal de ruleta 20 mm con 12 divisiones.", sol: "Base 2π · 20 ≈ 125,7 mm dividida en 12; ruleta dividida en 12; paralelas por las divisiones; arcos de radio 20 desde cada posición del centro." },
    { nivel: "básico", q: "¿Qué altura y qué longitud tiene un arco de cicloide de r = 25 mm?", sol: "Altura 50 mm; longitud de la curva 200 mm; base 157 mm." },
    { nivel: "básico", q: "Diferencia una cicloide acortada de una alargada.", sol: "Acortada: punto interior, curva ondulada que no toca la base. Alargada: punto exterior, forma bucles." },
    { nivel: "básico", q: "¿Qué curva describe el reflectante de los radios de una bicicleta?", sol: "Una cicloide acortada." },
    { nivel: "básico", q: "¿Por dónde pasa la normal a una cicloide en un punto P?", sol: "Por el punto de contacto I de la ruleta con la base en ese instante." },
    { nivel: "básico", q: "¿Qué curva se obtiene si una ruleta de radio r rueda por fuera de una base de radio R = r?", sol: "Una cardioide." },
    { nivel: "básico", q: "¿Qué ocurre con la hipocicloide si R = 2r?", sol: "Degenera en un diámetro de la base (par de Cardano)." },
    { nivel: "básico", q: "Define evolvente de la circunferencia.", sol: "Curva que describe el extremo de un hilo tenso que se desenrolla de la circunferencia." },
    { nivel: "básico", q: "Traza la evolvente de un cuadrado de 10 mm de lado (dos vueltas).", sol: "Arcos de 90° con centros en los vértices sucesivos y radios 10, 20, 30… hasta 80 mm." },
    { nivel: "básico", q: "Calcula el área bajo un arco de cicloide de r = 10 mm.", sol: "3π · 100 ≈ 942 mm²." },
    { nivel: "básico", q: "¿Qué curva usan los engranajes modernos en sus dientes?", sol: "La evolvente de la circunferencia base." },
    { nivel: "medio", q: "Construye la epicicloide de R = 60 mm y r = 20 mm con 12 divisiones de la ruleta.", sol: "Centro de la ruleta en la circunferencia de radio 80; ángulo de una vuelta 120°, dividido en 12 (10° cada uno); arcos concéntricos por las divisiones de la ruleta; cortes con circunferencias de radio 20 desde cada centro." },
    { nivel: "medio", q: "Construye la hipocicloide de R = 60 mm y r = 15 mm. ¿Qué forma tiene?", sol: "Centro de la ruleta en radio 45; vuelta de la ruleta = 90° de la base. R = 4r: astroide de cuatro puntas." },
    { nivel: "medio", q: "Traza la tangente y la normal a la cicloide en un punto P dado.", sol: "Con centro P y radio r se corta la línea de centros en O; la perpendicular por O a la base da I (abajo) y T (arriba); PI es la normal y PT la tangente." },
    { nivel: "medio", q: "Construye una cicloide alargada con r = 15 mm y d = 25 mm.", sol: "Base 2π · 15 ≈ 94,2 mm en 12 partes; circunferencia auxiliar de radio 25 dividida en 12; paralelas por sus divisiones; arcos de radio 25 desde cada posición del centro." },
    { nivel: "medio", q: "Traza la evolvente de una circunferencia de radio 12 mm con 12 divisiones y una vuelta.", sol: "Tangentes por cada división; sobre la i-ésima, i · 2π · 12 / 12 = 2πi mm ≈ 6,28 i mm. Se unen los extremos." },
    { nivel: "medio", q: "Una epicicloide tiene R / r = 5/2. ¿Cuántas vueltas a la base necesita para cerrarse? ¿Cuántos arcos tiene?", sol: "Se cierra tras 2 vueltas y tiene 5 arcos." },
    { nivel: "medio", q: "Explica por qué la tangente a la cicloide pasa por el punto más alto de la ruleta.", sol: "PI es normal; el ángulo IPT inscrito en la semicircunferencia de diámetro IT es recto; así PT es perpendicular a la normal: es la tangente." },
    { nivel: "medio", q: "Traza la tangente a la evolvente de una circunferencia en un punto P.", sol: "Desde P se traza la tangente a la circunferencia (punto T): PT es la normal; la tangente es su perpendicular por P." },
    { nivel: "medio", q: "Un engranaje de 30 dientes y módulo 2 tiene diámetro primitivo m · z. Calcula el diámetro primitivo y el base (20°).", sol: "d_p = 60 mm; d_b = 60 · cos 20° ≈ 56,4 mm." },
    { nivel: "medio", q: "Dibuja la espiral de tres centros (evolvente de un triángulo equilátero de 8 mm).", sol: "Arcos de 120° con centros en los vértices sucesivos y radios 8, 16, 24, 32… mm." },
    { nivel: "medio", q: "¿Por qué la cardioide aparece en el fondo de una taza?", sol: "Es la cáustica de reflexión: la envolvente de los rayos reflejados en la pared circular cuando la luz sale de un punto de la circunferencia." },
    { nivel: "avanzado", q: "Demuestra que la longitud de base de un arco de cicloide es 2πr.", sol: "Al rodar sin deslizar, la distancia recorrida por el punto de contacto es igual al arco girado. Una vuelta completa son 2πr." },
    { nivel: "avanzado", q: "Explica por qué en un engranaje de evolvente la relación de transmisión es constante.", sol: "Las normales a las dos evolventes en el punto de contacto coinciden con la tangente común a las circunferencias base, que es fija y corta a la línea de centros siempre en el mismo punto I. Por el teorema fundamental del engrane, la razón de velocidades es O₂I / O₁I, constante." },
    { nivel: "avanzado", q: "Calcula la distancia entre dos espiras consecutivas de la evolvente de una circunferencia de radio 10 mm, medida sobre una tangente.", sol: "Tras una vuelta la tangente aumenta 2πr: 62,8 mm." },
    { nivel: "avanzado", q: "Comprueba con la astroide de R = 80 que el segmento de tangente entre los ejes mide R.", sol: "Ecuación paramétrica x = R cos³t, y = R sen³t; la tangente corta a los ejes en (R cos t, 0) y (0, R sen t): distancia √(R² cos² t + R² sen² t) = R." },
    { nivel: "avanzado", q: "Construye la nefroide (R = 2r) y relaciónala con la luz del Sol en una taza.", sol: "Ruleta de radio r por fuera de la base de radio 2r; la curva tiene dos vértices. Con rayos paralelos, la cáustica de reflexión de una semicircunferencia es media nefroide." },
    { nivel: "avanzado", q: "Una rueda de tren de radio 45 cm tiene la pestaña a 50 cm del centro. Describe la trayectoria de un punto de la pestaña y di si retrocede.", sol: "Cicloide alargada (d = 50 > r = 45). Cuando el punto está debajo del carril, su velocidad es v · (1 − d/r) < 0: retrocede un instante." },
    { nivel: "avanzado", q: "Explica el principio del motor Wankel con las curvas del tema.", sol: "La cámara es una epitrocoide de dos lóbulos y el rotor triangular gira dentro tocándola siempre por sus vértices, formando tres cámaras de volumen variable." },
  ],
  quiz: reparte([
    { q: "La ruleta es…", o: ["la línea fija", "la circunferencia que rueda", "el punto que dibuja", "la curva"], a: 1, e: "Rueda sin deslizar." },
    { q: "Una ruleta que rueda sobre una recta genera…", o: ["una epicicloide", "una cicloide", "una evolvente", "una hipocicloide"], a: 1, e: "Base recta." },
    { q: "La base de un arco de cicloide mide…", o: ["2r", "πr", "2πr", "8r"], a: 2, e: "Una vuelta de la ruleta." },
    { q: "La altura de un arco de cicloide es…", o: ["r", "2r", "πr", "4r"], a: 1, e: "El diámetro." },
    { q: "La longitud de un arco de cicloide es…", o: ["2πr", "8r", "4r", "πr²"], a: 1, e: "Wren, 1658." },
    { q: "Si el punto generador está fuera de la ruleta, la cicloide es…", o: ["acortada", "alargada", "normal", "evolvente"], a: 1, e: "Forma bucles." },
    { q: "La normal a una cicloide pasa por…", o: ["el centro de la ruleta", "el punto de contacto con la base", "el punto más alto", "el origen"], a: 1, e: "Centro instantáneo de rotación." },
    { q: "La tangente a la cicloide normal pasa por…", o: ["el punto de contacto", "el punto más alto de la ruleta", "el centro", "la base"], a: 1, e: "Opuesto a I." },
    { q: "La epicicloide se obtiene cuando la ruleta rueda…", o: ["sobre una recta", "por fuera de una circunferencia", "por dentro", "sobre una parábola"], a: 1, e: "Epi = sobre." },
    { q: "En la hipocicloide, el centro de la ruleta recorre una circunferencia de radio…", o: ["R + r", "R − r", "R", "2r"], a: 1, e: "Por dentro." },
    { q: "La astroide es la hipocicloide con…", o: ["R = 2r", "R = 3r", "R = 4r", "R = r"], a: 2, e: "Cuatro puntas." },
    { q: "La deltoide tiene…", o: ["2 puntas", "3 puntas", "4 puntas", "ninguna"], a: 1, e: "R = 3r." },
    { q: "La cardioide es la epicicloide con…", o: ["R = r", "R = 2r", "R = 3r", "R = 4r"], a: 0, e: "Un vértice." },
    { q: "Con R = 2r, la hipocicloide es…", o: ["una astroide", "un diámetro", "una cardioide", "una circunferencia"], a: 1, e: "Par de Cardano." },
    { q: "La evolvente es la curva del extremo de…", o: ["una rueda", "un hilo que se desenrolla", "un péndulo", "un muelle"], a: 1, e: "Involuta." },
    { q: "La normal a la evolvente en P es…", o: ["el radio", "la tangente a la circunferencia base desde P", "paralela al eje", "la cuerda"], a: 1, e: "La base es su evoluta." },
    { q: "La evolvente de un polígono está formada por…", o: ["segmentos", "arcos de circunferencia", "parábolas", "cicloides"], a: 1, e: "Espiral de n centros." },
    { q: "El ángulo de presión normalizado en engranajes es…", o: ["15°", "20°", "30°", "45°"], a: 1, e: "Línea de acción." },
    { q: "La curva más rápida de bajada entre dos puntos es…", o: ["la recta", "la parábola", "la cicloide invertida", "la circunferencia"], a: 2, e: "Braquistócrona." },
    { q: "Las figuras del espirógrafo son…", o: ["cicloides", "trocoides (epi- e hipotrocoides)", "cónicas", "espirales de Arquímedes"], a: 1, e: "Punto no situado en el borde." },
  ]),
  examen: reparte([
    { q: "Base de un arco de cicloide con r = 10 mm:", o: ["62,8 mm", "31,4 mm", "20 mm", "80 mm"], a: 0, e: "2π · 10." },
    { q: "Epicicloide con R = 45 y r = 15: número de arcos…", o: ["2", "3", "4", "15"], a: 1, e: "R / r = 3." },
    { q: "Ángulo central de un arco de epicicloide con R = 80 y r = 20:", o: ["45°", "90°", "120°", "20°"], a: 1, e: "360 · 20/80." },
    { q: "En la evolvente con 12 divisiones y r = 6 mm, la tangente 6 mide…", o: ["6π mm", "12π mm", "36 mm", "3π mm"], a: 0, e: "6/12 · 12π." },
    { q: "Diámetro base de un engranaje de d_p = 100 mm (20°):", o: ["94 mm", "100 mm", "34 mm", "106 mm"], a: 0, e: "100 · cos 20°." },
    { q: "La curva que describe un punto de la llanta de un tren por fuera del carril es…", o: ["cicloide normal", "cicloide acortada", "cicloide alargada", "evolvente"], a: 2, e: "d > r." },
    { q: "Espiral de cuatro centros =", o: ["evolvente del cuadrado", "astroide", "cicloide", "cardioide"], a: 0, e: "Arcos de 90°." },
    { q: "Área bajo un arco de cicloide de r = 1:", o: ["π", "2π", "3π", "8"], a: 2, e: "3πr²." },
  ]),
  feynman: ["Qué significa que una rueda gire sin deslizar y por qué importa en la construcción", "Cómo se traza la normal a cualquier curva cíclica", "Qué diferencia hay entre epicicloide e hipocicloide", "Cómo se construye la evolvente de una circunferencia", "Por qué los engranajes usan perfiles de evolvente"],
  glosario: [
    ["Curva cíclica", "Trayectoria de un punto unido a una circunferencia que rueda sin deslizar."],
    ["Ruleta", "Circunferencia que rueda."],
    ["Base", "Línea fija sobre la que rueda la ruleta."],
    ["Punto generador", "Punto que describe la curva."],
    ["Cicloide", "Curva cíclica de base recta."],
    ["Trocoide", "Curva cíclica con el punto generador dentro o fuera de la ruleta."],
    ["Epicicloide", "Curva cíclica con la ruleta rodando por fuera de una base circular."],
    ["Hipocicloide", "Curva cíclica con la ruleta rodando por dentro de la base."],
    ["Astroide", "Hipocicloide de cuatro puntas (R = 4r)."],
    ["Cardioide", "Epicicloide con R = r."],
    ["Evolvente", "Curva que describe el extremo de un hilo tenso al desenrollarse."],
    ["Evoluta", "Lugar de los centros de curvatura de una curva."],
    ["Centro instantáneo de rotación", "Punto de contacto de la ruleta con la base en cada instante."],
    ["Línea de acción", "Tangente común a las circunferencias base de dos engranajes."],
    ["Ángulo de presión", "Ángulo de la línea de acción con la tangente a las primitivas (20°)."],
  ],
  situacion: {
    titulo: "Diseña un espirógrafo",
    reto: "Una tienda de juguetes educativos quiere un espirógrafo de cartón con un anillo fijo y tres ruedas. Vuestro grupo debe elegir los radios y la posición de los agujeros para obtener figuras atractivas y explicar las curvas que dibuja.",
    pasos: [
      "Elegid el radio del anillo y de tres ruedas con razones R / r distintas (por ejemplo 3, 4 y 5/2).",
      "Predecid, con la teoría, cuántos lóbulos tendrá cada figura y tras cuántas vueltas se cerrará.",
      "Trazad a mano una hipocicloide y una hipotrocoide por puntos.",
      "Comprobad las predicciones con GeoGebra o con el prototipo recortado en cartón pluma.",
      "Preparad una ficha de instrucciones con las curvas y sus nombres.",
    ],
    producto: "Prototipo de cartón, lámina con las construcciones y ficha de instrucciones ilustrada.",
    evaluacion: [
      "Construye correctamente las curvas por puntos.",
      "Predice el número de lóbulos a partir de R / r.",
      "Relaciona la posición del agujero con el tipo de trocoide.",
      "Presenta un producto claro y bien acabado.",
    ],
  },
  figura: fig("Curvas cíclicas de un vistazo", "Resumen: cicloide, epicicloide, hipocicloide y evolvente", [
    ["Cicloide", ["base recta", "base 2πr, altura 2r", "longitud 8r", "normal: PI"], "var(--red)"],
    ["Epicicloide", ["ruleta por fuera", "centros: R + r", "R = r: cardioide", "R/r arcos"], "var(--pen)"],
    ["Hipocicloide", ["ruleta por dentro", "centros: R − r", "R = 4r: astroide", "R = 2r: diámetro"], "var(--leaf)"],
    ["Evolvente", ["hilo que se desenrolla", "tangente = arco", "polígono: espiral", "engranajes 20°"], "var(--inf)"],
  ]),
  video: { id: "dtg5dY_Tsnk", titulo: "Curvas cíclicas: cicloide, epicicloide y evolvente del círculo", canal: "las3dimensiones", vistas: 20733, busqueda: "curvas cíclicas" },
  mapa: mapa("CURVAS CÍCLICAS", "var(--bac)", [
    ["Cicloide", "normal · acortada · alargada", "var(--red)"],
    ["Epicicloide", "cardioide · nefroide", "var(--pen)"],
    ["Hipocicloide", "astroide · deltoide", "var(--leaf)"],
    ["Evolvente", "circunferencia · polígono · engranajes", "var(--inf)"],
  ], 270),
  tarjetas: [
    ["Rodar sin deslizar", "Longitud en la base = arco girado."],
    ["Cicloide", "Base 2πr; altura 2r; longitud 8r."],
    ["Área bajo la cicloide", "3πr²"],
    ["Acortada / alargada", "Punto dentro / fuera de la ruleta."],
    ["Normal a una cíclica", "Pasa por el punto de contacto I."],
    ["Epicicloide", "Ruleta por fuera; centros en R + r."],
    ["Hipocicloide", "Ruleta por dentro; centros en R − r."],
    ["Astroide", "R = 4r"],
    ["Cardioide", "R = r"],
    ["Evolvente", "Tangente desde T igual al arco AT."],
    ["Evolvente de un polígono", "Espiral de n centros."],
    ["Engranajes", "Flancos de evolvente; presión 20°."],
  ],
  familias: ["Pegad una pegatina en una rueda y haced rodar la rueda junto a una pared con un lápiz: aparece la cicloide.", "Desenrollad un hilo de un carrete con un lápiz atado al extremo y dibujad la evolvente.", "Mirad al fondo de una taza con leche al sol: la curva brillante es una cardioide o una nefroide.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Fundamentos geométricos: curvas técnicas cíclicas (cicloide, epicicloide, hipocicloide y sus variantes acortadas y alargadas) y evolvente de la circunferencia y de polígonos; construcción por puntos; tangente y normal; aplicaciones en mecanismos, engranajes, arquitectura y diseño (RD 243/2022, Dibujo Técnico II, saberes básicos A. Fundamentos geométricos; Decret 171/2022, Dibuix Tècnic II).",
    ideas: ["Experimento con rueda y lápiz para obtener la cicloide real y medir su base.", "GeoGebra: animación con deslizador de la ruleta y del punto generador.", "Relación con Tecnología e Ingeniería: trenes de engranajes, módulo y ángulo de presión.", "Carrera de bolas por una rampa recta y otra cicloidal impresa en 3D o de cartón."],
  },
  fuentes: [
    RD,
    DEC,
    { t: "Cicloide, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Cicloide" },
    { t: "Evolvente, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Evolvente" },
    { t: "Engranaje, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Engranaje" },
  ],
  revisado: "2026-11-21",
};
