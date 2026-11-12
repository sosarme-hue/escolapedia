// Matemáticas 1º ESO: perímetros y áreas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, rejilla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Perímetros y áreas",
  minutos: 60,
  objetivos: ["Diferenciar perímetro y área y usar sus unidades", "Calcular el área de cuadrados, rectángulos, paralelogramos, triángulos, rombos y trapecios", "Calcular la longitud de la circunferencia y el área del círculo", "Hallar áreas de figuras compuestas descomponiéndolas"],
  claves: ["perímetro", "área", "base", "altura", "número π", "figura compuesta"],
  pregunta: {
    texto: "Dos parcelas tienen el mismo perímetro, 40 m de valla. Una es un cuadrado de 10 × 10 y otra un rectángulo de 18 × 2. ¿Tienen el mismo terreno?",
    respuesta: "No. El cuadrado tiene 10 · 10 = <b>100 m²</b> y el rectángulo, 18 · 2 = <b>36 m²</b>. <mark>El mismo perímetro puede encerrar áreas muy distintas</mark>. De todos los rectángulos con un perímetro dado, el cuadrado es el que más superficie encierra.",
  },
  bloques: [
    {
      html: `<h3>Perímetro y área: no son lo mismo</h3><ul><li>El <b>perímetro</b> es la <b>longitud del borde</b> de una figura: lo que mide la valla, el marco o el rodapié. Se mide en unidades de longitud (m, cm…). Se calcula <mark>sumando todos los lados</mark>.</li><li>El <b>área</b> es la <b>superficie</b> que ocupa: lo que se pinta, se embaldosa o se siembra. Se mide en unidades cuadradas (m², cm²…).</li></ul><p>Un rectángulo de 5 cm × 3 cm tiene perímetro 5 + 3 + 5 + 3 = <b>16 cm</b> y área 5 · 3 = <b>15 cm²</b>: caben 15 cuadraditos de 1 cm de lado.</p>`,
      svg: svg("Rectángulo de 5 por 3 cuadraditos: el borde mide 16 centímetros y dentro caben 15 centímetros cuadrados", `<rect x="40" y="40" width="150" height="90" fill="var(--leaf)" fill-opacity=".2"/>${rejilla(40, 40, 5, 3, 30, "var(--leaf)")}<rect x="40" y="40" width="150" height="90" fill="none" stroke="var(--red)" stroke-width="4"/>${t(115, 30, "5 cm", { s: 12 })}${t(28, 90, "3", { s: 12, a: "end" })}${t(115, 152, "perímetro 16 cm", { c: "var(--red)", s: 12 })}${t(115, 170, "área 15 cm²", { c: "var(--leaf)", s: 12 })}`),
    },
    {
      html: `<h3>Cuadrado y rectángulo</h3>${tabla(["Figura", "Perímetro", "Área"], [["Cuadrado de lado l", "P = 4 · l", "A = l²"], ["Rectángulo de base b y altura h", "P = 2b + 2h", "A = b · h"]])}<p>Ejemplo: una habitación de 4,5 m × 3 m. Rodapié: 2 · 4,5 + 2 · 3 = <b>15 m</b>. Suelo: 4,5 · 3 = <b>13,5 m²</b>.</p><p>Al revés: si un cuadrado tiene 49 cm² de área, su lado mide √49 = 7 cm y su perímetro 28 cm.</p>`,
      video: vb("areB"),
    },
    {
      html: `<h3>Paralelogramo y triángulo</h3><p>Un <b>romboide</b> se transforma en un rectángulo cortando un triángulo de un lado y pegándolo en el otro. Por eso su área es también <mark>A = b · h</mark>, donde h es la <b>altura</b> (perpendicular a la base), no el lado inclinado.</p><p>Un <b>triángulo</b> es la mitad de un paralelogramo con la misma base y altura:</p><p style="text-align:center"><b>A = b · h / 2</b></p><p>Triángulo de base 8 cm y altura 5 cm: 8 · 5 : 2 = <b>20 cm²</b>. Cualquier lado puede ser la base, siempre que la altura sea la perpendicular a ese lado desde el vértice opuesto.</p>`,
      svg: svg("Un paralelogramo partido por la diagonal en dos triángulos iguales con la misma base y altura", `<path d="M40 130 L 170 130 L 220 50 L 90 50 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.2"/><path d="M40 130 L 220 50" stroke="var(--red)" stroke-width="2"/><path d="M40 130 L 170 130 L 220 50 Z" fill="var(--red)" fill-opacity=".2"/><path d="M90 50 V 130" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="4 3"/>${t(98, 96, "h", { c: "var(--leaf)", s: 13, a: "start" })}${t(105, 148, "b", { s: 13 })}${t(130, 30, "triángulo = paralelogramo : 2", { s: 11, c: "var(--red)" })}${t(130, 170, "A = b · h / 2", { s: 13 })}`),
    },
    {
      html: `<h3>Rombo y trapecio</h3><ul><li><b>Rombo</b>: con sus dos diagonales (D mayor y d menor) se forma un rectángulo que lo contiene y que tiene el doble de área. <mark>A = D · d / 2</mark>. Rombo de diagonales 10 y 6 cm: 30 cm².</li><li><b>Trapecio</b>: tiene dos bases paralelas (B y b). Si se pone otro igual girado al lado, se forma un paralelogramo de base B + b. <mark>A = (B + b) · h / 2</mark>.</li></ul><p>Trapecio de bases 12 y 8 m y altura 5 m: (12 + 8) · 5 : 2 = <b>50 m²</b>.</p>`,
    },
    {
      html: `<h3>Polígonos regulares</h3><p>Un polígono regular de n lados se puede dividir en <b>n triángulos iguales</b> desde el centro. Cada triángulo tiene como base un lado (l) y como altura la <b>apotema</b> (a).</p><p style="text-align:center"><b>A = Perímetro · apotema / 2</b></p><p>Hexágono de lado 4 cm y apotema 3,46 cm: perímetro 6 · 4 = 24 cm → A = 24 · 3,46 : 2 ≈ <b>41,5 cm²</b>.</p><p>Esta fórmula sirve para cualquier polígono regular: pentágonos, octógonos… Las señales de STOP son octógonos regulares.</p>`,
    },
    {
      html: `<h3>La circunferencia y el número π</h3><p>Si mides el contorno de cualquier objeto redondo y lo divides entre su diámetro, siempre sale lo mismo: un poco más de 3. Ese número es <b>π</b> (pi) ≈ <b>3,14</b>. Tiene infinitas cifras decimales sin repetirse.</p><p>La <b>longitud de la circunferencia</b> es:</p><p style="text-align:center"><b>L = 2 · π · r = π · d</b></p><p>Una rueda de radio 30 cm recorre en cada vuelta 2 · 3,14 · 30 = <b>188,4 cm</b>. Un <b>arco</b> de n° mide L · n / 360.</p>`,
      svg: svg("Circunferencia desenrollada: su contorno mide un poco más de tres diámetros", `<circle cx="50" cy="70" r="30" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M20 70 H 80" stroke="var(--red)" stroke-width="2"/>${t(50, 64, "d", { c: "var(--red)", s: 11 })}<path d="M20 130 H 208.5" stroke="var(--pen)" stroke-width="3"/>${[0, 1, 2].map((i) => `<path d="M${20 + i * 60} 140 H ${78 + i * 60}" stroke="var(--red)" stroke-width="3"/>`).join("")}${t(114, 158, "3 diámetros y un poco más", { c: "var(--muted)", s: 10 })}${t(180, 70, "L = π · d", { s: 16, d: true })}`),
    },
    {
      html: `<h3>El área del círculo</h3><p>Si cortas un círculo en muchos sectores muy finos y los colocas alternados, se forma casi un rectángulo de base la mitad de la circunferencia (π · r) y altura el radio (r). Por eso:</p><p style="text-align:center"><b>A = π · r²</b></p><p>Pizza de 15 cm de radio: 3,14 · 15² = 3,14 · 225 ≈ <b>706,5 cm²</b>.</p><p>Cuidado: si te dan el <b>diámetro</b>, primero divide entre 2. Y el <b>sector circular</b> de n° tiene área π · r² · n / 360: un cuarto de pizza es 706,5 : 4 ≈ 176,6 cm².</p>`,
      video: vb("areB2"),
    },
    {
      html: `<h3>Figuras compuestas</h3><p>Muchas figuras reales (una habitación en L, un escudo, un jardín) no tienen una fórmula propia. Se calculan:</p><ul><li><b>Sumando</b>: se divide la figura en partes conocidas y se suman sus áreas.</li><li><b>Restando</b>: se calcula una figura grande y se le quita lo que sobra.</li></ul><p>Ejemplo: una ventana es un rectángulo de 1 m × 1,2 m con un semicírculo de radio 0,5 m encima. Área: 1 · 1,2 + 3,14 · 0,5² : 2 = 1,2 + 0,39 ≈ <b>1,59 m²</b>.</p><p>Ejemplo: una corona circular (como un CD) es el círculo grande menos el pequeño.</p>`,
      svg: svg("Ventana formada por un rectángulo y un semicírculo encima: se suman las dos áreas", `<path d="M80 150 V 80 A 50 50 0 0 1 180 80 V 150 Z" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2.5"/><path d="M80 80 H 180" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>${t(130, 120, "rectángulo", { s: 12 })}${t(130, 66, "semicírculo", { s: 11, c: "var(--red)" })}${t(130, 172, "A total = A₁ + A₂", { s: 12 })}`),
    },
  ],
  figura: {
    titulo: "Perímetros y áreas en un vistazo",
    svg: filas("Fórmulas de área: cuadrado lado al cuadrado; rectángulo y paralelogramo base por altura; triángulo base por altura entre dos; rombo diagonales entre dos; trapecio; círculo pi por radio al cuadrado", [["Cuadrado", "A = l² · P = 4l", "var(--pen)"], ["Rectángulo · romboide", "A = b · h", "var(--inf)"], ["Triángulo", "A = b · h / 2", "var(--sun)"], ["Rombo · trapecio", "D · d / 2 · (B + b) · h / 2", "var(--leaf)"], ["Pol. regular", "A = P · a / 2", "var(--red)"], ["Círculo", "L = 2πr · A = πr²", "var(--ink)"]], 250),
  },
  video: vg("areV"),
  quiz: mezcla([
    { q: "El perímetro se mide en…", o: ["m", "m²", "m³"], a: 0, e: "Es una longitud." },
    { q: "Perímetro de un cuadrado de lado 6 cm:", o: ["24 cm", "36 cm", "12 cm"], a: 0, e: "4 · 6." },
    { q: "Área de un rectángulo de 7 × 4 m:", o: ["28 m²", "22 m²", "11 m²"], a: 0, e: "b · h." },
    { q: "Área de un triángulo de base 10 y altura 6:", o: ["30", "60", "16"], a: 0, e: "60 : 2." },
    { q: "Rombo de diagonales 8 y 5:", o: ["20", "40", "13"], a: 0, e: "40 : 2." },
    { q: "Trapecio de bases 6 y 4 y altura 3:", o: ["15", "30", "72"], a: 0, e: "10 · 3 : 2." },
    { q: "π vale aproximadamente…", o: ["3,14", "2,71", "1,41"], a: 0, e: "Pi." },
    { q: "Longitud de una circunferencia de radio 10 cm:", o: ["62,8 cm", "31,4 cm", "314 cm"], a: 0, e: "2 · 3,14 · 10." },
    { q: "Área de un círculo de radio 2 m:", o: ["12,56 m²", "6,28 m²", "4 m²"], a: 0, e: "3,14 · 4." },
    { q: "El área del romboide usa…", o: ["la altura", "el lado inclinado", "la diagonal"], a: 0, e: "Perpendicular a la base." },
  ]),
  examen: mezcla([
    { q: "Un círculo tiene 20 cm de diámetro. Su área es…", o: ["314 cm²", "1 256 cm²", "62,8 cm²"], a: 0, e: "r = 10." },
    { q: "Un cuadrado de 64 cm² tiene perímetro…", o: ["32 cm", "16 cm", "256 cm"], a: 0, e: "Lado 8." },
    { q: "Corona entre radios 5 y 3 cm:", o: ["50,24 cm²", "12,56 cm²", "6,28 cm²"], a: 0, e: "π(25 − 9)." },
  ]),
  feynman: ["Diferencia entre perímetro y área", "Por qué el área del triángulo se divide entre 2", "De dónde sale la fórmula del trapecio", "Qué es el número π", "Cómo calcular el área de una figura compuesta"],
  mapa: mapa("PERÍMETROS Y ÁREAS", "var(--eso)", [
    ["Perímetro", "suma de lados · m", "var(--red)"],
    ["Cuadriláteros", "b · h · D · d / 2", "var(--pen)"],
    ["Triángulo", "b · h / 2", "var(--sun)"],
    ["Círculo", "2πr · πr²", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Perímetro", "Longitud del borde: suma de los lados."],
    ["Área", "Superficie de la figura, en unidades cuadradas."],
    ["Rectángulo", "A = b · h."],
    ["Triángulo", "A = b · h / 2."],
    ["Rombo", "A = D · d / 2."],
    ["Trapecio", "A = (B + b) · h / 2."],
    ["Circunferencia", "L = 2 · π · r."],
    ["Círculo", "A = π · r²."],
  ],
  familias: ["Calculad cuánta pintura haría falta para una pared de casa (área menos puertas y ventanas).", "Medid con una cinta el contorno de un plato y su diámetro, y dividid: ¡sale π!", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Perímetro y área de polígonos y figuras circulares, descomposición de figuras compuestas, número π (RD 217/2022, Matemáticas, sentido de la medida).",
    ideas: ["Medir objetos redondos y aproximar π en grupo.", "Plano del aula o del patio para calcular superficies.", "Geoplano o papel cuadriculado para deducir fórmulas."],
  },
  fuentes: [RD, { t: "GeoGebra: áreas de figuras planas", url: "https://www.geogebra.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el área y el perímetro de un triángulo rectángulo de catetos 6 y 8 cm e hipotenusa 10 cm.", pasos: ["Los catetos son base y altura: A = 6 · 8 / 2 = 24 cm².", "Perímetro: 6 + 8 + 10 = 24 cm.", "Casualidad: mismo número, distinta unidad."], resultado: "A = 24 cm²; P = 24 cm." },
    { enunciado: "Una mesa redonda tiene 1,2 m de diámetro. ¿Qué superficie tiene y cuánto mide su borde?", pasos: ["r = 0,6 m.", "A = 3,14 · 0,36 ≈ 1,13 m².", "L = 3,14 · 1,2 ≈ 3,77 m."], resultado: "≈ 1,13 m² y ≈ 3,77 m." },
    { enunciado: "Una habitación en forma de L se divide en un rectángulo de 5 × 3 m y otro de 2 × 2 m. ¿Cuántas baldosas de 0,25 m² hacen falta?", pasos: ["Áreas: 15 m² + 4 m² = 19 m².", "Baldosas: 19 : 0,25 = 76.", "Comprobación: 76 · 0,25 = 19."], resultado: "76 baldosas." },
  ],
  errores: [
    "Confundir perímetro y área o sus unidades (m y m²).",
    "Usar el lado inclinado en lugar de la altura en un romboide o un triángulo.",
    "Olvidar dividir entre 2 en el triángulo, el rombo o el trapecio.",
    "Usar el diámetro en lugar del radio en πr².",
    "Calcular r² como r · 2.",
  ],
  ejercicios: [
    { q: "Calcula el perímetro y el área de un rectángulo de 12 cm × 7 cm.", sol: "P = 38 cm; A = 84 cm²." },
    { q: "Un cuadrado tiene 36 m de perímetro. ¿Cuál es su área?", sol: "Lado 9 m; A = 81 m²." },
    { q: "Calcula el área de un romboide de base 9 cm y altura 4 cm.", sol: "36 cm²." },
    { q: "Calcula el área de un triángulo de base 15 m y altura 8 m.", sol: "60 m²." },
    { q: "Calcula el área de un rombo de diagonales 14 y 9 cm.", sol: "63 cm²." },
    { q: "Calcula el área de un trapecio de bases 10 y 6 cm y altura 4 cm.", sol: "32 cm²." },
    { q: "Un pentágono regular tiene 5 cm de lado y 3,44 cm de apotema. Calcula su área.", sol: "P = 25; A = 25 · 3,44 : 2 = 43 cm²." },
    { q: "Calcula la longitud y el área de un círculo de 8 cm de radio.", sol: "L ≈ 50,24 cm; A ≈ 200,96 cm²." },
    { q: "¿Cuántas vueltas da una rueda de 35 cm de radio para recorrer 1 km?", sol: "L = 219,8 cm; 100 000 : 219,8 ≈ 455 vueltas." },
    { q: "Un cuadrado de 10 cm de lado tiene dentro un círculo de 5 cm de radio. ¿Qué área queda fuera del círculo?", sol: "100 − 78,5 = 21,5 cm²." },
  ],
};
