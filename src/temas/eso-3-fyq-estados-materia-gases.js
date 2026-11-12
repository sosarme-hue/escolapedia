// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Los estados de la materia y los gases",
  minutos: 55,
  objetivos: ["Describir los estados de agregación con la teoría cinético-molecular", "Explicar los cambios de estado e interpretar curvas de calentamiento", "Relacionar presión, volumen y temperatura de un gas", "Aplicar las leyes de Boyle, Charles y Gay-Lussac"],
  claves: ["estado de agregación", "teoría cinético-molecular", "cambio de estado", "presión", "ley de Boyle", "ley de Charles", "ley de Gay-Lussac", "kelvin"],
  pregunta: {
    texto: "Si dejas una botella de plástico cerrada en el coche al sol de agosto, se hincha. Si la sacas de la nevera y la cierras, al calentarse en la mesa también se hincha. ¿Qué está pasando dentro?",
    respuesta: "El aire está formado por partículas que se mueven sin parar y chocan contra las paredes. Al subir la <mark>temperatura</mark>, se mueven más rápido y chocan con más fuerza: aumenta la <mark>presión</mark> y la botella se hincha. Es la ley de Gay-Lussac en tu coche.",
  },
  bloques: [
    {
      html: `<h3>Los tres estados de la materia</h3><p>En la naturaleza la materia aparece en tres <b>estados de agregación</b> principales. Los <mark>sólidos</mark> tienen <b>forma y volumen fijos</b>, no se pueden comprimir y no fluyen. Los <mark>líquidos</mark> tienen <b>volumen fijo</b> pero adoptan la <b>forma del recipiente</b>, fluyen y apenas se comprimen. Los <mark>gases</mark> no tienen ni forma ni volumen propios: ocupan <b>todo el recipiente</b>, se comprimen con facilidad y se expanden. Existe un cuarto estado, el <b>plasma</b>, un gas muy caliente con partículas cargadas, que forma las estrellas, los rayos y la luz de los tubos fluorescentes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Partículas en los tres estados: ordenadas y juntas en el sólido, juntas pero desordenadas en el líquido y muy separadas en el gas">${BG}
        ${[0, 1, 2].map(k => `<rect x="${12 + k * 82}" y="40" width="72" height="90" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        ${Array.from({ length: 20 }, (_, i) => `<circle cx="${22 + (i % 4) * 17}" cy="${66 + Math.floor(i / 4) * 14}" r="6" fill="var(--pen)"/>`).join("")}
        ${[[104, 120], [118, 116], [132, 122], [146, 118], [110, 106], [126, 104], [142, 106], [100, 92], [116, 92], [134, 90], [150, 94], [108, 78], [128, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--water)"/>`).join("")}
        ${[[190, 54], [222, 62], [206, 92], [234, 110], [186, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--inf)"/>`).join("")}
        ${[["sólido", 48], ["líquido", 130], ["gas", 212]].map(([n, x]) => t(x, 28, n, { size: 12 })).join("")}
        ${[["ordenadas", 48], ["juntas, se deslizan", 130], ["muy separadas", 212]].map(([n, x]) => t(x, 150, n, { size: 9, weight: 400 })).join("")}</svg>`,
      video: { id: "cux9sSjtsgw", titulo: "ESTADOS DE AGREGACIÓN DE LA MATERIA [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 1258175 },
    },
    {
      html: `<h3>La teoría cinético-molecular</h3><p>Para explicar estas propiedades, los científicos proponen la <mark>teoría cinético-molecular</mark>, un modelo con cuatro ideas. Primera: la materia está formada por <b>partículas</b> muy pequeñas. Segunda: entre las partículas hay <b>espacio vacío</b>. Tercera: las partículas están en <b>movimiento continuo</b>, y se mueven más deprisa cuanto mayor es la temperatura. Cuarta: entre ellas hay <b>fuerzas de atracción</b>, que son fuertes en los sólidos, menores en los líquidos y casi nulas en los gases. En los sólidos las partículas solo vibran en su sitio; en los líquidos se deslizan unas sobre otras; en los gases se mueven libremente en línea recta y chocan entre sí y con las paredes.</p>`,
      video: { id: "NGVbvm2-18U", titulo: "Teoría CINÉTICO MOLECULAR de la materia", canal: "Susi Profe", vistas: 489292 },
    },
    {
      html: `<h3>Los cambios de estado</h3><p>Al calentar o enfriar, la materia cambia de estado. Los cambios <b>progresivos</b> absorben energía: la <b>fusión</b> (sólido a líquido), la <b>vaporización</b> (líquido a gas) y la <b>sublimación</b> (sólido a gas directamente, como el hielo seco o la naftalina). Los cambios <b>regresivos</b> desprenden energía: la <b>solidificación</b> (líquido a sólido), la <b>condensación</b> (gas a líquido, como el vaho en un espejo) y la <b>sublimación inversa</b> o deposición (gas a sólido, como la escarcha). En un cambio de estado la sustancia no cambia: el hielo, el agua y el vapor son siempre agua. Es un <mark>cambio físico</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de los cambios de estado: fusión y solidificación entre sólido y líquido, vaporización y condensación entre líquido y gas, sublimación y deposición entre sólido y gas">${BG}
        ${caja(14, 130, 70, 32, "SÓLIDO", "var(--pen)", { size: 11 })}${caja(176, 130, 70, 32, "LÍQUIDO", "var(--water)", { size: 11 })}${caja(95, 14, 70, 32, "GAS", "var(--inf)", { size: 11 })}
        ${fl(86, 140, 174, 140, "var(--red)", 2)}${fl(174, 154, 86, 154, "var(--pen)", 2)}${t(130, 134, "fusión", { size: 10, color: "var(--red)" })}${t(130, 172, "solidificación", { size: 10, color: "var(--pen)" })}
        ${fl(200, 128, 156, 48, "var(--red)", 2)}${fl(146, 48, 190, 128, "var(--pen)", 2)}${t(236, 86, "vaporiz.", { size: 10, anchor: "end", color: "var(--red)" })}${t(168, 104, "conden.", { size: 10, anchor: "end", color: "var(--pen)" })}
        ${fl(40, 128, 96, 40, "var(--red)", 2)}${fl(106, 48, 56, 128, "var(--pen)", 2)}${t(14, 80, "sublim.", { size: 10, anchor: "start", color: "var(--red)" })}${t(84, 104, "depos.", { size: 10, anchor: "start", color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Evaporación y ebullición</h3><p>La vaporización puede ocurrir de dos formas. La <mark>evaporación</mark> se produce solo en la <b>superficie</b> del líquido y a <b>cualquier temperatura</b>: por eso la ropa tendida se seca aunque no haga calor. Es más rápida si hace calor, si hay viento o si el líquido está extendido. La <mark>ebullición</mark> se produce en <b>todo el volumen</b> del líquido, con burbujas, y solo a una temperatura concreta, la <b>temperatura de ebullición</b>. La evaporación absorbe calor de lo que la rodea: por eso sudar nos refresca y el botijo mantiene fresca el agua, porque un poco se evapora por los poros del barro y enfría el resto.</p>`,
    },
    {
      html: `<h3>La curva de calentamiento</h3><p>Si calentamos hielo a −20 °C y medimos la temperatura cada minuto, obtenemos una <b>curva de calentamiento</b>. Primero la temperatura sube hasta 0 °C. Después se mantiene <mark>constante</mark> mientras el hielo se funde, aunque sigamos calentando: toda la energía se usa en separar las partículas, no en moverlas más rápido. Cuando todo es líquido, la temperatura vuelve a subir hasta 100 °C, y allí se queda de nuevo constante durante la ebullición. Esos <b>tramos horizontales</b> indican los cambios de estado y sus temperaturas son propiedades características de las <b>sustancias puras</b>. Una mezcla no tiene tramos horizontales tan claros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curva de calentamiento del agua: sube hasta 0 grados, tramo horizontal de fusión, sube hasta 100, tramo horizontal de ebullición y vuelve a subir">${BG}
        <path d="M40 16 V 156 H 246" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${t(246, 172, "tiempo", { size: 10, anchor: "end", color: "var(--muted)" })}${t(44, 14, "T (°C)", { size: 10, anchor: "start", color: "var(--muted)" })}
        <path d="M40 146 L 64 122 H 104 L 144 52 H 204 L 236 30" stroke="var(--red)" stroke-width="3" fill="none"/>
        <line x1="40" y1="122" x2="64" y2="122" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="40" y1="52" x2="144" y2="52" stroke="var(--muted)" stroke-dasharray="3 3"/>
        ${t(34, 126, "0", { size: 10, anchor: "end" })}${t(34, 56, "100", { size: 10, anchor: "end" })}
        ${t(84, 114, "fusión", { size: 10, color: "var(--pen)" })}${t(174, 44, "ebullición", { size: 10, color: "var(--pen)" })}
        ${t(100, 140, "sólido + líquido", { size: 9, weight: 400 })}${t(174, 70, "líquido + gas", { size: 9, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>La presión de un gas</h3><p>Las partículas de un gas chocan continuamente contra las paredes del recipiente. Cada choque empuja un poquito la pared; millones de choques por segundo producen una fuerza repartida sobre toda la superficie: es la <mark>presión</mark> del gas. La presión es la fuerza por unidad de superficie y su unidad en el SI es el <b>pascal (Pa)</b>. También se usan la <b>atmósfera (atm)</b> y el <b>milímetro de mercurio (mmHg)</b>: <b>1 atm = 760 mmHg = 101.325 Pa</b>. La <b>presión atmosférica</b> es la que ejerce el aire sobre nosotros; disminuye con la altura, porque arriba hay menos aire. Se mide con el <b>barómetro</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recipiente con partículas de gas que chocan contra las paredes; cada choque empuja y el conjunto de choques es la presión">${BG}
        <rect x="40" y="30" width="180" height="120" rx="8" fill="none" stroke="var(--ink)" stroke-width="3"/>
        ${[[80, 60, 1, 1], [150, 70, 1, -1], [110, 110, -1, 1], [180, 120, 1, 1], [70, 128, -1, 1], [196, 48, 1, -1]].map(([x, y, a, b]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--inf)"/><line x1="${x}" y1="${y}" x2="${x + a * 16}" y2="${y + b * 12}" stroke="var(--inf)" stroke-width="1.5"/>`).join("")}
        ${[[220, 60], [220, 120], [40, 90]].map(([x, y]) => `<path d="M${x - 5} ${y - 7} L ${x + 5} ${y} L ${x - 5} ${y + 7}" stroke="var(--red)" stroke-width="2" fill="none" transform="${x === 40 ? `rotate(180 ${x} ${y})` : ""}"/>`).join("")}
        ${t(130, 20, "choques contra las paredes", { size: 11, color: "var(--red)" })}${t(130, 170, "1 atm = 760 mmHg = 101.325 Pa", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La ley de Boyle: presión y volumen</h3><p>Si tapamos la salida de una jeringa y empujamos el émbolo, el aire se comprime y cada vez cuesta más. El físico Robert Boyle estudió este fenómeno en el siglo XVII. A <b>temperatura constante</b>, la presión y el volumen de un gas son <mark>inversamente proporcionales</mark>: si el volumen se reduce a la mitad, la presión se duplica. Su producto se mantiene constante: <b>P₁ · V₁ = P₂ · V₂</b>. Con el modelo de partículas se entiende bien: en un volumen más pequeño las partículas tienen menos espacio y chocan con más frecuencia contra las paredes, así que la presión aumenta. Por eso los buceadores no deben aguantar la respiración al subir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos jeringas: con 20 mililitros el gas tiene 1 atmósfera; al comprimirlo a 10 mililitros la presión sube a 2 atmósferas">${BG}
        ${[[50, 180, "V = 20 mL", "P = 1 atm"], [110, 90, "V = 10 mL", "P = 2 atm"]].map(([y, w, v, p]) => `<rect x="30" y="${y}" width="200" height="34" rx="4" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="31" y="${y + 1}" width="${w - 2}" height="32" fill="var(--inf)" fill-opacity=".18"/><rect x="${30 + w}" y="${y - 4}" width="8" height="42" fill="var(--muted)"/><line x1="${38 + w}" y1="${y + 17}" x2="246" y2="${y + 17}" stroke="var(--muted)" stroke-width="4"/>${t(30 + w / 2, y + 22, v, { size: 11 })}${t(30, y - 8, p, { size: 11, anchor: "start", color: "var(--red)" })}`).join("")}
        ${t(130, 170, "P · V = constante", { size: 12, color: "var(--leaf)" })}</svg>`,
      video: { id: "vq3-tk1xDo0", titulo: "Química: Ley de Boyle (relación entre presión y volumen)", canal: "Socratica Español", vistas: 1081441 },
    },
    {
      html: `<h3>La ley de Charles: volumen y temperatura</h3><p>Si metemos un globo en el congelador, se encoge; al sacarlo, vuelve a hincharse. Jacques Charles comprobó que, a <b>presión constante</b>, el volumen de un gas es <mark>directamente proporcional a su temperatura absoluta</mark>: <b>V₁ / T₁ = V₂ / T₂</b>. Al calentar el gas, las partículas se mueven más rápido, chocan con más fuerza y empujan las paredes flexibles hacia fuera, hasta que el gas ocupa más espacio. Es el principio de los <b>globos aerostáticos</b>: el aire caliente del interior se expande, se vuelve menos denso que el aire frío de fuera y el globo sube. <b>Importante</b>: en las leyes de los gases la temperatura siempre se expresa en <b>kelvin</b>.</p>`,
    },
    {
      html: `<h3>La ley de Gay-Lussac: presión y temperatura</h3><p>Si el gas está en un recipiente <b>rígido</b>, su volumen no puede cambiar. Joseph Gay-Lussac observó que entonces la presión es <mark>directamente proporcional a la temperatura absoluta</mark>: <b>P₁ / T₁ = P₂ / T₂</b>. Al calentar, las partículas chocan más rápido y con más fuerza contra las paredes. Por eso los aerosoles llevan el aviso «no exponer a temperaturas superiores a 50 °C» y no se deben tirar al fuego: la presión podría hacerlos explotar. También por eso la presión de los neumáticos se mide en frío: tras un viaje largo, el aire está caliente y la presión es mayor.</p>${tabla(["Ley", "Constante", "Relación", "Fórmula"], [["Boyle", "T", "P y V inversas", "P₁V₁ = P₂V₂"], ["Charles", "P", "V y T directas", "V₁/T₁ = V₂/T₂"], ["Gay-Lussac", "V", "P y T directas", "P₁/T₁ = P₂/T₂"]])}`,
    },
    {
      html: `<h3>La ecuación general de los gases</h3><p>Las tres leyes se pueden reunir en una sola, la <mark>ecuación general de los gases</mark>, para una misma cantidad de gas que cambia de condiciones: <b>P₁ · V₁ / T₁ = P₂ · V₂ / T₂</b>. Si una de las tres magnitudes se mantiene constante, se simplifica y obtenemos la ley correspondiente. Para resolver problemas conviene seguir siempre los mismos pasos: anotar los datos iniciales y finales, <b>pasar la temperatura a kelvin</b>, comprobar que las unidades de presión y volumen son las mismas en los dos estados, despejar la incógnita y comprobar si el resultado tiene sentido: si el gas se calienta a volumen constante, su presión debe aumentar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ecuación general de los gases y las tres leyes que salen de ella al dejar fija la temperatura, la presión o el volumen">${BG}
        ${caja(30, 18, 200, 40, "P₁V₁/T₁ = P₂V₂/T₂", "var(--leaf)", { size: 14 })}
        ${fl(70, 60, 50, 92)}${fl(130, 60, 130, 92)}${fl(190, 60, 210, 92)}
        ${caja(8, 96, 78, 34, "T fija", "var(--pen)", { size: 11 })}${caja(91, 96, 78, 34, "P fija", "var(--red)", { size: 11 })}${caja(174, 96, 78, 34, "V fijo", "#b8860b", { size: 11 })}
        ${t(47, 150, "Boyle", { size: 12, color: "var(--pen)" })}${t(130, 150, "Charles", { size: 12, color: "var(--red)" })}${t(213, 150, "Gay-Lussac", { size: 12, color: "#b8860b" })}
        ${t(130, 172, "T siempre en kelvin", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los gases en la vida diaria</h3><p>Las leyes de los gases explican muchas situaciones cotidianas. La <b>olla exprés</b> mantiene el vapor encerrado: la presión aumenta, el agua hierve a unos 120 °C y la comida se cuece antes. Al <b>subir una montaña</b> o en un avión, la presión exterior baja, nos taponamos los oídos y las bolsas de patatas se hinchan. Al <b>respirar</b>, el diafragma baja, el volumen de los pulmones aumenta, la presión dentro disminuye (ley de Boyle) y el aire entra. Las <b>bombonas de butano</b> guardan mucho gas en poco espacio porque, a alta presión, el butano se licúa. Y una pelota de baloncesto bota peor en la calle en invierno, porque con el frío baja la presión del aire de dentro.</p>`,
    },
  ],
  figura: {
    titulo: "Estados, cambios y leyes de los gases",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="A la izquierda, los tres estados con los cambios entre ellos; a la derecha, las tres leyes de los gases con su magnitud constante">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${caja(20, 180, 110, 44, "sólido", "var(--pen)", { size: 15 })}${caja(220, 180, 110, 44, "líquido", "var(--water)", { size: 15 })}${caja(120, 24, 110, 44, "gas", "var(--inf)", { size: 15 })}
      ${fl(132, 196, 218, 196, "var(--red)", 3)}${fl(258, 178, 200, 70, "var(--red)", 3)}${fl(70, 178, 140, 70, "var(--red)", 3)}
      ${t(175, 240, "calentar: fusión, vaporización, sublimación", { size: 12, color: "var(--red)" })}
      <line x1="360" y1="20" x2="360" y2="230" stroke="var(--muted)" stroke-dasharray="4 4"/>
      ${[["Boyle", "T constante", "P₁V₁ = P₂V₂", "var(--pen)"], ["Charles", "P constante", "V₁/T₁ = V₂/T₂", "var(--red)"], ["Gay-Lussac", "V constante", "P₁/T₁ = P₂/T₂", "#b8860b"]].map(([n, c, f, col], i) => `<rect x="380" y="${24 + i * 68}" width="240" height="56" rx="10" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(396, 48 + i * 68, n, { size: 15, anchor: "start", color: col, font: D })}${t(396, 68 + i * 68, c, { size: 12, anchor: "start", weight: 400 })}${t(608, 60 + i * 68, f, { size: 14, anchor: "end" })}`).join("")}
    </svg>`,
  },
  video: { id: "SoDg3UDBqYU", titulo: "LEYES de los GASES: truco fácil para aprender las fórmulas", canal: "Susi Profe", vistas: 1152651, megusta: 0, busqueda: "leyes de los gases Boyle Charles Gay-Lussac" },
  ejemplos: [
    { enunciado: "Un gas ocupa 6 L a 1 atm. Si, sin cambiar la temperatura, la presión sube a 3 atm, ¿qué volumen ocupa?",
      pasos: ["T constante: ley de Boyle, P₁V₁ = P₂V₂.", "1 · 6 = 3 · V₂.", "V₂ = 6 / 3 = 2 L."],
      resultado: "2 L; al triplicar la presión, el volumen se reduce a la tercera parte." },
    { enunciado: "Un globo tiene 2 L a 27 °C. ¿Qué volumen tendrá a 87 °C si la presión no cambia?",
      pasos: ["Pasamos a kelvin: T₁ = 300 K; T₂ = 360 K.", "Ley de Charles: V₁/T₁ = V₂/T₂ → 2/300 = V₂/360.", "V₂ = 2 · 360 / 300 = 2,4 L."],
      resultado: "2,4 L." },
    { enunciado: "Un neumático tiene 2,2 atm a 7 °C. Tras un viaje, su temperatura es 47 °C. ¿Qué presión tiene, si el volumen no cambia?",
      pasos: ["T₁ = 280 K; T₂ = 320 K.", "Gay-Lussac: P₁/T₁ = P₂/T₂ → 2,2/280 = P₂/320.", "P₂ = 2,2 · 320 / 280 ≈ 2,51 atm."],
      resultado: "unas 2,5 atm." },
  ],
  errores: [
    "Usar grados Celsius en las leyes de los gases: hay que pasar siempre a kelvin.",
    "Decir que en un cambio de estado la sustancia se transforma en otra: sigue siendo la misma.",
    "Confundir evaporación (en la superficie, a cualquier temperatura) con ebullición (en todo el líquido, a una temperatura fija).",
    "Pensar que durante la fusión la temperatura sigue subiendo: se mantiene constante.",
    "Creer que las partículas de un sólido están quietas: vibran.",
  ],
  ejercicios: [
    { q: "Compara forma, volumen y compresibilidad de sólidos, líquidos y gases.", sol: "Sólidos: forma y volumen fijos, no se comprimen. Líquidos: volumen fijo, forma del recipiente, casi no se comprimen. Gases: sin forma ni volumen propios, se comprimen fácilmente." },
    { q: "Enuncia las ideas de la teoría cinético-molecular.", sol: "La materia está formada por partículas; entre ellas hay vacío; se mueven continuamente, más deprisa a mayor temperatura; y hay fuerzas de atracción entre ellas." },
    { q: "Nombra el cambio de estado: a) se forma escarcha; b) se seca un charco; c) se derrite un helado; d) se empaña un espejo.", sol: "a) Sublimación inversa o deposición; b) evaporación; c) fusión; d) condensación." },
    { q: "¿Por qué sudar nos refresca?", sol: "Porque el sudor se evapora y la evaporación absorbe calor de la piel." },
    { q: "En la curva de calentamiento de una sustancia hay un tramo horizontal a 80 °C. ¿Qué significa?", sol: "Que a 80 °C se produce un cambio de estado; la temperatura se mantiene constante mientras dura." },
    { q: "Explica con partículas qué es la presión de un gas.", sol: "Es el efecto de los choques de las partículas contra las paredes del recipiente; cuantos más choques y más fuertes, mayor presión." },
    { q: "Un gas ocupa 10 L a 2 atm. ¿Qué presión tendrá si se expande a 25 L a temperatura constante?", sol: "P₂ = 2 · 10 / 25 = 0,8 atm." },
    { q: "Un gas ocupa 300 mL a 0 °C. ¿Qué volumen ocupa a 91 °C a presión constante?", sol: "T₁ = 273 K, T₂ = 364 K; V₂ = 300 · 364 / 273 = 400 mL." },
    { q: "¿Por qué no se debe tirar un aerosol al fuego?", sol: "Al calentarse a volumen constante, la presión del gas aumenta (Gay-Lussac) y el envase puede explotar." },
    { q: "Pasa 1,5 atm a mmHg y 380 mmHg a atm.", sol: "1,5 · 760 = 1140 mmHg; 380 / 760 = 0,5 atm." },
  ],
  quiz: [
    { q: "Un líquido tiene…", o: ["forma y volumen fijos", "volumen fijo y forma variable", "ni forma ni volumen fijos"], a: 1, e: "Volumen fijo, forma del recipiente." },
    { q: "Al subir la temperatura, las partículas…", o: ["se mueven más rápido", "se paran", "se hacen más grandes"], a: 0, e: "Se mueven más rápido." },
    { q: "Paso de sólido a gas sin pasar por líquido:", o: ["fusión", "sublimación", "condensación"], a: 1, e: "Sublimación." },
    { q: "La evaporación ocurre…", o: ["solo a 100 °C", "en la superficie a cualquier temperatura", "en todo el líquido"], a: 1, e: "En la superficie." },
    { q: "Durante la fusión de una sustancia pura, la temperatura…", o: ["sube", "baja", "se mantiene constante"], a: 2, e: "Constante." },
    { q: "1 atm equivale a…", o: ["760 mmHg", "100 mmHg", "1000 Pa"], a: 0, e: "760 mmHg." },
    { q: "Ley de Boyle: a T constante, si V se reduce a la mitad, P…", o: ["se reduce a la mitad", "se duplica", "no cambia"], a: 1, e: "Se duplica." },
    { q: "En la ley de Charles se mantiene constante…", o: ["la presión", "el volumen", "la temperatura"], a: 0, e: "La presión." },
    { q: "27 °C en kelvin son…", o: ["246 K", "300 K", "27 K"], a: 1, e: "27 + 273 = 300 K." },
    { q: "Un globo de aire caliente sube porque…", o: ["el aire caliente es menos denso", "el aire caliente pesa más", "el fuego lo empuja"], a: 0, e: "El aire caliente se expande y es menos denso." },
  ],
  examen: [
    { q: "La condensación es el paso de…", o: ["gas a líquido", "líquido a gas", "sólido a líquido"], a: 0, e: "Gas a líquido." },
    { q: "En un recipiente rígido, al calentar el gas, la presión…", o: ["aumenta", "disminuye", "no cambia"], a: 0, e: "Aumenta (Gay-Lussac)." },
    { q: "Las fuerzas de atracción entre partículas son mayores en…", o: ["los gases", "los líquidos", "los sólidos"], a: 2, e: "Los sólidos." },
  ],
  feynman: ["Cómo explica la teoría cinético-molecular los tres estados", "Por qué la temperatura no cambia mientras el hielo se funde", "Qué dicen las leyes de Boyle, Charles y Gay-Lussac"],
  mapa: mapa("ESTADOS Y GASES", "var(--eso)", [
    ["Estados", "sólido · líquido · gas · plasma", "var(--pen)"],
    ["Modelo", "teoría cinético-molecular", "var(--leaf)"],
    ["Cambios", "fusión · vaporización · sublimación", "var(--red)"],
    ["Leyes", "Boyle · Charles · Gay-Lussac", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Teoría cinético-molecular", "La materia son partículas en movimiento con espacio vacío entre ellas."],
    ["Fusión", "Paso de sólido a líquido."],
    ["Sublimación", "Paso directo de sólido a gas."],
    ["Evaporación", "Vaporización en la superficie a cualquier temperatura."],
    ["Presión de un gas", "Efecto de los choques de las partículas contra las paredes."],
    ["Ley de Boyle", "A T constante: P₁V₁ = P₂V₂."],
    ["Ley de Charles", "A P constante: V₁/T₁ = V₂/T₂."],
    ["Ley de Gay-Lussac", "A V constante: P₁/T₁ = P₂/T₂."],
  ],
  familias: ["Meted un globo un poco inflado en el congelador y medid su contorno antes y después.", "Tapad con el dedo una jeringa sin aguja y empujad el émbolo: notaréis la ley de Boyle.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: teoría cinético-molecular, estados de agregación, cambios de estado y leyes de los gases (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Curva de calentamiento del agua con termómetro y cronómetro.", "Jeringa y manómetro para tomar datos de la ley de Boyle y graficar P frente a V.", "Simulación PhET de estados de la materia y propiedades de los gases."],
  },
  fuentes: [RD, wiki("Teoría cinética", "Teor%C3%ADa_cin%C3%A9tica"), wiki("Ley de Boyle-Mariotte", "Ley_de_Boyle-Mariotte")],
  revisado: "2026-11-12",
};
