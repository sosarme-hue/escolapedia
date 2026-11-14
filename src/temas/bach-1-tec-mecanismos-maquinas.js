// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Rueda dentada simplificada: círculo con dientes.
const rueda = (cx, cy, r, z, c) => {
  const d = Array.from({ length: z }, (_, i) => { const a = (i * 2 * Math.PI) / z;
    return `<rect x="${(cx + (r + 3) * Math.cos(a) - 4).toFixed(1)}" y="${(cy + (r + 3) * Math.sin(a) - 4).toFixed(1)}" width="8" height="8" fill="${c}" transform="rotate(${((a * 180) / Math.PI).toFixed(1)} ${(cx + (r + 3) * Math.cos(a)).toFixed(1)} ${(cy + (r + 3) * Math.sin(a)).toFixed(1)})"/>`; }).join("");
  return `${d}<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--paper)"/>`;
};

module.exports = B.tema({
  titulo: "Mecanismos y máquinas",
  minutos: 115,
  objetivos: [
    "Analizar mecanismos de transmisión y de transformación del movimiento y calcular relaciones de transmisión",
    "Relacionar velocidad, par y potencia en una transmisión, teniendo en cuenta el rendimiento",
    "Describir los elementos auxiliares de las máquinas: ejes, rodamientos, embragues y frenos",
    "Explicar el funcionamiento de los motores térmicos y eléctricos y calcular cilindrada, relación de compresión y rendimiento",
  ],
  claves: ["máquina", "palanca", "polea", "relación de transmisión", "engranaje", "tren de engranajes", "biela-manivela", "par motor", "potencia", "rendimiento", "motor de cuatro tiempos"],
  pregunta: {
    texto: "Una bicicleta de montaña tiene 24 marchas y el motor de un coche gira a 3000 vueltas por minuto, pero sus ruedas giran mucho más despacio. ¿Para qué sirven tantos engranajes?",
    respuesta: "Para <mark>adaptar la velocidad y la fuerza</mark>. Un motor o unas piernas dan su mejor rendimiento en un rango concreto de giro; los mecanismos de transmisión reducen o aumentan la velocidad y, a cambio, aumentan o reducen el <b>par</b>. La potencia se mantiene (salvo pérdidas): lo que se gana en fuerza se pierde en velocidad.",
  },
  lectura: {
    titulo: "El ordenador de bronce",
    html: `<p>En 1901, unos buzos que buscaban esponjas frente a la isla griega de Anticitera encontraron los restos de un naufragio de hace más de dos mil años. Entre estatuas y ánforas apareció un bloque de bronce corroído que nadie supo interpretar durante décadas. Las radiografías revelaron que dentro había al menos treinta ruedas dentadas, algunas de pocos milímetros, engranadas con una precisión asombrosa.</p>
    <p>Aquel mecanismo era una calculadora astronómica: al girar una manivela, sus engranajes reproducían el movimiento del Sol y de la Luna, predecían eclipses y marcaban la fecha de los Juegos Olímpicos. Hasta los relojes medievales, más de mil años después, no se volvió a construir nada parecido.</p>
    <p>Las ruedas dentadas, las palancas, las poleas y las bielas siguen hoy en todas partes: en la caja de cambios de un coche, en un robot de cocina, en las articulaciones de una excavadora o en el reloj de pulsera. Entender cómo transmiten y transforman el movimiento, y cómo reparten la velocidad y la fuerza, es la base de la ingeniería mecánica que estudiarás en este tema.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Máquinas y mecanismos",
      html: `<p>Una <b>máquina</b> es un conjunto de elementos que transforma una energía en otra o en trabajo útil: un motor transforma energía química o eléctrica en energía mecánica; una grúa la usa para elevar cargas. Las máquinas se componen de <b>mecanismos</b>, conjuntos de piezas que <mark>transmiten o transforman fuerzas y movimientos</mark> desde un elemento motor (o de entrada) hasta un elemento receptor (o de salida).</p>
      <p>Los mecanismos se clasifican según lo que hacen con el movimiento:</p>
      <ul><li><b>De transmisión</b>: llevan el movimiento de un lugar a otro sin cambiar su tipo. Lineal a lineal (palancas, poleas) o circular a circular (ruedas de fricción, poleas con correa, engranajes, cadenas, tornillo sinfín).</li>
      <li><b>De transformación</b>: cambian el tipo de movimiento. Circular a lineal (piñón-cremallera, tornillo-tuerca, torno), circular a alternativo (biela-manivela, excéntrica, leva) y viceversa.</li></ul>
      <p>Además, toda máquina necesita <b>elementos auxiliares</b>: ejes que soportan las piezas giratorias, rodamientos que reducen el rozamiento, embragues que conectan y desconectan, frenos que detienen y elementos de unión. En la industria, la combinación de mecanismos con motores, sensores y control da lugar a la <b>mecatrónica</b>.</p>`,
      svg: B.capas("Clasificación de los mecanismos", [["Transmisión", "lineal o circular"], ["Transformación", "circular ↔ lineal"], ["Auxiliares", "ejes, rodamientos"], ["Control", "embragues, frenos"]], { t: "Mecanismos" }),
    },
    {
      h: "Trabajo, potencia y rendimiento",
      html: `<p>Cuando una fuerza desplaza su punto de aplicación, realiza un <b>trabajo</b>: W = F · d (en julios, si la fuerza va en la dirección del desplazamiento). En los movimientos de giro, el papel de la fuerza lo hace el <b>par</b> o momento torsor M (en N·m), y el del desplazamiento, el ángulo girado.</p>
      <p>La <b>potencia</b> es el trabajo realizado por unidad de tiempo, P = W / t, y se mide en vatios (W). En el movimiento lineal y en el de giro:</p>
      <div class="formula"><span>P = F · v   ·   P = M · ω</span></div>
      <p>La velocidad angular ω se mide en radianes por segundo; si se conoce la velocidad de giro n en revoluciones por minuto, ω = 2π · n / 60. Todavía se usa el caballo de vapor: 1 CV = 735,5 W.</p>
      <p>Ninguna máquina es perfecta: parte de la energía se pierde en rozamientos, calor, ruido y vibraciones. El <b>rendimiento</b> η compara la energía o potencia útil con la consumida:</p>
      <div class="formula"><span>η = P_útil / P_consumida   (siempre &lt; 1)</span></div>
      <p>Cuando varias máquinas o mecanismos se conectan en cadena, el rendimiento total es el <b>producto</b> de los rendimientos: si un motor (η = 0,9) mueve una reductora (η = 0,95) y esta una bomba (η = 0,7), el rendimiento global es 0,9 · 0,95 · 0,7 ≈ 0,60.</p>`,
      svg: B.flujo("Flujo de energía en una máquina con pérdidas", ["Energía consumida", "Pérdidas: rozamiento", "Pérdidas: calor y ruido", "Energía útil"], { t: "η = útil / consumida" }),
    },
    {
      h: "La palanca",
      html: `<p>La <b>palanca</b> es una barra rígida que gira alrededor de un punto de apoyo o <b>fulcro</b>. Sobre ella actúan una <b>potencia</b> o fuerza aplicada F y una <b>resistencia</b> R que se quiere vencer. Está en equilibrio cuando se igualan los momentos respecto al fulcro:</p>
      <div class="formula"><span>F · BF = R · BR</span></div>
      <p>BF es el <b>brazo de potencia</b> (distancia del fulcro a F) y BR el <b>brazo de resistencia</b>. Si BF es mayor que BR, se vence una resistencia grande con poca fuerza, aunque el extremo de la potencia recorre más distancia: se gana fuerza y se pierde recorrido. La relación R/F = BF/BR se llama <b>ventaja mecánica</b>.</p>
      <p>Según la posición relativa de los tres elementos, hay tres géneros:</p>
      <ul><li><b>Primer género</b>: el fulcro está entre la potencia y la resistencia. Balancín, tijeras, alicates. Puede ganar o perder fuerza.</li>
      <li><b>Segundo género</b>: la resistencia está entre el fulcro y la potencia. Carretilla, cascanueces, abridor. Siempre gana fuerza.</li>
      <li><b>Tercer género</b>: la potencia está entre el fulcro y la resistencia. Pinzas, caña de pescar, el antebrazo humano. Siempre pierde fuerza, pero gana velocidad y precisión en el extremo.</li></ul>
      <p>Las palancas aparecen combinadas en muchas máquinas: la excavadora, el freno de una bicicleta o el mecanismo de un piano.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Palanca de primer género con potencia F, fulcro y resistencia R, y sus brazos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Palanca: F · BF = R · BR", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <rect x="24" y="84" width="212" height="10" rx="3" fill="var(--pen)"/><path d="M90 94 l -16 30 h 32 z" fill="var(--muted)"/>
        <rect x="200" y="58" width="30" height="26" rx="3" fill="var(--red)"/>${B.tx(215, 76, "R", { fs: 13, maxW: 20, bold: true, color: "#fff" })}
        <path d="M32 40 V 80" stroke="var(--leaf)" stroke-width="3"/><path d="M26 71 L 32 80 L 38 71" fill="none" stroke="var(--leaf)" stroke-width="3"/>${B.tx(46, 48, "F", { fs: 14, maxW: 20, bold: true, color: "var(--leaf)" })}
        <path d="M32 140 H 90 M215 140 H 90 M32 134 V 146 M90 134 V 146 M215 134 V 146" stroke="var(--ink)" stroke-width="1.5"/>
        ${B.tx(61, 158, "BF", { fs: 12, maxW: 30, bold: true, color: "var(--leaf)" })}${B.tx(152, 158, "BR", { fs: 12, maxW: 30, bold: true, color: "var(--red)" })}${B.tx(90, 170, "fulcro", { fs: 10, maxW: 50, color: "var(--muted)" })}
      </svg>`,
    },
    {
      h: "Poleas y polipastos",
      html: `<p>Una <b>polea</b> es una rueda con una garganta por la que pasa una cuerda o cable. La <b>polea fija</b> está sujeta a un soporte: no reduce la fuerza (F = R), pero cambia su dirección, lo que permite tirar hacia abajo para subir una carga, aprovechando el propio peso del cuerpo.</p>
      <p>La <b>polea móvil</b> se desplaza con la carga, colgada de dos tramos de cuerda. Cada tramo soporta la mitad de la carga, de modo que <mark>F = R / 2</mark>, aunque hay que tirar del doble de cuerda.</p>
      <p>Un <b>polipasto</b> combina poleas fijas y móviles. En un polipasto potencial con n poleas móviles y una cuerda que pasa por todas, la carga queda repartida entre 2n tramos:</p>
      <div class="formula"><span>F = R / (2n)</span></div>
      <p>Por ejemplo, con dos poleas móviles se eleva una carga de 800 N con 200 N de fuerza, pero para subirla un metro hay que recoger cuatro metros de cuerda. El trabajo realizado es el mismo: F · d_F = R · d_R, lo que recuerda que <b>ningún mecanismo crea energía</b>; solo cambia la relación entre fuerza y recorrido. En la realidad, el rozamiento en los ejes de las poleas obliga a aplicar algo más de fuerza. Los polipastos se usan en grúas, talleres mecánicos, barcos de vela y equipos de escalada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polea fija y polea móvil: en la móvil la fuerza es la mitad de la resistencia">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 22 H 246" stroke="var(--ink)" stroke-width="4"/>
        <path d="M70 22 V 44" stroke="var(--ink)" stroke-width="2"/><circle cx="70" cy="56" r="14" fill="none" stroke="var(--pen)" stroke-width="4"/>
        <path d="M56 56 V 120 M84 56 V 106" stroke="var(--sun)" stroke-width="2.5"/><rect x="42" y="120" width="28" height="22" fill="var(--red)"/>
        ${B.tx(56, 160, "R", { fs: 12, maxW: 14, bold: true, color: "var(--red)" })}${B.tx(96, 112, "F = R", { fs: 11, maxW: 40, bold: true, color: "var(--leaf)", anchor: "start" })}
        <path d="M168 22 V 106 M196 22 V 106" stroke="var(--sun)" stroke-width="2.5"/><circle cx="182" cy="106" r="14" fill="none" stroke="var(--pen)" stroke-width="4"/>
        <path d="M182 120 V 128" stroke="var(--ink)" stroke-width="2"/><rect x="168" y="128" width="28" height="22" fill="var(--red)"/>
        ${B.tx(182, 166, "R", { fs: 12, maxW: 14, bold: true, color: "var(--red)" })}${B.tx(204, 64, "F = R/2", { fs: 11, maxW: 50, bold: true, color: "var(--leaf)", anchor: "start" })}
        ${B.tx(70, 176, "fija", { fs: 10, maxW: 40, color: "var(--muted)" })}${B.tx(226, 176, "móvil", { fs: 10, maxW: 40, color: "var(--muted)" })}
      </svg>`,
    },
    {
      h: "Transmisión por ruedas, poleas y correas",
      html: `<p>Para transmitir un giro entre dos ejes paralelos alejados se usan dos poleas unidas por una <b>correa</b> (plana, trapecial o dentada). La polea del eje motor se llama <b>conductora</b> (1) y la otra, <b>conducida</b> (2). Si la correa no desliza, la velocidad lineal de su borde es la misma en las dos poleas: π · d₁ · n₁ = π · d₂ · n₂. De ahí se obtiene la <b>relación de transmisión</b>:</p>
      <div class="formula"><span>i = n₂ / n₁ = d₁ / d₂</span></div>
      <p>Si la polea conductora es pequeña y la conducida grande (i &lt; 1), el sistema es <b>reductor</b>: la salida gira más despacio pero con más par. Si es al revés (i &gt; 1), es <b>multiplicador</b>. Con la correa abierta, las dos poleas giran en el mismo sentido; con la correa cruzada, en sentidos contrarios.</p>
      <p>Las <b>ruedas de fricción</b> transmiten el giro por contacto directo, con la misma fórmula, pero giran en sentidos opuestos y pueden patinar. Las correas son silenciosas, amortiguan golpes y protegen el motor si la máquina se atasca, porque deslizan; las <b>correas dentadas</b> (de distribución) no deslizan y se usan cuando hace falta sincronía. Para unir varias poleas se usan <b>trenes de poleas</b>, con poleas dobles en los ejes intermedios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Transmisión por correa entre una polea motriz pequeña y una polea conducida grande">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Poleas y correa: i = d₁/d₂", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M66 74 L 176 50 M66 126 L 176 150" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="66" cy="100" r="26" fill="var(--pen)" opacity=".85"/><circle cx="176" cy="100" r="50" fill="var(--red)" opacity=".8"/>
        <circle cx="66" cy="100" r="4" fill="var(--paper)"/><circle cx="176" cy="100" r="4" fill="var(--paper)"/>
        ${B.tx(66, 92, "d₁", { fs: 13, maxW: 24, bold: true, color: "#fff" })}${B.tx(176, 120, "d₂", { fs: 14, maxW: 24, bold: true, color: "#fff" })}
        ${B.tx(66, 160, "motriz: n₁", { fs: 11, maxW: 80, bold: true, color: "var(--pen)" })}${B.tx(176, 168, "conducida: n₂", { fs: 11, maxW: 100, bold: true, color: "var(--red)" })}
      </svg>`,
      video: { id: "2x5gD6TcfMg", titulo: "Transmisión por poleas con correas, mecanismo sencillo", canal: "Aprendiz Industrial AS", vistas: 116257 },
    },
    {
      h: "Engranajes",
      html: `<p>Los <b>engranajes</b> son ruedas dentadas que transmiten el giro sin deslizar, porque los dientes de una encajan en los huecos de la otra. Permiten transmitir grandes potencias con precisión y en poco espacio. La rueda pequeña se llama <b>piñón</b>. Para que dos ruedas engranen, sus dientes deben tener el mismo tamaño, que se indica con el <b>módulo</b> m (en mm): el diámetro primitivo es d = m · Z, siendo Z el número de dientes.</p>
      <p>Como pasan el mismo número de dientes por segundo en ambas ruedas, Z₁ · n₁ = Z₂ · n₂, y la relación de transmisión es:</p>
      <div class="formula"><span>i = n₂ / n₁ = Z₁ / Z₂</span></div>
      <p>Dos engranajes exteriores giran en <mark>sentidos opuestos</mark>. Si se intercala una rueda intermedia o <b>loca</b>, la salida gira en el mismo sentido que la entrada, pero la relación de transmisión no cambia.</p>
      <p>Según la posición de los ejes y la forma de los dientes, hay engranajes <b>cilíndricos de dientes rectos</b> (sencillos, algo ruidosos), <b>helicoidales</b> (más silenciosos y resistentes, usados en cajas de cambios), <b>cónicos</b> (para ejes que se cortan, como el diferencial de un coche) y <b>planetarios</b> o epicicloidales, muy compactos, presentes en cambios automáticos y en bicicletas con cambio interno. Las <b>cadenas</b> con piñones funcionan igual que los engranajes, pero entre ejes alejados: así se transmite el pedaleo de una bicicleta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Piñón de pocos dientes engranado con una rueda grande; giran en sentidos opuestos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Engranajes: i = Z₁/Z₂", { fs: 13, maxW: 236, bold: true, font: B.D })}
        ${rueda(78, 100, 26, 10, "var(--pen)")}${rueda(160, 100, 50, 20, "var(--red)")}
        <path d="M58 56 a 34 34 0 0 1 40 0" fill="none" stroke="var(--pen)" stroke-width="2.5"/><path d="M94 52 l 6 5 l -8 2" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M188 42 a 62 62 0 0 0 -56 0" fill="none" stroke="var(--red)" stroke-width="2.5"/><path d="M136 38 l -6 5 l 8 2" fill="none" stroke="var(--red)" stroke-width="2.5"/>
        ${B.tx(78, 160, "Z₁ = 10", { fs: 11.5, maxW: 60, bold: true, color: "var(--pen)" })}${B.tx(170, 170, "Z₂ = 20", { fs: 11.5, maxW: 60, bold: true, color: "var(--red)" })}
      </svg>`,
      video: { id: "Dif6japkhI8", titulo: "Engranajes explicados", canal: "Mentalidad De Ingeniería", vistas: 256914 },
    },
    {
      h: "Trenes de engranajes y tornillo sinfín",
      html: `<p>Una sola pareja de engranajes no suele dar relaciones mayores de 1:6 sin que las ruedas resulten enormes. Para reducir mucho la velocidad se usan <b>trenes compuestos</b>: en cada eje intermedio hay dos ruedas solidarias, una que recibe el giro y otra que lo transmite. La relación total es el <mark>producto</mark> de las relaciones de cada etapa:</p>
      <div class="formula"><span>i_total = i₁ · i₂ · … = (Z₁ · Z₃ · …) / (Z₂ · Z₄ · …)</span></div>
      <p>Es decir, el producto de los dientes de las ruedas conductoras dividido entre el producto de los de las conducidas. Así funcionan los reductores industriales, los relojes y las cajas de cambios.</p>
      <p>El <b>tornillo sinfín y corona</b> transmite el giro entre ejes que se cruzan a 90°. Cada vuelta del tornillo (de una entrada) hace avanzar un solo diente de la corona, de modo que:</p>
      <div class="formula"><span>i = 1 / Z_corona</span></div>
      <p>Con una corona de 40 dientes se reduce la velocidad 40 veces en un espacio muy pequeño. Además, el mecanismo suele ser <b>irreversible</b>: la corona no puede mover el tornillo, lo que lo hace útil en elevadores, clavijas de guitarra y puertas, porque la carga queda retenida sin freno. Su inconveniente es un rendimiento bajo por el rozamiento.</p>
      <p>Una <b>caja de cambios</b> permite elegir entre varias relaciones de transmisión para adaptar el par y la velocidad del motor a cada situación: marchas cortas para arrancar y subir pendientes, largas para circular rápido consumiendo menos.</p>`,
      svg: B.rejilla("Tren compuesto de dos etapas con su relación de transmisión", ["Etapa", "Conductora", "Conducida", "i"], [["1", "Z₁ = 12", "Z₂ = 36", "1/3"], ["2", "Z₃ = 15", "Z₄ = 45", "1/3"], ["Total", "12·15", "36·45", "1/9"]], { t: "Tren compuesto" }),
    },
    {
      h: "Transformación del movimiento",
      html: `<p>Muchas máquinas necesitan convertir un giro en un movimiento rectilíneo, o al revés:</p>
      <ul><li><b>Piñón-cremallera</b>: un piñón engrana con una barra dentada. Convierte giro en traslación (o al revés). La velocidad de la cremallera es v = p · Z · n, siendo p el paso entre dientes, Z los dientes del piñón y n su velocidad de giro. Dirección de los coches, puertas correderas, trenes de cremallera.</li>
      <li><b>Tornillo-tuerca</b> (husillo): al girar el tornillo, la tuerca avanza una distancia igual al paso de rosca por vuelta: avance = p · n. Gran fuerza y precisión: gatos de coche, tornillos de banco, mesas de máquinas CNC e impresoras 3D.</li>
      <li><b>Biela-manivela</b>: una manivela que gira se une a una biela, cuyo otro extremo se desliza en línea recta (émbolo o pistón). Convierte un giro en un movimiento <b>alternativo</b>, y viceversa. Es el corazón del motor de combustión: el pistón empuja la biela y hace girar el <b>cigüeñal</b>, que es una serie de manivelas. La carrera del pistón es el doble del radio de la manivela.</li>
      <li><b>Excéntrica y leva</b>: una rueda con el eje desplazado o con un perfil irregular empuja un <b>seguidor</b> que sube y baja. Las levas del árbol de levas abren y cierran las válvulas de un motor en el momento justo.</li>
      <li><b>Trinquete</b>: rueda dentada con un gatillo que solo permite girar en un sentido.</li></ul>`,
      svg: B.cajas("Mecanismos de transformación del movimiento", [["Piñón-cremallera", "giro → recta|dirección"], ["Tornillo-tuerca", "giro → recta|gato, CNC"], ["Biela-manivela", "giro ↔ vaivén|motor"], ["Leva", "giro → vaivén|válvulas"]], { t: "Transformación" }),
      video: { id: "Dyee1JVYsd0", titulo: "La biela-manivela (mecanismo de transformación)", canal: "TECH LAPSE", vistas: 103046 },
    },
    {
      h: "Velocidad, par y potencia en las transmisiones",
      html: `<p>Si una transmisión no tuviera pérdidas, la potencia de entrada y la de salida serían iguales: M₁ · ω₁ = M₂ · ω₂. Como la velocidad cambia según la relación de transmisión, el par cambia en sentido contrario:</p>
      <div class="formula"><span>M₂ = M₁ / i   (ideal)   ·   M₂ = η · M₁ / i   (real)</span></div>
      <p>Un reductor con i = 1/10 divide la velocidad entre 10 y multiplica el par por 10 (algo menos, por el rendimiento). Por eso un pequeño motor eléctrico de alta velocidad, unido a una reductora, puede mover la persiana de una ventana o el brazo de un robot.</p>
      <p>Hay que fijarse en qué se busca en cada máquina. En una grúa o un torno de elevación interesa <b>mucho par</b> y poca velocidad; en un ventilador o una centrifugadora, <b>mucha velocidad</b> y poco par. Los motores tienen además una curva característica: el par y la potencia que dan dependen de su velocidad de giro. Un motor de gasolina da su par máximo en un rango concreto de revoluciones, y la caja de cambios sirve para mantenerlo en ese rango.</p>
      <p>Para calcular la fuerza en la periferia de una rueda o polea de radio r a partir del par, se usa M = F · r. Así, una rueda motriz de 0,3 m de radio con 300 N·m de par empuja el vehículo con 1000 N.</p>`,
      svg: B.comparar("Reductor frente a multiplicador: velocidad y par", ["Reductor i < 1", ["n₂ < n₁", "M₂ > M₁", "grúas, robots", "más fuerza"]], ["Multiplicador i > 1", ["n₂ > n₁", "M₂ < M₁", "ventiladores", "más velocidad"]]),
    },
    {
      h: "Elementos auxiliares de las máquinas",
      html: `<p>Los mecanismos necesitan piezas que los sostengan, los unan y los controlen:</p>
      <ul><li><b>Ejes y árboles</b>: el <b>eje</b> sirve de soporte a piezas que giran sobre él y no transmite par (eje de una rueda de carretilla); el <b>árbol</b> gira solidario con las piezas y transmite potencia (árbol de transmisión de un coche).</li>
      <li><b>Cojinetes y rodamientos</b>: soportan los ejes y reducen el rozamiento. Los cojinetes de fricción son casquillos de bronce o teflón lubricados; los <b>rodamientos</b> intercalan bolas o rodillos entre dos anillos, y el rozamiento de deslizamiento se convierte en rozamiento de rodadura, mucho menor.</li>
      <li><b>Acoplamientos</b>: unen dos árboles. Los rígidos exigen ejes perfectamente alineados; los elásticos absorben vibraciones y pequeñas desalineaciones; las juntas cardán transmiten el giro entre ejes que forman un ángulo.</li>
      <li><b>Embragues</b>: conectan y desconectan a voluntad el motor de la transmisión sin pararlo. En los coches, un disco de fricción se aprieta contra el volante del motor con unos muelles.</li>
      <li><b>Frenos</b>: transforman la energía cinética en calor por rozamiento. De tambor, de disco (con pastillas que aprietan un disco), o eléctricos y regenerativos, que convierten parte de la energía en electricidad.</li>
      <li><b>Muelles y amortiguadores</b>: almacenan energía y suavizan golpes.</li></ul>`,
      svg: B.cajas("Elementos auxiliares de las máquinas", [["Árbol", "transmite par"], ["Rodamiento", "bolas o rodillos"], ["Embrague", "conecta y desconecta"], ["Freno", "disco o tambor"]], { t: "Elementos auxiliares" }),
    },
    {
      h: "Motores térmicos de combustión interna",
      html: `<p>Un <b>motor térmico</b> transforma la energía química de un combustible en energía mecánica a través del calor. En los de <b>combustión interna</b>, el combustible arde dentro del cilindro y los gases empujan un pistón. El motor de <b>cuatro tiempos</b> repite este ciclo cada dos vueltas del cigüeñal:</p>
      <ol><li><b>Admisión</b>: el pistón baja con la válvula de admisión abierta y entra la mezcla de aire y combustible (o solo aire, en el diésel).</li>
      <li><b>Compresión</b>: con las válvulas cerradas, el pistón sube y comprime la mezcla.</li>
      <li><b>Explosión o expansión</b>: una chispa de la bujía (motor de gasolina) o la alta temperatura del aire comprimido al inyectar gasóleo (motor diésel) provocan la combustión; los gases empujan el pistón hacia abajo. Es el único tiempo que produce trabajo.</li>
      <li><b>Escape</b>: el pistón sube con la válvula de escape abierta y expulsa los gases quemados.</li></ol>
      <p>La <b>cilindrada</b> es el volumen que barre el pistón: V = (π · D² / 4) · L, siendo D el diámetro del cilindro y L la carrera, multiplicado por el número de cilindros. La <b>relación de compresión</b> compara el volumen total del cilindro con el de la cámara de combustión: Rc = (V + v_c) / v_c. Los motores de gasolina tienen Rc de 9 a 12; los diésel, de 15 a 22. El motor de <b>dos tiempos</b> completa el ciclo en una vuelta: es más sencillo y potente para su tamaño, pero contamina más.</p>`,
      svg: B.ciclo("Ciclo del motor de cuatro tiempos", "4T", ["Admisión", "Compresión", "Explosión", "Escape"]),
      video: { id: "0UqjPtXxcPw", titulo: "Cómo funciona un motor de 4 tiempos", canal: "Taller Moto Gp", vistas: 1865834 },
    },
    {
      h: "Motores eléctricos y máquinas sostenibles",
      html: `<p>El rendimiento de un motor térmico está limitado por la termodinámica: una parte del calor debe cederse siempre al exterior. Un motor de gasolina convierte en trabajo útil solo un 25 a 35 % de la energía del combustible, y un diésel, hasta un 40 %. El resto se pierde como calor en el escape y en el sistema de refrigeración.</p>
      <p>Los <b>motores eléctricos</b> aprovechan la fuerza que un campo magnético ejerce sobre conductores por los que circula corriente. Tienen una parte fija, el <b>estátor</b>, y una giratoria, el <b>rotor</b>. Su rendimiento supera el <mark>90 %</mark>, dan par máximo desde parado, son silenciosos, no emiten gases en el lugar de uso y pueden funcionar como generadores al frenar (frenada regenerativa). Por eso están sustituyendo a los térmicos en el transporte, siempre que la electricidad proceda de fuentes limpias y se resuelvan los retos de las baterías (materias primas, reciclado, autonomía).</p>
      <p>Diseñar máquinas sostenibles implica aumentar el rendimiento de cada etapa (rodamientos de bajo rozamiento, engranajes helicoidales bien lubricados, motores de alta eficiencia con variadores de velocidad), reducir masas en movimiento, facilitar el mantenimiento y la reparación, y elegir materiales reciclables. En la industria, los motores eléctricos consumen cerca de dos tercios de la electricidad: mejorar su eficiencia tiene un impacto enorme.</p>`,
      svg: B.barras("Rendimiento aproximado de distintos motores en porcentaje", [["Gasolina", 30], ["Diésel", 40], ["Turbina gas", 40], ["Eléctrico", 92]], { t: "Rendimiento típico (%)", unidad: " %" }),
    },
  ],
  figura: {
    titulo: "Fórmulas clave de mecanismos y máquinas",
    items: [["Palanca", "F·BF = R·BR", "momentos", "iguales"], ["Transmisión", "i = n₂/n₁", "= d₁/d₂", "= Z₁/Z₂"], ["Potencia", "P = M · ω", "ω = 2πn/60", "en rad/s"], ["Rendimiento", "η = Pu / Pc", "siempre < 1", "en cadena: producto"]],
  },
  video: { id: "QpF2JPwRkI8", titulo: "Transmisión por engranajes: mecanismos", canal: "Aprendo", vistas: 317927 },
  quiz: [
    ["Un mecanismo de transmisión…", ["cambia el tipo de movimiento", "lleva el movimiento de un lugar a otro sin cambiar su tipo", "produce energía", "solo funciona con electricidad"], 1, "Los de transformación cambian el tipo."],
    ["La potencia en un giro se calcula como…", ["P = M / ω", "P = M · ω", "P = F / v", "P = W · t"], 1, "Par por velocidad angular."],
    ["¿Cuántos rad/s son 600 rpm?", ["10", "62,8", "3600", "100"], 1, "ω = 2π · 600 / 60 = 62,8 rad/s."],
    ["Tres máquinas en serie con η de 0,9, 0,8 y 0,5 tienen un rendimiento global de…", ["2,2", "0,36", "0,73", "0,5"], 1, "Se multiplican: 0,9 · 0,8 · 0,5 = 0,36."],
    ["En una carretilla, la resistencia está entre el fulcro y la potencia. Es una palanca de…", ["primer género", "segundo género", "tercer género", "cuarto género"], 1, "Siempre gana fuerza."],
    ["Unas pinzas de depilar son una palanca de…", ["primer género", "segundo género", "tercer género", "ninguno"], 2, "La potencia está en medio: pierde fuerza, gana precisión."],
    ["Con una polea móvil, la fuerza necesaria es…", ["igual a R", "R / 2", "2R", "R / 4"], 1, "La carga se reparte entre dos tramos."],
    ["Un polipasto con 3 poleas móviles eleva 1200 N con…", ["400 N", "200 N", "600 N", "100 N"], 1, "F = R / (2n) = 1200 / 6 = 200 N."],
    ["En una transmisión por correa, i =", ["d₂ / d₁", "d₁ / d₂", "d₁ · d₂", "n₁ / n₂"], 1, "i = n₂/n₁ = d₁/d₂."],
    ["Si la polea conductora es menor que la conducida, el sistema es…", ["multiplicador", "reductor", "inversor", "irreversible"], 1, "La salida gira más despacio."],
    ["Dos engranajes exteriores engranados giran…", ["en el mismo sentido", "en sentidos opuestos", "a la misma velocidad siempre", "sin transmitir par"], 1, "Para conservar el sentido se añade una rueda loca."],
    ["El diámetro primitivo de un engranaje de módulo 2 y 30 dientes es…", ["15 mm", "60 mm", "32 mm", "28 mm"], 1, "d = m · Z = 2 · 30 = 60 mm."],
    ["Un piñón de 15 dientes a 900 rpm mueve una rueda de 45. La rueda gira a…", ["2700 rpm", "300 rpm", "450 rpm", "60 rpm"], 1, "n₂ = 900 · 15/45 = 300 rpm."],
    ["Un tornillo sinfín de una entrada y una corona de 50 dientes tienen i =", ["50", "1/50", "1/25", "1"], 1, "Una vuelta del tornillo avanza un diente."],
    ["¿Qué mecanismo convierte el vaivén del pistón en el giro del cigüeñal?", ["Piñón-cremallera", "Biela-manivela", "Leva", "Trinquete"], 1, "Funciona en los dos sentidos."],
    ["El árbol de levas de un motor sirve para…", ["mover las ruedas", "abrir y cerrar las válvulas", "encender la bujía", "enfriar el motor"], 1, "Cada leva empuja una válvula en su momento."],
    ["En un reductor ideal con i = 1/5, el par de salida es…", ["5 veces menor", "5 veces mayor", "igual", "25 veces mayor"], 1, "M₂ = M₁ / i."],
    ["¿Qué elemento conecta y desconecta el motor de la transmisión sin pararlo?", ["Rodamiento", "Embrague", "Cardán", "Freno"], 1, "En los coches es un disco de fricción."],
    ["¿En qué tiempo del motor de cuatro tiempos se produce trabajo?", ["Admisión", "Compresión", "Explosión-expansión", "Escape"], 2, "Los gases empujan el pistón."],
    ["El rendimiento típico de un motor eléctrico es…", ["10 %", "30 %", "60 %", "más del 90 %"], 3, "Muy superior al de los motores térmicos."],
  ],
  examen: [
    ["Palanca de primer género: BF = 1,2 m, BR = 0,3 m, R = 600 N. F =", ["150 N", "2400 N", "200 N", "180 N"], 0, "F = 600 · 0,3 / 1,2 = 150 N."],
    ["Polea motriz de 80 mm a 1500 rpm y conducida de 240 mm. n₂ =", ["4500 rpm", "500 rpm", "1500 rpm", "300 rpm"], 1, "n₂ = 1500 · 80/240 = 500 rpm."],
    ["Tren: Z₁ = 10, Z₂ = 40, Z₃ = 12, Z₄ = 36. i_total =", ["1/12", "1/7", "1/4", "1/3"], 0, "(10 · 12)/(40 · 36) = 120/1440 = 1/12."],
    ["Un motor da 20 N·m a 3000 rpm. Su potencia es…", ["6,28 kW", "60 kW", "1 kW", "62,8 kW"], 0, "P = 20 · 2π · 3000/60 = 20 · 314,2 = 6283 W."],
    ["Un reductor con i = 1/8 y η = 0,9 recibe 5 N·m. El par de salida es…", ["40 N·m", "36 N·m", "4,5 N·m", "0,56 N·m"], 1, "M₂ = 0,9 · 5 · 8 = 36 N·m."],
    ["Un piñón de 20 dientes con paso 6 mm gira a 30 rpm sobre una cremallera. La velocidad de esta es…", ["3600 mm/min", "600 mm/min", "120 mm/min", "36 mm/min"], 0, "v = p · Z · n = 6 · 20 · 30 = 3600 mm/min = 3,6 m/min."],
    ["Cilindro de 80 mm de diámetro y 90 mm de carrera. Cilindrada unitaria:", ["452 cm³", "576 cm³", "7200 cm³", "45 cm³"], 0, "π · 8² / 4 · 9 = 50,27 · 9 = 452 cm³."],
    ["Cilindrada unitaria 450 cm³ y cámara de combustión 50 cm³. Rc =", ["9", "10", "11", "8"], 1, "Rc = (450 + 50) / 50 = 10."],
  ],
  feynman: ["Qué diferencia hay entre transmitir y transformar un movimiento", "Por qué en una palanca o un polipasto se gana fuerza pero se pierde recorrido", "Cómo se calcula la relación de transmisión con poleas y con engranajes", "Por qué al reducir la velocidad aumenta el par", "Cómo funciona un motor de cuatro tiempos", "Por qué un motor eléctrico tiene más rendimiento que uno térmico"],
  mapa: ["MECANISMOS Y MÁQUINAS", [["Lineales", "palanca · poleas · polipasto"], ["Circulares", "i = n₂/n₁ = d₁/d₂ = Z₁/Z₂"], ["Transformación", "cremallera · biela · leva"], ["Máquinas", "P = M·ω · η · motor 4T"]]],
  tarjetas: [
    ["Máquina y mecanismo", "La máquina transforma energía; el mecanismo transmite o transforma movimientos y fuerzas."],
    ["Potencia de giro", "P = M · ω, con ω = 2π · n / 60."],
    ["Rendimiento en cadena", "η_total = η₁ · η₂ · η₃…"],
    ["Ley de la palanca", "F · BF = R · BR."],
    ["Polipasto", "F = R / (2n), con n poleas móviles."],
    ["Relación de transmisión", "i = n₂/n₁ = d₁/d₂ = Z₁/Z₂."],
    ["Tren compuesto", "i = producto de dientes conductores / producto de dientes conducidos."],
    ["Sinfín-corona", "i = 1/Z_corona; suele ser irreversible."],
    ["Par en una transmisión", "M₂ = η · M₁ / i: si baja la velocidad, sube el par."],
    ["Biela-manivela", "Convierte giro en movimiento alternativo y viceversa; carrera = 2 · radio de manivela."],
    ["Cuatro tiempos", "Admisión, compresión, explosión y escape: dos vueltas del cigüeñal."],
    ["Cilindrada y Rc", "V = π D²/4 · L; Rc = (V + v_c)/v_c."],
  ],
  ejemplos: [
    ["Con una palanca de segundo género de 1,5 m se quiere levantar una piedra de 900 N situada a 0,25 m del fulcro. ¿Qué fuerza hay que aplicar en el extremo?", ["F · BF = R · BR.", "BF = 1,5 m; BR = 0,25 m.", "F = 900 · 0,25 / 1,5 = 150 N."], "F = 150 N (ventaja mecánica 6)."],
    ["Un motor gira a 1400 rpm con una polea de 60 mm. Mueve una polea de 210 mm. Calcula i y la velocidad de salida.", ["i = d₁ / d₂ = 60 / 210 = 0,286 (2/7).", "n₂ = n₁ · i = 1400 · 2/7.", "n₂ = 400 rpm."], "i = 2/7; n₂ = 400 rpm (reductor)."],
    ["Un tren de engranajes tiene Z₁ = 12, Z₂ = 48, Z₃ = 15, Z₄ = 60. El motor gira a 2400 rpm. Calcula la velocidad de salida.", ["Etapa 1: 12/48 = 1/4. Etapa 2: 15/60 = 1/4.", "i_total = 1/4 · 1/4 = 1/16.", "n_salida = 2400 / 16 = 150 rpm."], "n = 150 rpm."],
    ["Un motor eléctrico de 1,5 kW gira a 1450 rpm y mueve un reductor de i = 1/20 con η = 0,85. Calcula el par del motor, la velocidad y el par de salida.", ["ω₁ = 2π · 1450 / 60 = 151,8 rad/s; M₁ = 1500 / 151,8 = 9,88 N·m.", "n₂ = 1450 / 20 = 72,5 rpm.", "M₂ = η · M₁ / i = 0,85 · 9,88 · 20 = 168 N·m."], "M₁ ≈ 9,9 N·m; n₂ = 72,5 rpm; M₂ ≈ 168 N·m."],
    ["Un torno de elevación tiene un tambor de 0,2 m de diámetro movido por un reductor de sinfín-corona de 40 dientes. El motor gira a 1200 rpm. ¿A qué velocidad sube la carga?", ["n_tambor = 1200 / 40 = 30 rpm.", "v = π · d · n = π · 0,2 · 30 = 18,85 m/min.", "v = 18,85 / 60 = 0,31 m/s."], "La carga sube a unos 0,31 m/s."],
    ["Un motor de 4 cilindros tiene 79,5 mm de diámetro y 80,5 mm de carrera, con una cámara de combustión de 44 cm³. Calcula la cilindrada total y la relación de compresión.", ["V unitaria = π · 7,95² / 4 · 8,05 = 49,64 · 8,05 = 399,6 cm³.", "V total = 4 · 399,6 = 1598 cm³ (un motor de 1,6 L).", "Rc = (399,6 + 44) / 44 = 10,1."], "1598 cm³; Rc ≈ 10,1."],
  ],
  errores: [
    "Invertir la fórmula de la relación de transmisión: i = d₁/d₂, con la conductora arriba.",
    "Sumar en lugar de multiplicar las relaciones de un tren compuesto o los rendimientos en cadena.",
    "Usar rpm directamente en P = M · ω sin pasar a rad/s.",
    "Pensar que un reductor aumenta la potencia: aumenta el par, pero la potencia se mantiene o disminuye.",
    "Creer que una rueda loca cambia la relación de transmisión: solo cambia el sentido de giro.",
    "Confundir la cilindrada unitaria con la total, olvidando multiplicar por el número de cilindros.",
  ],
  ejercicios: {
    b: [
      ["Clasifica como transmisión o transformación: polea-correa, piñón-cremallera, engranajes, leva, tornillo-tuerca, cadena.", "Transmisión: polea-correa, engranajes, cadena. Transformación: piñón-cremallera, leva, tornillo-tuerca."],
      ["Indica el género de palanca: tijeras, cascanueces, caña de pescar, balancín, carretilla, pinzas.", "Primer género: tijeras, balancín. Segundo: cascanueces, carretilla. Tercero: caña de pescar, pinzas."],
      ["Calcula la fuerza para equilibrar 400 N con BF = 2 m y BR = 0,5 m.", "F = 400 · 0,5 / 2 = 100 N."],
      ["¿Qué fuerza hace falta para subir 500 N con una polea fija? ¿Y con una móvil?", "Polea fija: 500 N (solo cambia la dirección). Móvil: 250 N."],
      ["Pasa 1500 rpm a rad/s.", "ω = 2π · 1500 / 60 = 157,1 rad/s."],
      ["Calcula la potencia de un motor que da 10 N·m a 157 rad/s.", "P = 10 · 157 = 1570 W ≈ 1,57 kW."],
      ["Un motor consume 2000 W y entrega 1700 W útiles. Calcula su rendimiento.", "η = 1700 / 2000 = 0,85 (85 %)."],
      ["Polea motriz de 100 mm y conducida de 300 mm. Calcula i. ¿Es reductor o multiplicador?", "i = 100/300 = 1/3. Reductor."],
      ["Un engranaje de 20 dientes a 600 rpm mueve otro de 60. ¿A qué velocidad gira este?", "n₂ = 600 · 20/60 = 200 rpm."],
      ["¿Qué función tiene una rueda loca entre dos engranajes?", "Cambiar el sentido de giro de la salida, sin modificar la relación de transmisión (y salvar distancia entre ejes)."],
      ["Nombra en orden los cuatro tiempos del motor y di en cuál se produce trabajo.", "Admisión, compresión, explosión-expansión y escape. El trabajo se produce en la explosión-expansión."],
      ["Diferencia eje y árbol.", "El eje soporta piezas giratorias y no transmite par; el árbol gira con las piezas y transmite potencia."],
    ],
    m: [
      ["Un polipasto con 2 poleas móviles eleva 160 kg. Calcula la fuerza ideal (g = 9,8) y cuánta cuerda hay que recoger para subir 1,5 m.", "R = 1568 N; F = 1568 / 4 = 392 N. Cuerda = 4 · 1,5 = 6 m."],
      ["Un tren de poleas: 50/150 en la primera etapa y 60/180 en la segunda. El motor gira a 2700 rpm. Calcula la salida.", "i = (50/150) · (60/180) = 1/9. n = 2700 / 9 = 300 rpm."],
      ["¿Cuántos dientes debe tener una rueda para que, movida por un piñón de 18 dientes a 1200 rpm, gire a 400 rpm?", "Z₂ = Z₁ · n₁ / n₂ = 18 · 1200 / 400 = 54 dientes."],
      ["Calcula la distancia entre ejes de dos engranajes de módulo 3 con 20 y 50 dientes.", "d₁ = 60 mm, d₂ = 150 mm. Distancia = (60 + 150)/2 = 105 mm."],
      ["Un motor de 750 W gira a 1500 rpm. Calcula su par.", "ω = 157,1 rad/s. M = 750 / 157,1 = 4,77 N·m."],
      ["Una bici tiene un plato de 44 dientes y un piñón de 11. El ciclista pedalea a 80 rpm y la rueda mide 0,7 m de diámetro. Calcula la velocidad de la bici.", "n_rueda = 80 · 44/11 = 320 rpm. v = π · 0,7 · 320 = 703,7 m/min = 11,7 m/s ≈ 42 km/h."],
      ["Un sinfín de una entrada gira a 1500 rpm y mueve una corona de 30 dientes. Calcula la velocidad de la corona.", "n = 1500 / 30 = 50 rpm."],
      ["Un husillo de paso 4 mm gira a 300 rpm. ¿Cuánto avanza la tuerca en 10 s?", "Avance = 4 · 300 = 1200 mm/min = 20 mm/s. En 10 s: 200 mm."],
      ["Un motor de 5 kW con η = 0,9 mueve una bomba con η = 0,7. ¿Qué potencia hidráulica útil se obtiene si el motor consume 5 kW?", "P_útil = 5 · 0,9 · 0,7 = 3,15 kW."],
      ["Una rueda motriz de 0,32 m de radio recibe 480 N·m. ¿Con qué fuerza empuja el vehículo?", "F = M / r = 480 / 0,32 = 1500 N."],
      ["Calcula la cilindrada total de un motor de 3 cilindros de 72 mm de diámetro y 82 mm de carrera.", "V = π · 7,2²/4 · 8,2 = 40,72 · 8,2 = 333,9 cm³ por cilindro. Total ≈ 1002 cm³."],
      ["Un motor tiene 500 cm³ por cilindro y una relación de compresión de 11. ¿Cuál es el volumen de la cámara de combustión?", "Rc = (V + v_c)/v_c → 11 v_c = 500 + v_c → v_c = 50 cm³."],
      ["En una biela-manivela, la manivela mide 45 mm de radio. ¿Cuál es la carrera del pistón? ¿Cuántos ciclos de vaivén da a 3000 rpm cada segundo?", "Carrera = 2 · 45 = 90 mm. 3000 rpm = 50 vueltas por segundo: 50 ciclos por segundo."],
    ],
    a: [
      ["Diseña un tren de engranajes de dos etapas con i = 1/24 usando piñones de 12 dientes. Indica todas las ruedas.", "Por ejemplo, i₁ = 1/4 e i₂ = 1/6: Z₁ = 12, Z₂ = 48; Z₃ = 12, Z₄ = 72. Comprobación: (12 · 12)/(48 · 72) = 144/3456 = 1/24."],
      ["Un ascensor de obra eleva 300 kg a 0,5 m/s con un tambor de 0,25 m de diámetro. Calcula la velocidad de giro del tambor, el par necesario y la potencia útil (g = 9,8).", "n = v / (π d) = 0,5 / (π · 0,25) = 0,637 rps = 38,2 rpm. F = 2940 N; M = F · r = 2940 · 0,125 = 367,5 N·m. P = F · v = 1470 W."],
      ["Para el ascensor anterior, el motor gira a 1450 rpm. Calcula la relación de transmisión necesaria y la potencia del motor si el reductor tiene η = 0,8 y el motor η = 0,88 (potencia eléctrica consumida).", "i = 38,2 / 1450 = 1/38. P mecánica del motor = 1470 / 0,8 = 1837,5 W. P eléctrica = 1837,5 / 0,88 = 2088 W ≈ 2,1 kW."],
      ["Una bicicleta tiene platos de 34 y 50 dientes y piñones de 11 a 32. Calcula la relación más corta y la más larga y explica para qué sirve cada una.", "Más corta: 34/32 = 1,06 (la rueda gira 1,06 veces por pedalada): para subir pendientes con poco esfuerzo. Más larga: 50/11 = 4,55: para ir rápido en llano o bajada, con más esfuerzo por pedalada."],
      ["Un coche en tercera marcha tiene una relación de caja de 1/1,3 y un diferencial de 1/4,1. El motor gira a 3000 rpm y las ruedas miden 0,62 m de diámetro. Calcula la velocidad del coche.", "n_rueda = 3000 / (1,3 · 4,1) = 3000 / 5,33 = 562,9 rpm. v = π · 0,62 · 562,9 = 1096 m/min = 65,8 km/h."],
      ["Un motor de 1,8 L de cuatro tiempos y cuatro cilindros gira a 3000 rpm. ¿Cuántas explosiones por segundo se producen en total?", "En cuatro tiempos cada cilindro explota una vez cada 2 vueltas: 3000/2 = 1500 explosiones por minuto por cilindro. Total: 4 · 1500 = 6000 por minuto = 100 por segundo."],
      ["Un coche consume 6 L de gasolina cada 100 km. Si la gasolina tiene 32 MJ/L y el motor tiene un rendimiento del 28 %, ¿cuánta energía se pierde como calor cada 100 km? Compáralo con un eléctrico que gasta 15 kWh/100 km con un 90 % de rendimiento.", "Gasolina: 6 · 32 = 192 MJ; pérdidas = 0,72 · 192 = 138 MJ. Eléctrico: 15 kWh = 54 MJ; pérdidas = 0,1 · 54 = 5,4 MJ. El eléctrico usa unas 3,5 veces menos energía total."],
      ["Explica por qué el tornillo sinfín es irreversible y en qué casos es una ventaja y en cuáles un inconveniente.", "El ángulo de la hélice es tan pequeño que el rozamiento impide que la corona haga girar el tornillo. Ventaja: retiene la carga sin freno (elevadores, clavijas de guitarra, puertas). Inconveniente: rendimiento bajo (pérdidas por rozamiento y calor) y no permite mover el sistema a mano desde la salida."],
      ["Un engranaje cilíndrico de dientes rectos transmite 2 kW a 300 rpm con un diámetro primitivo de 120 mm. Calcula la fuerza tangencial en los dientes.", "ω = 31,42 rad/s. M = 2000 / 31,42 = 63,7 N·m. F = M / r = 63,7 / 0,06 = 1061 N."],
      ["Propone tres mejoras para aumentar el rendimiento de una cinta transportadora movida por un motor y una reductora de sinfín.", "Sustituir el sinfín por una reductora de engranajes helicoidales (η de 0,95 frente a 0,6-0,7); usar un motor de alta eficiencia con variador de frecuencia para ajustar la velocidad a la carga; cambiar cojinetes de fricción por rodamientos y mantener la lubricación y la tensión de la cinta."],
    ],
  },
  glosario: [
    ["Máquina", "Conjunto de elementos que transforma energía en trabajo útil."],
    ["Mecanismo", "Conjunto de piezas que transmite o transforma movimientos y fuerzas."],
    ["Par", "Momento que hace girar un eje; se mide en N·m."],
    ["Potencia", "Trabajo por unidad de tiempo; en giro P = M · ω."],
    ["Rendimiento", "Cociente entre la energía útil y la consumida."],
    ["Fulcro", "Punto de apoyo alrededor del cual gira una palanca."],
    ["Polipasto", "Combinación de poleas fijas y móviles para elevar cargas con poca fuerza."],
    ["Relación de transmisión", "Cociente entre la velocidad de salida y la de entrada."],
    ["Reductor", "Mecanismo que disminuye la velocidad y aumenta el par."],
    ["Módulo", "Tamaño del diente de un engranaje: d = m · Z."],
    ["Rueda loca", "Engranaje intermedio que cambia el sentido de giro."],
    ["Tornillo sinfín", "Mecanismo de gran reducción entre ejes que se cruzan."],
    ["Cremallera", "Barra dentada que engrana con un piñón."],
    ["Biela-manivela", "Mecanismo que convierte giro en vaivén y viceversa."],
    ["Leva", "Pieza de perfil irregular que empuja un seguidor."],
    ["Rodamiento", "Elemento con bolas o rodillos que reduce el rozamiento de un eje."],
    ["Embrague", "Mecanismo que conecta y desconecta el motor de la transmisión."],
    ["Cilindrada", "Volumen que barren los pistones de un motor."],
  ],
  situacion: {
    titulo: "Un elevador para el aula de tecnología",
    reto: "Diseñad y construid un elevador a escala que suba una carga de 500 g a una altura de 40 cm en un tiempo de entre 10 y 20 segundos, usando un pequeño motor de corriente continua y el mecanismo de reducción que elijáis.",
    pasos: [
      "Medid la velocidad de giro y estimad el par del motor disponible.",
      "Calculad la relación de transmisión necesaria para lograr la velocidad de subida pedida con un tambor de diámetro conocido.",
      "Diseñad el mecanismo (tren de engranajes, poleas o sinfín) y comprobad con cálculos que el par es suficiente.",
      "Construid el elevador con piezas impresas en 3D, de kit o recicladas.",
      "Medid el tiempo de subida, la tensión y la corriente del motor, y calculad el rendimiento global.",
      "Comparad los resultados con los cálculos y proponed mejoras.",
    ],
    producto: "El elevador funcionando, una ficha técnica con los cálculos de transmisión, par y potencia, y el rendimiento medido.",
    evaluacion: [
      "Los cálculos de relación de transmisión, par y potencia son correctos.",
      "El elevador sube la carga en el tiempo pedido y es estable.",
      "Se mide el rendimiento con un método adecuado y se interpreta.",
      "Se justifica la elección del mecanismo frente a otras alternativas.",
    ],
  },
  familias: [
    "Contad juntos los dientes del plato y del piñón de una bicicleta y calculad cuántas vueltas da la rueda por pedalada.",
    "Buscad en la cocina o en el taller ejemplos de palancas de los tres géneros.",
    "Abrid con cuidado un juguete roto con motor y buscad sus engranajes reductores.",
    "Pedidle que os explique cómo funciona el motor de cuatro tiempos con el vídeo del tema.",
  ],
  saberes: "Sistemas mecánicos: mecanismos de transmisión y transformación del movimiento, cálculo de relaciones de transmisión, par, potencia y rendimiento, elementos de máquinas y motores térmicos y eléctricos (RD 243/2022, Tecnología e Ingeniería I, bloque C).",
  ideas: [
    "Montar trenes de engranajes con piezas de kit y medir velocidades con un tacómetro o una app de cámara lenta.",
    "Simular mecanismos con software libre de simulación de mecanismos o con un entorno CAD con animación.",
    "Desmontar una bomba, un taladro viejo o una impresora para identificar sus mecanismos.",
    "Calcular el rendimiento de un pequeño motor elevando una masa y midiendo tensión, corriente y tiempo.",
  ],
  fuentes: [
    { t: "Mecanismo de Anticitera, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mecanismo_de_Anticitera" },
    { t: "Engranaje, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Engranaje" },
  ],
});
