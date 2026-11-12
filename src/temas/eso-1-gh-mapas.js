// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Red de paralelos y meridianos con un punto localizado.
const red = `<svg viewBox="0 0 260 180" role="img" aria-label="Paralelos y meridianos: el punto P está a 40 grados norte y 20 grados este">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g ${F} font-size="10.5">
    <rect x="40" y="18" width="190" height="140" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
    ${[0, 1, 2, 3, 4].map((i) => `<path d="M40 ${18 + i * 35} H 230" stroke="${i === 2 ? "var(--red)" : "var(--line)"}" stroke-width="${i === 2 ? 2.5 : 1.2}"/><text x="34" y="${22 + i * 35}" text-anchor="end" fill="var(--muted)">${["80° N", "40° N", "0°", "40° S", "80° S"][i]}</text>`).join("")}
    ${[0, 1, 2, 3, 4].map((i) => `<path d="M${40 + i * 47.5} 18 V 158" stroke="${i === 2 ? "var(--pen)" : "var(--line)"}" stroke-width="${i === 2 ? 2.5 : 1.2}"/><text x="${40 + i * 47.5}" y="172" text-anchor="middle" fill="var(--muted)">${["40° O", "20° O", "0°", "20° E", "40° E"][i]}</text>`).join("")}
    <circle cx="182.5" cy="53" r="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><text x="192" y="49" font-weight="700" fill="var(--ink)">P</text>
    <text x="226" y="100" text-anchor="end" font-weight="700" fill="var(--red)">ecuador</text>
    <text x="139" y="30" font-weight="700" fill="var(--pen)">Greenwich</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "La representación de la Tierra: mapas",
  objetivos: ["Distinguir globo terráqueo, mapa y plano", "Usar paralelos, meridianos, latitud y longitud para localizar un lugar", "Interpretar la escala, la leyenda y la orientación de un mapa", "Reconocer los principales tipos de mapas y las nuevas tecnologías de localización"],
  claves: ["globo terráqueo", "mapa", "plano", "proyección", "paralelo", "meridiano", "latitud", "longitud", "escala", "leyenda", "rosa de los vientos", "GPS"],
  pregunta: [
    "Un barco pide ayuda en mitad del océano, donde no hay calles ni carteles. ¿Cómo le dice al equipo de rescate dónde está exactamente?",
    "Dando sus <mark>coordenadas geográficas</mark>: dos números, la <b>latitud</b> y la <b>longitud</b>, que indican la posición de cualquier punto de la Tierra sobre una red imaginaria de líneas. Por ejemplo, «36° N, 6° O» está frente a la costa de Cádiz. Hoy el GPS calcula esos números en segundos, pero la idea es la misma que usaban los navegantes hace siglos.",
  ],
  bloques: [
    ["Globos, mapas y planos", `<p>Para representar la Tierra usamos dos tipos de modelos. El <mark>globo terráqueo</mark> es una esfera que reproduce la forma real del planeta; es el más fiel, pero no se puede llevar en el bolsillo ni ver todo el mundo de golpe. El <b>mapa</b> es una representación de la Tierra, o de una parte, sobre una superficie <b>plana</b>, como un papel o una pantalla.</p><p>Cuando lo que se dibuja es un espacio pequeño, como una ciudad, un barrio o un edificio, se llama <b>plano</b>. Los mapas y planos simplifican la realidad: eligen qué mostrar (carreteras, ríos, fronteras…) y lo dibujan con símbolos. Por eso son tan útiles para orientarse y para estudiar el territorio.</p>`,
      H.figCols("Formas de representar la Tierra", [["Globo", ["esfera", "forma real", "poco práctico"], "var(--inf)"], ["Mapa", ["superficie plana", "zona grande", "algo deformado"], "var(--leaf)"], ["Plano", ["superficie plana", "zona pequeña", "mucho detalle"], "var(--sun)"]])],
    ["Las proyecciones", `<p>Pasar una esfera a un papel plano es imposible sin deformarla: piensa en lo que pasa si intentas aplanar la piel de una naranja. Para hacerlo, los cartógrafos usan <mark>proyecciones</mark>, sistemas matemáticos que trasladan cada punto del globo al plano.</p><p>Hay tres tipos básicos. La <b>cilíndrica</b> envuelve el globo con un cilindro; representa bien la zona del ecuador, pero agranda mucho las zonas polares (en la proyección de Mercator, Groenlandia parece tan grande como África, que es 14 veces mayor). La <b>cónica</b> usa un cono y sirve para latitudes medias, como Europa. La <b>azimutal</b> o plana toca el globo en un punto y se usa para las regiones polares. Ningún mapa es perfecto: cada proyección conserva unas cosas y deforma otras.</p>`,
      H.filas("Tipos de proyección", [["Cilíndrica", "mapamundis; agranda los polos", "var(--inf)"], ["Cónica", "latitudes medias: Europa", "var(--leaf)"], ["Azimutal", "regiones polares", "var(--pen)"]])],
    ["Paralelos y meridianos", `<p>Para localizar lugares se dibuja sobre la Tierra una red de líneas imaginarias. Los <mark>paralelos</mark> son círculos horizontales paralelos al ecuador. El más importante es el <b>ecuador</b>, que divide la Tierra en dos mitades: el <b>hemisferio norte</b> y el <b>hemisferio sur</b>. Otros paralelos destacados son los trópicos de Cáncer y de Capricornio y los círculos polares ártico y antártico.</p><p>Los <mark>meridianos</mark> son semicírculos que van de polo a polo. El meridiano de referencia es el de <b>Greenwich</b>, que pasa por un observatorio cerca de Londres y por el este de España (por Castellón). Divide la Tierra en <b>hemisferio oriental</b> (este) y <b>hemisferio occidental</b> (oeste).</p>`,
      H.dos("Las líneas imaginarias", ["Paralelos", ["horizontales", "referencia:", "el ecuador", "norte / sur"], "var(--red)"], ["Meridianos", ["de polo a polo", "referencia:", "Greenwich", "este / oeste"], "var(--pen)"])],
    ["Latitud y longitud", `<p>Las <mark>coordenadas geográficas</mark> son dos medidas en grados que localizan cualquier punto. La <b>latitud</b> es la distancia de un lugar al ecuador; va de 0° (ecuador) a 90° (polos) y se indica si es <b>norte (N)</b> o <b>sur (S)</b>. Todos los puntos de un mismo paralelo tienen la misma latitud.</p><p>La <b>longitud</b> es la distancia de un lugar al meridiano de Greenwich; va de 0° a 180° y se indica si es <b>este (E)</b> u <b>oeste (O)</b>. Todos los puntos de un mismo meridiano tienen la misma longitud. Por ejemplo, Madrid está aproximadamente a <b>40° N, 4° O</b>. Para escribir las coordenadas se da primero la latitud y después la longitud.</p>`,
      red],
    ["La escala", `<p>Los mapas reducen la realidad. La <mark>escala</mark> indica cuántas veces se ha reducido. Puede ser <b>numérica</b>, como 1:100 000, que significa que 1 cm del mapa equivale a 100 000 cm (1 km) en la realidad. O puede ser <b>gráfica</b>: una barra dividida en tramos que indica directamente a cuántos kilómetros equivale cada tramo.</p><p>Cuanto más pequeño es el número de la derecha, más <b>grande</b> es la escala y más detalle se ve: un plano de un pueblo puede estar a 1:5000; un mapa de España, a 1:6 000 000. Para calcular una distancia real se mide en el mapa con una regla y se multiplica por la escala. Después conviene pasar los centímetros a kilómetros dividiendo entre 100 000.</p>`,
      tabla(["Escala", "1 cm en el mapa son…", "Uso"], [["1:5000", "50 metros", "plano de un pueblo"], ["1:50 000", "500 metros", "mapa de excursiones"], ["1:1 000 000", "10 kilómetros", "mapa de una región"], ["1:6 000 000", "60 kilómetros", "mapa de España"]]), V.gh2b],
    ["La leyenda y la orientación", `<p>Los mapas usan <mark>signos convencionales</mark>: dibujos, colores y líneas que representan elementos reales. Una línea azul es un río; un punto rojo, una ciudad; un avión, un aeropuerto. La <b>leyenda</b> es el recuadro que explica qué significa cada símbolo; siempre hay que leerla antes de interpretar un mapa.</p><p>Para <b>orientarse</b> hay que saber dónde están los puntos cardinales: <b>norte, sur, este y oeste</b>. Casi todos los mapas tienen el norte arriba, y lo indican con una flecha o una <b>rosa de los vientos</b>, que muestra también los puntos intermedios (noreste, sureste…). En el campo se puede encontrar el norte con una <b>brújula</b> o, de día, sabiendo que el Sol sale por el este.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Rosa de los vientos: norte arriba, sur abajo, este a la derecha y oeste a la izquierda">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-weight="700">
          <path d="M130 22 L142 78 L130 90 L118 78 Z" fill="var(--red)"/><path d="M130 158 L142 102 L130 90 L118 102 Z" fill="var(--ink)"/>
          <path d="M60 90 L116 78 L130 90 L116 102 Z" fill="var(--muted)"/><path d="M200 90 L144 78 L130 90 L144 102 Z" fill="var(--muted)"/>
          <path d="M98 58 L126 86 M162 58 L134 86 M98 122 L126 94 M162 122 L134 94" stroke="var(--line)" stroke-width="3"/>
          <text x="130" y="16" font-size="13" fill="var(--red)">N</text><text x="130" y="175" font-size="13" fill="var(--ink)">S</text>
          <text x="46" y="94" font-size="13" fill="var(--ink)">O</text><text x="214" y="94" font-size="13" fill="var(--ink)">E</text>
          <text x="92" y="54" font-size="10" fill="var(--muted)">NO</text><text x="168" y="54" font-size="10" fill="var(--muted)">NE</text>
          <text x="92" y="134" font-size="10" fill="var(--muted)">SO</text><text x="168" y="134" font-size="10" fill="var(--muted)">SE</text>
          <text x="46" y="110" font-size="9.5" font-weight="400" fill="var(--muted)">se pone el Sol</text><text x="214" y="110" font-size="9.5" font-weight="400" fill="var(--muted)">sale el Sol</text>
        </g></svg>`],
    ["Tipos de mapas", `<p>Según lo que representan, hay dos grandes familias. Los <mark>mapas topográficos</mark> muestran el terreno con detalle: el relieve, los ríos, los caminos y los pueblos. El relieve se dibuja con <b>curvas de nivel</b>, líneas que unen puntos de la misma altitud; si están muy juntas, la pendiente es fuerte.</p><p>Los <mark>mapas temáticos</mark> tratan un tema concreto. Los <b>físicos</b> muestran el relieve, los ríos y las costas, con colores (verde para las llanuras, marrón para las montañas, azul para el agua). Los <b>políticos</b> muestran países, fronteras y capitales. Y hay mapas de clima, de población, de carreteras o de turismo, entre otros muchos.</p>`,
      H.arbol("Tipos de mapas", [["Mapas", ["Topográficos", "Temáticos"], "var(--leaf)", ["terreno con detalle", "físico, político…"]]])],
    ["Las nuevas tecnologías", `<p>Hoy casi todos llevamos un mapa en el móvil. El <mark>GPS</mark> (sistema de posicionamiento global) usa una red de satélites que envían señales; el receptor calcula su distancia a varios de ellos y obtiene su latitud y longitud con un error de pocos metros. Europa tiene su propio sistema, llamado <b>Galileo</b>.</p><p>Los <b>Sistemas de Información Geográfica (SIG)</b> combinan mapas con bases de datos: permiten, por ejemplo, ver dónde hay más tráfico o riesgo de incendios. Y las <b>imágenes de satélite</b> y los visores como el del Instituto Geográfico Nacional muestran cualquier rincón del mundo. Aun así, saber leer un mapa en papel sigue siendo útil cuando no hay cobertura.</p>`,
      H.flujo("Cómo funciona el GPS", ["satélites|emiten", "el móvil|recibe", "calcula|distancias", "latitud y|longitud"], "var(--inf)")],
  ],
  ejemplos: [
    ["En un mapa a escala 1:200 000, dos pueblos están a 4 cm. ¿Qué distancia real los separa?", ["Multiplica la distancia del mapa por la escala: 4 × 200 000 = 800 000 cm.", "Pasa a kilómetros dividiendo entre 100 000: 800 000 ÷ 100 000 = 8."], "8 km."],
    ["Un punto está a 0° de latitud y 30° E de longitud. ¿Dónde se encuentra?", ["0° de latitud significa que está sobre el ecuador.", "30° E indica que está al este de Greenwich."], "En el ecuador, en el hemisferio oriental (en África oriental)."],
    ["En un mapa topográfico, en la ladera A las curvas de nivel están muy juntas y en la B muy separadas. ¿Cuál es más empinada?", ["Las curvas unen puntos de igual altura.", "Si están juntas, se sube mucha altura en poca distancia."], "La ladera A."],
  ],
  errores: [
    "Escribir primero la longitud: las coordenadas se dan con la latitud delante (40° N, 4° O).",
    "Olvidar indicar N, S, E u O: «40°» solo no localiza ningún punto.",
    "Creer que un mapa con escala 1:6 000 000 es de escala grande: cuanto mayor es el número, más pequeña es la escala.",
    "Pensar que los mapamundis muestran el tamaño real de los países: todas las proyecciones deforman.",
    "Confundir paralelos (horizontales, latitud) con meridianos (de polo a polo, longitud).",
  ],
  ejercicios: [
    ["¿Qué diferencia hay entre un mapa y un plano?", "El mapa representa una zona grande; el plano, una zona pequeña como una ciudad, con mucho detalle."],
    ["¿Por qué todos los mapas deforman la realidad?", "Porque es imposible pasar una superficie esférica a una plana sin estirarla o cortarla."],
    ["¿Qué paralelo divide la Tierra en hemisferio norte y sur?", "El ecuador."],
    ["¿Qué es la longitud de un lugar?", "La distancia en grados entre ese lugar y el meridiano de Greenwich, hacia el este o el oeste."],
    ["Escala 1:50 000. Mides 6 cm entre dos puntos. ¿Cuál es la distancia real?", "6 × 50 000 = 300 000 cm = 3 km."],
    ["¿Qué escala tiene más detalle, 1:10 000 o 1:1 000 000? ¿Por qué?", "1:10 000, porque reduce menos la realidad (escala más grande)."],
    ["¿Para qué sirve la leyenda?", "Para saber qué significa cada símbolo, color o línea del mapa."],
    ["¿Qué son las curvas de nivel?", "Líneas que unen puntos de igual altitud en un mapa topográfico."],
    ["Pon un ejemplo de mapa temático distinto del físico y del político.", "Un mapa del clima, de población, de carreteras o turístico."],
    ["¿Cómo sabe el GPS dónde estás?", "Calcula la distancia a varios satélites a partir de sus señales y con ello obtiene tu latitud y longitud."],
  ],
  figura: ["Cómo localizar y leer un mapa", H.figCols("Cómo leer un mapa", [["Coordenadas", ["latitud: N o S", "longitud: E u O", "paralelos", "meridianos"], "var(--red)"], ["Escala", ["numérica 1:100 000", "gráfica (barra)", "cm × escala", "÷ 100 000 = km"], "var(--sun)"], ["Leyenda", ["signos", "colores", "líneas", "¡leer primero!"], "var(--leaf)"], ["Orientación", ["norte arriba", "rosa de vientos", "brújula", "GPS"], "var(--pen)"]])],
  video: V.gh2v,
  quiz: [
    ["La representación más fiel de la Tierra es…", ["el globo terráqueo", "el mapamundi", "el plano"], "Tiene su misma forma."],
    ["El ecuador es un…", ["paralelo", "meridiano", "trópico"], "Divide norte y sur."],
    ["El meridiano 0° es el de…", ["Greenwich", "Madrid", "París"], "Pasa cerca de Londres."],
    ["La latitud se mide desde…", ["el ecuador", "Greenwich", "el polo sur"], "De 0° a 90° N o S."],
    ["La longitud máxima es…", ["180°", "90°", "360°"], "Hacia el este o el oeste."],
    ["En la escala 1:100 000, 1 cm son…", ["1 km", "100 m", "10 km"], "100 000 cm = 1 km."],
    ["El recuadro que explica los símbolos es…", ["la leyenda", "la escala", "la rosa de los vientos"], "Hay que leerlo primero."],
    ["La proyección que agranda los polos es la…", ["cilíndrica", "cónica", "azimutal"], "Como la de Mercator."],
    ["Las curvas de nivel indican…", ["la altitud", "la temperatura", "las fronteras"], "Unen puntos de igual altura."],
    ["El sistema europeo de navegación por satélite es…", ["Galileo", "Apolo", "Mercator"], "Similar al GPS."],
  ],
  examen: [
    ["Madrid está aproximadamente en…", ["40° N, 4° O", "4° N, 40° O", "40° S, 4° E"], "Latitud primero."],
    ["Un mapa político muestra sobre todo…", ["países y fronteras", "el relieve", "las nubes"], "Es un mapa temático."],
    ["Si las curvas de nivel están muy juntas, el terreno es…", ["muy empinado", "llano", "un lago"], "Mucha altura en poca distancia."],
  ],
  feynman: ["Qué diferencia hay entre globo, mapa y plano", "Cómo se localiza un punto con latitud y longitud", "Cómo se calcula una distancia real con la escala", "Qué tipos de mapas existen y para qué sirven"],
  mapa: ["LOS MAPAS", "var(--leaf)", [["Representar", "globo · mapa · plano", "var(--inf)"], ["Localizar", "paralelos · meridianos", "var(--red)"], ["Leer", "escala · leyenda · norte", "var(--sun)"], ["Tipos", "topográfico · temático", "var(--leaf)"]], 230],
  tarjetas: [
    ["Mapa", "Representación plana de la Tierra o de una parte."],
    ["Proyección", "Sistema para pasar la esfera terrestre a un plano."],
    ["Paralelo", "Círculo imaginario paralelo al ecuador."],
    ["Meridiano", "Semicírculo de polo a polo. El 0° es Greenwich."],
    ["Latitud", "Distancia al ecuador: 0° a 90° N o S."],
    ["Longitud", "Distancia a Greenwich: 0° a 180° E u O."],
    ["Escala", "Proporción entre el mapa y la realidad (1:100 000)."],
    ["Leyenda", "Explicación de los símbolos de un mapa."],
  ],
  familias: ["Buscad la casa en un visor de mapas y anotad sus coordenadas; después buscad las del colegio y comparad.", "En la próxima excursión, usad un mapa en papel con escala para calcular la distancia antes de salir."],
  saberes: "Representación del espacio: proyecciones, coordenadas geográficas, escala, leyenda y tipos de mapas; tecnologías de la información geográfica (Geografía e Historia, 1º ESO, RD 217/2022).",
  ideas: ["Juego de «hundir la flota» con coordenadas reales sobre un mapamundi.", "Pelar una mandarina para ver por qué todo mapa deforma.", "Calcular distancias entre pueblos de la comarca con un mapa del IGN."],
  fuentes: [["Instituto Geográfico Nacional: visor IBERPIX", "https://www.ign.es/iberpix/visor/"], ["IGN: recursos educativos de cartografía", "https://www.ign.es/web/ign/portal/recursos-educativos"]],
});
