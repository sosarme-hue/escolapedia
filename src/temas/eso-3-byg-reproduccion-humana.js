// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La reproducción humana",
  minutos: 110,
  objetivos: [
    "Describir los aparatos reproductores masculino y femenino, sus gametos y cómo se forman",
    "Interpretar el ciclo menstrual, sus hormonas y el momento de la ovulación",
    "Explicar la fecundación, el desarrollo embrionario, el embarazo y el parto",
    "Conocer los métodos anticonceptivos y las técnicas de reproducción asistida",
    "Prevenir las infecciones de transmisión sexual",
    "Valorar una sexualidad basada en el respeto, la igualdad, el consentimiento y la diversidad",
  ],
  claves: ["gameto", "espermatozoide", "óvulo", "meiosis", "ovulación", "menstruación", "fecundación", "cigoto", "placenta", "consentimiento"],
  pregunta: {
    texto: "Cada mes, en un ovario madura normalmente un solo óvulo, pero en una eyaculación hay más de cien millones de espermatozoides. ¿Por qué hacen falta tantos para un único óvulo?",
    respuesta: "Porque el viaje es muy difícil. La mayoría muere por la acidez de la vagina, se pierde por el camino o entra en la trompa equivocada. Solo unos cientos llegan cerca del óvulo, y entre todos ayudan a abrir su cubierta. Al final, <mark>solo uno lo fecunda</mark>.",
  },
  lectura: {
    titulo: "Louise, la primera bebé probeta",
    html: `<p>El 25 de julio de 1978, en un hospital de Oldham, en Inglaterra, nació Louise Brown. Pesó 2,6 kilos y lloró como cualquier recién nacido, pero su nacimiento salió en los periódicos de todo el mundo: era la primera persona concebida fuera del cuerpo de su madre. Sus padres llevaban nueve años intentando tener un hijo, sin éxito, porque las trompas de Falopio de la madre estaban obstruidas y los óvulos no podían encontrarse con los espermatozoides.</p>
<p>El fisiólogo Robert Edwards y el ginecólogo Patrick Steptoe llevaban años investigando. Extrajeron un óvulo de la madre, lo pusieron en una placa de laboratorio con espermatozoides del padre y, cuando se formó un embrión de pocas células, lo colocaron en el útero de la madre. A aquella técnica la llamaron <b>fecundación in vitro</b>, «en vidrio». Edwards recibió el Premio Nobel en 2010. Desde entonces han nacido más de doce millones de personas gracias a ella, y Louise tuvo a sus propios hijos de forma natural.</p>
<p>La historia de Louise muestra que conocer bien cómo funciona la reproducción permite resolver problemas reales. En este tema estudiarás los aparatos reproductores, el ciclo menstrual, el embarazo y la salud sexual, siempre desde el respeto y la igualdad.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Reproducción y sexualidad</h3><p>La reproducción humana es <b>sexual</b>: un nuevo ser se forma por la unión de dos células especiales, los <mark>gametos</mark>. El gameto masculino es el <b>espermatozoide</b> y el femenino, el <b>óvulo</b>. Cada gameto tiene la mitad de cromosomas que una célula normal (23 en lugar de 46), así que el hijo recibe la mitad de su información genética de cada progenitor. Pero la <b>sexualidad</b> humana es mucho más que reproducción: incluye los afectos, la comunicación, el placer, la identidad y el respeto mutuo. Toda relación debe basarse en el <b>consentimiento</b> libre de las dos personas.</p>`,
      svg: L.radial("Dimensiones de la sexualidad humana", "Sexualidad", ["Reproducción", "Afectos", "Comunicación", "Placer", "Identidad", "Respeto"], "var(--red)"),
    },
    {
      html: `<h3>1.2 El aparato reproductor masculino</h3><p>Los <mark>testículos</mark> son las gónadas masculinas: fabrican los espermatozoides y la testosterona. Están fuera del abdomen, en el <b>escroto</b>, porque los espermatozoides necesitan una temperatura unos grados más baja que la del cuerpo. Los espermatozoides maduran en el <b>epidídimo</b> y salen por los <b>conductos deferentes</b>. Por el camino, la <b>vesícula seminal</b> y la <b>próstata</b> añaden líquidos que los nutren y los protegen; la mezcla es el <b>semen</b>. El semen sale al exterior por la <b>uretra</b>, que recorre el <b>pene</b>. La producción de espermatozoides empieza en la pubertad y dura toda la vida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema del aparato reproductor masculino: testículo, epidídimo, conducto deferente, vesícula seminal, próstata, uretra y pene">${BG}
        <ellipse cx="110" cy="40" rx="28" ry="20" fill="var(--sun)" fill-opacity=".25" stroke="#b8860b" stroke-width="2"/>${t(110, 44, "vejiga", { size: 10, color: "#b8860b" })}
        <ellipse cx="150" cy="58" rx="9" ry="16" fill="var(--leaf)" fill-opacity=".5" stroke="var(--leaf)" stroke-width="2"/>
        <circle cx="110" cy="74" r="12" fill="var(--inf)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        <path d="M110 86 V 112 H 222" stroke="var(--sun)" stroke-width="5" fill="none"/>
        <path d="M118 104 H 220 Q 232 112 220 120 H 118 Z" fill="#f0a98a" fill-opacity=".45" stroke="var(--red)" stroke-width="2"/>
        <ellipse cx="104" cy="150" rx="15" ry="13" fill="var(--red)" fill-opacity=".45" stroke="var(--red)" stroke-width="2"/>
        <path d="M112 140 Q 176 140 172 84 Q 168 64 152 74 Q 132 80 120 78" stroke="var(--pen)" stroke-width="3" fill="none"/>
        ${t(84, 154, "testículo", { size: 10, anchor: "end", color: "var(--red)" })}${t(92, 78, "próstata", { size: 10, anchor: "end", color: "var(--inf)" })}
        ${t(166, 40, "vesícula seminal", { size: 10, anchor: "start", color: "var(--leaf)" })}${t(180, 150, "conducto", { size: 10, anchor: "start", color: "var(--pen)" })}${t(180, 162, "deferente", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${t(240, 96, "pene y uretra", { size: 10, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>1.3 Los gametos</h3><p>El <b>espermatozoide</b> es una de las células más pequeñas del cuerpo: mide unas 60 micras. Tiene una <b>cabeza</b> con el núcleo y una vesícula de enzimas para perforar la cubierta del óvulo, una <b>pieza intermedia</b> llena de mitocondrias que dan energía y una <b>cola</b> o flagelo para nadar. El <b>óvulo</b>, en cambio, es la célula humana más grande: mide 0,1 mm, casi visible a simple vista. No se mueve y tiene mucho citoplasma con nutrientes para las primeras divisiones del embrión. Lo rodean varias capas protectoras.</p><p>En cada eyaculación salen entre 40 y 300 millones de espermatozoides, pero solo unos cientos llegan hasta el óvulo: muchos se pierden por el camino, se desorientan o mueren en el medio ácido de la vagina. Una vez dentro del aparato femenino, los espermatozoides pueden sobrevivir hasta cinco días.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación entre un óvulo grande y redondo y un espermatozoide pequeño con cabeza, pieza intermedia y cola">${BG}
        <circle cx="76" cy="88" r="56" fill="var(--sun)" fill-opacity=".15" stroke="var(--sun)" stroke-width="5" stroke-dasharray="3 3"/><circle cx="76" cy="88" r="48" fill="#ffe8d0" stroke="#b8860b" stroke-width="2"/><circle cx="84" cy="80" r="14" fill="var(--pen)" fill-opacity=".5"/>
        ${t(76, 162, "óvulo (100 μm)", { size: 11, color: "#b8860b" })}
        <g transform="translate(170 88)"><ellipse cx="0" cy="0" rx="9" ry="6" fill="var(--pen)" fill-opacity=".7" stroke="var(--pen)" stroke-width="1.5"/><rect x="9" y="-2.5" width="12" height="5" fill="var(--red)" fill-opacity=".7"/><path d="M21 0 q 12 -8 22 0 t 22 0" stroke="var(--pen)" stroke-width="1.8" fill="none"/></g>
        ${t(166, 70, "cabeza", { size: 10, color: "var(--pen)" })}${t(186, 110, "pieza", { size: 10, color: "var(--red)" })}${t(186, 122, "intermedia", { size: 10, color: "var(--red)" })}${t(232, 74, "cola", { size: 10, color: "var(--pen)" })}
        ${t(200, 150, "espermatozoide", { size: 11, color: "var(--pen)" })}${t(200, 164, "(60 μm)", { size: 11, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>1.4 Cómo se forman los gametos</h3><p>Los gametos se forman mediante un tipo especial de división celular, la <mark>meiosis</mark>. A diferencia de la división normal (mitosis), que produce dos células iguales con 46 cromosomas, la meiosis produce células con la <b>mitad de cromosomas</b>, 23. Además, mezcla la información de los cromosomas, por lo que cada gameto es distinto: por eso los hermanos no son idénticos, salvo los gemelos univitelinos.</p><p>La formación de espermatozoides, la <mark>espermatogénesis</mark>, ocurre en los tubos seminíferos de los testículos. Empieza en la pubertad y continúa toda la vida: se producen unos cien millones al día y cada uno tarda unos dos meses y medio en madurar.</p><p>La formación de óvulos, la <mark>ovogénesis</mark>, es muy diferente. Empieza antes del nacimiento y se detiene: la niña nace con todos sus óvulos inmaduros. A partir de la pubertad, cada mes uno de ellos termina de madurar dentro de una bolsita del ovario, el <b>folículo</b>. Termina con la menopausia, cuando se agotan los folículos, hacia los 50 años.</p>`,
      svg: L.compara("Formación de espermatozoides y de óvulos", ["Espermatogénesis", "var(--pen)", ["en los testículos", "desde la pubertad", "toda la vida", "millones al día"]], ["Ovogénesis", "var(--red)", ["en los ovarios", "empieza antes de nacer", "uno al mes", "hasta la menopausia"]]),
    },
    {
      html: `<h3>1.5 El aparato reproductor femenino</h3><p>Los <mark>ovarios</mark> son las gónadas femeninas: guardan los óvulos y producen estrógenos y progesterona. Una niña nace con todos sus óvulos inmaduros, unos dos millones, aunque solo madurarán unos 400 a lo largo de su vida. Cerca de cada ovario empieza una <b>trompa de Falopio</b>, un conducto que recoge el óvulo y lo lleva al <b>útero</b>, un órgano muscular y hueco donde se desarrolla el embarazo. Su capa interna, el <b>endometrio</b>, se prepara cada mes para recibir un embrión. El cuello del útero comunica con la <b>vagina</b>, que se abre al exterior en la <b>vulva</b>.</p><p>Los genitales externos, la <b>vulva</b>, incluyen los labios mayores y menores, que protegen la entrada de la vagina y de la uretra, y el <b>clítoris</b>, un órgano muy sensible. A diferencia del hombre, en la mujer la uretra es independiente del aparato reproductor: solo sirve para expulsar la orina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema del aparato reproductor femenino: ovarios, trompas de Falopio, útero con endometrio y vagina">${BG}
        <path d="M100 50 Q 130 40 160 50 Q 160 100 140 116 H 120 Q 100 100 100 50 Z" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M110 56 Q 130 50 150 56 Q 150 94 136 106 H 124 Q 110 94 110 56 Z" fill="var(--paper)" stroke="#e08080" stroke-width="4"/>
        <path d="M100 54 Q 70 40 50 56 M160 54 Q 190 40 210 56" stroke="var(--red)" stroke-width="5" fill="none"/>
        <path d="M44 52 l -6 -6 M44 56 l -8 0 M44 60 l -6 6 M216 52 l 6 -6 M216 56 l 8 0 M216 60 l 6 6" stroke="var(--red)" stroke-width="2"/>
        <ellipse cx="54" cy="80" rx="14" ry="10" fill="#a05ad0" fill-opacity=".5" stroke="#a05ad0" stroke-width="2"/><ellipse cx="206" cy="80" rx="14" ry="10" fill="#a05ad0" fill-opacity=".5" stroke="#a05ad0" stroke-width="2"/>
        <path d="M122 116 V 166 M138 116 V 166" stroke="var(--red)" stroke-width="3"/>
        ${t(54, 104, "ovario", { size: 10, color: "#a05ad0" })}${t(206, 30, "trompa de Falopio", { size: 10, color: "var(--red)" })}${t(130, 34, "útero", { size: 11, color: "var(--red)" })}
        ${t(186, 120, "endometrio", { size: 10, anchor: "start", color: "#c06060" })}<path d="M184 116 L 150 90" stroke="var(--muted)" stroke-width="1"/>${t(150, 160, "vagina", { size: 10, anchor: "start", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>2.1 El ciclo menstrual</h3><p>Desde la pubertad hasta la menopausia, alrededor de los 50 años, el cuerpo femenino repite un <mark>ciclo</mark> de unos 28 días, aunque es normal que varíe entre 21 y 35. Los primeros días el endometrio se desprende y sale con algo de sangre: es la <b>menstruación</b> o regla, que dura de 3 a 7 días. Después, un óvulo madura en el ovario y el endometrio se vuelve a engrosar. Hacia el <b>día 14</b> ocurre la <mark>ovulación</mark>: el ovario libera el óvulo, que pasa a la trompa. Si no hay fecundación, el endometrio se desprende de nuevo y empieza otro ciclo.</p><p>La duración del ciclo se cuenta desde el primer día de una regla hasta el día anterior a la siguiente. Anotarlo en un calendario o una aplicación ayuda a conocer el propio cuerpo y a detectar cambios. En los primeros años tras la menarquia es muy habitual que los ciclos sean irregulares.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de 28 días en un círculo: menstruación del día 1 al 5, ovulación hacia el día 14">${BG}
        <circle cx="88" cy="92" r="52" fill="var(--card)" stroke="var(--line)" stroke-width="12"/>
        <path d="M88 40 A 52 52 0 0 1 137 74" stroke="var(--red)" stroke-width="12" fill="none"/>
        <path d="M107 140 A 52 52 0 0 1 69 140" stroke="var(--sun)" stroke-width="12" fill="none"/>
        ${[1, 7, 14, 21].map((d) => { const a = ((d - 1) / 28) * 2 * Math.PI; return t((88 + 70 * Math.sin(a)).toFixed(0), (96 - 70 * Math.cos(a)).toFixed(0), "día " + d, { size: 10 }); }).join("")}
        ${t(88, 96, "28 días", { size: 14, font: D, color: "var(--muted)" })}
        <rect x="180" y="50" width="14" height="14" rx="3" fill="var(--red)"/>${t(198, 62, "regla", { size: 11, anchor: "start" })}
        <rect x="180" y="80" width="14" height="14" rx="3" fill="var(--sun)"/>${t(198, 92, "ovulación", { size: 11, anchor: "start" })}
        ${t(180, 124, "fértil: días", { size: 10, anchor: "start", color: "var(--muted)" })}${t(180, 138, "cercanos al 14", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
      video: { id: "C5PAVmcinRI", titulo: "EL CICLO MENSTRUAL: fases del ciclo, ovulación y menstruación", canal: "Actualidad Matrona", vistas: 1339615 },
    },
    {
      html: `<h3>2.2 Las hormonas del ciclo y la salud menstrual</h3><p>El ciclo menstrual está dirigido por <mark>hormonas</mark>. El hipotálamo y la hipófisis liberan hormonas que hacen madurar un folículo del ovario. El folículo produce <b>estrógenos</b>, que engrosan el endometrio. Hacia la mitad del ciclo, un pico de una hormona de la hipófisis provoca la <b>ovulación</b>. El folículo vacío se convierte en el <b>cuerpo lúteo</b>, que produce <b>progesterona</b> y mantiene el endometrio preparado. Si no hay embarazo, el cuerpo lúteo se deshace, baja la progesterona, el endometrio se desprende y llega la menstruación.</p><p>Es normal sentir algunas molestias: dolor en la parte baja del abdomen, hinchazón o cambios de humor en los días previos. Para cuidarse conviene usar productos de higiene adecuados y cambiarlos con la frecuencia indicada (compresas, tampones, copa o bragas menstruales), hacer ejercicio suave, que alivia el dolor, y comer alimentos ricos en hierro para compensar la pérdida de sangre. Si el dolor impide hacer vida normal, las reglas son muy abundantes o desaparecen durante meses, hay que consultar a un profesional sanitario. La menstruación es un proceso natural del que se puede hablar sin vergüenza.</p>`,
      svg: L.ciclo("Hormonas del ciclo menstrual", "Ciclo", ["Madura el folículo", "Estrógenos", "Ovulación", "Progesterona", "Menstruación"], "var(--red)"),
    },
    {
      html: `<h3>2.3 La fecundación</h3><p>En una relación sexual con penetración, el semen se deposita en la vagina. Los espermatozoides nadan por el útero hasta las trompas. Si allí encuentran un óvulo, que sobrevive unas 24 horas tras la ovulación, varios rodean su cubierta, pero <mark>solo uno consigue entrar</mark>; en ese momento la cubierta cambia y bloquea a los demás. Los núcleos del óvulo y del espermatozoide se unen y forman una célula con 46 cromosomas: el <b>cigoto</b>. Así empieza un nuevo ser humano. La fecundación ocurre normalmente en el <b>tercio superior de la trompa de Falopio</b>.</p><p>En la fecundación se decide el <b>sexo cromosómico</b> del bebé. Los óvulos llevan siempre un cromosoma X, mientras que la mitad de los espermatozoides llevan un X y la otra mitad un Y. Si el óvulo es fecundado por un espermatozoide con X, el cigoto será XX; si es con Y, será XY. Si el cigoto se divide en dos al principio del desarrollo, nacen <b>gemelos idénticos</b>; si se liberan dos óvulos y son fecundados por dos espermatozoides, nacen <b>mellizos</b>, que se parecen como cualquier hermano.</p>`,
      svg: L.flujo("Del encuentro de los gametos a la implantación", ["Los espermatozoides suben hasta la trompa", "Solo uno entra en el óvulo: cigoto", "El cigoto se divide mientras baja", "Hacia el día 7 se implanta en el útero"], "La fecundación"),
    },
    {
      html: `<h3>2.4 El embarazo</h3><p>Mientras baja por la trompa, el cigoto se divide una y otra vez. Hacia el sexto o séptimo día llega al útero y se <b>implanta</b> en el endometrio: empieza el embarazo, que dura unas <mark>40 semanas</mark>. Hasta el tercer mes se llama <b>embrión</b>; en ese tiempo se forman todos los órganos y es la etapa más delicada. Después se llama <b>feto</b> y, sobre todo, crece. Se alimenta a través de la <mark>placenta</mark>, un órgano que une su sangre con la de la madre sin que se mezclen; el cordón umbilical lo conecta a ella. El líquido amniótico lo protege de golpes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Feto dentro del útero rodeado de líquido amniótico, unido a la placenta por el cordón umbilical">${BG}
        <ellipse cx="130" cy="88" rx="96" ry="70" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="4"/>
        <ellipse cx="130" cy="88" rx="84" ry="58" fill="var(--water)" fill-opacity=".25"/>
        <path d="M168 34 Q 212 50 210 96 Q 196 70 168 60 Z" fill="#a0442b" fill-opacity=".7"/>
        <circle cx="104" cy="74" r="24" fill="#f4c7a1" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M112 96 Q 150 96 156 122 Q 150 146 116 142 Q 92 136 98 112" fill="#f4c7a1" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M140 110 Q 170 100 190 70" stroke="var(--pen)" stroke-width="3" fill="none"/>
        ${t(250, 16, "placenta", { size: 10, anchor: "end", color: "#a0442b" })}${t(178, 114, "cordón", { size: 10, anchor: "start", color: "var(--pen)" })}${t(130, 174, "líquido amniótico", { size: 10, color: "var(--inf)" })}</svg>`,
      video: { id: "dg_ACMcLI0Q", titulo: "Fecundación y Desarrollo embrionario", canal: "ViSci", vistas: 3825432 },
    },
    {
      html: `<h3>2.5 El desarrollo mes a mes y los cuidados</h3><p>El desarrollo del nuevo ser sigue un calendario bastante preciso:</p><p>• En el <b>primer mes</b> el embrión mide unos milímetros y ya late su corazón, hacia la semana 5 o 6.<br>• Al final del <b>segundo mes</b> tiene esbozados todos los órganos, brazos y piernas, y mide unos 3 cm.<br>• En el <b>tercer mes</b> pasa a llamarse feto; mide unos 9 cm y ya tiene rasgos humanos.<br>• Hacia el <b>quinto mes</b> la madre nota sus movimientos y en la ecografía se ven sus órganos con detalle.<br>• Desde el <b>séptimo mes</b> los pulmones maduran y engorda; un bebé que nace entonces, prematuro, puede sobrevivir con cuidados especiales.<br>• En el <b>noveno mes</b> mide unos 50 cm y pesa alrededor de 3,3 kg.</p><p>Durante el embarazo es fundamental el <b>control médico</b> con ecografías y análisis, una alimentación variada con suplementos de ácido fólico y yodo, ejercicio moderado y evitar por completo el tabaco, el alcohol y las drogas, que atraviesan la placenta. Tampoco se deben tomar medicamentos sin consultar.</p>`,
      svg: L.linea("Desarrollo del embrión y del feto durante el embarazo", [["Mes 1", "late el corazón"], ["Mes 2", "todos los órganos"], ["Mes 3", "pasa a feto"], ["Mes 5", "se mueve"], ["Mes 9", "50 cm, 3 kg"]], "Nueve meses de desarrollo"),
    },
    {
      html: `<h3>2.6 El parto y la lactancia</h3><p>Al final del embarazo, unas hormonas provocan las <b>contracciones</b> del músculo del útero. El parto tiene tres fases. En la <b>dilatación</b>, el cuello del útero se abre hasta unos 10 cm y suele romperse la bolsa del líquido amniótico. En la <b>expulsión</b>, las contracciones empujan al bebé, normalmente de cabeza, por la vagina. En el <b>alumbramiento</b>, sale la placenta. Si hay complicaciones, se hace una <b>cesárea</b>, una operación por el abdomen. Después, las glándulas mamarias producen leche. La <mark>lactancia materna</mark> aporta al bebé nutrientes y anticuerpos que lo protegen de infecciones.</p><p>La leche de los primeros días, el <b>calostro</b>, es especialmente rica en anticuerpos. La Organización Mundial de la Salud recomienda la lactancia materna exclusiva durante los seis primeros meses, si es posible; cuando no lo es, la leche de fórmula también alimenta correctamente al bebé.</p>`,
      svg: L.flujo("Las tres fases del parto", ["Dilatación: el cuello del útero se abre", "Expulsión: sale el bebé", "Alumbramiento: sale la placenta"], "El parto"),
    },
    {
      html: `<h3>3.1 Métodos anticonceptivos</h3><p>Los <b>métodos anticonceptivos</b> sirven para evitar un embarazo no deseado. Ninguno es eficaz al 100 %, y solo el <mark>preservativo</mark> protege además de las infecciones de transmisión sexual. Para elegir uno conviene consultar a un profesional sanitario; en España los centros de salud ofrecen atención joven y confidencial.</p>${tabla(["Tipo", "Ejemplos", "Cómo actúa"], [["Barrera", "preservativo masculino y femenino", "impide que el semen llegue al útero"], ["Hormonales", "píldora, anillo, parche, implante", "impiden la ovulación"], ["Dispositivo intrauterino", "DIU", "dificulta la fecundación y la implantación"], ["Quirúrgicos", "vasectomía, ligadura de trompas", "cortan los conductos; casi irreversibles"]])}<p>Los «métodos naturales», como la marcha atrás o contar los días, fallan mucho.</p><p>Los métodos se agrupan según cómo actúan. Los de <b>barrera</b> impiden que los espermatozoides lleguen al óvulo: preservativo masculino y femenino, diafragma. Los <b>hormonales</b> impiden la ovulación: píldora, parche, anillo, implante o inyección. El <b>DIU</b> es un pequeño dispositivo que se coloca en el útero e impide la fecundación y la implantación. Los <b>quirúrgicos</b>, como la vasectomía o la ligadura de trompas, son casi definitivos. La <b>anticoncepción de urgencia</b>, la llamada píldora del día después, solo debe usarse en situaciones excepcionales y no protege de las ITS.</p>`,
      svg: L.compara("Métodos anticonceptivos de barrera y hormonales", ["Barrera", "var(--leaf)", ["preservativo", "impide el paso", "protege de ITS", "sin receta"]], ["Hormonales", "var(--sun)", ["píldora, anillo", "impiden la ovulación", "no protegen de ITS", "control médico"]]),
      video: { id: "QMeJ4F-H2kI", titulo: "Métodos anticonceptivos, ¡conócelos!", canal: "TV UNAM", vistas: 460657 },
    },
    {
      html: `<h3>3.2 La reproducción asistida</h3><p>Alrededor de una de cada seis parejas tiene dificultades para conseguir un embarazo: es la <mark>infertilidad</mark>. Puede deberse a problemas en los espermatozoides, a la falta de ovulación, a trompas obstruidas o a la edad, porque la fertilidad disminuye con los años, sobre todo a partir de los 35 en las mujeres. Las técnicas de <mark>reproducción asistida</mark> ayudan en estos casos:</p><p>• La <b>inseminación artificial</b> consiste en introducir el semen directamente en el útero en el momento de la ovulación.<br>• En la <b>fecundación in vitro</b> se extraen óvulos, se fecundan en el laboratorio y uno o dos embriones se transfieren al útero.<br>• La <b>donación de gametos</b> permite usar óvulos o espermatozoides de donantes anónimos.<br>• La <b>congelación</b> de óvulos, espermatozoides o embriones permite usarlos años después, por ejemplo antes de un tratamiento contra el cáncer.</p><p>España es uno de los países de Europa con más tratamientos de reproducción asistida. Estas técnicas plantean debates éticos sobre los embriones sobrantes o los límites de edad, que regula la ley.</p>`,
      svg: L.tabla("Técnicas de reproducción asistida", ["Técnica", "Qué se hace", "Dónde fecunda"], [["Inseminación", "semen al útero", "en la trompa"], ["In vitro", "óvulo y espermatozoide", "en el laboratorio"], ["Donación", "gametos de donante", "laboratorio o trompa"]]),
    },
    {
      html: `<h3>3.3 La salud sexual</h3><p>Las <b>infecciones de transmisión sexual</b> (ITS) se contagian en las relaciones sexuales. Algunas las causan bacterias, como la clamidia, la gonorrea o la sífilis, y se curan con antibióticos. Otras las causan virus, como el <b>VIH</b> (que provoca el sida), el virus del papiloma humano o el herpes, y no tienen cura, aunque sí tratamiento. Muchas no dan síntomas al principio. Se previenen usando <mark>preservativo</mark> en todas las relaciones, y la del papiloma, también con una <b>vacuna</b>. Ante cualquier duda, hay que consultar sin vergüenza. Higiene, información fiable y respeto forman parte de la salud.</p><p>El <b>VIH</b> se transmite por relaciones sexuales sin preservativo, por compartir jeringuillas y de madre a hijo durante el embarazo, pero no por besos, abrazos, compartir vasos ni picaduras de mosquito. Hoy existen tratamientos que permiten llevar una vida larga y normal, y una persona en tratamiento con el virus indetectable no lo transmite. Hacerse la prueba es sencillo, gratuito y confidencial.</p>`,
      svg: L.tabla("Infecciones de transmisión sexual: causa y tratamiento", ["ITS", "Causa", "Tratamiento"], [["Clamidia", "bacteria", "antibióticos"], ["Gonorrea", "bacteria", "antibióticos"], ["Sífilis", "bacteria", "antibióticos"], ["VIH", "virus", "antivirales, sin cura"], ["Papiloma", "virus", "vacuna preventiva"]]),
    },
    {
      html: `<h3>3.4 Relaciones igualitarias, consentimiento y diversidad</h3><p>Una sexualidad saludable no es solo evitar embarazos e infecciones: también es vivir las relaciones con <mark>respeto</mark>, <mark>igualdad</mark> y libertad. El <b>consentimiento</b> debe ser libre, claro, informado y se puede retirar en cualquier momento: si alguien no dice que sí, o no está en condiciones de decidir, la respuesta es no. Nadie debe sentirse presionado a hacer algo que no quiere, ni a enviar fotos íntimas; difundir imágenes de otra persona sin su permiso es un delito.</p><p>Las relaciones sanas se basan en la confianza y la comunicación. Son señales de alarma el control del móvil o de la ropa, los celos excesivos, aislar a la pareja de sus amistades o las humillaciones: son formas de violencia que hay que denunciar. En España, el teléfono <b>016</b> atiende de forma gratuita y sin dejar rastro en la factura.</p><p>Las personas somos diversas en nuestra <b>orientación sexual</b> (a quién nos sentimos atraídos) y en nuestra <b>identidad de género</b> (cómo nos sentimos). Todas merecen el mismo respeto. Ante cualquier duda, se puede acudir a la familia, al profesorado, a los centros de salud y a fuentes fiables, no a la pornografía, que muestra relaciones irreales y a menudo violentas.</p>`,
      svg: L.radial("Claves de una relación sana", "Relación sana", ["Consentimiento", "Igualdad", "Confianza", "Comunicación", "Sin control", "Respeto"], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Del óvulo al bebé",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Línea del tiempo: ovulación, fecundación en la trompa, cigoto que se divide, implantación en el útero hacia el día 7, embrión hasta el tercer mes, feto y parto hacia la semana 40">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      <path d="M40 120 H 600" stroke="var(--line)" stroke-width="6"/>
      ${[["ovulación", "día 14 del ciclo", "var(--sun)"], ["fecundación", "en la trompa", "var(--red)"], ["cigoto", "se divide", "var(--pen)"], ["implantación", "día 6-7", "#a05ad0"], ["embrión", "hasta el 3.er mes", "var(--leaf)"], ["feto", "crece", "var(--inf)"], ["parto", "semana 40", "var(--red)"]].map(([n, d, c], i) => { const x = 50 + i * 90; return `<circle cx="${x}" cy="120" r="12" fill="${c}"/>${t(x, i % 2 ? 160 : 92, n, { size: 14, color: c, font: D })}${t(x, i % 2 ? 178 : 74, d, { size: 11, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "FGfIZXUBy7Q", titulo: "SISTEMA REPRODUCTOR FEMENINO y MASCULINO", canal: "Smile and Learn - Español", vistas: 1977660, megusta: 0, busqueda: "aparato reproductor humano biología" },
  ejemplos: [
    { enunciado: "Una mujer tiene ciclos regulares de 28 días y su última regla empezó el 1 de marzo. ¿Hacia qué día ovulará?",
      pasos: ["En un ciclo de 28 días, la ovulación ocurre hacia el día 14.", "El día 1 del ciclo es el 1 de marzo.", "El día 14 del ciclo es el 14 de marzo."],
      resultado: "hacia el 14 de marzo (con variaciones: el ciclo no es exacto)." },
    { enunciado: "¿Cuántos cromosomas tienen un espermatozoide, un óvulo y el cigoto? Explica por qué.",
      pasos: ["Los gametos tienen la mitad de cromosomas: 23.", "En la fecundación se unen sus núcleos.", "23 + 23 = 46, el número normal de una célula humana."],
      resultado: "23, 23 y 46." },
    { enunciado: "Durante el primer trimestre del embarazo se desaconseja totalmente el alcohol. ¿Por qué esa etapa es especialmente delicada?",
      pasos: ["En los tres primeros meses es la etapa de embrión.", "En ella se forman todos los órganos.", "Las sustancias tóxicas pueden atravesar la placenta y causar malformaciones."],
      resultado: "porque se están formando los órganos; el alcohol no es seguro en ningún momento del embarazo." },
    { enunciado: "Un espermatozoide con cromosoma Y fecunda un óvulo. ¿Qué cromosomas sexuales tendrá el cigoto? ¿Qué probabilidad hay de que un bebé sea XX?",
      pasos: ["El óvulo siempre aporta un cromosoma X.", "El espermatozoide aporta un Y, así que el cigoto es XY.", "La mitad de los espermatozoides llevan X y la otra mitad Y."],
      resultado: "XY; la probabilidad de XX es del 50 %." },
    { enunciado: "Si el corazón del embrión empieza a latir en la semana 6 y late unas 150 veces por minuto, ¿cuántas veces habrá latido al llegar la semana 40?",
      pasos: ["Semanas de latido: 40 − 6 = 34 semanas.", "Minutos en 34 semanas: 34 · 7 · 24 · 60 = 342.720 minutos.", "Latidos: 342.720 · 150 ≈ 51.408.000."],
      resultado: "unos 51 millones de latidos antes de nacer." },
    { enunciado: "Una pareja no consigue un embarazo porque las trompas de la mujer están obstruidas. ¿Qué técnica de reproducción asistida sería la adecuada y por qué?",
      pasos: ["Con las trompas obstruidas, el óvulo y los espermatozoides no pueden encontrarse.", "La inseminación no sirve, porque la fecundación seguiría necesitando las trompas.", "En la fecundación in vitro la fecundación ocurre en el laboratorio y el embrión se coloca directamente en el útero."],
      resultado: "la fecundación in vitro, porque evita las trompas." },
  ],
  errores: [...[
    "Pensar que la fecundación ocurre en el útero: ocurre en la trompa de Falopio.",
    "Creer que la menstruación es la ovulación: son momentos distintos del ciclo.",
    "Decir que la píldora protege de las ITS: solo el preservativo protege.",
    "Confundir uretra (salida de orina y semen en el hombre) con uréter.",
    "Pensar que todos los ciclos duran exactamente 28 días: varían entre personas y meses.",
  ], "Pensar que con la primera relación sexual o durante la regla no puede haber embarazo: sí puede haberlo."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Nombra las gónadas masculinas y femeninas y lo que producen.", sol: "Testículos: espermatozoides y testosterona. Ovarios: óvulos, estrógenos y progesterona." } },
    { nivel: "básico", ...{ q: "¿Por qué los testículos están fuera del abdomen?", sol: "Porque los espermatozoides necesitan una temperatura algo más baja que la del interior del cuerpo para formarse bien." } },
    { nivel: "básico", ...{ q: "Compara el óvulo y el espermatozoide en tamaño, movilidad y número.", sol: "El óvulo es grande, inmóvil y madura normalmente uno al mes. El espermatozoide es pequeño, nada con su cola y se producen millones." } },
    { nivel: "básico", ...{ q: "¿Dónde ocurre la fecundación y qué se forma?", sol: "En el tercio superior de la trompa de Falopio. Se forma el cigoto." } },
    { nivel: "básico", ...{ q: "Cita las tres fases del parto.", sol: "Dilatación, expulsión y alumbramiento (salida de la placenta)." } },
    { nivel: "básico", ...{ q: "¿Qué método anticonceptivo previene a la vez el embarazo y las ITS?", sol: "El preservativo (masculino o femenino)." } },
    { nivel: "básico", q: "¿Cuántos cromosomas tienen los gametos y por qué?", sol: "23, la mitad que una célula normal, porque se forman por meiosis; al unirse en la fecundación, el cigoto tiene 46." },
    { nivel: "básico", q: "Ordena el recorrido del óvulo desde que sale del ovario.", sol: "Ovario → trompa de Falopio (donde puede ser fecundado) → útero → si no hay fecundación, sale con la menstruación por la vagina." },
    { nivel: "básico", q: "¿Qué es el calostro?", sol: "La primera leche que producen las glándulas mamarias tras el parto, muy rica en anticuerpos." },
    { nivel: "básico", q: "Cita dos métodos anticonceptivos de barrera y dos hormonales.", sol: "Barrera: preservativo masculino y femenino. Hormonales: píldora y anillo vaginal (también parche o implante)." },
    { nivel: "básico", q: "¿Qué características debe tener el consentimiento en una relación?", sol: "Debe ser libre, claro, informado y se puede retirar en cualquier momento." },
    { nivel: "básico", q: "¿Qué ITS pueden prevenirse con una vacuna?", sol: "La del virus del papiloma humano (y la hepatitis B)." },
    { nivel: "medio", ...{ q: "Ordena el recorrido de los espermatozoides desde que se forman hasta que salen.", sol: "Testículo → epidídimo → conducto deferente → (vesícula seminal y próstata añaden líquidos) → uretra → exterior." } },
    { nivel: "medio", ...{ q: "Describe las fases del ciclo menstrual.", sol: "Menstruación (días 1-5): se desprende el endometrio. Fase de maduración del óvulo y engrosamiento del endometrio. Ovulación (hacia el día 14). Si no hay fecundación, el endometrio se desprende otra vez." } },
    { nivel: "medio", ...{ q: "Diferencia embrión y feto.", sol: "Embrión: hasta el tercer mes, cuando se forman los órganos. Feto: desde el tercer mes hasta el parto, cuando sobre todo crece." } },
    { nivel: "medio", ...{ q: "¿Qué funciones tiene la placenta?", sol: "Pasar nutrientes y oxígeno de la madre al feto, recoger sus desechos y producir hormonas del embarazo." } },
    { nivel: "medio", q: "Compara la espermatogénesis y la ovogénesis.", sol: "Espermatogénesis: en los testículos, empieza en la pubertad, dura toda la vida y produce millones de espermatozoides al día. Ovogénesis: en los ovarios, empieza antes de nacer, madura un óvulo al mes desde la pubertad y termina en la menopausia." },
    { nivel: "medio", q: "Explica el papel de los estrógenos y la progesterona en el ciclo menstrual.", sol: "Los estrógenos, producidos por el folículo, engrosan el endometrio en la primera mitad. Tras la ovulación, el cuerpo lúteo produce progesterona, que mantiene el endometrio preparado. Si no hay embarazo, baja la progesterona y llega la menstruación." },
    { nivel: "medio", q: "Diferencia gemelos idénticos y mellizos.", sol: "Gemelos idénticos: un solo cigoto que se divide en dos; tienen la misma información genética. Mellizos: dos óvulos fecundados por dos espermatozoides; se parecen como cualquier hermano." },
    { nivel: "medio", q: "¿Por qué el tabaco y el alcohol son peligrosos durante el embarazo?", sol: "Porque sus sustancias atraviesan la placenta y llegan al embrión o al feto; pueden causar malformaciones, bajo peso, parto prematuro y problemas de desarrollo." },
    { nivel: "medio", q: "Explica por qué la píldora anticonceptiva no protege del VIH.", sol: "Porque actúa impidiendo la ovulación, pero no evita el contacto con el semen ni con los fluidos donde está el virus. Solo los métodos de barrera, como el preservativo, impiden ese contacto." },
    { nivel: "medio", q: "¿Cómo se transmite el VIH y cómo no se transmite?", sol: "Se transmite por relaciones sexuales sin preservativo, compartiendo jeringuillas y de madre a hijo. No se transmite por besos, abrazos, compartir vasos o el baño, ni por picaduras de mosquito." },
    { nivel: "medio", q: "Cita tres señales de alarma de una relación de control.", sol: "Revisar el móvil de la pareja, controlar su ropa o con quién sale, celos excesivos, aislarla de sus amistades o humillarla." },
    { nivel: "medio", q: "¿Por qué un bebé prematuro de siete meses puede sobrevivir y uno de cinco lo tiene muy difícil?", sol: "Porque hacia el séptimo mes los pulmones ya están bastante maduros y pueden respirar con ayuda; a los cinco meses los pulmones y otros órganos están demasiado inmaduros." },
    { nivel: "avanzado", q: "Una mujer con ciclos de 32 días empezó la regla el 3 de abril. Si la ovulación suele ocurrir unos 14 días antes de la siguiente regla, ¿cuándo ovulará aproximadamente?", sol: "La siguiente regla será hacia el 3 + 32 = 35 de abril, es decir, el 5 de mayo. 14 días antes: hacia el 21 de abril (día 18 del ciclo)." },
    { nivel: "avanzado", q: "Explica por qué contar los días del ciclo es un método anticonceptivo poco fiable.", sol: "Porque los ciclos varían de un mes a otro, la ovulación puede adelantarse o retrasarse y los espermatozoides sobreviven hasta cinco días; es fácil equivocarse y que haya espermatozoides vivos cuando se produce la ovulación." },
    { nivel: "avanzado", q: "Relaciona la estructura del espermatozoide con su función.", sol: "La cabeza lleva el núcleo con 23 cromosomas y enzimas para perforar la cubierta del óvulo; la pieza intermedia tiene muchas mitocondrias que dan energía para nadar; la cola o flagelo lo impulsa. Es pequeño y ligero porque su función es moverse y llegar al óvulo." },
    { nivel: "avanzado", q: "¿Por qué el óvulo es tan grande y no se mueve?", sol: "Porque tiene mucho citoplasma con nutrientes y orgánulos para mantener las primeras divisiones del embrión hasta que se implanta; no necesita moverse porque lo transporta la trompa y son los espermatozoides los que lo buscan." },
    { nivel: "avanzado", q: "Argumenta a favor de la vacuna del virus del papiloma humano en chicos y chicas.", sol: "El virus se transmite por contacto sexual y puede causar cáncer de cuello de útero, pero también de ano, garganta o pene, y verrugas genitales. Vacunar a ambos sexos protege a cada persona y reduce la circulación del virus en toda la población." },
    { nivel: "avanzado", q: "Analiza un debate ético de la reproducción asistida y da argumentos de las dos posturas.", sol: "Ejemplo: los embriones sobrantes congelados. A favor de conservarlos o donarlos: pueden dar hijos a otras parejas o servir a la investigación con permiso. En contra de crear tantos: plantea dudas sobre su destino y su estatus. La ley regula cuántos se transfieren y qué se puede hacer con ellos." },
    { nivel: "avanzado", q: "Diseña una campaña breve para adolescentes sobre consentimiento y prevención de ITS con tres mensajes basados en lo estudiado.", sol: "Respuesta abierta. Ejemplos: «Sin un sí claro, es no» (consentimiento libre y revocable); «El preservativo es el único método que te protege de ITS y embarazo»; «La prueba del VIH es gratuita y confidencial: pregunta en tu centro de salud». Debe incluir información fiable y dónde pedir ayuda." },
  ],
  quiz: [
    { q: "El gameto masculino es el…", o: ["óvulo", "espermatozoide", "cigoto", "folículo"], a: 1, e: "El femenino es el óvulo." },
    { q: "Los gametos tienen…", o: ["46 cromosomas", "92 cromosomas", "23 cromosomas", "12 cromosomas"], a: 2, e: "La mitad." },
    { q: "Los gametos se forman por…", o: ["meiosis", "mitosis", "fecundación", "implantación"], a: 0, e: "Reduce los cromosomas a la mitad." },
    { q: "Los espermatozoides maduran en el…", o: ["útero", "ovario", "pene", "epidídimo"], a: 3, e: "Sobre el testículo." },
    { q: "La glándula que añade líquido al semen es la…", o: ["tiroides", "próstata", "hipófisis", "suprarrenal"], a: 1, e: "Junto con la vesícula seminal." },
    { q: "El embarazo se desarrolla en el…", o: ["ovario", "trompa", "útero", "vagina"], a: 2, e: "En su capa interna, el endometrio." },
    { q: "La ovulación ocurre, en un ciclo de 28 días, hacia el día…", o: ["14", "1", "28", "5"], a: 0, e: "A mitad del ciclo." },
    { q: "La menstruación es…", o: ["la salida del óvulo", "la fecundación", "la implantación", "el desprendimiento del endometrio"], a: 3, e: "Si no hay embarazo." },
    { q: "La hormona que produce el cuerpo lúteo es la…", o: ["testosterona", "progesterona", "insulina", "adrenalina"], a: 1, e: "Mantiene el endometrio." },
    { q: "La fecundación ocurre normalmente en…", o: ["el útero", "la vagina", "la trompa de Falopio", "el ovario"], a: 2, e: "En su tercio superior." },
    { q: "El sexo cromosómico del bebé lo determina…", o: ["el espermatozoide", "el óvulo", "la placenta", "la madre"], a: 0, e: "Puede llevar X o Y." },
    { q: "Hasta el tercer mes, el nuevo ser se llama…", o: ["feto", "cigoto", "bebé", "embrión"], a: 3, e: "Se forman los órganos." },
    { q: "La placenta sirve para…", o: ["producir óvulos", "el intercambio entre madre y feto", "fabricar semen", "proteger de golpes"], a: 1, e: "Sin mezclar las sangres." },
    { q: "La última fase del parto es el…", o: ["dilatación", "expulsión", "alumbramiento", "implantación"], a: 2, e: "Sale la placenta." },
    { q: "El único método que protege de las ITS es el…", o: ["preservativo", "DIU", "anillo", "implante"], a: 0, e: "De barrera." },
    { q: "Los anticonceptivos hormonales actúan…", o: ["matando bacterias", "como barrera", "en las trompas", "impidiendo la ovulación"], a: 3, e: "No protegen de ITS." },
    { q: "En la fecundación in vitro, la fecundación ocurre…", o: ["en el útero", "en el laboratorio", "en la trompa", "en la vagina"], a: 1, e: "Luego se transfiere el embrión." },
    { q: "El VIH está causado por…", o: ["una bacteria", "un hongo", "un virus", "un parásito"], a: 2, e: "No tiene cura, sí tratamiento." },
    { q: "El consentimiento en una relación…", o: ["se puede retirar en cualquier momento", "es para siempre", "no hace falta", "lo da una sola persona"], a: 0, e: "Libre, claro e informado." },
    { q: "Los mellizos proceden de…", o: ["un cigoto que se divide", "un óvulo y dos espermatozoides", "un solo espermatozoide", "dos óvulos fecundados"], a: 3, e: "Se parecen como hermanos." },
  ],
  examen: [
    { q: "Los testículos están en el escroto porque…", o: ["así crecen más", "los espermatozoides necesitan menos temperatura", "protegen el pene", "fabrican orina"], a: 1, e: "Unos grados por debajo." },
    { q: "La célula humana más grande es el…", o: ["espermatozoide", "glóbulo rojo", "óvulo", "neurona"], a: 2, e: "Mide 0,1 mm." },
    { q: "Las sustancias tóxicas son más peligrosas en el primer trimestre porque…", o: ["se forman los órganos", "el feto es más grande", "no hay placenta", "la madre come más"], a: 0, e: "Etapa embrionaria." },
    { q: "La lactancia materna aporta además de nutrientes…", o: ["hormonas sexuales", "vitamina C solo", "glóbulos rojos", "anticuerpos"], a: 3, e: "Protegen de infecciones." },
    { q: "La clamidia y la gonorrea se tratan con…", o: ["vacunas", "antibióticos", "antivirales", "nada"], a: 1, e: "Son bacterias." },
    { q: "Un cigoto con cromosomas XY procede de un espermatozoide con…", o: ["X", "dos X", "Y", "ningún cromosoma"], a: 2, e: "El óvulo aporta X." },
    { q: "La ovogénesis termina con la…", o: ["menopausia", "pubertad", "menarquia", "ovulación"], a: 0, e: "Hacia los 50 años." },
    { q: "El teléfono de atención a la violencia de género en España es el…", o: ["112", "091", "061", "016"], a: 3, e: "No deja rastro en la factura." },
  ],
  feynman: [...["Qué hace cada órgano de los aparatos reproductores", "Qué ocurre en el ciclo menstrual y cuándo es la ovulación", "Cómo se forma un nuevo ser desde la fecundación hasta el parto"], "Cómo controlan las hormonas el ciclo menstrual", "Qué es el consentimiento y cómo es una relación sana"],
  mapa: mapa("REPRODUCCIÓN HUMANA", "var(--eso)", [
    ["Aparatos", "testículos · ovarios · útero", "var(--red)"],
    ["Gametos", "espermatozoide · óvulo · 23 cromosomas", "var(--pen)"],
    ["Ciclo menstrual", "regla · ovulación día 14", "#a05ad0"],
    ["Embarazo", "fecundación · placenta · parto", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ...[
    ["Gametos", "Células reproductoras con 23 cromosomas: espermatozoide y óvulo."],
    ["Testículos", "Gónadas masculinas: espermatozoides y testosterona."],
    ["Ovarios", "Gónadas femeninas: óvulos, estrógenos y progesterona."],
    ["Ovulación", "Salida de un óvulo del ovario, hacia el día 14 del ciclo."],
    ["Menstruación", "Desprendimiento del endometrio cuando no hay embarazo."],
    ["Cigoto", "Célula que resulta de la fecundación, con 46 cromosomas."],
    ["Placenta", "Órgano de intercambio entre la madre y el feto."],
    ["Preservativo", "Único método que previene embarazo e ITS."],
  ],
    ["Meiosis", "División que forma gametos con 23 cromosomas."],
    ["Cuerpo lúteo", "Folículo vacío que produce progesterona tras la ovulación."],
    ["Fecundación in vitro", "Fecundación en el laboratorio y transferencia del embrión al útero."],
    ["Consentimiento", "Libre, claro, informado y revocable en cualquier momento."],
  ],
  glosario: [
    ["Gameto", "Célula reproductora con 23 cromosomas."],
    ["Meiosis", "División celular que forma los gametos."],
    ["Espermatozoide", "Gameto masculino, pequeño y móvil."],
    ["Óvulo", "Gameto femenino, grande e inmóvil."],
    ["Testículo", "Gónada masculina."],
    ["Ovario", "Gónada femenina."],
    ["Folículo", "Bolsita del ovario donde madura un óvulo."],
    ["Endometrio", "Capa interna del útero."],
    ["Ovulación", "Salida del óvulo del ovario."],
    ["Menstruación", "Desprendimiento del endometrio con algo de sangre."],
    ["Fecundación", "Unión de un óvulo y un espermatozoide."],
    ["Cigoto", "Primera célula de un nuevo ser, con 46 cromosomas."],
    ["Implantación", "Fijación del embrión al endometrio."],
    ["Placenta", "Órgano de intercambio entre la madre y el feto."],
    ["Alumbramiento", "Salida de la placenta tras el parto."],
    ["Anticonceptivo", "Método para evitar un embarazo."],
    ["ITS", "Infección de transmisión sexual."],
    ["Consentimiento", "Acuerdo libre y claro para participar en una relación."],
  ],
  situacion: {
    titulo: "Preguntas sin vergüenza",
    reto: "Muchas dudas sobre sexualidad se resuelven con información poco fiable de internet. Vuestra clase creará una guía de respuestas rigurosas a las preguntas reales de los compañeros, revisada por profesionales.",
    pasos: [
      "Recoged preguntas anónimas en un buzón de la clase y clasificadlas por temas.",
      "Buscad respuestas en fuentes fiables (centros de salud, organismos oficiales) y citadlas.",
      "Elaborad una línea del tiempo del embarazo con tamaños a escala y un esquema del ciclo menstrual.",
      "Preparad una ficha sobre métodos anticonceptivos e ITS con su eficacia y forma de prevención.",
      "Incluid un apartado sobre consentimiento, relaciones sanas y recursos de ayuda, y pedid su revisión al centro de salud.",
    ],
    producto: "Guía de preguntas y respuestas sobre reproducción y salud sexual, con esquemas y recursos de ayuda.",
    evaluacion: [
      "Rigor científico y uso de fuentes fiables.",
      "Respeto, lenguaje inclusivo y enfoque igualitario.",
      "Claridad de los esquemas y de las respuestas.",
      "Utilidad de la guía para el alumnado.",
    ],
  },
  familias: ["Abrid un espacio de conversación tranquilo sobre la pubertad, los afectos y el consentimiento.", "Buscad juntos el servicio de atención joven del centro de salud más cercano.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Salud y enfermedad» y «Cuerpo humano» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): anatomía y fisiología de los aparatos reproductores, gametogénesis, ciclo menstrual, fecundación, embarazo y parto, anticoncepción, reproducción asistida, ITS y educación afectivo-sexual basada en el respeto, la igualdad, el consentimiento y la diversidad. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Buzón anónimo de preguntas para trabajar dudas reales con rigor.",
      "Línea del tiempo del desarrollo embrionario con tamaños a escala (semilla, fruta).",
      "Colaboración con el programa de salud escolar del centro de salud.",
      "Análisis de mensajes de series y redes sobre relaciones para detectar el control y los estereotipos.",
    ],
  },
  fuentes: [...[RD, wiki("Aparato reproductor", "Aparato_reproductor"), wiki("Ciclo menstrual", "Ciclo_menstrual")], wiki("Fecundación in vitro", "Fecundaci%C3%B3n_in_vitro")],
  revisado: "2026-11-13",
};
