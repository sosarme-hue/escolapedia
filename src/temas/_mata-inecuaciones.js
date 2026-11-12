// Ampliación de «Inecuaciones» (Matemáticas A, 4º ESO): nivel de libro de texto, aplicado.
const { F } = require("./_util");
const { ampliar, tabla } = require("./_hum");

const X = (v) => 30 + (v + 3) * 25;
const recta = `<svg viewBox="0 0 260 120" role="img" aria-label="Recta real con el intervalo desde menos 1 incluido hasta 3 sin incluir">
  <rect width="260" height="120" rx="14" fill="var(--paper)"/>
  <text x="130" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>x ≥ −1 y x &lt; 3 → [−1, 3)</text>
  <path d="M16 64 H 244" stroke="var(--muted)" stroke-width="2"/>
  ${[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((v) => `<path d="M${X(v)} 58 V 70" stroke="var(--muted)" stroke-width="2"/><text x="${X(v)}" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>${v}</text>`).join("")}
  <path d="M${X(-1)} 64 H ${X(3)}" stroke="var(--red)" stroke-width="6"/>
  <circle cx="${X(-1)}" cy="64" r="6" fill="var(--red)"/>
  <circle cx="${X(3)}" cy="64" r="6" fill="var(--paper)" stroke="var(--red)" stroke-width="3"/>
  <text x="130" y="110" text-anchor="middle" font-size="10" fill="var(--pen)" ${F}>punto lleno: entra · punto hueco: no entra</text>
</svg>`;

