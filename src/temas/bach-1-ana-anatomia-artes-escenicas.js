// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Laringe vista desde arriba: cuerdas vocales abiertas (respirar) y cerradas (fonar).
const cuerdas = B.lienzo("Cuerdas vocales vistas desde arriba: separadas al respirar y juntas vibrando al hablar o cantar", `
  ${[[70, "respirar", 26], [190, "fonar", 3]].map(([x, t, a]) => `
    <ellipse cx="${x}" cy="90" rx="46" ry="56" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <path d="M${x} 46 L ${x - a} 134" stroke="var(--pen)" stroke-width="6" stroke-linecap="round"/>
    <path d="M${x} 46 L ${x + a} 134" stroke="var(--pen)" stroke-width="6" stroke-linecap="round"/>
    ${B.tx(x, 168, t, { fs: 12, maxW: 90, bold: true, color: a > 10 ? "var(--leaf)" : "var(--red)" })}`).join("")}
  ${B.tx(130, 22, "cuerdas vocales (vista superior)", { fs: 11, maxW: 220, color: "var(--muted)" })}`, "");

// Alineación postural: plomada de perfil.
const plomada = B.lienzo("Alineación postural de perfil: la línea de plomada pasa por la oreja, el hombro, la cadera, la rodilla y delante del tobillo", `
  <path d="M120 18 V 166" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="118" cy="34" r="12" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M118 46 C 112 70, 126 92, 118 112 L 122 140 L 118 164" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>
  ${[["oreja", 34], ["hombro", 58], ["cadera", 108], ["rodilla", 138], ["tobillo", 162]].map(([t, y]) => `<circle cx="120" cy="${y}" r="4" fill="var(--red)"/>${B.tx(146, y + 4, t, { fs: 10.5, maxW: 70, anchor: "start", bold: true, color: "var(--red)" })}`).join("")}
  ${B.tx(56, 100, "línea de", { fs: 10.5, maxW: 60, color: "var(--leaf)", bold: true })}${B.tx(56, 114, "plomada", { fs: 10.5, maxW: 60, color: "var(--leaf)", bold: true })}`, "");

