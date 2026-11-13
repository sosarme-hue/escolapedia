// Matemáticas 3º ESO · Lugares geométricos y figuras planas. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { mapa, tabla, tx, lienzo, cajas, comparar, resumen, poli, rot, linea, punto, C, RD, DECRET } = require("./_eso3L1");

// Geometría auxiliar para dibujar con exactitud.
const r1 = (n) => Math.round(n * 10) / 10;
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const med = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
const pie = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1]; const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy); return [a[0] + t * dx, a[1] + t * dy]; };
const L = (p, q, c, o) => linea(r1(p[0]), r1(p[1]), r1(q[0]), r1(q[1]), c, o);
const circ = (o, r, c = "var(--pen)", extra = "") => `<circle cx="${r1(o[0])}" cy="${r1(o[1])}" r="${r1(r)}" fill="none" stroke="${c}" stroke-width="2.2"${extra}/>`;
const recto = (v, u1, u2, s = 9) => { const a = [v[0] + u1[0] * s, v[1] + u1[1] * s], b = [a[0] + u2[0] * s, a[1] + u2[1] * s], c = [v[0] + u2[0] * s, v[1] + u2[1] * s]; return `<path d="M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])} L${r1(c[0])} ${r1(c[1])}" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`; };
const uni = (p, q) => { const d = dist(p, q); return [(q[0] - p[0]) / d, (q[1] - p[1]) / d]; };

// Triángulo acutángulo común a los puntos notables.
const A = [58, 168], B = [208, 168], Cc = [118, 58];
const tri = poli([A, B, Cc], { c: "var(--ink)", op: 0.05, sw: 2 });
const vert = rot([[A[0] - 8, A[1] + 14, "A"], [B[0] + 8, B[1] + 14, "B"], [Cc[0], Cc[1] - 8, "C"]], 12);
// Circuncentro
const circun = (() => { const ax = A[0], ay = A[1], bx = B[0], by = B[1], cx = Cc[0], cy = Cc[1]; const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)); const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d; const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d; return [ux, uy]; })();
const a_ = dist(B, Cc), b_ = dist(A, Cc), c_ = dist(A, B), per = a_ + b_ + c_;
const inc = [(a_ * A[0] + b_ * B[0] + c_ * Cc[0]) / per, (a_ * A[1] + b_ * B[1] + c_ * Cc[1]) / per];
const area = Math.abs((B[0] - A[0]) * (Cc[1] - A[1]) - (Cc[0] - A[0]) * (B[1] - A[1])) / 2;
const rin = area / (per / 2);
const bari = [(A[0] + B[0] + Cc[0]) / 3, (A[1] + B[1] + Cc[1]) / 3];
const pa = pie(A, B, Cc), pb = pie(B, A, Cc), pc = pie(Cc, A, B);

const lugarCirc = (() => {
  const O = [130, 92], r = 62, ang = [-25, 150, 250].map((g) => (g * Math.PI) / 180);
  const pts = ang.map((g) => [O[0] + r * Math.cos(g), O[1] + r * Math.sin(g)]);
  return lienzo("La circunferencia como lugar geométrico: todos sus puntos están a la distancia r del centro O", circ(O, r) + pts.map((p) => L(O, p, "var(--leaf)") + punto(r1(p[0]), r1(p[1]))).join("") + punto(O[0], O[1], "var(--ink)") + rot([[O[0] - 4, O[1] + 16, "O"], [162, 96, "r", "var(--leaf)"], [92, 72, "r", "var(--leaf)"], [118, 132, "r", "var(--leaf)"], [130, 175, "d(P, O) = r para todo P", "var(--muted)"]]), 186);
})();

const mediatriz = (() => {
  const a = [45, 125], b = [215, 125], m = [130, 125], p = [130, 48];
  return lienzo("Mediatriz de un segmento AB: recta perpendicular por el punto medio; el punto P está a igual distancia de A y de B", L(a, b, "var(--ink)", { w: 3 }) + L([130, 22], [130, 172], "var(--red)", { w: 2.5 }) + L(p, a, "var(--leaf)", { disc: true }) + L(p, b, "var(--leaf)", { disc: true }) + recto(m, [1, 0], [0, -1]) + punto(a[0], a[1], "var(--ink)") + punto(b[0], b[1], "var(--ink)") + punto(m[0], m[1], "var(--pen)") + punto(p[0], p[1]) + rot([[a[0], a[1] + 18, "A"], [b[0], b[1] + 18, "B"], [m[0] + 12, m[1] + 16, "M"], [p[0] + 12, p[1] - 4, "P", "var(--red)", "start"], [62, 88, "PA", "var(--leaf)"], [198, 88, "PB", "var(--leaf)"], [178, 30, "mediatriz", "var(--red)"]]), 182);
})();

const bisectriz = (() => {
  const v = [36, 160], g = (50 * Math.PI) / 180, u2 = [Math.cos(g), -Math.sin(g)], h = (25 * Math.PI) / 180, ub = [Math.cos(h), -Math.sin(h)];
  const p = [v[0] + 118 * ub[0], v[1] + 118 * ub[1]], f1 = [p[0], v[1]], f2 = pie(p, v, [v[0] + u2[0], v[1] + u2[1]]);
  return lienzo("Bisectriz de un ángulo: divide el ángulo en dos iguales y sus puntos están a igual distancia de los dos lados", L(v, [236, 160], "var(--ink)", { w: 3 }) + L(v, [v[0] + 175 * u2[0], v[1] + 175 * u2[1]], "var(--ink)", { w: 3 }) + L(v, [v[0] + 215 * ub[0], v[1] + 215 * ub[1]], "var(--red)", { w: 2.5 }) + L(p, f1, "var(--leaf)", { disc: true }) + L(p, f2, "var(--leaf)", { disc: true }) + recto(f1, [-1, 0], [0, -1], 7) + recto(f2, [-u2[0], -u2[1]], uni(f2, p), 7) + punto(r1(p[0]), r1(p[1])) + rot([[v[0] - 6, v[1] + 16, "V"], [r1(p[0]) + 10, r1(p[1]) - 6, "P", "var(--red)", "start"], [r1(p[0]) + 8, 145, "d", "var(--leaf)", "start"], [r1((p[0] + f2[0]) / 2) - 2, r1((p[1] + f2[1]) / 2) - 6, "d", "var(--leaf)"], [206, 58, "bisectriz", "var(--red)"]]), 186);
})();

const otros = cajas("Lugares geométricos básicos y la condición que cumplen sus puntos", [
  ["Circunferencia", ["distancia r", "a un punto"], "var(--pen)"], ["Mediatriz", ["igual distancia", "a dos puntos"], "var(--red)"],
  ["Bisectriz", ["igual distancia", "a dos rectas"], "var(--leaf)"], ["Dos paralelas", ["distancia d", "a una recta"], "var(--inf)"],
], "¿Qué puntos cumplen…?");

