// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const pila = (x, y) => `<line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y + 12}" stroke="var(--ink)" stroke-width="2.5"/><line x1="${x + 8}" y1="${y - 6}" x2="${x + 8}" y2="${y + 6}" stroke="var(--ink)" stroke-width="5"/>`;
const resis = (x, y) => `<rect x="${x - 14}" y="${y - 6}" width="28" height="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>`;
// Diodo horizontal (ánodo a la izquierda), con flechas si es LED
const diodo = (x, y, led) => `<path d="M${x - 9} ${y - 10} L ${x + 7} ${y} L ${x - 9} ${y + 10} Z" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><line x1="${x + 8}" y1="${y - 10}" x2="${x + 8}" y2="${y + 10}" stroke="var(--ink)" stroke-width="2.5"/>`
  + (led ? `${fl(x - 2, y - 13, x + 8, y - 25, "var(--red)", 1.5)}${fl(x + 6, y - 11, x + 16, y - 23, "var(--red)", 1.5)}` : "");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Electrónica básica",
  minutos: 60,
  objetivos: ["Distinguir la electricidad de la electrónica y diferenciar señales analógicas y digitales", "Identificar los componentes electrónicos básicos, su símbolo y su función", "Calcular el valor de una resistencia con el código de colores y la resistencia de protección de un LED", "Montar circuitos sencillos con LED, transistores y sensores en una placa de prototipos"],
  claves: ["electrónica", "resistencia", "código de colores", "condensador", "diodo", "LED", "transistor", "placa de prototipos"],
  pregunta: {
    texto: "Un móvil tiene más de diez mil millones de transistores. ¿Qué hace cada uno de ellos?",
    respuesta: "Cada <mark>transistor</mark> funciona como un <b>interruptor diminuto</b> controlado eléctricamente, que deja o no deja pasar la corriente miles de millones de veces por segundo. Combinando muchísimos de estos «sí» y «no» (unos y ceros), los chips procesan información: hacen cálculos, muestran imágenes y ejecutan las aplicaciones.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la electrónica?</h3><p>La <b>electricidad</b> se ocupa sobre todo de producir y transportar energía para hacer funcionar receptores como bombillas, motores o estufas. La <mark>electrónica</mark> estudia y aplica el <b>control</b> de pequeñas corrientes eléctricas para procesar <b>información</b>: amplificar sonidos, encender una luz cuando oscurece, contar, calcular o comunicarse. Se basa en componentes fabricados con materiales <b>semiconductores</b>, como el <b>silicio</b>, que conducen la corriente solo en ciertas condiciones. La electrónica está en todas partes: móviles, ordenadores, televisores, coches, electrodomésticos, juguetes, semáforos y aparatos médicos. Su gran salto fue la invención del <b>transistor</b> en 1947 y del <b>circuito integrado</b> o chip en 1958.</p>`,
      video: { id: "1NRFL6YYtzg", titulo: "COMPONENTES ELECTRÓNICOS - Resumen / Idea intuitiva", canal: "Manik", vistas: 1310601 },
    },
    {
      html: `<h3>Señales analógicas y digitales</h3><p>Los circuitos electrónicos trabajan con <b>señales</b>: tensiones que transportan información. Una <mark>señal analógica</mark> puede tomar <b>cualquier valor</b> dentro de un intervalo y varía de forma continua, como la temperatura a lo largo del día, el sonido que capta un micrófono o la aguja de un reloj. Una <mark>señal digital</mark> solo puede tomar <b>dos valores</b>: alto (1, por ejemplo 5 V) o bajo (0, 0 V). Las señales digitales son más resistentes al ruido y fáciles de guardar, copiar y procesar, por eso los ordenadores trabajan con ellas. Los aparatos actuales convierten las señales analógicas del mundo real en digitales con un <b>convertidor analógico-digital</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de una señal analógica, una onda suave que toma cualquier valor, y una señal digital, cuadrada con solo dos valores">${BG}
        ${t(130, 22, "analógica", { size: 11, color: "var(--pen)" })}<path d="M20 60 C 45 30, 70 30, 95 60 S 145 90, 170 60 S 220 30, 240 50" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <line x1="20" y1="94" x2="240" y2="94" stroke="var(--muted)" stroke-dasharray="3 3"/>
        ${t(130, 112, "digital", { size: 11, color: "var(--red)" })}<path d="M20 160 H 50 V 120 H 90 V 160 H 110 V 120 H 170 V 160 H 200 V 120 H 240" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${t(14, 124, "1", { size: 10, anchor: "end" })}${t(14, 164, "0", { size: 10, anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Las resistencias</h3><p>La <mark>resistencia</mark> o resistor es el componente más común. Su función es <b>limitar la intensidad</b> de corriente que pasa por una parte del circuito o <b>repartir la tensión</b>, para proteger a otros componentes. Las <b>resistencias fijas</b> tienen un valor constante, indicado con bandas de colores. Las <b>variables</b> cambian su valor: el <b>potenciómetro</b> se ajusta girando un mando (control de volumen); la <b>LDR</b> disminuye su resistencia cuando recibe <b>luz</b> (farolas automáticas); y los <b>termistores</b> cambian con la <b>temperatura</b> (termostatos). Las resistencias variables son la base de muchos <b>sensores</b>, porque convierten un cambio físico en un cambio eléctrico.</p>`,
    },
    {
      html: `<h3>El código de colores</h3><p>El valor de una resistencia fija se indica con <mark>bandas de colores</mark>. En las de cuatro bandas, la <b>primera</b> y la <b>segunda</b> son las dos primeras cifras; la <b>tercera</b> es el <b>multiplicador</b>, el número de ceros que se añaden; y la <b>cuarta</b>, separada de las otras, es la <b>tolerancia</b>, el margen de error: dorado ±5 %, plateado ±10 %. Los colores valen: negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7, gris 8, blanco 9. Por ejemplo, <b>amarillo-violeta-rojo-dorado</b> es 4 7 y dos ceros: <b>4 700 Ω = 4,7 kΩ ± 5 %</b>. Una regla para recordarlo: «<i>Ni Me Rompas Nada Amarillo Ve A Ver Grandes Bichos</i>».</p>${tabla(["Color", "Valor", "Color", "Valor"], [["Negro", "0", "Verde", "5"], ["Marrón", "1", "Azul", "6"], ["Rojo", "2", "Violeta", "7"], ["Naranja", "3", "Gris", "8"], ["Amarillo", "4", "Blanco", "9"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Resistencia con bandas amarilla, violeta, roja y dorada: 47 por 100, igual a 4700 ohmios con 5 por ciento de tolerancia">${BG}
        <line x1="20" y1="70" x2="240" y2="70" stroke="var(--muted)" stroke-width="3"/><rect x="66" y="48" width="128" height="44" rx="18" fill="#e9d3a6" stroke="var(--ink)" stroke-width="2"/>
        <rect x="84" y="48" width="10" height="44" fill="#f2c94c"/><rect x="104" y="48" width="10" height="44" fill="#8e44ad"/><rect x="124" y="48" width="10" height="44" fill="#d73027"/><rect x="168" y="48" width="10" height="44" fill="#c9a227"/>
        ${t(89, 112, "4", { size: 13 })}${t(109, 112, "7", { size: 13 })}${t(129, 112, "×100", { size: 11, anchor: "start" })}${t(173, 112, "±5 %", { size: 11 })}
        ${t(130, 146, "47 × 100 = 4 700 Ω", { size: 13, color: "var(--pen)" })}${t(130, 166, "= 4,7 kΩ", { size: 12, color: "var(--muted)" })}</svg>`,
      video: { id: "YdaiLW4WOWo", titulo: "Cómo calcular el valor de una resistencia con el Código de Colores", canal: "SterenMedia", vistas: 1622493 },
    },
    {
      html: `<h3>El condensador</h3><p>El <mark>condensador</mark> es un componente que <b>almacena carga eléctrica</b> durante un tiempo y la libera después, como un pequeño depósito. Está formado por dos placas conductoras separadas por un aislante. Su capacidad se mide en <b>faradios (F)</b>, aunque en la práctica se usan microfaradios (µF) y nanofaradios (nF). Los <b>electrolíticos</b> tienen <b>polaridad</b>: una patilla positiva (más larga) y otra negativa, marcada con una franja; si se conectan al revés, pueden estropearse. Los condensadores se usan para crear <b>temporizadores</b> (una luz que se apaga sola al cabo de un rato), filtrar señales, eliminar ruido y almacenar energía para el flash de una cámara.</p>`,
    },
    {
      html: `<h3>El diodo y el LED</h3><p>El <mark>diodo</mark> es un componente semiconductor que deja pasar la corriente <b>en un solo sentido</b>, del <b>ánodo</b> (+) al <b>cátodo</b> (−), y la bloquea en sentido contrario, como una válvula antirretorno. Se usa para proteger circuitos de conexiones al revés y para convertir la corriente alterna en continua (rectificar). El <mark>LED</mark> (diodo emisor de luz) es un diodo que <b>emite luz</b> cuando lo atraviesa la corriente en el sentido correcto. Su patilla larga es el ánodo (+). Consume muy poca energía y dura muchísimo, por eso ha sustituido a las bombillas. Un LED funciona con unos <b>2 V</b> y unos <b>20 mA</b>: siempre necesita una <b>resistencia de protección</b> en serie, o se quema.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito con pila de 9 voltios, resistencia de protección y LED; el ánodo es la patilla larga">${BG}
        <path d="M40 50 H 220 V 140 H 40 V 106 M40 74 V 50" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="74" width="24" height="32" fill="var(--paper)"/>${pila(36, 90)}${t(22, 94, "9 V", { size: 10, anchor: "end" })}
        ${resis(100, 50)}${t(100, 36, "R", { size: 11, color: "var(--pen)" })}
        <rect x="150" y="38" width="28" height="24" fill="var(--paper)"/>${diodo(164, 50, true)}${t(196, 30, "LED", { size: 11, color: "var(--red)", anchor: "start" })}
        ${t(150, 72, "ánodo +", { size: 9, color: "var(--muted)", anchor: "end" })}${t(178, 72, "− cátodo", { size: 9, color: "var(--muted)", anchor: "start" })}
        ${t(130, 164, "R = (9 − 2) / 0,02 = 350 Ω", { size: 11, color: "var(--pen)" })}</svg>`,
      video: { id: "Y324Y55lm2E", titulo: "¿Qué es un LED? Tipos, patillas, polaridad, colores, usos...", canal: "Electrónica FP", vistas: 146541 },
    },
    {
      html: `<h3>El transistor</h3><p>El <mark>transistor</mark> es el componente más importante de la electrónica. Tiene <b>tres patillas</b>: <b>base</b> (B), <b>colector</b> (C) y <b>emisor</b> (E). Una <b>pequeña corriente</b> que entra por la base controla una <b>corriente mucho mayor</b> que pasa del colector al emisor. Así puede funcionar de dos formas. Como <b>interruptor</b>: si no llega corriente a la base, el transistor está en <b>corte</b> y no deja pasar corriente; si llega suficiente, está en <b>saturación</b> y la deja pasar entera. Como <b>amplificador</b>: una señal débil en la base se convierte en otra igual pero más fuerte, como en un altavoz. Con un transistor y una LDR se puede hacer que una luz se encienda sola al oscurecer.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolo del transistor NPN con base, colector y emisor; una corriente pequeña en la base controla una corriente grande">${BG}
        <circle cx="130" cy="90" r="40" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
        <line x1="116" y1="66" x2="116" y2="114" stroke="var(--ink)" stroke-width="4"/><line x1="60" y1="90" x2="116" y2="90" stroke="var(--ink)" stroke-width="2"/>
        <path d="M116 78 L 146 58 V 30 M116 102 L 146 122 V 150" stroke="var(--ink)" stroke-width="2" fill="none"/>${fl(130, 110, 142, 119, "var(--ink)", 2)}
        ${t(54, 94, "B", { size: 12, color: "var(--pen)", anchor: "end" })}${t(156, 36, "C", { size: 12, color: "var(--red)", anchor: "start" })}${t(156, 150, "E", { size: 12, color: "var(--red)", anchor: "start" })}
        ${t(64, 112, "I pequeña", { size: 10, color: "var(--pen)" })}${t(210, 144, "I grande", { size: 10, color: "var(--red)" })}${fl(210, 56, 210, 126, "var(--red)", 2)}</svg>`,
      video: { id: "zh7PeHAZRLY", titulo: "Transistor Explicado", canal: "Mentalidad De Ingeniería", vistas: 4263806 },
    },
    {
      html: `<h3>Otros componentes: relé, zumbador y circuitos integrados</h3><p>El <b>relé</b> es un interruptor accionado por un <b>electroimán</b>: una corriente pequeña activa la bobina, que atrae una lámina y cierra otro circuito independiente, que puede ser de mayor potencia. Permite, por ejemplo, que un circuito de 5 V controle un motor de 230 V. El <b>zumbador</b> (<i>buzzer</i>) emite un pitido. Los <b>pulsadores</b> y <b>sensores</b> (LDR, termistores, sensores de infrarrojos) envían información al circuito. Los <mark>circuitos integrados</mark> o chips reúnen miles o millones de transistores, resistencias y condensadores en una pastilla de silicio de pocos milímetros: el temporizador 555, los amplificadores o los <b>microcontroladores</b>, que son pequeños ordenadores programables como el de Arduino.</p>`,
    },
    {
      html: `<h3>Montaje en la placa de prototipos</h3><p>Para probar circuitos sin soldar se usa la <mark>placa de prototipos</mark> o <i>protoboard</i>: una placa de plástico con agujeros conectados internamente. Las <b>filas laterales</b> (marcadas con + rojo y − azul) recorren la placa a lo largo y se usan para la alimentación. En la <b>zona central</b>, cada <b>columna de cinco agujeros</b> está conectada entre sí, y un canal central separa las dos mitades, donde se colocan los chips. Para montar: se conecta la alimentación a los buses laterales, se colocan los componentes de forma que sus patillas queden en columnas distintas y se unen con <b>cables puente</b>. Cuando el circuito funciona, se puede <b>soldar</b> en una placa definitiva con estaño y soldador, con mucho cuidado porque alcanza unos 350 °C.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Placa de prototipos: dos filas de alimentación arriba y columnas de cinco agujeros conectados en la zona central">${BG}
        <rect x="16" y="20" width="228" height="142" rx="8" fill="#eef0f4" stroke="var(--muted)" stroke-width="2"/>
        <line x1="26" y1="34" x2="234" y2="34" stroke="var(--red)" stroke-width="1.5"/><line x1="26" y1="48" x2="234" y2="48" stroke="var(--pen)" stroke-width="1.5"/>
        ${Array.from({ length: 14 }, (_, i) => `<circle cx="${34 + i * 14}" cy="38" r="2" fill="var(--ink)"/><circle cx="${34 + i * 14}" cy="52" r="2" fill="var(--ink)"/>`).join("")}
        ${Array.from({ length: 14 }, (_, i) => Array.from({ length: 5 }, (_, j) => `<circle cx="${34 + i * 14}" cy="${70 + j * 12}" r="2" fill="var(--ink)"/>`).join("")).join("")}
        <rect x="58" y="64" width="10" height="60" rx="4" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(130, 150, "columnas de 5 conectadas", { size: 10, color: "var(--leaf)" })}${t(24, 38, "+", { size: 10, color: "var(--red)", anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Residuos electrónicos</h3><p>Cada año se generan en el mundo más de <b>60 millones de toneladas</b> de <mark>residuos electrónicos</mark>: móviles, ordenadores, pilas, cargadores. Contienen metales valiosos como oro, plata, cobre y litio, pero también sustancias <b>tóxicas</b> como plomo, mercurio o cadmio, que contaminan suelos y aguas si se tiran a la basura. Por eso deben llevarse a un <b>punto limpio</b> o devolverse en la tienda al comprar uno nuevo, y las pilas se depositan en contenedores específicos. Alargar la vida de los aparatos, repararlos y donarlos cuando ya no los usamos son las mejores formas de reducir este problema, que veremos más a fondo en el tema de tecnología sostenible.</p>`,
    },
  ],
  figura: {
    titulo: "Luz automática: LDR y transistor",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Esquema de bloques: un sensor de luz LDR detecta la oscuridad, el transistor actúa como interruptor y el LED se enciende">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${caja(40, 80, 150, 60, "LDR: sensor de luz", "var(--pen)", { size: 15 })}${caja(245, 80, 150, 60, "transistor", "var(--red)", { size: 15 })}${caja(450, 80, 150, 60, "LED se enciende", "#b8860b", { size: 15 })}
      ${fl(192, 110, 240, 110, "var(--ink)", 3)}${fl(397, 110, 445, 110, "var(--ink)", 3)}
      ${t(115, 50, "ENTRADA", { size: 13, color: "var(--muted)" })}${t(320, 50, "CONTROL", { size: 13, color: "var(--muted)" })}${t(525, 50, "SALIDA", { size: 13, color: "var(--muted)" })}
      ${t(115, 172, "oscuridad → R alta", { size: 13 })}${t(320, 172, "corriente en la base", { size: 13 })}${t(525, 172, "pasa corriente C → E", { size: 13 })}
      ${t(320, 222, "todo sistema electrónico: entrada → proceso → salida", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "scl3N_HEpZQ", titulo: "Resistencias: Código de Colores", canal: "Charly Labs", vistas: 403690, megusta: 0, busqueda: "electrónica básica resistencia LED transistor" },
  ejemplos: [
    { enunciado: "¿Qué valor tiene una resistencia marrón-negro-naranja-dorado?",
      pasos: ["Marrón = 1, negro = 0: cifras 10.", "Naranja = 3: tres ceros → 10 000.", "Dorado: ±5 %."],
      resultado: "10 000 Ω = 10 kΩ ± 5 %." },
    { enunciado: "Un LED rojo necesita 2 V y 20 mA. ¿Qué resistencia hay que ponerle con una pila de 5 V?",
      pasos: ["Tensión en la resistencia: 5 − 2 = 3 V.", "I = 20 mA = 0,02 A.", "R = V / I = 3 / 0,02 = 150 Ω."],
      resultado: "150 Ω (o el valor comercial más cercano por arriba)." },
    { enunciado: "Queremos una resistencia de 220 Ω. ¿Qué colores tendrá?",
      pasos: ["Cifras 2 y 2: rojo, rojo.", "Un cero: multiplicador marrón (×10).", "Tolerancia habitual: dorado."],
      resultado: "Rojo-rojo-marrón-dorado." },
  ],
  errores: [
    "Conectar un LED sin resistencia de protección: se quema.",
    "Montar un LED o un condensador electrolítico al revés: la patilla larga es el positivo.",
    "Leer el código de colores empezando por la banda de tolerancia.",
    "Pensar que el tercer color es una cifra: es el número de ceros.",
    "Poner las dos patillas de un componente en la misma columna de la protoboard: queda en cortocircuito.",
  ],
  ejercicios: [
    { q: "Diferencia entre electricidad y electrónica.", sol: "La electricidad usa la corriente como energía; la electrónica controla pequeñas corrientes para procesar información." },
    { q: "Pon dos ejemplos de señal analógica y dos de digital.", sol: "Analógicas: temperatura, sonido. Digitales: un pulsador (pulsado/no), los datos de un ordenador." },
    { q: "Calcula el valor de: rojo-violeta-amarillo-plateado.", sol: "27 · 10 000 = 270 000 Ω = 270 kΩ ± 10 %." },
    { q: "¿Qué colores tiene una resistencia de 1 kΩ ± 5 %?", sol: "Marrón-negro-rojo-dorado." },
    { q: "¿Qué hace una LDR? ¿Dónde se usa?", sol: "Disminuye su resistencia con la luz; en farolas que se encienden solas al anochecer." },
    { q: "¿Para qué sirve un condensador? Pon una aplicación.", sol: "Almacena carga y la libera después; temporizadores o el flash de una cámara." },
    { q: "¿Cómo se identifica el ánodo de un LED?", sol: "Es la patilla más larga (+); el cátodo suele estar junto a un lado plano de la cápsula." },
    { q: "Calcula la resistencia para un LED (2 V, 20 mA) con una pila de 9 V.", sol: "R = (9 − 2) / 0,02 = 350 Ω." },
    { q: "Nombra las patillas del transistor y explica cómo funciona como interruptor.", sol: "Base, colector y emisor. Sin corriente en la base no conduce (corte); con corriente, conduce de C a E (saturación)." },
    { q: "¿Por qué no deben tirarse los aparatos electrónicos a la basura?", sol: "Contienen sustancias tóxicas que contaminan y metales valiosos que se pueden recuperar; van al punto limpio." },
  ],
  quiz: [
    { q: "El material base de la electrónica es el…", o: ["silicio", "cobre", "hierro"], a: 0, e: "Silicio, semiconductor." },
    { q: "Una señal que solo toma dos valores es…", o: ["analógica", "digital", "alterna"], a: 1, e: "Digital." },
    { q: "En el código de colores, el rojo vale…", o: ["1", "2", "3"], a: 1, e: "2." },
    { q: "La tercera banda de una resistencia indica…", o: ["una cifra", "el multiplicador", "la tolerancia"], a: 1, e: "El multiplicador." },
    { q: "La LDR cambia su resistencia con la…", o: ["luz", "temperatura", "humedad"], a: 0, e: "Luz." },
    { q: "El componente que almacena carga es el…", o: ["diodo", "condensador", "transistor"], a: 1, e: "Condensador." },
    { q: "El diodo deja pasar la corriente…", o: ["en los dos sentidos", "en un solo sentido", "nunca"], a: 1, e: "En un solo sentido." },
    { q: "La patilla larga del LED es el…", o: ["ánodo (+)", "cátodo (−)", "emisor"], a: 0, e: "Ánodo." },
    { q: "Las patillas del transistor son…", o: ["base, colector y emisor", "ánodo y cátodo", "fase y neutro"], a: 0, e: "B, C y E." },
    { q: "En la protoboard, en la zona central están conectados los agujeros de cada…", o: ["fila larga", "columna de cinco", "placa entera"], a: 1, e: "Columna de cinco." },
  ],
  examen: [
    { q: "Verde-azul-negro equivale a…", o: ["56 Ω", "560 Ω", "5,6 Ω"], a: 0, e: "56 × 1 = 56 Ω." },
    { q: "El relé es un interruptor accionado por…", o: ["un electroimán", "la luz", "un muelle"], a: 0, e: "Un electroimán." },
    { q: "Un chip con un pequeño ordenador programable es un…", o: ["microcontrolador", "potenciómetro", "termistor"], a: 0, e: "Microcontrolador." },
  ],
  feynman: ["Cómo se lee el valor de una resistencia por sus colores", "Por qué un LED necesita una resistencia", "Cómo un transistor actúa como interruptor"],
  mapa: mapa("ELECTRÓNICA", "var(--eso)", [
    ["Señales", "analógica · digital", "var(--pen)"],
    ["Pasivos", "resistencia · condensador", "var(--red)"],
    ["Semiconductores", "diodo · LED · transistor", "var(--leaf)"],
    ["Montaje", "protoboard · chips", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Señal digital", "Solo dos valores: 0 y 1."],
    ["Resistencia", "Limita la intensidad de corriente."],
    ["Código de colores", "Cifra, cifra, ceros, tolerancia."],
    ["LDR", "Resistencia que baja con la luz."],
    ["Condensador", "Almacena carga; se mide en faradios."],
    ["LED", "Diodo que emite luz; patilla larga +."],
    ["Transistor", "Corriente pequeña en B controla una grande C → E."],
    ["Protoboard", "Placa para montar sin soldar."],
  ],
  familias: ["Buscad en casa un aparato roto (con permiso) y localizad resistencias, condensadores y LED en su placa.", "Leed juntos los colores de una resistencia con la regla «Ni Me Rompas…».", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Electrónica básica: componentes pasivos y activos, señales analógicas y digitales, código de colores, montaje en placa de prototipos y simulación de circuitos (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Montar en protoboard un LED con resistencia y medir con polímetro.", "Circuito de luz automática con LDR y transistor; probarlo tapando el sensor.", "Simular primero los circuitos en Tinkercad Circuits."],
  },
  fuentes: [RD, wiki("Transistor", "Transistor"), wiki("Led", "Led")],
  revisado: "2026-11-12",
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["La luz que se enciende sola", `<p>Paula vuelve a casa en invierno y, al acercarse al portal, la luz de la entrada se enciende sola. Su hermano pequeño cree que es magia, pero Paula, que este año estudia Tecnología, sabe que dentro de esa lámpara hay un pequeño circuito electrónico: un sensor de luz que detecta que ya es de noche, un sensor de movimiento que la ha visto llegar y un componente diminuto que actúa como un interruptor sin partes móviles: el <b>transistor</b>.</p><p>La electrónica está en todo lo que nos rodea: en el móvil, en el mando de la tele, en las luces de Navidad, en el coche, en la lavadora y en los semáforos. Un móvil actual contiene miles de millones de transistores en un chip del tamaño de una uña; en cambio, los primeros ordenadores de los años cuarenta usaban válvulas de vacío del tamaño de una bombilla y ocupaban habitaciones enteras.</p><p>En este tema conocerás los componentes básicos (resistencias, condensadores, diodos, LED y transistores), aprenderás a leer su valor, a calcular la resistencia que protege un LED y a montar en la protoboard circuitos sencillos como un detector de oscuridad o un temporizador. También verás qué hacer con los aparatos electrónicos cuando dejan de funcionar.</p>`],
  mas: [
    ["<h3>¿Qué es la electrónica?</h3>", `<p>La electrónica nació a principios del siglo XX con las <b>válvulas de vacío</b>, que permitieron la radio y la televisión. En 1947 se inventó el <b>transistor</b>, mucho más pequeño, barato y fiable, y en 1958 el <b>circuito integrado</b>, que reúne muchos transistores en un solo chip. Desde entonces, el número de transistores por chip se ha duplicado aproximadamente cada dos años, lo que se conoce como <b>ley de Moore</b>.</p>`],
    ["<h3>Residuos electrónicos</h3>", `<p>Los aparatos viejos deben llevarse a un <b>punto limpio</b> o devolverse en la tienda al comprar uno nuevo, que está obligada a recogerlo. Antes conviene borrar los datos personales y valorar si se puede reparar, donar o vender: alargar la vida de un móvil un par de años es lo que más reduce su impacto ambiental.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es la electrónica?</h3>", "Historia de la electrónica", [["1904", "válvula de vacío"], ["1947", "transistor"], ["1958", "circuito integrado"], ["Hoy", "miles de millones por chip"]], "De la válvula al chip"],
    ["<h3>Las resistencias</h3>", "Resistencias fijas y variables", [["Fija", "valor constante, bandas de color"], ["Potenciómetro", "se ajusta girando"], ["LDR", "baja con la luz"], ["Termistor", "cambia con la temperatura"]], "Tipos de resistencias"],
    ["<h3>El condensador</h3>", "El condensador", [["Qué hace", "almacena carga y la libera"], ["Unidad", "faradio: µF y nF"], ["Electrolítico", "tiene polaridad"]], "Un pequeño depósito de carga"],
    ["<h3>Otros componentes: relé, zumbador y circuitos integrados</h3>", "Relé, zumbador y circuito integrado", [["Relé", "electroimán que cierra otro circuito"], ["Zumbador", "emite un pitido"], ["Circuito integrado", "muchos componentes en un chip"]], "Otros componentes"],
    ["<h3>Residuos electrónicos</h3>", "Qué hacer con un aparato viejo", [["Reparar", "alargar su vida"], ["Donar o vender", "que lo use otra persona"], ["Punto limpio", "reciclar sus materiales"]], "Las tres opciones"],
  ],
  bloques: [
    { tras: "<h3>El código de colores</h3>", html: `<h3>Asociación de resistencias y divisor de tensión</h3><p>Las resistencias se asocian igual que los receptores de un circuito eléctrico. <b>En serie</b> se suman: dos de 1 kΩ equivalen a 2 kΩ. <b>En paralelo</b>, la equivalente es menor que la más pequeña: dos de 1 kΩ equivalen a 500 Ω. Así se consiguen valores que no existen en los comercios.</p><p>Dos resistencias en serie forman un <b>divisor de tensión</b>: la tensión del generador se reparte entre ellas de forma proporcional a su valor. Con 9 V y dos resistencias iguales, cada una recibe 4,5 V; si una es el doble que la otra, se lleva dos tercios de la tensión. La fórmula de la tensión en la resistencia R₂ es <b>V₂ = V · R₂ / (R₁ + R₂)</b>. El divisor es la base de los sensores: si R₂ es una LDR, al cambiar la luz cambia su resistencia y, con ella, la tensión de salida, que puede leer un transistor o una placa Arduino.</p>`, svg: ["Divisor de tensión", [["Serie", "R total = R₁ + R₂"], ["Paralelo", "menor que la más pequeña"], ["Divisor", "V₂ = V · R₂ / (R₁ + R₂)"]], "Combinar resistencias"] },
    { tras: "<h3>El condensador</h3>", html: `<h3>Carga y descarga: temporizadores</h3><p>Un condensador no se carga al instante: si se conecta a través de una resistencia, la carga va subiendo poco a poco. El tiempo que tarda depende de la <b>constante de tiempo</b>, τ = R · C (en segundos si R está en ohmios y C en faradios). Al cabo de un tiempo τ el condensador ha alcanzado un 63 % de la tensión, y en unos <b>5τ</b> se considera cargado del todo. Por ejemplo, con 100 kΩ y 100 µF: τ = 100.000 · 0,0001 = 10 s, y la carga completa tarda unos 50 s.</p><p>Al descargarse a través de otra resistencia ocurre lo mismo al revés. Esta propiedad sirve para hacer <b>temporizadores</b>: la luz de la escalera que se apaga sola, el retardo de una alarma o el parpadeo de un intermitente. Para cambiar el tiempo basta con cambiar R (con un potenciómetro) o C. El circuito integrado <b>555</b> usa este principio para generar parpadeos y temporizaciones muy precisas.</p>`, svg: ["Constante de tiempo", [["τ = R · C", "segundos"], ["En τ", "carga al 63 %"], ["En 5τ", "carga completa"]], "Temporizar con un condensador"] },
    { tras: "<h3>El diodo y el LED</h3>", html: `<h3>Proteger un LED: calcular su resistencia</h3><p>Un LED necesita una tensión concreta para encenderse, llamada <b>tensión directa</b>: unos 2 V los rojos, amarillos y verdes, y unos 3 V los azules y blancos. Y admite una intensidad máxima, normalmente <b>20 mA</b>. Si se conecta directamente a una pila de 9 V, pasaría demasiada corriente y se quemaría en un instante. Por eso siempre se coloca una <b>resistencia en serie</b> que «se queda» con la tensión sobrante.</p><p>El cálculo tiene tres pasos: <b>1)</b> tensión sobrante = tensión de la pila − tensión del LED; <b>2)</b> R = tensión sobrante / intensidad (en amperios); <b>3)</b> se elige el valor comercial más próximo por encima, para no superar la intensidad. Con una pila de 9 V y un LED rojo: 9 − 2 = 7 V; R = 7 / 0,02 = 350 Ω; se elige 390 Ω. Con 5 V (Arduino): (5 − 2) / 0,02 = 150 Ω, y se suele usar 220 Ω, que da un brillo suficiente y protege más.</p>`, svg: ["Resistencia para un LED", [["1. Sobrante", "V pila − V LED"], ["2. Ohm", "R = sobrante / 0,02 A"], ["3. Comercial", "el valor próximo por encima"]], "Cálculo en tres pasos"] },
    { tras: "<h3>El transistor</h3>", html: `<h3>Un circuito completo: detector de oscuridad</h3><p>Con lo aprendido se puede montar un <b>detector de oscuridad</b>, el circuito de una luz nocturna. Se forma un divisor de tensión con una resistencia fija (o un potenciómetro) entre el positivo y la base del transistor, y una <b>LDR</b> entre la base y el negativo. En el colector se conecta un LED con su resistencia de protección.</p><p>De día, la LDR tiene poca resistencia y «tira» de la base hacia 0 V: el transistor está en <b>corte</b> y el LED, apagado. Al oscurecer, la resistencia de la LDR aumenta mucho, la tensión en la base sube por encima de unos 0,7 V y el transistor pasa a <b>saturación</b>: el LED se enciende. El potenciómetro permite ajustar a partir de qué nivel de oscuridad se activa. Si se intercambian la LDR y la resistencia, el circuito funciona al revés: se enciende con la luz. Cambiando la LDR por un termistor se obtiene una alarma de temperatura, y cambiando el LED por un relé se puede controlar una lámpara de verdad.</p>`, svg: ["Detector de oscuridad", [["De día", "LDR baja → transistor en corte"], ["De noche", "LDR alta → saturación"], ["Resultado", "el LED se enciende"]], "LDR + transistor + LED"] },
    { tras: "<h3>Montaje en la placa de prototipos</h3>", html: `<h3>Soldadura y placas de circuito impreso</h3><p>Cuando un circuito ya funciona en la protoboard, se monta de forma definitiva en una <b>placa de circuito impreso</b> (PCB): una lámina aislante con pistas de cobre que sustituyen a los cables. Las PCB se diseñan con programas como KiCad o Fritzing y se fabrican en serie. En el aula también se usan placas perforadas, en las que las conexiones se hacen con estaño y cables.</p><p>Para <b>soldar</b> se calienta a la vez la patilla y la pista con la punta del soldador durante un par de segundos, se acerca el hilo de estaño, que se funde y fluye, y se retira primero el estaño y luego el soldador. Una buena soldadura es brillante y tiene forma de pequeño volcán; una soldadura «fría», mate y con bolitas, conduce mal. Normas de seguridad: usar gafas, dejar el soldador siempre en su soporte, trabajar con ventilación para no respirar los humos y no tocar la punta, que está a unos 350 °C.</p>`, svg: ["Soldar con seguridad", [["Calentar", "patilla y pista a la vez"], ["Aportar estaño", "que fluya, no a bolitas"], ["Seguridad", "gafas, soporte, ventilación"]], "La soldadura"] },
  ],
  grupos: [2, 5, 5, 3],
  ejemplos: [
    ["Un LED azul (3 V, 20 mA) se alimenta con 9 V. Calcula la resistencia y elige un valor comercial (330, 390 o 470 Ω).", ["Sobrante: 9 − 3 = 6 V.", "R = 6 / 0,02 = 300 Ω.", "El valor comercial próximo por encima es 330 Ω."], "330 Ω (naranja-naranja-marrón)."],
    ["Un divisor de tensión con R₁ = 10 kΩ y R₂ = 5 kΩ a 9 V. ¿Qué tensión hay en R₂?", ["R total = 15 kΩ.", "V₂ = 9 · 5 / 15 = 3 V.", "En R₁ quedan 6 V."], "3 V en R₂ y 6 V en R₁."],
    ["Un temporizador usa R = 47 kΩ y C = 220 µF. ¿Cuánto vale τ y cuánto tarda en cargarse del todo?", ["τ = 47.000 · 0,000220 = 10,34 s.", "Carga completa ≈ 5τ = 51,7 s."], "τ ≈ 10 s; carga completa en unos 52 s."],
  ],
  errores: ["Calcular la resistencia de un LED con la intensidad en miliamperios sin pasarla a amperios (20 en lugar de 0,02)."],
  niveles: "bbmmbbbmmb",
  ejercicios: [
    ["b", "¿Qué es la ley de Moore?", "La observación de que el número de transistores en un chip se duplica aproximadamente cada dos años."],
    ["b", "¿Cuánto valen dos resistencias de 2,2 kΩ en serie? ¿Y en paralelo?", "En serie: 4,4 kΩ. En paralelo (iguales): 2,2 / 2 = 1,1 kΩ."],
    ["b", "¿Qué tensión directa aproximada tiene un LED rojo? ¿Y uno blanco?", "Rojo: unos 2 V. Blanco: unos 3 V."],
    ["b", "¿Por qué hay que poner una resistencia en serie con un LED?", "Para limitar la intensidad a unos 20 mA y que la tensión sobrante quede en la resistencia; sin ella el LED se quemaría."],
    ["b", "¿Qué diferencia hay entre una protoboard y una placa de circuito impreso?", "La protoboard sirve para probar sin soldar y se puede reutilizar; la PCB es definitiva, con pistas de cobre y componentes soldados."],
    ["b", "Escribe cuatro normas de seguridad al soldar.", "Usar gafas, dejar el soldador en su soporte, trabajar con ventilación y no tocar la punta ni el estaño recién fundido."],
    ["m", "Calcula la resistencia para un LED verde (2 V, 20 mA) alimentado a 5 V.", "Sobrante: 3 V. R = 3 / 0,02 = 150 Ω. Se elige un valor comercial igual o mayor, como 150 o 220 Ω."],
    ["m", "Un divisor con dos resistencias de 10 kΩ y 20 kΩ a 6 V. ¿Qué tensión hay en la de 20 kΩ?", "V = 6 · 20 / 30 = 4 V. En la de 10 kΩ quedan 2 V."],
    ["m", "Calcula τ para R = 100 kΩ y C = 47 µF y el tiempo de carga completa.", "τ = 100.000 · 0,000047 = 4,7 s. Carga completa ≈ 5 · 4,7 = 23,5 s."],
    ["m", "¿Cómo podrías hacer que la luz del temporizador se mantenga encendida el doble de tiempo?", "Duplicando τ: usar una resistencia del doble de valor o un condensador del doble de capacidad (o girar el potenciómetro)."],
    ["m", "Explica qué ocurre en el detector de oscuridad cuando se hace de noche.", "La resistencia de la LDR aumenta, la tensión en la base del transistor sube por encima de 0,7 V, el transistor se satura y deja pasar corriente por el LED, que se enciende."],
    ["m", "¿Qué cambiarías en el detector de oscuridad para que fuera una alarma de calor?", "Sustituir la LDR por un termistor (NTC) y el LED por un zumbador: al subir la temperatura cambia la resistencia y se activa el transistor."],
    ["m", "Describe cómo es una soldadura bien hecha y una soldadura fría.", "Bien hecha: brillante, lisa y con forma de pequeño volcán alrededor de la patilla. Fría: mate, granulosa o con bolitas; conduce mal y puede soltarse."],
    ["m", "Combina resistencias de 1 kΩ para obtener 1,5 kΩ. Explica cómo.", "Dos de 1 kΩ en paralelo (500 Ω) en serie con una tercera de 1 kΩ: 500 + 1.000 = 1.500 Ω."],
    ["m", "Explica dos razones para reparar un móvil en lugar de comprar uno nuevo.", "Se evita la extracción de minerales y la energía de fabricar uno nuevo (la mayor parte de su impacto) y se reducen los residuos; además suele ser más barato."],
    ["a", "Diseña el circuito de una luz nocturna con LDR, transistor, potenciómetro y LED rojo a 9 V. Indica dónde va cada componente y calcula la resistencia del LED.", "Potenciómetro entre +9 V y la base; LDR entre la base y GND; emisor a GND; colector a la resistencia del LED y el LED al +9 V (ánodo hacia +). Resistencia del LED: (9 − 2 − 0,2) / 0,02 ≈ 340 Ω → 390 Ω."],
    ["a", "Una LDR vale 1 kΩ con luz y 100 kΩ a oscuras. Forma un divisor con una resistencia de 10 kΩ a 5 V (LDR abajo). Calcula la tensión de salida en los dos casos.", "Con luz: 5 · 1 / 11 ≈ 0,45 V. A oscuras: 5 · 100 / 110 ≈ 4,5 V. La salida cambia mucho, ideal para activar un transistor o leerla con Arduino."],
    ["a", "Quieres un temporizador de 1 minuto (≈ 5τ) con un condensador de 100 µF. ¿Qué resistencia necesitas?", "5τ = 60 s → τ = 12 s. R = τ / C = 12 / 0,0001 = 120.000 Ω = 120 kΩ."],
    ["a", "Tres LED rojos (2 V, 20 mA) en serie con una pila de 9 V. Calcula la resistencia necesaria.", "Tensión de los tres LED: 6 V. Sobrante: 9 − 6 = 3 V. R = 3 / 0,02 = 150 Ω."],
    ["a", "Explica por qué un relé permite que un circuito electrónico de 5 V encienda una lámpara de 230 V con seguridad.", "Porque la bobina del relé (circuito de 5 V) y sus contactos (circuito de 230 V) están eléctricamente separados: la corriente de la bobina solo crea un campo magnético que mueve la lámina. El transistor activa la bobina y el relé conmuta la lámpara."],
  ],
  cuartas: ["oro", "alterna", "4", "el material", "el sonido", "relé", "a impulsos", "emisor", "ánodo y emisor", "placa entera en diagonal", "5.600 Ω", "la presión", "fusible"],
  quiz: [
    ["Dos resistencias de 1 kΩ en paralelo equivalen a…", ["2 kΩ", "500 Ω", "1 kΩ", "0 Ω"], 1, "Iguales en paralelo: la mitad."],
    ["En un divisor de tensión, la resistencia mayor recibe…", ["menos tensión", "más tensión", "la misma", "ninguna"], 1, "La tensión se reparte en proporción."],
    ["La constante de tiempo de un circuito RC es…", ["R + C", "R · C", "R / C", "V / R"], 1, "τ = R · C."],
    ["Un condensador se considera cargado al cabo de…", ["τ", "2τ", "5τ", "10 s siempre"], 2, "Unos 5 veces τ."],
    ["La intensidad típica de un LED es…", ["20 A", "20 mA", "2 A", "200 mA"], 1, "0,02 A."],
    ["La resistencia de un LED rojo a 9 V con 20 mA es…", ["350 Ω", "450 Ω", "100 Ω", "35 Ω"], 0, "(9 − 2) / 0,02 = 350 Ω."],
    ["En el detector de oscuridad, de noche la LDR…", ["baja su resistencia", "sube su resistencia", "se calienta", "se apaga"], 1, "A oscuras su resistencia aumenta."],
    ["El transistor conduce cuando la base supera unos…", ["0,7 V", "9 V", "230 V", "0 V"], 0, "Unos 0,7 V en los de silicio."],
    ["Una soldadura fría es…", ["brillante", "mate y con bolitas", "la mejor", "la que se hace sin soldador"], 1, "Conduce mal."],
    ["La punta del soldador alcanza unos…", ["50 °C", "100 °C", "350 °C", "1.000 °C"], 2, "Peligro de quemaduras."],
  ],
  examen: [
    ["El divisor 10 kΩ y 10 kΩ a 9 V da en cada una…", ["9 V", "4,5 V", "3 V", "0 V"], 1, "Se reparte a partes iguales."],
    ["El componente que se usa para temporizar es el…", ["condensador", "diodo", "LED", "zumbador"], 0, "Se carga y descarga."],
    ["Un LED blanco a 5 V con 20 mA necesita unos…", ["100 Ω", "1 kΩ", "10 Ω", "10 kΩ"], 0, "(5 − 3) / 0,02 = 100 Ω."],
    ["El transistor se inventó en…", ["1904", "1947", "1990", "1800"], 1, "En los laboratorios Bell."],
    ["Un aparato electrónico viejo se lleva…", ["a la basura", "al punto limpio", "al contenedor amarillo", "al azul"], 1, "O se devuelve en la tienda."],
  ],
  tarjetas: [["Divisor de tensión", "Dos resistencias en serie que reparten la tensión."], ["Constante de tiempo", "τ = R · C; en 5τ el condensador está cargado."], ["Resistencia de un LED", "R = (V pila − V LED) / 0,02 A."], ["Detector de oscuridad", "LDR + transistor: el LED se enciende de noche."]],
  glosario: [
    ["Electrónica", "Técnica que controla la corriente con componentes semiconductores para tratar información."],
    ["Semiconductor", "Material, como el silicio, que conduce según las condiciones."],
    ["Señal analógica", "Puede tomar infinitos valores."],
    ["Señal digital", "Solo toma dos valores: 0 y 1."],
    ["Resistencia", "Componente que limita la corriente o reparte la tensión."],
    ["Potenciómetro", "Resistencia variable que se ajusta girando."],
    ["LDR", "Resistencia que disminuye con la luz."],
    ["Termistor", "Resistencia que cambia con la temperatura."],
    ["Divisor de tensión", "Dos resistencias en serie que reparten la tensión."],
    ["Condensador", "Componente que almacena carga."],
    ["Constante de tiempo", "τ = R · C: rapidez de carga de un condensador."],
    ["Diodo", "Deja pasar la corriente en un solo sentido."],
    ["LED", "Diodo que emite luz."],
    ["Transistor", "Componente que funciona como interruptor o amplificador."],
    ["Relé", "Interruptor accionado por un electroimán."],
    ["Circuito integrado", "Chip que reúne muchos componentes."],
    ["PCB", "Placa de circuito impreso con pistas de cobre."],
  ],
  situacion: { titulo: "Una luz nocturna para el pasillo", reto: "Diseñar, calcular y montar por parejas una luz nocturna que se encienda sola al oscurecer, con sensibilidad ajustable, y presentarla con su esquema y sus cálculos.", pasos: ["Dibujar el esquema con LDR, potenciómetro, transistor, LED y resistencia.", "Calcular la resistencia del LED y leer los colores de las resistencias usadas.", "Montar el circuito en la protoboard y comprobarlo tapando la LDR.", "Medir con el polímetro la tensión en la base con luz y a oscuras.", "Ajustar el potenciómetro y, si es posible, soldarlo en una placa perforada."], producto: "Circuito funcional, esquema normalizado y ficha con cálculos y medidas.", evaluacion: ["El esquema es correcto y usa símbolos normalizados.", "La resistencia del LED está bien calculada.", "El circuito funciona y se puede ajustar.", "Se explican las medidas de la base con luz y a oscuras."] },
  saberes: "electrónica analógica y digital básica: componentes, cálculo y montaje de circuitos sencillos, simulación, soldadura y gestión de residuos electrónicos.",
  familias: ["Buscad en casa un aparato con LED indicadores y pensad para qué sirve cada luz."],
  minutos: 115,
});
