// Matemáticas A 4º ESO: temas que comparten base con Matemáticas B.
// Matemáticas A (RD 217/2022) trabaja los mismos saberes con un enfoque más aplicado:
// se reutilizan los dibujos y explicaciones de B, se quitan los bloques más abstractos
// y se ponen preguntas, ejemplos y vídeos propios, más cercanos a la vida diaria.
const B = (f) => require(`./eso-4-matb-${f}`);
const { mapa, F } = require("./_util");

// Los bloques de B se eligen por el título de su <h3> (no por posición), para que ampliar B no los cambie.
// De B no se heredan los ejemplos, errores ni ejercicios: Matemáticas A tiene los suyos.
const deB = (base, t) => {
  const b = base.bloques.find((x) => x.html.includes(`<h3>${t}</h3>`));
  if (!b) throw new Error(`Matemáticas A: no encuentro el bloque «${t}» en ${base.titulo}`);
  return b;
};
function adapta(base, cambios) {
  const { bloques, ...resto } = cambios;
  const { ejemplos, errores, ejercicios, ...baseLimpia } = base;
  return {
    ...baseLimpia,
    materia: "Matemáticas A",
    revisado: "2026-11-12",
    ...resto,
    bloques: bloques ? bloques.map((b) => (typeof b === "string" ? deB(base, b) : b)) : base.bloques,
    profesores: { ...base.profesores, saberes: base.profesores.saberes.replace("Matemáticas B 4º", "Matemáticas A 4º"), ...(cambios.profesores || {}) },
  };
}

