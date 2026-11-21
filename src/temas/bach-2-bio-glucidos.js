// Biología 2º Bachillerato · Glúcidos (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, anillo, cadena, arbol } = require("./_bach2-bio");

// Proyección de Fischer de la D-glucosa y la D-fructosa.
const fischer = (x, tit, filas, c) => `${T(x, 18, tit, { fs: 12, b: true, c })}
  <path d="M${x} 30 V ${30 + (filas.length - 1) * 24}" stroke="var(--ink)" stroke-width="2"/>
  ${filas.map(([i, d, cen], k) => { const y = 30 + k * 24; return `${i ? `<path d="M${x - 30} ${y} H ${x + 30}" stroke="var(--ink)" stroke-width="1.6"/>${T(x - 33, y + 4, i, { fs: 10, a: "end" })}${T(x + 33, y + 4, d, { fs: 10, a: "start" })}` : ""}<rect x="${x - 21}" y="${y - 9}" width="42" height="18" rx="5" fill="var(--card)" stroke="${c}"/>${T(x, y + 4, cen, { fs: 10, b: true, c })}`; }).join("")}`;
const fischerSVG = marco("Proyecciones de Fischer de la D-glucosa (aldohexosa) y la D-fructosa (cetohexosa): el OH del penúltimo carbono a la derecha indica la serie D", `
  ${fischer(70, "D-glucosa", [["", "", "CHO"], ["H", "OH", "C2"], ["HO", "H", "C3"], ["H", "OH", "C4"], ["H", "OH", "C5"], ["", "", "CH₂OH"]], "var(--pen)")}
  ${fischer(190, "D-fructosa", [["", "", "CH₂OH"], ["", "", "C=O"], ["HO", "H", "C3"], ["H", "OH", "C4"], ["H", "OH", "C5"], ["", "", "CH₂OH"]], "var(--red)")}
  ${T(130, 176, "OH del C5 a la derecha → serie D", { fs: 11, b: true, c: "var(--leaf)" })}`);

// Ciclación de la glucosa: forma lineal → anómeros α y β.
const ciclaSVG = marco("Ciclación de la glucosa: el grupo aldehído del C1 reacciona con el OH del C5 y forma un anillo de piranosa; el nuevo OH del C1 puede quedar abajo (α) o arriba (β)", `
  <defs><marker id="cy1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  ${anillo(66, 90, 40, "var(--pen)", [[0, "C1"], [5, "O"], [3, "C4"]])}
  ${anillo(194, 90, 40, "var(--red)", [[0, "C1"], [5, "O"], [3, "C4"]])}
  <path d="M100 98 V 122" stroke="var(--pen)" stroke-width="2"/>${T(100, 134, "OH", { fs: 11, b: true, c: "var(--pen)" })}
  <path d="M228 82 V 58" stroke="var(--red)" stroke-width="2"/>${T(228, 52, "OH", { fs: 11, b: true, c: "var(--red)" })}
  ${T(66, 30, "α-D-glucopiranosa", { fs: 11, b: true, c: "var(--pen)" })}${T(194, 30, "β-D-glucopiranosa", { fs: 11, b: true, c: "var(--red)" })}
  <path d="M116 90 H 144" stroke="var(--muted)" stroke-width="2" marker-end="url(#cy1)"/><path d="M144 98 H 116" stroke="var(--muted)" stroke-width="2" marker-end="url(#cy1)"/>
  ${T(130, 162, "OH del C1 abajo: α · arriba: β", { fs: 11, b: true })}${T(130, 176, "en agua: 36 % α y 64 % β", { fs: 10, c: "var(--muted)" })}`);

// Enlace O-glucosídico entre dos glucosas (maltosa).
const enlaceSVG = marco("Formación del enlace O-glucosídico α(1→4) entre dos glucosas para dar maltosa, con liberación de una molécula de agua", `
  ${anillo(62, 84, 42, "var(--pen)", [[0, "C1"], [5, "O"]])}${anillo(196, 84, 42, "var(--pen)", [[3, "C4"], [5, "O"]])}
  <path d="M98 94 L 120 116 L 136 116 L 158 94" fill="none" stroke="var(--red)" stroke-width="3"/>
  <circle cx="128" cy="116" r="9" fill="var(--red)"/>${T(128, 120, "O", { fs: 11, b: true, c: "#fff" })}
  ${T(128, 30, "Glucosa + Glucosa", { fs: 12, b: true })}${T(128, 146, "enlace α(1→4)", { fs: 12, b: true, c: "var(--red)" })}
  ${T(128, 170, "maltosa + H₂O (condensación)", { fs: 11, b: true, c: "var(--muted)" })}`);

// Almidón (helicoidal y ramificado) frente a celulosa (cadenas rectas paralelas).
const polSVG = marco("Almidón y glucógeno forman hélices ramificadas con enlaces alfa; la celulosa forma cadenas rectas unidas por puentes de hidrógeno en microfibrillas", `
  ${T(65, 18, "Almidón / glucógeno", { fs: 11, b: true, c: "var(--pen)" })}
  <path d="M20 60 q 10 -20 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M60 60 q -2 22 -18 40 q -10 14 -2 34" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M100 60 q 2 30 12 50" fill="none" stroke="var(--pen)" stroke-width="3"/>
  ${T(65, 162, "α(1→4) y ramas α(1→6)", { fs: 10, b: true, c: "var(--pen)" })}
  ${T(195, 18, "Celulosa", { fs: 11, b: true, c: "var(--leaf)" })}
  ${[40, 64, 88, 112, 136].map((y) => `<path d="M140 ${y} H 250" stroke="var(--leaf)" stroke-width="3.5"/>`).join("")}
  ${[52, 76, 100, 124].map((y) => [160, 190, 220].map((x) => `<path d="M${x} ${y - 9} V ${y + 9}" stroke="var(--leaf)" stroke-width="1.2" stroke-dasharray="2 2"/>`).join("")).join("")}
  ${T(195, 162, "β(1→4), cadenas rectas", { fs: 10, b: true, c: "var(--leaf)" })}`);

