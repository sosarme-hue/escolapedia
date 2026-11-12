// Matemáticas 3º ESO: movimientos en el plano. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, ejes, mezcla } = require("./_eso3");

// Bandera pequeña (figura no simétrica) con origen en (x, y), escala k, girada g grados y reflejada si esp.
const bandera = (x, y, c, g = 0, esp = false, k = 1) => `<g transform="translate(${x} ${y}) rotate(${g}) scale(${esp ? -k : k} ${k})"><path d="M0 0 V -40 L 26 -30 L 0 -20" fill="${c}" fill-opacity=".85" stroke="${c}" stroke-width="2"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Movimientos en el plano",
  minutos: 60,
  objetivos: ["Reconocer traslaciones, giros y simetrías como movimientos que conservan forma y tamaño", "Trabajar con vectores: coordenadas y módulo", "Aplicar movimientos a figuras en el plano cartesiano", "Identificar movimientos en frisos, mosaicos y rosetones"],
  claves: ["movimiento", "vector", "traslación", "giro", "simetría axial", "mosaico"],
  pregunta: {
    texto: "Mira un mosaico de la Alhambra: un mismo dibujo se repite cientos de veces sin dejar huecos. ¿Cómo lo consiguieron sus artesanos?",
    respuesta: "Moviendo una pieza base con <mark>traslaciones, giros y simetrías</mark>. Los artistas andalusíes del siglo XIV dominaban esos movimientos tan bien que en la Alhambra aparecen casi todos los tipos posibles de mosaicos periódicos que la matemática moderna ha clasificado.",
  },
  bloques: [
    {
      html: `<h3>Qué es un movimiento</h3><p>Un <b>movimiento</b> (o isometría) es una transformación del plano que lleva cada figura a otra <mark>igual</mark>: conserva las distancias, los ángulos, la forma y el tamaño. Solo cambia la posición o la orientación.</p><p>Hay tres movimientos básicos: <b>traslación</b>, <b>giro</b> y <b>simetría</b>. Las ampliaciones y reducciones no son movimientos, porque cambian el tamaño: son <b>semejanzas</b>. A la figura inicial la llamamos <b>original</b> y a la obtenida, <b>imagen</b> u homóloga. Si A es un punto, su imagen se escribe A′.</p>`,
      svg: svg("Una bandera original y sus imágenes por una traslación, un giro y una simetría: todas iguales en tamaño", `${bandera(30, 110, "var(--ink)")}${bandera(92, 110, "var(--pen)")}${bandera(160, 110, "var(--leaf)", 35)}${bandera(240, 110, "var(--red)", 0, true)}
        ${t(42, 132, "original", { s: 10 })}${t(104, 132, "traslación", { c: "var(--pen)", s: 10 })}${t(166, 132, "giro", { c: "var(--leaf)", s: 10 })}${t(228, 132, "simetría", { c: "var(--red)", s: 10 })}${t(130, 30, "misma forma y tamaño", { c: "var(--muted)", s: 12 })}`),
    },
    {
      html: `<h3>Vectores</h3><p>Un <b>vector</b> es un segmento orientado: tiene un <b>origen</b> A y un <b>extremo</b> B, y se escribe AB con una flecha encima. Sus elementos son el <b>módulo</b> (longitud), la <b>dirección</b> (la recta que lo contiene) y el <b>sentido</b> (hacia dónde apunta).</p><p>Si A(x₁, y₁) y B(x₂, y₂), las <b>coordenadas del vector</b> son <mark>(x₂ − x₁, y₂ − y₁)</mark>: cuánto avanza en horizontal y en vertical. Su módulo se calcula con Pitágoras: |v| = √(v₁² + v₂²). De A(1, 2) a B(4, 6): v = (3, 4) y |v| = 5.</p>`,
      svg: svg("Vector de A 1,2 a B 4,6 con coordenadas 3 y 4 y módulo 5", `${ejes(30, 160, 20, [0, 10], [0, 7])}<defs><marker id="fv1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--pen)"/></marker></defs>
        <path d="M50 120 H 110 V 40" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-dasharray="5 4"/><path d="M50 120 L 108 43" stroke="var(--pen)" stroke-width="3" marker-end="url(#fv1)"/><circle cx="50" cy="120" r="4" fill="var(--ink)"/>
        ${t(44, 136, "A", { s: 13 })}${t(118, 38, "B", { s: 13, a: "start" })}${t(80, 136, "+3", { c: "var(--red)", s: 11 })}${t(122, 84, "+4", { c: "var(--red)", s: 11, a: "start" })}${t(190, 60, "v = (3, 4)", { c: "var(--pen)", s: 13 })}${t(190, 80, "|v| = 5", { c: "var(--pen)", s: 13 })}`),
      video: { id: "M5LZ1R3LAps", titulo: "Vectores en el plano: concepto, coordenadas y módulo", canal: "Susi Profe", vistas: 900887, megusta: 0 },
    },
    {
      html: `<h3>Traslaciones</h3><p>Una <b>traslación</b> de vector v desplaza todos los puntos de la figura la misma distancia, en la misma dirección y en el mismo sentido que v. La figura no gira ni se da la vuelta.</p><p>En coordenadas es muy sencillo: si v = (a, b), cada punto P(x, y) se transforma en <mark>P′(x + a, y + b)</mark>. Por ejemplo, con v = (3, −2), el triángulo de vértices A(0, 0), B(2, 0), C(1, 3) pasa a A′(3, −2), B′(5, −2), C′(4, 1). Aplicar dos traslaciones seguidas equivale a una sola, cuyo vector es la <b>suma</b> de los dos.</p>`,
    },
    {
      html: `<h3>Giros</h3><p>Un <b>giro</b> de centro O y ángulo α hace rotar cada punto alrededor de O el ángulo α. Por convenio, el ángulo es <b>positivo</b> en sentido <mark>contrario a las agujas del reloj</mark> y negativo en el sentido de las agujas. El centro O es el único punto que no se mueve.</p><p>Giros con centro en el origen fáciles de recordar:</p>${tabla(["Giro", "P(x, y) → P′"], [["90°", "(−y, x)"], ["180°", "(−x, −y)"], ["270° (o −90°)", "(y, −x)"]])}<p>Un giro de 180° se llama también <b>simetría central</b>.</p>`,
      svg: svg("Bandera girada 90, 180 y 270 grados alrededor de un centro O", `<circle cx="130" cy="95" r="5" fill="var(--ink)"/>${t(118, 112, "O", { s: 13 })}
        ${bandera(150, 90, "var(--ink)")}${bandera(125, 75, "var(--leaf)", -90)}${bandera(110, 100, "var(--pen)", 180)}${bandera(135, 115, "var(--red)", 90)}
        <path d="M186 70 A 60 60 0 0 0 110 38" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-dasharray="4 4"/>
        ${t(210, 60, "original", { s: 10 })}${t(70, 52, "90°", { c: "var(--leaf)", s: 12 })}${t(70, 150, "180°", { c: "var(--pen)", s: 12 })}${t(200, 150, "270°", { c: "var(--red)", s: 12 })}`),
    },
    {
      html: `<h3>Simetría axial</h3><p>Una <b>simetría axial</b> de eje e lleva cada punto P a otro P′ de modo que el eje es la <b>mediatriz</b> del segmento PP′: P′ está al otro lado del eje, a la misma distancia y en la perpendicular. Es como un <mark>espejo</mark>.</p><p>A diferencia de traslaciones y giros, la simetría <b>invierte la orientación</b>: una mano derecha se convierte en una izquierda. En coordenadas: respecto al eje X, (x, y) → (x, −y); respecto al eje Y, (x, y) → (−x, y).</p>`,
      svg: svg("Simetría respecto a un eje vertical: la bandera y su reflejo, con un punto P y su imagen P prima a la misma distancia del eje", `<path d="M130 16 V 166" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="8 5"/>${t(138, 26, "eje", { c: "var(--red)", s: 11, a: "start" })}
        ${bandera(80, 130, "var(--pen)", 0, false, 1.4)}${bandera(180, 130, "var(--leaf)", 0, true, 1.4)}
        <circle cx="116" cy="88" r="4" fill="var(--ink)"/><circle cx="144" cy="88" r="4" fill="var(--ink)"/><path d="M116 88 H 144" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 3"/>
        ${t(110, 80, "P", { s: 12, a: "end" })}${t(150, 80, "P′", { s: 12, a: "start" })}${t(130, 160, "misma distancia al eje", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Ejes y centros de simetría de una figura</h3><p>Una figura tiene un <b>eje de simetría</b> si al aplicarle la simetría respecto a ese eje queda igual. Un rectángulo tiene 2 ejes; un cuadrado, 4; un polígono regular de n lados, <mark>n ejes</mark>; un círculo, infinitos.</p><p>Una figura tiene <b>centro de simetría</b> si un giro de 180° alrededor de él la deja igual: el rectángulo, el romboide y el hexágono regular lo tienen; el triángulo equilátero, no. También existen figuras con <b>simetría de giro</b> de otros ángulos: una estrella de cinco puntas queda igual al girarla 72°.</p>`,
    },
    {
      html: `<h3>Composición de movimientos</h3><p>Aplicar un movimiento detrás de otro es <b>componerlos</b>, y el resultado es otro movimiento:</p><ul><li>Dos <b>traslaciones</b> → una traslación (se suman los vectores).</li><li>Dos <b>giros</b> del mismo centro → un giro (se suman los ángulos).</li><li>Dos <b>simetrías de ejes paralelos</b> → una traslación, de vector el doble de la distancia entre los ejes.</li><li>Dos <b>simetrías de ejes que se cortan</b> → un giro, de ángulo el doble del que forman los ejes.</li></ul><p>Por eso dos espejos que forman 60° crean un caleidoscopio con 6 imágenes.</p>`,
    },
    {
      html: `<h3>Frisos y mosaicos</h3><p>Un <b>friso</b> es una banda en la que un motivo se repite mediante <b>traslaciones en una sola dirección</b>, a veces combinadas con simetrías o giros de 180°. Aparece en cenefas, rejas y bordados. Hay exactamente 7 tipos de frisos.</p><p>Un <b>mosaico</b> o teselación cubre todo el plano <mark>sin huecos ni superposiciones</mark>. Con un solo polígono regular solo se puede con triángulos, cuadrados y hexágonos, porque en cada vértice los ángulos deben sumar 360° (6 · 60°, 4 · 90°, 3 · 120°). Combinando polígonos se logran mosaicos semirregulares, como el octógono con el cuadrado.</p>`,
      svg: svg("Mosaico de hexágonos regulares: en cada vértice se juntan tres ángulos de 120 grados", `${[0, 1, 2, 3].flatMap((c) => [0, 1, 2].map((f) => { const r = 22, x = 40 + c * r * 1.5 * 1.15, y = 40 + f * r * 1.73 + (c % 2) * r * 0.866; return `<path d="${[...Array(6)].map((_, k) => `${k ? "L" : "M"}${(x + r * Math.cos((k * Math.PI) / 3)).toFixed(1)} ${(y + r * Math.sin((k * Math.PI) / 3)).toFixed(1)}`).join(" ")}Z" fill="${(c + f) % 3 === 0 ? "var(--pen)" : (c + f) % 3 === 1 ? "var(--leaf)" : "var(--hl)"}" fill-opacity=".45" stroke="var(--ink)" stroke-width="1.5"/>`; })).join("")}
        ${t(220, 70, "3 · 120°", { c: "var(--red)", s: 12 })}${t(220, 88, "= 360°", { c: "var(--red)", s: 12 })}`),
      video: { id: "agjBv-34tGg", titulo: "Mosaicos y teselados en Secundaria (3.º ESO)", canal: "tekman Education", vistas: 19731, megusta: 0 },
    },
    {
      html: `<h3>Movimientos en el arte y la naturaleza</h3><p>Los movimientos están por todas partes:</p><ul><li><b>Arquitectura</b>: los rosetones góticos tienen simetría de giro; los alicatados de la Alhambra combinan traslaciones, giros y simetrías.</li><li><b>Arte</b>: M. C. Escher diseñó mosaicos con peces, pájaros y lagartos que encajan sin huecos.</li><li><b>Naturaleza</b>: las mariposas tienen simetría axial; las estrellas de mar, simetría de giro de 72°; los panales, mosaicos de hexágonos.</li><li><b>Diseño</b>: muchos logotipos se basan en giros y simetrías.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Los tres movimientos en coordenadas",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Traslación de vector a, b: x más a, y más b. Giro de 90 grados con centro el origen: menos y, x. Simetría respecto al eje X: x, menos y. Simetría respecto al eje Y: menos x, y">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Traslación v = (a, b)", "(x, y) → (x + a, y + b)", "var(--pen)"], ["Giro 90° (centro O)", "(x, y) → (−y, x)", "var(--leaf)"], ["Simetría eje X", "(x, y) → (x, −y)", "var(--red)"], ["Simetría eje Y", "(x, y) → (−x, y)", "var(--red)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="300" y="${42 + i * 52}" font-size="16" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "DALC1_aTSPU", titulo: "Giro, traslación y simetría. Transformaciones geométricas", canal: "aisanchez222", vistas: 66424, megusta: 0, busqueda: "traslaciones giros simetrías" },
  quiz: mezcla([
    { q: "¿Cuál de estas transformaciones no es un movimiento?", o: ["Una ampliación", "Un giro", "Una simetría"], a: 0, e: "Cambia el tamaño." },
    { q: "Las coordenadas del vector de A(2, 1) a B(5, 5) son…", o: ["(3, 4)", "(7, 6)", "(−3, −4)"], a: 0, e: "(5 − 2, 5 − 1)." },
    { q: "El módulo de v = (6, 8) es…", o: ["14", "10", "48"], a: 1, e: "√(36 + 64)." },
    { q: "Trasladando P(1, −2) con v = (−3, 4) se obtiene…", o: ["(−2, 2)", "(4, −6)", "(−3, −8)"], a: 0, e: "(1 − 3, −2 + 4)." },
    { q: "Un giro de 180° con centro el origen lleva (3, 5) a…", o: ["(−3, −5)", "(5, 3)", "(−5, 3)"], a: 0, e: "(−x, −y)." },
    { q: "La simetría respecto al eje X lleva (4, 2) a…", o: ["(−4, 2)", "(4, −2)", "(2, 4)"], a: 1, e: "(x, −y)." },
    { q: "¿Qué movimiento invierte la orientación?", o: ["Traslación", "Giro", "Simetría axial"], a: 2, e: "Como un espejo." },
    { q: "¿Cuántos ejes de simetría tiene un hexágono regular?", o: ["3", "6", "12"], a: 1, e: "Uno por cada lado: n ejes." },
    { q: "¿Con qué polígono regular no se puede hacer un mosaico?", o: ["Triángulo", "Pentágono", "Hexágono"], a: 1, e: "108° no divide a 360°." },
    { q: "Dos simetrías de ejes paralelos equivalen a…", o: ["un giro", "una traslación", "otra simetría"], a: 1, e: "Vector: el doble de la distancia entre los ejes." },
  ]),
  examen: mezcla([
    { q: "Un giro de 90° con centro el origen lleva (2, 0) a…", o: ["(0, 2)", "(0, −2)", "(−2, 0)"], a: 0, e: "(−y, x) = (0, 2)." },
    { q: "Componer dos traslaciones de vectores (1, 2) y (3, −5) da el vector…", o: ["(4, −3)", "(3, −10)", "(2, 7)"], a: 0, e: "Se suman." },
    { q: "¿Qué figura tiene centro de simetría?", o: ["Triángulo equilátero", "Rectángulo", "Pentágono regular"], a: 1, e: "Un giro de 180° la deja igual." },
  ]),
  feynman: ["Qué tienen en común todos los movimientos", "Cómo se calculan las coordenadas y el módulo de un vector", "En qué se diferencia una simetría axial de un giro", "Por qué no se puede embaldosar un suelo solo con pentágonos regulares"],
  mapa: mapa("MOVIMIENTOS", "var(--eso)", [
    ["Traslación", "vector · (x + a, y + b)", "var(--pen)"],
    ["Giro", "centro · ángulo", "var(--leaf)"],
    ["Simetría", "eje · espejo", "var(--red)"],
    ["Aplicaciones", "frisos · mosaicos · rosetones", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Movimiento", "Transformación que conserva forma y tamaño."],
    ["Coordenadas de AB", "(x₂ − x₁, y₂ − y₁)"],
    ["Módulo de un vector (a, b)", "√(a² + b²)"],
    ["Traslación de vector (a, b)", "(x, y) → (x + a, y + b)"],
    ["Sentido positivo de un giro", "Contrario a las agujas del reloj."],
    ["Simetría axial", "El eje es la mediatriz entre cada punto y su imagen."],
    ["Mosaicos regulares", "Solo con triángulos, cuadrados o hexágonos."],
    ["Simetría central", "Giro de 180°."],
  ],
  familias: ["Buscad por la casa o por la calle cenefas, baldosas y logotipos e identificad qué movimientos usan.", "Haced un caleidoscopio con dos espejos y comprobad cuántas imágenes salen según el ángulo.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido espacial: transformaciones geométricas en el plano, vectores, traslaciones, giros, simetrías y su presencia en el arte y la naturaleza (RD 217/2022, Matemáticas 3º).",
    ideas: ["Diseñar una tesela al estilo Escher a partir de un cuadrado.", "Ruta fotográfica de simetrías por el barrio o el centro.", "GeoGebra para componer movimientos y descubrir los resultados."],
  },
  fuentes: [RD, { t: "Patronato de la Alhambra y Generalife", url: "https://www.alhambra-patronato.es/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Traslada el triángulo A(1, 1), B(4, 1), C(2, 3) con el vector v = (−2, 3).",
      pasos: ["Sumamos v a cada vértice.", "A′ = (1 − 2, 1 + 3) = (−1, 4).", "B′ = (2, 4); C′ = (0, 6)."],
      resultado: "A′(−1, 4), B′(2, 4), C′(0, 6)." },
    { enunciado: "Aplica al punto P(3, 2) un giro de 90° con centro el origen y después una simetría respecto al eje Y.",
      pasos: ["Giro de 90°: (x, y) → (−y, x) → P′(−2, 3).", "Simetría respecto al eje Y: (x, y) → (−x, y) → P″(2, 3)."],
      resultado: "P″(2, 3)." },
    { enunciado: "Halla el vector que lleva A(−1, 4) a A′(3, 1) y su módulo.",
      pasos: ["v = (3 − (−1), 1 − 4) = (4, −3).", "|v| = √(16 + 9) = 5."],
      resultado: "v = (4, −3), módulo 5." },
  ],
  errores: [
    "Calcular las coordenadas de un vector restando origen menos extremo.",
    "Girar en el sentido de las agujas del reloj cuando el ángulo es positivo.",
    "En la simetría axial, medir la distancia al eje en diagonal y no en perpendicular.",
    "Creer que una ampliación es un movimiento.",
    "Confundir la simetría respecto al eje X con la del eje Y.",
  ],
  ejercicios: [
    { q: "Halla las coordenadas y el módulo del vector que va de A(−2, 1) a B(4, 9).", sol: "v = (6, 8). |v| = √(36 + 64) = 10." },
    { q: "Traslada el cuadrilátero A(0, 0), B(3, 0), C(3, 2), D(0, 2) con v = (1, −4).", sol: "A′(1, −4), B′(4, −4), C′(4, −2), D′(1, −2)." },
    { q: "¿Qué vector traslada P(5, −3) a P′(2, 1)?", sol: "(2 − 5, 1 − (−3)) = (−3, 4)." },
    { q: "Aplica un giro de 180° con centro el origen a A(2, 5) y B(−1, 3).", sol: "A′(−2, −5), B′(1, −3)." },
    { q: "Aplica un giro de 90° con centro el origen a P(4, 1).", sol: "(−y, x) = (−1, 4)." },
    { q: "Halla el simétrico de Q(−3, 4) respecto al eje X y respecto al eje Y.", sol: "Eje X: (−3, −4). Eje Y: (3, 4)." },
    { q: "¿Cuántos ejes de simetría tienen un rectángulo, un triángulo isósceles y un octógono regular?", sol: "2, 1 y 8." },
    { q: "¿Qué letras mayúsculas de la palabra «HOLA» tienen eje de simetría vertical? ¿Y centro de simetría?", sol: "Eje vertical: H, O, A. Centro de simetría: H y O." },
    { q: "Explica por qué se puede hacer un mosaico con cuadrados y no con octógonos regulares solos.", sol: "Cuatro cuadrados suman 4 · 90° = 360° en cada vértice. El ángulo del octógono es 135° y 360 no es múltiplo de 135." },
    { q: "Dos espejos forman un ángulo de 45°. ¿Qué movimiento equivale a reflejarse en uno y luego en el otro?", sol: "Un giro de 90° (el doble del ángulo entre los ejes) con centro en el punto donde se cortan." },
  ],
};
