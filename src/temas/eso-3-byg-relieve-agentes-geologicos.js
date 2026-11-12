// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El relieve y los agentes geológicos",
  minutos: 55,
  objetivos: ["Diferenciar los procesos geológicos internos y externos", "Explicar la meteorización, la erosión, el transporte y la sedimentación", "Reconocer las formas de relieve que crean los ríos, el agua subterránea, los glaciares, el viento y el mar", "Valorar los riesgos geológicos y el papel del ser humano"],
  claves: ["relieve", "meteorización", "erosión", "transporte", "sedimentación", "modelado kárstico", "glaciar", "riesgo geológico"],
  pregunta: {
    texto: "Los Pirineos llevan millones de años perdiendo roca por la lluvia, el hielo y los ríos. ¿Por qué siguen teniendo picos de más de 3.000 metros?",
    respuesta: "Porque hay dos fuerzas enfrentadas. Los <mark>procesos internos</mark>, movidos por el calor de la Tierra, levantan las montañas. Los <mark>procesos externos</mark>, movidos por el Sol y la gravedad, las desgastan. El relieve que vemos es el resultado, en cada momento, de esa competición.",
  },
  bloques: [
    {
      html: `<h3>Dos fuerzas que modelan el relieve</h3><p>El <b>relieve</b> es el conjunto de formas de la superficie terrestre: montañas, valles, llanuras, costas. Lo construyen y lo destruyen dos tipos de procesos. Los <mark>procesos internos</mark> se deben a la energía del interior de la Tierra: mueven las placas, forman cordilleras, provocan volcanes y terremotos. Tienden a <b>levantar</b> el relieve. Los <mark>procesos externos</mark> se deben a la energía del Sol, que mueve el agua y el aire, y a la gravedad. Los realizan los <b>agentes geológicos externos</b>: el agua, el hielo, el viento, el mar y los seres vivos. Tienden a <b>allanar</b> el relieve.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una montaña: el calor interno la levanta desde abajo y el agua, el hielo y el viento la desgastan desde arriba">${BG}
        <path d="M14 150 L 90 60 L 120 80 L 150 40 L 246 150 Z" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/>
        <path d="M140 52 L 150 40 L 160 52 Z" fill="#fff"/>
        ${fl(130, 176, 130, 132, "var(--red)", 3)}${t(170, 172, "procesos internos", { size: 10, anchor: "start", color: "var(--red)" })}
        ${[[60, 30], [80, 22], [100, 30]].map(([x, y]) => `<path d="M${x} ${y} l -3 8" stroke="var(--water)" stroke-width="2"/>`).join("")}
        ${fl(200, 50, 172, 70, "var(--inf)")}${t(130, 18, "procesos externos: agua, hielo, viento", { size: 10, color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>Las etapas del modelado</h3><p>Los agentes externos actúan siempre en cuatro etapas. La <b>meteorización</b> rompe o altera las rocas en el mismo sitio donde están, sin moverlas. La <b>erosión</b> arranca los fragmentos sueltos. El <b>transporte</b> los lleva a otro lugar, arrastrados, rodando o disueltos en el agua; durante el viaje se redondean y se hacen más pequeños. Finalmente, la <b>sedimentación</b> los deposita cuando el agente pierde fuerza, por ejemplo en la desembocadura de un río. Con el tiempo, esos <b>sedimentos</b> se compactan y forman nuevas <mark>rocas sedimentarias</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro etapas en una ladera: meteorización en la cumbre, erosión, transporte por el río y sedimentación en el mar">${BG}
        <path d="M14 40 L 60 30 L 100 70 Q 150 120 200 130 H 246 V 170 H 14 Z" fill="#c9a37a"/>
        <rect x="200" y="130" width="46" height="40" fill="var(--water)" fill-opacity=".5"/>
        <path d="M60 34 Q 100 74 130 98 Q 166 124 200 132" stroke="var(--water)" stroke-width="5" fill="none"/>
        ${[[220, 160], [228, 156], [236, 162], [214, 164]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#8a6a4a"/>`).join("")}
        ${[["1 meteorización", 20, 22], ["2 erosión", 108, 52], ["3 transporte", 150, 92], ["4 sedimentación", 120, 150]].map(([n, x, y]) => t(x, y, n, { size: 10, anchor: "start", color: "var(--ink)" })).join("")}</svg>`,
    },
    {
      html: `<h3>La meteorización</h3><p>La <b>meteorización física</b> rompe la roca sin cambiar sus minerales. La más importante en climas fríos es la <mark>gelifracción</mark>: el agua entra en las grietas, se congela por la noche, aumenta su volumen casi un 10 % y actúa como una cuña que parte la roca. En los desiertos, los cambios bruscos de temperatura entre el día y la noche también la agrietan. La <b>meteorización química</b> cambia los minerales: el agua de lluvia, ligeramente ácida, <mark>disuelve</mark> la caliza y transforma el feldespato del granito en arcilla. Las raíces y los líquenes también colaboran.</p>`,
    },
    {
      html: `<h3>Las aguas de arroyada y los torrentes</h3><p>Cuando llueve, parte del agua corre por la superficie sin cauce fijo: son las <b>aguas de arroyada</b>. En terrenos blandos y sin vegetación, como las arcillas, excavan surcos que con el tiempo se hacen profundos, las <b>cárcavas</b>, y forman paisajes desolados llamados <mark>badlands</mark>, como los del desierto de Tabernas en Almería o las Bardenas Reales en Navarra. Los <b>torrentes</b> son cursos de agua cortos y de mucha pendiente que solo llevan agua tras las lluvias: excavan en la cabecera, transportan por un canal y depositan en un <b>cono de deyección</b> al llegar al llano.</p>`,
    },
    {
      html: `<h3>Los ríos</h3><p>Los <b>ríos</b> son corrientes de agua permanentes y el agente externo que más modifica el relieve de la Tierra. En su <b>curso alto</b>, con mucha pendiente, <mark>erosionan</mark> y excavan <b>valles en forma de V</b>, gargantas y cañones. En el <b>curso medio</b>, con menos pendiente, sobre todo <mark>transportan</mark>, y el cauce forma curvas llamadas <b>meandros</b>. En el <b>curso bajo</b>, casi llano, <mark>sedimentan</mark> y forman llanuras de inundación. En la desembocadura pueden crear un <b>delta</b>, si depositan más sedimento del que el mar se lleva, como el del Ebro, o un <b>estuario</b>, si el mar entra en el río.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfil de un río: curso alto con valle en V y erosión, curso medio con meandros y transporte, curso bajo con sedimentación y delta">${BG}
        <path d="M14 30 Q 80 120 140 140 Q 200 156 246 158" stroke="var(--water)" stroke-width="5" fill="none"/>
        <path d="M14 26 L 14 170 H 246 V 162 Q 200 158 140 144 Q 80 126 14 34" fill="#c9a37a" fill-opacity=".5"/>
        <path d="M30 80 L 46 110 L 62 80" stroke="var(--ink)" stroke-width="2" fill="none"/>
        <path d="M110 118 q 8 -10 16 0 t 16 0" stroke="var(--water)" stroke-width="3" fill="none"/>
        <path d="M216 158 L 230 146 L 246 150 M216 158 L 236 168" stroke="#8a6a4a" stroke-width="2" fill="none"/>
        ${t(46, 24, "alto: erosión", { size: 10, color: "var(--red)" })}${t(130, 92, "medio: transporte", { size: 10, color: "#b8860b" })}${t(204, 128, "bajo: sedimenta", { size: 10, color: "var(--leaf)" })}${t(232, 140, "delta", { size: 9, color: "#8a6a4a" })}</svg>`,
    },
    {
      html: `<h3>Las aguas subterráneas y el karst</h3><p>Parte del agua de lluvia se infiltra en el suelo y forma <b>acuíferos</b>, rocas porosas empapadas de agua de las que sacamos agua con pozos y que salen al exterior en los <b>manantiales</b>. En las zonas de <b>caliza</b>, el agua con dióxido de carbono disuelve la roca y crea el <mark>modelado kárstico</mark>. En superficie aparecen el <b>lapiaz</b>, con surcos y aristas, y las <b>dolinas</b>, hundimientos circulares. Bajo tierra se forman <b>cuevas</b>, donde el goteo de agua deposita la caliza de nuevo y crea <b>estalactitas</b>, que cuelgan del techo, y <b>estalagmitas</b>, que crecen desde el suelo. Un ejemplo famoso es la Ciudad Encantada de Cuenca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paisaje kárstico: dolina en superficie y cueva con estalactitas y estalagmitas bajo tierra">${BG}
        <rect x="14" y="40" width="232" height="130" fill="#d8d0b8"/><path d="M14 40 H 90 Q 110 70 130 40 H 246" stroke="#8a7a5a" stroke-width="3" fill="none"/>
        <path d="M50 100 Q 60 80 130 84 Q 210 80 220 110 Q 216 146 130 148 Q 46 146 50 100 Z" fill="var(--paper)" stroke="#8a7a5a" stroke-width="2"/>
        ${[80, 104, 150, 176, 196].map((x, i) => `<path d="M${x - 5} ${84 + (i % 2) * 2} L ${x} ${104 + (i % 3) * 6} L ${x + 5} ${84 + (i % 2) * 2} Z" fill="#b8a77a"/>`).join("")}
        ${[92, 140, 186].map((x, i) => `<path d="M${x - 6} 148 L ${x} ${126 + i * 4} L ${x + 6} 148 Z" fill="#b8a77a"/>`).join("")}
        ${t(110, 30, "dolina", { size: 11 })}${t(230, 70, "caliza", { size: 10, anchor: "end", color: "#8a7a5a" })}${t(130, 120, "cueva", { size: 11, color: "var(--muted)" })}
        ${t(30, 72, "estalactita", { size: 9, anchor: "start" })}${t(240, 162, "estalagmita", { size: 9, anchor: "end" })}</svg>`,
      video: { id: "-AGTkMzJ0eM", titulo: "El MODELADO KÁRSTICO y sus formas de relieve", canal: "Daniel Geohistoria", vistas: 40384 },
    },
    {
      html: `<h3>Los glaciares</h3><p>Un <b>glaciar</b> es una gran masa de hielo que se forma donde la nieve se acumula año tras año sin fundirse y que se desliza lentamente ladera abajo por su propio peso. Hay glaciares de casquete, que cubren continentes como la Antártida, y glaciares de montaña. Estos nacen en un <b>circo</b>, una hoya donde se acumula el hielo, y bajan por una <b>lengua</b> que excava un <mark>valle en forma de U</mark>. Las rocas que arrastra se depositan en las <b>morrenas</b>. Hace 20.000 años los glaciares cubrían parte de los Pirineos y de Sierra Nevada; sus valles en U todavía se ven.</p>`,
      video: { id: "7VLuKxIlaOA", titulo: "GLACIARES. Relieve Glaciar", canal: "GEOLOGIA EN EL CAMPO", vistas: 21485 },
    },
    {
      html: `<h3>El viento</h3><p>El viento es un agente importante en los <b>desiertos</b>, donde no hay vegetación que sujete el suelo. Erosiona de dos formas: la <b>deflación</b>, que levanta y se lleva la arena fina y deja suelos de piedras, y la <b>abrasión</b>, cuando los granos de arena chocan contra las rocas como un chorro de arena y las pulen, a veces con formas de seta. El viento transporta la arena y la deposita formando <mark>dunas</mark>, montículos que avanzan con el viento. El polvo del Sahara llega a menudo a la península ibérica y a Canarias, tiñendo el cielo de naranja: es la <b>calima</b>.</p>`,
    },
    {
      html: `<h3>El mar</h3><p>El mar modela la costa con las <b>olas</b>, las <b>corrientes</b> y las <b>mareas</b>. Las olas golpean las costas rocosas, las socavan por la base y forman <mark>acantilados</mark> que retroceden con el tiempo; al pie queda una <b>plataforma de abrasión</b>. En las zonas abrigadas, el mar deposita arena y forma <b>playas</b>. Las corrientes paralelas a la costa pueden construir <b>flechas litorales</b> y cerrar <b>albuferas</b>, lagunas de agua salada como la de Valencia. Un <b>tómbolo</b> es una barra de arena que une una isla con tierra, como el de Gibraltar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Costa con un acantilado erosionado por las olas a la izquierda y una playa de arena en una bahía a la derecha">${BG}
        <rect x="14" y="110" width="232" height="60" fill="var(--water)" fill-opacity=".45"/>
        <path d="M14 40 H 80 L 86 100 Q 80 112 74 112 H 14 Z" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/><path d="M80 100 Q 86 108 80 112" fill="var(--water)" fill-opacity=".6"/>
        <path d="M96 118 q 8 -8 16 0 M120 124 q 8 -8 16 0" stroke="var(--inf)" stroke-width="2.5" fill="none"/>
        <path d="M160 112 Q 200 96 246 92 V 112 Z" fill="#f2d9a0" stroke="#d0b070" stroke-width="2"/>
        ${t(46, 32, "acantilado", { size: 11 })}${t(206, 84, "playa", { size: 11, color: "#b8860b" })}${t(118, 150, "olas", { size: 11, color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>Los seres vivos y el ser humano</h3><p>Los seres vivos también son agentes geológicos. Las <b>raíces</b> de los árboles agrandan las grietas de las rocas; las lombrices y otros animales remueven el suelo; los corales construyen arrecifes enormes. Pero hoy el agente que más rápido cambia el relieve es el <mark>ser humano</mark>: excava minas y canteras, construye embalses que retienen los sedimentos de los ríos (por eso el delta del Ebro está retrocediendo), canaliza cauces, rellena zonas costeras y elimina la vegetación, lo que acelera la erosión. La pérdida de suelo fértil por erosión afecta gravemente a gran parte de España.</p>`,
    },
    {
      html: `<h3>Los riesgos geológicos externos</h3><p>Algunos procesos externos pueden causar daños: son <b>riesgos geológicos</b>. Las <mark>inundaciones</mark> ocurren cuando un río se desborda tras lluvias intensas; en el Mediterráneo son frecuentes en otoño con las DANA, como la de Valencia en 2024. Los <b>deslizamientos</b> y desprendimientos de ladera arrastran rocas y tierra. Los <b>aludes</b> son masas de nieve que caen por las pendientes. Se pueden <b>prevenir</b> sus daños: no construir en cauces ni zonas inundables, repoblar las laderas con vegetación, construir muros y redes de protección, y vigilar los avisos meteorológicos.</p>`,
    },
  ],
  figura: {
    titulo: "Cada agente, su relieve",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Formas de relieve de cada agente: río, valle en V, meandro, delta; karst, dolina y cueva; glaciar, valle en U y morrena; viento, dunas; mar, acantilado y playa">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Ríos", "valle en V · meandro · delta", "var(--water)"], ["Agua subterránea", "dolina · cueva · estalactita", "#8a7a5a"], ["Glaciares", "circo · valle en U · morrena", "var(--inf)"], ["Viento", "dunas · rocas en seta", "#b8860b"], ["Mar", "acantilado · playa · tómbolo", "var(--pen)"]].map(([n, d, c], i) => { const y = 20 + i * 46; return `<rect x="20" y="${y}" width="600" height="38" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(36, y + 25, n, { size: 15, anchor: "start", color: c, font: D })}${t(250, y + 25, d, { size: 13, anchor: "start", weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "Ehsclk52JXw", titulo: "Dinámica externa de la Tierra. Meteorización, erosión, transporte y sedimentación", canal: "larrambla", vistas: 139561, megusta: 0, busqueda: "agentes geológicos externos erosión" },
  ejemplos: [
    { enunciado: "En lo alto de una montaña de 2.500 m ves bloques de roca angulosos amontonados al pie de una pared. ¿Qué proceso los ha formado?",
      pasos: ["A esa altura hiela casi todas las noches durante gran parte del año.", "El agua de las grietas se congela, aumenta de volumen y parte la roca.", "Los fragmentos caen por la gravedad y quedan angulosos porque no han sido transportados."],
      resultado: "gelifracción (meteorización física)." },
    { enunciado: "Un río arrastra cantos rodados redondeados en su desembocadura, pero en su nacimiento las piedras son angulosas. Explica la diferencia.",
      pasos: ["En el nacimiento, los fragmentos acaban de desprenderse.", "Durante el transporte chocan entre sí y con el cauce.", "Se desgastan las aristas y se hacen más pequeños y redondos."],
      resultado: "el transporte los redondea; cuanto más largo el viaje, más redondos." },
    { enunciado: "Un embalse retiene el 90 % de los sedimentos de un río. ¿Qué le pasará a su delta?",
      pasos: ["Un delta crece si el río aporta más sedimento del que el mar se lleva.", "Si el embalse retiene casi todo, llega muy poco a la desembocadura.", "El mar sigue erosionando igual."],
      resultado: "el delta retrocederá, como ocurre en el delta del Ebro." },
  ],
  errores: [
    "Confundir meteorización y erosión: la meteorización rompe la roca sin moverla; la erosión la arranca.",
    "Pensar que los procesos externos levantan montañas: tienden a allanar; levantan los internos.",
    "Confundir estalactitas (cuelgan del techo) con estalagmitas (crecen desde el suelo).",
    "Decir que los valles glaciares tienen forma de V: tienen forma de U; los fluviales, de V.",
    "Creer que el ser humano no es un agente geológico: hoy es uno de los más rápidos.",
  ],
  ejercicios: [
    { q: "Diferencia procesos geológicos internos y externos según su energía y su efecto.", sol: "Internos: energía del interior de la Tierra; levantan el relieve. Externos: energía solar y gravedad; desgastan y allanan el relieve." },
    { q: "Ordena y define las cuatro etapas de la acción de un agente externo.", sol: "Meteorización (rotura en el sitio), erosión (arranque), transporte (traslado) y sedimentación (depósito)." },
    { q: "Explica la gelifracción y di en qué climas es frecuente.", sol: "El agua de las grietas se congela, aumenta de volumen y rompe la roca. Es frecuente en climas fríos y en alta montaña, con heladas nocturnas." },
    { q: "¿Por qué la caliza forma cuevas y el granito no?", sol: "Porque el agua ligeramente ácida disuelve la caliza (meteorización química), mientras que el granito no se disuelve, sino que se altera a arcilla." },
    { q: "Describe qué hace un río en cada uno de sus cursos.", sol: "Alto: erosiona y forma valles en V. Medio: transporta y forma meandros. Bajo: sedimenta y forma llanuras y deltas." },
    { q: "¿Qué diferencia hay entre un delta y un estuario?", sol: "En el delta el río deposita más sedimento del que el mar se lleva y gana terreno al mar. En el estuario el mar entra en la desembocadura." },
    { q: "Nombra tres formas de relieve glaciar.", sol: "Circo, valle en U y morrena." },
    { q: "¿Qué son la deflación y la abrasión eólicas?", sol: "Deflación: el viento levanta y se lleva las partículas finas. Abrasión: la arena que transporta el viento golpea y pule las rocas." },
    { q: "¿Cómo se forma un acantilado y por qué retrocede?", sol: "Las olas golpean la base de una costa rocosa y la socavan; la parte superior se queda sin apoyo y se desploma, así que el acantilado retrocede tierra adentro." },
    { q: "Propón tres medidas para reducir el riesgo de inundación en una ciudad.", sol: "No construir en zonas inundables ni en cauces, mantener limpios los cauces y crear zonas verdes que absorban el agua; además, sistemas de alerta." },
  ],
  quiz: [
    { q: "Los procesos externos los mueven…", o: ["el calor interno", "el Sol y la gravedad", "los terremotos"], a: 1, e: "El Sol y la gravedad." },
    { q: "Romper la roca sin moverla es…", o: ["erosión", "meteorización", "sedimentación"], a: 1, e: "Meteorización." },
    { q: "La gelifracción la produce…", o: ["el hielo en las grietas", "el viento", "las olas"], a: 0, e: "El agua que se congela." },
    { q: "Los meandros son típicos del curso…", o: ["alto", "medio", "de un glaciar"], a: 1, e: "Del curso medio." },
    { q: "Un valle en U lo forma…", o: ["un río", "un glaciar", "el viento"], a: 1, e: "Un glaciar." },
    { q: "Las estalactitas…", o: ["cuelgan del techo", "crecen del suelo", "son de hielo"], a: 0, e: "Cuelgan del techo." },
    { q: "El modelado kárstico se da en…", o: ["granito", "caliza", "arcilla"], a: 1, e: "En caliza." },
    { q: "Las dunas las forma…", o: ["el mar", "el viento", "el hielo"], a: 1, e: "El viento." },
    { q: "Un tómbolo une…", o: ["dos ríos", "una isla con tierra", "dos montañas"], a: 1, e: "Una isla con la costa." },
    { q: "Los badlands se forman por…", o: ["aguas de arroyada", "glaciares", "volcanes"], a: 0, e: "Arroyada sobre terrenos blandos." },
  ],
  examen: [
    { q: "La etapa en la que se depositan los materiales es…", o: ["la sedimentación", "la erosión", "la meteorización"], a: 0, e: "Sedimentación." },
    { q: "Un delta se forma en…", o: ["el curso alto", "la desembocadura", "una cueva"], a: 1, e: "En la desembocadura." },
    { q: "Las morrenas son depósitos de…", o: ["ríos", "glaciares", "viento"], a: 1, e: "De glaciares." },
  ],
  feynman: ["Por qué el relieve es una competición entre procesos internos y externos", "Las cuatro etapas de la acción de un agente externo", "Qué formas crea cada agente: ríos, karst, glaciares, viento y mar"],
  mapa: mapa("AGENTES EXTERNOS", "var(--eso)", [
    ["Etapas", "meteorizar · erosionar · transportar · sedimentar", "var(--ink)"],
    ["Agua", "ríos · torrentes · karst", "var(--water)"],
    ["Hielo y viento", "glaciares · dunas", "var(--inf)"],
    ["Mar y humanos", "acantilados · playas · embalses", "var(--pen)"],
  ], 300),
  tarjetas: [
    ["Meteorización", "Rotura o alteración de las rocas en su sitio."],
    ["Erosión", "Arranque de los materiales por un agente externo."],
    ["Sedimentación", "Depósito de los materiales cuando el agente pierde fuerza."],
    ["Gelifracción", "Rotura de rocas por el hielo que se forma en sus grietas."],
    ["Valle en V y en U", "V: fluvial. U: glaciar."],
    ["Modelado kárstico", "Formas creadas por la disolución de la caliza: dolinas, cuevas, estalactitas."],
    ["Delta", "Depósito de sedimentos en la desembocadura de un río."],
    ["Riesgo geológico", "Proceso natural que puede causar daños, como una inundación."],
  ],
  familias: ["En una excursión, buscad un ejemplo de meteorización, de erosión y de sedimentación y fotografiadlo.", "Consultad el mapa de zonas inundables de vuestro municipio.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Geología: procesos geológicos externos e internos, agentes geológicos y formas de modelado, riesgos geológicos y el papel del ser humano (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Mesa de arena con agua para simular erosión, meandros y deltas.", "Disolución de una tiza o una caliza en vinagre para ver la meteorización química.", "Lectura de un mapa topográfico o de fotos aéreas del IGN para identificar formas de relieve."],
  },
  fuentes: [RD, wiki("Erosión", "Erosi%C3%B3n"), wiki("Karst", "Karst")],
  revisado: "2026-11-12",
};
