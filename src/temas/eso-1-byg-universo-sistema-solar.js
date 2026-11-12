// Biología y Geología 1º ESO: el universo y el sistema solar. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "El universo y el sistema solar",
  minutos: 55,
  objetivos: ["Describir qué es el universo y cuáles son sus componentes principales", "Explicar cómo está formado el sistema solar y distinguir planetas interiores y exteriores", "Relacionar los movimientos de la Tierra con el día, la noche y las estaciones", "Explicar las fases de la Luna y los eclipses"],
  claves: ["universo", "galaxia", "Vía Láctea", "estrella", "año luz", "sistema solar", "planeta", "satélite", "rotación", "traslación", "fases lunares", "eclipse"],
  pregunta: {
    texto: "Cuando miras una estrella por la noche, ¿la estás viendo tal como es ahora mismo?",
    respuesta: "No. La luz tarda en viajar. La luz del Sol tarda unos <b>8 minutos</b> en llegar a la Tierra, y la de las estrellas que vemos de noche tarda <b>años, siglos o miles de años</b>. Así que ves cada estrella como era cuando salió esa luz: mirar al cielo es, literalmente, <b>mirar al pasado</b>. Alguna de esas estrellas podría incluso haber dejado de existir.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el universo?</h3><p>El <mark>universo</mark> es todo lo que existe: la materia, la energía, el espacio y el tiempo. Según la teoría más aceptada, la del <b>Big Bang</b>, se originó hace unos <b>13.800 millones de años</b> a partir de un estado muy caliente y muy denso, y desde entonces no ha dejado de <b>expandirse</b> y enfriarse. Al principio solo había partículas; después se formaron los primeros átomos (sobre todo hidrógeno y helio) y, con el tiempo, la gravedad fue reuniendo esa materia en <b>nubes de gas</b> que dieron lugar a las estrellas y a las galaxias. Las pruebas de esta teoría son, entre otras, que las galaxias se alejan unas de otras y que existe una débil radiación que llena todo el espacio, como un «eco» de aquel origen. El universo es tan grande que no sabemos si tiene límite.</p>`,
    },
    {
      html: `<h3>Los componentes del universo</h3><p>La materia del universo está organizada en distintos niveles. Las <mark>galaxias</mark> son enormes agrupaciones de <b>estrellas, gas y polvo</b> unidas por la gravedad; pueden ser <b>espirales</b>, <b>elípticas</b> o <b>irregulares</b>, y se agrupan a su vez en cúmulos. Nuestra galaxia es la <mark>Vía Láctea</mark>, una espiral con más de 100.000 millones de estrellas; el Sol está en uno de sus brazos, lejos del centro. Las <b>estrellas</b> son esferas de gas muy caliente que producen luz y calor gracias a reacciones nucleares en su interior. Las <b>nebulosas</b> son nubes de gas y polvo donde nacen estrellas. Alrededor de muchas estrellas giran <b>planetas</b>, y alrededor de los planetas, <b>satélites</b>. Además hay <b>asteroides</b> (rocas), <b>cometas</b> (bolas de hielo y polvo que forman una cola al acercarse al Sol) y <b>meteoroides</b>; cuando uno de estos entra en la atmósfera y se ve brillar, lo llamamos <b>estrella fugaz</b>.</p>`,
      video: { id: "8oyPWLVv3_4", titulo: "El universo, estrellas y galaxias. Vídeos educativos para niños", canal: "Happy Learning Español", vistas: 813521 },
    },
    {
      html: `<h3>Las distancias en el universo</h3><p>Las distancias en el espacio son tan grandes que los kilómetros se quedan pequeños. Dentro del sistema solar se usa la <mark>unidad astronómica</mark> (<b>ua</b>), que es la distancia media entre la Tierra y el Sol: unos <b>150 millones de kilómetros</b>. Para las estrellas y galaxias se usa el <mark>año luz</mark>, que es la <b>distancia que recorre la luz en un año</b>. Como la luz viaja a unos 300.000 km por segundo, un año luz equivale a unos <b>9,5 billones de kilómetros</b>. Ojo: aunque se llame «año», el año luz <b>mide distancias, no tiempo</b>. La estrella más cercana al Sol, Próxima Centauri, está a unos 4,2 años luz; la Vía Láctea mide unos 100.000 años luz de un extremo a otro; y la galaxia grande más cercana, Andrómeda, está a unos 2,5 millones de años luz.</p>${tabla(["Objeto", "Distancia aproximada"], [["Luna", "384.000 km (poco más de 1 segundo luz)"], ["Sol", "150 millones de km = 1 ua (8 minutos luz)"], ["Neptuno", "30 ua"], ["Próxima Centauri", "4,2 años luz"], ["Andrómeda", "2,5 millones de años luz"]])}`,
    },
    {
      html: `<h3>El sistema solar</h3><p>El <mark>sistema solar</mark> está formado por el <b>Sol</b> y todos los cuerpos que giran a su alrededor atraídos por su gravedad. Se formó hace unos <b>4.600 millones de años</b> a partir de una nube de gas y polvo que empezó a girar y a contraerse: en el centro se formó el Sol y, con el material sobrante, los planetas. El Sol es una <b>estrella mediana</b> que concentra más del 99 % de la masa del sistema solar. A su alrededor giran <b>ocho planetas</b> en órbitas casi circulares y en el mismo sentido. Además hay <b>planetas enanos</b>, como Plutón o Ceres; <b>satélites</b>, como la Luna; el <b>cinturón de asteroides</b>, entre Marte y Júpiter; y <b>cometas</b>, que vienen de las zonas más lejanas. Recuerda: el Sol <b>emite luz propia</b>; los planetas y los satélites solo <b>reflejan</b> la luz del Sol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El Sol y los ocho planetas en orden: Mercurio, Venus, Tierra y Marte, el cinturón de asteroides, y Júpiter, Saturno, Urano y Neptuno">${BG}
        <circle cx="-6" cy="90" r="40" fill="#f6b417"/>${t(16, 94, "Sol", { size: 11 })}
        ${[[48, 3, "#9a8f86"], [62, 5, "#e3b26b"], [78, 5.5, "#2b8ad8"], [93, 4, "#d6553a"]].map(([x, r, c]) => `<circle cx="${x}" cy="90" r="${r}" fill="${c}"/>`).join("")}
        ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<circle cx="${104 + (i % 2) * 3}" cy="${70 + i * 6}" r="1.4" fill="var(--muted)"/>`).join("")}
        <circle cx="128" cy="90" r="13" fill="#c99a6b"/><circle cx="168" cy="90" r="10" fill="#e5c98a"/><ellipse cx="168" cy="90" rx="18" ry="4" fill="none" stroke="#b8945a" stroke-width="2"/>
        <circle cx="203" cy="90" r="7.5" fill="#7fd1d8"/><circle cx="232" cy="90" r="7.5" fill="#3f6fd8"/>
        ${et(70, 128, "interiores: rocosos", 95, { color: COL.rojo })}${et(180, 128, "exteriores: gaseosos", 110, { color: COL.azul })}
        ${t(106, 56, "asteroides", { size: 9, color: "var(--muted)" })}
        ${t(130, 160, "distancias no a escala", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Los planetas</h3><p>Un <mark>planeta</mark> es un cuerpo que <b>gira alrededor de una estrella</b>, tiene <b>forma casi esférica</b> por su propia gravedad y ha <b>limpiado su órbita</b> de otros objetos. Plutón no cumple esta última condición y por eso desde 2006 es un <b>planeta enano</b>. Los ocho planetas se dividen en dos grupos. Los <mark>planetas interiores</mark> (Mercurio, Venus, la Tierra y Marte) están cerca del Sol, son <b>pequeños y rocosos</b>, densos y con pocos o ningún satélite. Los <mark>planetas exteriores</mark> (Júpiter, Saturno, Urano y Neptuno) están lejos, son <b>gigantes formados sobre todo por gases</b> y hielos, tienen muchos satélites y <b>anillos</b>, aunque solo los de Saturno se ven fácilmente con un telescopio pequeño. Una regla para recordar el orden: «<b>Mi Vecino Tiene Muchas Jaulas Sin Unos Nidos</b>». Júpiter es el más grande; Mercurio, el más pequeño; y Venus, el más caliente por su densa atmósfera.</p>${tabla(["Planeta", "Tipo", "Un dato"], [["Mercurio", "rocoso", "el más cercano al Sol y el más pequeño"], ["Venus", "rocoso", "el más caliente: unos 460 °C"], ["Tierra", "rocoso", "el único con vida conocida"], ["Marte", "rocoso", "rojo por el óxido de hierro"], ["Júpiter", "gaseoso", "el más grande, con una tormenta gigante"], ["Saturno", "gaseoso", "anillos muy visibles de hielo y roca"], ["Urano", "helado", "gira «tumbado» de lado"], ["Neptuno", "helado", "el más lejano, con vientos fortísimos"]])}`,
    },
    {
      html: `<h3>La Tierra, un planeta especial</h3><p>La Tierra es el tercer planeta y el único en el que, de momento, sabemos que hay vida. Esto es posible por una combinación de condiciones: está a la <b>distancia adecuada del Sol</b>, ni tan cerca que el agua hierva ni tan lejos que se congele, de modo que puede haber <mark>agua líquida</mark>; tiene una <b>atmósfera</b> que contiene oxígeno, regula la temperatura y nos protege de la radiación ultravioleta; y tiene un <b>campo magnético</b> que desvía las partículas que llegan del Sol. Su forma es casi esférica, algo achatada por los polos, y su radio mide unos 6.370 km. La Tierra tiene un satélite, la <mark>Luna</mark>, cuatro veces más pequeña, sin atmósfera ni agua líquida y cubierta de cráteres producidos por impactos. La Luna tarda lo mismo en girar sobre sí misma que en dar una vuelta a la Tierra, por eso siempre nos muestra <b>la misma cara</b>.</p>`,
    },
    {
      html: `<h3>Los movimientos de la Tierra</h3><p>La Tierra tiene dos movimientos principales. En el de <mark>rotación</mark> gira sobre sí misma, alrededor de un eje imaginario que pasa por los polos, de oeste a este; tarda <b>24 horas</b> (un día) y produce la <b>sucesión del día y la noche</b>: la mitad iluminada por el Sol está de día y la otra mitad, de noche. Por eso el Sol «sale» por el este y «se pone» por el oeste. En el de <mark>traslación</mark> gira alrededor del Sol en una órbita casi circular; tarda <b>365 días y unas 6 horas</b> (un año). Esas 6 horas sobrantes se juntan cada cuatro años en un día más, el 29 de febrero de los <b>años bisiestos</b>. El eje de la Tierra está <b>inclinado unos 23,5°</b> y siempre apunta en la misma dirección; esa inclinación, junto con la traslación, es la causa de las estaciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rotación: la Tierra gira sobre su eje inclinado en 24 horas y produce el día y la noche; traslación: da una vuelta al Sol en 365 días">${BG}
        <circle cx="70" cy="86" r="38" fill="#2b8ad8"/><path d="M70 48 A 38 38 0 0 1 70 124 Z" fill="#0d2a55" fill-opacity=".75"/>
        <path d="M58 46 L 82 126" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
        ${fl(10, 86, 32, 86, COL.sol, 2.5)}${t(18, 74, "Sol", { size: 10, color: COL.sol })}
        ${t(52, 84, "día", { size: 10, color: "#fff" })}${t(90, 100, "noche", { size: 9, color: "#fff" })}
        ${t(70, 146, "rotación: 24 h", { size: 11, color: COL.azul })}
        <ellipse cx="190" cy="86" rx="56" ry="32" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <circle cx="190" cy="86" r="11" fill="#f6b417"/><circle cx="246" cy="86" r="6" fill="#2b8ad8"/>
        ${fl(190, 54, 210, 55, "var(--muted)", 1.8)}
        ${t(190, 146, "traslación: 365 días", { size: 11, color: COL.sol })}</svg>`,
      video: { id: "6kBlgCozIQc", titulo: "Rotación y Traslación de la Tierra - Los movimientos del planeta Tierra", canal: "Smile and Learn - Español", vistas: 4775481 },
    },
    {
      html: `<h3>Las estaciones del año</h3><p>Un error muy común es pensar que en verano hace calor porque la Tierra está más cerca del Sol. No es así: en el hemisferio norte, la Tierra está más cerca del Sol a principios de enero, ¡en pleno invierno! Las <mark>estaciones</mark> se deben a la <b>inclinación del eje terrestre</b>. Durante una parte del año, el hemisferio norte está inclinado hacia el Sol: los rayos llegan <b>más perpendiculares</b>, calientan más, y los días son <b>más largos</b> que las noches; es el verano. Seis meses después ocurre lo contrario: los rayos llegan <b>más inclinados</b>, se reparten en más superficie y calientan menos, y los días son cortos; es el invierno. Por eso, cuando en España es verano, en Argentina o Australia es invierno. Los <b>solsticios</b> (hacia el 21 de junio y el 21 de diciembre) marcan el día más largo y el más corto; en los <b>equinoccios</b> (hacia el 21 de marzo y el 23 de septiembre) el día y la noche duran lo mismo.</p>`,
    },
    {
      html: `<h3>Las fases de la Luna y los eclipses</h3><p>La Luna tarda unos <b>29,5 días</b> en pasar por todas sus formas. La mitad de la Luna siempre está iluminada por el Sol, pero, según su posición alrededor de la Tierra, vemos una parte mayor o menor de esa mitad. Son las <mark>fases lunares</mark>: <b>luna nueva</b> (no se ve, está entre la Tierra y el Sol), <b>cuarto creciente</b> (se ve la mitad derecha, con forma de D en el hemisferio norte), <b>luna llena</b> (se ve entera) y <b>cuarto menguante</b> (forma de C). Un truco: la Luna es «mentirosa», porque cuando parece una C está decreciendo. A veces el Sol, la Tierra y la Luna se alinean del todo y se produce un <mark>eclipse</mark>. En un <b>eclipse de Sol</b>, la Luna se pone entre el Sol y la Tierra y tapa el Sol; solo puede ocurrir en luna nueva. En un <b>eclipse de Luna</b>, la Tierra se pone entre el Sol y la Luna, y su sombra oscurece la Luna; ocurre en luna llena. Nunca mires al Sol directamente, ni siquiera durante un eclipse: hacen falta gafas homologadas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro fases de la Luna vistas desde la Tierra: luna nueva, cuarto creciente, luna llena y cuarto menguante">${BG}
        ${[["nueva", 0], ["creciente", 1], ["llena", 2], ["menguante", 3]].map(([n, k], i) => {
          const x = 36 + i * 63, y = 76;
          const base = `<circle cx="${x}" cy="${y}" r="22" fill="#2b3245" stroke="var(--muted)" stroke-width="1.5"/>`;
          const luz = k === 2 ? `<circle cx="${x}" cy="${y}" r="22" fill="#f3e6b0"/>` : k === 1 ? `<path d="M${x} ${y - 22} A 22 22 0 0 1 ${x} ${y + 22} Z" fill="#f3e6b0"/>` : k === 3 ? `<path d="M${x} ${y - 22} A 22 22 0 0 0 ${x} ${y + 22} Z" fill="#f3e6b0"/>` : "";
          return base + luz + t(x, 122, n, { size: 10 });
        }).join("")}
        ${t(130, 30, "29,5 días de una luna nueva a otra", { size: 10, weight: 400, color: "var(--muted)" })}
        ${t(130, 152, "creciente: D · menguante: C", { size: 10.5, color: COL.azul })}</svg>`,
    },
  ],
  figura: {
    titulo: "Del universo a la Tierra",
    svg: rejilla([
      ["Universo", "todo lo que existe; Big Bang", COL.morado],
      ["Galaxias", "estrellas, gas y polvo", COL.azul],
      ["Vía Láctea", "nuestra galaxia espiral", COL.agua],
      ["Sol", "estrella mediana con luz propia", COL.sol],
      ["Interiores", "Mercurio, Venus, Tierra, Marte", COL.rojo],
      ["Exteriores", "Júpiter, Saturno, Urano, Neptuno", COL.naranja],
      ["Rotación", "24 h: día y noche", COL.verde],
      ["Traslación", "365 días: el año", COL.marron],
    ], 4, 86, "Resumen: universo, galaxias, Vía Láctea, Sol, planetas interiores y exteriores, rotación y traslación"),
  },
  video: { id: "wSFeXHW3KhU", titulo: "¿Cómo es el Sistema Solar realmente? Imágenes reales", canal: "Astronomiaweb", vistas: 2423963, megusta: 0, busqueda: "sistema solar planetas explicación" },
  ejemplos: [
    { enunciado: "La luz recorre unos 300.000 km cada segundo. ¿Cuánto tarda en llegar la luz del Sol a la Tierra, que está a 150 millones de km?",
      pasos: ["Divide la distancia entre la velocidad: 150.000.000 ÷ 300.000 = 500 segundos.", "Pasa a minutos: 500 ÷ 60 ≈ 8,3 minutos."],
      resultado: "Unos 8 minutos: vemos el Sol como era hace 8 minutos." },
    { enunciado: "Clasifica Marte, Saturno, Venus y Neptuno en planetas interiores o exteriores y di qué tienen en común los de cada grupo.",
      pasos: ["Interiores (antes del cinturón de asteroides): Marte y Venus.", "Exteriores (después): Saturno y Neptuno.", "Interiores: pequeños, rocosos y con pocos satélites. Exteriores: gigantes de gas y hielo, con muchos satélites y anillos."],
      resultado: "Interiores: Venus y Marte. Exteriores: Saturno y Neptuno." },
    { enunciado: "Lucía, que vive en Madrid, dice que en julio hace calor porque la Tierra está más cerca del Sol. ¿Tiene razón?",
      pasos: ["La distancia al Sol cambia muy poco a lo largo del año y la Tierra está más cerca en enero.", "La causa es la inclinación del eje: en julio el hemisferio norte se inclina hacia el Sol.", "Los rayos llegan más perpendiculares y los días son más largos, así que se calienta más."],
      resultado: "No: el verano se debe a la inclinación del eje, no a la distancia." },
  ],
  errores: [
    "Pensar que el año luz es una medida de tiempo: es una distancia.",
    "Creer que las estaciones se deben a que la Tierra se acerca o se aleja del Sol.",
    "Decir que la Luna tiene luz propia: solo refleja la del Sol.",
    "Confundir rotación (día y noche) con traslación (año y estaciones).",
    "Pensar que las fases de la Luna se deben a la sombra de la Tierra: eso es un eclipse.",
    "Llamar «planeta» al Sol: es una estrella.",
  ],
  ejercicios: [
    { q: "¿Qué es el universo y cuándo se originó según la teoría del Big Bang?", sol: "Todo lo que existe (materia, energía, espacio y tiempo). Hace unos 13.800 millones de años, y desde entonces se expande." },
    { q: "Ordena de mayor a menor: planeta, galaxia, sistema solar, satélite.", sol: "Galaxia > sistema solar > planeta > satélite." },
    { q: "¿Qué es una unidad astronómica? ¿Y un año luz?", sol: "La ua es la distancia media Tierra-Sol (150 millones de km). El año luz es la distancia que recorre la luz en un año (unos 9,5 billones de km)." },
    { q: "¿Por qué Plutón ya no se considera un planeta?", sol: "Porque no ha limpiado su órbita de otros objetos; es un planeta enano." },
    { q: "Escribe los ocho planetas en orden desde el Sol.", sol: "Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno." },
    { q: "Di tres diferencias entre los planetas interiores y los exteriores.", sol: "Interiores: pequeños, rocosos y con pocos satélites. Exteriores: grandes, gaseosos o helados, con muchos satélites y anillos." },
    { q: "¿Qué condiciones hacen posible la vida en la Tierra?", sol: "Agua líquida por estar a la distancia adecuada del Sol, una atmósfera con oxígeno que regula la temperatura y protege, y un campo magnético protector." },
    { q: "¿Qué movimiento produce el día y la noche? ¿Cuánto dura?", sol: "La rotación, que dura 24 horas." },
    { q: "Si es invierno en España, ¿qué estación es en Australia? ¿Por qué?", sol: "Verano, porque están en hemisferios distintos: cuando el norte se inclina lejos del Sol, el sur se inclina hacia él." },
    { q: "¿En qué fase debe estar la Luna para que haya un eclipse de Sol? ¿Por qué?", sol: "En luna nueva, porque la Luna tiene que estar entre el Sol y la Tierra." },
  ],
  quiz: [
    { q: "Según el Big Bang, el universo se formó hace unos…", o: ["13.800 millones de años", "4.600 millones de años", "6.000 años"], a: 0, e: "13.800 millones de años." },
    { q: "Nuestra galaxia se llama…", o: ["Andrómeda", "Vía Láctea", "Orión"], a: 1, e: "La Vía Láctea, una espiral." },
    { q: "El año luz mide…", o: ["tiempo", "distancia", "temperatura"], a: 1, e: "Una distancia." },
    { q: "¿Cuál es un planeta interior?", o: ["Júpiter", "Marte", "Urano"], a: 1, e: "Marte es rocoso e interior." },
    { q: "El planeta más grande es…", o: ["Saturno", "Júpiter", "la Tierra"], a: 1, e: "Júpiter." },
    { q: "El cinturón de asteroides está entre…", o: ["Marte y Júpiter", "la Tierra y Marte", "Saturno y Urano"], a: 0, e: "Entre Marte y Júpiter." },
    { q: "La rotación de la Tierra dura…", o: ["24 horas", "365 días", "29,5 días"], a: 0, e: "Un día." },
    { q: "Las estaciones se deben a…", o: ["la distancia al Sol", "la inclinación del eje", "la Luna"], a: 1, e: "A la inclinación del eje y la traslación." },
    { q: "En luna llena la Luna se ve…", o: ["entera", "la mitad", "nada"], a: 0, e: "Entera." },
    { q: "En un eclipse de Luna…", o: ["la Luna tapa el Sol", "la sombra de la Tierra cubre la Luna", "el Sol tapa la Luna"], a: 1, e: "La Tierra está entre el Sol y la Luna." },
  ],
  examen: [
    { q: "La luz del Sol tarda en llegar a la Tierra unos…", o: ["8 segundos", "8 minutos", "8 horas"], a: 1, e: "Unos 8 minutos." },
    { q: "Un año bisiesto existe porque la traslación dura…", o: ["365 días y unas 6 horas", "364 días", "366 días justos"], a: 0, e: "Las 6 horas se juntan cada cuatro años." },
    { q: "Plutón es…", o: ["un planeta enano", "un satélite", "una estrella"], a: 0, e: "Planeta enano desde 2006." },
  ],
  feynman: ["Qué es un año luz y por qué se usa", "Por qué hay día y noche y por qué hay estaciones", "Cómo se producen las fases de la Luna y los eclipses"],
  mapa: mapa("UNIVERSO", "var(--eso)", [
    ["Universo", "Big Bang · galaxias · estrellas", COL.morado],
    ["Sistema solar", "Sol · 8 planetas · asteroides", COL.sol],
    ["Tierra", "agua · atmósfera · Luna", COL.agua],
    ["Movimientos", "rotación · traslación · fases", COL.verde],
  ], 280),
  tarjetas: [
    ["Universo", "Todo lo que existe; se originó con el Big Bang."],
    ["Galaxia", "Agrupación de estrellas, gas y polvo; la nuestra es la Vía Láctea."],
    ["Año luz", "Distancia que recorre la luz en un año: unos 9,5 billones de km."],
    ["Planeta", "Gira alrededor de una estrella, es casi esférico y limpia su órbita."],
    ["Planetas interiores", "Mercurio, Venus, Tierra y Marte: pequeños y rocosos."],
    ["Rotación", "Giro de la Tierra sobre su eje en 24 h: día y noche."],
    ["Traslación", "Vuelta de la Tierra al Sol en 365 días y 6 h."],
    ["Eclipse de Sol", "La Luna se interpone entre el Sol y la Tierra."],
  ],
  familias: ["Salid una noche despejada lejos de las luces y buscad la Luna y algún planeta brillante (Venus o Júpiter).", "Anotad durante un mes la forma de la Luna cada noche y comprobad el ciclo de las fases.", "Con una linterna (el Sol) y una naranja (la Tierra) explicad por qué hay día y noche."],
  profesores: {
    saberes: "La Tierra en el universo: origen y componentes del universo, sistema solar, características de la Tierra que permiten la vida, movimientos terrestres, estaciones, fases lunares y eclipses (RD 217/2022, Biología y Geología de 1º a 3º de ESO, bloque Geología y planeta Tierra).",
    ideas: ["Modelo a escala del sistema solar en el patio (1 m = 10 millones de km).", "Simulación de fases lunares con una pelota blanca y una lámpara.", "Diario de observación del cielo con una aplicación de planetario gratuita."],
  },
  fuentes: [RD, wiki("Sistema solar", "Sistema_solar"), wiki("Año luz", "Año_luz"), { t: "Instituto Geográfico Nacional: astronomía", url: "https://www.ign.es/web/ign/portal/astronomia" }],
  revisado: REV,
};
