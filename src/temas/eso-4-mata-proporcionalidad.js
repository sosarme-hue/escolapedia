// Matemáticas A 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Proporcionalidad y porcentajes",
  minutos: 40,
  objetivos: ["Distinguir magnitudes directa e inversamente proporcionales", "Resolver problemas con reglas de tres simples y compuestas", "Calcular porcentajes, aumentos, descuentos y porcentajes encadenados"],
  claves: ["proporción", "constante de proporcionalidad", "regla de tres", "porcentaje", "índice de variación", "IVA"],
  pregunta: {
    texto: "Unas zapatillas cuestan 80 €. Primero las rebajan un 20 % y luego las suben un 20 %. ¿Vuelven a costar 80 €?",
    respuesta: "No. Tras la rebaja cuestan 80 · 0,8 = 64 €, y al subirlas un 20 %: 64 · 1,2 = <mark>76,80 €</mark>. Los porcentajes se aplican sobre cantidades distintas, así que <b>no se compensan</b>.",
  },
  bloques: [
    {
      html: `<h3>Proporcionalidad directa e inversa</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al doble de una le corresponde el <mark>doble</mark> de la otra (kilos y precio). Son <b>inversamente proporcionales</b> si al doble le corresponde la <mark>mitad</mark> (trabajadores y días para terminar una obra).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Directa: más kilos, más precio, una recta. Inversa: más trabajadores, menos días, una curva que baja">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 140 H 120 M20 140 V 30 M140 140 H 244 M140 140 V 30" stroke="var(--muted)" stroke-width="2"/>
        <path d="M20 140 L 116 40" stroke="var(--pen)" stroke-width="3"/>
        <path d="${[...Array(30)].map((_, i) => { const x = 0.8 + i * 0.15; return `${i ? "L" : "M"}${(140 + x * 20).toFixed(1)} ${(140 - (4 / x) * 20).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="160" fill="var(--pen)">directa</text><text x="70" y="174" fill="var(--muted)">kg → €</text><text x="192" y="160" fill="var(--red)">inversa</text><text x="192" y="174" fill="var(--muted)">obreros → días</text></g></svg>`,
    },
    {
      html: `<h3>Regla de tres simple</h3><p>Se colocan los datos en dos filas y se decide si es directa o inversa. En la <b>directa</b> se multiplica en cruz; en la <b>inversa</b>, en línea:</p>
      <div class="formula"><span>3 kg → 7,50 € · 5 kg → x · x = 5 · 7,50 / 3 = 12,50 €</span></div>
      <div class="formula"><span>4 obreros → 6 días · 8 obreros → x · x = 4 · 6 / 8 = 3 días</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regla de tres directa con las flechas en cruz: 3 kilos cuestan 7,50 euros, 5 kilos cuestan x">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" font-size="18" text-anchor="middle"><text x="70" y="60" fill="var(--ink)">3 kg</text><text x="190" y="60" fill="var(--ink)">7,50 €</text><text x="70" y="116" fill="var(--ink)">5 kg</text><text x="190" y="116" fill="var(--red)">x</text>
        <path d="M108 54 H 150 M108 110 H 150" stroke="var(--muted)" stroke-width="2"/><path d="M96 104 L 162 66" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="5 4"/>
        <text x="130" y="160" font-size="15" fill="var(--pen)">x = 5 · 7,50 / 3 = 12,50 €</text></g></svg>`,
    },
    {
      html: `<h3>Regla de tres compuesta</h3><p>Cuando intervienen <b>más de dos magnitudes</b>, se compara cada una con la incógnita por separado (¿directa o inversa?) y se plantea una sola proporción. Ejemplo: si 5 grifos llenan 2 piscinas en 8 h, ¿cuánto tardan 10 grifos en llenar 3 piscinas? Más grifos → menos horas (inversa); más piscinas → más horas (directa): <mark>x = 8 · (5/10) · (3/2) = 6 h</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de regla de tres compuesta con grifos, piscinas y horas, y el tipo de relación de cada magnitud con las horas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="14" font-weight="700" text-anchor="middle"><g fill="var(--muted)"><text x="50" y="36">grifos</text><text x="130" y="36">piscinas</text><text x="210" y="36">horas</text></g>
        <text x="50" y="72" fill="var(--ink)">5</text><text x="130" y="72" fill="var(--ink)">2</text><text x="210" y="72" fill="var(--ink)">8</text>
        <text x="50" y="106" fill="var(--ink)">10</text><text x="130" y="106" fill="var(--ink)">3</text><text x="210" y="106" fill="var(--red)">x</text>
        <text x="50" y="140" font-size="12" fill="var(--red)">inversa</text><text x="130" y="140" font-size="12" fill="var(--pen)">directa</text>
        <text x="130" y="168" font-size="14" fill="var(--leaf)">x = 8 · 5/10 · 3/2 = 6 h</text></g>
        <path d="M14 46 H 246 M14 84 H 246" stroke="var(--line)" stroke-width="1.5"/></svg>`,
    },
    {
      html: `<h3>Porcentajes, aumentos y descuentos</h3><p>Un porcentaje es una fracción de 100: el 15 % de 60 = 60 · 0,15 = 9. Para aumentos y descuentos usa el <b>índice de variación</b>: multiplica por <mark>(1 + r)</mark> si sube y por <mark>(1 − r)</mark> si baja.</p>
      <div class="formula"><span>Con 21 % de IVA: 50 € · 1,21 = 60,50 €</span></div><div class="formula"><span>Rebaja del 30 %: 50 € · 0,70 = 35 €</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras: precio de 50 euros, con IVA del 21 por ciento 60,50 euros, con rebaja del 30 por ciento 35 euros">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
        ${[["50 €", 100, "precio", "var(--pen)"], ["60,50 €", 121, "× 1,21", "var(--red)"], ["35 €", 70, "× 0,70", "var(--leaf)"]].map(([v, h, t, c], i) => `<rect x="${40 + i * 70}" y="${150 - h}" width="44" height="${h}" rx="6" fill="${c}"/><text x="${62 + i * 70}" y="${144 - h}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${v}</text><text x="${62 + i * 70}" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${t}</text>`).join("")}</svg>`,
    },
    {
      html: `<h3>Porcentajes encadenados</h3><p>Si se aplican varios porcentajes seguidos, se <mark>multiplican los índices de variación</mark>, no se suman los porcentajes. Subir un 10 % y luego otro 10 % es × 1,1 · 1,1 = × 1,21: una subida total del <b>21 %</b>, no del 20 %. Y para saber el precio <b>antes</b> de un cambio, se divide entre el índice.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena: 100 euros por 1,1 da 110, por 1,1 da 121: subida total del 21 por ciento">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["100 €", 20], ["110 €", 100], ["121 €", 180]].map(([v, x], i) => `<rect x="${x}" y="60" width="60" height="40" rx="10" fill="var(--card)" stroke="${i === 2 ? "var(--red)" : "var(--pen)"}" stroke-width="2.5"/><text x="${x + 30}" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${v}</text>`).join("")}
        <g ${F} font-size="12" font-weight="700" fill="var(--pen)" text-anchor="middle"><text x="90" y="52">×1,1</text><text x="170" y="52">×1,1</text></g>
        <path d="M80 80 h 20 M160 80 h 20" stroke="var(--pen)" stroke-width="2.5"/>
        <text x="130" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="var(--red)" ${F}>total: +21 %, no +20 %</text></svg>`,
    },
  ],
  figura: {
    titulo: "Índices de variación: la herramienta más útil",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Tabla de índices: subir 21 por ciento es multiplicar por 1,21; bajar 15 por ciento por 0,85; subir 5 por ciento por 1,05; bajar 50 por ciento por 0,5">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["IVA del 21 %", "× 1,21", "var(--red)"], ["Rebaja del 15 %", "× 0,85", "var(--leaf)"], ["Subida del 5 %", "× 1,05", "var(--red)"], ["Mitad de precio (−50 %)", "× 0,50", "var(--leaf)"]].map(([t, f, c], i) => `<rect x="20" y="${18 + i * 48}" width="600" height="40" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${44 + i * 48}" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${t}</text><text x="560" y="${44 + i * 48}" text-anchor="end" font-size="20" font-weight="800" fill="${c}" ${D}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "RE3XoDORMys", titulo: "Cómo calcular un porcentaje, súper fácil", canal: "Daniel Carreón", vistas: 14510544, megusta: 0, busqueda: "porcentajes aumentos y disminuciones" },
  quiz: [
    { q: "Si 4 cuadernos cuestan 6 €, 10 cuadernos cuestan…", o: ["15 €", "12 €", "24 €"], a: 0, e: "Directa: 10 · 6 / 4 = 15 €." },
    { q: "6 pintores tardan 10 días. ¿Cuánto tardarían 3 pintores?", o: ["5 días", "20 días", "13 días"], a: 1, e: "Inversa: la mitad de pintores, el doble de días." },
    { q: "El 25 % de 80 es…", o: ["20", "25", "32"], a: 0, e: "80 · 0,25 = 20." },
    { q: "Un abrigo de 120 € con un 15 % de descuento cuesta…", o: ["102 €", "105 €", "18 €"], a: 0, e: "120 · 0,85 = 102 €." },
    { q: "Subir un 10 % y luego bajar un 10 % deja el precio…", o: ["igual", "un 1 % más bajo", "un 1 % más alto"], a: 1, e: "1,1 · 0,9 = 0,99." },
  ],
  examen: [
    { q: "Un producto cuesta 60,50 € con IVA del 21 %. ¿Cuánto costaba sin IVA?", o: ["50 €", "47,80 €", "73,21 €"], a: 0, e: "60,50 / 1,21 = 50 €." },
    { q: "Un coche a 90 km/h tarda 4 h. ¿Cuánto tarda a 120 km/h?", o: ["3 h", "5,3 h", "2 h"], a: 0, e: "Inversa: 90 · 4 / 120 = 3 h." },
    { q: "¿Qué índice de variación corresponde a una subida del 8 %?", o: ["0,92", "1,08", "1,8"], a: 1, e: "1 + 0,08." },
  ],
  feynman: ["Cómo distinguir proporcionalidad directa e inversa", "Cómo se plantea una regla de tres compuesta", "Qué es el índice de variación", "Por qué subir y bajar un 20 % no deja el precio igual"],
  mapa: mapa("PROPORCIONALIDAD", "var(--bac)", [
    ["Directa", "doble → doble", "var(--pen)"],
    ["Inversa", "doble → mitad", "var(--red)"],
    ["Regla de tres", "simple · compuesta", "var(--leaf)"],
    ["Porcentajes", "× (1 ± r) · se encadenan", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Proporcionalidad inversa", "Al doble de una magnitud le corresponde la mitad de la otra."],
    ["Índice de variación de una rebaja del 25 %", "0,75"],
    ["Precio con IVA del 21 %", "Precio sin IVA · 1,21"],
    ["Porcentajes encadenados", "Se multiplican los índices de variación."],
    ["¿Cómo saber el precio antes de una subida?", "Dividiendo el precio final entre el índice de variación."],
  ],
  familias: ["En la compra, pedidle que calcule el precio final con descuentos y el IVA de un tique.", "Comparad ofertas «3x2» y «segunda unidad al 50 %» y decidid cuál conviene.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico y de la medida: proporcionalidad directa e inversa, porcentajes y aplicaciones a la vida cotidiana (RD 217/2022, Matemáticas A 4º).",
    ideas: ["Analizar folletos de supermercado y calcular el ahorro real de cada oferta.", "Recetas: escalar ingredientes para más o menos comensales.", "Debate sobre titulares engañosos con porcentajes."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Porcentaje, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Porcentaje" },
  ],
  revisado: "2026-11-12",
};
