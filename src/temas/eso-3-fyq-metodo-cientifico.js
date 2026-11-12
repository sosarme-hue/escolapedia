// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "El método científico",
  minutos: 55,
  objetivos: ["Describir las etapas del método científico y aplicarlas a un problema sencillo", "Distinguir magnitudes fundamentales y derivadas y usar las unidades del SI", "Expresar medidas con notación científica, cambios de unidades y cifras adecuadas", "Trabajar con seguridad en el laboratorio e interpretar tablas y gráficas"],
  claves: ["hipótesis", "variable", "magnitud", "unidad", "Sistema Internacional", "notación científica", "factor de conversión", "error"],
  pregunta: {
    texto: "En 1847 el médico Ignaz Semmelweis notó que en una sala de partos morían muchas más madres que en otra. ¿Cómo descubrió la causa sin saber nada de microbios?",
    respuesta: "Observó que en la sala peligrosa atendían médicos que venían de hacer autopsias. Propuso una <mark>hipótesis</mark>: llevaban «algo» de los cadáveres en las manos. La puso a prueba con un <mark>experimento</mark>: obligó a lavarse las manos con cloro, y las muertes bajaron de un 12 % a un 2 %. Eso es el método científico.",
  },
  bloques: [
    {
      html: `<h3>Qué es la ciencia</h3><p>La <b>ciencia</b> es una forma de conocer el mundo basada en la <b>observación</b>, la <b>medida</b> y la <b>comprobación</b>. Sus afirmaciones no se aceptan porque las diga una persona importante, sino porque cualquiera puede repetir los experimentos y obtener el mismo resultado. La <mark>física</mark> estudia los fenómenos en los que la materia no cambia de naturaleza, como el movimiento, la luz o la electricidad. La <mark>química</mark> estudia la composición de la materia y sus transformaciones, como la combustión o la oxidación. Ambas comparten un procedimiento de trabajo: el <b>método científico</b>.</p>`,
    },
    {
      html: `<h3>Las etapas del método científico</h3><p>El método científico es un proceso ordenado para responder preguntas sobre la naturaleza. Empieza con la <b>observación</b> de un fenómeno y el <b>planteamiento de un problema</b> en forma de pregunta. Después se formula una <mark>hipótesis</mark>, una posible explicación que se pueda comprobar. Se diseña un <b>experimento</b> para ponerla a prueba, se recogen y <b>analizan los datos</b> en tablas y gráficas y se sacan <b>conclusiones</b>. Si los datos no apoyan la hipótesis, se rechaza y se propone otra. Por último, los resultados se <b>comunican</b> para que otros científicos los revisen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del método científico: observación, pregunta, hipótesis, experimento, análisis de datos y conclusión; si la hipótesis falla, se vuelve a plantear otra">${BG}
        ${[["observación", 14, 14], ["pregunta", 136, 14], ["hipótesis", 136, 66], ["experimento", 136, 118], ["análisis", 14, 118], ["conclusión", 14, 66]].map(([n, x, y], i) => caja(x, y, 110, 34, n, ["var(--pen)", "var(--pen)", "var(--leaf)", "#b8860b", "#b8860b", "var(--red)"][i], { size: 12 })).join("")}
        ${fl(124, 31, 134, 31)}${fl(191, 48, 191, 64)}${fl(191, 100, 191, 116)}${fl(136, 135, 126, 135)}${fl(69, 118, 69, 102)}
        ${fl(124, 76, 134, 80, "var(--red)", 2)}${t(130, 170, "si falla, nueva hipótesis", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "zMYRU4S_RSk", titulo: "MÉTODO CIENTÍFICO [6 PASOS]", canal: "A Cierta Ciencia", vistas: 1235446 },
    },
    {
      html: `<h3>Hipótesis y variables</h3><p>Una buena hipótesis debe poder <b>comprobarse</b>. «El azúcar se disuelve antes en agua caliente» es comprobable; «el azúcar es feliz en el agua» no lo es. Para comprobarla se identifican las <b>variables</b>, las magnitudes que pueden cambiar. La <mark>variable independiente</mark> es la que el investigador cambia a voluntad (la temperatura del agua). La <mark>variable dependiente</mark> es la que se mide para ver cómo responde (el tiempo que tarda en disolverse). Las <b>variables controladas</b> se mantienen iguales en todas las pruebas (la cantidad de agua y de azúcar, el tipo de azúcar, la forma de remover) para que el resultado sea justo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres vasos con agua a 20, 50 y 80 grados: la temperatura es la variable independiente, el tiempo de disolución la dependiente y la cantidad de agua y azúcar se controla">${BG}
        ${[[40, "20 °C", "90 s"], [130, "50 °C", "40 s"], [220, "80 °C", "15 s"]].map(([x, tt, s], i) => `<path d="M${x - 26} 60 V 120 Q ${x - 26} 130 ${x - 16} 130 H ${x + 16} Q ${x + 26} 130 ${x + 26} 120 V 60" fill="var(--water)" fill-opacity="${0.25 + i * 0.15}" stroke="var(--muted)" stroke-width="2"/>${t(x, 48, tt, { size: 12, color: "var(--red)" })}${t(x, 150, s, { size: 12, color: "var(--pen)" })}`).join("")}
        ${t(130, 22, "cambio: temperatura", { size: 11, color: "var(--red)" })}${t(130, 170, "mido: tiempo · fijo: 200 mL y 10 g", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Magnitudes y unidades</h3><p>Una <b>magnitud</b> es toda propiedad que se puede <mark>medir</mark> y expresar con un número y una unidad, como la longitud, la masa o la temperatura. La belleza o el miedo no son magnitudes. <b>Medir</b> es comparar una magnitud con otra de la misma clase que se toma como patrón, la <b>unidad</b>. Una medida siempre lleva número y unidad: decir «la mesa mide 2» no tiene sentido; hay que decir «2 m». Las <b>magnitudes fundamentales</b> se definen por sí mismas y las <b>derivadas</b> se obtienen a partir de ellas: la superficie (m²), el volumen (m³), la velocidad (m/s) o la densidad (kg/m³).</p>`,
    },
    {
      html: `<h3>El Sistema Internacional de Unidades</h3><p>Para que todos los científicos se entiendan, en 1960 se acordó el <mark>Sistema Internacional (SI)</mark>, que usan casi todos los países del mundo. Fija siete magnitudes fundamentales con sus unidades. Desde 2019, todas se definen a partir de constantes de la naturaleza, como la velocidad de la luz, y no de objetos que pueden cambiar, como el antiguo kilogramo patrón guardado en París.</p>${tabla(["Magnitud", "Unidad", "Símbolo"], [["Longitud", "metro", "m"], ["Masa", "kilogramo", "kg"], ["Tiempo", "segundo", "s"], ["Temperatura", "kelvin", "K"], ["Intensidad de corriente", "amperio", "A"], ["Cantidad de sustancia", "mol", "mol"], ["Intensidad luminosa", "candela", "cd"]])}`,
    },
    {
      html: `<h3>Múltiplos, submúltiplos y notación científica</h3><p>Para medir cosas muy grandes o muy pequeñas se usan <b>prefijos</b>: kilo (k) = 10³, mega (M) = 10⁶, giga (G) = 10⁹; centi (c) = 10⁻², mili (m) = 10⁻³, micro (µ) = 10⁻⁶, nano (n) = 10⁻⁹. La <mark>notación científica</mark> escribe un número como un factor entre 1 y 10 multiplicado por una potencia de 10. La distancia Tierra-Sol, 150.000.000.000 m, se escribe <b>1,5 · 10¹¹ m</b>. El diámetro de un glóbulo rojo, 0,000007 m, es <b>7 · 10⁻⁶ m</b>. Si la coma se mueve a la izquierda, el exponente es positivo; si se mueve a la derecha, negativo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de prefijos: kilo, hecto, deca, unidad, deci, centi, mili; bajar un escalón multiplica por 10 y subir divide entre 10">${BG}
        ${["km", "hm", "dam", "m", "dm", "cm", "mm"].map((u, i) => `<rect x="${14 + i * 32}" y="${26 + i * 20}" width="32" height="${154 - 26 - i * 20}" fill="var(--pen)" fill-opacity="${0.08 + i * 0.03}" stroke="var(--pen)" stroke-width="1.5"/>${t(30 + i * 32, 42 + i * 20, u, { size: 11, color: "var(--pen)" })}`).join("")}
        ${fl(150, 52, 196, 80, "var(--leaf)", 2)}${t(244, 22, "baja: × 10", { size: 11, anchor: "end", color: "var(--leaf)" })}
        ${t(244, 38, "sube: ÷ 10", { size: 11, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Los factores de conversión</h3><p>Para cambiar de unidad se usan <mark>factores de conversión</mark>: fracciones que valen 1 porque el numerador y el denominador son la misma cantidad expresada en unidades distintas, como <b>1 km / 1000 m</b> o <b>1 h / 3600 s</b>. Se multiplica la cantidad por el factor colocado de forma que la unidad que queremos eliminar quede arriba y abajo, y se tache. Por ejemplo: <b>72 km/h · (1000 m / 1 km) · (1 h / 3600 s) = 20 m/s</b>. Con este método se pueden encadenar varios cambios en una sola operación y es difícil equivocarse.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paso de 72 kilómetros por hora a metros por segundo con dos factores de conversión; los kilómetros y las horas se tachan">${BG}
        ${t(40, 70, "72 km", { size: 13 })}<line x1="18" y1="80" x2="62" y2="80" stroke="var(--ink)" stroke-width="1.5"/>${t(40, 98, "h", { size: 13 })}
        ${t(72, 86, "·", { size: 16 })}${t(108, 70, "1000 m", { size: 13 })}<line x1="82" y1="80" x2="134" y2="80" stroke="var(--ink)" stroke-width="1.5"/>${t(108, 98, "1 km", { size: 13 })}
        ${t(144, 86, "·", { size: 16 })}${t(178, 70, "1 h", { size: 13 })}<line x1="154" y1="80" x2="202" y2="80" stroke="var(--ink)" stroke-width="1.5"/>${t(178, 98, "3600 s", { size: 13 })}
        <line x1="44" y1="74" x2="62" y2="58" stroke="var(--red)" stroke-width="2"/><line x1="100" y1="102" x2="128" y2="86" stroke="var(--red)" stroke-width="2"/><line x1="32" y1="102" x2="48" y2="86" stroke="var(--red)" stroke-width="2"/><line x1="168" y1="74" x2="188" y2="58" stroke="var(--red)" stroke-width="2"/>
        ${t(130, 140, "= 20 m/s", { size: 16, color: "var(--leaf)" })}${t(130, 26, "lo que sobra arriba se tacha abajo", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La medida y sus errores</h3><p>Ninguna medida es perfecta. Los <b>instrumentos</b> tienen una <b>sensibilidad</b>, la menor cantidad que pueden apreciar: una regla escolar aprecia 1 mm. Hay dos tipos de errores. Los <b>errores sistemáticos</b> se repiten siempre en el mismo sentido, por un instrumento mal calibrado o un mal método, como mirar la probeta desde arriba. Los <b>errores aleatorios</b> se deben al azar y cambian en cada medida; se reducen <mark>repitiendo la medida varias veces y calculando la media</mark>. El <b>error absoluto</b> es la diferencia entre el valor medido y el real; el <b>error relativo</b>, ese error dividido entre el valor real, indica la calidad de la medida, y suele darse en porcentaje.</p>`,
    },
    {
      html: `<h3>Tablas y gráficas</h3><p>Los datos de un experimento se ordenan en <b>tablas</b>, con la variable independiente en la primera columna y las unidades en la cabecera. Después se representan en una <mark>gráfica</mark>: la variable independiente en el eje horizontal (X) y la dependiente en el vertical (Y), con escalas adecuadas y nombre y unidad en cada eje. La forma de la gráfica revela la relación entre las variables. Si los puntos forman una <b>recta que pasa por el origen</b>, las magnitudes son <b>directamente proporcionales</b>: al doblar una, se dobla la otra. Si forman una curva que baja, como una hipérbola, pueden ser <b>inversamente proporcionales</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica masa frente a volumen de agua: los puntos forman una recta que pasa por el origen, relación directamente proporcional">${BG}
        <path d="M44 20 V 150 H 240" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${t(240, 168, "volumen (mL)", { size: 10, anchor: "end", color: "var(--muted)" })}${t(48, 16, "masa (g)", { size: 10, anchor: "start", color: "var(--muted)" })}
        <line x1="44" y1="150" x2="230" y2="36" stroke="var(--pen)" stroke-width="2.5"/>
        ${[[80, 128], [118, 105], [155, 82], [192, 59], [224, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="var(--red)"/>`).join("")}
        ${t(150, 130, "recta por el origen:", { size: 10, anchor: "start" })}${t(150, 143, "proporcional", { size: 10, anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>El laboratorio y la seguridad</h3><p>En el laboratorio se usan materiales como el <b>vaso de precipitados</b>, el <b>matraz Erlenmeyer</b>, la <b>probeta</b> para medir volúmenes, la <b>pipeta</b> para volúmenes pequeños y precisos, el <b>embudo</b>, la <b>balanza</b> y el <b>mechero Bunsen</b>. Las normas de seguridad son obligatorias: usar <mark>bata y gafas</mark>, recogerse el pelo, no comer ni beber, no oler ni probar los productos, calentar los tubos sin apuntar a nadie y tirar los residuos donde indique el profesor. Los envases llevan <b>pictogramas de peligro</b> con forma de rombo rojo: inflamable, corrosivo, tóxico, irritante o peligroso para el medio ambiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Material de laboratorio: vaso de precipitados, matraz Erlenmeyer, probeta y un pictograma de peligro en forma de rombo rojo">${BG}
        <path d="M24 60 V 140 H 74 V 60" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>${t(49, 160, "vaso", { size: 10 })}
        <path d="M106 50 H 118 V 80 L 140 140 H 84 L 106 80 Z" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>${t(112, 160, "Erlenmeyer", { size: 10 })}
        <path d="M164 30 V 136 H 156 V 142 H 184 V 136 H 176 V 30" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>${[50, 70, 90, 110].map(y => `<line x1="164" y1="${y}" x2="170" y2="${y}" stroke="var(--ink)"/>`).join("")}${t(170, 160, "probeta", { size: 10 })}
        <rect x="208" y="60" width="32" height="32" transform="rotate(45 224 76)" fill="#fff" stroke="var(--red)" stroke-width="3"/>${t(224, 82, "!", { size: 18, color: "var(--ink)" })}${t(224, 128, "peligro", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Teorías, leyes y ciencia en la sociedad</h3><p>Cuando una hipótesis se confirma muchas veces se convierte en una <b>ley</b>, que describe con precisión cómo se comporta la naturaleza, a menudo con una fórmula, como la ley de Boyle de los gases. Una <mark>teoría</mark> explica por qué ocurren muchos fenómenos relacionados, como la teoría cinética o la teoría atómica. En ciencia, «teoría» no significa «suposición»: es una explicación muy comprobada, aunque siempre puede corregirse si aparecen datos nuevos. La ciencia y la tecnología han traído vacunas, electricidad e internet, pero también problemas como la contaminación. Por eso hace falta una ciudadanía capaz de <b>distinguir información científica de bulos</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Del problema a la conclusión",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Las seis etapas del método científico en fila: observar, preguntar, hipótesis, experimentar, analizar y concluir, con una flecha de vuelta a la hipótesis si se rechaza">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${["observar", "preguntar", "hipótesis", "experimentar", "analizar", "concluir"].map((n, i) => caja(14 + i * 104, 70, 98, 46, n, ["var(--pen)", "var(--pen)", "var(--leaf)", "#b8860b", "#b8860b", "var(--red)"][i], { size: 13 })).join("")}
      ${[0, 1, 2, 3, 4].map(i => fl(112 + i * 104, 93, 118 + i * 104, 93)).join("")}
      <path d="M582 118 V 170 H 270 V 122" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 4"/>${fl(270, 140, 270, 120, "var(--red)", 2.5)}
      ${t(426, 194, "si los datos no la apoyan, se propone otra hipótesis", { size: 13, color: "var(--red)" })}
      ${t(320, 40, "comunicar los resultados para que otros los comprueben", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "2q3XeWtdlfY", titulo: "El método científico explicado con ejemplos", canal: "Profe Marilin", vistas: 989233, megusta: 0, busqueda: "el método científico explicación" },
  ejemplos: [
    { enunciado: "Expresa en notación científica: a) 340.000 m; b) 0,00052 kg.",
      pasos: ["a) Movemos la coma 5 lugares a la izquierda hasta dejar una cifra entera: 3,4.", "Como la movimos a la izquierda, el exponente es +5.", "b) Movemos la coma 4 lugares a la derecha: 5,2; el exponente es −4."],
      resultado: "a) 3,4 · 10⁵ m; b) 5,2 · 10⁻⁴ kg." },
    { enunciado: "Pasa 2,5 h a segundos y 15 m/s a km/h.",
      pasos: ["2,5 h · (3600 s / 1 h) = 9000 s.", "15 m/s · (1 km / 1000 m) · (3600 s / 1 h).", "15 · 3600 / 1000 = 54."],
      resultado: "9000 s y 54 km/h." },
    { enunciado: "Mides el largo de un libro cuatro veces: 24,1 cm, 24,3 cm, 24,2 cm y 24,2 cm. ¿Qué valor das?",
      pasos: ["Sumamos las medidas: 24,1 + 24,3 + 24,2 + 24,2 = 96,8 cm.", "Dividimos entre 4: 96,8 / 4 = 24,2 cm.", "La media reduce el efecto de los errores aleatorios."],
      resultado: "24,2 cm." },
  ],
  errores: [
    "Escribir una medida sin unidad: «mide 5» no dice nada.",
    "Confundir la variable independiente (la que cambio) con la dependiente (la que mido).",
    "Escribir mal los símbolos: «Kg», «KM» o «seg»; lo correcto es kg, km y s.",
    "Poner el factor de conversión al revés, de forma que las unidades no se tachan.",
    "Pensar que una teoría científica es solo una opinión sin pruebas.",
  ],
  ejercicios: [
    { q: "Ordena las etapas del método científico.", sol: "Observación, planteamiento del problema, hipótesis, experimentación, análisis de datos, conclusiones y comunicación." },
    { q: "Queremos saber si la luz influye en el crecimiento de una planta. Indica la variable independiente, la dependiente y dos controladas.", sol: "Independiente: la cantidad de luz. Dependiente: la altura de la planta. Controladas: el agua, el tipo de planta, la tierra o la temperatura." },
    { q: "¿Cuáles de estas son magnitudes: la masa, la simpatía, la temperatura, el color favorito, el volumen?", sol: "La masa, la temperatura y el volumen." },
    { q: "Escribe la unidad del SI y su símbolo para la masa, el tiempo, la longitud y la temperatura.", sol: "Kilogramo (kg), segundo (s), metro (m) y kelvin (K)." },
    { q: "Expresa en notación científica: 6.000.000; 0,0003; 45.000.", sol: "6 · 10⁶; 3 · 10⁻⁴; 4,5 · 10⁴." },
    { q: "Pasa 3,2 km a cm y 450 g a kg.", sol: "3,2 km = 320.000 cm = 3,2 · 10⁵ cm; 450 g = 0,45 kg." },
    { q: "Convierte 108 km/h a m/s.", sol: "108 · 1000 / 3600 = 30 m/s." },
    { q: "Una pieza mide en realidad 50,0 cm y tú obtienes 49,5 cm. Calcula el error absoluto y el relativo.", sol: "Error absoluto: 0,5 cm. Error relativo: 0,5 / 50 = 0,01, es decir, un 1 %." },
    { q: "En una gráfica masa-volumen los puntos forman una recta que pasa por el origen. ¿Qué relación hay entre las magnitudes?", sol: "Son directamente proporcionales: al doblar el volumen se dobla la masa." },
    { q: "Escribe cuatro normas de seguridad del laboratorio.", sol: "Usar bata y gafas, recogerse el pelo, no comer ni beber, no oler ni probar productos y seguir las indicaciones del profesor." },
  ],
  quiz: [
    { q: "Una hipótesis es…", o: ["una conclusión segura", "una explicación que se puede comprobar", "una opinión"], a: 1, e: "Una explicación comprobable." },
    { q: "La variable que el investigador cambia es la…", o: ["dependiente", "independiente", "controlada"], a: 1, e: "La independiente." },
    { q: "La unidad de masa en el SI es…", o: ["el gramo", "el kilogramo", "la tonelada"], a: 1, e: "El kilogramo." },
    { q: "La unidad de temperatura del SI es…", o: ["el grado Celsius", "el kelvin", "el grado Fahrenheit"], a: 1, e: "El kelvin." },
    { q: "0,004 en notación científica es…", o: ["4 · 10³", "4 · 10⁻³", "0,4 · 10⁻²"], a: 1, e: "4 · 10⁻³." },
    { q: "El prefijo mili significa…", o: ["10³", "10⁻³", "10⁻⁶"], a: 1, e: "Una milésima." },
    { q: "36 km/h son…", o: ["10 m/s", "36 m/s", "100 m/s"], a: 0, e: "36 / 3,6 = 10 m/s." },
    { q: "Para reducir errores aleatorios hay que…", o: ["medir una vez con cuidado", "repetir y hacer la media", "cambiar de unidad"], a: 1, e: "Repetir y hacer la media." },
    { q: "La velocidad es una magnitud…", o: ["fundamental", "derivada", "que no tiene unidad"], a: 1, e: "Derivada: m/s." },
    { q: "Para medir un volumen de líquido se usa…", o: ["la probeta", "la balanza", "el mechero"], a: 0, e: "La probeta." },
  ],
  examen: [
    { q: "En una gráfica, la variable independiente va en…", o: ["el eje X", "el eje Y", "la leyenda"], a: 0, e: "El eje horizontal." },
    { q: "1,5 · 10² equivale a…", o: ["15", "150", "1500"], a: 1, e: "150." },
    { q: "Una ley científica…", o: ["describe un fenómeno con precisión", "es una suposición", "no se puede comprobar"], a: 0, e: "Describe, a menudo con una fórmula." },
  ],
  feynman: ["Cómo se pone a prueba una hipótesis con un experimento justo", "Para qué sirven el Sistema Internacional y la notación científica", "Cómo se cambia de unidades con factores de conversión"],
  mapa: mapa("MÉTODO CIENTÍFICO", "var(--eso)", [
    ["Etapas", "observar · hipótesis · experimentar · concluir", "var(--pen)"],
    ["Variables", "independiente · dependiente · controladas", "var(--leaf)"],
    ["Medida", "magnitud · unidad · SI · error", "#b8860b"],
    ["Herramientas", "notación científica · factores", "var(--red)"],
  ], 300),
  tarjetas: [
    ["Hipótesis", "Explicación provisional que se puede comprobar."],
    ["Variable independiente", "La que el investigador cambia."],
    ["Variable dependiente", "La que se mide como respuesta."],
    ["Magnitud", "Propiedad que se puede medir."],
    ["SI", "Sistema Internacional: m, kg, s, K, A, mol, cd."],
    ["Notación científica", "a · 10ⁿ con a entre 1 y 10."],
    ["Factor de conversión", "Fracción que vale 1 para cambiar de unidad."],
    ["Error relativo", "Error absoluto dividido entre el valor real."],
  ],
  familias: ["Haced en casa un experimento justo: ¿se derrite antes el hielo con sal o sin sal? Anotad las variables.", "Buscad en la cocina envases con unidades y pasadlas a otras (g a kg, mL a L).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Las destrezas científicas básicas: metodologías de la investigación científica, trabajo de laboratorio, magnitudes, unidades del SI, notación científica y análisis de datos (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Diseñar un experimento sobre la velocidad de disolución identificando las variables.", "Medir el péndulo diez veces y comparar con una sola medida para hablar de errores.", "Carrera de conversiones de unidades por equipos con factores de conversión."],
  },
  fuentes: [RD, wiki("Método científico", "M%C3%A9todo_cient%C3%ADfico"), wiki("Sistema Internacional de Unidades", "Sistema_Internacional_de_Unidades")],
  revisado: "2026-11-12",
};
