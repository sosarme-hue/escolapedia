// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "El cuerpo y la voz del actor",
  minutos: 60,
  objetivos: ["Reconocer el cuerpo y la voz como herramientas expresivas del intérprete", "Practicar la respiración diafragmática, la relajación y el calentamiento", "Conocer las cualidades de la voz y del movimiento", "Usar gesto, postura, mirada y voz para construir un personaje"],
  claves: ["expresión corporal", "respiración diafragmática", "proyección", "dicción", "gesto", "presencia escénica"],
  pregunta: {
    texto: "Di la frase «Ya has llegado» como si estuvieras feliz, enfadado, asustado o aburrido. Son las mismas palabras. ¿Por qué cambian tanto de significado?",
    respuesta: "Porque más de la mitad de lo que comunicamos no está en las palabras, sino en <mark>cómo</mark> las decimos: el tono, el volumen, el ritmo, la mirada, la postura. El actor entrena su <b>cuerpo</b> y su <b>voz</b> como un músico afina su instrumento.",
  },
  bloques: [
    {
      html: `<h3>El instrumento del actor</h3><p>Un pintor tiene pinceles; un músico, su instrumento. El intérprete escénico tiene su <mark>propio cuerpo y su voz</mark>. Por eso necesita conocerlos, cuidarlos y entrenarlos: ser consciente de cómo se mueve, cómo respira, dónde acumula tensión y qué transmite sin darse cuenta. La comunicación <b>no verbal</b> (gestos, postura, mirada, distancia) es tan importante como la verbal: el público lee el cuerpo antes que el texto.</p>`,
      svg: rueda("Herramientas expresivas del actor", "ACTOR", [["voz", "var(--red)"], ["gesto", "var(--sun)"], ["mirada", "var(--pen)"], ["postura", "var(--leaf)"], ["movimiento", "var(--bac)"], ["silencio", "var(--muted)"]], "var(--ink)"),
    },
    {
      html: `<h3>Relajación y calentamiento</h3><p>Antes de ensayar o actuar hay que preparar el cuerpo. La <b>relajación</b> elimina tensiones innecesarias (hombros, mandíbula, cuello) que bloquean la voz y el movimiento. El <mark>calentamiento</mark> activa articulaciones y músculos de arriba abajo: cuello, hombros, brazos, cadera, rodillas, tobillos, y termina con ejercicios de energía en grupo. Un buen calentamiento previene lesiones, concentra al grupo y crea confianza. El método <b>Feldenkrais</b> o la técnica <b>Alexander</b> trabajan la conciencia corporal de los intérpretes.</p>`,
      svg: flujo("Rutina de calentamiento", ["respirar", "relajar|tensiones", "articula-|ciones", "activar|energía", "juego|en grupo"], "var(--leaf)"),
    },
    {
      html: `<h3>La respiración diafragmática</h3><p>La voz nace del aire. Al respirar con el pecho (respiración <b>clavicular</b>) tomamos poco aire y tensamos el cuello. El actor usa la <mark>respiración diafragmática</mark> o abdominal: al inspirar por la nariz, el <b>diafragma</b> (un músculo con forma de cúpula bajo los pulmones) baja y el abdomen se hincha; al espirar, el abdomen vuelve despacio y controla la salida del aire. Así se tiene más aire, más control y una voz más potente sin forzar la garganta. Un ejercicio: tumbado, con un libro sobre el abdomen, hacer que suba al inspirar y baje al soltar el aire con una «sss» larga.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Respiración diafragmática: al inspirar el diafragma baja y el abdomen se hincha; al espirar el diafragma sube">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[70, "inspirar", 104, 22], [190, "espirar", 86, 12]].map(([x, t, dy, ab]) => `<path d="M${x - 34} 30 Q ${x - 40} 90 ${x - 30} 140 Q ${x} ${150 + ab} ${x + 30} 140 Q ${x + 40} 90 ${x + 34} 30" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><ellipse cx="${x - 14}" cy="62" rx="12" ry="${dy === 104 ? 26 : 20}" fill="var(--inf)" opacity=".6"/><ellipse cx="${x + 14}" cy="62" rx="12" ry="${dy === 104 ? 26 : 20}" fill="var(--inf)" opacity=".6"/><path d="M${x - 30} ${dy} Q ${x} ${dy + (dy === 104 ? -8 : -22)} ${x + 30} ${dy}" fill="none" stroke="var(--red)" stroke-width="4"/><text x="${x}" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <path d="M70 116 v 14 M64 124 l 6 6 l 6 -6" stroke="var(--red)" stroke-width="2.5" fill="none"/><path d="M190 96 v -14 M184 88 l 6 -6 l 6 6" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        <text x="130" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)" ${F}>diafragma</text></svg>`,
      video: { id: "XKO5IzXcdF8", titulo: "Tutorial de técnica vocal: diafragma y respiración", canal: "Caro Guiral", vistas: 318871, megusta: 0 },
    },
    {
      html: `<h3>Las cualidades de la voz</h3><p>La voz tiene cualidades que el actor aprende a controlar para expresar cada emoción y cada personaje:</p>${tabla(["Cualidad", "Qué es", "Ejemplo expresivo"], [["Volumen (intensidad)", "fuerte o suave", "gritar de rabia, susurrar un secreto"], ["Tono (altura)", "agudo o grave", "agudo por nervios, grave por autoridad"], ["Timbre", "el «color» propio de cada voz", "nasal, ronca, dulce"], ["Ritmo y velocidad", "rápido o lento, con pausas", "hablar deprisa por miedo, lento por tristeza"], ["Entonación", "la melodía de la frase", "pregunta, exclamación, ironía"]])}<p>La <mark>pausa</mark> también es expresiva: un silencio en el momento justo crea tensión o subraya una idea.</p>`,
    },
    {
      html: `<h3>Proyección, dicción y articulación</h3><p>En un teatro, la voz debe llegar a la última fila sin gritar: es la <mark>proyección</mark>, que depende de la respiración, de la postura erguida y de dirigir la voz hacia delante usando los resonadores (pecho, boca, nariz). La <b>dicción</b> es pronunciar con claridad cada sonido; la <b>articulación</b>, mover bien labios, lengua y mandíbula. Se entrenan con <b>trabalenguas</b> («Tres tristes tigres…»), leyendo con un lápiz entre los dientes o exagerando las vocales. Cuidar la voz también es importante: beber agua, no gritar y no carraspear.</p>`,
      svg: filas("Ejercicios para la voz", [["Respirar", "inspirar 4, soltar en «sss»", "var(--inf)"], ["Resonar", "«mmm» con labios cerrados", "var(--bac)"], ["Articular", "trabalenguas despacio", "var(--sun)"], ["Proyectar", "decir un nombre a la pared", "var(--red)"], ["Cuidar", "agua, no gritar", "var(--leaf)"]]),
    },
    {
      html: `<h3>Expresión corporal: gesto, postura y mirada</h3><p>El <b>gesto</b> es el movimiento expresivo de cara, manos y cuerpo. La <b>expresión facial</b> comunica las emociones básicas (alegría, tristeza, miedo, ira, sorpresa, asco), que se reconocen en todas las culturas. La <b>postura</b> revela el carácter y el estado de ánimo: erguida y abierta transmite seguridad; encogida, timidez o miedo. La <mark>mirada</mark> dirige la atención del público: si un actor mira algo fijamente, el público también lo mira. En escena, cada gesto debe ser <b>claro y necesario</b>: los movimientos nerviosos sin intención distraen.</p>`,
      video: { id: "M61avi17J6k", titulo: "Domina tu rostro: 14 ejercicios gestuales y 6 emociones básicas", canal: "Fernando Suarez Teatro", vistas: 240361, megusta: 0 },
    },
    {
      html: `<h3>El cuerpo en el espacio</h3><p>El actor también se expresa con <b>dónde</b> y <b>cómo</b> se mueve. El movimiento tiene cualidades: puede ser <b>rápido o lento</b>, <b>fuerte o suave</b>, <b>directo o indirecto</b>, <b>fluido o entrecortado</b> (es el análisis de Rudolf Laban). Los <b>niveles</b> (alto, medio, bajo) indican poder: el personaje que está de pie domina al que está sentado o en el suelo. Las <b>distancias</b> entre personajes cuentan su relación: cerca en la intimidad, lejos en el conflicto. Y la <mark>presencia escénica</mark> es esa energía que hace que un intérprete atraiga la mirada aunque esté quieto.</p>`,
      svg: dos("Cualidades del movimiento según Laban", ["Opuesto A", ["rápido", "fuerte", "directo", "fluido", "nivel alto"], "var(--red)"], ["Opuesto B", ["lento", "suave", "indirecto", "entrecortado", "nivel bajo"], "var(--pen)"]),
    },
    {
      html: `<h3>Construir un personaje con el cuerpo y la voz</h3><p>Para crear un personaje el actor se pregunta: ¿qué edad tiene?, ¿qué carácter?, ¿qué quiere?, ¿cómo se siente? Y lo traduce en <b>decisiones físicas y vocales</b>: un anciano cansado camina despacio, con el centro de gravedad bajo y voz algo temblorosa; una jefa autoritaria se mueve poco, con gestos firmes y voz grave y pausada; un niño travieso es rápido, con tono agudo y cambios bruscos. Un buen ejercicio es buscar el <mark>centro</mark> del personaje: ¿desde dónde se mueve, desde la cabeza, el pecho, la barriga? Observar a la gente en la calle es la mejor escuela.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo se ve y se oye una emoción",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Tabla de cuatro emociones con su postura, gesto y voz: alegría, tristeza, miedo e ira">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["Alegría", "abierta, erguida", "sonrisa, ojos vivos", "aguda, rápida", "var(--sun)"], ["Tristeza", "hombros caídos", "mirada baja", "grave, lenta", "var(--inf)"], ["Miedo", "encogida, atrás", "ojos muy abiertos", "aguda, entrecortada", "var(--bac)"], ["Ira", "tensa, adelante", "ceño fruncido", "fuerte, cortante", "var(--red)"]].map(([e, p, g, v, c], i) => `<rect x="${20 + i * 162}" y="16" width="150" height="188" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${20 + i * 162}" y="16" width="150" height="38" rx="12" fill="${c}"/><text x="${95 + i * 162}" y="41" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" ${D}>${e}</text>${[["postura", p], ["gesto", g], ["voz", v]].map(([k, t], j) => `<text x="${95 + i * 162}" y="${80 + j * 46}" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${k}</text><text x="${95 + i * 162}" y="${98 + j * 46}" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${t}</text>`).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "Z7r0kYd6p38", titulo: "Actuación: cómo transmitir emociones y sentimientos", canal: "Pau Farías, Improvisación Teatral y Creatividad", vistas: 172727, megusta: 0, busqueda: "expresión corporal teatro ejercicios" },
  ejemplos: [
    { enunciado: "Di «No pienso ir» como tres personajes distintos: un niño enfadado, una reina y un adolescente cansado.", pasos: ["Niño enfadado: volumen alto, tono agudo, ritmo rápido, cruzado de brazos y pataleo.", "Reina: volumen medio, tono grave, muy pausado, cabeza alta, mirada por encima.", "Adolescente cansado: volumen bajo, tono plano, arrastrando las palabras, cuerpo caído."], resultado: "La misma frase cambia de sentido según voz y cuerpo." },
    { enunciado: "Planifica un calentamiento de 10 minutos para el grupo antes de un ensayo.", pasos: ["2 min: respiración diafragmática de pie, en círculo.", "3 min: movilidad articular de cabeza a pies.", "2 min: voz: resonar con «mmm» y trabalenguas.", "3 min: juego de energía en grupo (pasar una palmada en círculo cada vez más rápido)."], resultado: "Cuerpo activado, voz preparada y grupo concentrado." },
    { enunciado: "En una escena, el jefe despide a un empleado. ¿Cómo usarías los niveles y la distancia?", pasos: ["El jefe de pie (nivel alto) y el empleado sentado (nivel bajo): marca el poder.", "Al principio están cerca; cuando llega la mala noticia, el jefe se aleja.", "El empleado se queda solo en el centro: el público ve su aislamiento."], resultado: "Niveles y distancia cuentan la relación sin necesidad de palabras." },
  ],
  errores: [
    "Gritar para que te oigan: hay que proyectar con apoyo de la respiración, no forzar la garganta.",
    "Respirar levantando los hombros (respiración clavicular).",
    "Dar la espalda al público sin motivo o tapar la cara con las manos.",
    "Hacer gestos nerviosos sin intención (tocarse el pelo, balancearse).",
    "Saltarse el calentamiento: aumenta el riesgo de lesiones y de afonía.",
  ],
  ejercicios: [
    { q: "¿Por qué se dice que el cuerpo y la voz son el instrumento del actor?", sol: "Porque son sus herramientas de expresión, igual que el violín para un violinista; necesita conocerlos y entrenarlos." },
    { q: "Explica para qué sirven la relajación y el calentamiento.", sol: "La relajación elimina tensiones que bloquean voz y movimiento; el calentamiento activa el cuerpo, previene lesiones y concentra al grupo." },
    { q: "Describe la respiración diafragmática.", sol: "Al inspirar por la nariz el diafragma baja y el abdomen se hincha; al espirar, el abdomen vuelve despacio controlando la salida del aire." },
    { q: "Nombra cinco cualidades de la voz.", sol: "Volumen, tono, timbre, ritmo o velocidad y entonación." },
    { q: "Diferencia proyección y dicción.", sol: "Proyección: que la voz llegue lejos sin gritar. Dicción: pronunciar con claridad cada sonido." },
    { q: "Escribe dos trabalenguas para entrenar la articulación.", sol: "«Tres tristes tigres tragaban trigo en un trigal» y «Pablito clavó un clavito, ¿qué clavito clavó Pablito?» (u otros)." },
    { q: "¿Qué transmite una postura abierta y una cerrada?", sol: "Abierta y erguida: seguridad, alegría, confianza. Cerrada y encogida: timidez, miedo, tristeza." },
    { q: "Explica qué indican los niveles en escena.", sol: "La altura del cuerpo marca poder o estado: quien está más alto suele dominar a quien está sentado o en el suelo." },
    { q: "¿Qué es la presencia escénica?", sol: "La energía y concentración de un intérprete que atrae la atención del público incluso sin moverse." },
    { q: "Describe la voz y el movimiento de un personaje inventado: un pirata viejo.", sol: "Respuesta abierta. Ejemplo: camina balanceándose con una pierna rígida, encorvado, voz grave y ronca, ritmo lento con risas bruscas." },
  ],
  quiz: [
    { q: "La comunicación no verbal incluye…", o: ["gestos y postura", "solo palabras", "el guion"], a: 0, e: "Y mirada, distancia…" },
    { q: "El diafragma es…", o: ["un músculo bajo los pulmones", "un hueso", "parte de la laringe"], a: 0, e: "Clave para respirar." },
    { q: "Al inspirar con el diafragma…", o: ["el abdomen se hincha", "los hombros suben", "el pecho se hunde"], a: 0, e: "El diafragma baja." },
    { q: "El tono de la voz es…", o: ["agudo o grave", "fuerte o suave", "rápido o lento"], a: 0, e: "La altura." },
    { q: "El volumen de la voz es…", o: ["fuerte o suave", "agudo o grave", "su color"], a: 0, e: "La intensidad." },
    { q: "Hacer que la voz llegue a la última fila sin gritar es…", o: ["proyectar", "susurrar", "articular"], a: 0, e: "Con apoyo de la respiración." },
    { q: "Los trabalenguas sirven para…", o: ["la dicción", "la relajación", "la escenografía"], a: 0, e: "Entrenan la articulación." },
    { q: "Una postura encogida suele transmitir…", o: ["miedo o timidez", "poder", "alegría"], a: 0, e: "Cuerpo cerrado." },
    { q: "Quien analizó las cualidades del movimiento fue…", o: ["Laban", "Brecht", "Shakespeare"], a: 0, e: "Rudolf Laban." },
    { q: "Un personaje en nivel alto frente a otro sentado suele mostrar…", o: ["poder", "debilidad", "nada"], a: 0, e: "Los niveles cuentan relaciones." },
  ],
  examen: [
    { q: "El timbre de la voz es…", o: ["su color propio", "su volumen", "su velocidad"], a: 0, e: "Lo que hace reconocible una voz." },
    { q: "La respiración clavicular…", o: ["tensa el cuello y da poco aire", "es la mejor para cantar", "baja el diafragma"], a: 0, e: "Se evita en escena." },
    { q: "Para cuidar la voz conviene…", o: ["beber agua y no gritar", "carraspear a menudo", "hablar siempre muy alto"], a: 0, e: "Higiene vocal." },
  ],
  feynman: ["Por qué el cuerpo y la voz son el instrumento del actor", "Cómo se hace la respiración diafragmática", "Las cualidades de la voz y del movimiento", "Cómo construir un personaje con el cuerpo y la voz"],
  mapa: mapa("CUERPO Y VOZ", "var(--red)", [
    ["Preparación", "relajación · calentamiento", "var(--leaf)"],
    ["Voz", "respiración · tono · proyección", "var(--red)"],
    ["Cuerpo", "gesto · postura · mirada", "var(--sun)"],
    ["Espacio", "niveles · distancias · Laban", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Respiración diafragmática", "Inspirar bajando el diafragma e hinchando el abdomen."],
    ["Proyección", "Hacer llegar la voz lejos sin gritar."],
    ["Dicción", "Pronunciar con claridad cada sonido."],
    ["Tono", "Altura de la voz: aguda o grave."],
    ["Timbre", "Color propio de cada voz."],
    ["Comunicación no verbal", "Gestos, postura, mirada y distancia."],
    ["Niveles", "Alto, medio y bajo: muestran poder o estado del personaje."],
    ["Presencia escénica", "Energía que atrae la mirada del público."],
  ],
  familias: ["Leed en voz alta un texto corto cambiando la emoción y adivinad cuál es.", "Practicad juntos cinco minutos de respiración diafragmática antes de dormir.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): conciencia corporal, técnica vocal, expresión corporal y construcción del personaje.",
    ideas: ["Rutina de calentamiento dirigida cada sesión por un alumno distinto.", "Juego del espejo por parejas para la observación corporal.", "Concurso de trabalenguas con grabación y autoevaluación."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Análisis del movimiento de Laban, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Rudolf_von_Laban" },
  ],
  revisado: "2026-11-12",
};
