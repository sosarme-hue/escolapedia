// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Fuerzas en fluidos: presión",
  minutos: 40,
  objetivos: ["Definir la presión y calcularla en sólidos y fluidos", "Aplicar el principio fundamental de la hidrostática y el de Pascal", "Explicar la flotación con el principio de Arquímedes y la presión atmosférica"],
  claves: ["presión", "pascal (Pa)", "hidrostática", "principio de Pascal", "empuje", "presión atmosférica"],
  pregunta: {
    texto: "Un barco de acero pesa miles de toneladas y flota; un clavo de acero se hunde enseguida. ¿Cómo puede ser?",
    respuesta: "Por el <mark>principio de Arquímedes</mark>: el agua empuja hacia arriba con una fuerza igual al peso del agua que desaloja. El barco tiene forma hueca y <b>desaloja muchísima agua</b>, así que el empuje iguala su peso. El clavo, macizo y pequeño, desaloja muy poca.",
  },
  bloques: [
    {
      html: `<h3>Qué es la presión</h3><p>La <b>presión</b> mide cómo se reparte una fuerza sobre una superficie:</p>
      <div class="formula"><span>p = F / S</span><span class="op">(</span><span>Pa = N/m²</span><span class="op">)</span></div>
      <p>Con la <mark>misma fuerza</mark>, cuanto <mark>menor es la superficie, mayor es la presión</mark>. Por eso un cuchillo afilado corta, unas raquetas de nieve evitan que te hundas y un tacón fino marca el suelo más que una zapatilla.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Misma persona sobre la nieve con botas y con raquetas: con raquetas se hunde menos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="120" width="240" height="50" fill="var(--water)" opacity=".2"/>
        ${[[70, 22, 30, "se hunde"], [190, 70, 6, "no se hunde"]].map(([x, w, h, t]) => `<circle cx="${x}" cy="44" r="12" fill="var(--sun)"/><rect x="${x - 10}" y="58" width="20" height="40" rx="6" fill="var(--pen)"/><path d="M${x - 6} 98 V ${116 + h} M${x + 6} 98 V ${116 + h}" stroke="var(--ink)" stroke-width="4"/><rect x="${x - w / 2}" y="${116 + h}" width="${w}" height="6" rx="3" fill="var(--ink)"/><text x="${x}" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Presión en los líquidos</h3><p>Un líquido en reposo empuja en <b>todas las direcciones</b> y la presión <mark>aumenta con la profundidad</mark>. Es el <b>principio fundamental de la hidrostática</b>:</p>
      <div class="formula"><span>p = d · g · h</span></div>
      <p>(d: densidad del líquido; h: profundidad). A 10 m bajo el agua del mar la presión aumenta unos 100 000 Pa, como si llevaras encima una atmósfera más. Por eso los submarinos tienen paredes tan gruesas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Depósito con agujeros a distintas alturas: el chorro más bajo sale con más fuerza">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="24" width="60" height="140" fill="var(--water)" opacity=".4" stroke="var(--ink)" stroke-width="2.5"/>
        ${[[60, 40], [100, 80], [140, 130]].map(([y, l], i) => `<path d="M100 ${y} Q ${100 + l * 0.6} ${y} ${100 + l} 164" fill="none" stroke="var(--water)" stroke-width="${3 + i}"/>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="12" y="64" fill="var(--muted)">poca</text><text x="8" y="144" fill="var(--red)">mucha</text></g>
      </svg>`,
    },
    {
      html: `<h3>El principio de Pascal</h3><p>«La presión que se ejerce en un punto de un líquido encerrado <mark>se transmite igual a todos sus puntos</mark>». En una <b>prensa hidráulica</b>, una fuerza pequeña sobre un émbolo pequeño se convierte en una fuerza grande sobre un émbolo grande:</p>
      <div class="formula"><span>F₁ / S₁ = F₂ / S₂</span></div>
      <p>Así funcionan los frenos del coche, los elevadores de los talleres y las excavadoras.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Prensa hidráulica: fuerza pequeña en el émbolo pequeño levanta un coche en el émbolo grande">
        <defs>${flecha("pf1", "var(--red)")}${flecha("pf2", "var(--leaf)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 60 V 150 H 230 V 70 M60 60 V 120 H 150 V 70" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M32 92 H 58 V 122 H 150 V 72 H 228 V 148 H 32 Z" fill="var(--water)" opacity=".4"/>
        <rect x="30" y="86" width="30" height="8" fill="var(--ink)"/><rect x="150" y="64" width="80" height="8" fill="var(--ink)"/>
        <rect x="160" y="40" width="60" height="18" rx="5" fill="var(--sun)"/><circle cx="172" cy="60" r="5" fill="var(--ink)"/><circle cx="208" cy="60" r="5" fill="var(--ink)"/>
        <path d="M45 40 V 80" stroke="var(--red)" stroke-width="3.5" marker-end="url(#pf1)"/><path d="M240 100 V 50" stroke="var(--leaf)" stroke-width="4" marker-end="url(#pf2)"/>
        <g ${F} font-size="12" font-weight="700"><text x="54" y="40" fill="var(--red)">F₁ pequeña</text><text x="226" y="112" text-anchor="end" fill="var(--leaf)">F₂ grande</text></g>
      </svg>`,
    },
    {
      html: `<h3>El principio de Arquímedes</h3><p>Todo cuerpo sumergido en un fluido recibe un <b>empuje</b> vertical hacia arriba igual al <mark>peso del fluido que desaloja</mark>:</p>
      <div class="formula"><span>E = d_fluido · g · V_sumergido</span></div>
      <p>Si el peso es mayor que el empuje, el cuerpo se hunde; si es menor, sube y <b>flota</b>. En resumen: flota lo que es <b>menos denso</b> que el líquido. El hielo (0,92 g/cm³) flota en el agua (1 g/cm³) y deja fuera un 8 %.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres cuerpos en agua: uno flota, otro queda entre dos aguas y otro se hunde">
        <defs>${flecha("pf3", "var(--leaf)")}${flecha("pf4", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="50" width="240" height="120" rx="6" fill="var(--water)" opacity=".3"/>
        <rect x="30" y="38" width="44" height="30" rx="4" fill="var(--sun)"/><rect x="108" y="84" width="44" height="30" rx="4" fill="var(--leaf)"/><rect x="186" y="134" width="44" height="30" rx="4" fill="var(--muted)"/>
        <path d="M60 52 V 24" stroke="var(--leaf)" stroke-width="3" marker-end="url(#pf3)"/><path d="M44 54 V 82" stroke="var(--red)" stroke-width="3" marker-end="url(#pf4)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="52" y="100" fill="var(--ink)">flota</text><text x="130" y="132" fill="var(--ink)">equilibrio</text><text x="208" y="124" fill="var(--ink)">se hunde</text></g>
      </svg>`,
    },
    {
      html: `<h3>La presión atmosférica</h3><p>El aire también pesa: la columna de aire que tenemos encima ejerce la <b>presión atmosférica</b>, unos <mark>101 300 Pa = 1 atm = 760 mmHg</mark> al nivel del mar. Torricelli la midió en 1643 con un tubo de mercurio. Disminuye con la altitud (en la cima del Everest es un tercio) y sus cambios ayudan a predecir el tiempo: altas presiones (anticiclones) suelen traer buen tiempo y bajas presiones (borrascas), lluvia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento de Torricelli: columna de mercurio de 760 milímetros">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="130" width="100" height="36" rx="4" fill="var(--muted)" opacity=".5"/>
        <rect x="80" y="20" width="20" height="130" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="82" y="44" width="16" height="106" fill="var(--muted)"/>
        <path d="M108 44 H 120 M108 150 H 120 M114 44 V 150" stroke="var(--red)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700"><text x="124" y="100" fill="var(--red)">760 mm</text><text x="150" y="40" fill="var(--ink)">vacío arriba</text><text x="150" y="160" fill="var(--pen)">el aire empuja</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Los tres principios de los fluidos",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Hidrostática, Pascal y Arquímedes con su fórmula y una aplicación">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Hidrostática", "p = d · g · h", "más hondo, más presión", "presas y submarinos", "var(--pen)"], ["Pascal", "F₁/S₁ = F₂/S₂", "la presión se transmite", "frenos y gatos hidráulicos", "var(--red)"], ["Arquímedes", "E = d · g · V", "empuje = peso desalojado", "barcos y globos", "var(--leaf)"]]
        .map(([n, f, d, a, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="56" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${F}>${f}</text>
          <text x="${115 + i * 206}" y="138" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${d}</text>
          <text x="${115 + i * 206}" y="176" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${a}</text>`).join("")}
    </svg>`,
  },
  video: { id: "MyybIRPX010", titulo: "El principio de Pascal o cómo multiplicar tu fuerza", canal: "CuriosaMente", vistas: 3282829, megusta: 0, busqueda: "presión hidrostática principio de Arquímedes" },
  quiz: [
    { q: "Una caja de 600 N se apoya sobre una cara de 2 m². ¿Qué presión ejerce?", o: ["300 Pa", "1 200 Pa", "602 Pa"], a: 0, e: "p = F / S = 600 / 2 = 300 Pa." },
    { q: "¿Por qué corta mejor un cuchillo afilado?", o: ["Porque pesa más", "Porque la superficie es menor y la presión mayor", "Porque el filo es más duro"], a: 1, e: "Con la misma fuerza, menos superficie significa más presión." },
    { q: "La presión en un líquido…", o: ["es igual a cualquier profundidad", "aumenta con la profundidad", "disminuye con la profundidad"], a: 1, e: "p = d · g · h: crece con h." },
    { q: "Un cuerpo flota en agua si…", o: ["es más denso que el agua", "es menos denso que el agua", "pesa menos de 1 kg"], a: 1, e: "Si su densidad media es menor, el empuje puede igualar su peso antes de hundirse del todo." },
    { q: "¿Cuánto vale aproximadamente la presión atmosférica al nivel del mar?", o: ["1 Pa", "101 300 Pa", "9,8 Pa"], a: 1, e: "1 atm = 101 300 Pa = 760 mmHg." },
  ],
  examen: [
    { q: "¿Qué presión soporta un buceador a 5 m en agua dulce, sin contar la atmosférica? (d = 1000 kg/m³, g = 9,8)", o: ["49 000 Pa", "4 900 Pa", "5 000 Pa"], a: 0, e: "p = 1000 · 9,8 · 5 = 49 000 Pa." },
    { q: "En una prensa hidráulica, S₂ es 50 veces mayor que S₁. Si aplicamos 20 N en el émbolo pequeño, ¿qué fuerza obtenemos?", o: ["70 N", "1 000 N", "0,4 N"], a: 1, e: "F₂ = F₁ · S₂ / S₁ = 20 · 50 = 1 000 N." },
    { q: "Un objeto de 2 L se sumerge entero en agua. ¿Qué empuje recibe? (g = 9,8)", o: ["2 N", "19,6 N", "196 N"], a: 1, e: "Desaloja 2 L = 2 kg de agua: E = 2 · 9,8 = 19,6 N." },
  ],
  feynman: ["Qué es la presión y por qué depende de la superficie", "Por qué la presión aumenta con la profundidad", "Cómo multiplica la fuerza una prensa hidráulica", "Por qué flota un barco de acero", "Qué midió Torricelli"],
  mapa: mapa("FLUIDOS Y PRESIÓN", "var(--eso)", [
    ["Presión", "p = F/S · Pa", "var(--ink)"],
    ["Hidrostática", "p = d·g·h", "var(--pen)"],
    ["Pascal y Arquímedes", "se transmite · empuje", "var(--red)"],
    ["Atmosférica", "1 atm = 101 300 Pa", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Fórmula de la presión y su unidad", "p = F / S; pascal (Pa = N/m²)."],
    ["Principio fundamental de la hidrostática", "p = d · g · h: la presión crece con la profundidad y la densidad."],
    ["Enuncia el principio de Pascal", "La presión aplicada a un fluido encerrado se transmite por igual a todos sus puntos."],
    ["Enuncia el principio de Arquímedes", "Un cuerpo sumergido recibe un empuje hacia arriba igual al peso del fluido desalojado."],
    ["1 atm en pascales y en mmHg", "101 300 Pa = 760 mmHg."],
  ],
  familias: ["Meted un huevo en agua y añadid sal poco a poco hasta que flote: comentad qué ha cambiado.", "Llenad una botella de plástico con agujeros a distintas alturas y mirad qué chorro llega más lejos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La interacción: presión, principios de la hidrostática, de Pascal y de Arquímedes, y presión atmosférica (RD 217/2022, Física y Química 4º).",
    ideas: ["Ludión de Descartes con una botella y un capuchón de bolígrafo.", "Prensa hidráulica con dos jeringas de distinto diámetro unidas con un tubo.", "Medir el empuje con un dinamómetro sumergiendo objetos en agua y en agua salada."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Principio de Arquímedes, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Principio_de_Arqu%C3%ADmedes" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar el principio de los vasos comunicantes y el experimento de Torricelli", "Decidir si un cuerpo flota y qué parte queda sumergida"],
  tras: {
    "Qué es la presión": [
      { html: `<h3>Densidad y unidades de presión</h3><p>Para estudiar los fluidos necesitamos la <b>densidad</b>, la masa por unidad de volumen: d = m / V. El agua tiene 1.000 kg/m³ (1 g/cm³), el aceite unos 920 kg/m³ y el mercurio 13.600 kg/m³. La presión se mide en el SI en <b>pascales</b> (1 Pa = 1 N/m²), una unidad muy pequeña: una hoja de papel sobre la mesa ejerce alrededor de 1 Pa. Por eso se usan también otras unidades: la <b>atmósfera</b> (1 atm = 101.300 Pa), el <b>milímetro de mercurio</b> (1 atm = 760 mmHg), el <b>bar</b> (100.000 Pa) y el <mark>hectopascal</mark> (hPa), que usan los mapas del tiempo: la presión normal al nivel del mar es 1.013 hPa.</p>` },
    ],
    "Presión en los líquidos": [
      { html: `<h3>Vasos comunicantes</h3><p>Si varios recipientes están unidos por la base y se llenan con el mismo líquido, este alcanza <mark>la misma altura en todos</mark>, sea cual sea su forma. La razón es que, en el equilibrio, la presión en el fondo debe ser igual en todos los puntos que están a la misma profundidad. Este principio explica por qué el agua de un depósito situado en lo alto de un pueblo sube por las tuberías hasta los pisos de las casas, cómo funcionan los niveles de agua de los albañiles y por qué los sifones de los fregaderos siempre conservan agua. Si los líquidos son distintos y no se mezclan, el más denso queda a menos altura.</p>`, video: { id: "wUKZk0WWZzQ", titulo: "Vasos comunicantes: interpretación de su funcionamiento", canal: "Julio Germán Rodríguez", vistas: 108014 } },
    ],
    "El principio de Arquímedes": [
      { html: `<h3>Flotar o hundirse</h3><p>Sobre un cuerpo sumergido actúan dos fuerzas: su <b>peso</b> hacia abajo y el <b>empuje</b> hacia arriba. Si el empuje es mayor que el peso, el cuerpo sube y <b>flota</b>; si es menor, se <b>hunde</b>; si son iguales, queda en equilibrio dentro del líquido, como un submarino. Comparando densidades es más rápido: un cuerpo flota si su densidad media es <mark>menor que la del líquido</mark>. Un barco de acero flota porque su casco está lleno de aire y su densidad media es menor que la del agua. Cuando un cuerpo flota, se hunde justo lo necesario para que el empuje iguale su peso: la fracción sumergida es d cuerpo / d líquido. Un iceberg (920 kg/m³) en agua de mar (1.025 kg/m³) tiene sumergido casi el 90 %.</p>`, video: { id: "XoF9s5ODsHI", titulo: "El principio de Arquímedes o ¿por qué flotan los barcos?", canal: "CuriosaMente", vistas: 2915121 } },
    ],
    "La presión atmosférica": [
      { html: `<h3>El experimento de Torricelli y los fluidos en movimiento</h3><p>En 1643, Evangelista Torricelli llenó de mercurio un tubo de un metro, lo tapó y lo volcó en una cubeta también con mercurio. El mercurio bajó hasta quedar a <mark>76 cm</mark> de altura: la presión del aire sobre la cubeta sostenía esa columna. Así se midió por primera vez la presión atmosférica, y nació el <b>barómetro</b>. La presión atmosférica disminuye con la altitud, porque hay menos aire encima: en la cima del Everest es un tercio de la del nivel del mar. Los fluidos en movimiento también producen efectos curiosos: donde el aire va más rápido, la presión es menor. Esto ayuda a explicar la fuerza que sostiene el ala de un avión o por qué se abomba hacia fuera una cortina con corriente.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Calcula la presión del agua sobre un buceador a 15 m de profundidad y la presión total si en la superficie hay 101.300 Pa. (d = 1.000 kg/m³, g = 9,8 m/s².)", pasos: ["Presión hidrostática: p = d·g·h = 1.000 · 9,8 · 15 = 147.000 Pa.", "Presión total = atmosférica + hidrostática = 101.300 + 147.000 = 248.300 Pa.", "En atmósferas: 248.300 / 101.300 ≈ 2,45 atm."], resultado: "147.000 Pa del agua; unos 248.300 Pa (≈ 2,5 atm) en total." },
    { enunciado: "En una prensa hidráulica el émbolo pequeño tiene 10 cm² y el grande 500 cm². ¿Qué fuerza hay que hacer para levantar un coche de 1.200 kg?", pasos: ["Peso del coche: 1.200 · 9,8 = 11.760 N.", "Pascal: F₁ / S₁ = F₂ / S₂ → F₁ = F₂ · S₁ / S₂.", "F₁ = 11.760 · 10 / 500 = 235,2 N."], resultado: "Basta una fuerza de unos 235 N." },
    { enunciado: "Un cubo de madera de 0,001 m³ y densidad 600 kg/m³ se pone en agua. ¿Flota? ¿Qué volumen queda sumergido?", pasos: ["600 < 1.000: la madera es menos densa que el agua y flota.", "Al flotar, empuje = peso: d agua · V sumergido · g = d madera · V · g.", "V sumergido = 600 / 1.000 · 0,001 = 0,0006 m³ (el 60 %)."], resultado: "Flota con el 60 % sumergido: 0,0006 m³." },
  ],
  errores: [
    "Pensar que la presión de un líquido depende de la forma del recipiente o de la cantidad de líquido: solo depende de la densidad y la profundidad.",
    "Confundir peso y empuje, o creer que el empuje depende de la masa del cuerpo: depende del volumen sumergido y de la densidad del líquido.",
    "Usar la profundidad en centímetros en p = d·g·h.",
    "Creer que los objetos pesados siempre se hunden: depende de su densidad media.",
    "Olvidar sumar la presión atmosférica cuando se pide la presión total.",
  ],
  ejercicios: [
    { q: "Una persona de 60 kg está de pie con una superficie de apoyo de 0,04 m². ¿Qué presión ejerce? ¿Y si lleva esquís de 0,4 m²?", sol: "Peso = 588 N. Sin esquís: 588 / 0,04 = 14.700 Pa. Con esquís: 588 / 0,4 = 1.470 Pa, diez veces menos: por eso no se hunde en la nieve." },
    { q: "Pasa 750 mmHg a atmósferas y a pascales.", sol: "750 / 760 ≈ 0,987 atm ≈ 0,987 · 101.300 ≈ 100.000 Pa." },
    { q: "¿Qué presión soporta el fondo de una piscina de 2,5 m (solo la del agua)?", sol: "p = 1.000 · 9,8 · 2,5 = 24.500 Pa." },
    { q: "¿A qué profundidad la presión del agua del mar (1.025 kg/m³) vale 1 atm?", sol: "h = 101.300 / (1.025 · 9,8) ≈ 10,1 m. Cada 10 m de agua la presión aumenta aproximadamente 1 atm." },
    { q: "En una prensa hidráulica, S₂ = 40 · S₁. Si haces 50 N, ¿qué fuerza se obtiene?", sol: "F₂ = 50 · 40 = 2.000 N." },
    { q: "Un objeto de 2 dm³ se sumerge entero en agua. Calcula el empuje.", sol: "V = 0,002 m³. E = 1.000 · 0,002 · 9,8 = 19,6 N." },
    { q: "Un objeto pesa 30 N en el aire y 22 N sumergido en agua. Calcula el empuje y su volumen.", sol: "E = 30 − 22 = 8 N. V = E / (d·g) = 8 / 9.800 ≈ 0,00082 m³ (0,82 L)." },
    { q: "¿Flota un trozo de hielo (920 kg/m³) en aceite (920 kg/m³)? ¿Y en agua?", sol: "En aceite queda en equilibrio, ni sube ni baja (densidades iguales). En agua flota, con el 92 % sumergido." },
    { q: "¿Por qué se taponan los oídos al subir en avión o en coche a un puerto de montaña?", sol: "Porque la presión atmosférica disminuye con la altitud; el aire dentro del oído queda a más presión que el de fuera y empuja el tímpano hasta que las presiones se igualan." },
    { q: "Explica por qué el agua de un depósito en lo alto de una colina llega a las casas del pueblo sin bombas.", sol: "Por el principio de los vasos comunicantes: el agua tiende a alcanzar la misma altura en todos los tubos conectados, así que sube hasta las casas que están más bajas que el depósito." },
  ],
  quiz: [
    { q: "La presión normal al nivel del mar es…", o: ["1.013 hPa", "1.013 Pa", "13 atm"], a: 0, e: "1 atm = 1.013 hPa = 760 mmHg." },
    { q: "En unos vasos comunicantes con el mismo líquido, el nivel…", o: ["es más alto en el vaso más ancho", "es el mismo en todos", "depende de la forma"], a: 1, e: "La presión se iguala a la misma profundidad." },
    { q: "Un cuerpo flota si su densidad es…", o: ["mayor que la del líquido", "menor que la del líquido", "cualquiera"], a: 1, e: "Entonces el empuje supera al peso." },
    { q: "Torricelli comprobó que la presión atmosférica sostiene una columna de mercurio de…", o: ["76 cm", "10 m", "1 m"], a: 0, e: "De ahí, 760 mmHg." },
    { q: "Al subir una montaña, la presión atmosférica…", o: ["aumenta", "disminuye", "no cambia"], a: 1, e: "Hay menos aire encima." },
  ],
  tarjetas: [
    ["Vasos comunicantes", "El mismo líquido alcanza la misma altura en recipientes unidos por la base."],
    ["Condición de flotación", "Flota si su densidad media es menor que la del líquido."],
    ["1 atm equivale a…", "101.300 Pa = 1.013 hPa = 760 mmHg."],
  ],
});
