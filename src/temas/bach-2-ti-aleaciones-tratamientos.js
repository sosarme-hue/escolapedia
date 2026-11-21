// Tecnología e Ingeniería II 2º Bachillerato · Tema 4. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, ficha, pasos, compara, graf, rejilla, escala, barras, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-ti");

// Marco de diagrama de fases: x de c0 a c1 (% en masa), T de t0 a t1 (°C).
function fases(aria, c0, c1, t0, t1, fn, ex = "% en masa", ey = "T (°C)") {
  const X = (c) => (38 + ((c - c0) / (c1 - c0)) * 206).toFixed(1), Y = (t) => (150 - ((t - t0) / (t1 - t0)) * 128).toFixed(1);
  const L = (pts, c = "var(--ink)", w = 2.2, d = "") => `<polyline points="${pts.map(([a, b]) => `${X(a)},${Y(b)}`).join(" ")}" fill="none" stroke="${c}" stroke-width="${w}"${d ? ` stroke-dasharray="${d}"` : ""}/>`;
  const R = (c, t, s, o = {}) => T(X(c), Y(t), s, { fs: 10, ...o });
  return marco(aria, `<path d="M38 18 V 150 H 246" stroke="var(--muted)" stroke-width="1.6" fill="none"/>${T(246, 166, ex, { fs: 9.5, a: "end", c: "var(--muted)" })}${T(40, 12, ey, { fs: 9.5, a: "start", c: "var(--muted)" })}${fn({ X, Y, L, R })}`);
}

// Diagrama de solubilidad total Cu-Ni con regla de la palanca.
const cuniSVG = fases("Diagrama cobre-níquel de solubilidad total: arriba líquido, abajo sólido alfa y entre las curvas líquidus y sólidus una zona de líquido más sólido; a 1250 grados una aleación del 35 por ciento de níquel tiene líquido del 32 y sólido del 43 por ciento", 0, 100, 1000, 1500, ({ X, Y, L, R }) => {
  const liq = [[0, 1085], [20, 1190], [40, 1280], [60, 1360], [80, 1415], [100, 1455]], sol = [[0, 1085], [20, 1140], [40, 1215], [60, 1300], [80, 1385], [100, 1455]];
  return `${L(liq, "var(--red)")}${L(sol, "var(--pen)")}${L([[32, 1250], [43, 1250]], "var(--leaf)", 2.4)}
  <circle cx="${X(35)}" cy="${Y(1250)}" r="3.6" fill="var(--ink)"/><circle cx="${X(32)}" cy="${Y(1250)}" r="3" fill="var(--red)"/><circle cx="${X(43)}" cy="${Y(1250)}" r="3" fill="var(--pen)"/>
  <path d="M${X(32)} ${Y(1250)} V 150 M${X(43)} ${Y(1250)} V 150" stroke="var(--line)" stroke-dasharray="3 3"/>
  ${R(60, 1460, "Líquido (L)", { b: true })}${R(78, 1150, "Sólido α", { b: true, c: "var(--pen)" })}${R(55, 1314, "L + α", { b: true, c: "var(--leaf)" })}
  ${R(14, 1230, "líquidus", { c: "var(--red)" })}${R(70, 1290, "sólidus", { c: "var(--pen)" })}
  ${T(X(32), 162, "32", { fs: 9, c: "var(--red)" })}${T(X(43), 162, "43", { fs: 9, c: "var(--pen)" })}`;
}, "% Ni");

// Diagrama eutéctico Pb-Sn.
const pbsnSVG = fases("Diagrama plomo-estaño con eutéctico: el líquido del 61,9 por ciento de estaño solidifica a 183 grados de golpe en una mezcla de fases alfa y beta", 0, 100, 0, 350, ({ X, Y, L, R }) => `
  ${L([[0, 327], [61.9, 183], [100, 232]], "var(--red)")}${L([[0, 327], [18.3, 183]], "var(--pen)")}${L([[100, 232], [97.8, 183]], "var(--pen)")}
  ${L([[18.3, 183], [97.8, 183]], "var(--ink)", 2.4)}${L([[18.3, 183], [10, 100], [2, 0]], "var(--pen)", 1.6)}${L([[97.8, 183], [99, 0]], "var(--pen)", 1.6)}
  <circle cx="${X(61.9)}" cy="${Y(183)}" r="4" fill="var(--red)"/>${R(66, 150, "E (61,9 %; 183 °C)", { b: true, c: "var(--red)", fs: 9.5 })}
  ${R(50, 300, "Líquido", { b: true })}${R(8, 130, "α", { b: true, c: "var(--pen)", fs: 12 })}${R(28, 230, "α + L", { fs: 9.5 })}${R(58, 80, "α + β", { b: true, fs: 12 })}`, "% Sn");

// Diagrama hierro-carbono simplificado.
const fecSVG = fases("Diagrama hierro-carbono simplificado: austenita gamma arriba a la izquierda, línea eutectoide a 727 grados con el punto eutectoide en 0,77 por ciento de carbono, línea eutéctica a 1148 grados con el punto eutéctico en 4,3 por ciento; aceros hasta 2,11 por ciento y fundiciones por encima", 0, 6.67, 400, 1600, ({ X, Y, L, R }) => `
  ${L([[0, 1538], [4.3, 1148], [6.67, 1250]], "var(--red)")}${L([[0, 1538], [2.11, 1148]], "var(--pen)")}
  ${L([[0, 912], [0.77, 727]], "var(--pen)")}${L([[0.77, 727], [2.11, 1148]], "var(--pen)")}${L([[0.022, 727], [6.67, 727]], "var(--ink)", 2.4)}${L([[2.11, 1148], [6.67, 1148]], "var(--ink)", 2.4)}
  ${L([[2.11, 400], [2.11, 1148]], "var(--muted)", 1.2, "4 3")}
  <circle cx="${X(0.77)}" cy="${Y(727)}" r="3.6" fill="var(--leaf)"/><circle cx="${X(4.3)}" cy="${Y(1148)}" r="3.6" fill="var(--red)"/>
  ${R(0.9, 1020, "γ", { b: true, fs: 13, c: "var(--pen)" })}${R(3.6, 1420, "Líquido", { b: true })}${R(2.5, 990, "γ + Fe₃C", { fs: 9.5 })}
  ${R(3.9, 640, "α + Fe₃C (perlita…)", { fs: 9.5, b: true })}${R(0.77, 690, "0,77", { fs: 8.5, c: "var(--leaf)" })}${R(4.3, 1180, "4,3", { fs: 8.5, c: "var(--red)" })}
  ${R(6.1, 745, "727 °C", { fs: 8.5 })}${R(6.1, 1168, "1148 °C", { fs: 8.5 })}${R(1.05, 470, "aceros", { fs: 9.5, c: "var(--muted)" })}${R(4.4, 470, "fundiciones", { fs: 9.5, c: "var(--muted)" })}`, "% C");

// Curva TTT con enfriamientos.
const tttSVG = marco("Diagrama TTT de un acero eutectoide: dos curvas en forma de C marcan el inicio y el fin de la transformación de la austenita; un enfriamiento lento corta las curvas y da perlita, y uno rápido pasa a la izquierda de la nariz y forma martensita por debajo de Ms", `
  <path d="M34 16 V 156 H 246" stroke="var(--muted)" stroke-width="1.6" fill="none"/>${T(246, 170, "tiempo (log)", { fs: 9.5, a: "end", c: "var(--muted)" })}${T(36, 12, "T", { fs: 10, a: "start", c: "var(--muted)" })}
  <path d="M34 36 H 246" stroke="var(--muted)" stroke-dasharray="4 3"/>${T(244, 32, "727 °C", { fs: 9, a: "end", c: "var(--muted)" })}
  <path d="M120 38 C 70 60 60 80 76 100 C 90 112 100 118 140 124" stroke="var(--pen)" stroke-width="2.4" fill="none"/>
  <path d="M180 38 C 120 60 112 82 128 100 C 140 110 160 116 200 122" stroke="var(--pen)" stroke-width="2.4" fill="none" stroke-dasharray="6 3"/>
  <path d="M34 128 H 246" stroke="var(--red)" stroke-width="1.6"/>${T(244, 124, "Ms", { fs: 10, b: true, a: "end", c: "var(--red)" })}<path d="M34 146 H 246" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="3 3"/>${T(244, 142, "Mf", { fs: 9, a: "end", c: "var(--red)" })}
  <path d="M36 30 C 44 80 50 120 56 154" stroke="var(--red)" stroke-width="2.6" fill="none"/>${T(60, 112, "temple", { fs: 10, b: true, c: "var(--red)", a: "start" })}
  <path d="M36 30 C 100 40 150 50 230 90" stroke="var(--leaf)" stroke-width="2.6" fill="none"/>${T(214, 76, "lento", { fs: 10, b: true, c: "var(--leaf)" })}
  ${T(226, 50, "perlita", { fs: 10, c: "var(--pen)" })}${T(226, 112, "bainita", { fs: 10, c: "var(--pen)" })}${T(98, 140, "martensita", { fs: 10, b: true, c: "var(--red)" })}${T(52, 54, "γ", { fs: 12, b: true, c: "var(--pen)" })}`);

