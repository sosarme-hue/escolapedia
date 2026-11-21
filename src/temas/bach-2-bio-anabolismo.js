// Biología 2º Bachillerato · Anabolismo: fotosíntesis y quimiosíntesis (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol } = require("./_bach2-bio");

// Cloroplasto con las dos fases.
const cloroSVG = marco("Esquema de un cloroplasto: en las membranas de los tilacoides ocurre la fase luminosa, que usa luz y agua y libera oxígeno, ATP y NADPH; en el estroma ocurre el ciclo de Calvin, que fija CO₂ y forma glúcidos", `
  <ellipse cx="130" cy="94" rx="122" ry="72" fill="var(--leaf)" fill-opacity=".1" stroke="var(--leaf)" stroke-width="2.6"/>
  ${[60, 90, 120].map((x) => [0, 1, 2, 3].map((k) => `<rect x="${x - 14}" y="${70 + k * 9}" width="28" height="7" rx="3.5" fill="var(--leaf)" fill-opacity=".8"/>`).join("")).join("")}
  ${T(90, 142, "tilacoides (grana)", { fs: 9.5, b: true, c: "var(--leaf)" })}${T(90, 124, "FASE LUMINOSA", { fs: 9.5, b: true })}
  <circle cx="196" cy="98" r="30" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="4 3"/>${T(196, 95, "Calvin", { fs: 10, b: true, c: "#b45309" })}${T(196, 108, "(estroma)", { fs: 8.5, c: "var(--muted)" })}
  <path d="M132 86 Q 150 70 168 84" fill="none" stroke="var(--red)" stroke-width="1.8"/>${T(150, 56, "ATP, NADPH", { fs: 9, b: true, c: "var(--red)" })}
  ${T(40, 18, "luz + H₂O", { fs: 10, b: true, c: "var(--sun)" })}<path d="M40 24 L 56 62" stroke="var(--sun)" stroke-width="2"/>${T(40, 176, "→ O₂", { fs: 10, b: true, c: "var(--inf)" })}
  ${T(222, 18, "CO₂", { fs: 10, b: true })}<path d="M222 24 L 206 66" stroke="var(--ink)" stroke-width="1.6"/>${T(216, 176, "→ glúcidos", { fs: 10, b: true, c: "#b45309" })}`);

// Esquema en Z.
const zSVG = marco("Esquema en Z de la fase luminosa acíclica: la luz excita el fotosistema II, que repone sus electrones rompiendo el agua; los electrones pasan por la cadena hasta el fotosistema I, que vuelve a excitarlos por la luz, y acaban reduciendo el NADP⁺", `
  <path d="M10 170 H 252" stroke="var(--line)"/>${T(14, 14, "energía", { fs: 9, c: "var(--muted)", a: "start" })}<path d="M8 168 V 20" stroke="var(--muted)" stroke-width="1"/>
  <rect x="38" y="122" width="40" height="22" rx="5" fill="var(--pen)"/>${T(58, 137, "PSII", { fs: 10, b: true, c: "#fff" })}
  <path d="M58 120 V 52" stroke="var(--sun)" stroke-width="3"/><path d="M53 58 L 58 48 L 63 58" fill="var(--sun)"/>${T(30, 92, "luz", { fs: 10, b: true, c: "#b45309" })}
  <path d="M64 48 L 150 106" stroke="var(--red)" stroke-width="2.4" stroke-dasharray="5 3"/>${T(118, 64, "cadena", { fs: 9.5, b: true, c: "var(--red)" })}${T(118, 76, "(bombea H⁺)", { fs: 8.5, c: "var(--muted)" })}
  <rect x="140" y="104" width="40" height="22" rx="5" fill="var(--leaf)"/>${T(160, 119, "PSI", { fs: 10, b: true, c: "#fff" })}
  <path d="M160 102 V 30" stroke="var(--sun)" stroke-width="3"/><path d="M155 36 L 160 26 L 165 36" fill="var(--sun)"/>
  <path d="M166 28 L 214 48" stroke="var(--red)" stroke-width="2.4" stroke-dasharray="5 3"/>${T(222, 62, "NADPH", { fs: 10, b: true, c: "var(--red)" })}
  ${T(58, 162, "H₂O → ½O₂ + 2H⁺", { fs: 9.5, b: true, c: "var(--inf)" })}`);

