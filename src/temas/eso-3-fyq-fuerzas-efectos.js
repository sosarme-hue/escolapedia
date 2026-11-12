// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Las fuerzas y sus efectos",
  minutos: 55,
  objetivos: ["Definir fuerza y reconocer sus efectos deformadores y dinámicos", "Representar fuerzas como vectores y calcular la resultante de fuerzas en la misma dirección o perpendiculares", "Aplicar la ley de Hooke y usar el dinamómetro", "Explicar el rozamiento y las leyes de Newton con ejemplos cotidianos"],
  claves: ["fuerza", "newton", "vector", "fuerza resultante", "ley de Hooke", "dinamómetro", "rozamiento", "leyes de Newton"],
  pregunta: {
    texto: "En el espacio, un astronauta empuja una nave de 10 toneladas y la nave se mueve. Él también sale disparado hacia atrás. ¿Por qué se mueve él si es la nave la que recibe el empujón?",
    respuesta: "Porque las fuerzas siempre aparecen <mark>por parejas</mark>. Cuando el astronauta empuja la nave, la nave le empuja a él con una fuerza igual y de sentido contrario. Es la <mark>tercera ley de Newton</mark>, la ley de acción y reacción. Como él tiene mucha menos masa, sale despedido mucho más rápido que la nave.",
  },
  bloques: [
    {
      html: `<h3>Qué es una fuerza</h3><p>Una <mark>fuerza</mark> es toda causa capaz de <b>deformar</b> un cuerpo o de <b>cambiar su estado de movimiento</b>: ponerlo en marcha, frenarlo, acelerarlo o cambiar su dirección. Las fuerzas siempre aparecen por la <b>interacción</b> entre dos cuerpos. Pueden actuar <b>por contacto</b>, como al empujar un carro o chutar un balón, o <b>a distancia</b>, como la gravedad que atrae una manzana hacia el suelo o la fuerza de un imán sobre un clip. La unidad de fuerza en el SI es el <b>newton (N)</b>, en honor a Isaac Newton. Para hacerte una idea, 1 N es aproximadamente lo que pesa una manzana pequeña de 100 g.</p>`,
    },
    {
      html: `<h3>Los efectos de las fuerzas</h3><p>Las fuerzas producen dos tipos de efectos. Los <mark>efectos deformadores</mark> cambian la forma del cuerpo. Según cómo responda el material, puede ser <b>elástico</b>, si recupera su forma cuando deja de actuar la fuerza (un muelle, una goma, una pelota); <b>plástico</b>, si queda deformado (la plastilina, el barro, una lata aplastada); o <b>frágil</b>, si se rompe (el vidrio, una tiza). Los <mark>efectos dinámicos</mark> cambian el movimiento: un portero que para un balón lo frena; un ciclista que pedalea acelera; el volante de un coche cambia su dirección. A menudo una misma fuerza produce los dos efectos: al chutar, el balón se deforma un instante y sale disparado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efectos de las fuerzas: un muelle estirado, una plastilina aplastada y un balón que cambia de movimiento al ser chutado">${BG}
        <path d="M20 40 H 30 l 5 -8 l 10 16 l 10 -16 l 10 16 l 10 -16 l 10 16 l 5 -8 H 100" stroke="var(--pen)" stroke-width="2.5" fill="none"/>${fl(100, 40, 120, 40, "var(--red)", 2.5)}${t(60, 70, "elástico", { size: 11, color: "var(--pen)" })}
        <ellipse cx="190" cy="44" rx="40" ry="12" fill="#e08a5a"/>${fl(190, 10, 190, 28, "var(--red)", 2.5)}${t(190, 74, "plástico", { size: 11, color: "#b5653a" })}
        <circle cx="70" cy="132" r="18" fill="#fff" stroke="var(--ink)" stroke-width="2"/><path d="M62 124 l 8 -4 l 8 4 l -3 9 h -10 Z" fill="var(--ink)"/>${fl(96, 132, 150, 132, "var(--red)", 2.5)}
        ${[0, 1, 2].map(i => `<circle cx="${170 + i * 26}" cy="${132 - i * 10}" r="10" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/>`).join("")}${t(130, 170, "dinámico: cambia el movimiento", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Las fuerzas son vectores</h3><p>Para describir una fuerza no basta con decir cuánto vale: hay que indicar hacia dónde actúa. Empujar una mesa con 50 N hacia la derecha no tiene el mismo efecto que hacia la izquierda. Por eso las fuerzas son <mark>magnitudes vectoriales</mark> y se representan con <b>flechas</b> llamadas vectores, que tienen cuatro elementos: el <b>punto de aplicación</b>, donde empieza la flecha; el <b>módulo</b> o intensidad, que es su valor en newtons y se representa por la longitud de la flecha; la <b>dirección</b>, que es la recta sobre la que actúa (horizontal, vertical, inclinada); y el <b>sentido</b>, indicado por la punta de la flecha. Las magnitudes que solo necesitan un número, como la masa o la temperatura, se llaman <b>escalares</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vector fuerza sobre una caja: punto de aplicación, módulo como longitud de la flecha, dirección como la recta y sentido como la punta">${BG}
        <rect x="24" y="80" width="60" height="50" rx="4" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/>
        <line x1="14" y1="105" x2="250" y2="105" stroke="var(--muted)" stroke-dasharray="4 4"/>
        <circle cx="84" cy="105" r="5" fill="var(--ink)"/>${fl(84, 105, 210, 105, "var(--red)", 4)}
        ${t(84, 150, "punto de aplicación", { size: 10 })}${t(147, 92, "módulo: 50 N", { size: 11, color: "var(--red)" })}
        ${t(244, 124, "dirección", { size: 10, anchor: "end", color: "var(--muted)" })}${t(216, 80, "sentido", { size: 10, color: "var(--red)" })}${fl(216, 84, 210, 98, "var(--red)", 1.5)}</svg>`,
    },
    {
      html: `<h3>La fuerza resultante</h3><p>Cuando sobre un cuerpo actúan varias fuerzas, su efecto conjunto equivale al de una sola fuerza, la <mark>resultante</mark>. Si las fuerzas tienen la <b>misma dirección y sentido</b>, la resultante es su <b>suma</b>: dos personas que empujan un coche con 300 N y 200 N hacia delante ejercen 500 N. Si tienen la <b>misma dirección y sentido contrario</b>, la resultante es su <b>diferencia</b> y tiene el sentido de la mayor: en el juego de la cuerda, si un equipo tira con 800 N y el otro con 700 N, la resultante es de 100 N hacia el primero. Si las fuerzas son <b>perpendiculares</b>, la resultante se calcula con el <b>teorema de Pitágoras</b>: R = √(F₁² + F₂²). Si la resultante es cero, las fuerzas están <b>equilibradas</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres casos de resultante: fuerzas en el mismo sentido se suman, en sentido contrario se restan y perpendiculares se combinan con Pitágoras">${BG}
        <rect x="16" y="22" width="20" height="20" fill="var(--muted)"/>${fl(36, 32, 96, 32, "var(--pen)", 3)}${fl(36, 38, 76, 38, "var(--leaf)", 3)}${t(170, 38, "300 + 200 = 500 N", { size: 11 })}
        <rect x="56" y="72" width="20" height="20" fill="var(--muted)"/>${fl(76, 82, 136, 82, "var(--pen)", 3)}${fl(56, 82, 18, 82, "var(--leaf)", 3)}${t(196, 88, "800 − 700 = 100 N", { size: 11 })}
        <rect x="16" y="140" width="20" height="20" fill="var(--muted)"/>${fl(36, 150, 96, 150, "var(--pen)", 3)}${fl(26, 140, 26, 112, "var(--leaf)", 3)}${fl(36, 140, 96, 112, "var(--red)", 3)}${t(176, 140, "√(3² + 4²) = 5 N", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La ley de Hooke</h3><p>En el siglo XVII, el científico inglés <b>Robert Hooke</b> estudió cómo se estiran los muelles al colgarles pesos. Descubrió que el <b>alargamiento</b> es <mark>directamente proporcional a la fuerza</mark> aplicada: si colgamos el doble de peso, el muelle se estira el doble. Es la <b>ley de Hooke</b>: <b>F = k · Δl</b>, donde F es la fuerza en newtons, Δl es el alargamiento en metros (la longitud final menos la inicial) y k es la <b>constante elástica</b> del muelle, en N/m, que indica lo duro que es: cuanto mayor es k, más cuesta estirarlo. La ley solo se cumple hasta un valor, el <b>límite de elasticidad</b>: si se tira más, el muelle queda deformado para siempre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres muelles colgados: sin peso, con 1 newton se estira 2 centímetros y con 2 newtons se estira 4 centímetros">${BG}
        <rect x="14" y="14" width="232" height="8" fill="var(--muted)"/>
        ${[[50, 0, ""], [130, 1, "1 N"], [210, 2, "2 N"]].map(([x, n, w]) => { const L = 50 + n * 30; let d = `M${x} 22 v 6`; const seg = 8; for (let i = 0; i < seg; i++) d += ` l ${i % 2 ? -8 : 8} ${L / seg / 2} l ${i % 2 ? 8 : -8} ${L / seg / 2}`; return `<path d="${d} v 6" stroke="var(--pen)" stroke-width="2" fill="none"/>${n ? `<rect x="${x - 14}" y="${34 + L}" width="28" height="22" fill="var(--red)" fill-opacity=".6"/>${t(x, 50 + L, w, { size: 10 })}` : ""}`; }).join("")}
        <line x1="20" y1="84" x2="250" y2="84" stroke="var(--muted)" stroke-dasharray="3 3"/>${t(178, 112, "+2 cm", { size: 10, color: "var(--red)", anchor: "end" })}${t(198, 140, "+4 cm", { size: 10, color: "var(--red)", anchor: "end" })}
        ${t(50, 120, "F = k · Δl", { size: 12, color: "var(--leaf)" })}</svg>`,
      video: { id: "npxZ-A2WSTo", titulo: "LEY de HOOKE: Fuerza ELÁSTICA del Muelle o Resorte", canal: "Susi Profe", vistas: 1027226 },
    },
    {
      html: `<h3>El dinamómetro</h3><p>La ley de Hooke permite medir fuerzas. El <mark>dinamómetro</mark> es un instrumento formado por un <b>muelle</b> dentro de un tubo con una <b>escala graduada</b> en newtons. Al colgarle un objeto o tirar de su gancho, el muelle se estira de forma proporcional a la fuerza, y una aguja marca su valor. Antes de usarlo hay que comprobar que marca cero sin carga. Cada dinamómetro tiene un <b>alcance</b> o fuerza máxima que puede medir: si lo superamos, el muelle se deforma y deja de medir bien. Las básculas de baño mecánicas y las balanzas de los mercados antiguos, las romanas, funcionan con el mismo principio.</p>`,
    },
    {
      html: `<h3>El rozamiento</h3><p>Si empujas un libro sobre la mesa y lo sueltas, acaba parándose. Lo frena la <mark>fuerza de rozamiento</mark>, que aparece cuando dos superficies están en contacto y una se desliza o intenta deslizarse sobre la otra. Siempre se <b>opone al movimiento</b>. Se debe a que las superficies, aunque parezcan lisas, tienen pequeñas irregularidades que se enganchan. Es mayor cuanto más rugosas son las superficies y cuanto más se aprietan entre sí. El rozamiento a veces es <b>útil</b>: sin él no podríamos andar, los coches no frenarían y los nudos se desharían. Otras veces es un <b>inconveniente</b>: desgasta las piezas de las máquinas y produce calor; para reducirlo se usan lubricantes, rodamientos y formas aerodinámicas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bloque sobre una superficie: la fuerza aplicada empuja hacia la derecha y el rozamiento actúa hacia la izquierda; ampliación de las superficies rugosas que se enganchan">${BG}
        <rect x="80" y="40" width="80" height="50" rx="4" fill="#c9a37a" stroke="#8a6a4a" stroke-width="2"/><rect x="14" y="90" width="232" height="14" fill="var(--muted)" fill-opacity=".4"/>
        ${fl(160, 64, 230, 64, "var(--pen)", 3)}${fl(80, 86, 30, 86, "var(--red)", 3)}${t(196, 52, "empuje", { size: 11, color: "var(--pen)" })}${t(76, 76, "rozamiento", { size: 11, anchor: "end", color: "var(--red)" })}
        <path d="M50 140 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8" stroke="#8a6a4a" stroke-width="2" fill="none"/>
        <path d="M50 146 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8 l 10 8 l 10 -8" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${t(130, 174, "las irregularidades se enganchan", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La primera ley de Newton: inercia</h3><p>Antes de Galileo y Newton se pensaba que, para que un cuerpo se moviera, había que empujarlo continuamente. Newton demostró que no es así. Su <mark>primera ley</mark>, o <b>principio de inercia</b>, dice: <b>si sobre un cuerpo no actúa ninguna fuerza, o la resultante es cero, el cuerpo permanece en reposo o sigue moviéndose en línea recta a velocidad constante</b>. Los objetos se paran porque actúa el rozamiento; en el espacio, sin rozamiento, una sonda sigue viajando durante años sin motor, como las Voyager. La inercia explica por qué te vas hacia delante cuando el autobús frena de golpe: tu cuerpo tiende a seguir moviéndose. Por eso son tan importantes los cinturones de seguridad.</p>`,
    },
    {
      html: `<h3>La segunda ley de Newton: F = m · a</h3><p>La <mark>segunda ley</mark>, o <b>principio fundamental de la dinámica</b>, relaciona la fuerza resultante con el cambio de velocidad que produce: <b>F = m · a</b>. La fuerza (en N) es igual a la masa del cuerpo (en kg) por la <b>aceleración</b> que adquiere (en m/s²), es decir, lo rápido que cambia su velocidad. A igual fuerza, un cuerpo con más masa acelera menos: es más fácil empujar un carro del súper vacío que lleno. A igual masa, más fuerza produce más aceleración. De esta ley se obtiene la definición de newton: <b>1 N es la fuerza que, aplicada a un cuerpo de 1 kg, le produce una aceleración de 1 m/s²</b>.</p>${tabla(["Fuerza", "Masa", "Aceleración"], [["10 N", "2 kg", "5 m/s²"], ["10 N", "5 kg", "2 m/s²"], ["20 N", "5 kg", "4 m/s²"], ["600 N", "1200 kg", "0,5 m/s²"]])}`,
    },
    {
      html: `<h3>La tercera ley de Newton: acción y reacción</h3><p>La <mark>tercera ley</mark>, o <b>principio de acción y reacción</b>, dice que <b>si un cuerpo ejerce una fuerza sobre otro, este ejerce sobre el primero una fuerza igual y de sentido contrario</b>. Las dos fuerzas actúan sobre cuerpos <b>distintos</b>, por eso no se anulan. Al andar, empujamos el suelo hacia atrás y el suelo nos empuja hacia delante. Un nadador empuja el agua hacia atrás y avanza. Un cohete expulsa gases a gran velocidad hacia abajo y los gases lo empujan hacia arriba; por eso funciona en el vacío, sin aire en el que apoyarse. Y al disparar una escopeta, el arma retrocede contra el hombro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Acción y reacción: un patinador empuja una pared hacia la derecha y la pared le empuja con la misma fuerza hacia la izquierda; un cohete expulsa gases hacia abajo y sube">${BG}
        <rect x="120" y="20" width="14" height="110" fill="var(--muted)"/>
        <circle cx="80" cy="44" r="10" fill="var(--ink)"/><line x1="80" y1="54" x2="80" y2="92" stroke="var(--ink)" stroke-width="4"/><line x1="80" y1="64" x2="118" y2="64" stroke="var(--ink)" stroke-width="4"/><line x1="80" y1="92" x2="70" y2="120" stroke="var(--ink)" stroke-width="4"/><line x1="80" y1="92" x2="92" y2="120" stroke="var(--ink)" stroke-width="4"/>
        ${fl(100, 76, 132, 76, "var(--red)", 3)}${fl(80, 104, 34, 104, "var(--pen)", 3)}${t(140, 70, "acción", { size: 10, anchor: "start", color: "var(--red)" })}${t(40, 96, "reacción", { size: 10, color: "var(--pen)" })}
        <path d="M206 30 l 14 22 v 50 h -28 v -50 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M196 104 l 10 30 l 10 -30 Z" fill="#f08a24"/>
        ${fl(206, 26, 206, 8, "var(--pen)", 2.5)}${fl(206, 138, 206, 164, "var(--red)", 2.5)}${t(230, 174, "gases", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "86ZNmoAdlNg", titulo: "¿Cómo funcionan las Leyes de Newton?", canal: "CuriosaMente", vistas: 4742292 },
    },
  ],
  figura: {
    titulo: "Las tres leyes de Newton",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Las tres leyes de Newton en tres tarjetas: inercia, si no hay fuerza neta el cuerpo mantiene su estado; F igual a m por a; y acción y reacción, fuerzas iguales y opuestas sobre cuerpos distintos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1ª · Inercia", "sin fuerza neta:", "reposo o MRU", "var(--pen)"], ["2ª · Dinámica", "F = m · a", "más masa, menos a", "var(--red)"], ["3ª · Acción-reacción", "fuerzas iguales", "y opuestas", "var(--leaf)"]].map(([n, a, b, c], i) => { const x = 20 + i * 206; return `<rect x="${x}" y="24" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 95, 60, n, { size: 16, color: c, font: D })}${t(x + 95, 116, a, { size: 17 })}${t(x + 95, 148, b, { size: 14, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "9lgVjHJqTZc", titulo: "Las Leyes de Newton en menos de cinco minutos", canal: "AprendemosJuntos", vistas: 1794828, megusta: 0, busqueda: "fuerza de la gravedad Newton" },
  ejemplos: [
    { enunciado: "Un muelle de 20 cm se alarga hasta 26 cm al colgarle un peso de 3 N. ¿Cuál es su constante elástica?",
      pasos: ["Alargamiento: Δl = 26 − 20 = 6 cm = 0,06 m.", "F = k · Δl → k = F / Δl.", "k = 3 / 0,06 = 50 N/m."],
      resultado: "k = 50 N/m." },
    { enunciado: "Dos fuerzas perpendiculares de 6 N y 8 N actúan sobre un cuerpo. ¿Cuál es la resultante?",
      pasos: ["Al ser perpendiculares, usamos Pitágoras.", "R = √(6² + 8²) = √(36 + 64).", "R = √100 = 10 N."],
      resultado: "10 N." },
    { enunciado: "¿Qué aceleración adquiere un carro de 40 kg si se empuja con una fuerza neta de 60 N?",
      pasos: ["Segunda ley: F = m · a.", "a = F / m = 60 / 40.", "a = 1,5 m/s²."],
      resultado: "1,5 m/s²." },
  ],
  errores: [
    "Pensar que hace falta una fuerza para mantener un movimiento: solo para cambiarlo.",
    "Creer que acción y reacción se anulan: actúan sobre cuerpos distintos.",
    "Usar la longitud total del muelle en la ley de Hooke en lugar del alargamiento.",
    "Olvidar pasar los centímetros a metros al calcular k en N/m.",
    "Sumar siempre las fuerzas: si tienen sentidos contrarios, se restan.",
  ],
  ejercicios: [
    { q: "Define fuerza y cita su unidad en el SI.", sol: "Toda causa capaz de deformar un cuerpo o cambiar su estado de movimiento. Se mide en newtons (N)." },
    { q: "Clasifica como elástico, plástico o frágil: una goma, un vaso de cristal, la arcilla, un trampolín.", sol: "Elásticos: goma y trampolín. Plástico: arcilla. Frágil: vaso de cristal." },
    { q: "Nombra los cuatro elementos de un vector fuerza.", sol: "Punto de aplicación, módulo, dirección y sentido." },
    { q: "Calcula la resultante de 40 N y 25 N en la misma dirección: a) mismo sentido; b) sentidos contrarios.", sol: "a) 65 N; b) 15 N en el sentido de la de 40 N." },
    { q: "Un muelle de constante 200 N/m se estira 5 cm. ¿Qué fuerza se ha aplicado?", sol: "F = 200 · 0,05 = 10 N." },
    { q: "Un muelle de k = 80 N/m mide 15 cm. ¿Cuánto medirá al colgarle 4 N?", sol: "Δl = 4 / 80 = 0,05 m = 5 cm; medirá 20 cm." },
    { q: "Pon dos ejemplos de rozamiento útil y dos de rozamiento perjudicial.", sol: "Útil: andar, frenar. Perjudicial: desgaste de piezas, pérdida de energía en forma de calor." },
    { q: "¿Por qué es importante llevar el cinturón de seguridad? Relaciónalo con una ley de Newton.", sol: "Por la inercia (primera ley): al frenar el coche, el cuerpo tiende a seguir moviéndose y saldría despedido." },
    { q: "¿Qué fuerza hace falta para que una moto de 150 kg acelere a 2 m/s²?", sol: "F = 150 · 2 = 300 N." },
    { q: "Explica cómo avanza un cohete en el espacio.", sol: "Expulsa gases hacia atrás (acción) y los gases lo empujan hacia delante (reacción), según la tercera ley de Newton." },
  ],
  quiz: [
    { q: "La unidad de fuerza en el SI es…", o: ["el kilogramo", "el newton", "el julio"], a: 1, e: "El newton." },
    { q: "Un material que recupera su forma es…", o: ["plástico", "elástico", "frágil"], a: 1, e: "Elástico." },
    { q: "La fuerza es una magnitud…", o: ["escalar", "vectorial", "sin unidad"], a: 1, e: "Vectorial." },
    { q: "Resultante de 3 N y 4 N perpendiculares:", o: ["7 N", "1 N", "5 N"], a: 2, e: "√(9 + 16) = 5 N." },
    { q: "En la ley de Hooke, k se mide en…", o: ["N/m", "m/N", "N·m"], a: 0, e: "N/m." },
    { q: "Para medir fuerzas se usa…", o: ["la balanza", "el dinamómetro", "el termómetro"], a: 1, e: "El dinamómetro." },
    { q: "El rozamiento siempre…", o: ["ayuda al movimiento", "se opone al movimiento", "es cero"], a: 1, e: "Se opone." },
    { q: "Al frenar el autobús te vas hacia delante por…", o: ["la inercia", "la gravedad", "el rozamiento"], a: 0, e: "La inercia." },
    { q: "F = m · a es la ley…", o: ["primera", "segunda", "tercera"], a: 1, e: "La segunda." },
    { q: "Al andar, el suelo te empuja…", o: ["hacia atrás", "hacia delante", "hacia abajo"], a: 1, e: "Hacia delante: reacción." },
  ],
  examen: [
    { q: "Si la resultante de fuerzas es cero, un cuerpo en movimiento…", o: ["se para", "sigue a velocidad constante", "acelera"], a: 1, e: "Sigue con MRU." },
    { q: "Con la misma fuerza, un cuerpo de más masa acelera…", o: ["más", "menos", "igual"], a: 1, e: "Menos." },
    { q: "Si colgamos el triple de peso a un muelle, se estira…", o: ["igual", "el triple", "la tercera parte"], a: 1, e: "El triple." },
  ],
  feynman: ["Qué efectos producen las fuerzas y cómo se representan", "Cómo funciona un dinamómetro gracias a la ley de Hooke", "Qué dicen las tres leyes de Newton con ejemplos"],
  mapa: mapa("FUERZAS", "var(--eso)", [
    ["Efectos", "deformadores · dinámicos", "var(--pen)"],
    ["Vectores", "módulo · dirección · sentido · resultante", "var(--red)"],
    ["Hooke", "F = k · Δl · dinamómetro", "#b8860b"],
    ["Newton", "inercia · F = m·a · acción-reacción", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Fuerza", "Causa que deforma o cambia el movimiento; se mide en N."],
    ["Vector", "Flecha con punto de aplicación, módulo, dirección y sentido."],
    ["Resultante", "Fuerza única equivalente a todas las que actúan."],
    ["Ley de Hooke", "F = k · Δl."],
    ["Dinamómetro", "Muelle graduado para medir fuerzas."],
    ["Rozamiento", "Fuerza que se opone al deslizamiento."],
    ["Inercia", "Tendencia a mantener el reposo o el MRU."],
    ["Acción y reacción", "Fuerzas iguales y opuestas sobre cuerpos distintos."],
  ],
  familias: ["Fabricad un dinamómetro casero con una goma, un vaso de yogur y monedas, y graduadlo.", "Arrastrad un libro sobre distintas superficies (mesa, toalla, papel) y comparad lo que cuesta moverlo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La interacción: las fuerzas y sus efectos, representación vectorial, ley de Hooke, rozamiento y leyes de Newton (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Práctica de la ley de Hooke con muelles y pesas, y gráfica F frente a Δl.", "Carrito con globo para ilustrar acción y reacción.", "Medir el rozamiento con un dinamómetro arrastrando un bloque sobre distintas superficies."],
  },
  fuentes: [RD, wiki("Fuerza", "Fuerza"), wiki("Leyes de Newton", "Leyes_de_Newton")],
  revisado: "2026-11-12",
};