// Pila de corrosión.
const pilaSVG = marco("Corrosión galvánica: una chapa de cinc y otra de acero en contacto dentro de agua salada; el cinc, más activo, es el ánodo y se disuelve, y los electrones van al acero, que actúa de cátodo y queda protegido", `
  <rect x="20" y="70" width="220" height="80" rx="8" fill="var(--water)" opacity=".35"/>${T(130, 164, "electrolito (agua salada)", { fs: 10, c: "var(--muted)" })}
  <rect x="48" y="40" width="26" height="96" fill="var(--muted)" stroke="var(--ink)"/>${T(61, 32, "Zn (ánodo)", { fs: 10.5, b: true, c: "var(--red)" })}
  <rect x="186" y="40" width="26" height="96" fill="#b45309" fill-opacity=".6" stroke="var(--ink)"/>${T(199, 32, "Fe (cátodo)", { fs: 10.5, b: true, c: "var(--pen)" })}
  <path d="M74 50 H 186" stroke="var(--ink)" stroke-width="2"/>${T(130, 46, "e⁻ →", { fs: 11, b: true })}
  ${T(80, 100, "Zn → Zn²⁺ + 2e⁻", { fs: 9.5, c: "var(--red)", b: true, a: "start" })}${T(130, 126, "O₂ + 2H₂O + 4e⁻ → 4OH⁻", { fs: 8.5, c: "var(--pen)", b: true })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Aleaciones, diagramas de fases y tratamientos térmicos",
  minutos: 120,
  objetivos: [
    "Distinguir soluciones sólidas, compuestos intermetálicos y mezclas de fases en una aleación",
    "Interpretar diagramas de equilibrio binarios y aplicar la regla de la palanca",
    "Describir el diagrama hierro-carbono y calcular la proporción de fases y constituyentes de un acero",
    "Explicar el recocido, el normalizado, el temple y el revenido y su efecto sobre la estructura y las propiedades",
    "Conocer los tratamientos termoquímicos y superficiales y el endurecimiento por precipitación",
    "Explicar la oxidación y la corrosión de los metales y elegir un método de protección",
  ],
  claves: ["aleación", "solución sólida", "fase", "diagrama de equilibrio", "líquidus", "sólidus", "regla de la palanca", "eutéctico", "eutectoide", "austenita", "ferrita", "cementita", "perlita", "martensita", "temple", "revenido", "cementación", "corrosión"],
  pregunta: {
    texto: "Un fabricante de herramientas quiere un cincel que no se mella al golpear la piedra pero que tampoco se rompa como el cristal. Usa siempre el mismo acero. ¿Qué hace para conseguirlo?",
    respuesta: "Le aplica <mark>tratamientos térmicos</mark>: primero lo <b>templa</b> (lo calienta hasta transformarlo en austenita y lo enfría muy rápido en agua o aceite), con lo que se forma martensita, muy dura pero frágil. Después lo <b>reviene</b>: lo calienta de nuevo a una temperatura moderada, que alivia tensiones y le devuelve tenacidad a cambio de perder un poco de dureza. Incluso puede revenir más la cabeza (que recibe los golpes) que el filo.",
  },
  lectura: {
    titulo: "El secreto del acero de Damasco",
    html: `<p>Durante la Edad Media, los cruzados se encontraron con unas espadas extraordinarias: las de «acero de Damasco», con un dibujo ondulado en la hoja, capaces de cortar un pañuelo de seda en el aire y de doblarse sin romperse. Se forjaban con lingotes llamados <i>wootz</i>, que llegaban de la India, y la técnica se perdió en el siglo XVIII.</p><p>Hasta finales del siglo XX no se descubrió su secreto con microscopios electrónicos: aquel acero tenía mucho carbono (alrededor del 1,5 %), y unas pequeñas impurezas de vanadio hacían que los carburos se ordenaran en bandas durante los sucesivos calentamientos y forjados. El resultado combinaba zonas muy duras con otras más tenaces. Los herreros, sin saber química, controlaban por experiencia el <b>diagrama hierro-carbono</b> y los <b>tratamientos térmicos</b>.</p><p>Hoy la industria hace lo mismo con precisión: elige la composición de la aleación, consulta su diagrama de fases y aplica tratamientos con hornos controlados por ordenador para obtener exactamente las propiedades que necesita cada pieza.</p>`,
  },
  bloques: [
    bloque({ h: "4.1 Aleaciones y fases", p: [
      "Una <mark>aleación</mark> es una sustancia con propiedades metálicas formada por dos o más elementos, de los que al menos el principal es un metal. Los metales puros se usan poco en ingeniería (el cobre de los cables o el aluminio de algunos envases), porque aleándolos se consiguen mejores propiedades: más resistencia, más dureza, mejor resistencia a la corrosión o menor punto de fusión.",
      "En una aleación pueden aparecer distintas <b>fases</b>: regiones homogéneas con la misma estructura y composición, separadas de las demás por superficies límite. Cuando un elemento (soluto) se disuelve en la red cristalina de otro (disolvente) se forma una <b>solución sólida</b>, que es una sola fase. Puede ser <b>sustitucional</b>, si los átomos del soluto ocupan posiciones de la red (níquel en cobre, cinc en cobre), o <b>intersticial</b>, si se alojan en los huecos (carbono, nitrógeno o hidrógeno en el hierro).",
      "Para que dos metales sean totalmente solubles en sustitución deben cumplir las <b>reglas de Hume-Rothery</b>: radios atómicos que no difieran más de un 15 %, la misma red cristalina, electronegatividades parecidas y la misma valencia. El cobre y el níquel las cumplen. Si los elementos tienden a combinarse en proporciones fijas, se forman <b>compuestos intermetálicos</b> como la cementita Fe<sub>3</sub>C o el CuAl<sub>2</sub>, duros y frágiles. Y si no se disuelven, el resultado es una <b>mezcla</b> de cristales de distintas fases.",
    ], svg: compara("Solución sólida sustitucional frente a intersticial: en la primera el soluto ocupa posiciones de la red; en la segunda se aloja en los huecos", ["Sustitucional", ["soluto en la red", "radios parecidos", "Cu-Ni, Cu-Zn", "una sola fase"]], ["Intersticial", ["soluto en huecos", "átomos pequeños", "C, N, H en Fe", "distorsiona la red"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "4.2 Curvas de enfriamiento y diagramas de equilibrio", p: [
      "Si se enfría lentamente un metal puro fundido y se registra su temperatura, la curva tiene un <b>tramo horizontal</b> a la temperatura de fusión: mientras solidifica, el calor latente mantiene la temperatura constante. En cambio, una aleación como Cu-Ni solidifica en un <b>intervalo de temperaturas</b>: la curva cambia de pendiente al empezar a solidificar y otra vez al terminar.",
      "Repitiendo el experimento con muchas composiciones y llevando a una gráfica los puntos de inicio y fin de la solidificación, se construye el <mark>diagrama de equilibrio</mark> o de fases de la aleación: en el eje horizontal, la composición (% en masa de uno de los elementos) y en el vertical, la temperatura. Muestra qué fases están presentes en equilibrio (enfriamiento muy lento) para cada composición y temperatura.",
      "La línea por encima de la cual todo es líquido se llama <b>líquidus</b>, y la línea por debajo de la cual todo es sólido, <b>sólidus</b>. Entre ambas conviven líquido y sólido. La <b>regla de las fases de Gibbs</b> a presión constante, F = C − P + 1 (C componentes, P fases), indica los grados de libertad: en un metal puro que solidifica, F = 1 − 2 + 1 = 0, así que la temperatura no puede variar.",
    ], svg: graf("Curvas de enfriamiento: un metal puro tiene un tramo horizontal al solidificar; una aleación solidifica en un intervalo con dos cambios de pendiente", "tiempo", "T", [
      { p: [[0, 0.95], [0.2, 0.62], [0.55, 0.62], [0.9, 0.2]], c: "var(--pen)", t: "" },
      { p: [[0, 0.82], [0.15, 0.52], [0.5, 0.36], [0.85, 0.05]], c: "var(--red)", t: "" },
    ], `${T(120, 64, "metal puro", { fs: 11, b: true, c: "var(--pen)" })}${T(110, 124, "aleación", { fs: 11, b: true, c: "var(--red)" })}`) }),
    bloque({ h: "4.3 Solubilidad total y regla de la palanca", p: [
      "El diagrama más sencillo es el de dos metales con <b>solubilidad total</b> en estado líquido y sólido, como el cobre y el níquel: arriba hay líquido, abajo una única solución sólida α y entre las curvas una zona bifásica L + α.",
      "Para leer un punto (composición C<sub>0</sub>, temperatura T) se usan tres reglas. Si cae en una zona monofásica, esa fase tiene la composición de la aleación. Si cae en la zona bifásica, se traza una horizontal (<b>isoterma</b> o línea de reparto) hasta cortar el líquidus y el sólidus: los cortes dan la composición del líquido C<sub>L</sub> y del sólido C<sub>α</sub>. Y las <b>cantidades</b> de cada fase se calculan con la <mark>regla de la palanca</mark>: la fracción de cada fase es el brazo opuesto dividido entre la longitud total.",
      formula("W<sub>L</sub> = (C<sub>α</sub> − C<sub>0</sub>) / (C<sub>α</sub> − C<sub>L</sub>) &nbsp;&nbsp; W<sub>α</sub> = (C<sub>0</sub> − C<sub>L</sub>) / (C<sub>α</sub> − C<sub>L</sub>)"),
      "Ejemplo: una aleación con 35 % de Ni a 1 250 °C está en la zona L + α, con C<sub>L</sub> = 32 % Ni y C<sub>α</sub> = 43 % Ni. W<sub>L</sub> = (43 − 35)/(43 − 32) = 0,73 y W<sub>α</sub> = 0,27: hay un 73 % de líquido (con 32 % Ni) y un 27 % de sólido (con 43 % Ni). Al enfriar, el sólido va cambiando de composición; si el enfriamiento es rápido no da tiempo a la difusión y los granos quedan con el centro más rico en níquel que la periferia: es la <b>segregación</b> o estructura con núcleos (<i>coring</i>).",
    ], svg: cuniSVG, video: V("al-palanca", "Diagramas de equilibrio y regla de la palanca", "regla de la palanca diagrama de fases") }),
    bloque({ h: "4.4 El diagrama eutéctico", p: [
      "Muchos metales son totalmente solubles en estado líquido pero solo <b>parcialmente</b> en estado sólido. Es el caso del plomo y el estaño (las soldaduras blandas clásicas). En su diagrama aparecen dos soluciones sólidas: α (rica en plomo) y β (rica en estaño), y una zona α + β en la que conviven ambas.",
      "El punto clave es el <mark>punto eutéctico</mark> E (61,9 % Sn y 183 °C): a esa composición, el líquido solidifica de golpe a una temperatura constante y más baja que la de los dos metales puros (327 °C el plomo y 232 °C el estaño), transformándose a la vez en las dos fases sólidas:",
      formula("Líquido → α + β &nbsp; (reacción eutéctica)"),
      "El sólido eutéctico tiene una estructura muy fina de láminas alternadas de α y β. Una aleación hipoeutéctica (por ejemplo, 40 % Sn) empieza a solidificar formando cristales de α <b>proeutéctica</b>; al llegar a 183 °C, el líquido que queda tiene la composición eutéctica y solidifica como eutéctico. Justo encima de 183 °C, con α de 18,3 % Sn y L de 61,9 % Sn: W<sub>α</sub> = (61,9 − 40)/(61,9 − 18,3) = 0,50. Así que la aleación tendrá un 50 % de α proeutéctica y un 50 % de eutéctico.",
      "Las aleaciones eutécticas se usan donde interesa un punto de fusión bajo y una solidificación limpia: soldaduras (las de estaño-plata-cobre sin plomo son hoy obligatorias en electrónica), aleaciones de fundición como el aluminio-silicio y fusibles.",
    ], svg: pbsnSVG }),
    bloque({ h: "4.5 Otras transformaciones en estado sólido", p: [
      "Además de la reacción eutéctica, los diagramas binarios pueden contener otras reacciones invariantes (tres fases en equilibrio a temperatura fija, F = 2 − 3 + 1 = 0):",
      "La reacción <b>eutectoide</b> es como la eutéctica pero toda en estado sólido: una fase sólida se transforma, al enfriar, en otras dos sólidas, γ → α + β. Es la más importante para los aceros. La reacción <b>peritéctica</b> es la combinación de un líquido y un sólido que dan otro sólido distinto, L + α → β, y aparece en el diagrama Fe-C a altas temperaturas y en muchos latones y bronces. La <b>peritectoide</b> es su equivalente en estado sólido.",
      "Para aplicar la regla de la palanca en cualquier diagrama hay que localizar siempre la región en la que está el punto y, si es bifásica, buscar los límites de esa región a la misma temperatura. En las zonas con fases y constituyentes (por ejemplo, α proeutéctica y eutéctico), se puede calcular tanto la proporción de <b>fases</b> (α y β totales) como la de <b>constituyentes</b> microscópicos (lo que se ve al microscopio), usando en cada caso los extremos adecuados.",
    ], svg: rejilla("Reacciones invariantes de los diagramas binarios: eutéctica, eutectoide, peritéctica y peritectoide con su esquema", ["Reacción", "Al enfriar"], [["Eutéctica", "L → α + β"], ["Eutectoide", "γ → α + β"], ["Peritéctica", "L + α → β"], ["Peritectoide", "α + β → γ"]], "var(--leaf)") }),
    bloque({ h: "4.6 El diagrama hierro-carbono", p: [
      "El diagrama Fe-Fe<sub>3</sub>C (hierro-cementita) es el más importante de la ingeniería, porque explica los aceros y las fundiciones. Va de 0 % de carbono (hierro puro) a 6,67 % (cementita pura). Sus fases son:",
      "<b>Ferrita</b> (α): solución sólida intersticial de carbono en hierro BCC; disuelve como máximo un 0,022 % de C a 727 °C. Es blanda, dúctil y magnética. <b>Austenita</b> (γ): solución de carbono en hierro FCC, estable a alta temperatura; disuelve hasta un 2,11 % a 1 148 °C. Es blanda, tenaz y no magnética. <b>Cementita</b> (Fe<sub>3</sub>C): compuesto intermetálico con un 6,67 % de C, muy duro y frágil.",
      "Hay dos reacciones fundamentales. La <b>eutectoide</b>, a 727 °C y 0,77 % C: γ → α + Fe<sub>3</sub>C. El constituyente que se forma, láminas alternadas de ferrita y cementita, se llama <mark>perlita</mark> por su brillo nacarado. Y la <b>eutéctica</b>, a 1 148 °C y 4,3 % C: L → γ + Fe<sub>3</sub>C, cuyo constituyente se llama <b>ledeburita</b>.",
      "Los productos con menos de un 2,11 % de C son <b>aceros</b>; con más, <b>fundiciones</b>. Los aceros se clasifican en <b>hipoeutectoides</b> (C &lt; 0,77 %), <b>eutectoide</b> (0,77 %) e <b>hipereutectoides</b> (0,77 % a 2,11 %). Las líneas más usadas en tratamientos se llaman A<sub>1</sub> (727 °C), A<sub>3</sub> (de 912 °C a 727 °C, límite de la austenita en los hipoeutectoides) y A<sub>cm</sub> (límite de la austenita en los hipereutectoides).",
    ], svg: fecSVG, video: V("al-fec", "Diagrama de fases hierro-carbono desde cero", "diagrama hierro carbono") }),
    bloque({ h: "4.7 Constituyentes de los aceros y fundiciones", p: [
      "Al enfriar lentamente un acero <b>hipoeutectoide</b> (por ejemplo, 0,4 % C) desde la zona austenítica, al cruzar la línea A<sub>3</sub> empieza a formarse ferrita en los límites de grano (<b>ferrita proeutectoide</b>) y la austenita restante se enriquece en carbono. Al llegar a 727 °C, la austenita que queda tiene 0,77 % C y se transforma en perlita. A temperatura ambiente, el acero tiene ferrita y perlita:",
      formula("W<sub>perlita</sub> = (C<sub>0</sub> − 0,022) / (0,77 − 0,022) &nbsp;&nbsp; con 0,4 % C: W<sub>perlita</sub> = 0,378 / 0,748 = 0,51"),
      "Cuanta más perlita, más resistente y menos dúctil es el acero: un acero con 0,1 % C es blando (chapas para embutir); uno con 0,45 % C, de resistencia media (ejes); uno eutectoide es duro (raíles, muelles). En un acero <b>hipereutectoide</b> (por ejemplo, 1,2 % C), al cruzar A<sub>cm</sub> se forma <b>cementita proeutectoide</b> en los límites de grano y el resto acaba siendo perlita: W<sub>Fe3C</sub> = (1,2 − 0,77)/(6,67 − 0,77) = 0,073. Son muy duros y se usan en herramientas.",
      "Las <b>fundiciones</b> (2,11 % a 6,67 % C; en la práctica de 2,5 % a 4 %) funden a menor temperatura que los aceros y se moldean muy bien, pero son frágiles. La <b>fundición blanca</b> tiene el carbono en forma de cementita y es durísima. En la <b>fundición gris</b>, con silicio y enfriamiento lento, el carbono aparece como <b>láminas de grafito</b>: es fácil de mecanizar y amortigua vibraciones (bancadas de máquinas, bloques de motor). En la <b>fundición nodular</b> o dúctil, con magnesio, el grafito forma esferas y el material es casi tan tenaz como un acero (tuberías, cigüeñales).",
    ], svg: barras("Proporción de perlita en aceros enfriados lentamente según su carbono: 0,1 por ciento de carbono, 10 por ciento de perlita; 0,2, 24 por ciento; 0,4, 51; 0,6, 77 y 0,77, 100 por ciento", "Perlita en el acero (%)", [["0,1 % C", 10, "var(--muted)"], ["0,2 % C", 24, "var(--pen)"], ["0,4 % C", 51, "var(--pen)"], ["0,6 % C", 77, "var(--red)"], ["0,77 % C", 100, "var(--red)"]]) }),
    bloque({ h: "4.8 Aceros aleados y su designación", p: [
      "Además de carbono, los aceros pueden llevar otros <b>elementos de aleación</b> que mejoran propiedades concretas. El <b>manganeso</b> aumenta la resistencia y neutraliza el azufre. El <b>cromo</b> aumenta la dureza y la templabilidad y, por encima del 10,5 %, forma una película de óxido que hace al acero <b>inoxidable</b>. El <b>níquel</b> mejora la tenacidad (también a baja temperatura) y estabiliza la austenita. El <b>molibdeno</b> y el <b>vanadio</b> dan resistencia en caliente y afinan el grano. El <b>wolframio</b> y el cobalto se usan en aceros rápidos para herramientas de corte. El <b>silicio</b> mejora las propiedades magnéticas (chapas de transformadores).",
      "La norma UNE-EN 10027 designa los aceros de dos maneras. Por su <b>uso y propiedades</b>: S235 o S355 son aceros estructurales con 235 o 355 MPa de límite elástico mínimo. Por su <b>composición</b>: C45 es un acero no aleado con 0,45 % de carbono; 42CrMo4 es un acero de baja aleación con 0,42 % C, cromo (4/4 = 1 %) y molibdeno; X5CrNi18-10 es un inoxidable de alta aleación con 0,05 % C, 18 % Cr y 10 % Ni.",
      "Los <b>aceros inoxidables</b> se clasifican por su estructura: <b>ferríticos</b> (solo cromo, magnéticos, económicos), <b>austeníticos</b> (cromo y níquel, como el 18-8 de cubiertos y fregaderos; no magnéticos y muy dúctiles), <b>martensíticos</b> (más carbono, templables, para cuchillos e instrumental) y <b>dúplex</b>.",
    ], svg: rejilla("Designación de aceros: S355 estructural con 355 MPa de límite elástico; C45 con 0,45 por ciento de carbono; 42CrMo4 de baja aleación; X5CrNi18-10 inoxidable", ["Designación", "Significado"], [["S355", "estructural, Re ≥ 355 MPa"], ["C45", "no aleado, 0,45 % C"], ["42CrMo4", "0,42 % C, 1 % Cr, Mo"], ["X5CrNi18-10", "inox: 18 % Cr, 10 % Ni"]], "var(--muted)") }),
    bloque({ h: "4.9 Tratamientos térmicos: recocido y normalizado", p: [
      "Un <mark>tratamiento térmico</mark> es un ciclo de calentamiento, mantenimiento a una temperatura y enfriamiento controlado que modifica la estructura de un metal (sin cambiar su composición) para darle las propiedades deseadas. Las tres variables son la temperatura, el tiempo de permanencia y la velocidad de enfriamiento.",
      "El <b>recocido</b> busca ablandar el acero, aumentar su ductilidad, eliminar tensiones internas o regenerar su estructura. En el <b>recocido completo</b> se calienta unos 50 °C por encima de A<sub>3</sub> (hipoeutectoides) hasta austenizar, se mantiene y se enfría muy lentamente dentro del horno: se obtiene ferrita y perlita gruesa, la estructura más blanda. Hay otros tipos: el <b>recocido de eliminación de tensiones</b> (500-650 °C, por debajo de A<sub>1</sub>, tras soldar o mecanizar), el <b>de recristalización</b> (para eliminar la acritud de piezas deformadas en frío) y el <b>globular</b> (la cementita se convierte en glóbulos para mecanizar mejor los aceros de alto carbono).",
      "El <b>normalizado</b> calienta igual que el recocido completo, pero el enfriamiento se hace <b>al aire en calma</b>. Al ser algo más rápido, se forma perlita más fina y grano más pequeño: el acero queda algo más duro y resistente que recocido y con propiedades homogéneas. Se usa para «normalizar» piezas forjadas o fundidas con estructuras irregulares y como paso previo al temple.",
    ], svg: graf("Ciclos de tratamiento térmico: calentamiento hasta austenizar, mantenimiento y enfriamiento lento en horno para el recocido, al aire para el normalizado y muy rápido para el temple", "tiempo", "T", [
      { p: [[0, 0.1], [0.25, 0.8], [0.45, 0.8], [0.95, 0.15]], c: "var(--leaf)", t: "" },
      { p: [[0.45, 0.8], [0.62, 0.15]], c: "var(--pen)", t: "" },
      { p: [[0.45, 0.8], [0.5, 0.1]], c: "var(--red)", t: "" },
    ], `${T(168, 122, "normalizado", { fs: 10, b: true, c: "var(--pen)", a: "start" })}${T(128, 112, "temple", { fs: 10, b: true, c: "var(--red)", a: "end" })}${T(226, 100, "recocido", { fs: 10, b: true, c: "var(--leaf)" })}<path d="M40 70 H 240" stroke="var(--muted)" stroke-dasharray="4 3"/>${T(238, 66, "A₃ + 50 °C", { fs: 9, a: "end", c: "var(--muted)" })}`), video: V("al-tratamientos", "Tratamiento térmico del acero: templado, revenido, recocido y normalizado", "tratamientos térmicos del acero") }),
    bloque({ h: "4.10 El temple", p: [
      "El <mark>temple</mark> tiene como objetivo endurecer el acero. Se calienta hasta austenizar (por encima de A<sub>3</sub> en los hipoeutectoides; por encima de A<sub>1</sub> en los hipereutectoides) y se enfría <b>muy rápidamente</b> en agua, salmuera, aceite o aire a presión. La austenita no tiene tiempo de transformarse por difusión en ferrita y perlita, y el carbono queda atrapado en una red distorsionada: se forma la <b>martensita</b>, un constituyente en forma de agujas, durísimo y frágil, con mucha tensión interna.",
      "Para obtener martensita hay que enfriar más deprisa que la <b>velocidad crítica de temple</b>. Los <b>diagramas TTT</b> (temperatura-tiempo-transformación) muestran, para cada temperatura, cuánto tarda la austenita en empezar y en terminar de transformarse: tienen forma de C con una «nariz». Un enfriamiento que pasa a la izquierda de la nariz evita la perlita y la bainita y forma martensita al cruzar la temperatura M<sub>s</sub> (inicio) hasta M<sub>f</sub> (fin).",
      "La <b>templabilidad</b> es la aptitud de un acero para templarse en profundidad. En una pieza gruesa, el centro se enfría más despacio que la superficie y puede no llegar a templar. Los elementos de aleación (Cr, Mo, Ni, Mn) desplazan las curvas TTT hacia la derecha, de modo que esos aceros se templan incluso en aceite o al aire, con menos riesgo de grietas y deformaciones. La templabilidad se mide con el <b>ensayo Jominy</b>: se templa por un extremo una probeta cilíndrica con un chorro de agua y se mide la dureza a lo largo de ella. La dureza máxima que se alcanza depende sobre todo del contenido en carbono.",
    ], svg: tttSVG }),
    bloque({ h: "4.11 Revenido y tratamientos isotérmicos", p: [
      "Una pieza recién templada es demasiado frágil y tiene tensiones internas que pueden agrietarla. Por eso, casi siempre después del temple se hace un <mark>revenido</mark>: se calienta a una temperatura <b>inferior a A<sub>1</sub></b> (entre 150 y 650 °C), se mantiene y se enfría. La martensita se descompone parcialmente en ferrita con finísimas partículas de carburos: la dureza baja algo, pero la tenacidad aumenta mucho y desaparecen las tensiones.",
      "Cuanto más alta es la temperatura de revenido, más blanda y tenaz queda la pieza. Con revenidos bajos (150-250 °C) se conserva casi toda la dureza (herramientas de corte, cojinetes); con revenidos altos (500-650 °C) se obtiene la mejor combinación de resistencia y tenacidad. El temple seguido de revenido alto se llama <b>bonificado</b> y es el tratamiento típico de ejes, bielas, engranajes y tornillos de alta resistencia. Antiguamente, el herrero controlaba el revenido por los <b>colores de revenido</b> de la capa de óxido: amarillo pajizo hacia 220 °C, azul hacia 300 °C.",
      "Los <b>tratamientos isotérmicos</b> enfrían rápidamente hasta una temperatura intermedia y la mantienen. En el <b>martemplado</b> se iguala la temperatura de la pieza justo por encima de M<sub>s</sub> antes de terminar el temple, reduciendo deformaciones y grietas. En el <b>austemplado</b> se mantiene la pieza en la zona de la bainita hasta transformarla por completo: da piezas tenaces y sin necesidad de revenido (muelles, clips).",
    ], svg: graf("Efecto de la temperatura de revenido: al aumentar la temperatura disminuye la dureza y aumenta la tenacidad", "T de revenido (150 → 650 °C)", "propiedad", [
      { p: [[0, 0.92], [0.3, 0.82], [0.6, 0.6], [1, 0.32]], c: "var(--red)", t: "" },
      { p: [[0, 0.15], [0.3, 0.28], [0.6, 0.55], [1, 0.85]], c: "var(--leaf)", t: "" },
    ], `${T(70, 62, "dureza", { fs: 11, b: true, c: "var(--red)" })}${T(74, 112, "tenacidad", { fs: 11, b: true, c: "var(--leaf)" })}`) }),
    bloque({ h: "4.12 Tratamientos termoquímicos y superficiales", p: [
      "Muchas piezas necesitan una <b>superficie muy dura</b> que resista el desgaste y un <b>núcleo tenaz</b> que aguante los golpes: los dientes de un engranaje, un árbol de levas, un bulón. Se consigue cambiando la composición o la estructura solo de la capa exterior.",
      "Los <mark>tratamientos termoquímicos</mark> añaden un elemento a la superficie por difusión. En la <b>cementación</b>, una pieza de acero de bajo carbono (0,1-0,2 %) se calienta en austenita (900-950 °C) en un medio rico en carbono (gas, sales o sólido) durante horas; el carbono penetra de 0,5 a 2 mm. Después se templa y reviene: la superficie, con 0,8-1 % C, queda como acero templado (unos 60 HRC) y el núcleo sigue siendo tenaz. En la <b>nitruración</b>, el nitrógeno se difunde a unos 500-550 °C en aceros con Al, Cr o Mo, formando nitruros durísimos; no necesita temple posterior y apenas deforma la pieza. La <b>carbonitruración</b> combina carbono y nitrógeno, y la <b>sulfinización</b> añade azufre para reducir el rozamiento.",
      "Los <b>tratamientos superficiales</b> sin cambio de composición calientan solo la capa exterior de un acero templable (0,4-0,5 % C) y la templan enseguida: el <b>temple por inducción</b> usa una bobina con corriente alterna de alta frecuencia que induce corrientes en la superficie; el <b>temple a la llama</b> usa un soplete. Hoy se emplean también el láser y los recubrimientos por deposición de capas finísimas (nitruro de titanio dorado en brocas).",
    ], svg: compara("Cementación frente a nitruración: la primera añade carbono a unos 925 grados y necesita temple; la segunda añade nitrógeno a unos 520 grados sin temple", ["Cementación", ["añade carbono", "≈ 925 °C, horas", "acero 0,15 % C", "después: temple"]], ["Nitruración", ["añade nitrógeno", "≈ 520 °C", "acero con Al, Cr", "sin temple"]], "var(--red)", "var(--pen)"), video: V("al-superficial", "Temple superficial, cementación y nitruración", "cementación nitruración") }),
    bloque({ h: "4.13 Aleaciones no férreas y endurecimiento por precipitación", p: [
      "Las principales aleaciones no férreas son las de <b>aluminio</b> (ligeras, resistentes a la corrosión; con Cu, Mg, Si o Zn), las de <b>cobre</b> (latón Cu-Zn, bronce Cu-Sn, cuproaluminio, cuproníquel), las de <b>titanio</b> (Ti-6Al-4V en aviación y prótesis), las de <b>magnesio</b> (las más ligeras) y las de <b>níquel</b> (superaleaciones para turbinas).",
      "Muchas de ellas se endurecen con un tratamiento de <mark>precipitación</mark> o envejecimiento, posible cuando la solubilidad de un elemento disminuye al bajar la temperatura. El ejemplo clásico es el <b>duraluminio</b> (Al con un 4 % de Cu), inventado en 1906 por Alfred Wilm:",
      "1) <b>Solubilización</b>: se calienta a unos 500 °C, donde todo el cobre se disuelve en el aluminio (una sola fase). 2) <b>Temple</b>: se enfría rápido en agua, quedando una solución sobresaturada, todavía blanda. 3) <b>Maduración o envejecimiento</b>: a temperatura ambiente (natural) durante días o a 150-190 °C (artificial) durante horas, el cobre forma <b>precipitados finísimos</b> que bloquean las dislocaciones. La resistencia puede multiplicarse por tres. Si se calienta demasiado o demasiado tiempo, los precipitados crecen y el material se ablanda (<b>sobreenvejecimiento</b>). Así se tratan las aleaciones de aluminio de aviones, bicicletas y piezas de automóvil.",
    ], svg: pasos("Endurecimiento por precipitación del duraluminio: solubilización a 500 grados, temple en agua, envejecimiento con precipitados finos y riesgo de sobreenvejecimiento", ["Solubilizar ≈ 500 °C", "Templar en agua", "Envejecer: precipitados finos", "¡Sin sobreenvejecer!"], "var(--leaf)") }),
    bloque({ h: "4.14 Oxidación y corrosión", p: [
      "La <b>oxidación</b> seca es la reacción de un metal con el oxígeno del aire, sobre todo a alta temperatura, formando una capa de óxido. Si la capa es compacta y se adhiere bien (aluminio, cromo, titanio), protege al metal: es la <b>pasivación</b>. Si es porosa o se desprende (hierro), la oxidación continúa. La relación de <b>Pilling-Bedworth</b>, cociente entre el volumen del óxido y el del metal consumido, predice si la capa protege (valores entre 1 y 2).",
      "La <mark>corrosión</mark> electroquímica es mucho más frecuente: ocurre en presencia de un <b>electrolito</b> (agua, humedad, suelo, sales). En la zona <b>anódica</b> el metal se oxida y se disuelve (Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>) y en la <b>catódica</b> se reduce el oxígeno o el hidrógeno; los electrones viajan por el metal. Si se unen dos metales distintos, el más activo según la <b>serie galvánica</b> (magnesio, cinc, aluminio, acero… cobre, acero inoxidable, oro) actúa como ánodo y se corroe: es la <b>corrosión galvánica</b>. Otros tipos son la corrosión uniforme, por picaduras, en grietas, intergranular y bajo tensión.",
      "Las principales formas de <b>protección</b> son: elegir materiales resistentes (inoxidables, aleaciones de aluminio); <b>recubrimientos</b> metálicos (galvanizado con cinc, cromado, niquelado) o no metálicos (pinturas, plásticos, esmaltes); <b>protección catódica</b>, convirtiendo la pieza en cátodo con un <b>ánodo de sacrificio</b> de cinc o magnesio (barcos, depósitos, tuberías enterradas) o con corriente impresa; <b>inhibidores</b> añadidos al fluido; y un <b>diseño</b> adecuado, evitando uniones de metales distintos, zonas donde se acumule agua y grietas. La corrosión cuesta en torno al 3 % del PIB de los países industrializados.",
    ], svg: pilaSVG, video: V("al-corrosion", "La protección del acero contra la corrosión", "corrosión protección acero") }),
  ],
  figura: figura("Aleaciones y tratamientos", "Diagramas de fases, hierro-carbono, tratamientos térmicos y corrosión", [["Diagramas", "palanca", "eutéctico · eutectoide"], ["Hierro-carbono", "perlita 0,77 % C", "aceros < 2,11 % C"], ["Tratamientos", "temple + revenido", "recocido · normalizado"], ["Superficie", "cementación", "corrosión y protección"]], "#b45309"),
  video: V("al-fec", "Diagrama de fases hierro-carbono desde cero", "diagrama hierro carbono"),
  ejemplos: [
    { enunciado: "Una aleación Cu-Ni con 35 % Ni está a 1 250 °C. El líquidus corta la isoterma en 32 % Ni y el sólidus en 43 % Ni. Indica las fases, su composición y su proporción. Si la aleación pesa 5 kg, ¿cuántos kg de níquel hay en el sólido?", pasos: ["Zona L + α. C<sub>L</sub> = 32 % Ni; C<sub>α</sub> = 43 % Ni.", "W<sub>L</sub> = (43 − 35)/(43 − 32) = 8/11 = 0,727; W<sub>α</sub> = 0,273.", "Masa de α = 0,273 · 5 = 1,36 kg; níquel en α = 0,43 · 1,36."], resultado: "73 % de líquido (32 % Ni) y 27 % de sólido α (43 % Ni); unos 0,59 kg de Ni en el sólido." },
    { enunciado: "Una aleación Pb-Sn con 40 % Sn se enfría lentamente. Calcula a 184 °C la proporción de α y de líquido, y justo por debajo de 183 °C la proporción de fases α (18,3 % Sn) y β (97,8 % Sn).", pasos: ["A 184 °C: W<sub>α</sub> = (61,9 − 40)/(61,9 − 18,3) = 21,9/43,6 = 0,50; W<sub>L</sub> = 0,50.", "Por debajo de 183 °C, el líquido se convierte en eutéctico: 50 % α proeutéctica y 50 % eutéctico.", "Fases totales: W<sub>α</sub> = (97,8 − 40)/(97,8 − 18,3) = 57,8/79,5 = 0,73; W<sub>β</sub> = 0,27."], resultado: "Constituyentes: 50 % α proeutéctica y 50 % eutéctico. Fases: 73 % α y 27 % β." },
    { enunciado: "Un acero de 0,4 % C se enfría lentamente hasta temperatura ambiente. Calcula el porcentaje de ferrita proeutectoide y de perlita, y el de las fases ferrita y cementita.", pasos: ["Constituyentes: W<sub>perlita</sub> = (0,4 − 0,022)/(0,77 − 0,022) = 0,378/0,748 = 0,505; ferrita proeutectoide = 0,495.", "Fases: W<sub>Fe3C</sub> = (0,4 − 0,022)/(6,67 − 0,022) = 0,378/6,648 = 0,057.", "W<sub>α</sub> = 1 − 0,057 = 0,943."], resultado: "≈ 49,5 % ferrita proeutectoide y 50,5 % perlita; en fases, 94,3 % ferrita y 5,7 % cementita." },
    { enunciado: "Calcula la proporción de ferrita y cementita en la perlita y explica por qué se ve como láminas.", pasos: ["Perlita: 0,77 % C entre α (0,022 %) y Fe<sub>3</sub>C (6,67 %).", "W<sub>α</sub> = (6,67 − 0,77)/(6,67 − 0,022) = 5,90/6,648 = 0,887; W<sub>Fe3C</sub> = 0,113.", "Las dos fases crecen a la vez desde la austenita, alternándose para que el carbono solo tenga que difundirse distancias cortas."], resultado: "≈ 88,7 % ferrita y 11,3 % cementita, en láminas alternas finas." },
    { enunciado: "Un acero de 1,2 % C se enfría lentamente. ¿Qué constituyentes tiene a temperatura ambiente y en qué proporción?", pasos: ["Es hipereutectoide: forma cementita proeutectoide al cruzar A<sub>cm</sub> y perlita a 727 °C.", "W<sub>Fe3C proeut.</sub> = (1,2 − 0,77)/(6,67 − 0,77) = 0,43/5,9 = 0,073.", "W<sub>perlita</sub> = 1 − 0,073."], resultado: "≈ 7,3 % de cementita proeutectoide (en los límites de grano) y 92,7 % de perlita." },
    { enunciado: "Un ánodo de sacrificio de cinc (M = 65,4 g/mol, se oxida a Zn<sup>2+</sup>) protege un casco de barco con una corriente media de 0,5 A. ¿Cuánto cinc se consume en un año? (F = 96 485 C/mol)", pasos: ["Carga en un año: Q = I · t = 0,5 · 365 · 24 · 3 600 = 1,577 · 10<sup>7</sup> C.", "Moles de Zn = Q/(n F) = 1,577 · 10<sup>7</sup>/(2 · 96 485) = 81,7 mol.", "Masa = 81,7 · 65,4 g."], resultado: "≈ 5,3 kg de cinc al año." },
  ],
  errores: [
    "Aplicar la regla de la palanca al revés: la fracción de una fase es el brazo del lado opuesto, no el más próximo a ella.",
    "Usar la composición de la aleación como composición de las fases en una zona bifásica: hay que leerla en los extremos de la isoterma.",
    "Confundir fases (ferrita, cementita) con constituyentes (perlita, ledeburita): la perlita no es una fase, sino una mezcla de dos.",
    "Pensar que el revenido es un temple suave: el revenido se hace siempre por debajo de A<sub>1</sub> y después del temple.",
    "Cementar un acero de alto carbono: la cementación se aplica a aceros de bajo carbono para tener núcleo tenaz.",
    "Proteger el hierro con un metal menos activo y dejarlo rayado: si el recubrimiento es más noble (como el estaño), en una raya el hierro hace de ánodo y se corroe más deprisa; con cinc ocurre lo contrario.",
  ],
  ejercicios: [
    B("¿Qué diferencia hay entre una solución sólida sustitucional y una intersticial? Pon un ejemplo de cada una.", "En la sustitucional el soluto ocupa posiciones de la red del disolvente (Ni en Cu); en la intersticial se aloja en huecos entre átomos (C en Fe)."),
    B("¿Por qué el cobre y el níquel son totalmente solubles en estado sólido?", "Cumplen las reglas de Hume-Rothery: radios atómicos parecidos (diferencia < 15 %), misma red FCC, electronegatividades y valencias similares."),
    B("Define líquidus y sólidus.", "Líquidus: línea por encima de la cual toda la aleación es líquida. Sólidus: línea por debajo de la cual toda es sólida."),
    B("¿Qué es un punto eutéctico? ¿Qué ventaja tiene una aleación eutéctica para soldar?", "Composición y temperatura en las que el líquido solidifica a temperatura constante en dos fases sólidas. Funde a la menor temperatura posible y solidifica de golpe, sin estado pastoso."),
    B("Escribe la reacción eutectoide del acero e indica su temperatura y composición.", "γ (0,77 % C) → α (0,022 % C) + Fe<sub>3</sub>C (6,67 % C), a 727 °C."),
    B("Define ferrita, austenita, cementita y perlita.", "Ferrita: solución de C en Fe BCC (máx. 0,022 %). Austenita: solución de C en Fe FCC (máx. 2,11 %). Cementita: Fe<sub>3</sub>C, 6,67 % C, dura y frágil. Perlita: constituyente eutectoide de láminas de ferrita y cementita."),
    B("Clasifica en hipoeutectoide, eutectoide, hipereutectoide o fundición: 0,2 % C; 0,77 % C; 1,1 % C; 3,5 % C.", "0,2 %: acero hipoeutectoide. 0,77 %: eutectoide. 1,1 %: hipereutectoide. 3,5 %: fundición."),
    B("Interpreta las designaciones S275, C35 y 34CrNiMo6.", "S275: acero estructural con límite elástico mínimo de 275 MPa. C35: no aleado, 0,35 % C. 34CrNiMo6: baja aleación, 0,34 % C, 6/4 = 1,5 % Cr, con níquel y molibdeno."),
    B("Compara recocido y normalizado: temperatura, enfriamiento y resultado.", "Ambos austenizan (≈ A<sub>3</sub> + 50 °C). El recocido enfría en el horno, muy lento, y deja la estructura más blanda; el normalizado enfría al aire y da grano y perlita más finos, algo más duros y homogéneos."),
    B("¿Qué es la martensita y cómo se obtiene?", "Constituyente muy duro y frágil, en agujas, formado por austenita enfriada más rápido que la velocidad crítica, que atrapa el carbono en una red distorsionada."),
    B("¿Por qué casi siempre se reviene después de templar?", "Para eliminar las tensiones internas y la fragilidad de la martensita, aumentando la tenacidad a cambio de perder algo de dureza."),
    B("¿Qué metal se corroe al unir una chapa de cobre con un tornillo de acero en presencia de humedad? ¿Cómo lo evitarías?", "El acero, más activo, actúa de ánodo y se corroe (además el tornillo es pequeño frente al cátodo grande). Se evita aislando eléctricamente con arandelas plásticas o usando tornillería del mismo metal o más noble."),
    M("Una aleación Cu-Ni de 50 % Ni está a 1 300 °C, con C<sub>L</sub> = 45 % y C<sub>α</sub> = 58 %. Calcula las fracciones de fase.", "W<sub>L</sub> = (58 − 50)/(58 − 45) = 8/13 = 0,615; W<sub>α</sub> = 5/13 = 0,385."),
    M("Aplica la regla de Gibbs a: a) aleación binaria en zona bifásica; b) punto eutéctico.", "a) F = 2 − 2 + 1 = 1: la temperatura puede variar (solidifica en un intervalo). b) F = 2 − 3 + 1 = 0: invariante, la temperatura es fija."),
    M("Una aleación Pb-Sn con 30 % Sn: calcula, justo por debajo de 183 °C, la proporción de α proeutéctica y de eutéctico.", "Justo encima de 183 °C: W<sub>α</sub> = (61,9 − 30)/(61,9 − 18,3) = 31,9/43,6 = 0,73. Por debajo: 73 % α proeutéctica y 27 % eutéctico."),
    M("Una aleación Pb-Sn tiene, justo por debajo de 183 °C, un 60 % de eutéctico y es hipoeutéctica. ¿Qué composición tiene?", "W<sub>eutéctico</sub> = (C<sub>0</sub> − 18,3)/(61,9 − 18,3) = 0,6 → C<sub>0</sub> = 18,3 + 0,6 · 43,6 = 44,5 % Sn."),
    M("Calcula los constituyentes de un acero de 0,2 % C enfriado lentamente.", "W<sub>perlita</sub> = (0,2 − 0,022)/0,748 = 0,238; ferrita proeutectoide = 0,762."),
    M("Al microscopio, un acero hipoeutectoide recocido muestra un 75 % de perlita. ¿Cuánto carbono tiene?", "0,75 = (C − 0,022)/0,748 → C = 0,022 + 0,561 = 0,58 % C."),
    M("Calcula la proporción de cementita proeutectoide y de perlita en un acero de 1,0 % C.", "W<sub>Fe3C</sub> = (1,0 − 0,77)/(6,67 − 0,77) = 0,23/5,9 = 0,039; perlita 0,961."),
    M("¿A qué temperatura austenizarías para templar un acero de 0,45 % C, sabiendo que su A<sub>3</sub> está a unos 770 °C? ¿Y un acero de 1,2 % C?", "Hipoeutectoide: A<sub>3</sub> + 30-50 °C ≈ 800-820 °C. Hipereutectoide: por encima de A<sub>1</sub>, ≈ 760-780 °C (sin llegar a A<sub>cm</sub>, para dejar carburos que aumentan la resistencia al desgaste y no engrosar el grano)."),
    M("Explica por qué los aceros aleados con cromo y molibdeno se pueden templar en aceite y los de carbono necesitan agua.", "Los aleantes retrasan la transformación de la austenita (desplazan las curvas TTT a la derecha), así que basta un enfriamiento más lento para no cortar la nariz y formar martensita. Eso reduce grietas y deformaciones."),
    M("Describe los tratamientos de un engranaje que debe tener dientes de 60 HRC y núcleo tenaz, fabricado en acero 16MnCr5.", "Cementación a unos 925 °C (capa de 0,8-1 % C), temple desde unos 800-850 °C en aceite y revenido bajo (150-200 °C). Superficie de martensita dura y núcleo de bajo carbono tenaz."),
    M("Describe el endurecimiento por precipitación del duraluminio y qué ocurre si se sobreenvejece.", "Solubilización a ≈ 500 °C, temple en agua (solución sobresaturada) y envejecimiento natural o artificial que forma precipitados finos que frenan las dislocaciones. Si se sobreenvejece, los precipitados crecen, se separan y la resistencia baja."),
    M("Explica por qué el galvanizado protege el acero incluso si se raya y el estañado no.", "El cinc es más activo que el hierro: en una raya actúa de ánodo y se sacrifica (protección catódica). El estaño es más noble: en una raya el hierro queda de ánodo frente a una gran superficie catódica y se corroe deprisa."),
    A("Un acero de 0,6 % C se enfría lentamente. Calcula: a) la ferrita proeutectoide y la perlita; b) la ferrita y la cementita totales; c) la ferrita que hay dentro de la perlita.", "a) W<sub>perlita</sub> = (0,6 − 0,022)/0,748 = 0,773; ferrita proeut. = 0,227. b) W<sub>Fe3C</sub> = (0,6 − 0,022)/6,648 = 0,087; W<sub>α</sub> = 0,913. c) Ferrita total − proeutectoide = 0,913 − 0,227 = 0,686 (que es 0,887 · 0,773)."),
    A("Un acero tiene un 3 % de cementita total a temperatura ambiente. ¿Cuánto carbono tiene y qué proporción de perlita?", "0,03 = (C − 0,022)/6,648 → C = 0,022 + 0,199 = 0,22 % C. W<sub>perlita</sub> = (0,22 − 0,022)/0,748 = 0,265."),
    A("Una aleación A-B tiene un eutéctico al 40 % de B y 600 °C, con α de 10 % B y β de 90 % B. Una muestra tiene un 25 % de β proeutéctico. Calcula su composición y las fases totales.", "Hipereutéctica: W<sub>β proeut.</sub> = (C − 40)/(90 − 40) = 0,25 → C = 52,5 % B. Fases: W<sub>α</sub> = (90 − 52,5)/(90 − 10) = 0,469; W<sub>β</sub> = 0,531."),
    A("Interpreta un diagrama TTT: indica qué constituyente obtendrías al enfriar un acero eutectoide a) en el horno; b) al aire; c) en agua; d) rápidamente hasta 350 °C y manteniéndolo una hora.", "a) Perlita gruesa (blanda). b) Perlita fina (normalizado). c) Martensita (temple). d) Bainita (austemplado), tenaz y con buena dureza."),
    A("Un eje de 80 mm de diámetro de acero C45 templado en agua tiene 55 HRC en la superficie y 25 HRC en el centro. Explica por qué y propón una solución si se necesita dureza uniforme.", "El centro se enfría más lento que la velocidad crítica y no forma martensita (poca templabilidad del acero al carbono). Solución: usar un acero aleado de mayor templabilidad, como 42CrMo4, que temple en profundidad, y después revenir."),
    A("Calcula cuánto tiempo dura un ánodo de magnesio de 10 kg (M = 24,3 g/mol, Mg → Mg<sup>2+</sup>) con una corriente de 0,2 A, suponiendo que se aprovecha el 60 %.", "Moles = 10 000/24,3 = 411,5 mol; carga = 411,5 · 2 · 96 485 = 7,94 · 10<sup>7</sup> C; útil = 0,6 · 7,94 · 10<sup>7</sup> = 4,76 · 10<sup>7</sup> C. t = 4,76 · 10<sup>7</sup>/0,2 = 2,38 · 10<sup>8</sup> s ≈ 7,5 años."),
    A("Diseña la secuencia de fabricación y tratamientos de un muelle de suspensión de coche partiendo de una barra de acero de 0,6 % C con Si y Mn.", "Recocido globular o normalizado de la barra para facilitar el conformado; enrollado en caliente; temple en aceite desde unos 850 °C; revenido a unos 450 °C para obtener alto límite elástico con tenacidad; granallado para crear compresiones superficiales que mejoran la fatiga; pintura o recubrimiento anticorrosión."),
  ],
  quiz: [
    q4("Una fase es…", ["un tipo de cristal", "una región homogénea en estructura y composición", "un tratamiento térmico", "un compuesto químico"], 1, "Separada por superficies límite."),
    q4("El carbono en el hierro forma una solución…", ["sustitucional", "intersticial", "líquida", "eutéctica"], 1, "Átomos pequeños en los huecos."),
    q4("Un metal puro solidifica…", ["en un intervalo", "a temperatura constante", "sin calor latente", "siempre en eutéctico"], 1, "Tramo horizontal."),
    q4("Por debajo de la línea sólidus todo es…", ["líquido", "sólido", "gas", "eutéctico"], 1, "Por encima del líquidus, líquido."),
    q4("En la regla de la palanca, W<sub>L</sub> =", ["(C<sub>0</sub> − C<sub>L</sub>)/(C<sub>α</sub> − C<sub>L</sub>)", "(C<sub>α</sub> − C<sub>0</sub>)/(C<sub>α</sub> − C<sub>L</sub>)", "C<sub>L</sub>/C<sub>α</sub>", "C<sub>0</sub>/C<sub>L</sub>"], 1, "Brazo opuesto."),
    q4("La reacción eutéctica es…", ["L → α + β", "γ → α + β", "L + α → β", "α → L"], 0, "Un líquido da dos sólidos."),
    q4("En el punto eutéctico, la regla de Gibbs da F =", ["0", "1", "2", "3"], 0, "2 − 3 + 1."),
    q4("La austenita es hierro…", ["BCC", "FCC", "HCP", "amorfo"], 1, "Disuelve hasta 2,11 % C."),
    q4("La perlita tiene un…", ["0,022 % C", "0,77 % C", "2,11 % C", "4,3 % C"], 1, "Eutectoide."),
    q4("La temperatura eutectoide del acero es…", ["727 °C", "912 °C", "1 148 °C", "1 538 °C"], 0, "Línea A<sub>1</sub>."),
    q4("Un producto con 3 % C es…", ["un acero hipoeutectoide", "un acero hipereutectoide", "una fundición", "hierro puro"], 2, "Más de 2,11 %."),
    q4("La fundición gris contiene el carbono como…", ["cementita", "láminas de grafito", "esferas de grafito", "martensita"], 1, "Las esferas son de la nodular."),
    q4("Para que un acero sea inoxidable necesita al menos…", ["2 % Ni", "10,5 % Cr", "1 % C", "5 % Mo"], 1, "Capa pasiva de óxido de cromo."),
    q4("El tratamiento que deja el acero más blando es…", ["temple", "normalizado", "recocido completo", "revenido bajo"], 2, "Enfriamiento en horno."),
    q4("La martensita se forma al…", ["enfriar muy lento", "enfriar más rápido que la velocidad crítica", "revenir", "cementar"], 1, "Sin tiempo para difundir."),
    q4("La templabilidad se mide con el ensayo…", ["Charpy", "Jominy", "Brinell", "Erichsen"], 1, "Probeta templada por un extremo."),
    q4("El revenido se hace a una temperatura…", ["mayor que A<sub>3</sub>", "menor que A<sub>1</sub>", "de fusión", "ambiente"], 1, "150-650 °C."),
    q4("Temple más revenido alto se llama…", ["normalizado", "bonificado", "cementado", "recocido"], 1, "Ejes y bielas."),
    q4("La nitruración…", ["necesita temple posterior", "se hace a unos 520 °C sin temple", "añade carbono", "se hace a 1 000 °C"], 1, "Forma nitruros duros."),
    q4("Un ánodo de sacrificio para proteger acero puede ser de…", ["cobre", "cinc", "oro", "estaño"], 1, "Más activo que el hierro."),
  ],
  examen: [
    q4("C<sub>0</sub> = 40 %, C<sub>L</sub> = 30 %, C<sub>α</sub> = 55 %. W<sub>α</sub> =", ["0,40", "0,60", "0,25", "0,75"], 0, "10/25."),
    q4("Perlita en un acero de 0,3 % C:", ["37 %", "63 %", "30 %", "39 %"], 0, "0,278/0,748."),
    q4("Cementita total en un acero de 0,77 % C:", ["0,77 %", "11,3 %", "50 %", "88,7 %"], 1, "0,748/6,648."),
    q4("42CrMo4 tiene un contenido de carbono de…", ["4,2 %", "0,42 %", "42 %", "0,042 %"], 1, "Se divide entre 100."),
    q4("El normalizado enfría…", ["en el horno", "al aire", "en agua", "en aceite"], 1, "Perlita más fina."),
    q4("Para un engranaje de superficie dura y núcleo tenaz, de acero de 0,15 % C, se aplica…", ["recocido", "cementación + temple + revenido", "solo temple", "normalizado"], 1, "Añade carbono en la capa."),
    q4("El duraluminio se endurece por…", ["temple martensítico", "precipitación", "cementación", "acritud solo"], 1, "Solubilización, temple y envejecimiento."),
    q4("Acero unido a cobre en agua de mar: se corroe…", ["el cobre", "el acero", "los dos igual", "ninguno"], 1, "Es el más activo."),
  ],
  feynman: ["Cómo se lee un punto en un diagrama de fases y se aplica la regla de la palanca", "Qué es la perlita y cómo se forma en un acero", "Qué diferencia hay entre recocido, normalizado y temple", "Por qué se reviene después del temple", "Cómo funciona la corrosión galvánica y cómo protege un ánodo de sacrificio"],
  glosario: [
    ["Aleación", "Sustancia metálica formada por dos o más elementos."],
    ["Fase", "Región homogénea en estructura y composición, separada de otras por límites."],
    ["Solución sólida", "Fase en la que un elemento se disuelve en la red cristalina de otro."],
    ["Diagrama de equilibrio", "Gráfico que muestra las fases estables según composición y temperatura."],
    ["Regla de la palanca", "Método para calcular la proporción de cada fase en una zona bifásica."],
    ["Eutéctico", "Punto en el que un líquido solidifica a temperatura constante en dos sólidos."],
    ["Eutectoide", "Transformación de un sólido en otros dos sólidos a temperatura constante."],
    ["Ferrita", "Solución de carbono en hierro BCC; blanda y dúctil."],
    ["Austenita", "Solución de carbono en hierro FCC, estable a alta temperatura."],
    ["Cementita", "Carburo de hierro Fe₃C, duro y frágil, con 6,67 % de carbono."],
    ["Perlita", "Constituyente eutectoide de láminas de ferrita y cementita."],
    ["Martensita", "Constituyente durísimo que se forma al templar la austenita."],
    ["Templabilidad", "Aptitud de un acero para templarse en profundidad."],
    ["Revenido", "Calentamiento por debajo de A₁ tras el temple para dar tenacidad."],
    ["Cementación", "Tratamiento que enriquece en carbono la superficie del acero."],
    ["Precipitación", "Endurecimiento por partículas finas de una segunda fase."],
    ["Corrosión", "Deterioro electroquímico de un metal en presencia de un electrolito."],
    ["Ánodo de sacrificio", "Metal más activo que se corroe para proteger otro."],
  ],
  situacion: {
    titulo: "Tratamientos térmicos en el aula taller",
    reto: "El departamento quiere fabricar unos pequeños cinceles y punzones con acero de herramientas. Vuestro equipo planificará y ensayará los tratamientos térmicos para que sean duros en la punta y no se rompan.",
    pasos: [
      "Identificad el acero (por su designación o con el ensayo de chispa) y situad su contenido de carbono en el diagrama Fe-C.",
      "Determinad la temperatura de austenización y elegid el medio de temple con ayuda de fichas técnicas.",
      "Con la supervisión del profesorado, templad varias probetas en agua y aceite usando un horno de mufla o una fragua.",
      "Revenid cada probeta a una temperatura distinta (observando los colores de revenido) y comprobad su dureza con una lima o un durómetro.",
      "Romped una probeta de cada caso en un tornillo de banco y comparad las superficies de fractura.",
    ],
    producto: "Una hoja de proceso del tratamiento elegido, con la tabla de resultados de dureza y fragilidad y fotografías de las fracturas.",
    evaluacion: [
      "Justifica las temperaturas con el diagrama hierro-carbono.",
      "Relaciona el enfriamiento y el revenido con la dureza y la tenacidad obtenidas.",
      "Cumple las normas de seguridad (EPI, manipulación de piezas calientes).",
      "Elige y justifica el tratamiento final con los datos.",
    ],
  },
  mapa: mapaB("ALEACIONES Y TRATAMIENTOS", [
    ["Diagramas de fases", "líquidus · sólidus · palanca · eutéctico", "var(--pen)"],
    ["Hierro-carbono", "ferrita · austenita · perlita · cementita", "var(--red)"],
    ["Tratamientos", "temple · revenido · cementación", "#b45309"],
    ["Corrosión", "pila galvánica · galvanizado · ánodo", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Regla de la palanca", "W_L = (Cα − C₀)/(Cα − C_L)"],
    ["Regla de Gibbs (P cte.)", "F = C − P + 1"],
    ["Reacción eutéctica", "L → α + β"],
    ["Reacción eutectoide del acero", "γ → α + Fe₃C a 727 °C y 0,77 % C"],
    ["Límite acero-fundición", "2,11 % C"],
    ["Perlita en acero hipoeutectoide", "(C₀ − 0,022)/(0,77 − 0,022)"],
    ["Recocido / normalizado", "Enfriar en horno / al aire"],
    ["Temple", "Austenizar y enfriar rápido → martensita"],
    ["Revenido", "< A₁ tras el temple: menos dureza, más tenacidad"],
    ["Cementación", "Añadir C a la superficie de acero de bajo C, después templar"],
    ["Precipitación", "Solubilizar, templar, envejecer"],
    ["Protección catódica", "Ánodo de sacrificio de Zn o Mg"],
  ],
  familias: [
    "Fijaos en el color del hierro al rojo en una barbacoa o chimenea y relacionadlo con su temperatura.",
    "Buscad en casa objetos de acero inoxidable y comprobad con un imán cuáles son austeníticos (no se pegan) y cuáles ferríticos o martensíticos.",
    "Observad dónde aparece óxido en una bici o una verja y comentad por qué empieza en las uniones y los arañazos.",
    "Comparad una cuchara de acero inoxidable con un clavo oxidado y explicad la diferencia con la palabra «pasivación».",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Materiales y fabricación»: aleaciones y diagramas de equilibrio; diagrama hierro-carbono; tratamientos térmicos y termoquímicos de los metales y su efecto sobre las propiedades; oxidación y corrosión, métodos de protección; selección de materiales según aplicación.`,
    ideas: [
      "Curva de enfriamiento de estaño o de una soldadura con un termopar y un registrador de datos.",
      "Templar y revenir clavos o alambre de acero de muelle y comprobar la diferencia al doblarlos.",
      "Experiencia de corrosión con clavos en agua salada: solo, unido a cobre y unido a cinc, con indicador de fenolftaleína y ferricianuro.",
      "Simulador en línea del diagrama hierro-carbono para calcular constituyentes con la regla de la palanca.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Diagrama hierro-carbono, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Diagrama_hierro-carbono" },
    { t: "Tratamiento térmico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tratamiento_t%C3%A9rmico" },
    { t: "Corrosión, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Corrosi%C3%B3n" },
  ],
  revisado: "2026-11-21",
};
