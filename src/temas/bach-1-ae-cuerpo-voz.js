// Artes Escénicas I, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, el, pa } = B;

// Aparato fonador simplificado: pulmones (aire), laringe (vibración) y resonadores (amplificación).
const fonador = marco("Cómo se produce la voz: aire, vibración y resonancia",
  `${pa("M130 26 C104 26 96 50 104 66 L156 66 C164 50 156 26 130 26Z", 'fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"')}
  ${rc(122, 66, 16, 34, 'rx="4" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"')}
  ${el(108, 132, 26, 34, 'fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"')}${el(152, 132, 26, 34, 'fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"')}
  ${pa("M84 168 Q130 150 176 168", 'fill="none" stroke="var(--leaf)" stroke-width="3"')}
  ${t(214, 44, "3 · Resonadores", { fs: 10, bold: 1, color: "var(--sun)", maxW: 90 })}${t(214, 58, "boca, nariz", { fs: 9, color: "var(--muted)", maxW: 90 })}
  ${t(214, 84, "2 · Laringe", { fs: 10, bold: 1, color: "var(--red)", maxW: 90 })}${t(214, 98, "cuerdas vocales", { fs: 9, color: "var(--muted)", maxW: 90 })}
  ${t(46, 122, "1 · Pulmones", { fs: 10, bold: 1, color: "var(--pen)", maxW: 80 })}${t(46, 136, "el aire", { fs: 9, color: "var(--muted)", maxW: 80 })}
  ${t(214, 164, "Diafragma", { fs: 10, bold: 1, color: "var(--leaf)", maxW: 90 })}`);

// Kinesfera: el espacio personal que rodea al cuerpo.
const kinesfera = marco("La kinesfera: el espacio personal que alcanza el cuerpo",
  `${ci(130, 92, 72, 'fill="var(--leaf)" fill-opacity=".1" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 4"')}
  ${ci(130, 50, 10, 'fill="var(--ink)"')}${pa("M130 60 V112 M130 72 L76 52 M130 72 L184 52 M130 112 L104 156 M130 112 L156 156", 'fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"')}
  ${t(130, 16, "kinesfera", { bold: 1, color: "var(--leaf)" })}${t(222, 168, "espacio general", { fs: 9, color: "var(--muted)", maxW: 70 })}`);

