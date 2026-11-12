// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El relieve, los climas y los paisajes",
  minutos: 35,
  objetivos: ["Describir las principales formas del relieve continental y costero", "Distinguir tiempo y clima y explicar los factores del clima", "Relacionar cada clima con su paisaje natural"],
  claves: ["relieve", "tiempo", "clima", "temperatura", "precipitación", "paisaje"],
  pregunta: {
    texto: "Madrid y Nueva York están casi a la misma latitud. Sin embargo, en Nueva York los inviernos son mucho más fríos y nevados. ¿Cómo puede ser, si el Sol llega igual a las dos?",
    respuesta: "Porque el clima no depende solo de la latitud. Influyen la <mark>altitud</mark>, la <b>distancia al mar</b>, las <b>corrientes marinas</b> y los <b>vientos</b>. A Nueva York le llegan en invierno masas de aire muy frío del interior de Canadá; a España, en cambio, llegan vientos más suaves del Atlántico y el Mediterráneo templa las costas.",
  },
  bloques: [
    {
      html: `<h3>Las formas del relieve</h3><p>El <b>relieve</b> son las formas de la superficie terrestre. En el interior de los continentes destacan las <mark>montañas</mark> y <b>cordilleras</b> (elevaciones agrupadas), las <b>mesetas</b> (llanuras elevadas), las <b>llanuras</b> (terrenos bajos y planos), los <b>valles</b> y las <b>depresiones</b> (zonas hundidas). En la costa aparecen <b>cabos</b>, <b>golfos</b>, <b>bahías</b>, <b>penínsulas</b>, <b>islas</b>, <b>playas</b> y <b>acantilados</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfil del relieve: cordillera, meseta, valle, llanura y costa con acantilado y playa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 140 L 30 70 L 46 96 L 62 40 L 84 110 L 96 80 H 140 L 150 118 L 162 112 L 172 126 H 206 L 214 116 L 218 140 Z" fill="var(--leaf)" fill-opacity=".55" stroke="var(--ink)" stroke-width="2"/>
        <path d="M218 140 H 252" stroke="var(--inf)" stroke-width="6"/>
        <g ${F} font-size="10.5" font-weight="700" text-anchor="middle"><text x="50" y="30" fill="var(--ink)">cordillera</text><text x="118" y="72" fill="var(--ink)">meseta</text><text x="158" y="104" fill="var(--ink)">valle</text><text x="190" y="118" fill="var(--ink)">llanura</text><text x="236" y="130" fill="var(--inf)">mar</text><text x="130" y="166" fill="var(--muted)">del interior a la costa</text></g></svg>`,
    },
    {
      html: `<h3>Tiempo y clima</h3><p>El <b>tiempo atmosférico</b> es el estado de la atmósfera en un lugar y un momento concretos: hoy llueve en Bilbao. El <mark>clima</mark> es el tiempo habitual de un lugar a lo largo de muchos años (al menos 30): en Bilbao llueve mucho y las temperaturas son suaves. Los <b>elementos del clima</b> son la temperatura, las precipitaciones, la presión atmosférica, el viento y la humedad.</p>`,
      svg: dos("Diferencia entre tiempo y clima", ["Tiempo", ["un día concreto", "cambia rápido", "«hoy llueve»", "lo da el", "parte meteorológico"], "var(--pen)"], ["Clima", ["media de 30 años", "es estable", "«aquí llueve", "mucho en otoño»", "lo estudia la ciencia"], "var(--leaf)"]),
    },
    {
      html: `<h3>Los factores del clima</h3><p>Los <b>factores</b> explican por qué cada lugar tiene su clima. La <mark>latitud</mark>: cuanto más lejos del ecuador, menos calor. La <mark>altitud</mark>: la temperatura baja unos 6 °C cada 1.000 m. La <b>distancia al mar</b>: el mar suaviza las temperaturas, y el interior tiene veranos más calurosos e inviernos más fríos. También influyen las <b>corrientes marinas</b>, los vientos y la <b>orientación</b> del relieve.</p>`,
      svg: rueda("Factores que influyen en el clima", "CLIMA", [["latitud", "var(--red)"], ["altitud", "var(--ink)"], ["distancia al mar", "var(--inf)"], ["corrientes", "var(--pen)"], ["vientos", "var(--muted)"], ["orientación", "var(--leaf)"]], "var(--sun)"),
    },
    {
      html: `<h3>Los grandes climas de la Tierra</h3><p>Según las zonas de la Tierra hay tres grandes grupos. En la <b>zona cálida</b>: clima <mark>ecuatorial</mark> (calor y lluvia todo el año), tropical (estación seca y húmeda) y desértico (casi sin lluvia). En la <b>zona templada</b>: mediterráneo, oceánico y continental. En las <b>zonas frías</b>: polar y, en las montañas altas, el clima de alta montaña.</p>`,
      svg: filas("Los climas del mundo agrupados por zonas", [["Cálida", "ecuatorial · tropical · desierto", "var(--red)"], ["Templada", "mediterráneo · oceánico", "var(--leaf)"], ["Templada", "continental", "var(--leaf)"], ["Fría", "polar", "var(--inf)"], ["Montaña", "alta montaña", "var(--ink)"]]),
    },
    {
      html: `<h3>Los paisajes naturales</h3><p>Un <b>paisaje</b> es el aspecto de un territorio, resultado del relieve, el clima, el agua, la vegetación y la acción humana. Cada clima tiene su vegetación: <mark>selva</mark> en el ecuatorial, <b>sabana</b> en el tropical, plantas adaptadas a la sequía en el desierto, <b>bosque mediterráneo</b> de encinas, <b>bosque caducifolio</b> de robles y hayas en el oceánico, <b>taiga</b> de coníferas en el continental frío y <b>tundra</b> en el polar.</p>`,
      svg: barras("Lluvia media al año en algunos paisajes, en milímetros", [["selva", 2500, "var(--leaf)", "2.500"], ["oceánico", 1200, "var(--pen)", "1.200"], ["mediterr.", 500, "var(--sun)", "500"], ["tundra", 250, "var(--inf)", "250"], ["desierto", 50, "var(--red)", "50"]], 2700),
    },
  ],
  figura: {
    titulo: "Clima y paisaje, de la zona cálida a la fría",
    svg: figCols("Climas y paisajes de las zonas cálida, templada y fría", [
      ["Zona cálida", ["ecuatorial: selva", "tropical: sabana", "desierto: dunas", "y oasis"], "var(--red)"],
      ["Zona templada", ["mediterráneo: encinas", "oceánico: hayas", "continental: praderas", "y taiga"], "var(--leaf)"],
      ["Zona fría", ["polar: tundra", "y hielos", "alta montaña:", "prados y nieve"], "var(--inf)"],
    ]),
  },
  video: { id: "jD88dCaIFDI", titulo: "Paisajes y climas del mundo", canal: "Mi Geografia", vistas: 255720, megusta: 0, busqueda: "climas del mundo explicación" },
  quiz: [
    { q: "Una meseta es…", o: ["una llanura elevada", "una zona hundida", "una entrada del mar"], a: 0, e: "Como la Meseta Central de la península ibérica." },
    { q: "«Mañana lloverá en Sevilla» habla de…", o: ["el clima", "el tiempo atmosférico", "el paisaje"], a: 1, e: "Es un momento concreto, no la media de muchos años." },
    { q: "Al subir 1.000 m de altitud, la temperatura…", o: ["sube unos 6 °C", "baja unos 6 °C", "no cambia"], a: 1, e: "Por eso hay nieve en las cumbres en verano." },
    { q: "¿Qué clima tiene calor y lluvias todo el año?", o: ["Ecuatorial", "Mediterráneo", "Polar"], a: 0, e: "Su paisaje es la selva." },
    { q: "La taiga es un bosque de…", o: ["encinas", "coníferas", "palmeras"], a: 1, e: "Pinos, abetos y alerces del clima continental frío." },
  ],
  examen: [
    { q: "El mar hace que las temperaturas de la costa sean…", o: ["más extremas", "más suaves", "iguales que en el interior"], a: 1, e: "El agua se calienta y se enfría más despacio que la tierra." },
    { q: "¿Qué forma del relieve es costera?", o: ["Cabo", "Meseta", "Depresión"], a: 0, e: "Un cabo es tierra que entra en el mar." },
    { q: "El bosque caducifolio de robles y hayas es típico del clima…", o: ["oceánico", "desértico", "ecuatorial"], a: 0, e: "Lluvioso y suave, como el norte de España." },
  ],
  feynman: ["Qué diferencia hay entre tiempo y clima", "Por qué hace más frío en la montaña", "Qué climas hay en cada zona de la Tierra", "Cómo se relaciona el clima con la vegetación"],
  mapa: mapa("RELIEVE, CLIMA Y PAISAJE", "var(--leaf)", [
    ["Relieve", "montañas · mesetas · costas", "var(--ink)"],
    ["Clima", "elementos · factores", "var(--sun)"],
    ["Climas", "cálidos · templados · fríos", "var(--red)"],
    ["Paisajes", "selva · bosques · tundra", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Meseta", "Llanura situada a bastante altitud."],
    ["Clima", "Tiempo habitual de un lugar durante al menos 30 años."],
    ["Factores del clima", "Latitud, altitud, distancia al mar, corrientes, vientos y orientación."],
    ["Clima ecuatorial", "Calor y lluvia todo el año; paisaje de selva."],
    ["Tundra", "Paisaje del clima polar: musgos y líquenes sobre suelo helado."],
  ],
  familias: ["Durante una semana, anotad cada día la temperatura máxima y mínima de vuestra localidad y comparadlas.", "Buscad en un mapa el pico más alto y el río más largo de vuestra comunidad.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Ubicación espacial y diversidad del medio físico: relieve, clima, vegetación y paisajes del mundo, de Europa y de España (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Construir y comentar un climograma con datos reales de AEMET.", "Clasificar fotos de paisajes por clima en grupos.", "Maqueta del perfil del relieve de la península."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "AEMET, Agencia Estatal de Meteorología: datos climatológicos", url: "https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Leer y comentar un climograma", "Conocer el relieve, los ríos y los climas de España"],
  bloques: [
    { tras: "Las formas del relieve", html: `<h3>Cómo se forma el relieve</h3><p>El relieve es el resultado de dos tipos de fuerzas. Las <b>fuerzas internas</b> nacen del interior de la Tierra: el movimiento de las <mark>placas tectónicas</mark> levanta cordilleras, como el Himalaya o los Pirineos, y provoca volcanes y terremotos. Las <b>fuerzas externas</b> desgastan ese relieve: el agua de los ríos, el hielo de los glaciares, el viento, el oleaje y los cambios de temperatura. Estos agentes <b>erosionan</b> las rocas, <b>transportan</b> los materiales y los <b>sedimentan</b> en zonas bajas, formando llanuras y deltas. Por eso las montañas jóvenes son altas y escarpadas, y las antiguas, como los Montes de Toledo, son más bajas y redondeadas.</p>` },
    { tras: "Los factores del clima", html: `<h3>El climograma</h3><p>El <mark>climograma</mark> es el gráfico que resume el clima de un lugar. Tiene <b>barras azules</b> con las precipitaciones de cada mes (eje izquierdo, en mm) y una <b>línea roja</b> con la temperatura media (eje derecho, en °C). Para comentarlo se calculan: la <b>temperatura media anual</b>, la <b>amplitud térmica</b> (mes más cálido − mes más frío) y la <b>precipitación total</b>. Hay que fijarse también en los meses secos: cuando la barra queda por debajo de la línea de temperatura (con escala de precipitación doble), hay aridez. Un climograma con verano seco y caluroso e invierno suave y algo lluvioso es mediterráneo.</p>`, video: { id: "fPHVi1594c8", titulo: "Clasificación climática de Köppen", canal: "acervo - aprende_mx", vistas: 213927, megusta: 0 } },
    { tras: "Los grandes climas de la Tierra", html: `<h3>Los climas en cifras</h3>${tabla(["Clima", "Temperaturas", "Lluvias", "Ejemplo"], [["Ecuatorial", "unos 27 °C todo el año", "más de 2.000 mm, todo el año", "Amazonia, Congo"], ["Tropical", "cálidas todo el año", "estación seca y estación de lluvias", "sabanas de África"], ["Desértico", "muy altas de día, frías de noche", "menos de 250 mm", "Sáhara"], ["Mediterráneo", "veranos calurosos, inviernos suaves", "400–800 mm; verano seco", "Valencia, Sevilla"], ["Oceánico", "suaves todo el año", "más de 1.000 mm, bien repartidas", "Galicia, Londres"], ["Continental", "veranos cálidos, inviernos muy fríos", "lluvia sobre todo en verano", "Moscú"], ["Polar", "casi siempre bajo 0 °C", "escasas, en forma de nieve", "Groenlandia"]])}` },
    { tras: "Los paisajes naturales", html: `<h3>El relieve y los ríos de España</h3><p>El centro de la península es la <mark>Meseta Central</mark>, dividida por el Sistema Central en dos submesetas. Dentro tiene los Montes de Toledo y la rodean la cordillera Cantábrica, el Sistema Ibérico y Sierra Morena. Fuera de la Meseta están los <b>Pirineos</b>, las <b>cordilleras Béticas</b> (con el Mulhacén, 3.479 m, el pico más alto de la península) y las depresiones del <b>Ebro</b> y del <b>Guadalquivir</b>. El pico más alto de España es el <b>Teide</b> (3.715 m), en Tenerife. Los ríos de la vertiente atlántica (Tajo, el más largo, Duero, Guadiana, Guadalquivir) son largos; los de la cantábrica, cortos y caudalosos; y los mediterráneos, irregulares, salvo el Ebro, el más caudaloso.</p>` },
    { tras: "Los paisajes naturales", html: `<h3>Los climas y paisajes de España</h3><p>España tiene una gran variedad de climas. El <b>oceánico</b> en el norte (Galicia, Cantábrico): lluvia abundante, temperaturas suaves, bosques de robles y hayas y prados verdes. El <mark>mediterráneo</mark>, el más extendido: en la costa es templado, y en el interior es <b>continentalizado</b>, con inviernos fríos y veranos muy calurosos; su vegetación es la encina, el alcornoque y el matorral. En el sureste (Almería, Murcia) es <b>árido</b>, casi desértico. En las cumbres hay clima de <b>montaña</b>, y en Canarias, un clima <b>subtropical</b> suave todo el año, con especies únicas como el drago.</p>`, video: { id: "ZQFjJ5j6ltQ", titulo: "Climas del mundo", canal: "Profa. Kempis", vistas: 216396, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "Un lugar tiene temperaturas medias de 6 °C en enero y 25 °C en julio, y 520 mm de lluvia al año, con julio y agosto casi secos. ¿Qué clima es?", pasos: ["Amplitud térmica: 25 − 6 = 19 °C, bastante alta.", "Verano seco y caluroso: rasgo mediterráneo.", "Invierno fresco (6 °C): no es costa, es interior."], resultado: "Clima mediterráneo continentalizado (por ejemplo, Madrid)." },
    { enunciado: "A nivel del mar hay 20 °C. ¿Qué temperatura habrá en una cumbre de 2.500 m?", pasos: ["La temperatura baja unos 6 °C cada 1.000 m.", "2.500 m son 2,5 × 6 = 15 °C menos.", "20 − 15 = 5 °C."], resultado: "Unos 5 °C." },
    { enunciado: "Explica por qué el norte de España es verde y el sureste es casi un desierto.", pasos: ["El norte recibe de lleno los vientos húmedos del Atlántico, que dejan lluvia al chocar con la cordillera Cantábrica.", "El sureste está protegido por las cordilleras Béticas y le llegan pocos frentes de lluvia.", "Más lluvia permite bosques y prados; poca lluvia, solo matorral."], resultado: "Por la diferente llegada de vientos húmedos y el efecto del relieve." },
  ],
  errores: [
    "Usar «clima» para hablar del tiempo de un día concreto.",
    "Pensar que todos los lugares de la misma latitud tienen el mismo clima.",
    "Confundir meseta (llanura alta) con montaña.",
    "Leer en el climograma la temperatura en el eje de las precipitaciones.",
    "Creer que el Mulhacén es el pico más alto de España: es el Teide.",
  ],
  ejercicios: [
    { q: "Define cordillera, meseta y depresión.", sol: "Cordillera: conjunto de montañas alineadas. Meseta: llanura elevada. Depresión: zona más baja que el terreno que la rodea." },
    { q: "Escribe dos formas del relieve costero y explica qué son.", sol: "Por ejemplo, cabo (saliente de tierra en el mar) y golfo (entrada grande del mar en la tierra). También bahía, península, isla, acantilado o playa." },
    { q: "¿Cuáles son los elementos del clima?", sol: "Temperatura, precipitaciones, presión atmosférica, viento y humedad." },
    { q: "¿Por qué el clima de la costa es más suave que el del interior?", sol: "Porque el mar se calienta y se enfría más despacio que la tierra, y modera las temperaturas: veranos menos calurosos e inviernos menos fríos." },
    { q: "Calcula la amplitud térmica de un lugar con 2 °C en enero y 24 °C en julio.", sol: "24 − 2 = 22 °C. Es una amplitud alta, típica de clima continental o de interior." },
    { q: "Relaciona: selva, sabana, taiga, tundra con su clima.", sol: "Selva: ecuatorial. Sabana: tropical. Taiga: continental frío. Tundra: polar." },
    { q: "¿Qué fuerzas forman el relieve y cuáles lo desgastan?", sol: "Lo forman las fuerzas internas (placas tectónicas, volcanes). Lo desgastan las externas: agua, hielo, viento, oleaje y cambios de temperatura." },
    { q: "Nombra las unidades de relieve que rodean la Meseta Central.", sol: "Cordillera Cantábrica, Sistema Ibérico y Sierra Morena (y por el oeste, el macizo Galaico-Leonés)." },
    { q: "¿Qué partes tiene un climograma?", sol: "Barras de precipitación por meses (en mm) y una línea de temperatura media mensual (en °C), con sus dos ejes." },
    { q: "¿Qué clima tiene Canarias y qué tiene de especial su vegetación?", sol: "Subtropical, suave todo el año. Tiene muchas especies endémicas, como el drago o la laurisilva." },
  ],
  quiz: [
    { q: "El río más largo de la península es…", o: ["el Ebro", "el Tajo", "el Duero"], a: 1, e: "Unos 1.000 km hasta Lisboa." },
    { q: "En un climograma, las barras indican…", o: ["temperaturas", "precipitaciones", "vientos"], a: 1, e: "La línea es la temperatura." },
    { q: "La amplitud térmica es…", o: ["la temperatura media", "la diferencia entre el mes más cálido y el más frío", "la lluvia total"], a: 1, e: "Indica lo extremo que es el clima." },
    { q: "El clima del sureste de España es…", o: ["oceánico", "árido", "polar"], a: 1, e: "Almería y Murcia reciben muy poca lluvia." },
    { q: "Los agentes externos…", o: ["levantan montañas", "erosionan, transportan y sedimentan", "provocan terremotos"], a: 1, e: "Son el agua, el hielo, el viento y el mar." },
  ],
  tarjetas: [
    ["Climograma", "Gráfico con barras de precipitación y línea de temperatura de cada mes."],
    ["Amplitud térmica", "Diferencia entre la temperatura media del mes más cálido y la del más frío."],
    ["Teide", "Pico más alto de España (3.715 m), en Tenerife."],
  ],
});
