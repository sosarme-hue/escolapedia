// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Las fuerzas y las leyes de Newton",
  minutos: 35,
  objetivos: ["Representar fuerzas como vectores y calcular la fuerza resultante", "Explicar las tres leyes de Newton con ejemplos", "Aplicar F = m · a en problemas"],
  claves: ["fuerza", "newton (N)", "inercia", "resultante", "acción y reacción", "peso"],
  pregunta: {
    texto: "Vas de pie en el autobús y frena de golpe. Nadie te ha empujado, pero tu cuerpo sale hacia delante. ¿Por qué?",
    respuesta: "Porque tu cuerpo <mark>tiende a seguir moviéndose</mark> a la velocidad que llevaba. El autobús frena, pero sobre ti no actúa ninguna fuerza que te frene (salvo la que hagas al agarrarte). Es la <b>inercia</b>, la primera ley de Newton.",
  },
  bloques: [
    {
      html: `<h3>Qué es una fuerza</h3><p>Una <b>fuerza</b> es cualquier acción capaz de <mark>cambiar el movimiento de un cuerpo o deformarlo</mark>. Se mide en <b>newtons (N)</b> y es un vector: tiene intensidad, dirección y sentido. Cuando actúan varias fuerzas, se suman y se obtiene la <b>fuerza resultante</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Caja con dos fuerzas a la derecha de 30 y 20 newtons y una a la izquierda de 10 newtons; resultante 40 newtons a la derecha">
        <defs>${flecha("nf1", "var(--pen)")}${flecha("nf2", "var(--red)")}${flecha("nf3", "var(--leaf)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="100" y="50" width="60" height="50" rx="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M160 64 H 226" stroke="var(--pen)" stroke-width="4" marker-end="url(#nf1)"/><text x="196" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>30 N</text>
        <path d="M160 88 H 204" stroke="var(--pen)" stroke-width="4" marker-end="url(#nf1)"/><text x="186" y="108" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>20 N</text>
        <path d="M100 75 H 70" stroke="var(--red)" stroke-width="4" marker-end="url(#nf2)"/><text x="72" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--red)" ${F}>10 N</text>
        <path d="M60 145 H 196" stroke="var(--leaf)" stroke-width="5" marker-end="url(#nf3)"/>
        <text x="130" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>resultante: 30 + 20 − 10 = 40 N →</text>
      </svg>`,
    },
    {
      html: `<h3>Primera ley: inercia</h3><p>Si la fuerza resultante sobre un cuerpo es cero, <mark>el cuerpo sigue como estaba</mark>: quieto si estaba quieto, o moviéndose en línea recta a velocidad constante si se movía. Por eso existe el cinturón de seguridad: en un frenazo, tu cuerpo quiere seguir hacia delante.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Disco de hockey deslizando sobre hielo a velocidad constante sin fuerzas">
        <defs>${flecha("nf4", "var(--pen)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="118" width="240" height="14" rx="4" fill="var(--water)" opacity=".3"/>
        ${[40, 110, 180].map((x, i) => `<ellipse cx="${x}" cy="110" rx="18" ry="7" fill="var(--ink)" opacity="${0.35 + i * 0.3}"/>`).join("")}
        <path d="M200 92 H 240" stroke="var(--pen)" stroke-width="3" marker-end="url(#nf4)"/>
        <text x="130" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>sin rozamiento: misma velocidad</text>
        <g ${F} font-size="12" fill="var(--muted)" text-anchor="middle"><text x="40" y="152">t = 0 s</text><text x="110" y="152">t = 1 s</text><text x="180" y="152">t = 2 s</text></g>
      </svg>`,
    },
    {
      html: `<h3>Segunda ley: fuerza, masa y aceleración</h3><p>Cuando la fuerza resultante no es cero, el cuerpo <mark>acelera</mark>. La aceleración es mayor cuanto más fuerza apliques y menor cuanta más masa tenga el cuerpo. Es la ecuación más famosa de la mecánica:</p>
      <div class="formula" aria-label="F igual a m por a"><span>F</span><span class="op">=</span><span>m</span><span class="op">·</span><span>a</span><span class="op" style="font-size:.7em">(N = kg · m/s²)</span></div>
      <p>Ejemplo: empujar un carro de 20 kg con 60 N (sin rozamiento) le da a = 60 / 20 = <b>3 m/s²</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La misma fuerza aplicada a un carro vacío y a uno lleno: el vacío acelera más">
        <defs>${flecha("nf5", "var(--red)")}${flecha("nf6", "var(--leaf)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="30" width="60" height="34" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="82" cy="70" r="6" fill="var(--ink)"/><circle cx="118" cy="70" r="6" fill="var(--ink)"/>
        <path d="M30 47 H 66" stroke="var(--red)" stroke-width="4" marker-end="url(#nf5)"/>
        <path d="M140 47 H 236" stroke="var(--leaf)" stroke-width="4" marker-end="url(#nf6)"/><text x="190" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>a grande</text>
        <rect x="70" y="106" width="60" height="34" rx="4" fill="var(--inf)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="82" cy="146" r="6" fill="var(--ink)"/><circle cx="118" cy="146" r="6" fill="var(--ink)"/>
        <path d="M30 123 H 66" stroke="var(--red)" stroke-width="4" marker-end="url(#nf5)"/>
        <path d="M140 123 H 176" stroke="var(--leaf)" stroke-width="4" marker-end="url(#nf6)"/><text x="200" y="114" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>a pequeña</text>
        <text x="40" y="172" font-size="12" fill="var(--muted)" ${F}>misma F, más masa → menos aceleración</text>
      </svg>`,
    },
    {
      html: `<h3>Tercera ley: acción y reacción</h3><p>Cuando un cuerpo ejerce una fuerza sobre otro, el segundo ejerce sobre el primero <mark>una fuerza igual y de sentido contrario</mark>. Actúan sobre cuerpos distintos, por eso no se anulan. Un cohete empuja los gases hacia abajo y los gases empujan al cohete hacia arriba.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cohete: los gases salen hacia abajo y el cohete sube">
        <defs>${flecha("nf7", "var(--pen)")}${flecha("nf8", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 20 C 146 36, 150 60, 150 100 H 110 C 110 60, 114 36, 130 20 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="130" cy="62" r="9" fill="var(--water)"/>
        <path d="M112 100 L 118 140 L 130 118 L 142 140 L 148 100 Z" fill="var(--sun)" opacity=".9"/>
        <path d="M190 100 V 30" stroke="var(--pen)" stroke-width="4" marker-end="url(#nf7)"/><text x="200" y="70" font-size="12" font-weight="700" fill="var(--pen)" ${F}>sobre el</text><text x="200" y="84" font-size="12" font-weight="700" fill="var(--pen)" ${F}>cohete</text>
        <path d="M70 100 V 166" stroke="var(--red)" stroke-width="4" marker-end="url(#nf8)"/><text x="18" y="130" font-size="12" font-weight="700" fill="var(--red)" ${F}>sobre los</text><text x="18" y="144" font-size="12" font-weight="700" fill="var(--red)" ${F}>gases</text>
      </svg>`,
    },
    {
      html: `<h3>El peso es una fuerza</h3><p>La masa (kg) es la cantidad de materia y no cambia. El <b>peso</b> es la fuerza con que la Tierra te atrae: <mark>P = m · g</mark>, con g = 9,8 m/s². Una persona de 50 kg pesa 50 × 9,8 = <b>490 N</b> en la Tierra, pero solo unos 81 N en la Luna (g = 1,62 m/s²), aunque su masa sigue siendo 50 kg.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Misma masa de 50 kilos: 490 newtons en la Tierra y 81 newtons en la Luna">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="70" cy="150" r="60" fill="var(--water)" opacity=".5"/><circle cx="190" cy="160" r="40" fill="var(--muted)" opacity=".35"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="70" y="40" font-size="14" fill="var(--ink)">Tierra</text><text x="70" y="62" font-size="20" fill="var(--pen)" ${D}>490 N</text>
          <text x="190" y="40" font-size="14" fill="var(--ink)">Luna</text><text x="190" y="62" font-size="20" fill="var(--pen)" ${D}>81 N</text>
          <text x="130" y="90" font-size="13" fill="var(--muted)">masa: 50 kg en los dos</text>
        </g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las tres leyes de un vistazo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tres columnas: inercia, F igual a m por a, y acción y reacción, con un ejemplo cada una">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1ª · Inercia", "ΣF = 0", "sigue quieto o a", "velocidad constante", "el frenazo del bus", "var(--pen)"], ["2ª · Dinámica", "F = m · a", "más fuerza, más", "aceleración", "empujar un carro", "var(--red)"], ["3ª · Acción-reacción", "F₁₂ = −F₂₁", "fuerzas iguales y", "opuestas", "el cohete", "var(--leaf)"]]
        .map(([t, f, l1, l2, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${F}>${t}</text>
          <text x="${115 + i * 206}" y="98" text-anchor="middle" font-size="28" font-weight="700" fill="var(--ink)" ${D}>${f}</text>
          <text x="${115 + i * 206}" y="134" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${l1}</text>
          <text x="${115 + i * 206}" y="152" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${l2}</text>
          <text x="${115 + i * 206}" y="188" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>ejemplo: ${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "86ZNmoAdlNg", titulo: "¿Cómo funcionan las leyes de Newton?", canal: "CuriosaMente", vistas: 4742014, megusta: 119364, busqueda: "leyes de Newton" },
  quiz: [
    { q: "¿En qué unidad se miden las fuerzas en el Sistema Internacional?", o: ["Kilogramo (kg)", "Newton (N)", "Julio (J)"], a: 1, e: "Las fuerzas se miden en newtons. 1 N = 1 kg · m/s²." },
    { q: "Sobre un coche que va a 90 km/h en línea recta y constante, la fuerza resultante es…", o: ["mayor que cero, hacia delante", "cero", "igual a su peso"], a: 1, e: "Si la velocidad no cambia, no hay aceleración y la resultante es cero (primera ley). El motor solo compensa el rozamiento." },
    { q: "Aplicamos 100 N a una caja de 25 kg sin rozamiento. ¿Qué aceleración adquiere?", o: ["4 m/s²", "2 500 m/s²", "0,25 m/s²"], a: 0, e: "a = F / m = 100 / 25 = 4 m/s²." },
    { q: "¿Cuánto pesa en la Tierra un objeto de 10 kg? (g = 9,8 m/s²)", o: ["10 N", "98 N", "9,8 kg"], a: 1, e: "P = m · g = 10 × 9,8 = 98 N. La masa sigue siendo 10 kg." },
    { q: "Si las fuerzas de acción y reacción son iguales y opuestas, ¿por qué no se anulan?", o: ["Porque una siempre es mayor", "Porque actúan sobre cuerpos distintos", "Sí se anulan siempre"], a: 1, e: "Solo se suman fuerzas que actúan sobre el mismo cuerpo. Acción y reacción actúan cada una sobre un cuerpo diferente." },
  ],
  feynman: ["Qué es una fuerza y cómo se calcula la resultante", "La inercia con un ejemplo de la vida diaria", "La fórmula F = m · a y qué significa cada letra", "Por qué acción y reacción no se anulan", "La diferencia entre masa y peso"],
  mapa: mapa("LEYES DE NEWTON", "var(--eso)", [
    ["Fuerza", "vector · se mide en N", "var(--ink)"],
    ["1ª ley: inercia", "ΣF = 0 → v constante", "var(--pen)"],
    ["2ª ley: F = m · a", "más masa → menos aceleración", "var(--red)"],
    ["3ª ley: acción-reacción", "iguales, opuestas, en cuerpos distintos", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Enuncia la primera ley de Newton", "Si la fuerza resultante es cero, el cuerpo sigue en reposo o con movimiento rectilíneo uniforme."],
    ["Fórmula de la segunda ley", "F = m · a (N = kg · m/s²)."],
    ["Enuncia la tercera ley de Newton", "A toda acción le corresponde una reacción igual y de sentido contrario, sobre el otro cuerpo."],
    ["Diferencia entre masa y peso", "La masa es materia (kg) y no cambia; el peso es una fuerza (N): P = m · g."],
    ["¿Qué es la fuerza resultante?", "La suma vectorial de todas las fuerzas que actúan sobre un cuerpo."],
  ],
  familias: ["En el coche, comentad por qué el cinturón os sujeta en un frenazo (inercia).", "Pedidle que calcule su peso en newtons en la Tierra y en la Luna.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La interacción: fuerzas, leyes de Newton, peso y aplicación a situaciones cotidianas (RD 217/2022, Física y Química 4º).",
    ideas: ["Carro de laboratorio con dinamómetro y distintas masas para comprobar F = m · a.", "Globo-cohete en un hilo para la tercera ley.", "Análisis de vídeo a cámara lenta de un frenazo con un muñeco sin cinturón."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Leyes de Newton, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Leyes_de_Newton" },
  ],
  revisado: "2026-11-12",
};
