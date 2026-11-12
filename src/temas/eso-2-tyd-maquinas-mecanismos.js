// Tecnología y Digitalización 2º ESO: máquinas simples y mecanismos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

// Rueda dentada sencilla: centro (x, y), radio r, n dientes, color c.
const engranaje = (x, y, r, n, c) => {
  let d = "";
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * 2 * Math.PI, a1 = ((i + 0.5) / n) * 2 * Math.PI;
    const p = (a, R) => `${(x + R * Math.cos(a)).toFixed(1)} ${(y + R * Math.sin(a)).toFixed(1)}`;
    d += `${i ? "L" : "M"}${p(a0, r)} L ${p(a0 + 0.12 / n * 6, r + 6)} L ${p(a1 - 0.12 / n * 6, r + 6)} L ${p(a1, r)} `;
  }
  return `<path d="${d}Z" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/>`;
};

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Máquinas simples y mecanismos",
  minutos: 55,
  objetivos: ["Explicar qué es una máquina y qué es un mecanismo", "Aplicar la ley de la palanca y distinguir sus tres géneros", "Describir la polea, el polipasto, el plano inclinado, la cuña, el torno y el tornillo", "Calcular la relación de transmisión en poleas con correa y engranajes y reconocer mecanismos de transformación del movimiento"],
  claves: ["máquina", "mecanismo", "palanca", "fulcro", "ley de la palanca", "polea", "polipasto", "plano inclinado", "engranaje", "relación de transmisión", "biela-manivela"],
  pregunta: {
    texto: "Arquímedes dijo: «Dadme un punto de apoyo y moveré el mundo». ¿Exageraba?",
    respuesta: "Un poco, pero tenía razón en el fondo. Con una <mark>palanca</mark> suficientemente larga y un punto de apoyo, una fuerza pequeña puede levantar un peso enorme. Cuanto más lejos del apoyo empujes, menos fuerza necesitas. Eso sí, para mover la Tierra un milímetro necesitaría una palanca de longitud astronómica y tendría que empujar durante millones de años.",
  },
  bloques: [
    {
      html: `<h3>Máquinas y mecanismos</h3><p>Una <mark>máquina</mark> es un conjunto de elementos que transforma una energía o una fuerza para hacer un trabajo de forma más fácil, más rápida o más cómoda. Las <b>máquinas simples</b> tienen muy pocas piezas y se conocen desde la Antigüedad: la palanca, la polea, el plano inclinado, la cuña, el torno y el tornillo. Las <b>máquinas compuestas</b> combinan varias máquinas simples y mecanismos: una bicicleta, una grúa, una lavadora o un coche. Un <mark>mecanismo</mark> es la parte de una máquina que <b>transmite o transforma el movimiento y las fuerzas</b> desde el elemento motor (el que produce el movimiento: un pedal, un motor, una manivela) hasta el elemento receptor (el que realiza el trabajo: una rueda, una hélice, un brazo). Hay <b>mecanismos de transmisión</b>, que llevan el movimiento de un lugar a otro, y <b>mecanismos de transformación</b>, que cambian el tipo de movimiento.</p>`,
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que puede girar alrededor de un punto de apoyo llamado <b>fulcro</b>. Sobre ella actúan dos fuerzas: la <b>potencia</b> (P), la fuerza que aplicamos, y la <b>resistencia</b> (R), la fuerza que queremos vencer, como el peso de un objeto. La distancia de cada fuerza al fulcro se llama <b>brazo</b>: brazo de potencia (BP) y brazo de resistencia (BR). La <mark>ley de la palanca</mark> dice que la palanca está en equilibrio cuando <b>P · BP = R · BR</b>. Esto significa que, si el brazo de potencia es más largo que el de resistencia, podemos mover un peso grande con una fuerza pequeña. Por ejemplo, con una barra en la que BP es 4 veces BR, para levantar 400 N basta con hacer 100 N. A cambio, tenemos que mover nuestro extremo una distancia 4 veces mayor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Palanca: una barra sobre un fulcro con la resistencia de 400 newtons a 0,5 metros y la potencia de 100 newtons a 2 metros; 100 por 2 es igual a 400 por 0,5">${BG}
        <line x1="20" y1="90" x2="240" y2="90" stroke="#8a6a4a" stroke-width="8" stroke-linecap="round"/><path d="M64 94 l -14 32 h 28 Z" fill="var(--muted)"/>
        <rect x="16" y="56" width="30" height="30" fill="var(--red)" fill-opacity=".7"/>${fl(31, 60, 31, 82, "var(--ink)", 2)}${t(31, 48, "R = 400 N", { size: 10, color: "var(--red)" })}
        ${fl(234, 40, 234, 84, "var(--pen)", 3)}${t(222, 32, "P = 100 N", { size: 10, color: "var(--pen)" })}
        <path d="M31 104 H 64 M64 112 H 234" stroke="var(--muted)"/>${t(30, 128, "0,5 m", { size: 9, color: "var(--muted)" })}${t(150, 128, "2 m", { size: 10, color: "var(--muted)" })}${t(64, 142, "fulcro", { size: 10 })}
        ${t(150, 166, "P · BP = R · BR → 100 · 2 = 400 · 0,5", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "aR6NfRBz7ME", titulo: "Las máquinas: máquinas simples y compuestas", canal: "Smile and Learn", vistas: 1138933 },
    },
    {
      html: `<h3>Los tres géneros de palanca</h3><p>Según dónde esté el fulcro respecto a la potencia y la resistencia, hay tres tipos o <mark>géneros de palanca</mark>. En las de <b>primer género</b>, el <b>fulcro está en medio</b>, entre la potencia y la resistencia: el balancín, las tijeras, los alicates, la barra para levantar una piedra o el martillo al sacar un clavo. Pueden ahorrar fuerza o no, según dónde esté el fulcro. En las de <b>segundo género</b>, la <b>resistencia está en medio</b>: la carretilla, el cascanueces, el abrebotellas o una puerta. Siempre <b>ahorran fuerza</b>, porque el brazo de potencia es mayor. En las de <b>tercer género</b>, la <b>potencia está en medio</b>: las pinzas de depilar, la caña de pescar, la escoba o nuestro antebrazo al levantar un peso. No ahorran fuerza, pero dan <b>más velocidad y precisión</b> al movimiento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres géneros de palanca: primer género con el fulcro en medio, como un balancín; segundo género con la resistencia en medio, como una carretilla; tercer género con la potencia en medio, como unas pinzas">${BG}
        ${[[36, "1.º: fulcro en medio", [26, 120, 214]], [90, "2.º: resistencia en medio", [26, 120, 214]], [144, "3.º: potencia en medio", [26, 120, 214]]].map(([y, s], i) => { const pos = [["R", "F", "P"], ["F", "R", "P"], ["F", "P", "R"]][i]; return `<line x1="20" y1="${y}" x2="230" y2="${y}" stroke="#8a6a4a" stroke-width="5" stroke-linecap="round"/>${pos.map((k, j) => { const x = [26, 120, 214][j]; return k === "F" ? `<path d="M${x} ${y + 3} l -8 14 h 16 Z" fill="var(--muted)"/>` : k === "R" ? `<rect x="${x - 8}" y="${y - 18}" width="16" height="14" fill="var(--red)" fill-opacity=".7"/>` : fl(x, y - 22, x, y - 4, "var(--pen)", 2.5); }).join("")}${t(120, y + 30, `${s} (${["balancín", "carretilla", "pinzas"][i]})`, { size: 9, color: "var(--muted)" })}`; }).join("")}</svg>`,
    },
    {
      html: `<h3>La polea y el polipasto</h3><p>La <mark>polea</mark> es una rueda con un canal o garganta en su borde por el que pasa una cuerda o cadena, y que gira alrededor de un eje. La <b>polea fija</b> está sujeta a un soporte: no ahorra fuerza (hay que hacer la misma que el peso), pero permite <b>cambiar la dirección</b> de la fuerza, y es más cómodo tirar hacia abajo que levantar hacia arriba. Se usa en los pozos, en los mástiles de las banderas y en las persianas. La <b>polea móvil</b> se mueve con la carga y reduce la fuerza a la mitad, porque el peso se reparte entre los dos tramos de cuerda. Un <mark>polipasto</mark> combina varias poleas fijas y móviles: cuantas más poleas móviles tiene, menos fuerza hace falta. Con un polipasto de dos poleas móviles, la fuerza necesaria es la cuarta parte del peso. Se usan en grúas, talleres y barcos de vela; a cambio, hay que tirar de mucha más cuerda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polea fija: hay que tirar con 100 newtons para subir 100 newtons. Polea móvil: basta con 50 newtons porque el peso se reparte entre dos cuerdas">${BG}
        <rect x="10" y="14" width="240" height="8" fill="var(--muted)"/>
        <line x1="66" y1="22" x2="66" y2="36" stroke="var(--ink)" stroke-width="2"/><circle cx="66" cy="50" r="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="66" cy="50" r="3" fill="var(--ink)"/>
        <path d="M50 50 V 120 M82 50 V 140" stroke="#b5653a" stroke-width="2"/><rect x="36" y="120" width="28" height="22" fill="var(--red)" fill-opacity=".7"/>${t(50, 158, "100 N", { size: 10 })}${fl(82, 120, 82, 150, "var(--pen)", 2.5)}${t(94, 160, "100 N", { size: 10, color: "var(--pen)", anchor: "start" })}${t(66, 176, "fija", { size: 11 })}
        <path d="M166 22 V 96 M198 96 V 30 M216 22 V 40" stroke="#b5653a" stroke-width="2"/><circle cx="182" cy="96" r="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="182" cy="96" r="3" fill="var(--ink)"/><circle cx="207" cy="40" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M216 40 V 120" stroke="#b5653a" stroke-width="2"/>
        <line x1="182" y1="112" x2="182" y2="122" stroke="var(--ink)" stroke-width="2"/><rect x="168" y="122" width="28" height="22" fill="var(--red)" fill-opacity=".7"/>${t(182, 158, "100 N", { size: 10 })}${fl(216, 110, 216, 140, "var(--pen)", 2.5)}${t(228, 150, "50 N", { size: 10, color: "var(--pen)", anchor: "start" })}${t(196, 176, "móvil", { size: 11 })}</svg>`,
      video: { id: "BOroeiLUMnI", titulo: "Mecanismos: poleas y polipastos", canal: "Aprendo", vistas: 1042720 },
    },
    {
      html: `<h3>Plano inclinado, cuña, torno y tornillo</h3><p>El <mark>plano inclinado</mark> es una superficie que forma un ángulo con el suelo. Permite subir una carga haciendo menos fuerza que si la levantáramos en vertical, aunque recorriendo más distancia: cuanto menos inclinado, menos fuerza y más recorrido. Son planos inclinados las rampas, las carreteras de montaña con curvas y las escaleras. La <mark>cuña</mark> está formada por dos planos inclinados unidos: transforma una fuerza en dos fuerzas laterales mayores, y sirve para cortar o separar, como el hacha, el cuchillo, el cincel o la proa de un barco. El <mark>torno</mark> es un cilindro que gira con una manivela y enrolla una cuerda: como la manivela es más larga que el radio del cilindro, funciona como una palanca y ahorra fuerza; se usa en pozos y cabrestantes. El <mark>tornillo</mark> es un plano inclinado enrollado en espiral alrededor de un cilindro: al girarlo, avanza y aprieta con mucha fuerza.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Plano inclinado con una caja subiendo por la rampa; una cuña que separa un tronco; un tornillo como plano inclinado enrollado">${BG}
        <path d="M14 130 L 120 130 L 120 70 Z" fill="var(--muted)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/><rect x="64" y="86" width="20" height="20" fill="var(--red)" fill-opacity=".7" transform="rotate(-29.5 74 96)"/>${fl(70, 112, 100, 95, "var(--pen)", 2.5)}${t(66, 150, "plano inclinado", { size: 10 })}
        <path d="M150 50 L 170 110 L 190 50 Z" fill="#9aa0a6" stroke="var(--ink)" stroke-width="2"/>${fl(170, 26, 170, 46, "var(--red)", 2.5)}${fl(164, 92, 146, 100, "var(--pen)", 2)}${fl(176, 92, 194, 100, "var(--pen)", 2)}${t(170, 130, "cuña", { size: 10 })}
        <rect x="220" y="40" width="16" height="80" fill="#9aa0a6" stroke="var(--ink)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M220 ${48 + i * 12} L 236 ${42 + i * 12}" stroke="var(--ink)" stroke-width="2"/>`).join("")}<rect x="214" y="30" width="28" height="10" rx="2" fill="var(--ink)"/>${t(228, 140, "tornillo", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Transmisión con poleas y correa</h3><p>Para transmitir un movimiento de giro de un eje a otro alejado se puede usar un sistema de <mark>poleas con correa</mark>: dos ruedas unidas por una correa que las abraza. La polea que mueve el motor es la <b>motriz</b> (o conductora) y la otra, la <b>conducida</b>. Las dos giran en el <b>mismo sentido</b>. Si la motriz es <b>más pequeña</b> que la conducida, la conducida gira <b>más despacio</b> (reductor); si es <b>más grande</b>, la conducida gira <b>más deprisa</b> (multiplicador). La <mark>relación de transmisión</mark> es i = n₂ / n₁ = d₁ / d₂, donde n son las velocidades de giro en revoluciones por minuto (rpm) y d, los diámetros. Por ejemplo, si la motriz mide 10 cm y la conducida 30 cm, i = 10 / 30 = 1/3: la conducida gira tres veces más despacio. Se usan en lavadoras, taladros de columna, motores de coche y máquinas de coser.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos poleas unidas por una correa: la motriz pequeña de 10 centímetros gira a 900 revoluciones por minuto y la conducida grande de 30 centímetros gira a 300">${BG}
        <circle cx="60" cy="86" r="22" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="3"/><circle cx="60" cy="86" r="4" fill="var(--ink)"/>
        <circle cx="186" cy="86" r="52" fill="var(--red)" fill-opacity=".15" stroke="var(--red)" stroke-width="3"/><circle cx="186" cy="86" r="4" fill="var(--ink)"/>
        <path d="M58 64 L 182 34 M58 108 L 182 138" stroke="var(--ink)" stroke-width="3"/>
        <path d="M44 66 a 26 26 0 0 1 32 -2" stroke="var(--pen)" stroke-width="2" fill="none"/>${fl(72, 62, 78, 66, "var(--pen)", 2)}
        ${t(60, 128, "motriz", { size: 10, color: "var(--pen)" })}${t(60, 142, "d₁ = 10 cm", { size: 10 })}${t(60, 156, "900 rpm", { size: 10 })}
        ${t(186, 116, "conducida", { size: 10, color: "var(--red)" })}${t(186, 158, "d₂ = 30 cm · 300 rpm", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Los engranajes</h3><p>Los <mark>engranajes</mark> son ruedas dentadas que encajan unas con otras y transmiten el giro sin patinar, por lo que son más precisos que las poleas. Dos engranajes en contacto giran en <b>sentidos contrarios</b>. La relación de transmisión se calcula con el número de dientes (Z): <b>i = n₂ / n₁ = Z₁ / Z₂</b>. Si un engranaje motor de 12 dientes mueve otro de 36 dientes, i = 12 / 36 = 1/3: el conducido gira tres veces más despacio, pero con más fuerza. Por eso se usan como <b>reductores</b> en los motores de los juguetes y de las batidoras. Si el motor es el grande, el conducido gira más rápido. Cuando dos engranajes no se tocan, se pueden unir con una <b>cadena</b>, como en la bicicleta: el plato (delante, grande) y el piñón (detrás, pequeño) giran en el mismo sentido. Con un plato de 48 dientes y un piñón de 16, cada pedalada da 3 vueltas a la rueda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos engranajes: el motor pequeño de 12 dientes gira en un sentido y el conducido grande de 24 dientes gira en sentido contrario y más despacio">${BG}
        ${engranaje(78, 86, 26, 12, "var(--pen)")}${engranaje(160, 86, 50, 24, "var(--red)")}
        <path d="M60 50 a 34 34 0 0 1 36 -2" stroke="var(--pen)" stroke-width="2" fill="none"/>${fl(92, 46, 100, 50, "var(--pen)", 2)}
        <path d="M200 30 a 62 62 0 0 0 -50 -6" stroke="var(--red)" stroke-width="2" fill="none"/>${fl(156, 22, 148, 25, "var(--red)", 2)}
        ${t(60, 140, "Z₁ = 12", { size: 11, color: "var(--pen)" })}${t(200, 160, "Z₂ = 24", { size: 11, color: "var(--red)" })}${t(60, 160, "i = 12/24 = 1/2", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "ScpNVPv-TgE", titulo: "Transmisión por engranajes I. Mecanismos", canal: "Aprendo", vistas: 398962 },
    },
    {
      html: `<h3>Transformar el movimiento</h3><p>Otros mecanismos no solo transmiten el movimiento, sino que <mark>cambian su tipo</mark>: de giratorio (circular) a rectilíneo, o al revés. El <b>piñón y cremallera</b> combina una rueda dentada con una barra dentada: al girar el piñón, la cremallera avanza en línea recta; se usa en los trenes de montaña, en algunas puertas correderas y en la dirección de los coches. El <b>tornillo sin fin</b> engrana con una rueda dentada y la hace girar muy despacio, con mucha fuerza: se usa en las clavijas de las guitarras. La <mark>biela-manivela</mark> transforma un giro en un movimiento de vaivén, o al revés: así funcionan los pedales de una máquina de coser antigua o los pistones de un motor de coche, que mueven el cigüeñal. La <b>leva</b> es una pieza con forma irregular que, al girar, empuja una varilla arriba y abajo: abre y cierra las válvulas de los motores y se usa en muchos juguetes mecánicos.</p>${tabla(["Mecanismo", "Transforma", "Ejemplo"], [["Piñón y cremallera", "giro ↔ línea recta", "tren cremallera"], ["Biela-manivela", "giro ↔ vaivén", "motor de coche"], ["Leva", "giro → vaivén", "válvulas, juguetes"], ["Tornillo sin fin", "giro → giro lento", "clavijas de guitarra"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Biela-manivela: una rueda gira y una barra unida a ella empuja un pistón que se mueve adelante y atrás en línea recta">${BG}
        <circle cx="70" cy="90" r="40" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="3"/><circle cx="70" cy="90" r="4" fill="var(--ink)"/><line x1="70" y1="90" x2="98" y2="62" stroke="var(--ink)" stroke-width="5"/><circle cx="98" cy="62" r="5" fill="var(--red)"/>
        <line x1="98" y1="62" x2="186" y2="90" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/>
        <rect x="150" y="70" width="96" height="40" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="186" y="74" width="30" height="32" fill="var(--red)" fill-opacity=".6" stroke="var(--ink)"/>
        ${fl(200, 128, 236, 128, "var(--red)", 2)}${fl(200, 128, 164, 128, "var(--red)", 2)}${t(70, 154, "manivela (gira)", { size: 10, color: "var(--pen)" })}${t(150, 46, "biela", { size: 10, color: "var(--muted)" })}${t(204, 154, "pistón (vaivén)", { size: 10, color: "var(--red)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Máquinas y mecanismos",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen: máquinas simples (palanca, polea, plano inclinado), mecanismos de transmisión (poleas con correa, engranajes, cadena) y de transformación (piñón-cremallera, biela-manivela, leva)">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Máquinas simples", "palanca · polea", "plano inclinado · torno", "var(--pen)"], ["Transmisión", "poleas y correa", "engranajes · cadena", "var(--red)"], ["Transformación", "piñón-cremallera", "biela-manivela · leva", "var(--leaf)"]].map(([a, b, c, col], i) => { const x = 20 + i * 206; return `<rect x="${x}" y="30" width="190" height="170" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 95, 74, a, { size: 16, color: col, font: D })}${t(x + 95, 124, b, { size: 14, weight: 400 })}${t(x + 95, 154, c, { size: 13, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "Pwte1qnGe4I", titulo: "Cómo hacer una polea (máquina simple)", canal: "ProyectosFaciles", vistas: 1323135, megusta: 14351, busqueda: "máquinas simples palanca polea mecanismos" },
  ejemplos: [
    { enunciado: "Con una palanca de primer género quieres levantar una piedra de 600 N. La piedra está a 0,3 m del fulcro y empujas a 1,2 m. ¿Qué fuerza necesitas?",
      pasos: ["Ley de la palanca: P · BP = R · BR.", "P · 1,2 = 600 · 0,3 = 180.", "P = 180 / 1,2 = 150 N."],
      resultado: "150 N." },
    { enunciado: "Una polea motriz de 8 cm gira a 1200 rpm y mueve con una correa una polea de 24 cm. ¿A qué velocidad gira la conducida?",
      pasos: ["n₂ = n₁ · d₁ / d₂.", "n₂ = 1200 · 8 / 24.", "n₂ = 400 rpm (reductor, mismo sentido)."],
      resultado: "400 rpm." },
    { enunciado: "Una bici tiene un plato de 44 dientes y un piñón de 11. ¿Cuántas vueltas da la rueda por cada pedalada?",
      pasos: ["i = Z₁ / Z₂ = 44 / 11 = 4.", "Por cada vuelta del plato, el piñón da 4 vueltas.", "El piñón está unido a la rueda trasera."],
      resultado: "4 vueltas." },
  ],
  errores: [
    "Pensar que todas las palancas ahorran fuerza: las de tercer género no.",
    "Creer que una polea fija reduce la fuerza: solo cambia su dirección.",
    "Confundir el sentido de giro: con correa, el mismo; con engranajes en contacto, contrario.",
    "Invertir la relación de transmisión: el pequeño que mueve al grande produce menos velocidad, no más.",
    "Olvidar que lo que se gana en fuerza se pierde en distancia o en velocidad.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre una máquina y un mecanismo?", sol: "La máquina es el conjunto que realiza un trabajo; el mecanismo es la parte que transmite o transforma el movimiento dentro de ella." },
    { q: "Escribe la ley de la palanca y explica qué significa cada letra.", sol: "P · BP = R · BR. P: potencia; BP: brazo de potencia; R: resistencia; BR: brazo de resistencia." },
    { q: "¿Qué fuerza hace falta para levantar 300 N con una palanca si BR = 0,2 m y BP = 1,5 m?", sol: "P = 300 · 0,2 / 1,5 = 40 N." },
    { q: "Clasifica por género: carretilla, tijeras, pinzas de cocina, balancín, cascanueces, caña de pescar.", sol: "1.º: tijeras, balancín. 2.º: carretilla, cascanueces. 3.º: pinzas de cocina, caña de pescar." },
    { q: "¿Para qué sirve una polea fija si no ahorra fuerza?", sol: "Para cambiar la dirección de la fuerza y tirar hacia abajo, que es más cómodo." },
    { q: "¿Qué fuerza hace falta para subir 800 N con una polea móvil? ¿Y con un polipasto de dos poleas móviles?", sol: "400 N y 200 N." },
    { q: "Explica por qué un tornillo es un plano inclinado.", sol: "Porque su rosca es un plano inclinado enrollado en espiral alrededor de un cilindro." },
    { q: "Un engranaje de 20 dientes gira a 300 rpm y mueve otro de 60. ¿A qué velocidad y en qué sentido gira el segundo?", sol: "300 · 20 / 60 = 100 rpm, en sentido contrario." },
    { q: "Una polea de 30 cm gira a 200 rpm y mueve una de 10 cm. ¿Es reductor o multiplicador? ¿A cuántas rpm gira la conducida?", sol: "Multiplicador: 200 · 30 / 10 = 600 rpm." },
    { q: "Indica el mecanismo: a) el motor de un coche mueve el cigüeñal; b) un tren sube una montaña muy empinada; c) la clavija de una guitarra.", sol: "a) Biela-manivela; b) piñón y cremallera; c) tornillo sin fin." },
  ],
  quiz: [
    { q: "El punto de apoyo de una palanca es el…", o: ["brazo", "fulcro", "eje"], a: 1, e: "Fulcro." },
    { q: "En la palanca de primer género, en medio está…", o: ["el fulcro", "la resistencia", "la potencia"], a: 0, e: "El fulcro." },
    { q: "La carretilla es una palanca de…", o: ["primer género", "segundo género", "tercer género"], a: 1, e: "Segundo: resistencia en medio." },
    { q: "Las pinzas de depilar son de…", o: ["primer género", "segundo género", "tercer género"], a: 2, e: "Tercero: potencia en medio." },
    { q: "Una polea móvil reduce la fuerza…", o: ["a la mitad", "a la cuarta parte", "nada"], a: 0, e: "A la mitad." },
    { q: "Dos ruedas unidas por una correa giran…", o: ["en el mismo sentido", "en sentidos contrarios", "a la misma velocidad siempre"], a: 0, e: "Mismo sentido." },
    { q: "Dos engranajes en contacto giran…", o: ["en el mismo sentido", "en sentidos contrarios", "sin girar"], a: 1, e: "Sentidos contrarios." },
    { q: "Si un engranaje de 10 dientes mueve otro de 40, el segundo gira…", o: ["4 veces más rápido", "4 veces más despacio", "igual"], a: 1, e: "4 veces más despacio." },
    { q: "La cuña sirve para…", o: ["cortar o separar", "transmitir giro", "subir agua"], a: 0, e: "Cortar o separar." },
    { q: "La biela-manivela transforma…", o: ["giro en vaivén", "giro en giro", "vaivén en luz"], a: 0, e: "Giro ↔ vaivén." },
  ],
  examen: [
    { q: "Un plano inclinado menos empinado requiere…", o: ["más fuerza", "menos fuerza y más recorrido", "lo mismo"], a: 1, e: "Menos fuerza, más distancia." },
    { q: "La relación de transmisión con engranajes se calcula con…", o: ["Z₁ / Z₂", "Z₂ / Z₁", "Z₁ · Z₂"], a: 0, e: "i = Z₁ / Z₂." },
    { q: "El piñón y cremallera transforma un giro en un movimiento…", o: ["rectilíneo", "circular", "de vaivén angular"], a: 0, e: "Rectilíneo." },
  ],
  feynman: ["Cómo funciona una palanca y qué dice su ley", "Qué diferencia hay entre una polea fija y una móvil", "Cómo se calcula la velocidad de giro en un sistema de engranajes"],
  mapa: mapa("MECANISMOS", "var(--eso)", [
    ["Palanca", "P · BP = R · BR · 3 géneros", "var(--pen)"],
    ["Otras máquinas", "polea · plano · cuña · torno", "#b8860b"],
    ["Transmisión", "correa · engranajes · cadena", "var(--red)"],
    ["Transformación", "cremallera · biela · leva", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Máquina", "Conjunto de elementos que facilita un trabajo."],
    ["Mecanismo", "Parte de la máquina que transmite o transforma el movimiento."],
    ["Ley de la palanca", "P · BP = R · BR."],
    ["Polea fija", "Cambia la dirección de la fuerza, no la reduce."],
    ["Polipasto", "Combinación de poleas fijas y móviles que reduce mucho la fuerza."],
    ["Relación de transmisión", "i = n₂ / n₁ = d₁ / d₂ = Z₁ / Z₂."],
    ["Engranajes", "Ruedas dentadas en contacto que giran en sentidos contrarios."],
    ["Biela-manivela", "Transforma un giro en un vaivén o al revés."],
  ],
  familias: ["Buscad en casa palancas de los tres géneros (tijeras, abrebotellas, pinzas).", "Contad los dientes del plato y del piñón de una bici y calculad cuántas vueltas da la rueda por pedalada.", "Desmontad con cuidado un juguete viejo y buscad engranajes o levas."],
  profesores: {
    saberes: "Máquinas y mecanismos: palanca, polea, polipasto, plano inclinado, torno; mecanismos de transmisión y transformación del movimiento; relación de transmisión (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Práctica de la ley de la palanca con una regla, un lápiz como fulcro y monedas.", "Montaje de poleas y engranajes con kits o cartón para medir relaciones de transmisión.", "Diseño de un juguete con leva (autómata de cartón)."],
  },
  fuentes: [RD, wiki("Máquina simple", "Máquina_simple"), wiki("Engranaje", "Engranaje")],
  revisado: REV,
};
