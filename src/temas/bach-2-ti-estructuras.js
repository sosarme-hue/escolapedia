// Tecnología e Ingeniería II 2º Bachillerato · Tema 5. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, flecha, ficha, pasos, compara, rejilla, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

// Apoyos dibujados en (x, y) = punto de contacto con la viga.
const fijo = (x, y) => `<path d="M${x} ${y} l -10 16 h 20 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 14} ${y + 16} h 28" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M${x - 12 + i * 7} ${y + 16} l -5 6" stroke="var(--muted)" stroke-width="1.4"/>`).join("")}`;
const movil = (x, y) => `<path d="M${x} ${y} l -10 14 h 20 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x - 6}" cy="${y + 18}" r="3.5" fill="none" stroke="var(--ink)" stroke-width="1.6"/><circle cx="${x + 6}" cy="${y + 18}" r="3.5" fill="none" stroke="var(--ink)" stroke-width="1.6"/><path d="M${x - 14} ${y + 22} h 28" stroke="var(--ink)" stroke-width="2"/>`;
const empotra = (x, y) => `<rect x="${x - 10}" y="${y - 24}" width="10" height="48" fill="var(--muted)" opacity=".45"/><path d="M${x} ${y - 24} V ${y + 24}" stroke="var(--ink)" stroke-width="2.4"/>`;
const fl = (id, c) => flecha(id, c);
const baja = (x, y0, y1, id, c = "var(--red)") => `<path d="M${x} ${y0} V ${y1}" stroke="${c}" stroke-width="2.6" marker-end="url(#${id})"/>`;
const sube = (x, y0, y1, id, c = "var(--leaf)") => `<path d="M${x} ${y0} V ${y1}" stroke="${c}" stroke-width="2.6" marker-end="url(#${id})"/>`;
const reparto = (x0, x1, y, h, id, c = "var(--red)") => `<rect x="${x0}" y="${y - h}" width="${x1 - x0}" height="${h}" fill="${c}" fill-opacity=".12"/>${Array.from({ length: Math.round((x1 - x0) / 18) + 1 }, (_, i) => { const x = x0 + (i * (x1 - x0)) / Math.round((x1 - x0) / 18); return `<path d="M${x.toFixed(1)} ${y - h} V ${y - 2}" stroke="${c}" stroke-width="1.6" marker-end="url(#${id})"/>`; }).join("")}`;

// Tipos de apoyo.
const apoyosSVG = (() => {
  const id = uid("ap");
  return marco("Tres tipos de apoyo: el apoyo móvil da una reacción perpendicular, la articulación fija da dos componentes y el empotramiento da dos fuerzas y un momento", `
  ${movil(44, 70)}${T(44, 118, "móvil", { fs: 11, b: true })}${T(44, 134, "1 reacción", { fs: 10, c: "var(--muted)" })}${sube(44, 60, 30, id)}
  ${fijo(130, 70)}${T(130, 118, "articulación", { fs: 11, b: true })}${T(130, 134, "2 reacciones", { fs: 10, c: "var(--muted)" })}${sube(130, 60, 30, id)}<path d="M120 64 H 96" stroke="var(--leaf)" stroke-width="2.6" marker-end="url(#${id})"/>
  <path d="M200 70 H 250" stroke="var(--ink)" stroke-width="5"/>${empotra(200, 70)}${T(214, 118, "empotramiento", { fs: 11, b: true })}${T(214, 134, "2 reacciones + M", { fs: 10, c: "var(--muted)" })}
  <path d="M222 50 A 16 16 0 1 1 222 90" fill="none" stroke="var(--leaf)" stroke-width="2.2" marker-end="url(#${id})"/>
  ${T(130, 166, "isostática: incógnitas = 3 ecuaciones", { fs: 11, b: true, c: "var(--pen)" })}`, fl(id, "var(--leaf)"));
})();

// Viga biapoyada con carga puntual: datos del ejemplo.
const vigaPuntualSVG = (() => {
  const id = uid("vp"), idv = uid("vpv");
  return marco("Viga biapoyada de 6 metros con una carga de 12 kilonewtons a 2 metros del apoyo A; las reacciones son 8 kilonewtons en A y 4 en B", `
  <path d="M30 80 H 230" stroke="var(--ink)" stroke-width="6"/>${fijo(30, 83)}${movil(230, 83)}
  ${baja(97, 30, 74, id)}${T(97, 24, "F = 12 kN", { fs: 11.5, b: true, c: "var(--red)" })}
  ${sube(30, 140, 108, idv)}${T(30, 156, "R_A = 8 kN", { fs: 11, b: true, c: "var(--leaf)" })}${sube(230, 140, 108, idv)}${T(230, 156, "R_B = 4 kN", { fs: 11, b: true, c: "var(--leaf)" })}
  ${T(30, 74, "A", { fs: 11, b: true, a: "end" })}${T(238, 74, "B", { fs: 11, b: true, a: "start" })}
  <path d="M30 100 H 97 M97 96 V 104" stroke="var(--muted)" stroke-width="1.2"/>${T(64, 96, "2 m", { fs: 10, c: "var(--muted)" })}${T(164, 96, "4 m", { fs: 10, c: "var(--muted)" })}
  ${T(130, 174, "ΣM_A = 0 → R_B · 6 = 12 · 2", { fs: 11, b: true })}`, fl(id, "var(--red)") + fl(idv, "var(--leaf)"));
})();

// Diagramas de cortante y flector de la viga anterior.
const diagramasSVG = marco("Diagramas de la viga: el cortante vale 8 kilonewtons hasta la carga y menos 4 después; el momento flector crece linealmente hasta 16 kilonewtons metro bajo la carga y baja a cero en B", `
  ${T(14, 22, "V (kN)", { fs: 10, b: true, a: "start", c: "var(--pen)" })}<path d="M30 56 H 230" stroke="var(--muted)" stroke-width="1.4"/>
  <path d="M30 56 V 30 H 97 V 69 H 230 V 56" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.2"/>${T(64, 26, "+8", { fs: 10.5, b: true, c: "var(--pen)" })}${T(164, 82, "−4", { fs: 10.5, b: true, c: "var(--pen)" })}
  ${T(14, 104, "M (kN·m)", { fs: 10, b: true, a: "start", c: "var(--red)" })}<path d="M30 110 H 230" stroke="var(--muted)" stroke-width="1.4"/>
  <path d="M30 110 L 97 160 L 230 110" fill="var(--red)" fill-opacity=".16" stroke="var(--red)" stroke-width="2.4"/>${T(97, 174, "M_máx = 16", { fs: 10.5, b: true, c: "var(--red)" })}
  <path d="M97 30 V 160" stroke="var(--line)" stroke-dasharray="3 3"/>`);

// Secciones resistentes.
const seccionesSVG = marco("Secciones a flexión con la misma área: una rectangular tumbada, la misma de canto y un perfil en doble T; la de canto y el perfil doble T tienen mucho mayor módulo resistente", `
  <rect x="18" y="74" width="60" height="20" fill="var(--pen)" fill-opacity=".7"/>${T(48, 122, "tumbada", { fs: 10.5, b: true })}${T(48, 138, "W pequeño", { fs: 10, c: "var(--red)" })}
  <rect x="118" y="54" width="20" height="60" fill="var(--pen)" fill-opacity=".7"/>${T(128, 132, "de canto", { fs: 10.5, b: true })}${T(128, 148, "W × 3", { fs: 10, c: "var(--leaf)" })}
  <path d="M186 44 h 50 v 8 h -21 v 50 h 21 v 8 h -50 v -8 h 21 v -50 h -21 z" fill="var(--pen)" fill-opacity=".7"/>${T(211, 132, "doble T", { fs: 10.5, b: true })}${T(211, 148, "W máximo", { fs: 10, c: "var(--leaf)" })}
  <path d="M10 84 H 250" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3"/>${T(130, 24, "W = b·h²/6: la altura cuenta al cuadrado", { fs: 11, b: true })}${T(98, 78, "eje neutro", { fs: 8.5, c: "var(--red)" })}`);

