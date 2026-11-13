// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");

// Estratos horizontales: [color, grosor, etiqueta].
function estratos(x, y, w, capas) {
  let yy = y;
  return capas.map(([c, h, t]) => { const r = `<rect x="${x}" y="${yy}" width="${w}" height="${h}" fill="${c}"/>${t ? `<text x="${x + w + 8}" y="${yy + h / 2 + 4}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>` : ""}`; yy += h; return r; }).join("");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La historia de la Tierra",
  minutos: 110,
  objetivos: [
    "Comprender la magnitud del tiempo geológico y su división en eones, eras y periodos",
    "Distinguir catastrofismo y uniformismo",
    "Aplicar los principios de la estratigrafía para ordenar acontecimientos en un corte geológico",
    "Diferenciar la datación relativa y la absoluta y calcular edades con la vida media",
    "Explicar cómo se forman los fósiles y para qué sirven",
    "Describir los grandes acontecimientos geológicos y biológicos de cada era y las extinciones masivas",
  ],
  claves: ["tiempo geológico", "estrato", "superposición", "fósil guía", "datación radiométrica", "extinción masiva"],
  pregunta: {
    texto: "Si comprimes toda la historia de la Tierra en un solo año, ¿en qué momento aparecemos los seres humanos?",
    respuesta: "El <b>31 de diciembre a las 23:36</b>. Los dinosaurios se extinguen el 26 de diciembre y la vida tardó hasta finales de marzo en aparecer. La historia de la Tierra es tan larga (<mark>4 600 millones de años</mark>) que necesitamos una escala especial para entenderla.",
  },
  lectura: {
    titulo: "El acantilado que cuenta 50 millones de años",
    html: `<p>En la costa de Zumaia, en Gipuzkoa, el mar ha dejado al descubierto un acantilado formado por cientos de capas de roca inclinadas, como las hojas de un libro gigante puesto de canto. Los geólogos lo llaman <i>flysch</i>. Cada capa es un trozo de un antiguo fondo marino, y en conjunto guardan una historia casi continua de unos 50 millones de años.</p>
<p>En una de esas capas, una franja oscura de pocos centímetros marca un momento terrible: el final del Cretácico, hace 66 millones de años, cuando un asteroide de unos 10 km chocó contra la península de Yucatán. Por debajo de la franja abundan los ammonites; por encima, desaparecen para siempre. Es tan claro que Zumaia se ha elegido como «punto de referencia mundial» para definir el límite entre dos de los pisos geológicos del Paleoceno.</p>
<p>Las rocas son un archivo. Quien sabe leerlas puede reconstruir mares que ya no existen, montañas desaparecidas, climas helados y la aparición y la extinción de millones de especies. En este tema aprenderás las reglas para leer ese archivo y recorrerás los 4.600 millones de años de historia de nuestro planeta.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 La magnitud del tiempo geológico</h3><p>La Tierra se formó hace unos <mark>4.600 millones de años</mark>. Es una cifra tan grande que cuesta imaginarla, por eso los geólogos hablan de <b>tiempo profundo</b> y lo miden en millones de años (Ma) o miles de millones (Ga).</p><p>Una forma de entenderlo es comprimir toda la historia en <b>un año de calendario</b>. El 1 de enero se forma la Tierra; a finales de febrero aparecen las primeras bacterias; hasta noviembre casi todo son microorganismos; el 18 de noviembre se produce la explosión de vida del Cámbrico; los dinosaurios aparecen el 13 de diciembre y desaparecen el 26; los primeros homininos llegan el 31 de diciembre por la tarde y <mark>Homo sapiens aparece el 31 de diciembre a las 23:37</mark>. Toda la historia escrita, desde los sumerios hasta hoy, ocupa los últimos 30 segundos.</p><p>Esta enorme escala es clave para entender la geología: procesos que nos parecen lentísimos, como la erosión de un río (unos milímetros al año) o el movimiento de las placas (unos centímetros al año), pueden excavar cañones de kilómetros o abrir océanos si actúan durante millones de años. El Gran Cañón del Colorado tiene unos 1.800 metros de profundidad y se ha excavado en unos 5-6 millones de años.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barra del tiempo geológico: el Precámbrico ocupa casi todo y las tres eras finales un trozo pequeño">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="40" width="200" height="30" fill="var(--muted)" opacity=".6"/><rect x="214" y="40" width="18" height="30" fill="var(--pen)"/><rect x="232" y="40" width="9" height="30" fill="var(--leaf)"/><rect x="241" y="40" width="5" height="30" fill="var(--sun)"/>
        <g ${F} font-size="11" font-weight="700"><text x="114" y="60" text-anchor="middle" fill="#fff">Precámbrico</text><text x="14" y="90" fill="var(--muted)">4 600 Ma</text><text x="246" y="90" text-anchor="end" fill="var(--muted)">hoy</text></g>
        <g ${F} font-size="12" font-weight="700"><rect x="40" y="110" width="12" height="12" fill="var(--pen)"/><text x="58" y="121" fill="var(--ink)">Paleozoico</text><rect x="40" y="130" width="12" height="12" fill="var(--leaf)"/><text x="58" y="141" fill="var(--ink)">Mesozoico</text><rect x="40" y="150" width="12" height="12" fill="var(--sun)"/><text x="58" y="161" fill="var(--ink)">Cenozoico</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 La escala del tiempo geológico</h3><p>Para ordenar la historia de la Tierra, los geólogos la dividen en unidades de distinta duración, como los capítulos y apartados de un libro. De mayor a menor: <b>eones</b>, <b>eras</b>, <b>periodos</b> y épocas. Los límites entre ellas no son fechas redondas: se colocan donde hubo grandes cambios en el planeta o en la vida, como extinciones masivas o la aparición de grupos nuevos.</p><p>• El <mark>Precámbrico</mark> agrupa los tres primeros eones (Hádico, Arcaico y Proterozoico), desde la formación de la Tierra hasta hace 541 millones de años. Ocupa casi el <b>88 % de la historia</b> del planeta, pero tiene pocos fósiles porque casi toda la vida era microscópica y de cuerpo blando.<br>• El eón <b>Fanerozoico</b> («vida visible») empieza hace 541 Ma y se divide en tres eras:<br>– <b>Paleozoico</b> (541-252 Ma), la «vida antigua».<br>– <b>Mesozoico</b> (252-66 Ma), la «vida media», la era de los reptiles.<br>– <mark>Cenozoico</mark> (66 Ma-hoy), la «vida reciente», la era de los mamíferos.</p><p>Cada era se divide en periodos con nombres que suelen venir del lugar donde se estudiaron sus rocas: el Cámbrico (por Gales, en latín Cambria), el Jurásico (por los montes Jura) o el Pérmico (por Perm, en Rusia). La Comisión Internacional de Estratigrafía revisa y publica la escala oficial.</p>`,
      svg: L6.tabla("Escala del tiempo geológico: Precámbrico, Paleozoico, Mesozoico y Cenozoico", ["Era", "Desde", "Protagonistas"], [["Precámbrico", "4.600 Ma", "bacterias, algas"], ["Paleozoico", "541 Ma", "trilobites, peces"], ["Mesozoico", "252 Ma", "dinosaurios"], ["Cenozoico", "66 Ma", "mamíferos"]]),
    },
    {
      html: `<h3>1.3 Catastrofismo y uniformismo</h3><p>Durante siglos se pensó que la Tierra tenía solo unos pocos miles de años. Para explicar las montañas, los valles y los fósiles en tan poco tiempo, se recurría al <mark>catastrofismo</mark>: el relieve se habría formado por grandes catástrofes repentinas, como diluvios universales o terremotos gigantescos. Georges Cuvier lo defendió a principios del siglo XIX.</p><p>En 1785, el escocés <b>James Hutton</b> observó en la costa de Escocia capas de roca verticales cubiertas por otras horizontales, y comprendió que hacían falta tiempos inmensos para que unas rocas se formaran, se plegaran, se erosionaran y se cubrieran de nuevos sedimentos. Escribió que en la historia de la Tierra no encontraba «ni rastro de un principio ni perspectiva de un final». <b>Charles Lyell</b> desarrolló sus ideas en el <mark>uniformismo</mark> o actualismo: <b>los procesos geológicos que vemos hoy</b> (erosión, sedimentación, volcanes) <b>son los mismos que actuaron en el pasado</b>, y actuando durante mucho tiempo explican el relieve. Su lema: «el presente es la clave del pasado». Lyell influyó mucho en Darwin, que se llevó su libro al viaje del Beagle.</p><p>Hoy se acepta una visión mixta: la mayoría de los cambios son lentos y graduales, pero también ha habido <b>catástrofes reales</b>, como impactos de asteroides o erupciones gigantes, que cambiaron la historia de la vida.</p>`,
      svg: L6.compara("Catastrofismo frente a uniformismo", ["Catastrofismo", "var(--red)", ["Tierra joven", "cambios bruscos", "grandes catástrofes", "Cuvier"]], ["Uniformismo", "var(--leaf)", ["Tierra muy antigua", "procesos lentos", "los de hoy mismo", "Hutton y Lyell"]]),
    },
    {
      html: `<h3>2.1 Leer las rocas: los estratos</h3><p>Las <b>rocas sedimentarias</b> se forman por acumulación de sedimentos (arena, barro, restos de conchas) en el fondo de mares, lagos y ríos. Los sedimentos se depositan en capas horizontales que, al compactarse y cementarse, forman <mark>estratos</mark>. Cada estrato registra las condiciones del lugar mientras se formaba: una arenisca indica una playa o un río; una caliza con corales, un mar cálido y poco profundo; una arcilla negra, un fondo tranquilo y sin oxígeno.</p><p>La <b>estratigrafía</b> es la parte de la geología que estudia los estratos para reconstruir la historia de una zona. Su herramienta principal es el <mark>corte geológico</mark>, un dibujo de cómo son las rocas en profundidad, como si cortáramos el terreno con un cuchillo gigante. En él se representan los estratos con colores o tramas, y también las estructuras que los han deformado: los <b>pliegues</b> (ondulaciones de las capas), las <b>fallas</b> (fracturas con desplazamiento), las <b>intrusiones</b> de magma (diques y batolitos) y las superficies de erosión.</p><p>Leer un corte es como resolver un caso policial: hay que buscar pistas y ordenar los hechos. Los geólogos lo hacen en el campo, observando taludes, acantilados o barrancos, y con datos de sondeos. Los cortes son fundamentales para buscar agua subterránea, petróleo o minerales, y para construir túneles o presas de forma segura.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte geológico con estratos, una falla y un dique: abajo lo más antiguo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${estratos(20, 30, 160, [["var(--sun)", 26], ["var(--leaf)", 26], ["var(--water)", 26], ["var(--red)", 26], ["var(--muted)", 26]])}
        <path d="M120 30 L 100 160" stroke="var(--ink)" stroke-width="3"/><rect x="56" y="30" width="10" height="130" fill="var(--ink)" opacity=".7"/>
        <g ${F} font-size="11" font-weight="700"><text x="188" y="48" fill="var(--ink)">más moderno</text><text x="188" y="150" fill="var(--ink)">más antiguo</text><text x="124" y="174" fill="var(--ink)">falla</text><text x="36" y="174" fill="var(--ink)">dique</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.2 Los principios de la estratigrafía</h3><p>Para ordenar los acontecimientos de un corte geológico se aplican unos principios sencillos, formulados en parte por Nicolás Steno en 1669:</p><p>• <b>Superposición</b>: en una serie de estratos sin alterar, <mark>los de abajo son más antiguos</mark> que los de arriba.<br>• <b>Horizontalidad original</b>: los sedimentos se depositan horizontales; si los estratos están inclinados o plegados, se deformaron <b>después</b>.<br>• <b>Continuidad lateral</b>: un estrato tiene la misma edad en toda su extensión, aunque luego lo corte un valle.<br>• <b>Relaciones de corte</b> o intersección: <mark>todo lo que corta a algo es más moderno</mark> que lo cortado. Una falla o un dique de magma son posteriores a los estratos que atraviesan.<br>• <b>Inclusión</b>: si una roca contiene fragmentos de otra, los fragmentos son más antiguos.<br>• <b>Sucesión faunística</b>: los fósiles aparecen en un orden determinado y los estratos con los mismos fósiles tienen la misma edad.</p><p>Una <b>discordancia</b> es una superficie de erosión entre dos grupos de estratos; indica que durante un tiempo no hubo sedimentación, a menudo porque la zona se elevó, se plegó y se erosionó antes de volver a hundirse. Al interpretar un corte hay que tener cuidado con los pliegues tumbados, que pueden dar la vuelta a los estratos.</p>`,
      svg: L6.tabla("Principios de la estratigrafía y lo que indican", ["Principio", "Qué dice"], [["Superposición", "abajo = más antiguo"], ["Horizontalidad", "inclinado = deformado"], ["Relaciones de corte", "lo que corta, posterior"], ["Inclusión", "los fragmentos, anteriores"], ["Sucesión faunística", "mismos fósiles, misma edad"]]),
      video: { id: "3cdrFI86WbI", titulo: "Principios fundamentales de la geología y la estratigrafía", canal: "Geología activa", vistas: 58463 },
    },
    {
      html: `<h3>2.3 La datación relativa y los fósiles guía</h3><p>La <mark>datación relativa</mark> ordena los acontecimientos en el tiempo sin dar su edad en años: dice qué ocurrió antes y qué después, como decir que la Edad Media fue anterior al Renacimiento. Se basa en los principios de la estratigrafía y en los fósiles.</p><p>Los <mark>fósiles guía</mark> o característicos son los de especies que cumplen tres condiciones: vivieron <b>poco tiempo</b> geológico (así identifican un intervalo corto), tuvieron una <b>amplia distribución</b> geográfica (aparecen en muchos lugares del mundo) y fueron <b>abundantes</b> y fáciles de reconocer. Encontrar el mismo fósil guía en dos lugares permite <b>correlacionar</b> sus estratos: saber que tienen la misma edad aunque estén a miles de kilómetros.</p><p>Ejemplos: los <b>trilobites</b>, artrópodos marinos, caracterizan el Paleozoico; los <b>graptolites</b>, el Ordovícico y el Silúrico; los <b>ammonites</b>, moluscos de concha en espiral, el Mesozoico; los <b>nummulites</b>, protozoos con forma de moneda, el Paleógeno (Cenozoico). Hay especies concretas de ammonites que vivieron menos de un millón de años, lo que permite datar con mucha precisión.</p><p>Por el contrario, los <b>fósiles de facies</b>, como los corales, informan sobre el <b>ambiente</b> en el que se formó la roca (por ejemplo, mar cálido y somero), pero no sirven para datar, porque esos seres vivieron durante cientos de millones de años.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fósiles guía: trilobites del Paleozoico y ammonites del Mesozoico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="70" cy="80" rx="30" ry="42" fill="var(--muted)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M44 ${56 + i * 10} H 96" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M60 40 V 120 M80 40 V 120" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M190 80 m 0 0 ${Array.from({ length: 60 }, (_, i) => { const a = i * 0.32, r = 3 + i * 0.62; return `L ${(190 + r * Math.cos(a)).toFixed(1)} ${(80 + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="146" fill="var(--pen)">trilobites</text><text x="70" y="162" font-size="10" fill="var(--muted)">Paleozoico</text><text x="190" y="146" fill="var(--leaf)">ammonites</text><text x="190" y="162" font-size="10" fill="var(--muted)">Mesozoico</text></g>
      </svg>`,
    },
    {
      html: `<h3>2.4 La datación absoluta</h3><p>La <mark>datación absoluta</mark> calcula la edad de una roca o un fósil en años. El método más importante es la <b>datación radiométrica</b>, que se basa en los <b>isótopos radiactivos</b>: átomos inestables que se transforman de forma espontánea en otros, a un ritmo constante que no cambia con la temperatura ni la presión. Es como un reloj de arena natural.</p><p>Cada isótopo tiene su <mark>vida media</mark> (o periodo de semidesintegración): el tiempo que tarda en desintegrarse la mitad de los átomos. Tras una vida media queda 1/2 del isótopo original; tras dos, 1/4; tras tres, 1/8; y así sucesivamente. Midiendo en el laboratorio cuánto queda del isótopo original y cuánto se ha formado del producto, se calcula cuántas vidas medias han pasado.</p><p>• El <b>carbono-14</b> tiene una vida media de unos 5.730 años. Los seres vivos lo incorporan mientras viven y empieza a desintegrarse al morir. Sirve para datar <b>restos orgánicos</b> (huesos, madera, tejidos) de hasta unos 50.000 años: es muy útil en arqueología.<br>• El <b>uranio-238</b> (vida media de 4.500 millones de años) y el <b>potasio-40</b> (1.300 millones) sirven para datar rocas muy antiguas, sobre todo volcánicas.</p><p>Así se ha calculado la edad de la Tierra: los minerales más antiguos conocidos, unos circones de Australia, tienen unos 4.400 millones de años, y los meteoritos, unos 4.570 millones.</p>`,
      svg: L6.barras("Desintegración radiactiva: cantidad que queda tras cada vida media", [["0 vidas", 100, "100 %"], ["1 vida", 50, "50 %"], ["2 vidas", 25, "25 %"], ["3 vidas", 12.5, "12,5 %"], ["4 vidas", 6.25, "6,25 %"]], "Isótopo que queda", 100),
    },
    {
      html: `<h3>2.5 Los fósiles y cómo se forman</h3><p>Un <mark>fósil</mark> es un resto de un ser vivo o una señal de su actividad conservados en las rocas. Pueden ser partes duras (huesos, dientes, conchas, troncos), moldes o impresiones de su forma, o <b>icnofósiles</b>: huellas de pisadas, madrigueras, huevos o excrementos (coprolitos). En La Rioja y Soria hay miles de huellas de dinosaurios.</p><p>La <b>fosilización</b> es un proceso raro: la mayoría de los seres vivos se descomponen o son devorados sin dejar rastro. Para que se forme un fósil suele hacer falta:</p><p>1) Que el organismo <b>muera y quede enterrado rápidamente</b> por sedimentos finos (barro, ceniza volcánica), que lo protegen de los carroñeros y del oxígeno.<br>2) Que las partes blandas se descompongan y quede el esqueleto o la concha.<br>3) Que, a lo largo de miles o millones de años, el agua cargada de minerales sustituya poco a poco la materia original por minerales (<b>mineralización</b>), o disuelva el resto dejando un hueco con su forma (<b>molde</b>).<br>4) Que la roca salga a la superficie por erosión o movimientos de la corteza y alguien encuentre el fósil.</p><p>Hay casos excepcionales de conservación completa: insectos atrapados en <b>ámbar</b> (resina fosilizada, como los de Cantabria y Teruel), mamuts congelados en el hielo de Siberia o animales en asfalto. Los fósiles sirven para <b>datar</b> las rocas, reconstruir <b>ambientes y climas</b> antiguos y estudiar la <b>evolución</b>.</p>`,
      svg: L6.flujo("Pasos de la fosilización: muerte y enterramiento rápido, descomposición, mineralización y afloramiento", ["Muerte y enterramiento rápido en barro", "Se pierden las partes blandas", "Minerales sustituyen el hueso o la concha", "La erosión saca el fósil a la superficie"], "Cómo se forma un fósil"),
      video: { id: "87E8bQrX4Wg", titulo: "¿Cómo se forman los fósiles de dinosaurios?", canal: "Natural History Museum", vistas: 5235582 },
    },
    {
      html: `<h3>3.1 El Precámbrico</h3><p>El <mark>Precámbrico</mark> abarca desde la formación de la Tierra hasta hace 541 Ma. En él ocurrieron cambios decisivos:</p><p>• <b>Formación de la Tierra y la Luna</b> (hace 4.600-4.500 Ma). La Tierra se formó por acumulación de fragmentos que giraban alrededor del Sol. Era una bola fundida que se fue diferenciando en capas: los materiales densos (hierro) se hundieron y formaron el núcleo. La Luna se formó probablemente por el choque de un cuerpo del tamaño de Marte.<br>• <b>Corteza y océanos</b>. Al enfriarse se formó una corteza sólida, y el vapor de agua de los volcanes (y quizá de cometas) se condensó y formó los primeros océanos.<br>• <b>Primeras células</b> (hace unos 3.800 Ma): bacterias y arqueas.<br>• <b>La Gran Oxidación</b> (hace unos 2.400 Ma). Las cianobacterias llenaron de oxígeno el mar y la atmósfera. El hierro disuelto en el mar se oxidó y formó las rocas de hierro bandeado, la principal mena de hierro actual. Se formó la capa de ozono.<br>• <b>Eucariotas</b> (unos 2.000 Ma) y primeros pluricelulares.<br>• <b>Glaciaciones extremas</b>: hace unos 700 Ma la Tierra pudo quedar cubierta de hielo casi por completo («Tierra bola de nieve»).<br>• Al final, la <b>fauna de Ediacara</b>: los primeros animales grandes, de cuerpo blando, con forma de hojas o discos.</p>`,
      svg: L6.linea("Acontecimientos del Precámbrico: formación de la Tierra, primeras células, gran oxidación, eucariotas y fauna de Ediacara", [["4.600 Ma", "Tierra y Luna"], ["3.800 Ma", "primeras células"], ["2.400 Ma", "gran oxidación"], ["2.000 Ma", "eucariotas"], ["600 Ma", "fauna de Ediacara"]], "El Precámbrico"),
    },
    {
      html: `<h3>3.2 El Paleozoico</h3><p>El <mark>Paleozoico</mark> (541-252 Ma) comienza con la <b>explosión cámbrica</b>: en pocos millones de años aparecen casi todos los grupos de animales actuales, muchos con conchas y esqueletos que fosilizan bien. Los mares se llenan de <b>trilobites</b>, braquiópodos, esponjas y los primeros vertebrados, unos peces sin mandíbula.</p><p>Después llega la <b>conquista del medio terrestre</b>. Primero las plantas (hace unos 470 Ma), luego artrópodos como ciempiés y escorpiones. En el Devónico, la «era de los peces», aparecen los peces con mandíbulas y, de algunos peces con aletas carnosas, los primeros <b>anfibios</b>, que salen a tierra hace unos 370 Ma. En el <b>Carbonífero</b> se extienden enormes bosques pantanosos de helechos arborescentes y equisetos gigantes; sus restos, enterrados, formaron los grandes yacimientos de <b>carbón</b> (de ahí el nombre), como los de Asturias y León. El oxígeno abundante permitió insectos gigantes, como libélulas de 70 cm de envergadura. Aparecen los primeros <b>reptiles</b>, con huevos con cáscara que no dependen del agua.</p><p>En el plano geológico, los continentes se van uniendo hasta formar el supercontinente <b>Pangea</b>, y los choques levantan cordilleras como la <b>orogenia varisca</b> o herciniana, de la que proceden muchas rocas de la meseta ibérica. El Paleozoico acaba con la mayor extinción de la historia, al final del Pérmico.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seres típicos del Paleozoico: trilobites, pez acorazado y helecho gigante">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="90" width="120" height="80" fill="var(--water)" opacity=".3"/>
        <path d="M30 130 Q 50 110 80 126 L 96 116 V 140 L 80 132 Q 50 146 30 130 Z" fill="var(--pen)"/><circle cx="40" cy="126" r="2.5" fill="#fff"/>
        <path d="M190 160 V 60" stroke="var(--leaf)" stroke-width="5"/>${[70, 90, 110, 130].map((y) => `<path d="M190 ${y} q -30 -6 -44 6 M190 ${y} q 30 -6 44 6" fill="none" stroke="var(--leaf)" stroke-width="4"/>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="64" y="104" fill="var(--pen)">peces</text><text x="190" y="44" fill="var(--leaf)">helechos gigantes</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.3 El Mesozoico</h3><p>El <mark>Mesozoico</mark> (252-66 Ma) se divide en tres periodos: Triásico, Jurásico y Cretácico. Es la era de los <b>reptiles</b>: los <b>dinosaurios</b> dominan los continentes, los ictiosaurios y plesiosaurios los mares y los pterosaurios el aire. En los mares abundan los <b>ammonites</b> y los belemnites, que son fósiles guía.</p><p>Aparecen grupos que hoy son protagonistas: los primeros <b>mamíferos</b> (en el Triásico, pequeños y nocturnos), las <b>aves</b> (en el Jurásico, a partir de dinosaurios con plumas como <i>Archaeopteryx</i>) y las <b>plantas con flores</b> (angiospermas, en el Cretácico), que transformaron los paisajes y coevolucionaron con los insectos polinizadores. Antes dominaban las coníferas, los ginkgos y las cicas.</p><p>Geológicamente, <b>Pangea se fragmenta</b>: se abre el océano Atlántico y los continentes se separan hacia sus posiciones actuales. El clima era en general cálido, sin casquetes polares, y el nivel del mar alto: buena parte de la Península Ibérica estaba bajo mares poco profundos, donde se formaron muchas de las calizas actuales. En España hay yacimientos de dinosaurios muy importantes en Teruel, La Rioja, Cuenca (Las Hoyas, con aves primitivas) y Lleida.</p><p>El Mesozoico termina hace <mark>66 Ma</mark> con la extinción del Cretácico-Paleógeno, que acabó con los dinosaurios no avianos, los ammonites y los reptiles marinos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta de dinosaurio y de mamut, con un asteroide entre ambas eras">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 130 Q 40 120 60 112 L 72 70 Q 76 60 86 62 L 92 70 L 80 76 L 74 112 Q 90 112 100 124 L 96 150 H 88 L 86 132 H 62 L 58 150 H 50 L 48 134 Q 32 136 20 130 Z" fill="var(--leaf)"/>
        <circle cx="130" cy="40" r="10" fill="var(--red)"/><path d="M122 46 L 104 64 M126 50 L 112 66" stroke="var(--sun)" stroke-width="3"/>
        <path d="M160 140 V 100 Q 160 76 190 74 Q 222 74 226 96 L 236 112 Q 240 124 230 130 L 226 116 V 140 H 216 V 116 H 176 V 140 Z" fill="var(--sun)" opacity=".85"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="170" fill="var(--leaf)">Mesozoico</text><text x="198" y="170" fill="var(--sun)">Cenozoico</text><text x="130" y="84" fill="var(--red)">66 Ma</text></g>
      </svg>`,
    },
    {
      html: `<h3>3.4 El Cenozoico</h3><p>El <mark>Cenozoico</mark> (66 Ma-hoy) es la <b>era de los mamíferos</b>. Tras la desaparición de los grandes reptiles, los mamíferos se diversificaron rápidamente y ocuparon todos los ambientes: aparecen los primates, los caballos, las ballenas (a partir de mamíferos terrestres), los murciélagos y los grandes carnívoros. Las aves y las plantas con flor también se diversifican, y se extienden las praderas de hierbas.</p><p>Se divide en tres periodos: <b>Paleógeno</b>, <b>Neógeno</b> y <b>Cuaternario</b>. En lo geológico, la colisión de África e India con Eurasia levanta la <b>orogenia alpina</b>, que formó los Alpes, el Himalaya, los Pirineos y las cordilleras Béticas. La Península Ibérica toma su forma actual. Hace unos 6 Ma, el Mediterráneo quedó aislado del Atlántico y casi se secó (crisis salina del Messiniense); hace 5,3 Ma, el agua volvió a entrar por el estrecho de Gibraltar.</p><p>El clima se fue enfriando. En el <b>Cuaternario</b> (desde hace 2,6 Ma) se alternan <b>glaciaciones</b>, en las que los hielos cubrieron el norte de Europa y América y vivían mamuts y rinocerontes lanudos, con periodos interglaciares más cálidos, como el actual. En el Cuaternario aparece y se extiende el <b>género Homo</b>. Algunos científicos propusieron llamar <b>Antropoceno</b> a la etapa actual por el gran impacto de la humanidad sobre el planeta, aunque en 2024 la comisión oficial decidió no incluirlo en la escala.</p>`,
      svg: L6.capas("Periodos del Cenozoico: Cuaternario, Neógeno y Paleógeno", [["Cuaternario (2,6 Ma-hoy): glaciaciones, Homo", "var(--inf)", 1], ["Neógeno (23-2,6 Ma): homininos, Alpes", "var(--sun)", 1.4], ["Paleógeno (66-23 Ma): mamíferos, Pirineos", "var(--leaf)", 2]], "El Cenozoico"),
    },
    {
      html: `<h3>3.5 Las extinciones masivas</h3><p>Siempre se extinguen especies: es lo normal en la historia de la vida, y más del 99 % de las especies que han existido ya han desaparecido. Pero en algunos momentos desapareció una gran parte de las especies en poco tiempo geológico: son las <mark>extinciones masivas</mark>. Se reconocen cinco grandes:</p><p>1) Final del <b>Ordovícico</b> (445 Ma), por una glaciación.<br>2) Final del <b>Devónico</b> (372 Ma), con falta de oxígeno en los mares.<br>3) Final del <b>Pérmico</b> (252 Ma), <b>la mayor de todas</b>: desapareció en torno al 90 % de las especies marinas, incluidos los trilobites. Se relaciona con enormes erupciones volcánicas en Siberia que calentaron el clima y acidificaron los océanos.<br>4) Final del <b>Triásico</b> (201 Ma), también por vulcanismo, que dejó el camino libre a los dinosaurios.<br>5) Final del <b>Cretácico</b> (66 Ma), causada por el impacto de un asteroide de unos 10 km en <b>Chicxulub</b> (Yucatán, México). Pruebas: el cráter, de unos 180 km; una fina capa de arcilla rica en <b>iridio</b>, un metal raro en la corteza pero abundante en los asteroides, en todo el mundo; y cuarzo deformado por el impacto.</p><p>Tras cada extinción, los supervivientes se diversificaron y ocuparon los huecos libres. Muchos científicos hablan hoy de una <mark>sexta extinción</mark>, causada por las actividades humanas: destrucción de hábitats, cambio climático, especies invasoras y contaminación están haciendo desaparecer especies a un ritmo cientos de veces mayor del natural.</p>`,
      svg: L6.barras("Porcentaje aproximado de especies marinas extinguidas en las cinco grandes extinciones", [["Ordovícico", 85, "≈ 85 %"], ["Devónico", 75, "≈ 75 %"], ["Pérmico", 90, "≈ 90 %"], ["Triásico", 76, "≈ 76 %"], ["Cretácico", 75, "≈ 75 %"]], "Especies extinguidas (aprox.)", 100),
    },
  ],
  figura: {
    titulo: "Las eras y sus protagonistas",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Precámbrico, Paleozoico, Mesozoico y Cenozoico con su duración y seres típicos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Precámbrico", "4 600-541 Ma", "bacterias, oxígeno", "primeros animales", "var(--muted)"], ["Paleozoico", "541-252 Ma", "trilobites, peces", "anfibios, carbón", "var(--pen)"], ["Mesozoico", "252-66 Ma", "dinosaurios", "ammonites, aves", "var(--leaf)"], ["Cenozoico", "66 Ma-hoy", "mamíferos", "ser humano", "var(--sun)"]]
        .map(([n, t, a, b, c], i) => `<rect x="${16 + i * 154}" y="20" width="146" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${t}</text>
          <text x="${89 + i * 154}" y="136" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="156" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "XrA5qcs31iw", titulo: "Toda la evolución de la Tierra en solo 10 minutos", canal: "Qué pasaría si - What If Español", vistas: 5018247, megusta: 0, busqueda: "historia de la Tierra eras geológicas" },
  ejemplos: [
    { enunciado: "En un corte hay, de abajo arriba, los estratos A, B y C. Una falla corta A y B pero no C. Ordena los acontecimientos.", pasos: ["Por superposición: A es el más antiguo, después B y después C.", "La falla corta A y B, así que es posterior a ellos.", "C no está cortado: se depositó después de la falla."], resultado: "A → B → falla → C." },
    { enunciado: "Un estrato contiene trilobites y el de encima, ammonites. ¿A qué eras pertenecen y qué ocurrió entre ellos?", pasos: ["Los trilobites son fósiles guía del Paleozoico.", "Los ammonites lo son del Mesozoico.", "Entre las dos eras está la gran extinción del final del Pérmico, en la que desaparecieron los trilobites."], resultado: "El inferior es paleozoico y el superior mesozoico; entre ellos hubo la extinción del Pérmico." },
    { enunciado: "Si toda la historia de la Tierra (4.600 millones de años) se comprimiera en un día de 24 horas, ¿a qué hora aparecería Homo sapiens (hace 300.000 años)?", pasos: ["Un día tiene 86.400 segundos para 4.600 millones de años.", "Cada segundo equivale a unos 53.000 años.", "300.000 años / 53.000 ≈ 5,6 segundos antes de medianoche."], resultado: "A las 23:59:54, unos 6 segundos antes del final del día." },
    { enunciado: "Una roca volcánica tenía al formarse 80 g de un isótopo con vida media de 1.300 millones de años. Hoy quedan 20 g. ¿Qué edad tiene?", pasos: ["80 g → 40 g: una vida media.", "40 g → 20 g: dos vidas medias.", "Edad = 2 · 1.300 Ma.", "= 2.600 Ma."], resultado: "Unos 2.600 millones de años: es una roca del Precámbrico." },
    { enunciado: "Un hueso de un yacimiento conserva 1/8 del carbono-14 que tenía un ser vivo. ¿Cuántos años tiene? (vida media: 5.730 años)", pasos: ["1 → 1/2 → 1/4 → 1/8: han pasado tres vidas medias.", "Edad = 3 · 5.730 años.", "= 17.190 años."], resultado: "Unos 17.000 años: es de la última glaciación." },
    { enunciado: "En un corte hay, de abajo arriba: estratos 1, 2 y 3 plegados; encima, una superficie de erosión; encima, estratos 4 y 5 horizontales; un dique atraviesa del 1 al 4 pero no el 5. Ordena los hechos.", pasos: ["Sedimentación de 1, 2 y 3 (superposición).", "Plegamiento (horizontalidad original: se depositaron horizontales).", "Elevación y erosión: discordancia.", "Sedimentación de 4; intrusión del dique (corta hasta el 4); sedimentación de 5."], resultado: "1-2-3 → pliegue → erosión → 4 → dique → 5." },
  ],
  errores: [
    "Pensar que los humanos convivieron con los dinosaurios: los separan más de 60 millones de años.",
    "Creer que todos los seres vivos fosilizan: la fosilización es excepcional.",
    "Aplicar la superposición a estratos dados la vuelta por un pliegue sin tenerlo en cuenta.",
    "Confundir datación relativa (qué es más antiguo) con absoluta (cuántos años tiene).",
    "Decir que el Cenozoico es la era de los dinosaurios: es la de los mamíferos.",
    "Usar el carbono-14 para datar rocas de millones de años: solo sirve para restos orgánicos de hasta unos 50.000 años.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "¿Qué diferencia hay entre datación relativa y absoluta? Pon un método de cada una.", sol: "La relativa ordena los acontecimientos (qué ocurrió antes); por ejemplo, la superposición de estratos. La absoluta da la edad en años; por ejemplo, la desintegración de isótopos radiactivos." } },
    { nivel: "básico", ...{ q: "Enuncia el principio de superposición.", sol: "En una serie de estratos no alterada, cada estrato es más moderno que el que tiene debajo y más antiguo que el que tiene encima." } },
    { nivel: "básico", ...{ q: "¿Qué condiciones favorecen la fosilización?", sol: "Un enterramiento rápido en sedimentos finos, la ausencia de oxígeno y de carroñeros, y tener partes duras." } },
    { nivel: "básico", ...{ q: "¿Qué es un fósil guía? Pon dos ejemplos.", sol: "Un fósil de una especie que vivió poco tiempo y en zonas amplias, útil para datar estratos. Ejemplos: trilobites (Paleozoico) y ammonites (Mesozoico)." } },
    { nivel: "básico", ...{ q: "Ordena las eras: Mesozoico, Precámbrico, Cenozoico, Paleozoico.", sol: "Precámbrico, Paleozoico, Mesozoico y Cenozoico." } },
    { nivel: "básico", q: "¿Qué edad tiene la Tierra y cuál es el periodo más largo de su historia?", sol: "Unos 4.600 millones de años. El más largo es el Precámbrico, casi el 88 % del tiempo." },
    { nivel: "básico", q: "Explica el lema «el presente es la clave del pasado». ¿A qué teoría pertenece?", sol: "Que los procesos geológicos actuales (erosión, sedimentación, volcanes) son los mismos que actuaron en el pasado y sirven para interpretarlo. Es el uniformismo (Hutton y Lyell)." },
    { nivel: "básico", q: "¿Qué es un icnofósil? Pon dos ejemplos.", sol: "Una señal de la actividad de un ser vivo conservada en la roca. Ejemplos: huellas de dinosaurio y madrigueras (también huevos o coprolitos)." },
    { nivel: "básico", q: "Nombra un ser vivo característico de cada era del Fanerozoico.", sol: "Paleozoico: trilobites. Mesozoico: dinosaurios o ammonites. Cenozoico: mamíferos como el mamut." },
    { nivel: "básico", q: "¿Qué es la vida media de un isótopo?", sol: "El tiempo que tarda en desintegrarse la mitad de los átomos de una muestra de ese isótopo." },
    { nivel: "básico", q: "¿Por qué el Carbonífero se llama así?", sol: "Porque en él se formaron los grandes yacimientos de carbón, a partir de los restos de enormes bosques pantanosos." },
    { nivel: "básico", q: "¿Cuál fue la mayor extinción masiva y cuándo ocurrió?", sol: "La del final del Pérmico, hace 252 millones de años; desapareció en torno al 90 % de las especies marinas." },
    { nivel: "medio", ...{ q: "Un dique de roca volcánica atraviesa tres estratos. ¿Es más antiguo o más moderno que ellos?", sol: "Más moderno: para cortarlos, los estratos ya tenían que existir (principio de relaciones de corte)." } },
    { nivel: "medio", ...{ q: "¿Qué acontecimiento marca el final del Mesozoico y qué pruebas hay?", sol: "El impacto de un gran meteorito hace 66 millones de años. Pruebas: el cráter de Chicxulub y una capa rica en iridio (raro en la Tierra, común en meteoritos) en rocas de esa edad en todo el mundo." } },
    { nivel: "medio", ...{ q: "Explica la diferencia entre catastrofismo y uniformismo.", sol: "El catastrofismo atribuía el relieve a catástrofes repentinas. El uniformismo dice que los procesos actuales, lentos, actuaron igual en el pasado durante mucho tiempo." } },
    { nivel: "medio", ...{ q: "¿Por qué la aparición del oxígeno en la atmósfera fue tan importante?", sol: "Lo produjeron las cianobacterias por fotosíntesis; permitió la respiración aerobia, más eficaz, y la formación de la capa de ozono, que protegió la vida y le permitió salir a tierra firme." } },
    { nivel: "medio", ...{ q: "¿Qué es una discordancia y qué indica?", sol: "Una superficie de erosión entre dos grupos de estratos. Indica que durante un tiempo no hubo sedimentación o que se erosionaron capas antes de depositarse las nuevas." } },
    { nivel: "medio", q: "Diferencia entre fósil guía y fósil de facies. ¿Por qué los corales no sirven para datar?", sol: "El fósil guía indica una edad concreta (vivió poco tiempo y en muchos lugares). El de facies indica el ambiente de formación. Los corales han existido durante cientos de millones de años, así que no indican una edad, sino un mar cálido y poco profundo." },
    { nivel: "medio", q: "Un estrato tiene ammonites y otro, a 500 km, los mismos ammonites. ¿Qué puedes concluir?", sol: "Que ambos estratos tienen la misma edad (correlación), del Mesozoico, aunque estén lejos." },
    { nivel: "medio", q: "Una muestra conserva 1/4 de su uranio original (vida media 4.500 Ma). ¿Qué edad tiene? ¿Es posible?", sol: "Dos vidas medias: 9.000 Ma. No es posible para una roca terrestre, porque la Tierra tiene unos 4.600 Ma: habría un error en la medida o la roca no se formó con todo ese uranio." },
    { nivel: "medio", q: "¿Qué ocurrió en la Gran Oxidación y qué consecuencias tuvo?", sol: "Hace unos 2.400 Ma, el oxígeno producido por las cianobacterias se acumuló en mares y atmósfera. Se oxidó el hierro del mar (hierro bandeado), se formó la capa de ozono y se hizo posible la respiración aerobia." },
    { nivel: "medio", q: "Explica dos pruebas de que un asteroide causó la extinción del final del Cretácico.", sol: "El cráter de Chicxulub, de unos 180 km, de esa edad; y una capa de arcilla rica en iridio, metal abundante en asteroides, presente en todo el mundo en el límite Cretácico-Paleógeno (también cuarzo de impacto)." },
    { nivel: "avanzado", q: "Si la historia de la Tierra fuera un día de 24 horas, ¿a qué hora se extinguirían los dinosaurios (hace 66 Ma)?", sol: "Faltarían 66/4.600 · 24 h ≈ 0,34 h ≈ 21 minutos para medianoche: a las 23:39 aproximadamente." },
    { nivel: "avanzado", q: "Un fragmento de carbón vegetal de una cueva tiene 1/16 de su carbono-14. ¿Qué edad tiene? ¿Se podría datar así un hueso de dinosaurio?", sol: "4 vidas medias: 4 · 5.730 = 22.920 años. No: los dinosaurios tienen más de 66 Ma y no les queda carbono-14 medible; se datan con isótopos de vida media larga en rocas volcánicas cercanas." },
    { nivel: "avanzado", q: "Explica por qué hay tan pocos fósiles del Precámbrico, aunque fue la etapa más larga.", sol: "Porque casi toda la vida era microscópica y de cuerpo blando, que rara vez fosiliza; además, las rocas más antiguas han sufrido más metamorfismo, erosión y deformación, que destruyen los fósiles." },
    { nivel: "avanzado", q: "¿Por qué después de cada extinción masiva hay una gran diversificación de especies? Pon un ejemplo.", sol: "Porque quedan libres muchos nichos ecológicos y los supervivientes, sin competencia, se diversifican para ocuparlos. Tras la extinción del Cretácico, los mamíferos se diversificaron y ocuparon los papeles de los dinosaurios." },
    { nivel: "avanzado", q: "Interpreta: unos estratos marinos con fósiles de ammonites aparecen hoy a 2.000 m de altura en los Pirineos. ¿Qué historia cuentan?", sol: "Se formaron en un fondo marino durante el Mesozoico; después, en el Cenozoico, la orogenia alpina, por la colisión de Iberia con Europa, los plegó y los elevó hasta formar la cordillera." },
    { nivel: "avanzado", q: "¿Qué semejanzas y diferencias hay entre la extinción del final del Pérmico y la llamada sexta extinción?", sol: "Semejanzas: calentamiento climático, acidificación de los océanos y pérdida masiva de especies. Diferencias: la del Pérmico la causaron erupciones volcánicas a lo largo de miles de años; la sexta la causan las actividades humanas (hábitats, clima, invasoras, contaminación) en muy poco tiempo, y aún se puede frenar." },
    { nivel: "avanzado", q: "En un acantilado ves estratos de caliza con corales, encima areniscas con huellas de oleaje y encima arcillas rojas con huellas de dinosaurio. Reconstruye cómo cambió el ambiente.", sol: "Por superposición, de abajo arriba: primero un mar cálido y poco profundo (calizas con corales, fósiles de facies); después una costa o playa (areniscas con ondulaciones); por último tierra firme, con llanuras donde caminaban dinosaurios (arcillas rojas). El mar se retiró: bajó el nivel del mar o se elevó la zona. Por los dinosaurios, la última capa es del Mesozoico." },
    { nivel: "avanzado", q: "Diseña una actividad para representar la escala geológica en el patio con una cuerda de 46 metros.", sol: "Si 46 m son 4.600 Ma, 1 m son 100 Ma y 1 cm, 1 Ma. Se marcan: primeras células a 38 m del final; explosión cámbrica a 5,41 m del final; dinosaurios entre 2,3 m y 0,66 m del final; Homo sapiens a 3 mm del final. Se ve que casi toda la cuerda es Precámbrico." },
  ],
  quiz: [
    { q: "¿Qué edad tiene aproximadamente la Tierra?", o: ["6.000 años", "4.600 millones de años", "66 millones de años", "13.800 millones de años"], a: 1, e: "13.800 Ma es la edad del universo." },
    { q: "¿Qué parte de la historia de la Tierra ocupa el Precámbrico?", o: ["Alrededor del 10 %", "Alrededor del 50 %", "El 100 %", "Casi el 88 %"], a: 3, e: "Desde hace 4.600 hasta 541 Ma." },
    { q: "El uniformismo fue defendido por…", o: ["Hutton y Lyell", "Cuvier", "Darwin y Wallace", "Steno"], a: 0, e: "«El presente es la clave del pasado»." },
    { q: "Según la superposición, los estratos de abajo son…", o: ["más modernos", "de la misma edad", "más antiguos", "siempre volcánicos"], a: 2, e: "Si no se han volteado." },
    { q: "Una falla que corta unos estratos es…", o: ["más antigua que ellos", "de la misma edad", "más moderna que ellos", "imposible de datar"], a: 2, e: "Principio de relaciones de corte." },
    { q: "Si los estratos están inclinados es porque…", o: ["se deformaron después", "se depositaron así", "son volcánicos", "son muy jóvenes"], a: 0, e: "Principio de horizontalidad original." },
    { q: "Una discordancia indica…", o: ["una erupción", "un fósil guía", "un terremoto", "una interrupción con erosión"], a: 3, e: "Un tiempo sin sedimentación." },
    { q: "Un fósil guía debe…", o: ["ser grande", "haber vivido poco tiempo y en muchos lugares", "ser un dinosaurio", "estar en ámbar"], a: 1, e: "Permite datar y correlacionar." },
    { q: "Los trilobites caracterizan el…", o: ["Paleozoico", "Mesozoico", "Cenozoico", "Cuaternario"], a: 0, e: "Se extinguieron al final del Pérmico." },
    { q: "Los ammonites son fósiles guía del…", o: ["Precámbrico", "Paleozoico", "Mesozoico", "Cenozoico"], a: 2, e: "Desaparecieron hace 66 Ma." },
    { q: "Tras tres vidas medias queda…", o: ["1/3", "1/8", "1/6", "1/9"], a: 1, e: "1/2 · 1/2 · 1/2." },
    { q: "El carbono-14 sirve para datar…", o: ["rocas volcánicas antiguas", "meteoritos", "fósiles de dinosaurio", "restos orgánicos de hasta unos 50.000 años"], a: 3, e: "Vida media de 5.730 años." },
    { q: "Para fosilizar, un organismo necesita sobre todo…", o: ["mucho oxígeno", "estar al sol", "ser grande", "un enterramiento rápido"], a: 3, e: "Lo protege de carroñeros y descomposición." },
    { q: "Los insectos de Cantabria y Teruel se conservaron en…", o: ["hielo", "ámbar", "asfalto", "lava"], a: 1, e: "Resina fosilizada." },
    { q: "La Gran Oxidación la causaron…", o: ["los volcanes", "los dinosaurios", "las cianobacterias", "los meteoritos"], a: 2, e: "Por la fotosíntesis." },
    { q: "La explosión cámbrica ocurrió hace unos…", o: ["541 Ma", "66 Ma", "2.400 Ma", "10.000 años"], a: 0, e: "Inicio del Paleozoico." },
    { q: "Los grandes yacimientos de carbón se formaron en el…", o: ["Cámbrico", "Carbonífero", "Jurásico", "Cuaternario"], a: 1, e: "De bosques pantanosos." },
    { q: "Pangea se fragmentó en el…", o: ["Mesozoico", "Precámbrico", "Paleozoico", "Cuaternario"], a: 0, e: "Se abrió el Atlántico." },
    { q: "Los Pirineos se formaron en la orogenia…", o: ["varisca", "caledoniana", "cámbrica", "alpina"], a: 3, e: "En el Cenozoico." },
    { q: "La capa de iridio del límite Cretácico-Paleógeno es prueba de…", o: ["una glaciación", "la aparición de los humanos", "el impacto de un asteroide", "la Gran Oxidación"], a: 2, e: "El iridio abunda en los asteroides." },
  ],
  examen: [
    { q: "Una falla que corta varios estratos es…", o: ["más antigua que ellos", "más moderna que ellos", "de la misma edad", "anterior al primer estrato"], a: 1, e: "Relaciones de corte." },
    { q: "El carbono-14 sirve para datar…", o: ["restos orgánicos de hasta unos 50.000 años", "rocas de millones de años", "cualquier mineral", "meteoritos"], a: 0, e: "Su vida media es corta." },
    { q: "¿Qué causó probablemente la extinción de los dinosaurios?", o: ["Una glaciación", "Los seres humanos", "El impacto de un gran asteroide", "La falta de plantas con flor"], a: 2, e: "Chicxulub, hace 66 Ma." },
    { q: "El orden correcto de las eras es…", o: ["Paleozoico, Precámbrico, Mesozoico, Cenozoico", "Precámbrico, Paleozoico, Mesozoico, Cenozoico", "Precámbrico, Mesozoico, Paleozoico, Cenozoico", "Cenozoico, Mesozoico, Paleozoico, Precámbrico"], a: 1, e: "De más antigua a más moderna." },
    { q: "La datación relativa…", o: ["da la edad en años", "usa isótopos", "solo sirve para fósiles", "ordena los acontecimientos"], a: 3, e: "Qué fue antes y qué después." },
    { q: "Una roca que contiene la mitad de su isótopo original (vida media 700 Ma) tiene…", o: ["350 Ma", "1.400 Ma", "2.100 Ma", "700 Ma"], a: 3, e: "Una vida media." },
    { q: "Las primeras plantas con flores aparecieron en el…", o: ["Cámbrico", "Cretácico", "Carbonífero", "Cuaternario"], a: 1, e: "Mesozoico." },
    { q: "En el Cuaternario se alternan…", o: ["dinosaurios y ammonites", "trilobites y graptolites", "glaciaciones e interglaciares", "Pangea y Gondwana"], a: 2, e: "Y aparece el género Homo." },
  ],
  feynman: ["Por qué hace falta una escala especial para el tiempo geológico", "Los principios de superposición y de sucesión de acontecimientos", "La diferencia entre datación relativa y absoluta", "Un acontecimiento importante de cada era", "Qué es una extinción masiva"],
  mapa: mapa("HISTORIA DE LA TIERRA", "var(--eso)", [
    ["Tiempo geológico", "eones · eras · periodos", "var(--ink)"],
    ["Estratigrafía", "superposición · fallas", "var(--pen)"],
    ["Datación", "fósiles guía · radiactividad", "var(--red)"],
    ["Eras", "Precámbrico → Cenozoico", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Principio de superposición", "En una serie de estratos sin alterar, los inferiores son más antiguos que los superiores."],
    ["Las tres eras del Fanerozoico", "Paleozoico, Mesozoico y Cenozoico."],
    ["¿Qué es un fósil guía?", "Un fósil de una especie de corta duración y amplia distribución que permite datar estratos."],
    ["¿Qué mide la datación radiométrica?", "La edad absoluta, a partir de la desintegración de isótopos radiactivos."],
    ["¿Cuándo se extinguieron los dinosaurios?", "Hace 66 millones de años, al final del Mesozoico."],
    ["Uniformismo", "Los procesos geológicos actuales son los mismos que actuaron en el pasado."],
    ["Principio de relaciones de corte", "Lo que corta (falla, dique) es más moderno que lo cortado."],
    ["Extinción masiva", "Desaparición de una gran parte de las especies en poco tiempo geológico."],
    ["Vida media", "Tiempo en que se desintegra la mitad de un isótopo radiactivo."],
    ["Discordancia", "Superficie de erosión entre dos grupos de estratos: indica una interrupción."],
    ["Gran Oxidación", "Acumulación de oxígeno por las cianobacterias hace unos 2.400 Ma."],
    ["Chicxulub", "Cráter de Yucatán del asteroide que causó la extinción de hace 66 Ma."],
  ],
  glosario: [
    ["Tiempo geológico", "Escala de millones de años con que se mide la historia de la Tierra."],
    ["Eón, era y periodo", "Divisiones del tiempo geológico, de mayor a menor."],
    ["Catastrofismo", "Idea de que el relieve se formó por catástrofes repentinas."],
    ["Uniformismo", "Los procesos actuales explican el pasado actuando durante mucho tiempo."],
    ["Estrato", "Capa de roca sedimentaria."],
    ["Estratigrafía", "Estudio de los estratos para reconstruir la historia."],
    ["Corte geológico", "Dibujo de la disposición de las rocas en profundidad."],
    ["Superposición", "Principio: los estratos inferiores son más antiguos."],
    ["Relaciones de corte", "Principio: lo que corta a algo es posterior."],
    ["Discordancia", "Superficie de erosión entre estratos."],
    ["Fósil guía", "Fósil de especie de vida corta y amplia distribución, útil para datar."],
    ["Datación relativa", "Ordenación de hechos sin edad en años."],
    ["Datación absoluta", "Cálculo de la edad en años, sobre todo con isótopos."],
    ["Vida media", "Tiempo en que se desintegra la mitad de un isótopo."],
    ["Fosilización", "Proceso por el que los restos se conservan en las rocas."],
    ["Icnofósil", "Huella o señal fósil de actividad: pisadas, madrigueras."],
    ["Pangea", "Supercontinente que unió casi todas las tierras a finales del Paleozoico."],
    ["Extinción masiva", "Desaparición de gran parte de las especies en poco tiempo geológico."],
  ],
  situacion: {
    titulo: "Geólogos de nuestra comarca",
    reto: "La oficina de turismo quiere una ruta geológica para familias. Vuestro equipo elegirá un afloramiento de rocas cercano (o uno conocido de vuestra comunidad, a partir de fotos), interpretará su historia con los principios de la estratigrafía y diseñará un panel explicativo y una línea del tiempo a escala.",
    pasos: [
      "Elegid el afloramiento y fotografiadlo o buscad imágenes y el mapa geológico (IGME) de la zona.",
      "Dibujad un corte geológico sencillo e identificad estratos, pliegues, fallas, discordancias o fósiles.",
      "Ordenad los acontecimientos con los principios de superposición, horizontalidad y relaciones de corte, y situadlos en una era.",
      "Construid una línea del tiempo de la historia de la Tierra a escala (por ejemplo, una cuerda de 46 m) y marcad en ella la edad de vuestras rocas.",
      "Diseñad el panel para familias con una pregunta inicial, el corte, la historia en cinco pasos y una curiosidad.",
    ],
    producto: "Corte geológico interpretado, línea del tiempo a escala y panel para la ruta.",
    evaluacion: [
      "Aplicación correcta de los principios de la estratigrafía.",
      "Uso de la escala del tiempo geológico y cálculos de escala.",
      "Calidad y claridad del panel para un público no experto.",
      "Uso de fuentes fiables (mapas geológicos, museos) y trabajo en equipo.",
    ],
  },
  familias: ["Haced en casa la «historia de la Tierra en un año» con un calendario y marcad los grandes momentos.", "En una excursión, buscad un talud o acantilado con capas y pensad cuál es la más antigua.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de «La Tierra y su historia» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): tiempo geológico, principios de la estratigrafía, datación relativa y absoluta, fósiles y grandes acontecimientos geológicos y biológicos. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Línea del tiempo a escala con una cuerda en el patio.",
      "Interpretación de cortes geológicos con plantillas de dificultad creciente.",
      "Simulación de la desintegración radiactiva con monedas o dados.",
      "Salida a un afloramiento cercano o uso del visor de mapas geológicos del IGME.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Escala temporal geológica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica" },
    { t: "Datación radiométrica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dataci%C3%B3n_radiom%C3%A9trica" },
  ],
  revisado: "2026-11-13",
};