const circuncentro = lienzo("Mediatrices de un triángulo y circuncentro: centro de la circunferencia que pasa por los tres vértices", circ(circun, dist(circun, A), "var(--pen)") + tri + [[A, B], [B, Cc], [A, Cc]].map(([p, q]) => L(med(p, q), circun, "var(--red)", { disc: true })).join("") + [[A, B], [B, Cc], [A, Cc]].map(([p, q]) => punto(r1(med(p, q)[0]), r1(med(p, q)[1]), "var(--red)", 3)).join("") + punto(r1(circun[0]), r1(circun[1]), "var(--pen)", 5) + vert + rot([[r1(circun[0]) + 10, r1(circun[1]) + 4, "O", "var(--pen)", "start"]]), Math.ceil(circun[1] + dist(circun, A) + 10));

const incentro = lienzo("Bisectrices de un triángulo e incentro: centro de la circunferencia inscrita, tangente a los tres lados", tri + circ(inc, rin, "var(--leaf)") + [A, B, Cc].map((p) => L(p, inc, "var(--red)", { disc: true })).join("") + L(inc, [inc[0], A[1]], "var(--leaf)") + punto(r1(inc[0]), r1(inc[1]), "var(--leaf)", 5) + vert + rot([[r1(inc[0]) + 8, r1(inc[1]) - 6, "I", "var(--leaf)", "start"], [r1(inc[0]) + 6, r1((inc[1] + A[1]) / 2) + 4, "r", "var(--leaf)", "start"]]), 190);

const ortocentro = (() => {
  const H = (() => { const p = pa, q = pb; const d1 = [p[0] - A[0], p[1] - A[1]], d2 = [q[0] - B[0], q[1] - B[1]]; const den = d1[0] * d2[1] - d1[1] * d2[0]; const t = ((B[0] - A[0]) * d2[1] - (B[1] - A[1]) * d2[0]) / den; return [A[0] + t * d1[0], A[1] + t * d1[1]]; })();
  return lienzo("Alturas de un triángulo y ortocentro: las tres alturas, perpendiculares desde cada vértice al lado opuesto, se cortan en H", tri + L(A, pa, "var(--inf)", { disc: true }) + L(B, pb, "var(--inf)", { disc: true }) + L(Cc, pc, "var(--inf)", { disc: true }) + recto(pc, [1, 0], [0, -1], 8) + recto(pa, uni(pa, B), uni(pa, A), 8) + recto(pb, uni(pb, A), uni(pb, B), 8) + punto(r1(H[0]), r1(H[1]), "var(--inf)", 5) + vert + rot([[r1(H[0]) + 9, r1(H[1]) + 4, "H", "var(--inf)", "start"], [r1(pc[0]) + 4, A[1] + 14, "pie", "var(--muted)", "start"]]), 190);
})();

const baricentro = lienzo("Medianas de un triángulo y baricentro: cada mediana une un vértice con el punto medio del lado opuesto; el baricentro las divide en razón dos a uno", tri + [[A, med(B, Cc)], [B, med(A, Cc)], [Cc, med(A, B)]].map(([p, q]) => L(p, q, "var(--leaf)") + punto(r1(q[0]), r1(q[1]), "var(--leaf)", 3)).join("") + punto(r1(bari[0]), r1(bari[1]), "var(--red)", 5) + vert + rot([[r1(bari[0]) + 9, r1(bari[1]) - 4, "G", "var(--red)", "start"], [r1(med(A, B)[0]), A[1] + 14, "M", "var(--leaf)"], [130, 192, "CG = 2 · GM", "var(--muted)"]]), 200);

const pitagoras = (() => {
  const P = [110, 155], Q = [170, 155], R = [110, 75];
  return lienzo("Teorema de Pitágoras con cuadrados sobre los lados de un triángulo rectángulo de catetos tres y cuatro e hipotenusa cinco", poli([P, Q, [170, 215], [110, 215]], { c: "var(--red)" }) + poli([P, R, [30, 75], [30, 155]], { c: "var(--leaf)" }) + poli([R, Q, [250, 95], [190, 15]], { c: "var(--pen)" }) + poli([P, Q, R], { c: "var(--ink)", op: 0.12 }) + recto(P, [1, 0], [0, -1]) + rot([[140, 190, "9", "var(--red)"], [70, 108, "16", "var(--leaf)"], [192, 70, "25", "var(--pen)"], [140, 172, "a = 3"], [70, 128, "b = 4"], [200, 92, "c = 5"], [64, 32, "9 + 16 = 25", "var(--muted)"]], 12), 226);
})();

const aplicaciones = lienzo("Aplicaciones de Pitágoras: diagonal de un rectángulo y altura de un triángulo equilátero", poli([[18, 60], [118, 60], [118, 130], [18, 130]], { c: "var(--pen)" }) + linea(18, 130, 118, 60, "var(--red)", { w: 2.5 }) + poli([[146, 140], [242, 140], [194, 57]], { c: "var(--leaf)" }) + linea(194, 57, 194, 140, "var(--red)", { w: 2.5, disc: true }) + recto([194, 140], [1, 0], [0, -1], 7) + rot([[68, 148, "a"], [128, 100, "b", "var(--ink)", "start"], [60, 88, "d", "var(--red)"], [68, 30, "d = √(a² + b²)", "var(--pen)"], [170, 160, "l/2"], [222, 96, "l", "var(--ink)", "start"], [202, 112, "h", "var(--red)", "start"], [194, 30, "h = (√3/2)·l", "var(--leaf)"]]), 176);

const tipos = comparar("Clasificar un triángulo comparando el cuadrado del lado mayor con la suma de los otros dos", [
  ["c² < a² + b²", ["acutángulo", "6, 7, 8"], "var(--leaf)"],
  ["c² = a² + b²", ["rectángulo", "6, 8, 10"], "var(--pen)"],
  ["c² > a² + b²", ["obtusángulo", "4, 5, 8"], "var(--red)"],
], "c = lado mayor");

const areas = cajas("Fórmulas de área de los polígonos más frecuentes", [
  ["Triángulo", ["A = b · h / 2"], "var(--pen)"], ["Paralelogramo", ["A = b · h"], "var(--leaf)"],
  ["Rombo", ["A = D · d / 2"], "var(--red)"], ["Trapecio", ["A = (B + b) · h / 2"], "var(--inf)"],
], "Áreas");

const hexagono = (() => {
  const O = [130, 100], R = 72, v = [...Array(6)].map((_, i) => [O[0] + R * Math.cos((i * Math.PI) / 3), O[1] + R * Math.sin((i * Math.PI) / 3)]);
  const m = med(v[0], v[1]);
  return lienzo("Hexágono regular con su radio, su lado y su apotema, que va del centro al punto medio de un lado", poli(v.map((p) => [r1(p[0]), r1(p[1])]), { c: "var(--pen)" }) + L(O, v[1], "var(--leaf)") + L(O, v[0], "var(--leaf)") + L(O, m, "var(--red)", { w: 2.5 }) + recto(m, uni(m, v[0]), uni(m, O), 7) + punto(O[0], O[1], "var(--ink)") + rot([[O[0] - 10, O[1] - 6, "O"], [118, 138, "r", "var(--leaf)"], [166, 92, "r", "var(--leaf)"], [172, 113, "ap", "var(--red)"], [r1(m[0]) + 14, r1(m[1]) + 10, "l", "var(--ink)", "start"], [130, 194, "A = P · ap / 2", "var(--pen)"]]), 204);
})();

