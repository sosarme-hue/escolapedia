// Ciencias Generales 2º Bachillerato · La ciencia y sus métodos de investigación (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, graf, cadena, arbol } = require("./_bach2-cg");

// Ciclo de la investigación científica.
const cicloSVG = L6.ciclo("El ciclo de la investigación científica: observación, pregunta, hipótesis, experimento, análisis y conclusión, que lleva a nuevas preguntas", "Método", ["Observar", "Preguntar", "Hipótesis", "Experimentar", "Analizar", "Concluir"], "var(--pen)");

// Gráfica de un experimento con su recta de ajuste.
const ajusteSVG = marco("Datos experimentales con barras de error y recta de ajuste: el alargamiento de un muelle crece en proporción a la masa colgada", `
  <path d="M40 30 V 145 H 248" fill="none" stroke="var(--muted)" stroke-width="2"/>
  ${T(246, 163, "masa (g)", { fs: 11, a: "end", c: "var(--muted)" })}${T(36, 22, "alargamiento (cm)", { fs: 11, a: "start", c: "var(--muted)" })}
  <path d="M40 140 L 236 40" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 4"/>
  ${[[70, 124], [100, 110], [130, 92], [160, 80], [190, 62], [220, 50]].map(([x, y]) => `<path d="M${x} ${y - 8} V ${y + 8} M${x - 4} ${y - 8} H ${x + 4} M${x - 4} ${y + 8} H ${x + 4}" stroke="var(--pen)" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="4.5" fill="var(--pen)"/>`).join("")}
  ${T(196, 108, "y = 0,51·x", { fs: 12, b: true, c: "var(--red)" })}${T(196, 124, "r² = 0,99", { fs: 11, c: "var(--muted)" })}`);

// Variables de un experimento.
const variablesSVG = cadena("Variables de un experimento: la independiente se cambia, la dependiente se mide y las controladas se mantienen fijas", [["Independiente: lo que cambio", "var(--pen)"], ["Dependiente: lo que mido", "var(--red)"], ["Controladas: lo que fijo", "var(--leaf)"]], ["afecta a", "sin tocar"], "Diseño de un experimento");

// Precisión y exactitud (dianas).
const dianaSVG = marco("Exactitud y precisión: medidas exactas y precisas, precisas pero no exactas, exactas pero poco precisas, y ni lo uno ni lo otro", `
  ${[[38, "exacta y", "precisa", [[0, 0], [3, -2], [-2, 3], [2, 2]]], [101, "precisa,", "no exacta", [[18, -16], [21, -18], [16, -13], [20, -14]]], [164, "exacta,", "poco precisa", [[-14, 10], [12, -12], [-10, -14], [13, 12]]], [227, "ni exacta", "ni precisa", [[-20, 14], [16, 20], [22, -6], [-6, -22]]]].map(([cx, a, b, pts]) => `
  <circle cx="${cx}" cy="78" r="28" fill="var(--card)" stroke="var(--pen)" stroke-width="1.6"/><circle cx="${cx}" cy="78" r="18" fill="none" stroke="var(--pen)" stroke-width="1.4"/><circle cx="${cx}" cy="78" r="7" fill="var(--red)" fill-opacity=".35" stroke="var(--red)"/>
  ${pts.map(([dx, dy]) => `<circle cx="${cx + dx * 0.9}" cy="${78 + dy * 0.9}" r="3" fill="var(--ink)"/>`).join("")}
  ${T(cx, 126, a, { fs: 10.5, b: true })}${T(cx, 140, b, { fs: 10.5, b: true })}`).join("")}
  ${T(130, 24, "Exactitud ≠ precisión", { fs: 13, b: true, c: "var(--pen)" })}${T(130, 166, "exactitud: cerca del valor real · precisión: medidas agrupadas", { fs: 9.5, c: "var(--muted)" })}`);

// Revisión por pares.
const paresSVG = L5.pasos("Camino de un artículo científico desde la investigación hasta la publicación con revisión por pares", ["Investigación y artículo", "Envío a una revista", "Revisión por expertos anónimos", "Correcciones o rechazo", "Publicación y réplica"], "var(--pen)");

