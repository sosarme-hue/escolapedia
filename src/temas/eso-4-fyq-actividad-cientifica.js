// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "La actividad científica",
  minutos: 35,
  objetivos: ["Describir las etapas del método científico", "Distinguir magnitudes fundamentales y derivadas y usar las unidades del SI", "Expresar medidas con notación científica, cifras significativas y error"],
  claves: ["hipótesis", "magnitud", "Sistema Internacional", "notación científica", "error absoluto", "error relativo"],
  pregunta: {
    texto: "Tres compañeros miden la misma mesa y obtienen 1,20 m, 1,22 m y 1,19 m. ¿Quién tiene razón?",
    respuesta: "Ninguna medida es exacta: <mark>toda medida tiene un error</mark>. Lo correcto es dar la media (1,20 m) junto con su incertidumbre. La ciencia no busca certezas absolutas, sino <b>medidas fiables y comprobables</b> por otros.",
  },
  bloques: [
    {
      html: `<h3>El método científico</h3><p>La ciencia avanza siguiendo unos pasos: <b>observar</b> un fenómeno, plantear una <b>pregunta</b>, proponer una <mark>hipótesis</mark> (una respuesta provisional que se pueda comprobar), <b>experimentar</b>, analizar los datos y sacar <b>conclusiones</b>. Si la hipótesis se confirma muchas veces, puede convertirse en <b>ley</b> o formar parte de una <b>teoría</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del método científico: observación, pregunta, hipótesis, experimento, análisis y conclusión">
        <defs>${flecha("ac1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle">
          ${[["Observar", 130, 28, "var(--pen)"], ["Pregunta", 216, 62, "var(--inf)"], ["Hipótesis", 216, 122, "var(--red)"], ["Experimento", 130, 156, "var(--leaf)"], ["Análisis", 44, 122, "var(--sun)"], ["Conclusión", 44, 62, "var(--ink)"]]
            .map(([t, x, y, c]) => `<rect x="${x - 40}" y="${y - 14}" width="80" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="${y + 4}" fill="${c}">${t}</text>`).join("")}
        </g>
        <g stroke="var(--muted)" stroke-width="2" fill="none" marker-end="url(#ac1)">
          <path d="M172 32 Q 200 36 210 46"/><path d="M216 78 V 104"/><path d="M200 136 Q 186 152 172 154"/><path d="M88 154 Q 70 150 58 138"/><path d="M44 106 V 80"/><path d="M60 48 Q 70 32 88 30"/>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Magnitudes y unidades</h3><p>Una <b>magnitud</b> es cualquier propiedad que se puede medir: longitud, masa, tiempo, temperatura… El <b>Sistema Internacional (SI)</b> tiene <mark>7 magnitudes fundamentales</mark>, como el metro (m), el kilogramo (kg), el segundo (s), el kelvin (K) o el mol. Las <b>derivadas</b> se obtienen combinando las fundamentales: velocidad (m/s), densidad (kg/m³), fuerza (N = kg · m/s²).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de magnitudes fundamentales del Sistema Internacional con su unidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13">
          <text x="20" y="28" font-weight="700" fill="var(--muted)">Magnitud</text><text x="170" y="28" font-weight="700" fill="var(--muted)">Unidad SI</text>
          <path d="M14 36 H 246" stroke="var(--line)" stroke-width="2"/>
          ${[["Longitud", "metro (m)"], ["Masa", "kilogramo (kg)"], ["Tiempo", "segundo (s)"], ["Temperatura", "kelvin (K)"], ["Cantidad de sustancia", "mol (mol)"], ["Intensidad de corriente", "amperio (A)"]]
            .map(([m, u], i) => `<text x="20" y="${58 + i * 21}" fill="var(--ink)">${m}</text><text x="170" y="${58 + i * 21}" font-weight="700" fill="var(--pen)">${u}</text>`).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Cambiar de unidades</h3><p>Para pasar de una unidad a otra se usan <b>factores de conversión</b>: fracciones que valen 1 porque arriba y abajo hay la misma cantidad. Así se pasan 72 km/h a m/s:</p>
      <div class="formula"><span>72 km/h · (1000 m / 1 km) · (1 h / 3600 s)</span><span class="op">=</span><span><b>20 m/s</b></span></div>
      <p>Truco: <mark>la unidad que quieres quitar va en el lado contrario</mark> del factor, para que se simplifique.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de prefijos: kilo, hecto, deca, unidad, deci, centi, mili; multiplicar por 10 al bajar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13" font-weight="700" text-anchor="middle">
          ${["k", "h", "da", "unidad", "d", "c", "m"].map((p, i) => `<rect x="${12 + i * 33}" y="${30 + i * 18}" width="32" height="22" rx="4" fill="${i === 3 ? "var(--pen)" : "var(--card)"}" stroke="var(--pen)" stroke-width="1.5"/><text x="${28 + i * 33}" y="${46 + i * 18}" fill="${i === 3 ? "#fff" : "var(--ink)"}" font-size="${i === 3 ? 9 : 13}">${p}</text>`).join("")}
          <text x="200" y="40" fill="var(--leaf)" font-size="12">bajar: × 10</text>
          <text x="80" y="170" fill="var(--red)" font-size="12">subir: ÷ 10</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Notación científica</h3><p>Para escribir números muy grandes o muy pequeños se usa <b>a · 10ⁿ</b>, con un número entre 1 y 10 delante. La distancia Tierra-Sol es <mark>1,5 · 10¹¹ m</mark> y el radio de un átomo, unos <mark>1 · 10⁻¹⁰ m</mark>. Las <b>cifras significativas</b> son las que conocemos con seguridad: 1,50 m tiene tres y nos dice que se midió hasta el centímetro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de tamaños en notación científica: átomo, célula, persona, Tierra">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 110 H 240" stroke="var(--line)" stroke-width="3"/>
        <g ${F} text-anchor="middle">
          ${[["átomo", "10⁻¹⁰ m", 36, 3, "var(--red)"], ["célula", "10⁻⁵ m", 96, 7, "var(--leaf)"], ["persona", "10⁰ m", 160, 12, "var(--pen)"], ["Tierra", "10⁷ m", 222, 20, "var(--water)"]]
            .map(([n, v, x, r, c]) => `<circle cx="${x}" cy="${86 - r}" r="${r}" fill="${c}"/><circle cx="${x}" cy="110" r="4" fill="var(--ink)"/><text x="${x}" y="134" font-size="12" font-weight="700" fill="var(--ink)">${n}</text><text x="${x}" y="152" font-size="13" font-weight="700" fill="${c}">${v}</text>`).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Errores en la medida</h3><p>Ninguna medida es perfecta. El <b>error absoluto</b> es la diferencia entre el valor medido y el verdadero (o la media): <mark>Eₐ = |x − x̄|</mark>. El <b>error relativo</b> lo compara con el tamaño de lo medido: <mark>Eᵣ = Eₐ / x̄</mark>, y suele darse en %. Equivocarse 1 cm al medir una mesa es poco (≈ 1 %); equivocarse 1 cm al medir una goma es mucho (≈ 25 %).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diana con impactos: precisión y exactitud">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[70, "exacto y preciso", [[0, 0], [5, -3], [-4, 4], [3, 5]]], [190, "preciso, no exacto", [[28, -22], [33, -25], [26, -18], [31, -17]]]]
          .map(([x, t, ps]) => `<circle cx="${x}" cy="80" r="50" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="${x}" cy="80" r="32" fill="none" stroke="var(--red)" stroke-width="2"/><circle cx="${x}" cy="80" r="14" fill="var(--red)" opacity=".25"/>
          ${ps.map(([dx, dy]) => `<circle cx="${x + dx}" cy="${80 + dy}" r="4" fill="var(--ink)"/>`).join("")}<text x="${x}" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "Del fenómeno a la teoría",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Hipótesis, ley y teoría, con un ejemplo cada uno">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["HIPÓTESIS", "respuesta provisional", "que se puede comprobar", "«el péndulo largo tarda más»", "var(--red)"], ["LEY", "relación que se cumple", "siempre, a veces con fórmula", "T = 2π √(L/g)", "var(--pen)"], ["TEORÍA", "explicación amplia que", "une muchas leyes", "la gravitación de Newton", "var(--leaf)"]]
        .map(([n, l1, l2, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="62" text-anchor="middle" font-size="24" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${l1}</text>
          <text x="${115 + i * 206}" y="120" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${l2}</text>
          <text x="${115 + i * 206}" y="168" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "zzHu-yqdlz0", titulo: "Método científico", canal: "BrainPOP Español", vistas: 2956164, megusta: 0, busqueda: "el método científico pasos" },
  quiz: [
    { q: "¿Qué es una hipótesis?", o: ["Una ley ya demostrada", "Una respuesta provisional que se puede comprobar con experimentos", "El resultado final de un experimento"], a: 1, e: "La hipótesis es una suposición razonada que se pone a prueba experimentando." },
    { q: "¿Cuál de estas magnitudes es derivada?", o: ["La masa", "El tiempo", "La velocidad"], a: 2, e: "La velocidad se obtiene dividiendo longitud entre tiempo (m/s)." },
    { q: "¿Cuánto son 36 km/h en m/s?", o: ["10 m/s", "36 m/s", "129,6 m/s"], a: 0, e: "36 · 1000 / 3600 = 10 m/s." },
    { q: "¿Cómo se escribe 0,00045 en notación científica?", o: ["4,5 · 10⁴", "4,5 · 10⁻⁴", "45 · 10⁻⁵"], a: 1, e: "Movemos la coma 4 lugares a la derecha: 4,5 · 10⁻⁴. Delante debe quedar un número entre 1 y 10." },
    { q: "Medimos 9,8 cm algo que mide 10,0 cm. ¿Cuál es el error relativo?", o: ["0,2 cm", "2 %", "20 %"], a: 1, e: "Eₐ = 0,2 cm; Eᵣ = 0,2 / 10 = 0,02 = 2 %." },
  ],
  examen: [
    { q: "¿Cuántas cifras significativas tiene 0,0350?", o: ["2", "3", "5"], a: 1, e: "Los ceros a la izquierda no cuentan; el 3, el 5 y el cero final sí: 3 cifras." },
    { q: "La unidad de densidad en el SI es…", o: ["g/cm³", "kg/m³", "kg/L"], a: 1, e: "Masa en kg entre volumen en m³: kg/m³." },
    { q: "¿Qué medida es más precisa, en proporción?", o: ["1 km con error de 1 m", "10 cm con error de 1 mm", "Son iguales"], a: 0, e: "1 m / 1000 m = 0,1 %; 1 mm / 100 mm = 1 %. La primera tiene menor error relativo." },
  ],
  feynman: ["Los pasos del método científico con un ejemplo propio", "La diferencia entre magnitud fundamental y derivada", "Cómo funciona un factor de conversión", "Por qué el error relativo dice más que el absoluto"],
  mapa: mapa("ACTIVIDAD CIENTÍFICA", "var(--eso)", [
    ["Método científico", "hipótesis → experimento → ley", "var(--red)"],
    ["Magnitudes", "fundamentales y derivadas · SI", "var(--pen)"],
    ["Notación científica", "a · 10ⁿ · cifras significativas", "var(--leaf)"],
    ["Errores", "absoluto · relativo (%)", "var(--ink)"],
  ], 250),
  tarjetas: [
    ["¿Qué es una hipótesis?", "Una explicación provisional de un fenómeno que se puede comprobar experimentalmente."],
    ["Unidades SI de longitud, masa y tiempo", "Metro (m), kilogramo (kg) y segundo (s)."],
    ["Factor de conversión de km/h a m/s", "Dividir entre 3,6 (multiplicar por 1000 m/km y dividir entre 3600 s/h)."],
    ["Fórmula del error relativo", "Eᵣ = Eₐ / valor verdadero (se suele expresar en %)."],
    ["Diferencia entre ley y teoría", "La ley describe una relación que se cumple; la teoría explica por qué, uniendo varias leyes."],
  ],
  familias: ["Medid entre todos la longitud de un pasillo y calculad la media y el error de cada uno.", "Buscad en la etiqueta de un alimento magnitudes y unidades (kJ, g, mL) y comentad cuáles son del SI.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Las destrezas científicas básicas: metodologías de la investigación científica, magnitudes, unidades del SI, notación científica y errores (RD 217/2022, Física y Química 4º).",
    ideas: ["Medir el periodo de un péndulo diez veces y calcular media, error absoluto y relativo.", "Pequeña investigación con hipótesis propia (¿qué hace que un papel caiga más despacio?).", "Carrera de factores de conversión por equipos con unidades de la vida diaria."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sistema Internacional de Unidades, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades" },
  ],
  revisado: "2026-11-12",
};
