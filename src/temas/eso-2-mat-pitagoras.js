// Matemáticas 2º ESO: el teorema de Pitágoras. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "El teorema de Pitágoras",
  minutos: 55,
  objetivos: ["Identificar la hipotenusa y los catetos de un triángulo rectángulo", "Enunciar y comprender el teorema de Pitágoras", "Calcular un lado desconocido de un triángulo rectángulo", "Aplicar el teorema a figuras planas y a problemas reales"],
  claves: ["triángulo rectángulo", "hipotenusa", "cateto", "teorema de Pitágoras", "terna pitagórica", "diagonal"],
  pregunta: {
    texto: "Una tele de «50 pulgadas» no mide 50 pulgadas ni de ancho ni de alto. ¿Qué mide entonces?",
    respuesta: "Mide 50 pulgadas su <b>diagonal</b>. Si la pantalla mide 44 de ancho y unas 24 de alto, la diagonal es <mark>√(44² + 24²) ≈ 50</mark>. Ancho, alto y diagonal forman un triángulo rectángulo, y el <b>teorema de Pitágoras</b> los relaciona.",
  },
  bloques: [
    {
      html: `<h3>El triángulo rectángulo</h3><p>Un <b>triángulo rectángulo</b> tiene un ángulo recto (90°). Sus lados tienen nombre propio:</p><ul><li>La <b>hipotenusa</b> (a) es el lado opuesto al ángulo recto. Es siempre el <mark>lado más largo</mark>.</li><li>Los <b>catetos</b> (b y c) son los dos lados que forman el ángulo recto.</li></ul><p>Los otros dos ángulos son agudos y suman 90°, porque los tres ángulos de cualquier triángulo suman 180°.</p>`,
      svg: svg("Triángulo rectángulo con el ángulo recto abajo a la izquierda, catetos b y c, e hipotenusa a", `<path d="M50 140 L 50 40 L 210 140 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="3"/><path d="M50 124 h 16 v 16" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${t(36, 94, "b", { c: "var(--leaf)", s: 16 })}${t(130, 160, "c", { c: "var(--leaf)", s: 16 })}${t(140, 80, "a", { c: "var(--red)", s: 16 })}${t(186, 60, "hipotenusa", { c: "var(--red)", s: 12 })}${t(130, 176, "catetos: b y c", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>El teorema</h3><p>En todo triángulo rectángulo, <mark>el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos</mark>:</p><p style="font-size:1.3em;text-align:center"><b>a² = b² + c²</b></p><p>Interpretación geométrica: si se dibuja un cuadrado sobre cada lado, el área del cuadrado grande (sobre la hipotenusa) es igual a la suma de las áreas de los dos pequeños. Con lados 3, 4 y 5: 9 + 16 = 25.</p><p>Se atribuye a Pitágoras de Samos (siglo VI a. C.), aunque babilonios, egipcios y chinos ya conocían casos concretos mucho antes.</p>`,
      svg: svg("Triángulo de lados 3, 4 y 5 con un cuadrado sobre cada lado: 9 más 16 igual a 25", `<g transform="translate(78 62) scale(.85)">
        <path d="M0 48 L 0 0 L 64 48 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="-48" y="0" width="48" height="48" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>
        <rect x="0" y="48" width="64" height="64" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
        <path d="M0 0 L 64 48 L 112 -16 L 48 -64 Z" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2"/></g>
        ${t(58, 88, "9", { c: "var(--leaf)", s: 15 })}${t(105, 136, "16", { c: "var(--pen)", s: 15 })}${t(126, 60, "25", { c: "var(--red)", s: 16 })}${t(214, 140, "9 + 16 = 25", { s: 12 })}`),
      video: { id: "w6nh99v3r4A", titulo: "Teorema de Pitágoras: fórmula, demostración y ejemplos", canal: "Susi Profe", vistas: 2072787 },
    },
    {
      html: `<h3>Calcular la hipotenusa</h3><p>Si se conocen los dos catetos, se despeja la hipotenusa:</p><p style="text-align:center"><mark>a = √(b² + c²)</mark></p><p>Ejemplo: catetos de 6 cm y 8 cm. a = √(36 + 64) = √100 = <b>10 cm</b>.</p><p>Si la raíz no es exacta, se da una aproximación: catetos 2 y 3 → a = √13 ≈ <b>3,61</b>. Comprobación rápida: la hipotenusa debe ser mayor que cada cateto pero menor que su suma.</p>`,
      video: { id: "2UbdPiqAiHY", titulo: "Teorema de Pitágoras: encontrar la hipotenusa", canal: "Matemáticas profe Alex", vistas: 7202475 },
    },
    {
      html: `<h3>Calcular un cateto</h3><p>Si se conocen la hipotenusa y un cateto, se <b>resta</b>:</p><p style="text-align:center"><mark>b = √(a² − c²)</mark></p><p>Ejemplo: hipotenusa 13 m y un cateto 5 m. b = √(169 − 25) = √144 = <b>12 m</b>.</p><p>El error típico es sumar también aquí. Pregúntate: ¿busco el lado mayor (hipotenusa → suma) o uno de los menores (cateto → resta)?</p>`,
    },
    {
      html: `<h3>¿Es rectángulo? El recíproco</h3><p>El teorema funciona también al revés: si en un triángulo se cumple <b>a² = b² + c²</b> (siendo a el lado mayor), el triángulo es <b>rectángulo</b>. Además:</p><ul><li>Si <b>a² &lt; b² + c²</b>, es <b>acutángulo</b> (todos sus ángulos son agudos).</li><li>Si <b>a² &gt; b² + c²</b>, es <b>obtusángulo</b> (tiene un ángulo obtuso).</li></ul><p>Los grupos de tres enteros que cumplen el teorema se llaman <b>ternas pitagóricas</b>: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25) y sus múltiplos, como (6, 8, 10). Los albañiles egipcios usaban una cuerda con 12 nudos para formar un triángulo 3-4-5 y trazar ángulos rectos.</p>`,
      svg: svg("Cuerda con 12 nudos formando un triángulo de lados 3, 4 y 5 que marca un ángulo recto", `<path d="M50 140 L 50 50 L 170 140 Z" fill="none" stroke="var(--sun)" stroke-width="3"/>${[0, 1, 2, 3].map((i) => `<circle cx="50" cy="${140 - i * 30}" r="5" fill="var(--sun)"/>`).join("")}${[1, 2, 3, 4].map((i) => `<circle cx="${50 + i * 30}" cy="140" r="5" fill="var(--sun)"/>`).join("")}${[1, 2, 3, 4].map((i) => `<circle cx="${50 + i * 24}" cy="${50 + i * 18}" r="5" fill="var(--sun)"/>`).join("")}<path d="M50 126 h 14 v 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${t(32, 100, "3", { s: 15 })}${t(110, 164, "4", { s: 15 })}${t(124, 84, "5", { s: 15 })}${t(204, 60, "12 nudos", { c: "var(--sun)", s: 12 })}`),
    },
    {
      html: `<h3>Pitágoras en las figuras planas</h3><p>Muchas figuras esconden triángulos rectángulos:</p>${tabla(["Figura", "Triángulo rectángulo", "Fórmula"], [["Rectángulo", "base, altura y diagonal", "d = √(b² + h²)"], ["Cuadrado de lado l", "dos lados y la diagonal", "d = √2 · l ≈ 1,41 · l"], ["Triángulo isósceles", "media base, altura y lado igual", "h = √(l² − (b/2)²)"], ["Triángulo equilátero", "lado, mitad del lado y altura", "h = √(l² − (l/2)²) ≈ 0,87 · l"], ["Rombo", "semidiagonales y lado", "l = √((D/2)² + (d/2)²)"], ["Trapecio rectángulo", "altura, diferencia de bases y lado oblicuo", "l = √(h² + (B − b)²)"]])}<p>Hallar la altura con Pitágoras permite luego calcular el <b>área</b>.</p>`,
    },
    {
      html: `<h3>Pitágoras en el espacio</h3><p>En un ortoedro (una caja) de dimensiones a, b y c, la <b>diagonal del espacio</b> se calcula aplicando Pitágoras dos veces:</p><ol><li>Diagonal de la base: d² = a² + b².</li><li>Diagonal del ortoedro: D² = d² + c² = <mark>a² + b² + c²</mark>.</li></ol><p>Ejemplo: una caja de 30 × 40 × 120 cm. D = √(900 + 1.600 + 14.400) = √16.900 = <b>130 cm</b>. Así se sabe si un objeto largo cabe dentro de una caja o un armario.</p>`,
      svg: svg("Ortoedro con la diagonal de la base y la diagonal del espacio marcadas", `<path d="M40 140 h 120 v -70 h -120 z" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2"/><path d="M40 70 l 50 -40 h 120 l -50 40 M160 140 l 50 -40 v -70" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M40 140 l 50 -40 h 120 M90 100 v -70" fill="none" stroke="var(--pen)" stroke-width="1.2" stroke-dasharray="4 3"/>
        <path d="M40 140 L 210 100" stroke="var(--leaf)" stroke-width="2.5"/><path d="M40 140 L 210 30" stroke="var(--red)" stroke-width="2.5"/>${t(150, 136, "d", { c: "var(--leaf)", s: 14 })}${t(120, 76, "D", { c: "var(--red)", s: 14 })}${t(130, 166, "D² = a² + b² + c²", { s: 13 })}`),
    },
    {
      html: `<h3>Problemas con Pitágoras</h3><ul><li><b>Escalera</b>: una escalera de 5 m apoyada en una pared con el pie a 1,4 m. Altura que alcanza: √(25 − 1,96) = √23,04 = <b>4,8 m</b>.</li><li><b>Cometa</b>: hilo de 50 m y la sombra de la cometa a 30 m del niño: altura √(2.500 − 900) = <b>40 m</b>.</li><li><b>Atajo</b>: en un campo de 80 × 60 m, ir por la diagonal (100 m) en lugar de por los lados (140 m) ahorra 40 m.</li><li><b>Pantallas</b>: una tele de 16 : 9 con 32 de ancho mide de alto 18; diagonal √(1.024 + 324) ≈ 36,7 pulgadas.</li></ul><p>Dibuja siempre el triángulo y marca la hipotenusa antes de calcular.</p>`,
    },
  ],
  figura: {
    titulo: "Pitágoras en un vistazo",
    svg: filas("Resumen: hipotenusa lado mayor; a² = b² + c²; hipotenusa con suma; cateto con resta; ternas; diagonal del espacio", [["Hipotenusa", "lado opuesto al ángulo recto (el mayor)", "var(--red)"], ["Teorema", "a² = b² + c²", "var(--pen)"], ["Hipotenusa", "a = √(b² + c²)", "var(--leaf)"], ["Cateto", "b = √(a² − c²)", "var(--sun)"], ["Ternas", "3-4-5 · 5-12-13 · 8-15-17", "var(--inf)"], ["En el espacio", "D² = a² + b² + c²", "var(--ink)"]], 200),
  },
  video: { id: "2yfkEAt2ew0", titulo: "Teorema de Pitágoras, explicación fácil", canal: "Daniel Carreón", vistas: 9510047, megusta: 0, busqueda: "teorema de pitágoras" },
  quiz: mezcla([
    { q: "La hipotenusa es…", o: ["el lado opuesto al ángulo recto", "el lado más corto", "cualquier cateto"], a: 0, e: "Y el mayor." },
    { q: "El teorema de Pitágoras dice…", o: ["a² = b² + c²", "a = b + c", "a² = b² − c²"], a: 0, e: "Hipotenusa al cuadrado." },
    { q: "Catetos 9 y 12. La hipotenusa mide…", o: ["15", "21", "√21"], a: 0, e: "√(81 + 144) = √225." },
    { q: "Hipotenusa 10 y cateto 6. El otro cateto mide…", o: ["8", "√136", "4"], a: 0, e: "√(100 − 36)." },
    { q: "¿Cuál es una terna pitagórica?", o: ["5, 12, 13", "4, 5, 6", "2, 3, 4"], a: 0, e: "25 + 144 = 169." },
    { q: "Un triángulo de lados 4, 5 y 7 es…", o: ["obtusángulo", "rectángulo", "acutángulo"], a: 0, e: "49 > 16 + 25." },
    { q: "La diagonal de un cuadrado de lado 5 mide aproximadamente…", o: ["7,07", "10", "25"], a: 0, e: "5 · √2." },
    { q: "Para hallar la altura de un triángulo isósceles se usa…", o: ["la mitad de la base", "la base entera", "el perímetro"], a: 0, e: "Se divide en dos triángulos rectángulos." },
    { q: "Rectángulo de 8 × 6. Su diagonal mide…", o: ["10", "14", "48"], a: 0, e: "√100." },
    { q: "Los dos ángulos agudos de un triángulo rectángulo suman…", o: ["90°", "180°", "45°"], a: 0, e: "180 − 90." },
  ]),
  examen: mezcla([
    { q: "La altura de un triángulo equilátero de lado 10 cm mide…", o: ["≈ 8,66 cm", "5 cm", "≈ 11,18 cm"], a: 0, e: "√(100 − 25) = √75." },
    { q: "Un rombo de diagonales 16 y 12 cm tiene un lado de…", o: ["10 cm", "20 cm", "14 cm"], a: 0, e: "√(64 + 36)." },
    { q: "La diagonal de un cubo de arista 2 mide…", o: ["√12 ≈ 3,46", "√8 ≈ 2,83", "6"], a: 0, e: "√(4 + 4 + 4)." },
  ]),
  feynman: ["Qué lado es la hipotenusa y cómo reconocerla", "Qué dice el teorema con áreas de cuadrados", "Cuándo se suma y cuándo se resta", "Cómo saber si un triángulo es rectángulo", "Cómo se calcula la diagonal de una caja"],
  mapa: mapa("PITÁGORAS", "var(--eso)", [
    ["Triángulo rectángulo", "hipotenusa · catetos", "var(--red)"],
    ["Teorema", "a² = b² + c²", "var(--pen)"],
    ["Figuras planas", "alturas · diagonales", "var(--leaf)"],
    ["Espacio", "D² = a² + b² + c²", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Hipotenusa", "Lado opuesto al ángulo recto; el más largo."],
    ["Catetos", "Lados que forman el ángulo recto."],
    ["Teorema de Pitágoras", "a² = b² + c²."],
    ["Hipotenusa", "a = √(b² + c²)."],
    ["Cateto", "b = √(a² − c²)."],
    ["Terna pitagórica", "Tres enteros que cumplen el teorema: 3, 4, 5."],
    ["Diagonal del cuadrado", "l · √2."],
    ["Diagonal del ortoedro", "√(a² + b² + c²)."],
  ],
  familias: ["Medid el ancho y el alto de la tele o del móvil y comprobad las pulgadas de la diagonal.", "Usad una cuerda con 12 nudos para formar un ángulo recto en el jardín o el parque.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Teorema de Pitágoras y su recíproco; ternas pitagóricas; aplicación al cálculo de longitudes en figuras planas y cuerpos; resolución de problemas (RD 217/2022, Matemáticas, sentido de la medida y espacial).",
    ideas: ["Demostración con piezas recortadas (puzle de Perigal).", "Medir el patio y comprobar diagonales con cinta métrica.", "Cuerda de 12 nudos para trazar ángulos rectos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): teorema de Pitágoras", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Calcula el área de un triángulo isósceles con lados iguales de 13 cm y base de 10 cm.", pasos: ["La altura divide la base en dos de 5 cm.", "h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.", "Área = 10 · 12 : 2 = 60 cm²."], resultado: "60 cm²" },
    { enunciado: "¿Es rectángulo un triángulo de lados 20, 21 y 29 cm?", pasos: ["Lado mayor: 29 → 29² = 841.", "20² + 21² = 400 + 441 = 841.", "Son iguales."], resultado: "Sí, es rectángulo." },
    { enunciado: "¿Cabe una caña de 1,5 m en una caja de 80 × 60 × 90 cm?", pasos: ["D² = 80² + 60² + 90² = 6.400 + 3.600 + 8.100 = 18.100.", "D = √18.100 ≈ 134,5 cm.", "134,5 cm < 150 cm."], resultado: "No cabe: la diagonal mide unos 134,5 cm." },
  ],
  errores: [
    "Sumar los cuadrados para calcular un cateto (hay que restar).",
    "Aplicar el teorema en triángulos que no son rectángulos.",
    "Confundir la hipotenusa con un cateto: la hipotenusa es siempre el lado mayor.",
    "Olvidar hacer la raíz cuadrada al final.",
    "Escribir √(b² + c²) = b + c.",
  ],
  ejercicios: [
    { q: "Calcula la hipotenusa si los catetos miden 15 y 20 cm.", sol: "√(225 + 400) = √625 = 25 cm." },
    { q: "Calcula el cateto que falta: hipotenusa 17 m y cateto 8 m.", sol: "√(289 − 64) = √225 = 15 m." },
    { q: "Clasifica por sus ángulos los triángulos de lados 6-8-10, 5-6-7 y 3-5-7.", sol: "Rectángulo (100 = 100); acutángulo (49 < 61); obtusángulo (49 > 34)." },
    { q: "Calcula la diagonal de un rectángulo de 12 × 5 cm.", sol: "√169 = 13 cm." },
    { q: "Calcula la altura y el área de un triángulo equilátero de 6 cm de lado.", sol: "h = √27 ≈ 5,2 cm; A ≈ 15,6 cm²." },
    { q: "El lado de un rombo mide 13 cm y una diagonal 24 cm. Calcula la otra diagonal y el área.", sol: "Semidiagonal √(169 − 144) = 5 → 10 cm; A = 24 · 10 : 2 = 120 cm²." },
    { q: "Un trapecio rectángulo tiene bases de 12 y 7 cm y altura 12 cm. ¿Cuánto mide el lado oblicuo?", sol: "√(12² + 5²) = 13 cm." },
    { q: "Una escalera de 6,5 m llega a 6 m de altura. ¿A qué distancia de la pared está el pie?", sol: "√(42,25 − 36) = 2,5 m." },
    { q: "Un barco navega 9 km al norte y 12 km al este. ¿A qué distancia está del puerto?", sol: "15 km." },
    { q: "Calcula la diagonal de un cubo de 5 cm de arista.", sol: "√75 ≈ 8,66 cm." },
  ],
};
