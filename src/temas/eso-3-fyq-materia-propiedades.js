// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "La materia y sus propiedades",
  minutos: 50,
  objetivos: ["Distinguir propiedades generales y características de la materia", "Medir la masa y el volumen de sólidos y líquidos", "Calcular la densidad y usarla para identificar sustancias", "Explicar la flotación a partir de la densidad"],
  claves: ["materia", "masa", "volumen", "densidad", "propiedad general", "propiedad característica", "temperatura de fusión", "flotación"],
  pregunta: {
    texto: "Un barco de acero de 100.000 toneladas flota, pero un tornillo de acero de 5 gramos se hunde. ¿Cómo es posible?",
    respuesta: "No depende de cuánto pesa, sino de la <mark>densidad</mark>: de cuánta masa hay en cada litro de volumen. El tornillo es acero macizo, mucho más denso que el agua. El barco es una gran caja hueca llena de aire, y su densidad media (acero más aire) es menor que la del agua.",
  },
  bloques: [
    {
      html: `<h3>Qué es la materia</h3><p><b>Materia</b> es todo lo que tiene <mark>masa</mark> y ocupa un lugar en el espacio, es decir, tiene <mark>volumen</mark>. Son materia el agua, el aire, una roca, tu cuerpo o una estrella. No son materia la luz, el sonido, el calor o las ideas, porque no tienen masa. Cada clase concreta de materia es una <b>sustancia</b>: el agua, el hierro, la sal o el oxígeno. Un <b>sistema material</b> es la porción de materia que aislamos para estudiarla, como el agua de un vaso. Aunque no lo parezca, el aire también es materia: un balón inflado pesa más que uno desinflado, y un vaso «vacío» metido boca abajo en agua no se llena porque el aire ocupa su sitio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un vaso boca abajo dentro de agua conserva aire dentro: el aire ocupa espacio y es materia">${BG}
        <rect x="30" y="70" width="200" height="90" rx="6" fill="var(--water)" fill-opacity=".4" stroke="var(--muted)" stroke-width="2"/>
        <path d="M100 40 V 120 H 160 V 40" fill="#fff" fill-opacity=".9" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="102" y="102" width="56" height="16" fill="var(--water)" fill-opacity=".4"/>
        ${t(130, 84, "aire", { size: 13, color: "var(--pen)" })}${t(130, 30, "vaso boca abajo", { size: 11 })}${t(200, 146, "agua", { size: 12, color: "var(--pen)" })}
        ${t(130, 174, "el aire ocupa su sitio: es materia", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Propiedades generales y características</h3><p>Las <b>propiedades generales</b> las tiene toda la materia, sea cual sea: la masa, el volumen, la temperatura. Sirven para describir una porción de materia, pero <b>no para identificar</b> de qué sustancia se trata, porque 1 kg de hierro y 1 kg de madera tienen la misma masa. Las <mark>propiedades características</mark> o específicas tienen un valor propio de cada sustancia y sirven para <b>identificarla</b>: la <b>densidad</b>, la <b>temperatura de fusión</b> y la de <b>ebullición</b>, la <b>solubilidad</b>, la conductividad eléctrica, la dureza o el color. Si una sustancia funde a 0 °C, hierve a 100 °C y tiene una densidad de 1 g/cm³, es agua.</p>`,
    },
    {
      html: `<h3>La masa y cómo se mide</h3><p>La <mark>masa</mark> es la cantidad de materia que tiene un cuerpo. Su unidad en el SI es el <b>kilogramo (kg)</b>, aunque se usan mucho el gramo (g) y la tonelada (t). Se mide con la <b>balanza</b>. Antes de usarla hay que comprobar que marca cero (tarar) y, para pesar un líquido, se pesa primero el recipiente vacío y después lleno, y se restan. No hay que confundir masa con <b>peso</b>: el peso es la fuerza con la que la Tierra atrae a un cuerpo y se mide en newtons. En la Luna tu masa sería la misma, pero pesarías seis veces menos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pesada por diferencia: el vaso vacío pesa 80 gramos, lleno 230; la masa del líquido es 150 gramos">${BG}
        ${[[66, "80 g", false], [194, "230 g", true]].map(([x, m, full]) => `<rect x="${x - 50}" y="110" width="100" height="40" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 26}" y="122" width="52" height="18" rx="3" fill="#e8f3e8" stroke="var(--leaf)"/>${t(x, 136, m, { size: 12, color: "var(--leaf)" })}<path d="M${x - 20} 60 V 104 H ${x + 20} V 60" fill="${full ? "var(--water)" : "none"}" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        ${t(66, 50, "vacío", { size: 11 })}${t(194, 50, "lleno", { size: 11 })}
        ${t(130, 28, "líquido = 230 − 80 = 150 g", { size: 12, color: "var(--pen)" })}${t(130, 170, "balanza: tara a cero", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El volumen y cómo se mide</h3><p>El <mark>volumen</mark> es el espacio que ocupa un cuerpo. Su unidad en el SI es el <b>metro cúbico (m³)</b>, pero en la vida diaria usamos el litro: <b>1 L = 1 dm³</b> y <b>1 mL = 1 cm³</b>. El volumen de un sólido regular se calcula con fórmulas: el de un cubo es lado al cubo, el de un prisma es largo por ancho por alto. El de un líquido se mide con la <b>probeta</b>, leyendo con los ojos a la altura del <b>menisco</b>, la superficie curva del líquido. El de un sólido irregular, como una piedra, se mide por <b>inmersión</b>: se mete en una probeta con agua y el aumento de volumen es el volumen de la piedra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Medida de volumen por inmersión: la probeta pasa de 50 a 65 mililitros al meter una piedra; la piedra ocupa 15 mililitros">${BG}
        ${[[70, 90, false, "50 mL"], [190, 72, true, "65 mL"]].map(([x, y, st, v]) => `<path d="M${x - 18} 30 V 150 H ${x + 18} V 30" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 17}" y="${y}" width="34" height="${150 - y}" fill="var(--water)" fill-opacity=".45"/>${st ? `<path d="M${x - 10} 146 L ${x - 4} 128 L ${x + 10} 130 L ${x + 12} 146 Z" fill="#8a7a6a"/>` : ""}${t(x + 26, y + 4, v, { size: 11, anchor: "start", color: "var(--pen)" })}`).join("")}
        ${fl(110, 100, 150, 100)}${t(130, 22, "piedra = 65 − 50 = 15 mL", { size: 12, color: "var(--red)" })}${t(130, 172, "1 mL = 1 cm³", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La densidad</h3><p>La <mark>densidad</mark> es la masa que hay en cada unidad de volumen de una sustancia: <b>d = m / V</b>. Indica lo «apretada» que está la materia. Su unidad en el SI es el <b>kg/m³</b>, pero se usa mucho el <b>g/cm³</b>, que equivale a kg/L; para pasar de g/cm³ a kg/m³ se multiplica por 1000. Es una <b>propiedad característica</b>: un clavo y una viga de hierro tienen masas muy distintas, pero la misma densidad, 7,9 g/cm³. Despejando de la fórmula se pueden calcular la masa (<b>m = d · V</b>) o el volumen (<b>V = m / d</b>) si conocemos la densidad.</p>${tabla(["Sustancia", "Densidad (g/cm³)"], [["Aire", "0,0012"], ["Aceite de oliva", "0,92"], ["Hielo", "0,92"], ["Agua", "1,00"], ["Agua de mar", "1,03"], ["Aluminio", "2,7"], ["Hierro", "7,9"], ["Mercurio", "13,6"], ["Oro", "19,3"]])}`,
      video: { id: "1yxYjQmTpVI", titulo: "CALCULAR DENSIDAD [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 928166 },
    },
    {
      html: `<h3>Densidad y partículas</h3><p>¿Por qué unas sustancias son más densas que otras? Toda la materia está formada por <b>partículas</b> muy pequeñas. La densidad depende de <b>la masa de cada partícula</b> y de lo <b>juntas</b> que estén. El oro es muy denso porque sus átomos son pesados y están muy apretados. Los gases tienen densidades unas mil veces menores que los líquidos porque sus partículas están muy separadas. Por eso, en general, una sustancia es más densa en estado sólido que en líquido, y mucho más que en gas. El agua es una excepción famosa: el <mark>hielo es menos denso que el agua líquida</mark>, y por eso flota y los lagos se congelan solo por arriba, lo que permite que los peces sobrevivan debajo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mismo volumen con partículas muy juntas, en un sólido denso, y muy separadas, en un gas poco denso">${BG}
        <rect x="20" y="40" width="96" height="96" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${Array.from({ length: 36 }, (_, i) => `<circle cx="${30 + (i % 6) * 15}" cy="${50 + Math.floor(i / 6) * 15}" r="6" fill="#d4a017"/>`).join("")}
        <rect x="144" y="40" width="96" height="96" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${[[160, 60], [210, 52], [186, 96], [224, 118], [158, 122]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--inf)"/>`).join("")}
        ${t(68, 28, "muy denso", { size: 12, color: "#b8860b" })}${t(192, 28, "poco denso", { size: 12, color: "var(--inf)" })}
        ${t(68, 158, "sólido (oro)", { size: 11 })}${t(192, 158, "gas (aire)", { size: 11 })}</svg>`,
    },
    {
      html: `<h3>Flotar o hundirse</h3><p>Un cuerpo <mark>flota</mark> en un líquido si su densidad media es <b>menor</b> que la del líquido, y se <b>hunde</b> si es mayor. La madera (unos 0,6 g/cm³) flota en agua; una piedra (unos 2,5 g/cm³) se hunde. El aceite flota sobre el agua y no se mezcla. Si se echan en un vaso miel, agua y aceite, se ordenan en capas de más a menos densa. En el agua del mar Muerto, muy salada y densa (1,24 g/cm³), las personas flotan sin esfuerzo. Los submarinos llenan o vacían sus tanques de agua para cambiar su densidad media y así bajar o subir, y los peces hacen algo parecido con su vejiga natatoria.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vaso con tres capas: aceite arriba, agua en medio y miel abajo; un corcho flota en el aceite, un tomate cherry en el agua y una tuerca en el fondo">${BG}
        <path d="M70 26 V 160 H 190 V 26" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="71" y="50" width="118" height="36" fill="#f2d675" fill-opacity=".7"/><rect x="71" y="86" width="118" height="40" fill="var(--water)" fill-opacity=".45"/><rect x="71" y="126" width="118" height="33" fill="#c47a1a" fill-opacity=".7"/>
        <rect x="114" y="42" width="26" height="14" rx="4" fill="#b88a5a"/><circle cx="130" cy="98" r="10" fill="var(--red)"/><path d="M118 152 l 8 -8 h 10 l 4 8 Z" fill="var(--muted)"/>
        ${t(200, 72, "aceite 0,9", { size: 10, anchor: "start" })}${t(200, 110, "agua 1,0", { size: 10, anchor: "start", color: "var(--pen)" })}${t(200, 146, "miel 1,4", { size: 10, anchor: "start", color: "#a0560a" })}
        ${t(60, 48, "corcho", { size: 10, anchor: "end" })}${t(60, 102, "tomate", { size: 10, anchor: "end" })}${t(60, 152, "tuerca", { size: 10, anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Las temperaturas de fusión y ebullición</h3><p>La <b>temperatura de fusión</b> es la temperatura a la que una sustancia pura pasa de sólido a líquido, y la de <b>ebullición</b>, la temperatura a la que hierve, pasando de líquido a gas en todo su volumen. Ambas son <mark>propiedades características</mark>. El agua funde a 0 °C y hierve a 100 °C (a nivel del mar); el hierro funde a 1538 °C; el oxígeno hierve a −183 °C. Si una sustancia no es pura, estas temperaturas cambian: el agua con sal se congela por debajo de 0 °C, por eso se echa sal en las carreteras heladas. La temperatura de ebullición también depende de la presión: en la cima del Everest el agua hierve a unos 70 °C.</p>`,
    },
    {
      html: `<h3>Otras propiedades características</h3><p>La <b>solubilidad</b> es la cantidad máxima de una sustancia que se puede disolver en una cantidad de disolvente: la sal es muy soluble en agua, la arena no. La <b>conductividad eléctrica</b> y la <b>térmica</b> indican si la sustancia deja pasar la electricidad y el calor: los metales son buenos conductores; el plástico, la madera y el vidrio son aislantes. La <b>dureza</b> es la resistencia a ser rayado: el diamante es el material natural más duro. La <b>elasticidad</b>, la <b>fragilidad</b>, la <b>maleabilidad</b> (formar láminas) y la <b>ductilidad</b> (formar hilos) explican para qué sirve cada material. Por ejemplo, el cobre es dúctil y buen conductor, y por eso se usa en los cables.</p>`,
    },
    {
      html: `<h3>La temperatura y las escalas</h3><p>La <mark>temperatura</mark> es una propiedad general que mide lo caliente o frío que está un cuerpo y está relacionada con la <b>agitación de sus partículas</b>: cuanto más rápido se mueven, mayor es la temperatura. Se mide con el termómetro. En la vida diaria usamos la escala <b>Celsius</b> (°C), con el 0 en la fusión del hielo y el 100 en la ebullición del agua. En ciencia se usa la escala <b>Kelvin</b> (K), la del SI, que empieza en el <b>cero absoluto</b>, la temperatura más baja posible, en la que las partículas casi no se mueven. Para pasar de una a otra: <mark>T(K) = t(°C) + 273</mark>. Así, 25 °C son 298 K.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos termómetros comparados: 100 grados Celsius son 373 kelvin, 0 grados son 273 kelvin y el cero absoluto, menos 273 grados, es 0 kelvin">${BG}
        ${[[80, "°C", ["100", "0", "−273"]], [180, "K", ["373", "273", "0"]]].map(([x, u, v]) => `<rect x="${x - 8}" y="24" width="16" height="132" rx="8" fill="#fff" stroke="var(--ink)" stroke-width="2"/><circle cx="${x}" cy="156" r="12" fill="var(--red)"/><rect x="${x - 4}" y="60" width="8" height="96" fill="var(--red)"/>${t(x, 18, u, { size: 12 })}${v.map((n, i) => t(x + (u === "K" ? 18 : -18), [40, 90, 140][i], n, { size: 11, anchor: u === "K" ? "start" : "end", color: "var(--pen)" })).join("")}`).join("")}
        ${[40, 90, 140].map(y => `<line x1="92" y1="${y - 4}" x2="168" y2="${y - 4}" stroke="var(--muted)" stroke-dasharray="3 3"/>`).join("")}
        ${t(130, 174, "K = °C + 273", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Qué propiedad sirve para qué",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Dos columnas: propiedades generales, como masa, volumen y temperatura, que no identifican la sustancia; y propiedades características, como densidad, temperaturas de fusión y ebullición, solubilidad y conductividad, que sí la identifican">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(20, 20, 290, 44, "GENERALES", "var(--muted)", { size: 16 })}${caja(330, 20, 290, 44, "CARACTERÍSTICAS", "var(--leaf)", { size: 16 })}
      ${["masa", "volumen", "temperatura"].map((n, i) => t(165, 98 + i * 30, n, { size: 15, weight: 400 })).join("")}
      ${["densidad", "temperatura de fusión y ebullición", "solubilidad · conductividad", "dureza · color"].map((n, i) => t(475, 98 + i * 30, n, { size: 15, weight: 400 })).join("")}
      ${t(165, 222, "describen, no identifican", { size: 14, color: "var(--muted)", font: D })}${t(475, 222, "identifican la sustancia", { size: 14, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "hKrDXOqGvBA", titulo: "Calcular la DENSIDAD, MASA y VOLUMEN con Fórmula y Factores de Conversión", canal: "Susi Profe", vistas: 1713620, megusta: 0, busqueda: "propiedades de la materia masa volumen densidad" },
  ejemplos: [
    { enunciado: "Un anillo tiene una masa de 38,6 g y, al meterlo en una probeta, el agua sube de 20,0 mL a 22,0 mL. ¿Es de oro?",
      pasos: ["Volumen del anillo: 22,0 − 20,0 = 2,0 mL = 2,0 cm³.", "Densidad: d = m / V = 38,6 / 2,0 = 19,3 g/cm³.", "Comparamos con la tabla: la densidad del oro es 19,3 g/cm³."],
      resultado: "sí, su densidad coincide con la del oro." },
    { enunciado: "¿Qué masa tienen 5 L de aceite de oliva (d = 0,92 g/cm³)?",
      pasos: ["5 L = 5000 cm³.", "m = d · V = 0,92 · 5000.", "m = 4600 g."],
      resultado: "4,6 kg." },
    { enunciado: "Expresa 2,7 g/cm³ (aluminio) en kg/m³.",
      pasos: ["2,7 g/cm³ · (1 kg / 1000 g) · (10⁶ cm³ / 1 m³).", "2,7 · 10⁶ / 1000 = 2700.", "Regla rápida: g/cm³ × 1000 = kg/m³."],
      resultado: "2700 kg/m³." },
  ],
  errores: [
    "Pensar que lo que pesa más es más denso: un kilo de paja y uno de plomo pesan igual, pero el plomo es mucho más denso.",
    "Usar la masa o el volumen para identificar una sustancia: son propiedades generales.",
    "Confundir masa (kg, con balanza) con peso (N, una fuerza).",
    "Leer la probeta desde arriba o desde abajo, en lugar de a la altura del menisco.",
    "Olvidar que 1 mL = 1 cm³ y que 1 L = 1 dm³ = 1000 cm³.",
  ],
  ejercicios: [
    { q: "Explica si son materia: el aire, la luz, una nube, el sonido, el humo.", sol: "Son materia el aire, la nube y el humo porque tienen masa y volumen. La luz y el sonido no lo son." },
    { q: "Clasifica en generales o características: masa, densidad, volumen, temperatura de ebullición, solubilidad, temperatura.", sol: "Generales: masa, volumen, temperatura. Características: densidad, temperatura de ebullición, solubilidad." },
    { q: "Calcula la densidad de un cubo de 2 cm de arista y 21,6 g de masa. ¿De qué metal puede ser?", sol: "V = 2³ = 8 cm³; d = 21,6 / 8 = 2,7 g/cm³: aluminio." },
    { q: "¿Qué volumen ocupan 500 g de mercurio (d = 13,6 g/cm³)?", sol: "V = m / d = 500 / 13,6 ≈ 36,8 cm³." },
    { q: "Una piedra hace subir el agua de una probeta de 40 mL a 52 mL. Si su masa es 30 g, ¿cuál es su densidad?", sol: "V = 12 cm³; d = 30 / 12 = 2,5 g/cm³." },
    { q: "¿Flotará en agua un objeto de 600 g y 800 cm³? Razona.", sol: "d = 600 / 800 = 0,75 g/cm³, menor que la del agua (1 g/cm³), así que flota." },
    { q: "¿Por qué el hielo flota en el agua y por qué es importante para la vida?", sol: "Porque es menos denso que el agua líquida. Los lagos se congelan por arriba y la capa de hielo aísla el agua de debajo, donde sobreviven los seres vivos." },
    { q: "Pasa a kelvin: 0 °C, 37 °C y −20 °C.", sol: "273 K, 310 K y 253 K." },
    { q: "¿Por qué los cables eléctricos son de cobre y están recubiertos de plástico?", sol: "El cobre es dúctil y buen conductor eléctrico; el plástico es aislante y evita descargas." },
    { q: "Explica cómo medirías la densidad de una llave.", sol: "Mido su masa con una balanza; mido su volumen por inmersión en una probeta con agua; divido la masa entre el volumen." },
  ],
  quiz: [
    { q: "Materia es todo lo que tiene…", o: ["color", "masa y volumen", "temperatura alta"], a: 1, e: "Masa y volumen." },
    { q: "Una propiedad característica es…", o: ["la masa", "la densidad", "el volumen"], a: 1, e: "La densidad identifica la sustancia." },
    { q: "1 mL equivale a…", o: ["1 cm³", "1 dm³", "1 m³"], a: 0, e: "1 cm³." },
    { q: "La fórmula de la densidad es…", o: ["d = m · V", "d = m / V", "d = V / m"], a: 1, e: "Masa entre volumen." },
    { q: "Un cuerpo flota en agua si su densidad es…", o: ["mayor que 1 g/cm³", "menor que 1 g/cm³", "igual a 0"], a: 1, e: "Menor que la del agua." },
    { q: "El volumen de una piedra se mide…", o: ["con una regla", "por inmersión en una probeta", "con la balanza"], a: 1, e: "Por inmersión." },
    { q: "1 g/cm³ son…", o: ["1 kg/m³", "100 kg/m³", "1000 kg/m³"], a: 2, e: "Se multiplica por 1000." },
    { q: "25 °C en kelvin son…", o: ["248 K", "298 K", "25 K"], a: 1, e: "25 + 273 = 298 K." },
    { q: "El hielo flota porque…", o: ["es más denso que el agua", "es menos denso que el agua", "tiene aire dentro siempre"], a: 1, e: "Es menos denso." },
    { q: "La capacidad de formar hilos es la…", o: ["maleabilidad", "ductilidad", "dureza"], a: 1, e: "Ductilidad." },
  ],
  examen: [
    { q: "La masa se mide con…", o: ["la probeta", "la balanza", "el dinamómetro"], a: 1, e: "La balanza." },
    { q: "Si dos objetos son del mismo material, tienen la misma…", o: ["masa", "densidad", "volumen"], a: 1, e: "Densidad." },
    { q: "La unidad de volumen del SI es…", o: ["el litro", "el metro cúbico", "el mililitro"], a: 1, e: "m³." },
  ],
  feynman: ["Por qué la masa no sirve para identificar una sustancia y la densidad sí", "Cómo medir la densidad de un objeto irregular", "Por qué un barco de acero flota"],
  mapa: mapa("MATERIA", "var(--eso)", [
    ["Generales", "masa · volumen · temperatura", "var(--muted)"],
    ["Características", "densidad · fusión · ebullición", "var(--leaf)"],
    ["Densidad", "d = m / V · g/cm³ · kg/m³", "var(--pen)"],
    ["Flotación", "flota si es menos denso", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Materia", "Todo lo que tiene masa y volumen."],
    ["Masa", "Cantidad de materia; se mide en kg con la balanza."],
    ["Volumen", "Espacio que ocupa un cuerpo; m³, L, mL."],
    ["Densidad", "d = m / V; masa por unidad de volumen."],
    ["Propiedad característica", "Tiene un valor propio de cada sustancia."],
    ["Inmersión", "Medir el volumen de un sólido por el agua que desplaza."],
    ["Flotación", "Flota lo que es menos denso que el líquido."],
    ["Kelvin", "T(K) = t(°C) + 273."],
  ],
  familias: ["Torre de densidades: en un vaso alto, añadid con cuidado miel, agua con colorante y aceite, y probad qué objetos flotan en cada capa.", "Meted un huevo en agua y añadid sal poco a poco hasta que flote.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: propiedades generales y características, medida de masa y volumen, densidad y su relación con la estructura de partículas (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Identificar metales desconocidos midiendo su densidad.", "Torre de densidades con líquidos de colores.", "Ludión casero con una botella y un capuchón de bolígrafo."],
  },
  fuentes: [RD, wiki("Densidad", "Densidad"), wiki("Materia", "Materia")],
  revisado: "2026-11-12",
};
