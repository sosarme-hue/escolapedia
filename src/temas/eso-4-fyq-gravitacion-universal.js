// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "La gravitación universal",
  minutos: 40,
  objetivos: ["Conocer la evolución de los modelos del universo", "Aplicar la ley de la gravitación universal de Newton", "Explicar el peso, las órbitas y las mareas con la gravedad"],
  claves: ["geocentrismo", "heliocentrismo", "leyes de Kepler", "gravitación universal", "constante G", "satélite"],
  pregunta: {
    texto: "Si la Luna es atraída por la Tierra, ¿por qué no se cae sobre nosotros?",
    respuesta: "¡En realidad está cayendo todo el rato! Pero también <mark>avanza muy deprisa</mark> de lado, a 1 km/s. Mientras cae, la superficie de la Tierra «se curva» por debajo y nunca la alcanza. Eso es una <b>órbita</b>: caer sin llegar nunca al suelo.",
  },
  bloques: [
    {
      html: `<h3>Del geocentrismo al heliocentrismo</h3><p>Durante siglos se pensó que la Tierra estaba quieta en el centro (<b>modelo geocéntrico</b> de Ptolomeo). En 1543, <b>Copérnico</b> propuso que <mark>el Sol está en el centro</mark> y la Tierra gira a su alrededor (<b>heliocentrismo</b>). <b>Galileo</b> lo apoyó con su telescopio al descubrir lunas que giraban alrededor de Júpiter.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo geocéntrico con la Tierra en el centro y modelo heliocéntrico con el Sol en el centro">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[68, "var(--water)", "var(--sun)", "geocéntrico"], [192, "var(--sun)", "var(--water)", "heliocéntrico"]].map(([x, c1, c2, t]) => `<circle cx="${x}" cy="82" r="50" fill="none" stroke="var(--line)" stroke-width="2"/><circle cx="${x}" cy="82" r="30" fill="none" stroke="var(--line)" stroke-width="2"/>
          <circle cx="${x}" cy="82" r="13" fill="${c1}"/><circle cx="${x + 50}" cy="82" r="8" fill="${c2}"/><circle cx="${x - 21}" cy="61" r="5" fill="var(--red)"/>
          <text x="${x}" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Las leyes de Kepler</h3><p>Kepler analizó las medidas de Tycho Brahe y descubrió tres leyes: 1) los planetas giran en <mark>órbitas elípticas</mark> con el Sol en un foco; 2) se mueven <b>más rápido cuando están más cerca</b> del Sol (barren áreas iguales en tiempos iguales); 3) cuanto más lejos está un planeta, <b>más tarda en dar la vuelta</b> (T² es proporcional a r³).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Órbita elíptica con el Sol en un foco y dos áreas iguales barridas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="130" cy="88" rx="100" ry="62" fill="none" stroke="var(--line)" stroke-width="2.5"/>
        <path d="M80 88 L 30 88 A 100 62 0 0 1 44 54 Z" fill="var(--pen)" opacity=".35"/>
        <path d="M80 88 L 222 66 A 100 62 0 0 1 229 80 Z" fill="var(--pen)" opacity=".35"/>
        <circle cx="80" cy="88" r="12" fill="var(--sun)"/><circle cx="30" cy="88" r="6" fill="var(--water)"/><circle cx="229" cy="80" r="6" fill="var(--water)"/>
        <g ${F} font-size="12" font-weight="700"><text x="14" y="122" fill="var(--red)">rápido</text><text x="196" y="40" fill="var(--leaf)">lento</text><text x="130" y="172" text-anchor="middle" fill="var(--pen)">áreas iguales, tiempos iguales</text></g>
      </svg>`,
    },
    {
      html: `<h3>La ley de la gravitación universal</h3><p>Newton (1687) unió el cielo y la Tierra: la fuerza que hace caer una manzana es la misma que mantiene a la Luna en órbita. <mark>Dos cuerpos cualesquiera se atraen</mark> con una fuerza proporcional a sus masas e inversamente proporcional al cuadrado de la distancia:</p>
      <div class="formula"><span>F = G · m₁ · m₂ / d²</span></div>
      <p><b>G = 6,67 · 10⁻¹¹ N·m²/kg²</b>, un número tan pequeño que la atracción entre dos personas es imperceptible. Solo la notamos con masas enormes, como planetas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos masas que se atraen con fuerzas iguales y opuestas separadas una distancia d">
        <defs>${flecha("gv1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="60" cy="80" r="30" fill="var(--pen)"/><circle cx="200" cy="80" r="18" fill="var(--leaf)"/>
        <path d="M94 80 H 130" stroke="var(--red)" stroke-width="4" marker-end="url(#gv1)"/><path d="M180 80 H 144" stroke="var(--red)" stroke-width="4" marker-end="url(#gv1)"/>
        <path d="M60 136 H 200 M60 130 V 142 M200 130 V 142" stroke="var(--muted)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="60" y="85" font-size="14" fill="#fff">m₁</text><text x="200" y="85" font-size="12" fill="#fff">m₂</text><text x="130" y="158" font-size="14" fill="var(--muted)">d</text><text x="112" y="68" font-size="13" fill="var(--red)">F</text><text x="164" y="68" font-size="13" fill="var(--red)">F</text></g>
      </svg>`,
    },
    {
      html: `<h3>El peso y la gravedad de cada planeta</h3><p>El <b>peso</b> es la fuerza gravitatoria que un planeta ejerce sobre ti. Aplicando la ley de Newton en la superficie aparece la <b>gravedad</b>: <mark>g = G · M / R²</mark>. En la Tierra vale 9,8 m/s²; en la Luna, 1,6 m/s²; en Júpiter, unos 24,8 m/s². Si te alejas, g disminuye: <b>al doble de distancia, la fuerza es cuatro veces menor</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Valores de la gravedad en la Luna, Marte, la Tierra y Júpiter">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["Luna", 1.6, "var(--muted)", 10], ["Marte", 3.7, "var(--red)", 13], ["Tierra", 9.8, "var(--water)", 18], ["Júpiter", 24.8, "var(--sun)", 26]].map(([n, g, c, r], i) => `<rect x="${24 + i * 58}" y="${140 - g * 4.6}" width="36" height="${g * 4.6}" rx="4" fill="${c}"/><text x="${42 + i * 58}" y="${132 - g * 4.6}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${String(g).replace(".", ",")}</text><text x="${42 + i * 58}" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        <text x="14" y="22" font-size="11" fill="var(--muted)" ${F}>g en m/s²</text>
      </svg>`,
    },
    {
      html: `<h3>Órbitas, satélites y mareas</h3><p>Un <b>satélite</b> se mantiene en órbita porque la gravedad <mark>curva su trayectoria</mark> continuamente hacia el planeta mientras avanza. Así funcionan la Luna, la Estación Espacial Internacional (a unos 400 km, da una vuelta cada 90 minutos) y los satélites de GPS. La atracción de la Luna sobre los océanos produce las <b>mareas</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cañón de Newton: con más velocidad, el proyectil cae más lejos hasta dar la vuelta a la Tierra">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="110" r="52" fill="var(--water)" opacity=".5"/><rect x="124" y="44" width="12" height="16" fill="var(--ink)"/>
        <path d="M136 52 Q 160 56 168 80" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M136 52 Q 196 56 186 120" fill="none" stroke="var(--sun)" stroke-width="2" stroke-dasharray="4 3"/>
        <circle cx="130" cy="110" r="66" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        <g ${F} font-size="12" font-weight="700"><text x="246" y="26" text-anchor="end" fill="var(--leaf)">órbita: cae sin llegar</text><text x="190" y="140" fill="var(--sun)">más rápido</text><text x="96" y="86" fill="var(--red)">lento</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cómo cambia la fuerza de la gravedad",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Si las masas se duplican la fuerza se duplica; si la distancia se duplica la fuerza se divide entre cuatro">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["× 2 una masa", "F × 2", "var(--pen)"], ["× 2 las dos masas", "F × 4", "var(--leaf)"], ["× 2 la distancia", "F ÷ 4", "var(--red)"]]
        .map(([c1, r, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="62" text-anchor="middle" font-size="15" fill="var(--muted)" ${F}>si multiplicas por 2</text>
          <text x="${115 + i * 206}" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${c1.replace("× 2 ", "")}</text>
          <text x="${115 + i * 206}" y="152" text-anchor="middle" font-size="34" font-weight="700" fill="${c}" ${D}>${r}</text>`).join("")}
    </svg>`,
  },
  video: { id: "1ZeqDflo-SQ", titulo: "Ley de gravitación universal con fórmulas y ejercicio", canal: "Vitual", vistas: 973978, megusta: 0, busqueda: "ley de gravitación universal" },
  quiz: [
    { q: "¿Quién propuso que el Sol está en el centro y la Tierra gira a su alrededor?", o: ["Ptolomeo", "Copérnico", "Aristóteles"], a: 1, e: "Copérnico publicó el modelo heliocéntrico en 1543." },
    { q: "Según Kepler, un planeta se mueve más rápido cuando…", o: ["está más lejos del Sol", "está más cerca del Sol", "siempre va igual"], a: 1, e: "Segunda ley: barre áreas iguales en tiempos iguales, así que cerca del Sol va más deprisa." },
    { q: "Si la distancia entre dos cuerpos se triplica, la fuerza gravitatoria…", o: ["se divide entre 3", "se divide entre 9", "se multiplica por 3"], a: 1, e: "La fuerza depende de 1/d²: 3² = 9." },
    { q: "¿Por qué no notamos la atracción gravitatoria entre dos personas?", o: ["Porque no existe", "Porque G es muy pequeña y las masas también", "Porque solo atraen los planetas"], a: 1, e: "Existe, pero con masas de 60 kg es del orden de 10⁻⁷ N: imperceptible." },
    { q: "Tu masa es 50 kg. ¿Cuál es tu peso en la Luna (g = 1,6 m/s²)?", o: ["50 N", "80 N", "490 N"], a: 1, e: "P = m · g = 50 · 1,6 = 80 N. La masa sigue siendo 50 kg." },
  ],
  examen: [
    { q: "El valor de G es…", o: ["9,8 m/s²", "6,67 · 10⁻¹¹ N·m²/kg²", "3 · 10⁸ m/s"], a: 1, e: "G es la constante de gravitación universal, igual en todo el universo." },
    { q: "Las mareas se deben principalmente a…", o: ["el viento", "la atracción gravitatoria de la Luna", "la rotación del Sol"], a: 1, e: "La Luna (y en menor medida el Sol) atraen el agua de los océanos." },
    { q: "Según la tercera ley de Kepler, un planeta más alejado del Sol…", o: ["tarda más en dar una vuelta", "tarda menos", "tarda lo mismo"], a: 0, e: "T² es proporcional a r³: Neptuno tarda 165 años y la Tierra uno." },
  ],
  feynman: ["Qué cambió del modelo geocéntrico al heliocéntrico", "Las tres leyes de Kepler con tus palabras", "Qué dice la ley de la gravitación universal y qué es G", "Por qué el peso cambia de un planeta a otro", "Por qué la Luna no cae sobre la Tierra"],
  mapa: mapa("GRAVITACIÓN", "var(--eso)", [
    ["Modelos", "geocéntrico → heliocéntrico", "var(--ink)"],
    ["Kepler", "elipses · áreas · T² ∝ r³", "var(--pen)"],
    ["Newton", "F = G·m₁·m₂/d²", "var(--red)"],
    ["Consecuencias", "peso · órbitas · mareas", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Ley de la gravitación universal", "F = G · m₁ · m₂ / d²."],
    ["Valor de la constante G", "6,67 · 10⁻¹¹ N·m²/kg²."],
    ["Primera ley de Kepler", "Los planetas describen órbitas elípticas con el Sol en uno de los focos."],
    ["Si la distancia se duplica, la fuerza…", "Se divide entre cuatro."],
    ["Fórmula de la gravedad en la superficie de un planeta", "g = G · M / R²."],
  ],
  familias: ["Buscad en una app de astronomía la Estación Espacial Internacional y ved cuándo pasa sobre vuestra ciudad.", "Calculad juntos vuestro peso en newtons en la Tierra, la Luna y Júpiter.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La interacción: ley de la gravitación universal, peso, movimiento de planetas y satélites, y evolución de los modelos del universo (RD 217/2022, Física y Química 4º).",
    ideas: ["Simulación PhET «Gravedad y órbitas» para variar masas y distancias.", "Dibujar una elipse con dos chinchetas y un cordel para la primera ley de Kepler.", "Calcular el periodo de la ISS con datos reales y comprobarlo en directo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ley de gravitación universal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ley_de_gravitaci%C3%B3n_universal" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la velocidad orbital de un satélite", "Explicar el peso aparente y la ingravidez de los astronautas"],
  tras: {
    "La ley de la gravitación universal": [
      { html: `<h3>Usar la ley de la gravitación</h3><p>La fuerza gravitatoria es <b>siempre atractiva</b>, actúa a distancia y es mutua: la Tierra te atrae con la misma fuerza con que tú atraes a la Tierra (tercera ley de Newton), aunque a ti te mueve mucho y a ella nada, porque su masa es enorme. La constante G = 6,67 · 10⁻¹¹ N·m²/kg² es tan pequeña que entre dos personas la atracción es de millonésimas de newton: solo se nota cuando al menos una masa es gigantesca. La dependencia con la distancia es muy fuerte: si la distancia se duplica, la fuerza se divide entre <mark>cuatro</mark>; si se triplica, entre nueve. La distancia se mide siempre entre los centros de los cuerpos.</p>`, video: { id: "_sbc_9FDRCM", titulo: "Ley de gravitación universal: calcular la masa", canal: "Vitual", vistas: 372861 } },
    ],
    "El peso y la gravedad de cada planeta": [
      { html: `<h3>Cómo cambia g con la altura</h3><p>La gravedad en la superficie de un planeta vale <mark>g = G · M / R²</mark>, donde M es su masa y R su radio. Si nos alejamos de la superficie, la distancia al centro aumenta y g disminuye: a una altura h, g = G · M / (R + h)². A la altura de la Estación Espacial Internacional, unos 400 km, g todavía vale unos 8,7 m/s², casi un 90 % del valor en el suelo. Por tanto, los astronautas <b>no flotan porque allí no haya gravedad</b>, sino porque la estación y ellos están cayendo continuamente alrededor de la Tierra a la vez: es la <b>ingravidez</b> o caída libre, en la que el peso aparente es cero.</p>` },
    ],
    "Órbitas, satélites y mareas": [
      { html: `<h3>Velocidad orbital y satélites</h3><p>Un satélite está en órbita porque la gravedad le proporciona justo la fuerza centrípeta que necesita para girar. Igualando las dos fuerzas sale la <b>velocidad orbital</b>: <mark>v = √(G · M / r)</mark>, donde r es la distancia al centro de la Tierra. Cuanto más lejos, más despacio gira y más tarda en dar una vuelta. Los satélites de órbita baja (300-2.000 km) dan una vuelta en hora y media; los <b>geoestacionarios</b>, a 36.000 km sobre el ecuador, tardan exactamente un día y parecen quietos en el cielo, por eso se usan para la televisión y la meteorología. Los GPS orbitan a unos 20.000 km. Para escapar de la Tierra sin volver hay que superar la <b>velocidad de escape</b>, 11,2 km/s.</p>`, video: { id: "FOYfxBjT5wQ", titulo: "Velocidad de escape: órbitas y trayectorias", canal: "Cienciabit", vistas: 189261 } },
      { html: `<h3>La gravitación y el universo</h3><p>La misma ley que hace caer una manzana mantiene la Luna alrededor de la Tierra, los planetas alrededor del Sol y el Sol alrededor del centro de la Vía Láctea: fue la primera vez que se demostró que <mark>las leyes de la física son las mismas en la Tierra y en el cielo</mark>. Con ella se descubrió Neptuno en 1846, antes de verlo, por las alteraciones que causaba en la órbita de Urano. También se usa para «pesar» astros: midiendo el periodo de la Luna se calcula la masa de la Tierra. Hoy sabemos que la teoría de Einstein mejora la de Newton cuando las masas o las velocidades son enormes, pero para las misiones espaciales la ley de Newton sigue siendo suficiente.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Calcula la fuerza entre la Tierra (6 · 10²⁴ kg) y la Luna (7,3 · 10²² kg), separadas 3,84 · 10⁸ m.", pasos: ["F = G · M · m / d².", "Numerador: 6,67 · 10⁻¹¹ · 6 · 10²⁴ · 7,3 · 10²² ≈ 2,92 · 10³⁷.", "d² = (3,84 · 10⁸)² ≈ 1,47 · 10¹⁷.", "F = 2,92 · 10³⁷ / 1,47 · 10¹⁷ ≈ 1,99 · 10²⁰ N."], resultado: "F ≈ 2 · 10²⁰ N." },
    { enunciado: "Un planeta tiene el doble de masa que la Tierra y el mismo radio. ¿Cuánto vale g en su superficie? ¿Cuánto pesaría allí una persona de 50 kg?", pasos: ["g = G·M / R²: si M se duplica y R no cambia, g se duplica.", "g = 2 · 9,8 = 19,6 m/s².", "P = m · g = 50 · 19,6 = 980 N."], resultado: "g = 19,6 m/s²; pesaría 980 N (su masa seguiría siendo 50 kg)." },
    { enunciado: "Calcula la velocidad orbital de un satélite a 7.000 km del centro de la Tierra (M = 6 · 10²⁴ kg).", pasos: ["v = √(G·M / r), con r = 7 · 10⁶ m.", "G·M = 6,67 · 10⁻¹¹ · 6 · 10²⁴ = 4 · 10¹⁴.", "G·M / r = 4 · 10¹⁴ / 7 · 10⁶ ≈ 5,7 · 10⁷ → v ≈ 7.560 m/s."], resultado: "v ≈ 7,6 km/s (unos 27.000 km/h)." },
  ],
  errores: [
    "Pensar que en el espacio no hay gravedad: los astronautas están en caída libre.",
    "Confundir masa (kg, no cambia) y peso (N, depende de g).",
    "Medir la distancia desde la superficie en vez de desde el centro del planeta.",
    "Olvidar elevar la distancia al cuadrado: al doble de distancia, la fuerza es la cuarta parte, no la mitad.",
    "Creer que la Tierra atrae a la Luna con más fuerza que la Luna a la Tierra: las dos fuerzas son iguales.",
  ],
  ejercicios: [
    { q: "Enuncia las tres leyes de Kepler con tus palabras.", sol: "1) Los planetas giran en elipses con el Sol en un foco. 2) Barren áreas iguales en tiempos iguales: van más rápido cerca del Sol. 3) Cuanto más lejos está un planeta, más tarda en dar una vuelta (T² proporcional a r³)." },
    { q: "Calcula la fuerza entre dos personas de 70 kg separadas 1 m.", sol: "F = 6,67 · 10⁻¹¹ · 70 · 70 / 1 ≈ 3,3 · 10⁻⁷ N, prácticamente nada." },
    { q: "Si la distancia entre dos cuerpos se triplica, ¿cómo cambia la fuerza?", sol: "Se divide entre 3² = 9." },
    { q: "Calcula el peso de un astronauta de 80 kg en la Tierra (9,8 m/s²), en la Luna (1,62 m/s²) y en Marte (3,7 m/s²).", sol: "Tierra 784 N, Luna 129,6 N, Marte 296 N. Su masa es 80 kg en los tres." },
    { q: "Calcula g en la superficie de la Tierra (M = 6 · 10²⁴ kg, R = 6,37 · 10⁶ m).", sol: "g = 6,67 · 10⁻¹¹ · 6 · 10²⁴ / (6,37 · 10⁶)² ≈ 4 · 10¹⁴ / 4,06 · 10¹³ ≈ 9,86 m/s²." },
    { q: "¿A qué distancia del centro de la Tierra g vale la cuarta parte que en la superficie?", sol: "A doble distancia: 2R ≈ 12.740 km del centro (6.370 km de altura)." },
    { q: "¿Por qué un satélite geoestacionario debe estar sobre el ecuador y tardar 24 h en dar una vuelta?", sol: "Para girar a la vez que la Tierra y en el mismo plano, y así estar siempre sobre el mismo punto: las antenas no tienen que moverse." },
    { q: "Explica por qué los astronautas de la Estación Espacial flotan si allí g ≈ 8,7 m/s².", sol: "Porque la estación y ellos caen juntos alrededor de la Tierra con la misma aceleración: no se apoyan en nada y su peso aparente es cero (ingravidez)." },
    { q: "¿Por qué hay dos mareas altas al día?", sol: "La Luna atrae más el agua del lado más cercano y menos la del lado opuesto, que «se queda atrás»; se forman dos abultamientos y la Tierra gira bajo ellos en un día." },
    { q: "Compara el modelo de Ptolomeo con el de Copérnico.", sol: "Ptolomeo: geocéntrico, la Tierra inmóvil en el centro. Copérnico: heliocéntrico, el Sol en el centro y la Tierra gira a su alrededor y sobre sí misma. Galileo aportó pruebas con el telescopio a favor de Copérnico." },
  ],
  quiz: [
    { q: "Si la distancia entre dos masas se duplica, la fuerza gravitatoria…", o: ["se reduce a la mitad", "se reduce a la cuarta parte", "se duplica"], a: 1, e: "Depende de 1/d²." },
    { q: "Los astronautas de la Estación Espacial flotan porque…", o: ["allí no hay gravedad", "están en caída libre alrededor de la Tierra", "están muy lejos del Sol"], a: 1, e: "g allí es casi el 90 % de la del suelo." },
    { q: "Cuanto más lejos está un satélite de la Tierra, su velocidad orbital es…", o: ["mayor", "menor", "igual"], a: 1, e: "v = √(G·M/r)." },
    { q: "Un satélite geoestacionario tarda en dar una vuelta…", o: ["90 minutos", "24 horas", "un mes"], a: 1, e: "Gira al ritmo de la Tierra." },
    { q: "La velocidad de escape de la Tierra es de unos…", o: ["11,2 km/s", "300.000 km/s", "1 km/s"], a: 0, e: "Para no volver a caer." },
  ],
  tarjetas: [
    ["g en la superficie de un planeta", "g = G · M / R²."],
    ["Velocidad orbital", "v = √(G · M / r); disminuye al alejarse."],
    ["Ingravidez", "Estado de caída libre en el que el peso aparente es cero."],
  ],
});
