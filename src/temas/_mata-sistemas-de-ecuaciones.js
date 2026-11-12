// Ampliación de «Sistemas de ecuaciones» (Matemáticas A, 4º ESO): nivel de libro de texto, aplicado.
const { F } = require("./_util");
const { ampliar, tabla } = require("./_hum");

const grafico = `<svg viewBox="0 0 260 180" role="img" aria-label="Las rectas x + y = 5 y x − y = 1 se cortan en el punto (3, 2)">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${[1, 2, 3, 4, 5, 6, 7, 8].map((v) => `<path d="M${30 + v * 25} 25 V 150" stroke="var(--line)" stroke-width="1"/>`).join("")}
  ${[1, 2, 3, 4, 5].map((v) => `<path d="M30 ${150 - v * 25} H 240" stroke="var(--line)" stroke-width="1"/>`).join("")}
  <path d="M30 150 H 240 M30 150 V 18" stroke="var(--muted)" stroke-width="2"/>
  <path d="M30 25 L 155 150" stroke="var(--pen)" stroke-width="3"/>
  <path d="M55 150 L 180 25" stroke="var(--red)" stroke-width="3"/>
  <circle cx="105" cy="100" r="6" fill="var(--ink)"/>
  <g ${F} font-size="12" font-weight="700">
    <text x="105" y="134" text-anchor="middle" fill="var(--ink)">(3, 2)</text>
    <text x="250" y="60" text-anchor="end" fill="var(--pen)">x + y = 5</text>
    <text x="250" y="80" text-anchor="end" fill="var(--red)">x − y = 1</text>
  </g>
  <g ${F} font-size="10" fill="var(--muted)" text-anchor="middle">${[1, 2, 3, 4, 5, 6, 7, 8].map((v) => `<text x="${30 + v * 25}" y="165">${v}</text>`).join("")}</g>
</svg>`;

