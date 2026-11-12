// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Ejes de una gráfica pequeña.
const ejes = (ex, ey) => `<path d="M40 16 V 146 H 246" stroke="var(--muted)" stroke-width="2" fill="none"/>${t(246, 164, ex, { size: 10, anchor: "end", color: "var(--muted)" })}${t(44, 14, ey, { size: 10, anchor: "start", color: "var(--muted)" })}`;

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "El movimiento",
  minutos: 55,
  objetivos: ["Describir un movimiento con sistema de referencia, posición, trayectoria y desplazamiento", "Calcular velocidades medias y cambiar sus unidades", "Resolver problemas sencillos de MRU y de aceleración", "Interpretar gráficas posición-tiempo y velocidad-tiempo"],
  claves: ["sistema de referencia", "trayectoria", "desplazamiento", "velocidad media", "aceleración", "MRU", "MRUA", "gráfica"],
  pregunta: {
    texto: "Ahora mismo, sentado en tu silla, ¿estás quieto? La Tierra gira sobre sí misma a unos 1.300 km/h en España y viaja alrededor del Sol a más de 100.000 km/h.",
    respuesta: "Depende de con qué te compares. Respecto a la silla, estás en reposo; respecto al Sol, vas a una velocidad enorme. El movimiento es <mark>relativo</mark>: para describirlo hay que elegir siempre un <mark>sistema de referencia</mark>. No notamos esa velocidad porque la Tierra, nosotros y el aire nos movemos juntos.",
  },
  bloques: [
    {
      html: `<h3>El movimiento es relativo</h3><p>Un cuerpo está en <mark>movimiento</mark> cuando cambia de posición respecto a otro que tomamos como referencia, y en <b>reposo</b> si no cambia. Ese punto u objeto que tomamos como referencia, junto con unos ejes para medir las distancias, forma el <mark>sistema de referencia</mark>. Si viajas en tren, estás en reposo respecto a tu asiento, pero en movimiento respecto al andén. Por eso el movimiento es <b>relativo</b>: depende del observador. En la vida diaria solemos tomar como referencia el suelo, que consideramos fijo. Para indicar dónde está un cuerpo usamos su <b>posición</b>, la distancia al origen del sistema de referencia, con un signo si está a un lado o al otro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un viajero en un tren: para la persona del andén se mueve a 100 kilómetros por hora; para otro viajero del tren está quieto">${BG}
        <rect x="40" y="56" width="170" height="60" rx="10" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="70" cy="128" r="10" fill="var(--ink)"/><circle cx="180" cy="128" r="10" fill="var(--ink)"/>
        <circle cx="110" cy="76" r="7" fill="var(--ink)"/><rect x="104" y="83" width="12" height="20" rx="3" fill="var(--ink)"/>
        <circle cx="160" cy="76" r="7" fill="var(--leaf)"/><rect x="154" y="83" width="12" height="20" rx="3" fill="var(--leaf)"/>
        ${fl(220, 86, 250, 86, "var(--red)", 3)}<line x1="10" y1="140" x2="250" y2="140" stroke="var(--muted)" stroke-width="3"/>
        <circle cx="24" cy="112" r="7" fill="var(--red)"/><rect x="18" y="119" width="12" height="20" rx="3" fill="var(--red)"/>
        ${t(10, 34, "andén: «va a 100 km/h»", { size: 10, anchor: "start", color: "var(--red)" })}${t(250, 48, "tren: «está quieto»", { size: 10, anchor: "end", color: "var(--leaf)" })}
        ${t(130, 166, "depende del sistema de referencia", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Trayectoria, distancia y desplazamiento</h3><p>La <mark>trayectoria</mark> es la línea formada por las sucesivas posiciones que ocupa un cuerpo al moverse. Puede ser <b>rectilínea</b>, como la de un ascensor, o <b>curvilínea</b>: circular, como la de una noria; parabólica, como la de un balón lanzado; o irregular, como la de una mosca. La <b>distancia recorrida</b> es la longitud de la trayectoria, medida sobre ella. El <mark>desplazamiento</mark> es la distancia en línea recta entre la posición inicial y la final. No siempre coinciden: si das una vuelta completa a una pista de 400 m, has recorrido 400 m, pero tu desplazamiento es cero, porque has terminado donde empezaste. Solo coinciden en un movimiento rectilíneo sin cambio de sentido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Trayectoria curva de A a B, que mide la distancia recorrida, y desplazamiento en línea recta de A a B">${BG}
        <path d="M30 140 C 50 30, 130 20, 140 90 S 210 150, 230 50" fill="none" stroke="var(--pen)" stroke-width="3" stroke-dasharray="7 5"/>
        ${fl(30, 140, 224, 54, "var(--red)", 3)}
        <circle cx="30" cy="140" r="6" fill="var(--ink)"/><circle cx="230" cy="50" r="6" fill="var(--ink)"/>
        ${t(20, 160, "A", { size: 13 })}${t(242, 46, "B", { size: 13 })}${t(66, 36, "trayectoria", { size: 11, color: "var(--pen)" })}${t(150, 172, "desplazamiento", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La velocidad</h3><p>La <mark>velocidad</mark> indica lo rápido que un cuerpo cambia de posición. La <b>velocidad media</b> es el cociente entre la distancia recorrida y el tiempo empleado: <b>v = Δx / Δt</b>. En el SI se mide en <b>metros por segundo (m/s)</b>, pero en la vida diaria usamos mucho los <b>kilómetros por hora (km/h)</b>. Para pasar de km/h a m/s se divide entre 3,6, y para pasar de m/s a km/h se multiplica por 3,6. La velocidad media no dice cómo ha ido el viaje: un coche que tarda 2 horas en recorrer 200 km ha ido a 100 km/h de media, aunque haya parado o haya adelantado a 120 km/h. La velocidad en cada momento, la que marca el velocímetro, es la <b>velocidad instantánea</b>.</p>${tabla(["Movimiento", "Velocidad aproximada"], [["Caracol", "0,001 m/s"], ["Persona andando", "1,4 m/s (5 km/h)"], ["Usain Bolt", "10,4 m/s (37,6 km/h)"], ["Coche en autovía", "33 m/s (120 km/h)"], ["Tren AVE", "83 m/s (300 km/h)"], ["Sonido en el aire", "340 m/s"], ["Luz", "300.000 km/s"]])}`,
      video: { id: "XE9UXxtep6M", titulo: "MRU Movimiento Rectilíneo Uniforme: Explicación, Fórmulas y Ejercicios", canal: "Susi Profe", vistas: 2375559 },
    },
    {
      html: `<h3>El movimiento rectilíneo uniforme (MRU)</h3><p>Un movimiento es <mark>rectilíneo uniforme (MRU)</mark> cuando su trayectoria es una <b>línea recta</b> y su <b>velocidad es constante</b>: recorre distancias iguales en tiempos iguales. Es el movimiento de un coche que circula a velocidad fija por una autovía recta o de una escalera mecánica. Su ecuación es <b>x = x₀ + v · t</b>, donde x₀ es la posición inicial, v la velocidad y t el tiempo. Si empieza en el origen, x₀ = 0 y queda x = v · t. Con esta ecuación se puede calcular dónde estará un móvil en cualquier momento, cuánto tardará en llegar a un sitio o cuándo se encontrarán dos móviles.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Coche en movimiento rectilíneo uniforme: cada segundo recorre 20 metros; en 0, 1, 2 y 3 segundos está en 0, 20, 40 y 60 metros">${BG}
        <line x1="14" y1="110" x2="246" y2="110" stroke="var(--muted)" stroke-width="2"/>
        ${[0, 1, 2, 3].map(i => { const x = 30 + i * 66; return `<rect x="${x - 14}" y="86" width="30" height="14" rx="4" fill="var(--red)" fill-opacity="${0.3 + i * 0.2}"/><circle cx="${x - 6}" cy="102" r="4" fill="var(--ink)"/><circle cx="${x + 8}" cy="102" r="4" fill="var(--ink)"/><line x1="${x}" y1="106" x2="${x}" y2="116" stroke="var(--ink)"/>${t(x, 132, i * 20 + " m", { size: 11 })}${t(x, 72, i + " s", { size: 11, color: "var(--pen)" })}`; }).join("")}
        ${t(130, 30, "v = 20 m/s constante", { size: 13, color: "var(--leaf)" })}${t(130, 160, "distancias iguales en tiempos iguales", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Gráficas del MRU</h3><p>Las gráficas permiten ver un movimiento de un vistazo. En la <mark>gráfica posición-tiempo (x-t)</mark> de un MRU, los puntos forman una <b>línea recta inclinada</b>. Su inclinación o <b>pendiente</b> es la velocidad: cuanto más inclinada, más rápido va el móvil. Una recta horizontal significa que el cuerpo está en <b>reposo</b>, porque su posición no cambia. Una recta que baja indica que el móvil vuelve hacia el origen. En la <mark>gráfica velocidad-tiempo (v-t)</mark> de un MRU, la velocidad no cambia, así que es una <b>recta horizontal</b>. El área bajo esa recta es el desplazamiento: un rectángulo de base el tiempo y altura la velocidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica posición-tiempo con tres tramos: sube recta, se queda horizontal en reposo y baja al volver">${BG}
        ${ejes("t (s)", "x (m)")}
        <path d="M40 146 L 110 66 L 170 66 L 236 126" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${t(84, 124, "avanza", { size: 10, color: "var(--red)", anchor: "start" })}${t(140, 56, "reposo", { size: 10, color: "var(--pen)" })}${t(212, 86, "vuelve", { size: 10, color: "var(--leaf)", anchor: "start" })}
        ${t(150, 138, "pendiente = velocidad", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La aceleración</h3><p>En la mayoría de los movimientos la velocidad cambia: un coche arranca, un ciclista frena, una pelota cae cada vez más rápido. La <mark>aceleración</mark> indica lo rápido que cambia la velocidad: <b>a = (v − v₀) / t</b>, donde v₀ es la velocidad inicial y v la final. Se mide en <b>m/s²</b>. Una aceleración de 2 m/s² significa que la velocidad aumenta 2 m/s cada segundo. Si la velocidad disminuye, la aceleración es <b>negativa</b>: el cuerpo está frenando, y a veces se habla de deceleración. Un coche deportivo puede pasar de 0 a 100 km/h en unos 3 segundos, una aceleración de más de 9 m/s², casi tanta como la de la gravedad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Coche que pasa de 0 a 20 metros por segundo en 5 segundos: aceleración de 4 metros por segundo al cuadrado">${BG}
        <line x1="14" y1="120" x2="246" y2="120" stroke="var(--muted)" stroke-width="2"/>
        ${[[30, "0 m/s", "t = 0 s"], [170, "20 m/s", "t = 5 s"]].map(([x, v, tt]) => `<rect x="${x}" y="92" width="56" height="20" rx="6" fill="var(--red)"/><rect x="${x + 10}" y="80" width="30" height="14" rx="4" fill="var(--red)"/><circle cx="${x + 12}" cy="114" r="7" fill="var(--ink)"/><circle cx="${x + 44}" cy="114" r="7" fill="var(--ink)"/>${t(x + 28, 68, v, { size: 13, color: "var(--pen)" })}${t(x + 28, 146, tt, { size: 12, weight: 400, color: "var(--muted)" })}`).join("")}
        ${t(130, 30, "a = (20 − 0) / 5 = 4 m/s²", { size: 14, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>El movimiento rectilíneo uniformemente acelerado (MRUA)</h3><p>Cuando un cuerpo se mueve en línea recta con <b>aceleración constante</b>, su movimiento es <mark>rectilíneo uniformemente acelerado (MRUA)</mark>. Su velocidad cambia lo mismo cada segundo. Las ecuaciones de la velocidad y la posición son: <b>v = v₀ + a · t</b> y <b>x = x₀ + v₀ · t + ½ · a · t²</b>. En la <b>gráfica v-t</b>, el MRUA da una <b>recta inclinada</b>, cuya pendiente es la aceleración. En la <b>gráfica x-t</b> da una <b>curva</b> (una parábola), porque cada segundo recorre más distancia que el anterior. El área bajo la gráfica v-t sigue siendo el desplazamiento, ahora un triángulo o un trapecio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica velocidad-tiempo: el movimiento uniforme es una recta horizontal y el uniformemente acelerado una recta que sube">${BG}
        ${ejes("t (s)", "v (m/s)")}
        <line x1="40" y1="110" x2="236" y2="110" stroke="var(--pen)" stroke-width="3"/>${t(236, 102, "MRU", { size: 11, anchor: "end", color: "var(--pen)" })}
        <line x1="40" y1="140" x2="230" y2="30" stroke="var(--red)" stroke-width="3"/>${t(196, 34, "MRUA", { size: 11, anchor: "end", color: "var(--red)" })}
        <path d="M120 94 H 160 V 71" stroke="var(--muted)" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>${t(166, 88, "pendiente = a", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
      video: { id: "Kz7_3wp5Wmc", titulo: "Movimiento Rectilíneo Uniformemente Acelerado MRUA | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 1163831 },
    },
    {
      html: `<h3>La caída libre</h3><p>Un ejemplo muy importante de MRUA es la <mark>caída libre</mark>: el movimiento de un cuerpo que cae solo por efecto de la gravedad. Galileo descubrió que, si no hubiera aire, <b>todos los cuerpos caerían con la misma aceleración</b>, sea cual sea su masa. Esa aceleración, en la superficie terrestre, es <b>g ≈ 9,8 m/s²</b>. Una pluma cae más despacio que una piedra solo por la resistencia del aire; en 1971, el astronauta David Scott dejó caer un martillo y una pluma en la Luna, sin aire, y llegaron al suelo a la vez. En caída libre desde el reposo, la velocidad a los 3 segundos es v = 9,8 · 3 ≈ 29 m/s, unos 106 km/h.</p>`,
    },
    {
      html: `<h3>La velocidad y la seguridad vial</h3><p>Las leyes del movimiento tienen consecuencias muy prácticas. La <b>distancia de detención</b> de un coche es la suma de dos distancias. La <mark>distancia de reacción</mark> es la que recorre a velocidad constante (MRU) durante el tiempo que tarda el conductor en reaccionar, alrededor de 1 segundo, o más si va distraído con el móvil. La <mark>distancia de frenado</mark> es la que recorre mientras frena (MRUA). Esta última crece con el <b>cuadrado de la velocidad</b>: a doble velocidad, cuatro veces más distancia de frenado. Por eso, a 120 km/h un coche necesita unos 100 m para detenerse, y por eso los límites de velocidad, la distancia de seguridad y no usar el móvil al volante salvan vidas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Distancias de detención a 50, 90 y 120 kilómetros por hora: la parte de reacción y la de frenado aumentan mucho con la velocidad">${BG}
        ${[[50, 14, 13], [90, 25, 40], [120, 33, 71]].map(([v, r, f], i) => { const y = 40 + i * 40; return `${t(54, y + 14, v + " km/h", { size: 9, anchor: "end" })}<rect x="58" y="${y}" width="${r * 1.5}" height="20" fill="#e0a000" fill-opacity=".7"/><rect x="${58 + r * 1.5}" y="${y}" width="${f * 1.5}" height="20" fill="var(--red)" fill-opacity=".7"/>${t(62 + (r + f) * 1.5, y + 14, (r + f) + " m", { size: 10, anchor: "start" })}`; }).join("")}
        ${t(60, 172, "■ reacción", { size: 10, anchor: "start", color: "#b8860b" })}${t(150, 172, "■ frenado", { size: 10, anchor: "start", color: "var(--red)" })}${t(130, 24, "distancia de detención", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El movimiento circular</h3><p>Muchos movimientos son circulares: las ruedas, las norias, los ventiladores, las agujas del reloj o los satélites en órbita. En el <mark>movimiento circular uniforme</mark>, el cuerpo describe una circunferencia con una rapidez constante. Aunque el valor de la velocidad no cambia, su <b>dirección</b> cambia continuamente, así que hay una aceleración que apunta hacia el centro, llamada <b>aceleración centrípeta</b>. Para describirlo se usan el <b>periodo</b> (T), el tiempo que tarda en dar una vuelta completa, y la <b>frecuencia</b> (f), el número de vueltas por segundo, que se mide en hercios (Hz) y es la inversa del periodo: f = 1 / T. La Tierra tarda un día en girar sobre sí misma y un año en dar la vuelta al Sol.</p>`,
    },
  ],
  figura: {
    titulo: "MRU y MRUA en dos gráficas",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Comparación: en la gráfica posición-tiempo el MRU es una recta y el MRUA una curva; en la gráfica velocidad-tiempo el MRU es una recta horizontal y el MRUA una recta inclinada">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      ${[[40, "posición-tiempo (x-t)"], [350, "velocidad-tiempo (v-t)"]].map(([x, n]) => `<path d="M${x + 20} 40 V 210 H ${x + 270}" stroke="var(--muted)" stroke-width="2.5" fill="none"/>${t(x + 145, 30, n, { size: 15, font: D })}`).join("")}
      <line x1="60" y1="210" x2="300" y2="90" stroke="var(--pen)" stroke-width="3.5"/><path d="M60 210 Q 200 200 300 60" stroke="var(--red)" stroke-width="3.5" fill="none"/>
      <line x1="370" y1="140" x2="610" y2="140" stroke="var(--pen)" stroke-width="3.5"/><line x1="370" y1="210" x2="600" y2="60" stroke="var(--red)" stroke-width="3.5"/>
      ${t(170, 128, "MRU", { size: 15, color: "var(--pen)" })}${t(296, 50, "MRUA", { size: 15, anchor: "end", color: "var(--red)" })}${t(590, 162, "MRU", { size: 15, color: "var(--pen)" })}${t(552, 72, "MRUA", { size: 15, color: "var(--red)" })}
      ${t(310, 236, "t", { size: 13, color: "var(--muted)" })}${t(620, 236, "t", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "QjYdiIq2weQ", titulo: "Movimiento Rectilíneo Uniforme MRU | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 1103651, megusta: 0, busqueda: "movimiento rectilíneo uniforme MRU" },
  ejemplos: [
    { enunciado: "Un tren AVE recorre los 621 km entre Madrid y Barcelona en 2 h 30 min. ¿Cuál es su velocidad media en km/h y en m/s?",
      pasos: ["Tiempo: 2 h 30 min = 2,5 h.", "v = 621 / 2,5 = 248,4 km/h.", "En m/s: 248,4 / 3,6 = 69 m/s."],
      resultado: "unos 248 km/h, es decir, 69 m/s." },
    { enunciado: "Un ciclista circula a 6 m/s constantes. ¿Qué distancia recorre en 5 minutos?",
      pasos: ["Tiempo: 5 min = 300 s.", "MRU: x = v · t.", "x = 6 · 300 = 1800 m."],
      resultado: "1800 m = 1,8 km." },
    { enunciado: "Una moto que va a 10 m/s acelera a 2 m/s² durante 5 s. ¿Qué velocidad alcanza y qué distancia recorre?",
      pasos: ["v = v₀ + a · t = 10 + 2 · 5 = 20 m/s.", "x = v₀ · t + ½ · a · t² = 10 · 5 + ½ · 2 · 25.", "x = 50 + 25 = 75 m."],
      resultado: "20 m/s y 75 m." },
  ],
  errores: [
    "Decir que un cuerpo está quieto sin indicar respecto a qué.",
    "Confundir distancia recorrida con desplazamiento.",
    "Mezclar unidades: dividir kilómetros entre segundos sin convertir.",
    "Pensar que una aceleración negativa significa ir hacia atrás: significa que la velocidad disminuye.",
    "Creer que los cuerpos pesados caen más rápido: sin aire, todos caen igual.",
  ],
  ejercicios: [
    { q: "¿Por qué decimos que el movimiento es relativo? Pon un ejemplo.", sol: "Porque depende del sistema de referencia. Una persona sentada en un autobús está en reposo respecto al autobús y en movimiento respecto a la calle." },
    { q: "Una atleta da 3 vueltas a una pista de 400 m y acaba donde empezó. ¿Qué distancia ha recorrido? ¿Cuál es su desplazamiento?", sol: "Distancia: 1200 m. Desplazamiento: 0 m." },
    { q: "Pasa 72 km/h a m/s y 15 m/s a km/h.", sol: "72 / 3,6 = 20 m/s; 15 · 3,6 = 54 km/h." },
    { q: "Un coche recorre 150 km en 1 h 30 min. ¿Cuál es su velocidad media?", sol: "150 / 1,5 = 100 km/h." },
    { q: "¿Cuánto tarda la luz del Sol en llegar a la Tierra (150 millones de km, a 300.000 km/s)?", sol: "t = 150.000.000 / 300.000 = 500 s, unos 8 min 20 s." },
    { q: "Dibuja la gráfica x-t de un cuerpo que está 10 s parado en x = 20 m.", sol: "Una recta horizontal a la altura de x = 20 m entre t = 0 y t = 10 s." },
    { q: "Un coche pasa de 0 a 27 m/s en 9 s. Calcula su aceleración.", sol: "a = 27 / 9 = 3 m/s²." },
    { q: "Un coche a 25 m/s frena y se detiene en 5 s. ¿Cuál es su aceleración?", sol: "a = (0 − 25) / 5 = −5 m/s²." },
    { q: "Se deja caer una piedra desde un puente. ¿Qué velocidad lleva a los 2 s? (g = 9,8 m/s²)", sol: "v = 9,8 · 2 = 19,6 m/s." },
    { q: "¿Por qué usar el móvil al volante aumenta el riesgo de accidente?", sol: "Porque aumenta el tiempo de reacción, y durante ese tiempo el coche sigue avanzando a la misma velocidad, así que la distancia de detención es mayor." },
  ],
  quiz: [
    { q: "El conjunto de un punto de referencia y unos ejes es…", o: ["la trayectoria", "el sistema de referencia", "el desplazamiento"], a: 1, e: "El sistema de referencia." },
    { q: "La línea que describe un móvil es…", o: ["la trayectoria", "la velocidad", "la aceleración"], a: 0, e: "La trayectoria." },
    { q: "La unidad de velocidad en el SI es…", o: ["km/h", "m/s", "m/s²"], a: 1, e: "m/s." },
    { q: "90 km/h son…", o: ["25 m/s", "324 m/s", "9 m/s"], a: 0, e: "90 / 3,6 = 25 m/s." },
    { q: "En un MRU la velocidad es…", o: ["constante", "creciente", "cero"], a: 0, e: "Constante." },
    { q: "En una gráfica x-t, una recta horizontal indica…", o: ["MRU rápido", "reposo", "aceleración"], a: 1, e: "Reposo." },
    { q: "La aceleración se mide en…", o: ["m/s", "m/s²", "N"], a: 1, e: "m/s²." },
    { q: "En la gráfica v-t, un MRUA es…", o: ["una recta horizontal", "una recta inclinada", "una curva"], a: 1, e: "Una recta inclinada." },
    { q: "La aceleración de la gravedad en la Tierra es…", o: ["9,8 m/s²", "1 m/s²", "98 m/s²"], a: 0, e: "≈ 9,8 m/s²." },
    { q: "A doble velocidad, la distancia de frenado es…", o: ["el doble", "el cuádruple", "igual"], a: 1, e: "Crece con el cuadrado." },
  ],
  examen: [
    { q: "Un coche que va a 20 m/s durante 10 s recorre…", o: ["2 m", "200 m", "30 m"], a: 1, e: "20 · 10 = 200 m." },
    { q: "Una aceleración negativa indica que…", o: ["el cuerpo frena", "va hacia atrás", "está parado"], a: 0, e: "La velocidad disminuye." },
    { q: "Si se suelta en la Luna un martillo y una pluma…", o: ["cae antes el martillo", "llegan a la vez", "la pluma flota"], a: 1, e: "Sin aire, a la vez." },
  ],
  feynman: ["Por qué el movimiento es relativo y qué es un sistema de referencia", "Qué diferencia hay entre MRU y MRUA y cómo son sus gráficas", "Por qué la velocidad es tan importante en la seguridad vial"],
  mapa: mapa("MOVIMIENTO", "var(--eso)", [
    ["Describir", "referencia · trayectoria · desplazamiento", "var(--pen)"],
    ["Velocidad", "v = Δx / Δt · m/s · km/h", "var(--red)"],
    ["Aceleración", "a = Δv / Δt · m/s²", "#b8860b"],
    ["Tipos", "MRU · MRUA · caída libre · circular", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Sistema de referencia", "Punto y ejes respecto a los que se describe el movimiento."],
    ["Trayectoria", "Línea que describe un móvil."],
    ["Desplazamiento", "Distancia en línea recta entre el inicio y el final."],
    ["Velocidad media", "v = distancia / tiempo."],
    ["MRU", "Trayectoria recta y velocidad constante: x = x₀ + v·t."],
    ["Aceleración", "Cambio de velocidad por unidad de tiempo; m/s²."],
    ["MRUA", "Aceleración constante: v = v₀ + a·t."],
    ["Caída libre", "MRUA con g ≈ 9,8 m/s²."],
  ],
  familias: ["Calculad vuestra velocidad media andando: medid 50 m y cronometrad cuánto tardáis.", "En un viaje en coche, observad el velocímetro y calculad la velocidad media con la distancia y el tiempo totales.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La interacción: el movimiento, sistema de referencia, magnitudes cinemáticas, MRU y MRUA, gráficas y aplicaciones a la seguridad vial (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Medir velocidades en el patio con cronómetros y cintas métricas, y hacer la gráfica x-t.", "Tubo con burbuja o carrito de pilas para estudiar el MRU.", "Plano inclinado con fotopuertas o vídeo a cámara lenta para el MRUA."],
  },
  fuentes: [RD, wiki("Movimiento rectilíneo uniforme", "Movimiento_rectil%C3%ADneo_uniforme"), wiki("Aceleración", "Aceleraci%C3%B3n")],
  revisado: "2026-11-12",
};