module.exports = B.tema({
  titulo: "Anatomía y artes escénicas",
  minutos: 110,
  objetivos: [
    "Reconocer el cuerpo como instrumento de expresión y comunicación en la danza, el teatro, el circo y la música",
    "Describir la anatomía del aparato fonador y los factores de una voz sana y eficaz",
    "Aplicar los conocimientos de postura, flexibilidad, fuerza y control motor al trabajo escénico",
    "Identificar las lesiones y patologías más frecuentes de bailarines, actores y músicos y su prevención",
    "Valorar la preparación física, la gestión emocional y los hábitos saludables en la práctica artística",
  ],
  claves: ["expresión corporal", "aparato fonador", "cuerdas vocales", "resonadores", "apoyo respiratorio", "alineación postural", "flexibilidad", "en dehors", "calentamiento", "disfonía", "lesión por sobreuso", "ansiedad escénica"],
  pregunta: {
    texto: "Un actor de teatro puede hablar dos horas ante 800 personas sin micrófono y sin quedarse afónico. ¿Grita más que los demás?",
    respuesta: "No: <mark>proyecta</mark>. En lugar de forzar la garganta, apoya la voz en una respiración diafragmático-costal que da presión de aire constante, mantiene el cuello relajado y aprovecha los <b>resonadores</b> (faringe, boca, fosas nasales) para amplificar el sonido. Es una técnica aprendida que protege las cuerdas vocales; gritar, en cambio, las golpea y acaba produciendo lesiones.",
  },
  lectura: {
    titulo: "Atletas del escenario",
    html: `<p>Una bailarina de una compañía profesional puede ensayar seis horas al día, seis días a la semana. En una sola función de ballet clásico encadena saltos que multiplican por cinco su peso al caer, equilibrios sobre la punta de los dedos y giros a toda velocidad. Un violinista repite el mismo movimiento de muñeca miles de veces cada día; un trapecista vuela a varios metros del suelo confiando en su fuerza y en la de su compañero; una cantante de ópera llena un teatro sin amplificación.</p>
    <p>Durante mucho tiempo se pensó que el arte era cosa de talento y el deporte, de cuerpo. Hoy sabemos que los artistas escénicos son, en muchos aspectos, atletas: necesitan fuerza, resistencia, flexibilidad y coordinación, y sufren lesiones propias. Por eso han nacido la medicina de la danza, la medicina de los músicos y la foniatría, especialidades que cuidan del cuerpo que hace arte.</p>
    <p>En este tema aplicarás lo que has aprendido sobre huesos, músculos, respiración y sistema nervioso al escenario, para que tu cuerpo, que es tu instrumento, rinda más y dure toda la vida.</p>`,
  },
  secciones: [3, 5, 5],
  bloques: [
    {
      h: "El cuerpo como instrumento expresivo",
      html: `<p>En las <b>artes escénicas</b> (danza, teatro, circo, ópera, música en directo, performance) el cuerpo es a la vez la herramienta de trabajo y el medio de expresión. A diferencia de un pintor, el artista escénico no puede separar su obra de sí mismo: su postura, su gesto, su voz y su respiración son el mensaje.</p>
      <p>La <b>expresión corporal</b> utiliza el movimiento para comunicar ideas, emociones y personajes. Sus elementos básicos son:</p>
      <ul><li>El <b>cuerpo</b>: posturas, gestos, actitudes, tensión y relajación.</li>
      <li>El <b>espacio</b>: niveles (alto, medio, bajo), direcciones, trayectorias y distancia con los demás.</li>
      <li>El <b>tiempo</b>: ritmo, velocidad, pausa y duración.</li>
      <li>La <b>energía</b> o calidad del movimiento: fuerte o suave, directo o indirecto, súbito o sostenido, libre o contenido. El coreógrafo Rudolf Laban las sistematizó en sus «acciones básicas» (golpear, flotar, deslizar, retorcer…).</li></ul>
      <p>Para comunicar bien hace falta un cuerpo disponible: <b>consciente</b> (que se percibe, gracias a la propiocepción), <b>versátil</b> (que tiene amplitud de movimiento y fuerza para cambiar de calidad) y <b>sano</b>. La comunicación no verbal tiene tanto peso que el público interpreta el estado de un personaje por su postura antes de que hable: unos hombros elevados transmiten tensión; un pecho abierto, seguridad.</p>
      <p>Cada arte escénica plantea exigencias físicas distintas, pero todas comparten la necesidad de una <mark>preparación física específica</mark>, igual que cualquier deporte.</p>`,
      svg: B.cajas("Elementos de la expresión corporal", [["Cuerpo", "postura|y gesto"], ["Espacio", "niveles y|trayectorias"], ["Tiempo", "ritmo|y pausa"], ["Energía", "calidad del|movimiento"]], { t: "Expresión corporal" }),
    },
    {
      h: "Las exigencias físicas de cada arte",
      html: `<table class="tb"><tr><th>Disciplina</th><th>Capacidades más exigidas</th><th>Zonas más cargadas</th></tr>
      <tr><td><b>Danza clásica</b></td><td>flexibilidad, fuerza, equilibrio, potencia de salto</td><td>pie, tobillo, cadera, columna lumbar</td></tr>
      <tr><td><b>Danza contemporánea y urbana</b></td><td>fuerza de tronco y brazos, coordinación, trabajo en el suelo</td><td>rodillas, muñecas, hombros, cuello</td></tr>
      <tr><td><b>Teatro</b></td><td>voz, respiración, resistencia, versatilidad corporal</td><td>laringe, cuello, espalda</td></tr>
      <tr><td><b>Circo</b></td><td>fuerza máxima y relativa, flexibilidad extrema, equilibrio</td><td>hombros, muñecas, columna</td></tr>
      <tr><td><b>Canto</b></td><td>control respiratorio, postura, resistencia vocal</td><td>laringe, musculatura respiratoria</td></tr>
      <tr><td><b>Música instrumental</b></td><td>motricidad fina, resistencia muscular local, postura mantenida</td><td>manos, muñecas, hombros, cuello, mandíbula</td></tr></table>
      <p>Desde el punto de vista energético, una clase de danza o un número de circo son esfuerzos <b>intermitentes</b> en los que se alternan acciones explosivas (sistema de fosfágenos) y secuencias intensas de uno o dos minutos (glucólisis anaeróbica), sobre una base aeróbica. Un musical de dos horas, con canto y baile, exige además una gran resistencia aeróbica. Por eso la preparación de un artista debe incluir trabajo cardiovascular, fuerza y flexibilidad, y no solo ensayos de la propia disciplina.</p>
      <p>Muchos artistas mantienen <b>posturas estáticas</b> durante mucho tiempo (un violinista, un pianista) o repiten el mismo gesto miles de veces: esas cargas pequeñas y repetidas son el origen de muchas lesiones por <b>sobreuso</b>.</p>`,
      svg: B.rejilla("Capacidades físicas más exigidas en cada arte escénica", ["Arte", "Capacidad clave"], [["Danza", "flexibilidad"], ["Teatro", "voz y resistencia"], ["Circo", "fuerza relativa"], ["Canto", "control respiratorio"], ["Instrumento", "motricidad fina"]], { t: "Exigencias físicas" }),
      video: { id: "zX7PnSUP900", titulo: "Anatomía de un Bailarín -capítulo I- KAYOKO EVERHART", canal: "Compañía Nacional de Danza CND", vistas: 7975 },
    },
    {
      h: "La postura y la alineación",
      html: `<p>Una buena <b>postura</b> es la que mantiene el cuerpo alineado con el mínimo gasto de energía y la menor carga sobre las articulaciones. Vista de perfil, la <b>línea de plomada</b> ideal pasa por el lóbulo de la oreja, el hombro, el centro de la cadera, un poco por delante de la rodilla y por delante del tobillo. La columna conserva sus <b>curvaturas fisiológicas</b>, sin exagerarlas ni borrarlas.</p>
      <p>En las artes escénicas la postura es también un recurso expresivo, pero conviene distinguir entre la postura de un personaje, que puede ser exagerada durante una escena, y la postura de base del intérprete, que debe ser eficiente. Algunos desequilibrios frecuentes son:</p>
      <ul><li><b>Hiperlordosis lumbar</b>: pelvis basculada hacia delante, a menudo por debilidad abdominal y acortamiento del psoas; frecuente en bailarines que fuerzan el en dehors.</li>
      <li><b>Hipercifosis dorsal</b> y cabeza adelantada: típica de músicos que leen partitura o tocan instrumentos pesados, y del uso de pantallas.</li>
      <li><b>Asimetrías</b>: violinistas, guitarristas, acordeonistas o flautistas mantienen posturas asimétricas durante horas.</li>
      <li><b>Hiperextensión de rodillas</b>: las rodillas «hacia atrás», frecuente en personas muy flexibles.</li></ul>
      <p>Métodos como la <b>técnica Alexander</b>, el <b>método Feldenkrais</b> o el <b>Pilates</b>, muy usados por actores, músicos y bailarines, trabajan la conciencia corporal, la alineación y el control del tronco para reducir tensiones innecesarias. La idea central es que cada gesto use solo la tensión muscular necesaria, ni más ni menos.</p>`,
      svg: plomada,
    },
    {
      h: "El aparato fonador",
      html: `<p>La voz se produce gracias al <b>aparato fonador</b>, que tiene tres partes, como un instrumento de viento:</p>
      <ul><li><b>Fuelle</b> o sistema respiratorio: los pulmones, el diafragma, los intercostales y los abdominales aportan el aire a presión (tema 3).</li>
      <li><b>Vibrador</b>: la <b>laringe</b>, un tubo de cartílagos (el tiroides, que forma la «nuez», el cricoides y los aritenoides) situado en el cuello sobre la tráquea. En su interior están las <b>cuerdas vocales</b> o pliegues vocales: dos repliegues de músculo y mucosa de 1,5-2,5 cm. Al respirar se separan; al hablar o cantar se acercan y el aire que sale las hace <b>vibrar</b> cientos de veces por segundo.</li>
      <li><b>Resonadores y articuladores</b>: la faringe, la boca y las fosas nasales amplifican y dan color al sonido; la lengua, los labios, los dientes, el paladar y la mandíbula lo convierten en palabras.</li></ul>
      <p>Las cualidades de la voz dependen de varios factores:</p>
      <ul><li><b>Tono</b> (agudo o grave): de la frecuencia de vibración, que depende de la longitud, el grosor y la tensión de las cuerdas. Por eso la voz de los chicos baja en la pubertad, cuando la laringe crece.</li>
      <li><b>Intensidad</b> (volumen): de la presión del aire bajo las cuerdas.</li>
      <li><b>Timbre</b>: de la forma de los resonadores; es lo que hace única cada voz.</li></ul>
      <p>La extensión de la voz clasifica a los cantantes en sopranos, mezzosopranos y contraltos, y tenores, barítonos y bajos.</p>`,
      svg: cuerdas,
      video: { id: "ClJYUH3cshY", titulo: "Cómo funciona la voz - El aparato fonador", canal: "Daniel Más", vistas: 60629 },
    },
    {
      h: "Respiración y técnica vocal",
      html: `<p>La base de una voz eficaz es la <b>respiración</b>. Para hablar o cantar se usa una respiración <b>diafragmático-costal</b>: al inspirar descienden el diafragma y se abren las costillas inferiores (el abdomen y los costados se expanden), sin elevar los hombros. Al espirar, los abdominales y el diafragma, que se relaja de forma controlada, regulan la salida de aire. Este control se conoce como <mark>apoyo</mark>: una presión estable y regulada que permite frases largas, volumen sin esfuerzo de garganta y afinación.</p>
      <p>Otros pilares de la técnica vocal son:</p>
      <ul><li><b>Relajación</b> del cuello, la mandíbula, la lengua y los hombros: cualquier tensión ahí estrecha la laringe y empobrece la voz.</li>
      <li><b>Postura</b> alineada, con la cabeza equilibrada sobre la columna.</li>
      <li><b>Resonancia</b>: dirigir el sonido hacia la «máscara» (zona de los pómulos y la nariz) para que se proyecte sin forzar.</li>
      <li><b>Articulación</b> clara, que hace inteligible el texto incluso a bajo volumen.</li>
      <li><b>Calentamiento vocal</b>: ejercicios de respiración, vibración de labios, sirenas, escalas suaves y trabalenguas antes de usar la voz intensamente; y enfriamiento suave al terminar.</li></ul>
      <p>El sistema nervioso tiene un papel clave: la voz está muy ligada a las emociones, y la ansiedad provoca una respiración alta y rápida, tensión del cuello y voz temblorosa. Por eso los ejercicios de respiración lenta sirven a la vez para la técnica y para el control emocional.</p>`,
      svg: B.flujo("Pilares de la técnica vocal", ["Respiración diafragmático-costal", "Apoyo: presión de aire regulada", "Cuello, mandíbula y hombros relajados", "Resonancia en la máscara", "Articulación clara"], { t: "Técnica vocal" }),
      video: { id: "Bu1xgyCO0Ps", titulo: "¿Cómo RESPIRAR con el diafragma para cantar? | Dra. Voz", canal: "Dra. Voz", vistas: 621988 },
    },
    {
      h: "Higiene y patología de la voz",
      html: `<p>Los profesionales de la voz (actores, cantantes, docentes, locutores) tienen un riesgo elevado de <b>trastornos vocales</b>. Los más frecuentes son:</p>
      <ul><li><b>Disfonía</b>: alteración de la voz (ronquera, voz débil, fatiga al hablar). La <b>afonía</b> es la pérdida total de la voz.</li>
      <li><b>Nódulos vocales</b>: engrosamientos en el borde de las cuerdas vocales, como «callos», producidos por el abuso y el mal uso de la voz. Impiden que las cuerdas cierren bien y la voz suena ronca y con aire.</li>
      <li><b>Pólipos</b> y <b>edemas</b>: lesiones que suelen aparecer tras un esfuerzo vocal intenso o por el tabaco.</li>
      <li><b>Laringitis</b>: inflamación, a menudo por infecciones.</li></ul>
      <p>Medidas de <b>higiene vocal</b>:</p>
      <ul><li><b>Hidratación</b>: beber agua a lo largo del día mantiene la mucosa de las cuerdas flexible; los ambientes secos (calefacción, aire acondicionado) la perjudican.</li>
      <li>Evitar <b>gritar</b>, hablar sobre ruido, susurrar forzando y <b>carraspear</b> (golpea las cuerdas); mejor tragar saliva o beber.</li>
      <li>No fumar y evitar el alcohol, que irritan y deshidratan la mucosa.</li>
      <li><b>Descansar</b> la voz tras un uso intenso y dormir lo suficiente.</li>
      <li>Calentar antes de usarla y no forzar si hay catarro.</li>
      <li>Consultar a un otorrinolaringólogo o un logopeda si la ronquera dura más de dos o tres semanas.</li></ul>`,
      svg: B.comparar("Hábitos que dañan y que protegen la voz", ["Dañan", ["gritar y carraspear", "hablar sobre ruido", "tabaco y alcohol", "aire seco"]], ["Protegen", ["beber agua", "apoyo respiratorio", "descanso vocal", "calentar la voz"]]),
    },
    {
      h: "La flexibilidad en la danza y el circo",
      html: `<p>La <b>flexibilidad</b> es la capacidad de realizar movimientos con la mayor amplitud posible. Depende de dos componentes: la <b>movilidad articular</b> (forma de las articulaciones, ligamentos y cápsulas) y la <b>elasticidad muscular</b> (capacidad del músculo y su tejido conjuntivo para alargarse). Es la única capacidad física que <b>disminuye desde la infancia</b> si no se trabaja, y es mayor, de media, en las mujeres.</p>
      <p>En la danza clásica es especialmente importante el <b>en dehors</b> o rotación externa de las piernas. Debe nacer sobre todo de la <b>cadera</b> (articulación esférica que permite la rotación), gracias a la forma de la articulación y al trabajo de los rotadores externos profundos. Forzarlo desde las rodillas o los pies («torsión» compensatoria) sobrecarga los ligamentos de la rodilla y el arco del pie y produce lesiones.</p>
      <p>Los <b>métodos de estiramiento</b> más utilizados son:</p>
      <ul><li><b>Estático</b>: llevar el músculo a su máxima amplitud de forma lenta y mantener 20-30 segundos. Es seguro y eficaz al final de la sesión.</li>
      <li><b>Dinámico</b>: movimientos controlados que recorren la amplitud de forma progresiva (balanceos de piernas). Es el indicado en el calentamiento.</li>
      <li><b>Facilitación neuromuscular propioceptiva (FNP)</b>: contraer el músculo estirado unos segundos, relajarlo y estirar de nuevo; aprovecha la inhibición de los órganos de Golgi y consigue grandes ganancias.</li></ul>
      <p>La flexibilidad debe ir acompañada de <b>fuerza</b> en toda la amplitud: una articulación muy móvil sin control muscular es inestable. Por eso las bailarinas y los contorsionistas entrenan la fuerza activa (por ejemplo, mantener la pierna arriba sin ayuda), no solo la pasiva.</p>`,
      svg: B.cajas("Métodos de estiramiento y cuándo usarlos", [["Dinámico", "en el|calentamiento"], ["Estático", "al final:|20-30 s"], ["FNP", "contraer-relajar|-estirar"], ["Activo", "fuerza en toda|la amplitud"]], { t: "Estiramientos" }),
    },
    {
      h: "Fuerza, saltos y giros",
      html: `<p>La danza y el circo exigen altos niveles de <b>fuerza</b>, sobre todo <b>fuerza relativa</b> (la fuerza en relación con el propio peso) y <b>potencia</b> (fuerza aplicada a gran velocidad):</p>
      <ul><li><b>Saltos</b>: dependen de la potencia de extensores de cadera, rodilla y tobillo, del <b>plié</b> previo (contramovimiento que aprovecha la energía elástica, tema 6) y de la sincronización de brazos. Las <b>recepciones</b> deben amortiguarse pasando por la punta del pie, el talón y el plié, con la rodilla alineada sobre el segundo dedo, para alargar el tiempo de frenado y reducir la fuerza de impacto.</li>
      <li><b>Equilibrios</b> sobre media punta o punta: exigen fuerza de la musculatura del pie y el tobillo (tríceps sural, peroneos, flexores de los dedos), alineación de todo el cuerpo sobre una base mínima y un <b>core</b> estable.</li>
      <li><b>Giros</b>: se genera el momento angular en el suelo con el plié y los brazos, y se controla la velocidad recogiendo o abriendo los brazos (conservación del momento angular). La técnica del <b>spotting</b>, fijar la mirada en un punto y girar la cabeza al final, reduce el mareo y mantiene la orientación.</li>
      <li><b>Portés</b> y acrobacias: el portor necesita fuerza de piernas y tronco y una técnica que acerque la carga a su centro de gravedad; el ágil, fuerza relativa y tono corporal.</li></ul>
      <p>El trabajo con <b>puntas</b> en el ballet requiere una madurez ósea y una fuerza suficientes: no suele recomendarse antes de los 11-12 años ni sin varios años de formación previa, porque el pie todavía está en crecimiento.</p>`,
      svg: B.flujo("Fases de un salto de danza bien ejecutado", ["Plié: contramovimiento", "Impulso: extender cadera, rodilla, pie", "Vuelo: alineación y brazos", "Recepción: punta, talón y plié", "Rodilla sobre el segundo dedo"], { t: "El salto" }),
      video: { id: "XP2oKiq1Bkw", titulo: "La física del «movimiento más duro» del ballet - Arleen Sugano", canal: "Sé Curioso — TED-Ed", vistas: 32774 },
    },
    {
      h: "Lesiones en la danza y el circo",
      html: `<p>Entre el 60 y el 80 % de los bailarines profesionales sufre al menos una lesión al año. La mayoría son lesiones por <b>sobreuso</b> en la extremidad inferior y la columna:</p>
      <ul><li><b>Pie y tobillo</b>: esguinces de tobillo, tendinopatía del flexor largo del dedo gordo (la «tendinitis del bailarín»), fracturas por estrés de los metatarsianos, juanetes y problemas de uñas en el trabajo de puntas.</li>
      <li><b>Rodilla</b>: dolor femororrotuliano y tendinopatía rotuliana por saltos repetidos y en dehors forzado.</li>
      <li><b>Cadera</b>: «cadera en resorte» (chasquido de tendones) y lesiones del rodete por posiciones extremas.</li>
      <li><b>Columna lumbar</b>: dolor por hiperextensiones repetidas en arabesques, cambrés y portés; fracturas por estrés de las vértebras (espondilólisis) en jóvenes.</li>
      <li><b>Circo</b>: además, lesiones de hombro y muñeca (verticales, aéreos), caídas y lesiones por el material.</li></ul>
      <p>Los factores de riesgo son el aumento brusco de horas de ensayo, el cansancio acumulado, la técnica forzada, los suelos inadecuados (sin amortiguación), el calzado, el déficit de energía en la dieta y el crecimiento rápido de la adolescencia. Se previenen con <b>progresión</b> en las cargas, descanso, calentamiento, fortalecimiento específico (pie, glúteo medio, tronco), técnica correcta, <mark>suelos flotantes</mark>, alimentación suficiente y la detección precoz del dolor: «aguantar» el dolor durante semanas suele convertir una molestia en una lesión larga.</p>`,
      svg: B.rejilla("Lesiones frecuentes en danza y circo y su causa", ["Zona", "Lesión típica"], [["Pie", "fractura por estrés"], ["Tobillo", "esguince"], ["Rodilla", "tendinopatía"], ["Lumbar", "espondilólisis"], ["Hombro", "sobrecarga (circo)"]], { t: "Lesiones en danza" }),
    },
    {
      h: "La salud de los músicos",
      html: `<p>Tocar un instrumento es una actividad física exigente: un pianista puede realizar más de 1500 movimientos de dedos por minuto, y un músico profesional ensaya entre 4 y 8 horas diarias. Hasta tres de cada cuatro músicos de orquesta sufren en algún momento problemas físicos relacionados con su instrumento.</p>
      <ul><li><b>Lesiones por sobreuso</b> de la extremidad superior: tendinopatías de la muñeca y los dedos, epicondilitis («codo de tenista») y dolor de hombro, por la repetición de gestos y la fuerza mantenida.</li>
      <li><b>Atrapamientos nerviosos</b>, como el <b>síndrome del túnel carpiano</b> (compresión del nervio mediano en la muñeca), con hormigueo y pérdida de fuerza.</li>
      <li><b>Distonía focal del músico</b>: un trastorno del control motor en el que los dedos pierden la coordinación al tocar; se relaciona con una plasticidad neuronal alterada por la repetición extrema.</li>
      <li><b>Dolor cervical y dorsal</b> por posturas asimétricas y mantenidas (violín, viola, flauta, guitarra) o por el peso del instrumento.</li>
      <li><b>Problemas de la embocadura</b> en instrumentos de viento y de la articulación temporomandibular.</li>
      <li><b>Pérdida de audición</b> por la exposición continuada a sonidos intensos: se recomienda usar <b>protectores auditivos</b> específicos para músicos.</li></ul>
      <p>La prevención incluye pausas cada 25-30 minutos, aumentar el tiempo de estudio de forma progresiva, calentar las manos y los brazos, una postura equilibrada (con sillas, alturas y soportes adecuados), fortalecer la espalda y la cintura escapular, y no tocar con dolor.</p>`,
      svg: B.cajas("Problemas físicos más frecuentes de los músicos", [["Sobreuso", "muñeca|y dedos"], ["Túnel carpiano", "nervio|mediano"], ["Distonía", "pérdida de|control"], ["Audición", "usar|protectores"]], { t: "Salud del músico" }),
    },
    {
      h: "Calentamiento y preparación física del artista",
      html: `<p>Un buen <b>calentamiento</b> prepara el cuerpo y la mente para el esfuerzo: sube la temperatura muscular (los músculos se contraen más rápido y son más elásticos), aumenta la frecuencia cardíaca y el riego, lubrica las articulaciones (líquido sinovial), activa el sistema nervioso y mejora la concentración. Para una clase o una función debería durar entre 15 y 25 minutos y seguir esta estructura:</p>
      <ol><li><b>Activación general</b>: movimiento suave que eleve el pulso (desplazamientos, trote, saltos suaves).</li>
      <li><b>Movilidad articular</b>: de la cabeza a los pies, con círculos y balanceos.</li>
      <li><b>Estiramientos dinámicos</b> y activación del tronco.</li>
      <li><b>Parte específica</b>: gestos propios de la disciplina con intensidad creciente (barra de ballet, ejercicios vocales, escalas en el instrumento).</li></ol>
      <p>Al terminar, la <b>vuelta a la calma</b> con movimiento suave, estiramientos estáticos y respiración ayuda a la recuperación.</p>
      <p>Además del calentamiento, el artista se beneficia de una <b>preparación física complementaria</b> (cross-training): trabajo aeróbico (natación, bicicleta) para resistir funciones largas, fuerza de las zonas más cargadas y de sus antagonistas, y ejercicios de propiocepción. Hay que planificar la temporada con periodos de mayor carga (estrenos, giras) y de descarga. Se ha comprobado que los bailarines con mejor condición física se lesionan menos y rinden mejor al final de las funciones, cuando aparece la fatiga.</p>`,
      svg: B.flujo("Estructura del calentamiento antes de un ensayo o función", ["Activación general: subir el pulso", "Movilidad articular", "Estiramientos dinámicos y core", "Parte específica de la disciplina"], { t: "Calentamiento" }),
    },
    {
      h: "La gestión emocional y la ansiedad escénica",
      html: `<p>Subir a un escenario activa el <b>sistema nervioso simpático</b> (tema 5): aumentan la frecuencia cardíaca y respiratoria, se liberan adrenalina y cortisol, sudan las manos, se seca la boca y aparece temblor. Esa <b>activación</b> es útil en su justa medida: mejora la energía, la atención y la presencia escénica. Según la relación clásica entre activación y rendimiento, el rendimiento sube con la activación hasta un punto óptimo y después empeora.</p>
      <p>Cuando la activación es excesiva aparece la <b>ansiedad escénica</b> o miedo escénico: la persona anticipa el fracaso, se bloquea, olvida el texto o la partitura y su motricidad fina se deteriora (temblor en las manos de un violinista, voz entrecortada de un actor). Afecta a muchos artistas, incluso a profesionales con décadas de experiencia.</p>
      <p>Estrategias eficaces:</p>
      <ul><li><b>Respiración</b> lenta con espiración prolongada (por ejemplo, 4 segundos para inspirar y 6-8 para espirar), que activa el parasimpático.</li>
      <li><b>Relajación muscular progresiva</b>: tensar y soltar grupos musculares.</li>
      <li><b>Visualización</b> del escenario y de una actuación exitosa.</li>
      <li><b>Rutinas</b> previas a la función que den sensación de control, y una buena preparación técnica.</li>
      <li>Cambiar los <b>pensamientos</b> catastrofistas por otros realistas y centrar la atención en la tarea, no en el juicio del público.</li>
      <li>Pedir ayuda a un profesional de la psicología si la ansiedad es muy intensa.</li></ul>
      <p>Cuidar la salud mental, descansar y mantener una relación sana con el propio cuerpo forman parte de la <mark>salud integral</mark> del artista.</p>`,
      svg: B.barras("Rendimiento según el nivel de activación: bajo con poca y con demasiada", [["Activación baja", 40], ["Moderada", 70], ["Óptima", 95], ["Alta", 65], ["Excesiva", 30]], { t: "Rendimiento (%)" }),
    },
    {
      h: "Hábitos saludables en la práctica artística",
      html: `<p>La carrera de un artista escénico puede ser larga si cuida su instrumento. Los hábitos más importantes son:</p>
      <ul><li><b>Alimentación suficiente y equilibrada</b>, adaptada a las horas de ensayo, sin dietas restrictivas. En la danza y otras artes con exigencias estéticas hay que prestar especial atención a los <b>trastornos de la conducta alimentaria</b> y a la deficiencia relativa de energía (tema 4).</li>
      <li><b>Hidratación</b> constante, fundamental para la voz y para la regulación de la temperatura bajo los focos.</li>
      <li><b>Sueño</b> suficiente, especialmente en épocas de giras, funciones nocturnas y cambios de horario, para recuperarse y consolidar lo aprendido.</li>
      <li><b>Planificación</b> de los ensayos con pausas y días de descanso.</li>
      <li><b>Escucha del cuerpo</b>: el dolor que persiste, empeora o aparece siempre con el mismo gesto es una señal de alarma.</li>
      <li><b>Entornos adecuados</b>: suelos, temperatura de la sala, ventilación, protección auditiva y material en buen estado.</li>
      <li>Rechazar el consumo de sustancias para «aguantar» o «calmar los nervios» (alcohol, tranquilizantes sin prescripción, estimulantes).</li></ul>
      <p>Muchos conservatorios y compañías incorporan ya fisioterapeutas, nutricionistas, logopedas y psicólogos. Para un estudiante, el mensaje es claro: practicar un arte con conocimiento del propio cuerpo no limita la expresión, la hace posible durante toda la vida.</p>`,
      svg: B.estrella("Hábitos saludables del artista escénico", "Artista sano", ["Comer bien", "Hidratarse", "Dormir", "Descansar", "Escuchar el dolor", "Buen entorno"]),
    },
  ],
  figura: {
    titulo: "Anatomía y artes escénicas en cuatro ideas",
    items: [["Cuerpo", "instrumento", "postura, gesto,", "voz y respiración"], ["Voz", "fuelle·vibrador", "resonadores", "y articuladores"], ["Danza", "flexib. + fuerza", "en dehors desde", "la cadera"], ["Salud", "prevenir", "calentar, progresar,", "descansar"]],
  },
  video: { id: "w7RryVvn1_s", titulo: "¿Cómo se produce la voz humana?", canal: "Dayely Armijos", vistas: 122980 },
  quiz: [
    ["En las artes escénicas, el cuerpo es…", ["solo una herramienta", "a la vez herramienta y medio de expresión", "algo secundario", "un obstáculo"], 1, "El mensaje se transmite con él."],
    ["La calidad del movimiento (fuerte, suave, súbito…) corresponde al elemento…", ["espacio", "tiempo", "energía", "cuerpo"], 2, "Laban la sistematizó."],
    ["La línea de plomada ideal pasa por la oreja, el hombro, la cadera y…", ["detrás de la rodilla", "un poco por delante de la rodilla", "la punta del pie", "el talón"], 1, "Y por delante del tobillo."],
    ["Las cuerdas vocales están en…", ["la faringe", "la laringe", "la tráquea", "la boca"], 1, "Dentro de la laringe."],
    ["El tono de la voz depende sobre todo de…", ["la presión del aire", "la longitud, grosor y tensión de las cuerdas", "la lengua", "los pulmones"], 1, "Determinan la frecuencia de vibración."],
    ["El timbre de la voz depende de…", ["los resonadores", "la intensidad", "el diafragma", "los dientes"], 0, "Por eso cada voz es única."],
    ["El «apoyo» en la técnica vocal es…", ["subir los hombros", "una presión de aire regulada por diafragma y abdominales", "gritar", "tensar el cuello"], 1, "Permite frases largas sin forzar la garganta."],
    ["Carraspear con frecuencia…", ["protege la voz", "golpea las cuerdas vocales", "hidrata", "mejora el timbre"], 1, "Mejor tragar saliva o beber agua."],
    ["Los nódulos vocales se producen sobre todo por…", ["infecciones", "abuso y mal uso de la voz", "el frío", "la edad"], 1, "Son como callos en las cuerdas."],
    ["Si la ronquera dura más de dos o tres semanas hay que…", ["gritar para «abrir» la voz", "consultar a un especialista", "fumar menos", "no hacer nada"], 1, "Otorrinolaringólogo o logopeda."],
    ["El en dehors debe originarse principalmente en…", ["las rodillas", "los pies", "la cadera", "la columna"], 2, "Forzarlo desde abajo lesiona rodillas y pies."],
    ["El estiramiento indicado en el calentamiento es el…", ["estático largo", "dinámico", "con rebotes", "pasivo forzado"], 1, "El estático, mejor al final."],
    ["La FNP aprovecha…", ["el reflejo rotuliano", "la inhibición de los órganos de Golgi", "el sistema simpático", "la insulina"], 1, "Contraer, relajar y estirar."],
    ["En una recepción de salto, la rodilla debe alinearse sobre…", ["el dedo gordo", "el segundo dedo del pie", "el talón", "el meñique"], 1, "Evita el valgo de rodilla."],
    ["El spotting en los giros sirve para…", ["girar más lento", "reducir el mareo y mantener la orientación", "aumentar el peso", "estirar el cuello"], 1, "Fijar la mirada en un punto."],
    ["La mayoría de las lesiones de los bailarines son…", ["traumáticas por caídas", "por sobreuso", "infecciosas", "congénitas"], 1, "Cargas repetidas sin recuperación suficiente."],
    ["El síndrome del túnel carpiano comprime el nervio…", ["cubital", "mediano", "radial", "ciático"], 1, "Produce hormigueo en la mano."],
    ["Los músicos deberían hacer pausas cada…", ["5 minutos", "25-30 minutos", "3 horas", "nunca"], 1, "Y aumentar el estudio de forma progresiva."],
    ["Una activación moderada antes de actuar…", ["siempre empeora", "puede mejorar el rendimiento", "no influye", "es una enfermedad"], 1, "El problema es el exceso."],
    ["Para calmar la ansiedad escénica conviene una respiración…", ["rápida y alta", "lenta con espiración larga", "contenida", "por la boca muy deprisa"], 1, "Activa el parasimpático."],
  ],
  examen: [
    ["La voz de los chicos baja en la pubertad porque…", ["se acortan las cuerdas", "la laringe y las cuerdas crecen", "cambian los pulmones", "se debilita el diafragma"], 1, "Cuerdas más largas y gruesas vibran más despacio."],
    ["Una cantante quiere más volumen sin forzar. Debe…", ["tensar el cuello", "mejorar el apoyo y la resonancia", "gritar", "subir los hombros al inspirar"], 1, "Presión de aire regulada y amplificación natural."],
    ["Un violinista de 16 años pasa de estudiar 1 h a 4 h diarias de golpe y aparece dolor de muñeca. La causa más probable es…", ["una infección", "una lesión por sobreuso por aumento brusco de carga", "falta de calcio", "la edad"], 1, "Hay que progresar en la carga."],
    ["Una bailarina con rodillas que se van hacia dentro al caer de los saltos debería fortalecer…", ["los bíceps", "el glúteo medio", "el trapecio", "los maseteros"], 1, "Controla la cadera y la rodilla en el plano frontal."],
    ["Mantener un estiramiento estático unos…", ["2 s", "20-30 s", "5 min", "1 h"], 1, "Tiempo eficaz recomendado."],
    ["La espondilólisis en jóvenes bailarines se relaciona con…", ["saltos de puntillas", "hiperextensiones lumbares repetidas", "giros de cabeza", "el canto"], 1, "Fractura por estrés de la vértebra."],
    ["¿Cuál es el orden correcto del calentamiento?", ["Específico, general, movilidad", "General, movilidad, dinámicos, específico", "Estático largo y después saltar", "Solo la parte específica"], 1, "De lo general a lo específico."],
    ["Un actor sufre temblor de manos y voz entrecortada antes de salir. Es…", ["una respuesta parasimpática", "una activación simpática excesiva", "una lesión vocal", "un problema de flexibilidad"], 1, "Ansiedad escénica."],
  ],
  feynman: ["Por qué se dice que el cuerpo es el instrumento del artista escénico", "Cómo se produce la voz y de qué dependen tono, intensidad y timbre", "Qué es el apoyo respiratorio y por qué protege la voz", "Por qué el en dehors debe nacer en la cadera", "Qué lesiones son típicas en bailarines y músicos y cómo se previenen", "Cómo se puede gestionar la ansiedad escénica"],
  mapa: ["CUERPO EN ESCENA", [["Expresión", "cuerpo · espacio · tiempo · energía"], ["Voz", "fuelle · cuerdas · resonadores"], ["Danza y circo", "flexibilidad · fuerza · giros"], ["Salud", "lesiones · calentamiento · ansiedad"]]],
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo: cuerpo, espacio, tiempo y energía."],
    ["Línea de plomada", "Oreja, hombro, cadera, delante de rodilla y tobillo."],
    ["Aparato fonador", "Fuelle (pulmones), vibrador (laringe) y resonadores-articuladores."],
    ["Tono, intensidad y timbre", "Cuerdas vocales, presión del aire y resonadores."],
    ["Apoyo", "Presión de aire regulada por diafragma y abdominales."],
    ["Higiene vocal", "Hidratarse, no gritar ni carraspear, descansar la voz."],
    ["Nódulos vocales", "Engrosamientos de las cuerdas por abuso de la voz."],
    ["En dehors", "Rotación externa de las piernas que nace en la cadera."],
    ["Estiramientos", "Dinámicos al calentar; estáticos y FNP al final."],
    ["Recepción del salto", "Punta, talón, plié y rodilla sobre el segundo dedo."],
    ["Lesión por sobreuso", "Daño por cargas repetidas sin recuperación suficiente."],
    ["Ansiedad escénica", "Activación simpática excesiva; se calma con respiración lenta."],
  ],
  ejemplos: [
    ["Analiza la postura de un violinista desde la anatomía e indica dos riesgos y dos medidas preventivas.", ["Sujeta el violín entre la mandíbula y la clavícula izquierdas con el cuello rotado e inclinado.", "El brazo izquierdo está en supinación y elevado; el derecho mueve el arco con el hombro en abducción.", "Riesgos: dolor cervical y de hombro por la asimetría mantenida y tendinopatías del antebrazo.", "Prevención: barbada y almohadilla ajustadas a su anatomía y pausas cada 25-30 min con movilidad y estiramientos."], "La postura asimétrica mantenida exige ajustes del instrumento, pausas y fortalecimiento compensatorio."],
    ["Una actriz debe decir un monólogo de 3 minutos en un teatro de 500 butacas sin micrófono. Describe cómo prepararía su aparato fonador.", ["Fuelle: respiración diafragmático-costal y ejercicios de apoyo (sostener una «s» 20-30 segundos).", "Vibrador: calentamiento suave con vibración de labios y sirenas, sin forzar el volumen.", "Resonadores: ejercicios con «m» y «n» para llevar la voz a la máscara.", "Articuladores: trabalenguas y apertura de mandíbula; hidratación y cuello relajado."], "Proyectar con apoyo y resonancia, no con fuerza en la garganta."],
    ["Una bailarina gira con los brazos en segunda (abiertos) y los recoge en primera. Explica el efecto con la biomecánica y por qué usa spotting.", ["Al recoger los brazos disminuye su momento de inercia.", "Como el momento angular se conserva, aumenta su velocidad de giro.", "El spotting mantiene la vista en un punto el mayor tiempo posible y gira la cabeza rápido al final, reduciendo la estimulación del oído interno y el mareo."], "Recoger los brazos acelera el giro; el spotting conserva la orientación y el equilibrio."],
    ["Diseña un calentamiento de 20 minutos para un ensayo de danza contemporánea.", ["5 min de activación: desplazamientos por el espacio y saltos suaves.", "5 min de movilidad de cuello, hombros, columna, caderas, rodillas y tobillos.", "5 min de estiramientos dinámicos y activación de core y glúteos.", "5 min de parte específica: rodadas, apoyos en el suelo y secuencias de la coreografía a ritmo creciente."], "Progresión de general a específico, de menor a mayor intensidad."],
    ["Un estudiante de piano pasa de 1 h a 3 h de estudio en una semana antes de una audición y nota hormigueo en los dedos por la noche. ¿Qué puede pasarle y qué debe hacer?", ["El aumento brusco de carga y la flexión mantenida de la muñeca pueden irritar el nervio mediano.", "El hormigueo nocturno en los dedos es típico del túnel carpiano.", "Debe reducir la carga, hacer pausas, revisar la altura del banco y la posición de la muñeca, y consultar a un especialista si persiste."], "Posible inicio de túnel carpiano por sobreuso: bajar la carga y consultar."],
    ["Un actor siente el corazón a 130 lpm y la boca seca antes de un estreno. Propón un protocolo de 5 minutos para regular la activación.", ["1 min de respiración 4-7 (4 s inspirar, 7 s espirar).", "2 min de relajación progresiva: hombros, mandíbula, manos.", "1 min de visualización de la primera escena bien hecha.", "1 min de calentamiento vocal suave y un sorbo de agua."], "La espiración larga y la relajación activan el parasimpático y devuelven la activación al nivel óptimo."],
  ],
  errores: [
    "Pensar que la flexibilidad es solo de «nacimiento»: se pierde si no se trabaja y se mejora con método.",
    "Forzar el en dehors desde las rodillas o los pies en lugar de la cadera.",
    "Creer que para tener más volumen hay que tensar el cuello y gritar.",
    "Hacer estiramientos estáticos largos justo antes de saltar en lugar de un calentamiento dinámico.",
    "Ignorar el dolor persistente pensando que «forma parte del arte».",
    "Considerar los nervios antes de actuar como algo siempre negativo: una activación moderada ayuda.",
  ],
  ejercicios: {
    b: [
      ["Nombra los cuatro elementos de la expresión corporal.", "Cuerpo, espacio, tiempo y energía (calidad del movimiento)."],
      ["Indica las capacidades físicas más exigidas en la danza clásica y en la música instrumental.", "Danza: flexibilidad, fuerza, equilibrio y potencia. Música: motricidad fina, resistencia local y postura mantenida."],
      ["Describe la línea de plomada en una postura correcta.", "Pasa por la oreja, el hombro, la cadera, un poco por delante de la rodilla y por delante del tobillo."],
      ["Nombra las tres partes del aparato fonador.", "Fuelle (respiratorio), vibrador (laringe y cuerdas vocales) y resonadores-articuladores."],
      ["¿De qué depende el tono, la intensidad y el timbre de la voz?", "Tono: longitud, grosor y tensión de las cuerdas. Intensidad: presión del aire. Timbre: resonadores."],
      ["Cita cuatro medidas de higiene vocal.", "Hidratarse, no gritar ni carraspear, no fumar y descansar la voz (también calentarla)."],
      ["¿Qué son los nódulos vocales?", "Engrosamientos del borde de las cuerdas vocales por abuso y mal uso de la voz."],
      ["Define flexibilidad y sus dos componentes.", "Capacidad de moverse con gran amplitud; depende de la movilidad articular y la elasticidad muscular."],
      ["Diferencia estiramiento estático y dinámico y di cuándo se usa cada uno.", "Estático: mantener la máxima amplitud 20-30 s, al final. Dinámico: movimientos controlados por la amplitud, en el calentamiento."],
      ["Cita tres lesiones frecuentes en bailarines.", "Esguince de tobillo, fractura por estrés de metatarsianos y tendinopatía rotuliana (también dolor lumbar)."],
      ["Indica las fases de un calentamiento.", "Activación general, movilidad articular, estiramientos dinámicos y parte específica."],
      ["¿Qué es la ansiedad escénica?", "Una activación excesiva del sistema simpático ante una actuación que empeora el rendimiento."],
    ],
    m: [
      ["Explica por qué los artistas escénicos necesitan preparación física complementaria.", "Porque su actividad exige resistencia, fuerza y flexibilidad, y los ensayos solos no equilibran las cargas; el cross-training mejora la condición, reduce lesiones y el rendimiento al final de las funciones."],
      ["Relaciona la hiperlordosis lumbar con la técnica de la danza.", "Al forzar el en dehors o con abdominales débiles y psoas acortado, la pelvis bascula hacia delante; aumenta la carga en las vértebras lumbares y el riesgo de dolor y espondilólisis."],
      ["Explica cómo vibran las cuerdas vocales y por qué una tensión del cuello empeora la voz.", "Se acercan y el aire espirado las hace vibrar; la tensión del cuello estrecha la laringe, endurece las cuerdas y reduce la resonancia, por lo que la voz suena forzada y se fatiga."],
      ["¿Por qué la hidratación es tan importante para la voz?", "La mucosa de las cuerdas vibra mejor si está flexible y húmeda; la deshidratación aumenta la fricción y el riesgo de lesión."],
      ["Explica el método FNP y su base neurofisiológica.", "Se estira un músculo, se contrae unos segundos contra resistencia, se relaja y se estira más; la contracción activa los órganos de Golgi, que inhiben el músculo y permiten mayor amplitud."],
      ["¿Por qué la flexibilidad debe acompañarse de fuerza?", "Una articulación muy móvil sin control muscular es inestable y se lesiona; la fuerza en toda la amplitud permite usar la flexibilidad con seguridad."],
      ["Explica biomecánicamente por qué la recepción de un salto debe pasar por punta, talón y plié.", "Alarga el tiempo de frenado y reparte la carga en tres articulaciones; con el mismo impulso, la fuerza máxima es menor."],
      ["¿Por qué no se recomienda empezar con puntas antes de los 11-12 años?", "Los huesos del pie aún están en crecimiento y se necesita fuerza y técnica suficientes; antes, el riesgo de deformidades y lesiones es alto."],
      ["Explica qué es la distonía focal del músico.", "Un trastorno del control motor por el que los dedos pierden coordinación al tocar, relacionado con una plasticidad neuronal alterada por la repetición extrema."],
      ["Indica cinco factores de riesgo de lesión en la danza.", "Aumento brusco de horas, fatiga, técnica forzada, suelos sin amortiguación y déficit energético (también crecimiento rápido y calzado)."],
      ["Explica la relación entre activación y rendimiento con un ejemplo escénico.", "Con poca activación el artista está apagado; con activación moderada rinde al máximo; con demasiada aparecen temblor, bloqueo y olvidos."],
      ["Propón tres estrategias para la ansiedad escénica y explica por qué funcionan.", "Respiración lenta (activa el parasimpático), visualización (prepara y da control) y rutinas previas (reducen la incertidumbre)."],
      ["Explica por qué los músicos deben proteger su audición.", "La exposición continuada a sonidos intensos daña las células del oído interno de forma irreversible; los protectores específicos reducen el volumen sin deformar el sonido."],
      ["¿Qué profesionales sanitarios pueden ayudar a un artista y en qué?", "Fisioterapeuta (lesiones y prevención), logopeda y otorrino (voz), nutricionista (alimentación), psicólogo (ansiedad y salud mental), médico deportivo."],
    ],
    a: [
      ["Diseña un plan semanal de preparación física para una estudiante de danza que ensaya 12 horas a la semana.", "Dos sesiones de 30 min de fuerza (glúteos, core, pie y tobillo, tren superior), una o dos de aeróbico suave (natación o bici, 30 min), propiocepción diaria de 10 min, estiramientos al final de cada sesión, un día completo de descanso y control del sueño y la alimentación."],
      ["Una cantante tiene ronquera tras un fin de semana de conciertos y fiestas con ruido. Explica la posible causa y un plan de recuperación.", "Abuso vocal (cantar y hablar sobre ruido, gritar), quizá con alcohol y falta de sueño: edema o fatiga de las cuerdas. Plan: reposo vocal relativo, mucha hidratación, ambiente humidificado, no carraspear ni susurrar forzando, y consulta si dura más de dos semanas."],
      ["Analiza un arabesque: articulaciones, movimientos, músculos implicados y riesgos.", "Pierna de apoyo: cadera y rodilla extendidas con rotación externa; pierna libre: extensión de cadera con rotación externa y rodilla extendida (glúteo mayor, isquiotibiales, rotadores); columna en extensión (erectores); brazos y escápulas estabilizados. Riesgos: hiperextensión lumbar si falta movilidad de cadera y control abdominal."],
      ["Calcula la fuerza media de recepción de un salto de 0,5 m de altura de un bailarín de 60 kg si amortigua en 0,08 s y en 0,3 s (v = √(2gh)).", "v = √(9,8) = 3,13 m/s; Δp = 188 kg·m/s. F frenado = 2350 N (0,08 s) o 627 N (0,3 s), a lo que se suma su peso (588 N). Amortiguar bien reduce la fuerza a menos de la mitad."],
      ["Un guitarrista sufre dolor cervical. Propón cambios ergonómicos y ejercicios justificados.", "Ergonomía: altura de la silla y del atril a la de los ojos, reposapiés o soporte para elevar la guitarra sin inclinar el tronco, pausas cada 25 min. Ejercicios: movilidad cervical suave, fortalecimiento de flexores profundos del cuello y de la musculatura escapular, estiramiento de trapecio superior."],
      ["Explica por qué la deficiencia relativa de energía es un problema de salud y de rendimiento en la danza.", "La ingesta insuficiente altera hormonas (menos estrógenos), produce pérdida de menstruación y de masa ósea (fracturas por estrés), fatiga, menor fuerza, más lesiones y problemas psicológicos; además baja la concentración y la calidad artística."],
      ["Compara la exigencia energética de una variación de ballet de 2 minutos y de un musical de 2 horas.", "La variación es sobre todo anaeróbica (fosfágenos y glucólisis, con mucho lactato). El musical combina picos anaeróbicos con una gran base aeróbica, además de exigencia vocal; necesita más resistencia y gestión del glucógeno e hidratación."],
      ["Relaciona la técnica Alexander con los conceptos de propiocepción y tono muscular.", "Busca reducir tensiones innecesarias y mejorar la alineación cabeza-cuello-espalda mediante la conciencia del propio cuerpo; mejora la propiocepción y ajusta el tono muscular al mínimo necesario para cada gesto."],
      ["Diseña un estudio sencillo para comprobar si un calentamiento vocal mejora la voz de un grupo de compañeros.", "Grabar a cada participante leyendo un texto y sosteniendo una vocal antes y después de 10 min de calentamiento; medir tiempo máximo de fonación, intensidad con una aplicación y valoración de oyentes «a ciegas»; comparar medias."],
      ["Argumenta, con contenidos de todo el curso, por qué un artista escénico debe conocer la anatomía de su cuerpo.", "Le permite entender cómo producir movimientos y voz con eficacia (biomecánica, aparato fonador), entrenar sus capacidades (sistemas energéticos, adaptaciones cardiorrespiratorias), prevenir lesiones (aparato locomotor), gestionar emociones (sistema nervioso autónomo) y cuidarse (nutrición, sueño): prolonga y mejora su carrera."],
    ],
  },
  glosario: [
    ["Expresión corporal", "Uso del movimiento para comunicar ideas, emociones y personajes."],
    ["Línea de plomada", "Línea vertical de referencia para valorar la alineación postural."],
    ["Aparato fonador", "Conjunto de órganos que producen la voz."],
    ["Laringe", "Órgano del cuello con cartílagos que contiene las cuerdas vocales."],
    ["Cuerdas vocales", "Pliegues de la laringe que vibran con el aire y producen la voz."],
    ["Resonadores", "Cavidades que amplifican y dan timbre a la voz."],
    ["Apoyo", "Control de la presión del aire espirado al hablar o cantar."],
    ["Disfonía", "Alteración de la calidad de la voz."],
    ["Nódulo vocal", "Engrosamiento del borde de las cuerdas vocales por abuso vocal."],
    ["Flexibilidad", "Capacidad de realizar movimientos con gran amplitud."],
    ["En dehors", "Rotación externa de las piernas en la danza clásica."],
    ["FNP", "Método de estiramiento que alterna contracción, relajación y estiramiento."],
    ["Spotting", "Fijación de la mirada en un punto durante los giros."],
    ["Lesión por sobreuso", "Daño de un tejido por cargas repetidas sin recuperación suficiente."],
    ["Túnel carpiano", "Compresión del nervio mediano en la muñeca."],
    ["Distonía focal", "Pérdida del control motor de un gesto muy entrenado."],
    ["Ansiedad escénica", "Activación excesiva ante una actuación que perjudica el rendimiento."],
    ["Cross-training", "Entrenamiento complementario de otras capacidades físicas."],
  ],
  situacion: {
    titulo: "El cuerpo del artista: guía de salud para el grupo de teatro y danza",
    reto: "El grupo de teatro, danza o música del centro prepara su espectáculo de fin de curso. Debéis elaborar una guía de salud adaptada a sus integrantes que incluya calentamiento físico y vocal, prevención de lesiones y estrategias para la ansiedad escénica.",
    pasos: [
      "Entrevistad a los integrantes: disciplinas, horas de ensayo, molestias frecuentes y nivel de nervios antes de actuar.",
      "Analizad las exigencias anatómicas y fisiológicas de su actividad (postura, voz, saltos, instrumentos).",
      "Diseñad un calentamiento físico y otro vocal o instrumental de 15-20 minutos, justificando cada ejercicio.",
      "Proponed medidas preventivas para las lesiones más probables y pautas de higiene vocal y postural.",
      "Preparad un protocolo breve de gestión de la ansiedad para antes de salir a escena y probadlo en un ensayo.",
    ],
    producto: "Una guía de salud ilustrada (o vídeo tutorial) con los calentamientos, las pautas preventivas y el protocolo emocional, presentada y practicada con el grupo.",
    evaluacion: [
      "El análisis de las exigencias es riguroso y usa los conocimientos anatómicos del curso.",
      "Los calentamientos están bien estructurados y justificados.",
      "Las medidas preventivas y de higiene son adecuadas y realistas.",
      "La guía es clara, motivadora y útil para el grupo.",
    ],
  },
  familias: [
    "Haced juntos un pequeño calentamiento vocal (vibrar labios, sirenas, trabalenguas) antes de leer en voz alta.",
    "Si alguien en casa toca un instrumento, revisad la altura de la silla y el atril.",
    "Comentad qué hacéis cuando os ponéis nerviosos antes de hablar en público y probad la respiración lenta.",
    "Valorad juntos el esfuerzo físico de los artistas al ver un espectáculo de danza, circo o teatro.",
  ],
  saberes: B.SAB("El cuerpo humano en la expresión y la comunicación artística: exigencias físicas de las artes escénicas, postura y alineación, aparato fonador y técnica e higiene vocal, flexibilidad y fuerza en la danza y el circo, lesiones de bailarines y músicos, calentamiento, preparación física y gestión de la ansiedad escénica"),
  ideas: [
    "Invitar a un bailarín, actor o músico profesional a hablar de su preparación física y de las lesiones que ha sufrido.",
    "Grabar la voz antes y después de un calentamiento y comparar el tiempo máximo de fonación.",
    "Analizar en vídeo el en dehors de compañeros que hacen danza, observando de dónde nace la rotación.",
    "Practicar una sesión de relajación progresiva y de respiración antes de una presentación oral en clase.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Aparato_fonador", "Aparato fonador"),
    B.FUENTES.WIKI("Miedo_escénico", "Miedo escénico"),
  ],
});