const circulo = (() => {
  const O = [130, 84], R = 62, a1 = 0, a2 = (-100 * Math.PI) / 180;
  const p1 = [O[0] + R * Math.cos(a1), O[1] + R * Math.sin(a1)], p2 = [O[0] + R * Math.cos(a2), O[1] + R * Math.sin(a2)];
  return lienzo("Circunferencia y círculo: un sector circular de ángulo alfa y el arco que abarca", circ(O, R, "var(--pen)") + `<path d="M${O[0]} ${O[1]} L${r1(p1[0])} ${r1(p1[1])} A ${R} ${R} 0 0 0 ${r1(p2[0])} ${r1(p2[1])} Z" fill="var(--leaf)" fill-opacity="0.25" stroke="var(--leaf)" stroke-width="2"/>` + `<path d="M${r1(p1[0])} ${r1(p1[1])} A ${R} ${R} 0 0 0 ${r1(p2[0])} ${r1(p2[1])}" fill="none" stroke="var(--red)" stroke-width="4"/>` + punto(O[0], O[1], "var(--ink)") + rot([[146, 70, "α", "var(--leaf)"], [190, 30, "arco", "var(--red)", "start"], [100, 96, "r"], [130, 172, "L = 2πr   ·   A = πr²", "var(--pen)"], [130, 192, "arco = 2πr·α/360°", "var(--red)"], [130, 210, "sector = πr²·α/360°", "var(--leaf)"]]) + L(O, [O[0] - R, O[1]], "var(--ink)"), 220);
})();

