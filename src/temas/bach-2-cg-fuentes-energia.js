// Ciencias Generales 2º Bachillerato · Las fuentes de energía y la transición energética (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Esquema de una central térmica.
const centralSVG = cadena("Esquema común de una central eléctrica: una fuente de calor produce vapor que mueve una turbina unida a un alternador", [["Calor (combustible o fisión)", "var(--red)"], ["Vapor a presión", "var(--sun)"], ["Turbina + alternador", "var(--pen)"]], ["agua → vapor", "gira"], "Central térmica o nuclear");

// Mix eléctrico España.
const mixSVG = L5.barras("Generación eléctrica en España por fuentes en 2024 (aproximado, %)", "Mix eléctrico España 2024 (%)", [["Eólica", 23, "var(--leaf)", "23 %"], ["Nuclear", 20, "var(--sun)", "20 %"], ["Solar FV", 17, "var(--red)", "17 %"], ["Hidráulica", 13, "var(--water)", "13 %"], ["Ciclo comb.", 14, "var(--pen)", "14 %"]]);

// Fisión nuclear.
const fisionSVG = marco("Fisión del uranio-235: un neutrón rompe el núcleo en dos fragmentos, libera energía y dos o tres neutrones que provocan una reacción en cadena", `
  <circle cx="22" cy="90" r="5" fill="var(--muted)"/><path d="M28 90 H 58" stroke="var(--muted)" stroke-width="2" marker-end="url(#fiA)"/>${T(22, 76, "n", { fs: 11, b: true })}
  <circle cx="84" cy="90" r="22" fill="var(--sun)" fill-opacity=".8" stroke="#b45309" stroke-width="2"/>${T(84, 94, "²³⁵U", { fs: 12, b: true })}
  <path d="M108 90 H 128" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#fiA)"/>
  <circle cx="158" cy="52" r="16" fill="var(--red)" fill-opacity=".7"/>${T(158, 56, "Ba", { fs: 11, b: true, c: "#fff" })}<circle cx="158" cy="128" r="15" fill="var(--pen)" fill-opacity=".7"/>${T(158, 132, "Kr", { fs: 11, b: true, c: "#fff" })}
  ${[[214, 70], [222, 96], [210, 120]].map(([x, y]) => `<path d="M178 90 L ${x - 6} ${y}" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#fiA)"/><circle cx="${x}" cy="${y}" r="5" fill="var(--muted)"/>`).join("")}
  ${T(232, 46, "energía", { fs: 11, b: true, c: "var(--red)" })}${T(130, 172, "3 neutrones → reacción en cadena", { fs: 11, b: true, c: "var(--muted)" })}`, `<marker id="fiA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker>`);

// Curva de demanda y almacenamiento.
const demandaSVG = L5.graf("Demanda eléctrica a lo largo de un día y producción solar: el almacenamiento desplaza la energía del mediodía a la noche", "hora del día (0 → 24 h)", "potencia", [{ p: [[0, 0.45], [0.2, 0.38], [0.35, 0.65], [0.55, 0.7], [0.8, 0.9], [0.92, 0.75], [1, 0.5]], c: "var(--pen)", t: "demanda" }, { p: [[0, 0], [0.27, 0], [0.4, 0.6], [0.52, 0.85], [0.65, 0.6], [0.8, 0], [1, 0]], c: "var(--sun)", t: "", dash: true }], `${T(150, 34, "solar", { fs: 11, b: true, c: "#b45309" })}`);

module.exports = tema({
  titulo: "Las fuentes de energía y la transición energética",
  minutos: 110,
  secciones: [3, 5, 4],
  objetivos: [
    "Clasificar las fuentes de energía en renovables y no renovables y valorar sus ventajas e inconvenientes",
    "Explicar cómo se genera la electricidad en las centrales térmicas, nucleares y renovables y cómo llega a los hogares",
    "Describir la fisión y la fusión nuclear y sus aplicaciones y riesgos",
    "Analizar el mix energético y eléctrico de España y del mundo con datos",
    "Comprender los retos de la transición energética: almacenamiento, redes, hidrógeno verde y electrificación",
    "Relacionar el uso de la energía con el cambio climático y la sostenibilidad y proponer acciones",
  ],
  claves: ["fuente de energía", "energía primaria", "renovable", "no renovable", "combustible fósil", "central térmica", "alternador", "fisión nuclear", "fusión nuclear", "energía solar fotovoltaica", "energía eólica", "biomasa", "mix energético", "almacenamiento", "hidrógeno verde", "transición energética"],
  pregunta: {
    texto: "Si las renovables ya son la fuente más barata de electricidad, ¿por qué no apagamos ya todas las centrales de gas?",
    respuesta: "Porque el sol y el viento son <b>variables</b>: no siempre producen cuando más se necesita, por ejemplo una noche sin viento de invierno. La red eléctrica debe equilibrar en cada instante la producción y el consumo, y para eso necesita fuentes <mark>gestionables</mark> (hidráulica, gas, nuclear) o sistemas de <b>almacenamiento</b> (baterías, bombeo, hidrógeno). La transición energética consiste precisamente en ampliar las renovables a la vez que se construyen almacenamiento, redes e interconexiones para poder prescindir de los fósiles.",
  },
  lectura: {
    titulo: "El día que España se quedó a oscuras",
    html: `<p>El 28 de abril de 2025, a las 12:33, la península ibérica sufrió un apagón casi total. En cuestión de segundos se desconectaron miles de megavatios de generación, el sistema eléctrico perdió el equilibrio y se apagaron semáforos, trenes, ascensores, hospitales sin generador y la mayoría de los teléfonos. La reposición tardó horas, central a central, empezando por las hidroeléctricas, capaces de arrancar por sí mismas, y por las interconexiones con Francia y Marruecos.</p><p>El apagón recordó algo que solemos olvidar: la electricidad no se puede almacenar fácilmente en grandes cantidades, así que en cada segundo hay que producir exactamente lo que se consume, y la frecuencia de la red debe mantenerse en 50 hercios. Un sistema con mucha energía solar y eólica, más barata y limpia, necesita también mecanismos para controlar la tensión y la frecuencia, más almacenamiento y más conexiones con los países vecinos. En este tema estudiarás de dónde sale la energía que usamos, cómo se produce la electricidad, qué ventajas e inconvenientes tiene cada fuente y qué retos plantea la transición hacia un sistema sin combustibles fósiles.</p>`,
  },
  bloques: [
    { h: "Fuentes de energía primaria y final", p: [
      "Una <mark>fuente de energía</mark> es un recurso natural del que se puede obtener energía útil. La <b>energía primaria</b> es la que está en la naturaleza sin transformar: el petróleo, el carbón, el gas natural, el uranio, el viento, la radiación solar, el agua de los ríos o la biomasa. Casi nunca la usamos directamente: la transformamos en <b>energía final</b>, la que llega al consumidor (electricidad, gasolina, butano), y finalmente en <b>energía útil</b> (luz, calor, movimiento). En cada paso hay pérdidas: de la energía primaria que entra en una central térmica, solo un 35-55 % sale como electricidad.",
      "Según su disponibilidad, las fuentes se clasifican en <mark>no renovables</mark>, que existen en cantidades limitadas y se agotan al usarlas porque se formaron en millones de años (carbón, petróleo, gas natural y uranio), y <mark>renovables</mark>, que se regeneran de forma natural a la escala de la vida humana (solar, eólica, hidráulica, biomasa, geotérmica y marina). Casi todas tienen su origen en el Sol: los combustibles fósiles son energía solar fosilizada por antiguas plantas y plancton; el viento se debe al calentamiento desigual de la atmósfera; los ríos, al ciclo del agua que mueve el Sol. Solo la nuclear, la geotérmica y la de las mareas tienen otro origen.",
    ], svg: arbol("Clasificación de las fuentes de energía", "Fuentes", [["Fósiles", "carbón, petróleo, gas"], ["Nuclear", "uranio (fisión)"], ["Renovables", "solar, eólica, hidráulica"], ["Otras renov.", "biomasa, geotermia, mar"]]), v: ["fue-a", "Recursos renovables y no renovables: diferencias y ejemplos"] },
    { h: "Los combustibles fósiles", p: [
      "El <b>carbón</b> se formó a partir de restos de grandes bosques enterrados hace unos 300 millones de años; el <b>petróleo</b> y el <b>gas natural</b>, a partir de plancton marino sepultado en sedimentos y transformado por la presión y la temperatura. Los <mark>combustibles fósiles</mark> todavía aportan alrededor del 80 % de la energía primaria mundial. Sus ventajas son evidentes: tienen mucha energía en poco volumen, son fáciles de transportar y almacenar y existe una gran infraestructura para usarlos. El petróleo es además la materia prima de plásticos, fármacos, fibras y fertilizantes.",
      "Sus inconvenientes son graves. Son <b>limitados</b> y están concentrados en pocos países, lo que crea dependencia y conflictos geopolíticos: España importa casi todo el petróleo y el gas que consume. Su combustión emite <b>dióxido de carbono</b>, el principal gas responsable del cambio climático, y contaminantes como óxidos de azufre y de nitrógeno (lluvia ácida, problemas respiratorios) y partículas finas. Se estima que la contaminación del aire por combustión causa millones de muertes prematuras al año. Su extracción y transporte también provocan impactos, como las mareas negras (el Prestige en Galicia, en 2002) o la fracturación hidráulica.",
    ], svg: L5.compara("Ventajas e inconvenientes de los combustibles fósiles", ["Ventajas", ["mucha energía", "fáciles de transportar", "gestionables", "infraestructura", "materias primas"]], ["Inconvenientes", ["se agotan", "emiten CO₂", "contaminan el aire", "dependencia exterior", "mareas negras"]], "var(--leaf)", "var(--red)") },
    { h: "Cómo se genera la electricidad", p: [
      "La mayor parte de la electricidad se produce con el mismo principio, la <b>inducción electromagnética</b> que descubrió Faraday: al girar un imán dentro de unas bobinas de cobre (o las bobinas dentro de un imán) se genera corriente eléctrica. Esa máquina es el <mark>alternador</mark>. Lo que cambia de una central a otra es qué hace girar la turbina conectada al alternador: el vapor de agua (centrales térmicas de carbón, de gas, nucleares, termosolares, de biomasa y geotérmicas), el agua de un embalse (hidráulicas) o el viento (aerogeneradores). Las placas fotovoltaicas son la excepción: convierten la luz directamente en electricidad.",
      "En una central de <b>ciclo combinado</b>, la más usada con gas natural, el gas se quema en una turbina de gas y los gases calientes de escape se aprovechan para producir vapor y mover una segunda turbina; así se alcanza un rendimiento de hasta el 60 %. La electricidad generada se eleva a muy alta tensión (220 000 o 400 000 voltios) en <b>transformadores</b>, porque así se pierde menos energía en los cables, y viaja por la <b>red de transporte</b>. Cerca de los consumidores, otras subestaciones la reducen hasta los 230 V de nuestros enchufes. En España, <b>Red Eléctrica</b> gestiona en tiempo real el equilibrio entre producción y demanda.",
    ], svg: centralSVG },
    { h: "La energía nuclear: fisión", p: [
      "En la <mark>fisión nuclear</mark>, un núcleo pesado, como el uranio-235, absorbe un neutrón, se vuelve inestable y se divide en dos núcleos más ligeros, liberando una enorme cantidad de energía y dos o tres neutrones. Esos neutrones pueden romper otros núcleos y provocar una <b>reacción en cadena</b>. La energía procede de una pequeña pérdida de masa, según la famosa ecuación de Einstein <b>E = m·c²</b>: como c² es enorme (9·10¹⁶ m²/s²), una masa minúscula equivale a muchísima energía. Un gramo de uranio libera tanta energía como unas tres toneladas de carbón.",
      "En un reactor, la reacción en cadena se mantiene controlada con <b>barras de control</b> que absorben neutrones, y un <b>moderador</b> (agua) los frena para que sean más eficaces. El calor produce vapor que mueve una turbina, como en una central térmica. España tiene siete reactores en cinco centrales que generan alrededor del 20 % de la electricidad, y un calendario de cierre entre 2027 y 2035. La energía nuclear <b>no emite CO₂</b> al funcionar y es muy estable, pero tiene inconvenientes: los <b>residuos radiactivos</b> de alta actividad permanecen peligrosos miles de años, existe un riesgo, bajo pero grave, de accidentes (Chernóbil en 1986, Fukushima en 2011), las centrales son muy caras de construir y el uranio también es limitado.",
    ], svg: fisionSVG, v: ["fue-b", "Cómo funciona una central nuclear"] },
    { h: "La fusión nuclear", p: [
      "La <mark>fusión nuclear</mark> es el proceso contrario: dos núcleos ligeros se unen para formar uno más pesado, y también se pierde un poco de masa que se transforma en energía. Es la fuente de energía de las estrellas: en el núcleo del Sol, a unos 15 millones de grados, se fusionan cada segundo unos 600 millones de toneladas de hidrógeno para formar helio. En la Tierra, la reacción más prometedora une dos isótopos del hidrógeno, el <b>deuterio</b> (que abunda en el agua del mar) y el <b>tritio</b>: ²H + ³H → ⁴He + n + energía.",
      "Reproducir la fusión es extraordinariamente difícil: hay que calentar el combustible a más de 100 millones de grados, convertido en plasma, y confinarlo sin que toque las paredes, con potentes imanes (reactores <b>tokamak</b>) o con láseres. En 2022, el laboratorio estadounidense NIF consiguió por primera vez que una reacción de fusión liberase más energía que la aportada por los láseres al combustible. El proyecto internacional <b>ITER</b>, en Francia, con participación española, pretende demostrar su viabilidad. La fusión sería casi inagotable, sin CO₂ y con residuos de vida corta, pero probablemente no aportará electricidad a gran escala antes de la segunda mitad del siglo.",
    ], svg: L5.compara("Diferencias entre fisión y fusión nuclear", ["Fisión", ["núcleo pesado se rompe", "uranio-235", "centrales actuales", "residuos de larga vida", "reacción en cadena"]], ["Fusión", ["núcleos ligeros se unen", "deuterio y tritio", "estrellas, ITER", "residuos de vida corta", "100 millones °C"]], "var(--sun)", "var(--pen)") },
    { h: "La energía solar", p: [
      "El Sol envía a la Tierra en una hora más energía de la que consume la humanidad en un año. La <mark>energía solar fotovoltaica</mark> la convierte directamente en electricidad mediante células de <b>silicio</b>, un semiconductor: cuando la luz incide sobre la célula, arranca electrones y crea una corriente continua, que un inversor transforma en alterna. Su precio ha caído alrededor de un 90 % en la última década, y hoy es la forma más barata de generar electricidad en muchos lugares soleados, como España. Se instala en grandes plantas y también en tejados (<b>autoconsumo</b>), lo que acerca la producción al consumidor.",
      "La <b>energía solar térmica</b> usa el calor del Sol. A baja temperatura, los colectores de los tejados calientan agua sanitaria y calefacción. A alta temperatura, las <b>centrales termosolares</b> concentran la luz con espejos sobre un receptor para producir vapor y mover una turbina; algunas, como las de Andalucía, almacenan el calor en sales fundidas y producen electricidad de noche. Sus inconvenientes son la <b>variabilidad</b> (no hay producción de noche y baja con nubes y en invierno), la ocupación de suelo de las grandes plantas y el reciclaje de los paneles al final de su vida, de unos 25-30 años.",
    ], svg: L6.flujo("Funcionamiento de una instalación fotovoltaica", ["Luz solar en la célula de silicio", "Corriente continua", "Inversor: corriente alterna", "Consumo o red eléctrica"], "Fotovoltaica") },
    { h: "Eólica, hidráulica y otras renovables", p: [
      "La <mark>energía eólica</mark> aprovecha la energía cinética del viento con aerogeneradores, cuyas palas mueven un alternador. Es la primera fuente de electricidad en España, con más de 1300 parques. La <b>eólica marina</b> aprovecha vientos más fuertes y constantes y se desarrolla con plataformas flotantes en costas profundas como las canarias o las gallegas. Sus impactos son el paisajístico, el ruido y la mortalidad de aves. La <b>energía hidráulica</b> aprovecha la energía potencial del agua embalsada, que cae y mueve turbinas. Es renovable, barata y sobre todo <b>gestionable</b>: se puede producir cuando se necesita. Pero depende de la lluvia, ya no quedan grandes ríos por aprovechar en Europa y los embalses alteran los ecosistemas fluviales.",
      "La <b>biomasa</b> obtiene energía de la materia orgánica (restos forestales y agrícolas, cultivos energéticos, residuos), que se quema o se transforma en <b>biocombustibles</b> (bioetanol, biodiésel) o en <b>biogás</b>. Se considera renovable si se repone lo que se consume, aunque puede competir con los alimentos. La <b>geotérmica</b> usa el calor interno de la Tierra: en Islandia produce gran parte de la electricidad y la calefacción, y en España se usa en bombas de calor geotérmicas. La <b>energía marina</b> aprovecha las mareas y las olas, como la central de olas de Mutriku, en el País Vasco.",
    ], svg: L6.tabla("Otras fuentes renovables", ["Fuente", "Aprovecha", "Gestionable"], [["Eólica", "viento", "no"], ["Hidráulica", "agua embalsada", "sí"], ["Biomasa", "materia orgánica", "sí"], ["Geotérmica", "calor interno", "sí"], ["Marina", "olas y mareas", "parcial"]]) },
    { h: "Energía y cambio climático", p: [
      "La quema de combustibles fósiles para producir electricidad, calor y transporte es responsable de alrededor de tres cuartas partes de las emisiones mundiales de <b>gases de efecto invernadero</b>. Al acumularse en la atmósfera, estos gases retienen parte del calor que la Tierra emite y elevan la temperatura media del planeta, que ya ha subido alrededor de 1,2-1,3 °C desde la era preindustrial. La concentración de CO₂ ha pasado de unas 280 partes por millón a más de 420, un valor que no se registraba desde hace millones de años.",
      "En el <b>Acuerdo de París</b> (2015), casi todos los países se comprometieron a limitar el calentamiento muy por debajo de 2 °C y a intentar no superar 1,5 °C. Para lograrlo, las emisiones deben reducirse a la mitad hacia 2030 y alcanzar la <mark>neutralidad climática</mark> (emisiones netas cero) a mediados de siglo. La Unión Europea lo ha convertido en ley con el Pacto Verde Europeo, y España tiene un Plan Nacional Integrado de Energía y Clima (PNIEC) que prevé que las renovables generen el 81 % de la electricidad en 2030. La energía es, por tanto, el centro de la lucha contra el cambio climático, que estudiarás con detalle en el tema de riesgos y recursos.",
    ], svg: L5.graf("Concentración atmosférica de CO₂ desde 1960 (curva de Keeling): de unas 317 a más de 420 ppm", "año (1960 → 2025)", "CO₂ (ppm)", [{ p: [[0, 0.1], [0.2, 0.2], [0.4, 0.35], [0.6, 0.52], [0.8, 0.72], [1, 0.95]], c: "var(--red)", t: "420 ppm" }]) },
    { h: "El mix energético de España y del mundo", p: [
      "El <mark>mix energético</mark> es la combinación de fuentes que usa un país. Hay que distinguir el mix de <b>energía primaria</b> (toda la energía, incluido el transporte y la industria) del <b>mix eléctrico</b> (solo la electricidad). En España, el petróleo sigue siendo la primera fuente de energía primaria, por el transporte, seguida del gas natural; pero en el mix eléctrico las renovables ya producen más de la mitad de la electricidad: en 2024 superaron el 56 %, con la eólica y la solar fotovoltaica en cabeza, seguidas de la nuclear, la hidráulica y los ciclos combinados de gas. El carbón prácticamente ha desaparecido.",
      "En el mundo, los fósiles todavía dominan. China es el mayor consumidor de carbón, pero también el país que más renovables instala; la India depende mucho del carbón para su desarrollo; Francia obtiene cerca del 70 % de su electricidad de la nuclear; Noruega casi toda de la hidráulica, e Islandia de la geotermia. El consumo por persona es muy desigual: un estadounidense consume unas diez veces más energía que un indio, y unos 700 millones de personas, la mayoría en África, todavía no tienen electricidad. El séptimo Objetivo de Desarrollo Sostenible busca garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.",
    ], svg: mixSVG },
    { h: "El reto del almacenamiento y las redes", p: [
      "La electricidad debe producirse en el mismo instante en que se consume. La demanda varía a lo largo del día (punta a media tarde y noche) y del año, y la producción solar y eólica depende del tiempo. Por eso el gran reto de un sistema renovable es el <mark>almacenamiento</mark>: guardar la energía que sobra cuando hay mucho sol o viento y devolverla cuando falta. Las <b>centrales hidráulicas de bombeo</b> son hoy el mayor almacén: bombean agua a un embalse superior con la electricidad sobrante y la turbinan después. Las <b>baterías de ion-litio</b>, cada vez más baratas, se instalan junto a las plantas solares y en los hogares.",
      "Otras soluciones son las sales fundidas de las termosolares, los volantes de inercia, el aire comprimido y el hidrógeno. También son clave unas <b>redes</b> más fuertes e inteligentes (<b>smart grids</b>) que integren millones de pequeños productores y consumidores, más <b>interconexiones</b> con otros países (la península ibérica es casi una «isla eléctrica») y la <b>gestión de la demanda</b>: consumir cuando sobra energía, por ejemplo cargando el coche eléctrico de madrugada o al mediodía, cuando el precio es más bajo. Los precios horarios de la luz ya animan a los consumidores a hacerlo.",
    ], svg: demandaSVG },
    { h: "El hidrógeno verde y la electrificación", p: [
      "Algunos usos de la energía son difíciles de electrificar: la industria del acero, los fertilizantes, el transporte marítimo y aéreo. Para ellos se investiga el <mark>hidrógeno verde</mark>, que se obtiene por <b>electrólisis</b> del agua (2 H₂O → 2 H₂ + O₂) con electricidad renovable. El hidrógeno es un <b>vector energético</b>, no una fuente: almacena energía que se libera al combinarse de nuevo con oxígeno en una <b>pila de combustible</b>, que produce electricidad y solo emite agua, o al quemarse. Hoy casi todo el hidrógeno se fabrica a partir de gas natural (hidrógeno «gris»), que emite CO₂.",
      "La estrategia principal de la transición es la <b>electrificación</b>: sustituir los usos de combustibles por electricidad renovable. Los <b>coches eléctricos</b> aprovechan alrededor del 80-90 % de la energía de su batería, frente al 25-30 % de un motor de gasolina; las <b>bombas de calor</b> producen tres o cuatro unidades de calor por cada unidad de electricidad, porque toman calor del aire o del suelo. Junto con la eficiencia energética, la electrificación permite reducir mucho el consumo de energía primaria. España, por su sol, su viento y su espacio, tiene una oportunidad para producir hidrógeno verde y atraer industria, pero también debe cuidar el agua y el territorio.",
    ], svg: cadena("El hidrógeno verde como vector energético", [["Electricidad renovable", "var(--leaf)"], ["Electrólisis: H₂", "var(--pen)"], ["Pila o industria", "var(--sun)"]], ["agua", "solo emite agua"], "Hidrógeno verde"), v: ["fue-d", "La pila de hidrógeno y la electrólisis"] },
    { h: "La transición energética justa", p: [
      "La <mark>transición energética</mark> es el paso de un sistema basado en combustibles fósiles a otro basado en fuentes renovables, eficiente y electrificado. No es solo un cambio tecnológico: afecta a la economía, al empleo y al territorio. El cierre de las minas de carbón y de las centrales térmicas en comarcas de Asturias, León, Teruel o Galicia obliga a buscar nuevas actividades; por eso se habla de una <b>transición justa</b>, que no deje atrás a los trabajadores ni a las regiones afectadas. También hay debates sobre la ocupación de suelo agrícola por las grandes plantas solares y sobre los <b>minerales críticos</b> (litio, cobalto, cobre, tierras raras) que necesitan baterías y aerogeneradores.",
      "La transición tiene grandes ventajas: menos emisiones y contaminación, menos dependencia de las importaciones de gas y petróleo (y de sus subidas de precio, como en la crisis de 2022), nuevos empleos y una electricidad más barata a largo plazo. Las <b>comunidades energéticas</b> permiten a vecinos, ayuntamientos y empresas compartir instalaciones de autoconsumo. Cada persona puede contribuir: ahorrar energía, elegir transporte sostenible, instalar autoconsumo si es posible e informarse con espíritu crítico. La energía más limpia y barata sigue siendo la que no se consume.",
    ], svg: L6.radial("Pilares de la transición energética", "Transición", ["Renovables", "Eficiencia", "Electrificación", "Almacenamiento", "Redes", "Justicia social"], "var(--leaf)"), v: ["fue-c", "Qué es la transición energética: cuatro claves"] },
  ],
  figura: { titulo: "Fuentes de energía", items: [["Fósiles", "carbón · petróleo", "gas natural", "CO₂ · se agotan"], ["Nuclear", "fisión U-235", "E = mc²", "residuos"], ["Renovables", "solar · eólica", "hidráulica · biomasa", "variables"], ["Transición", "almacenamiento", "H₂ verde", "electrificación"]] },
  video: ["fue-a", "Recursos renovables y no renovables: diferencias y ejemplos"],
  ejemplos: [
    ["Una central térmica de rendimiento 40 % debe producir 500 MW eléctricos. ¿Qué potencia térmica necesita y cuánta se pierde?", ["η = Péléctrica / Ptérmica.", "Ptérmica = 500 / 0,40 = 1250 MW.", "Pérdidas = 1250 − 500 = 750 MW (calor al ambiente o al río)."], "1250 MW térmicos; se pierden 750 MW."],
    ["Calcula la energía que equivale a 1 g de masa según E = m·c².", ["m = 10⁻³ kg; c = 3·10⁸ m/s.", "E = 10⁻³ · (3·10⁸)² = 9·10¹³ J.", "En kWh: 9·10¹³ / 3,6·10⁶ = 2,5·10⁷ kWh."], "9·10¹³ J, unos 25 millones de kWh."],
    ["Una instalación de autoconsumo de 4 kW produce de media 1500 kWh por kW instalado al año. ¿Cuánta energía genera y cuánto ahorra a 0,15 €/kWh si aprovecha el 70 %?", ["Producción: 4 · 1500 = 6000 kWh/año.", "Aprovechado: 0,7 · 6000 = 4200 kWh.", "Ahorro: 4200 · 0,15 = 630 €/año."], "6000 kWh/año y unos 630 € de ahorro."],
    ["Un aerogenerador de 3 MW funciona con un factor de capacidad del 30 %. ¿Cuánta energía produce al año? ¿A cuántos hogares de 3500 kWh/año abastece?", ["Horas del año: 8760.", "E = 3 MW · 8760 · 0,30 = 7884 MWh.", "Hogares: 7 884 000 / 3500 ≈ 2250."], "Unos 7,9 GWh/año, para unos 2250 hogares."],
    ["Un coche de gasolina consume 6 L/100 km y cada litro emite 2,3 kg de CO₂. ¿Cuánto CO₂ emite en 15 000 km?", ["Litros: 15 000 · 6 / 100 = 900 L.", "CO₂ = 900 · 2,3.", "= 2070 kg ≈ 2 t."], "Unas 2 toneladas de CO₂ al año."],
    ["Una batería almacena 10 kWh solares a mediodía y los devuelve por la noche con un rendimiento del 90 %. ¿Cuánta energía entrega? ¿Cuánto se ahorra si la noche cuesta 0,25 €/kWh y el excedente se pagaba a 0,05 €/kWh?", ["Entregada: 0,9 · 10 = 9 kWh.", "Valor de noche: 9 · 0,25 = 2,25 €.", "Alternativa (vender): 10 · 0,05 = 0,50 €. Ganancia: 1,75 €/día."], "9 kWh; unos 1,75 € al día."],
  ],
  errores: [
    "Confundir energía renovable con energía «limpia»: la nuclear no emite CO₂ pero no es renovable, y la biomasa es renovable pero emite contaminantes.",
    "Pensar que el hidrógeno es una fuente de energía: es un vector que hay que fabricar gastando energía.",
    "Creer que el mix eléctrico es todo el consumo de energía: el transporte y la industria siguen usando sobre todo fósiles.",
    "Pensar que las renovables solo dependen del precio: el reto es su variabilidad, que exige almacenamiento y redes.",
    "Confundir fisión (romper núcleos pesados) con fusión (unir núcleos ligeros).",
    "Creer que la electricidad se puede guardar en la red: hay que producir en cada instante lo que se consume.",
  ],
  ejercicios: {
    b: [
      ["Define energía primaria y energía final con un ejemplo de cada una.", "Primaria: la de la naturaleza sin transformar (petróleo crudo, viento). Final: la que llega al consumidor tras transformarla (gasolina, electricidad)."],
      ["Clasifica como renovables o no renovables: gas natural, biomasa, uranio, geotérmica, carbón, mareas.", "Renovables: biomasa, geotérmica, mareas. No renovables: gas natural, uranio, carbón."],
      ["¿Por qué se dice que casi todas las fuentes de energía proceden del Sol? ¿Cuáles no?", "Los fósiles son restos de seres que hicieron fotosíntesis; el viento y el ciclo del agua los mueve el Sol; la biomasa es energía solar almacenada. No proceden del Sol la nuclear, la geotérmica y la mareomotriz."],
      ["Cita tres ventajas y tres inconvenientes de los combustibles fósiles.", "Ventajas: mucha energía en poco volumen, fáciles de transportar y almacenar, gestionables. Inconvenientes: se agotan, emiten CO₂ y contaminantes, crean dependencia exterior."],
      ["Explica qué es un alternador y qué tienen en común casi todas las centrales.", "Un generador que produce corriente al girar un imán y unas bobinas (inducción). Casi todas las centrales hacen girar una turbina unida a un alternador; cambia lo que la mueve (vapor, agua, viento)."],
      ["¿Por qué se transporta la electricidad a muy alta tensión?", "Porque para la misma potencia la intensidad es menor y se pierde mucha menos energía en forma de calor en los cables."],
      ["Describe la fisión nuclear.", "Un neutrón choca con un núcleo pesado (U-235), que se rompe en dos núcleos más ligeros, libera mucha energía y 2-3 neutrones que pueden romper otros núcleos (reacción en cadena)."],
      ["Indica dos ventajas y dos inconvenientes de la energía nuclear.", "Ventajas: no emite CO₂ al funcionar, producción estable y muy concentrada. Inconvenientes: residuos radiactivos de larga duración, riesgo de accidentes graves, alto coste."],
      ["Diferencia la energía solar fotovoltaica de la solar térmica.", "La fotovoltaica convierte la luz directamente en electricidad con células de silicio; la térmica aprovecha el calor del Sol para calentar agua o producir vapor."],
      ["¿Qué significa que una fuente es gestionable? Pon un ejemplo de fuente gestionable y otro de no gestionable.", "Que se puede producir cuando se necesita. Gestionable: hidráulica (o gas). No gestionable: eólica (o solar fotovoltaica sin baterías)."],
      ["¿Qué es el mix eléctrico?", "La combinación de fuentes con que un país produce su electricidad, con el porcentaje de cada una."],
      ["Cita tres formas de almacenar energía eléctrica.", "Centrales de bombeo, baterías, sales fundidas, hidrógeno, aire comprimido, volantes de inercia."],
    ],
    m: [
      ["Una central de ciclo combinado tiene un rendimiento del 55 % y una de carbón del 38 %. Para producir 1000 MWh, ¿cuánta energía térmica consume cada una?", "Ciclo combinado: 1000/0,55 = 1818 MWh. Carbón: 1000/0,38 = 2632 MWh. El ciclo combinado consume un 31 % menos."],
      ["Explica por qué una central de ciclo combinado tiene más rendimiento que una térmica clásica.", "Porque aprovecha dos veces el calor: primero los gases de combustión mueven una turbina de gas y después su calor residual produce vapor para una segunda turbina."],
      ["La fisión de un núcleo de U-235 libera unos 200 MeV (3,2·10⁻¹¹ J). ¿Qué energía libera 1 g de U-235 (2,56·10²¹ núcleos)?", "E = 2,56·10²¹ · 3,2·10⁻¹¹ = 8,2·10¹⁰ J ≈ 22 800 kWh."],
      ["¿Por qué la fusión es tan difícil de conseguir en la Tierra?", "Los núcleos tienen carga positiva y se repelen; hay que calentarlos a más de 100 millones de grados para que choquen con suficiente energía y mantener ese plasma confinado sin tocar las paredes, lo que exige imanes o láseres muy potentes."],
      ["Una placa solar de 1,7 m² con un rendimiento del 21 % recibe 1000 W/m². ¿Qué potencia eléctrica da?", "P = 1000 · 1,7 · 0,21 = 357 W."],
      ["Un embalse deja caer 20 m³/s desde 100 m. Si el rendimiento es del 90 %, ¿qué potencia produce?", "P = m·g·h/t · η = 20 000 · 9,8 · 100 · 0,9 = 1,76·10⁷ W ≈ 17,6 MW."],
      ["Explica cómo funciona una central de bombeo y por qué se considera una batería.", "Con la electricidad sobrante (o barata) bombea agua de un embalse inferior a otro superior, almacenándola como energía potencial; cuando hace falta, el agua baja y mueve las turbinas. Guarda energía y la devuelve, como una batería, con un rendimiento del 70-80 %."],
      ["¿Por qué el hidrógeno se considera un vector energético y no una fuente?", "Porque no existe libre en la naturaleza: hay que fabricarlo gastando energía (electrólisis o a partir de gas). Sirve para almacenar y transportar energía, que se recupera en una pila de combustible o quemándolo."],
      ["Compara la eficiencia de un coche eléctrico (85 %) y uno de gasolina (25 %) para obtener 10 kWh de energía mecánica.", "Eléctrico: 10/0,85 = 11,8 kWh de energía de la batería. Gasolina: 10/0,25 = 40 kWh de energía del combustible: unas 3,4 veces más."],
      ["Una bomba de calor con COP = 4 da 8 kWh de calor. ¿Cuánta electricidad consume? ¿De dónde sale el resto?", "Electricidad = 8/4 = 2 kWh. Los otros 6 kWh los toma del aire exterior (o del suelo): no los crea, los traslada."],
      ["¿Qué es una transición energética justa y por qué es necesaria?", "Una transición que acompaña a los trabajadores y territorios dependientes de los fósiles (minería, térmicas) con formación, nuevas actividades y ayudas, para que el cambio no genere desempleo ni despoblación."],
      ["Lee: «España obtuvo en 2024 más de la mitad de su electricidad de renovables, pero estas suponen solo una cuarta parte de su energía final». Explica la aparente contradicción.", "La electricidad es solo una parte (alrededor de una cuarta parte) de la energía final; el transporte y buena parte de la industria y la calefacción siguen usando petróleo y gas. Por eso hay que electrificar esos usos."],
    ],
    a: [
      ["España consume unos 250 TWh de electricidad al año. Si una planta fotovoltaica de 1 ha produce unos 1,2 GWh/año, ¿qué superficie haría falta para producirlo todo con solar? Compárala con la superficie de España (506 000 km²) y comenta los límites de este cálculo.", "250 TWh = 250 000 GWh → 208 333 ha ≈ 2083 km², un 0,4 % de España. Límites: la solar no produce de noche ni igual en invierno (haría falta almacenamiento y otras fuentes), hay pérdidas en la red y además hay que electrificar otros consumos."],
      ["Una central nuclear de 1000 MW eléctricos tiene un rendimiento del 33 %. ¿Cuánto U-235 fisiona al año funcionando el 90 % del tiempo? (1 g de U-235 libera 8,2·10¹⁰ J)", "Energía eléctrica: 1000 MW · 0,9 · 3,15·10⁷ s = 2,84·10¹⁶ J. Térmica: 2,84·10¹⁶/0,33 = 8,6·10¹⁶ J. Masa: 8,6·10¹⁶/8,2·10¹⁰ = 1,05·10⁶ g ≈ 1 t de U-235."],
      ["Calcula el CO₂ evitado al año por un parque eólico que produce 100 GWh si sustituye a un ciclo combinado que emite 0,37 kg CO₂/kWh.", "100·10⁶ kWh · 0,37 = 3,7·10⁷ kg = 37 000 t de CO₂ al año."],
      ["Elabora una tabla comparativa de cinco fuentes de electricidad (carbón, gas, nuclear, eólica, solar) con estos criterios: emisiones, gestionabilidad, coste, residuos y dependencia exterior.", "Carbón: emisiones muy altas, gestionable, coste alto con CO₂, cenizas, importado. Gas: medias, muy gestionable, coste variable, CO₂, importado. Nuclear: casi nulas, estable pero poco flexible, inversión muy alta, residuos radiactivos, uranio importado. Eólica: nulas al funcionar, no gestionable, muy barata, palas por reciclar, autóctona. Solar: nulas, no gestionable (sí con baterías), la más barata, paneles por reciclar, autóctona."],
      ["Para obtener 1 kg de H₂ por electrólisis se necesitan unos 55 kWh. Una pila de combustible devuelve 18 kWh por kg. Calcula el rendimiento del ciclo y compáralo con una batería de litio (90 %). ¿Cuándo compensa el hidrógeno?", "Rendimiento = 18/55 = 33 %, mucho menor que el 90 % de una batería. Compensa cuando hay que almacenar energía durante meses o en grandes cantidades, o en usos que las baterías no cubren bien (acero, fertilizantes, barcos, aviones)."],
      ["En una tarde de invierno la demanda peninsular es de 38 GW, la eólica aporta 12 GW, la solar 0 GW, la nuclear 7 GW y la hidráulica 6 GW. ¿Cuánta potencia deben aportar otras fuentes? ¿Qué opciones hay?", "38 − (12 + 0 + 7 + 6) = 13 GW. Opciones: ciclos combinados de gas, bombeo, baterías, importación por interconexiones, gestión de la demanda o cogeneración."],
      ["Argumenta a favor y en contra de alargar la vida de las centrales nucleares españolas, usando datos del tema.", "A favor: aportan un 20 % de electricidad estable sin CO₂ y facilitan la transición mientras crecen almacenamiento y renovables. En contra: generan residuos de muy larga vida sin almacén definitivo, tienen riesgo de accidente, el uranio se importa, su inversión en seguridad es alta y su poca flexibilidad encaja mal con muchas renovables."],
      ["Diseña un plan para que tu instituto reduzca un 30 % sus emisiones por energía en cinco años, con al menos cuatro medidas cuantificadas.", "Ejemplo: autoconsumo fotovoltaico en la cubierta (−40 % de electricidad de red), cambio a LED (−50 % en iluminación), bomba de calor en lugar de caldera de gasóleo (−60 % emisiones de calefacción), aislamiento de ventanas y programación de horarios (−15 % de demanda térmica), campaña de apagado y de movilidad sostenible. Hay que medir el consumo inicial y seguirlo cada año."],
    ],
  },
  quiz: [
    ["Una fuente de energía no renovable es…", ["la eólica", "el gas natural", "la biomasa", "la geotérmica"], 1, "Se formó en millones de años."],
    ["Los combustibles fósiles aportan en el mundo alrededor de…", ["el 20 %", "el 50 %", "el 80 %", "el 100 %"], 2, "De la energía primaria."],
    ["El principal gas de efecto invernadero de la combustión es…", ["O₂", "CO₂", "N₂", "H₂"], 1, "Dióxido de carbono."],
    ["La mayoría de las centrales producen electricidad con…", ["pilas", "una turbina y un alternador", "placas solares", "baterías"], 1, "Inducción electromagnética."],
    ["La electricidad se transporta a alta tensión para…", ["que sea más peligrosa", "perder menos energía", "que llegue antes", "ahorrar cobre en casa"], 1, "Menor intensidad, menos calor."],
    ["En la fisión nuclear…", ["se unen núcleos ligeros", "se rompe un núcleo pesado", "se queman átomos", "se crea masa"], 1, "U-235 → dos fragmentos."],
    ["La energía nuclear procede de…", ["la combustión del uranio", "una pérdida de masa (E = mc²)", "el calor de la Tierra", "la luz"], 1, "Defecto de masa."],
    ["La fusión nuclear es la fuente de energía de…", ["las centrales españolas", "las estrellas", "los volcanes", "las baterías"], 1, "H → He en el Sol."],
    ["Las células fotovoltaicas suelen ser de…", ["cobre", "silicio", "uranio", "litio"], 1, "Un semiconductor."],
    ["Una fuente renovable y gestionable es…", ["la eólica", "la solar fotovoltaica", "la hidráulica", "las olas"], 2, "El agua se guarda en el embalse."],
    ["La primera fuente de electricidad en España en 2024 fue…", ["el carbón", "la eólica", "el petróleo", "la geotérmica"], 1, "Alrededor del 23 %."],
    ["El Acuerdo de París busca limitar el calentamiento a…", ["5 °C", "muy por debajo de 2 °C", "0 °C", "3 °C"], 1, "Y si es posible 1,5 °C."],
    ["El mayor almacén de electricidad actual son…", ["las pilas AA", "las centrales de bombeo", "los coches", "los condensadores"], 1, "Energía potencial del agua."],
    ["El hidrógeno verde se obtiene…", ["del gas natural", "por electrólisis con electricidad renovable", "de los volcanes", "del petróleo"], 1, "2 H₂O → 2 H₂ + O₂."],
    ["Una pila de combustible de hidrógeno emite…", ["CO₂", "agua", "humo", "residuos radiactivos"], 1, "H₂ + ½O₂ → H₂O."],
    ["Una bomba de calor con COP 3 da, por 1 kWh eléctrico…", ["1 kWh de calor", "3 kWh de calor", "0,3 kWh", "30 kWh"], 1, "Toma calor del ambiente."],
    ["La biomasa es renovable si…", ["se quema rápido", "se repone lo que se consume", "es de petróleo", "no emite nada"], 1, "Gestión sostenible."],
    ["La transición justa se ocupa de…", ["bajar el precio del petróleo", "los trabajadores y territorios afectados", "construir más térmicas", "importar carbón"], 1, "Que nadie quede atrás."],
    ["Los coches eléctricos aprovechan de la energía almacenada alrededor de…", ["25 %", "50 %", "85 %", "100 %"], 2, "Los de gasolina, un 25-30 %."],
    ["¿Cuál de estas fuentes no procede del Sol?", ["eólica", "geotérmica", "hidráulica", "biomasa"], 1, "Calor interno de la Tierra."],
  ],
  examen: [
    ["Una central de rendimiento 40 % que recibe 1000 MW térmicos produce…", ["400 MW eléctricos", "600 MW", "2500 MW", "40 MW"], 0, "0,4 · 1000."],
    ["La energía de 1 g de masa según E = mc² es…", ["9·10¹³ J", "3·10⁸ J", "9·10¹⁶ J", "1 J"], 0, "10⁻³ · 9·10¹⁶."],
    ["El combustible de la fusión más estudiado es…", ["uranio y plutonio", "deuterio y tritio", "carbono y oxígeno", "litio y cobalto"], 1, "Isótopos del hidrógeno."],
    ["España es casi una «isla eléctrica» porque…", ["no tiene centrales", "tiene pocas interconexiones con Europa", "no consume electricidad", "solo tiene solar"], 1, "Interconexión limitada con Francia."],
    ["Un inconveniente de la eólica es…", ["emite CO₂", "su variabilidad", "sus residuos radiactivos", "su alto rendimiento"], 1, "Depende del viento."],
    ["La neutralidad climática significa…", ["no usar energía", "emisiones netas cero", "solo nuclear", "más CO₂"], 1, "Lo emitido se compensa."],
    ["Un generador de 2 MW funcionando 3000 h equivalentes produce…", ["6000 MWh", "600 MWh", "1500 MWh", "2 MWh"], 0, "2 · 3000."],
    ["La gestión de la demanda consiste en…", ["consumir cuando sobra energía", "consumir más de noche siempre", "apagar la red", "importar gas"], 0, "Por ejemplo, cargar el coche al mediodía."],
  ],
  feynman: ["Por qué casi todas las fuentes de energía vienen del Sol", "Cómo funciona una central térmica", "Por qué un gramo de uranio da tanta energía", "Por qué las renovables necesitan almacenamiento", "Por qué el hidrógeno no es una fuente de energía", "Qué significa una transición energética justa"],
  mapa: ["FUENTES DE ENERGÍA", [["No renovables", "fósiles y nuclear"], ["Renovables", "solar, eólica, hidráulica…"], ["Electricidad", "centrales, red, mix"], ["Transición", "almacenamiento, H₂, justicia"]]],
  tarjetas: [
    ["Energía primaria", "La de la naturaleza sin transformar."],
    ["No renovable", "Limitada: carbón, petróleo, gas, uranio."],
    ["Renovable", "Se regenera: solar, eólica, hidráulica, biomasa."],
    ["Alternador", "Convierte el giro de la turbina en electricidad."],
    ["Fisión", "Núcleo pesado se rompe; reacción en cadena."],
    ["Fusión", "Núcleos ligeros se unen; energía de las estrellas."],
    ["E = m·c²", "Una masa pequeña equivale a mucha energía."],
    ["Fotovoltaica", "Luz → electricidad en células de silicio."],
    ["Gestionable", "Produce cuando se necesita: hidráulica, gas."],
    ["Mix eléctrico", "Reparto de fuentes en la electricidad de un país."],
    ["Hidrógeno verde", "H₂ por electrólisis con renovables; vector energético."],
    ["Transición energética", "De fósiles a renovables, eficiencia y electrificación."],
  ],
  glosario: [
    ["Fuente de energía", "Recurso natural del que se obtiene energía útil."],
    ["Energía final", "Energía que llega al consumidor, como la electricidad o la gasolina."],
    ["Combustible fósil", "Carbón, petróleo o gas formados a partir de restos de seres vivos."],
    ["Central térmica", "Instalación que produce electricidad a partir de calor y vapor."],
    ["Ciclo combinado", "Central de gas con dos turbinas, de gas y de vapor."],
    ["Turbina", "Rueda de álabes que gira al paso de un fluido."],
    ["Alternador", "Máquina que genera corriente alterna por inducción."],
    ["Fisión nuclear", "Rotura de un núcleo pesado que libera energía."],
    ["Fusión nuclear", "Unión de núcleos ligeros que libera energía."],
    ["Residuo radiactivo", "Material que emite radiación y debe aislarse durante mucho tiempo."],
    ["Aerogenerador", "Máquina que convierte la energía del viento en electricidad."],
    ["Autoconsumo", "Producción de electricidad para uso propio, como placas en un tejado."],
    ["Mix energético", "Combinación de fuentes de energía de un país."],
    ["Central de bombeo", "Central hidráulica que almacena energía subiendo agua."],
    ["Vector energético", "Sustancia o forma que almacena y transporta energía, como el hidrógeno."],
    ["Neutralidad climática", "Equilibrio entre las emisiones y la absorción de gases de efecto invernadero."],
  ],
  situacion: {
    titulo: "Un pueblo con energía 100 % renovable",
    reto: "El ayuntamiento de un municipio de 3000 habitantes quiere abastecerse de electricidad renovable en 2035. Vuestro equipo diseñará una propuesta realista con datos de consumo, recursos del territorio y almacenamiento.",
    pasos: [
      "Estimad el consumo eléctrico anual del municipio (hogares, servicios, alumbrado) y su variación entre día y noche y entre estaciones.",
      "Estudiad los recursos del territorio: horas de sol, viento medio, ríos o biomasa forestal, con datos del IDAE o de la AEMET.",
      "Proponed un mix renovable (autoconsumo en tejados, parque solar, aerogeneradores…) y calculad la energía que produciría.",
      "Diseñad el almacenamiento y la gestión de la demanda necesarios para cubrir las noches y los días sin viento.",
      "Valorad costes, impacto ambiental y paisajístico, empleo y la creación de una comunidad energética local.",
    ],
    producto: "Una propuesta técnica presentada al pleno municipal simulado, con cálculos, mapa del territorio y presupuesto aproximado.",
    evaluacion: ["El consumo y la producción se calculan con datos y unidades correctos.", "La propuesta resuelve la variabilidad con almacenamiento o fuentes gestionables.", "Se valoran impactos ambientales y sociales con rigor.", "La exposición es clara y convincente."],
  },
  familias: [
    "Consultad juntos en la web de Red Eléctrica de qué fuentes procede la electricidad ahora mismo.",
    "Mirad los precios horarios de la luz y buscad las horas más baratas para poner la lavadora.",
    "Hablad de qué ventajas e inconvenientes tendría instalar placas solares en vuestro edificio.",
    "Calculad cuánto CO₂ emite el coche familiar al año y qué parte se podría ahorrar con otros transportes.",
  ],
  saberes: "bloque «B. Un universo de materia y energía»: fuentes de energía renovables y no renovables, ventajas e inconvenientes; producción, transporte y distribución de la energía eléctrica; la energía nuclear de fisión y de fusión; el mix energético y la transición hacia un modelo sostenible (almacenamiento, hidrógeno, electrificación, eficiencia) en relación con el cambio climático y los ODS 7 y 13.",
  ideas: [
    "Seguimiento durante una semana de la generación eléctrica en tiempo real con los datos de Red Eléctrica (REData).",
    "Construcción de un pequeño aerogenerador o de una célula electrolítica para obtener hidrógeno.",
    "Debate por roles sobre el cierre de las centrales nucleares o la instalación de un parque solar.",
    "Visita virtual a una central (hidráulica, termosolar o nuclear) y análisis de sus impactos.",
  ],
  fuentes: [
    { t: "Red Eléctrica: datos del sistema eléctrico español (REData)", url: "https://www.ree.es/es/datos" },
    { t: "Ministerio para la Transición Ecológica: Plan Nacional Integrado de Energía y Clima", url: "https://www.miteco.gob.es/es/energia/estrategia-normativa/pniec-23-30.html" },
    { t: "Agencia Internacional de la Energía (AIE)", url: "https://www.iea.org/" },
  ],
});
