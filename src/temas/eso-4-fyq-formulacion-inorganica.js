// Física y Química 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Tarjeta de fórmula con su nombre.
const ficha = (x, y, f, n, c) => `<rect x="${x}" y="${y}" width="112" height="56" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
  <text x="${x + 56}" y="${y + 26}" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${f}</text>
  <text x="${x + 56}" y="${y + 45}" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${n}</text>`;

module.exports = {
  materia: "Física y Química",
  curso: "4-eso",
  titulo: "Formulación inorgánica",
  minutos: 45,
  objetivos: ["Usar los números de oxidación para escribir fórmulas", "Nombrar óxidos, hidruros, sales binarias e hidróxidos según la IUPAC", "Reconocer los oxoácidos y oxisales más comunes"],
  claves: ["número de oxidación", "óxido", "hidruro", "sal binaria", "hidróxido", "oxoácido"],
  pregunta: {
    texto: "En un bote de laboratorio pone «Fe₂O₃» y en otro «FeO». Los dos son hierro y oxígeno. ¿Son la misma sustancia?",
    respuesta: "No. Los subíndices dicen <mark>cuántos átomos de cada clase</mark> hay. Fe₂O₃ es el <b>trióxido de dihierro</b> u óxido de hierro(III), el óxido rojizo de la herrumbre. FeO es el <b>monóxido de hierro</b> u óxido de hierro(II), negro. La formulación es el idioma que evita confundirlos.",
  },
  bloques: [
    {
      html: `<h3>Números de oxidación</h3><p>El <b>número de oxidación</b> es la carga que tendría un átomo si cediera o ganara los electrones del enlace. Algunos conviene saberlos de memoria: <mark>O: −2</mark>, <mark>H: +1</mark> (−1 con metales), alcalinos +1, alcalinotérreos +2, halógenos −1 con metales. En un compuesto neutro, <b>la suma de todos los números de oxidación es cero</b>.</p>
      <div class="formula"><span>Al³⁺ y O²⁻</span><span class="op">→</span><span>2·(+3) + 3·(−2) = 0</span><span class="op">→</span><span><b>Al₂O₃</b></span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Método del aspa: los números de oxidación se cruzan y pasan a ser subíndices">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${D} font-weight="700" text-anchor="middle"><text x="90" y="70" font-size="34" fill="var(--pen)">Al</text><text x="170" y="70" font-size="34" fill="var(--red)">O</text></g>
        <g ${F} font-weight="700" text-anchor="middle"><text x="116" y="42" font-size="16" fill="var(--pen)">+3</text><text x="194" y="42" font-size="16" fill="var(--red)">−2</text></g>
        <path d="M116 48 L 186 92" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M194 48 L 110 92" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="5 4"/>
        <text x="130" y="140" text-anchor="middle" font-size="34" font-weight="700" fill="var(--ink)" ${D}>Al₂O₃</text>
        <text x="130" y="166" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>se cruzan sin el signo y se simplifica si se puede</text>
      </svg>`,
    },
    {
      html: `<h3>Óxidos</h3><p>Combinación de un elemento con el <b>oxígeno</b> (O con −2), que <mark>se escribe a la derecha</mark>. Se nombran de dos formas: con <b>prefijos</b> (mono-, di-, tri-, tetra-, penta-…) o con la <b>nomenclatura de Stock</b>, que indica el número de oxidación en romanos entre paréntesis (solo si el elemento tiene más de uno).</p>
      <p>CO₂ = <b>dióxido de carbono</b> u óxido de carbono(IV). CaO = <b>óxido de calcio</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ejemplos de óxidos con su nombre">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ficha(12, 20, "CO₂", "dióxido de carbono", "var(--red)")}${ficha(136, 20, "CaO", "óxido de calcio", "var(--red)")}
        ${ficha(12, 98, "Fe₂O₃", "óxido de hierro(III)", "var(--red)")}${ficha(136, 98, "SO₃", "trióxido de azufre", "var(--red)")}
      </svg>`,
    },
    {
      html: `<h3>Hidruros y sales binarias</h3><p>Los <b>hidruros metálicos</b> son metal + hidrógeno (H con −1): NaH, <b>hidruro de sodio</b>. Con los no metales de los grupos 16 y 17, el hidrógeno va delante: HCl es el <b>cloruro de hidrógeno</b>, y disuelto en agua, <mark>ácido clorhídrico</mark>. Hay nombres tradicionales aceptados: <b>H₂O agua, NH₃ amoniaco, CH₄ metano</b>.</p>
      <p>Las <b>sales binarias</b> unen un metal con un no metal: el no metal acaba en <mark>-uro</mark>. NaCl, cloruro de sodio; FeCl₃, cloruro de hierro(III) o tricloruro de hierro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ejemplos de hidruros y sales binarias">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ficha(12, 20, "NaH", "hidruro de sodio", "var(--pen)")}${ficha(136, 20, "NH₃", "amoniaco", "var(--pen)")}
        ${ficha(12, 98, "NaCl", "cloruro de sodio", "var(--leaf)")}${ficha(136, 98, "CaF₂", "fluoruro de calcio", "var(--leaf)")}
      </svg>`,
    },
    {
      html: `<h3>Hidróxidos</h3><p>Son compuestos de un metal con el grupo <b>hidróxido OH⁻</b> (que actúa con −1). Si el metal tiene número de oxidación n, la fórmula es <mark>M(OH)ₙ</mark>. Son <b>bases</b>: tienen pH mayor que 7 y se usan en limpieza y en la industria.</p>
      <p>NaOH, <b>hidróxido de sodio</b> (sosa cáustica); Ca(OH)₂, hidróxido de calcio (cal apagada); Fe(OH)₃, hidróxido de hierro(III).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El calcio con más 2 necesita dos grupos hidróxido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="80" r="26" fill="var(--sun)"/><text x="130" y="87" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${D}>Ca²⁺</text>
        <g ${F} font-weight="700"><rect x="24" y="64" width="62" height="32" rx="16" fill="var(--pen)"/><text x="55" y="86" text-anchor="middle" font-size="16" fill="#fff">OH⁻</text>
        <rect x="174" y="64" width="62" height="32" rx="16" fill="var(--pen)"/><text x="205" y="86" text-anchor="middle" font-size="16" fill="#fff">OH⁻</text></g>
        <path d="M86 80 H 104 M156 80 H 174" stroke="var(--ink)" stroke-width="2.5"/>
        <text x="130" y="146" text-anchor="middle" font-size="24" font-weight="700" fill="var(--ink)" ${D}>Ca(OH)₂</text>
      </svg>`,
    },
    {
      html: `<h3>Oxoácidos y oxisales</h3><p>Los <b>oxoácidos</b> tienen hidrógeno, un no metal y oxígeno: <b>H₂SO₄</b> ácido sulfúrico, <b>HNO₃</b> ácido nítrico, <b>H₂CO₃</b> ácido carbónico. Si un metal sustituye a los hidrógenos se obtiene una <b>oxisal</b>, y la terminación cambia: <mark>-ico → -ato</mark> y <mark>-oso → -ito</mark>. Del ácido sulfúrico sale el sulfato de cobre(II), CuSO₄; del carbónico, el carbonato de calcio, CaCO₃, el mármol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del ácido sulfúrico al sulfato de cobre: el metal sustituye a los hidrógenos">
        <defs><marker id="fo1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${ficha(12, 30, "H₂SO₄", "ácido sulfúrico", "var(--red)")}${ficha(136, 30, "CuSO₄", "sulfato de cobre(II)", "var(--leaf)")}
        ${ficha(12, 108, "H₂CO₃", "ácido carbónico", "var(--red)")}${ficha(136, 108, "CaCO₃", "carbonato de calcio", "var(--leaf)")}
        <path d="M124 58 H 134 M124 136 H 134" stroke="var(--muted)" stroke-width="2" marker-end="url(#fo1)"/>
      </svg>`,
    },
  ],
  figura: {
    titulo: "¿Qué compuesto es? Mira qué lleva",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Guía para reconocer el tipo de compuesto por sus elementos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["X + O", "óxido", "CO₂ · Al₂O₃", "var(--red)"], ["metal + H", "hidruro metálico", "LiH · CaH₂", "var(--pen)"], ["metal + no metal", "sal binaria (-uro)", "NaCl · K₂S", "var(--leaf)"], ["metal + OH", "hidróxido", "NaOH · Al(OH)₃", "var(--inf)"], ["H + no metal + O", "oxoácido", "H₂SO₄ · HNO₃", "var(--sun)"], ["metal + no metal + O", "oxisal (-ato, -ito)", "CaCO₃ · KNO₃", "var(--ink)"]]
        .map(([q, n, ej, c], i) => { const x = 20 + (i % 3) * 206, y = 18 + Math.floor(i / 3) * 104; return `<rect x="${x}" y="${y}" width="190" height="92" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${x + 95}" y="${y + 28}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--muted)" ${F}>${q}</text>
          <text x="${x + 95}" y="${y + 54}" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${x + 95}" y="${y + 78}" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${ej}</text>`; }).join("")}
    </svg>`,
  },
  video: { id: "lBCHQugsl2E", titulo: "Formulación inorgánica: óxidos metálicos y no metálicos", canal: "Amigos de la Química", vistas: 3442939, megusta: 0, busqueda: "formulación inorgánica óxidos hidruros" },
  quiz: [
    { q: "¿Cuál es la fórmula del óxido de magnesio? (Mg: +2)", o: ["MgO", "Mg₂O", "MgO₂"], a: 0, e: "Mg²⁺ y O²⁻: las cargas se compensan uno a uno. Mg₂O₂ se simplifica a MgO." },
    { q: "¿Cómo se nombra CO con prefijos?", o: ["Óxido de carbono", "Monóxido de carbono", "Dióxido de carbono"], a: 1, e: "Un oxígeno: monóxido de carbono. Es un gas tóxico que sale de las combustiones incompletas." },
    { q: "¿Qué tipo de compuesto es KBr?", o: ["Un óxido", "Una sal binaria", "Un hidróxido"], a: 1, e: "Metal (K) + no metal (Br): bromuro de potasio, una sal binaria." },
    { q: "¿Cuál es la fórmula del hidróxido de aluminio? (Al: +3)", o: ["AlOH", "Al(OH)₃", "Al₃OH"], a: 1, e: "El aluminio con +3 necesita tres grupos OH⁻. El paréntesis indica que el 3 afecta a todo el grupo." },
    { q: "La sal que procede del ácido nítrico (HNO₃) se llama…", o: ["nitrito", "nitrato", "nitruro"], a: 1, e: "-ico pasa a -ato: ácido nítrico → nitrato. KNO₃ es el nitrato de potasio." },
  ],
  examen: [
    { q: "En Fe₂O₃, ¿qué número de oxidación tiene el hierro?", o: ["+2", "+3", "+6"], a: 1, e: "3 · (−2) = −6; para compensar, 2 · x = +6, x = +3. Por eso es óxido de hierro(III)." },
    { q: "HCl disuelto en agua se llama…", o: ["ácido clorhídrico", "hidróxido de cloro", "hidruro de cloro"], a: 0, e: "Como gas es cloruro de hidrógeno; en disolución acuosa, ácido clorhídrico." },
    { q: "Formula el trióxido de diarsénico.", o: ["As₃O₂", "As₂O₃", "AsO₃"], a: 1, e: "Di- arsénico (As₂) y tri- óxido (O₃): As₂O₃." },
  ],
  feynman: ["Qué es el número de oxidación y cómo se usa para formular", "La diferencia entre nombrar con prefijos y con Stock", "Cómo se forma un hidróxido y por qué lleva paréntesis", "Cómo se pasa de un oxoácido a su oxisal"],
  mapa: mapa("FORMULACIÓN", "var(--eso)", [
    ["Nº de oxidación", "O −2 · H +1 · suma = 0", "var(--ink)"],
    ["Binarios", "óxidos · hidruros · sales -uro", "var(--red)"],
    ["Hidróxidos", "M(OH)ₙ · bases", "var(--pen)"],
    ["Oxoácidos y oxisales", "-ico → -ato · -oso → -ito", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Número de oxidación del oxígeno en los óxidos", "−2."],
    ["Nombra Fe₂O₃ con Stock y con prefijos", "Óxido de hierro(III) · trióxido de dihierro."],
    ["Fórmula del hidróxido de sodio", "NaOH (sosa cáustica)."],
    ["¿Cómo acaba el nombre de una sal binaria?", "El no metal termina en -uro: cloruro, sulfuro, bromuro…"],
    ["Fórmula del ácido sulfúrico", "H₂SO₄. Sus sales son los sulfatos."],
  ],
  familias: ["Buscad fórmulas químicas en etiquetas de casa (NaCl, NaHCO₃, NaOH en desatascadores) y pedidle que las nombre.", "Jugad a «te digo un nombre, me dices la fórmula» durante cinco minutos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La materia: nomenclatura y formulación de compuestos inorgánicos binarios y ternarios según las normas de la IUPAC (RD 217/2022, Física y Química 4º).",
    ideas: ["Dominó o cartas de iones para construir fórmulas compensando cargas.", "Ruleta de compuestos de uso diario (sal, cal, sosa, mármol) con su fórmula.", "Concurso por equipos: formular y nombrar contra reloj."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Nomenclatura química de los compuestos inorgánicos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Nomenclatura_qu%C3%ADmica_de_los_compuestos_inorg%C3%A1nicos" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Formular y nombrar peróxidos y combinaciones binarias del hidrógeno", "Aplicar las nomenclaturas de composición y de Stock según la IUPAC"],
  tras: {
    "Números de oxidación": [
      { html: `<h3>Las nomenclaturas de la IUPAC</h3><p>La IUPAC, el organismo que fija las normas de la química, recomienda dos formas principales de nombrar los compuestos binarios. La <b>nomenclatura de composición</b> indica cuántos átomos hay de cada elemento con <b>prefijos multiplicadores</b>: mono-, di-, tri-, tetra-, penta-… Así, Fe₂O₃ es <mark>trióxido de dihierro</mark> (el prefijo mono- se suele omitir delante del primer elemento). La <b>nomenclatura de Stock</b> pone el número de oxidación del metal en números romanos y entre paréntesis cuando tiene más de uno: Fe₂O₃ es <mark>óxido de hierro(III)</mark>. Si el elemento solo tiene un número de oxidación, como el Na (+1) o el Ca (+2), no se pone: CaO es óxido de calcio. Algunos compuestos conservan nombres comunes aceptados: H₂O (agua), NH₃ (amoniaco), CH₄ (metano).</p>${AMP.tabla(["Fórmula", "Composición", "Stock"], [["FeO", "monóxido de hierro", "óxido de hierro(II)"], ["Fe₂O₃", "trióxido de dihierro", "óxido de hierro(III)"], ["CuCl₂", "dicloruro de cobre", "cloruro de cobre(II)"], ["SO₃", "trióxido de azufre", "óxido de azufre(VI)"]])}` },
    ],
    "Óxidos": [
      { html: `<h3>Peróxidos</h3><p>Los <b>peróxidos</b> son combinaciones de un metal (o del hidrógeno) con el grupo <mark>O₂²⁻</mark>, en el que cada oxígeno actúa con número de oxidación −1. El grupo O₂ <b>no se simplifica</b>: el peróxido de hidrógeno es H₂O₂ (el agua oxigenada del botiquín), no HO. Para formularlos se combina el metal con el ion peróxido como si fuera un único ion de carga −2: Na₂O₂ (peróxido de sodio), CaO₂ (peróxido de calcio), BaO₂ (peróxido de bario). Para distinguirlo de un óxido, comprueba si con el número de oxidación normal del metal sobran oxígenos: en Na₂O₂, si el O fuera −2 el sodio debería ser +2, y eso es imposible.</p>`, video: { id: "t_tSXV8E2ug", titulo: "Formulación inorgánica: peróxidos", canal: "Amigos de la Química", vistas: 1737975 } },
    ],
    "Hidruros y sales binarias": [
      { html: `<h3>Hidrácidos: el hidrógeno con los no metales</h3><p>Cuando el hidrógeno (+1) se combina con los halógenos (F, Cl, Br, I con −1) o con el azufre, el selenio o el teluro (−2), se forman los <b>haluros de hidrógeno</b>: HF, HCl, HBr, HI y H₂S. Se escribe primero el hidrógeno y se nombran con el sufijo -uro: HCl es <mark>cloruro de hidrógeno</mark> y H₂S es sulfuro de hidrógeno (o sulfuro de dihidrógeno). Cuando están disueltos en agua se comportan como ácidos y se llaman <b>hidrácidos</b>: ácido clorhídrico (HCl en agua, el salfumán), ácido fluorhídrico, ácido sulfhídrico. El ácido clorhídrico también está en el jugo gástrico del estómago.</p>` },
    ],
    "Oxoácidos y oxisales": [
      { html: `<h3>Oxisales paso a paso</h3><p>Una <b>oxisal</b> resulta de sustituir los hidrógenos de un oxoácido por un metal. Primero se quita el hidrógeno al ácido y se obtiene el anión: H₂SO₄ → <b>SO₄²⁻</b> (sulfato, con tantas cargas negativas como hidrógenos se quitaron). Después se combina con el catión del metal hasta que la carga total sea cero. En la nomenclatura tradicional, la terminación del ácido cambia: <mark>-ico pasa a -ato</mark> y <mark>-oso pasa a -ito</mark>. Así, del ácido sulfúrico sale el sulfato; del nítrico, el nitrato; del carbónico, el carbonato; y del nitroso, el nitrito. Ejemplos: CaCO₃ (carbonato de calcio, la caliza), KNO₃ (nitrato de potasio, un abono), Na₂SO₄ (sulfato de sodio).</p>`, video: { id: "wrlw3qKpj2Y", titulo: "Formulación inorgánica: oxisales neutras", canal: "Amigos de la Química", vistas: 1858855 } },
    ],
  },
  ejemplos: [
    { enunciado: "Formula el óxido de cobalto(III) y nómbralo también por composición.", pasos: ["Co actúa con +3 y el O con −2.", "Se intercambian los números (sin signo) como subíndices: Co₂O₃.", "Se cuenta: 2 cobaltos y 3 oxígenos."], resultado: "Co₂O₃, trióxido de dicobalto." },
    { enunciado: "Nombra Fe(OH)₂ y formula el hidróxido de aluminio.", pasos: ["En Fe(OH)₂ hay 2 grupos OH⁻ (−1 cada uno): el hierro actúa con +2.", "Su nombre de Stock es hidróxido de hierro(II).", "El aluminio actúa siempre con +3: necesita 3 grupos OH⁻."], resultado: "Fe(OH)₂ es hidróxido de hierro(II); el hidróxido de aluminio es Al(OH)₃." },
    { enunciado: "Formula el sulfato de cobre(II) y el nitrato de calcio.", pasos: ["Sulfato viene del H₂SO₄: el anión es SO₄²⁻. El cobre(II) es Cu²⁺. Cargas +2 y −2: uno a uno, CuSO₄.", "Nitrato viene del HNO₃: el anión es NO₃⁻. El calcio es Ca²⁺.", "Hacen falta dos nitratos para compensar el +2, y el grupo va entre paréntesis: Ca(NO₃)₂."], resultado: "CuSO₄ y Ca(NO₃)₂." },
  ],
  errores: [
    "Simplificar el grupo peróxido: el agua oxigenada es H₂O₂, no HO.",
    "Olvidar el paréntesis en grupos repetidos: Ca(NO₃)₂, no CaNO₃₂.",
    "Poner el número romano a un metal con un único número de oxidación: «óxido de sodio(I)» no se usa.",
    "Escribir primero el no metal: es NaCl, no ClNa.",
    "Confundir sulfuro (S²⁻, sin oxígeno), sulfito (SO₃²⁻) y sulfato (SO₄²⁻).",
    "No comprobar que la suma de números de oxidación de un compuesto sea cero.",
  ],
  ejercicios: [
    { q: "Formula: óxido de plomo(IV), dióxido de carbono, óxido de potasio.", sol: "PbO₂, CO₂ y K₂O." },
    { q: "Nombra por Stock: CuO, Cu₂O, SnCl₄.", sol: "Óxido de cobre(II), óxido de cobre(I) y cloruro de estaño(IV)." },
    { q: "Formula: peróxido de litio, peróxido de bario, peróxido de hidrógeno.", sol: "Li₂O₂, BaO₂ y H₂O₂." },
    { q: "Nombra: NaH, CaH₂, NH₃.", sol: "Hidruro de sodio, dihidruro de calcio (hidruro de calcio) y amoniaco (trihidruro de nitrógeno, azano)." },
    { q: "Formula: bromuro de hidrógeno, sulfuro de hidrógeno, cloruro de amonio.", sol: "HBr, H₂S y NH₄Cl." },
    { q: "Formula: hidróxido de sodio, hidróxido de hierro(III), hidróxido de magnesio.", sol: "NaOH, Fe(OH)₃ y Mg(OH)₂." },
    { q: "Calcula el número de oxidación del cromo en K₂Cr₂O₇.", sol: "K: +1 · 2 = +2. O: −2 · 7 = −14. La suma debe ser 0: 2 + 2·x − 14 = 0, x = +6." },
    { q: "Formula los ácidos: sulfúrico, nítrico y carbónico.", sol: "H₂SO₄, HNO₃ y H₂CO₃." },
    { q: "Formula: carbonato de sodio, sulfato de hierro(III), nitrito de potasio.", sol: "Na₂CO₃, Fe₂(SO₄)₃ y KNO₂." },
    { q: "Nombra: CaCO₃, KNO₃, Na₂SO₄, NaClO.", sol: "Carbonato de calcio, nitrato de potasio, sulfato de sodio e hipoclorito de sodio (la lejía)." },
  ],
  quiz: [
    { q: "En los peróxidos, el oxígeno tiene número de oxidación…", o: ["−2", "−1", "+2"], a: 1, e: "Forma el grupo O₂²⁻." },
    { q: "El nombre de composición de Fe₂O₃ es…", o: ["óxido de hierro(II)", "trióxido de dihierro", "dióxido de trihierro"], a: 1, e: "Prefijos que cuentan átomos." },
    { q: "HCl disuelto en agua se llama…", o: ["ácido clorhídrico", "ácido clórico", "cloruro de agua"], a: 0, e: "Es un hidrácido." },
    { q: "Del ácido nítrico deriva el anión…", o: ["nitrito", "nitrato", "nitruro"], a: 1, e: "-ico pasa a -ato." },
    { q: "La fórmula del sulfato de sodio es…", o: ["NaSO₄", "Na₂SO₄", "Na₂S"], a: 1, e: "Dos Na⁺ para un SO₄²⁻." },
  ],
  tarjetas: [
    ["Nomenclatura de Stock", "Número de oxidación del metal en romanos: óxido de hierro(III)."],
    ["Peróxido de hidrógeno", "H₂O₂, el agua oxigenada; el grupo O₂ no se simplifica."],
    ["De ácido a oxisal", "-ico pasa a -ato y -oso pasa a -ito."],
  ],
});
