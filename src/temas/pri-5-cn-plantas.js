// Ciencias de la Naturaleza 5º de Primaria: las plantas, nutrición y reproducción. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, sol, flor } = require("./_pri5b");

// Planta con raíz, tallo y hojas.
const planta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-70" stroke="#15803d" stroke-width="4"/><path d="M0 -30 q-26 -4 -30 -22 q22 -2 30 22z M0 -48 q26 -4 30 -22 q-22 -2 -30 22z M0 -66 q-18 -6 -18 -20 q16 2 18 20z" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/><path d="M0 0 q-10 14 -20 18 M0 0 q2 16 -4 26 M0 0 q12 12 22 16 M-12 10 l-6 2 M10 8 l6 4" stroke="#a16207" stroke-width="2" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Las plantas: nutrición y reproducción",
  minutos: 50,
  objetivos: ["Explicar las funciones de la raíz, el tallo y las hojas", "Describir la nutrición de las plantas y la fotosíntesis", "Saber que las plantas también respiran", "Conocer las partes de la flor y la reproducción sexual", "Explicar la polinización, la fecundación, el fruto y la semilla", "Diferenciar la reproducción sexual de la asexual"],
  claves: ["raíz", "tallo", "hoja", "savia bruta", "savia elaborada", "fotosíntesis", "clorofila", "estomas", "respiración", "flor", "estambre", "pistilo", "polinización", "fecundación", "fruto", "semilla", "germinación", "reproducción asexual"],
  pregunta: {
    texto: "Un árbol pequeño plantado en una maceta crece hasta pesar muchos kilos, pero la tierra de la maceta casi no disminuye. ¿De dónde saca la planta todo ese material?",
    respuesta: "Sobre todo del <b>aire</b>. Las plantas toman <b>dióxido de carbono</b> del aire por las hojas y <b>agua</b> por las raíces, y con la energía de la <b>luz del sol</b> fabrican su propio alimento. Este proceso se llama <mark>fotosíntesis</mark>. De la tierra solo toman agua y una pequeña cantidad de sales minerales.",
  },
  bloques: [
    {
      html: `<h3>Las partes de la planta y su función</h3><p>Casi todas las plantas tienen tres órganos principales, y cada uno tiene un trabajo:</p><p>• La <mark>raíz</mark> crece bajo tierra. <b>Sujeta</b> la planta al suelo y <b>absorbe</b> el agua y las sales minerales gracias a unos pelillos finísimos, los <b>pelos absorbentes</b>. Algunas raíces, como la zanahoria o la remolacha, además <b>almacenan</b> alimento.</p><p>• El <mark>tallo</mark> <b>sostiene</b> las hojas, las flores y los frutos, y los eleva hacia la luz. Por dentro tiene unos tubos, los <b>vasos conductores</b>, que transportan las sustancias de unas partes a otras. Puede ser <b>herbáceo</b> (verde y flexible, como el de la amapola) o <b>leñoso</b> (duro, de madera, como el tronco de un árbol).</p><p>• Las <mark>hojas</mark> son las fábricas de alimento de la planta. Suelen ser planas y verdes para captar mucha luz. Tienen una parte ancha, el <b>limbo</b>, recorrida por los <b>nervios</b>, y un rabito, el <b>pecíolo</b>, que la une al tallo. En la parte de abajo tienen unos agujeritos microscópicos, los <b>estomas</b>, por los que entran y salen gases.</p>`,
      svg: svg("Planta con raíz que absorbe, tallo que sostiene y transporta y hojas que fabrican alimento", `${tit("Raíz, tallo y hojas")}${planta(70, 140, 1.1)}<path d="M20 140 H120" stroke="#a16207" stroke-width="2"/>${filas([["hojas", "fabrican alimento", COL.verde], ["tallo", "sostiene y transporta", COL.marron], ["raíz", "sujeta y absorbe", COL.naranja]], 58, 40, { x: 132, wa: 60, wb: 110, dos: true })}`),
    },
    {
      html: `<h3>La nutrición de las plantas</h3><p>Las plantas son seres <b>autótrofos</b>: fabrican su propio alimento. Su nutrición tiene varios pasos:</p><p>1. <b>Absorción</b>: la raíz absorbe del suelo el agua con sales minerales disueltas. Esta mezcla se llama <mark>savia bruta</mark>.</p><p>2. <b>Transporte</b>: la savia bruta sube por los vasos del tallo hasta las hojas. ¿Cómo sube el agua hasta la copa de un árbol de 30 metros? Porque las hojas pierden agua por los estomas (la <b>transpiración</b>) y eso «tira» del agua hacia arriba, como cuando sorbes por una pajita.</p><p>3. <b>Fotosíntesis</b>: en las hojas, la savia bruta y el dióxido de carbono del aire se transforman en alimento gracias a la luz. El alimento disuelto en agua forma la <mark>savia elaborada</mark>.</p><p>4. <b>Reparto</b>: la savia elaborada viaja por otros vasos a todas las partes de la planta, también a la raíz y a los frutos. Lo que sobra se guarda como reserva, por ejemplo en forma de almidón en la patata o de azúcar en la fruta.</p>`,
      svg: svg("La savia bruta sube por el tallo y la savia elaborada baja a toda la planta", `${tit("Savia bruta y elaborada")}<path d="M110 160 V56" stroke="#15803d" stroke-width="10"/><path d="M110 64 q-34 -6 -44 -24 q32 -6 44 24z M110 64 q34 -6 44 -24 q-32 -6 -44 24z" fill="#22c55e"/><path d="M110 160 q-16 10 -30 12 M110 160 q16 10 30 12" stroke="#a16207" stroke-width="3" fill="none"/>${fl(96, 150, 96, 74, COL.azul, 3)}${fl(124, 74, 124, 150, COL.naranja, 3)}${et(48, 112, "savia bruta", 80, { size: 11, color: COL.azul })}${tx(48, 128, "agua + sales", 80)}${et(198, 112, "savia elaborada", 100, { size: 11, color: COL.naranja })}${tx(198, 128, "alimento", 80)}`),
    },
    {
      html: `<h3>La fotosíntesis</h3><p>La <mark>fotosíntesis</mark> es el proceso por el que las plantas fabrican su alimento usando la energía de la luz. Ocurre en las hojas, dentro de los <b>cloroplastos</b> de sus células, que contienen <b>clorofila</b>, el pigmento verde que captura la luz.</p><p>Lo que la planta <b>necesita</b>:<br>• <b>agua</b> y sales minerales (la savia bruta), que llegan desde la raíz;<br>• <b>dióxido de carbono</b>, que entra del aire por los estomas;<br>• <b>luz</b> del sol.</p><p>Lo que la planta <b>produce</b>:<br>• <b>alimento</b> (azúcares), que forma la savia elaborada;<br>• <b>oxígeno</b>, que sale al aire por los estomas.</p><p>Gracias a la fotosíntesis existe el oxígeno que respiramos los animales y las personas, y también el alimento de casi todos los seres vivos: cuando comes una lechuga, o un filete de una vaca que comió hierba, estás aprovechando energía del sol que una planta capturó.</p><p>Por eso es tan importante cuidar los bosques, las praderas y las algas de los océanos.</p>`,
      svg: svg("Fotosíntesis: entran agua, dióxido de carbono y luz; salen alimento y oxígeno", `${tit("La fotosíntesis")}${sol(36, 56, 12)}<path d="M130 120 q-60 -10 -64 -50 q60 -6 64 50z" fill="#22c55e" stroke="#15803d" stroke-width="2"/><path d="M130 120 L80 74" stroke="#15803d" stroke-width="2"/>${fl(54, 66, 84, 82, COL.sol, 2.5)}${et(200, 50, "entran", 80, { size: 11, color: COL.azul })}${tx(200, 66, "agua · CO₂ · luz", 110)}${et(200, 106, "salen", 80, { size: 11, color: COL.verde })}${tx(200, 122, "alimento · oxígeno", 110)}${fl(148, 92, 176, 92, COL.verde, 2.5)}${tx(130, 160, "en los cloroplastos, gracias a la clorofila", 236, { weight: 700, color: COL.verde })}`),
      video: vid("mtGgo68VM54"),
    },
    {
      html: `<h3>Las plantas también respiran</h3><p>Mucha gente cree que las plantas solo hacen la fotosíntesis, pero también <mark>respiran</mark>, igual que los animales. Todas sus células necesitan energía para vivir y la obtienen «quemando» el alimento con ayuda del oxígeno.</p><p>En la <b>respiración</b> la planta:<br>• <b>toma oxígeno</b> del aire;<br>• <b>expulsa dióxido de carbono</b>.</p><p>Las diferencias con la fotosíntesis son importantes:</p>${tabla(["", "Fotosíntesis", "Respiración"], [["¿Cuándo?", "solo con luz (de día)", "siempre, de día y de noche"], ["¿Dónde?", "en las partes verdes", "en todas las células"], ["Toma", "dióxido de carbono", "oxígeno"], ["Expulsa", "oxígeno", "dióxido de carbono"], ["Sirve para", "fabricar alimento", "obtener energía"]])}<p>Durante el día, la fotosíntesis es mucho más intensa que la respiración, así que en conjunto las plantas producen <b>mucho más oxígeno del que consumen</b>. Por la noche solo respiran, pero gastan muy poco: no hay ningún peligro en dormir con una planta en la habitación.</p>`,
      svg: svg("De día la planta hace fotosíntesis y respira; de noche solo respira", `${tit("Día y noche")}${sol(50, 58, 12)}${cj2(10, 84, 116, 60, "De día", "fotosíntesis + respiración", COL.sol)}<path d="M206 46 a14 14 0 1 0 12 22 a11 11 0 1 1 -12 -22z" fill="var(--sun)"/>${cj2(134, 84, 116, 60, "De noche", "solo respiración", COL.morado)}${tx(130, 166, "En total, producen más oxígeno del que gastan", 236, { weight: 700, color: COL.verde })}`),
    },
    {
      html: `<h3>La flor y sus partes</h3><p>Las plantas con flores se reproducen gracias a la <mark>flor</mark>, que es su órgano reproductor. Una flor completa tiene estas partes, de fuera hacia dentro:</p><p>• El <b>cáliz</b>: formado por los <b>sépalos</b>, hojitas verdes que protegen la flor cuando todavía es un capullo.<br>• La <b>corola</b>: formada por los <b>pétalos</b>, normalmente de colores vivos y con buen olor, para atraer a los insectos.<br>• Los <mark>estambres</mark>: son la parte <b>masculina</b>. Cada uno tiene un filamento y, en la punta, la <b>antera</b>, que produce el <b>polen</b>, un polvillo normalmente amarillo.<br>• El <mark>pistilo</mark>: es la parte <b>femenina</b>, con forma de botella, en el centro. Tiene tres partes: el <b>estigma</b> (arriba, pegajoso, para atrapar el polen), el <b>estilo</b> (el cuello) y el <b>ovario</b> (abajo, abultado), que contiene los <b>óvulos</b>.</p><p>La mayoría de las flores tienen estambres y pistilo a la vez. Algunas plantas, en cambio, tienen flores solo masculinas o solo femeninas.</p>`,
      svg: svg("Flor cortada con sépalos, pétalos, estambres con antera y pistilo con estigma, estilo y ovario", `${tit("Partes de la flor")}<path d="M90 150 V170" stroke="#15803d" stroke-width="4"/><path d="M90 150 q-34 -4 -40 -26 M90 150 q34 -4 40 -26" stroke="#15803d" stroke-width="5" fill="none"/><path d="M90 140 q-52 -20 -46 -80 q26 26 46 80z M90 140 q52 -20 46 -80 q-26 26 -46 80z" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/><ellipse cx="90" cy="128" rx="10" ry="12" fill="#86efac" stroke="#15803d" stroke-width="2"/><path d="M90 116 V72" stroke="#15803d" stroke-width="4"/><ellipse cx="90" cy="70" rx="7" ry="4" fill="#16a34a"/><path d="M80 130 L66 84 M100 130 L114 84" stroke="#c98a00" stroke-width="2"/><ellipse cx="66" cy="82" rx="5" ry="3" fill="var(--sun)"/><ellipse cx="114" cy="82" rx="5" ry="3" fill="var(--sun)"/>${[["pétalo", 48, "#be185d"], ["antera (polen)", 76, COL.sol], ["estigma", 100, COL.verde], ["ovario", 128, COL.verde], ["sépalo", 152, COL.verde]].map(([s, y, c]) => `<circle cx="160" cy="${y - 4}" r="4" fill="${c}"/>${et(212, y, s, 90, { size: 11, color: c })}`).join("")}`),
      video: vid("gYjTtWBCUnw"),
    },
    {
      html: `<h3>Polinización y fecundación</h3><p>Para que se forme una semilla, el polen tiene que llegar desde los estambres hasta el pistilo. Este viaje se llama <mark>polinización</mark>. Puede ocurrir de varias formas:</p><p>• Por los <b>insectos</b> y otros animales: abejas, mariposas o colibríes visitan las flores atraídos por los colores, el olor y el <b>néctar</b>, un líquido dulce. Al hacerlo, el polen se les pega al cuerpo y lo llevan a otra flor. Estas flores suelen ser grandes y vistosas.</p><p>• Por el <b>viento</b>: el polen, muy ligero y abundante, vuela por el aire. Lo hacen el trigo, el maíz, el pino o el olivo. Sus flores suelen ser pequeñas y poco llamativas. Este polen es el que causa muchas alergias en primavera.</p><p>• Por el <b>agua</b>, en algunas plantas acuáticas.</p><p>Cuando un grano de polen llega al estigma, crece un tubito que baja por el estilo hasta el ovario. Allí se une con un óvulo: es la <mark>fecundación</mark>. Cada óvulo fecundado se convertirá en una semilla.</p><p>Sin polinizadores muchas plantas no podrían reproducirse. Por eso es tan importante proteger a las abejas.</p>`,
      svg: svg("Una abeja lleva polen de una flor al estigma de otra flor: polinización", `${tit("La polinización")}${flor(50, 150, "var(--red)")}${flor(210, 150, "#8b5cf6")}<path d="M60 116 q70 -70 140 0" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4" fill="none"/><g transform="translate(130 70)"><ellipse rx="14" ry="9" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-4 -8 V8 M4 -8 V8" stroke="var(--ink)" stroke-width="3"/><ellipse cx="-4" cy="-12" rx="7" ry="5" fill="#bae6fd" fill-opacity=".8"/><ellipse cx="6" cy="-12" rx="7" ry="5" fill="#bae6fd" fill-opacity=".8"/></g>${tx(130, 132, "insectos · viento · agua", 140, { weight: 700, color: COL.sol })}${tx(130, 172, "polen → estigma → fecundación", 236)}`),
    },
    {
      html: `<h3>Del fruto a la nueva planta</h3><p>Después de la fecundación, la flor cambia: los pétalos y los estambres se secan y caen. El <b>ovario</b> crece y se transforma en el <mark>fruto</mark>, y los óvulos fecundados se transforman en <mark>semillas</mark>.</p><p>El fruto protege las semillas y ayuda a <b>dispersarlas</b>, es decir, a llevarlas lejos de la planta madre para que tengan espacio y luz. Hay frutos <b>carnosos</b> (melocotón, tomate, uva), que los animales comen y luego expulsan las semillas en sus excrementos, y frutos <b>secos</b> (almendra, nuez, vaina de la judía). Otras semillas tienen «alas» o «paracaídas» para viajar con el viento, como las del diente de león, o ganchitos para pegarse al pelo de los animales.</p><p>La semilla tiene en su interior un <b>embrión</b> (una plantita diminuta) y una <b>reserva de alimento</b>, protegidos por una cubierta. Cuando cae en un lugar con humedad y temperatura adecuadas, la semilla <mark>germina</mark>: se hincha, rompe la cubierta, sale primero la <b>raicilla</b> hacia abajo y después el <b>tallito</b> con las primeras hojas hacia arriba. Así empieza una nueva planta.</p>`,
      svg: svg("Ciclo: flor, polinización, fruto con semillas y germinación de una nueva planta", `${tit("El ciclo de la planta")}${ciclo([["flor", COL.rojo], ["polinización", COL.sol], ["fruto y semilla", COL.naranja], ["germinación", COL.verde]], 130, 102, 54, 96)}`),
      video: vid("89NwOC1KFCA"),
    },
    {
      html: `<h3>Plantas sin flores y reproducción asexual</h3><p>No todas las plantas tienen flores. Los <b>musgos</b> y los <b>helechos</b> se reproducen mediante <mark>esporas</mark>, unas células diminutas que se forman en unas bolsitas. En los helechos se ven como puntitos marrones bajo las hojas. Cuando caen en un lugar húmedo, dan lugar a una nueva planta.</p><p>Además, muchas plantas pueden reproducirse sin flores ni semillas, a partir de un trozo de la planta madre. Es la <mark>reproducción asexual</mark>. Las nuevas plantas son <b>idénticas</b> a la madre. Algunas formas son:</p><p>• <b>Esquejes</b>: un trozo de tallo puesto en agua o en tierra echa raíces, como el potus o el geranio.<br>• <b>Estolones</b>: tallos que se arrastran por el suelo y forman nuevas plantas, como la fresa.<br>• <b>Tubérculos</b>: tallos subterráneos con reservas y «ojos» de los que brotan nuevas plantas, como la patata.<br>• <b>Bulbos</b>: como la cebolla, el ajo o el tulipán.<br>• <b>Rizomas</b>: tallos subterráneos horizontales, como el del lirio o el jengibre.</p><p>Los agricultores y jardineros usan mucho la reproducción asexual porque es rápida y consiguen plantas iguales a la original.</p>`,
      svg: svg("Formas de reproducción asexual: esqueje, estolón, tubérculo y bulbo", `${tit("Reproducción asexual")}${fichas([["Esqueje", "trozo de tallo: geranio", COL.verde], ["Estolón", "tallo rastrero: fresa", COL.rojo], ["Tubérculo", "con ojos: patata", COL.marron], ["Bulbo", "cebolla, ajo, tulipán", COL.morado]])}`),
      video: vid("ZzhJAUq0fps"),
    },
    {
      html: `<h3>La función de relación en las plantas</h3><p>Las plantas no tienen sistema nervioso ni músculos, pero también <b>notan</b> lo que pasa a su alrededor y <b>responden</b>, aunque de forma lenta. Algunos ejemplos:</p><p>• Los tallos crecen <b>hacia la luz</b>. Si pones una planta junto a una ventana, verás que con los días se inclina hacia el cristal.</p><p>• Las raíces crecen <b>hacia abajo</b>, siguiendo la gravedad, y hacia donde hay <b>agua</b>.</p><p>• Algunas flores se <b>abren de día y se cierran de noche</b>, y los girasoles jóvenes siguen al sol durante el día.</p><p>• Las plantas trepadoras, como la hiedra o la parra, se <b>enroscan</b> al tocar un soporte.</p><p>• La <b>mimosa púdica</b> cierra sus hojas en un instante si la tocas.</p><p>• Muchos árboles pierden las hojas en otoño para ahorrar agua durante el invierno: son los árboles de <b>hoja caduca</b>. Los de <b>hoja perenne</b>, como el pino o la encina, las mantienen todo el año.</p><p>Puedes comprobarlo con un experimento sencillo: pon una legumbre a germinar en una caja con un solo agujero por el que entre la luz y observa cómo el tallo busca la salida.</p>`,
      svg: svg("Una planta junto a la ventana se inclina hacia la luz; las raíces crecen hacia abajo", `${tit("Las plantas responden")}<rect x="182" y="40" width="60" height="70" fill="#bae6fd" stroke="var(--ink)" stroke-width="2"/><path d="M212 40 V110 M182 75 H242" stroke="var(--ink)" stroke-width="2"/>${sol(212, 75, 9)}<rect x="70" y="128" width="50" height="34" rx="4" fill="#c2410c"/><path d="M95 128 q0 -40 40 -66" stroke="#15803d" stroke-width="4" fill="none"/><path d="M135 62 q16 -14 30 -8 q-10 16 -30 8z M114 96 q18 -14 32 -6 q-12 16 -32 6z" fill="#22c55e"/>${fl(170, 70, 146, 70, COL.sol, 2)}${tx(80, 50, "el tallo busca la luz", 120, { weight: 700, color: COL.verde })}${tx(184, 150, "la raíz va hacia abajo", 108)}`),
    },
  ],
  figura: {
    titulo: "Nutrición y reproducción de las plantas en ocho ideas",
    svg: rejilla([
      ["Raíz", "sujeta y absorbe agua", COL.naranja],
      ["Tallo", "sostiene y transporta", COL.marron],
      ["Hojas", "fábricas de alimento", COL.verde],
      ["Fotosíntesis", "luz + agua + CO₂ → alimento", COL.sol],
      ["Respiración", "día y noche, todas las células", COL.azul],
      ["Flor", "estambres y pistilo", COL.rojo],
      ["Polinización", "insectos y viento", COL.morado],
      ["Asexual", "esquejes, bulbos, tubérculos", COL.agua],
    ], 4, 86, "Resumen: partes de la planta, nutrición, flor y reproducción"),
  },
  video: vgen("89NwOC1KFCA", "reproducción de las plantas primaria"),
  ejemplos: [
    { enunciado: "Tapamos con papel de aluminio varias hojas de un geranio durante una semana. ¿Qué crees que pasará con esas hojas?",
      pasos: ["La fotosíntesis necesita luz.", "Sin luz, esas hojas no pueden fabricar alimento.", "Su clorofila se va perdiendo y se vuelven amarillentas."],
      resultado: "Las hojas tapadas amarillean y se debilitan porque no pueden hacer la fotosíntesis." },
    { enunciado: "Ordena: fecundación, germinación, polinización, formación del fruto.",
      pasos: ["Primero el polen tiene que llegar al pistilo: polinización.", "Después el polen se une al óvulo: fecundación.", "El ovario se convierte en fruto con semillas.", "La semilla, al caer en tierra húmeda, germina."],
      resultado: "polinización → fecundación → formación del fruto → germinación." },
    { enunciado: "Di qué tipo de reproducción es: a) sembrar pipas de girasol; b) plantar un trozo de patata con ojos; c) poner un tallo de potus en agua.",
      pasos: ["Las semillas vienen de flores fecundadas: reproducción sexual.", "Un tubérculo o un esqueje son trozos de la planta madre: reproducción asexual."],
      resultado: "a) Sexual. b) Asexual (tubérculo). c) Asexual (esqueje)." },
  ],
  errores: [
    "Creer que las plantas se alimentan de la tierra: fabrican su alimento con luz, agua y dióxido de carbono.",
    "Pensar que las plantas no respiran: respiran siempre, de día y de noche.",
    "Confundir savia bruta (agua y sales, sube) con savia elaborada (alimento, se reparte).",
    "Confundir polinización y fecundación: la primera es el viaje del polen; la segunda, la unión con el óvulo.",
    "Pensar que las plantas obtenidas por esqueje son distintas a la madre: son idénticas.",
  ],
  ejercicios: [
    { q: "Escribe la función de la raíz, el tallo y las hojas.", sol: "Raíz: sujeta la planta y absorbe agua y sales. Tallo: sostiene y transporta la savia. Hojas: fabrican el alimento mediante la fotosíntesis." },
    { q: "¿Qué es la savia bruta? ¿Y la elaborada?", sol: "La bruta es agua con sales minerales que sube desde la raíz. La elaborada es agua con el alimento fabricado en las hojas, que se reparte por toda la planta." },
    { q: "¿Qué necesita una planta para hacer la fotosíntesis y qué produce?", sol: "Necesita agua, sales, dióxido de carbono y luz. Produce alimento (azúcares) y oxígeno." },
    { q: "¿Para qué sirven los estomas?", sol: "Para que entren y salgan gases (dióxido de carbono y oxígeno) y vapor de agua." },
    { q: "Escribe dos diferencias entre fotosíntesis y respiración.", sol: "La fotosíntesis solo ocurre con luz y en las partes verdes; la respiración, siempre y en todas las células. La fotosíntesis toma CO₂ y expulsa oxígeno; la respiración, al revés." },
    { q: "Nombra la parte masculina y la femenina de la flor y sus partes.", sol: "Masculina: estambres (filamento y antera con polen). Femenina: pistilo (estigma, estilo y ovario con óvulos)." },
    { q: "¿Por qué las flores polinizadas por el viento suelen ser pequeñas y sin olor?", sol: "Porque no necesitan atraer a los insectos; producen mucho polen ligero que lleva el viento." },
    { q: "¿En qué se transforman el ovario y los óvulos tras la fecundación?", sol: "El ovario se transforma en el fruto y los óvulos fecundados, en semillas." },
    { q: "Escribe tres formas de dispersar las semillas.", sol: "Los animales que comen los frutos, el viento (semillas con alas o paracaídas) y los ganchitos que se pegan al pelo de los animales." },
    { q: "Pon un ejemplo de esqueje, estolón, tubérculo y bulbo.", sol: "Esqueje: geranio o potus. Estolón: fresa. Tubérculo: patata. Bulbo: cebolla, ajo o tulipán." },
  ],
  quiz: [
    { q: "La raíz absorbe el agua gracias a…", o: ["los estomas", "los pelos absorbentes", "los pétalos"], a: 1, e: "Los pelos absorbentes." },
    { q: "La fotosíntesis se produce en…", o: ["los cloroplastos", "la raíz", "las semillas"], a: 0, e: "En los cloroplastos de las hojas." },
    { q: "En la fotosíntesis la planta expulsa…", o: ["dióxido de carbono", "savia", "oxígeno"], a: 2, e: "Oxígeno." },
    { q: "Las plantas respiran…", o: ["solo de noche", "de día y de noche", "nunca"], a: 1, e: "Siempre." },
    { q: "La parte femenina de la flor es…", o: ["el pistilo", "el estambre", "el sépalo"], a: 0, e: "El pistilo." },
    { q: "El polen se produce en…", o: ["el ovario", "el estigma", "la antera"], a: 2, e: "En la antera de los estambres." },
    { q: "El paso del polen al pistilo se llama…", o: ["germinación", "polinización", "fecundación"], a: 1, e: "Polinización." },
    { q: "El ovario se transforma en…", o: ["el fruto", "la raíz", "la hoja"], a: 0, e: "En el fruto." },
    { q: "Los helechos se reproducen por…", o: ["semillas", "frutos", "esporas"], a: 2, e: "Por esporas." },
    { q: "La fresa se reproduce de forma asexual por…", o: ["bulbos", "estolones", "esporas"], a: 1, e: "Por estolones." },
  ],
  examen: [
    { q: "La savia que sube de la raíz a las hojas es…", o: ["bruta", "elaborada", "néctar"], a: 0, e: "Savia bruta." },
    { q: "El líquido dulce que atrae a los insectos es…", o: ["el polen", "la savia", "el néctar"], a: 2, e: "El néctar." },
    { q: "Cuando la semilla empieza a crecer decimos que…", o: ["germina", "se poliniza", "transpira"], a: 0, e: "Germina." },
    { q: "Los árboles que pierden las hojas en otoño son de hoja…", o: ["perenne", "caduca", "verde"], a: 1, e: "Caduca." },
  ],
  feynman: ["Cómo se alimenta una planta, desde la raíz hasta la savia elaborada", "Qué diferencia hay entre fotosíntesis y respiración", "Cómo se forma una semilla, desde la flor hasta la germinación"],
  mapa: mapa("PLANTAS", "var(--pri)", [
    ["Órganos", "raíz · tallo · hojas", COL.marron],
    ["Nutrición", "fotosíntesis · respiración", COL.verde],
    ["Sexual", "flor · polen · fruto · semilla", COL.rojo],
    ["Asexual", "esqueje · estolón · bulbo", COL.morado],
  ], 250),
  tarjetas: [
    ["Savia bruta", "Agua con sales que sube desde la raíz."],
    ["Savia elaborada", "Agua con alimento que se reparte desde las hojas."],
    ["Fotosíntesis", "Fabricación de alimento con luz, agua y dióxido de carbono."],
    ["Estomas", "Agujeritos de las hojas por los que pasan los gases."],
    ["Estambre", "Parte masculina de la flor que produce el polen."],
    ["Pistilo", "Parte femenina de la flor con el ovario."],
    ["Polinización", "Viaje del polen desde los estambres hasta el pistilo."],
    ["Germinación", "Momento en que la semilla empieza a crecer."],
  ],
  familias: ["Germinad lentejas o judías en un vaso con algodón húmedo y dibujad cada día cómo crecen.", "Poned un tallo de apio en agua con colorante y observad cómo sube por los vasos.", "Abrid una flor grande (lirio, tulipán) y buscad estambres, pistilo, sépalos y pétalos.", "Haced un esqueje de potus o de geranio en un vaso con agua."],
  profesores: PROF("Ciencias de la Naturaleza: estructura y funciones de las plantas; nutrición, fotosíntesis y respiración; reproducción sexual (flor, polinización, fecundación, fruto, semilla) y asexual; respuestas de las plantas", ["Germinación de semillas con variables (luz, agua, temperatura) y registro de resultados.", "Disección de una flor y de una legumbre germinada.", "Experimento del apio con colorante para comprobar el transporte de la savia."]),
  fuentes: [RD, wiki("Fotosíntesis", "Fotosíntesis"), wiki("Flor", "Flor"), wiki("Polinización", "Polinización")],
  revisado: REV,
};