module.exports = tema({
  titulo: "Anabolismo: fotosíntesis y quimiosíntesis",
  minutos: 125,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar el concepto de anabolismo y diferenciar el anabolismo autótrofo y el heterótrofo",
    "Describir la estructura del cloroplasto y la función de los pigmentos y los fotosistemas",
    "Explicar la fase luminosa de la fotosíntesis, acíclica y cíclica, y la síntesis de ATP por fotofosforilación",
    "Describir el ciclo de Calvin y el balance de la fotosíntesis",
    "Analizar los factores que influyen en la fotosíntesis y su importancia para la biosfera",
    "Describir la quimiosíntesis y las principales rutas del anabolismo heterótrofo",
  ],
  claves: ["anabolismo", "fotosíntesis", "cloroplasto", "tilacoide", "clorofila", "fotosistema", "fase luminosa", "fotólisis del agua", "fotofosforilación", "NADPH", "ciclo de Calvin", "RuBisCO", "fotorrespiración", "plantas C₄", "quimiosíntesis", "gluconeogénesis"],
  pregunta: {
    texto: "Un roble de 50 toneladas sale de una bellota de pocos gramos. ¿De dónde viene casi toda esa masa?",
    respuesta: "Del <mark>aire</mark>. La mayor parte de la materia seca de un árbol es carbono, y ese carbono procede del <b>CO₂</b> que las hojas captan de la atmósfera y que la <b>fotosíntesis</b> convierte en glúcidos. El agua aporta hidrógenos y el suelo, algunas sales minerales, pero en cantidades mucho menores. En el siglo XVII, Van Helmont pensó que la masa venía del agua; hoy sabemos que cada tronco es, en gran parte, aire transformado con la energía de la luz solar.",
  },
  lectura: {
    titulo: "Melvin Calvin y la pista radiactiva",
    html: `<p>Al terminar la Segunda Guerra Mundial, los laboratorios de Berkeley disponían de un nuevo material: el carbono-14, un isótopo radiactivo producido en los reactores. El químico Melvin Calvin y sus colaboradores Andrew Benson y James Bassham decidieron usarlo para seguir el viaje de un átomo de carbono desde el aire hasta los azúcares de una planta. Cultivaban un alga verde, <i>Chlorella</i>, en un recipiente plano y transparente que llamaban «piruleta», le añadían CO₂ marcado durante unos segundos y la sumergían de golpe en alcohol hirviendo para detener todas las reacciones.</p><p>Después separaban las moléculas del alga por cromatografía en papel y las colocaban sobre película fotográfica: las manchas radiactivas mostraban qué compuestos contenían el carbono-14. Con exposiciones de solo dos segundos, el carbono aparecía ya en una molécula de tres carbonos, el ácido 3-fosfoglicérico. Repitiendo el experimento con tiempos cada vez más largos reconstruyeron, paso a paso, una ruta cíclica. Calvin recibió el Premio Nobel en 1961. En este tema verás cómo la planta captura la energía de la luz en la fase luminosa y cómo la usa en ese ciclo para fabricar materia orgánica.</p>`,
  },
  bloques: [
    { h: "El anabolismo", p: [
      "El <mark>anabolismo</mark> es la fase constructiva del metabolismo: el conjunto de rutas que sintetizan moléculas complejas a partir de otras más sencillas. Son reacciones de <b>reducción</b> que <b>necesitan energía</b>, aportada por el ATP, y <b>poder reductor</b>, aportado por el NADPH. Gracias a ellas la célula fabrica sus propios componentes, crece, se divide y acumula reservas. Las rutas anabólicas son divergentes: a partir de unos pocos precursores, como el acetil-CoA, el pirúvico o los intermediarios del ciclo de Krebs, se obtiene una enorme variedad de productos.",
      "Se distinguen dos tipos. El <b>anabolismo autótrofo</b> es exclusivo de los organismos autótrofos y consiste en fabricar materia orgánica a partir de materia inorgánica (CO₂, agua, nitratos, sulfatos). Según la energía que utilizan, puede ser <b>fotosíntesis</b>, si usa la energía de la luz, o <b>quimiosíntesis</b>, si usa la energía de reacciones químicas de oxidación. El <b>anabolismo heterótrofo</b>, común a todas las células, transforma moléculas orgánicas sencillas en otras más complejas: glucosa en glucógeno o almidón, aminoácidos en proteínas o ácidos grasos en triglicéridos. Las rutas anabólicas no son simplemente las catabólicas al revés: comparten algunos pasos, pero usan otras enzimas en los pasos irreversibles, y a menudo ocurren en compartimentos distintos.",
    ], svg: arbol("Tipos de anabolismo", "ANABOLISMO", [["Fotosíntesis", "luz → materia orgánica"], ["Quimiosíntesis", "oxidaciones → mat. org."], ["Heterótrofo", "orgánica → compleja"]], "var(--leaf)"), v: ["ana-e", "Metabolismo: anabolismo y catabolismo"] },
    { h: "La fotosíntesis: concepto e importancia", p: [
      "La <mark>fotosíntesis</mark> es el proceso por el que los organismos fotoautótrofos transforman la energía de la luz en energía química y la usan para fabricar materia orgánica a partir de CO₂ y agua. La realizan las plantas, las algas, las cianobacterias y algunas otras bacterias. En la <b>fotosíntesis oxigénica</b> de plantas, algas y cianobacterias, el agua es el dador de electrones y se libera oxígeno. Su ecuación global es: 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂. En la <b>fotosíntesis anoxigénica</b> de las bacterias purpúreas y verdes, el dador de electrones es otro compuesto, como el H₂S, y no se libera oxígeno, sino azufre.",
      "La fotosíntesis es el proceso más importante de la biosfera. Es la principal <b>vía de entrada de energía</b> en los ecosistemas: casi toda la materia orgánica de la que se alimentan los demás seres vivos procede, directa o indirectamente, de ella. Produce el <b>oxígeno</b> de la atmósfera: hace unos 2400 millones de años, las cianobacterias llenaron el aire de O₂, lo que permitió la aparición de la respiración aerobia y de la capa de ozono. Además, <b>retira CO₂</b> de la atmósfera, por lo que regula el clima, y los combustibles fósiles son restos de organismos fotosintéticos de hace millones de años. Se calcula que los productores fijan unos 120 000 millones de toneladas de carbono al año.",
    ], extra: `<div class="formula"><span>6 CO₂ + 12 H₂O + luz → C₆H₁₂O₆ + 6 O₂ + 6 H₂O</span></div>`, svg: L6.radial("Importancia de la fotosíntesis", "FOTOSÍNTESIS", ["Materia orgánica", "Oxígeno", "Retira CO₂", "Capa de ozono", "Combustibles", "Energía al ecosistema"], "var(--leaf)"), v: ["ana-c", "Fotosíntesis"] },
    { h: "El cloroplasto y los pigmentos", p: [
      "En las plantas y las algas, la fotosíntesis ocurre en los <mark>cloroplastos</mark>, que abundan en las células del parénquima de las hojas. Tienen una envoltura de doble membrana y, en su interior, un medio llamado <b>estroma</b>, con ADN, ribosomas y las enzimas del ciclo de Calvin. En el estroma hay un sistema de sacos aplanados, los <b>tilacoides</b>, que se apilan formando <b>grana</b>. En la membrana de los tilacoides se sitúan los pigmentos, la cadena de transporte de electrones y la ATP sintasa: allí ocurre la <b>fase luminosa</b>. En el estroma ocurre la fase de fijación del CO₂ o <b>ciclo de Calvin</b>.",
      "Los <mark>pigmentos fotosintéticos</mark> son moléculas que absorben la luz. Los principales son las <b>clorofilas</b> a y b, que tienen un anillo de porfirina con un átomo de magnesio en el centro y una larga cola de fitol que las ancla a la membrana. Absorben sobre todo la luz azul y roja y reflejan la verde, por eso las hojas son verdes. Los <b>carotenoides</b> (carotenos, anaranjados, y xantofilas, amarillas) absorben la luz azul-verde, amplían el espectro aprovechado y protegen a la clorofila del exceso de luz. En otoño, cuando la clorofila se degrada, los carotenoides se hacen visibles y las hojas amarillean. Las algas rojas y las cianobacterias tienen, además, ficobilinas.",
    ], svg: cloroSVG },
    { h: "Los fotosistemas", p: [
      "Los pigmentos no están dispersos en la membrana del tilacoide, sino organizados con proteínas en unas unidades llamadas <mark>fotosistemas</mark>. Cada fotosistema tiene dos partes. El <b>complejo antena</b> está formado por cientos de moléculas de clorofila y carotenoides que captan la luz y transfieren la energía de una a otra por resonancia, como un embudo, hasta el <b>centro de reacción</b>. Allí hay una pareja especial de clorofila a que, al recibir la energía, se excita y pierde un electrón, que capta una molécula aceptora. Es el momento clave: la energía de la luz se ha convertido en energía química, en forma de un electrón de alta energía.",
      "Hay dos tipos de fotosistemas, que se nombran por el orden en que se descubrieron. El <b>fotosistema I</b> (PSI) tiene un centro de reacción que absorbe al máximo a 700 nm, por lo que se llama P700; abunda en las membranas de los tilacoides no apilados. El <b>fotosistema II</b> (PSII) tiene el P680 y está asociado a un complejo que rompe el agua; abunda en los grana. Los dos trabajan en serie, conectados por una cadena de transportadores. Una prueba de ello es el <b>efecto Emerson</b>: la fotosíntesis es más eficiente cuando se ilumina a la vez con luz de 680 y de 700 nm que con cada una por separado.",
    ], svg: L5.pasos("Funcionamiento de un fotosistema", ["La antena capta la luz", "La energía pasa por resonancia", "La clorofila del centro se excita", "Cede un electrón a un aceptor"], "var(--leaf)") },
    { h: "La fase luminosa acíclica", p: [
      "La <mark>fase luminosa</mark> ocurre en las membranas de los tilacoides y necesita luz. Su función es obtener <b>ATP</b> y <b>NADPH</b>, que se usarán en el ciclo de Calvin. En el <b>transporte acíclico</b> de electrones, que es el principal, intervienen los dos fotosistemas. La luz excita el P680 del fotosistema II, que cede dos electrones a una cadena de transportadores. Para reponerlos, el fotosistema II rompe una molécula de agua: es la <b>fotólisis del agua</b>, que libera dos protones, dos electrones y medio O₂. Así, todo el <b>oxígeno</b> que liberan las plantas procede del agua, como se demostró con agua marcada con ¹⁸O.",
      "Los electrones pasan del fotosistema II a la plastoquinona, al complejo de citocromos b₆f y a la plastocianina, perdiendo energía que se usa para <b>bombear protones</b> del estroma al interior del tilacoide. Llegan al fotosistema I, que ha perdido a su vez electrones al ser excitado por la luz. Los electrones del PSI, otra vez cargados de energía, pasan a la ferredoxina y, mediante una enzima, reducen el <b>NADP⁺ a NADPH</b>. El recorrido de los electrones, representado en una gráfica de energía, tiene forma de Z, por lo que se llama <b>esquema en Z</b>. El resultado global es: el agua se oxida y libera O₂, se forma NADPH y se crea un gradiente de protones.",
    ], svg: zSVG, v: ["ana-a", "Fotosíntesis: fase luminosa"] },
    { h: "Fotofosforilación y fase luminosa cíclica", p: [
      "El ATP de la fase luminosa se forma por <mark>fotofosforilación</mark>, un mecanismo quimiosmótico como el de la mitocondria. La fotólisis del agua y el bombeo de la cadena acumulan protones en el interior del tilacoide (el lumen), cuyo pH llega a ser de 4-5, mientras que el estroma tiene un pH de 8. Los protones solo pueden volver al estroma a través de la <b>ATP sintasa</b>, situada en la membrana del tilacoide con la cabeza hacia el estroma, y su paso impulsa la síntesis de ATP. Así, el ATP se forma en el estroma, donde se va a usar en el ciclo de Calvin.",
      "El ciclo de Calvin necesita más ATP que NADPH (3 ATP por cada 2 NADPH por CO₂). Para compensar, el cloroplasto realiza también la <b>fase luminosa cíclica</b>, en la que solo interviene el <b>fotosistema I</b>. Sus electrones excitados, en lugar de ir al NADP⁺, vuelven desde la ferredoxina a la cadena de transporte y regresan al PSI, bombeando protones por el camino. Así se fabrica <b>ATP, pero no NADPH</b>, y como no interviene el PSII, <b>no se rompe agua ni se libera oxígeno</b>. La proporción entre ambos tipos de transporte se ajusta a las necesidades de la célula.",
    ], svg: L5.compara("Fase luminosa", ["Acíclica", ["PSII y PSI", "fotólisis del agua", "libera O₂", "ATP + NADPH"]], ["Cíclica", ["solo PSI", "sin fotólisis", "no libera O₂", "solo ATP"]], "var(--leaf)", "var(--pen)") },
    { h: "El ciclo de Calvin", p: [
      "El <mark>ciclo de Calvin</mark>, también llamado fase oscura o, mejor, fase de fijación del carbono, ocurre en el <b>estroma</b> y no necesita luz directamente, aunque sí el ATP y el NADPH de la fase luminosa, por lo que en la práctica se detiene en la oscuridad. Tiene tres etapas. En la <b>fijación</b>, la enzima <b>RuBisCO</b> une el CO₂ a un azúcar de cinco carbonos, la ribulosa-1,5-bisfosfato, y se forma un compuesto inestable que se rompe en dos moléculas de <b>ácido 3-fosfoglicérico</b> (3 C).",
      "En la <b>reducción</b>, el 3-fosfoglicérico se fosforila con ATP y se reduce con NADPH a <b>gliceraldehído-3-fosfato</b>, una triosa. En la <b>regeneración</b>, la mayor parte del gliceraldehído-3-fosfato se usa, gastando más ATP, para regenerar la ribulosa-1,5-bisfosfato y cerrar el ciclo. Por cada 3 CO₂ fijados se obtiene una triosa neta, que sale del ciclo. Para fabricar una glucosa hacen falta 6 vueltas. Las triosas se transforman en el cloroplasto en almidón, como reserva temporal, o salen al citosol para formar sacarosa, que se transporta por el floema. La RuBisCO es probablemente la proteína más abundante de la Tierra, porque es lenta y la planta necesita fabricar grandes cantidades.",
    ], svg: L6.ciclo("Ciclo de Calvin (estroma)", "CALVIN", ["Fijación: CO₂ + RuBP", "2 × 3-fosfoglicérico", "Reducción: ATP + NADPH", "G3P (triosa)", "Regenera RuBP"], "#b45309"), v: ["ana-b", "Ciclo de Calvin"] },
    { h: "Balance de la fotosíntesis", p: [
      "Para fijar <b>una molécula de CO₂</b> en el ciclo de Calvin se necesitan <b>3 ATP y 2 NADPH</b>. Por tanto, para fabricar una glucosa (6 CO₂) se gastan <b>18 ATP y 12 NADPH</b>. Los 12 NADPH requieren 24 electrones, que proceden de la rotura de 12 moléculas de agua, de las que se liberan 6 O₂. Cada electrón necesita dos fotones (uno en cada fotosistema), por lo que hacen falta al menos 48 fotones, más los necesarios para el ATP adicional del transporte cíclico.",
      "La ecuación global, con todo el detalle, es: 6 CO₂ + 12 H₂O + luz → C₆H₁₂O₆ + 6 O₂ + 6 H₂O. Escribirla con 12 H₂O a la izquierda y 6 a la derecha muestra que el oxígeno liberado procede del agua y que se forma agua nueva en el ciclo de Calvin. El <b>rendimiento</b> de la fotosíntesis es bajo: de toda la luz solar que llega a una hoja, solo un 1-2 % acaba almacenada en materia orgánica, porque buena parte de la luz no se absorbe, se refleja o se pierde como calor. Aun así, basta para sostener prácticamente toda la vida del planeta.",
    ], extra: `<div class="formula"><span>Por CO₂: 3 ATP + 2 NADPH · Por glucosa: 18 ATP + 12 NADPH</span></div>`, svg: L5.barras("Necesidades para una glucosa", "moléculas", [["CO₂", 6, "var(--muted)", "6"], ["H₂O rotas", 12, "var(--inf)", "12"], ["NADPH", 12, "var(--red)", "12"], ["ATP", 18, "var(--sun)", "18"]]) },
    { h: "Fotorrespiración y plantas C₄ y CAM", p: [
      "La RuBisCO tiene un defecto: además de unir CO₂, puede unir <b>O₂</b> a la ribulosa-1,5-bisfosfato, función oxigenasa. Cuando lo hace, se inicia la <mark>fotorrespiración</mark>, una ruta que consume ATP, libera CO₂ y no produce azúcares, por lo que reduce la eficiencia de la fotosíntesis hasta en un 25 %. La fotorrespiración aumenta cuando hace calor y sequía: la planta cierra los estomas para no perder agua, el CO₂ se agota en la hoja y el O₂ se acumula.",
      "Algunas plantas de climas cálidos han desarrollado mecanismos para evitarla. Las <b>plantas C₄</b>, como el maíz o la caña de azúcar, fijan primero el CO₂ con otra enzima muy afín, la PEP carboxilasa, en un compuesto de 4 carbonos, en las células del mesófilo; luego lo transportan a las células de la vaina del haz, donde lo liberan en alta concentración para la RuBisCO. Separan los procesos en el <b>espacio</b>. Las <b>plantas CAM</b>, como los cactus y la piña, abren los estomas de noche, fijan el CO₂ en ácidos orgánicos que guardan en la vacuola, y de día, con los estomas cerrados, lo liberan para el ciclo de Calvin. Separan los procesos en el <b>tiempo</b> y ahorran mucha agua.",
    ], svg: L6.tabla("Estrategias de fijación del CO₂", ["Tipo", "Separación", "Ejemplo"], [["C₃", "ninguna", "trigo, arroz"], ["C₄", "en el espacio", "maíz, caña"], ["CAM", "en el tiempo", "cactus, piña"]]) },
    { h: "Factores que influyen en la fotosíntesis", p: [
      "La intensidad de la fotosíntesis depende de varios factores. La <b>intensidad luminosa</b>: al aumentar la luz, aumenta la fotosíntesis hasta un punto de saturación, a partir del cual se mantiene constante; con luz muy intensa, los pigmentos pueden dañarse. El <b>punto de compensación</b> es la intensidad de luz a la que la fotosíntesis iguala a la respiración, de modo que el intercambio neto de gases es nulo. La <b>concentración de CO₂</b>: al aumentar, crece la fotosíntesis hasta un límite; por eso en algunos invernaderos se enriquece el aire con CO₂.",
      "La <b>temperatura</b>: como en toda reacción enzimática, la fotosíntesis aumenta con la temperatura hasta un óptimo (unos 25-30 °C en muchas plantas) y luego disminuye bruscamente por desnaturalización de las enzimas y cierre de estomas. La <b>disponibilidad de agua</b>: la falta de agua hace que se cierren los estomas y se frene la entrada de CO₂. La <b>concentración de O₂</b>: si aumenta, favorece la fotorrespiración y reduce la fotosíntesis. Y la <b>longitud de onda</b>: la luz azul y roja es la más eficaz, y la verde, la menos. Cuando varios factores actúan a la vez, la velocidad la marca el que está en menor proporción, llamado <b>factor limitante</b>.",
    ], svg: L5.graf("Fotosíntesis frente a intensidad de luz: aumenta con la luz, supera a la respiración a partir del punto de compensación y se estabiliza en la saturación", "intensidad de luz", "fotosíntesis", [{ p: Array.from({ length: 31 }, (_, i) => { const x = i / 30; return [x, 0.1 + 0.8 * (1 - Math.exp(-4 * x))]; }), c: "var(--leaf)", t: "" }, { p: [[0, 0.2], [1, 0.2]], c: "var(--muted)", t: "", dash: true }], `${T(200, 62, "saturación", { fs: 10, b: true, c: "var(--leaf)" })}${T(214, 114, "respiración", { fs: 10, b: true, c: "var(--muted)" })}`) },
    { h: "La quimiosíntesis", p: [
      "La <mark>quimiosíntesis</mark> es un tipo de anabolismo autótrofo en el que la energía necesaria para fabricar materia orgánica no procede de la luz, sino de la <b>oxidación de compuestos inorgánicos</b> reducidos. Solo la realizan algunas bacterias y arqueas. Igual que la fotosíntesis, tiene dos fases. En la primera, la oxidación del sustrato inorgánico libera electrones que pasan por una cadena de transporte y producen ATP por fosforilación oxidativa; parte del ATP se usa para obtener NADH mediante un transporte inverso de electrones. En la segunda, el ATP y el NADH se usan para fijar CO₂ en el <b>ciclo de Calvin</b>.",
      "Hay varios grupos según el sustrato que oxidan. Las <b>bacterias nitrificantes</b> oxidan el amoníaco a nitritos (<i>Nitrosomonas</i>) y los nitritos a nitratos (<i>Nitrobacter</i>); son esenciales en el <b>ciclo del nitrógeno</b>, porque transforman el amoníaco de la descomposición en nitratos que las plantas pueden absorber. Las <b>bacterias del azufre</b> oxidan el H₂S o el azufre a sulfatos; en las fuentes hidrotermales de las profundidades oceánicas, donde no llega la luz, son la base de ecosistemas enteros, con gusanos tubícolas gigantes que las albergan en su interior. Las <b>bacterias del hierro</b> oxidan sales ferrosas a férricas, y las del hidrógeno oxidan el H₂. La quimiosíntesis fue, probablemente, uno de los primeros metabolismos de la Tierra.",
    ], svg: L6.tabla("Bacterias quimiosintéticas", ["Grupo", "Oxidan", "Importancia"], [["Nitrificantes", "NH₃ → NO₂⁻ → NO₃⁻", "ciclo del N"], ["Del azufre", "H₂S → SO₄²⁻", "fuentes termales"], ["Del hierro", "Fe²⁺ → Fe³⁺", "depósitos de hierro"], ["Del hidrógeno", "H₂ → H₂O", "suelos"]]), v: ["ana-d", "Quimiosíntesis"] },
    { h: "El anabolismo heterótrofo", p: [
      "Todas las células, autótrofas y heterótrofas, fabrican sus propias moléculas complejas. En el <b>anabolismo de los glúcidos</b>, la <mark>gluconeogénesis</mark> sintetiza glucosa a partir de precursores no glucídicos, como el lactato, el glicerol o algunos aminoácidos; ocurre sobre todo en el hígado y permite mantener la glucosa en sangre durante el ayuno. Recorre la glucólisis al revés, pero salta sus tres pasos irreversibles con otras enzimas. La <b>glucogenogénesis</b> une moléculas de glucosa activadas (UDP-glucosa) para formar glucógeno en el hígado y los músculos; en las plantas, la síntesis de almidón usa ADP-glucosa.",
      "En el <b>anabolismo de los lípidos</b>, los ácidos grasos se sintetizan en el citosol a partir de acetil-CoA, añadiendo unidades de dos carbonos con gasto de ATP y NADPH, mediante un complejo enzimático llamado ácido graso sintasa. Después se unen a la glicerina para formar triglicéridos, que se almacenan en el tejido adiposo; por eso un exceso de glúcidos en la dieta se convierte en grasa. Del acetil-CoA se sintetiza también el colesterol. En el <b>anabolismo de las proteínas</b>, los aminoácidos se unen en los ribosomas según la información del ARNm, como verás en el tema siguiente. Los animales solo pueden fabricar algunos aminoácidos; los demás, los <b>esenciales</b>, deben tomarlos en la dieta.",
    ], svg: L6.tabla("Anabolismo heterótrofo", ["Ruta", "Precursor", "Producto"], [["Gluconeogénesis", "lactato, glicerol", "glucosa"], ["Glucogénesis", "UDP-glucosa", "glucógeno"], ["Lipogénesis", "acetil-CoA", "ácidos grasos"], ["Síntesis proteica", "aminoácidos", "proteínas"]]) },
  ],
  figura: { titulo: "Anabolismo: fotosíntesis y quimiosíntesis", items: [["Fase luminosa", "tilacoides", "H₂O → O₂", "ATP + NADPH"], ["Ciclo de Calvin", "estroma", "RuBisCO fija CO₂", "triosas → glucosa"], ["Quimiosíntesis", "bacterias", "oxidan NH₃, H₂S", "ciclo de Calvin"], ["Heterótrofo", "todas las células", "gluconeogénesis", "lípidos, proteínas"]] },
  video: ["ana-c", "Fotosíntesis"],
  ejemplos: [
    ["Calcula el ATP y el NADPH necesarios para formar una molécula de sacarosa (C₁₂).", ["Se fijan 12 CO₂.", "Por CO₂: 3 ATP + 2 NADPH.", "12 × 3 = 36 ATP; 12 × 2 = 24 NADPH."], "36 ATP y 24 NADPH (sin contar la unión de las dos hexosas)."],
    ["¿Cuántas moléculas de agua deben romperse para obtener 12 NADPH y cuántas de O₂ se liberan?", ["Cada NADPH necesita 2 e⁻: 24 e⁻.", "Cada H₂O aporta 2 e⁻: 12 H₂O.", "Cada H₂O libera ½ O₂."], "12 H₂O rotas y 6 O₂ liberados."],
    ["Se ilumina una planta con agua marcada con ¹⁸O y CO₂ normal. ¿Dónde aparecerá el isótopo?", ["El O₂ se forma en la fotólisis del agua.", "El oxígeno del CO₂ pasa a la glucosa y al agua formada."], "En el O₂ liberado."],
    ["¿Cuántas vueltas del ciclo de Calvin son necesarias para obtener una triosa neta y cuántas para una glucosa?", ["Cada vuelta fija 1 CO₂.", "Triosa: 3 C → 3 vueltas.", "Glucosa: 6 C → 6 vueltas."], "3 vueltas por triosa y 6 por glucosa."],
    ["Una planta se pasa de la luz a la oscuridad. ¿Qué ocurre con la ribulosa-1,5-bisfosfato y el 3-fosfoglicérico?", ["Sin luz no hay ATP ni NADPH.", "Se frena la reducción del 3-fosfoglicérico, que se acumula.", "La RuBP se sigue consumiendo, pero no se regenera."], "Aumenta el 3-fosfoglicérico y disminuye la RuBP."],
    ["Una planta respira 2 mg de CO₂/h y fotosintetiza 2 mg de CO₂/h a cierta luz. ¿En qué punto está y qué crece?", ["Fotosíntesis = respiración.", "Intercambio neto nulo."], "Está en el punto de compensación: no gana materia orgánica neta."],
  ],
  errores: [
    "Pensar que la fase oscura ocurre de noche: el ciclo de Calvin necesita el ATP y el NADPH de la luz, y ocurre de día.",
    "Creer que el oxígeno liberado procede del CO₂: procede de la rotura del agua.",
    "Decir que las plantas hacen fotosíntesis y los animales respiran: las plantas también respiran, día y noche.",
    "Confundir fotosíntesis y quimiosíntesis: las dos fijan CO₂, pero la segunda obtiene la energía de oxidaciones químicas.",
    "Pensar que la clorofila absorbe la luz verde: la refleja; absorbe sobre todo la azul y la roja.",
    "Creer que la fase cíclica produce NADPH u oxígeno: solo produce ATP.",
  ],
  ejercicios: {
    b: [
      ["Define anabolismo y diferencia el autótrofo del heterótrofo.", "Síntesis de moléculas complejas con energía. Autótrofo: desde materia inorgánica. Heterótrofo: desde moléculas orgánicas sencillas."],
      ["Escribe la ecuación global de la fotosíntesis oxigénica.", "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂."],
      ["Dibuja un cloroplasto e indica dónde ocurre cada fase.", "Fase luminosa: membrana de los tilacoides. Ciclo de Calvin: estroma."],
      ["¿Por qué las hojas son verdes?", "La clorofila absorbe luz azul y roja y refleja la verde."],
      ["¿Qué función tienen los carotenoides?", "Amplían el espectro de luz absorbida y protegen a la clorofila."],
      ["Describe las partes de un fotosistema.", "Complejo antena (capta luz) y centro de reacción (clorofila a que cede un electrón)."],
      ["¿Qué es la fotólisis del agua y qué produce?", "Rotura del agua por el PSII; da electrones, protones y O₂."],
      ["¿Qué productos de la fase luminosa necesita el ciclo de Calvin?", "ATP y NADPH."],
      ["¿Qué enzima fija el CO₂ y a qué molécula lo une?", "La RuBisCO, a la ribulosa-1,5-bisfosfato."],
      ["Cita tres factores que influyen en la fotosíntesis.", "Intensidad de luz, concentración de CO₂ y temperatura."],
      ["Define quimiosíntesis y pon un ejemplo.", "Anabolismo autótrofo con energía de oxidaciones inorgánicas; Nitrosomonas oxida NH₃."],
      ["¿Qué es la gluconeogénesis?", "Síntesis de glucosa a partir de precursores no glucídicos (lactato, glicerol, aminoácidos)."],
    ],
    m: [
      ["Explica el transporte acíclico de electrones.", "Luz excita PSII, que repone e⁻ por fotólisis; los e⁻ pasan por la cadena (bombeo de H⁺) al PSI, excitado de nuevo, y reducen NADP⁺ a NADPH."],
      ["Compara la fase luminosa acíclica y la cíclica.", "Acíclica: PSII y PSI, fotólisis, O₂, ATP y NADPH. Cíclica: solo PSI, sin fotólisis ni O₂, solo ATP."],
      ["¿Para qué sirve la fase cíclica?", "Para producir el ATP extra que necesita el ciclo de Calvin (3 ATP/2 NADPH)."],
      ["Explica la fotofosforilación.", "Gradiente de H⁺ (lumen ácido) creado por la fotólisis y la cadena; los H⁺ vuelven al estroma por la ATP sintasa, que fabrica ATP."],
      ["Describe las tres etapas del ciclo de Calvin.", "Fijación (RuBisCO, CO₂ + RuBP → 2 PGA), reducción (ATP y NADPH → G3P), regeneración de RuBP."],
      ["Compara mitocondrias y cloroplastos en la síntesis de ATP.", "Ambos por quimiosmosis con ATP sintasa; mitocondria: energía de oxidación, H⁺ al espacio intermembrana; cloroplasto: energía de la luz, H⁺ al lumen."],
      ["Explica qué es la fotorrespiración y cuándo aumenta.", "La RuBisCO une O₂ en vez de CO₂; gasta energía y libera CO₂; aumenta con calor y sequía (estomas cerrados)."],
      ["Compara las plantas C₄ y CAM.", "C₄: fijan CO₂ en mesófilo y lo liberan en la vaina (separación espacial). CAM: fijan de noche y liberan de día (separación temporal)."],
      ["Explica qué es el punto de compensación.", "Intensidad de luz a la que la fotosíntesis iguala a la respiración; el intercambio neto de gases es nulo."],
      ["Explica el papel de las bacterias nitrificantes en el ciclo del nitrógeno.", "Oxidan NH₃ a NO₂⁻ y a NO₃⁻, la forma que absorben las plantas."],
      ["Explica por qué un exceso de glúcidos engorda.", "El exceso de glucosa da acetil-CoA, que se usa para sintetizar ácidos grasos y triglicéridos."],
      ["Diferencia fotosíntesis oxigénica y anoxigénica.", "Oxigénica: dador H₂O, libera O₂ (plantas, cianobacterias). Anoxigénica: dador H₂S u otro, no libera O₂ (bacterias purpúreas y verdes)."],
    ],
    a: [
      ["(Tipo PAU) Interpreta el experimento de Ruben y Kamen con ¹⁸O y explica qué demostró.", "Con H₂¹⁸O el O₂ liberado estaba marcado; con C¹⁸O₂ no. Demostró que el O₂ procede del agua."],
      ["(Tipo PAU) Una planta se coloca en una atmósfera sin CO₂ con luz. ¿Qué pasa con la RuBP y el 3-fosfoglicérico?", "Sin CO₂ no hay fijación: la RuBP se acumula (se sigue regenerando) y el 3-PGA disminuye (se sigue reduciendo)."],
      ["(Tipo PAU) Indica qué moléculas aportan la fase luminosa y el ciclo de Calvin, y qué ocurriría si se bloqueara el PSII.", "Luminosa: ATP, NADPH, O₂. Calvin: glúcidos. Sin PSII: solo transporte cíclico, ATP sin NADPH ni O₂; el ciclo de Calvin se detendría."],
      ["El herbicida DCMU bloquea el transporte de electrones a la salida del PSII. Explica por qué mata a la planta.", "Sin flujo de e⁻ no se forma NADPH ni la mayor parte del ATP; se para el ciclo de Calvin y la planta no fabrica materia orgánica."],
      ["Interpreta una gráfica en la que la fotosíntesis deja de aumentar al subir la luz, pero aumenta si se añade CO₂.", "A alta luz, el CO₂ es el factor limitante; al aumentarlo, la fotosíntesis sube hasta otro límite."],
      ["Explica por qué los ecosistemas de las fuentes hidrotermales no dependen del Sol.", "Sus productores son bacterias quimiosintéticas que oxidan H₂S; no necesitan luz (aunque el O₂ que usan procede de la fotosíntesis)."],
      ["Calcula la masa de CO₂ que fija una planta para formar 90 g de glucosa (M: glucosa 180, CO₂ 44).", "0,5 mol glucosa × 6 = 3 mol CO₂ × 44 = 132 g de CO₂."],
      ["¿Por qué las plantas C₄ son más productivas en climas cálidos y no en climas fríos?", "En calor evitan la fotorrespiración; en frío no hay apenas fotorrespiración y el gasto extra de ATP del mecanismo C₄ no compensa."],
      ["Compara el balance de una planta a pleno sol durante 12 h y en la oscuridad 12 h. ¿Cuándo crece?", "Crece si la materia fijada de día supera la consumida por la respiración en 24 h; con poca luz (por debajo de compensación) adelgaza."],
    ],
  },
  quiz: [
    ["El anabolismo consume…", ["ATP y NADPH", "O₂", "glucosa", "lactato"], 0, "Reducción."],
    ["La fotosíntesis anoxigénica usa como dador…", ["H₂S", "H₂O", "O₂", "CO₂"], 0, "Bacterias purpúreas."],
    ["La fase luminosa ocurre en…", ["los tilacoides", "el estroma", "la matriz", "el citosol"], 0, "Membrana."],
    ["La clorofila tiene en el centro un átomo de…", ["Mg", "Fe", "Cu", "Zn"], 0, "Porfirina."],
    ["El centro de reacción del PSI es…", ["P700", "P680", "P450", "RuBisCO"], 0, "PSII: P680."],
    ["El O₂ de la fotosíntesis procede del…", ["agua", "CO₂", "aire", "suelo"], 0, "Fotólisis."],
    ["El NADP⁺ se reduce gracias al…", ["PSI", "PSII", "Calvin", "ATP"], 0, "Vía ferredoxina."],
    ["La fase cíclica produce…", ["solo ATP", "ATP y NADPH", "O₂", "glucosa"], 0, "Solo PSI."],
    ["El interior del tilacoide tiene pH…", ["ácido", "básico", "neutro", "13"], 0, "Acumula H⁺."],
    ["El ciclo de Calvin ocurre en…", ["el estroma", "el lumen", "la matriz", "el núcleo"], 0, "Fijación."],
    ["La RuBisCO une el CO₂ a la…", ["ribulosa-1,5-bisfosfato", "glucosa", "oxalacético", "PEP"], 0, "5 C."],
    ["El primer producto estable del ciclo de Calvin es…", ["3-fosfoglicérico", "glucosa", "almidón", "sacarosa"], 0, "3 C."],
    ["Por CO₂ fijado se gastan…", ["3 ATP + 2 NADPH", "2 ATP + 3 NADPH", "1 ATP", "18 ATP"], 0, "Ciclo de Calvin."],
    ["La fotorrespiración aumenta con…", ["calor y sequía", "frío", "mucho CO₂", "oscuridad"], 0, "Estomas cerrados."],
    ["El maíz es una planta…", ["C₄", "C₃", "CAM", "sin fotosíntesis"], 0, "PEP carboxilasa."],
    ["Las plantas CAM abren los estomas…", ["de noche", "al mediodía", "nunca", "siempre"], 0, "Ahorran agua."],
    ["En el punto de compensación…", ["fotosíntesis = respiración", "no hay luz", "la planta crece mucho", "no respira"], 0, "Intercambio nulo."],
    ["Nitrobacter oxida…", ["nitritos a nitratos", "amoníaco", "H₂S", "Fe²⁺"], 0, "Nitrificante."],
    ["La gluconeogénesis ocurre sobre todo en…", ["el hígado", "el cerebro", "el músculo", "la piel"], 0, "Ayuno."],
    ["Los ácidos grasos se sintetizan a partir de…", ["acetil-CoA", "aminoácidos", "nucleótidos", "CO₂"], 0, "Ácido graso sintasa."],
  ],
  examen: [
    ["Para una glucosa el ciclo de Calvin gasta…", ["18 ATP y 12 NADPH", "6 ATP", "36 ATP", "12 ATP y 18 NADPH"], 0, "6 CO₂."],
    ["Para liberar 6 O₂ se rompen… H₂O", ["12", "6", "3", "24"], 0, "½ O₂ cada una."],
    ["Si se apaga la luz, el 3-fosfoglicérico…", ["aumenta", "disminuye", "no cambia", "desaparece"], 0, "No se reduce."],
    ["El efecto Emerson demuestra que…", ["hay dos fotosistemas", "la clorofila es verde", "el O₂ viene del agua", "existe la RuBisCO"], 0, "680 + 700 nm."],
    ["En las fuentes hidrotermales los productores son…", ["bacterias quimiosintéticas", "algas", "plantas", "hongos"], 0, "Oxidan H₂S."],
    ["Un factor limitante es…", ["el que está en menor proporción", "la temperatura siempre", "el agua siempre", "el O₂"], 0, "Marca la velocidad."],
    ["La fotosíntesis almacena… de la luz", ["1-2 %", "40 %", "90 %", "100 %"], 0, "Rendimiento bajo."],
    ["El almidón se sintetiza a partir de…", ["ADP-glucosa", "UDP-glucosa", "acetil-CoA", "lactato"], 0, "En plantas."],
  ],
  feynman: ["De dónde viene la masa de un árbol", "Por qué la fotosíntesis tiene dos fases", "De dónde sale el oxígeno que respiramos", "Qué hace la RuBisCO y cuál es su defecto", "Cómo viven seres sin luz en el fondo del mar", "Por qué los cactus abren los estomas de noche"],
  mapa: ["ANABOLISMO", [["Fase luminosa", "luz, H₂O → O₂, ATP, NADPH"], ["Ciclo de Calvin", "CO₂ → glúcidos"], ["Quimiosíntesis", "oxidaciones inorgánicas"], ["Heterótrofo", "glucosa, grasas, proteínas"]]],
  tarjetas: [
    ["Anabolismo", "Síntesis reductora; gasta ATP y NADPH."],
    ["Fotosíntesis", "6 CO₂ + 6 H₂O + luz → glucosa + 6 O₂."],
    ["Cloroplasto", "Tilacoides (luminosa) y estroma (Calvin)."],
    ["Pigmentos", "Clorofilas a, b (Mg); carotenoides."],
    ["Fotosistemas", "Antena + centro de reacción; PSI (P700), PSII (P680)."],
    ["Fase acíclica", "PSII + PSI; fotólisis; O₂, ATP y NADPH."],
    ["Fase cíclica", "Solo PSI; solo ATP."],
    ["Ciclo de Calvin", "Fijación (RuBisCO), reducción, regeneración."],
    ["Balance", "Por CO₂: 3 ATP + 2 NADPH."],
    ["C₄ y CAM", "Evitan la fotorrespiración: espacio y tiempo."],
    ["Quimiosíntesis", "Bacterias nitrificantes, del S, del Fe."],
    ["Gluconeogénesis", "Glucosa desde lactato, glicerol, aminoácidos."],
  ],
  glosario: [
    ["Anabolismo", "Conjunto de rutas de síntesis que consumen energía."],
    ["Fotosíntesis", "Síntesis de materia orgánica con la energía de la luz."],
    ["Tilacoide", "Saco membranoso del cloroplasto donde ocurre la fase luminosa."],
    ["Estroma", "Medio interno del cloroplasto, donde ocurre el ciclo de Calvin."],
    ["Clorofila", "Pigmento verde con magnesio que absorbe la luz."],
    ["Fotosistema", "Complejo de pigmentos y proteínas que capta la luz."],
    ["Fotólisis del agua", "Rotura del agua impulsada por la luz que libera O₂."],
    ["Fotofosforilación", "Síntesis de ATP impulsada por la luz."],
    ["RuBisCO", "Enzima que fija el CO₂ a la ribulosa-1,5-bisfosfato."],
    ["Fotorrespiración", "Ruta que se inicia cuando la RuBisCO fija O₂."],
    ["Planta C₄", "Planta que fija el CO₂ en un compuesto de 4 C antes del ciclo de Calvin."],
    ["Planta CAM", "Planta que fija el CO₂ de noche y lo usa de día."],
    ["Punto de compensación", "Luz a la que la fotosíntesis iguala a la respiración."],
    ["Factor limitante", "Factor que, por estar en menor proporción, limita la velocidad de un proceso."],
    ["Quimiosíntesis", "Síntesis de materia orgánica con la energía de oxidaciones inorgánicas."],
    ["Gluconeogénesis", "Síntesis de glucosa a partir de precursores no glucídicos."],
  ],
  situacion: {
    titulo: "Hojas que flotan: medir la fotosíntesis",
    reto: "Vuestro equipo debe medir cómo varía la velocidad de la fotosíntesis con la distancia a una fuente de luz usando discos de hoja de espinaca que flotan al llenarse de oxígeno.",
    pasos: [
      "Recortad discos de hoja con una pajita y extraed el aire con una jeringa en una disolución de bicarbonato.",
      "Colocad los discos hundidos en vasos a distintas distancias de una lámpara.",
      "Contad cada minuto cuántos discos flotan y calculad el tiempo en que flota la mitad.",
      "Representad la velocidad de la fotosíntesis frente a la intensidad de luz.",
      "Explicad el resultado relacionándolo con la fase luminosa y los factores limitantes.",
    ],
    producto: "Un informe con el diseño, la gráfica y la interpretación.",
    evaluacion: ["Se controlan las variables (temperatura, bicarbonato, tamaño de discos).", "La gráfica es correcta y está bien rotulada.", "La interpretación relaciona la flotación con el O₂ de la fotólisis.", "Se reconocen las fuentes de error."],
  },
  familias: [
    "Observad una planta de interior: girad la maceta y ved cómo las hojas se reorientan hacia la luz en unos días.",
    "Comentad juntos por qué las hojas cambian de color en otoño.",
    "Separad los pigmentos de una hoja con alcohol y una tira de papel de filtro (cromatografía casera).",
    "Hablad de la importancia de los bosques y del fitoplancton para el oxígeno y el clima.",
  ],
  saberes: "bloque «Metabolismo»: concepto de anabolismo; la fotosíntesis, sus fases (luminosa y de fijación del carbono), localización y balance, factores que la afectan e importancia biológica; la quimiosíntesis; visión general del anabolismo heterótrofo.",
  ideas: [
    "Experimento de los discos de hoja flotantes para medir la velocidad de fotosíntesis.",
    "Cromatografía de pigmentos fotosintéticos con alcohol y papel de filtro.",
    "Experimento de Ingenhousz con Elodea: contar burbujas de O₂ a distintas intensidades de luz.",
    "Análisis del experimento de Calvin con ¹⁴C a partir de sus cromatogramas originales.",
  ],
  fuentes: [
    { t: "Khan Academy en español: fotosíntesis", url: "https://es.khanacademy.org/science/biology/photosynthesis-in-plants" },
  ],
});
