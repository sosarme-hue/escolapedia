// Física y Química 2º ESO: el método científico y la medida. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "El método científico y la medida",
  minutos: 50,
  objetivos: ["Describir las etapas del método científico y aplicarlas a una pregunta sencilla", "Distinguir magnitudes fundamentales y derivadas y conocer sus unidades del SI", "Cambiar de unidades con factores de conversión y usar la notación científica", "Medir con precisión, anotar los datos en tablas y representarlos en gráficas"],
  claves: ["método científico", "hipótesis", "variable", "magnitud", "unidad", "Sistema Internacional", "factor de conversión", "notación científica"],
  pregunta: {
    texto: "Tu abuela dice que las plantas crecen más si les hablas. ¿Cómo podrías averiguar si es verdad sin fiarte solo de su palabra?",
    respuesta: "Con el <mark>método científico</mark>. Formulas una <b>hipótesis</b> («hablarles las hace crecer más»), preparas un <b>experimento</b> con dos grupos de plantas iguales, a uno le hablas y al otro no, y <b>mides</b> cuánto crecen. Solo cambias una cosa, la variable que quieres estudiar. Si después de varias semanas no hay diferencia clara, la hipótesis no se confirma.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la ciencia?</h3><p>La <mark>ciencia</mark> es una forma de conocer el mundo basada en la <b>observación</b>, la <b>experimentación</b> y el <b>razonamiento</b>. A diferencia de las opiniones o las creencias, sus conclusiones se pueden <b>comprobar</b>: cualquier persona que repita el experimento en las mismas condiciones debe obtener el mismo resultado. La <b>física</b> estudia los fenómenos en los que la materia no cambia de naturaleza, como el movimiento, la luz o el calor. La <b>química</b> estudia la composición de la materia y los cambios en los que unas sustancias se transforman en otras, como la combustión o la oxidación. Las dos usan el mismo procedimiento de trabajo: el método científico.</p>`,
    },
    {
      html: `<h3>Las etapas del método científico</h3><p>El <mark>método científico</mark> es un conjunto ordenado de pasos para investigar. Empieza con la <b>observación</b> de un fenómeno que despierta una <b>pregunta</b>: ¿por qué se oxida el clavo?, ¿cae antes una piedra que una pluma? Después se busca información y se plantea una <b>hipótesis</b>, una respuesta provisional que se pueda comprobar. Luego se diseña un <b>experimento</b> y se toman medidas. Con los datos se hace un <b>análisis</b> en tablas y gráficas y se sacan <b>conclusiones</b>. Si la hipótesis se confirma muchas veces, puede llegar a formar parte de una <b>ley</b> o una <b>teoría</b>. Si no, se rechaza y se plantea otra. Por último, los resultados se <b>comunican</b> para que otros los revisen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del método científico: observación, pregunta, hipótesis, experimento, análisis y conclusión; si la hipótesis no se confirma se vuelve a empezar">${BG}
        ${[["Observación", 18, 14], ["Pregunta", 140, 14], ["Hipótesis", 140, 62], ["Experimento", 140, 110], ["Análisis", 18, 110], ["Conclusión", 18, 62]].map(([s, x, y]) => caja(x, y, 102, 30, s, "var(--pen)", { size: 11 })).join("")}
        ${fl(120, 29, 138, 29)}${fl(191, 44, 191, 60)}${fl(191, 92, 191, 108)}${fl(140, 125, 122, 125)}${fl(69, 110, 69, 94)}
        <path d="M120 77 C 132 77, 130 77, 138 77" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3" fill="none"/>${t(130, 160, "si no se confirma, nueva hipótesis", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "dGnd9vF_s2A", titulo: "Ciencia Animada. Episodio 1. El Método Científico", canal: "Universitat de Barcelona", vistas: 2573891 },
    },
    {
      html: `<h3>Las variables de un experimento</h3><p>Para que un experimento sea fiable hay que controlar las <mark>variables</mark>, es decir, los factores que pueden cambiar. La <b>variable independiente</b> es la que el investigador cambia a propósito, por ejemplo la cantidad de agua que recibe una planta. La <b>variable dependiente</b> es la que se mide para ver cómo responde, por ejemplo la altura de la planta. Las <b>variables controladas</b> son todas las demás, que deben mantenerse iguales: el tipo de planta, la luz, la maceta, la tierra y la temperatura. Si cambiamos dos cosas a la vez, no sabremos cuál ha causado el efecto. Por eso se suele preparar un <b>grupo de control</b>, en el que no se cambia nada, para comparar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento con dos macetas iguales: una recibe 50 mililitros de agua al día y otra 100; se mide la altura; luz, tierra y tipo de planta son iguales">${BG}
        ${[[70, "50 mL", 40], [190, "100 mL", 64]].map(([x, s, h]) => `<path d="M${x - 26} 120 h 52 l -8 36 h -36 Z" fill="#c26a3d"/><path d="M${x} 120 v ${-h}" stroke="var(--leaf)" stroke-width="4"/><ellipse cx="${x - 10}" cy="${120 - h + 10}" rx="12" ry="6" fill="var(--leaf)"/><ellipse cx="${x + 10}" cy="${120 - h + 18}" rx="12" ry="6" fill="var(--leaf)"/>${t(x, 174, s, { size: 11, color: "var(--pen)" })}`).join("")}
        ${t(130, 20, "cambio: agua (independiente)", { size: 10, color: "var(--pen)" })}${t(130, 36, "mido: altura (dependiente)", { size: 10, color: "var(--red)" })}${t(130, 52, "igual: luz, tierra, planta", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Magnitudes y unidades</h3><p>Una <mark>magnitud</mark> es cualquier propiedad que se puede <b>medir</b> y expresar con un número y una unidad: la longitud, la masa, el tiempo, la temperatura. La belleza o la simpatía no son magnitudes, porque no se pueden medir de forma objetiva. <b>Medir</b> es comparar una magnitud con otra de la misma clase que se toma como referencia, la <mark>unidad</mark>. Decir que una mesa mide «2» no significa nada: hay que decir 2 metros. Antes, cada lugar usaba sus propias unidades (varas, palmos, leguas, arrobas) y eso causaba confusiones en el comercio. Para evitarlo, en 1960 se acordó el <b>Sistema Internacional de Unidades (SI)</b>, que hoy usan casi todos los países y toda la comunidad científica.</p>`,
    },
    {
      html: `<h3>Magnitudes fundamentales y derivadas</h3><p>El SI se apoya en siete <mark>magnitudes fundamentales</mark>, que se definen por sí mismas. Las <mark>magnitudes derivadas</mark> se obtienen combinando las fundamentales: la superficie es longitud por longitud (m²), el volumen es longitud al cubo (m³), la velocidad es longitud entre tiempo (m/s) y la densidad es masa entre volumen (kg/m³). Fíjate en que los símbolos de las unidades se escriben sin punto final y no cambian en plural: 5 kg, no «5 kgs.».</p>${tabla(["Magnitud fundamental", "Unidad SI", "Símbolo"], [["Longitud", "metro", "m"], ["Masa", "kilogramo", "kg"], ["Tiempo", "segundo", "s"], ["Temperatura", "kelvin", "K"], ["Intensidad de corriente", "amperio", "A"], ["Cantidad de sustancia", "mol", "mol"], ["Intensidad luminosa", "candela", "cd"]])}`,
      video: { id: "qFOTQ7yMtzk", titulo: "Magnitudes Físicas | Fundamentales y derivadas | Escalares y vectoriales", canal: "Scienza Educación", vistas: 793898 },
    },
    {
      html: `<h3>Múltiplos y submúltiplos</h3><p>Para medir cosas muy grandes o muy pequeñas se usan <mark>prefijos</mark> que multiplican la unidad por potencias de 10. Así, la distancia entre ciudades se da en <b>kilómetros</b> y el grosor de un cabello en <b>micrómetros</b>. En las capacidades también se usa el <b>litro</b> (L), que no es del SI pero se admite: 1 L = 1 dm³ y 1 mL = 1 cm³.</p>${tabla(["Prefijo", "Símbolo", "Factor", "Ejemplo"], [["giga", "G", "10⁹", "1 GB de memoria"], ["mega", "M", "10⁶", "1 MW de una central"], ["kilo", "k", "10³", "1 km = 1000 m"], ["centi", "c", "10⁻²", "1 cm = 0,01 m"], ["mili", "m", "10⁻³", "1 mm = 0,001 m"], ["micro", "µ", "10⁻⁶", "1 µm, una bacteria"], ["nano", "n", "10⁻⁹", "1 nm, una molécula"]])}`,
    },
    {
      html: `<h3>Cambiar de unidades: factores de conversión</h3><p>Para pasar de una unidad a otra se usan <mark>factores de conversión</mark>: fracciones que valen 1 porque el numerador y el denominador son la misma cantidad expresada en unidades distintas, como 1 km / 1000 m. Se multiplica la cantidad por el factor colocado de manera que la unidad que queremos quitar quede <b>una arriba y otra abajo</b> y se simplifique. Por ejemplo, 72 km/h a m/s: 72 km/h · (1000 m / 1 km) · (1 h / 3600 s) = 20 m/s. Este método evita errores porque las unidades «se tachan» como si fueran números, y si al final no queda la unidad buscada, sabemos que algo está mal colocado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Factor de conversión: 72 kilómetros por hora multiplicado por 1000 metros entre 1 kilómetro y por 1 hora entre 3600 segundos da 20 metros por segundo; los kilómetros y las horas se tachan">${BG}
        ${t(34, 70, "72 km", { size: 13 })}<line x1="10" y1="80" x2="58" y2="80" stroke="var(--ink)" stroke-width="2"/>${t(34, 98, "h", { size: 13 })}
        ${t(68, 84, "·", { size: 16 })}${t(108, 70, "1000 m", { size: 13 })}<line x1="80" y1="80" x2="136" y2="80" stroke="var(--ink)" stroke-width="2"/>${t(108, 98, "1 km", { size: 13 })}
        ${t(146, 84, "·", { size: 16 })}${t(180, 70, "1 h", { size: 13 })}<line x1="156" y1="80" x2="204" y2="80" stroke="var(--ink)" stroke-width="2"/>${t(180, 98, "3600 s", { size: 13 })}
        <path d="M30 64 l 18 -10 M100 102 l 18 -10 M28 102 l 12 -10 M172 64 l 14 -10" stroke="var(--red)" stroke-width="2"/>
        ${t(130, 140, "= 20 m/s", { size: 18, color: "var(--leaf)", font: D })}${t(130, 30, "las unidades se tachan", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La notación científica</h3><p>Escribir 150 000 000 000 m (la distancia de la Tierra al Sol) o 0,000 000 1 m es incómodo y fácil de equivocar. La <mark>notación científica</mark> expresa cualquier número como un número entre 1 y 10 multiplicado por una potencia de 10: <b>1,5 · 10¹¹ m</b> y <b>1 · 10⁻⁷ m</b>. Para números grandes, el exponente es <b>positivo</b> e indica cuántos lugares se ha movido la coma hacia la izquierda. Para números pequeños, el exponente es <b>negativo</b> e indica cuántos lugares se ha movido hacia la derecha. La masa de la Tierra es 5,97 · 10²⁴ kg y la de un electrón, 9,1 · 10⁻³¹ kg. Las calculadoras científicas muestran estos números con la tecla EXP o ×10ˣ.</p>`,
    },
    {
      html: `<h3>Instrumentos de medida y errores</h3><p>Cada magnitud se mide con un <b>instrumento</b>: la regla y el calibre para longitudes, la balanza para la masa, el cronómetro para el tiempo, el termómetro para la temperatura y la probeta para el volumen de líquidos. Todo instrumento tiene una <mark>sensibilidad</mark> o resolución, que es la menor variación que puede detectar: una regla escolar aprecia milímetros; un calibre, décimas de milímetro. Ninguna medida es exacta: siempre hay un <b>error</b>. Los errores <b>sistemáticos</b> se repiten siempre igual, como una balanza mal calibrada. Los <b>accidentales</b> son al azar, como el retraso al pulsar el cronómetro. Por eso conviene <b>repetir</b> la medida varias veces y calcular la <b>media</b>. Al leer una probeta, los ojos deben estar a la altura de la parte baja del menisco.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lectura correcta de una probeta: el ojo a la altura de la parte baja del menisco; mirar desde arriba o desde abajo da un error de paralaje">${BG}
        <rect x="110" y="20" width="40" height="140" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M112 90 Q 130 100 148 90 V 158 H 112 Z" fill="var(--pen)" fill-opacity=".35"/>
        ${[30, 50, 70, 90, 110, 130, 150].map((y) => `<line x1="140" y1="${y}" x2="150" y2="${y}" stroke="var(--ink)"/>`).join("")}
        <circle cx="40" cy="96" r="12" fill="#fff" stroke="var(--ink)" stroke-width="2"/><circle cx="44" cy="96" r="5" fill="var(--ink)"/>${fl(54, 96, 104, 96, "var(--leaf)", 2)}${t(40, 128, "bien", { size: 11, color: "var(--leaf)" })}
        ${fl(220, 40, 154, 90, "var(--red)", 1.5)}${fl(220, 150, 154, 100, "var(--red)", 1.5)}${t(222, 34, "mal", { size: 10, color: "var(--red)" })}${t(222, 166, "mal", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Tablas y gráficas</h3><p>Los datos de un experimento se ordenan en una <mark>tabla</mark> con una columna para cada variable, indicando la magnitud y la unidad en la cabecera. Después se representan en una <mark>gráfica</mark>: la variable independiente va en el eje horizontal (X) y la dependiente en el vertical (Y). Se elige una escala que aproveche el papel y se marcan los puntos. Si los puntos forman una <b>línea recta que pasa por el origen</b>, las magnitudes son <b>directamente proporcionales</b>: si una se duplica, la otra también. La gráfica permite ver tendencias de un vistazo y predecir valores que no se han medido, por ejemplo, cuánto se alargará un muelle con un peso que no hemos probado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de masa frente a volumen de agua: los puntos forman una recta que pasa por el origen, son magnitudes directamente proporcionales">${BG}
        ${fl(40, 150, 240, 150, "var(--ink)", 2)}${fl(40, 150, 40, 16, "var(--ink)", 2)}
        ${t(236, 168, "V (mL)", { size: 10, anchor: "end" })}${t(46, 20, "m (g)", { size: 10, anchor: "start" })}
        <path d="M40 150 L 220 34" stroke="var(--pen)" stroke-width="2"/>
        ${[[76, 127], [112, 104], [148, 81], [184, 57]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}
        ${t(150, 130, "recta por el origen:", { size: 10, color: "var(--muted)" })}${t(150, 144, "proporcionales", { size: 10, color: "var(--muted)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Del fenómeno a la ley",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Esquema del trabajo científico: observar, preguntar, suponer con una hipótesis, experimentar midiendo con unidades del SI, analizar con tablas y gráficas y concluir">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Observar", "y preguntar", "var(--pen)"], ["Hipótesis", "respuesta posible", "#b8860b"], ["Experimentar", "medir en el SI", "var(--red)"], ["Analizar", "tablas y gráficas", "var(--leaf)"], ["Concluir", "y comunicar", "#7b3fc4"]].map(([a, b, c], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="50" width="112" height="120" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 56, 100, a, { size: 15, color: c, font: D })}${t(x + 56, 130, b, { size: 11, weight: 400 })}${i < 4 ? fl(x + 112, 110, x + 124, 110, "var(--muted)", 2) : ""}`; }).join("")}
      ${t(320, 32, "El método científico", { size: 18, font: D })}</svg>`,
  },
  video: { id: "zzHu-yqdlz0", titulo: "Método Científico - BrainPOP Español", canal: "BrainPOP Español", vistas: 2956178, megusta: 31780, busqueda: "método científico pasos" },
  ejemplos: [
    { enunciado: "Expresa 2,5 km en metros y en centímetros.",
      pasos: ["1 km = 1000 m → 2,5 km · (1000 m / 1 km) = 2500 m.", "1 m = 100 cm → 2500 m · (100 cm / 1 m) = 250 000 cm.", "En notación científica: 2,5 · 10⁵ cm."],
      resultado: "2500 m = 250 000 cm." },
    { enunciado: "Pasa 90 km/h a m/s con factores de conversión.",
      pasos: ["Escribe 90 km/h y multiplica por (1000 m / 1 km) para quitar los km.", "Multiplica por (1 h / 3600 s) para quitar las horas.", "90 · 1000 / 3600 = 25."],
      resultado: "25 m/s." },
    { enunciado: "Cinco alumnos miden el tiempo de caída de una pelota: 1,32 s; 1,28 s; 1,35 s; 1,30 s y 1,25 s. ¿Qué valor das como resultado?",
      pasos: ["Suma: 1,32 + 1,28 + 1,35 + 1,30 + 1,25 = 6,50 s.", "Media: 6,50 / 5 = 1,30 s.", "Repetir y hacer la media reduce los errores accidentales."],
      resultado: "1,30 s." },
  ],
  errores: [
    "Confundir hipótesis con conclusión: la hipótesis es una suposición que aún hay que comprobar.",
    "Cambiar varias variables a la vez en un experimento: así no se sabe cuál causa el efecto.",
    "Escribir unidades en plural o con punto, como «5 kgs.»: lo correcto es 5 kg.",
    "Colocar mal el factor de conversión: la unidad que se quiere quitar debe quedar una arriba y otra abajo.",
    "En notación científica, poner el primer número fuera de 1 a 10, como 25 · 10³ en lugar de 2,5 · 10⁴.",
  ],
  ejercicios: [
    { q: "Ordena las etapas: conclusión, hipótesis, observación, experimentación, análisis de datos.", sol: "Observación → hipótesis → experimentación → análisis de datos → conclusión." },
    { q: "Indica cuáles son magnitudes: la longitud de un lápiz, la alegría, la temperatura del agua, el color favorito, el tiempo de una carrera.", sol: "Son magnitudes la longitud, la temperatura y el tiempo, porque se pueden medir con un número y una unidad." },
    { q: "En un experimento se estudia si la temperatura del agua influye en lo rápido que se disuelve el azúcar. Señala las variables independiente, dependiente y dos controladas.", sol: "Independiente: temperatura del agua. Dependiente: tiempo que tarda en disolverse. Controladas: cantidad de agua, cantidad y tipo de azúcar, si se remueve o no." },
    { q: "Escribe la unidad del SI y su símbolo para la masa, el tiempo y la temperatura.", sol: "Kilogramo (kg), segundo (s) y kelvin (K)." },
    { q: "Pasa 3500 g a kg y 0,75 L a mL.", sol: "3500 g · (1 kg / 1000 g) = 3,5 kg. 0,75 L · (1000 mL / 1 L) = 750 mL." },
    { q: "Pasa 20 m/s a km/h.", sol: "20 m/s · (1 km / 1000 m) · (3600 s / 1 h) = 72 km/h." },
    { q: "Escribe en notación científica: 340 000 m y 0,0045 kg.", sol: "3,4 · 10⁵ m y 4,5 · 10⁻³ kg." },
    { q: "Escribe en forma decimal: 6,2 · 10³ y 1,8 · 10⁻².", sol: "6200 y 0,018." },
    { q: "¿Qué sensibilidad tiene una regla graduada en milímetros? ¿Y un termómetro que marca de 0,5 en 0,5 °C?", sol: "1 mm y 0,5 °C." },
    { q: "Un muelle se alarga 2 cm con 1 N, 4 cm con 2 N y 6 cm con 3 N. ¿Cómo será la gráfica? ¿Cuánto se alargará con 5 N?", sol: "Una recta que pasa por el origen: alargamiento y fuerza son directamente proporcionales. Con 5 N se alargará 10 cm." },
  ],
  quiz: [
    { q: "Una respuesta provisional que se puede comprobar es…", o: ["una ley", "una hipótesis", "una conclusión"], a: 1, e: "La hipótesis." },
    { q: "La variable que el investigador cambia a propósito es la…", o: ["independiente", "dependiente", "controlada"], a: 0, e: "La independiente." },
    { q: "¿Cuál NO es una magnitud?", o: ["La masa", "La simpatía", "El volumen"], a: 1, e: "La simpatía no se puede medir objetivamente." },
    { q: "La unidad de masa en el SI es el…", o: ["gramo", "kilogramo", "newton"], a: 1, e: "El kilogramo." },
    { q: "La velocidad es una magnitud…", o: ["fundamental", "derivada", "sin unidad"], a: 1, e: "Derivada: longitud entre tiempo." },
    { q: "El prefijo «mili» equivale a…", o: ["10³", "10⁻²", "10⁻³"], a: 2, e: "Una milésima." },
    { q: "1 mL equivale a…", o: ["1 cm³", "1 dm³", "1 m³"], a: 0, e: "1 cm³." },
    { q: "36 km/h son…", o: ["10 m/s", "36 m/s", "100 m/s"], a: 0, e: "36 · 1000 / 3600 = 10 m/s." },
    { q: "0,0003 en notación científica es…", o: ["3 · 10⁴", "3 · 10⁻⁴", "0,3 · 10⁻³"], a: 1, e: "3 · 10⁻⁴." },
    { q: "Una balanza mal calibrada produce un error…", o: ["accidental", "sistemático", "nulo"], a: 1, e: "Sistemático: se repite siempre igual." },
  ],
  examen: [
    { q: "Si los puntos de una gráfica forman una recta por el origen, las magnitudes son…", o: ["inversamente proporcionales", "directamente proporcionales", "independientes"], a: 1, e: "Directamente proporcionales." },
    { q: "Para reducir los errores accidentales conviene…", o: ["medir una sola vez", "repetir y hacer la media", "cambiar de unidad"], a: 1, e: "Repetir y hacer la media." },
    { q: "¿Qué factor usarías para pasar horas a segundos?", o: ["1 h / 3600 s", "3600 s / 1 h", "60 s / 1 h"], a: 1, e: "3600 s / 1 h: las horas quedan abajo y se tachan." },
  ],
  feynman: ["Cómo diseñarías un experimento para comprobar una hipótesis, controlando las variables", "Qué es medir y por qué hace falta el Sistema Internacional", "Cómo se cambia de unidades con factores de conversión"],
  mapa: mapa("MÉTODO Y MEDIDA", "var(--eso)", [
    ["Método científico", "observar · hipótesis · experimentar", "var(--pen)"],
    ["Variables", "independiente · dependiente · controladas", "var(--red)"],
    ["Medida", "magnitud · unidad · SI · prefijos", "#b8860b"],
    ["Datos", "errores · tablas · gráficas", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Hipótesis", "Respuesta provisional a una pregunta que se puede comprobar con un experimento."],
    ["Variable independiente", "La que cambia el investigador a propósito."],
    ["Variable dependiente", "La que se mide para ver cómo responde."],
    ["Magnitud", "Propiedad que se puede medir y expresar con un número y una unidad."],
    ["SI", "Sistema Internacional de Unidades: metro, kilogramo, segundo, kelvin…"],
    ["Factor de conversión", "Fracción que vale 1 y sirve para cambiar de unidad."],
    ["Notación científica", "Número entre 1 y 10 por una potencia de 10."],
    ["Sensibilidad", "Menor variación que puede apreciar un instrumento."],
  ],
  familias: ["Medid en casa la altura de cada persona tres veces y calculad la media.", "Mirad etiquetas de alimentos y productos y buscad unidades del SI y prefijos (g, kg, mL, L, kcal).", "Plantead juntos una pregunta sencilla (¿se derrite antes el hielo con sal?) y diseñad un experimento controlando las variables."],
  profesores: {
    saberes: "Las destrezas científicas básicas: metodologías de la investigación científica, magnitudes y unidades del SI, notación científica, instrumentos de medida y representación de datos (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Mini investigación por grupos con una pregunta cotidiana y póster final con hipótesis, tabla y gráfica.", "Gincana de medidas en el patio con distintos instrumentos y cálculo de la media.", "Carrera de factores de conversión por parejas con tarjetas."],
  },
  fuentes: [RD, wiki("Método científico", "Método_científico"), wiki("Sistema Internacional de Unidades", "Sistema_Internacional_de_Unidades")],
  revisado: REV,
};
