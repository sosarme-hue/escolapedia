// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Ejes con origen (ox, oy) y escala k.
const ejes = (ox = 80, oy = 140, k = 20) => `<path d="M10 ${oy} H 250 M${ox} 10 V 172" stroke="var(--line)" stroke-width="2"/>`;
const recta = (m, n, c, ox = 80, oy = 140, k = 20) => { const y = (x) => oy - (m * x + n) * k; return `<path d="M${ox - 3.5 * k} ${y(-3.5)} L ${ox + 8.5 * k} ${y(8.5)}" stroke="${c}" stroke-width="3"/>`; };

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Sistemas de ecuaciones",
  minutos: 40,
  objetivos: ["Resolver sistemas lineales por sustitución, igualación y reducción", "Interpretar la solución de un sistema como el corte de dos rectas", "Resolver sistemas no lineales sencillos y plantear problemas"],
  claves: ["sistema", "sustitución", "igualación", "reducción", "compatible", "incompatible"],
  pregunta: {
    texto: "En una granja hay gallinas y conejos: en total 20 cabezas y 56 patas. ¿Cuántos animales hay de cada tipo?",
    respuesta: "Con dos incógnitas necesitas dos ecuaciones: <mark>x + y = 20</mark> (cabezas) y <mark>2x + 4y = 56</mark> (patas). Resolviendo el sistema: <b>12 gallinas y 8 conejos</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es un sistema</h3><p>Es un grupo de ecuaciones que se cumplen <b>a la vez</b>. La solución es el par (x, y) que satisface todas. Cada ecuación lineal es una recta, y la solución es <mark>el punto donde se cortan</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos rectas que se cortan en el punto (2, 3), la solución del sistema">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${ejes()}${recta(1, 1, "var(--pen)")}${recta(-0.5, 4, "var(--red)")}
        <circle cx="${80 + 2 * 20}" cy="${140 - 3 * 20}" r="7" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="13" font-weight="700"><text x="${80 + 2 * 20 + 10}" y="${140 - 3 * 20 + 24}" fill="var(--ink)">(2, 3)</text><text x="200" y="30" fill="var(--pen)">y = x + 1</text><text x="150" y="165" fill="var(--red)">x + 2y = 8</text></g></svg>`,
    },
    {
      html: `<h3>Sustitución</h3><p><b>Despeja</b> una incógnita en una ecuación y <mark>sustitúyela</mark> en la otra. Es el método más cómodo cuando alguna incógnita tiene coeficiente 1.</p>
      <div class="formula"><span>x + y = 20 → x = 20 − y</span></div><div class="formula"><span>2(20 − y) + 4y = 56 → 2y = 16 → y = 8, x = 12</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sustitución: se despeja x en la primera ecuación y se mete en la segunda">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="40" font-size="17" fill="var(--ink)"><tspan fill="var(--pen)">x</tspan> + y = 20</text><text x="130" y="68" font-size="15" fill="var(--pen)">x = 20 − y</text>
        <path d="M130 78 C 130 100 90 100 90 118" fill="none" stroke="var(--pen)" stroke-width="2.5" marker-end="url(#fs)"/><defs><marker id="fs" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker></defs>
        <text x="130" y="140" font-size="17" fill="var(--ink)">2·<tspan fill="var(--pen)">(20 − y)</tspan> + 4y = 56</text><text x="130" y="168" font-size="14" fill="var(--leaf)">una ecuación con una incógnita</text></g></svg>`,
    },
    {
      html: `<h3>Igualación y reducción</h3><p><b>Igualación</b>: despeja la misma incógnita en las dos y <mark>iguala</mark> los resultados. <b>Reducción</b>: multiplica las ecuaciones para que una incógnita tenga coeficientes opuestos y <mark>súmalas</mark> para que desaparezca.</p>
      <div class="formula"><span>(−2)·(x + y = 20) → −2x − 2y = −40</span><span class="op">+</span><span>2x + 4y = 56</span><span class="op">→</span><span>2y = 16</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reducción: al sumar las dos ecuaciones, los términos en x se anulan">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" font-size="17" text-anchor="end"><text x="200" y="50" fill="var(--ink)"><tspan fill="var(--red)">−2x</tspan> − 2y = −40</text><text x="200" y="84" fill="var(--ink)"><tspan fill="var(--red)">2x</tspan> + 4y = 56</text>
        <text x="40" y="84" text-anchor="middle" fill="var(--muted)">+</text><path d="M50 98 H 210" stroke="var(--ink)" stroke-width="2.5"/><text x="200" y="128" fill="var(--leaf)">2y = 16</text></g>
        <path d="M66 44 L 106 54 M66 78 L 96 88" stroke="var(--red)" stroke-width="2.5"/><text x="130" y="164" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>los términos opuestos se anulan</text></svg>`,
    },
    {
      html: `<h3>Tipos de sistemas</h3><p>Según cómo sean las rectas:</p><ul><li><b>Compatible determinado</b>: se cortan en un punto, <mark>una solución</mark>.</li><li><b>Compatible indeterminado</b>: son la misma recta, infinitas soluciones.</li><li><b>Incompatible</b>: son paralelas, ninguna solución.</li></ul>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres casos: rectas que se cortan, rectas coincidentes y rectas paralelas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 120 L 76 40 M14 50 L 76 120" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M98 120 L 160 40" stroke="var(--pen)" stroke-width="6"/><path d="M98 120 L 160 40" stroke="var(--hl)" stroke-width="2" stroke-dasharray="6 6"/>
        <path d="M182 120 L 228 40 M200 120 L 246 40" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="45" y="146" fill="var(--leaf)">se cortan</text><text x="45" y="162" fill="var(--leaf)">1 solución</text><text x="129" y="146" fill="var(--pen)">coinciden</text><text x="129" y="162" fill="var(--pen)">infinitas</text><text x="214" y="146" fill="var(--red)">paralelas</text><text x="214" y="162" fill="var(--red)">ninguna</text></g></svg>`,
    },
    {
      html: `<h3>Sistemas no lineales</h3><p>Si alguna ecuación tiene x², xy o √, el sistema es <b>no lineal</b>. Casi siempre se resuelve por <mark>sustitución</mark>, y puede tener varias soluciones porque una recta puede cortar una curva en dos puntos.</p>
      <div class="formula"><span>x + y = 5 · xy = 6 → x(5 − x) = 6 → x = 2 o x = 3</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una recta corta a una curva en dos puntos: un sistema no lineal con dos soluciones (2, 3) y (3, 2)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 160 H 250 M30 10 V 172" stroke="var(--line)" stroke-width="2"/>
        <path d="${[...Array(40)].map((_, i) => { const x = 1.1 + i * 0.13; return `${i ? "L" : "M"}${(30 + x * 30).toFixed(1)} ${(160 - (6 / x) * 26).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M${30 + 0 * 30} ${160 - 5 * 26} L ${30 + 6 * 30} ${160 + 1 * 26}" stroke="var(--red)" stroke-width="3"/>
        <circle cx="${30 + 2 * 30}" cy="${160 - 3 * 26}" r="6" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/><circle cx="${30 + 3 * 30}" cy="${160 - 2 * 26}" r="6" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700"><text x="${30 + 2 * 30 - 46}" y="${160 - 3 * 26 - 6}" fill="var(--ink)">(2, 3)</text><text x="${30 + 3 * 30 + 8}" y="${160 - 2 * 26 - 8}" fill="var(--ink)">(3, 2)</text><text x="200" y="128" fill="var(--pen)">xy = 6</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Tres métodos, la misma solución",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Comparación de los métodos de sustitución, igualación y reducción con cuándo conviene cada uno">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["SUSTITUCIÓN", "despeja y mete", "si una incógnita lleva coeficiente 1", "var(--pen)"], ["IGUALACIÓN", "despeja la misma letra", "si es fácil despejar la misma incógnita en las dos", "var(--leaf)"], ["REDUCCIÓN", "multiplica y suma", "si los coeficientes son múltiplos", "var(--red)"]].map(([n, d, w, c], i) => `<rect x="${20 + i * 206}" y="24" width="190" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
        <text x="${115 + i * 206}" y="66" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text><text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${d}</text>
        <foreignObject x="${32 + i * 206}" y="120" width="166" height="70"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:14px Atkinson Hyperlegible,sans-serif;text-align:center;color:var(--muted)">Conviene ${w}.</p></foreignObject>`).join("")}
    </svg>`,
  },
  video: { id: "L0QuX9RpEoM", titulo: "Resolver sistemas de ecuaciones: método de sustitución", canal: "Daniel Carreón", vistas: 6342038, megusta: 0, busqueda: "sistemas de ecuaciones métodos" },
  quiz: [
    { q: "La solución de x + y = 7, x − y = 1 es…", o: ["(4, 3)", "(3, 4)", "(5, 2)"], a: 0, e: "Sumando: 2x = 8 → x = 4 y y = 3." },
    { q: "Si dos rectas son paralelas, el sistema es…", o: ["Compatible determinado", "Incompatible", "Compatible indeterminado"], a: 1, e: "Las paralelas no se cortan: no hay solución." },
    { q: "¿Qué método usa «multiplica y suma para eliminar una incógnita»?", o: ["Sustitución", "Igualación", "Reducción"], a: 2, e: "En reducción se buscan coeficientes opuestos y se suman las ecuaciones." },
    { q: "El sistema 2x + y = 3, 4x + 2y = 6 tiene…", o: ["Una solución", "Infinitas soluciones", "Ninguna"], a: 1, e: "La segunda es el doble de la primera: es la misma recta." },
    { q: "En un aparcamiento hay 15 vehículos entre coches y motos con 50 ruedas. ¿Cuántos coches hay?", o: ["10", "5", "8"], a: 0, e: "x + y = 15, 4x + 2y = 50 → 2x = 20 → 10 coches y 5 motos." },
  ],
  examen: [
    { q: "Resuelve y = 2x, x + y = 9.", o: ["(3, 6)", "(6, 3)", "(4, 5)"], a: 0, e: "x + 2x = 9 → x = 3 y y = 6." },
    { q: "¿Cuántas soluciones puede tener el sistema x + y = 5, x² + y² = 13?", o: ["Ninguna", "Una", "Dos"], a: 2, e: "Una recta corta a una circunferencia en dos puntos: (2, 3) y (3, 2)." },
    { q: "x + y = 4 y x + y = 6 forman un sistema…", o: ["Incompatible", "Compatible determinado", "Compatible indeterminado"], a: 0, e: "La misma suma no puede valer 4 y 6: rectas paralelas." },
  ],
  feynman: ["Qué significa la solución de un sistema en una gráfica", "Cómo funcionan sustitución, igualación y reducción", "Cuándo un sistema no tiene solución o tiene infinitas", "Cómo se plantea el problema de gallinas y conejos"],
  mapa: mapa("SISTEMAS", "var(--bac)", [
    ["Solución", "el punto de corte", "var(--ink)"],
    ["Métodos", "sustitución · igualación · reducción", "var(--pen)"],
    ["Tipos", "determinado · indeterminado · incompatible", "var(--red)"],
    ["No lineales", "sustitución · varias soluciones", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["¿Qué es la solución de un sistema de dos ecuaciones lineales?", "El punto donde se cortan las dos rectas."],
    ["Método de reducción", "Multiplicar para que una incógnita tenga coeficientes opuestos y sumar."],
    ["Sistema incompatible", "No tiene solución: rectas paralelas."],
    ["Sistema compatible indeterminado", "Infinitas soluciones: rectas coincidentes."],
    ["¿Qué método suele usarse en los no lineales?", "Sustitución."],
  ],
  familias: ["Planteadle acertijos de edades o de precios de la compra con dos incógnitas.", "Pedidle que resuelva el mismo sistema por los tres métodos y compare.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido algebraico: sistemas lineales y no lineales, interpretación gráfica y modelización (RD 217/2022, Matemáticas B 4º).",
    ideas: ["GeoGebra: escribir las dos ecuaciones y ver el punto de corte.", "Problemas de tarifas de móvil: ¿a partir de cuántos minutos conviene cada una?", "Escape room con sistemas cuya solución abre un candado."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sistema de ecuaciones lineales, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_de_ecuaciones_lineales" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Resolver sistemas por el método gráfico y elegir el método más cómodo", "Plantear problemas con sistemas y resolver sistemas de tres ecuaciones"],
  tras: {
    "Qué es un sistema": [
      { html: `<h3>El método gráfico</h3><p>Cada ecuación lineal con dos incógnitas es una <b>recta</b> en el plano. Para resolver un sistema gráficamente se despeja y en las dos ecuaciones, se hace una tabla de valores de cada una y se dibujan las dos rectas en los mismos ejes. La solución es el <mark>punto de corte</mark>: sus coordenadas (x, y) cumplen las dos ecuaciones a la vez. El método gráfico es muy visual y permite ver de un golpe si el sistema tiene solución, pero es poco preciso cuando la solución no es entera, así que conviene comprobarla con un método algebraico.</p>`, video: { id: "lJ2yfxzmAkc", titulo: "Sistemas de ecuaciones: método gráfico, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 5114797 } },
    ],
    "Igualación y reducción": [
      { html: `<h3>¿Qué método elijo?</h3><p>Los tres métodos algebraicos dan la misma solución, pero no siempre con el mismo esfuerzo. <b>Sustitución</b>: cuando una incógnita ya está despejada o tiene coeficiente 1 o −1. <b>Igualación</b>: cuando la misma incógnita es fácil de despejar en las dos ecuaciones. <b>Reducción</b>: cuando los coeficientes de una incógnita son iguales u opuestos, o es fácil conseguirlo multiplicando. Si el sistema tiene <b>fracciones o paréntesis</b>, lo primero es <mark>quitar denominadores y paréntesis</mark> hasta dejar cada ecuación en la forma ax + by = c.</p>` },
    ],
    "Sistemas no lineales": [
      { html: `<h3>Plantear problemas con sistemas</h3><p>Muchos problemas tienen <b>dos datos desconocidos</b> y dos informaciones sobre ellos. Los pasos son: 1) llamar x e y a las incógnitas, indicando qué representa cada una; 2) escribir una ecuación por cada información; 3) resolver el sistema; 4) <b>comprobar</b> la solución en el enunciado, no solo en las ecuaciones. Problemas típicos: de edades, de mezclas (café de dos precios), de monedas y billetes, de cifras de un número, de móviles que se encuentran o de entradas de cine de dos precios. Escribir los datos en una <mark>tabla</mark> ayuda a plantear las ecuaciones.</p>` },
      { html: `<h3>Sistemas de tres ecuaciones</h3><p>Con tres incógnitas hacen falta tres ecuaciones. El método de <b>Gauss</b> generaliza la reducción: se usa una ecuación para eliminar la x de las otras dos, con lo que queda un sistema de dos ecuaciones y dos incógnitas; se elimina después la y de la última, y se resuelve <mark>de abajo arriba</mark>. El resultado es un sistema «escalonado», con una incógnita en la última ecuación, dos en la penúltima y tres en la primera. Este método es la base de cómo los ordenadores resuelven sistemas con miles de ecuaciones.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "En un cine, 3 entradas de adulto y 2 infantiles cuestan 38 €, y 2 de adulto y 4 infantiles, 36 €. ¿Cuánto cuesta cada una?", pasos: ["Adulto x, infantil y: 3x + 2y = 38; 2x + 4y = 36.", "Reducción: multiplica la primera por 2: 6x + 4y = 76. Resta la segunda: 4x = 40, x = 10.", "Sustituye: 30 + 2y = 38, y = 4."], resultado: "Adulto 10 €, infantil 4 €." },
    { enunciado: "Resuelve el sistema x + y + z = 6; 2x − y + z = 3; x + 2y − z = 2.", pasos: ["Eliminar x: E2 − 2E1 da −3y − z = −9; E3 − E1 da y − 2z = −4.", "De la segunda, y = 2z − 4. Sustituye: −3(2z − 4) − z = −9, −7z = −21, z = 3.", "y = 2; x = 6 − 2 − 3 = 1."], resultado: "x = 1, y = 2, z = 3." },
    { enunciado: "Resuelve x/2 + y/3 = 4; x − y = 3.", pasos: ["Quita denominadores en la primera (mcm 6): 3x + 2y = 24.", "De la segunda, x = y + 3. Sustituye: 3y + 9 + 2y = 24, y = 3.", "x = 6."], resultado: "x = 6, y = 3." },
  ],
  errores: [
    "Olvidar multiplicar todos los términos (también el independiente) al usar reducción.",
    "Dar solo el valor de una incógnita y olvidar calcular la otra.",
    "No quitar denominadores antes de aplicar un método.",
    "Comprobar la solución solo en una ecuación.",
    "En los no lineales, no emparejar bien cada x con su y.",
  ],
  ejercicios: [
    { q: "Resuelve por sustitución: y = 2x − 1; 3x + y = 9.", sol: "3x + 2x − 1 = 9, x = 2, y = 3." },
    { q: "Resuelve por igualación: x = 5 − y; x = 2y − 1.", sol: "5 − y = 2y − 1, y = 2, x = 3." },
    { q: "Resuelve por reducción: 2x + 3y = 12; 5x − 3y = 9.", sol: "7x = 21, x = 3, y = 2." },
    { q: "Clasifica el sistema x + 2y = 4; 2x + 4y = 8.", sol: "Compatible indeterminado: la segunda es el doble de la primera (infinitas soluciones)." },
    { q: "Clasifica el sistema x − y = 1; 2x − 2y = 5.", sol: "Incompatible: rectas paralelas, no tiene solución." },
    { q: "Resuelve gráficamente y = x + 1; y = −x + 5.", sol: "Las rectas se cortan en (2, 3)." },
    { q: "Resuelve x + y = 7; x · y = 12.", sol: "x = 3, y = 4 o x = 4, y = 3." },
    { q: "Ana tiene el triple de la edad de su hijo; dentro de 12 años tendrá el doble. ¿Qué edades tienen?", sol: "x = 3y; x + 12 = 2(y + 12): y = 12, x = 36." },
    { q: "Se mezcla café de 8 €/kg con café de 12 €/kg para obtener 20 kg a 9 €/kg. ¿Cuántos kg de cada?", sol: "x + y = 20; 8x + 12y = 180: x = 15 kg, y = 5 kg." },
    { q: "Resuelve x + y + z = 3; y + z = 1; z = −1.", sol: "z = −1, y = 2, x = 2." },
  ],
  quiz: [
    { q: "En el método gráfico, la solución es…", o: ["el punto de corte", "la pendiente", "el origen"], a: 0, e: "Cumple las dos ecuaciones." },
    { q: "Dos rectas paralelas dan un sistema…", o: ["compatible determinado", "incompatible", "indeterminado"], a: 1, e: "No se cortan." },
    { q: "Si una incógnita tiene coeficiente 1, conviene…", o: ["sustitución", "Gauss", "el método gráfico"], a: 0, e: "Se despeja fácil." },
    { q: "Para un sistema de 3 incógnitas hacen falta…", o: ["2 ecuaciones", "3 ecuaciones", "1 ecuación"], a: 1, e: "Tantas como incógnitas." },
    { q: "El método de Gauss resuelve el sistema escalonado…", o: ["de abajo arriba", "de arriba abajo", "al azar"], a: 0, e: "Primero la última ecuación." },
  ],
  tarjetas: [
    ["Método gráfico", "La solución es el punto de corte de las dos rectas."],
    ["Método de Gauss", "Elimina incógnitas hasta un sistema escalonado y se resuelve de abajo arriba."],
    ["Comprobar", "La solución debe cumplir todas las ecuaciones y tener sentido en el problema."],
  ],
});
