// Biología 2º Bachillerato · Metabolismo y catabolismo (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, cadena, arbol } = require("./_bach2-bio");

// ATP.
const atpSVG = marco("Molécula de ATP: adenina, ribosa y tres grupos fosfato; al hidrolizarse el último enlace se forma ADP, fosfato y se liberan 7,3 kcal por mol", `
  <rect x="8" y="40" width="54" height="34" rx="6" fill="var(--pen)" fill-opacity=".85"/>${T(35, 61, "adenina", { fs: 10, b: true, c: "#fff" })}
  <path d="M70 92 l 22 -14 l 22 14 l -8 24 h -28 z" fill="var(--leaf)" fill-opacity=".8"/>${T(92, 104, "ribosa", { fs: 9.5, b: true, c: "#fff" })}<path d="M50 74 L 76 88" stroke="var(--ink)" stroke-width="2"/>
  ${[140, 180, 220].map((x, i) => `<circle cx="${x}" cy="94" r="15" fill="var(--sun)" stroke="#b45309" stroke-width="1.6"/>${T(x, 99, "P", { fs: 12, b: true, c: "#7c2d12" })}`).join("")}
  <path d="M114 94 H 125 M155 94 H 165" stroke="var(--ink)" stroke-width="2.4"/><path d="M195 94 H 205" stroke="var(--red)" stroke-width="3" stroke-dasharray="3 2"/>
  ${T(200, 66, "enlace rico", { fs: 9.5, b: true, c: "var(--red)" })}${T(200, 78, "en energía", { fs: 9.5, b: true, c: "var(--red)" })}
  ${T(130, 148, "ATP + H₂O → ADP + Pᵢ + 7,3 kcal/mol", { fs: 11.5, b: true })}${T(130, 168, "la «moneda» energética de la célula", { fs: 10, c: "var(--muted)" })}`);

// Mitocondria con localización de procesos.
const mitoSVG = marco("Localización del catabolismo aerobio: la glucólisis en el citosol; la descarboxilación del pirúvico, el ciclo de Krebs y la beta-oxidación en la matriz mitocondrial; la cadena respiratoria y la ATP sintasa en la membrana interna", `
  <rect x="2" y="4" width="256" height="172" rx="10" fill="var(--pen)" fill-opacity=".04" stroke="var(--line)"/>${T(48, 22, "CITOSOL", { fs: 10, b: true, c: "var(--muted)" })}
  <rect x="14" y="34" width="70" height="40" rx="6" fill="var(--sun)" fill-opacity=".35" stroke="#b45309"/>${T(49, 52, "Glucólisis", { fs: 10, b: true })}${T(49, 66, "glucosa → 2 pir.", { fs: 8.5 })}
  <ellipse cx="166" cy="104" rx="88" ry="62" fill="var(--red)" fill-opacity=".08" stroke="var(--red)" stroke-width="2.4"/>
  <path d="M90 104 q 10 -30 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="var(--red)" stroke-width="1.8"/>
  ${T(166, 70, "MATRIZ", { fs: 9.5, b: true, c: "var(--red)" })}${T(166, 84, "Krebs · β-oxidación", { fs: 9.5, b: true })}
  ${T(166, 132, "Membrana interna:", { fs: 9.5, b: true, c: "var(--red)" })}${T(166, 146, "cadena y ATP sintasa", { fs: 9.5, b: true })}
  <path d="M60 76 Q 70 110 92 112" fill="none" stroke="var(--ink)" stroke-width="1.8"/>${T(44, 110, "pirúvico", { fs: 9.5, b: true })}`);

// Cadena respiratoria y quimiosmosis.
const cadenaSVG = marco("Cadena de transporte electrónico en la membrana mitocondrial interna: los complejos I, III y IV bombean protones al espacio intermembrana al pasar los electrones del NADH al oxígeno; los protones vuelven a la matriz por la ATP sintasa, que fabrica ATP", `
  <rect x="4" y="66" width="252" height="40" fill="var(--sun)" fill-opacity=".18" stroke="#b45309" stroke-width="1"/>
  ${T(130, 18, "espacio intermembrana: muchos H⁺", { fs: 10, b: true, c: "var(--red)" })}${T(110, 170, "matriz", { fs: 10, b: true, c: "var(--muted)" })}
  ${[["I", 28], ["Q", 66], ["III", 100], ["c", 136], ["IV", 168]].map(([t, x]) => `<rect x="${x - 14}" y="${t === "Q" || t === "c" ? 78 : 60}" width="28" height="${t === "Q" || t === "c" ? 16 : 52}" rx="5" fill="var(--pen)" fill-opacity="${t === "Q" || t === "c" ? ".45" : ".85"}"/>${T(x, 90, t, { fs: 10, b: true, c: "#fff" })}`).join("")}
  ${[28, 100, 168].map((x) => `<path d="M${x} 56 V 34" stroke="var(--red)" stroke-width="2"/><path d="M${x - 4} 38 L ${x} 32 L ${x + 4} 38" fill="var(--red)"/>${T(x, 28, "H⁺", { fs: 9.5, b: true, c: "var(--red)" })}`).join("")}
  <path d="M14 134 Q 30 124 28 116" stroke="var(--ink)" stroke-width="1.5" fill="none"/>${T(24, 146, "NADH", { fs: 9.5, b: true })}
  <path d="M168 116 V 130" stroke="var(--ink)" stroke-width="1.5"/>${T(168, 144, "½O₂ → H₂O", { fs: 9.5, b: true, c: "var(--inf)" })}
  <rect x="210" y="52" width="30" height="62" rx="8" fill="var(--leaf)" fill-opacity=".85"/><circle cx="225" cy="130" r="14" fill="var(--leaf)"/>${T(225, 135, "ATP", { fs: 9, b: true, c: "#fff" })}
  <path d="M225 34 V 50" stroke="var(--red)" stroke-width="2"/><path d="M221 46 L 225 52 L 229 46" fill="var(--red)"/>${T(232, 158, "ATP sintasa", { fs: 9.5, b: true, c: "var(--leaf)" })}`);

// Ciclo de Krebs.
const krebsSVG = L6.ciclo("Ciclo de Krebs (por vuelta)", "KREBS", ["Acetil-CoA + oxalacético", "Cítrico", "2 CO₂ liberados", "3 NADH + FADH₂", "1 GTP (ATP)", "Oxalacético regenerado"], "var(--red)");

