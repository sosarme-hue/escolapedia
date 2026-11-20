// Educación Física, 1º de Bachillerato. Tema 2, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Vías energéticas según la duración del esfuerzo.
const vias = B.lienzo("Vías energéticas: la anaeróbica aláctica domina en esfuerzos de segundos, la láctica hasta unos dos minutos y la aeróbica en los largos", `
  <path d="M24 150 H 246 M24 150 V 30" stroke="var(--ink)" stroke-width="2"/>
  <path d="M26 46 C 50 46, 56 140, 90 146" fill="none" stroke="var(--red)" stroke-width="3.5"/>
  <path d="M26 140 C 60 120, 80 50, 110 60 C 140 70, 150 140, 200 146" fill="none" stroke="var(--sun)" stroke-width="3.5"/>
  <path d="M26 146 C 90 140, 120 80, 160 54 C 190 40, 220 40, 244 40" fill="none" stroke="var(--leaf)" stroke-width="3.5"/>
  ${B.tx(76, 40, "aláctica (ATP-PC)", { fs: 10, maxW: 90, bold: true, color: "var(--red)" })}
  ${B.tx(118, 52, "láctica", { fs: 10, maxW: 50, bold: true, color: "var(--sun)" })}
  ${B.tx(214, 32, "aeróbica", { fs: 10, maxW: 60, bold: true, color: "var(--leaf)" })}
  ${B.tx(40, 166, "10 s", { fs: 9.5, maxW: 30, color: "var(--muted)" })}${B.tx(110, 166, "2 min", { fs: 9.5, maxW: 30, color: "var(--muted)" })}${B.tx(220, 166, "horas →", { fs: 9.5, maxW: 50, color: "var(--muted)" })}`, "");

// Tipos de fuerza con una figura.
const fuerzas = B.lienzo("Tipos de fuerza: máxima, explosiva y resistencia, con ejemplos", `
  ${B.silueta(46, 52, 0.8)}<path d="M14 66 H 78" stroke="var(--red)" stroke-width="5"/>
  ${B.silueta(130, 52, 0.8)}<path d="M108 150 Q130 120 152 150" fill="none" stroke="var(--sun)" stroke-width="3" stroke-dasharray="4 3"/>
  ${B.silueta(214, 52, 0.8)}${[0, 1, 2].map((i) => `<circle cx="${236 + i * 0}" cy="${70 + i * 18}" r="3" fill="var(--leaf)"/>`).join("")}
  ${B.tx(46, 168, "máxima", { fs: 11, maxW: 70, bold: true, color: "var(--red)" })}${B.tx(130, 168, "explosiva", { fs: 11, maxW: 70, bold: true, color: "var(--sun)" })}${B.tx(214, 168, "resistencia", { fs: 11, maxW: 76, bold: true, color: "var(--leaf)" })}`, "");

