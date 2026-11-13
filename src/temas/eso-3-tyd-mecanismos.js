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

require("./_eso3L7").libro(module.exports, {
  lectura: ["Subir la cuesta sin bajarse de la bici", `<p>Carla vuelve del instituto en bicicleta y la última calle es una cuesta empinada. En la primera semana del curso tenía que bajarse a empujar. Ahora, al empezar la subida, mueve el cambio: la cadena salta al plato pequeño de delante y al piñón grande de atrás. Los pedales giran más deprisa y la rueda más despacio, pero cada pedalada cuesta mucho menos. Llega arriba sin bajarse. En la bajada hace lo contrario: plato grande y piñón pequeño, y con cada pedalada la bici avanza varios metros.</p><p>Sin saberlo, Carla está eligiendo la <b>relación de transmisión</b> de un mecanismo. La bicicleta es un pequeño museo de mecanismos: los pedales son manivelas, la cadena transmite el giro entre dos ruedas dentadas, los frenos son palancas, el timbre usa un muelle y la rueda gira sobre rodamientos de bolas.</p><p>Los mecanismos están en casi todas las máquinas: en el abrelatas, en la lavadora, en el coche, en el reloj, en una grúa o en una impresora 3D. En este tema aprenderás cómo funcionan las palancas, las poleas, los engranajes y otros mecanismos, a calcular fuerzas y velocidades y a diseñar el mecanismo de tu propio proyecto con un motor.</p>`],
  mas: [
    ["<h3>¿Qué es un mecanismo?</h3>", `<p>Los mecanismos se clasifican en dos grandes grupos. Los de <b>transmisión</b> trasladan el movimiento de un punto a otro sin cambiar su tipo: giro en giro (poleas, engranajes) o movimiento lineal en lineal (palancas). Los de <b>transformación</b> convierten un tipo de movimiento en otro: giro en movimiento rectilíneo (piñón-cremallera) o en movimiento de vaivén (biela-manivela, leva). Los tipos de movimiento básicos son el <b>giratorio</b>, el <b>rectilíneo</b> y el <b>alternativo</b> u oscilante.</p>`],
    ["<h3>Trenes de mecanismos</h3>", `<p>La relación total de un tren compuesto es el <b>producto</b> de las relaciones de cada pareja. Por ejemplo, dos parejas de 10 y 50 dientes dan i = (10/50) · (10/50) = 1/25: si el motor gira a 2.500 rpm, la salida gira a 100 rpm. Con una sola pareja harían falta una rueda de 10 dientes y otra de 250, enorme e impracticable: por eso se usan trenes.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es un mecanismo?</h3>", "Tipos de mecanismos", [["Motriz → receptor", "camino del movimiento"], ["Transmisión", "giro → giro"], ["Transformación", "giro → recto o vaivén"]], "Transmitir o transformar"],
    ["<h3>Trenes de mecanismos</h3>", "Tren compuesto de engranajes", [["Pareja 1", "10/50 → i = 1/5"], ["Pareja 2", "10/50 → i = 1/5"], ["Total", "1/5 · 1/5 = 1/25"]], "Multiplicar relaciones"],
    ["<h3>Otros mecanismos de transmisión</h3>", "Otros mecanismos de transmisión", [["Tornillo sin fin", "gran reducción, no retrocede"], ["Ruedas de fricción", "giro por rozamiento"], ["Engranajes cónicos", "ejes a 90°"]], "Más formas de transmitir"],
    ["<h3>Los mecanismos en la vida cotidiana</h3>", "Mecanismos en la bicicleta", [["Pedales", "manivela"], ["Plato, piñón y cadena", "transmisión"], ["Frenos", "palancas"], ["Ruedas", "rodamientos de bolas"]], "La bicicleta"],
  ],
  bloques: [
    { tras: "<h3>¿Qué es un mecanismo?</h3>", html: `<h3>Fuerza, momento y velocidad de giro</h3><p>Para estudiar los mecanismos se usan varias magnitudes. La <b>fuerza</b> se mide en <b>newtons (N)</b>; un objeto de 1 kg pesa aproximadamente 10 N. Cuando una fuerza hace girar algo, lo importante no es solo cuánta fuerza se hace, sino a qué distancia del eje: es el <b>momento</b> o par, M = F · d, que se mide en newtons por metro (N·m). Por eso es más fácil abrir una puerta empujando lejos de las bisagras, y por eso una llave larga afloja mejor un tornillo.</p><p>La <b>velocidad de giro</b> indica cuántas vueltas da un eje en un minuto y se mide en <b>revoluciones por minuto (rpm)</b>: el tambor de una lavadora centrifuga a 1.200 rpm y un motor eléctrico pequeño gira a unas 6.000 rpm. En casi todos los mecanismos se cumple una regla de oro: <b>lo que se gana en fuerza se pierde en velocidad</b>, y al revés. Un mecanismo reductor hace girar más despacio el eje de salida, pero con más fuerza; uno multiplicador lo hace girar más deprisa, pero con menos fuerza.</p>`, svg: ["Magnitudes de los mecanismos", [["Fuerza", "newtons: 1 kg ≈ 10 N"], ["Momento", "M = F · d (N·m)"], ["Velocidad de giro", "revoluciones por minuto"]], "Fuerza o velocidad"] },
    { tras: "<h3>Engranajes</h3>", html: `<h3>Cadena y piñones: la transmisión de la bicicleta</h3><p>Cuando los ejes están alejados y no debe haber deslizamiento, se usa una <b>cadena</b> que engrana con dos ruedas dentadas: el <b>plato</b> (motriz, unido a los pedales) y el <b>piñón</b> (conducido, unido a la rueda trasera). Las dos ruedas giran en el <b>mismo sentido</b>, como con las poleas, y la relación se calcula con los dientes, como en los engranajes: <b>n₂ = n₁ · Z₁ / Z₂</b>.</p><p>Con un plato de 48 dientes y un piñón de 16, la relación es 48/16 = 3: por cada vuelta de los pedales, la rueda da tres. Si la rueda mide unos 2,1 m de circunferencia, cada pedalada avanza 6,3 m. Con plato de 32 y piñón de 32 la relación es 1: cada pedalada avanza solo 2,1 m, pero cuesta mucho menos fuerza, ideal para subir cuestas. Los <b>cambios</b> de la bicicleta permiten elegir entre muchas combinaciones de plato y piñón según el terreno. Las motos y algunas máquinas agrícolas usan el mismo sistema.</p>`, svg: ["La transmisión de la bicicleta", [["Plato 48, piñón 16", "relación 3: rápido"], ["Plato 32, piñón 32", "relación 1: cuesta"], ["Sentido", "las dos ruedas iguales"]], "Plato, piñón y cadena"] },
    { tras: "<h3>Mecanismos de transformación del movimiento</h3>", html: `<h3>Mecanismos de acoplamiento, frenado y apoyo</h3><p>Además de transmitir y transformar, las máquinas necesitan otros mecanismos auxiliares. El <b>embrague</b> conecta y desconecta el motor de las ruedas, por ejemplo en un coche al cambiar de marcha. El <b>trinquete</b> deja girar una rueda en un sentido y lo bloquea en el otro: está en la rueda libre de la bicicleta (por eso puedes dejar de pedalear sin que giren los pedales), en las llaves de carraca y en los cinturones de seguridad.</p><p>Los <b>frenos</b> reducen o detienen el movimiento por rozamiento: frenos de zapata o de disco en bicicletas y coches. Los <b>muelles</b> acumulan energía al deformarse y la devuelven: amortiguadores, colchones, bolígrafos, relojes de cuerda. Y los <b>rodamientos</b> de bolas o de rodillos se colocan entre los ejes y sus soportes para reducir el rozamiento: sustituyen el deslizamiento por la rodadura de pequeñas bolas, lo que ahorra energía y desgaste. Están en ruedas, ventiladores, patinetes y motores.</p>`, svg: ["Mecanismos auxiliares", [["Embrague", "conecta y desconecta"], ["Trinquete", "gira en un solo sentido"], ["Freno", "detiene por rozamiento"], ["Rodamiento", "reduce el rozamiento"]], "Acoplar, frenar y apoyar"] },
    { tras: "<h3>Los mecanismos en la vida cotidiana</h3>", html: `<h3>Diseñar el mecanismo de un proyecto</h3><p>En el taller, los proyectos suelen moverse con pequeños <b>motores de corriente continua</b> que giran muy rápido (3.000-10.000 rpm) y con poca fuerza. Una grúa, una noria o un coche necesitan girar despacio y con fuerza, así que hay que diseñar un <b>reductor</b>. Los pasos son: <b>1)</b> medir o consultar la velocidad del motor; <b>2)</b> decidir la velocidad de salida que se necesita; <b>3)</b> calcular la relación total, i = n<sub>salida</sub> / n<sub>motor</sub>; <b>4)</b> repartirla en varias parejas de poleas o engranajes que se puedan fabricar o comprar; <b>5)</b> comprobar el sentido de giro.</p><p>Por ejemplo, para una noria que dé unas 10 vueltas por minuto con un motor de 3.000 rpm hace falta i = 1/300. Un tornillo sin fin con una rueda de 30 dientes da 1/30, y una pareja de poleas de 1 cm y 10 cm da 1/10: en total, 1/300. Además, el tornillo sin fin impide que la noria gire sola hacia atrás cuando se para el motor. Hoy existen <b>motorreductores</b> que ya traen el tren de engranajes incorporado.</p>`, svg: ["Diseñar un reductor", [["Motor", "3.000 rpm"], ["Necesito", "10 rpm"], ["Relación", "i = 10 / 3.000 = 1/300"], ["Solución", "sin fin 1/30 · poleas 1/10"]], "Del motor a la noria"] },
  ],
  grupos: [2, 2, 6, 2, 2],
  ejemplos: [
    ["Una bicicleta tiene plato de 44 dientes y piñón de 11. Si pedaleas a 60 rpm, ¿a qué velocidad gira la rueda? Si la rueda mide 2,1 m de circunferencia, ¿cuántos metros recorres por minuto?", ["n₂ = 60 · 44 / 11 = 240 rpm.", "Distancia por minuto: 240 · 2,1 = 504 m.", "En km/h: 504 · 60 = 30.240 m/h ≈ 30 km/h."], "La rueda gira a 240 rpm y la bici va a unos 30 km/h."],
    ["Para aflojar una tuerca hace falta un momento de 40 N·m. ¿Qué fuerza se necesita con una llave de 20 cm? ¿Y con una de 40 cm?", ["M = F · d → F = M / d.", "Con 0,20 m: F = 40 / 0,20 = 200 N.", "Con 0,40 m: F = 40 / 0,40 = 100 N."], "200 N con la llave corta y la mitad, 100 N, con la larga."],
    ["Un motor de 6.000 rpm debe mover una grúa a 30 rpm. Diseña un tren con parejas de engranajes de 10 y 50 dientes y un tornillo sin fin.", ["i necesaria = 30 / 6.000 = 1/200.", "Tornillo sin fin con rueda de 40 dientes: 1/40.", "Una pareja 10/50: 1/5.", "Total: 1/40 · 1/5 = 1/200."], "Sin fin con rueda de 40 dientes + una pareja 10/50: la grúa gira a 30 rpm y no se descuelga."],
  ],
  errores: ["Pensar que la cadena de la bicicleta hace girar plato y piñón en sentidos contrarios: giran en el mismo sentido."],
  niveles: "bmmmmbabmb",
  ejercicios: [
    ["b", "¿Cuánto pesa, aproximadamente, un objeto de 5 kg en newtons?", "Unos 50 N (cada kilogramo pesa unos 10 N)."],
    ["b", "¿Por qué es más fácil abrir una puerta empujando lejos de las bisagras?", "Porque el momento (M = F · d) es mayor cuanto mayor es la distancia al eje: con la misma fuerza se consigue más efecto de giro, o con menos fuerza el mismo."],
    ["b", "Explica la regla de oro de los mecanismos con un ejemplo.", "Lo que se gana en fuerza se pierde en velocidad. En la bicicleta, con plato pequeño y piñón grande pedaleas con poca fuerza, pero avanzas poco en cada pedalada."],
    ["b", "Nombra los mecanismos de transmisión y los de transformación que conozcas.", "Transmisión: palanca, poleas, engranajes, cadena, tornillo sin fin, ruedas de fricción. Transformación: piñón-cremallera, tornillo-tuerca, biela-manivela, leva, excéntrica."],
    ["b", "¿Para qué sirven el trinquete y los rodamientos?", "El trinquete permite girar en un solo sentido (rueda libre de la bici, llave de carraca). Los rodamientos reducen el rozamiento entre un eje y su soporte."],
    ["b", "¿En qué sentido giran el plato y el piñón de una bicicleta?", "En el mismo sentido, porque los une una cadena (como una correa)."],
    ["m", "Plato de 52 y piñón de 13. ¿Cuántas vueltas da la rueda por pedalada?", "52 / 13 = 4 vueltas."],
    ["m", "Una llave de 25 cm y una fuerza de 120 N. ¿Qué momento se aplica?", "M = 120 · 0,25 = 30 N·m."],
    ["m", "Un tren tiene tres parejas de 12 y 36 dientes. Calcula la relación total y la velocidad de salida si el motor gira a 2.700 rpm.", "Cada pareja: 12/36 = 1/3. Total: (1/3)³ = 1/27. Salida: 2.700 / 27 = 100 rpm."],
    ["m", "¿Por qué el cinturón de seguridad lleva un trinquete?", "Para que la cinta salga despacio, pero se bloquee si se tira de golpe (como en un frenazo), sujetando al pasajero."],
    ["m", "Explica qué hace un embrague y dónde se usa.", "Conecta o desconecta el motor de la transmisión. En el coche permite cambiar de marcha y arrancar sin que el motor se pare."],
    ["m", "¿Qué ventajas tiene la cadena frente a la correa?", "No desliza, así que transmite más fuerza con precisión. Inconvenientes: es más ruidosa, necesita engrase y pesa más."],
    ["m", "Con un plato de 36 y piñones de 12 a 36 dientes, ¿qué combinación usarías para subir una cuesta y cuál para ir rápido en llano?", "Cuesta: 36/36 = 1 (poca fuerza por pedalada). Llano rápido: 36/12 = 3 (cada pedalada da 3 vueltas a la rueda)."],
    ["m", "Un motor gira a 4.800 rpm y necesitas 60 rpm. ¿Qué relación hace falta? Propón un tren de dos parejas.", "i = 60 / 4.800 = 1/80. Por ejemplo, una pareja de 10/80 (1/8) y otra de 10/100 (1/10): 1/80. O un tornillo sin fin con rueda de 80 dientes."],
    ["m", "Identifica cinco mecanismos en un coche y su función.", "Volante y dirección: piñón-cremallera. Motor: biela-manivela y levas. Caja de cambios: engranajes. Embrague: acoplamiento. Frenos de disco: frenado por rozamiento."],
    ["a", "Una grúa de taller debe levantar 20 N con un tambor de 2 cm de radio. Calcula el momento necesario en el tambor y explica por qué hace falta un reductor si el motor solo da 0,01 N·m.", "M = 20 · 0,02 = 0,4 N·m. El motor da 0,01 N·m: hace falta multiplicar el momento por 40 (sin contar pérdidas). Un reductor de 1/40 o más reduce la velocidad 40 veces y multiplica el momento casi otras tantas."],
    ["a", "Diseña el tren de mecanismos de un coche de juguete con motor a 6.000 rpm y ruedas que deben girar a 200 rpm. Usa parejas de engranajes disponibles de 10, 20, 30 y 50 dientes.", "i = 200 / 6.000 = 1/30. Por ejemplo, 10/30 (1/3) y 10/50 (1/5) dan 1/15; añadir 10/20 (1/2) da 1/30. Tres parejas: 10/30 · 10/50 · 10/20."],
    ["a", "Calcula la velocidad en km/h de una bici con plato 50, piñón 25, rueda de 2,2 m de circunferencia y cadencia de 80 rpm.", "Rueda: 80 · 50 / 25 = 160 rpm. Metros por minuto: 160 · 2,2 = 352 m. Por hora: 352 · 60 = 21.120 m ≈ 21 km/h."],
    ["a", "Explica por qué un tornillo sin fin es ideal para una barrera de aparcamiento y un mal mecanismo para una noria de feria con muchos pasajeros que deben bajar si falla el motor.", "En la barrera, el sin fin no deja que la barrera baje sola: se queda fija sin consumir energía. En la noria, si falla el motor, el sin fin la bloquearía y no se podría girar a mano para bajar a la gente; habría que añadir un sistema de desbloqueo."],
    ["a", "Analiza un abrelatas de mariposa: qué mecanismos tiene y qué hace cada uno.", "Las asas son una palanca que aprieta la cuchilla contra la lata. La mariposa es una manivela que hace girar una rueda dentada que arrastra la lata. La cuchilla gira y corta con poca fuerza gracias al momento de la manivela."],
  ],
  cuartas: ["eje motor", "P · R = BP · BR", "sin grado", "el doble", "nunca", "a la vez sin moverse", "se duplica siempre", "kg", "circular continuo", "cremallera", "450 rpm", "de ninguno", "polea"],
  quiz: [
    ["La velocidad de giro se expresa en…", ["N", "rpm", "N·m", "kg"], 1, "Revoluciones por minuto."],
    ["El momento de una fuerza es…", ["F + d", "F · d", "F / d", "d / F"], 1, "M = F · d."],
    ["Un reductor hace que la salida gire…", ["más rápido y con menos fuerza", "más despacio y con más fuerza", "igual", "al revés siempre"], 1, "Regla de oro."],
    ["Plato de 40 y piñón de 20: por pedalada la rueda da…", ["2 vueltas", "0,5 vueltas", "20 vueltas", "1 vuelta"], 0, "40 / 20 = 2."],
    ["Plato y piñón de la bicicleta giran…", ["en sentidos contrarios", "en el mismo sentido", "a la misma velocidad siempre", "solo el plato"], 1, "Unidos por una cadena."],
    ["La rueda libre de la bicicleta es un…", ["embrague", "trinquete", "muelle", "rodamiento"], 1, "Gira en un sentido."],
    ["Los rodamientos sirven para…", ["frenar", "reducir el rozamiento", "aumentar la velocidad", "transformar el movimiento"], 1, "Rodar en vez de deslizar."],
    ["Dos parejas con i = 1/4 y 1/5 dan una relación total de…", ["1/9", "1/20", "9", "20"], 1, "Se multiplican."],
    ["Un mecanismo de transformación convierte…", ["giro en giro", "un tipo de movimiento en otro", "energía en masa", "fuerza en peso"], 1, "Por ejemplo, giro en rectilíneo."],
    ["Para subir una cuesta en bici conviene…", ["plato grande y piñón pequeño", "plato pequeño y piñón grande", "no cambiar", "plato y piñón grandes"], 1, "Menos fuerza por pedalada."],
  ],
  examen: [
    ["Con una llave de 0,5 m y 80 N el momento es…", ["40 N·m", "160 N·m", "80 N·m", "0,5 N·m"], 0, "80 · 0,5 = 40 N·m."],
    ["Un motor de 3.000 rpm con un reductor de 1/100 da…", ["300 rpm", "30 rpm", "3 rpm", "30.000 rpm"], 1, "3.000 / 100 = 30 rpm."],
    ["El embrague sirve para…", ["frenar", "conectar y desconectar el motor", "girar en un sentido", "medir rpm"], 1, "Al cambiar de marcha."],
    ["El tornillo sin fin tiene la ventaja de…", ["multiplicar la velocidad", "no poder ser movido desde la rueda", "girar en el mismo sentido", "no tener dientes"], 1, "Es irreversible."],
    ["Un objeto de 3 kg pesa unos…", ["3 N", "30 N", "300 N", "0,3 N"], 1, "Unos 10 N por kg."],
  ],
  tarjetas: [["Momento o par", "M = F · d: efecto de giro de una fuerza."], ["rpm", "Vueltas por minuto de un eje."], ["Trinquete", "Mecanismo que gira en un solo sentido."], ["Regla de oro", "Lo que se gana en fuerza se pierde en velocidad."]],
  glosario: [
    ["Mecanismo", "Dispositivo que transmite o transforma fuerzas y movimientos."],
    ["Elemento motriz", "El que recibe la energía e inicia el movimiento."],
    ["Elemento receptor", "El que realiza el trabajo final."],
    ["Fulcro", "Punto de apoyo de una palanca."],
    ["Ley de la palanca", "P · BP = R · BR."],
    ["Momento", "Producto de una fuerza por su distancia al eje."],
    ["rpm", "Revoluciones por minuto."],
    ["Polea", "Rueda con garganta por la que pasa una cuerda o correa."],
    ["Polipasto", "Combinación de poleas fijas y móviles."],
    ["Engranaje", "Rueda dentada que transmite el giro."],
    ["Relación de transmisión", "Cociente entre la velocidad de salida y la de entrada."],
    ["Reductor", "Mecanismo que disminuye la velocidad y aumenta la fuerza."],
    ["Tren de mecanismos", "Encadenamiento de varias parejas de poleas o engranajes."],
    ["Tornillo sin fin", "Tornillo que engrana con una rueda; gran reducción."],
    ["Biela-manivela", "Transforma giro en vaivén y al revés."],
    ["Trinquete", "Permite el giro en un solo sentido."],
    ["Rodamiento", "Pieza con bolas que reduce el rozamiento."],
  ],
  situacion: { titulo: "Una noria que gira despacio", reto: "Diseñar y construir en equipos una noria de feria a escala movida por un motor de corriente continua, que gire a unas 10 rpm y no se mueva sola cuando se apague el motor.", pasos: ["Medir la velocidad del motor con un tacómetro o consultar su ficha.", "Calcular la relación de transmisión necesaria.", "Diseñar el tren de mecanismos (poleas, engranajes, tornillo sin fin) y dibujarlo.", "Construir la estructura y montar el mecanismo con su circuito de control.", "Medir la velocidad real de la noria y ajustar el diseño."], producto: "Noria funcional, esquema del tren de mecanismos con cálculos y ficha técnica.", evaluacion: ["Los cálculos de la relación de transmisión son correctos.", "El tren de mecanismos está bien montado y gira sin atascos.", "La noria gira cerca de 10 rpm y no retrocede.", "La ficha explica cada mecanismo con su función."] },
  saberes: "mecanismos de transmisión y transformación del movimiento: palancas, poleas, engranajes, cadenas, trenes y mecanismos auxiliares; cálculo de relaciones de transmisión y diseño de máquinas sencillas.",
  familias: ["Buscad en casa tres objetos con mecanismos (abrelatas, tijeras, batidora) y explicad juntos cómo funcionan."],
  minutos: 115,
});