module.exports = tema({
  titulo: "Metabolismo y catabolismo",
  minutos: 130,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir metabolismo, catabolismo y anabolismo y explicar el papel del ATP y de los coenzimas de óxido-reducción",
    "Clasificar los organismos según su fuente de carbono y de energía",
    "Describir la glucólisis, la descarboxilación oxidativa del pirúvico y el ciclo de Krebs, y su localización celular",
    "Explicar la cadena respiratoria y la síntesis de ATP por quimiosmosis",
    "Calcular el balance energético de la respiración y compararlo con el de las fermentaciones",
    "Describir el catabolismo de los lípidos (β-oxidación) y de las proteínas",
  ],
  claves: ["metabolismo", "catabolismo", "anabolismo", "ATP", "NAD⁺", "autótrofo", "heterótrofo", "glucólisis", "ácido pirúvico", "acetil-CoA", "ciclo de Krebs", "cadena respiratoria", "quimiosmosis", "fermentación", "β-oxidación", "desaminación"],
  pregunta: {
    texto: "¿Por qué jadeas y te duelen las piernas al final de un sprint de 400 metros?",
    respuesta: "Porque tus músculos gastan ATP más deprisa de lo que llega el <b>oxígeno</b>. Sin oxígeno suficiente, la cadena respiratoria de las mitocondrias se frena y las células obtienen ATP solo con la glucólisis, regenerando el NAD⁺ mediante la <mark>fermentación láctica</mark>, que rinde 2 ATP por glucosa en vez de unos 30. Se acumula lactato y protones, el pH baja y aparecen la fatiga y el ardor. Después sigues jadeando: es la «deuda de oxígeno», que sirve para reponer el ATP y la fosfocreatina y reciclar el lactato en el hígado.",
  },
  lectura: {
    titulo: "Hans Krebs y la rueda que mueve la vida",
    html: `<p>Hans Adolf Krebs era un joven médico alemán que tuvo que huir del nazismo en 1933 por ser judío. Se instaló en Inglaterra, en Sheffield, y allí se propuso resolver uno de los grandes enigmas de la bioquímica: cómo los seres vivos «queman» los alimentos para obtener energía. Se sabía que algunos ácidos orgánicos aceleraban el consumo de oxígeno en el músculo, pero nadie entendía por qué. Krebs trabajaba con trocitos de músculo de pecho de paloma, un tejido que respira con mucha intensidad, y medía con cuidado cuánto oxígeno consumían al añadir cada sustancia.</p><p>En 1937 se dio cuenta de que aquellos ácidos formaban un ciclo: el último volvía a dar el primero, como una rueda que gira mientras se le añaden piezas de dos carbonos procedentes de los alimentos. La prestigiosa revista <i>Nature</i> rechazó su artículo, que acabó publicándose en otra revista. Dieciséis años después recibió el Premio Nobel. Hoy sabemos que el ciclo de Krebs es el cruce de caminos de todo el metabolismo: en él terminan de oxidarse azúcares, grasas y proteínas. En este tema recorrerás ese camino, desde la glucosa hasta el oxígeno, y verás cómo la célula captura la energía en forma de ATP.</p>`,
  },
  bloques: [
    { h: "El metabolismo: catabolismo y anabolismo", p: [
      "El <mark>metabolismo</mark> es el conjunto de reacciones químicas que ocurren en las células. Estas reacciones no son independientes: se organizan en <b>rutas metabólicas</b>, secuencias en las que el producto de una reacción es el sustrato de la siguiente, y cada paso está catalizado por una enzima. Las moléculas que intervienen se llaman <b>metabolitos</b>. Las rutas pueden ser lineales, ramificadas o cíclicas, como el ciclo de Krebs, y están reguladas para que la célula fabrique y degrade lo que necesita en cada momento, sobre todo controlando las enzimas de los primeros pasos.",
      "El metabolismo tiene dos vertientes. El <mark>catabolismo</mark> es la fase de degradación: moléculas orgánicas complejas, como la glucosa o los ácidos grasos, se transforman en otras más sencillas, como el CO₂, el agua o el ácido láctico. Son reacciones de <b>oxidación</b> que <b>liberan energía</b>, parte de la cual se almacena en ATP. Las rutas catabólicas son convergentes: de muchos sustratos distintos se llega a pocos productos. El <mark>anabolismo</mark> es la fase de construcción: a partir de moléculas sencillas se sintetizan otras complejas, como proteínas, polisacáridos o ácidos nucleicos. Son reacciones de <b>reducción</b> que <b>consumen energía</b> y son divergentes. Ambos procesos están acoplados: el catabolismo aporta la energía y el poder reductor que necesita el anabolismo.",
    ], svg: L5.compara("Las dos caras del metabolismo", ["Catabolismo", ["degradación", "oxidación", "libera energía", "convergente"]], ["Anabolismo", ["síntesis", "reducción", "consume energía", "divergente"]], "var(--red)", "var(--leaf)") },
    { h: "El ATP y los coenzimas transportadores", p: [
      "La energía liberada en el catabolismo no se usa directamente: se almacena en una molécula intermediaria, el <mark>ATP</mark> (adenosín trifosfato). El ATP es un nucleótido formado por adenina, ribosa y tres grupos fosfato. Los enlaces entre los fosfatos son enlaces ricos en energía: al hidrolizarse el último, el ATP se convierte en ADP y fosfato y se liberan unas <b>7,3 kcal/mol</b>. Esa energía se usa para la síntesis de moléculas, el transporte activo, el movimiento o la transmisión del impulso nervioso. Una persona recicla cada día una cantidad de ATP equivalente a su propio peso, porque se gasta y se regenera continuamente.",
      "El ATP se forma de dos maneras. En la <b>fosforilación a nivel de sustrato</b>, una enzima transfiere directamente un fosfato de un metabolito rico en energía al ADP; ocurre en la glucólisis y en el ciclo de Krebs. En la <b>fosforilación oxidativa</b>, la energía procede de un transporte de electrones en una membrana y la utiliza la ATP sintasa; en la fotosíntesis se llama fotofosforilación. Además del ATP, el metabolismo necesita <b>coenzimas transportadores de electrones</b>: el <b>NAD⁺</b>, el <b>FAD</b> y el <b>NADP⁺</b>. En las oxidaciones del catabolismo, el NAD⁺ y el FAD captan electrones e hidrógenos y pasan a sus formas reducidas, NADH y FADH₂, que los llevan hasta la cadena respiratoria. El NADPH aporta el poder reductor en las rutas anabólicas.",
    ], svg: atpSVG },
    { h: "Tipos de nutrición y de metabolismo", p: [
      "Los organismos se clasifican según la <b>fuente de carbono</b> que usan para fabricar su materia orgánica. Los <mark>autótrofos</mark> utilizan una fuente inorgánica, el CO₂, y a partir de él fabrican sus moléculas; son las plantas, las algas y algunas bacterias. Los <mark>heterótrofos</mark> necesitan tomar materia orgánica ya fabricada por otros seres vivos; son los animales, los hongos, los protozoos y la mayoría de las bacterias. Según la <b>fuente de energía</b>, los organismos son <b>fotótrofos</b>, si usan la luz, o <b>quimiótrofos</b>, si obtienen energía de reacciones químicas de oxidación.",
      "Combinando ambos criterios hay cuatro tipos de metabolismo. Los <b>fotoautótrofos</b> (plantas, algas, cianobacterias) usan luz y CO₂. Los <b>quimioautótrofos</b>, solo algunas bacterias, obtienen energía oxidando sustancias inorgánicas, como el amoníaco o el sulfuro de hidrógeno, y fijan CO₂. Los <b>fotoheterótrofos</b>, como las bacterias purpúreas no sulfúreas, usan luz pero toman carbono orgánico. Los <b>quimioheterótrofos</b> (animales, hongos y la mayoría de las bacterias) obtienen energía y carbono de la materia orgánica. Según su relación con el oxígeno, los organismos pueden ser <b>aerobios</b>, si lo necesitan; <b>anaerobios estrictos</b>, para los que es tóxico; o <b>anaerobios facultativos</b>, como las levaduras, que pueden vivir con él o sin él.",
    ], svg: L6.tabla("Tipos de metabolismo", ["Tipo", "Energía / C", "Ejemplo"], [["Fotoautótrofo", "luz / CO₂", "planta"], ["Quimioautótrofo", "química / CO₂", "nitrificante"], ["Fotoheterótrofo", "luz / orgánico", "purpúrea"], ["Quimioheterót.", "química / org.", "animal"]]) },
    { h: "Visión general de la respiración celular", p: [
      "La <mark>respiración celular</mark> es el proceso catabólico en el que una molécula orgánica se oxida por completo hasta CO₂ y agua, y la energía liberada se usa para sintetizar ATP. En la respiración aerobia, el aceptor final de los electrones es el <b>oxígeno</b>. La reacción global para la glucosa es: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energía. Si la glucosa se quemara de golpe, la energía se perdería como calor; la célula, en cambio, la libera poco a poco, en muchas etapas, y captura una parte en forma de ATP.",
      "La respiración de la glucosa se divide en cuatro etapas. La <b>glucólisis</b>, en el citosol, rompe la glucosa en dos moléculas de ácido pirúvico. La <b>descarboxilación oxidativa</b> del pirúvico, en la matriz mitocondrial, lo transforma en acetil-CoA. El <b>ciclo de Krebs</b>, también en la matriz, oxida el acetil-CoA hasta CO₂ y llena de electrones el NADH y el FADH₂. Por último, la <b>cadena respiratoria y la fosforilación oxidativa</b>, en la membrana mitocondrial interna, transfieren esos electrones al oxígeno y fabrican la mayor parte del ATP. Otras moléculas, como los ácidos grasos y los aminoácidos, entran en esta ruta en distintos puntos.",
    ], extra: `<div class="formula"><span>C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ≈ 30 ATP</span></div>`, svg: mitoSVG, v: ["cat-a", "Respiración celular"] },
    { h: "La glucólisis", p: [
      "La <mark>glucólisis</mark> es la ruta que transforma una molécula de glucosa (6 carbonos) en dos de <b>ácido pirúvico</b> (3 carbonos). Ocurre en el <b>citosol</b> de todas las células, no necesita oxígeno y es probablemente la ruta metabólica más antigua, compartida por casi todos los seres vivos. Consta de diez reacciones, cada una catalizada por una enzima, que se agrupan en dos fases.",
      "En la <b>fase preparatoria</b> la célula invierte energía: la glucosa se fosforila dos veces con 2 ATP, se transforma en fructosa-1,6-bisfosfato y se rompe en dos triosas fosfato (gliceraldehído-3-fosfato). En la <b>fase de rendimiento</b>, cada triosa se oxida: cede electrones al NAD⁺, que se reduce a NADH, y gana un fosfato; después transfiere sus fosfatos al ADP por fosforilación a nivel de sustrato. Por cada glucosa se obtienen 4 ATP, pero como se gastaron 2, el <b>balance neto es de 2 ATP y 2 NADH</b> por glucosa, además de 2 pirúvicos. La enzima clave de regulación es la fosfofructoquinasa, que se inhibe cuando hay mucho ATP. El destino del pirúvico depende del oxígeno: en aerobiosis entra en la mitocondria, y en anaerobiosis se fermenta.",
    ], extra: `<div class="formula"><span>Glucosa + 2 NAD⁺ + 2 ADP + 2 Pᵢ → 2 pirúvico + 2 NADH + 2 ATP</span></div>`, svg: L5.pasos("Glucólisis (citosol)", ["Glucosa + 2 ATP → fructosa-1,6-bisfosfato", "Rotura en 2 triosas fosfato", "Oxidación: 2 NADH", "4 ATP → neto 2 ATP + 2 pirúvico"], "#b45309") },
    { h: "Del pirúvico al acetil-CoA", p: [
      "En presencia de oxígeno, el ácido pirúvico entra en la mitocondria a través de un transportador de la membrana interna. En la matriz, un gran complejo enzimático, el <b>complejo piruvato deshidrogenasa</b>, realiza la <mark>descarboxilación oxidativa</mark>: arranca un carbono en forma de CO₂ (descarboxilación), oxida el resto cediendo electrones al NAD⁺ (que pasa a NADH) y une el grupo acetilo de dos carbonos al coenzima A, formando el <b>acetil-CoA</b>. Como cada glucosa da dos pirúvicos, en esta etapa se obtienen 2 acetil-CoA, 2 CO₂ y 2 NADH.",
      "El <mark>acetil-CoA</mark> es una encrucijada metabólica, porque a él llegan los productos de degradación de los glúcidos, de los ácidos grasos y de muchos aminoácidos. Su destino principal es el ciclo de Krebs, pero cuando sobra energía puede usarse para sintetizar ácidos grasos y colesterol, y en el hígado, en ayuno prolongado o en la diabetes no controlada, forma cuerpos cetónicos. La reacción de la piruvato deshidrogenasa es irreversible: por eso los animales no pueden fabricar glucosa a partir de ácidos grasos, que solo producen acetil-CoA. El coenzima A deriva de una vitamina del grupo B, el ácido pantoténico, y el complejo necesita además la tiamina (B₁), cuya carencia produce el beriberi.",
    ], extra: `<div class="formula"><span>Pirúvico + CoA + NAD⁺ → acetil-CoA + CO₂ + NADH</span></div>`, svg: L5.pasos("Descarboxilación oxidativa", ["Pirúvico (3 C) entra en la matriz", "Pierde un CO₂ (descarboxilación)", "NAD⁺ → NADH (oxidación)", "Acetil (2 C) + CoA → acetil-CoA"], "var(--pen)") },
    { h: "El ciclo de Krebs", p: [
      "El <mark>ciclo de Krebs</mark>, también llamado ciclo del ácido cítrico o de los ácidos tricarboxílicos, ocurre en la matriz mitocondrial y completa la oxidación del grupo acetilo. Comienza cuando el acetil-CoA (2 C) se une al <b>ácido oxalacético</b> (4 C) y forma <b>ácido cítrico</b> (6 C). A continuación, en una serie de ocho reacciones, el cítrico pierde dos carbonos en forma de CO₂ y se regenera el oxalacético, que puede volver a empezar. Por eso basta una pequeña cantidad de oxalacético para oxidar mucho acetil-CoA.",
      "En cada vuelta del ciclo se producen <b>2 CO₂</b>, <b>3 NADH</b>, <b>1 FADH₂</b> y <b>1 GTP</b>, equivalente a un ATP, por fosforilación a nivel de sustrato. Como cada glucosa da dos acetil-CoA, el ciclo gira dos veces. Fíjate en que el ciclo produce poco ATP directamente: su papel principal es recoger electrones en los coenzimas reducidos, que llevarán la energía a la cadena respiratoria. El ciclo de Krebs es <b>anfibólico</b>, es decir, catabólico y anabólico a la vez: algunos de sus intermediarios salen para fabricar aminoácidos, glucosa o el grupo hemo. Aunque no usa O₂ directamente, solo funciona en aerobiosis, porque necesita que la cadena respiratoria regenere el NAD⁺ y el FAD.",
    ], svg: krebsSVG, v: ["cat-b", "Ciclo de Krebs"] },
    { h: "La cadena respiratoria", p: [
      "La <mark>cadena respiratoria</mark> o cadena de transporte electrónico está formada por una serie de moléculas transportadoras situadas en la membrana mitocondrial interna, muy plegada en crestas para aumentar su superficie. Se organizan en cuatro grandes <b>complejos proteicos</b> (I, II, III y IV) y dos transportadores móviles, la <b>ubiquinona</b> o coenzima Q, liposoluble, y el <b>citocromo c</b>. El NADH cede sus electrones al complejo I, y el FADH₂, al complejo II. Los electrones pasan de un transportador a otro, siempre hacia moléculas con mayor afinidad por ellos (mayor potencial de reducción), y en cada salto liberan algo de energía.",
      "Al final de la cadena, el complejo IV, la citocromo oxidasa, entrega los electrones al <b>oxígeno</b>, el aceptor final, que se une a protones y forma <b>agua</b>. Por eso respiramos oxígeno: sin él, la cadena se detiene, el NADH no se reoxida y el ciclo de Krebs se para. Los venenos como el <b>cianuro</b> o el monóxido de carbono bloquean el complejo IV y causan la muerte en minutos. La energía liberada por los electrones no se pierde: los complejos I, III y IV la usan para <b>bombear protones</b> desde la matriz hacia el espacio intermembrana, de modo que se crea una gran diferencia de concentración de protones y de carga eléctrica a ambos lados de la membrana interna.",
    ], svg: cadenaSVG, v: ["cat-c", "Mitocondria y fosforilación oxidativa"] },
    { h: "Fosforilación oxidativa: la quimiosmosis", p: [
      "¿Cómo se usa ese gradiente de protones para fabricar ATP? Lo explicó Peter Mitchell en 1961 con la <mark>teoría quimiosmótica</mark>, que al principio pocos creyeron y que le valió el Nobel en 1978. Los protones acumulados en el espacio intermembrana tienden a volver a la matriz, pero la membrana interna es impermeable a ellos. Solo pueden atravesarla por un canal especial, la <mark>ATP sintasa</mark>, un complejo enzimático con una parte incrustada en la membrana (F₀) y una cabeza en la matriz (F₁).",
      "Al pasar los protones por F₀, esta parte gira como un molino movido por el agua, y el giro provoca cambios de forma en F₁ que unen ADP y fosfato para formar ATP. Es el motor molecular más pequeño conocido. Se estima que por cada NADH que entra en la cadena se forman unos <b>2,5 ATP</b>, y por cada FADH₂, que entra más tarde y bombea menos protones, unos <b>1,5 ATP</b>. Si se hace la membrana permeable a los protones con sustancias desacoplantes, la energía se disipa como calor. Esto es lo que hace, de forma natural, la grasa parda de los recién nacidos y de los animales que hibernan, gracias a una proteína llamada termogenina.",
    ], svg: L5.pasos("Fosforilación oxidativa", ["NADH y FADH₂ ceden e⁻ a la cadena", "La energía bombea H⁺ al espacio intermembrana", "Los H⁺ vuelven por la ATP sintasa", "El giro une ADP + Pᵢ → ATP"], "var(--leaf)") },
    { h: "Balance energético de la respiración", p: [
      "Para calcular cuánto ATP se obtiene de una glucosa en la respiración aerobia hay que sumar el ATP de cada etapa. La <b>glucólisis</b> da 2 ATP y 2 NADH. La <b>descarboxilación</b> de los dos pirúvicos da 2 NADH. Las dos vueltas del <b>ciclo de Krebs</b> dan 2 ATP (GTP), 6 NADH y 2 FADH₂. En total: 4 ATP por fosforilación a nivel de sustrato, 10 NADH y 2 FADH₂. En la cadena respiratoria, 10 NADH × 2,5 = 25 ATP y 2 FADH₂ × 1,5 = 3 ATP. El total es de unos <b>32 ATP</b> por glucosa.",
      "La cifra real suele situarse entre <b>30 y 32 ATP</b>, porque los NADH de la glucólisis se forman en el citosol y deben pasar a la mitocondria mediante lanzaderas, y según cuál se use rinden 2,5 o 1,5 ATP. En libros más antiguos se usan valores de 3 y 2 ATP por coenzima, que dan 36-38 ATP. El <b>rendimiento</b> de la respiración es de alrededor del 40 %: de las 686 kcal que contiene un mol de glucosa, unas 230 quedan en el ATP y el resto se pierde como calor, que en los animales de sangre caliente sirve para mantener la temperatura corporal. Es un rendimiento muy alto si se compara con el de un motor de coche, del 25-30 %.",
    ], svg: L5.barras("ATP por glucosa en cada etapa", "ATP", [["Glucólisis", 7, "var(--sun)", "≈ 7"], ["Pirúvico → acetil", 5, "var(--pen)", "5"], ["Krebs", 20, "var(--red)", "20"], ["Total", 32, "var(--leaf)", "≈ 32"]]) },
    { h: "Las fermentaciones", p: [
      "La <mark>fermentación</mark> es un proceso catabólico anaerobio en el que la oxidación de la materia orgánica es incompleta y el aceptor final de electrones es una molécula orgánica, no el oxígeno. Su finalidad es <b>regenerar el NAD⁺</b> que se gasta en la glucólisis, para que esta pueda continuar. Todo el ATP procede de la glucólisis por fosforilación a nivel de sustrato, así que el rendimiento es muy bajo: <b>2 ATP por glucosa</b>. El producto final aún contiene mucha energía. La realizan muchos microorganismos y también nuestras células musculares cuando falta oxígeno.",
      "En la <b>fermentación láctica</b>, el pirúvico se reduce a <b>ácido láctico</b> con el NADH. La realizan las bacterias lácticas (<i>Lactobacillus</i>, <i>Streptococcus</i>) que transforman la leche en yogur y queso, y nuestros músculos en un esfuerzo intenso. En la <b>fermentación alcohólica</b>, el pirúvico pierde un CO₂ y se transforma en acetaldehído, que se reduce a <b>etanol</b>. La realizan las levaduras como <i>Saccharomyces cerevisiae</i>, y se aprovecha para hacer pan (el CO₂ hace subir la masa y el alcohol se evapora al hornear), vino, cerveza y bioetanol. Existen otras, como la acética, que convierte el vino en vinagre (aunque en realidad es una oxidación aerobia), y la butírica, responsable de olores rancios. En 1857 Louis Pasteur demostró que las fermentaciones son obra de seres vivos.",
    ], svg: L5.compara("Fermentaciones (2 ATP/glucosa)", ["Láctica", ["pirúvico → lactato", "sin CO₂", "Lactobacillus, músculo", "yogur, queso"]], ["Alcohólica", ["pirúvico → etanol", "+ CO₂", "levaduras", "pan, vino, cerveza"]], "var(--pen)", "#b45309"), v: ["cat-d", "Fermentación láctica y alcohólica"] },
    { h: "Catabolismo de lípidos y de proteínas", p: [
      "Las grasas son la principal reserva energética de los animales. Las <b>lipasas</b> hidrolizan los triglicéridos en glicerina y ácidos grasos. La glicerina se transforma en una triosa fosfato y entra en la glucólisis. Los ácidos grasos se activan en el citosol uniéndose al coenzima A, entran en la mitocondria gracias a la carnitina y se degradan en la matriz por la <mark>β-oxidación</mark> o hélice de Lynen: en cada vuelta, el ácido graso pierde un fragmento de dos carbonos en forma de acetil-CoA y se forman 1 FADH₂ y 1 NADH. Un ácido graso de 16 carbonos, el palmítico, da 7 vueltas y produce 8 acetil-CoA, 7 FADH₂ y 7 NADH, que rinden en total unos <b>106 ATP</b>. Por eso las grasas aportan más del doble de energía por gramo (9 kcal) que los glúcidos (4 kcal).",
      "Las proteínas se usan como fuente de energía sobre todo en el ayuno prolongado o con dietas muy ricas en proteínas. Se hidrolizan a <b>aminoácidos</b>, que pierden su grupo amino por <b>transaminación</b> (lo ceden a otra molécula) y <b>desaminación oxidativa</b> en el hígado. El esqueleto carbonado resultante se convierte en pirúvico, acetil-CoA o intermediarios del ciclo de Krebs. El grupo amino se libera como <b>amoníaco</b>, muy tóxico, que cada grupo de animales elimina de forma distinta según el agua de que disponga: los peces lo eliminan directamente, los mamíferos lo transforman en <b>urea</b> en el ciclo de la urea del hígado, y las aves y los reptiles, en <b>ácido úrico</b>, casi insoluble, que ahorra agua.",
    ], svg: arbol("Convergencia en el acetil-CoA", "ACETIL-CoA", [["Glúcidos", "glucólisis"], ["Grasas", "β-oxidación"], ["Proteínas", "desaminación"]], "var(--red)"), v: ["cat-e", "Beta oxidación de los ácidos grasos"] },
  ],
  figura: { titulo: "Metabolismo y catabolismo", items: [["Glucólisis", "citosol", "glucosa → 2 pirúvico", "2 ATP + 2 NADH"], ["Krebs", "matriz", "acetil-CoA → 2 CO₂", "3 NADH, FADH₂, GTP"], ["Cadena", "membrana interna", "e⁻ al O₂ → H₂O", "≈ 28 ATP"], ["Fermentación", "sin O₂", "láctica o alcohólica", "2 ATP"]] },
  video: ["cat-a", "Respiración celular"],
  ejemplos: [
    ["Calcula el ATP obtenido por la oxidación completa de una glucosa (2,5 ATP/NADH y 1,5 ATP/FADH₂).", ["Glucólisis: 2 ATP + 2 NADH.", "Descarboxilación: 2 NADH.", "Krebs (×2): 2 ATP + 6 NADH + 2 FADH₂.", "Total: 4 ATP + 10 NADH (25) + 2 FADH₂ (3)."], "≈ 32 ATP por glucosa."],
    ["Compara cuántas glucosas consume una levadura para obtener 64 ATP en aerobiosis y en anaerobiosis.", ["Aerobiosis: 32 ATP/glucosa → 2 glucosas.", "Anaerobiosis: 2 ATP/glucosa → 32 glucosas."], "Sin oxígeno consume 16 veces más glucosa (efecto Pasteur)."],
    ["Calcula el número de vueltas de β-oxidación y los acetil-CoA de un ácido graso de 18 carbonos (esteárico).", ["Vueltas = n/2 − 1 = 18/2 − 1 = 8.", "Acetil-CoA = n/2 = 9.", "Se forman 8 NADH y 8 FADH₂."], "8 vueltas; 9 acetil-CoA, 8 NADH y 8 FADH₂."],
    ["Calcula el ATP que rinde el ácido esteárico (activación: −2 ATP; acetil-CoA = 10 ATP).", ["9 acetil-CoA × 10 = 90 ATP.", "8 NADH × 2,5 = 20; 8 FADH₂ × 1,5 = 12.", "90 + 20 + 12 − 2 = 120."], "≈ 120 ATP por molécula de ácido esteárico."],
    ["¿Cuántos ATP rinde una vuelta completa del ciclo de Krebs a partir de un acetil-CoA?", ["1 GTP = 1 ATP.", "3 NADH × 2,5 = 7,5.", "1 FADH₂ × 1,5 = 1,5."], "10 ATP por acetil-CoA."],
    ["Calcula el rendimiento de la respiración si una glucosa (686 kcal/mol) produce 32 ATP (7,3 kcal/mol).", ["Energía en ATP: 32 × 7,3 = 233,6 kcal.", "Rendimiento: 233,6 / 686 · 100."], "≈ 34 %; el resto se libera como calor."],
  ],
  errores: [
    "Pensar que la glucólisis necesita oxígeno: ocurre en el citosol y es anaerobia.",
    "Decir que el ciclo de Krebs produce mucho ATP: su función principal es generar NADH y FADH₂.",
    "Creer que el CO₂ que exhalamos procede del oxígeno: procede de las descarboxilaciones del pirúvico y del ciclo de Krebs.",
    "Confundir respiración celular con ventilación pulmonar: la primera es un proceso químico en las mitocondrias.",
    "Pensar que la fermentación produce ATP en la propia fermentación: todo su ATP sale de la glucólisis; la fermentación solo regenera NAD⁺.",
    "Creer que las plantas no respiran porque hacen la fotosíntesis: todas las células vegetales respiran día y noche.",
  ],
  ejercicios: {
    b: [
      ["Define catabolismo y anabolismo.", "Catabolismo: degradación oxidativa que libera energía. Anabolismo: síntesis reductora que consume energía."],
      ["¿Por qué se dice que el ATP es la moneda energética de la célula?", "Almacena la energía del catabolismo en enlaces fosfato y la cede a todos los procesos que la necesitan."],
      ["Diferencia la fosforilación a nivel de sustrato y la oxidativa.", "Sustrato: un metabolito cede su fosfato al ADP. Oxidativa: la ATP sintasa usa un gradiente de protones creado por el transporte de electrones."],
      ["¿Qué función tienen el NAD⁺ y el FAD?", "Transportan electrones e hidrógenos desde las oxidaciones del catabolismo hasta la cadena respiratoria."],
      ["Define autótrofo y heterótrofo y pon un ejemplo de cada uno.", "Autótrofo: usa CO₂ como fuente de carbono (planta). Heterótrofo: usa materia orgánica (animal)."],
      ["Indica dónde ocurre cada etapa de la respiración celular.", "Glucólisis: citosol. Descarboxilación y Krebs: matriz mitocondrial. Cadena y ATP sintasa: membrana interna."],
      ["Escribe el balance neto de la glucólisis.", "Glucosa → 2 pirúvico + 2 ATP + 2 NADH."],
      ["¿Qué es el acetil-CoA y de dónde procede?", "Grupo acetilo unido al coenzima A; procede de glúcidos (pirúvico), ácidos grasos (β-oxidación) y aminoácidos."],
      ["¿Qué productos se obtienen en una vuelta del ciclo de Krebs?", "2 CO₂, 3 NADH, 1 FADH₂ y 1 GTP."],
      ["¿Cuál es el aceptor final de electrones en la respiración aerobia?", "El oxígeno, que forma agua."],
      ["¿Qué es una fermentación?", "Catabolismo anaerobio con oxidación incompleta; el aceptor final de electrones es una molécula orgánica."],
      ["Pon un ejemplo de uso industrial de cada tipo de fermentación.", "Láctica: yogur y queso. Alcohólica: pan, vino y cerveza."],
    ],
    m: [
      ["Explica las dos fases de la glucólisis.", "Preparatoria: se invierten 2 ATP y la glucosa se rompe en 2 triosas fosfato. Rendimiento: se oxidan las triosas (2 NADH) y se forman 4 ATP."],
      ["Describe la descarboxilación oxidativa del pirúvico.", "En la matriz, el complejo piruvato deshidrogenasa quita un CO₂, reduce NAD⁺ a NADH y une el acetilo al CoA."],
      ["¿Por qué el ciclo de Krebs solo funciona en aerobiosis si no usa O₂?", "Necesita NAD⁺ y FAD oxidados, que solo regenera la cadena respiratoria, cuyo aceptor final es el O₂."],
      ["Explica la teoría quimiosmótica.", "La cadena bombea H⁺ al espacio intermembrana; el gradiente impulsa los H⁺ de vuelta a la matriz por la ATP sintasa, que fabrica ATP."],
      ["¿Por qué el FADH₂ rinde menos ATP que el NADH?", "Cede sus electrones al complejo II, saltándose el I, y se bombean menos protones."],
      ["Explica por qué el cianuro es mortal.", "Bloquea la citocromo oxidasa (complejo IV): se detiene la cadena, no se forma ATP y las células mueren."],
      ["Compara la respiración aerobia y la fermentación.", "Respiración: oxidación completa, aceptor O₂, ≈ 32 ATP. Fermentación: incompleta, aceptor orgánico, 2 ATP."],
      ["Explica por qué el pan sube y por qué no tiene alcohol.", "Las levaduras fermentan y el CO₂ forma burbujas en la masa; el etanol se evapora al hornear."],
      ["Describe la β-oxidación.", "En la matriz, cada vuelta separa un acetil-CoA del ácido graso y forma 1 FADH₂ y 1 NADH."],
      ["¿Por qué los animales no pueden sintetizar glucosa a partir de ácidos grasos?", "Los ácidos grasos dan acetil-CoA, y el paso de pirúvico a acetil-CoA es irreversible."],
      ["Explica el destino del grupo amino de los aminoácidos en distintos animales.", "Se libera como amoníaco; peces: amoníaco; mamíferos: urea; aves y reptiles: ácido úrico."],
      ["¿Qué significa que el ciclo de Krebs sea anfibólico?", "Que es a la vez catabólico (oxida acetil-CoA) y anabólico (sus intermediarios sirven para sintetizar otras moléculas)."],
    ],
    a: [
      ["(Tipo PAU) Indica, para la oxidación completa de la glucosa, en qué etapas se produce CO₂, se consume O₂ y se forma H₂O.", "CO₂: descarboxilación del pirúvico y ciclo de Krebs. O₂ consumido y H₂O formada: final de la cadena respiratoria (complejo IV)."],
      ["(Tipo PAU) Un cultivo de levaduras pasa de aerobiosis a anaerobiosis. ¿Qué ocurre con el consumo de glucosa, la producción de CO₂ y la de etanol?", "Aumenta mucho el consumo de glucosa (efecto Pasteur), aparece etanol y se sigue produciendo CO₂ (en la fermentación alcohólica), aunque menos por glucosa."],
      ["(Tipo PAU) Se marca con ¹⁸O el oxígeno respirado por un ratón. ¿En qué molécula aparecerá el isótopo?", "En el agua formada en la cadena respiratoria, no en el CO₂."],
      ["El dinitrofenol, que hace la membrana mitocondrial permeable a H⁺, se usó como adelgazante. Explica su efecto y su peligro.", "Desacopla: la cadena funciona pero no se forma ATP; se oxidan más nutrientes y la energía se pierde como calor. Puede causar hipertermia mortal."],
      ["Calcula el ATP de un ácido graso de 14 carbonos (mirístico): activación −2 ATP, 10 ATP/acetil-CoA, 2,5 ATP/NADH y 1,5 ATP/FADH₂.", "7 acetil-CoA (70) + 6 NADH (15) + 6 FADH₂ (9) − 2 = 92 ATP."],
      ["Explica por qué los atletas de fondo y los velocistas obtienen energía de rutas distintas.", "Fondo: esfuerzo moderado y largo, hay O₂, respiración aerobia de glúcidos y grasas. Velocidad: esfuerzo intenso y corto, falta O₂, fosfocreatina y fermentación láctica."],
      ["Un ratón con un ciclo de Krebs bloqueado, ¿podría fabricar ATP? ¿Cuánto por glucosa?", "Solo el de la glucólisis, regenerando NAD⁺ por fermentación: 2 ATP por glucosa."],
      ["La grasa parda tiene mitocondrias con termogenina. ¿Para qué sirve en un oso que hiberna?", "Desacopla la fosforilación: la energía del gradiente se libera como calor para mantener la temperatura corporal."],
      ["Calcula la masa de glucosa necesaria para producir 1 mol de ATP por respiración (32 ATP/glucosa) y por fermentación (M glucosa = 180 g/mol).", "Respiración: 180/32 ≈ 5,6 g. Fermentación: 180/2 = 90 g."],
    ],
  },
  quiz: [
    ["El catabolismo es…", ["síntesis reductora", "degradación oxidativa", "consumo de energía", "divergente"], 1, "Libera energía."],
    ["La hidrólisis del ATP libera unas…", ["7,3 kcal/mol", "686 kcal/mol", "1 kcal/mol", "73 kcal/mol"], 0, "ATP → ADP + Pᵢ."],
    ["El NADPH se usa sobre todo en…", ["el anabolismo", "la glucólisis", "la fermentación", "la β-oxidación"], 0, "Poder reductor."],
    ["Las plantas son…", ["fotoautótrofas", "quimioautótrofas", "fotoheterótrofas", "quimioheterótrofas"], 0, "Luz y CO₂."],
    ["Las levaduras son anaerobias…", ["estrictas", "facultativas", "obligadas", "fotosintéticas"], 1, "Con o sin O₂."],
    ["La glucólisis ocurre en el…", ["citosol", "núcleo", "matriz mitocondrial", "cloroplasto"], 0, "Anaerobia."],
    ["El balance neto de ATP de la glucólisis es…", ["2", "4", "32", "0"], 0, "4 − 2."],
    ["El complejo piruvato deshidrogenasa produce…", ["acetil-CoA, CO₂ y NADH", "glucosa", "lactato", "ATP"], 0, "En la matriz."],
    ["El acetil-CoA se une al… para iniciar el ciclo de Krebs", ["oxalacético", "pirúvico", "láctico", "cítrico"], 0, "Forma cítrico."],
    ["Por vuelta, el ciclo de Krebs forma… NADH", ["3", "1", "2", "6"], 0, "Y 1 FADH₂."],
    ["El aceptor final de la cadena respiratoria es el…", ["O₂", "NAD⁺", "CO₂", "pirúvico"], 0, "Forma agua."],
    ["El cianuro bloquea el…", ["complejo IV", "ciclo de Krebs", "glucólisis", "complejo II"], 0, "Citocromo oxidasa."],
    ["La teoría quimiosmótica es de…", ["Mitchell", "Krebs", "Pasteur", "Calvin"], 0, "Nobel 1978."],
    ["La ATP sintasa funciona gracias a un gradiente de…", ["protones", "sodio", "glucosa", "electrones"], 0, "Fuerza protón-motriz."],
    ["Un NADH rinde aprox.… ATP", ["2,5", "1,5", "1", "10"], 0, "FADH₂: 1,5."],
    ["La respiración da aprox.… ATP por glucosa", ["30-32", "2", "100", "8"], 0, "Oxidación completa."],
    ["La fermentación sirve para regenerar el…", ["NAD⁺", "ATP", "O₂", "CoA"], 0, "Para la glucólisis."],
    ["El yogur se obtiene por fermentación…", ["láctica", "alcohólica", "acética", "butírica"], 0, "Lactobacillus."],
    ["La β-oxidación ocurre en la…", ["matriz mitocondrial", "membrana plasmática", "cromatina", "pared celular"], 0, "Hélice de Lynen."],
    ["Los mamíferos eliminan el nitrógeno como…", ["urea", "amoníaco", "ácido úrico", "nitrato"], 0, "Ciclo de la urea."],
  ],
  examen: [
    ["Un ácido graso de 16 C da… acetil-CoA", ["8", "16", "7", "4"], 0, "16/2."],
    ["Un ácido graso de 16 C da… vueltas de β-oxidación", ["7", "8", "16", "6"], 0, "n/2 − 1."],
    ["El CO₂ de la respiración se forma en…", ["descarboxilación y Krebs", "la glucólisis", "la cadena", "la ATP sintasa"], 0, "Descarboxilaciones."],
    ["En la fermentación alcohólica se produce…", ["etanol y CO₂", "lactato", "agua", "acetil-CoA"], 0, "Levaduras."],
    ["Por cada glucosa el ciclo de Krebs gira…", ["2 veces", "1 vez", "4 veces", "6 veces"], 0, "2 acetil-CoA."],
    ["Una vuelta de Krebs equivale a… ATP", ["10", "2", "32", "4"], 0, "1 + 7,5 + 1,5."],
    ["Los desacoplantes hacen que la energía se libere como…", ["calor", "ATP", "glucosa", "luz"], 0, "Termogenina."],
    ["Las aves eliminan el nitrógeno como…", ["ácido úrico", "urea", "amoníaco", "nitrógeno gas"], 0, "Ahorra agua."],
  ],
  feynman: ["Por qué la célula no quema la glucosa de golpe", "Qué es el ATP y cómo se fabrica", "Para qué sirve el ciclo de Krebs si da poco ATP", "Por qué necesitamos respirar oxígeno", "Cómo funciona el motor de la ATP sintasa", "Por qué fermentan las levaduras sin oxígeno"],
  mapa: ["CATABOLISMO", [["ATP y coenzimas", "moneda energética, NADH"], ["Glucólisis", "citosol, 2 ATP"], ["Krebs y cadena", "mitocondria, ≈ 30 ATP"], ["Otras rutas", "fermentación, β-oxidación"]]],
  tarjetas: [
    ["Metabolismo", "Catabolismo (degrada, libera) + anabolismo (construye, consume)."],
    ["ATP", "Adenina + ribosa + 3 P; 7,3 kcal/mol por enlace."],
    ["NAD⁺/NADH", "Transportador de electrones del catabolismo."],
    ["4 tipos de nutrición", "Foto/quimio × auto/heterótrofo."],
    ["Glucólisis", "Citosol; glucosa → 2 pirúvico; 2 ATP + 2 NADH."],
    ["Descarboxilación", "Pirúvico → acetil-CoA + CO₂ + NADH."],
    ["Ciclo de Krebs", "Matriz; por vuelta: 2 CO₂, 3 NADH, FADH₂, GTP."],
    ["Cadena respiratoria", "Membrana interna; e⁻ → O₂; bombea H⁺."],
    ["Quimiosmosis", "Gradiente de H⁺ → ATP sintasa → ATP (Mitchell)."],
    ["Balance", "≈ 30-32 ATP por glucosa; rendimiento ≈ 40 %."],
    ["Fermentación", "Anaerobia; regenera NAD⁺; 2 ATP; láctica o alcohólica."],
    ["β-oxidación", "Ácido graso → n/2 acetil-CoA; matriz."],
  ],
  glosario: [
    ["Ruta metabólica", "Secuencia de reacciones enzimáticas en la que el producto de una es sustrato de la siguiente."],
    ["Catabolismo", "Conjunto de reacciones de degradación que liberan energía."],
    ["Anabolismo", "Conjunto de reacciones de síntesis que consumen energía."],
    ["ATP", "Nucleótido que almacena y transfiere energía en la célula."],
    ["Coenzima reducido", "NADH o FADH₂, que transportan electrones hacia la cadena respiratoria."],
    ["Quimiótrofo", "Organismo que obtiene energía de reacciones químicas."],
    ["Glucólisis", "Ruta que degrada la glucosa a dos moléculas de ácido pirúvico."],
    ["Acetil-CoA", "Molécula con un grupo acetilo unido al coenzima A, encrucijada del metabolismo."],
    ["Ciclo de Krebs", "Ruta cíclica de la matriz mitocondrial que oxida el acetil-CoA a CO₂."],
    ["Cadena respiratoria", "Serie de transportadores que llevan los electrones del NADH al oxígeno."],
    ["ATP sintasa", "Enzima que fabrica ATP aprovechando el paso de protones."],
    ["Quimiosmosis", "Síntesis de ATP acoplada a un gradiente de protones a través de una membrana."],
    ["Fermentación", "Catabolismo anaerobio con un aceptor final de electrones orgánico."],
    ["Efecto Pasteur", "Disminución del consumo de glucosa de una célula al pasar de anaerobiosis a aerobiosis."],
    ["β-oxidación", "Ruta que degrada los ácidos grasos en unidades de acetil-CoA."],
    ["Desaminación", "Eliminación del grupo amino de un aminoácido."],
  ],
  situacion: {
    titulo: "Levaduras a prueba: ¿qué azúcar fermenta mejor?",
    reto: "Vuestro equipo debe diseñar un experimento para comparar la velocidad de fermentación de distintos azúcares por la levadura de panadería midiendo el CO₂ desprendido.",
    pasos: [
      "Preparad disoluciones iguales de glucosa, sacarosa, lactosa y almidón, y un control con agua.",
      "Añadid la misma cantidad de levadura a cada una, en botellas cerradas con un globo o en jeringas.",
      "Mantenedlas a 35 °C y medid cada 10 minutos el volumen de gas producido.",
      "Representad los resultados en una gráfica y relacionadlos con las enzimas de la levadura.",
      "Comprobad que el gas es CO₂ con agua de cal.",
    ],
    producto: "Un informe con el diseño experimental, las gráficas y una explicación bioquímica de los resultados.",
    evaluacion: ["El diseño controla las variables (temperatura, cantidad de levadura).", "Las medidas son sistemáticas y se representan bien.", "La explicación relaciona los resultados con la glucólisis y la fermentación."],
  },
  familias: [
    "Haced pan en casa y observad cómo sube la masa por el CO₂ de la fermentación.",
    "Preparad yogur casero con leche y un yogur natural, y hablad de las bacterias lácticas.",
    "Comentad juntos las etiquetas de los alimentos: cuántas kcal aportan las grasas y cuántas los azúcares.",
    "Hablad de por qué se jadea y se suda al hacer ejercicio intenso.",
  ],
  saberes: "bloque «Metabolismo»: concepto de metabolismo, catabolismo y anabolismo; el ATP y los coenzimas; tipos de nutrición; la respiración celular (glucólisis, ciclo de Krebs, cadena de transporte electrónico y fosforilación oxidativa) y su balance energético; las fermentaciones y sus aplicaciones; el catabolismo de lípidos y proteínas.",
  ideas: [
    "Experimento de fermentación con levaduras y distintos azúcares midiendo el CO₂.",
    "Elaboración de yogur y observación al microscopio de las bacterias lácticas.",
    "Modelo físico de la ATP sintasa como molino de agua.",
    "Cálculo de balances energéticos de distintos nutrientes y comparación con las etiquetas de alimentos.",
  ],
  fuentes: [
    { t: "Khan Academy en español: respiración celular", url: "https://es.khanacademy.org/science/biology/cellular-respiration-and-fermentation" },
  ],
});