module.exports = B.tema({
  titulo: "Condición física y salud",
  minutos: 110,
  objetivos: [
    "Distinguir las capacidades físicas básicas y los componentes de la condición física saludable",
    "Explicar las vías energéticas y los métodos de entrenamiento de la resistencia, la fuerza, la velocidad y la flexibilidad",
    "Valorar la propia condición física con pruebas fiables y saber interpretar los resultados",
    "Relacionar la condición física con la salud física, mental y social y con las recomendaciones de la OMS",
  ],
  claves: ["condición física", "resistencia", "fuerza", "velocidad", "flexibilidad", "composición corporal", "aeróbico", "anaeróbico", "VO₂ máx", "sedentarismo", "test", "salud"],
  pregunta: {
    texto: "¿Es lo mismo estar en forma para ganar una carrera que estar en forma para tener buena salud?",
    respuesta: "No del todo. La <b>condición física orientada al rendimiento</b> busca el máximo en una prueba concreta, a veces con cargas que no son saludables. La <mark>condición física orientada a la salud</mark> busca un nivel suficiente de resistencia, fuerza, flexibilidad y una composición corporal adecuada para vivir con energía, prevenir enfermedades y envejecer mejor. Para la salud no hace falta ser el más rápido: hace falta moverse con regularidad y de forma variada.",
  },
  lectura: {
    titulo: "El mejor fármaco que no se vende en farmacias",
    html: `<p>En 2009, la Universidad de Cambridge publicó los resultados de un estudio que había seguido a miles de personas durante años. Los más activos tenían bastante menos riesgo de morir prematuramente que los sedentarios, aunque fumaran o tuvieran sobrepeso. Desde entonces, cientos de investigaciones han confirmado la idea: la buena <b>capacidad cardiorrespiratoria</b> es uno de los mejores predictores de salud que existen, a la altura de no fumar o de tener la tensión controlada.</p>
    <p>La neurocientífica Wendy Suzuki lo descubrió en su propio cuerpo: tras empezar a hacer ejercicio con regularidad notó que se concentraba y recordaba mejor, y dedicó su laboratorio a estudiarlo. El ejercicio estimula la formación de nuevas neuronas en el hipocampo, mejora el estado de ánimo y reduce la ansiedad.</p>
    <p>Pero la condición física también se pierde. En España, menos de la mitad de los adolescentes cumple las recomendaciones de actividad física, y las chicas aún menos. En este tema aprenderás qué capacidades forman tu condición física, cómo se miden y cómo se entrenan para que te acompañen toda la vida.</p>`,
  },
  secciones: [3, 5, 4],
  bloques: [
    {
      h: "La condición física y sus componentes",
      html: `<p>La <b>condición física</b> es el conjunto de capacidades que permiten realizar actividades físicas con eficacia y sin fatiga excesiva. Depende de la herencia genética, pero sobre todo del <b>entrenamiento</b> y del estilo de vida.</p>
      <p>Tradicionalmente se habla de <b>capacidades físicas básicas</b>: resistencia, fuerza, velocidad y flexibilidad. A ellas se suman las <b>capacidades coordinativas</b> (coordinación, equilibrio, agilidad), que dependen más del sistema nervioso.</p>
      <p>Hoy se distingue entre dos enfoques:</p>
      <ul><li><b>Condición física orientada al rendimiento</b>: la que necesita un deportista para competir; incluye velocidad, potencia y técnica al máximo.</li>
      <li><b>Condición física orientada a la salud</b>: la que reduce el riesgo de enfermedad y permite una vida activa. Sus componentes son la <b>capacidad cardiorrespiratoria</b>, la <b>fuerza y resistencia muscular</b>, la <b>flexibilidad</b> y la <b>composición corporal</b>, además de la capacidad motora (equilibrio y coordinación).</li></ul>
      <p>En Bachillerato el objetivo es que conozcas tu nivel en cada componente y sepas mejorarlo de forma autónoma.</p>`,
      svg: B.cajas("Condición física saludable", [["Cardiorrespiratoria", "corazón y pulmones"], ["Fuerza muscular", "músculos y huesos"], ["Flexibilidad", "amplitud de movimiento"], ["Composición corporal", "grasa y masa magra"]], { t: "Componentes saludables" }),
    },
    {
      h: "Beneficios para la salud",
      html: `<p>Una buena condición física tiene efectos en todo el organismo:</p>
      <ul><li><b>Cardiovasculares</b>: el corazón se hace más eficiente, baja la frecuencia cardiaca de reposo y la tensión arterial, mejora el colesterol bueno (HDL) y se reduce el riesgo de infarto e ictus.</li>
      <li><b>Metabólicos</b>: mejora la sensibilidad a la insulina, se previene la diabetes tipo 2 y se controla mejor el peso.</li>
      <li><b>Musculoesqueléticos</b>: huesos más densos (clave en la adolescencia, cuando se forma la mayor parte de la masa ósea), músculos y tendones más fuertes y menos dolor de espalda.</li>
      <li><b>Psicológicos</b>: reduce la ansiedad y los síntomas de depresión, mejora la autoestima, el sueño, la atención y la memoria.</li>
      <li><b>Sociales</b>: favorece la relación con otras personas, el trabajo en equipo y la integración.</li></ul>
      <p>El ejercicio libera endorfinas, serotonina y una proteína, el BDNF, que favorece la plasticidad del cerebro. Por eso se dice que <mark>moverse es bueno para aprender</mark>: los alumnos activos suelen tener mejor atención en clase.</p>`,
      svg: B.estrella("Beneficios de la condición física", "Beneficios", ["Corazón", "Metabolismo", "Huesos", "Músculos", "Mente", "Relaciones"]),
      video: { id: "PXvz8zyuob0", titulo: "Los beneficios del ejercicio para tu cerebro. Wendy Suzuki, neurocientífica", canal: "AprendemosJuntos", vistas: 725993 },
    },
    {
      h: "Recomendaciones y sedentarismo",
      html: `<p>La Organización Mundial de la Salud (2020) recomienda a los adolescentes de 5 a 17 años:</p>
      <ul><li>Una media de <b>60 minutos diarios</b> de actividad física moderada a vigorosa, sobre todo aeróbica.</li>
      <li>Actividades <b>vigorosas</b> y de <b>fortalecimiento muscular y óseo</b> al menos <b>3 días por semana</b>.</li>
      <li><b>Limitar el tiempo sedentario</b>, en especial el de pantallas recreativas.</li></ul>
      <p>A partir de los 18 años, la recomendación pasa a 150-300 minutos semanales de actividad moderada (o 75-150 de vigorosa) y fuerza 2 días por semana.</p>
      <p>El <b>sedentarismo</b> no es solo «no hacer deporte»: es pasar mucho tiempo sentado o tumbado despierto con muy poco gasto. Es un factor de riesgo independiente: una persona que entrena una hora pero pasa diez sentada sigue teniendo riesgos. La solución es doble: cumplir las recomendaciones de actividad e <b>interrumpir el tiempo sentado</b> cada 30-60 minutos con un poco de movimiento.</p>`,
      svg: B.barras("Recomendaciones de actividad física de la OMS", [["Adolescentes", 420], ["Adultos (mín.)", 150], ["Adultos (ideal)", 300]], { t: "Minutos por semana", unidad: " min" }),
    },
    {
      h: "La resistencia y las vías energéticas",
      html: `<p>La <b>resistencia</b> es la capacidad de mantener un esfuerzo durante el mayor tiempo posible o de recuperarse rápido tras él. Depende de cómo obtienen energía los músculos (las <b>vías energéticas</b>):</p>
      <ul><li><b>Anaeróbica aláctica</b> (fosfocreatina): esfuerzos máximos de hasta unos 10 segundos, como un sprint o un salto.</li>
      <li><b>Anaeróbica láctica</b> (glucólisis sin oxígeno): esfuerzos muy intensos de 10 segundos a 2 minutos, como un 400 m. Produce lactato y una fatiga rápida.</li>
      <li><b>Aeróbica</b>: utiliza oxígeno para obtener energía de los hidratos de carbono y las grasas; domina en esfuerzos de más de 2-3 minutos de intensidad moderada.</li></ul>
      <p>Las tres vías funcionan a la vez, pero predomina una u otra según la intensidad y la duración. De ahí salen la <b>resistencia aeróbica</b>, base de la salud, y la <b>resistencia anaeróbica</b>, propia de deportes intermitentes.</p>
      <p>El indicador clave de la capacidad aeróbica es el <b>VO₂ máx</b>, el máximo de oxígeno que el cuerpo puede consumir por minuto y kilo. Se estima con pruebas como el Course Navette.</p>`,
      svg: vias,
    },
    {
      h: "Métodos para entrenar la resistencia",
      html: `<p>Los métodos se dividen en <b>continuos</b> (sin pausas) y <b>fraccionados</b> (con pausas):</p>
      <ul><li><b>Carrera continua</b>: correr, nadar o pedalear a ritmo uniforme entre 20 y 60 minutos en zona 2-3. Es la base y la más adecuada para empezar.</li>
      <li><b>Fartlek</b>: carrera continua con cambios de ritmo libres, aprovechando el terreno (subidas, bajadas). Es variado y motivador.</li>
      <li><b>Entrenamiento interválico</b>: series de esfuerzo intenso (por ejemplo, 6 × 2 minutos al 85 %) con recuperaciones incompletas. Mejora mucho el VO₂ máx en poco tiempo.</li>
      <li><b>HIIT</b> (entrenamiento interválico de alta intensidad): esfuerzos muy cortos y muy intensos (20-40 s) con pausas breves. Es eficaz pero exige una base previa y buena técnica.</li>
      <li><b>Circuitos</b>: estaciones de ejercicios encadenados que combinan resistencia y fuerza.</li></ul>
      <p>Una semana equilibrada para un estudiante puede combinar dos días de trabajo continuo, uno de fartlek o intervalos y el deporte que practique. La regla de oro es la <mark>polarización</mark>: la mayor parte del tiempo, suave; una parte pequeña, intensa.</p>`,
      svg: B.rejilla("Métodos de entrenamiento de la resistencia", ["Método", "Intensidad", "Duración"], [["Continuo", "zona 2-3", "20-60 min"], ["Fartlek", "variable", "25-45 min"], ["Intervalos", "80-90 %", "series 1-4 min"], ["HIIT", "> 90 %", "20-40 s"]], { t: "Continuos y fraccionados" }),
      video: { id: "WvUGVxgMolc", titulo: "El infernal primer test 'Course Navette' para el Atlético de Madrid", canal: "Chema Garcia", vistas: 1676729 },
    },
    {
      h: "La fuerza y sus tipos",
      html: `<p>La <b>fuerza</b> es la capacidad de vencer o soportar una resistencia mediante la contracción muscular. Según cómo se manifiesta, se distinguen:</p>
      <ul><li><b>Fuerza máxima</b>: la mayor tensión que un músculo puede producir (levantar el máximo peso una vez).</li>
      <li><b>Fuerza explosiva o potencia</b>: aplicar fuerza a gran velocidad (saltar, lanzar, arrancar en un sprint).</li>
      <li><b>Fuerza resistencia</b>: mantener esfuerzos de fuerza moderada muchas veces o mucho tiempo (remar, escalar, una plancha).</li></ul>
      <p>Según el tipo de contracción, la fuerza puede ser <b>isotónica</b> o dinámica (el músculo cambia de longitud: concéntrica cuando se acorta y excéntrica cuando se alarga frenando) o <b>isométrica</b> o estática (sin movimiento, como en la plancha).</p>
      <p>La fuerza es esencial para la salud: protege las articulaciones, mejora la postura, aumenta la densidad ósea y el metabolismo, y reduce el riesgo de lesiones en otros deportes. La creencia de que entrenar fuerza en la adolescencia «frena el crecimiento» es <mark>falsa</mark> si se hace con buena técnica, cargas adecuadas y supervisión.</p>`,
      svg: fuerzas,
      video: { id: "IppF3VG4zlE", titulo: "¿A qué edad empezar en el gimnasio? Todo sobre el entrenamiento de fuerza en niños", canal: "Powerexplosive", vistas: 475010 },
    },
    {
      h: "Métodos para entrenar la fuerza",
      html: `<p>Para jóvenes que empiezan, el orden recomendado es: primero <b>técnica</b> con el propio peso, después cargas ligeras y, poco a poco, cargas mayores. Los métodos más habituales son:</p>
      <ul><li><b>Autocargas</b>: sentadillas, flexiones, dominadas, zancadas, planchas. No necesitan material.</li>
      <li><b>Circuito</b>: 6-10 ejercicios de distintos grupos musculares encadenados, con 30-45 s de trabajo y pausas cortas. Mejora la fuerza resistencia.</li>
      <li><b>Series y repeticiones</b>: con gomas, balones medicinales, mancuernas o barras. Para fuerza resistencia, 12-20 repeticiones con cargas ligeras; para ganar fuerza, 6-12 con cargas moderadas.</li>
      <li><b>Multisaltos y lanzamientos</b>: para la fuerza explosiva, siempre tras un buen calentamiento y con pocas repeticiones de calidad.</li></ul>
      <p>Las claves de seguridad son: calentar, controlar el movimiento (sobre todo la fase excéntrica), mantener la espalda neutra, <b>respirar</b> (soltar el aire en el esfuerzo, sin bloquearlo), no llegar al fallo muscular al empezar y dejar 48 horas entre sesiones intensas del mismo grupo muscular.</p>`,
      svg: B.flujo("Progresión segura en el entrenamiento de fuerza", ["Aprender la técnica sin carga", "Autocargas y gomas", "Circuitos de 12-20 repeticiones", "Cargas moderadas 6-12 repeticiones", "Potencia: saltos y lanzamientos"], { t: "Progresión en fuerza" }),
    },
    {
      h: "La velocidad",
      html: `<p>La <b>velocidad</b> es la capacidad de realizar acciones motrices en el menor tiempo posible. Tiene varias manifestaciones:</p>
      <ul><li><b>Velocidad de reacción</b>: tiempo entre un estímulo (un disparo, un pase) y el inicio de la respuesta.</li>
      <li><b>Velocidad gestual</b>: realizar un movimiento aislado muy rápido (un golpe de raqueta, un lanzamiento).</li>
      <li><b>Velocidad de desplazamiento</b>: recorrer una distancia en el menor tiempo.</li>
      <li><b>Agilidad</b>: cambiar de dirección y de ritmo con rapidez y control, muy importante en los deportes de equipo.</li></ul>
      <p>La velocidad depende mucho del sistema nervioso y del tipo de fibras musculares, por lo que es la capacidad más condicionada por la genética. Aun así, se puede mejorar con <b>técnica de carrera</b>, fuerza explosiva y juegos de reacción.</p>
      <p>Se entrena con esfuerzos <b>muy cortos</b> (menos de 10 segundos), al máximo, y con <b>recuperaciones completas</b> (1 minuto por cada 10 metros, aproximadamente). Si hay fatiga, ya no se entrena la velocidad sino la resistencia. Por eso se coloca al principio de la parte principal, tras calentar.</p>
      <p>Los juegos de persecución, los relevos y las salidas desde posiciones distintas (sentado, tumbado, de espaldas) son formas motivadoras de entrenar la reacción y la aceleración en clase, porque mantienen la intensidad máxima y la atención sin que se note el esfuerzo.</p>`,
      svg: B.cajas("Manifestaciones de la velocidad", [["Reacción", "responder al|estímulo"], ["Gestual", "un gesto|rápido"], ["Desplazamiento", "ir de A a B|lo antes posible"], ["Agilidad", "cambiar de|dirección"]], { t: "Velocidad" }),
    },
    {
      h: "La flexibilidad",
      html: `<p>La <b>flexibilidad</b> es la capacidad de realizar movimientos con la máxima amplitud. Depende de la <b>movilidad articular</b> (la forma de las articulaciones) y de la <b>elasticidad muscular</b> (lo que se pueden alargar músculos y tendones). Es la única capacidad que se pierde desde la infancia si no se trabaja, y suele ser mayor en las chicas.</p>
      <p>Hay varios métodos para mejorarla:</p>
      <ul><li><b>Estiramientos estáticos</b>: llevar el músculo a una posición de tensión moderada, sin dolor, y mantenerla 20-30 segundos. Mejor en la vuelta a la calma o en sesiones específicas.</li>
      <li><b>Estiramientos dinámicos</b>: movimientos controlados que llevan la articulación a su amplitud (balanceos, círculos). Adecuados para el calentamiento.</li>
      <li><b>Facilitación neuromuscular propioceptiva (FNP)</b>: estirar, contraer el músculo contra resistencia unos segundos, relajar y estirar un poco más. Muy eficaz, pero con compañero y cuidado.</li></ul>
      <p>Un exceso de flexibilidad sin fuerza (<b>hiperlaxitud</b>) también es un riesgo, porque las articulaciones quedan poco estables. Lo ideal es un <mark>equilibrio entre movilidad y control</mark>, que trabajan muy bien el yoga y el pilates.</p>`,
      svg: B.comparar("Estiramientos estáticos frente a dinámicos", ["Estáticos", ["posición mantenida", "20-30 segundos", "vuelta a la calma", "más amplitud"]], ["Dinámicos", ["movimiento controlado", "8-12 repeticiones", "calentamiento", "activan"]]),
      video: { id: "WxyniPKYVb0", titulo: "¿Vale la pena estirar?", canal: "DR LA ROSA", vistas: 334385 },
    },
    {
      h: "La composición corporal",
      html: `<p>La <b>composición corporal</b> es la proporción de los distintos tejidos del cuerpo: masa grasa y masa libre de grasa (músculo, hueso, órganos, agua). Es un componente de la condición física saludable porque un exceso de grasa, sobre todo en el abdomen, se asocia a enfermedades cardiovasculares y metabólicas.</p>
      <p>Para estimarla se usan varios indicadores:</p>
      <ul><li><b>Índice de masa corporal (IMC)</b> = peso (kg) / talla² (m). En adolescentes se interpreta con tablas por edad y sexo (percentiles), no con los valores de adultos.</li>
      <li><b>Perímetro de cintura</b> y relación cintura/talla: si la cintura supera la mitad de la altura, aumenta el riesgo.</li>
      <li><b>Pliegues cutáneos</b> y <b>bioimpedancia</b>, que estiman el porcentaje de grasa.</li></ul>
      <p>El IMC tiene límites: no distingue músculo de grasa, y una persona muy musculada puede dar «sobrepeso». Además, el cuerpo es diverso: hay formas y tamaños saludables muy distintos. El objetivo no es un cuerpo «ideal» de redes sociales, sino <mark>sentirse bien, moverse y comer de forma equilibrada</mark>. Obsesionarse con el peso puede derivar en trastornos de la conducta alimentaria.</p>`,
      svg: B.rejilla("Indicadores de composición corporal", ["Indicador", "Qué mide", "Límite"], [["IMC", "peso/talla²", "no ve músculo"], ["Cintura/talla", "grasa abdominal", "< 0,5"], ["Pliegues", "grasa bajo piel", "requiere técnica"], ["Bioimpedancia", "% grasa", "agua, hora"]], { t: "Medir sin obsesionarse" }),
    },
    {
      h: "Valorar la condición física",
      html: `<p>Para conocer tu condición física se usan <b>pruebas</b> estandarizadas. Una batería muy utilizada con adolescentes es la ALPHA-Fitness, con pruebas sencillas y fiables:</p>
      <ul><li><b>Resistencia</b>: Course Navette (20 m de ida y vuelta al ritmo de pitidos cada vez más rápidos) o test de Cooper (máxima distancia en 12 minutos).</li>
      <li><b>Fuerza</b>: salto horizontal a pies juntos (tren inferior), dinamometría manual (prensión), flexiones o plancha (fuerza resistencia).</li>
      <li><b>Velocidad-agilidad</b>: 4 × 10 m con cambios de sentido.</li>
      <li><b>Flexibilidad</b>: sentarse y alcanzar (<i>sit and reach</i>).</li>
      <li><b>Composición corporal</b>: IMC y perímetro de cintura.</li></ul>
      <p>Para que una prueba sea útil debe ser <b>válida</b> (mide lo que dice medir), <b>fiable</b> (da resultados parecidos si se repite) y hacerse siempre en las <b>mismas condiciones</b>. Los resultados se comparan con baremos de tu edad, pero lo más importante es la comparación contigo mismo a lo largo del tiempo.</p>`,
      svg: B.rejilla("Batería de pruebas de condición física", ["Capacidad", "Prueba"], [["Resistencia", "Course Navette"], ["Fuerza inferior", "salto horizontal"], ["Fuerza superior", "dinamometría"], ["Agilidad", "4 × 10 m"], ["Flexibilidad", "sit and reach"]], { t: "Mide tu punto de partida" }),
    },
    {
      h: "Factores que influyen y vida activa",
      html: `<p>La condición física depende de factores que no controlamos y de otros que sí:</p>
      <ul><li><b>No modificables</b>: herencia genética, edad, sexo y maduración. En la adolescencia hay grandes diferencias entre personas de la misma edad por el momento del estirón.</li>
      <li><b>Modificables</b>: el entrenamiento, la actividad diaria, la alimentación, el descanso, el tabaco, el alcohol y otras drogas.</li></ul>
      <p>Los hábitos se refuerzan entre sí: quien duerme bien rinde mejor; quien se mueve duerme mejor. El tabaco reduce la capacidad de la sangre para transportar oxígeno y el alcohol empeora la recuperación y el sueño.</p>
      <p>La mejor estrategia para mantener la condición física toda la vida es encontrar <b>actividades que disfrutes</b>: un deporte, bailar, la montaña, la bici, el gimnasio. La motivación que nace del placer y del sentirse competente (motivación intrínseca) dura mucho más que la que depende de premios o de la imagen. Y recuerda: <mark>cualquier movimiento suma</mark>, desde subir escaleras hasta ir andando al instituto.</p>`,
      svg: B.comparar("Factores de la condición física", ["No modificables", ["genética", "edad", "sexo", "maduración"]], ["Modificables", ["entrenamiento", "actividad diaria", "alimentación", "descanso y drogas"]]),
    },
  ],
  figura: {
    titulo: "Condición física y salud en cuatro ideas",
    items: [["Resistencia", "VO₂ máx", "continuo, fartlek", "e intervalos"], ["Fuerza", "3 días/sem.", "técnica primero,", "carga después"], ["Flexibilidad", "20-30 s", "estático al final,", "dinámico al inicio"], ["Salud", "60 min/día", "y menos tiempo", "sentado"]],
  },
  video: { id: "r5hxmJi221s", titulo: "Falta de ejercicio físico: peligroso para el cuerpo y la cabeza", canal: "DW Español", vistas: 318607 },
  quiz: [
    ["Las capacidades físicas básicas son…", ["equilibrio, ritmo, agilidad y coordinación", "resistencia, fuerza, velocidad y flexibilidad", "fuerza, técnica, táctica y estrategia", "aeróbica y anaeróbica"], 1, "Las coordinativas son otro grupo."],
    ["¿Cuál NO es un componente de la condición física saludable?", ["capacidad cardiorrespiratoria", "fuerza muscular", "velocidad de reacción", "composición corporal"], 2, "La velocidad se asocia más al rendimiento."],
    ["La OMS recomienda a los adolescentes una media diaria de…", ["30 min", "60 min de actividad moderada-vigorosa", "2 horas de fuerza", "10.000 pasos sin más"], 1, "Más fuerza 3 días por semana."],
    ["El sedentarismo es…", ["no competir", "pasar mucho tiempo sentado o tumbado despierto con poco gasto", "dormir 9 horas", "andar despacio"], 1, "Es un factor de riesgo independiente."],
    ["En un sprint de 8 segundos predomina la vía…", ["aeróbica", "anaeróbica láctica", "anaeróbica aláctica", "grasa"], 2, "Fosfocreatina."],
    ["En un 400 m predomina la vía…", ["aláctica", "anaeróbica láctica", "aeróbica", "ninguna"], 1, "Entre 10 s y 2 min."],
    ["El VO₂ máx es…", ["la frecuencia cardiaca máxima", "el máximo de oxígeno consumido por minuto y kilo", "el volumen de los pulmones", "la fuerza máxima"], 1, "Indicador de capacidad aeróbica."],
    ["El fartlek es…", ["carrera con cambios de ritmo libres", "estiramiento con compañero", "test de flexibilidad", "series de fuerza"], 0, "Significa «juego de velocidad» en sueco."],
    ["La regla de la polarización dice que…", ["todo debe ser intenso", "la mayor parte del entrenamiento es suave y una parte pequeña intensa", "solo hay que hacer HIIT", "se entrena un día al mes"], 1, "Así se acumula volumen sin agotarse."],
    ["Mantener una plancha es fuerza…", ["isotónica concéntrica", "isométrica", "excéntrica", "explosiva"], 1, "Sin movimiento."],
    ["Un salto vertical es sobre todo fuerza…", ["máxima", "explosiva", "resistencia", "isométrica"], 1, "Fuerza a gran velocidad."],
    ["Entrenar fuerza en la adolescencia con buena técnica…", ["frena el crecimiento", "es seguro y beneficioso", "está prohibido", "solo sirve a chicos"], 1, "Mejora huesos y previene lesiones."],
    ["Al hacer fuerza conviene…", ["bloquear el aire", "soltar el aire en el esfuerzo", "no respirar", "respirar solo al final"], 1, "Evita subidas bruscas de tensión."],
    ["La velocidad se entrena con…", ["esfuerzos cortos, máximos y recuperación completa", "carrera de 40 min", "series con fatiga", "estiramientos"], 0, "Con fatiga ya no es velocidad."],
    ["La capacidad que más depende de la genética es…", ["la flexibilidad", "la velocidad", "la resistencia aeróbica", "la fuerza resistencia"], 1, "Sistema nervioso y fibras."],
    ["Un estiramiento estático se mantiene unos…", ["2 segundos", "20-30 segundos", "5 minutos", "1 hora"], 1, "Sin dolor."],
    ["La FNP combina…", ["correr y saltar", "estirar, contraer contra resistencia y volver a estirar", "pesas y carrera", "respiración y meditación"], 1, "Facilitación neuromuscular propioceptiva."],
    ["El IMC se calcula como…", ["talla / peso", "peso / talla²", "peso × talla", "cintura / cadera"], 1, "En kg/m²."],
    ["La prueba que estima la resistencia aeróbica es…", ["sit and reach", "Course Navette", "salto horizontal", "dinamometría"], 1, "Ida y vuelta con pitidos."],
    ["Una prueba fiable es la que…", ["siempre da el mismo resultado si se repite en igualdad de condiciones", "es fácil", "mide la fuerza", "da notas altas"], 0, "Reproducibilidad."],
  ],
  examen: [
    ["Un jugador de fútbol hace sprints de 5 s y trota entre ellos. Su deporte combina sobre todo las vías…", ["solo aeróbica", "aláctica y aeróbica", "solo láctica", "ninguna"], 1, "Esfuerzos intermitentes."],
    ["Una alumna de 1,60 m y 52 kg tiene un IMC de…", ["20,3", "32,5", "18,1", "25,0"], 0, "52 / 2,56 ≈ 20,3."],
    ["Un chico con cintura de 92 cm y talla de 170 cm tiene un índice cintura/talla…", ["por debajo de 0,5", "por encima de 0,5", "igual a 1", "no se puede calcular"], 1, "92 / 170 ≈ 0,54."],
    ["Para mejorar la velocidad, ¿qué pausa conviene entre series de 30 m?", ["10 s", "unos 3 minutos", "ninguna", "20 minutos"], 1, "Recuperación completa: ~1 min por cada 10 m."],
    ["Para un principiante, el método de resistencia más indicado es…", ["HIIT diario", "carrera continua suave", "series al 100 %", "test de Cooper semanal"], 1, "Crea la base aeróbica."],
    ["¿Qué afirmación sobre la flexibilidad es correcta?", ["Mejora sola con la edad", "Se pierde desde la infancia si no se trabaja", "Cuanta más, siempre mejor", "No influye en la salud"], 1, "Por eso hay que mantenerla."],
    ["Una persona entrena 1 h al día pero está 10 h sentada. Según la evidencia…", ["no tiene ningún riesgo", "es activa pero también sedentaria", "es sedentaria e inactiva", "debe dejar de entrenar"], 1, "Conviene interrumpir el tiempo sentado."],
    ["Una prueba que mide lo que dice medir es…", ["fiable", "válida", "objetiva", "rápida"], 1, "Validez."],
  ],
  feynman: ["Qué diferencia hay entre condición física orientada a la salud y al rendimiento", "Qué recomienda la OMS a los adolescentes y por qué el sedentarismo es un riesgo propio", "Cómo funcionan las tres vías energéticas", "Qué métodos sirven para entrenar la resistencia y la fuerza", "Por qué la velocidad necesita recuperaciones completas", "Cómo se valora la condición física con pruebas válidas y fiables"],
  mapa: ["CONDICIÓN FÍSICA Y SALUD", [["Salud", "OMS · beneficios · sedentarismo"], ["Resistencia", "vías · continuo · intervalos"], ["Fuerza y velocidad", "tipos · métodos · seguridad"], ["Flexibilidad y medida", "estiramientos · IMC · pruebas"]]],
  tarjetas: [
    ["Condición física", "Capacidades para hacer actividad física con eficacia y sin fatiga excesiva."],
    ["Condición física saludable", "Cardiorrespiratoria, fuerza, flexibilidad y composición corporal."],
    ["OMS 5-17 años", "60 min diarios moderada-vigorosa; vigorosa y fuerza 3 días/semana."],
    ["Sedentarismo", "Mucho tiempo sentado despierto con poco gasto."],
    ["Vía aláctica", "Esfuerzos máximos de hasta ~10 s."],
    ["Vía láctica", "Esfuerzos muy intensos de 10 s a 2 min."],
    ["Vía aeróbica", "Esfuerzos largos y moderados con oxígeno."],
    ["VO₂ máx", "Máximo consumo de oxígeno: capacidad aeróbica."],
    ["Fuerza explosiva", "Aplicar fuerza a gran velocidad."],
    ["Velocidad", "Esfuerzos < 10 s y recuperación completa."],
    ["Flexibilidad", "Movilidad articular + elasticidad muscular."],
    ["Prueba fiable y válida", "Repetible y que mide lo que dice medir."],
  ],
  ejemplos: [
    ["Calcula el IMC de un alumno de 1,75 m y 68 kg e interprétalo.", ["Talla² = 1,75 × 1,75 = 3,06 m².", "IMC = 68 / 3,06 ≈ 22,2 kg/m².", "En adolescentes se interpreta con tablas de percentiles; a esta edad suele estar en rango saludable."], "IMC ≈ 22,2: rango normal (comprobar con percentiles)."],
    ["Calcula el índice cintura/talla de una alumna con 70 cm de cintura y 165 cm de talla.", ["Índice = 70 / 165.", "≈ 0,42.", "Es menor que 0,5: bajo riesgo."], "0,42: sin riesgo por grasa abdominal."],
    ["Diseña una sesión de fartlek de 30 minutos.", ["10 min de carrera suave y movilidad.", "15 min alternando: 1 min rápido en llano, 2 min suave; subidas a ritmo alegre; un tramo de 3 min a ritmo medio.", "5 min de trote muy suave y estiramientos."], "Calentamiento, 15 min de cambios de ritmo y vuelta a la calma."],
    ["Organiza un circuito de fuerza resistencia para la clase.", ["8 estaciones: sentadilla, flexión, plancha, zancada, remo con goma, puente de glúteo, abdominal crunch, saltos a la comba.", "30 s de trabajo y 30 s de cambio; 2-3 vueltas.", "Técnica controlada y sin llegar al fallo."], "8 estaciones × 30 s × 3 vueltas."],
    ["Propón una sesión de velocidad para un equipo de baloncesto.", ["Calentamiento de 15 min con técnica de carrera (skipping, talones).", "6 × 15 m de salida reactiva a una señal, con 1,5 min de pausa.", "4 × 4 × 5 m de cambios de dirección con 2 min de pausa; termina con juego suave."], "Esfuerzos de < 5 s, máximos, con pausas completas."],
    ["Interpreta: una alumna pasa de 6 a 8 palieres en el Course Navette en 8 semanas.", ["Ha mejorado dos palieres: más velocidad final de carrera.", "Implica un aumento estimado del VO₂ máx.", "El plan de resistencia ha funcionado; puede mantener la progresión."], "Mejora clara de la capacidad aeróbica."],
  ],
  errores: [
    "Creer que estar en forma es solo tener un cuerpo delgado o musculado.",
    "Pensar que una hora de deporte compensa todo el tiempo sentado del día.",
    "Hacer HIIT o series muy intensas sin una base aeróbica previa.",
    "Entrenar fuerza con mala técnica o bloqueando la respiración.",
    "Hacer estiramientos estáticos largos justo antes de un sprint o un salto.",
    "Juzgar la salud solo por el IMC sin tener en cuenta la masa muscular.",
  ],
  ejercicios: {
    b: [
      ["Define condición física.", "Conjunto de capacidades que permiten realizar actividades físicas con eficacia y sin fatiga excesiva."],
      ["Nombra los componentes de la condición física orientada a la salud.", "Capacidad cardiorrespiratoria, fuerza y resistencia muscular, flexibilidad y composición corporal (y capacidad motora)."],
      ["¿Qué recomienda la OMS a los adolescentes?", "Media de 60 min diarios de actividad moderada-vigorosa, actividades vigorosas y de fuerza 3 días por semana y limitar el tiempo sedentario."],
      ["Cita tres beneficios psicológicos del ejercicio.", "Menos ansiedad, mejor estado de ánimo, más autoestima, mejor sueño, atención y memoria."],
      ["¿Qué vía energética predomina en una carrera de 30 minutos?", "La aeróbica."],
      ["Define fuerza explosiva y da un ejemplo.", "Aplicar fuerza a gran velocidad: saltar, lanzar un balón, la salida de un sprint."],
      ["¿Qué diferencia hay entre contracción isométrica e isotónica?", "En la isométrica el músculo no cambia de longitud (plancha); en la isotónica sí (sentadilla)."],
      ["Nombra cuatro manifestaciones de la velocidad.", "Reacción, gestual, desplazamiento y agilidad."],
      ["¿De qué dos factores depende la flexibilidad?", "De la movilidad articular y de la elasticidad muscular."],
      ["¿Cómo se calcula el IMC?", "Peso en kg dividido entre la talla en metros al cuadrado."],
      ["¿Qué mide el test sit and reach?", "La flexibilidad de la musculatura posterior del muslo y la zona lumbar."],
      ["¿Qué es una prueba fiable?", "La que da resultados parecidos si se repite en las mismas condiciones."],
    ],
    m: [
      ["Explica por qué el sedentarismo es un factor de riesgo independiente.", "Porque el tiempo prolongado sentado altera el metabolismo de la glucosa y las grasas aunque la persona haga ejercicio; hay que cumplir la actividad recomendada y además interrumpir el tiempo sentado."],
      ["Relaciona cada esfuerzo con su vía principal: lanzamiento de peso, 800 m, maratón.", "Lanzamiento: anaeróbica aláctica. 800 m: anaeróbica láctica con aporte aeróbico importante. Maratón: aeróbica."],
      ["Compara carrera continua e interválico.", "Continua: sin pausas, intensidad moderada, base aeróbica y buena para empezar. Interválico: series intensas con pausas, mejora el VO₂ máx en menos tiempo, pero es más exigente."],
      ["Diseña un circuito de 6 estaciones sin material.", "Sentadilla, flexión (rodillas si hace falta), plancha, zancadas alternas, puente de glúteo y saltos de tijera; 40 s de trabajo y 20 s de pausa; 3 vueltas."],
      ["Calcula el IMC de una persona de 1,82 m y 90 kg y comenta por qué puede ser engañoso.", "90 / 3,31 ≈ 27,2. Indicaría sobrepeso, pero si es muy musculada (un jugador de rugby) puede tener poca grasa; conviene completar con cintura/talla o pliegues."],
      ["¿Por qué se colocan los ejercicios de velocidad al principio de la parte principal?", "Porque requieren máxima frescura del sistema nervioso; con fatiga se pierde calidad y el estímulo deja de ser de velocidad."],
      ["Explica el método FNP con un ejemplo de isquiotibiales.", "Con un compañero: estirar la pierna elevada hasta notar tensión, empujar contra la mano del compañero 5-6 s (contracción isométrica), relajar y llevar la pierna un poco más lejos; repetir 2-3 veces."],
      ["Indica tres pautas de seguridad en el entrenamiento de fuerza.", "Calentar, aprender la técnica sin carga, espalda neutra, respirar sin bloquear, cargas progresivas y 48 h entre sesiones intensas del mismo grupo."],
      ["Señala la diferencia entre validez y fiabilidad con un ejemplo.", "Una báscula que siempre marca 2 kg de más es fiable (repite) pero no válida (no mide el peso real)."],
      ["¿Qué hábitos modificables mejoran la condición física además del entrenamiento?", "Actividad diaria (desplazamientos activos), alimentación equilibrada, dormir 8-10 h, no fumar ni beber alcohol."],
      ["Explica qué es la polarización del entrenamiento de resistencia.", "Hacer la mayor parte del volumen a baja intensidad y una pequeña parte (≈ 20 %) a alta intensidad, evitando estar siempre en intensidad media."],
    ],
    a: [
      ["Diseña una semana de actividad que cumpla las recomendaciones de la OMS para un estudiante de 16 años con poco tiempo.", "Ir andando o en bici al instituto (2 × 15 min diarios), Educación Física 2 días, 2 sesiones de 30 min de carrera o deporte, 2 circuitos de fuerza de 20 min y fines de semana con actividad familiar; descansos activos cada hora de estudio."],
      ["Analiza por qué la capacidad cardiorrespiratoria es un buen predictor de salud.", "Refleja el funcionamiento conjunto de corazón, pulmones, sangre y músculos; un VO₂ máx alto se asocia a menos enfermedad cardiovascular, diabetes y mortalidad, y es sensible a los hábitos."],
      ["Un compañero quiere hacer HIIT todos los días para «quemar grasa rápido». Aconséjale con argumentos.", "El HIIT diario no permite recuperar, aumenta el riesgo de lesión y abandono; conviene una base aeróbica, 1-2 sesiones intensas por semana, fuerza 2-3 días, dieta equilibrada y descanso. La pérdida de grasa depende sobre todo del conjunto de hábitos."],
      ["Debate: ¿es el IMC un buen indicador de salud en adolescentes?", "Útil en estudios de población y fácil de medir, pero no distingue músculo y grasa, ni dónde está la grasa, y varía con la maduración; debe interpretarse con percentiles y otros indicadores, sin estigmatizar cuerpos."],
      ["Planifica una batería de pruebas para la clase y explica cómo garantizar su fiabilidad.", "Course Navette, salto horizontal, dinamometría, 4 × 10 m, sit and reach y cintura/talla. Fiabilidad: mismas instalaciones, hora, calentamiento estándar, instrucciones idénticas, dos intentos y registro inmediato."],
      ["Explica la relación entre ejercicio y rendimiento académico.", "El ejercicio aumenta el flujo sanguíneo cerebral, el BDNF y la neurogénesis en el hipocampo, mejora el sueño y el ánimo; los alumnos activos muestran mejor atención y memoria, aunque el ejercicio no sustituye al estudio."],
      ["Una alumna muy flexible se lesiona a menudo el tobillo. Propón un plan.", "Puede tener hiperlaxitud: priorizar fuerza y propiocepción (equilibrio sobre una pierna, superficies inestables, saltos controlados), reducir estiramientos extremos y consultar con un fisioterapeuta."],
      ["Justifica por qué la motivación intrínseca es clave para mantener la condición física toda la vida.", "Porque la actividad que se disfruta y en la que uno se siente competente se mantiene sin premios externos; la que depende de la imagen o de la obligación se abandona cuando desaparece el estímulo."],
    ],
  },
  glosario: [
    ["Condición física", "Capacidades que permiten realizar actividad física con eficacia."],
    ["Capacidades coordinativas", "Coordinación, equilibrio y agilidad, ligadas al sistema nervioso."],
    ["Resistencia", "Capacidad de mantener un esfuerzo el mayor tiempo posible."],
    ["Vía aeróbica", "Producción de energía con oxígeno."],
    ["Vía anaeróbica", "Producción de energía sin oxígeno (aláctica o láctica)."],
    ["VO₂ máx", "Máximo consumo de oxígeno por minuto y kilo."],
    ["Fartlek", "Carrera continua con cambios de ritmo libres."],
    ["HIIT", "Intervalos de alta intensidad con pausas breves."],
    ["Fuerza", "Capacidad de vencer o soportar una resistencia por contracción muscular."],
    ["Contracción isométrica", "Contracción sin cambio de longitud muscular."],
    ["Velocidad", "Capacidad de actuar en el menor tiempo posible."],
    ["Agilidad", "Cambiar de dirección con rapidez y control."],
    ["Flexibilidad", "Capacidad de moverse con la máxima amplitud."],
    ["FNP", "Método de estiramiento con contracción y relajación."],
    ["Composición corporal", "Proporción de masa grasa y masa libre de grasa."],
    ["IMC", "Peso dividido entre la talla al cuadrado."],
    ["Sedentarismo", "Tiempo sentado o tumbado despierto con muy bajo gasto."],
  ],
  situacion: {
    titulo: "Radiografía de la forma física de la clase",
    reto: "El grupo evaluará su condición física saludable con una batería de pruebas, analizará los resultados de forma anónima y propondrá al centro tres medidas para aumentar la actividad física de los estudiantes.",
    pasos: [
      "Aprended la técnica y el protocolo de cada prueba y elaborad una hoja de registro común.",
      "Realizad la batería en dos sesiones, en las mismas condiciones, por parejas que anotan.",
      "Cada alumno compara sus resultados con los baremos y se fija un objetivo personal.",
      "Analizad los datos anónimos del grupo con gráficas (medias, diferencias, relación con la actividad semanal).",
      "Proponed tres medidas para el centro (recreos activos, rutas en bici, pausas activas en clase).",
    ],
    producto: "Un informe con los resultados anónimos y gráficas, una ficha personal de objetivos y una propuesta presentada a la dirección o al consejo escolar.",
    evaluacion: [
      "Las pruebas se ejecutan con protocolos correctos y registros fiables.",
      "El análisis de los datos es riguroso y respeta la privacidad.",
      "Los objetivos personales son realistas y coherentes con los resultados.",
      "Las propuestas para el centro están justificadas y son viables.",
    ],
  },
  familias: [
    "Proponed desplazamientos activos: andar o ir en bici en trayectos cortos.",
    "Pactad tiempos sin pantallas y pausas activas durante las tardes de estudio.",
    "Hablad del cuerpo con respeto, sin comentarios sobre el peso o la imagen.",
    "Buscad juntos una actividad física que le guste de verdad y apoyadla.",
  ],
  saberes: B.SAB("Condición física y salud: componentes de la condición física saludable, beneficios y recomendaciones de actividad física, sedentarismo, vías energéticas, métodos de entrenamiento de resistencia, fuerza, velocidad y flexibilidad, composición corporal, pruebas de valoración y factores de la condición física"),
  ideas: [
    "Aplicar la batería ALPHA-Fitness al inicio y al final del curso.",
    "Medir con pulsómetros la intensidad de distintas actividades de clase.",
    "Analizar mitos sobre fuerza, estiramientos y quema de grasa que circulan en redes.",
    "Diseñar en grupos circuitos de fuerza que los compañeros puedan hacer en casa.",
  ],
  fuentes: [
    B.FUENTES.OMS,
    { t: "Batería ALPHA-Fitness: pruebas de condición física para adolescentes", url: "https://profith.ugr.es/pages/investigacion/recursos/alphafitness" },
    B.FUENTES.WIKI("Condición_física", "Condición física"),
  ],
});
