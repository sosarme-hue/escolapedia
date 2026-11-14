// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Mapa de Karnaugh de 3 variables (A | BC) con los unos indicados.
const karnaugh = (unos, grupos) => {
  const cols = ["00", "01", "11", "10"], x0 = 70, y0 = 56, w = 40, h = 34;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa de Karnaugh de tres variables con grupos de unos marcados">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 22, "Mapa de Karnaugh", { fs: 13, maxW: 236, bold: true, font: B.D })}
    ${B.tx(52, 46, "A \\ BC", { fs: 10.5, maxW: 44, bold: true, color: "var(--muted)" })}
    ${cols.map((c, j) => B.tx(x0 + j * w + w / 2, 48, c, { fs: 11, maxW: 30, bold: true, color: "var(--pen)" })).join("")}
    ${[0, 1].map((a) => B.tx(56, y0 + a * h + h / 2 + 4, a, { fs: 11, maxW: 14, bold: true, color: "var(--pen)" })).join("")}
    ${[0, 1].map((a) => cols.map((c, j) => `<rect x="${x0 + j * w}" y="${y0 + a * h}" width="${w}" height="${h}" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>
      ${B.tx(x0 + j * w + w / 2, y0 + a * h + h / 2 + 5, unos.includes(`${a}${c}`) ? 1 : 0, { fs: 13, maxW: 20, bold: true, color: unos.includes(`${a}${c}`) ? "var(--ink)" : "var(--muted)" })}`).join("")).join("")}
    ${grupos.map(([x, y, gw, gh, c]) => `<rect x="${x0 + x * w + 4}" y="${y0 + y * h + 4}" width="${gw * w - 8}" height="${gh * h - 8}" rx="12" fill="none" stroke="${c}" stroke-width="3"/>`).join("")}
    ${B.tx(130, 160, "F = AB + AC + BC", { fs: 13, maxW: 220, bold: true })}
  </svg>`;
};

module.exports = B.tema({
  titulo: "Electrónica analógica y digital",
  minutos: 120,
  objetivos: [
    "Explicar el funcionamiento de los semiconductores, el diodo y el transistor, y calcular circuitos básicos con ellos",
    "Trabajar con sistemas de numeración binario y hexadecimal y con el álgebra de Boole",
    "Obtener, simplificar (por álgebra y mapas de Karnaugh) e implementar funciones lógicas con puertas",
    "Describir circuitos combinacionales, secuenciales y la conversión analógico-digital",
  ],
  claves: ["semiconductor", "diodo", "rectificador", "transistor", "saturación", "binario", "álgebra de Boole", "puerta lógica", "tabla de verdad", "mapa de Karnaugh", "biestable", "conversor ADC"],
  pregunta: {
    texto: "Un móvil reproduce una canción que es una onda de sonido continua, pero la guarda como una lista de ceros y unos. ¿Cómo se pasa de una cosa a la otra sin que notemos la diferencia?",
    respuesta: "Con un <b>conversor analógico-digital</b>: mide la onda miles de veces por segundo (44 100 en un CD) y convierte cada medida en un número binario. Los circuitos <b>digitales</b> procesan y guardan esos números sin errores, y al reproducir, un conversor digital-analógico y un <b>amplificador</b> analógico reconstruyen la onda. La electrónica moderna es siempre una <mark>colaboración entre lo analógico y lo digital</mark>.",
  },
  lectura: {
    titulo: "La arena que piensa",
    html: `<p>El silicio es, después del oxígeno, el elemento más abundante de la corteza terrestre: está en la arena de cualquier playa. Purificado hasta tener solo un átomo extraño por cada mil millones y cortado en obleas más finas que una uña, se convierte en el material más importante de nuestra época.</p>
    <p>En 1947, en los laboratorios Bell, tres investigadores construyeron el primer transistor, un aparato del tamaño de un puño. Diez años después se inventó el circuito integrado, que reunía varios transistores en una sola pieza de silicio. Desde entonces, el número de transistores por chip se ha duplicado aproximadamente cada dos años: hoy un procesador de móvil contiene más de diez mil millones, cada uno de unas decenas de átomos de ancho.</p>
    <p>Cada uno de esos transistores hace algo muy sencillo: deja pasar la corriente o no la deja pasar. Combinados según las reglas de un álgebra inventada por George Boole en 1854, cuando nadie imaginaba los ordenadores, suman, comparan, guardan datos y toman decisiones. En este tema recorrerás ese camino, desde el diodo hasta los circuitos lógicos que están detrás de cualquier aparato digital.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Semiconductores y diodo",
      html: `<p>Los <b>semiconductores</b>, como el silicio y el germanio, conducen la electricidad peor que los metales y mejor que los aisladores. Su conductividad se controla añadiendo pequeñas cantidades de impurezas, proceso llamado <b>dopado</b>. Con átomos de fósforo, que aportan electrones libres, se obtiene silicio de <b>tipo N</b>; con boro, que deja huecos (ausencias de electrones que se comportan como cargas positivas), de <b>tipo P</b>.</p>
      <p>Al unir una zona P con una N se forma una <b>unión PN</b>, que es un <b>diodo</b>: un componente que deja pasar la corriente <mark>en un solo sentido</mark>, del ánodo (P) al cátodo (N). En <b>polarización directa</b> (ánodo más positivo), conduce cuando la tensión supera unos 0,7 V en el silicio (tensión umbral); en <b>polarización inversa</b>, prácticamente no conduce. Si la tensión inversa es excesiva, se alcanza la tensión de ruptura.</p>
      <p>En los cálculos se suele usar un modelo sencillo: el diodo en directa es como una fuente de 0,7 V (unos 2 V en un LED rojo, 3 V en uno azul o blanco) y en inversa, como un circuito abierto. Siempre hay que limitar la corriente con una resistencia en serie, R = (V − V_D) / I.</p>`,
      svg: B.comparar("Diodo en polarización directa frente a inversa", ["Directa", ["ánodo +", "V > 0,7 V", "conduce", "interruptor cerrado"]], ["Inversa", ["ánodo −", "no conduce", "solo fuga mínima", "interruptor abierto"]]),
      video: { id: "aPY3I8pG478", titulo: "Diodos explicados", canal: "Mentalidad De Ingeniería", vistas: 1550289 },
    },
    {
      h: "Aplicaciones del diodo: rectificación y regulación",
      html: `<p>Los diodos tienen muchas aplicaciones:</p>
      <ul><li><b>Rectificación</b>: convertir corriente alterna en continua. Un solo diodo deja pasar solo los semiciclos positivos (rectificador de <b>media onda</b>). Un <b>puente de cuatro diodos</b> invierte los negativos y aprovecha los dos semiciclos (<b>onda completa</b>).</li>
      <li><b>Filtrado</b>: un condensador en paralelo con la salida se carga en los picos y se descarga lentamente entre ellos, suavizando la tensión. Queda un pequeño rizado.</li>
      <li><b>Regulación</b>: el <b>diodo Zener</b> está diseñado para trabajar en inversa, donde mantiene una tensión casi constante (la tensión Zener) aunque cambie la corriente. Hoy se usan más los <b>reguladores integrados</b> como el 7805, que da 5 V estables.</li>
      <li><b>Protección</b>: un diodo en antiparalelo con una bobina (relé, motor) absorbe el pico de tensión al desconectarla; otro en serie protege un circuito si se conecta la pila al revés.</li>
      <li><b>LED</b> (emite luz), <b>fotodiodo</b> (detecta luz) y <b>célula fotovoltaica</b> (genera electricidad con la luz).</li></ul>
      <p>Una <b>fuente de alimentación lineal</b> encadena todo: transformador reductor, puente rectificador, condensador de filtro y regulador. Las fuentes actuales de los cargadores son <b>conmutadas</b>: más pequeñas y eficientes, porque trabajan a alta frecuencia.</p>`,
      svg: B.flujo("Etapas de una fuente de alimentación lineal", ["Transformador: 230 V → 12 V", "Puente rectificador", "Condensador de filtro", "Regulador: 5 V estables", "Carga"], { t: "Fuente de alimentación" }),
    },
    {
      h: "El transistor bipolar",
      html: `<p>El <b>transistor bipolar</b> (BJT) tiene tres zonas semiconductoras (NPN o PNP) y tres terminales: <b>base</b> (B), <b>colector</b> (C) y <b>emisor</b> (E). Su propiedad esencial es que <mark>una corriente pequeña en la base controla una corriente mucho mayor</mark> entre colector y emisor. En la zona activa:</p>
      <div class="formula"><span>I_C = β · I_B   ·   I_E = I_C + I_B</span></div>
      <p>β (o h_FE) es la <b>ganancia de corriente</b>, normalmente entre 50 y 300. El transistor puede trabajar en tres zonas:</p>
      <ul><li><b>Corte</b>: sin corriente de base (V_BE &lt; 0,7 V), no conduce: es un interruptor abierto.</li>
      <li><b>Activa</b>: I_C es proporcional a I_B: el transistor <b>amplifica</b>. Así funcionan los amplificadores de audio.</li>
      <li><b>Saturación</b>: la corriente de base es tan grande que el colector ya no puede dar más; V_CE ≈ 0,2 V y el transistor es un interruptor cerrado.</li></ul>
      <p>Usado como <b>interruptor</b> (en corte y saturación), permite que una señal débil, como la salida de un microcontrolador o un sensor, gobierne una carga potente: un relé, un motor o una tira de LED. Para garantizar la saturación se calcula la corriente de base mínima I_B = I_C / β y se elige una corriente de 2 a 5 veces mayor; la resistencia de base es R_B = (V_entrada − 0,7) / I_B.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Transistor NPN como interruptor: la base controla la corriente de un relé entre colector y emisor">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Transistor NPN", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <circle cx="140" cy="100" r="30" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M128 82 V 118" stroke="var(--ink)" stroke-width="4"/><path d="M60 100 H 128" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M128 92 L 152 72 V 44 M128 108 L 152 128 V 156" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M142 116 L 152 128 L 138 126" fill="var(--ink)"/>
        ${B.tx(48, 96, "B", { fs: 13, maxW: 14, bold: true, color: "var(--pen)" })}${B.tx(166, 50, "C", { fs: 13, maxW: 14, bold: true, color: "var(--red)" })}${B.tx(166, 154, "E", { fs: 13, maxW: 14, bold: true, color: "var(--leaf)" })}
        ${B.tx(80, 118, "I_B pequeña", { fs: 10.5, maxW: 70, bold: true, color: "var(--pen)" })}${B.tx(206, 80, "I_C = β·I_B", { fs: 11, maxW: 80, bold: true, color: "var(--red)" })}
      </svg>`,
      video: { id: "uXVSfRF6IS0", titulo: "Cómo usar un transistor como interruptor", canal: "Electrónica Práctica Paso a Paso", vistas: 571091 },
    },
    {
      h: "Otros componentes: MOSFET, sensores y amplificador operacional",
      html: `<p>Además del transistor bipolar, la electrónica actual usa mucho el <b>MOSFET</b>, un transistor controlado por <b>tensión</b> y no por corriente: su puerta (gate) apenas consume. Los chips digitales están hechos de miles de millones de MOSFET (tecnología CMOS), y los MOSFET de potencia gobiernan motores y convertidores con muy pocas pérdidas.</p>
      <p>Los <b>componentes sensores</b> convierten una magnitud física en una variación eléctrica: la <b>LDR</b> disminuye su resistencia con la luz; el <b>termistor NTC</b> la disminuye con la temperatura y el <b>PTC</b> la aumenta; hay también sensores de humedad, presión, distancia por ultrasonidos o infrarrojos. Colocados en un divisor de tensión, generan una tensión que un transistor o un microcontrolador puede interpretar.</p>
      <p>Para cargas de mucha potencia o alterna se usan <b>relés</b> (un electroimán que mueve unos contactos, con aislamiento entre el circuito de control y el de potencia), <b>optoacopladores</b> y <b>triacs</b>.</p>
      <p>El <b>amplificador operacional</b> es un circuito integrado con dos entradas (+ y −) y una salida, con una ganancia enorme. Sin realimentación funciona como <b>comparador</b>: la salida está a nivel alto si V+ &gt; V−, y a nivel bajo en caso contrario. Con resistencias de realimentación construye amplificadores de ganancia fija: en el <b>inversor</b>, G = −R_f / R_1; en el <b>no inversor</b>, G = 1 + R_f / R_1. También suma, resta, integra y filtra señales.</p>`,
      svg: B.cajas("Componentes electrónicos y su función", [["MOSFET", "control por tensión|chips, potencia"], ["LDR / NTC", "sensores|luz, temperatura"], ["Relé", "aísla control|y potencia"], ["Amp. operacional", "compara|y amplifica"]], { t: "Más componentes" }),
    },
    {
      h: "Señales y sistemas de numeración",
      html: `<p>Una señal <b>analógica</b> puede tomar infinitos valores dentro de un intervalo y varía de forma continua. Una señal <b>digital</b> solo toma valores discretos; en electrónica digital binaria, dos: 0 (nivel bajo, cerca de 0 V) y 1 (nivel alto, 3,3 V o 5 V). La ventaja de lo digital es su <mark>inmunidad al ruido</mark>: un 1 sigue siendo un 1 aunque la tensión baje un poco, y los datos se copian, guardan y transmiten sin degradarse.</p>
      <p>Los circuitos digitales trabajan con el <b>sistema binario</b>, de base 2, cuyos dígitos (<b>bits</b>) son 0 y 1. Cada posición vale una potencia de 2: 1011₂ = 1·8 + 0·4 + 1·2 + 1·1 = 11. Para pasar de decimal a binario se divide sucesivamente entre 2 y se leen los restos de abajo arriba.</p>
      <p>Con n bits se representan 2ⁿ valores: 8 bits (un <b>byte</b>) dan 256 combinaciones, de 0 a 255. Como los números binarios son largos, se usa el <b>hexadecimal</b> (base 16, dígitos 0-9 y A-F): cada cifra hexadecimal equivale a cuatro bits. Así, 1010 1111₂ = AF₁₆ = 175. Los colores de una web (#FF8800), las direcciones de memoria y las direcciones MAC se escriben en hexadecimal. Otros códigos binarios representan letras (ASCII, Unicode) o cifras decimales (BCD).</p>`,
      svg: B.rejilla("Equivalencias entre decimal, binario y hexadecimal", ["Decimal", "Binario", "Hex"], [["5", "0101", "5"], ["10", "1010", "A"], ["15", "1111", "F"], ["175", "1010 1111", "AF"], ["255", "1111 1111", "FF"]], { t: "Sistemas de numeración" }),
    },
    {
      h: "Álgebra de Boole",
      html: `<p>George Boole creó un álgebra para la lógica en la que las variables solo pueden valer 0 (falso) o 1 (verdadero). Tiene tres operaciones básicas:</p>
      <ul><li><b>Suma lógica</b> u OR: A + B vale 1 si <b>alguna</b> variable vale 1.</li>
      <li><b>Producto lógico</b> o AND: A · B vale 1 solo si <b>todas</b> valen 1.</li>
      <li><b>Negación</b> o NOT: Ā (o A′) invierte el valor.</li></ul>
      <p>Sus propiedades más útiles para simplificar son:</p>
      <ul><li>A + 0 = A; A + 1 = 1; A · 0 = 0; A · 1 = A.</li>
      <li>A + A = A; A · A = A (idempotencia).</li>
      <li>A + Ā = 1; A · Ā = 0 (complementación).</li>
      <li>Conmutativa, asociativa y distributiva, incluida la que no existe en el álgebra ordinaria: A + B·C = (A + B)·(A + C).</li>
      <li>Absorción: A + A·B = A; A·(A + B) = A. Y también A + Ā·B = A + B.</li>
      <li><b>Leyes de De Morgan</b>: <mark>(A + B)′ = Ā · B̄</mark> y <mark>(A · B)′ = Ā + B̄</mark>. Al negar una suma se obtiene el producto de las negaciones, y al revés.</li></ul>
      <p>Las leyes de De Morgan permiten transformar cualquier función para construirla solo con un tipo de puerta, lo que abarata la fabricación.</p>`,
      svg: B.rejilla("Tablas de verdad de AND, OR y XOR", ["A B", "AND", "OR", "XOR"], [["0 0", "0", "0", "0"], ["0 1", "0", "1", "1"], ["1 0", "0", "1", "1"], ["1 1", "1", "1", "0"]], { t: "Operaciones lógicas" }),
      video: { id: "6fXE2_67z_Q", titulo: "Álgebra booleana para simplificar circuitos lógicos", canal: "El profe García", vistas: 577235 },
    },
    {
      h: "Puertas lógicas",
      html: `<p>Las <b>puertas lógicas</b> son circuitos electrónicos que realizan las operaciones del álgebra de Boole. Cada una tiene un símbolo normalizado y una <b>tabla de verdad</b> que da la salida para todas las combinaciones de entradas:</p>
      <ul><li><b>NOT</b> (inversor): S = Ā.</li>
      <li><b>AND</b>: S = A · B. Equivale a dos interruptores en serie.</li>
      <li><b>OR</b>: S = A + B. Equivale a dos interruptores en paralelo.</li>
      <li><b>NAND</b>: S = (A · B)′, una AND negada.</li>
      <li><b>NOR</b>: S = (A + B)′, una OR negada.</li>
      <li><b>XOR</b> (O exclusiva): S = A ⊕ B = Ā·B + A·B̄. Vale 1 si las entradas son <b>distintas</b>. Se usa en sumadores y comparadores.</li>
      <li><b>XNOR</b>: vale 1 si las entradas son iguales.</li></ul>
      <p>Las puertas NAND y NOR son <b>universales</b>: con cualquiera de ellas, repetida, se puede construir cualquier otra puerta. Por ejemplo, una NAND con las dos entradas unidas es un inversor, y una AND se obtiene con una NAND seguida de un inversor NAND. Las puertas se venden en circuitos integrados (como el 7400, con cuatro NAND, o el 7408, con cuatro AND) de las familias TTL y CMOS, aunque hoy la mayoría de la lógica se programa en microcontroladores o en dispositivos lógicos programables (FPGA).</p>`,
      svg: B.rejilla("Puertas lógicas y sus expresiones", ["Puerta", "Expresión", "Vale 1 si…"], [["AND", "A·B", "todas 1"], ["OR", "A+B", "alguna 1"], ["NAND", "(A·B)′", "no todas 1"], ["NOR", "(A+B)′", "todas 0"], ["XOR", "A⊕B", "distintas"]], { t: "Puertas lógicas" }),
    },
    {
      h: "De la tabla de verdad a la función",
      html: `<p>Diseñar un circuito digital empieza por describir lo que debe hacer con una <b>tabla de verdad</b>: una fila para cada combinación de entradas (2ⁿ filas con n entradas) y la salida deseada en cada una.</p>
      <p>A partir de la tabla se obtiene la función lógica en <b>suma de productos</b> o primera forma canónica: se toma cada fila en la que la salida vale 1 y se escribe un producto (llamado <b>minitérmino</b>) con todas las variables, negando las que valen 0 en esa fila. Después se suman todos. Por ejemplo, si la salida vale 1 en la fila A = 0, B = 1, C = 1, el minitérmino es Ā·B·C.</p>
      <p>También existe la forma de <b>producto de sumas</b> (segunda forma canónica), que usa las filas con salida 0, con sumas de variables y negando las que valen 1.</p>
      <p>Supongamos un sistema de votación de tres jueces A, B y C en el que la luz se enciende si <mark>al menos dos</mark> votan sí. La salida vale 1 en las filas 011, 101, 110 y 111:</p>
      <div class="formula"><span>F = Ā·B·C + A·B̄·C + A·B·C̄ + A·B·C</span></div>
      <p>La función es correcta, pero necesita muchas puertas: cuatro AND de tres entradas, una OR de cuatro y varios inversores. Antes de construirla conviene <b>simplificarla</b>: con menos puertas el circuito es más barato, más rápido y consume menos.</p>`,
      svg: B.rejilla("Tabla de verdad del circuito de votación por mayoría", ["A B C", "F", "A B C", "F"], [["0 0 0", "0", "1 0 0", "0"], ["0 0 1", "0", "1 0 1", "1"], ["0 1 0", "0", "1 1 0", "1"], ["0 1 1", "1", "1 1 1", "1"]], { t: "Votación por mayoría" }),
    },
    {
      h: "Simplificación: álgebra y mapas de Karnaugh",
      html: `<p>Una función se puede simplificar aplicando las propiedades del álgebra de Boole, sobre todo sacando factor común y usando A + Ā = 1. Por ejemplo: Ā·B + A·B = (Ā + A)·B = B. Pero en funciones largas es fácil equivocarse, y por eso se usan los <b>mapas de Karnaugh</b>.</p>
      <p>Un mapa de Karnaugh es una tabla con una casilla por cada combinación de entradas, ordenadas en <b>código Gray</b> (00, 01, 11, 10), de forma que dos casillas vecinas solo se diferencian en una variable. Se escribe un 1 en las casillas donde la función vale 1 y se procede así:</p>
      <ol><li>Agrupar los unos en rectángulos de <b>1, 2, 4, 8…</b> casillas (potencias de 2), lo más grandes posible.</li>
      <li>Los grupos pueden solaparse, y los bordes opuestos del mapa se consideran contiguos.</li>
      <li>Usar el menor número de grupos que cubra todos los unos.</li>
      <li>Cada grupo da un producto con las variables que <mark>no cambian</mark> dentro del grupo: las que cambian desaparecen.</li></ol>
      <p>En el ejemplo de la votación se forman tres grupos de dos casillas, que dan F = A·B + A·C + B·C: tres puertas AND de dos entradas y una OR. Si en algunas combinaciones la salida no importa (porque nunca ocurren), se marcan con X y se pueden incluir en los grupos si ayudan a hacerlos más grandes.</p>`,
      svg: karnaugh(["011", "111", "101", "110"], [[2, 0, 1, 2, "var(--red)"], [1, 1, 2, 1, "var(--leaf)"], [2, 1, 2, 1, "var(--pen)"]]),
      video: { id: "8WgEmX0ExaY", titulo: "Mapas de Karnaugh para simplificar circuitos", canal: "El profe García", vistas: 1174107 },
    },
    {
      h: "Diseño de circuitos combinacionales",
      html: `<p>Un circuito <b>combinacional</b> es aquel cuya salida depende solo del valor actual de las entradas. El proceso de diseño sigue siempre los mismos pasos:</p>
      <ol><li>Definir las <b>entradas</b> y <b>salidas</b> y qué significa el 1 en cada una (por ejemplo, P = 1: puerta abierta).</li>
      <li>Construir la <b>tabla de verdad</b> con el comportamiento deseado.</li>
      <li>Obtener la función en suma de productos.</li>
      <li><b>Simplificarla</b> con Karnaugh o álgebra.</li>
      <li>Dibujar el <b>circuito con puertas</b> (o pasarlo a solo NAND con De Morgan) y comprobarlo en un simulador.</li></ol>
      <p>Hay circuitos combinacionales tan frecuentes que se fabrican ya integrados:</p>
      <ul><li><b>Codificadores</b>: convierten una entrada activa de entre varias (una tecla) en un código binario.</li>
      <li><b>Decodificadores</b>: hacen lo contrario; el decodificador BCD a 7 segmentos enciende los segmentos de un display para mostrar una cifra.</li>
      <li><b>Multiplexores</b>: eligen cuál de varias entradas pasa a la salida, según unas líneas de selección; los <b>demultiplexores</b> reparten una entrada entre varias salidas.</li>
      <li><b>Comparadores</b> y <b>sumadores</b>: el semisumador suma dos bits con una XOR (suma) y una AND (acarreo); encadenando sumadores completos se suman números de muchos bits. Es el núcleo de la unidad aritmético-lógica de un procesador.</li></ul>`,
      svg: B.flujo("Pasos para diseñar un circuito combinacional", ["Entradas y salidas", "Tabla de verdad", "Suma de productos", "Simplificar (Karnaugh)", "Circuito con puertas"], { t: "Diseño combinacional" }),
    },
    {
      h: "Circuitos secuenciales y memoria",
      html: `<p>En un circuito <b>secuencial</b>, la salida depende de las entradas y también de lo que ocurrió antes: el circuito tiene <b>memoria</b>. El elemento básico es el <b>biestable</b> o <i>flip-flop</i>, capaz de guardar un bit.</p>
      <ul><li>El biestable <b>RS</b> tiene dos entradas: S (set) pone la salida a 1 y R (reset) la pone a 0; si ninguna está activa, conserva el valor anterior. Así funciona el circuito de marcha y paro de un motor con dos pulsadores.</li>
      <li>El biestable <b>D</b> copia la entrada D en la salida en el instante en que llega un flanco de la señal de <b>reloj</b>.</li>
      <li>El biestable <b>JK</b> y el <b>T</b> pueden además cambiar de estado (bascular) en cada pulso, lo que permite dividir frecuencias.</li></ul>
      <p>Combinando biestables se construyen <b>registros</b> (que guardan varios bits a la vez), <b>registros de desplazamiento</b> (que mueven los bits una posición en cada pulso, usados en comunicaciones serie), <b>contadores</b> (que cuentan pulsos: en un reloj digital, el de segundos, el de minutos…) y <b>memorias</b>. La memoria RAM de un ordenador está formada por miles de millones de celdas que guardan bits.</p>
      <p>Los sistemas secuenciales se describen con <b>diagramas de estados</b>: un semáforo pasa de verde a ámbar y de ámbar a rojo según un reloj y unas condiciones. Es la base de los autómatas que estudiarás en el tema de control.</p>`,
      svg: B.flujo("Secuencia de estados de un semáforo controlada por un reloj", ["Estado 1: verde (30 s)", "Estado 2: ámbar (3 s)", "Estado 3: rojo (30 s)", "Vuelta al estado 1"], { t: "Estados de un semáforo" }),
    },
    {
      h: "Conversión analógico-digital",
      html: `<p>El mundo es analógico (temperatura, sonido, luz) y los procesadores son digitales. El <b>conversor analógico-digital</b> (ADC) transforma una tensión en un número binario. Hace dos cosas:</p>
      <ul><li><b>Muestreo</b>: toma medidas a intervalos regulares. Según el teorema de Nyquist, la <b>frecuencia de muestreo</b> debe ser al menos el doble de la frecuencia máxima de la señal: por eso el audio se muestrea a 44,1 kHz, el doble de los 20 kHz que oímos.</li>
      <li><b>Cuantificación</b>: asigna a cada medida el número entero más próximo. Con n bits hay 2ⁿ niveles, y la <b>resolución</b> (el menor cambio de tensión que se distingue) es:</li></ul>
      <div class="formula"><span>resolución = V_ref / 2ⁿ   ·   valor digital = V · 2ⁿ / V_ref</span></div>
      <p>Una placa Arduino Uno tiene un ADC de 10 bits con V_ref = 5 V: distingue 1024 niveles con una resolución de 4,9 mV, y una lectura de 512 corresponde a unos 2,5 V. Un audio de 16 bits tiene 65 536 niveles.</p>
      <p>El proceso inverso lo hace el <b>conversor digital-analógico</b> (DAC), presente en cualquier aparato que reproduzca sonido. Muchos microcontroladores no tienen DAC y simulan tensiones intermedias con <b>PWM</b> (modulación por ancho de pulso): una señal que se enciende y apaga muy rápido, cuyo valor medio depende del porcentaje de tiempo encendida (ciclo de trabajo). Así se regula el brillo de un LED o la velocidad de un motor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Señal analógica continua y su versión muestreada y cuantificada en escalones">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Muestreo y cuantificación", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M24 150 H 240 M24 150 V 34" stroke="var(--ink)" stroke-width="1.8"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map((k) => `<path d="M24 ${150 - k * 14} H 240" stroke="var(--line)" stroke-width="1"/>`).join("")}
        <path d="M24 108 ${Array.from({ length: 43 }, (_, k) => `L ${24 + k * 5} ${(108 - 46 * Math.sin((k / 42) * 1.6 * Math.PI)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        ${Array.from({ length: 11 }, (_, k) => { const x = 24 + k * 20, y = 108 - 46 * Math.sin(((k * 4) / 42) * 1.6 * Math.PI), q = 150 - Math.round((150 - y) / 14) * 14; return `<path d="M${x} ${q} H ${x + 20}" stroke="var(--red)" stroke-width="3"/><circle cx="${x}" cy="${y.toFixed(1)}" r="2.8" fill="var(--sun)"/>`; }).join("")}
        ${B.tx(70, 168, "analógica", { fs: 10.5, maxW: 70, bold: true, color: "var(--pen)" })}${B.tx(180, 168, "digital (niveles)", { fs: 10.5, maxW: 100, bold: true, color: "var(--red)" })}
      </svg>`,
      video: { id: "5uz7VZ-LvcQ", titulo: "Conversión analógico-digital, parte 1", canal: "Electrónica FP", vistas: 169258 },
    },
  ],
  figura: {
    titulo: "Fórmulas y leyes clave de la electrónica",
    items: [["Transistor", "I_C = β · I_B", "corte, activa", "y saturación"], ["Binario", "1011₂ = 11", "n bits:", "2ⁿ valores"], ["De Morgan", "(A·B)′ = Ā + B̄", "(A+B)′", "= Ā · B̄"], ["ADC", "V_ref / 2ⁿ", "resolución", "de la medida"]],
  },
  video: { id: "hsJGw_c-Nn4", titulo: "La unión PN: ¿cómo funcionan los diodos?", canal: "fmgomezcampos", vistas: 449083 },
  quiz: [
    ["El silicio dopado con fósforo es de tipo…", ["P", "N", "intrínseco", "aislante"], 1, "El fósforo aporta electrones libres."],
    ["Un diodo de silicio en directa conduce a partir de…", ["0 V", "0,7 V", "5 V", "230 V"], 1, "Es la tensión umbral."],
    ["Un puente de cuatro diodos es un rectificador de…", ["media onda", "onda completa", "frecuencia", "tensión inversa"], 1, "Aprovecha los dos semiciclos."],
    ["El diodo Zener se usa para…", ["emitir luz", "mantener una tensión constante", "amplificar", "contar pulsos"], 1, "Trabaja en inversa como regulador."],
    ["En un transistor, I_C = β · I_B se cumple en la zona…", ["de corte", "activa", "de saturación", "de ruptura"], 1, "En saturación I_C ya no crece con I_B."],
    ["Un transistor usado como interruptor trabaja en…", ["zona activa", "corte y saturación", "solo corte", "ruptura"], 1, "Abierto en corte, cerrado en saturación."],
    ["El MOSFET se controla por…", ["corriente de base", "tensión de puerta", "luz", "temperatura"], 1, "Su puerta casi no consume corriente."],
    ["Un amplificador no inversor con R_f = 9 kΩ y R_1 = 1 kΩ tiene una ganancia de…", ["9", "10", "−9", "0,1"], 1, "G = 1 + 9/1 = 10."],
    ["El número 13 en binario es…", ["1011", "1101", "1110", "1001"], 1, "8 + 4 + 1 = 13."],
    ["El hexadecimal FF equivale a…", ["15", "255", "256", "1515"], 1, "15 · 16 + 15 = 255."],
    ["¿Cuántos valores se representan con 8 bits?", ["8", "64", "256", "1024"], 2, "2⁸ = 256."],
    ["A + Ā =", ["0", "1", "A", "Ā"], 1, "Complementación."],
    ["Según De Morgan, (A · B)′ =", ["Ā · B̄", "Ā + B̄", "A + B", "(A + B)′"], 1, "Al negar un producto se obtiene la suma de las negaciones."],
    ["A + A · B =", ["A · B", "A", "B", "1"], 1, "Ley de absorción."],
    ["La puerta que da 1 cuando las entradas son distintas es…", ["AND", "NOR", "XOR", "NAND"], 2, "O exclusiva."],
    ["¿Qué puertas son universales?", ["AND y OR", "NAND y NOR", "XOR y XNOR", "NOT"], 1, "Con ellas se construye cualquier otra."],
    ["Una función de 4 variables tiene una tabla de verdad de…", ["4 filas", "8 filas", "16 filas", "32 filas"], 2, "2⁴ = 16."],
    ["En un mapa de Karnaugh, los grupos deben tener…", ["cualquier número de casillas", "1, 2, 4, 8… casillas", "solo 2 casillas", "3 casillas"], 1, "Potencias de 2."],
    ["El biestable es un circuito…", ["combinacional", "secuencial que guarda un bit", "analógico", "de potencia"], 1, "Es la unidad básica de memoria."],
    ["La resolución de un ADC de 10 bits y 5 V es…", ["0,5 V", "4,9 mV", "50 mV", "1 mV"], 1, "5 / 1024 ≈ 4,9 mV."],
  ],
  examen: [
    ["LED rojo (2 V, 15 mA) a 5 V. Resistencia en serie:", ["200 Ω", "333 Ω", "133 Ω", "467 Ω"], 0, "R = (5 − 2) / 0,015 = 200 Ω."],
    ["Transistor con β = 150 e I_B = 0,2 mA en zona activa. I_C =", ["30 mA", "0,75 mA", "150 mA", "3 mA"], 0, "I_C = 150 · 0,2 = 30 mA."],
    ["Un relé de 90 mA con un transistor de β = 100. I_B mínima para saturar:", ["9 mA", "0,9 mA", "90 mA", "0,09 mA"], 1, "I_B = 90 / 100 = 0,9 mA."],
    ["Pasa 1001 1100₂ a decimal.", ["156", "92", "140", "198"], 0, "128 + 16 + 8 + 4 = 156."],
    ["Simplifica F = Ā·B + A·B.", ["A", "B", "A + B", "1"], 1, "B·(Ā + A) = B."],
    ["Simplifica F = A + Ā·B.", ["A · B", "A + B", "B", "1"], 1, "Propiedad: A + Ā·B = A + B."],
    ["Función con 1 en las filas 001, 011, 101 y 111 (A B C). Simplificada:", ["A", "B", "C", "A·C"], 2, "En las cuatro, C = 1 y A y B toman todos los valores."],
    ["ADC de 8 bits con V_ref = 5 V mide 3 V. Valor digital aproximado:", ["153", "60", "255", "192"], 0, "3 · 256 / 5 = 153,6 → 153."],
  ],
  feynman: ["Qué es un semiconductor y cómo funciona una unión PN", "Cómo se convierte la corriente alterna en continua", "Cómo funciona un transistor como interruptor", "Cómo se pasa un número de decimal a binario y a hexadecimal", "Qué dicen las leyes de De Morgan", "Cómo se simplifica una función con un mapa de Karnaugh"],
  mapa: ["ELECTRÓNICA", [["Analógica", "diodo · transistor · A.O."], ["Numeración", "binario · hexadecimal · bits"], ["Lógica", "Boole · puertas · Karnaugh"], ["Sistemas", "secuenciales · ADC · PWM"]]],
  tarjetas: [
    ["Tipos de semiconductor", "N: dopado con fósforo (electrones). P: con boro (huecos)."],
    ["Diodo", "Conduce de ánodo a cátodo a partir de 0,7 V (silicio)."],
    ["Fuente lineal", "Transformador, rectificador, filtro y regulador."],
    ["Transistor bipolar", "I_C = β · I_B; corte, activa y saturación."],
    ["Resistencia de base", "R_B = (V_entrada − 0,7) / I_B, con I_B de 2 a 5 veces I_C / β."],
    ["Amplificador operacional", "Inversor G = −R_f/R_1; no inversor G = 1 + R_f/R_1."],
    ["Binario y hexadecimal", "Base 2 y base 16; cada cifra hex son 4 bits."],
    ["Leyes de De Morgan", "(A+B)′ = Ā·B̄; (A·B)′ = Ā + B̄."],
    ["Puertas universales", "NAND y NOR."],
    ["Karnaugh", "Grupos de 1, 2, 4, 8 unos; desaparecen las variables que cambian."],
    ["Biestable", "Circuito secuencial que guarda un bit (RS, D, JK, T)."],
    ["Resolución de un ADC", "V_ref / 2ⁿ."],
  ],
  ejemplos: [
    ["Una salida de microcontrolador de 5 V debe activar un relé de 12 V que consume 60 mA mediante un transistor con β = 100. Calcula R_B con un factor de seguridad de 3.", ["I_B mínima = I_C / β = 60 / 100 = 0,6 mA.", "Con factor 3: I_B = 1,8 mA.", "R_B = (5 − 0,7) / 0,0018 = 2389 Ω → valor comercial inferior: 2,2 kΩ."], "R_B = 2,2 kΩ (I_B ≈ 1,95 mA, saturación asegurada)."],
    ["Pasa 45 a binario y a hexadecimal, y AF₁₆ a decimal.", ["45 / 2: restos 1, 0, 1, 1, 0, 1 → de abajo arriba 101101₂.", "Agrupando de 4 en 4: 0010 1101 = 2D₁₆.", "AF₁₆ = 10 · 16 + 15 = 175."], "45 = 101101₂ = 2D₁₆; AF₁₆ = 175."],
    ["Simplifica por álgebra F = Ā·B̄·C + Ā·B·C + A·B̄·C + A·B·C.", ["Se saca factor común Ā·C en los dos primeros: Ā·C·(B̄ + B) = Ā·C.", "Y A·C en los dos últimos: A·C·(B̄ + B) = A·C.", "F = Ā·C + A·C = C·(Ā + A) = C."], "F = C."],
    ["Una alarma de coche debe sonar (S = 1) si el motor está en marcha (M = 1) y el cinturón no está abrochado (C = 0) o la puerta está abierta (P = 1). Obtén la función y el circuito.", ["Tabla: S = 1 en las filas con M = 1 y (C = 0 o P = 1): M C P = 100, 101, 111.", "S = M·C̄·P̄ + M·C̄·P + M·C·P = M·C̄ + M·C·P.", "Simplificando: S = M·(C̄ + C·P) = M·(C̄ + P)."], "S = M · (C̄ + P): un inversor, una OR y una AND."],
    ["Escribe la función de votación por mayoría F = A·B + A·C + B·C solo con puertas NAND.", ["Doble negación: F = ((A·B + A·C + B·C)′)′.", "Por De Morgan: F = ((A·B)′ · (A·C)′ · (B·C)′)′.", "Cada (X·Y)′ es una NAND de dos entradas, y la expresión exterior es una NAND de tres entradas."], "Tres NAND de dos entradas y una NAND de tres entradas."],
    ["Un sensor de temperatura da 10 mV/°C y se lee con un ADC de 10 bits y 5 V. ¿Qué lectura corresponde a 25 °C? ¿Qué resolución en grados tiene?", ["A 25 °C: V = 0,25 V.", "Lectura = 0,25 · 1024 / 5 = 51,2 → 51.", "Resolución = 4,88 mV, que equivale a 0,49 °C."], "Lectura 51; resolución ≈ 0,5 °C."],
  ],
  errores: [
    "Conectar un LED sin resistencia o al revés.",
    "Olvidar restar los 0,7 V de la unión base-emisor al calcular R_B.",
    "Usar la fórmula I_C = β·I_B en saturación, donde ya no se cumple.",
    "Leer al revés los restos al pasar de decimal a binario.",
    "Aplicar mal De Morgan: al negar una suma se cambia a producto y se niega cada variable.",
    "En Karnaugh, hacer grupos de 3 o 6 casillas, o no aprovechar la adyacencia de los bordes.",
  ],
  ejercicios: {
    b: [
      ["¿Qué diferencia hay entre un semiconductor tipo N y uno tipo P?", "El N tiene impurezas que aportan electrones libres (fósforo); el P, impurezas que dejan huecos (boro)."],
      ["Calcula la resistencia para un LED blanco (3 V, 20 mA) alimentado a 9 V.", "R = (9 − 3) / 0,02 = 300 Ω (comercial 330 Ω)."],
      ["Ordena las etapas de una fuente de alimentación lineal.", "Transformador, rectificador, filtro y regulador."],
      ["Nombra los terminales de un transistor bipolar y sus tres zonas de trabajo.", "Base, colector y emisor. Corte, activa y saturación."],
      ["Un transistor con β = 200 tiene I_B = 50 µA en zona activa. Calcula I_C e I_E.", "I_C = 200 · 50 µA = 10 mA. I_E = 10,05 mA."],
      ["¿Cómo varía la resistencia de una LDR y de un NTC?", "La LDR disminuye al aumentar la luz; el NTC disminuye al aumentar la temperatura."],
      ["Pasa a decimal: 1010₂, 11111₂ y 1000 0000₂.", "10, 31 y 128."],
      ["Pasa a binario: 6, 20 y 100.", "110, 10100 y 1100100."],
      ["Escribe la tabla de verdad de una puerta NAND de dos entradas.", "00 → 1; 01 → 1; 10 → 1; 11 → 0."],
      ["Calcula: 1 + 0, 1 · 0, A · 1, A + 1, A · Ā.", "1, 0, A, 1 y 0."],
      ["¿Qué diferencia hay entre un circuito combinacional y uno secuencial?", "En el combinacional la salida depende solo de las entradas actuales; en el secuencial también de su estado anterior (tiene memoria)."],
      ["¿Cuántos niveles distingue un ADC de 12 bits?", "2¹² = 4096 niveles."],
    ],
    m: [
      ["Calcula R_B para que un transistor (β = 80) sature con una carga de 200 mA, con 3,3 V de entrada y factor 2.", "I_B = 2 · 200 / 80 = 5 mA. R_B = (3,3 − 0,7) / 0,005 = 520 Ω → 470 Ω."],
      ["Un amplificador inversor tiene R_1 = 2 kΩ y R_f = 20 kΩ. Si la entrada es 0,3 V, ¿cuál es la salida?", "G = −10. V_s = −3 V."],
      ["Un comparador tiene en V− una referencia de 2,5 V y en V+ un divisor con una LDR. ¿Cuándo se enciende la salida?", "Cuando la tensión del divisor supera 2,5 V, que según la colocación de la LDR ocurrirá con mucha o con poca luz."],
      ["Pasa 0x3C y 0x7F a binario y decimal.", "3C = 0011 1100₂ = 60. 7F = 0111 1111₂ = 127."],
      ["Comprueba con una tabla de verdad la ley de De Morgan (A + B)′ = Ā · B̄.", "A B: 00 → (0)′ = 1 y 1·1 = 1; 01 → 0 y 1·0 = 0; 10 → 0 y 0·1 = 0; 11 → 0 y 0. Coinciden."],
      ["Simplifica F = A·B + A·B̄ + Ā·B.", "A·(B + B̄) + Ā·B = A + Ā·B = A + B."],
      ["Simplifica F = (A + B)·(A + C).", "Por la distributiva: F = A + B·C."],
      ["Obtén la función en suma de productos de una tabla con F = 1 en las filas 000, 010 y 110 (A B C) y simplifícala.", "F = Ā·B̄·C̄ + Ā·B·C̄ + A·B·C̄ = Ā·C̄ + B·C̄ = C̄·(Ā + B)."],
      ["Demuestra que una NAND con las dos entradas unidas es un inversor.", "S = (A · A)′ = Ā, porque A · A = A."],
      ["Diseña el circuito de un semisumador de dos bits A y B.", "Suma S = A ⊕ B (puerta XOR). Acarreo C = A · B (puerta AND)."],
      ["Un motor tiene un pulsador de marcha (S) y otro de paro (R). ¿Qué tipo de circuito necesitas y por qué?", "Un biestable RS (secuencial): al soltar el pulsador de marcha el motor debe seguir funcionando, así que hay que recordar el estado."],
      ["Un ADC de 10 bits y 3,3 V lee 620. ¿Qué tensión mide?", "V = 620 · 3,3 / 1024 = 2,0 V."],
      ["Un LED se controla con PWM a 5 V con un ciclo de trabajo del 30 %. ¿Qué tensión media recibe?", "V_media = 0,3 · 5 = 1,5 V; el LED parece brillar al 30 %."],
    ],
    a: [
      ["Diseña un circuito que encienda una lámpara de escalera con dos interruptores (A abajo, B arriba), de modo que cualquiera de ellos cambie su estado. Obtén la tabla, la función y las puertas.", "Tabla: 00 → 0, 01 → 1, 10 → 1, 11 → 0. F = Ā·B + A·B̄ = A ⊕ B: una puerta XOR (equivalente al conmutado de escalera)."],
      ["Un depósito tiene tres sensores de nivel (A bajo, B medio, C alto; 1 = hay agua). La bomba (F) funciona si el nivel está por debajo de medio. Indica qué combinaciones son imposibles y obtén F con Karnaugh usando indiferencias.", "Combinaciones posibles: 000, 100, 110, 111. Imposibles (X): 001, 010, 011, 101. F = 1 en 000 y 100. Con las X, el grupo más sencillo es F = B̄ (B = 0: por debajo del nivel medio)."],
      ["Simplifica con Karnaugh F(A,B,C,D) con unos en 0000, 0010, 1000, 1010 (las cuatro esquinas).", "Las cuatro esquinas son adyacentes entre sí: forman un grupo de 4 en el que B = 0 y D = 0. F = B̄·D̄."],
      ["Diseña un detector de números primos para un número de 3 bits (A B C, de 0 a 7), sin considerar el 1 como primo.", "Primos: 2 (010), 3 (011), 5 (101), 7 (111). Karnaugh: Ā·B (010, 011) y A·C (101, 111). F = Ā·B + A·C."],
      ["Una fuente lineal da 12 V de pico tras el puente (considerando las caídas de los diodos) y debe alimentar un 7805. Si la carga consume 0,5 A, ¿qué potencia disipa el regulador si la tensión media de entrada es 11 V? ¿Qué rendimiento tiene?", "P = (11 − 5) · 0,5 = 3 W de calor (necesita disipador). η ≈ 5 / 11 = 45 %. Por eso hoy se prefieren las fuentes conmutadas."],
      ["Explica por qué una resistencia de 10 kΩ conectada como pull-down en una entrada digital es necesaria cuando hay un pulsador.", "Sin ella, la entrada queda flotando cuando el pulsador está abierto y lee valores aleatorios por el ruido. La resistencia la fija a 0 V; al pulsar, la entrada pasa a 5 V a través del pulsador, y la resistencia limita la corriente a 0,5 mA."],
      ["Calcula la frecuencia de muestreo mínima y la cantidad de datos por minuto de un audio estéreo de 16 bits con contenido hasta 20 kHz, si se muestrea a 44,1 kHz.", "Mínima: 40 kHz (Nyquist). Datos: 44 100 · 16 · 2 = 1 411 200 bit/s; por minuto, 84,7 Mbit ≈ 10,6 MB."],
      ["Con un ADC de 10 bits y 5 V se lee una NTC en un divisor con una resistencia fija de 10 kΩ (NTC abajo). Si la lectura es 341, ¿qué resistencia tiene la NTC?", "V = 341 · 5 / 1024 = 1,665 V. V = 5 · R_NTC / (10 000 + R_NTC) → 1,665 · (10 000 + R) = 5R → 16 650 = 3,335R → R ≈ 4993 Ω ≈ 5 kΩ."],
      ["Implementa F = A·B + C solo con puertas NOR.", "F = ((A·B + C)′)′. A·B = (Ā + B̄)′: NOR de Ā y B̄, con Ā y B̄ obtenidos con NOR de entradas unidas. Luego (A·B + C)′ es una NOR de (A·B) y C, y se niega con otra NOR de entradas unidas. Total: 5 puertas NOR."],
      ["Un contador binario de 4 bits recibe pulsos de 1 Hz. ¿Hasta qué número cuenta y cada cuánto se repite? ¿Cuántos bits harían falta para contar los segundos de un día?", "Cuenta de 0 a 15 y se repite cada 16 s. Un día tiene 86 400 s: 2¹⁶ = 65 536 no llega, 2¹⁷ = 131 072 sí; harían falta 17 bits."],
    ],
  },
  glosario: [
    ["Semiconductor", "Material de conductividad intermedia controlable con impurezas."],
    ["Dopado", "Adición de impurezas a un semiconductor para crear zonas N o P."],
    ["Diodo", "Componente que solo deja pasar la corriente en un sentido."],
    ["Rectificador", "Circuito que convierte corriente alterna en continua."],
    ["Diodo Zener", "Diodo que mantiene una tensión constante en inversa."],
    ["Transistor", "Componente que amplifica o conmuta una corriente con otra menor."],
    ["Saturación", "Zona en la que el transistor conduce al máximo, como un interruptor cerrado."],
    ["Amplificador operacional", "Circuito integrado de gran ganancia que compara y amplifica."],
    ["Bit", "Dígito binario: 0 o 1."],
    ["Hexadecimal", "Sistema de numeración de base 16."],
    ["Álgebra de Boole", "Álgebra de variables que solo valen 0 o 1."],
    ["Puerta lógica", "Circuito que realiza una operación lógica."],
    ["Tabla de verdad", "Tabla con la salida para todas las combinaciones de entradas."],
    ["Mapa de Karnaugh", "Método gráfico para simplificar funciones lógicas."],
    ["Biestable", "Circuito secuencial que almacena un bit."],
    ["Contador", "Circuito secuencial que cuenta pulsos de reloj."],
    ["ADC", "Conversor que transforma una tensión en un número binario."],
    ["PWM", "Modulación por ancho de pulso para obtener tensiones medias."],
  ],
  situacion: {
    titulo: "El sistema de votación del consejo escolar",
    reto: "El consejo de delegados quiere un dispositivo para votar en las asambleas: tres representantes pulsan sí o no y un LED verde indica si hay mayoría, un LED amarillo si hay unanimidad y un display muestra el número de votos a favor.",
    pasos: [
      "Definid entradas y salidas y escribid las tablas de verdad de las tres salidas.",
      "Obtened y simplificad las funciones con mapas de Karnaugh.",
      "Simulad el circuito con puertas lógicas en un simulador digital y comprobad todas las combinaciones.",
      "Montadlo en placa de prototipos con integrados de puertas, pulsadores con resistencias pull-down y LED con su resistencia limitadora.",
      "Añadid un decodificador a 7 segmentos para mostrar el recuento.",
      "Comparad vuestra solución con otra programada en un microcontrolador.",
    ],
    producto: "El circuito montado y funcionando, con el esquema, las tablas de verdad y las funciones simplificadas.",
    evaluacion: [
      "Las tablas de verdad describen correctamente el comportamiento pedido.",
      "Las funciones están bien simplificadas y el circuito usa pocas puertas.",
      "El montaje es ordenado, con resistencias de pull-down y limitadoras bien calculadas.",
      "Se valora con criterio la solución cableada frente a la programada.",
    ],
  },
  familias: [
    "Pedidle que os enseñe a contar con los dedos en binario: con una mano se llega hasta 31.",
    "Buscad en casa aparatos con LED, sensores de luz o pantallas de siete segmentos.",
    "Comentad juntos qué decisiones de casa siguen una lógica AND u OR (por ejemplo, salir si llueve y hay paraguas).",
    "Mirad el código de color de una página web en hexadecimal y descifrad cuánto rojo, verde y azul tiene.",
  ],
  saberes: "Sistemas eléctricos y electrónicos: componentes electrónicos analógicos (diodos, transistores, amplificadores operacionales), fuentes de alimentación, sistemas de numeración, álgebra de Boole, puertas lógicas, simplificación de funciones por Karnaugh, circuitos combinacionales y secuenciales y conversión analógico-digital (RD 243/2022, Tecnología e Ingeniería I, bloque D).",
  ideas: [
    "Montar un interruptor crepuscular con LDR, transistor y relé, y medir sus tensiones.",
    "Usar un simulador de lógica digital gratuito para comprobar las simplificaciones de Karnaugh.",
    "Construir un sumador de 2 bits con integrados 7486 y 7408.",
    "Leer un sensor analógico con Arduino y representar los datos del ADC en el monitor serie.",
  ],
  fuentes: [
    { t: "Álgebra de Boole, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole" },
    { t: "Mapa de Karnaugh, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mapa_de_Karnaugh" },
  ],
});
