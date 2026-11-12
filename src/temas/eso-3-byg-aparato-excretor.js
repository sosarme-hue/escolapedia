// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Riñón visto de frente (forma de alubia) con corteza, médula y pelvis.
const rinon = (x, y, s = 1, flip = false) => `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})">
  <path d="M0 -40 Q 34 -42 34 0 Q 34 42 0 40 Q -10 38 -10 22 Q -2 12 -2 0 Q -2 -12 -10 -22 Q -10 -38 0 -40 Z" fill="#a0442b" fill-opacity=".85" stroke="var(--ink)" stroke-width="2"/>
  <path d="M4 -30 Q 24 -30 24 0 Q 24 30 4 30 Q 4 18 8 0 Q 4 -18 4 -30 Z" fill="#d8885a"/>
  <path d="M-4 -10 Q 6 0 -4 10 Z" fill="var(--sun)"/>
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato excretor",
  minutos: 45,
  objetivos: ["Explicar qué es la excreción y qué órganos participan en ella", "Describir el aparato urinario y la estructura del riñón", "Explicar cómo se forma la orina en la nefrona", "Conocer las enfermedades más frecuentes, la diálisis y los hábitos saludables"],
  claves: ["excreción", "urea", "riñón", "nefrona", "filtración", "reabsorción", "orina", "sudor"],
  pregunta: {
    texto: "Tus riñones filtran unos 180 litros de sangre al día, pero solo orinas litro y medio. ¿Dónde está el resto?",
    respuesta: "Vuelve a la sangre. El riñón primero <b>filtra</b> casi todo el plasma y después <mark>recupera</mark> el agua, la glucosa y las sales útiles. Solo deja salir lo que sobra y los desechos, como la <b>urea</b>. Es un filtro muy selectivo, no un colador.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la excreción?</h3><p>Las células, al trabajar, fabrican sustancias de desecho que serían tóxicas si se acumularan. La <b>excreción</b> es la función que las <mark>elimina de la sangre</mark> y las expulsa al exterior. No hay que confundirla con la defecación: las heces son restos de alimento que nunca entraron en las células. Varios órganos colaboran en la excreción:</p>${tabla(["Órgano", "Qué elimina"], [["Pulmones", "dióxido de carbono y vapor de agua"], ["Riñones", "urea, sales y agua sobrante (orina)"], ["Glándulas sudoríparas", "agua, sales y algo de urea (sudor)"], ["Hígado", "transforma tóxicos y los vierte en la bilis; fabrica urea"]])}`,
    },
    {
      html: `<h3>El aparato urinario</h3><p>Es el principal aparato excretor. Lo forman dos <mark>riñones</mark>, con forma de alubia y del tamaño de un puño, situados a ambos lados de la columna, a la altura de la cintura. Cada riñón recibe sangre por la <b>arteria renal</b> y la devuelve limpia por la <b>vena renal</b>. La orina que fabrica baja por un tubo, el <mark>uréter</mark>, hasta la <mark>vejiga urinaria</mark>, una bolsa muscular que la almacena. Desde allí sale al exterior por la <mark>uretra</mark>, que en los hombres es más larga y también comparte el conducto con el aparato reproductor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Aparato urinario: dos riñones, dos uréteres, la vejiga y la uretra, con la aorta y la vena cava">${BG}
        <path d="M122 10 V 170" stroke="var(--red)" stroke-width="7"/><path d="M138 10 V 170" stroke="var(--pen)" stroke-width="7"/>
        <path d="M122 60 H 88 M138 60 H 172" stroke="var(--red)" stroke-width="3"/><path d="M122 70 H 90 M138 70 H 170" stroke="var(--pen)" stroke-width="3"/>
        ${rinon(72, 64, 1, true)}${rinon(188, 64, 1)}
        <path d="M84 80 Q 100 110 118 136 M176 80 Q 160 110 142 136" stroke="var(--sun)" stroke-width="4" fill="none"/>
        <path d="M112 130 Q 130 118 148 130 Q 156 152 130 158 Q 104 152 112 130 Z" fill="var(--sun)" fill-opacity=".5" stroke="#b8860b" stroke-width="2"/><path d="M130 158 V 176" stroke="var(--sun)" stroke-width="4"/>
        ${t(24, 24, "riñón", { size: 11, anchor: "start" })}${t(34, 120, "uréter", { size: 11, anchor: "start", color: "#b8860b" })}${t(176, 156, "vejiga", { size: 11, anchor: "start", color: "#b8860b" })}${t(86, 174, "uretra", { size: 10, anchor: "start", color: "#b8860b" })}
        ${t(250, 124, "arteria y vena", { size: 9, anchor: "end", color: "var(--muted)" })}</svg>`,
      video: { id: "oxJ6DsTwA5E", titulo: "SISTEMA EXCRETOR: el aparato urinario y las glándulas sudoríparas", canal: "Smile and Learn - Español", vistas: 1457808 },
    },
    {
      html: `<h3>El riñón por dentro</h3><p>Si cortamos un riñón a lo largo, vemos tres zonas. La <b>corteza renal</b> es la capa externa, de color rojizo, donde se filtra la sangre. La <b>médula renal</b>, más interna, está formada por unas estructuras con forma de cono, las pirámides renales, llenas de tubitos que recogen la orina. En el centro está la <b>pelvis renal</b>, una cavidad con forma de embudo donde se reúne la orina antes de salir por el uréter. En todo el riñón hay alrededor de <mark>un millón de nefronas</mark>, las unidades que fabrican la orina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de riñón con la corteza, la médula, la pelvis renal y el uréter">${BG}
        ${rinon(110, 90, 1.9)}<path d="M92 90 Q 70 110 76 172" stroke="var(--sun)" stroke-width="6" fill="none"/>
        ${t(244, 36, "corteza", { size: 11, anchor: "end", color: "#a0442b" })}<path d="M196 34 L 168 50" stroke="var(--muted)" stroke-width="1"/>
        ${t(244, 96, "médula", { size: 11, anchor: "end", color: "#c0652a" })}<path d="M200 93 H 150" stroke="var(--muted)" stroke-width="1"/>
        ${t(24, 60, "pelvis", { size: 11, anchor: "start", color: "#b8860b" })}<path d="M50 64 L 100 86" stroke="var(--muted)" stroke-width="1"/>
        ${t(24, 150, "uréter", { size: 11, anchor: "start", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>La nefrona</h3><p>La <b>nefrona</b> es microscópica, pero tiene varias partes. Empieza en la <mark>cápsula de Bowman</mark>, una copa que envuelve un ovillo de capilares llamado <b>glomérulo</b>. De la cápsula sale un largo <b>túbulo renal</b> que hace una curva en forma de U, el <b>asa de Henle</b>, y desemboca en un <b>tubo colector</b> compartido con otras nefronas. Alrededor del túbulo hay más capilares, que permiten devolver a la sangre lo que todavía sirve. Si pusiéramos en fila todos los túbulos de un riñón medirían más de 50 kilómetros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nefrona: glomérulo dentro de la cápsula de Bowman, túbulo, asa de Henle y tubo colector">${BG}
        <circle cx="54" cy="46" r="24" fill="none" stroke="var(--sun)" stroke-width="4"/><path d="M40 46 q 6 -12 12 0 t 12 0 M42 54 q 6 -10 12 0 t 10 0" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M14 34 H 36 M14 58 H 36" stroke="var(--red)" stroke-width="3"/>
        <path d="M76 52 Q 100 52 100 74 Q 100 90 118 90 Q 134 90 134 104 V 156 Q 134 166 146 166 Q 158 166 158 156 V 90 Q 158 74 178 74 H 210" stroke="var(--sun)" stroke-width="5" fill="none"/>
        <path d="M216 20 V 170" stroke="#b8860b" stroke-width="7"/>
        ${t(54, 92, "glomérulo y", { size: 10, color: "var(--red)" })}${t(54, 104, "cápsula de Bowman", { size: 10, color: "#b8860b" })}
        ${t(146, 32, "túbulo", { size: 11, color: "#b8860b" })}${t(104, 140, "asa de", { size: 10, anchor: "end" })}${t(104, 152, "Henle", { size: 10, anchor: "end" })}
        ${t(206, 136, "tubo", { size: 10, anchor: "end" })}${t(206, 148, "colector", { size: 10, anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Cómo se forma la orina</h3><p>La orina se forma en tres pasos. <b>1. Filtración</b>: en el glomérulo, la presión de la sangre empuja el agua y las moléculas pequeñas (glucosa, sales, urea) hacia la cápsula de Bowman. Las células y las proteínas, demasiado grandes, se quedan en la sangre. <b>2. Reabsorción</b>: a lo largo del túbulo, el agua, la glucosa y muchas sales <mark>vuelven a la sangre</mark>. <b>3. Secreción</b>: el túbulo añade al líquido algunas sustancias que sobran, como restos de medicamentos. Lo que llega al tubo colector ya es orina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres pasos: filtración en el glomérulo, reabsorción en el túbulo hacia la sangre y secreción desde la sangre al túbulo">${BG}
        ${caja(14, 20, 72, 40, "1 filtración", "var(--red)", { size: 11 })}${caja(94, 20, 72, 40, "2 reabsorción", "var(--leaf)", { size: 10.5 })}${caja(174, 20, 72, 40, "3 secreción", "var(--pen)", { size: 11 })}
        <path d="M20 120 H 240" stroke="var(--sun)" stroke-width="12" stroke-opacity=".5"/><path d="M20 160 H 240" stroke="var(--red)" stroke-width="8" stroke-opacity=".5"/>
        ${fl(50, 160, 50, 128, "var(--red)")}${fl(130, 126, 130, 154, "var(--leaf)")}${fl(210, 154, 210, 126, "var(--pen)")}
        ${t(130, 104, "túbulo", { size: 10, color: "#b8860b" })}${t(130, 176, "sangre (capilares)", { size: 10, color: "var(--red)" })}
        ${t(50, 80, "sangre → túbulo", { size: 9, weight: 400 })}${t(130, 80, "túbulo → sangre", { size: 9, weight: 400 })}${t(210, 80, "sangre → túbulo", { size: 9, weight: 400 })}</svg>`,
      video: { id: "dfKQ7A-9yZ0", titulo: "Video 3D: filtrado glomerular y formación de la orina", canal: "Rolando Palacios", vistas: 358820 },
    },
    {
      html: `<h3>La orina y el equilibrio del agua</h3><p>La orina es un <b>95 % agua</b>. El resto son sobre todo <mark>urea</mark>, un desecho que fabrica el hígado al descomponer las proteínas, y sales como el cloruro de sodio. En una persona sana no hay glucosa, proteínas ni sangre: si aparecen en un análisis, indican un problema. Los riñones también regulan cuánta agua tenemos. Si bebemos poco o sudamos mucho, el cerebro libera la <b>hormona antidiurética</b>, que hace que el riñón reabsorba más agua: la orina sale escasa y oscura. Si bebemos mucho, sale abundante y clara.</p>`,
    },
    {
      html: `<h3>La micción</h3><p>La vejiga puede almacenar entre 300 y 500 mililitros de orina. Cuando se va llenando, sus paredes se estiran y unos receptores envían una señal a la médula espinal y al cerebro: sentimos <mark>ganas de orinar</mark>. La salida está cerrada por dos <b>esfínteres</b>, unos anillos de músculo. El interno se abre de forma automática, pero el externo lo controlamos a voluntad. Los bebés todavía no saben controlarlo; aprenden hacia los dos o tres años. Orinar se llama <b>micción</b>, y un adulto lo hace entre cuatro y siete veces al día.</p>`,
    },
    {
      html: `<h3>Las glándulas sudoríparas</h3><p>En la piel tenemos entre dos y cuatro millones de <b>glándulas sudoríparas</b>. Son tubos enrollados en la dermis que fabrican <mark>sudor</mark> a partir de la sangre y lo vierten a la superficie por los poros. El sudor tiene agua, sales y un poco de urea, así que también es excreción. Pero su función principal es <b>refrigerar</b>: al evaporarse, el sudor se lleva calor del cuerpo. Por eso sudamos al hacer deporte o cuando hace calor, y necesitamos beber para reponer el agua y las sales que perdemos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de la piel con una glándula sudorípara enrollada en la dermis y un poro en la superficie por donde sale el sudor">${BG}
        <rect x="14" y="40" width="232" height="26" fill="#f4c7a1"/><rect x="14" y="66" width="232" height="84" fill="#f0a98a" fill-opacity=".5"/>
        <path d="M130 40 V 120" stroke="var(--water)" stroke-width="4"/><path d="M130 120 q -16 4 -10 14 q 10 10 20 0 q 6 -12 -10 -14" stroke="var(--water)" stroke-width="4" fill="var(--water)" fill-opacity=".3"/>
        ${[[124, 30], [136, 22], [130, 12]].map(([x, y]) => `<path d="M${x} ${y} q 4 6 0 9 q -4 -3 0 -9 Z" fill="var(--water)"/>`).join("")}
        ${t(240, 58, "epidermis", { size: 10, anchor: "end" })}${t(240, 100, "dermis", { size: 10, anchor: "end" })}
        ${t(30, 140, "glándula", { size: 10, anchor: "start", color: "var(--inf)" })}<path d="M82 136 L 114 130" stroke="var(--muted)" stroke-width="1"/>
        ${t(30, 26, "sudor", { size: 11, anchor: "start", color: "var(--inf)" })}${t(130, 170, "al evaporarse, enfría", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Cuando los riñones fallan</h3><p>La <b>insuficiencia renal</b> ocurre cuando los riñones dejan de filtrar bien; sus causas más frecuentes son la diabetes y la hipertensión mal controladas. Los desechos se acumulan en la sangre y pueden poner en peligro la vida. La solución es la <mark>diálisis</mark>: una máquina hace pasar la sangre por un filtro artificial que la limpia, en sesiones de unas cuatro horas, tres veces por semana. Es un tratamiento que salva vidas pero obliga a una vida muy pendiente de la máquina. La alternativa definitiva es el <b>trasplante de riñón</b>, el más frecuente en España. Podemos vivir con uno solo, por eso hay donantes vivos.</p>`,
    },
    {
      html: `<h3>Cuidar el aparato excretor</h3><p>Las <b>infecciones de orina</b> (cistitis) son frecuentes, sobre todo en las mujeres, porque su uretra es más corta y las bacterias suben con facilidad; producen escozor y ganas continuas de orinar. Los <b>cálculos renales</b> o piedras son cristales de sales que se forman en el riñón y causan un dolor muy intenso, el cólico nefrítico. Para prevenirlos conviene <mark>beber suficiente agua</mark>, unos 1,5 a 2 litros al día, no aguantar las ganas de orinar demasiado tiempo, tomar poca sal y mantener una buena higiene. El control de la tensión y del azúcar protege los riñones a largo plazo.</p>`,
    },
  ],
  figura: {
    titulo: "Quién excreta qué",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Cuatro órganos excretores: pulmones eliminan CO2, riñones orina, piel sudor e hígado transforma tóxicos y fabrica urea">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${[["Pulmones", "CO₂ y vapor de agua", "var(--inf)"], ["Riñones", "orina: agua, urea, sales", "#b8860b"], ["Piel", "sudor: agua, sales, urea", "var(--water)"], ["Hígado", "fabrica urea: y transforma tóxicos", "#a0442b"]].map(([n, d, c], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="40" width="140" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 70, 110, n, { size: 20, color: c, font: D })}${t(x + 70, 140, d.split(": ")[0] + (d.includes(": ") ? ":" : ""), { size: 12, weight: 400 })}${d.includes(": ") ? t(x + 70, 158, d.split(": ")[1], { size: 12, weight: 400 }) : ""}`; }).join("")}
      ${t(320, 224, "la excreción elimina desechos de la sangre; las heces no son excreción", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "IjevalGe0Z4", titulo: "Cómo funcionan los riñones", canal: "DW Pía Castro", vistas: 885569, megusta: 0, busqueda: "aparato excretor riñones" },
  ejemplos: [
    { enunciado: "Los riñones filtran 180 L de plasma al día y se producen 1,5 L de orina. ¿Qué porcentaje del filtrado se reabsorbe?",
      pasos: ["Se reabsorbe: 180 − 1,5 = 178,5 L.", "Porcentaje: 178,5 / 180 · 100 ≈ 99,2 %."],
      resultado: "se reabsorbe más del 99 % del filtrado." },
    { enunciado: "Un análisis de orina muestra glucosa. ¿Qué paso de la formación de la orina falla y qué enfermedad puede ser?",
      pasos: ["La glucosa se filtra en el glomérulo, pero normalmente se reabsorbe toda en el túbulo.", "Si hay demasiada glucosa en la sangre, el túbulo no puede reabsorberla toda y pasa a la orina.", "Eso ocurre en la diabetes."],
      resultado: "la reabsorción se ve superada; es un signo típico de diabetes." },
    { enunciado: "Tras un partido de fútbol en verano, tu orina sale muy oscura y escasa. Explica por qué.",
      pasos: ["Has perdido mucha agua con el sudor.", "El cerebro libera más hormona antidiurética.", "Los riñones reabsorben más agua, y la poca orina que sale está muy concentrada."],
      resultado: "el cuerpo ahorra agua; hay que beber para reponerla." },
  ],
  errores: [
    "Confundir excreción y defecación: las heces no son excreción porque sus restos no han pasado por las células.",
    "Pensar que la orina se fabrica en la vejiga: la vejiga solo la almacena.",
    "Confundir uréter y uretra: el uréter une riñón y vejiga; la uretra lleva la orina al exterior.",
    "Creer que la urea la fabrica el riñón: la fabrica el hígado y el riñón la elimina.",
    "Decir que sudar sirve sobre todo para eliminar desechos: su función principal es refrigerar.",
  ],
  ejercicios: [
    { q: "Define excreción y nombra los cuatro órganos que participan en ella.", sol: "Es la eliminación de los desechos de la sangre producidos por las células. Participan los pulmones, los riñones, las glándulas sudoríparas y el hígado." },
    { q: "Ordena el recorrido de la orina desde que se forma hasta que sale.", sol: "Nefrona → tubo colector → pelvis renal → uréter → vejiga → uretra → exterior." },
    { q: "Dibuja una nefrona y señala el glomérulo, la cápsula de Bowman, el túbulo y el asa de Henle.", sol: "Ver el dibujo del bloque de la nefrona: ovillo de capilares dentro de una copa, del que sale un tubo largo con una curva en U que llega al tubo colector." },
    { q: "¿Por qué en la orina normal no hay proteínas ni glóbulos rojos?", sol: "Porque son demasiado grandes para atravesar el filtro del glomérulo y se quedan en la sangre." },
    { q: "Explica la diferencia entre filtración y reabsorción.", sol: "En la filtración pasan sustancias de la sangre al interior de la nefrona. En la reabsorción, las sustancias útiles vuelven del túbulo a la sangre." },
    { q: "¿Qué es la urea y de dónde procede?", sol: "Es un desecho nitrogenado que fabrica el hígado al descomponer los aminoácidos de las proteínas. Se elimina con la orina." },
    { q: "¿Qué hace la hormona antidiurética?", sol: "Aumenta la reabsorción de agua en el riñón, de modo que se produce menos orina y más concentrada." },
    { q: "¿Por qué el sudor nos refresca?", sol: "Porque para evaporarse necesita calor, y lo toma de la piel; así baja la temperatura del cuerpo." },
    { q: "¿En qué consiste la diálisis?", sol: "Una máquina saca la sangre, la pasa por un filtro artificial que elimina los desechos y el agua sobrante, y la devuelve al cuerpo." },
    { q: "Escribe tres hábitos para prevenir las infecciones de orina y los cálculos.", sol: "Beber 1,5-2 L de agua al día, no aguantar mucho las ganas de orinar y tomar poca sal; además, buena higiene." },
  ],
  quiz: [
    { q: "La unidad que fabrica la orina es…", o: ["la nefrona", "la neurona", "la vejiga"], a: 0, e: "La nefrona." },
    { q: "La urea la fabrica…", o: ["el riñón", "el hígado", "la vejiga"], a: 1, e: "El hígado." },
    { q: "El uréter une…", o: ["riñón y vejiga", "vejiga y exterior", "corazón y riñón"], a: 0, e: "El riñón con la vejiga." },
    { q: "La filtración ocurre en…", o: ["el glomérulo", "la uretra", "la vejiga"], a: 0, e: "En el glomérulo." },
    { q: "La orina es sobre todo…", o: ["urea", "agua", "sal"], a: 1, e: "Un 95 % es agua." },
    { q: "Los pulmones excretan…", o: ["urea", "CO₂", "glucosa"], a: 1, e: "Dióxido de carbono." },
    { q: "La función principal del sudor es…", o: ["refrigerar", "digerir", "proteger del sol"], a: 0, e: "Enfriar el cuerpo." },
    { q: "La glucosa en la orina puede indicar…", o: ["diabetes", "una fractura", "miopía"], a: 0, e: "Diabetes." },
    { q: "La máquina que sustituye al riñón hace…", o: ["una ecografía", "la diálisis", "una radiografía"], a: 1, e: "La diálisis." },
    { q: "La vejiga…", o: ["fabrica la orina", "almacena la orina", "filtra la sangre"], a: 1, e: "Solo la almacena." },
  ],
  examen: [
    { q: "¿Qué NO debería aparecer en la orina de una persona sana?", o: ["Urea", "Agua", "Proteínas"], a: 2, e: "No atraviesan el glomérulo." },
    { q: "En la reabsorción, las sustancias pasan…", o: ["de la sangre al túbulo", "del túbulo a la sangre", "de la vejiga al riñón"], a: 1, e: "Vuelven a la sangre." },
    { q: "Las heces…", o: ["son excreción", "no son excreción", "salen por la uretra"], a: 1, e: "Son restos que no pasaron por las células." },
  ],
  feynman: ["Qué es la excreción y en qué se diferencia de expulsar las heces", "Cómo es el riñón y qué partes tiene la nefrona", "Los tres pasos de la formación de la orina"],
  mapa: mapa("EXCRECIÓN", "var(--eso)", [
    ["Órganos", "pulmones · riñones · piel · hígado", "var(--inf)"],
    ["Aparato urinario", "riñón · uréter · vejiga · uretra", "#b8860b"],
    ["Nefrona", "glomérulo · cápsula · túbulo", "#a0442b"],
    ["Orina", "filtración · reabsorción · secreción", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Excreción", "Eliminación de los desechos de la sangre producidos por las células."],
    ["Urea", "Desecho nitrogenado que fabrica el hígado y se elimina con la orina."],
    ["Nefrona", "Unidad del riñón que fabrica la orina; hay un millón en cada riñón."],
    ["Glomérulo", "Ovillo de capilares donde se filtra la sangre."],
    ["Reabsorción", "Vuelta a la sangre del agua, la glucosa y las sales útiles."],
    ["Uréter y uretra", "Uréter: riñón → vejiga. Uretra: vejiga → exterior."],
    ["Hormona antidiurética", "Hace que el riñón reabsorba más agua."],
    ["Diálisis", "Filtrado artificial de la sangre cuando los riñones fallan."],
  ],
  familias: ["Observad el color de la orina un día que bebáis poco y otro que bebáis mucho, y relacionadlo con la hormona antidiurética.", "Calculad cuánta agua bebe cada uno al día y comparadla con lo recomendado.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: la excreción, anatomía y fisiología del aparato urinario, la nefrona y la formación de la orina, y hábitos de salud (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Disección de riñón de cordero para identificar corteza, médula y pelvis.", "Simulación de filtración con papel de filtro, agua con sal, almidón y colorante.", "Lectura guiada de un análisis de orina real anonimizado."],
  },
  fuentes: [RD, wiki("Aparato urinario", "Aparato_urinario"), wiki("Nefrona", "Nefrona")],
  revisado: "2026-11-12",
};
