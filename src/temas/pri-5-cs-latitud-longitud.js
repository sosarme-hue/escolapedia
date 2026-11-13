// Ciencias Sociales 5º de Primaria: latitud y longitud. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri5b");

// Globo con paralelos (horizontales) o meridianos (curvas verticales).
const globoLineas = (x, y, r, paralelos = true, meridianos = true) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/>${paralelos ? [-0.7, -0.4, 0, 0.4, 0.7].map((k) => { const yy = y + k * r, w = Math.sqrt(1 - k * k) * r; return `<path d="M${(x - w).toFixed(1)} ${yy.toFixed(1)} H${(x + w).toFixed(1)}" stroke="${k === 0 ? "var(--red)" : "var(--pen)"}" stroke-width="${k === 0 ? 2.5 : 1.2}"/>`; }).join("") : ""}${meridianos ? [0.35, 0.7].map((k) => `<ellipse cx="${x}" cy="${y}" rx="${(k * r).toFixed(1)}" ry="${r}" fill="none" stroke="#15803d" stroke-width="1.2"/>`).join("") + `<path d="M${x} ${y - r} V${y + r}" stroke="#15803d" stroke-width="2.5"/>` : ""}`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Latitud y longitud",
  minutos: 50,
  objetivos: ["Conocer las líneas imaginarias de la Tierra: eje, polos, ecuador, paralelos y meridianos", "Identificar los hemisferios norte, sur, este y oeste", "Explicar qué son la latitud y la longitud y cómo se miden", "Localizar lugares con coordenadas geográficas", "Relacionar la longitud con los husos horarios", "Reconocer los principales paralelos y las zonas climáticas"],
  claves: ["eje terrestre", "polo norte", "polo sur", "ecuador", "paralelo", "meridiano", "meridiano de Greenwich", "hemisferio", "latitud", "longitud", "grado", "coordenadas geográficas", "trópico", "círculo polar", "huso horario"],
  pregunta: {
    texto: "Un barco se hunde en mitad del océano y pide ayuda por radio. No hay calles ni edificios alrededor. ¿Cómo puede decir exactamente dónde está?",
    respuesta: "Dando sus <mark>coordenadas geográficas</mark>: dos números, la <b>latitud</b> y la <b>longitud</b>, que indican un único punto de la Tierra, igual que en el juego de los barquitos se dice «B-5» para señalar una casilla. Para eso los geógrafos dibujaron sobre el planeta una red de <b>líneas imaginarias</b>.",
  },
  bloques: [
    {
      html: `<h3>Las líneas imaginarias de la Tierra</h3><p>Para localizar cualquier lugar del planeta, los geógrafos han trazado sobre la Tierra unas <b>líneas imaginarias</b>, que no existen en la realidad, pero que aparecen dibujadas en los mapas y los globos terráqueos.</p><p>• El <mark>eje terrestre</mark> es la línea imaginaria alrededor de la cual gira la Tierra en su movimiento de rotación. Atraviesa el planeta de un extremo a otro.</p><p>• Los <mark>polos</mark> son los dos puntos donde el eje toca la superficie terrestre: el <b>Polo Norte</b>, en medio del océano Glacial Ártico, y el <b>Polo Sur</b>, en la Antártida.</p><p>• El <mark>ecuador</mark> es una circunferencia que rodea la Tierra por su parte más ancha, a la misma distancia de los dos polos. Mide unos 40.000 km y divide el planeta en dos mitades iguales.</p><p>• Los <mark>paralelos</mark> son circunferencias paralelas al ecuador, cada vez más pequeñas a medida que se acercan a los polos.</p><p>• Los <mark>meridianos</mark> son semicircunferencias que van de un polo al otro. Todos miden lo mismo.</p><p>Paralelos y meridianos se cruzan formando una red, como la de una cuadrícula, llamada <b>red geográfica</b>.</p>`,
      svg: svg("Globo con eje, polos, ecuador en rojo, paralelos y meridianos", `${tit("Líneas imaginarias")}${globoLineas(84, 102, 58)}<path d="M84 36 V44 M84 160 V168" stroke="var(--ink)" stroke-width="2"/>${filas([["polos", "N y S", COL.gris], ["ecuador", "el más largo", COL.rojo], ["paralelos", "horizontales", COL.azul], ["meridianos", "de polo a polo", COL.verde]], 56, 30, { x: 160, wa: 76, wb: 80, dos: true })}`),
      video: vid("aOx9XOfRl5A"),
    },
    {
      html: `<h3>Los hemisferios</h3><p>Un <mark>hemisferio</mark> es cada una de las dos mitades en que podemos dividir la Tierra.</p><p>• El <b>ecuador</b> divide la Tierra en <b>hemisferio norte</b> (o boreal), por encima, y <b>hemisferio sur</b> (o austral), por debajo. En el hemisferio norte se encuentran Europa, casi toda Asia, América del Norte y parte de África. En el sur, Oceanía, la Antártida, gran parte de América del Sur y el sur de África.</p><p>• El <b>meridiano de Greenwich</b>, también llamado meridiano 0 o meridiano cero, y su prolongación al otro lado del planeta (el meridiano 180) dividen la Tierra en <b>hemisferio este</b> (u oriental) y <b>hemisferio oeste</b> (u occidental). El meridiano de Greenwich pasa por un observatorio situado en esa localidad, junto a Londres, y fue elegido como referencia en 1884 por acuerdo internacional. ¡También atraviesa España! Pasa por Castellón, cerca de Zaragoza y por Huesca.</p><p>España está en el <b>hemisferio norte</b>, y la mayor parte de su territorio está en el <b>hemisferio oeste</b>, aunque una parte del este peninsular está en el hemisferio este.</p><p>En el hemisferio sur las estaciones están al revés que en el norte: cuando en España celebramos la Navidad en invierno, en Australia es verano.</p>`,
      svg: svg("El ecuador separa los hemisferios norte y sur; el meridiano de Greenwich separa este y oeste", `${tit("Los hemisferios")}<circle cx="70" cy="100" r="46" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/><path d="M24 100 a46 46 0 0 1 92 0z" fill="#93c5fd"/><path d="M24 100 H116" stroke="var(--red)" stroke-width="2.5"/>${et(70, 84, "norte", 60, { size: 11 })}${et(70, 124, "sur", 60, { size: 11 })}${et(70, 164, "ecuador", 90, { size: 11, color: COL.rojo })}<circle cx="190" cy="100" r="46" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/><path d="M190 54 a46 46 0 0 1 0 92z" fill="#86efac"/><path d="M190 54 V146" stroke="#15803d" stroke-width="2.5"/>${et(170, 104, "oeste", 40, { size: 11 })}${et(212, 104, "este", 40, { size: 11 })}${et(190, 164, "Greenwich", 90, { size: 11, color: COL.verde })}`),
      video: vid("Ir5KNE7Igcg"),
    },
    {
      html: `<h3>Los paralelos más importantes</h3><p>Hay cinco paralelos especialmente importantes, porque marcan los límites de las grandes zonas climáticas de la Tierra:</p><p>• El <b>ecuador</b> (0°), el paralelo más largo.<br>• El <b>trópico de Cáncer</b> (unos 23° al norte). Pasa por el Sáhara, México y la India. Las islas Canarias están muy cerca de él.<br>• El <b>trópico de Capricornio</b> (unos 23° al sur). Pasa por Brasil, el sur de África y Australia.<br>• El <b>círculo polar ártico</b> (unos 66° al norte). Pasa por el norte de Noruega, Finlandia, Rusia, Alaska y Groenlandia.<br>• El <b>círculo polar antártico</b> (unos 66° al sur). Rodea casi toda la Antártida.</p><p>Estos paralelos separan las <mark>zonas climáticas</mark>:</p><p>• La <b>zona cálida</b>, entre los dos trópicos, alrededor del ecuador. Los rayos del sol llegan muy rectos y hace calor todo el año.<br>• Las dos <b>zonas templadas</b>, entre los trópicos y los círculos polares. Tienen cuatro estaciones bien diferenciadas. Aquí está España.<br>• Las dos <b>zonas frías</b> o polares, más allá de los círculos polares. Los rayos llegan muy inclinados y hace mucho frío. Allí hay meses en que el sol no se pone nunca (el «sol de medianoche») y meses en que no sale.</p>`,
      svg: svg("Trópicos y círculos polares que separan zonas cálida, templadas y frías", `${tit("Paralelos y zonas")}<circle cx="70" cy="102" r="60" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/><path d="M27 60 a60 60 0 0 1 86 0z M27 144 a60 60 0 0 0 86 0z" fill="#bfdbfe"/><rect x="11" y="78" width="118" height="48" fill="#fecaca" fill-opacity=".7"/><path d="M27 60 H113 M27 144 H113" stroke="var(--pen)" stroke-width="1.5"/><path d="M12 78 H128 M12 126 H128" stroke="var(--naranja, #e8892c)" stroke-width="1.5"/><path d="M10 102 H130" stroke="var(--red)" stroke-width="2.5"/>${[["círculo polar ártico", 60, COL.azul], ["trópico de Cáncer", 80, COL.naranja], ["ecuador", 104, COL.rojo], ["trópico de Capricornio", 126, COL.naranja], ["círculo polar antártico", 146, COL.azul]].map(([s, y, c]) => et(196, y, s, 118, { size: 10.5, color: c })).join("")}${tx(196, 172, "cálida · templada · fría", 118, { weight: 700 })}`),
    },
    {
      html: `<h3>¿Qué es la latitud?</h3><p>La <mark>latitud</mark> es la distancia que hay desde un lugar hasta el <b>ecuador</b>. Se mide en <b>grados (°)</b>, siguiendo un meridiano, es decir, hacia arriba o hacia abajo.</p><p>• El ecuador tiene latitud <b>0°</b>.<br>• La latitud máxima es de <b>90°</b>, que corresponde a los polos.<br>• Como hay dos hemisferios, hay que indicar si el lugar está al <b>norte (N)</b> o al <b>sur (S)</b> del ecuador. Por ejemplo: el Polo Norte está a 90° N y el Polo Sur, a 90° S.</p><p>Todos los puntos que están sobre un mismo <b>paralelo</b> tienen la <b>misma latitud</b>. Por eso, la latitud nos dice en qué paralelo está un lugar, pero no en qué punto exacto de ese paralelo.</p><p>Algunas latitudes aproximadas: Madrid está a unos <b>40° N</b>; Oslo, en Noruega, a unos 60° N; Buenos Aires, a unos 35° S; y Quito, la capital de Ecuador, casi sobre el ecuador.</p><p>La latitud influye mucho en el <b>clima</b>: cuanto más lejos del ecuador, más inclinados llegan los rayos del sol y más frío hace. Por eso, en general, Noruega es más fría que España, y España más fría que Marruecos.</p><p>Truco para recordarlo: la latitud se mide «a lo alto», hacia arriba o hacia abajo, como la <b>lata</b> de una escalera.</p>`,
      svg: svg("La latitud se mide desde el ecuador hacia el norte o el sur, de 0° a 90°", `${tit("Latitud: desde el ecuador")}${globoLineas(84, 102, 58, true, false)}<path d="M84 102 L130 62" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M84 102 L142 102" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M118 102 a34 34 0 0 0 -8 -22" stroke="var(--red)" stroke-width="2" fill="none"/>${et(128, 92, "40°", 30, { size: 11, color: COL.rojo })}${filas([["90° N", "Polo Norte", COL.azul], ["40° N", "Madrid", COL.rojo], ["0°", "ecuador", COL.rojo], ["90° S", "Polo Sur", COL.azul]], 54, 32, { x: 166, wa: 40, wb: 50, dos: true })}`),
    },
    {
      html: `<h3>¿Qué es la longitud?</h3><p>La <mark>longitud</mark> es la distancia que hay desde un lugar hasta el <b>meridiano de Greenwich</b>. También se mide en <b>grados</b>, pero siguiendo un paralelo, es decir, hacia la derecha o hacia la izquierda.</p><p>• El meridiano de Greenwich tiene longitud <b>0°</b>.<br>• La longitud máxima es de <b>180°</b>, que corresponde al meridiano opuesto, al otro lado del planeta.<br>• Hay que indicar si el lugar está al <b>este (E)</b> o al <b>oeste (O)</b> de Greenwich.</p><p>Todos los puntos que están sobre un mismo <b>meridiano</b> tienen la <b>misma longitud</b>.</p><p>Algunas longitudes aproximadas: Madrid está a unos <b>4° O</b>; Barcelona, a unos 2° E; Nueva York, a unos 74° O; Pekín, a unos 116° E.</p><p>Para medir distancias aún más pequeñas, cada grado se divide en <b>60 minutos (′)</b> y cada minuto en <b>60 segundos (″)</b>, como las horas del reloj. Así, la posición exacta de la Puerta del Sol de Madrid es, aproximadamente, 40° 25′ N y 3° 42′ O. En los móviles y los navegadores es frecuente ver las coordenadas escritas con decimales, como 40,42 y −3,70; el signo menos indica oeste o sur.</p><p>Truco: la <b>longitud</b> se mide «a lo largo», hacia los lados, como una <b>larga</b> fila.</p>`,
      svg: svg("La longitud se mide desde el meridiano de Greenwich hacia el este o el oeste, de 0° a 180°", `${tit("Longitud: desde Greenwich")}${globoLineas(84, 102, 58, false, true)}${fl(84, 150, 52, 150, COL.azul, 2)}${fl(84, 150, 116, 150, COL.azul, 2)}${et(52, 168, "oeste", 50, { size: 11, color: COL.azul })}${et(116, 168, "este", 50, { size: 11, color: COL.azul })}${filas([["0°", "Greenwich", COL.verde], ["4° O", "Madrid", COL.rojo], ["2° E", "Barcelona", COL.rojo], ["180°", "el opuesto", COL.verde]], 54, 32, { x: 166, wa: 40, wb: 56, dos: true })}`),
    },
    {
      html: `<h3>Las coordenadas geográficas</h3><p>Ni la latitud ni la longitud, por separado, nos dan la posición exacta de un lugar: la latitud nos dice el paralelo y la longitud, el meridiano. Pero si las <b>juntamos</b>, el lugar está justo donde se <b>cruzan</b> ese paralelo y ese meridiano. A este par de datos lo llamamos <mark>coordenadas geográficas</mark>.</p><p>Las coordenadas se escriben siempre en este orden: <b>primero la latitud y después la longitud</b>. Por ejemplo, las coordenadas aproximadas de Madrid son <b>40° N, 4° O</b>.</p><p>Es como en el juego de los barquitos, en una hoja de cálculo o en el patio de butacas de un cine: «fila 7, butaca 12». Con dos datos encontramos un único sitio.</p><p>¿Para qué sirven las coordenadas?</p><p>• Para que barcos y aviones sepan dónde están y planifiquen sus rutas.<br>• Para que los servicios de emergencia (el 112) localicen a una persona que pide ayuda en la montaña o en el mar.<br>• Para que funcionen el <b>GPS</b> y los mapas del móvil: los satélites calculan nuestras coordenadas en cada momento.<br>• Para que los científicos localicen terremotos, huracanes o restos arqueológicos.<br>• Para marcar puntos en un mapa y compartirlos con otras personas.</p>`,
      svg: svg("Cuadrícula de paralelos y meridianos; un punto se localiza donde se cruzan latitud y longitud", `${tit("Coordenadas: el cruce")}<rect x="30" y="40" width="160" height="120" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M30 ${40 + i * 30} H190" stroke="var(--pen)" stroke-width="1"/><path d="M${30 + i * 40} 40 V160" stroke="#15803d" stroke-width="1"/>`).join("")}<path d="M30 70 H190" stroke="var(--red)" stroke-width="2.5"/><path d="M110 40 V160" stroke="var(--red)" stroke-width="2.5"/><circle cx="110" cy="70" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>${et(222, 74, "latitud", 60, { size: 11, color: COL.azul })}${et(110, 176, "longitud", 80, { size: 11, color: COL.verde })}${tx(224, 120, "primero", 60)}${tx(224, 134, "latitud", 60, { weight: 700 })}`),
      video: vid("sFyKJ3m3nBk"),
    },
    {
      html: `<h3>Practicamos: localizar lugares</h3><p>Fíjate en esta tabla con las coordenadas aproximadas de algunas ciudades:</p>${tabla(["Ciudad", "Latitud", "Longitud", "Hemisferios"], [["Madrid (España)", "40° N", "4° O", "norte y oeste"], ["Barcelona (España)", "41° N", "2° E", "norte y este"], ["Santa Cruz de Tenerife", "28° N", "16° O", "norte y oeste"], ["El Cairo (Egipto)", "30° N", "31° E", "norte y este"], ["Río de Janeiro (Brasil)", "23° S", "43° O", "sur y oeste"], ["Sídney (Australia)", "34° S", "151° E", "sur y este"]])}<p>Algunas conclusiones:</p><p>• Barcelona tiene una latitud parecida a la de Madrid, porque las dos están casi a la misma distancia del ecuador, pero su longitud es distinta: Barcelona está al este de Greenwich y Madrid, al oeste.</p><p>• Santa Cruz de Tenerife está mucho más al sur que Madrid (latitud menor), por eso su clima es más cálido todo el año.</p><p>• Río de Janeiro está casi sobre el trópico de Capricornio.</p><p>• Sídney está en el hemisferio sur y en el este, casi en el lado opuesto del planeta a España. Por eso, cuando aquí es de día, allí es de noche.</p>`,
      svg: svg("Ciudades situadas en un planisferio según sus coordenadas: Madrid, Tenerife, Río y Sídney", `${tit("Ciudades en el mapa")}<rect x="14" y="40" width="232" height="124" rx="6" fill="#e0f2fe" stroke="var(--water)" stroke-width="2"/><path d="M14 102 H246" stroke="var(--red)" stroke-width="2"/><path d="M110 40 V164" stroke="#15803d" stroke-width="2"/>${[["Madrid", 104, 72], ["Tenerife", 94, 84], ["Río", 76, 118], ["Sídney", 220, 122], ["El Cairo", 128, 82]].map(([s, x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--sun)" stroke="var(--ink)"/>${t(x + (s === "Tenerife" ? -30 : s === "Sídney" ? -6 : 26), y - 6, s, { size: 9.5 })}`).join("")}${et(220, 96, "ecuador", 60, { size: 9.5, color: COL.rojo })}${et(110, 176, "Greenwich", 70, { size: 10, color: COL.verde })}`),
    },
    {
      html: `<h3>La longitud y la hora: los husos horarios</h3><p>Como la Tierra gira sobre sí misma, no es de día a la vez en todo el planeta: el Sol ilumina primero los lugares situados más al este y después los del oeste. Por eso cada lugar tiene una <b>hora solar</b> diferente.</p><p>Para organizarse, la Tierra se ha dividido en <mark>24 husos horarios</mark>, uno por cada hora del día. Cada huso es como un gajo de naranja que va de polo a polo y abarca unos <b>15° de longitud</b> (porque 360° ÷ 24 horas = 15°). Dentro de cada huso, todos los lugares tienen, en principio, la misma hora oficial.</p><p>• Si viajas hacia el <b>este</b>, tienes que <b>adelantar</b> el reloj una hora por cada huso.<br>• Si viajas hacia el <b>oeste</b>, tienes que <b>retrasarlo</b>.</p><p>La hora de referencia es la del meridiano de Greenwich. En la práctica, los países ajustan los husos a sus fronteras. La España peninsular y Baleares usan una hora más que Greenwich, y <b>Canarias</b>, una hora menos que la península: por eso en los informativos se dice «una hora menos en Canarias».</p><p>En el meridiano 180° está la <b>línea internacional de cambio de fecha</b>: al cruzarla, se cambia de día. Por eso las primeras ciudades que celebran el Año Nuevo están en islas del océano Pacífico.</p>`,
      svg: svg("Husos horarios: 24 gajos de 15 grados; hacia el este se adelanta el reloj", `${tit("Husos horarios")}${[...Array(8)].map((_, i) => `<rect x="${18 + i * 28}" y="40" width="28" height="70" fill="${i % 2 ? "#e0f2fe" : "#bfdbfe"}" stroke="var(--water)"/>${t(32 + i * 28, 124, `${i + 9}h`, { size: 10, weight: 400 })}`).join("")}${fl(40, 160, 220, 160, COL.verde, 2.5)}${et(130, 176, "hacia el este: adelanta", 150, { size: 11, color: COL.verde })}${tx(130, 146, "24 husos de 15° cada uno", 236, { weight: 700, color: COL.azul })}`),
    },
    {
      html: `<h3>Herramientas para trabajar con coordenadas</h3><p>Hoy cualquiera puede encontrar las coordenadas de un lugar con un ordenador o un móvil:</p><p>• En los <b>mapas digitales</b>, si mantienes pulsado un punto, aparece su latitud y su longitud con decimales.<br>• Al revés: si escribes unas coordenadas en el buscador del mapa, te lleva directamente a ese lugar.<br>• Los <b>visores geográficos</b>, como el del Instituto Geográfico Nacional, permiten ver la red de paralelos y meridianos sobre las imágenes de satélite.</p><p>Antes de existir los satélites, los navegantes calculaban su <b>latitud</b> midiendo la altura del Sol a mediodía o de la estrella Polar con instrumentos como el <b>astrolabio</b> o el <b>sextante</b>. Calcular la <b>longitud</b> era mucho más difícil: se necesitaba un reloj muy exacto que no se estropeara con el movimiento del barco, el <b>cronómetro marino</b>, que no se inventó hasta el siglo XVIII. Hasta entonces, muchos barcos se perdían o naufragaban por no saber exactamente dónde estaban.</p><p>Un consejo de seguridad: si alguna vez llamas al <b>112</b> desde el campo o la montaña, abre el mapa del móvil y lee tus coordenadas: así los equipos de rescate te encontrarán mucho antes.</p>`,
      svg: svg("Antes, astrolabio y sextante; hoy, GPS y mapas digitales para conocer las coordenadas", `${tit("Ayer y hoy")}${cj2(14, 44, 112, 64, "Ayer", "astrolabio, sextante", COL.marron)}${cj2(134, 44, 112, 64, "Hoy", "GPS, mapas del móvil", COL.azul)}${fl(126, 76, 134, 76, "var(--muted)", 2)}${tx(130, 132, "Emergencias: 112 + tus coordenadas", 236, { weight: 700, color: COL.rojo })}${tx(130, 154, "primero latitud, después longitud", 236)}`),
    },
  ],
  figura: {
    titulo: "Latitud y longitud en ocho ideas",
    svg: rejilla([
      ["Ecuador", "0°: divide norte y sur", COL.rojo],
      ["Greenwich", "meridiano 0: este y oeste", COL.verde],
      ["Paralelos", "círculos como el ecuador", COL.azul],
      ["Meridianos", "de polo a polo", COL.verde],
      ["Latitud", "0° a 90° N o S", COL.morado],
      ["Longitud", "0° a 180° E u O", COL.naranja],
      ["Coordenadas", "latitud + longitud", COL.sol],
      ["Husos", "24, de 15° cada uno", COL.agua],
    ], 4, 86, "Resumen de latitud, longitud y coordenadas"),
  },
  video: vgen("sFyKJ3m3nBk", "latitud y longitud para niños primaria"),
  ejemplos: [
    { enunciado: "Un lugar tiene coordenadas 30° S, 60° O. ¿En qué hemisferios está?",
      pasos: ["La latitud S indica que está al sur del ecuador.", "La longitud O indica que está al oeste de Greenwich."],
      resultado: "Está en los hemisferios sur y oeste (corresponde a Argentina)." },
    { enunciado: "Son las 12:00 en un lugar. ¿Qué hora será, más o menos, en otro lugar situado 45° más al este?",
      pasos: ["Cada huso horario abarca 15° de longitud.", "45 ÷ 15 = 3 husos.", "Hacia el este se adelanta el reloj."],
      resultado: "Serán aproximadamente las 15:00." },
    { enunciado: "Madrid está a 40° N y Tenerife a 28° N. ¿Cuál está más cerca del ecuador? ¿Qué consecuencia tiene?",
      pasos: ["La latitud mide la distancia al ecuador.", "28° es menor que 40°: Tenerife está más cerca.", "Cuanto más cerca del ecuador, más rectos llegan los rayos del sol."],
      resultado: "Tenerife está más cerca del ecuador y por eso tiene un clima más cálido todo el año." },
  ],
  errores: [
    "Confundir paralelos y meridianos: los paralelos son círculos horizontales; los meridianos van de polo a polo.",
    "Escribir primero la longitud: las coordenadas se dan en el orden latitud, longitud.",
    "Olvidar indicar N, S, E u O: 40° sin más puede ser dos lugares distintos.",
    "Pensar que la latitud llega a 180°: el máximo es 90°; la longitud sí llega a 180°.",
    "Creer que los meridianos son de distintos tamaños: todos miden lo mismo; los paralelos sí cambian.",
  ],
  ejercicios: [
    { q: "Define: eje terrestre, polos y ecuador.", sol: "Eje: línea imaginaria sobre la que gira la Tierra. Polos: los puntos donde el eje toca la superficie. Ecuador: circunferencia que divide la Tierra en dos mitades iguales, a igual distancia de los polos." },
    { q: "¿Qué diferencia hay entre paralelos y meridianos?", sol: "Los paralelos son circunferencias paralelas al ecuador, más pequeñas hacia los polos. Los meridianos son semicircunferencias de polo a polo, todas iguales." },
    { q: "¿Qué línea separa los hemisferios norte y sur? ¿Y los hemisferios este y oeste?", sol: "Norte y sur: el ecuador. Este y oeste: el meridiano de Greenwich (y el 180)." },
    { q: "Nombra los cinco paralelos principales.", sol: "Ecuador, trópico de Cáncer, trópico de Capricornio, círculo polar ártico y círculo polar antártico." },
    { q: "¿Qué es la latitud? ¿Entre qué valores va?", sol: "La distancia en grados de un lugar al ecuador. Va de 0° a 90° norte o sur." },
    { q: "¿Qué es la longitud? ¿Entre qué valores va?", sol: "La distancia en grados de un lugar al meridiano de Greenwich. Va de 0° a 180° este u oeste." },
    { q: "¿Por qué hacen falta la latitud y la longitud juntas para localizar un lugar?", sol: "Porque la latitud indica solo el paralelo y la longitud solo el meridiano; el lugar está en el cruce de ambos." },
    { q: "¿En qué zona climática está España y por qué?", sol: "En la zona templada del norte, porque está entre el trópico de Cáncer y el círculo polar ártico." },
    { q: "¿Cuántos husos horarios hay y cuántos grados abarca cada uno?", sol: "24 husos de 15° cada uno." },
    { q: "¿Por qué en Canarias es una hora menos que en la península?", sol: "Porque Canarias está más al oeste, en otro huso horario." },
  ],
  quiz: [
    { q: "El ecuador divide la Tierra en hemisferios…", o: ["este y oeste", "norte y sur", "frío y cálido"], a: 1, e: "Norte y sur." },
    { q: "Las líneas que van de polo a polo son…", o: ["meridianos", "paralelos", "trópicos"], a: 0, e: "Meridianos." },
    { q: "El meridiano 0 es el de…", o: ["Madrid", "París", "Greenwich"], a: 2, e: "Greenwich." },
    { q: "La latitud del ecuador es…", o: ["90°", "0°", "180°"], a: 1, e: "0°." },
    { q: "La latitud máxima es…", o: ["90°", "180°", "360°"], a: 0, e: "90°, en los polos." },
    { q: "Madrid está, aproximadamente, a…", o: ["4° N, 40° O", "40° S, 4° E", "40° N, 4° O"], a: 2, e: "40° N, 4° O." },
    { q: "Entre los dos trópicos está la zona…", o: ["cálida", "templada", "fría"], a: 0, e: "La zona cálida." },
    { q: "Las coordenadas se escriben…", o: ["longitud y latitud", "latitud y longitud", "solo la latitud"], a: 1, e: "Primero la latitud." },
    { q: "Cada huso horario abarca…", o: ["1°", "90°", "15°"], a: 2, e: "15° de longitud." },
    { q: "Si viajas hacia el este, el reloj…", o: ["se adelanta", "se retrasa", "no cambia"], a: 0, e: "Se adelanta." },
  ],
  examen: [
    { q: "El trópico de Cáncer está en el hemisferio…", o: ["sur", "norte", "oeste"], a: 1, e: "Norte." },
    { q: "El meridiano de Greenwich atraviesa…", o: ["España", "Brasil", "Australia"], a: 0, e: "Pasa por Castellón y Huesca." },
    { q: "Un grado se divide en…", o: ["100 minutos", "10 minutos", "60 minutos"], a: 2, e: "60 minutos." },
    { q: "Para calcular la longitud en el mar hizo falta un buen…", o: ["telescopio", "reloj", "barómetro"], a: 1, e: "El cronómetro marino." },
  ],
  feynman: ["Qué son los paralelos y los meridianos y para qué sirven", "Qué es la latitud y qué es la longitud, con un ejemplo", "Por qué la hora no es la misma en todo el mundo"],
  mapa: mapa("COORDENADAS", "var(--pri)", [
    ["Líneas", "ecuador · paralelos · meridianos", COL.azul],
    ["Hemisferios", "N y S · E y O", COL.verde],
    ["Latitud", "0° a 90° N o S", COL.morado],
    ["Longitud", "0° a 180° E u O", COL.naranja],
  ], 250),
  tarjetas: [
    ["Ecuador", "Paralelo 0°, divide la Tierra en norte y sur."],
    ["Meridiano de Greenwich", "Meridiano 0°, divide la Tierra en este y oeste."],
    ["Paralelo", "Círculo imaginario paralelo al ecuador."],
    ["Meridiano", "Semicírculo imaginario de polo a polo."],
    ["Latitud", "Distancia en grados al ecuador (N o S)."],
    ["Longitud", "Distancia en grados a Greenwich (E u O)."],
    ["Coordenadas", "Latitud y longitud de un lugar."],
    ["Huso horario", "Franja de 15° con la misma hora oficial."],
  ],
  familias: ["Buscad en un mapa digital las coordenadas de vuestra casa y del colegio.", "Jugad a los barquitos en papel cuadriculado para practicar coordenadas.", "Mirad la hora de una ciudad de otro continente y calculad la diferencia horaria.", "Localizad en un globo los trópicos y los círculos polares."],
  profesores: PROF("Ciencias Sociales: líneas imaginarias de la Tierra, hemisferios, latitud, longitud, coordenadas geográficas, zonas climáticas y husos horarios", ["Globo de naranja: dibujar ecuador, trópicos y meridianos con rotulador.", "Búsqueda del tesoro con coordenadas en un mapa del colegio cuadriculado.", "Uso de un visor geográfico para localizar lugares a partir de sus coordenadas."]),
  fuentes: [RD, wiki("Latitud", "Latitud"), wiki("Longitud (cartografía)", "Longitud_(cartografía)"), wiki("Huso horario", "Huso_horario")],
  revisado: REV,
};