module.exports = tema({
  titulo: "Glúcidos",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir los glúcidos y clasificarlos en monosacáridos, oligosacáridos y polisacáridos",
    "Nombrar y representar monosacáridos con la proyección de Fischer y la de Haworth",
    "Explicar la isomería de los monosacáridos, la serie D o L, la actividad óptica y la ciclación con sus anómeros",
    "Describir la formación del enlace O-glucosídico y las propiedades de los principales disacáridos",
    "Relacionar la estructura de los polisacáridos de reserva y estructurales con su función",
    "Valorar el papel de los glúcidos en la dieta y en la salud (fibra, intolerancia a la lactosa, diabetes)",
  ],
  claves: ["glúcido", "monosacárido", "aldosa", "cetosa", "carbono asimétrico", "enantiómero", "serie D y L", "anómero", "proyección de Haworth", "poder reductor", "enlace O-glucosídico", "disacárido", "almidón", "glucógeno", "celulosa", "quitina"],
  pregunta: {
    texto: "El almidón de la patata y la celulosa del papel están hechos de glucosa. ¿Por qué podemos digerir uno y no el otro?",
    respuesta: "Porque las glucosas están unidas de forma distinta. En el almidón las une un <mark>enlace α(1→4)</mark>, que nuestras amilasas reconocen y rompen. En la celulosa las une un <mark>enlace β(1→4)</mark>, que obliga a cada glucosa a girar 180° respecto a la anterior: forma cadenas rectas unidas por puentes de hidrógeno. No tenemos celulasas, así que la celulosa atraviesa el intestino como <b>fibra</b>. Las vacas sí la aprovechan gracias a las bacterias de su panza.",
  },
  lectura: {
    titulo: "Una pastilla de azúcar en la lengua de Fischer",
    html: `<p>A finales del siglo XIX los químicos sabían que la glucosa, la fructosa y la galactosa tenían la misma fórmula, C₆H₁₂O₆, pero eran sustancias distintas: no sabían en qué se diferenciaban. El alemán Emil Fischer dedicó diez años a resolver el enigma. Trabajaba con derivados que olían fatal y que le provocaron una intoxicación crónica, pero en 1891 logró deducir la disposición espacial de cada grupo –OH alrededor de los carbonos de la glucosa. Para representarla en un papel inventó una proyección que todavía usamos: la proyección de Fischer. Recibió el Premio Nobel de Química en 1902.</p><p>Hoy sabemos que pequeñas diferencias en la orientación de un solo –OH separan una molécula que alimenta el cerebro de otra que no podemos digerir, o un azúcar que toleramos de otro que provoca molestias intestinales a millones de personas. En este tema conocerás los glúcidos, las biomoléculas más abundantes de la Tierra: la celulosa de las plantas es el compuesto orgánico más abundante del planeta. Aprenderás a leer sus fórmulas, a entender por qué unos son dulces y otros no, y por qué la forma en que se encadenan decide si sirven de combustible o de material de construcción.</p>`,
  },
  bloques: [
    { h: "Concepto y clasificación de los glúcidos", p: [
      "Los <mark>glúcidos</mark> son biomoléculas orgánicas formadas por C, H y O, a veces con N, S o P. Químicamente son <b>polihidroxialdehídos</b> o <b>polihidroxicetonas</b>: cadenas de carbono con un grupo carbonilo (aldehído o cetona) y grupos hidroxilo (–OH) en los demás carbonos, o bien moléculas formadas por la unión de varias de ellas. Muchos responden a la fórmula (CH₂O)ₙ, por lo que antiguamente se llamaron «hidratos de carbono» o carbohidratos, un nombre incorrecto porque no son carbono hidratado y algunos no siguen esa fórmula.",
      "Se clasifican según su complejidad. Los <b>monosacáridos</b> u osas son los más sencillos y no pueden hidrolizarse en otros más simples: glucosa, fructosa, ribosa. Los <b>ósidos</b> están formados por la unión de monosacáridos y se dividen en <b>holósidos</b>, formados solo por monosacáridos, y <b>heterósidos</b>, que contienen además otra molécula no glucídica. Los holósidos incluyen los <b>oligosacáridos</b> (de 2 a 10 monosacáridos; los más importantes son los disacáridos) y los <b>polisacáridos</b> (más de 10, a menudo miles), que pueden ser homopolisacáridos, de un solo tipo de monosacárido, o heteropolisacáridos.",
    ], svg: arbol("Clasificación de los glúcidos", "GLÚCIDOS", [["Monosacáridos", "glucosa, fructosa, ribosa"], ["Oligosacáridos", "de 2 a 10: sacarosa, lactosa"], ["Polisacáridos", "más de 10: almidón, celulosa"]]), v: ["glu-a", "Carbohidratos: qué son, funciones y ejemplos"] },
    { h: "Los monosacáridos: estructura y nomenclatura", p: [
      "Los <mark>monosacáridos</mark> son sólidos blancos, cristalinos, solubles en agua y de sabor dulce. Tienen de 3 a 7 átomos de carbono. Si el grupo carbonilo está en el carbono 1 (grupo aldehído, –CHO), el monosacárido es una <b>aldosa</b>; si está en el carbono 2 (grupo cetona, C=O), es una <b>cetosa</b>. Según el número de carbonos se llaman triosas (3), tetrosas (4), pentosas (5), hexosas (6) y heptosas (7). Los dos criterios se combinan: la glucosa es una aldohexosa y la fructosa, una cetohexosa.",
      "Para representarlos en el plano se usa la <b>proyección de Fischer</b>: la cadena de carbonos se dibuja en vertical, con el carbono más oxidado (el carbonilo) arriba y numerado como C1 (en las cetosas el carbonilo queda en el C2). Los grupos –H y –OH se dibujan a izquierda y derecha de cada carbono. Por convenio, las líneas horizontales representan enlaces que salen del papel hacia el observador y las verticales, enlaces que se alejan de él. Los monosacáridos más sencillos son las triosas: el <b>gliceraldehído</b> (aldosa) y la <b>dihidroxiacetona</b> (cetosa), intermediarios del metabolismo de la glucosa.",
    ], svg: fischerSVG },
    { h: "Isomería y actividad óptica", p: [
      "Un <mark>carbono asimétrico</mark> o quiral es el que está unido a cuatro grupos distintos. Todos los monosacáridos, salvo la dihidroxiacetona, tienen al menos uno, lo que origina <b>estereoisómeros</b>: moléculas con la misma fórmula y los mismos enlaces pero distinta disposición en el espacio. Con n carbonos asimétricos hay 2ⁿ estereoisómeros posibles: una aldohexosa tiene 4 carbonos asimétricos y, por tanto, 16 estereoisómeros. Dos estereoisómeros que son imágenes especulares no superponibles, como nuestras manos, son <b>enantiómeros</b>. Los que solo se diferencian en la posición del –OH de un único carbono se llaman <b>epímeros</b>, como la glucosa y la galactosa (en el C4).",
      "Para nombrar los enantiómeros se toma como referencia el carbono asimétrico más alejado del carbonilo: si su –OH está a la derecha en la proyección de Fischer, el monosacárido pertenece a la <b>serie D</b>; si está a la izquierda, a la <b>serie L</b>. Casi todos los monosacáridos de los seres vivos son de la serie D. Además, las disoluciones de los estereoisómeros desvían el plano de la luz polarizada: es la <b>actividad óptica</b>. Si lo desvían a la derecha son <b>dextrógiros</b> (+) y si lo desvían a la izquierda, <b>levógiros</b> (−). Ser D o L no tiene relación con ser (+) o (−): la D-fructosa es levógira.",
    ], svg: L5.compara("Dos tipos de isomería de los monosacáridos", ["Enantiómeros", ["imagen especular", "D-glucosa / L-glucosa", "OH del C5 cambia", "D o L"]], ["Epímeros", ["difieren en un solo C", "glucosa / galactosa", "OH del C4", "no son imágenes"]], "var(--pen)", "var(--red)") },
    { h: "La ciclación de los monosacáridos", p: [
      "En disolución acuosa, las pentosas y las hexosas no están en forma lineal sino <b>cíclica</b>. El grupo carbonilo reacciona con un grupo –OH de la misma molécula y forma un enlace <b>hemiacetal</b> (en las aldosas) o <b>hemicetal</b> (en las cetosas). En la glucosa, el C1 se une al O del C5 y se forma un anillo hexagonal parecido al pirano, llamado <b>piranosa</b>; en la fructosa, el C2 se une al O del C5 y se forma un anillo pentagonal parecido al furano, llamado <b>furanosa</b>. Para representar los anillos se usa la <mark>proyección de Haworth</mark>: el anillo se dibuja plano y perpendicular al papel, y los grupos que en Fischer estaban a la derecha quedan abajo.",
      "Al ciclarse, el carbono del carbonilo se convierte en un nuevo carbono asimétrico, llamado <b>carbono anomérico</b>, y aparecen dos isómeros, los <mark>anómeros</mark>. En el anómero <b>α</b>, el –OH del carbono anomérico queda hacia abajo, en el lado opuesto al –CH₂OH; en el <b>β</b>, hacia arriba. En disolución ambos se interconvierten (mutarrotación) y se alcanza un equilibrio con un 36 % de α y un 64 % de β. Esta diferencia parece mínima, pero decide la forma de los polisacáridos y si podemos digerirlos o no. En realidad el anillo no es plano: adopta formas de <b>silla</b> o de <b>bote</b>, más estables.",
    ], svg: ciclaSVG, v: ["glu-b", "Ciclación de la glucosa"] },
    { h: "Monosacáridos de interés biológico", p: [
      "Entre las pentosas, la <b>D-ribosa</b> forma parte del ARN, del ATP y de coenzimas como el NAD⁺ y el FAD; la <b>D-desoxirribosa</b>, que tiene un oxígeno menos en el C2, forma parte del ADN; y la <b>D-ribulosa</b>, una cetopentosa, fija el CO₂ en la fotosíntesis. Entre las hexosas, la <mark>D-glucosa</mark> es el monosacárido más abundante y el principal combustible de las células: la usan todas para obtener energía y es casi el único que puede usar el cerebro. Circula en la sangre a unos 0,9 g/L, en las plantas se encuentra en frutos como la uva y es el monómero del almidón, el glucógeno y la celulosa.",
      "La <b>D-fructosa</b> es el azúcar de la fruta y de la miel; es el monosacárido más dulce y en el hígado se transforma en glucosa. Con la glucosa forma la sacarosa, y es el azúcar del semen, donde da energía a los espermatozoides. La <b>D-galactosa</b>, epímero de la glucosa, forma parte de la lactosa de la leche y de glucolípidos del sistema nervioso; también se transforma en glucosa en el hígado. Algunas personas no pueden hacerlo por un defecto enzimático hereditario, la <b>galactosemia</b>, que obliga a eliminar la leche de la dieta. Existen derivados importantes, como la glucosamina de la quitina o el ácido glucurónico de los heteropolisacáridos.",
    ], svg: L6.tabla("Monosacáridos de interés", ["Monosacárido", "Tipo", "Dónde"], [["Gliceraldehído", "aldotriosa", "glucólisis"], ["Ribosa", "aldopentosa", "ARN, ATP"], ["Desoxirribosa", "aldopentosa", "ADN"], ["Glucosa", "aldohexosa", "sangre, almidón"], ["Fructosa", "cetohexosa", "fruta, miel"]]) },
    { h: "Propiedades de los monosacáridos: el poder reductor", p: [
      "El grupo carbonilo de los monosacáridos puede oxidarse a grupo carboxilo cediendo electrones a otra sustancia, que se reduce. Por eso todos los monosacáridos tienen <mark>poder reductor</mark>. Esta propiedad se pone de manifiesto con el <b>reactivo de Fehling</b>, una disolución azul de sulfato de cobre(II) en medio básico: al calentarla con un azúcar reductor, el Cu²⁺ se reduce a Cu⁺ y se forma un precipitado <b>rojo ladrillo</b> de óxido de cobre(I). El reactivo de Benedict funciona igual y se usó durante décadas para detectar glucosa en la orina de los diabéticos.",
      "En los disacáridos y polisacáridos, el poder reductor depende de que quede libre algún carbono anomérico. Otras propiedades de los monosacáridos son su <b>dulzor</b>, su <b>solubilidad</b> en agua (por los numerosos –OH que forman puentes de hidrógeno) y la capacidad de unirse a otras moléculas: con alcoholes forman <b>enlaces O-glucosídicos</b>, con aminas forman <b>enlaces N-glucosídicos</b> (como en los nucleótidos), y con el fosfato forman ésteres fosfóricos como la glucosa-6-fosfato, el primer intermediario de su metabolismo dentro de la célula. La unión de la glucosa a la hemoglobina (hemoglobina glicosilada) es la base de un análisis que vigila la diabetes.",
    ], svg: L5.pasos("Prueba de Fehling para azúcares reductores", ["Muestra + Fehling A y B (azul)", "Calentar al baño maría", "Rojo ladrillo: azúcar reductor (Cu₂O)", "Sigue azul: no reductor (sacarosa)"], "var(--pen)") },
    { h: "El enlace O-glucosídico", p: [
      "Los monosacáridos se unen entre sí mediante el <mark>enlace O-glucosídico</mark>, que se forma entre el –OH del carbono anomérico de un monosacárido y un –OH de otro, con liberación de una molécula de agua: es una reacción de <b>condensación</b>. La reacción inversa, la <b>hidrólisis</b>, rompe el enlace consumiendo una molécula de agua; en las células la catalizan enzimas específicas, y en el laboratorio se consigue con ácidos y calor.",
      "Para nombrar el enlace se indica si el carbono anomérico que participa es α o β y qué carbonos se unen: por ejemplo, α(1→4) significa que el C1 de una glucosa α se une al C4 de la siguiente. El enlace puede ser <b>monocarbonílico</b>, si solo interviene el carbono anomérico del primer monosacárido, de modo que el del segundo queda libre y el disacárido conserva el poder reductor; o <b>dicarbonílico</b>, si intervienen los dos carbonos anoméricos y el disacárido pierde el poder reductor. Las enzimas que rompen estos enlaces son muy específicas: una enzima que hidroliza un enlace α no puede romper un enlace β, lo que tiene enormes consecuencias en la nutrición.",
    ], svg: enlaceSVG, v: ["glu-c", "El enlace O-glucosídico"] },
    { h: "Los disacáridos", p: [
      "Los <mark>disacáridos</mark> son los oligosacáridos más importantes: dos monosacáridos unidos por un enlace O-glucosídico. Son dulces, solubles y cristalizables, y deben hidrolizarse en el intestino para absorberse. La <b>maltosa</b> (glucosa α(1→4) glucosa) se obtiene al hidrolizar el almidón; aparece en la germinación de la cebada y se usa para fabricar cerveza. La <b>lactosa</b> (galactosa β(1→4) glucosa) es el azúcar de la leche de los mamíferos. La <b>celobiosa</b> (glucosa β(1→4) glucosa) se obtiene al hidrolizar la celulosa. Las tres son reductoras.",
      "La <b>sacarosa</b> (glucosa α(1→2)β fructosa) es el azúcar de mesa, que se extrae de la caña de azúcar y de la remolacha. Es la forma en que las plantas transportan los azúcares por el floema. Su enlace es dicarbonílico, así que <b>no es reductora</b>: no da positiva la prueba de Fehling hasta que se hidroliza. Al hidrolizarla se obtiene una mezcla de glucosa y fructosa llamada azúcar invertido, presente en la miel. La <b>intolerancia a la lactosa</b> aparece en las personas que dejan de producir lactasa tras la lactancia: la lactosa sin digerir llega al colon, donde las bacterias la fermentan y producen gases y diarrea. Afecta a alrededor de dos tercios de la población mundial.",
    ], svg: L6.tabla("Principales disacáridos", ["Disacárido", "Composición y enlace", "Reductor"], [["Maltosa", "Glc α(1→4) Glc", "sí"], ["Lactosa", "Gal β(1→4) Glc", "sí"], ["Celobiosa", "Glc β(1→4) Glc", "sí"], ["Sacarosa", "Glc α(1→2)β Fru", "no"]]) },
    { h: "Polisacáridos de reserva", p: [
      "Los <mark>polisacáridos</mark> son polímeros de muchos monosacáridos unidos por enlaces O-glucosídicos. No son dulces, no son reductores (o lo son de forma inapreciable) y son insolubles o forman dispersiones coloidales. Los de <b>reserva</b> almacenan glucosa con enlaces α, fáciles de hidrolizar cuando la célula necesita energía. Guardarla en forma de polímero tiene una ventaja: un polisacárido apenas ejerce presión osmótica, mientras que miles de glucosas libres harían que la célula se hinchara de agua.",
      "El <b>almidón</b> es la reserva de las plantas y se acumula en gránulos en los amiloplastos de semillas, raíces y tubérculos (trigo, arroz, patata). Es una mezcla de <b>amilosa</b> (un 20-30 %), una cadena sin ramificar de glucosas unidas por enlaces α(1→4) que se enrolla en hélice, y <b>amilopectina</b> (70-80 %), con ramificaciones α(1→6) cada 15-30 glucosas. La amilosa da un color azul oscuro con el <b>lugol</b>, porque el yodo se aloja dentro de la hélice. El <b>glucógeno</b> es la reserva de los animales y los hongos, y se almacena en el hígado y los músculos. Es parecido a la amilopectina pero más ramificado (cada 8-12 glucosas), lo que permite liberar glucosa muy deprisa desde muchos extremos a la vez.",
    ], svg: polSVG, v: ["glu-d", "Almidón: amilosa y amilopectina"] },
    { h: "Polisacáridos estructurales", p: [
      "La <mark>celulosa</mark> es un polímero lineal de glucosas unidas por enlaces <b>β(1→4)</b>. Por la orientación β, cada glucosa está girada 180° respecto a la anterior y la cadena es recta. Numerosas cadenas paralelas se unen por puentes de hidrógeno y forman <b>microfibrillas</b>, que se agrupan en fibras más resistentes que un hilo de acero del mismo grosor. Es el principal componente de la <b>pared celular</b> de las plantas y la molécula orgánica más abundante de la Tierra: la madera, el algodón y el papel son casi celulosa pura. Los animales no tienen celulasas, pero los rumiantes y las termitas la digieren gracias a microorganismos simbiontes.",
      "En los humanos, la celulosa forma parte de la <b>fibra alimentaria</b>: no se digiere, pero aumenta el volumen de las heces, facilita el tránsito intestinal y alimenta a la microbiota del colon. La <b>quitina</b> es un polímero de N-acetilglucosamina con enlaces β(1→4); forma el exoesqueleto de los artrópodos, donde se endurece con sales cálcicas, y la pared celular de los hongos. Otros polisacáridos estructurales son la <b>pectina</b> y la <b>hemicelulosa</b>, que forman la matriz de la pared vegetal; la pectina se usa en las mermeladas como gelificante.",
    ], svg: L5.compara("Polisacáridos de reserva y estructurales", ["Reserva", ["enlaces α", "helicoidales", "almidón, glucógeno", "digeribles"]], ["Estructurales", ["enlaces β", "cadenas rectas", "celulosa, quitina", "muy resistentes"]], "var(--pen)", "var(--leaf)") },
    { h: "Heteropolisacáridos y glúcidos conjugados", p: [
      "Los <b>heteropolisacáridos</b> están formados por más de un tipo de monosacárido o de sus derivados. Además de la pectina y la hemicelulosa, destacan las <b>gomas</b> y los <b>mucílagos</b> vegetales, que cierran heridas y retienen agua, y el <b>agar-agar</b>, extraído de algas rojas, que se usa como gelificante en alimentación y para preparar medios de cultivo de bacterias. En los animales son fundamentales los <b>mucopolisacáridos</b> o glucosaminoglucanos: el <b>ácido hialurónico</b> lubrica las articulaciones y forma parte del humor vítreo del ojo; el <b>condroitín sulfato</b> da resistencia a los cartílagos; y la <b>heparina</b> es un anticoagulante natural.",
      "Los <mark>heterósidos</mark> son glúcidos unidos a moléculas no glucídicas. Los <b>glucolípidos</b> y las <b>glucoproteínas</b> se sitúan en la cara externa de la membrana plasmática y forman el <b>glucocáliz</b>, que actúa como una huella dactilar de la célula: permite el reconocimiento celular, la adhesión entre células y la unión de hormonas y virus. Los antígenos de los <b>grupos sanguíneos</b> A, B y 0 son oligosacáridos de la membrana de los glóbulos rojos que se diferencian en un solo monosacárido terminal. Muchas hormonas, anticuerpos y enzimas son también glucoproteínas.",
    ], svg: L6.tabla("Heteropolisacáridos y conjugados", ["Molécula", "Función"], [["Ác. hialurónico", "lubrica articulaciones"], ["Heparina", "anticoagulante"], ["Agar", "gelificante, cultivos"], ["Glucoproteínas", "glucocáliz, anticuerpos"], ["Antígenos A y B", "grupos sanguíneos"]]) },
    { h: "Funciones de los glúcidos y salud", p: [
      "En resumen, los glúcidos tienen tres grandes funciones. La <b>energética</b>: la oxidación de un gramo de glúcidos proporciona unas 4 kcal (17 kJ), y la glucosa es el combustible inmediato de las células, que la almacenan como almidón o glucógeno. La <b>estructural</b>: celulosa, quitina, pectina, y la ribosa y la desoxirribosa de los ácidos nucleicos. Y la de <b>reconocimiento celular</b>, a través del glucocáliz. Otros glúcidos tienen funciones especiales, como los antibióticos glucídicos (estreptomicina) o los cardiotónicos (digitalina).",
      "Las recomendaciones nutricionales aconsejan que los glúcidos aporten la mitad de la energía de la dieta, sobre todo en forma de <b>glúcidos complejos</b> (almidón de cereales integrales, legumbres) y de <b>fibra</b> (unos 25-30 g al día), y que los <b>azúcares libres</b> no superen el 10 % (la OMS sugiere incluso el 5 %). Su exceso se asocia con la caries, la obesidad y la <mark>diabetes tipo 2</mark>, en la que las células dejan de responder a la insulina y la glucosa se acumula en la sangre. El <b>índice glucémico</b> mide lo rápido que un alimento eleva la glucemia: el pan blanco lo hace mucho más deprisa que las lentejas, porque su almidón se hidroliza muy rápidamente.",
    ], svg: L6.radial("Funciones de los glúcidos", "GLÚCIDOS", ["Energía: 4 kcal/g", "Reserva", "Estructural", "Ácidos nucleicos", "Reconocimiento", "Fibra"], "var(--sun)") },
  ],
  figura: { titulo: "Glúcidos", items: [["Monosacáridos", "aldosas, cetosas", "D/L, α/β", "poder reductor"], ["Enlace", "O-glucosídico", "condensación", "hidrólisis"], ["Disacáridos", "maltosa, lactosa", "sacarosa (no red.)", "celobiosa"], ["Polisacáridos", "almidón, glucógeno", "celulosa β(1→4)", "quitina"]] },
  video: ["glu-a", "Carbohidratos: qué son, funciones y ejemplos"],
  ejemplos: [
    ["Clasifica la D-ribulosa (5 C, grupo cetona en el C2) y la D-galactosa (6 C, grupo aldehído).", ["Ribulosa: 5 C → pentosa; cetona → cetosa.", "Galactosa: 6 C → hexosa; aldehído → aldosa."], "Ribulosa: cetopentosa. Galactosa: aldohexosa."],
    ["¿Cuántos estereoisómeros tiene una aldopentosa? ¿Cuántos son de la serie D?", ["Una aldopentosa tiene 3 carbonos asimétricos (C2, C3, C4).", "2³ = 8 estereoisómeros.", "La mitad tiene el OH del C4 a la derecha."], "8 estereoisómeros: 4 de la serie D y 4 de la serie L."],
    ["Al ciclarse, ¿qué anillo forma la glucosa y cuál la fructosa? ¿Qué carbono es el anomérico en cada caso?", ["Glucosa: C1 (aldehído) + O del C5 → anillo de 6 lados (piranosa).", "Fructosa: C2 (cetona) + O del C5 → anillo de 5 lados (furanosa)."], "Glucopiranosa (anomérico C1) y fructofuranosa (anomérico C2)."],
    ["Se hacen pruebas de Fehling y de lugol a cuatro tubos: glucosa, sacarosa, almidón y sacarosa hervida con HCl. Predice los resultados.", ["Glucosa: Fehling + (reductora), lugol −.", "Sacarosa: Fehling − (enlace dicarbonílico), lugol −.", "Almidón: Fehling −, lugol + (azul-violeta).", "Sacarosa hidrolizada: glucosa + fructosa libres → Fehling +."], "Solo dan Fehling positivo la glucosa y la sacarosa hidrolizada; solo el almidón da lugol positivo."],
    ["Escribe la hidrólisis de la lactosa e indica dónde ocurre y qué enzima interviene.", ["Lactosa + H₂O → galactosa + glucosa.", "Rompe el enlace β(1→4).", "Ocurre en el intestino delgado gracias a la lactasa."], "Lactosa + H₂O → D-galactosa + D-glucosa (lactasa, intestino delgado)."],
    ["Explica por qué el glucógeno está tan ramificado y qué ventaja tiene para un músculo que empieza a correr.", ["Las enzimas liberan glucosa desde los extremos no reductores.", "Más ramificaciones → muchos más extremos.", "Se liberan muchas glucosas a la vez."], "La alta ramificación permite movilizar glucosa muy deprisa cuando la demanda de energía aumenta de golpe."],
  ],
  errores: [
    "Llamar «hidratos de carbono» a todos los glúcidos como si fueran carbono con agua: son polihidroxialdehídos o polihidroxicetonas.",
    "Pensar que D significa dextrógiro: D y L dependen de la posición del –OH; (+) y (−), de la desviación de la luz.",
    "Confundir enantiómeros con anómeros: los anómeros solo difieren en el –OH del carbono anomérico tras la ciclación.",
    "Decir que la sacarosa es reductora: su enlace une los dos carbonos anoméricos y no da positiva la prueba de Fehling.",
    "Creer que el almidón y la celulosa se diferencian en sus monómeros: ambos son glucosa; cambia el enlace (α o β).",
    "Pensar que la fibra no sirve para nada porque no se digiere: regula el tránsito y alimenta a la microbiota.",
  ],
  ejercicios: {
    b: [
      ["Define glúcido y explica por qué no es correcto llamarlos «hidratos de carbono».", "Polihidroxialdehídos o polihidroxicetonas, o moléculas formadas por su unión. No son carbono hidratado y no todos cumplen (CH₂O)ₙ."],
      ["Clasifica los glúcidos y pon un ejemplo de cada grupo.", "Monosacáridos (glucosa), oligosacáridos (sacarosa), polisacáridos (almidón) y heterósidos (glucoproteínas)."],
      ["Diferencia una aldosa de una cetosa.", "La aldosa tiene un grupo aldehído en el C1; la cetosa, un grupo cetona, normalmente en el C2."],
      ["¿Qué es un carbono asimétrico?", "Un carbono unido a cuatro grupos diferentes."],
      ["Indica cómo se sabe si un monosacárido es de la serie D o L.", "Por la posición del –OH del carbono asimétrico más alejado del carbonilo en la proyección de Fischer: derecha D, izquierda L."],
      ["¿Qué son los anómeros α y β?", "Isómeros que aparecen al ciclarse el monosacárido; difieren en la posición del –OH del carbono anomérico (α abajo, β arriba en Haworth)."],
      ["Cita dos pentosas y una función de cada una.", "Ribosa: ARN y ATP. Desoxirribosa: ADN. (Ribulosa: fijación del CO₂.)"],
      ["¿Qué es el poder reductor y cómo se detecta?", "Capacidad del grupo carbonilo libre de oxidarse reduciendo otra sustancia; se detecta con el reactivo de Fehling (precipitado rojo ladrillo)."],
      ["Define enlace O-glucosídico.", "Enlace entre el –OH del carbono anomérico de un monosacárido y un –OH de otro, con liberación de agua."],
      ["Indica la composición de la sacarosa, la lactosa y la maltosa.", "Sacarosa: glucosa + fructosa. Lactosa: galactosa + glucosa. Maltosa: glucosa + glucosa."],
      ["¿Qué polisacárido de reserva tienen las plantas y cuál los animales? ¿Dónde se almacenan?", "Plantas: almidón, en amiloplastos de semillas y tubérculos. Animales: glucógeno, en hígado y músculo."],
      ["¿Dónde se encuentra la quitina?", "En el exoesqueleto de los artrópodos y en la pared celular de los hongos."],
    ],
    m: [
      ["Dibuja la D-glucosa en proyección de Fischer y su forma cíclica α en proyección de Haworth.", "Fischer: CHO; H-C-OH; HO-C-H; H-C-OH; H-C-OH; CH₂OH. Haworth: anillo de piranosa con O entre C1 y C5; –OH de C2 y C4 abajo, de C3 arriba, –CH₂OH arriba y –OH del C1 abajo (α)."],
      ["Explica por qué la glucosa y la galactosa son epímeros y no enantiómeros.", "Solo difieren en la configuración de un carbono (C4); los enantiómeros son imágenes especulares y difieren en todos sus carbonos asimétricos."],
      ["¿Cuántos estereoisómeros tiene una aldohexosa y cuántos una cetohexosa? Justifícalo.", "Aldohexosa: 4 C asimétricos → 16. Cetohexosa: 3 C asimétricos → 8."],
      ["La D-fructosa es levógira. ¿Contradice esto que sea de la serie D? Razónalo.", "No: la serie D se refiere a la configuración espacial; el signo de la actividad óptica se mide experimentalmente y no depende de ella."],
      ["Explica por qué la sacarosa no es reductora y la lactosa sí.", "En la sacarosa el enlace α(1→2)β une los dos carbonos anoméricos (dicarbonílico); en la lactosa queda libre el carbono anomérico de la glucosa (monocarbonílico)."],
      ["Describe la estructura de la amilosa y de la amilopectina.", "Amilosa: cadena lineal de glucosas α(1→4) enrollada en hélice. Amilopectina: cadenas α(1→4) con ramificaciones α(1→6) cada 15-30 glucosas."],
      ["Relaciona la estructura de la celulosa con su función.", "Enlaces β(1→4) → cadenas rectas que se unen en paralelo por puentes de H formando microfibrillas muy resistentes: función estructural en la pared celular."],
      ["¿Por qué las células almacenan glucosa en forma de polisacárido y no como glucosa libre?", "Un polímero apenas ejerce presión osmótica; miles de glucosas libres harían entrar agua en la célula y podrían romperla."],
      ["Explica la causa y los síntomas de la intolerancia a la lactosa.", "Falta de lactasa en el intestino; la lactosa sin hidrolizar llega al colon, retiene agua y es fermentada por bacterias: gases, dolor y diarrea."],
      ["¿Qué es el glucocáliz y qué funciones tiene?", "Cubierta de oligosacáridos de glucolípidos y glucoproteínas en la cara externa de la membrana. Reconocimiento celular, adhesión, receptores, protección."],
      ["Explica cómo se diferencia la prueba de Fehling de la del lugol y qué detecta cada una.", "Fehling: azúcares reductores (rojo ladrillo al calentar). Lugol: almidón (azul-violeta por el yodo dentro de la hélice de amilosa)."],
      ["Compara el glucógeno y la amilopectina.", "Ambos son glucosa α(1→4) con ramas α(1→6); el glucógeno está más ramificado (cada 8-12) y es la reserva animal; la amilopectina, vegetal."],
    ],
    a: [
      ["(Tipo PAU) Se dispone de tres tubos sin etiqueta con glucosa, sacarosa y almidón. Diseña un procedimiento con los reactivos de Fehling y lugol y el HCl para identificarlos.", "Lugol: el que se tiñe de azul es almidón. Fehling a los otros dos: el positivo es glucosa. El negativo (sacarosa) se hierve con HCl, se neutraliza y da Fehling positivo tras la hidrólisis."],
      ["(Tipo PAU) Las vacas se alimentan de hierba y obtienen energía de la celulosa, pero las personas no. Explica por qué, citando el tipo de enlace y las enzimas implicadas.", "La celulosa tiene enlaces β(1→4) que solo hidrolizan las celulasas; los humanos no las tenemos. Los rumiantes albergan en el rumen microorganismos que producen celulasas y fermentan la glucosa."],
      ["(Tipo PAU) Indica qué tipo de molécula es cada una y una función: a) glucógeno; b) desoxirribosa; c) quitina; d) lactosa; e) ácido hialurónico.", "a) Homopolisacárido, reserva animal. b) Aldopentosa, forma el ADN. c) Homopolisacárido estructural, exoesqueleto de artrópodos. d) Disacárido, azúcar de la leche. e) Heteropolisacárido, lubrica las articulaciones."],
      ["Una persona con diabetes da positivo en la prueba de Benedict en orina. Explica qué se detecta y por qué aparece.", "Glucosa (azúcar reductor) en la orina. Cuando la glucemia supera unos 1,8 g/L, el riñón no puede reabsorberla toda y se elimina por la orina (glucosuria)."],
      ["La miel contiene «azúcar invertido». Explica qué es, cómo se obtiene y por qué la miel es más dulce que el azúcar de mesa.", "Mezcla equimolar de glucosa y fructosa obtenida por hidrólisis de la sacarosa (invertasa de las abejas). La fructosa es el azúcar más dulce, por eso la mezcla endulza más."],
      ["Los grupos sanguíneos A y B difieren en un solo monosacárido del glucocáliz. Explica por qué un cambio tan pequeño tiene consecuencias en una transfusión.", "El oligosacárido es un antígeno reconocido por anticuerpos específicos: si la sangre donada tiene un antígeno distinto, los anticuerpos del receptor la aglutinan."],
      ["Interpreta: tras comer pan blanco la glucemia sube mucho más rápido que tras comer lentejas, aunque ambos contienen almidón.", "El almidón del pan blanco, sin fibra y muy procesado, se hidroliza rápidamente (índice glucémico alto); las lentejas tienen fibra y almidón menos accesible, que se digiere despacio."],
      ["Explica por qué las semillas guardan almidón y el hígado glucógeno, y no grasas, como reserva a corto plazo.", "Los polisacáridos se movilizan muy deprisa por hidrólisis y dan glucosa, utilizable incluso sin oxígeno. Las grasas almacenan más energía pero se movilizan más despacio y necesitan oxígeno."],
      ["Calcula cuántas kilocalorías aporta una lata de refresco con 35 g de azúcar y qué porcentaje supone del límite recomendado de azúcares libres para una dieta de 2000 kcal.", "35 · 4 = 140 kcal. El límite del 10 % son 200 kcal (50 g): una lata supone el 70 % del máximo diario."],
    ],
  },
  quiz: [
    ["Los glúcidos son polihidroxialdehídos o…", ["polihidroxicetonas", "ácidos grasos", "aminoácidos", "ésteres"], 0, "Con un grupo carbonilo."],
    ["La glucosa es una…", ["cetopentosa", "aldohexosa", "cetohexosa", "aldopentosa"], 1, "6 C y grupo aldehído."],
    ["La fructosa es una…", ["aldohexosa", "cetohexosa", "aldopentosa", "triosa"], 1, "Grupo cetona en el C2."],
    ["Un carbono asimétrico está unido a…", ["4 grupos iguales", "4 grupos distintos", "2 grupos", "un doble enlace"], 1, "Origina estereoisomería."],
    ["La serie D se determina por el –OH…", ["del C1", "del carbono asimétrico más alejado del carbonilo", "del C2", "del carbono anomérico"], 1, "A la derecha en Fischer."],
    ["La glucosa y la galactosa son…", ["enantiómeros", "epímeros", "anómeros", "idénticas"], 1, "Difieren en el C4."],
    ["Al ciclarse la glucosa forma un anillo de…", ["piranosa", "furanosa", "benceno", "porfirina"], 0, "Seis lados (C1-O-C5)."],
    ["En el anómero β, el –OH del C anomérico queda…", ["abajo", "arriba", "en el plano", "no existe"], 1, "Mismo lado que el CH₂OH."],
    ["La desoxirribosa forma parte del…", ["ARN", "ADN", "ATP", "almidón"], 1, "Le falta un O en el C2."],
    ["La prueba de Fehling positiva da color…", ["azul", "rojo ladrillo", "violeta", "verde"], 1, "Cu₂O."],
    ["El enlace O-glucosídico se forma por…", ["hidrólisis", "condensación", "oxidación", "fosforilación"], 1, "Se libera agua."],
    ["No es reductor el disacárido…", ["maltosa", "lactosa", "sacarosa", "celobiosa"], 2, "Enlace dicarbonílico."],
    ["La lactosa está formada por…", ["glucosa + fructosa", "galactosa + glucosa", "glucosa + glucosa", "galactosa + fructosa"], 1, "Enlace β(1→4)."],
    ["La amilosa tiene enlaces…", ["α(1→4)", "β(1→4)", "α(1→6) solo", "β(1→2)"], 0, "Cadena lineal en hélice."],
    ["El lugol tiñe el almidón de…", ["rojo", "azul-violeta", "amarillo", "blanco"], 1, "El yodo entra en la hélice."],
    ["El polisacárido de reserva animal es…", ["almidón", "celulosa", "glucógeno", "quitina"], 2, "En hígado y músculo."],
    ["La celulosa tiene enlaces…", ["α(1→4)", "β(1→4)", "α(1→6)", "peptídicos"], 1, "Cadenas rectas."],
    ["La quitina forma…", ["la pared de las plantas", "el exoesqueleto de los artrópodos", "el cartílago", "el almidón"], 1, "Y la pared de los hongos."],
    ["El ácido hialurónico…", ["lubrica las articulaciones", "es reserva vegetal", "es anticoagulante", "forma el ADN"], 0, "Mucopolisacárido."],
    ["1 g de glúcidos aporta unas…", ["4 kcal", "9 kcal", "1 kcal", "17 kcal"], 0, "17 kJ."],
  ],
  examen: [
    ["Una aldopentosa tiene… estereoisómeros", ["8", "4", "16", "2"], 0, "2³."],
    ["Tras hidrolizar sacarosa, Fehling da…", ["positivo", "negativo", "azul", "violeta"], 0, "Quedan glucosa y fructosa libres."],
    ["La maltosa se obtiene al hidrolizar…", ["celulosa", "almidón", "lactosa", "quitina"], 1, "Por la amilasa."],
    ["La galactosemia impide transformar…", ["glucosa en galactosa", "galactosa en glucosa", "lactosa en almidón", "fructosa en glucosa"], 1, "Defecto hereditario."],
    ["El glucógeno es más ramificado que la amilopectina porque…", ["libera glucosa más deprisa", "es más soluble en grasa", "no tiene enlaces α", "es estructural"], 0, "Más extremos."],
    ["Los antígenos A y B son…", ["proteínas puras", "oligosacáridos de membrana", "lípidos", "ácidos nucleicos"], 1, "Glucocáliz."],
    ["La celulosa se digiere en los rumiantes gracias a…", ["su amilasa", "microorganismos con celulasa", "el ácido del estómago", "la bilis"], 1, "Simbiosis."],
    ["La fibra alimentaria es sobre todo…", ["almidón", "celulosa", "glucosa", "sacarosa"], 1, "No se digiere."],
  ],
  feynman: ["Qué diferencia una aldosa de una cetosa", "Qué significa que la glucosa sea D y por qué no es lo mismo que dextrógira", "Cómo se forma el anillo de la glucosa y qué son α y β", "Por qué la sacarosa no es reductora", "Por qué digerimos el almidón y no la celulosa", "Qué es la intolerancia a la lactosa"],
  mapa: ["GLÚCIDOS", [["Monosacáridos", "aldosas, cetosas, D/L, α/β"], ["Enlace glucosídico", "condensación, hidrólisis"], ["Disacáridos", "maltosa, lactosa, sacarosa"], ["Polisacáridos", "almidón, glucógeno, celulosa"]]],
  tarjetas: [
    ["Glúcido", "Polihidroxialdehído o polihidroxicetona."],
    ["Aldosa / cetosa", "–CHO en C1 / C=O en C2."],
    ["Carbono asimétrico", "Unido a 4 grupos distintos; 2ⁿ estereoisómeros."],
    ["Serie D", "–OH del C asimétrico más lejano a la derecha (Fischer)."],
    ["Epímeros", "Difieren en un solo C: glucosa y galactosa (C4)."],
    ["Anómeros", "α (–OH abajo) y β (–OH arriba) del C anomérico."],
    ["Poder reductor", "Carbonilo libre; Fehling rojo ladrillo."],
    ["Enlace O-glucosídico", "Condensación entre dos –OH; libera H₂O."],
    ["Sacarosa", "Glc α(1→2)β Fru; no reductora."],
    ["Almidón", "Amilosa α(1→4) + amilopectina con ramas α(1→6)."],
    ["Glucógeno", "Reserva animal; ramas cada 8-12 glucosas."],
    ["Celulosa", "Glc β(1→4); cadenas rectas; pared vegetal."],
  ],
  glosario: [
    ["Monosacárido", "Glúcido sencillo que no se puede hidrolizar en otros más simples."],
    ["Aldosa", "Monosacárido con grupo aldehído."],
    ["Cetosa", "Monosacárido con grupo cetona."],
    ["Estereoisómeros", "Moléculas con igual fórmula y enlaces, pero distinta disposición espacial."],
    ["Enantiómeros", "Estereoisómeros que son imágenes especulares no superponibles."],
    ["Epímeros", "Estereoisómeros que difieren en la configuración de un solo carbono."],
    ["Actividad óptica", "Capacidad de desviar el plano de la luz polarizada."],
    ["Carbono anomérico", "Carbono del carbonilo que se vuelve asimétrico al ciclarse el monosacárido."],
    ["Mutarrotación", "Interconversión de los anómeros α y β en disolución."],
    ["Hidrólisis", "Rotura de un enlace con consumo de una molécula de agua."],
    ["Holósido", "Ósido formado solo por monosacáridos."],
    ["Heterósido", "Glúcido unido a una molécula no glucídica."],
    ["Amilasa", "Enzima que hidroliza los enlaces α(1→4) del almidón."],
    ["Glucocáliz", "Cubierta de oligosacáridos de la cara externa de la membrana."],
    ["Fibra alimentaria", "Polisacáridos vegetales que no se digieren, como la celulosa."],
    ["Índice glucémico", "Rapidez con que un alimento eleva la glucosa en sangre."],
  ],
  situacion: {
    titulo: "Detectives del azúcar: ¿qué hay en lo que comemos?",
    reto: "Vuestro equipo debe analizar en el laboratorio varios alimentos (leche, zumo, pan, patata, refresco, miel y edulcorante) para identificar qué glúcidos contienen y elaborar una guía de consumo responsable de azúcares.",
    pasos: [
      "Preparad extractos de cada alimento y haced las pruebas de Fehling y de lugol, con controles positivos y negativos.",
      "Hidrolizad con HCl los que den Fehling negativo y repetid la prueba para detectar disacáridos no reductores.",
      "Leed las etiquetas nutricionales y calculad los gramos de azúcares libres por ración.",
      "Comparad los resultados con las recomendaciones de la OMS y de la AESAN.",
      "Elaborad una infografía con los resultados y consejos de consumo.",
    ],
    producto: "Un informe de laboratorio y una infografía para el centro.",
    evaluacion: ["Las pruebas están bien realizadas y controladas.", "Los resultados se interpretan con la química de los glúcidos.", "Los cálculos de azúcares son correctos.", "La infografía es clara y rigurosa."],
  },
  familias: [
    "Mirad en las etiquetas de casa cuántos azúcares tienen el cacao, los cereales y los yogures.",
    "Poned unas gotas de yodo (povidona) sobre una rodaja de patata y sobre una de manzana: ¿qué pasa?",
    "Masticad un trozo de pan sin tragar durante un minuto: ¿empieza a saber dulce? Comentad por qué.",
    "Hablad de quién en la familia tiene intolerancia a la lactosa y qué productos toma.",
  ],
  saberes: "bloque «Las biomoléculas»: los glúcidos, concepto y clasificación; monosacáridos, estructura, isomería, ciclación y propiedades; el enlace O-glucosídico; disacáridos y polisacáridos de interés biológico; relación entre estructura y función; importancia en la alimentación y la salud.",
  ideas: [
    "Práctica de identificación de glúcidos con Fehling, lugol e hidrólisis ácida de la sacarosa.",
    "Construcción de modelos moleculares de glucosa lineal y cíclica para ver los anómeros.",
    "Observación al microscopio de gránulos de almidón de patata, arroz y trigo teñidos con lugol.",
    "Actividad de análisis de etiquetas y cálculo de azúcares libres frente a las recomendaciones de la OMS.",
  ],
  fuentes: [
    { t: "OMS: ingesta de azúcares para adultos y niños", url: "https://www.who.int/es/publications/i/item/9789241549028" },
  ],
});
