// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Hueso largo: epífisis, diáfisis con cavidad medular y cartílago articular.
const huesoLargo = B.lienzo("Hueso largo con epífisis, diáfisis, cavidad medular, cartílago articular y periostio", `
  <ellipse cx="78" cy="44" rx="44" ry="22" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
  <ellipse cx="78" cy="152" rx="44" ry="20" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
  <rect x="60" y="58" width="36" height="84" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
  <rect x="70" y="62" width="16" height="76" fill="var(--sun)" fill-opacity=".45"/>
  <path d="M38 36 q40 -24 80 0" fill="none" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/>
  ${B.tx(196, 40, "cartílago articular", { fs: 10.5, maxW: 112, bold: true, color: "var(--leaf)" })}
  ${B.tx(196, 64, "epífisis (esponjoso)", { fs: 10.5, maxW: 112, bold: true, color: "var(--pen)" })}
  ${B.tx(196, 98, "diáfisis (compacto)", { fs: 10.5, maxW: 112, bold: true, color: "var(--pen)" })}
  ${B.tx(196, 122, "cavidad medular", { fs: 10.5, maxW: 112, bold: true, color: "var(--sun)" })}
  ${B.tx(196, 146, "periostio alrededor", { fs: 10.5, maxW: 112, color: "var(--muted)" })}
  <path d="M96 100 H 136 M86 120 H 136" stroke="var(--muted)" stroke-width="1"/>`, "");

