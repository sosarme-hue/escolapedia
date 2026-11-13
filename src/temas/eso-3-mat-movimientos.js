// Matemáticas 3º ESO · Movimientos en el plano. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { mapa, tabla, tx, lienzo, cajas, comparar, resumen, rot, linea, C, RD, DECRET } = require("./_eso3L1");

const r1 = (n) => Math.round(n * 10) / 10;

// Plano cartesiano propio: rango [x0, x1] × [y0, y1], dibujo con coordenadas reales.
function plano(label, [x0, x1], [y0, y1], dibujo, h = 200) {
  const W = 260, m = 18, s = Math.min((W - 2 * m) / (x1 - x0), (h - 2 * m) / (y1 - y0));
  const ox = (W - s * (x1 - x0)) / 2, oy = (h - s * (y1 - y0)) / 2;
  const sx = (x) => r1(ox + (x - x0) * s), sy = (y) => r1(h - oy - (y - y0) * s);
  let g = "";
  for (let x = Math.ceil(x0); x <= x1; x++) g += `<path d="M${sx(x)} ${sy(y0)} V${sy(y1)}" stroke="var(--line)" stroke-width="1"/>`;
  for (let y = Math.ceil(y0); y <= y1; y++) g += `<path d="M${sx(x0)} ${sy(y)} H${sx(x1)}" stroke="var(--line)" stroke-width="1"/>`;
  if (x0 <= 0 && x1 >= 0) g += `<path d="M${sx(0)} ${sy(y0)} V${sy(y1)}" stroke="var(--muted)" stroke-width="1.5"/>`;
  if (y0 <= 0 && y1 >= 0) g += `<path d="M${sx(x0)} ${sy(0)} H${sx(x1)}" stroke="var(--muted)" stroke-width="1.5"/>`;
  const H = {
    sx, sy, s,
    pol: (pts, c = "var(--pen)", o = {}) => `<polygon points="${pts.map(([x, y]) => `${sx(x)},${sy(y)}`).join(" ")}" fill="${c}" fill-opacity="${o.op ?? 0.22}" stroke="${c}" stroke-width="2.2"${o.disc ? ' stroke-dasharray="4 3"' : ""}/>`,
    seg: (a, b, c = "var(--muted)", o = {}) => `<path d="M${sx(a[0])} ${sy(a[1])} L${sx(b[0])} ${sy(b[1])}" stroke="${c}" stroke-width="${o.w || 1.6}"${o.disc ? ' stroke-dasharray="4 3"' : ""} fill="none"/>`,
    flecha: (a, b, c = "var(--red)") => {
      const X1 = sx(a[0]), Y1 = sy(a[1]), X2 = sx(b[0]), Y2 = sy(b[1]), L = Math.hypot(X2 - X1, Y2 - Y1), ux = (X2 - X1) / L, uy = (Y2 - Y1) / L;
      const p1 = [X2 - 9 * ux - 4.5 * uy, Y2 - 9 * uy + 4.5 * ux], p2 = [X2 - 9 * ux + 4.5 * uy, Y2 - 9 * uy - 4.5 * ux];
      return `<path d="M${X1} ${Y1} L${r1(X2 - 6 * ux)} ${r1(Y2 - 6 * uy)}" stroke="${c}" stroke-width="2.4"/><polygon points="${X2},${Y2} ${r1(p1[0])},${r1(p1[1])} ${r1(p2[0])},${r1(p2[1])}" fill="${c}"/>`;
    },
    pt: (p, c = "var(--red)", r = 3.5) => `<circle cx="${sx(p[0])}" cy="${sy(p[1])}" r="${r}" fill="${c}"/>`,
    t: (x, y, s, c = "var(--ink)", a = "middle", fs = 11) => tx(sx(x), sy(y), s, { fs, c, a, max: 120 }),
  };
  return lienzo(label, g + dibujo(H), h);
}

const T0 = [[1, 1], [3, 1], [1, 2]];
const mueve = (pts, f) => pts.map(([x, y]) => f(x, y));
const nombres = (H, pts, n, c, d = [[-0.3, -0.35], [0.3, -0.35], [-0.3, 0.3]]) => pts.map((p, i) => H.t(p[0] + d[i][0], p[1] + d[i][1], n[i], c)).join("");

const tipos = cajas("Los cuatro movimientos del plano y lo que hace falta para definir cada uno", [
  ["Traslación", ["un vector", "desliza"], "var(--pen)"], ["Giro", ["centro y ángulo", "gira"], "var(--red)"],
  ["Simetría central", ["un centro", "giro de 180°"], "var(--leaf)"], ["Simetría axial", ["un eje", "refleja"], "var(--inf)"],
], "Movimientos");

const vector = plano("Vector de origen A uno, uno y extremo B cinco, cuatro: coordenadas cuatro, tres y módulo cinco", [0, 6], [0, 5], (H) => H.seg([1, 1], [5, 1], "var(--leaf)", { disc: true }) + H.seg([5, 1], [5, 4], "var(--leaf)", { disc: true }) + H.flecha([1, 1], [5, 4]) + H.pt([1, 1], "var(--ink)") + H.t(0.8, 0.45, "A") + H.t(5.3, 4.35, "B") + H.t(3, 0.45, "4", "var(--leaf)") + H.t(5.35, 2.4, "3", "var(--leaf)", "start") + H.t(2.2, 3.5, "v = (4, 3)", "var(--red)") + H.t(2.2, 2.9, "|v| = 5", "var(--red)"), 196);

const suma = plano("Suma de vectores: se coloca v a continuación de u y la suma va del origen de u al extremo de v", [0, 5], [0, 4], (H) => H.flecha([0, 0], [3, 1], "var(--pen)") + H.flecha([3, 1], [4, 3], "var(--leaf)") + H.flecha([0, 0], [4, 3], "var(--red)") + H.t(1.8, 0.25, "u = (3, 1)", "var(--pen)") + H.t(3.65, 1.7, "v", "var(--leaf)", "start") + H.t(1.3, 2.2, "u + v = (4, 3)", "var(--red)"), 186);

const traslacion = plano("Traslación de un triángulo según el vector tres, dos: cada vértice se desplaza lo mismo", [0, 7], [0, 5], (H) => {
  const T1 = mueve(T0, (x, y) => [x + 3, y + 2]);
  return H.pol(T0, "var(--pen)") + H.pol(T1, "var(--leaf)") + T0.map((p, i) => H.seg(p, T1[i], "var(--red)", { disc: true })).join("") + H.flecha([4, 0.4], [6.95, 0.4 + 2 * 0.98]) + nombres(H, T0, ["A", "B", "C"], "var(--pen)") + nombres(H, T1, ["A'", "B'", "C'"], "var(--leaf)") + H.t(6.9, 0.2, "v = (3, 2)", "var(--red)", "end");
}, 196);

const giro = plano("Giro de noventa grados en sentido antihorario con centro en el origen", [-3, 4], [-1, 4], (H) => {
  const T1 = mueve(T0, (x, y) => [-y, x]);
  return H.pol(T0, "var(--pen)") + H.pol(T1, "var(--leaf)") + H.seg([0, 0], [3, 1], "var(--red)", { disc: true }) + H.seg([0, 0], [-1, 3], "var(--red)", { disc: true }) + `<path d="M${H.sx(1.9)} ${H.sy(0.63)} A ${r1(2 * H.s)} ${r1(2 * H.s)} 0 0 0 ${H.sx(-0.63)} ${H.sy(1.9)}" fill="none" stroke="var(--red)" stroke-width="1.8"/>` + H.pt([0, 0], "var(--ink)") + H.t(0.25, -0.5, "O") + nombres(H, T0, ["A", "B", "C"], "var(--pen)") + H.t(-1.35, 3.3, "B'", "var(--leaf)") + H.t(-2.3, 0.6, "C'", "var(--leaf)") + H.t(-0.6, 0.6, "A'", "var(--leaf)") + H.t(1.6, 2.4, "90°", "var(--red)");
}, 196);

