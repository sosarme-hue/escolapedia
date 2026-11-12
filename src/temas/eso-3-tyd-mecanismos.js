// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Rueda dentada sencilla
const rueda = (cx, cy, r, n, color) => {
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = (i / n) * 2 * Math.PI, b = ((i + 0.5) / n) * 2 * Math.PI;
    const p = (ang, rr) => `${(cx + rr * Math.cos(ang)).toFixed(1)} ${(cy + rr * Math.sin(ang)).toFixed(1)}`;
    d += `${i ? "L" : "M"}${p(a - 0.12, r - 4)} L${p(a - 0.06, r + 4)} L${p(a + 0.06 + Math.PI / n * 0.6, r + 4)} L${p(b - 0.06, r - 4)} `;
  }
  return `<path d="${d}Z" fill="${color}" fill-opacity=".25" stroke="${color}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--ink)"/>`;
};

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Mecanismos de transmisión del movimiento",
  minutos: 60,
  objetivos: ["Explicar qué es un mecanismo y distinguir los de transmisión y los de transformación del movimiento", "Aplicar la ley de la palanca y reconocer sus tres tipos", "Calcular la relación de transmisión y las velocidades en poleas y engranajes", "Identificar mecanismos de transformación: biela-manivela, piñón-cremallera, leva y tornillo"],
  claves: ["mecanismo", "palanca", "fulcro", "polea", "engranaje", "relación de transmisión", "rpm", "biela-manivela"],
  pregunta: {
    texto: "¿Por qué al subir una cuesta en bicicleta cambias a un plato pequeño y un piñón grande?",
    respuesta: "Porque así cambias la <mark>relación de transmisión</mark>. Con un plato pequeño y un piñón grande, cada pedalada hace girar menos la rueda: avanzas más despacio, pero necesitas <b>mucha menos fuerza</b>. Los mecanismos permiten intercambiar <b>velocidad</b> por <b>fuerza</b> según lo que necesites.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un mecanismo?</h3><p>Un <mark>mecanismo</mark> es un dispositivo que <b>transmite o transforma</b> fuerzas y movimientos desde un <b>elemento motriz</b> (el que recibe la energía: un pedal, una manivela, un motor) hasta un <b>elemento receptor</b> (el que realiza el trabajo: la rueda, la hélice, la aguja). Las <b>máquinas</b> están formadas por muchos mecanismos combinados. Los mecanismos sirven para multiplicar la fuerza, cambiar la velocidad o cambiar el tipo de movimiento. Hay dos grandes grupos: los de <b>transmisión</b>, que llevan el movimiento de un sitio a otro sin cambiar su tipo (palancas, poleas, engranajes), y los de <b>transformación</b>, que convierten un movimiento en otro distinto, por ejemplo de giratorio a rectilíneo.</p>${tabla(["Movimiento", "Cómo es", "Ejemplo"], [["Circular o giratorio", "gira sobre un eje", "rueda, ventilador"], ["Rectilíneo", "en línea recta, un sentido", "cinta transportadora"], ["Alternativo", "rectilíneo de ida y vuelta", "pistón, sierra de calar"], ["Oscilante", "circular de ida y vuelta", "péndulo, columpio"]])}`,
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que gira alrededor de un punto de apoyo llamado <b>fulcro</b>. Sobre ella actúan dos fuerzas: la <b>potencia</b> (P), la fuerza que aplicamos, y la <b>resistencia</b> (R), la carga que queremos vencer. Las distancias de cada fuerza al fulcro se llaman <b>brazo de potencia</b> (BP) y <b>brazo de resistencia</b> (BR). La <b>ley de la palanca</b> dice que está en equilibrio cuando: <b>P · BP = R · BR</b>. Esto significa que, cuanto más largo sea el brazo de potencia, menos fuerza hace falta. Como dijo Arquímedes: «Dadme un punto de apoyo y moveré el mundo».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Palanca con el fulcro cerca de la carga: brazo de resistencia corto y brazo de potencia largo">${BG}
        <rect x="20" y="86" width="220" height="8" rx="3" fill="var(--muted)"/>
        <path d="M70 96 L 58 124 H 82 Z" fill="var(--ink)"/>${t(86, 116, "fulcro", { size: 10, anchor: "start" })}
        <rect x="24" y="58" width="28" height="28" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"/>${t(38, 50, "R", { size: 13, color: "var(--red)" })}
        ${fl(226, 44, 226, 82, "var(--pen)", 3)}${t(214, 40, "P", { size: 13, color: "var(--pen)", anchor: "end" })}
        <path d="M38 134 H 70" stroke="var(--red)" stroke-width="1.5"/>${t(54, 148, "BR", { size: 10, color: "var(--red)" })}
        <path d="M70 134 H 226" stroke="var(--pen)" stroke-width="1.5"/>${t(150, 148, "BP", { size: 10, color: "var(--pen)" })}
        ${t(150, 170, "P · BP = R · BR", { size: 13, color: "var(--ink)" })}</svg>`,
    },
    {
      html: `<h3>Los tres tipos de palanca</h3><p>Según la posición del fulcro, la potencia y la resistencia, hay tres tipos de palanca. En la de <b>primer grado</b>, el <b>fulcro está en el centro</b>, entre la potencia y la resistencia: balancín, tijeras, alicates, pata de cabra. Puede multiplicar la fuerza o no, según los brazos. En la de <b>segundo grado</b>, la <b>resistencia está en el centro</b>: carretilla, cascanueces, abrebotellas. Siempre multiplica la fuerza, porque BP es mayor que BR. En la de <b>tercer grado</b>, la <b>potencia está en el centro</b>: pinzas de depilar, caña de pescar, quitagrapas o nuestro antebrazo. Necesita más fuerza que la carga, pero consigue un movimiento más amplio y rápido del extremo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de palanca: primer grado con fulcro en el centro, segundo grado con resistencia en el centro y tercer grado con potencia en el centro">${BG}
        ${[[40, "1.er grado", "F centro", [["R", 20], ["F", 64], ["P", 108]]], [92, "2.º grado", "R centro", [["F", 20], ["R", 64], ["P", 108]]], [144, "3.er grado", "P centro", [["F", 20], ["P", 64], ["R", 108]]]].map(([y, n, c, pts]) => `<rect x="${20}" y="${y}" width="96" height="5" fill="var(--muted)"/>` + pts.map(([k, x]) => k === "F" ? `<path d="M${x + 4} ${y + 6} l -7 14 h 14 Z" fill="var(--ink)"/>` : fl(x + 4, y - 18, x + 4, y - 2, k === "P" ? "var(--pen)" : "var(--red)", 2.5) + t(x + 14, y - 8, k, { size: 10, color: k === "P" ? "var(--pen)" : "var(--red)", anchor: "start" })).join("") + t(140, y + 2, n, { size: 11, anchor: "start" }) + t(140, y + 16, c, { size: 10, color: "var(--muted)", anchor: "start" })).join("")}</svg>`,
    },
    {
      html: `<h3>Poleas y polipastos</h3><p>Una <mark>polea</mark> es una rueda con una ranura (garganta) por la que pasa una cuerda. La <b>polea fija</b> está sujeta a un soporte: no reduce la fuerza, pero cambia su dirección y resulta más cómodo tirar hacia abajo para subir una carga (como en un pozo). La <b>polea móvil</b> se desplaza con la carga: reduce la fuerza a la <b>mitad</b>, aunque hay que tirar el doble de cuerda. Un <b>polipasto</b> combina varias poleas fijas y móviles: con <b>n poleas móviles</b>, la fuerza necesaria es <b>F = R / 2ⁿ</b>. Los polipastos se usan en grúas, en talleres y en los barcos de vela.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polea fija, donde la fuerza es igual a la carga, y polea móvil, donde la fuerza es la mitad de la carga">${BG}
        <rect x="20" y="16" width="220" height="8" fill="var(--muted)"/>
        <line x1="70" y1="24" x2="70" y2="40" stroke="var(--ink)" stroke-width="2"/><circle cx="70" cy="56" r="16" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M54 56 V 120 M86 56 V 108" stroke="#8b5a2b" stroke-width="2"/><rect x="42" y="120" width="24" height="22" fill="var(--red)" fill-opacity=".35" stroke="var(--red)" stroke-width="2"/>${fl(86, 100, 86, 132, "var(--pen)", 2.5)}
        ${t(70, 162, "fija: F = R", { size: 11, color: "var(--pen)" })}
        <path d="M168 24 V 104 M200 24 V 104" stroke="#8b5a2b" stroke-width="2"/><circle cx="184" cy="104" r="16" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        <line x1="184" y1="120" x2="184" y2="128" stroke="var(--ink)" stroke-width="2"/><rect x="172" y="128" width="24" height="20" fill="var(--red)" fill-opacity=".35" stroke="var(--red)" stroke-width="2"/>
        ${fl(214, 70, 214, 34, "var(--pen)", 2.5)}${t(222, 56, "F", { size: 11, color: "var(--pen)", anchor: "start" })}
        ${t(184, 170, "móvil: F = R / 2", { size: 11, color: "var(--leaf)" })}</svg>`,
      video: { id: "BOroeiLUMnI", titulo: "Aprendo - Mecanismos - Poleas - Polipastos", canal: "Aprendo", vistas: 1042720 },
    },
    {
      html: `<h3>Transmisión por poleas y correa</h3><p>Dos poleas unidas por una <b>correa</b> transmiten el giro de un eje a otro alejado: así funcionan la lavadora, el motor del coche (correa de distribución) o una taladradora de columna. La polea conectada al motor es la <b>motriz</b> (diámetro d₁, velocidad n₁) y la otra, la <b>conducida</b> (d₂, n₂). Se cumple: <b>n₁ · d₁ = n₂ · d₂</b>. Si la polea conducida es más pequeña, gira más rápido (<b>multiplicador</b>); si es más grande, gira más despacio pero con más fuerza (<b>reductor</b>). La <mark>relación de transmisión</mark> es <b>i = n₂ / n₁ = d₁ / d₂</b>. Las velocidades de giro se miden en <b>revoluciones por minuto (rpm)</b>. Ambas poleas giran en el mismo sentido; si la correa se cruza, giran en sentidos contrarios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos poleas unidas por correa: la motriz pequeña y la conducida grande, que gira más despacio">${BG}
        <circle cx="70" cy="86" r="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><circle cx="70" cy="86" r="4" fill="var(--ink)"/>
        <circle cx="180" cy="86" r="46" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/><circle cx="180" cy="86" r="4" fill="var(--ink)"/>
        <path d="M66 64 L 172 40 M66 108 L 172 132" stroke="var(--ink)" stroke-width="2.5"/>
        ${t(70, 128, "motriz", { size: 10, color: "var(--pen)" })}${t(70, 142, "d₁, n₁", { size: 10, color: "var(--pen)" })}${t(180, 156, "conducida d₂, n₂", { size: 10, color: "var(--leaf)" })}
        ${t(130, 172, "n₁ · d₁ = n₂ · d₂", { size: 12 })}</svg>`,
      video: { id: "Oo_u7XxZp6E", titulo: "Transmisión por Poleas con Correas", canal: "Aprendo", vistas: 469875 },
    },
    {
      html: `<h3>Engranajes</h3><p>Los <mark>engranajes</mark> son ruedas dentadas que encajan entre sí y transmiten el giro directamente, sin deslizar, por lo que son más precisos que las poleas. Al engranar, las dos ruedas giran en <b>sentidos contrarios</b>. En lugar de diámetros se usa el <b>número de dientes</b> (Z): <b>n₁ · Z₁ = n₂ · Z₂</b>. La rueda pequeña se llama <b>piñón</b> y la grande, <b>rueda</b>. Si el piñón mueve a la rueda, la velocidad <b>se reduce</b> y la fuerza aumenta; si la rueda mueve al piñón, la velocidad <b>se multiplica</b>. Si se necesita que el receptor gire en el mismo sentido que el motor, se intercala una <b>rueda loca</b> entre las dos, que no cambia la velocidad. Se usan en relojes, batidoras, taladros, cajas de cambio y bicicletas (con <b>cadena</b>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Piñón de 10 dientes que mueve una rueda de 20 dientes: giran en sentidos contrarios y la rueda va a la mitad de velocidad">${BG}
        ${rueda(82, 86, 28, 10, "var(--pen)")}${rueda(162, 86, 50, 20, "var(--red)")}
        <path d="M58 46 A 46 46 0 0 0 50 66" stroke="var(--pen)" stroke-width="2" fill="none"/>${fl(52, 64, 50, 68, "var(--pen)", 2)}
        ${t(82, 146, "Z₁ = 10", { size: 11, color: "var(--pen)" })}${t(158, 158, "Z₂ = 20", { size: 11, color: "var(--red)" })}
        ${t(130, 22, "sentidos contrarios", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "ScpNVPv-TgE", titulo: "Transmisión por engranajes I", canal: "Aprendo", vistas: 398962 },
    },
    {
      html: `<h3>Trenes de mecanismos</h3><p>Cuando se necesita una gran reducción o multiplicación de la velocidad, se encadenan varias parejas de poleas o engranajes formando un <mark>tren</mark>. En un <b>tren compuesto</b>, dos ruedas de distinto tamaño van montadas en el <b>mismo eje</b>, de modo que giran a la misma velocidad. La relación de transmisión total es el <b>producto</b> de las relaciones de cada pareja: <b>i = i₁ · i₂ · …</b> Por ejemplo, si cada pareja reduce la velocidad a un tercio, dos parejas la reducen a un noveno. Las cajas reductoras de los motores pequeños de los juguetes, de los relojes o de los robots usan trenes de engranajes para conseguir giros lentos y con mucha fuerza.</p>`,
    },
    {
      html: `<h3>Otros mecanismos de transmisión</h3><p>El <b>tornillo sin fin</b> es un tornillo que engrana con una rueda dentada: por cada vuelta del tornillo, la rueda avanza solo <b>un diente</b>, lo que da una enorme reducción de velocidad. Además, la rueda no puede mover al tornillo, así que el sistema <b>se bloquea</b> solo: se usa en las clavijas de las guitarras y en las barreras de los aparcamientos. Los <b>engranajes cónicos</b> transmiten el giro entre ejes perpendiculares, como en un taladro manual o en el diferencial del coche. La <b>cadena y piñones</b> de la bicicleta funciona como un engranaje a distancia: el plato (pedales) y el piñón (rueda trasera) giran en el mismo sentido.</p>`,
    },
    {
      html: `<h3>Mecanismos de transformación del movimiento</h3><p>Estos mecanismos convierten un tipo de movimiento en otro. El <mark>piñón-cremallera</mark> transforma un giro en un movimiento <b>rectilíneo</b>, y al revés: la dirección del coche, las puertas correderas. El <b>tornillo-tuerca</b> convierte el giro en avance lineal: gatos de coche, tornillo de banco. La <mark>biela-manivela</mark> transforma un giro en un movimiento <b>alternativo</b> de ida y vuelta, o al revés: el motor de un coche, donde los pistones mueven el cigüeñal, o una máquina de coser. La <b>leva</b> y la <b>excéntrica</b> son piezas giratorias de forma irregular que empujan a un seguidor arriba y abajo: abren las válvulas del motor. El <b>cigüeñal</b> es una sucesión de manivelas en un mismo eje.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mecanismo biela-manivela: una manivela gira y la biela mueve un émbolo en línea recta de ida y vuelta">${BG}
        <circle cx="64" cy="96" r="34" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/><circle cx="64" cy="96" r="5" fill="var(--ink)"/>
        <line x1="64" y1="96" x2="88" y2="72" stroke="var(--pen)" stroke-width="6" stroke-linecap="round"/>${t(40, 50, "manivela", { size: 10, color: "var(--pen)" })}
        <line x1="88" y1="72" x2="170" y2="96" stroke="var(--red)" stroke-width="6" stroke-linecap="round"/>${t(128, 70, "biela", { size: 10, color: "var(--red)" })}
        <rect x="160" y="80" width="40" height="32" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2.5"/><path d="M150 76 H 240 M150 116 H 240" stroke="var(--ink)" stroke-width="2"/>${t(210, 136, "émbolo", { size: 10, color: "var(--leaf)" })}
        ${fl(176, 150, 222, 150, "var(--leaf)", 2)}${fl(222, 150, 176, 150, "var(--leaf)", 2)}${t(64, 150, "giro", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Los mecanismos en la vida cotidiana</h3><p>La <b>bicicleta</b> es un buen resumen: los pedales son una <b>manivela</b>; el plato y el piñón con la <b>cadena</b> forman una transmisión; el cambio permite elegir distintas relaciones; los frenos son <b>palancas</b>. En un <b>coche</b> hay biela-manivela y cigüeñal en el motor, levas, caja de cambios con engranajes, diferencial con engranajes cónicos y dirección de piñón-cremallera. En casa encontramos palancas (tijeras, pinzas, abrebotellas), engranajes (batidora, reloj), tornillos sin fin (persianas de manivela) y levas (juguetes de autómatas). En robótica, los motores eléctricos casi siempre llevan una <b>caja reductora</b> para obtener fuerza a baja velocidad.</p>`,
    },
  ],
  figura: {
    titulo: "Reductor y multiplicador",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="A la izquierda, un piñón motor mueve una rueda grande y la velocidad se reduce; a la derecha, una rueda grande mueve un piñón y la velocidad se multiplica">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${rueda(110, 110, 34, 10, "var(--pen)")}${rueda(202, 110, 60, 20, "var(--red)")}
      ${t(110, 40, "motor", { size: 13, color: "var(--pen)" })}${t(155, 206, "REDUCTOR: Z₁ < Z₂", { size: 14, color: "var(--ink)" })}${t(155, 226, "menos velocidad, más fuerza", { size: 12, color: "var(--muted)" })}
      ${rueda(440, 110, 60, 20, "var(--red)")}${rueda(532, 110, 34, 10, "var(--pen)")}
      ${t(440, 36, "motor", { size: 13, color: "var(--red)" })}${t(486, 206, "MULTIPLICADOR: Z₁ > Z₂", { size: 14, color: "var(--ink)" })}${t(486, 226, "más velocidad, menos fuerza", { size: 12, color: "var(--muted)" })}
      <line x1="320" y1="30" x2="320" y2="200" stroke="var(--muted)" stroke-dasharray="4 4"/>
    </svg>`,
  },
  video: { id: "rmQesSkb5ZA", titulo: "Tren de Engranajes", canal: "Aprendo", vistas: 292030, megusta: 0, busqueda: "mecanismos poleas engranajes relación de transmisión" },
  ejemplos: [
    { enunciado: "Con una palanca de 1.er grado queremos levantar 300 N. BR = 0,5 m y BP = 1,5 m. ¿Qué fuerza hay que hacer?",
      pasos: ["P · BP = R · BR.", "P · 1,5 = 300 · 0,5 = 150.", "P = 150 / 1,5 = 100 N."],
      resultado: "100 N: la tercera parte de la carga." },
    { enunciado: "Un motor gira a 1 200 rpm con una polea de 4 cm unida por correa a otra de 12 cm. ¿A qué velocidad gira la segunda?",
      pasos: ["n₁ · d₁ = n₂ · d₂.", "1 200 · 4 = n₂ · 12.", "n₂ = 4 800 / 12 = 400 rpm. i = 4/12 = 1/3: reductor."],
      resultado: "400 rpm." },
    { enunciado: "Un piñón de 15 dientes a 600 rpm mueve una rueda de 45 dientes. Calcula n₂ y la relación de transmisión.",
      pasos: ["n₁ · Z₁ = n₂ · Z₂.", "600 · 15 = n₂ · 45 → n₂ = 9 000 / 45 = 200 rpm.", "i = Z₁ / Z₂ = 15 / 45 = 1/3."],
      resultado: "200 rpm; i = 1/3 (reductor), en sentido contrario." },
  ],
  errores: [
    "Pensar que una palanca siempre reduce la fuerza: las de 3.er grado necesitan más fuerza que la carga.",
    "Creer que la polea fija reduce la fuerza: solo cambia su dirección.",
    "Invertir la fórmula y pensar que la rueda grande gira más rápido.",
    "Olvidar que dos engranajes engranados giran en sentidos contrarios.",
    "Sumar las relaciones de un tren compuesto en lugar de multiplicarlas.",
  ],
  ejercicios: [
    { q: "Clasifica estas palancas: tijeras, carretilla, pinzas de depilar, cascanueces.", sol: "Tijeras: 1.er grado. Carretilla y cascanueces: 2.º grado. Pinzas: 3.er grado." },
    { q: "Con una palanca de 2.º grado se levantan 600 N situados a 0,2 m del fulcro. Si BP = 1,2 m, ¿qué fuerza se aplica?", sol: "P = 600 · 0,2 / 1,2 = 100 N." },
    { q: "¿Qué fuerza hay que hacer para subir 800 N con un polipasto de dos poleas móviles?", sol: "F = 800 / 2² = 200 N." },
    { q: "Polea motriz de 10 cm a 300 rpm; conducida de 5 cm. Calcula n₂. ¿Es reductor o multiplicador?", sol: "n₂ = 300 · 10 / 5 = 600 rpm; multiplicador." },
    { q: "Un engranaje de 40 dientes a 150 rpm mueve otro de 20. Calcula su velocidad.", sol: "150 · 40 / 20 = 300 rpm." },
    { q: "¿Para qué sirve una rueda loca?", sol: "Para que la rueda conducida gire en el mismo sentido que la motriz, sin cambiar la velocidad." },
    { q: "Un tren tiene dos parejas con i₁ = 1/4 e i₂ = 1/5. Si el motor gira a 2 000 rpm, ¿a cuánto gira la salida?", sol: "i = 1/20; 2 000 / 20 = 100 rpm." },
    { q: "¿Por qué el tornillo sin fin se usa en las clavijas de guitarra?", sol: "Da gran reducción y no puede ser movido por la rueda, así que la cuerda no se afloja sola." },
    { q: "¿Qué mecanismo transforma giro en movimiento alternativo? Pon un ejemplo.", sol: "La biela-manivela; en el motor del coche o la máquina de coser." },
    { q: "Identifica tres mecanismos en una bicicleta.", sol: "Manivela (pedales), transmisión por cadena (plato y piñón) y palancas de freno." },
  ],
  quiz: [
    { q: "El punto de apoyo de una palanca es el…", o: ["fulcro", "brazo", "émbolo"], a: 0, e: "Fulcro." },
    { q: "La ley de la palanca es…", o: ["P · BP = R · BR", "P + BP = R + BR", "P / R = BP"], a: 0, e: "P · BP = R · BR." },
    { q: "La carretilla es una palanca de…", o: ["1.er grado", "2.º grado", "3.er grado"], a: 1, e: "2.º grado." },
    { q: "La polea móvil reduce la fuerza a…", o: ["la mitad", "un tercio", "nada"], a: 0, e: "La mitad." },
    { q: "Dos poleas con correa abierta giran…", o: ["en el mismo sentido", "en sentidos contrarios", "a la misma velocidad siempre"], a: 0, e: "Mismo sentido." },
    { q: "Dos engranajes engranados giran…", o: ["en el mismo sentido", "en sentidos contrarios", "sin girar"], a: 1, e: "Contrarios." },
    { q: "Si el piñón mueve a una rueda grande, la velocidad…", o: ["aumenta", "disminuye", "no cambia"], a: 1, e: "Disminuye (reductor)." },
    { q: "La velocidad de giro se mide en…", o: ["rpm", "N", "km"], a: 0, e: "rpm." },
    { q: "El piñón-cremallera transforma giro en movimiento…", o: ["rectilíneo", "oscilante", "giratorio"], a: 0, e: "Rectilíneo." },
    { q: "El mecanismo del motor que mueve los pistones es la…", o: ["leva", "biela-manivela", "polea"], a: 1, e: "Biela-manivela." },
  ],
  examen: [
    { q: "Piñón de 12 dientes a 900 rpm mueve una rueda de 36. n₂ =", o: ["300 rpm", "2 700 rpm", "900 rpm"], a: 0, e: "900 · 12 / 36 = 300." },
    { q: "El brazo humano al levantar algo es una palanca de…", o: ["1.er grado", "2.º grado", "3.er grado"], a: 2, e: "3.er grado." },
    { q: "La pieza que abre las válvulas del motor es la…", o: ["leva", "cremallera", "rueda loca"], a: 0, e: "La leva." },
  ],
  feynman: ["La ley de la palanca y por qué un brazo largo ayuda", "Cómo saber si una transmisión es reductora o multiplicadora", "La diferencia entre transmitir y transformar el movimiento"],
  mapa: mapa("MECANISMOS", "var(--eso)", [
    ["Palanca", "P · BP = R · BR", "var(--pen)"],
    ["Poleas", "n₁ · d₁ = n₂ · d₂", "var(--red)"],
    ["Engranajes", "n₁ · Z₁ = n₂ · Z₂", "var(--leaf)"],
    ["Transformación", "biela · cremallera · leva", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Mecanismo", "Transmite o transforma fuerzas y movimientos."],
    ["Ley de la palanca", "P · BP = R · BR."],
    ["Polea móvil", "Reduce la fuerza a la mitad."],
    ["Relación de transmisión", "i = n₂ / n₁ = d₁ / d₂ = Z₁ / Z₂."],
    ["Reductor", "La conducida es mayor: gira más lento."],
    ["Rueda loca", "Invierte el sentido sin cambiar la velocidad."],
    ["Tornillo sin fin", "Gran reducción; no reversible."],
    ["Biela-manivela", "Giro ↔ movimiento alternativo."],
  ],
  familias: ["Buscad en casa una palanca de cada grado.", "Contad los dientes del plato y del piñón de una bici y calculad cuántas vueltas da la rueda por pedalada.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Mecanismos de transmisión y transformación del movimiento: palancas, poleas, engranajes, relación de transmisión, trenes y mecanismos de transformación (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Montar poleas y engranajes con piezas de construcción y medir vueltas.", "Equilibrar una regla con monedas para comprobar la ley de la palanca.", "Simular mecanismos con un simulador en línea antes de construirlos."],
  },
  fuentes: [RD, wiki("Engranaje", "Engranaje"), wiki("Palanca", "Palanca")],
  revisado: "2026-11-12",
};
