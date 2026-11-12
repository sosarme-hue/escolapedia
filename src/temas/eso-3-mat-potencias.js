// Matemáticas 3º ESO: potencias y raíces. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces",
  minutos: 60,
  objetivos: ["Calcular potencias de exponente natural, cero y entero negativo", "Aplicar las propiedades de las potencias para simplificar expresiones", "Calcular raíces exactas y aproximadas y reconocer radicales", "Simplificar y operar radicales sencillos"],
  claves: ["base", "exponente", "exponente negativo", "radical", "índice", "radicando"],
  pregunta: {
    texto: "Si doblas una hoja de papel por la mitad 10 veces, ¿cuántas capas tendrá?",
    respuesta: "Cada doblez multiplica por 2: <mark>2¹⁰ = 1.024 capas</mark>. Si se pudiera doblar 42 veces, el grosor llegaría a la Luna. Las potencias describen crecimientos rapidísimos, como el de una epidemia o el de los ahorros con interés compuesto.",
  },
  bloques: [
    {
      html: `<h3>Potencias de exponente natural</h3><p>Una potencia es una multiplicación de factores iguales: <mark>aⁿ = a · a · … · a</mark> (n veces). El número que se repite es la <b>base</b> y el número de veces, el <b>exponente</b>. 3⁴ = 3 · 3 · 3 · 3 = 81.</p><p>Con bases negativas, el <b>signo</b> depende del exponente: si es par, el resultado es positivo; si es impar, negativo. (−2)⁴ = 16 y (−2)³ = −8. ¡Cuidado con los paréntesis! −2⁴ = −16, porque el signo no está elevado. Con fracciones se elevan numerador y denominador: (2/3)³ = 8/27.</p>`,
      svg: svg("Cuadrado de 3 por 3 con 9 casillas y cubo de lado 3 con 27 cubitos", `${[...Array(9)].map((_, i) => `<rect x="${24 + (i % 3) * 26}" y="${42 + Math.floor(i / 3) * 26}" width="26" height="26" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>`).join("")}
        <path d="M150 70 h 66 v 66 h -66 z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"/><path d="M150 70 l 26 -24 h 66 l -26 24 M216 136 l 26 -24 v -66" fill="none" stroke="var(--leaf)" stroke-width="2"/><path d="M172 70 v 66 M194 70 v 66 M150 92 h 66 M150 114 h 66 M159 62 h 66 M168 54 h 66 M224 128 v -66 M233 120 v -66" stroke="var(--leaf)" stroke-width="1" fill="none"/>
        ${t(63, 140, "3² = 9", { c: "var(--pen)", s: 15 })}${t(196, 160, "3³ = 27", { c: "var(--leaf)", s: 15 })}${t(63, 160, "cuadrado", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Exponente cero y exponente negativo</h3><p>Todo número distinto de 0 elevado a cero vale 1: <mark>a⁰ = 1</mark>. Se entiende con una división: 5³ : 5³ = 5⁰, y también es 125 : 125 = 1.</p><p>Una potencia de exponente negativo es la <b>inversa</b> de la potencia positiva: <mark>a⁻ⁿ = 1/aⁿ</mark>. Por ejemplo, 2⁻³ = 1/2³ = 1/8 y (2/5)⁻² = (5/2)² = 25/4. Observa la tabla: cada vez que el exponente baja 1, el valor se divide entre 2.</p>${tabla(["2³", "2²", "2¹", "2⁰", "2⁻¹", "2⁻²"], [["8", "4", "2", "1", "1/2", "1/4"]])}`,
      video: { id: "ti73Q4Uy1Fk", titulo: "Potencia con exponente negativo | Explicación", canal: "Matemáticas profe Alex", vistas: 1397770, megusta: 0 },
    },
    {
      html: `<h3>Propiedades de las potencias</h3>${tabla(["Propiedad", "Regla", "Ejemplo"], [["Producto, misma base", "aᵐ · aⁿ = aᵐ⁺ⁿ", "2³ · 2⁴ = 2⁷"], ["Cociente, misma base", "aᵐ : aⁿ = aᵐ⁻ⁿ", "5⁶ : 5² = 5⁴"], ["Potencia de potencia", "(aᵐ)ⁿ = aᵐ·ⁿ", "(3²)³ = 3⁶"], ["Producto, mismo exponente", "aⁿ · bⁿ = (a · b)ⁿ", "2³ · 5³ = 10³"], ["Cociente, mismo exponente", "aⁿ : bⁿ = (a : b)ⁿ", "6⁴ : 3⁴ = 2⁴"]])}<p>No existe ninguna propiedad para la <b>suma</b>: 2³ + 2⁴ no es 2⁷. Se calcula cada potencia: 8 + 16 = 24.</p>`,
    },
    {
      html: `<h3>Simplificar expresiones con potencias</h3><p>Para simplificar productos y cocientes de potencias con bases distintas, se <b>descomponen las bases en factores primos</b> y se agrupan las potencias de la misma base. Ejemplo:</p><p><mark>(4² · 9) / (6³) = (2⁴ · 3²) / (2³ · 3³) = 2¹ · 3⁻¹ = 2/3</mark></p><p>Las propiedades también valen con exponentes negativos: 2⁵ · 2⁻⁸ = 2⁻³ = 1/8, y (x⁻²)³ = x⁻⁶. Conviene dejar el resultado con exponentes positivos o como fracción.</p>`,
    },
    {
      html: `<h3>Raíces cuadradas y cúbicas</h3><p>La <b>raíz cuadrada</b> de a es el número que elevado al cuadrado da a: √49 = 7 porque 7² = 49. Todo número positivo tiene dos raíces cuadradas opuestas (7 y −7), aunque √ indica la positiva. Los números negativos <mark>no tienen raíz cuadrada</mark> real.</p><p>La <b>raíz cúbica</b> ∛a es el número que elevado al cubo da a: ∛125 = 5. Los negativos sí tienen raíz cúbica: ∛−8 = −2. Si un número no es cuadrado perfecto, su raíz es un decimal infinito no periódico: √2 ≈ 1,414 es <b>irracional</b>. Se puede aproximar tanteando: 1,4² = 1,96 y 1,5² = 2,25.</p>`,
      svg: svg("Un cuadrado de área 49 tiene lado 7, que es su raíz cuadrada", `<rect x="40" y="30" width="110" height="110" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>${t(95, 92, "área 49", { c: "var(--pen)", s: 15 })}${t(95, 160, "lado = √49 = 7", { c: "var(--red)", s: 13 })}<path d="M40 148 H 150" stroke="var(--red)" stroke-width="3"/>
        ${t(205, 60, "√ «deshace»", { s: 12 })}${t(205, 78, "el cuadrado", { s: 12 })}${t(205, 110, "7² = 49", { c: "var(--leaf)", s: 13 })}${t(205, 128, "√49 = 7", { c: "var(--leaf)", s: 13 })}`),
    },
    {
      html: `<h3>Radicales y potencias de exponente fraccionario</h3><p>Una raíz general se llama <b>radical</b>: <mark>ⁿ√a</mark>, donde n es el <b>índice</b> y a el <b>radicando</b>. Si el índice es par, el radicando debe ser positivo o cero. Todo radical se puede escribir como potencia de exponente fraccionario:</p><p><mark>ⁿ√aᵐ = aᵐ/ⁿ</mark>. Así, √5 = 5¹/², ∛x² = x²/³ y 8²/³ = (∛8)² = 4.</p><p>Gracias a esto, las propiedades de las potencias sirven también para las raíces: √3 · √3 = 3¹/²⁺¹/² = 3.</p>`,
    },
    {
      html: `<h3>Simplificar y extraer factores</h3><p>Para <b>extraer factores</b> de un radical se descompone el radicando y se sacan los factores cuyo exponente sea mayor o igual que el índice: <mark>√72 = √(2³ · 3²) = 2 · 3 · √2 = 6√2</mark>. Con raíz cuadrada, sale un factor por cada pareja.</p><p>Al revés, para <b>introducir</b> un factor se eleva al índice: 3√2 = √(3² · 2) = √18. Esto sirve para comparar radicales: ¿qué es mayor, 3√2 o 2√5? √18 frente a √20: es mayor 2√5.</p>`,
      video: { id: "2HachLBuoZo", titulo: "Simplificación de radicales | Parte 1 principiantes", canal: "Matemáticas profe Alex", vistas: 6171721, megusta: 0 },
    },
    {
      html: `<h3>Operar con radicales</h3><ul><li><b>Multiplicar y dividir</b> (mismo índice): se multiplican o dividen los radicandos. √2 · √8 = √16 = 4; √50 : √2 = √25 = 5.</li><li><b>Sumar y restar</b>: solo se pueden agrupar radicales <mark>semejantes</mark> (mismo índice y radicando), igual que términos semejantes en álgebra. 3√5 + 2√5 = 5√5.</li></ul><p>A veces hay que extraer factores para descubrir que son semejantes: √12 + √27 = 2√3 + 3√3 = 5√3. Pero √2 + √3 <b>no</b> es √5: no se puede simplificar.</p>`,
    },
    {
      html: `<h3>Potencias en la vida real</h3><p>Las potencias de 10 dan nombre a las unidades: kilo (10³), mega (10⁶), giga (10⁹); y mili (10⁻³), micro (10⁻⁶), nano (10⁻⁹). Un gigabyte son unos 10⁹ bytes.</p><p>El <b>crecimiento exponencial</b> aparece cuando algo se multiplica siempre por el mismo número: bacterias que se duplican cada hora (2ⁿ), un capital al 5 % anual (1,05ⁿ) o un rumor que cada persona cuenta a tres más (3ⁿ). Las raíces ayudan a hacer el camino inverso: si un cubo tiene 64 cm³ de volumen, su arista es <mark>∛64 = 4 cm</mark>.</p>`,
      svg: svg("Gráfica de crecimiento: bacterias que se duplican cada hora pasan de 1 a 32 en 5 horas", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
        ${[1, 2, 4, 8, 16, 32].map((v, i) => `<rect x="${40 + i * 33}" y="${150 - v * 3.8}" width="24" height="${v * 3.8}" rx="3" fill="var(--red)" fill-opacity="${0.4 + i * 0.1}"/>${t(52 + i * 33, 144 - v * 3.8, v, { s: 11 })}${t(52 + i * 33, 166, i + "h", { c: "var(--muted)", s: 11 })}`).join("")}
        ${t(100, 34, "2ⁿ bacterias", { c: "var(--red)", s: 13 })}`),
    },
  ],
  figura: {
    titulo: "Las reglas que más se usan",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Resumen: producto suma exponentes, cociente resta exponentes, potencia de potencia multiplica, exponente negativo es la inversa, raíz es exponente fraccionario">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${[["aᵐ · aⁿ = aᵐ⁺ⁿ", "misma base: se suman exponentes", "var(--pen)"], ["aᵐ : aⁿ = aᵐ⁻ⁿ", "misma base: se restan exponentes", "var(--leaf)"], ["(aᵐ)ⁿ = aᵐ·ⁿ", "potencia de potencia: se multiplican", "var(--red)"], ["a⁻ⁿ = 1 / aⁿ", "exponente negativo: la inversa", "var(--inf)"], ["ⁿ√aᵐ = aᵐ/ⁿ", "un radical es una potencia fraccionaria", "var(--hl-ink)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 52}" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text><text x="230" y="${41 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "y12Op8QMjHs", titulo: "Propiedades de las potencias", canal: "Susi Profe", vistas: 2310799, megusta: 0, busqueda: "propiedades de las potencias" },
  quiz: mezcla([
    { q: "(−3)⁴ =", o: ["−81", "81", "−12"], a: 1, e: "Exponente par: positivo." },
    { q: "−3⁴ =", o: ["−81", "81", "12"], a: 0, e: "Solo se eleva el 3; el signo queda fuera." },
    { q: "5⁻² =", o: ["−25", "1/25", "−10"], a: 1, e: "La inversa de 5²." },
    { q: "2⁵ · 2⁻³ =", o: ["2²", "2⁻¹⁵", "4⁸"], a: 0, e: "Se suman exponentes: 5 − 3 = 2." },
    { q: "(x³)⁴ =", o: ["x⁷", "x¹²", "x⁸¹"], a: 1, e: "Se multiplican: 3 · 4." },
    { q: "7⁰ =", o: ["0", "7", "1"], a: 2, e: "Cualquier número no nulo elevado a 0 vale 1." },
    { q: "√50 simplificado es…", o: ["5√2", "25√2", "2√5"], a: 0, e: "50 = 5² · 2." },
    { q: "2√3 + 5√3 =", o: ["7√6", "7√3", "10√3"], a: 1, e: "Radicales semejantes: se suman los coeficientes." },
    { q: "16³/⁴ =", o: ["8", "12", "4"], a: 0, e: "(⁴√16)³ = 2³ = 8." },
    { q: "¿Cuál no es un número real?", o: ["∛−27", "√−9", "√0"], a: 1, e: "Los negativos no tienen raíz cuadrada real." },
  ]),
  examen: mezcla([
    { q: "(2/3)⁻² =", o: ["4/9", "9/4", "−4/9"], a: 1, e: "(3/2)² = 9/4." },
    { q: "(8 · 2⁻²) / 4 simplificado es…", o: ["1/2", "2", "1"], a: 0, e: "2³ · 2⁻² / 2² = 2⁻¹." },
    { q: "√12 + √75 =", o: ["√87", "7√3", "5√3"], a: 1, e: "2√3 + 5√3." },
  ]),
  feynman: ["Por qué a⁰ = 1 usando una división", "Qué significa un exponente negativo", "Por qué no hay propiedad para sumar potencias", "Cuándo se pueden sumar dos radicales"],
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--eso)", [
    ["Potencias", "base · exponente · signo", "var(--pen)"],
    ["Exponentes", "cero · negativos", "var(--leaf)"],
    ["Propiedades", "producto · cociente · potencia", "var(--red)"],
    ["Radicales", "simplificar · operar", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["a⁰", "1, si a ≠ 0."],
    ["a⁻ⁿ", "1/aⁿ: la inversa de la potencia."],
    ["aᵐ · aⁿ", "aᵐ⁺ⁿ"],
    ["(aᵐ)ⁿ", "aᵐ·ⁿ"],
    ["Signo de una potencia de base negativa", "Positivo si el exponente es par; negativo si es impar."],
    ["Radical como potencia", "ⁿ√aᵐ = aᵐ/ⁿ"],
    ["Radicales semejantes", "Los que tienen el mismo índice y el mismo radicando."],
    ["¿Cómo se extrae un factor de √?", "Se descompone el radicando y sale un factor por cada pareja."],
  ],
  familias: ["Doblad una hoja todas las veces que podáis y calculad las capas con potencias de 2.", "Buscad en el móvil o el ordenador capacidades en GB y TB y escribidlas como potencias de 10.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente entero, propiedades, raíces y radicales sencillos, notación exponencial (RD 217/2022, Matemáticas 3º).",
    ideas: ["Experimento del papel doblado y cálculo del grosor con 2ⁿ.", "Dominó de propiedades de las potencias.", "Construir cuadrados y cubos con policubos para visualizar cuadrados y cubos perfectos."],
  },
  fuentes: [RD, { t: "Oficina Internacional de Pesas y Medidas: prefijos del SI", url: "https://www.bipm.org/en/measurement-units/si-prefixes" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Simplifica: (9² · 4³) / (6⁴ · 2⁻¹).",
      pasos: ["Descomponemos: 9² = 3⁴; 4³ = 2⁶; 6⁴ = 2⁴ · 3⁴.", "Numerador: 3⁴ · 2⁶. Denominador: 2⁴ · 3⁴ · 2⁻¹ = 2³ · 3⁴.", "Base 2: 2⁶⁻³ = 2³. Base 3: 3⁴⁻⁴ = 3⁰ = 1."],
      resultado: "2³ = 8." },
    { enunciado: "Simplifica √18 + √50 − √8.",
      pasos: ["√18 = √(3² · 2) = 3√2.", "√50 = √(5² · 2) = 5√2.", "√8 = √(2² · 2) = 2√2.", "Son semejantes: 3√2 + 5√2 − 2√2 = 6√2."],
      resultado: "6√2." },
    { enunciado: "Un cultivo tiene 500 bacterias y se duplica cada hora. ¿Cuántas habrá dentro de 6 horas? ¿Y cuántas había hace 2 horas?",
      pasos: ["Dentro de n horas: 500 · 2ⁿ.", "n = 6: 500 · 2⁶ = 500 · 64 = 32.000.", "Hace 2 horas, n = −2: 500 · 2⁻² = 500 / 4 = 125."],
      resultado: "32.000 dentro de 6 horas; 125 hace 2 horas." },
  ],
  errores: [
    "Multiplicar la base por el exponente: 3⁴ no es 12.",
    "Pensar que un exponente negativo da un número negativo: 2⁻³ = 1/8, que es positivo.",
    "Sumar exponentes al sumar potencias: 2³ + 2² no es 2⁵.",
    "Confundir (−2)⁴ con −2⁴.",
    "Creer que √(a + b) = √a + √b: √(9 + 16) = 5, no 7.",
    "Sumar radicales no semejantes: √2 + √3 no es √5.",
  ],
  ejercicios: [
    { q: "Calcula: (−2)⁵, −2⁶, (−1)¹⁰⁰ y (1/2)⁻³.", sol: "(−2)⁵ = −32; −2⁶ = −64; (−1)¹⁰⁰ = 1; (1/2)⁻³ = 2³ = 8." },
    { q: "Expresa como una sola potencia: 3⁵ · 3⁻² · 3⁴.", sol: "3⁵⁻²⁺⁴ = 3⁷." },
    { q: "Expresa como una sola potencia: (5³)² : 5⁴.", sol: "5⁶ : 5⁴ = 5²." },
    { q: "Simplifica: (2⁴ · 3²) / (6³).", sol: "6³ = 2³ · 3³. Queda 2¹ · 3⁻¹ = 2/3." },
    { q: "Calcula: 10⁻³ y escribe 0,0001 como potencia de 10.", sol: "10⁻³ = 1/1.000 = 0,001. 0,0001 = 10⁻⁴." },
    { q: "Calcula si existen: √144, ∛−64, √−16, ⁴√81.", sol: "12; −4; no existe en los reales; 3." },
    { q: "Escribe como potencia: √7, ∛x² y 1/√2.", sol: "7¹/²; x²/³; 2⁻¹/²." },
    { q: "Extrae factores: √48 y √200.", sol: "√48 = √(2⁴ · 3) = 4√3. √200 = √(2² · 2 · 5²) = 10√2." },
    { q: "Calcula: 2√3 · 5√6.", sol: "10√18 = 10 · 3√2 = 30√2." },
    { q: "Un cubo tiene 216 cm³ de volumen. ¿Cuánto mide su arista y cuál es el área de una cara?", sol: "Arista = ∛216 = 6 cm. Área de una cara = 6² = 36 cm²." },
  ],
};