// Sarcómero relajado y contraído.
const sarcomero = B.lienzo("Sarcómero relajado y contraído: los filamentos de actina se deslizan sobre la miosina y las líneas Z se acercan", `
  ${[[44, 210, "relajado"], [104, 160, "contraído"]].map(([y, ancho, t], k) => {
    const x0 = 130 - ancho / 2, x1 = 130 + ancho / 2, d = k ? 30 : 56;
    return `<path d="M${x0} ${y - 20} V ${y + 20} M${x1} ${y - 20} V ${y + 20}" stroke="var(--ink)" stroke-width="3"/>
      ${[-12, 0, 12].map((o) => `<path d="M${x0} ${y + o} H ${130 - (k ? 6 : 26)} M${x1} ${y + o} H ${130 + (k ? 6 : 26)}" stroke="var(--pen)" stroke-width="2.5"/>`).join("")}
      ${[-6, 6].map((o) => `<path d="M${130 - d} ${y + o} H ${130 + d}" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>`).join("")}
      ${B.tx(130, y + 36, t, { fs: 11, maxW: 100, bold: true })}`;
  }).join("")}
  ${B.tx(30, 22, "Z", { fs: 12, maxW: 14, bold: true })}${B.tx(232, 22, "Z", { fs: 12, maxW: 14, bold: true })}
  ${B.tx(130, 172, "actina (azul) · miosina (roja)", { fs: 10, maxW: 220, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "El aparato locomotor",
  minutos: 120,
  objetivos: [
    "Describir la estructura del tejido óseo y de un hueso largo, y las funciones del esqueleto",
    "Identificar los principales huesos y las regiones del esqueleto axial y apendicular",
    "Clasificar las articulaciones y relacionar el tipo de articulación sinovial con los movimientos que permite",
    "Explicar la estructura del músculo esquelético y el mecanismo de la contracción",
    "Relacionar los músculos principales con sus acciones y aplicar estos conocimientos a la prevención de lesiones",
  ],
  claves: ["osteona", "hueso largo", "esqueleto axial", "esqueleto apendicular", "articulación sinovial", "cartílago articular", "flexión", "abducción", "sarcómero", "actina", "miosina", "agonista", "antagonista"],
  pregunta: {
    texto: "El fémur de un adulto soporta compresiones de varias toneladas y, sin embargo, pesa menos de medio kilo. ¿Cómo puede un hueso ser a la vez tan ligero y tan resistente?",
    respuesta: "Por su <mark>arquitectura</mark> y su material. El hueso es un material compuesto: fibras de <b>colágeno</b> (que aportan tenacidad) impregnadas de cristales de <b>fosfato cálcico</b> (que aportan dureza). Además, la diáfisis es un <b>tubo hueco</b> y los extremos tienen hueso esponjoso con trabéculas orientadas según las líneas de fuerza, como las vigas de una grúa.",
  },
  lectura: {
    titulo: "Un esqueleto que se reconstruye",
    html: `<p>Solemos imaginar el esqueleto como algo inerte, el armazón blanco y seco de las clases de ciencias. Nada más lejos de la realidad. El hueso vivo es rosado, está atravesado por vasos y nervios y se renueva sin parar: cada año sustituimos cerca del 10 % de nuestro esqueleto. Unas células lo destruyen y otras lo vuelven a construir, y el resultado se adapta a lo que hacemos con él.</p>
    <p>Los tenistas profesionales tienen los huesos del brazo con el que golpean más gruesos que los del otro. Los astronautas, en cambio, pierden masa ósea en pocos meses de ingravidez porque sus piernas ya no tienen que soportar su peso. El músculo funciona igual: crece cuando se le exige y se atrofia cuando se le olvida.</p>
    <p>Huesos, articulaciones y músculos forman el <b>aparato locomotor</b>, la máquina que nos permite andar, saltar, escribir, tocar un instrumento o bailar. En este tema descubrirás cómo está construida, cómo se mueve cada articulación y qué ocurre dentro de una fibra muscular cuando decides moverte.</p>`,
  },
  secciones: [4, 4, 5],
  bloques: [
    {
      h: "Funciones del esqueleto y tejido óseo",
      html: `<p>El aparato locomotor tiene una parte <b>pasiva</b>, el sistema esquelético (huesos, cartílagos y ligamentos), y una parte <b>activa</b>, el sistema muscular. El esqueleto cumple varias funciones:</p>
      <ul><li><b>Sostén</b>: es el armazón que da forma al cuerpo.</li><li><b>Protección</b> de órganos delicados: cráneo, caja torácica, columna, pelvis.</li><li><b>Movimiento</b>: los huesos actúan como palancas movidas por los músculos.</li><li><b>Reserva de minerales</b>: almacena el 99 % del calcio del cuerpo.</li><li><b>Hematopoyesis</b>: la <b>médula ósea roja</b> fabrica las células de la sangre.</li></ul>
      <p>El <b>tejido óseo</b> es un tejido conectivo con una matriz formada en un tercio por materia orgánica (sobre todo <b>colágeno</b>, que le da flexibilidad) y en dos tercios por sales minerales de <b>fosfato cálcico</b> (que le dan dureza). Sus células son los <b>osteoblastos</b>, que fabrican matriz nueva; los <b>osteocitos</b>, osteoblastos que han quedado atrapados en la matriz y la mantienen; y los <b>osteoclastos</b>, que la destruyen. El equilibrio entre construcción y destrucción se llama <mark>remodelación ósea</mark> y depende de la alimentación (calcio, vitamina D, proteínas), de las hormonas y de las cargas mecánicas: el ejercicio de impacto estimula a los osteoblastos.</p>`,
      svg: B.cajas("Células del tejido óseo y su función", [["Osteoblastos", "construyen|matriz nueva"], ["Osteocitos", "mantienen|el hueso"], ["Osteoclastos", "destruyen|y reciclan"], ["Matriz", "colágeno +|fosfato cálcico"]], { t: "Tejido óseo" }),
    },
    {
      h: "Estructura del hueso",
      html: `<p>El tejido óseo se organiza de dos maneras:</p>
      <ul><li><b>Hueso compacto</b>: denso y sin huecos visibles. Está formado por <b>osteonas</b>, cilindros de láminas concéntricas alrededor de un conducto central (de Havers) por el que pasan vasos y nervios. Forma la capa externa de todos los huesos.</li>
      <li><b>Hueso esponjoso</b>: formado por una red de laminillas o <b>trabéculas</b>, con huecos ocupados por médula ósea roja. Es ligero y está en el interior de los huesos cortos y planos y en los extremos de los largos.</li></ul>
      <p>Según su forma, los huesos son <b>largos</b> (fémur, húmero, falanges), <b>cortos</b> (huesos del carpo y del tarso), <b>planos</b> (huesos del cráneo, escápula, esternón) e <b>irregulares</b> (vértebras). Un hueso largo tiene una parte central o <b>diáfisis</b>, de hueso compacto, con una <b>cavidad medular</b> que en el adulto contiene médula amarilla (grasa), y dos extremos o <b>epífisis</b>, de hueso esponjoso, cubiertos por <b>cartílago articular</b>. Todo el hueso, salvo las superficies articulares, está envuelto por el <b>periostio</b>, una membrana con vasos y células que permite que el hueso crezca en grosor y que se repare tras una fractura.</p>
      <p>Durante la infancia y la adolescencia, entre la diáfisis y la epífisis hay un <b>cartílago de crecimiento</b> (placa epifisaria) que permite que el hueso crezca en longitud. Al terminar el desarrollo, hacia los 18-21 años, se osifica.</p>`,
      svg: huesoLargo,
    },
    {
      h: "El esqueleto axial",
      html: `<p>El esqueleto adulto tiene unos <b>206 huesos</b> y se divide en dos partes. El <b>esqueleto axial</b> forma el eje del cuerpo:</p>
      <ul><li><b>Cráneo</b>: los huesos del neurocráneo (frontal, dos parietales, dos temporales, occipital, esfenoides y etmoides) protegen el encéfalo; los de la cara (maxilares, mandíbula, nasales, cigomáticos…) forman las cavidades de los sentidos y la boca. La <b>mandíbula</b> es el único hueso móvil del cráneo.</li>
      <li><b>Columna vertebral</b>: 33 o 34 vértebras: 7 <b>cervicales</b>, 12 <b>dorsales</b> o torácicas, 5 <b>lumbares</b>, 5 sacras soldadas (<b>sacro</b>) y 4 o 5 coxígeas (<b>cóccix</b>). Entre las vértebras móviles hay <b>discos intervertebrales</b> de cartílago fibroso que amortiguan. Vista de perfil, tiene cuatro <mark>curvaturas</mark>: lordosis cervical y lumbar (cóncavas hacia atrás) y cifosis dorsal y sacra (convexas hacia atrás). Estas curvas multiplican su resistencia y su capacidad de amortiguar.</li>
      <li><b>Caja torácica</b>: el <b>esternón</b> y 12 pares de <b>costillas</b> (7 verdaderas, que se unen al esternón con su propio cartílago; 3 falsas, que se unen a través del cartílago de otra costilla; y 2 flotantes). Protege corazón y pulmones y se mueve al respirar.</li></ul>
      <p>La columna sostiene el tronco y la cabeza, protege la médula espinal y permite flexionar, extender, inclinar y rotar el tronco. Las lumbares son las vértebras más grandes porque soportan más peso.</p>`,
      svg: B.barras("Número de vértebras en cada región de la columna", [["Cervicales", 7], ["Dorsales", 12], ["Lumbares", 5], ["Sacras", 5], ["Coxígeas", 4]], { t: "Vértebras por región" }),
    },
    {
      h: "El esqueleto apendicular",
      html: `<p>El <b>esqueleto apendicular</b> forma las extremidades y las cinturas que las unen al tronco.</p>
      <table class="tb"><tr><th>Región</th><th>Extremidad superior</th><th>Extremidad inferior</th></tr>
      <tr><td>Cintura</td><td>escápula (omóplato) y clavícula</td><td>coxal (ilion, isquion y pubis); los dos coxales y el sacro forman la pelvis</td></tr>
      <tr><td>Segmento proximal</td><td>húmero (brazo)</td><td>fémur (muslo), el hueso más largo</td></tr>
      <tr><td>Articulación intermedia</td><td>codo</td><td>rodilla, con la rótula</td></tr>
      <tr><td>Segmento medio</td><td>cúbito (medial) y radio (lateral) en el antebrazo</td><td>tibia (medial) y peroné (lateral) en la pierna</td></tr>
      <tr><td>Extremo</td><td>8 carpianos, 5 metacarpianos y 14 falanges</td><td>7 tarsianos (astrágalo, calcáneo…), 5 metatarsianos y 14 falanges</td></tr></table>
      <p>Las dos extremidades tienen el mismo plan, pero se han especializado. La cintura escapular es muy móvil, porque la escápula «flota» sobre el tórax sujeta por músculos: el hombro es la articulación con más movilidad, pero también la que más se luxa. La cintura pélvica, en cambio, es un anillo sólido que transmite el peso del tronco a las piernas. El pie forma una <b>bóveda plantar</b> con arcos que amortiguan y reparten el peso entre el talón y la parte anterior.</p>`,
      svg: B.comparar("Cintura escapular frente a cintura pélvica", ["Escapular", ["escápula + clavícula", "muy móvil", "unida por músculos", "hombro inestable"]], ["Pélvica", ["coxales + sacro", "anillo sólido", "soporta el peso", "cadera estable"]]),
      video: { id: "vD02JhfsMQU", titulo: "El APARATO LOCOMOTOR explicado: sus partes y funcionamiento", canal: "Astraway", vistas: 343340 },
    },
    {
      h: "Las articulaciones y su clasificación",
      html: `<p>Una <b>articulación</b> es la zona de unión entre dos o más huesos. Se clasifican por su movilidad (y por el tejido que las une):</p>
      <ul><li><b>Sinartrosis</b> o articulaciones fijas: unidas por tejido fibroso, sin movimiento. Son las <b>suturas</b> del cráneo. En el recién nacido están abiertas (las fontanelas) para permitir el parto y el crecimiento del cerebro.</li>
      <li><b>Anfiartrosis</b> o semimóviles: unidas por cartílago, con poco movimiento. Las articulaciones entre los cuerpos de las vértebras (con el disco) y la sínfisis del pubis. Cada una se mueve poco, pero la suma de todas da a la columna mucha movilidad.</li>
      <li><b>Diartrosis</b> o móviles: las <b>articulaciones sinoviales</b>, como la rodilla, el hombro o los dedos. Son las que más interesan para el movimiento.</li></ul>
      <p>La estabilidad y la movilidad de una articulación están en tensión: cuanto más móvil, menos estable. La estabilidad depende de la forma de las superficies óseas (la cadera, con una cabeza encajada en una cavidad profunda, es muy estable), de los <b>ligamentos</b> y de los <b>músculos</b> que la rodean. Por eso fortalecer la musculatura alrededor de una articulación es una de las mejores formas de prevenir lesiones.</p>`,
      svg: B.flujo("Clasificación de las articulaciones por su movilidad", ["Sinartrosis: fijas (suturas)", "Anfiartrosis: semimóviles (vértebras)", "Diartrosis: móviles (rodilla)"], { t: "Tipos de articulación" }),
      video: { id: "_uWDgycsnls", titulo: "Clasificación de articulaciones", canal: "leonardo coscarelli", vistas: 1065900 },
    },
    {
      h: "La articulación sinovial",
      html: `<p>Todas las articulaciones sinoviales comparten una misma estructura:</p>
      <ul><li><b>Superficies articulares</b> cubiertas de <b>cartílago hialino</b>, liso y deslizante, que reduce el rozamiento y amortigua.</li>
      <li><b>Cápsula articular</b>: un manguito de tejido fibroso que envuelve la articulación y la cierra.</li>
      <li><b>Membrana sinovial</b>: tapiza el interior de la cápsula y produce el <b>líquido sinovial</b>, que lubrica y nutre el cartílago. El rozamiento entre dos cartílagos lubricados es menor que el del hielo sobre hielo.</li>
      <li><b>Ligamentos</b>: refuerzan la cápsula por fuera o por dentro (ligamentos cruzados de la rodilla).</li>
      <li>Estructuras accesorias: <b>meniscos</b> (discos de fibrocartílago que mejoran el ajuste, en la rodilla), <b>rodetes</b> (anillos que profundizan la cavidad, en el hombro y la cadera) y <b>bolsas sinoviales</b> que facilitan el deslizamiento de los tendones.</li></ul>
      <p>El cartílago no tiene vasos: se nutre del líquido sinovial, que entra y sale de él como de una esponja con la carga y la descarga. Por eso el <mark>movimiento</mark> es imprescindible para mantenerlo sano, y la inmovilidad prolongada lo deteriora. Con la edad o el exceso de carga, el cartílago se desgasta y aparece la <b>artrosis</b>.</p>`,
      svg: B.capas("Estructura de una articulación sinovial de fuera hacia dentro", [["Ligamentos", "refuerzan"], ["Cápsula", "envuelve y cierra"], ["Sinovial", "produce líquido"], ["Líquido", "lubrica y nutre"], ["Cartílago", "liso y amortigua"]], { t: "Articulación sinovial" }),
    },
    {
      h: "Tipos de articulaciones sinoviales",
      html: `<p>Según la forma de sus superficies, las articulaciones sinoviales permiten movimientos en uno, dos o tres ejes:</p>
      <table class="tb"><tr><th>Tipo</th><th>Forma</th><th>Ejes</th><th>Ejemplo</th></tr>
      <tr><td><b>Esférica</b> (enartrosis)</td><td>cabeza redonda en una cavidad</td><td>3</td><td>hombro, cadera</td></tr>
      <tr><td><b>Condílea</b></td><td>superficie ovalada</td><td>2</td><td>muñeca (radiocarpiana), nudillos</td></tr>
      <tr><td><b>En silla de montar</b></td><td>dos superficies cóncavo-convexas</td><td>2</td><td>base del pulgar</td></tr>
      <tr><td><b>Troclear</b> (bisagra)</td><td>polea</td><td>1</td><td>codo (húmero-cúbito), dedos, tobillo</td></tr>
      <tr><td><b>Trocoide</b> (pivote)</td><td>cilindro en un anillo</td><td>1</td><td>atlas-axis (girar la cabeza), radio-cúbito</td></tr>
      <tr><td><b>Plana</b> (artrodia)</td><td>superficies planas</td><td>deslizamientos</td><td>entre huesos del carpo</td></tr></table>
      <p>La <b>rodilla</b> se describe a menudo como una bisagra modificada: hace sobre todo flexión y extensión, pero con la rodilla doblada permite una pequeña rotación. Es la articulación más grande del cuerpo y una de las que más se lesionan en el deporte, porque soporta grandes cargas con superficies que encajan poco: su estabilidad depende de los meniscos, los ligamentos cruzados y colaterales y el cuádriceps.</p>`,
      svg: B.rejilla("Tipos de articulación sinovial, número de ejes y ejemplo", ["Tipo", "Ejes", "Ejemplo"], [["Esférica", "3", "hombro"], ["Condílea", "2", "muñeca"], ["Silla", "2", "pulgar"], ["Troclear", "1", "codo"], ["Trocoide", "1", "atlas-axis"]], { t: "Articulaciones sinoviales" }),
    },
    {
      h: "Los movimientos articulares",
      html: `<p>Los movimientos se describen desde la posición anatómica y por parejas opuestas:</p>
      <ul><li><b>Flexión</b> y <b>extensión</b> (plano sagital): disminuir o aumentar el ángulo entre dos segmentos. Doblar y estirar el codo. Si la extensión sobrepasa la posición anatómica se habla de <b>hiperextensión</b>.</li>
      <li><b>Abducción</b> y <b>aducción</b> (plano frontal): alejar o acercar un segmento a la línea media. Separar los brazos en cruz.</li>
      <li><b>Rotación</b> interna (medial) y externa (lateral) (plano transversal): girar un segmento alrededor de su eje longitudinal.</li>
      <li><b>Circunducción</b>: combinación de los anteriores que dibuja un cono; solo en las articulaciones de dos o tres ejes (molinillos con los brazos).</li>
      <li>Movimientos especiales: <b>pronación</b> y <b>supinación</b> del antebrazo (girar la palma hacia abajo o hacia arriba); <b>flexión dorsal</b> y <b>flexión plantar</b> del tobillo (subir la punta o ponerse de puntillas); <b>inversión</b> y <b>eversión</b> del pie (planta hacia dentro o hacia fuera); <b>elevación</b> y <b>depresión</b> de la escápula.</li></ul>
      <p>La <b>amplitud de movimiento</b> de una articulación se mide en grados con un goniómetro. Depende de la forma de los huesos, de la elasticidad de músculos y ligamentos y del entrenamiento: bailarines y gimnastas tienen amplitudes muy superiores a la media gracias al trabajo de flexibilidad. Una movilidad excesiva sin control muscular, en cambio, aumenta el riesgo de luxaciones.</p>`,
      svg: B.cajas("Parejas de movimientos articulares", [["Flexión", "↔ extensión|plano sagital"], ["Abducción", "↔ aducción|plano frontal"], ["Rotación", "interna ↔ externa|plano transversal"], ["Pronación", "↔ supinación|antebrazo"]], { t: "Movimientos" }),
    },
    {
      h: "El músculo esquelético: estructura",
      html: `<p>El cuerpo tiene unos <b>650 músculos esqueléticos</b>, que suponen alrededor del 40 % de la masa corporal. Cada músculo está organizado como un cable formado por cables cada vez más finos:</p>
      <ol><li>El <b>músculo</b> está envuelto por una capa de tejido conjuntivo (epimisio) que se prolonga en el <b>tendón</b>.</li>
      <li>Dentro hay <b>fascículos</b>, haces de fibras rodeados de perimisio.</li>
      <li>Cada fascículo contiene <b>fibras musculares</b>: células larguísimas (hasta varios centímetros) con muchos núcleos y abundantes mitocondrias.</li>
      <li>Cada fibra está llena de <b>miofibrillas</b>, formadas por la repetición de unidades llamadas <b>sarcómeros</b>.</li>
      <li>Cada sarcómero contiene filamentos finos de <b>actina</b> y gruesos de <b>miosina</b> ordenados entre dos <b>líneas Z</b>. Su alternancia produce las estrías que se ven al microscopio.</li></ol>
      <p>Todo músculo tiene un <b>origen</b>, su inserción más fija (normalmente la proximal), y una <b>inserción</b>, en el hueso que se mueve. Entre ellos está el <b>vientre muscular</b>. Las fibras pueden ser <b>lentas</b> (tipo I: rojas, con muchas mitocondrias y mioglobina, resistentes a la fatiga, propias de los fondistas) o <b>rápidas</b> (tipo II: blancas, más potentes pero que se fatigan antes, predominantes en los velocistas). La proporción depende de la genética y, en parte, del entrenamiento.</p>`,
      svg: B.flujo("Organización del músculo de lo grande a lo pequeño", ["Músculo y tendón", "Fascículo", "Fibra muscular (célula)", "Miofibrilla", "Sarcómero: actina y miosina"], { t: "Del músculo al sarcómero" }),
      video: { id: "UDISMhgtry8", titulo: "El SISTEMA MUSCULAR explicado: cómo funciona y los músculos principales", canal: "Astraway", vistas: 795018 },
    },
    {
      h: "La contracción muscular",
      html: `<p>La contracción empieza en el sistema nervioso. Una <b>motoneurona</b> lleva el impulso hasta el músculo; en la <b>placa motora</b> (la sinapsis entre nervio y músculo) libera el neurotransmisor <b>acetilcolina</b>, que provoca un impulso eléctrico en la membrana de la fibra. Este impulso hace que el retículo sarcoplásmico libere <b>iones de calcio</b> dentro de la fibra.</p>
      <p>El calcio deja libres los puntos de unión de la actina. Entonces las «cabezas» de la miosina se enganchan a la actina, tiran de ella hacia el centro del sarcómero, se sueltan y vuelven a engancharse más adelante, como un equipo de remeros. Cada ciclo consume una molécula de <b>ATP</b>. Los filamentos no se acortan: <mark>se deslizan unos sobre otros</mark> y las líneas Z se acercan. Es la <b>teoría del deslizamiento de los filamentos</b>.</p>
      <p>Cuando cesa el impulso, el calcio se bombea de vuelta (también con gasto de ATP) y el músculo se relaja. Sin ATP las cabezas de miosina no pueden soltarse: por eso, tras la muerte, los músculos quedan rígidos (rigor mortis).</p>
      <p>Una motoneurona y todas las fibras que controla forman una <b>unidad motora</b>. Los músculos de movimientos finos (los de los ojos o los dedos de un violinista) tienen unidades motoras pequeñas; los de grandes esfuerzos (cuádriceps), unidades de cientos de fibras. Para hacer más fuerza, el sistema nervioso activa más unidades motoras y con mayor frecuencia.</p>`,
      svg: sarcomero,
      video: { id: "GxVCIzHS4jY", titulo: "Contracción Muscular - Ciclo de Puentes Cruzados", canal: "Alila Medical Media en Español", vistas: 722829 },
    },
    {
      h: "Tipos de contracción y acción de los músculos",
      html: `<p>Según cambie o no la longitud del músculo, la contracción puede ser:</p>
      <ul><li><b>Isométrica</b>: el músculo genera tensión sin cambiar de longitud ni producir movimiento. Mantener una plancha o empujar una pared.</li>
      <li><b>Concéntrica</b>: el músculo se acorta mientras vence una resistencia. Subir en una sentadilla (cuádriceps) o flexionar el codo con una mancuerna (bíceps).</li>
      <li><b>Excéntrica</b>: el músculo se alarga mientras frena una resistencia. Bajar despacio en una sentadilla o en una escalera. Es la que permite hacer más fuerza y la que más agujetas y lesiones produce si no se está entrenado.</li></ul>
      <p>Los músculos solo pueden tirar, nunca empujar. Por eso trabajan en equipo:</p>
      <ul><li><b>Agonista</b>: el principal responsable del movimiento.</li>
      <li><b>Antagonista</b>: el que realiza el movimiento contrario; debe relajarse para permitirlo y lo frena al final.</li>
      <li><b>Sinergistas</b>: ayudan al agonista.</li>
      <li><b>Fijadores</b> o estabilizadores: sujetan el hueso de origen para que el movimiento sea eficaz (la musculatura del tronco o <i>core</i>).</li></ul>
      <p>En la flexión del codo, el bíceps braquial es el agonista y el tríceps braquial, el antagonista; en la extensión, los papeles se invierten. Un desequilibrio de fuerza entre agonistas y antagonistas favorece las lesiones.</p>`,
      svg: B.comparar("Agonista y antagonista en la flexión del codo", ["Agonista", ["bíceps braquial", "se contrae", "concéntrica", "flexiona el codo"]], ["Antagonista", ["tríceps braquial", "se relaja", "frena al final", "extendería el codo"]]),
    },
    {
      h: "Los principales músculos del cuerpo",
      html: `<p>Conocer los grandes músculos ayuda a entender cualquier movimiento y a diseñar ejercicios:</p>
      <table class="tb"><tr><th>Región</th><th>Músculo</th><th>Acción principal</th></tr>
      <tr><td>Cabeza y cuello</td><td>maseteros; esternocleidomastoideo</td><td>cerrar la mandíbula; girar y flexionar la cabeza</td></tr>
      <tr><td>Tronco anterior</td><td>pectoral mayor; recto del abdomen; oblicuos; transverso</td><td>aducir el brazo; flexionar el tronco; rotarlo; compactar el abdomen</td></tr>
      <tr><td>Tronco posterior</td><td>trapecio; dorsal ancho; erectores de la columna</td><td>mover la escápula; tirar del brazo hacia abajo y atrás; extender la columna</td></tr>
      <tr><td>Hombro y brazo</td><td>deltoides; bíceps; tríceps</td><td>abducir el brazo; flexionar el codo; extenderlo</td></tr>
      <tr><td>Cadera y muslo</td><td>glúteo mayor; psoasilíaco; cuádriceps; isquiotibiales; aductores</td><td>extender la cadera; flexionarla; extender la rodilla; flexionarla; juntar las piernas</td></tr>
      <tr><td>Pierna</td><td>gemelos y sóleo (tríceps sural); tibial anterior</td><td>flexión plantar (ponerse de puntillas); flexión dorsal</td></tr></table>
      <p>El <b>diafragma</b> es el músculo principal de la respiración. Los músculos profundos del tronco (transverso del abdomen, multífidos, suelo pélvico) forman una «faja natural» que estabiliza la columna: su debilidad está relacionada con el dolor lumbar.</p>`,
      svg: B.cajas("Músculos principales por regiones", [["Tronco", "pectoral · recto|dorsal · trapecio"], ["Brazo", "deltoides|bíceps · tríceps"], ["Muslo", "cuádriceps|isquiotibiales"], ["Pierna", "gemelos · sóleo|tibial anterior"]], { t: "Mapa muscular" }),
    },
    {
      h: "Salud y lesiones del aparato locomotor",
      html: `<p>Las lesiones del aparato locomotor son las más frecuentes en el deporte, la danza y muchas profesiones:</p>
      <ul><li><b>Fracturas</b>: roturas del hueso. El periostio y la médula forman un callo que la repara en semanas, si los fragmentos se inmovilizan bien alineados.</li>
      <li><b>Esguinces</b>: distensión o rotura de ligamentos por un movimiento forzado (el tobillo que se «tuerce» hacia dentro). <b>Luxaciones</b>: los huesos pierden el contacto (hombro).</li>
      <li><b>Roturas fibrilares</b> («tirones»): desgarro de fibras musculares en una contracción brusca, frecuentes en isquiotibiales y gemelos. <b>Contracturas</b>: contracción mantenida y dolorosa.</li>
      <li><b>Tendinopatías</b>: lesiones por sobrecarga de los tendones (rotuliano, de Aquiles).</li>
      <li>Problemas posturales de la columna: <b>escoliosis</b> (desviación lateral), <b>hipercifosis</b> (espalda encorvada) e <b>hiperlordosis</b> (curva lumbar excesiva).</li>
      <li><b>Osteoporosis</b>: pérdida de masa ósea que hace el hueso frágil. El pico de masa ósea se alcanza hacia los 25-30 años: lo que se construye en la adolescencia es una «hucha» para toda la vida.</li></ul>
      <p>La prevención se basa en el calentamiento, el aumento <mark>progresivo</mark> de las cargas, el equilibrio entre grupos musculares, la técnica correcta, el descanso y una alimentación con suficiente calcio, vitamina D y proteínas. Ante una lesión aguda se aplica protección, reposo relativo, frío y compresión en las primeras horas, y se consulta a un profesional.</p>`,
      svg: B.rejilla("Lesiones frecuentes del aparato locomotor y estructura afectada", ["Lesión", "Estructura"], [["Fractura", "hueso"], ["Esguince", "ligamento"], ["Rotura fibrilar", "músculo"], ["Tendinopatía", "tendón"], ["Artrosis", "cartílago"]], { t: "Lesiones frecuentes" }),
    },
  ],
  figura: {
    titulo: "El aparato locomotor en cuatro ideas",
    items: [["Hueso", "206", "colágeno +", "fosfato cálcico"], ["Articulación", "sinovial", "cartílago, cápsula", "y líquido sinovial"], ["Músculo", "actina·miosina", "los filamentos", "se deslizan"], ["Acción", "ago. ↔ anta.", "los músculos", "solo tiran"]],
  },
  video: { id: "GHLYSYRQ7RI", titulo: "El CUERPO HUMANO, los huesos y músculos (para estudiar)", canal: "Astraway", vistas: 250476 },
  quiz: [
    ["¿Qué componente da dureza al hueso?", ["El colágeno", "El fosfato cálcico", "La médula amarilla", "El periostio"], 1, "El colágeno aporta flexibilidad y tenacidad."],
    ["Las células que destruyen la matriz ósea son los…", ["osteoblastos", "osteocitos", "osteoclastos", "condrocitos"], 2, "Su equilibrio con los osteoblastos es la remodelación."],
    ["La parte central de un hueso largo se llama…", ["epífisis", "diáfisis", "periostio", "trabécula"], 1, "Las epífisis son los extremos."],
    ["La médula ósea roja se encarga de…", ["almacenar grasa", "fabricar células sanguíneas", "producir líquido sinovial", "unir huesos"], 1, "Es la hematopoyesis."],
    ["El crecimiento en longitud de los huesos se produce en…", ["el periostio", "el cartílago de crecimiento", "la cavidad medular", "el cartílago articular"], 1, "La placa epifisaria se osifica al acabar el desarrollo."],
    ["¿Cuántas vértebras lumbares tiene la columna?", ["7", "12", "5", "4"], 2, "7 cervicales, 12 dorsales y 5 lumbares."],
    ["Las curvaturas cervical y lumbar se llaman…", ["cifosis", "lordosis", "escoliosis", "sínfisis"], 1, "La dorsal y la sacra son cifosis."],
    ["El hueso del muslo es el…", ["húmero", "fémur", "peroné", "cúbito"], 1, "Es el más largo del cuerpo."],
    ["En el antebrazo, el hueso lateral (lado del pulgar) es el…", ["cúbito", "radio", "húmero", "peroné"], 1, "El cúbito es medial."],
    ["Las suturas del cráneo son articulaciones…", ["diartrosis", "anfiartrosis", "sinartrosis", "sinoviales"], 2, "Fijas, unidas por tejido fibroso."],
    ["El líquido sinovial lo produce…", ["el cartílago", "la membrana sinovial", "el ligamento", "el menisco"], 1, "Lubrica y nutre el cartílago."],
    ["La cadera es una articulación…", ["troclear", "esférica", "trocoide", "plana"], 1, "Permite movimientos en tres ejes."],
    ["El codo (húmero-cúbito) es una articulación…", ["esférica", "en silla de montar", "troclear", "condílea"], 2, "Bisagra: un solo eje."],
    ["Separar el brazo del cuerpo en cruz es una…", ["flexión", "abducción", "aducción", "rotación"], 1, "Alejar de la línea media en el plano frontal."],
    ["Girar la palma de la mano hacia abajo es la…", ["supinación", "pronación", "eversión", "inversión"], 1, "La supinación la gira hacia arriba."],
    ["La unidad contráctil de la miofibrilla es el…", ["fascículo", "sarcómero", "tendón", "epimisio"], 1, "Entre dos líneas Z."],
    ["El ion que desencadena la unión actina-miosina es el…", ["sodio", "potasio", "calcio", "hierro"], 2, "Se libera del retículo sarcoplásmico."],
    ["Bajar despacio en una sentadilla es una contracción ______ del cuádriceps.", ["concéntrica", "excéntrica", "isométrica", "refleja"], 1, "El músculo se alarga frenando la carga."],
    ["En la flexión del codo, el tríceps actúa como…", ["agonista", "antagonista", "sinergista", "fijador"], 1, "Realiza el movimiento contrario."],
    ["Ponerse de puntillas lo hacen principalmente…", ["el tibial anterior", "los gemelos y el sóleo", "los isquiotibiales", "los aductores"], 1, "Flexión plantar del tobillo."],
  ],
  examen: [
    ["¿Por qué la diáfisis de un hueso largo es hueca?", ["Para almacenar calcio", "Porque un tubo resiste casi igual con mucho menos peso", "Para que crezca", "Porque no tiene células"], 1, "La resistencia a la flexión depende sobre todo del material alejado del eje."],
    ["Un astronauta pierde masa ósea en el espacio porque…", ["no come calcio", "faltan cargas mecánicas sobre el esqueleto", "la radiación destruye el hueso", "no duerme"], 1, "Sin carga, predominan los osteoclastos."],
    ["Una articulación con tres ejes de movimiento es…", ["la rodilla", "el hombro", "el codo", "el tobillo"], 1, "Esférica: flexión, abducción y rotación."],
    ["El cartílago articular se deteriora con la inmovilidad porque…", ["se calcifica", "se nutre del líquido sinovial que circula con el movimiento", "pierde vasos", "se infecta"], 1, "No tiene vasos propios."],
    ["Si una motoneurona controla 10 fibras, su unidad motora es propia de…", ["el cuádriceps", "los músculos de los dedos u ojos", "los gemelos", "el glúteo mayor"], 1, "Unidades pequeñas para movimientos finos."],
    ["Durante la contracción, ¿qué se acorta?", ["Los filamentos de actina", "Los filamentos de miosina", "El sarcómero, por deslizamiento", "Nada"], 2, "Los filamentos se deslizan y las líneas Z se acercan."],
    ["Mantener una plancha abdominal es una contracción…", ["isométrica", "concéntrica", "excéntrica", "isotónica excéntrica"], 0, "Tensión sin cambio de longitud."],
    ["Un jugador sufre un «tirón» en la parte posterior del muslo al esprintar. El músculo lesionado es…", ["el cuádriceps", "los isquiotibiales", "el psoas", "el tibial anterior"], 1, "Rotura fibrilar típica de los isquiotibiales."],
  ],
  feynman: ["Por qué el hueso es un tejido vivo que se remodela", "Qué partes tiene un hueso largo y para qué sirve cada una", "Cómo está construida una articulación sinovial", "Qué movimientos permite cada tipo de articulación sinovial", "Cómo se produce la contracción en el sarcómero", "Qué diferencia hay entre contracción concéntrica, excéntrica e isométrica"],
  mapa: ["APARATO LOCOMOTOR", [["Huesos", "compacto · esponjoso · 206"], ["Articulaciones", "sinartrosis · anfiartrosis · sinoviales"], ["Músculos", "fibra · sarcómero · actina-miosina"], ["Movimiento", "agonista · antagonista · tipos"]]],
  tarjetas: [
    ["Funciones del esqueleto", "Sostén, protección, movimiento, reserva de calcio y hematopoyesis."],
    ["Remodelación ósea", "Osteoblastos construyen y osteoclastos destruyen; el ejercicio la estimula."],
    ["Hueso largo", "Diáfisis compacta con cavidad medular y epífisis esponjosas con cartílago."],
    ["Columna", "7 cervicales, 12 dorsales, 5 lumbares, sacro y cóccix; 4 curvas."],
    ["Cinturas", "Escapular: móvil. Pélvica: anillo sólido que soporta el peso."],
    ["Articulación sinovial", "Cartílago, cápsula, membrana y líquido sinovial, ligamentos."],
    ["Esférica y troclear", "Esférica: 3 ejes (hombro, cadera). Troclear: 1 eje (codo)."],
    ["Pronación y supinación", "Palma hacia abajo y hacia arriba con el antebrazo."],
    ["Sarcómero", "Unidad contráctil: actina y miosina entre dos líneas Z."],
    ["Deslizamiento", "Calcio + ATP: la miosina tira de la actina y el sarcómero se acorta."],
    ["Tipos de contracción", "Concéntrica (se acorta), excéntrica (se alarga), isométrica (igual)."],
    ["Agonista y antagonista", "El que hace el movimiento y el que hace el contrario."],
  ],
  ejemplos: [
    ["Analiza la fase de subida de una sentadilla con barra: articulaciones, movimientos, músculos agonistas y tipo de contracción.", ["Articulaciones: cadera, rodilla y tobillo.", "Movimientos: extensión de cadera, extensión de rodilla y flexión plantar del tobillo (plano sagital).", "Agonistas: glúteo mayor e isquiotibiales (cadera), cuádriceps (rodilla), gemelos y sóleo (tobillo).", "Tipo: contracción concéntrica; el core trabaja en isométrico como fijador."], "Es un ejercicio multiarticular en el plano sagital con contracción concéntrica de los extensores."],
    ["Una persona adulta de 65 kg tiene unos 1000 g de calcio en el cuerpo. Si el 99 % está en el esqueleto, ¿cuánto calcio hay en los huesos y cuánto en el resto?", ["Calcio en huesos: 0,99 · 1000 = 990 g.", "Calcio fuera de los huesos: 1000 − 990 = 10 g.", "Esos 10 g (en sangre y células) son imprescindibles para la contracción y la coagulación; si faltan, el cuerpo los toma de los huesos."], "990 g en el esqueleto y 10 g en el resto: el hueso es la reserva de calcio."],
    ["Clasifica el hombro, la rodilla, la articulación atlas-axis y las suturas del cráneo, e indica sus ejes de movimiento.", ["Hombro: sinovial esférica, 3 ejes.", "Rodilla: sinovial troclear modificada, 1 eje principal (con algo de rotación en flexión).", "Atlas-axis: sinovial trocoide, 1 eje (rotación).", "Suturas: sinartrosis, sin movimiento."], "De más a menos movilidad: hombro, rodilla y atlas-axis, suturas."],
    ["Al levantar una mochila del suelo y subirla al hombro con un brazo, el codo pasa de extendido a flexionado. Indica agonista, antagonista y tipo de contracción. ¿Y al bajarla despacio?", ["Subida: flexión de codo; agonista el bíceps braquial (con el braquial), antagonista el tríceps; contracción concéntrica del bíceps.", "Bajada lenta: extensión de codo, pero la hace la gravedad.", "El bíceps frena la bajada alargándose: contracción excéntrica del bíceps."], "Subir: bíceps concéntrico. Bajar despacio: bíceps excéntrico (no trabaja el tríceps)."],
    ["Un sarcómero mide 2,5 µm en reposo y 2,0 µm contraído. Una miofibrilla de 4 cm tiene sarcómeros en serie. ¿Cuántos sarcómeros tiene y cuánto se acorta?", ["Número: 40 000 µm / 2,5 µm = 16 000 sarcómeros.", "Acortamiento de cada uno: 0,5 µm.", "Total: 16 000 · 0,5 = 8000 µm = 0,8 cm (20 %)."], "16 000 sarcómeros; la miofibrilla se acorta 0,8 cm, un 20 % de su longitud."],
    ["Una velocista y una corredora de maratón se hacen una biopsia muscular. ¿Qué tipo de fibras predominará en cada una y por qué?", ["La velocista necesita fuerza y velocidad en pocos segundos: fibras rápidas (tipo II), potentes y glucolíticas.", "La maratoniana necesita resistencia durante horas: fibras lentas (tipo I), con muchas mitocondrias, mioglobina y capilares.", "La proporción depende en gran parte de la genética y se modifica algo con el entrenamiento."], "Velocista: fibras tipo II; maratoniana: fibras tipo I."],
  ],
  errores: [
    "Pensar que el hueso es un tejido muerto que no cambia: se remodela continuamente.",
    "Decir que los músculos «empujan»: solo tiran; el movimiento contrario lo hace el antagonista o la gravedad.",
    "Creer que en la contracción se acortan los filamentos: se deslizan unos sobre otros.",
    "Confundir cúbito y radio o tibia y peroné: el radio está del lado del pulgar y la tibia, en el lado medial y es la que soporta el peso.",
    "Pensar que al bajar una carga trabaja el antagonista: suele ser el agonista en contracción excéntrica.",
    "Confundir esguince (ligamento) con tirón o rotura fibrilar (músculo).",
  ],
  ejercicios: {
    b: [
      ["Cita cinco funciones del esqueleto.", "Sostén, protección, movimiento (palancas), reserva de minerales (calcio y fósforo) y hematopoyesis."],
      ["¿Qué hacen los osteoblastos, los osteocitos y los osteoclastos?", "Osteoblastos: fabrican matriz. Osteocitos: la mantienen. Osteoclastos: la destruyen."],
      ["Dibuja un hueso largo y señala diáfisis, epífisis, cavidad medular, cartílago articular y periostio.", "La diáfisis es la parte central, hueca (cavidad medular); las epífisis, los extremos con cartílago articular; el periostio recubre todo salvo el cartílago."],
      ["Clasifica por su forma: fémur, vértebra, esternón, huesos del carpo, falange.", "Fémur: largo. Vértebra: irregular. Esternón: plano. Carpo: cortos. Falange: largo."],
      ["Indica cuántas vértebras tiene cada región de la columna.", "7 cervicales, 12 dorsales, 5 lumbares, 5 sacras fusionadas y 4-5 coxígeas."],
      ["Nombra los huesos del brazo, el antebrazo, el muslo y la pierna.", "Brazo: húmero. Antebrazo: radio y cúbito. Muslo: fémur. Pierna: tibia y peroné."],
      ["Clasifica las articulaciones según su movilidad con un ejemplo.", "Sinartrosis: suturas del cráneo. Anfiartrosis: entre vértebras. Diartrosis: rodilla."],
      ["Enumera las partes de una articulación sinovial.", "Superficies con cartílago hialino, cápsula, membrana sinovial, líquido sinovial, ligamentos y, a veces, meniscos o rodetes."],
      ["Indica el movimiento: subir la punta del pie; girar la palma hacia arriba; juntar las piernas.", "Flexión dorsal del tobillo; supinación; aducción de cadera."],
      ["Ordena de mayor a menor: fibra, músculo, sarcómero, miofibrilla, fascículo.", "Músculo, fascículo, fibra, miofibrilla, sarcómero."],
      ["Define agonista y antagonista con el ejemplo de la extensión de rodilla.", "Agonista: cuádriceps, que extiende. Antagonista: isquiotibiales, que flexionarían y se relajan."],
      ["Relaciona cada lesión con su estructura: esguince, tendinopatía, fractura, rotura fibrilar.", "Ligamento, tendón, hueso y músculo."],
    ],
    m: [
      ["Explica por qué el hueso es un material compuesto y qué aporta cada componente.", "Combina colágeno (orgánico, flexible y tenaz) y fosfato cálcico (mineral, duro). Sin minerales sería blando como una goma; sin colágeno, frágil como la tiza."],
      ["¿Por qué el ejercicio con impacto (saltar, correr) es bueno para los huesos de los adolescentes?", "Las cargas mecánicas estimulan a los osteoblastos y aumentan la masa ósea; en la adolescencia se construye la mayor parte del pico de masa ósea que protegerá frente a la osteoporosis."],
      ["Explica la función de las curvaturas de la columna.", "Aumentan su resistencia a la compresión y su capacidad de amortiguar, y mantienen la cabeza y el centro de gravedad sobre la pelvis."],
      ["Compara el hombro y la cadera en movilidad y estabilidad, y relaciónalo con su estructura.", "Ambas son esféricas. El hombro tiene una cavidad poco profunda y depende de músculos: muy móvil e inestable. La cadera tiene una cavidad profunda y ligamentos fuertes: muy estable y algo menos móvil."],
      ["¿Por qué el cartílago necesita movimiento para mantenerse sano?", "No tiene vasos: se nutre del líquido sinovial, que entra y sale al cargar y descargar la articulación."],
      ["Indica tipo de articulación sinovial y ejes de: muñeca, base del pulgar, codo, hombro.", "Muñeca: condílea, 2. Pulgar: silla de montar, 2. Codo: troclear, 1. Hombro: esférica, 3."],
      ["Describe los movimientos de un lanzamiento de jabalina en el hombro y el codo.", "Hombro: extensión y rotación externa en la preparación, y flexión y rotación interna en el lanzamiento. Codo: flexión y luego extensión rápida."],
      ["Explica el papel del calcio y del ATP en la contracción.", "El calcio libera los puntos de unión de la actina; el ATP aporta la energía para que la miosina tire y para que se suelte. También se usa ATP para bombear el calcio y relajar."],
      ["¿Qué es una unidad motora y cómo aumenta la fuerza de un músculo?", "Una motoneurona y las fibras que inerva. Se gana fuerza reclutando más unidades motoras y aumentando la frecuencia de los impulsos."],
      ["Diferencia fibras tipo I y tipo II.", "Tipo I: lentas, rojas, muchas mitocondrias y mioglobina, resistentes a la fatiga. Tipo II: rápidas, más potentes, se fatigan antes."],
      ["Analiza el ejercicio de flexiones de brazos (push-up): agonistas, tipo de contracción en la bajada y en la subida.", "Agonistas: pectoral mayor, deltoides anterior y tríceps. Bajada: contracción excéntrica; subida: concéntrica. El core actúa en isométrico."],
      ["Explica por qué las agujetas aparecen sobre todo tras ejercicios excéntricos.", "Las contracciones excéntricas producen mucha tensión en pocas fibras y causan microlesiones en los sarcómeros; la inflamación de la reparación produce dolor 24-72 h después."],
      ["¿Qué músculos actúan en la flexión de cadera y en su extensión?", "Flexión: psoasilíaco y recto anterior del cuádriceps. Extensión: glúteo mayor e isquiotibiales."],
      ["¿Qué medidas preventivas reducirían los esguinces de tobillo en un equipo de baloncesto?", "Trabajo de propiocepción y equilibrio, fortalecimiento de los peroneos, calentamiento, calzado adecuado, vendaje o tobillera en jugadores con esguinces previos."],
    ],
    a: [
      ["Un hueso hueco y uno macizo tienen la misma masa. Razona cuál resiste mejor la flexión y relaciónalo con la diáfisis.", "El hueco, porque tiene el material más alejado del eje, donde las tensiones de flexión son mayores: su momento de inercia es mayor con la misma masa. La diáfisis aprovecha este principio, como los tubos de una bicicleta."],
      ["Una adolescente que hace danza con dieta muy restrictiva y sin menstruación sufre una fractura por estrés. Relaciona los factores.", "El déficit de energía reduce los estrógenos, que protegen el hueso; la falta de calcio, vitamina D y proteínas limita la formación ósea; las cargas repetidas generan microlesiones que no se reparan. Es la llamada «tríada de la deportista»."],
      ["Diseña una sesión para fortalecer la rodilla de un bailarín teniendo en cuenta agonistas, antagonistas y estabilizadores.", "Sentadillas y zancadas (cuádriceps y glúteo, concéntrico y excéntrico), curl nórdico (isquiotibiales excéntrico), trabajo de glúteo medio (estabiliza la rodilla en el plano frontal), propiocepción sobre superficie inestable y estiramientos al final."],
      ["Explica por qué los músculos quedan rígidos tras la muerte usando el ciclo de la contracción.", "Sin ATP, las cabezas de miosina unidas a la actina no pueden soltarse; además el calcio no se bombea de vuelta. Los puentes quedan fijos: rigor mortis, hasta que las proteínas se degradan."],
      ["Calcula el acortamiento de un músculo de 30 cm si cada sarcómero pasa de 2,4 a 1,8 µm, y explica por qué no puede acortarse más del 30-40 %.", "Acortamiento relativo: 0,6 / 2,4 = 25 %; el músculo se acorta 7,5 cm. Más allá, los filamentos de actina chocan y se superponen y la miosina choca con las líneas Z: no hay más deslizamiento."],
      ["Un tenista golpea de revés. Describe la cadena de movimientos desde las piernas hasta la muñeca, con los planos.", "Extensión de rodillas y cadera (sagital), rotación de cadera y tronco (transversal), abducción horizontal y rotación externa del hombro, extensión del codo y estabilización de la muñeca en extensión. La fuerza se transmite de segmento en segmento (cadena cinética)."],
      ["Compara la estructura de la rodilla y del codo y explica por qué la rodilla se lesiona más en el deporte.", "Ambas son trocleares, pero la rodilla soporta el peso del cuerpo multiplicado en saltos y giros, sus superficies encajan poco y depende de meniscos y ligamentos; los giros con el pie fijo la someten a rotación, lo que rompe cruzados y meniscos."],
      ["Una persona lleva un mes con una pierna escayolada. Explica qué cambios sufren hueso, cartílago y músculo, y cómo debe ser la recuperación.", "Pierde masa ósea (faltan cargas), el cartílago se nutre peor y el músculo se atrofia (sobre todo fibras lentas, como el cuádriceps). Recuperación progresiva: movilidad, carga parcial, fortalecimiento y propiocepción."],
      ["Explica por qué la hiperlaxitud articular puede ser una ventaja y un riesgo para un artista de circo.", "Ventaja: amplitudes extremas (contorsionismo). Riesgo: ligamentos más laxos estabilizan menos, aumentan luxaciones y esguinces; hay que compensar con fuerza y control muscular."],
      ["Argumenta, con la fisiología del hueso, por qué la prevención de la osteoporosis empieza en la adolescencia.", "El pico de masa ósea se alcanza hacia los 25-30 años y luego se pierde lentamente. Cuanto mayor sea ese pico (ejercicio de impacto, calcio, vitamina D, no fumar ni beber alcohol), más tardará la pérdida en llegar al umbral de fractura."],
    ],
  },
  glosario: [
    ["Osteoblasto", "Célula que fabrica matriz ósea nueva."],
    ["Osteoclasto", "Célula que destruye la matriz ósea."],
    ["Osteona", "Unidad del hueso compacto: láminas alrededor de un conducto central."],
    ["Diáfisis", "Parte central y alargada de un hueso largo."],
    ["Epífisis", "Extremo de un hueso largo, de hueso esponjoso."],
    ["Periostio", "Membrana que envuelve el hueso y permite su crecimiento en grosor y su reparación."],
    ["Esqueleto axial", "Cráneo, columna vertebral y caja torácica."],
    ["Esqueleto apendicular", "Extremidades y cinturas escapular y pélvica."],
    ["Articulación sinovial", "Articulación móvil con cápsula, membrana y líquido sinovial."],
    ["Menisco", "Disco de fibrocartílago que mejora el ajuste de la rodilla."],
    ["Abducción", "Movimiento que aleja un segmento de la línea media."],
    ["Pronación", "Giro del antebrazo que pone la palma hacia abajo."],
    ["Sarcómero", "Unidad contráctil del músculo, entre dos líneas Z."],
    ["Unidad motora", "Una motoneurona y todas las fibras que controla."],
    ["Contracción excéntrica", "Contracción en la que el músculo se alarga mientras frena una carga."],
    ["Agonista", "Músculo principal responsable de un movimiento."],
    ["Antagonista", "Músculo que realiza el movimiento contrario al agonista."],
  ],
  situacion: {
    titulo: "Prevenir lesiones en el club del barrio",
    reto: "Un club deportivo o una escuela de danza del barrio os pide una guía de prevención de lesiones del aparato locomotor adaptada a su actividad. Debéis analizar los movimientos típicos y proponer un calentamiento y un plan de fortalecimiento razonados anatómicamente.",
    pasos: [
      "Elegid la actividad (fútbol, baloncesto, danza, escalada…) y grabad o describid sus tres movimientos más frecuentes.",
      "Analizad cada movimiento: articulaciones, tipo de articulación, planos, movimientos, músculos agonistas y antagonistas y tipo de contracción.",
      "Investigad las lesiones más frecuentes de esa actividad y relacionadlas con las estructuras y los movimientos.",
      "Diseñad un calentamiento de 10 minutos y cinco ejercicios de fortalecimiento o propiocepción justificados.",
      "Probad el calentamiento con la clase y recoged sus valoraciones para mejorarlo.",
    ],
    producto: "Una guía ilustrada de prevención (póster o folleto) con el análisis anatómico, el calentamiento y los ejercicios, presentada al club o a la clase.",
    evaluacion: [
      "El análisis de articulaciones, músculos y contracciones es correcto.",
      "Las lesiones se relacionan con estructuras y mecanismos concretos.",
      "Los ejercicios propuestos están justificados y son seguros y progresivos.",
      "La guía es clara, visual y útil para su público.",
    ],
  },
  familias: [
    "Tocad juntos las prominencias óseas del cuerpo (clavícula, rótula, tobillo, vértebras) y nombradlas.",
    "Observad un hueso de pollo o de cordero al cocinar: diáfisis, epífisis, cartílago y médula.",
    "Repasad qué alimentos de casa aportan calcio y vitamina D y si los tomáis a diario.",
    "Haced un estiramiento suave juntos y comentad qué músculo se estira y cuál es su antagonista.",
  ],
  saberes: B.SAB("El aparato locomotor: tejido óseo y remodelación, esqueleto axial y apendicular, articulaciones y movimientos articulares, músculo esquelético y mecanismo de contracción, acciones musculares y prevención de lesiones en la actividad física y artística"),
  ideas: [
    "Disolver la parte mineral de un hueso de pollo en vinagre durante varios días para comprobar el papel del colágeno.",
    "Medir con un goniómetro (o una aplicación) la amplitud de movimiento de hombro, cadera y tobillo y comparar entre compañeros.",
    "Construir un modelo de brazo con cartón, encuadernadores y gomas que represente bíceps y tríceps.",
    "Analizar a cámara lenta un gesto técnico deportivo o de danza y etiquetar articulaciones y músculos.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Aparato_locomotor", "Aparato locomotor"),
    B.FUENTES.WIKI("Contracción_muscular", "Contracción muscular"),
  ],
});