const giroCoord = cajas("Coordenadas de un punto después de un giro con centro en el origen, en sentido antihorario", [
  ["90°", ["(x, y) → (−y, x)", "(3, 1) → (−1, 3)"], "var(--pen)"], ["180°", ["(x, y) → (−x, −y)", "(3, 1) → (−3, −1)"], "var(--red)"],
  ["270° (−90°)", ["(x, y) → (y, −x)", "(3, 1) → (1, −3)"], "var(--leaf)"], ["360°", ["(x, y) → (x, y)", "identidad"], "var(--inf)"],
], "Giros con centro O");

const central = plano("Simetría central respecto del origen: cada punto y su imagen están alineados con O y a la misma distancia", [-4, 4], [-3, 3], (H) => {
  const T1 = mueve(T0, (x, y) => [-x, -y]);
  return H.pol(T0, "var(--pen)") + H.pol(T1, "var(--leaf)") + T0.map((p, i) => H.seg(p, T1[i], "var(--red)", { disc: true })).join("") + H.pt([0, 0], "var(--ink)") + H.t(0.35, -0.55, "O") + nombres(H, T0, ["A", "B", "C"], "var(--pen)", [[0.1, 0.45], [0.3, -0.45], [-0.1, 0.4]]) + nombres(H, T1, ["A'", "B'", "C'"], "var(--leaf)", [[-0.1, -0.6], [-0.3, 0.3], [0.1, -0.55]]);
}, 186);

const axial = plano("Simetría axial respecto del eje vertical: la figura se refleja como en un espejo y cambia de orientación", [-4, 4], [0, 3.5], (H) => {
  const P = [[1, 1], [3, 1], [1, 2.5]], P1 = mueve(P, (x, y) => [-x, y]);
  return H.seg([0, 0], [0, 3.5], "var(--red)", { w: 2.6 }) + H.pol(P, "var(--pen)") + H.pol(P1, "var(--leaf)") + H.seg([3, 1], [-3, 1], "var(--muted)", { disc: true }) + H.t(0.25, 3.15, "e", "var(--red)", "start", 13) + H.t(2, 0.5, "F", "var(--pen)") + H.t(-2, 0.5, "F'", "var(--leaf)") + H.t(1.5, 3.1, "d", "var(--muted)") + H.t(-1.5, 3.1, "d", "var(--muted)") + H.seg([0.2, 2.8], [2.8, 2.8], "var(--muted)") + H.seg([-0.2, 2.8], [-2.8, 2.8], "var(--muted)");
}, 170);

const axialCoord = plano("Simétricos de un punto P tres, uno respecto del eje X, del eje Y y de la bisectriz y igual a x", [-4, 4], [-2, 4], (H) => H.seg([-2, -2], [4, 4], "var(--inf)", { disc: true }) + H.pt([3, 1], "var(--red)", 4) + H.pt([3, -1], "var(--pen)", 4) + H.pt([-3, 1], "var(--leaf)", 4) + H.pt([1, 3], "var(--inf)", 4) + H.t(3.3, 1.3, "P(3, 1)", "var(--red)", "start") + H.t(2.9, -1.6, "(3, −1) eje X", "var(--pen)") + H.t(-3, 1.45, "(−3, 1) eje Y", "var(--leaf)") + H.t(1.3, 3.3, "(1, 3) y = x", "var(--inf)", "start"), 190);

const ejesFig = (() => {
  const sq = `<rect x="16" y="46" width="64" height="64" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.2"/>` + [linea(48, 38, 48, 118, "var(--red)", { disc: true }), linea(8, 78, 88, 78, "var(--red)", { disc: true }), linea(10, 40, 86, 116, "var(--red)", { disc: true }), linea(86, 40, 10, 116, "var(--red)", { disc: true })].join("");
  const h = 64 * Math.sqrt(3) / 2, ax = 130, by = 110, ty = r1(by - h);
  const trg = `<polygon points="${ax - 32},${by} ${ax + 32},${by} ${ax},${ty}" fill="var(--leaf)" fill-opacity=".18" stroke="var(--leaf)" stroke-width="2.2"/>` + linea(ax, ty - 8, ax, by + 8, "var(--red)", { disc: true }) + linea(ax - 32 - 6, by + 3.5, ax + 16 + 6, r1((by + ty) / 2 - 3.5), "var(--red)", { disc: true }) + linea(ax + 32 + 6, by + 3.5, ax - 16 - 6, r1((by + ty) / 2 - 3.5), "var(--red)", { disc: true });
  const re = `<rect x="182" y="56" width="66" height="44" fill="var(--inf)" fill-opacity=".18" stroke="var(--inf)" stroke-width="2.2"/>` + linea(215, 48, 215, 108, "var(--red)", { disc: true }) + linea(176, 78, 254, 78, "var(--red)", { disc: true });
  return lienzo("Ejes de simetría de un cuadrado, un triángulo equilátero y un rectángulo", sq + trg + re + rot([[48, 140, "cuadrado: 4", "var(--pen)"], [130, 140, "equilátero: 3", "var(--leaf)"], [215, 140, "rectángulo: 2", "var(--inf)"], [130, 22, "Ejes de simetría", "var(--muted)"]], 11.5), 156);
})();

const composicion = plano("Composición de dos simetrías de ejes paralelos separados dos unidades: equivale a una traslación de cuatro unidades", [-4, 6], [-1, 3.5], (H) => {
  const F = [[-3, 1], [-2, 1], [-3, 2.5]], F1 = mueve(F, (x, y) => [2 - x, y]), F2 = mueve(F1, (x, y) => [6 - x, y]);
  return H.seg([1, -1], [1, 3.5], "var(--red)", { w: 2.4 }) + H.seg([3, -1], [3, 3.5], "var(--red)", { w: 2.4 }) + H.pol(F, "var(--pen)") + H.pol(F1, "var(--leaf)", { op: 0.12, disc: true }) + H.pol(F2, "var(--inf)") + H.flecha([-3, -0.3], [1, -0.3], "var(--muted)") + H.t(1.15, 3.15, "e₁", "var(--red)", "start") + H.t(3.15, 3.15, "e₂", "var(--red)", "start") + H.t(-2.6, 3, "F", "var(--pen)") + H.t(4.6, 3, "F'", "var(--leaf)") + H.t(1.5, 0.45, "F''", "var(--inf)") + H.t(3.5, -0.55, "traslación = 2d", "var(--muted)", "middle");
}, 160);

