// Biología y Geología 1º ESO: la biosfera y los seres vivos. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La biosfera y los seres vivos",
  minutos: 55,
  objetivos: ["Definir la biosfera y explicar por qué la Tierra es un planeta con vida", "Reconocer las características comunes a todos los seres vivos y su composición", "Describir los niveles de organización de la materia viva", "Explicar las tres funciones vitales: nutrición, relación y reproducción"],
  claves: ["biosfera", "ser vivo", "bioelemento", "biomolécula", "célula", "unicelular", "pluricelular", "nutrición", "autótrofo", "heterótrofo", "relación", "estímulo", "reproducción"],
  pregunta: {
    texto: "Un coche se mueve, consume combustible, expulsa gases y hasta «responde» cuando giras el volante. ¿Por qué no es un ser vivo?",
    respuesta: "Porque le faltan las características que comparten todos los seres vivos: <b>no está formado por células</b>, no fabrica ni repara sus propias piezas, no crece ni se desarrolla, no se <b>reproduce</b> (no puede fabricar otro coche) y no reacciona por sí mismo a su entorno: lo controla una persona. Un ser vivo realiza por sí mismo las <b>tres funciones vitales</b>: nutrición, relación y reproducción.",
  },
  bloques: [
    {
      html: `<h3>La biosfera</h3><p>La <mark>biosfera</mark> es el conjunto de <b>todos los seres vivos</b> de la Tierra y los lugares donde viven. No es una capa separada como la atmósfera o la hidrosfera, sino que se mezcla con ellas: hay seres vivos en el aire (aves, insectos, esporas y bacterias que viajan con el viento), en el agua (desde la superficie hasta las fosas oceánicas más profundas) y en la parte superficial de la geosfera (en el suelo y hasta varios kilómetros bajo tierra, donde viven algunas bacterias). Aun así, la mayor parte de la vida se concentra en una franja estrecha de unos pocos kilómetros cerca de la superficie. La biosfera tiene una enorme <b>biodiversidad</b>: se han descrito cerca de dos millones de especies, y los científicos calculan que existen muchas más por descubrir, sobre todo de insectos y de microorganismos.</p>`,
    },
    {
      html: `<h3>¿Por qué hay vida en la Tierra?</h3><p>De momento, la Tierra es el <b>único lugar del universo</b> donde sabemos con seguridad que existe vida. Esto se debe a una combinación de condiciones que se dan a la vez. Hay <mark>agua líquida</mark>, imprescindible porque en ella ocurren las reacciones químicas de los seres vivos. La <b>temperatura</b> es moderada, entre unos −50 °C y 50 °C en casi toda la superficie, gracias a la distancia al Sol y al efecto invernadero natural. La <b>atmósfera</b> contiene oxígeno para la respiración y dióxido de carbono para la fotosíntesis, y nos protege de los rayos ultravioleta con la capa de ozono. La <b>luz del Sol</b> aporta la energía que las plantas captan para fabricar alimento, y de ellas depende casi toda la vida. Y el planeta tiene un <b>campo magnético</b> que lo protege de las partículas del viento solar. Los científicos buscan en otros planetas y lunas estas mismas condiciones, sobre todo agua líquida, para saber dónde podría haber vida.</p>`,
    },
    {
      html: `<h3>Las características de los seres vivos</h3><p>Aunque una bacteria, un pino, una seta y una ballena parezcan no tener nada en común, todos los seres vivos comparten una serie de características. Todos están formados por <mark>células</mark>, ya sea una sola o millones. Todos están formados por los mismos <b>componentes químicos</b>. Todos realizan las tres <mark>funciones vitales</mark>: <b>nutrición</b>, <b>relación</b> y <b>reproducción</b>. Todos tienen un <b>ciclo de vida</b>: nacen, crecen, pueden reproducirse y mueren. Todos mantienen su medio interno estable aunque cambie el exterior (por ejemplo, tu cuerpo se mantiene a unos 37 °C tanto en invierno como en verano). Y todos contienen <b>información hereditaria</b> en una molécula, el <b>ADN</b>, que se transmite a sus descendientes. Los <b>virus</b> son un caso especial: tienen material genético, pero no tienen células y solo pueden reproducirse dentro de las células de otros seres vivos, por lo que la mayoría de los científicos no los considera seres vivos.</p>`,
      video: { id: "9wTImTwJ73E", titulo: "Características de los SERES VIVOS", canal: "Nutrimente", vistas: 705406 },
    },
    {
      html: `<h3>¿De qué están hechos los seres vivos?</h3><p>Los seres vivos están formados por <b>átomos</b>, igual que la materia inerte, pero solo una pequeña parte de los elementos químicos son abundantes en ellos. Se llaman <mark>bioelementos</mark>. Los más importantes, que forman casi el 99 % de la masa de un ser vivo, son el <b>carbono (C), el hidrógeno (H), el oxígeno (O) y el nitrógeno (N)</b>, junto con el fósforo (P) y el azufre (S). Otros, como el calcio de los huesos o el hierro de la sangre, se necesitan en cantidades más pequeñas. Estos átomos se unen formando <mark>biomoléculas</mark>. Unas son <b>inorgánicas</b>, porque también existen en la materia no viva: el <b>agua</b>, que es la más abundante, y las <b>sales minerales</b>. Otras son <b>orgánicas</b>, exclusivas de los seres vivos y basadas en el carbono: los <b>glúcidos</b> o azúcares (aportan energía, como la glucosa o el almidón), los <b>lípidos</b> o grasas (reservan energía y forman las membranas), las <b>proteínas</b> (forman estructuras como el músculo y controlan las reacciones) y los <b>ácidos nucleicos</b> (ADN y ARN, que guardan la información hereditaria).</p>${tabla(["Biomolécula", "Tipo", "Función principal", "Alimento rico en ella"], [["Agua", "inorgánica", "disolvente y transporte", "fruta, verdura"], ["Sales minerales", "inorgánica", "huesos, nervios", "leche (calcio)"], ["Glúcidos", "orgánica", "energía rápida", "pan, pasta, arroz"], ["Lípidos", "orgánica", "reserva de energía", "aceite, frutos secos"], ["Proteínas", "orgánica", "construir y reparar", "huevos, legumbres"], ["Ácidos nucleicos", "orgánica", "información genética", "(en todas las células)"]])}`,
    },
    {
      html: `<h3>Los niveles de organización</h3><p>La materia viva se organiza en niveles, de lo más sencillo a lo más complejo, y cada nivel está formado por elementos del nivel anterior. Los <b>átomos</b> (bioelementos) se unen en <b>moléculas</b> (biomoléculas). Las moléculas forman la <mark>célula</mark>, que es el primer nivel con vida: la unidad más pequeña capaz de realizar las funciones vitales. Los seres <mark>unicelulares</mark>, como las bacterias o las amebas, están formados por una sola célula. En los <mark>pluricelulares</mark>, como las plantas y los animales, las células se especializan y se agrupan: un conjunto de células parecidas que hacen la misma función forma un <b>tejido</b> (por ejemplo, el tejido muscular); varios tejidos forman un <b>órgano</b> (el corazón); varios órganos que trabajan juntos forman un <b>aparato o sistema</b> (el aparato circulatorio); y todos ellos forman el <b>organismo</b>. Por encima, los individuos de una misma especie que viven en un lugar forman una <b>población</b>, y varias poblaciones juntas, una <b>comunidad</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Niveles de organización: átomo, molécula, célula, tejido, órgano, aparato y organismo">${BG}
        ${[["átomo", COL.gris], ["molécula", COL.morado], ["célula", COL.verde], ["tejido", COL.agua], ["órgano", COL.rojo], ["aparato", COL.naranja], ["organismo", COL.azul]].map(([n, c], i) => {
          const y = 154 - i * 20, w = 64 + i * 20, x = 124 - w / 2;
          return cj(x, y, w, 17, n, c, { size: 10.5, rx: 6 });
        }).join("")}
        ${t(124, 20, "de abajo arriba, cada vez más complejo", { size: 10, weight: 400, color: "var(--muted)" })}${fl(238, 168, 238, 36, "var(--muted)", 1.5)}</svg>`,
    },
    {
      html: `<h3>La función de nutrición</h3><p>La <mark>nutrición</mark> es el conjunto de procesos mediante los cuales los seres vivos obtienen <b>materia</b> para crecer y reparar su cuerpo, y <b>energía</b> para realizar todas sus actividades. Hay dos tipos. En la <mark>nutrición autótrofa</mark>, los seres vivos <b>fabrican su propio alimento</b> (materia orgánica) a partir de sustancias sencillas: agua, sales minerales y dióxido de carbono, usando la energía de la luz del Sol. Este proceso es la <b>fotosíntesis</b>, que además libera oxígeno. Son autótrofos las plantas, las algas y algunas bacterias. En la <mark>nutrición heterótrofa</mark>, los seres vivos <b>no pueden fabricar su alimento</b> y lo obtienen comiendo a otros seres vivos o sus restos. Son heterótrofos los animales, los hongos, los protozoos y la mayoría de las bacterias. Para obtener la energía del alimento, casi todos los seres vivos, también las plantas, realizan la <b>respiración celular</b>, en la que usan oxígeno y liberan dióxido de carbono.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nutrición autótrofa: la planta fabrica su alimento con luz, agua y CO2. Nutrición heterótrofa: el conejo obtiene alimento comiendo la planta">${BG}
        <circle cx="24" cy="24" r="12" fill="#f6b417"/>${fl(36, 34, 60, 62, COL.sol, 2)}
        <path d="M80 150 V 80" stroke="#2f9e44" stroke-width="4"/><ellipse cx="66" cy="92" rx="16" ry="8" fill="#2f9e44" transform="rotate(-30 66 92)"/><ellipse cx="94" cy="84" rx="16" ry="8" fill="#2f9e44" transform="rotate(30 94 84)"/><ellipse cx="80" cy="72" rx="9" ry="14" fill="#2f9e44"/>
        <path d="M80 150 l -10 12 M80 150 l 10 12 M80 150 v 14" stroke="#a16207" stroke-width="2"/>
        ${et(30, 110, "CO₂", 30, { size: 10, color: COL.gris })}${fl(38, 106, 58, 98, "var(--muted)", 1.5)}${et(118, 168, "agua y sales", 60, { size: 9, color: COL.azul })}
        ${t(80, 22, "autótrofa", { size: 11, color: COL.verde })}
        <ellipse cx="200" cy="124" rx="28" ry="18" fill="#cbd5e1"/><circle cx="226" cy="108" r="12" fill="#cbd5e1"/><ellipse cx="228" cy="86" rx="4" ry="14" fill="#cbd5e1"/><ellipse cx="236" cy="88" rx="4" ry="13" fill="#cbd5e1"/><circle cx="230" cy="106" r="2" fill="var(--ink)"/>
        ${fl(120, 100, 166, 110, "var(--ink)", 2)}${et(144, 92, "come", 40, { size: 10 })}
        ${t(200, 22, "heterótrofa", { size: 11, color: COL.rojo })}</svg>`,
      video: { id: "Kt2fASy7s6o", titulo: "Tipos de nutrición en los seres vivos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 608120 },
    },
    {
      html: `<h3>La función de relación</h3><p>La <mark>función de relación</mark> permite a los seres vivos <b>captar información</b> de lo que ocurre a su alrededor y en su interior, y <b>responder</b> de forma adecuada para sobrevivir. Cualquier cambio que provoca una reacción se llama <mark>estímulo</mark>: la luz, el sonido, un olor, el frío, el contacto o la presencia de un depredador. Los estímulos se captan mediante <b>receptores</b> (como los órganos de los sentidos), la información se procesa en un <b>centro de coordinación</b> (en los animales, el sistema nervioso) y se produce una <b>respuesta</b> por medio de los <b>efectores</b>, que pueden ser músculos (movimiento) o glándulas (sustancias). Por ejemplo, si tocas algo muy caliente, la piel capta el calor, el sistema nervioso lo procesa y los músculos apartan la mano. Las plantas también se relacionan, aunque de forma más lenta: sus tallos se orientan hacia la luz, sus raíces crecen hacia abajo y algunas, como la mimosa, cierran sus hojas al tocarlas.</p>`,
    },
    {
      html: `<h3>La función de reproducción</h3><p>La <mark>reproducción</mark> es la función por la que los seres vivos producen <b>nuevos individuos</b> parecidos a ellos. No es necesaria para que un individuo sobreviva, pero sí para que la <b>especie</b> continúe. Hay dos tipos. En la <mark>reproducción asexual</mark> interviene <b>un solo progenitor</b>, que se divide o forma una parte que se separa y da lugar a un nuevo ser. Los descendientes son <b>idénticos</b> al progenitor, y es un proceso rápido y sencillo. Ocurre, por ejemplo, cuando una bacteria se divide en dos, cuando una estrella de mar regenera un cuerpo entero a partir de un brazo o cuando una planta de fresa forma nuevas plantas con sus tallos rastreros. En la <mark>reproducción sexual</mark> suelen intervenir <b>dos progenitores</b>, que producen células especiales llamadas <b>gametos</b> (óvulos y espermatozoides). Al unirse dos gametos se forma un <b>cigoto</b>, que se desarrolla hasta formar un nuevo individuo. Los descendientes son <b>diferentes</b> entre sí y de sus progenitores, porque combinan características de ambos; esa variedad ayuda a las especies a adaptarse a los cambios del ambiente.</p>${tabla(["", "Reproducción asexual", "Reproducción sexual"], [["Progenitores", "uno", "normalmente dos"], ["Gametos", "no", "sí (óvulo y espermatozoide)"], ["Descendientes", "idénticos al progenitor", "distintos, con rasgos de ambos"], ["Ejemplos", "bacterias, estrella de mar, fresa", "mamíferos, aves, plantas con flor"]])}`,
    },
  ],
  figura: {
    titulo: "Lo que tienen en común todos los seres vivos",
    svg: rejilla([
      ["Células", "una o muchas", COL.verde],
      ["Bioelementos", "C, H, O, N, P y S", COL.gris],
      ["Biomoléculas", "agua, glúcidos, lípidos…", COL.morado],
      ["ADN", "información hereditaria", COL.azul],
      ["Nutrición", "obtener materia y energía", COL.sol],
      ["Relación", "estímulo → respuesta", COL.agua],
      ["Reproducción", "asexual o sexual", COL.rojo],
      ["Ciclo de vida", "nacer, crecer, morir", COL.marron],
    ], 4, 86, "Resumen: características comunes de los seres vivos y funciones vitales"),
  },
  video: { id: "NX6CwdDKzDw", titulo: "Las FUNCIONES VITALES de los SERES VIVOS - Relación, nutrición y reproducción", canal: "Smile and Learn - Español", vistas: 1456043, megusta: 0, busqueda: "funciones vitales de los seres vivos" },
  ejemplos: [
    { enunciado: "Indica si son autótrofos o heterótrofos: un champiñón, un rosal, una vaca y un alga.",
      pasos: ["El rosal y el alga hacen la fotosíntesis: fabrican su alimento.", "La vaca come plantas: obtiene el alimento de otros seres.", "El champiñón es un hongo: se alimenta de restos de otros seres vivos."],
      resultado: "Autótrofos: rosal y alga. Heterótrofos: champiñón y vaca." },
    { enunciado: "Un gato oye un ruido y se gira hacia él. Identifica el estímulo, el receptor, el centro de coordinación y el efector.",
      pasos: ["Estímulo: el ruido.", "Receptor: el oído.", "Centro de coordinación: el sistema nervioso (encéfalo).", "Efector: los músculos del cuello, que giran la cabeza."],
      resultado: "Ruido → oído → sistema nervioso → músculos." },
    { enunciado: "Ordena estos niveles de menor a mayor complejidad: órgano, célula, átomo, organismo, tejido, molécula, aparato.",
      pasos: ["Sin vida: átomo y molécula.", "Primer nivel con vida: célula.", "Después: tejido, órgano, aparato y organismo."],
      resultado: "Átomo, molécula, célula, tejido, órgano, aparato, organismo." },
  ],
  errores: [
    "Pensar que las plantas no respiran: respiran día y noche; además, de día hacen la fotosíntesis.",
    "Creer que las plantas no se relacionan porque no se desplazan.",
    "Confundir biosfera con la atmósfera o con «la naturaleza» en general.",
    "Decir que los hongos son autótrofos como las plantas: son heterótrofos.",
    "Pensar que la reproducción es necesaria para que el individuo viva: lo es para la especie.",
  ],
  ejercicios: [
    { q: "¿Qué es la biosfera y en qué otras capas de la Tierra se encuentra?", sol: "El conjunto de seres vivos y los lugares donde viven; se mezcla con la atmósfera, la hidrosfera y la parte superficial de la geosfera." },
    { q: "Nombra tres condiciones que permiten la vida en la Tierra.", sol: "Agua líquida, temperatura moderada y atmósfera con oxígeno y capa de ozono (también la luz solar y el campo magnético)." },
    { q: "Escribe cuatro características comunes a todos los seres vivos.", sol: "Están formados por células, tienen la misma composición química, realizan las funciones vitales y tienen ADN (también tienen un ciclo de vida)." },
    { q: "¿Por qué la mayoría de los científicos no considera seres vivos a los virus?", sol: "Porque no tienen células y solo se reproducen dentro de otras células." },
    { q: "¿Cuáles son los cuatro bioelementos más abundantes?", sol: "Carbono, hidrógeno, oxígeno y nitrógeno." },
    { q: "Clasifica en orgánicas o inorgánicas: agua, proteínas, sales minerales, glúcidos.", sol: "Inorgánicas: agua y sales minerales. Orgánicas: proteínas y glúcidos." },
    { q: "¿Qué diferencia hay entre un tejido y un órgano?", sol: "Un tejido es un grupo de células parecidas con la misma función; un órgano está formado por varios tejidos." },
    { q: "¿Qué necesita una planta para hacer la fotosíntesis?", sol: "Agua, sales minerales, dióxido de carbono y luz del Sol." },
    { q: "Pon un ejemplo de respuesta de una planta a un estímulo.", sol: "El tallo crece hacia la luz; la mimosa cierra sus hojas al tocarlas." },
    { q: "¿Por qué los hijos de la reproducción sexual son distintos entre sí?", sol: "Porque combinan características de los dos progenitores a través de los gametos." },
  ],
  quiz: [
    { q: "La biosfera es…", o: ["el conjunto de seres vivos y su medio", "una capa de gases", "el núcleo de la Tierra"], a: 0, e: "Seres vivos y lugares donde viven." },
    { q: "La unidad más pequeña con vida es…", o: ["el átomo", "la célula", "el tejido"], a: 1, e: "La célula." },
    { q: "La biomolécula más abundante en los seres vivos es…", o: ["el agua", "la proteína", "el ADN"], a: 0, e: "El agua." },
    { q: "Los glúcidos sirven sobre todo para…", o: ["dar energía", "guardar la información", "formar huesos"], a: 0, e: "Energía rápida." },
    { q: "Los seres que fabrican su alimento son…", o: ["heterótrofos", "autótrofos", "parásitos"], a: 1, e: "Autótrofos." },
    { q: "Las setas son…", o: ["autótrofas", "heterótrofas", "minerales"], a: 1, e: "Los hongos son heterótrofos." },
    { q: "Cualquier cambio que provoca una respuesta es un…", o: ["estímulo", "efector", "gameto"], a: 0, e: "Estímulo." },
    { q: "En la reproducción asexual hay…", o: ["un progenitor", "dos progenitores", "gametos"], a: 0, e: "Un solo progenitor." },
    { q: "Al unirse dos gametos se forma un…", o: ["tejido", "cigoto", "virus"], a: 1, e: "Cigoto." },
    { q: "El conjunto de órganos que trabajan juntos es un…", o: ["tejido", "aparato o sistema", "población"], a: 1, e: "Aparato o sistema." },
  ],
  examen: [
    { q: "La información hereditaria está en el…", o: ["ADN", "agua", "almidón"], a: 0, e: "ADN." },
    { q: "Los individuos de una misma especie que viven en un lugar forman…", o: ["una comunidad", "una población", "un órgano"], a: 1, e: "Población." },
    { q: "Los músculos y las glándulas son…", o: ["receptores", "efectores", "estímulos"], a: 1, e: "Efectores: producen la respuesta." },
  ],
  feynman: ["Qué tienen en común todos los seres vivos", "Qué diferencia hay entre nutrición autótrofa y heterótrofa", "Cómo funciona la relación: estímulo, receptor, coordinación y respuesta"],
  mapa: mapa("SERES VIVOS", "var(--eso)", [
    ["Biosfera", "vida · condiciones · biodiversidad", COL.verde],
    ["Composición", "bioelementos · biomoléculas", COL.morado],
    ["Organización", "célula · tejido · órgano…", COL.azul],
    ["Funciones", "nutrición · relación · reproducción", COL.rojo],
  ], 290),
  tarjetas: [
    ["Biosfera", "Conjunto de seres vivos y los lugares donde viven."],
    ["Bioelementos", "C, H, O, N, P y S: casi toda la masa de los seres vivos."],
    ["Biomoléculas orgánicas", "Glúcidos, lípidos, proteínas y ácidos nucleicos."],
    ["Unicelular", "Ser vivo formado por una sola célula."],
    ["Nutrición autótrofa", "Fabricar el propio alimento con la luz: fotosíntesis."],
    ["Nutrición heterótrofa", "Obtener el alimento de otros seres vivos."],
    ["Estímulo", "Cambio que el ser vivo capta y al que responde."],
    ["Reproducción sexual", "Unión de gametos de dos progenitores; hijos distintos."],
  ],
  familias: ["Leed juntos las etiquetas de varios alimentos y buscad cuántos glúcidos, grasas y proteínas tienen.", "Poned una planta junto a una ventana y observad durante una semana cómo se orienta hacia la luz.", "Haced una lista de seres vivos que veáis en un paseo y clasificadlos en autótrofos y heterótrofos."],
  profesores: {
    saberes: "La biosfera y los seres vivos: condiciones para la vida en la Tierra, características y composición de los seres vivos, niveles de organización, funciones vitales de nutrición, relación y reproducción (RD 217/2022, Biología y Geología, bloque Seres vivos).",
    ideas: ["Debate: ¿está vivo? (fuego, virus, semilla, cristal que crece, robot).", "Experimento de fototropismo con lentejas en una caja con una ventana.", "Mural de niveles de organización con ejemplos del cuerpo humano y de una planta."],
  },
  fuentes: [RD, wiki("Biosfera", "Biosfera"), wiki("Ser vivo", "Ser_vivo"), { t: "Museo Nacional de Ciencias Naturales (CSIC)", url: "https://www.mncn.csic.es/" }],
  revisado: REV,
};
