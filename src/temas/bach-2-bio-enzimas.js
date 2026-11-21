// Biología 2º Bachillerato · Enzimas y vitaminas (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, graf, cadena, arbol } = require("./_bach2-bio");

// Energía de activación con y sin enzima.
const eaSVG = graf("Perfil de energía de una reacción: la enzima reduce la energía de activación pero no cambia la energía de reactivos y productos", "avance de la reacción", "Energía", [
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, 0.55 - 0.3 * x + 0.42 * Math.exp(-Math.pow((x - 0.5) / 0.13, 2))]; }), c: "var(--red)", t: "" },
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, 0.55 - 0.3 * x + 0.16 * Math.exp(-Math.pow((x - 0.5) / 0.13, 2))]; }), c: "var(--leaf)", t: "", dash: true },
], `<text x="148" y="38" font-size="11" font-weight="700" fill="var(--red)" font-family="Atkinson Hyperlegible, sans-serif">sin enzima</text>
  <text x="150" y="74" font-size="11" font-weight="700" fill="var(--leaf)" font-family="Atkinson Hyperlegible, sans-serif">con enzima</text>
  <text x="44" y="78" font-size="10" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">reactivos</text><text x="196" y="124" font-size="10" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">productos</text>`);

// Modelo de ajuste inducido.
const centroSVG = marco("Mecanismo de acción enzimática: el sustrato se une al centro activo, se forma el complejo enzima-sustrato, se transforma y se liberan los productos; la enzima queda libre", `
  <defs><marker id="ez1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  ${[[42, "E + S", false], [130, "Complejo ES", true], [218, "E + P", false]].map(([x, t, u]) => `
  <path d="M${x - 32} 120 V 80 H ${x - 10} l 10 14 l 10 -14 H ${x + 32} V 120 Z" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.4"/>
  ${T(x, 150, t, { fs: 11, b: true })}${T(x, 108, "E", { fs: 14, b: true, c: "var(--pen)" })}`).join("")}
  <polygon points="31,36 53,36 42,50" fill="var(--red)"/><polygon points="120,80 140,80 130,94" fill="var(--red)"/>
  <circle cx="206" cy="40" r="8" fill="var(--sun)"/><rect x="222" y="30" width="16" height="16" rx="3" fill="var(--leaf)"/>
  ${T(42, 20, "sustrato", { fs: 10, b: true, c: "var(--red)" })}${T(222, 22, "productos", { fs: 10, b: true, c: "var(--leaf)" })}
  <path d="M76 100 H 94" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#ez1)"/><path d="M166 100 H 184" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#ez1)"/>
  ${T(130, 172, "la enzima sale intacta y se reutiliza", { fs: 10.5, b: true, c: "var(--muted)" })}`);

// Curva de Michaelis-Menten.
const mmSVG = graf("Curva de Michaelis-Menten: la velocidad aumenta con la concentración de sustrato hasta alcanzar la velocidad máxima; Km es la concentración con la que se alcanza la mitad de Vmax", "[S]", "v", [
  { p: Array.from({ length: 41 }, (_, i) => { const s = i / 40; return [s, 0.85 * s / (0.15 + s)]; }), c: "var(--pen)", t: "" },
  { p: [[0, 0.85], [1, 0.85]], c: "var(--red)", t: "", dash: true },
  { p: [[0, 0.425], [0.15, 0.425], [0.15, 0]], c: "var(--muted)", t: "", dash: true },
], `<text x="200" y="40" font-size="11" font-weight="700" fill="var(--red)" font-family="Atkinson Hyperlegible, sans-serif">Vmax</text>
  <text x="44" y="88" font-size="10" font-weight="700" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Vmax/2</text>
  <text x="62" y="160" font-size="11" font-weight="700" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Km</text>`);

// Temperatura y pH.
const tphSVG = graf("Actividad enzimática frente a la temperatura y frente al pH: cada enzima tiene un valor óptimo; la pepsina actúa a pH 2 y la tripsina a pH 8", "T o pH", "actividad", [
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, x < 0.62 ? 0.85 * Math.pow(x / 0.62, 1.6) : Math.max(0, 0.85 - 4.5 * Math.pow(x - 0.62, 1.2))]; }), c: "var(--red)", t: "" },
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, 0.7 * Math.exp(-Math.pow((x - 0.18) / 0.08, 2))]; }), c: "var(--pen)", t: "" },
  { p: Array.from({ length: 41 }, (_, i) => { const x = i / 40; return [x, 0.7 * Math.exp(-Math.pow((x - 0.85) / 0.08, 2))]; }), c: "var(--leaf)", t: "", dash: true },
], `<text x="160" y="40" font-size="10.5" font-weight="700" fill="var(--red)" font-family="Atkinson Hyperlegible, sans-serif">T (óptima 37 °C)</text>
  <text x="44" y="56" font-size="10.5" font-weight="700" fill="var(--pen)" font-family="Atkinson Hyperlegible, sans-serif">pepsina</text>
  <text x="196" y="72" font-size="10.5" font-weight="700" fill="var(--leaf)" font-family="Atkinson Hyperlegible, sans-serif">tripsina</text>`);

