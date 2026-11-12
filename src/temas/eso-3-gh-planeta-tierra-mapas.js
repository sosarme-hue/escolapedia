// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El planeta Tierra y los mapas",
  minutos: 35,
  objetivos: ["Explicar la forma y los movimientos de la Tierra y sus consecuencias", "Localizar cualquier punto con latitud y longitud", "Leer un mapa: escala, leyenda y tipo de proyección"],
  claves: ["rotación", "traslación", "latitud", "longitud", "escala", "proyección"],
  pregunta: {
    texto: "En un mapa del mundo de los que hay en las aulas, Groenlandia parece casi tan grande como África. En realidad, África es unas 14 veces mayor. ¿Por qué nos engaña el mapa?",
    respuesta: "Porque la Tierra es casi una esfera y un mapa es plano: al «aplanarla» siempre se deforma algo. La <mark>proyección de Mercator</mark> respeta las formas y las direcciones, pero agranda mucho las tierras cercanas a los polos. Todos los mapas son una <b>representación</b> con ventajas e inconvenientes.",
  },
  bloques: [
    {
      html: `<h3>La Tierra en el sistema solar</h3><p>La Tierra es el tercer planeta del sistema solar y el único con vida conocida. Tiene forma de <b>esfera ligeramente achatada</b> por los polos (un geoide). Gira sobre sí misma en unas 24 horas (<mark>rotación</mark>), lo que produce el día y la noche, y da una vuelta alrededor del Sol en 365 días y 6 horas (<mark>traslación</mark>). Por eso cada cuatro años sumamos un día: el año bisiesto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La Tierra gira sobre su eje inclinado y da la vuelta alrededor del Sol">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="130" cy="92" rx="104" ry="52" fill="none" stroke="var(--line)" stroke-width="2.5" stroke-dasharray="6 5"/>
        <circle cx="130" cy="92" r="24" fill="var(--sun)"/>
        <circle cx="226" cy="92" r="14" fill="var(--pen)"/><path d="M220 74 L 232 110" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="34" cy="92" r="14" fill="var(--pen)"/><path d="M28 74 L 40 110" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="97" fill="var(--ink)">Sol</text><text x="130" y="28" fill="var(--pen)">traslación: 365 días</text><text x="130" y="166" fill="var(--red)">rotación: 24 horas</text></g></svg>`,
    },
    {
      html: `<h3>Las estaciones y las zonas de la Tierra</h3><p>El eje de la Tierra está <b>inclinado unos 23,5°</b>. Por eso, durante la traslación, cada hemisferio recibe los rayos del Sol más directos en una época del año (verano) y más oblicuos en otra (invierno). Los <b>trópicos</b> y los <b>círculos polares</b> dividen la Tierra en cinco <mark>zonas climáticas</mark>: una cálida entre los trópicos, dos templadas y dos frías alrededor de los polos.</p>`,
      svg: filas("Las cinco zonas de la Tierra según la llegada del Sol", [["Fría N", "más allá del círculo polar", "var(--inf)"], ["Templada N", "entre trópico y polar", "var(--leaf)"], ["Cálida", "entre los dos trópicos", "var(--red)"], ["Templada S", "entre trópico y polar", "var(--leaf)"], ["Fría S", "más allá del círculo polar", "var(--inf)"]]),
    },
    {
      html: `<h3>Paralelos, meridianos y coordenadas</h3><p>Para localizar un punto usamos una red de líneas imaginarias. Los <b>paralelos</b> son círculos paralelos al <b>ecuador</b> (0°). Los <b>meridianos</b> van de polo a polo; el de referencia es el de <b>Greenwich</b> (0°). La <mark>latitud</mark> es la distancia en grados al ecuador (0° a 90°, norte o sur) y la <mark>longitud</mark>, la distancia al meridiano de Greenwich (0° a 180°, este u oeste). Madrid está en 40° N, 3° O.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Globo con el ecuador, paralelos, el meridiano de Greenwich y un punto con su latitud y longitud">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="110" cy="90" r="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M40 90 H 180" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M52 55 H 168 M52 125 H 168" stroke="var(--line)" stroke-width="1.5"/>
        <ellipse cx="110" cy="90" rx="30" ry="70" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M110 20 V 160" stroke="var(--line)" stroke-width="1.5"/>
        <circle cx="132" cy="55" r="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>
        <g ${F} font-size="11.5" font-weight="700"><text x="186" y="94" fill="var(--red)">ecuador 0°</text><text x="186" y="58" fill="var(--ink)">punto 40° N</text><text x="150" y="172" fill="var(--pen)">Greenwich 0°</text></g></svg>`,
    },
    {
      html: `<h3>Los mapas y la escala</h3><p>Un <b>mapa</b> es una representación reducida y plana de la superficie terrestre. La <mark>escala</mark> indica cuántas veces se ha reducido la realidad. En la escala numérica 1:50.000, 1 cm del mapa equivale a 50.000 cm (500 m) en la realidad. La escala gráfica es una regla dibujada. Cuanto <b>menor</b> es el denominador, mayor es la escala y más detalle se ve: un plano de ciudad (1:10.000) frente a un mapa de España (1:6.000.000).</p>`,
      svg: dos("Escala grande frente a escala pequeña", ["Grande", ["1:10.000", "poco territorio", "mucho detalle", "planos de ciudad", "senderismo"], "var(--leaf)"], ["Pequeña", ["1:6.000.000", "mucho territorio", "poco detalle", "mapas de países", "atlas del mundo"], "var(--pen)"]),
    },
    {
      html: `<h3>Tipos de mapas</h3><p>Los <b>mapas topográficos</b> representan el relieve con <mark>curvas de nivel</mark>, líneas que unen puntos de la misma altitud; cuanto más juntas están, más pendiente tiene el terreno. Los <b>mapas temáticos</b> muestran un solo tema: clima, población, carreteras, votos. Todo mapa debe tener <b>título, orientación (norte), escala y leyenda</b>, que explica el significado de colores y símbolos.</p>`,
      svg: rueda("Elementos que debe tener todo mapa", "MAPA", [["título", "var(--pen)"], ["escala", "var(--red)"], ["leyenda", "var(--leaf)"], ["orientación", "var(--sun)"]], "var(--ink)"),
    },
  ],
  figura: {
    titulo: "Las tres grandes proyecciones",
    svg: figCols("Proyección cilíndrica, cónica y azimutal con su uso", [
      ["Cilíndrica", ["como un cilindro", "bien en el ecuador", "deforma los polos", "ej.: Mercator"], "var(--pen)"],
      ["Cónica", ["como un cono", "latitudes medias", "mapas de países", "ej.: España"], "var(--leaf)"],
      ["Azimutal", ["un plano tangente", "bien en el centro", "zonas polares", "rutas de avión"], "var(--red)"],
    ]),
  },
  video: { id: "u1eqEvVzagk", titulo: "Proyecciones cartográficas: por qué nos mienten los mapas", canal: "Un Mundo Inmenso", vistas: 1966280, megusta: 0, busqueda: "proyecciones cartográficas" },
  quiz: [
    { q: "¿Qué movimiento de la Tierra produce el día y la noche?", o: ["La traslación", "La rotación", "La inclinación"], a: 1, e: "La Tierra gira sobre sí misma en unas 24 horas." },
    { q: "La latitud mide la distancia en grados…", o: ["al meridiano de Greenwich", "al ecuador", "al polo sur"], a: 1, e: "Va de 0° en el ecuador a 90° en los polos." },
    { q: "En un mapa 1:100.000, 1 cm equivale a…", o: ["100 m", "1 km", "10 km"], a: 1, e: "100.000 cm = 1.000 m = 1 km." },
    { q: "¿Qué indican las curvas de nivel muy juntas?", o: ["Terreno llano", "Mucha pendiente", "Un río"], a: 1, e: "La altitud cambia mucho en poca distancia." },
    { q: "¿Qué explica la leyenda de un mapa?", o: ["La escala", "El significado de colores y símbolos", "El autor"], a: 1, e: "Es la «clave» para leer el mapa." },
  ],
  examen: [
    { q: "Las estaciones se producen sobre todo por…", o: ["la distancia al Sol", "la inclinación del eje terrestre", "la rotación"], a: 1, e: "La inclinación hace que los rayos lleguen más o menos directos." },
    { q: "¿Qué escala tiene más detalle?", o: ["1:5.000", "1:500.000", "1:5.000.000"], a: 0, e: "Cuanto menor es el denominador, mayor es la escala." },
    { q: "La longitud de un punto al oeste de Greenwich se expresa…", o: ["en grados N", "en grados O", "en grados S"], a: 1, e: "La longitud es este u oeste; la latitud, norte o sur." },
  ],
  feynman: ["Qué diferencia hay entre rotación y traslación", "Cómo se localiza un lugar con latitud y longitud", "Qué significa la escala 1:50.000", "Por qué todos los mapas deforman algo"],
  mapa: mapa("LA TIERRA Y LOS MAPAS", "var(--pen)", [
    ["Movimientos", "rotación · traslación", "var(--sun)"],
    ["Coordenadas", "latitud · longitud", "var(--red)"],
    ["Escala", "numérica · gráfica", "var(--leaf)"],
    ["Mapas", "topográficos · temáticos", "var(--ink)"],
  ], 260),
  tarjetas: [
    ["Rotación", "Giro de la Tierra sobre su eje en unas 24 horas: día y noche."],
    ["Traslación", "Vuelta de la Tierra alrededor del Sol en 365 días y 6 horas."],
    ["Latitud", "Distancia en grados de un punto al ecuador (N o S)."],
    ["Longitud", "Distancia en grados de un punto al meridiano de Greenwich (E u O)."],
    ["Escala 1:50.000", "1 cm del mapa son 50.000 cm (500 m) en la realidad."],
  ],
  familias: ["Buscad juntos vuestra casa en un mapa digital y anotad su latitud y longitud.", "Con un mapa de carreteras, calculad la distancia real entre dos pueblos usando la escala.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Tecnologías de la información geográfica: la Tierra, sus movimientos, la red de coordenadas y la lectura e interpretación de mapas (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Gincana de coordenadas con un globo terráqueo o un visor de mapas.", "Comparar el tamaño real de países con una web de proyecciones.", "Dibujar las curvas de nivel de una montaña de plastilina cortada en capas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Instituto Geográfico Nacional: recursos educativos", url: "https://www.ign.es/web/ign/portal/recursos-educativos" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular distancias reales con la escala y diferencias horarias con los husos", "Conocer las tecnologías de información geográfica (SIG, GPS, teledetección)"],
  bloques: [
    { tras: "La Tierra en el sistema solar", html: `<h3>Solsticios y equinoccios</h3><p>A lo largo de la traslación hay cuatro momentos clave. En el <b>solsticio de verano</b> (hacia el 21 de junio en el hemisferio norte) el Sol cae perpendicular sobre el trópico de Cáncer y tenemos el día más largo del año. En el <b>solsticio de invierno</b> (hacia el 21 de diciembre) cae sobre el trópico de Capricornio y tenemos la noche más larga. En los <mark>equinoccios</mark> (hacia el 20 de marzo y el 23 de septiembre) el Sol cae sobre el ecuador y el día y la noche duran lo mismo en toda la Tierra. En el hemisferio sur las estaciones van al revés: cuando en España es verano, en Argentina es invierno.</p>${tabla(["Fecha aproximada", "Hemisferio norte", "Hemisferio sur"], [["20 de marzo", "equinoccio de primavera", "equinoccio de otoño"], ["21 de junio", "solsticio de verano", "solsticio de invierno"], ["23 de septiembre", "equinoccio de otoño", "equinoccio de primavera"], ["21 de diciembre", "solsticio de invierno", "solsticio de verano"]])}` },
    { tras: "Paralelos, meridianos y coordenadas", html: `<h3>Los husos horarios</h3><p>Como la Tierra gira 360° en 24 horas, cada hora gira <b>15°</b>. Por eso se dividió el planeta en <mark>24 husos horarios</mark> de 15° de longitud cada uno, a partir del meridiano de Greenwich. Hacia el <b>este</b> la hora aumenta (se suma una hora por huso) y hacia el <b>oeste</b> disminuye. Al otro lado de Greenwich, cerca del meridiano 180°, está la <b>línea internacional de cambio de fecha</b>: al cruzarla hacia el oeste se suma un día. España peninsular está en el huso de Greenwich, pero usa la hora de Europa central (una hora más, y dos en verano); Canarias va una hora por detrás de la península.</p>`, video: { id: "NFLZfS1Gy0Q", titulo: "¿Qué esconden los paralelos y meridianos?", canal: "Un Mundo Inmenso", vistas: 608604, megusta: 0 } },
    { tras: "Los mapas y la escala", html: `<h3>Calcular distancias con la escala</h3><p>Para pasar del mapa a la realidad se <b>multiplica</b> la medida del mapa por el denominador de la escala y luego se pasa a la unidad adecuada. Si en un mapa 1:200.000 dos pueblos están a 4 cm, la distancia real es 4 × 200.000 = 800.000 cm = <mark>8 km</mark>. Para el camino inverso se divide: 15 km reales en un mapa 1:500.000 son 1.500.000 cm / 500.000 = 3 cm. Recuerda las equivalencias: 1 m = 100 cm y 1 km = 100.000 cm. La escala gráfica tiene una ventaja: si se amplía o reduce el mapa con una fotocopiadora, la regla cambia a la vez y sigue siendo correcta.</p>` },
    { tras: "Tipos de mapas", html: `<h3>Las proyecciones cartográficas</h3><p>Una <b>proyección</b> es el método para pasar la superficie esférica de la Tierra a un plano. Ninguna es perfecta: unas conservan las <b>formas</b> (conformes), otras las <b>superficies</b> (equivalentes) y otras las distancias desde un punto. La de <mark>Mercator</mark> (1569) es cilíndrica y conforme; fue muy útil para navegar, pero agranda las zonas polares. La de <b>Peters</b> respeta el tamaño real de los continentes, aunque deforma sus formas. Las <b>cónicas</b> se usan para países de latitudes medias, como España, y las <b>azimutales</b>, para las regiones polares y las rutas aéreas, porque la línea recta desde el centro es el camino más corto.</p>` },
    { tras: "Tipos de mapas", html: `<h3>Las tecnologías de información geográfica</h3><p>Hoy los mapas se hacen y se consultan con herramientas digitales. La <b>teledetección</b> obtiene imágenes de la Tierra desde satélites o aviones; el programa europeo <b>Copernicus</b> vigila incendios, sequías o el deshielo. El <mark>GPS</mark> (y el europeo <b>Galileo</b>) calcula nuestra posición con señales de varios satélites. Los <b>Sistemas de Información Geográfica (SIG)</b> combinan capas de datos sobre un mapa: carreteras, población, riesgo de inundación… Los usan ayuntamientos, empresas y servicios de emergencia. En España, el <b>Instituto Geográfico Nacional</b> ofrece gratis sus mapas en el visor del IGN.</p>`, video: { id: "4wFaT3TBEo4", titulo: "Escalas, mapas y planos: semejanza", canal: "Susi Profe", vistas: 798177, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "En un mapa 1:250.000, dos ciudades están separadas 6 cm. ¿Cuál es la distancia real?", pasos: ["Multiplica: 6 × 250.000 = 1.500.000 cm.", "Pasa a metros dividiendo entre 100: 15.000 m.", "Pasa a kilómetros dividiendo entre 1.000: 15 km."], resultado: "15 km." },
    { enunciado: "En Madrid (huso +1 en invierno) son las 12:00. ¿Qué hora es en Nueva York (huso −5)?", pasos: ["Diferencia de husos: de +1 a −5 hay 6 husos.", "Nueva York está al oeste, así que la hora es menor.", "12:00 − 6 h = 6:00."], resultado: "Son las 6:00 de la mañana en Nueva York." },
    { enunciado: "Un barco está en 40° N y 3° O. Otro está en 40° S y 3° O. ¿Qué tienen en común y en qué se diferencian?", pasos: ["Misma longitud: los dos están sobre el meridiano 3° O.", "Latitud distinta: uno al norte del ecuador y otro al sur.", "Están a la misma distancia del ecuador, uno en cada hemisferio."], resultado: "Comparten meridiano y distancia al ecuador, pero están en hemisferios opuestos." },
  ],
  errores: [
    "Confundir latitud (norte-sur, respecto al ecuador) con longitud (este-oeste, respecto a Greenwich).",
    "Pensar que hace calor en verano porque la Tierra está más cerca del Sol: en realidad está más lejos en julio.",
    "Creer que una escala 1:1.000.000 es «más grande» que una 1:10.000 porque el número es mayor.",
    "Olvidar pasar los centímetros a kilómetros al calcular distancias con la escala.",
    "Pensar que el mapa de Mercator muestra el tamaño real de los países.",
  ],
  ejercicios: [
    { q: "¿Cuánto dura la rotación y qué consecuencia tiene?", sol: "Unas 24 horas. Produce la sucesión del día y la noche." },
    { q: "¿Por qué hay años bisiestos?", sol: "Porque la traslación dura 365 días y unas 6 horas; cada cuatro años esas horas suman un día, que se añade el 29 de febrero." },
    { q: "Nombra los paralelos principales y su latitud aproximada.", sol: "Ecuador (0°), trópico de Cáncer (23,5° N), trópico de Capricornio (23,5° S), círculo polar ártico (66,5° N) y círculo polar antártico (66,5° S)." },
    { q: "Localiza en grados: un punto sobre el ecuador y el meridiano de Greenwich.", sol: "0° de latitud y 0° de longitud. Está en el golfo de Guinea, en el océano Atlántico." },
    { q: "En un mapa 1:50.000, ¿cuántos cm ocupa un camino real de 2 km?", sol: "2 km = 200.000 cm. 200.000 / 50.000 = 4 cm." },
    { q: "¿Qué escala usarías para una excursión por la montaña y cuál para ver todo un continente?", sol: "Para la excursión, una escala grande como 1:25.000 (mucho detalle). Para el continente, una pequeña como 1:20.000.000." },
    { q: "Si en Londres (huso 0) son las 10:00, ¿qué hora es en Tokio (huso +9)?", sol: "Tokio está 9 husos al este: 10:00 + 9 h = 19:00." },
    { q: "¿Qué ventaja y qué inconveniente tiene la proyección de Mercator?", sol: "Ventaja: conserva las formas y los ángulos, útil para navegar. Inconveniente: agranda mucho las tierras cercanas a los polos." },
    { q: "¿Qué cuatro elementos debe tener un mapa?", sol: "Título, orientación (flecha del norte), escala y leyenda." },
    { q: "Cita dos usos de los SIG en la vida diaria.", sol: "Por ejemplo: planificar rutas de autobús, localizar zonas con riesgo de inundación, decidir dónde abrir un centro de salud o gestionar emergencias." },
  ],
  quiz: [
    { q: "Cada hora, la Tierra gira…", o: ["15°", "30°", "1°"], a: 0, e: "360° / 24 h = 15°." },
    { q: "El día más largo del año en el hemisferio norte es…", o: ["el solsticio de verano", "el equinoccio de primavera", "el solsticio de invierno"], a: 0, e: "Hacia el 21 de junio." },
    { q: "Una proyección que conserva las superficies se llama…", o: ["conforme", "equivalente", "azimutal"], a: 1, e: "Por ejemplo, la de Peters." },
    { q: "En un mapa 1:200.000, 3 cm son…", o: ["6 km", "60 km", "600 m"], a: 0, e: "600.000 cm = 6 km." },
    { q: "El sistema europeo de navegación por satélite es…", o: ["Galileo", "Copernicus", "Mercator"], a: 0, e: "Copernicus observa la Tierra; Galileo da la posición." },
  ],
  tarjetas: [
    ["Equinoccio", "Día y noche duran lo mismo; el Sol cae sobre el ecuador (20 de marzo y 23 de septiembre)."],
    ["Huso horario", "Franja de 15° de longitud con la misma hora; hay 24."],
    ["SIG", "Sistema de Información Geográfica: combina capas de datos sobre un mapa."],
  ],
});