module.exports = tema({
  titulo: "La ciencia y sus métodos de investigación",
  minutos: 110,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar qué es la ciencia, en qué se diferencia de otras formas de conocimiento y cuáles son sus características",
    "Aplicar las etapas del trabajo científico a un problema real: pregunta, hipótesis, diseño experimental, análisis y conclusión",
    "Identificar las variables independiente, dependiente y controladas y diseñar experimentos con grupo de control",
    "Expresar medidas con unidades del SI, notación científica, cifras significativas y su incertidumbre",
    "Representar e interpretar datos en tablas y gráficas, distinguiendo correlación y causalidad",
    "Valorar la comunicación científica, la revisión por pares y la ética, y detectar pseudociencias y bulos",
  ],
  claves: ["ciencia", "método científico", "hipótesis", "variable independiente", "variable dependiente", "grupo de control", "ley", "teoría", "modelo", "magnitud", "notación científica", "cifras significativas", "incertidumbre", "correlación", "revisión por pares", "pseudociencia"],
  pregunta: {
    texto: "Si una teoría científica «solo es una teoría», ¿por qué nos fiamos de ella para construir aviones o fabricar vacunas?",
    respuesta: "Porque en ciencia una <mark>teoría</mark> no es una suposición, sino una explicación amplia que ha superado muchísimas pruebas experimentales y permite hacer <b>predicciones</b> que se cumplen. La teoría de la gravitación o la teoría microbiana de la enfermedad se han comprobado millones de veces. Aun así, la ciencia es <b>provisional</b>: si apareciera una prueba sólida en contra, la teoría se corregiría. Esa capacidad de corregirse es precisamente lo que la hace fiable.",
  },
  lectura: {
    titulo: "Semmelweis y las manos que mataban",
    html: `<p>En 1847, en el Hospital General de Viena, el médico húngaro Ignaz Semmelweis estaba obsesionado con una pregunta. En la sala de partos atendida por médicos y estudiantes moría por fiebre puerperal casi una de cada diez madres; en la sala atendida por comadronas, muchas menos. Las dos salas estaban en el mismo edificio y recibían mujeres parecidas. ¿Qué las diferenciaba?</p><p>Semmelweis fue descartando explicaciones: el aire, la vergüenza de las pacientes, la postura en el parto. La pista llegó con una tragedia: un colega se cortó con un bisturí durante una autopsia y murió con los mismos síntomas. Semmelweis formuló una hipótesis: los médicos, que pasaban de las autopsias al paritorio sin lavarse, transportaban «partículas cadavéricas». Ordenó lavarse las manos con cal clorada y la mortalidad cayó por debajo del 2 %. Sin embargo, muchos colegas lo ridiculizaron, porque su idea chocaba con las creencias de la época. Hubo que esperar a Pasteur y a Koch para que la teoría microbiana diera la razón a Semmelweis. Su historia resume este tema: observar, preguntar, probar, medir y comunicar, y aceptar lo que dicen los datos aunque incomode.</p>`,
  },
  bloques: [
    { h: "¿Qué es la ciencia?", p: [
      "La <mark>ciencia</mark> es una forma de conocer el mundo natural basada en la observación, la experimentación y el razonamiento lógico. Su objetivo es encontrar <b>explicaciones</b> de los fenómenos que se puedan comprobar y que permitan hacer <b>predicciones</b>. A diferencia de las creencias o las opiniones, el conocimiento científico se apoya en pruebas (datos medibles y reproducibles) y se somete continuamente a revisión: cualquier persona, con los medios adecuados, puede repetir un experimento y comprobar si da el mismo resultado.",
      "El conocimiento científico tiene varias características. Es <b>empírico</b>, porque parte de la experiencia y vuelve a ella para comprobarse. Es <b>racional</b>, porque usa la lógica y las matemáticas. Es <b>verificable</b> y, sobre todo, <b>falsable</b>: el filósofo Karl Popper señaló que una afirmación solo es científica si se puede imaginar un experimento que la refute. «Todos los metales se dilatan al calentarse» es falsable; «el universo tiene un propósito oculto» no lo es. Además, la ciencia es <b>provisional</b> (acepta correcciones), <b>acumulativa</b> (cada generación se apoya en las anteriores) y <b>colectiva</b> (avanza gracias a comunidades que comparten y critican sus resultados).",
    ], svg: arbol("Características del conocimiento científico", "Ciencia", [["Empírica", "parte de datos y vuelve a ellos"], ["Falsable", "se puede refutar con pruebas"], ["Provisional", "se corrige si hay datos nuevos"], ["Colectiva", "se comparte y se critica"]]), v: ["met-c", "¿Qué tiene de especial la ciencia?"] },
    { h: "Ciencia básica, ciencia aplicada y tecnología", p: [
      "La <b>ciencia básica</b> busca comprender cómo funciona la naturaleza sin un fin práctico inmediato: estudiar la estructura del átomo, el comportamiento de las bacterias del suelo o la expansión del universo. La <b>ciencia aplicada</b> usa ese conocimiento para resolver problemas concretos, como diseñar un fármaco o un material más resistente. La <b>tecnología</b> es el conjunto de técnicas y objetos que construimos a partir de ese saber: el teléfono móvil, la resonancia magnética o un panel solar.",
      "Las tres se alimentan mutuamente. La investigación básica sobre la mecánica cuántica, que parecía puramente teórica en 1920, permitió décadas después el transistor, el láser y toda la electrónica actual. Del estudio de un sistema de defensa de las bacterias (CRISPR) nació una herramienta de edición genética. A la vez, la tecnología ofrece nuevos instrumentos (microscopios, telescopios, ordenadores) que abren campos de investigación básica. Por eso, la división entre «ciencias» es en parte artificial: la física, la química, la biología y la geología comparten métodos, y muchos de los grandes problemas actuales, como el cambio climático o las pandemias, solo se abordan con equipos <b>interdisciplinares</b>. Ese es justamente el espíritu de esta materia: mirar la naturaleza como un todo.",
    ], svg: L6.radial("Relación entre ciencia básica, ciencia aplicada, tecnología y sociedad", "Conocimiento", ["Ciencia básica", "Ciencia aplicada", "Tecnología", "Sociedad"]) },
    { h: "Leyes, teorías y modelos", p: [
      "Una <mark>ley científica</mark> describe una regularidad de la naturaleza, a menudo con una ecuación: la ley de Hooke dice que el alargamiento de un muelle es proporcional a la fuerza (F = k·Δx); la ley de conservación de la masa, que en una reacción química la masa total no cambia. Una ley dice <b>qué ocurre</b>, pero no necesariamente <b>por qué</b>.",
      "Una <mark>teoría científica</mark> es una explicación amplia, coherente y muy contrastada de un conjunto de fenómenos: la teoría atómica, la teoría de la evolución por selección natural o la tectónica de placas. En el lenguaje cotidiano «teoría» significa «suposición», pero en ciencia es el nivel más alto de conocimiento. Un <mark>modelo</mark> es una representación simplificada de la realidad que ayuda a entenderla y a predecir: el modelo atómico de Bohr, un mapa del clima o una maqueta del ADN. Todo modelo tiene límites: el de Bohr explica bien el hidrógeno, pero falla con átomos de muchos electrones. Cuando un modelo deja de explicar los datos, se sustituye por otro mejor. Esta sucesión de modelos no significa que la ciencia «se equivoque siempre», sino que se aproxima cada vez más a la realidad.",
    ], svg: L6.tabla("Diferencias entre ley, teoría y modelo", ["Concepto", "Qué hace", "Ejemplo"], [["Ley", "describe", "F = k·Δx"], ["Teoría", "explica", "evolución"], ["Modelo", "representa", "átomo de Bohr"], ["Hipótesis", "propone", "«si…, entonces…»"]]) },
    { h: "Breve historia del pensamiento científico", p: [
      "Los filósofos griegos buscaron explicaciones naturales y no mitológicas: Demócrito imaginó los átomos y Aristóteles clasificó a los seres vivos, aunque apenas experimentaban. En la Edad Media, sabios árabes como Ibn al-Haytham (Alhacén) insistieron en comprobar las ideas con experimentos, sobre todo en óptica. La gran transformación llegó con la <b>revolución científica</b> de los siglos XVI y XVII: Copérnico situó el Sol en el centro, Galileo combinó experimentos y matemáticas, Francis Bacon defendió la inducción a partir de observaciones y Descartes el razonamiento deductivo. Newton reunió todo ello en sus leyes del movimiento y la gravitación (1687).",
      "Desde entonces, la ciencia se ha institucionalizado: academias, universidades, revistas y laboratorios. En los siglos XIX y XX llegaron la teoría de la evolución, la química moderna, la relatividad, la mecánica cuántica y la biología molecular. Hoy la ciencia es una empresa mundial en la que trabajan millones de personas y en la que las mujeres, durante siglos apartadas, tienen un papel creciente: desde Marie Curie, la única persona con dos premios Nobel en ciencias distintas, hasta Margarita Salas, que descubrió la ADN polimerasa del virus phi29, una de las patentes más rentables de la ciencia española.",
    ], svg: L6.linea("Hitos del pensamiento científico", [["s. IV a. C.", "Aristóteles clasifica"], ["1543", "Copérnico"], ["1610", "Galileo experimenta"], ["1687", "Newton: Principia"], ["1859", "Darwin: evolución"], ["1953", "doble hélice"]], "Historia de la ciencia") },
    { h: "Las etapas del trabajo científico", p: [
      "No existe un único «método científico» que se siga como una receta, pero el trabajo científico comparte unas etapas. Todo empieza con la <b>observación</b> de un fenómeno que despierta una <b>pregunta</b> investigable: ¿por qué mueren más madres en una sala que en otra? Después se busca información (lo que ya se sabe) y se formula una <mark>hipótesis</mark>: una respuesta provisional, concreta y comprobable, que suele escribirse como «si…, entonces…». Por ejemplo: «si los médicos se lavan las manos con cal clorada, entonces disminuirá la mortalidad».",
      "La hipótesis se pone a prueba con un <b>experimento</b> diseñado para ello (o con observaciones sistemáticas cuando no se puede experimentar, como en astronomía o en geología). Los datos se recogen, se organizan en tablas y gráficas y se <b>analizan</b>, a menudo con estadística. Con ellos se extraen <b>conclusiones</b>: la hipótesis se acepta provisionalmente o se rechaza. Si se rechaza, no es un fracaso: se ha aprendido algo y se plantea una nueva hipótesis. Por último, los resultados se <b>comunican</b> a la comunidad científica, que los revisa y trata de reproducirlos. El proceso es un ciclo: cada respuesta abre preguntas nuevas.",
    ], svg: cicloSVG, v: ["met-a", "¿Qué es el método científico?"] },
    { h: "Diseño de experimentos: variables y grupo de control", p: [
      "Un buen experimento cambia <b>una sola cosa</b> cada vez para saber qué causa el efecto. La <mark>variable independiente</mark> es la que el investigador modifica a propósito (la cantidad de fertilizante); la <mark>variable dependiente</mark> es la que se mide como respuesta (la altura de las plantas); las <b>variables controladas</b> son todas las demás que podrían influir y deben mantenerse iguales (luz, agua, temperatura, tipo de semilla). Si cambiáramos a la vez el fertilizante y la luz, no sabríamos cuál de los dos ha hecho crecer más las plantas.",
      "Además se usa un <mark>grupo de control</mark>, que recibe el mismo trato que el grupo experimental salvo el factor que se estudia (plantas sin fertilizante). En medicina, el grupo de control recibe un <b>placebo</b>, una sustancia sin efecto, porque creer que se toma un medicamento ya produce mejoría. Los mejores ensayos son <b>aleatorizados</b> (los participantes se reparten al azar) y de <b>doble ciego</b> (ni el paciente ni el médico saben quién toma el fármaco). También importa el <b>tamaño de la muestra</b>: con tres plantas, una diferencia puede deberse a la casualidad; con trescientas, es mucho más fiable. Por eso los experimentos se repiten y se calculan medias.",
    ], svg: variablesSVG, v: ["met-b", "Cómo identificar las variables de una investigación"] },
    { h: "Magnitudes, unidades y notación científica", p: [
      "Medir es comparar una <mark>magnitud</mark> (una propiedad que se puede medir: longitud, masa, tiempo, temperatura) con una unidad patrón. Para entenderse en todo el mundo se usa el <b>Sistema Internacional de Unidades (SI)</b>, con siete magnitudes fundamentales: longitud (metro, m), masa (kilogramo, kg), tiempo (segundo, s), temperatura (kelvin, K), cantidad de sustancia (mol), intensidad de corriente (amperio, A) e intensidad luminosa (candela, cd). Las demás son <b>derivadas</b>: la velocidad (m/s), la fuerza (newton, N = kg·m/s²) o la energía (julio, J = N·m).",
      "La ciencia trabaja con cantidades enormes y diminutas: la distancia a la estrella más cercana es unos 40 000 000 000 000 km y el diámetro de un átomo, unos 0,0000000001 m. Para escribirlas se usa la <mark>notación científica</mark>: un número entre 1 y 10 multiplicado por una potencia de 10. Así, 4·10¹³ km y 1·10⁻¹⁰ m. También se usan prefijos: kilo (10³), mega (10⁶), giga (10⁹), mili (10⁻³), micro (10⁻⁶) y nano (10⁻⁹). Para pasar de una unidad a otra se usan <b>factores de conversión</b>, fracciones que valen 1: 72 km/h · (1000 m / 1 km) · (1 h / 3600 s) = 20 m/s.",
    ], svg: L6.tabla("Magnitudes fundamentales del Sistema Internacional", ["Magnitud", "Unidad", "Símbolo"], [["Longitud", "metro", "m"], ["Masa", "kilogramo", "kg"], ["Tiempo", "segundo", "s"], ["Temperatura", "kelvin", "K"], ["Cantidad", "mol", "mol"]]) },
    { h: "Errores, incertidumbre y cifras significativas", p: [
      "Ninguna medida es perfecta. Los <b>errores sistemáticos</b> desvían todas las medidas en el mismo sentido (una balanza mal calibrada, leer siempre la probeta desde arriba) y se corrigen revisando el instrumento o el método. Los <b>errores aleatorios</b> se deben a pequeñas variaciones imprevisibles y se reducen repitiendo la medida y calculando la media. Conviene distinguir <b>exactitud</b> (lo cerca que está una medida del valor real) y <b>precisión</b> (lo parecidas que son entre sí varias medidas).",
      "Toda medida se expresa con su <mark>incertidumbre</mark>: 12,4 ± 0,1 cm. La incertidumbre mínima es la <b>sensibilidad</b> del instrumento (la menor división de su escala). El <b>error absoluto</b> es la diferencia entre el valor medido y el real; el <b>error relativo</b> es el absoluto dividido por el valor real, a menudo en porcentaje, y permite comparar la calidad de medidas distintas. Las <mark>cifras significativas</mark> son las que se conocen con seguridad más la primera dudosa: 12,4 cm tiene tres. Al calcular, el resultado no puede ser más preciso que los datos: si divides 10,0 m entre 3,0 s, la velocidad es 3,3 m/s, no 3,333333 m/s como muestra la calculadora.",
    ], svg: dianaSVG },
    { h: "Tablas, gráficas y análisis de datos", p: [
      "Los datos se organizan en <b>tablas</b> con la magnitud y la unidad en la cabecera. Después se representan en <b>gráficas</b>: la variable independiente en el eje horizontal y la dependiente en el vertical, con escalas uniformes y título. La forma de la gráfica revela la relación. Una recta que pasa por el origen indica <b>proporcionalidad directa</b> (y = k·x); una hipérbola, proporcionalidad inversa (y = k/x); una parábola, relación cuadrática. La recta que mejor se ajusta a los puntos (<b>recta de regresión</b>) permite calcular la constante y hacer predicciones dentro del rango medido.",
      "Para resumir datos se usan la <b>media</b>, la <b>mediana</b> y medidas de dispersión como la desviación típica. Pero hay que interpretar con cuidado: que dos variables aumenten a la vez (<mark>correlación</mark>) no significa que una cause la otra (<b>causalidad</b>). Las ventas de helados y los ahogamientos crecen juntos en verano, pero los helados no ahogan a nadie: ambos dependen del calor. Para demostrar causalidad hace falta un experimento controlado o un mecanismo que la explique. También hay que desconfiar de las gráficas con ejes cortados o escalas engañosas, muy frecuentes en publicidad y en redes sociales.",
    ], svg: ajusteSVG },
    { h: "La comunicación científica y la revisión por pares", p: [
      "Un descubrimiento no forma parte de la ciencia hasta que se comunica y se somete a crítica. Los investigadores publican sus resultados en <b>artículos</b> con una estructura fija: resumen, introducción, métodos, resultados, discusión y bibliografía. Los métodos se describen con detalle para que otros puedan <b>reproducir</b> el experimento. Antes de publicarse, el artículo pasa la <mark>revisión por pares</mark>: varios expertos anónimos del mismo campo lo evalúan, señalan errores y recomiendan aceptarlo, corregirlo o rechazarlo.",
      "La revisión no es infalible, pero filtra muchos errores. Además, la ciencia se autocorrige: si otros laboratorios no logran repetir un resultado, este pierde credibilidad. Así cayó el artículo de 1998 que relacionaba la vacuna triple vírica con el autismo: se demostró que los datos estaban manipulados, la revista lo retiró y su autor perdió la licencia médica. Hoy la comunicación también llega al público a través de museos, divulgadores, documentales y redes. La <b>ciencia abierta</b> busca que artículos y datos sean de acceso libre, y en España la ley de la Ciencia de 2022 obliga a publicar en abierto la investigación financiada con dinero público.",
    ], svg: paresSVG },
    { h: "Pseudociencias, bulos y pensamiento crítico", p: [
      "Una <mark>pseudociencia</mark> es una creencia o práctica que se presenta como científica pero no sigue el método científico: no es falsable, no se apoya en experimentos controlados o ignora las pruebas en contra. Son ejemplos la homeopatía (cuyos preparados están tan diluidos que no contienen ninguna molécula del principio activo), la astrología como predicción del carácter o los productos «detox» milagrosos. Sus señales de alarma son las promesas de curarlo todo, los testimonios personales en lugar de datos, el lenguaje científico sin rigor («energía cuántica»), la ausencia de publicaciones revisadas y la acusación de que «la ciencia oficial lo oculta».",
      "Frente a ellas y a los <b>bulos</b> que circulan por redes, el pensamiento crítico propone preguntas sencillas: ¿quién lo dice y qué gana con ello?, ¿cuáles son las fuentes?, ¿hay estudios controlados con muchos casos?, ¿qué opinan las instituciones científicas?, ¿es una afirmación extraordinaria sin pruebas extraordinarias? También ayuda conocer los <b>sesgos</b> que nos engañan: el de confirmación (buscamos lo que nos da la razón) o confundir anécdota con dato. Verificar antes de compartir es una responsabilidad ciudadana: un bulo sanitario puede costar vidas.",
    ], svg: L5.compara("Diferencias entre ciencia y pseudociencia", ["Ciencia", ["falsable", "datos controlados", "revisión por pares", "se corrige", "cautela"]], ["Pseudociencia", ["no refutable", "testimonios", "sin revisión", "no cambia", "promesas"]], "var(--leaf)", "var(--red)") },
    { h: "Ciencia, ética y sociedad", p: [
      "La ciencia es poderosa y, por eso, plantea dilemas. La <b>bioética</b> establece principios para la investigación con personas: consentimiento informado, beneficio, no causar daño y justicia. Tras los abusos de la Segunda Guerra Mundial se redactaron el Código de Núremberg (1947) y la Declaración de Helsinki (1964). La experimentación con animales sigue la regla de las <b>tres erres</b>: reemplazar cuando sea posible, reducir el número y refinar los métodos para evitar sufrimiento. También hay debates sobre la edición genética de embriones, la inteligencia artificial o el uso militar de los descubrimientos.",
      "Las decisiones sobre ciencia afectan a todos, por lo que la sociedad necesita ciudadanos con <b>alfabetización científica</b>: capaces de entender un gráfico de contagios, valorar un riesgo o votar sobre energía. Los <b>Objetivos de Desarrollo Sostenible</b> (ODS) de la ONU para 2030 muestran que casi todos los retos (salud, agua, energía limpia, clima, alimentación) requieren ciencia. Al mismo tiempo, la ciencia debe ser honesta: el fraude (inventar o manipular datos, plagiar) daña la confianza de todos. La ciencia no tiene todas las respuestas, pero es la mejor herramienta que tenemos para responder bien a las preguntas sobre la naturaleza.",
    ], svg: L6.radial("Principios éticos de la investigación científica", "Ética", ["Consentimiento", "No dañar", "Honestidad", "Tres erres"]), v: ["met-d", "El método científico: pasos, ejemplos y consejos"] },
  ],
  figura: { titulo: "La ciencia y sus métodos", items: [["Ciencia", "falsable", "empírica", "provisional"], ["Método", "hipótesis", "experimento", "conclusión"], ["Medida", "SI · 10ⁿ", "incertidumbre", "cifras signif."], ["Sociedad", "revisión", "ética", "pensamiento crítico"]] },
  video: ["met-a", "¿Qué es el método científico?"],
  ejemplos: [
    ["Plantea una hipótesis y un diseño experimental para la pregunta: «¿Influye la temperatura del agua en la velocidad a la que se disuelve el azúcar?».", ["Hipótesis: si aumenta la temperatura del agua, entonces el azúcar se disolverá en menos tiempo.", "Variable independiente: temperatura (10, 30, 50 y 70 °C). Dependiente: tiempo de disolución (s).", "Controladas: volumen de agua (200 mL), masa de azúcar (10 g), tipo de azúcar, forma de remover.", "Repetir tres veces cada temperatura y calcular la media; representar tiempo frente a temperatura."], "Experimento con una sola variable cambiada, tres repeticiones y gráfica t–T."],
    ["Expresa en notación científica y en unidades del SI: a) 0,000045 m; b) 3 200 000 km; c) 250 nm.", ["a) Se mueve la coma 5 lugares a la derecha: 4,5·10⁻⁵ m.", "b) 3 200 000 km = 3,2·10⁶ km = 3,2·10⁶ · 10³ m = 3,2·10⁹ m.", "c) 1 nm = 10⁻⁹ m, así que 250 nm = 2,5·10² · 10⁻⁹ = 2,5·10⁻⁷ m."], "4,5·10⁻⁵ m; 3,2·10⁹ m; 2,5·10⁻⁷ m."],
    ["Convierte 108 km/h a m/s con factores de conversión.", ["Se multiplica por (1000 m / 1 km) para pasar los km a m.", "Se multiplica por (1 h / 3600 s) para pasar las horas a segundos.", "108 · 1000 / 3600 = 30."], "108 km/h = 30 m/s."],
    ["Al medir una mesa de 1,500 m real se obtiene 1,52 m. Calcula los errores absoluto y relativo.", ["Error absoluto = |1,52 − 1,500| = 0,02 m.", "Error relativo = 0,02 / 1,500 = 0,0133.", "En porcentaje: 1,33 %."], "Ea = 0,02 m; Er ≈ 1,3 %."],
    ["¿Cuántas cifras significativas tienen 0,00340, 25,0 y 1,20·10³? Calcula 4,52 · 2,1 con las cifras correctas.", ["0,00340: los ceros iniciales no cuentan; tiene 3 (3, 4 y el 0 final).", "25,0 tiene 3; 1,20·10³ tiene 3.", "4,52 · 2,1 = 9,492, pero el dato menos preciso tiene 2 cifras: se redondea a 9,5."], "3, 3 y 3 cifras; el producto es 9,5."],
    ["Un estudio observa que las ciudades con más cigüeñas tienen más nacimientos. ¿Demuestra que las cigüeñas traen niños?", ["Hay correlación: las dos variables aumentan juntas.", "Puede haber una tercera variable: las zonas rurales grandes tienen más tejados con nidos y familias más numerosas.", "Para demostrar causalidad haría falta un mecanismo y un experimento controlado."], "No: es una correlación sin causalidad, explicada por una variable oculta."],
  ],
  errores: [
    "Creer que «teoría» significa «suposición»: en ciencia es una explicación muy contrastada.",
    "Cambiar varias variables a la vez en un experimento: así no se sabe cuál produce el efecto.",
    "Olvidar el grupo de control o hacer un solo ensayo: los resultados pueden deberse al azar.",
    "Confundir precisión y exactitud: unas medidas muy agrupadas pueden estar todas lejos del valor real.",
    "Copiar todos los decimales de la calculadora: el resultado no puede tener más cifras significativas que los datos.",
    "Deducir causalidad de una correlación: dos variables pueden variar juntas por una tercera causa.",
  ],
  ejercicios: {
    b: [
      ["Define ciencia y explica dos características del conocimiento científico.", "Forma de conocer la naturaleza basada en la observación, la experimentación y el razonamiento. Es empírica (parte de datos y se comprueba con ellos) y falsable (se puede refutar con un experimento); también es provisional, acumulativa y colectiva."],
      ["Ordena las etapas del trabajo científico: conclusión, hipótesis, observación, experimentación, comunicación, pregunta, análisis.", "Observación → pregunta → hipótesis → experimentación → análisis de datos → conclusión → comunicación."],
      ["Diferencia ley, teoría y modelo con un ejemplo de cada uno.", "Ley: describe una regularidad (ley de Hooke, F = k·Δx). Teoría: explica un conjunto amplio de fenómenos (teoría de la evolución). Modelo: representación simplificada (modelo atómico de Bohr)."],
      ["¿Es falsable la afirmación «el agua hierve a 100 °C a nivel del mar»? ¿Y «los cristales tienen energías curativas invisibles»?", "La primera sí: basta medir la temperatura de ebullición para refutarla si no se cumple. La segunda no, porque esas «energías invisibles» no se pueden medir ni comprobar; no es una afirmación científica."],
      ["Escribe las siete magnitudes fundamentales del SI con su unidad.", "Longitud (m), masa (kg), tiempo (s), temperatura (K), cantidad de sustancia (mol), intensidad de corriente (A) e intensidad luminosa (cd)."],
      ["Escribe en notación científica: 0,0072; 560 000; 0,00000081; 93 000 000.", "7,2·10⁻³; 5,6·10⁵; 8,1·10⁻⁷; 9,3·10⁷."],
      ["Convierte: 2,5 km a m; 450 mg a kg; 3 h a s.", "2,5 km = 2500 m = 2,5·10³ m; 450 mg = 4,5·10⁻⁴ kg; 3 h = 10 800 s = 1,08·10⁴ s."],
      ["¿Qué es una variable controlada? Pon un ejemplo en un experimento sobre la germinación de semillas con distinta cantidad de agua.", "Una variable que se mantiene constante para que no influya. Ejemplos: tipo de semilla, temperatura, luz, tipo de sustrato y tamaño de la maceta."],
      ["¿Para qué sirve el grupo de control?", "Para comparar: recibe el mismo trato que el grupo experimental excepto el factor estudiado, de modo que las diferencias se puedan atribuir a ese factor."],
      ["Explica qué es un placebo y por qué se usa en los ensayos clínicos.", "Una sustancia sin efecto farmacológico que se da al grupo de control. Se usa porque creer que se toma un medicamento ya puede producir mejoría (efecto placebo); así se mide el efecto real del fármaco."],
      ["Indica cuántas cifras significativas tienen: 405; 0,060; 3,00; 2,0·10⁴.", "405: 3. 0,060: 2. 3,00: 3. 2,0·10⁴: 2."],
      ["Cita tres señales de alarma de una pseudociencia.", "Promete curarlo todo, se apoya en testimonios y no en experimentos controlados, no publica en revistas revisadas, usa jerga científica sin rigor y no cambia ante las pruebas en contra."],
    ],
    m: [
      ["Redacta una hipótesis con la forma «si…, entonces…» para la pregunta: «¿La música afecta a la memoria al estudiar?» e indica sus variables.", "Si se estudia con música con letra, entonces se recordarán menos palabras de una lista. VI: tipo de ambiente (silencio, música instrumental, música con letra). VD: número de palabras recordadas. Controladas: lista, tiempo de estudio, hora, edad de los participantes."],
      ["Convierte 15 m/s a km/h y 90 km/h a m/s.", "15 · 3600 / 1000 = 54 km/h. 90 · 1000 / 3600 = 25 m/s."],
      ["Se mide la masa de un objeto cuatro veces: 25,3 g; 25,5 g; 25,4 g; 25,6 g. Calcula la media y el error absoluto de cada medida.", "Media = 101,8 / 4 = 25,45 ≈ 25,5 g. Errores absolutos respecto a 25,45: 0,15; 0,05; 0,05; 0,15 g (redondeando, 0,2; 0,1; 0,1; 0,2). Resultado: 25,5 ± 0,1 g."],
      ["Una balanza da 102,0 g para una pesa de 100,0 g y una regla da 9,8 cm para un objeto de 10,0 cm. ¿Qué medida es de mayor calidad?", "Balanza: Ea = 2,0 g, Er = 2,0 %. Regla: Ea = 0,2 cm, Er = 2,0 %. Las dos tienen la misma calidad relativa (2 %), aunque los errores absolutos no se puedan comparar por tener unidades distintas."],
      ["Calcula con las cifras significativas correctas: a) 12,5 + 3,42; b) 6,0 · 3,14; c) 9,81 / 2,0.", "a) 15,92 → 15,9 (una cifra decimal, como 12,5). b) 18,84 → 19 (dos cifras). c) 4,905 → 4,9 (dos cifras)."],
      ["Explica la diferencia entre error sistemático y aleatorio y cómo se reduce cada uno.", "Sistemático: desvía todas las medidas en el mismo sentido (aparato mal calibrado, mala técnica); se corrige calibrando o cambiando el método. Aleatorio: variaciones imprevisibles en ambos sentidos; se reduce repitiendo y haciendo la media."],
      ["En un experimento, al duplicar la masa colgada de un muelle se duplica el alargamiento. ¿Qué tipo de relación es? ¿Cómo será la gráfica?", "Proporcionalidad directa (Δx = k·m). La gráfica es una recta que pasa por el origen; su pendiente es la constante de proporcionalidad."],
      ["La velocidad de un coche y el tiempo de un trayecto fijo se relacionan así: 60 km/h → 2 h; 120 km/h → 1 h. ¿Qué relación es? Predice el tiempo a 80 km/h.", "Proporcionalidad inversa: v·t = 120 km (constante). A 80 km/h: t = 120/80 = 1,5 h. La gráfica es una hipérbola."],
      ["¿Por qué un ensayo clínico debe ser de doble ciego y aleatorizado?", "Aleatorizado: repartir al azar evita que los grupos sean distintos de partida (sesgo de selección). Doble ciego: ni paciente ni médico saben quién toma el fármaco, así no influyen las expectativas al valorar los síntomas."],
      ["Lee: «Un estudio con 12 personas demuestra que una infusión reduce el colesterol». Señala tres debilidades.", "Muestra muy pequeña; no se dice si hubo grupo de control ni placebo; no se indica si fue aleatorizado y ciego, ni si está publicado en una revista revisada. Además, «demuestra» es excesivo con tan pocos datos."],
      ["Explica en qué consiste la revisión por pares y una de sus limitaciones.", "Expertos anónimos evalúan un artículo antes de publicarlo, detectan errores y piden correcciones. Limitación: no repiten el experimento, por lo que el fraude o los errores en los datos pueden pasar; por eso es clave la reproducción posterior."],
      ["¿Por qué el trabajo de Semmelweis tardó en aceptarse? ¿Qué enseña sobre la ciencia?", "Contradecía las creencias médicas y no tenía un mecanismo que lo explicara (aún no se conocían los microbios), además de herir el orgullo de los médicos. Enseña que la ciencia es humana y puede resistirse a ideas nuevas, pero que a la larga las pruebas acaban imponiéndose."],
    ],
    a: [
      ["Diseña un experimento completo (hipótesis, variables, grupo de control, repeticiones, tabla y gráfica) para comprobar si la luz roja o azul favorece más el crecimiento de plantas de rabanito.", "Hipótesis: si las plantas reciben luz azul, crecerán más que con luz roja. VI: color de la luz (roja, azul y blanca como control). VD: altura y masa a los 15 días. Controladas: semillas de la misma bolsa, sustrato, riego (20 mL/día), temperatura, horas de luz e intensidad. 10 macetas por grupo, medias y desviación. Tabla color–altura media y gráfica de barras con barras de error."],
      ["La distancia Tierra-Sol es 1,5·10⁸ km y la luz viaja a 3,0·10⁵ km/s. ¿Cuánto tarda la luz del Sol en llegar? Expresa el resultado en minutos con dos cifras significativas.", "t = d/v = 1,5·10⁸ / 3,0·10⁵ = 5,0·10² s = 500 s. En minutos: 500/60 = 8,3 min."],
      ["Un átomo de oro tiene un diámetro de 2,9·10⁻¹⁰ m. ¿Cuántos átomos habría que alinear para cubrir 1 mm?", "1 mm = 1·10⁻³ m. N = 10⁻³ / 2,9·10⁻¹⁰ = 3,4·10⁶ átomos, unos tres millones y medio."],
      ["Con los datos masa (g) / alargamiento (cm): 50/2,6; 100/5,0; 150/7,6; 200/10,1; 250/12,4, calcula la constante y predice el alargamiento para 180 g.", "Cocientes Δx/m: 0,052; 0,050; 0,051; 0,0505; 0,0496 → media ≈ 0,051 cm/g. Para 180 g: 0,051·180 ≈ 9,2 cm. Es una interpolación fiable porque está dentro del rango medido."],
      ["Un titular dice: «Los que beben café viven más». Explica tres variables de confusión posibles y cómo diseñarías un estudio para comprobar la causalidad.", "Posibles confusiones: nivel económico, ejercicio, tabaco, salud previa (quien está enfermo deja el café). Un estudio de cohortes ajustaría estadísticamente esas variables; lo ideal sería un ensayo aleatorizado (difícil a largo plazo). Además habría que proponer un mecanismo biológico plausible."],
      ["Aplica el criterio de falsabilidad de Popper a estas afirmaciones: a) «Todos los cisnes son blancos»; b) «Ocurrirá lo que tenga que ocurrir»; c) «El cambio climático actual se debe sobre todo a las emisiones humanas de CO₂».", "a) Falsable: un solo cisne negro la refuta (y de hecho existen en Australia). b) No falsable: cualquier resultado la confirma; no es científica. c) Falsable: predice relaciones medibles entre CO₂, temperatura y otros indicadores (estratosfera que se enfría, firma isotópica del carbono) que se han comprobado."],
      ["Un vendedor afirma que su pulsera «equilibra la energía y mejora el equilibrio físico», y lo demuestra con una prueba en la que empuja el brazo del cliente. Diseña una prueba que lo compruebe de forma rigurosa.", "Prueba de doble ciego: pulseras auténticas y otras idénticas sin el supuesto efecto, asignadas al azar; ni el probador ni el cliente saben cuál llevan; muchas repeticiones con muchas personas; medida objetiva del equilibrio (plataforma de fuerzas) y comparación estadística. En pruebas así estas pulseras no muestran diferencias."],
      ["Un alumno mide el periodo de un péndulo diez veces y obtiene valores entre 1,98 y 2,04 s, con media 2,01 s. El valor teórico es 2,006 s. Expresa el resultado con su incertidumbre y valora exactitud y precisión.", "Incertidumbre aproximada (semidispersión): (2,04 − 1,98)/2 = 0,03 s → T = 2,01 ± 0,03 s. Es exacto (el valor teórico 2,006 está dentro del intervalo) y bastante preciso (dispersión del 1,5 %)."],
    ],
  },
  quiz: [
    ["Según Popper, una afirmación es científica si…", ["la defiende un científico", "se puede refutar con un experimento", "es muy antigua", "la cree la mayoría"], 1, "El criterio de falsabilidad."],
    ["En ciencia, una teoría es…", ["una suposición sin pruebas", "una explicación amplia y muy contrastada", "una opinión", "una ley pequeña"], 1, "Es el nivel más alto de conocimiento científico."],
    ["La variable que el investigador modifica a propósito es la…", ["dependiente", "controlada", "independiente", "aleatoria"], 2, "La dependiente es la que se mide."],
    ["El grupo de control sirve para…", ["acelerar el experimento", "comparar con el grupo experimental", "eliminar los errores sistemáticos", "aumentar la muestra"], 1, "Recibe todo igual menos el factor estudiado."],
    ["¿Cuál es una unidad fundamental del SI?", ["newton", "julio", "kelvin", "vatio"], 2, "N, J y W son derivadas."],
    ["0,00052 en notación científica es…", ["5,2·10⁻⁴", "5,2·10⁴", "52·10⁻⁵", "0,52·10⁻³"], 0, "La coma se mueve 4 lugares a la derecha."],
    ["El prefijo micro equivale a…", ["10⁻³", "10⁻⁶", "10⁻⁹", "10⁶"], 1, "Mili 10⁻³, micro 10⁻⁶, nano 10⁻⁹."],
    ["72 km/h son…", ["7,2 m/s", "20 m/s", "36 m/s", "259 m/s"], 1, "72 · 1000 / 3600."],
    ["Una balanza mal calibrada produce un error…", ["aleatorio", "sistemático", "relativo nulo", "de redondeo"], 1, "Desvía todas las medidas en el mismo sentido."],
    ["Medidas muy agrupadas pero lejos del valor real son…", ["exactas y precisas", "precisas pero no exactas", "exactas pero no precisas", "ni precisas ni exactas"], 1, "Precisión es agrupamiento; exactitud, cercanía al valor real."],
    ["¿Cuántas cifras significativas tiene 0,0450?", ["2", "3", "4", "5"], 1, "Los ceros iniciales no cuentan; el final sí."],
    ["El error relativo permite…", ["conocer el valor real", "comparar la calidad de medidas distintas", "eliminar el error", "redondear"], 1, "Se expresa en porcentaje y no tiene unidades."],
    ["Una recta que pasa por el origen indica…", ["proporcionalidad inversa", "proporcionalidad directa", "relación cuadrática", "ninguna relación"], 1, "y = k·x."],
    ["Correlación significa que…", ["una variable causa la otra", "dos variables varían a la vez", "los datos son falsos", "hay un experimento"], 1, "No implica causalidad."],
    ["La revisión por pares consiste en…", ["que dos autores firmen", "que expertos evalúen un artículo antes de publicarse", "repetir el experimento dos veces", "publicar en dos idiomas"], 1, "Revisores anónimos del mismo campo."],
    ["Un ensayo de doble ciego es aquel en que…", ["hay dos grupos de control", "ni el paciente ni el médico saben quién toma el fármaco", "se repite dos veces", "se usa doble dosis"], 1, "Evita el sesgo de expectativas."],
    ["¿Qué es propio de una pseudociencia?", ["publicar datos", "apoyarse en testimonios y no en experimentos", "aceptar críticas", "usar grupo de control"], 1, "Los testimonios no son pruebas controladas."],
    ["La regla de las tres erres se refiere a…", ["la revisión por pares", "la experimentación con animales", "el reciclaje", "las cifras significativas"], 1, "Reemplazar, reducir y refinar."],
    ["Galileo destacó por…", ["clasificar seres vivos", "combinar experimentos y matemáticas", "descubrir el ADN", "proponer la evolución"], 1, "Es un padre de la ciencia moderna."],
    ["Una hipótesis debe ser…", ["verdadera", "comprobable", "muy larga", "aceptada por todos"], 1, "Se formula para ponerla a prueba."],
  ],
  examen: [
    ["4,8·10⁻³ km en metros es…", ["4,8 m", "0,48 m", "48 m", "4,8·10⁻⁶ m"], 0, "Se multiplica por 10³."],
    ["En un estudio sobre el efecto del abono en la altura de plantas, la altura es la variable…", ["independiente", "dependiente", "controlada", "de control"], 1, "Es lo que se mide."],
    ["12,0 / 4 da, con cifras significativas correctas…", ["3", "3,0", "3,00", "3,000"], 0, "El 4 tiene una cifra significativa."],
    ["Un modelo científico…", ["es una copia exacta de la realidad", "es una representación simplificada", "nunca cambia", "no sirve para predecir"], 1, "Tiene límites y se sustituye si falla."],
    ["La afirmación «el destino está escrito» es…", ["falsable", "no falsable", "una ley", "una teoría"], 1, "Ningún experimento podría refutarla."],
    ["Error absoluto de medir 9,6 s si el valor real es 10,0 s…", ["0,4 s", "4 %", "0,04 s", "9,6 s"], 0, "|9,6 − 10,0|."],
    ["¿Cuál es magnitud derivada?", ["masa", "tiempo", "velocidad", "temperatura"], 2, "Se obtiene de longitud y tiempo."],
    ["Para reducir el error aleatorio se…", ["calibra el aparato", "repite la medida y se hace la media", "cambia de unidades", "usa notación científica"], 1, "Las desviaciones se compensan."],
  ],
  feynman: ["Por qué una teoría científica no es una simple opinión", "Qué significa que una idea sea falsable", "Por qué en un experimento se cambia una sola variable", "Para qué sirve un grupo de control con placebo", "Por qué correlación no es causalidad", "Cómo detectar una pseudociencia"],
  mapa: ["LA CIENCIA", [["Qué es", "falsable, provisional, colectiva"], ["Método", "hipótesis, variables, control"], ["Medida", "SI, 10ⁿ, error, cifras"], ["Sociedad", "revisión, ética, bulos"]]],
  tarjetas: [
    ["Falsabilidad", "Una afirmación es científica si un experimento podría refutarla (Popper)."],
    ["Hipótesis", "Respuesta provisional y comprobable: «si…, entonces…»."],
    ["Variable independiente", "La que el investigador cambia a propósito."],
    ["Variable dependiente", "La que se mide como respuesta."],
    ["Grupo de control", "Igual que el experimental salvo el factor estudiado."],
    ["Teoría científica", "Explicación amplia y muy contrastada (no una suposición)."],
    ["Notación científica", "a·10ⁿ con 1 ≤ a &lt; 10."],
    ["Cifras significativas", "Las seguras más la primera dudosa."],
    ["Exactitud y precisión", "Cercanía al valor real / agrupamiento de las medidas."],
    ["Correlación", "Dos variables varían juntas; no implica causa."],
    ["Revisión por pares", "Expertos anónimos evalúan antes de publicar."],
    ["Pseudociencia", "Se disfraza de ciencia sin seguir su método."],
  ],
  glosario: [
    ["Ciencia", "Conocimiento de la naturaleza basado en pruebas, falsable y revisable."],
    ["Hipótesis", "Explicación provisional y comprobable de un fenómeno."],
    ["Ley científica", "Descripción de una regularidad natural, a menudo con una ecuación."],
    ["Teoría", "Explicación amplia y muy contrastada de un conjunto de fenómenos."],
    ["Modelo", "Representación simplificada de la realidad para explicarla y predecir."],
    ["Variable independiente", "Factor que el investigador modifica."],
    ["Variable dependiente", "Factor que se mide como respuesta."],
    ["Grupo de control", "Grupo que no recibe el factor estudiado y sirve de comparación."],
    ["Placebo", "Sustancia sin efecto que se da al grupo de control."],
    ["Magnitud", "Propiedad que se puede medir y expresar con número y unidad."],
    ["Notación científica", "Número entre 1 y 10 multiplicado por una potencia de 10."],
    ["Incertidumbre", "Margen de duda que acompaña a toda medida."],
    ["Cifras significativas", "Dígitos conocidos con seguridad más el primero dudoso."],
    ["Correlación", "Relación estadística entre dos variables que varían juntas."],
    ["Revisión por pares", "Evaluación de un trabajo por expertos antes de publicarlo."],
    ["Pseudociencia", "Práctica que se presenta como científica sin serlo."],
  ],
  situacion: {
    titulo: "Cazadores de bulos científicos",
    reto: "Vuestro equipo trabajará como una agencia de verificación: elegiréis un bulo o una afirmación pseudocientífica que circule en redes y comprobaréis si es cierta con las herramientas del método científico.",
    pasos: [
      "Recoged tres mensajes de redes o publicidad con afirmaciones «científicas» y elegid uno.",
      "Buscad las fuentes originales y consultad organismos fiables (OMS, CSIC, agencias sanitarias, artículos revisados).",
      "Formulad la afirmación como hipótesis falsable y diseñad el experimento o el estudio que la comprobaría.",
      "Si es posible, haced una prueba sencilla en el laboratorio (por ejemplo, con un placebo y doble ciego en clase).",
      "Clasificad la afirmación como cierta, engañosa o falsa y explicad qué sesgos o trucos usa.",
    ],
    producto: "Una ficha de verificación (como las de las agencias) y un vídeo corto de 90 segundos para redes que explique el resultado.",
    evaluacion: ["La hipótesis está bien formulada y es falsable.", "Se citan fuentes fiables y se distinguen de las que no lo son.", "El diseño experimental controla variables e incluye grupo de control.", "El mensaje final es claro, riguroso y adecuado para el público."],
  },
  familias: [
    "Cuando llegue a casa un mensaje sorprendente sobre salud, buscad juntos la fuente antes de reenviarlo.",
    "Haced un experimento de cocina cambiando una sola cosa (la temperatura del horno, el tiempo de reposo) y anotad los resultados.",
    "Mirad juntos una noticia con un gráfico y comprobad si los ejes empiezan en cero.",
    "Hablad de un invento cotidiano (el GPS, las vacunas) y de qué investigación básica lo hizo posible.",
  ],
  saberes: "bloque «A. Construyendo ciencia»: metodologías de la investigación científica, identificación y formulación de cuestiones, elaboración de hipótesis y diseño experimental; magnitudes, unidades del SI, notación científica, errores y cifras significativas; análisis de datos con tablas y gráficas; la comunicación científica, la revisión por pares y la valoración crítica de la información frente a las pseudociencias.",
  ideas: [
    "Práctica del muelle: medir alargamientos con distintas masas, representar la gráfica y obtener la constante con una hoja de cálculo.",
    "Ensayo con placebo en clase: catar dos «bebidas energéticas» idénticas y comparar las valoraciones.",
    "Debate sobre la historia de Semmelweis y la resistencia a las ideas nuevas.",
    "Análisis de gráficos engañosos de prensa y redes sociales.",
  ],
  fuentes: [
    { t: "Oficina de Ciencia y Tecnología del Congreso: informes C", url: "https://www.oficinac.es/" },
    { t: "Oficina Internacional de Pesas y Medidas: el Sistema Internacional (SI)", url: "https://www.bipm.org/es/measurement-units" },
  ],
});
