// Ciencias de la Naturaleza 6º de Primaria: la materia y sus cambios. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Cajita con partículas en estado sólido, líquido o gas.
function particulas(x, y, tipo, c) {
  const pts = { solido: [...Array(16)].map((_, i) => [10 + (i % 4) * 14, 14 + Math.floor(i / 4) * 14]), liquido: [[10, 44], [24, 46], [38, 44], [52, 46], [16, 32], [32, 34], [46, 32], [12, 20 + 30], [28, 22 + 32], [44, 52]], gas: [[10, 10], [44, 16], [24, 30], [54, 40], [12, 50], [36, 54]] }[tipo];
  return `<rect x="${x}" y="${y}" width="64" height="64" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tipo === "liquido" ? `<rect x="${x + 2}" y="${y + 24}" width="60" height="38" rx="4" fill="${c}" fill-opacity=".15"/>` : ""}${pts.map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="5" fill="${c}"/>`).join("")}`;
}

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La materia y sus cambios",
  minutos: 50,
  objetivos: ["Distinguir propiedades generales y específicas de la materia", "Calcular la densidad y relacionarla con la flotación", "Explicar los estados de la materia y los cambios de estado", "Diferenciar sustancias puras y mezclas y separar mezclas", "Distinguir cambios físicos y químicos"],
  claves: ["materia", "masa", "volumen", "densidad", "sólido", "líquido", "gas", "fusión", "evaporación", "condensación", "mezcla", "disolución", "cambio químico", "combustión", "oxidación"],
  pregunta: {
    texto: "Un barco de acero de miles de toneladas flota, pero una canica de acero se hunde. ¿Por qué?",
    respuesta: "Por la <mark>densidad</mark>. La canica es acero macizo, mucho más denso que el agua, y se hunde. El barco, en cambio, está <b>hueco</b>: tiene mucho aire dentro. Si sumamos el acero y el aire, el barco entero ocupa un volumen enorme para su masa, y su densidad media es <b>menor que la del agua</b>. Por eso flota.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la materia?</h3><p><mark>Materia</mark> es todo lo que tiene <b>masa</b> y ocupa un <b>volumen</b>: el agua, el aire, una piedra, tu cuerpo o una estrella. Lo que no es materia son cosas como la luz, el sonido, los pensamientos o las emociones.</p><p>La materia está formada por partículas diminutas, imposibles de ver incluso con un microscopio normal, llamadas <b>átomos</b>. Hay algo más de cien tipos de átomos distintos, que son los <b>elementos químicos</b>: el oxígeno, el hidrógeno, el carbono, el hierro, el oro… Al combinarse, forman todas las sustancias que existen, como pasa con las letras al formar palabras. Por ejemplo, el agua está formada por hidrógeno y oxígeno.</p><p>Las propiedades de la materia pueden ser <b>generales</b>, si las tiene toda la materia, o <b>específicas</b>, si sirven para distinguir una sustancia de otra.</p>`,
      svg: svg("Ejemplos de materia (piedra, agua, aire) y de lo que no es materia (luz, sonido)", `${tit("¿Es materia?")}${cj(10, 36, 115, 26, "SÍ: masa y volumen", COL.verde)}${cj(135, 36, 115, 26, "NO es materia", COL.rojo)}${["agua", "aire", "piedra", "tu cuerpo"].map((s, i) => et(67, 88 + i * 22, s, 100, { size: 12, weight: 400 })).join("")}${["la luz", "el sonido", "una idea", "la alegría"].map((s, i) => et(192, 88 + i * 22, s, 100, { size: 12, weight: 400 })).join("")}`),
    },
    {
      html: `<h3>Propiedades generales: masa y volumen</h3><p>La <mark>masa</mark> es la cantidad de materia que tiene un cuerpo. Se mide con una <b>balanza</b>, y su unidad principal es el <b>kilogramo (kg)</b>. También usamos el gramo (g) y la tonelada (t). 1 kg = 1.000 g.</p><p>El <mark>volumen</mark> es el espacio que ocupa un cuerpo. Se mide en <b>metros cúbicos (m³)</b> y, para cosas pequeñas, en centímetros cúbicos (cm³) o en litros (L). Recuerda: <b>1 litro = 1 decímetro cúbico</b> y 1 mililitro = 1 cm³.</p><p>Para medir el volumen de un sólido con forma regular, como una caja, se multiplican sus tres medidas: largo × ancho × alto. Para un sólido irregular, como una piedra, se usa una <b>probeta</b> con agua: se anota el nivel del agua, se mete la piedra y se vuelve a mirar. La diferencia es el volumen de la piedra. Este método se atribuye al sabio griego <b>Arquímedes</b>.</p>`,
      svg: svg("Probeta con 50 mL de agua y la misma probeta con una piedra marcando 65 mL: la piedra ocupa 15 cm³", `${tit("Volumen de una piedra")}${[[70, 50, "50 mL"], [190, 65, "65 mL"]].map(([x, v, s], i) => `<rect x="${x - 20}" y="40" width="40" height="110" rx="4" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 18}" y="${150 - v * 1.4}" width="36" height="${v * 1.4 - 2}" fill="#bae6fd"/>${i ? `<ellipse cx="${x}" cy="136" rx="12" ry="9" fill="#a8a29e" stroke="var(--ink)"/>` : ""}${et(x, 166, s, 70, { size: 12, color: COL.agua })}`).join("")}${fl(104, 96, 152, 96)}${tx(128, 86, "+ piedra", 60)}${tx(130, 176, "65 − 50 = 15 cm³", 120, { weight: 700, color: COL.rojo })}`),
    },
    {
      html: `<h3>Propiedades específicas: la densidad</h3><p>Las <b>propiedades específicas</b> nos permiten identificar una sustancia: el color, el olor, la dureza, si conduce el calor o la electricidad, la temperatura a la que se funde o hierve… Una de las más útiles es la <mark>densidad</mark>.</p><p>La densidad indica cuánta masa hay en cada unidad de volumen, es decir, lo «apretada» que está la materia. Se calcula así:</p><p><b>densidad = masa ÷ volumen</b></p><p>Por ejemplo, el agua tiene una densidad de <b>1 g/cm³</b>: cada centímetro cúbico de agua pesa 1 gramo. El hierro tiene unos 7,9 g/cm³ y el corcho, unos 0,25 g/cm³.</p><p>La densidad explica la <b>flotación</b>: un cuerpo con <b>menos densidad</b> que el líquido <b>flota</b>; si tiene <b>más</b>, <b>se hunde</b>. Por eso el corcho y el aceite flotan en el agua, y una piedra se hunde. Un kilo de hierro y un kilo de paja tienen la misma masa, pero la paja ocupa muchísimo más volumen porque es menos densa.</p>`,
      svg: svg("Vaso de agua con un corcho flotando, aceite encima y una piedra en el fondo", `${tit("Flota o se hunde")}<rect x="40" y="40" width="100" height="120" rx="6" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="42" y="82" width="96" height="76" fill="#bae6fd"/><rect x="42" y="66" width="96" height="16" fill="#fde68a"/><rect x="74" y="56" width="22" height="14" rx="3" fill="#c08457"/><ellipse cx="90" cy="148" rx="14" ry="9" fill="#78716c"/>${et(204, 62, "corcho 0,25", 100, { size: 11, color: COL.marron })}${et(204, 78, "aceite 0,9", 100, { size: 11, color: COL.sol })}${et(204, 112, "agua 1", 100, { size: 11, color: COL.agua })}${et(204, 150, "piedra 2,6", 100, { size: 11, color: COL.gris })}${tx(130, 176, "densidad en g/cm³", 160)}`),
    },
    {
      html: `<h3>Los estados de la materia</h3><p>La materia se puede presentar en tres estados principales, según cómo estén unidas sus partículas:</p><p>• En estado <mark>sólido</mark>, las partículas están muy juntas y ordenadas, y solo vibran. Los sólidos tienen <b>forma y volumen fijos</b>. Ejemplos: una piedra, el hielo, una mesa.</p><p>• En estado <mark>líquido</mark>, las partículas están juntas pero se deslizan unas sobre otras. Los líquidos tienen <b>volumen fijo</b>, pero su forma se <b>adapta al recipiente</b>. Ejemplos: el agua, el aceite, la leche.</p><p>• En estado <mark>gaseoso</mark>, las partículas están muy separadas y se mueven a toda velocidad en todas direcciones. Los gases <b>no tienen forma ni volumen fijos</b>: ocupan todo el espacio disponible y se pueden comprimir. Ejemplos: el aire, el vapor de agua, el butano.</p><p>El agua es la única sustancia que encontramos de forma natural en la Tierra en los tres estados: hielo, agua líquida y vapor.</p>`,
      svg: svg("Partículas en un sólido (ordenadas), un líquido (juntas pero desordenadas) y un gas (separadas)", `${tit("Sólido, líquido y gas")}${particulas(14, 46, "solido", COL.azul)}${particulas(98, 46, "liquido", COL.agua)}${particulas(182, 46, "gas", COL.rojo)}${et(46, 130, "sólido", 76, { size: 12, color: COL.azul })}${et(130, 130, "líquido", 76, { size: 12, color: COL.agua })}${et(214, 130, "gas", 76, { size: 12, color: COL.rojo })}${tx(46, 148, "forma y volumen", 80)}${tx(130, 148, "volumen fijo", 80)}${tx(214, 148, "nada fijo", 80)}`),
      video: vid("huVPSc9X61E"),
    },
    {
      html: `<h3>Los cambios de estado</h3><p>Si calentamos o enfriamos una sustancia, puede pasar de un estado a otro. Son los <mark>cambios de estado</mark>:</p><p>• <b>Fusión</b>: de sólido a líquido, al calentar. El hielo se funde a <b>0 °C</b>.<br>• <b>Solidificación</b>: de líquido a sólido, al enfriar. El agua se congela a 0 °C.<br>• <b>Vaporización</b>: de líquido a gas. Si ocurre poco a poco en la superficie y a cualquier temperatura, se llama <b>evaporación</b> (la ropa tendida se seca); si ocurre en todo el líquido con burbujas, es <b>ebullición</b>. El agua hierve a <b>100 °C</b> a nivel del mar.<br>• <b>Condensación</b>: de gas a líquido, al enfriar. El vapor se convierte en gotitas en un espejo después de la ducha.<br>• <b>Sublimación</b>: de sólido directamente a gas, como las bolas de naftalina; y <b>sublimación inversa</b> o deposición: de gas a sólido, como la escarcha.</p><p>En un cambio de estado la sustancia <b>sigue siendo la misma</b>: el hielo, el agua y el vapor son todos agua.</p>`,
      svg: svg("Esquema de cambios de estado entre sólido, líquido y gas con sus nombres", `${tit("Cambios de estado")}${cj(10, 120, 70, 30, "sólido", COL.azul)}${cj(180, 120, 70, 30, "líquido", COL.agua)}${cj(95, 40, 70, 30, "gas", COL.rojo)}<path d="M80 128 H180" stroke="var(--red)" stroke-width="2"/>${fl(170, 128, 180, 128, "var(--red)", 2)}${fl(90, 144, 80, 144, "var(--pen)", 2)}<path d="M180 144 H90" stroke="var(--pen)" stroke-width="2"/>${et(130, 122, "fusión", 70, { size: 10, color: COL.rojo })}${et(130, 160, "solidificación", 90, { size: 10, color: COL.azul })}${fl(210, 118, 168, 66, "var(--red)", 2)}${fl(150, 72, 196, 120, "var(--pen)", 2)}${et(226, 84, "vaporización", 70, { size: 10, color: COL.rojo })}${et(150, 104, "condensación", 70, { size: 10, color: COL.azul })}${fl(48, 118, 92, 64, "var(--muted)", 2)}${et(40, 84, "sublimación", 70, { size: 10, color: COL.gris })}${tx(130, 176, "calentar →  rojo   ·   enfriar → azul", 220)}`),
    },
    {
      html: `<h3>Sustancias puras y mezclas</h3><p>Una <mark>sustancia pura</mark> está formada por un solo tipo de materia y tiene siempre las mismas propiedades. Por ejemplo, el agua destilada, el oro, la sal o el azúcar.</p><p>Una <mark>mezcla</mark> está formada por dos o más sustancias que se juntan sin perder sus propiedades. Casi todo lo que nos rodea son mezclas. Hay dos tipos:</p><p>• Las <b>mezclas heterogéneas</b>: se distinguen sus componentes a simple vista. Por ejemplo, una ensalada, el granito (con sus puntitos de colores), agua con arena o agua con aceite.</p><p>• Las <b>mezclas homogéneas</b> o <b>disoluciones</b>: no se distinguen sus componentes, ni siquiera con lupa. Por ejemplo, el agua con sal, el aire, el bronce o el agua del grifo. En una disolución, la sustancia que está en mayor cantidad es el <b>disolvente</b> (normalmente el agua) y la que se disuelve es el <b>soluto</b> (la sal o el azúcar).</p>`,
      svg: svg("Clasificación de la materia: sustancias puras y mezclas homogéneas y heterogéneas", `${tit("¿Pura o mezcla?")}${cj(80, 32, 100, 24, "MATERIA", COL.gris)}${cj(10, 74, 100, 26, "sustancia pura", COL.azul)}${cj(150, 74, 100, 26, "mezcla", COL.morado)}${fl(110, 56, 70, 72)}${fl(150, 56, 190, 72)}${cj(102, 124, 76, 30, "homogénea", COL.agua)}${cj(182, 124, 76, 30, "heterogénea", COL.naranja)}${fl(190, 100, 146, 122)}${fl(206, 100, 220, 122)}${tx(60, 120, "agua destilada, oro", 100)}${tx(140, 168, "agua con sal", 76)}${tx(220, 168, "ensalada", 76)}`),
      video: vid("gtgZPr3QhvA"),
    },
    {
      html: `<h3>Cómo separar mezclas</h3><p>Como los componentes de una mezcla conservan sus propiedades, podemos aprovecharlas para <mark>separarlos</mark>:</p>${tabla(["Método", "Cómo funciona", "Ejemplo"], [["Tamizado", "un colador deja pasar lo pequeño", "arena y piedras"], ["Filtración", "un filtro de papel retiene el sólido y deja pasar el líquido", "agua y arena; el café"], ["Decantación", "se deja reposar y el más denso se va al fondo, o se separan dos líquidos", "agua y aceite"], ["Separación magnética", "un imán atrae el hierro", "limaduras de hierro y arena"], ["Evaporación", "se calienta y el líquido se va; queda el sólido disuelto", "obtener sal del agua de mar"], ["Destilación", "se hierve, el vapor se enfría y se recoge el líquido", "separar alcohol y agua"]])}<p>En las <b>salinas</b> de la costa se obtiene sal dejando que el sol evapore el agua del mar en grandes balsas.</p>`,
      svg: svg("Cuatro métodos para separar mezclas: tamizado, filtración, decantación e imán", `${tit("Separar mezclas")}${fichas([["Tamizado", "arena y piedras", COL.marron], ["Filtración", "agua y arena", COL.agua], ["Decantación", "agua y aceite", COL.sol], ["Imán", "hierro y arena", COL.rojo], ["Evaporación", "sal del agua de mar", COL.naranja], ["Destilación", "alcohol y agua", COL.morado]], 2, 34)}`),
    },
    {
      html: `<h3>Cambios físicos y cambios químicos</h3><p>La materia cambia constantemente. Hay dos tipos de cambios:</p><p>En un <mark>cambio físico</mark>, la sustancia <b>sigue siendo la misma</b>, aunque cambie de forma, de tamaño o de estado. Por ejemplo: romper un papel, fundir chocolate, disolver azúcar en leche, estirar una goma o congelar agua. Muchos se pueden deshacer.</p><p>En un <mark>cambio químico</mark> o <b>reacción química</b>, las sustancias del principio se transforman en <b>otras sustancias nuevas</b>, con propiedades distintas. Por ejemplo: quemar madera, que el hierro se oxide, cocinar un huevo, hornear un bizcocho, la digestión o la fotosíntesis. Normalmente no se pueden deshacer.</p><p>Algunas pistas de que ha habido un cambio químico son: un <b>cambio de color</b>, la aparición de <b>burbujas de gas</b>, un <b>olor nuevo</b>, que se desprenda <b>luz o calor</b> o que aparezca un sólido nuevo. Cuidado: un cambio de estado, aunque cambie mucho el aspecto, es un cambio físico.</p>`,
      svg: svg("Cambio físico: hielo que se funde; cambio químico: madera que se quema y se convierte en ceniza y humo", `${tit("¿Físico o químico?")}${cj(10, 34, 115, 26, "FÍSICO", COL.azul)}${cj(135, 34, 115, 26, "QUÍMICO", COL.rojo)}<rect x="30" y="80" width="24" height="24" rx="3" fill="#bae6fd" stroke="var(--water)"/>${fl(60, 92, 78, 92)}<ellipse cx="96" cy="100" rx="16" ry="5" fill="#bae6fd"/>${tx(67, 130, "hielo → agua", 100, { weight: 700 })}${tx(67, 146, "sigue siendo agua", 110)}<rect x="152" y="94" width="30" height="10" rx="3" fill="#a16207"/><path d="M160 92 q4 -16 8 -6 q4 -18 8 0" fill="var(--red)" fill-opacity=".8"/>${fl(188, 98, 204, 98)}<ellipse cx="226" cy="102" rx="14" ry="4" fill="#78716c"/><path d="M222 94 q-4 -10 2 -18 M230 94 q4 -10 -2 -18" stroke="var(--muted)" stroke-width="2" fill="none"/>${tx(192, 130, "madera → ceniza + humo", 110, { weight: 700 })}${tx(192, 146, "sustancias nuevas", 110)}`),
      video: vid("21b34nAF9-Y"),
    },
    {
      html: `<h3>Combustión, oxidación y fermentación</h3><p>Hay tres cambios químicos muy frecuentes en la vida diaria:</p><p>La <mark>combustión</mark> es la reacción de una sustancia que arde (el <b>combustible</b>, como la madera, el gas o la gasolina) con el <b>oxígeno</b> del aire. Desprende mucha <b>luz y calor</b>, y produce dióxido de carbono, vapor de agua y, a veces, humo y ceniza. Para que haya fuego hacen falta tres cosas: combustible, oxígeno y calor. Si falta una, el fuego se apaga: por eso una vela se apaga si la tapas con un vaso.</p><p>La <mark>oxidación</mark> es la reacción de algunas sustancias con el oxígeno, pero de forma <b>lenta</b>. El hierro se cubre de una capa rojiza llamada <b>óxido</b> (herrumbre) cuando está en contacto con el aire y la humedad. Para evitarlo, se pintan las verjas o se usa acero inoxidable. Una manzana cortada que se pone marrón también se está oxidando.</p><p>La <mark>fermentación</mark> la realizan microorganismos, como las levaduras y algunas bacterias. Gracias a ella se hacen el pan (la masa sube por el gas que producen), el yogur y el queso.</p>`,
      svg: svg("Triángulo del fuego: combustible, oxígeno y calor", `${tit("El triángulo del fuego")}<path d="M130 48 L210 150 H50 Z" fill="var(--red)" fill-opacity=".1" stroke="var(--red)" stroke-width="3"/><path d="M122 120 q8 -40 16 -14 q8 -24 10 4 q4 22 -14 22 q-16 0 -12 -12z" fill="#f97316"/>${et(96, 58, "calor", 60, { size: 12, color: COL.rojo })}${et(44, 168, "combustible", 90, { size: 12, color: COL.marron })}${et(216, 168, "oxígeno", 80, { size: 12, color: COL.agua })}${tx(222, 90, "Si falta uno,", 70)}${tx(222, 104, "se apaga", 70)}`),
    },
  ],
  figura: {
    titulo: "La materia en ocho ideas",
    svg: rejilla([
      ["Materia", "tiene masa y volumen", COL.gris],
      ["Densidad", "masa ÷ volumen", COL.azul],
      ["Estados", "sólido, líquido, gas", COL.agua],
      ["Fusión", "sólido → líquido", COL.rojo],
      ["Condensación", "gas → líquido", COL.morado],
      ["Mezclas", "homogéneas o heterogéneas", COL.naranja],
      ["Cambio físico", "misma sustancia", COL.verde],
      ["Cambio químico", "sustancias nuevas", COL.marron],
    ], 4, 86, "Resumen de la materia y sus cambios"),
  },
  video: vgen("kxNL9ZoQqCY", "propiedades de la materia para niños"),
  ejemplos: [
    { enunciado: "Un trozo de metal tiene una masa de 54 g y un volumen de 20 cm³. ¿Cuál es su densidad? ¿Flotará en agua?",
      pasos: ["densidad = masa ÷ volumen = 54 ÷ 20 = 2,7 g/cm³.", "La densidad del agua es 1 g/cm³.", "2,7 es mayor que 1."],
      resultado: "2,7 g/cm³ (es aluminio): se hunde." },
    { enunciado: "Tienes una mezcla de arena, sal y limaduras de hierro. ¿Cómo separas las tres?",
      pasos: ["Con un imán retiras las limaduras de hierro.", "Echas agua: la sal se disuelve y la arena no. Filtras y la arena queda en el papel.", "Calientas el agua con sal: se evapora el agua y queda la sal."],
      resultado: "Imán, luego filtración y por último evaporación." },
    { enunciado: "¿Físico o químico? Hacer cubitos de hielo, freír un huevo, cortar madera, que se oxide una bici.",
      pasos: ["Hielo: cambio de estado, sigue siendo agua → físico.", "Freír un huevo: cambia de color y textura y no vuelve atrás → químico.", "Cortar madera: sigue siendo madera → físico.", "Oxidarse: aparece óxido, una sustancia nueva → químico."],
      resultado: "Físicos: cubitos y cortar madera. Químicos: freír el huevo y la oxidación." },
  ],
  errores: [
    "Confundir masa y volumen: un globo grande puede tener muy poca masa.",
    "Pensar que los gases no son materia: el aire tiene masa y ocupa espacio.",
    "Llamar «evaporación» a cualquier paso a gas: si hay burbujas en todo el líquido, es ebullición.",
    "Creer que disolver azúcar es un cambio químico: es físico, el azúcar sigue ahí.",
    "Pensar que un cuerpo flota por ser ligero: depende de su densidad comparada con la del líquido.",
  ],
  ejercicios: [
    { q: "¿Qué es la materia? Pon dos ejemplos de materia y uno de algo que no lo sea.", sol: "Todo lo que tiene masa y volumen. Ejemplos: agua y aire. No es materia: la luz." },
    { q: "Calcula el volumen de una caja de 10 cm × 5 cm × 4 cm.", sol: "10 × 5 × 4 = 200 cm³." },
    { q: "En una probeta hay 40 mL de agua. Al meter una piedra sube a 52 mL. ¿Qué volumen tiene la piedra?", sol: "52 − 40 = 12 cm³." },
    { q: "Calcula la densidad de un objeto de 30 g y 60 cm³. ¿Flota en agua?", sol: "30 ÷ 60 = 0,5 g/cm³; flota, porque es menor que 1." },
    { q: "Escribe las características de los sólidos, los líquidos y los gases.", sol: "Sólidos: forma y volumen fijos. Líquidos: volumen fijo, forma del recipiente. Gases: ni forma ni volumen fijos." },
    { q: "Nombra el cambio de estado: la ropa se seca, se forma escarcha, se funde la mantequilla, se empaña un cristal.", sol: "Evaporación, sublimación inversa, fusión y condensación." },
    { q: "Clasifica: aire, ensalada, agua con sal, granito, oro.", sol: "Sustancia pura: oro. Homogéneas: aire y agua con sal. Heterogéneas: ensalada y granito." },
    { q: "¿Qué método usarías para separar agua y aceite? ¿Y para obtener sal del agua de mar?", sol: "Decantación; evaporación." },
    { q: "Escribe tres pistas de que ha ocurrido un cambio químico.", sol: "Cambio de color, burbujas de gas, olor nuevo (o luz y calor, o un sólido nuevo)." },
    { q: "¿Qué tres cosas necesita el fuego? ¿Por qué se apaga una vela al taparla con un vaso?", sol: "Combustible, oxígeno y calor. Porque se acaba el oxígeno del vaso." },
  ],
  quiz: [
    { q: "Materia es todo lo que tiene…", o: ["masa y volumen", "color", "olor"], a: 0, e: "Masa y volumen." },
    { q: "La masa se mide con…", o: ["una balanza", "una probeta", "un termómetro"], a: 0, e: "Una balanza." },
    { q: "1 litro equivale a…", o: ["1 cm³", "1 dm³", "1 m³"], a: 1, e: "1 decímetro cúbico." },
    { q: "La densidad es…", o: ["volumen ÷ masa", "masa ÷ volumen", "masa × volumen"], a: 1, e: "Masa entre volumen." },
    { q: "Un objeto flota en agua si su densidad es…", o: ["menor que 1", "mayor que 1", "igual a 10"], a: 0, e: "Menor que la del agua." },
    { q: "Tiene volumen fijo pero adopta la forma del recipiente…", o: ["el líquido", "el sólido", "el gas"], a: 0, e: "El líquido." },
    { q: "El paso de gas a líquido es la…", o: ["evaporación", "condensación", "fusión"], a: 1, e: "Condensación." },
    { q: "El agua con sal es una mezcla…", o: ["homogénea", "heterogénea", "pura"], a: 0, e: "Homogénea: una disolución." },
    { q: "Para separar limaduras de hierro y arena uso…", o: ["un imán", "un filtro", "un colador"], a: 0, e: "Un imán." },
    { q: "Quemar papel es un cambio…", o: ["físico", "químico", "de estado"], a: 1, e: "Químico: aparecen ceniza y humo." },
  ],
  examen: [
    { q: "El hielo se funde a…", o: ["100 °C", "37 °C", "0 °C"], a: 2, e: "0 °C." },
    { q: "La herrumbre del hierro es…", o: ["una oxidación", "una mezcla", "una fusión"], a: 0, e: "Una oxidación." },
    { q: "En una disolución, la sustancia que se disuelve es el…", o: ["disolvente", "filtro", "soluto"], a: 2, e: "Soluto." },
    { q: "La masa del pan sube por la…", o: ["condensación", "fusión", "fermentación"], a: 2, e: "Fermentación de las levaduras." },
  ],
  feynman: ["Qué es la densidad y por qué flotan los barcos", "Cuáles son los cambios de estado, con ejemplos", "Cómo distinguir un cambio físico de uno químico"],
  mapa: mapa("MATERIA", "var(--pri)", [
    ["Propiedades", "masa · volumen · densidad", COL.azul],
    ["Estados", "sólido · líquido · gas", COL.agua],
    ["Mezclas", "homogéneas · heterogéneas", COL.naranja],
    ["Cambios", "físicos · químicos", COL.rojo],
  ], 250),
  tarjetas: [
    ["Materia", "Todo lo que tiene masa y ocupa un volumen."],
    ["Densidad", "Masa ÷ volumen. El agua: 1 g/cm³."],
    ["Fusión", "Paso de sólido a líquido."],
    ["Condensación", "Paso de gas a líquido."],
    ["Disolución", "Mezcla homogénea: soluto + disolvente."],
    ["Decantación", "Separar por reposo según la densidad."],
    ["Cambio químico", "Se forman sustancias nuevas."],
    ["Combustión", "Combustible + oxígeno → luz, calor y gases."],
  ],
  familias: ["Probad en un barreño qué objetos flotan y cuáles se hunden, y adivinad antes.", "Haced una columna de densidades con miel, agua con colorante y aceite en un vaso.", "Dejad un clavo en agua y otro en aceite unos días y comparad la oxidación.", "Preparad un bizcocho y comentad qué cambios son físicos y cuáles químicos."],
  profesores: PROF("Ciencias de la Naturaleza: la materia y sus propiedades (masa, volumen, densidad); estados y cambios de estado; sustancias puras y mezclas, métodos de separación; cambios físicos y químicos (combustión, oxidación, fermentación)", ["Medida de volúmenes de sólidos irregulares con probeta.", "Taller de separación de mezclas por estaciones.", "Experimento del huevo que flota en agua con mucha sal."]),
  fuentes: [RD, wiki("Materia", "Materia"), wiki("Densidad", "Densidad"), { t: "Real Sociedad Española de Química", url: "https://rseq.org/" }],
  revisado: REV,
};
