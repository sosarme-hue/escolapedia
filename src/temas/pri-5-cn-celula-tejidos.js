// Ciencias de la Naturaleza 5º de Primaria: la célula, los tejidos y los órganos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, cj, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri5b");

// Célula animal sencilla (membrana, citoplasma y núcleo).
const celula = (x, y, r = 30, c = "var(--red)", f = "#fecaca") => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${(r * 0.8).toFixed(1)}" fill="${f}" fill-opacity=".7" stroke="${c}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${(r * 0.3).toFixed(1)}" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.5"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La célula, los tejidos y los órganos",
  minutos: 45,
  objetivos: ["Explicar qué es una célula y por qué es la unidad de los seres vivos", "Nombrar las partes de la célula y su función", "Comparar la célula animal y la vegetal", "Distinguir célula, tejido, órgano, aparato y organismo con ejemplos del cuerpo humano"],
  claves: ["célula", "membrana", "citoplasma", "núcleo", "orgánulo", "célula animal", "célula vegetal", "tejido", "órgano", "aparato", "sistema", "organismo"],
  pregunta: {
    texto: "Si miras tu mano, ves piel, uñas y pequeñas arrugas. ¿Qué verías si pudieras hacerte tan pequeño como una hormiga y luego todavía mucho más pequeño?",
    respuesta: "Verías que la piel está formada por millones de pequeñas piezas pegadas unas a otras, como las baldosas de un suelo. Esas piezas son las <mark>células</mark>. Todo tu cuerpo, y el de cualquier ser vivo, está construido con células.",
  },
  bloques: [
    {
      html: `<h3>Todos los seres vivos tienen células</h3><p>Un roble, un gorrión, una seta, una lombriz y tú tenéis algo en común: estáis formados por <mark>células</mark>. La célula es la <b>parte más pequeña de un ser vivo que tiene vida propia</b>. Por eso decimos que es la <b>unidad de los seres vivos</b>.</p><p>Una célula, aunque sea diminuta, hace las tres funciones vitales: se <b>nutre</b> (toma alimento y lo usa para obtener energía), se <b>relaciona</b> (nota lo que pasa a su alrededor y responde) y se <b>reproduce</b> (se divide en dos células nuevas).</p><p>Las células son tan pequeñas que solo se ven con un <b>microscopio</b>. Las primeras las observó en el siglo XVII un científico inglés llamado <b>Robert Hooke</b>, mirando un trozo fino de corcho. Vio muchas celditas vacías, como las de un panal de abejas, y por eso las llamó «células», que significa «celdillas».</p>`,
      svg: svg("Un trozo de corcho visto al microscopio con muchas celdillas", `${tit("Celdillas de corcho")}<circle cx="80" cy="96" r="54" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>${[...Array(5)].map((_, f) => [...Array(5)].map((_, c) => { const x = 40 + c * 17 + (f % 2) * 8, y = 60 + f * 15; return Math.hypot(x + 7 - 80, y + 6 - 96) < 46 ? `<rect x="${x}" y="${y}" width="15" height="12" fill="#f2cc8f" stroke="#a16207"/>` : ""; }).join("")).join("")}${tx(80, 168, "así las vio Hooke", 120)}${et(196, 70, "célula", 100, { size: 14, color: COL.rojo })}${tx(196, 92, "= celdilla", 100)}${tx(196, 116, "unidad de los", 110)}${tx(196, 132, "seres vivos", 110, { weight: 700, color: COL.azul })}`),
      video: vid("JFeTBoY-QSc"),
    },
    {
      html: `<h3>Las partes de la célula</h3><p>Las células pueden tener formas muy distintas, pero casi todas tienen tres partes:</p><p>• La <mark>membrana</mark> es una envoltura muy fina que rodea la célula. Deja pasar lo que la célula necesita, como el alimento, el agua y el oxígeno, y deja salir los desechos. Es como la piel de la célula.</p><p>• El <mark>citoplasma</mark> es el interior, una especie de líquido espeso en el que flotan los <b>orgánulos</b>. Los orgánulos son como pequeños órganos de la célula: cada uno hace un trabajo. Las <b>mitocondrias</b>, por ejemplo, sacan la energía de los alimentos, como pequeñas centrales eléctricas.</p><p>• El <mark>núcleo</mark> es el centro de control. Contiene el <b>material genético</b>, que guarda las instrucciones de cómo es y cómo funciona la célula. Esas instrucciones se copian cuando la célula se divide, y por eso los hijos se parecen a sus padres.</p><p>Un truco para recordarlo: la membrana es la <b>valla</b>, el citoplasma es el <b>patio</b> y el núcleo es la <b>dirección</b> del colegio.</p>`,
      svg: svg("Célula con membrana, citoplasma, mitocondria y núcleo señalados", `${tit("Las tres partes")}<ellipse cx="104" cy="100" rx="76" ry="56" fill="#fecaca" fill-opacity=".55" stroke="var(--red)" stroke-width="3"/><circle cx="104" cy="100" r="20" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/><ellipse cx="62" cy="80" rx="12" ry="6" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><ellipse cx="144" cy="126" rx="12" ry="6" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><circle cx="140" cy="76" r="4" fill="#bae6fd"/><circle cx="70" cy="126" r="4" fill="#bae6fd"/>
        <path d="M176 84 L198 62" stroke="var(--ink)"/>${et(226, 58, "membrana", 62, { size: 11, color: COL.rojo })}<path d="M124 100 L198 100" stroke="var(--ink)"/>${et(226, 104, "núcleo", 60, { size: 11, color: COL.morado })}<path d="M156 128 L198 142" stroke="var(--ink)"/>${et(226, 146, "mitocondria", 62, { size: 11, color: COL.naranja })}<path d="M80 112 L48 166" stroke="var(--ink)"/>${et(76, 172, "citoplasma", 80, { size: 11, color: COL.agua })}`),
    },
    {
      html: `<h3>Célula animal y célula vegetal</h3><p>Las células de los animales y las de las plantas tienen membrana, citoplasma y núcleo, pero hay diferencias que conviene saber:</p>${tabla(["", "Célula animal", "Célula vegetal"], [["Forma", "redondeada o variable", "como una caja, con esquinas"], ["Pared celular", "no tiene", "sí: una capa dura por fuera de la membrana"], ["Cloroplastos", "no tiene", "sí: orgánulos verdes que fabrican alimento"], ["Vacuolas", "pequeñas y muchas", "una muy grande llena de agua"], ["Alimento", "lo toma de fuera", "lo fabrica con la luz del sol"]])}<p>La <b>pared celular</b> da rigidez a las plantas: gracias a ella un tallo se mantiene derecho sin tener huesos. Los <b>cloroplastos</b> contienen <b>clorofila</b>, la sustancia verde que capta la luz para hacer la fotosíntesis. Si una planta no recibe agua, su gran vacuola se vacía y la planta se pone mustia.</p>`,
      svg: svg("Célula animal redondeada frente a célula vegetal con pared, cloroplastos y vacuola", `${tit("Animal y vegetal")}${celula(68, 90, 44)}<rect x="146" y="50" width="90" height="80" rx="4" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/><rect x="160" y="60" width="64" height="58" rx="8" fill="#bae6fd" stroke="#0369a1" stroke-width="1.2"/><circle cx="160" cy="118" r="7" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.2"/>${[[154, 58], [228, 64], [226, 120], [192, 124]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="5" ry="3" fill="#22c55e" stroke="#15803d"/>`).join("")}${et(68, 150, "animal", 100, { size: 12, color: COL.rojo })}${et(191, 150, "vegetal", 100, { size: 12, color: COL.verde })}${tx(68, 166, "sin pared", 110)}${tx(191, 166, "pared, cloroplastos, vacuola", 116)}`),
    },
    {
      html: `<h3>Uno o muchos: unicelulares y pluricelulares</h3><p>Hay seres vivos formados por <b>una sola célula</b>. Se llaman <mark>unicelulares</mark>. Esa única célula tiene que hacerlo todo: buscar alimento, moverse, defenderse y reproducirse. Casi todos son microscópicos, como las <b>bacterias</b> o las <b>amebas</b>. Aunque no los veamos, están por todas partes: en el agua, en el suelo, en el aire y dentro de nuestro cuerpo.</p><p>Otros seres vivos están formados por <b>muchísimas células</b>. Se llaman <mark>pluricelulares</mark>. Las plantas, los animales y casi todos los hongos lo son. El cuerpo de una persona adulta tiene alrededor de <b>treinta billones</b> de células: si las contaras una por segundo sin parar, tardarías casi un millón de años.</p><p>En los seres pluricelulares las células se <b>reparten el trabajo</b>, como en un equipo de fútbol en el que cada jugador ocupa su puesto. Hay células que solo transportan oxígeno, otras que solo se encogen para mover un hueso y otras que solo llevan mensajes. A esto se le llama <b>especialización</b>.</p>`,
      svg: svg("Una ameba de una sola célula frente a una persona de billones de células", `${tit("Una o muchas células")}<path d="M30 92 q10 -34 40 -26 q30 -14 42 14 q16 22 -6 36 q-18 20 -44 8 q-34 4 -32 -32z" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><circle cx="72" cy="94" r="8" fill="#c4b5fd"/>${et(70, 146, "unicelular", 110, { size: 12, color: COL.agua })}${tx(70, 162, "ameba: 1 célula", 110)}<circle cx="194" cy="58" r="12" fill="#f3c9a1"/><path d="M194 70 V110 M194 80 L176 100 M194 80 L212 100 M194 110 L182 134 M194 110 L206 134" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>${et(194, 150, "pluricelular", 110, { size: 12, color: COL.azul })}${tx(194, 166, "persona: 30 billones", 110)}`),
    },
    {
      html: `<h3>Cada célula, un trabajo</h3><p>En tu cuerpo hay más de doscientas clases de células. Su forma está relacionada con el trabajo que hacen:</p><p>• Las <b>neuronas</b> tienen muchas ramitas y una prolongación larga, como un cable. Así pueden recibir y enviar mensajes a gran distancia.</p><p>• Los <b>glóbulos rojos</b> son discos pequeños y aplastados que viajan por la sangre llevando oxígeno. Su forma les permite pasar por tubos finísimos.</p><p>• Las <b>células musculares</b> son largas como hilos y pueden acortarse, y así mueven los huesos.</p><p>• Las <b>células de la piel</b> son planas y están muy apretadas, como las tejas de un tejado, para proteger lo que hay debajo.</p><p>• Las <b>células de los huesos</b> están rodeadas de una sustancia muy dura con calcio, que da firmeza al esqueleto.</p><p>Las plantas también tienen células especializadas: las de la raíz tienen pelillos para absorber agua y las de las hojas están llenas de cloroplastos.</p>`,
      svg: svg("Cuatro fichas: neurona, glóbulo rojo, célula muscular y célula de la piel", `${tit("Formas y trabajos")}${fichas([["Neurona", "ramas y cable: mensajes", COL.morado], ["Glóbulo rojo", "disco: lleva oxígeno", COL.rojo], ["Muscular", "hilo: se encoge", COL.naranja], ["Piel", "plana: protege", COL.sol]])}`),
    },
    {
      html: `<h3>Los tejidos</h3><p>Cuando muchas células <b>parecidas</b> se juntan para hacer el <b>mismo trabajo</b>, forman un <mark>tejido</mark>. Es como un grupo de músicos que tocan el mismo instrumento en una orquesta: todos los violines juntos.</p><p>En el cuerpo humano hay cuatro grandes tipos de tejidos:</p><p>• <b>Tejido epitelial</b>: cubre y protege. Forma la piel y tapiza el interior de la boca, el estómago o los pulmones.</p><p>• <b>Tejido muscular</b>: se contrae y produce movimiento. Forma los músculos, también el del corazón.</p><p>• <b>Tejido nervioso</b>: formado por neuronas. Recibe información y envía órdenes.</p><p>• <b>Tejido conectivo</b>: une, sostiene y rellena. Hay varias clases: el <b>óseo</b> (huesos), el <b>cartilaginoso</b> (orejas y punta de la nariz), el <b>adiposo</b> (grasa, que guarda energía y da calor) y la <b>sangre</b>, que es un tejido líquido.</p><p>Las plantas también tienen tejidos: unos protegen, otros fabrican alimento y otros forman tubos que transportan la savia.</p>`,
      svg: svg("Los cuatro tejidos del cuerpo humano con su función", `${tit("Cuatro tejidos")}${filas([["epitelial", "cubre y protege", COL.sol], ["muscular", "mueve", COL.rojo], ["nervioso", "mensajes", COL.morado], ["conectivo", "une y sostiene", COL.azul]], 52, 30, { x: 24, wa: 84, wb: 120 })}`),
      video: vid("TVNnPyRpLa8"),
    },
    {
      html: `<h3>Los órganos</h3><p>Un <mark>órgano</mark> es una parte del cuerpo formada por <b>varios tejidos diferentes</b> que trabajan juntos para hacer una tarea concreta.</p><p>Fíjate en el <b>estómago</b>. Por dentro tiene tejido epitelial, que fabrica jugos para deshacer la comida. Alrededor tiene tejido muscular, que se mueve y mezcla los alimentos. Le llegan nervios (tejido nervioso), que le dicen cuándo trabajar, y vasos con sangre (tejido conectivo), que le llevan oxígeno. Todos juntos forman un órgano que digiere.</p><p>Otros órganos del cuerpo humano son el <b>corazón</b> (bombea la sangre), los <b>pulmones</b> (toman el oxígeno del aire), el <b>cerebro</b> (controla el cuerpo), los <b>riñones</b> (limpian la sangre), el <b>hígado</b> y la <b>piel</b>, que es el órgano más grande: en un adulto pesa unos cuatro kilos.</p><p>Las plantas también tienen órganos: la <b>raíz</b>, el <b>tallo</b>, las <b>hojas</b> y las <b>flores</b>.</p>`,
      svg: svg("El estómago como órgano formado por cuatro tejidos", `${tit("Un órgano: el estómago")}<path d="M60 52 q-6 30 20 44 q30 16 54 -2 q24 -18 4 -40 q-10 -10 -22 2 q-14 14 -30 2 q-10 -10 -26 -6z" fill="#fca5a5" stroke="var(--red)" stroke-width="3" transform="translate(-10 20)"/>${filas([["epitelial", "jugos", COL.sol], ["muscular", "mezcla", COL.rojo], ["nervioso", "órdenes", COL.morado], ["conectivo", "sangre", COL.azul]], 54, 28, { x: 150, wa: 50, wb: 40 })}${tx(130, 168, "varios tejidos = un órgano", 230, { weight: 700, color: COL.verde })}`),
      video: vid("KYUQ-kySe2E"),
    },
    {
      html: `<h3>Aparatos, sistemas y organismo</h3><p>Los órganos tampoco trabajan solos. Varios órganos que colaboran en una misma función forman un <mark>aparato</mark> o <mark>sistema</mark>. Por ejemplo:</p><p>• El <b>aparato digestivo</b> (boca, esófago, estómago, intestinos) transforma los alimentos.</p><p>• El <b>aparato respiratorio</b> (nariz, tráquea, pulmones) toma oxígeno.</p><p>• El <b>aparato circulatorio</b> (corazón, vasos sanguíneos, sangre) reparte sustancias por todo el cuerpo.</p><p>• El <b>sistema nervioso</b> (cerebro, médula, nervios) controla y coordina.</p><p>• El <b>aparato locomotor</b> (huesos, articulaciones, músculos) nos permite movernos.</p><p>Todos los aparatos y sistemas juntos forman el <mark>organismo</mark>, es decir, el ser vivo completo. Así llegamos a los <b>niveles de organización</b>, ordenados de menor a mayor: <b>célula → tejido → órgano → aparato o sistema → organismo</b>. Cada nivel está formado por piezas del nivel anterior, igual que las letras forman palabras, las palabras forman frases y las frases forman un libro.</p>`,
      svg: svg("Escalera de niveles: célula, tejido, órgano, aparato y organismo", `${tit("Niveles de organización")}${columna([["célula", COL.rojo], ["tejido", COL.naranja], ["órgano", COL.sol], ["aparato o sistema", COL.verde], ["organismo", COL.azul]], 130, 170, 32, 20, 9)}`),
    },
    {
      html: `<h3>Observar células en el aula</h3><p>Con un <b>microscopio</b> del colegio se pueden ver células de verdad. Una práctica muy sencilla es la de la <b>piel de cebolla</b>:</p><p>1. Corta una cebolla y separa una de sus capas. Por la parte de dentro tiene una telilla transparente finísima: arráncala con unas pinzas.</p><p>2. Ponla extendida sobre un cristal llamado <b>portaobjetos</b>, añade una gota de agua y, si tienes, una gota de colorante (azul de metileno o lugol).</p><p>3. Tápala con un cristal muy fino, el <b>cubreobjetos</b>, con cuidado de que no queden burbujas.</p><p>4. Mira primero con el objetivo de <b>menos aumentos</b> y enfoca despacio con el tornillo. Después cambia a más aumentos.</p><p>Verás muchas células alargadas, colocadas como ladrillos en una pared, cada una con su <b>pared celular</b> y un <b>núcleo</b> teñido de oscuro. ¡Son células vegetales!</p><p>También puedes observar <b>células de tu mejilla</b> pasando suavemente un bastoncillo por el interior de la boca: se ven redondeadas y sin pared, porque son células animales.</p>`,
      svg: svg("Piel de cebolla vista al microscopio: células como ladrillos con núcleo", `${tit("Piel de cebolla al microscopio")}<circle cx="130" cy="100" r="64" fill="var(--card)" stroke="var(--ink)" stroke-width="4"/>${[...Array(6)].map((_, f) => [...Array(4)].map((_, c) => { const x = 70 + c * 32 + (f % 2) * 16, y = 46 + f * 18; return Math.hypot(x + 15 - 130, y + 8 - 100) < 52 ? `<rect x="${x}" y="${y}" width="30" height="16" rx="2" fill="#fef3c7" stroke="#a16207" stroke-width="1.5"/><circle cx="${x + 9}" cy="${y + 8}" r="3" fill="#6d28d9"/>` : ""; }).join("")).join("")}${tx(130, 176, "pared + núcleo: célula vegetal", 230, { weight: 700, color: COL.verde })}`),
    },
  ],
  figura: {
    titulo: "Células, tejidos y órganos en ocho ideas",
    svg: rejilla([
      ["Célula", "unidad de los seres vivos", COL.rojo],
      ["Membrana", "envoltura que deja pasar", COL.naranja],
      ["Núcleo", "centro de control", COL.morado],
      ["Vegetal", "pared y cloroplastos", COL.verde],
      ["Unicelular", "una sola célula", COL.agua],
      ["Tejido", "células iguales, un trabajo", COL.sol],
      ["Órgano", "varios tejidos juntos", COL.azul],
      ["Organismo", "el ser vivo completo", COL.marron],
    ], 4, 86, "Resumen: célula, partes, tipos, tejidos, órganos y organismo"),
  },
  video: vgen("TVNnPyRpLa8", "niveles de organización de los seres vivos primaria"),
  ejemplos: [
    { enunciado: "Al microscopio ves una célula redondeada, sin pared y sin puntos verdes. ¿De qué ser vivo puede ser?",
      pasos: ["Las células vegetales tienen pared celular y cloroplastos verdes.", "Esta célula no tiene ninguna de las dos cosas.", "Una célula redondeada y sin pared es típica de los animales."],
      resultado: "Es una célula animal, por ejemplo de la mejilla de una persona." },
    { enunciado: "Ordena de menor a mayor: pulmón, persona, célula del pulmón, aparato respiratorio, tejido epitelial.",
      pasos: ["Lo más pequeño es la célula del pulmón.", "Muchas células iguales forman el tejido epitelial.", "Varios tejidos forman el órgano: el pulmón.", "El pulmón, la tráquea y la nariz forman el aparato respiratorio.", "Todos los aparatos forman la persona."],
      resultado: "célula → tejido epitelial → pulmón → aparato respiratorio → persona." },
    { enunciado: "Laura dice que un elefante tiene las células más grandes que un ratón. ¿Tiene razón?",
      pasos: ["Las células de los animales tienen tamaños muy parecidos.", "Lo que cambia entre un animal grande y uno pequeño es el número de células.", "El elefante tiene muchísimas más células que el ratón."],
      resultado: "No: el elefante no tiene células más grandes, sino muchas más células." },
  ],
  errores: [
    "Creer que los seres grandes tienen células más grandes: tienen más células.",
    "Decir que la célula animal tiene pared celular: solo la tienen las vegetales (y los hongos y bacterias).",
    "Confundir tejido y órgano: el tejido tiene un solo tipo de célula; el órgano reúne varios tejidos.",
    "Pensar que la sangre no es un tejido: es un tejido conectivo líquido.",
    "Olvidar que un ser unicelular está vivo y hace las tres funciones vitales.",
  ],
  ejercicios: [
    { q: "¿Por qué decimos que la célula es la unidad de los seres vivos?", sol: "Porque todos los seres vivos están formados por células y es la parte más pequeña que puede nutrirse, relacionarse y reproducirse por sí misma." },
    { q: "Escribe las tres partes de la célula y explica cada una en una frase.", sol: "Membrana: envoltura que deja entrar y salir sustancias. Citoplasma: interior líquido con los orgánulos. Núcleo: centro de control con el material genético." },
    { q: "¿Para qué sirven las mitocondrias?", sol: "Para obtener la energía de los alimentos que llegan a la célula." },
    { q: "Escribe dos diferencias entre la célula animal y la vegetal.", sol: "La vegetal tiene pared celular y cloroplastos; la animal no. Además, la vegetal tiene una vacuola grande." },
    { q: "Clasifica en unicelular o pluricelular: bacteria, olivo, ameba, gato, champiñón.", sol: "Unicelulares: bacteria y ameba. Pluricelulares: olivo, gato y champiñón." },
    { q: "Relaciona cada célula con su forma: neurona, glóbulo rojo, célula de la piel.", sol: "Neurona: con ramas y un cable largo. Glóbulo rojo: disco aplastado. Célula de la piel: plana como una teja." },
    { q: "¿Qué es un tejido? Nombra los cuatro tipos del cuerpo humano.", sol: "Un grupo de células parecidas que hacen el mismo trabajo. Epitelial, muscular, nervioso y conectivo." },
    { q: "Di si es célula, tejido, órgano o aparato: corazón, neurona, sangre, aparato digestivo.", sol: "Corazón: órgano. Neurona: célula. Sangre: tejido. Aparato digestivo: aparato." },
    { q: "Nombra cuatro órganos de una planta.", sol: "Raíz, tallo, hojas y flores." },
    { q: "En la práctica de la cebolla, ¿por qué se empieza mirando con pocos aumentos?", sol: "Porque así se ve una zona más amplia, es más fácil encontrar la muestra y enfocar; después se pasa a más aumentos para ver detalles." },
  ],
  quiz: [
    { q: "La parte más pequeña de un ser vivo con vida propia es…", o: ["el tejido", "la célula", "el órgano"], a: 1, e: "La célula es la unidad de los seres vivos." },
    { q: "El material genético está en…", o: ["la membrana", "el citoplasma", "el núcleo"], a: 2, e: "El núcleo es el centro de control." },
    { q: "Las mitocondrias sirven para…", o: ["obtener energía", "dar color verde", "proteger la célula"], a: 0, e: "Son como centrales de energía." },
    { q: "Los cloroplastos solo están en las células…", o: ["animales", "de la sangre", "vegetales"], a: 2, e: "Fabrican alimento con la luz." },
    { q: "La pared celular hace que las plantas…", o: ["se mantengan rígidas", "se muevan", "respiren"], a: 0, e: "Da firmeza a sus células." },
    { q: "Una bacteria es un ser…", o: ["pluricelular", "unicelular", "sin células"], a: 1, e: "Tiene una sola célula." },
    { q: "Un grupo de células parecidas con el mismo trabajo forma…", o: ["un tejido", "un aparato", "un organismo"], a: 0, e: "Eso es un tejido." },
    { q: "La sangre es un tejido…", o: ["nervioso", "epitelial", "conectivo"], a: 2, e: "Es tejido conectivo líquido." },
    { q: "El estómago es…", o: ["un órgano", "un tejido", "una célula"], a: 0, e: "Está formado por varios tejidos." },
    { q: "El nivel más grande es…", o: ["el aparato", "el organismo", "el órgano"], a: 1, e: "El organismo es el ser vivo completo." },
  ],
  examen: [
    { q: "Robert Hooke vio las primeras células en…", o: ["un trozo de corcho", "una gota de sangre", "una hoja"], a: 0, e: "Observó celdillas en el corcho." },
    { q: "Las neuronas forman el tejido…", o: ["muscular", "nervioso", "óseo"], a: 1, e: "Nervioso." },
    { q: "El órgano más grande del cuerpo es…", o: ["el hígado", "el cerebro", "la piel"], a: 2, e: "La piel." },
    { q: "Varios órganos que colaboran en una función forman…", o: ["un aparato", "un tejido", "una célula"], a: 0, e: "Un aparato o sistema." },
  ],
  feynman: ["Qué partes tiene la célula y qué hace cada una", "En qué se diferencian la célula animal y la vegetal", "Cómo se pasa de la célula al organismo, con el ejemplo del estómago"],
  mapa: mapa("LA CÉLULA", "var(--pri)", [
    ["Partes", "membrana · citoplasma · núcleo", COL.rojo],
    ["Tipos", "animal · vegetal", COL.verde],
    ["Seres vivos", "unicelulares · pluricelulares", COL.agua],
    ["Niveles", "tejido · órgano · aparato", COL.azul],
  ], 250),
  tarjetas: [
    ["Célula", "La unidad más pequeña con vida de todos los seres vivos."],
    ["Membrana", "Envoltura que rodea la célula y deja pasar sustancias."],
    ["Núcleo", "Centro de control que guarda el material genético."],
    ["Cloroplasto", "Orgánulo verde de las células vegetales que fabrica alimento."],
    ["Pluricelular", "Ser vivo formado por muchas células, como un perro."],
    ["Tejido", "Grupo de células parecidas que hacen el mismo trabajo."],
    ["Órgano", "Parte del cuerpo formada por varios tejidos, como el estómago."],
    ["Aparato o sistema", "Varios órganos que colaboran en una función."],
  ],
  familias: ["Mirad juntos con una lupa la piel de una cebolla, una hoja o la palma de la mano.", "Preparad una célula comestible con gelatina y trozos de fruta como orgánulos y núcleo.", "Buscad en casa ejemplos de «equipos» que se reparten el trabajo y comparadlos con las células.", "Jugad a ordenar niveles: decid un órgano y que el niño o la niña diga su aparato y un tejido que tenga."],
  profesores: PROF("Ciencias de la Naturaleza: la célula como unidad estructural y funcional, partes de la célula, célula animal y vegetal, seres unicelulares y pluricelulares, tejidos, órganos, aparatos y sistemas", ["Práctica de epidermis de cebolla y de células de la mucosa bucal con microscopio.", "Maqueta de célula animal y vegetal por parejas con material reciclado.", "Juego de cartas para ordenar niveles de organización con ejemplos del cuerpo y de las plantas."]),
  fuentes: [RD, wiki("Célula", "Célula"), wiki("Tejido (biología)", "Tejido_(biología)"), wiki("Órgano (biología)", "Órgano_(biología)")],
  revisado: REV,
};
