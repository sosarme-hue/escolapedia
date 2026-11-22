// Ciencias de la Naturaleza 5º de Primaria: la materia, estados y mezclas. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF } = require("./_pri5b");

// Recipiente con partículas: tipo "s" (ordenadas), "l" (juntas desordenadas) o "g" (separadas).
function particulas(x, y, tipo, c) {
  const pts = tipo === "s" ? [...Array(16)].map((_, i) => [x - 22 + (i % 4) * 14, y - 4 + Math.floor(i / 4) * 12])
    : tipo === "l" ? [[-24, 30], [-10, 32], [4, 30], [18, 32], [-18, 18], [-4, 20], [12, 18], [24, 20], [-24, 8], [-8, 10], [8, 6], [22, 10]].map(([a, b]) => [x + a, y + b])
    : [[-20, -2], [14, 6], [-4, 22], [22, 34], [-24, 40], [4, -10], [20, 18]].map(([a, b]) => [x + a, y + b]);
  return `<rect x="${x - 34}" y="${y - 22}" width="68" height="72" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/>${pts.map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="5" fill="${c}"/>`).join("")}`;
}

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La materia: estados y mezclas",
  minutos: 50,
  objetivos: ["Explicar qué es la materia y sus propiedades generales", "Medir la masa y el volumen y calcular la densidad de forma sencilla", "Describir los tres estados de la materia y los cambios de estado", "Diferenciar sustancias puras y mezclas", "Distinguir mezclas homogéneas y heterogéneas", "Conocer métodos para separar mezclas"],
  claves: ["materia", "masa", "volumen", "densidad", "sólido", "líquido", "gas", "fusión", "solidificación", "evaporación", "condensación", "sublimación", "sustancia pura", "mezcla", "disolución", "filtración", "decantación"],
  pregunta: {
    texto: "Si echas una cucharada de sal en un vaso de agua y remueves, la sal desaparece. ¿Ha dejado de existir?",
    respuesta: "No. La sal sigue ahí, pero sus partículas se han repartido entre las del agua y son tan pequeñas que no se ven. Si pruebas el agua, notarás que está salada, y si la dejas al sol hasta que se evapore, la sal volverá a aparecer en el fondo. Has formado una <mark>mezcla</mark> llamada <b>disolución</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la materia?</h3><p>La <mark>materia</mark> es todo lo que tiene <b>masa</b> y ocupa un lugar en el espacio, es decir, tiene <b>volumen</b>. Una mesa, el agua, el aire que respiras, tu cuerpo o una estrella están hechos de materia. En cambio, la luz, el sonido, una idea o un sentimiento no son materia.</p><p>Cada tipo de materia con unas características concretas se llama <b>sustancia</b> o <b>material</b>: la madera, el hierro, el agua, el plástico, el vidrio…</p><p>Toda la materia está formada por partículas diminutas, imposibles de ver incluso con un microscopio normal. Si pudieras dividir un grano de sal por la mitad, y luego otra vez, y otra, llegarías a unas partículas que ya no se pueden dividir sin que dejen de ser sal.</p><p>La materia tiene dos tipos de propiedades:</p><p>• <b>Propiedades generales</b>: las tiene toda la materia y no sirven para distinguir unas sustancias de otras. Son la <b>masa</b> y el <b>volumen</b>.</p><p>• <b>Propiedades específicas</b>: sirven para identificar cada sustancia, como el color, el olor, la dureza, la <b>densidad</b>, la temperatura a la que hierve o si conduce la electricidad.</p>`,
      svg: svg("Es materia lo que tiene masa y volumen; la luz y el sonido no son materia", `${tit("¿Es materia?")}${cj2(14, 44, 112, 72, "Sí", "mesa, agua, aire", COL.verde)}${cj2(134, 44, 112, 72, "No", "luz, sonido, una idea", COL.rojo)}${tx(130, 140, "materia = tiene masa y ocupa un volumen", 236, { weight: 700, color: COL.azul })}${tx(130, 162, "formada por partículas diminutas", 236)}`),
    },
    {
      html: `<h3>Masa, volumen y densidad</h3><p>La <mark>masa</mark> es la cantidad de materia que tiene un cuerpo. Se mide con la <b>balanza</b>. Su unidad principal es el <b>kilogramo (kg)</b>; también usamos el gramo (g) y la tonelada (t). Recuerda: 1 kg = 1.000 g.</p><p>El <mark>volumen</mark> es el espacio que ocupa un cuerpo. La unidad principal es el <b>metro cúbico (m³)</b>, pero para líquidos usamos mucho el <b>litro (L)</b> y el mililitro (mL). Se mide con recipientes graduados, como la probeta o una jarra medidora. Para medir el volumen de un sólido irregular, como una piedra, se mete en una probeta con agua: lo que sube el agua es el volumen de la piedra.</p><p>La <mark>densidad</mark> relaciona la masa y el volumen: indica cuánta masa hay en un trozo de material de un tamaño determinado. Se calcula dividiendo la masa entre el volumen. Un kilo de plomo y un kilo de plumas pesan lo mismo, pero el plomo ocupa muchísimo menos porque es mucho más <b>denso</b>.</p><p>La densidad explica por qué unos objetos <b>flotan</b> y otros se <b>hunden</b>: lo que es menos denso que el agua flota (el corcho, la madera, el aceite) y lo que es más denso se hunde (una piedra, una moneda).</p>`,
      svg: svg("Balanza para la masa, probeta para el volumen; el corcho flota y la piedra se hunde", `${tit("Masa, volumen y densidad")}<path d="M50 70 H90 M70 70 V130 M54 130 H86" stroke="var(--ink)" stroke-width="3"/><path d="M42 70 q8 14 16 0 M82 70 q8 14 16 0" stroke="var(--ink)" stroke-width="2" fill="none"/>${et(70, 152, "balanza", 60, { size: 11, color: COL.azul })}${tx(70, 168, "masa", 60)}<rect x="128" y="56" width="22" height="80" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="129" y="96" width="20" height="40" fill="#bae6fd"/>${[66, 76, 86, 96, 106, 116, 126].map((y) => `<path d="M128 ${y} h6" stroke="var(--ink)"/>`).join("")}${et(140, 152, "probeta", 60, { size: 11, color: COL.azul })}${tx(140, 168, "volumen", 60)}<rect x="178" y="80" width="64" height="56" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><rect x="190" y="72" width="16" height="12" fill="#d6a46b"/><circle cx="224" cy="126" r="7" fill="var(--muted)"/>${et(210, 152, "densidad", 70, { size: 11, color: COL.agua })}${tx(210, 168, "flota o se hunde", 76)}`),
    },
    {
      html: `<h3>Los estados de la materia</h3><p>La materia puede presentarse en tres estados. Lo que cambia entre ellos es cómo están colocadas y cómo se mueven sus partículas:</p><p>• <mark>Sólido</mark>: las partículas están muy juntas, ordenadas y casi no se mueven; solo vibran en su sitio. Por eso los sólidos tienen <b>forma propia</b> y <b>volumen fijo</b>. No se pueden comprimir. Ejemplos: una piedra, el hielo, un lápiz.</p><p>• <mark>Líquido</mark>: las partículas están juntas, pero se deslizan unas sobre otras. Por eso los líquidos tienen <b>volumen fijo</b>, pero <b>no tienen forma propia</b>: adoptan la del recipiente que los contiene. Pueden fluir y derramarse. Ejemplos: el agua, el aceite, la leche.</p><p>• <mark>Gas</mark>: las partículas están muy separadas y se mueven a gran velocidad en todas direcciones. Los gases <b>no tienen forma ni volumen fijos</b>: ocupan todo el espacio disponible. Se pueden comprimir, como el aire en una rueda de bicicleta. Ejemplos: el aire, el vapor de agua, el gas butano. Si abres un frasco de colonia en una esquina, al rato se huele en toda la habitación porque el gas se expande.</p>`,
      svg: svg("Partículas en un sólido (ordenadas), un líquido (juntas y desordenadas) y un gas (separadas)", `${tit("Sólido, líquido y gas")}${particulas(48, 74, "s", "var(--pen)")}${particulas(130, 74, "l", "var(--water)")}${particulas(212, 74, "g", "#8b5cf6")}${et(48, 146, "sólido", 70, { size: 12, color: COL.azul })}${et(130, 146, "líquido", 70, { size: 12, color: COL.agua })}${et(212, 146, "gas", 70, { size: 12, color: COL.morado })}${tx(48, 164, "forma fija", 70)}${tx(130, 164, "forma del vaso", 76)}${tx(212, 164, "lo llena todo", 70)}`),
      video: vid("fxDKpEYAoSE"),
    },
    {
      html: `<h3>Los cambios de estado</h3><p>Si calentamos o enfriamos una sustancia, puede pasar de un estado a otro. Son los <mark>cambios de estado</mark>:</p><p>Al <b>calentar</b> (las partículas se mueven más deprisa y se separan):<br>• <b>Fusión</b>: de sólido a líquido. El hielo se derrite en agua.<br>• <b>Vaporización</b>: de líquido a gas. Puede ser lenta, en la superficie y a cualquier temperatura (la <b>evaporación</b>, como un charco que se seca), o rápida, en todo el líquido a la vez, con burbujas (la <b>ebullición</b>, cuando el agua hierve).<br>• <b>Sublimación</b>: de sólido a gas directamente, sin pasar por líquido, como las bolas de naftalina.</p><p>Al <b>enfriar</b> (las partículas se mueven más despacio y se juntan):<br>• <b>Condensación</b>: de gas a líquido. El vapor del baño forma gotas en el espejo.<br>• <b>Solidificación</b>: de líquido a sólido. El agua se congela en el congelador.<br>• <b>Sublimación inversa</b>: de gas a sólido, como la escarcha en una mañana de invierno.</p><p>El agua pura se congela a <b>0 °C</b> y hierve a <b>100 °C</b> (al nivel del mar). Durante un cambio de estado, la sustancia es la misma: el hielo, el agua y el vapor son agua.</p>`,
      svg: svg("Cambios de estado: fusión y vaporización al calentar; condensación y solidificación al enfriar", `${tit("Cambios de estado")}${cj(10, 82, 62, 30, "sólido", COL.azul)}${cj(99, 82, 62, 30, "líquido", COL.agua)}${cj(188, 82, 62, 30, "gas", COL.morado)}${fl(74, 86, 97, 86, COL.rojo, 2)}${fl(163, 86, 186, 86, COL.rojo, 2)}${fl(97, 108, 74, 108, COL.azul, 2)}${fl(186, 108, 163, 108, COL.azul, 2)}${et(86, 66, "fusión", 60, { size: 10.5, color: COL.rojo })}${et(174, 66, "vaporización", 70, { size: 10.5, color: COL.rojo })}${et(80, 132, "solidificación", 76, { size: 10.5, color: COL.azul })}${et(178, 132, "condensación", 76, { size: 10.5, color: COL.azul })}${tx(130, 164, "calentar → · ← enfriar", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Sustancias puras y mezclas</h3><p>Si miramos de qué está hecha la materia, encontramos dos posibilidades:</p><p>• Una <mark>sustancia pura</mark> está formada por un <b>único tipo</b> de sustancia. Tiene siempre las mismas propiedades: por ejemplo, el agua destilada hierve siempre a 100 °C. Ejemplos: el agua destilada, el oro, el oxígeno, el azúcar, la sal común. Algunas sustancias puras, como el oro o el oxígeno, no pueden descomponerse en otras más sencillas: son los <b>elementos químicos</b>. Otras, como el agua (formada por hidrógeno y oxígeno), son <b>compuestos</b>.</p><p>• Una <mark>mezcla</mark> está formada por <b>dos o más sustancias</b> que se juntan pero no se transforman: cada una conserva sus propiedades. Por eso las mezclas se pueden separar por métodos sencillos. Ejemplos: el agua del grifo (lleva sales disueltas), el aire (nitrógeno, oxígeno y otros gases), la leche, una ensalada, el granito.</p><p>De hecho, la mayoría de la materia que nos rodea son mezclas. Las sustancias puras casi siempre se obtienen en laboratorios o fábricas, separándolas de las mezclas naturales.</p>`,
      svg: svg("Sustancia pura con un tipo de partícula y mezcla con dos o más tipos", `${tit("Pura o mezcla")}<rect x="22" y="44" width="90" height="80" rx="8" fill="none" stroke="var(--ink)" stroke-width="2"/>${[[40, 64], [62, 60], [86, 68], [48, 88], [74, 86], [96, 96], [40, 110], [66, 110], [92, 114]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--pen)"/>`).join("")}<rect x="148" y="44" width="90" height="80" rx="8" fill="none" stroke="var(--ink)" stroke-width="2"/>${[[166, 64, "var(--pen)"], [188, 60, COL.rojo], [212, 68, "var(--pen)"], [174, 88, COL.sol], [200, 86, COL.rojo], [222, 96, "var(--pen)"], [166, 110, COL.sol], [192, 110, "var(--pen)"], [218, 114, COL.rojo]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`).join("")}${et(67, 144, "sustancia pura", 100, { size: 12, color: COL.azul })}${et(193, 144, "mezcla", 100, { size: 12, color: COL.rojo })}${tx(67, 162, "agua destilada, oro", 110)}${tx(193, 162, "aire, leche, ensalada", 110)}`),
      video: vid("8VQtgvyWp08"),
    },
    {
      html: `<h3>Mezclas heterogéneas y homogéneas</h3><p>Las mezclas pueden ser de dos tipos:</p><p>• <mark>Mezclas heterogéneas</mark>: se <b>distinguen</b> sus componentes a simple vista o con una lupa. Por ejemplo, una ensalada, agua con arena, agua con aceite, unas lentejas con piedrecitas o el granito, en el que se ven puntos negros, blancos y rosados.</p><p>• <mark>Mezclas homogéneas</mark>: <b>no se distinguen</b> sus componentes, ni siquiera con un microscopio; parecen una sola sustancia. Se llaman también <b>disoluciones</b>. Por ejemplo, el agua con sal, el agua con azúcar, el aire, el vinagre o el bronce (una mezcla de cobre y estaño).</p><p>En una disolución hay dos partes:</p><p>• El <b>disolvente</b>: la sustancia que está en mayor cantidad, normalmente un líquido, como el agua. El agua disuelve tantas sustancias que se la llama «el disolvente universal».<br>• El <b>soluto</b>: la sustancia que se disuelve y está en menor cantidad, como la sal o el azúcar.</p><p>¿Cuánto soluto se puede disolver? Hay un límite: si echas demasiado azúcar en un vaso de agua, llega un momento en que ya no se disuelve más y se queda en el fondo. Si calientas el agua, se puede disolver algo más.</p>`,
      svg: svg("Mezcla heterogénea con agua y aceite separados; homogénea con agua y sal que parece una sola sustancia", `${tit("Heterogénea u homogénea")}<path d="M30 54 h60 l-6 90 h-48z" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M33 96 h54 l-3 48 h-48z" fill="#bae6fd"/><path d="M32 76 h56 l-1 20 h-54z" fill="#fde047"/>${et(60, 162, "heterogénea", 100, { size: 12, color: COL.sol })}${tx(60, 176, "agua y aceite", 100)}<path d="M170 54 h60 l-6 90 h-48z" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M172 76 h56 l-4 68 h-48z" fill="#bae6fd"/>${et(200, 162, "homogénea", 100, { size: 12, color: COL.agua })}${tx(200, 176, "agua con sal", 100)}`),
    },
    {
      html: `<h3>Cómo separar mezclas</h3><p>Como en las mezclas cada sustancia conserva sus propiedades, podemos aprovechar esas propiedades para separarlas:</p>${tabla(["Método", "Cómo se hace", "Sirve para"], [["Tamización", "se pasa por un colador o tamiz", "sólidos de distinto tamaño: arena y piedras"], ["Filtración", "se pasa por un filtro de papel", "un sólido no disuelto en un líquido: agua y arena"], ["Decantación", "se deja reposar y se vierte con cuidado", "líquidos que no se mezclan: agua y aceite"], ["Separación magnética", "se acerca un imán", "un metal como el hierro: limaduras y arena"], ["Evaporación", "se calienta o se deja al sol", "un sólido disuelto: sal en agua"], ["Destilación", "se hierve y se enfría el vapor", "separar líquidos o purificar agua"]])}<p>En las <b>salinas</b>, por ejemplo, se obtiene sal llenando estanques poco profundos con agua del mar: el sol evapora el agua y la sal queda en el fondo. Y en las <b>depuradoras</b> se usan filtros y decantadores para limpiar el agua antes de devolverla al río.</p>`,
      svg: svg("Métodos de separación: filtración, decantación, imán y evaporación", `${tit("Separar mezclas")}${fichas([["Filtración", "agua y arena", COL.agua], ["Decantación", "agua y aceite", COL.sol], ["Imán", "hierro y arena", COL.rojo], ["Evaporación", "agua y sal", COL.naranja]])}`),
      video: vid("OMpBhukRHHI"),
    },
    {
      html: `<h3>Cambios físicos y cambios químicos</h3><p>La materia puede sufrir dos tipos de cambios:</p><p>• En un <mark>cambio físico</mark> la sustancia <b>sigue siendo la misma</b>; solo cambia su forma, su tamaño o su estado. Por ejemplo: romper un papel, derretir chocolate, congelar agua, disolver azúcar o estirar una goma. Muchos cambios físicos son reversibles: el agua congelada puede volver a ser líquida.</p><p>• En un <mark>cambio químico</mark> las sustancias <b>se transforman en otras nuevas</b>, con propiedades diferentes. Por ejemplo: quemar papel (se convierte en ceniza y humo), cocinar un huevo, la oxidación de un clavo (se forma óxido), la fermentación del yogur o la digestión de los alimentos. Casi nunca se puede volver atrás: no podemos «descocinar» un huevo frito.</p><p>¿Cómo saber si ha habido un cambio químico? Hay algunas pistas: cambio de color, aparición de burbujas de gas, desprendimiento de luz o calor, cambio de olor o aparición de un sólido nuevo.</p><p>Un experimento sencillo: mezcla vinagre con bicarbonato en un vaso. Saldrán muchas burbujas: es un gas nuevo (dióxido de carbono) que antes no estaba. ¡Es un cambio químico!</p>`,
      svg: svg("Cambio físico: congelar agua o romper papel; cambio químico: quemar papel o oxidar un clavo", `${tit("Físico o químico")}${cj2(14, 44, 112, 76, "Físico", "misma sustancia", COL.azul)}${cj2(134, 44, 112, 76, "Químico", "sustancia nueva", COL.rojo)}${tx(70, 140, "congelar, romper,", 110)}${tx(70, 156, "disolver", 110)}${tx(190, 140, "quemar, cocinar,", 110)}${tx(190, 156, "oxidarse", 110)}`),
    },
    {
      html: `<h3>Materiales que usamos cada día</h3><p>Los seres humanos usamos la materia para fabricar objetos. Los <b>materiales</b> pueden ser <b>naturales</b>, si los tomamos de la naturaleza casi sin cambiarlos (madera, piedra, lana, algodón, cuero), o <b>artificiales</b>, si se fabrican transformando materiales naturales (plástico, vidrio, papel, acero, hormigón).</p><p>Para elegir un material nos fijamos en sus propiedades:</p><p>• <b>Dureza</b>: si se raya o no. El diamante es el material natural más duro.<br>• <b>Fragilidad</b>: si se rompe con facilidad, como el vidrio.<br>• <b>Elasticidad</b>: si recupera su forma, como una goma.<br>• <b>Flexibilidad</b>: si se dobla sin romperse, como un junco.<br>• <b>Conductividad</b>: si deja pasar el calor o la electricidad. Los metales son buenos <b>conductores</b>; la madera y el plástico son <b>aislantes</b>. Por eso las sartenes son de metal y tienen el mango de plástico.<br>• <b>Transparencia</b>: si deja pasar la luz, como el vidrio de una ventana.<br>• <b>Impermeabilidad</b>: si no deja pasar el agua, como un chubasquero.</p><p>Elegir bien los materiales y <b>reciclarlos</b> después de usarlos ahorra recursos y protege el medio ambiente.</p>`,
      svg: svg("Propiedades de los materiales: dureza, fragilidad, elasticidad, conductividad", `${tit("Propiedades de los materiales")}${filas([["duro", "diamante", COL.azul], ["frágil", "vidrio", COL.agua], ["elástico", "goma", COL.rojo], ["conductor", "metal", COL.sol], ["aislante", "plástico, madera", COL.verde]], 46, 25, { x: 24, wa: 84, wb: 120 })}`),
    },
  ],
  figura: {
    titulo: "La materia en ocho ideas",
    svg: rejilla([
      ["Materia", "tiene masa y volumen", COL.azul],
      ["Densidad", "masa ÷ volumen", COL.marron],
      ["Sólido", "forma y volumen fijos", COL.azul],
      ["Líquido", "volumen fijo, forma del vaso", COL.agua],
      ["Gas", "lo ocupa todo", COL.morado],
      ["Cambios de estado", "fusión, evaporación…", COL.rojo],
      ["Mezclas", "homogéneas y heterogéneas", COL.sol],
      ["Separar", "filtrar, decantar, evaporar", COL.verde],
    ], 4, 86, "Resumen de la materia, sus estados y las mezclas"),
  },
  video: vgen("fxDKpEYAoSE", "estados de la materia para niños"),
  ejemplos: [
    { enunciado: "Una probeta tiene 50 mL de agua. Metes una piedra y el agua sube hasta 72 mL. ¿Cuál es el volumen de la piedra?",
      pasos: ["La piedra empuja el agua hacia arriba tanto como su propio volumen.", "Restamos: 72 − 50 = 22."],
      resultado: "La piedra tiene un volumen de 22 mL (22 cm³)." },
    { enunciado: "Tienes una mezcla de arena, sal y limaduras de hierro. ¿Cómo separas las tres?",
      pasos: ["Primero acercamos un imán: se lleva las limaduras de hierro.", "Después echamos agua: la sal se disuelve y la arena no.", "Filtramos: la arena queda en el filtro.", "Evaporamos el agua que ha pasado: queda la sal."],
      resultado: "Imán → disolver en agua → filtrar → evaporar." },
    { enunciado: "¿Físico o químico? a) Hacer cubitos de hielo. b) Tostar pan. c) Disolver cacao en leche.",
      pasos: ["Si la sustancia sigue siendo la misma es físico; si aparece otra nueva, químico.", "El hielo sigue siendo agua; el cacao sigue siendo cacao.", "El pan tostado cambia de color, olor y sabor: hay sustancias nuevas."],
      resultado: "a) Físico. b) Químico. c) Físico." },
  ],
  errores: [
    "Pensar que el aire no es materia: tiene masa y ocupa espacio.",
    "Confundir masa y volumen: la masa es la cantidad de materia; el volumen, el espacio que ocupa.",
    "Creer que la evaporación solo ocurre a 100 °C: ocurre a cualquier temperatura; a 100 °C hierve.",
    "Decir que al disolver sal en agua la sal desaparece: sigue en la mezcla y se recupera evaporando.",
    "Pensar que todas las mezclas se ven: en las homogéneas no se distinguen los componentes.",
  ],
  ejercicios: [
    { q: "¿Qué es la materia? Escribe dos ejemplos de cosas que son materia y dos que no.", sol: "Todo lo que tiene masa y volumen. Son materia: el agua y una silla. No lo son: la luz y el sonido." },
    { q: "¿Con qué se mide la masa? ¿Y el volumen de un líquido?", sol: "La masa, con la balanza. El volumen de un líquido, con una probeta o un recipiente graduado." },
    { q: "¿Por qué un trozo de madera flota en el agua y una moneda se hunde?", sol: "Porque la madera es menos densa que el agua y la moneda es más densa." },
    { q: "Escribe las características de los sólidos, los líquidos y los gases.", sol: "Sólidos: forma y volumen fijos. Líquidos: volumen fijo, forma del recipiente. Gases: sin forma ni volumen fijos, ocupan todo el espacio." },
    { q: "Nombra el cambio de estado: a) se seca la ropa tendida; b) se empaña un espejo; c) se derrite un helado.", sol: "a) Evaporación. b) Condensación. c) Fusión." },
    { q: "¿Qué diferencia hay entre evaporación y ebullición?", sol: "La evaporación es lenta, en la superficie y a cualquier temperatura; la ebullición es rápida, en todo el líquido y a una temperatura fija (100 °C el agua)." },
    { q: "Clasifica en sustancia pura o mezcla: oro, aire, leche, agua destilada, granito.", sol: "Puras: oro y agua destilada. Mezclas: aire, leche y granito." },
    { q: "En el agua azucarada, ¿cuál es el soluto y cuál el disolvente?", sol: "Soluto: el azúcar. Disolvente: el agua." },
    { q: "¿Qué método usarías para separar agua y aceite? ¿Y agua y arena?", sol: "Agua y aceite: decantación. Agua y arena: filtración." },
    { q: "¿Por qué el mango de las sartenes es de plástico o madera?", sol: "Porque son materiales aislantes del calor y así no nos quemamos." },
  ],
  quiz: [
    { q: "La cantidad de materia de un cuerpo es su…", o: ["volumen", "masa", "densidad"], a: 1, e: "La masa." },
    { q: "Los líquidos tienen…", o: ["forma fija", "volumen fijo", "ni forma ni volumen"], a: 1, e: "Volumen fijo, forma del recipiente." },
    { q: "Las partículas están muy separadas en…", o: ["los gases", "los sólidos", "los líquidos"], a: 0, e: "En los gases." },
    { q: "El paso de sólido a líquido es la…", o: ["condensación", "solidificación", "fusión"], a: 2, e: "Fusión." },
    { q: "Las gotas en el espejo del baño se forman por…", o: ["fusión", "condensación", "sublimación"], a: 1, e: "Condensación del vapor." },
    { q: "El agua pura hierve a…", o: ["100 °C", "0 °C", "50 °C"], a: 0, e: "A 100 °C al nivel del mar." },
    { q: "El agua con sal es una mezcla…", o: ["heterogénea", "homogénea", "pura"], a: 1, e: "Una disolución." },
    { q: "Para separar limaduras de hierro y arena usamos…", o: ["un filtro", "la evaporación", "un imán"], a: 2, e: "Un imán." },
    { q: "Quemar papel es un cambio…", o: ["químico", "físico", "de estado"], a: 0, e: "Aparecen sustancias nuevas." },
    { q: "Un buen conductor del calor es…", o: ["la madera", "el metal", "el plástico"], a: 1, e: "Los metales." },
  ],
  examen: [
    { q: "En una disolución, la sustancia en mayor cantidad es…", o: ["el soluto", "el disolvente", "el filtro"], a: 1, e: "El disolvente." },
    { q: "En las salinas se obtiene la sal por…", o: ["evaporación", "filtración", "decantación"], a: 0, e: "El sol evapora el agua." },
    { q: "La escarcha se forma por…", o: ["fusión", "ebullición", "sublimación inversa"], a: 2, e: "De gas a sólido." },
    { q: "Un material que recupera su forma es…", o: ["elástico", "frágil", "transparente"], a: 0, e: "Elástico." },
  ],
  feynman: ["Qué diferencia a un sólido, un líquido y un gas según sus partículas", "Cuáles son los cambios de estado y cuándo ocurren", "Qué es una mezcla y cómo se pueden separar sus componentes"],
  mapa: mapa("MATERIA", "var(--pri)", [
    ["Propiedades", "masa · volumen · densidad", COL.marron],
    ["Estados", "sólido · líquido · gas", COL.azul],
    ["Mezclas", "homogéneas · heterogéneas", COL.sol],
    ["Cambios", "físicos · químicos", COL.rojo],
  ], 250),
  tarjetas: [
    ["Materia", "Todo lo que tiene masa y ocupa un volumen."],
    ["Densidad", "Relación entre la masa y el volumen; explica si algo flota."],
    ["Fusión", "Paso de sólido a líquido."],
    ["Condensación", "Paso de gas a líquido."],
    ["Sustancia pura", "Materia formada por un solo tipo de sustancia."],
    ["Disolución", "Mezcla homogénea, como agua con sal."],
    ["Filtración", "Separar un sólido no disuelto de un líquido con un filtro."],
    ["Cambio químico", "Transformación en la que aparecen sustancias nuevas."],
  ],
  familias: ["Probad en un barreño qué objetos de casa flotan y cuáles se hunden.", "Preparad agua con sal en un plato y dejadla al sol unos días para recuperar la sal.", "Mezclad vinagre y bicarbonato en un vaso y observad las burbujas.", "Separad una mezcla de arroz, lentejas y sal usando un colador y agua."],
  profesores: PROF("Ciencias de la Naturaleza: la materia y sus propiedades; masa, volumen y densidad; estados y cambios de estado; sustancias puras y mezclas; métodos de separación; cambios físicos y químicos; materiales", ["Medida del volumen de sólidos irregulares por desplazamiento de agua.", "Taller de separación de mezclas por estaciones (tamiz, filtro, imán, decantación).", "Torre de densidades con miel, agua coloreada y aceite."]),
  fuentes: [RD, wiki("Materia", "Materia"), wiki("Estado de agregación de la materia", "Estado_de_agregación_de_la_materia"), wiki("Mezcla", "Mezcla")],
  revisado: REV,
};

