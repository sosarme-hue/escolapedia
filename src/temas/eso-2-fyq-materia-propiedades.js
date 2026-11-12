// Física y Química 2º ESO: la materia y sus propiedades. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "La materia y sus propiedades",
  minutos: 50,
  objetivos: ["Definir materia y distinguir propiedades generales y específicas", "Medir la masa con la balanza y el volumen de sólidos regulares e irregulares", "Calcular la densidad y usarla para identificar sustancias y explicar la flotación", "Reconocer otras propiedades específicas: puntos de fusión y ebullición, dureza, conductividad y solubilidad"],
  claves: ["materia", "masa", "volumen", "densidad", "propiedad general", "propiedad específica", "flotación", "punto de fusión"],
  pregunta: {
    texto: "Un kilo de hierro y un kilo de paja, ¿cuál pesa más? ¿Y por qué el barco de hierro flota y un clavo de hierro se hunde?",
    respuesta: "Los dos pesan lo mismo: un kilo es un kilo. Lo que cambia es el <b>volumen</b>: la paja ocupa muchísimo más. La clave es la <mark>densidad</mark>, la masa que hay en cada unidad de volumen. Un clavo es más denso que el agua y se hunde. Un barco tiene mucho aire dentro, así que su densidad media es <b>menor que la del agua</b> y flota.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la materia?</h3><p><mark>Materia</mark> es todo lo que tiene <b>masa</b> y ocupa un lugar en el espacio, es decir, tiene <b>volumen</b>. Son materia el agua, el aire, una piedra, tu cuerpo y las estrellas. No son materia la luz, el sonido, el calor o los sentimientos: no tienen masa. Cada tipo concreto de materia se llama <b>sustancia</b>: el agua, el hierro, la sal o el oxígeno. Con una misma sustancia se pueden hacer muchos <b>objetos</b> o cuerpos: con madera se fabrican mesas, lápices y barcos. Para estudiar la materia, los científicos se fijan en sus <mark>propiedades</mark>, es decir, en las características que podemos observar y medir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Es materia: una piedra, un vaso de agua y un globo con aire. No es materia: la luz de una bombilla y el sonido">${BG}
        ${t(70, 22, "Es materia", { size: 12, color: "var(--leaf)" })}${t(196, 22, "No es materia", { size: 12, color: "var(--red)" })}
        <line x1="134" y1="12" x2="134" y2="170" stroke="var(--line)" stroke-width="2"/>
        <path d="M18 70 q 10 -24 34 -18 q 20 4 14 22 q -6 14 -28 12 q -24 -2 -20 -16 Z" fill="#9aa0a6"/>
        <path d="M78 46 h 34 l -4 44 h -26 Z" fill="var(--pen)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.5"/>
        <ellipse cx="66" cy="124" rx="22" ry="26" fill="var(--red)" fill-opacity=".7"/><path d="M66 150 q -4 10 4 20" stroke="var(--ink)" fill="none"/>${t(108, 132, "aire", { size: 10, color: "var(--muted)" })}
        <circle cx="196" cy="62" r="16" fill="#ffe27a" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5].map((i) => { const a = i * Math.PI / 3; return `<line x1="${(196 + 22 * Math.cos(a)).toFixed(1)}" y1="${(62 + 22 * Math.sin(a)).toFixed(1)}" x2="${(196 + 30 * Math.cos(a)).toFixed(1)}" y2="${(62 + 30 * Math.sin(a)).toFixed(1)}" stroke="#e6a100" stroke-width="2"/>`; }).join("")}
        <path d="M168 128 h 12 l 14 -12 v 36 l -14 -12 h -12 Z" fill="var(--ink)"/>${[0, 1, 2].map((i) => `<path d="M${204 + i * 8} ${122 - i * 3} q 8 12 0 24" stroke="var(--muted)" stroke-width="2" fill="none"/>`).join("")}</svg>`,
    },
    {
      html: `<h3>Propiedades generales y específicas</h3><p>Las <mark>propiedades generales</mark> las tiene toda la materia y no sirven para distinguir una sustancia de otra. Las principales son la <b>masa</b>, el <b>volumen</b> y la temperatura. Un kilo de arena y un kilo de azúcar tienen la misma masa, pero no son la misma sustancia. Las <mark>propiedades específicas</mark> o características tienen un valor propio para cada sustancia y sirven para <b>identificarla</b>: la <b>densidad</b>, los <b>puntos de fusión y ebullición</b>, la dureza, la conductividad eléctrica y térmica, la solubilidad, el color, el olor o el sabor. Por ejemplo, si un líquido transparente hierve a 100 °C a nivel del mar y tiene una densidad de 1 g/cm³, casi seguro que es agua.</p>`,
    },
    {
      html: `<h3>La masa y cómo se mide</h3><p>La <mark>masa</mark> es la <b>cantidad de materia</b> que tiene un cuerpo. Su unidad en el SI es el <b>kilogramo (kg)</b>, aunque en el laboratorio se usa mucho el gramo (g). La masa de un cuerpo es la misma en la Tierra, en la Luna o en el espacio: lo que cambia es su <b>peso</b>, que es la fuerza con que lo atrae la gravedad. Por eso no es correcto decir «peso 50 kilos»: tu masa es de 50 kg. La masa se mide con la <b>balanza</b>. Las balanzas de dos platos comparan el objeto con pesas de masa conocida; las balanzas electrónicas dan la lectura directamente. Antes de pesar hay que poner la balanza a cero (tarar), y si pesamos un líquido, restar la masa del recipiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza de dos platos en equilibrio: una manzana en un plato y pesas de 100 y 50 gramos en el otro; la masa de la manzana es 150 gramos">${BG}
        <path d="M130 150 v -100" stroke="var(--ink)" stroke-width="4"/><path d="M100 160 h 60 l -8 -10 h -44 Z" fill="var(--muted)"/>
        <line x1="50" y1="50" x2="210" y2="50" stroke="var(--ink)" stroke-width="4"/><path d="M124 50 l 6 -10 l 6 10 Z" fill="var(--red)"/>
        ${[50, 210].map((x) => `<path d="M${x} 50 l -26 50 M${x} 50 l 26 50" stroke="var(--muted)" stroke-width="1.5"/><path d="M${x - 34} 100 h 68 q -6 12 -34 12 q -28 0 -34 -12 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        <circle cx="50" cy="86" r="14" fill="var(--red)"/><path d="M50 72 q 2 -8 8 -10" stroke="var(--leaf)" stroke-width="3" fill="none"/>
        <rect x="190" y="78" width="20" height="22" fill="#b8860b"/><rect x="214" y="86" width="14" height="14" fill="#b8860b"/>${t(200, 72, "100 g", { size: 10 })}${t(230, 80, "50 g", { size: 10, anchor: "start" })}
        ${t(130, 30, "m = 150 g", { size: 13, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>El volumen y cómo se mide</h3><p>El <mark>volumen</mark> es el <b>espacio que ocupa</b> un cuerpo. Su unidad en el SI es el metro cúbico (m³), pero se usan mucho el litro (L), el decímetro cúbico (1 L = 1 dm³) y el centímetro cúbico (1 mL = 1 cm³). El volumen de un <b>líquido</b> se mide con recipientes graduados: la <b>probeta</b>, la pipeta o la bureta. El de un <b>sólido regular</b>, como un cubo o un prisma, se calcula midiendo sus lados y aplicando la fórmula geométrica: un cubo de 2 cm de lado tiene 2 · 2 · 2 = 8 cm³. Para un <b>sólido irregular</b>, como una piedra o una llave, se usa el <mark>método de inmersión</mark>: se echa agua en una probeta, se anota el nivel, se sumerge el objeto y se mide cuánto sube el agua. La diferencia es el volumen del objeto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Método de inmersión: una probeta con 50 mililitros de agua; al sumergir una piedra el nivel sube a 65 mililitros; el volumen de la piedra es 15 centímetros cúbicos">${BG}
        ${[[60, 90, "50 mL", false], [170, 66, "65 mL", true]].map(([x, y, s, p]) => `<rect x="${x - 20}" y="24" width="40" height="130" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 18}" y="${y}" width="36" height="${152 - y}" fill="var(--pen)" fill-opacity=".35"/>${p ? `<path d="M${x - 10} 140 l 6 -12 l 12 -2 l 6 10 l -6 10 Z" fill="#7a7f86"/>` : ""}<line x1="${x + 20}" y1="${y}" x2="${x + 30}" y2="${y}" stroke="var(--red)" stroke-width="2"/>${t(x + 32, y + 4, s, { size: 10, anchor: "start", color: "var(--red)" })}`).join("")}
        ${fl(100, 100, 136, 100, "var(--muted)", 2)}${t(130, 172, "V piedra = 65 − 50 = 15 cm³", { size: 11, color: "var(--leaf)" })}</svg>`,    },
    {
      html: `<h3>La densidad</h3><p>Un kilo de plomo es una bolita pequeña; un kilo de corcho, un bloque enorme. Los dos tienen la misma masa, pero distinta <mark>densidad</mark>. La densidad es la <b>masa que hay en cada unidad de volumen</b> y se calcula dividiendo la masa entre el volumen: <b>d = m / V</b>. En el SI se mide en kg/m³, aunque en el laboratorio se usa mucho g/cm³ (1 g/cm³ = 1000 kg/m³). La densidad es una <b>propiedad específica</b>: no depende de la cantidad. Un clavo y una viga de hierro tienen la misma densidad, 7,9 g/cm³. Cuanto más «apretadas» están las partículas de una sustancia, mayor es su densidad. Los gases tienen densidades muy pequeñas, porque sus partículas están muy separadas.</p>${tabla(["Sustancia", "Densidad (g/cm³)"], [["Aire", "0,0013"], ["Corcho", "0,25"], ["Aceite", "0,92"], ["Hielo", "0,92"], ["Agua", "1,00"], ["Aluminio", "2,7"], ["Hierro", "7,9"], ["Plomo", "11,3"], ["Oro", "19,3"]])}`,
      video: { id: "1yxYjQmTpVI", titulo: "Calcular densidad [Fácil y Rápido] | Física", canal: "A Cierta Ciencia", vistas: 928205 },
    },
    {
      html: `<h3>Flotar o hundirse</h3><p>La densidad explica por qué unas cosas flotan y otras se hunden. Un cuerpo <mark>flota</mark> en un líquido si su densidad es <b>menor</b> que la del líquido, y se <b>hunde</b> si es mayor. El corcho y la madera flotan en agua; el hierro y la piedra se hunden. El aceite flota sobre el agua y por eso los vertidos de petróleo forman manchas en la superficie del mar. El hielo flota porque, al congelarse, el agua se expande y queda menos densa: así los lagos se hielan por arriba y los peces sobreviven debajo. Un barco de acero flota porque su casco hueco encierra mucho aire, y su densidad media es menor que la del agua. Y un globo de helio sube porque el helio es menos denso que el aire.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Columna de densidades en un vaso: abajo miel, en medio agua y arriba aceite; un corcho flota arriba, una uva queda en medio y un tornillo cae al fondo">${BG}
        <path d="M70 20 h 120 l -10 150 h -100 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M78 130 h 105 l -3 38 h -98 Z" fill="#d9a12b" fill-opacity=".8"/><path d="M75 80 h 111 l -3 50 h -105 Z" fill="var(--pen)" fill-opacity=".35"/><path d="M73 44 h 115 l -2 36 h -111 Z" fill="#e6c84a" fill-opacity=".55"/>
        <rect x="112" y="34" width="24" height="16" rx="3" fill="#c49a6c"/><circle cx="150" cy="124" r="9" fill="#7b3fc4"/><path d="M104 152 h 20 M108 152 v 12 M112 152 v 12 M116 152 v 12" stroke="var(--ink)" stroke-width="3"/>
        ${t(196, 64, "aceite", { size: 10, anchor: "start" })}${t(196, 108, "agua", { size: 10, anchor: "start" })}${t(190, 152, "miel", { size: 10, anchor: "start" })}${t(32, 46, "corcho", { size: 10 })}${t(32, 126, "uva", { size: 10 })}${t(34, 160, "tornillo", { size: 10 })}
        ${fl(56, 46, 108, 44, "var(--muted)", 1.2)}${fl(46, 126, 138, 124, "var(--muted)", 1.2)}${fl(56, 160, 100, 158, "var(--muted)", 1.2)}</svg>`,
    },
    {
      html: `<h3>Puntos de fusión y de ebullición</h3><p>El <mark>punto de fusión</mark> es la temperatura a la que una sustancia pasa de sólido a líquido, y el <mark>punto de ebullición</mark>, la temperatura a la que hierve y pasa de líquido a gas en toda su masa. Son propiedades específicas: cada sustancia pura tiene los suyos, que no cambian aunque haya más o menos cantidad. El agua funde a 0 °C y hierve a 100 °C a nivel del mar; el hierro funde a 1538 °C; el oxígeno hierve a −183 °C. Conociendo estas temperaturas sabemos en qué estado está una sustancia a temperatura ambiente: si su punto de fusión es mayor de 20 °C, es sólida; si el de fusión es menor y el de ebullición mayor, es líquida; si los dos son menores, es un gas.</p>${tabla(["Sustancia", "Fusión (°C)", "Ebullición (°C)", "Estado a 20 °C"], [["Oxígeno", "−218", "−183", "gas"], ["Alcohol", "−114", "78", "líquido"], ["Agua", "0", "100", "líquido"], ["Hierro", "1538", "2862", "sólido"]])}`,
    },
    {
      html: `<h3>Otras propiedades específicas</h3><p>La <mark>dureza</mark> es la resistencia de un material a ser rayado. Se mide con la <b>escala de Mohs</b>, del 1 (talco, se raya con la uña) al 10 (diamante, que raya a todos). La <mark>conductividad eléctrica</mark> es la capacidad de dejar pasar la corriente: los metales son buenos conductores y el plástico o la madera son aislantes. La <mark>conductividad térmica</mark> indica si transmiten bien el calor: una cuchara de metal se calienta enseguida en la sopa y una de madera no. La <mark>solubilidad</mark> es la cantidad máxima de una sustancia que se puede disolver en una cantidad de agua a una temperatura: el azúcar es muy soluble, la arena es insoluble. Otras propiedades son la <b>elasticidad</b>, la <b>fragilidad</b>, la <b>tenacidad</b> y el <b>magnetismo</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de dureza de Mohs del 1 al 10: talco, yeso, calcita, fluorita, apatito, ortosa, cuarzo, topacio, corindón y diamante">${BG}
        ${t(130, 22, "Escala de Mohs (dureza)", { size: 12 })}
        ${["talco", "yeso", "calcita", "fluorita", "apatito", "ortosa", "cuarzo", "topacio", "corindón", "diamante"].map((s, i) => { const x = 18 + i * 23.5, h = 14 + i * 10; return `<rect x="${x}" y="${150 - h}" width="18" height="${h}" rx="3" fill="var(--pen)" fill-opacity="${(0.25 + i * 0.07).toFixed(2)}"/>${t(x + 9, 164, String(i + 1), { size: 10 })}`; }).join("")}
        ${t(27, 120, "talco", { size: 9, color: "var(--muted)" })}${t(229, 40, "diamante", { size: 9, color: "var(--muted)", anchor: "end" })}${t(130, 176, "cada mineral raya a los anteriores", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Identificar sustancias en el laboratorio</h3><p>Imagina que encuentras un anillo y quieres saber si es de oro. Puedes medir su <b>masa</b> con la balanza (por ejemplo, 9,65 g) y su <b>volumen</b> por inmersión en una probeta (0,5 cm³). Su densidad será 9,65 / 0,5 = 19,3 g/cm³, justo la del oro. Si saliera 10,5 g/cm³, sería plata. Así trabajan los científicos: miden <b>varias propiedades específicas</b> y las comparan con tablas de datos. Cuenta la leyenda que <b>Arquímedes</b> resolvió un problema parecido: el rey Hierón sospechaba que su corona no era de oro puro. Arquímedes, al meterse en la bañera y ver subir el agua, se dio cuenta de que podía medir el volumen de la corona y gritó «¡Eureka!».</p>`,
      video: { id: "hKrDXOqGvBA", titulo: "Calcular la densidad, masa y volumen con fórmula y factores de conversión", canal: "Susi Profe", vistas: 1713727 },
    },
  ],
  figura: {
    titulo: "Propiedades de la materia",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Las propiedades de la materia: generales, como masa y volumen, que no sirven para identificar; y específicas, como densidad, puntos de fusión y ebullición, dureza y conductividad, que sí sirven">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${caja(250, 14, 140, 40, "MATERIA", "var(--eso)", { size: 16, op: 1, color: "#fff" })}
      ${fl(290, 54, 170, 84)}${fl(350, 54, 470, 84)}
      <rect x="30" y="88" width="270" height="116" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(165, 116, "Generales", { size: 16, color: "var(--pen)", font: D })}${t(165, 146, "masa · volumen · temperatura", { size: 13, weight: 400 })}${t(165, 176, "no identifican la sustancia", { size: 12, color: "var(--muted)" })}
      <rect x="340" y="88" width="270" height="116" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>${t(475, 116, "Específicas", { size: 16, color: "var(--red)", font: D })}${t(475, 146, "densidad · fusión · ebullición", { size: 13, weight: 400 })}${t(475, 166, "dureza · conductividad", { size: 13, weight: 400 })}${t(475, 190, "identifican la sustancia", { size: 12, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "swcjamDFsn0", titulo: "La Materia y sus propiedades", canal: "Happy Learning Español", vistas: 7325078, megusta: 73511, busqueda: "propiedades de la materia masa volumen densidad" },
  ejemplos: [
    { enunciado: "Una piedra tiene una masa de 54 g. Al sumergirla en una probeta con 40 mL de agua, el nivel sube hasta 60 mL. Calcula su densidad.",
      pasos: ["Volumen: 60 − 40 = 20 mL = 20 cm³.", "d = m / V = 54 g / 20 cm³.", "d = 2,7 g/cm³ (como el aluminio o el granito)."],
      resultado: "2,7 g/cm³." },
    { enunciado: "¿Qué masa tienen 3 L de aceite de densidad 0,92 g/cm³?",
      pasos: ["3 L = 3000 cm³.", "m = d · V = 0,92 · 3000.", "m = 2760 g = 2,76 kg."],
      resultado: "2,76 kg." },
    { enunciado: "Un cubo de 2 cm de arista tiene una masa de 63,2 g. ¿Flotará en agua? ¿De qué sustancia puede ser?",
      pasos: ["V = 2 · 2 · 2 = 8 cm³.", "d = 63,2 / 8 = 7,9 g/cm³.", "Es mayor que 1 g/cm³, así que se hunde; coincide con el hierro."],
      resultado: "Se hunde; probablemente es de hierro." },
  ],
  errores: [
    "Confundir masa y peso: la masa se mide en kg y no cambia; el peso es una fuerza y depende de la gravedad.",
    "Pensar que un objeto grande siempre pesa más que uno pequeño: depende de su densidad.",
    "Creer que la densidad cambia si cortamos un trozo: es una propiedad específica y no depende de la cantidad.",
    "Olvidar restar el nivel inicial del agua al medir el volumen por inmersión.",
    "Mezclar unidades al calcular la densidad, por ejemplo gramos con litros sin convertir.",
  ],
  ejercicios: [
    { q: "Clasifica en materia o no materia: el aire, la luz, una nube, el sonido, el humo, el calor.", sol: "Materia: aire, nube, humo. No materia: luz, sonido, calor." },
    { q: "Clasifica en propiedades generales o específicas: masa, densidad, volumen, punto de ebullición, dureza.", sol: "Generales: masa y volumen. Específicas: densidad, punto de ebullición y dureza." },
    { q: "¿Qué volumen tiene un ladrillo de 20 cm × 10 cm × 5 cm?", sol: "V = 20 · 10 · 5 = 1000 cm³ = 1 L." },
    { q: "Calcula la densidad de un objeto de 150 g y 50 cm³.", sol: "d = 150 / 50 = 3 g/cm³." },
    { q: "¿Qué volumen ocupan 500 g de alcohol de densidad 0,8 g/cm³?", sol: "V = m / d = 500 / 0,8 = 625 cm³." },
    { q: "Pasa 2,7 g/cm³ a kg/m³.", sol: "2,7 g/cm³ = 2700 kg/m³ (se multiplica por 1000)." },
    { q: "Ordena de menos a más denso y di cuáles flotan en agua: hierro, corcho, aceite, aluminio, hielo.", sol: "Corcho (0,25) < aceite (0,92) = hielo (0,92) < aluminio (2,7) < hierro (7,9). Flotan corcho, aceite e hielo." },
    { q: "Una sustancia funde a −39 °C y hierve a 357 °C. ¿En qué estado está a 20 °C? ¿Cuál puede ser?", sol: "Líquido, porque 20 °C está entre los dos puntos. Es el mercurio." },
    { q: "Explica por qué flota un barco de acero.", sol: "Porque el casco hueco encierra mucho aire y la densidad media del barco es menor que la del agua." },
    { q: "Un anillo de 4,2 g desplaza 0,4 mL de agua. ¿Es de plata (10,5 g/cm³) o de oro (19,3 g/cm³)?", sol: "d = 4,2 / 0,4 = 10,5 g/cm³: es de plata." },
  ],
  quiz: [
    { q: "Materia es todo lo que tiene…", o: ["color y olor", "masa y volumen", "temperatura"], a: 1, e: "Masa y ocupa un volumen." },
    { q: "¿Cuál es una propiedad específica?", o: ["La masa", "El volumen", "La densidad"], a: 2, e: "La densidad identifica la sustancia." },
    { q: "La masa se mide con…", o: ["la probeta", "la balanza", "el dinamómetro"], a: 1, e: "Con la balanza." },
    { q: "1 L equivale a…", o: ["1 cm³", "1 dm³", "1 m³"], a: 1, e: "1 dm³." },
    { q: "El volumen de una piedra se mide…", o: ["con una regla", "por inmersión en agua", "con un termómetro"], a: 1, e: "Por inmersión." },
    { q: "La fórmula de la densidad es…", o: ["d = m · V", "d = V / m", "d = m / V"], a: 2, e: "Masa entre volumen." },
    { q: "Un cuerpo de densidad 0,6 g/cm³ en agua…", o: ["flota", "se hunde", "se disuelve"], a: 0, e: "Flota: es menos denso que el agua." },
    { q: "El agua hierve a nivel del mar a…", o: ["0 °C", "100 °C", "37 °C"], a: 1, e: "100 °C." },
    { q: "El mineral más duro de la escala de Mohs es…", o: ["el cuarzo", "el talco", "el diamante"], a: 2, e: "El diamante (10)." },
    { q: "Un buen conductor eléctrico es…", o: ["el cobre", "el plástico", "la madera"], a: 0, e: "El cobre, como los metales." },
  ],
  examen: [
    { q: "Si partimos una barra de hierro por la mitad, su densidad…", o: ["se reduce a la mitad", "no cambia", "se duplica"], a: 1, e: "No cambia: es específica." },
    { q: "El hielo flota en el agua porque…", o: ["es más denso", "es menos denso", "está más frío"], a: 1, e: "Al congelarse el agua se expande y su densidad baja." },
    { q: "Una sustancia que funde a 80 °C a temperatura ambiente es…", o: ["sólida", "líquida", "gaseosa"], a: 0, e: "Sólida: aún no ha llegado a su punto de fusión." },
  ],
  feynman: ["Qué diferencia hay entre propiedades generales y específicas", "Cómo medirías la densidad de una piedra", "Por qué unas cosas flotan y otras se hunden"],
  mapa: mapa("LA MATERIA", "var(--eso)", [
    ["Generales", "masa · volumen · temperatura", "var(--pen)"],
    ["Medida", "balanza · probeta · inmersión", "#b8860b"],
    ["Densidad", "d = m / V · flotación", "var(--red)"],
    ["Específicas", "fusión · ebullición · dureza", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Materia", "Todo lo que tiene masa y ocupa un volumen."],
    ["Masa", "Cantidad de materia de un cuerpo; se mide en kg con la balanza."],
    ["Volumen", "Espacio que ocupa un cuerpo; se mide en m³ o en L."],
    ["Densidad", "Masa por unidad de volumen: d = m / V."],
    ["Propiedad específica", "Tiene un valor propio para cada sustancia y sirve para identificarla."],
    ["Flotación", "Un cuerpo flota si es menos denso que el líquido."],
    ["Punto de fusión", "Temperatura a la que una sustancia pasa de sólido a líquido."],
    ["Escala de Mohs", "Mide la dureza del 1 (talco) al 10 (diamante)."],
  ],
  familias: ["Haced una torre de densidades en un vaso con miel, agua con colorante y aceite, y echad objetos pequeños.", "Medid el volumen de una piedra o un juguete por inmersión en una jarra medidora.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: propiedades generales y específicas, medida de masa y volumen, densidad y su aplicación a la identificación de sustancias (RD 217/2022, Física y Química, bloque «La materia»).",
    ideas: ["Práctica de densidad de sólidos regulares e irregulares con balanza y probeta, y comparación con una tabla de datos.", "El problema de la corona de Arquímedes como reto de investigación.", "Torre de líquidos de distinta densidad con predicción previa de dónde quedará cada objeto."],
  },
  fuentes: [RD, wiki("Materia", "Materia"), wiki("Densidad", "Densidad")],
  revisado: REV,
};