const bandera = (x, y, c, esp = false, inv = false) => `<g transform="translate(${x} ${y}) scale(${esp ? -1 : 1} ${inv ? -1 : 1})"><path d="M0 0 V -34 L 22 -26 L 0 -18" fill="${c}" fill-opacity=".85" stroke="${c}" stroke-width="2"/></g>`;
const friso = lienzo("Frisos: un motivo que se repite por traslación (arriba) y por traslación con simetría (abajo)", [0, 1, 2, 3, 4, 5].map((i) => bandera(20 + i * 40, 66, "var(--pen)")).join("") + linea(10, 70, 250, 70, "var(--line)") + [0, 1, 2, 3, 4, 5].map((i) => bandera(20 + i * 40, i % 2 ? 106 : 142, "var(--leaf)", false, i % 2 === 1)).join("") + linea(10, 124, 250, 124, "var(--red)", { disc: true }) + rot([[130, 18, "Solo traslación", "var(--pen)"], [130, 168, "Traslación + simetría (eje rojo)", "var(--leaf)"]], 11.5), 178);

const mosaico = (() => {
  const r = 17, w = Math.sqrt(3) * r; let g = "";
  for (let fila = 0; fila < 5; fila++) for (let col = 0; col < 8; col++) {
    const cx = 10 + col * w + (fila % 2 ? w / 2 : 0), cy = 22 + fila * 1.5 * r;
    if (cx > 250 || cy > 140) continue;
    const pts = [...Array(6)].map((_, k) => { const a = Math.PI / 6 + (k * Math.PI) / 3; return `${r1(cx + r * Math.cos(a))},${r1(cy + r * Math.sin(a))}`; }).join(" ");
    g += `<polygon points="${pts}" fill="${["var(--pen)", "var(--leaf)", "var(--sun)"][(col + fila) % 3]}" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.4"/>`;
  }
  return lienzo("Mosaico regular de hexágonos: en cada vértice se juntan tres ángulos de ciento veinte grados", `<clipPath id="mosc"><rect x="8" y="8" width="244" height="132" rx="8"/></clipPath><g clip-path="url(#mosc)">${g}</g>` + rot([[130, 160, "3 · 120° = 360° → sin huecos", "var(--ink)"]], 12), 172);
})();

const roseton = (() => {
  const c = [130, 86];
  const petalos = [...Array(6)].map((_, k) => `<ellipse cx="${c[0]}" cy="${c[1] - 34}" rx="13" ry="30" transform="rotate(${k * 60} ${c[0]} ${c[1]})" fill="${k % 2 ? "var(--red)" : "var(--pen)"}" fill-opacity=".3" stroke="${k % 2 ? "var(--red)" : "var(--pen)"}" stroke-width="2"/>`).join("");
  return lienzo("Rosetón con simetría de giro de orden seis: coincide consigo mismo al girar sesenta grados", `<circle cx="${c[0]}" cy="${c[1]}" r="72" fill="none" stroke="var(--muted)" stroke-width="1.5"/>` + petalos + `<circle cx="${c[0]}" cy="${c[1]}" r="8" fill="var(--sun)"/>` + rot([[130, 176, "Orden 6: giros de 60°", "var(--ink)"]], 12), 186);
})();