const ventana = lienzo("Figura compuesta: una ventana formada por un rectángulo de uno coma cuatro por cero coma ocho metros y un semicírculo encima", poli([[60, 100], [200, 100], [200, 180], [60, 180]], { c: "var(--pen)" }) + `<path d="M60 100 A 70 70 0 0 1 200 100 Z" fill="var(--leaf)" fill-opacity="0.2" stroke="var(--leaf)" stroke-width="2.5"/>` + linea(130, 100, 200, 100, "var(--red)", { disc: true }) + rot([[130, 196, "1,4 m"], [208, 145, "0,8 m", "var(--ink)", "start"], [165, 117, "r = 0,7", "var(--red)"], [130, 145, "rectángulo", "var(--pen)"], [130, 70, "semicírculo", "var(--leaf)"], [44, 22, "A = 1,12 + 0,77", "var(--muted)", "start"]]), 206);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Lugares geométricos y figuras planas",
  minutos: 110,
  objetivos: [
    "Reconocer la mediatriz, la bisectriz y la circunferencia como lugares geométricos y construirlas",
    "Trazar las rectas y los puntos notables de un triángulo e interpretar su significado",
    "Aplicar el teorema de Pitágoras y su recíproco en problemas del plano",
    "Calcular perímetros y áreas de polígonos, del círculo y de sus partes",
    "Resolver problemas reales con figuras compuestas, explicando el razonamiento",
  ],
  claves: ["lugar geométrico", "mediatriz", "bisectriz", "circuncentro", "incentro", "baricentro", "Pitágoras", "área"],
  pregunta: {
    texto: "Tres pueblos quieren construir un depósito de agua que quede exactamente a la misma distancia de los tres. ¿Dónde lo ponen?",
    respuesta: "En el <mark>circuncentro</mark> del triángulo que forman los pueblos: el punto donde se cortan las mediatrices de sus lados. Cada mediatriz reúne los puntos que están a igual distancia de dos pueblos, y su cruce está a igual distancia de los tres.",
  },
  lectura: {
    titulo: "Las cuerdas con nudos de Egipto",
    html: `<p>Cada año, cuando el Nilo se desbordaba, el agua borraba las lindes de los campos. Al bajar la crecida, unos funcionarios llamados «tensadores de cuerdas» volvían a medir las parcelas para que cada familia recuperase su terreno y pagase los impuestos que le correspondían. Su herramienta era sencilla: una cuerda con doce nudos a la misma distancia.</p><p>Si se tensaba la cuerda formando un triángulo con lados de 3, 4 y 5 tramos, el ángulo entre los lados de 3 y 4 salía exactamente recto. Así trazaban esquinas perfectas sin escuadra. Siglos después, los griegos explicaron por qué: en todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos. Es el teorema de Pitágoras, quizá el resultado más famoso de las matemáticas.</p><p>La palabra geometría significa precisamente «medida de la tierra». En este tema verás cómo se describen los puntos que cumplen una condición (los lugares geométricos), qué puntos especiales esconde cualquier triángulo y cómo se calculan longitudes y áreas de figuras planas. Son herramientas que siguen usando hoy arquitectos, topógrafos, diseñadores y cualquiera que reforma una habitación.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es un lugar geométrico</h3><p>Un <b>lugar geométrico</b> es el conjunto de <b>todos</b> los puntos del plano que cumplen una determinada propiedad. Lo importante es la palabra «todos»: los puntos que la cumplen están en el lugar, y los que no la cumplen, no.</p><p>El ejemplo más conocido es la <b>circunferencia</b>: el lugar geométrico de los puntos que están a una distancia fija r (el <b>radio</b>) de un punto fijo O (el <b>centro</b>). Si un perro está atado con una correa de 3 m a un poste y la mantiene tensa, su collar recorre una circunferencia de radio 3 m.</p><p>Hay que distinguir la <b>circunferencia</b> (la línea, los puntos a distancia exactamente r) del <b>círculo</b> (la superficie, los puntos a distancia menor o igual que r). Si la correa no va tensa, el perro puede estar en cualquier punto del círculo.</p><p>Pensar en lugares geométricos ayuda a resolver problemas de ubicación: ¿dónde puede estar un punto que cumple dos condiciones a la vez? En la intersección de los dos lugares.</p>`, svg: lugarCirc, video: { id: "2qeUmkZ3dT8", titulo: "Lugares Geométricos. Mediatriz, Bisectriz y Circunferencia", canal: "El de mates", vistas: 8801, megusta: 0 } },
    { html: `<h3>1.2 La mediatriz de un segmento</h3><p>La <b>mediatriz</b> de un segmento AB es el lugar geométrico de los puntos que están a la <b>misma distancia de A y de B</b>. Resulta ser una recta: la <mark>perpendicular a AB que pasa por su punto medio</mark> M.</p><p>Se construye con regla y compás: con centro en A y un radio mayor que la mitad de AB se traza un arco por encima y otro por debajo del segmento; con el mismo radio y centro en B se repite. Los dos puntos donde se cortan los arcos equidistan de A y de B, así que la recta que los une es la mediatriz.</p><p>Aplicaciones: si dos colegios están en A y B y se quiere una parada de autobús a la misma distancia de ambos, debe estar en la mediatriz. Los puntos a un lado de la mediatriz están más cerca de A, y los del otro lado, más cerca de B: por eso la mediatriz divide el plano en dos «zonas de influencia», como las de dos antenas de telefonía.</p>`, svg: mediatriz },
    { html: `<h3>1.3 La bisectriz de un ángulo</h3><p>La <b>bisectriz</b> de un ángulo es la semirrecta que lo divide en <b>dos ángulos iguales</b>. Como lugar geométrico, es el conjunto de puntos que están a la <mark>misma distancia de los dos lados</mark> del ángulo.</p><p>Recuerda que la distancia de un punto a una recta se mide siempre por la <b>perpendicular</b>: es el camino más corto. En el dibujo, el punto P de la bisectriz está a la misma distancia d de los dos lados.</p><p>Construcción con compás: con centro en el vértice V se traza un arco que corte los dos lados; desde esos dos puntos de corte, con el mismo radio, se trazan dos arcos que se cortan dentro del ángulo. La recta que une ese punto con V es la bisectriz.</p><p>Si en vez de dos semirrectas se tienen dos rectas que se cortan, los puntos que equidistan de ambas forman <b>dos</b> bisectrices perpendiculares entre sí, una para cada pareja de ángulos opuestos.</p>`, svg: bisectriz },
    { html: `<h3>1.4 Otros lugares e intersecciones</h3><p>Algunos lugares geométricos sencillos más:</p><ul><li>Los puntos que están a una distancia d de una recta forman <b>dos rectas paralelas</b> a ella, una a cada lado.</li><li>Los puntos que están a distancia d de un segmento forman una figura con forma de «pista de atletismo»: dos segmentos paralelos y dos semicircunferencias.</li><li>Los puntos desde los que un segmento AB se ve con ángulo recto forman la circunferencia de diámetro AB (arco capaz de 90°).</li></ul><p>Muchos problemas piden puntos que cumplan <b>dos condiciones</b>. Se dibuja cada lugar y se buscan las <b>intersecciones</b>. Por ejemplo: «un tesoro está a 5 m del árbol y a igual distancia de la fuente y del pozo». Es la intersección de una circunferencia de radio 5 con centro en el árbol y la mediatriz entre la fuente y el pozo: puede haber 0, 1 o 2 soluciones.</p>`, svg: otros },
    { html: `<h3>2.1 Mediatrices y circuncentro</h3><p>Un triángulo tiene tres lados y, por tanto, tres mediatrices. Las tres se cortan en un único punto, el <b>circuncentro</b> O. ¿Por qué? Un punto de la mediatriz de AB está a igual distancia de A y B; si además está en la de BC, equidista de B y C. Entonces equidista de A y C, y también está en la tercera mediatriz.</p><p>Como OA = OB = OC, el circuncentro es el centro de la <mark>circunferencia circunscrita</mark>, la que pasa por los tres vértices. Es la solución de la pregunta inicial: el depósito equidistante de los tres pueblos.</p><p>Su posición depende del tipo de triángulo: en un <b>acutángulo</b> está dentro; en un <b>rectángulo</b>, justo en el punto medio de la hipotenusa; en un <b>obtusángulo</b>, fuera. Así se puede encontrar el centro de un plato roto con tres puntos de su borde: se trazan dos mediatrices y su corte es el centro.</p>`, svg: circuncentro },
    { html: `<h3>2.2 Bisectrices e incentro</h3><p>Las tres bisectrices de los ángulos de un triángulo se cortan en un punto llamado <b>incentro</b> I. Como cada bisectriz equidista de dos lados, el incentro está a la misma distancia de los tres lados.</p><p>Por eso es el centro de la <mark>circunferencia inscrita</mark>: la mayor circunferencia que cabe dentro del triángulo y que toca (es tangente a) sus tres lados. Su radio es la distancia del incentro a cualquier lado, medida por la perpendicular.</p><p>A diferencia del circuncentro, el incentro está <b>siempre dentro</b> del triángulo, sea como sea este. Aplicación: en una parcela triangular, la fuente circular más grande posible tiene su centro en el incentro. Y si se quiere construir un camino que vaya a igual distancia de dos vallas que forman un ángulo, el camino debe seguir la bisectriz.</p><p>No confundas: circuncentro → mediatrices → vértices; incentro → bisectrices → lados.</p>`, svg: incentro },
    { html: `<h3>2.3 Alturas y ortocentro</h3><p>Una <b>altura</b> de un triángulo es el segmento perpendicular que va desde un vértice hasta la recta que contiene el lado opuesto. El punto donde llega se llama <b>pie</b> de la altura. Cada triángulo tiene tres alturas, y las rectas que las contienen se cortan en un punto llamado <b>ortocentro</b> H.</p><p>Las alturas son fundamentales para calcular áreas: el área del triángulo es <mark>base · altura / 2</mark>, y se puede tomar cualquier lado como base siempre que se use la altura correspondiente. Por eso el producto lado · altura es el mismo para los tres lados.</p><p>La posición del ortocentro también depende del tipo de triángulo: dentro en los acutángulos, en el vértice del ángulo recto en los rectángulos (porque los catetos son alturas) y fuera en los obtusángulos. En un triángulo obtusángulo, dos alturas caen fuera: hay que prolongar los lados para trazarlas.</p>`, svg: ortocentro },
    { html: `<h3>2.4 Medianas y baricentro</h3><p>Una <b>mediana</b> es el segmento que une un vértice con el <b>punto medio del lado opuesto</b>. Las tres medianas se cortan en el <b>baricentro</b> G, que siempre está dentro del triángulo.</p><p>El baricentro tiene una propiedad muy útil: divide cada mediana en dos partes, de modo que la que va al vértice es el <mark>doble</mark> que la que va al lado: CG = 2 · GM. Es decir, G está a 2/3 de cada mediana contando desde el vértice.</p><p>Además, el baricentro es el <b>centro de gravedad</b> del triángulo: si recortas un triángulo en cartulina, se mantiene en equilibrio sobre la punta de un lápiz colocada en G. Cada mediana divide el triángulo en dos triángulos de igual área (misma base y misma altura).</p><p>Resumen de los cuatro puntos notables: circuncentro (mediatrices), incentro (bisectrices), ortocentro (alturas) y baricentro (medianas). En cualquier triángulo no equilátero, O, G y H están alineados en la llamada recta de Euler.</p>`, svg: baricentro, video: { id: "BQS8OxGRw_U", titulo: "Rectas y puntos notables de un triángulo | Geometría - Vitual", canal: "Vitual", vistas: 751060, megusta: 0 } },
    { html: `<h3>3.1 El teorema de Pitágoras</h3><p>En un <b>triángulo rectángulo</b>, los lados que forman el ángulo recto se llaman <b>catetos</b> (a y b) y el lado opuesto, el más largo, <b>hipotenusa</b> (c). El teorema de Pitágoras dice:</p><p class="formula"><span>c² = a² + b²</span></p><p>Geométricamente: el área del cuadrado construido sobre la hipotenusa es igual a la suma de las áreas de los cuadrados sobre los catetos. Con catetos 3 y 4: 9 + 16 = 25, así que la hipotenusa mide 5.</p><p>Del teorema se despeja cualquier lado: <b>c = √(a² + b²)</b> para la hipotenusa, y <b>a = √(c² − b²)</b> para un cateto. Ejemplo: una escalera de 5 m apoyada en una pared con el pie a 1,4 m de ella llega a una altura de √(25 − 1,96) = √23,04 = 4,8 m.</p><p>Las ternas de números enteros que cumplen el teorema se llaman <b>ternas pitagóricas</b>: (3, 4, 5), (5, 12, 13), (8, 15, 17) y sus múltiplos, como (6, 8, 10).</p>`, svg: pitagoras },
    { html: `<h3>3.2 Aplicaciones del teorema de Pitágoras</h3><p>Pitágoras aparece cada vez que en una figura se puede dibujar un triángulo rectángulo:</p><ul><li><b>Diagonal de un rectángulo</b> de lados a y b: d = √(a² + b²). La «pulgada» de una pantalla mide la diagonal: una tele de 16 × 9 unidades tiene diagonal √337 ≈ 18,4 unidades.</li><li><b>Altura de un triángulo equilátero</b> de lado l: h = √(l² − (l/2)²) = (√3/2) · l ≈ 0,866 · l.</li><li><b>Apotema de un polígono regular</b>: con el radio r y medio lado, ap = √(r² − (l/2)²).</li><li><b>Distancia entre dos puntos</b> del plano: d = √((x₂ − x₁)² + (y₂ − y₁)²).</li><li><b>Altura de un trapecio isósceles</b> o lado de un rombo a partir de sus diagonales.</li></ul><p>La clave está en localizar el triángulo rectángulo escondido y decidir qué lado es la hipotenusa, que siempre es la que está enfrente del ángulo recto.</p>`, svg: aplicaciones, video: { id: "WXRdDDo1xbA", titulo: "TEOREMA DE PITÁGORAS 📐 Aplicación en Figuras Planas", canal: "Susi Profe", vistas: 634011, megusta: 0 } },
    { html: `<h3>3.3 El recíproco: ¿es rectángulo el triángulo?</h3><p>El teorema también funciona al revés: si en un triángulo de lados a, b y c (c el mayor) se cumple c² = a² + b², entonces el triángulo es <b>rectángulo</b>. Es lo que hacían los tensadores de cuerdas egipcios con 3, 4 y 5.</p><p>Comparando c² con a² + b² se clasifica cualquier triángulo según sus ángulos:</p><ul><li>c² &lt; a² + b² → <b>acutángulo</b> (tres ángulos agudos). Ejemplo 6, 7, 8: 64 &lt; 85.</li><li>c² = a² + b² → <b>rectángulo</b>. Ejemplo 6, 8, 10: 100 = 100.</li><li>c² &gt; a² + b² → <b>obtusángulo</b>. Ejemplo 4, 5, 8: 64 &gt; 41.</li></ul><p>Antes, hay que comprobar que el triángulo existe: cada lado debe ser menor que la suma de los otros dos (<b>desigualdad triangular</b>). Con 2, 3 y 7 no se puede construir ningún triángulo, porque 7 &gt; 2 + 3. Los albañiles usan aún la regla 3-4-5 (o 60-80-100 cm) para comprobar que una esquina es recta.</p>`, svg: tipos },
    { html: `<h3>4.1 Perímetros y áreas de polígonos</h3><p>El <b>perímetro</b> es la longitud del contorno (se mide en m, cm…) y el <b>área</b>, la medida de la superficie (en m², cm²…). Las fórmulas básicas se deducen unas de otras:</p>${tabla(["Figura", "Área"], [["Rectángulo", "b · h"], ["Paralelogramo", "b · h"], ["Triángulo", "b · h / 2"], ["Rombo", "D · d / 2"], ["Trapecio", "(B + b) · h / 2"]])}<p>El paralelogramo se transforma en un rectángulo cortando un triángulo de un lado y pegándolo en el otro. El triángulo es medio paralelogramo. El rombo es medio rectángulo de lados D y d. Y el trapecio, duplicado y girado, forma un paralelogramo de base B + b.</p><p>Muchas veces falta un dato que se calcula con Pitágoras. Un rombo de diagonales 12 y 16 cm tiene área 12 · 16 / 2 = 96 cm², y su lado es √(6² + 8²) = 10 cm, así que su perímetro es 40 cm.</p>`, svg: areas },
    { html: `<h3>4.2 Polígonos regulares</h3><p>Un polígono es <b>regular</b> si tiene todos sus lados y todos sus ángulos iguales. Sus elementos son el <b>centro</b> O, el <b>radio</b> r (distancia del centro a un vértice) y la <b>apotema</b> ap (distancia del centro al punto medio de un lado, perpendicular a él).</p><p>Uniendo el centro con los vértices, un polígono de n lados se descompone en n triángulos iguales de base l y altura ap. Por eso:</p><p class="formula"><span>A = P · ap / 2</span></p><p>donde P = n · l es el perímetro. El <b>hexágono regular</b> es especial: sus seis triángulos son equiláteros, así que su radio es igual al lado. Para un hexágono de lado 6 cm: ap = √(36 − 9) = √27 ≈ 5,2 cm, P = 36 cm y A ≈ 36 · 5,2 / 2 = 93,6 cm².</p><p>Las abejas construyen celdas hexagonales porque, entre los polígonos que cubren el plano sin huecos, el hexágono es el que encierra más área con el mismo perímetro: ahorran cera.</p>`, svg: hexagono, video: { id: "6Rk2POphvFY", titulo: "ÁREA de POLÍGONOS REGULARES 📝 Figuras Planas", canal: "Susi Profe", vistas: 703490, megusta: 0 } },
    { html: `<h3>4.3 La circunferencia y el círculo</h3><p>En cualquier circunferencia, el cociente entre su longitud y su diámetro es siempre el mismo número, <b>π ≈ 3,1416</b>. Por eso:</p><ul><li><b>Longitud de la circunferencia</b>: L = 2πr.</li><li><b>Área del círculo</b>: A = πr².</li></ul><p>Un <b>arco</b> es un trozo de circunferencia y un <b>sector circular</b>, el trozo de círculo entre dos radios. Si el ángulo central es α (en grados), el arco y el sector son la fracción α/360 del total:</p><p class="formula"><span>arco = 2πr · α / 360°&nbsp;&nbsp;&nbsp;sector = πr² · α / 360°</span></p><p>Ejemplo: una pizza de 30 cm de diámetro (r = 15) cortada en 8 porciones: cada porción es un sector de 45°, con área π · 225 · 45/360 ≈ 88,4 cm² y un borde de 2π · 15 · 45/360 ≈ 11,8 cm. La <b>corona circular</b>, entre dos circunferencias concéntricas, tiene área π(R² − r²).</p>`, svg: circulo },
    { html: `<h3>4.4 Figuras compuestas y problemas</h3><p>La mayoría de las figuras reales no son una figura simple, sino una <b>combinación</b> de ellas. Para calcular su área se <b>descompone</b> en figuras conocidas y se suman (o se restan, si hay huecos).</p><p>Ejemplo: una ventana formada por un rectángulo de 1,4 m × 0,8 m con un semicírculo encima de diámetro 1,4 m. Área del rectángulo: 1,12 m². Semicírculo de radio 0,7: π · 0,49 / 2 ≈ 0,77 m². Total ≈ 1,89 m². Su perímetro (para el marco) es 1,4 + 0,8 + 0,8 + π · 0,7 ≈ 5,2 m: ¡ojo, el lado de arriba del rectángulo no forma parte del contorno!</p><p>Estrategia general: 1) dibujar la figura con los datos; 2) descomponerla; 3) calcular con Pitágoras los datos que falten; 4) operar con las unidades correctas; 5) comprobar que el resultado es razonable. Si las medidas vienen en unidades distintas, conviene pasarlas todas a la misma antes de empezar.</p>`, svg: ventana },
  ],
  ejemplos: [
    { enunciado: "Halla la hipotenusa de un triángulo rectángulo de catetos 9 y 12 cm.", pasos: ["c² = 81 + 144 = 225.", "c = √225."], resultado: "c = 15 cm." },
    { enunciado: "Una escalera de 6,5 m se apoya en una pared y su pie está a 2,5 m. ¿A qué altura llega?", pasos: ["h² = 6,5² − 2,5² = 42,25 − 6,25 = 36.", "h = 6."], resultado: "6 m." },
    { enunciado: "¿Es rectángulo el triángulo de lados 7, 24 y 25?", pasos: ["25² = 625.", "7² + 24² = 49 + 576 = 625."], resultado: "Sí, es rectángulo." },
    { enunciado: "Área de un triángulo equilátero de lado 10 cm.", pasos: ["h = √(100 − 25) = √75 ≈ 8,66 cm.", "A = 10 · 8,66 / 2."], resultado: "A ≈ 43,3 cm²." },
    { enunciado: "Área de un sector circular de radio 6 cm y 120°.", pasos: ["A = π · 36 · 120/360.", "= 12π."], resultado: "≈ 37,7 cm²." },
    { enunciado: "Un trapecio isósceles tiene bases 16 y 10 cm y lados iguales de 5 cm. Halla su área.", pasos: ["Sobresale (16 − 10)/2 = 3 cm a cada lado.", "h = √(25 − 9) = 4 cm.", "A = (16 + 10) · 4 / 2."], resultado: "A = 52 cm²." },
  ],
  errores: [
    "Aplicar Pitágoras a un triángulo que no es rectángulo.",
    "Sumar los cuadrados de la hipotenusa y un cateto para hallar el otro cateto (hay que restar).",
    "Calcular √(a² + b²) como a + b.",
    "Confundir circuncentro (mediatrices, vértices) con incentro (bisectrices, lados).",
    "Confundir circunferencia (línea, longitud) con círculo (superficie, área).",
    "Usar el diámetro en lugar del radio en πr², o mezclar unidades distintas.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Define con tus palabras mediatriz, bisectriz y circunferencia como lugares geométricos.", sol: "Mediatriz: puntos a igual distancia de dos puntos. Bisectriz: puntos a igual distancia de los lados de un ángulo. Circunferencia: puntos a distancia r de un centro." },
    { nivel: "básico", q: "Dibuja un segmento de 8 cm y construye su mediatriz con regla y compás.", sol: "Arcos de radio > 4 cm desde cada extremo; unir sus dos cortes. Pasa por el punto medio, a 4 cm de cada extremo, y es perpendicular." },
    { nivel: "básico", q: "Dibuja un ángulo de 70° y traza su bisectriz. ¿Cuánto mide cada mitad?", sol: "35°." },
    { nivel: "básico", q: "Halla la hipotenusa de un triángulo rectángulo con catetos 5 y 12 cm.", sol: "√(25 + 144) = √169 = 13 cm." },
    { nivel: "básico", q: "Halla el cateto desconocido: hipotenusa 17 cm y un cateto 8 cm.", sol: "√(289 − 64) = √225 = 15 cm." },
    { nivel: "básico", q: "¿Son rectángulos los triángulos de lados (9, 12, 15) y (5, 6, 8)?", sol: "225 = 81 + 144: sí. 64 > 25 + 36 = 61: no, es obtusángulo." },
    { nivel: "básico", q: "Calcula el área de un rombo de diagonales 10 y 7 cm.", sol: "10 · 7 / 2 = 35 cm²." },
    { nivel: "básico", q: "Calcula el área de un trapecio de bases 12 y 8 cm y altura 5 cm.", sol: "(12 + 8) · 5 / 2 = 50 cm²." },
    { nivel: "básico", q: "Halla la longitud y el área de una circunferencia/círculo de radio 4 cm.", sol: "L = 8π ≈ 25,1 cm; A = 16π ≈ 50,3 cm²." },
    { nivel: "básico", q: "¿Qué punto notable es el centro de la circunferencia que pasa por los tres vértices? ¿Y de la que toca los tres lados?", sol: "Circuncentro; incentro." },
    { nivel: "básico", q: "Una rueda de bici tiene 70 cm de diámetro. ¿Cuánto avanza en una vuelta?", sol: "π · 70 ≈ 219,9 cm ≈ 2,2 m." },
    { nivel: "básico", q: "¿Se puede construir un triángulo de lados 3, 4 y 9 cm? ¿Y de 5, 6 y 10?", sol: "No (9 > 3 + 4). Sí (10 < 11)." },
    { nivel: "medio", q: "Halla la diagonal de un rectángulo de 24 × 7 cm y la de un cuadrado de lado 5 cm.", sol: "√(576 + 49) = 25 cm; √50 = 5√2 ≈ 7,07 cm." },
    { nivel: "medio", q: "Calcula la altura y el área de un triángulo equilátero de lado 8 cm.", sol: "h = √(64 − 16) = √48 ≈ 6,93 cm; A ≈ 27,7 cm²." },
    { nivel: "medio", q: "Un rombo tiene diagonales de 18 y 24 cm. Halla su lado, su perímetro y su área.", sol: "Lado √(9² + 12²) = 15 cm; P = 60 cm; A = 216 cm²." },
    { nivel: "medio", q: "Halla el área de un hexágono regular de lado 10 cm.", sol: "ap = √(100 − 25) ≈ 8,66 cm; P = 60; A ≈ 60 · 8,66 / 2 ≈ 259,8 cm²." },
    { nivel: "medio", q: "Halla la longitud del arco y el área del sector de radio 10 cm y ángulo 72°.", sol: "Arco = 20π · 72/360 = 4π ≈ 12,6 cm; sector = 100π/5 = 20π ≈ 62,8 cm²." },
    { nivel: "medio", q: "Calcula el área de una corona circular de radios 8 y 5 cm.", sol: "π(64 − 25) = 39π ≈ 122,5 cm²." },
    { nivel: "medio", q: "Una televisión de 16:9 tiene 80 cm de ancho. ¿Cuántas pulgadas mide su diagonal? (1 pulgada = 2,54 cm)", sol: "Alto = 45 cm. d = √(6400 + 2025) = √8425 ≈ 91,8 cm ≈ 36 pulgadas." },
    { nivel: "medio", q: "Un trapecio rectángulo tiene bases 15 y 9 cm y altura 8 cm. Halla su lado oblicuo y su perímetro.", sol: "Oblicuo √(6² + 8²) = 10 cm. P = 15 + 9 + 8 + 10 = 42 cm." },
    { nivel: "medio", q: "Clasifica según sus ángulos los triángulos (7, 8, 10), (8, 15, 17) y (5, 7, 10).", sol: "100 < 113: acutángulo. 289 = 289: rectángulo. 100 > 74: obtusángulo." },
    { nivel: "medio", q: "Halla la distancia entre los puntos A(1, 2) y B(7, 10).", sol: "√(36 + 64) = 10." },
    { nivel: "medio", q: "Halla el área de la ventana: rectángulo de 2 × 1,2 m con un semicírculo encima de diámetro 2 m.", sol: "2,4 + π/2 ≈ 2,4 + 1,57 = 3,97 m²." },
    { nivel: "medio", q: "Un plato se ha roto. Explica cómo encontrar su centro con tres puntos del borde.", sol: "Se unen los puntos dos a dos y se trazan dos mediatrices; su corte es el circuncentro, el centro del plato." },
    { nivel: "avanzado", q: "En un triángulo rectángulo de catetos 6 y 8 cm, ¿dónde está el circuncentro y cuánto mide el radio de la circunferencia circunscrita?", sol: "En el punto medio de la hipotenusa (10 cm); radio 5 cm." },
    { nivel: "avanzado", q: "Halla el radio de la circunferencia inscrita en un triángulo rectángulo de lados 6, 8 y 10 (usa A = r · semiperímetro).", sol: "A = 24; s = 12; r = 24/12 = 2 cm." },
    { nivel: "avanzado", q: "Un cuadrado está inscrito en una circunferencia de radio 5 cm. Halla el lado del cuadrado y el área que queda entre ambos.", sol: "Diagonal 10 → lado 10/√2 ≈ 7,07 cm; área cuadrado 50. Círculo 25π ≈ 78,5. Queda ≈ 28,5 cm²." },
    { nivel: "avanzado", q: "Una antena de 12 m se sujeta con tres cables desde lo alto hasta puntos del suelo a 5 m de su base. ¿Cuántos metros de cable hacen falta?", sol: "Cada cable √(144 + 25) = 13 m. Total 39 m." },
    { nivel: "avanzado", q: "Calcula el área de un octógono regular de lado 4 cm y apotema 4,83 cm, y compárala con la del cuadrado de lado 4 + 2·2,83 cm que lo contiene.", sol: "A = 32 · 4,83 / 2 ≈ 77,3 cm². Cuadrado de lado 9,66: ≈ 93,3 cm² (sobran 4 triángulos de 4 cm² = 16 cm²)." },
    { nivel: "avanzado", q: "Una pista de atletismo tiene dos rectas de 100 m y dos semicircunferencias de radio 36,5 m. Halla la longitud de la calle interior y el área encerrada.", sol: "L = 200 + 2π · 36,5 ≈ 429,3 m. A = 100 · 73 + π · 36,5² ≈ 7.300 + 4.185 = 11.485 m²." },
    { nivel: "avanzado", q: "En un triángulo, la mediana desde C mide 9 cm. ¿A qué distancia de C está el baricentro? ¿Y del punto medio del lado opuesto?", sol: "CG = 6 cm; GM = 3 cm." },
    { nivel: "avanzado", q: "Un tesoro está a 4 m de un árbol A y a igual distancia de dos pozos P y Q. Explica con lugares geométricos cuántas soluciones puede haber.", sol: "Intersección de la circunferencia de centro A y radio 4 con la mediatriz de PQ: 0, 1 (tangente) o 2 soluciones." },
    { nivel: "avanzado", q: "Halla la altura de un triángulo isósceles de base 10 cm y lados iguales de 13 cm, y su área. ¿Dónde está su ortocentro, dentro o fuera?", sol: "h = √(169 − 25) = 12 cm; A = 60 cm². 13² = 169 < 13² + 10²: acutángulo → ortocentro dentro." },
    { nivel: "avanzado", q: "Una cabra está atada con una cuerda de 5 m a la esquina exterior de un establo cuadrado de 4 m de lado, en un prado. ¿Qué área puede pastar?", sol: "3/4 de círculo de radio 5: 75π/4 ≈ 58,9 m², más 2 cuartos de círculo de radio 1 en las esquinas: π/2 ≈ 1,57. Total ≈ 60,5 m²." },
  ],
  quiz: [
    { q: "Los puntos a igual distancia de dos puntos A y B forman…", o: ["la bisectriz", "la mediatriz de AB", "una circunferencia", "el segmento AB"], a: 1, e: "Definición de mediatriz." },
    { q: "Los puntos a igual distancia de los lados de un ángulo forman…", o: ["la mediatriz", "la bisectriz", "la altura", "la mediana"], a: 1, e: "Definición de bisectriz." },
    { q: "La mediatriz de un segmento es…", o: ["paralela a él", "perpendicular por su punto medio", "perpendicular por un extremo", "una circunferencia"], a: 1, e: "Perpendicular por M." },
    { q: "La distancia de un punto a una recta se mide…", o: ["en horizontal", "por la perpendicular", "hasta el origen", "por cualquier camino"], a: 1, e: "El camino más corto." },
    { q: "Las mediatrices de un triángulo se cortan en el…", o: ["incentro", "baricentro", "circuncentro", "ortocentro"], a: 2, e: "Centro de la circunscrita." },
    { q: "Las bisectrices se cortan en el…", o: ["incentro", "baricentro", "circuncentro", "ortocentro"], a: 0, e: "Centro de la inscrita." },
    { q: "Las medianas se cortan en el…", o: ["incentro", "baricentro", "circuncentro", "ortocentro"], a: 1, e: "Centro de gravedad." },
    { q: "Las alturas se cortan en el…", o: ["incentro", "baricentro", "circuncentro", "ortocentro"], a: 3, e: "H." },
    { q: "El baricentro divide cada mediana en razón…", o: ["1 : 1", "2 : 1", "3 : 1", "3 : 2"], a: 1, e: "CG = 2 GM." },
    { q: "En un triángulo rectángulo, el circuncentro está…", o: ["dentro", "en el punto medio de la hipotenusa", "en el ángulo recto", "fuera"], a: 1, e: "La hipotenusa es un diámetro." },
    { q: "Hipotenusa de catetos 6 y 8:", o: ["14", "10", "48", "100"], a: 1, e: "√100." },
    { q: "Cateto con hipotenusa 13 y otro cateto 5:", o: ["12", "8", "18", "√194"], a: 0, e: "√(169 − 25)." },
    { q: "El triángulo 5, 6, 9 es…", o: ["acutángulo", "rectángulo", "obtusángulo", "imposible"], a: 2, e: "81 > 61." },
    { q: "¿Existe un triángulo de lados 2, 5 y 8?", o: ["sí", "no", "solo si es rectángulo", "solo si es isósceles"], a: 1, e: "8 > 2 + 5." },
    { q: "Área de un rombo de diagonales 8 y 6:", o: ["48", "24", "14", "28"], a: 1, e: "D·d/2." },
    { q: "Área de un trapecio de bases 10 y 6 y altura 4:", o: ["64", "32", "40", "16"], a: 1, e: "16 · 4/2." },
    { q: "El área de un polígono regular es…", o: ["P · ap", "P · ap / 2", "l · ap", "P²"], a: 1, e: "n triángulos." },
    { q: "En un hexágono regular, el radio es igual al…", o: ["lado", "apotema", "doble del lado", "perímetro"], a: 0, e: "Triángulos equiláteros." },
    { q: "Área de un círculo de diámetro 10:", o: ["100π", "25π", "10π", "20π"], a: 1, e: "r = 5." },
    { q: "Un sector de 90° es…", o: ["la mitad del círculo", "un cuarto del círculo", "un tercio", "un octavo"], a: 1, e: "90/360." },
  ],
  examen: [
    { q: "Lugar de los puntos a 3 cm de un punto O:", o: ["círculo", "circunferencia de radio 3", "mediatriz", "dos rectas"], a: 1, e: "Distancia exacta." },
    { q: "Centro de la circunferencia inscrita:", o: ["circuncentro", "incentro", "baricentro", "ortocentro"], a: 1, e: "Bisectrices." },
    { q: "Diagonal de un rectángulo 9 × 12:", o: ["21", "15", "108", "√63"], a: 1, e: "√225." },
    { q: "Altura de un equilátero de lado 6:", o: ["3", "√27 ≈ 5,2", "6", "√45"], a: 1, e: "√(36 − 9)." },
    { q: "(8, 15, 17) es…", o: ["acutángulo", "rectángulo", "obtusángulo", "imposible"], a: 1, e: "289 = 64 + 225." },
    { q: "Área de un hexágono de lado 4 y apotema 3,46:", o: ["41,5", "83", "13,8", "24"], a: 0, e: "24 · 3,46 / 2." },
    { q: "Longitud de un arco de 60° y radio 9:", o: ["3π", "9π", "6π", "π"], a: 0, e: "18π/6." },
    { q: "Área de la corona de radios 5 y 3:", o: ["4π", "16π", "8π", "34π"], a: 1, e: "π(25 − 9)." },
  ],
  feynman: ["Qué es un lugar geométrico y por qué la mediatriz es uno de ellos", "Qué diferencia hay entre circuncentro e incentro", "Qué dice el teorema de Pitágoras y cómo se usa para saber si un triángulo es rectángulo", "Cómo se calcula el área de una figura compuesta"],
  figura: {
    titulo: "Geometría plana en una imagen",
    svg: resumen("Resumen de lugares geométricos y figuras planas", [
      ["Lugares", "mediatriz (2 puntos) · bisectriz (2 lados) · circunferencia (centro)", "var(--pen)"],
      ["Notables", "circuncentro · incentro · ortocentro · baricentro", "var(--red)"],
      ["Pitágoras", "c² = a² + b² · recíproco para clasificar triángulos", "var(--leaf)"],
      ["Áreas", "polígonos · regular P·ap/2 · círculo πr² · sector πr²α/360", "var(--inf)"],
    ], 180),
  },
  video: { id: "_7OikX8mJsk", titulo: "T8. 01. Lugares Geométricos. Mediatriz. Bisectriz. Circunferencias - Mates 3º ESO", canal: "Profe Javi FC", vistas: 17169, megusta: 0 },
  mapa: mapa("GEOMETRÍA PLANA", "var(--pen)", [
    ["Lugares", "mediatriz · bisectriz", "var(--pen)"],
    ["Triángulo", "4 puntos notables", "var(--red)"],
    ["Pitágoras", "c² = a² + b²", "var(--leaf)"],
    ["Áreas", "polígonos · círculo", "var(--inf)"],
  ], 260),
  glosario: [
    ["Lugar geométrico", "Conjunto de todos los puntos que cumplen una propiedad."],
    ["Circunferencia", "Puntos a distancia r de un centro; es una línea."],
    ["Círculo", "Superficie limitada por una circunferencia."],
    ["Mediatriz", "Perpendicular a un segmento por su punto medio; equidista de sus extremos."],
    ["Bisectriz", "Semirrecta que divide un ángulo en dos iguales; equidista de los lados."],
    ["Circuncentro", "Corte de las mediatrices; centro de la circunferencia circunscrita."],
    ["Incentro", "Corte de las bisectrices; centro de la circunferencia inscrita."],
    ["Ortocentro", "Corte de las alturas."],
    ["Baricentro", "Corte de las medianas; centro de gravedad."],
    ["Mediana", "Segmento de un vértice al punto medio del lado opuesto."],
    ["Altura", "Perpendicular desde un vértice al lado opuesto."],
    ["Hipotenusa", "Lado opuesto al ángulo recto; el mayor."],
    ["Cateto", "Cada lado que forma el ángulo recto."],
    ["Apotema", "Distancia del centro de un polígono regular al punto medio de un lado."],
    ["Sector circular", "Parte del círculo entre dos radios."],
    ["Terna pitagórica", "Tres enteros que cumplen c² = a² + b², como 3, 4, 5."],
  ],
  situacion: {
    titulo: "Diseñamos un parque en el patio",
    reto: "El centro quiere reformar una zona triangular del patio. Vuestro equipo diseñará un plano a escala con una fuente, bancos y césped, justificando cada decisión con lugares geométricos y calculando los materiales.",
    pasos: [
      "Medid una zona real (o usad una de 20, 25 y 30 m) y dibujad el plano a escala.",
      "Situad una fuente circular lo más grande posible (incentro) y un punto de riego equidistante de las tres esquinas (circuncentro).",
      "Comprobad con el recíproco de Pitágoras qué tipo de triángulo es y si los puntos quedan dentro.",
      "Calculad el área de césped (triángulo menos fuente) y la valla del perímetro.",
      "Presupuestad los materiales con precios reales por m² y por metro lineal.",
    ],
    producto: "Un plano a escala con las construcciones y una memoria de cálculo con áreas, longitudes y presupuesto.",
    evaluacion: ["Construye con precisión mediatrices, bisectrices y puntos notables.", "Aplica Pitágoras y su recíproco correctamente.", "Calcula áreas y perímetros de figuras compuestas.", "Justifica las decisiones del diseño con argumentos geométricos."],
  },
  tarjetas: [
    ["Mediatriz", "Equidista de 2 puntos."], ["Bisectriz", "Equidista de 2 lados."],
    ["Circuncentro", "Mediatrices · pasa por vértices."], ["Incentro", "Bisectrices · toca los lados."],
    ["Baricentro", "Medianas · 2 : 1."], ["Ortocentro", "Alturas."],
    ["Pitágoras", "c² = a² + b²"], ["Cateto", "a = √(c² − b²)"],
    ["Polígono regular", "A = P · ap / 2"], ["Círculo", "L = 2πr · A = πr²"],
    ["Sector", "πr² · α / 360"], ["Corona", "π(R² − r²)"],
  ],
  familias: ["Usad una cuerda con 12 nudos para trazar un ángulo recto como los egipcios.", "Calculad juntos la diagonal de la tele de casa y comprobad sus pulgadas.", "Medid una habitación y calculad su área para elegir suelo o pintura.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido espacial y de la medida: lugares geométricos (mediatriz, bisectriz, circunferencia), rectas y puntos notables del triángulo, teorema de Pitágoras y su recíproco, perímetros y áreas de figuras planas y compuestas (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construcciones con GeoGebra que se mantienen al mover los vértices.", "Cuerda de 12 nudos y comprobación de esquinas en el patio.", "Recortar triángulos de cartulina y equilibrarlos en el baricentro.", "Diseño de un parque como situación de aprendizaje."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: geometría plana (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
