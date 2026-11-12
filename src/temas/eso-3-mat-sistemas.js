// Matemáticas 3º ESO: sistemas de ecuaciones. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, ejes, mezcla } = require("./_eso3");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Sistemas de ecuaciones",
  minutos: 60,
  objetivos: ["Reconocer ecuaciones lineales con dos incógnitas y sus soluciones", "Resolver sistemas por sustitución, igualación, reducción y gráficamente", "Clasificar un sistema según su número de soluciones", "Plantear y resolver problemas con sistemas"],
  claves: ["sistema", "incógnitas", "sustitución", "igualación", "reducción", "compatible"],
  pregunta: {
    texto: "En una granja hay gallinas y conejos. Se cuentan 20 cabezas y 56 patas. ¿Cuántos animales hay de cada tipo?",
    respuesta: "Con dos incógnitas, x gallinas e y conejos: <mark>x + y = 20</mark> (cabezas) y <mark>2x + 4y = 56</mark> (patas). Resolviendo el sistema, hay 12 gallinas y 8 conejos. Los sistemas sirven cuando un problema tiene varias cantidades desconocidas relacionadas.",
  },
  bloques: [
    {
      html: `<h3>Ecuaciones lineales con dos incógnitas</h3><p>Una ecuación como <b>x + y = 5</b> tiene dos incógnitas. Una solución es una <b>pareja de valores</b> (x, y) que la cumple: (1, 4), (2, 3), (0, 5), (−1, 6)… ¡Tiene <mark>infinitas soluciones</mark>!</p><p>Si representamos todas esas parejas como puntos del plano, forman una <b>recta</b>. Por eso estas ecuaciones se llaman <b>lineales</b>. Para dibujarla basta con despejar y (y = 5 − x), hacer una tabla con dos o tres valores y unir los puntos.</p>`,
      svg: svg("Recta x más y igual a 5 con los puntos 0,5; 2,3 y 5,0 marcados", `${ejes(40, 150, 20, [-1, 9], [-1, 6])}<path d="M40 50 L 140 150" stroke="var(--pen)" stroke-width="3"/>
        ${[[0, 5], [2, 3], [5, 0]].map(([x, y]) => `<circle cx="${40 + x * 20}" cy="${150 - y * 20}" r="5" fill="var(--red)"/>${t(48 + x * 20, 146 - y * 20, `(${x}, ${y})`, { a: "start", s: 11, c: "var(--red)" })}`).join("")}
        ${t(200, 40, "x + y = 5", { c: "var(--pen)", s: 13 })}`),
    },
    {
      html: `<h3>Qué es un sistema</h3><p>Un <b>sistema de dos ecuaciones lineales con dos incógnitas</b> es un par de ecuaciones que deben cumplirse <mark>a la vez</mark>:</p><p>x + y = 20<br>2x + 4y = 56</p><p>La <b>solución</b> del sistema es la pareja que cumple las dos ecuaciones. Aunque cada ecuación tiene infinitas soluciones, normalmente solo una pareja es común a ambas. Hay tres métodos algebraicos para encontrarla; los tres dan el mismo resultado y conviene elegir el más cómodo en cada caso.</p>`,
    },
    {
      html: `<h3>Método de sustitución</h3><ol><li><b>Despeja</b> una incógnita en una ecuación (la que sea más fácil, sin coeficiente).</li><li><b>Sustituye</b> esa expresión en la otra ecuación: queda una ecuación con una sola incógnita.</li><li><b>Resuélvela</b>.</li><li>Lleva el valor a la expresión despejada para hallar la otra incógnita.</li></ol><p>Granja: de x + y = 20, x = 20 − y. Sustituimos: 2(20 − y) + 4y = 56 → 40 + 2y = 56 → y = 8. Entonces <mark>x = 12</mark>. Es el método ideal cuando alguna incógnita tiene coeficiente 1 o −1.</p>`,
      video: { id: "LTfv1G2iYuQ", titulo: "Sistemas de ecuaciones lineales 2x2 | Método de sustitución", canal: "Matemáticas profe Alex", vistas: 11460890, megusta: 0 },
    },
    {
      html: `<h3>Método de igualación</h3><ol><li>Despeja <b>la misma incógnita</b> en las dos ecuaciones.</li><li><b>Iguala</b> las dos expresiones.</li><li>Resuelve la ecuación resultante y halla la otra incógnita.</li></ol><p>Ejemplo: y = 2x − 1 e y = −x + 8. Igualamos: 2x − 1 = −x + 8 → 3x = 9 → x = 3, y = 5. Es muy cómodo cuando las dos ecuaciones ya vienen con <mark>y despejada</mark>, como ocurre al comparar dos tarifas o dos funciones.</p>`,
    },
    {
      html: `<h3>Método de reducción</h3><ol><li>Multiplica una o las dos ecuaciones por números adecuados para que una incógnita tenga <b>coeficientes opuestos</b>.</li><li><b>Suma</b> las ecuaciones: esa incógnita desaparece.</li><li>Resuelve y sustituye para hallar la otra.</li></ol><p>Ejemplo: 3x + 2y = 16 y 5x − 2y = 8. Ya son opuestos: sumando, 8x = 24 → x = 3; y 9 + 2y = 16 → <mark>y = 3,5</mark>. Si fuera 3x + 2y = 7 y 2x + 3y = 8, multiplicaríamos la primera por 3 y la segunda por −2.</p>`,
      svg: svg("Método de reducción: se suman 3x más 2y igual a 16 y 5x menos 2y igual a 8 y la y desaparece", `${t(130, 46, "3x + 2y = 16", { s: 16, c: "var(--pen)" })}${t(130, 74, "5x − 2y = 8", { s: 16, c: "var(--leaf)" })}<path d="M60 86 H 200" stroke="var(--ink)" stroke-width="2.5"/>${t(44, 74, "+", { s: 18 })}
        ${t(130, 110, "8x       = 24", { s: 16, c: "var(--red)" })}${t(130, 140, "x = 3", { s: 16, c: "var(--red)" })}${t(130, 166, "+2y y −2y se anulan", { s: 11, c: "var(--muted)" })}`),
    },
    {
      html: `<h3>Método gráfico</h3><p>Cada ecuación es una recta; la solución del sistema es el <b>punto de corte</b>. Para resolver gráficamente se dibujan las dos rectas en los mismos ejes y se leen las coordenadas del punto común.</p><p>Es un método muy visual y sirve para comprobar, aunque es <b>poco preciso</b> si la solución no es entera. Por ejemplo, y = 2x − 1 e y = −x + 8 se cortan en (3, 5).</p>`,
      svg: svg("Dos rectas, y igual a 2x menos 1 y y igual a menos x más 8, que se cortan en el punto 3,5", `${ejes(30, 160, 15, [-1, 13], [-1, 9])}<path d="M30 175 L 105 25" stroke="var(--pen)" stroke-width="3"/><path d="M30 40 L 150 160" stroke="var(--leaf)" stroke-width="3"/>
        <circle cx="75" cy="85" r="6" fill="var(--red)"/>${t(86, 80, "(3, 5)", { c: "var(--red)", s: 13, a: "start" })}${t(150, 30, "y = 2x − 1", { c: "var(--pen)", s: 11, a: "start" })}${t(160, 150, "y = −x + 8", { c: "var(--leaf)", s: 11, a: "start" })}`),
    },
    {
      html: `<h3>Tipos de sistemas</h3>${tabla(["Tipo", "Soluciones", "Rectas"], [["Compatible determinado", "una", "se cortan en un punto"], ["Compatible indeterminado", "infinitas", "coinciden (son la misma)"], ["Incompatible", "ninguna", "paralelas"]])}<p>Algebraicamente se nota al resolver: si queda <b>0 = 0</b>, es indeterminado; si queda algo como <b>0 = 7</b>, incompatible. Por ejemplo, x + y = 3 y 2x + 2y = 6 son la misma recta, y x + y = 3 con x + y = 5 son paralelas: ninguna pareja puede sumar a la vez 3 y 5.</p>`,
      svg: svg("Tres casos: rectas que se cortan, rectas coincidentes y rectas paralelas", `${[0, 1, 2].map((i) => `<rect x="${12 + i * 82}" y="20" width="72" height="100" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).join("")}
        <path d="M20 110 L 76 30 M20 40 L 76 104" stroke="var(--pen)" stroke-width="3"/><path d="M102 110 L 158 30" stroke="var(--leaf)" stroke-width="6"/><path d="M102 110 L 158 30" stroke="var(--pen)" stroke-width="2" stroke-dasharray="6 5"/><path d="M184 100 L 240 40 M184 120 L 240 60" stroke="var(--red)" stroke-width="3"/>
        ${t(48, 140, "1 solución", { s: 11, c: "var(--pen)" })}${t(130, 140, "infinitas", { s: 11, c: "var(--leaf)" })}${t(212, 140, "ninguna", { s: 11, c: "var(--red)" })}${t(48, 158, "determinado", { s: 10, c: "var(--muted)" })}${t(130, 158, "indeterminado", { s: 10, c: "var(--muted)" })}${t(212, 158, "incompatible", { s: 10, c: "var(--muted)" })}`),
    },
    {
      html: `<h3>Sistemas con paréntesis y fracciones</h3><p>Muchas veces el sistema no viene «limpio». Antes de aplicar cualquier método hay que <b>preparar cada ecuación</b> hasta dejarla en la forma ax + by = c:</p><ol><li>Quitar paréntesis.</li><li>Quitar denominadores multiplicando por el <mark>m.c.m.</mark> de esa ecuación.</li><li>Pasar las incógnitas a la izquierda y los números a la derecha, y reducir.</li></ol><p>Ejemplo: 2(x − 1) + y = 7 se convierte en 2x + y = 9; y x/3 − y/2 = 1, multiplicando por 6, en 2x − 3y = 6. Ahora ya se resuelve por reducción: restando, 4y = 3 → y = 3/4 y x = 33/8. Con soluciones fraccionarias es todavía más importante <b>comprobar</b> el resultado en las ecuaciones originales, no en las transformadas.</p>`,
    },
    {
      html: `<h3>Plantear problemas con sistemas</h3><ol><li>Elige <b>dos incógnitas</b> y escribe qué representa cada una.</li><li>Busca <b>dos relaciones</b> en el enunciado: cada una es una ecuación.</li><li>Resuelve el sistema por el método más cómodo.</li><li><b>Comprueba</b> la solución en el enunciado, no solo en las ecuaciones.</li></ol><p>Situaciones típicas: dos productos con precios distintos (entradas de adulto y de niño), mezclas, monedas, edades, números con cifras o comparar tarifas de móvil y saber a partir de cuántos minutos interesa una u otra.</p>`,
    },
  ],
  figura: {
    titulo: "¿Qué método elijo?",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Sustitución si una incógnita tiene coeficiente 1; igualación si las dos tienen la misma incógnita despejada; reducción si los coeficientes son opuestos o múltiplos; gráfico para ver y comprobar">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Sustitución", "una incógnita tiene coeficiente 1 o −1", "var(--pen)"], ["Igualación", "las dos ecuaciones tienen la y (o la x) despejada", "var(--leaf)"], ["Reducción", "coeficientes opuestos o fáciles de igualar", "var(--red)"], ["Gráfico", "para ver el punto de corte y comprobar", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "TR27etegq7g", titulo: "Resolver sistemas de ecuaciones: método de reducción", canal: "Daniel Carreón", vistas: 5773461, megusta: 0, busqueda: "sistemas de ecuaciones" },
  quiz: mezcla([
    { q: "¿Es (2, 3) solución de x + y = 5 y x − y = −1?", o: ["Sí", "No", "Solo de la primera"], a: 0, e: "2 + 3 = 5 y 2 − 3 = −1." },
    { q: "¿Cuántas soluciones tiene la ecuación 2x + y = 7?", o: ["Una", "Dos", "Infinitas"], a: 2, e: "Una ecuación con dos incógnitas tiene infinitas." },
    { q: "Resuelve: x + y = 10, x − y = 2.", o: ["(6, 4)", "(4, 6)", "(5, 5)"], a: 0, e: "Sumando: 2x = 12." },
    { q: "¿Qué método es más cómodo para y = 3x e y = x + 4?", o: ["Reducción", "Igualación", "Gráfico"], a: 1, e: "Las dos tienen y despejada." },
    { q: "Si al resolver queda 0 = 5, el sistema es…", o: ["compatible determinado", "compatible indeterminado", "incompatible"], a: 2, e: "Igualdad falsa: no hay solución." },
    { q: "Dos rectas paralelas corresponden a un sistema…", o: ["incompatible", "determinado", "indeterminado"], a: 0, e: "No se cortan." },
    { q: "Para eliminar la x en 2x + y = 5 y 3x − 2y = 4, multiplico…", o: ["la 1.ª por 3 y la 2.ª por −2", "las dos por 2", "la 1.ª por 2"], a: 0, e: "6x y −6x se anulan." },
    { q: "x + y = 3 y 2x + 2y = 6 es…", o: ["incompatible", "compatible indeterminado", "determinado"], a: 1, e: "La segunda es el doble de la primera." },
    { q: "Resuelve: y = 2x, x + y = 9.", o: ["(3, 6)", "(6, 3)", "(4, 5)"], a: 0, e: "x + 2x = 9." },
    { q: "En el método gráfico, la solución es…", o: ["el corte con el eje X", "el punto de corte de las rectas", "la pendiente"], a: 1, e: "El punto común a las dos." },
  ]),
  examen: mezcla([
    { q: "3 cafés y 2 zumos cuestan 7,5 €; 1 café y 1 zumo, 3 €. Un café cuesta…", o: ["1,50 €", "1 €", "2 €"], a: 0, e: "x + y = 3 → 3x + 2(3 − x) = 7,5 → x = 1,5." },
    { q: "Resuelve: 2x + 3y = 12, 4x − 3y = 6.", o: ["(3, 2)", "(2, 3)", "(3, 1)"], a: 0, e: "6x = 18." },
    { q: "La suma de dos números es 30 y su diferencia 8. El mayor es…", o: ["19", "22", "11"], a: 0, e: "2x = 38." },
  ]),
  feynman: ["Por qué una ecuación con dos incógnitas tiene infinitas soluciones", "Cómo funciona el método de reducción", "Qué significa geométricamente la solución de un sistema", "Cómo distinguir al resolver un sistema incompatible de uno indeterminado"],
  mapa: mapa("SISTEMAS", "var(--eso)", [
    ["Ecuación lineal", "infinitas soluciones · recta", "var(--ink)"],
    ["Métodos", "sustitución · igualación · reducción", "var(--pen)"],
    ["Gráfico", "punto de corte", "var(--leaf)"],
    ["Tipos", "determinado · indeterminado · incompatible", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Solución de un sistema", "Pareja (x, y) que cumple todas las ecuaciones a la vez."],
    ["Sustitución", "Despejar en una ecuación y sustituir en la otra."],
    ["Igualación", "Despejar la misma incógnita en las dos e igualar."],
    ["Reducción", "Conseguir coeficientes opuestos y sumar las ecuaciones."],
    ["Compatible determinado", "Una solución: rectas que se cortan."],
    ["Compatible indeterminado", "Infinitas soluciones: rectas coincidentes."],
    ["Incompatible", "Sin solución: rectas paralelas."],
    ["Último paso de un problema", "Comprobar la solución en el enunciado."],
  ],
  familias: ["Comparad dos tarifas de móvil o de luz y averiguad con un sistema cuándo cuesta lo mismo.", "Proponed el problema de gallinas y conejos con otros números.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones lineales con dos incógnitas, sistemas, métodos de resolución, interpretación gráfica y problemas (RD 217/2022, Matemáticas 3º).",
    ideas: ["Problemas clásicos (gallinas y conejos, monedas) resueltos por tanteo y luego con sistema.", "GeoGebra para ver los tres tipos de sistemas.", "Comparar tarifas reales y decidir la más barata según el consumo."],
  },
  fuentes: [RD, { t: "GeoGebra: sistemas de ecuaciones lineales", url: "https://www.geogebra.org/" }],
  revisado: "2026-11-12",
  ejemplos: [
    { enunciado: "Resuelve por sustitución: 2x − y = 1; 3x + 2y = 12.",
      pasos: ["De la primera: y = 2x − 1.", "Sustituimos: 3x + 2(2x − 1) = 12 → 7x − 2 = 12 → x = 2.", "y = 2 · 2 − 1 = 3.", "Comprobación: 4 − 3 = 1 ✓; 6 + 6 = 12 ✓."],
      resultado: "x = 2, y = 3." },
    { enunciado: "Resuelve por reducción: 3x + 4y = 18; 2x − 3y = −5.",
      pasos: ["Multiplicamos la 1.ª por 2 y la 2.ª por −3: 6x + 8y = 36; −6x + 9y = 15.", "Sumamos: 17y = 51 → y = 3.", "3x + 12 = 18 → x = 2."],
      resultado: "x = 2, y = 3." },
    { enunciado: "En un cine, la entrada de adulto cuesta 8 € y la de niño 5 €. Se venden 120 entradas y se recaudan 795 €. ¿Cuántas de cada tipo?",
      pasos: ["x = adultos, y = niños.", "x + y = 120; 8x + 5y = 795.", "y = 120 − x → 8x + 600 − 5x = 795 → 3x = 195 → x = 65.", "y = 55. Comprobación: 520 + 275 = 795 ✓."],
      resultado: "65 entradas de adulto y 55 de niño." },
  ],
  errores: [
    "Sustituir la expresión despejada en la misma ecuación de la que se despejó (queda 0 = 0 siempre).",
    "En reducción, multiplicar solo un miembro de la ecuación.",
    "Restar las ecuaciones y equivocarse con los signos; es más seguro sumar con coeficientes opuestos.",
    "Hallar x y olvidar calcular y.",
    "No comprobar la solución en las dos ecuaciones.",
    "En los problemas, plantear dos ecuaciones que dicen lo mismo.",
  ],
  ejercicios: [
    { q: "Comprueba si (−1, 4) es solución de 3x + y = 1 y x − 2y = −9.", sol: "−3 + 4 = 1 ✓; −1 − 8 = −9 ✓. Sí lo es." },
    { q: "Resuelve por sustitución: x + 3y = 7; 2x − y = 0.", sol: "y = 2x → x + 6x = 7 → x = 1, y = 2." },
    { q: "Resuelve por igualación: y = 3x − 4; y = x + 2.", sol: "3x − 4 = x + 2 → x = 3, y = 5." },
    { q: "Resuelve por reducción: 5x + 2y = 1; 3x − 2y = 7.", sol: "Sumando: 8x = 8 → x = 1. 5 + 2y = 1 → y = −2." },
    { q: "Resuelve: x/2 + y/3 = 4; x − y = 3.", sol: "Por 6: 3x + 2y = 24. x = y + 3 → 3y + 9 + 2y = 24 → y = 3, x = 6." },
    { q: "Clasifica: 2x − y = 3; 4x − 2y = 5.", sol: "Multiplicando la 1.ª por 2: 4x − 2y = 6, que contradice 4x − 2y = 5. Incompatible (rectas paralelas)." },
    { q: "Resuelve gráficamente: y = x + 1; y = −x + 5.", sol: "Las rectas se cortan en (2, 3)." },
    { q: "La suma de dos números es 45 y uno es el doble del otro. ¿Cuáles son?", sol: "x + y = 45, x = 2y → 3y = 45 → y = 15, x = 30." },
    { q: "En una hucha hay 30 monedas de 1 € y 2 €, en total 42 €. ¿Cuántas hay de cada tipo?", sol: "x + y = 30; x + 2y = 42 → y = 12 de 2 € y x = 18 de 1 €." },
    { q: "La tarifa A cobra 10 € fijos y 0,05 €/min; la B, 0,10 €/min sin cuota. ¿Con cuántos minutos cuestan lo mismo?", sol: "10 + 0,05x = 0,10x → 0,05x = 10 → x = 200 minutos (20 €). Con más minutos interesa la A." },
  ],
};