module.exports = (T) => ampliar(T, {
  minutos: 60,
  objetivos: ["Elegir el método más cómodo según el aspecto del sistema", "Resolver problemas de edades, precios, mezclas y tarifas"],
  bloques: [
    { tras: "<h3>Qué es un sistema", html: `<h3>Comprobar una solución</h3><p>Para saber si un par (x, y) es solución, se <mark>sustituye en las dos ecuaciones</mark>: tiene que cumplir las dos. Por ejemplo, (12, 8) es solución de x + y = 20 y 2x + 4y = 56, porque 12 + 8 = 20 y 2 · 12 + 4 · 8 = 24 + 32 = 56. En cambio, (10, 10) cumple la primera pero no la segunda (20 + 40 = 60), así que <b>no</b> es solución. Comprobar al final es la forma más rápida de detectar un error de cálculo.</p>` },
    { tras: "<h3>Qué es un sistema", html: `<h3>El método gráfico</h3><p>Se dibujan las dos rectas haciendo una <b>tabla de valores</b> con dos o tres puntos de cada una, y se busca el <mark>punto de corte</mark>. Es muy visual, pero poco exacto si la solución tiene decimales; por eso se usa para entender y comprobar, y los métodos algebraicos para calcular.</p>${grafico}<p class="caption">x + y = 5 pasa por (0, 5) y (5, 0); x − y = 1 pasa por (1, 0) y (4, 3). Se cortan en (3, 2).</p>`, video: { id: "xla02Y99Ngw", titulo: "Resolver sistemas de ecuaciones: método de graficación", canal: "Daniel Carreón", vistas: 4317837, megusta: 0 } },
    { tras: "<h3>Igualación y reducción", html: `<h3>¿Qué método elijo?</h3>${tabla(["Si el sistema…", "Usa", "Ejemplo"], [["tiene una incógnita con coeficiente 1", "sustitución", "x + 3y = 10"], ["tiene la misma incógnita despejada en las dos", "igualación", "y = 2x + 1 e y = 5 − x"], ["tiene coeficientes iguales u opuestos", "reducción", "3x + 2y = 12 y 5x − 2y = 4"], ["tiene coeficientes «feos»", "reducción multiplicando", "3x + 4y = 18 y 2x + 3y = 13"]])}<p>Todos los métodos dan <mark>la misma solución</mark>: elige el que te ahorre cálculos con fracciones.</p>` },
    { tras: "<h3>Tipos de sistemas", html: `<h3>Plantear un problema en cuatro pasos</h3><ol><li><b>Elige las incógnitas</b> y escribe qué es cada una: «x = precio de un bocadillo».</li><li><b>Traduce</b> cada dato a una ecuación: necesitas dos datos distintos para dos incógnitas.</li><li><b>Resuelve</b> el sistema con el método más cómodo.</li><li><b>Comprueba</b> en el enunciado y responde con una frase y unidades. Una solución negativa o con decimales en «número de personas» indica un error.</li></ol>` },
    { tras: "<h3>Tipos de sistemas", html: `<h3>Problemas típicos</h3>${tabla(["Tipo", "Ecuación de cantidad", "Ecuación de valor"], [["Entradas de cine (normal y reducida)", "x + y = entradas vendidas", "8x + 5y = recaudación"], ["Monedas de 1 € y de 2 €", "x + y = número de monedas", "x + 2y = euros totales"], ["Mezcla de café de 10 €/kg y 14 €/kg", "x + y = kilos de mezcla", "10x + 14y = precio total"], ["Edades", "x = 3y (hoy)", "x + 10 = 2(y + 10) (dentro de 10 años)"]])}<p>Casi siempre una ecuación cuenta <mark>cuántos</mark> hay y la otra cuánto <mark>valen</mark>.</p>` },
  ],
  ejemplos: [
    { enunciado: "En un cine se venden 200 entradas, unas a 8 € y otras a 5 € (reducidas), y se recaudan 1.360 €. ¿Cuántas entradas de cada tipo se vendieron?", pasos: ["x = entradas normales, y = reducidas.", "x + y = 200 y 8x + 5y = 1.360.", "Sustitución: x = 200 − y → 8(200 − y) + 5y = 1.360 → 1.600 − 3y = 1.360 → y = 80.", "x = 200 − 80 = 120. Comprobación: 8 · 120 + 5 · 80 = 960 + 400 = 1.360."], resultado: "120 entradas normales y 80 reducidas." },
    { enunciado: "Una hucha tiene 30 monedas de 1 € y de 2 €, con 45 € en total. ¿Cuántas hay de cada clase?", pasos: ["x = monedas de 1 €, y = monedas de 2 €.", "x + y = 30 y x + 2y = 45.", "Reducción: restando la primera a la segunda, y = 15.", "x = 30 − 15 = 15."], resultado: "15 monedas de 1 € y 15 de 2 €." },
    { enunciado: "La compañía A cobra 20 € de alta y 0,10 € por minuto; la B, 5 € de alta y 0,25 € por minuto. ¿Con cuántos minutos pagan lo mismo?", pasos: ["y = 20 + 0,10x e y = 5 + 0,25x.", "Igualación: 20 + 0,10x = 5 + 0,25x → 15 = 0,15x → x = 100.", "y = 20 + 0,10 · 100 = 30 €."], resultado: "Con 100 minutos las dos cuestan 30 €; con más minutos, conviene A." },
  ],
  errores: [
    "Sustituir la incógnita despejada en la misma ecuación de la que se ha despejado: se obtiene 0 = 0.",
    "Olvidar multiplicar todos los términos (también el de después del igual) en el método de reducción.",
    "Equivocarse con los signos al restar ecuaciones: es más seguro multiplicar por −1 y sumar.",
    "Dar solo el valor de una incógnita: la solución es el par (x, y).",
    "No comprobar si la solución tiene sentido: no puede haber −3 entradas ni 2,5 personas.",
  ],
  ejercicios: [
    { q: "Comprueba si (2, 3) es solución de x + y = 5 y 3x − y = 3.", sol: "2 + 3 = 5 ✓; 6 − 3 = 3 ✓. Sí es solución." },
    { q: "Resuelve por sustitución: x + 2y = 11; 3x − y = 5.", sol: "x = 11 − 2y → 33 − 6y − y = 5 → y = 4, x = 3." },
    { q: "Resuelve por igualación: y = 3x − 1; y = x + 5.", sol: "3x − 1 = x + 5 → x = 3, y = 8." },
    { q: "Resuelve por reducción: 2x + 3y = 12; 2x − y = 4.", sol: "Restando: 4y = 8 → y = 2; 2x = 6 → x = 3." },
    { q: "Resuelve por reducción: 3x + 2y = 16; 5x − 4y = 12.", sol: "Multiplica la primera por 2: 6x + 4y = 32. Suma: 11x = 44 → x = 4, y = 2." },
    { q: "Resuelve gráficamente: x + y = 4; x − y = 2.", sol: "Las rectas pasan por (0, 4)-(4, 0) y (2, 0)-(4, 2). Se cortan en (3, 1)." },
    { q: "¿Qué tipo de sistema es x + y = 3; 2x + 2y = 6?", sol: "Compatible indeterminado: la segunda es la primera multiplicada por 2 (la misma recta)." },
    { q: "Tres cuadernos y dos bolígrafos cuestan 7 €; un cuaderno y un bolígrafo, 2,80 €. ¿Cuánto cuesta cada cosa?", sol: "3x + 2y = 7; x + y = 2,8 → x = 1,40 € el cuaderno, y = 1,40 € el bolígrafo." },
    { q: "En un aparcamiento hay 40 vehículos entre coches y motos, con 130 ruedas. ¿Cuántos hay de cada?", sol: "x + y = 40; 4x + 2y = 130 → x = 25 coches, y = 15 motos." },
    { q: "Una madre tiene el triple de edad que su hijo, y dentro de 12 años tendrá el doble. ¿Qué edades tienen?", sol: "x = 3y; x + 12 = 2(y + 12) → 3y + 12 = 2y + 24 → y = 12, x = 36." },
  ],
  quiz: [
    { q: "¿Es (1, 4) solución de x + y = 5 y 2x + y = 6?", o: ["Sí", "No", "Solo de la primera"], a: 0, e: "1 + 4 = 5 y 2 + 4 = 6." },
    { q: "Si x + y = 30 y 4x + 2y = 100, x vale…", o: ["20", "10", "25"], a: 0, e: "Reducción: 2x = 40 → x = 20 (y = 10)." },
    { q: "En el método gráfico, la solución es…", o: ["el punto de corte de las rectas", "el origen", "la pendiente"], a: 0, e: "Donde se cumplen las dos ecuaciones." },
    { q: "Para x + 3y = 10 y 2x + 5y = 17, lo más cómodo es…", o: ["sustitución", "el método gráfico", "probar al azar"], a: 0, e: "x tiene coeficiente 1: x = 10 − 3y." },
    { q: "Si al resolver llegas a 0 = 7, el sistema es…", o: ["incompatible", "compatible determinado", "compatible indeterminado"], a: 0, e: "No tiene solución: rectas paralelas." },
  ],
  tarjetas: [
    ["Comprobar una solución", "Sustituir el par (x, y) en las dos ecuaciones."],
    ["Problema de monedas", "Una ecuación cuenta monedas; la otra, euros."],
  ],
});
