// Geografía e Historia 2º ESO. Dibujos propios en SVG.
const { tema, H, tabla } = require("./_eso2d");
const V = require("./_eso2d-videos");

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "La población del mundo",
  objetivos: ["Calcular e interpretar la densidad de población y explicar su distribución", "Calcular las tasas de natalidad, mortalidad y crecimiento natural", "Explicar las fases de la evolución de la población mundial", "Leer e interpretar pirámides de población y conocer la estructura por edades y actividad"],
  claves: ["densidad de población", "natalidad", "mortalidad", "crecimiento natural", "esperanza de vida", "pirámide de población", "transición demográfica"],
  pregunta: [
    "En el año 1800 vivían en la Tierra unos 1000 millones de personas. Hoy somos más de 8000 millones. Hicieron falta miles de años para llegar a los primeros mil millones y solo doce para pasar de 7000 a 8000. ¿Qué cambió para que la población se disparara?",
    "Cambió sobre todo la <mark>mortalidad</mark>: gracias a las vacunas, los antibióticos, el agua potable y una alimentación mejor, mueren muchas menos personas, sobre todo niños. Durante un tiempo siguieron naciendo muchos bebés, así que la diferencia entre nacimientos y muertes, el <b>crecimiento natural</b>, se hizo enorme. Hoy la natalidad también está bajando y el crecimiento se frena.",
  ],
  bloques: [
    ["La demografía y sus fuentes", `<p>La <mark>demografía</mark> es la ciencia que estudia la población: cuántas personas hay, dónde viven, cómo cambia su número y cuáles son sus características (edad, sexo, actividad). Para conocer estos datos se usan varias fuentes.</p><p>El <b>censo</b> es un recuento de toda la población de un país que se hace cada diez años; en España lo elabora el Instituto Nacional de Estadística (INE). El <b>padrón municipal</b> es el registro de los vecinos de cada municipio y se actualiza continuamente. El <b>Registro Civil</b> anota los nacimientos, matrimonios y defunciones. Además, se hacen <b>encuestas</b> a una parte de la población.</p>`,
      H.filas("Fuentes demográficas", [["Censo", "recuento cada 10 años", "var(--pen)"], ["Padrón", "vecinos de cada municipio", "var(--leaf)"], ["Registro", "nacimientos, muertes", "var(--sun)"], ["Encuestas", "a una muestra", "var(--red)"]])],
    ["La densidad de población", `<p>La población no se reparte por igual. Para medir cuántas personas viven en un territorio se usa la <mark>densidad de población</mark>, que es el número de habitantes por kilómetro cuadrado: <b>densidad = habitantes ÷ superficie (km²)</b>. Por ejemplo, España tiene unos 48,6 millones de habitantes y 506 000 km², así que su densidad es de unos <b>96 hab./km²</b>.</p><p>Hay <b>focos</b> muy poblados, como el este y sur de Asia (China, India), Europa occidental y el noreste de Estados Unidos, y <b>vacíos</b> demográficos, como los desiertos, las selvas, las altas montañas y las zonas polares. En España contrasta Madrid (más de 800 hab./km²) con Soria o Teruel (menos de 10).</p>`,
      H.barras("Densidad de población (hab./km²)", [["Bangladés", 1300, "var(--red)", "unos 1300"], ["Países Bajos", 520, "var(--sun)", "unos 520"], ["España", 96, "var(--pen)", "unos 96"], ["Canadá", 4, "var(--leaf)", "unos 4"]], 1700)],
    ["Por qué la población se reparte así", `<p>Influyen <b>factores físicos</b>. Se prefieren los climas templados, las llanuras, los valles de los ríos y las costas, y los suelos fértiles. Se evitan el frío extremo, la aridez, la selva densa y las montañas muy altas.</p><p>También influyen <b>factores humanos</b>: la <b>historia</b> (las zonas pobladas desde antiguo, como el valle del Nilo o la llanura china, siguen siéndolo), la <b>economía</b> (las zonas con industria, servicios y empleo atraen población) y las <b>comunicaciones</b>. Por eso hoy más de la mitad de la humanidad vive en ciudades y cerca del mar.</p>`,
      H.dos("Factores que atraen o alejan población", ["Atraen", ["clima templado", "llanuras", "costas y ríos", "empleo", "transporte"], "var(--leaf)"], ["Alejan", ["frío o calor", "extremos", "desiertos", "altas montañas", "selvas"], "var(--red)"])],
    ["Natalidad, mortalidad y crecimiento natural", `<p>La población cambia por los nacimientos, las muertes y las migraciones. La <mark>tasa de natalidad</mark> indica los nacimientos por cada mil habitantes en un año: <b>TN = nacimientos ÷ población × 1000</b>, y se expresa en ‰ (por mil). La <mark>tasa de mortalidad</mark> se calcula igual con las defunciones.</p><p>El <b>crecimiento natural</b> o vegetativo es la diferencia entre ambas: <b>CN = TN − TM</b>. Si nacen más de los que mueren, es positivo; si mueren más, negativo. España tiene una natalidad de unos 6,6 ‰ y una mortalidad de unos 9 ‰, así que su crecimiento natural es negativo; si su población crece es por la llegada de inmigrantes.</p>`,
      H.flujo("Cálculo del crecimiento natural", ["nacimientos", "tasa de|natalidad", "menos|mortalidad", "crecimiento|natural"], "var(--pen)")],
    ["Otros indicadores demográficos", `<p>La <b>tasa de fecundidad</b> indica el número medio de hijos por mujer. Para que una población se mantenga sin migraciones hace falta unos <b>2,1 hijos</b> por mujer (el «nivel de reemplazo»). En Níger supera los 6; en España es de unos 1,1, una de las más bajas del mundo.</p><p>La <b>mortalidad infantil</b> mide los niños que mueren antes de cumplir un año por cada mil nacidos; es un buen indicador del desarrollo sanitario. La <mark>esperanza de vida</mark> es el número de años que se espera que viva una persona al nacer: en España supera los 83 años, una de las más altas del mundo, mientras que en algunos países africanos no llega a 60.</p>`,
      tabla(["Indicador", "España", "Níger", "Japón"], [["Hijos por mujer", "1,1", "6,1", "1,2"], ["Mortalidad infantil (‰)", "2,6", "unos 60", "1,7"], ["Esperanza de vida", "83 años", "62 años", "84 años"]])],
    ["La evolución de la población mundial", `<p>Durante casi toda la historia, la población creció muy despacio: la natalidad era alta, pero la mortalidad también, por las epidemias, las guerras y el hambre. Es el <b>régimen demográfico antiguo</b>. Hacia 1800, con la Revolución Industrial, empezó la <mark>transición demográfica</mark>: la mortalidad bajó gracias a los avances en medicina, higiene y alimentación, pero la natalidad siguió alta durante décadas, y la población se disparó.</p><p>Después, con la urbanización, la incorporación de la mujer al trabajo y el uso de anticonceptivos, también bajó la natalidad. Hoy los países desarrollados están en el <b>régimen demográfico moderno</b>: baja natalidad, baja mortalidad y crecimiento casi nulo. La ONU calcula que la población mundial llegará a su máximo, unos 10 300 millones, hacia 2080.</p>`,
      H.linea("Hitos de la población mundial", [["1800", "1000|millones"], ["1960", "3000|millones"], ["2022", "8000|millones"], ["2080", "máximo:|10 300 mill."]], "var(--pen)")],
    ["Contrastes entre países", `<p>Hoy hay grandes diferencias. Muchos <b>países en desarrollo</b>, sobre todo de África, tienen todavía una natalidad alta y una mortalidad que ha bajado: su población es <b>joven</b> y crece deprisa. Esto les obliga a crear muchas escuelas y empleos, pero también les da una gran fuerza de trabajo futura.</p><p>Los <b>países desarrollados</b>, como España, Japón o Alemania, tienen una natalidad muy baja y una esperanza de vida alta: su población está <mark>envejecida</mark>. Esto plantea retos: pagar las pensiones, atender a más personas mayores y la falta de trabajadores jóvenes, que a menudo se cubre con inmigración.</p>`,
      H.dos("Dos modelos de población", ["Ej.: Níger", ["natalidad alta", "población joven", "crece rápido", "faltan escuelas", "y empleo"], "var(--sun)"], ["Ej.: España", ["natalidad baja", "población vieja", "casi no crece", "pensiones", "y cuidados"], "var(--pen)"])],
    ["Las pirámides de población", `<p>La <mark>pirámide de población</mark> es un gráfico de barras horizontales que muestra la población por <b>edad y sexo</b>: los hombres a la izquierda, las mujeres a la derecha, los jóvenes abajo y los mayores arriba. Según su forma hay tres tipos.</p><p>La pirámide <b>expansiva</b> tiene una base muy ancha y se estrecha rápido hacia arriba: mucha natalidad y población joven (Níger). La <b>estacionaria</b> tiene forma de campana: natalidad y mortalidad bajas y estables. La <b>regresiva</b> tiene la base más estrecha que el centro, como una urna: pocos nacimientos y mucha gente mayor. Es la de España.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Tres formas de pirámide de población: expansiva con base ancha, estacionaria en forma de campana y regresiva con base estrecha">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M18 140 H 74 L 46 40 Z" fill="var(--sun)" opacity=".85"/>
        <path d="M100 140 H 160 C 160 110, 156 80, 146 60 C 140 46, 134 40, 130 40 C 126 40, 120 46, 114 60 C 104 80, 100 110, 100 140 Z" fill="var(--leaf)" opacity=".85"/>
        <path d="M196 140 H 230 C 240 110, 246 90, 240 70 C 234 50, 222 40, 213 40 C 204 40, 192 50, 186 70 C 180 90, 186 110, 196 140 Z" fill="var(--pen)" opacity=".85"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="46" y="160">expansiva</text><text x="130" y="160">estacionaria</text><text x="213" y="160">regresiva</text><text x="46" y="28">Níger</text><text x="130" y="28">Argentina</text><text x="213" y="28">España</text></g>
      </svg>`, V.gh9b],
    ["Estructura de la población por edades y actividad", `<p>La población se divide en tres grandes <b>grupos de edad</b>: <b>jóvenes</b> (0–14 años), <b>adultos</b> (15–64) y <b>mayores</b> (65 o más). Cuando los mayores superan el 12 % del total se habla de población envejecida; en España ya son más del 20 %.</p><p>Según su relación con el trabajo, la <mark>población activa</mark> es la que tiene edad de trabajar (16 años o más) y trabaja (<b>ocupados</b>) o busca empleo (<b>parados</b>). La <b>población inactiva</b> no trabaja ni busca trabajo: estudiantes, jubilados, personas que se dedican a las tareas del hogar sin sueldo. La <b>tasa de paro</b> es el porcentaje de parados sobre la población activa.</p>`,
      H.arbol("Población activa e inactiva", [["Población", ["activa", "inactiva"], "var(--pen)", ["ocupados y parados", "estudiantes, jubilados"]]])],
  ],
  ejemplos: [
    ["Una comarca tiene 45 000 habitantes y una superficie de 1500 km². Calcula su densidad.", ["Densidad = habitantes ÷ superficie.", "45 000 ÷ 1500 = 30."], "30 hab./km²."],
    ["En una ciudad de 200 000 habitantes nacieron 1800 bebés y murieron 2200 personas en un año. Calcula la natalidad, la mortalidad y el crecimiento natural.", ["TN = 1800 ÷ 200 000 × 1000 = 9 ‰.", "TM = 2200 ÷ 200 000 × 1000 = 11 ‰.", "CN = 9 − 11 = −2 ‰."], "Natalidad 9 ‰, mortalidad 11 ‰ y crecimiento natural negativo (−2 ‰): la población disminuye si no llegan inmigrantes."],
    ["Una pirámide tiene la base más estrecha que la parte central y una cima ancha. ¿Qué tipo es y qué nos dice?", ["Base estrecha: nacen pocos niños (baja natalidad).", "Centro ancho: muchos adultos nacidos cuando la natalidad era alta.", "Cima ancha: muchos mayores, porque la esperanza de vida es alta."], "Es regresiva: una población envejecida de un país desarrollado."],
  ],
  errores: [
    "Confundir población absoluta (número total de habitantes) con densidad (habitantes por km²).",
    "Expresar las tasas en porcentaje: la natalidad y la mortalidad se expresan en tanto por mil (‰).",
    "Pensar que si el crecimiento natural es negativo la población siempre baja: puede crecer gracias a la inmigración.",
    "Colocar a las mujeres a la izquierda de la pirámide: por convenio, hombres a la izquierda y mujeres a la derecha.",
    "Considerar inactivos a los parados: buscan trabajo, así que son población activa.",
  ],
  ejercicios: [
    ["¿Qué diferencia hay entre el censo y el padrón?", "El censo es un recuento de toda la población del país cada diez años; el padrón es el registro de vecinos de cada municipio y se actualiza continuamente."],
    ["Calcula la densidad de un país de 10 millones de habitantes y 250 000 km².", "10 000 000 ÷ 250 000 = 40 hab./km²."],
    ["Cita dos grandes focos de población y dos vacíos demográficos.", "Focos: este y sur de Asia, Europa occidental, noreste de Estados Unidos. Vacíos: desiertos (Sahara), zonas polares, Amazonia, altas montañas."],
    ["En un país de 5 millones de habitantes nacen 60 000 personas al año. ¿Cuál es su tasa de natalidad?", "60 000 ÷ 5 000 000 × 1000 = 12 ‰."],
    ["Si la natalidad es 18 ‰ y la mortalidad 7 ‰, ¿cuál es el crecimiento natural?", "18 − 7 = 11 ‰, positivo."],
    ["¿Qué es la esperanza de vida? Pon un ejemplo.", "El número medio de años que se espera que viva una persona al nacer. En España supera los 83 años."],
    ["Explica qué es la transición demográfica.", "El paso de un régimen con natalidad y mortalidad altas a otro con ambas bajas. Primero baja la mortalidad y la población crece mucho; después baja la natalidad y el crecimiento se frena."],
    ["¿Qué problemas plantea el envejecimiento de la población?", "Más gasto en pensiones y en sanidad y cuidados, y falta de trabajadores jóvenes."],
    ["Describe los tres tipos de pirámide de población.", "Expansiva (base ancha, población joven), estacionaria (forma de campana, estable) y regresiva (base estrecha, población envejecida)."],
    ["Clasifica como activos o inactivos: una estudiante de 17 años, un parado de 40, una jubilada, un médico.", "Activos: el parado (busca empleo) y el médico (ocupado). Inactivos: la estudiante y la jubilada."],
  ],
  figura: ["La transición demográfica", H.figCols("Fases de la evolución de la población", [["Régimen antiguo", ["natalidad alta", "mortalidad alta", "crece muy poco", "hasta 1800"], "var(--muted)"], ["Transición", ["natalidad alta", "mortalidad baja", "crece mucho", "hoy: África"], "var(--sun)"], ["Régimen moderno", ["natalidad baja", "mortalidad baja", "casi no crece", "hoy: Europa"], "var(--pen)"]])],
  video: V.gh9v,
  quiz: [
    ["La densidad de población se mide en…", ["habitantes por km²", "nacimientos por mil", "años"], "Habitantes ÷ superficie."],
    ["El recuento de toda la población cada diez años es el…", ["censo", "padrón", "Registro Civil"], "Lo hace el INE."],
    ["La tasa de natalidad se expresa en…", ["tanto por mil (‰)", "porcentaje (%)", "km²"], "Nacimientos por cada mil habitantes."],
    ["El crecimiento natural es…", ["natalidad menos mortalidad", "inmigrantes menos emigrantes", "habitantes por km²"], "También se llama vegetativo."],
    ["Para mantener una población sin migraciones hacen falta unos…", ["2,1 hijos por mujer", "1 hijo por mujer", "5 hijos por mujer"], "Es el nivel de reemplazo."],
    ["¿Qué continente tiene hoy la población más joven?", ["África", "Europa", "Oceanía"], "Su natalidad sigue siendo alta."],
    ["La pirámide de España es…", ["regresiva", "expansiva", "estacionaria"], "Base estrecha y muchos mayores."],
    ["En la pirámide, los hombres se colocan…", ["a la izquierda", "a la derecha", "arriba"], "Las mujeres, a la derecha."],
    ["Un parado forma parte de la población…", ["activa", "inactiva", "dependiente"], "Busca empleo."],
    ["La población mundial superó los 8000 millones en…", ["2022", "1960", "1800"], "Según la ONU."],
  ],
  examen: [
    ["En la transición demográfica, lo primero que baja es…", ["la mortalidad", "la natalidad", "la densidad"], "Gracias a la medicina y la higiene."],
    ["Se habla de población envejecida cuando los mayores de 65 superan el…", ["12 %", "50 %", "2 %"], "En España superan el 20 %."],
    ["La mortalidad infantil mide las muertes de niños de menos de…", ["un año", "cinco años", "quince años"], "Por cada mil nacidos vivos."],
  ],
  feynman: ["Cómo se calcula la densidad y por qué la población se concentra en algunas zonas", "Cómo se calculan la natalidad, la mortalidad y el crecimiento natural", "Qué es la transición demográfica", "Cómo se lee una pirámide de población"],
  mapa: ["POBLACIÓN", "var(--pen)", [["Reparto", "densidad · focos · vacíos", "var(--leaf)"], ["Dinámica", "natalidad · mortalidad · CN", "var(--red)"], ["Evolución", "transición demográfica", "var(--sun)"], ["Estructura", "pirámides · activa", "var(--pen)"]], 240],
  tarjetas: [
    ["Densidad de población", "Habitantes ÷ superficie en km²."],
    ["Censo", "Recuento oficial de la población cada diez años."],
    ["Tasa de natalidad", "Nacimientos ÷ población × 1000 (‰)."],
    ["Crecimiento natural", "Tasa de natalidad menos tasa de mortalidad."],
    ["Esperanza de vida", "Años que se espera que viva una persona al nacer."],
    ["Transición demográfica", "Paso de natalidad y mortalidad altas a ambas bajas."],
    ["Pirámide regresiva", "Base estrecha: pocos nacimientos y población envejecida."],
    ["Población activa", "Personas de 16 años o más que trabajan o buscan empleo."],
  ],
  familias: ["Consultad en la web del INE cuántos habitantes tiene vuestro municipio y su superficie, y calculad juntos la densidad.", "Contad cuántos hermanos tenían los abuelos, los padres y ahora los hijos: veréis la caída de la natalidad en casa."],
  saberes: "Sociedades y territorios: la población mundial y de España, su distribución, dinámica y estructura; indicadores demográficos y pirámides de población (RD 217/2022, Geografía e Historia, primer ciclo).",
  ideas: ["Construir la pirámide de población de la clase con las familias (edades de abuelos, padres y hermanos).", "Comparar en el visor del INE la pirámide de España en 1950 y hoy.", "Problemas de tasas con datos reales del propio municipio."],
  fuentes: [["Instituto Nacional de Estadística (INE): cifras de población", "https://www.ine.es/"], ["Naciones Unidas: World Population Prospects", "https://population.un.org/wpp/"]],
});
