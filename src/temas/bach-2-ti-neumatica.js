// Tecnología e Ingeniería II 2º Bachillerato · Tema 8. Nivel libro. Dibujos propios en SVG.
const { marco, T, flecha, ficha, pasos, compara, rejilla, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

const muelle = (x, y) => `<path d="M${x} ${y} l 4 -7 l 5 14 l 5 -14 l 5 14 l 4 -7" fill="none" stroke="var(--ink)" stroke-width="1.6"/>`;
const tope = (x, y) => `<path d="M${x} ${y} v -8 M${x - 6} ${y - 8} h 12" stroke="var(--ink)" stroke-width="1.8"/>`;
const escape = (x, y) => `<path d="M${x - 5} ${y} h 10 l -5 7 z" fill="none" stroke="var(--ink)" stroke-width="1.6"/>`;
const flechaV = (x1, y1, x2, y2, id) => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="var(--pen)" stroke-width="1.8" marker-end="url(#${id})"/>`;

// Cilindro de doble efecto con sus fuerzas.
const cilindroSVG = (() => {
  const id = uid("cy");
  return marco("Cilindro de doble efecto: en el avance el aire empuja sobre toda la superficie del émbolo; en el retroceso, sobre la corona, que es la superficie del émbolo menos la del vástago", `
  <rect x="30" y="50" width="150" height="54" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/>
  <rect x="100" y="52" width="12" height="50" fill="var(--pen)"/><rect x="112" y="71" width="118" height="12" fill="var(--muted)"/>
  <rect x="32" y="52" width="68" height="50" fill="var(--red)" fill-opacity=".14"/>
  <path d="M50 104 V 128 M160 104 V 128" stroke="var(--ink)" stroke-width="2"/>${T(50, 142, "entrada avance", { fs: 9.5, c: "var(--red)", b: true })}${T(160, 142, "entrada retroceso", { fs: 9.5, c: "var(--pen)", b: true })}
  <path d="M190 64 H 236" stroke="var(--red)" stroke-width="2.6" marker-end="url(#${id})"/>${T(214, 56, "F avance", { fs: 10.5, b: true, c: "var(--red)" })}
  ${T(66, 82, "p·S", { fs: 12, b: true, c: "var(--red)" })}${T(146, 64, "vástago d", { fs: 9.5, c: "var(--muted)" })}${T(70, 42, "émbolo D", { fs: 10, b: true, c: "var(--pen)" })}
  ${T(130, 166, "S avance = πD²/4 · S retroceso = π(D² − d²)/4", { fs: 10, b: true })}`, flecha(id, "var(--red)"));
})();

// Símbolos de válvulas 3/2 y 5/2.
const valvulasSVG = (() => {
  const id = uid("vv");
  const v32 = `<rect x="60" y="28" width="40" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="100" y="28" width="40" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
    ${flechaV(72, 66, 80, 32, id)}${tope(90, 68)}${flechaV(120, 32, 128, 64, id)}${tope(110, 68)}
    <path d="M120 28 V 18 M110 68 V 78 M128 68 V 76" stroke="var(--ink)" stroke-width="1.6"/>${escape(128, 76)}${T(126, 16, "2", { fs: 10, b: true, a: "start" })}${T(104, 80, "1", { fs: 10, b: true, a: "end" })}${T(137, 80, "3", { fs: 10, b: true, a: "start" })}
    <path d="M60 48 H 48" stroke="var(--ink)" stroke-width="1.8"/><path d="M48 40 v 16 M44 40 h 4 M44 56 h 4" stroke="var(--ink)" stroke-width="1.8"/><path d="M44 40 a 8 8 0 0 0 0 16" fill="none" stroke="var(--ink)" stroke-width="1.8"/>${muelle(140, 48)}
    ${T(176, 44, "3/2 NC", { fs: 11.5, b: true, c: "var(--pen)", a: "start" })}${T(176, 60, "pulsador + muelle", { fs: 9.5, c: "var(--muted)", a: "start" })}`;
  const v52 = `<rect x="60" y="112" width="40" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="100" y="112" width="40" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
    ${flechaV(80, 150, 70, 116, id)}${flechaV(90, 116, 94, 148, id)}${tope(66, 152)}
    ${flechaV(120, 150, 130, 116, id)}${flechaV(110, 116, 106, 148, id)}${tope(134, 152)}
    <path d="M110 112 V 102 M130 112 V 102 M106 152 V 160 M120 152 V 162 M134 152 V 160" stroke="var(--ink)" stroke-width="1.6"/>${escape(106, 160)}${escape(134, 160)}
    ${T(106, 108, "4", { fs: 10, b: true, a: "end" })}${T(134, 108, "2", { fs: 10, b: true, a: "start" })}${T(96, 176, "5", { fs: 10, b: true })}${T(120, 176, "1", { fs: 10, b: true })}${T(144, 176, "3", { fs: 10, b: true })}
    <path d="M60 132 H 52" stroke="var(--ink)" stroke-width="1.8"/><rect x="38" y="124" width="14" height="16" fill="none" stroke="var(--ink)" stroke-width="1.8"/><path d="M38 140 L 52 124" stroke="var(--ink)" stroke-width="1.4"/>${muelle(140, 132)}
    ${T(176, 128, "5/2", { fs: 11.5, b: true, c: "var(--red)", a: "start" })}${T(176, 144, "solenoide + muelle", { fs: 9.5, c: "var(--muted)", a: "start" })}`;
  return marco("Símbolos de dos válvulas distribuidoras: una 3/2 normalmente cerrada accionada por pulsador con retorno por muelle y una 5/2 accionada por solenoide con retorno por muelle", v32 + v52, flecha(id, "var(--pen)"));
})();

// Diagrama espacio-fase A+ B+ A− B−.
const faseSVG = (() => {
  const xs = [60, 105, 150, 195, 240];
  const fila = (y0, y1, pts, c) => `<polyline points="${pts.map((v, i) => `${xs[i]},${v ? y1 : y0}`).join(" ")}" fill="none" stroke="${c}" stroke-width="3.2" stroke-linejoin="round"/>`;
  return marco("Diagrama espacio-fase de la secuencia A más, B más, A menos, B menos: el cilindro A avanza en la fase 1, B avanza en la 2, A retrocede en la 3 y B retrocede en la 4", `
  ${xs.map((x, i) => `<path d="M${x} 24 V 140" stroke="var(--line)" stroke-dasharray="3 3"/>${T(x, 156, String(i + 1), { fs: 10.5, b: true, c: "var(--muted)" })}`).join("")}
  ${T(28, 46, "A", { fs: 13, b: true, c: "var(--red)" })}${T(48, 44, "1", { fs: 9, c: "var(--muted)", a: "end" })}${T(48, 74, "0", { fs: 9, c: "var(--muted)", a: "end" })}${fila(70, 40, [0, 1, 1, 0, 0], "var(--red)")}
  ${T(28, 112, "B", { fs: 13, b: true, c: "var(--pen)" })}${T(48, 110, "1", { fs: 9, c: "var(--muted)", a: "end" })}${T(48, 138, "0", { fs: 9, c: "var(--muted)", a: "end" })}${fila(134, 106, [0, 0, 1, 1, 0], "var(--pen)")}
  ${T(150, 176, "A+ · B+ · A− · B−", { fs: 12, b: true })}`);
})();

// Prensa hidráulica.
const prensaSVG = (() => {
  const id = uid("pr");
  return marco("Prensa hidráulica: una fuerza pequeña sobre el émbolo pequeño produce una presión que se transmite a todo el líquido y genera una fuerza grande en el émbolo grande", `
  <path d="M40 60 V 140 H 220 V 70 M70 60 V 112 H 130 V 70" fill="none" stroke="var(--ink)" stroke-width="2.4"/>
  <rect x="41" y="76" width="28" height="63" fill="var(--pen)" fill-opacity=".22"/><rect x="69" y="113" width="62" height="26" fill="var(--pen)" fill-opacity=".22"/><rect x="131" y="86" width="88" height="53" fill="var(--pen)" fill-opacity=".22"/>
  <rect x="41" y="68" width="28" height="8" fill="var(--ink)"/><rect x="131" y="78" width="88" height="8" fill="var(--ink)"/>
  <path d="M55 22 V 62" stroke="var(--red)" stroke-width="3" marker-end="url(#${id})"/>${T(55, 18, "F₁", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M175 74 V 34" stroke="var(--leaf)" stroke-width="4" marker-end="url(#${id})"/>${T(112, 22, "F₂ = F₁·S₂/S₁", { fs: 11, b: true, c: "var(--leaf)" })}
  ${T(55, 158, "S₁", { fs: 11, b: true })}${T(175, 158, "S₂", { fs: 11, b: true })}${T(130, 176, "p = F₁/S₁ = F₂/S₂ (Pascal)", { fs: 11.5, b: true })}`, flecha(id, "var(--ink)"));
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Neumática y oleohidráulica",
  minutos: 120,
  objetivos: [
    "Comparar los sistemas neumáticos y oleohidráulicos y conocer sus magnitudes: presión, caudal y potencia",
    "Describir la producción, el tratamiento y la distribución del aire comprimido",
    "Calcular la fuerza y el consumo de aire de cilindros de simple y doble efecto",
    "Identificar válvulas distribuidoras y de regulación por su símbolo normalizado",
    "Diseñar circuitos neumáticos básicos y secuencias con diagramas espacio-fase",
    "Aplicar el principio de Pascal y calcular fuerzas, velocidades y potencias en circuitos oleohidráulicos",
  ],
  claves: ["presión", "caudal", "ley de Boyle", "compresor", "unidad de mantenimiento", "cilindro de simple efecto", "cilindro de doble efecto", "válvula distribuidora", "vías y posiciones", "antirretorno", "regulador de caudal", "función O y función Y", "diagrama espacio-fase", "electroneumática", "principio de Pascal", "bomba hidráulica", "válvula limitadora de presión"],
  pregunta: {
    texto: "Una excavadora levanta toneladas de tierra con un brazo movido por cilindros, y en una fábrica de galletas otros cilindros mueven piezas a toda velocidad. ¿Por qué la excavadora usa aceite y la fábrica, aire?",
    respuesta: "Porque el aceite es prácticamente <mark>incompresible</mark> y puede trabajar a presiones de 200 a 300 bar: da fuerzas enormes y movimientos precisos, ideales para la excavadora. El aire es compresible y se usa a unos 6 bar: da fuerzas menores y movimientos menos precisos, pero es rápido, limpio, barato y no contamina si se escapa, ideal para la industria alimentaria. Es la diferencia entre la <b>oleohidráulica</b> y la <b>neumática</b>.",
  },
  lectura: {
    titulo: "El freno que salvó los trenes",
    html: `<p>A mediados del siglo XIX, los trenes se frenaban a mano: un guardafrenos en cada vagón giraba una manivela cuando el maquinista daba la señal con el silbato. Las colisiones eran frecuentes y muy graves. En 1869, el estadounidense George Westinghouse, con solo 22 años, patentó el <b>freno de aire comprimido</b>, que permitía al maquinista frenar todos los vagones a la vez desde la locomotora.</p><p>Su mejora genial llegó en 1872: el freno automático. Cada vagón llevaba un depósito de aire y la tubería que recorría el tren se mantenía a presión para tener los frenos <i>sueltos</i>. Si el maquinista bajaba la presión, o si un vagón se soltaba y la tubería se rompía, los frenos se aplicaban automáticamente. Un fallo producía una situación segura: un principio de diseño (<i>fail-safe</i>) que hoy se aplica en todos los sistemas críticos.</p><p>Los trenes y camiones actuales siguen frenando con aire comprimido, y la neumática y la oleohidráulica están en las fábricas, los aviones, las máquinas de obra y los robots. En este tema aprenderás a calcularlas y a diseñar sus circuitos.</p>`,
  },
  bloques: [
    bloque({ h: "8.1 Fluidos que transmiten energía", p: [
      "Los <b>sistemas neumáticos</b> usan aire comprimido y los <b>oleohidráulicos</b> (o hidráulicos), aceite a presión, para transmitir energía y producir movimientos o fuerzas. Ambos tienen la misma estructura: un <b>generador</b> de presión (compresor o bomba), unos <b>conductos</b>, unos <b>elementos de control</b> (válvulas) y unos <b>actuadores</b> (cilindros y motores) que convierten la energía del fluido en trabajo mecánico.",
      "La <b>neumática</b> trabaja a presiones bajas (normalmente 6 bar): sus fuerzas son moderadas, pero es rápida, limpia, segura en ambientes explosivos, resiste sobrecargas y el aire se expulsa a la atmósfera, por lo que no hacen falta tuberías de retorno. Como el aire es compresible, el control de velocidad y de posición es menos preciso y es ruidosa. Se usa en automatización industrial, embalaje, alimentación, herramientas y frenos.",
      "La <b>oleohidráulica</b> trabaja a presiones altas (de 100 a 350 bar): sus fuerzas son muy grandes con actuadores pequeños, y como el aceite es casi <mark>incompresible</mark> sus movimientos son precisos y regulares. A cambio, es más lenta, más cara, necesita retorno al depósito y las fugas de aceite ensucian y contaminan. Se usa en máquinas de obra pública, prensas, maquinaria agrícola, dirección y frenos de vehículos, aviones y grúas.",
    ], svg: compara("Comparación entre neumática y oleohidráulica: presión, fuerza, precisión, velocidad y aplicaciones", ["Neumática", ["aire · 6 bar", "fuerzas moderadas", "rápida y limpia", "poco precisa"]], ["Oleohidráulica", ["aceite · 100-350 bar", "fuerzas enormes", "precisa y lenta", "fugas contaminan"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "8.2 Presión, caudal y potencia", p: [
      "La <b>presión</b> es la fuerza por unidad de superficie: p = F/S. Su unidad del SI es el pascal (1 Pa = 1 N/m²), pero en estos sistemas se usa el <b>bar</b> (1 bar = 10<sup>5</sup> Pa = 0,1 MPa = 0,1 N/mm²). Hay que distinguir la <b>presión absoluta</b> (respecto al vacío) de la <b>presión relativa o manométrica</b> (respecto a la atmosférica, que es la que marcan los manómetros): p<sub>abs</sub> = p<sub>rel</sub> + p<sub>atm</sub>, con p<sub>atm</sub> ≈ 1 bar.",
      "El <b>caudal</b> Q es el volumen de fluido que atraviesa una sección por unidad de tiempo (m³/s o L/min). Si el fluido circula con velocidad v por un conducto de sección S, Q = v · S. Por la <b>ecuación de continuidad</b>, en un fluido incompresible el caudal es el mismo en todas las secciones de un conducto: v<sub>1</sub> · S<sub>1</sub> = v<sub>2</sub> · S<sub>2</sub>. Donde el tubo se estrecha, el fluido va más rápido.",
      "La <b>potencia hidráulica</b> que transporta un fluido es el producto de la presión por el caudal. Con unidades del SI (Pa y m³/s) se obtienen vatios:",
      formula("p = F / S &nbsp;&nbsp; Q = v · S &nbsp;&nbsp; P = p · Q"),
      "Un truco útil: con p en bar y Q en L/min, P (kW) = p · Q / 600. Por ejemplo, 100 bar y 30 L/min transportan 5 kW.",
    ], svg: ficha("Magnitudes de los sistemas de fluidos: presión, caudal, continuidad y potencia", "Magnitudes", ["p = F/S · 1 bar = 10⁵ Pa", "p_abs = p_rel + 1 bar", "Q = v · S (continuidad)", "P = p·Q ; kW = bar·L/min / 600"], "var(--pen)") }),
    bloque({ h: "8.3 El aire comprimido y la ley de Boyle", p: [
      "El aire es una mezcla de gases que se comporta casi como un gas ideal. Si se comprime a temperatura constante, se cumple la <mark>ley de Boyle-Mariotte</mark>, con presiones <b>absolutas</b>:",
      formula("p₁ · V₁ = p₂ · V₂ &nbsp;&nbsp; (T constante, presiones absolutas)"),
      "Así, un depósito de 50 L con aire a 8 bar relativos (9 bar absolutos) contiene el aire que ocuparía 50 · 9 = 450 L a presión atmosférica. Ese volumen a presión atmosférica se llama <b>aire libre</b> y es la unidad con la que se expresa la capacidad de los compresores (por ejemplo, 300 L/min de aire aspirado). La <b>relación de compresión</b> del aire de una red a 6 bar relativos es (6 + 1)/1 = 7: cada litro de aire comprimido equivale a 7 litros de aire libre.",
      "Al comprimir el aire, se calienta y su vapor de agua se condensa al enfriarse en el depósito y las tuberías. El agua líquida, el polvo y el aceite del compresor dañan las válvulas y los cilindros, por lo que el aire debe tratarse antes de usarse. Además, producir aire comprimido es caro: solo un 10-15 % de la energía eléctrica del compresor acaba como trabajo útil en los cilindros, y una fuga de 3 mm de diámetro puede costar cientos de euros al año.",
    ], svg: (() => { const id = uid("by"); return marco("Ley de Boyle: al reducir el volumen a la mitad a temperatura constante, la presión absoluta se duplica", `<rect x="30" y="40" width="80" height="100" fill="none" stroke="var(--ink)" stroke-width="2.4"/><rect x="32" y="60" width="76" height="78" fill="var(--pen)" fill-opacity=".18"/><rect x="32" y="52" width="76" height="8" fill="var(--ink)"/>${T(70, 104, "V · p", { fs: 13, b: true, c: "var(--pen)" })}<rect x="150" y="40" width="80" height="100" fill="none" stroke="var(--ink)" stroke-width="2.4"/><rect x="152" y="99" width="76" height="39" fill="var(--pen)" fill-opacity=".4"/><rect x="152" y="91" width="76" height="8" fill="var(--ink)"/>${T(190, 124, "V/2 · 2p", { fs: 12, b: true, c: "var(--pen)" })}<path d="M190 34 V 84" stroke="var(--red)" stroke-width="3" marker-end="url(#${id})"/><path d="M116 90 H 144" stroke="var(--muted)" stroke-width="2" marker-end="url(#${id})"/>${T(130, 166, "p₁V₁ = p₂V₂ (absolutas)", { fs: 12, b: true })}`, flecha(id, "var(--ink)")); })() }),
    bloque({ h: "8.4 Producción, tratamiento y distribución del aire", p: [
      "El aire se comprime con un <b>compresor</b>: de pistón (los más comunes en talleres), de tornillo (industriales, de funcionamiento continuo) o de paletas. El aire comprimido se almacena en un <b>depósito</b> o calderín, que amortigua las oscilaciones de presión, permite que el compresor no funcione continuamente (un presostato lo arranca y lo para entre dos presiones) y ayuda a enfriar el aire y separar el agua. Lleva una <b>válvula de seguridad</b>, un manómetro y una purga.",
      "Después del depósito, un <b>secador</b> (frigorífico o de adsorción) elimina la humedad. La <b>red de distribución</b> se instala con una ligera pendiente (1-2 %) hacia unos puntos de purga, y las tomas salen por la parte superior de la tubería para que no arrastren el agua. Se suele hacer en anillo cerrado para que la presión sea uniforme.",
      "Antes de cada máquina se coloca una <mark>unidad de mantenimiento</mark> o FRL, con tres elementos: un <b>filtro</b> que retiene partículas y gotas de agua; un <b>regulador de presión</b> con manómetro, que mantiene constante la presión de trabajo aunque varíe la de la red; y, si hace falta, un <b>lubricador</b> que añade una fina niebla de aceite (muchos componentes actuales no lo necesitan).",
    ], svg: pasos("Cadena del aire comprimido: compresor, depósito con válvula de seguridad, secador y red, y unidad de mantenimiento con filtro, regulador y lubricador", ["Compresor + presostato", "Depósito (seguridad, purga)", "Secador y red con pendiente", "Unidad FRL en la máquina"], "var(--pen)") }),
    bloque({ h: "8.5 Actuadores: cilindros y motores", p: [
      "El <b>cilindro de simple efecto</b> recibe aire por un solo lado: el aire hace avanzar el vástago y un muelle lo hace retroceder (o al revés). Solo realiza trabajo en un sentido y la fuerza útil es la del aire menos la del muelle. Se usa para sujetar, expulsar o marcar piezas, con carreras cortas.",
      "El <b>cilindro de doble efecto</b> recibe aire por los dos lados y realiza trabajo en el avance y en el retroceso. En el avance, el aire empuja sobre toda la superficie del émbolo; en el retroceso, solo sobre la <b>corona circular</b>, porque el vástago ocupa parte de la superficie. Por eso la fuerza de retroceso es menor:",
      formula("F<sub>avance</sub> = p · π·D²/4 · η &nbsp;&nbsp; F<sub>retroceso</sub> = p · π·(D² − d²)/4 · η"),
      "η es el rendimiento, que tiene en cuenta el rozamiento de las juntas (entre 0,85 y 0,95). Por ejemplo, un cilindro de D = 50 mm y d = 20 mm a 6 bar (0,6 N/mm²) con η = 0,9 da 0,6 · 1 963,5 · 0,9 = 1 060 N en el avance y 0,6 · 1 649,3 · 0,9 = 891 N en el retroceso. Existen también cilindros de doble vástago, sin vástago (de banda), giratorios, de membrana y con amortiguación regulable en los finales de carrera. Los <b>motores neumáticos</b> (de paletas o de pistones) producen giro continuo y se usan en herramientas como atornilladores y taladros. Las <b>ventosas</b>, con vacío generado por un eyector, sujetan piezas planas.",
    ], svg: cilindroSVG, video: V("nh-lab", "Laboratorio básico de neumática: válvulas y actuadores", "neumática válvulas y actuadores") }),
    bloque({ h: "8.6 Consumo de aire de un cilindro", p: [
      "Para elegir el compresor hay que calcular el <b>consumo de aire</b> de la instalación, en litros de aire libre por minuto. En cada carrera, el cilindro se llena con un volumen V = S · L de aire a la presión de trabajo; en aire libre, ese volumen se multiplica por la relación de compresión.",
      formula("Doble efecto: V<sub>ciclo</sub> = [π·D²/4 + π·(D² − d²)/4] · L · (p<sub>rel</sub> + 1)/1"),
      "En un cilindro de simple efecto solo se cuenta la carrera de avance. El consumo por minuto es el consumo por ciclo multiplicado por el número de ciclos por minuto n.",
      "Ejemplo: el cilindro anterior (D = 50 mm, d = 20 mm) con una carrera de 200 mm, a 6 bar y 10 ciclos por minuto. Volumen de avance: 1 963,5 mm² · 200 mm = 0,393 L; de retroceso: 1 649,3 · 200 = 0,330 L. Por ciclo: 0,723 L a 7 bar absolutos = 5,06 L de aire libre. A 10 ciclos/min: <b>50,6 L/min</b>. A ese consumo hay que sumar el de las tuberías entre la válvula y el cilindro, las fugas y un margen para futuras ampliaciones (normalmente un 20-30 %).",
    ], svg: ficha("Cálculo del consumo de aire de un cilindro: volumen por carrera, relación de compresión y ciclos por minuto", "Consumo de aire", ["V = S · L por carrera", "× (p_rel + 1) → aire libre", "doble efecto: avance + retroceso", "× n ciclos/min + 20-30 %"], "var(--leaf)") }),
    bloque({ h: "8.7 Válvulas distribuidoras", p: [
      "Las <mark>válvulas distribuidoras</mark> dirigen el aire hacia unos conductos u otros: abren, cierran o cambian el camino del fluido. Se representan con símbolos normalizados (norma ISO 1219) y se designan con dos números: <b>vías/posiciones</b>. Las vías son los orificios de conexión y las posiciones son los estados que puede adoptar la válvula, cada uno dibujado como un cuadrado.",
      "Dentro de cada cuadrado, las flechas indican el paso del aire y las «T» los orificios cerrados. Las conexiones se dibujan en la posición de reposo y se numeran: <b>1</b> alimentación, <b>2</b> y <b>4</b> salidas de trabajo, <b>3</b> y <b>5</b> escapes, y <b>12</b> o <b>14</b> las señales de pilotaje. Una válvula 3/2 tiene 3 vías y 2 posiciones; puede ser <b>normalmente cerrada</b> (NC, en reposo no deja pasar aire de 1 a 2) o <b>normalmente abierta</b> (NA). Las 3/2 gobiernan cilindros de simple efecto, y las 4/2 y 5/2, los de doble efecto.",
      "A los lados del símbolo se dibujan los <b>accionamientos</b>: manuales (pulsador, palanca, pedal), mecánicos (rodillo, leva, muelle de retorno), neumáticos (pilotaje por presión) o eléctricos (<b>electroválvula</b> con solenoide). Una válvula es <b>monoestable</b> si vuelve sola a la posición de reposo (con muelle) y <b>biestable</b> si se queda en la última posición hasta que recibe la señal contraria, por lo que funciona como una memoria.",
    ], svg: valvulasSVG, video: V("nh-leer", "Cómo leer válvulas neumáticas", "cómo leer símbolos de válvulas neumáticas") }),
    bloque({ h: "8.8 Válvulas de regulación, bloqueo y lógica", p: [
      "La <b>válvula antirretorno</b> deja pasar el aire en un sentido y lo bloquea en el contrario. La <mark>válvula reguladora de caudal unidireccional</mark> (un estrangulador con un antirretorno en paralelo) regula el caudal en un solo sentido: es la que se usa para controlar la <b>velocidad</b> de un cilindro. Lo más habitual es estrangular el aire de <b>escape</b>, porque el movimiento es más estable.",
      "La <b>válvula selectora</b> (función lógica <b>O</b>) tiene dos entradas y una salida, y deja pasar el aire si llega por cualquiera de las dos entradas: permite mandar un cilindro desde dos puntos distintos. La <b>válvula de simultaneidad</b> (función lógica <b>Y</b>) solo da salida si llega aire por las dos entradas a la vez: se usa en mandos de seguridad a dos manos, para que el operario tenga las dos manos en los pulsadores y no pueda meterlas en la prensa.",
      "Completan el equipo la <b>válvula de escape rápido</b> (aumenta la velocidad del cilindro descargando el aire junto a él), la <b>válvula reguladora de presión</b>, la <b>válvula de secuencia</b> (da una señal cuando la presión alcanza un valor) y el <b>temporizador neumático</b>, formado por un regulador de caudal, un pequeño depósito y una válvula 3/2 pilotada: la válvula conmuta cuando el depósito se llena, al cabo de un tiempo regulable.",
    ], svg: rejilla("Válvulas de regulación y lógica: antirretorno, reguladora de caudal, selectora y simultaneidad, con su función", ["Válvula", "Función", "Uso"], [["Antirretorno", "un sentido", "bloqueo"], ["Reg. de caudal", "estrangula", "velocidad"], ["Selectora", "O (OR)", "mando desde 2 puntos"], ["Simultaneidad", "Y (AND)", "mando a 2 manos"]], "var(--red)") }),
    bloque({ h: "8.9 Circuitos neumáticos básicos", p: [
      "Los circuitos se dibujan de abajo arriba siguiendo el flujo de la señal: abajo la alimentación y la unidad de mantenimiento, luego los elementos de entrada (pulsadores, finales de carrera), los de procesamiento (selectoras, simultaneidad, temporizadores), los de mando (válvulas distribuidoras principales) y, arriba, los actuadores. Los elementos se nombran con un código: <b>1A</b> el cilindro, <b>1V1</b> su válvula, <b>1S1</b> sus sensores.",
      "En el <b>mando directo</b>, la válvula que acciona el operario alimenta directamente el cilindro: es sencillo, pero solo sirve para cilindros pequeños. En el <b>mando indirecto</b>, el pulsador envía una pequeña señal de pilotaje a una válvula principal de mayor tamaño, que es la que alimenta el cilindro: así se pueden mandar cilindros grandes desde lejos con válvulas pequeñas.",
      "Algunos circuitos típicos: un cilindro de simple efecto con una 3/2 NC de pulsador (avanza mientras se pulsa); un cilindro de doble efecto con una 5/2 biestable mandada por dos pulsadores (uno para avanzar y otro para retroceder); el retroceso automático con un <b>final de carrera</b> de rodillo que detecta el final del avance y pilota la 5/2; y el <b>movimiento de vaivén</b> con dos finales de carrera, que hace que el cilindro avance y retroceda continuamente hasta que se corta la marcha. Hoy se diseñan y simulan con programas como FluidSIM antes de montarlos.",
    ], svg: pasos("Estructura de un circuito neumático de abajo arriba: alimentación, elementos de entrada, procesamiento, válvulas de mando y actuadores", ["Alimentación y FRL (0Z)", "Entradas: pulsadores, finales (1S)", "Procesamiento: O, Y, tiempo", "Mando (1V) → actuador (1A)"], "var(--pen)"), video: V("nh-valvulas", "Válvulas neumáticas y cilindros neumáticos", "circuitos neumáticos válvulas y cilindros") }),
    bloque({ h: "8.10 Secuencias y electroneumática", p: [
      "Cuando una máquina tiene varios cilindros que deben moverse en un orden determinado, se describe la <b>secuencia</b> con una notación abreviada: cada cilindro se nombra con una letra, el avance con «+» y el retroceso con «−». Por ejemplo, <b>A+ B+ A− B−</b>: A sujeta una pieza, B la taladra, A la suelta y B vuelve.",
      "El <mark>diagrama espacio-fase</mark> representa la posición de cada cilindro (0 = retraído, 1 = extendido) en cada fase de la secuencia. Ayuda a ver qué sensor debe dar la orden de cada movimiento: por ejemplo, en la secuencia anterior, el final de carrera de A extendido (a1) ordena B+. Si una válvula biestable recibe a la vez la señal de avance y la de retroceso, el circuito se bloquea: se dice que hay <b>señales permanentes</b>, y se resuelven con métodos como la <b>cascada</b> o con finales de carrera abatibles.",
      "En la <b>electroneumática</b>, la potencia sigue siendo neumática, pero el control es eléctrico: los pulsadores, los <b>sensores</b> (finales de carrera eléctricos, detectores magnéticos tipo <i>reed</i> en el cilindro, sensores inductivos u ópticos) y los <b>relés</b> gobiernan <b>electroválvulas</b>. Es más flexible y permite usar un <b>autómata programable</b> (PLC) para secuencias complejas, como verás en el tema de automatización.",
    ], svg: faseSVG }),
    bloque({ h: "8.11 Oleohidráulica: el principio de Pascal", p: [
      "El <mark>principio de Pascal</mark> establece que la presión ejercida sobre un líquido encerrado se transmite íntegramente y en todas direcciones a todos sus puntos. En una <b>prensa hidráulica</b>, una fuerza F<sub>1</sub> sobre un émbolo pequeño de sección S<sub>1</sub> produce una presión p = F<sub>1</sub>/S<sub>1</sub>, que actúa sobre un émbolo grande de sección S<sub>2</sub> y genera una fuerza mucho mayor:",
      formula("F₁ / S₁ = F₂ / S₂ &nbsp;&nbsp; → &nbsp;&nbsp; F₂ = F₁ · S₂ / S₁ &nbsp;&nbsp; y &nbsp;&nbsp; S₁ · x₁ = S₂ · x₂"),
      "La multiplicación de la fuerza no es gratis: como el líquido es incompresible, el volumen que sale del cilindro pequeño entra en el grande, de modo que el émbolo grande se desplaza mucho menos. El trabajo es el mismo en los dos émbolos (sin pérdidas): F<sub>1</sub> · x<sub>1</sub> = F<sub>2</sub> · x<sub>2</sub>. Por ejemplo, con S<sub>1</sub> = 5 cm², S<sub>2</sub> = 500 cm² y F<sub>1</sub> = 200 N, se obtienen 20 000 N, pero si el émbolo pequeño baja 10 cm, el grande solo sube 1 mm.",
      "En un cilindro hidráulico, la fuerza se calcula como en el neumático (F = p · S), pero con presiones mucho mayores: un cilindro de 80 mm de diámetro a 150 bar ejerce 15 N/mm² · 5 026,5 mm² = 75,4 kN, unas 7,7 toneladas. Su <b>velocidad</b> depende del caudal que recibe: v = Q/S. Con 20 L/min, ese cilindro avanza a 3,33 · 10<sup>−4</sup>/5,03 · 10<sup>−3</sup> = 0,066 m/s.",
    ], svg: prensaSVG }),
    bloque({ h: "8.12 Componentes de los circuitos oleohidráulicos", p: [
      "Un circuito oleohidráulico tiene un <b>depósito</b> de aceite (que lo almacena, lo enfría y deja que se separen el aire y las impurezas), un <b>filtro</b> y una <b>bomba</b>, accionada por un motor eléctrico o de combustión. La bomba no genera presión, sino <b>caudal</b>: la presión aparece cuando el aceite encuentra resistencia en los actuadores.",
      "Las bombas pueden ser de <b>engranajes</b> (sencillas y baratas), de <b>paletas</b> (silenciosas) o de <b>pistones</b> axiales o radiales (las de mayor presión y rendimiento, a menudo de cilindrada variable). Su <b>cilindrada</b> V<sub>g</sub> es el volumen que impulsan en cada vuelta, y el caudal real es:",
      formula("Q = V<sub>g</sub> · n · η<sub>v</sub> &nbsp;&nbsp; P<sub>motor</sub> = p · Q / η<sub>total</sub>"),
      "Por ejemplo, una bomba de 20 cm³/vuelta a 1 450 rpm con un rendimiento volumétrico de 0,95 da 27,55 L/min. A 100 bar, la potencia hidráulica es 100 · 27,55/600 = 4,6 kW, y con un rendimiento total de 0,85 el motor debe dar 5,4 kW.",
      "La <mark>válvula limitadora de presión</mark> es imprescindible: si la presión supera el valor ajustado (por ejemplo, cuando el cilindro llega al final de carrera), se abre y devuelve el aceite al depósito, protegiendo la bomba y el circuito. Los circuitos llevan además válvulas distribuidoras (como las neumáticas, pero la 4/3 de centro cerrado o en tándem es muy habitual), reguladoras de caudal, antirretornos pilotados (para bloquear cargas suspendidas), <b>acumuladores</b> (que almacenan aceite a presión) y motores hidráulicos.",
    ], svg: figura("Circuito oleohidráulico", "Bomba, depósito, válvulas y actuadores", [["Depósito y filtro", "almacena y enfría", "separa aire"], ["Bomba", "engranajes · paletas", "pistones: Q = Vg·n·ηv"], ["Válvulas", "limitadora de presión", "4/3 · reguladoras"], ["Actuadores", "cilindros: v = Q/S", "motores hidráulicos"]], "var(--red)"), video: V("nh-oleo", "Circuito hidráulico básico: animación", "circuito hidráulico básico animación") }),
    bloque({ h: "8.13 Flujo en tuberías y pérdidas de carga", p: [
      "Cuando un fluido circula por una tubería, el rozamiento con las paredes y entre sus capas produce una <b>pérdida de carga</b>, es decir, una caída de presión que se transforma en calor. Las pérdidas aumentan con la longitud, con los codos, las válvulas y los estrechamientos, con la viscosidad y, sobre todo, con la velocidad (aproximadamente con su cuadrado en régimen turbulento).",
      "El tipo de flujo lo indica el <b>número de Reynolds</b>, Re = v · d / ν, donde ν es la viscosidad cinemática. Si Re < 2 300, el flujo es <b>laminar</b> (el fluido avanza en capas ordenadas, con pocas pérdidas); si es mayor, se vuelve <b>turbulento</b>. Por eso se limitan las velocidades del aceite: unos 0,5-1,5 m/s en la aspiración de la bomba, 3-6 m/s en las tuberías de presión y 2-4 m/s en las de retorno. Con la ecuación de continuidad se calcula el diámetro necesario: d = √(4Q/(π · v)).",
      "En la ecuación de <b>Bernoulli</b>, para un fluido ideal, la suma de la energía de presión, la cinética y la potencial es constante a lo largo de una línea de corriente: p + ½ ρ v² + ρ g h = constante. En los fluidos reales se añade el término de pérdidas. Las pérdidas calientan el aceite, cuya viscosidad baja con la temperatura; por eso los circuitos grandes llevan <b>intercambiadores</b> para refrigerarlo y mantenerlo entre 40 y 60 °C.",
    ], svg: ficha("Fórmulas del flujo en tuberías: continuidad, diámetro, número de Reynolds y Bernoulli", "Flujo en tuberías", ["v₁·S₁ = v₂·S₂", "d = √(4Q / (π·v))", "Re = v·d/ν (laminar < 2 300)", "p + ½ρv² + ρgh = cte"], "var(--inf)") }),
    bloque({ h: "8.14 Aplicaciones, seguridad y sostenibilidad", p: [
      "La neumática domina en las líneas de montaje y embalaje, en la industria alimentaria y farmacéutica, en las pinzas y ventosas de los robots, en las herramientas de taller, en las puertas de autobuses y trenes y en los frenos de vehículos pesados. La oleohidráulica mueve excavadoras, grúas, carretillas elevadoras, tractores, prensas, inyectoras de plástico, el tren de aterrizaje y los timones de los aviones, y la dirección y los frenos de los coches. Muchas máquinas combinan ambas con control electrónico.",
      "La <b>seguridad</b> es fundamental: antes de intervenir en una máquina hay que cortar y purgar la presión, porque un cilindro puede moverse de forma inesperada; los latiguillos se deben sujetar para que no latigueen si se sueltan; un chorro de aceite a alta presión puede penetrar en la piel; y el aire comprimido nunca debe usarse para limpiarse la ropa o el cuerpo. Los mandos a dos manos, las válvulas de bloqueo y los diseños a prueba de fallos protegen a los operarios.",
      "En cuanto a la <b>sostenibilidad</b>, el aire comprimido es una de las formas más caras de energía en una fábrica: reparar fugas, reducir la presión de trabajo al mínimo necesario, apagar el compresor fuera del horario y recuperar su calor puede ahorrar más del 30 %. En hidráulica se usan aceites biodegradables en aplicaciones agrícolas y forestales, bombas de cilindrada variable que solo dan el caudal necesario y, cada vez más, se sustituyen algunos actuadores por <b>actuadores eléctricos</b>, más eficientes y precisos.",
    ], svg: pasos("Buenas prácticas en sistemas de fluidos: cortar y purgar la presión antes de intervenir, reparar fugas, ajustar la presión al mínimo y recuperar el calor del compresor", ["Purgar antes de intervenir", "Reparar fugas", "Presión mínima necesaria", "Recuperar calor del compresor"], "var(--leaf)") }),
  ],
  figura: figura("Neumática y oleohidráulica", "Energía transmitida por fluidos a presión", [["Magnitudes", "p = F/S · Q = v·S", "P = p·Q"], ["Neumática", "aire 6 bar · Boyle", "FRL · cilindros"], ["Control", "válvulas vías/posiciones", "O · Y · secuencias"], ["Oleohidráulica", "Pascal · bombas", "limitadora de presión"]], "var(--pen)"),
  video: V("nh-lab", "Laboratorio básico de neumática: válvulas y actuadores", "neumática válvulas y actuadores"),
  ejemplos: [
    { enunciado: "Un cilindro de doble efecto tiene D = 50 mm y d = 20 mm y trabaja a 6 bar con un rendimiento de 0,9. Calcula las fuerzas de avance y de retroceso.", pasos: ["S<sub>avance</sub> = π · 50²/4 = 1 963,5 mm²; S<sub>retroceso</sub> = π · (50² − 20²)/4 = 1 649,3 mm².", "p = 6 bar = 0,6 N/mm².", "F<sub>av</sub> = 0,6 · 1 963,5 · 0,9 = 1 060 N; F<sub>ret</sub> = 0,6 · 1 649,3 · 0,9 = 891 N."], resultado: "1 060 N de avance y 891 N de retroceso." },
    { enunciado: "Un cilindro de simple efecto de 32 mm de diámetro trabaja a 6 bar. Su muelle ejerce 60 N y el rendimiento es 0,9. ¿Qué fuerza útil da?", pasos: ["S = π · 32²/4 = 804,2 mm².", "F<sub>aire</sub> = 0,6 · 804,2 · 0,9 = 434,3 N.", "F<sub>útil</sub> = 434,3 − 60 = 374,3 N."], resultado: "Unos 374 N." },
    { enunciado: "Calcula el consumo de aire libre del cilindro del primer ejemplo con 200 mm de carrera, a 6 bar y 10 ciclos por minuto.", pasos: ["V<sub>av</sub> = 1 963,5 · 200 = 392 700 mm³ = 0,393 L; V<sub>ret</sub> = 0,330 L.", "Por ciclo: 0,723 L a 7 bar abs → 0,723 · 7 = 5,06 L de aire libre.", "Por minuto: 5,06 · 10 = 50,6 L/min."], resultado: "50,6 L/min de aire libre." },
    { enunciado: "En una prensa hidráulica, S₁ = 5 cm² y S₂ = 500 cm². Si sobre el émbolo pequeño se aplican 200 N y baja 10 cm, ¿qué fuerza se obtiene y cuánto sube el grande?", pasos: ["p = 200/5 = 40 N/cm² = 4 bar.", "F₂ = 40 · 500 = 20 000 N.", "x₂ = S₁ · x₁/S₂ = 5 · 10/500 = 0,1 cm."], resultado: "20 000 N y un desplazamiento de 1 mm." },
    { enunciado: "Un cilindro hidráulico de 80 mm de diámetro trabaja a 150 bar y recibe 20 L/min. Calcula su fuerza y su velocidad de avance.", pasos: ["S = π · 80²/4 = 5 026,5 mm² = 5,03 · 10<sup>−3</sup> m².", "F = 15 N/mm² · 5 026,5 mm² = 75 400 N.", "Q = 20/60 000 = 3,33 · 10<sup>−4</sup> m³/s; v = Q/S = 0,066 m/s."], resultado: "75,4 kN y 6,6 cm/s." },
    { enunciado: "Una bomba de 20 cm³/vuelta gira a 1 450 rpm (η<sub>v</sub> = 0,95) y trabaja a 100 bar. Calcula el caudal, la potencia hidráulica y la del motor si η<sub>total</sub> = 0,85.", pasos: ["Q = 20 · 1 450 · 0,95 = 27 550 cm³/min = 27,55 L/min.", "P = 100 · 27,55/600 = 4,59 kW.", "P<sub>motor</sub> = 4,59/0,85 = 5,4 kW."], resultado: "27,55 L/min, 4,6 kW hidráulicos y 5,4 kW en el motor." },
  ],
  errores: [
    "Usar presiones relativas en la ley de Boyle: hay que usar presiones absolutas (relativa + 1 bar).",
    "Calcular la fuerza de retroceso de un doble efecto con toda la superficie del émbolo: hay que restar la del vástago.",
    "Olvidar el muelle en el simple efecto: la fuerza útil es la del aire menos la del muelle.",
    "Confundir vías con posiciones: en una 5/2 hay 5 orificios y 2 cuadrados.",
    "Pensar que la bomba hidráulica crea presión: crea caudal; la presión la impone la resistencia de la carga.",
    "Creer que la prensa hidráulica multiplica el trabajo: multiplica la fuerza, pero el desplazamiento se divide en la misma proporción.",
  ],
  ejercicios: [
    B("Pasa a bar y a MPa: 600 kPa, 0,8 N/mm² y 2,5 · 10⁶ Pa.", "6 bar = 0,6 MPa; 8 bar = 0,8 MPa; 25 bar = 2,5 MPa."),
    B("Un manómetro marca 6 bar. ¿Cuál es la presión absoluta?", "Unos 7 bar."),
    B("Calcula la fuerza de avance de un cilindro de 40 mm de diámetro a 6 bar, sin pérdidas.", "S = 1 256,6 mm²; F = 0,6 · 1 256,6 = 754 N."),
    B("Un depósito de 100 L está a 7 bar relativos. ¿Qué volumen de aire libre contiene?", "100 · 8 = 800 L (a 1 bar absoluto)."),
    B("Indica qué significa cada número en una válvula 5/2 y numera sus conexiones.", "5 vías y 2 posiciones. 1 alimentación; 2 y 4 utilización; 3 y 5 escapes; 12 y 14 pilotajes."),
    B("¿Qué diferencia hay entre una válvula monoestable y una biestable?", "La monoestable vuelve sola a reposo (muelle); la biestable mantiene la última posición hasta recibir la señal contraria (memoria)."),
    B("¿Qué válvula usarías para mandar un cilindro desde dos pulsadores distintos? ¿Y para exigir que se pulsen los dos?", "Desde dos puntos: selectora (O). Los dos a la vez: simultaneidad (Y)."),
    B("Nombra los tres elementos de una unidad de mantenimiento y su función.", "Filtro (retiene partículas y agua), regulador (mantiene la presión de trabajo) y lubricador (añade niebla de aceite)."),
    B("En una prensa hidráulica, S₁ = 10 cm² y S₂ = 400 cm². ¿Qué fuerza se obtiene con 150 N?", "F₂ = 150 · 40 = 6 000 N."),
    B("¿Por qué se regula normalmente el aire de escape para controlar la velocidad de un cilindro?", "Porque el aire comprimido en la cámara de escape actúa como un colchón que hace el movimiento más uniforme."),
    B("Calcula la velocidad del aceite en una tubería de 10 mm de diámetro interior con un caudal de 15 L/min.", "S = 78,5 mm² = 7,85 · 10<sup>−5</sup> m²; Q = 2,5 · 10<sup>−4</sup> m³/s; v = 3,18 m/s."),
    B("Escribe la secuencia de dos cilindros: A sujeta, B estampa, B vuelve y A suelta.", "A+ B+ B− A−."),
    M("Un cilindro de doble efecto (D = 63 mm, d = 20 mm) trabaja a 6 bar con η = 0,9. Calcula las fuerzas de avance y retroceso.", "S<sub>av</sub> = 3 117,2 mm² → F = 1 683 N. S<sub>ret</sub> = 2 803,1 mm² → F = 1 514 N."),
    M("¿Qué diámetro mínimo debe tener un cilindro que tiene que empujar 2 000 N a 6 bar con η = 0,85?", "S ≥ 2 000/(0,6 · 0,85) = 3 922 mm²; D ≥ √(4 · 3 922/π) = 70,7 mm → se elige D = 80 mm (normalizado)."),
    M("Calcula el consumo de aire libre de un cilindro de simple efecto de 32 mm de diámetro y 100 mm de carrera, a 6 bar y 30 ciclos/min.", "V = 804,2 · 100 = 0,080 L; × 7 = 0,563 L; × 30 = 16,9 L/min."),
    M("Una instalación tiene 4 cilindros que consumen en total 180 L/min. Con un margen del 25 % por fugas y ampliaciones, ¿qué compresor necesita?", "180 · 1,25 = 225 L/min de aire libre (se elegiría uno de 250 L/min)."),
    M("Una fuga de aire equivale a 60 L/min de aire libre durante 4 000 h/año. Si producir 1 m³ de aire libre cuesta 0,02 €, ¿cuánto cuesta al año?", "60 · 60 · 4 000 = 14 400 m³ → 288 €/año."),
    M("Un cilindro hidráulico de D = 100 mm y d = 56 mm recibe 40 L/min. Calcula las velocidades de avance y retroceso.", "Q = 6,67 · 10<sup>−4</sup> m³/s. S<sub>av</sub> = 7,854 · 10<sup>−3</sup> m² → 0,085 m/s. S<sub>ret</sub> = 5,391 · 10<sup>−3</sup> m² → 0,124 m/s (retrocede más rápido)."),
    M("Con el cilindro anterior a 160 bar, calcula las fuerzas de avance y retroceso.", "F<sub>av</sub> = 16 · 7 854 = 125,7 kN; F<sub>ret</sub> = 16 · 5 391 = 86,3 kN."),
    M("Una bomba debe dar 50 L/min a 1 500 rpm con η<sub>v</sub> = 0,92. ¿Qué cilindrada necesita?", "V<sub>g</sub> = 50 000/(1 500 · 0,92) = 36,2 cm³/vuelta."),
    M("Calcula la potencia del motor para una bomba que da 60 L/min a 200 bar con η<sub>total</sub> = 0,8.", "P<sub>h</sub> = 200 · 60/600 = 20 kW; P<sub>motor</sub> = 25 kW."),
    M("¿Qué diámetro interior necesita una tubería de presión que lleva 60 L/min si la velocidad no debe superar 5 m/s?", "Q = 10<sup>−3</sup> m³/s; d = √(4 · 10<sup>−3</sup>/(π · 5)) = 0,016 m = 16 mm."),
    M("Dibuja el diagrama espacio-fase de la secuencia A+ B+ B− A− e indica qué sensor ordena cada movimiento.", "A sube en la fase 1 y baja en la 4; B sube en la 2 y baja en la 3. B+ lo ordena a1; B− lo ordena b1; A− lo ordena b0; A+ el pulsador de marcha y b0 con a0."),
    A("Un elevador hidráulico de coches debe levantar 25 kN a 1,8 m en 20 s con un cilindro de 120 mm. Calcula la presión necesaria (η = 0,95), el caudal y la potencia hidráulica.", "S = 11 310 mm²; p = 25 000/(11 310 · 0,95) = 2,33 MPa = 23,3 bar. v = 0,09 m/s; Q = 0,09 · 0,01131 = 1,02 · 10<sup>−3</sup> m³/s = 61 L/min. P = 23,3 · 61/600 = 2,37 kW."),
    A("En la secuencia A+ B+ A− B− con válvulas biestables pilotadas por finales de carrera, ¿hay señales permanentes? Justifícalo.", "Órdenes: B+ con a1, A− con b1, B− con a0 y A+ con b0 y marcha. Cuando se necesita cada movimiento, la señal del movimiento contrario ya ha desaparecido (por ejemplo, al llegar b1 para A−, b0 está inactiva porque B está fuera). No hay señales permanentes ni bloqueos, a diferencia de A+ B+ B− A−."),
    A("En la secuencia A+ B+ B− A−, identifica las señales permanentes y propone una solución.", "B− (ordenada por b1) choca con B+ (a1, que sigue activa porque A está fuera): bloqueo en B. Y A− (ordenada por b0) choca con A+ (si la marcha sigue pulsada). Solución: método cascada con una válvula de memoria que divide la secuencia en dos grupos (A+ B+ | B− A−), o finales de carrera abatibles."),
    A("Un taller tiene un compresor de 7,5 kW que funciona 2 000 h/año al 70 % de carga. Si reparando fugas y bajando la presión de 8 a 6,5 bar se ahorra un 25 %, ¿cuánto se ahorra al año con la electricidad a 0,16 €/kWh?", "Consumo: 7,5 · 0,7 · 2 000 = 10 500 kWh. Ahorro: 2 625 kWh = 420 €/año."),
    A("Compara la energía que necesita un cilindro neumático y uno eléctrico para empujar 1 000 N a lo largo de 0,2 m, 20 veces por minuto durante 8 h, si el sistema neumático tiene un rendimiento global del 12 % y el eléctrico del 70 %.", "Trabajo útil: 200 J por carrera · 20 · 60 · 8 = 1,92 MJ = 0,533 kWh. Neumático: 4,44 kWh; eléctrico: 0,76 kWh. El eléctrico consume unas 6 veces menos."),
    A("Una grúa hidráulica sostiene una carga con un cilindro. ¿Qué pasaría si se rompiera un latiguillo? ¿Qué válvula lo evita y dónde se coloca?", "La carga caería al vaciarse el cilindro. Se evita con una válvula antirretorno pilotada (o de equilibrado, contrabalance) montada directamente sobre el cilindro, que solo deja salir el aceite si se pilota para bajar."),
    A("Diseña el mando a dos manos de una prensa neumática con un cilindro de doble efecto que retrocede automáticamente. Indica las válvulas necesarias.", "Dos pulsadores 3/2 NC → válvula de simultaneidad (Y) → pilotaje 14 de una 5/2 biestable. Final de carrera de rodillo 3/2 en el extremo del avance → pilotaje 12 para el retroceso. Reguladoras de caudal en los escapes para la velocidad. Los pulsadores, separados para que no se puedan pulsar con una mano."),
  ],
  quiz: [
    q4("1 bar equivale a…", ["10³ Pa", "10⁵ Pa", "10⁶ Pa", "1 Pa"], 1, "0,1 MPa."),
    q4("La presión absoluta es…", ["la relativa − 1 bar", "la relativa + la atmosférica", "la que marca el manómetro", "siempre 1 bar"], 1, "p_abs = p_rel + p_atm."),
    q4("La ley de Boyle dice que, a T constante…", ["p/V = cte", "p·V = cte", "p + V = cte", "V/T = cte"], 1, "Con presiones absolutas."),
    q4("La potencia hidráulica es…", ["p/Q", "p·Q", "F·S", "Q/S"], 1, "P = p·Q."),
    q4("La unidad de mantenimiento incluye…", ["compresor, depósito y secador", "filtro, regulador y lubricador", "válvulas O e Y", "cilindros"], 1, "FRL."),
    q4("Un cilindro de simple efecto retrocede por…", ["aire", "un muelle", "gravedad siempre", "un motor"], 1, "Trabaja en un solo sentido."),
    q4("En el retroceso de un doble efecto, la superficie es…", ["π·D²/4", "π·(D² − d²)/4", "π·d²/4", "π·D"], 1, "La corona."),
    q4("Una válvula 3/2 tiene…", ["3 posiciones y 2 vías", "3 vías y 2 posiciones", "3 escapes", "5 vías"], 1, "Vías/posiciones."),
    q4("En la numeración de válvulas, el 1 es…", ["el escape", "la alimentación", "la salida", "el pilotaje"], 1, "Presión."),
    q4("Para un cilindro de doble efecto se usa una válvula…", ["2/2", "3/2", "5/2", "antirretorno"], 2, "O 4/2."),
    q4("Una válvula biestable…", ["vuelve a reposo con muelle", "mantiene la última posición", "solo tiene una posición", "es siempre eléctrica"], 1, "Funciona como memoria."),
    q4("La válvula de simultaneidad realiza la función…", ["O", "Y", "NO", "memoria"], 1, "Mando a dos manos."),
    q4("La velocidad de un cilindro se regula con…", ["una selectora", "una reguladora de caudal", "un manómetro", "el muelle"], 1, "Estrangulando el escape."),
    q4("En A+ B+ A− B−, el «+» significa…", ["retroceso", "avance", "presión", "señal eléctrica"], 1, "Vástago fuera."),
    q4("En electroneumática, las válvulas se accionan con…", ["pulsadores mecánicos", "solenoides", "palancas", "aire"], 1, "Electroválvulas."),
    q4("El principio de Pascal dice que la presión en un líquido encerrado…", ["se pierde", "se transmite por igual a todos los puntos", "solo actúa hacia abajo", "aumenta con el volumen"], 1, "Prensa hidráulica."),
    q4("En una prensa hidráulica, F₂ =", ["F₁·S₁/S₂", "F₁·S₂/S₁", "F₁", "F₁·S₂"], 1, "Multiplica la fuerza."),
    q4("La velocidad de un cilindro hidráulico es…", ["Q·S", "Q/S", "p·S", "p/Q"], 1, "v = Q/S."),
    q4("La válvula que protege el circuito hidráulico de sobrepresiones es…", ["la antirretorno", "la limitadora de presión", "la selectora", "la 4/3"], 1, "Devuelve el aceite al depósito."),
    q4("Un flujo con Re = 1 000 es…", ["turbulento", "laminar", "supersónico", "inestable"], 1, "Re < 2 300."),
  ],
  examen: [
    q4("Cilindro de 50 mm a 6 bar sin pérdidas. F =", ["1 178 N", "300 N", "11 780 N", "589 N"], 0, "0,6 · 1 963,5."),
    q4("D = 50 mm, d = 20 mm. S de retroceso =", ["1 963,5 mm²", "1 649,3 mm²", "314,2 mm²", "2 278 mm²"], 1, "π·(2 500 − 400)/4."),
    q4("Depósito de 40 L a 9 bar relativos. Aire libre:", ["360 L", "400 L", "40 L", "440 L"], 1, "40 · 10."),
    q4("Prensa con S₁ = 2 cm², S₂ = 200 cm² y F₁ = 100 N. F₂ =", ["1 000 N", "10 000 N", "200 N", "20 000 N"], 1, "Relación 100."),
    q4("Cilindro hidráulico con S = 0,005 m² y Q = 0,0005 m³/s. v =", ["0,1 m/s", "1 m/s", "0,01 m/s", "10 m/s"], 0, "Q/S."),
    q4("100 bar y 60 L/min transportan…", ["6 kW", "10 kW", "60 kW", "1 kW"], 1, "100 · 60/600."),
    q4("Bomba de 10 cm³/vuelta a 1 500 rpm (sin pérdidas). Q =", ["15 L/min", "150 L/min", "1,5 L/min", "10 L/min"], 0, "15 000 cm³/min."),
    q4("Una válvula con 5 orificios y 3 posiciones es una…", ["3/5", "5/3", "5/2", "4/3"], 1, "Vías/posiciones."),
  ],
  feynman: ["En qué se diferencian la neumática y la oleohidráulica y cuándo conviene cada una", "Por qué la fuerza de retroceso de un cilindro de doble efecto es menor", "Cómo se lee el símbolo de una válvula 5/2", "Cómo funciona un mando de seguridad a dos manos", "Por qué la prensa hidráulica multiplica la fuerza pero no el trabajo"],
  glosario: [
    ["Presión relativa", "Presión medida respecto a la atmosférica; la que marca el manómetro."],
    ["Caudal", "Volumen de fluido que pasa por una sección por unidad de tiempo."],
    ["Aire libre", "Volumen que ocuparía el aire comprimido a presión atmosférica."],
    ["Unidad de mantenimiento", "Conjunto de filtro, regulador y lubricador previo a cada máquina."],
    ["Cilindro de simple efecto", "Cilindro que recibe fluido por un lado y retrocede por un muelle."],
    ["Cilindro de doble efecto", "Cilindro que recibe fluido por los dos lados y trabaja en ambos sentidos."],
    ["Válvula distribuidora", "Válvula que dirige el fluido; se designa por vías y posiciones."],
    ["Electroválvula", "Válvula accionada por un solenoide."],
    ["Válvula reguladora de caudal", "Válvula que estrangula el paso del fluido para regular la velocidad."],
    ["Válvula selectora", "Válvula que realiza la función lógica O."],
    ["Válvula de simultaneidad", "Válvula que realiza la función lógica Y."],
    ["Final de carrera", "Sensor que detecta la posición extrema de un cilindro."],
    ["Diagrama espacio-fase", "Representación del estado de cada actuador en cada fase de una secuencia."],
    ["Principio de Pascal", "La presión en un líquido encerrado se transmite por igual a todos sus puntos."],
    ["Cilindrada de una bomba", "Volumen que impulsa la bomba en cada vuelta."],
    ["Válvula limitadora de presión", "Válvula que devuelve el aceite al depósito si se supera la presión ajustada."],
    ["Pérdida de carga", "Caída de presión debida al rozamiento del fluido en los conductos."],
  ],
  situacion: {
    titulo: "La estación de clasificación de piezas",
    reto: "Vuestro equipo diseñará, simulará y montará (o simulará por completo) una estación neumática que reciba piezas por una rampa, las sujete, las marque y las expulse a una caja, con un mando a dos manos y retorno automático.",
    pasos: [
      "Definid la secuencia de los cilindros y dibujad el diagrama espacio-fase.",
      "Calculad el diámetro de cada cilindro según la fuerza necesaria y el consumo de aire de la estación a 6 bar.",
      "Diseñad el circuito con válvulas, finales de carrera, función Y y reguladores de velocidad, resolviendo las señales permanentes.",
      "Simuladlo con un programa (por ejemplo, FluidSIM) y, si es posible, montadlo en el panel del taller.",
      "Proponed una versión electroneumática con sensores y PLC, y comparad ventajas e inconvenientes.",
    ],
    producto: "El esquema del circuito, la memoria de cálculo, la simulación o el montaje funcionando y una comparación con la versión electroneumática.",
    evaluacion: [
      "Calcula correctamente fuerzas, diámetros y consumos.",
      "Usa los símbolos normalizados y la numeración de los elementos.",
      "La secuencia funciona sin bloqueos y con las condiciones de seguridad.",
      "Analiza alternativas de control y su eficiencia.",
    ],
  },
  mapa: mapaB("NEUMÁTICA E HIDRÁULICA", [
    ["Magnitudes", "p = F/S · Q = v·S · P = p·Q", "var(--pen)"],
    ["Neumática", "aire · Boyle · FRL · cilindros", "var(--leaf)"],
    ["Control", "válvulas · O · Y · secuencias", "var(--red)"],
    ["Oleohidráulica", "Pascal · bombas · limitadora", "var(--inf)"],
  ]),
  tarjetas: [
    ["Presión", "p = F/S ; 1 bar = 10⁵ Pa"],
    ["Presión absoluta", "p_abs = p_rel + 1 bar"],
    ["Ley de Boyle", "p₁V₁ = p₂V₂ (absolutas)"],
    ["Caudal y continuidad", "Q = v·S = cte"],
    ["Potencia hidráulica", "P = p·Q ; kW = bar·L/min/600"],
    ["Fuerza de avance", "p · πD²/4 · η"],
    ["Fuerza de retroceso", "p · π(D² − d²)/4 · η"],
    ["Consumo de aire", "S·L·(p_rel + 1)·n"],
    ["Designación de válvulas", "vías / posiciones"],
    ["Funciones lógicas", "selectora = O ; simultaneidad = Y"],
    ["Prensa hidráulica", "F₁/S₁ = F₂/S₂"],
    ["Bomba", "Q = Vg · n · ηv"],
  ],
  familias: [
    "Observad la puerta de un autobús o un tren y escuchad el escape de aire: ¿qué tipo de actuador creéis que la mueve?",
    "Usad dos jeringas de distinto tamaño unidas con un tubo y llenas de agua: notad cómo cambia la fuerza al empujar una u otra.",
    "Buscad en una obra o en el campo máquinas con cilindros hidráulicos y fijaos en los latiguillos.",
    "Comprobad con un manómetro la presión de las ruedas de la bicicleta: ¿es relativa o absoluta?",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas automáticos» y «Sistemas mecánicos»: sistemas neumáticos y oleohidráulicos; magnitudes y principios; producción y tratamiento del aire comprimido; actuadores, válvulas y sus símbolos; circuitos básicos, secuencias y electroneumática; principio de Pascal y componentes oleohidráulicos.`,
    ideas: [
      "Simulación de circuitos con FluidSIM o programas libres antes del montaje en el panel.",
      "Montaje de una prensa hidráulica con jeringas y medida de fuerzas con dinamómetro.",
      "Detección de fugas de aire en el compresor del taller con agua jabonosa y cálculo de su coste.",
      "Proyecto de brazo hidráulico con jeringas y cartón con análisis de fuerzas.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Neumática, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Neum%C3%A1tica" },
    { t: "Principio de Pascal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Principio_de_Pascal" },
    { t: "INSST: seguridad en máquinas con energía neumática e hidráulica", url: "https://www.insst.es/" },
  ],
  revisado: "2026-11-21",
};
