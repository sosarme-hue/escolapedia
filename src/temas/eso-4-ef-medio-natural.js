// Educación Física 4º ESO. Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, barras } = require("./_hum");
const { B, QS, EJ, EX, rejilla, curva, zonas, RD } = require("./_eso4L13");

module.exports = {
  materia: "Educación Física",
  curso: "4-eso",
  titulo: "Actividades en el medio natural",
  minutos: 115,
  objetivos: [
    "Conocer las actividades físicas en el medio natural y sus beneficios",
    "Planificar una ruta de senderismo segura: señalización, material, valoración de la dificultad",
    "Interpretar un mapa topográfico (escala, curvas de nivel, leyenda) y usar la brújula",
    "Practicar la orientación deportiva y otras técnicas como los nudos",
    "Actuar con seguridad y minimizar el impacto ambiental siguiendo los principios de «no dejar rastro»",
  ],
  claves: ["medio natural", "senderismo", "GR", "PR", "mapa", "escala", "curvas de nivel", "brújula", "rumbo", "no dejar rastro"],
  pregunta: {
    texto: "Te pierdes en el monte, sin cobertura y con la batería al 5 %. ¿Qué harías?",
    respuesta: "Lo primero, <mark>parar y mantener la calma</mark>: no seguir andando sin rumbo. Después, intentar llamar al 112 (funciona con cualquier operador), ahorrar batería, buscar referencias en el mapa y, si no estás seguro, volver por el camino conocido o quedarte en un lugar visible y abrigado. Planificar bien la salida evita casi todos estos problemas.",
  },
  lectura: {
    titulo: "Los caminos que lo unen todo",
    html: `<p>Hace más de mil años, miles de personas recorrían a pie el norte de la península ibérica hacia Santiago de Compostela. Hoy, el Camino de Santiago sigue siendo una de las rutas más transitadas del mundo: cada año la recorren cientos de miles de caminantes de todas las edades y países, siguiendo flechas amarillas pintadas en piedras, árboles y farolas. Pero el Camino es solo una parte de una red enorme. En España hay decenas de miles de kilómetros de senderos señalizados: los de gran recorrido, que cruzan regiones enteras; los de pequeño recorrido, que se hacen en una jornada; y los locales, ideales para una tarde.</p><p>Caminar por la naturaleza es una de las actividades físicas más completas y accesibles: mejora la resistencia y la fuerza de las piernas, reduce el estrés y nos conecta con el paisaje, la historia y las personas. Pero la montaña también exige respeto. Cada año, los equipos de rescate atienden a muchos excursionistas que salen sin planificar, con calzado inadecuado o sin consultar el tiempo. En este tema aprenderás a planificar una salida, a orientarte con mapa y brújula, a actuar con seguridad y a disfrutar del medio natural sin dañarlo.</p>`,
  },
  bloques: [
    B("1.1 Las actividades en el medio natural", `<p>Las <b>actividades físicas en el medio natural</b> son las que se realizan en entornos naturales (montaña, bosque, ríos, mar, aire) aprovechando sus características. Se caracterizan por la <mark>incertidumbre</mark> del entorno: el terreno, el clima y las condiciones cambian, y hay que adaptarse a ellos. Se clasifican según el medio:</p>${tabla(["Medio", "Actividades"], [["Tierra", "senderismo, montañismo, orientación, escalada, barranquismo, bicicleta de montaña (BTT), esquí, raquetas de nieve, acampada"], ["Agua", "piragüismo, vela, surf, buceo, rafting, remo, natación en aguas abiertas"], ["Aire", "parapente, ala delta, paracaidismo, globo aerostático"]])}<p>Sus <b>beneficios</b> son muchos: mejoran la condición física (resistencia, fuerza de piernas, equilibrio), reducen el estrés y la ansiedad (estar en contacto con la naturaleza tiene efectos demostrados sobre el bienestar), fomentan la autonomía, la cooperación y la superación personal, y generan conciencia ambiental. Además, muchas son actividades de ocio para toda la vida que se pueden practicar en familia o con amigos. Algunas, como la escalada o el barranquismo, conllevan riesgos importantes y solo deben practicarse con formación y supervisión de profesionales titulados.</p>`,
      rejilla("Medios y actividades", [["Tierra", "senderismo, BTT"], ["Agua", "piragüismo, vela"], ["Aire", "parapente"], ["Nieve", "esquí, raquetas"]])),
    B("1.2 El senderismo y la señalización de senderos", `<p>El <mark>senderismo</mark> consiste en recorrer caminos y senderos, preferentemente señalizados, a pie y sin necesidad de técnicas especiales. Es la actividad en el medio natural más accesible. En España, la Federación Española de Deportes de Montaña y Escalada (FEDME) homologa los senderos y los clasifica con unas marcas de pintura de colores:</p>${tabla(["Tipo", "Siglas", "Colores", "Recorrido"], [["Gran Recorrido", "GR", "blanco y rojo", "más de 50 km, varias jornadas"], ["Pequeño Recorrido", "PR", "blanco y amarillo", "entre 10 y 50 km, una jornada"], ["Sendero Local", "SL", "blanco y verde", "menos de 10 km"]])}<p>Las <b>marcas</b> son dos franjas horizontales paralelas que indican la <b>continuidad</b> del camino; dos franjas en ángulo indican un <b>cambio de dirección</b>; y una cruz (aspa) indica <b>dirección equivocada</b>. Además, en los cruces suele haber postes y paneles informativos con distancias y tiempos. Otros caminos tienen su propia señalización, como la flecha amarilla o la concha del Camino de Santiago. Recuerda: aunque un sendero esté señalizado, hay que llevar mapa o una aplicación con el track descargado, porque las marcas pueden haberse borrado o estar tapadas por la vegetación.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Marcas de senderos: continuidad, cambio de dirección y dirección equivocada, en colores de GR, PR y SL">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g>
          <rect x="22" y="40" width="56" height="10" fill="#fff" stroke="var(--muted)"/><rect x="22" y="53" width="56" height="10" fill="#d33"/>
          <path d="M100 44 H 126 L 146 26" stroke="var(--muted)" stroke-width="12" fill="none" stroke-linejoin="round"/><path d="M100 44 H 126 L 146 26" stroke="#fff" stroke-width="9" fill="none" stroke-linejoin="round"/><path d="M100 58 H 132 L 154 38" stroke="#e5b800" stroke-width="9" fill="none" stroke-linejoin="round"/>
          <path d="M184 32 L 222 66 M 222 32 L 184 66" stroke="var(--muted)" stroke-width="12"/><path d="M184 32 L 222 66 M 222 32 L 184 66" stroke="#fff" stroke-width="9"/><path d="M196 32 L 234 66 M 234 32 L 196 66" stroke="#2a9d55" stroke-width="9"/>
        </g>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="50" y="94" fill="var(--ink)">continuidad</text><text x="128" y="94" fill="var(--ink)">cambio de</text><text x="128" y="108" fill="var(--ink)">dirección</text><text x="210" y="94" fill="var(--ink)">dirección</text><text x="210" y="108" fill="var(--ink)">equivocada</text></g>
        <g ${F} font-size="11" font-weight="700"><text x="22" y="142" fill="#d33">GR blanco-rojo</text><text x="130" y="142" fill="#b38f00">PR blanco-amarillo</text><text x="72" y="162" fill="#2a9d55">SL blanco-verde</text></g>
      </svg>`,
      { id: "KYfQCCaruPQ", titulo: "¿Qué se necesita para empezar a hacer senderismo? Nivel básico", canal: "Nerva", vistas: 96803, megusta: 0 }),
    B("1.3 Planificar una salida", `<p>Una salida segura se prepara antes de salir de casa. La <mark>planificación</mark> incluye: elegir una <b>ruta adecuada</b> al nivel del grupo (distancia, desnivel, dificultad); consultar la <b>previsión meteorológica</b> (AEMET) y los avisos; calcular el <b>horario</b> (hora de salida, tiempo estimado, hora límite para dar la vuelta y hora de puesta de sol); revisar el <b>material</b>; y <b>avisar</b> a alguien de la ruta prevista y la hora de regreso.</p><p>Para calcular el tiempo se usa una regla práctica: por terreno llano se recorren unos <b>4-5 km por hora</b>, y hay que sumar aproximadamente <b>1 hora por cada 400 m de desnivel de subida</b> (y algo menos por la bajada). A ello se añaden las paradas.</p><p>Para valorar la dificultad existe el <b>método MIDE</b> (Método de Información de Excursiones), que puntúa de 1 a 5 cuatro aspectos: el <b>medio</b> (riesgos del entorno), el <b>itinerario</b> (dificultad para orientarse), el <b>desplazamiento</b> (tipo de terreno) y el <b>esfuerzo</b> (tiempo necesario). Muchos senderos lo incluyen en sus paneles. También es fundamental conocer el estado físico del grupo y adaptarse al más lento. El objetivo no es llegar a la cima, sino volver bien: saber <b>renunciar</b> a tiempo es una decisión inteligente.</p>`,
      rejilla("Método MIDE (1 a 5)", [["Medio", "riesgos del entorno"], ["Itinerario", "orientación"], ["Desplazamiento", "tipo de terreno"], ["Esfuerzo", "tiempo necesario"]])),
    B("1.4 El material y la mochila", `<p>El material depende de la actividad y la duración, pero para una salida de un día por el monte es básico:</p>${tabla(["Elemento", "Por qué"], [["Calzado de montaña ya usado", "sujeción, agarre y evitar ampollas; nunca estrenar el día de la ruta"], ["Ropa en tres capas", "1.ª transpirable (aleja el sudor), 2.ª térmica (forro polar), 3.ª impermeable y cortavientos"], ["Gorra, gafas de sol y crema solar", "la radiación aumenta con la altitud"], ["Agua (1,5-2 litros) y comida energética", "frutos secos, fruta, bocadillos, barritas"], ["Mapa, brújula y móvil cargado", "orientarse y pedir ayuda; batería externa"], ["Botiquín y manta térmica", "atender pequeñas lesiones y protegerse del frío"], ["Linterna o frontal y silbato", "por si se hace de noche y para hacerse oír"]])}<p>La <b>mochila</b> debe tener un volumen adecuado (20-30 litros para un día), con correas acolchadas y cinturón lumbar. Para colocar la carga, los objetos <mark>más pesados van cerca de la espalda</mark> y a media altura; lo que se usa a menudo (agua, mapa, crema), en los bolsillos exteriores; y la ropa de abrigo, protegida de la lluvia dentro de una bolsa. Su peso no debería superar el 10-15 % del peso corporal. Se ajusta apretando primero el cinturón lumbar sobre la cadera, que debe soportar la mayor parte del peso, y después las hombreras.</p>`,
      zonas("Las tres capas de ropa", [["1.ª transpirable", "var(--sun)"], ["2.ª térmica", "var(--red)"], ["3.ª impermeable", "var(--pen)"]], "de dentro (abajo) hacia fuera (arriba)"),
      { id: "pe9pzBmVQoY", titulo: "9 consejos para iniciarse en el senderismo de forma segura", canal: "Nuestras Escapadas En Furgo", vistas: 76414, megusta: 0 }),
    B("1.5 El mapa topográfico", `<p>Un <b>mapa topográfico</b> representa una zona del terreno vista desde arriba, con su relieve, caminos, ríos, construcciones y vegetación. En España los edita el Instituto Geográfico Nacional (IGN). Para leerlo hay que conocer tres elementos:</p><p><b>La escala</b> indica cuántas veces se ha reducido la realidad. En una escala <mark>1:25.000</mark>, 1 cm del mapa equivale a 25.000 cm reales, es decir, 250 m. Cuanto menor es el número de la escala, más detalle tiene el mapa: el 1:25.000 es ideal para senderismo y el 1:10.000 o 1:15.000, para orientación deportiva.</p><p><b>La leyenda</b> explica los símbolos y colores: caminos, carreteras, edificios, fuentes, tipos de vegetación (verde), agua (azul), relieve (marrón).</p><p><b>Las curvas de nivel</b> son líneas marrones que unen puntos de la misma altitud. La <b>equidistancia</b> es la diferencia de altura entre dos curvas consecutivas (por ejemplo, 10 m). Cuando las curvas están <b>muy juntas</b>, la pendiente es fuerte; cuando están <b>separadas</b>, el terreno es suave. Curvas concéntricas cerradas indican una cima; las que forman una «V» apuntando hacia la parte alta indican un valle o barranco, y las que apuntan hacia la parte baja, una loma. Leer el relieve permite prever el esfuerzo y elegir el mejor camino.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Curvas de nivel de una montaña: lado con curvas juntas (pendiente fuerte) y lado con curvas separadas (pendiente suave)">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[56, 45, 34, 23, 12].map((r, i) => `<ellipse cx="${118 + i * 6}" cy="94" rx="${r * 1.45}" ry="${r}" fill="none" stroke="#a0672a" stroke-width="2"/>`).join("")}
        <path d="M138 90 l 4 -8 l 4 8 z" fill="var(--red)"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="142" y="78" text-anchor="middle" fill="var(--red)">cima</text><text x="10" y="22" fill="var(--pen)">separadas = suave</text><text x="250" y="140" text-anchor="end" fill="var(--red)">juntas =</text><text x="250" y="154" text-anchor="end" fill="var(--red)">fuerte</text><text x="10" y="170" fill="var(--muted)">equidistancia: 10 m</text></g>
      </svg>`),
    B("1.6 Calcular distancias y desniveles", `<p>Con el mapa podemos planificar con precisión. Para calcular una <b>distancia real</b> se mide en el mapa (con una regla, un hilo para los caminos con curvas o el borde de la brújula) y se multiplica por el denominador de la escala. Por ejemplo, 6 cm en un mapa 1:25.000 son 6 × 25.000 = 150.000 cm = <b>1,5 km</b>. Muchos mapas incluyen una <b>escala gráfica</b>, una barra dividida en tramos de distancia real, muy práctica en el campo.</p><p>Para conocer el <mark>desnivel</mark> se cuentan las curvas de nivel que se cruzan y se multiplica por la equidistancia. Si un camino cruza 15 curvas con una equidistancia de 10 m, el desnivel es de 150 m. Las <b>curvas maestras</b>, más gruesas y con la altitud escrita, se repiten cada 5 curvas y facilitan el cálculo.</p><p>Con distancia y desnivel se dibuja el <b>perfil topográfico</b> de la ruta: una gráfica con la distancia en el eje horizontal y la altitud en el vertical, que muestra dónde están las subidas y las bajadas más duras. Las aplicaciones móviles calculan todo esto automáticamente, pero saber hacerlo a mano permite comprender lo que muestran y seguir orientándose si la tecnología falla.</p>`,
      curva("Perfil de una ruta", [[0, 0.2], [0.15, 0.28], [0.35, 0.62], [0.5, 0.86], [0.62, 0.7], [0.8, 0.4], [1, 0.22]], "distancia (km)", "altitud (m)", [[0.5, 0.86, "cima", "var(--red)"], [0.25, 0.42, "subida dura", "var(--sun)"]], "#a0672a")),
    B("1.7 La brújula", `<p>La <b>brújula</b> es un instrumento con una <b>aguja imantada</b> que siempre señala el <mark>norte magnético</mark>. La brújula de orientación (de placa) tiene estas partes: una <b>placa base</b> transparente con regla y una <b>flecha de dirección</b> de marcha; un <b>limbo</b> giratorio graduado de 0 a 360° con líneas meridianas y una <b>flecha norte</b> dibujada en su fondo; y la <b>aguja</b>, cuyo extremo rojo apunta al norte.</p><p>Tiene dos usos principales. <b>1. Orientar el mapa</b>: se coloca la brújula sobre el mapa y se gira el mapa (con la brújula encima) hasta que el norte del mapa coincida con la dirección de la aguja. Así, lo que vemos delante en el mapa está delante en el terreno. <b>2. Tomar y seguir un rumbo</b>: se coloca el borde de la placa uniendo el punto donde estamos con el punto de destino (la flecha de dirección hacia el destino); se gira el limbo hasta que sus líneas meridianas queden paralelas a los meridianos del mapa, con la flecha norte hacia el norte del mapa; se levanta la brújula y se gira el cuerpo hasta que la aguja roja coincida con la flecha norte del limbo. La flecha de dirección señala ahora el camino. Para seguirlo, conviene fijarse en un elemento lejano en esa dirección (un árbol, una roca) y caminar hasta él.</p><p>Hay que mantener la brújula lejos de objetos metálicos y del móvil, que alteran la aguja.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Brújula de placa: placa base con flecha de dirección, limbo giratorio y aguja con el extremo rojo hacia el norte">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="90" y="14" width="80" height="152" rx="10" fill="var(--bac)" fill-opacity=".18" stroke="var(--bac)" stroke-width="2.5"/>
        <path d="M130 22 l -8 14 h 16 z" fill="var(--ink)"/>
        <circle cx="130" cy="100" r="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        ${[0, 90, 180, 270].map((a, i) => { const r = a * Math.PI / 180; return `<text x="${(130 + 26 * Math.sin(r)).toFixed(1)}" y="${(104 - 26 * Math.cos(r)).toFixed(1)}" text-anchor="middle" font-size="9" font-weight="700" fill="var(--muted)" ${F}>${["N", "E", "S", "O"][i]}</text>`; }).join("")}
        <path d="M130 78 L 136 100 L 124 100 Z" fill="var(--red)"/><path d="M130 122 L 136 100 L 124 100 Z" fill="var(--ink)"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="176" y="34" fill="var(--ink)">flecha de</text><text x="176" y="48" fill="var(--ink)">dirección</text><text x="176" y="98" fill="var(--muted)">limbo</text><text x="12" y="86" fill="var(--red)">aguja:</text><text x="12" y="100" fill="var(--red)">rojo = norte</text><text x="12" y="150" fill="var(--bac)">placa base</text></g>
      </svg>`,
      { id: "dgtBhddT5m4", titulo: "Orientar el mapa utilizando una brújula", canal: "Institut Cal·lípolis", vistas: 85987, megusta: 0 }),
    B("1.8 Orientarse sin brújula y con GPS", `<p>Si no tenemos brújula, podemos <b>orientarnos con la naturaleza</b>, aunque con menos precisión. El <mark>Sol</mark> sale aproximadamente por el este y se pone por el oeste; en el hemisferio norte, a mediodía está al sur. Con un reloj de agujas también se puede encontrar el sur: se apunta la aguja horaria al Sol y la bisectriz entre ella y las 12 (las 13 en horario de verano) señala aproximadamente el sur. De noche, la <b>Estrella Polar</b> indica el norte: se localiza prolongando unas cinco veces la distancia entre las dos estrellas traseras de la Osa Mayor. Otros indicios, como el musgo en la cara norte de los árboles, son poco fiables.</p><p>Hoy en día, el <b>GPS</b> del móvil y las aplicaciones de senderismo permiten saber nuestra posición exacta, seguir un <b>track</b> (ruta grabada) y compartir la ubicación en caso de emergencia. Son herramientas muy útiles, pero tienen limitaciones: la batería se agota (más con frío), puede no haber cobertura de datos y los mapas deben descargarse antes. Por eso, el GPS debe complementar, nunca sustituir, al mapa y la brújula y al sentido común. Un consejo: activa el modo avión para ahorrar batería (el GPS sigue funcionando) y lleva una batería externa.</p>`,
      dos("Orientarse", ["Naturaleza", ["el Sol: este a oeste", "mediodía: al sur", "reloj de agujas", "Estrella Polar: norte", "musgo: poco fiable"], "var(--sun)"], ["Con tecnología", ["GPS del móvil", "track descargado", "compartir ubicación", "modo avión", "batería externa"], "var(--bac)"])),
    B("1.9 La carrera de orientación", `<p>La <mark>carrera de orientación</mark> es un deporte en el que hay que recorrer, en el menor tiempo posible, una serie de puntos de control marcados en un mapa, eligiendo libremente el camino entre ellos. Nació en Escandinavia a finales del siglo XIX como entrenamiento militar y hoy se practica en bosques, parques y ciudades, a pie, en bicicleta o con esquís.</p><p>Elementos: un <b>mapa</b> de orientación muy detallado (escala 1:10.000 o 1:15.000, con colores específicos: blanco para bosque corrible, verde para vegetación densa, amarillo para zonas abiertas), una <b>descripción de controles</b> que explica dónde está cada baliza (por ejemplo, «junto a la roca, lado norte»), las <b>balizas</b> (prismas naranja y blanco con un código) y un sistema de <b>control</b> (una tarjeta de cartón que se marca con la pinza de cada baliza o una tarjeta electrónica). En el mapa, la salida se indica con un triángulo, los controles con círculos numerados y la meta con un doble círculo.</p><p>Hay distintas modalidades: <b>en línea</b> (controles en un orden fijo), <b>score</b> (se visitan los controles que se quiera en un tiempo límite, cada uno con una puntuación) y por <b>relevos</b>. En el instituto es habitual empezar con orientación en el patio o en un parque cercano. Lo más importante es orientar siempre el mapa y llevar el dedo sobre la posición.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido de orientación: triángulo de salida, círculos de control numerados y doble círculo de meta unidos por líneas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="14" width="228" height="140" rx="6" fill="var(--leaf)" fill-opacity=".12"/>
        <ellipse cx="160" cy="60" rx="38" ry="22" fill="var(--leaf)" fill-opacity=".3"/><path d="M20 120 Q 90 100 240 128" stroke="var(--bac)" stroke-width="4" fill="none"/>
        <path d="M44 40 L 104 32 L 200 52 L 182 118 L 88 126 L 48 92" stroke="#c0398a" stroke-width="2.2" fill="none"/>
        <path d="M44 30 l 10 16 h -20 z" fill="none" stroke="#c0398a" stroke-width="2.5"/>
        ${[[104, 32, 1], [200, 52, 2], [182, 118, 3], [88, 126, 4]].map(([x, y, n]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--paper)" stroke="#c0398a" stroke-width="2.5"/><text x="${x + 12}" y="${y - 8}" font-size="11" font-weight="700" fill="#c0398a" ${F}>${n}</text>`).join("")}
        <circle cx="48" cy="92" r="9" fill="none" stroke="#c0398a" stroke-width="2.5"/><circle cx="48" cy="92" r="5" fill="none" stroke="#c0398a" stroke-width="2"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="20" y="172" fill="var(--ink)">salida ▵ · controles ○ · meta ◎</text></g>
      </svg>`),
    B("1.10 Nudos, acampada y otras técnicas", `<p>En muchas actividades en el medio natural se necesitan <b>nudos</b>. Un buen nudo debe ser fácil de hacer, seguro y fácil de deshacer. Algunos básicos son:</p>${tabla(["Nudo", "Uso"], [["Ocho", "nudo de tope o de encordamiento en escalada; muy seguro"], ["As de guía", "crear una gaza (lazo) fija que no se cierra, por ejemplo, para rescates"], ["Ballestrinque", "atar una cuerda a un poste o árbol de forma rápida"], ["Llano o rizo", "unir dos cuerdas del mismo grosor o atar vendajes"], ["Vuelta de escota", "unir dos cuerdas de distinto grosor"]])}<p>La <mark>acampada</mark> requiere conocer la normativa: en muchas zonas, la acampada libre está prohibida o limitada y hay que usar campings o zonas autorizadas. Para montar la tienda se elige un lugar llano, protegido del viento, alejado de cauces de ríos y barrancos (por el riesgo de crecidas) y de árboles aislados (por los rayos). Nunca se hace fuego fuera de las zonas habilitadas: en verano está prohibido en casi todo el monte por el riesgo de incendio. Otras actividades como la <b>escalada</b>, el <b>barranquismo</b> o el <b>piragüismo</b> requieren material homologado (casco, arnés, chaleco salvavidas), formación específica y, en la etapa escolar, la supervisión de técnicos titulados.</p>`,
      rejilla("Nudos básicos", [["Ocho", "tope y escalada"], ["As de guía", "lazo fijo"], ["Ballestrinque", "atar a un poste"], ["Llano", "unir cuerdas iguales"]])),
    B("1.11 Seguridad y emergencias en el medio natural", `<p>El medio natural tiene <mark>riesgos</mark> que hay que conocer: cambios bruscos de tiempo (tormentas, niebla, viento), frío y calor extremos, caídas, picaduras y mordeduras, desorientación, crecidas de ríos e incendios. Para prevenirlos:</p>${tabla(["Situación", "Qué hacer"], [["Tormenta", "alejarse de cimas, crestas, árboles aislados y objetos metálicos; agacharse sobre la mochila con los pies juntos"], ["Niebla", "no salir del camino; si se pierde la referencia, parar y esperar o volver"], ["Hipotermia", "señales: temblor, torpeza, confusión; resguardarse, quitar ropa mojada, abrigar, bebidas calientes"], ["Golpe de calor", "evitar las horas centrales, beber, sombra; enfriar y llamar al 112 si hay confusión"], ["Pérdida", "parar, mantener la calma, llamar al 112, volver por el camino conocido o quedarse en un lugar visible"]])}<p>La regla de oro: <b>no ir nunca solo</b> y avisar siempre de la ruta. La <b>señal internacional de socorro</b> en montaña consiste en 6 señales por minuto (silbidos, destellos o gestos), seguidas de un minuto de pausa; la respuesta es de 3 señales por minuto. Con los brazos, ambos levantados en «Y» significan «sí, necesitamos ayuda» y uno arriba y otro abajo, «no necesitamos ayuda». La aplicación del 112 de algunas comunidades y la función de emergencia del móvil envían la ubicación exacta.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Señales con los brazos para helicóptero: brazos en Y sí necesitamos ayuda, un brazo arriba y otro abajo no necesitamos ayuda">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke-width="4" stroke-linecap="round" fill="none">
          <circle cx="70" cy="50" r="11" stroke="var(--red)"/><path d="M70 61 V 108 M 70 108 L 58 140 M 70 108 L 82 140 M 70 70 L 48 38 M 70 70 L 92 38" stroke="var(--red)"/>
          <circle cx="190" cy="50" r="11" stroke="var(--leaf)"/><path d="M190 61 V 108 M 190 108 L 178 140 M 190 108 L 202 140 M 190 70 L 214 38 M 190 70 L 168 100" stroke="var(--leaf)"/>
        </g>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="70" y="160" fill="var(--red)">SÍ: necesitamos</text><text x="70" y="174" fill="var(--red)">ayuda (Y)</text><text x="190" y="160" fill="var(--leaf)">NO necesitamos</text><text x="190" y="174" fill="var(--leaf)">ayuda</text></g>
      </svg>`),
    B("1.12 Respeto al medio ambiente: no dejar rastro", `<p>Practicar actividades en la naturaleza implica una responsabilidad: <mark>dejar el entorno igual o mejor</mark> de como lo encontramos. El movimiento internacional <i>Leave No Trace</i> («no dejar rastro») resume esta actitud en siete principios:</p>${tabla(["Principio", "Ejemplo"], [["Planificar y prepararse", "conocer la normativa del espacio y llevar lo necesario"], ["Caminar y acampar en superficies resistentes", "no salirse de los senderos ni atajar en las curvas"], ["Gestionar los residuos", "llevarse toda la basura de vuelta, incluidos restos orgánicos"], ["Dejar lo que encuentres", "no arrancar plantas, coger piedras ni restos arqueológicos"], ["Minimizar el impacto del fuego", "no hacer fuego salvo en zonas habilitadas"], ["Respetar la fauna", "observar de lejos, no alimentar a los animales"], ["Ser considerado con otros visitantes", "evitar ruidos, ceder el paso, cerrar las cancelas del ganado"]])}<p>En España existe una red de <b>espacios naturales protegidos</b> —16 Parques Nacionales, como Ordesa, Doñana, Picos de Europa o el Teide, además de parques naturales y reservas— con normas propias de uso que hay que consultar. También es importante la <b>movilidad sostenible</b> para llegar a los espacios naturales (transporte público, compartir coche) y apoyar a la población local. Disfrutar de la naturaleza y cuidarla son dos caras de la misma moneda.</p>`,
      rueda("No dejar rastro", "RESPETO", [["planificar", "var(--pen)"], ["por el sendero", "var(--leaf)"], ["basura a casa", "var(--red)"], ["dejar todo", "var(--sun)"], ["sin fuego", "var(--inf)"], ["fauna lejos", "var(--bac)"]], "var(--leaf)")),
  ],
  figura: {
    titulo: "Salir al medio natural",
    svg: figCols("Salir al medio natural", [["Planificar", ["ruta y MIDE", "tiempo AEMET", "avisar"], "var(--pen)"], ["Orientarse", ["mapa", "brújula", "GPS"], "var(--bac)"], ["Seguridad", ["no ir solo", "112", "saber volver"], "var(--red)"], ["Respeto", ["por el sendero", "basura a casa", "sin fuego"], "var(--leaf)"]]),
  },
  video: { id: "qGqLuqnvROg", titulo: "Así se usa una brújula y un mapa", canal: "Chris Cage", vistas: 628837, megusta: 0, busqueda: "cómo usar una brújula y un mapa" },
  ejemplos: [
    EX("En un mapa 1:25.000, el camino mide 8 cm. ¿Cuál es la distancia real?", ["8 × 25.000 = 200.000 cm.", "200.000 cm = 2.000 m.", "2.000 m = 2 km."], "2 km."),
    EX("Una ruta tiene 10 km y 600 m de desnivel de subida. Estima el tiempo.", ["Llano: 10 km a 4 km/h = 2,5 h.", "Desnivel: 600 m a 400 m/h = 1,5 h.", "Total aproximado: 4 h más paradas."], "Unas 4 horas y media con descansos."),
    EX("Un sendero cruza 12 curvas de nivel con equidistancia de 20 m. ¿Qué desnivel tiene?", ["Curvas cruzadas: 12.", "Equidistancia: 20 m.", "12 × 20 = 240 m."], "240 m de desnivel."),
    EX("Encuentras una marca blanca y amarilla con forma de aspa. ¿Qué indica?", ["Blanco y amarillo: sendero PR.", "Aspa: dirección equivocada.", "Hay que volver al último cruce."], "No es por ahí."),
    EX("Organiza la mochila para una salida de un día.", ["Junto a la espalda y a media altura: agua y comida (lo más pesado).", "Dentro, en bolsa: ropa de abrigo e impermeable.", "Bolsillos exteriores: mapa, crema, gafas, móvil.", "Cinturón lumbar ajustado primero."], "Peso cerca de la espalda y lo útil a mano."),
    EX("Estás en la cima y se acerca una tormenta eléctrica. ¿Qué haces?", ["Bajar de la cima y las crestas cuanto antes.", "Alejarse de árboles aislados y objetos metálicos.", "Si no hay tiempo, agacharse sobre la mochila con los pies juntos."], "Buscar zonas bajas y no ser el punto más alto."),
  ],
  errores: [
    "Salir sin consultar el tiempo ni avisar a nadie de la ruta.",
    "Estrenar las botas el día de la excursión.",
    "Confiar solo en el móvil sin mapa, sin batería extra ni track descargado.",
    "Confundir curvas de nivel juntas (pendiente fuerte) con terreno llano.",
    "Usar la brújula junto al móvil o a objetos metálicos.",
    "Dejar restos orgánicos «porque son biodegradables» o salirse del sendero.",
  ],
  ejercicios: EJ([
    ["Escribe dos actividades de tierra, dos de agua y una de aire.", "Tierra: senderismo, orientación. Agua: piragüismo, vela. Aire: parapente."],
    ["¿Qué colores tiene la señalización de un GR?", "Blanco y rojo."],
    ["¿Qué indica una marca en aspa?", "Dirección equivocada."],
    ["¿Qué significa MIDE?", "Método de Información de Excursiones: medio, itinerario, desplazamiento y esfuerzo."],
    ["¿Cuáles son las tres capas de ropa?", "Transpirable, térmica e impermeable-cortavientos."],
    ["¿Dónde van los objetos más pesados en la mochila?", "Cerca de la espalda y a media altura."],
    ["¿Qué significa una escala 1:25.000?", "Que 1 cm del mapa equivale a 25.000 cm (250 m) reales."],
    ["¿Qué son las curvas de nivel?", "Líneas que unen puntos de igual altitud."],
    ["¿Qué indica el extremo rojo de la aguja de la brújula?", "El norte magnético."],
    ["¿Qué estrella indica el norte por la noche?", "La Estrella Polar."],
    ["¿Qué es una baliza en orientación?", "El prisma naranja y blanco que marca un punto de control."],
    ["¿Cuál es la señal internacional de socorro en montaña?", "6 señales por minuto y un minuto de pausa."],
  ], [
    ["Explica qué es la incertidumbre del medio y por qué es una característica de estas actividades.", "El entorno cambia (terreno, clima) y no es totalmente previsible, por lo que hay que adaptarse y tomar decisiones constantemente."],
    ["Diferencia GR, PR y SL en longitud y colores.", "GR: más de 50 km, blanco y rojo. PR: 10-50 km, blanco y amarillo. SL: menos de 10 km, blanco y verde."],
    ["Explica la regla para estimar el tiempo de una ruta.", "4-5 km por hora en llano y sumar una hora por cada 400 m de desnivel de subida, más paradas."],
    ["¿Por qué hay que fijar una hora límite para dar la vuelta?", "Para volver con luz y con fuerzas aunque no se haya llegado al objetivo; saber renunciar evita accidentes."],
    ["Explica la función de cada capa de ropa.", "La primera aleja el sudor de la piel, la segunda retiene el calor y la tercera protege de la lluvia y el viento."],
    ["Explica cómo se interpretan las curvas de nivel juntas y separadas.", "Juntas: pendiente fuerte. Separadas: pendiente suave o terreno llano."],
    ["¿Qué son la equidistancia y las curvas maestras?", "Equidistancia: diferencia de altitud entre curvas consecutivas. Maestras: curvas más gruesas con la altitud, cada 5 curvas."],
    ["Explica cómo orientar el mapa con la brújula.", "Se coloca la brújula sobre el mapa y se gira el mapa con ella hasta que el norte del mapa coincida con la aguja roja."],
    ["Describe los pasos para tomar un rumbo con la brújula.", "Unir con el borde de la placa la posición y el destino; girar el limbo hasta alinear sus meridianos con los del mapa; girar el cuerpo hasta que la aguja coincida con la flecha norte del limbo y seguir la flecha de dirección."],
    ["Explica cómo encontrar el sur con un reloj de agujas.", "Apuntar la aguja horaria al Sol; la bisectriz entre ella y las 12 (13 en horario de verano) señala aproximadamente el sur."],
    ["¿Qué ventajas y limitaciones tiene el GPS del móvil?", "Ventajas: posición exacta, tracks, compartir ubicación. Limitaciones: batería, cobertura, mapas sin descargar."],
    ["Explica dos modalidades de carrera de orientación.", "En línea: controles en orden fijo. Score: se eligen los controles en un tiempo límite, cada uno con puntuación."],
    ["¿Cómo se actúa ante una hipotermia?", "Resguardarse del frío y el viento, quitar la ropa mojada, abrigar y dar bebidas calientes si está consciente; 112 si es grave."],
    ["Explica tres principios de «no dejar rastro».", "Caminar por superficies resistentes, llevarse toda la basura y no hacer fuego fuera de zonas habilitadas (también respetar fauna y dejar lo que se encuentra)."],
  ], [
    ["Planifica una ruta real de tu entorno: nombre, tipo de sendero, distancia, desnivel, tiempo, MIDE, material y plan B.", "Respuesta abierta con datos coherentes: cálculo de tiempo con la regla, material de la tabla, hora límite y alternativa en caso de mal tiempo."],
    ["Dibuja el perfil topográfico de una ruta a partir de un mapa con curvas de nivel.", "Respuesta abierta: eje horizontal con distancia, eje vertical con altitud, puntos de cada cruce de curva unidos."],
    ["Diseña una carrera de orientación en el patio con 8 controles y tarjeta de control.", "Respuesta abierta: plano del patio a escala, controles numerados con descripción, tarjeta con casillas y pinzas o códigos."],
    ["Un grupo planea subir a una cima en agosto saliendo a las 13:00. Analiza los riesgos y propón cambios.", "Riesgos: calor, golpe de calor y tormentas de tarde; salir temprano, llevar más agua, fijar hora límite y consultar AEMET."],
    ["Explica por qué la brújula señala el norte magnético y no el geográfico, y qué es la declinación.", "La aguja se alinea con el campo magnético terrestre, cuyo polo no coincide con el geográfico; la diferencia angular es la declinación, pequeña actualmente en España."],
    ["Debate sobre la masificación de algunos espacios naturales: causas, consecuencias y soluciones.", "Causas: redes sociales, fácil acceso. Consecuencias: erosión, basura, molestias a la fauna. Soluciones: cupos, reservas, transporte público, educación ambiental."],
    ["Elabora un protocolo de actuación si un compañero se tuerce el tobillo a 5 km del final de la ruta.", "PAS, valoración, protocolo PRICE con lo disponible, decidir si puede caminar con ayuda; si no, 112 con ubicación exacta, abrigar y esperar acompañado."],
    ["Compara las ventajas de orientarse con mapa y brújula y con GPS.", "Mapa y brújula: no dependen de batería ni cobertura, comprensión del terreno. GPS: rapidez y precisión. Lo ideal es combinarlos."],
    ["Diseña un cartel con los siete principios de «no dejar rastro» para un parque cercano.", "Respuesta abierta con los siete principios, ejemplos concretos del lugar y dibujos claros."],
    ["Calcula: mapa 1:50.000, recorrido de 14 cm, 22 curvas con equidistancia de 20 m. Distancia, desnivel y tiempo estimado.", "Distancia: 14 × 50.000 = 700.000 cm = 7 km. Desnivel: 440 m. Tiempo: 7/4 = 1,75 h + 440/400 = 1,1 h ≈ 2 h 50 min sin paradas."],
  ]),
  quiz: QS([
    ["Una característica de las actividades en el medio natural es…", ["la incertidumbre del entorno", "el espacio fijo", "la ausencia de riesgo", "el árbitro"], "El medio cambia."],
    ["El piragüismo es una actividad de…", ["agua", "tierra", "aire", "nieve"], "Medio acuático."],
    ["Un sendero PR se marca en…", ["blanco y amarillo", "blanco y rojo", "blanco y verde", "azul"], "Pequeño Recorrido."],
    ["Un GR tiene…", ["más de 50 km", "menos de 10 km", "entre 10 y 50 km", "1 km"], "Gran Recorrido."],
    ["Dos franjas en ángulo indican…", ["cambio de dirección", "continuidad", "dirección equivocada", "fin del camino"], "Giro."],
    ["El método MIDE valora…", ["medio, itinerario, desplazamiento y esfuerzo", "mapas y GPS", "ropa y calzado", "nudos"], "Del 1 al 5."],
    ["En llano se camina aproximadamente a…", ["4-5 km/h", "10 km/h", "1 km/h", "15 km/h"], "Paso normal."],
    ["La primera capa de ropa debe ser…", ["transpirable", "de algodón grueso", "impermeable", "de plumas"], "Aleja el sudor."],
    ["En la mochila, lo más pesado va…", ["cerca de la espalda", "arriba del todo", "en los bolsillos", "colgando"], "Equilibrio."],
    ["En escala 1:25.000, 4 cm son…", ["1 km", "100 m", "25 km", "4 km"], "4 × 250 m."],
    ["Curvas de nivel muy juntas indican…", ["pendiente fuerte", "terreno llano", "un río", "un camino"], "Mucho desnivel."],
    ["La equidistancia es…", ["la diferencia de altura entre curvas", "la distancia entre pueblos", "la escala", "el rumbo"], "Por ejemplo, 10 m."],
    ["La aguja roja de la brújula señala…", ["el norte magnético", "el sur", "el destino", "el este"], "Imantada."],
    ["Orientar el mapa es…", ["hacer coincidir su norte con el norte real", "doblarlo", "leer la leyenda", "medir distancias"], "Mapa y terreno alineados."],
    ["La Estrella Polar indica…", ["el norte", "el sur", "el este", "el oeste"], "Osa Mayor."],
    ["En orientación, la meta se marca con…", ["un doble círculo", "un triángulo", "un cuadrado", "una cruz"], "Salida: triángulo."],
    ["El nudo para unir dos cuerdas iguales es el…", ["llano", "ocho", "ballestrinque", "as de guía"], "También rizo."],
    ["Ante una tormenta en la cima hay que…", ["bajar y alejarse de puntos altos", "refugiarse bajo un árbol aislado", "subir más", "usar el paraguas metálico"], "No ser el punto más alto."],
    ["La señal de socorro en montaña es…", ["6 señales por minuto", "3 señales por minuto", "1 señal por hora", "10 silbidos seguidos"], "Respuesta: 3."],
    ["«No dejar rastro» implica…", ["llevarse toda la basura", "enterrar la basura", "quemarla", "dejar la orgánica"], "Principio básico."],
  ]),
  examen: QS([
    ["Por cada 400 m de desnivel de subida se suma aproximadamente…", ["1 hora", "10 minutos", "3 horas", "nada"], "Regla práctica."],
    ["Los brazos en «Y» ante un helicóptero significan…", ["sí, necesitamos ayuda", "no necesitamos ayuda", "saludo", "vamos bien"], "Señal internacional."],
    ["La hipotermia se caracteriza por…", ["temblor, torpeza y confusión", "piel caliente y roja", "sed", "hambre"], "Frío."],
    ["El mapa de orientación usa escalas…", ["1:10.000 o 1:15.000", "1:1.000.000", "1:200.000", "sin escala"], "Mucho detalle."],
    ["Las curvas maestras se repiten cada…", ["5 curvas", "2 curvas", "10 curvas", "curva"], "Con altitud escrita."],
    ["Para ahorrar batería con el GPS se usa…", ["el modo avión", "el brillo máximo", "los datos móviles", "el bluetooth"], "El GPS sigue funcionando."],
    ["Para acampar se evita…", ["el cauce de ríos y barrancos", "el terreno llano", "las zonas autorizadas", "el refugio del viento"], "Crecidas."],
    ["España tiene actualmente…", ["16 Parques Nacionales", "3 Parques Nacionales", "100 Parques Nacionales", "ninguno"], "Red de Parques Nacionales."],
  ]),
  feynman: ["Qué son las actividades en el medio natural y qué beneficios tienen", "Cómo se señalizan los senderos y cómo se planifica una salida", "Cómo se lee un mapa topográfico: escala y curvas de nivel", "Cómo se orienta el mapa y se toma un rumbo con la brújula", "Cómo actuar con seguridad y sin dejar rastro"],
  mapa: mapa("MEDIO NATURAL", "var(--leaf)", [
    ["Planificar", "ruta · MIDE · tiempo · mochila", "var(--pen)"],
    ["Orientarse", "mapa · escala · brújula", "var(--bac)"],
    ["Seguridad", "no ir solo · 112 · tormenta", "var(--red)"],
    ["Respeto", "no dejar rastro", "var(--sun)"],
  ], 280),
  tarjetas: [
    ["GR", "Gran Recorrido: blanco y rojo, más de 50 km."],
    ["PR", "Pequeño Recorrido: blanco y amarillo, 10-50 km."],
    ["SL", "Sendero Local: blanco y verde, menos de 10 km."],
    ["MIDE", "Medio, itinerario, desplazamiento y esfuerzo."],
    ["Tres capas", "Transpirable, térmica e impermeable."],
    ["Escala 1:25.000", "1 cm = 250 m."],
    ["Curvas de nivel", "Unen puntos de igual altitud."],
    ["Equidistancia", "Desnivel entre dos curvas consecutivas."],
    ["Orientar el mapa", "Hacer coincidir su norte con la aguja."],
    ["Rumbo", "Dirección en grados hacia un destino."],
    ["Señal de socorro", "6 por minuto; respuesta 3 por minuto."],
    ["No dejar rastro", "Siete principios para cuidar la naturaleza."],
  ],
  glosario: [
    ["Medio natural", "Entorno no urbanizado: montaña, bosque, ríos, mar, aire."],
    ["Senderismo", "Recorrido a pie por caminos señalizados sin técnicas especiales."],
    ["Track", "Ruta grabada con GPS que se puede seguir."],
    ["Desnivel", "Diferencia de altitud entre dos puntos."],
    ["Mapa topográfico", "Mapa que representa el relieve y los elementos del terreno."],
    ["Escala", "Relación entre las medidas del mapa y las reales."],
    ["Leyenda", "Explicación de los símbolos de un mapa."],
    ["Curva de nivel", "Línea que une puntos de igual altitud."],
    ["Equidistancia", "Diferencia de altitud entre curvas consecutivas."],
    ["Perfil topográfico", "Gráfica de la altitud a lo largo de un recorrido."],
    ["Brújula", "Instrumento con aguja imantada que señala el norte magnético."],
    ["Limbo", "Disco giratorio graduado de la brújula."],
    ["Rumbo", "Ángulo entre el norte y la dirección de marcha."],
    ["Baliza", "Señal que marca un control en orientación."],
    ["Hipotermia", "Bajada peligrosa de la temperatura corporal."],
    ["Espacio natural protegido", "Zona con normas de conservación por su valor natural."],
  ],
  situacion: {
    titulo: "Diseñamos la ruta de fin de curso",
    reto: "La clase quiere hacer una excursión de senderismo a final de curso. Vuestro grupo debe diseñar una propuesta completa y segura, presentarla al departamento y guiar un tramo usando mapa y brújula.",
    pasos: [
      "Busca tres rutas posibles cerca del centro y compara distancia, desnivel, tipo de sendero y MIDE.",
      "Elige una y dibuja su perfil topográfico, calcula el tiempo y fija horarios y hora límite.",
      "Elabora la lista de material individual y colectivo, y el plan de seguridad (botiquín, 112, plan B).",
      "Prepara una actividad de orientación en un tramo de la ruta con mapa y brújula.",
      "Incluye normas de «no dejar rastro» y datos del espacio natural.",
      "Presenta la propuesta y, tras la salida, evalúa qué funcionó y qué mejorarías.",
    ],
    producto: "Dossier de la ruta (mapa, perfil, horarios, material, plan de seguridad) y guía de un tramo.",
    evaluacion: [
      "Los cálculos de distancia, desnivel y tiempo son correctos.",
      "El plan de seguridad prevé riesgos realistas y alternativas.",
      "Usa correctamente el mapa y la brújula durante la guía.",
      "Integra el respeto al medio ambiente en todo el diseño.",
    ],
  },
  familias: ["Haced juntos un sendero señalizado cercano y fijaos en las marcas.", "Practicad a orientar un mapa del barrio o de un parque con el móvil o una brújula.", "Revisad el material de montaña antes de las excursiones.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Interacción eficiente y sostenible con el entorno (RD 217/2022, Educación Física 4º ESO): planificación y realización de actividades en el medio natural, orientación con mapa y brújula, seguridad y prevención de riesgos, conservación del entorno, uso responsable de espacios naturales y movilidad sostenible.",
    ideas: ["Carrera de orientación en el centro y en un parque cercano.", "Salida de senderismo planificada por el alumnado.", "Coordinación con Geografía (mapas, escalas) y Biología (ecosistemas).", "Uso de aplicaciones de mapas y tracks con análisis crítico."],
  },
  fuentes: [
    RD,
    { t: "FEDME: senderos homologados y señalización", url: "https://www.fedme.es/" },
    { t: "Instituto Geográfico Nacional: mapas topográficos", url: "https://www.ign.es/" },
    { t: "Método MIDE para valorar excursiones", url: "https://www.montanasegura.com/mide/" },
    { t: "Red de Parques Nacionales (MITECO)", url: "https://www.miteco.gob.es/es/parques-nacionales-oapn.html" },
  ],
  revisado: "2026-11-13",
};
