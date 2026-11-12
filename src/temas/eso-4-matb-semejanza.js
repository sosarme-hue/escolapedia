// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Semejanza",
  minutos: 40,
  objetivos: ["Reconocer figuras semejantes y calcular la razón de semejanza", "Aplicar el teorema de Tales y los criterios de semejanza de triángulos", "Relacionar la razón de semejanza con áreas y volúmenes, y usar escalas"],
  claves: ["razón de semejanza", "teorema de Tales", "proporcional", "escala", "criterios de semejanza", "homotecia"],
  pregunta: {
    texto: "Un palo de 1 m da una sombra de 1,5 m. A la misma hora, la sombra de un edificio mide 30 m. ¿Qué altura tiene el edificio?",
    respuesta: "Los rayos de sol son paralelos, así que el palo con su sombra y el edificio con la suya forman <mark>triángulos semejantes</mark>: h / 30 = 1 / 1,5 → <b>h = 20 m</b>. Así midió Tales la pirámide de Keops hace 2.600 años.",
  },
  bloques: [
    {
      html: `<h3>Figuras semejantes</h3><p>Dos figuras son <b>semejantes</b> si tienen <mark>la misma forma</mark> aunque distinto tamaño: sus ángulos son iguales y sus lados, <b>proporcionales</b>. El cociente entre lados correspondientes es la <b>razón de semejanza</b> k.</p><div class="formula"><span>k = a′ / a = b′ / b = c′ / c</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos triángulos semejantes: el grande tiene los lados el doble que el pequeño, razón 2">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 140 L 80 140 L 40 100 Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M110 160 L 230 160 L 150 80 Z" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        <g ${F} font-size="13" font-weight="700"><text x="50" y="156" text-anchor="middle" fill="var(--pen)">3</text><text x="170" y="176" text-anchor="middle" fill="var(--leaf)">6</text><text x="20" y="118" fill="var(--pen)">2</text><text x="112" y="118" fill="var(--leaf)">4</text>
        <text x="130" y="36" text-anchor="middle" font-size="16" fill="var(--red)">k = 6/3 = 4/2 = 2</text></g></svg>`,
    },
    {
      html: `<h3>Teorema de Tales</h3><p>Si varias rectas paralelas cortan a dos rectas secantes, los segmentos que determinan son <mark>proporcionales</mark>.</p><div class="formula"><span>a / b = a′ / b′</span></div><p>Consecuencia: si trazas una paralela a un lado de un triángulo, obtienes un triángulo pequeño <b>semejante</b> al grande (triángulos en posición de Tales).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos rectas que salen de un punto cortadas por tres paralelas; los segmentos a y b de una son proporcionales a a prima y b prima de la otra">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 160 L 240 120 M20 160 L 200 20" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M80 149 L 66 124 M150 136 L 121 81 M222 123 L 180 36" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="14" font-weight="700"><text x="110" y="160" fill="var(--pen)">a</text><text x="182" y="146" fill="var(--pen)">b</text><text x="80" y="94" fill="var(--leaf)">a′</text><text x="134" y="54" fill="var(--leaf)">b′</text></g>
        <text x="236" y="174" text-anchor="end" font-size="12" fill="var(--red)" ${F}>rectas rojas paralelas</text></svg>`,
    },
    {
      html: `<h3>Criterios de semejanza de triángulos</h3><p>No hace falta comprobar todo. Dos triángulos son semejantes si cumplen <b>uno</b> de estos criterios:</p><ul><li>Tienen <mark>dos ángulos iguales</mark> (el tercero también lo será).</li><li>Tienen los <b>tres lados proporcionales</b>.</li><li>Tienen <b>dos lados proporcionales</b> y el ángulo que forman, igual.</li></ul>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Criterio de los ángulos: dos triángulos de distinto tamaño con dos ángulos marcados iguales">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 140 L 100 140 L 44 80 Z" fill="none" stroke="var(--pen)" stroke-width="2.5"/><path d="M120 160 L 240 160 L 156 70 Z" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M38 140 A 18 18 0 0 0 33 126" fill="none" stroke="var(--red)" stroke-width="3"/><path d="M86 140 A 14 14 0 0 1 91 130" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M144 160 A 24 24 0 0 0 137 142" fill="none" stroke="var(--red)" stroke-width="3"/><path d="M222 160 A 18 18 0 0 1 228 147" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <text x="130" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>2 ángulos iguales → semejantes</text></svg>`,
    },
    {
      html: `<h3>Perímetros, áreas y volúmenes</h3><p>Si la razón de semejanza es k: los <b>perímetros</b> se multiplican por k, las <b>áreas</b> por <mark>k²</mark> y los <b>volúmenes</b> por <mark>k³</mark>. Si duplicas el lado de un cubo, su superficie se multiplica por 4 y su volumen por 8.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cuadrado de lado 1 y otro de lado 2: el grande contiene 4 cuadrados pequeños, su área es k al cuadrado igual a 4">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="100" width="40" height="40" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2.5"/>
        <rect x="120" y="60" width="80" height="80" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/><path d="M160 60 V 140 M120 100 H 200" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <g ${F} font-size="13" font-weight="700" text-anchor="middle"><text x="50" y="158" fill="var(--pen)">lado 1</text><text x="160" y="158" fill="var(--leaf)">lado 2 (k = 2)</text><text x="160" y="40" fill="var(--red)">área × 4 = k²</text></g></svg>`,
    },
    {
      html: `<h3>Escalas: mapas y planos</h3><p>Un plano es una figura semejante a la realidad. La <b>escala</b> 1 : 50.000 significa que <mark>1 cm del mapa son 50.000 cm reales</mark> (500 m). Para pasar del mapa a la realidad se multiplica por el denominador de la escala.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa con escala gráfica: 3 centímetros en el mapa equivalen a 1,5 kilómetros reales con escala 1 a 50.000">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="16" width="228" height="110" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <path d="M30 100 C 70 40 110 110 160 50 S 220 70 234 40" fill="none" stroke="var(--pen)" stroke-width="4"/><circle cx="50" cy="76" r="6" fill="var(--red)"/><circle cx="160" cy="50" r="6" fill="var(--red)"/>
        <path d="M30 150 h 120" stroke="var(--ink)" stroke-width="4"/>${[0, 1, 2, 3].map((i) => `<path d="M${30 + i * 40} 144 v 12" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="160" y="154" fill="var(--ink)">3 cm = 1,5 km</text><text x="236" y="172" text-anchor="end" fill="var(--muted)">escala 1 : 50.000</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "La sombra de Tales: medir lo inalcanzable",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Un palo de 1 metro con sombra de 1,5 metros y un edificio con sombra de 30 metros forman triángulos semejantes; la altura del edificio es 20 metros">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <circle cx="600" cy="36" r="20" fill="var(--hl)"/>
      <path d="M20 200 H 620" stroke="var(--muted)" stroke-width="2"/>
      <rect x="400" y="60" width="50" height="140" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
      <path d="M450 60 L 240 200" stroke="var(--hl-ink)" stroke-width="2" stroke-dasharray="6 5"/><path d="M240 200 H 450" stroke="var(--ink)" stroke-width="6" opacity=".5"/>
      <path d="M90 200 V 160" stroke="var(--red)" stroke-width="5"/><path d="M90 160 L 30 200" stroke="var(--hl-ink)" stroke-width="2" stroke-dasharray="6 5"/><path d="M30 200 H 90" stroke="var(--ink)" stroke-width="6" opacity=".5"/>
      <g ${F} font-weight="700"><text x="98" y="182" font-size="14" fill="var(--red)">1 m</text><text x="60" y="220" text-anchor="middle" font-size="13" fill="var(--ink)">1,5 m</text>
      <text x="460" y="134" font-size="16" fill="var(--pen)">h = ?</text><text x="345" y="220" text-anchor="middle" font-size="13" fill="var(--ink)">30 m</text>
      <text x="200" y="60" text-anchor="middle" font-size="18" fill="var(--ink)">h / 30 = 1 / 1,5 → h = 20 m</text></g>
    </svg>`,
  },
  video: { id: "staL7w-eT58", titulo: "Teorema de Tales, súper fácil", canal: "Daniel Carreón", vistas: 4840130, megusta: 131468, busqueda: "teorema de tales semejanza" },
  quiz: [
    { q: "Dos triángulos tienen lados 4, 6, 8 y 6, 9, 12. ¿Son semejantes?", o: ["Sí, con k = 1,5", "No", "Sí, con k = 2"], a: 0, e: "6/4 = 9/6 = 12/8 = 1,5." },
    { q: "Si la razón de semejanza es 3, el área de la figura grande es…", o: ["3 veces mayor", "6 veces mayor", "9 veces mayor"], a: 2, e: "Las áreas se multiplican por k² = 9." },
    { q: "En un mapa a escala 1 : 25.000, 4 cm son…", o: ["1 km", "100 m", "10 km"], a: 0, e: "4 · 25.000 = 100.000 cm = 1 km." },
    { q: "¿Basta con que dos triángulos tengan dos ángulos iguales para ser semejantes?", o: ["Sí", "No, hacen falta los tres lados", "Solo si son rectángulos"], a: 0, e: "Si dos ángulos son iguales, el tercero también: es un criterio de semejanza." },
    { q: "Una maqueta a escala 1 : 100 tiene un volumen de 2 dm³. ¿Qué volumen tiene el edificio real?", o: ["200 dm³", "20.000 dm³", "2.000.000 dm³"], a: 2, e: "Los volúmenes se multiplican por k³ = 1.000.000." },
  ],
  examen: [
    { q: "Un árbol da una sombra de 12 m cuando una persona de 1,8 m da una de 2,4 m. Altura del árbol:", o: ["9 m", "16 m", "7,2 m"], a: 0, e: "h / 12 = 1,8 / 2,4 → h = 9 m." },
    { q: "Si el perímetro de un polígono se triplica manteniendo la forma, su área…", o: ["se triplica", "se multiplica por 9", "se multiplica por 6"], a: 1, e: "k = 3, área × k² = 9." },
    { q: "Dos rectas secantes cortadas por paralelas dan segmentos 3 y 5 en una, y 6 y x en la otra. x =", o: ["8", "10", "2,5"], a: 1, e: "Tales: 3/5 = 6/x → x = 10." },
  ],
  feynman: ["Qué significa que dos figuras sean semejantes", "Qué dice el teorema de Tales", "Por qué las áreas se multiplican por k² y los volúmenes por k³", "Cómo midió Tales la altura de una pirámide"],
  mapa: mapa("SEMEJANZA", "var(--bac)", [
    ["Figuras semejantes", "misma forma · k = a′/a", "var(--pen)"],
    ["Tales", "paralelas → segmentos proporcionales", "var(--red)"],
    ["Criterios", "2 ángulos · 3 lados · LAL", "var(--leaf)"],
    ["Medidas", "P × k · A × k² · V × k³", "var(--inf)"],
  ], 280),
  tarjetas: [
    ["Razón de semejanza", "El cociente entre lados correspondientes de dos figuras semejantes."],
    ["Teorema de Tales", "Paralelas que cortan a dos secantes determinan segmentos proporcionales."],
    ["Si k = 2, ¿cómo cambia el área?", "Se multiplica por 4 (k²)."],
    ["Escala 1 : 50.000", "1 cm del mapa equivale a 50.000 cm = 500 m reales."],
    ["Criterio más usado para triángulos", "Tener dos ángulos iguales."],
  ],
  familias: ["Un día de sol, medid juntos la altura de un árbol o farola con la sombra y un palo.", "Calculad distancias reales en un mapa de vuestra ciudad con su escala.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido espacial y de la medida: semejanza, teorema de Tales, razón de áreas y volúmenes, escalas (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Salida al patio para medir alturas con sombras o con un espejo en el suelo.", "Comparar áreas y volúmenes de cubos de construcción de distintos tamaños.", "Ampliar un dibujo con una cuadrícula y calcular la razón de áreas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Teorema de Tales, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teorema_de_Tales" },
  ],
  revisado: "2026-11-12",
};