// ---------- Nivel libro (5º de Primaria) ----------
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Predecir si un objeto flota o se hunde a partir de su densidad", "Relacionar los cambios de estado con el ciclo del agua", "Reconocer la oxidación y la combustión y separar residuos para reciclarlos"],
  lectura: { titulo: "¡Eureka!", html: `<p>Hace más de 2200 años, en la ciudad de Siracusa, el rey Hierón encargó una corona de oro puro. Cuando se la entregaron, sospechó que el orfebre le había engañado mezclando el oro con plata, que es más barata. Pero ¿cómo comprobarlo sin estropear la corona?</p><p>El rey le pidió ayuda al sabio <b>Arquímedes</b>. Durante días, Arquímedes no encontró la solución. Un día, al meterse en una bañera llena hasta arriba, vio que el agua se desbordaba. ¡Su cuerpo ocupaba un espacio y desplazaba el agua! Cuenta la leyenda que salió corriendo por la calle gritando «¡<b>Eureka</b>!», que significa «¡lo encontré!».</p><p>Arquímedes sumergió en agua la corona y después un trozo de oro puro con la <b>misma masa</b>. La corona desplazó más agua: tenía más <b>volumen</b>. Eso significaba que no era solo de oro, porque el oro, al ser tan <b>denso</b>, ocupa poco espacio. El orfebre había hecho trampa.</p><p>En este tema aprenderás qué es la materia, cómo se mide y cómo cambia.</p>` },
  tras: {
    "Masa, volumen y densidad": [
      ["¿Flota o se hunde?", `<p>Que un objeto flote o se hunda no depende de lo que pese, sino de su <b>densidad</b> comparada con la del líquido. La densidad del agua es de <b>1 gramo por centímetro cúbico</b> (1 g/cm³): un cubito de 1 cm de lado lleno de agua pesa 1 gramo.</p><ul><li>Si un objeto es <b>menos denso</b> que el agua, <b>flota</b>: la madera, el corcho, el aceite o el hielo.</li><li>Si es <b>más denso</b>, <b>se hunde</b>: una piedra, una moneda o un clavo de hierro.</li></ul><p>Por eso un tronco enorme flota y una canica pequeña se hunde. ¿Y cómo flota un barco de acero, que es muy denso? Porque su forma hueca encierra mucho aire, y el conjunto del barco y el aire de dentro es menos denso que el agua.</p><p>Una curiosidad importante: el <b>hielo</b> flota porque el agua, al congelarse, se expande y se vuelve menos densa. Gracias a eso, en invierno los lagos se congelan solo por arriba y los peces sobreviven debajo.</p><p>Puedes hacer una «torre de líquidos» en un vaso: miel abajo, después agua con colorante y, arriba, aceite. Cada líquido se coloca según su densidad.</p>`,
        svg("Torre de líquidos: miel abajo, agua en medio y aceite arriba; el corcho flota y la piedra se hunde", `${tit("Torre de densidades")}<path d="M70 40 V160 H150 V40" fill="none" stroke="var(--ink)" stroke-width="2.5"/><rect x="72" y="58" width="76" height="32" fill="${COL.sol}" fill-opacity=".45"/><rect x="72" y="90" width="76" height="36" fill="${COL.agua}" fill-opacity=".4"/><rect x="72" y="126" width="76" height="32" fill="${COL.marron}" fill-opacity=".5"/><rect x="98" y="48" width="22" height="12" rx="3" fill="#d6a76b" stroke="#92400e" stroke-width="1.5"/><circle cx="110" cy="150" r="7" fill="#a8a29e" stroke="#57534e" stroke-width="1.5"/>${filas([["aceite", "arriba", COL.sol], ["agua", "1 g/cm³", COL.agua], ["miel", "abajo", COL.marron]], 78, 36, { x: 166, wa: 44, wb: 46 })}${tx(36, 52, "corcho", 60)}${tx(36, 154, "piedra", 60)}`)],
    ],
    "Los cambios de estado": [
      ["El ciclo del agua: cambios de estado en la naturaleza", `<p>El agua de la Tierra está siempre cambiando de estado y moviéndose de un sitio a otro. A este viaje sin fin se le llama <b>ciclo del agua</b>, y el motor que lo mueve es el <b>Sol</b>.</p><ol><li><b>Evaporación</b>: el calor del Sol evapora el agua de los mares, los ríos y los lagos, y también la que sueltan las plantas. El vapor de agua sube con el aire caliente.</li><li><b>Condensación</b>: arriba hace frío y el vapor se condensa en gotitas diminutas que forman las <b>nubes</b>.</li><li><b>Precipitación</b>: cuando las gotas se hacen grandes y pesadas, caen como <b>lluvia</b>. Si hace mucho frío, el agua se solidifica y cae como <b>nieve</b> o <b>granizo</b>.</li><li><b>Escorrentía y filtración</b>: el agua corre por ríos hasta el mar o se filtra en el suelo y forma <b>aguas subterráneas</b>. La nieve de las montañas se funde en primavera (fusión) y alimenta los ríos.</li></ol><p>Así, el agua que bebes hoy pudo haber estado hace miles de años en un glaciar, en el océano o en una nube sobre otro continente. ¡La cantidad total de agua de la Tierra casi no cambia!</p>`,
        svg("Ciclo del agua: evaporación, condensación, precipitación y escorrentía", `${tit("El ciclo del agua")}${ciclo([["evaporación", COL.naranja], ["condensación", COL.gris], ["precipitación", COL.azul], ["escorrentía", COL.agua]], 130, 100, 54, 92)}`)],
    ],
  },
  final: [
    ["Oxidación y combustión", `<p>Dos cambios químicos que vemos a menudo son la oxidación y la combustión. En los dos interviene el <b>oxígeno</b> del aire.</p><p>La <b>oxidación</b> ocurre cuando una sustancia reacciona lentamente con el oxígeno. El <b>hierro</b> que se deja a la intemperie se cubre de <b>óxido</b>, una capa marrón y frágil que lo va deshaciendo. Una <b>manzana</b> cortada se pone marrón por la misma razón. Para evitar la oxidación del hierro se pinta, se engrasa o se fabrican aceros especiales como el acero inoxidable; a la manzana le sirve unas gotas de limón.</p><p>La <b>combustión</b> es una reacción rápida con oxígeno que desprende mucha <b>luz</b> y <b>calor</b>: es el fuego. Para que haya fuego hacen falta tres cosas, el <b>triángulo del fuego</b>:</p><ul><li>Un <b>combustible</b>: madera, papel, gas, gasolina.</li><li>El <b>oxígeno</b> del aire.</li><li><b>Calor</b> suficiente para empezar.</li></ul><p>Si quitas uno de los tres lados, el fuego se apaga. Por eso una manta sobre una sartén con aceite ardiendo apaga las llamas: les quita el oxígeno. ¡Y nunca se echa agua sobre aceite ardiendo!</p>`,
        svg("Triángulo del fuego: combustible, oxígeno y calor", `${tit("El triángulo del fuego")}<path d="M130 44 L206 150 H54z" fill="${COL.naranja}" fill-opacity=".15" stroke="${COL.naranja}" stroke-width="3"/>${cj(90, 30, 80, 24, "oxígeno", COL.azul)}${cj(10, 140, 96, 24, "combustible", COL.marron)}${cj(166, 140, 84, 24, "calor", COL.rojo)}<path d="M130 120 q-14 -14 -4 -34 q4 12 10 6 q8 14 -6 28z" fill="${COL.naranja}"/>${tx(130, 176, "quita un lado y el fuego se apaga", 230)}`)],
    ["Reciclar los materiales", `<p>Muchos de los materiales que usamos se pueden volver a aprovechar si los separamos bien. Así ahorramos <b>materias primas</b>, agua y energía, y producimos menos basura. En España los contenedores tienen colores:</p><ul><li><b>Amarillo</b>: envases de plástico, latas y briks.</li><li><b>Azul</b>: papel y cartón.</li><li><b>Verde</b> (iglú): envases de vidrio, como botellas y tarros, sin tapones.</li><li><b>Marrón</b>: restos orgánicos, como cáscaras y restos de comida, con los que se fabrica abono.</li><li><b>Gris</b>: lo que no se puede reciclar en los otros.</li></ul><p>Otros residuos van al <b>punto limpio</b>: pilas, aceite usado, aparatos eléctricos o bombillas. Las pilas son muy contaminantes y nunca deben tirarse a la basura normal.</p><p>Reciclar transforma el material: una lata de aluminio puede convertirse en otra lata nueva en pocas semanas, y el vidrio se puede reciclar una y otra vez sin perder calidad. Pero aún es mejor <b>reducir</b>: usar menos envases, botellas reutilizables y bolsas de tela.</p>`,
        svg("Contenedores de reciclaje: amarillo envases, azul papel, verde vidrio, marrón orgánico", `${tit("¿A qué contenedor?")}${fichas([["Amarillo", "plástico, latas, briks", COL.sol], ["Azul", "papel y cartón", COL.azul], ["Verde", "vidrio", COL.verde], ["Marrón", "restos orgánicos", COL.marron]])}`)],
  ],
  ejemplos: [
    ["Un trozo de madera tiene una densidad de 0,6 g/cm³ y una piedra de 2,5 g/cm³. ¿Cuál flota en agua?", ["La densidad del agua es 1 g/cm³.", "La madera: 0,6 es menor que 1, así que flota.", "La piedra: 2,5 es mayor que 1, así que se hunde."], "Flota la madera; la piedra se hunde"],
    ["¿Qué cambios de estado ocurren cuando la nieve de una montaña acaba en una nube?", ["La nieve se funde en primavera: fusión.", "El agua del río llega al mar y se evapora: vaporización (evaporación).", "El vapor se enfría arriba y forma gotitas: condensación."], "Fusión, evaporación y condensación"],
  ],
  errores: ["Pensar que los objetos pesados siempre se hunden: depende de su densidad, no de su peso; un tronco enorme flota."],
  nivelesBase: "bbbmbmmmmm",
  ejercicios: [
    ["b", "¿Cuál es la densidad del agua?", "1 g/cm³."],
    ["b", "Escribe dos objetos que floten en el agua y dos que se hundan.", "Flotan: corcho y madera. Se hunden: piedra y moneda."],
    ["b", "¿Cuáles son los tres lados del triángulo del fuego?", "Combustible, oxígeno y calor."],
    ["b", "¿En qué contenedor se tiran las latas? ¿Y las botellas de vidrio?", "Las latas en el amarillo; el vidrio en el verde."],
    ["b", "¿Qué es el motor del ciclo del agua?", "El Sol."],
    ["m", "¿Por qué flota el hielo?", "Porque al congelarse el agua se expande y el hielo es menos denso que el agua líquida."],
    ["m", "¿Por qué un barco de acero flota?", "Porque su forma hueca encierra mucho aire y el conjunto es menos denso que el agua."],
    ["m", "¿Qué cambio de estado forma las nubes?", "La condensación del vapor de agua."],
    ["m", "¿Por qué una manta apaga el fuego de una sartén?", "Porque le quita el oxígeno, uno de los lados del triángulo del fuego."],
    ["m", "¿Por qué la manzana cortada se pone marrón? ¿Cómo lo evitas?", "Por la oxidación con el oxígeno del aire; con unas gotas de limón."],
    ["m", "¿Dónde se tiran las pilas usadas? ¿Por qué?", "En contenedores especiales o en el punto limpio, porque son muy contaminantes."],
    ["a", "¿Qué descubrió Arquímedes en la bañera y cómo lo usó con la corona?", "Que un cuerpo sumergido desplaza agua según su volumen. Comparó el agua que desplazaban la corona y un trozo de oro de igual masa: la corona desplazó más, luego no era de oro puro."],
    ["a", "Explica por qué es importante que el hielo flote para los peces de un lago.", "El hielo queda arriba y aísla el agua de debajo, que no se congela y permite vivir a los peces."],
    ["a", "¿Es la oxidación un cambio físico o químico? Justifícalo.", "Químico, porque se forma una sustancia nueva (el óxido) con propiedades distintas."],
    ["a", "Clasifica estos residuos: periódico, piel de plátano, bote de yogur, tarro de mermelada, pila.", "Periódico: azul. Piel de plátano: marrón. Bote de yogur: amarillo. Tarro: verde. Pila: punto limpio o contenedor de pilas."],
    ["a", "Diseña un experimento para comprobar que el hierro necesita aire y agua para oxidarse.", "Respuesta abierta. Tres clavos: uno en agua hervida tapada con aceite (sin aire), otro en un tarro seco cerrado (sin agua) y otro en agua al aire. Solo se oxida bien el último."],
  ],
  quiz: [
    ["Un objeto flota si es…", ["Menos denso que el agua", "Más pesado", "Más grande"], "Depende de la densidad."],
    ["Las nubes se forman por…", ["Condensación", "Fusión", "Solidificación"], "El vapor se enfría y forma gotitas."],
    ["Para que haya fuego hace falta combustible, calor y…", ["Oxígeno", "Agua", "Arena"], "Es el triángulo del fuego."],
    ["El papel y el cartón van al contenedor…", ["Azul", "Amarillo", "Verde"], "Se fabrica papel nuevo."],
    ["El hierro a la intemperie se cubre de…", ["Óxido", "Hielo", "Sal"], "Es una oxidación."],
  ],
  examen: [
    ["Arquímedes descubrió que un cuerpo sumergido…", ["Desplaza agua", "Pierde masa", "Se calienta"], "Según su volumen."],
    ["Sobre aceite ardiendo nunca se echa…", ["Agua", "Una manta", "Una tapa"], "Se apaga quitando el oxígeno."],
  ],
  tarjetas: [
    ["Flotar", "Ocurre si el objeto es menos denso que el líquido."],
    ["Ciclo del agua", "Evaporación, condensación, precipitación, escorrentía."],
    ["Triángulo del fuego", "Combustible + oxígeno + calor."],
    ["Contenedores", "Amarillo envases, azul papel, verde vidrio, marrón orgánico."],
  ],
  glosario: [
    ["Materia", "Todo lo que tiene masa y ocupa un volumen."],
    ["Masa", "Cantidad de materia de un cuerpo; se mide en kg."],
    ["Volumen", "Espacio que ocupa un cuerpo; se mide en litros o m³."],
    ["Densidad", "Masa que hay en cada unidad de volumen."],
    ["Fusión", "Paso de sólido a líquido."],
    ["Evaporación", "Paso de líquido a gas en la superficie."],
    ["Condensación", "Paso de gas a líquido."],
    ["Mezcla homogénea", "Mezcla cuyos componentes no se distinguen."],
    ["Mezcla heterogénea", "Mezcla cuyos componentes se distinguen."],
    ["Cambio químico", "Cambio en el que se forman sustancias nuevas."],
    ["Oxidación", "Reacción lenta de una sustancia con el oxígeno."],
    ["Combustión", "Reacción rápida con oxígeno que produce luz y calor."],
  ],
  situacion: {
    titulo: "Científicos de la cocina",
    reto: "La clase investiga la materia con experimentos de cocina y presenta un «programa de ciencia» grabado o en directo.",
    pasos: ["Construid una torre de densidades con miel, agua con colorante y aceite, y probad qué objetos flotan en cada capa.", "Preparad mezclas y separadlas: arena y agua por filtración, sal y agua por evaporación al sol.", "Observad la oxidación de una manzana cortada con limón y sin limón durante una hora.", "Presentad cada experimento explicando qué propiedad o cambio de la materia demuestra."],
    producto: "Un programa de ciencia con cuatro experimentos explicados.",
    evaluacion: ["Explica la flotación con el concepto de densidad.", "Elige el método adecuado para separar cada mezcla.", "Distingue cambios físicos y químicos con ejemplos.", "Trabaja con seguridad y comunica con claridad."],
  },
});
