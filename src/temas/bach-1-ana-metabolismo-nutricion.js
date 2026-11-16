// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Sistemas energéticos: aporte relativo según la duración del esfuerzo (curvas esquemáticas).
const sistemas = B.lienzo("Contribución de los sistemas energéticos según la duración del esfuerzo: fosfágenos en segundos, glucólisis anaeróbica en uno o dos minutos y sistema aeróbico a partir de entonces", `
  <path d="M30 150 H 246 M30 150 V 30" stroke="var(--ink)" stroke-width="2"/>
  <path d="M32 40 C 50 44, 60 130, 90 146" fill="none" stroke="var(--red)" stroke-width="3.5"/>
  <path d="M32 140 C 60 60, 100 50, 130 90 S 170 144, 200 146" fill="none" stroke="var(--sun)" stroke-width="3.5"/>
  <path d="M32 146 C 90 140, 120 70, 160 50 S 220 38, 244 36" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
  ${B.tx(68, 40, "ATP-PC", { fs: 11, maxW: 50, bold: true, color: "var(--red)" })}${B.tx(206, 128, "glucólisis", { fs: 11, maxW: 64, bold: true, color: "var(--sun)" })}${B.tx(214, 28, "aeróbico", { fs: 11, maxW: 60, bold: true, color: "var(--pen)" })}
  ${B.tx(40, 166, "10 s", { fs: 10, maxW: 30 })}${B.tx(110, 166, "1-2 min", { fs: 10, maxW: 50 })}${B.tx(226, 166, "horas", { fs: 10, maxW: 40 })}
  ${B.tx(20, 24, "aporte", { fs: 10, maxW: 40, anchor: "start", color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "Metabolismo y nutrición",
  minutos: 120,
  objetivos: [
    "Distinguir alimentación, nutrición y metabolismo, y describir el anabolismo, el catabolismo y el papel del ATP",
    "Explicar los sistemas energéticos (fosfágenos, glucólisis anaeróbica y sistema aeróbico) y su relación con la actividad física",
    "Describir el aparato digestivo, la digestión y la absorción de los nutrientes",
    "Conocer las funciones de los nutrientes y calcular el gasto energético y el balance energético",
    "Diseñar una alimentación equilibrada y adecuada a la actividad física y valorar los trastornos del comportamiento alimentario",
  ],
  claves: ["metabolismo", "ATP", "catabolismo", "anabolismo", "fosfocreatina", "glucólisis", "respiración celular", "glucógeno", "macronutrientes", "metabolismo basal", "balance energético", "hidratación"],
  pregunta: {
    texto: "Un velocista y una maratoniana comen pasta antes de competir. ¿Usan sus músculos la energía de la misma forma durante la carrera?",
    respuesta: "No. Ambos obtienen energía del <b>ATP</b>, pero lo regeneran por vías distintas. En los 10 segundos de un 100 m predominan la <mark>fosfocreatina</mark> y la glucólisis anaeróbica, rapidísimas pero de poca duración. En las dos horas largas de un maratón domina el <b>sistema aeróbico</b>, que quema glucógeno y grasas con oxígeno en las mitocondrias: lento, pero casi inagotable. La pasta llena los depósitos de glucógeno, que a la maratoniana le resultan imprescindibles.",
  },
  lectura: {
    titulo: "El muro del kilómetro 30",
    html: `<p>Muchos corredores de maratón cuentan la misma historia: todo va bien hasta el kilómetro 30, y de repente las piernas pesan como el plomo, el ritmo se desploma y la cabeza solo piensa en parar. Lo llaman «el muro». No es falta de voluntad: es química. A esa altura de la carrera, los depósitos de glucógeno de los músculos y del hígado se han agotado, y el cuerpo tiene que obtener casi toda la energía de las grasas, una fuente enorme pero más lenta.</p>
    <p>Los corredores que lo evitan no son necesariamente más fuertes. Han entrenado para que sus músculos aprovechen mejor las grasas, han llenado sus depósitos de glucógeno en los días previos y han ido tomando bebidas y geles con hidratos durante la carrera.</p>
    <p>La historia del muro resume este tema: lo que comemos se convierte, mediante el metabolismo, en la energía que nos permite movernos, pensar o cantar. Comprender cómo se transforma y cuánto necesitamos es la base para alimentarnos bien, rendir mejor y cuidar la salud.</p>`,
  },
  secciones: [5, 4, 4],
  bloques: [
    {
      h: "Alimentación, nutrición y metabolismo",
      html: `<p>Aunque se usan como sinónimos, son procesos distintos:</p>
      <ul><li>La <b>alimentación</b> es la elección, preparación e ingestión de los alimentos. Es un acto <b>voluntario</b> y educable, influido por la cultura, la economía, los gustos y la publicidad.</li>
      <li>La <b>nutrición</b> es el conjunto de procesos <b>involuntarios</b> por los que el organismo transforma los alimentos y aprovecha los <b>nutrientes</b>: digestión, absorción, transporte, metabolismo y excreción de los desechos. Participan los aparatos digestivo, respiratorio, circulatorio y excretor.</li>
      <li>El <b>metabolismo</b> es el conjunto de reacciones químicas que ocurren en las células.</li></ul>
      <p>Los <b>alimentos</b> son los productos que comemos; los <b>nutrientes</b>, las sustancias que contienen y que el cuerpo utiliza. Se dividen en <b>macronutrientes</b> (glúcidos, lípidos y proteínas), que se necesitan en gramos y aportan energía, y <b>micronutrientes</b> (vitaminas y minerales), que se necesitan en miligramos o microgramos y no aportan energía pero son imprescindibles. El <b>agua</b> y la <b>fibra</b> completan la lista.</p>
      <p>Los nutrientes cumplen tres funciones: <b>energética</b> (proporcionan energía para el trabajo celular), <b>plástica o estructural</b> (forman y reparan los tejidos) y <b>reguladora</b> (controlan las reacciones del metabolismo). Como ya decía un viejo principio de la dietética, no hay alimentos buenos o malos, sino <mark>dietas equilibradas o desequilibradas</mark>.</p>`,
      svg: B.comparar("Alimentación frente a nutrición", ["Alimentación", ["elegir y comer", "voluntaria", "educable", "cultura y gustos"]], ["Nutrición", ["usar los nutrientes", "involuntaria", "varios aparatos", "digestión → células"]]),
    },
    {
      h: "El metabolismo y el ATP",
      html: `<p>El metabolismo tiene dos caras complementarias:</p>
      <ul><li><b>Catabolismo</b>: reacciones de <b>degradación</b>, en las que moléculas grandes se rompen en otras más pequeñas y se <b>libera energía</b>. Por ejemplo, la oxidación de la glucosa hasta CO₂ y agua en la respiración celular.</li>
      <li><b>Anabolismo</b>: reacciones de <b>síntesis</b>, en las que se fabrican moléculas complejas a partir de otras sencillas, con <b>gasto de energía</b>. Por ejemplo, la síntesis de proteínas musculares tras un entrenamiento de fuerza o la formación de glucógeno a partir de glucosa.</li></ul>
      <p>La energía que libera el catabolismo no se usa directamente: se guarda en una molécula intermediaria, el <b>ATP</b> (adenosín trifosfato), la «moneda energética» de la célula. Al romperse su último enlace fosfato se libera energía que la célula usa para contraer el músculo, transmitir el impulso nervioso, transportar sustancias o fabricar moléculas:</p>
      <div class="formula"><span>ATP → ADP + P + energía</span></div>
      <p>El músculo solo almacena ATP para unos <mark>2-3 segundos</mark> de esfuerzo máximo. Por eso debe regenerarlo sin cesar, uniendo de nuevo un fosfato al ADP con la energía de los nutrientes. Las vías que lo regeneran son los <b>sistemas energéticos</b>. En la regeneración, una parte importante de la energía se pierde como <b>calor</b>: el cuerpo humano solo convierte en trabajo mecánico un 20-25 % de la energía que consume, y el resto calienta el organismo.</p>`,
      svg: B.ciclo("Ciclo del ATP: el catabolismo lo regenera y el trabajo celular lo consume", "ATP", ["Catabolismo", "ADP + P", "Contracción", "Síntesis", "Transporte"]),
      video: { id: "0ItMzG9c4GI", titulo: "METABOLISMO: ¿Qué significa REALMENTE?", canal: "La Hiperactina", vistas: 1687897 },
    },
    {
      h: "Los sistemas energéticos anaeróbicos",
      html: `<p>Los sistemas <b>anaeróbicos</b> regeneran ATP sin oxígeno, en el citoplasma de la fibra muscular. Son rápidos, pero se agotan pronto:</p>
      <ul><li><b>Sistema de los fosfágenos</b> (ATP-PC): la <b>fosfocreatina</b> (PC), almacenada en el músculo, cede su fosfato al ADP y forma ATP en una sola reacción. Es la vía más <b>rápida y potente</b>, pero dura unos <b>8-10 segundos</b> de esfuerzo máximo: un salto, un lanzamiento, un esprint de 60 m o una serie corta de pesas. Los depósitos se recuperan casi por completo en 2-3 minutos de descanso.</li>
      <li><b>Glucólisis anaeróbica</b> (sistema láctico): la glucosa (de la sangre o del glucógeno muscular) se degrada parcialmente hasta <b>ácido pirúvico</b>, que, si no hay oxígeno suficiente, se transforma en <b>lactato</b>. Produce solo 2 ATP por glucosa, pero muy deprisa. Predomina en esfuerzos muy intensos de entre 10 segundos y <b>1-2 minutos</b>: un 400 m, un combate o un ejercicio intenso de baile.</li></ul>
      <p>Durante la glucólisis anaeróbica se acumulan <b>iones de hidrógeno</b> que acidifican el músculo y dificultan la contracción: aparecen el ardor y la fatiga. Durante años se culpó al «ácido láctico» de las agujetas, pero hoy sabemos que el lactato no las causa (se deben a microlesiones musculares) y que, de hecho, es un combustible: el corazón y las fibras lentas lo reutilizan, y el hígado lo convierte de nuevo en glucosa.</p>`,
      svg: B.comparar("Sistemas anaeróbicos: fosfágenos y glucólisis", ["Fosfágenos", ["fosfocreatina", "máxima potencia", "8-10 s", "saltos, esprints"]], ["Glucólisis", ["glucosa → lactato", "2 ATP por glucosa", "hasta 1-2 min", "400 m, combate"]]),
    },
    {
      h: "El sistema aeróbico",
      html: `<p>El <b>sistema aeróbico</b> (u oxidativo) regenera ATP con <b>oxígeno</b> en las <b>mitocondrias</b>. Es más lento en arrancar y produce menos potencia, pero su rendimiento es enorme y puede mantenerse durante horas. Utiliza tres combustibles:</p>
      <ul><li><b>Glúcidos</b>: el ácido pirúvico de la glucólisis entra en la mitocondria y se oxida por completo en el <b>ciclo de Krebs</b> y la <b>cadena respiratoria</b> hasta CO₂ y agua. Una glucosa produce unos <mark>30-32 ATP</mark>, quince veces más que por la vía anaeróbica.</li>
      <li><b>Grasas</b>: los ácidos grasos se degradan por la <b>betaoxidación</b>. Un gramo de grasa aporta más del doble de energía que uno de glúcidos, y sus reservas son casi ilimitadas, pero su oxidación necesita más oxígeno y es más lenta.</li>
      <li><b>Proteínas</b>: solo aportan un 5-10 % de la energía, sobre todo en esfuerzos muy largos o con reservas de glucógeno agotadas.</li></ul>
      <p>La respiración celular se resume en:</p>
      <div class="formula"><span>glucosa + 6 O₂ → 6 CO₂ + 6 H₂O + energía (ATP y calor)</span></div>
      <p>La mezcla de combustibles depende de la <b>intensidad</b>: a baja intensidad predominan las grasas; al subir la intensidad crece el peso de los glúcidos. Por eso, en esfuerzos largos e intensos, el factor limitante son las reservas de <b>glucógeno</b> (unos 400 g en el músculo y 100 g en el hígado), cuyo agotamiento produce «el muro». El entrenamiento aeróbico aumenta el número de mitocondrias y la capacidad de quemar grasas, y así ahorra glucógeno.</p>`,
      svg: B.rejilla("Combustibles del sistema aeróbico y su energía por gramo", ["Combustible", "kcal/g", "Reserva"], [["Glúcidos", "4", "≈ 500 g"], ["Grasas", "9", "kilos"], ["Proteínas", "4", "no es reserva"]], { t: "Combustibles aeróbicos" }),
    },
    {
      h: "Los sistemas energéticos en la actividad física",
      html: `<p>Los tres sistemas no se encienden uno tras otro como interruptores: trabajan <b>a la vez</b> y lo que cambia es la proporción de cada uno según la intensidad y la duración del esfuerzo.</p>
      <table class="tb"><tr><th>Duración del esfuerzo máximo</th><th>Sistema predominante</th><th>Ejemplos</th></tr>
      <tr><td>0-10 s</td><td>fosfágenos (ATP-PC)</td><td>salto, lanzamiento, halterofilia, 60 m</td></tr>
      <tr><td>10 s-2 min</td><td>glucólisis anaeróbica</td><td>200 y 400 m, 100 m de natación, variación de ballet</td></tr>
      <tr><td>2-3 min</td><td>mixto anaeróbico-aeróbico</td><td>800 m, combate de judo</td></tr>
      <tr><td>más de 3 min</td><td>aeróbico</td><td>5000 m, ciclismo, maratón, un concierto de dos horas</td></tr></table>
      <p>Los deportes de equipo y la danza son <b>intermitentes</b>: alternan acciones explosivas (fosfágenos), fases intensas (glucólisis) y pausas activas en las que el sistema aeróbico repone la fosfocreatina y elimina el lactato. Por eso un jugador de fútbol o una bailarina necesitan una buena base aeróbica aunque sus acciones decisivas sean anaeróbicas.</p>
      <p>Al terminar un esfuerzo intenso, el consumo de oxígeno se mantiene elevado unos minutos: es la <b>deuda de oxígeno</b> o EPOC, que se usa para reponer fosfocreatina, reoxigenar la mioglobina, eliminar lactato y bajar la temperatura. La <b>vuelta a la calma</b> activa (trotar suave) acelera esta recuperación.</p>`,
      svg: sistemas,
      video: { id: "40UbE643lOI", titulo: "LOS SISTEMAS ENERGÉTICOS EN EL DEPORTE (Fácil de entender)", canal: "Marvin - Educación Física y Más +", vistas: 147207 },
    },
    {
      h: "El aparato digestivo",
      html: `<p>El <b>aparato digestivo</b> transforma los alimentos en nutrientes lo bastante pequeños para pasar a la sangre. Está formado por el <b>tubo digestivo</b>, de unos 8-9 metros, y las <b>glándulas anejas</b>:</p>
      <ul><li><b>Boca</b>: los dientes trituran (digestión mecánica) y la saliva, producida por las <b>glándulas salivales</b>, humedece el alimento y empieza a digerir el almidón. Se forma el <b>bolo alimenticio</b>.</li>
      <li><b>Faringe</b> y <b>esófago</b>: conducen el bolo hasta el estómago mediante contracciones del músculo liso, los <b>movimientos peristálticos</b>.</li>
      <li><b>Estómago</b>: bolsa muscular que mezcla el alimento con el <b>jugo gástrico</b> (ácido clorhídrico y pepsina, que empieza a digerir las proteínas). Se forma el <b>quimo</b>. Una comida copiosa y grasa puede tardar 3-4 horas en salir del estómago.</li>
      <li><b>Intestino delgado</b> (duodeno, yeyuno e íleon, unos 6 m): termina la digestión con el jugo intestinal, el <b>jugo pancreático</b> del <b>páncreas</b> y la <b>bilis</b> del <b>hígado</b>, almacenada en la vesícula biliar, que emulsiona las grasas.</li>
      <li><b>Intestino grueso</b> (ciego con el apéndice, colon y recto, 1,5 m): absorbe agua y sales y forma las heces. Alberga la <b>microbiota intestinal</b>, billones de bacterias que fermentan la fibra, fabrican vitaminas (K, algunas del grupo B) y participan en la defensa.</li></ul>
      <p>El <b>hígado</b> es además un gran laboratorio metabólico: almacena glucógeno, regula la glucosa en sangre, transforma el lactato y elimina sustancias tóxicas como el alcohol.</p>`,
      svg: B.flujo("Recorrido del alimento por el tubo digestivo", ["Boca: masticación y saliva", "Esófago: peristaltismo", "Estómago: jugo gástrico", "Intestino delgado: digestión y absorción", "Intestino grueso: agua y heces"], { t: "El tubo digestivo" }),
    },
    {
      h: "Digestión y absorción",
      html: `<p>La <b>digestión</b> rompe los alimentos en moléculas simples. Es <b>mecánica</b> (masticación, mezcla) y <b>química</b>, gracias a unas proteínas especiales, las <b>enzimas digestivas</b>:</p>
      <table class="tb"><tr><th>Nutriente</th><th>Empieza en</th><th>Producto final</th></tr>
      <tr><td>Glúcidos (almidón)</td><td>boca (amilasa salival)</td><td>glucosa y otros monosacáridos</td></tr>
      <tr><td>Proteínas</td><td>estómago (pepsina)</td><td>aminoácidos</td></tr>
      <tr><td>Lípidos</td><td>intestino delgado (bilis y lipasa)</td><td>ácidos grasos y glicerol</td></tr></table>
      <p>La <b>absorción</b> es el paso de los nutrientes a la sangre o a la linfa y ocurre casi por completo en el <b>intestino delgado</b>. Su pared tiene pliegues cubiertos de <b>vellosidades intestinales</b>, y sus células, a su vez, <b>microvellosidades</b>: la superficie total de absorción supera los 200 m². Cada vellosidad tiene capilares sanguíneos, que recogen la glucosa y los aminoácidos y los llevan al hígado por la vena porta, y un vaso linfático, que recoge las grasas.</p>
      <p>La <b>fibra alimentaria</b> (de frutas, verduras, legumbres y cereales integrales) no se digiere, pero es esencial: aumenta el volumen de las heces, regula el tránsito, alimenta a la microbiota y ayuda a controlar el colesterol y la glucosa. Se recomiendan al menos 25 g diarios. En relación con el deporte, conviene no competir con el estómago lleno ni tomar justo antes alimentos ricos en grasa o fibra, que se digieren despacio.</p>`,
      svg: B.rejilla("Digestión química de cada nutriente", ["Nutriente", "Enzima", "Producto"], [["Almidón", "amilasa", "glucosa"], ["Proteínas", "pepsina", "aminoácidos"], ["Lípidos", "lipasa", "ácidos grasos"]], { t: "Digestión química" }),
      video: { id: "LNzUhQLig6o", titulo: "¿Cómo funciona el sistema digestivo? (animación)", canal: "Thomas Schwenke ES", vistas: 3067375 },
    },
    {
      h: "Los macronutrientes",
      html: `<ul><li><b>Glúcidos</b> o hidratos de carbono (4 kcal/g): la principal fuente de energía, sobre todo para el cerebro y el músculo en esfuerzos intensos. Los <b>complejos</b> (almidón de cereales, legumbres, patatas) liberan glucosa de forma gradual; los <b>simples</b> o azúcares (fruta, leche, azúcar de mesa) se absorben deprisa. La OMS recomienda que los <b>azúcares libres</b> (añadidos y de zumos) sean menos del 10 % de la energía, e idealmente menos del 5 %. Deben aportar alrededor del 50-55 % de la energía de la dieta; algo más en deportistas de resistencia.</li>
      <li><b>Lípidos</b> o grasas (9 kcal/g): reserva de energía, componentes de las membranas, transporte de vitaminas liposolubles (A, D, E y K) y precursores de hormonas. Son preferibles las grasas <b>insaturadas</b> (aceite de oliva, frutos secos, pescado azul con omega-3) a las <b>saturadas</b> (grasa animal, bollería) y hay que evitar las <b>trans</b> (grasas hidrogenadas industriales). Alrededor del 30-35 % de la energía.</li>
      <li><b>Proteínas</b> (4 kcal/g): función sobre todo <b>plástica</b> (músculo, piel, enzimas, hormonas, anticuerpos). Están formadas por 20 aminoácidos, de los cuales 9 son <b>esenciales</b>: no podemos fabricarlos y deben venir de la dieta. Las de origen animal (huevo, carne, pescado, lácteos) contienen todos; las vegetales se complementan combinándolas (legumbres con cereales). Un adolescente necesita unos 0,9-1 g por kilo de masa corporal al día; un deportista de fuerza, hasta 1,6-1,8 g/kg. Más cantidad no aumenta el músculo, solo se usa como energía o se almacena.</li></ul>`,
      svg: B.barras("Reparto recomendado de la energía de la dieta entre macronutrientes", [["Glúcidos", 52], ["Lípidos", 32], ["Proteínas", 15]], { t: "Energía de la dieta (%)", unidad: " %" }),
      video: { id: "qHimbDfTXYg", titulo: "CONCEPTOS BÁSICOS DE NUTRICIÓN Y ALIMENTACIÓN", canal: "GuiaMed", vistas: 1176956 },
    },
    {
      h: "Micronutrientes y agua",
      html: `<p>Las <b>vitaminas</b> son sustancias orgánicas que regulan el metabolismo. Las <b>liposolubles</b> (A, D, E, K) se almacenan en la grasa; las <b>hidrosolubles</b> (C y grupo B) no se almacenan y hay que tomarlas a diario. Las vitaminas del grupo B intervienen en la obtención de energía; la C, en la formación de colágeno y la absorción de hierro; la D, en la absorción de calcio (se forma en la piel con el sol).</p>
      <p>Los <b>minerales</b> más relevantes para la actividad física son el <b>calcio</b> (huesos y contracción muscular), el <b>hierro</b> (hemoglobina; su déficit es frecuente en adolescentes, sobre todo chicas con menstruación y deportistas de resistencia), el <b>sodio</b> y el <b>potasio</b> (impulso nervioso, equilibrio del agua; se pierden con el sudor) y el <b>magnesio</b>. Una dieta variada cubre las necesidades; los suplementos solo están indicados si hay un déficit diagnosticado.</p>
      <p>El <b>agua</b> es el nutriente más urgente: podemos vivir semanas sin comer, pero solo unos días sin beber. Se necesitan unos 2-2,5 L al día entre bebida y alimentos, mucho más con calor o ejercicio, que puede hacer perder 1-2 L de sudor por hora. Una pérdida del 2 % de la masa corporal ya reduce el rendimiento, y del 5 % puede provocar un golpe de calor. Hay que <mark>beber antes, durante y después</mark> del esfuerzo sin esperar a tener sed; el color claro de la orina es un buen indicador. En esfuerzos de más de una hora conviene una bebida con sales y algo de glúcidos.</p>`,
      svg: B.cajas("Micronutrientes clave para la actividad física", [["Calcio", "huesos y|contracción"], ["Hierro", "hemoglobina|y oxígeno"], ["Sodio-potasio", "impulso nervioso|se pierden al sudar"], ["Vitaminas B", "obtención|de energía"]], { t: "Micronutrientes" }),
    },
    {
      h: "El gasto energético",
      html: `<p>La energía se mide en <b>kilocalorías</b> (kcal) o en kilojulios (1 kcal = 4,18 kJ). El <b>gasto energético total</b> diario tiene tres componentes:</p>
      <ul><li><b>Metabolismo basal</b> (MB): la energía que gasta el cuerpo en reposo absoluto para mantener las funciones vitales (latido, respiración, temperatura, actividad cerebral). Supone el 60-70 % del gasto en una persona sedentaria. Depende de la masa (sobre todo de la muscular, que gasta más que la grasa), el sexo, la edad y la altura.</li>
      <li><b>Efecto térmico de los alimentos</b>: la energía de digerir y procesar la comida, cerca del 10 %.</li>
      <li><b>Actividad física</b>: la parte más variable, desde el 15 % en una persona sedentaria hasta más del 50 % en un deportista de resistencia.</li></ul>
      <p>El metabolismo basal se puede estimar con ecuaciones como la de <b>Harris-Benedict</b> o, más sencilla, la de Mifflin-St Jeor:</p>
      <div class="formula"><span>MB (kcal/día) ≈ 10 · masa (kg) + 6,25 · altura (cm) − 5 · edad + 5 (hombres) o − 161 (mujeres)</span></div>
      <p>El gasto total se calcula multiplicando el MB por un <b>factor de actividad</b>: 1,2 (sedentario), 1,375 (poco activo), 1,55 (activo), 1,725 (muy activo) y 1,9 (extremadamente activo). La intensidad de una actividad se expresa en <b>MET</b> (equivalente metabólico): 1 MET es el gasto en reposo, aproximadamente 1 kcal por kilo y hora. Andar a paso ligero son unos 4 MET; correr a 10 km/h, unos 10.</p>`,
      svg: B.barras("Componentes del gasto energético diario de un adolescente activo", [["Metabolismo basal", 60], ["Actividad física", 30], ["Efecto térmico", 10]], { t: "Gasto energético (%)", unidad: " %" }),
    },
    {
      h: "El balance energético y la composición corporal",
      html: `<p>El <b>balance energético</b> compara la energía que entra (alimentos) con la que se gasta:</p>
      <ul><li><b>Balance positivo</b>: se ingiere más de lo que se gasta; el exceso se almacena, sobre todo como grasa, y la masa aumenta.</li>
      <li><b>Balance negativo</b>: se gasta más; el cuerpo usa sus reservas y la masa disminuye.</li>
      <li><b>Equilibrio</b>: la masa se mantiene. En la adolescencia, el balance debe ser ligeramente positivo para crecer.</li></ul>
      <p>Para valorar el peso se usa el <b>índice de masa corporal</b>:</p>
      <div class="formula"><span>IMC = masa (kg) / altura² (m²)</span></div>
      <p>En adultos, entre 18,5 y 24,9 se considera normopeso, de 25 a 29,9 sobrepeso y 30 o más, obesidad. En los adolescentes hay que compararlo con tablas de <b>percentiles</b> según la edad y el sexo, porque el cuerpo está creciendo. El IMC tiene una gran limitación: <mark>no distingue músculo de grasa</mark>, así que un deportista muy musculado puede salir con «sobrepeso». Por eso se completa con el perímetro de cintura (la grasa abdominal es la de más riesgo) y con medidas de la <b>composición corporal</b>: el porcentaje de grasa (pliegues cutáneos, bioimpedancia) y la masa magra.</p>
      <p>Las dietas milagro que prometen perder mucho peso en poco tiempo suelen hacer perder agua y músculo, bajan el metabolismo basal y provocan el efecto rebote. La estrategia eficaz es combinar una alimentación equilibrada con actividad física regular.</p>`,
      svg: B.rejilla("Clasificación del IMC en adultos", ["IMC", "Clasificación"], [["< 18,5", "bajo peso"], ["18,5-24,9", "normopeso"], ["25-29,9", "sobrepeso"], ["≥ 30", "obesidad"]], { t: "IMC (adultos)" }),
    },
    {
      h: "La dieta equilibrada y la alimentación del deportista",
      html: `<p>Una <b>dieta equilibrada</b> es suficiente (cubre la energía), completa (aporta todos los nutrientes), variada, adecuada a cada persona y agradable. El modelo de referencia es la <b>dieta mediterránea</b>: abundancia de verduras, frutas, legumbres, cereales integrales y frutos secos; aceite de oliva como grasa principal; pescado y huevos varias veces por semana; poca carne roja y procesada; agua como bebida. El «<b>plato saludable</b>» lo resume: la mitad, verduras y frutas; un cuarto, cereales integrales; un cuarto, proteína saludable.</p>
      <p>Conviene repartir la comida en 4-5 tomas, no saltarse el <b>desayuno</b> y limitar los ultraprocesados, ricos en azúcares, sal y grasas de baja calidad.</p>
      <p>La persona que entrena o actúa a menudo necesita:</p>
      <ul><li><b>Antes</b> (2-3 h): una comida rica en glúcidos complejos, moderada en proteínas y pobre en grasa y fibra.</li>
      <li><b>Durante</b> (si dura más de una hora): agua con sales y glúcidos.</li>
      <li><b>Después</b>: glúcidos para reponer el glucógeno y proteínas para reparar el músculo, en la primera o las dos primeras horas.</li></ul>
      <p>Las <b>ayudas ergogénicas</b> y suplementos (bebidas energéticas, batidos, cafeína) no son necesarios para un adolescente con una dieta adecuada y algunos pueden ser perjudiciales. Las bebidas energéticas, ricas en cafeína y azúcar, no se recomiendan a menores.</p>`,
      svg: B.cajas("El plato saludable", [["Verduras y frutas", "medio plato|variadas"], ["Cereales", "un cuarto|integrales"], ["Proteína", "un cuarto|legumbre, pescado"], ["Agua y aceite", "agua para beber|aceite de oliva"]], { t: "Plato saludable" }),
    },
    {
      h: "Trastornos del comportamiento alimentario",
      html: `<p>Los <b>trastornos de la conducta alimentaria</b> (TCA) son enfermedades mentales graves en las que la relación con la comida, el peso y la imagen corporal se vuelve patológica. Son más frecuentes en la adolescencia y, de forma especial, en actividades donde el peso o la estética tienen mucha importancia: danza, gimnasia, patinaje, modelaje, deportes con categorías de peso.</p>
      <ul><li><b>Anorexia nerviosa</b>: restricción extrema de la comida, miedo intenso a engordar y distorsión de la imagen corporal; la persona se ve gorda aunque tenga muy bajo peso.</li>
      <li><b>Bulimia nerviosa</b>: atracones seguidos de conductas compensatorias (vómitos, laxantes, ejercicio excesivo), con peso a menudo normal.</li>
      <li><b>Trastorno por atracón</b>: atracones sin conductas compensatorias.</li>
      <li><b>Vigorexia</b> (dismorfia muscular): obsesión por ganar músculo, entrenamiento excesivo, dietas hiperproteicas y, a veces, uso de anabolizantes.</li></ul>
      <p>En deportistas y bailarines se habla de la <b>deficiencia relativa de energía en el deporte</b>: si se ingiere menos energía de la que se gasta durante mucho tiempo, aparecen alteraciones hormonales, pérdida de la menstruación, fracturas por estrés, lesiones, bajada del rendimiento y problemas psicológicos. La prevención pasa por una educación alimentaria y emocional, evitar comentarios sobre el cuerpo y el peso, y buscar ayuda profesional ante las primeras señales. <mark>Pedir ayuda a tiempo</mark> mejora mucho la recuperación.</p>`,
      svg: B.cajas("Trastornos del comportamiento alimentario", [["Anorexia", "restricción|imagen distorsionada"], ["Bulimia", "atracones y|compensación"], ["Atracón", "atracones sin|compensación"], ["Vigorexia", "obsesión por|el músculo"]], { t: "TCA" }),
    },
  ],
  figura: {
    titulo: "Metabolismo y nutrición en cuatro ideas",
    items: [["ATP", "ATP → ADP + P", "moneda energética", "para 2-3 s"], ["Sistemas", "PC · láctico · O₂", "según duración", "e intensidad"], ["Energía", "4 · 9 · 4 kcal/g", "glúcidos, grasas", "y proteínas"], ["Balance", "entra − sale", "IMC = m / h²", "composición corporal"]],
  },
  video: { id: "L2ydeTGEU-8", titulo: "Glucólisis anaeróbica y aeróbica [FERMENTACIÓN Y RESPIRACIÓN]", canal: "Nutrimente", vistas: 196050 },
  quiz: [
    ["La nutrición, a diferencia de la alimentación, es…", ["voluntaria", "involuntaria", "solo comer", "educable"], 1, "Son procesos que el organismo realiza sin que decidamos."],
    ["Las reacciones que degradan moléculas y liberan energía forman el…", ["anabolismo", "catabolismo", "peristaltismo", "metabolismo basal"], 1, "El anabolismo construye con gasto de energía."],
    ["La «moneda energética» de la célula es el…", ["glucógeno", "ATP", "lactato", "colesterol"], 1, "Adenosín trifosfato."],
    ["El sistema más rápido y potente pero que dura unos 10 s es…", ["el aeróbico", "la glucólisis anaeróbica", "los fosfágenos", "la betaoxidación"], 2, "Usa fosfocreatina."],
    ["La glucólisis anaeróbica produce, además de ATP…", ["CO₂ y agua", "lactato", "fosfocreatina", "glucógeno"], 1, "Cuando no hay oxígeno suficiente."],
    ["¿Dónde se produce el metabolismo aeróbico?", ["En el núcleo", "En las mitocondrias", "En el estómago", "En el plasma"], 1, "Ciclo de Krebs y cadena respiratoria."],
    ["Un gramo de grasa aporta unas…", ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], 2, "Más del doble que los glúcidos."],
    ["En un 400 m lisos predomina…", ["el sistema de fosfágenos", "la glucólisis anaeróbica", "el sistema aeróbico puro", "la betaoxidación"], 1, "Esfuerzo máximo de unos 50 s."],
    ["«El muro» del maratón se debe al agotamiento del…", ["ATP", "glucógeno", "agua", "oxígeno"], 1, "El cuerpo pasa a depender casi solo de las grasas."],
    ["El jugo gástrico empieza a digerir…", ["el almidón", "las proteínas", "las grasas", "la fibra"], 1, "Con la pepsina y el ácido clorhídrico."],
    ["La bilis la produce…", ["el páncreas", "el hígado", "el estómago", "la vesícula"], 1, "La vesícula solo la almacena."],
    ["La mayor parte de la absorción de nutrientes ocurre en…", ["el estómago", "el intestino delgado", "el intestino grueso", "el esófago"], 1, "Gracias a las vellosidades."],
    ["Los aminoácidos esenciales son los que…", ["no necesitamos", "no podemos fabricar", "solo están en vegetales", "dan energía"], 1, "Deben venir de la dieta."],
    ["¿Qué vitamina favorece la absorción de calcio?", ["C", "B12", "D", "K"], 2, "Se forma en la piel con el sol."],
    ["El déficit de hierro produce…", ["escorbuto", "anemia", "raquitismo", "bocio"], 1, "Falta hemoglobina."],
    ["El metabolismo basal es la energía…", ["del ejercicio", "para digerir", "para mantener las funciones vitales en reposo", "de los alimentos"], 2, "Supone el 60-70 % del gasto en sedentarios."],
    ["Una persona de 64 kg y 1,60 m tiene un IMC de…", ["40", "25", "20", "16"], 1, "64 / 2,56 = 25."],
    ["La principal limitación del IMC es que…", ["no usa la altura", "no distingue músculo y grasa", "solo vale para niños", "es difícil de calcular"], 1, "Un deportista musculado puede salir con sobrepeso."],
    ["Antes de competir conviene una comida…", ["rica en grasa y fibra", "rica en glúcidos complejos y pobre en grasa", "solo de proteínas", "muy abundante justo antes"], 1, "2-3 horas antes."],
    ["La vigorexia es…", ["una vitamina", "la obsesión por ganar músculo", "un tipo de dieta", "una enzima"], 1, "Un trastorno de la imagen corporal."],
  ],
  examen: [
    ["Una persona come 60 g de proteínas, 250 g de glúcidos y 70 g de grasas. Su ingesta es…", ["1870 kcal", "1500 kcal", "2470 kcal", "1270 kcal"], 0, "60·4 + 250·4 + 70·9 = 240 + 1000 + 630 = 1870 kcal."],
    ["En la dieta anterior, el porcentaje de energía de la grasa es…", ["18 %", "34 %", "50 %", "70 %"], 1, "630 / 1870 ≈ 34 %."],
    ["Una chica de 16 años, 58 kg y 165 cm tiene un MB (Mifflin) de…", ["1250 kcal", "1370 kcal", "1500 kcal", "1700 kcal"], 1, "10·58 + 6,25·165 − 5·16 − 161 = 580 + 1031 − 80 − 161 = 1370 kcal."],
    ["Si es activa (factor 1,55), su gasto total es aproximadamente…", ["1370 kcal", "2125 kcal", "1645 kcal", "2600 kcal"], 1, "1370 · 1,55 ≈ 2125 kcal."],
    ["Una glucosa por vía aeróbica produce frente a la anaeróbica…", ["la mitad de ATP", "el mismo ATP", "unas 15 veces más ATP", "100 veces más"], 2, "30-32 frente a 2."],
    ["Una serie de 6 saltos máximos con 3 min de pausa entrena sobre todo…", ["el sistema aeróbico", "los fosfágenos", "la glucólisis anaeróbica", "la betaoxidación"], 1, "Esfuerzos cortos y pausa suficiente para reponer la PC."],
    ["Un corredor de 70 kg pierde 2,1 kg en una carrera con calor. Ha perdido…", ["0,3 %", "3 %", "30 %", "2,1 %"], 1, "2,1 / 70 = 3 % de su masa: deshidratación importante."],
    ["Correr 1 h a 10 MET una persona de 60 kg gasta unas…", ["60 kcal", "600 kcal", "6000 kcal", "160 kcal"], 1, "10 · 60 · 1 = 600 kcal."],
  ],
  feynman: ["Qué diferencia hay entre alimentación, nutrición y metabolismo", "Por qué el ATP es la moneda energética y cómo se regenera", "Qué sistema energético predomina en un salto, en un 400 m y en un maratón", "Cómo se digieren y absorben glúcidos, proteínas y grasas", "Cómo se calcula el gasto energético y el balance", "Por qué el IMC no basta para valorar a un deportista"],
  mapa: ["METABOLISMO Y NUTRICIÓN", [["Metabolismo", "catabolismo · anabolismo · ATP"], ["Sistemas", "fosfágenos · láctico · aeróbico"], ["Digestión", "enzimas · vellosidades · hígado"], ["Dieta", "nutrientes · gasto · balance"]]],
  tarjetas: [
    ["Nutrición", "Procesos involuntarios para usar los nutrientes de los alimentos."],
    ["Catabolismo y anabolismo", "Degradar liberando energía / sintetizar gastándola."],
    ["ATP", "Moneda energética: ATP → ADP + P + energía."],
    ["Fosfágenos", "Fosfocreatina: máxima potencia durante unos 10 s."],
    ["Glucólisis anaeróbica", "Glucosa → lactato; 2 ATP; esfuerzos de 10 s a 2 min."],
    ["Sistema aeróbico", "Mitocondrias con O₂; glúcidos y grasas; horas."],
    ["Energía por gramo", "Glúcidos 4, grasas 9, proteínas 4 kcal/g."],
    ["Absorción", "En el intestino delgado gracias a vellosidades y microvellosidades."],
    ["Aminoácidos esenciales", "Nueve que no fabricamos y deben venir de la dieta."],
    ["Metabolismo basal", "Gasto en reposo para las funciones vitales (60-70 %)."],
    ["IMC", "masa / altura²; no distingue músculo y grasa."],
    ["Hidratación", "Perder un 2 % de la masa en sudor ya reduce el rendimiento."],
  ],
  ejemplos: [
    ["Un yogur natural tiene 3,5 g de proteínas, 4,5 g de glúcidos y 3,2 g de grasas. Calcula su energía y el porcentaje que aporta cada macronutriente.", ["Proteínas: 3,5 · 4 = 14 kcal.", "Glúcidos: 4,5 · 4 = 18 kcal.", "Grasas: 3,2 · 9 = 28,8 kcal.", "Total: 60,8 kcal; proteínas 23 %, glúcidos 30 %, grasas 47 %."], "≈ 61 kcal; casi la mitad de la energía procede de la grasa."],
    ["Calcula el metabolismo basal y el gasto total de un chico de 17 años, 70 kg y 178 cm, que entrena 5 días a la semana (factor 1,725).", ["MB = 10 · 70 + 6,25 · 178 − 5 · 17 + 5.", "MB = 700 + 1112,5 − 85 + 5 = 1732,5 kcal.", "Gasto total = 1732,5 · 1,725 ≈ 2990 kcal."], "MB ≈ 1730 kcal/día; gasto total ≈ 3000 kcal/día."],
    ["Indica el sistema energético predominante en: a) un remate de voleibol; b) una coreografía intensa de 90 s; c) una clase de yoga de 60 min; d) una partida de tenis.", ["a) Acción explosiva de 1-2 s: fosfágenos.", "b) Esfuerzo intenso de 1,5 min: glucólisis anaeróbica.", "c) Baja intensidad y larga: aeróbico, sobre todo con grasas.", "d) Intermitente: fosfágenos en cada golpe, aeróbico para recuperar entre puntos."], "a) ATP-PC; b) láctico; c) aeróbico; d) mixto intermitente."],
    ["Calcula el IMC de una gimnasta de 1,55 m y 46 kg y de un jugador de rugby de 1,85 m y 105 kg. Interpreta los resultados.", ["Gimnasta: 46 / 1,55² = 46 / 2,40 = 19,1.", "Rugby: 105 / 1,85² = 105 / 3,42 = 30,7.", "La gimnasta está en normopeso. El jugador sale con «obesidad», pero probablemente se debe a su gran masa muscular."], "El IMC del jugador debe completarse con el porcentaje de grasa y el perímetro de cintura."],
    ["Una actriz de 55 kg pierde 0,9 kg en una función de dos horas con focos. ¿Qué porcentaje ha perdido y cuánto debería beber para reponerse si se recomienda el 150 %?", ["Porcentaje: 0,9 / 55 = 1,6 %.", "Está cerca del 2 %, a partir del cual baja el rendimiento.", "Reposición: 0,9 · 1,5 = 1,35 L, repartidos en las horas siguientes."], "Pierde un 1,6 %; debe beber unos 1,35 L y, mejor, beber también durante los descansos."],
    ["Una persona camina 45 minutos (4 MET) cinco días a la semana. Si pesa 80 kg, ¿cuánta energía gasta a la semana con esa actividad? ¿A cuántos gramos de grasa equivale si 1 g de grasa corporal ≈ 7,7 kcal?", ["Por sesión: 4 · 80 · 0,75 h = 240 kcal.", "Por semana: 240 · 5 = 1200 kcal.", "Equivalente en grasa: 1200 / 7,7 ≈ 156 g."], "1200 kcal semanales, unos 156 g de grasa: pequeño cada semana, notable en un año si se mantiene."],
  ],
  errores: [
    "Pensar que los sistemas energéticos funcionan uno tras otro: trabajan a la vez y cambia su proporción.",
    "Culpar al ácido láctico de las agujetas: se deben a microlesiones musculares y el lactato se reutiliza como combustible.",
    "Confundir alimentación (voluntaria) con nutrición (involuntaria).",
    "Creer que comer más proteínas hace crecer el músculo sin entrenamiento: el exceso se usa como energía o se almacena.",
    "Interpretar el IMC de un adolescente o de un deportista musculado igual que el de un adulto sedentario.",
    "Beber solo cuando se tiene sed durante un esfuerzo largo con calor: la sed llega tarde.",
  ],
  ejercicios: {
    b: [
      ["Define alimentación, nutrición y metabolismo.", "Alimentación: elegir y comer alimentos (voluntaria). Nutrición: procesos involuntarios para aprovechar los nutrientes. Metabolismo: reacciones químicas de las células."],
      ["Diferencia catabolismo y anabolismo con un ejemplo.", "Catabolismo: degradación con liberación de energía (oxidación de glucosa). Anabolismo: síntesis con gasto de energía (fabricar proteínas musculares)."],
      ["¿Qué es el ATP y para qué sirve?", "Adenosín trifosfato: molécula que almacena y cede energía para el trabajo celular (contracción, transporte, síntesis)."],
      ["Nombra los tres sistemas energéticos y su duración aproximada en esfuerzo máximo.", "Fosfágenos (≈ 10 s), glucólisis anaeróbica (10 s-2 min) y aeróbico (más de 2-3 min, horas)."],
      ["Indica la energía por gramo de cada macronutriente.", "Glúcidos 4 kcal/g, lípidos 9 kcal/g, proteínas 4 kcal/g."],
      ["Ordena los órganos del tubo digestivo.", "Boca, faringe, esófago, estómago, intestino delgado, intestino grueso y ano."],
      ["Indica el producto final de la digestión del almidón, las proteínas y las grasas.", "Glucosa; aminoácidos; ácidos grasos y glicerol."],
      ["¿Qué son las vellosidades intestinales y para qué sirven?", "Pliegues microscópicos de la pared del intestino delgado que aumentan la superficie de absorción."],
      ["Cita dos funciones de la fibra alimentaria.", "Regula el tránsito intestinal y alimenta a la microbiota (también ayuda a controlar colesterol y glucosa)."],
      ["Nombra dos vitaminas liposolubles y dos hidrosolubles.", "Liposolubles: A y D (también E, K). Hidrosolubles: C y B12 (grupo B)."],
      ["Calcula el IMC de una persona de 72 kg y 1,80 m.", "72 / 3,24 = 22,2: normopeso (en adultos)."],
      ["Indica tres componentes del gasto energético total.", "Metabolismo basal, efecto térmico de los alimentos y actividad física."],
    ],
    m: [
      ["Explica por qué el músculo necesita regenerar el ATP continuamente.", "Solo almacena ATP para 2-3 segundos de esfuerzo máximo; si no lo regenerara con los sistemas energéticos, dejaría de contraerse."],
      ["Compara la glucólisis anaeróbica y el sistema aeróbico en rapidez, rendimiento, lugar y productos.", "Anaeróbica: rápida, 2 ATP, citoplasma, lactato. Aeróbica: lenta, 30-32 ATP, mitocondrias, CO₂ y agua."],
      ["¿Por qué un jugador de baloncesto necesita una buena base aeróbica si sus acciones son explosivas?", "Porque el sistema aeróbico repone la fosfocreatina y elimina el lactato en las pausas; con mejor base se recupera antes entre jugadas."],
      ["Explica qué es la deuda de oxígeno y para qué se usa.", "El consumo elevado de O₂ tras un esfuerzo: repone fosfocreatina y mioglobina, elimina lactato y baja la temperatura."],
      ["Calcula la energía de un desayuno con 30 g de proteínas, 80 g de glúcidos y 15 g de grasa, y el porcentaje de cada uno.", "120 + 320 + 135 = 575 kcal. Proteínas 21 %, glúcidos 56 %, grasas 23 %."],
      ["Explica la función del hígado en el metabolismo y la digestión.", "Produce bilis, almacena glucógeno y regula la glucosa en sangre, transforma lactato en glucosa y elimina tóxicos."],
      ["¿Por qué no conviene competir justo después de una comida abundante y grasa?", "La digestión es lenta y requiere mucha sangre; músculos y aparato digestivo compiten por ella y aparecen molestias y bajo rendimiento."],
      ["Calcula las proteínas diarias recomendadas para un adolescente de 60 kg y para un deportista de fuerza de 75 kg (1,7 g/kg).", "60 · 1 = 60 g; 75 · 1,7 = 127,5 g."],
      ["Calcula el MB de una mujer de 40 años, 65 kg y 168 cm, y su gasto total si es poco activa (1,375).", "MB = 650 + 1050 − 200 − 161 = 1339 kcal; gasto ≈ 1841 kcal."],
      ["Una persona de 70 kg nada 40 min a 8 MET. ¿Cuánta energía gasta?", "8 · 70 · 0,667 h ≈ 373 kcal."],
      ["Explica por qué el IMC debe interpretarse con percentiles en los adolescentes.", "Porque están creciendo y la proporción de grasa y músculo cambia con la edad y el sexo; los valores de adulto no son válidos."],
      ["¿Por qué se recomienda tomar glúcidos y proteínas tras un entrenamiento?", "Los glúcidos reponen el glucógeno gastado y las proteínas aportan aminoácidos para reparar y construir fibras musculares; tras el esfuerzo la absorción y la síntesis son más eficaces."],
      ["Explica por qué el déficit de hierro es frecuente en chicas deportistas y qué consecuencias tiene.", "Pierden hierro con la menstruación y el sudor y aumentan sus necesidades; si la dieta no lo cubre aparece anemia: menos hemoglobina, menos O₂ transportado, cansancio y bajo rendimiento."],
      ["¿Qué señales pueden indicar un TCA en una compañera de un grupo de danza?", "Pérdida de peso marcada, comer a escondidas o saltarse comidas, comentarios negativos sobre su cuerpo, ejercicio excesivo, pérdida de la menstruación, cansancio y lesiones frecuentes. Hay que comunicarlo con tacto a un adulto de confianza."],
    ],
    a: [
      ["Diseña el menú de un día para una estudiante de 16 años que baila 2 horas diarias y gasta 2400 kcal, con el reparto recomendado de macronutrientes. Calcula los gramos de cada uno.", "Glúcidos 55 % = 1320 kcal = 330 g; lípidos 30 % = 720 kcal = 80 g; proteínas 15 % = 360 kcal = 90 g. Ejemplo: desayuno con avena, leche y fruta; comida de legumbres con arroz y verduras; merienda con bocadillo integral antes del baile; cena de pescado con patata y ensalada, con aceite de oliva y frutos secos."],
      ["Un ciclista de 70 kg tiene 450 g de glucógeno y gasta 800 kcal/h, el 70 % de glúcidos. ¿Cuánto tardaría en agotar el glucógeno si no come? ¿Qué le recomendarías?", "Glúcidos por hora: 560 kcal = 140 g. Tiempo: 450 / 140 ≈ 3,2 h. Recomendación: cargar glucógeno los días previos y tomar 30-60 g de glúcidos por hora durante la prueba."],
      ["Explica por qué el entrenamiento aeróbico «ahorra» glucógeno y retrasa la fatiga.", "Aumenta las mitocondrias, las enzimas de la betaoxidación y los capilares: el músculo obtiene más energía de las grasas a la misma intensidad y quema menos glucógeno, que se agota más tarde."],
      ["Un deportista de 80 kg y 1,80 m tiene un 12 % de grasa. Otro, de la misma talla y masa, un 28 %. Calcula el IMC y la masa grasa y magra de cada uno y comenta.", "IMC de ambos: 24,7. Primero: 9,6 kg de grasa y 70,4 kg magros. Segundo: 22,4 kg de grasa y 57,6 kg magros. Mismo IMC con composiciones muy distintas: el IMC no basta."],
      ["Una persona quiere perder 4 kg de grasa en 2 semanas. Calcula el déficit necesario (7700 kcal/kg) y valora si es realista.", "4 · 7700 = 30 800 kcal; 2200 kcal de déficit diario. Es irrealista y peligroso: obligaría a casi no comer, se perdería músculo y agua, bajaría el MB y llegaría el efecto rebote. Lo razonable es 0,25-0,5 kg por semana."],
      ["Analiza el reparto de sistemas energéticos en un partido de fútbol y propón un entrenamiento para cada uno.", "Fosfágenos: esprints y saltos (series de 5-10 s con 2-3 min de pausa). Láctico: acciones repetidas intensas (series de 30-60 s). Aeróbico: base para recuperar y aguantar 90 min (carrera continua, intervalos largos)."],
      ["Relaciona la deficiencia relativa de energía con la salud ósea y el rendimiento de una bailarina.", "El déficit energético mantenido altera las hormonas (bajan los estrógenos), desaparece la menstruación y se pierde masa ósea: fracturas por estrés. También baja el rendimiento, la concentración y aumentan las lesiones."],
      ["Una bebida isotónica tiene 6 g de glúcidos y 50 mg de sodio por 100 mL. Calcula los glúcidos y el sodio de 750 mL y valora si está indicada en una clase de 45 min.", "45 g de glúcidos (180 kcal) y 375 mg de sodio. En una clase de 45 min basta con agua; está indicada en esfuerzos de más de una hora o con mucho sudor."],
      ["Explica el papel del ciclo de Cori (lactato → hígado → glucosa) en un esfuerzo prolongado de intensidad variable.", "El lactato producido por las fibras rápidas pasa a la sangre, el hígado lo convierte en glucosa y la devuelve a los músculos; así se reutiliza y se mantiene la glucosa en sangre."],
      ["Argumenta, con datos del tema, por qué no se recomiendan las bebidas energéticas a adolescentes deportistas.", "Contienen mucha cafeína (taquicardia, nerviosismo, peor sueño), mucho azúcar (riesgo de caries y exceso de energía) y no hidratan mejor que el agua o una bebida isotónica; no aportan beneficios a quien come bien."],
    ],
  },
  glosario: [
    ["Nutriente", "Sustancia de los alimentos que el organismo utiliza."],
    ["Metabolismo", "Conjunto de reacciones químicas de las células."],
    ["Catabolismo", "Reacciones de degradación que liberan energía."],
    ["Anabolismo", "Reacciones de síntesis que consumen energía."],
    ["ATP", "Molécula que almacena y cede energía para el trabajo celular."],
    ["Fosfocreatina", "Reserva muscular que regenera ATP de forma inmediata."],
    ["Glucólisis", "Degradación de la glucosa hasta ácido pirúvico."],
    ["Lactato", "Producto de la glucólisis anaeróbica, reutilizable como combustible."],
    ["Glucógeno", "Polisacárido de reserva en músculo e hígado."],
    ["Vellosidad intestinal", "Pliegue de la pared del intestino delgado que aumenta la absorción."],
    ["Enzima digestiva", "Proteína que rompe los alimentos en moléculas sencillas."],
    ["Aminoácido esencial", "Aminoácido que no se puede fabricar y debe tomarse en la dieta."],
    ["Metabolismo basal", "Energía mínima para mantener las funciones vitales en reposo."],
    ["MET", "Equivalente metabólico: múltiplos del gasto en reposo."],
    ["Balance energético", "Diferencia entre la energía ingerida y la gastada."],
    ["IMC", "Índice de masa corporal: masa entre altura al cuadrado."],
    ["Deuda de oxígeno", "Consumo extra de oxígeno tras un esfuerzo para recuperarse."],
    ["TCA", "Trastorno de la conducta alimentaria."],
  ],
  situacion: {
    titulo: "El menú del día de competición",
    reto: "Un equipo deportivo o una compañía de baile del centro tiene una jornada de competición o de actuación. Debéis diseñar su alimentación e hidratación desde el día anterior hasta la recuperación, justificándola con los sistemas energéticos y las necesidades nutricionales.",
    pasos: [
      "Analizad la actividad: duración, intensidad, sistemas energéticos predominantes y condiciones (calor, horarios).",
      "Calculad el gasto energético de un participante tipo con la ecuación de metabolismo basal y los MET de la actividad.",
      "Diseñad los menús de la víspera, el desayuno, la comida previa, la hidratación durante la actividad y la recuperación.",
      "Calculad la energía y el reparto de macronutrientes de los menús y comparadlos con las recomendaciones.",
      "Elaborad una guía de hidratación con señales de deshidratación y cantidades orientativas.",
    ],
    producto: "Una guía nutricional del día de competición o actuación, con cálculos, menús, plan de hidratación y una infografía resumen.",
    evaluacion: [
      "Los cálculos de gasto y de energía de los menús son correctos.",
      "Las decisiones se justifican con los sistemas energéticos y la digestión.",
      "Los menús son equilibrados, variados, realistas y respetan la dieta mediterránea.",
      "La guía transmite una relación sana con la comida y el cuerpo.",
    ],
  },
  familias: [
    "Leed juntos las etiquetas nutricionales de varios productos y calculad sus kilocalorías por ración.",
    "Diseñad entre todos un menú semanal con el modelo del plato saludable.",
    "Revisad cuántas bebidas azucaradas o ultraprocesados entran en casa a la semana y buscad alternativas.",
    "Hablad de la imagen corporal sin juzgar el peso de nadie y con respeto hacia todos los cuerpos.",
  ],
  saberes: B.SAB("Metabolismo y nutrición: alimentación y nutrición, metabolismo y ATP, sistemas energéticos y actividad física, aparato digestivo, digestión y absorción, nutrientes, gasto y balance energético, dieta equilibrada e hidratación, y trastornos del comportamiento alimentario"),
  ideas: [
    "Analizar con una aplicación de nutrición el registro de comidas de tres días (de forma anónima) y comparar con las recomendaciones.",
    "Comprobar la acción de la amilasa salival sobre el almidón con lugol.",
    "Medir la frecuencia cardíaca y la percepción de esfuerzo en pruebas de 10 s, 1 min y 5 min y relacionarlas con los sistemas energéticos.",
    "Debatir sobre la publicidad de suplementos y bebidas energéticas dirigida a adolescentes.",
  ],
  fuentes: [
    B.FUENTES.AESAN,
    B.FUENTES.WIKI("Metabolismo", "Metabolismo"),
    B.FUENTES.WIKI("Trastorno_de_la_conducta_alimentaria", "Trastorno de la conducta alimentaria"),
  ],
});