module.exports = B.tema({
  titulo: "El cuerpo y la voz",
  minutos: 60,
  objetivos: [
    "Reconocer el cuerpo y la voz como herramientas expresivas del intérprete",
    "Practicar la conciencia corporal, la relajación y el calentamiento",
    "Conocer cómo se produce la voz y trabajar respiración, proyección y dicción",
    "Utilizar el gesto, la postura y la mirada para comunicar emociones",
  ],
  claves: ["expresión corporal", "gesto", "postura", "respiración", "diafragma", "proyección", "dicción", "calentamiento"],
  pregunta: {
    texto: "¿Por qué un actor en la última fila de un teatro se ve y se oye perfectamente sin gritar?",
    respuesta: "Porque ha entrenado su <b>cuerpo</b> y su <b>voz</b>: usa la <mark>respiración diafragmática</mark>, aprovecha los resonadores y amplía sus gestos para que lleguen lejos sin perder naturalidad.",
  },
  lectura: {
    titulo: "Sin voz el día del estreno",
    html: `<p>Daniel lleva semanas ensayando el papel principal de la obra del instituto. En los ensayos grita para que se le oiga desde el fondo del salón de actos y, la víspera del estreno, se despierta casi afónico. Su profesora le explica que el problema no es su voz, sino cómo la usa: respira con el pecho, tensa el cuello y fuerza la garganta.</p>
    <p>Esa tarde hacen juntos un calentamiento: respiración con el abdomen, bostezos, zumbidos con la boca cerrada y ejercicios de lengua y labios. Al día siguiente, Daniel habla sin esfuerzo y su voz llena la sala. Ha aprendido que la voz y el cuerpo del intérprete <b>se entrenan</b> como los de un deportista.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "El cuerpo, primer instrumento",
      html: `<p>El intérprete no tiene otro instrumento que <b>su propio cuerpo</b>. Con él camina, se detiene, mira, toca, respira y habla. El público lee ese cuerpo antes incluso de escuchar una palabra: una espalda encorvada, unos pasos rápidos o unas manos inquietas ya cuentan quién es el personaje y cómo se siente.</p>
      <p>La <b>expresión corporal</b> es la capacidad de comunicar con el cuerpo de forma consciente. Se trabaja con la <b>postura</b>, el <b>gesto</b>, la <b>mirada</b>, el <b>desplazamiento</b> y la <b>relación con los demás</b> y con el espacio.</p>`,
      svg: B.estrella("Recursos de la expresión corporal", "Cuerpo", ["Postura", "Gesto", "Mirada", "Ritmo", "Espacio", "Contacto"]),
      video: { id: "G4Gp0hc0TMA", titulo: "Lenguaje corporal: el cuerpo grita lo que la mente calla", canal: "TEDx Talks", vistas: 999245 },
    },
    {
      h: "Conciencia corporal y relajación",
      html: `<p>Antes de expresar hay que <b>sentir</b> el cuerpo: notar el peso, los apoyos, la alineación de la columna y las tensiones innecesarias. La <b>relajación</b> no es dejarse caer, sino usar solo la tensión justa para cada acción; un cuerpo rígido no comunica bien.</p>
      <p>La <b>posición neutra</b> es el punto de partida: pies a la anchura de las caderas, rodillas sueltas, columna larga, hombros relajados y mirada al frente. Desde ella el intérprete puede construir cualquier personaje. Un buen ejercicio es tumbarse en el suelo, cerrar los ojos y recorrer mentalmente el cuerpo, de los pies a la cabeza, soltando cada tensión.</p>`,
      svg: B.cajas("Posición neutra del intérprete", [["Pies", "anchura de caderas"], ["Rodillas", "sueltas, no bloqueadas"], ["Columna", "larga y alineada"], ["Hombros", "relajados, mirada al frente"]]),
    },
    {
      h: "El calentamiento",
      html: `<p>Igual que un deportista, el intérprete <b>calienta</b> antes de ensayar o actuar. Un buen calentamiento dura de 10 a 20 minutos y va de lo general a lo particular: activar el cuerpo (movilidad articular, estiramientos suaves), despertar la respiración y preparar la voz (resonadores, articulación).</p>
      <p>Además de prevenir lesiones y afonías, el calentamiento <b>concentra</b> al grupo, crea energía común y deja atrás las preocupaciones del día.</p>`,
      svg: B.flujo("Orden del calentamiento", ["Movilidad articular de pies a cabeza", "Activación y estiramientos suaves", "Respiración diafragmática", "Voz: resonadores y articulación", "Juego de grupo y concentración"]),
      video: { id: "pOwDF1eFdq4", titulo: "Calentamiento vocal y físico para mejorar tu expresión corporal", canal: "Fernando Suarez Teatro", vistas: 69329 },
    },
    {
      h: "Gesto, postura y mirada",
      html: `<p>El <b>gesto</b> puede ser <b>expresivo</b> (muestra una emoción: taparse la cara), <b>descriptivo</b> (dibuja algo: el tamaño de una caja) o <b>simbólico</b> (tiene un significado acordado: decir adiós). La <b>postura</b> revela el estado y el carácter: erguida y abierta transmite seguridad; cerrada, miedo o tristeza.</p>
      <p>La <b>mirada</b> dirige la atención del público: si un actor mira fijamente un punto, todos miran allí. En escena los gestos deben ser <b>claros</b> y algo <b>ampliados</b> para que lleguen a toda la sala.</p>`,
      svg: B.rejilla("Tipos de gesto", ["Tipo", "Qué hace", "Ejemplo"], [["Expresivo", "muestra emoción", "taparse la cara"], ["Descriptivo", "dibuja algo", "tamaño de una caja"], ["Simbólico", "signo acordado", "decir adiós"], ["Funcional", "acción real", "abrir una puerta"]]),
      video: { id: "M61avi17J6k", titulo: "Domina tu rostro: 14 ejercicios gesticulares y 6 emociones básicas", canal: "Fernando Suarez Teatro", vistas: 241189 },
    },
    {
      h: "El cuerpo en el espacio",
      html: `<p>Alrededor de cada persona hay una esfera que alcanza con brazos y piernas sin desplazarse: la <b>kinesfera</b>. Más allá está el <b>espacio general</b>, por donde nos movemos. El intérprete aprende a usar ambos y a variar los <b>niveles</b> (alto, medio y bajo), las direcciones y las velocidades.</p>
      <p>También cuenta la <b>distancia</b> con los demás: dos personajes muy cerca transmiten intimidad o amenaza; muy lejos, frialdad o separación. El <b>mimo</b> y el teatro gestual cuentan historias solo con estos recursos: con el cuerpo dibujan objetos, paredes o puertas que no existen, y el público los ve como si fueran reales.</p>`,
      svg: kinesfera,
    },
    {
      h: "Cómo se produce la voz",
      html: `<p>La voz nace de tres sistemas. El <b>respiratorio</b> (pulmones y diafragma) aporta el aire. La <b>laringe</b>, con las <b>cuerdas vocales</b>, lo convierte en vibración, es decir, en sonido. Y los <b>resonadores</b> (faringe, boca y fosas nasales) amplifican y dan color a ese sonido.</p>
      <p>Por último, los <b>articuladores</b> (labios, lengua, dientes y paladar) transforman el sonido en palabras. Un problema en cualquiera de estas fases cambia el resultado: poco aire da una voz débil; tensión en la garganta, una voz forzada.</p>`,
      svg: fonador,
    },
    {
      h: "Respiración y proyección",
      html: `<p>La respiración del intérprete es <b>diafragmática</b> o costo-abdominal: al inspirar, el diafragma baja y el abdomen y las costillas se expanden; al hablar, el aire sale de forma controlada. Así se consigue más aire, menos tensión y una voz estable.</p>
      <p><b>Proyectar</b> la voz no es gritar: es enviarla lejos con buen apoyo de aire y aprovechando los resonadores, sin forzar la garganta. Ayuda pensar que hablamos para la última fila y mantener el cuerpo abierto hacia el público.</p>`,
      svg: B.comparar("Gritar frente a proyectar", ["Gritar", ["aire del pecho", "garganta tensa", "voz que se rompe", "cansa y daña"]], ["Proyectar", ["aire del diafragma", "garganta libre", "voz que resuena", "se mantiene horas"]]),
      video: { id: "s8B_kIz8ea4", titulo: "Cómo respirar correctamente al hablar en público: técnicas de respiración", canal: "ExpresArte Mejor - Oratoria y Locución", vistas: 104038 },
    },
    {
      h: "Dicción, expresividad y cuidado de la voz",
      html: `<p>La <b>dicción</b> es pronunciar con claridad cada sonido; se entrena con trabalenguas y ejercicios de labios y lengua. La <b>expresividad</b> depende de las cualidades de la voz: <b>volumen</b> (fuerte o suave), <b>tono</b> (agudo o grave), <b>ritmo</b> (rápido o lento), <b>pausas</b> y <b>entonación</b>.</p>
      <p>Para <b>cuidar la voz</b>: beber agua, calentar antes de usarla, no gritar ni carraspear, dormir bien y descansar la voz si duele. Una afonía es una señal de alarma.</p>`,
      svg: B.cajas("Cualidades expresivas de la voz", [["Volumen", "fuerte · suave"], ["Tono", "agudo · grave"], ["Ritmo", "rápido · lento"], ["Pausa", "silencio que dice"]]),
    },
  ],
  figura: {
    titulo: "El cuerpo y la voz en cuatro claves",
    items: [["Conciencia", "◎", "sentir el", "propio cuerpo"], ["Gesto", "✋", "postura, gesto", "y mirada"], ["Respiración", "≈", "diafragma,", "aire controlado"], ["Voz", "♪", "proyección", "y dicción"]],
  },
  video: { id: "eGCMlT47kcA", titulo: "La proyección de la voz en el teatro", canal: "Carolina Bessolo", vistas: 40486 },
  quiz: [
    ["El principal instrumento del intérprete es…", ["el vestuario", "su propio cuerpo", "el micrófono", "el texto"], 1, "Cuerpo y voz."],
    ["La posición neutra incluye…", ["rodillas bloqueadas", "columna larga y hombros relajados", "brazos cruzados", "mirada al suelo"], 1, "Punto de partida para cualquier personaje."],
    ["Un buen calentamiento va…", ["de lo particular a lo general", "de lo general a lo particular", "solo con la voz", "solo con estiramientos fuertes"], 1, "Cuerpo, respiración y después voz."],
    ["Hacer con las manos el tamaño de una caja es un gesto…", ["expresivo", "descriptivo", "simbólico", "involuntario"], 1, "Dibuja algo en el aire."],
    ["La kinesfera es…", ["un tipo de danza", "el espacio personal que alcanza el cuerpo sin desplazarse", "el escenario", "un ejercicio de voz"], 1, "Concepto de Laban."],
    ["Las cuerdas vocales están en…", ["los pulmones", "la laringe", "la boca", "la nariz"], 1, "Producen la vibración."],
    ["Los resonadores sirven para…", ["respirar", "amplificar y dar color al sonido", "articular palabras", "tragar"], 1, "Faringe, boca, fosas nasales."],
    ["La respiración del intérprete debe ser…", ["clavicular", "diafragmática o costo-abdominal", "solo nasal", "muy rápida"], 1, "Más aire y menos tensión."],
    ["Proyectar la voz es…", ["gritar", "enviarla lejos con apoyo de aire sin forzar la garganta", "hablar muy rápido", "usar micrófono"], 1, "No es gritar."],
    ["Para cuidar la voz conviene…", ["carraspear a menudo", "beber agua y calentar antes de usarla", "gritar en los ensayos", "hablar sin parar"], 1, "Hábitos de higiene vocal."],
  ],
  examen: [
    ["Una actriz encoge los hombros, mira al suelo y cruza los brazos. ¿Qué transmite su postura?", ["Seguridad", "Miedo o tristeza", "Alegría", "Autoridad"], 1, "Postura cerrada."],
    ["Un actor se queda afónico tras gritar en los ensayos. ¿Cuál es la causa más probable?", ["Poca dicción", "Forzar la garganta sin apoyo de aire", "Exceso de relajación", "Calentar demasiado"], 1, "Falta de técnica de proyección."],
    ["Dos personajes hablan casi pegados. La distancia sugiere…", ["frialdad", "intimidad o amenaza", "indiferencia", "nada"], 1, "La proximidad comunica."],
    ["¿Qué elemento de la voz se entrena con trabalenguas?", ["El volumen", "La dicción", "El tono", "La respiración"], 1, "Pronunciación clara."],
    ["Al inspirar con el diafragma…", ["se suben los hombros", "el abdomen y las costillas se expanden", "se tensa el cuello", "se cierra la garganta"], 1, "Respiración costo-abdominal."],
  ],
  feynman: ["Qué recursos tiene la expresión corporal", "Por qué hay que calentar", "Cómo se produce la voz", "Diferencia entre gritar y proyectar"],
  mapa: ["EL CUERPO Y LA VOZ", [["Cuerpo", "postura · gesto · mirada · espacio"], ["Preparación", "conciencia · relajación · calentamiento"], ["Voz", "aire · laringe · resonadores · articuladores"], ["Técnica", "respiración · proyección · dicción"]]],
  tarjetas: [
    ["Expresión corporal", "Capacidad de comunicar con el cuerpo de forma consciente."],
    ["Posición neutra", "Postura equilibrada y relajada de partida del intérprete."],
    ["Gesto descriptivo", "Gesto que dibuja o representa algo."],
    ["Kinesfera", "Espacio que alcanza el cuerpo sin desplazarse."],
    ["Diafragma", "Músculo que separa tórax y abdomen y dirige la respiración."],
    ["Resonadores", "Cavidades que amplifican y colorean la voz."],
    ["Proyección", "Capacidad de enviar la voz lejos sin forzarla."],
    ["Dicción", "Forma de pronunciar con claridad."],
  ],
  ejemplos: [
    ["Construye corporalmente a un anciano cansado.", ["Postura: espalda curvada y rodillas flexionadas.", "Ritmo: pasos cortos y lentos, pausas para respirar.", "Gesto y mirada: manos que buscan apoyo, mirada al suelo."], "Postura, ritmo y gesto cuentan la edad y el cansancio sin palabras."],
    ["Corrige: «Para que me oigan, grito con todas mis fuerzas».", ["Gritar tensa la garganta y daña las cuerdas vocales.", "Hay que respirar con el diafragma y apoyar el aire.", "Usar los resonadores y pensar en la última fila."], "Proyectar con apoyo de aire, no gritar."],
    ["Di la frase «Ya ha llegado» con tres intenciones distintas.", ["Alegría: tono agudo, ritmo rápido, volumen alto.", "Miedo: volumen bajo, pausas, voz temblorosa.", "Fastidio: tono grave, ritmo lento, suspiro final."], "Las cualidades de la voz cambian el sentido de la misma frase."],
  ],
  errores: [
    "Salir a escena sin calentar el cuerpo ni la voz.",
    "Confundir proyectar con gritar.",
    "Hacer gestos pequeños o confusos que no llegan a la sala.",
    "Respirar con los hombros y el pecho, tensando el cuello.",
  ],
  ejercicios: {
    b: [
      ["Nombra cuatro recursos de la expresión corporal.", "Postura, gesto, mirada, desplazamiento, ritmo, contacto."],
      ["Describe la posición neutra.", "Pies a la anchura de las caderas, rodillas sueltas, columna larga, hombros relajados y mirada al frente."],
      ["¿Qué tres sistemas intervienen en la voz?", "Respiratorio (aire), laringe con cuerdas vocales (vibración) y resonadores (amplificación)."],
      ["Cita tres consejos para cuidar la voz.", "Beber agua, calentar, no gritar ni carraspear, descansar."],
    ],
    m: [
      ["Explica los tres tipos de gesto con un ejemplo de cada uno.", "Expresivo: taparse la cara de vergüenza; descriptivo: señalar el tamaño de algo; simbólico: saludar con la mano."],
      ["¿Por qué el calentamiento va de lo general a lo particular?", "Porque primero se activa todo el cuerpo y la respiración, que sostienen la voz, y después se trabajan resonadores y articulación."],
      ["Diferencia gritar y proyectar.", "Gritar usa aire del pecho y tensa la garganta; proyectar apoya el aire en el diafragma y usa los resonadores sin forzar."],
      ["Explica cómo la distancia entre personajes comunica.", "La cercanía sugiere intimidad o amenaza; la lejanía, frialdad o separación."],
    ],
    a: [
      ["Diseña un calentamiento de 10 minutos para tu grupo con cinco ejercicios ordenados.", "Respuesta abierta. Debe incluir movilidad, activación, respiración, voz y concentración en orden lógico."],
      ["Representa sin palabras a tres personajes distintos y explica qué recursos corporales usas en cada uno.", "Respuesta abierta. Se valora la claridad de postura, ritmo, gesto y mirada."],
    ],
  },
  glosario: [
    ["Mimo", "Arte de expresar solo con el cuerpo y el gesto, sin palabras."],
    ["Tono muscular", "Grado de tensión de los músculos."],
    ["Laringe", "Órgano del cuello donde están las cuerdas vocales."],
    ["Articuladores", "Labios, lengua, dientes y paladar, que forman las palabras."],
    ["Afonía", "Pérdida total o parcial de la voz."],
    ["Entonación", "Melodía de la frase al hablar."],
    ["Volumen", "Intensidad de la voz: fuerte o suave."],
    ["Trabalenguas", "Frase difícil de pronunciar que entrena la dicción."],
  ],
  situacion: {
    titulo: "Un personaje sin palabras y con palabras",
    reto: "Crear un personaje y presentarlo primero solo con el cuerpo y después con la voz.",
    pasos: [
      "Elige un personaje (edad, oficio, estado de ánimo).",
      "Busca su postura, su forma de andar y dos gestos propios.",
      "Preséntalo un minuto sin hablar; el grupo adivina quién es.",
      "Repite añadiendo un breve monólogo con la voz adecuada.",
    ],
    producto: "Presentación de un personaje en dos versiones (muda y hablada) con una ficha de recursos.",
    evaluacion: [
      "El cuerpo transmite el personaje sin palabras.",
      "La voz se proyecta y se entiende.",
      "Voz y cuerpo son coherentes.",
      "La ficha explica los recursos usados.",
    ],
  },
  familias: [
    "Jugad a las películas: adivinar títulos solo con gestos.",
    "Leed en voz alta un texto corto con distintas emociones.",
    "Practicad juntos trabalenguas para mejorar la dicción.",
    "Recordadle beber agua y no forzar la voz antes de un ensayo.",
  ],
  saberes: "El cuerpo y la voz como instrumentos: conciencia corporal, relajación, posición neutra y calentamiento; gesto, postura, mirada, kinesfera y espacio; fisiología de la voz; respiración diafragmática, proyección, dicción y cualidades expresivas; higiene vocal.",
  ideas: [
    "Rutina fija de calentamiento al inicio de cada sesión.",
    "Juegos de espejo por parejas para la conciencia corporal.",
    "Ejercicios de proyección desde distintos puntos del aula o del patio.",
    "Concurso de trabalenguas y lectura expresiva.",
  ],
  fuentes: [
    { t: "Expresión corporal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Expresi%C3%B3n_corporal" },
    { t: "Voz humana, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Voz_humana" },
  ],
});
