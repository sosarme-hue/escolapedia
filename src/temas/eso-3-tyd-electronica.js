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
