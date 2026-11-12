// Física y Química 2º ESO: los estados de agregación. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

// Caja con partículas: x, y esquina; tipo "s" sólido, "l" líquido, "g" gas.
const part = (x, y, tipo, c = "var(--pen)") => {
  let p = "";
  if (tipo === "s") for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) p += `<circle cx="${x + 14 + i * 14}" cy="${y + 40 + j * 14}" r="6" fill="${c}"/>`;
  if (tipo === "l") [[12, 70], [26, 72], [40, 68], [54, 72], [68, 70], [18, 84], [32, 86], [48, 84], [62, 86], [12, 98], [28, 98], [44, 98], [58, 98], [70, 96], [36, 56], [56, 58]].forEach(([a, b]) => { p += `<circle cx="${x + a}" cy="${y + b}" r="6" fill="${c}"/>`; });
  if (tipo === "g") [[14, 20], [60, 30], [36, 50], [70, 70], [18, 84], [50, 96]].forEach(([a, b]) => { p += `<circle cx="${x + a}" cy="${y + b}" r="6" fill="${c}"/>`; });
  return `<rect x="${x}" y="${y + 8}" width="84" height="100" rx="4" fill="none" stroke="var(--ink)" stroke-width="2"/>${p}`;
};

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "Los estados de agregación",
  minutos: 50,
  objetivos: ["Describir las propiedades de los sólidos, los líquidos y los gases", "Explicar los estados de la materia con la teoría cinético-molecular", "Nombrar y explicar los cambios de estado y la diferencia entre evaporación y ebullición", "Interpretar una gráfica de calentamiento y relacionar presión, volumen y temperatura en los gases"],
  claves: ["sólido", "líquido", "gas", "teoría cinético-molecular", "cambio de estado", "fusión", "ebullición", "presión"],
  pregunta: {
    texto: "Si dejas un vaso de agua en la mesa, al cabo de unos días está vacío. Pero el agua nunca llegó a hervir. ¿A dónde se ha ido?",
    respuesta: "Se ha <mark>evaporado</mark>. Las partículas de agua de la superficie que se mueven más rápido escapan al aire convertidas en vapor, aunque el agua esté a temperatura ambiente. Es distinto de la <b>ebullición</b>, que ocurre a una temperatura fija (100 °C a nivel del mar) y en todo el líquido a la vez, con burbujas.",
  },
  bloques: [
    {
      html: `<h3>Tres estados de la materia</h3><p>La materia que nos rodea se presenta en tres <mark>estados de agregación</mark> principales: <b>sólido</b>, <b>líquido</b> y <b>gaseoso</b>. Una misma sustancia puede estar en cualquiera de ellos según la temperatura y la presión: el agua es hielo en el congelador, líquida en el grifo y vapor en la olla. Los <b>sólidos</b> tienen forma y volumen fijos: una piedra no cambia aunque la metamos en una caja. Los <b>líquidos</b> tienen volumen fijo pero adoptan la forma del recipiente: un litro de leche es un litro en la botella y en el vaso. Los <b>gases</b> no tienen forma ni volumen fijos: ocupan todo el espacio disponible, por eso el olor de un perfume llena enseguida una habitación.</p>${tabla(["Propiedad", "Sólido", "Líquido", "Gas"], [["Forma", "propia", "la del recipiente", "la del recipiente"], ["Volumen", "fijo", "fijo", "variable"], ["¿Se comprime?", "no", "casi nada", "sí, mucho"], ["¿Fluye?", "no", "sí", "sí"]])}`,
    },
    {
      html: `<h3>La teoría cinético-molecular</h3><p>¿Por qué se comportan así? La <mark>teoría cinético-molecular</mark> lo explica con un modelo sencillo. Dice que: 1) toda la materia está formada por <b>partículas</b> muy pequeñas que no podemos ver; 2) entre ellas hay <b>espacio vacío</b>; 3) las partículas están en <b>continuo movimiento</b>, y se mueven más deprisa cuanto mayor es la temperatura; 4) entre las partículas hay <b>fuerzas de atracción</b>, que son más intensas cuanto más cerca están. Con estas cuatro ideas podemos explicar las propiedades de los tres estados y los cambios de uno a otro. Es un ejemplo de cómo la ciencia usa <b>modelos</b>: representaciones simplificadas que explican lo que observamos y permiten hacer predicciones.</p>`,
      video: { id: "NGVbvm2-18U", titulo: "Teoría cinético molecular de la materia", canal: "Susi Profe", vistas: 489292 },
    },
    {
      html: `<h3>Las partículas en cada estado</h3><p>En los <mark>sólidos</mark>, las partículas están muy <b>juntas y ordenadas</b>, unidas por fuerzas de atracción muy intensas. Solo pueden <b>vibrar</b> en su sitio; por eso tienen forma propia y no se comprimen. En los <mark>líquidos</mark>, las partículas siguen juntas, pero las fuerzas son algo menores y pueden <b>deslizarse</b> unas sobre otras; por eso fluyen y adoptan la forma del recipiente, aunque mantienen su volumen. En los <mark>gases</mark>, las partículas están <b>muy separadas</b>, las fuerzas son casi nulas y se mueven a gran velocidad <b>en todas direcciones</b>, chocando entre sí y con las paredes. Como hay mucho espacio vacío entre ellas, los gases se pueden comprimir, como el aire de una jeringa tapada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de partículas: en el sólido están juntas y ordenadas, en el líquido juntas pero desordenadas y en el gas muy separadas y moviéndose en todas direcciones">${BG}
        ${part(-4 + 8, 14, "s")}${part(88, 14, "l")}${part(172, 14, "g")}
        ${[[200, 34, 214, 26], [246, 44, 236, 36], [224, 78, 212, 88]].map(([a, b, c, d]) => fl(a, b, c, d, "var(--red)", 1.5)).join("")}
        ${t(46, 152, "sólido", { size: 12 })}${t(130, 152, "líquido", { size: 12 })}${t(214, 152, "gas", { size: 12 })}
        ${t(46, 168, "vibran", { size: 10, color: "var(--muted)" })}${t(130, 168, "se deslizan", { size: 10, color: "var(--muted)" })}${t(214, 168, "libres", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los cambios de estado</h3><p>Al calentar o enfriar una sustancia, puede cambiar de estado. Los <b>cambios progresivos</b> ocurren al <b>absorber calor</b>: la <mark>fusión</mark> (sólido a líquido, como el hielo que se derrite), la <mark>vaporización</mark> (líquido a gas) y la <mark>sublimación</mark> (sólido a gas directamente, como la naftalina o el hielo seco). Los <b>cambios regresivos</b> ocurren al <b>desprender calor</b>: la <mark>solidificación</mark> (líquido a sólido, como el agua que se congela), la <mark>condensación</mark> (gas a líquido, como el vaho en un espejo) y la <mark>sublimación inversa</mark> o deposición (gas a sólido, como la escarcha). En un cambio de estado la sustancia sigue siendo la misma: el hielo, el agua y el vapor son agua. Es un <b>cambio físico</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de cambios de estado: fusión de sólido a líquido, solidificación al revés; vaporización de líquido a gas, condensación al revés; sublimación de sólido a gas y sublimación inversa al revés">${BG}
        ${caja(14, 128, 70, 30, "SÓLIDO", "var(--pen)", { size: 11 })}${caja(176, 128, 70, 30, "LÍQUIDO", "var(--pen)", { size: 11 })}${caja(95, 14, 70, 30, "GAS", "var(--pen)", { size: 11 })}
        ${fl(86, 136, 174, 136, "var(--red)", 2)}${fl(174, 150, 86, 150, "var(--pen)", 2)}${t(130, 130, "fusión", { size: 9, color: "var(--red)" })}${t(130, 166, "solidificación", { size: 9, color: "var(--pen)" })}
        ${fl(206, 126, 160, 46, "var(--red)", 2)}${fl(150, 46, 196, 126, "var(--pen)", 2)}${t(222, 70, "vaporización", { size: 9, color: "var(--red)" })}${t(222, 104, "condensación", { size: 9, color: "var(--pen)" })}
        ${fl(40, 126, 98, 46, "var(--red)", 2)}${fl(110, 46, 54, 126, "var(--pen)", 2)}${t(38, 70, "sublimación", { size: 9, color: "var(--red)" })}${t(38, 104, "s. inversa", { size: 9, color: "var(--pen)" })}</svg>`,
      video: { id: "x2nKoFYolj8", titulo: "Los cambios en los estados de la materia: fusión, vaporización…", canal: "Smile and Learn", vistas: 1961634 },
    },
    {
      html: `<h3>Evaporación y ebullición</h3><p>La vaporización puede ocurrir de dos formas. La <mark>evaporación</mark> se produce <b>solo en la superficie</b> del líquido y a <b>cualquier temperatura</b>: algunas partículas de la superficie se mueven tan rápido que escapan al aire. Es lo que pasa con la ropa tendida o con un charco al sol. Es más rápida si hace calor, si hay viento y si la superficie es grande. La <mark>ebullición</mark> se produce <b>en todo el líquido</b> a la vez, con formación de <b>burbujas</b> de vapor en su interior, y solo ocurre a una temperatura fija: el <b>punto de ebullición</b>. El agua hierve a 100 °C a nivel del mar, pero en lo alto de una montaña, donde la presión es menor, hierve antes: en la cima del Everest, a unos 70 °C. Por eso allí la pasta tarda mucho más en cocerse.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Evaporación: un charco al sol del que salen partículas solo por la superficie. Ebullición: una olla al fuego con burbujas en todo el líquido">${BG}
        <circle cx="34" cy="34" r="14" fill="#ffd34d"/><ellipse cx="66" cy="136" rx="52" ry="12" fill="var(--pen)" fill-opacity=".35"/>
        ${[[50, 110], [70, 96], [86, 114]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--pen)"/>${fl(x, y - 6, x, y - 22, "var(--muted)", 1.2)}`).join("")}
        ${t(66, 170, "evaporación", { size: 11 })}
        <path d="M150 70 h 90 v 70 h -90 Z" fill="var(--pen)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2.5"/><path d="M140 70 h 10 M240 70 h 10" stroke="var(--ink)" stroke-width="3"/>
        ${[[164, 128], [182, 110], [204, 124], [224, 104], [174, 90], [214, 84], [196, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="var(--pen)"/>`).join("")}
        <path d="M160 150 q 6 -10 0 -16 q 10 6 6 16 M190 152 q 6 -12 0 -18 q 12 6 6 18 M220 150 q 6 -10 0 -16 q 10 6 6 16" fill="#f08a24"/>${t(195, 170, "ebullición", { size: 11 })}${t(195, 56, "100 °C", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La gráfica de calentamiento</h3><p>Si calentamos hielo a −20 °C y medimos la temperatura cada minuto, obtenemos una <mark>gráfica de calentamiento</mark> con una forma muy característica. Primero la temperatura sube hasta 0 °C. Entonces el hielo empieza a fundirse y, aunque seguimos calentando, la temperatura <b>se queda constante</b> hasta que todo el hielo se ha derretido: es el primer <b>tramo horizontal</b>. Después el agua líquida se calienta hasta 100 °C y vuelve a mantenerse constante mientras hierve: el segundo tramo horizontal. ¿A dónde va el calor en esos tramos? Se usa para <b>separar las partículas</b>, venciendo las fuerzas de atracción, no para que se muevan más rápido. Los tramos horizontales permiten identificar una <b>sustancia pura</b>, porque marcan sus puntos de fusión y ebullición.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de calentamiento del agua: la temperatura sube desde menos 20 hasta 0 grados, se mantiene constante mientras se funde, sube hasta 100, se mantiene mientras hierve y luego sube el vapor">${BG}
        ${fl(34, 150, 246, 150, "var(--ink)", 2)}${fl(34, 160, 34, 12, "var(--ink)", 2)}${t(244, 168, "tiempo", { size: 10, anchor: "end" })}${t(40, 18, "T (°C)", { size: 10, anchor: "start" })}
        <path d="M34 140 L 56 120 L 96 120 L 136 50 L 196 50 L 226 26" stroke="var(--red)" stroke-width="3" fill="none"/>
        <line x1="34" y1="120" x2="56" y2="120" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="34" y1="50" x2="136" y2="50" stroke="var(--muted)" stroke-dasharray="3 3"/>
        ${t(28, 124, "0", { size: 10, anchor: "end" })}${t(28, 54, "100", { size: 10, anchor: "end" })}
        ${t(76, 112, "fusión", { size: 10, color: "var(--pen)" })}${t(166, 42, "ebullición", { size: 10, color: "var(--pen)" })}${t(116, 98, "líquido", { size: 9, color: "var(--muted)", anchor: "start" })}${t(42, 144, "sólido", { size: 9, color: "var(--muted)", anchor: "start" })}${t(220, 46, "gas", { size: 9, color: "var(--muted)", anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>Los gases y la presión</h3><p>Las partículas de un gas chocan sin parar contra las paredes del recipiente. La fuerza de todos esos choques sobre cada unidad de superficie es la <mark>presión</mark> del gas. Se mide en <b>pascales (Pa)</b>, en atmósferas (atm) o en milímetros de mercurio (mmHg): 1 atm = 101 325 Pa = 760 mmHg. El aire que nos rodea también ejerce presión, la <b>presión atmosférica</b>, que se mide con el <b>barómetro</b>. Es mayor a nivel del mar y disminuye con la altura, porque hay menos aire encima. Por eso se taponan los oídos al subir un puerto de montaña o al despegar en avión. La presión de un gas aumenta si hay <b>más partículas</b> (inflar más una rueda), si se reduce el <b>volumen</b> o si sube la <b>temperatura</b>.</p>`,
    },
    {
      html: `<h3>Las leyes de los gases</h3><p>Los científicos de los siglos XVII al XIX descubrieron cómo se relacionan la presión, el volumen y la temperatura de un gas. La <mark>ley de Boyle</mark> dice que, a temperatura constante, si se reduce el volumen la presión aumenta en la misma proporción: <b>P · V = constante</b>. Si apretamos el émbolo de una jeringa tapada hasta la mitad, la presión se duplica. La <mark>ley de Charles</mark> dice que, a presión constante, el volumen de un gas aumenta con la temperatura: un globo se hincha al sol y se encoge en el congelador. La <mark>ley de Gay-Lussac</mark> dice que, a volumen constante, la presión aumenta con la temperatura: por eso un aerosol no debe calentarse, porque podría explotar. En estas leyes la temperatura se expresa en <b>kelvin</b>: T(K) = T(°C) + 273.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ley de Boyle: una jeringa con el émbolo fuera tiene 20 mililitros a 1 atmósfera; al empujar hasta 10 mililitros la presión sube a 2 atmósferas porque las partículas chocan más">${BG}
        ${[[30, 120, "V = 20 mL", "P = 1 atm"], [100, 60, "V = 10 mL", "P = 2 atm"]].map(([y, w, a, b], i) => `<rect x="24" y="${y}" width="150" height="40" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${24 + w}" y="${y + 2}" width="8" height="36" fill="var(--muted)"/><line x1="${32 + w}" y1="${y + 20}" x2="${32 + w + 28}" y2="${y + 20}" stroke="var(--muted)" stroke-width="5"/>${(i ? [[10, 8], [22, 26], [34, 12], [46, 30], [16, 18], [52, 14], [40, 22], [28, 32]] : [[14, 12], [40, 28], [66, 14], [96, 30], [28, 22], [56, 20], [84, 8], [108, 22]]).map(([px, py]) => `<circle cx="${24 + px}" cy="${y + py}" r="4" fill="var(--pen)"/>`).join("")}${t(250, y + 16, a, { size: 10, anchor: "end" })}${t(250, y + 32, b, { size: 10, anchor: "end", color: "var(--red)" })}`).join("")}
        ${t(130, 166, "P · V = constante", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Más allá de los tres estados</h3><p>Además de sólido, líquido y gas, existen otros estados. El <mark>plasma</mark> es un gas tan caliente que sus átomos han perdido electrones y queda formado por partículas con carga eléctrica. Es el estado más abundante del universo: el Sol y las demás estrellas son plasma, y también los rayos, las auroras polares y el interior de los tubos fluorescentes. En el laboratorio, enfriando ciertos gases casi hasta el cero absoluto (−273 °C), se obtiene el <b>condensado de Bose-Einstein</b>, en el que las partículas se comportan como una sola. También hay sustancias que no son fáciles de clasificar: el vidrio, la gelatina, la pasta de dientes o la mezcla de maicena y agua, que se comporta como sólido si la golpeas y como líquido si la mueves despacio.</p>`,
      video: { id: "e15fEWAs5yc", titulo: "Existen estados de la materia ¡que no conoces!", canal: "Date un Voltio", vistas: 484791 },
    },
  ],
  figura: {
    titulo: "Los estados y sus cambios",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Sólido, líquido y gas con sus partículas; al absorber calor se pasa de sólido a líquido y de líquido a gas; al desprender calor, al revés">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["SÓLIDO", "forma y volumen fijos", 30], ["LÍQUIDO", "volumen fijo", 245], ["GAS", "ni forma ni volumen", 460]].map(([a, b, x]) => `<rect x="${x}" y="40" width="150" height="150" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(x + 75, 72, a, { size: 16, color: "var(--pen)", font: D })}${t(x + 75, 172, b, { size: 12, weight: 400 })}`).join("")}
      ${[0, 1, 2, 3].map((i) => [0, 1, 2].map((j) => `<circle cx="${75 + i * 20}" cy="${100 + j * 20}" r="7" fill="var(--pen)"/>`).join("")).join("")}
      ${[[278, 110], [298, 112], [318, 108], [338, 112], [286, 128], [306, 132], [328, 130], [348, 128], [296, 146], [318, 148], [340, 146]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}
      ${[[490, 96], [560, 104], [520, 130], [584, 140], [500, 150], [550, 84]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}
      ${fl(184, 100, 241, 100, "var(--red)", 3)}${fl(241, 130, 184, 130, "var(--pen)", 3)}${fl(399, 100, 456, 100, "var(--red)", 3)}${fl(456, 130, 399, 130, "var(--pen)", 3)}
      ${t(320, 24, "absorbe calor →   ← desprende calor", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "cux9sSjtsgw", titulo: "Estados de agregación de la materia [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 1258221, megusta: 25381, busqueda: "estados de agregación de la materia" },
  ejemplos: [
    { enunciado: "Explica con la teoría cinético-molecular por qué un gas se puede comprimir y un sólido no.",
      pasos: ["En un gas las partículas están muy separadas y hay mucho espacio vacío entre ellas.", "Al empujar, las partículas se acercan y el volumen disminuye.", "En un sólido las partículas ya están juntas: no hay hueco para acercarlas más."],
      resultado: "El gas se comprime porque tiene mucho espacio vacío entre sus partículas." },
    { enunciado: "Un gas ocupa 6 L a 1 atm. Si, sin cambiar la temperatura, lo comprimimos hasta 2 L, ¿qué presión tendrá?",
      pasos: ["Ley de Boyle: P₁ · V₁ = P₂ · V₂.", "1 · 6 = P₂ · 2.", "P₂ = 6 / 2 = 3 atm."],
      resultado: "3 atm." },
    { enunciado: "Una sustancia funde a 80 °C y hierve a 218 °C (naftaleno). ¿En qué estado está a 20 °C, a 100 °C y a 250 °C?",
      pasos: ["A 20 °C no ha llegado a su punto de fusión: sólido.", "A 100 °C ha fundido pero no hierve: líquido.", "A 250 °C ha superado el punto de ebullición: gas."],
      resultado: "Sólido, líquido y gas." },
  ],
  errores: [
    "Pensar que las partículas de un sólido están quietas: vibran sin parar en su sitio.",
    "Confundir evaporación con ebullición: la evaporación ocurre en la superficie y a cualquier temperatura.",
    "Creer que la temperatura sigue subiendo mientras una sustancia pura cambia de estado: se mantiene constante.",
    "Llamar «humo» al vapor de agua de una olla: lo que vemos son gotitas de agua ya condensadas.",
    "Olvidar pasar la temperatura a kelvin en las leyes de Charles y Gay-Lussac.",
  ],
  ejercicios: [
    { q: "Indica si tienen forma y volumen propios: una moneda, el aire de un globo, el zumo de un vaso.", sol: "Moneda (sólido): forma y volumen propios. Aire (gas): ninguno. Zumo (líquido): volumen propio, forma del recipiente." },
    { q: "Enumera las cuatro ideas de la teoría cinético-molecular.", sol: "La materia está formada por partículas; entre ellas hay espacio vacío; están en continuo movimiento, más rápido cuanto mayor es la temperatura; y se atraen con fuerzas que dependen de la distancia." },
    { q: "Nombra el cambio de estado: a) la mantequilla en la sartén; b) el vaho en las gafas; c) la escarcha en el coche; d) el agua en el congelador.", sol: "a) Fusión; b) condensación; c) sublimación inversa; d) solidificación." },
    { q: "¿Cuáles de los cambios anteriores son progresivos y cuáles regresivos?", sol: "Progresivo: la fusión (a). Regresivos: condensación, sublimación inversa y solidificación (b, c, d)." },
    { q: "Da tres formas de que la ropa tendida se seque antes.", sol: "Tenderla al sol (más temperatura), con viento y bien extendida (más superficie)." },
    { q: "¿Por qué la pasta tarda más en cocerse en la montaña?", sol: "Porque la presión atmosférica es menor, el agua hierve a menos de 100 °C y cocina a menor temperatura." },
    { q: "En una gráfica de calentamiento hay un tramo horizontal a 78 °C. ¿Qué significa?", sol: "Que la sustancia está hirviendo: 78 °C es su punto de ebullición (es el del alcohol)." },
    { q: "Un gas ocupa 10 L a 2 atm. ¿Qué volumen ocupará a 5 atm si la temperatura no cambia?", sol: "P₁V₁ = P₂V₂ → 2 · 10 = 5 · V₂ → V₂ = 4 L." },
    { q: "Pasa a kelvin: 27 °C y −73 °C.", sol: "300 K y 200 K." },
    { q: "¿Por qué no se debe dejar un aerosol al sol?", sol: "Al calentarse, sus partículas se mueven más deprisa y la presión dentro del bote aumenta (ley de Gay-Lussac); podría explotar." },
  ],
  quiz: [
    { q: "Un líquido tiene…", o: ["forma y volumen fijos", "volumen fijo y forma variable", "ni forma ni volumen fijos"], a: 1, e: "Volumen fijo, forma del recipiente." },
    { q: "En un gas las partículas…", o: ["están muy juntas", "están muy separadas", "no se mueven"], a: 1, e: "Muy separadas." },
    { q: "Al aumentar la temperatura, las partículas…", o: ["se mueven más rápido", "se paran", "se hacen más grandes"], a: 0, e: "Se mueven más rápido." },
    { q: "El paso de sólido a gas directamente es la…", o: ["fusión", "sublimación", "condensación"], a: 1, e: "Sublimación." },
    { q: "El vaho de un espejo es una…", o: ["condensación", "evaporación", "fusión"], a: 0, e: "Condensación del vapor." },
    { q: "La evaporación ocurre…", o: ["en todo el líquido", "solo en la superficie", "solo a 100 °C"], a: 1, e: "En la superficie y a cualquier temperatura." },
    { q: "Mientras el hielo se funde, la temperatura…", o: ["sube", "baja", "se mantiene constante"], a: 2, e: "Constante a 0 °C." },
    { q: "La presión atmosférica se mide con el…", o: ["termómetro", "barómetro", "dinamómetro"], a: 1, e: "Barómetro." },
    { q: "Si se reduce el volumen de un gas a la mitad, su presión…", o: ["se duplica", "se reduce a la mitad", "no cambia"], a: 0, e: "Ley de Boyle." },
    { q: "El Sol está en estado de…", o: ["gas", "plasma", "líquido"], a: 1, e: "Plasma." },
  ],
  examen: [
    { q: "En los tramos horizontales de la gráfica de calentamiento, el calor se usa para…", o: ["subir la temperatura", "separar las partículas", "nada"], a: 1, e: "Para vencer las fuerzas de atracción." },
    { q: "0 °C son…", o: ["0 K", "273 K", "−273 K"], a: 1, e: "273 K." },
    { q: "Un globo se hincha al sol por la ley de…", o: ["Boyle", "Charles", "Hooke"], a: 1, e: "Charles: el volumen crece con la temperatura." },
  ],
  feynman: ["Cómo explica la teoría cinético-molecular los tres estados", "Qué diferencia hay entre evaporación y ebullición", "Por qué la temperatura no cambia mientras el hielo se funde"],
  mapa: mapa("ESTADOS", "var(--eso)", [
    ["Sólido · líquido · gas", "forma · volumen · compresión", "var(--pen)"],
    ["Teoría cinética", "partículas · movimiento · fuerzas", "#b8860b"],
    ["Cambios", "fusión · vaporización · sublimación", "var(--red)"],
    ["Gases", "presión · Boyle · Charles", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Teoría cinético-molecular", "Modelo: la materia son partículas en movimiento con espacio vacío y fuerzas entre ellas."],
    ["Fusión", "Paso de sólido a líquido al absorber calor."],
    ["Vaporización", "Paso de líquido a gas: evaporación o ebullición."],
    ["Sublimación", "Paso directo de sólido a gas."],
    ["Condensación", "Paso de gas a líquido al desprender calor."],
    ["Punto de ebullición", "Temperatura a la que hierve una sustancia pura; depende de la presión."],
    ["Presión", "Fuerza de los choques de las partículas por unidad de superficie; se mide en Pa."],
    ["Ley de Boyle", "A temperatura constante, P · V = constante."],
  ],
  familias: ["Meted un globo un poco inflado en el congelador y comparad su tamaño antes y después.", "Poned agua en un plato y en un vaso estrecho y mirad cuál se evapora antes.", "Buscad en casa ejemplos de cada cambio de estado (cubitos, vaho, ropa tendida)."],
  profesores: {
    saberes: "La materia: estados de agregación, teoría cinético-molecular, cambios de estado y leyes de los gases (RD 217/2022, Física y Química, bloque «La materia»).",
    ideas: ["Práctica de la gráfica de calentamiento del agua con termómetro y cronómetro.", "Jeringas tapadas para comprobar la compresibilidad de gases y líquidos.", "Dramatización: el alumnado representa las partículas en cada estado."],
  },
  fuentes: [RD, wiki("Estado de agregación de la materia", "Estado_de_agregación_de_la_materia"), wiki("Teoría cinética", "Teoría_cinética")],
  revisado: REV,
};
