// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Probabilidad",
  minutos: 45,
  objetivos: ["Aplicar la regla de Laplace y las propiedades de la probabilidad", "Calcular probabilidades de experimentos compuestos con diagramas de árbol y tablas de contingencia", "Distinguir sucesos dependientes e independientes y usar la probabilidad condicionada"],
  claves: ["suceso", "regla de Laplace", "suceso contrario", "diagrama de árbol", "probabilidad condicionada", "independencia"],
  pregunta: {
    texto: "En una clase de 23 alumnos, ¿qué es más probable: que dos cumplan años el mismo día o que no?",
    respuesta: "¡Que sí coincidan! La probabilidad es de un <mark>50,7 %</mark>. Se calcula con el <b>suceso contrario</b>: la probabilidad de que nadie coincida es 365/365 · 364/365 · … · 343/365 ≈ 0,493, así que la de coincidir es 1 − 0,493.",
  },
  bloques: [
    {
      html: `<h3>Experimentos aleatorios y regla de Laplace</h3><p>Un experimento es <b>aleatorio</b> si no se puede predecir el resultado. El conjunto de resultados es el <b>espacio muestral</b> E. Si todos los resultados son <mark>igual de probables</mark>:</p><div class="formula"><span>P(A) = casos favorables / casos posibles</span></div><p>Sacar un número par en un dado: P = 3/6 = 0,5.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seis caras de un dado; las caras pares 2, 4 y 6 están resaltadas: probabilidad 3 de 6">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[1, 2, 3, 4, 5, 6].map((n, i) => { const x = 22 + (i % 3) * 76, y = 22 + Math.floor(i / 3) * 70; const par = n % 2 === 0; const dots = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] }[n];
          return `<rect x="${x}" y="${y}" width="56" height="56" rx="10" fill="${par ? "var(--hl)" : "var(--card)"}" stroke="var(--ink)" stroke-width="2"/>${dots.map(([a, b]) => `<circle cx="${x + 28 + a * 14}" cy="${y + 28 + b * 14}" r="4.5" fill="var(--ink)"/>`).join("")}`; }).join("")}
        <text x="130" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>P(par) = 3/6 = 1/2</text></svg>`,
    },
    {
      html: `<h3>Propiedades básicas</h3><p>La probabilidad está <b>entre 0 y 1</b> (0 = imposible, 1 = seguro). El <b>suceso contrario</b> Ā ocurre cuando no ocurre A: <mark>P(Ā) = 1 − P(A)</mark>. Para la unión de dos sucesos:</p><div class="formula"><span>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</span></div><p>Se resta la intersección para no contarla dos veces.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de Venn con dos sucesos A y B que se solapan; la zona común es la intersección">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="14" width="232" height="140" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <circle cx="100" cy="84" r="50" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/><circle cx="160" cy="84" r="50" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="14" font-weight="700"><text x="74" y="88" fill="var(--pen)">A</text><text x="178" y="88" fill="var(--red)">B</text><text x="130" y="88" text-anchor="middle" font-size="12" fill="var(--ink)">A∩B</text><text x="24" y="32" font-size="12" fill="var(--muted)">E</text>
        <text x="130" y="172" text-anchor="middle" font-size="12" fill="var(--ink)">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text></g></svg>`,
    },
    {
      html: `<h3>Experimentos compuestos: el diagrama de árbol</h3><p>Cuando el experimento tiene varias etapas, se dibuja un árbol con la probabilidad en cada rama. La probabilidad de un camino es el <mark>producto</mark> de sus ramas, y si varios caminos dan el mismo resultado, se <mark>suman</mark>.</p><p>Sacar dos bolas rojas sin devolución de una urna con 3 rojas y 2 azules: 3/5 · 2/4 = <b>3/10</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de dos extracciones sin devolución de una urna con 3 rojas y 2 azules; el camino rojo-rojo tiene probabilidad 3/5 por 2/4">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="20" cy="90" r="5" fill="var(--ink)"/>
        <path d="M20 90 L 100 46 M20 90 L 100 134" stroke="var(--muted)" stroke-width="2"/><path d="M20 90 L 100 46" stroke="var(--red)" stroke-width="3.5"/>
        <circle cx="108" cy="46" r="9" fill="var(--red)"/><circle cx="108" cy="134" r="9" fill="var(--pen)"/>
        ${[[46, -1, "2/4", "var(--red)"], [46, 1, "2/4", "var(--pen)"], [134, -1, "3/4", "var(--red)"], [134, 1, "1/4", "var(--pen)"]].map(([y, s, p, c], i) => `<path d="M117 ${y} L 196 ${y + s * 20}" stroke="${i === 0 ? "var(--red)" : "var(--muted)"}" stroke-width="${i === 0 ? 3.5 : 2}"/><circle cx="204" cy="${y + s * 20}" r="8" fill="${c}"/><text x="150" y="${y + s * 20 + (s < 0 ? -2 : 14)}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${p}</text>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="40" y="58" fill="var(--red)">3/5</text><text x="40" y="132" fill="var(--pen)">2/5</text><text x="216" y="30" fill="var(--red)">3/10</text></g></svg>`,
    },
    {
      html: `<h3>Probabilidad condicionada</h3><p>P(A | B) es la probabilidad de A <mark>sabiendo que ha ocurrido B</mark>. Restringe el espacio muestral a B:</p><div class="formula"><span>P(A | B) = P(A ∩ B) / P(B)</span></div><p>Las <b>tablas de contingencia</b> ayudan mucho: si de 30 alumnos, 12 son chicas y 8 de ellas llevan gafas, P(gafas | chica) = 8/12.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de contingencia de 30 alumnos por sexo y gafas; la fila de chicas está resaltada: 8 de 12 llevan gafas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="76" width="228" height="34" fill="var(--hl)"/>
        <g ${F} font-size="13" text-anchor="middle"><g font-weight="700" fill="var(--muted)"><text x="120" y="56">gafas</text><text x="180" y="56">sin gafas</text><text x="228" y="56">total</text></g>
          <text x="52" y="98" font-weight="700" fill="var(--ink)">chicas</text><text x="120" y="98" font-weight="700" fill="var(--red)">8</text><text x="180" y="98" fill="var(--ink)">4</text><text x="228" y="98" font-weight="700" fill="var(--red)">12</text>
          <text x="52" y="134" font-weight="700" fill="var(--ink)">chicos</text><text x="120" y="134" fill="var(--ink)">5</text><text x="180" y="134" fill="var(--ink)">13</text><text x="228" y="134" fill="var(--ink)">18</text>
          <text x="130" y="170" font-weight="700" fill="var(--ink)">P(gafas | chica) = 8/12 = 2/3</text></g>
        <path d="M16 66 H 244 M16 146 H 244" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>Sucesos independientes</h3><p>A y B son <b>independientes</b> si que ocurra uno <mark>no cambia</mark> la probabilidad del otro: P(A | B) = P(A). Entonces:</p><div class="formula"><span>P(A ∩ B) = P(A) · P(B)</span></div><p>Lanzar dos monedas es independiente; sacar cartas sin devolverlas, no. Error típico: tras 5 caras seguidas, la probabilidad de cara sigue siendo 1/2 (la moneda no tiene memoria).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco caras seguidas y la sexta tirada sigue teniendo probabilidad un medio: la moneda no tiene memoria">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[0, 1, 2, 3, 4].map((i) => `<circle cx="${30 + i * 40}" cy="70" r="16" fill="var(--hl)" stroke="var(--hl-ink)" stroke-width="2"/><text x="${30 + i * 40}" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="var(--hl-ink)" ${F}>C</text>`).join("")}
        <circle cx="230" cy="70" r="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/><text x="230" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>?</text>
        <text x="130" y="124" text-anchor="middle" font-size="16" font-weight="700" fill="var(--red)" ${F}>P(cara) = 1/2</text><text x="130" y="150" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>la moneda no tiene memoria</text></svg>`,
    },
  ],
  figura: {
    titulo: "Caja de herramientas de la probabilidad",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen de fórmulas: Laplace, contrario, unión, intersección de independientes y condicionada">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Laplace", "P(A) = favorables / posibles", "var(--pen)"], ["Contrario", "P(Ā) = 1 − P(A)", "var(--leaf)"], ["Unión", "P(A∪B) = P(A) + P(B) − P(A∩B)", "var(--inf)"], ["Independientes", "P(A∩B) = P(A) · P(B)", "var(--bac)"], ["Condicionada", "P(A|B) = P(A∩B) / P(B)", "var(--red)"]].map(([n, f, c], i) => `<rect x="20" y="${14 + i * 42}" width="600" height="36" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${38 + i * 42}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="220" y="${38 + i * 42}" font-size="16" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "AjDK3NQZdPc", titulo: "Diagrama de árbol de probabilidad, súper fácil", canal: "Daniel Carreón", vistas: 1769997, megusta: 0, busqueda: "probabilidad diagrama de árbol" },
  quiz: [
    { q: "En una baraja española de 40 cartas, P(sacar un oro) =", o: ["1/4", "1/10", "4/40"], a: 0, e: "Hay 10 oros: 10/40 = 1/4." },
    { q: "Si P(llueva) = 0,3, P(no llueva) =", o: ["0,3", "0,7", "1,3"], a: 1, e: "Suceso contrario: 1 − 0,3." },
    { q: "P(dos seises al lanzar dos dados) =", o: ["1/6", "1/12", "1/36"], a: 2, e: "Independientes: 1/6 · 1/6." },
    { q: "Una urna tiene 4 bolas blancas y 6 negras. Sacas dos sin devolver. P(dos blancas) =", o: ["4/10 · 3/9 = 2/15", "4/10 · 4/10", "4/10 + 3/9"], a: 0, e: "Sin devolución cambia la segunda: 4/10 · 3/9 = 12/90 = 2/15." },
    { q: "Has sacado cruz 4 veces seguidas. La probabilidad de cara en la siguiente es…", o: ["Mayor de 1/2", "1/2", "Menor de 1/2"], a: 1, e: "Las tiradas son independientes." },
  ],
  examen: [
    { q: "P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2. P(A ∪ B) =", o: ["0,9", "0,7", "0,2"], a: 1, e: "0,5 + 0,4 − 0,2 = 0,7." },
    { q: "Con P(A ∩ B) = 0,12 y P(B) = 0,4, P(A | B) =", o: ["0,3", "0,048", "0,52"], a: 0, e: "0,12 / 0,4 = 0,3." },
    { q: "¿Son independientes A y B si P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2?", o: ["Sí", "No", "No se puede saber"], a: 0, e: "0,5 · 0,4 = 0,2 = P(A ∩ B)." },
  ],
  feynman: ["Cuándo se puede usar la regla de Laplace", "Por qué se resta la intersección en la probabilidad de la unión", "Cómo se usa un diagrama de árbol en un experimento sin devolución", "Qué significa que dos sucesos sean independientes"],
  mapa: mapa("PROBABILIDAD", "var(--bac)", [
    ["Laplace", "favorables / posibles", "var(--pen)"],
    ["Propiedades", "contrario · unión", "var(--leaf)"],
    ["Compuestos", "árbol: × por ramas, + caminos", "var(--inf)"],
    ["Condicionada", "P(A|B) · independencia", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles (si son equiprobables)."],
    ["Probabilidad del suceso contrario", "P(Ā) = 1 − P(A)"],
    ["En un diagrama de árbol…", "se multiplican las probabilidades de cada rama del camino y se suman los caminos."],
    ["Probabilidad condicionada", "P(A | B) = P(A ∩ B) / P(B)"],
    ["Sucesos independientes", "P(A ∩ B) = P(A) · P(B)"],
  ],
  familias: ["Haced la prueba de los cumpleaños con familiares y amigos (en grupos de 23 o más).", "Calculad juntos la probabilidad de acertar una quiniela o un sorteo y hablad de por qué el juego no es buena inversión.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: probabilidad de Laplace, experimentos compuestos, diagramas de árbol, tablas de contingencia y probabilidad condicionada (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Simular 1.000 lanzamientos con hoja de cálculo y comparar frecuencia y probabilidad.", "Tabla de contingencia con datos reales de la clase.", "Debate sobre la falacia del jugador y la publicidad de apuestas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Paradoja del cumpleaños, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Paradoja_del_cumplea%C3%B1os" },
  ],
  revisado: "2026-11-12",
};