// Modos de pandeo.
const pandeoSVG = marco("Longitud de pandeo según los apoyos: biarticulada 1 por L, empotrada y libre 2 por L, empotrada y articulada 0,7 por L, biempotrada 0,5 por L", [
  [36, "1·L", "M36 30 Q 50 90 36 150", "art.-art."], [96, "2·L", "M96 150 Q 98 80 116 30", "emp.-libre"], [160, "0,7·L", "M160 150 Q 176 110 160 70 Q 154 50 160 30", "emp.-art."], [222, "0,5·L", "M222 150 Q 210 120 222 90 Q 234 60 222 30", "emp.-emp."],
].map(([x, k, d, t]) => `<path d="M${x} 30 V 150" stroke="var(--line)" stroke-dasharray="3 3"/><path d="${d}" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M${x - 12} 152 h 24 M${x - 12} 28 h 24" stroke="var(--ink)" stroke-width="2"/>${T(x, 18, k, { fs: 11, b: true, c: "var(--red)" })}${T(x, 170, t, { fs: 9.5, c: "var(--muted)" })}`).join(""));

// Celosía triangular del ejemplo.
const celosiaSVG = (() => {
  const id = uid("cl"), idv = uid("clv");
  return marco("Celosía triangular de dos metros de alto y cuatro de luz con 10 kilonewtons en el nudo superior; las barras inclinadas están comprimidas con 7,07 kilonewtons y la inferior traccionada con 5", `
  <path d="M40 130 L 130 50 L 220 130 Z" fill="none" stroke="var(--ink)" stroke-width="3"/>
  <path d="M40 130 L 130 50 M130 50 L 220 130" stroke="var(--pen)" stroke-width="4" opacity=".6"/><path d="M40 130 H 220" stroke="var(--red)" stroke-width="4" opacity=".6"/>
  ${[[40, 130], [130, 50], [220, 130]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
  ${fijo(40, 135)}${movil(220, 135)}${baja(130, 14, 44, id)}${T(150, 24, "10 kN", { fs: 11, b: true, c: "var(--red)", a: "start" })}
  ${T(70, 80, "−7,07", { fs: 11, b: true, c: "var(--pen)" })}${T(192, 80, "−7,07", { fs: 11, b: true, c: "var(--pen)" })}${T(130, 124, "+5 (tracción)", { fs: 11, b: true, c: "var(--red)" })}
  ${T(24, 126, "A", { fs: 11, b: true })}${T(238, 126, "B", { fs: 11, b: true })}${T(118, 46, "C", { fs: 11, b: true })}
  ${T(130, 176, "− compresión · + tracción (kN)", { fs: 10.5, c: "var(--muted)" })}`, fl(id, "var(--red)") + fl(idv, "var(--leaf)"));
})();

