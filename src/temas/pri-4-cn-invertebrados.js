// Ciencias de la Naturaleza 4º de Primaria: los animales invertebrados. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, flor, tabla } = require("./_pri4b");

// Insecto sencillo: cabeza, tórax, abdomen, seis patas y antenas.
const insecto = (x, y, s = 1, c = COL.marron) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="-26" cy="0" r="8" fill="${c}"/><ellipse cx="-8" cy="0" rx="10" ry="8" fill="${c}"/><ellipse cx="18" cy="0" rx="18" ry="10" fill="${c}" fill-opacity=".8"/><path d="M-30 -6 q-6 -14 -14 -16 M-24 -7 q-2 -14 -8 -18" stroke="${c}" stroke-width="1.5" fill="none"/>${[-14, -8, -2].map((a) => `<path d="M${a} 6 l-6 14 M${a} -6 l-6 -14" stroke="${c}" stroke-width="1.8"/>`).join("")}</g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los animales invertebrados",
  minutos: 45,
  objetivos: ["Explicar qué es un animal invertebrado", "Conocer los principales grupos: poríferos, celentéreos, gusanos, moluscos, equinodermos y artrópodos", "Distinguir los cuatro grupos de artrópodos", "Describir la metamorfosis de los insectos", "Valorar la importancia de los invertebrados en la naturaleza"],
  claves: ["invertebrado", "esponja", "medusa", "gusano", "molusco", "concha", "equinodermo", "artrópodo", "exoesqueleto", "insecto", "arácnido", "metamorfosis"],
  pregunta: {
    texto: "Una hormiga puede levantar objetos mucho más pesados que ella y un pulpo puede pasar por un agujero del tamaño de una moneda. ¿Qué tienen de especial sus cuerpos?",
    respuesta: "Ninguno de los dos tiene huesos: son <mark>invertebrados</mark>. La hormiga tiene un <b>exoesqueleto</b>, una armadura dura por fuera, y músculos muy fuertes para su tamaño. El pulpo es un <b>molusco</b> de cuerpo blando: como no tiene esqueleto, se puede estrujar y pasar por huecos muy pequeños.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un invertebrado?</h3><p>Los <mark>invertebrados</mark> son los animales que <b>no tienen columna vertebral</b> ni esqueleto interno de huesos. Algunos tienen el cuerpo <b>blando</b>, como el gusano o la medusa; otros lo protegen con una <b>concha</b>, como el caracol, o con una cubierta dura por fuera, como el escarabajo.</p><p>Aunque muchas veces nos fijamos más en los vertebrados, los invertebrados son la <b>gran mayoría</b> de los animales: ¡más de 95 de cada 100 especies de animales son invertebrados! Viven en todas partes: en el mar, en los ríos, en el suelo, en el aire, en los árboles y hasta dentro de otros animales.</p><p>Suelen ser <b>pequeños</b>, porque sin un esqueleto interno resulta difícil sostener un cuerpo grande fuera del agua. Pero hay excepciones en el mar, como el <b>calamar gigante</b>, que puede medir más de diez metros.</p><p>Los invertebrados son muy distintos entre sí. Por eso se dividen en varios grupos. Los más importantes son: <b>poríferos</b> (esponjas), <b>celentéreos</b> (medusas), <b>gusanos</b>, <b>moluscos</b>, <b>equinodermos</b> y <b>artrópodos</b>.</p>`,
      svg: svg("De cada 100 especies de animales, más de 95 son invertebrados", `${tit("La mayoría no tiene huesos")}${[...Array(100)].map((_, i) => `<circle cx="${34 + (i % 20) * 10}" cy="${48 + Math.floor(i / 20) * 12}" r="4" fill="${i < 95 ? COL.verde : COL.rojo}"/>`).join("")}${cj(20, 120, 140, 26, "95 invertebrados", COL.verde)}${cj(170, 120, 72, 26, "5 vertebrados", COL.rojo)}${tx(130, 166, "de cada 100 especies de animales", 236)}`),
    },
    {
      html: `<h3>Esponjas y medusas</h3><p>Son los invertebrados más <b>sencillos</b> y todos viven en el agua, casi siempre en el mar.</p><p>Los <mark>poríferos</mark> o <b>esponjas</b> viven <b>fijos</b> en las rocas del fondo y parecen plantas, pero son animales. Su cuerpo tiene forma de saco y está lleno de <b>poros</b>, agujeritos por los que entra el agua. Al pasar el agua, la esponja atrapa las partículas de alimento que lleva. Antes se usaban esponjas naturales para lavarse.</p><p>Los <mark>celentéreos</mark> o cnidarios tienen el cuerpo blando, en forma de saco o de campana, con una sola abertura rodeada de <b>tentáculos</b>. Los tentáculos tienen unas células urticantes que pican y paralizan a sus presas. Hay dos formas:</p><p>• Las <b>medusas</b>, que nadan o flotan con forma de paraguas. Su cuerpo es casi todo agua y transparente.<br>• Los <b>pólipos</b>, que viven fijos, como las <b>anémonas</b> de mar y los <b>corales</b>. Los corales forman arrecifes, enormes construcciones donde viven miles de especies.</p><p>Si una medusa te pica en la playa, sal del agua, lava la zona con agua de mar (nunca dulce) y avisa a un adulto o al socorrista.</p>`,
      svg: svg("Una esponja con poros y una medusa con tentáculos", `${tit("Esponjas y medusas")}<path d="M40 160 q-8 -60 10 -100 h40 q18 40 10 100z" fill="${COL.sol}" fill-opacity=".5" stroke="${COL.sol}" stroke-width="2"/>${[[56, 80], [76, 92], [60, 110], [82, 124], [62, 140], [78, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--card)"/>`).join("")}<path d="M150 100 q34 -64 68 0z" fill="${COL.morado}" fill-opacity=".35" stroke="${COL.morado}" stroke-width="2"/>${[158, 172, 186, 200, 212].map((x) => `<path d="M${x} 100 q6 20 -2 40 q-6 14 2 26" stroke="${COL.morado}" stroke-width="1.8" fill="none"/>`).join("")}${et(70, 176, "esponja", 80, { size: 11, color: COL.sol })}${tx(232, 60, "medusa", 50, { weight: 700, color: COL.morado })}`),
    },
    {
      html: `<h3>Los gusanos</h3><p>Llamamos <mark>gusanos</mark> a muchos invertebrados de cuerpo <b>blando, alargado</b> y sin patas. Se desplazan arrastrándose o nadando. Hay tres tipos principales:</p><p>• Los <b>gusanos planos</b>, con el cuerpo aplastado como una cinta. Muchos son <b>parásitos</b>, como la <b>tenia</b>, que vive en el intestino de otros animales.</p><p>• Los <b>gusanos redondos</b>, con el cuerpo cilíndrico y fino. Algunos viven libres en el suelo y otros son parásitos, como las <b>lombrices intestinales</b> que a veces tienen los niños (por eso hay que lavarse las manos).</p><p>• Los <b>anélidos</b>, con el cuerpo dividido en <b>anillos</b>. El más conocido es la <mark>lombriz de tierra</mark>. También son anélidos las sanguijuelas.</p><p>La lombriz de tierra es una gran amiga de los agricultores. Excava galerías por las que entran el aire y el agua, y se alimenta de restos de plantas mezclados con tierra. Sus excrementos abonan el suelo y lo hacen más fértil. Por eso decimos que un suelo con lombrices es un suelo sano.</p><p>Ojo: las orugas que llamamos «gusanos» de seda no son gusanos, sino las larvas de una mariposa.</p>`,
      svg: svg("Tipos de gusanos: planos, redondos y anélidos como la lombriz", `${tit("Gusanos")}<path d="M24 66 q30 -14 60 0 q30 14 60 0" stroke="${COL.naranja}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M24 104 q40 -10 80 0 q40 10 80 0" stroke="${COL.gris}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M24 142 q50 -24 110 0 q40 16 90 0" stroke="${COL.rojo}" stroke-width="12" stroke-opacity=".55" fill="none" stroke-linecap="round"/>${[44, 64, 84, 104, 124, 144, 164, 184, 204].map((x, i) => `<path d="M${x} ${136 + (i < 5 ? -Math.sin(i / 2) * 8 : 2)} v10" stroke="var(--card)" stroke-width="1.5"/>`).join("")}${tx(210, 70, "planos", 70, { weight: 700, color: COL.naranja })}${tx(224, 108, "redondos", 60, { weight: 700, color: COL.gris })}${et(130, 172, "anélidos: lombriz con anillos", 200, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>Los moluscos</h3><p>Los <mark>moluscos</mark> tienen el cuerpo <b>blando</b>, sin segmentos, y muchos lo protegen con una <b>concha</b> dura de caliza. Casi todos tienen un <b>pie</b> musculoso para moverse. Viven en el mar, en agua dulce o en tierra húmeda. Hay tres grupos principales:</p><p>• Los <b>gasterópodos</b> tienen una concha de una sola pieza, en espiral, o no tienen concha. Se arrastran sobre su pie dejando un rastro de baba. Son el <b>caracol</b>, la babosa, la lapa o el bígaro. El caracol tiene dos pares de tentáculos; en la punta de los más largos están los ojos.</p><p>• Los <b>bivalvos</b> tienen una concha formada por <b>dos valvas</b> que se abren y se cierran como una caja. Son el <b>mejillón</b>, la almeja, la ostra o la vieira. Se alimentan filtrando el agua.</p><p>• Los <b>cefalópodos</b> tienen la cabeza rodeada de <b>tentáculos</b> con ventosas y son muy inteligentes. Son el <b>pulpo</b>, con ocho tentáculos, y el calamar y la sepia, con diez. Su concha es interna o no tienen. Cuando se sienten en peligro, lanzan una nube de <b>tinta</b> para escapar.</p>`,
      svg: svg("Los tres grupos de moluscos: caracol, mejillón y pulpo", `${tit("Moluscos")}<g transform="translate(50 100)"><circle r="20" fill="${COL.marron}" fill-opacity=".45" stroke="${COL.marron}" stroke-width="2"/><path d="M0 0 m-12 0 a12 12 0 1 0 12 -12 a6 6 0 1 0 6 6" stroke="${COL.marron}" stroke-width="2" fill="none"/><path d="M-24 18 h52 q8 0 8 -10 l6 -14 M36 -6 l4 -10" stroke="${COL.naranja}" stroke-width="4" fill="none"/></g><g transform="translate(130 100)"><path d="M-20 0 q20 -26 40 0 q-20 18 -40 0z" fill="#1e293b" fill-opacity=".7"/><path d="M-20 0 h40" stroke="#fff"/></g><g transform="translate(210 92)"><ellipse rx="16" ry="20" fill="${COL.rojo}" fill-opacity=".5"/>${[-12, -6, 0, 6, 12].map((a) => `<path d="M${a} 16 q${a / 2} 20 ${a * 1.6} 34" stroke="${COL.rojo}" stroke-width="3" stroke-opacity=".6" fill="none"/>`).join("")}</g>${et(50, 164, "gasterópodo", 76, { size: 10.5, color: COL.marron })}${et(130, 164, "bivalvo", 70, { size: 10.5, color: "var(--ink)" })}${et(210, 164, "cefalópodo", 76, { size: 10.5, color: COL.rojo })}`),
      video: vid("1Mo7uRIco44"),
    },
    {
      html: `<h3>Los equinodermos</h3><p>Los <mark>equinodermos</mark> son invertebrados que viven solo en el <b>mar</b>, normalmente en el fondo. Su nombre significa «piel con espinas», porque su cuerpo está cubierto de una piel dura con <b>placas</b> y, a veces, <b>pinchos</b>.</p><p>Tienen una forma muy especial: su cuerpo suele estar dividido en <b>cinco partes iguales</b> alrededor de un centro, como los radios de una rueda o los brazos de una estrella.</p><p>Se desplazan lentamente gracias a cientos de <b>pies ambulacrales</b>, unos tubitos blandos con ventosa en la punta que asoman por debajo de su cuerpo.</p><p>Los más conocidos son:</p><p>• La <b>estrella de mar</b>, con cinco brazos. Si pierde un brazo, ¡le vuelve a crecer! Se alimenta de mejillones y almejas, que abre a la fuerza con sus brazos.<br>• El <b>erizo de mar</b>, con forma de bola cubierta de púas. Cuidado al bañarte en zonas de rocas: pisar uno duele mucho.<br>• El <b>pepino de mar</b> u holoturia, alargado y blando.</p><p>Si encuentras una estrella de mar en la playa, obsérvala sin sacarla del agua y déjala donde estaba.</p>`,
      svg: svg("Estrella de mar con cinco brazos y erizo de mar con púas", `${tit("Equinodermos")}<path d="${[...Array(10)].map((_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 16 : 46; return `${i ? "L" : "M"}${(74 + Math.cos(a) * r).toFixed(1)} ${(102 + Math.sin(a) * r).toFixed(1)}`; }).join(" ")}z" fill="${COL.naranja}" fill-opacity=".6" stroke="${COL.naranja}" stroke-width="2"/><circle cx="190" cy="104" r="26" fill="${COL.morado}" fill-opacity=".55"/>${[...Array(16)].map((_, i) => { const a = (i * Math.PI) / 8; return `<path d="M${(190 + Math.cos(a) * 24).toFixed(1)} ${(104 + Math.sin(a) * 24).toFixed(1)} L${(190 + Math.cos(a) * 40).toFixed(1)} ${(104 + Math.sin(a) * 40).toFixed(1)}" stroke="${COL.morado}" stroke-width="2"/>`; }).join("")}${et(74, 166, "estrella de mar", 110, { size: 11, color: COL.naranja })}${et(190, 166, "erizo de mar", 110, { size: 11, color: COL.morado })}`),
    },
    {
      html: `<h3>Los artrópodos</h3><p>Los <mark>artrópodos</mark> son el grupo de animales <b>más numeroso</b> del planeta: hay más especies de artrópodos que de todos los demás animales juntos. Sus características son:</p><p>• Tienen el cuerpo cubierto por un <mark>exoesqueleto</mark>, un esqueleto externo duro, como una armadura. Como no crece con ellos, de vez en cuando lo cambian por otro más grande: es la <b>muda</b>.<br>• Tienen <b>patas articuladas</b>, formadas por piezas unidas por articulaciones, como las de un robot. De ahí viene su nombre, que significa «patas con articulaciones».<br>• Su cuerpo está dividido en partes, y muchos tienen <b>antenas</b>.</p><p>Se dividen en cuatro grupos, que se distinguen sobre todo contando las <b>patas</b>:</p><p>• <b>Insectos</b>: 6 patas. La mosca, la hormiga, la mariposa.<br>• <b>Arácnidos</b>: 8 patas. La araña, el escorpión, la garrapata.<br>• <b>Crustáceos</b>: 10 patas o más. El cangrejo, la gamba, la cochinilla de la humedad.<br>• <b>Miriápodos</b>: muchísimas patas. El ciempiés y el milpiés.</p>`,
      svg: svg("Los cuatro grupos de artrópodos según su número de patas", `${tit("Cuenta las patas")}${fichas([["Insectos", "6 patas", COL.marron], ["Arácnidos", "8 patas", COL.gris], ["Crustáceos", "10 o más", COL.rojo], ["Miriápodos", "muchísimas", COL.morado]], 2, 34)}`),
      video: vid("UWUTC6yRXo8"),
    },
    {
      html: `<h3>Los insectos</h3><p>Los <mark>insectos</mark> son los artrópodos más abundantes. Su cuerpo tiene <b>tres partes</b>:</p><p>• La <b>cabeza</b>, con dos <b>antenas</b> para oler y tocar, los <b>ojos</b> (muchos tienen ojos compuestos, formados por cientos de ojitos) y la boca, que puede ser para masticar, como la del saltamontes, o para chupar, como la trompa de la mariposa.<br>• El <b>tórax</b>, donde están las <b>seis patas</b> y, en muchos, <b>dos o cuatro alas</b>.<br>• El <b>abdomen</b>, donde están los órganos de la digestión y la reproducción.</p><p>Muchos insectos sufren una <mark>metamorfosis</mark>. La de la mariposa es completa: del <b>huevo</b> sale una <b>larva</b> u oruga que come sin parar; luego la oruga se encierra en una <b>pupa</b> o crisálida, y dentro se transforma en <b>mariposa adulta</b>. Otros, como el saltamontes, tienen una metamorfosis sencilla: las crías se parecen a los adultos, pero sin alas.</p><p>Algunos insectos viven en <b>sociedades</b> muy organizadas, con reina y obreras: las abejas, las hormigas y las termitas.</p>`,
      svg: svg("Partes de un insecto y metamorfosis de la mariposa", `${tit("Insectos")}${insecto(82, 76, 1.4)}${et(40, 112, "cabeza", 50, { size: 10, color: COL.marron })}${et(72, 50, "tórax", 40, { size: 10, color: COL.marron })}${et(116, 112, "abdomen", 56, { size: 10, color: COL.marron })}${flujo([["huevo", COL.sol], ["oruga", COL.verde], ["pupa", COL.marron], ["mariposa", COL.morado]], 130, 34)}${tx(202, 66, "6 patas", 80, { weight: 700 })}${tx(202, 84, "2 antenas", 80, { weight: 700 })}`),
    },
    {
      html: `<h3>Arácnidos, crustáceos y miriápodos</h3><p>Los otros tres grupos de artrópodos también tienen exoesqueleto y patas articuladas, pero se diferencian de los insectos:</p><p>• Los <mark>arácnidos</mark> tienen <b>ocho patas</b> y <b>no tienen antenas</b> ni alas. Su cuerpo tiene dos partes. Las <b>arañas</b> fabrican hilo de seda para tejer telarañas, en las que atrapan insectos. Los <b>escorpiones</b> tienen pinzas y un aguijón en la cola. Las <b>garrapatas</b> y los <b>ácaros</b> también son arácnidos.</p><p>• Los <mark>crustáceos</mark> tienen el exoesqueleto muy duro, con caliza, y <b>dos pares de antenas</b>. Casi todos viven en el agua y respiran por branquias. Son el cangrejo, la langosta, el bogavante, la gamba y el percebe. La <b>cochinilla de la humedad</b>, que se hace una bola al tocarla, es un crustáceo que vive en tierra.</p><p>• Los <mark>miriápodos</mark> tienen el cuerpo largo, formado por muchos anillos con patas. El <b>ciempiés</b> tiene un par de patas en cada anillo y es cazador; el <b>milpiés</b> tiene dos pares en cada anillo y come restos de plantas. ¡Ninguno tiene exactamente cien ni mil patas!</p>`,
      svg: svg("Comparación de arácnidos, crustáceos y miriápodos", `${tit("Más artrópodos")}${filas([["arácnidos", "8 patas, sin antenas", COL.gris], ["crustáceos", "2 pares de antenas", COL.rojo], ["miriápodos", "muchos anillos", COL.morado]], 52, 40, { x: 20, wa: 80, wb: 140 })}`),
    },
    {
      html: `<h3>La importancia de los invertebrados</h3><p>Aunque algunos nos dan miedo o asco, los invertebrados son <b>imprescindibles</b> para la vida en la Tierra:</p><p>• Las <b>abejas</b>, las mariposas y otros insectos <b>polinizan</b> las flores. Sin ellos no habría muchas frutas ni verduras. Las abejas, además, nos dan miel y cera.</p><p>• Las lombrices, los milpiés y muchos escarabajos <b>reciclan</b> los restos de plantas y animales y fertilizan el suelo.</p><p>• Son el <b>alimento</b> de muchísimos animales: pájaros, peces, ranas, lagartos.</p><p>• Nos dan alimentos como los mejillones, las gambas o el pulpo, y materiales como la <b>seda</b>, fabricada por el gusano de seda.</p><p>Algunos pueden ser <b>perjudiciales</b>: los mosquitos transmiten enfermedades, las plagas de langostas arrasan cosechas y los piojos y las garrapatas son parásitos.</p><p>Hoy muchas especies de insectos están disminuyendo por los pesticidas, la contaminación y la pérdida de flores. Puedes ayudar plantando flores en balcones y jardines, construyendo un <b>hotel de insectos</b> y no matando bichos sin necesidad.</p>`,
      svg: svg("Para qué sirven los invertebrados: polinizar, reciclar, alimentar y dar productos", `${tit("¡Los necesitamos!")}${fichas([["Polinizan", "abejas y mariposas", COL.sol], ["Reciclan", "lombrices", COL.marron], ["Alimentan", "a otros animales", COL.verde], ["Nos dan", "miel, seda, marisco", COL.morado]], 2, 34)}`),
    },
  ],
  figura: {
    titulo: "Los invertebrados en ocho ideas",
    svg: rejilla([
      ["Invertebrado", "sin columna vertebral", COL.verde],
      ["Esponjas", "llenas de poros", COL.sol],
      ["Medusas", "tentáculos que pican", COL.morado],
      ["Gusanos", "blandos y alargados", COL.rojo],
      ["Moluscos", "cuerpo blando y concha", COL.marron],
      ["Equinodermos", "estrella y erizo", COL.naranja],
      ["Artrópodos", "exoesqueleto y patas", COL.azul],
      ["Insectos", "6 patas, metamorfosis", COL.agua],
    ], 4, 86, "Resumen de los animales invertebrados"),
  },
  video: vgen("rzxFTrktN1c", "animales invertebrados para niños"),
  ejemplos: [
    { enunciado: "Un animal tiene 8 patas, no tiene antenas y teje una red. ¿Qué es?",
      pasos: ["Patas articuladas y exoesqueleto: artrópodo.", "Ocho patas y sin antenas: arácnido.", "Teje telarañas: araña."],
      resultado: "Una araña, un arácnido." },
    { enunciado: "Clasifica el mejillón.",
      pasos: ["Cuerpo blando con concha: molusco.", "Su concha tiene dos piezas: bivalvo."],
      resultado: "Molusco bivalvo." },
    { enunciado: "En un tarro hay 3 escarabajos y 2 arañas. ¿Cuántas patas hay en total?",
      pasos: ["Escarabajos: insectos, 6 patas cada uno: 3 × 6 = 18.", "Arañas: 8 patas cada una: 2 × 8 = 16.", "18 + 16 = 34."],
      resultado: "34 patas." },
  ],
  errores: [
    "Pensar que la araña es un insecto: tiene 8 patas y es un arácnido.",
    "Creer que la lombriz es una oruga: la lombriz es un anélido; la oruga, la larva de una mariposa.",
    "Decir que la esponja es una planta: es un animal.",
    "Pensar que el pulpo es un pez: es un molusco cefalópodo.",
    "Creer que la cochinilla de la humedad es un insecto: es un crustáceo.",
  ],
  ejercicios: [
    { q: "¿Qué es un invertebrado?", sol: "Un animal sin columna vertebral ni esqueleto interno de huesos." },
    { q: "Escribe los seis grupos principales de invertebrados.", sol: "Poríferos, celentéreos, gusanos, moluscos, equinodermos y artrópodos." },
    { q: "¿Cómo se alimenta una esponja?", sol: "Atrapando partículas del agua que entra por sus poros." },
    { q: "¿Por qué la lombriz de tierra es buena para el suelo?", sol: "Porque excava galerías que airean la tierra y sus excrementos la abonan." },
    { q: "Pon un ejemplo de cada grupo de moluscos.", sol: "Gasterópodo: caracol. Bivalvo: almeja. Cefalópodo: pulpo." },
    { q: "¿Qué es el exoesqueleto?", sol: "Un esqueleto externo y duro que cubre el cuerpo de los artrópodos." },
    { q: "Escribe las tres partes del cuerpo de un insecto.", sol: "Cabeza, tórax y abdomen." },
    { q: "Ordena la metamorfosis de la mariposa.", sol: "Huevo, oruga (larva), pupa (crisálida) y mariposa adulta." },
    { q: "Clasifica: ciempiés, gamba, mosca, escorpión.", sol: "Ciempiés: miriápodo. Gamba: crustáceo. Mosca: insecto. Escorpión: arácnido." },
    { q: "Escribe dos invertebrados útiles y dos perjudiciales.", sol: "Útiles: abeja y lombriz. Perjudiciales: mosquito y piojo." },
  ],
  quiz: [
    { q: "Los invertebrados no tienen…", o: ["columna vertebral", "boca", "células"], a: 0, e: "Columna vertebral." },
    { q: "La medusa es un…", o: ["celentéreo", "molusco", "pez"], a: 0, e: "Celentéreo." },
    { q: "La lombriz de tierra es un…", o: ["anélido", "insecto", "reptil"], a: 0, e: "Gusano anélido." },
    { q: "El caracol es un…", o: ["molusco", "artrópodo", "equinodermo"], a: 0, e: "Molusco gasterópodo." },
    { q: "El pulpo tiene…", o: ["6 tentáculos", "8 tentáculos", "10 tentáculos"], a: 1, e: "Ocho." },
    { q: "La estrella de mar es un…", o: ["pez", "equinodermo", "crustáceo"], a: 1, e: "Equinodermo." },
    { q: "Los insectos tienen…", o: ["6 patas", "8 patas", "10 patas"], a: 0, e: "Seis." },
    { q: "La araña es un…", o: ["insecto", "arácnido", "miriápodo"], a: 1, e: "Arácnido." },
    { q: "El cangrejo es un…", o: ["crustáceo", "molusco", "insecto"], a: 0, e: "Crustáceo." },
    { q: "La oruga es la … de la mariposa.", o: ["pupa", "larva", "concha"], a: 1, e: "La larva." },
  ],
  examen: [
    { q: "El grupo más numeroso de animales es el de los…", o: ["mamíferos", "artrópodos", "moluscos"], a: 1, e: "Artrópodos." },
    { q: "Los bivalvos tienen una concha de…", o: ["una pieza", "dos piezas", "espinas"], a: 1, e: "Dos valvas." },
    { q: "Cambiar el exoesqueleto se llama…", o: ["muda", "metamorfosis", "polinización"], a: 0, e: "Muda." },
    { q: "Las abejas ayudan a las plantas porque…", o: ["las riegan", "las polinizan", "las comen"], a: 1, e: "Las polinizan." },
  ],
  feynman: ["Qué es un invertebrado y qué grupos hay", "Cómo distinguir los cuatro grupos de artrópodos", "Cómo es la metamorfosis de la mariposa"],
  mapa: mapa("INVERTEBRADOS", "var(--pri)", [
    ["Sencillos", "esponjas · medusas", COL.morado],
    ["Blandos", "gusanos · moluscos", COL.rojo],
    ["Del mar", "equinodermos", COL.naranja],
    ["Artrópodos", "insectos · arácnidos…", COL.azul],
  ], 250),
  tarjetas: [
    ["Invertebrado", "Animal sin columna vertebral."],
    ["Porífero", "Esponja: animal fijo lleno de poros."],
    ["Celentéreo", "Medusa o pólipo con tentáculos que pican."],
    ["Anélido", "Gusano con el cuerpo dividido en anillos."],
    ["Molusco", "Animal de cuerpo blando, a menudo con concha."],
    ["Equinodermo", "Animal marino con piel de placas y espinas."],
    ["Exoesqueleto", "Esqueleto externo de los artrópodos."],
    ["Metamorfosis", "Gran transformación desde la cría hasta el adulto."],
  ],
  familias: ["Buscad bichos en el jardín o el parque con una lupa y contad sus patas.", "Construid un pequeño hotel de insectos con cañas y piñas.", "En la pescadería, identificad moluscos y crustáceos.", "Criad orugas de gusano de seda con hojas de morera y observad la metamorfosis."],
  profesores: PROF("Ciencias de la Naturaleza: los animales invertebrados; grupos principales; los artrópodos y sus tipos; la metamorfosis de los insectos; importancia ecológica de los invertebrados", ["Salida al patio con lupas y bandejas para observar invertebrados del suelo y devolverlos.", "Cría de gusanos de seda en el aula para seguir la metamorfosis completa.", "Clave dicotómica por número de patas, antenas y alas."]),
  fuentes: [RD, wiki("Invertebrado", "Invertebrado"), wiki("Arthropoda", "Arthropoda"), wiki("Mollusca", "Mollusca")],
  revisado: REV,
};
