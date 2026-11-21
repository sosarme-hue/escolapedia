// Matemáticas 5º de Primaria: ángulos, su clasificación y su medida. Dibujos propios en SVG.
const P = require("./_pri5a");
const { svg, t, arco, AZ, RO, VE, NA, SO, MO } = P;

// Ángulo con vértice (x, y), un lado horizontal hacia la derecha y otro a g grados; radio del arco r.
const ang = (x, y, g, l = 80, c = AZ, r = 22) => {
  const a = (g * Math.PI) / 180;
  return `<path d="M${x + l} ${y} L ${x} ${y} L ${(x + l * Math.cos(a)).toFixed(1)} ${(y - l * Math.sin(a)).toFixed(1)}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>${g === 90 ? `<path d="M${x + 14} ${y} V ${y - 14} H ${x}" fill="none" stroke="${RO}" stroke-width="2"/>` : arco(x, y, r, 0, g, RO)}<circle cx="${x}" cy="${y}" r="3.5" fill="var(--ink)"/>`;
};

// Transportador (semicírculo) con centro en (x, y) y radio r.
const transportador = (x, y, r) => `<path d="M${x - r} ${y} A ${r} ${r} 0 0 1 ${x + r} ${y} Z" fill="${SO}" fill-opacity=".18" stroke="${NA}" stroke-width="2"/>${[...Array(19)].map((_, i) => { const a = (i * 10 * Math.PI) / 180, k = i % 9 === 0 ? 14 : 8; return `<path d="M${(x + r * Math.cos(a)).toFixed(1)} ${(y - r * Math.sin(a)).toFixed(1)} L ${(x + (r - k) * Math.cos(a)).toFixed(1)} ${(y - (r - k) * Math.sin(a)).toFixed(1)}" stroke="${NA}" stroke-width="1.4"/>`; }).join("")}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Ángulos y su medida",
  minutos: 50,
  objetivos: ["Reconocer los elementos de un ángulo", "Clasificar ángulos en agudos, rectos, obtusos, llanos y completos", "Medir y dibujar ángulos con el transportador", "Identificar ángulos complementarios, suplementarios, consecutivos y adyacentes"],
  claves: ["ángulo", "vértice", "lados", "grado", "transportador", "agudo", "recto", "obtuso", "llano", "complementarios", "suplementarios"],
  pregunta: ["Las agujas de un reloj marcan las 3 en punto. ¿Qué ángulo forman?", "Forman un <b>ángulo recto</b>, de <mark>90°</mark>: la aguja larga apunta al 12 y la corta al 3, como la esquina de un cuaderno. A las 6 en punto forman un ángulo llano (180°), y a las 12 en punto, las dos agujas están juntas."],
  bloques: [
    ["¿Qué es un ángulo?", `<p>Un <b>ángulo</b> es la parte del plano que queda entre <b>dos semirrectas</b> que salen del mismo punto.</p><p>Sus elementos son:</p><ul><li>El <b>vértice</b>: el punto común de donde salen las dos semirrectas.</li><li>Los <b>lados</b>: las dos semirrectas.</li><li>La <b>abertura</b>: lo «abiertos» que están los lados. Es lo que medimos.</li></ul><p>¡Ojo! El tamaño de un ángulo <b>no depende de lo largos que sean sus lados</b>, sino de su abertura. Si alargas los lados de un ángulo, mide exactamente lo mismo.</p><p>Hay ángulos en todas partes: en las esquinas de una mesa, en las tijeras abiertas, en el respaldo de una silla o en <mark>las agujas del reloj</mark>.</p>`,
      svg("Elementos de un ángulo: vértice, dos lados y la abertura", `${ang(60, 130, 50, 150)}${t(44, 150, "vértice", { s: 12, c: "var(--ink)" })}${t(194, 150, "lado", { s: 12, c: AZ })}${t(170, 30, "lado", { s: 12, c: AZ })}${t(108, 112, "abertura", { s: 11, c: RO })}`)],
    ["La medida de los ángulos: el grado", `<p>Los ángulos se miden en <b>grados</b>, que se escriben con un pequeño círculo: <b>°</b>.</p><p>Imagina una vuelta completa alrededor de un punto. Si la dividimos en <b>360 partes iguales</b>, cada una es <b>1 grado</b> (1°). Así:</p><ul><li>Una <b>vuelta completa</b> mide <b>360°</b>.</li><li><b>Media vuelta</b> mide <b>180°</b>.</li><li><b>Un cuarto de vuelta</b> mide <b>90°</b>.</li></ul><p>Esta forma de medir la inventaron los antiguos babilonios hace miles de años, y la seguimos usando hoy en mapas, en dibujo técnico, en navegación y en deportes. Cuando un patinador hace un «360», <mark>da una vuelta entera</mark>.</p>`,
      svg("Vuelta completa de 360 grados dividida en cuartos de 90 grados", `<circle cx="90" cy="92" r="60" fill="${AZ}" fill-opacity=".1" stroke="${AZ}" stroke-width="2"/><path d="M90 92 H 150 M90 92 V 32 M90 92 H 30 M90 92 V 152" stroke="${AZ}" stroke-width="2"/>${t(124, 66, "90°", { s: 12, c: RO })}${t(56, 66, "90°", { s: 12, c: RO })}${t(56, 124, "90°", { s: 12, c: RO })}${t(124, 124, "90°", { s: 12, c: RO })}${t(206, 72, "1 vuelta", { s: 12 })}${t(206, 96, "= 360°", { s: 18, d: true, c: AZ })}${t(206, 124, "½ vuelta = 180°", { s: 11, c: "var(--muted)" })}`)],
    ["Clases de ángulos", `<p>Según su medida, los ángulos se clasifican así:</p><ul><li><b>Agudo</b>: mide <b>menos de 90°</b>. Está «cerrado».</li><li><b>Recto</b>: mide <b>exactamente 90°</b>. Sus lados son perpendiculares; se marca con un cuadradito.</li><li><b>Obtuso</b>: mide <b>más de 90° y menos de 180°</b>. Está «muy abierto».</li><li><b>Llano</b>: mide <b>180°</b>. Sus lados forman una línea recta.</li><li><b>Completo</b>: mide <b>360°</b>, una vuelta entera.</li></ul><p>Un truco para comprobar si un ángulo es recto: compáralo con la <b>esquina de un folio</b>. Si es más pequeño, es <mark>agudo</mark>; si es más grande, obtuso.</p>`,
      svg("Ángulos agudo, recto, obtuso y llano", `${ang(18, 70, 40, 56)}${t(46, 90, "agudo", { s: 11, c: AZ })}${t(46, 104, "< 90°", { s: 10, c: "var(--muted)" })}${ang(146, 70, 90, 56, VE)}${t(176, 90, "recto", { s: 11, c: VE })}${t(176, 104, "= 90°", { s: 10, c: "var(--muted)" })}${ang(56, 158, 130, 56, MO)}${t(50, 176, "obtuso > 90°", { s: 10, c: MO })}${ang(156, 150, 180, 50, NA)}${t(156, 172, "llano = 180°", { s: 10, c: NA })}`)],
    ["El transportador", `<p>Para medir ángulos usamos el <b>transportador</b>: un semicírculo (o un círculo) de plástico graduado de <b>0° a 180°</b>.</p><p>Tiene dos escalas de números, una por fuera y otra por dentro, que van en sentidos contrarios. Así se pueden medir ángulos abiertos hacia la derecha o hacia la izquierda.</p><p>En el centro de su borde recto tiene una marca, el <b>centro del transportador</b>, que es donde hay que colocar el vértice del ángulo.</p><p>Consejo: antes de leer, mira si el ángulo es agudo u obtuso. Si es agudo y lees 130°, has mirado la escala equivocada: <mark>debe ser 50°</mark>.</p>`,
      svg("Transportador graduado de cero a ciento ochenta grados con su centro marcado", `${transportador(130, 140, 100)}<circle cx="130" cy="140" r="4" fill="${RO}"/>${t(42, 132, "0°", { s: 11, c: NA })}${t(218, 132, "180°", { s: 11, c: NA })}${t(130, 60, "90°", { s: 12, c: NA })}${t(130, 166, "centro", { s: 11, c: RO })}`)],
    ["Medir un ángulo paso a paso", `<p>Para medir un ángulo con el transportador:</p><ol><li>Coloca el <b>centro</b> del transportador justo sobre el <b>vértice</b> del ángulo.</li><li>Haz coincidir un <b>lado</b> del ángulo con la línea de <b>0°</b>.</li><li>Mira por dónde pasa el <b>otro lado</b> y lee el número en la escala que empieza en 0 desde ese lado.</li></ol><p>Si los lados son cortos y no llegan a los números, <b>prolóngalos</b> con la regla: el ángulo no cambia.</p><p>Ejemplo: un lado está en el 0 y el otro pasa por el 60 de la misma escala → el ángulo mide <mark>60°</mark>. Es agudo, así que la lectura tiene sentido.</p>`,
      svg("Medición de un ángulo de sesenta grados con el transportador", `${transportador(130, 140, 100)}<path d="M130 140 H 236" stroke="${AZ}" stroke-width="3"/><path d="M130 140 L ${(130 + 112 * Math.cos(Math.PI / 3)).toFixed(1)} ${(140 - 112 * Math.sin(Math.PI / 3)).toFixed(1)}" stroke="${AZ}" stroke-width="3"/>${arco(130, 140, 26, 0, 60, RO)}${t(168, 124, "60°", { s: 13, c: RO })}${t(206, 22, "lee 60°", { s: 12, c: RO })}${t(130, 168, "vértice en el centro, lado en 0°", { s: 11, c: "var(--muted)" })}`),
      P.V("angB")],
    ["Dibujar un ángulo", `<p>Para dibujar un ángulo de una medida dada, por ejemplo <b>120°</b>:</p><ol><li>Traza una semirrecta con la regla: será un lado. Su origen será el <b>vértice</b>.</li><li>Coloca el centro del transportador en el vértice y la línea de 0° sobre la semirrecta.</li><li>Busca el <b>120</b> en la escala que empieza en 0 por ese lado y marca un <b>punto</b>.</li><li>Retira el transportador y une el vértice con el punto. ¡Ya está!</li></ol><p>Al final, comprueba: 120° es más de 90°, así que tu dibujo debe ser un ángulo <mark>obtuso</mark>. Si te sale agudo, has usado la otra escala.</p>`,
      P.pasos("Pasos para dibujar un ángulo de 120 grados", [["Lado", ["traza una", "semirrecta"], AZ], ["Mide", ["centro en el", "vértice, 0° y 120°"], SO], ["Une", ["vértice", "con la marca"], VE]])],
    ["Ángulos consecutivos y adyacentes", `<p>A veces dos ángulos están «pegados». Hay nombres especiales para estas posiciones:</p><ul><li><b>Consecutivos</b>: tienen el <b>mismo vértice</b> y <b>un lado común</b>, uno al lado del otro.</li><li><b>Adyacentes</b>: son consecutivos y además los lados que no comparten forman una <b>línea recta</b>. Por eso, dos ángulos adyacentes <b>suman 180°</b>.</li><li><b>Opuestos por el vértice</b>: cuando dos rectas se cruzan, los ángulos que quedan enfrente uno del otro son <b>iguales</b>.</li></ul><p>Ejemplo: si dos rectas se cortan y uno de los ángulos mide 70°, su adyacente mide 180° − 70° = 110°, y el opuesto por el vértice <mark>también mide 70°</mark>.</p>`,
      svg("Dos rectas que se cortan: ángulos adyacentes de 70 y 110 grados y opuestos por el vértice iguales", `<path d="M66 154 L 194 26" stroke="${AZ}" stroke-width="3"/><path d="M50 53.4 L 210 126.6" stroke="${VE}" stroke-width="3"/><circle cx="130" cy="90" r="4" fill="var(--ink)"/>${t(196, 96, "70°", { s: 13, c: RO })}${t(64, 92, "70°", { s: 13, c: RO })}${t(122, 44, "110°", { s: 13, c: MO })}${t(140, 146, "110°", { s: 13, c: MO })}${t(130, 172, "70° + 110° = 180°", { s: 12 })}`)],
    ["Complementarios y suplementarios", `<p>Dos ángulos pueden «completarse» uno a otro:</p><ul><li>Son <b>complementarios</b> si <b>suman 90°</b> (un ángulo recto). Ej.: 30° y 60°.</li><li>Son <b>suplementarios</b> si <b>suman 180°</b> (un ángulo llano). Ej.: 50° y 130°.</li></ul><p>Para calcular:</p><ul><li>El <b>complementario</b> de un ángulo: <b>90° − el ángulo</b>. El complementario de 35° es 90° − 35° = <b>55°</b>.</li><li>El <b>suplementario</b>: <b>180° − el ángulo</b>. El suplementario de 35° es 180° − 35° = <b>145°</b>.</li></ul><p>Truco para no confundirlos: «<b>C</b>omplementario» va antes en el abecedario que «<b>S</b>uplementario», igual que <mark>90 va antes que 180</mark>.</p>`,
      svg("Ángulos complementarios que forman un recto y suplementarios que forman un llano", `<path d="M20 80 H 110 M20 80 V 10" fill="none" stroke="${AZ}" stroke-width="2.5"/><path d="M20 80 L 84 43" stroke="${AZ}" stroke-width="2.5"/>${t(80, 70, "30°", { s: 11, c: RO })}${t(40, 36, "60°", { s: 11, c: VE })}${t(66, 104, "30° + 60° = 90°", { s: 11 })}${t(66, 122, "complementarios", { s: 11, c: AZ })}<path d="M140 80 H 250" stroke="${MO}" stroke-width="2.5"/><path d="M195 80 L 230 38" stroke="${MO}" stroke-width="2.5"/>${t(232, 70, "50°", { s: 11, c: RO })}${t(176, 66, "130°", { s: 11, c: VE })}${t(195, 104, "50° + 130° = 180°", { s: 11 })}${t(195, 122, "suplementarios", { s: 11, c: MO })}`),
      P.V("angB2")],
    ["Ángulos a nuestro alrededor", `<p>Los ángulos son muy importantes en la vida diaria:</p><ul><li>En la <b>construcción</b>: las paredes forman ángulos rectos con el suelo; si no, la casa estaría torcida.</li><li>En las <b>rampas</b> y escaleras: cuanto mayor es el ángulo, más cuesta subir.</li><li>En el <b>deporte</b>: el ángulo con el que chutas o lanzas cambia la trayectoria del balón.</li><li>En el <b>reloj</b>: cada hora, la aguja horaria gira 30° (360° : 12).</li><li>En la <b>orientación</b>: la brújula usa grados; el norte es 0° y el este, 90°.</li></ul><p>Reto: ¿qué ángulo forman las agujas a las 2 en punto? Dos horas × 30° = <mark>60°</mark>.</p>`,
      svg("Reloj marcando las dos en punto: las agujas forman un ángulo de sesenta grados", `<circle cx="100" cy="90" r="66" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>${[...Array(12)].map((_, i) => { const a = (i * 30 * Math.PI) / 180; return `<path d="M${(100 + 58 * Math.sin(a)).toFixed(1)} ${(90 - 58 * Math.cos(a)).toFixed(1)} L ${(100 + 64 * Math.sin(a)).toFixed(1)} ${(90 - 64 * Math.cos(a)).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>`; }).join("")}<path d="M100 90 V 34" stroke="${AZ}" stroke-width="3.5" stroke-linecap="round"/><path d="M100 90 L ${(100 + 40 * Math.sin(Math.PI / 3)).toFixed(1)} ${(90 - 40 * Math.cos(Math.PI / 3)).toFixed(1)}" stroke="${RO}" stroke-width="4" stroke-linecap="round"/>${arco(100, 90, 20, 30, 90, VE)}${t(214, 80, "2 en punto", { s: 12 })}${t(214, 106, "60°", { s: 22, d: true, c: VE })}`)],
  ],
  figura: ["Ángulos", P.columnas("Resumen: elementos, clases, transportador y ángulos que suman", [["vértice y lados", "ÁNGULO", ["se mide", "en grados °"], AZ], ["< 90° · = 90°", "CLASES", ["obtuso · llano", "completo 360°"], VE], ["0° a 180°", "TRANSPORTADOR", ["centro en", "el vértice"], SO], ["90° y 180°", "SUMAN", ["complementarios", "suplementarios"], RO]])],
  video: P.V("angV", true),
  ejemplos: [
    ["Clasifica estos ángulos: 45°, 90°, 135°, 180°.", ["45° < 90° → agudo.", "90° → recto.", "Entre 90° y 180° → obtuso.", "180° → llano."], "agudo, recto, obtuso y llano"],
    ["Calcula el complementario y el suplementario de 25°.", ["Complementario: 90° − 25° = 65°.", "Suplementario: 180° − 25° = 155°."], "65° y 155°"],
    ["Dos rectas se cortan y uno de los ángulos mide 40°. ¿Cuánto miden los otros tres?", ["Opuesto por el vértice: igual, 40°.", "Adyacentes: 180° − 40° = 140° cada uno."], "40°, 140° y 140°"],
  ],
  errores: [
    "Pensar que un ángulo es mayor porque sus lados se dibujan más largos.",
    "Colocar el borde del transportador en el vértice en lugar de su centro.",
    "Leer la escala equivocada del transportador (130° en vez de 50°).",
    "Confundir complementarios (suman 90°) con suplementarios (suman 180°).",
    "Llamar obtuso a un ángulo de 180°, que es llano.",
  ],
  ejercicios: [
    ["Dibuja un ángulo y señala su vértice y sus lados.", "Respuesta libre: dos semirrectas con el mismo origen (vértice)."],
    ["¿Cuántos grados mide media vuelta? ¿Y tres cuartos de vuelta?", "180° y 270°."],
    ["Clasifica: 15°, 89°, 91°, 179°, 360°.", "Agudo, agudo, obtuso, obtuso y completo."],
    ["Mide con el transportador el ángulo de la esquina de tu libro.", "90°, es recto."],
    ["Dibuja con el transportador ángulos de 70° y de 150°.", "Respuesta gráfica; el de 70° es agudo y el de 150°, obtuso."],
    ["Calcula el complementario de 72°.", "18°."],
    ["Calcula el suplementario de 108°.", "72°."],
    ["¿Pueden ser complementarios dos ángulos obtusos? ¿Por qué?", "No: cada uno mide más de 90°, así que suman más de 90°."],
    ["¿Qué ángulo forman las agujas del reloj a las 4 en punto?", "4 × 30° = 120°."],
    ["Un ángulo y su adyacente son iguales. ¿Cuánto mide cada uno?", "180° : 2 = 90°: son rectos."],
  ],
  quiz: [
    ["El punto de donde salen los lados es…", ["el vértice", "la abertura", "el grado"], "Vértice."],
    ["Una vuelta completa mide…", ["360°", "180°", "90°"], "360 grados."],
    ["Un ángulo de 90° es…", ["recto", "agudo", "llano"], "Como la esquina de un folio."],
    ["Un ángulo de 60° es…", ["agudo", "obtuso", "recto"], "Menos de 90°."],
    ["Un ángulo de 150° es…", ["obtuso", "agudo", "llano"], "Entre 90° y 180°."],
    ["Un ángulo llano mide…", ["180°", "90°", "360°"], "Media vuelta."],
    ["Para medir ángulos se usa…", ["el transportador", "el compás", "la escuadra solo"], "Graduado en grados."],
    ["El complementario de 40° es…", ["50°", "140°", "60°"], "90 − 40."],
    ["El suplementario de 100° es…", ["80°", "260°", "10°"], "180 − 100."],
    ["Los ángulos opuestos por el vértice son…", ["iguales", "complementarios", "rectos siempre"], "Miden lo mismo."],
  ],
  examen: [
    ["Si alargas los lados de un ángulo, su medida…", ["no cambia", "aumenta", "disminuye"], "Depende de la abertura."],
    ["Dos ángulos adyacentes suman…", ["180°", "90°", "360°"], "Forman un llano."],
    ["¿Qué ángulo forman las agujas a las 3?", ["90°", "30°", "180°"], "Un cuarto de vuelta."],
    ["30° y 60° son…", ["complementarios", "suplementarios", "opuestos"], "Suman 90°."],
  ],
  feynman: ["Qué es un ángulo y cuáles son sus elementos", "Qué es un grado y cuánto mide una vuelta", "Cómo se clasifican los ángulos según su medida", "Cómo se mide un ángulo con el transportador", "Qué diferencia hay entre complementarios y suplementarios"],
  mapa: ["ÁNGULOS", [["Elementos", "vértice · lados", AZ], ["Clases", "agudo · recto · obtuso · llano", VE], ["Medir", "transportador · grados", SO], ["Parejas", "90° · 180° · opuestos", RO]]],
  tarjetas: [
    ["Ángulo", "Región entre dos semirrectas con el mismo origen."],
    ["Grado", "1/360 de una vuelta completa."],
    ["Agudo / recto / obtuso", "< 90° · = 90° · entre 90° y 180°."],
    ["Llano y completo", "180° y 360°."],
    ["Transportador", "Centro en el vértice y un lado en 0°."],
    ["Complementarios", "Suman 90°."],
    ["Suplementarios", "Suman 180°."],
    ["Opuestos por el vértice", "Son iguales."],
  ],
  familias: ["Buscad ángulos rectos, agudos y obtusos por casa (puertas, tijeras, libros abiertos).", "Mirad un reloj de agujas y calculad el ángulo que forman a distintas horas.", "Abrid una puerta poco a poco y nombrad el tipo de ángulo que forma con la pared.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido espacial y de la medida: el ángulo y sus elementos; el grado sexagesimal; clasificación de ángulos; medida y trazado con transportador; ángulos consecutivos, adyacentes, opuestos por el vértice, complementarios y suplementarios",
  ideas: ["Ángulos con el cuerpo: los brazos como lados y la cabeza como vértice.", "Medir ángulos de objetos del aula con transportador y registrarlos en una tabla.", "Relojes de cartulina para calcular ángulos entre agujas."],
});

// ---------- Nivel libro (5º de Primaria) ----------
const { caja } = P;
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Sumar y restar ángulos y trazar la bisectriz", "Comprobar que los ángulos de un triángulo suman 180°", "Usar ángulos para describir giros y orientarse"],
  lectura: { titulo: "El robot que no sabía girar", html: `<p>En el taller de robótica del colegio, Hugo y Aya han construido un pequeño robot que se mueve por el suelo. Quieren que recorra un camino cuadrado alrededor de una caja. Le dan las órdenes: «Avanza 50 cm y gira». Pero el robot gira un poco y se va contra la pared.</p><p>«Le hemos dicho que gire, pero no cuánto», dice Aya. Tienen que indicarle el <b>ángulo</b> del giro. Prueban con 45 grados: el robot hace un camino en forma de octógono. Prueban con 120 grados: sale un triángulo. Por fin, con <b>90 grados</b> en cada esquina, el robot dibuja un cuadrado perfecto.</p><p>«Cuatro giros de 90 grados hacen 360, una vuelta completa», se da cuenta Hugo. Sin saberlo, están usando lo mismo que usan los pilotos de avión, los carpinteros, los arquitectos y los jugadores de billar: los <b>ángulos</b>.</p><p>En este tema aprenderás a medir ángulos con el transportador, a dibujarlos, a clasificarlos y a usarlos para describir giros.</p>` },
  tras: {
    "La medida de los ángulos: el grado": [
      ["¿Por qué una vuelta tiene 360°?", `<p>La idea de dividir una vuelta completa en <b>360 grados</b> viene de los <b>babilonios</b>, que vivieron hace más de 4 000 años en lo que hoy es Irak. Eran grandes astrónomos y observaron que el Sol tardaba unos 360 días en recorrer el cielo y volver al mismo sitio. Así que cada día avanzaba, más o menos, «un grado».</p><p>Además, el 360 es un número muy cómodo porque tiene muchísimos divisores: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120 y 180. Por eso una vuelta se puede repartir en partes iguales de muchas formas:</p><ul><li>Media vuelta: 360 : 2 = <b>180°</b>.</li><li>Un cuarto de vuelta: 360 : 4 = <b>90°</b>.</li><li>Una sexta parte: 360 : 6 = <b>60°</b>.</li></ul><p>Los babilonios también contaban de 60 en 60. Por eso una hora tiene 60 minutos y un minuto, 60 segundos. ¡Y los grados también se dividen en minutos y segundos para medidas muy precisas, como en los mapas!</p>`,
        svg("Una vuelta completa de trescientos sesenta grados dividida en cuartos de noventa grados", `<circle cx="80" cy="90" r="60" fill="${SO}" fill-opacity=".15" stroke="${NA}" stroke-width="2.5"/><path d="M20 90 H 140 M80 30 V 150" stroke="${NA}" stroke-width="1.8"/>${["90°", "90°", "90°", "90°"].map((x, i) => t(80 + [24, -24, -24, 24][i], 90 + [-18, -18, 26, 26][i], x, { s: 11, c: RO })).join("")}${t(196, 60, "1 vuelta", { s: 13 })}${t(196, 84, "360°", { s: 22, d: true, c: AZ })}${t(196, 120, "babilonios", { s: 11, c: "var(--muted)" })}${t(196, 136, "hace 4 000 años", { s: 11, c: "var(--muted)" })}`)],
    ],
    "Dibujar un ángulo": [
      ["La bisectriz: partir un ángulo por la mitad", `<p>La <b>bisectriz</b> de un ángulo es la semirrecta que sale del vértice y lo divide en <b>dos ángulos iguales</b>.</p><p>Con el <b>transportador</b> es muy fácil: mide el ángulo, divide entre 2 y marca esa medida. Por ejemplo, la bisectriz de un ángulo de 70° lo divide en dos ángulos de <b>35°</b>.</p><p>También se puede hacer <b>sin medir</b>, doblando el papel: recorta el ángulo, haz coincidir un lado sobre el otro y dobla. La marca del doblez es la bisectriz.</p><p>Con <b>regla y compás</b> se traza así:</p><ol><li>Pincha en el vértice y traza un arco que corte los dos lados.</li><li>Desde cada punto de corte, traza dos arcos iguales que se crucen dentro del ángulo.</li><li>Une el vértice con el punto donde se cruzan: esa es la bisectriz.</li></ol><p>La bisectriz de un ángulo llano (180°) forma dos ángulos rectos de 90°: es una <b>perpendicular</b>.</p>`,
        svg("Bisectriz de un ángulo de setenta grados: lo divide en dos ángulos de treinta y cinco grados", `${ang(50, 140, 70, 130, AZ, 40)}<path d="M50 140 L ${(50 + 150 * Math.cos(35 * Math.PI / 180)).toFixed(1)} ${(140 - 150 * Math.sin(35 * Math.PI / 180)).toFixed(1)}" stroke="${VE}" stroke-width="2.5" stroke-dasharray="6 4"/>${t(112, 132, "35°", { s: 12, c: RO })}${t(92, 98, "35°", { s: 12, c: RO })}${t(206, 52, "bisectriz", { s: 13, d: true, c: VE })}${t(206, 160, "70° : 2 = 35°", { s: 12 })}`)],
    ],
    "Ángulos consecutivos y adyacentes": [
      ["Sumar y restar ángulos", `<p>Los ángulos se pueden <b>sumar</b> y <b>restar</b>, igual que los números, colocándolos uno junto a otro.</p><ul><li><b>Sumar</b>: coloca los ángulos consecutivos (compartiendo un lado). El ángulo total es la suma: 40° + 35° = <b>75°</b>.</li><li><b>Restar</b>: coloca el ángulo pequeño dentro del grande, con un lado común. Lo que sobra es la diferencia: 90° − 25° = <b>65°</b>.</li></ul><p>Esto sirve para resolver muchos problemas sin necesidad de medir:</p><ul><li>Si un ángulo recto se divide en dos y uno mide 30°, el otro mide 90° − 30° = <b>60°</b>.</li><li>Si alrededor de un punto hay tres ángulos y dos miden 150° y 120°, el tercero mide 360° − 150° − 120° = <b>90°</b>, porque todos juntos forman una vuelta completa.</li></ul><p>Recuerda las referencias: los ángulos que forman una recta suman <b>180°</b> y los que rodean un punto suman <b>360°</b>.</p>`,
        svg("Suma de ángulos: cuarenta grados más treinta y cinco grados son setenta y cinco grados", `<path d="M40 140 H 200" stroke="${AZ}" stroke-width="3"/><path d="M40 140 L ${(40 + 150 * Math.cos(40 * Math.PI / 180)).toFixed(1)} ${(140 - 150 * Math.sin(40 * Math.PI / 180)).toFixed(1)}" stroke="${AZ}" stroke-width="3"/><path d="M40 140 L ${(40 + 140 * Math.cos(75 * Math.PI / 180)).toFixed(1)} ${(140 - 140 * Math.sin(75 * Math.PI / 180)).toFixed(1)}" stroke="${AZ}" stroke-width="3"/>${arco(40, 140, 50, 0, 40, RO)}${arco(40, 140, 34, 40, 75, VE)}${t(104, 128, "40°", { s: 12, c: RO })}${t(70, 88, "35°", { s: 12, c: VE })}${t(190, 40, "40° + 35°", { s: 13 })}${t(190, 64, "= 75°", { s: 16, d: true, c: MO })}`)],
    ],
    "Complementarios y suplementarios": [
      ["Los ángulos de un triángulo suman 180°", `<p>Haz este experimento: dibuja un triángulo cualquiera en un papel, colorea sus tres ángulos y recórtalos. Después, coloca las tres puntas juntas, una al lado de otra, con los vértices en el mismo punto. ¿Qué ocurre? ¡Forman una <b>línea recta</b>, un ángulo llano de 180°!</p><p>Esto pasa con <b>todos</b> los triángulos, sean grandes o pequeños, de la forma que sean:</p><p style="text-align:center"><b>Los tres ángulos de un triángulo suman siempre 180°.</b></p><p>Gracias a esta propiedad, si conocemos dos ángulos de un triángulo podemos calcular el tercero sin medirlo. Si dos ángulos miden 50° y 70°, el tercero mide 180° − 50° − 70° = <b>60°</b>.</p><p>Algunas consecuencias:</p><ul><li>Un triángulo no puede tener dos ángulos rectos (90° + 90° ya son 180°).</li><li>En un triángulo equilátero, sus tres ángulos iguales miden 180° : 3 = <b>60°</b> cada uno.</li><li>En los cuadriláteros, los cuatro ángulos suman <b>360°</b>, porque se pueden partir en dos triángulos.</li></ul>`,
        svg("Los tres ángulos de un triángulo colocados juntos forman un ángulo llano de ciento ochenta grados", `<path d="M30 80 L 130 20 L 110 80 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${arco(30, 80, 18, 0, 31, RO)}${arco(110, 80, 14, 108, 180, VE)}${t(70, 102, "a + b + c", { s: 12 })}<path d="M140 150 H 250" stroke="var(--ink)" stroke-width="2.5"/><path d="M195 150 L 160 100 M195 150 L 235 100" stroke="var(--ink)" stroke-width="2"/>${arco(195, 150, 22, 0, 51, AZ)}${arco(195, 150, 22, 51, 125, MO)}${arco(195, 150, 22, 125, 180, VE)}${t(195, 172, "= 180°", { s: 14, d: true, c: RO })}${t(70, 140, "50° + 70° + 60°", { s: 11, c: "var(--muted)" })}`)],
    ],
    "Ángulos a nuestro alrededor": [
      ["Ángulos y giros: brújula y robots", `<p>Un ángulo también sirve para medir un <b>giro</b>. Cuando giras sobre ti mismo, el ángulo indica cuánto has girado:</p><ul><li>Un cuarto de vuelta: <b>90°</b>. Media vuelta: <b>180°</b>. Una vuelta entera: <b>360°</b>.</li><li>Un patinador que da «un 360» gira una vuelta completa.</li></ul><p>En la <b>brújula</b> y en los mapas, los puntos cardinales se miden en grados desde el norte, en el sentido de las agujas del reloj: <b>norte 0°, este 90°, sur 180° y oeste 270°</b>. Los barcos y los aviones indican su rumbo así: «rumbo 90» significa que van hacia el este.</p><p>En <b>programación</b> (por ejemplo, con Scratch o con robots), para dibujar un polígono regular hay que girar en cada esquina 360° dividido entre el número de lados:</p><ul><li>Cuadrado: 360 : 4 = 90°. Triángulo: 360 : 3 = 120°. Hexágono: 360 : 6 = 60°.</li></ul><p>¡Es justo lo que descubrieron Hugo y Aya con su robot!</p>`,
        svg("Rosa de los vientos con norte cero grados, este noventa, sur ciento ochenta y oeste doscientos setenta", `<circle cx="90" cy="90" r="62" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><path d="M90 28 L 98 90 L 90 152 L 82 90 Z" fill="${RO}" fill-opacity=".5"/><path d="M28 90 L 90 82 L 152 90 L 90 98 Z" fill="${AZ}" fill-opacity=".35"/>${t(90, 22, "N 0°", { s: 11, d: true, c: RO })}${t(90, 170, "S 180°", { s: 11, d: true })}${t(176, 94, "E 90°", { s: 11, d: true, a: "start" })}${t(6, 74, "O 270°", { s: 11, d: true, a: "start" })}${t(222, 50, "cuadrado:", { s: 11 })}${t(222, 66, "giro 90°", { s: 12, d: true, c: VE })}${t(222, 110, "hexágono:", { s: 11 })}${t(222, 126, "giro 60°", { s: 12, d: true, c: VE })}`)],
    ],
  },
  ejemplos: [
    ["Dos ángulos de un triángulo miden 45° y 65°. ¿Cuánto mide el tercero?", ["Los tres suman 180°.", "45° + 65° = 110°.", "180° − 110° = 70°."], "70°"],
    ["Un robot debe dibujar un pentágono regular. ¿Cuánto debe girar en cada esquina?", ["Una vuelta completa: 360°.", "El pentágono tiene 5 esquinas.", "360 : 5 = 72°."], "72° en cada esquina"],
  ],
  errores: ["Pensar que los ángulos de un triángulo grande suman más que los de uno pequeño: siempre suman 180°."],
  nivelesBase: "bbbmmbbmaa",
  ejercicios: [
    ["b", "¿Qué pueblo antiguo dividió la vuelta en 360 grados?", "Los babilonios."],
    ["b", "Calcula: 35° + 48° y 90° − 37°.", "83° y 53°."],
    ["b", "Escribe los grados de los cuatro puntos cardinales en la brújula.", "Norte 0°, este 90°, sur 180° y oeste 270°."],
    ["b", "¿Cuánto mide cada ángulo de un triángulo equilátero?", "180 : 3 = 60°."],
    ["m", "Calcula la bisectriz de un ángulo de 130°: ¿cuánto miden los dos ángulos que forma?", "65° cada uno."],
    ["m", "Dos ángulos de un triángulo miden 90° y 35°. ¿Cuánto mide el tercero? ¿Qué tipo de triángulo es?", "180 − 90 − 35 = 55°. Es un triángulo rectángulo."],
    ["m", "Alrededor de un punto hay tres ángulos. Dos miden 100° y 140°. ¿Cuánto mide el tercero?", "360 − 100 − 140 = 120°."],
    ["m", "¿Cuánto debe girar un robot en cada esquina para dibujar un triángulo equilátero?", "360 : 3 = 120°."],
    ["a", "¿Puede un triángulo tener ángulos de 100°, 50° y 30°? ¿Y de 90°, 60° y 40°?", "El primero sí: 100 + 50 + 30 = 180°. El segundo no: 90 + 60 + 40 = 190°, y los ángulos de un triángulo suman exactamente 180°."],
    ["a", "Tres ángulos de un cuadrilátero miden 90°, 90° y 120°. ¿Cuánto mide el cuarto?", "360 − 300 = 60°."],
    ["a", "Un barco navega con rumbo 0° y gira 135° hacia la derecha. ¿Hacia dónde va?", "135° está entre el este (90°) y el sur (180°): va hacia el sureste."],
    ["a", "Dibuja con el transportador un ángulo de 110° y traza su bisectriz. ¿Cuánto mide cada parte?", "55° cada parte."],
    ["a", "¿Cuántos grados gira la aguja de los minutos en 15 minutos? ¿Y en 20?", "Una hora son 360°, cada minuto 6°. 15 min = 90°; 20 min = 120°."],
    ["a", "Explica por qué un triángulo no puede tener dos ángulos obtusos.", "Dos ángulos obtusos suman más de 180°, y los tres ángulos de un triángulo suman exactamente 180°."],
    ["m", "Recorta los tres ángulos de un triángulo de papel y júntalos. ¿Qué figura forman sus lados exteriores?", "Una línea recta: un ángulo llano de 180°."],
    ["b", "¿Cuántos grados son media vuelta y tres cuartos de vuelta?", "180° y 270°."],
  ],
  quiz: [
    ["Los tres ángulos de un triángulo suman…", ["180°", "90°", "360°"], "Juntos forman un ángulo llano."],
    ["La bisectriz divide un ángulo en…", ["Dos ángulos iguales", "Tres ángulos", "Dos rectas paralelas"], "Lo parte por la mitad."],
    ["En la brújula, el este está a…", ["90°", "180°", "270°"], "Se cuenta desde el norte en el sentido del reloj."],
    ["Para dibujar un hexágono regular, un robot gira en cada esquina…", ["60°", "90°", "120°"], "360 : 6 = 60."],
    ["Los ángulos alrededor de un punto suman…", ["360°", "180°", "90°"], "Forman una vuelta completa."],
  ],
  examen: [
    ["Si un triángulo tiene ángulos de 40° y 80°, el tercero mide…", ["60°", "80°", "120°"], "180 − 40 − 80 = 60."],
    ["Los cuatro ángulos de un cuadrilátero suman…", ["360°", "180°", "400°"], "Se puede dividir en dos triángulos."],
    ["La división de la vuelta en 360° la inventaron…", ["Los babilonios", "Los romanos", "Los egipcios"], "Hace más de 4 000 años."],
    ["90° − 35° es…", ["55°", "65°", "125°"], "Resta de ángulos."],
  ],
  tarjetas: [
    ["Suma de ángulos del triángulo", "Siempre 180°."],
    ["Bisectriz", "Semirrecta que divide un ángulo en dos iguales."],
    ["Puntos cardinales", "N 0°, E 90°, S 180°, O 270°."],
    ["Giro de un polígono regular", "360° : número de lados."],
  ],
  glosario: [
    ["Ángulo", "Región del plano entre dos semirrectas con el mismo origen."],
    ["Vértice", "Punto donde se unen los lados de un ángulo."],
    ["Lados", "Las dos semirrectas que forman un ángulo."],
    ["Grado", "Unidad de medida de los ángulos (°)."],
    ["Transportador", "Instrumento semicircular para medir y dibujar ángulos."],
    ["Ángulo recto", "El que mide 90°."],
    ["Ángulo llano", "El que mide 180°."],
    ["Ángulos complementarios", "Dos ángulos que suman 90°."],
    ["Ángulos suplementarios", "Dos ángulos que suman 180°."],
    ["Bisectriz", "Semirrecta que divide un ángulo en dos iguales."],
    ["Rumbo", "Dirección de un barco o un avión, medida en grados desde el norte."],
    ["Giro", "Movimiento alrededor de un punto que se mide con un ángulo."],
  ],
  situacion: {
    titulo: "Programamos un robot dibujante",
    reto: "Vamos a programar un personaje de Scratch (o un robot de suelo) para que dibuje polígonos regulares y una estrella, calculando los ángulos de giro.",
    pasos: ["Jugad primero en el patio: un compañero da órdenes de «avanza» y «gira X grados» y otro las cumple con los ojos tapados.", "Calculad el ángulo de giro para dibujar un triángulo, un cuadrado, un pentágono y un hexágono regulares.", "Programad las figuras en Scratch o en el robot y comprobad si se cierran bien.", "Investigad qué ángulo hace falta para dibujar una estrella de cinco puntas (144°) y explicad por qué."],
    producto: "Un programa que dibuja una colección de polígonos y una ficha con los cálculos de los ángulos.",
    evaluacion: ["Mide y calcula ángulos correctamente.", "Relaciona la vuelta completa (360°) con los giros de los polígonos.", "Comprueba sus cálculos con el programa y corrige errores.", "Explica su razonamiento con vocabulario geométrico."],
  },
});