// Vuelco de una grúa.
const vuelcoSVG = (() => {
  const id = uid("vu");
  return marco("Estabilidad al vuelco de una grúa: la carga produce un momento volcador respecto al borde de apoyo y el peso propio y el contrapeso producen el momento estabilizador", `
  <path d="M20 150 H 240" stroke="var(--ink)" stroke-width="2"/><rect x="90" y="126" width="70" height="24" fill="var(--muted)" opacity=".5"/>
  <path d="M120 126 V 40 M60 40 H 230" stroke="var(--ink)" stroke-width="4"/><rect x="50" y="40" width="22" height="26" fill="var(--pen)"/>${T(61, 80, "contrapeso", { fs: 9.5, c: "var(--pen)", b: true })}
  ${baja(220, 44, 92, id)}<rect x="208" y="92" width="24" height="18" fill="var(--red)" fill-opacity=".7"/>${T(220, 124, "carga", { fs: 10, b: true, c: "var(--red)" })}
  <circle cx="160" cy="150" r="4.5" fill="var(--red)"/>${T(160, 168, "eje de vuelco", { fs: 10, c: "var(--red)", b: true })}
  ${T(130, 22, "M_estab ≥ n · M_volc", { fs: 12, b: true })}`, fl(id, "var(--red)"));
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Estructuras: cargas y esfuerzos",
  minutos: 120,
  objetivos: [
    "Identificar los tipos de cargas y de apoyos y reducir cargas distribuidas a su resultante",
    "Aplicar las ecuaciones de equilibrio para calcular las reacciones de vigas isostáticas",
    "Dibujar los diagramas de esfuerzo cortante y momento flector de vigas sencillas",
    "Dimensionar piezas a tracción, compresión, flexión, cortadura y torsión con un coeficiente de seguridad",
    "Calcular la carga crítica de pandeo con la fórmula de Euler",
    "Resolver celosías por el método de los nudos y comprobar la estabilidad al vuelco",
  ],
  claves: ["carga puntual", "carga distribuida", "equilibrio", "reacción", "apoyo móvil", "articulación", "empotramiento", "isostática", "esfuerzo cortante", "momento flector", "módulo resistente", "momento de inercia", "torsión", "pandeo", "celosía", "método de los nudos", "vuelco"],
  pregunta: {
    texto: "Las vigas de acero de los edificios casi nunca son macizas: tienen forma de I o de H. ¿Por qué no se usa una barra rectangular del mismo peso?",
    respuesta: "Porque una viga que trabaja a <mark>flexión</mark> soporta las tensiones mayores en las fibras más alejadas del centro (arriba se comprime y abajo se tracciona), mientras que el material del centro apenas trabaja. El perfil en doble T coloca casi todo el acero en las alas, lejos del eje neutro, y así su <b>módulo resistente</b> es mucho mayor que el de una barra maciza del mismo peso. Con menos material se consigue la misma resistencia.",
  },
  lectura: {
    titulo: "El puente que bailaba con el viento",
    html: `<p>El 7 de noviembre de 1940, el puente colgante de Tacoma Narrows, en Estados Unidos, inaugurado solo cuatro meses antes, empezó a retorcerse con un viento de unos 64 km/h. El tablero ondulaba y giraba como una cinta, con desplazamientos de varios metros. Una hora después se partió y cayó al río. Solo murió un perro, que se había quedado en un coche abandonado.</p><p>El puente era elegante y muy esbelto, y sus cálculos de resistencia eran correctos: aguantaba de sobra el peso de los vehículos. Pero los ingenieros no habían previsto cómo interactuaban la forma de su tablero y el viento, que provocó oscilaciones de torsión cada vez mayores. Desde entonces, los puentes se ensayan en túneles de viento y se diseñan con tableros aerodinámicos y más rígidos.</p><p>La lección vale para cualquier estructura: no basta con que las piezas no se rompan; hay que comprobar su equilibrio, sus esfuerzos internos, sus deformaciones, su estabilidad frente al pandeo o al vuelco y su comportamiento ante cargas variables. En este tema aprenderás a hacer esos cálculos básicos.</p>`,
  },
  bloques: [
    bloque({ h: "5.1 Estructuras y cargas", p: [
      "Una <mark>estructura</mark> es un conjunto de elementos unidos entre sí que soporta cargas y las transmite al suelo o a los apoyos sin romperse ni deformarse en exceso. Sus elementos básicos son las <b>vigas</b> (horizontales, trabajan sobre todo a flexión), los <b>pilares</b> (verticales, a compresión), los <b>tirantes</b> (a tracción), los <b>arcos</b>, las <b>placas</b> y las <b>barras</b> de las celosías.",
      "Las cargas se clasifican según su origen en <b>permanentes</b> (peso propio, cerramientos) y <b>variables</b> (uso, nieve, viento, sismo, temperatura). Según su forma de actuar, pueden ser <b>puntuales</b> (una fuerza en un punto, en N o kN), <b>distribuidas</b> (repartidas a lo largo de una longitud, en N/m o kN/m) o <b>momentos</b> aplicados (en N·m).",
      "Para calcular las reacciones, una carga distribuida se sustituye por su <b>resultante</b>: una carga uniforme q en una longitud L equivale a una fuerza q · L en el centro del tramo; una carga triangular que va de 0 a q equivale a q · L / 2 situada a un tercio de la longitud desde el lado de máxima carga. ¡Ojo!: esta sustitución sirve para el equilibrio, pero no para dibujar los diagramas de esfuerzos.",
      formula("Uniforme: R = q · L (en L/2) &nbsp;&nbsp; Triangular: R = q · L / 2 (a L/3 del lado mayor)"),
    ], svg: (() => { const id = uid("cg"); return marco("Cargas sobre una viga: una carga puntual F, una carga uniformemente repartida q y su resultante q por L en el centro", `<path d="M20 110 H 240" stroke="var(--ink)" stroke-width="6"/>${baja(56, 40, 104, id)}${T(56, 34, "puntual F", { fs: 11, b: true, c: "var(--red)" })}${reparto(110, 230, 104, 40, id, "var(--pen)")}${T(170, 54, "q (kN/m)", { fs: 11, b: true, c: "var(--pen)" })}<path d="M110 130 H 230" stroke="var(--muted)" stroke-width="1.2"/>${T(170, 144, "L", { fs: 11, c: "var(--muted)" })}${T(170, 168, "resultante q·L en L/2", { fs: 11, b: true, c: "var(--leaf)" })}`, fl(id, "var(--red)").replace(/var\(--red\)/g, "var(--red)")); })() }),
    bloque({ h: "5.2 Equilibrio estático en el plano", p: [
      "Una estructura está en <b>equilibrio estático</b> cuando no se traslada ni gira. En el plano, eso exige que se cumplan tres ecuaciones:",
      formula("ΣF<sub>x</sub> = 0 &nbsp;&nbsp; ΣF<sub>y</sub> = 0 &nbsp;&nbsp; ΣM<sub>O</sub> = 0 (respecto a cualquier punto O)"),
      "El <b>momento</b> de una fuerza respecto a un punto es el producto de la fuerza por la distancia perpendicular desde el punto hasta su línea de acción: M = F · d (N·m). Se toma un signo para el giro antihorario y el contrario para el horario.",
      "El método de trabajo es siempre el mismo: 1) dibujar el <b>diagrama de sólido libre</b>, aislando la estructura y sustituyendo cada apoyo por las reacciones que puede ejercer; 2) descomponer las fuerzas inclinadas en componentes x e y; 3) sustituir las cargas repartidas por su resultante; 4) plantear las ecuaciones, empezando por la suma de momentos respecto a un punto por donde pasen el mayor número de incógnitas, para que desaparezcan de la ecuación; y 5) comprobar el resultado con la ecuación que no se haya usado.",
    ], svg: pasos("Método para calcular reacciones: diagrama de sólido libre, descomponer fuerzas, resultantes de cargas repartidas, ecuaciones de equilibrio y comprobación", ["Diagrama de sólido libre", "Descomponer en x e y", "Repartidas → resultante", "ΣM = 0, ΣFy = 0, ΣFx = 0"], "var(--pen)") }),
    bloque({ h: "5.3 Apoyos y grado de estaticidad", p: [
      "Los <b>apoyos</b> o vínculos impiden ciertos movimientos y, a cambio, ejercen reacciones. El <b>apoyo móvil</b> (o deslizante) impide el movimiento perpendicular a la superficie de apoyo: da una sola reacción. La <b>articulación fija</b> impide cualquier desplazamiento pero permite girar: da dos reacciones (R<sub>x</sub> y R<sub>y</sub>). El <b>empotramiento</b> impide desplazamientos y giros: da dos reacciones y un <b>momento de empotramiento</b>.",
      "Una estructura plana tiene tres ecuaciones de equilibrio. Si el número de reacciones desconocidas es igual a 3 y están bien dispuestas, la estructura es <mark>isostática</mark>: las reacciones se calculan solo con la estática (viga biapoyada con una articulación y un apoyo móvil; voladizo empotrado). Si hay más de 3 incógnitas, es <b>hiperestática</b>: es más rígida y segura, pero para calcularla hay que considerar también sus deformaciones. Si hay menos de 3, es un <b>mecanismo</b> y no está en equilibrio para cualquier carga.",
      "En la práctica, una viga biapoyada se monta con un apoyo fijo y otro móvil para que pueda dilatarse con la temperatura sin generar tensiones. Los puentes tienen aparatos de apoyo de neopreno o con rodillos por esa misma razón.",
    ], svg: apoyosSVG }),
    bloque({ h: "5.4 Cálculo de reacciones", p: [
      "Veamos el procedimiento con la viga biapoyada del dibujo: 6 m de luz, articulación en A, apoyo móvil en B y una carga de 12 kN a 2 m de A.",
      "Tomando momentos respecto a A (desaparecen R<sub>Ax</sub> y R<sub>Ay</sub>), con sentido antihorario positivo: R<sub>B</sub> · 6 − 12 · 2 = 0 → <b>R<sub>B</sub> = 4 kN</b>. Sumando fuerzas verticales: R<sub>A</sub> + R<sub>B</sub> − 12 = 0 → <b>R<sub>A</sub> = 8 kN</b>. Como no hay fuerzas horizontales, R<sub>Ax</sub> = 0. Comprobación con momentos en B: −R<sub>A</sub> · 6 + 12 · 4 = −48 + 48 = 0 ✓.",
      "Obsérvese que el apoyo más cercano a la carga soporta más. En general, para una carga F a distancias a de A y b de B (L = a + b): R<sub>A</sub> = F · b / L y R<sub>B</sub> = F · a / L, una regla que recuerda a la palanca.",
      "En un <b>voladizo</b> empotrado de longitud L con una carga F en el extremo, el empotramiento da R = F hacia arriba y un momento M = F · L. Si además soporta su peso como carga uniforme q, se suma R = q · L y M = q · L²/2. Estos momentos de empotramiento son los que hacen que un balcón necesite un buen anclaje en el forjado.",
    ], svg: vigaPuntualSVG, video: V("es-reacciones", "Cómo calcular reacciones en apoyos: viga isostática", "cálculo de reacciones en vigas") }),
    bloque({ h: "5.5 Esfuerzos internos: axil, cortante y flector", p: [
      "Si cortamos imaginariamente una viga por una sección, para que cada trozo siga en equilibrio la otra parte debe ejercer sobre él unos <mark>esfuerzos internos</mark>. En el plano son tres:",
      "El <b>esfuerzo axil</b> N, en la dirección del eje de la pieza: positivo si tracciona y negativo si comprime. El <b>esfuerzo cortante</b> V, perpendicular al eje, que tiende a deslizar una parte respecto a la otra. Y el <b>momento flector</b> M, que tiende a curvar la pieza: con el convenio habitual es positivo si la viga se curva como una sonrisa (comprime la parte superior y tracciona la inferior).",
      "Para calcularlos en una sección situada a una distancia x, se toma el trozo de la izquierda y se suman las fuerzas y momentos que actúan sobre él: V(x) es la suma de las fuerzas verticales a la izquierda (hacia arriba positivas) y M(x) la suma de sus momentos respecto a la sección (horarios positivos, con cargas a la izquierda).",
      "Entre el cortante y el flector hay una relación muy útil: la pendiente del diagrama de momentos es el cortante, dM/dx = V. Por eso el <b>momento flector máximo</b> aparece donde el cortante se anula o cambia de signo, y en un tramo sin carga el cortante es constante y el momento varía linealmente; bajo una carga repartida, el cortante varía linealmente y el momento es una parábola.",
    ], svg: compara("Esfuerzos internos: el axil actúa a lo largo del eje y tracciona o comprime; el cortante es perpendicular y desliza; el flector curva la pieza", ["N y V", ["N: a lo largo del eje", "tracción + / compr. −", "V: perpendicular", "tiende a deslizar"]], ["Flector M", ["curva la pieza", "+ si «sonríe»", "dM/dx = V", "máx. donde V = 0"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "5.6 Diagramas de cortante y momento flector", p: [
      "Los <b>diagramas de esfuerzos</b> representan cómo varían V y M a lo largo de la viga. Sirven para localizar la sección más solicitada, que es la que se dimensiona.",
      "En la viga del ejemplo (R<sub>A</sub> = 8 kN, carga de 12 kN a 2 m, R<sub>B</sub> = 4 kN), el cortante vale +8 kN desde A hasta la carga; allí baja 12 kN y pasa a −4 kN hasta B, donde la reacción lo devuelve a cero. El momento flector crece linealmente desde 0 en A hasta M = 8 · 2 = <b>16 kN·m</b> bajo la carga y disminuye linealmente hasta 0 en B. Coincide con la fórmula de la carga puntual, M<sub>máx</sub> = F · a · b / L = 12 · 2 · 4 / 6 = 16 kN·m.",
      "Conviene recordar los casos típicos de la tabla de la derecha:",
      formula("Biapoyada, F en el centro: M<sub>máx</sub> = F·L/4 &nbsp;&nbsp; Biapoyada, carga q: M<sub>máx</sub> = q·L²/8 (en el centro)"),
      formula("Voladizo, F en el extremo: M<sub>máx</sub> = F·L &nbsp;&nbsp; Voladizo, carga q: M<sub>máx</sub> = q·L²/2 (en el empotramiento)"),
      "Con carga repartida en una viga biapoyada, el cortante es una recta que va de +qL/2 a −qL/2 y se anula en el centro, donde el momento (una parábola) es máximo. En los voladizos, el máximo está siempre en el empotramiento, que es por donde suelen romperse.",
    ], svg: diagramasSVG, video: V("es-diagramas", "Diagrama de fuerza cortante y momento flector en vigas", "diagrama de momento flector") }),
    bloque({ h: "5.7 Tracción y compresión. Deformaciones", p: [
      "Una barra sometida a un esfuerzo axil N trabaja a tracción o compresión simple, con una tensión normal uniforme en toda la sección:",
      formula("σ = N / S ≤ σ<sub>adm</sub> = σ<sub>e</sub> / n"),
      "<b>Dimensionar</b> es elegir la sección mínima que cumple esa condición: S ≥ N / σ<sub>adm</sub>. <b>Comprobar</b> es calcular la tensión de una sección dada y ver si es admisible. Además, a veces hay que limitar la deformación: aplicando la ley de Hooke, el alargamiento de una barra es",
      formula("ΔL = N · L / (E · S)"),
      "Si una pieza no puede dilatarse libremente (un raíl soldado, una tubería entre dos muros), un aumento de temperatura ΔT produce una <b>tensión térmica</b> de compresión σ = E · α · ΔT, independiente de la longitud. Para un acero (E = 210 GPa, α = 12 · 10<sup>−6</sup> K<sup>−1</sup>) con 30 °C de calentamiento, σ = 210 000 · 12 · 10<sup>−6</sup> · 30 = 75,6 MPa: un valor importante que puede provocar pandeo. Por eso se dejan juntas de dilatación o se pretensan los carriles.",
    ], svg: ficha("Fórmulas de tracción y compresión: tensión, dimensionado, alargamiento y tensión térmica", "Axil N", ["σ = N / S ≤ σe / n", "S ≥ N / σadm", "ΔL = N·L / (E·S)", "σ térmica = E·α·ΔT"], "var(--red)") }),
    bloque({ h: "5.8 Flexión: tensiones y módulo resistente", p: [
      "En una viga flectada, las fibras de un lado se alargan (tracción) y las del otro se acortan (compresión). Entre ellas hay una capa que no cambia de longitud: la <b>fibra neutra</b>, que pasa por el centro de gravedad de la sección. La tensión crece linealmente con la distancia y a la fibra neutra y es máxima en las fibras extremas:",
      formula("σ<sub>máx</sub> = M · y<sub>máx</sub> / I = M / W"),
      "I es el <b>momento de inercia</b> de la sección respecto al eje neutro (en mm⁴ o cm⁴) y W = I / y<sub>máx</sub> el <mark>módulo resistente</mark> (mm³ o cm³), que mide la capacidad de la sección para resistir la flexión. Para las secciones más comunes:",
      formula("Rectángulo b × h: I = b·h³/12, W = b·h²/6 &nbsp;&nbsp; Círculo de diámetro d: I = π·d⁴/64, W = π·d³/32"),
      "Como la altura h aparece al cuadrado en W, una tabla de 60 × 20 mm colocada de canto resiste tres veces más que tumbada. Llevando la idea al límite se obtienen los <b>perfiles</b> laminados en doble T (IPE, HEB), que concentran el material en las alas: sus valores de W figuran en tablas (por ejemplo, el IPE 200 tiene W<sub>x</sub> = 194 cm³). Para dimensionar a flexión: W ≥ M<sub>máx</sub> / σ<sub>adm</sub>.",
    ], svg: seccionesSVG }),
    bloque({ h: "5.9 Cortadura y torsión", p: [
      "En la <b>cortadura</b> (o cizalladura) dos fuerzas iguales y opuestas, muy próximas, tienden a deslizar una sección respecto a la contigua, como al cortar con unas tijeras. Aparece en remaches, tornillos, pasadores y chavetas. Se supone una tensión tangencial media τ = V / S. Si un perno trabaja en dos secciones a la vez (unión de doble cortadura), cada una soporta la mitad. Como orden de magnitud, la tensión tangencial admisible de un acero es unos 0,6 veces la normal.",
      "En la <b>torsión</b>, un par T hace girar unas secciones respecto a otras alrededor del eje, como en los árboles de transmisión o las llaves de vaso. En un eje circular macizo, la tensión tangencial es máxima en la superficie:",
      formula("τ<sub>máx</sub> = T / W<sub>p</sub> &nbsp;&nbsp; W<sub>p</sub> = π · d³ / 16"),
      "Para dimensionar un árbol se calcula primero el par a partir de la potencia y la velocidad de giro: P = T · ω, con ω = 2π · n / 60 (n en rpm). Ejemplo: un árbol que transmite 15 kW a 1 450 rpm soporta T = 15 000 / 151,8 = 98,8 N·m; con τ<sub>adm</sub> = 40 MPa necesita W<sub>p</sub> ≥ 98 800 / 40 = 2 470 mm³ y un diámetro d ≥ 23,3 mm. Los ejes huecos son más ligeros con casi la misma resistencia, por la misma razón que los perfiles en doble T.",
    ], svg: ficha("Fórmulas de cortadura y torsión: tensión tangencial media, tensión de torsión en un eje y relación entre potencia, par y velocidad", "Cortadura y torsión", ["τ = V / S", "τ = T / Wp ; Wp = π·d³/16", "P = T · ω", "ω = 2π·n / 60"], "var(--leaf)") }),
    bloque({ h: "5.10 El pandeo", p: [
      "Una pieza larga y delgada sometida a <b>compresión</b> puede fallar mucho antes de alcanzar su resistencia: de repente se curva lateralmente y se colapsa. Es el <mark>pandeo</mark>, una inestabilidad que se puede comprobar apretando una regla de plástico por sus extremos. Depende de la rigidez (E · I), de la longitud y de cómo estén sujetos los extremos.",
      "Leonhard Euler calculó en 1744 la <b>carga crítica</b> a partir de la cual se produce el pandeo de una barra esbelta:",
      formula("F<sub>cr</sub> = π² · E · I<sub>mín</sub> / L<sub>p</sub>² &nbsp;&nbsp; con L<sub>p</sub> = β · L"),
      "I<sub>mín</sub> es el momento de inercia mínimo de la sección (la barra pandea hacia el lado más flexible) y L<sub>p</sub> la <b>longitud de pandeo</b>, que depende de los apoyos: β = 1 con los dos extremos articulados, β = 2 con un extremo empotrado y otro libre, β = 0,7 con un extremo empotrado y otro articulado, y β = 0,5 con los dos empotrados. Como L<sub>p</sub> está al cuadrado, un pilar empotrado-libre resiste cuatro veces menos que uno biarticulado, y uno biempotrado, cuatro veces más.",
      "Para evitar el pandeo se usan secciones con mucho momento de inercia en todas direcciones (tubos, perfiles HEB), se reduce la longitud libre con arriostramientos y se usa un coeficiente de seguridad: F ≤ F<sub>cr</sub> / n. La fórmula de Euler solo vale para piezas esbeltas; en las cortas, falla antes el material por compresión.",
    ], svg: pandeoSVG }),
    bloque({ h: "5.11 Estructuras trianguladas: el método de los nudos", p: [
      "Las <b>celosías</b> o cerchas son estructuras de barras unidas por sus extremos formando triángulos, la única figura que no se deforma si sus lados no cambian de longitud. Se usan en cubiertas de naves, puentes, torres eléctricas y grúas porque son muy ligeras. Se calculan suponiendo que las uniones son articulaciones y que las cargas se aplican en los nudos: así, cada barra solo trabaja a <b>tracción o compresión</b>.",
      "Una celosía plana con b barras y n nudos es isostática si b = 2n − 3. El <mark>método de los nudos</mark> consiste en: 1) calcular las reacciones de la estructura completa; 2) aislar un nudo con no más de dos barras desconocidas; 3) plantear ΣF<sub>x</sub> = 0 y ΣF<sub>y</sub> = 0 en ese nudo, suponiendo todas las barras traccionadas (fuerzas que «salen» del nudo); 4) pasar al nudo siguiente. Un resultado negativo indica que la barra está comprimida.",
      "En la celosía triangular del dibujo (A y B separados 4 m, C a 2 m de altura y 10 kN en C), por simetría R<sub>A</sub> = R<sub>B</sub> = 5 kN. En el nudo A, las barras AC (a 45°) y AB: ΣF<sub>y</sub>: 5 + F<sub>AC</sub> · sen 45° = 0 → F<sub>AC</sub> = −7,07 kN (compresión); ΣF<sub>x</sub>: F<sub>AB</sub> + F<sub>AC</sub> · cos 45° = 0 → F<sub>AB</sub> = +5 kN (tracción). Las barras comprimidas se dimensionan además a pandeo.",
    ], svg: celosiaSVG, video: V("es-nudos", "Armaduras: método de nodos", "estructuras armaduras método de los nudos") }),
    bloque({ h: "5.12 El método de las secciones", p: [
      "Cuando solo interesa el esfuerzo de unas pocas barras de una celosía grande, es más rápido el <b>método de las secciones</b> (o de Ritter). Se corta la celosía con una línea imaginaria que atraviese como máximo tres barras de esfuerzo desconocido, se aísla una de las dos partes y se aplican a ella las tres ecuaciones de equilibrio.",
      "El truco está en tomar momentos respecto al punto donde se cortan dos de las barras cortadas: así, en la ecuación solo queda la tercera incógnita. Por ejemplo, en una cercha de cordones paralelos, el esfuerzo del cordón inferior en el centro se obtiene tomando momentos respecto al nudo superior situado encima: N<sub>inf</sub> = M / h, donde M es el momento flector en esa sección (como si fuera una viga) y h la altura de la cercha.",
      "Esta relación explica cómo trabaja una celosía: los <b>cordones</b> superior e inferior soportan el momento flector (uno comprimido y otro traccionado), y las <b>diagonales</b> y montantes soportan el cortante. Cuanto más alta es la cercha, menores son los esfuerzos en los cordones. Hoy estos cálculos los hacen programas de <b>análisis matricial y elementos finitos</b>, pero el ingeniero debe saber estimarlos a mano para comprobar que los resultados del ordenador son razonables.",
    ], svg: rejilla("En una celosía, los cordones resisten el momento flector y las diagonales el cortante; el cordón superior se comprime y el inferior se tracciona", ["Elemento", "Resiste", "Trabaja a"], [["Cordón superior", "flector", "compresión"], ["Cordón inferior", "flector", "tracción"], ["Diagonales", "cortante", "T o C"], ["Montantes", "cortante", "T o C"]], "var(--pen)") }),
    bloque({ h: "5.13 Estabilidad al vuelco y al deslizamiento", p: [
      "Además de resistir, una estructura debe ser <b>estable</b>: no debe volcar ni deslizar. Una grúa, un muro de contención, una valla publicitaria o una estantería pueden volcar si las fuerzas horizontales o las cargas excéntricas producen un momento mayor que el que las mantiene en pie.",
      "Para comprobar el <mark>vuelco</mark> se elige el <b>eje de vuelco</b> (la arista sobre la que giraría la estructura) y se comparan el <b>momento volcador</b> (de las fuerzas que tienden a hacerla girar) y el <b>momento estabilizador</b> (del peso propio, los contrapesos y los anclajes). El coeficiente de seguridad al vuelco suele exigirse de al menos 1,5:",
      formula("n<sub>v</sub> = M<sub>estabilizador</sub> / M<sub>volcador</sub> ≥ 1,5"),
      "Para el <b>deslizamiento</b> se compara la fuerza horizontal con la fuerza de rozamiento máxima, μ · N. Las soluciones para mejorar la estabilidad son aumentar la base, bajar el centro de gravedad, añadir contrapesos o anclar la estructura al suelo. Las grúas torre llevan un contrapeso en la contrapluma y un lastre en la base, y sus limitadores de carga reducen la carga máxima cuando el carro se aleja del mástil.",
    ], svg: vuelcoSVG }),
    bloque({ h: "5.14 Diseño estructural hoy", p: [
      "El cálculo de estructuras está regulado por normas. En España, el <b>Código Técnico de la Edificación</b> (CTE) fija las acciones (peso propio, sobrecargas de uso, nieve, viento, sismo) y las exigencias de seguridad, y el <b>Código Estructural</b> (que incorpora los Eurocódigos) regula las estructuras de hormigón y de acero. Se usa el método de los <b>estados límite</b>: se mayoran las cargas con coeficientes (por ejemplo, 1,35 las permanentes y 1,5 las variables) y se minoran las resistencias de los materiales.",
      "Se comprueban dos tipos de estados límite. Los <b>últimos</b> (ELU) corresponden al colapso: rotura, pandeo, vuelco o pérdida de equilibrio. Los <b>de servicio</b> (ELS) aseguran que la estructura funcione bien: que las vigas no flechen tanto como para agrietar tabiques (límites del tipo L/300), que no vibren de forma molesta y que el hormigón no se fisure en exceso.",
      "Los programas de <b>elementos finitos</b> dividen la estructura en millones de pequeños elementos y calculan tensiones y deformaciones en cada uno, incluso con cargas dinámicas o materiales no lineales. Y el diseño actual busca también la <b>sostenibilidad</b>: optimizar la forma para usar menos material (optimización topológica), elegir materiales con baja huella de carbono como la madera laminada cruzada, y diseñar para desmontar y reutilizar.",
    ], svg: compara("Estados límite: los últimos tratan el colapso, como rotura, pandeo o vuelco; los de servicio el buen funcionamiento, como flechas, vibraciones y fisuras", ["ELU (últimos)", ["rotura", "pandeo", "vuelco", "cargas × 1,35/1,5"]], ["ELS (servicio)", ["flechas ≤ L/300", "vibraciones", "fisuras", "comodidad y uso"]], "var(--red)", "var(--leaf)") }),
  ],
  figura: figura("Estructuras", "Equilibrio y reacciones, diagramas de esfuerzos, dimensionado y estabilidad", [["Equilibrio", "ΣF = 0 · ΣM = 0", "reacciones"], ["Esfuerzos", "N · V · M", "M_máx donde V = 0"], ["Dimensionar", "σ = M/W ≤ σadm", "τ = T/Wp"], ["Estabilidad", "Euler · vuelco", "celosías"]], "var(--pen)"),
  video: V("es-diagramas", "Diagrama de fuerza cortante y momento flector en vigas", "diagrama de momento flector"),
  ejemplos: [
    { enunciado: "Una viga biapoyada de 6 m soporta una carga de 12 kN a 2 m del apoyo A. Calcula las reacciones y el momento flector máximo.", pasos: ["ΣM<sub>A</sub> = 0: R<sub>B</sub> · 6 − 12 · 2 = 0 → R<sub>B</sub> = 4 kN.", "ΣF<sub>y</sub> = 0: R<sub>A</sub> = 12 − 4 = 8 kN.", "M bajo la carga: R<sub>A</sub> · 2 = 16 kN·m (= F·a·b/L = 12 · 2 · 4/6)."], resultado: "R<sub>A</sub> = 8 kN, R<sub>B</sub> = 4 kN y M<sub>máx</sub> = 16 kN·m bajo la carga." },
    { enunciado: "Una viga de madera biapoyada de 4 m soporta una carga uniforme de 5 kN/m. Es de 100 mm de ancho y σ<sub>adm</sub> = 10 MPa. Calcula el canto necesario.", pasos: ["R<sub>A</sub> = R<sub>B</sub> = q·L/2 = 10 kN. M<sub>máx</sub> = q·L²/8 = 5 · 16/8 = 10 kN·m = 10 · 10<sup>6</sup> N·mm.", "W ≥ M/σ<sub>adm</sub> = 10<sup>7</sup>/10 = 10<sup>6</sup> mm³.", "b·h²/6 ≥ 10<sup>6</sup> → h² ≥ 6 · 10<sup>6</sup>/100 = 60 000 → h ≥ 245 mm."], resultado: "Canto mínimo de unos 245 mm (se elegiría 250 mm)." },
    { enunciado: "Un voladizo de 2 m soporta una carga de 3 kN en el extremo y su peso propio de 1 kN/m. Calcula las reacciones del empotramiento.", pasos: ["Resultante del peso: 1 · 2 = 2 kN a 1 m del empotramiento.", "R = 3 + 2 = 5 kN hacia arriba.", "M<sub>emp</sub> = 3 · 2 + 2 · 1 = 8 kN·m."], resultado: "R = 5 kN y momento de empotramiento de 8 kN·m." },
    { enunciado: "Calcula la carga crítica de pandeo de una barra maciza de acero (E = 210 GPa) de 40 mm de diámetro y 2 m, biarticulada. ¿Y si estuviera empotrada en un extremo y libre en el otro?", pasos: ["I = π · d⁴/64 = π · 40⁴/64 = 125 664 mm⁴.", "Biarticulada (L<sub>p</sub> = 2 000 mm): F<sub>cr</sub> = π² · 210 000 · 125 664/2 000² = 65 100 N.", "Empotrada-libre (L<sub>p</sub> = 4 000 mm): F<sub>cr</sub> = 65 100/4."], resultado: "65,1 kN biarticulada y 16,3 kN empotrada-libre." },
    { enunciado: "Una celosía triangular tiene los apoyos A (fijo) y B (móvil) separados 4 m y el nudo C a 2 m de altura en el centro, con 10 kN vertical en C. Calcula los esfuerzos en las barras.", pasos: ["Por simetría, R<sub>A</sub> = R<sub>B</sub> = 5 kN. b = 3, n = 3: 3 = 2 · 3 − 3, isostática.", "Nudo A: ΣF<sub>y</sub>: 5 + F<sub>AC</sub> sen 45° = 0 → F<sub>AC</sub> = −7,07 kN.", "ΣF<sub>x</sub>: F<sub>AB</sub> + F<sub>AC</sub> cos 45° = 0 → F<sub>AB</sub> = +5 kN. Por simetría, F<sub>BC</sub> = −7,07 kN."], resultado: "AC y BC comprimidas con 7,07 kN; AB traccionada con 5 kN." },
    { enunciado: "Calcula el diámetro de un árbol que transmite 15 kW a 1 450 rpm si τ<sub>adm</sub> = 40 MPa.", pasos: ["ω = 2π · 1 450/60 = 151,8 rad/s; T = P/ω = 15 000/151,8 = 98,8 N·m.", "W<sub>p</sub> ≥ T/τ<sub>adm</sub> = 98 800/40 = 2 470 mm³.", "π·d³/16 ≥ 2 470 → d³ ≥ 12 580 → d ≥ 23,3 mm."], resultado: "d ≥ 23,3 mm (se elegiría 25 mm)." },
  ],
  errores: [
    "Olvidar el momento de empotramiento en un voladizo: el empotramiento da dos reacciones y un momento.",
    "Usar la resultante de una carga repartida para dibujar los diagramas: solo sirve para el equilibrio global.",
    "Equivocar el brazo de un momento: es la distancia perpendicular a la línea de acción de la fuerza, no la distancia al punto de aplicación.",
    "Mezclar unidades en la flexión: si M está en N·m y W en mm³, hay que pasar M a N·mm para obtener MPa.",
    "Usar el momento de inercia máximo en la fórmula de Euler: el pandeo se produce hacia el lado más flexible (I mínimo).",
    "Interpretar un esfuerzo negativo en una barra como un error: en el método de los nudos indica compresión.",
  ],
  ejercicios: [
    B("Clasifica estas cargas: peso del tejado, nieve, personas en un aula, viento, una máquina de 500 kg sobre un forjado.", "Permanente: peso del tejado. Variables: nieve, personas, viento, máquina (si puede moverse; si es fija, permanente). La máquina se modela como carga puntual o distribuida en su superficie."),
    B("Sustituye por su resultante: a) 4 kN/m en 3 m; b) carga triangular de 0 a 6 kN/m en 3 m.", "a) 12 kN a 1,5 m del inicio. b) 6 · 3/2 = 9 kN a 1 m del extremo de 6 kN/m (L/3)."),
    B("Indica cuántas reacciones da cada apoyo: móvil, articulación y empotramiento.", "Móvil: 1. Articulación: 2. Empotramiento: 3 (dos fuerzas y un momento)."),
    B("¿Es isostática una viga con dos articulaciones fijas? ¿Y con un empotramiento y un apoyo móvil?", "Dos articulaciones: 4 incógnitas, hiperestática de grado 1. Empotramiento + móvil: 4 incógnitas, también hiperestática de grado 1."),
    B("Una viga biapoyada de 5 m tiene una carga de 10 kN en el centro. Calcula las reacciones y el momento máximo.", "R<sub>A</sub> = R<sub>B</sub> = 5 kN. M<sub>máx</sub> = F·L/4 = 10 · 5/4 = 12,5 kN·m en el centro."),
    B("Un voladizo de 1,5 m soporta 4 kN en el extremo. Calcula la reacción y el momento de empotramiento.", "R = 4 kN; M = 4 · 1,5 = 6 kN·m."),
    B("Un tirante de acero (σ<sub>adm</sub> = 150 MPa) debe soportar 30 kN. Calcula la sección mínima.", "S ≥ 30 000/150 = 200 mm² (d ≥ 16 mm)."),
    B("Calcula el módulo resistente de una sección rectangular de 50 × 150 mm colocada de canto y tumbada.", "De canto: W = 50 · 150²/6 = 187 500 mm³. Tumbada: W = 150 · 50²/6 = 62 500 mm³ (tres veces menos)."),
    B("¿Qué es la fibra neutra y dónde están las tensiones máximas en una viga a flexión?", "Capa de la sección que no se alarga ni se acorta; pasa por el centro de gravedad. Las tensiones máximas están en las fibras más alejadas de ella."),
    B("Calcula el par que transmite un motor de 4 kW a 1 000 rpm.", "ω = 2π · 1 000/60 = 104,7 rad/s; T = 4 000/104,7 = 38,2 N·m."),
    B("¿Qué longitud de pandeo tiene un pilar de 3 m empotrado en la base y libre arriba? ¿Y biempotrado?", "Empotrado-libre: 2 · 3 = 6 m. Biempotrado: 0,5 · 3 = 1,5 m."),
    B("Comprueba si una celosía de 7 nudos y 11 barras es isostática.", "2n − 3 = 14 − 3 = 11 = b: sí, es isostática."),
    M("Una viga biapoyada de 8 m soporta 20 kN a 3 m de A y 10 kN a 6 m de A. Calcula las reacciones y el momento en cada carga.", "ΣM<sub>A</sub>: 8R<sub>B</sub> = 20 · 3 + 10 · 6 = 120 → R<sub>B</sub> = 15 kN; R<sub>A</sub> = 15 kN. M(3) = 15 · 3 = 45 kN·m. M(6) = 15 · 6 − 20 · 3 = 30 kN·m. Máximo 45 kN·m en la primera carga."),
    M("Una viga biapoyada de 6 m soporta una carga uniforme de 4 kN/m en toda su longitud y una puntual de 6 kN en el centro. Calcula las reacciones y el momento máximo.", "R<sub>A</sub> = R<sub>B</sub> = (24 + 6)/2 = 15 kN. M<sub>máx</sub> (centro) = q·L²/8 + F·L/4 = 4 · 36/8 + 6 · 6/4 = 18 + 9 = 27 kN·m."),
    M("Una viga biapoyada de 5 m tiene una carga uniforme de 6 kN/m solo en los 3 primeros metros desde A. Calcula las reacciones.", "Resultante 18 kN a 1,5 m de A. ΣM<sub>A</sub>: 5R<sub>B</sub> = 18 · 1,5 → R<sub>B</sub> = 5,4 kN; R<sub>A</sub> = 12,6 kN."),
    M("Dibuja y describe los diagramas de V y M de un voladizo de 3 m con carga uniforme de 2 kN/m.", "Tomando x desde el extremo libre: V(x) = −2x (de 0 a −6 kN en el empotramiento, recta); M(x) = −x² (parábola de 0 a −9 kN·m en el empotramiento). El máximo absoluto, 9 kN·m = q·L²/2, está en el empotramiento."),
    M("Un IPE 200 (W<sub>x</sub> = 194 cm³) trabaja a flexión con M = 30 kN·m. ¿Qué tensión máxima tiene? ¿Es admisible con un acero S275 y n = 1,5?", "σ = 30 · 10<sup>6</sup>/194 · 10³ = 154,6 MPa. σ<sub>adm</sub> = 275/1,5 = 183 MPa: sí es admisible."),
    M("Calcula el diámetro mínimo de una viga maciza circular que soporta M = 2 kN·m con σ<sub>adm</sub> = 120 MPa.", "W ≥ 2 · 10<sup>6</sup>/120 = 16 667 mm³; π·d³/32 ≥ 16 667 → d³ ≥ 169 765 → d ≥ 55,4 mm."),
    M("Una barra de acero (E = 210 GPa) de 3 m y 400 mm² soporta 50 kN de tracción. Calcula la tensión y el alargamiento.", "σ = 50 000/400 = 125 MPa. ΔL = 50 000 · 3 000/(210 000 · 400) = 1,79 mm."),
    M("Un raíl de acero soldado (E = 210 GPa, α = 12 · 10<sup>−6</sup> K<sup>−1</sup>) se instaló a 15 °C. ¿Qué tensión tiene a 45 °C si no puede dilatarse?", "σ = 210 000 · 12 · 10<sup>−6</sup> · 30 = 75,6 MPa de compresión."),
    M("Una unión con un perno de 12 mm trabaja a doble cortadura con una fuerza de 18 kN. ¿Qué tensión tangencial soporta el perno?", "Cada sección: S = π · 6² = 113,1 mm². τ = 18 000/(2 · 113,1) = 79,6 MPa."),
    M("Calcula la carga crítica de un pilar biarticulado de 3 m con un tubo de I = 1,2 · 10<sup>6</sup> mm⁴ (E = 210 GPa). ¿Qué carga admite con n = 3?", "F<sub>cr</sub> = π² · 210 000 · 1,2 · 10<sup>6</sup>/3 000² = 276 350 N ≈ 276 kN. F<sub>adm</sub> = 92 kN."),
    M("Una celosía tiene las barras AC y BC a 30° con la horizontal sobre una base AB de 6 m, con una carga de 12 kN en C. Calcula los esfuerzos.", "R<sub>A</sub> = R<sub>B</sub> = 6 kN. Nudo A: 6 + F<sub>AC</sub> sen 30° = 0 → F<sub>AC</sub> = −12 kN (compresión). F<sub>AB</sub> = −F<sub>AC</sub> cos 30° = 10,39 kN (tracción). Cuanto más baja es la cercha, mayores son los esfuerzos."),
    M("Una valla publicitaria de 300 kg tiene su centro de gravedad en el centro de una base de 1,2 m. El viento ejerce 1,5 kN a 2 m de altura. Calcula el coeficiente de seguridad al vuelco.", "M<sub>estab</sub> = 300 · 9,8 · 0,6 = 1 764 N·m. M<sub>volc</sub> = 1 500 · 2 = 3 000 N·m. n<sub>v</sub> = 0,59 < 1: vuelca. Hay que anclarla o lastrarla."),
    A("Una viga biapoyada de 6 m con un voladizo de 2 m más allá de B (A en x = 0, B en x = 6) soporta una carga uniforme de 3 kN/m en los 8 m. Calcula las reacciones y el momento en B.", "Resultante 24 kN en x = 4. ΣM<sub>A</sub>: 6R<sub>B</sub> = 24 · 4 → R<sub>B</sub> = 16 kN; R<sub>A</sub> = 8 kN. M<sub>B</sub> (voladizo) = −3 · 2²/2 = −6 kN·m (tracción arriba)."),
    A("En la viga anterior, ¿dónde se anula el cortante en el vano AB y cuánto vale allí el momento?", "V(x) = 8 − 3x = 0 → x = 2,67 m. M = 8 · 2,67 − 3 · 2,67²/2 = 21,33 − 10,67 = 10,67 kN·m (máximo positivo)."),
    A("Una viga de madera de 2,5 m (σ<sub>adm</sub> = 12 MPa, b = 80 mm) debe soportar una persona de 1 000 N en cualquier punto, más su peso de 200 N/m. Calcula el canto mínimo.", "El caso peor es la carga en el centro: M = F·L/4 + q·L²/8 = 1 000 · 2,5/4 + 200 · 6,25/8 = 625 + 156,25 = 781,25 N·m. W ≥ 781 250/12 = 65 104 mm³. h² ≥ 6 · 65 104/80 = 4 883 → h ≥ 70 mm."),
    A("Compara la masa por metro de un eje macizo y uno hueco (d<sub>ext</sub> = 40 mm, d<sub>int</sub> = 30 mm) con el mismo W<sub>p</sub>. El W<sub>p</sub> del hueco es π(D⁴ − d⁴)/(16D).", "Hueco: W<sub>p</sub> = π(2 560 000 − 810 000)/(16 · 40) = 8 590 mm³. Macizo con el mismo W<sub>p</sub>: d³ = 16 · 8 590/π = 43 750 → d = 35,2 mm. Áreas: hueco 549,8 mm²; macizo 973,1 mm². El hueco pesa un 43 % menos."),
    A("Un pilar de 4 m empotrado en la base y articulado arriba es un perfil con I<sub>x</sub> = 2,77 · 10<sup>7</sup> mm⁴ e I<sub>y</sub> = 1,42 · 10<sup>6</sup> mm⁴ (E = 210 GPa). Calcula la carga crítica.", "Se usa I<sub>mín</sub> = 1,42 · 10<sup>6</sup> mm⁴; L<sub>p</sub> = 0,7 · 4 000 = 2 800 mm. F<sub>cr</sub> = π² · 210 000 · 1,42 · 10<sup>6</sup>/2 800² = 375 400 N ≈ 375 kN. Si se arriostra en el plano débil, podría aprovecharse I<sub>x</sub>."),
    A("Una cercha de cordones paralelos de 1,5 m de altura y 12 m de luz, biapoyada, soporta en conjunto 4 kN/m. Estima el esfuerzo en los cordones en el centro.", "M<sub>centro</sub> = q·L²/8 = 4 · 144/8 = 72 kN·m. N = M/h = 72/1,5 = 48 kN: cordón superior comprimido y cordón inferior traccionado con 48 kN."),
    A("Una grúa tiene un peso propio de 40 kN a 1 m del eje de vuelco (lado estable) y un contrapeso de 30 kN a 4 m. Si la pluma alcanza 12 m desde el eje de vuelco, ¿qué carga máxima puede levantar con n<sub>v</sub> = 1,5?", "M<sub>estab</sub> = 40 · 1 + 30 · 4 = 160 kN·m. M<sub>volc</sub> ≤ 160/1,5 = 106,7 kN·m → F ≤ 106,7/12 = 8,9 kN (unos 900 kg)."),
  ],
  quiz: [
    q4("Una carga uniforme q en una longitud L equivale a…", ["q en L/2", "q·L en L/2", "q·L en L/3", "q·L²/2"], 1, "Resultante en el centro."),
    q4("Las ecuaciones de equilibrio en el plano son…", ["2", "3", "4", "6"], 1, "ΣFx, ΣFy, ΣM."),
    q4("Un apoyo móvil da…", ["1 reacción", "2 reacciones", "2 reacciones y un momento", "ninguna"], 0, "Perpendicular al apoyo."),
    q4("Un empotramiento impide…", ["solo desplazamientos verticales", "desplazamientos y giros", "solo giros", "nada"], 1, "Da también un momento."),
    q4("Una viga con más de 3 reacciones desconocidas es…", ["isostática", "hiperestática", "un mecanismo", "inestable"], 1, "Sobran incógnitas."),
    q4("Viga biapoyada de 4 m con 8 kN en el centro: cada reacción vale…", ["2 kN", "4 kN", "8 kN", "16 kN"], 1, "Simetría."),
    q4("El momento máximo de una biapoyada con carga q es…", ["q·L/4", "q·L²/8", "q·L²/2", "q·L"], 1, "En el centro."),
    q4("En un voladizo, el momento máximo está…", ["en el extremo libre", "en el centro", "en el empotramiento", "donde se quiera"], 2, "M = F·L."),
    q4("La relación entre cortante y flector es…", ["V = dM/dx", "M = dV/dx", "V = M·x", "V = M/W"], 0, "El flector es máximo donde V = 0."),
    q4("El esfuerzo axil positivo indica…", ["compresión", "tracción", "cortadura", "torsión"], 1, "La barra se estira."),
    q4("El alargamiento de una barra es…", ["N·E/(L·S)", "N·L/(E·S)", "E·S/(N·L)", "N/S"], 1, "Ley de Hooke."),
    q4("El módulo resistente de un rectángulo es…", ["b·h/6", "b·h²/6", "b·h³/12", "b²·h/12"], 1, "La altura al cuadrado."),
    q4("Los perfiles en doble T son eficientes porque…", ["pesan más", "alejan el material del eje neutro", "son macizos", "no se oxidan"], 1, "Más W con menos material."),
    q4("En la torsión de un eje macizo, W<sub>p</sub> =", ["π·d³/32", "π·d³/16", "π·d⁴/64", "π·d²/4"], 1, "Doble que el W a flexión."),
    q4("La potencia transmitida por un eje es…", ["T/ω", "T·ω", "T·n", "ω/T"], 1, "P = T·ω."),
    q4("En la fórmula de Euler, la carga crítica es inversamente proporcional a…", ["E", "I", "L<sub>p</sub>²", "π²"], 2, "Las piezas largas pandean antes."),
    q4("La longitud de pandeo de una barra empotrada y libre es…", ["0,5 L", "0,7 L", "L", "2 L"], 3, "β = 2."),
    q4("Una celosía plana es isostática si…", ["b = n", "b = 2n − 3", "b = 3n", "b = 2n"], 1, "b barras y n nudos."),
    q4("En el método de los nudos, un resultado negativo indica…", ["error", "tracción", "compresión", "cortante"], 2, "Si se supusieron traccionadas."),
    q4("Para comprobar el vuelco se comparan…", ["fuerzas verticales", "momentos estabilizador y volcador", "tensiones", "deformaciones"], 1, "Respecto al eje de vuelco."),
  ],
  examen: [
    q4("Viga de 10 m con 20 kN a 4 m de A. R<sub>B</sub> =", ["8 kN", "12 kN", "10 kN", "20 kN"], 0, "20 · 4/10."),
    q4("En la viga anterior, M<sub>máx</sub> =", ["48 kN·m", "80 kN·m", "50 kN·m", "200 kN·m"], 0, "20 · 4 · 6/10."),
    q4("Voladizo de 3 m con q = 2 kN/m. M<sub>emp</sub> =", ["6 kN·m", "9 kN·m", "18 kN·m", "3 kN·m"], 1, "2 · 9/2."),
    q4("Sección 60 × 120 mm de canto. W =", ["72 000 mm³", "144 000 mm³", "36 000 mm³", "864 000 mm³"], 1, "60 · 14 400/6."),
    q4("M = 3 kN·m y W = 25 000 mm³. σ =", ["12 MPa", "120 MPa", "1,2 MPa", "75 MPa"], 1, "3 · 10<sup>6</sup>/25 000."),
    q4("Motor de 10 kW a 955 rpm (ω ≈ 100 rad/s). T =", ["10 N·m", "100 N·m", "1 000 N·m", "955 N·m"], 1, "10 000/100."),
    q4("Si L<sub>p</sub> se duplica, F<sub>cr</sub>…", ["se duplica", "se divide entre 2", "se divide entre 4", "no cambia"], 2, "L<sub>p</sub> al cuadrado."),
    q4("Celosía simétrica con barras a 45° y 20 kN en el vértice. Esfuerzo en cada barra inclinada:", ["−10 kN", "−14,1 kN", "−20 kN", "+14,1 kN"], 1, "10/sen 45°, compresión."),
  ],
  feynman: ["Cómo se calculan las reacciones de una viga biapoyada", "Qué son el esfuerzo cortante y el momento flector y dónde es máximo el flector", "Por qué una viga resiste más de canto que tumbada", "Qué es el pandeo y cómo influyen los apoyos", "Cómo se resuelve una celosía por el método de los nudos"],
  glosario: [
    ["Estructura", "Conjunto de elementos unidos que soporta cargas y las transmite a los apoyos."],
    ["Carga distribuida", "Carga repartida a lo largo de una longitud, en N/m o kN/m."],
    ["Momento de una fuerza", "Producto de la fuerza por su distancia perpendicular a un punto."],
    ["Diagrama de sólido libre", "Dibujo de un cuerpo aislado con todas las fuerzas y reacciones que actúan sobre él."],
    ["Reacción", "Fuerza o momento que ejerce un apoyo sobre la estructura."],
    ["Isostática", "Estructura cuyas reacciones se calculan solo con las ecuaciones de la estática."],
    ["Hiperestática", "Estructura con más reacciones desconocidas que ecuaciones de equilibrio."],
    ["Esfuerzo axil", "Esfuerzo interno en la dirección del eje: tracción o compresión."],
    ["Esfuerzo cortante", "Esfuerzo interno perpendicular al eje que tiende a deslizar secciones."],
    ["Momento flector", "Esfuerzo interno que tiende a curvar la pieza."],
    ["Fibra neutra", "Capa de la sección que no se alarga ni se acorta en la flexión."],
    ["Momento de inercia", "Propiedad geométrica de la sección que mide su rigidez a flexión."],
    ["Módulo resistente", "Cociente I/y_máx; relaciona el flector con la tensión máxima."],
    ["Torsión", "Esfuerzo producido por un par que hace girar las secciones alrededor del eje."],
    ["Pandeo", "Flexión lateral repentina de una pieza esbelta comprimida."],
    ["Longitud de pandeo", "Longitud equivalente que depende de los apoyos (β·L)."],
    ["Celosía", "Estructura de barras articuladas que forman triángulos."],
    ["Momento volcador", "Momento de las fuerzas que tienden a hacer volcar una estructura."],
  ],
  situacion: {
    titulo: "El puente de palillos más eficiente",
    reto: "Vuestro equipo diseñará, calculará y construirá un puente de celosía con palillos de madera y cola que salve 50 cm y soporte la mayor carga posible con el menor peso. Ganará el puente con mejor eficiencia (carga soportada entre peso del puente).",
    pasos: [
      "Ensayad a tracción y a compresión unos palillos sueltos para conocer su resistencia y comprobad cómo influye la longitud en el pandeo.",
      "Diseñad una celosía isostática (b = 2n − 3) y calculad con el método de los nudos los esfuerzos de cada barra para una carga en el centro.",
      "Reforzad las barras comprimidas más largas (doblándolas o arriostrándolas) y dibujad los planos acotados.",
      "Construid el puente con una plantilla y pesadlo.",
      "Ensayadlo colgando pesos en el centro hasta la rotura, grabad el ensayo y analizad qué barra falló primero.",
    ],
    producto: "El puente, la memoria de cálculo con los esfuerzos de cada barra y un vídeo del ensayo con el análisis de la rotura.",
    evaluacion: [
      "Plantea correctamente las reacciones y los esfuerzos de la celosía.",
      "Relaciona el diseño con los esfuerzos de tracción, compresión y pandeo.",
      "Construye con precisión siguiendo los planos.",
      "Analiza la rotura y propone mejoras justificadas.",
    ],
  },
  mapa: mapaB("ESTRUCTURAS", [
    ["Equilibrio", "cargas · apoyos · reacciones", "var(--pen)"],
    ["Esfuerzos", "N · V · M · diagramas", "var(--red)"],
    ["Dimensionado", "σ = N/S · σ = M/W · τ = T/Wp", "var(--leaf)"],
    ["Estabilidad", "pandeo de Euler · celosías · vuelco", "var(--inf)"],
  ]),
  tarjetas: [
    ["Equilibrio en el plano", "ΣFx = 0, ΣFy = 0, ΣM = 0"],
    ["Reacciones con carga puntual", "RA = F·b/L ; RB = F·a/L"],
    ["Biapoyada, F central", "M_máx = F·L/4"],
    ["Biapoyada, carga q", "M_máx = q·L²/8"],
    ["Voladizo", "F·L o q·L²/2 en el empotramiento"],
    ["Relación V-M", "dM/dx = V; M máx donde V = 0"],
    ["Flexión", "σ = M/W ; W rect. = b·h²/6"],
    ["Torsión", "τ = T/Wp ; Wp = π·d³/16"],
    ["Potencia y par", "P = T·ω ; ω = 2πn/60"],
    ["Euler", "Fcr = π²·E·I / Lp²"],
    ["Celosía isostática", "b = 2n − 3"],
    ["Vuelco", "M_estab / M_volc ≥ 1,5"],
  ],
  familias: [
    "Probad a romper un espagueti largo y uno corto apretándolos por los extremos: el largo pandea mucho antes.",
    "Colocad una regla de canto y tumbada entre dos libros y apoyad una goma de borrar encima: comparad cuánto se dobla.",
    "Buscad en vuestro barrio estructuras trianguladas (grúas, torres eléctricas, cubiertas) y fotografiadlas.",
    "Calculad entre todos el momento que produce una persona colgada al final de un columpio o de una barra.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas mecánicos»: estructuras sencillas; tipos de cargas y apoyos; estabilidad; cálculo de reacciones y esfuerzos en vigas isostáticas y celosías; dimensionado básico a tracción, compresión, flexión, cortadura y torsión; pandeo.`,
    ideas: [
      "Simulación de vigas y celosías con un programa gratuito de cálculo de estructuras o con GeoGebra para los diagramas.",
      "Vigas de espuma con líneas dibujadas para ver cómo se acortan y alargan las fibras al flectar.",
      "Concurso de puentes de palillos o de papel con ensayo a rotura y cálculo de eficiencia.",
      "Medir con una báscula las reacciones de una tabla apoyada en dos básculas al mover una carga.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Código Técnico de la Edificación: Documento Básico de Seguridad Estructural", url: "https://www.codigotecnico.org/" },
    { t: "Momento flector, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Momento_flector" },
    { t: "Pandeo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pandeo" },
  ],
  revisado: "2026-11-21",
};
