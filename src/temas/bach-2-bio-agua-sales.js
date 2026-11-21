// Biología 2º Bachillerato · Bioelementos, agua y sales minerales (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, agua, cadena, arbol } = require("./_bach2-bio");

// Puentes de hidrógeno entre moléculas de agua.
const puentesSVG = marco("Moléculas de agua unidas por puentes de hidrógeno: el oxígeno de una atrae a los hidrógenos de las vecinas", `
  ${agua(130, 80, 1.1)}${agua(52, 40, 0.9)}${agua(208, 40, 0.9)}${agua(64, 132, 0.9)}${agua(196, 132, 0.9)}
  <path d="M118 94 L 70 126" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><path d="M142 94 L 190 126" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>
  <path d="M120 76 L 66 50" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><path d="M140 76 L 194 50" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>
  ${T(130, 172, "- - - puente de hidrógeno", { fs: 12, b: true, c: "var(--pen)" })}`);

// Glóbulos rojos en medios de distinta concentración.
const osmosisSVG = marco("Ósmosis en glóbulos rojos: en medio hipotónico se hinchan y estallan, en isotónico no cambian y en hipertónico se arrugan", `
  ${[[45, "Hipotónico", "turgencia / hemólisis", 30, "var(--water)"], [130, "Isotónico", "sin cambio", 24, "var(--leaf)"], [215, "Hipertónico", "plasmólisis", 17, "var(--red)"]].map(([x, t, d, r, c]) => `
  <rect x="${x - 40}" y="22" width="80" height="120" rx="10" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>
  ${r === 17 ? `<path d="M${x - 17} 82 q 6 -16 12 -4 q 6 -18 12 -2 q 10 4 4 14 q 6 12 -8 12 q -8 10 -14 -2 q -12 0 -6 -18 z" fill="var(--red)" fill-opacity=".6"/>` : `<circle cx="${x}" cy="82" r="${r}" fill="var(--red)" fill-opacity="${r === 30 ? 0.35 : 0.6}" stroke="var(--red)" stroke-width="2"/>`}
  ${T(x, 16, t, { fs: 11, b: true, c })}${T(x, 158, d, { fs: 9.5 })}`).join("")}
  <path d="M30 60 l 8 8 M30 104 l 8 -8 M60 60 l -8 8 M60 104 l -8 -8" stroke="var(--water)" stroke-width="2"/>
  <path d="M206 72 l -8 -6 M224 72 l 8 -6 M206 94 l -8 6 M224 94 l 8 6" stroke="var(--red)" stroke-width="2"/>
  ${T(130, 174, "el agua pasa hacia el medio más concentrado", { fs: 10, b: true, c: "var(--muted)" })}`);

// Bioelementos en el cuerpo humano.
const bioelSVG = L5.barras("Composición del cuerpo humano en bioelementos (% en masa)", "% de la masa corporal", [
  ["O", 65, "var(--red)", "65 %"], ["C", 18.5, "var(--ink)", "18,5 %"], ["H", 9.5, "var(--pen)", "9,5 %"], ["N", 3.3, "var(--leaf)", "3,3 %"], ["Ca", 1.5, "var(--sun)", "1,5 %"], ["P", 1, "#b45309", "1 %"],
]);