const homotecia = plano("Homotecia de centro O y razón dos: la figura se amplía al doble; no es un movimiento porque cambia el tamaño", [0, 7], [0, 5], (H) => {
  const T1 = mueve(T0, (x, y) => [2 * x, 2 * y]);
  return H.seg([0, 0], [6, 2], "var(--red)", { disc: true }) + H.seg([0, 0], [2, 4], "var(--red)", { disc: true }) + H.pol(T1, "var(--leaf)") + H.pol(T0, "var(--pen)") + H.pt([0, 0], "var(--ink)") + H.t(0.3, 0.35, "O", "var(--ink)", "start") + H.t(4.2, 4.2, "razón k = 2", "var(--red)") + H.t(2.5, 1.35, "F", "var(--pen)") + H.t(4.6, 2.5, "F'", "var(--leaf)");
}, 196);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Movimientos en el plano",
  minutos: 100,
  objetivos: [
    "Reconocer traslaciones, giros y simetrías como movimientos que conservan forma y tamaño",
    "Trabajar con vectores: coordenadas, módulo, suma y producto por un número",
    "Aplicar movimientos a figuras en el plano cartesiano y obtener las coordenadas de las imágenes",
    "Identificar ejes y centros de simetría en figuras, frisos, mosaicos y rosetones",
    "Distinguir los movimientos de otras transformaciones como la homotecia",
  ],
  claves: ["movimiento", "vector", "traslación", "giro", "simetría central", "simetría axial", "mosaico", "friso"],
  pregunta: {
    texto: "Mira un mosaico de la Alhambra: un mismo dibujo se repite cientos de veces sin dejar huecos. ¿Cómo lo consiguieron sus artesanos?",
    respuesta: "Moviendo una pieza base con <mark>traslaciones, giros y simetrías</mark>. Los artistas andalusíes del siglo XIV dominaban esos movimientos tan bien que en la Alhambra aparecen casi todos los tipos posibles de mosaicos periódicos que la matemática moderna ha clasificado.",
  },
  lectura: {
    titulo: "Escher y la Alhambra",
    html: `<p>En 1922 un joven artista holandés llamado Maurits Cornelis Escher visitó la Alhambra de Granada. Pasó días enteros copiando en su cuaderno los azulejos de los palacios nazaríes: estrellas, lazos y figuras que encajaban unas con otras sin dejar un solo hueco. Volvió en 1936 con su esposa y siguió dibujando. Aquellos mosaicos le cambiaron la vida.</p><p>Los artesanos andalusíes no podían representar personas ni animales en la decoración de los palacios, así que llevaron la geometría hasta el límite. Escher, en cambio, se preguntó qué pasaría si las piezas fueran pájaros, peces, lagartos o jinetes. Empezó a deformar polígonos con cuidado: lo que quitaba de un lado lo añadía en el lado contrario, trasladado o girado. Así nacieron sus famosas teselaciones, en las que los peces se convierten en pájaros sin que se vea la costura.</p><p>Muchos años después, los matemáticos demostraron que solo existen 17 tipos distintos de mosaicos periódicos en el plano, y se discute cuántos de ellos aparecen en la Alhambra. Detrás de todos hay únicamente cuatro movimientos: traslaciones, giros, simetrías axiales y simetrías con deslizamiento. En este tema aprenderás a describirlos con precisión.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Transformaciones y movimientos</h3><p>Una <b>transformación geométrica</b> es una regla que a cada punto P del plano le asigna otro punto P', llamado su <b>imagen</b> u homólogo. Cuando la transformación conserva las <b>distancias</b> (y, por tanto, la forma y el tamaño de las figuras) se llama <b>movimiento</b> o <b>isometría</b>.</p><p>La figura original y su imagen por un movimiento son <b>congruentes</b>: se podrían superponer exactamente. Hay cuatro tipos de movimientos en el plano:</p><ul><li><b>Traslación</b>: desliza la figura en una dirección; se define con un vector.</li><li><b>Giro</b>: la hace rotar alrededor de un punto; se define con un centro y un ángulo.</li><li><b>Simetría central</b>: un giro de 180°; se define con un centro.</li><li><b>Simetría axial</b>: la refleja como un espejo; se define con un eje.</li></ul><p>Los movimientos pueden ser <b>directos</b>, si conservan la orientación (traslación y giro: una mano derecha sigue siendo derecha), o <b>inversos</b>, si la cambian (simetría axial: la mano derecha se convierte en izquierda).</p>`, svg: tipos },
    { html: `<h3>1.2 Vectores</h3><p>Un <b>vector</b> fijo AB es un segmento orientado: tiene un origen A y un extremo B, y se dibuja como una flecha. Tiene tres características: <b>módulo</b> (su longitud), <b>dirección</b> (la de la recta que lo contiene) y <b>sentido</b> (hacia dónde apunta la flecha).</p><p>Si A(x₁, y₁) y B(x₂, y₂), las <b>coordenadas</b> del vector se obtienen restando extremo menos origen:</p><p class="formula"><span>AB = (x₂ − x₁, y₂ − y₁)</span></p><p>Para A(1, 1) y B(5, 4): AB = (4, 3), es decir, 4 unidades a la derecha y 3 hacia arriba. El <b>módulo</b> se calcula con Pitágoras: <mark>|v| = √(a² + b²)</mark> = √(16 + 9) = 5.</p><p>Dos vectores con el mismo módulo, dirección y sentido son <b>equivalentes</b>, aunque estén en distinto lugar: tienen las mismas coordenadas. Por eso se habla del vector v = (4, 3) sin importar dónde empiece. En un videojuego, el movimiento de un personaje en cada fotograma es un vector: «avanza 4 píxeles a la derecha y 3 hacia arriba».</p>`, svg: vector },
    { html: `<h3>1.3 Operaciones con vectores</h3><p><b>Suma</b>: para sumar u y v se colocan uno a continuación del otro (el origen de v en el extremo de u); el vector suma va desde el origen de u hasta el extremo de v. Con coordenadas, se suman componente a componente: (3, 1) + (1, 2) = (4, 3). También se puede hacer con la <b>regla del paralelogramo</b>, poniendo los dos vectores con el mismo origen.</p><p><b>Producto por un número</b>: k · v tiene la misma dirección que v, su módulo se multiplica por |k| y, si k es negativo, cambia de sentido. 2 · (3, 1) = (6, 2); −1 · (3, 1) = (−3, −1), que es el <b>vector opuesto</b>.</p><p><b>Resta</b>: u − v = u + (−v). Con coordenadas: (3, 1) − (1, 2) = (2, −1).</p><p>Las fuerzas, las velocidades y los desplazamientos son vectores. Si un barco navega a (4, 0) km/h y la corriente lo empuja a (0, 3) km/h, su movimiento real es la suma (4, 3), con una velocidad de 5 km/h.</p>`, svg: suma },
    { html: `<h3>1.4 Traslaciones</h3><p>Una <b>traslación</b> de vector v es el movimiento que lleva cada punto P a un punto P' tal que el vector PP' es igual a v. Todos los puntos se desplazan la misma distancia, en la misma dirección y en el mismo sentido.</p><p>En coordenadas, si v = (a, b), la traslación suma el vector a cada punto:</p><p class="formula"><span>P(x, y) → P'(x + a, y + b)</span></p><p>Ejemplo: el triángulo A(1, 1), B(3, 1), C(1, 2) trasladado según v = (3, 2) da A'(4, 3), B'(6, 3), C'(4, 4).</p><p>Propiedades: la figura trasladada es congruente y conserva la orientación (movimiento directo); los segmentos se transforman en segmentos <b>paralelos</b> a los originales; ningún punto queda fijo (salvo si v = (0, 0)). Si se aplican dos traslaciones seguidas, de vectores u y v, el resultado es una sola traslación de vector u + v. Las escaleras mecánicas, los ascensores y un cajón que se abre hacen traslaciones.</p>`, svg: traslacion, video: { id: "C3Ydl25rESg", titulo: "Traslacion en el plano cartesiano", canal: "Matemáticas profe Alex", vistas: 1441883, megusta: 0 } },
    { html: `<h3>2.1 Giros</h3><p>Un <b>giro</b> de centro O y ángulo α lleva cada punto P a un punto P' de forma que <b>OP = OP'</b> y el ángulo POP' mide α. Es decir, cada punto se mueve sobre una circunferencia de centro O.</p><p>El ángulo tiene <b>sentido</b>: por convenio, es <b>positivo</b> si el giro es contrario a las agujas del reloj (antihorario) y <b>negativo</b> si es a favor (horario). Un giro de −90° equivale a uno de 270°.</p><p>Para girar una figura con regla, compás y transportador: se une cada vértice con el centro, se mide el ángulo α a partir de ese segmento en el sentido indicado y se lleva la misma distancia con el compás. Después se unen los vértices obtenidos.</p><p>Propiedades: el giro es un movimiento <b>directo</b> (conserva la orientación) y el único punto fijo es el centro. Las manecillas del reloj, una noria, las aspas de un molino o el volante de un coche giran. La aguja de los minutos gira −6° cada minuto y −360° cada hora.</p>`, svg: giro, video: { id: "kXwJOefEjJs", titulo: "ROTACIÓN Super facil", canal: "Daniel Carreón", vistas: 1785060, megusta: 0 } },
    { html: `<h3>2.2 Giros en coordenadas y figuras con simetría de giro</h3><p>Cuando el centro es el origen O(0, 0), los giros de ángulos rectos tienen reglas muy sencillas:</p>${tabla(["Giro (antihorario)", "Imagen de (x, y)", "Ejemplo (3, 1)"], [["90°", "(−y, x)", "(−1, 3)"], ["180°", "(−x, −y)", "(−3, −1)"], ["270° = −90°", "(y, −x)", "(1, −3)"]])}<p>Se pueden comprobar con el dibujo: al girar 90°, lo que estaba a la derecha pasa a estar arriba.</p><p>Una figura tiene <b>simetría de giro</b> (o de rotación) si al girarla un cierto ángulo alrededor de su centro coincide consigo misma. El <b>orden</b> es el número de veces que coincide en una vuelta completa. Un cuadrado tiene orden 4 (giros de 90°), un triángulo equilátero orden 3 (120°), un hexágono regular orden 6 (60°) y una estrella de cinco puntas orden 5 (72°). El ángulo mínimo es 360° dividido entre el orden. Muchos logotipos, tapacubos y flores tienen simetría de giro.</p>`, svg: giroCoord },
    { html: `<h3>2.3 Simetría central</h3><p>La <b>simetría central</b> de centro O lleva cada punto P a un punto P' tal que <b>O es el punto medio</b> del segmento PP'. Es lo mismo que un <b>giro de 180°</b> con centro O, así que es un movimiento directo.</p><p>Con centro en el origen, la regla es <mark>(x, y) → (−x, −y)</mark>: se cambian de signo las dos coordenadas. El triángulo A(1, 1), B(3, 1), C(1, 2) se transforma en A'(−1, −1), B'(−3, −1), C'(−1, −2).</p><p>Para construirla a mano: se une cada vértice con O, se prolonga el segmento al otro lado y se lleva la misma distancia. La figura queda «del revés», pero sin reflejarse.</p><p>Una figura tiene <b>centro de simetría</b> si coincide con su simétrica respecto de ese punto: el paralelogramo (en el corte de sus diagonales), el círculo, el rectángulo, la letra S o la N. El triángulo no tiene centro de simetría. Las cartas de la baraja francesa están diseñadas con simetría central para leerse igual en cualquier posición.</p>`, svg: central },
    { html: `<h3>3.1 Simetría axial</h3><p>La <b>simetría axial</b> de eje e lleva cada punto P a un punto P' de forma que el eje es la <b>mediatriz</b> del segmento PP': PP' es perpendicular al eje y los dos puntos están a la misma distancia de él, uno a cada lado.</p><p>Es el efecto de un <b>espejo</b> colocado sobre el eje. Por eso cambia la orientación de las figuras: es un movimiento <b>inverso</b>. Si escribes tu nombre y lo miras en un espejo, las letras aparecen invertidas; la palabra AMBULANCIA se escribe al revés en el frontal de las ambulancias para que se lea bien por el retrovisor.</p><p>Los puntos del eje son <b>puntos fijos</b>: se transforman en sí mismos. Para construir la simétrica de un polígono, se trazan perpendiculares al eje desde cada vértice y se lleva la misma distancia al otro lado.</p><p>La simetría axial es la base de los otros movimientos: cualquier movimiento del plano se puede obtener combinando, como mucho, tres simetrías axiales.</p>`, svg: axial, video: { id: "RaongOgoEvg", titulo: "SIMETRÍA AXIAL Y CENTRAL Para Principiantes", canal: "Daniel Carreón", vistas: 867787, megusta: 0 } },
    { html: `<h3>3.2 Simetrías axiales en coordenadas</h3><p>Con los ejes de coordenadas como ejes de simetría, las imágenes se obtienen cambiando signos:</p><ul><li>Respecto del <b>eje X</b>: (x, y) → (x, −y). La x se mantiene y la y cambia de signo.</li><li>Respecto del <b>eje Y</b>: (x, y) → (−x, y).</li><li>Respecto de la <b>bisectriz</b> y = x: (x, y) → (y, x). Se intercambian las coordenadas.</li></ul><p>Para P(3, 1): (3, −1), (−3, 1) y (1, 3).</p><p>Si el eje es una recta vertical x = k, la distancia se mide en horizontal: la imagen de (x, y) es (2k − x, y). Por ejemplo, el simétrico de (5, 2) respecto de x = 3 es (1, 2), porque 5 está 2 unidades a la derecha del eje y 1 está 2 unidades a la izquierda. Con una recta horizontal y = k, la imagen es (x, 2k − y).</p><p>Un error frecuente es confundir la simetría respecto del eje X con la simetría central: en la primera solo cambia de signo la y; en la segunda, las dos coordenadas.</p>`, svg: axialCoord },
    { html: `<h3>3.3 Ejes de simetría de las figuras</h3><p>Una figura tiene un <b>eje de simetría</b> si, al doblarla por él, las dos mitades coinciden. Es decir, la figura es igual a su simétrica respecto de ese eje.</p><ul><li><b>Polígonos regulares</b>: tienen tantos ejes como lados. El triángulo equilátero, 3; el cuadrado, 4; el hexágono regular, 6.</li><li><b>Rectángulo</b> (no cuadrado): 2 ejes, por los puntos medios de los lados. Sus diagonales <b>no</b> son ejes de simetría.</li><li><b>Rombo</b>: 2 ejes, sus diagonales.</li><li><b>Triángulo isósceles</b>: 1 eje, la altura sobre el lado desigual.</li><li><b>Círculo</b>: infinitos ejes, todos sus diámetros.</li><li><b>Paralelogramo</b> no rectángulo ni rombo: ninguno (aunque sí tiene centro de simetría).</li></ul><p>Muchas letras mayúsculas tienen ejes: la A, la M y la T tienen un eje vertical; la B, la C y la E, uno horizontal; la H y la X, dos. En la naturaleza, la mayoría de los animales tienen un eje de simetría bilateral, y las mariposas son el ejemplo más claro.</p>`, svg: ejesFig },
    { html: `<h3>3.4 Composición de movimientos</h3><p>Aplicar un movimiento y después otro se llama <b>componer</b> movimientos. El resultado es siempre otro movimiento. Hay algunos resultados muy útiles:</p><ul><li>Dos traslaciones de vectores u y v equivalen a una traslación de vector <b>u + v</b>.</li><li>Dos giros con el mismo centro equivalen a un giro de ángulo igual a la <b>suma</b> de los ángulos.</li><li>Dos simetrías axiales con ejes <b>paralelos</b> separados una distancia d equivalen a una <b>traslación</b> de módulo 2d, perpendicular a los ejes.</li><li>Dos simetrías axiales con ejes que se <b>cortan</b> en O formando un ángulo α equivalen a un <b>giro</b> de centro O y ángulo 2α.</li></ul><p>Fíjate en que dos movimientos inversos dan uno directo, igual que «menos por menos es más». Además, el orden importa: en general, no da lo mismo girar y luego trasladar que trasladar y luego girar.</p><p>La composición de una simetría axial con una traslación paralela al eje se llama <b>simetría con deslizamiento</b>: es la que siguen las huellas que dejamos al caminar.</p>`, svg: composicion },
    { html: `<h3>4.1 Frisos</h3><p>Un <b>friso</b> es una decoración formada por un motivo que se repite a lo largo de una franja, mediante una <b>traslación</b> que se aplica una y otra vez. Aparecen en cenefas de azulejos, bordes de tejidos, rejas, barandillas y en los edificios clásicos.</p><p>Además de la traslación, el motivo puede combinarse con otros movimientos: simetrías respecto de un eje horizontal (el que recorre el friso), respecto de ejes verticales, giros de 180° o simetrías con deslizamiento. Se ha demostrado que, según qué movimientos dejen el friso igual, solo hay <b>7 tipos</b> distintos de frisos.</p><p>Para diseñar un friso: 1) dibuja un motivo sencillo y no simétrico, como una bandera o una letra F; 2) elige un vector de traslación; 3) decide si añades simetrías o giros; 4) repite el motivo. En el dibujo, la fila de abajo alterna el motivo con su simétrico respecto del eje rojo y lo desplaza: es una simetría con deslizamiento, como las huellas de los pies.</p>`, svg: friso },
    { html: `<h3>4.2 Mosaicos</h3><p>Un <b>mosaico</b> o teselación es un recubrimiento del plano con piezas que encajan <b>sin huecos ni superposiciones</b>. Los mosaicos periódicos se generan trasladando un motivo en dos direcciones distintas.</p><p>Un mosaico es <b>regular</b> si usa un solo tipo de polígono regular. Para que encajen alrededor de un vértice, los ángulos que se juntan deben sumar <mark>360°</mark>. Solo hay tres posibilidades:</p><ul><li><b>Triángulos equiláteros</b>: 6 · 60° = 360°.</li><li><b>Cuadrados</b>: 4 · 90° = 360°.</li><li><b>Hexágonos regulares</b>: 3 · 120° = 360°.</li></ul><p>El pentágono no sirve (108° no divide a 360°), ni ningún polígono de más de seis lados. Combinando varios polígonos regulares se obtienen los <b>mosaicos semirregulares</b>, como el de octógonos y cuadrados (135° + 135° + 90° = 360°) de muchos suelos.</p><p>Los artistas como Escher deformaban un polígono que tesela: lo que recortaban de un lado lo añadían, trasladado o girado, en otro lado. Así conseguían piezas con forma de animal que siguen encajando.</p>`, svg: mosaico, video: { id: "wwUW2zUD3qM", titulo: "Los mosaicos", canal: "Matematiqueando", vistas: 49922, megusta: 0 } },
    { html: `<h3>4.3 Rosetones y simetría en el arte y la naturaleza</h3><p>Un <b>rosetón</b> es una figura que tiene un <b>centro de giro</b>: al girarla un ángulo concreto coincide consigo misma, pero no se repite por traslación. Los rosetones de las catedrales góticas, los mandalas, las ruedas de los coches o los copos de nieve lo son.</p><p>Hay dos familias de rosetones: los que solo tienen <b>simetría de giro</b> (como un molinillo o la hélice de un barco, que «giran» en un sentido) y los que además tienen <b>ejes de simetría</b> que pasan por el centro (como una flor de seis pétalos iguales, que tiene orden 6 y seis ejes).</p><p>La naturaleza está llena de simetrías: la estrella de mar tiene simetría de orden 5; los copos de nieve, de orden 6, porque así se ordenan las moléculas de agua en el hielo; los panales, mosaicos de hexágonos. Las simetrías también son clave en el diseño: logotipos de marcas, señales de tráfico o patrones textiles. Buscar los movimientos que dejan una figura igual es una forma de analizar y crear diseños.</p>`, svg: roseton },
    { html: `<h3>4.4 Homotecias y semejanza: transformaciones que no son movimientos</h3><p>No todas las transformaciones son movimientos. Una <b>homotecia</b> de centro O y razón k lleva cada punto P a otro P' alineado con O y P, de modo que <mark>OP' = k · OP</mark>. Si |k| &gt; 1, la figura se <b>amplía</b>; si |k| &lt; 1, se <b>reduce</b>. Con centro en el origen, la imagen de (x, y) es (kx, ky).</p><p>La homotecia conserva la <b>forma</b> (los ángulos y las proporciones) pero no el tamaño: las longitudes se multiplican por |k| y las áreas, por k². Por eso <b>no es un movimiento</b>. Figuras con la misma forma y distinto tamaño se llaman <b>semejantes</b>.</p><p>Ejemplo: el triángulo A(1, 1), B(3, 1), C(1, 2) con razón 2 da A'(2, 2), B'(6, 2), C'(2, 4). Sus lados miden el doble y su área es 4 veces mayor.</p><p>Las homotecias están detrás de las fotocopias ampliadas, los proyectores, los mapas y los planos a escala, y la función «zoom» de cualquier pantalla.</p>`, svg: homotecia },
  ],
  ejemplos: [
    { enunciado: "Halla las coordenadas y el módulo del vector de A(−2, 1) a B(4, 9).", pasos: ["AB = (4 − (−2), 9 − 1) = (6, 8).", "|AB| = √(36 + 64)."], resultado: "AB = (6, 8); módulo 10." },
    { enunciado: "Traslada el punto P(−3, 5) según v = (4, −2).", pasos: ["P' = (−3 + 4, 5 − 2)."], resultado: "P'(1, 3)." },
    { enunciado: "Gira 90° (antihorario, centro O) el punto (2, 5).", pasos: ["(x, y) → (−y, x)."], resultado: "(−5, 2)." },
    { enunciado: "Halla el simétrico de (4, −3) respecto del eje X, del eje Y y del origen.", pasos: ["Eje X: (4, 3).", "Eje Y: (−4, −3).", "Origen: (−4, 3)."], resultado: "(4, 3), (−4, −3) y (−4, 3)." },
    { enunciado: "¿Qué vector de traslación lleva A(2, 7) a A'(−1, 3)?", pasos: ["v = A' − A = (−1 − 2, 3 − 7)."], resultado: "v = (−3, −4), de módulo 5." },
    { enunciado: "Se aplican dos simetrías de ejes x = 1 y x = 4 al punto (0, 2). ¿Qué movimiento resulta?", pasos: ["Respecto de x = 1: (2, 2).", "Respecto de x = 4: (6, 2)."], resultado: "Una traslación de vector (6, 0), el doble de la distancia entre los ejes." },
  ],
  errores: [
    "Calcular las coordenadas de un vector como origen menos extremo.",
    "Confundir la simetría respecto del eje X (cambia y) con la del eje Y (cambia x).",
    "Girar en sentido horario cuando el ángulo es positivo.",
    "Pensar que la diagonal de un rectángulo es eje de simetría.",
    "Creer que la homotecia es un movimiento porque conserva la forma.",
    "Suponer que el orden de dos movimientos compuestos no importa.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di qué movimiento es: una puerta que se abre, un cajón que se abre, tu imagen en un espejo.", sol: "Giro; traslación; simetría axial." },
    { nivel: "básico", q: "Halla las coordenadas del vector AB con A(2, −1) y B(6, 2), y su módulo.", sol: "(4, 3); módulo 5." },
    { nivel: "básico", q: "Calcula u + v, u − v y 3u con u = (2, −1) y v = (−1, 4).", sol: "(1, 3); (3, −5); (6, −3)." },
    { nivel: "básico", q: "Traslada el triángulo A(0, 0), B(2, 0), C(1, 3) según el vector (−3, 1).", sol: "A'(−3, 1), B'(−1, 1), C'(−2, 4)." },
    { nivel: "básico", q: "Halla los simétricos de P(−2, 5) respecto del eje X, del eje Y y del origen.", sol: "(−2, −5); (2, 5); (2, −5)." },
    { nivel: "básico", q: "Gira 180° con centro O el punto (−4, 1).", sol: "(4, −1)." },
    { nivel: "básico", q: "¿Cuántos ejes de simetría tienen un cuadrado, un rectángulo, un rombo, un círculo y un triángulo isósceles?", sol: "4; 2; 2; infinitos; 1." },
    { nivel: "básico", q: "¿Qué letras de la palabra MATEMÁTICAS (sin tilde) tienen eje de simetría? ¿Alguna tiene centro de simetría?", sol: "M, A, T, E, I, C tienen eje (S no). La S tiene centro de simetría." },
    { nivel: "básico", q: "¿Qué orden de giro tiene un hexágono regular? ¿Con qué ángulo mínimo coincide consigo mismo?", sol: "Orden 6; 60°." },
    { nivel: "básico", q: "¿Qué movimientos son directos y cuáles inversos?", sol: "Directos: traslación, giro, simetría central. Inverso: simetría axial." },
    { nivel: "básico", q: "¿Con qué polígonos regulares se puede hacer un mosaico regular? ¿Por qué no con pentágonos?", sol: "Triángulos, cuadrados y hexágonos. 360/108 no es entero." },
    { nivel: "básico", q: "Halla el vector que traslada P(3, 4) a P'(−2, 6).", sol: "(−5, 2)." },
    { nivel: "medio", q: "Gira 90° en sentido antihorario con centro O el triángulo A(1, 0), B(4, 0), C(4, 2).", sol: "A'(0, 1), B'(0, 4), C'(−2, 4)." },
    { nivel: "medio", q: "Gira −90° (horario) con centro O el punto (3, 5).", sol: "(y, −x) = (5, −3)." },
    { nivel: "medio", q: "Halla el simétrico de (6, 1) respecto de la recta x = 2 y respecto de y = −1.", sol: "(−2, 1); (6, −3)." },
    { nivel: "medio", q: "Halla el simétrico de (−3, 7) respecto de la bisectriz y = x.", sol: "(7, −3)." },
    { nivel: "medio", q: "Un barco navega con velocidad (6, 0) km/h y la corriente le añade (0, −2,5) km/h. Halla su velocidad real y su rapidez.", sol: "(6, −2,5); √(36 + 6,25) = 6,5 km/h." },
    { nivel: "medio", q: "Compón la traslación de vector (2, 3) con la de vector (−5, 1). ¿Qué movimiento resulta?", sol: "Traslación de vector (−3, 4), de módulo 5." },
    { nivel: "medio", q: "¿Qué movimiento lleva A(1, 2), B(3, 2), C(1, 5) a A'(−1, 2), B'(−3, 2), C'(−1, 5)?", sol: "Simetría axial respecto del eje Y." },
    { nivel: "medio", q: "¿Qué movimiento lleva (2, 1) a (−1, 2) y (4, 3) a (−3, 4)?", sol: "Giro de 90° con centro O: (x, y) → (−y, x)." },
    { nivel: "medio", q: "Dibuja un friso con una letra L y una traslación. Después haz otro añadiendo una simetría de eje horizontal.", sol: "Respuesta abierta: el primero repite LLLL; el segundo alterna la L con su reflejo bajo el eje." },
    { nivel: "medio", q: "Un cuadrado tiene vértices (1, 1), (3, 1), (3, 3), (1, 3). ¿Cuál es su centro de simetría? Halla sus ejes.", sol: "Centro (2, 2). Ejes: x = 2, y = 2, y = x, y = −x + 4." },
    { nivel: "medio", q: "Aplica una homotecia de centro O y razón 3 al segmento de extremos (1, 2) y (2, −1). ¿Cuánto mide el nuevo segmento comparado con el original?", sol: "(3, 6) y (6, −3). Mide el triple: 3√10 frente a √10." },
    { nivel: "medio", q: "¿Puede hacerse un mosaico con octógonos regulares y cuadrados? Justifica con los ángulos.", sol: "Sí: 135° + 135° + 90° = 360° en cada vértice." },
    { nivel: "avanzado", q: "Aplica al punto P(2, 3) una simetría respecto del eje X y luego una respecto del eje Y. ¿A qué movimiento equivale la composición?", sol: "(2, −3) → (−2, −3). Equivale a la simetría central de centro O (giro de 180°)." },
    { nivel: "avanzado", q: "Dos simetrías de ejes que se cortan en O formando 30°. ¿A qué equivalen? ¿Y si forman 90°?", sol: "Giro de 60° con centro O; giro de 180° (simetría central)." },
    { nivel: "avanzado", q: "Halla el centro del giro de 180° que lleva A(1, 4) a A'(5, −2).", sol: "Es el punto medio: (3, 1)." },
    { nivel: "avanzado", q: "Halla la ecuación del eje de la simetría que lleva A(1, 1) a A'(5, 3).", sol: "Mediatriz de AA': punto medio (3, 2), pendiente de AA' = 1/2, perpendicular −2: y = −2x + 8." },
    { nivel: "avanzado", q: "Gira 90° el punto (4, 1) con centro C(1, 1). (Pista: traslada C al origen, gira y vuelve a trasladar.)", sol: "(4, 1) − C = (3, 0) → (0, 3) → + C = (1, 4)." },
    { nivel: "avanzado", q: "Comprueba que trasladar y luego girar no da lo mismo que girar y luego trasladar con P(1, 0), v = (2, 0) y giro de 90° con centro O.", sol: "Trasladar y girar: (3, 0) → (0, 3). Girar y trasladar: (0, 1) → (2, 1). Distinto." },
    { nivel: "avanzado", q: "Una homotecia de razón 2,5 transforma un triángulo de área 12 cm². ¿Qué área tiene la imagen? ¿Y el perímetro si el original medía 18 cm?", sol: "Área 12 · 6,25 = 75 cm²; perímetro 45 cm." },
    { nivel: "avanzado", q: "¿Qué orden de giro y cuántos ejes tiene una estrella regular de 8 puntas? ¿Y la rueda de un molinillo de 4 aspas inclinadas?", sol: "Orden 8 y 8 ejes. El molinillo: orden 4 y ningún eje." },
    { nivel: "avanzado", q: "Explica por qué solo hay tres mosaicos regulares usando que el ángulo de un polígono regular de n lados es 180(n − 2)/n.", sol: "El ángulo debe dividir a 360. 60 (n = 3), 90 (n = 4), 120 (n = 6) sí; 108 no; para n > 6 el ángulo está entre 120 y 180 y caben menos de 3, imposible." },
    { nivel: "avanzado", q: "Diseña una pieza «a lo Escher» partiendo de un cuadrado: recorta una forma de un lado y pégala trasladada en el lado opuesto. Explica por qué sigue teselando.", sol: "Respuesta abierta: el área y el encaje se conservan porque cada entrante de un lado se corresponde con un saliente trasladado en el opuesto." },
  ],
  quiz: [
    { q: "Un movimiento conserva…", o: ["solo los ángulos", "las distancias", "solo las áreas", "nada"], a: 1, e: "Isometría." },
    { q: "Coordenadas del vector de A(1, 2) a B(4, 6):", o: ["(3, 4)", "(5, 8)", "(−3, −4)", "(4, 6)"], a: 0, e: "Extremo menos origen." },
    { q: "Módulo de (3, 4):", o: ["7", "5", "12", "25"], a: 1, e: "√25." },
    { q: "(2, 1) + (−3, 4) =", o: ["(−1, 5)", "(5, −3)", "(−6, 4)", "(1, 5)"], a: 0, e: "Componente a componente." },
    { q: "Trasladar (1, 1) con v = (2, −3):", o: ["(3, −2)", "(−1, 4)", "(2, −3)", "(3, 4)"], a: 0, e: "Se suma v." },
    { q: "Giro de 90° de (1, 0) con centro O:", o: ["(0, 1)", "(0, −1)", "(−1, 0)", "(1, 1)"], a: 0, e: "(−y, x)." },
    { q: "Giro de 180° de (2, −5):", o: ["(−2, 5)", "(2, 5)", "(−2, −5)", "(5, 2)"], a: 0, e: "(−x, −y)." },
    { q: "Simétrico de (3, 2) respecto del eje X:", o: ["(3, −2)", "(−3, 2)", "(−3, −2)", "(2, 3)"], a: 0, e: "Cambia la y." },
    { q: "Simétrico de (3, 2) respecto del eje Y:", o: ["(3, −2)", "(−3, 2)", "(−3, −2)", "(2, 3)"], a: 1, e: "Cambia la x." },
    { q: "Simétrico de (3, 2) respecto de y = x:", o: ["(2, 3)", "(−2, −3)", "(3, 2)", "(−3, 2)"], a: 0, e: "Se intercambian." },
    { q: "La simetría central equivale a un giro de…", o: ["90°", "180°", "270°", "360°"], a: 1, e: "Media vuelta." },
    { q: "¿Cuál cambia la orientación?", o: ["traslación", "giro", "simetría axial", "simetría central"], a: 2, e: "Es inversa." },
    { q: "Ejes de simetría de un triángulo equilátero:", o: ["1", "2", "3", "6"], a: 2, e: "Uno por vértice." },
    { q: "Un rectángulo no cuadrado tiene…", o: ["4 ejes", "2 ejes", "las diagonales como ejes", "ningún eje"], a: 1, e: "Por los puntos medios." },
    { q: "Orden de giro de un cuadrado:", o: ["2", "4", "8", "1"], a: 1, e: "Giros de 90°." },
    { q: "Dos simetrías de ejes paralelos equivalen a…", o: ["un giro", "una traslación", "una simetría", "una homotecia"], a: 1, e: "Vector 2d." },
    { q: "Dos simetrías de ejes que se cortan con ángulo α equivalen a un giro de…", o: ["α", "2α", "α/2", "180°"], a: 1, e: "El doble." },
    { q: "Un mosaico regular NO se puede hacer con…", o: ["triángulos", "cuadrados", "pentágonos", "hexágonos"], a: 2, e: "108° no divide 360°." },
    { q: "Un friso se genera sobre todo con…", o: ["giros", "traslaciones repetidas", "homotecias", "simetrías centrales"], a: 1, e: "Repetición en una franja." },
    { q: "Una homotecia de razón 2 multiplica las áreas por…", o: ["2", "4", "8", "1"], a: 1, e: "k²." },
  ],
  examen: [
    { q: "Vector de (−1, 3) a (2, −1):", o: ["(3, −4)", "(1, 2)", "(−3, 4)", "(3, 4)"], a: 0, e: "Módulo 5." },
    { q: "Imagen de (5, −2) por la traslación (−3, 4):", o: ["(2, 2)", "(8, −6)", "(2, −6)", "(−15, −8)"], a: 0, e: "Se suma." },
    { q: "Giro de 90° de (−2, 3):", o: ["(−3, −2)", "(3, 2)", "(2, −3)", "(−3, 2)"], a: 0, e: "(−y, x)." },
    { q: "Simétrico de (4, 1) respecto de x = 1:", o: ["(−2, 1)", "(−4, 1)", "(4, −1)", "(1, 4)"], a: 0, e: "(2k − x, y)." },
    { q: "¿Qué figura tiene centro de simetría pero ningún eje?", o: ["cuadrado", "paralelogramo no rombo ni rectángulo", "triángulo isósceles", "círculo"], a: 1, e: "Corte de diagonales." },
    { q: "Simetría respecto del eje X seguida de la del eje Y equivale a…", o: ["traslación", "simetría central", "identidad", "simetría y = x"], a: 1, e: "(−x, −y)." },
    { q: "Ángulo mínimo de giro de una estrella de 5 puntas:", o: ["36°", "72°", "90°", "108°"], a: 1, e: "360/5." },
    { q: "Polígonos que sí forman mosaico regular:", o: ["pentágonos", "hexágonos", "octógonos", "heptágonos"], a: 1, e: "3 · 120° = 360°." },
  ],
  feynman: ["Qué tienen en común la traslación, el giro y la simetría, y en qué se diferencian", "Cómo se calculan las coordenadas y el módulo de un vector", "Por qué la simetría axial cambia la orientación y el giro no", "Por qué solo hay tres mosaicos regulares"],
  figura: {
    titulo: "Los movimientos en coordenadas",
    svg: resumen("Resumen de los movimientos del plano en coordenadas", [
      ["Traslación v(a, b)", "(x, y) → (x + a, y + b) · directo, sin puntos fijos", "var(--pen)"],
      ["Giro 90° · 180°", "(x, y) → (−y, x) · (x, y) → (−x, −y) · directo", "var(--red)"],
      ["Simetría axial", "eje X (x, −y) · eje Y (−x, y) · y = x (y, x) · inverso", "var(--leaf)"],
      ["Aplicaciones", "frisos (7 tipos) · mosaicos regulares (3) · rosetones", "var(--inf)"],
    ], 230),
  },
  video: { id: "XfPEGMgBXiM", titulo: "Movimientos en el plano - Traslación, reflexión y rotación", canal: "Profe Laura Buitrago - Matemáticas", vistas: 307972, megusta: 0 },
  mapa: mapa("MOVIMIENTOS", "var(--red)", [
    ["Vectores", "coordenadas · módulo", "var(--pen)"],
    ["Directos", "traslación · giro", "var(--red)"],
    ["Inverso", "simetría axial", "var(--leaf)"],
    ["Arte", "frisos · mosaicos", "var(--inf)"],
  ], 260),
  glosario: [
    ["Movimiento", "Transformación que conserva las distancias (isometría)."],
    ["Vector", "Segmento orientado con módulo, dirección y sentido."],
    ["Módulo", "Longitud de un vector: √(a² + b²)."],
    ["Traslación", "Movimiento que desplaza todos los puntos según un vector."],
    ["Giro", "Movimiento alrededor de un centro con un ángulo."],
    ["Simetría central", "Giro de 180°; el centro es punto medio de PP'."],
    ["Simetría axial", "Reflexión respecto de un eje, que es mediatriz de PP'."],
    ["Movimiento directo", "Conserva la orientación de las figuras."],
    ["Movimiento inverso", "Cambia la orientación, como un espejo."],
    ["Eje de simetría", "Recta que divide una figura en dos mitades simétricas."],
    ["Orden de giro", "Veces que una figura coincide consigo misma en una vuelta."],
    ["Friso", "Motivo repetido por traslación a lo largo de una franja."],
    ["Mosaico", "Recubrimiento del plano sin huecos ni superposiciones."],
    ["Rosetón", "Figura con centro de giro que no se repite por traslación."],
    ["Homotecia", "Transformación que amplía o reduce desde un centro con una razón."],
  ],
  situacion: {
    titulo: "Nuestro mosaico para el pasillo",
    reto: "El centro quiere decorar un pasillo con un friso y un mosaico diseñados por el alumnado. Vuestro equipo creará una pieza propia, la repetirá con movimientos y explicará la matemática que hay detrás.",
    pasos: [
      "Buscad fotos de frisos y mosaicos de vuestra ciudad o de la Alhambra e identificad sus movimientos.",
      "Diseñad una pieza base a partir de un cuadrado, triángulo o hexágono, deformándola al estilo Escher.",
      "Construid un friso con al menos dos movimientos distintos y un mosaico que cubra un rectángulo.",
      "Dibujad el diseño en una cuadrícula y escribid las coordenadas de las primeras piezas y los vectores usados.",
      "Presentad el diseño explicando qué movimientos lo dejan invariante.",
    ],
    producto: "Un panel con el friso, el mosaico, la pieza base y la explicación de los movimientos.",
    evaluacion: ["Identifica correctamente los movimientos en ejemplos reales.", "Aplica traslaciones, giros y simetrías con precisión.", "Justifica por qué la pieza tesela el plano.", "Comunica el diseño con vocabulario matemático adecuado."],
  },
  tarjetas: [
    ["Vector AB", "B − A"], ["Módulo de (a, b)", "√(a² + b²)"],
    ["Traslación v", "(x + a, y + b)"], ["Giro 90°", "(−y, x)"],
    ["Giro 180°", "(−x, −y)"], ["Simetría eje X", "(x, −y)"],
    ["Simetría eje Y", "(−x, y)"], ["Simetría y = x", "(y, x)"],
    ["Directos", "Traslación y giro."], ["Inverso", "Simetría axial."],
    ["Mosaicos regulares", "Triángulos, cuadrados, hexágonos."], ["Homotecia k", "Longitudes × k; áreas × k²."],
  ],
  familias: ["Buscad juntos frisos y mosaicos en casa, en la calle o en un museo.", "Mirad logotipos de marcas e identificad sus ejes y su orden de giro.", "Escribid un mensaje en espejo y comprobad la simetría axial.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido espacial: transformaciones geométricas en el plano (traslaciones, giros, simetrías), vectores, coordenadas de las imágenes, composición de movimientos, frisos, mosaicos y rosetones, y homotecia como transformación de semejanza (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Movimientos con GeoGebra y comprobación de las reglas de coordenadas.", "Espejos para descubrir ejes de simetría.", "Paseo matemático buscando frisos y mosaicos en el barrio.", "Taller de teselaciones al estilo Escher."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: movimientos en el plano (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
