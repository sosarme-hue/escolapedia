// Ciencias de la Naturaleza 3º de Primaria: la materia y sus estados. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, sol, nube, gota, termo, tick, equis } = require("./_pri3b");

// Vaso con líquido (nivel 0 a 1).
const vaso = (x, y, nivel = 0.6, c = "var(--water)", w = 34, h = 50) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="${-h + h * (1 - nivel)}" width="${w}" height="${h * nivel}" fill="${c}" fill-opacity=".55"/><path d="M${-w / 2} ${-h} V0 H${w / 2} V${-h}" stroke="var(--ink)" stroke-width="1.6" fill="none"/></g>`;
// Cubito de hielo.
const cubito = (x, y, s = 16) => `<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}" rx="3" fill="#dbeafe" stroke="var(--pen)" stroke-width="1.4"/>`;
// Partículas en una caja: tipo "solido" | "liquido" | "gas".
function particulas(x, y, tipo, w = 64, h = 56) {
  let p = [];
  if (tipo === "solido") for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) p.push([x - w / 2 + 9 + c * 11.5, y - h + 12 + r * 11]);
  if (tipo === "liquido") p = [[-22, 8], [-10, 6], [2, 9], [14, 7], [24, 8], [-18, 18], [-4, 19], [8, 18], [20, 19], [-24, 28], [-10, 29], [4, 28], [18, 29], [-16, 38], [0, 39], [14, 38]].map(([a, b]) => [x + a, y - h + 8 + b]);
  if (tipo === "gas") p = [[-24, 6], [10, 12], [-6, 28], [22, 34], [-20, 44], [6, 46]].map(([a, b]) => [x + a, y - h + b]);
  return `<rect x="${x - w / 2}" y="${y - h}" width="${w}" height="${h}" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="1.6"/>${p.map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="4.2" fill="var(--pen)" fill-opacity=".75"/>`).join("")}`;
}

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La materia y sus estados",
  minutos: 45,
  objetivos: ["Saber qué es la materia y que todo lo que nos rodea está hecho de ella", "Medir la masa y el volumen de los objetos", "Distinguir los estados sólido, líquido y gaseoso", "Explicar los cambios de estado del agua", "Conocer algunas propiedades de los materiales y reciclarlos"],
  claves: ["materia", "masa", "volumen", "sólido", "líquido", "gas", "fusión", "solidificación", "evaporación", "condensación", "material", "reciclar"],
  pregunta: {
    texto: "Dejas un cubito de hielo en un plato al sol. Al rato hay un charquito de agua y, horas después, el plato está seco. ¿Ha desaparecido el agua?",
    respuesta: "¡No! El agua sigue existiendo, pero ha <b>cambiado de estado</b>. Primero, el hielo (<b>sólido</b>) se convirtió en agua <b>líquida</b> por el calor: es la <mark>fusión</mark>. Después, el agua líquida se convirtió en <b>vapor de agua</b>, un gas invisible que se mezcló con el aire: es la <mark>evaporación</mark>. La <mark>materia</mark> no desaparece: solo cambia de forma.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la materia?</h3><p>Mira a tu alrededor: tu mesa, tu lápiz, el agua de tu botella, el aire que respiras, tu propio cuerpo… Todo lo que existe y ocupa un lugar está hecho de <mark>materia</mark>.</p><p>La materia es todo lo que tiene <b>masa</b> y ocupa un <b>espacio</b>. La madera, el plástico, el agua, el hierro, la arena o el aire son materia. Los seres vivos también están hechos de materia.</p><p>Hay cosas que no son materia, porque no ocupan espacio ni se pueden pesar: la luz, el sonido, los sueños o las ideas.</p><p>Aunque no lo veamos, el <b>aire</b> también es materia. Lo podemos comprobar: si hinchas un globo, el aire lo llena y ocupa un espacio. Y si soplas en una pajita dentro de un vaso de agua, salen burbujas: ¡son burbujas de aire!</p><p>La materia está formada por partes pequeñísimas, tan pequeñas que no se pueden ver ni con un microscopio normal. Las llamamos <b>partículas</b>.</p>`,
      svg: svg("Todo está hecho de materia: sólidos, líquidos y aire dentro de un globo", `${tit("Todo es materia")}<rect x="22" y="80" width="56" height="40" rx="4" fill="${COL.marron}" fill-opacity=".55"/><path d="M28 120 v24 M72 120 v24" stroke="${COL.marron}" stroke-width="5"/>${vaso(130, 140, 0.65)}<g transform="translate(206 92)"><ellipse rx="22" ry="27" fill="${COL.rojo}" fill-opacity=".55"/><path d="M0 27 l-4 6 h8z M0 33 q4 10 -2 20" stroke="var(--ink)" stroke-width="1.2" fill="${COL.rojo}"/></g>${et(50, 160, "madera", 70, { size: 11, color: COL.marron })}${et(130, 160, "agua", 70, { size: 11, color: COL.azul })}${et(206, 162, "aire", 70, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>La masa y el volumen</h3><p>Todos los objetos tienen dos propiedades que podemos medir:</p><p>• La <mark>masa</mark> es la <b>cantidad de materia</b> que tiene un objeto. Se mide con una <b>balanza</b> o una báscula, en <b>kilos</b> (kilogramos, kg) y en <b>gramos</b> (g). Un kilo tiene 1.000 gramos. Por ejemplo, un paquete de azúcar tiene una masa de 1 kg, y una manzana, unos 200 g.</p><p>• El <mark>volumen</mark> es el <b>espacio que ocupa</b> un objeto. El volumen de los líquidos se mide en <b>litros</b> (l) y en <b>mililitros</b> (ml). Un litro tiene 1.000 mililitros. Una botella grande de agua tiene un volumen de 1,5 litros, y una cuchara pequeña, unos 5 ml.</p><p>Ojo: un objeto grande no siempre tiene más masa que uno pequeño. Un balón de playa es muy grande, pero apenas pesa; una canica de hierro es pequeña y pesa más. Por eso decimos que algunos materiales son más <b>pesados</b> que otros: una caja llena de plumas pesa mucho menos que la misma caja llena de piedras.</p>`,
      svg: svg("Balanza para medir la masa y jarra medidora para el volumen", `${tit("Masa y volumen")}<g transform="translate(70 130)"><path d="M0 0 V-60 M-44 -50 H44" stroke="var(--ink)" stroke-width="3"/><path d="M-44 -50 l-14 24 h28z M44 -50 l-14 24 h28z" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M-58 -26 h28 M30 -26 h28" stroke="var(--ink)" stroke-width="3"/><circle cx="-44" cy="-34" r="8" fill="${COL.rojo}"/><rect x="36" y="-42" width="16" height="16" fill="${COL.gris}"/><rect x="-16" y="0" width="32" height="6" fill="var(--ink)"/></g>${vaso(190, 140, 0.7, "var(--water)", 46, 76)}${[0.25, 0.5, 0.75].map((k) => `<path d="M167 ${140 - 76 * k} h10" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}${et(70, 160, "masa: kg y g", 100, { size: 11, color: COL.rojo })}${et(190, 160, "volumen: l y ml", 100, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>Los estados de la materia</h3><p>La materia puede estar en <b>tres estados</b>: <mark>sólido</mark>, <mark>líquido</mark> y <mark>gaseoso</mark>. Para entenderlos, imagina que las partículas de la materia son como niños en el patio:</p><p>• En los <b>sólidos</b>, las partículas están muy <b>juntas y ordenadas</b>, como niños en fila agarrados de la mano. Casi no se mueven.<br>• En los <b>líquidos</b>, las partículas están <b>juntas pero se deslizan</b> unas sobre otras, como niños que pasean por el patio sin separarse mucho.<br>• En los <b>gases</b>, las partículas están muy <b>separadas</b> y se mueven a toda velocidad en todas direcciones, como niños corriendo libremente.</p><p>El <b>agua</b> es la única sustancia que encontramos fácilmente en la naturaleza en los tres estados: como <b>hielo</b> y nieve (sólido), como agua de los ríos y la lluvia (líquido) y como <b>vapor de agua</b> en el aire (gas).</p>`,
      svg: svg("Partículas en un sólido (ordenadas), un líquido (juntas) y un gas (separadas)", `${tit("Sólido, líquido y gas")}${particulas(46, 120, "solido")}${particulas(130, 120, "liquido")}${particulas(214, 120, "gas")}${et(46, 140, "sólido", 70, { size: 12, color: COL.marron })}${et(130, 140, "líquido", 70, { size: 12, color: COL.azul })}${et(214, 140, "gas", 70, { size: 12, color: COL.gris })}${tx(46, 158, "juntas y fijas", 76)}${tx(130, 158, "se deslizan", 76)}${tx(214, 158, "muy separadas", 76)}`),
      video: vid("JQ4WduVp9k4"),
    },
    {
      html: `<h3>Sólidos, líquidos y gases</h3><p>Cada estado tiene unas características que puedes comprobar tú mismo:</p><p>• Los <mark>sólidos</mark> tienen una <b>forma fija</b> y un <b>volumen fijo</b>. Una piedra, una goma o un lápiz tienen siempre la misma forma, aunque los cambies de sitio. No se pueden aplastar fácilmente ni se derraman.</p><p>• Los <mark>líquidos</mark> tienen un <b>volumen fijo</b>, pero <b>no tienen forma propia</b>: toman la forma del recipiente que los contiene. Si echas un vaso de zumo en un plato, se extiende; si lo echas en una botella, toma su forma. Además, <b>fluyen</b>: se derraman y caen. El agua, la leche, el aceite y el zumo son líquidos.</p><p>• Los <mark>gases</mark> no tienen ni forma ni volumen fijos: se <b>expanden</b> y ocupan todo el espacio que tienen disponible. Por eso, cuando alguien abre un perfume en una esquina, al rato lo hueles en toda la habitación. Además, los gases se pueden <b>comprimir</b>, es decir, apretar para que ocupen menos, como el aire de una rueda de bici. El aire y el vapor de agua son gases.</p>`,
      svg: svg("Tabla: el sólido tiene forma y volumen fijos; el líquido solo volumen; el gas ninguno", `${tit("¿Forma y volumen fijos?")}${et(150, 48, "forma", 60, { size: 11 })}${et(214, 48, "volumen", 60, { size: 11 })}${filas([["sólido", "", COL.marron], ["líquido", "", COL.azul], ["gas", "", COL.gris]], 76, 36, { x: 30, wa: 80, wb: 10 })}${tick(150, 72)}${tick(214, 72)}${equis(150, 108)}${tick(214, 108)}${equis(150, 144)}${equis(214, 144)}`),
    },
    {
      html: `<h3>Los cambios de estado</h3><p>La materia puede pasar de un estado a otro cuando se <b>calienta</b> o se <b>enfría</b>. Son los <mark>cambios de estado</mark>. Veamos los del agua:</p><p>• <mark>Fusión</mark>: de <b>sólido a líquido</b>, al calentar. El hielo se derrite y se convierte en agua. Pasa con los helados al sol o con la nieve en primavera.<br>• <mark>Solidificación</mark>: de <b>líquido a sólido</b>, al enfriar. El agua del congelador se convierte en cubitos. En invierno, los charcos se hielan.<br>• <mark>Evaporación</mark>: de <b>líquido a gas</b>, al calentar. El agua de la ropa tendida se evapora y la ropa se seca. Cuando el agua hierve en una olla, se evapora muy rápido.<br>• <mark>Condensación</mark>: de <b>gas a líquido</b>, al enfriar. El vapor de agua del aire se convierte en gotitas cuando toca algo frío. Por eso el espejo del baño se empaña después de una ducha caliente, o aparecen gotas por fuera de un vaso con agua muy fría.</p><p>Fíjate: ¡en los cambios de estado la materia <b>no desaparece</b>! Solo cambia de forma.</p>`,
      svg: svg("Ciclo de cambios de estado: fusión, evaporación, condensación y solidificación", `${tit("Cambios de estado del agua")}${cj(10, 58, 70, 28, "sólido", COL.marron)}${cj(95, 140, 70, 28, "líquido", COL.azul)}${cj(180, 58, 70, 28, "gas", COL.gris)}${fl(50, 88, 96, 146, COL.rojo, 2)}${fl(104, 138, 66, 88, COL.azul, 2)}${fl(164, 146, 210, 88, COL.rojo, 2)}${fl(194, 88, 156, 138, COL.azul, 2)}${et(26, 128, "fusión", 44, { size: 10, color: COL.rojo })}${et(124, 102, "solidificación", 74, { size: 9.5, color: COL.azul })}${et(226, 128, "evaporación", 60, { size: 9.5, color: COL.rojo })}${et(124, 124, "condensación", 74, { size: 9.5, color: COL.azul })}${tx(130, 52, "rojo: calentar · azul: enfriar", 220, { weight: 700 })}`),
      video: vid("JXv643OKCB4"),
    },
    {
      html: `<h3>Los cambios de estado en la naturaleza</h3><p>Los cambios de estado del agua ocurren en la naturaleza continuamente. Gracias a ellos existe el <b>ciclo del agua</b>:</p><p>1. El sol calienta el agua de los mares, los ríos y los lagos. El agua se <b>evapora</b> y sube como vapor.<br>2. Arriba, el aire está frío, y el vapor se <b>condensa</b> en gotitas diminutas que forman las <b>nubes</b>.<br>3. Cuando las gotitas se juntan y pesan demasiado, caen como <b>lluvia</b>. Si hace mucho frío, el agua se <b>solidifica</b> y cae como <b>nieve</b> o granizo.<br>4. En primavera, la nieve de las montañas se <b>funde</b> y el agua baja por los ríos hasta el mar. Y el ciclo vuelve a empezar.</p><p>Otros ejemplos de cambios de estado en tu vida diaria: el <b>rocío</b> de las mañanas sobre la hierba es vapor condensado; la <b>escarcha</b> son gotitas de rocío que se han congelado; el chocolate se funde en tu mano; la mantequilla se derrite en la sartén; y la cera de una vela se funde con la llama y luego se vuelve a solidificar.</p>`,
      svg: svg("El sol evapora el agua del mar, el vapor forma nubes y cae lluvia", `${tit("El agua en la naturaleza")}${sol(36, 50, 12)}<path d="M10 150 q30 -8 60 0 t60 0 t60 0 t60 0 V172 H10z" fill="var(--water)" fill-opacity=".5"/>${nube(170, 58, 1.3)}${fl(70, 140, 100, 80, COL.rojo, 2)}${fl(84, 140, 114, 80, COL.rojo, 2)}${[0, 1, 2, 3].map((i) => gota(150 + i * 14, 98 + (i % 2) * 14, 0.5)).join("")}${et(40, 118, "evaporación", 70, { size: 10, color: COL.rojo })}${et(208, 86, "condensación", 80, { size: 10, color: COL.azul })}${et(216, 126, "lluvia", 50, { size: 10, color: COL.azul })}`),
    },
    {
      html: `<h3>Los materiales y sus propiedades</h3><p>Los objetos están hechos de diferentes <mark>materiales</mark>. Algunos materiales son <b>naturales</b>, porque los tomamos de la naturaleza: la madera, la piedra, la lana, el algodón o el barro. Otros son <b>artificiales</b>, porque los fabrican las personas: el plástico, el vidrio, el papel o el acero.</p><p>Elegimos un material u otro según sus <b>propiedades</b>:</p><p>• <b>Duro</b> o <b>blando</b>: el hierro es duro; la plastilina es blanda.<br>• <b>Flexible</b> o <b>rígido</b>: una goma se dobla; un ladrillo no.<br>• <b>Transparente</b> u <b>opaco</b>: a través del vidrio se ve; a través de la madera, no.<br>• <b>Frágil</b> o <b>resistente</b>: el vidrio se rompe con facilidad; el acero aguanta mucho.<br>• <b>Impermeable</b> o <b>permeable</b>: el plástico no deja pasar el agua; la tela de algodón, sí.</p><p>Por eso las ventanas son de vidrio, para que entre la luz; los paraguas, de tela impermeable; las ollas, de metal, que soporta el calor; y las tijeras, de acero, que es duro y corta bien.</p>`,
      svg: svg("Propiedades de los materiales: duro, flexible, transparente e impermeable", `${tit("Propiedades")}${fichas([["Duro", "hierro, piedra", COL.gris], ["Flexible", "goma, tela", COL.verde], ["Transparente", "vidrio", COL.agua], ["Impermeable", "plástico", COL.azul]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Reducir, reutilizar y reciclar</h3><p>Muchos materiales se fabrican con recursos que se acaban, como el petróleo, o que tardan mucho en volver a crecer, como los árboles. Además, cuando los tiramos, forman montañas de basura. Una botella de plástico puede tardar ¡cientos de años! en deshacerse en la naturaleza.</p><p>Para cuidar el planeta seguimos la regla de las <b>tres erres</b>:</p><p>• <mark>Reducir</mark>: usar menos cosas. Por ejemplo, llevar una cantimplora en lugar de comprar botellas de plástico, o usar bolsas de tela.<br>• <mark>Reutilizar</mark>: dar otro uso a las cosas antes de tirarlas. Un bote de cristal sirve para guardar lápices; un folio usado por una cara sirve para hacer dibujos.<br>• <mark>Reciclar</mark>: separar la basura para que, con los materiales usados, se fabriquen cosas nuevas.</p><p>En España separamos los residuos en contenedores de colores: <b>azul</b> para el papel y el cartón; <b>amarillo</b> para los envases de plástico, las latas y los briks; <b>verde</b> para el vidrio; y <b>marrón</b> para los restos de comida.</p>`,
      svg: svg("Contenedores de reciclaje: azul papel, amarillo envases, verde vidrio y marrón orgánico", `${tit("Separa para reciclar")}${[["papel", "#1d4ed8", 40], ["envases", "#eab308", 100], ["vidrio", "#15803d", 160], ["orgánico", "#92400e", 220]].map(([s, c, x]) => `<rect x="${x - 24}" y="66" width="48" height="66" rx="5" fill="${c}"/><rect x="${x - 28}" y="58" width="56" height="10" rx="3" fill="${c}"/><circle cx="${x - 16}" cy="136" r="5" fill="var(--ink)"/><circle cx="${x + 16}" cy="136" r="5" fill="var(--ink)"/>${et(x, 158, s, 58, { size: 11, color: c })}`).join("")}`),
    },
    {
      html: `<h3>¡Experimentamos!</h3><p>Vamos a comprobar lo que hemos aprendido con algunos experimentos sencillos. Pide ayuda a un adulto.</p><p><b>1. ¿Qué se derrite antes?</b> Pon en tres platos un cubito de hielo, un trocito de chocolate y un trozo de mantequilla. Déjalos al sol o cerca de un radiador. Apunta el orden en que se funden. ¿Qué cambio de estado ocurre?</p><p><b>2. Agua que aparece:</b> llena un vaso con agua y hielo y espera diez minutos. Toca el exterior del vaso. ¿Está mojado? El vapor de agua del aire se ha condensado al tocar el vaso frío.</p><p><b>3. Agua que desaparece:</b> pon un poco de agua en dos platos iguales, uno al sol y otro a la sombra. Marca el nivel con un rotulador. ¿En cuál se evapora antes?</p><p><b>4. El aire ocupa espacio:</b> mete un vaso boca abajo, recto, en un barreño con agua. ¿Entra el agua en el vaso? No, porque el aire que hay dentro ocupa el espacio.</p><p>Recuerda: en ciencias primero <b>pensamos qué va a pasar</b>, después lo <b>comprobamos</b> y al final <b>apuntamos</b> lo que hemos visto.</p>`,
      svg: svg("Experimento: vaso con hielo y gotas por fuera por condensación", `${tit("Experimento de condensación")}${vaso(96, 150, 0.8, "var(--water)", 56, 90)}${cubito(86, 84)}${cubito(104, 96)}${[[64, 100], [130, 90], [62, 128], [128, 120], [66, 70]].map(([a, b]) => gota(a, b, 0.45)).join("")}${columna([["pienso", COL.morado], ["compruebo", COL.azul], ["apunto", COL.verde]], 200, 90, 46, 28, 12)}`),
    },
  ],
  figura: {
    titulo: "La materia en ocho ideas",
    svg: rejilla([
      ["Materia", "masa y ocupa espacio", COL.azul],
      ["Masa", "kg y g, con balanza", COL.rojo],
      ["Volumen", "litros y mililitros", COL.agua],
      ["Sólido", "forma y volumen fijos", COL.marron],
      ["Líquido", "forma del recipiente", COL.azul],
      ["Gas", "ocupa todo el espacio", COL.gris],
      ["Cambios", "fusión, evaporación…", COL.naranja],
      ["Tres erres", "reducir, reutilizar, reciclar", COL.verde],
    ], 4, 86, "Resumen de la materia y sus estados"),
  },
  video: vgen("DE3LCPfP8N8", "los estados de la materia para niños"),
  ejemplos: [
    { enunciado: "Clasifica en sólido, líquido o gas: leche, piedra, aire, aceite, lápiz, vapor de agua.",
      pasos: ["Forma fija: piedra y lápiz → sólidos.", "Toman la forma del recipiente: leche y aceite → líquidos.", "Ocupan todo el espacio: aire y vapor → gases."],
      resultado: "Sólidos: piedra y lápiz. Líquidos: leche y aceite. Gases: aire y vapor." },
    { enunciado: "¿Qué cambio de estado ocurre en cada caso: el polo se derrite; el espejo del baño se empaña; el agua del congelador hace cubitos?",
      pasos: ["Sólido a líquido por calor: fusión.", "El vapor se convierte en gotas al tocar el espejo frío: condensación.", "Líquido a sólido por frío: solidificación."],
      resultado: "Fusión, condensación y solidificación." },
    { enunciado: "Una botella tiene 1 litro de agua. Llenamos 4 vasos de 200 ml. ¿Cuánta agua queda?",
      pasos: ["1 litro = 1.000 ml.", "4 vasos × 200 ml = 800 ml.", "1.000 − 800 = 200 ml."],
      resultado: "Quedan 200 ml." },
  ],
  errores: [
    "Pensar que el aire no es materia porque no se ve.",
    "Creer que el agua desaparece al evaporarse: se convierte en vapor.",
    "Confundir evaporación (líquido a gas) con condensación (gas a líquido).",
    "Pensar que lo más grande siempre pesa más.",
  ],
  ejercicios: [
    { q: "¿Qué es la materia? Escribe tres ejemplos.", sol: "Todo lo que tiene masa y ocupa un espacio. Por ejemplo, la madera, el agua y el aire." },
    { q: "¿Con qué se mide la masa? ¿En qué unidades?", sol: "Con una balanza, en kilos y gramos." },
    { q: "¿Cuántos mililitros tiene un litro?", sol: "1.000 mililitros." },
    { q: "Escribe los tres estados de la materia con un ejemplo de cada uno.", sol: "Sólido (hielo), líquido (agua) y gas (vapor de agua)." },
    { q: "¿Por qué decimos que los líquidos no tienen forma propia?", sol: "Porque toman la forma del recipiente que los contiene." },
    { q: "¿Qué es la fusión? Pon un ejemplo.", sol: "El paso de sólido a líquido al calentar. Por ejemplo, un helado que se derrite." },
    { q: "¿Por qué se seca la ropa tendida?", sol: "Porque el agua que tiene se evapora y pasa al aire como vapor." },
    { q: "¿Por qué se empaña el espejo del baño?", sol: "Porque el vapor de la ducha se condensa en gotitas al tocar el espejo, que está frío." },
    { q: "¿De qué material harías un paraguas? ¿Por qué?", sol: "De tela impermeable o plástico, porque no deja pasar el agua." },
    { q: "¿En qué contenedor tiras una lata? ¿Y una botella de vidrio?", sol: "La lata en el amarillo y la botella de vidrio en el verde." },
  ],
  quiz: [
    { q: "La materia es todo lo que…", o: ["tiene masa y ocupa espacio", "se ve", "es de color"], a: 0, e: "Tiene masa y ocupa espacio." },
    { q: "La masa se mide con…", o: ["una regla", "una balanza", "un reloj"], a: 1, e: "Con una balanza." },
    { q: "El volumen de un líquido se mide en…", o: ["litros", "kilos", "metros"], a: 0, e: "En litros y mililitros." },
    { q: "Tiene forma y volumen fijos el…", o: ["sólido", "líquido", "gas"], a: 0, e: "El sólido." },
    { q: "Toma la forma del recipiente el…", o: ["sólido", "líquido", "hielo"], a: 1, e: "El líquido." },
    { q: "El aire es un…", o: ["sólido", "líquido", "gas"], a: 2, e: "Un gas." },
    { q: "El hielo que se derrite es una…", o: ["fusión", "condensación", "solidificación"], a: 0, e: "Fusión." },
    { q: "De líquido a gas es la…", o: ["evaporación", "fusión", "solidificación"], a: 0, e: "Evaporación." },
    { q: "El vidrio es…", o: ["transparente", "opaco", "blando"], a: 0, e: "Transparente." },
    { q: "El papel se recicla en el contenedor…", o: ["azul", "verde", "amarillo"], a: 0, e: "Azul." },
  ],
  examen: [
    { q: "Las nubes se forman por…", o: ["condensación", "fusión", "solidificación"], a: 0, e: "El vapor se condensa en gotitas." },
    { q: "Un kilo tiene…", o: ["100 gramos", "1.000 gramos", "10 gramos"], a: 1, e: "1.000 gramos." },
    { q: "Los gases se pueden…", o: ["comprimir", "cortar con tijeras", "derretir"], a: 0, e: "Comprimir." },
    { q: "Usar un bote de cristal como lapicero es…", o: ["reutilizar", "reciclar", "reducir"], a: 0, e: "Reutilizar." },
  ],
  feynman: ["Qué es la materia y cómo se mide", "Los tres estados de la materia", "Los cambios de estado del agua"],
  mapa: mapa("LA MATERIA", "var(--pri)", [
    ["Medir", "masa (kg) · volumen (l)", COL.rojo],
    ["Estados", "sólido · líquido · gas", COL.azul],
    ["Cambios", "fusión · evaporación…", COL.naranja],
    ["Materiales", "propiedades · reciclar", COL.verde],
  ], 250),
  tarjetas: [
    ["Materia", "Todo lo que tiene masa y ocupa espacio."],
    ["Masa", "Cantidad de materia: kilos y gramos."],
    ["Volumen", "Espacio que ocupa: litros y mililitros."],
    ["Sólido", "Forma y volumen fijos."],
    ["Líquido", "Volumen fijo; toma la forma del recipiente."],
    ["Gas", "Ocupa todo el espacio disponible."],
    ["Fusión", "De sólido a líquido al calentar."],
    ["Condensación", "De gas a líquido al enfriar."],
  ],
  familias: ["Haced cubitos de hielo con zumo y observad cómo se solidifican y se funden.", "Pesad frutas en la báscula de la cocina y medid líquidos con una jarra medidora.", "Separad juntos la basura de casa en los contenedores de colores.", "Buscad en casa objetos de madera, plástico, metal y vidrio y explicad por qué se hicieron de ese material."],
  profesores: PROF("Ciencias de la Naturaleza: la materia y sus propiedades generales (masa y volumen); estados de la materia; cambios de estado del agua; materiales naturales y artificiales y sus propiedades; las tres erres", ["Experimentos de fusión y evaporación con predicción y registro.", "Medición de masas y volúmenes con balanzas y jarras graduadas.", "Clasificación de objetos por material y propiedades."]),
  fuentes: [RD, wiki("Materia", "Materia"), wiki("Estado de agregación de la materia", "Estado de agregación de la materia"), wiki("Reciclaje", "Reciclaje")],
  revisado: REV,
};
