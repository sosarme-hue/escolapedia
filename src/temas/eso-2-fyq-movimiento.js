// Física y Química 2º ESO: el movimiento, velocidad y aceleración. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "El movimiento: velocidad y aceleración",
  minutos: 55,
  objetivos: ["Explicar que el movimiento es relativo y elegir un sistema de referencia", "Distinguir trayectoria, posición, distancia recorrida y desplazamiento", "Calcular velocidades medias y resolver problemas de movimiento rectilíneo uniforme", "Interpretar gráficas posición-tiempo y calcular aceleraciones sencillas"],
  claves: ["movimiento", "sistema de referencia", "trayectoria", "desplazamiento", "velocidad media", "MRU", "aceleración", "gráfica posición-tiempo"],
  pregunta: {
    texto: "Vas sentado en un tren que va a 200 km/h. ¿Estás quieto o te mueves?",
    respuesta: "Depende de con qué te compares. Respecto a tu asiento y a los otros pasajeros, estás <b>en reposo</b>. Respecto a las vías y a los árboles de fuera, te mueves a <b>200 km/h</b>. El movimiento es <mark>relativo</mark>: para describirlo siempre hay que indicar un <mark>sistema de referencia</mark>.",
  },
  bloques: [
    {
      html: `<h3>El movimiento es relativo</h3><p>Un cuerpo está en <mark>movimiento</mark> cuando <b>cambia de posición</b> con el tiempo respecto a otro cuerpo que tomamos como referencia. Si su posición no cambia, está en <b>reposo</b>. Pero la misma persona puede estar en reposo y en movimiento a la vez, según con qué la comparemos: el conductor de un autobús está quieto respecto a su asiento y se mueve respecto a la parada. Por eso decimos que el movimiento es <mark>relativo</mark>. Para describirlo hay que elegir un <mark>sistema de referencia</mark>: un punto o un cuerpo que consideramos fijo, con unos ejes para medir posiciones. En la vida diaria solemos tomar como referencia el suelo, aunque en realidad la Tierra gira sobre sí misma y viaja alrededor del Sol a unos 107 000 km/h.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un pasajero sentado en un tren: está en reposo respecto al tren y se mueve a 200 kilómetros por hora respecto a un árbol del andén">${BG}
        <rect x="20" y="52" width="170" height="64" rx="12" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><rect x="36" y="64" width="40" height="26" rx="4" fill="var(--card)" stroke="var(--pen)"/><rect x="90" y="64" width="40" height="26" rx="4" fill="var(--card)" stroke="var(--pen)"/>
        <circle cx="110" cy="74" r="6" fill="var(--ink)"/><rect x="104" y="80" width="12" height="10" fill="var(--ink)"/>
        <circle cx="50" cy="122" r="8" fill="var(--ink)"/><circle cx="160" cy="122" r="8" fill="var(--ink)"/><line x1="10" y1="132" x2="250" y2="132" stroke="var(--muted)" stroke-width="3"/>
        ${fl(140, 40, 190, 40, "var(--red)", 3)}${t(110, 36, "200 km/h", { size: 11, color: "var(--red)", anchor: "end" })}
        <rect x="222" y="90" width="6" height="40" fill="#8a6a4a"/><circle cx="225" cy="80" r="16" fill="var(--leaf)"/>
        ${t(70, 156, "respecto al tren: reposo", { size: 10, color: "var(--pen)" })}${t(186, 172, "respecto al árbol: se mueve", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Trayectoria, posición y desplazamiento</h3><p>La <mark>trayectoria</mark> es la línea que describe un cuerpo al moverse: el rastro de un avión en el cielo o las huellas en la nieve. Puede ser <b>rectilínea</b> (un ascensor, una bola de bolos) o <b>curvilínea</b>: circular (la punta de las agujas del reloj, una noria), elíptica (los planetas) o parabólica (un balón lanzado a canasta). La <mark>posición</mark> (x) indica dónde está el cuerpo respecto al origen del sistema de referencia, y se mide en metros. La <mark>distancia recorrida</mark> es la longitud de la trayectoria. El <mark>desplazamiento</mark> es la distancia en línea recta entre la posición inicial y la final. No siempre coinciden: si das una vuelta completa a una pista de atletismo de 400 m, has recorrido 400 m, pero tu desplazamiento es cero, porque terminas donde empezaste.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Camino curvo de casa al instituto: la distancia recorrida es la longitud del camino, 900 metros; el desplazamiento es la recta entre los dos puntos, 600 metros">${BG}
        <rect x="18" y="116" width="34" height="28" fill="#c26a3d"/><path d="M14 118 l 21 -18 l 21 18 Z" fill="var(--red)"/>${t(35, 162, "casa", { size: 10 })}
        <rect x="208" y="104" width="40" height="40" fill="var(--muted)"/><rect x="214" y="112" width="8" height="8" fill="var(--card)"/><rect x="232" y="112" width="8" height="8" fill="var(--card)"/>${t(228, 162, "instituto", { size: 10 })}
        <path d="M54 130 C 80 30, 140 20, 160 70 S 190 140, 206 128" stroke="var(--pen)" stroke-width="3" fill="none" stroke-dasharray="6 4"/>${t(124, 26, "distancia: 900 m", { size: 11, color: "var(--pen)" })}
        ${fl(54, 140, 204, 140, "var(--red)", 2.5)}${t(130, 174, "desplazamiento: 600 m", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La velocidad</h3><p>No todos los cuerpos se mueven igual de deprisa. La <mark>velocidad</mark> indica la rapidez con la que un cuerpo cambia de posición. La <b>velocidad media</b> es la distancia recorrida dividida entre el tiempo empleado: <b>v = d / t</b>. En el SI se mide en <b>metros por segundo (m/s)</b>, aunque en la vida diaria usamos mucho los kilómetros por hora (km/h). Para pasar de km/h a m/s se divide entre 3,6, y para pasar de m/s a km/h se multiplica por 3,6. Si un coche tarda 2 horas en recorrer 180 km, su velocidad media es de 90 km/h, aunque en algunos tramos haya ido a 120 y en otros haya estado parado en un semáforo. El velocímetro del coche marca la <b>velocidad instantánea</b>, la que lleva en cada momento.</p>${tabla(["Movimiento", "Velocidad aproximada"], [["Caracol", "0,001 m/s"], ["Persona andando", "1,4 m/s (5 km/h)"], ["Usain Bolt (récord de 100 m)", "10,4 m/s (37,6 km/h)"], ["Guepardo", "30 m/s (110 km/h)"], ["Tren AVE", "83 m/s (300 km/h)"], ["Sonido en el aire", "340 m/s"], ["Luz", "300 000 km/s"]])}`,
      video: { id: "qJOdLbMi5hU", titulo: "Calcular velocidad, distancia y tiempo [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 3009053 },
    },
    {
      html: `<h3>Calcular distancias y tiempos</h3><p>La fórmula de la velocidad se puede despejar para calcular cualquiera de las tres magnitudes. Si conocemos la velocidad y el tiempo, la <b>distancia</b> es <b>d = v · t</b>. Si conocemos la distancia y la velocidad, el <b>tiempo</b> es <b>t = d / v</b>. Un truco para recordarlo es el triángulo de la velocidad: se escribe d arriba y v y t abajo; tapando la magnitud que buscas, lo que queda te dice si hay que multiplicar o dividir. Antes de calcular, comprueba que las unidades sean <b>coherentes</b>: si la velocidad está en km/h, el tiempo debe ir en horas y la distancia saldrá en kilómetros; si la velocidad está en m/s, el tiempo debe ir en segundos y la distancia saldrá en metros. Mezclar minutos con km/h es uno de los errores más habituales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la velocidad: d arriba, v y t abajo; d igual a v por t, v igual a d entre t, t igual a d entre v">${BG}
        <path d="M70 20 L 128 140 L 12 140 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.5" stroke-linejoin="round"/><line x1="40" y1="90" x2="100" y2="90" stroke="var(--pen)" stroke-width="2"/><line x1="70" y1="90" x2="70" y2="140" stroke="var(--pen)" stroke-width="2"/>
        ${t(70, 76, "d", { size: 22, font: D })}${t(48, 126, "v", { size: 20, font: D })}${t(92, 126, "t", { size: 20, font: D })}
        ${t(196, 54, "d = v · t", { size: 15, color: "var(--red)" })}${t(196, 90, "v = d / t", { size: 15, color: "var(--red)" })}${t(196, 126, "t = d / v", { size: 15, color: "var(--red)" })}
        ${t(130, 168, "km/h con horas · m/s con segundos", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El movimiento rectilíneo uniforme (MRU)</h3><p>El movimiento más sencillo es el <mark>movimiento rectilíneo uniforme (MRU)</mark>: el cuerpo sigue una trayectoria <b>recta</b> con <b>velocidad constante</b>, es decir, recorre distancias iguales en tiempos iguales. Un ejemplo es un coche en una autopista recta con el control de crucero puesto, una escalera mecánica o una cinta transportadora. En un MRU, la posición en cada instante se calcula con la ecuación <b>x = x₀ + v · t</b>, donde x₀ es la posición inicial. Si el cuerpo sale del origen (x₀ = 0), la ecuación queda x = v · t. Por ejemplo, un ciclista que sale del kilómetro 10 de una carretera y avanza a 20 km/h estará en el kilómetro 10 + 20 · 2 = 50 al cabo de 2 horas.</p>`,
      video: { id: "XE9UXxtep6M", titulo: "MRU Movimiento Rectilíneo Uniforme: explicación, fórmulas y ejercicios", canal: "Susi Profe", vistas: 2375580 },
    },
    {
      html: `<h3>Gráficas posición-tiempo</h3><p>Los movimientos se pueden representar en una <mark>gráfica posición-tiempo</mark> (x-t), con el tiempo en el eje horizontal y la posición en el vertical. Si el cuerpo está <b>parado</b>, la gráfica es una <b>línea horizontal</b>: pasa el tiempo y la posición no cambia. Si se mueve con <b>MRU</b>, la gráfica es una <b>línea recta inclinada</b>. Cuanto más <b>inclinada</b> está la recta, mayor es la velocidad, porque recorre más metros en cada segundo. Si la recta baja, el cuerpo vuelve hacia el origen. La velocidad se puede calcular en la gráfica como la pendiente: lo que sube la recta entre lo que avanza. Si la gráfica es una curva, la velocidad está cambiando: el movimiento tiene aceleración.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica posición tiempo con tres tramos: recta inclinada, el cuerpo avanza; tramo horizontal, está parado; recta que baja, vuelve al origen">${BG}
        ${fl(36, 150, 246, 150, "var(--ink)", 2)}${fl(36, 156, 36, 14, "var(--ink)", 2)}${t(244, 168, "t (s)", { size: 10, anchor: "end" })}${t(42, 20, "x (m)", { size: 10, anchor: "start" })}
        <path d="M36 150 L 106 60 L 166 60 L 226 150" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${t(58, 92, "avanza", { size: 10, color: "var(--pen)", anchor: "end" })}${t(136, 52, "parado", { size: 10, color: "var(--pen)" })}${t(206, 92, "vuelve", { size: 10, color: "var(--pen)", anchor: "start" })}
        ${[0, 1, 2, 3].map((i) => `<line x1="${36 + i * 60}" y1="150" x2="${36 + i * 60}" y2="154" stroke="var(--ink)"/>`).join("")}</svg>`,
    },
    {
      html: `<h3>La aceleración</h3><p>En la mayoría de los movimientos la velocidad no es constante: el coche arranca, frena, toma curvas. La <mark>aceleración</mark> indica lo rápido que <b>cambia la velocidad</b>. Se calcula como el cambio de velocidad dividido entre el tiempo que tarda en producirse: <b>a = (v − v₀) / t</b>, donde v₀ es la velocidad inicial y v la final. Se mide en <b>metros por segundo al cuadrado (m/s²)</b>. Una aceleración de 2 m/s² significa que la velocidad aumenta 2 m/s cada segundo. Si la velocidad <b>aumenta</b>, la aceleración es positiva; si <b>disminuye</b>, el cuerpo frena y la aceleración es negativa (también se llama deceleración). Un coche deportivo puede pasar de 0 a 100 km/h en unos 3 segundos; un cuerpo que cae libremente aumenta su velocidad 9,8 m/s cada segundo.</p>`,
      video: { id: "XpfCaJw-0hc", titulo: "Velocidad, rapidez y aceleración: diferencias y ejemplos", canal: "LearnFree en Español", vistas: 250251 },
    },
    {
      html: `<h3>El movimiento uniformemente acelerado</h3><p>Cuando la aceleración es constante y la trayectoria es recta, el movimiento se llama <mark>rectilíneo uniformemente acelerado (MRUA)</mark>. La velocidad cambia la misma cantidad en cada segundo. Ejemplos son un coche que arranca en un semáforo pisando el acelerador siempre igual, una bola que rueda por una rampa o una piedra que cae al vacío. La velocidad en cada instante es <b>v = v₀ + a · t</b>. En una gráfica velocidad-tiempo, el MRU es una línea horizontal y el MRUA es una recta inclinada. En cambio, en la gráfica posición-tiempo el MRUA da una <b>curva</b>, una parábola, porque en cada segundo se recorre más distancia que en el anterior. Galileo estudió este movimiento dejando rodar bolas por planos inclinados y midiendo los tiempos con relojes de agua.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Coche que acelera: cada segundo recorre más distancia; marcas de su posición separadas cada vez más; la velocidad pasa de 0 a 2, 4 y 6 metros por segundo">${BG}
        <line x1="14" y1="120" x2="250" y2="120" stroke="var(--muted)" stroke-width="3"/>
        ${[[20, 0], [44, 2], [108, 4], [214, 6]].map(([x, v], i) => `<rect x="${x}" y="100" width="22" height="14" rx="4" fill="var(--red)" fill-opacity="${(0.3 + i * 0.22).toFixed(2)}"/><circle cx="${x + 5}" cy="116" r="4" fill="var(--ink)"/><circle cx="${x + 17}" cy="116" r="4" fill="var(--ink)"/>${t(x + 11, 144, `${i} s`, { size: 9, color: "var(--muted)" })}${t(x + 11, 92, `${v}`, { size: 10, color: "var(--pen)" })}`).join("")}
        ${t(130, 40, "a = 2 m/s²", { size: 15, color: "var(--leaf)" })}${t(130, 64, "velocidad (m/s) cada segundo", { size: 10, color: "var(--pen)" })}${t(130, 168, "cada segundo recorre más", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Velocidad y seguridad vial</h3><p>Lo que hemos aprendido tiene aplicaciones muy prácticas. Cuando un conductor ve un peligro, tarda casi un segundo en reaccionar: es el <b>tiempo de reacción</b>. Durante ese tiempo el coche sigue a la misma velocidad: a 90 km/h (25 m/s) recorre 25 metros sin frenar. Después, al frenar, necesita otros muchos metros para parar, más aún si el suelo está mojado. La <mark>distancia de detención</mark> es la suma de las dos y crece muchísimo con la velocidad: a 50 km/h son unos 25 m; a 120 km/h, más de 100 m. Por eso hay que respetar los <b>límites de velocidad</b> y la <b>distancia de seguridad</b> con el vehículo de delante. El móvil, el alcohol y el cansancio alargan el tiempo de reacción y multiplican el riesgo. Los radares de tramo miden la velocidad media entre dos puntos con v = d / t.</p>`,
    },
  ],
  figura: {
    titulo: "Describir un movimiento",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen: para describir un movimiento se elige un sistema de referencia; la velocidad es distancia entre tiempo; en el MRU es constante; la aceleración es el cambio de velocidad entre el tiempo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Referencia", "el movimiento", "es relativo", "var(--pen)"], ["Velocidad", "v = d / t", "m/s · km/h", "var(--red)"], ["MRU", "velocidad constante", "x = x₀ + v · t", "#b8860b"], ["Aceleración", "a = (v − v₀) / t", "m/s²", "var(--leaf)"]].map(([a, b, c, col], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="40" width="140" height="160" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 70, 82, a, { size: 16, color: col, font: D })}${t(x + 70, 128, b, { size: 13 })}${t(x + 70, 160, c, { size: 12, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "dKJLRk1VBOY", titulo: "Velocidad: concepto, fórmula y problemas", canal: "Susi Profe", vistas: 623770, megusta: 0, busqueda: "movimiento velocidad y aceleración" },
  ejemplos: [
    { enunciado: "Un autobús recorre 240 km en 3 horas. ¿Cuál es su velocidad media en km/h y en m/s?",
      pasos: ["v = d / t = 240 km / 3 h = 80 km/h.", "Para pasar a m/s se divide entre 3,6.", "80 / 3,6 ≈ 22,2 m/s."],
      resultado: "80 km/h ≈ 22,2 m/s." },
    { enunciado: "¿Cuánto tarda la luz del Sol en llegar a la Tierra? (distancia: 150 000 000 km; velocidad de la luz: 300 000 km/s)",
      pasos: ["t = d / v.", "t = 150 000 000 / 300 000 = 500 s.", "500 s = 8 min 20 s."],
      resultado: "Unos 8 minutos y 20 segundos." },
    { enunciado: "Una moto pasa de 10 m/s a 30 m/s en 5 s. ¿Cuál es su aceleración?",
      pasos: ["a = (v − v₀) / t.", "a = (30 − 10) / 5.", "a = 20 / 5 = 4 m/s²."],
      resultado: "4 m/s²." },
  ],
  errores: [
    "Olvidar el sistema de referencia: decir que algo está quieto sin indicar respecto a qué.",
    "Confundir distancia recorrida con desplazamiento: solo coinciden en línea recta sin volver atrás.",
    "Mezclar unidades: usar km/h con minutos o con segundos sin convertir.",
    "Pensar que un tramo horizontal en la gráfica x-t significa velocidad constante distinta de cero: significa que está parado.",
    "Creer que aceleración negativa siempre es ir hacia atrás: significa que la velocidad disminuye.",
  ],
  ejercicios: [
    { q: "Un niño va sentado en el coche de sus padres. ¿Está en reposo o en movimiento? Explícalo.", sol: "Depende del sistema de referencia: en reposo respecto al coche y en movimiento respecto a la carretera." },
    { q: "Clasifica las trayectorias: la caída de una manzana, la Tierra alrededor del Sol, una noria, un tiro libre de baloncesto.", sol: "Rectilínea, elíptica, circular y parabólica." },
    { q: "Das tres vueltas a una pista circular de 200 m y acabas en la salida. ¿Distancia recorrida y desplazamiento?", sol: "Distancia: 600 m. Desplazamiento: 0 m." },
    { q: "Pasa 72 km/h a m/s y 15 m/s a km/h.", sol: "72 / 3,6 = 20 m/s; 15 · 3,6 = 54 km/h." },
    { q: "Un atleta corre 400 m en 50 s. ¿Cuál es su velocidad media?", sol: "v = 400 / 50 = 8 m/s." },
    { q: "¿Qué distancia recorre en 2,5 h un coche que va a 100 km/h?", sol: "d = 100 · 2,5 = 250 km." },
    { q: "¿Cuánto tarda en recorrer 6 km una persona que anda a 1,5 m/s?", sol: "6 km = 6000 m; t = 6000 / 1,5 = 4000 s ≈ 1 h 7 min." },
    { q: "Un ciclista sale del km 5 y avanza a 18 km/h con MRU. ¿Dónde estará a las 2 h?", sol: "x = 5 + 18 · 2 = 41 km." },
    { q: "Un coche frena de 25 m/s a 0 en 5 s. Calcula su aceleración.", sol: "a = (0 − 25) / 5 = −5 m/s²: está frenando." },
    { q: "Dibuja la gráfica x-t de un perro que corre 20 m en 4 s, se para 3 s y vuelve al origen en 4 s.", sol: "Recta que sube de (0, 0) a (4, 20), tramo horizontal de (4, 20) a (7, 20) y recta que baja hasta (11, 0)." },
  ],
  quiz: [
    { q: "Para describir un movimiento hace falta un…", o: ["cronómetro", "sistema de referencia", "velocímetro"], a: 1, e: "Sistema de referencia." },
    { q: "La línea que describe un cuerpo al moverse es la…", o: ["trayectoria", "posición", "velocidad"], a: 0, e: "La trayectoria." },
    { q: "La unidad de velocidad en el SI es…", o: ["km/h", "m/s", "m/s²"], a: 1, e: "m/s." },
    { q: "36 km/h equivalen a…", o: ["10 m/s", "36 m/s", "129,6 m/s"], a: 0, e: "36 / 3,6 = 10." },
    { q: "Si v = 20 m/s y t = 10 s, la distancia es…", o: ["2 m", "30 m", "200 m"], a: 2, e: "d = v · t = 200 m." },
    { q: "En un MRU la velocidad es…", o: ["constante", "creciente", "cero"], a: 0, e: "Constante." },
    { q: "Una recta horizontal en una gráfica x-t indica que el cuerpo…", o: ["acelera", "está parado", "va muy rápido"], a: 1, e: "Está parado." },
    { q: "La aceleración se mide en…", o: ["m/s", "m/s²", "N"], a: 1, e: "m/s²." },
    { q: "Un coche que frena tiene aceleración…", o: ["positiva", "negativa", "nula"], a: 1, e: "Negativa." },
    { q: "En la gráfica x-t, el MRUA es…", o: ["una recta", "una curva", "una línea horizontal"], a: 1, e: "Una curva (parábola)." },
  ],
  examen: [
    { q: "Si un cuerpo pasa de 0 a 12 m/s en 4 s, su aceleración es…", o: ["3 m/s²", "48 m/s²", "8 m/s²"], a: 0, e: "12 / 4 = 3 m/s²." },
    { q: "Cuanto más inclinada es la recta en una gráfica x-t…", o: ["menor es la velocidad", "mayor es la velocidad", "más tiempo pasa"], a: 1, e: "Mayor velocidad." },
    { q: "La distancia de detención de un coche…", o: ["no depende de la velocidad", "crece mucho con la velocidad", "es siempre 25 m"], a: 1, e: "Crece mucho con la velocidad." },
  ],
  feynman: ["Por qué el movimiento es relativo", "Cómo se calculan la velocidad, la distancia y el tiempo en un MRU", "Qué es la aceleración y cómo se nota en una gráfica"],
  mapa: mapa("MOVIMIENTO", "var(--eso)", [
    ["Referencia", "reposo · movimiento relativo", "var(--pen)"],
    ["Trayectoria", "distancia · desplazamiento", "#b8860b"],
    ["Velocidad", "v = d / t · MRU · gráficas", "var(--red)"],
    ["Aceleración", "a = Δv / t · MRUA", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Sistema de referencia", "Punto que se considera fijo para describir un movimiento."],
    ["Trayectoria", "Línea que describe un cuerpo al moverse."],
    ["Desplazamiento", "Distancia en línea recta entre la posición inicial y la final."],
    ["Velocidad media", "v = d / t; se mide en m/s."],
    ["MRU", "Trayectoria recta con velocidad constante."],
    ["Gráfica x-t", "Posición frente a tiempo; más inclinación, más velocidad."],
    ["Aceleración", "Cambio de velocidad por unidad de tiempo; a = (v − v₀) / t."],
    ["km/h ↔ m/s", "Para pasar de km/h a m/s se divide entre 3,6."],
  ],
  familias: ["Medid con el móvil cuánto tardáis en recorrer 100 m andando y corriendo y calculad vuestra velocidad.", "En un viaje en coche, calculad la velocidad media con los kilómetros y el tiempo.", "Comentad juntos por qué hay que guardar la distancia de seguridad."],
  profesores: {
    saberes: "La interacción: movimiento, sistemas de referencia, velocidad, MRU, aceleración y gráficas, con aplicación a la seguridad vial (RD 217/2022, Física y Química, bloque «La interacción»).",
    ideas: ["Medida de velocidades en el patio con cintas métricas y cronómetros y elaboración de gráficas x-t.", "Planos inclinados con bolas para observar el MRUA, como Galileo.", "Análisis de distancias de detención con datos de la DGT."],
  },
  fuentes: [RD, wiki("Movimiento (física)", "Movimiento_(física)"), wiki("Movimiento rectilíneo uniforme", "Movimiento_rectilíneo_uniforme")],
  revisado: REV,
};