module.exports = tema({
  titulo: "Enzimas y vitaminas",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar qué es un biocatalizador y cómo reducen las enzimas la energía de activación",
    "Describir la estructura de las enzimas (apoenzima, cofactores y coenzimas) y el centro activo",
    "Interpretar la cinética enzimática con la curva de Michaelis-Menten, Km y Vmax",
    "Analizar la influencia de la temperatura, el pH y los inhibidores en la actividad enzimática",
    "Explicar la regulación enzimática (alosterismo, retroinhibición, zimógenos) y clasificar las enzimas",
    "Relacionar las vitaminas con su función como coenzimas y las enfermedades por carencia",
  ],
  claves: ["enzima", "biocatalizador", "energía de activación", "centro activo", "apoenzima", "cofactor", "coenzima", "complejo enzima-sustrato", "ajuste inducido", "Michaelis-Menten", "Km", "inhibidor competitivo", "enzima alostérica", "retroinhibición", "vitamina", "avitaminosis"],
  pregunta: {
    texto: "Si en un tubo de ensayo dejas glucosa con oxígeno, no pasa nada durante años. ¿Cómo consiguen tus células quemarla en milésimas de segundo a 37 °C?",
    respuesta: "Gracias a las <mark>enzimas</mark>. La oxidación de la glucosa libera energía, pero para empezar necesita superar una barrera, la <b>energía de activación</b>, que a 37 °C casi ninguna molécula alcanza. Las enzimas se unen a los reactivos en su centro activo y los orientan y tensan de forma que la barrera se hace mucho más baja. La reacción ocurre entonces millones de veces más deprisa, sin calentar la célula, y la enzima queda intacta para actuar de nuevo.",
  },
  lectura: {
    titulo: "El caldo de Buchner",
    html: `<p>A mediados del siglo XIX, Louis Pasteur defendía que la fermentación del azúcar en alcohol era obra de una «fuerza vital» que solo poseían las levaduras vivas. En 1897, el químico alemán Eduard Buchner trituró levaduras con arena, filtró el jugo y le añadió azúcar para conservarlo. Para su sorpresa, el líquido empezó a burbujear: estaba fermentando sin una sola célula viva. La fermentación la hacían moléculas que podían extraerse de la célula. Las llamó «zimasa», del griego <i>zyme</i>, levadura, y recibió el Premio Nobel en 1907.</p><p>Aquel caldo marcó el nacimiento de la bioquímica moderna: la vida no necesita ninguna fuerza misteriosa, sino catalizadores extraordinarios. Hoy conocemos miles de enzimas. Una sola molécula de catalasa descompone millones de moléculas de agua oxigenada por segundo; la anhidrasa carbónica acelera diez millones de veces la reacción del CO₂ con el agua. Las enzimas están en el detergente que lava a 30 °C, en los quesos, en los test de embarazo y en los fármacos. Y muchas no funcionan sin la ayuda de pequeñas moléculas que debemos obtener de los alimentos: las vitaminas. En este tema verás cómo trabajan y qué ocurre cuando faltan.</p>`,
  },
  bloques: [
    { h: "Las enzimas, biocatalizadores", p: [
      "Para que una reacción química ocurra, las moléculas de reactivo deben chocar con la orientación adecuada y con una energía mínima, la <mark>energía de activación</mark>, que las lleva a un estado intermedio inestable (estado de transición). En el laboratorio se aceleran las reacciones calentando, pero en los seres vivos eso destruiría las células. Por eso usan <b>catalizadores</b>: sustancias que aceleran las reacciones disminuyendo la energía de activación, sin consumirse ni alterarse en el proceso.",
      "Las <mark>enzimas</mark> son los catalizadores biológicos. Casi todas son proteínas globulares, aunque algunos ARN también tienen actividad catalítica (las <b>ribozimas</b>). Como todos los catalizadores, no cambian el equilibrio de la reacción ni la energía de reactivos y productos: solo hacen que se alcance antes. No hacen posibles reacciones que no sean espontáneas, aunque las células las acoplan a otras que liberan energía (como la hidrólisis del ATP). Frente a los catalizadores inorgánicos, son muchísimo más <b>eficaces</b> (aceleran las reacciones entre 10⁶ y 10¹⁷ veces), muy <b>específicas</b>, actúan en condiciones suaves de temperatura y pH, y se pueden <b>regular</b>, lo que permite a la célula controlar su metabolismo.",
    ], svg: eaSVG, v: ["enz-a", "Enzimas: estructura, características y funciones"] },
    { h: "Estructura de las enzimas", p: [
      "Algunas enzimas son <b>holoproteínas</b>, formadas solo por aminoácidos, como la ribonucleasa o la pepsina. Otras son <b>holoenzimas</b>, formadas por una parte proteica, la <mark>apoenzima</mark>, y una parte no proteica imprescindible para su actividad, el <mark>cofactor</mark>. Ninguna de las dos partes es activa por separado. El cofactor puede ser un ion metálico (Mg²⁺, Zn²⁺, Fe²⁺, Cu²⁺, Mn²⁺), que ayuda a unir el sustrato o a estabilizar cargas, o una molécula orgánica compleja, llamada <b>coenzima</b>. Si la coenzima está unida a la apoenzima de forma permanente, mediante enlaces covalentes, se llama <b>grupo prostético</b>, como el grupo hemo de los citocromos.",
      "Las coenzimas suelen actuar como <b>transportadores</b> de electrones, átomos o grupos químicos de una reacción a otra: el <b>NAD⁺</b>, el <b>NADP⁺</b> y el <b>FAD</b> transportan electrones e hidrógenos en las reacciones de oxidación-reducción; la <b>coenzima A</b> transporta grupos acilo; el <b>ATP</b> transporta grupos fosfato y energía. A diferencia de la apoenzima, una misma coenzima puede trabajar con muchas enzimas distintas. Muchas coenzimas derivan de las <b>vitaminas</b> del grupo B: el NAD⁺ de la niacina (B₃), el FAD de la riboflavina (B₂) y la coenzima A del ácido pantoténico (B₅). Por eso necesitamos vitaminas en pequeñas cantidades: se reciclan una y otra vez.",
    ], svg: arbol("Composición de una holoenzima", "HOLOENZIMA", [["Apoenzima", "parte proteica"], ["Ion metálico", "Mg²⁺, Zn²⁺, Fe²⁺"], ["Coenzima", "NAD⁺, FAD, CoA"]]) },
    { h: "El centro activo y el mecanismo de acción", p: [
      "La molécula sobre la que actúa una enzima es el <b>sustrato</b>. La enzima es mucho mayor que el sustrato, y solo una pequeña región de su superficie, el <mark>centro activo</mark>, se une a él. El centro activo es una hendidura formada por unos pocos aminoácidos, que pueden estar muy separados en la secuencia pero quedan juntos al plegarse la proteína. Unos son <b>aminoácidos de fijación</b>, que unen el sustrato mediante enlaces débiles, y otros son <b>aminoácidos catalíticos</b>, que intervienen en la rotura o formación de enlaces. El resto de la proteína mantiene la forma del centro activo.",
      "La reacción transcurre en etapas: la enzima (E) se une al sustrato (S) y forma el <b>complejo enzima-sustrato</b> (ES); en él, el sustrato se transforma en el producto (P); finalmente, el producto se libera y la enzima queda libre: E + S ⇌ ES → E + P. La enzima reduce la energía de activación porque acerca y orienta los reactivos, tensiona sus enlaces y les cede o capta protones o electrones. Emil Fischer propuso en 1894 el modelo de la <b>llave y la cerradura</b>, con un centro activo rígido y complementario del sustrato. Hoy se acepta el modelo del <b>ajuste inducido</b> de Koshland (1958): el centro activo es flexible y cambia de forma al unirse el sustrato, como un guante que se ajusta a la mano.",
    ], extra: `<div class="formula"><span>E + S ⇌ ES → E + P</span></div>`, svg: centroSVG, v: ["enz-b", "¿Qué son y cómo funcionan las enzimas?"] },
    { h: "La especificidad enzimática", p: [
      "Las enzimas son muy <mark>específicas</mark>: cada una actúa sobre un sustrato o un grupo de sustratos determinado y cataliza un tipo concreto de reacción. Se distinguen varios grados. La <b>especificidad absoluta</b>: la enzima solo actúa sobre un sustrato, como la ureasa, que solo hidroliza la urea. La <b>especificidad de grupo</b>: actúa sobre moléculas con un determinado grupo o enlace, como las peptidasas, que rompen enlaces peptídicos, o la α-glucosidasa, que rompe enlaces α-glucosídicos. Y la <b>especificidad estereoquímica</b>: distingue entre isómeros, como las enzimas que actúan sobre L-aminoácidos pero no sobre los D.",
      "La especificidad depende de la forma y de los grupos químicos del centro activo, y es esencial para el orden del metabolismo: en una célula hay miles de moléculas mezcladas, y cada enzima elige la suya. Permite también que cada tejido haga funciones distintas según las enzimas que fabrica. Además, una misma reacción puede estar catalizada en distintos tejidos o especies por formas ligeramente diferentes de la misma enzima, llamadas <b>isoenzimas</b>: la lactato deshidrogenasa del corazón es distinta de la del músculo esquelético, y medir en sangre la que procede del corazón ayuda a diagnosticar un infarto.",
    ], svg: L6.tabla("Grados de especificidad", ["Tipo", "Actúa sobre", "Ejemplo"], [["Absoluta", "un solo sustrato", "ureasa"], ["De grupo", "un tipo de enlace", "peptidasas"], ["Estereoquímica", "un isómero", "L-aminoácido oxidasa"], ["Isoenzimas", "misma reacción", "LDH cardiaca"]]) },
    { h: "La cinética enzimática", p: [
      "La <b>cinética enzimática</b> estudia la velocidad de las reacciones catalizadas por enzimas. Si se mantiene constante la cantidad de enzima y se aumenta la concentración de sustrato [S], la velocidad (v) aumenta primero casi en proporción. Pero llega un momento en que todos los centros activos están ocupados: la enzima está <b>saturada</b> y la velocidad ya no aumenta, aunque haya más sustrato. Se alcanza así la <mark>velocidad máxima</mark> (V<sub>max</sub>). La curva que describe este comportamiento es una hipérbola, y la ecuación que la representa la propusieron Leonor Michaelis y Maud Menten en 1913.",
      "La <mark>constante de Michaelis</mark> (K<sub>m</sub>) es la concentración de sustrato con la que la velocidad es la mitad de la máxima. Es característica de cada enzima y de cada sustrato, y mide la <b>afinidad</b> entre ambos: una K<sub>m</sub> pequeña indica que la enzima alcanza la mitad de su velocidad máxima con poco sustrato, es decir, que tiene <b>mucha afinidad</b> por él. Por ejemplo, la hexoquinasa del cerebro tiene una K<sub>m</sub> para la glucosa muy baja y la capta aunque la glucemia baje, mientras que la glucoquinasa del hígado tiene una K<sub>m</sub> alta y solo actúa cuando hay mucha glucosa, después de comer.",
    ], extra: `<div class="formula"><span>v = Vmax · [S] / (Km + [S]) ; si [S] = Km → v = Vmax/2</span></div>`, svg: mmSVG, v: ["enz-c", "Cinética enzimática: Michaelis-Menten, Km y Vmax"] },
    { h: "Factores que influyen: temperatura y pH", p: [
      "La <b>temperatura</b> influye de dos formas. Al aumentarla, las moléculas se mueven más deprisa y chocan más, y la velocidad de reacción aumenta (aproximadamente se duplica por cada 10 °C). Pero al superar cierto valor, la enzima, que es una proteína, empieza a <b>desnaturalizarse</b> y la actividad cae bruscamente. La temperatura a la que la actividad es máxima es la <b>temperatura óptima</b>: unos 37 °C en las enzimas humanas, pero hasta 80-100 °C en las bacterias de las fuentes termales, cuyas enzimas, como la Taq polimerasa, se usan en la PCR. A temperaturas bajas las enzimas no se desnaturalizan, solo se vuelven lentas: por eso se conservan los alimentos en la nevera.",
      "El <b>pH</b> modifica la carga de los aminoácidos del centro activo y de toda la proteína. Cada enzima tiene un <b>pH óptimo</b> y, fuera de un intervalo, se inactiva o se desnaturaliza. La mayoría trabaja a pH cercano a 7, pero la <b>pepsina</b> del estómago tiene su óptimo a pH 1,5-2, la <b>tripsina</b> del intestino a pH 8 y las enzimas de los lisosomas, a pH 5. También influyen la concentración de enzima (la velocidad es proporcional a ella si hay sustrato suficiente), la presencia de los cofactores necesarios y los inhibidores y activadores.",
    ], svg: tphSVG },
    { h: "La inhibición enzimática", p: [
      "Los <mark>inhibidores</mark> son sustancias que disminuyen o anulan la actividad de una enzima. La <b>inhibición irreversible</b> ocurre cuando el inhibidor se une covalentemente al centro activo y lo inutiliza de forma permanente: es un <b>veneno</b> para la enzima. Así actúan los gases nerviosos y muchos insecticidas, que bloquean la acetilcolinesterasa del sistema nervioso; el cianuro, que bloquea la citocromo oxidasa de la respiración; o la penicilina, que inactiva la enzima bacteriana que fabrica la pared celular.",
      "En la <b>inhibición reversible</b>, el inhibidor se une a la enzima con enlaces débiles y puede separarse. En la <b>inhibición competitiva</b>, el inhibidor se parece al sustrato y compite con él por el centro activo; se puede contrarrestar aumentando la concentración de sustrato. Aumenta la K<sub>m</sub> aparente, pero no cambia la V<sub>max</sub>. Por ejemplo, el etanol se usa como antídoto en la intoxicación por metanol porque compite por la misma enzima. En la <b>inhibición no competitiva</b>, el inhibidor se une a otra zona de la enzima y deforma el centro activo, o se une al complejo ES; no se contrarresta con más sustrato y disminuye la V<sub>max</sub>. Muchos medicamentos son inhibidores enzimáticos: el ibuprofeno, las estatinas o los antirretrovirales contra el VIH.",
    ], svg: L5.compara("Inhibición reversible", ["Competitiva", ["se parece al sustrato", "ocupa el centro activo", "↑ Km, = Vmax", "se vence con más S"]], ["No competitiva", ["se une a otra zona", "deforma la enzima", "= Km, ↓ Vmax", "no se vence con S"]], "var(--pen)", "var(--red)") },
    { h: "La regulación de la actividad enzimática", p: [
      "La célula no necesita que todas sus enzimas trabajen siempre al máximo: las regula según sus necesidades. Una forma es controlar la <b>cantidad</b> de enzima, activando o reprimiendo los genes que la codifican. Otra es la <b>compartimentación</b>: las enzimas de cada ruta están en un orgánulo concreto. Y otra muy rápida es modificar su <b>actividad</b>. Las <mark>enzimas alostéricas</mark> tienen, además del centro activo, otros centros llamados <b>centros reguladores</b> o alostéricos, donde se unen moléculas activadoras o inhibidoras que cambian la forma de la enzima. Suelen tener estructura cuaternaria y su curva de cinética es sigmoidea, no hiperbólica.",
      "En la <mark>retroinhibición</mark> o inhibición por el producto final, el último producto de una ruta metabólica inhibe alostéricamente la primera enzima de la ruta: cuando hay suficiente producto, la ruta se frena; cuando se consume, se reactiva. Es un ejemplo de regulación por retroalimentación negativa, muy económica. Otras enzimas se regulan por <b>modificación covalente</b>, por ejemplo añadiendo o quitando un grupo fosfato. Por último, algunas enzimas digestivas se fabrican como precursores inactivos, los <b>zimógenos</b> o proenzimas (pepsinógeno, tripsinógeno), que solo se activan al llegar al tubo digestivo, para que no digieran las células que las producen.",
    ], svg: cadena("Retroinhibición: el producto final D frena la primera enzima de la ruta", [["A", "var(--pen)"], ["B", "var(--leaf)"], ["C", "var(--sun)"], ["D", "var(--red)"]], ["E1", "E2", "E3"], "D inhibe a E1"), },
    { h: "Clasificación y nomenclatura de las enzimas", p: [
      "Las enzimas se nombran añadiendo el sufijo <b>-asa</b> al nombre del sustrato o de la reacción: la <b>maltasa</b> hidroliza la maltosa, la <b>ADN polimerasa</b> forma ADN, la <b>deshidrogenasa</b> quita hidrógenos. Algunas conservan nombres tradicionales sin ese sufijo, como la pepsina, la tripsina o la ptialina. Para evitar confusiones, la Unión Internacional de Bioquímica asigna a cada enzima un código de cuatro números (EC) y la clasifica en siete grandes clases según el tipo de reacción que cataliza.",
      "Las <b>oxidorreductasas</b> catalizan reacciones de oxidación-reducción, transfiriendo electrones o hidrógenos (deshidrogenasas, oxidasas). Las <b>transferasas</b> transfieren grupos funcionales de una molécula a otra (quinasas, que transfieren fosfato; transaminasas). Las <b>hidrolasas</b> rompen enlaces añadiendo agua (amilasa, lipasa, peptidasas). Las <b>liasas</b> rompen enlaces sin agua ni oxidación, o añaden grupos a dobles enlaces (descarboxilasas). Las <b>isomerasas</b> transforman una molécula en su isómero. Las <b>ligasas</b> unen dos moléculas usando la energía del ATP (ADN ligasa). A estas seis se añadió en 2018 una séptima clase, las <b>translocasas</b>, que mueven iones o moléculas a través de las membranas.",
    ], svg: L6.tabla("Clases de enzimas", ["Clase", "Reacción", "Ejemplo"], [["Oxidorreduct.", "redox", "deshidrogenasas"], ["Transferasas", "pasan grupos", "quinasas"], ["Hidrolasas", "rompen con H₂O", "amilasa"], ["Liasas e isomerasas", "rompen / isomerizan", "descarboxilasa"], ["Ligasas", "unen con ATP", "ADN ligasa"]]) },
    { h: "Las enzimas en la vida cotidiana y en la industria", p: [
      "Las enzimas tienen muchas aplicaciones. En <b>medicina</b>, la medida de enzimas en la sangre permite diagnosticar enfermedades: las transaminasas elevadas indican daño hepático; la troponina y la creatina quinasa, un infarto; la amilasa, una pancreatitis. Los análisis de glucosa usan la glucosa oxidasa, y muchos tests rápidos funcionan con anticuerpos unidos a enzimas que producen color. Algunas enfermedades hereditarias se deben a la falta de una enzima, como la <b>fenilcetonuria</b>, que se detecta con la prueba del talón a los recién nacidos.",
      "En la <b>industria alimentaria</b>, el cuajo (quimosina) coagula la leche para hacer queso; las amilasas transforman el almidón en jarabes de glucosa; la lactasa permite producir leche sin lactosa; las pectinasas aclaran los zumos; y las proteasas ablandan la carne. Los <b>detergentes biológicos</b> llevan proteasas, lipasas y amilasas que eliminan manchas a baja temperatura, lo que ahorra energía. En <b>biotecnología</b>, las enzimas de restricción, la ADN ligasa y las polimerasas son las herramientas de la ingeniería genética y de la técnica CRISPR. Además, las enzimas son catalizadores «verdes»: trabajan a temperatura ambiente y generan pocos residuos.",
    ], svg: L6.radial("Aplicaciones de las enzimas", "ENZIMAS", ["Diagnóstico", "Queso y zumos", "Leche sin lactosa", "Detergentes", "Ingeniería genética", "Fármacos"], "var(--leaf)") },
    { h: "Las vitaminas", p: [
      "Las <mark>vitaminas</mark> son moléculas orgánicas de naturaleza química muy variada que los animales necesitan en cantidades muy pequeñas (miligramos o microgramos al día) y que, en general, no pueden sintetizar, por lo que deben tomarlas en la dieta. No aportan energía ni forman estructuras: su función es <b>reguladora</b>, y muchas actúan como coenzimas o como precursores de coenzimas. El término lo acuñó Casimir Funk en 1912 («aminas vitales»), aunque luego se vio que la mayoría no son aminas. Algunas se toman como <b>provitaminas</b>, precursores que el organismo transforma en vitamina, como el β-caroteno (provitamina A).",
      "La falta total de una vitamina causa una <b>avitaminosis</b>, y su déficit parcial, una <b>hipovitaminosis</b>; ambas producen enfermedades características que se curan al aportar la vitamina. Su exceso causa <b>hipervitaminosis</b>, sobre todo con las vitaminas liposolubles, que se acumulan en el hígado y el tejido adiposo; las hidrosolubles sobrantes se eliminan por la orina. Las vitaminas se alteran con el calor, la luz y el oxígeno, por lo que la cocción prolongada de verduras destruye buena parte de ellas. Una dieta variada, rica en frutas, verduras, cereales integrales y alimentos de origen animal, aporta todas las necesarias; la excepción es la vitamina B₁₂ en las dietas veganas, que debe suplementarse.",
    ], svg: L5.compara("Tipos de vitaminas", ["Hidrosolubles", ["grupo B y C", "se disuelven en agua", "exceso → orina", "muchas son coenzimas"]], ["Liposolubles", ["A, D, E y K", "se disuelven en grasa", "se acumulan", "riesgo de exceso"]], "var(--pen)", "var(--sun)"), v: ["enz-d", "¿Cuál es el valor de las vitaminas?"] },
    { h: "Vitaminas hidrosolubles y liposolubles", p: [
      "Las <b>vitaminas hidrosolubles</b> son las del complejo B y la C. La <b>B₁</b> (tiamina) es coenzima del metabolismo de los glúcidos; su falta causa el beriberi. La <b>B₂</b> (riboflavina) forma el FAD y la <b>B₃</b> (niacina) el NAD⁺; la falta de niacina provoca la pelagra (dermatitis, diarrea, demencia). La <b>B₆</b> interviene en el metabolismo de los aminoácidos. La <b>B₉</b> (ácido fólico) y la <b>B₁₂</b> (cobalamina, con cobalto) son necesarias para fabricar ADN y glóbulos rojos; su falta causa anemia, y el ácido fólico previene malformaciones del tubo neural en el embarazo. La <b>C</b> (ácido ascórbico) es antioxidante y necesaria para el colágeno; su falta causa el <b>escorbuto</b>, que diezmaba a los marineros.",
      "Las <b>vitaminas liposolubles</b> son terpenos o esteroides. La <b>A</b> (retinol) es necesaria para la visión (forma el retinal) y para los epitelios; su falta causa ceguera nocturna y es la primera causa de ceguera infantil evitable en el mundo. La <b>D</b> (calciferol) regula la absorción de calcio y fósforo; su falta causa raquitismo en los niños y osteomalacia en los adultos. La <b>E</b> (tocoferol) es antioxidante y protege las membranas. La <b>K</b> (filoquinona) es necesaria para la coagulación; parte de ella la fabrican las bacterias intestinales, y a los recién nacidos se les administra al nacer porque aún no tienen esa microbiota.",
    ], svg: L6.tabla("Algunas vitaminas y su carencia", ["Vitamina", "Función", "Carencia"], [["B₁", "metabolismo glúcidos", "beriberi"], ["B₃", "NAD⁺", "pelagra"], ["C", "colágeno", "escorbuto"], ["A", "visión", "ceguera nocturna"], ["D", "absorción de Ca", "raquitismo"]]) },
  ],
  figura: { titulo: "Enzimas y vitaminas", items: [["Enzimas", "biocatalizadores", "↓ energía de", "activación"], ["Centro activo", "E + S ⇌ ES", "→ E + P", "ajuste inducido"], ["Cinética", "Km y Vmax", "T y pH óptimos", "inhibidores"], ["Vitaminas", "coenzimas", "hidrosolubles", "liposolubles"]] },
  video: ["enz-a", "Enzimas: estructura, características y funciones"],
  ejemplos: [
    ["Una enzima tiene Vmax = 100 µmol/min y Km = 2 mM. Calcula la velocidad con [S] = 2 mM y con [S] = 18 mM.", ["v = Vmax·[S]/(Km + [S]).", "[S] = 2: v = 100·2/(2 + 2) = 50.", "[S] = 18: v = 100·18/(2 + 18) = 90."], "50 µmol/min (Vmax/2) y 90 µmol/min."],
    ["Dos enzimas A (Km = 0,1 mM) y B (Km = 10 mM) actúan sobre el mismo sustrato. ¿Cuál tiene más afinidad? ¿Cuál actuará mejor si hay poco sustrato?", ["Km menor → alcanza Vmax/2 con menos sustrato.", "La enzima A tiene más afinidad."], "La A tiene mayor afinidad y funciona bien aunque el sustrato escasee."],
    ["Se añade un inhibidor y luego mucho sustrato: la velocidad vuelve a su valor máximo. ¿Qué tipo de inhibición es?", ["Si el exceso de sustrato desplaza al inhibidor, compiten por el centro activo.", "La Vmax no cambia."], "Inhibición competitiva (aumenta la Km aparente)."],
    ["Interpreta: la actividad de una enzima es máxima a 40 °C y a 60 °C es nula; al volver a 40 °C no se recupera.", ["Hasta 40 °C la velocidad sube por los choques.", "A 60 °C la enzima se desnaturaliza.", "La desnaturalización ha sido irreversible."], "Temperatura óptima de 40 °C; a 60 °C se desnaturaliza de forma irreversible."],
    ["¿Por qué la pepsina deja de actuar cuando el contenido del estómago pasa al intestino?", ["El pH óptimo de la pepsina es 1,5-2.", "En el duodeno el bicarbonato sube el pH a unos 8.", "La pepsina cambia de carga y se inactiva."], "Porque el pH intestinal está muy alejado de su pH óptimo."],
    ["Un marinero del siglo XVIII sangra por las encías y sus heridas no cicatrizan. Identifica la carencia y explica la relación con las proteínas.", ["Síntomas típicos del escorbuto.", "La vitamina C es necesaria para formar el colágeno.", "Sin colágeno sano fallan vasos, encías y cicatrices."], "Avitaminosis C (escorbuto); se cura con cítricos y verduras frescas."],
  ],
  errores: [
    "Decir que las enzimas aportan energía a la reacción: disminuyen la energía de activación.",
    "Pensar que las enzimas se consumen en la reacción: salen intactas y se reutilizan.",
    "Creer que una Km alta indica mucha afinidad: es al revés, Km baja = alta afinidad.",
    "Pensar que el frío desnaturaliza las enzimas: solo las ralentiza; el calor excesivo las desnaturaliza.",
    "Confundir inhibición competitiva y no competitiva: solo la competitiva se vence aumentando el sustrato.",
    "Creer que las vitaminas dan energía: tienen función reguladora, a menudo como coenzimas.",
  ],
  ejercicios: {
    b: [
      ["Define enzima y biocatalizador.", "Biocatalizador: sustancia de los seres vivos que acelera una reacción sin consumirse. Las enzimas son biocatalizadores, casi siempre proteínas globulares."],
      ["¿Qué es la energía de activación?", "Energía mínima que necesitan los reactivos para alcanzar el estado de transición y reaccionar."],
      ["Diferencia apoenzima, cofactor y holoenzima.", "Apoenzima: parte proteica. Cofactor: parte no proteica (ion o coenzima). Holoenzima: el conjunto activo."],
      ["Cita tres coenzimas y qué transportan.", "NAD⁺ y FAD: electrones e hidrógenos. Coenzima A: grupos acilo. ATP: fosfato y energía."],
      ["¿Qué es el centro activo?", "Región de la enzima donde se une el sustrato y se produce la catálisis."],
      ["Escribe el esquema general de una reacción enzimática.", "E + S ⇌ ES → E + P."],
      ["Diferencia el modelo de llave-cerradura del de ajuste inducido.", "Llave-cerradura: centro activo rígido y complementario. Ajuste inducido: centro activo flexible que se adapta al sustrato al unirse."],
      ["¿Qué es la temperatura óptima de una enzima?", "Temperatura a la que su actividad es máxima."],
      ["Define Vmax y Km.", "Vmax: velocidad con la enzima saturada. Km: concentración de sustrato con la que v = Vmax/2."],
      ["¿Qué es un zimógeno? Pon un ejemplo.", "Precursor inactivo de una enzima: pepsinógeno, tripsinógeno."],
      ["Cita las seis clases clásicas de enzimas.", "Oxidorreductasas, transferasas, hidrolasas, liasas, isomerasas y ligasas (más las translocasas)."],
      ["Diferencia vitaminas hidrosolubles y liposolubles y cita dos de cada.", "Hidrosolubles: se disuelven en agua, se eliminan por la orina (B₁, C). Liposolubles: en grasa, se acumulan (A, D)."],
    ],
    m: [
      ["Explica por qué la velocidad de una reacción enzimática no aumenta indefinidamente al añadir sustrato.", "Porque llega un momento en que todos los centros activos están ocupados (saturación) y se alcanza la Vmax."],
      ["Explica el efecto de la temperatura sobre la actividad enzimática con una gráfica.", "Sube con la temperatura (más choques) hasta la óptima; después cae bruscamente por desnaturalización. Curva asimétrica."],
      ["Compara la inhibición irreversible con la reversible.", "Irreversible: el inhibidor se une covalentemente e inutiliza la enzima (veneno). Reversible: unión débil; puede ser competitiva o no competitiva."],
      ["¿Por qué el etanol se usa como antídoto en la intoxicación por metanol?", "Ambos son sustratos de la alcohol deshidrogenasa: el etanol compite y evita que el metanol se transforme en formaldehído tóxico."],
      ["Explica qué es una enzima alostérica y qué tipo de curva presenta.", "Enzima con centros reguladores donde se unen activadores o inhibidores que cambian su forma; suelen tener estructura cuaternaria y curva sigmoidea."],
      ["Explica la retroinhibición con un esquema.", "A →E1→ B →E2→ C →E3→ D; D inhibe alostéricamente a E1 cuando se acumula y la ruta se frena."],
      ["¿Por qué las enzimas digestivas se fabrican como zimógenos?", "Para que no digieran las proteínas de las células que las producen; se activan en la luz del tubo digestivo."],
      ["Clasifica: a) amilasa; b) hexoquinasa; c) lactato deshidrogenasa; d) ADN ligasa.", "a) Hidrolasa. b) Transferasa (fosfato). c) Oxidorreductasa. d) Ligasa."],
      ["Relaciona tres vitaminas del grupo B con las coenzimas que forman.", "B₂ → FAD; B₃ → NAD⁺/NADP⁺; B₅ → coenzima A."],
      ["¿Por qué es más fácil una hipervitaminosis de A o D que de C?", "Las liposolubles se acumulan en hígado y tejido adiposo; las hidrosolubles sobrantes se eliminan por la orina."],
      ["Explica por qué los detergentes biológicos lavan a 30 °C y no conviene usarlos a 90 °C.", "Sus enzimas trabajan bien a temperaturas moderadas; a 90 °C se desnaturalizarían y perderían su efecto."],
      ["¿Por qué a los recién nacidos se les administra vitamina K?", "Es necesaria para la coagulación; el recién nacido aún no tiene bacterias intestinales que la fabriquen y la leche aporta poca: riesgo de hemorragias."],
    ],
    a: [
      ["(Tipo PAU) Se mide la velocidad de una enzima con distintas [S]: 1 mM → 33; 2 mM → 50; 4 mM → 67; 10 mM → 83; 50 mM → 96 µmol/min. Estima Vmax y Km y explica el significado.", "Vmax ≈ 100 µmol/min (asíntota). Km ≈ 2 mM (donde v = 50). La enzima se satura a concentraciones altas; Km mide su afinidad."],
      ["(Tipo PAU) Se estudia una enzima en presencia de un inhibidor: la Vmax baja a la mitad y la Km no cambia. ¿Qué tipo de inhibición es? ¿Se podría compensar añadiendo sustrato?", "No competitiva: el inhibidor se une fuera del centro activo y reduce las enzimas funcionales. No se compensa con más sustrato."],
      ["(Tipo PAU) Explica por qué las enzimas son específicas, cómo disminuyen la energía de activación y por qué no alteran el equilibrio de la reacción.", "Especificidad por la complementariedad de forma y grupos del centro activo. Reducen Ea orientando, aproximando y tensando el sustrato y estabilizando el estado de transición. No cambian ΔG: aceleran igual la reacción directa y la inversa."],
      ["La penicilina inhibe de forma irreversible una enzima que fabrica la pared bacteriana. Explica por qué es tóxica para las bacterias pero no para nosotros.", "Nuestras células no tienen pared de peptidoglucano ni esa enzima; las bacterias, sin pared, estallan por ósmosis."],
      ["Diseña un experimento para determinar el pH óptimo de la amilasa salival usando almidón y lugol.", "Tubos con almidón y saliva tamponados a pH 3, 5, 7, 9; a 37 °C; cada minuto se toma una gota y se añade lugol; el pH en que antes desaparece el color azul es el óptimo (≈ 7). Controles sin enzima."],
      ["En la fenilcetonuria falta la enzima que transforma la fenilalanina en tirosina. Explica por qué se acumula fenilalanina, por qué la tirosina pasa a ser esencial y qué tratamiento se aplica.", "Sin la enzima, la fenilalanina no se transforma y se acumula (tóxica para el cerebro). La tirosina ya no se fabrica y debe tomarse. Tratamiento: dieta pobre en fenilalanina desde el nacimiento."],
      ["La hexoquinasa (Km ≈ 0,1 mM) y la glucoquinasa (Km ≈ 10 mM) fosforilan la glucosa. La glucemia normal es de 5 mM. Explica qué ventaja tiene que el hígado use glucoquinasa.", "La hexoquinasa está casi saturada siempre y garantiza glucosa a los tejidos. La glucoquinasa del hígado solo actúa de forma notable cuando la glucemia sube tras comer, almacenando el exceso sin quitar glucosa al resto del cuerpo."],
      ["Explica por qué las bacterias termófilas son útiles en biotecnología, con el ejemplo de la PCR.", "Sus enzimas soportan altas temperaturas; la Taq polimerasa resiste los ciclos a 95 °C de la PCR sin desnaturalizarse, así que no hay que añadir enzima en cada ciclo."],
      ["Un insecticida organofosforado inhibe de forma irreversible la acetilcolinesterasa. Explica qué ocurre en las sinapsis de un insecto expuesto.", "La acetilcolina no se degrada y se acumula: estimulación continua de músculos, espasmos, parálisis y muerte."],
    ],
  },
  quiz: [
    ["Las enzimas aceleran las reacciones porque…", ["aportan calor", "reducen la energía de activación", "cambian el equilibrio", "se consumen"], 1, "Catalizadores."],
    ["Casi todas las enzimas son…", ["lípidos", "proteínas globulares", "glúcidos", "vitaminas"], 1, "Algunas son ARN (ribozimas)."],
    ["La parte proteica de una holoenzima es la…", ["coenzima", "apoenzima", "cofactor", "vitamina"], 1, "No activa sola."],
    ["El NAD⁺ transporta…", ["fosfatos", "electrones e hidrógenos", "aminoácidos", "acilos"], 1, "Redox."],
    ["El centro activo está formado por…", ["toda la proteína", "unos pocos aminoácidos", "el cofactor solo", "el sustrato"], 1, "Fijación y catalíticos."],
    ["El modelo actual de unión es el…", ["llave-cerradura", "ajuste inducido", "mosaico fluido", "operón"], 1, "Koshland."],
    ["La ureasa tiene especificidad…", ["absoluta", "de grupo", "estereoquímica", "ninguna"], 0, "Solo urea."],
    ["Con la enzima saturada se alcanza…", ["Km", "Vmax", "pI", "la desnaturalización"], 1, "Todos los centros ocupados."],
    ["Km es la [S] con la que v vale…", ["Vmax", "Vmax/2", "0", "2·Vmax"], 1, "Mide la afinidad."],
    ["Una Km baja indica…", ["poca afinidad", "mucha afinidad", "enzima inhibida", "desnaturalización"], 1, "Poco sustrato basta."],
    ["El pH óptimo de la pepsina es…", ["2", "7", "8", "11"], 0, "Estómago."],
    ["A temperaturas muy altas las enzimas…", ["van más rápido siempre", "se desnaturalizan", "se duplican", "no cambian"], 1, "Proteínas."],
    ["El inhibidor competitivo…", ["se une a otro centro", "compite por el centro activo", "es siempre irreversible", "baja la Vmax"], 1, "Se parece al sustrato."],
    ["El cianuro es un inhibidor…", ["competitivo", "irreversible", "alostérico activador", "coenzima"], 1, "Bloquea la citocromo oxidasa."],
    ["En la retroinhibición, el producto final inhibe…", ["la última enzima", "la primera enzima", "el ADN", "las vitaminas"], 1, "Retroalimentación negativa."],
    ["El pepsinógeno es un…", ["zimógeno", "inhibidor", "cofactor", "vitamina"], 0, "Precursor inactivo."],
    ["Las enzimas que rompen enlaces con agua son…", ["ligasas", "hidrolasas", "isomerasas", "transferasas"], 1, "Amilasa, lipasa."],
    ["Las vitaminas tienen función…", ["energética", "estructural", "reguladora", "de reserva"], 2, "Muchas son coenzimas."],
    ["El escorbuto se debe a falta de vitamina…", ["A", "C", "D", "K"], 1, "Colágeno."],
    ["El raquitismo se debe a falta de vitamina…", ["B₁", "C", "D", "E"], 2, "Absorción de calcio."],
  ],
  examen: [
    ["Vmax = 80, Km = 4 mM, [S] = 4 mM: v =", ["40", "80", "20", "60"], 0, "Vmax/2."],
    ["Vmax = 80, Km = 4 mM, [S] = 12 mM: v =", ["60", "40", "80", "20"], 0, "80·12/16."],
    ["Si un inhibidor sube la Km sin cambiar la Vmax, es…", ["competitivo", "no competitivo", "irreversible", "activador"], 0, "Se vence con más sustrato."],
    ["Las enzimas alostéricas tienen curva…", ["hiperbólica", "sigmoidea", "lineal", "en campana"], 1, "Cooperatividad."],
    ["La ADN ligasa es una…", ["ligasa", "hidrolasa", "liasa", "isomerasa"], 0, "Une con ATP."],
    ["La pelagra se debe a falta de…", ["niacina (B₃)", "tiamina (B₁)", "vitamina A", "vitamina K"], 0, "NAD⁺."],
    ["La vitamina K es necesaria para…", ["la coagulación", "la visión", "el colágeno", "los huesos"], 0, "Recién nacidos."],
    ["La ceguera nocturna se asocia a falta de vitamina…", ["A", "D", "C", "B₁₂"], 0, "Retinal."],
  ],
  feynman: ["Qué hace exactamente una enzima con la energía de activación", "Por qué una enzima sale intacta de la reacción", "Qué significa que una enzima se sature", "Por qué la fiebre muy alta es peligrosa", "Cómo frena una ruta su propio producto final", "Por qué necesitamos tan poca cantidad de vitaminas"],
  mapa: ["ENZIMAS Y VITAMINAS", [["Enzimas", "↓ Ea, específicas, regulables"], ["Mecanismo", "centro activo, E + S ⇌ ES"], ["Cinética", "Km, Vmax, T, pH, inhibidores"], ["Vitaminas", "coenzimas, avitaminosis"]]],
  tarjetas: [
    ["Enzima", "Biocatalizador proteico: ↓ energía de activación."],
    ["Holoenzima", "Apoenzima + cofactor (ion o coenzima)."],
    ["Coenzima", "Molécula orgánica transportadora: NAD⁺, FAD, CoA."],
    ["Centro activo", "Hendidura con aminoácidos de fijación y catalíticos."],
    ["Ajuste inducido", "El centro activo se adapta al sustrato."],
    ["Michaelis-Menten", "v = Vmax·[S]/(Km + [S])."],
    ["Km", "[S] con v = Vmax/2; baja = mucha afinidad."],
    ["Temperatura y pH", "Valor óptimo; fuera, inactivación o desnaturalización."],
    ["Inhibición competitiva", "Compite por el centro activo; ↑ Km."],
    ["Retroinhibición", "El producto final frena la 1.ª enzima."],
    ["Vitaminas hidrosolubles", "B y C; coenzimas; se eliminan por orina."],
    ["Vitaminas liposolubles", "A, D, E, K; se acumulan."],
  ],
  glosario: [
    ["Catalizador", "Sustancia que acelera una reacción sin consumirse."],
    ["Energía de activación", "Energía mínima para que los reactivos reaccionen."],
    ["Sustrato", "Molécula sobre la que actúa una enzima."],
    ["Apoenzima", "Parte proteica de una holoenzima."],
    ["Cofactor", "Componente no proteico necesario para la actividad de una enzima."],
    ["Coenzima", "Cofactor orgánico que transporta electrones, átomos o grupos."],
    ["Centro activo", "Zona de la enzima donde se une y transforma el sustrato."],
    ["Ribozima", "ARN con actividad catalítica."],
    ["Saturación", "Estado en que todos los centros activos están ocupados."],
    ["Isoenzimas", "Formas distintas de una enzima que catalizan la misma reacción."],
    ["Inhibidor", "Sustancia que reduce o anula la actividad de una enzima."],
    ["Enzima alostérica", "Enzima con centros reguladores que modifican su actividad."],
    ["Zimógeno", "Precursor inactivo de una enzima."],
    ["Provitamina", "Precursor que el organismo transforma en vitamina."],
    ["Avitaminosis", "Enfermedad por la falta total de una vitamina."],
    ["Hipervitaminosis", "Trastorno por exceso de una vitamina."],
  ],
  situacion: {
    titulo: "¿Cuál es el mejor detergente? Investigación con enzimas",
    reto: "Vuestro equipo debe comprobar experimentalmente cómo afectan la temperatura y el pH a las enzimas de un detergente biológico y a la catalasa de la patata, y redactar una recomendación de lavado eficiente.",
    pasos: [
      "Medid la actividad de la catalasa de la patata con agua oxigenada a distintas temperaturas (altura de la espuma o volumen de O₂).",
      "Repetid a distintos pH con disoluciones tampón o con vinagre y bicarbonato.",
      "Comparad cómo elimina un detergente biológico y uno no biológico una mancha de huevo a 30 y a 90 °C.",
      "Representad los resultados en gráficas y determinad la temperatura y el pH óptimos.",
      "Redactad un consejo de lavado que tenga en cuenta la eficacia y el ahorro energético.",
    ],
    producto: "Un informe con gráficas y una ficha de recomendaciones de lavado.",
    evaluacion: ["Se controlan las variables y hay controles sin enzima.", "Las gráficas se construyen e interpretan correctamente.", "Se explica la desnaturalización y el pH óptimo.", "La recomendación es razonada y sostenible."],
  },
  familias: [
    "Echad unas gotas de agua oxigenada sobre una rodaja de patata cruda y otra cocida: ¿por qué solo burbujea una?",
    "Leed en la etiqueta del detergente si lleva enzimas y a qué temperatura recomienda lavar.",
    "Masticad pan durante un minuto y notad si se vuelve dulce: es la amilasa de la saliva.",
    "Revisad qué frutas y verduras de la compra semanal aportan vitamina C.",
  ],
  saberes: "bloque «Las biomoléculas» y «Metabolismo»: las enzimas como biocatalizadores, estructura (apoenzima, cofactores y coenzimas), centro activo y mecanismo de acción; especificidad; cinética enzimática (Km y Vmax); factores que afectan a la actividad enzimática, inhibición y regulación; clasificación; las vitaminas como coenzimas y su importancia en la salud.",
  ideas: [
    "Práctica de la catalasa con patata y agua oxigenada variando temperatura y pH.",
    "Hidrólisis del almidón por la amilasa salival seguida con lugol a distintas temperaturas.",
    "Simulación de la cinética de Michaelis-Menten con una hoja de cálculo o con la «enzima humana» (alumnos que abren pinzas).",
    "Debate sobre los suplementos vitamínicos a partir de datos de la AESAN y la OMS.",
  ],
  fuentes: [
    { t: "Enzyme Commission (IUBMB): nomenclatura de enzimas", url: "https://iubmb.qmul.ac.uk/enzyme/" },
  ],
});
