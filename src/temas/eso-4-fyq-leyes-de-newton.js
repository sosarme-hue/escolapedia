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
        <text x="130" y="172" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>misma F, más masa → menos aceleración</text>
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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular fuerzas de rozamiento, normales y elásticas", "Resolver problemas de dinámica con varias fuerzas siguiendo un método"],
  tras: {
    "Qué es una fuerza": [
      { html: `<h3>Sumar fuerzas: la resultante</h3><p>Como las fuerzas son vectores, no basta con sumar sus números: hay que tener en cuenta su dirección y sentido. Si dos fuerzas tienen la <b>misma dirección y sentido</b>, se suman (30 N + 20 N = 50 N). Si tienen la <b>misma dirección y sentido contrario</b>, se restan y la resultante va hacia la mayor (30 N − 20 N = 10 N hacia la de 30). Si son <b>perpendiculares</b>, la resultante es la hipotenusa del triángulo que forman: <mark>R = √(F₁² + F₂²)</mark>. Por ejemplo, 30 N hacia el este y 40 N hacia el norte dan 50 N. Con más fuerzas en otras direcciones, se descompone cada una en sus componentes x e y, se suman por separado y al final se aplica Pitágoras.</p>`, video: { id: "m0_gQ9RBUZc", titulo: "Calcular fuerza resultante", canal: "Susi Profe", vistas: 931414 } },
      { html: `<h3>Fuerzas elásticas: la ley de Hooke</h3><p>Al tirar de un muelle se alarga, y al soltarlo recupera su forma: es un cuerpo <b>elástico</b>. Robert Hooke descubrió que, mientras no se pase de su límite, el alargamiento es <mark>directamente proporcional a la fuerza</mark>: F = k · Δx, donde Δx es el alargamiento (en m) y k la constante elástica del muelle (en N/m), que indica lo duro que es. Un muelle con k = 200 N/m se alarga 0,1 m con 20 N y 0,2 m con 40 N. En esta ley se basan los <b>dinamómetros</b>, que miden fuerzas con un muelle y una escala. Si se supera el <b>límite de elasticidad</b>, el muelle queda deformado para siempre.</p>` },
    ],
    "Segunda ley: fuerza, masa y aceleración": [
      { html: `<h3>La fuerza de rozamiento</h3><p>Cuando un cuerpo se desliza o intenta deslizarse sobre otro, aparece una fuerza que se opone al movimiento: el <b>rozamiento</b>. Se debe a las pequeñas irregularidades de las superficies y depende de dos cosas: del tipo de superficies, expresado por el <b>coeficiente de rozamiento</b> μ (sin unidades), y de lo fuerte que se aprietan una contra otra, la <b>fuerza normal</b> N. En una superficie horizontal, N es igual al peso, así que <mark>Fr = μ · N = μ · m · g</mark>. Hielo y acero tienen μ ≈ 0,02; goma sobre asfalto seco, μ ≈ 0,8. El rozamiento a veces molesta (desgasta piezas y gasta energía), pero sin él no podríamos andar, frenar ni sujetar un lápiz.</p>`, video: { id: "xzBAbMd9Ze8", titulo: "Fuerza de rozamiento: ejercicios resueltos", canal: "Matemóvil", vistas: 1240856 } },
      { html: `<h3>Resolver un problema de dinámica</h3><p>Los problemas de fuerzas se resuelven siempre con el mismo método: 1) dibuja el cuerpo y <b>todas las fuerzas</b> que actúan sobre él (peso, normal, rozamiento, tensión de una cuerda, la fuerza que aplicamos); 2) elige como sentido positivo el del movimiento; 3) calcula la <b>fuerza resultante</b> sumando las que van a favor y restando las que van en contra; 4) aplica <mark>ΣF = m · a</mark> y despeja lo que te pidan; 5) si te preguntan por velocidades o distancias, usa la aceleración en las ecuaciones del MRUA. Las fuerzas verticales (peso y normal) se anulan en una superficie horizontal y no aceleran el cuerpo hacia los lados.</p>` },
    ],
    "El peso es una fuerza": [
      { html: `<h3>Fuerza centrípeta</h3><p>Para que un cuerpo describa una curva hace falta una fuerza que tire de él hacia el centro: la <b>fuerza centrípeta</b>. No es una fuerza nueva, sino el papel que hace otra fuerza: en un coche que toma una curva, es el rozamiento de las ruedas con el suelo; en una piedra atada a una cuerda, la tensión de la cuerda; en la Luna, la gravedad de la Tierra. Su valor es <mark>Fc = m · v² / R</mark>. Si desaparece (la cuerda se rompe o el suelo está helado), el cuerpo sigue en línea recta por inercia, tangente a la curva. Por eso las curvas de las carreteras tienen límites de velocidad y a veces están peraltadas, inclinadas hacia dentro.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Sobre una caja actúan 60 N hacia la derecha y 40 N hacia arriba (perpendiculares). Calcula la resultante.", pasos: ["Como son perpendiculares, se usa Pitágoras.", "R = √(60² + 40²) = √(3.600 + 1.600) = √5.200.", "R ≈ 72,1 N."], resultado: "R ≈ 72 N, inclinada hacia arriba a la derecha." },
    { enunciado: "Empujas una caja de 20 kg con 100 N sobre un suelo con μ = 0,3. Calcula su aceleración.", pasos: ["Fuerzas horizontales: 100 N a favor y el rozamiento en contra.", "Fr = μ·m·g = 0,3 · 20 · 9,8 = 58,8 N.", "ΣF = 100 − 58,8 = 41,2 N.", "a = ΣF / m = 41,2 / 20 = 2,06 m/s²."], resultado: "a ≈ 2,1 m/s²." },
    { enunciado: "Un muelle de constante k = 250 N/m se alarga 8 cm al colgarle una pesa. ¿Cuál es la masa de la pesa?", pasos: ["Δx = 8 cm = 0,08 m.", "F = k · Δx = 250 · 0,08 = 20 N. Esa fuerza es el peso de la pesa.", "m = P / g = 20 / 9,8 ≈ 2,04 kg."], resultado: "m ≈ 2 kg." },
  ],
  errores: [
    "Sumar fuerzas como números sin tener en cuenta su dirección y sentido.",
    "Pensar que si un cuerpo se mueve, tiene que haber una fuerza en el sentido del movimiento (si va a velocidad constante, la resultante es cero).",
    "Creer que la acción y la reacción se anulan: actúan sobre cuerpos distintos.",
    "Confundir masa (kg) con peso (N).",
    "Poner el rozamiento a favor del movimiento: siempre se opone.",
    "Usar el alargamiento en centímetros en la ley de Hooke cuando k está en N/m.",
  ],
  ejercicios: [
    { q: "Dos personas tiran de un carro en el mismo sentido con 120 N y 80 N, y una tercera en sentido contrario con 150 N. Calcula la resultante.", sol: "120 + 80 − 150 = 50 N en el sentido de las dos primeras." },
    { q: "Calcula la resultante de dos fuerzas perpendiculares de 9 N y 12 N.", sol: "R = √(81 + 144) = √225 = 15 N." },
    { q: "Un coche de 1.000 kg acelera a 2 m/s². ¿Qué fuerza neta actúa sobre él?", sol: "F = m · a = 1.000 · 2 = 2.000 N." },
    { q: "Una fuerza de 50 N actúa sobre un cuerpo de 10 kg en reposo durante 4 s, sin rozamiento. ¿Qué velocidad alcanza?", sol: "a = 50 / 10 = 5 m/s². v = a · t = 5 · 4 = 20 m/s." },
    { q: "Calcula el rozamiento sobre un trineo de 30 kg si μ = 0,1.", sol: "Fr = 0,1 · 30 · 9,8 = 29,4 N." },
    { q: "¿Qué fuerza hay que hacer para mover a velocidad constante una caja de 50 kg con μ = 0,4?", sol: "A velocidad constante ΣF = 0: hay que igualar el rozamiento, F = 0,4 · 50 · 9,8 = 196 N." },
    { q: "Un muelle se alarga 5 cm con 10 N. ¿Cuál es su constante? ¿Cuánto se alargará con 30 N?", sol: "k = 10 / 0,05 = 200 N/m. Con 30 N: Δx = 30 / 200 = 0,15 m = 15 cm." },
    { q: "Explica con la tercera ley cómo andamos.", sol: "Al andar empujamos el suelo hacia atrás con el pie; el suelo nos empuja hacia delante con una fuerza igual y opuesta. Sin rozamiento (en hielo) no podríamos empujar el suelo." },
    { q: "Un coche de 1.200 kg toma una curva de 50 m de radio a 15 m/s. ¿Qué fuerza centrípeta necesita? ¿Quién la proporciona?", sol: "Fc = 1.200 · 225 / 50 = 5.400 N. La proporciona el rozamiento entre los neumáticos y el asfalto." },
    { q: "Si en un autobús que arranca de golpe te vas hacia atrás, ¿qué ley lo explica? ¿Te empuja alguna fuerza?", sol: "La primera ley (inercia): tu cuerpo tiende a seguir en reposo mientras el autobús acelera. No hay ninguna fuerza que te empuje hacia atrás; es el autobús el que avanza bajo tus pies." },
  ],
  quiz: [
    { q: "La resultante de 6 N y 8 N perpendiculares es…", o: ["14 N", "10 N", "2 N"], a: 1, e: "√(36 + 64) = 10." },
    { q: "La fuerza de rozamiento depende de…", o: ["la velocidad del cuerpo", "el coeficiente μ y la fuerza normal", "el color de la superficie"], a: 1, e: "Fr = μ · N." },
    { q: "En la ley de Hooke, si la fuerza se duplica, el alargamiento…", o: ["se duplica", "se reduce a la mitad", "no cambia"], a: 0, e: "Son directamente proporcionales." },
    { q: "Si un cuerpo se mueve a velocidad constante en línea recta, la fuerza resultante es…", o: ["cero", "igual al peso", "en el sentido del movimiento"], a: 0, e: "Primera ley de Newton." },
    { q: "En un coche que toma una curva, la fuerza centrípeta la proporciona…", o: ["el motor", "el rozamiento de las ruedas", "el peso"], a: 1, e: "Sin rozamiento, el coche seguiría recto." },
  ],
  tarjetas: [
    ["Resultante de fuerzas perpendiculares", "R = √(F₁² + F₂²)."],
    ["Ley de Hooke", "F = k · Δx: el alargamiento es proporcional a la fuerza."],
    ["Fuerza de rozamiento", "Fr = μ · m · g en una superficie horizontal; se opone al movimiento."],
  ],
});