module.exports = tema({
  titulo: "Bioelementos, agua y sales minerales",
  minutos: 120,
  secciones: [3, 4, 5],
  objetivos: [
    "Clasificar los bioelementos y justificar por qué el carbono es la base química de la vida",
    "Distinguir las biomoléculas inorgánicas y orgánicas y los enlaces que las mantienen unidas",
    "Relacionar la estructura dipolar del agua y los puentes de hidrógeno con sus propiedades",
    "Explicar las funciones biológicas del agua y el significado del pH",
    "Describir las funciones de las sales minerales precipitadas y disueltas",
    "Explicar la difusión, la ósmosis, la diálisis y los sistemas tampón, y predecir su efecto sobre las células",
  ],
  claves: ["bioelemento", "oligoelemento", "biomolécula", "enlace covalente", "puente de hidrógeno", "dipolo", "calor específico", "capilaridad", "disolvente universal", "pH", "sales minerales", "ósmosis", "medio hipertónico", "medio hipotónico", "sistema tampón", "diálisis"],
  pregunta: {
    texto: "¿Por qué una lechuga aliñada con sal se pone mustia a los pocos minutos?",
    respuesta: "Por <mark>ósmosis</mark>. La sal disuelta en el aliño crea fuera de las células un medio <b>hipertónico</b>, más concentrado que el citoplasma. La membrana plasmática deja pasar el agua, que sale de las células hacia el medio más concentrado. Las células pierden turgencia, la vacuola se encoge y la membrana se separa de la pared (<b>plasmólisis</b>): la hoja deja de estar tiesa. Por eso la ensalada se aliña justo antes de servirla.",
  },
  lectura: {
    titulo: "Agua en Marte, vida en la Tierra",
    html: `<p>Cuando la NASA anuncia que ha encontrado indicios de agua en Marte o en Europa, la luna helada de Júpiter, los titulares hablan enseguida de vida. No es una exageración. Todos los seres vivos conocidos están formados por un 60 a un 95 % de agua, y ninguna célula puede funcionar sin ella: en el agua se disuelven los nutrientes, en el agua ocurren casi todas las reacciones del metabolismo y el agua transporta los desechos fuera del organismo.</p><p>Tampoco es casualidad de qué estamos hechos. De los 92 elementos naturales, solo unos 25 forman parte de los seres vivos, y seis de ellos (carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre) suman el 99 % de nuestra masa. El carbono forma cadenas largas y estables; el hidrógeno y el oxígeno, junto con el agua, crean el ambiente en el que esas cadenas reaccionan. En este primer tema del curso estudiarás los ladrillos más pequeños de la vida: los bioelementos, el agua y las sales minerales. Comprenderás por qué el hielo flota, por qué sudamos para refrescarnos, por qué un suero intravenoso debe tener la concentración exacta de sal y por qué nuestra sangre mantiene su pH entre 7,35 y 7,45 aunque comamos alimentos muy ácidos.</p>`,
  },
  bloques: [
    { h: "Los bioelementos", p: [
      "Los <mark>bioelementos</mark> o elementos biogénicos son los elementos químicos que forman parte de los seres vivos. Se conocen unos 70, pero solo unos 25 están presentes en todos los organismos. Se clasifican según su abundancia. Los <b>bioelementos primarios</b> (C, H, O, N, P y S) constituyen alrededor del 96 % de la materia viva y forman las biomoléculas orgánicas. Los <b>bioelementos secundarios</b> (Na, K, Ca, Mg y Cl) suponen alrededor del 3,9 % y aparecen sobre todo como iones: el Na⁺ y el K⁺ intervienen en el impulso nervioso; el Ca²⁺, en la contracción muscular, la coagulación y los huesos; el Mg²⁺, en la clorofila y como cofactor enzimático; el Cl⁻, en el equilibrio de cargas.",
      "Los <mark>oligoelementos</mark> están en proporciones inferiores al 0,1 %, pero son imprescindibles: su falta o su exceso provocan enfermedades. Destacan el <b>hierro</b> (hemoglobina, citocromos), el <b>yodo</b> (hormonas tiroideas: su déficit causa bocio), el <b>flúor</b> (esmalte dental), el <b>cobre</b>, el <b>zinc</b> y el <b>manganeso</b> (cofactores enzimáticos), el <b>cobalto</b> (vitamina B₁₂) y el <b>selenio</b>. Que un elemento sea escaso no significa que sea poco importante: una cantidad mínima de yodo en la dieta evita graves trastornos del desarrollo.",
    ], svg: bioelSVG, v: ["agua-b", "Bioelementos primarios, secundarios y oligoelementos"] },
    { h: "El carbono, base de la vida", p: [
      "Los bioelementos primarios tienen propiedades que los hacen ideales para construir moléculas biológicas. Son ligeros y forman <b>enlaces covalentes</b> estables; además, el O y el N son muy electronegativos y originan enlaces polares, que dan solubilidad en agua. El <mark>carbono</mark> es el más especial: tiene cuatro electrones de valencia y forma cuatro enlaces covalentes dirigidos hacia los vértices de un tetraedro, de modo que construye cadenas lineales, ramificadas o cíclicas, con enlaces simples, dobles o triples. Esto permite una diversidad casi infinita de moléculas tridimensionales.",
      "Además, los enlaces C–C son lo bastante fuertes para ser estables y lo bastante débiles para romperse en las reacciones del metabolismo, liberando energía. El carbono se une a <b>grupos funcionales</b> que dan a las moléculas sus propiedades químicas: hidroxilo (–OH), carbonilo (aldehído –CHO y cetona C=O), carboxilo (–COOH), amino (–NH₂), fosfato (–PO₄²⁻) y sulfhidrilo (–SH). El silicio, del mismo grupo que el carbono, no sirve como base de la vida: sus enlaces Si–Si son débiles, y el SiO₂ que forma al oxidarse es un sólido insoluble, mientras que el CO₂ es un gas soluble que se intercambia fácilmente con el ambiente.",
    ], svg: L6.tabla("Grupos funcionales de las biomoléculas", ["Grupo", "Fórmula", "Presente en"], [["Hidroxilo", "–OH", "glúcidos, alcoholes"], ["Carbonilo", "–CHO / C=O", "monosacáridos"], ["Carboxilo", "–COOH", "ácidos grasos, aminoácidos"], ["Amino", "–NH₂", "aminoácidos"], ["Fosfato", "–PO₄²⁻", "nucleótidos, fosfolípidos"]]) },
    { h: "Las biomoléculas y sus enlaces", p: [
      "Los bioelementos se unen para formar <mark>biomoléculas</mark> o principios inmediatos, que se pueden separar de la materia viva por métodos físicos (filtración, centrifugación, cromatografía, electroforesis) sin alterarlas. Las <b>biomoléculas inorgánicas</b> también existen fuera de los seres vivos: el agua, las sales minerales y gases como el O₂ y el CO₂. Las <b>biomoléculas orgánicas</b> son exclusivas de los seres vivos y tienen un esqueleto de carbono: <b>glúcidos</b>, <b>lípidos</b>, <b>proteínas</b> y <b>ácidos nucleicos</b>. Muchas son <b>polímeros</b> formados por la unión de monómeros: polisacáridos de monosacáridos, proteínas de aminoácidos y ácidos nucleicos de nucleótidos.",
      "Dentro de cada molécula los átomos se unen por <b>enlaces covalentes</b>, fuertes. Entre moléculas o entre partes distantes de una misma macromolécula actúan <b>enlaces débiles</b>: puentes de hidrógeno, interacciones iónicas, fuerzas de Van der Waals e interacciones hidrofóbicas. Aunque cada uno es débil, actúan en gran número y son los responsables de la forma tridimensional de las proteínas y del ADN, del reconocimiento entre moléculas (enzima-sustrato, antígeno-anticuerpo) y de que estas uniones se puedan hacer y deshacer con facilidad.",
    ], svg: arbol("Clasificación de las biomoléculas", "BIOMOLÉCULAS", [["Inorgánicas", "agua, sales minerales, gases"], ["Glúcidos", "energía y estructura"], ["Lípidos", "reserva y membranas"], ["Otras", "proteínas y ácidos nucleicos"]]) },
    { h: "Estructura de la molécula de agua", p: [
      "El <mark>agua</mark> es la biomolécula más abundante: supone entre el 60 y el 70 % de la masa del cuerpo humano, un 95 % de una medusa y solo un 10 % de la dentina de un diente. Su proporción depende de la actividad del tejido: el cerebro tiene más agua que el tejido óseo, y un embrión, más que un adulto. Una molécula de H₂O está formada por un átomo de oxígeno unido a dos de hidrógeno mediante enlaces covalentes, con un ángulo de 104,5°.",
      "El oxígeno es mucho más electronegativo que el hidrógeno y atrae hacia sí los electrones compartidos. Por eso la molécula es un <b>dipolo</b>: hay una carga parcial negativa (δ−) en el oxígeno y cargas parciales positivas (δ+) en los hidrógenos. La zona δ− de una molécula atrae a las zonas δ+ de las vecinas y forma con ellas <mark>puentes de hidrógeno</mark>. Cada molécula puede formar hasta cuatro. Son enlaces débiles que se forman y se rompen continuamente (cada uno dura unos picosegundos), pero hay tantos que el agua líquida se comporta como una red cohesionada. Casi todas sus propiedades excepcionales se explican por estos puentes.",
    ], svg: puentesSVG },
    { h: "Propiedades físico-químicas del agua", p: [
      "Por los puentes de hidrógeno, el agua es <b>líquida</b> a temperatura ambiente, aunque moléculas de masa parecida, como el H₂S, son gases. Tiene una gran <b>cohesión</b> y una elevada <b>tensión superficial</b>, que permite a algunos insectos caminar sobre ella; y una fuerte <b>adhesión</b> a otras superficies polares, que junto con la cohesión origina la <mark>capilaridad</mark>: el agua asciende por tubos finos, como los vasos del xilema de las plantas. Además, es prácticamente incompresible.",
      "Tiene un <b>calor específico</b> muy alto (4,18 J/g·°C): hace falta mucha energía para calentarla, porque primero hay que romper puentes de hidrógeno. También su <b>calor de vaporización</b> es muy alto. Su <b>densidad</b> es máxima a 4 °C y el hielo es menos denso que el agua líquida, porque al congelarse forma una red abierta. Por eso el hielo flota y aísla el agua de debajo, que no se congela. Por último, es el mejor <b>disolvente</b> de sustancias polares e iónicas, y su <b>ionización</b> es muy débil: solo una molécula de cada 555 millones está disociada.",
    ], svg: L6.tabla("Propiedades del agua y su causa", ["Propiedad", "Valor", "Por…"], [["Calor específico", "4,18 J/g·°C", "puentes de H"], ["Calor de vaporización", "2257 J/g", "puentes de H"], ["Densidad máxima", "a 4 °C", "red del hielo"], ["Tensión superficial", "muy alta", "cohesión"], ["Constante dieléctrica", "80", "polaridad"]]), v: ["agua-c", "El agua: propiedades físicas y químicas"] },
    { h: "Funciones biológicas del agua", p: [
      "Cada propiedad del agua se traduce en una función biológica. Como <mark>disolvente universal</mark>, disuelve los compuestos iónicos (rodea los iones formando una capa de solvatación) y las moléculas polares, como los azúcares y los aminoácidos; las moléculas <b>anfipáticas</b>, con una parte polar y otra apolar, forman micelas o bicapas. Esta capacidad hace del agua el medio donde ocurren las reacciones del metabolismo y la base del <b>transporte</b> de sustancias por la sangre, la savia o la orina. El agua también es un <b>reactivo</b>: participa en la hidrólisis de los polímeros y en la fotosíntesis, donde se rompe para liberar oxígeno.",
      "Su alto calor específico la convierte en un <b>amortiguador térmico</b>: los organismos y los océanos cambian de temperatura muy despacio. Su alto calor de vaporización permite la <b>termorregulación</b>: al evaporarse el sudor, se lleva mucho calor del cuerpo. Su cohesión e incompresibilidad le dan una función <b>estructural</b>: mantiene la turgencia de las células vegetales y forma el esqueleto hidrostático de las lombrices. Finalmente, tiene función <b>amortiguadora mecánica</b> (líquido sinovial de las articulaciones, líquido cefalorraquídeo, líquido amniótico) y lubricante (lágrimas, mucosas).",
    ], svg: L6.radial("Funciones biológicas del agua", "AGUA", ["Disolvente", "Transporte", "Térmica", "Estructural", "Amortiguadora", "Reactivo"], "var(--water)") },
    { h: "Ionización del agua y pH", p: [
      "Una pequeñísima fracción de las moléculas de agua se disocia: H₂O ⇌ H⁺ + OH⁻ (en realidad, el H⁺ se une a otra molécula y forma el ion hidronio, H₃O⁺). En el agua pura a 25 °C, [H⁺] = [OH⁻] = 10⁻⁷ mol/L, y su producto, el <b>producto iónico del agua</b>, vale siempre K<sub>w</sub> = [H⁺]·[OH⁻] = 10⁻¹⁴. Cuando se disuelve un ácido aumenta [H⁺]; cuando se disuelve una base aumenta [OH⁻], pero el producto se mantiene.",
      "Para expresar la acidez se usa el <mark>pH</mark>, definido por Sørensen como <b>pH = −log [H⁺]</b>. Una disolución es neutra con pH = 7, ácida con pH &lt; 7 y básica con pH &gt; 7. Como la escala es logarítmica, una unidad de pH supone multiplicar por diez la concentración de protones: el zumo de limón (pH 2) tiene diez mil veces más H⁺ que el agua pura. El pH es crucial para la vida porque los cambios de carga alteran la forma de las proteínas: cada enzima trabaja en un pH óptimo. El pH de la sangre es de 7,35 a 7,45; el del jugo gástrico, de 1,5 a 2; el del intestino delgado, de unos 8.",
    ], extra: `<div class="formula"><span>Kw = [H⁺]·[OH⁻] = 10⁻¹⁴ ; pH = −log [H⁺] ; pH + pOH = 14</span></div>`, svg: L5.escala("Escala de pH de algunos líquidos", "pH", [["2", "limón", "var(--red)"], ["5", "café", "var(--sun)"], ["7", "agua", "var(--leaf)"], ["7,4", "sangre", "var(--leaf)"], ["12", "lejía", "var(--pen)"]], "ácido", "básico") },
    { h: "Las sales minerales precipitadas", p: [
      "Las <mark>sales minerales</mark> son biomoléculas inorgánicas que aparecen en los seres vivos de tres formas: precipitadas (sólidas), disueltas (en forma de iones) o asociadas a moléculas orgánicas. Las <b>sales precipitadas</b> son insolubles y forman estructuras sólidas con función <b>esquelética</b> y protectora. El <b>fosfato cálcico</b> en forma de hidroxiapatita, Ca₁₀(PO₄)₆(OH)₂, da dureza a los huesos y los dientes. El <b>carbonato cálcico</b> forma las conchas de los moluscos, los caparazones de los crustáceos, el esqueleto de los corales y los otolitos del oído interno, responsables del equilibrio.",
      "La <b>sílice</b> (SiO₂) forma los caparazones de las diatomeas y las espículas de algunas esponjas, y endurece los tallos de las gramíneas y de las colas de caballo. El hueso no es una estructura inerte: el calcio de la hidroxiapatita está en continuo intercambio con el de la sangre, regulado por hormonas como la parathormona y la calcitonina. Cuando ese equilibrio se rompe a favor de la pérdida aparece la <b>osteoporosis</b>. Algunas sales precipitan también de forma patológica, como en los cálculos renales (oxalato cálcico) o en la arteriosclerosis.",
    ], svg: L6.tabla("Sales precipitadas y dónde se encuentran", ["Sal", "Fórmula", "Estructura"], [["Fosfato cálcico", "Ca₃(PO₄)₂", "huesos, dientes"], ["Carbonato cálcico", "CaCO₃", "conchas, corales"], ["Sílice", "SiO₂", "diatomeas, gramíneas"], ["Fluoruro cálcico", "CaF₂", "esmalte"]]) },
    { h: "Las sales minerales disueltas", p: [
      "Las <b>sales disueltas</b> se encuentran disociadas en iones. Los más importantes son los cationes Na⁺, K⁺, Ca²⁺ y Mg²⁺, y los aniones Cl⁻, HCO₃⁻, HPO₄²⁻, H₂PO₄⁻, SO₄²⁻ y NO₃⁻. Tienen funciones muy diversas y específicas: un ion no puede sustituirse por otro aunque tengan la misma carga. El Na⁺ y el K⁺ crean la diferencia de potencial a ambos lados de la membrana que permite el <b>impulso nervioso</b>; el Ca²⁺ desencadena la <b>contracción muscular</b>, la coagulación de la sangre y la liberación de neurotransmisores.",
      "Otras funciones son mantener el grado de <b>salinidad</b> y el equilibrio osmótico, regular la actividad de enzimas (el Mg²⁺ es cofactor de las enzimas que usan ATP) y mantener constante el pH. La concentración de cada ion se mantiene dentro de márgenes estrechos, y su desequilibrio tiene efectos inmediatos: una caída del K⁺ en sangre altera el ritmo cardiaco. Hay iones <b>asociados a moléculas orgánicas</b>: el Fe²⁺ del grupo hemo de la hemoglobina, el Mg²⁺ de la clorofila, el fosfato del ATP y de los fosfolípidos o el I⁻ de la tiroxina.",
    ], svg: L6.tabla("Iones disueltos y algunas funciones", ["Ion", "Función principal"], [["Na⁺ y K⁺", "impulso nervioso, ósmosis"], ["Ca²⁺", "contracción, coagulación"], ["Mg²⁺", "cofactor del ATP"], ["HCO₃⁻", "tampón de la sangre"], ["Fe²⁺", "hemoglobina (asociado)"]]) },
    { h: "Disoluciones, difusión y ósmosis", p: [
      "El agua y las moléculas disueltas en ella forman <b>dispersiones</b>. Si el soluto es de pequeño tamaño (sales, glucosa), es una <b>disolución verdadera</b>; si se trata de macromoléculas como las proteínas, es una <b>dispersión coloidal</b>, que puede estar en estado de sol (líquido, como el citoplasma periférico) o de gel (semisólido). Las moléculas disueltas se mueven al azar y tienden a repartirse por igual: es la <mark>difusión</mark>, el paso neto de soluto desde donde está más concentrado hacia donde lo está menos, sin gasto de energía.",
      "Cuando dos disoluciones de distinta concentración están separadas por una <b>membrana semipermeable</b>, que deja pasar el agua pero no el soluto, el agua pasa desde la disolución menos concentrada (<b>hipotónica</b>) hacia la más concentrada (<b>hipertónica</b>) hasta igualarlas. Este proceso es la <mark>ósmosis</mark>, y la presión que habría que aplicar para impedirlo es la <b>presión osmótica</b>, proporcional a la concentración de partículas disueltas. Dos disoluciones con la misma presión osmótica son <b>isotónicas</b>. La <b>diálisis</b> es el paso de agua y de solutos pequeños a través de una membrana que retiene las macromoléculas: es el fundamento del riñón artificial.",
    ], svg: osmosisSVG, v: ["agua-d", "Ósmosis: soluciones hipotónicas, isotónicas e hipertónicas"] },
    { h: "Ósmosis y células", p: [
      "La membrana plasmática se comporta como semipermeable, así que la ósmosis afecta a todas las células. Si una célula animal se coloca en un medio <b>hipotónico</b> (por ejemplo, agua destilada), entra agua, la célula se hincha (<b>turgencia</b>) y puede estallar: en los glóbulos rojos se llama <b>hemólisis</b>. En un medio <b>hipertónico</b> la célula pierde agua y se arruga (<b>plasmólisis</b>; en los glóbulos rojos, crenación). Por eso los sueros que se inyectan en vena deben ser <b>isotónicos</b> con el plasma: el suero fisiológico es NaCl al 0,9 %.",
      "Las células vegetales tienen una pared rígida que les impide estallar. En medio hipotónico se llenan de agua y quedan <b>turgentes</b>, lo que mantiene erguidas las hojas y los tallos herbáceos. En medio hipertónico la vacuola pierde agua y la membrana se separa de la pared: la planta se marchita. Los organismos han desarrollado mecanismos de <b>osmorregulación</b>: los protozoos de agua dulce expulsan el exceso de agua con vacuolas pulsátiles, los peces marinos beben agua y excretan sal por las branquias, y nuestros riñones ajustan la concentración de la orina. La salazón y el almíbar conservan los alimentos porque deshidratan por ósmosis a los microorganismos.",
    ], svg: L5.compara("La ósmosis en células animales y vegetales", ["Animal", ["hipotónico: estalla", "isotónico: normal", "hipertónico: se arruga"]], ["Vegetal", ["hipotónico: turgente", "isotónico: flácida", "hipertónico: plasmólisis"]], "var(--red)", "var(--leaf)") },
    { h: "Los sistemas tampón", p: [
      "Las sales disueltas también mantienen constante el pH gracias a los <mark>sistemas tampón</mark> o amortiguadores: mezclas de un ácido débil y su base conjugada que neutralizan los ácidos o las bases que se añaden. En el <b>medio extracelular</b> (sangre) actúa sobre todo el tampón <b>bicarbonato</b>: CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺. Si aumenta la acidez, el exceso de H⁺ se une al HCO₃⁻ y forma ácido carbónico, que se descompone en CO₂ y agua; el CO₂ se expulsa por los pulmones. Si disminuye la acidez, el ácido carbónico se disocia y libera H⁺.",
      "En el <b>medio intracelular</b> actúa el tampón <b>fosfato</b>: H₂PO₄⁻ ⇌ HPO₄²⁻ + H⁺, cuyo pH de máxima eficacia (6,86) es cercano al del citoplasma. También las proteínas actúan como tampones, porque sus aminoácidos tienen grupos que aceptan o ceden protones. Cuando los tampones no bastan aparecen la <b>acidosis</b> (pH de la sangre inferior a 7,35), por ejemplo en una diabetes descontrolada o en una insuficiencia respiratoria, y la <b>alcalosis</b> (pH superior a 7,45), por ejemplo por hiperventilación. Ambas pueden ser mortales si el pH sale del intervalo de 6,8 a 7,8.",
    ], extra: `<div class="formula"><span>CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺</span></div>`, svg: cadena("Tampón bicarbonato de la sangre: el exceso de ácido se elimina como CO₂ por los pulmones", [["H⁺ + HCO₃⁻", "var(--red)"], ["H₂CO₃", "var(--sun)"], ["CO₂ + H₂O", "var(--pen)"]], ["se combinan", "pulmón"], "Tampón bicarbonato") },
  ],
  figura: { titulo: "Bioelementos, agua y sales minerales", items: [["Bioelementos", "C H O N P S", "96 % de la masa", "base: el carbono"], ["Agua", "dipolo", "puentes de H", "disolvente"], ["Sales", "precipitadas", "disueltas (iones)", "asociadas"], ["Ósmosis", "agua → hipertónico", "turgencia", "plasmólisis"]] },
  video: ["agua-a", "Biología selectividad: agua y sales minerales"],
  ejemplos: [
    ["Clasifica estos bioelementos: Fe, C, Na, I, S, Mg.", ["Primarios (≈ 96 %): C y S.", "Secundarios (≈ 3,9 %): Na y Mg.", "Oligoelementos (&lt; 0,1 %): Fe e I."], "Primarios: C, S. Secundarios: Na, Mg. Oligoelementos: Fe, I."],
    ["Calcula el pH de una disolución con [H⁺] = 10⁻³ mol/L e indica si es ácida o básica. ¿Cuánto vale [OH⁻]?", ["pH = −log 10⁻³ = 3.", "Como 3 &lt; 7, es ácida.", "[OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L."], "pH = 3 (ácida); [OH⁻] = 10⁻¹¹ mol/L."],
    ["El jugo gástrico tiene pH 2 y la sangre pH 7,4 (≈ 7). ¿Cuántas veces más H⁺ tiene el jugo gástrico?", ["Cada unidad de pH multiplica [H⁺] por 10.", "Diferencia ≈ 7 − 2 = 5 unidades.", "10⁵ = 100 000."], "Unas cien mil veces más (en rigor, 10^5,4 ≈ 250 000)."],
    ["Se colocan glóbulos rojos en tres tubos: agua destilada, NaCl al 0,9 % y NaCl al 5 %. Predice qué ocurre.", ["Agua destilada: medio hipotónico, entra agua.", "NaCl 0,9 %: isotónico, no hay flujo neto.", "NaCl 5 %: hipertónico, sale agua."], "Hemólisis en el primero, sin cambios en el segundo y crenación (plasmólisis) en el tercero."],
    ["Explica por qué los lagos helados no se congelan hasta el fondo y qué importancia tiene para la vida.", ["El agua tiene densidad máxima a 4 °C: se va al fondo.", "El hielo, menos denso por su red abierta de puentes de H, flota.", "La capa de hielo aísla térmicamente el agua de debajo."], "El fondo queda a unos 4 °C y los organismos acuáticos sobreviven al invierno."],
    ["Un deportista hiperventila y su pH sanguíneo sube a 7,5. Explica qué ha pasado con el tampón bicarbonato.", ["Al respirar muy deprisa expulsa más CO₂.", "El equilibrio CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ se desplaza a la izquierda.", "Se consumen H⁺: baja [H⁺] y sube el pH."], "Alcalosis respiratoria; se corrige respirando más despacio (o en una bolsa) para retener CO₂."],
  ],
  errores: [
    "Pensar que los oligoelementos son poco importantes: son imprescindibles aunque se necesiten en cantidades mínimas.",
    "Decir que en la ósmosis se mueve el soluto: se mueve el agua, desde el medio hipotónico al hipertónico.",
    "Confundir hipotónico e hipertónico: el prefijo se refiere a la concentración de solutos, no a la cantidad de agua.",
    "Creer que el pH 6 es «un poco» más ácido que el pH 7: es diez veces más ácido, porque la escala es logarítmica.",
    "Confundir enlace covalente y puente de hidrógeno: el puente de H es una atracción débil entre moléculas, no un enlace dentro de la molécula.",
    "Pensar que una célula vegetal estalla en agua destilada: la pared celular lo impide y la célula queda turgente.",
  ],
  ejercicios: {
    b: [
      ["Define bioelemento y clasifica los bioelementos según su abundancia.", "Elemento químico que forma parte de los seres vivos. Primarios (C, H, O, N, P, S; ≈ 96 %), secundarios (Na, K, Ca, Mg, Cl; ≈ 3,9 %) y oligoelementos (&lt; 0,1 %: Fe, I, F, Cu, Zn…)."],
      ["Cita tres oligoelementos e indica una función de cada uno.", "Hierro: hemoglobina (transporte de O₂). Yodo: hormonas tiroideas. Flúor: esmalte dental. (También Cu, Zn, Mn como cofactores, Co en la vitamina B₁₂.)"],
      ["¿Por qué el carbono es el elemento base de las biomoléculas?", "Forma cuatro enlaces covalentes estables en tetraedro, puede unirse a otros carbonos formando cadenas lineales, ramificadas o anillos, con enlaces simples, dobles o triples, y admite grupos funcionales variados."],
      ["Diferencia biomoléculas inorgánicas y orgánicas y pon dos ejemplos de cada.", "Inorgánicas: también existen fuera de los seres vivos (agua, sales minerales). Orgánicas: exclusivas de los seres vivos, con esqueleto de carbono (glúcidos, proteínas…)."],
      ["Explica por qué la molécula de agua es un dipolo.", "El O es más electronegativo que el H y atrae los electrones compartidos; la molécula es angular (104,5°), así que el O queda con carga parcial negativa y los H con carga parcial positiva."],
      ["¿Qué es un puente de hidrógeno?", "Atracción débil entre un átomo de H unido a un átomo muy electronegativo (O, N) y otro átomo electronegativo de una molécula vecina."],
      ["Relaciona cada propiedad del agua con su función: a) alto calor de vaporización; b) alto calor específico; c) capilaridad.", "a) Termorregulación (sudor). b) Amortiguador térmico. c) Ascenso de la savia bruta por el xilema."],
      ["Define pH. ¿Qué pH tiene una disolución neutra?", "pH = −log [H⁺]. Una disolución neutra tiene pH 7 ([H⁺] = 10⁻⁷ mol/L a 25 °C)."],
      ["Cita dos sales precipitadas y la estructura que forman.", "Fosfato cálcico: huesos y dientes. Carbonato cálcico: conchas de moluscos, esqueleto de corales. (Sílice: caparazón de diatomeas.)"],
      ["Define ósmosis.", "Paso de agua a través de una membrana semipermeable desde la disolución menos concentrada (hipotónica) a la más concentrada (hipertónica)."],
      ["¿Qué es una disolución isotónica? ¿Por qué el suero fisiológico debe serlo?", "La que tiene la misma presión osmótica que otra. Si no fuera isotónica con el plasma, los glóbulos rojos ganarían o perderían agua."],
      ["Indica la función del Na⁺, el K⁺ y el Ca²⁺.", "Na⁺ y K⁺: impulso nervioso y equilibrio osmótico. Ca²⁺: contracción muscular, coagulación, huesos."],
    ],
    m: [
      ["Explica por qué el hielo flota y qué consecuencias tiene para los seres acuáticos.", "Al congelarse, cada molécula forma 4 puentes de H en una red abierta que ocupa más volumen: el hielo es menos denso. La capa de hielo superficial aísla y el agua de debajo (≈ 4 °C) sigue líquida."],
      ["Calcula el pH de una disolución con [OH⁻] = 10⁻⁴ mol/L.", "[H⁺] = 10⁻¹⁴/10⁻⁴ = 10⁻¹⁰ → pH = 10 (básica)."],
      ["El pH de un refresco es 3 y el del agua del grifo, 7. ¿Cuántas veces más H⁺ tiene el refresco?", "4 unidades de pH: 10⁴ = 10 000 veces más."],
      ["¿Por qué sudar refresca? ¿Por qué cuesta más refrescarse cuando hay mucha humedad?", "El agua tiene un calor de vaporización muy alto: al evaporarse el sudor absorbe mucho calor de la piel. Con humedad alta el sudor apenas se evapora."],
      ["Explica cómo disuelve el agua el NaCl.", "Los dipolos del agua rodean los iones: orientan su O (δ−) hacia el Na⁺ y sus H (δ+) hacia el Cl⁻, formando capas de solvatación que separan los iones del cristal."],
      ["Describe qué le ocurre a una célula vegetal en un medio hipertónico y en uno hipotónico.", "Hipertónico: pierde agua, la vacuola se reduce y la membrana se separa de la pared (plasmólisis). Hipotónico: entra agua y queda turgente; la pared impide que estalle."],
      ["Diferencia difusión, ósmosis y diálisis.", "Difusión: paso de soluto de mayor a menor concentración. Ósmosis: paso de agua por una membrana semipermeable hacia el medio más concentrado. Diálisis: paso de agua y solutos pequeños por una membrana que retiene macromoléculas."],
      ["Explica cómo actúa el tampón bicarbonato si en la sangre entra un ácido.", "El exceso de H⁺ se une al HCO₃⁻ y forma H₂CO₃, que se descompone en CO₂ y H₂O; el CO₂ se expulsa por los pulmones. El pH apenas varía."],
      ["¿Por qué se conservan los alimentos en salazón o en almíbar?", "La sal o el azúcar crean un medio hipertónico: los microorganismos pierden agua por ósmosis y no pueden crecer."],
      ["¿Por qué el silicio, tan abundante en la corteza, no es la base de la vida?", "Los enlaces Si–Si son débiles e inestables y su óxido, el SiO₂, es un sólido insoluble; el CO₂ es un gas soluble que se intercambia con el ambiente."],
      ["Explica la diferencia entre las funciones de las sales precipitadas y las de las disueltas.", "Precipitadas: estructurales y protectoras (huesos, conchas). Disueltas: regulan la ósmosis, el pH, la actividad enzimática y procesos como el impulso nervioso o la contracción."],
      ["Indica qué enlaces débiles mantienen la estructura de las macromoléculas y por qué son importantes.", "Puentes de H, interacciones iónicas, fuerzas de Van der Waals e interacciones hidrofóbicas. Mantienen la forma 3D y permiten uniones reversibles (enzima-sustrato, antígeno-anticuerpo)."],
      ["Una persona con diarrea grave pierde mucha agua y sales. ¿Por qué se recomienda un suero oral con sales y glucosa y no solo agua?", "Para reponer los iones perdidos (Na⁺, K⁺) y mantener el equilibrio osmótico; beber solo agua diluiría el plasma (medio hipotónico) y la glucosa facilita la absorción de Na⁺ y agua en el intestino."],
    ],
    a: [
      ["(Tipo PAU) Relaciona la estructura de la molécula de agua con tres de sus propiedades y con una función biológica de cada una.", "Dipolo con puentes de H → alto calor específico (amortiguador térmico); alto calor de vaporización (termorregulación); cohesión-adhesión (capilaridad, ascenso de la savia); polaridad (disolvente, medio de reacción y transporte)."],
      ["(Tipo PAU) Se introducen tres trozos de patata de igual masa en agua destilada, en agua con 0,9 % de NaCl y en agua con 10 % de NaCl. Al cabo de una hora se pesan. Predice e interpreta los resultados.", "Agua destilada: medio hipotónico, entra agua, gana masa y se pone rígida. 0,9 %: algo hipotónico o casi isotónico para la patata, cambio pequeño. 10 %: hipertónico, pierde agua (plasmólisis), pierde masa y se ablanda."],
      ["(Tipo PAU) Explica qué es la acidosis, una causa posible y cómo intentan compensarla los pulmones y los riñones.", "pH de la sangre &lt; 7,35. Causas: insuficiencia respiratoria (acumula CO₂), cetoacidosis diabética. Los pulmones aumentan la ventilación para eliminar CO₂ y los riñones excretan H⁺ y reabsorben HCO₃⁻."],
      ["Un paciente recibe por error un gotero de agua destilada. Explica qué riesgo corren sus glóbulos rojos y por qué.", "El plasma se vuelve hipotónico: entra agua en los glóbulos rojos, que se hinchan y estallan (hemólisis); se libera hemoglobina y K⁺, con riesgo de daño renal y cardiaco."],
      ["Calcula el pH de una disolución de HCl 0,01 M (ácido fuerte). ¿Y si se diluye cien veces?", "[H⁺] = 10⁻² → pH = 2. Diluida 100 veces: [H⁺] = 10⁻⁴ → pH = 4."],
      ["Los peces de agua dulce casi no beben y producen orina muy diluida; los marinos beben agua de mar y excretan sales por las branquias. Explícalo con la ósmosis.", "El agua dulce es hipotónica respecto al pez: entra agua por ósmosis y deben expulsarla (orina diluida). El agua de mar es hipertónica: pierden agua, así que beben y eliminan el exceso de sal activamente."],
      ["Interpreta: el cuerpo de un recién nacido tiene un 75 % de agua; el de un anciano, un 50 %. ¿Qué relación hay entre contenido en agua y actividad biológica?", "Los tejidos con más actividad metabólica tienen más agua (medio de reacción y transporte); con la edad disminuye la actividad y aumenta la proporción de tejidos menos hidratados (grasa, hueso)."],
      ["Explica por qué una carencia de yodo en la dieta puede causar bocio, y qué medida de salud pública lo previene.", "El yodo es imprescindible para fabricar las hormonas tiroideas; sin él, el tiroides crece para intentar captar más (bocio). La sal yodada lo previene."],
      ["Explica el fundamento de la hemodiálisis y por qué el líquido de diálisis debe contener glucosa y sales en concentración similar al plasma.", "La sangre pasa junto a una membrana que deja pasar agua y solutos pequeños (urea) pero no proteínas ni células. El líquido de diálisis tiene glucosa y sales como el plasma para que solo salgan los desechos y no se pierdan sustancias útiles ni haya flujos osmóticos."],
    ],
  },
  quiz: [
    ["Los bioelementos primarios suponen aproximadamente…", ["el 50 %", "el 96 %", "el 3,9 %", "el 0,1 %"], 1, "C, H, O, N, P y S forman casi toda la materia viva."],
    ["¿Cuál es un oligoelemento?", ["Carbono", "Sodio", "Hierro", "Nitrógeno"], 2, "Está en menos del 0,1 %."],
    ["El carbono forma…", ["2 enlaces", "3 enlaces", "4 enlaces en tetraedro", "enlaces iónicos"], 2, "Tiene 4 electrones de valencia."],
    ["El grupo –COOH es…", ["hidroxilo", "carboxilo", "amino", "carbonilo"], 1, "Ácido carboxílico."],
    ["La molécula de agua es dipolar porque…", ["es lineal", "el O es más electronegativo y es angular", "tiene iones", "tiene puentes de H internos"], 1, "Ángulo de 104,5°."],
    ["Cada molécula de agua puede formar hasta…", ["1 puente de H", "2", "4", "6"], 2, "Dos por los H y dos por el O."],
    ["La capilaridad se debe a…", ["cohesión y adhesión", "la ionización", "el calor específico", "la densidad"], 0, "Permite el ascenso de la savia."],
    ["El sudor refresca gracias al alto…", ["calor específico", "calor de vaporización", "punto de fusión", "pH"], 1, "La evaporación absorbe calor."],
    ["El agua tiene densidad máxima a…", ["0 °C", "4 °C", "37 °C", "100 °C"], 1, "Por eso el hielo flota."],
    ["Una disolución con pH 9 es…", ["ácida", "neutra", "básica", "isotónica"], 2, "pH &gt; 7."],
    ["El pH normal de la sangre es…", ["1,5-2", "6,8", "7,35-7,45", "8,5"], 2, "Ligeramente básico."],
    ["La hidroxiapatita forma…", ["conchas", "huesos y dientes", "caparazones de diatomeas", "otolitos"], 1, "Fosfato cálcico."],
    ["El ion que desencadena la contracción muscular es…", ["Na⁺", "K⁺", "Ca²⁺", "Cl⁻"], 2, "También interviene en la coagulación."],
    ["En la ósmosis el agua pasa…", ["del medio hipertónico al hipotónico", "del hipotónico al hipertónico", "solo con gasto de ATP", "en ambos sentidos por igual"], 1, "Hacia donde hay más solutos."],
    ["Un glóbulo rojo en agua destilada…", ["se arruga", "no cambia", "se hincha y estalla", "se divide"], 2, "Hemólisis."],
    ["La plasmólisis ocurre en medio…", ["hipotónico", "isotónico", "hipertónico", "neutro"], 2, "La célula pierde agua."],
    ["El suero fisiológico es NaCl al…", ["0,09 %", "0,9 %", "9 %", "90 %"], 1, "Isotónico con el plasma."],
    ["El principal tampón de la sangre es el…", ["fosfato", "bicarbonato", "acetato", "amonio"], 1, "CO₂/HCO₃⁻."],
    ["El tampón fosfato actúa sobre todo…", ["en la sangre", "dentro de las células", "en el estómago", "en los huesos"], 1, "pKa cercano al pH intracelular."],
    ["La diálisis separa…", ["agua de sales", "solutos pequeños de macromoléculas", "iones de distinto signo", "lípidos de proteínas"], 1, "Base del riñón artificial."],
  ],
  examen: [
    ["[H⁺] = 10⁻⁵ mol/L: el pH es…", ["5", "9", "−5", "10"], 0, "−log 10⁻⁵."],
    ["Si pH = 3, [OH⁻] vale…", ["10⁻¹¹", "10⁻³", "10⁻⁷", "10³"], 0, "10⁻¹⁴/10⁻³."],
    ["Es bioelemento secundario…", ["Magnesio", "Yodo", "Fósforo", "Carbono"], 0, "≈ 3,9 % junto con Na, K, Ca, Cl."],
    ["El yodo es necesario para…", ["la hemoglobina", "las hormonas tiroideas", "el esmalte", "la clorofila"], 1, "Su déficit causa bocio."],
    ["Una lechuga con sal se pone mustia por…", ["difusión de sal", "ósmosis (medio hipertónico)", "hidrólisis", "fermentación"], 1, "Pierde agua."],
    ["La sílice forma…", ["huesos", "caparazones de diatomeas", "dientes", "coral"], 1, "SiO₂."],
    ["La hiperventilación produce…", ["acidosis", "alcalosis", "hemólisis", "plasmólisis"], 1, "Se expulsa CO₂ y sube el pH."],
    ["La turgencia de las plantas se debe a…", ["el agua retenida en la vacuola", "la sílice", "el almidón", "el Ca²⁺"], 0, "Función estructural del agua."],
  ],
  feynman: ["Por qué el carbono y no el silicio es la base de la vida", "Por qué el agua es líquida a temperatura ambiente", "Por qué el hielo flota y por qué importa", "Qué significa que el pH baje una unidad", "Qué le pasa a una célula en agua destilada", "Cómo mantiene la sangre su pH"],
  mapa: ["AGUA Y SALES", [["Bioelementos", "primarios, secundarios, oligo"], ["Agua", "dipolo, puentes de H, pH"], ["Sales", "precipitadas y disueltas"], ["Ósmosis y tampones", "tonicidad, pH constante"]]],
  tarjetas: [
    ["Bioelementos primarios", "C, H, O, N, P, S: ≈ 96 % de la materia viva."],
    ["Oligoelementos", "&lt; 0,1 %: Fe, I, F, Cu, Zn, Co… imprescindibles."],
    ["Carbono", "4 enlaces covalentes en tetraedro; cadenas y anillos."],
    ["Agua", "Dipolo; hasta 4 puentes de H por molécula."],
    ["Calor específico", "Alto: amortiguador térmico."],
    ["Calor de vaporización", "Alto: termorregulación por sudor."],
    ["pH", "−log [H⁺]; 7 neutro; sangre 7,35-7,45."],
    ["Sales precipitadas", "Fosfato y carbonato cálcico, sílice: esqueletos."],
    ["Sales disueltas", "Iones: ósmosis, pH, impulso nervioso, contracción."],
    ["Ósmosis", "El agua pasa del medio hipotónico al hipertónico."],
    ["Hemólisis / plasmólisis", "Hipotónico: estalla. Hipertónico: se arruga."],
    ["Tampón bicarbonato", "CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺."],
  ],
  glosario: [
    ["Bioelemento", "Elemento químico que forma parte de los seres vivos."],
    ["Oligoelemento", "Bioelemento presente en menos del 0,1 %, pero imprescindible."],
    ["Biomolécula", "Molécula que forma parte de los seres vivos; también llamada principio inmediato."],
    ["Grupo funcional", "Agrupación de átomos que da a una molécula sus propiedades químicas."],
    ["Dipolo", "Molécula con una zona de carga parcial positiva y otra negativa."],
    ["Puente de hidrógeno", "Atracción débil entre un H unido a un átomo electronegativo y otro átomo electronegativo."],
    ["Calor específico", "Energía necesaria para elevar 1 °C la temperatura de 1 g de sustancia."],
    ["Capilaridad", "Ascenso de un líquido por un tubo fino gracias a la cohesión y la adhesión."],
    ["Anfipático", "Que tiene una parte hidrófila y otra hidrófoba."],
    ["pH", "Medida de la acidez: logaritmo negativo de la concentración de H⁺."],
    ["Ósmosis", "Paso de agua por una membrana semipermeable hacia el medio más concentrado."],
    ["Presión osmótica", "Presión necesaria para impedir el paso de agua por ósmosis."],
    ["Hipertónico", "Medio con mayor concentración de solutos que otro."],
    ["Hipotónico", "Medio con menor concentración de solutos que otro."],
    ["Sistema tampón", "Par ácido débil-base conjugada que amortigua los cambios de pH."],
    ["Diálisis", "Paso de agua y solutos pequeños por una membrana que retiene macromoléculas."],
  ],
  situacion: {
    titulo: "Laboratorio de ósmosis: el misterio de la patata",
    reto: "Vuestro equipo debe averiguar, mediante un experimento, la concentración de sal que es isotónica con las células de la patata y explicar los resultados con el concepto de ósmosis.",
    pasos: [
      "Cortad cilindros de patata iguales, secadlos y pesadlos con una balanza de precisión.",
      "Preparad disoluciones de NaCl al 0 %, 0,5 %, 1 %, 2 %, 5 % y 10 % y sumergid un cilindro en cada una durante una hora.",
      "Pesad de nuevo los cilindros y calculad el porcentaje de variación de masa.",
      "Representad en una gráfica la variación de masa frente a la concentración y buscad el punto de corte con el eje (variación 0).",
      "Observad al microscopio células de epidermis de cebolla en agua y en sal concentrada y fotografiad la plasmólisis.",
    ],
    producto: "Un informe de laboratorio con tabla, gráfica, fotografías y conclusiones.",
    evaluacion: ["El diseño controla las variables (tamaño, tiempo, temperatura).", "La gráfica está bien construida y se interpreta correctamente.", "Las conclusiones usan con precisión los términos hipotónico, isotónico, hipertónico y plasmólisis.", "Se proponen fuentes de error y mejoras."],
  },
  familias: [
    "Aliñad una hoja de lechuga y dejad otra sin aliñar: comparad cómo están a los 20 minutos.",
    "Mirad la etiqueta del agua mineral de casa y buscad qué iones lleva y en qué cantidad.",
    "Comprobad con tiras de pH o con lombarda cocida la acidez del vinagre, el limón, el agua y el jabón.",
    "Hablad de por qué se usa suero oral (y no solo agua) cuando alguien tiene una gastroenteritis.",
  ],
  saberes: "bloque «Las biomoléculas»: bioelementos y su clasificación; el agua, estructura, propiedades y funciones biológicas; las sales minerales, funciones; ósmosis, difusión y regulación del pH; las biomoléculas orgánicas como polímeros de monómeros y los enlaces que las mantienen.",
  ideas: [
    "Práctica de plasmólisis en epidermis de cebolla roja con NaCl al 10 % y recuperación con agua destilada.",
    "Experimento de ósmosis con huevos sin cáscara (en vinagre) sumergidos en agua y en jarabe.",
    "Medida del pH de líquidos cotidianos con indicador de lombarda y construcción de una escala.",
    "Debate con datos sobre el consumo de sal y de agua embotellada frente a la del grifo.",
  ],
  fuentes: [
    { t: "Agencia Española de Seguridad Alimentaria y Nutrición (AESAN)", url: "https://www.aesan.gob.es/" },
  ],
});