module.exports = [
  adapta(B("numeros-reales"), {
    titulo: "Números reales",
    minutos: 30,
    objetivos: ["Clasificar números en naturales, enteros, racionales e irracionales", "Representar números en la recta y escribir intervalos sencillos", "Redondear y valorar el error en situaciones cotidianas"],
    bloques: ["Los conjuntos de números", "La recta real", "Intervalos", "Aproximar y medir el error"],
    video: { id: "G-yn4gjjn60", titulo: "Clasificación de los números (naturales, enteros, racionales…)", canal: "Estudia Con Marisol", vistas: 484383, megusta: 16464, busqueda: "clasificación de los números reales" },
    quiz: [
      { q: "¿A qué conjunto pertenece −7?", o: ["Naturales", "Enteros", "Irracionales"], a: 1, e: "Es un número negativo sin decimales: entero." },
      { q: "¿Cuál es irracional?", o: ["1/4", "π", "0,5"], a: 1, e: "π tiene infinitos decimales sin periodo." },
      { q: "¿Qué intervalo es «entre 2 y 6, ambos incluidos»?", o: ["(2, 6)", "[2, 6]", "[2, 6)"], a: 1, e: "Corchetes en los dos extremos." },
      { q: "Redondea 12,486 € a céntimos.", o: ["12,48 €", "12,49 €", "12,5 €"], a: 1, e: "La cifra siguiente es 6, así que se sube: 12,49 €." },
      { q: "Una temperatura «mayor que 0 °C» se escribe…", o: ["[0, +∞)", "(0, +∞)", "(−∞, 0)"], a: 1, e: "El 0 no está incluido: paréntesis." },
    ],
    examen: [
      { q: "¿Qué número es racional?", o: ["√2", "3/7", "π"], a: 1, e: "Es una fracción." },
      { q: "Si mides 1,57 m y lo redondeas a décimas, queda…", o: ["1,5 m", "1,6 m", "2 m"], a: 1, e: "La cifra siguiente es 7: se sube a 1,6." },
      { q: "¿Qué números cumplen −1 ≤ x < 3?", o: ["[−1, 3)", "(−1, 3]", "[−1, 3]"], a: 0, e: "−1 incluido y 3 excluido." },
    ],
  }),

  adapta(B("polinomios"), {
    titulo: "Polinomios",
    minutos: 35,
    objetivos: ["Reconocer los elementos de un polinomio y calcular su valor numérico", "Sumar, restar y multiplicar polinomios", "Usar las identidades notables y sacar factor común"],
    bloques: ["Qué es un polinomio", "Identidades notables", {
      html: `<h3>Sacar factor común</h3><p>Si todos los términos tienen algo en común, se puede <mark>sacar fuera</mark> multiplicando: 6x² + 9x = <b>3x(2x + 3)</b>. Es la operación contraria a multiplicar y simplifica mucho las expresiones.</p><div class="formula"><span>4a + 8 = 4(a + 2)</span></div>`, svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sacar factor común: 6x al cuadrado más 9x es 3x por 2x más 3x por 3, así que queda 3x por (2x más 3)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="44" font-size="20" fill="var(--ink)">6x² + 9x</text>
        <text x="130" y="86" font-size="18" fill="var(--ink)"><tspan fill="var(--red)">3x</tspan>·2x + <tspan fill="var(--red)">3x</tspan>·3</text>
        <path d="M130 100 V 116" stroke="var(--muted)" stroke-width="2.5"/>
        <text x="130" y="144" font-size="22" fill="var(--ink)"><tspan fill="var(--red)">3x</tspan>(2x + 3)</text>
        <text x="130" y="170" font-size="12" fill="var(--muted)">lo que se repite sale fuera</text></g></svg>`, }],
    video: { id: "bU9m3PF71Oo", titulo: "División de polinomios, súper fácil", canal: "Daniel Carreón", vistas: 2389977, megusta: 45138, busqueda: "operaciones con polinomios" },
    quiz: [
      { q: "¿Cuál es el grado de 5x³ + 2x − 1?", o: ["1", "3", "5"], a: 1, e: "El mayor exponente de x es 3." },
      { q: "Si P(x) = x² + 1, P(2) =", o: ["5", "4", "3"], a: 0, e: "2² + 1 = 5." },
      { q: "(x + 3)² =", o: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9"], a: 1, e: "a² + 2ab + b²." },
      { q: "Saca factor común: 5x² − 10x", o: ["5x(x − 2)", "5(x − 10)", "x(5 − 10x)"], a: 0, e: "Los dos términos tienen 5x." },
      { q: "(2x + 1) + (x − 4) =", o: ["3x − 3", "2x² − 4", "3x + 5"], a: 0, e: "Se suman los términos semejantes." },
    ],
    examen: [
      { q: "(x + 2)(x − 2) =", o: ["x² − 4", "x² + 4", "x² − 4x"], a: 0, e: "Suma por diferencia." },
      { q: "3x · (x + 4) =", o: ["3x² + 12x", "3x + 12", "4x² + 12"], a: 0, e: "Se multiplica 3x por cada término." },
      { q: "¿Cuánto vale el término independiente de 2x² − 7?", o: ["2", "−7", "0"], a: 1, e: "Es el número sin x." },
    ],
    feynman: ["Qué son el grado y el término independiente", "Cómo se suman y multiplican polinomios", "Por qué en (a + b)² aparece 2ab", "Qué es sacar factor común"],
    mapa: mapa("POLINOMIOS", "var(--bac)", [
      ["Elementos", "grado · coeficientes · P(a)", "var(--ink)"],
      ["Operaciones", "sumar · restar · multiplicar", "var(--pen)"],
      ["Identidades", "(a ± b)² · (a + b)(a − b)", "var(--red)"],
      ["Factor común", "6x² + 9x = 3x(2x + 3)", "var(--leaf)"],
    ], 260),
  }),

  adapta(B("ecuaciones"), {
    titulo: "Ecuaciones",
    minutos: 40,
    objetivos: ["Resolver ecuaciones de primer grado con paréntesis y denominadores", "Resolver ecuaciones de segundo grado completas e incompletas", "Plantear y resolver problemas de la vida diaria con ecuaciones"],
    pregunta: { texto: "Si al doble de tu edad le sumas 8 años, obtienes 40. ¿Cuántos años tienes?", respuesta: "Llamando x a la edad: <mark>2x + 8 = 40</mark> → 2x = 32 → <b>x = 16 años</b>. Plantear la ecuación es traducir el enunciado al idioma de las matemáticas." },
    bloques: [{
      html: `<h3>Ecuaciones de primer grado</h3><p>Se resuelven <mark>aislando la x</mark>: primero se quitan paréntesis, luego denominadores (multiplicando por el m.c.m.), se agrupan las x a un lado y los números al otro, y se despeja.</p><div class="formula"><span>x/2 + 3 = x/3 + 5 → 3x + 18 = 2x + 30 → x = 12</span></div>`, svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza en equilibrio: lo que se hace en un lado se hace en el otro; 2x más 8 igual a 40 lleva a x igual 16">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 130 M100 150 H 160 M130 130 L 110 150 M130 130 L 150 150" stroke="var(--ink)" stroke-width="3"/>
        <path d="M30 60 H 230" stroke="var(--ink)" stroke-width="3"/>
        <path d="M30 60 L 14 100 H 86 L 70 60 M190 60 L 174 100 H 246 L 230 60" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="50" y="94" font-size="16" fill="var(--pen)">2x + 8</text><text x="210" y="94" font-size="16" fill="var(--red)">40</text>
        <text x="130" y="30" font-size="12" fill="var(--muted)">igual en los dos lados</text><text x="130" y="172" font-size="14" fill="var(--leaf)">2x = 32 → x = 16</text></g></svg>`, }, "La fórmula de segundo grado", "El discriminante", "Ecuaciones incompletas: sin fórmula"],
    figura: {
      titulo: "¿Qué tipo de ecuación es? Elige el método",
      svg: `<svg viewBox="0 0 640 190" role="img" aria-label="Guía de métodos: primer grado despejando, segundo grado completa con fórmula, incompleta sin término independiente con factor común e incompleta sin término en x despejando x al cuadrado">
        <rect width="640" height="190" rx="16" fill="var(--paper)"/>
        ${[["ax + b = 0", "aislar la x", "var(--ink)"], ["ax² + bx + c = 0", "fórmula", "var(--pen)"], ["ax² + bx = 0", "factor común: x = 0 o x = −b/a", "var(--leaf)"], ["ax² + c = 0", "despejar: x = ±√(−c/a)", "var(--red)"]].map(([t, m, c], i) => `<rect x="20" y="${16 + i * 41}" width="600" height="34" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
          <text x="40" y="${38 + i * 41}" font-size="16" font-weight="700" fill="${c}" ${F}>${t}</text><text x="250" y="${38 + i * 41}" font-size="15" fill="var(--muted)" ${F}>→</text><text x="280" y="${38 + i * 41}" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${m}</text>`).join("")}
      </svg>`,
    },
    video: { id: "ZC67c5ar9mA", titulo: "Ecuaciones de segundo grado por fórmula general, súper fácil", canal: "Daniel Carreón", vistas: 10253256, megusta: 0, busqueda: "ecuaciones de segundo grado fórmula" },
    quiz: [
      { q: "Resuelve 3(x − 2) = 9.", o: ["x = 5", "x = 3", "x = 11/3"], a: 0, e: "3x − 6 = 9 → 3x = 15 → x = 5." },
      { q: "Resuelve x² − 16 = 0.", o: ["x = 4", "x = ±4", "x = 16"], a: 1, e: "x² = 16 → x = ±4." },
      { q: "¿Cuántas soluciones tiene x² + 4 = 0?", o: ["Dos", "Una", "Ninguna real"], a: 2, e: "x² = −4 no tiene solución real." },
      { q: "Resuelve x² − 3x = 0.", o: ["x = 3", "x = 0 y x = 3", "x = −3"], a: 1, e: "x(x − 3) = 0." },
      { q: "Un número más su mitad es 30. ¿Cuál es?", o: ["20", "15", "45"], a: 0, e: "x + x/2 = 30 → 3x/2 = 30 → x = 20." },
    ],
    examen: [
      { q: "Resuelve x² − 5x + 6 = 0.", o: ["x = 2 y x = 3", "x = −2 y x = −3", "x = 6"], a: 0, e: "x = (5 ± 1)/2." },
      { q: "Resuelve x/4 = 3.", o: ["x = 12", "x = 3/4", "x = 7"], a: 0, e: "Se multiplica por 4." },
      { q: "El área de un cuadrado es 49 m². ¿Cuánto mide el lado?", o: ["7 m", "±7 m", "24,5 m"], a: 0, e: "x² = 49 → x = 7 (la solución negativa no vale para una longitud)." },
    ],
    feynman: ["Los pasos para resolver una ecuación de primer grado", "Cómo se usa la fórmula de segundo grado", "Cómo resolver las incompletas sin fórmula", "Cómo pasar de un enunciado a una ecuación"],
    mapa: mapa("ECUACIONES", "var(--bac)", [
      ["1er grado", "paréntesis · m.c.m. · despejar", "var(--pen)"],
      ["2º grado", "x = (−b ± √Δ) / 2a", "var(--leaf)"],
      ["Incompletas", "factor común · despejar x²", "var(--inf)"],
      ["Problemas", "traducir y comprobar", "var(--red)"],
    ], 260),
  }),

  adapta(B("sistemas"), {
    titulo: "Sistemas de ecuaciones",
    minutos: 35,
    objetivos: ["Resolver sistemas lineales por sustitución, igualación y reducción", "Interpretar la solución como el punto de corte de dos rectas", "Plantear problemas cotidianos con dos incógnitas"],
    bloques: ["Qué es un sistema", "Sustitución", "Igualación y reducción", "Tipos de sistemas"],
    quiz: [
      { q: "La solución de x + y = 10, x − y = 2 es…", o: ["(6, 4)", "(4, 6)", "(8, 2)"], a: 0, e: "Sumando: 2x = 12 → x = 6, y = 4." },
      { q: "En el sistema y = 3x, x + y = 8, ¿cuánto vale x?", o: ["2", "6", "8/3"], a: 0, e: "x + 3x = 8 → x = 2." },
      { q: "Dos rectas paralelas forman un sistema…", o: ["con una solución", "sin solución", "con infinitas"], a: 1, e: "No se cortan." },
      { q: "2 bocadillos y 1 refresco cuestan 7 €; 1 bocadillo y 1 refresco, 4,5 €. ¿Cuánto cuesta un bocadillo?", o: ["2,5 €", "2 €", "3 €"], a: 0, e: "Restando ecuaciones: 1 bocadillo = 2,5 €." },
      { q: "¿Qué método despeja la misma incógnita en las dos ecuaciones?", o: ["Sustitución", "Igualación", "Reducción"], a: 1, e: "Igualación: se despeja la misma letra y se igualan." },
    ],
    examen: [
      { q: "Resuelve x + 2y = 7, x = 1.", o: ["(1, 3)", "(3, 1)", "(1, 6)"], a: 0, e: "1 + 2y = 7 → y = 3." },
      { q: "En una clase hay 28 alumnos y 4 chicas más que chicos. ¿Cuántas chicas hay?", o: ["16", "12", "14"], a: 0, e: "x + y = 28, x − y = 4 → x = 16." },
      { q: "x + y = 3 y 2x + 2y = 6 tiene…", o: ["una solución", "infinitas", "ninguna"], a: 1, e: "Es la misma recta." },
    ],
    feynman: ["Qué es la solución de un sistema", "Cómo funcionan los tres métodos", "Cuándo un sistema no tiene solución", "Cómo plantear un problema con dos incógnitas"],
    mapa: mapa("SISTEMAS", "var(--bac)", [
      ["Solución", "el punto de corte", "var(--ink)"],
      ["Métodos", "sustitución · igualación · reducción", "var(--pen)"],
      ["Tipos", "una · infinitas · ninguna", "var(--red)"],
      ["Problemas", "dos datos → dos ecuaciones", "var(--leaf)"],
    ], 280),
  }),

  adapta(B("inecuaciones"), {
    titulo: "Inecuaciones",
    minutos: 30,
    objetivos: ["Resolver inecuaciones de primer grado y dar la solución como intervalo", "Saber cuándo cambia el sentido de la desigualdad", "Resolver sistemas sencillos de inecuaciones con una incógnita"],
    bloques: ["Inecuaciones de primer grado", "Sistemas de inecuaciones"],
    quiz: [
      { q: "Resuelve 2x + 1 < 9.", o: ["x < 4", "x > 4", "x < 5"], a: 0, e: "2x < 8 → x < 4." },
      { q: "Resuelve −3x ≥ 12.", o: ["x ≥ −4", "x ≤ −4", "x ≤ 4"], a: 1, e: "Al dividir entre −3 gira el signo." },
      { q: "La solución de x > 2 y x < 5 es…", o: ["(2, 5)", "[2, 5]", "x > 5"], a: 0, e: "Intersección sin extremos." },
      { q: "Un gimnasio cuesta 20 € de matrícula y 15 € al mes. ¿Cuántos meses puedes pagar con 110 €?", o: ["6", "7", "5"], a: 0, e: "20 + 15x ≤ 110 → x ≤ 6." },
      { q: "x ≤ 3 en forma de intervalo es…", o: ["(−∞, 3]", "(−∞, 3)", "[3, +∞)"], a: 0, e: "Todos los menores que 3, incluido el 3." },
    ],
    examen: [
      { q: "Resuelve 5 − x > 2.", o: ["x < 3", "x > 3", "x < −3"], a: 0, e: "−x > −3 → x < 3." },
      { q: "¿Qué número cumple 2x − 1 ≥ 5?", o: ["2", "3", "0"], a: 1, e: "2·3 − 1 = 5 ≥ 5." },
      { q: "Solución de x ≥ 0 y x ≤ 10:", o: ["[0, 10]", "(0, 10)", "x ≥ 10"], a: 0, e: "Ambos extremos incluidos." },
    ],
    feynman: ["Qué diferencia hay entre ecuación e inecuación", "Por qué gira el signo al multiplicar por un negativo", "Cómo escribir la solución como intervalo", "Qué es la solución de un sistema de inecuaciones"],
    mapa: mapa("INECUACIONES", "var(--bac)", [
      ["Resolver", "como una ecuación", "var(--pen)"],
      ["¡Atención!", "× o ÷ negativo gira el signo", "var(--red)"],
      ["Solución", "un intervalo", "var(--leaf)"],
      ["Sistemas", "intersección", "var(--inf)"],
    ], 260),
    tarjetas: [
      ["¿Qué pasa al dividir una inecuación entre −2?", "La desigualdad cambia de sentido."],
      ["x > 1 como intervalo", "(1, +∞)"],
      ["Solución de un sistema de inecuaciones", "La parte común de las soluciones."],
      ["Diferencia entre [a y (a", "El corchete incluye el extremo; el paréntesis no."],
      ["Resuelve x + 4 ≤ 6", "x ≤ 2"],
    ],
  }),

  adapta(B("funciones"), {
    titulo: "Funciones",
    minutos: 35,
    objetivos: ["Reconocer una función a partir de tablas, gráficas, fórmulas y enunciados", "Leer en una gráfica dominio, crecimiento, máximos y mínimos", "Interpretar gráficas de situaciones reales"],
    bloques: ["Qué es una función", "Crecimiento, máximos y mínimos", "Continuidad"],
    quiz: [
      { q: "¿Qué gráfica NO es una función?", o: ["Una recta inclinada", "Una circunferencia", "Una parábola"], a: 1, e: "Una recta vertical corta a la circunferencia en dos puntos." },
      { q: "En la gráfica de la temperatura de un día, el punto más alto es…", o: ["un mínimo", "un máximo", "un corte con el eje"], a: 1, e: "Ahí pasa de subir a bajar." },
      { q: "Si la gráfica tiene un salto, la función es…", o: ["continua", "discontinua", "creciente"], a: 1, e: "No se puede dibujar sin levantar el lápiz." },
      { q: "Si f(x) = 2x + 1, f(3) =", o: ["7", "6", "5"], a: 0, e: "2 · 3 + 1 = 7." },
      { q: "Una función es creciente cuando…", o: ["al aumentar x, y disminuye", "al aumentar x, y aumenta", "y no cambia"], a: 1, e: "La gráfica sube de izquierda a derecha." },
    ],
    examen: [
      { q: "El precio de un taxi según los km es una función. ¿Cuál es la variable independiente?", o: ["El precio", "Los km", "El taxista"], a: 1, e: "Los km determinan el precio." },
      { q: "¿Dónde corta f(x) = x − 4 al eje X?", o: ["(4, 0)", "(0, −4)", "(−4, 0)"], a: 0, e: "x − 4 = 0 → x = 4." },
      { q: "El dominio de la temperatura medida de 0 h a 24 h es…", o: ["[0, 24]", "ℝ", "(0, 24)"], a: 0, e: "Las horas en las que hay datos." },
    ],
    feynman: ["Qué es una función y cómo se reconoce en una gráfica", "Qué es el dominio", "Cómo se ven el crecimiento y los máximos", "Qué significa que una función sea continua"],
    mapa: mapa("FUNCIONES", "var(--bac)", [
      ["Qué es", "a cada x, una sola y", "var(--ink)"],
      ["Formas de darla", "tabla · gráfica · fórmula", "var(--pen)"],
      ["Crecimiento", "crece · decrece · máx · mín", "var(--leaf)"],
      ["Continuidad", "sin levantar el lápiz", "var(--red)"],
    ], 260),
  }),

  adapta(B("tipos-funciones"), {
    titulo: "Funciones lineales y cuadráticas",
    minutos: 35,
    objetivos: ["Representar funciones lineales y afines e interpretar la pendiente", "Representar parábolas calculando el vértice y los cortes con los ejes", "Usar estas funciones para modelizar situaciones reales"],
    pregunta: { texto: "Un taxi cobra 3 € de bajada de bandera y 1,2 € por kilómetro. ¿Cómo sería la gráfica del precio?", respuesta: "Una <mark>recta</mark>: precio = 3 + 1,2 · km. Empieza en 3 € (ordenada en el origen) y sube 1,2 € por cada km (pendiente). Es una <b>función afín</b>." },
    bloques: ["Funciones lineales y afines", "Funciones cuadráticas: la parábola"],
    video: { id: "AoZpzAoC1Qg", titulo: "Gráfica de la función lineal, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 13775423, megusta: 0, busqueda: "función lineal pendiente" },
    figura: { titulo: "Recta y parábola: cómo dibujarlas rápido", svg: B("tipos-funciones").figura.svg },
    quiz: [
      { q: "En y = 4x − 2, la pendiente es…", o: ["4", "−2", "2"], a: 0, e: "El número que multiplica a x." },
      { q: "¿Dónde corta y = 3x + 6 al eje Y?", o: ["(0, 6)", "(6, 0)", "(−2, 0)"], a: 0, e: "Para x = 0, y = 6." },
      { q: "La parábola y = x² − 4 corta al eje X en…", o: ["x = ±2", "x = 4", "x = −4"], a: 0, e: "x² − 4 = 0 → x = ±2." },
      { q: "¿Hacia dónde abre y = −x² + 3?", o: ["Arriba", "Abajo", "No es una parábola"], a: 1, e: "El coeficiente de x² es negativo." },
      { q: "El vértice de y = x² − 4x + 1 está en x =", o: ["2", "−2", "4"], a: 0, e: "x_v = −b/2a = 4/2 = 2." },
    ],
    examen: [
      { q: "Una función de proporcionalidad directa pasa siempre por…", o: ["(0, 0)", "(1, 1)", "(0, 1)"], a: 0, e: "y = mx: para x = 0, y = 0." },
      { q: "Un móvil cobra 10 € al mes más 0,1 € por minuto. La fórmula es…", o: ["y = 10x + 0,1", "y = 0,1x + 10", "y = 10,1x"], a: 1, e: "Fijo 10, más 0,1 por minuto." },
      { q: "¿Cuál de estas funciones es cuadrática?", o: ["y = 3x + 2", "y = 2x² − 1", "y = 5/x"], a: 1, e: "Tiene x²." },
    ],
    feynman: ["Qué significan la pendiente y la ordenada en el origen", "Cómo dibujar una recta con dos puntos", "Cómo encontrar el vértice y los cortes de una parábola", "Un ejemplo real de cada tipo"],
    mapa: mapa("LINEALES Y CUADRÁTICAS", "var(--bac)", [
      ["Lineal", "y = mx · pasa por (0, 0)", "var(--pen)"],
      ["Afín", "y = mx + n · recta", "var(--leaf)"],
      ["Cuadrática", "y = ax² + bx + c · parábola", "var(--red)"],
      ["Vértice", "x = −b / 2a", "var(--inf)"],
    ], 260),
    tarjetas: [
      ["¿Qué indica la pendiente?", "Cuánto sube o baja y por cada unidad de x."],
      ["Ordenada en el origen", "El punto donde la recta corta al eje Y: (0, n)."],
      ["¿Cuándo abre hacia arriba una parábola?", "Cuando el coeficiente de x² es positivo."],
      ["Vértice de la parábola", "x_v = −b / 2a"],
      ["Cortes de la parábola con el eje X", "Las soluciones de ax² + bx + c = 0."],
    ],
  }),

  adapta(B("semejanza"), {
    titulo: "Semejanza y teorema de Tales",
    minutos: 35,
    objetivos: ["Reconocer figuras semejantes y su razón de semejanza", "Usar el teorema de Tales para calcular medidas", "Trabajar con escalas en mapas, planos y maquetas"],
    bloques: ["Figuras semejantes", "Teorema de Tales", "Criterios de semejanza de triángulos", "Escalas: mapas y planos"],
    quiz: [
      { q: "Un triángulo de lados 3, 4, 5 y otro de 6, 8, 10 son…", o: ["iguales", "semejantes con razón 2", "no semejantes"], a: 1, e: "Cada lado es el doble." },
      { q: "En un plano a escala 1 : 100, una pared mide 5 cm. ¿Cuánto mide en realidad?", o: ["5 m", "50 m", "0,5 m"], a: 0, e: "5 · 100 = 500 cm = 5 m." },
      { q: "Una farola da una sombra de 6 m y un palo de 1 m da 1,5 m. ¿Altura de la farola?", o: ["4 m", "9 m", "6 m"], a: 0, e: "h / 6 = 1 / 1,5 → h = 4 m." },
      { q: "Si dos triángulos tienen dos ángulos iguales, son…", o: ["semejantes", "iguales", "rectángulos"], a: 0, e: "Es un criterio de semejanza." },
      { q: "Una foto de 10 × 15 cm se amplía con razón 2. ¿Qué medidas tiene?", o: ["20 × 30 cm", "12 × 17 cm", "20 × 15 cm"], a: 0, e: "Se multiplican los dos lados por 2." },
    ],
    examen: [
      { q: "En un mapa 1 : 200.000, 3 cm son…", o: ["6 km", "600 m", "60 km"], a: 0, e: "600.000 cm = 6 km." },
      { q: "¿Qué dice el teorema de Tales?", o: ["Las paralelas cortan segmentos proporcionales", "Los ángulos de un triángulo suman 180°", "a² + b² = c²"], a: 0, e: "Es el teorema de las paralelas y los segmentos proporcionales." },
      { q: "La razón de semejanza entre un lado de 12 cm y su homólogo de 4 cm es…", o: ["3", "8", "1/4"], a: 0, e: "12 / 4 = 3." },
    ],
    mapa: mapa("SEMEJANZA", "var(--bac)", [
      ["Semejantes", "misma forma · k = a′/a", "var(--pen)"],
      ["Tales", "paralelas → proporcionales", "var(--red)"],
      ["Criterios", "2 ángulos iguales", "var(--leaf)"],
      ["Escalas", "1 : 50.000 · mapas y planos", "var(--inf)"],
    ], 260),
  }),

  adapta(B("probabilidad"), {
    titulo: "Probabilidad",
    minutos: 35,
    objetivos: ["Aplicar la regla de Laplace en juegos y situaciones cotidianas", "Usar el suceso contrario", "Calcular probabilidades de experimentos compuestos con diagramas de árbol"],
    bloques: ["Experimentos aleatorios y regla de Laplace", "Propiedades básicas", "Experimentos compuestos: el diagrama de árbol", "Sucesos independientes"],
    video: { id: "WeeEE8o1aqM", titulo: "Probabilidad, súper fácil", canal: "Daniel Carreón", vistas: 6897585, megusta: 190526, busqueda: "probabilidad regla de laplace" },
    quiz: [
      { q: "P(sacar un 5 en un dado) =", o: ["1/6", "5/6", "1/5"], a: 0, e: "Un caso favorable entre seis." },
      { q: "En una bolsa hay 3 bolas rojas y 7 verdes. P(roja) =", o: ["3/7", "3/10", "7/10"], a: 1, e: "3 favorables de 10." },
      { q: "Si P(ganar) = 0,2, P(no ganar) =", o: ["0,8", "0,2", "1,2"], a: 0, e: "1 − 0,2." },
      { q: "P(dos caras al lanzar dos monedas) =", o: ["1/2", "1/4", "1/3"], a: 1, e: "1/2 · 1/2." },
      { q: "¿Qué valor NO puede ser una probabilidad?", o: ["0", "0,75", "1,3"], a: 2, e: "Siempre está entre 0 y 1." },
    ],
    examen: [
      { q: "En una baraja de 40 cartas, P(sacar un rey) =", o: ["1/10", "1/4", "4/10"], a: 0, e: "4 reyes de 40." },
      { q: "P(sacar par o 5 en un dado) =", o: ["4/6", "3/6", "1/6"], a: 0, e: "Casos 2, 4, 6 y 5." },
      { q: "Tras 3 caras seguidas, P(cara) en la cuarta es…", o: ["1/2", "menos de 1/2", "más de 1/2"], a: 0, e: "Cada lanzamiento es independiente." },
    ],
    feynman: ["Cuándo se puede usar la regla de Laplace", "Qué es el suceso contrario y para qué sirve", "Cómo se usa un diagrama de árbol", "Por qué la moneda no tiene memoria"],
    mapa: mapa("PROBABILIDAD", "var(--bac)", [
      ["Laplace", "favorables / posibles", "var(--pen)"],
      ["Entre 0 y 1", "imposible · seguro", "var(--ink)"],
      ["Contrario", "P(Ā) = 1 − P(A)", "var(--leaf)"],
      ["Árbol", "× ramas · + caminos", "var(--inf)"],
    ], 260),
    tarjetas: [
      ["Regla de Laplace", "P(A) = casos favorables / casos posibles."],
      ["Probabilidad del suceso contrario", "P(Ā) = 1 − P(A)"],
      ["Valor de un suceso seguro", "1"],
      ["En un diagrama de árbol…", "se multiplican las ramas de un camino y se suman los caminos."],
      ["¿Una moneda tiene memoria?", "No: cada lanzamiento es independiente."],
    ],
  }),
];

// Ampliación de cada tema en su propio fichero: src/temas/_mata-<slug del título>.js,
// que exporta una función (T) => { ... } que añade bloques, ejemplos, errores, ejercicios, quiz y tarjetas.
{
  const fs = require("fs");
  const path = require("path");
  const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  for (const T of module.exports) {
    const f = path.join(__dirname, `_mata-${slug(T.titulo)}.js`);
    if (fs.existsSync(f)) {
      T.bloques = [...T.bloques]; T.quiz = [...T.quiz]; T.tarjetas = [...T.tarjetas]; T.objetivos = [...T.objetivos];
      require(f)(T);
    }
  }
}
