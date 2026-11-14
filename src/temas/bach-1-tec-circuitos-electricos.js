// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Resistencia (zigzag) horizontal entre x1 y x1+40 a la altura y.
const res = (x, y, c = "var(--ink)") => `<path d="M${x} ${y} h6 l3 -7 l5 14 l5 -14 l5 14 l5 -14 l5 14 l3 -7 h3" fill="none" stroke="${c}" stroke-width="2.5"/>`;

module.exports = B.tema({
  titulo: "Circuitos eléctricos",
  minutos: 120,
  objetivos: [
    "Resolver circuitos de corriente continua con la ley de Ohm, las asociaciones de resistencias y las leyes de Kirchhoff",
    "Calcular potencia, energía y efecto Joule, y analizar generadores reales y condensadores",
    "Describir la corriente alterna y calcular valores eficaces, potencias y factor de potencia",
    "Explicar los principios del electromagnetismo, el transformador y las protecciones de una instalación",
  ],
  claves: ["intensidad", "tensión", "resistencia", "ley de Ohm", "leyes de Kirchhoff", "potencia", "efecto Joule", "condensador", "corriente alterna", "valor eficaz", "transformador", "interruptor diferencial"],
  pregunta: {
    texto: "Si en casa se conectan a la vez el horno, la lavadora y el calentador, a veces «saltan los plomos». ¿Qué ha pasado exactamente y por qué es bueno que ocurra?",
    respuesta: "Los aparatos están conectados <b>en paralelo</b>: cada uno añade su corriente a la del cable principal. Al sumar potencias, la <mark>intensidad total</mark> supera la que el cable puede llevar sin calentarse peligrosamente, y el <b>interruptor magnetotérmico</b> corta el circuito. Sin esa protección, el cable podría quemarse y provocar un incendio.",
  },
  lectura: {
    titulo: "La guerra de las corrientes",
    html: `<p>A finales del siglo XIX, dos grandes inventores se enfrentaron por el futuro de la electricidad. Thomas Edison defendía la corriente continua, que ya iluminaba algunas calles de Nueva York. Nikola Tesla y el empresario George Westinghouse apostaban por la corriente alterna. La continua tenía un problema grave: no se podía cambiar fácilmente de tensión, y transportarla lejos a baja tensión hacía perder casi toda la energía en forma de calor en los cables.</p>
    <p>La alterna, en cambio, se podía elevar con un transformador a decenas de miles de voltios, viajar cientos de kilómetros con pocas pérdidas y volver a bajarse a una tensión segura en las casas. La batalla fue dura, con campañas de miedo incluidas, pero la física ganó: hoy la red eléctrica de todo el mundo es de corriente alterna.</p>
    <p>Curiosamente, la continua está volviendo. Los paneles solares, las baterías, los coches eléctricos y todos los aparatos electrónicos funcionan con ella, y algunas líneas submarinas de muy alta tensión la usan. En este tema aprenderás a calcular los dos tipos de circuitos y a entender las leyes que deciden cuánta energía llega y cuánta se pierde por el camino.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Magnitudes eléctricas y ley de Ohm",
      html: `<p>Un <b>circuito eléctrico</b> es un camino cerrado por el que circulan cargas. Tiene un <b>generador</b> (pila, batería, fuente), <b>conductores</b>, <b>receptores</b> (lámparas, motores, resistencias), elementos de <b>control</b> (interruptores, pulsadores, conmutadores) y de <b>protección</b> (fusibles, interruptores automáticos). Sus magnitudes fundamentales son:</p>
      <ul><li><b>Intensidad</b> (I): carga que atraviesa una sección por unidad de tiempo, I = Q / t. Se mide en amperios (A); 1 A = 1 C/s.</li>
      <li><b>Tensión</b> o diferencia de potencial (V): energía que recibe cada unidad de carga al pasar entre dos puntos, en voltios (V). Es el «empuje» del generador.</li>
      <li><b>Resistencia</b> (R): oposición al paso de la corriente, en ohmios (Ω).</li></ul>
      <p>En muchos conductores, a temperatura constante, la intensidad es proporcional a la tensión. Es la <mark>ley de Ohm</mark>:</p>
      <div class="formula"><span>V = I · R</span></div>
      <p>Los materiales que la cumplen se llaman óhmicos. Otros componentes, como los diodos o las lámparas de filamento, no son óhmicos: su resistencia cambia con la tensión o con la temperatura. Por convenio, el sentido de la corriente es el que seguirían las cargas positivas, del polo + al polo − por el exterior del generador, aunque en los metales los que se mueven en realidad son los electrones, en sentido contrario.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito con pila, interruptor y resistencia, y la ley de Ohm">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Circuito simple: V = I · R", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M50 50 H 110 M150 50 H 210 V 140 H 150 M110 140 H 50 V 108 M50 92 V 50" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        ${res(110, 50, "var(--red)")}<path d="M110 140 L 146 128" stroke="var(--ink)" stroke-width="2.5"/><circle cx="110" cy="140" r="3" fill="var(--ink)"/><circle cx="150" cy="140" r="3" fill="var(--ink)"/>
        <path d="M36 92 H 64 M42 108 H 58" stroke="var(--pen)" stroke-width="3"/>${B.tx(24, 96, "+", { fs: 13, maxW: 12, bold: true, color: "var(--pen)" })}
        ${B.tx(130, 38, "R", { fs: 12, maxW: 14, bold: true, color: "var(--red)" })}${B.tx(26, 120, "V", { fs: 12, maxW: 14, bold: true, color: "var(--pen)" })}
        <path d="M222 80 V 110" stroke="var(--leaf)" stroke-width="2.5"/><path d="M216 102 L 222 112 L 228 102" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>${B.tx(236, 100, "I", { fs: 13, maxW: 12, bold: true, color: "var(--leaf)" })}
        ${B.tx(130, 164, "interruptor", { fs: 10, maxW: 70, color: "var(--muted)" })}
      </svg>`,
    },
    {
      h: "Resistencia, resistividad y temperatura",
      html: `<p>La resistencia de un conductor depende del material, de su longitud y de su sección. Un cable más largo ofrece más resistencia; uno más grueso, menos:</p>
      <div class="formula"><span>R = ρ · L / S</span></div>
      <p>La <b>resistividad</b> ρ es una propiedad del material, en Ω·m (o en Ω·mm²/m, unidad cómoda para cables): plata 0,016, cobre 0,017, aluminio 0,028 y nicrom, aleación de las resistencias de calefacción, 1,1 Ω·mm²/m. Su inversa es la <b>conductividad</b>.</p>
      <p>La resistividad varía con la <b>temperatura</b>. En los metales aumenta al calentarse, según R = R₀ · (1 + α · ΔT), con α ≈ 0,004 °C⁻¹ para el cobre. En los semiconductores ocurre lo contrario: su resistencia disminuye. Ese comportamiento se aprovecha en los sensores de temperatura (termistores NTC y PTC). A temperaturas cercanas al cero absoluto, algunos materiales se vuelven <b>superconductores</b>: su resistencia desaparece.</p>
      <p>En la práctica, la sección de los cables de una instalación se elige para que no se calienten y para que la <b>caída de tensión</b> a lo largo del cable sea pequeña (normalmente menos del 3 % al 5 %). Las resistencias comerciales usadas en electrónica se identifican con un <b>código de colores</b> y tienen valores normalizados (series E12, E24) con una tolerancia.</p>`,
      svg: B.barras("Resistividad de algunos materiales en ohmios por milímetro cuadrado por metro", [["Plata", 0.016], ["Cobre", 0.017], ["Aluminio", 0.028], ["Wolframio", 0.055], ["Nicrom", 1.1]], { t: "Resistividad (Ω·mm²/m)" }),
    },
    {
      h: "Asociación de resistencias",
      html: `<p>Las resistencias de un circuito pueden conectarse de varias formas, y cada conjunto se puede sustituir por una <b>resistencia equivalente</b> que consume la misma corriente con la misma tensión:</p>
      <ul><li><b>En serie</b>: una detrás de otra. Por todas pasa la <mark>misma intensidad</mark> y la tensión total se reparte: V = V₁ + V₂ + … La resistencia equivalente es la suma: R_eq = R₁ + R₂ + … Si una se interrumpe, se corta todo el circuito.</li>
      <li><b>En paralelo</b>: conectadas a los mismos dos puntos. Todas tienen la <mark>misma tensión</mark> y la corriente se reparte: I = I₁ + I₂ + … La resistencia equivalente es menor que la menor de ellas: 1/R_eq = 1/R₁ + 1/R₂ + … Para dos resistencias, R_eq = R₁ · R₂ / (R₁ + R₂). Cada rama funciona de forma independiente.</li>
      <li><b>Mixta</b>: combina las dos. Se resuelve por partes, sustituyendo grupos sencillos por su equivalente hasta llegar a una sola resistencia; después se calcula la corriente total y se «deshace» el camino para hallar tensiones e intensidades de cada elemento.</li></ul>
      <p>Un caso útil es el <b>divisor de tensión</b>: dos resistencias en serie entre una tensión V. La tensión en R₂ es V₂ = V · R₂ / (R₁ + R₂). Se usa para obtener tensiones menores y para leer sensores resistivos, como una LDR o un termistor, con un microcontrolador.</p>`,
      svg: B.comparar("Resistencias en serie frente a resistencias en paralelo", ["Serie", ["misma I", "V se reparte", "Req = R₁ + R₂", "Req mayor"]], ["Paralelo", ["misma V", "I se reparte", "1/Req = Σ 1/R", "Req menor"]]),
      video: { id: "Bys-BdK03pw", titulo: "Circuitos mixtos: método de resolución fácil", canal: "Daniel Elena", vistas: 1102605 },
    },
    {
      h: "Potencia, energía y efecto Joule",
      html: `<p>La <b>potencia eléctrica</b> que consume o entrega un elemento es el producto de su tensión por su intensidad. Combinándola con la ley de Ohm se obtienen otras expresiones útiles para resistencias:</p>
      <div class="formula"><span>P = V · I = I² · R = V² / R</span></div>
      <p>La <b>energía</b> consumida es la potencia por el tiempo, E = P · t. En julios si P está en vatios y t en segundos; en las facturas se usa el <b>kilovatio hora</b>: 1 kWh = 3,6 · 10⁶ J, la energía que consume un aparato de 1000 W durante una hora.</p>
      <p>Al pasar por una resistencia, la energía eléctrica se transforma en calor: es el <b>efecto Joule</b>, Q = I² · R · t. Es útil en estufas, hornos, secadores, planchas y fusibles, pero es una pérdida en motores, cables y transformadores. Como depende del <mark>cuadrado de la intensidad</mark>, duplicar la corriente cuadruplica el calor: por eso la energía se transporta a alta tensión y baja intensidad.</p>
      <p>En un circuito, la potencia que entrega el generador es igual a la suma de las potencias consumidas por todos los receptores: es el principio de conservación de la energía aplicado a la electricidad. Cada aparato indica en su placa su <b>potencia nominal</b> y la tensión para la que está diseñado.</p>`,
      svg: B.rejilla("Fórmulas de potencia y energía eléctricas", ["Magnitud", "Fórmula", "Unidad"], [["Potencia", "P = V · I", "W"], ["En R", "I²R = V²/R", "W"], ["Energía", "E = P · t", "J o kWh"], ["Joule", "Q = I²·R·t", "J"]], { t: "Potencia y energía" }),
      video: { id: "za-v_kq1fDU", titulo: "Potencia y ley de Joule bien explicadas", canal: "Pon un ingeniero en tu vida", vistas: 233834 },
    },
    {
      h: "Generadores y receptores reales",
      html: `<p>Un generador real no entrega toda su energía al circuito: tiene una pequeña <b>resistencia interna</b> r. Se caracteriza por su <b>fuerza electromotriz</b> ε (fem), la energía por unidad de carga que produce. La tensión que aparece entre sus bornes cuando suministra una corriente I es menor:</p>
      <div class="formula"><span>V = ε − I · r</span></div>
      <p>Por eso la tensión de una batería baja cuando se le pide mucha corriente, por ejemplo al arrancar un coche. En un circuito sencillo con una resistencia exterior R, la intensidad es I = ε / (R + r) (ley de Ohm generalizada). Si se cortocircuitan los bornes (R = 0), la corriente es máxima, ε / r, y el generador puede dañarse.</p>
      <p>Los <b>motores</b> de corriente continua se comportan como receptores con una <b>fuerza contraelectromotriz</b> ε′: V = ε′ + I · r′. La potencia útil del motor es ε′ · I y la que se pierde por calor, I² · r′.</p>
      <p>Las pilas y baterías se asocian para conseguir más tensión o más capacidad. <b>En serie</b> se suman las fem (y las resistencias internas): cuatro pilas de 1,5 V dan 6 V. <b>En paralelo</b>, con pilas iguales, la tensión es la de una sola, pero se suma la capacidad, medida en amperios hora (A·h): la carga total que puede entregar. Un paquete de baterías de un coche eléctrico combina miles de celdas en serie y en paralelo.</p>`,
      svg: B.comparar("Pilas asociadas en serie frente a en paralelo", ["Serie", ["se suman las fem", "4 × 1,5 V = 6 V", "misma capacidad", "más tensión"]], ["Paralelo", ["misma fem", "1,5 V", "se suma la capacidad", "más duración"]]),
    },
    {
      h: "Leyes de Kirchhoff",
      html: `<p>Cuando un circuito tiene varios generadores o ramas que no se pueden reducir a serie y paralelo, se aplican las <b>leyes de Kirchhoff</b>. Se llama <b>nudo</b> al punto donde se unen tres o más conductores, <b>rama</b> al tramo entre dos nudos y <b>malla</b> a cualquier camino cerrado.</p>
      <ul><li><b>Primera ley, de los nudos</b>: la suma de las intensidades que entran en un nudo es igual a la suma de las que salen, ΣI = 0. Es la conservación de la carga: la corriente no se acumula ni desaparece.</li>
      <li><b>Segunda ley, de las mallas</b>: en cualquier malla, la suma de las fem es igual a la suma de las caídas de tensión, Σε = Σ(I · R). Es la conservación de la energía: al recorrer un camino cerrado se vuelve al mismo potencial.</li></ul>
      <p>Procedimiento: se asigna a cada rama una intensidad con un <b>sentido supuesto</b>; se plantean tantas ecuaciones de nudos como nudos menos uno; se completan con ecuaciones de mallas, eligiendo un sentido de recorrido para cada una. Una fem cuenta como positiva si el recorrido la atraviesa de − a +, y una caída I · R es positiva si el recorrido va a favor de la intensidad supuesta. Se resuelve el sistema: si una intensidad sale negativa, simplemente circula al revés de lo supuesto.</p>`,
      svg: B.cajas("Las dos leyes de Kirchhoff", [["Ley de nudos", "Σ I entrantes =|Σ I salientes"], ["Ley de mallas", "Σ ε = Σ I·R|en un camino cerrado"]], { t: "Leyes de Kirchhoff", cols: 1 }),
      video: { id: "m9XVO983_Vg", titulo: "Domina Kirchhoff en 9 minutos", canal: "seletube", vistas: 1140905 },
    },
    {
      h: "Condensadores",
      html: `<p>Un <b>condensador</b> está formado por dos placas conductoras separadas por un aislante o <b>dieléctrico</b>. Al conectarlo a una tensión, una placa se carga positivamente y la otra negativamente: <mark>almacena carga y energía</mark> en el campo eléctrico entre ellas. Su <b>capacidad</b> indica cuánta carga almacena por voltio:</p>
      <div class="formula"><span>C = Q / V   ·   E = ½ · C · V²</span></div>
      <p>La capacidad se mide en faradios (F), una unidad enorme: en la práctica se usan µF, nF y pF. Depende del área de las placas, de su separación y del dieléctrico.</p>
      <p>Los condensadores se asocian al revés que las resistencias: <b>en paralelo</b> se suman las capacidades (C = C₁ + C₂), y <b>en serie</b> se suman las inversas (1/C = 1/C₁ + 1/C₂).</p>
      <p>Si un condensador se carga a través de una resistencia R, no lo hace de golpe: la tensión sube de forma exponencial. La rapidez depende de la <b>constante de tiempo</b> τ = R · C (en segundos): tras un τ alcanza el 63 % de la tensión final y tras unos 5τ se considera cargado. Esto se usa en temporizadores, filtros que suavizan la tensión de las fuentes de alimentación, el flash de las cámaras y los sistemas que guardan energía unos instantes. Los <b>supercondensadores</b> almacenan mucha energía y se cargan en segundos: autobuses eléctricos y sistemas de frenado regenerativo los usan.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curva de carga de un condensador: llega al 63 por ciento en una constante de tiempo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Carga de un condensador", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M30 150 H 240 M30 150 V 34" stroke="var(--ink)" stroke-width="2"/>
        <path d="M30 150 C 60 78, 110 52, 236 46" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
        <path d="M30 46 H 236" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M30 84 H 66 V 150" fill="none" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <circle cx="66" cy="84" r="4.5" fill="var(--sun)"/>${B.tx(74, 106, "63 %", { fs: 11.5, maxW: 40, bold: true, color: "var(--sun)", anchor: "start" })}
        ${B.tx(66, 166, "τ = R·C", { fs: 11, maxW: 60, bold: true, color: "var(--sun)" })}${B.tx(200, 166, "≈ 5τ: carga", { fs: 10.5, maxW: 80, color: "var(--muted)" })}${B.tx(214, 40, "V", { fs: 11.5, maxW: 20, bold: true })}
      </svg>`,
    },
    {
      h: "Medidas eléctricas con el polímetro",
      html: `<p>El <b>polímetro</b> o multímetro es el instrumento básico para medir en circuitos. Un selector permite elegir la magnitud, el tipo de corriente (continua, DC o ⎓; alterna, AC o ~) y la escala. Las puntas se conectan al borne común (COM, negro) y al borne de medida (rojo).</p>
      <ul><li><b>Voltímetro</b>: mide tensión. Se conecta <mark>en paralelo</mark> con el elemento, tocando sus dos extremos, con el circuito funcionando. Tiene una resistencia interna muy alta para no alterar el circuito.</li>
      <li><b>Amperímetro</b>: mide intensidad. Se conecta <mark>en serie</mark>: hay que abrir el circuito e intercalarlo, de modo que la corriente pase por él. Tiene una resistencia interna muy baja. Conectarlo en paralelo provocaría un cortocircuito y quemaría su fusible. Para corrientes grandes en alterna se usa una <b>pinza amperimétrica</b>, que mide sin cortar el cable.</li>
      <li><b>Óhmetro</b>: mide resistencia, siempre <b>sin tensión</b> en el circuito y, si es posible, con el componente desconectado.</li>
      <li><b>Comprobador de continuidad</b>: pita si hay conexión eléctrica; útil para buscar cables cortados.</li></ul>
      <p>Si no se conoce el valor aproximado, se empieza por la escala más alta. Otros instrumentos de laboratorio son el <b>vatímetro</b>, que mide potencia, la <b>fuente de alimentación</b> regulable y el <b>osciloscopio</b>, que dibuja la forma de una tensión en función del tiempo.</p>`,
      svg: B.rejilla("Cómo se conecta cada función del polímetro", ["Función", "Conexión", "Ojo"], [["Voltímetro", "paralelo", "circuito ON"], ["Amperímetro", "serie", "abrir circuito"], ["Óhmetro", "sin tensión", "desconectar"], ["Continuidad", "sin tensión", "pita"]], { t: "El polímetro" }),
    },
    {
      h: "La corriente alterna",
      html: `<p>En la <b>corriente alterna</b> (CA), la tensión y la intensidad cambian de sentido periódicamente siguiendo una función seno:</p>
      <div class="formula"><span>v(t) = V_máx · sen(ω · t)   ·   ω = 2π · f</span></div>
      <p>La <b>frecuencia</b> f es el número de ciclos por segundo, en hercios (Hz): 50 Hz en Europa y 60 Hz en América. El <b>periodo</b> T = 1/f es la duración de un ciclo: 20 ms a 50 Hz.</p>
      <p>Como el valor cambia constantemente, se usa el <b>valor eficaz</b>: el valor de una corriente continua que produciría el mismo calor en una resistencia. Para una onda senoidal:</p>
      <div class="formula"><span>V_ef = V_máx / √2   ·   I_ef = I_máx / √2</span></div>
      <p>Los 230 V de un enchufe son un valor eficaz: la tensión máxima es 230 · √2 ≈ 325 V. Los polímetros miden valores eficaces.</p>
      <p>En CA, además de las resistencias, influyen las <b>bobinas</b> y los <b>condensadores</b>, que se oponen a la corriente según la frecuencia: la reactancia inductiva X_L = ω · L crece con f, y la capacitiva X_C = 1 / (ω · C) disminuye. La oposición total se llama <b>impedancia</b> Z. Además, desfasan la corriente respecto a la tensión. En la red de distribución se usa un sistema <b>trifásico</b>, con tres tensiones desfasadas 120°, que transmite más potencia con menos cable y permite crear campos giratorios en los motores. En las casas llega una sola fase (monofásica) de 230 V; entre fases hay 400 V.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Onda senoidal de corriente alterna con su valor máximo, su valor eficaz y el periodo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Corriente alterna", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M24 96 H 244 M24 34 V 160" stroke="var(--ink)" stroke-width="1.8"/>
        <path d="M24 96 ${Array.from({ length: 41 }, (_, k) => `L ${(24 + k * 5).toFixed(1)} ${(96 - 52 * Math.sin((k / 20) * 2 * Math.PI)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M24 44 H 74" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M24 59 H 230" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="4 3"/>
        ${B.tx(100, 36, "V máx = 325 V", { fs: 10.5, maxW: 90, bold: true, color: "var(--red)" })}${B.tx(200, 54, "V ef = 230 V", { fs: 10.5, maxW: 80, bold: true, color: "var(--leaf)" })}
        <path d="M24 168 H 124" stroke="var(--sun)" stroke-width="2"/>${B.tx(74, 164, "T = 20 ms", { fs: 10.5, maxW: 70, bold: true, color: "var(--sun)" })}
      </svg>`,
      video: { id: "b3JVth7IVXs", titulo: "Corriente monofásica y trifásica bien explicada", canal: "Potencia hp", vistas: 294706 },
    },
    {
      h: "Potencias en corriente alterna",
      html: `<p>Cuando hay bobinas o condensadores, la corriente y la tensión no están en fase: entre ellas hay un ángulo φ. Parte de la energía va y vuelve entre el generador y el receptor sin realizar trabajo. Por eso en CA se definen tres potencias:</p>
      <ul><li><b>Potencia activa</b>: la que realmente se transforma en trabajo o calor. P = V · I · cos φ, en vatios (W).</li>
      <li><b>Potencia reactiva</b>: la que intercambian los campos magnéticos y eléctricos. Q = V · I · sen φ, en voltiamperios reactivos (VAr).</li>
      <li><b>Potencia aparente</b>: el producto de los valores eficaces. S = V · I, en voltiamperios (VA). Se cumple S² = P² + Q²: forman el <b>triángulo de potencias</b>.</li></ul>
      <p>El <b>factor de potencia</b> cos φ = P / S indica qué fracción de la corriente se aprovecha. En una resistencia vale 1; en motores y fluorescentes suele estar entre 0,7 y 0,9. Un factor de potencia bajo obliga a transportar más corriente para la misma potencia útil, con más pérdidas en los cables. Por eso las industrias instalan <b>baterías de condensadores</b> que compensan la reactiva de los motores y suben el cos φ cerca de 1; si no lo hacen, la compañía eléctrica les penaliza en la factura.</p>
      <p>En sistemas trifásicos equilibrados, la potencia activa es P = √3 · V_L · I_L · cos φ, siendo V_L la tensión entre fases (400 V) e I_L la corriente de línea.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de potencias con la activa P, la reactiva Q, la aparente S y el ángulo fi">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Triángulo de potencias", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M40 140 H 200 V 50 Z" fill="var(--pen)" fill-opacity=".12" stroke="none"/>
        <path d="M40 140 H 200" stroke="var(--leaf)" stroke-width="4"/><path d="M200 140 V 50" stroke="var(--red)" stroke-width="4"/><path d="M40 140 L 200 50" stroke="var(--pen)" stroke-width="4"/>
        <path d="M80 140 a 40 40 0 0 0 -5 -19" fill="none" stroke="var(--sun)" stroke-width="2.5"/>${B.tx(92, 132, "φ", { fs: 14, maxW: 14, bold: true, color: "var(--sun)" })}
        ${B.tx(120, 160, "P (W) activa", { fs: 11.5, maxW: 100, bold: true, color: "var(--leaf)" })}${B.tx(226, 100, "Q (VAr)", { fs: 11, maxW: 50, bold: true, color: "var(--red)" })}${B.tx(104, 84, "S (VA)", { fs: 11.5, maxW: 60, bold: true, color: "var(--pen)" })}
      </svg>`,
    },
    {
      h: "Electromagnetismo y transformador",
      html: `<p>La electricidad y el magnetismo están relacionados. Una corriente eléctrica crea un <b>campo magnético</b> a su alrededor; si el conductor se enrolla en una <b>bobina</b> con un núcleo de hierro, se obtiene un <b>electroimán</b>, base de relés, timbres, cerraduras eléctricas y contactores. Un conductor con corriente dentro de un campo magnético sufre una fuerza: así funcionan los motores eléctricos.</p>
      <p>Al revés, Faraday descubrió la <b>inducción electromagnética</b>: un campo magnético <mark>variable</mark> induce una tensión en un conductor. Es el principio de los <b>generadores</b> (alternadores): al girar una bobina dentro de un imán, o un imán dentro de una bobina, se genera una tensión alterna. Así producen electricidad casi todas las centrales y los aerogeneradores.</p>
      <p>El <b>transformador</b> está formado por dos bobinas (primario y secundario) enrolladas sobre un núcleo de chapas de hierro. La corriente alterna del primario crea un flujo variable que induce tensión en el secundario. La relación de tensiones es la de espiras:</p>
      <div class="formula"><span>V₁ / V₂ = N₁ / N₂ = I₂ / I₁</span></div>
      <p>Si el secundario tiene menos espiras, el transformador es <b>reductor</b> (cargadores, fuentes); si tiene más, <b>elevador</b> (salida de las centrales). Como la potencia se conserva (los grandes transformadores superan el 98 % de rendimiento), al subir la tensión baja la intensidad. Solo funciona con corriente alterna.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Transformador con núcleo de hierro, bobina primaria de muchas espiras y secundaria de pocas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Transformador: V₁/V₂ = N₁/N₂", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <rect x="70" y="40" width="120" height="110" rx="6" fill="none" stroke="var(--muted)" stroke-width="16"/>
        ${Array.from({ length: 8 }, (_, k) => `<path d="M58 ${54 + k * 11} h24" stroke="var(--pen)" stroke-width="4"/>`).join("")}
        ${Array.from({ length: 3 }, (_, k) => `<path d="M178 ${76 + k * 14} h24" stroke="var(--red)" stroke-width="4"/>`).join("")}
        ${B.tx(40, 100, "V₁", { fs: 13, maxW: 24, bold: true, color: "var(--pen)" })}${B.tx(222, 100, "V₂", { fs: 13, maxW: 24, bold: true, color: "var(--red)" })}
        ${B.tx(70, 170, "N₁ espiras", { fs: 10.5, maxW: 80, bold: true, color: "var(--pen)" })}${B.tx(190, 170, "N₂ espiras", { fs: 10.5, maxW: 80, bold: true, color: "var(--red)" })}
      </svg>`,
    },
    {
      h: "Instalaciones, protecciones y seguridad",
      html: `<p>Una instalación eléctrica de vivienda empieza en la acometida y el contador, y llega al <b>cuadro general de mando y protección</b>, del que salen los distintos circuitos (alumbrado, enchufes, cocina y horno, lavadora, baño). En España la regula el <b>Reglamento Electrotécnico para Baja Tensión</b> (REBT). Sus protecciones principales son:</p>
      <ul><li><b>Interruptor general automático</b> (IGA): corta toda la vivienda si la intensidad total es excesiva.</li>
      <li><b>Interruptores magnetotérmicos</b> (PIA), uno por circuito: protegen contra <b>sobrecargas</b> (parte térmica, con una lámina bimetálica que se curva al calentarse) y <b>cortocircuitos</b> (parte magnética, un electroimán que actúa al instante). Protegen los cables y las instalaciones.</li>
      <li><b>Interruptor diferencial</b>: compara la corriente que sale por la fase con la que vuelve por el neutro. Si hay una diferencia (una <b>fuga</b> a tierra, quizá a través de una persona), corta en milisegundos. Con una sensibilidad de 30 mA, <mark>protege a las personas</mark> frente a electrocuciones.</li>
      <li><b>Toma de tierra</b>: conecta las carcasas metálicas de los aparatos con el terreno para que una fuga se derive por ella y active el diferencial.</li>
      <li><b>Protector contra sobretensiones</b>, frente a rayos y picos de la red.</li></ul>
      <p>La corriente que atraviesa el cuerpo humano es peligrosa a partir de unos pocos miliamperios y puede provocar fibrilación cardíaca por encima de 30 mA. Normas básicas: cortar la corriente antes de manipular, no tocar aparatos con las manos mojadas, no sobrecargar enchufes con ladrones y revisar los cables dañados.</p>`,
      svg: B.cajas("Protecciones de una instalación eléctrica", [["IGA", "corte general"], ["Magnetotérmico", "sobrecarga|cortocircuito"], ["Diferencial", "fugas: 30 mA|protege personas"], ["Toma de tierra", "deriva las fugas"]], { t: "Cuadro de protección" }),
      video: { id: "S1t7IHAYUnM", titulo: "Instalar y cablear el cuadro eléctrico de una vivienda básica", canal: "Electricidad FP", vistas: 586882 },
    },
  ],
  figura: {
    titulo: "Fórmulas clave de los circuitos eléctricos",
    items: [["Ohm", "V = I · R", "R = ρ·L/S", "en conductores"], ["Potencia", "P = V · I", "= I²·R", "= V²/R"], ["Kirchhoff", "ΣI = 0", "Σε = Σ I·R", "nudos y mallas"], ["Alterna", "V ef = V máx/√2", "P = V·I·cos φ", "50 Hz"]],
  },
  video: { id: "245-usgm-pk", titulo: "Cómo solucionar circuitos mixtos: teoría básica", canal: "Mundo Electrónica", vistas: 1069597 },
  quiz: [
    ["¿En qué unidad se mide la intensidad?", ["Voltio", "Amperio", "Ohmio", "Vatio"], 1, "1 A = 1 C/s."],
    ["Una resistencia de 220 Ω con 11 V. I =", ["0,05 A", "20 A", "2420 A", "0,5 A"], 0, "I = 11 / 220 = 0,05 A = 50 mA."],
    ["Si se duplica la longitud de un cable, su resistencia…", ["se reduce a la mitad", "se duplica", "no cambia", "se cuadruplica"], 1, "R = ρ L / S es proporcional a L."],
    ["La resistencia de un metal al calentarse…", ["disminuye", "aumenta", "no cambia", "se anula"], 1, "En los semiconductores ocurre lo contrario."],
    ["Tres resistencias de 30 Ω en paralelo equivalen a…", ["90 Ω", "10 Ω", "30 Ω", "3 Ω"], 1, "Iguales en paralelo: R / n = 30 / 3."],
    ["En un circuito en serie, ¿qué magnitud es igual en todos los elementos?", ["La tensión", "La intensidad", "La potencia", "La resistencia"], 1, "La tensión se reparte."],
    ["Un divisor con R₁ = 1 kΩ y R₂ = 4 kΩ a 10 V da en R₂…", ["2 V", "8 V", "4 V", "10 V"], 1, "V₂ = 10 · 4/5 = 8 V."],
    ["Un horno de 2000 W funciona 90 minutos. Consume…", ["3 kWh", "180 kWh", "1,33 kWh", "30 kWh"], 0, "E = 2 kW · 1,5 h = 3 kWh."],
    ["Si se duplica la corriente en una resistencia, el calor producido…", ["se duplica", "se cuadruplica", "se reduce a la mitad", "no cambia"], 1, "Q = I² R t."],
    ["Una pila de fem 9 V y r = 1 Ω alimenta una resistencia de 8 Ω. I =", ["1 A", "1,125 A", "9 A", "0,9 A"], 0, "I = ε / (R + r) = 9 / 9 = 1 A."],
    ["La ley de los nudos expresa la conservación de…", ["la energía", "la carga", "la masa", "la potencia"], 1, "La de mallas expresa la conservación de la energía."],
    ["Un condensador de 100 µF a 12 V almacena una carga de…", ["1,2 mC", "1200 C", "8,3 µC", "0,12 C"], 0, "Q = C V = 100 · 10⁻⁶ · 12 = 1,2 · 10⁻³ C."],
    ["La constante de tiempo de un circuito RC es…", ["R / C", "R · C", "1 / RC", "C / R"], 1, "τ = R · C, en segundos."],
    ["Un amperímetro se conecta…", ["en paralelo", "en serie", "sin tensión", "a tierra"], 1, "Hay que abrir el circuito e intercalarlo."],
    ["El valor eficaz de una tensión senoidal de 311 V máximos es…", ["311 V", "220 V", "440 V", "155 V"], 1, "311 / √2 ≈ 220 V."],
    ["El periodo de una corriente de 50 Hz es…", ["50 s", "20 ms", "0,5 s", "2 ms"], 1, "T = 1 / 50 = 0,02 s."],
    ["La potencia activa en CA es…", ["V · I", "V · I · cos φ", "V · I · sen φ", "V / I"], 1, "La reactiva lleva sen φ y la aparente es V · I."],
    ["Un transformador con 1000 espiras en el primario y 50 en el secundario conectado a 230 V da…", ["4600 V", "11,5 V", "50 V", "230 V"], 1, "V₂ = 230 · 50/1000 = 11,5 V."],
    ["¿Qué dispositivo protege a las personas frente a contactos eléctricos?", ["El magnetotérmico", "El diferencial", "El contador", "El transformador"], 1, "Detecta fugas de 30 mA."],
    ["El magnetotérmico protege contra…", ["fugas a tierra", "sobrecargas y cortocircuitos", "rayos", "humedad"], 1, "Protege la instalación y los cables."],
  ],
  examen: [
    ["Cable de cobre (ρ = 0,017 Ω·mm²/m) de 40 m y 2,5 mm². R =", ["0,272 Ω", "2,72 Ω", "0,68 Ω", "0,0068 Ω"], 0, "R = 0,017 · 40 / 2,5 = 0,272 Ω."],
    ["10 Ω en serie con (20 Ω ∥ 30 Ω). R_eq =", ["60 Ω", "22 Ω", "12 Ω", "15 Ω"], 1, "20 · 30 / 50 = 12 Ω; 12 + 10 = 22 Ω."],
    ["El circuito anterior a 11 V. Corriente total:", ["0,5 A", "1 A", "2 A", "0,18 A"], 0, "I = 11 / 22 = 0,5 A."],
    ["Lámpara de 60 W a 230 V. Su resistencia en funcionamiento es…", ["882 Ω", "3,83 Ω", "13 800 Ω", "0,26 Ω"], 0, "R = V²/P = 52 900 / 60 ≈ 882 Ω."],
    ["Una batería de ε = 12 V y r = 0,05 Ω da 100 A al motor de arranque. Tensión en bornes:", ["12 V", "7 V", "5 V", "11,95 V"], 1, "V = 12 − 100 · 0,05 = 7 V."],
    ["RC con R = 10 kΩ y C = 470 µF. Tiempo aproximado de carga completa:", ["4,7 s", "23,5 s", "0,47 s", "47 s"], 1, "τ = 4,7 s; 5τ = 23,5 s."],
    ["Un motor consume 10 A a 230 V con cos φ = 0,8. Potencia activa:", ["2300 W", "1840 W", "2875 W", "1380 W"], 1, "P = 230 · 10 · 0,8 = 1840 W."],
    ["Transformador ideal 230/12 V. Si el secundario da 4 A, el primario consume…", ["76,7 A", "0,21 A", "4 A", "48 A"], 1, "I₁ = I₂ · V₂ / V₁ = 4 · 12 / 230 ≈ 0,21 A."],
  ],
  feynman: ["Qué son la tensión, la intensidad y la resistencia y cómo las une la ley de Ohm", "Cómo se resuelve un circuito mixto paso a paso", "Por qué el efecto Joule obliga a transportar la energía a alta tensión", "Qué dicen las leyes de Kirchhoff y de qué principios salen", "Qué es el valor eficaz de una corriente alterna", "Cómo nos protege un interruptor diferencial"],
  mapa: ["CIRCUITOS ELÉCTRICOS", [["Continua", "V = I·R · serie y paralelo"], ["Análisis", "Kirchhoff · generador real · RC"], ["Energía", "P = V·I · Joule · kWh"], ["Alterna", "V ef · cos φ · transformador"]]],
  tarjetas: [
    ["Ley de Ohm", "V = I · R."],
    ["Resistencia de un cable", "R = ρ · L / S."],
    ["Serie y paralelo", "Serie: R_eq = ΣR, misma I. Paralelo: 1/R_eq = Σ1/R, misma V."],
    ["Divisor de tensión", "V₂ = V · R₂ / (R₁ + R₂)."],
    ["Potencia eléctrica", "P = V·I = I²·R = V²/R."],
    ["1 kWh", "3,6 · 10⁶ J; un aparato de 1 kW durante 1 hora."],
    ["Generador real", "V = ε − I·r; I = ε / (R + r)."],
    ["Leyes de Kirchhoff", "Nudos: ΣI = 0. Mallas: Σε = Σ I·R."],
    ["Condensador", "C = Q / V; E = ½CV²; τ = R·C."],
    ["Valor eficaz", "V_ef = V_máx / √2; 230 V eficaces = 325 V máximos."],
    ["Potencias en CA", "P = VI cos φ (W); Q = VI sen φ (VAr); S = VI (VA)."],
    ["Transformador", "V₁/V₂ = N₁/N₂ = I₂/I₁."],
  ],
  ejemplos: [
    ["Circuito mixto: R₁ = 4 Ω en serie con el paralelo de R₂ = 6 Ω y R₃ = 12 Ω, alimentado a 16 V. Calcula todas las intensidades y tensiones.", ["R₂ ∥ R₃ = 6 · 12 / 18 = 4 Ω. R_eq = 4 + 4 = 8 Ω.", "I = 16 / 8 = 2 A. V₁ = 2 · 4 = 8 V; V_paralelo = 16 − 8 = 8 V.", "I₂ = 8 / 6 = 1,33 A; I₃ = 8 / 12 = 0,67 A (suman 2 A)."], "I = 2 A; V₁ = 8 V; V₂ = V₃ = 8 V; I₂ = 1,33 A; I₃ = 0,67 A."],
    ["Calcula la caída de tensión en una línea de 30 m (ida y vuelta: 60 m de cobre, 2,5 mm²) que alimenta un aparato de 3450 W a 230 V. ¿Es aceptable si el máximo es el 3 %?", ["I = P / V = 3450 / 230 = 15 A.", "R = 0,017 · 60 / 2,5 = 0,408 Ω. ΔV = 15 · 0,408 = 6,1 V.", "6,1 / 230 = 2,7 %."], "Caída de 6,1 V (2,7 %): aceptable, aunque cerca del límite."],
    ["Dos generadores: ε₁ = 12 V y ε₂ = 6 V, en dos ramas con R₁ = 2 Ω y R₂ = 4 Ω, que alimentan una carga común R₃ = 4 Ω. Resuelve con Kirchhoff (I₁ e I₂ salen de los generadores hacia el nudo; I₃ va por la carga).", ["Nudo: I₃ = I₁ + I₂.", "Malla 1 (ε₁, R₁, R₃): 12 = 2I₁ + 4I₃. Malla 2 (ε₂, R₂, R₃): 6 = 4I₂ + 4I₃.", "Sustituyendo: 12 = 6I₁ + 4I₂ y 6 = 4I₁ + 8I₂ → I₁ = 2,25 A; I₂ = −0,375 A; I₃ = 1,875 A."], "I₁ = 2,25 A; I₂ = −0,375 A (circula al revés: el generador de 6 V se está cargando); I₃ = 1,875 A."],
    ["Un condensador de 2200 µF se carga a 25 V a través de una resistencia de 1 kΩ. Calcula la carga, la energía y el tiempo de carga.", ["Q = C · V = 2200 · 10⁻⁶ · 25 = 0,055 C.", "E = ½ · C · V² = 0,5 · 2,2 · 10⁻³ · 625 = 0,69 J.", "τ = R · C = 1000 · 2,2 · 10⁻³ = 2,2 s; carga completa ≈ 5τ = 11 s."], "Q = 55 mC; E ≈ 0,69 J; t ≈ 11 s."],
    ["Un taller tiene motores que consumen 40 kW con cos φ = 0,7 a 400 V trifásicos. Calcula S, Q y la corriente de línea. ¿Qué corriente habría con cos φ = 0,95?", ["S = P / cos φ = 40 / 0,7 = 57,1 kVA; Q = √(57,1² − 40²) = 40,8 kVAr.", "I = P / (√3 · V · cos φ) = 40 000 / (1,732 · 400 · 0,7) = 82,5 A.", "Con 0,95: I = 40 000 / (1,732 · 400 · 0,95) = 60,8 A."], "S = 57,1 kVA; Q = 40,8 kVAr; I baja de 82,5 a 60,8 A al compensar."],
    ["Se transportan 10 MW por una línea de resistencia total 5 Ω. Compara las pérdidas si se transporta a 20 kV y a 400 kV (cos φ = 1, monofásico simplificado).", ["A 20 kV: I = 10⁷ / 2 · 10⁴ = 500 A; pérdidas = 500² · 5 = 1,25 MW (12,5 %).", "A 400 kV: I = 25 A; pérdidas = 25² · 5 = 3125 W (0,03 %).", "Elevar la tensión 20 veces divide las pérdidas entre 400."], "1,25 MW frente a 3,1 kW: por eso se transporta a muy alta tensión."],
  ],
  errores: [
    "Sumar directamente resistencias en paralelo o condensadores en serie.",
    "Olvidar invertir el resultado de 1/R_eq.",
    "Usar mA o kΩ en la ley de Ohm sin pasarlos a A y Ω (o hacerlo de forma coherente).",
    "Conectar el amperímetro en paralelo: provoca un cortocircuito.",
    "Confundir el valor máximo de la alterna con el eficaz: 230 V es el eficaz.",
    "Pensar que el magnetotérmico protege a las personas: las protege el diferencial.",
  ],
  ejercicios: {
    b: [
      ["Calcula la intensidad en una resistencia de 47 Ω conectada a 9,4 V.", "I = 9,4 / 47 = 0,2 A."],
      ["¿Qué tensión hay en una resistencia de 2,2 kΩ por la que pasan 5 mA?", "V = 0,005 · 2200 = 11 V."],
      ["Calcula la resistencia de 100 m de hilo de aluminio de 4 mm² (ρ = 0,028 Ω·mm²/m).", "R = 0,028 · 100 / 4 = 0,7 Ω."],
      ["Calcula la resistencia equivalente de 100, 220 y 330 Ω en serie.", "100 + 220 + 330 = 650 Ω."],
      ["Calcula la equivalente de 60 Ω y 40 Ω en paralelo.", "60 · 40 / 100 = 24 Ω."],
      ["Una plancha de 2200 W funciona a 230 V. ¿Qué intensidad consume?", "I = 2200 / 230 = 9,57 A."],
      ["¿Cuánto cuesta tener una estufa de 1500 W encendida 4 horas a 0,18 €/kWh?", "E = 1,5 · 4 = 6 kWh; coste = 6 · 0,18 = 1,08 €."],
      ["¿Qué tensión dan cuatro pilas de 1,5 V en serie? ¿Y en paralelo?", "En serie: 6 V. En paralelo: 1,5 V (con cuatro veces la capacidad)."],
      ["Enuncia las dos leyes de Kirchhoff.", "Nudos: la suma de corrientes que entran en un nudo es igual a la de las que salen. Mallas: en un camino cerrado, la suma de fem es igual a la suma de caídas I·R."],
      ["Calcula la carga de un condensador de 47 µF a 10 V.", "Q = 47 · 10⁻⁶ · 10 = 4,7 · 10⁻⁴ C."],
      ["¿Cómo se conectan el voltímetro y el amperímetro?", "Voltímetro en paralelo con el elemento; amperímetro en serie, abriendo el circuito."],
      ["¿Cuál es el valor máximo de la tensión de un enchufe de 230 V? ¿Y su periodo?", "V_máx = 230 · √2 ≈ 325 V. T = 1/50 = 20 ms."],
    ],
    m: [
      ["R₁ = 10 Ω en serie con (R₂ = 15 Ω ∥ R₃ = 30 Ω), a 20 V. Calcula R_eq, I total y la intensidad por R₃.", "R₂ ∥ R₃ = 450/45 = 10 Ω; R_eq = 20 Ω; I = 1 A. V_paralelo = 10 V; I₃ = 10/30 = 0,33 A."],
      ["Calcula la equivalente de 12 Ω, 6 Ω y 4 Ω en paralelo.", "1/R = 1/12 + 2/12 + 3/12 = 6/12 → R = 2 Ω."],
      ["Diseña un divisor de tensión que dé 3,3 V a partir de 5 V con R₁ = 1 kΩ.", "3,3 = 5 · R₂/(1000 + R₂) → 3,3 · 1000 = 1,7 · R₂ → R₂ = 1941 Ω ≈ 1,9 kΩ (o 2 kΩ comercial)."],
      ["Una pila de ε = 4,5 V y r = 0,5 Ω alimenta 4 Ω. Calcula I, la tensión en bornes y la potencia perdida dentro de la pila.", "I = 4,5 / 4,5 = 1 A. V = 4,5 − 0,5 = 4 V. P_interna = 1² · 0,5 = 0,5 W."],
      ["Un calentador de 230 V tiene una resistencia de 26,45 Ω. Calcula su potencia y el calor producido en 10 minutos.", "P = 230² / 26,45 = 2000 W. Q = 2000 · 600 = 1,2 · 10⁶ J."],
      ["Un cable de cobre de 20 °C con 10 Ω se calienta hasta 70 °C. ¿Qué resistencia tiene? (α = 0,004 °C⁻¹)", "R = 10 · (1 + 0,004 · 50) = 12 Ω."],
      ["Dos condensadores de 10 µF y 15 µF. Calcula su capacidad en paralelo y en serie.", "Paralelo: 25 µF. Serie: 10 · 15 / 25 = 6 µF."],
      ["Un temporizador RC debe tardar unos 10 s en cargarse (5τ) con C = 1000 µF. ¿Qué resistencia hace falta?", "τ = 2 s → R = 2 / 0,001 = 2000 Ω = 2 kΩ."],
      ["Una tensión alterna tiene v(t) = 170 · sen(377 t). Calcula V_ef, ω, f y T.", "V_ef = 170/√2 = 120 V. ω = 377 rad/s; f = 377/(2π) = 60 Hz; T = 16,7 ms."],
      ["Un fluorescente de 58 W a 230 V consume 0,5 A. Calcula S y cos φ.", "S = 230 · 0,5 = 115 VA. cos φ = 58 / 115 = 0,5."],
      ["Un transformador tiene 2300 espiras en el primario (230 V). ¿Cuántas necesita el secundario para dar 9 V?", "N₂ = 2300 · 9 / 230 = 90 espiras."],
      ["¿Por qué el diferencial salta si una persona toca un cable y el magnetotérmico no?", "Porque la corriente que pasa por la persona (unos mA) es muy pequeña para el magnetotérmico, pero se va a tierra y no vuelve por el neutro; el diferencial detecta esa diferencia de más de 30 mA y corta."],
      ["En un circuito de enchufes protegido por un PIA de 16 A a 230 V, ¿cuántos aparatos de 1500 W se pueden conectar a la vez?", "P máx = 230 · 16 = 3680 W. 3680 / 1500 = 2,45: solo dos a la vez."],
    ],
    a: [
      ["Circuito: ε₁ = 10 V con R₁ = 2 Ω en la rama izquierda; ε₂ = 5 V con R₂ = 1 Ω en la derecha; R₃ = 2 Ω en la rama central (carga). Ambos generadores con el + hacia el nudo superior. Calcula las tres corrientes.", "Nudo: I₃ = I₁ + I₂. Malla 1: 10 = 2I₁ + 2I₃. Malla 2: 5 = I₂ + 2I₃. De la 1: I₁ = 5 − I₃; de la 2: I₂ = 5 − 2I₃. Sustituyendo: I₃ = 10 − 3I₃ → I₃ = 2,5 A; I₁ = 2,5 A; I₂ = 0 A."],
      ["Una lámpara de 12 V y 24 W se quiere conectar a 18 V. Calcula la resistencia en serie necesaria y su potencia.", "I = 24 / 12 = 2 A. La resistencia debe caer 6 V: R = 6 / 2 = 3 Ω. P = 6 · 2 = 12 W (se elegiría de 15-20 W)."],
      ["Calcula la sección mínima de cobre para alimentar un motor de 5 kW a 230 V (cos φ = 1) a 50 m (100 m de cable) con una caída máxima del 3 %.", "I = 5000 / 230 = 21,7 A. ΔV máx = 6,9 V → R máx = 6,9 / 21,7 = 0,318 Ω. S = ρ L / R = 0,017 · 100 / 0,318 = 5,35 mm² → 6 mm² comercial."],
      ["Una batería de 48 V y 100 A·h alimenta un motor de 960 W. ¿Cuánto tiempo funciona? ¿Cuánta energía almacena en kWh?", "I = 960 / 48 = 20 A. t = 100 / 20 = 5 h. E = 48 · 100 = 4800 Wh = 4,8 kWh."],
      ["Un motor de CC de 24 V tiene r′ = 0,4 Ω y consume 5 A. Calcula su fuerza contraelectromotriz, su potencia útil y su rendimiento eléctrico.", "ε′ = 24 − 5 · 0,4 = 22 V. P útil = 22 · 5 = 110 W. P consumida = 120 W. η = 91,7 %."],
      ["Una industria tiene 100 kW con cos φ = 0,75. Calcula la potencia reactiva que debe compensar con condensadores para llegar a cos φ = 0,95.", "Q₁ = P · tan(arccos 0,75) = 100 · 0,882 = 88,2 kVAr. Q₂ = 100 · tan(arccos 0,95) = 100 · 0,329 = 32,9 kVAr. Batería de condensadores ≈ 55,3 kVAr."],
      ["Una central produce a 20 kV y eleva a 400 kV para transportar. Si el primario del transformador tiene 500 espiras, ¿cuántas tiene el secundario? Si salen 25 A, ¿cuántos entran?", "N₂ = 500 · 400/20 = 10 000 espiras. I₁ = 25 · 400/20 = 500 A (transformador ideal)."],
      ["Calcula la energía que almacena un supercondensador de 3000 F a 2,7 V y compárala con la de una pila AA (unos 10 kJ).", "E = 0,5 · 3000 · 2,7² = 10 935 J ≈ 11 kJ: similar a una pila AA, pero se carga y descarga en segundos y soporta cientos de miles de ciclos."],
      ["Explica por qué los aparatos de una vivienda se conectan en paralelo y qué ocurriría si se conectaran en serie.", "En paralelo cada uno recibe 230 V y funciona independientemente; la corriente total es la suma. En serie la tensión se repartiría entre ellos (ninguno funcionaría bien), al apagar uno se cortarían todos y la corriente dependería de los que hubiera conectados."],
      ["Una persona con una resistencia corporal de 2000 Ω toca un cable de 230 V con los pies en el suelo. ¿Qué corriente le atraviesa? ¿La detecta el diferencial de 30 mA?", "I = 230 / 2000 = 0,115 A = 115 mA: muy peligrosa (fibrilación). El diferencial la detecta como fuga (más de 30 mA) y corta en unos 30 ms, antes de daños graves. Un magnetotérmico de 16 A no actuaría."],
    ],
  },
  glosario: [
    ["Intensidad", "Carga que pasa por segundo; se mide en amperios."],
    ["Tensión", "Diferencia de potencial; energía por unidad de carga, en voltios."],
    ["Resistividad", "Propiedad del material que indica su oposición a la corriente."],
    ["Resistencia equivalente", "Resistencia única que sustituye a un conjunto sin cambiar su efecto."],
    ["Divisor de tensión", "Dos resistencias en serie que reparten la tensión."],
    ["Efecto Joule", "Transformación de energía eléctrica en calor en una resistencia."],
    ["Kilovatio hora", "Energía de 1000 W durante una hora: 3,6 MJ."],
    ["Fuerza electromotriz", "Energía por unidad de carga que produce un generador."],
    ["Resistencia interna", "Resistencia propia de un generador, que reduce su tensión en bornes."],
    ["Nudo", "Punto de un circuito donde se unen tres o más conductores."],
    ["Malla", "Camino cerrado en un circuito."],
    ["Condensador", "Componente que almacena carga entre dos placas aisladas."],
    ["Constante de tiempo", "τ = R · C: rapidez de carga de un condensador."],
    ["Valor eficaz", "Valor de continua que produce el mismo calor que la alterna."],
    ["Factor de potencia", "cos φ: fracción de la potencia aparente que es activa."],
    ["Inducción electromagnética", "Aparición de tensión por un campo magnético variable."],
    ["Transformador", "Máquina que cambia la tensión de la corriente alterna."],
    ["Interruptor diferencial", "Protección que corta al detectar fugas de corriente a tierra."],
  ],
  situacion: {
    titulo: "Auditoría eléctrica de casa",
    reto: "Analizad la instalación eléctrica y el consumo de vuestra vivienda (o de un aula) y proponed un plan para reducir la factura y mejorar la seguridad.",
    pasos: [
      "Haced un inventario de aparatos con su potencia nominal y estimad sus horas de uso diarias.",
      "Calculad el consumo mensual en kWh y su coste, y comparadlo con una factura real.",
      "Identificad los circuitos del cuadro, sus magnetotérmicos y el diferencial, y comprobad qué aparatos no deberían funcionar a la vez.",
      "Con un medidor de enchufe o un polímetro (con supervisión), medid el consumo en espera de varios aparatos.",
      "Proponed medidas de ahorro y de seguridad con su ahorro estimado en euros y kWh al año.",
    ],
    producto: "Un informe con tabla de consumos, esquema del cuadro de protección y plan de mejoras con su ahorro calculado.",
    evaluacion: [
      "Los cálculos de potencia, energía y coste son correctos y usan las unidades adecuadas.",
      "El esquema de protecciones identifica bien la función de cada dispositivo.",
      "Las medidas se toman con seguridad y se interpretan correctamente.",
      "Las propuestas son realistas y su ahorro está cuantificado.",
    ],
  },
  familias: [
    "Revisad juntos el cuadro eléctrico de casa y pulsad el botón de prueba del diferencial (se debe hacer una vez al mes).",
    "Mirad la etiqueta de potencia de varios aparatos y calculad cuánto cuesta una hora de uso de cada uno.",
    "Buscad en la factura el término de potencia y el de energía y comentad la diferencia.",
    "Pedidle que os explique por qué no se deben usar ladrones encadenados.",
  ],
  saberes: "Sistemas eléctricos y electrónicos: circuitos de corriente continua (ley de Ohm, asociaciones, leyes de Kirchhoff, potencia y energía), condensadores, corriente alterna monofásica y trifásica, potencias y factor de potencia, electromagnetismo, transformador, medidas eléctricas y seguridad en instalaciones (RD 243/2022, Tecnología e Ingeniería I, bloque D).",
  ideas: [
    "Simular circuitos mixtos y de Kirchhoff en un simulador en línea y comparar con los cálculos.",
    "Medir con el polímetro la curva de carga de un condensador cada pocos segundos y ajustar la constante de tiempo.",
    "Desmontar un cargador antiguo para identificar el transformador o la fuente conmutada.",
    "Visitar el cuadro eléctrico del centro con el personal de mantenimiento.",
  ],
  fuentes: [
    { t: "Reglamento Electrotécnico para Baja Tensión (REBT), BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099" },
    { t: "Leyes de Kirchhoff, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Leyes_de_Kirchhoff" },
  ],
});