module.exports = (T) => ampliar(T, {
  minutos: 60,
  objetivos: ["Representar intervalos en la recta real", "Traducir expresiones como «como mínimo» o «no más de» en problemas"],
  bloques: [
    { tras: "<h3>Inecuaciones de primer grado", html: `<h3>Desigualdades, intervalos y dibujo</h3><p>Una inecuación tiene <b>infinitas soluciones</b>, que se escriben como un <mark>intervalo</mark>. El corchete [ ] indica que el extremo entra; el paréntesis ( ), que no entra. El infinito siempre lleva paréntesis.</p>${tabla(["Desigualdad", "Se lee", "Intervalo", "En la recta"], [["x &lt; 3", "menor que 3", "(−∞, 3)", "punto hueco en 3, hacia la izquierda"], ["x ≤ 3", "menor o igual que 3", "(−∞, 3]", "punto lleno en 3, hacia la izquierda"], ["x &gt; −1", "mayor que −1", "(−1, +∞)", "punto hueco en −1, hacia la derecha"], ["x ≥ −1", "mayor o igual que −1", "[−1, +∞)", "punto lleno en −1, hacia la derecha"]])}` },
    { tras: "<h3>Inecuaciones de primer grado", html: `<h3>Representar en la recta real</h3><p>Se marca el extremo con un <b>punto lleno</b> si está incluido (≤, ≥) o <b>hueco</b> si no (&lt;, &gt;), y se colorea la parte de la recta que cumple la desigualdad. Si hay dos extremos, se colorea el tramo entre ellos.</p>${recta}`, video: { id: "tyt6T1Ukq3w", titulo: "Representación gráfica de intervalos", canal: "Matemáticas profe Alex", vistas: 4535662, megusta: 0 } },
    { tras: "<h3>Inecuaciones de primer grado", html: `<h3>Resolver paso a paso</h3><p>Se siguen los mismos pasos que en una ecuación: 1) quitar <b>paréntesis</b>; 2) quitar <b>denominadores</b> multiplicando por el m.c.m. (positivo, así que no cambia el sentido); 3) pasar las x a un lado y los números al otro; 4) despejar x, y <mark>cambiar el sentido solo si se divide entre un negativo</mark>.</p><div class="formula"><span>3(x − 2) &lt; x + 4</span><span class="op">→</span><span>3x − 6 &lt; x + 4</span><span class="op">→</span><span>2x &lt; 10</span><span class="op">→</span><span>x &lt; 5</span></div><p>Truco para comprobar: elige un número de la solución (por ejemplo, 0) y otro de fuera (por ejemplo, 6) y mira cuál cumple la desigualdad.</p>` },
    { tras: "<h3>Resolver paso a paso", html: `<h3>¿Por qué cambia el sentido?</h3><p>Parte de una desigualdad cierta: <b>2 &lt; 5</b>. Si sumas, restas, multiplicas o divides por un número positivo, sigue siendo cierta: 2 · 3 &lt; 5 · 3, es decir, 6 &lt; 15. Pero si multiplicas por <b>−1</b>, obtienes −2 y −5, y ahora <mark>−2 es mayor que −5</mark>: el orden se ha dado la vuelta. Multiplicar por un negativo es como mirar la recta en un espejo, por eso hay que cambiar &lt; por &gt; (y ≤ por ≥). Un truco para evitarlo: pasa los términos para que la x quede con coeficiente positivo. Por ejemplo, en 8 − 2x &gt; 2, pasa la x a la derecha: 8 − 2 &gt; 2x → 6 &gt; 2x → x &lt; 3.</p>` },
    { tras: "<h3>Sistemas de inecuaciones", html: `<h3>Cuando no hay solución</h3><p>Al resolver un sistema, se dibujan las dos soluciones en la misma recta y se busca la parte <mark>común</mark>. Si no se solapan, el sistema <b>no tiene solución</b>. Por ejemplo, x &gt; 4 y x &lt; 1: ningún número es a la vez mayor que 4 y menor que 1. Y si una solución contiene a la otra, la intersección es la más pequeña: x &gt; 2 y x &gt; 5 da x &gt; 5.</p>` },
    { tras: "<h3>Sistemas de inecuaciones", html: `<h3>Traducir los enunciados</h3>${tabla(["En el enunciado", "Símbolo", "Ejemplo"], [["como mínimo, al menos, no menos de", "≥", "al menos 18 años: x ≥ 18"], ["como máximo, no más de, no supera", "≤", "no supera 50 €: x ≤ 50"], ["más de, supera", "&gt;", "más de 100 km: x &gt; 100"], ["menos de, no llega a", "&lt;", "menos de 3 horas: x &lt; 3"]])}<p>Cuidado con los resultados: si x son personas o entradas, la respuesta son <mark>números enteros</mark>.</p>`, video: { id: "yKiGhV3scAM", titulo: "Cómo resolver problemas de inecuaciones", canal: "Academia Internet", vistas: 448257, megusta: 0 } },
    { tras: "<h3>Sistemas de inecuaciones", html: `<h3>Comparar tarifas</h3><p>Las inecuaciones sirven para decidir qué opción <b>conviene</b>. La tarifa A cuesta 10 € al mes más 0,05 € por minuto; la B, 0,15 € por minuto sin cuota. A es más barata cuando 10 + 0,05x &lt; 0,15x → 10 &lt; 0,10x → <mark>x &gt; 100 minutos</mark>. Si hablas menos de 100 minutos al mes, te conviene B; si hablas más, A. En 100 minutos exactos cuestan lo mismo (15 €).</p>` },
  ],
  ejemplos: [
    { enunciado: "Resuelve (x + 1)/2 − x/3 ≥ 1 y escribe la solución como intervalo.", pasos: ["m.c.m.(2, 3) = 6: 3(x + 1) − 2x ≥ 6.", "3x + 3 − 2x ≥ 6 → x ≥ 3.", "Punto lleno en 3, hacia la derecha."], resultado: "x ≥ 3, es decir, [3, +∞)." },
    { enunciado: "Para aprobar, la media de tres exámenes debe ser al menos 5. Llevas un 4 y un 5,5. ¿Qué nota necesitas en el tercero?", pasos: ["(4 + 5,5 + x)/3 ≥ 5.", "9,5 + x ≥ 15.", "x ≥ 5,5."], resultado: "Necesitas como mínimo un 5,5." },
    { enunciado: "Un taxi cobra 3 € de bajada de bandera y 1,20 € por km. Tienes 15 €. ¿Cuántos km puedes recorrer?", pasos: ["3 + 1,20x ≤ 15.", "1,20x ≤ 12.", "x ≤ 10."], resultado: "Como máximo 10 km: el intervalo [0, 10]." },
  ],
  errores: [
    "No cambiar el sentido al dividir o multiplicar por un número negativo.",
    "Cambiar el sentido al restar o sumar un número negativo (eso no lo cambia).",
    "Usar corchete con el infinito: siempre va con paréntesis.",
    "Confundir punto lleno y punto hueco en la recta real.",
    "Dar como solución de un sistema la unión en vez de la parte común.",
  ],
  ejercicios: [
    { q: "Escribe como intervalo: x ≤ −2.", sol: "(−∞, −2]." },
    { q: "Escribe como desigualdad el intervalo (1, 6].", sol: "1 &lt; x ≤ 6." },
    { q: "Resuelve 5x − 3 &gt; 2x + 9.", sol: "3x &gt; 12 → x &gt; 4: (4, +∞)." },
    { q: "Resuelve 4 − 2x ≥ 10.", sol: "−2x ≥ 6 → x ≤ −3 (cambia el sentido): (−∞, −3]." },
    { q: "Resuelve 2(x − 3) ≤ x + 1.", sol: "2x − 6 ≤ x + 1 → x ≤ 7: (−∞, 7]." },
    { q: "Resuelve x/4 + 1 &lt; 3.", sol: "x/4 &lt; 2 → x &lt; 8: (−∞, 8)." },
    { q: "Resuelve el sistema: x + 2 &gt; 0 y 3x ≤ 12.", sol: "x &gt; −2 y x ≤ 4 → (−2, 4]." },
    { q: "Resuelve el sistema: 2x &gt; 10 y x − 1 &lt; 3.", sol: "x &gt; 5 y x &lt; 4: no hay parte común, sin solución." },
    { q: "Un ascensor soporta como máximo 450 kg. Si suben 5 personas de 70 kg, ¿cuántos kg de carga pueden añadir?", sol: "350 + x ≤ 450 → x ≤ 100 kg." },
    { q: "Una camiseta estampada cuesta 6 € y se venden a 10 €. Con 120 € de gastos fijos, ¿cuántas hay que vender para ganar dinero?", sol: "10x − 6x − 120 &gt; 0 → 4x &gt; 120 → x &gt; 30: al menos 31 camisetas." },
  ],
  quiz: [
    { q: "«Como mínimo 18» se escribe…", o: ["x ≥ 18", "x ≤ 18", "x = 18"], a: 0, e: "Puede ser 18 o más." },
    { q: "El intervalo [2, +∞) en la recta tiene en 2…", o: ["un punto lleno", "un punto hueco", "una flecha"], a: 0, e: "El corchete indica que 2 está incluido." },
    { q: "Al resolver x/3 ≤ 2 se obtiene…", o: ["x ≤ 6", "x ≥ 6", "x ≤ 2/3"], a: 0, e: "Multiplicar por 3 (positivo) no cambia el sentido." },
    { q: "Las soluciones de «x mayor que 4 y x menor que 1» son…", o: ["ninguna", "todos los números", "solo el 4"], a: 0, e: "No se solapan." },
    { q: "Con 20 € y entradas de 6 €, puedes comprar como máximo…", o: ["3 entradas", "4 entradas", "3,33 entradas"], a: 0, e: "6x ≤ 20 → x ≤ 3,33; solo enteros: 3." },
  ],
  tarjetas: [
    ["Punto lleno o hueco", "Lleno con ≤ y ≥; hueco con «menor que» y «mayor que»."],
    ["«No más de»", "Se traduce por ≤."],
    ["El infinito en un intervalo", "Siempre con paréntesis."],
  ],
});
