// Matemáticas 2º ESO: potencias y raíces cuadradas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces cuadradas",
  minutos: 55,
  objetivos: ["Calcular potencias de base entera y fraccionaria y exponente natural", "Aplicar las propiedades de las potencias", "Expresar números grandes y pequeños con potencias de 10", "Calcular raíces cuadradas exactas y aproximadas"],
  claves: ["base", "exponente", "potencia de potencia", "cuadrado perfecto", "raíz cuadrada", "radicando"],
  pregunta: {
    texto: "Si una noticia la cuentas a 3 amigos y cada uno se la cuenta a otros 3, y así sucesivamente, ¿cuánta gente la conocerá en la décima ronda?",
    respuesta: "En cada ronda se multiplica por 3, así que en la décima la oirán <mark>3¹⁰ = 59.049 personas</mark>. Las potencias sirven para escribir de forma corta multiplicaciones repetidas y explican por qué algunas cosas (rumores, virus, ahorros) crecen tan deprisa.",
  },
  bloques: [
    {
      html: `<h3>Qué es una potencia</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un producto de <b>factores iguales</b>: <mark>aⁿ = a · a · … · a</mark> (n veces). La <b>a</b> es la <b>base</b> y la <b>n</b>, el <b>exponente</b>.</p><p>5³ = 5 · 5 · 5 = 125. Se lee «cinco al cubo». Con exponente 2 se dice «al cuadrado» y con 3, «al cubo», porque son el área de un cuadrado y el volumen de un cubo.</p><p>Casos especiales: <b>a¹ = a</b> y <b>a⁰ = 1</b> (si a ≠ 0). Las potencias de 1 siempre valen 1 y las de 0 (con exponente positivo), 0.</p>`,
      svg: svg("Un cuadrado de lado 4 tiene 16 casillas: 4 al cuadrado; un cubo de lado 3 tiene 27 cubitos: 3 al cubo", `${[...Array(16)].map((_, i) => `<rect x="${22 + (i % 4) * 22}" y="${36 + Math.floor(i / 4) * 22}" width="22" height="22" fill="var(--pen)" fill-opacity=".22" stroke="var(--pen)" stroke-width="1.6"/>`).join("")}
        <path d="M150 66 h 60 v 60 h -60 z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><path d="M150 66 l 24 -22 h 60 l -24 22 M210 126 l 24 -22 v -60" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M170 66 v 60 M190 66 v 60 M150 86 h 60 M150 106 h 60 M158 59 h 60 M166 51 h 60 M218 118 v -60 M226 111 v -60" stroke="var(--leaf)" stroke-width="1" fill="none"/>
        ${t(66, 146, "4² = 16", { c: "var(--pen)", s: 14 })}${t(192, 152, "3³ = 27", { c: "var(--leaf)", s: 14 })}${t(66, 166, "al cuadrado", { c: "var(--muted)", s: 11 })}${t(192, 170, "al cubo", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Potencias de enteros y de fracciones</h3><p>Si la base es <b>negativa</b>, el signo depende del exponente: <b>par</b> da positivo y <b>impar</b>, negativo. (−2)⁶ = 64; (−2)⁵ = −32. Ojo con los paréntesis: −2⁶ = −64.</p><p>Para elevar una <b>fracción</b>, se elevan numerador y denominador: <mark>(a/b)ⁿ = aⁿ/bⁿ</mark>. (2/3)³ = 8/27. Si la fracción es menor que 1, sus potencias son cada vez más pequeñas: (1/2)² = 1/4, (1/2)³ = 1/8…</p>`,
    },
    {
      html: `<h3>Propiedades de las potencias</h3>${tabla(["Propiedad", "Regla", "Ejemplo"], [["Producto, misma base", "aᵐ · aⁿ = aᵐ⁺ⁿ", "3² · 3⁴ = 3⁶"], ["Cociente, misma base", "aᵐ : aⁿ = aᵐ⁻ⁿ", "7⁵ : 7² = 7³"], ["Potencia de potencia", "(aᵐ)ⁿ = aᵐ·ⁿ", "(2³)⁴ = 2¹²"], ["Producto, mismo exponente", "aⁿ · bⁿ = (a · b)ⁿ", "4³ · 5³ = 20³"], ["Cociente, mismo exponente", "aⁿ : bⁿ = (a : b)ⁿ", "15² : 3² = 5²"]])}<p>Con el cociente se entiende por qué a⁰ = 1: 5³ : 5³ = 5⁰, y también 125 : 125 = 1. ¡No hay propiedad para la suma! 2³ + 2² = 8 + 4 = 12, no 2⁵.</p>`,
      video: { id: "y12Op8QMjHs", titulo: "Propiedades de las potencias", canal: "Susi Profe", vistas: 2310821 },
    },
    {
      html: `<h3>Simplificar con las propiedades</h3><p>Para reducir expresiones a una sola potencia, se aplican las propiedades paso a paso:</p><p>(2⁴ · 2³) : (2²)³ = 2⁷ : 2⁶ = <b>2¹ = 2</b>.</p><p>Si las bases son distintas pero se pueden descomponer, se escriben como potencias de primos: 8² · 4³ = (2³)² · (2²)³ = 2⁶ · 2⁶ = <b>2¹²</b>.</p><p>Y con exponentes iguales se agrupan las bases: 2⁵ · 5⁵ = 10⁵ = 100.000.</p>`,
    },
    {
      html: `<h3>Potencias de 10 y notación científica</h3><p>10ⁿ es un 1 seguido de n ceros: 10⁶ = 1.000.000 (un millón). Sirven para escribir números muy grandes de forma compacta:</p><ul><li>Distancia Tierra-Sol ≈ 150.000.000 km = <b>1,5 · 10⁸ km</b>.</li><li>Habitantes del planeta ≈ 8.100.000.000 = <b>8,1 · 10⁹</b>.</li></ul><p>Esta forma se llama <b>notación científica</b>: un número entre 1 y 10, multiplicado por una potencia de 10. También vale para números muy pequeños, con exponentes negativos, que estudiarás el curso que viene (un milímetro es 10⁻³ m).</p><p>Cualquier número se puede <b>descomponer</b> con potencias de 10: 4.705 = 4 · 10³ + 7 · 10² + 5.</p>`,
    },
    {
      html: `<h3>La raíz cuadrada</h3><p>La <b>raíz cuadrada</b> de un número a es otro número b que, elevado al cuadrado, da a: <mark>√a = b si b² = a</mark>. √81 = 9 porque 9² = 81. La raíz «deshace» el cuadrado: si un cuadrado tiene 81 m² de área, su lado mide 9 m.</p><p>Las partes son el signo radical (√) y el <b>radicando</b> (el número de dentro). Todo número positivo tiene dos raíces, una positiva y otra negativa: 9 y −9, porque (−9)² = 81 también. Los números negativos <b>no tienen raíz cuadrada</b> entre los números que conoces: ningún número al cuadrado da negativo.</p>`,
      svg: svg("Un cuadrado de área 81 tiene un lado de 9: la raíz cuadrada", `<rect x="34" y="28" width="108" height="108" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>${t(88, 88, "área 81", { c: "var(--pen)", s: 15 })}<path d="M34 146 H 142" stroke="var(--red)" stroke-width="3"/>${t(88, 166, "lado = √81 = 9", { c: "var(--red)", s: 13 })}
        ${t(202, 62, "elevar al cuadrado", { s: 11 })}${t(202, 80, "9 → 81", { c: "var(--leaf)", s: 14 })}${t(202, 112, "raíz cuadrada", { s: 11 })}${t(202, 130, "81 → 9", { c: "var(--leaf)", s: 14 })}`),
      video: { id: "gPV5VqQ3Ajg", titulo: "Raíz cuadrada, explicación fácil", canal: "Daniel Carreón", vistas: 14435745 },
    },
    {
      html: `<h3>Cuadrados perfectos y raíces aproximadas</h3><p>Los <b>cuadrados perfectos</b> son los números que tienen raíz exacta: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144… Conviene sabérselos.</p><p>Si un número no es cuadrado perfecto, su raíz es <b>aproximada</b>. Se busca entre qué cuadrados está: 50 está entre 49 y 64, así que √50 está entre 7 y 8, muy cerca de 7. Probando: 7,1² = 50,41, un poco más; 7,07² ≈ 49,98. √50 ≈ <b>7,07</b>.</p><p>La raíz entera de 50 es 7 y el <b>resto</b> es 50 − 49 = 1. Para la raíz de una fracción se hace la de cada término: √(9/25) = 3/5.</p>`,
    },
    {
      html: `<h3>Operaciones combinadas con potencias y raíces</h3><p>Las potencias y raíces van <b>justo después de los paréntesis</b> en la jerarquía:</p><ol><li>Paréntesis.</li><li>Potencias y raíces.</li><li>Multiplicaciones y divisiones.</li><li>Sumas y restas.</li></ol><p>Ejemplo: 2 · 3² − √36 : 2 + (5 − 3)³ = 2 · 9 − 6 : 2 + 2³ = 18 − 3 + 8 = <b>23</b>.</p><p>Recuerda que <mark>√(a + b) no es √a + √b</mark>: √(9 + 16) = √25 = 5, mientras que √9 + √16 = 7.</p>`,
    },
  ],
  figura: {
    titulo: "Potencias y raíces en un vistazo",
    svg: filas("Resumen: potencia como producto repetido; producto suma exponentes; cociente resta; potencia de potencia multiplica; raíz deshace el cuadrado; notación científica", [["aⁿ", "a · a · … · a (n veces) · a⁰ = 1", "var(--pen)"], ["aᵐ · aⁿ", "aᵐ⁺ⁿ (se suman)", "var(--leaf)"], ["aᵐ : aⁿ", "aᵐ⁻ⁿ (se restan)", "var(--sun)"], ["(aᵐ)ⁿ", "aᵐ·ⁿ (se multiplican)", "var(--red)"], ["√a", "b tal que b² = a", "var(--inf)"], ["Notación científica", "1,5 · 10⁸", "var(--ink)"]], 220),
  },
  video: { id: "-K0ZSm9lPeY", titulo: "Potencias para principiantes", canal: "Daniel Carreón", vistas: 4309306, megusta: 0, busqueda: "potencias propiedades 2 eso" },
  quiz: mezcla([
    { q: "En 7⁴, el 4 es el…", o: ["exponente", "base", "radicando"], a: 0, e: "Veces que se multiplica." },
    { q: "2⁵ =", o: ["32", "10", "25"], a: 0, e: "2·2·2·2·2." },
    { q: "(−3)³ =", o: ["−27", "27", "−9"], a: 0, e: "Exponente impar." },
    { q: "8⁰ =", o: ["1", "0", "8"], a: 0, e: "Todo número (≠ 0) elevado a 0." },
    { q: "5³ · 5⁴ =", o: ["5⁷", "5¹²", "25⁷"], a: 0, e: "Se suman exponentes." },
    { q: "(4²)³ =", o: ["4⁶", "4⁵", "4⁸"], a: 0, e: "Se multiplican." },
    { q: "(2/5)² =", o: ["4/25", "4/5", "2/25"], a: 0, e: "Numerador y denominador." },
    { q: "√144 =", o: ["12", "72", "14"], a: 0, e: "12² = 144." },
    { q: "√30 está entre…", o: ["5 y 6", "4 y 5", "6 y 7"], a: 0, e: "25 < 30 < 36." },
    { q: "380.000 en notación científica es…", o: ["3,8 · 10⁵", "38 · 10⁴", "3,8 · 10⁴"], a: 0, e: "Entre 1 y 10." },
  ]),
  examen: mezcla([
    { q: "(3⁵ · 3²) : 3⁶ =", o: ["3", "3¹³", "1"], a: 0, e: "3⁷ : 3⁶." },
    { q: "4 + 2 · 3² − √49 =", o: ["15", "29", "47"], a: 0, e: "4 + 18 − 7." },
    { q: "Un huerto cuadrado tiene 196 m². Su perímetro es…", o: ["56 m", "49 m", "14 m"], a: 0, e: "Lado 14; 4 · 14." },
  ]),
  feynman: ["Qué significan la base y el exponente", "Por qué a⁰ vale 1", "Las propiedades del producto, el cociente y la potencia de potencia", "Qué es la raíz cuadrada y cómo se aproxima", "Para qué sirve la notación científica"],
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--eso)", [
    ["Potencia", "base y exponente", "var(--pen)"],
    ["Propiedades", "sumar · restar · multiplicar exponentes", "var(--leaf)"],
    ["Potencias de 10", "notación científica", "var(--sun)"],
    ["Raíz cuadrada", "deshace el cuadrado", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["a⁰", "Vale 1 (si a ≠ 0)."],
    ["Producto misma base", "Se suman los exponentes."],
    ["Cociente misma base", "Se restan los exponentes."],
    ["Potencia de potencia", "Se multiplican los exponentes."],
    ["Raíz cuadrada", "√a = b si b² = a."],
    ["Cuadrado perfecto", "Número con raíz exacta: 1, 4, 9, 16…"],
    ["Notación científica", "Número entre 1 y 10 por una potencia de 10."],
  ],
  familias: ["Buscad en las noticias números enormes (población, distancias) y escribidlos con potencias de 10.", "Calculad el lado de una habitación cuadrada a partir de sus metros cuadrados.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Potencias de exponente natural de enteros y fracciones; propiedades; potencias de base 10 y notación científica; raíz cuadrada exacta y aproximada; jerarquía de operaciones (RD 217/2022, Matemáticas, sentido numérico).",
    ideas: ["Doblar papel y contar capas para ver el crecimiento de 2ⁿ.", "Construir cuadrados con policubos y relacionar área y lado.", "Concurso de cálculo mental de cuadrados perfectos."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): potencias y raíces", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Expresa como una sola potencia: (5³)² · 5⁴ : 5⁸.", pasos: ["(5³)² = 5⁶.", "5⁶ · 5⁴ = 5¹⁰.", "5¹⁰ : 5⁸ = 5²."], resultado: "5² = 25" },
    { enunciado: "Expresa como potencia de 2: 16² · 8 : 4³.", pasos: ["16 = 2⁴; 8 = 2³; 4 = 2².", "(2⁴)² · 2³ : (2²)³ = 2⁸ · 2³ : 2⁶.", "2¹¹ : 2⁶ = 2⁵."], resultado: "2⁵ = 32" },
    { enunciado: "Calcula √70 con una cifra decimal.", pasos: ["64 < 70 < 81, así que 8 < √70 < 9.", "8,3² = 68,89; 8,4² = 70,56.", "70 está más cerca de 70,56 que de 68,89."], resultado: "√70 ≈ 8,4" },
  ],
  errores: [
    "Multiplicar base por exponente: 3⁴ no es 12.",
    "Sumar exponentes cuando las bases son distintas: 2³ · 5² no es 10⁵.",
    "Aplicar propiedades a la suma: 2³ + 2⁴ no es 2⁷.",
    "Confundir (−2)⁴ = 16 con −2⁴ = −16.",
    "Creer que √(a + b) = √a + √b.",
    "Escribir 45 · 10⁶ como notación científica (debe ser 4,5 · 10⁷).",
  ],
  ejercicios: [
    { q: "Calcula: 6³, (−4)³, (−1)²⁰ y (3/4)².", sol: "216; −64; 1; 9/16." },
    { q: "Escribe como una sola potencia: 7² · 7⁵ · 7.", sol: "7⁸." },
    { q: "Escribe como una sola potencia: (a⁴)³ : a⁷.", sol: "a¹² : a⁷ = a⁵." },
    { q: "Calcula aplicando propiedades: 2⁶ · 5⁶ y 36⁴ : 9⁴.", sol: "10⁶ = 1.000.000; 4⁴ = 256." },
    { q: "Escribe en notación científica: 7.200.000 y 450.000.000.000.", sol: "7,2 · 10⁶; 4,5 · 10¹¹." },
    { q: "Descompón con potencias de 10: 30.508.", sol: "3 · 10⁴ + 5 · 10² + 8." },
    { q: "Calcula: √169, √0,25 y √(4/49).", sol: "13; 0,5; 2/7." },
    { q: "Calcula la raíz entera y el resto de 90.", sol: "Raíz entera 9 (81); resto 9." },
    { q: "Calcula: (8 − 5)² · 2 − √(10 + 6) + 4⁰.", sol: "9 · 2 − 4 + 1 = 15." },
    { q: "Un tablero de ajedrez tiene 64 casillas. Si en la primera pones 1 grano de trigo, en la segunda 2, en la tercera 4…, ¿cuántos granos hay en la casilla 11?", sol: "2¹⁰ = 1.024 granos." },
  ],
};
