// Ciencias de la Naturaleza 4º de Primaria: la materia y sus propiedades. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, gota, sol, tabla } = require("./_pri4b");

// Balanza de dos platos inclinada según los pesos.
const balanza = (x, y, inc = 0) => `<g transform="translate(${x} ${y})"><path d="M-6 0 h12 l-6 -60z" fill="var(--ink)" fill-opacity=".7"/><g transform="rotate(${inc} 0 -60)"><path d="M-60 -60 H60" stroke="var(--ink)" stroke-width="3"/><path d="M-60 -60 l-14 30 h28z M60 -60 l-14 30 h28z" fill="none" stroke="var(--ink)" stroke-width="1.5"/></g><rect x="-30" y="0" width="60" height="6" rx="2" fill="var(--ink)" fill-opacity=".7"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La materia y sus propiedades",
  minutos: 45,
  objetivos: ["Explicar qué es la materia y diferenciar sustancias y objetos", "Distinguir propiedades generales (masa y volumen) y propiedades específicas", "Medir la masa y el volumen con sus unidades", "Conocer los estados de la materia y los cambios de estado", "Diferenciar mezclas y separar sus componentes"],
  claves: ["materia", "masa", "volumen", "kilogramo", "litro", "densidad", "dureza", "elasticidad", "sólido", "líquido", "gas", "mezcla"],
  pregunta: {
    texto: "Si metes un kilo de plumas y un kilo de hierro en una balanza, ¿cuál pesa más? ¿Y cuál ocupa más sitio?",
    respuesta: "¡Pesan <b>exactamente lo mismo</b>: un kilo cada uno! Tienen la misma <mark>masa</mark>. Pero las plumas ocupan muchísimo más espacio: tienen más <mark>volumen</mark>. El hierro concentra mucha materia en poco espacio porque es muy <b>denso</b>; las plumas, muy poco.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la materia?</h3><p>La <mark>materia</mark> es todo lo que <b>ocupa un lugar en el espacio</b> y <b>tiene masa</b>, es decir, todo lo que se puede pesar. El agua, el aire, una piedra, tu cuerpo, un lápiz o el Sol están hechos de materia.</p><p>Hay cosas que no son materia, porque no ocupan espacio ni se pueden pesar: la luz, el sonido, el calor, un pensamiento o una emoción.</p><p>Aunque no lo veas, el <b>aire también es materia</b>. Prueba a meter un vaso boca abajo en un recipiente con agua: el agua no entra del todo, porque el aire que hay dentro ocupa ese espacio. Y si inflas un balón, pesa un poquito más que desinflado.</p><p>Las distintas clases de materia se llaman <b>sustancias</b> o <b>materiales</b>: la madera, el vidrio, el plástico, el hierro, el agua o la sal. Con los materiales se fabrican <b>objetos</b>. Por ejemplo, una mesa (objeto) puede estar hecha de madera (material), y un vaso, de vidrio o de plástico.</p><p>Toda la materia está formada por partículas diminutas, imposibles de ver incluso con un microscopio normal.</p>`,
      svg: svg("Materia (agua, piedra, aire en un balón) frente a lo que no es materia (luz, sonido)", `${tit("¿Es materia?")}${cj(10, 34, 115, 24, "SÍ: ocupa y pesa", COL.verde)}${cj(135, 34, 115, 24, "NO es materia", COL.gris)}${gota(36, 96, 1.6)}<ellipse cx="78" cy="98" rx="18" ry="11" fill="#a8a29e"/><circle cx="56" cy="138" r="16" fill="${COL.rojo}"/><path d="M40 138 q16 -10 32 0" stroke="#fff" fill="none"/>${tx(96, 140, "aire", 40)}${sol(166, 96, 11)}${t(220, 104, "♪", { size: 28, color: COL.morado })}${tx(166, 140, "luz", 50)}${tx(220, 140, "sonido", 60)}<path d="M130 64 V160" stroke="var(--line)" stroke-dasharray="4 3"/>`),
    },
    {
      html: `<h3>La masa</h3><p>Las propiedades que tiene <b>toda</b> la materia se llaman <b>propiedades generales</b>. Las dos más importantes son la masa y el volumen.</p><p>La <mark>masa</mark> es la <b>cantidad de materia</b> que tiene un cuerpo. En el lenguaje de todos los días solemos decir «peso», aunque los científicos distinguen las dos palabras.</p><p>La masa se mide con la <b>balanza</b>. Hay balanzas de dos platos, en las que se compara el objeto con pesas conocidas, básculas de baño, balanzas de cocina y balanzas digitales muy precisas.</p><p>La unidad principal de masa es el <mark>kilogramo</mark> (kg). Para cosas pequeñas se usa el <b>gramo</b> (g): un kilogramo tiene <b>1.000 gramos</b>. Para cosas muy pesadas se usa la <b>tonelada</b> (t), que son 1.000 kilogramos.</p><p>Algunos ejemplos: un clip pesa alrededor de 1 gramo; una manzana, unos 200 gramos; un litro de agua, 1 kilogramo; un niño de tu edad, unos 30 kilogramos; un coche, más de una tonelada.</p><p>La masa de un objeto no cambia aunque cambie su forma: una bola de plastilina pesa lo mismo que si la aplastas como una tortita.</p>`,
      svg: svg("Una balanza compara masas: kilogramo y gramo", `${tit("La masa se mide con balanza")}${balanza(80, 150, -8)}<circle cx="21" cy="110" r="10" fill="${COL.rojo}"/><rect x="128" y="106" width="22" height="16" fill="${COL.gris}"/>${tx(80, 168, "balanza de dos platos", 120)}${cj2(172, 50, 80, 50, "1 kg", "= 1.000 g", COL.azul)}${cj2(172, 110, 80, 50, "1 t", "= 1.000 kg", COL.morado)}`),
    },
    {
      html: `<h3>El volumen</h3><p>El <mark>volumen</mark> es el <b>espacio que ocupa</b> un cuerpo. Un balón de playa tiene más volumen que una canica; una piscina, más que un vaso.</p><p>El volumen de los líquidos se mide con recipientes graduados, como la <b>probeta</b> o el vaso medidor de la cocina. La unidad más usada es el <mark>litro</mark> (L). Para cantidades pequeñas se usa el <b>mililitro</b> (mL): un litro tiene <b>1.000 mililitros</b>. Un brik de leche tiene 1 litro; una cucharada, unos 15 mililitros.</p><p>El volumen de un sólido con forma regular, como una caja, se puede calcular midiendo su largo, su ancho y su alto. Los científicos usan el <b>metro cúbico</b> y el <b>centímetro cúbico</b>: un cubo de un centímetro de lado tiene un centímetro cúbico, y en él cabe exactamente un mililitro de agua.</p><p>¿Y si el sólido tiene una forma irregular, como una piedra? Hay un truco: echa agua en una probeta y apunta hasta dónde llega. Mete la piedra con cuidado y mira cuánto <b>sube</b> el agua. Lo que sube es el volumen de la piedra. ¡Esto ya lo descubrió el sabio griego Arquímedes hace más de dos mil años!</p>`,
      svg: svg("Medir el volumen de una piedra con una probeta: el agua sube de 50 a 70 mililitros", `${tit("Volumen de una piedra")}${[[70, 50, false], [180, 70, true]].map(([x, n, p]) => `<rect x="${x - 18}" y="40" width="36" height="120" rx="4" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 16}" y="${160 - n * 1.2}" width="32" height="${n * 1.2 - 2}" fill="var(--water)" fill-opacity=".45"/>${p ? `<ellipse cx="${x}" cy="148" rx="10" ry="7" fill="#78716c"/>` : ""}${tx(x + 40, 162 - n * 1.2, n + " mL", 40, { weight: 700 })}`).join("")}${fl(104, 64, 150, 64, "var(--muted)", 2)}${et(130, 176, "70 − 50 = 20 mL de piedra", 200, { size: 11, color: COL.marron })}`),
      video: vid("lXwWkh_8Stc"),
    },
    {
      html: `<h3>Las propiedades específicas</h3><p>Masa y volumen las tiene toda la materia, así que no sirven para distinguir un material de otro. Para eso usamos las <b>propiedades específicas</b>, que son diferentes en cada material:</p><p>• <b>Color, olor, sabor y brillo</b>: el oro es amarillo y brillante; el vinagre huele fuerte. ¡Nunca pruebes ni huelas de cerca una sustancia desconocida!</p><p>• <b>Dureza</b>: un material es duro si es difícil de rayar. El diamante es el más duro de todos; la tiza, muy blanda.</p><p>• <b>Fragilidad</b>: un material es frágil si se rompe fácilmente al golpearlo, como el vidrio o la porcelana. ¡Ojo: el vidrio es duro pero frágil!</p><p>• <b>Elasticidad</b>: un material es elástico si recupera su forma después de estirarlo o apretarlo, como la goma de pelo o un muelle. La plastilina no es elástica: se queda deformada.</p><p>• <b>Transparencia</b>: el vidrio deja pasar la luz y vemos a través; el papel de cocina, solo un poco (translúcido); la madera, nada (opaca).</p><p>• <b>Conductividad</b>: los metales dejan pasar bien el calor y la electricidad; la madera y el plástico, no. Por eso los mangos de las sartenes son de plástico o madera.</p>`,
      svg: svg("Propiedades específicas: dureza, fragilidad, elasticidad, transparencia", `${tit("Propiedades específicas")}${fichas([["Dureza", "diamante, piedra", COL.gris], ["Fragilidad", "vidrio, porcelana", COL.agua], ["Elasticidad", "goma, muelle", COL.rojo], ["Transparencia", "vidrio, agua", COL.azul], ["Conductividad", "metales", COL.sol], ["Brillo y color", "oro, cobre", COL.naranja]], 2, 34)}`),
    },
    {
      html: `<h3>La densidad: flotar o hundirse</h3><p>¿Por qué un barco enorme flota y una canica pequeña se hunde? La clave está en la <mark>densidad</mark>, que relaciona la <b>masa</b> de un material con el <b>volumen</b> que ocupa. Un material es muy denso cuando tiene mucha masa en poco espacio, como el hierro o el plomo; y poco denso cuando tiene poca masa en mucho espacio, como el corcho o el poliestireno.</p><p>Si comparamos con el agua:</p><p>• Lo que es <b>menos denso que el agua flota</b>: la madera, el corcho, el hielo, el aceite.<br>• Lo que es <b>más denso que el agua se hunde</b>: una piedra, una moneda, una canica de vidrio.</p><p>Un barco de hierro flota porque por dentro está casi vacío, lleno de aire, y en conjunto es menos denso que el agua.</p><p>Puedes hacer un experimento con un vaso alto: echa un poco de <b>miel</b>, después <b>agua</b> con colorante y por último <b>aceite</b>. Verás que forman tres capas: abajo el líquido más denso y arriba el menos denso. El aceite siempre queda encima del agua.</p><p>En el agua salada se flota mejor, porque es más densa que la dulce: por eso en el mar flotas con más facilidad que en una piscina.</p>`,
      svg: svg("Vaso con capas de miel, agua y aceite, y objetos que flotan o se hunden", `${tit("¿Flota o se hunde?")}<rect x="40" y="40" width="70" height="124" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="42" y="126" width="66" height="36" fill="${COL.naranja}" fill-opacity=".6"/><rect x="42" y="84" width="66" height="42" fill="var(--water)" fill-opacity=".45"/><rect x="42" y="60" width="66" height="24" fill="${COL.sol}" fill-opacity=".45"/>${tx(146, 74, "aceite", 60, { anchor: "start" })}${tx(146, 108, "agua", 60, { anchor: "start" })}${tx(146, 146, "miel", 60, { anchor: "start" })}${fl(112, 72, 140, 72, "var(--muted)", 1.5)}${fl(112, 106, 140, 106, "var(--muted)", 1.5)}${fl(112, 144, 140, 144, "var(--muted)", 1.5)}${tx(214, 60, "flota: corcho", 80, { weight: 700, color: COL.verde })}${tx(214, 160, "se hunde: piedra", 80, { weight: 700, color: COL.rojo })}`),
    },
    {
      html: `<h3>Los estados de la materia</h3><p>La materia se puede presentar en tres <mark>estados</mark>: sólido, líquido y gaseoso.</p><p>• Los <mark>sólidos</mark> tienen <b>forma propia</b> y <b>volumen fijo</b>. No se adaptan al recipiente: una piedra es igual dentro de una caja que fuera. Sus partículas están muy juntas y ordenadas, y apenas se mueven. Ejemplos: el hielo, la madera, el hierro.</p><p>• Los <mark>líquidos</mark> tienen <b>volumen fijo</b> pero <b>no tienen forma propia</b>: toman la forma del recipiente que los contiene y pueden fluir. Si pasas el agua de un vaso a un plato, cambia de forma, pero sigue siendo la misma cantidad. Sus partículas están juntas pero pueden deslizarse unas sobre otras. Ejemplos: el agua, el aceite, la leche.</p><p>• Los <mark>gases</mark> <b>no tienen forma ni volumen fijos</b>: ocupan todo el espacio del recipiente que los contiene y se pueden comprimir, como el aire de una jeringuilla tapada. Sus partículas están muy separadas y se mueven muy deprisa. Ejemplos: el aire, el vapor de agua, el butano.</p><p>El agua es la única sustancia que encontramos con facilidad en la naturaleza en los tres estados: hielo, agua líquida y vapor.</p>`,
      svg: svg("Partículas en sólidos, líquidos y gases", `${tit("Tres estados")}${[[46, "sólido", COL.azul, 0], [130, "líquido", COL.agua, 1], [214, "gas", COL.gris, 2]].map(([x, s, c, k]) => `<rect x="${x - 36}" y="44" width="72" height="90" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/>${k === 0 ? [...Array(16)].map((_, i) => `<circle cx="${x - 21 + (i % 4) * 14}" cy="${92 + Math.floor(i / 4) * 12}" r="5.5" fill="${c}"/>`).join("") : k === 1 ? [[-24, 126], [-10, 124], [4, 126], [18, 125], [26, 112], [-18, 112], [-2, 112], [12, 110], [-26, 98], [6, 98]].map(([dx, y]) => `<circle cx="${x + dx}" cy="${y}" r="5.5" fill="${c}"/>`).join("") : [[-22, 58], [16, 66], [-6, 90], [24, 104], [-24, 120], [8, 124]].map(([dx, y]) => `<circle cx="${x + dx}" cy="${y}" r="5.5" fill="${c}"/>`).join("")}${et(x, 154, s, 72, { size: 12, color: c })}`).join("")}${tx(130, 172, "forma y volumen · solo volumen · nada fijo", 236)}`),
      video: vid("ZdPhmPNgiEw"),
    },
    {
      html: `<h3>Los cambios de estado</h3><p>Cuando una sustancia se <b>calienta</b> o se <b>enfría</b>, puede pasar de un estado a otro. Son los <mark>cambios de estado</mark>, y la sustancia sigue siendo la misma: el hielo, el agua y el vapor son todos agua.</p><p>Al <b>calentar</b>:</p><p>• <b>Fusión</b>: de sólido a líquido. El hielo se derrite a 0 °C; la mantequilla, en la sartén.<br>• <b>Evaporación</b>: de líquido a gas. La ropa tendida se seca porque el agua se evapora. Cuando el agua hierve a 100 °C, se evapora muy deprisa: es la <b>ebullición</b>.</p><p>Al <b>enfriar</b>:</p><p>• <b>Condensación</b>: de gas a líquido. El vapor del baño se convierte en gotitas en el espejo.<br>• <b>Solidificación</b>: de líquido a sólido. El agua se convierte en hielo en el congelador a 0 °C.</p><p>Hay sustancias que pasan directamente de sólido a gas, como el olor de las bolas antipolillas: es la <b>sublimación</b>.</p><p>Estos cambios ocurren continuamente en la naturaleza y forman el <b>ciclo del agua</b>: el agua del mar se evapora, se condensa en las nubes, cae como lluvia o nieve y vuelve a los ríos y al mar.</p>`,
      svg: svg("Cambios de estado: fusión, evaporación, condensación, solidificación", `${tit("Cambios de estado")}${cj(10, 74, 66, 34, "sólido", COL.azul)}${cj(97, 74, 66, 34, "líquido", COL.agua)}${cj(184, 74, 66, 34, "gas", COL.gris)}${fl(78, 82, 95, 82, COL.rojo, 2)}${fl(165, 82, 182, 82, COL.rojo, 2)}${fl(182, 100, 165, 100, COL.azul, 2)}${fl(95, 100, 78, 100, COL.azul, 2)}${tx(86, 56, "fusión", 80, { color: COL.rojo, weight: 700 })}${tx(174, 56, "evaporación", 90, { color: COL.rojo, weight: 700 })}${tx(86, 130, "solidificación", 90, { color: COL.azul, weight: 700 })}${tx(174, 130, "condensación", 90, { color: COL.azul, weight: 700 })}${tx(130, 162, "calor →   ·   ← frío", 200)}`),
    },
    {
      html: `<h3>Sustancias puras y mezclas</h3><p>Una <b>sustancia pura</b> está formada por una sola clase de materia, como el agua destilada, la sal o el oro. Pero casi todo lo que nos rodea son <mark>mezclas</mark>: materiales formados por dos o más sustancias juntas. Hay dos tipos:</p><p>• Las <b>mezclas heterogéneas</b>: se distinguen a simple vista sus componentes. Por ejemplo, una ensalada, arena con piedras, agua con aceite o un plato de lentejas con chorizo.</p><p>• Las <b>mezclas homogéneas</b>, también llamadas <b>disoluciones</b>: no se distinguen sus componentes, ni siquiera con lupa. Por ejemplo, el agua con sal o con azúcar disueltos, el aire, la leche con cacao bien removida o el agua del mar. En una disolución, la sustancia que está en más cantidad se llama <b>disolvente</b> (normalmente el agua) y la que se disuelve, <b>soluto</b>.</p><p>No todo se disuelve en agua: la sal y el azúcar sí; la arena y el aceite, no.</p><p>Fíjate: aunque en el agua con azúcar no veas el azúcar, sigue ahí. Por eso el agua sabe dulce.</p>`,
      svg: svg("Mezcla heterogénea (agua con aceite y arena) y homogénea (agua con sal)", `${tit("Mezclas")}${[[66, "heterogénea", "se distinguen", COL.naranja, true], [194, "homogénea", "no se distinguen", COL.azul, false]].map(([x, a, b, c, het]) => `<path d="M${x - 30} 44 V140 q0 10 10 10 h40 q10 0 10 -10 V44" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 28}" y="70" width="56" height="78" fill="var(--water)" fill-opacity=".35"/>${het ? `<rect x="${x - 28}" y="70" width="56" height="14" fill="${COL.sol}" fill-opacity=".7"/>${[[-14, 140], [0, 142], [12, 139], [-6, 144]].map(([d, y]) => `<circle cx="${x + d}" cy="${y}" r="3" fill="${COL.marron}"/>`).join("")}` : ""}${et(x, 166, a, 110, { size: 11, color: c })}${tx(x, 178, b, 110)}`).join("")}`),
    },
    {
      html: `<h3>Separar mezclas</h3><p>Las mezclas se pueden <b>separar</b> sin cambiar las sustancias que las forman. El método depende de cómo sea la mezcla:</p><p>• <b>Tamizado</b>: para separar sólidos de distinto tamaño se usa un tamiz o colador. Así se separa la arena de las piedras o se cierne la harina.</p><p>• <b>Filtración</b>: para separar un sólido que no se disuelve de un líquido, se pasa por un filtro de papel o de tela. El agua atraviesa el filtro y la arena se queda. Así funciona la cafetera de filtro.</p><p>• <b>Decantación</b>: para separar líquidos que no se mezclan, como el agua y el aceite, o un sólido pesado de un líquido, se deja reposar y luego se vierte con cuidado la capa de arriba.</p><p>• <b>Separación magnética</b>: un <b>imán</b> atrae las limaduras de hierro y las separa de la arena o del serrín.</p><p>• <b>Evaporación</b>: para recuperar un sólido disuelto, se calienta la disolución o se deja al sol. El agua se evapora y el sólido queda en el fondo. Así se obtiene la sal en las <b>salinas</b> de la costa, como las de Torrevieja o las de San Pedro del Pinatar.</p>`,
      svg: svg("Métodos para separar mezclas: tamizado, filtración, decantación, imán y evaporación", `${tit("Separar mezclas")}${filas([["tamizar", "arena y piedras", COL.marron], ["filtrar", "agua y arena", COL.azul], ["decantar", "agua y aceite", COL.sol], ["imán", "hierro y serrín", COL.rojo], ["evaporar", "agua y sal", COL.naranja]], 52, 24, { x: 24, wa: 76, wb: 130 })}`),
    },
  ],
  figura: {
    titulo: "La materia en ocho ideas",
    svg: rejilla([
      ["Materia", "ocupa espacio y tiene masa", COL.verde],
      ["Masa", "kilogramo, gramo", COL.rojo],
      ["Volumen", "litro, mililitro", COL.azul],
      ["Específicas", "dureza, elasticidad…", COL.morado],
      ["Densidad", "flotar o hundirse", COL.agua],
      ["Estados", "sólido, líquido, gas", COL.naranja],
      ["Cambios", "fusión, evaporación…", COL.sol],
      ["Mezclas", "se pueden separar", COL.marron],
    ], 4, 86, "Resumen de la materia y sus propiedades"),
  },
  video: vgen("L3fmJrr72fk", "la materia y sus propiedades para niños"),
  ejemplos: [
    { enunciado: "¿Cuántos gramos son 2 kilos y medio de patatas?",
      pasos: ["1 kg = 1.000 g.", "2 kg = 2.000 g y medio kilo = 500 g.", "2.000 + 500 = 2.500."],
      resultado: "2.500 gramos." },
    { enunciado: "En una probeta hay 40 mL de agua. Al meter un tornillo, el agua llega a 46 mL. ¿Qué volumen tiene el tornillo?",
      pasos: ["El tornillo empuja el agua hacia arriba.", "Restamos: 46 − 40 = 6."],
      resultado: "6 mL (6 centímetros cúbicos)." },
    { enunciado: "¿Cómo separarías una mezcla de arena, sal y clips?",
      pasos: ["Con un imán sacamos los clips.", "Echamos agua: la sal se disuelve y la arena no.", "Filtramos: la arena queda en el filtro.", "Evaporamos el agua: queda la sal."],
      resultado: "Imán, disolver, filtrar y evaporar." },
  ],
  errores: [
    "Pensar que el aire no es materia: ocupa espacio y tiene masa.",
    "Creer que un kilo de plumas pesa menos que un kilo de hierro: pesan lo mismo.",
    "Confundir duro y resistente a golpes: el vidrio es duro pero frágil.",
    "Decir que en el agua con azúcar el azúcar desaparece: está disuelto.",
    "Pensar que al derretirse el hielo se convierte en otra sustancia: sigue siendo agua.",
  ],
  ejercicios: [
    { q: "¿Qué es la materia? Pon dos ejemplos de algo que no sea materia.", sol: "Todo lo que ocupa espacio y tiene masa. No son materia la luz y el sonido." },
    { q: "Diferencia entre material y objeto con un ejemplo.", sol: "El material es aquello de lo que está hecho el objeto: una silla (objeto) de madera (material)." },
    { q: "¿Con qué se mide la masa? ¿Y el volumen de un líquido?", sol: "La masa con la balanza; el volumen de un líquido con una probeta o un vaso medidor." },
    { q: "Pasa a gramos: 3 kg; y a mililitros: 2 L.", sol: "3.000 g y 2.000 mL." },
    { q: "Explica cómo medir el volumen de una piedra.", sol: "Se mide el agua de una probeta, se mete la piedra y se resta: lo que sube el agua es su volumen." },
    { q: "Escribe un material elástico, uno frágil y uno transparente.", sol: "Elástico: goma. Frágil: vidrio. Transparente: vidrio (o agua)." },
    { q: "¿Por qué flota el corcho y se hunde una moneda?", sol: "Porque el corcho es menos denso que el agua y la moneda más denso." },
    { q: "Escribe las características de los líquidos.", sol: "Tienen volumen fijo pero no forma propia: toman la forma del recipiente." },
    { q: "¿Qué cambio de estado ocurre cuando se empaña el espejo del baño?", sol: "Condensación: el vapor pasa a líquido." },
    { q: "¿Cómo obtendrías sal del agua del mar?", sol: "Por evaporación: dejando que el agua se evapore al sol, como en las salinas." },
  ],
  quiz: [
    { q: "La materia es todo lo que…", o: ["se ve", "ocupa espacio y tiene masa", "brilla"], a: 1, e: "Ocupa espacio y tiene masa." },
    { q: "La masa se mide con una…", o: ["probeta", "balanza", "regla"], a: 1, e: "Balanza." },
    { q: "Un kilogramo tiene…", o: ["100 g", "1.000 g", "10 g"], a: 1, e: "Mil gramos." },
    { q: "El espacio que ocupa un cuerpo es su…", o: ["volumen", "masa", "dureza"], a: 0, e: "Volumen." },
    { q: "Un material que recupera su forma es…", o: ["frágil", "elástico", "opaco"], a: 1, e: "Elástico." },
    { q: "El aceite en el agua…", o: ["se hunde", "flota", "se disuelve"], a: 1, e: "Flota: es menos denso." },
    { q: "Toma la forma del recipiente pero tiene volumen fijo:", o: ["sólido", "líquido", "gas"], a: 1, e: "Líquido." },
    { q: "Pasar de sólido a líquido es la…", o: ["fusión", "condensación", "evaporación"], a: 0, e: "Fusión." },
    { q: "El agua con sal es una mezcla…", o: ["heterogénea", "homogénea", "magnética"], a: 1, e: "Homogénea." },
    { q: "Para separar agua y arena usamos la…", o: ["filtración", "fusión", "imantación"], a: 0, e: "Filtración." },
  ],
  examen: [
    { q: "El agua hierve a…", o: ["0 °C", "50 °C", "100 °C"], a: 2, e: "100 °C." },
    { q: "El vidrio es…", o: ["elástico", "frágil", "opaco"], a: 1, e: "Frágil." },
    { q: "Un imán separa…", o: ["la sal", "el hierro", "el aceite"], a: 1, e: "El hierro." },
    { q: "Los gases…", o: ["tienen forma propia", "ocupan todo el recipiente", "no pesan"], a: 1, e: "Ocupan todo el espacio." },
  ],
  feynman: ["Qué es la materia y cómo se miden su masa y su volumen", "Cómo son los sólidos, los líquidos y los gases y cómo cambian de estado", "Cómo se separa una mezcla"],
  mapa: mapa("MATERIA", "var(--pri)", [
    ["Generales", "masa · volumen", COL.rojo],
    ["Específicas", "dureza · densidad…", COL.morado],
    ["Estados", "sólido · líquido · gas", COL.azul],
    ["Mezclas", "homogéneas · heterogéneas", COL.marron],
  ], 250),
  tarjetas: [
    ["Materia", "Todo lo que ocupa espacio y tiene masa."],
    ["Masa", "Cantidad de materia; se mide en kilogramos."],
    ["Volumen", "Espacio que ocupa un cuerpo; se mide en litros."],
    ["Densidad", "Masa en relación con el volumen; decide si algo flota."],
    ["Elasticidad", "Propiedad de recuperar la forma."],
    ["Fusión", "Paso de sólido a líquido."],
    ["Condensación", "Paso de gas a líquido."],
    ["Disolución", "Mezcla homogénea, como el agua con sal."],
  ],
  familias: ["Pesad en la cocina distintos alimentos y ordenadlos de menos a más gramos.", "Haced la torre de líquidos con miel, agua con colorante y aceite.", "Probad en la bañera qué objetos flotan y cuáles se hunden.", "Disolved sal en agua y dejadla al sol unos días para recuperar la sal."],
  profesores: PROF("Ciencias de la Naturaleza: la materia y sus propiedades generales y específicas; medida de masa y volumen; estados de la materia y cambios de estado; mezclas y técnicas de separación", ["Taller de medida con balanzas y probetas por estaciones.", "Experimentos de flotación con predicción previa y comprobación.", "Separación de una mezcla de arena, sal y limaduras de hierro."]),
  fuentes: [RD, wiki("Materia", "Materia"), wiki("Estado de agregación de la materia", "Estado_de_agregación_de_la_materia"), wiki("Mezcla", "Mezcla")],
  revisado: REV,
};
