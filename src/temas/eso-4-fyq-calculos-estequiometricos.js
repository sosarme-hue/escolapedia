// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Cálculos estequiométricos",
  minutos: 45,
  objetivos: ["Usar el mol y la masa molar para contar partículas", "Calcular concentraciones de disoluciones", "Resolver problemas de masa y volumen a partir de una ecuación ajustada"],
  claves: ["mol", "número de Avogadro", "masa molar", "concentración", "molaridad", "proporción estequiométrica"],
  pregunta: {
    texto: "Una cucharada de agua (18 g) tiene unos 600 000 trillones de moléculas. ¿Cómo cuentan los químicos algo tan imposible de contar?",
    respuesta: "Con una «docena gigante»: el <mark>mol</mark>. Un mol son 6,022 · 10²³ partículas, y se ha elegido para que <b>un mol de agua pese justo su masa molecular en gramos</b>: 18 g. Así, pesar en la balanza equivale a contar moléculas.",
  },
  bloques: [
    {
      html: `<h3>El mol</h3><p>El <b>mol</b> es la unidad de <b>cantidad de sustancia</b> del SI. Un mol contiene siempre el mismo número de partículas, el <mark>número de Avogadro: Nₐ = 6,022 · 10²³</mark>. Igual que una docena son 12 huevos, un mol de átomos de hierro son 6,022 · 10²³ átomos de hierro.</p>
      <div class="formula"><span>N.º de partículas = n · Nₐ</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una docena son 12 unidades y un mol son 6,022 por 10 elevado a 23 unidades">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 12 }, (_, i) => `<ellipse cx="${30 + (i % 6) * 18}" cy="${54 + Math.floor(i / 6) * 22}" rx="7" ry="9" fill="var(--sun)"/>`).join("")}
        <text x="74" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>1 docena = 12</text>
        ${Array.from({ length: 60 }, (_, i) => `<circle cx="${150 + (i % 10) * 9}" cy="${42 + Math.floor(i / 10) * 9}" r="3.2" fill="var(--pen)"/>`).join("")}
        <text x="192" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>1 mol =</text>
        <text x="192" y="146" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" ${D}>6,022 · 10²³</text>
      </svg>`,
    },
    {
      html: `<h3>Masa molar</h3><p>La <b>masa molar (M)</b> es la masa de un mol, en g/mol. Se calcula <mark>sumando las masas atómicas</mark> de la tabla periódica: H = 1, C = 12, O = 16. Para el agua, M(H₂O) = 2 · 1 + 16 = <b>18 g/mol</b>. Con ella se pasa de gramos a moles:</p>
      <div class="formula"><span>n = m / M</span><span class="op">→</span><span>36 g de agua = 36 / 18 = <b>2 mol</b></span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de relaciones entre gramos, moles y partículas">
        <defs>${flecha("es1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <rect x="20" y="30" width="80" height="40" rx="20" fill="var(--sun)"/><text x="60" y="56" font-size="15" fill="var(--ink)">gramos</text>
          <rect x="160" y="30" width="80" height="40" rx="20" fill="var(--pen)"/><text x="200" y="56" font-size="15" fill="#fff">moles</text>
          <rect x="140" y="124" width="110" height="40" rx="20" fill="var(--leaf)"/><text x="195" y="150" font-size="15" fill="#fff">partículas</text>
          <path d="M104 42 H 154" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#es1)"/><text x="130" y="34" font-size="12" fill="var(--muted)">÷ M</text>
          <path d="M156 60 H 106" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#es1)"/><text x="130" y="80" font-size="12" fill="var(--muted)">× M</text>
          <path d="M200 74 V 118" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#es1)"/><text x="160" y="102" font-size="12" fill="var(--muted)">× Nₐ</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Disoluciones y concentración</h3><p>Una <b>disolución</b> es una mezcla homogénea de <b>soluto</b> (lo que se disuelve) y <b>disolvente</b> (normalmente agua). Su <b>concentración</b> dice cuánto soluto hay:</p>
      <div class="formula"><span>g/L = masa de soluto (g) / volumen (L)</span></div>
      <div class="formula"><span>Molaridad M = moles de soluto / volumen (L)</span></div>
      <p>Disolver 58,5 g de NaCl (1 mol) hasta 0,5 L de disolución da <mark>117 g/L o 2 mol/L (2 M)</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos vasos: uno diluido con pocas partículas y otro concentrado con muchas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[30, 6, "diluida"], [150, 22, "concentrada"]].map(([x, n, t]) => `<path d="M${x} 40 V 140 Q ${x} 150 ${x + 10} 150 H ${x + 70} Q ${x + 80} 150 ${x + 80} 140 V 40" fill="none" stroke="var(--ink)" stroke-width="2.5"/><rect x="${x + 2}" y="70" width="76" height="78" rx="8" fill="var(--water)" opacity=".3"/>
          ${Array.from({ length: n }, (_, i) => `<circle cx="${x + 12 + ((i * 37) % 58)}" cy="${80 + ((i * 23) % 60)}" r="4" fill="var(--red)"/>`).join("")}<text x="${x + 40}" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Proporciones en una reacción</h3><p>Los <b>coeficientes</b> de una ecuación ajustada indican la <mark>proporción en moles</mark> en que reaccionan y se forman las sustancias. En la síntesis del amoniaco:</p>
      <div class="formula"><span>N₂ + 3 H₂</span><span class="op">→</span><span>2 NH₃</span></div>
      <p>se lee: <b>1 mol</b> de nitrógeno reacciona con <b>3 mol</b> de hidrógeno y da <b>2 mol</b> de amoniaco. Si usamos 5 mol de N₂, necesitaremos 15 mol de H₂ y obtendremos 10 mol de NH₃.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Proporción 1 a 3 a 2 en la síntesis del amoniaco">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          ${[["N₂", 1, 36, "var(--pen)"], ["H₂", 3, 104, "var(--muted)"], ["NH₃", 2, 206, "var(--leaf)"]].map(([s, n, x, c]) => `${Array.from({ length: n }, (_, i) => `<rect x="${x - 22}" y="${110 - i * 28}" width="44" height="22" rx="6" fill="${c}"/><text x="${x}" y="${126 - i * 28}" font-size="13" fill="#fff">${s}</text>`).join("")}<text x="${x}" y="156" font-size="15" fill="${c}">${n} mol</text>`).join("")}
          <text x="70" y="126" font-size="18" fill="var(--ink)">+</text><text x="152" y="126" font-size="18" fill="var(--ink)">→</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Problemas paso a paso</h3><p>¿Cuántos gramos de agua se obtienen al quemar 8 g de hidrógeno? Sigue siempre el mismo camino: <mark>gramos → moles → proporción → moles → gramos</mark>.</p>
      <p>1) Ecuación ajustada: 2 H₂ + O₂ → 2 H₂O. 2) Moles de H₂: 8 / 2 = 4 mol. 3) Proporción 2 : 2, así que salen 4 mol de H₂O. 4) Gramos: 4 · 18 = <b>72 g de agua</b>. Si hay gases a 0 °C y 1 atm, cada mol ocupa <b>22,4 L</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Camino de cuatro pasos de un problema estequiométrico">
        <defs>${flecha("es2", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle" font-size="13">
          ${[["8 g H₂", 40, "var(--sun)"], ["4 mol H₂", 40 + 0, "var(--pen)"], ["4 mol H₂O", 0, "var(--pen)"], ["72 g H₂O", 0, "var(--leaf)"]].map(([t, _, c], i) => `<rect x="${i % 2 ? 140 : 20}" y="${20 + i * 38}" width="100" height="28" rx="14" fill="${c}"/><text x="${i % 2 ? 190 : 70}" y="${39 + i * 38}" fill="#fff">${t}</text>`).join("")}
          <path d="M120 40 L 140 56" stroke="var(--muted)" stroke-width="2" marker-end="url(#es2)"/><path d="M140 82 L 120 96" stroke="var(--muted)" stroke-width="2" marker-end="url(#es2)"/><path d="M120 116 L 140 132" stroke="var(--muted)" stroke-width="2" marker-end="url(#es2)"/>
          <g font-size="11" fill="var(--muted)"><text x="214" y="40">÷ 2 g/mol</text><text x="56" y="80">× 2/2</text><text x="214" y="116">× 18 g/mol</text></g>
        </g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las cuatro fórmulas que lo resuelven casi todo",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Fórmulas: moles a partir de masa, partículas, molaridad y volumen de gas">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["n = m / M", "masa → moles", "var(--sun)"], ["N = n · Nₐ", "moles → partículas", "var(--leaf)"], ["M = n / V", "molaridad (mol/L)", "var(--pen)"], ["V = n · 22,4 L", "gas a 0 °C y 1 atm", "var(--red)"]]
        .map(([f, d, c], i) => `<rect x="${16 + i * 154}" y="30" width="146" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="104" text-anchor="middle" font-size="21" font-weight="700" fill="${c}" ${D}>${f}</text>
          <text x="${89 + i * 154}" y="150" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "jHRNPVJR7Lo", titulo: "Cálculo de moles rápido y fácil", canal: "EMMANUEL ASESORÍAS", vistas: 2179334, megusta: 0, busqueda: "estequiometría mol cálculos" },
  quiz: [
    { q: "¿Cuántas partículas hay en un mol?", o: ["6,022 · 10²³", "1 000", "22,4"], a: 0, e: "Es el número de Avogadro." },
    { q: "¿Cuál es la masa molar del CO₂? (C = 12, O = 16)", o: ["28 g/mol", "44 g/mol", "32 g/mol"], a: 1, e: "12 + 2 · 16 = 44 g/mol." },
    { q: "¿Cuántos moles son 90 g de agua? (M = 18 g/mol)", o: ["5 mol", "1 620 mol", "0,2 mol"], a: 0, e: "n = 90 / 18 = 5 mol." },
    { q: "Disolvemos 0,4 mol de azúcar hasta 2 L. ¿Cuál es la molaridad?", o: ["0,8 M", "0,2 M", "5 M"], a: 1, e: "M = 0,4 / 2 = 0,2 mol/L." },
    { q: "En N₂ + 3 H₂ → 2 NH₃, con 6 mol de H₂, ¿cuántos mol de NH₃ se forman?", o: ["2", "4", "6"], a: 1, e: "La proporción H₂ : NH₃ es 3 : 2. 6 · 2 / 3 = 4 mol." },
  ],
  examen: [
    { q: "¿Cuántos gramos son 3 mol de NaCl? (M = 58,5 g/mol)", o: ["19,5 g", "175,5 g", "58,5 g"], a: 1, e: "m = n · M = 3 · 58,5 = 175,5 g." },
    { q: "¿Qué volumen ocupan 2 mol de O₂ a 0 °C y 1 atm?", o: ["22,4 L", "44,8 L", "11,2 L"], a: 1, e: "Cada mol de gas ocupa 22,4 L en esas condiciones: 2 · 22,4 = 44,8 L." },
    { q: "Al quemar 16 g de metano (CH₄ + 2 O₂ → CO₂ + 2 H₂O), ¿cuántos gramos de CO₂ salen?", o: ["16 g", "44 g", "88 g"], a: 1, e: "16 g de CH₄ = 1 mol → 1 mol de CO₂ = 44 g." },
  ],
  feynman: ["Qué es un mol y por qué lo usan los químicos", "Cómo se calcula la masa molar de un compuesto", "La diferencia entre g/L y molaridad", "Qué significan los coeficientes de una ecuación ajustada", "Los cuatro pasos de un problema estequiométrico"],
  mapa: mapa("ESTEQUIOMETRÍA", "var(--eso)", [
    ["Mol", "6,022 · 10²³ partículas", "var(--leaf)"],
    ["Masa molar", "n = m / M", "var(--sun)"],
    ["Disoluciones", "g/L · molaridad n/V", "var(--pen)"],
    ["Reacciones", "coeficientes = proporción en mol", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Número de Avogadro", "6,022 · 10²³ partículas por mol."],
    ["Fórmula para pasar de gramos a moles", "n = m / M."],
    ["Definición de molaridad", "Moles de soluto por litro de disolución (mol/L)."],
    ["Volumen de un mol de gas a 0 °C y 1 atm", "22,4 L."],
    ["¿Qué indican los coeficientes de una ecuación?", "La proporción en moles entre reactivos y productos."],
  ],
  familias: ["Mirad el suero fisiológico de casa: 0,9 % de NaCl. Calculad cuántos gramos de sal hay en 1 L (9 g).", "Contad cuántos granos de arroz hay en 10 g y estimad cuántos habría en un kilo: es la misma idea que el mol.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El cambio: cantidad de sustancia, mol, concentración de disoluciones y cálculos estequiométricos sencillos (RD 217/2022, Física y Química 4º).",
    ideas: ["Preparar disoluciones de concentración conocida con balanza y matraz aforado.", "Reacción de bicarbonato y vinagre midiendo el CO₂ producido por pérdida de masa.", "Analogía del mol con «paquetes» de clips para practicar conversiones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Estequiometría, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Estequiometr%C3%ADa" },
  ],
  revisado: "2026-11-12",
};
