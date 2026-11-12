// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, flujo, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "La población mundial",
  minutos: 35,
  objetivos: ["Explicar cómo se reparte la población en el mundo y por qué", "Calcular e interpretar las tasas de natalidad, mortalidad y crecimiento", "Leer una pirámide de población y describir los movimientos migratorios"],
  claves: ["densidad", "natalidad", "mortalidad", "crecimiento natural", "pirámide de población", "migración"],
  pregunta: {
    texto: "En 1800 había en el mundo unos 1.000 millones de personas. En 2022 llegamos a 8.000 millones. ¿Qué pasó para que la población se multiplicara por ocho en poco más de dos siglos?",
    respuesta: "Bajó muchísimo la <b>mortalidad</b> gracias a las vacunas, la higiene, el agua potable y más alimentos, mientras la <b>natalidad</b> siguió alta durante décadas. Esa diferencia produjo una <mark>explosión demográfica</mark>. Hoy la natalidad también baja en casi todo el mundo y el crecimiento se frena.",
  },
  bloques: [
    {
      html: `<h3>Cómo se reparte la población</h3><p>La población está muy mal repartida. Más de la mitad vive en <b>Asia</b>, sobre todo en India y China. Para comparar se usa la <mark>densidad de población</mark>: habitantes / km². Hay zonas muy pobladas (costas, valles fértiles, grandes ciudades) y vacíos demográficos por causas físicas (desiertos, polos, altas montañas, selvas) y humanas (falta de trabajo o de comunicaciones).</p>`,
      svg: barras("Población por continentes en 2024, en millones de habitantes", [["Asia", 4750, "var(--red)", "4.750"], ["África", 1500, "var(--sun)", "1.500"], ["Europa", 745, "var(--pen)", "745"], ["América", 1050, "var(--leaf)", "1.050"], ["Oceanía", 45, "var(--inf)", "45"]], 5600),
    },
    {
      html: `<h3>Natalidad, mortalidad y crecimiento</h3><p>La <b>tasa de natalidad</b> es el número de nacimientos por cada 1.000 habitantes en un año, y la de <b>mortalidad</b>, el número de fallecimientos por cada 1.000. Su diferencia es el <mark>crecimiento natural</mark> o vegetativo. Si sumamos las migraciones (inmigrantes − emigrantes) obtenemos el <b>crecimiento real</b>. La <b>esperanza de vida</b> es la edad media que se espera que viva una persona al nacer.</p>`,
      svg: filas("Fórmulas básicas de la demografía", [["Natalidad", "nacimientos × 1.000 / pobl.", "var(--leaf)"], ["Mortalidad", "muertes × 1.000 / pobl.", "var(--red)"], ["Crec. natural", "natalidad − mortalidad", "var(--pen)"], ["Crec. real", "natural + saldo migratorio", "var(--ink)"]]),
    },
    {
      html: `<h3>La transición demográfica</h3><p>Los países pasan por fases. Primero, natalidad y mortalidad altas: la población casi no crece. Después baja la mortalidad y la población <mark>se dispara</mark>. Luego baja también la natalidad y el crecimiento se frena. Al final, ambas son bajas y la población envejece. Europa recorrió este camino entre 1800 y 1970; muchos países de África están aún en la segunda o tercera fase.</p>`,
      svg: flujo("Las cuatro fases de la transición demográfica", ["todo|alto", "baja la|mortalidad", "baja la|natalidad", "todo|bajo"], "var(--pen)"),
    },
    {
      html: `<h3>La pirámide de población</h3><p>La <b>pirámide de población</b> muestra la estructura de una población por <b>edad y sexo</b>: hombres a la izquierda, mujeres a la derecha, y las edades en franjas de 5 años de abajo arriba. Tiene tres formas básicas: <mark>expansiva</mark> (base ancha, mucha natalidad, típica de países jóvenes), <b>estacionaria</b> (forma de campana) y <b>regresiva</b> (base estrecha y población envejecida, como la de España).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres siluetas de pirámide: expansiva de base ancha, estacionaria en campana y regresiva de base estrecha">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M44 30 L 14 140 H 74 Z" fill="var(--leaf)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 30 C 108 50, 104 90, 104 140 H 156 C 156 90, 152 50, 130 30 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M216 30 C 194 40, 186 80, 192 110 L 202 140 H 230 L 240 110 C 246 80, 238 40, 216 30 Z" fill="var(--pen)" fill-opacity=".7" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="11.5" font-weight="700" text-anchor="middle"><text x="44" y="160" fill="var(--leaf)">expansiva</text><text x="130" y="160" fill="var(--hl-ink)">estacionaria</text><text x="216" y="160" fill="var(--pen)">regresiva</text><text x="130" y="20" fill="var(--muted)">de país joven a país envejecido</text></g></svg>`,
    },
    {
      html: `<h3>Las migraciones</h3><p>Una <b>migración</b> es el desplazamiento de personas de un lugar a otro para vivir. Quien sale es <b>emigrante</b> y quien llega, <b>inmigrante</b>. Pueden ser interiores (del campo a la ciudad) o exteriores (entre países), y sus causas son <mark>económicas</mark> (buscar trabajo), políticas (guerras, persecución: refugiados), ambientales o familiares. Hoy unos 300 millones de personas viven fuera de su país de nacimiento.</p>`,
      svg: dos("Causas de expulsión y de atracción en las migraciones", ["Expulsan", ["paro y pobreza", "guerras", "persecución", "sequías", "desastres"], "var(--red)"], ["Atraen", ["trabajo", "salarios altos", "paz y derechos", "estudios", "familia ya allí"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Dos mundos demográficos",
    svg: figCols("Comparación entre países jóvenes y países envejecidos", [
      ["Países jóvenes", ["natalidad alta", "muchos menores de 15", "pirámide expansiva", "ej.: Níger, Mali"], "var(--leaf)"],
      ["Países en transición", ["natalidad bajando", "población adulta", "pirámide en campana", "ej.: India, México"], "var(--sun)"],
      ["Países envejecidos", ["natalidad baja", "muchos mayores", "pirámide regresiva", "ej.: España, Japón"], "var(--pen)"],
    ]),
  },
  video: { id: "xTdgujJjNEI", titulo: "La población: las pirámides de población, análisis y tipos (3º ESO)", canal: "Learning With Amalia", vistas: 257891, megusta: 0, busqueda: "pirámide de población explicación" },
  quiz: [
    { q: "¿En qué continente vive más de la mitad de la población mundial?", o: ["África", "Asia", "Europa"], a: 1, e: "India y China superan cada una los 1.400 millones." },
    { q: "La densidad de población se calcula…", o: ["habitantes / km²", "km² / habitantes", "nacimientos / muertes"], a: 0, e: "Se expresa en hab./km²." },
    { q: "El crecimiento natural es…", o: ["natalidad + mortalidad", "natalidad − mortalidad", "inmigrantes − emigrantes"], a: 1, e: "Sin contar las migraciones." },
    { q: "Una pirámide de base estrecha y cima ancha es…", o: ["expansiva", "regresiva", "estacionaria"], a: 1, e: "Indica pocos nacimientos y población envejecida." },
    { q: "Una persona que llega a vivir a un país es…", o: ["emigrante", "inmigrante", "refugiada siempre"], a: 1, e: "Para el país que deja es emigrante." },
  ],
  examen: [
    { q: "¿Por qué creció tanto la población en el siglo XX?", o: ["Subió la natalidad", "Bajó mucho la mortalidad", "Hubo menos migraciones"], a: 1, e: "Vacunas, higiene y alimentación." },
    { q: "Un vacío demográfico por causas físicas es…", o: ["el desierto del Sáhara", "el delta del Nilo", "Tokio"], a: 0, e: "Clima extremo y falta de agua." },
    { q: "La esperanza de vida es…", o: ["la edad media de la población", "los años que se espera que viva alguien al nacer", "la edad de jubilación"], a: 1, e: "En España supera los 83 años." },
  ],
  feynman: ["Por qué la población está tan mal repartida", "Qué diferencia hay entre crecimiento natural y real", "Cómo se lee una pirámide de población", "Por qué emigra la gente"],
  mapa: mapa("POBLACIÓN MUNDIAL", "var(--red)", [
    ["Reparto", "densidad · focos · vacíos", "var(--ink)"],
    ["Dinámica", "natalidad · mortalidad", "var(--leaf)"],
    ["Estructura", "pirámides · envejecimiento", "var(--pen)"],
    ["Migraciones", "causas · efectos", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Densidad de población", "Habitantes por kilómetro cuadrado."],
    ["Tasa de natalidad", "Nacimientos por cada 1.000 habitantes en un año."],
    ["Crecimiento natural", "Natalidad menos mortalidad."],
    ["Pirámide regresiva", "Base estrecha: pocos nacimientos y población envejecida."],
    ["Refugiado", "Persona que huye de su país por guerra o persecución."],
  ],
  familias: ["Haced juntos el árbol genealógico de la familia y anotad dónde nació cada persona: ¿hay migraciones?", "Buscad en el INE la población de vuestro municipio hace 50 años y ahora.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: distribución, dinámica y estructura de la población, migraciones y envejecimiento demográfico (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Dibujar la pirámide del municipio con datos del INE en una hoja de cálculo.", "Entrevista a una persona que haya emigrado o inmigrado.", "Debate: cómo afrontar el envejecimiento de la población."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "INE: Cifras de población y fenómenos demográficos", url: "https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254734710984" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular tasas demográficas con datos reales", "Describir la población de España y las consecuencias de las migraciones"],
  bloques: [
    { tras: "Cómo se reparte la población", html: `<h3>Focos y vacíos de población</h3><p>Los grandes <b>focos</b> de población del mundo son cuatro: el <mark>sur y el este de Asia</mark> (India, China, Japón, Indonesia), Europa, el noreste de Estados Unidos y algunas zonas de América Latina como el sureste de Brasil o el valle de México. Todos tienen clima templado o cálido con agua, llanuras fértiles, costas y una larga historia de agricultura o industria. Los <b>vacíos</b> ocupan la mayor parte de las tierras: el Sáhara, Siberia, el interior de Australia, la Amazonia, Groenlandia o la Antártida. En España, la densidad media es de unos 95 hab./km², pero el interior tiene zonas con menos de 10 hab./km²: es la llamada <b>España vaciada</b>.</p>` },
    { tras: "Natalidad, mortalidad y crecimiento", html: `<h3>Otros indicadores demográficos</h3><p>Además de las tasas básicas, se usan otros indicadores. La <b>tasa de fecundidad</b> es el número medio de hijos por mujer: para que una población se mantenga hace falta unos <mark>2,1 hijos por mujer</mark> (nivel de reemplazo). En España es de unos 1,1, de las más bajas del mundo; en Níger supera los 6. La <b>tasa de mortalidad infantil</b> cuenta los niños que mueren antes de cumplir un año por cada 1.000 nacidos: en España es inferior a 3, mientras que en algunos países de África supera 50. Estos datos reflejan muy bien el <b>nivel de desarrollo</b> y la calidad de la sanidad de un país.</p>${tabla(["Indicador", "España", "Níger"], [["Natalidad (‰)", "≈ 7", "≈ 45"], ["Mortalidad (‰)", "≈ 9", "≈ 8"], ["Hijos por mujer", "≈ 1,1", "≈ 6"], ["Esperanza de vida", "≈ 83 años", "≈ 63 años"]])}`, video: { id: "qhBH5XU4rRM", titulo: "La transición demográfica", canal: "YoEstudio", vistas: 90760, megusta: 0 } },
    { tras: "La pirámide de población", html: `<h3>Cómo comentar una pirámide</h3><p>Para comentar una pirámide se siguen tres pasos. 1) <b>Identificarla</b>: de qué lugar y año es y qué tipo de pirámide es. 2) <b>Describirla</b> por grupos de edad: los <b>jóvenes</b> (0–14 años) en la base, los <b>adultos</b> (15–64) en el centro y los <b>ancianos</b> (65 o más) en la cima. Se buscan entrantes (menos población: guerras, crisis, baja natalidad) y salientes (más población: <i>baby boom</i>, inmigración). También se compara la proporción de hombres y mujeres: en las edades avanzadas hay más mujeres porque viven más. 3) <mark>Explicar</mark> las causas y las consecuencias de lo que se ve.</p>` },
    { tras: "Las migraciones", html: `<h3>Consecuencias de las migraciones</h3><p>Las migraciones tienen efectos en los dos lugares. En el <b>país de origen</b>, disminuye el paro, llegan <mark>remesas</mark> (dinero que envían los emigrantes a sus familias), pero se pierde población joven y a veces muy formada. En el <b>país de destino</b>, los inmigrantes cubren puestos de trabajo, rejuvenecen la población, aportan cotizaciones y diversidad cultural. También pueden aparecer problemas de integración, de explotación laboral o actitudes de rechazo, que se combaten con educación y leyes justas. España fue un país de <b>emigración</b> (a América y luego a Europa en los años 60) y desde 2000 es un gran país de <b>inmigración</b>: hoy más del 18 % de sus habitantes ha nacido en el extranjero.</p>` },
    { tras: "Las migraciones", html: `<h3>La población de España hoy</h3><p>España tiene unos <b>49 millones</b> de habitantes. Su natalidad es muy baja y su esperanza de vida, de las más altas del mundo, por lo que la población está muy <mark>envejecida</mark>: hay más mayores de 65 años que menores de 15. El crecimiento de los últimos años se debe casi solo a la <b>inmigración</b>. La población se concentra en Madrid, en las costas y en las islas, mientras el interior pierde habitantes. Los retos son pagar las pensiones, atender la dependencia de los mayores, conciliar la vida laboral y familiar para que nazcan más niños y mantener vivos los pueblos pequeños.</p>` },
  ],
  ejemplos: [
    { enunciado: "Un país de 2.000.000 de habitantes tuvo 24.000 nacimientos y 18.000 fallecimientos en un año. Calcula las tasas de natalidad, mortalidad y crecimiento natural.", pasos: ["Natalidad: 24.000 × 1.000 / 2.000.000 = 12 ‰.", "Mortalidad: 18.000 × 1.000 / 2.000.000 = 9 ‰.", "Crecimiento natural: 12 − 9 = 3 ‰ (o 0,3 %)."], resultado: "Natalidad 12 ‰, mortalidad 9 ‰, crecimiento natural 3 ‰." },
    { enunciado: "Una comarca tiene 4.500 habitantes y 900 km². Calcula su densidad y valórala.", pasos: ["Densidad = habitantes / superficie.", "4.500 / 900 = 5 hab./km².", "Es menor de 10 hab./km²: un territorio casi despoblado."], resultado: "5 hab./km²: una zona de la España vaciada." },
    { enunciado: "Una pirámide tiene la base muy estrecha, un gran saliente entre los 40 y 60 años y una cima ancha. Coméntala.", pasos: ["Base estrecha: natalidad muy baja.", "Saliente en adultos de 40–60 años: el baby boom de los años 60 y 70 y la inmigración.", "Cima ancha: alta esperanza de vida.", "Tipo: regresiva, de país desarrollado."], resultado: "Pirámide regresiva de población envejecida, como la de España actual." },
  ],
  errores: [
    "Confundir emigrante (el que se va) con inmigrante (el que llega).",
    "Olvidar multiplicar por 1.000 al calcular una tasa: se expresa en tanto por mil (‰).",
    "Pensar que densidad alta significa país grande: depende de la superficie.",
    "Leer la pirámide al revés: los jóvenes están en la base y los mayores en la cima.",
    "Creer que la población española crece por los nacimientos: crece por la inmigración.",
  ],
  ejercicios: [
    { q: "Explica dos causas físicas y dos humanas de los vacíos demográficos.", sol: "Físicas: clima extremo (desiertos, polos) y relieve muy alto. Humanas: falta de trabajo y malas comunicaciones o servicios." },
    { q: "Calcula la densidad de un país de 10 millones de habitantes y 250.000 km².", sol: "10.000.000 / 250.000 = 40 hab./km²." },
    { q: "Si una ciudad de 500.000 habitantes tiene 4.000 nacimientos al año, ¿cuál es su tasa de natalidad?", sol: "4.000 × 1.000 / 500.000 = 8 ‰." },
    { q: "¿Qué ocurre en la segunda fase de la transición demográfica?", sol: "Baja la mortalidad mientras la natalidad sigue alta, por lo que la población crece muy deprisa." },
    { q: "¿Qué significa que la fecundidad esté por debajo de 2,1?", sol: "Que no nacen suficientes niños para reemplazar a la generación de los padres; sin inmigración, la población acabaría disminuyendo." },
    { q: "Describe una pirámide expansiva y di en qué tipo de países aparece.", sol: "Base muy ancha y cima estrecha: mucha natalidad y poca esperanza de vida. Aparece en países poco desarrollados, como muchos del África subsahariana." },
    { q: "¿Por qué en la cima de la pirámide hay más mujeres que hombres?", sol: "Porque las mujeres tienen mayor esperanza de vida que los hombres." },
    { q: "Escribe dos consecuencias positivas de la inmigración para el país de destino.", sol: "Por ejemplo: cubre puestos de trabajo, rejuvenece la población, aporta cotizaciones a la Seguridad Social y diversidad cultural." },
    { q: "¿Qué son las remesas?", sol: "El dinero que los emigrantes envían a sus familias en su país de origen." },
    { q: "Cita dos retos del envejecimiento de la población española.", sol: "Mantener el sistema de pensiones y atender a las personas mayores dependientes (sanidad, residencias, cuidados)." },
  ],
  quiz: [
    { q: "El nivel de reemplazo generacional es de…", o: ["1,1 hijos por mujer", "2,1 hijos por mujer", "4 hijos por mujer"], a: 1, e: "Por debajo, la población tiende a disminuir sin inmigración." },
    { q: "La «España vaciada» se refiere a…", o: ["zonas del interior con muy poca población", "las costas", "las islas"], a: 0, e: "Muchas comarcas tienen menos de 10 hab./km²." },
    { q: "En una pirámide, los adultos son el grupo de…", o: ["0–14 años", "15–64 años", "65 o más"], a: 1, e: "Es la población en edad de trabajar." },
    { q: "Hoy, la población de España crece sobre todo por…", o: ["la natalidad", "la inmigración", "la baja mortalidad infantil"], a: 1, e: "El crecimiento natural es casi nulo o negativo." },
    { q: "La mortalidad infantil cuenta las muertes de niños…", o: ["menores de un año", "menores de 15 años", "en el parto"], a: 0, e: "Por cada 1.000 nacidos vivos." },
  ],
  tarjetas: [
    ["Tasa de fecundidad", "Número medio de hijos por mujer."],
    ["Remesas", "Dinero que los emigrantes envían a su país de origen."],
    ["Envejecimiento", "Aumento del peso de los mayores de 65 años en la población."],
  ],
});
