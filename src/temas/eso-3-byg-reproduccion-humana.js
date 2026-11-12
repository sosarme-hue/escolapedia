// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La reproducción humana",
  minutos: 55,
  objetivos: ["Describir los aparatos reproductores masculino y femenino y sus gametos", "Interpretar el ciclo menstrual y el momento de la ovulación", "Explicar la fecundación, el embarazo y el parto", "Conocer los métodos anticonceptivos, las infecciones de transmisión sexual y su prevención"],
  claves: ["gameto", "espermatozoide", "óvulo", "ovulación", "menstruación", "fecundación", "cigoto", "placenta"],
  pregunta: {
    texto: "Cada mes, en un ovario madura normalmente un solo óvulo, pero en una eyaculación hay más de cien millones de espermatozoides. ¿Por qué hacen falta tantos para un único óvulo?",
    respuesta: "Porque el viaje es muy difícil. La mayoría muere por la acidez de la vagina, se pierde por el camino o entra en la trompa equivocada. Solo unos cientos llegan cerca del óvulo, y entre todos ayudan a abrir su cubierta. Al final, <mark>solo uno lo fecunda</mark>.",
  },
  bloques: [
    {
      html: `<h3>Reproducción y sexualidad</h3><p>La reproducción humana es <b>sexual</b>: un nuevo ser se forma por la unión de dos células especiales, los <mark>gametos</mark>. El gameto masculino es el <b>espermatozoide</b> y el femenino, el <b>óvulo</b>. Cada gameto tiene la mitad de cromosomas que una célula normal (23 en lugar de 46), así que el hijo recibe la mitad de su información genética de cada progenitor. Pero la <b>sexualidad</b> humana es mucho más que reproducción: incluye los afectos, la comunicación, el placer, la identidad y el respeto mutuo. Toda relación debe basarse en el <b>consentimiento</b> libre de las dos personas.</p>`,
    },
    {
      html: `<h3>El aparato reproductor masculino</h3><p>Los <mark>testículos</mark> son las gónadas masculinas: fabrican los espermatozoides y la testosterona. Están fuera del abdomen, en el <b>escroto</b>, porque los espermatozoides necesitan una temperatura unos grados más baja que la del cuerpo. Los espermatozoides maduran en el <b>epidídimo</b> y salen por los <b>conductos deferentes</b>. Por el camino, la <b>vesícula seminal</b> y la <b>próstata</b> añaden líquidos que los nutren y los protegen; la mezcla es el <b>semen</b>. El semen sale al exterior por la <b>uretra</b>, que recorre el <b>pene</b>. La producción de espermatozoides empieza en la pubertad y dura toda la vida.</p>`,
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
      html: `<h3>Los gametos</h3><p>El <b>espermatozoide</b> es una de las células más pequeñas del cuerpo: mide unas 60 micras. Tiene una <b>cabeza</b> con el núcleo y una vesícula de enzimas para perforar la cubierta del óvulo, una <b>pieza intermedia</b> llena de mitocondrias que dan energía y una <b>cola</b> o flagelo para nadar. El <b>óvulo</b>, en cambio, es la célula humana más grande: mide 0,1 mm, casi visible a simple vista. No se mueve y tiene mucho citoplasma con nutrientes para las primeras divisiones del embrión. Lo rodean varias capas protectoras.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación entre un óvulo grande y redondo y un espermatozoide pequeño con cabeza, pieza intermedia y cola">${BG}
        <circle cx="76" cy="88" r="56" fill="var(--sun)" fill-opacity=".15" stroke="var(--sun)" stroke-width="5" stroke-dasharray="3 3"/><circle cx="76" cy="88" r="48" fill="#ffe8d0" stroke="#b8860b" stroke-width="2"/><circle cx="84" cy="80" r="14" fill="var(--pen)" fill-opacity=".5"/>
        ${t(76, 162, "óvulo (100 μm)", { size: 11, color: "#b8860b" })}
        <g transform="translate(170 88)"><ellipse cx="0" cy="0" rx="9" ry="6" fill="var(--pen)" fill-opacity=".7" stroke="var(--pen)" stroke-width="1.5"/><rect x="9" y="-2.5" width="12" height="5" fill="var(--red)" fill-opacity=".7"/><path d="M21 0 q 12 -8 22 0 t 22 0" stroke="var(--pen)" stroke-width="1.8" fill="none"/></g>
        ${t(166, 70, "cabeza", { size: 10, color: "var(--pen)" })}${t(186, 110, "pieza", { size: 10, color: "var(--red)" })}${t(186, 122, "intermedia", { size: 10, color: "var(--red)" })}${t(232, 74, "cola", { size: 10, color: "var(--pen)" })}
        ${t(200, 150, "espermatozoide", { size: 11, color: "var(--pen)" })}${t(200, 164, "(60 μm)", { size: 11, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>El aparato reproductor femenino</h3><p>Los <mark>ovarios</mark> son las gónadas femeninas: guardan los óvulos y producen estrógenos y progesterona. Una niña nace con todos sus óvulos inmaduros, unos dos millones, aunque solo madurarán unos 400 a lo largo de su vida. Cerca de cada ovario empieza una <b>trompa de Falopio</b>, un conducto que recoge el óvulo y lo lleva al <b>útero</b>, un órgano muscular y hueco donde se desarrolla el embarazo. Su capa interna, el <b>endometrio</b>, se prepara cada mes para recibir un embrión. El cuello del útero comunica con la <b>vagina</b>, que se abre al exterior en la <b>vulva</b>.</p>`,
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
      html: `<h3>El ciclo menstrual</h3><p>Desde la pubertad hasta la menopausia, alrededor de los 50 años, el cuerpo femenino repite un <mark>ciclo</mark> de unos 28 días, aunque es normal que varíe entre 21 y 35. Los primeros días el endometrio se desprende y sale con algo de sangre: es la <b>menstruación</b> o regla, que dura de 3 a 7 días. Después, un óvulo madura en el ovario y el endometrio se vuelve a engrosar. Hacia el <b>día 14</b> ocurre la <mark>ovulación</mark>: el ovario libera el óvulo, que pasa a la trompa. Si no hay fecundación, el endometrio se desprende de nuevo y empieza otro ciclo.</p>`,
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
      html: `<h3>La fecundación</h3><p>En una relación sexual con penetración, el semen se deposita en la vagina. Los espermatozoides nadan por el útero hasta las trompas. Si allí encuentran un óvulo, que sobrevive unas 24 horas tras la ovulación, varios rodean su cubierta, pero <mark>solo uno consigue entrar</mark>; en ese momento la cubierta cambia y bloquea a los demás. Los núcleos del óvulo y del espermatozoide se unen y forman una célula con 46 cromosomas: el <b>cigoto</b>. Así empieza un nuevo ser humano. La fecundación ocurre normalmente en el <b>tercio superior de la trompa de Falopio</b>.</p>`,
    },
    {
      html: `<h3>El embarazo</h3><p>Mientras baja por la trompa, el cigoto se divide una y otra vez. Hacia el sexto o séptimo día llega al útero y se <b>implanta</b> en el endometrio: empieza el embarazo, que dura unas <mark>40 semanas</mark>. Hasta el tercer mes se llama <b>embrión</b>; en ese tiempo se forman todos los órganos y es la etapa más delicada. Después se llama <b>feto</b> y, sobre todo, crece. Se alimenta a través de la <mark>placenta</mark>, un órgano que une su sangre con la de la madre sin que se mezclen; el cordón umbilical lo conecta a ella. El líquido amniótico lo protege de golpes.</p>`,
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
      html: `<h3>El parto y la lactancia</h3><p>Al final del embarazo, unas hormonas provocan las <b>contracciones</b> del músculo del útero. El parto tiene tres fases. En la <b>dilatación</b>, el cuello del útero se abre hasta unos 10 cm y suele romperse la bolsa del líquido amniótico. En la <b>expulsión</b>, las contracciones empujan al bebé, normalmente de cabeza, por la vagina. En el <b>alumbramiento</b>, sale la placenta. Si hay complicaciones, se hace una <b>cesárea</b>, una operación por el abdomen. Después, las glándulas mamarias producen leche. La <mark>lactancia materna</mark> aporta al bebé nutrientes y anticuerpos que lo protegen de infecciones.</p>`,
    },
    {
      html: `<h3>Métodos anticonceptivos</h3><p>Los <b>métodos anticonceptivos</b> sirven para evitar un embarazo no deseado. Ninguno es eficaz al 100 %, y solo el <mark>preservativo</mark> protege además de las infecciones de transmisión sexual. Para elegir uno conviene consultar a un profesional sanitario; en España los centros de salud ofrecen atención joven y confidencial.</p>${tabla(["Tipo", "Ejemplos", "Cómo actúa"], [["Barrera", "preservativo masculino y femenino", "impide que el semen llegue al útero"], ["Hormonales", "píldora, anillo, parche, implante", "impiden la ovulación"], ["Dispositivo intrauterino", "DIU", "dificulta la fecundación y la implantación"], ["Quirúrgicos", "vasectomía, ligadura de trompas", "cortan los conductos; casi irreversibles"]])}<p>Los «métodos naturales», como la marcha atrás o contar los días, fallan mucho.</p>`,
    },
    {
      html: `<h3>La salud sexual</h3><p>Las <b>infecciones de transmisión sexual</b> (ITS) se contagian en las relaciones sexuales. Algunas las causan bacterias, como la clamidia, la gonorrea o la sífilis, y se curan con antibióticos. Otras las causan virus, como el <b>VIH</b> (que provoca el sida), el virus del papiloma humano o el herpes, y no tienen cura, aunque sí tratamiento. Muchas no dan síntomas al principio. Se previenen usando <mark>preservativo</mark> en todas las relaciones, y la del papiloma, también con una <b>vacuna</b>. Ante cualquier duda, hay que consultar sin vergüenza. Higiene, información fiable y respeto forman parte de la salud.</p>`,
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
  ],
  errores: [
    "Pensar que la fecundación ocurre en el útero: ocurre en la trompa de Falopio.",
    "Creer que la menstruación es la ovulación: son momentos distintos del ciclo.",
    "Decir que la píldora protege de las ITS: solo el preservativo protege.",
    "Confundir uretra (salida de orina y semen en el hombre) con uréter.",
    "Pensar que todos los ciclos duran exactamente 28 días: varían entre personas y meses.",
  ],
  ejercicios: [
    { q: "Nombra las gónadas masculinas y femeninas y lo que producen.", sol: "Testículos: espermatozoides y testosterona. Ovarios: óvulos, estrógenos y progesterona." },
    { q: "¿Por qué los testículos están fuera del abdomen?", sol: "Porque los espermatozoides necesitan una temperatura algo más baja que la del interior del cuerpo para formarse bien." },
    { q: "Compara el óvulo y el espermatozoide en tamaño, movilidad y número.", sol: "El óvulo es grande, inmóvil y madura normalmente uno al mes. El espermatozoide es pequeño, nada con su cola y se producen millones." },
    { q: "Ordena el recorrido de los espermatozoides desde que se forman hasta que salen.", sol: "Testículo → epidídimo → conducto deferente → (vesícula seminal y próstata añaden líquidos) → uretra → exterior." },
    { q: "Describe las fases del ciclo menstrual.", sol: "Menstruación (días 1-5): se desprende el endometrio. Fase de maduración del óvulo y engrosamiento del endometrio. Ovulación (hacia el día 14). Si no hay fecundación, el endometrio se desprende otra vez." },
    { q: "¿Dónde ocurre la fecundación y qué se forma?", sol: "En el tercio superior de la trompa de Falopio. Se forma el cigoto." },
    { q: "Diferencia embrión y feto.", sol: "Embrión: hasta el tercer mes, cuando se forman los órganos. Feto: desde el tercer mes hasta el parto, cuando sobre todo crece." },
    { q: "¿Qué funciones tiene la placenta?", sol: "Pasar nutrientes y oxígeno de la madre al feto, recoger sus desechos y producir hormonas del embarazo." },
    { q: "Cita las tres fases del parto.", sol: "Dilatación, expulsión y alumbramiento (salida de la placenta)." },
    { q: "¿Qué método anticonceptivo previene a la vez el embarazo y las ITS?", sol: "El preservativo (masculino o femenino)." },
  ],
  quiz: [
    { q: "Los gametos humanos tienen…", o: ["46 cromosomas", "23 cromosomas", "92 cromosomas"], a: 1, e: "La mitad: 23." },
    { q: "Los espermatozoides se forman en…", o: ["la próstata", "los testículos", "la vejiga"], a: 1, e: "En los testículos." },
    { q: "La fecundación ocurre normalmente en…", o: ["el útero", "la trompa de Falopio", "la vagina"], a: 1, e: "En la trompa." },
    { q: "La ovulación en un ciclo de 28 días ocurre hacia el día…", o: ["1", "14", "28"], a: 1, e: "Hacia el día 14." },
    { q: "La capa del útero que se desprende en la regla es…", o: ["el endometrio", "la placenta", "el ovario"], a: 0, e: "El endometrio." },
    { q: "La célula que resulta de la fecundación es…", o: ["el cigoto", "el gameto", "el feto"], a: 0, e: "El cigoto." },
    { q: "El embarazo dura unas…", o: ["20 semanas", "40 semanas", "60 semanas"], a: 1, e: "Unas 40 semanas." },
    { q: "El intercambio entre madre y feto se hace en…", o: ["la placenta", "el ovario", "la trompa"], a: 0, e: "En la placenta." },
    { q: "Protege de las ITS…", o: ["la píldora", "el preservativo", "el DIU"], a: 1, e: "El preservativo." },
    { q: "El VIH es…", o: ["una bacteria", "un virus", "un hongo"], a: 1, e: "Un virus." },
  ],
  examen: [
    { q: "La próstata…", o: ["produce espermatozoides", "añade líquido al semen", "produce testosterona"], a: 1, e: "Aporta parte del líquido seminal." },
    { q: "El embrión pasa a llamarse feto…", o: ["al implantarse", "a partir del tercer mes", "al nacer"], a: 1, e: "Desde el tercer mes." },
    { q: "Los anticonceptivos hormonales actúan…", o: ["impidiendo la ovulación", "matando bacterias", "como barrera"], a: 0, e: "Impiden la ovulación." },
  ],
  feynman: ["Qué hace cada órgano de los aparatos reproductores", "Qué ocurre en el ciclo menstrual y cuándo es la ovulación", "Cómo se forma un nuevo ser desde la fecundación hasta el parto"],
  mapa: mapa("REPRODUCCIÓN HUMANA", "var(--eso)", [
    ["Aparatos", "testículos · ovarios · útero", "var(--red)"],
    ["Gametos", "espermatozoide · óvulo · 23 cromosomas", "var(--pen)"],
    ["Ciclo menstrual", "regla · ovulación día 14", "#a05ad0"],
    ["Embarazo", "fecundación · placenta · parto", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Gametos", "Células reproductoras con 23 cromosomas: espermatozoide y óvulo."],
    ["Testículos", "Gónadas masculinas: espermatozoides y testosterona."],
    ["Ovarios", "Gónadas femeninas: óvulos, estrógenos y progesterona."],
    ["Ovulación", "Salida de un óvulo del ovario, hacia el día 14 del ciclo."],
    ["Menstruación", "Desprendimiento del endometrio cuando no hay embarazo."],
    ["Cigoto", "Célula que resulta de la fecundación, con 46 cromosomas."],
    ["Placenta", "Órgano de intercambio entre la madre y el feto."],
    ["Preservativo", "Único método que previene embarazo e ITS."],
  ],
  familias: ["Abrid un espacio de conversación tranquilo sobre la pubertad, los afectos y el consentimiento.", "Buscad juntos el servicio de atención joven del centro de salud más cercano.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Salud y sexualidad: anatomía y fisiología de los aparatos reproductores, ciclo menstrual, fecundación, embarazo y parto, métodos anticonceptivos, ITS y educación afectivo-sexual basada en el respeto y el consentimiento (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Buzón anónimo de preguntas para trabajar dudas reales con rigor.", "Línea del tiempo del desarrollo embrionario con tamaños a escala (semilla, fruta).", "Colaboración con el programa de salud escolar del centro de salud."],
  },
  fuentes: [RD, wiki("Aparato reproductor", "Aparato_reproductor"), wiki("Ciclo menstrual", "Ciclo_menstrual")],
  revisado: "2026-11-12",
};
