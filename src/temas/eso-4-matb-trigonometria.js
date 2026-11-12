// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Triángulo rectángulo con ángulo α en el vértice izquierdo.
function tri(x, y, w, h, lab = true) {
  return `<path d="M${x} ${y} L ${x + w} ${y} L ${x + w} ${y - h} Z" fill="var(--paper)" stroke="var(--ink)" stroke-width="2.5"/>
    <path d="M${x + w - 14} ${y} V ${y - 14} H ${x + w}" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <path d="M${x + 34} ${y} A 34 34 0 0 0 ${x + 34 * Math.cos(Math.atan(h / w))} ${y - 34 * Math.sin(Math.atan(h / w))}" fill="none" stroke="var(--red)" stroke-width="2.5"/>
    <text x="${x + 42}" y="${y - 8}" font-size="16" font-weight="700" fill="var(--red)" ${F}>α</text>
    ${lab ? `<text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>cateto contiguo</text>
    <text x="${x + w + 8}" y="${y - h / 2}" font-size="13" font-weight="700" fill="var(--pen)" ${F}>cateto</text>
    <text x="${x + w + 8}" y="${y - h / 2 + 15}" font-size="13" font-weight="700" fill="var(--pen)" ${F}>opuesto</text>
    <text x="${x + w / 2 - 22}" y="${y - h / 2 - 8}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--inf)" ${F} transform="rotate(${(-Math.atan(h / w) * 180) / Math.PI} ${x + w / 2 - 22} ${y - h / 2 - 8})">hipotenusa</text>` : ""}`;
}

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Trigonometría",
  minutos: 40,
  objetivos: ["Definir seno, coseno y tangente en un triángulo rectángulo", "Usar la relación fundamental sen² α + cos² α = 1", "Resolver triángulos y problemas de alturas y distancias"],
  claves: ["seno", "coseno", "tangente", "hipotenusa", "cateto", "radián"],
  pregunta: {
    texto: "Desde 20 metros de distancia ves la punta de un árbol con un ángulo de 35° sobre el suelo. ¿Puedes saber su altura sin subirte?",
    respuesta: "Sí. La trigonometría relaciona <mark>ángulos y lados</mark>: altura = 20 · tan 35° ≈ 20 · 0,70 = <b>14 metros</b>. Así midieron los griegos la altura de las pirámides y hoy se calculan distancias con GPS.",
  },
  bloques: [
    {
      html: `<h3>Los lados del triángulo rectángulo</h3><p>En un triángulo rectángulo, el lado más largo, opuesto al ángulo recto, es la <b>hipotenusa</b>. Los otros dos son los <b>catetos</b>. Respecto a un ángulo agudo α, uno es el <mark>cateto opuesto</mark> (enfrente de α) y el otro el <mark>cateto contiguo</mark> (al lado de α).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo rectángulo con el ángulo alfa, la hipotenusa, el cateto opuesto y el cateto contiguo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${tri(24, 142, 160, 110)}</svg>`,
    },
    {
      html: `<h3>Seno, coseno y tangente</h3><p>Son <mark>cocientes entre lados</mark> que solo dependen del ángulo, no del tamaño del triángulo. Truco para recordarlos: <b>SOH-CAH-TOA</b>.</p>
      <div class="formula"><span>sen α = <span style="color:var(--pen)">opuesto</span> / <span style="color:var(--inf)">hipotenusa</span></span></div>
      <div class="formula"><span>cos α = <span style="color:var(--leaf)">contiguo</span> / <span style="color:var(--inf)">hipotenusa</span></span></div>
      <div class="formula"><span>tan α = <span style="color:var(--pen)">opuesto</span> / <span style="color:var(--leaf)">contiguo</span></span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos triángulos semejantes de distinto tamaño con el mismo ángulo: mismas razones">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>${tri(20, 150, 96, 66, false)}${tri(124, 150, 120, 82, false)}
        <text x="130" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>mismo α → mismas razones</text>
      </svg>`,
    },
    {
      html: `<h3>Ángulos que conviene saber</h3><p>Algunos ángulos tienen valores exactos que se usan mucho. Con la calculadora en modo <b>DEG</b> (grados) puedes comprobarlos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de valores de seno, coseno y tangente para 30, 45 y 60 grados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="14" text-anchor="middle">
          <g font-weight="700" fill="var(--muted)"><text x="40" y="34">α</text><text x="100" y="34">30°</text><text x="160" y="34">45°</text><text x="220" y="34">60°</text></g>
          <path d="M14 44 H 246" stroke="var(--line)" stroke-width="2"/>
          <g fill="var(--ink)">
            <text x="40" y="76" font-weight="700" fill="var(--pen)">sen</text><text x="100" y="76">1/2</text><text x="160" y="76">√2/2</text><text x="220" y="76">√3/2</text>
            <text x="40" y="116" font-weight="700" fill="var(--leaf)">cos</text><text x="100" y="116">√3/2</text><text x="160" y="116">√2/2</text><text x="220" y="116">1/2</text>
            <text x="40" y="156" font-weight="700" fill="var(--red)">tan</text><text x="100" y="156">√3/3</text><text x="160" y="156">1</text><text x="220" y="156">√3</text>
          </g>
        </g>
      </svg>`,
    },
    {
      html: `<h3>La relación fundamental</h3><p>Por el teorema de Pitágoras, para cualquier ángulo se cumple:</p><div class="formula"><span>sen² α + cos² α = 1</span><span class="op">y</span><span>tan α = sen α / cos α</span></div><p>Si conoces una razón, puedes calcular las otras dos. Ejemplo: si sen α = 0,6 y α es agudo, cos α = √(1 − 0,36) = <b>0,8</b> y tan α = 0,6 / 0,8 = <b>0,75</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circunferencia de radio 1 con un punto de coordenadas coseno y seno">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M40 140 H 230 M70 170 V 14" stroke="var(--line)" stroke-width="2"/>
        <path d="M70 140 m -0 0" />
        <path d="M190 140 A 120 120 0 0 0 70 20" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>
        <path d="M70 140 L 166 68" stroke="var(--inf)" stroke-width="3"/>
        <path d="M166 68 V 140" stroke="var(--pen)" stroke-width="3"/><path d="M70 140 H 166" stroke="var(--leaf)" stroke-width="3"/>
        <circle cx="166" cy="68" r="5" fill="var(--red)"/>
        <g ${F} font-size="13" font-weight="700"><text x="104" y="96" fill="var(--inf)">1</text><text x="192" y="104" fill="var(--pen)">sen α</text><text x="100" y="158" fill="var(--leaf)">cos α</text><text x="96" y="132" fill="var(--red)">α</text></g>
      </svg>`,
    },
    {
      html: `<h3>Resolver problemas</h3><p>Para calcular alturas y distancias: <mark>dibuja el triángulo, marca el ángulo y elige la razón</mark> que relaciona el dato que tienes con el que buscas. En el árbol de la pregunta, conocemos el contiguo (20 m) y buscamos el opuesto (altura): la razón que los une es la tangente.</p>
      <div class="formula"><span>tan 35° = h / 20</span><span class="op">→</span><span>h = 20 · 0,70 ≈ 14 m</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de altura h visto desde 20 metros con un ángulo de 35 grados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/>
        <rect x="196" y="96" width="10" height="54" fill="var(--inf)"/>
        <circle cx="201" cy="74" r="30" fill="var(--leaf)"/>
        <path d="M30 150 L 201 44" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 5"/>
        <path d="M62 150 A 32 32 0 0 0 57 133" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="13" font-weight="700"><text x="68" y="143" fill="var(--red)">35°</text><text x="110" y="168" fill="var(--leaf)">20 m</text><text x="150" y="110" fill="var(--pen)">h ?</text></g>
        <circle cx="30" cy="146" r="5" fill="var(--ink)"/>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Qué razón uso: guía rápida",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Guía: si conozco hipotenusa y busco opuesto uso seno; hipotenusa y contiguo, coseno; opuesto y contiguo, tangente">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["opuesto ↔ hipotenusa", "SENO", "sen α = O / H", "var(--pen)"], ["contiguo ↔ hipotenusa", "COSENO", "cos α = C / H", "var(--leaf)"], ["opuesto ↔ contiguo", "TANGENTE", "tan α = O / C", "var(--red)"]]
        .map(([q, n, f, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="56" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>si el problema une</text>
          <text x="${115 + i * 206}" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${q}</text>
          <text x="${115 + i * 206}" y="130" text-anchor="middle" font-size="26" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="170" text-anchor="middle" font-size="16" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "7pUi5lvLf7c", titulo: "¿Qué son las razones trigonométricas?", canal: "Matemáticas profe Alex", vistas: 2233972, megusta: 48875, busqueda: "razones trigonométricas" },
  quiz: [
    { q: "En un triángulo rectángulo, el seno de un ángulo es…", o: ["contiguo / hipotenusa", "opuesto / hipotenusa", "opuesto / contiguo"], a: 1, e: "SOH: Seno = Opuesto / Hipotenusa." },
    { q: "Si la hipotenusa mide 10 cm y el ángulo es de 30°, ¿cuánto mide el cateto opuesto?", o: ["5 cm", "8,66 cm", "20 cm"], a: 0, e: "opuesto = 10 · sen 30° = 10 · 0,5 = 5 cm." },
    { q: "Si sen α = 0,8 y α es agudo, ¿cuánto vale cos α?", o: ["0,2", "0,6", "1,25"], a: 1, e: "cos α = √(1 − 0,64) = √0,36 = 0,6." },
    { q: "¿Cuánto vale tan 45°?", o: ["0", "1", "√2/2"], a: 1, e: "En 45° los dos catetos son iguales, así que opuesto / contiguo = 1." },
    { q: "Una escalera de 5 m apoyada en la pared forma 60° con el suelo. ¿A qué altura llega?", o: ["2,5 m", "4,33 m", "8,66 m"], a: 1, e: "La escalera es la hipotenusa y la altura el cateto opuesto: 5 · sen 60° ≈ 5 · 0,866 = 4,33 m." },
  ],
  feynman: ["Qué son la hipotenusa, el cateto opuesto y el contiguo", "Las definiciones de seno, coseno y tangente", "La relación fundamental y para qué sirve", "Cómo elegir la razón en un problema de alturas"],
  mapa: mapa("TRIGONOMETRÍA", "var(--bac)", [
    ["Triángulo rectángulo", "hipotenusa · opuesto · contiguo", "var(--ink)"],
    ["Razones", "sen = O/H · cos = C/H · tan = O/C", "var(--pen)"],
    ["Relación fundamental", "sen² α + cos² α = 1", "var(--leaf)"],
    ["Problemas", "dibuja, marca α, elige razón", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Definición de seno", "sen α = cateto opuesto / hipotenusa."],
    ["Definición de coseno", "cos α = cateto contiguo / hipotenusa."],
    ["Definición de tangente", "tan α = cateto opuesto / cateto contiguo = sen α / cos α."],
    ["Relación fundamental de la trigonometría", "sen² α + cos² α = 1."],
    ["Valores de 30°", "sen 30° = 1/2 · cos 30° = √3/2 · tan 30° = √3/3."],
  ],
  familias: ["En un paseo, pedidle que calcule la altura de una farola con el ángulo de una app de nivel del móvil.", "Preguntadle por qué el seno no depende del tamaño del triángulo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sentido de la medida y sentido espacial: razones trigonométricas y resolución de triángulos (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Construir un clinómetro con transportador, pajita y plomada y medir alturas del patio.", "GeoGebra: mover el vértice y comprobar que las razones solo dependen del ángulo.", "Problemas de doble observación (dos ángulos desde dos puntos)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Trigonometría, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Trigonometr%C3%ADa" },
  ],
  revisado: "2026-11-12",
};
