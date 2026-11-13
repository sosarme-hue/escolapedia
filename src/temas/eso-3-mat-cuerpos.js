// Matemáticas 3º ESO · Cuerpos geométricos: áreas y volúmenes. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { mapa, tabla, tx, lienzo, cajas, resumen, poli, rot, linea, C, RD, DECRET } = require("./_eso3L1");

const r1 = (n) => Math.round(n * 10) / 10;
const caraP = (pts, c, op = 0.16) => poli(pts, { c, op, sw: 2 });
const disc = (x1, y1, x2, y2, c = "var(--muted)") => linea(x1, y1, x2, y2, c, { disc: true, w: 1.6 });
const elipse = (cx, cy, rx, ry, c = "var(--pen)", op = 0.18, extra = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity="${op}" stroke="${c}" stroke-width="2"${extra}/>`;
// Media elipse (delante continua, detrás discontinua)
const elipse2 = (cx, cy, rx, ry, c = "var(--pen)") => `<path d="M${cx - rx} ${cy} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy}" fill="none" stroke="${c}" stroke-width="2"/><path d="M${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${cx + rx} ${cy}" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>`;

const elementos = lienzo("Elementos de un poliedro: caras, aristas y vértices en un ortoedro", caraP([[90, 40], [170, 40], [170, 120], [90, 120]], "var(--muted)", 0.04) + caraP([[50, 70], [90, 40], [170, 40], [130, 70]], "var(--leaf)", 0.2) + caraP([[130, 70], [170, 40], [170, 120], [130, 150]], "var(--pen)", 0.2) + caraP([[50, 70], [130, 70], [130, 150], [50, 150]], "var(--pen)", 0.3) + disc(90, 120, 90, 40) + disc(90, 120, 170, 120) + disc(90, 120, 50, 150) + `<circle cx="130" cy="150" r="5" fill="var(--red)"/>` + linea(50, 70, 130, 70, "var(--inf)", { w: 4 }) + rot([[90, 116, "cara", "var(--pen)"], [92, 64, "arista", "var(--inf)"], [146, 166, "vértice", "var(--red)", "start"], [215, 70, "C = 6", "var(--ink)"], [215, 90, "V = 8", "var(--ink)"], [215, 110, "A = 12", "var(--ink)"], [130, 186, "6 + 8 = 12 + 2", "var(--muted)"]], 12), 196);

const euler = lienzo("Fórmula de Euler comprobada en cuatro poliedros", [["Poliedro", "C", "V", "A", "C+V−A"], ["Tetraedro", "4", "4", "6", "2"], ["Cubo", "6", "8", "12", "2"], ["Prisma hexagonal", "8", "12", "18", "2"], ["Pirámide cuadrada", "5", "5", "8", "2"], ["Octaedro", "8", "6", "12", "2"]].map((f, i) => {
  const y = 34 + i * 24, xs = [16, 142, 170, 198, 236];
  return (i ? `<rect x="10" y="${y - 16}" width="240" height="22" rx="5" fill="${i % 2 ? "var(--card)" : "transparent"}"/>` : "") + f.map((v, j) => tx(xs[j], y, v, { fs: 12, a: j ? "middle" : "start", c: i === 0 ? "var(--muted)" : j === 4 ? "var(--red)" : "var(--ink)", w: i === 0 || j === 4 ? 700 : 500, max: j ? 40 : 120 })).join("");
}).join("") + tx(130, 182, "C + V = A + 2", { fs: 15, c: "var(--pen)" }), 194);

const regulares = cajas("Los cinco poliedros regulares o sólidos platónicos", [
  ["Tetraedro", ["4 triángulos"], "var(--pen)"], ["Cubo", ["6 cuadrados"], "var(--red)"],
  ["Octaedro", ["8 triángulos"], "var(--leaf)"], ["Dodecaedro", ["12 pentágonos"], "var(--inf)"],
  ["Icosaedro", ["20 triángulos"], "var(--bac)"], ["¿Por qué 5?", ["ángulos < 360°"], "var(--muted)"],
], "Sólidos platónicos");

const prisma = lienzo("Prisma triangular y su desarrollo plano: tres rectángulos laterales y dos triángulos de base", caraP([[50, 100], [80, 75], [110, 125], [80, 150]], "var(--pen)", 0.15) + caraP([[20, 150], [80, 150], [50, 100]], "var(--pen)", 0.3) + linea(80, 150, 110, 125, "var(--pen)") + linea(110, 125, 80, 75, "var(--pen)") + linea(50, 100, 80, 75, "var(--pen)") + disc(50, 125, 110, 125) + disc(50, 125, 80, 75) + disc(50, 125, 20, 150) + [0, 1, 2].map((i) => caraP([[130 + i * 32, 60], [162 + i * 32, 60], [162 + i * 32, 120], [130 + i * 32, 120]], "var(--leaf)", 0.2)).join("") + caraP([[162, 60], [194, 60], [178, 33]], "var(--red)", 0.25) + caraP([[162, 120], [194, 120], [178, 147]], "var(--red)", 0.25) + rot([[128, 94, "h", "var(--ink)", "end"], [65, 172, "prisma", "var(--pen)"], [178, 172, "desarrollo", "var(--leaf)"], [130, 192, "At = P·h + 2·Ab", "var(--ink)"]], 12), 202);

const piramide = lienzo("Pirámide cuadrangular con su altura, su apotema y el triángulo rectángulo que las relaciona", caraP([[40, 150], [160, 150], [200, 120], [80, 120]], "var(--pen)", 0.12) + linea(120, 30, 40, 150, "var(--pen)", { w: 2 }) + linea(120, 30, 160, 150, "var(--pen)", { w: 2 }) + linea(120, 30, 200, 120, "var(--pen)", { w: 2 }) + disc(120, 30, 80, 120) + linea(120, 30, 120, 135, "var(--red)", { w: 2.4, disc: true }) + linea(120, 30, 100, 150, "var(--leaf)", { w: 2.6 }) + linea(120, 135, 100, 150, "var(--inf)", { w: 2.4 }) + `<circle cx="120" cy="30" r="4" fill="var(--ink)"/>` + rot([[128, 92, "h", "var(--red)", "start"], [96, 100, "ap", "var(--leaf)", "end"], [112, 158, "l/2", "var(--inf)"], [130, 184, "ap² = h² + (l/2)²", "var(--ink)"]], 12), 194);

const desarrolloPir = lienzo("Desarrollo plano de una pirámide cuadrangular: un cuadrado y cuatro triángulos iguales", caraP([[105, 70], [155, 70], [155, 120], [105, 120]], "var(--pen)", 0.25) + caraP([[105, 70], [155, 70], [130, 28]], "var(--leaf)") + caraP([[105, 120], [155, 120], [130, 162]], "var(--leaf)") + caraP([[105, 70], [105, 120], [63, 95]], "var(--leaf)") + caraP([[155, 70], [155, 120], [197, 95]], "var(--leaf)") + disc(130, 70, 130, 28, "var(--red)") + rot([[130, 99, "l²", "var(--pen)"], [137, 52, "ap", "var(--red)", "start"], [130, 186, "At = l² + 4 · (l · ap / 2)", "var(--ink)"]], 12), 196);

const revolucion = lienzo("Cuerpos de revolución: un rectángulo que gira alrededor de un lado genera un cilindro y un triángulo rectángulo genera un cono", linea(20, 36, 20, 142, "var(--red)", { disc: true }) + caraP([[20, 50], [48, 50], [48, 130], [20, 130]], "var(--pen)", 0.3) + tx(62, 95, "→", { fs: 18, c: "var(--muted)" }) + `<path d="M72 50 V 130 A 28 8 0 0 0 128 130 V 50" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2"/>` + elipse(100, 50, 28, 8) + elipse2(100, 130, 28, 8) + linea(145, 36, 145, 142, "var(--red)", { disc: true }) + caraP([[145, 45], [145, 130], [171, 130]], "var(--leaf)", 0.3) + tx(186, 95, "→", { fs: 18, c: "var(--muted)" }) + `<path d="M222 45 L 248 130 A 26 7 0 0 1 196 130 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>` + elipse2(222, 130, 26, 7, "var(--leaf)") + rot([[20, 30, "eje", "var(--red)"], [145, 30, "eje", "var(--red)"], [100, 162, "cilindro", "var(--pen)"], [222, 162, "cono", "var(--leaf)"]], 12), 176);

const cilindro = lienzo("Desarrollo del cilindro: un rectángulo de base dos pi r y altura h, y dos círculos de radio r", caraP([[60, 66], [200, 66], [200, 124], [60, 124]], "var(--pen)", 0.22) + `<circle cx="130" cy="43" r="22" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><circle cx="130" cy="147" r="22" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>` + linea(130, 43, 152, 43, "var(--leaf)") + rot([[141, 39, "r", "var(--leaf)"], [178, 140, "2πr", "var(--pen)"], [210, 99, "h", "var(--ink)", "start"], [130, 190, "At = 2πrh + 2πr²", "var(--ink)"]], 12), 200);

const cono = (() => {
  const g = 108, r = 40, ang = (360 * r) / g, a0 = ((90 - ang / 2) * Math.PI) / 180, a1 = ((90 + ang / 2) * Math.PI) / 180, R = 66, cx = 190, cy = 26;
  const p0 = [cx + R * Math.cos(a0), cy + R * Math.sin(a0)], p1 = [cx + R * Math.cos(a1), cy + R * Math.sin(a1)], rr = (R * r) / g;
  return lienzo("Cono con su altura, su radio y su generatriz, y su desarrollo: un sector circular y un círculo", `<path d="M60 32 L 100 128 A 40 10 0 0 1 20 128 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>` + elipse2(60, 128, 40, 10, "var(--leaf)") + linea(60, 32, 60, 128, "var(--red)", { disc: true, w: 2 }) + linea(60, 128, 100, 128, "var(--inf)", { w: 2.2 }) + linea(60, 32, 100, 128, "var(--pen)", { w: 3 }) + `<path d="M${cx} ${cy} L${r1(p0[0])} ${r1(p0[1])} A ${R} ${R} 0 0 1 ${r1(p1[0])} ${r1(p1[1])} Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/>` + `<circle cx="${cx}" cy="${r1(cy + R + rr)}" r="${r1(rr)}" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/>` + rot([[54, 86, "h", "var(--red)", "end"], [80, 152, "r", "var(--inf)"], [88, 76, "g", "var(--pen)", "start"], [190, 62, "πrg", "var(--pen)"], [130, 172, "g² = h² + r²", "var(--ink)"], [130, 190, "At = πrg + πr²", "var(--ink)"]], 12), 200);
})();

const esfera = lienzo("Esfera de radio r: su superficie es igual a la de cuatro círculos máximos", `<circle cx="110" cy="92" r="66" fill="var(--inf)" fill-opacity=".14" stroke="var(--inf)" stroke-width="2.2"/>` + elipse2(110, 92, 66, 15, "var(--inf)") + linea(110, 92, 176, 92, "var(--red)", { w: 2.2 }) + `<circle cx="110" cy="92" r="3.5" fill="var(--ink)"/>` + [0, 1, 2, 3].map((i) => `<circle cx="${206 + (i % 2) * 34}" cy="${60 + Math.floor(i / 2) * 34}" r="15" fill="var(--inf)" fill-opacity=".25" stroke="var(--inf)" stroke-width="1.6"/>`).join("") + rot([[143, 86, "r", "var(--red)"], [223, 118, "= 4 círculos", "var(--inf)"], [130, 184, "A = 4πr²", "var(--ink)"]], 12), 194);

const cavalieri = lienzo("Principio de Cavalieri: dos pilas de monedas con la misma base y la misma altura tienen el mismo volumen", [...Array(9)].map((_, i) => elipse(70, 150 - i * 12, 30, 6, "var(--pen)", 0.25)).join("") + [...Array(9)].map((_, i) => elipse(170 + Math.round(18 * Math.sin(i / 2.6)), 150 - i * 12, 30, 6, "var(--leaf)", 0.25)).join("") + rot([[70, 178, "recto", "var(--pen)"], [182, 178, "inclinado", "var(--leaf)"], [130, 22, "Mismo volumen: V = Ab · h", "var(--ink)"]], 12), 190);

const tercio = lienzo("Un cono cabe tres veces en el cilindro de la misma base y altura: su volumen es un tercio", `<path d="M80 44 V 150 A 50 11 0 0 0 180 150 V 44" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2"/>` + elipse(130, 44, 50, 11, "var(--pen)", 0.1) + elipse2(130, 150, 50, 11) + `<path d="M130 44 L 180 150 A 50 11 0 0 1 80 150 Z" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>` + rot([[130, 186, "V cono = ⅓ · πr² · h", "var(--leaf)"], [212, 100, "cilindro", "var(--pen)", "start"]], 12), 196);

const arquimedes = lienzo("Esfera inscrita en un cilindro: el volumen de la esfera es dos tercios del cilindro, como descubrió Arquímedes", `<path d="M70 40 V 160 A 60 12 0 0 0 190 160 V 40" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2"/>` + elipse(130, 40, 60, 12, "var(--pen)", 0.08) + elipse2(130, 160, 60, 12) + `<circle cx="130" cy="100" r="60" fill="var(--inf)" fill-opacity=".25" stroke="var(--inf)" stroke-width="2.2"/>` + linea(130, 100, 190, 100, "var(--red)") + linea(205, 40, 205, 160, "var(--muted)") + rot([[160, 95, "r", "var(--red)"], [210, 104, "2r", "var(--muted)", "start"], [130, 192, "V = ⅔ · πr² · 2r = 4/3 · πr³", "var(--ink)"]], 12), 200);

const unidades = cajas("Equivalencias entre unidades de volumen y de capacidad", [
  ["1 dm³", ["= 1 litro"], "var(--pen)"], ["1 cm³", ["= 1 mililitro"], "var(--leaf)"],
  ["1 m³", ["= 1.000 litros"], "var(--red)"], ["Escalones", ["× 1.000 entre", "m³, dm³, cm³"], "var(--inf)"],
], "Volumen y capacidad");

const globo = (() => {
  const c = [130, 92], R = 70;
  return lienzo("La Tierra como esfera: ecuador, meridiano de Greenwich y un punto P con su latitud y su longitud", `<circle cx="${c[0]}" cy="${c[1]}" r="${R}" fill="var(--inf)" fill-opacity=".1" stroke="var(--inf)" stroke-width="2"/>` + elipse2(c[0], c[1], R, 14, "var(--red)") + elipse2(c[0], c[1] - 40, 57, 10, "var(--leaf)") + `<ellipse cx="${c[0]}" cy="${c[1]}" rx="26" ry="${R}" fill="none" stroke="var(--pen)" stroke-width="2"/>` + `<circle cx="152" cy="59" r="5" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>` + rot([[130, 16, "N", "var(--ink)"], [130, 176, "S", "var(--ink)"], [130, 124, "ecuador 0°", "var(--red)"], [100, 40, "Greenwich", "var(--pen)", "end"], [200, 46, "paralelo", "var(--leaf)", "start"], [160, 74, "P", "var(--ink)", "start"], [130, 194, "latitud N/S · longitud E/O", "var(--muted)"]], 11.5), 202);
})();

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Cuerpos geométricos: áreas y volúmenes",
  minutos: 110,
  objetivos: [
    "Clasificar poliedros y cuerpos de revolución y comprobar la fórmula de Euler",
    "Reconocer los cinco poliedros regulares y sus desarrollos planos",
    "Calcular áreas de prismas, pirámides, cilindros, conos y esferas",
    "Calcular volúmenes y relacionar las unidades de volumen y de capacidad",
    "Resolver problemas reales de envases, depósitos y construcciones, y situar puntos con coordenadas geográficas",
  ],
  claves: ["poliedro", "Euler", "prisma", "pirámide", "cilindro", "cono", "esfera", "volumen"],
  pregunta: {
    texto: "Una lata de refresco y una caja de zumo tienen 330 ml. ¿Por qué la lata es un cilindro y no un prisma?",
    respuesta: "Para un mismo volumen, el cilindro necesita <mark>menos superficie</mark> de material que un prisma alargado, y además aguanta mejor la presión del gas. Calcular áreas y volúmenes permite diseñar envases que gasten menos material, quepan en las cajas y sean resistentes.",
  },
  lectura: {
    titulo: "La tumba de Arquímedes",
    html: `<p>Arquímedes de Siracusa, que vivió en el siglo III a. C., fue uno de los mayores genios de la Antigüedad. Inventó máquinas para levantar barcos, explicó por qué flotan los cuerpos y calculó áreas y volúmenes que nadie había conseguido medir. De todos sus descubrimientos, el que más le enorgullecía era uno muy concreto: si una esfera está metida en un cilindro que la toca por todas partes, el volumen de la esfera es exactamente dos tercios del volumen del cilindro, y lo mismo ocurre con sus superficies.</p><p>Tanto le gustaba este resultado que pidió que en su tumba grabaran una esfera dentro de un cilindro. Murió en el año 212 a. C., durante la toma de Siracusa por los romanos. Más de un siglo después, el político Cicerón buscó su tumba, olvidada entre la maleza, y la reconoció precisamente por ese dibujo.</p><p>Hoy usamos sus fórmulas para calcular cuánta agua cabe en un depósito, cuánto cartón hace falta para una caja o cuánto helado lleva un cucurucho. En este tema aprenderás a reconocer los cuerpos geométricos, a desplegarlos en el plano y a calcular su superficie y su volumen.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Poliedros: elementos</h3><p>Un <b>poliedro</b> es un cuerpo geométrico limitado por polígonos. Sus elementos son:</p><ul><li><b>Caras</b>: los polígonos que lo limitan.</li><li><b>Aristas</b>: los segmentos donde se unen dos caras.</li><li><b>Vértices</b>: los puntos donde se juntan tres o más aristas.</li><li><b>Ángulos diedros</b>: los que forman dos caras que comparten arista, y <b>ángulos poliedros</b>, los que se forman en cada vértice.</li></ul><p>Un poliedro es <b>convexo</b> si cualquier segmento que une dos de sus puntos queda dentro de él; si no, es <b>cóncavo</b> (por ejemplo, un cuerpo con forma de L). Una caja de zapatos es un poliedro convexo con 6 caras, 12 aristas y 8 vértices.</p><p>Los cuerpos que tienen alguna superficie curva, como un balón o una lata, no son poliedros: son <b>cuerpos redondos</b>. Los más importantes son los <b>cuerpos de revolución</b>: cilindro, cono y esfera.</p>`, svg: elementos },
    { html: `<h3>1.2 La fórmula de Euler</h3><p>En el siglo XVIII, el matemático suizo Leonhard Euler observó que en todos los poliedros convexos el número de caras (C), de vértices (V) y de aristas (A) cumple siempre la misma relación:</p><p class="formula"><span>C + V = A + 2</span></p><p>Por ejemplo, un cubo: 6 + 8 = 12 + 2. Un tetraedro: 4 + 4 = 6 + 2. Un prisma hexagonal: 8 + 12 = 18 + 2.</p><p>La fórmula sirve para comprobar si un recuento es correcto y para calcular un dato desconocido. Si un poliedro tiene 10 caras y 16 aristas, entonces V = 16 + 2 − 10 = 8 vértices.</p><p>Un truco para contar aristas: cada arista pertenece a exactamente dos caras. Si un poliedro tiene 12 caras pentagonales, la suma de lados es 12 · 5 = 60, y como cada arista se cuenta dos veces, A = 30. Con Euler: V = 30 + 2 − 12 = 20. Es el dodecaedro.</p><p>La fórmula falla en poliedros con «agujeros», como un marco de cuadro hecho de prismas. Este hecho dio origen a una rama de las matemáticas, la topología.</p>`, svg: euler, video: { id: "hdNXXMzDLYc", titulo: "FÓRMULA DE EULER COMO NADIE TE LA HA EXPLICADO. Significado gráfico", canal: "Matemáticas con Juan", vistas: 80690, megusta: 0 } },
    { html: `<h3>1.3 Poliedros regulares</h3><p>Un poliedro es <b>regular</b> si todas sus caras son polígonos regulares iguales y en cada vértice concurre el mismo número de caras. Solo existen <b>cinco</b>, llamados <b>sólidos platónicos</b>:</p>${tabla(["Poliedro", "Caras", "C", "V", "A"], [["Tetraedro", "triángulos", "4", "4", "6"], ["Cubo", "cuadrados", "6", "8", "12"], ["Octaedro", "triángulos", "8", "6", "12"], ["Dodecaedro", "pentágonos", "12", "20", "30"], ["Icosaedro", "triángulos", "20", "12", "30"]])}<p>¿Por qué solo cinco? En cada vértice deben juntarse al menos tres caras, y la suma de sus ángulos debe ser <b>menor que 360°</b> (si fuera 360°, quedarían planas). Con triángulos (60°) caben 3, 4 o 5 por vértice; con cuadrados (90°), solo 3; con pentágonos (108°), solo 3; con hexágonos (120°), 3 · 120 = 360°: ya no se cierra.</p><p>Los dados de rol usan los cinco sólidos platónicos: d4, d6, d8, d12 y d20.</p>`, svg: regulares },
    { html: `<h3>1.4 Prismas</h3><p>Un <b>prisma</b> es un poliedro con dos caras iguales y paralelas llamadas <b>bases</b>, y cuyas caras laterales son paralelogramos. Se nombra según el polígono de la base: triangular, cuadrangular, pentagonal, hexagonal…</p><p>La <b>altura</b> h es la distancia entre las bases. Si las caras laterales son rectángulos, el prisma es <b>recto</b>; si no, es <b>oblicuo</b>. Si además la base es un polígono regular, es un prisma <b>regular</b>. El <b>ortoedro</b> es un prisma con todas las caras rectangulares (una caja de zapatos), y el <b>cubo</b>, uno con todas las caras cuadradas.</p><p>El <b>desarrollo plano</b> de un prisma recto está formado por un rectángulo (las caras laterales unidas, de base el perímetro P y altura h) y las dos bases. Por eso:</p><p class="formula"><span>A<sub>lateral</sub> = P · h &nbsp;&nbsp; A<sub>total</sub> = P · h + 2 · A<sub>base</sub></span></p><p>La diagonal de un ortoedro de aristas a, b y c se calcula aplicando Pitágoras dos veces: <mark>d = √(a² + b² + c²)</mark>. Sirve para saber si un objeto largo cabe en una caja.</p>`, svg: prisma },
    { html: `<h3>1.5 Pirámides</h3><p>Una <b>pirámide</b> es un poliedro con una base poligonal y caras laterales triangulares que se juntan en un punto, el <b>vértice</b> o cúspide. Se nombra por su base: pirámide triangular (tetraedro), cuadrangular, hexagonal…</p><p>En una pirámide <b>regular</b> (base regular y vértice sobre el centro de la base) se distinguen:</p><ul><li>La <b>altura</b> h: distancia del vértice a la base.</li><li>La <b>apotema de la pirámide</b> ap: altura de cada cara lateral.</li><li>La <b>apotema de la base</b>: la del polígono de la base.</li><li>Las <b>aristas laterales</b>.</li></ul><p>Altura, apotema de la base y apotema de la pirámide forman un <b>triángulo rectángulo</b>. En una pirámide cuadrangular de lado l: <mark>ap² = h² + (l/2)²</mark>. Ejemplo: la Gran Pirámide de Guiza medía unos 146 m de alto y 230 m de lado; su apotema era √(146² + 115²) ≈ 186 m.</p><p>Las pirámides <b>truncadas</b> (tronco de pirámide) se obtienen cortando una pirámide con un plano paralelo a la base, como algunas macetas.</p>`, svg: piramide },
    { html: `<h3>2.1 Área de prismas y pirámides</h3><p>El <b>área total</b> de un poliedro es la suma de las áreas de todas sus caras: lo más seguro es imaginar o dibujar su <b>desarrollo plano</b>.</p><p>Para una <b>pirámide regular</b>, las caras laterales son n triángulos iguales de base l y altura ap:</p><p class="formula"><span>A<sub>lateral</sub> = P · ap / 2 &nbsp;&nbsp; A<sub>total</sub> = A<sub>lateral</sub> + A<sub>base</sub></span></p><p><b>Ejemplo 1</b>: un ortoedro de 5 × 4 × 3 cm tiene A = 2(5·4 + 5·3 + 4·3) = 2 · 47 = 94 cm².</p><p><b>Ejemplo 2</b>: una pirámide cuadrangular de lado 6 cm y altura 4 cm. Apotema: ap = √(16 + 9) = 5 cm. A<sub>lateral</sub> = 24 · 5 / 2 = 60 cm²; A<sub>base</sub> = 36 cm²; A<sub>total</sub> = 96 cm².</p><p><b>Ejemplo 3</b>: un prisma hexagonal regular de lado 4 cm y altura 10 cm. La apotema de la base es √(16 − 4) ≈ 3,46 cm; A<sub>base</sub> = 24 · 3,46 / 2 ≈ 41,6 cm²; A<sub>lateral</sub> = 24 · 10 = 240 cm²; A<sub>total</sub> ≈ 323,1 cm².</p><p>El área se usa para calcular material: cartón para una caja, pintura para una habitación o tela para una tienda de campaña.</p>`, svg: desarrolloPir },
    { html: `<h3>2.2 Cuerpos de revolución</h3><p>Un <b>cuerpo de revolución</b> se obtiene al hacer girar una figura plana alrededor de una recta, llamada <b>eje de giro</b>. Los tres principales son:</p><ul><li><b>Cilindro</b>: al girar un rectángulo alrededor de uno de sus lados.</li><li><b>Cono</b>: al girar un triángulo rectángulo alrededor de un cateto.</li><li><b>Esfera</b>: al girar un semicírculo alrededor de su diámetro.</li></ul><p>También se obtiene un <b>tronco de cono</b> al girar un trapecio rectángulo (un cubo de playa o un vaso). El lado que gira y «barre» la superficie lateral se llama <b>generatriz</b>.</p><p>Muchos objetos se fabrican así, girando: un alfarero da forma a una vasija en el torno, y un tornero produce las patas de una silla o las piezas de ajedrez. Por eso tantos objetos cotidianos (vasos, botellas, latas, bombillas, conos de tráfico) son cuerpos de revolución o combinaciones de ellos. Los cortes de un cuerpo de revolución perpendiculares al eje son siempre círculos.</p>`, svg: revolucion },
    { html: `<h3>2.3 El cilindro</h3><p>Un cilindro tiene dos bases circulares de radio r y una superficie lateral curva. Su <b>altura</b> h es la distancia entre las bases (y coincide con la generatriz en un cilindro recto).</p><p>Si se corta la superficie lateral a lo largo de una generatriz y se despliega, se obtiene un <b>rectángulo</b> cuya base es la longitud de la circunferencia, 2πr, y cuya altura es h. Así:</p><p class="formula"><span>A<sub>lateral</sub> = 2πr · h &nbsp;&nbsp; A<sub>total</sub> = 2πrh + 2πr²</span></p><p>Ejemplo: una lata de 3,3 cm de radio y 11,5 cm de altura. A<sub>lateral</sub> = 2π · 3,3 · 11,5 ≈ 238,4 cm²; las dos bases, 2π · 10,89 ≈ 68,4 cm²; total ≈ 306,8 cm² de aluminio.</p><p>Un detalle práctico: la etiqueta de una lata o de un bote de conservas es justo el rectángulo del área lateral. Si mides el contorno de la lata con una cinta, obtienes 2πr, y dividiendo entre 2π, el radio.</p>`, svg: cilindro, video: { id: "Ee8oAh61ces", titulo: "Área y volumen del cilindro", canal: "Matemáticas fáciles", vistas: 342253, megusta: 0 } },
    { html: `<h3>2.4 El cono</h3><p>Un cono tiene una base circular de radio r, una <b>altura</b> h (del vértice al centro de la base) y una <b>generatriz</b> g (del vértice a cualquier punto del borde de la base). Altura, radio y generatriz forman un triángulo rectángulo:</p><p class="formula"><span>g² = h² + r²</span></p><p>El desarrollo de la superficie lateral es un <b>sector circular</b> de radio g cuyo arco mide lo mismo que la circunferencia de la base, 2πr. Su área resulta:</p><p class="formula"><span>A<sub>lateral</sub> = πrg &nbsp;&nbsp; A<sub>total</sub> = πrg + πr²</span></p><p>Ejemplo: un cono de r = 6 cm y h = 8 cm. Generatriz: g = √(64 + 36) = 10 cm. A<sub>lateral</sub> = π · 6 · 10 = 60π ≈ 188,5 cm². A<sub>total</sub> = 60π + 36π = 96π ≈ 301,6 cm².</p><p>El ángulo del sector se calcula con una proporción: 360° · r / g. En el ejemplo, 360 · 6/10 = 216°. Así se recorta el cartón para fabricar un gorro de cumpleaños o un cucurucho.</p>`, svg: cono, video: { id: "RpPFahTbEzg", titulo: "Calcular la generatriz, el  área y  el volumen del cono", canal: "Matemáticas fáciles", vistas: 331635, megusta: 0 } },
    { html: `<h3>2.5 La esfera</h3><p>La <b>esfera</b> es el cuerpo formado por todos los puntos del espacio que están a una distancia menor o igual que r (el radio) de un punto, el centro. Su superficie se llama <b>superficie esférica</b>.</p><p>Al cortar una esfera con un plano se obtiene siempre un círculo. Si el plano pasa por el centro, el círculo es el mayor posible: es un <b>círculo máximo</b>, de radio r. Arquímedes demostró que la superficie de la esfera es igual a la de <b>cuatro círculos máximos</b>:</p><p class="formula"><span>A = 4πr²</span></p><p>Ejemplo: un balón de baloncesto tiene unos 24 cm de diámetro, r = 12 cm. Su superficie es 4π · 144 ≈ 1.809,6 cm².</p><p>La esfera no se puede desplegar en un plano sin deformarla: por eso todos los mapas del mundo distorsionan algo las formas o los tamaños. Otras partes de la esfera son el <b>casquete esférico</b> (la parte que queda al cortarla con un plano) y el <b>huso esférico</b> (la parte entre dos semicírculos máximos, como un gajo de naranja).</p>`, svg: esfera, video: { id: "70NIURnUufA", titulo: "Área y Volumen de la ESFERA 🌍 Cuerpos Geométricos", canal: "Susi Profe", vistas: 160697, megusta: 0 } },
    { html: `<h3>3.1 Volumen de prismas y cilindros</h3><p>El <b>volumen</b> es la cantidad de espacio que ocupa un cuerpo. Se mide en unidades cúbicas: un cm³ es el volumen de un cubo de 1 cm de arista.</p><p>Un ortoedro de 5 × 4 × 3 cm se puede llenar con 5 · 4 = 20 cubitos en la base y 3 capas: 60 cm³. En general, para prismas y cilindros:</p><p class="formula"><span>V = A<sub>base</sub> · h</span></p><p>Cilindro: <mark>V = πr²h</mark>. La lata de r = 3,3 cm y h = 11,5 cm: V = π · 10,89 · 11,5 ≈ 393 cm³ (algo más que 330 ml porque no se llena del todo).</p><p>El <b>principio de Cavalieri</b> explica que la fórmula vale también para prismas y cilindros oblicuos: si dos cuerpos tienen la misma altura y todas sus secciones a la misma altura tienen la misma área, tienen el mismo volumen. Una pila de monedas recta y otra inclinada ocupan lo mismo.</p>`, svg: cavalieri },
    { html: `<h3>3.2 Volumen de pirámides y conos</h3><p>Si se llena de arena una pirámide hueca y se vacía en un prisma de la misma base y altura, hacen falta exactamente <b>tres</b> pirámides para llenarlo. Lo mismo ocurre con el cono y el cilindro. Por eso:</p><p class="formula"><span>V<sub>pirámide</sub> = ⅓ · A<sub>base</sub> · h &nbsp;&nbsp; V<sub>cono</sub> = ⅓ · πr² · h</span></p><p>Ejemplo 1: la pirámide cuadrangular de lado 6 cm y altura 4 cm: V = 36 · 4 / 3 = 48 cm³.</p><p>Ejemplo 2: el cono de r = 6 cm y h = 8 cm: V = π · 36 · 8 / 3 = 96π ≈ 301,6 cm³.</p><p>Ojo: en estas fórmulas se usa la <b>altura</b> h, no la apotema ni la generatriz. Si el dato es la generatriz, primero hay que calcular la altura con Pitágoras: un cono de generatriz 13 cm y radio 5 cm tiene h = √(169 − 25) = 12 cm y V = π · 25 · 12 / 3 = 100π ≈ 314,2 cm³.</p><p>El volumen de un <b>tronco de cono</b> o de pirámide se obtiene restando el cono o la pirámide pequeña que falta a la grande.</p>`, svg: tercio },
    { html: `<h3>3.3 Volumen de la esfera</h3><p>El volumen de la esfera de radio r es:</p><p class="formula"><span>V = 4/3 · πr³</span></p><p>Arquímedes lo dedujo comparando la esfera con el cilindro que la envuelve (radio r y altura 2r): el volumen de la esfera es <b>dos tercios</b> del cilindro: ⅔ · πr² · 2r = 4/3 πr³. Curiosamente, la superficie de la esfera (4πr²) también es igual al área lateral de ese cilindro (2πr · 2r).</p><p>Ejemplo: una pelota de tenis tiene unos 6,7 cm de diámetro, r ≈ 3,35 cm. V = 4/3 · π · 3,35³ ≈ 157,5 cm³. Un bote cilíndrico para tres pelotas mide unos 6,7 cm de diámetro y 20,1 cm de alto: V ≈ π · 3,35² · 20,1 ≈ 708,7 cm³. Las pelotas ocupan 472,5 cm³, exactamente ⅔ del bote.</p><p>Como el radio está al cubo, si el radio se duplica, el volumen se multiplica por 8. Una sandía de 30 cm de diámetro tiene 8 veces el volumen de un melón de 15 cm, aunque «solo» sea el doble de ancha.</p>`, svg: arquimedes },
    { html: `<h3>3.4 Unidades de volumen y de capacidad</h3><p>Las unidades de <b>volumen</b> (m³, dm³, cm³…) aumentan de <b>1.000 en 1.000</b>, porque cada escalón multiplica las tres dimensiones por 10: 1 m³ = 1.000 dm³ = 1.000.000 cm³.</p><p>La <b>capacidad</b> mide lo que cabe dentro de un recipiente y se expresa en litros. La conexión entre ambas es:</p>${tabla(["Volumen", "Capacidad"], [["1 m³", "1.000 L = 1 kL"], ["1 dm³", "1 L"], ["1 cm³", "1 mL"]])}<p>Así, una piscina de 10 × 5 × 1,5 m tiene 75 m³ = 75.000 L. Un tetrabrik de 1 L mide unos 6 × 9,5 × 17,5 cm ≈ 997,5 cm³ ≈ 1 L.</p><p>Para resolver problemas: 1) pasa todas las medidas a la misma unidad de longitud; 2) calcula el volumen; 3) conviértelo a litros si piden capacidad. Un depósito cilíndrico de 1 m de radio y 2 m de altura tiene V = 2π ≈ 6,28 m³ ≈ 6.283 L. En agua, además, 1 L pesa 1 kg, así que ese depósito lleno pesa más de 6 toneladas.</p>`, svg: unidades },
    { html: `<h3>3.5 La Tierra como esfera: coordenadas geográficas</h3><p>La Tierra es, aproximadamente, una esfera de unos 6.371 km de radio. Para localizar cualquier punto se usan dos familias de líneas imaginarias:</p><ul><li><b>Paralelos</b>: circunferencias paralelas al <b>ecuador</b>, que es el círculo máximo que divide la Tierra en hemisferios norte y sur.</li><li><b>Meridianos</b>: semicircunferencias que van de polo a polo. El de referencia es el de <b>Greenwich</b> (Londres).</li></ul><p>La <b>latitud</b> de un punto es el ángulo que lo separa del ecuador, de 0° a 90° norte (N) o sur (S). La <b>longitud</b> es el ángulo que lo separa del meridiano de Greenwich, de 0° a 180° este (E) u oeste (O). Madrid está aproximadamente en 40° N, 3,7° O; Barcelona, en 41,4° N, 2,2° E.</p><p>Con las fórmulas de la esfera se puede estimar: la longitud del ecuador es 2π · 6.371 ≈ 40.030 km, y la superficie de la Tierra, 4π · 6.371² ≈ 510 millones de km². Los GPS y los mapas del móvil trabajan con estas coordenadas.</p>`, svg: globo },
  ],
  ejemplos: [
    { enunciado: "Un poliedro tiene 7 caras y 10 vértices. ¿Cuántas aristas tiene?", pasos: ["C + V = A + 2.", "7 + 10 = A + 2."], resultado: "A = 15 (es un prisma pentagonal)." },
    { enunciado: "Área total de un cubo de arista 7 cm y su diagonal.", pasos: ["A = 6 · 49 = 294 cm².", "d = √(3 · 49) = 7√3."], resultado: "294 cm²; d ≈ 12,1 cm." },
    { enunciado: "Área total de un cilindro de r = 5 cm y h = 12 cm.", pasos: ["A = 2π · 5 · 12 + 2π · 25.", "= 120π + 50π = 170π."], resultado: "≈ 534,1 cm²." },
    { enunciado: "Volumen de un cono de generatriz 10 cm y radio 6 cm.", pasos: ["h = √(100 − 36) = 8 cm.", "V = π · 36 · 8 / 3 = 96π."], resultado: "≈ 301,6 cm³." },
    { enunciado: "Volumen y superficie de una esfera de 9 cm de radio.", pasos: ["V = 4/3 · π · 729 = 972π.", "A = 4π · 81 = 324π."], resultado: "V ≈ 3.053,6 cm³; A ≈ 1.017,9 cm²." },
    { enunciado: "¿Cuántos litros caben en un acuario de 80 × 35 × 40 cm?", pasos: ["V = 80 · 35 · 40 = 112.000 cm³.", "112.000 cm³ = 112 dm³."], resultado: "112 litros." },
  ],
  errores: [
    "Usar la apotema o la generatriz en lugar de la altura al calcular volúmenes.",
    "Olvidar el ⅓ en el volumen de pirámides y conos.",
    "Convertir unidades de volumen multiplicando por 10 o por 100 en lugar de por 1.000.",
    "Sumar solo una base en el área total de prismas y cilindros.",
    "Usar el diámetro como radio en πr², 4πr² o 4/3πr³.",
    "Aplicar la fórmula de Euler a poliedros con agujeros.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Cuenta caras, vértices y aristas de un prisma pentagonal y comprueba la fórmula de Euler.", sol: "C = 7, V = 10, A = 15; 7 + 10 = 15 + 2." },
    { nivel: "básico", q: "Un poliedro convexo tiene 12 vértices y 30 aristas. ¿Cuántas caras tiene? ¿Cuál puede ser?", sol: "C = 30 + 2 − 12 = 20. Un icosaedro." },
    { nivel: "básico", q: "Nombra los cinco poliedros regulares y el polígono de sus caras.", sol: "Tetraedro, octaedro e icosaedro (triángulos); cubo (cuadrados); dodecaedro (pentágonos)." },
    { nivel: "básico", q: "Halla el área total de un ortoedro de 8 × 5 × 3 cm.", sol: "2(40 + 24 + 15) = 158 cm²." },
    { nivel: "básico", q: "Halla el volumen de un cubo de 6 cm de arista y exprésalo en litros.", sol: "216 cm³ = 0,216 L." },
    { nivel: "básico", q: "Halla el área lateral y total de un cilindro de radio 4 cm y altura 10 cm.", sol: "Al = 80π ≈ 251,3 cm²; At = 80π + 32π = 112π ≈ 351,9 cm²." },
    { nivel: "básico", q: "Halla el volumen del cilindro anterior.", sol: "π · 16 · 10 = 160π ≈ 502,7 cm³." },
    { nivel: "básico", q: "Halla el volumen de una pirámide de base cuadrada de 9 cm de lado y 12 cm de altura.", sol: "81 · 12 / 3 = 324 cm³." },
    { nivel: "básico", q: "Halla la superficie y el volumen de una esfera de radio 3 cm.", sol: "A = 36π ≈ 113,1 cm²; V = 36π ≈ 113,1 cm³." },
    { nivel: "básico", q: "Expresa en litros: 2,5 m³; 750 cm³; 4 dm³.", sol: "2.500 L; 0,75 L; 4 L." },
    { nivel: "básico", q: "¿Qué cuerpo se obtiene al girar un rectángulo alrededor de un lado? ¿Y un semicírculo alrededor de su diámetro?", sol: "Un cilindro; una esfera." },
    { nivel: "básico", q: "Halla la generatriz de un cono de radio 5 cm y altura 12 cm.", sol: "√(25 + 144) = 13 cm." },
    { nivel: "medio", q: "Halla el área total de una pirámide cuadrangular regular de lado 10 cm y altura 12 cm.", sol: "ap = √(144 + 25) = 13 cm. Al = 40 · 13 / 2 = 260; Ab = 100. At = 360 cm²." },
    { nivel: "medio", q: "Halla el área total y el volumen de un cono de radio 5 cm y altura 12 cm.", sol: "g = 13. At = π · 5 · 13 + 25π = 90π ≈ 282,7 cm². V = 100π ≈ 314,2 cm³." },
    { nivel: "medio", q: "Calcula la diagonal de un ortoedro de 12 × 4 × 3 cm. ¿Cabe un lápiz de 13 cm?", sol: "√(144 + 16 + 9) = 13 cm. Justo cabe en diagonal." },
    { nivel: "medio", q: "Un prisma hexagonal regular tiene 6 cm de lado y 15 cm de altura. Halla su área total y su volumen.", sol: "ap ≈ 5,2 cm; Ab ≈ 36 · 5,2 / 2 = 93,6 cm². At ≈ 540 + 187,2 = 727,2 cm². V ≈ 1.404 cm³." },
    { nivel: "medio", q: "Una piscina mide 25 × 12 m y tiene 1,8 m de profundidad. ¿Cuántos litros caben? Si se llena con un caudal de 30 L/s, ¿cuántas horas tarda?", sol: "540 m³ = 540.000 L. 18.000 s = 5 horas." },
    { nivel: "medio", q: "Una lata cilíndrica tiene 8 cm de diámetro y contiene 0,5 L. ¿Qué altura tiene?", sol: "500 = π · 16 · h → h ≈ 9,95 cm." },
    { nivel: "medio", q: "Halla el ángulo del sector del desarrollo de un cono de radio 4 cm y generatriz 10 cm.", sol: "360 · 4/10 = 144°." },
    { nivel: "medio", q: "¿Cuántas veces mayor es el volumen de una esfera de radio 6 cm que el de una de radio 2 cm? ¿Y la superficie?", sol: "Radio triple: volumen × 27, superficie × 9." },
    { nivel: "medio", q: "Un cucurucho cónico de 4 cm de radio y 12 cm de altura se llena de helado y lleva encima media esfera de helado del mismo radio. ¿Cuánto helado hay?", sol: "Cono 64π; semiesfera 2/3 · 64π = 128π/3. Total ≈ 201,1 + 134,0 = 335,1 cm³." },
    { nivel: "medio", q: "Calcula el área de cartón de una caja sin tapa de 30 × 20 × 15 cm.", sol: "600 + 2(450) + 2(300) = 2.100 cm²." },
    { nivel: "medio", q: "Calcula la longitud del ecuador terrestre (r ≈ 6.371 km) y la de un paralelo de latitud 60°, sabiendo que su radio es la mitad.", sol: "≈ 40.030 km; ≈ 20.015 km." },
    { nivel: "medio", q: "Calcula cuántos m² de tela hacen falta para una tienda de campaña con forma de pirámide cuadrangular de 2 m de lado y 1,5 m de altura (sin suelo).", sol: "ap = √(2,25 + 1) ≈ 1,80 m. Al = 8 · 1,80 / 2 ≈ 7,2 m²." },
    { nivel: "avanzado", q: "Una lata de 330 mL puede ser un cilindro de r = 3,3 cm o un prisma cuadrado de la misma altura. Compara sus áreas totales.", sol: "h = 330/(π · 10,89) ≈ 9,65 cm. Cilindro: 2π · 3,3 · 9,65 + 2π · 10,89 ≈ 200,1 + 68,4 = 268,5 cm². Prisma: base 330/9,65 ≈ 34,2 cm², lado ≈ 5,85; At ≈ 4 · 5,85 · 9,65 + 2 · 34,2 ≈ 294,2 cm². El cilindro gasta menos." },
    { nivel: "avanzado", q: "Halla el volumen de un tronco de cono de radios 6 y 3 cm y altura 4 cm (completa el cono).", sol: "El cono grande tiene altura 8 (semejanza) y el pequeño 4. V = π(36 · 8 − 9 · 4)/3 = π · 252/3 = 84π ≈ 263,9 cm³." },
    { nivel: "avanzado", q: "Una esfera de 10 cm de diámetro está dentro de un cubo de 10 cm de arista. ¿Qué porcentaje del cubo ocupa?", sol: "V esfera = 4/3 · π · 125 ≈ 523,6 cm³; cubo 1.000 cm³. ≈ 52,4 %." },
    { nivel: "avanzado", q: "Comprueba el resultado de Arquímedes con r = 3: volumen y superficie de la esfera frente al cilindro que la envuelve.", sol: "Esfera V = 36π, cilindro V = π · 9 · 6 = 54π: 36/54 = 2/3. Superficie esfera 36π; cilindro total 36π + 18π = 54π: también 2/3." },
    { nivel: "avanzado", q: "Un depósito está formado por un cilindro de 2 m de diámetro y 3 m de alto con una semiesfera encima. ¿Cuántos litros caben?", sol: "Cilindro 3π ≈ 9,42 m³; semiesfera 2π/3 ≈ 2,09 m³. Total ≈ 11,52 m³ ≈ 11.519 L." },
    { nivel: "avanzado", q: "Al sumergir una piedra en un vaso cilíndrico de 8 cm de diámetro, el agua sube 2,5 cm. ¿Qué volumen tiene la piedra?", sol: "π · 16 · 2,5 = 40π ≈ 125,7 cm³." },
    { nivel: "avanzado", q: "Si se duplican todas las aristas de un ortoedro, ¿qué ocurre con su área y con su volumen? Justifícalo.", sol: "Área × 4 (dimensiones al cuadrado) y volumen × 8 (al cubo)." },
    { nivel: "avanzado", q: "Explica con ángulos por qué no existe un poliedro regular con caras hexagonales.", sol: "Con 3 hexágonos por vértice, 3 · 120° = 360°: quedan planos (mosaico) y no se cierra el vértice." },
    { nivel: "avanzado", q: "Un vaso tiene forma de tronco de cono (radios 3 y 4 cm, altura 12 cm). Estima su capacidad con la media de los radios y compárala con el valor exacto π·h·(R² + Rr + r²)/3.", sol: "Estimación π · 3,5² · 12 ≈ 461,8 cm³. Exacto π · 12 · 37/3 = 148π ≈ 465,0 cm³. Diferencia < 1 %." },
    { nivel: "avanzado", q: "Dos ciudades están en el mismo meridiano, una a 40° N y otra a 30° N. ¿Qué distancia aproximada hay entre ellas por la superficie? (Radio 6.371 km)", sol: "Arco de 10°: 2π · 6.371 · 10/360 ≈ 1.112 km." },
  ],
  quiz: [
    { q: "La fórmula de Euler es…", o: ["C + A = V + 2", "C + V = A + 2", "V + A = C + 2", "C · V = A"], a: 1, e: "Para poliedros convexos." },
    { q: "¿Cuántos poliedros regulares hay?", o: ["4", "5", "6", "infinitos"], a: 1, e: "Sólidos platónicos." },
    { q: "Las caras del dodecaedro son…", o: ["triángulos", "cuadrados", "pentágonos", "hexágonos"], a: 2, e: "12 pentágonos." },
    { q: "Un prisma pentagonal tiene… caras", o: ["5", "7", "10", "15"], a: 1, e: "5 laterales + 2 bases." },
    { q: "Área lateral de un prisma recto:", o: ["P · h", "Ab · h", "P · h / 2", "2 · Ab"], a: 0, e: "Rectángulo desplegado." },
    { q: "En una pirámide regular, ap² =", o: ["h² − (l/2)²", "h² + (l/2)²", "h + l/2", "h² + l²"], a: 1, e: "Triángulo rectángulo." },
    { q: "Al girar un triángulo rectángulo sobre un cateto se obtiene…", o: ["un cilindro", "un cono", "una esfera", "una pirámide"], a: 1, e: "Cuerpo de revolución." },
    { q: "Área lateral del cilindro:", o: ["πr²h", "2πrh", "πrg", "4πr²"], a: 1, e: "Rectángulo 2πr × h." },
    { q: "Área lateral del cono:", o: ["πrg", "2πrg", "πr²", "πrh"], a: 0, e: "Sector circular." },
    { q: "Superficie de la esfera:", o: ["πr²", "2πr²", "4πr²", "4/3πr³"], a: 2, e: "Cuatro círculos máximos." },
    { q: "Volumen del cilindro:", o: ["πr²h", "⅓πr²h", "2πrh", "πrh"], a: 0, e: "Base por altura." },
    { q: "Volumen del cono:", o: ["πr²h", "⅓πr²h", "½πr²h", "πrg"], a: 1, e: "Un tercio del cilindro." },
    { q: "Volumen de la esfera:", o: ["4πr²", "4/3πr³", "⅔πr³", "πr³"], a: 1, e: "Arquímedes." },
    { q: "Generatriz de un cono con r = 6, h = 8:", o: ["14", "10", "48", "√28"], a: 1, e: "√100." },
    { q: "1 dm³ equivale a…", o: ["1 mL", "1 L", "10 L", "1.000 L"], a: 1, e: "Litro." },
    { q: "1 m³ equivale a…", o: ["100 L", "1.000 L", "10.000 L", "10 L"], a: 1, e: "1.000 dm³." },
    { q: "Si el radio de una esfera se duplica, el volumen…", o: ["se duplica", "se multiplica por 4", "se multiplica por 8", "no cambia"], a: 2, e: "2³." },
    { q: "La esfera ocupa del cilindro que la envuelve…", o: ["la mitad", "⅔", "⅓", "¾"], a: 1, e: "Arquímedes." },
    { q: "Diagonal de un ortoedro 2 × 3 × 6:", o: ["11", "7", "36", "√13"], a: 1, e: "√49." },
    { q: "La latitud mide el ángulo respecto del…", o: ["meridiano de Greenwich", "ecuador", "polo norte", "trópico"], a: 1, e: "0° a 90° N o S." },
  ],
  examen: [
    { q: "Poliedro con 6 caras y 12 aristas: vértices", o: ["6", "8", "4", "10"], a: 1, e: "6 + V = 14." },
    { q: "Área total de un cubo de arista 5:", o: ["125", "150", "100", "25"], a: 1, e: "6 · 25." },
    { q: "Volumen de un prisma de base 12 cm² y altura 5 cm:", o: ["60 cm³", "20 cm³", "17 cm³", "120 cm³"], a: 0, e: "Ab · h." },
    { q: "Volumen de una pirámide de base 30 cm² y altura 10 cm:", o: ["300", "100", "150", "30"], a: 1, e: "⅓ · 300." },
    { q: "Área total de un cilindro r = 2, h = 5:", o: ["28π", "20π", "24π", "14π"], a: 0, e: "20π + 8π." },
    { q: "Volumen de un cono r = 3, h = 4:", o: ["36π", "12π", "15π", "9π"], a: 1, e: "9 · 4 / 3." },
    { q: "Volumen de una esfera de radio 3:", o: ["36π", "27π", "12π", "108π"], a: 0, e: "4/3 · 27π." },
    { q: "Una caja de 20 × 10 × 5 cm contiene…", o: ["1 L", "10 L", "0,1 L", "100 L"], a: 0, e: "1.000 cm³." },
  ],
  feynman: ["Qué dice la fórmula de Euler y cómo se comprueba", "Por qué el desarrollo de un cilindro es un rectángulo y el de un cono es un sector", "Por qué el volumen del cono es un tercio del cilindro", "Cómo se relacionan los litros con los decímetros cúbicos"],
  figura: {
    titulo: "Fórmulas de los cuerpos geométricos",
    svg: resumen("Resumen de áreas y volúmenes de los cuerpos geométricos", [
      ["Prisma", "A = P·h + 2Ab · V = Ab · h", "var(--pen)"],
      ["Pirámide", "A = P·ap/2 + Ab · V = ⅓ Ab · h", "var(--red)"],
      ["Cilindro", "A = 2πrh + 2πr² · V = πr²h", "var(--leaf)"],
      ["Cono", "A = πrg + πr² · V = ⅓ πr²h", "var(--inf)"],
      ["Esfera", "A = 4πr² · V = 4/3 πr³", "var(--bac)"],
    ], 170),
  },
  video: { id: "4JPwbTyuLFk", titulo: "ÁREA DE CUERPOS GEOMETRICOS Super facil-Para principiantes", canal: "Daniel Carreón", vistas: 671644, megusta: 0 },
  mapa: mapa("CUERPOS", "var(--inf)", [
    ["Poliedros", "prismas · pirámides", "var(--pen)"],
    ["Regulares", "5 platónicos · Euler", "var(--red)"],
    ["Revolución", "cilindro · cono · esfera", "var(--leaf)"],
    ["Medida", "área · volumen · litros", "var(--inf)"],
  ], 260),
  glosario: [
    ["Poliedro", "Cuerpo limitado por polígonos."],
    ["Cara", "Cada polígono que limita un poliedro."],
    ["Arista", "Segmento en que se unen dos caras."],
    ["Vértice", "Punto donde concurren varias aristas."],
    ["Fórmula de Euler", "C + V = A + 2 en poliedros convexos."],
    ["Poliedro regular", "Caras regulares iguales y mismo número en cada vértice."],
    ["Prisma", "Poliedro con dos bases iguales y paralelas y caras laterales paralelogramos."],
    ["Pirámide", "Poliedro con una base y caras laterales triangulares con un vértice común."],
    ["Apotema de la pirámide", "Altura de una cara lateral."],
    ["Desarrollo plano", "Figura plana que se obtiene al desplegar la superficie de un cuerpo."],
    ["Cuerpo de revolución", "Cuerpo generado al girar una figura plana alrededor de un eje."],
    ["Generatriz", "Segmento que genera la superficie lateral de un cilindro o cono."],
    ["Círculo máximo", "Sección de la esfera por un plano que pasa por su centro."],
    ["Volumen", "Espacio que ocupa un cuerpo."],
    ["Capacidad", "Lo que cabe en un recipiente; 1 L = 1 dm³."],
    ["Latitud y longitud", "Ángulos que sitúan un punto respecto del ecuador y de Greenwich."],
  ],
  situacion: {
    titulo: "Diseñamos un envase sostenible",
    reto: "Una empresa local quiere lanzar un zumo de 500 mL con el envase que use menos material. Vuestro equipo comparará varios diseños con forma de prisma, cilindro y otros cuerpos y presentará una propuesta razonada.",
    pasos: [
      "Medid envases reales (latas, bricks, botes) y calculad su volumen y su área.",
      "Proponed al menos tres diseños de 500 mL con formas distintas.",
      "Para cada diseño, calculad las dimensiones necesarias y el área de material.",
      "Construid en cartulina el desarrollo plano del diseño elegido y comprobad su capacidad con agua o arroz.",
      "Presentad la propuesta valorando el material, la facilidad de apilado y la ergonomía.",
    ],
    producto: "Un prototipo en cartulina y un informe con los cálculos y la comparación de diseños.",
    evaluacion: ["Calcula correctamente áreas y volúmenes.", "Relaciona volumen y capacidad con las unidades adecuadas.", "Construye el desarrollo plano con precisión.", "Argumenta la elección con criterios matemáticos y de sostenibilidad."],
  },
  tarjetas: [
    ["Euler", "C + V = A + 2"], ["Platónicos", "Tetraedro, cubo, octaedro, dodecaedro, icosaedro."],
    ["Prisma", "V = Ab · h"], ["Pirámide", "V = ⅓ Ab · h"],
    ["Cilindro (área)", "2πrh + 2πr²"], ["Cilindro (volumen)", "πr²h"],
    ["Cono (área)", "πrg + πr²"], ["Cono (volumen)", "⅓ πr²h"],
    ["Esfera", "A = 4πr² · V = 4/3 πr³"], ["Generatriz", "g² = h² + r²"],
    ["1 dm³", "1 litro"], ["Diagonal ortoedro", "√(a² + b² + c²)"],
  ],
  familias: ["Buscad en la cocina envases de distintas formas y calculad su capacidad.", "Desmontad una caja de cartón y observad su desarrollo plano.", "Comprobad con agua que 1 L llena un cubo de 10 cm de arista.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido espacial y de la medida: poliedros, fórmula de Euler, poliedros regulares, cuerpos de revolución, desarrollos planos, áreas y volúmenes, unidades de capacidad y coordenadas geográficas (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construcción de poliedros con pajitas o cartulina para verificar Euler.", "Experimento de llenar un cilindro con tres conos de arena o arroz.", "Medir envases reales y calcular la eficiencia del material.", "Situar la escuela en un mapa con latitud y longitud."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: cuerpos geométricos (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
