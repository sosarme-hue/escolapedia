// Educación Física 6º de Primaria: salud, alimentación y descanso. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, corazon, sol, tick } = require("./_pri6b");

// Plato saludable dividido en verduras, cereales y proteínas, con un vaso de agua.
function plato(cx, cy, r = 46) {
  const arco = (a0, a1, c) => { const p = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${c}" fill-opacity=".55" stroke="#fff" stroke-width="2"/>`; };
  return `<circle cx="${cx}" cy="${cy}" r="${r + 6}" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${arco(-Math.PI / 2, Math.PI / 2, "var(--leaf)")}${arco(Math.PI / 2, Math.PI, "#c98a00")}${arco(Math.PI, 1.5 * Math.PI, "var(--red)")}`;
}

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Salud, alimentación y descanso",
  minutos: 50,
  objetivos: ["Comprender los beneficios de la actividad física para la salud", "Conocer cuánta actividad física se recomienda a tu edad", "Relacionar alimentación, hidratación y ejercicio", "Valorar el descanso, el sueño y la buena postura", "Detectar hábitos poco saludables y proponer alternativas"],
  claves: ["salud", "hábitos saludables", "actividad física", "sedentarismo", "dieta mediterránea", "plato saludable", "hidratación", "energía", "descanso", "sueño", "postura", "pantallas"],
  pregunta: {
    texto: "Un chico de tu edad pasa cinco horas al día delante de pantallas, cena tarde, se acuesta a la una y desayuna un bollo con un refresco. ¿Qué le recomendarías?",
    respuesta: "Le recomendaríamos cambiar algunos <mark>hábitos</mark>: moverse al menos <b>60 minutos al día</b>, reducir las pantallas de ocio, desayunar fruta, leche o yogur y pan o cereales integrales, beber agua en vez de refrescos y <b>dormir entre 9 y 12 horas</b>. Ejercicio, alimentación y descanso forman un triángulo: si uno falla, los otros también se resienten.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la salud?</h3><p>Según la Organización Mundial de la Salud (OMS), la <mark>salud</mark> es «un estado de completo bienestar <b>físico</b>, <b>mental</b> y <b>social</b>, y no solamente la ausencia de enfermedad». Es decir, estar sano no es solo no estar enfermo: también es sentirse bien con uno mismo y con los demás.</p><p>La salud depende en parte de factores que no podemos elegir, como la herencia de nuestros padres. Pero en gran medida depende de nuestros <mark>hábitos</mark>: las costumbres que repetimos cada día. Los hábitos saludables más importantes son:</p><p>• Hacer <b>actividad física</b> a diario.<br>• Seguir una <b>alimentación equilibrada</b> y beber agua.<br>• <b>Descansar</b> y dormir lo suficiente.<br>• Cuidar la <b>higiene</b> personal y la <b>postura</b>.<br>• Mantener buenas <b>relaciones</b> con los demás y gestionar las emociones.<br>• Evitar las sustancias perjudiciales, como el tabaco o el alcohol.</p><p>Los hábitos que adquieres ahora, a tu edad, son los que probablemente mantendrás de adulto. Por eso es tan importante empezar pronto.</p>`,
      svg: svg("El triángulo de la salud: actividad física, alimentación y descanso", `${tit("El triángulo de la salud")}<path d="M130 62 L190 128 L70 128 Z" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2.5"/>${corazon(130, 108, 1.2)}${cj(80, 34, 100, 26, "moverse", COL.naranja)}${cj(4, 126, 100, 26, "comer bien", COL.verde)}${cj(156, 126, 100, 26, "descansar", COL.azul)}${tx(130, 176, "físico · mental · social", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>Los beneficios de la actividad física</h3><p>Hacer <mark>actividad física</mark> de forma regular tiene beneficios para todo el organismo:</p><p>• <b>Corazón y pulmones</b>: el corazón se hace más fuerte y bombea más sangre con menos esfuerzo; los pulmones aprovechan mejor el oxígeno.<br>• <b>Huesos y músculos</b>: se vuelven más fuertes y resistentes. A tu edad, el ejercicio ayuda a crecer con huesos sanos.<br>• <b>Peso</b>: ayuda a mantener un peso adecuado y previene la obesidad.<br>• <b>Mente</b>: mejora la concentración, la memoria y el rendimiento escolar. Libera sustancias que producen bienestar y reduce el estrés y la ansiedad.<br>• <b>Sueño</b>: duermes mejor y más profundamente.<br>• <b>Relaciones</b>: haces amigos, aprendes a cooperar y a respetar normas.<br>• <b>Prevención</b> de enfermedades como la diabetes o las del corazón en la edad adulta.</p><p>Lo contrario de la actividad física es el <mark>sedentarismo</mark>: pasar mucho tiempo sentado o tumbado, sin moverse. Es uno de los grandes problemas de salud actuales, y se relaciona con el exceso de tiempo frente a las pantallas.</p>`,
      svg: svg("Beneficios de la actividad física para el cuerpo y la mente", `${tit("Moverse es salud")}${nino(40, 158, { pose: "corre", s: 1.2 })}${filas([["corazón", "más fuerte", COL.rojo], ["huesos", "más sanos", COL.gris], ["mente", "concentración", COL.morado], ["sueño", "más profundo", COL.azul], ["amigos", "cooperar", COL.verde]], 50, 25, { x: 92, wa: 64, wb: 90 })}`),
      video: vid("95cKCwMGrmg"),
    },
    {
      html: `<h3>¿Cuánto hay que moverse?</h3><p>Las autoridades sanitarias, como la OMS y el Ministerio de Sanidad, recomiendan a los niños y adolescentes de 5 a 17 años:</p><p>• Hacer <b>al menos 60 minutos al día</b> de actividad física <b>moderada o vigorosa</b>. Se pueden sumar en varios ratos: el recreo, ir al colegio andando, la clase de Educación Física, jugar en el parque, un entrenamiento.<br>• Al menos <b>tres días a la semana</b>, incluir actividades <b>vigorosas</b> (que te hagan sudar y respirar fuerte) y ejercicios que fortalezcan músculos y huesos, como saltar, trepar o correr.<br>• <b>Reducir el tiempo sentado</b>, sobre todo frente a pantallas de ocio: no más de <b>2 horas al día</b>.</p><p>¿Cómo saber la intensidad?</p><p>• <b>Ligera</b>: puedes hablar y cantar sin problema (pasear).<br>• <b>Moderada</b>: puedes hablar, pero no cantar (caminar rápido, montar en bici tranquilo).<br>• <b>Vigorosa</b>: te cuesta decir más de unas pocas palabras seguidas (correr, nadar rápido, jugar un partido).</p><p>Ideas para moverte más: ir andando o en bici al colegio, subir escaleras en vez de usar el ascensor, jugar en la calle o en el parque, apuntarte a un deporte o bailar en casa.</p>`,
      svg: svg("Recomendación: al menos 60 minutos al día de actividad física y como mucho 2 horas de pantallas de ocio", `${tit("Cada día…")}<circle cx="70" cy="96" r="44" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="3"/>${t(70, 96, "60 min", { size: 18, color: COL.verde })}${t(70, 114, "moverse", { size: 11, color: COL.verde })}<circle cx="190" cy="96" r="44" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="3"/>${t(190, 96, "≤ 2 h", { size: 18, color: COL.rojo })}${t(190, 114, "pantallas", { size: 11, color: COL.rojo })}${tx(130, 166, "como mínimo · como máximo", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>Alimentación para crecer y moverse</h3><p>Los alimentos nos dan la <mark>energía</mark> para movernos y los <b>nutrientes</b> para crecer y reparar el cuerpo. Una alimentación equilibrada debe incluir alimentos variados en las cantidades adecuadas.</p><p>Una forma sencilla de conseguirlo es el <b>plato saludable</b>:</p><p>• <b>La mitad del plato</b>: verduras, hortalizas y frutas, de muchos colores.<br>• <b>Un cuarto</b>: cereales, preferiblemente integrales (pan, arroz, pasta) o patata. Dan energía.<br>• <b>Un cuarto</b>: alimentos con proteínas: legumbres, pescado, huevos, frutos secos, carne (mejor blanca). Construyen músculo.<br>• Cocinar con <b>aceite de oliva</b>.<br>• Beber <b>agua</b>.</p><p>La <mark>dieta mediterránea</mark>, típica de España, es una de las más saludables del mundo: mucha fruta, verdura, legumbres, pescado, aceite de oliva y pan, y poca carne roja y pocos dulces.</p><p>Hay que <b>reducir</b> los alimentos ultraprocesados, la bollería, las golosinas, los refrescos azucarados y los snacks salados. No están prohibidos, pero deben ser algo ocasional.</p><p>Y es importante repartir lo que comemos en <b>4 o 5 comidas</b> al día, empezando por un buen <b>desayuno</b>.</p>`,
      svg: svg("Plato saludable: mitad verduras y frutas, un cuarto cereales y un cuarto proteínas, con agua", `${tit("El plato saludable")}${plato(78, 102, 50)}${filas([["½ verduras y fruta", "", COL.verde], ["¼ cereales", "", COL.sol], ["¼ proteínas", "", COL.rojo], ["agua", "", COL.agua]], 64, 26, { x: 148, wa: 104, wb: 4 })}`),
    },
    {
      html: `<h3>Comer antes y después del ejercicio</h3><p>Cuando haces deporte, lo que comes y cuándo lo comes también influye:</p><p>• <b>Antes</b> del ejercicio: no hagas ejercicio intenso justo después de una comida abundante; espera al menos una hora o dos. Si tienes hambre, toma algo ligero que dé energía, como una fruta (un plátano), un yogur o un trozo de pan, una media hora antes. No hagas deporte con el estómago totalmente vacío: podrías marearte.</p><p>• <b>Durante</b> el ejercicio: si dura menos de una hora, basta con beber <b>agua</b>. No hace falta comer nada.</p><p>• <b>Después</b> del ejercicio: es el momento de recuperar. Bebe agua y toma algo que combine hidratos de carbono y proteínas, como un bocadillo, leche con cereales, un yogur con fruta o la comida normal si es la hora.</p><p>Las <b>bebidas energéticas</b> (las que tienen cafeína o taurina) <b>no son adecuadas</b> para niños ni adolescentes: pueden alterar el corazón y el sueño. Tampoco hacen falta las bebidas deportivas, salvo en esfuerzos muy largos: el agua es la mejor opción.</p><p>Los deportistas de élite cuidan mucho su alimentación, pero no toman nada «mágico»: comen comida normal, variada y en cantidad suficiente.</p>`,
      svg: svg("Qué comer antes, durante y después del ejercicio", `${tit("Antes, durante, después")}${columna([["antes: algo ligero (plátano)", COL.sol], ["durante: agua", COL.agua], ["después: agua y bocadillo", COL.verde]], 130, 220, 34, 26, 10)}${cj(30, 140, 200, 28, "bebidas energéticas: ¡NO!", COL.rojo)}`),
    },
    {
      html: `<h3>La hidratación</h3><p>Más de la mitad de nuestro cuerpo es <b>agua</b>. La perdemos continuamente al respirar, al orinar y, sobre todo, al <b>sudar</b>. Cuando hacemos ejercicio, el cuerpo se calienta, y el sudor sirve para refrescarlo. Pero esa agua hay que reponerla: es la <mark>hidratación</mark>.</p><p>Si no bebemos suficiente, aparece la <b>deshidratación</b>, que provoca cansancio, dolor de cabeza, mareo, calambres y baja el rendimiento físico y mental. En los casos graves, con mucho calor, puede producir un <b>golpe de calor</b>, que es peligroso.</p><p>Consejos para hidratarte bien:</p><p>• Bebe agua a lo largo de todo el día, <b>sin esperar a tener sed</b>: la sed ya es una señal de que empiezas a deshidratarte.<br>• Lleva siempre tu <b>botella de agua</b> al colegio y al deporte.<br>• Bebe antes, durante (pequeños sorbos cada 15-20 minutos) y después del ejercicio.<br>• En verano o con mucho calor, bebe más y evita hacer ejercicio en las horas centrales del día.<br>• El color de la orina es una buena pista: si es clarita, estás bien hidratado; si es oscura, necesitas beber más.</p><p>La mejor bebida es el <b>agua</b>. Los zumos y refrescos tienen mucho azúcar.</p>`,
      svg: svg("Color de la orina como pista de hidratación: clara bien hidratado, oscura bebe más", `${tit("¿Bebo suficiente agua?")}${["#fef9c3", "#fde68a", "#fbbf24", "#d97706", "#92400e"].map((c, i) => `<rect x="${24 + i * 44}" y="50" width="36" height="60" rx="6" fill="${c}" stroke="var(--line)"/>`).join("")}${fl(30, 128, 230, 128, "var(--muted)", 2)}${et(50, 146, "bien", 80, { size: 11, color: COL.verde })}${et(210, 146, "¡bebe agua!", 90, { size: 11, color: COL.rojo })}${tx(130, 170, "bebe antes de tener sed", 220, { weight: 700, color: COL.azul })}`),
    },
    {
      html: `<h3>El descanso y el sueño</h3><p>El <mark>descanso</mark> es tan importante como el ejercicio y la alimentación. Mientras dormimos, el cuerpo y el cerebro trabajan:</p><p>• Se <b>reparan</b> los músculos y los tejidos.<br>• Se libera la <b>hormona del crecimiento</b>: ¡se crece sobre todo durmiendo!<br>• El cerebro <b>ordena y guarda</b> lo que has aprendido durante el día.<br>• Se recupera la energía y se refuerzan las defensas.</p><p>Los niños de 6 a 12 años necesitan dormir entre <b>9 y 12 horas</b> cada noche. Si duermes poco, al día siguiente te cuesta concentrarte, estás de peor humor, rindes menos en el colegio y en el deporte y tienes más riesgo de lesionarte.</p><p>Consejos para dormir bien:</p><p>• Acuéstate y levántate a la <b>misma hora</b> cada día, también, en lo posible, el fin de semana.<br>• <b>Apaga las pantallas</b> al menos una hora antes de dormir: su luz engaña al cerebro y le hace creer que es de día.<br>• No tengas el móvil en la habitación por la noche.<br>• Cena algo ligero y no muy tarde.<br>• Haz algo relajante antes de dormir: leer, una ducha templada, respirar despacio.<br>• Que la habitación esté oscura, en silencio y fresca.</p>`,
      svg: svg("Horas de sueño recomendadas para niños de 6 a 12 años y consejos", `${tit("Dormir 9-12 horas")}<path d="M60 60 a34 34 0 1 0 34 46 a26 26 0 1 1 -34 -46 Z" fill="#fde68a" stroke="#c98a00" stroke-width="2"/>${t(108, 58, "z", { size: 14, color: COL.azul })}${t(120, 46, "z", { size: 17, color: COL.azul })}${filas([["misma hora", "cada día", COL.morado], ["sin pantallas", "1 h antes", COL.rojo], ["cena ligera", "y pronto", COL.verde]], 76, 30, { x: 146, wa: 96, wb: 90, dos: true })}`),
      video: vid("TdtAnhk9NRs"),
    },
    {
      html: `<h3>La postura correcta</h3><p>Pasamos muchas horas sentados en el colegio y en casa. Una <mark>mala postura</mark> mantenida durante mucho tiempo puede causar dolores de espalda y cuello. Por eso es importante aprender a colocarse bien:</p><p>• <b>Sentado</b>: la espalda apoyada en el respaldo, los pies apoyados en el suelo, las rodillas en ángulo recto y la mesa a la altura de los codos. La pantalla del ordenador a la altura de los ojos. No te encorves sobre el cuaderno.<br>• <b>De pie</b>: el peso repartido entre los dos pies, la espalda recta y la cabeza erguida, como si un hilo tirara de ella hacia arriba.<br>• <b>Al coger peso del suelo</b>: dobla las rodillas, mantén la espalda recta y levanta el objeto con la fuerza de las piernas, pegado al cuerpo.<br>• <b>Con la mochila</b>: llévala con las dos asas, bien ajustada a la espalda, y que no pese más del 10 % de tu peso. Si es mucho, mejor una mochila con ruedas.<br>• <b>Con el móvil</b>: súbelo a la altura de los ojos en lugar de doblar el cuello.</p><p>Es bueno <b>levantarse y moverse</b> un poco cada 30-45 minutos cuando estás sentado mucho rato. Y los ejercicios que fortalecen la espalda y el abdomen ayudan a mantener una buena postura.</p>`,
      svg: svg("Postura correcta: espalda recta al sentarse y rodillas dobladas al coger peso", `${tit("Cuida tu espalda")}${suelo(156)}<rect x="40" y="100" width="44" height="6" fill="#a16207"/><path d="M84 60 V156 M44 106 V156" stroke="#a16207" stroke-width="4"/>${nino(66, 156, { pose: "sentado", s: 1 })}${tick(108, 70)}${nino(190, 156, { pose: "agacha", s: 1 })}<rect x="206" y="138" width="22" height="18" fill="${COL.marron}"/>${tick(236, 70)}${et(66, 172, "espalda apoyada", 110, { size: 10.5, color: COL.verde })}${et(194, 172, "dobla las rodillas", 110, { size: 10.5, color: COL.verde })}`),
    },
    {
      html: `<h3>Pantallas y vida activa</h3><p>Los móviles, las tabletas, los ordenadores y las videoconsolas son herramientas útiles y divertidas, pero su <b>uso excesivo</b> tiene efectos sobre la salud:</p><p>• Más <b>sedentarismo</b>: el tiempo frente a la pantalla es tiempo sin moverse.<br>• Peor <b>sueño</b>, sobre todo si se usan por la noche.<br>• Problemas de <b>vista</b> y de <b>postura</b>.<br>• Menos tiempo para <b>jugar</b> al aire libre y estar con los amigos y la familia.<br>• Dificultad para concentrarse y, a veces, dependencia: no poder dejarlas.</p><p>Algunas ideas para un uso <mark>equilibrado</mark>:</p><p>• Pacta con tu familia un <b>horario</b> de pantallas de ocio, no más de 2 horas al día.<br>• Nada de pantallas durante las <b>comidas</b> ni antes de dormir.<br>• Aplica la regla <b>20-20-20</b>: cada 20 minutos, mira algo a unos 6 metros (20 pies) durante 20 segundos.<br>• Cambia un rato de pantalla por un rato de movimiento: un paseo, la bici, un juego en la calle.<br>• Usa la tecnología para moverte: aplicaciones de baile, retos de pasos, rutas de orientación.</p><p>Recuerda: el mejor plan para la salud es una vida <b>activa</b>, con buena comida, buen descanso y buenos amigos.</p>`,
      svg: svg("Uso equilibrado de pantallas: horario, sin pantallas en comidas y antes de dormir, regla 20-20-20", `${tit("Pantallas con cabeza")}${fichas([["Máx. 2 h", "de ocio al día", COL.rojo], ["Comidas", "sin pantallas", COL.naranja], ["Noche", "apagar 1 h antes", COL.azul], ["20-20-20", "descansa la vista", COL.morado]])}`),
    },
  ],
  figura: {
    titulo: "Salud, alimentación y descanso en ocho ideas",
    svg: rejilla([
      ["Salud", "física, mental, social", COL.verde],
      ["60 minutos", "de movimiento al día", COL.naranja],
      ["Sedentarismo", "evitarlo", COL.gris],
      ["Plato", "½ verdura y fruta", "#15803d"],
      ["Agua", "antes de tener sed", COL.agua],
      ["Dormir", "9-12 horas", COL.azul],
      ["Postura", "espalda recta", COL.marron],
      ["Pantallas", "máx. 2 h de ocio", COL.rojo],
    ], 4, 86, "Resumen de salud, alimentación y descanso"),
  },
  video: vgen("vbueh5nfpC4", "alimentación saludable para niños"),
  ejemplos: [
    { enunciado: "Lucía va andando al cole (15 min ida y 15 vuelta), juega en el recreo 20 min y tiene Educación Física 45 min. ¿Cumple la recomendación hoy?",
      pasos: ["15 + 15 + 20 + 45 = 95 minutos.", "La recomendación es al menos 60 minutos."],
      resultado: "Sí: 95 minutos, más de los 60 recomendados." },
    { enunciado: "Pablo pesa 40 kg. ¿Cuánto debería pesar como máximo su mochila?",
      pasos: ["El máximo recomendado es el 10 % del peso.", "10 % de 40 = 4."],
      resultado: "4 kg como máximo." },
    { enunciado: "Mario se acuesta a las 23:30 y se levanta a las 7:30. ¿Duerme lo suficiente?",
      pasos: ["De 23:30 a 7:30 hay 8 horas.", "A su edad necesita entre 9 y 12."],
      resultado: "No: debería acostarse al menos una hora antes." },
  ],
  errores: [
    "Pensar que estar sano es solo no estar enfermo.",
    "Esperar a tener sed para beber agua.",
    "Tomar bebidas energéticas para rendir más en el deporte.",
    "Usar el móvil en la cama antes de dormir.",
    "Levantar peso del suelo con las piernas rectas y la espalda doblada.",
  ],
  ejercicios: [
    { q: "¿Cómo define la OMS la salud?", sol: "Como un estado de completo bienestar físico, mental y social, no solo la ausencia de enfermedad." },
    { q: "Escribe cuatro beneficios de la actividad física.", sol: "Corazón más fuerte, huesos sanos, mejor concentración, mejor sueño (también peso adecuado y amistades)." },
    { q: "¿Qué es el sedentarismo? ¿Por qué es un problema?", sol: "Pasar mucho tiempo sin moverse; aumenta el riesgo de obesidad y enfermedades." },
    { q: "¿Cuánta actividad física se recomienda a tu edad?", sol: "Al menos 60 minutos al día de actividad moderada o vigorosa." },
    { q: "Describe el plato saludable.", sol: "Mitad verduras y frutas, un cuarto cereales integrales, un cuarto proteínas, aceite de oliva y agua." },
    { q: "¿Qué tomarías antes y después de un partido?", sol: "Antes: algo ligero como un plátano. Después: agua y un bocadillo o yogur con fruta." },
    { q: "Escribe tres síntomas de deshidratación.", sol: "Cansancio, dolor de cabeza, mareo (también calambres)." },
    { q: "¿Cuántas horas debes dormir y qué pasa mientras duermes?", sol: "Entre 9 y 12; se reparan los músculos, se crece y se guarda lo aprendido." },
    { q: "Explica cómo coger un objeto pesado del suelo.", sol: "Doblando las rodillas, con la espalda recta y el objeto pegado al cuerpo." },
    { q: "Propón tres normas familiares para el uso de pantallas.", sol: "Máximo 2 horas de ocio, sin pantallas en las comidas, apagarlas una hora antes de dormir." },
  ],
  quiz: [
    { q: "La salud incluye el bienestar…", o: ["físico, mental y social", "solo mental", "solo físico"], a: 0, e: "Físico, mental y social." },
    { q: "A tu edad se recomienda moverse al menos…", o: ["60 minutos al día", "10 minutos al día", "una hora a la semana"], a: 0, e: "60 minutos al día." },
    { q: "Lo contrario de la actividad física es el…", o: ["deporte", "descanso", "sedentarismo"], a: 2, e: "Sedentarismo." },
    { q: "La mitad del plato saludable son…", o: ["verduras y frutas", "dulces", "carne"], a: 0, e: "Verduras y frutas." },
    { q: "Durante un ejercicio de menos de una hora conviene beber…", o: ["bebida energética", "agua", "refresco"], a: 1, e: "Agua." },
    { q: "Una orina oscura indica que…", o: ["has comido fruta", "necesitas beber más", "estás bien hidratado"], a: 1, e: "Necesitas beber más." },
    { q: "A tu edad hay que dormir…", o: ["6 horas", "15 horas", "9-12 horas"], a: 2, e: "Entre 9 y 12 horas." },
    { q: "La hormona del crecimiento se libera sobre todo…", o: ["durmiendo", "en clase", "comiendo"], a: 0, e: "Durmiendo." },
    { q: "La mochila no debe pesar más del…", o: ["50 % de tu peso", "10 % de tu peso", "100 % de tu peso"], a: 1, e: "10 %." },
    { q: "Las pantallas de ocio, como máximo…", o: ["sin límite", "8 horas al día", "2 horas al día"], a: 2, e: "2 horas al día." },
  ],
  examen: [
    { q: "La dieta típica de España es la…", o: ["dieta mediterránea", "dieta de comida rápida", "dieta polar"], a: 0, e: "Dieta mediterránea." },
    { q: "Las bebidas energéticas para niños son…", o: ["lo mejor para jugar", "obligatorias", "desaconsejables"], a: 2, e: "Desaconsejables." },
    { q: "La regla 20-20-20 sirve para descansar la…", o: ["espalda", "vista", "voz"], a: 1, e: "La vista." },
    { q: "Si puedes hablar pero no cantar, la intensidad es…", o: ["ligera", "moderada", "máxima"], a: 1, e: "Moderada." },
  ],
  feynman: ["Por qué ejercicio, alimentación y descanso forman un triángulo", "Cómo debe ser un plato saludable y qué beber al hacer deporte", "Por qué dormir bien es tan importante y cómo conseguirlo"],
  mapa: mapa("SALUD", "var(--pri)", [
    ["Moverse", "60 min · contra el sedentarismo", COL.naranja],
    ["Comer", "plato saludable · mediterránea", COL.verde],
    ["Hidratarse", "agua antes de la sed", COL.azul],
    ["Descansar", "dormir · postura · pantallas", COL.morado],
  ], 260),
  tarjetas: [
    ["Salud", "Bienestar físico, mental y social."],
    ["Hábito", "Costumbre que repetimos cada día."],
    ["Sedentarismo", "Pasar mucho tiempo sin moverse."],
    ["Plato saludable", "½ verduras y frutas, ¼ cereales, ¼ proteínas."],
    ["Dieta mediterránea", "Fruta, verdura, legumbres, pescado y aceite de oliva."],
    ["Hidratación", "Reponer el agua que pierde el cuerpo."],
    ["Sueño", "9-12 horas a tu edad; reparación y crecimiento."],
    ["Postura", "Forma de colocar el cuerpo; espalda recta."],
  ],
  familias: ["Apuntad durante una semana los minutos de actividad física de cada uno.", "Preparad juntos un plato saludable para la cena.", "Pactad un horario familiar de pantallas y una hora de «apagado».", "Revisad el peso de la mochila con una báscula."],
  profesores: PROF("Educación Física: actividad física y salud; recomendaciones de actividad física; alimentación e hidratación relacionadas con el ejercicio; descanso, sueño y postura; uso responsable de las pantallas; hábitos de vida activa y saludable", ["Diario semanal de actividad física, sueño y pantallas con análisis en clase.", "Taller de desayunos y meriendas saludables para antes del deporte.", "Campaña escolar «Muévete 60» con retos de actividad en el recreo."]),
  fuentes: [RD, { t: "Ministerio de Sanidad: Estilos de vida saludable", url: "https://estilosdevidasaludable.sanidad.gob.es/" }, { t: "OMS: actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }, wiki("Dieta mediterránea", "Dieta_mediterránea")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Leer la etiqueta de un alimento para elegir mejor", "Hacer ejercicio con seguridad cuando hace calor", "Relacionar la actividad física con el bienestar emocional", "Mantener hábitos de higiene y diseñar un plan de vida activa"],
  lectura: { titulo: "El reto de la semana activa", html: `<p>Un lunes, el tutor de sexto propuso un reto: durante una semana, cada alumno apuntaría en una tabla los minutos que se movía, lo que bebía, las horas que dormía y el tiempo que pasaba con pantallas.</p><p>Leo se rio. «Esto lo gano yo», pensó. Jugaba al baloncesto dos tardes por semana.</p><p>Pero el miércoles por la noche, al rellenar la tabla, se llevó una sorpresa. Los días sin entrenamiento apenas llegaba a 20 minutos de movimiento: iba al colegio en coche, en el recreo se quedaba sentado con el móvil de su hermano mayor… y por la tarde, videojuegos. Además, dormía solo siete horas porque se acostaba tardísimo.</p><p>Decidió cambiar algunas cosas. Convenció a su madre para ir andando al colegio. En el recreo empezó a jugar al pañuelo con sus amigos. Dejó el móvil fuera de la habitación a las nueve y media.</p><p>El viernes no solo había superado los 60 minutos diarios: también estaba de mejor humor, se dormía antes y en clase le costaba menos concentrarse.</p><p>—No he ganado el reto —dijo al final—, pero he ganado algo mejor.</p>` },
  tras: {
    "Alimentación para crecer y moverse": [
      ["Aprender a leer una etiqueta", `<p>Los alimentos envasados llevan una <b>etiqueta</b> con mucha información útil. Aprender a leerla te ayuda a elegir mejor:</p><ul><li><b>La lista de ingredientes</b>: aparecen ordenados de <b>más a menos cantidad</b>. Si el azúcar aparece entre los primeros, el producto tiene mucho. Ojo: el azúcar se esconde con otros nombres, como <i>jarabe de glucosa</i>, <i>dextrosa</i> o <i>sacarosa</i>.</li><li><b>La información nutricional</b>: indica la energía (en kilocalorías) y la cantidad de grasas, hidratos de carbono, <b>azúcares</b>, proteínas y <b>sal</b> por cada 100 gramos. Así puedes comparar productos.</li><li><b>Algunos sellos orientativos</b>, como el Nutri-Score (una letra de la A verde a la E roja), dan una idea rápida, pero no sustituyen a leer la etiqueta ni al sentido común.</li></ul><p>Como regla general, conviene que los alimentos del día a día sean <b>poco procesados</b>: fruta, verdura, legumbres, frutos secos, huevos, pescado, cereales integrales. Los <b>ultraprocesados</b> (bollería industrial, refrescos, snacks salados) suelen tener mucho azúcar, sal o grasas de mala calidad, y son para consumir <b>de vez en cuando</b>.</p><p>Un truco: cuantos menos ingredientes y más fácil sea entender la lista, mejor suele ser el alimento.</p>`,
        L6.filas("La etiqueta", [["ingredientes", "de más a menos", cAZ], ["azúcares", "por 100 g", cRO], ["sal", "por 100 g", cNA], ["procesado", "¿cuántos ingredientes?", cMO]])],
    ],
    "La hidratación": [
      ["Ejercicio con calor", `<p>En los días de mucho calor, el cuerpo tiene más dificultades para refrigerarse, y hacer ejercicio puede ser peligroso si no tomamos precauciones. El riesgo más serio es el <b>golpe de calor</b>: la temperatura del cuerpo sube demasiado y aparecen síntomas como dolor de cabeza, mareo, piel muy caliente y roja, náuseas, cansancio extremo o confusión.</p><p>Para prevenirlo:</p><ul><li>Haz ejercicio en las <b>horas más frescas</b>: a primera hora de la mañana o al final de la tarde. Evita las horas centrales del día.</li><li><b>Bebe agua</b> antes, durante y después, aunque no tengas sed.</li><li>Usa <b>gorra</b>, ropa <b>clara y transpirable</b> y <b>protector solar</b>.</li><li>Busca la <b>sombra</b> y baja la intensidad.</li><li>Haz <b>pausas</b> más frecuentes.</li></ul><p>Si alguien se encuentra mal por el calor: llévalo a un lugar fresco y a la sombra, aflójale la ropa, refréscale con agua (paños húmedos en la frente, el cuello y las axilas), dale agua a sorbos si está consciente y <b>avisa a un adulto</b>. Si no mejora, hay que llamar al <b>112</b>.</p>`,
        H6.flujo("Si hace calor", ["horas|frescas", "agua|a menudo", "gorra|y sombra", "pausas|frecuentes"], cNA), ["5AphZCHeaP4", "Consejos para sobrellevar la ola calor y cómo actuar en un golpe de calor", "CANAL ENFERMERO - Consejo General Enfermería", 44176]],
    ],
    "Pantallas y vida activa": [
      ["Moverse para sentirse bien", `<p>La actividad física no solo es buena para el cuerpo: también lo es para la <b>mente</b> y las <b>emociones</b>. Cuando hacemos ejercicio, el cerebro libera sustancias como las <b>endorfinas</b> y la <b>dopamina</b>, que producen sensación de bienestar y alegría.</p><p>Algunos efectos que han comprobado los científicos:</p><ul><li><b>Reduce el estrés</b> y la ansiedad: después de correr o jugar un partido, solemos estar más tranquilos.</li><li><b>Mejora el estado de ánimo</b>: como Leo en la lectura, mucha gente está de mejor humor cuando se mueve.</li><li><b>Ayuda a concentrarse</b> y a aprender: hay estudios que muestran que los alumnos que se mueven en el recreo prestan más atención después en clase.</li><li><b>Mejora la autoestima</b>: al superar retos, aprendes que puedes mejorar con esfuerzo.</li><li><b>Crea amistades</b>: jugar en equipo es una de las mejores maneras de conocer gente y sentirse parte de un grupo.</li></ul><p>Por eso es tan importante que la actividad física sea <b>divertida</b> y que cada persona encuentre la suya: no a todo el mundo le gusta el fútbol, pero seguro que hay algo que te encanta, como bailar, nadar, patinar, escalar o pasear en bici.</p>`,
        H6.rueda("Bienestar", "MENTE ACTIVA", [["menos estrés", cAZ], ["buen humor", cNA], ["concentración", cVE], ["amistad", cMO]])],
    ],
  },
  final: [
    ["Higiene y actividad física", `<p>La higiene también forma parte de una vida saludable, sobre todo cuando hacemos ejercicio:</p><ul><li><b>Ducha después del ejercicio</b>: elimina el sudor y las bacterias, previene malos olores y problemas de piel.</li><li><b>Ropa limpia y adecuada</b>: cómoda, transpirable y de tu talla. Lleva siempre una <b>camiseta de recambio</b> para cambiarte después de clase de Educación Física.</li><li><b>Calzado adecuado</b>: zapatillas deportivas con buena sujeción, bien atadas y con calcetines de algodón. Un calzado inadecuado causa ampollas, esguinces y dolor.</li><li><b>Pies secos</b>: sécalos bien, sobre todo entre los dedos, para evitar hongos. En duchas y piscinas públicas, usa chanclas.</li><li><b>Lavarse las manos</b> antes de comer y después de usar material compartido.</li><li><b>Protección solar</b> en las actividades al aire libre, incluso en días nublados.</li><li><b>Botella propia</b>: no compartas botellas para evitar contagios.</li></ul><p>Cuidar la higiene es una forma de cuidarte a ti mismo y de respetar a los demás.</p>`,
      L6.filas("Higiene", [["ducha", "después del ejercicio", cAZ], ["camiseta", "de recambio", cVE], ["chanclas", "en duchas públicas", cNA], ["botella", "propia", cMO]])],
    ["Mi plan de vida activa", `<p>Llegar a los <b>60 minutos diarios</b> de actividad física es más fácil de lo que parece si los repartes a lo largo del día. Como hizo Leo, puedes diseñar tu propio <b>plan de vida activa</b>:</p><ul><li><b>Transporte activo</b>: ir andando, en bici o en patinete al colegio (si es seguro). ¡Pueden ser 20-30 minutos al día!</li><li><b>Recreo activo</b>: juegos de persecución, comba, pelota, pañuelo.</li><li><b>Educación Física</b> en el colegio.</li><li><b>Actividad extraescolar</b>: un deporte, danza, artes marciales, natación…</li><li><b>Tiempo libre</b>: jugar en el parque, pasear al perro, ayudar en casa, subir escaleras.</li><li><b>Fin de semana en familia</b>: excursiones, bici, piscina, juegos en la playa o en el monte.</li></ul><p>Y no olvides el otro lado: <b>reducir el tiempo sentado</b>. Cada hora de estudio o pantalla, levántate y muévete unos minutos. Guarda el móvil fuera de la habitación por la noche para dormir las <b>9-11 horas</b> recomendadas a tu edad.</p><p>Escribe tu plan, ponlo en un lugar visible y revísalo cada semana. ¡Los pequeños cambios suman!</p>`,
      H6.flujo("Un día activo", ["ir andando|20 min", "recreo|20 min", "EF o deporte|30 min", "parque|20 min"], cVE)],
  ],
  ejemplos: [
    ["En una etiqueta, los ingredientes son: «azúcar, harina, aceite de palma…». ¿Qué te dice?", ["Van de más a menos cantidad.", "El azúcar es el ingrediente principal."], "Es un producto con mucho azúcar: para tomar solo de vez en cuando."],
    ["¿Cómo puede un niño sumar 60 minutos de actividad al día?", ["Repartiéndolos durante el día.", "Ir andando + recreo + juego por la tarde."], "Por ejemplo: 20 min andando, 20 min de recreo y 20 min en el parque."],
  ],
  errores: ["Hacer ejercicio intenso en las horas de más calor sin beber agua.", "Pensar que solo cuenta como actividad física el deporte organizado."],
  ejercicios: [
    ["b", "¿En qué orden aparecen los ingredientes en una etiqueta?", "De más a menos cantidad."],
    ["b", "Escribe tres síntomas del golpe de calor.", "Dolor de cabeza, mareo, piel caliente y roja (náuseas, confusión)."],
    ["b", "¿Qué sustancias libera el cerebro al hacer ejercicio?", "Endorfinas y dopamina."],
    ["b", "¿Por qué hay que usar chanclas en las duchas públicas?", "Para evitar hongos en los pies."],
    ["b", "¿Cuántas horas debe dormir un niño de tu edad?", "Entre 9 y 11 horas."],
    ["m", "Compara dos etiquetas de cereales y di cuál es más saludable.", "Respuesta abierta: el de menos azúcares y sal por 100 g."],
    ["m", "¿Qué hay que hacer si un compañero se marea por el calor?", "Llevarlo a la sombra, refrescarlo, darle agua a sorbos y avisar a un adulto."],
    ["m", "Escribe tres beneficios emocionales de la actividad física.", "Reduce el estrés, mejora el ánimo, ayuda a concentrarse."],
    ["m", "¿Qué cambios hizo Leo y qué consiguió?", "Ir andando, recreo activo y móvil fuera; superó los 60 minutos, mejor humor y sueño."],
    ["m", "Haz una lista de lo que debe llevar tu bolsa de deporte.", "Camiseta de recambio, toalla, botella, chanclas, protector solar…"],
    ["a", "Rellena durante una semana una tabla de actividad, agua, sueño y pantallas, y analízala.", "Respuesta abierta."],
    ["a", "Diseña tu plan de vida activa semanal.", "Respuesta abierta."],
    ["a", "Prepara una campaña para el colegio sobre el ejercicio en días de calor.", "Respuesta abierta."],
    ["a", "Investiga qué actividad física te gusta más y por qué.", "Respuesta abierta."],
  ],
  quiz: [
    ["Los ultraprocesados conviene tomarlos…", ["de vez en cuando", "en cada comida", "nunca hay que mirarlo"], "Alimentación."],
    ["Con mucho calor es mejor hacer ejercicio…", ["a primera hora o al final de la tarde", "a mediodía", "con ropa oscura"], "Calor."],
    ["El ejercicio ayuda a…", ["reducir el estrés", "dormir peor", "concentrarse menos"], "Bienestar."],
    ["Después de Educación Física conviene…", ["cambiarse de camiseta", "seguir con la ropa sudada", "no beber"], "Higiene."],
    ["El transporte activo es…", ["ir andando o en bici", "ir en coche", "ir en autobús siempre"], "Vida activa."],
  ],
  examen: [
    ["¿Qué descubrió Leo al rellenar la tabla?", ["que algunos días se movía muy poco", "que se movía más que nadie", "que dormía demasiado"], "Lectura."],
    ["El teléfono de emergencias es el…", ["112", "010", "091 para todo"], "Calor."],
  ],
  tarjetas: [
    ["Etiquetas", "Ingredientes de más a menos; mira azúcares y sal por 100 g."],
    ["Calor", "Horas frescas, agua, gorra, sombra y pausas. Golpe de calor: sombra, frescor y 112."],
    ["Mente activa", "Endorfinas: menos estrés, mejor humor, más concentración y amigos."],
    ["Vida activa", "60 min al día repartidos: andar, recreo, deporte, parque."],
  ],
  glosario: [
    ["Etiqueta nutricional", "Información de los nutrientes de un alimento."],
    ["Kilocaloría", "Unidad para medir la energía de los alimentos."],
    ["Ultraprocesado", "Producto industrial con muchos ingredientes añadidos."],
    ["Nutri-Score", "Sello con letras de la A a la E que orienta sobre la calidad nutricional."],
    ["Golpe de calor", "Subida peligrosa de la temperatura del cuerpo."],
    ["Transpirable", "Que deja pasar el sudor y el aire."],
    ["Endorfinas", "Sustancias del cerebro que producen bienestar."],
    ["Autoestima", "Valoración que hacemos de nosotros mismos."],
    ["Hongos", "Organismos que pueden causar infecciones en la piel."],
    ["Transporte activo", "Desplazarse andando, en bici o en patinete."],
    ["Sedentarismo", "Pasar mucho tiempo sentado o sin moverse."],
    ["Plan de vida activa", "Organización personal para moverse cada día."],
  ],
  situacion: {
    titulo: "La semana activa",
    reto: "La clase hace el mismo reto que Leo: una semana de vida activa con un diario personal.",
    pasos: ["Preparad una tabla para anotar actividad, agua, sueño, pantallas y comidas.", "Rellenadla durante una semana y calculad vuestras medias.", "Proponed tres cambios personales y un plan de vida activa.", "Presentad los resultados de la clase en un mural con gráficas y consejos."],
    producto: "Un diario personal de hábitos y un mural de la clase con gráficas y propuestas.",
    evaluacion: ["Registra y analiza sus hábitos con sinceridad.", "Lee etiquetas y elige alimentos saludables.", "Conoce cómo hacer ejercicio con calor de forma segura.", "Diseña un plan realista de vida activa."],
  },
});
